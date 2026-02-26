/**
 * Quran Sound Healing Room
 * Binaural frequencies + Islamic dhikr for different states
 * Sleep mode, Focus mode, Healing mode with Ruqyah verses
 * Enhanced with real dhikr audio mixed with ambient sounds
 */

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Icons } from './Icons';

// Islamic Dhikr audio tracks - Soft, peaceful nasheeds for meditation
// Using calming, melodic recitations (NOT aggressive sound effects)
const DHIKR_AUDIO = {
  // Soft SubhanAllah Walhamdulillah - very peaceful
  subhanAllahWalhamdulillah: {
    url: 'https://archive.org/download/SubhanallahWalhamdulillah/Subhanallah%20Walhamdulillah.mp3',
    arabic: 'سبحان الله والحمد لله',
    transliteration: 'SubhanAllah Walhamdulillah',
    meaning: 'Glory to Allah and All Praise to Allah',
    duration: 210,
  },
  // Melodic La ilaha illallah
  laIlahaIllallah: {
    url: 'https://archive.org/download/YaRasoolallahYaHabeeballah2/La%20ilaha%20illallah.mp3',
    arabic: 'لا إله إلا الله',
    transliteration: 'La ilaha illallah',
    meaning: 'There is no god but Allah',
    duration: 96,
  },
  // Heart touching soft Allah dhikr
  allahu: {
    url: 'https://archive.org/download/YaRasoolallahYaHabeeballah2/Allahu%20%28Heart%20Touching%20Nasheed%29.mp3',
    arabic: 'الله',
    transliteration: 'Allah',
    meaning: 'Heart Touching Remembrance',
    duration: 276,
  },
  // 99 Names of Allah - Beautiful melodic recitation
  asmaUlHusna: {
    url: 'https://archive.org/download/asma-ul-husna-99-names-of-allah/Asma-ul-Husna%20%2899%20Names%20of%20Allah%29.mp3',
    arabic: 'أسماء الله الحسنى',
    transliteration: 'Asma ul Husna',
    meaning: '99 Beautiful Names of Allah',
    duration: 300,
  },
  // Soft Alhamdulillah nasheed
  giveThanksToAllah: {
    url: 'https://archive.org/download/YaRasoolallahYaHabeeballah2/GiveThanks%20To%20Allah.mp3',
    arabic: 'الحمد لله',
    transliteration: 'Alhamdulillah',
    meaning: 'All Praise and Thanks to Allah',
    duration: 30,
  },
  // Soft Durood/Salawat
  allahumaSalli: {
    url: 'https://archive.org/download/YaRasoolallahYaHabeeballah2/Allahumma%20salli%20%27ala.mp3',
    arabic: 'اللهم صل على',
    transliteration: 'Allahumma Salli Ala',
    meaning: 'O Allah send blessings upon the Prophet ﷺ',
    duration: 156,
  },
  // Peaceful Salaam
  assalatoAssalamu: {
    url: 'https://archive.org/download/YaRasoolallahYaHabeeballah2/Assalato%20assalamu.mp3',
    arabic: 'الصلاة والسلام',
    transliteration: 'Assalato Assalamu',
    meaning: 'Peace and Blessings',
    duration: 90,
  },
  // Ya Rahman - Soft and calming
  yaRahman: {
    url: 'https://archive.org/download/YaRasoolallahYaHabeeballah2/Ya%20Rahman.mp3',
    arabic: 'يا رحمن',
    transliteration: 'Ya Rahman',
    meaning: 'O Most Merciful',
    duration: 180,
  },
};

// Dhikr tracks for each healing mode - All soft and peaceful
const MODE_DHIKR = {
  sleep: ['subhanAllahWalhamdulillah', 'laIlahaIllallah', 'allahu'],
  focus: ['asmaUlHusna', 'giveThanksToAllah', 'allahumaSalli'], // Removed aggressive sound, using soft 99 names
  healing: ['asmaUlHusna', 'subhanAllahWalhamdulillah', 'laIlahaIllallah'],
  anxiety: ['yaRahman', 'allahu', 'assalatoAssalamu'], // Ya Rahman for anxiety relief
};

// Dhikr phrases info for display (when audio is playing)
const DHIKR_DISPLAY = {
  sleep: [
    { arabic: 'سبحان الله والحمد لله', transliteration: 'SubhanAllah Walhamdulillah', meaning: 'Glory to Allah and All Praise to Allah' },
    { arabic: 'لا إله إلا الله', transliteration: 'La ilaha illallah', meaning: 'There is no god but Allah' },
    { arabic: 'الله', transliteration: 'Allah', meaning: 'Peaceful Remembrance of Allah' },
  ],
  focus: [
    { arabic: 'أسماء الله الحسنى', transliteration: 'Asma ul Husna', meaning: '99 Beautiful Names of Allah' },
    { arabic: 'الحمد لله', transliteration: 'Alhamdulillah', meaning: 'All Praise to Allah' },
    { arabic: 'اللهم صل على', transliteration: 'Allahumma Salli Ala', meaning: 'Blessings upon the Prophet ﷺ' },
  ],
  healing: [
    { arabic: 'أسماء الله الحسنى', transliteration: 'Asma ul Husna', meaning: '99 Beautiful Names of Allah' },
    { arabic: 'سبحان الله والحمد لله', transliteration: 'SubhanAllah Walhamdulillah', meaning: 'Glory and Praise to Allah' },
    { arabic: 'لا إله إلا الله', transliteration: 'La ilaha illallah', meaning: 'There is no god but Allah' },
  ],
  anxiety: [
    { arabic: 'يا رحمن', transliteration: 'Ya Rahman', meaning: 'O Most Merciful - brings peace to hearts' },
    { arabic: 'الله', transliteration: 'Allah', meaning: 'Gentle Remembrance of Allah' },
    { arabic: 'الصلاة والسلام', transliteration: 'Assalato Assalamu', meaning: 'Peace and Blessings' },
  ],
};

// Binaural frequency configurations
const BINAURAL_FREQUENCIES = {
  delta: {
    name: 'Delta Waves',
    range: '0.5-4 Hz',
    description: 'Deep sleep, healing, rejuvenation',
    baseFreq: 100,
    beatFreq: 2, // Creates 2Hz delta wave
    color: '#6366F1',
  },
  theta: {
    name: 'Theta Waves',
    range: '4-8 Hz',
    description: 'Deep relaxation, meditation, creativity',
    baseFreq: 150,
    beatFreq: 6, // Creates 6Hz theta wave
    color: '#8B5CF6',
  },
  alpha: {
    name: 'Alpha Waves',
    range: '8-13 Hz',
    description: 'Relaxed focus, calm alertness',
    baseFreq: 200,
    beatFreq: 10, // Creates 10Hz alpha wave
    color: '#10B981',
  },
  beta: {
    name: 'Beta Waves',
    range: '13-30 Hz',
    description: 'Active thinking, concentration',
    baseFreq: 250,
    beatFreq: 18, // Creates 18Hz beta wave
    color: '#F59E0B',
  },
};

// Healing modes with specific configurations
const HEALING_MODES = {
  sleep: {
    id: 'sleep',
    name: 'Sleep Mode',
    nameAr: 'نوم هانئ',
    icon: 'Moon',
    description: 'Delta waves + soft recitation for peaceful sleep',
    frequency: 'delta',
    color: '#6366F1',
    gradient: 'from-indigo-600 to-purple-700',
    volume: 0.3,
    recitationSpeed: 0.8,
    duration: 30, // minutes
    verses: [
      { surah: 2, ayah: 255, name: 'Ayatul Kursi' },
      { surah: 112, ayah: 1, name: 'Al-Ikhlas' },
      { surah: 113, ayah: 1, name: 'Al-Falaq' },
      { surah: 114, ayah: 1, name: 'An-Nas' },
      { surah: 67, ayah: 1, name: 'Al-Mulk (beginning)' },
    ],
    ambientSound: 'night',
    tips: [
      'Listen with comfortable volume',
      'Use headphones for best binaural effect',
      'Set a timer to auto-stop',
      'Create a dark, quiet environment',
    ],
  },
  focus: {
    id: 'focus',
    name: 'Focus Mode',
    nameAr: 'تركيز وخشوع',
    icon: 'Brain',
    description: 'Alpha waves + measured pace for concentration',
    frequency: 'alpha',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    volume: 0.4,
    recitationSpeed: 1.0,
    duration: 25, // minutes (like Pomodoro)
    verses: [
      { surah: 1, ayah: 1, name: 'Al-Fatiha' },
      { surah: 18, ayah: 1, name: 'Al-Kahf (beginning)' },
      { surah: 36, ayah: 1, name: 'Ya-Sin (beginning)' },
      { surah: 55, ayah: 1, name: 'Ar-Rahman (beginning)' },
    ],
    ambientSound: 'nature',
    tips: [
      'Take breaks every 25 minutes',
      'Keep water nearby',
      'Sit in a comfortable position',
      'Minimize distractions',
    ],
  },
  healing: {
    id: 'healing',
    name: 'Healing Mode',
    nameAr: 'شفاء ورقية',
    icon: 'Heart',
    description: 'Theta waves + Ruqyah verses for spiritual healing',
    frequency: 'theta',
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-500',
    volume: 0.5,
    recitationSpeed: 0.9,
    duration: 20,
    verses: [
      { surah: 1, ayah: 1, name: 'Al-Fatiha (7x)' },
      { surah: 2, ayah: 255, name: 'Ayatul Kursi' },
      { surah: 2, ayah: 285, name: 'Last 2 verses of Baqarah' },
      { surah: 112, ayah: 1, name: 'Al-Ikhlas (3x)' },
      { surah: 113, ayah: 1, name: 'Al-Falaq (3x)' },
      { surah: 114, ayah: 1, name: 'An-Nas (3x)' },
      { surah: 10, ayah: 57, name: 'Healing verse' },
      { surah: 17, ayah: 82, name: 'Shifa verse' },
    ],
    ambientSound: 'water',
    tips: [
      'Have sincere intention for healing',
      'Make dua before and after',
      'Listen with full presence',
      'Place hand on area of pain if applicable',
    ],
  },
  anxiety: {
    id: 'anxiety',
    name: 'Calm Mode',
    nameAr: 'سكينة وطمأنينة',
    icon: 'CloudSun',
    description: 'Theta waves + calming verses for anxiety relief',
    frequency: 'theta',
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
    volume: 0.4,
    recitationSpeed: 0.85,
    duration: 15,
    verses: [
      { surah: 94, ayah: 1, name: 'Ash-Sharh (full)' },
      { surah: 93, ayah: 1, name: 'Ad-Duha (full)' },
      { surah: 13, ayah: 28, name: 'Hearts find rest' },
      { surah: 2, ayah: 286, name: 'Allah does not burden' },
      { surah: 65, ayah: 3, name: 'Tawakkul verse' },
    ],
    ambientSound: 'rain',
    tips: [
      'Breathe deeply and slowly',
      'Focus on the meanings',
      'Remember Allah\'s promise of ease',
      'Make dhikr alongside',
    ],
  },
};

// Ambient sound options
const AMBIENT_SOUNDS = {
  night: {
    name: 'Night Silence',
    description: 'Gentle night ambiance',
    url: 'https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3',
  },
  nature: {
    name: 'Nature',
    description: 'Birds and gentle breeze',
    url: 'https://assets.mixkit.co/active_storage/sfx/2514/2514-preview.mp3',
  },
  water: {
    name: 'Flowing Water',
    description: 'Gentle stream sounds',
    url: 'https://assets.mixkit.co/active_storage/sfx/2432/2432-preview.mp3',
  },
  rain: {
    name: 'Light Rain',
    description: 'Calming rainfall',
    url: 'https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3',
  },
};

// Binaural Beat Generator using Web Audio API
class BinauralBeatGenerator {
  constructor() {
    this.audioContext = null;
    this.leftOscillator = null;
    this.rightOscillator = null;
    this.gainNode = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.audioContext;
  }

  start(baseFreq, beatFreq, volume = 0.3) {
    if (this.isPlaying) this.stop();

    try {
      const audioContext = this.init();
      if (!audioContext) {
        console.error('[Binaural] AudioContext failed to initialize');
        return;
      }

      // Create gain node with null check
      this.gainNode = audioContext.createGain();
      if (!this.gainNode || !this.gainNode.gain) {
        console.error('[Binaural] Failed to create gain node');
        return;
      }
      this.gainNode.gain.value = volume;
      this.gainNode.connect(audioContext.destination);

      // Create stereo panner for left channel (Safari fallback)
      let leftPanner, rightPanner;
      try {
        leftPanner = audioContext.createStereoPanner();
        leftPanner.pan.value = -1;
        leftPanner.connect(this.gainNode);

        rightPanner = audioContext.createStereoPanner();
        rightPanner.pan.value = 1;
        rightPanner.connect(this.gainNode);
      } catch {
        // Safari doesn't support createStereoPanner - connect directly to gain node
        leftPanner = this.gainNode;
        rightPanner = this.gainNode;
      }

      // Create left oscillator with error handling
      this.leftOscillator = audioContext.createOscillator();
      if (!this.leftOscillator || !this.leftOscillator.frequency) {
        throw new Error('Failed to create left oscillator');
      }
      this.leftOscillator.type = 'sine';
      this.leftOscillator.frequency.value = baseFreq;
      this.leftOscillator.connect(leftPanner);

      // Create right oscillator with beat frequency difference
      this.rightOscillator = audioContext.createOscillator();
      if (!this.rightOscillator || !this.rightOscillator.frequency) {
        throw new Error('Failed to create right oscillator');
      }
      this.rightOscillator.type = 'sine';
      this.rightOscillator.frequency.value = baseFreq + beatFreq;
      this.rightOscillator.connect(rightPanner);

      // Start oscillators
      this.leftOscillator.start();
      this.rightOscillator.start();
      this.isPlaying = true;
    } catch (error) {
      console.error('[Binaural] Failed to start binaural beats:', error);
      this.stop();
      this.isPlaying = false;
    }
  }

  setVolume(volume) {
    if (this.gainNode) {
      this.gainNode.gain.value = Math.max(0, Math.min(1, volume));
    }
  }

  stop() {
    try {
      if (this.leftOscillator) {
        this.leftOscillator.stop();
        this.leftOscillator.disconnect();
        this.leftOscillator = null;
      }
      if (this.rightOscillator) {
        this.rightOscillator.stop();
        this.rightOscillator.disconnect();
        this.rightOscillator = null;
      }
      if (this.gainNode) {
        this.gainNode.disconnect();
        this.gainNode = null;
      }
    } catch {
      // Nodes may already be disconnected
    }
    this.isPlaying = false;
  }

  isActive() {
    return this.isPlaying;
  }
}

// Frequency Visualizer Component
const FrequencyVisualizer = memo(function FrequencyVisualizer({ isPlaying, frequency, color }) {
  const bars = 20;

  return (
    <div className="flex items-end justify-center gap-1 h-16">
      {Array.from({ length: bars }).map((_, i) => {
        const height = isPlaying
          ? 20 + Math.sin((Date.now() / 200) + i * 0.3) * 20 + Math.random() * 10
          : 8;
        return (
          <div
            key={i}
            className="w-1.5 rounded-full transition-all duration-150"
            style={{
              height: `${height}px`,
              backgroundColor: isPlaying ? color : 'rgba(255,255,255,0.2)',
              opacity: isPlaying ? 0.8 : 0.3,
            }}
          />
        );
      })}
    </div>
  );
});

// Mode Card Component
const ModeCard = memo(function ModeCard({ mode, isSelected, onClick }) {
  const Icon = Icons[mode.icon] || Icons.Heart;

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all text-left ${
        isSelected
          ? `bg-gradient-to-br ${mode.gradient} border-white/20 scale-105`
          : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isSelected ? 'bg-white/20' : `bg-${mode.color}/20`
          }`}
          style={{ backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : `${mode.color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color: isSelected ? 'white' : mode.color }} />
        </div>
        <div>
          <h4 className="text-white font-medium">{mode.name}</h4>
          <p className="text-white/60 text-xs" style={{ fontFamily: "'Scheherazade New', serif" }}>
            {mode.nameAr}
          </p>
        </div>
      </div>
      <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-white/50'}`}>
        {mode.description}
      </p>
    </button>
  );
});

// Active Session Component
const ActiveSession = memo(function ActiveSession({
  mode,
  isPlaying,
  timeRemaining,
  binauralVolume,
  ambientVolume,
  dhikrVolume,
  dhikrEnabled,
  currentDhikr,
  onTogglePlay,
  onStop,
  onBinauralVolumeChange,
  onAmbientVolumeChange,
  onDhikrVolumeChange,
  onDhikrToggle,
}) {
  const Icon = Icons[mode.icon] || Icons.Heart;
  const frequency = BINAURAL_FREQUENCIES[mode.frequency];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${mode.gradient} p-6 relative overflow-hidden`}>
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, white 0%, transparent 70%)`,
            animation: isPlaying ? 'pulse 4s ease-in-out infinite' : 'none',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{mode.name}</h3>
              <p className="text-white/70 text-sm">{frequency.name} • {frequency.range}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white">{formatTime(timeRemaining)}</p>
            <p className="text-white/60 text-xs">remaining</p>
          </div>
        </div>

        {/* Current Dhikr Display */}
        {dhikrEnabled && currentDhikr && (
          <div className="mb-4 p-4 rounded-xl bg-white/10 text-center"
               style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <p className="text-3xl text-white mb-1"
               style={{
                 fontFamily: "'Scheherazade New', serif",
                 animation: isPlaying ? 'dhikrGlow 3s ease-in-out infinite' : 'none'
               }}>
              {currentDhikr.arabic}
            </p>
            <p className="text-white/70 text-sm">{currentDhikr.transliteration}</p>
            <p className="text-white/50 text-xs mt-1">{currentDhikr.meaning}</p>
          </div>
        )}

        {/* Visualizer */}
        <div className="mb-6">
          <FrequencyVisualizer isPlaying={isPlaying} frequency={mode.frequency} color="white" />
        </div>

        {/* Dhikr Toggle */}
        <div className="mb-4 p-3 rounded-xl bg-black/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Icons.Volume2 className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Islamic Dhikr</p>
              <p className="text-white/50 text-xs">Allah's names mixed with ambient</p>
            </div>
          </div>
          <button
            onClick={onDhikrToggle}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              dhikrEnabled
                ? 'bg-amber-500 text-white'
                : 'bg-white/10 text-white/60'
            }`}
          >
            {dhikrEnabled ? 'On' : 'Off'}
          </button>
        </div>

        {/* Volume Controls */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div>
            <label className="text-white/70 text-xs mb-2 block">Binaural</label>
            <input
              type="range"
              min="0"
              max="100"
              value={binauralVolume}
              onChange={(e) => onBinauralVolumeChange(parseInt(e.target.value))}
              className="w-full accent-white"
            />
          </div>
          <div>
            <label className="text-white/70 text-xs mb-2 block">Ambient</label>
            <input
              type="range"
              min="0"
              max="100"
              value={ambientVolume}
              onChange={(e) => onAmbientVolumeChange(parseInt(e.target.value))}
              className="w-full accent-white"
            />
          </div>
          <div>
            <label className="text-white/70 text-xs mb-2 block flex items-center gap-1">
              Dhikr
              {!dhikrEnabled && <span className="text-white/40">(off)</span>}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={dhikrVolume}
              onChange={(e) => onDhikrVolumeChange(parseInt(e.target.value))}
              className="w-full accent-amber-400"
              disabled={!dhikrEnabled}
              style={{ opacity: dhikrEnabled ? 1 : 0.4 }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onStop}
            className="px-6 py-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all"
          >
            Stop Session
          </button>
          <button
            onClick={onTogglePlay}
            className="px-8 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-white/90 transition-all flex items-center gap-2"
          >
            {isPlaying ? (
              <>
                <Icons.Pause className="w-5 h-5" />
                Pause
              </>
            ) : (
              <>
                <Icons.Play className="w-5 h-5" />
                Resume
              </>
            )}
          </button>
        </div>

        {/* Tips */}
        <div className="mt-6 p-4 rounded-xl bg-black/20">
          <h4 className="text-white/80 text-sm font-medium mb-2">Tips for this session:</h4>
          <ul className="space-y-1">
            {mode.tips.map((tip, i) => (
              <li key={i} className="text-white/60 text-xs flex items-start gap-2">
                <span className="text-white/40">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

// Main Component
const SoundHealingRoom = memo(function SoundHealingRoom({ isVisible, onClose }) {
  const [selectedMode, setSelectedMode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [binauralVolume, setBinauralVolume] = useState(30);
  const [ambientVolume, setAmbientVolume] = useState(20);
  const [dhikrVolume, setDhikrVolume] = useState(70);
  const [dhikrEnabled, setDhikrEnabled] = useState(true);
  const [currentDhikr, setCurrentDhikr] = useState(null);
  const [dhikrIndex, setDhikrIndex] = useState(0);

  const binauralRef = useRef(null);
  const ambientAudioRef = useRef(null);
  const dhikrAudioRef = useRef(null);
  const timerRef = useRef(null);
  const dhikrIntervalRef = useRef(null);
  const dhikrStartTimeoutRef = useRef(null);

  // Initialize binaural generator
  useEffect(() => {
    binauralRef.current = new BinauralBeatGenerator();

    return () => {
      if (binauralRef.current) {
        binauralRef.current.stop();
      }
      if (ambientAudioRef.current) {
        ambientAudioRef.current.pause();
        ambientAudioRef.current.removeAttribute('src');
        ambientAudioRef.current.load();
      }
      if (dhikrAudioRef.current) {
        dhikrAudioRef.current.pause();
        dhikrAudioRef.current.removeAttribute('src');
        dhikrAudioRef.current.load();
      }
      if (dhikrStartTimeoutRef.current) {
        clearTimeout(dhikrStartTimeoutRef.current);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (dhikrIntervalRef.current) {
        clearInterval(dhikrIntervalRef.current);
      }
    };
  }, []);

  // Play dhikr audio
  const playDhikr = useCallback((mode, index) => {
    if (!dhikrEnabled || !mode) return;

    // Get dhikr tracks for this mode
    const modeTracks = MODE_DHIKR[mode.id] || MODE_DHIKR.sleep;
    const trackKey = modeTracks[index % modeTracks.length];
    const track = DHIKR_AUDIO[trackKey];

    if (!track) return;

    // Update display info
    const displayPhrases = DHIKR_DISPLAY[mode.id] || DHIKR_DISPLAY.sleep;
    const displayPhrase = displayPhrases[index % displayPhrases.length];
    setCurrentDhikr(displayPhrase);

    // Stop any currently playing dhikr audio
    if (dhikrAudioRef.current) {
      dhikrAudioRef.current.pause();
    }

    // Create and play new dhikr audio
    dhikrAudioRef.current = new Audio(track.url);
    dhikrAudioRef.current.volume = dhikrVolume / 100;
    dhikrAudioRef.current.play().catch((err) => {
      console.log('Dhikr audio playback failed:', err);
    });
  }, [dhikrEnabled, dhikrVolume]);

  // Start session
  const startSession = useCallback((mode) => {
    setSelectedMode(mode);
    setTimeRemaining(mode.duration * 60);
    setIsPlaying(true);
    setDhikrIndex(0);

    // Start binaural beats
    const freq = BINAURAL_FREQUENCIES[mode.frequency];
    binauralRef.current?.start(freq.baseFreq, freq.beatFreq, binauralVolume / 100);

    // Start ambient sound
    const ambient = AMBIENT_SOUNDS[mode.ambientSound];
    if (ambient) {
      if (ambientAudioRef.current) {
        ambientAudioRef.current.pause();
      }
      ambientAudioRef.current = new Audio(ambient.url);
      ambientAudioRef.current.loop = true;
      ambientAudioRef.current.volume = ambientVolume / 100;
      ambientAudioRef.current.play().catch(() => {});
    }

    // Play first dhikr after short delay (tracked for cleanup)
    if (dhikrEnabled) {
      dhikrStartTimeoutRef.current = setTimeout(() => playDhikr(mode, 0), 2000);
    }

    // Start dhikr interval (longer intervals for full audio tracks)
    // Tracks are 1-5 minutes each, so switch every 2-3 minutes
    let currentIndex = 1;
    const dhikrInterval = mode.id === 'sleep' ? 180000 : 120000; // 3 min or 2 min
    dhikrIntervalRef.current = setInterval(() => {
      if (dhikrEnabled) {
        playDhikr(mode, currentIndex);
        currentIndex++;
        setDhikrIndex(currentIndex);
      }
    }, dhikrInterval);

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          stopSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [binauralVolume, ambientVolume, dhikrEnabled, playDhikr, stopSession]);

  // Stop session
  const stopSession = useCallback(() => {
    setIsPlaying(false);
    setSelectedMode(null);
    setCurrentDhikr(null);

    binauralRef.current?.stop();

    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
      ambientAudioRef.current.removeAttribute('src');
      ambientAudioRef.current.load();
      ambientAudioRef.current = null;
    }

    if (dhikrAudioRef.current) {
      dhikrAudioRef.current.pause();
      dhikrAudioRef.current.removeAttribute('src');
      dhikrAudioRef.current.load();
      dhikrAudioRef.current = null;
    }

    if (dhikrStartTimeoutRef.current) {
      clearTimeout(dhikrStartTimeoutRef.current);
      dhikrStartTimeoutRef.current = null;
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (dhikrIntervalRef.current) {
      clearInterval(dhikrIntervalRef.current);
      dhikrIntervalRef.current = null;
    }
  }, []);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (!selectedMode) return;
    if (isPlaying) {
      binauralRef.current?.stop();
      ambientAudioRef.current?.pause();
      dhikrAudioRef.current?.pause();
      if (timerRef.current) clearInterval(timerRef.current);
      if (dhikrIntervalRef.current) clearInterval(dhikrIntervalRef.current);
    } else {
      const freq = BINAURAL_FREQUENCIES[selectedMode.frequency];
      binauralRef.current?.start(freq.baseFreq, freq.beatFreq, binauralVolume / 100);
      ambientAudioRef.current?.play().catch(() => {});
      dhikrAudioRef.current?.play().catch(() => {});

      // Resume dhikr interval (longer intervals for real audio tracks)
      let currentIndex = dhikrIndex;
      // Use longer intervals since audio tracks are full nasheeds
      const dhikrInterval = selectedMode.id === 'sleep' ? 180000 : 120000; // 3 min or 2 min
      dhikrIntervalRef.current = setInterval(() => {
        if (dhikrEnabled) {
          currentIndex++;
          playDhikr(selectedMode, currentIndex);
          setDhikrIndex(currentIndex);
        }
      }, dhikrInterval);

      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            stopSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, selectedMode, binauralVolume, dhikrEnabled, dhikrIndex, playDhikr, stopSession]);

  // Update binaural volume
  const handleBinauralVolumeChange = useCallback((value) => {
    setBinauralVolume(value);
    binauralRef.current?.setVolume(value / 100);
  }, []);

  // Update ambient volume
  const handleAmbientVolumeChange = useCallback((value) => {
    setAmbientVolume(value);
    if (ambientAudioRef.current) {
      ambientAudioRef.current.volume = value / 100;
    }
  }, []);

  // Update dhikr volume
  const handleDhikrVolumeChange = useCallback((value) => {
    setDhikrVolume(value);
    if (dhikrAudioRef.current) {
      dhikrAudioRef.current.volume = value / 100;
    }
  }, []);

  // Cleanup on close
  useEffect(() => {
    if (!isVisible) {
      stopSession();
    }
  }, [isVisible, stopSession]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900" />

      <div
        className="relative bg-black/40 backdrop-blur-lg rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Icons.Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Sound Healing Room</h2>
                <p className="text-white/60 text-sm">Binaural frequencies + Quran</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {selectedMode ? (
            <ActiveSession
              mode={selectedMode}
              isPlaying={isPlaying}
              timeRemaining={timeRemaining}
              binauralVolume={binauralVolume}
              ambientVolume={ambientVolume}
              dhikrVolume={dhikrVolume}
              dhikrEnabled={dhikrEnabled}
              currentDhikr={currentDhikr}
              onTogglePlay={togglePlay}
              onStop={stopSession}
              onBinauralVolumeChange={handleBinauralVolumeChange}
              onAmbientVolumeChange={handleAmbientVolumeChange}
              onDhikrVolumeChange={handleDhikrVolumeChange}
              onDhikrToggle={() => setDhikrEnabled(!dhikrEnabled)}
            />
          ) : (
            <>
              {/* Mode Selection */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-4">Choose Your Healing Mode</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.values(HEALING_MODES).map((mode) => (
                    <ModeCard
                      key={mode.id}
                      mode={mode}
                      isSelected={false}
                      onClick={() => startSession(mode)}
                    />
                  ))}
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Icons.Info className="w-4 h-4 text-white/60" />
                    About Binaural Beats
                  </h4>
                  <p className="text-white/60 text-sm">
                    Binaural beats are created when two slightly different frequencies are played in each ear.
                    Your brain perceives a third tone - the difference between the two frequencies - which can
                    help induce specific mental states.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <h4 className="text-amber-400 font-medium mb-2 flex items-center gap-2">
                    <Icons.Headphones className="w-4 h-4" />
                    Best Experience
                  </h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Use stereo headphones (required for binaural effect)</li>
                    <li>• Find a quiet, comfortable space</li>
                    <li>• Start with lower volumes and adjust</li>
                    <li>• Maintain consistent practice for best results</li>
                  </ul>
                </div>

                {/* Frequency Guide */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-3">Frequency Guide</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(BINAURAL_FREQUENCIES).map((freq) => (
                      <div key={freq.name} className="p-2 rounded-lg bg-white/5">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: freq.color }}
                          />
                          <span className="text-white text-sm font-medium">{freq.name}</span>
                        </div>
                        <p className="text-white/40 text-xs">{freq.range}</p>
                        <p className="text-white/60 text-xs">{freq.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {!selectedMode && (
          <div className="flex-shrink-0 p-4 border-t border-white/10 bg-white/5">
            <p className="text-white/40 text-xs text-center">
              🎧 Headphones required for binaural beats effect
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dhikrGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(251,191,36,0.4); }
        }
      `}</style>
    </div>
  );
});

export default SoundHealingRoom;
