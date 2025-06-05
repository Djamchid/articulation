// game.js
// Logique principale du jeu de prononciation

import lexique from './lexique.js';
import { AudioManager } from './audio-manager.js';

class PronunciationGame {
    constructor() {
        this.audioManager = new AudioManager();
        this.state = {
            currentWord: '',
            wordCount: 1,
            attemptCount: 1,
            score: 0,
            recognizedWord: '',
            currentScreen: 'calibration',
            wordHistory: [],
            isCalibrated: false
        };
        
        // Liste des mots du jeu (tirés du lexique)
        this.wordList = Object.keys(lexique).filter(word => 
            word.length >= 4 && word.length <= 10
        );
        
        // Mélanger la liste
        this.shuffleArray(this.wordList);
        
        // Limiter à 30 mots variés
        this.wordList = this.wordList.slice(0, 30);
        
        this.timers = [];
        this.preparationTime = 3000; // 3 secondes
        this.listeningTimeout = null;
        
        this.bindEvents();
    }
    
    bindEvents() {
        // Exposer les méthodes pour les onclick HTML
        window.game = this;
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Calibration du microphone
    async startCalibration() {
        const calibrateBtn = document.getElementById('calibrate-btn');
        const startBtn = document.getElementById('start-btn');
        const icon = document.getElementById('calibration-icon');
        const visualizer = document.getElementById('calibration-visualizer');
        
        calibrateBtn.disabled = true;
        calibrateBtn.textContent = '🎤 Calibration...';
        
        // Demander l'accès au micro
        const micAccess = await this.audioManager.requestMicrophoneAccess();
        if (!micAccess) {
            calibrateBtn.disabled = false;
            calibrateBtn.textContent = '🎤 Réessayer';
            return;
        }
        
        icon.classList.remove('inactive');
        icon.classList.add('active');
        visualizer.classList.add('active');
        
        // Démarrer la visualisation
        this.audioManager.startVisualization();
        
        // Attendre 3 secondes pour la calibration
        setTimeout(() => {
            this.state.isCalibrated = true;
            calibrateBtn.style.display = 'none';
            startBtn.style.display = 'inline-flex';
            
            // Test de reconnaissance
            this.testSpeechRecognition();
        }, 3000);
    }
    
    // Test rapide de la reconnaissance vocale
    async testSpeechRecognition() {
        const result = await this.audioManager.startListening(
            (result) => {
                console.log('Test réussi:', result);
                this.audioManager.stopListening();
            },
            null,
            (error) => {
                console.error('Erreur test:', error);
            },
            null
        );
        
        // Arrêter après 2 secondes
        setTimeout(() => {
            this.audioManager.stopListening();
        }, 2000);
    }
    
    // Démarrage du jeu
    startGame() {
        if (!this.state.isCalibrated) {
            alert('Veuillez d\'abord calibrer le microphone');
            return;
        }
        
        this.state.currentWord = this.getNextWord();
        this.showScreen('display-screen');
        this.updateDisplay();
        this.startPreparationCountdown();
    }
    
    // Obtenir le prochain mot
    getNextWord() {
        const index = this.state.wordCount - 1;
        return this.wordList[index % this.wordList.length].toUpperCase();
    }
    
    // Affichage des écrans
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        this.state.currentScreen = screenId;
    }
    
    // Mise à jour de l'affichage
    updateDisplay() {
        // Mettre à jour le mot affiché
        document.querySelectorAll('[id$="-word"]').forEach(el => {
            el.textContent = this.state.currentWord;
        });
        
        // Mettre à jour la progression
        const progressText = `Mot ${this.state.wordCount}/30 • Score: ${this.state.score}/${this.state.wordCount - 1}`;
        document.querySelectorAll('.game-progress').forEach(el => {
            el.textContent = progressText;
        });
        
        // Mettre à jour le compteur d'essais
        const attemptText = `Essai ${this.state.attemptCount}/3`;
        document.querySelectorAll('.attempt-counter').forEach(el => {
            el.textContent = attemptText;
            el.classList.toggle('visible', this.state.attemptCount > 1);
        });
    }
    
    // Compte à rebours de préparation
    startPreparationCountdown() {
        this.clearTimers();
        const progressBar = document.getElementById('preparation-progress');
        const textElement = document.getElementById('preparation-text');
        let progress = 0;
        const interval = 20;
        const steps = this.preparationTime / interval;
        
        const timer = setInterval(() => {
            progress += 100 / steps;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
            
            const remaining = Math.ceil((this.preparationTime - (progress * this.preparationTime / 100)) / 1000);
            textElement.textContent = `Ouverture du micro dans ${remaining}s`;
            
            if (progress >= 100) {
                clearInterval(timer);
                this.startListening();
            }
        }, interval);
        
        this.timers.push(timer);
    }
    
    // Démarrage de l'écoute
    async startListening() {
        this.showScreen('listening-screen');
        this.updateDisplay();
        
        const feedbackEl = document.getElementById('interim-transcript');
        const icon = document.getElementById('listening-icon');
        const visualizer = document.getElementById('listening-visualizer');
        
        icon.classList.add('recording');
        
        // Démarrer la reconnaissance vocale
        const started = await this.audioManager.startListening(
            (result) => this.handleRecognitionResult(result),
            (interim) => {
                feedbackEl.textContent = interim;
            },
            (error) => this.handleRecognitionError(error),
            () => this.handleRecognitionEnd()
        );
        
        if (!started) {
            this.showError('Impossible de démarrer la reconnaissance vocale');
            return;
        }
        
        // Timeout de sécurité (6 secondes max)
        this.listeningTimeout = setTimeout(() => {
            this.stopListening();
        }, 6000);
    }
    
    // Arrêt de l'écoute
    stopListening() {
        if (this.listeningTimeout) {
            clearTimeout(this.listeningTimeout);
            this.listeningTimeout = null;
        }
        
        this.audioManager.stopListening();
    }
    
    // Gestion du résultat de reconnaissance
    handleRecognitionResult(result) {
        console.log('Résultat:', result);
        
        this.stopListening();
        this.state.recognizedWord = result.transcript;
        
        // Afficher l'écran de traitement
        this.showScreen('processing-screen');
        this.updateDisplay();
        
        // Analyser le résultat après un court délai
        setTimeout(() => {
            this.analyzeResult(result);
        }, 1000);
    }
    
    // Analyse du résultat
    analyzeResult(result) {
        const recognized = result.transcript.toUpperCase();
        const expected = this.state.currentWord.toUpperCase();
        
        // Vérifier la correspondance exacte
        if (recognized === expected) {
            this.handleSuccess();
            return;
        }
        
        // Vérifier les homophones
        const wordData = lexique[expected.toLowerCase()];
        if (wordData && wordData.homophones) {
            const isHomophone = wordData.homophones.some(h => 
                h.toUpperCase() === recognized
            );
            
            if (isHomophone) {
                this.handleHomophone(recognized);
                return;
            }
        }
        
        // Vérifier dans les alternatives
        if (result.alternatives && result.alternatives.length > 1) {
            for (let alt of result.alternatives) {
                if (alt.transcript.toUpperCase() === expected) {
                    this.handleSuccess();
                    return;
                }
            }
        }
        
        // Échec
        this.handleError();
    }
    
    // Gestion du succès
    handleSuccess() {
        this.state.score++;
        this.state.wordHistory.push({
            word: this.state.currentWord,
            recognized: this.state.recognizedWord,
            success: true,
            attempts: this.state.attemptCount
        });
        
        this.showScreen('result-screen');
        this.updateDisplay();
        
        const contentEl = document.getElementById('result-content');
        contentEl.innerHTML = `
            <div class="word-display success">${this.state.currentWord}</div>
            <div class="result-icon">✓</div>
            <div class="instruction emphasized">PARFAIT !</div>
            <div style="margin: 20px 0; color: var(--color-text-secondary); font-size: 14px;">
                Prononciation correcte du premier coup
            </div>
        `;
        
        document.getElementById('result-footer').innerHTML = '';
        
        // Passer au mot suivant après 2 secondes
        setTimeout(()
