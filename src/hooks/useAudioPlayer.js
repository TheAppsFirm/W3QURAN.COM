/**
 * useAudioPlayer Hook
 * Single Responsibility: Manage Quran audio playback
 * Uses Al-Quran Cloud API for audio URLs
 */

import { useState, useEffect, useRef, useCallback } from 'react';

// Audio CDN base URL from Al-Quran Cloud - using Alafasy by default
const AUDIO_CDN = 'https://cdn.islamic.network/quran/audio/128';

// Alternative audio sources
const AUDIO_SOURCES = {
  'ar.alafasy': 'https://cdn.islamic.network/quran/audio/128/ar.alafasy',
  'ar.abdurrahmaansudais': 'https://cdn.islamic.network/quran/audio/128/ar.abdurrahmaansudais',
  'ar.abdulsamad': 'https://cdn.islamic.network/quran/audio/128/ar.abdulsamad',
  'ar.husary': 'https://cdn.islamic.network/quran/audio/128/ar.husary',
  'ar.minshawi': 'https://cdn.islamic.network/quran/audio/128/ar.minshawi',
  'ar.shaatree': 'https://cdn.islamic.network/quran/audio/128/ar.shaatree',
};

// Popular reciters with their identifiers
export const RECITERS = {
  'ar.alafasy': { name: 'Mishary Rashid Alafasy', country: 'Kuwait' },
  'ar.abdurrahmaansudais': { name: 'Abdul Rahman Al-Sudais', country: 'Saudi Arabia' },
  'ar.abdulsamad': { name: 'Abdul Samad', country: 'Egypt' },
  'ar.shaatree': { name: 'Abu Bakr Al-Shatri', country: 'Saudi Arabia' },
  'ar.husary': { name: 'Mahmoud Khalil Al-Husary', country: 'Egypt' },
  'ar.minshawi': { name: 'Mohamed Siddiq Al-Minshawi', country: 'Egypt' },
};

// Verse counts per surah (index 0 is unused, index 1 = Al-Fatiha with 7 verses, etc.)
const VERSE_COUNTS = [
  0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
  111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
  54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49,
  62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28,
  28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
];

/**
 * Calculate global ayah number (1-6236) from surah and ayah
 * @param {number} surahId - Surah number (1-114)
 * @param {number} ayahNum - Ayah number within surah
 * @returns {number} - Global ayah number
 */
function getGlobalAyahNumber(surahId, ayahNum) {
  let globalAyah = 0;
  for (let i = 1; i < surahId; i++) {
    globalAyah += VERSE_COUNTS[i];
  }
  return globalAyah + ayahNum;
}

/**
 * Get audio URL for a specific verse
 * @param {number} surahId - Surah number (1-114)
 * @param {number} ayahNum - Ayah number
 * @param {string} reciterId - Reciter identifier
 * @returns {string} - Audio URL
 */
export function getAudioUrl(surahId, ayahNum, reciterId = 'ar.alafasy') {
  const globalAyah = getGlobalAyahNumber(surahId, ayahNum);
  const baseUrl = AUDIO_SOURCES[reciterId] || AUDIO_SOURCES['ar.alafasy'];
  return `${baseUrl}/${globalAyah}.mp3`;
}

/**
 * Hook for managing audio playback
 * @param {Object} options - { surahId, totalVerses, reciterId }
 * @returns {Object} - Audio player state and controls
 */
export function useAudioPlayer(options = {}) {
  const {
    surahId = 1,
    totalVerses = 7,
    reciterId = 'ar.alafasy',
    onVerseChange = null,
  } = options;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);
  const currentUrlRef = useRef('');
  const playPromiseRef = useRef(null);

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Initialize audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      console.error('Audio failed to load');
      setError('Failed to load audio. Please try again.');
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handleEnded = () => {
      // Move to next ayah if available
      setCurrentAyah((prev) => {
        if (prev < totalVerses) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return 1;
        }
      });
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [totalVerses]);

  // Reset/clamp when surah or total verse count changes
  useEffect(() => {
    setError(null);
    setCurrentAyah((prev) => (prev > totalVerses ? 1 : prev));
    setIsPlaying(false);
  }, [surahId, totalVerses]);

  // Load audio when source changes (surahId, currentAyah, reciterId)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !surahId) return;

    const url = getAudioUrl(surahId, currentAyah, reciterId);

    // Only reload if URL actually changed
    if (currentUrlRef.current === url) return;

    currentUrlRef.current = url;

    // Pause current playback before loading new source
    audio.pause();

    audio.src = url;
    audio.load();

    // Notify parent of verse change
    if (onVerseChange) {
      onVerseChange(currentAyah);
    }
  }, [surahId, currentAyah, reciterId, onVerseChange]);

  // Handle play/pause separately to avoid race conditions
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentUrlRef.current) return;

    if (isPlaying) {
      // Wait for audio to be ready before playing
      const attemptPlay = () => {
        // Cancel any pending play promise tracking
        playPromiseRef.current = audio.play();

        if (playPromiseRef.current !== undefined) {
          playPromiseRef.current
            .then(() => {
              playPromiseRef.current = null;
            })
            .catch((err) => {
              playPromiseRef.current = null;
              // AbortError is expected when source changes - ignore it
              if (err.name === 'AbortError') {
                return;
              }
              console.error('Playback error:', err);
              setError('Playback failed. Tap play to retry.');
              setIsPlaying(false);
            });
        }
      };

      // If audio is ready, play immediately; otherwise wait for canplay
      if (audio.readyState >= 3) {
        attemptPlay();
      } else {
        const handleCanPlay = () => {
          if (isPlayingRef.current) {
            attemptPlay();
          }
          audio.removeEventListener('canplaythrough', handleCanPlay);
        };
        audio.addEventListener('canplaythrough', handleCanPlay);

        return () => {
          audio.removeEventListener('canplaythrough', handleCanPlay);
        };
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentAyah, surahId, reciterId]);

  // Play/Pause toggle - just toggle the state, let useEffect handle actual playback
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setError(null);
    setIsPlaying((prev) => !prev);
  }, []);

  // Play specific ayah
  const playAyah = useCallback((ayahNum) => {
    setError(null);
    setCurrentAyah(ayahNum);
    setIsPlaying(true);
  }, []);

  // Skip to next ayah
  const nextAyah = useCallback(() => {
    if (currentAyah < totalVerses) {
      setCurrentAyah((prev) => prev + 1);
    }
  }, [currentAyah, totalVerses]);

  // Skip to previous ayah
  const prevAyah = useCallback(() => {
    if (currentAyah > 1) {
      setCurrentAyah((prev) => prev - 1);
    }
  }, [currentAyah]);

  // Stop playback
  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentAyah(1);
  }, []);

  return {
    isPlaying,
    isLoading,
    error,
    currentAyah,
    togglePlay,
    playAyah,
    nextAyah,
    prevAyah,
    stop,
    setCurrentAyah,
  };
}

// ============================================
// Translation Audio (Text-to-Speech)
// ============================================

// Language codes for Web Speech API
const TTS_LANGUAGES = {
  'ur': 'ur-PK',    // Urdu
  'en': 'en-US',    // English
  'hi': 'hi-IN',    // Hindi
  'ar': 'ar-SA',    // Arabic
  'bn': 'bn-BD',    // Bengali
  'tr': 'tr-TR',    // Turkish
  'id': 'id-ID',    // Indonesian
  'fr': 'fr-FR',    // French
  'de': 'de-DE',    // German
  'ta': 'ta-IN',    // Tamil
  'ml': 'ml-IN',    // Malayalam
  'ru': 'ru-RU',    // Russian
};

// Get language code from translation ID
function getLanguageFromTranslation(translationId) {
  if (!translationId) return 'en';
  const langCode = translationId.split('.')[0];
  return langCode || 'en';
}

/**
 * Hook for Text-to-Speech translation audio
 * Uses Web Speech API to read translations aloud
 */
export function useTranslationAudio(options = {}) {
  const {
    translationId = 'en.sahih',
    rate = 0.9,        // Speech rate (0.1 to 10)
    pitch = 1,         // Pitch (0 to 2)
    volume = 1,        // Volume (0 to 1)
  } = options;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [currentVoice, setCurrentVoice] = useState(null);
  const utteranceRef = useRef(null);

  // Check if Speech Synthesis is supported
  useEffect(() => {
    const supported = 'speechSynthesis' in window;
    setIsSupported(supported);

    if (supported) {
      // Load voices
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        setAvailableVoices(voices);

        // Find best voice for current language
        const langCode = getLanguageFromTranslation(translationId);
        const ttsLang = TTS_LANGUAGES[langCode] || 'en-US';

        // Priority: exact match > language match > any English
        let voice = voices.find(v => v.lang === ttsLang);
        if (!voice) {
          voice = voices.find(v => v.lang.startsWith(langCode));
        }
        if (!voice) {
          voice = voices.find(v => v.lang.startsWith('en'));
        }
        setCurrentVoice(voice || null);
      };

      loadVoices();

      // Voices may load asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }

    return () => {
      if (supported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [translationId]);

  // Speak translation text
  const speak = useCallback((text, onEnd = null) => {
    if (!isSupported || !text) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Set voice if available
    if (currentVoice) {
      utterance.voice = currentVoice;
    }

    // Set language
    const langCode = getLanguageFromTranslation(translationId);
    utterance.lang = TTS_LANGUAGES[langCode] || 'en-US';

    // Set speech parameters
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [isSupported, currentVoice, translationId, rate, pitch, volume]);

  // Pause speech
  const pause = useCallback(() => {
    if (isSupported && isSpeaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isSupported, isSpeaking]);

  // Resume speech
  const resume = useCallback(() => {
    if (isSupported && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, [isSupported, isPaused]);

  // Stop speech
  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  }, [isSupported]);

  // Toggle pause/resume
  const togglePause = useCallback(() => {
    if (isPaused) {
      resume();
    } else {
      pause();
    }
  }, [isPaused, pause, resume]);

  return {
    speak,
    pause,
    resume,
    stop,
    togglePause,
    isSpeaking,
    isPaused,
    isSupported,
    availableVoices,
    currentVoice,
    setCurrentVoice,
  };
}

/**
 * Simple function to speak text (no hook needed)
 * Useful for one-off speech like word pronunciations
 */
export function speakText(text, lang = 'en', options = {}) {
  if (!text) return false;

  // Check if Speech Synthesis is supported
  if (!('speechSynthesis' in window)) {
    console.warn('Speech Synthesis not supported in this browser');
    return false;
  }

  const { rate = 0.9, pitch = 1, volume = 1 } = options;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const ttsLang = TTS_LANGUAGES[lang] || lang || 'en-US';
  utterance.lang = ttsLang;
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;

  // Function to speak with voice
  const doSpeak = () => {
    const voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
      // Try to find a matching voice
      let voice = voices.find(v => v.lang === ttsLang);
      if (!voice) {
        voice = voices.find(v => v.lang.startsWith(lang));
      }
      if (!voice) {
        voice = voices.find(v => v.lang.startsWith('en'));
      }
      if (voice) {
        utterance.voice = voice;
      }
    }

    window.speechSynthesis.speak(utterance);
  };

  // Get voices - they may load asynchronously
  const voices = window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    doSpeak();
  } else {
    // Wait for voices to load
    window.speechSynthesis.onvoiceschanged = () => {
      doSpeak();
    };
    // Fallback: try speaking anyway after a short delay
    setTimeout(doSpeak, 100);
  }

  return true;
}

export default useAudioPlayer;
