/**
 * KidsAudioPlayer.jsx
 * Manages background audio for Kids Mode with soft Islamic nasheeds/tunes
 * Includes custom hook useKidsAudio and sound effect helpers
 */

import { useState, useEffect, useRef, useCallback, useContext, createContext } from 'react';

// ============================================
// Audio Configuration
// ============================================

// Placeholder audio URLs - replace with actual nasheed URLs
// Using silent/placeholder for now - can be replaced with royalty-free Islamic background music
const BACKGROUND_AUDIO_URL = null; // Set to nasheed URL when available

// Sound effect configurations (using Web Audio API oscillator tones)
const SOUND_EFFECTS = {
  click: {
    frequency: 800,
    duration: 0.08,
    type: 'sine',
    volume: 0.2,
  },
  success: {
    frequency: 523.25, // C5
    secondFrequency: 659.25, // E5
    thirdFrequency: 783.99, // G5
    duration: 0.15,
    type: 'sine',
    volume: 0.25,
  },
  whoosh: {
    startFrequency: 400,
    endFrequency: 100,
    duration: 0.2,
    type: 'sine',
    volume: 0.15,
  },
  pop: {
    frequency: 600,
    duration: 0.05,
    type: 'sine',
    volume: 0.2,
  },
  reward: {
    frequencies: [523.25, 659.25, 783.99, 1046.5], // C5, E5, G5, C6 arpeggio
    duration: 0.12,
    type: 'sine',
    volume: 0.2,
  },
};

// Fade duration in milliseconds
const FADE_DURATION = 500;

// ============================================
// Audio Context Singleton
// ============================================

let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.warn('[KidsAudio] Web Audio API not supported:', error);
      return null;
    }
  }

  // Resume if suspended (browser autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

// ============================================
// Sound Effect Functions
// ============================================

/**
 * Play a click sound for button interactions
 */
export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const { frequency, duration, type, volume } = SOUND_EFFECTS.click;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (error) {
    console.warn('[KidsAudio] Click sound error:', error);
  }
}

/**
 * Play a success/achievement sound
 */
export function playSuccessSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const { frequency, secondFrequency, thirdFrequency, duration, type, volume } = SOUND_EFFECTS.success;
    const now = ctx.currentTime;

    // Play a pleasant chord arpeggio
    [frequency, secondFrequency, thirdFrequency].forEach((freq, index) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(freq, now + index * 0.08);

      gainNode.gain.setValueAtTime(0, now + index * 0.08);
      gainNode.gain.linearRampToValueAtTime(volume, now + index * 0.08 + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + duration + 0.2);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(now + index * 0.08);
      oscillator.stop(now + index * 0.08 + duration + 0.3);
    });
  } catch (error) {
    console.warn('[KidsAudio] Success sound error:', error);
  }
}

/**
 * Play a whoosh sound for transitions
 */
export function playWhooshSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const { startFrequency, endFrequency, duration, type, volume } = SOUND_EFFECTS.whoosh;
    const now = ctx.currentTime;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(startFrequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, now + duration);

    gainNode.gain.setValueAtTime(volume, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + duration);
  } catch (error) {
    console.warn('[KidsAudio] Whoosh sound error:', error);
  }
}

/**
 * Play a pop sound for UI interactions
 */
export function playPopSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const { frequency, duration, type, volume } = SOUND_EFFECTS.pop;
    const now = ctx.currentTime;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency * 1.5, now);
    oscillator.frequency.exponentialRampToValueAtTime(frequency, now + duration);

    gainNode.gain.setValueAtTime(volume, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + duration);
  } catch (error) {
    console.warn('[KidsAudio] Pop sound error:', error);
  }
}

/**
 * Play a reward/celebration sound (for completing activities)
 */
export function playRewardSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const { frequencies, duration, type, volume } = SOUND_EFFECTS.reward;
    const now = ctx.currentTime;

    frequencies.forEach((freq, index) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(freq, now + index * duration);

      gainNode.gain.setValueAtTime(0, now + index * duration);
      gainNode.gain.linearRampToValueAtTime(volume, now + index * duration + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + index * duration + duration + 0.15);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(now + index * duration);
      oscillator.stop(now + index * duration + duration + 0.2);
    });
  } catch (error) {
    console.warn('[KidsAudio] Reward sound error:', error);
  }
}

// ============================================
// Kids Audio Context
// ============================================

const KidsAudioContext = createContext(null);

/**
 * Custom hook to access kids audio controls
 * Must be used within KidsAudioProvider
 */
export function useKidsAudio() {
  const context = useContext(KidsAudioContext);

  if (!context) {
    // Return a fallback object if used outside provider
    return {
      play: () => {},
      pause: () => {},
      toggleMute: () => {},
      setVolume: () => {},
      isMuted: false,
      isPlaying: false,
      volume: 0.5,
      // Sound effects are always available
      playClickSound,
      playSuccessSound,
      playWhooshSound,
      playPopSound,
      playRewardSound,
    };
  }

  return context;
}

// ============================================
// Kids Audio Provider Component
// ============================================

export function KidsAudioProvider({ children, isMuted: controlledMuted, autoPlay = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [internalMuted, setInternalMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const [isLoaded, setIsLoaded] = useState(false);

  const audioRef = useRef(null);
  const gainNodeRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Use controlled muted state if provided
  const isMuted = controlledMuted !== undefined ? controlledMuted : internalMuted;

  // Initialize audio element
  useEffect(() => {
    if (!BACKGROUND_AUDIO_URL) {
      // No audio URL configured - skip initialization
      return;
    }

    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;

    // Set up Web Audio API for volume control with fade
    const ctx = getAudioContext();
    if (ctx) {
      try {
        const source = ctx.createMediaElementSource(audio);
        const gainNode = ctx.createGain();

        source.connect(gainNode);
        gainNode.connect(ctx.destination);

        gainNodeRef.current = gainNode;
        sourceNodeRef.current = source;
      } catch (error) {
        console.warn('[KidsAudio] Failed to set up Web Audio:', error);
      }
    }

    const handleCanPlay = () => {
      setIsLoaded(true);
      if (autoPlay && !isMuted) {
        fadeIn();
      }
    };

    const handleError = (e) => {
      console.error('[KidsAudio] Audio load error:', e);
      setIsLoaded(false);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    audio.src = BACKGROUND_AUDIO_URL;
    audio.load();

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);

      // Clean up fade interval
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      audio.pause();
      audio.src = '';
      audioRef.current = null;
      gainNodeRef.current = null;
      sourceNodeRef.current = null;
    };
  }, []);

  // Handle autoplay
  useEffect(() => {
    if (autoPlay && isLoaded && !isMuted) {
      fadeIn();
    }
  }, [autoPlay, isLoaded, isMuted]);

  // Handle mute changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (isMuted) {
      fadeOut();
    } else if (isPlaying) {
      fadeIn();
    }
  }, [isMuted]);

  // Fade in audio
  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    const gainNode = gainNodeRef.current;

    if (!audio) return;

    // Clear any existing fade
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    // Start playing
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);

          // Fade in using gain node if available
          if (gainNode) {
            const ctx = getAudioContext();
            if (ctx) {
              gainNode.gain.setValueAtTime(0, ctx.currentTime);
              gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + FADE_DURATION / 1000);
            }
          } else {
            // Fallback: fade using audio.volume
            let currentVolume = 0;
            audio.volume = 0;

            fadeIntervalRef.current = setInterval(() => {
              currentVolume += 0.05;
              if (currentVolume >= volume) {
                audio.volume = volume;
                clearInterval(fadeIntervalRef.current);
                fadeIntervalRef.current = null;
              } else {
                audio.volume = currentVolume;
              }
            }, FADE_DURATION / 20);
          }
        })
        .catch((error) => {
          // Handle autoplay policy - wait for user interaction
          if (error.name === 'NotAllowedError') {
            console.log('[KidsAudio] Autoplay blocked - waiting for user interaction');
          } else {
            console.error('[KidsAudio] Play error:', error);
          }
        });
    }
  }, [volume]);

  // Fade out audio
  const fadeOut = useCallback(() => {
    const audio = audioRef.current;
    const gainNode = gainNodeRef.current;

    if (!audio) return;

    // Clear any existing fade
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    // Fade out using gain node if available
    if (gainNode) {
      const ctx = getAudioContext();
      if (ctx) {
        const currentGain = gainNode.gain.value;
        gainNode.gain.setValueAtTime(currentGain, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + FADE_DURATION / 1000);

        // Pause after fade completes
        setTimeout(() => {
          audio.pause();
          setIsPlaying(false);
        }, FADE_DURATION);
      }
    } else {
      // Fallback: fade using audio.volume
      let currentVolume = audio.volume;

      fadeIntervalRef.current = setInterval(() => {
        currentVolume -= 0.05;
        if (currentVolume <= 0) {
          audio.volume = 0;
          audio.pause();
          setIsPlaying(false);
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        } else {
          audio.volume = currentVolume;
        }
      }, FADE_DURATION / 20);
    }
  }, []);

  // Play function
  const play = useCallback(() => {
    if (!isMuted) {
      fadeIn();
    }
  }, [isMuted, fadeIn]);

  // Pause function
  const pause = useCallback(() => {
    fadeOut();
  }, [fadeOut]);

  // Toggle mute
  const toggleMute = useCallback(() => {
    if (controlledMuted === undefined) {
      setInternalMuted(prev => !prev);
    }
  }, [controlledMuted]);

  // Set volume
  const setVolume = useCallback((newVolume) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clampedVolume);

    const gainNode = gainNodeRef.current;
    const audio = audioRef.current;

    if (gainNode) {
      const ctx = getAudioContext();
      if (ctx) {
        gainNode.gain.setValueAtTime(clampedVolume, ctx.currentTime);
      }
    } else if (audio) {
      audio.volume = clampedVolume;
    }
  }, []);

  // Context value
  const contextValue = {
    play,
    pause,
    toggleMute,
    setVolume,
    isMuted,
    isPlaying,
    isLoaded,
    volume,
    // Sound effects
    playClickSound,
    playSuccessSound,
    playWhooshSound,
    playPopSound,
    playRewardSound,
  };

  return (
    <KidsAudioContext.Provider value={contextValue}>
      {children}
    </KidsAudioContext.Provider>
  );
}

// ============================================
// KidsAudioPlayer Component (UI)
// ============================================

/**
 * Kids Audio Player Component
 * Provides an optional UI for controlling background audio
 *
 * @param {boolean} isMuted - Controlled mute state from parent
 * @param {boolean} autoPlay - Whether to start playing on mount
 * @param {boolean} showControls - Whether to show UI controls
 */
export default function KidsAudioPlayer({
  isMuted: controlledMuted,
  autoPlay = false,
  showControls = false,
  className = '',
}) {
  const [internalMuted, setInternalMuted] = useState(controlledMuted ?? false);

  // Sync with controlled prop
  useEffect(() => {
    if (controlledMuted !== undefined) {
      setInternalMuted(controlledMuted);
    }
  }, [controlledMuted]);

  if (!showControls) {
    // Render provider only (no visible UI)
    return null;
  }

  // If controls are shown, render a simple mute toggle
  return (
    <div className={`kids-audio-controls ${className}`}>
      <button
        onClick={() => setInternalMuted(prev => !prev)}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label={internalMuted ? 'Unmute background music' : 'Mute background music'}
      >
        {internalMuted ? (
          // Muted icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          // Volume icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
}

// ============================================
// Standalone Hook (without Provider)
// ============================================

/**
 * Standalone hook for kids audio - can be used without Provider
 * Manages its own audio state
 */
export function useKidsAudioStandalone(options = {}) {
  const { autoPlay = false, initialMuted = false, initialVolume = 0.5 } = options;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [volume, setVolumeState] = useState(initialVolume);

  const audioRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Initialize audio
  useEffect(() => {
    if (!BACKGROUND_AUDIO_URL) return;

    const audio = new Audio(BACKGROUND_AUDIO_URL);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = initialVolume;
    audioRef.current = audio;

    const handleCanPlay = () => {
      if (autoPlay && !initialMuted) {
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    };

    audio.addEventListener('canplaythrough', handleCanPlay);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = useCallback(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isMuted]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMuted = !prev;
      if (audioRef.current) {
        audioRef.current.muted = newMuted;
      }
      return newMuted;
    });
  }, []);

  const setVolume = useCallback((newVolume) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clampedVolume);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  }, []);

  return {
    play,
    pause,
    toggleMute,
    setVolume,
    isMuted,
    isPlaying,
    volume,
    // Sound effects
    playClickSound,
    playSuccessSound,
    playWhooshSound,
    playPopSound,
    playRewardSound,
  };
}
