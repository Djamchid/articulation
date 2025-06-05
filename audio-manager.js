// audio-manager.js
// Gestion de l'API Web Speech et de l'analyse audio

export class AudioManager {
    constructor() {
        this.recognition = null;
        this.audioContext = null;
        this.analyser = null;
        this.microphone = null;
        this.dataArray = null;
        this.isListening = false;
        this.visualizerAnimation = null;
        this.onResultCallback = null;
        this.onInterimCallback = null;
        this.onErrorCallback = null;
        this.onEndCallback = null;
        
        this.initializeSpeechRecognition();
    }
    
    // Initialisation de l'API de reconnaissance vocale
    initializeSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            console.error('API de reconnaissance vocale non supportée');
            return false;
        }
        
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'fr-FR';
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 3;
        
        // Événements de reconnaissance
        this.recognition.onresult = (event) => this.handleResult(event);
        this.recognition.onerror = (event) => this.handleError(event);
        this.recognition.onend = () => this.handleEnd();
        this.recognition.onaudiostart = () => console.log('Audio capturé');
        this.recognition.onaudioend = () => console.log('Audio terminé');
        this.recognition.onspeechstart = () => console.log('Parole détectée');
        this.recognition.onspeechend = () => console.log('Parole terminée');
        
        return true;
    }
    
    // Demande d'accès au microphone et initialisation de l'analyse audio
    async requestMicrophoneAccess() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // Création du contexte audio
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            this.microphone = this.audioContext.createMediaStreamSource(stream);
            
            // Configuration de l'analyseur
            this.analyser.fftSize = 256;
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            
            // Connexion du microphone à l'analyseur
            this.microphone.connect(this.analyser);
            
            return true;
        } catch (error) {
            console.error('Erreur d\'accès au microphone:', error);
            if (this.onErrorCallback) {
                this.onErrorCallback({
                    error: 'not-allowed',
                    message: 'Accès au microphone refusé'
                });
            }
            return false;
        }
    }
    
    // Démarrage de l'écoute
    async startListening(onResult, onInterim, onError, onEnd) {
        if (!this.recognition) {
            console.error('Reconnaissance vocale non initialisée');
            return false;
        }
        
        this.onResultCallback = onResult;
        this.onInterimCallback = onInterim;
        this.onErrorCallback = onError;
        this.onEndCallback = onEnd;
        
        // S'assurer que le micro est accessible
        if (!this.audioContext) {
            const micAccess = await this.requestMicrophoneAccess();
            if (!micAccess) return false;
        }
        
        try {
            this.isListening = true;
            this.recognition.start();
            this.startVisualization();
            return true;
        } catch (error) {
            console.error('Erreur de démarrage:', error);
            this.isListening = false;
            return false;
        }
    }
    
    // Arrêt de l'écoute
    stopListening() {
        if (this.recognition && this.isListening) {
            this.isListening = false;
            this.recognition.stop();
            this.stopVisualization();
        }
    }
    
    // Gestion des résultats de reconnaissance
    handleResult(event) {
        const results = event.results;
        const lastResult = results[results.length - 1];
        
        if (lastResult.isFinal) {
            // Résultat final
            const transcript = lastResult[0].transcript.trim();
            const confidence = lastResult[0].confidence;
            
            // Récupérer toutes les alternatives
            const alternatives = [];
            for (let i = 0; i < lastResult.length; i++) {
                alternatives.push({
                    transcript: lastResult[i].transcript.trim(),
                    confidence: lastResult[i].confidence
                });
            }
            
            if (this.onResultCallback) {
                this.onResultCallback({
                    transcript: transcript.toUpperCase(),
                    confidence: confidence,
                    alternatives: alternatives
                });
            }
        } else {
            // Résultat intermédiaire
            const interim = lastResult[0].transcript;
            if (this.onInterimCallback) {
                this.onInterimCallback(interim);
            }
        }
    }
    
    // Gestion des erreurs
    handleError(event) {
        console.error('Erreur de reconnaissance:', event.error);
        
        let message = 'Erreur de reconnaissance vocale';
        switch (event.error) {
            case 'no-speech':
                message = 'Aucune parole détectée';
                break;
            case 'audio-capture':
                message = 'Problème de capture audio';
                break;
            case 'not-allowed':
                message = 'Microphone non autorisé';
                break;
            case 'network':
                message = 'Erreur de connexion';
                break;
        }
        
        if (this.onErrorCallback) {
            this.onErrorCallback({
                error: event.error,
                message: message
            });
        }
    }
    
    // Fin de la reconnaissance
    handleEnd() {
        this.isListening = false;
        this.stopVisualization();
        
        if (this.onEndCallback) {
            this.onEndCallback();
        }
    }
    
    // Visualisation du niveau audio
    startVisualization() {
        const visualize = () => {
            if (!this.isListening) return;
            
            this.visualizerAnimation = requestAnimationFrame(visualize);
            
            // Récupérer les données audio
            this.analyser.getByteFrequencyData(this.dataArray);
            
            // Calculer le niveau moyen
            let sum = 0;
            for (let i = 0; i < this.dataArray.length; i++) {
                sum += this.dataArray[i];
            }
            const average = sum / this.dataArray.length;
            const normalizedLevel = average / 255;
            
            // Mettre à jour la visualisation
            this.updateVisualizer(normalizedLevel);
            
            // Mettre à jour le niveau de calibration si nécessaire
            if (document.getElementById('calibration-level')) {
                const percentage = Math.round(normalizedLevel * 100);
                document.getElementById('calibration-level').style.width = `${percentage}%`;
                document.getElementById('calibration-percentage').textContent = percentage;
            }
        };
        
        visualize();
    }
    
    // Arrêt de la visualisation
    stopVisualization() {
        if (this.visualizerAnimation) {
            cancelAnimationFrame(this.visualizerAnimation);
            this.visualizerAnimation = null;
        }
        
        // Réinitialiser les barres
        const bars = document.querySelectorAll('.audio-visualizer.active .audio-bar');
        bars.forEach(bar => {
            bar.style.height = '20%';
        });
    }
    
    // Mise à jour du visualiseur
    updateVisualizer(level) {
        const visualizers = document.querySelectorAll('.audio-visualizer.active');
        visualizers.forEach(visualizer => {
            const bars = visualizer.querySelectorAll('.audio-bar');
            bars.forEach((bar, index) => {
                // Créer un effet d'onde
                const offset = Math.sin(Date.now() * 0.001 + index * 0.5) * 0.3;
                const height = Math.max(10, Math.min(90, (level + offset) * 100));
                bar.style.height = `${height}%`;
                
                // Changer la couleur selon le niveau
                if (level > 0.7) {
                    bar.style.background = 'var(--color-error)';
                } else if (level > 0.4) {
                    bar.style.background = 'var(--color-success)';
                } else {
                    bar.style.background = 'var(--color-primary)';
                }
            });
        });
        
        // Animer l'icône du micro selon le niveau
        const icon = document.querySelector('.icon.active');
        if (icon && level > 0.3) {
            icon.style.transform = `scale(${1 + level * 0.2})`;
        }
    }
    
    // Obtenir le niveau audio actuel
    getAudioLevel() {
        if (!this.analyser || !this.dataArray) return 0;
        
        this.analyser.getByteFrequencyData(this.dataArray);
        let sum = 0;
        for (let i = 0; i < this.dataArray.length; i++) {
            sum += this.dataArray[i];
        }
        return sum / (this.dataArray.length * 255);
    }
    
    // Test du microphone pour la calibration
    async testMicrophone(duration = 3000) {
        const levels = [];
        const startTime = Date.now();
        
        return new Promise((resolve) => {
            const checkLevel = () => {
                const level = this.getAudioLevel();
                levels.push(level);
                
                if (Date.now() - startTime < duration) {
                    requestAnimationFrame(checkLevel);
                } else {
                    // Calculer le niveau moyen
                    const avgLevel = levels.reduce((a, b) => a + b, 0) / levels.length;
                    resolve(avgLevel);
                }
            };
            
            checkLevel();
        });
    }
    
    // Nettoyage des ressources
    cleanup() {
        this.stopListening();
        
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        
        if (this.microphone) {
            this.microphone.disconnect();
            this.microphone = null;
        }
        
        this.analyser = null;
        this.dataArray = null;
    }
}

// Export pour utilisation globale
window.AudioManager = AudioManager;
