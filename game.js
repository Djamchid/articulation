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
        this.preparationTime = 2000; // 2 secondes
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
        setTimeout(() => {
            this.nextWord();
        }, 2000);
    }
    
    // Gestion des homophones
    handleHomophone(recognized) {
        this.state.score++;
        this.state.wordHistory.push({
            word: this.state.currentWord,
            recognized: recognized,
            success: true,
            homophone: true,
            attempts: this.state.attemptCount
        });
        
        this.showScreen('result-screen');
        this.updateDisplay();
        
        const contentEl = document.getElementById('result-content');
        
        // Animation en deux temps
        contentEl.innerHTML = `
            <div style="font-size: 14px; color: #64748b; margin-bottom: 8px;">
                J'ai entendu :
            </div>
            <div class="word-display homophone">${recognized}</div>
            <div style="font-size: 14px; color: #64748b; margin: 16px 0;">
                ↓ Homophone de ↓
            </div>
            <div class="word-display">${this.state.currentWord}</div>
            <div class="instruction">Analyse phonétique...</div>
        `;
        
        // Après 2 secondes, afficher le succès
        setTimeout(() => {
            contentEl.innerHTML = `
                <div class="word-display success">${this.state.currentWord}</div>
                <div class="result-icon">🔀</div>
                <div class="instruction emphasized">CORRECT !</div>
                <div style="margin: 20px 0; color: var(--color-text-secondary); font-size: 14px;">
                    Prononciation phonétiquement identique
                </div>
            `;
            
            setTimeout(() => {
                this.nextWord();
            }, 2000);
        }, 2000);
    }
    
    // Gestion de l'échec
    handleError() {
        this.showScreen('result-screen');
        
        const contentEl = document.getElementById('result-content');
        const footerEl = document.getElementById('result-footer');
        
        contentEl.innerHTML = `
            <div style="font-size: 14px; color: #64748b; margin-bottom: 8px;">
                Attendu :
            </div>
            <div class="word-display">${this.state.currentWord}</div>
            <div style="font-size: 14px; color: #64748b; margin: 16px 0 8px 0;">
                Reconnu :
            </div>
            <div class="word-display error">${this.state.recognizedWord || 'Aucun mot détecté'}</div>
        `;
        
        if (this.state.attemptCount < 3) {
            footerEl.innerHTML = `
                <button class="button warning" onclick="game.retryWord()">
                    ⚠️ Réessayer (${3 - this.state.attemptCount} essai${3 - this.state.attemptCount > 1 ? 's' : ''} restant${3 - this.state.attemptCount > 1 ? 's' : ''})
                </button>
                <button class="button secondary" onclick="game.skipWord()">
                    ⏭️ Passer
                </button>
            `;
        } else {
            footerEl.innerHTML = `
                <div style="margin: 16px 0; color: var(--color-text-secondary); font-size: 14px;">
                    Nombre maximum d'essais atteint
                </div>
                <button class="button secondary" onclick="game.skipWord()">
                    ⏭️ Mot suivant
                </button>
            `;
        }
    }
    
    // Gestion des erreurs de reconnaissance
    handleRecognitionError(error) {
        this.stopListening();
        this.showScreen('error-screen');
        this.updateDisplay();
        
        const messageEl = document.getElementById('error-message');
        const footerEl = document.getElementById('error-footer');
        
        if (error.error === 'no-speech') {
            messageEl.innerHTML = `
                <div class="error-title">🔇 Aucun son détecté</div>
                Parlez plus fort ou rapprochez-vous du microphone
            `;
        } else if (error.error === 'network') {
            messageEl.innerHTML = `
                <div class="error-title">⚠️ Problème de connexion</div>
                Vérifiez votre connexion internet
            `;
        } else {
            messageEl.innerHTML = `
                <div class="error-title">❌ Erreur</div>
                ${error.message}
            `;
        }
        
        footerEl.innerHTML = `
            <button class="button warning" onclick="game.retryWord()">
                ⚠️ Réessayer
            </button>
            <button class="button secondary" onclick="game.skipWord()">
                ⏭️ Passer ce mot
            </button>
        `;
    }
    
    // Fin de la reconnaissance
    handleRecognitionEnd() {
        // Si pas de résultat obtenu
        if (this.state.currentScreen === 'listening-screen') {
            this.handleRecognitionError({
                error: 'no-speech',
                message: 'Aucune parole détectée'
            });
        }
    }
    
    // Réessayer le mot actuel
    retryWord() {
        this.state.attemptCount++;
        this.showScreen('display-screen');
        this.updateDisplay();
        this.startPreparationCountdown();
    }
    
    // Passer au mot suivant
    skipWord() {
        this.state.wordHistory.push({
            word: this.state.currentWord,
            recognized: this.state.recognizedWord || 'Passé',
            success: false,
            skipped: true,
            attempts: this.state.attemptCount
        });
        
        this.nextWord();
    }
    
    // Mot suivant
    nextWord() {
        if (this.state.wordCount >= 30) {
            this.showFinalScore();
            return;
        }
        
        this.state.wordCount++;
        this.state.attemptCount = 1;
        this.state.currentWord = this.getNextWord();
        this.state.recognizedWord = '';
        
        // Afficher un score intermédiaire tous les 10 mots
        if (this.state.wordCount % 10 === 1 && this.state.wordCount > 1) {
            this.showIntermediateScore();
        } else {
            this.showScreen('display-screen');
            this.updateDisplay();
            this.startPreparationCountdown();
        }
    }
    
    // Score intermédiaire
    showIntermediateScore() {
        const percentage = Math.round((this.state.score / (this.state.wordCount - 1)) * 100);
        
        this.showScreen('result-screen');
        document.getElementById('result-content').innerHTML = `
            <div class="instruction">Score intermédiaire</div>
            <div class="score-display">${this.state.score}/${this.state.wordCount - 1}</div>
            <div class="instruction" style="font-size: 18px; color: var(--color-success);">
                ${percentage}% de réussite
            </div>
            <div style="margin: 20px 0; color: var(--color-text-secondary); font-size: 14px;">
                ${this.state.wordCount === 11 ? 'Excellent début !' : 'Continuez comme ça !'}
            </div>
        `;
        
        document.getElementById('result-footer').innerHTML = `
            <button class="button success" onclick="game.continueGame()">
                ➡️ Continuer
            </button>
        `;
    }
    
    // Continuer après le score intermédiaire
    continueGame() {
        this.showScreen('display-screen');
        this.updateDisplay();
        this.startPreparationCountdown();
    }
    
    // Score final
    showFinalScore() {
        this.showScreen('final-screen');
        const percentage = Math.round((this.state.score / 30) * 100);
        
        document.getElementById('final-score').textContent = `${this.state.score}/30`;
        document.getElementById('final-percentage').textContent = `${percentage}% de réussite`;
        
        // Message personnalisé selon le score
        let message = '';
        if (percentage >= 90) {
            message = 'Excellente prononciation !';
        } else if (percentage >= 70) {
            message = 'Très bonne performance !';
        } else if (percentage >= 50) {
            message = 'Bon travail, continuez à pratiquer !';
        } else {
            message = 'La pratique rend parfait !';
        }
        
        document.querySelector('#final-screen .game-content div:last-child').innerHTML = 
            `${message}<br />Votre prononciation s'améliore`;
    }
    
    // Afficher/masquer les détails
    toggleDetails() {
        const historyEl = document.getElementById('word-history');
        historyEl.classList.toggle('visible');
        
        if (historyEl.classList.contains('visible') && !historyEl.innerHTML) {
            // Générer l'historique
            let html = '';
            this.state.wordHistory.forEach((item, index) => {
                const status = item.success ? 'success' : 'error';
                const icon = item.success ? '✓' : '✗';
                const info = item.homophone ? ' (homophone)' : item.skipped ? ' (passé)' : '';
                
                html += `
                    <div class="word-item ${status}">
                        <span>${index + 1}. ${item.word}</span>
                        <span>${icon} ${item.recognized || '-'}${info}</span>
                    </div>
                `;
            });
            historyEl.innerHTML = html;
        }
    }
    
    // Redémarrer le jeu
    restartGame() {
        this.state = {
            currentWord: '',
            wordCount: 1,
            attemptCount: 1,
            score: 0,
            recognizedWord: '',
            currentScreen: 'display-screen',
            wordHistory: [],
            isCalibrated: true
        };
        
        this.shuffleArray(this.wordList);
        this.clearTimers();
        this.startGame();
    }
    
    // Afficher une erreur
    showError(message) {
        this.showScreen('error-screen');
        document.getElementById('error-message').innerHTML = `
            <div class="error-title">❌ Erreur</div>
            ${message}
        `;
        
        document.getElementById('error-footer').innerHTML = `
            <button class="button secondary" onclick="game.retryWord()">
                ⚠️ Réessayer
            </button>
        `;
    }
    
    // Nettoyer les timers
    clearTimers() {
        this.timers.forEach(timer => clearInterval(timer));
        this.timers = [];
        
        if (this.listeningTimeout) {
            clearTimeout(this.listeningTimeout);
            this.listeningTimeout = null;
        }
    }
    
    // Nettoyage à la fermeture
    cleanup() {
        this.clearTimers();
        this.audioManager.cleanup();
    }
}

// Initialisation du jeu
document.addEventListener('DOMContentLoaded', () => {
    const game = new PronunciationGame();
    
    // Nettoyage à la fermeture
    window.addEventListener('beforeunload', () => {
        game.cleanup();
    });
});
