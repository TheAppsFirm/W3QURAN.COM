/**
 * audioUtils.js
 * Audio utilities for Hajj/Umrah games
 * Uses Web Audio API for sound effects
 */

// Audio context singleton
let audioContext = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

// Resume audio context on user interaction
export const initAudio = () => {
  const ctx = getAudioContext();
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
};

// Generate a simple tone
const playTone = (frequency, duration, type = 'sine', volume = 0.3) => {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn('Audio error:', e);
  }
};

// Play footstep sound
export const playFootstep = () => {
  playTone(100 + Math.random() * 50, 0.1, 'triangle', 0.1);
};

// Play walking rhythm
let walkingInterval = null;
export const startWalkingSound = (isRunning = false) => {
  if (walkingInterval) return;
  const interval = isRunning ? 150 : 300;
  walkingInterval = setInterval(() => {
    playFootstep();
  }, interval);
};

export const stopWalkingSound = () => {
  if (walkingInterval) {
    clearInterval(walkingInterval);
    walkingInterval = null;
  }
};

// Play round/lap complete sound (ascending notes)
export const playRoundComplete = () => {
  const notes = [523, 659, 784]; // C5, E5, G5
  notes.forEach((freq, i) => {
    setTimeout(() => {
      playTone(freq, 0.3, 'sine', 0.4);
    }, i * 100);
  });
};

// Play game complete celebration
export const playGameComplete = () => {
  const melody = [523, 659, 784, 1047]; // C5, E5, G5, C6
  melody.forEach((freq, i) => {
    setTimeout(() => {
      playTone(freq, 0.4, 'sine', 0.5);
    }, i * 150);
  });
  // Add a triumphant chord
  setTimeout(() => {
    playTone(523, 0.8, 'sine', 0.3);
    playTone(659, 0.8, 'sine', 0.3);
    playTone(784, 0.8, 'sine', 0.3);
  }, 600);
};

// Play button click
export const playClick = () => {
  playTone(800, 0.1, 'sine', 0.2);
};

// Play dua reveal sound (gentle)
export const playDuaReveal = () => {
  playTone(440, 0.5, 'sine', 0.2);
  setTimeout(() => playTone(554, 0.5, 'sine', 0.15), 200);
};

// Play ambient crowd murmur (simple version)
let ambientInterval = null;
export const startAmbientSound = () => {
  if (ambientInterval) return;

  const playAmbient = () => {
    const freq = 100 + Math.random() * 100;
    playTone(freq, 2, 'sine', 0.02);
  };

  playAmbient();
  ambientInterval = setInterval(playAmbient, 2000);
};

export const stopAmbientSound = () => {
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
};

// Stop all sounds
export const stopAllSounds = () => {
  stopWalkingSound();
  stopAmbientSound();
};

// Talbiyah audio URL (placeholder - would need actual audio file)
export const TALBIYAH_AUDIO_URL = 'https://audio.qurancdn.com/talbiyah.mp3';

// Play audio from URL
export const playAudioUrl = async (url) => {
  try {
    const audio = new Audio(url);
    audio.volume = 0.7;
    await audio.play();
    return audio;
  } catch (e) {
    console.warn('Could not play audio:', e);
    return null;
  }
};
