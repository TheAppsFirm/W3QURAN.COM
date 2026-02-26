/**
 * KidsModeMenu.jsx
 * Main menu for Quran Kids - showing 3 magical theme options
 *
 * Features:
 * - Train Journey, Garden Path, Desert Caravan themes
 * - Beautiful floating animations and sparkle effects
 * - 3D tilt effect on hover
 * - Sound toggle
 * - Responsive design
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Icons } from '../common/Icons';
import { useAuth } from '../../contexts/AuthContext';
import KidsPremiumGate from './KidsPremiumGate';

// Arabic Alphabet learning journeys - all show the same alphabet with different themes
// premium: true means the theme requires premium subscription
const ALPHABET_JOURNEYS = [
  {
    id: 'alphabet-train',
    name: 'Alphabet Train',
    nameAr: 'قطار الحروف',
    emoji: '🚂',
    description: 'Learn all 28 Arabic letters on a fun train ride!',
    gradient: 'from-pink-400 via-rose-500 to-red-500',
    shadowColor: 'shadow-pink-500/50',
    glowColor: 'pink',
    bgPattern: 'train',
    theme: 'train',
    letterDisplay: 'أ ب ت',
    premium: false, // Free
  },
  {
    id: 'alphabet-garden',
    name: 'Flower Garden',
    nameAr: 'حديقة الزهور',
    emoji: '🌸',
    description: 'Learn all 28 Arabic letters in a beautiful flower garden!',
    gradient: 'from-pink-400 via-rose-400 to-pink-500',
    shadowColor: 'shadow-pink-400/50',
    glowColor: 'pink',
    bgPattern: 'garden',
    theme: 'garden',
    letterDisplay: 'أ ب ت',
    premium: true, // Premium
  },
  {
    id: 'alphabet-seert',
    name: 'Camel Caravan',
    nameAr: 'قافلة الجمال',
    emoji: '🐪',
    description: 'Learn all 28 Arabic letters on a peaceful desert journey!',
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    shadowColor: 'shadow-amber-500/50',
    glowColor: 'amber',
    bgPattern: 'seert',
    theme: 'seert',
    letterDisplay: 'أ ب ت',
    premium: true, // Premium
  },
];

// Theme configurations for Surah journeys
// premium: true means the theme requires premium subscription
const THEMES = [
  {
    id: 'train',
    name: 'Train Journey',
    nameAr: 'رحلة القطار',
    emoji: '🚂',
    description: 'Learn blessed Surahs on a wonderful train adventure!',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    shadowColor: 'shadow-cyan-500/50',
    glowColor: 'cyan',
    bgPattern: 'train',
    mode: 'surahs',
    premium: false, // Free theme
  },
  {
    id: 'garden',
    name: 'Flower Garden',
    nameAr: 'حديقة الزهور',
    emoji: '🌸',
    description: 'Learn blessed Surahs in a beautiful flower garden!',
    gradient: 'from-pink-400 via-rose-400 to-pink-500',
    shadowColor: 'shadow-pink-400/50',
    glowColor: 'pink',
    bgPattern: 'garden',
    mode: 'surahs',
    premium: true, // Premium theme
  },
  {
    id: 'seert',
    name: 'Camel Journey',
    nameAr: 'رحلة الجمل',
    emoji: '🐪',
    description: 'Learn blessed Surahs on a peaceful camel journey!',
    gradient: 'from-amber-400 via-orange-500 to-amber-600',
    shadowColor: 'shadow-amber-500/50',
    glowColor: 'amber',
    bgPattern: 'desert',
    mode: 'surahs',
    premium: true, // Premium theme
  },
];

// Special standalone journeys
const SPECIAL_JOURNEYS = [
  {
    id: 'kids-dua',
    name: "Kids Duas",
    nameAr: 'أدعية الأطفال',
    emoji: '🤲',
    description: 'Learn beautiful daily duas with fun animations!',
    gradient: 'from-teal-400 via-emerald-500 to-green-600',
    shadowColor: 'shadow-teal-500/50',
    glowColor: 'teal',
    bgPattern: 'dua',
    mode: 'dua',
    premium: false,
  },
  {
    id: 'prophet-life',
    name: "Prophet's Life",
    nameAr: 'السيرة النبوية',
    emoji: '🏍️',
    description: 'Journey through the blessed life of Prophet Muhammad ﷺ',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    shadowColor: 'shadow-emerald-500/50',
    glowColor: 'emerald',
    bgPattern: 'road',
    mode: 'seert',
    premium: false,
  },
  {
    id: 'hajj-umrah',
    name: "Hajj & Umrah",
    nameAr: 'الحج والعمرة',
    emoji: '🕋',
    description: 'Learn pilgrimage rituals step by step!',
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    shadowColor: 'shadow-amber-500/50',
    glowColor: 'amber',
    bgPattern: 'kaaba',
    mode: 'hajj-umrah',
    premium: false,
  },
];

// Sparkle component for magical effects
const Sparkle = ({ style, delay = 0 }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      ...style,
      animation: `sparkle 2s ease-in-out ${delay}s infinite`,
    }}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-300">
      <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    </svg>
  </div>
);

// Floating particle effect
const FloatingParticle = ({ emoji, delay, duration, startX, startY }) => (
  <div
    className="absolute text-2xl pointer-events-none opacity-60"
    style={{
      left: `${startX}%`,
      top: `${startY}%`,
      animation: `floatParticle ${duration}s ease-in-out ${delay}s infinite`,
    }}
  >
    {emoji}
  </div>
);

// Theme Card component with 3D tilt effect
const ThemeCard = ({ theme, onSelect, index, isLocked = false, onLockedClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;

    setTilt({ x: tiltX, y: tiltY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      className={`
        relative group cursor-pointer
        transform-gpu transition-all duration-500 ease-out
        ${isHovered ? 'scale-105 z-10' : 'scale-100'}
      `}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.05 : 1})`,
        animation: `gentleFloat 4s ease-in-out ${index * 0.3}s infinite`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={() => isLocked ? onLockedClick?.(theme.id) : onSelect(theme.id, theme.mode || 'surahs')}
    >
      {/* Glow effect */}
      <div
        className={`
          absolute -inset-2 rounded-3xl blur-xl opacity-0
          group-hover:opacity-60 transition-opacity duration-500
          bg-gradient-to-r ${theme.gradient}
        `}
      />

      {/* Lock overlay for premium themes */}
      {isLocked && (
        <div className="absolute inset-0 z-20 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Icons.Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-white text-[10px] sm:text-xs font-bold mt-1 drop-shadow">PREMIUM</span>
          </div>
        </div>
      )}

      {/* Card body */}
      <div
        className={`
          relative overflow-hidden rounded-xl sm:rounded-2xl
          bg-gradient-to-br ${theme.gradient}
          p-2 sm:p-3 pb-3 sm:pb-4
          shadow-2xl ${theme.shadowColor}
          border sm:border-2 border-white/30
          backdrop-blur-sm
          h-[140px] sm:h-[165px]
          flex flex-col items-center justify-between
          transform-gpu
          ${isLocked ? 'opacity-80' : ''}
        `}
      >
        {/* Sparkle decorations */}
        {isHovered && !isLocked && (
          <>
            <Sparkle style={{ top: '10%', left: '10%' }} delay={0} />
            <Sparkle style={{ top: '20%', right: '15%' }} delay={0.3} />
          </>
        )}

        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          {theme.bgPattern === 'train' && (
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='10' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px',
            }} />
          )}
          {theme.bgPattern === 'garden' && (
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 25 L30 20 L25 25 Z' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }} />
          )}
          {theme.bgPattern === 'desert' && (
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q25 10 50 30 T100 30' stroke='white' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 40px',
            }} />
          )}
        </div>

        {/* Emoji icon */}
        <div className={`
          text-2xl sm:text-4xl
          transform transition-transform duration-300
          ${isHovered ? 'scale-125 animate-bounce' : 'scale-100'}
          drop-shadow-lg
        `}>
          {theme.emoji}
        </div>

        {/* Theme name - compact */}
        <div className="text-center leading-none">
          <h3 className="text-[10px] sm:text-xs font-bold text-white drop-shadow-lg">
            {theme.name}
          </h3>
          <p className="text-[9px] sm:text-[10px] text-white/70 font-arabic">{theme.nameAr}</p>
        </div>

        {/* Play button */}
        <button
          className={`
            flex items-center justify-center gap-1 sm:gap-2
            px-2 sm:px-4 py-1 sm:py-2 rounded-full
            bg-white/20 hover:bg-white/30
            backdrop-blur-sm
            border sm:border-2 border-white/50 hover:border-white
            text-white font-bold text-[10px] sm:text-sm
            transform transition-all duration-300
            hover:scale-110 hover:shadow-lg
            active:scale-95
          `}
        >
          <span>PLAY</span>
          <Icons.Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
        </button>

        {/* Shimmer effect on hover */}
        <div
          className={`
            absolute inset-0 pointer-events-none
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform -skew-x-12 -translate-x-full
            ${isHovered ? 'animate-shimmer' : ''}
          `}
        />
      </div>
    </div>
  );
};

// Alphabet Card component - matching ThemeCard style
const AlphabetCard = ({ section, onSelect, index, isLocked = false, onLockedClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;

    setTilt({ x: tiltX, y: tiltY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // Background pattern for alphabet cards - use أ (Alif) as the pattern
  const bgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='30' y='35' font-size='20' fill='white' opacity='0.1' text-anchor='middle'%3E%D8%A3%3C/text%3E%3C/svg%3E")`;

  return (
    <div
      className={`
        relative group cursor-pointer
        transform-gpu transition-all duration-500 ease-out
        ${isHovered ? 'scale-105 z-10' : 'scale-100'}
      `}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.05 : 1})`,
        animation: `gentleFloat 4s ease-in-out ${index * 0.3}s infinite`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={() => isLocked ? onLockedClick?.(section.theme) : onSelect(section.id, section.theme || 'train')}
    >
      {/* Glow effect */}
      <div
        className={`
          absolute -inset-2 rounded-3xl blur-xl opacity-0
          group-hover:opacity-60 transition-opacity duration-500
          bg-gradient-to-r ${section.gradient}
        `}
      />

      {/* Lock overlay for premium themes */}
      {isLocked && (
        <div className="absolute inset-0 z-20 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Icons.Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-white text-[10px] sm:text-xs font-bold mt-1 drop-shadow">PREMIUM</span>
          </div>
        </div>
      )}

      {/* Card body */}
      <div
        className={`
          relative overflow-hidden rounded-xl sm:rounded-2xl
          bg-gradient-to-br ${section.gradient}
          p-2 sm:p-3 pb-3 sm:pb-4
          shadow-2xl ${section.shadowColor}
          border sm:border-2 border-white/30
          backdrop-blur-sm
          h-[140px] sm:h-[165px]
          flex flex-col items-center justify-between
          transform-gpu
          ${isLocked ? 'opacity-80' : ''}
        `}
      >
        {/* Sparkle decorations - hide on mobile for performance and when locked */}
        {isHovered && !isLocked && (
          <div className="hidden sm:block">
            <Sparkle style={{ top: '10%', left: '10%' }} delay={0} />
            <Sparkle style={{ top: '20%', right: '15%' }} delay={0.3} />
          </div>
        )}

        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: bgPattern,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Emoji icon - same as journey cards */}
        <div className={`
          text-2xl sm:text-4xl
          transform transition-transform duration-300
          ${isHovered ? 'scale-125 animate-bounce' : 'scale-100'}
          drop-shadow-lg
        `}>
          {section.emoji}
        </div>

        {/* Section name - compact single line */}
        <div className="text-center leading-none">
          <h3 className="text-[10px] sm:text-xs font-bold text-white drop-shadow-lg">
            {section.name}
          </h3>
          <p className="text-[9px] sm:text-[10px] text-white/70 font-arabic">{section.nameAr} • {section.letterDisplay}</p>
        </div>

        {/* Learn button */}
        <button
          className={`
            flex items-center justify-center gap-1 sm:gap-2
            px-2 sm:px-4 py-1 sm:py-2 rounded-full
            bg-white/20 hover:bg-white/30
            backdrop-blur-sm
            border sm:border-2 border-white/50 hover:border-white
            text-white font-bold text-[10px] sm:text-sm
            transform transition-all duration-300
            hover:scale-110 hover:shadow-lg
            active:scale-95
          `}
        >
          <span>LEARN</span>
          <span className="text-xs sm:text-lg">{section.emoji}</span>
        </button>

        {/* Shimmer effect on hover */}
        <div
          className={`
            absolute inset-0 pointer-events-none
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform -skew-x-12 -translate-x-full
            ${isHovered ? 'animate-shimmer' : ''}
          `}
        />
      </div>
    </div>
  );
};

// Gentle Nature Sounds Generator - Kid-Safe Ambient Background
// Uses soft rain, gentle wind, and peaceful melodic tones (no binaural beats)
const useBackgroundMusic = (isMuted) => {
  const audioContextRef = useRef(null);
  const isPlayingRef = useRef(false);
  const activeNodesRef = useRef([]);

  const stopAllSounds = useCallback(() => {
    // Stop all active nodes
    activeNodesRef.current.forEach((node) => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {
        // Already stopped
      }
    });
    activeNodesRef.current = [];

    // Close audio context
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch (e) {
        // Already closed
      }
      audioContextRef.current = null;
    }

    isPlayingRef.current = false;
  }, []);

  // Create gentle rain/water sound using filtered noise
  const createRainSound = useCallback(() => {
    if (!audioContextRef.current || isMuted) return;

    const ctx = audioContextRef.current;

    // Create white noise buffer
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    // Create noise source
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    // Filter to make it sound like soft rain
    const highpass = ctx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 400;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 2000;

    // Very soft gain
    const rainGain = ctx.createGain();
    rainGain.gain.value = 0.015; // Very quiet

    // Add gentle volume modulation for natural feel
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.05; // Very slow breathing effect
    lfoGain.gain.value = 0.005;
    lfo.connect(lfoGain);
    lfoGain.connect(rainGain.gain);
    lfo.start();

    noise.connect(highpass);
    highpass.connect(lowpass);
    lowpass.connect(rainGain);
    rainGain.connect(ctx.destination);
    noise.start();

    activeNodesRef.current.push(noise, highpass, lowpass, rainGain, lfo, lfoGain);
  }, [isMuted]);

  // Create soft wind sound
  const createWindSound = useCallback(() => {
    if (!audioContextRef.current || isMuted) return;

    const ctx = audioContextRef.current;

    // Create pink noise for wind (more natural than white noise)
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const wind = ctx.createBufferSource();
    wind.buffer = noiseBuffer;
    wind.loop = true;

    // Filter for soft whooshing
    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 300;
    bandpass.Q.value = 0.5;

    const windGain = ctx.createGain();
    windGain.gain.value = 0.008; // Very soft

    // Gentle swelling for wind gusts
    const windLfo = ctx.createOscillator();
    const windLfoGain = ctx.createGain();
    windLfo.type = 'sine';
    windLfo.frequency.value = 0.08; // Slow gusts
    windLfoGain.gain.value = 0.004;
    windLfo.connect(windLfoGain);
    windLfoGain.connect(windGain.gain);
    windLfo.start();

    wind.connect(bandpass);
    bandpass.connect(windGain);
    windGain.connect(ctx.destination);
    wind.start();

    activeNodesRef.current.push(wind, bandpass, windGain, windLfo, windLfoGain);
  }, [isMuted]);

  // Play gentle bird chirp
  const playBirdChirp = useCallback(() => {
    if (!audioContextRef.current || isMuted) return;

    const ctx = audioContextRef.current;
    const time = ctx.currentTime;

    // Random bird-like frequencies (high, pleasant tones)
    const baseFreq = 1800 + Math.random() * 600; // 1800-2400 Hz range

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';

    // Create chirp by varying frequency
    osc.frequency.setValueAtTime(baseFreq, time);
    osc.frequency.linearRampToValueAtTime(baseFreq * 1.3, time + 0.05);
    osc.frequency.linearRampToValueAtTime(baseFreq * 0.9, time + 0.1);
    osc.frequency.linearRampToValueAtTime(baseFreq * 1.1, time + 0.15);

    // Gentle envelope
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.015, time + 0.02);
    gain.gain.linearRampToValueAtTime(0.01, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.3);

    activeNodesRef.current.push(osc, gain);
  }, [isMuted]);

  // Play soft melodic chime (pentatonic scale - very pleasant)
  const playMelodicChime = useCallback(() => {
    if (!audioContextRef.current || isMuted) return;

    const ctx = audioContextRef.current;
    const time = ctx.currentTime;

    // Pentatonic scale frequencies (C major pentatonic - always sounds pleasant)
    const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C4, D4, E4, G4, A4, C5
    const freq = pentatonic[Math.floor(Math.random() * pentatonic.length)];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.value = freq;

    // Soft bell-like envelope
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.025, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 2.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 3);

    // Add soft harmonic for richness
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.value = freq * 2;
    gain2.gain.setValueAtTime(0, time);
    gain2.gain.linearRampToValueAtTime(0.008, time + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.001, time + 1.5);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(time);
    osc2.stop(time + 2);

    activeNodesRef.current.push(osc, gain, osc2, gain2);
  }, [isMuted]);

  useEffect(() => {
    if (isMuted) {
      stopAllSounds();
      return;
    }

    // Initialize audio context on first interaction
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (!isPlayingRef.current) {
        isPlayingRef.current = true;

        // Start continuous nature sounds
        createRainSound();
        createWindSound();

        // Play occasional bird chirps (random intervals 6-15 seconds)
        const birdInterval = setInterval(() => {
          if (!isMuted && audioContextRef.current) {
            // 40% chance of chirp each interval
            if (Math.random() < 0.4) {
              playBirdChirp();
              // Sometimes play a second chirp shortly after
              if (Math.random() < 0.3) {
                setTimeout(() => playBirdChirp(), 200 + Math.random() * 300);
              }
            }
          }
        }, 6000 + Math.random() * 9000);

        // Play occasional melodic chimes (every 10-20 seconds)
        const chimeInterval = setInterval(() => {
          if (!isMuted && audioContextRef.current) {
            playMelodicChime();
          }
        }, 10000 + Math.random() * 10000);

        activeNodesRef.current.push(
          { stop: () => clearInterval(birdInterval) },
          { stop: () => clearInterval(chimeInterval) }
        );
      }
    };

    // Start on user interaction
    const handleInteraction = () => {
      initAudio();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    // IMPORTANT: Clean up everything when component unmounts
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      stopAllSounds();
    };
  }, [isMuted, createRainSound, createWindSound, playBirdChirp, playMelodicChime, stopAllSounds]);

  return { stopAllSounds };
};

// Special Journey Card component (single card style)
const SpecialJourneyCard = ({ journey, onSelect, index, isLocked = false, onLockedClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;

    setTilt({ x: tiltX, y: tiltY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      className={`
        relative group cursor-pointer
        transform-gpu transition-all duration-500 ease-out
        ${isHovered ? 'scale-105 z-10' : 'scale-100'}
      `}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.05 : 1})`,
        animation: `gentleFloat 4s ease-in-out ${index * 0.3}s infinite`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={() => isLocked ? onLockedClick?.(journey.id) : onSelect(journey.id, journey.mode)}
    >
      {/* Glow effect */}
      <div
        className={`
          absolute -inset-2 rounded-3xl blur-xl opacity-0
          group-hover:opacity-60 transition-opacity duration-500
          bg-gradient-to-r ${journey.gradient}
        `}
      />

      {/* Card body - wider horizontal layout */}
      <div
        className={`
          relative overflow-hidden rounded-xl sm:rounded-2xl
          bg-gradient-to-br ${journey.gradient}
          p-3 sm:p-4
          shadow-2xl ${journey.shadowColor}
          border sm:border-2 border-white/30
          backdrop-blur-sm
          h-[100px] sm:h-[100px]
          flex items-center gap-3 sm:gap-4
          transform-gpu
        `}
      >
        {/* Lock overlay for premium journeys */}
        {isLocked && (
          <div className="absolute inset-0 z-20 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center">
            <Icons.Lock className="w-6 h-6 text-white mb-1" />
            <span className="text-white text-xs font-bold px-2 py-0.5 bg-amber-500 rounded-full">PREMIUM</span>
          </div>
        )}
        {/* Sparkle decorations */}
        {isHovered && (
          <>
            <Sparkle style={{ top: '10%', left: '5%' }} delay={0} />
            <Sparkle style={{ top: '20%', right: '10%' }} delay={0.3} />
          </>
        )}

        {/* Road pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L100 20' stroke='white' fill='none' stroke-width='4' stroke-dasharray='20,10'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 40px',
          }} />
        </div>

        {/* Emoji icon */}
        <div className={`
          text-3xl sm:text-5xl
          transform transition-transform duration-300
          ${isHovered ? 'scale-125 animate-bounce' : 'scale-100'}
          drop-shadow-lg
          flex-shrink-0
        `}>
          {journey.emoji}
        </div>

        {/* Text content */}
        <div className="flex-1 text-left">
          <h3 className="text-sm sm:text-xl font-bold text-white drop-shadow-lg tracking-wide">
            {journey.name}
          </h3>
          <p className="text-[10px] sm:text-xs text-white/80 font-arabic">
            {journey.nameAr}
          </p>
          <p className="text-[9px] sm:text-xs text-white/70 mt-0.5 hidden sm:block">
            {journey.description}
          </p>
        </div>

        {/* Play button */}
        <button
          className={`
            flex items-center justify-center gap-1 sm:gap-2
            px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full
            bg-white/20 hover:bg-white/30
            backdrop-blur-sm
            border sm:border-2 border-white/50 hover:border-white
            text-white font-bold text-[10px] sm:text-sm
            transform transition-all duration-300
            hover:scale-110 hover:shadow-lg
            active:scale-95
            flex-shrink-0
          `}
        >
          <span>START</span>
          <Icons.Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
        </button>

        {/* Shimmer effect on hover */}
        <div
          className={`
            absolute inset-0 pointer-events-none
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform -skew-x-12 -translate-x-full
            ${isHovered ? 'animate-shimmer' : ''}
          `}
        />
      </div>
    </div>
  );
};

// Main Menu Component
const KidsModeMenu = ({ onSelectTheme, onSelectAlphabet, onSelectSpecialJourney, isMuted = false, onToggleMute }) => {
  const [sparkles, setSparkles] = useState([]);
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const [lockedTheme, setLockedTheme] = useState(null);

  // Get auth state
  const { isPremium, isAdmin } = useAuth();

  // Play background music
  useBackgroundMusic(isMuted);

  // Handle locked theme click
  const handleLockedClick = useCallback((themeId) => {
    setLockedTheme(themeId);
    setShowPremiumGate(true);
  }, []);

  // Check if a theme is locked (premium themes for non-premium users)
  const isThemeLocked = useCallback((theme) => {
    if (isPremium || isAdmin) return false;
    return theme.premium === true || theme.theme === 'garden' || theme.theme === 'seert';
  }, [isPremium, isAdmin]);

  // Generate random sparkles on mount
  useEffect(() => {
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      size: 10 + Math.random() * 15,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-x-hidden relative">
      {/* Animated background stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute text-yellow-300 animate-pulse"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              fontSize: `${sparkle.size}px`,
            }}
          >
            *
          </div>
        ))}
      </div>

      {/* Floating decorative particles - only show on larger screens */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <FloatingParticle emoji="✨" delay={0} duration={6} startX={10} startY={20} />
        <FloatingParticle emoji="🌟" delay={1} duration={7} startX={85} startY={15} />
        <FloatingParticle emoji="⭐" delay={2} duration={5} startX={20} startY={70} />
        <FloatingParticle emoji="✨" delay={0.5} duration={8} startX={75} startY={80} />
        <FloatingParticle emoji="🌙" delay={1.5} duration={6} startX={50} startY={10} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col px-2 sm:px-4 py-2 sm:py-2 pb-4">
        {/* Header - Compact on mobile */}
        <header className="flex items-center justify-between mb-2 sm:mb-2">
          {/* Empty space for balance */}
          <div className="w-10 sm:w-12" />

          {/* Title - Responsive sizing */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-lg sm:text-2xl animate-pulse hidden sm:inline">☪️</span>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-wider drop-shadow-lg">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 text-transparent bg-clip-text">
                QURAN KIDS
              </span>
            </h1>
            <span className="text-lg sm:text-2xl animate-pulse hidden sm:inline" style={{ animationDelay: '0.5s' }}>☪️</span>
          </div>

          {/* Sound toggle button */}
          <button
            onClick={onToggleMute}
            className={`
              w-10 h-10 sm:w-12 sm:h-12 rounded-full
              flex items-center justify-center
              bg-white/10 hover:bg-white/20
              backdrop-blur-sm
              border-2 border-white/30 hover:border-white/50
              text-white
              transform transition-all duration-300
              hover:scale-110
              active:scale-95
            `}
            aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
          >
            {isMuted ? (
              <Icons.VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Icons.Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </header>

        {/* Cards container - 2x3 grid on mobile, separate sections on desktop */}
        <div className="flex flex-col items-center justify-start gap-2 sm:gap-4 pb-4">
          {/* Mobile: Combined 2x3 grid with all 6 cards + special journey */}
          <div className="sm:hidden w-full px-2">
            <h2 className="text-center text-white/90 text-sm font-bold mb-2 flex items-center justify-center gap-1">
              <span>✨</span>
              <span>Choose Your Adventure</span>
              <span className="font-arabic text-yellow-300 text-xs">اختر مغامرتك</span>
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {/* Row 1: Alphabet Train + Train Journey */}
              <AlphabetCard
                key={ALPHABET_JOURNEYS[0].id}
                section={ALPHABET_JOURNEYS[0]}
                onSelect={onSelectAlphabet || (() => {})}
                index={0}
                isLocked={isThemeLocked(ALPHABET_JOURNEYS[0])}
                onLockedClick={handleLockedClick}
              />
              <ThemeCard
                key={THEMES[0].id}
                theme={THEMES[0]}
                onSelect={onSelectTheme}
                index={1}
                isLocked={isThemeLocked(THEMES[0])}
                onLockedClick={handleLockedClick}
              />
              {/* Row 2: Letter Garden + Garden Path */}
              <AlphabetCard
                key={ALPHABET_JOURNEYS[1].id}
                section={ALPHABET_JOURNEYS[1]}
                onSelect={onSelectAlphabet || (() => {})}
                index={2}
                isLocked={isThemeLocked(ALPHABET_JOURNEYS[1])}
                onLockedClick={handleLockedClick}
              />
              <ThemeCard
                key={THEMES[1].id}
                theme={THEMES[1]}
                onSelect={onSelectTheme}
                index={3}
                isLocked={isThemeLocked(THEMES[1])}
                onLockedClick={handleLockedClick}
              />
              {/* Row 3: Desert Letters + Desert Caravan */}
              <AlphabetCard
                key={ALPHABET_JOURNEYS[2].id}
                section={ALPHABET_JOURNEYS[2]}
                onSelect={onSelectAlphabet || (() => {})}
                index={4}
                isLocked={isThemeLocked(ALPHABET_JOURNEYS[2])}
                onLockedClick={handleLockedClick}
              />
              <ThemeCard
                key={THEMES[2].id}
                theme={THEMES[2]}
                onSelect={onSelectTheme}
                index={5}
                isLocked={isThemeLocked(THEMES[2])}
                onLockedClick={handleLockedClick}
              />
            </div>
            {/* Special Journeys (full width) */}
            <div className="mt-3 flex flex-col gap-2">
              {SPECIAL_JOURNEYS.map((journey, i) => (
                <SpecialJourneyCard
                  key={journey.id}
                  journey={journey}
                  onSelect={onSelectSpecialJourney || onSelectTheme}
                  index={6 + i}
                  isLocked={!(isPremium || isAdmin) && journey.premium}
                  onLockedClick={handleLockedClick}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Separate sections with 3 columns each */}
          <div className="hidden sm:block w-full max-w-6xl px-4">
            {/* Arabic Alphabet Learning Section */}
            <h2 className="text-center text-white/90 text-lg font-bold mb-2 flex items-center justify-center gap-2">
              <span className="text-lg">📚</span>
              <span>Learn Arabic Alphabet</span>
              <span className="font-arabic text-yellow-300 text-sm">حروف الهجاء</span>
            </h2>
            <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5">
              {ALPHABET_JOURNEYS.map((section, index) => (
                <AlphabetCard
                  key={section.id}
                  section={section}
                  onSelect={onSelectAlphabet || (() => {})}
                  index={index}
                  isLocked={isThemeLocked(section)}
                  onLockedClick={handleLockedClick}
                />
              ))}
            </div>
          </div>

          {/* Divider - Desktop only */}
          <div className="hidden sm:flex w-full max-w-4xl px-8 items-center gap-3 py-1">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="text-white/60 text-xs font-medium">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          {/* Theme cards for Quran Journey - Desktop only */}
          <div className="hidden sm:block w-full max-w-6xl px-4">
            <h2 className="text-center text-white/90 text-lg font-bold mb-2 flex items-center justify-center gap-2">
              <span className="text-lg">🕌</span>
              <span>Quran Journey Adventures</span>
              <span className="font-arabic text-yellow-300 text-sm">رحلات القرآن</span>
            </h2>
            <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5">
              {THEMES.map((theme, index) => (
                <ThemeCard
                  key={theme.id}
                  theme={theme}
                  onSelect={onSelectTheme}
                  index={index}
                  isLocked={isThemeLocked(theme)}
                  onLockedClick={handleLockedClick}
                />
              ))}
            </div>
          </div>

          {/* Special Journeys - Desktop only */}
          <div className="hidden sm:block w-full max-w-3xl px-6 mt-3 mb-4">
            <h2 className="text-center text-white/90 text-lg font-bold mb-2 flex items-center justify-center gap-2">
              <span className="text-xl">☪️</span>
              <span>Special Journeys</span>
              <span className="font-arabic text-yellow-300 text-sm">رحلات خاصة</span>
            </h2>
            <div className="flex flex-col gap-3">
              {SPECIAL_JOURNEYS.map((journey, i) => (
                <SpecialJourneyCard
                  key={journey.id}
                  journey={journey}
                  onSelect={onSelectSpecialJourney || onSelectTheme}
                  index={i}
                  isLocked={!(isPremium || isAdmin) && journey.premium}
                  onLockedClick={handleLockedClick}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer tagline - Smaller on mobile */}
        <footer className="text-center py-2 mt-2 mb-2">
          <p className="text-white/80 text-xs sm:text-lg flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
            <span className="text-sm sm:text-xl">✨</span>
            <span className="font-medium tracking-wide">Learn Quran on a Magical Journey</span>
            <span className="text-sm sm:text-xl">✨</span>
          </p>
        </footer>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% {
            transform: perspective(1000px) translateY(0px);
          }
          50% {
            transform: perspective(1000px) translateY(-10px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-10px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-25px) translateX(5px) rotate(270deg);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            transform: skewX(-12deg) translateX(-100%);
          }
          100% {
            transform: skewX(-12deg) translateX(200%);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }

        .font-arabic {
          font-family: 'Scheherazade New', 'Amiri', serif;
        }
      `}</style>

      {/* Premium Gate Modal */}
      {showPremiumGate && (
        <KidsPremiumGate
          onClose={() => {
            setShowPremiumGate(false);
            setLockedTheme(null);
          }}
          lockedTheme={lockedTheme}
        />
      )}
    </div>
  );
};

export default KidsModeMenu;
