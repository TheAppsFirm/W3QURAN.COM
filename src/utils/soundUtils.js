/**
 * Sound Utilities for w3Quran
 * Provides subtle, non-musical feedback sounds
 * Simple click/tap sounds - halal (no musical tones)
 */

// Audio context for generating sounds
let audioContext = null;

// Initialize audio context (must be called after user interaction)
const initAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

// Sound settings (stored in localStorage)
let soundEnabled = true;

export const setSoundEnabled = (enabled) => {
  soundEnabled = enabled;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('w3quran_sound_enabled', JSON.stringify(enabled));
  }
};

export const isSoundEnabled = () => {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('w3quran_sound_enabled');
    if (stored !== null) {
      soundEnabled = JSON.parse(stored);
    }
  }
  return soundEnabled;
};

// Toggle sound on/off
export const toggleSound = () => {
  const newState = !isSoundEnabled();
  setSoundEnabled(newState);
  return newState;
};

/**
 * Play a simple click/tap sound - non-musical, just subtle feedback
 * Uses white noise burst filtered to create a soft "tick" sound
 */
export const playClickSound = () => {
  if (!isSoundEnabled()) return;

  try {
    const ctx = initAudioContext();
    if (!ctx || ctx.state === 'suspended') {
      ctx?.resume();
      return;
    }

    // Create a very short noise burst for a subtle click
    const bufferSize = ctx.sampleRate * 0.015; // 15ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Fill with filtered noise that decays quickly
    for (let i = 0; i < bufferSize; i++) {
      // Exponential decay envelope
      const envelope = Math.exp(-i / (bufferSize * 0.15));
      // Low-frequency filtered noise (soft tap sound)
      data[i] = (Math.random() * 2 - 1) * envelope * 0.3;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Low-pass filter to make it softer
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;

    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.15; // Quiet

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    source.start();
  } catch {
    // Silently fail - audio not critical
  }
};

/**
 * Play a soft bubble/water drop sound - non-musical
 * Just a subtle "pop" feedback
 */
export const playBubbleSound = () => {
  if (!isSoundEnabled()) return;

  try {
    const ctx = initAudioContext();
    if (!ctx || ctx.state === 'suspended') {
      ctx?.resume();
      return;
    }

    // Create a very short pop sound
    const bufferSize = ctx.sampleRate * 0.025; // 25ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Create a soft "pop" - quick attack, fast decay
    for (let i = 0; i < bufferSize; i++) {
      const t = i / bufferSize;
      // Quick attack, fast decay envelope
      const envelope = Math.sin(t * Math.PI) * Math.exp(-t * 8);
      // Soft filtered noise
      data[i] = (Math.random() * 2 - 1) * envelope * 0.25;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Band-pass filter for a softer sound
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 600;
    filter.Q.value = 1;

    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.12;

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    source.start();
  } catch {
    // Silently fail
  }
};

// Alias for hover sound - uses the soft bubble pop
export const playHoverSound = playBubbleSound;

// Very soft sound
export const playSoftSound = () => {
  if (!isSoundEnabled()) return;

  try {
    const ctx = initAudioContext();
    if (!ctx || ctx.state === 'suspended') {
      ctx?.resume();
      return;
    }

    const bufferSize = ctx.sampleRate * 0.01; // 10ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const envelope = Math.exp(-i / (bufferSize * 0.2));
      data[i] = (Math.random() * 2 - 1) * envelope * 0.15;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 500;

    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.08;

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    source.start();
  } catch {
    // Silently fail
  }
};

// Throttled hover sound (prevents spam)
let lastHoverTime = 0;
const HOVER_THROTTLE = 180; // ms

export const playThrottledHoverSound = () => {
  if (!isSoundEnabled()) return;

  const now = Date.now();
  if (now - lastHoverTime > HOVER_THROTTLE) {
    lastHoverTime = now;
    playBubbleSound();
  }
};

// Conditional sound play wrapper
export const playSound = (soundFn) => {
  if (isSoundEnabled()) {
    soundFn();
  }
};

// Export default with all utilities
export default {
  playClickSound,
  playHoverSound,
  playSoftSound,
  playBubbleSound,
  playThrottledHoverSound,
  setSoundEnabled,
  isSoundEnabled,
  toggleSound,
  playSound,
};
