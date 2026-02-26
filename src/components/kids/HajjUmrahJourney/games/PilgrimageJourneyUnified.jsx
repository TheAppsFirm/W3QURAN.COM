/**
 * PilgrimageJourneyUnified.jsx
 *
 * Unified immersive bird's eye experience for both Umrah and Hajj
 * Features: Auto-play, Audio, Duas, Vibration, Beautiful 3D scenes,
 *           Rich step details, Day/Night cycle, Mini-map, Quiz, Progress persistence
 */

import React, { useRef, useState, useCallback, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Sky, Stars, Sparkles, Cloud, Float, OrbitControls, Html
} from '@react-three/drei';
import * as THREE from 'three';
import { RealisticPilgrim, DustParticles, GoldenSparkles } from './EnhancedGraphics';
import { haptics } from './vibrationUtils';
import { HAJJ_STEPS as HAJJ_FULL_DATA, HAJJ_DAYS, HAJJ_COMPLETION } from '../data/hajjSteps';
import { UMRAH_STEPS as UMRAH_FULL_DATA, UMRAH_COMPLETION } from '../data/umrahSteps';

// ============================================================
// AUDIO UTILITIES - ENHANCED
// ============================================================
let audioContext = null;
let currentAudio = null;
let ambientSource = null;
let activeOscillators = []; // Track all oscillators so stopAudio() can kill them

const initAudio = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
};

// Callback for UI to track audio playback state
let _onAudioStateChange = null;
const registerAudioStateChange = (cb) => { _onAudioStateChange = cb; };

// Human voice audio file mapping (Arabic text → local MP3 path)
// These are authentic dua recordings from LifeWithAllah.com (Hisnul Muslim)
const HUMAN_VOICE_AUDIO = {};
const DUA_AUDIO_BASE = '/audio/hajj/';
const DUA_AUDIO_FILES = {
  'takbir-black-stone.mp3': 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
  'rabbana-atina.mp3': 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
  'safa-verse.mp3': 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ ۖ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ',
  'safa-marwah-dhikr.mp3': 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ',
  'talbiyah.mp3': 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ',
  'maqam-ibrahim.mp3': 'وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى',
  'arafat-dua.mp3': 'خَيْرُ الدُّعَاءِ دُعَاءُ يَوْمِ عَرَفَةَ',
  'jamarat-takbir.mp3': 'بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ',
  'ihram-dua.mp3': 'اللَّهُمَّ إِنِّي أُرِيدُ',
};
// Build reverse lookup: arabic text → audio file path
Object.entries(DUA_AUDIO_FILES).forEach(([file, arabic]) => {
  HUMAN_VOICE_AUDIO[arabic] = DUA_AUDIO_BASE + file;
});

// Audio duration cache — pre-seeded with measured MP3 durations (in ms)
// These are the real durations from the downloaded files so animation syncs from frame 1
const audioDurationCache = {
  'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ': 1900,
  'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ': 10944,
  'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ ۖ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ': 11448,
  'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ': 35232,
  'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ': 17544,
  'وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى': 5976,
  'خَيْرُ الدُّعَاءِ دُعَاءُ يَوْمِ عَرَفَةَ': 13128,
  'بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ': 2064,
  'اللَّهُمَّ إِنِّي أُرِيدُ': 6096,
};

// Play dua audio - uses human voice MP3 if available, falls back to speech synthesis
const playDuaAudio = (text) => {
  stopAudio();
  if (!text) return;

  _onAudioStateChange?.({ playing: true, text });

  // Check for human voice recording
  const audioPath = HUMAN_VOICE_AUDIO[text];
  if (audioPath) {
    const audio = new Audio(audioPath);
    currentAudio = audio;
    audio.volume = 1;
    audio.onended = () => {
      currentAudio = null;
      _onAudioStateChange?.({ playing: false });
    };
    audio.onerror = () => {
      // Fallback to speech synthesis if MP3 fails
      currentAudio = null;
      playDuaSpeech(text);
      const duration = Math.max(4000, Math.min(text.length * 120, 12000));
      const t = setTimeout(() => { _onAudioStateChange?.({ playing: false }); }, duration);
      _addUiTimer?.(t);
    };
    // Cache duration once known
    audio.onloadedmetadata = () => {
      if (audio.duration && audio.duration !== Infinity) {
        audioDurationCache[text] = audio.duration * 1000;
      }
    };
    audio.play().catch(() => {
      // Autoplay blocked - fallback to speech
      currentAudio = null;
      playDuaSpeech(text);
      const duration = Math.max(4000, Math.min(text.length * 120, 12000));
      const t = setTimeout(() => { _onAudioStateChange?.({ playing: false }); }, duration);
      _addUiTimer?.(t);
    });
  } else {
    // No human voice available - use speech synthesis
    playDuaSpeech(text);
    const duration = Math.max(4000, Math.min(text.length * 120, 12000));
    const t = setTimeout(() => { _onAudioStateChange?.({ playing: false }); }, duration);
    _addUiTimer?.(t);
  }
};

const playDuaSpeech = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.7;
    utterance.pitch = 0.9;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }
};

const stopAudio = () => {
  // Stop all tracked oscillators (step sounds, circuit sounds, completion fanfare)
  activeOscillators.forEach(osc => { try { osc.stop(); } catch {} });
  activeOscillators = [];
  // Stop speech synthesis
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  // Stop HTML5 Audio element (dua MP3s) — null out callbacks to prevent late-firing
  // onerror/catch after unmount that could start uncancellable speech synthesis
  if (currentAudio) {
    currentAudio.onended = null;
    currentAudio.onerror = null;
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
};

// Estimate dua duration in milliseconds
// Uses cached real duration from MP3 if available, otherwise estimates from text length
const getDuaDurationMs = (arabicText) => {
  if (!arabicText) return 6000;
  // Use real duration if we've measured it from the MP3
  if (audioDurationCache[arabicText]) return audioDurationCache[arabicText];
  return Math.max(4000, Math.min(arabicText.length * 120, 12000));
};

// Get dua DISPLAY duration - how long the popup stays visible
// At least 6 seconds so user has time to read, plus buffer after audio
const getDuaDisplayMs = (arabicText, buffer = 1000) => {
  return Math.max(getDuaDurationMs(arabicText) + buffer, 6000);
};

// Play a beautiful melodic step sound (~0.8s)
const playStepSound = () => {
  try {
    initAudio();
    const notes = [392, 523.25, 659.25]; // G4, C5, E5 - pleasant chord
    notes.forEach((freq, i) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
      oscillator.start(audioContext.currentTime + i * 0.05);
      oscillator.stop(audioContext.currentTime + 0.8);
      activeOscillators.push(oscillator);
      oscillator.onended = () => { activeOscillators = activeOscillators.filter(o => o !== oscillator); };
    });
  } catch (e) {
    console.log('Audio not available');
  }
};

// Play Tawaf circuit completion sound (~0.6s)
const playTawafCircuitSound = (circuitNumber) => {
  try {
    initAudio();
    const baseNote = 261.63; // C4
    const scale = [1, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2];
    const freq = baseNote * scale[circuitNumber % 8];

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(freq * 1.5, audioContext.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.6);
    activeOscillators.push(oscillator);
    oscillator.onended = () => { activeOscillators = activeOscillators.filter(o => o !== oscillator); };
  } catch (e) {
    console.log('Audio not available');
  }
};

// Play completion fanfare (~1.1s total: 5 notes × 0.12 stagger + 0.6s last note)
const playCompletionSound = () => {
  try {
    initAudio();
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, i) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.type = i < 3 ? 'sine' : 'triangle';
      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + i * 0.12);
      gainNode.gain.setValueAtTime(0.25, audioContext.currentTime + i * 0.12);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.12 + 0.6);
      oscillator.start(audioContext.currentTime + i * 0.12);
      oscillator.stop(audioContext.currentTime + i * 0.12 + 0.6);
      activeOscillators.push(oscillator);
      oscillator.onended = () => { activeOscillators = activeOscillators.filter(o => o !== oscillator); };
    });
  } catch (e) {
    console.log('Audio not available');
  }
};

// Play ambient wind/crowd sound effect
const playAmbientSound = () => {
  try {
    initAudio();
    // Create noise for ambient effect
    const bufferSize = audioContext.sampleRate * 2;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.02;
    }
    ambientSource = audioContext.createBufferSource();
    ambientSource.buffer = buffer;
    ambientSource.loop = true;

    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400;

    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.1;

    ambientSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    ambientSource.start();
  } catch (e) {
    console.log('Ambient audio not available');
  }
};

const stopAmbientSound = () => {
  if (ambientSource) {
    try {
      ambientSource.stop();
    } catch (e) {}
    ambientSource = null;
  }
};

// Play Sa'i lap completion sound (~0.4s)
const playSaiLapSound = (lapNumber) => {
  try {
    initAudio();
    const freq = 329.63 * (1 + lapNumber * 0.1); // E4 base, rising

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(freq * 1.25, audioContext.currentTime + 0.08);
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
    activeOscillators.push(oscillator);
    oscillator.onended = () => { activeOscillators = activeOscillators.filter(o => o !== oscillator); };
  } catch (e) {
    console.log('Audio not available');
  }
};

// Mute-aware audio wrapper (set by component via ref)
let _isMuted = false;
const setMuted = (val) => { _isMuted = val; };
const guardedPlay = (fn, ...args) => { if (!_isMuted) fn(...args); };

// Timer registration callback — lets module-level audio functions track timers in the component
let _addUiTimer = null;
const registerAddUiTimer = (fn) => { _addUiTimer = fn; };

// ============================================================
// CAMERA VIEWS — cycle button in header
// ============================================================
const CAMERA_VIEWS = [
  { id: 'step', label: { en: 'Step', ur: 'قدم', ar: 'خطوة' }, icon: '🎬' },
  { id: 'birdseye', label: { en: "Bird's Eye", ur: 'بلند', ar: 'عُلوي' }, icon: '🦅' },
  { id: 'follow', label: { en: 'Follow', ur: 'پیچھے', ar: 'متابعة' }, icon: '🏃' },
  { id: 'free', label: { en: 'Free', ur: 'آزاد', ar: 'حر' }, icon: '🕹️' },
];

// ============================================================
// REAL-WORLD DISTANCE & TIME DATA (Tawaf + Sa'i)
// ============================================================
const TAWAF_STATS = {
  perCircuit: 300,   // meters (avg — inner ring ~250m, outer ~350m)
  total: 2100,       // 7 × 300
  perCircuitMin: 7,  // minutes avg per circuit
  totalMin: 50,      // estimated total for healthy person
};

const SAI_STATS = {
  perLap: 450,       // meters (Safa ↔ Marwah one-way)
  total: 3150,       // 7 × 450
  perLapMin: 8,      // minutes avg per lap
  totalMin: 55,      // estimated total for healthy person
};

// ============================================================
// RICH DATA MAPPING - attach full data from data files
// ============================================================
const UMRAH_ID_MAP = { ihram: 1, tawaf: 2, maqam_ibrahim: 3, sai: 4, halq: 5 };
const HAJJ_ID_MAP = {
  ihram: 1, mina1: 2, arafat: 3, muzdalifah: 4, jamarat1: 5,
  sacrifice: 6, halq: 7, tawaf_ifadah: 8, mina_days: 10, tawaf_wida: 12
  // sai + maqam_ibrahim use inline data only (no matching IDs in data file)
};

const enrichSteps = (inlineSteps, fullData, idMap) =>
  inlineSteps.map(step => {
    const rich = fullData.find(d => d.id === idMap[step.id]);
    return { ...step, richData: rich || null };
  });

// ============================================================
// AUTHENTIC TAWAF RECITATIONS (from Sunnah only)
// There are NO per-circuit specific duas in authentic hadith.
// Ibn Taymiyyah (Majmu' al-Fatawa 26/122): circuit-specific duas "have no basis"
// Only TWO specific recitations are authentically established:
// ============================================================
const TAWAF_DUA = {
  // 1. Said when passing the Black Stone (start of each circuit)
  atBlackStone: {
    arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
    transliteration: 'Bismillahi wallahu Akbar',
    en: 'In the name of Allah, Allah is the Greatest.',
    ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے۔',
    ar: 'التكبير عند الحجر الأسود',
    source: 'Sahih al-Bukhari 1613'
  },
  // 2. Said between Rukn Yamani and Black Stone (last part of each circuit)
  betweenCorners: {
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    en: 'Our Lord, give us good in this world and in the Hereafter, and protect us from the torment of the Fire.',
    ur: 'اے ہمارے رب! ہمیں دنیا میں بھلائی دے اور آخرت میں بھلائی دے اور آگ کے عذاب سے بچا۔',
    ar: 'الدعاء بين الركن اليماني والحجر الأسود',
    source: 'Abu Dawud 1892, Quran 2:201'
  },
  // Note shown to user
  note: {
    en: 'Make any personal dua from your heart during the rest of each circuit. Recite Quran, do dhikr, or talk to Allah in any language.',
    ur: 'ہر چکر کے باقی حصے میں دل سے کوئی بھی دعا مانگیں۔ قرآن پڑھیں، ذکر کریں، یا کسی بھی زبان میں اللہ سے بات کریں۔',
    ar: 'ادعُ بما شئت من قلبك في بقية كل شوط. اقرأ القرآن، أو اذكر الله، أو تحدث إلى الله بأي لغة.'
  }
};

// For backward compat with animation speed sync (same dua every circuit)
const TAWAF_CIRCUIT_DUAS = Array.from({ length: 7 }, () => TAWAF_DUA.betweenCorners);

// ============================================================
// AUTHENTIC SA'I RECITATIONS (from Sunnah only)
// The same dhikr is recited at Safa and Marwah every time.
// Quran 2:158 is recited only once at the first approach to Safa.
// Sources: Sahih Muslim 1218a (Jabir's hadith)
// ============================================================
const SAI_DUA = {
  // Said only once, when first approaching Safa
  firstApproach: {
    arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ ۖ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ',
    transliteration: "Innas-Safa wal-Marwata min sha'a'irillah. Abda'u bima bada'Allahu bihi",
    en: 'Indeed, Safa and Marwah are among the symbols of Allah. I begin with what Allah began with.',
    ur: 'بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔ میں اس سے شروع کرتا ہوں جس سے اللہ نے شروع فرمایا۔',
    ar: 'آية الصفا والمروة - تُقال مرة واحدة فقط',
    source: 'Quran 2:158, Sahih Muslim 1218'
  },
  // Said at the top of Safa and Marwah (each time, 3 times with personal dua between)
  atHills: {
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ',
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. La ilaha illallahu wahdah, anjaza wa'dahu wa nasara 'abdahu wa hazamal-ahzaba wahdah",
    en: 'There is no god but Allah alone, with no partner. His is the dominion, His is the praise, and He has power over everything. He fulfilled His promise, supported His servant, and defeated the confederates alone.',
    ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ بادشاہی اسی کی ہے، حمد اسی کی ہے، وہ ہر چیز پر قادر ہے۔ اس نے اپنا وعدہ پورا کیا، اپنے بندے کی مدد کی، اور اکیلے تمام لشکروں کو شکست دی۔',
    ar: 'التهليل على الصفا والمروة — يُكرر ٣ مرات مع الدعاء بينها',
    source: 'Sahih Muslim 1218'
  },
  // Note shown to user
  note: {
    en: 'Recite this dhikr 3 times at each hill, making personal dua between each. Walk freely between the hills — make any dua in any language.',
    ur: 'یہ ذکر ہر پہاڑی پر ۳ بار پڑھیں، ہر بار کے درمیان ذاتی دعا مانگیں۔ پہاڑیوں کے درمیان آزادانہ چلیں — کسی بھی زبان میں دعا مانگیں۔',
    ar: 'اقرأ هذا الذكر ٣ مرات على كل تل، وادعُ بين كل مرة. وامشِ بين التلين بحرية — وادعُ بأي لغة شئت.'
  }
};

// For backward compat with animation speed sync (same dua every lap)
const SAI_LAP_DUAS = Array.from({ length: 7 }, () => SAI_DUA.atHills);

// ============================================================
// 5 MIQAT POINTS (Authentic, toward Kaaba)
// Source: Sahih al-Bukhari 1524, Sahih Muslim 1181
// ============================================================
const MIQAT_POINTS = [
  { name: { en: 'Dhul Hulayfah', ur: 'ذوالحلیفہ', ar: 'ذو الحليفة' }, direction: { en: 'Madinah (North)', ur: 'مدینہ (شمال)', ar: 'المدينة (شمال)' }, distance: '450km' },
  { name: { en: 'Al-Juhfah', ur: 'الجحفہ', ar: 'الجحفة' }, direction: { en: 'Syria/Egypt (NW)', ur: 'شام/مصر (شمال مغرب)', ar: 'الشام/مصر (شمال غرب)' }, distance: '183km' },
  { name: { en: 'Qarn al-Manazil', ur: 'قرن المنازل', ar: 'قرن المنازل' }, direction: { en: 'Najd/East', ur: 'نجد (مشرق)', ar: 'نجد (شرق)' }, distance: '75km' },
  { name: { en: 'Yalamlam', ur: 'یلملم', ar: 'يلملم' }, direction: { en: 'Yemen (South)', ur: 'یمن (جنوب)', ar: 'اليمن (جنوب)' }, distance: '92km' },
  { name: { en: 'Dhat Irq', ur: 'ذات عرق', ar: 'ذات عرق' }, direction: { en: 'Iraq (NE)', ur: 'عراق (شمال مشرق)', ar: 'العراق (شمال شرق)' }, distance: '94km' },
];

// ============================================================
// QUIZ QUESTIONS PER STEP
// ============================================================
const QUIZ_QUESTIONS = {
  ihram: {
    q: { en: 'Which of these is NOT a Miqat point?', ur: 'ان میں سے کون سا میقات نہیں ہے؟', ar: 'أيّ من هذه ليس ميقاتاً؟' },
    options: [
      { en: 'Dhul Hulayfah (ذوالحليفة)', ur: 'ذوالحلیفہ', ar: 'ذو الحليفة' },
      { en: 'Qarn al-Manazil (قرن المنازل)', ur: 'قرن المنازل', ar: 'قرن المنازل' },
      { en: 'Jabal Uhud (جبل أحد)', ur: 'جبل احد', ar: 'جبل أحد' },
      { en: 'Yalamlam (يلملم)', ur: 'یلملم', ar: 'يلملم' },
    ],
    correct: 2
  },
  tawaf: {
    q: { en: 'How many circuits in Tawaf?', ur: 'طواف میں کتنے چکر ہوتے ہیں؟', ar: 'كم شوطاً في الطواف؟' },
    options: ['5', '7', '3', '10'],
    correct: 1
  },
  sai: {
    q: { en: "Between which hills is Sa'i performed?", ur: 'سعی کن پہاڑیوں کے درمیان ہوتی ہے؟', ar: 'بين أي جبلين يكون السعي؟' },
    options: [
      { en: 'Safa & Marwah', ur: 'صفا و مروہ', ar: 'الصفا والمروة' },
      { en: 'Uhud & Hira', ur: 'احد و حرا', ar: 'أحد وحراء' },
      { en: 'Thawr & Noor', ur: 'ثور و نور', ar: 'ثور ونور' }
    ],
    correct: 0
  },
  arafat: {
    q: { en: 'What is the most important pillar of Hajj?', ur: 'حج کا سب سے اہم رکن کیا ہے؟', ar: 'ما هو أهم ركن في الحج؟' },
    options: [
      { en: 'Standing at Arafat', ur: 'وقوف عرفہ', ar: 'الوقوف بعرفة' },
      { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' },
      { en: 'Stoning', ur: 'رمی جمرات', ar: 'الرمي' }
    ],
    correct: 0
  },
  muzdalifah: {
    q: { en: 'How many pebbles to collect at Muzdalifah?', ur: 'مزدلفہ میں کتنی کنکریاں جمع کریں؟', ar: 'كم حصاة تجمع في مزدلفة؟' },
    options: ['7', '21', '49', '70'],
    correct: 2
  },
  jamarat1: {
    q: { en: 'How many pebbles thrown at the large pillar on Eid?', ur: 'عید کے دن بڑے جمرے پر کتنی کنکریاں؟', ar: 'كم حصاة ترمى يوم العيد؟' },
    options: ['3', '7', '21', '49'],
    correct: 1
  },
  halq: {
    q: { en: 'What does Halq mean?', ur: 'حلق کا مطلب کیا ہے؟', ar: 'ما معنى الحلق؟' },
    options: [
      { en: 'Shaving the head', ur: 'سر منڈوانا', ar: 'حلق الرأس' },
      { en: 'Trimming nails', ur: 'ناخن کاٹنا', ar: 'تقليم الأظافر' },
      { en: 'Wearing perfume', ur: 'خوشبو لگانا', ar: 'التطيب' }
    ],
    correct: 0
  },
  tawaf_ifadah: {
    q: { en: 'Tawaf al-Ifadah is a pillar of Hajj. When is it performed?', ur: 'طواف افاضہ حج کا رکن ہے۔ یہ کب ادا ہوتا ہے؟', ar: 'متى يؤدى طواف الإفاضة؟' },
    options: [
      { en: '10th Dhul Hijjah', ur: '10 ذوالحجہ', ar: '10 ذو الحجة' },
      { en: '8th Dhul Hijjah', ur: '8 ذوالحجہ', ar: '8 ذو الحجة' },
      { en: '13th Dhul Hijjah', ur: '13 ذوالحجہ', ar: '13 ذو الحجة' }
    ],
    correct: 0
  },
  tawaf_wida: {
    q: { en: 'What should you do right after Tawaf al-Wida?', ur: 'طواف وداع کے فوراً بعد کیا کرنا چاہیے؟', ar: 'ماذا تفعل بعد طواف الوداع مباشرة؟' },
    options: [
      { en: 'Leave Makkah directly', ur: 'فوراً مکہ سے نکلیں', ar: 'مغادرة مكة مباشرة' },
      { en: 'Go shopping', ur: 'خریداری کریں', ar: 'التسوق' },
      { en: 'Rest in hotel', ur: 'ہوٹل میں آرام', ar: 'الراحة في الفندق' }
    ],
    correct: 0
  },
};

// ============================================================
// JOURNEY STEPS DATA (inline with 3D positions)
// ============================================================
const UMRAH_STEPS = [
  {
    id: 'ihram',
    name: { en: 'Ihram', ur: 'احرام', ar: 'الإحرام' },
    position: [-70, 0, 50],  // Far from Makkah - representing Miqat distance
    color: '#10B981',
    dua: {
      arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ',
      transliteration: 'Labbayk Allahumma labbayk',
      en: 'Here I am, O Allah, here I am (Talbiyah)',
      ur: 'حاضر ہوں اے اللہ حاضر ہوں (تلبیہ)',
      source: 'Sahih al-Bukhari 1549, Muslim 1184'
    },
    description: {
      en: 'Wear your 2 white cloths at Miqat. Make your intention: "O Allah, I am doing Umrah." Then keep saying the Talbiyah out loud until you reach the Kaaba.',
      ur: 'میقات پر 2 سفید کپڑے پہنیں۔ نیت کریں: "اے اللہ میں عمرہ کر رہا ہوں۔" پھر کعبہ تک بلند آواز سے تلبیہ پڑھتے رہیں۔',
      ar: 'البس ثوبَي الإحرام عند الميقات. انوِ: "اللهم إني أريد العمرة." ثم ردّد التلبية بصوت مرتفع حتى تصل الكعبة.'
    },
    miqatInfo: {
      en: '5 Miqat Points with distances from Makkah:\n1) ★ Dhul Hulayfah - 450km (from Madinah) — Prophet ﷺ started here\n2) Juhfah/Rabigh - 183km (from Syria/Egypt)\n3) Qarn al-Manazil - 75km (from Najd)\n4) Yalamlam - 92km (from Yemen)\n5) Dhat Irq - 94km (from Iraq)',
      ur: 'مکہ سے 5 میقات کے فاصلے:\n1) ★ ذوالحلیفہ - 450 کلومیٹر (مدینہ) — نبی ﷺ نے یہاں سے شروع کیا\n2) جحفہ/رابغ - 183 کلومیٹر (شام/مصر سے)\n3) قرن المنازل - 75 کلومیٹر (نجد سے)\n4) یلملم - 92 کلومیٹر (یمن سے)\n5) ذات عرق - 94 کلومیٹر (عراق سے)',
      ar: '5 مواقيت مع المسافات من مكة:\n1) ★ ذو الحليفة - 450 كم (المدينة) — أحرم منه النبي ﷺ\n2) الجحفة/رابغ - 183 كم (الشام/مصر)\n3) قرن المنازل - 75 كم (نجد)\n4) يلملم - 92 كم (اليمن)\n5) ذات عرق - 94 كم (العراق)'
    },
    prophetMiqat: {
      en: "★ The Prophet ﷺ entered Ihram from Dhul Hulayfah (near Madinah) for both his Umrah and Farewell Hajj. (Sahih Muslim 1218)",
      ur: "★ نبی ﷺ نے عمرہ اور حجۃ الوداع دونوں کے لیے ذوالحلیفہ (مدینہ کے قریب) سے احرام باندھا۔ (صحیح مسلم 1218)",
      ar: "★ أحرم النبي ﷺ من ذي الحليفة (قرب المدينة) في عمرته وحجة الوداع. (صحيح مسلم 1218)"
    }
  },
  {
    id: 'tawaf',
    name: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' },
    position: [0, 0, 0],
    color: '#F59E0B',
    dua: {
      arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
      transliteration: 'Bismillahi wallahu Akbar',
      en: 'In the name of Allah, Allah is the Greatest (said at Black Stone)',
      ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے (حجر اسود پر)',
      source: 'Sahih al-Bukhari 1613'
    },
    description: {
      en: 'Stop saying Talbiyah now. Go to the Black Stone corner (it glows gold). Keep the Kaaba on your LEFT side. Walk around it 7 times. Make dua from your heart as you walk.',
      ur: 'اب تلبیہ بند کریں۔ حجر اسود کے کونے پر جائیں (سنہری روشنی)۔ کعبہ کو اپنے بائیں طرف رکھیں۔ 7 چکر لگائیں۔ چلتے ہوئے دل سے دعا مانگیں۔',
      ar: 'توقف عن التلبية. اذهب إلى ركن الحجر الأسود (يتوهج بالذهبي). اجعل الكعبة عن يسارك. طف حولها 7 مرات. ادعُ من قلبك أثناء المشي.'
    }
  },
  {
    id: 'maqam_ibrahim',
    name: { en: 'Maqam Ibrahim Prayer', ur: 'مقام ابراہیم نماز', ar: 'صلاة مقام إبراهيم' },
    position: [7, 0, 1],  // Just behind Maqam Ibrahim (3D structure at [5,0,0]), facing Kaaba
    color: '#F472B6',
    dua: {
      arabic: 'وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى',
      transliteration: "Wattakhidhu min maqami Ibrahima musalla",
      en: 'And take the station of Ibrahim as a place of prayer (Quran 2:125)',
      ur: 'اور مقام ابراہیم کو نماز کی جگہ بناؤ (قرآن 2:125)',
      source: 'Quran 2:125, Sahih Muslim 1218'
    },
    description: {
      en: 'Look for the small golden glass case near the Kaaba — that is Maqam Ibrahim. Stand behind it facing the Kaaba. Pray 2 short rakaat. Read Surah Kafirun in the 1st and Surah Ikhlas in the 2nd. Then drink Zamzam water.',
      ur: 'کعبہ کے قریب چھوٹا سنہری شیشے کا ڈبہ دیکھیں — یہ مقام ابراہیم ہے۔ اس کے پیچھے کعبہ کی طرف منہ کر کے کھڑے ہوں۔ 2 مختصر رکعت پڑھیں۔ پہلی میں سورہ کافرون اور دوسری میں سورہ اخلاص۔ پھر زمزم پئیں۔',
      ar: 'ابحث عن العلبة الزجاجية الذهبية الصغيرة قرب الكعبة — هذا مقام إبراهيم. قف خلفه مواجهاً الكعبة. صلِّ ركعتين خفيفتين. اقرأ سورة الكافرون في الأولى وسورة الإخلاص في الثانية. ثم اشرب ماء زمزم.'
    }
  },
  {
    id: 'sai',
    name: { en: "Sa'i", ur: 'سعی', ar: 'السعي' },
    position: [25, 0, 0],
    color: '#3B82F6',
    dua: {
      arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ ۖ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ',
      transliteration: "Innas-Safa wal-Marwata min sha'a'irillah. Abda'u bima bada'Allahu bihi",
      en: 'Indeed, Safa and Marwah are among the symbols of Allah. I begin with what Allah began with.',
      ur: 'بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔ میں اس سے شروع کرتا ہوں جس سے اللہ نے شروع فرمایا۔',
      source: 'Quran 2:158, Sahih Muslim 1218'
    },
    description: {
      en: 'Go to Safa hill first. Walk to Marwah hill, then back to Safa — that is 2 laps. Do this 7 times total (end at Marwah). Men should jog in the green-lit section. Make any dua you want while walking.',
      ur: 'پہلے صفا پہاڑی پر جائیں۔ مروہ تک چلیں، پھر واپس صفا — یہ 2 چکر ہیں۔ کل 7 بار کریں (مروہ پر ختم ہو)۔ سبز روشنی والے حصے میں مرد تیز چلیں۔ چلتے ہوئے جو چاہیں دعا مانگیں۔',
      ar: 'اذهب إلى جبل الصفا أولاً. امشِ إلى المروة ثم عُد إلى الصفا — هذان شوطان. كرر ذلك 7 مرات (تنتهي عند المروة). يُسرع الرجال في المنطقة المضاءة بالأخضر. ادعُ بما شئت أثناء المشي.'
    }
  },
  {
    id: 'halq',
    name: { en: 'Halq/Taqsir', ur: 'حلق/تقصیر', ar: 'الحلق/التقصير' },
    position: [10, 0, -8],
    color: '#8B5CF6',
    dua: {
      arabic: 'اللَّهُمَّ اغْفِرْ لِي ذُنُوبِي',
      transliteration: 'Allahumma-ghfir li dhunubi',
      en: 'O Allah, forgive my sins',
      ur: 'اے اللہ میرے گناہ معاف فرما'
    },
    description: {
      en: 'Go to a barber. Men: shave your whole head (best) or trim hair short. Women: cut a fingertip length from the end of your hair. Your Umrah is now complete! You can change back to normal clothes.',
      ur: 'حجام کے پاس جائیں۔ مرد: پورا سر منڈوائیں (بہتر) یا بال چھوٹے کروائیں۔ عورتیں: بالوں کے سرے سے انگلی کے برابر کاٹیں۔ آپ کا عمرہ مکمل ہو گیا! اب عام کپڑے پہن سکتے ہیں۔',
      ar: 'اذهب إلى الحلاق. الرجال: احلق رأسك كاملاً (الأفضل) أو قصّر شعرك. النساء: قصي بقدر أنملة من أطراف شعرك. اكتملت عمرتك! يمكنك العودة لملابسك العادية.'
    }
  }
];

const HAJJ_STEPS = [
  {
    id: 'ihram',
    name: { en: 'Ihram', ur: 'احرام', ar: 'الإحرام' },
    position: [-70, 0, 50],  // Far from Makkah - representing Miqat distance
    color: '#10B981',
    dua: {
      arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ',
      transliteration: 'Labbayk Allahumma labbayk',
      en: 'Here I am, O Allah, here I am (Talbiyah)',
      ur: 'حاضر ہوں اے اللہ حاضر ہوں (تلبیہ)',
      source: 'Sahih al-Bukhari 1549, Muslim 1184'
    },
    description: {
      en: '8th Dhul Hijjah. Put on your Ihram clothes again. Say: "O Allah, I am doing Hajj." Keep saying Talbiyah loudly from now until you throw stones on the 10th.',
      ur: '8 ذوالحجہ۔ دوبارہ احرام کے کپڑے پہنیں۔ کہیں: "اے اللہ میں حج کر رہا ہوں۔" اب سے لے کر 10 تاریخ کو کنکریاں مارنے تک بلند آواز سے تلبیہ پڑھتے رہیں۔',
      ar: '8 ذو الحجة. البس ملابس الإحرام مرة أخرى. انوِ: "اللهم إني أريد الحج." ردّد التلبية بصوت عالٍ من الآن حتى رمي الجمرات يوم 10.'
    },
    miqatInfo: {
      en: '5 Miqat Points with distances from Makkah:\n1) ★ Dhul Hulayfah - 450km (from Madinah) — Prophet ﷺ started here\n2) Juhfah/Rabigh - 183km (from Syria/Egypt)\n3) Qarn al-Manazil - 75km (from Najd)\n4) Yalamlam - 92km (from Yemen)\n5) Dhat Irq - 94km (from Iraq)',
      ur: 'مکہ سے 5 میقات کے فاصلے:\n1) ★ ذوالحلیفہ - 450 کلومیٹر (مدینہ) — نبی ﷺ نے یہاں سے شروع کیا\n2) جحفہ/رابغ - 183 کلومیٹر (شام/مصر سے)\n3) قرن المنازل - 75 کلومیٹر (نجد سے)\n4) یلملم - 92 کلومیٹر (یمن سے)\n5) ذات عرق - 94 کلومیٹر (عراق سے)',
      ar: '5 مواقيت مع المسافات من مكة:\n1) ★ ذو الحليفة - 450 كم (المدينة) — أحرم منه النبي ﷺ\n2) الجحفة/رابغ - 183 كم (الشام/مصر)\n3) قرن المنازل - 75 كم (نجد)\n4) يلملم - 92 كم (اليمن)\n5) ذات عرق - 94 كم (العراق)'
    },
    prophetMiqat: {
      en: "★ The Prophet ﷺ entered Ihram from Dhul Hulayfah (near Madinah) for his Farewell Hajj. (Sahih al-Bukhari 1524)",
      ur: "★ نبی ﷺ نے حجۃ الوداع کے لیے ذوالحلیفہ (مدینہ کے قریب) سے احرام باندھا۔ (صحیح بخاری 1524)",
      ar: "★ أحرم النبي ﷺ من ذي الحليفة في حجة الوداع. (صحيح البخاري 1524)"
    },
    day: 8
  },
  {
    id: 'mina1',
    name: { en: 'Mina (Day 1)', ur: 'منیٰ (پہلا دن)', ar: 'منى (اليوم الأول)' },
    position: [10, 0, -30],
    color: '#EC4899',
    dua: {
      arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ',
      transliteration: 'Labbayk Allahumma labbayk',
      en: 'Here I am, O Allah, here I am (continue Talbiyah)',
      ur: 'حاضر ہوں اے اللہ حاضر ہوں (تلبیہ جاری رکھیں)',
      source: 'Sahih al-Bukhari 1549 — Talbiyah continues until stoning on 10th'
    },
    description: {
      en: 'Go to Mina and stay the night in your tent. Pray all 5 prayers but make them short (2 rakaat instead of 4). Keep saying Talbiyah. Rest well — tomorrow is the big day at Arafat.',
      ur: 'منیٰ جائیں اور اپنے خیمے میں رات گزاریں۔ پانچوں نمازیں پڑھیں مگر مختصر (4 کی جگہ 2 رکعت)۔ تلبیہ جاری رکھیں۔ آرام کریں — کل عرفات کا بڑا دن ہے۔',
      ar: 'اذهب إلى منى وبِت في خيمتك. صلِّ الصلوات الخمس مقصورة (ركعتين بدل أربع). واصل التلبية. استرح — غداً يوم عرفة العظيم.'
    },
    day: 8
  },
  {
    id: 'arafat',
    name: { en: 'Arafat', ur: 'عرفات', ar: 'عرفات' },
    position: [45, 0, -35],
    color: '#8B5CF6',
    dua: {
      arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
      en: 'There is no god but Allah alone, with no partner. His is the dominion, His is the praise, and He has power over all things.',
      ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ بادشاہی اسی کی ہے، حمد اسی کی ہے، وہ ہر چیز پر قادر ہے۔',
      source: 'Tirmidhi 3585 — "The best dua is on the Day of Arafat"'
    },
    description: {
      en: '9th Dhul Hijjah — the MOST important day of Hajj. Stand anywhere in Arafat from after Dhuhr until sunset. Raise your hands and make dua from your heart. Cry, beg Allah, ask for everything. This is when sins are forgiven.',
      ur: '9 ذوالحجہ — حج کا سب سے اہم دن۔ ظہر کے بعد سے مغرب تک عرفات میں کہیں بھی کھڑے ہوں۔ ہاتھ اٹھائیں اور دل سے دعا مانگیں۔ روئیں، اللہ سے مانگیں، سب کچھ مانگیں۔ یہ وہ وقت ہے جب گناہ معاف ہوتے ہیں۔',
      ar: '9 ذو الحجة — أهم يوم في الحج. قف في أي مكان بعرفة من بعد الظهر حتى الغروب. ارفع يديك وادعُ من قلبك. ابكِ وتضرع واسأل الله كل شيء. هذا وقت مغفرة الذنوب.'
    },
    day: 9
  },
  {
    id: 'muzdalifah',
    name: { en: 'Muzdalifah', ur: 'مزدلفہ', ar: 'مزدلفة' },
    position: [25, 0, -45],
    color: '#06B6D4',
    dua: {
      arabic: 'فَاذْكُرُوا اللَّهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ وَاذْكُرُوهُ كَمَا هَدَاكُمْ',
      transliteration: "Fadhkurullaha 'indal-Mash'aril-Haram wadhkuruhu kama hadakum",
      en: 'Remember Allah at al-Mash\'ar al-Haram, and remember Him as He has guided you (Quran 2:198)',
      ur: 'مشعر الحرام کے پاس اللہ کو یاد کرو اور اسے ایسے یاد کرو جیسے اس نے تمہیں ہدایت دی (قرآن 2:198)',
      source: 'Quran 2:198, Sahih Muslim 1218 — Pray Maghrib+Isha combined, then make dhikr until Fajr'
    },
    description: {
      en: 'After sunset, leave Arafat for Muzdalifah. Pray Maghrib and Isha together (combine them). Sleep under the open sky. Before Fajr, pick up 49 small pebbles (chickpea size) from the ground — you will need them for stoning.',
      ur: 'مغرب کے بعد عرفات سے مزدلفہ جائیں۔ مغرب اور عشاء ایک ساتھ پڑھیں۔ کھلے آسمان تلے سوئیں۔ فجر سے پہلے زمین سے 49 چھوٹی کنکریاں (چنے کے سائز) اٹھائیں — رمی کے لیے چاہیے ہوں گی۔',
      ar: 'بعد الغروب، انطلق من عرفة إلى مزدلفة. صلِّ المغرب والعشاء جمعاً. نَم تحت السماء المفتوحة. قبل الفجر، التقط 49 حصاة صغيرة (بحجم الحمص) من الأرض — ستحتاجها للرمي.'
    },
    day: 9
  },
  {
    id: 'jamarat1',
    name: { en: 'Jamarat (Eid Day)', ur: 'جمرات (عید)', ar: 'الجمرات (يوم العيد)' },
    position: [12, 0, -38],
    color: '#EF4444',
    dua: {
      arabic: 'بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ',
      transliteration: 'Bismillahi, Allahu Akbar',
      en: 'In the name of Allah, Allah is the Greatest',
      ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے'
    },
    description: {
      en: '10th Dhul Hijjah — Eid day! Go to the Jamarat bridge. Find the LARGE pillar (the last one). Throw 7 pebbles one by one. Say "Allahu Akbar" with each throw. Stop saying Talbiyah after this.',
      ur: '10 ذوالحجہ — عید کا دن! جمرات پل پر جائیں۔ بڑا ستون (آخری) تلاش کریں۔ ایک ایک کر کے 7 کنکریاں ماریں۔ ہر پھینکنے پر "اللہ اکبر" کہیں۔ اس کے بعد تلبیہ بند کر دیں۔',
      ar: '10 ذو الحجة — يوم العيد! اذهب إلى جسر الجمرات. ابحث عن العمود الكبير (الأخير). ارمِ 7 حصيات واحدة تلو الأخرى. كبّر مع كل رمية. توقف عن التلبية بعد هذا.'
    },
    day: 10
  },
  {
    id: 'sacrifice',
    name: { en: 'Sacrifice (Hady)', ur: 'قربانی (ہدی)', ar: 'الهدي' },
    position: [5, 0, -32],
    color: '#F97316',
    dua: {
      arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اللَّهُمَّ هَذَا مِنْكَ وَلَكَ',
      transliteration: 'Bismillahi wallahu Akbar, Allahumma hadha minka wa lak',
      en: 'In the name of Allah, Allah is the Greatest. O Allah, this is from You and for You',
      ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے۔ یہ تیری طرف سے ہے اور تیرے لیے ہے',
      source: 'Sahih Muslim 1966'
    },
    description: {
      en: 'Offer an animal sacrifice (sheep, goat, cow, or camel). You can pay someone to do it for you. Say Bismillah before the sacrifice. The meat is shared with the poor.',
      ur: 'جانور کی قربانی دیں (بھیڑ، بکری، گائے، یا اونٹ)۔ آپ کسی سے بھی کروا سکتے ہیں۔ قربانی سے پہلے بسم اللہ کہیں۔ گوشت غریبوں میں بانٹا جاتا ہے۔',
      ar: 'اذبح أضحية (خروف أو بقرة أو ناقة). يمكنك توكيل غيرك. قل بسم الله قبل الذبح. يُوزع اللحم على الفقراء.'
    },
    day: 10
  },
  {
    id: 'halq',
    name: { en: 'Halq/Taqsir', ur: 'حلق', ar: 'الحلق' },
    position: [-10, 0, -20],
    color: '#6366F1',
    dua: {
      arabic: 'الْحَمْدُ لِلَّهِ الَّذِي قَضَى عَنَّا نُسُكَنَا',
      transliteration: "Alhamdu lillahil-ladhi qada 'anna nusukana",
      en: 'Praise be to Allah who has completed our rites for us',
      ur: 'تمام تعریفیں اللہ کے لیے جس نے ہمارے مناسک پورے کر دیے'
    },
    description: {
      en: 'Go to a barber and shave your head (best for men) or trim hair short. Women cut a fingertip length. After this you can wear normal clothes, use perfume — most Ihram rules are lifted now.',
      ur: 'حجام کے پاس جائیں اور سر منڈوائیں (مردوں کے لیے بہتر) یا بال چھوٹے کروائیں۔ عورتیں انگلی کے برابر کاٹیں۔ اس کے بعد عام کپڑے پہن سکتے ہیں، خوشبو لگا سکتے ہیں — احرام کے اکثر پابندیاں ختم ہو جاتی ہیں۔',
      ar: 'اذهب إلى الحلاق واحلق رأسك (الأفضل للرجال) أو قصّر شعرك. النساء تقصّ بقدر أنملة. بعد هذا يمكنك لبس الملابس العادية والتطيب — رُفعت أغلب محظورات الإحرام.'
    },
    day: 10
  },
  {
    id: 'tawaf_ifadah',
    name: { en: 'Tawaf al-Ifadah', ur: 'طواف افاضہ', ar: 'طواف الإفاضة' },
    position: [0, 0, 0],
    color: '#F59E0B',
    dua: {
      arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
      en: 'Our Lord, give us good in this world and good in the Hereafter, and save us from the torment of the Fire',
      ur: 'اے ہمارے رب! ہمیں دنیا میں بھی بھلائی دے اور آخرت میں بھی بھلائی دے اور ہمیں آگ کے عذاب سے بچا',
      source: 'Quran 2:201'
    },
    description: {
      en: 'Go back to the Kaaba. This Tawaf is FARD (obligatory) — your Hajj is not valid without it. Walk 7 times around the Kaaba starting from the Black Stone. Keep Kaaba on your LEFT.',
      ur: 'کعبہ واپس جائیں۔ یہ طواف فرض ہے — اس کے بغیر حج مکمل نہیں۔ حجر اسود سے شروع کر کے کعبہ کے 7 چکر لگائیں۔ کعبہ کو بائیں طرف رکھیں۔',
      ar: 'عُد إلى الكعبة. هذا الطواف فرض — لا يصح حجك بدونه. طف 7 أشواط حول الكعبة بدءاً من الحجر الأسود. اجعل الكعبة عن يسارك.'
    },
    day: 10
  },
  {
    id: 'maqam_ibrahim',
    name: { en: 'Maqam Ibrahim Prayer', ur: 'مقام ابراہیم نماز', ar: 'صلاة مقام إبراهيم' },
    position: [7, 0, 1],
    color: '#F472B6',
    dua: {
      arabic: 'وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى',
      transliteration: "Wattakhidhu min maqami Ibrahima musalla",
      en: 'And take the station of Ibrahim as a place of prayer (Quran 2:125)',
      ur: 'اور مقام ابراہیم کو نماز کی جگہ بناؤ (قرآن 2:125)',
      source: 'Quran 2:125, Sahih Muslim 1218'
    },
    description: {
      en: 'Same as before — find the golden glass case (Maqam Ibrahim) near the Kaaba. Stand behind it, face the Kaaba, pray 2 quick rakaat. Then drink Zamzam water.',
      ur: 'پہلے کی طرح — کعبہ کے قریب سنہری شیشے کا ڈبہ (مقام ابراہیم) تلاش کریں۔ اس کے پیچھے کعبہ کی طرف منہ کر کے 2 مختصر رکعت پڑھیں۔ پھر زمزم پئیں۔',
      ar: 'كما فعلت سابقاً — ابحث عن العلبة الزجاجية الذهبية (مقام إبراهيم) قرب الكعبة. قف خلفه مواجهاً الكعبة وصلِّ ركعتين خفيفتين. ثم اشرب ماء زمزم.'
    },
    day: 10
  },
  {
    id: 'sai',
    name: { en: "Sa'i", ur: 'سعی', ar: 'السعي' },
    position: [25, 0, 0],
    color: '#3B82F6',
    dua: {
      arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ ۖ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ',
      transliteration: "Innas-Safa wal-Marwata min sha'a'irillah. Abda'u bima bada'Allahu bihi",
      en: 'Indeed, Safa and Marwah are among the symbols of Allah. I begin with what Allah began with.',
      ur: 'بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔ میں اس سے شروع کرتا ہوں جس سے اللہ نے شروع فرمایا۔',
      source: 'Quran 2:158, Sahih Muslim 1218'
    },
    description: {
      en: 'Same as Umrah Sa\'i. Start at Safa, walk to Marwah and back — 7 times total. Men jog in the green-lit section. End at Marwah. Make any dua while walking.',
      ur: 'عمرہ کی سعی کی طرح۔ صفا سے شروع کریں، مروہ تک چلیں اور واپس — کل 7 بار۔ سبز روشنی والے حصے میں مرد تیز چلیں۔ مروہ پر ختم ہو۔ چلتے ہوئے دعا مانگیں۔',
      ar: 'مثل سعي العمرة. ابدأ من الصفا، امشِ إلى المروة وعُد — 7 أشواط. يُسرع الرجال في المنطقة الخضراء. انتهِ عند المروة. ادعُ أثناء المشي.'
    },
    day: 10
  },
  {
    id: 'mina_days',
    name: { en: 'Days of Tashreeq', ur: 'ایام تشریق', ar: 'أيام التشريق' },
    position: [10, 0, -30],
    color: '#EC4899',
    dua: {
      arabic: 'اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ',
      transliteration: "Allahu Akbar Allahu Akbar, la ilaha illallah, wallahu Akbar Allahu Akbar, wa lillahil-hamd",
      en: 'Allah is the Greatest, Allah is the Greatest, there is no god but Allah. Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise',
      ur: 'اللہ سب سے بڑا ہے، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے، تمام تعریفیں اللہ کے لیے ہیں'
    },
    description: {
      en: '11th-13th Dhul Hijjah. Stay in Mina. Every day after Dhuhr, go to Jamarat bridge and throw 7 pebbles at EACH of the 3 pillars (small, medium, large = 21 pebbles/day). Say Takbir with each throw. You can leave on the 12th if you want (before sunset).',
      ur: '11-13 ذوالحجہ۔ منیٰ میں رہیں۔ ہر دن ظہر کے بعد جمرات پل پر جائیں اور تینوں ستونوں (چھوٹا، درمیانہ، بڑا) پر 7-7 کنکریاں ماریں (21 روزانہ)۔ ہر پھینکنے پر تکبیر کہیں۔ 12 تاریخ کو مغرب سے پہلے جا سکتے ہیں۔',
      ar: '11-13 ذو الحجة. أقم في منى. كل يوم بعد الظهر، اذهب لجسر الجمرات وارمِ 7 حصيات على كل من الجمرات الثلاث (الصغرى والوسطى والكبرى = 21 حصاة/يوم). كبّر مع كل رمية. يجوز المغادرة يوم 12 قبل الغروب.'
    },
    day: 11
  },
  {
    id: 'tawaf_wida',
    name: { en: 'Tawaf al-Wida', ur: 'طواف وداع', ar: 'طواف الوداع' },
    position: [0, 0, 0],
    color: '#10B981',
    dua: {
      arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
      en: 'Our Lord, give us good in this world and the Hereafter, and protect us from the Fire (same as all Tawaf)',
      ur: 'اے ہمارے رب! دنیا اور آخرت میں بھلائی دے اور آگ کے عذاب سے بچا (ہر طواف کی طرح)',
      source: 'Abu Dawud 1892, Quran 2:201'
    },
    description: {
      en: 'Your last act in Makkah. Walk 7 times around the Kaaba one final time to say goodbye. After this, leave Makkah directly — do not stay for shopping or rest. Your Hajj is complete! May Allah accept it.',
      ur: 'مکہ میں آپ کا آخری عمل۔ الوداع کہنے کے لیے آخری بار کعبہ کے 7 چکر لگائیں۔ اس کے بعد مکہ سے فوراً نکلیں — خریداری یا آرام کے لیے نہ رکیں۔ آپ کا حج مکمل ہوا! اللہ قبول فرمائے۔',
      ar: 'آخر عمل في مكة. طف حول الكعبة 7 أشواط أخيرة للوداع. بعدها غادر مكة مباشرة — لا تبقَ للتسوق أو الراحة. اكتمل حجك! تقبل الله منك.'
    },
    day: 13
  }
];

const GOLD = '#D4AF37';
const GOLD_LIGHT = '#E8C84A';
const GOLD_DARK = '#B8960F';
const KAABA_BLACK = '#0D0D0D';
const KAABA_DARK = '#141414';
const MARBLE = '#F5F0E8';
const SAND = '#D4B896';
const CLOCK_TOWER_COLOR = '#C9B896';
const MOSQUE_WHITE = '#FAFAFA';

// ============================================================
// 3D COMPONENTS
// ============================================================

// Animated Tawaf Path Ring (glowing circle showing the path)
const TawafPathRing = ({ active }) => {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current && active) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  if (!active) return null;

  return (
    <group position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Glowing Tawaf path */}
      <mesh ref={ringRef}>
        <ringGeometry args={[11.5, 12.5, 64]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
      {/* Path markers */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.sin(angle) * 12;
        const y = Math.cos(angle) * 12;
        return (
          <mesh key={i} position={[x, y, 0.1]}>
            <circleGeometry args={[0.3, 16]} />
            <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.8} />
          </mesh>
        );
      })}
    </group>
  );
};

// Crowd Pilgrims (background pilgrims for atmosphere)
// Spread across inner and outer rings — AVOID the main pilgrim's path (radius 12)
const CrowdPilgrims = ({ count = 25, radius = 12, center = [0, 0, 0] }) => {
  const pilgrims = useMemo(() => {
    const hash = (seed) => Math.abs(Math.sin(seed * 127.1 + 311.7) * 43758.5453) % 1;
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2 + hash(i) * 0.3;
      // Avoid main pilgrim path (radius 12): place crowd at inner (7-10.5) or outer (13.5-17) rings
      const isInner = i % 2 === 0;
      const r = isInner
        ? 7 + hash(i + 100) * 3.5   // inner ring: 7-10.5
        : 13.5 + hash(i + 100) * 3.5; // outer ring: 13.5-17
      return {
        position: [
          center[0] + Math.sin(angle) * r,
          0,
          center[2] + Math.cos(angle) * r
        ],
        scale: 0.7 + hash(i + 200) * 0.3,
        angle: angle + Math.PI / 2,
        speed: 0.08 + hash(i + 300) * 0.08
      };
    });
  }, [count, radius, center[0], center[1], center[2]]);

  return (
    <group>
      {pilgrims.map((p, i) => (
        <AnimatedCrowdPilgrim key={i} {...p} index={i} />
      ))}
    </group>
  );
};

// Single animated crowd pilgrim - stays in its assigned ring, avoids main pilgrim path (radius 12)
const AnimatedCrowdPilgrim = ({ position, scale, angle, speed, index }) => {
  const ref = useRef();
  const initialAngle = useRef(angle);
  // Lock the radius from initial position — crowd stays in its ring
  const fixedRadius = useRef(Math.sqrt(position[0] ** 2 + position[2] ** 2));

  useFrame((state) => {
    if (ref.current) {
      const currentAngle = initialAngle.current + state.clock.elapsedTime * speed * 0.3;
      ref.current.position.x = Math.sin(currentAngle) * fixedRadius.current;
      ref.current.position.z = Math.cos(currentAngle) * fixedRadius.current;
      ref.current.rotation.y = currentAngle + Math.PI / 2;
    }
  });

  return (
    <group ref={ref} position={position}>
      {/* Simplified pilgrim - just body and head */}
      <mesh position={[0, 0.5 * scale, 0]} castShadow>
        <cylinderGeometry args={[0.12 * scale, 0.18 * scale, 0.9 * scale, 8]} />
        <meshStandardMaterial color="#F8F8F8" roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.0 * scale, 0]}>
        <sphereGeometry args={[0.1 * scale, 8, 8]} />
        <meshStandardMaterial color="#D4A574" roughness={0.6} />
      </mesh>
    </group>
  );
};

// Reusable label with connector line from 3D point to Html overlay
const LandmarkLabel = ({ from, to, color, emoji, name, nameUr, nameAr, locationId, lineWidth = 0.02 }) => {
  const dx = to[0] - from[0], dy = to[1] - from[1], dz = to[2] - from[2];
  const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const mx = (from[0] + to[0]) / 2, my = (from[1] + to[1]) / 2, mz = (from[2] + to[2]) / 2;
  const rotZ = Math.atan2(dx, dy);
  const rotX = Math.atan2(dz, Math.sqrt(dx * dx + dy * dy));
  // Show localized name; fallback: Ar label → Ur label → English
  const displayName = _sceneLanguage === 'ar' ? (nameAr || name) : _sceneLanguage === 'ur' ? (nameUr || nameAr || name) : name;
  const isRTLLabel = _sceneLanguage === 'ar' || _sceneLanguage === 'ur';
  return (
    <group>
      <mesh position={[mx, my, mz]} rotation={[rotX, 0, -rotZ]}>
        <cylinderGeometry args={[lineWidth, lineWidth, len, 4]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
      </mesh>
      {_showLabels && <Html position={to} center distanceFactor={50} zIndexRange={[50, 0]}>
        <div style={{ background: 'rgba(0,0,0,0.82)', padding: '3px 8px', borderRadius: 5, whiteSpace: 'nowrap', cursor: 'pointer', borderLeft: `2px solid ${color}`, backdropFilter: 'blur(4px)', boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          direction: isRTLLabel ? 'rtl' : 'ltr', fontFamily: isRTLLabel ? "'Noto Nastaliq Urdu', serif" : 'inherit' }} onClick={() => triggerLocationClick(locationId)}>
          <div style={{ color, fontSize: 9, fontWeight: 600 }}>{emoji} {displayName}</div>
        </div>
      </Html>}
    </group>
  );
};

// Animated beacon at the Black Stone — pulsing rings + light beam to clearly mark Tawaf start
const BlackStoneBeacon = () => {
  const beaconRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Pulsing light intensity
    if (beaconRef.current) beaconRef.current.intensity = 6 + Math.sin(t * 3) * 4;
    // Expanding rings
    if (ring1Ref.current) {
      const s1 = 1 + (t % 2) * 1.5;
      ring1Ref.current.scale.set(s1, s1, 1);
      ring1Ref.current.material.opacity = 0.8 - (t % 2) * 0.4;
    }
    if (ring2Ref.current) {
      const s2 = 1 + ((t + 1) % 2) * 1.5;
      ring2Ref.current.scale.set(s2, s2, 1);
      ring2Ref.current.material.opacity = 0.8 - ((t + 1) % 2) * 0.4;
    }
  });

  return (
    <>
      {/* Bright pulsing point light */}
      <pointLight ref={beaconRef} position={[0, 1, 0]} intensity={10} color="#FFD700" distance={15} />
      {/* Vertical light beam shooting up */}
      <mesh position={[0, 5, 0]}>
        <cylinderGeometry args={[0.15, 0.4, 10, 8]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1} transparent opacity={0.4} />
      </mesh>
      {/* Expanding pulse rings on ground */}
      <mesh ref={ring1Ref} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.5, 0.7, 32]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1} transparent opacity={0.8} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.5, 0.7, 32]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1} transparent opacity={0.5} />
      </mesh>
      {/* No sparkles — just the beam + rings */}
    </>
  );
};

// Detailed Kaaba with all authentic landmarks (matching reference diagram)
const Kaaba = ({ showTawafPath = false, showLabels = true }) => {
  return (
    <group position={[0, 0, 0]}>

      {/* ============================================= */}
      {/* 1. AUTHENTIC KAABA — Learned from reference GLB */}
      {/* Structure: Brick core > Kiswah cloth > Hizam    */}
      {/* ============================================= */}

      {/* KISWAH — Black silk cloth draped over the structure */}
      <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color={KAABA_BLACK} roughness={0.88} metalness={0.01} />
      </mesh>

      {/* Kiswah cloth drape folds — subtle vertical shadows from hanging fabric */}
      {[-1.8, -0.6, 0.6, 1.8].map((off, i) => (
        <group key={`df-${i}`}>
          {/* East/West folds */}
          <mesh position={[2.505, 2.2, off]}>
            <boxGeometry args={[0.015, 3.6, 0.05]} />
            <meshStandardMaterial color={KAABA_DARK} roughness={0.95} />
          </mesh>
          <mesh position={[-2.505, 2.2, off]}>
            <boxGeometry args={[0.015, 3.6, 0.05]} />
            <meshStandardMaterial color={KAABA_DARK} roughness={0.95} />
          </mesh>
          {/* North/South folds */}
          <mesh position={[off, 2.2, 2.505]}>
            <boxGeometry args={[0.05, 3.6, 0.015]} />
            <meshStandardMaterial color={KAABA_DARK} roughness={0.95} />
          </mesh>
          <mesh position={[off, 2.2, -2.505]}>
            <boxGeometry args={[0.05, 3.6, 0.015]} />
            <meshStandardMaterial color={KAABA_DARK} roughness={0.95} />
          </mesh>
        </group>
      ))}

      {/* ================================================= */}
      {/* HIZAM BELT — Gold Quranic calligraphy band         */}
      {/* Sits at ~2/3 height, embroidered with gold thread   */}
      {/* ================================================= */}
      <mesh position={[0, 4.15, 0]}>
        <boxGeometry args={[5.14, 0.75, 5.14]} />
        <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.2} emissive={GOLD} emissiveIntensity={0.12} />
      </mesh>
      {/* Belt trim lines (top and bottom) */}
      <mesh position={[0, 4.55, 0]}>
        <boxGeometry args={[5.18, 0.04, 5.18]} />
        <meshStandardMaterial color={GOLD_LIGHT} metalness={0.85} roughness={0.15} emissive={GOLD_LIGHT} emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 3.75, 0]}>
        <boxGeometry args={[5.18, 0.04, 5.18]} />
        <meshStandardMaterial color={GOLD_LIGHT} metalness={0.85} roughness={0.15} emissive={GOLD_LIGHT} emissiveIntensity={0.2} />
      </mesh>
      {/* Calligraphy verse panels on the belt — all 4 faces */}
      {[-1.8, -0.6, 0.6, 1.8].map((off, i) => (
        <group key={`bc-${i}`}>
          <mesh position={[2.58, 4.15, off]}>
            <boxGeometry args={[0.015, 0.45, 0.85]} />
            <meshStandardMaterial color={GOLD_DARK} metalness={0.7} roughness={0.3} emissive={GOLD_DARK} emissiveIntensity={0.06} />
          </mesh>
          <mesh position={[-2.58, 4.15, off]}>
            <boxGeometry args={[0.015, 0.45, 0.85]} />
            <meshStandardMaterial color={GOLD_DARK} metalness={0.7} roughness={0.3} emissive={GOLD_DARK} emissiveIntensity={0.06} />
          </mesh>
          <mesh position={[off, 4.15, 2.58]}>
            <boxGeometry args={[0.85, 0.45, 0.015]} />
            <meshStandardMaterial color={GOLD_DARK} metalness={0.7} roughness={0.3} emissive={GOLD_DARK} emissiveIntensity={0.06} />
          </mesh>
          <mesh position={[off, 4.15, -2.58]}>
            <boxGeometry args={[0.85, 0.45, 0.015]} />
            <meshStandardMaterial color={GOLD_DARK} metalness={0.7} roughness={0.3} emissive={GOLD_DARK} emissiveIntensity={0.06} />
          </mesh>
        </group>
      ))}

      {/* ================================================= */}
      {/* CALLIGRAPHY PANELS (Sitara) — hang below the belt  */}
      {/* 3 rectangular gold-framed panels per face           */}
      {/* ================================================= */}
      {[-1.2, 0, 1.2].map((off, i) => (
        <group key={`sp-${i}`}>
          {/* Calligraphy panels — single mesh per face (no overlapping pair) */}
          <mesh position={[2.508, 2.5, off]}><boxGeometry args={[0.012, 2.2, 0.7]} /><meshStandardMaterial color={GOLD} metalness={0.72} roughness={0.28} emissive={GOLD} emissiveIntensity={0.06} /></mesh>
          <mesh position={[-2.508, 2.5, off]}><boxGeometry args={[0.012, 2.2, 0.7]} /><meshStandardMaterial color={GOLD} metalness={0.72} roughness={0.28} emissive={GOLD} emissiveIntensity={0.06} /></mesh>
          <mesh position={[off, 2.5, 2.508]}><boxGeometry args={[0.7, 2.2, 0.012]} /><meshStandardMaterial color={GOLD} metalness={0.72} roughness={0.28} emissive={GOLD} emissiveIntensity={0.06} /></mesh>
          <mesh position={[off, 2.5, -2.508]}><boxGeometry args={[0.7, 2.2, 0.012]} /><meshStandardMaterial color={GOLD} metalness={0.72} roughness={0.28} emissive={GOLD} emissiveIntensity={0.06} /></mesh>
        </group>
      ))}

      {/* ================================================= */}
      {/* SHADHARWAN — Marble apron at base (authentic)      */}
      {/* Angled marble slope protecting the Kaaba base      */}
      {/* ================================================= */}
      {[
        { pos: [2.7, 0.2, 0], args: [0.3, 0.4, 5.4], rot: [0, 0, 0.15] },
        { pos: [-2.7, 0.2, 0], args: [0.3, 0.4, 5.4], rot: [0, 0, -0.15] },
        { pos: [0, 0.2, 2.7], args: [5.4, 0.4, 0.3], rot: [0.15, 0, 0] },
        { pos: [0, 0.2, -2.7], args: [5.4, 0.4, 0.3], rot: [-0.15, 0, 0] },
      ].map(({ pos, args, rot }, i) => (
        <mesh key={`shad-${i}`} position={pos} rotation={rot}>
          <boxGeometry args={args} />
          <meshStandardMaterial color="#E0D8C8" roughness={0.25} metalness={0.05} />
        </mesh>
      ))}

      {/* ================================================= */}
      {/* KISWAH HOLDING RINGS — Silver rings at base corners */}
      {/* (Learned from reference model: 4 corner cylinders) */}
      {/* ================================================= */}
      {[
        [2.3, 0.5, 2.3], [2.3, 0.5, -2.3], [-2.3, 0.5, -2.3], [-2.3, 0.5, 2.3],
        [2.3, 1.5, 2.3], [2.3, 1.5, -2.3], [-2.3, 1.5, -2.3], [-2.3, 1.5, 2.3],
      ].map(([x, y, z], i) => (
        <mesh key={`kr-${i}`} position={[x, y, z]}>
          <torusGeometry args={[0.12, 0.025, 8, 16]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.6} roughness={0.25} />
        </mesh>
      ))}

      {/* ============================== */}
      {/* ROOF — flat top                 */}
      {/* ============================== */}
      <mesh position={[0, 5.02, 0]}>
        <boxGeometry args={[5.05, 0.06, 5.05]} />
        <meshStandardMaterial color={KAABA_DARK} roughness={0.8} />
      </mesh>

      {/* ============================== */}
      {/* 2. AL MIZAAB (Rain Spout)      */}
      {/* Golden waterspout on NW roof   */}
      {/* ============================== */}
      <group position={[-2.5, 5.05, 0]} rotation={[0, 0, -0.2]}>
        <mesh position={[-0.7, 0.05, 0]}>
          <boxGeometry args={[1.6, 0.1, 0.45]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} emissive={GOLD} emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[-0.7, 0.14, 0.25]}>
          <boxGeometry args={[1.6, 0.18, 0.05]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.7, 0.14, -0.25]}>
          <boxGeometry args={[1.6, 0.18, 0.05]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-1.55, 0.05, 0]}>
          <boxGeometry args={[0.1, 0.2, 0.55]} />
          <meshStandardMaterial color={GOLD_LIGHT} metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* ========================================== */}
      {/* 3. DOOR OF THE KAABA (Bab al-Kaaba)       */}
      {/* Gold-plated door, eastern wall, elevated   */}
      {/* ========================================== */}
      <group position={[2.505, 2.2, 0]}>
        {/* Door frame — gold border flush with Kiswah surface */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.04, 2.9, 1.8]} />
          <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.15} emissive={GOLD} emissiveIntensity={0.1} />
        </mesh>
        {/* Door panel — solid gold plated, slightly recessed */}
        <mesh position={[-0.01, 0, 0]}>
          <boxGeometry args={[0.03, 2.6, 1.5]} />
          <meshStandardMaterial color={GOLD_DARK} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Center seam */}
        <mesh position={[0.01, 0, 0]}>
          <boxGeometry args={[0.01, 2.6, 0.04]} />
          <meshStandardMaterial color={GOLD_LIGHT} metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Door handle — silver ring */}
        <mesh position={[0.025, -0.3, 0.15]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.08, 0.02, 12, 24]} />
          <meshStandardMaterial color="#D0D0D0" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Platform/stairs to door */}
        <mesh position={[0.8, -1.7, 0]}>
          <boxGeometry args={[1.2, 0.3, 2]} />
          <meshStandardMaterial color={MARBLE} roughness={0.25} metalness={0.05} />
        </mesh>
        {/* Door warm glow */}
        <pointLight position={[0.3, 0, 0]} intensity={0.5} color="#FFD700" distance={3} />
      </group>

      {/* ============================== */}
      {/* 4. MULTAZAM                     */}
      {/* ============================== */}
      <group position={[2.53, 1.2, 1.5]}>
        <mesh>
          <boxGeometry args={[0.05, 2.2, 1.2]} />
          <meshStandardMaterial color="#151515" roughness={0.7} emissive="#FFD700" emissiveIntensity={0.02} />
        </mesh>
        <pointLight position={[0.4, 0, 0]} intensity={0.3} color="#FFD700" distance={2.5} />
      </group>

      {/* ============================== */}
      {/* 5. BLACK STONE (Hajar al-Aswad) */}
      {/* Silver frame + dark stone       */}
      {/* ============================== */}
      <group position={[2.55, 1.2, 2.55]}>
        {/* Silver frame (Qalb) */}
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.6, 24]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Inner recess */}
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.62, 24]} />
          <meshStandardMaterial color="#1A1A1A" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* The Black Stone */}
        <mesh position={[0.1, 0, 0.1]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial color="#0A0400" metalness={0.35} roughness={0.55} />
        </mesh>
        {/* Fragments */}
        {[[-0.08, 0.04, 0.08], [0.1, -0.04, -0.05], [-0.05, 0.02, -0.1]].map((p, i) => (
          <mesh key={`bs-${i}`} position={[p[0] * 0.8, p[1], p[2] * 0.8]}>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshStandardMaterial color="#140800" metalness={0.3} roughness={0.6} />
          </mesh>
        ))}
        <pointLight position={[0.2, 0.5, 0.2]} intensity={2} color="#FFD700" distance={4} />

        {/* Prominent pulsing beacon during Tawaf — "Start Here" indicator */}
        {showTawafPath && (
          <BlackStoneBeacon />
        )}
      </group>

      {/* ============================== */}
      {/* 6. YAMANI CORNER MARKER         */}
      {/* ============================== */}
      <mesh position={[-2.55, 1, 2.55]}>
        <cylinderGeometry args={[0.18, 0.18, 0.4, 16]} />
        <meshStandardMaterial color="#8B7355" roughness={0.6} emissive="#FFD700" emissiveIntensity={0.03} />
      </mesh>

      {/* ============================== */}
      {/* 7. HIJR ISMAIL (Al-Hateem)     */}
      {/* Semi-circular marble wall       */}
      {/* ============================== */}
      <group position={[-4, 0, 0]}>
        {/* Main wall — curved marble */}
        <mesh position={[0, 0.7, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[3, 0.4, 12, 48, Math.PI]} />
          <meshStandardMaterial color={MARBLE} roughness={0.25} metalness={0.05} />
        </mesh>
        {/* Wall top — green marble capping (from reference model: wall_green_top) */}
        <mesh position={[0, 1.15, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[3, 0.18, 8, 48, Math.PI]} />
          <meshStandardMaterial color="#4A8060" metalness={0.2} roughness={0.35} emissive="#2D5A3D" emissiveIntensity={0.05} />
        </mesh>
        {/* Floor inside Hijr — green marble (authentic) */}
        <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <ringGeometry args={[0, 3, 48, 1, 0, Math.PI]} />
          <meshStandardMaterial color="#D0DDD0" roughness={0.3} />
        </mesh>
        <pointLight position={[0, 1.5, 0]} intensity={0.4} color="#10B981" distance={5} />
      </group>

      {/* ============================== */}
      {/* 8. MAQAM IBRAHIM              */}
      {/* Golden glass enclosure         */}
      {/* ============================== */}
      <group position={[5, 0, 0]}>
        {/* Base platform - marble */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.9, 1, 0.2, 12]} />
          <meshStandardMaterial color={MARBLE} roughness={0.3} metalness={0.05} />
        </mesh>
        {/* Golden cage / glass enclosure */}
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 1.5, 8]} />
          <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.3} transparent opacity={0.55} />
        </mesh>
        {/* Golden dome on top */}
        <mesh position={[0, 1.85, 0]}>
          <sphereGeometry args={[0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={GOLD} metalness={0.75} roughness={0.25} emissive={GOLD} emissiveIntensity={0.15} />
        </mesh>
        {/* Finial on dome top */}
        <mesh position={[0, 2.4, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 2.55, 0]}>
          <coneGeometry args={[0.06, 0.2, 6]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
        </mesh>
        {/* The stone inside (footprints of Ibrahim AS) */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.35, 0.25, 0.25]} />
          <meshStandardMaterial color="#8B7355" roughness={0.8} />
        </mesh>
        {/* Warm light */}
        <pointLight position={[0, 1.2, 0]} intensity={0.6} color="#FFD700" distance={4} />
      </group>

      {/* ============================== */}
      {/* 9. ZAMZAM WELL                 */}
      {/* 3D well structure with dome    */}
      {/* ============================== */}
      <group position={[7, 0, -4]}>
        {/* Well base - circular stone rim */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[1.2, 1.3, 0.5, 16]} />
          <meshStandardMaterial color="#7B8B9A" roughness={0.6} metalness={0.1} />
        </mesh>
        {/* Inner well (dark water) */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.3, 16]} />
          <meshStandardMaterial color="#1A3A4A" roughness={0.2} metalness={0.3} />
        </mesh>
        {/* Water surface (reflective blue) */}
        <mesh position={[0, 0.32, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.85, 16]} />
          <meshStandardMaterial color="#4A90A4" roughness={0.1} metalness={0.4} transparent opacity={0.8} />
        </mesh>
        {/* Dome cover structure */}
        <group>
          {/* 4 pillars */}
          {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((a, i) => (
            <mesh key={`zp-${i}`} position={[Math.sin(a) * 0.9, 1, Math.cos(a) * 0.9]}>
              <cylinderGeometry args={[0.08, 0.08, 1.5, 6]} />
              <meshStandardMaterial color={MARBLE} roughness={0.3} />
            </mesh>
          ))}
          {/* Small dome */}
          <mesh position={[0, 1.9, 0]}>
            <sphereGeometry args={[1, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#4A90A4" roughness={0.4} transparent opacity={0.5} />
          </mesh>
          {/* Dome finial */}
          <mesh position={[0, 2.9, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
        {/* Water sparkle effect */}
        <Sparkles count={15} scale={2} size={2} speed={0.5} color="#4A90A4" opacity={0.6} position={[0, 0.5, 0]} />
      </group>

      {/* ============================== */}
      {/* MATAF FLOOR & GUIDE RINGS      */}
      {/* ============================== */}

      {/* Mataf floor - polished marble */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4, 20, 64]} />
        <meshStandardMaterial color={MARBLE} roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Mataf guide rings (concentric) */}
      {[6, 8, 10, 12, 14, 16, 18].map((radius, i) => (
        <mesh key={`mr-${i}`} position={[0, 0.03 + i * 0.003, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.04, radius + 0.04, 64]} />
          <meshStandardMaterial color="#D4C4A8" roughness={0.4} transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Green start line on Mataf (from Black Stone outward) */}
      <mesh position={[10, 0.04, 2.55]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 0.15]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
      </mesh>

      {/* Tawaf path visualization */}
      <TawafPathRing active={showTawafPath} />

      {/* ============================== */}
      {/* AMBIENT EFFECTS & CROWD        */}
      {/* ============================== */}
      <GoldenSparkles position={[0, 5, 0]} active={true} />
      <pointLight position={[0, 8, 0]} intensity={3} color={GOLD} distance={30} />
      <pointLight position={[0, 3, 0]} intensity={1} color="#FFFFFF" distance={15} />
      <CrowdPilgrims count={showTawafPath ? 60 : 30} radius={12} center={[0, 0, 0]} />

      {/* ================================================ */}
      {/* LABELS WITH CONNECTOR LINES - ALL LANDMARKS      */}
      {/* Toggled via showLabels button                     */}
      {/* ================================================ */}
      {showLabels && <>

      {/* Kaaba - top center */}
      <group>
        <mesh position={[0, 6.5, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 1.5, 4]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </mesh>
        <Html position={[0, 8, 0]} center distanceFactor={50} zIndexRange={[50, 0]}>
          <div style={{ background: 'rgba(0,0,0,0.85)', padding: '4px 12px', borderRadius: 6, textAlign: 'center', whiteSpace: 'nowrap', border: '1px solid rgba(255,215,0,0.6)', cursor: 'pointer', boxShadow: '0 2px 12px rgba(255,215,0,0.2)' }} onClick={() => triggerLocationClick('kaaba')}>
            <div style={{ color: '#FFD700', fontSize: 11, fontWeight: 700 }}>🕋 {L3D('Kaaba', 'کعبہ', 'الكعبة')}</div>
            <div style={{ color: '#FFD700', fontSize: 9, fontFamily: "'Scheherazade New', serif" }} dir="rtl">{L3D('Al-Kaaba Al-Musharrafah', 'الکعبۃ المشرفہ', 'الكعبة المشرفة')}</div>
          </div>
        </Html>
      </group>

      {/* Al Mizaab (Rain Spout) - top left */}
      <LandmarkLabel
        from={[-3.5, 5, 0]} to={[-7, 7.5, -2]}
        color="#FFD700" emoji="🌧️" name="Al Mizaab" nameAr="الميزاب"
        locationId="al_mizaab"
      />

      {/* Kiswah Cloth - left side */}
      <LandmarkLabel
        from={[-2.5, 3, 2]} to={[-7, 4.5, 4]}
        color="#1A1A1A" emoji="🕋" name="Kiswah Cloth" nameAr="كسوة الكعبة"
        locationId="kiswah"
      />

      {/* Door of the Ka'ba - right side */}
      <LandmarkLabel
        from={[2.8, 2.2, 0]} to={[8, 4, -3]}
        color="#D4AF37" emoji="🚪" name="Door of Ka'ba" nameAr="باب الكعبة"
        locationId="door_kaaba"
      />

      {/* Multazam - right side between door and black stone */}
      <LandmarkLabel
        from={[2.6, 1.2, 1.5]} to={[8, 2, 3]}
        color="#A855F7" emoji="🤲" name="Multazam" nameUr="ملتزم" nameAr="الملتزم"
        locationId="multazam"
      />

      {/* Black Stone (Hajar Aswad) - far right */}
      <LandmarkLabel
        from={[2.6, 1.2, 2.6]} to={[7, 3.5, 7]}
        color="#FF4444" emoji="⚫" name="Black Stone" nameUr="حجر اسود" nameAr="الحجر الأسود"
        locationId="hajr_aswad"
      />

      {/* Hijr Ismail (Al-Hateem) - far left */}
      <LandmarkLabel
        from={[-5, 1, 0]} to={[-10, 4, 1]}
        color="#8B5CF6" emoji="🌙" name="Hijr Isma'il" nameUr="حجر اسماعیل (حطیم)" nameAr="حجر إسماعيل (الحطيم)"
        locationId="hijr_ismail"
      />

      {/* Maqam Ibrahim - right */}
      <LandmarkLabel
        from={[5, 2.5, 0]} to={[9, 5.5, 0]}
        color="#FFD700" emoji="🪨" name="Maqam Ibrahim" nameUr="مقام ابراہیم" nameAr="مقام إبراهيم"
        locationId="maqam_ibrahim"
      />

      {/* Zamzam Well - right-bottom */}
      <LandmarkLabel
        from={[7, 2.5, -4]} to={[12, 4, -6]}
        color="#4A90A4" emoji="💧" name="Zamzam Well" nameUr="زمزم کنواں" nameAr="بئر زمزم"
        locationId="zamzam"
      />

      {/* === FOUR CORNER LABELS === */}

      {/* Shami Corner (NW) */}
      <LandmarkLabel
        from={[-2.6, 5.2, -2.6]} to={[-6, 7, -6]}
        color="#E8E0D0" emoji="📐" name="Shami Corner" nameUr="رکن شامی" nameAr="الركن الشامي"
        locationId="shami_corner"
      />

      {/* Iraqi Corner (NE) */}
      <LandmarkLabel
        from={[2.6, 5.2, -2.6]} to={[6, 7, -6]}
        color="#E8E0D0" emoji="📐" name="Iraqi Corner" nameUr="رکن عراقی" nameAr="الركن العراقي"
        locationId="iraqi_corner"
      />

      {/* Yamani Corner (SW) */}
      <LandmarkLabel
        from={[-2.6, 1, 2.6]} to={[-7, 2.5, 6]}
        color="#C9B896" emoji="📐" name="Yamani Corner" nameUr="رکن یمانی" nameAr="الركن اليماني"
        locationId="yamani_corner"
      />

      </>}
    </group>
  );
};

// Makkah Clock Tower (Abraj Al-Bait)
const ClockTower = ({ position = [0, 0, -50] }) => {
  return (
    <group position={position}>
      {/* Main tower body */}
      <mesh position={[0, 25, 0]} castShadow>
        <boxGeometry args={[12, 50, 12]} />
        <meshStandardMaterial color={CLOCK_TOWER_COLOR} roughness={0.6} />
      </mesh>

      {/* Tower top section */}
      <mesh position={[0, 52, 0]}>
        <boxGeometry args={[10, 4, 10]} />
        <meshStandardMaterial color="#A89878" roughness={0.5} />
      </mesh>

      {/* Clock face - 4 sides */}
      {[0, Math.PI/2, Math.PI, Math.PI*1.5].map((rot, i) => (
        <group key={i} position={[0, 45, 0]} rotation={[0, rot, 0]}>
          <mesh position={[0, 0, 6.1]}>
            <circleGeometry args={[5, 32]} />
            <meshStandardMaterial color="#1E3A5F" emissive="#1E3A5F" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, 0, 6.2]}>
            <ringGeometry args={[4.5, 5, 32]} />
            <meshStandardMaterial color={GOLD} metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Spire */}
      <mesh position={[0, 60, 0]}>
        <coneGeometry args={[3, 15, 8]} />
        <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Crescent on top */}
      <mesh position={[0, 70, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[1.5, 0.3, 8, 16, Math.PI * 1.5]} />
        <meshStandardMaterial color={GOLD} metalness={0.8} />
      </mesh>

      {/* Lights */}
      <pointLight position={[0, 45, 8]} intensity={2} color="#FFFFFF" distance={20} />
      <pointLight position={[0, 70, 0]} intensity={3} color={GOLD} distance={30} />

      {/* Label */}
      {_showLabels && <Html position={[0, 75, 0]} center distanceFactor={80}>
        <div style={{ background: 'rgba(0,0,0,0.7)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('clock_tower')}>
          <div style={{ color: '#FFD700', fontSize: 10, fontWeight: 700 }}>{L3D('Abraj Al-Bait', 'ابراج البیت', 'أبراج البيت')}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8 }}>{L3D('Clock Tower', 'کلاک ٹاور', 'ساعة مكة')}</div>
        </div>
      </Html>}
    </group>
  );
};

// Masjid al-Haram outer structure
const MasjidStructure = () => {
  return (
    <group>
      {/* Outer courtyard - expanded marble area */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[40, 64]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
      </mesh>

      {/* Arcade columns around courtyard */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const x = Math.sin(angle) * 32;
        const z = Math.cos(angle) * 32;
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh position={[0, 4, 0]} castShadow>
              <cylinderGeometry args={[0.5, 0.6, 8, 12]} />
              <meshStandardMaterial color={MOSQUE_WHITE} roughness={0.3} />
            </mesh>
            <mesh position={[0, 8.2, 0]}>
              <cylinderGeometry args={[0.8, 0.5, 0.5, 12]} />
              <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.4} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

// Miqat Station - Large boundary complex (represents one of 5 Miqat points)
// 5 Miqat Points - positioned around the scene pointing toward Kaaba (center)
// Authentic locations: Dhul Hulayfah (N), Al-Juhfah (NW), Qarn al-Manazil (E), Yalamlam (S), Dhat Irq (NE)
const MIQAT_3D_POSITIONS = [
  { pos: [-70, 0, 50], name: 'Dhul Hulayfah', nameAr: 'ذو الحليفة', dir: { en: 'Madinah', ur: 'مدینہ', ar: 'المدينة' }, id: 'dhul_hulayfah' },
  { pos: [-75, 0, -20], name: 'Al-Juhfah', nameAr: 'الجحفة', dir: { en: 'Syria/Egypt', ur: 'شام/مصر', ar: 'الشام/مصر' }, id: 'al_juhfah' },
  { pos: [80, 0, 20], name: 'Qarn al-Manazil', nameAr: 'قرن المنازل', dir: { en: 'Najd', ur: 'نجد', ar: 'نجد' }, id: 'qarn_manazil' },
  { pos: [-40, 0, -70], name: 'Yalamlam', nameAr: 'يلملم', dir: { en: 'Yemen', ur: 'یمن', ar: 'اليمن' }, id: 'yalamlam' },
  { pos: [60, 0, -50], name: 'Dhat Irq', nameAr: 'ذات عرق', dir: { en: 'Iraq', ur: 'عراق', ar: 'العراق' }, id: 'dhat_irq' },
];

// ============================================================
// LOCATION DETAILS - Shown when clicking location labels
// ============================================================
let _locationClickHandler = null;
const registerLocationClick = (handler) => { _locationClickHandler = handler; };
const triggerLocationClick = (id) => { _locationClickHandler?.(id); };

// Module-level language + label visibility for 3D label components (set from PilgrimageScene)
let _sceneLanguage = 'en';
let _showLabels = true;
const L3D = (en, ur, ar) => _sceneLanguage === 'ar' ? ar : _sceneLanguage === 'ur' ? ur : en;

const LOCATION_DETAILS = {
  kaaba: {
    emoji: '🕋',
    name: { en: 'The Holy Kaaba', ur: 'خانہ کعبہ', ar: 'الكعبة المشرفة' },
    description: {
      en: 'The most sacred site in Islam, located in the center of Masjid al-Haram in Makkah. Built by Prophet Ibrahim (AS) and his son Ismail (AS). It serves as the Qibla for 1.8 billion Muslims worldwide. The cubic structure is ~15m tall, covered by the black Kiswah with gold-embroidered Quranic verses.',
      ur: 'اسلام کا سب سے مقدس مقام، مکہ مکرمہ میں مسجد الحرام کے مرکز میں واقع۔ حضرت ابراہیم علیہ السلام اور حضرت اسماعیل علیہ السلام نے تعمیر کیا۔ دنیا بھر کے 1.8 ارب مسلمانوں کا قبلہ۔ تقریباً 15 میٹر اونچی عمارت پر سیاہ غلاف (کسوہ) ہے جس پر سونے سے قرآنی آیات کشیدہ ہیں۔',
      ar: 'أقدس مكان في الإسلام، في وسط المسجد الحرام بمكة. بناها إبراهيم وإسماعيل عليهما السلام. قبلة 1.8 مليار مسلم. ارتفاعها ~15م وتُكسى بالكسوة السوداء المطرزة بالذهب.'
    },
    source: 'Quran 2:127, 3:96'
  },
  maqam_ibrahim: {
    emoji: '🪨',
    name: { en: 'Maqam Ibrahim', ur: 'مقام ابراہیم', ar: 'مقام إبراهيم' },
    description: {
      en: 'The stone on which Prophet Ibrahim (AS) stood while building the Kaaba. It bears his footprints. After Tawaf, pilgrims pray 2 rak\'ahs behind it. "Take the Maqam of Ibrahim as a place of prayer." (Quran 2:125). Enclosed in a golden glass case.',
      ur: 'وہ پتھر جس پر حضرت ابراہیم علیہ السلام کعبہ کی تعمیر کے وقت کھڑے تھے۔ اس پر ان کے قدموں کے نشان ہیں۔ طواف کے بعد اس کے پیچھے 2 رکعت نماز پڑھی جاتی ہے۔ "مقام ابراہیم کو نماز کی جگہ بناؤ۔"',
      ar: 'الحجر الذي وقف عليه إبراهيم أثناء بناء الكعبة. يحمل أثر قدميه. يُصلي الحاج ركعتين خلفه بعد الطواف. "واتخذوا من مقام إبراهيم مصلى."'
    },
    source: 'Quran 2:125'
  },
  hajr_aswad: {
    emoji: '⚫',
    name: { en: 'Hajr-e-Aswad (Black Stone)', ur: 'حجر اسود', ar: 'الحجر الأسود' },
    description: {
      en: 'The Black Stone in the eastern corner of the Kaaba. Tawaf begins and ends here. The Prophet ﷺ said: "The Black Stone descended from Paradise whiter than milk, but the sins of the children of Adam made it black." Pilgrims kiss or point toward it saying "Bismillahi Allahu Akbar."',
      ur: 'کعبہ کے مشرقی کونے میں نصب سیاہ پتھر۔ طواف یہیں سے شروع اور ختم ہوتا ہے۔ نبی ﷺ نے فرمایا: "حجر اسود جنت سے دودھ سے سفید اترا تھا، بنی آدم کے گناہوں نے اسے سیاہ کیا۔"',
      ar: 'حجر في الركن الشرقي للكعبة. يبدأ الطواف وينتهي عنده. قال النبي ﷺ: "نزل الحجر الأسود من الجنة أشد بياضاً من اللبن فسودته خطايا بني آدم."'
    },
    source: 'Tirmidhi 877'
  },
  hijr_ismail: {
    emoji: '🌙',
    name: { en: 'Hijr Ismail (Hateem)', ur: 'حجر اسماعیل (حطیم)', ar: 'حجر إسماعيل (الحطيم)' },
    description: {
      en: 'The semi-circular wall adjacent to the Kaaba. Originally part of the Kaaba but excluded when the Quraysh rebuilt it. Praying inside Hijr Ismail is like praying inside the Kaaba. Said to be the burial place of Ismail (AS) and his mother Hajar (AS).',
      ur: 'کعبہ سے متصل نیم دائرے کی دیوار۔ اصل میں کعبہ کا حصہ تھا لیکن قریش نے فنڈز کی کمی سے باہر رکھا۔ حجر اسماعیل میں نماز کعبہ کے اندر نماز کے مترادف ہے۔ حضرت اسماعیل اور ان کی والدہ حاجرہ کی تدفین کی جگہ۔',
      ar: 'جدار نصف دائري ملاصق للكعبة. كان جزءاً منها لكن قريشاً أخرجته. الصلاة فيه كالصلاة داخل الكعبة. يُقال إنه مدفن إسماعيل وأمه هاجر.'
    },
    source: 'Bukhari 1583'
  },
  zamzam: {
    emoji: '💧',
    name: { en: 'Zamzam Well', ur: 'زمزم کنواں', ar: 'بئر زمزم' },
    description: {
      en: 'The blessed well that sprang forth when baby Ismail (AS) struck the ground as his mother Hajar searched for water between Safa and Marwah. The Prophet ﷺ said: "Zamzam water is for whatever it is drunk for." It has never dried up in over 4000 years.',
      ur: 'مبارک کنواں جو اس وقت نکلا جب بچے اسماعیل نے زمین پر ایڑی ماری جبکہ ان کی والدہ حاجرہ صفا و مروہ کے درمیان پانی تلاش کر رہی تھیں۔ نبی ﷺ نے فرمایا: "زمزم کا پانی جس نیت سے پیا جائے اسی کے لیے ہے۔" 4000 سال سے نہیں سوکھا۔',
      ar: 'بئر مباركة تفجرت حين ضرب الرضيع إسماعيل الأرض بقدمه. قال النبي ﷺ: "ماء زمزم لما شُرب له." لم تجف منذ 4000 سنة.'
    },
    source: 'Ibn Majah 3062'
  },
  safa: {
    emoji: '⛰️',
    name: { en: 'Mount Safa', ur: 'کوہ صفا', ar: 'جبل الصفا' },
    description: {
      en: 'One of two hills between which Sa\'i is performed. "Indeed, Safa and Marwah are among the symbols of Allah." (Quran 2:158). Sa\'i begins here. Hajar ran between these hills searching for water for her son Ismail. The Prophet ﷺ would climb it and face the Kaaba making dua.',
      ur: 'دو پہاڑیوں میں سے ایک جن کے درمیان سعی ہوتی ہے۔ "بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔" سعی یہاں سے شروع ہوتی ہے۔ حاجرہ نے اپنے بیٹے اسماعیل کے لیے ان پہاڑیوں کے درمیان دوڑ لگائی۔',
      ar: 'أحد جبلي السعي. "إن الصفا والمروة من شعائر الله." يبدأ السعي من هنا. ركضت هاجر بينهما بحثاً عن الماء لإسماعيل.'
    },
    source: 'Quran 2:158'
  },
  marwah: {
    emoji: '⛰️',
    name: { en: 'Mount Marwah', ur: 'کوہ مروہ', ar: 'جبل المروة' },
    description: {
      en: 'The second hill of Sa\'i. Pilgrims walk 7 times between Safa and Marwah, ending at Marwah. Between the hills, men jog in the green-lit section, commemorating Hajar\'s urgency. Distance between the two hills is approximately 450 meters.',
      ur: 'سعی کی دوسری پہاڑی۔ حاجی 7 بار صفا و مروہ کے درمیان چلتے ہیں، مروہ پر ختم ہوتے ہیں۔ سبز روشنی والے حصے میں مرد دوڑتے ہیں۔ فاصلہ تقریباً 450 میٹر ہے۔',
      ar: 'الجبل الثاني للسعي. يمشي الحاج 7 أشواط وينتهي عند المروة. يهرول الرجال في القسم الأخضر. المسافة ~450 متراً.'
    },
    source: 'Quran 2:158'
  },
  clock_tower: {
    emoji: '🏗️',
    name: { en: 'Abraj Al-Bait Clock Tower', ur: 'ابراج البیت کلاک ٹاور', ar: 'ساعة أبراج البيت' },
    description: {
      en: 'The Makkah Royal Clock Tower, standing at 601m — one of the tallest buildings in the world. The clock face is 43m in diameter, visible from 25km away. The complex includes hotels, shopping, and a prayer hall. A major landmark for pilgrims.',
      ur: '601 میٹر اونچا مکہ رائل کلاک ٹاور — دنیا کی بلند ترین عمارتوں میں سے ایک۔ گھڑی کا قطر 43 میٹر ہے اور 25 کلومیٹر سے نظر آتی ہے۔ ہوٹل، شاپنگ اور نماز کی جگہ شامل ہے۔',
      ar: 'ارتفاعه 601م من أعلى المباني في العالم. قطر الساعة 43م تُرى من 25 كم. يضم فنادق ومتاجر ومصلى.'
    },
    source: ''
  },
  arafat: {
    emoji: '🏔️',
    name: { en: 'Mount Arafat (Jabal ar-Rahmah)', ur: 'جبل عرفات (جبل رحمت)', ar: 'جبل عرفات (جبل الرحمة)' },
    description: {
      en: 'The "Mountain of Mercy" where standing (Wuquf) on 9th Dhul Hijjah is the most important pillar of Hajj. The Prophet ﷺ said: "Hajj is Arafat." Where Adam and Hawwa reunited, and the Prophet ﷺ delivered his Farewell Sermon to over 100,000 companions.',
      ur: 'جبل رحمت جہاں 9 ذوالحجہ کا وقوف حج کا سب سے اہم رکن ہے۔ نبی ﷺ نے فرمایا: "حج عرفہ ہے۔" جہاں آدم اور حوا دوبارہ ملے، اور نبی ﷺ نے ایک لاکھ سے زیادہ صحابہ کو خطبہ حجۃ الوداع دیا۔',
      ar: 'جبل الرحمة، الوقوف فيه يوم 9 ذي الحجة أهم أركان الحج. قال النبي ﷺ: "الحج عرفة." هنا التقى آدم وحواء، وألقى النبي ﷺ خطبة الوداع.'
    },
    source: 'Tirmidhi 889'
  },
  muzdalifah: {
    emoji: '🌙',
    name: { en: 'Muzdalifah', ur: 'مزدلفہ', ar: 'مزدلفة' },
    description: {
      en: 'Open area between Arafat and Mina where pilgrims spend the night, combine Maghrib and Isha prayers, sleep under the open sky, and collect 49 pebbles for stoning. Also known as al-Mash\'ar al-Haram. "Remember Allah at al-Mash\'ar al-Haram." (Quran 2:198).',
      ur: 'عرفات اور منیٰ کے درمیان کھلا میدان۔ مغرب و عشاء جمع کرکے پڑھتے ہیں، کھلے آسمان تلے سوتے ہیں، 49 کنکریاں جمع کرتے ہیں۔ المشعر الحرام بھی کہتے ہیں۔ "المشعر الحرام کے پاس اللہ کو یاد کرو۔"',
      ar: 'أرض بين عرفة ومنى. يجمع الحجاج المغرب والعشاء وينامون تحت السماء ويجمعون 49 حصاة. "فاذكروا الله عند المشعر الحرام."'
    },
    source: 'Quran 2:198'
  },
  mina: {
    emoji: '⛺',
    name: { en: 'Mina (Tent City)', ur: 'منیٰ (خیموں کا شہر)', ar: 'منى (مدينة الخيام)' },
    description: {
      en: 'Valley east of Makkah with over 100,000 air-conditioned tents. Pilgrims stay on 8th and 10th-13th Dhul Hijjah. The stoning of Jamarat takes place here. Prophet Ibrahim (AS) was tested here with the command to sacrifice his son Ismail (AS).',
      ur: 'مکہ کے مشرق میں وادی، ایک لاکھ سے زیادہ ایئر کنڈیشنڈ خیمے۔ حاجی 8 اور 10-13 ذوالحجہ کو قیام کرتے ہیں۔ یہاں جمرات کی رمی ہوتی ہے۔ حضرت ابراہیم کو یہاں قربانی کا حکم آزمایا گیا۔',
      ar: 'وادٍ شرق مكة بأكثر من 100 ألف خيمة مكيفة. يقيم الحجاج أيام 8 و10-13 ذي الحجة. هنا رمي الجمرات وابتُلي إبراهيم بذبح إسماعيل.'
    },
    source: 'Quran 37:102-107'
  },
  jamarat: {
    emoji: '🪨',
    name: { en: 'Jamarat (Stoning Pillars)', ur: 'جمرات', ar: 'الجمرات' },
    description: {
      en: 'Three pillars representing where Shaytan tried to tempt Ibrahim (AS). On 10th Dhul Hijjah, only the largest (al-Aqabah) is stoned with 7 pebbles. On 11th-13th, all three are stoned (21 pebbles/day). Modern multi-level bridge ensures safety.',
      ur: 'تین ستون جو شیطان کی جگہ کی نمائندگی کرتے ہیں جہاں اس نے ابراہیم کو گمراہ کرنے کی کوشش کی۔ 10 ذوالحجہ کو بڑے جمرے پر 7 کنکریاں۔ 11-13 ذوالحجہ کو تینوں پر 21 کنکریاں یومیہ۔',
      ar: 'ثلاث جمرات تمثل وسوسة الشيطان لإبراهيم. يوم 10 تُرمى الكبرى بـ7 حصيات. أيام 11-13 تُرمى الثلاث بـ21 حصاة/يوم.'
    },
    source: 'Bukhari 1750'
  },
  halq_area: {
    emoji: '✂️',
    name: { en: 'Halq/Taqsir Area', ur: 'حلق/تقصیر', ar: 'الحلق/التقصير' },
    description: {
      en: 'Where pilgrims shave (Halq) or trim (Taqsir) hair. Shaving entire head preferred for men (greater reward). Women trim a fingertip\'s length. Symbolizes humility and marks partial exit from Ihram.',
      ur: 'جہاں حاجی سر منڈواتے (حلق) یا بال کٹواتے (تقصیر) ہیں۔ مردوں کے لیے سر منڈوانا افضل ہے۔ خواتین انگلی کے پور برابر۔ عاجزی کی علامت اور احرام سے جزوی اخراج۔',
      ar: 'حلق أو تقصير الشعر. الحلق أفضل للرجال. تقص المرأة بقدر أنملة. يرمز للتواضع والتحلل الجزئي.'
    },
    source: 'Bukhari 1727'
  },
  sacrifice_area: {
    emoji: '🐑',
    name: { en: 'Sacrifice Area (Nahr)', ur: 'قربانی کی جگہ', ar: 'منطقة النحر' },
    description: {
      en: 'Where pilgrims offer animal sacrifice on 10th Dhul Hijjah, following Ibrahim\'s example. "So pray to your Lord and sacrifice." (Quran 108:2). Meat distributed to the poor, neighbors, and family.',
      ur: 'جہاں حاجی 10 ذوالحجہ کو قربانی دیتے ہیں۔ "اپنے رب کے لیے نماز پڑھو اور قربانی کرو۔" گوشت غریبوں، پڑوسیوں اور گھر والوں میں تقسیم کیا جاتا ہے۔',
      ar: 'حيث يذبح الحاج الهدي يوم 10 ذي الحجة. "فصل لربك وانحر." يُوزع اللحم على الفقراء والجيران.'
    },
    source: 'Quran 108:2, 37:107'
  },
  dhul_hulayfah: {
    emoji: '🕋',
    name: { en: 'Dhul Hulayfah (Abyar Ali)', ur: 'ذوالحلیفہ (آبیار علی)', ar: 'ذو الحليفة (أبيار علي)' },
    description: {
      en: 'Miqat for people from Madinah, 450km from Makkah — the farthest Miqat. The Prophet ﷺ entered Ihram from here during his Farewell Hajj. A large mosque marks the location.',
      ur: 'مدینہ سے آنے والوں کا میقات، مکہ سے 450 کلومیٹر — سب سے دور میقات۔ نبی ﷺ نے حجۃ الوداع میں یہاں سے احرام باندھا۔ ایک بڑی مسجد ہے جہاں حاجی احرام بدلتے ہیں۔',
      ar: 'ميقات أهل المدينة، 450 كم من مكة — أبعد المواقيت. أحرم منه النبي ﷺ في حجة الوداع.'
    },
    source: 'Bukhari 1524'
  },
  al_juhfah: {
    emoji: '🕋',
    name: { en: 'Al-Juhfah (Rabigh)', ur: 'الجحفہ (رابغ)', ar: 'الجحفة (رابغ)' },
    description: {
      en: 'Miqat for people from Syria, Egypt, and North Africa, 183km from Makkah. Today pilgrims enter Ihram at nearby Rabigh.',
      ur: 'شام، مصر اور شمالی افریقہ سے آنے والوں کا میقات، مکہ سے 183 کلومیٹر۔ آج کل حاجی قریبی رابغ میں احرام باندھتے ہیں۔',
      ar: 'ميقات أهل الشام ومصر، 183 كم من مكة. اليوم يُحرم الحجاج من رابغ القريبة.'
    },
    source: 'Bukhari 1524'
  },
  qarn_manazil: {
    emoji: '🕋',
    name: { en: 'Qarn al-Manazil (As-Sayl)', ur: 'قرن المنازل', ar: 'قرن المنازل (السيل)' },
    description: {
      en: 'Miqat for people from Najd (central Arabia) and the East, 75km from Makkah. Also known as As-Sayl al-Kabeer.',
      ur: 'نجد اور مشرق سے آنے والوں کا میقات، مکہ سے 75 کلومیٹر۔ السیل الکبیر بھی کہتے ہیں۔',
      ar: 'ميقات أهل نجد والمشرق، 75 كم من مكة. يُعرف بالسيل الكبير.'
    },
    source: 'Bukhari 1524'
  },
  yalamlam: {
    emoji: '🕋',
    name: { en: 'Yalamlam (As-Sa\'diyyah)', ur: 'یلملم (السعدیہ)', ar: 'يلملم (السعدية)' },
    description: {
      en: 'Miqat for people from Yemen and the South, 92km from Makkah. Today known as As-Sa\'diyyah.',
      ur: 'یمن اور جنوب سے آنے والوں کا میقات، مکہ سے 92 کلومیٹر۔ آج کل السعدیہ کہتے ہیں۔',
      ar: 'ميقات أهل اليمن، 92 كم من مكة. يُعرف اليوم بالسعدية.'
    },
    source: 'Bukhari 1524'
  },
  dhat_irq: {
    emoji: '🕋',
    name: { en: 'Dhat Irq', ur: 'ذات عرق', ar: 'ذات عرق' },
    description: {
      en: 'Miqat for people from Iraq and the Northeast, 94km from Makkah. Some scholars say the Prophet ﷺ designated it, others that Caliph Umar (RA) did.',
      ur: 'عراق اور شمال مشرق سے آنے والوں کا میقات، مکہ سے 94 کلومیٹر۔ بعض علماء کے مطابق نبی ﷺ نے مقرر کیا، دوسروں کے مطابق خلیفہ عمر رضی اللہ عنہ نے۔',
      ar: 'ميقات أهل العراق، 94 كم من مكة. اختلف العلماء: هل حدده النبي ﷺ أم عمر رضي الله عنه.'
    },
    source: 'Abu Dawud 1739'
  },
  al_mizaab: {
    emoji: '🌧️',
    name: { en: 'Al Mizaab (Rain Spout)', ur: 'میزاب رحمت', ar: 'ميزاب الرحمة' },
    description: {
      en: 'The golden rain spout on the northwest wall of the Kaaba that channels rainwater from the roof into Hijr Ismail. Also called "Mizab al-Rahmah" (Spout of Mercy). Water flowing from it is considered blessed. Pilgrims try to stand under it during rain as a form of seeking barakah.',
      ur: 'کعبہ کی شمال مغربی دیوار پر سونے کا پرنالہ جو چھت سے بارش کا پانی حجر اسماعیل میں گراتا ہے۔ "میزاب رحمت" بھی کہتے ہیں۔ اس سے بہنے والا پانی مبارک سمجھا جاتا ہے۔',
      ar: 'ميزاب ذهبي على الجدار الشمالي الغربي للكعبة يصرف مياه المطر إلى حجر إسماعيل. يُسمى "ميزاب الرحمة". ماؤه مبارك.'
    },
    source: ''
  },
  kiswah: {
    emoji: '🕋',
    name: { en: 'Kiswah (Kaaba Covering)', ur: 'کسوہ (غلاف کعبہ)', ar: 'كسوة الكعبة' },
    description: {
      en: 'The black silk cloth draping the Kaaba, embroidered with gold-thread Quranic verses. Replaced annually on 9th Dhul Hijjah. Made of 670kg of pure silk dyed black, with 15kg of gold thread in the embroidered band (Hizam). The tradition dates back to pre-Islamic times; the Prophet ﷺ continued it.',
      ur: 'کعبہ پر لپٹا کالا ریشمی کپڑا جس پر سونے کے دھاگے سے قرآنی آیات کشیدہ ہیں۔ ہر سال 9 ذوالحجہ کو بدلا جاتا ہے۔ 670 کلو خالص ریشم سیاہ رنگ میں رنگا ہوا، 15 کلو سونے کا دھاگا۔ نبی ﷺ نے یہ روایت جاری رکھی۔',
      ar: 'قماش حريري أسود مطرز بآيات قرآنية بخيوط ذهبية. تُستبدل سنوياً يوم 9 ذي الحجة. 670 كغ حرير و15 كغ خيوط ذهبية.'
    },
    source: ''
  },
  door_kaaba: {
    emoji: '🚪',
    name: { en: 'Door of the Ka\'ba', ur: 'باب کعبہ', ar: 'باب الكعبة' },
    description: {
      en: 'The door of the Kaaba on the northeastern wall, 2.13m above ground, made of 280kg of pure gold. It was raised above ground level by the Quraysh to control access. Today it is opened only for special cleaning ceremonies twice a year. The key is held by the Bani Shaiba family as designated by the Prophet ﷺ.',
      ur: 'کعبہ کا دروازہ شمال مشرقی دیوار پر، زمین سے 2.13 میٹر اونچائی پر، 280 کلو خالص سونے سے بنا ہوا۔ قریش نے اسے اونچا رکھا۔ سال میں دو بار صفائی کے لیے کھولا جاتا ہے۔ چابی بنی شیبہ خاندان کے پاس ہے جیسا کہ نبی ﷺ نے مقرر فرمایا۔',
      ar: 'باب الكعبة على الجدار الشمالي الشرقي، 2.13م فوق الأرض، من 280 كغ ذهب خالص. يُفتح مرتين سنوياً للتنظيف. المفتاح عند بني شيبة كما أقره النبي ﷺ.'
    },
    source: 'Quran 4:58'
  },
  multazam: {
    emoji: '🤲',
    name: { en: 'Multazam', ur: 'ملتزم', ar: 'الملتزم' },
    description: {
      en: 'The approximately 2-meter wall section between the door of the Kaaba and the Black Stone (Hajar al-Aswad). Pilgrims press their chest, face, and hands against this wall making earnest dua. The Prophet ﷺ was seen clinging to this area making supplication. Duas made here are considered especially accepted.',
      ur: 'کعبہ کے دروازے اور حجر اسود کے درمیان تقریباً 2 میٹر کی دیوار۔ حاجی اپنا سینہ، چہرہ اور ہاتھ اس دیوار سے لگا کر دعا مانگتے ہیں۔ نبی ﷺ کو یہاں چمٹ کر دعا مانگتے دیکھا گیا۔ یہاں کی دعائیں خصوصی طور پر قبول ہوتی ہیں۔',
      ar: 'الجدار بين باب الكعبة والحجر الأسود (~2م). يلتصق الحجاج به للدعاء. رُئي النبي ﷺ ملتزماً به يدعو. الدعاء هنا مستجاب.'
    },
    source: 'Abu Dawud 1898'
  },
  shami_corner: {
    emoji: '📐',
    name: { en: 'Shami Corner (Rukn al-Shami)', ur: 'رکن شامی', ar: 'الركن الشامي' },
    description: {
      en: 'The northwestern corner of the Kaaba, facing the direction of Sham (Greater Syria/Levant). Named after its geographic orientation. During Tawaf, pilgrims pass this corner between the Hijr Ismail and the Iraqi Corner. No specific ritual is performed at this corner.',
      ur: 'کعبہ کا شمال مغربی کونا، شام (لیونت) کی سمت۔ جغرافیائی سمت کے نام پر۔ طواف میں حاجی حجر اسماعیل اور رکن عراقی کے درمیان اس کونے سے گزرتے ہیں۔ کوئی خاص رسم نہیں۔',
      ar: 'الركن الشمالي الغربي للكعبة، باتجاه الشام. يمر به الطائفون بين الحجر والركن العراقي. لا يُسن عنده شيء خاص.'
    },
    source: ''
  },
  iraqi_corner: {
    emoji: '📐',
    name: { en: 'Iraqi Corner (Rukn al-Iraqi)', ur: 'رکن عراقی', ar: 'الركن العراقي' },
    description: {
      en: 'The northeastern corner of the Kaaba, facing the direction of Iraq. Named after its geographic orientation toward Iraq/Mesopotamia. The door of the Kaaba is located on this side of the building, between this corner and the Black Stone corner.',
      ur: 'کعبہ کا شمال مشرقی کونا، عراق کی سمت۔ عراق/بین النہرین کی جغرافیائی سمت کے نام پر۔ کعبہ کا دروازہ اسی طرف ہے، اس کونے اور حجر اسود کے کونے کے درمیان۔',
      ar: 'الركن الشمالي الشرقي للكعبة، باتجاه العراق. باب الكعبة على هذا الجانب بين هذا الركن وركن الحجر الأسود.'
    },
    source: ''
  },
  yamani_corner: {
    emoji: '📐',
    name: { en: 'Yamani Corner (Rukn al-Yamani)', ur: 'رکن یمانی', ar: 'الركن اليماني' },
    description: {
      en: 'The southwestern corner of the Kaaba, facing Yemen. This is the corner just before the Black Stone corner in the Tawaf direction. The Prophet ﷺ would touch (Istilam) this corner during Tawaf and recite: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina adhab an-nar." (Quran 2:201). It is Sunnah to touch it without kissing.',
      ur: 'کعبہ کا جنوب مغربی کونا، یمن کی سمت۔ طواف میں حجر اسود سے پہلے آتا ہے۔ نبی ﷺ اس کونے کو چھوتے (استلام) اور دعا پڑھتے: "ربنا آتنا فی الدنیا حسنۃ و فی الآخرۃ حسنۃ و قنا عذاب النار۔" چھونا سنت ہے مگر بوسہ نہیں۔',
      ar: 'الركن الجنوبي الغربي، باتجاه اليمن. كان النبي ﷺ يستلمه ويدعو: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار." سنة استلامه دون تقبيل.'
    },
    source: 'Quran 2:201, Abu Dawud 1892'
  }
};

const MiqatMarker = ({ pos, name, nameAr, dir, id }) => {
  const angle = Math.atan2(-pos[0], -pos[2]);
  return (
    <group position={pos}>
      {/* Small building */}
      <mesh position={[0, 2, 0]} castShadow>
        <boxGeometry args={[6, 4, 4]} />
        <meshStandardMaterial color="#FFFEF0" roughness={0.4} />
      </mesh>
      {/* Green dome */}
      <mesh position={[0, 5, 0]}>
        <sphereGeometry args={[2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#10B981" roughness={0.4} />
      </mesh>
      {/* Crescent */}
      <mesh position={[0, 6.8, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.3, 0.06, 8, 16, Math.PI * 1.5]} />
        <meshStandardMaterial color={GOLD} metalness={0.8} />
      </mesh>
      {/* Minaret */}
      <mesh position={[3.5, 3.5, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 7, 8]} />
        <meshStandardMaterial color="#FFFEF0" roughness={0.4} />
      </mesh>
      {/* Arrow toward Kaaba on ground */}
      <mesh position={[0, 0.3, 0]} rotation={[-Math.PI / 2, 0, angle]}>
        <coneGeometry args={[1.2, 5, 8]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} transparent opacity={0.7} />
      </mesh>
      {/* Ground */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[8, 24]} />
        <meshStandardMaterial color="#E8DCC8" roughness={0.6} />
      </mesh>
      {/* Connector line from building to label */}
      <mesh position={[0, 8.5, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 3, 4]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
      </mesh>
      {/* Floating text label - clickable, localized */}
      {_showLabels && <Html position={[0, 10.5, 0]} center distanceFactor={60}>
        <div style={{ background: 'rgba(16,185,129,0.85)', padding: '3px 8px', borderRadius: 6, textAlign: 'center', whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer',
          direction: _sceneLanguage === 'ar' || _sceneLanguage === 'ur' ? 'rtl' : 'ltr',
          fontFamily: _sceneLanguage === 'ar' || _sceneLanguage === 'ur' ? "'Noto Nastaliq Urdu', serif" : 'inherit' }} onClick={() => triggerLocationClick(id)}>
          <div style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>🕋 {_sceneLanguage === 'ar' ? nameAr : _sceneLanguage === 'ur' ? (nameAr || name) : name}</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9 }}>➝ {typeof dir === 'object' ? (dir[_sceneLanguage] || dir.en) : dir}</div>
        </div>
      </Html>}
      <pointLight position={[0, 6, 0]} intensity={1} color="#10B981" distance={15} />
    </group>
  );
};

const MiqatStations = () => (
  <group>
    {MIQAT_3D_POSITIONS.map((mq, i) => (
      <MiqatMarker key={i} pos={mq.pos} name={mq.name} nameAr={mq.nameAr} dir={mq.dir} id={mq.id} />
    ))}
  </group>
);

// Animated distance lines from each Miqat to Kaaba - visible only during Ihram step
const MiqatDistanceLines = ({ visible }) => {
  const lineRef = useRef();

  useFrame((state) => {
    if (lineRef.current && visible) {
      // Animate dash offset for flowing effect
      lineRef.current.children.forEach(child => {
        if (child.material?.dashOffset !== undefined) {
          child.material.dashOffset -= 0.02;
        }
      });
    }
  });

  if (!visible) return null;

  const distances = ['450km', '183km', '75km', '92km', '94km'];

  return (
    <group ref={lineRef}>
      {MIQAT_3D_POSITIONS.map((mq, i) => {
        const [sx, , sz] = mq.pos;
        const midX = sx / 2;
        const midZ = sz / 2;
        return (
          <group key={i}>
            {/* Glowing line */}
            <mesh position={[midX, 1.5, midZ]} rotation={[0, Math.atan2(sx, sz), 0]}>
              <boxGeometry args={[0.3, 0.3, Math.sqrt(sx * sx + sz * sz)]} />
              <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} transparent opacity={0.4} />
            </mesh>
            {/* Animated dots along the line */}
            {[0.2, 0.4, 0.6, 0.8].map((t, j) => (
              <mesh key={j} position={[sx * (1 - t), 2, sz * (1 - t)]}>
                <sphereGeometry args={[0.4, 8, 8]} />
                <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.8} transparent opacity={0.7} />
              </mesh>
            ))}
            {/* Distance label at midpoint */}
            {_showLabels && <Html position={[midX, 4, midZ]} center distanceFactor={50} style={{ pointerEvents: 'none' }}>
              <div style={{ background: 'rgba(16,185,129,0.9)', padding: '1px 6px', borderRadius: 10, whiteSpace: 'nowrap' }}>
                <span style={{ color: '#fff', fontSize: 9, fontWeight: 700 }}>{distances[i]}</span>
              </div>
            </Html>}
          </group>
        );
      })}
    </group>
  );
};

// Safa Marwah - Realistic Hills
const SafaMarwah = ({ showPath = false }) => {
  const pathRef = useRef();

  useFrame((state) => {
    if (pathRef.current && showPath) {
      pathRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
  });

  return (
    <group position={[25, 0, 0]}>
      {/* SAFA HILL - Rocky mountain — pushed back (z=-6) so pilgrim on corridor (z=0) doesn't clip */}
      <group position={[-8, 0, -6]}>
        {/* Main hill body */}
        <mesh position={[0, 2, 0]} castShadow>
          <coneGeometry args={[4, 4, 8]} />
          <meshStandardMaterial color="#8B7355" roughness={0.95} flatShading />
        </mesh>
        <mesh position={[-1, 1.5, 1]} castShadow>
          <coneGeometry args={[2, 3, 6]} />
          <meshStandardMaterial color="#9C8465" roughness={0.95} flatShading />
        </mesh>
        <mesh position={[1.5, 1, -0.5]} castShadow>
          <coneGeometry args={[1.5, 2, 5]} />
          <meshStandardMaterial color="#7A6350" roughness={0.95} flatShading />
        </mesh>
        {/* Green marker sign — positioned toward corridor so it's visible */}
        <mesh position={[0, 5, 3]}>
          <boxGeometry args={[2, 1, 0.3]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.6} />
        </mesh>
        <pointLight position={[0, 5, 3]} intensity={1} color="#10B981" distance={8} />
        <mesh position={[0, 0.1, 6]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2, 16]} />
          <meshStandardMaterial color="#10B981" transparent opacity={0.3} />
        </mesh>
        {/* Safa label — over the hill */}
        {_showLabels && <Html position={[0, 7, 0]} center distanceFactor={50}>
          <div style={{ background: 'rgba(16,185,129,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('safa')}>
            <div style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>⛰️ {L3D('Safa (الصفا)', 'صفا (الصفا)', 'الصفا')}</div>
          </div>
        </Html>}
      </group>

      {/* MARWAH HILL - Larger rocky mountain — pushed back (z=-6) to clear corridor */}
      <group position={[8, 0, -6]}>
        {/* Main hill body */}
        <mesh position={[0, 2.5, 0]} castShadow>
          <coneGeometry args={[5, 5, 8]} />
          <meshStandardMaterial color="#7A6350" roughness={0.95} flatShading />
        </mesh>
        <mesh position={[2, 2, 1]} castShadow>
          <coneGeometry args={[2.5, 4, 6]} />
          <meshStandardMaterial color="#8B7355" roughness={0.95} flatShading />
        </mesh>
        <mesh position={[-1.5, 1.5, -1]} castShadow>
          <coneGeometry args={[2, 3, 5]} />
          <meshStandardMaterial color="#6B5344" roughness={0.95} flatShading />
        </mesh>
        {/* Green marker sign — positioned toward corridor */}
        <mesh position={[0, 6, 3]}>
          <boxGeometry args={[2, 1, 0.3]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.6} />
        </mesh>
        <pointLight position={[0, 6, 3]} intensity={1} color="#10B981" distance={8} />
        <mesh position={[0, 0.1, 6]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2, 16]} />
          <meshStandardMaterial color="#10B981" transparent opacity={0.3} />
        </mesh>
        {/* Marwah label — over the hill */}
        {_showLabels && <Html position={[0, 8, 0]} center distanceFactor={50}>
          <div style={{ background: 'rgba(16,185,129,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('marwah')}>
            <div style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>⛰️ {L3D('Marwah (المروة)', 'مروہ (المروة)', 'المروة')}</div>
          </div>
        </Html>}
      </group>

      {/* Sa'i Corridor - Marble walkway */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[18, 5]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.3} />
      </mesh>

      {/* Green light markers along corridor */}
      {[-6, -3, 0, 3, 6].map((x, i) => (
        <group key={i} position={[x, 0, 2.2]}>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
            <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} />
          </mesh>
          <pointLight position={[0, 0.5, 0]} intensity={0.3} color="#10B981" distance={3} />
        </group>
      ))}

      {/* Animated path when active */}
      {showPath && (
        <>
          <mesh ref={pathRef} position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[16, 2]} />
            <meshStandardMaterial
              color="#3B82F6"
              emissive="#3B82F6"
              emissiveIntensity={0.4}
              transparent
              opacity={0.6}
            />
          </mesh>
          <Sparkles count={40} scale={[18, 3, 5]} size={3} speed={1.5} color="#3B82F6" opacity={0.7} />
        </>
      )}
    </group>
  );
};

// Mount Arafat
const MountArafat = () => (
  <group position={[45, 0, -35]}>
    <mesh position={[0, 4, 0]} castShadow>
      <coneGeometry args={[10, 8, 8]} />
      <meshStandardMaterial color="#A08060" roughness={0.95} flatShading />
    </mesh>
    <mesh position={[-5, 2, 3]} castShadow>
      <coneGeometry args={[4, 4, 6]} />
      <meshStandardMaterial color="#8B7355" roughness={0.95} flatShading />
    </mesh>
    <group position={[0, 8.5, 0]}>
      <mesh>
        <cylinderGeometry args={[0.6, 0.8, 2, 8]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <Sparkles count={30} scale={4} size={3} color="#FFD700" position={[0, 1.5, 0]} />
    </group>
    {_showLabels && <Html position={[0, 12, 0]} center distanceFactor={60}>
      <div style={{ background: 'rgba(139,115,85,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('arafat')}>
        <div style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>🏔️ {L3D('Mount Arafat', 'کوہ عرفات', 'جبل عرفات')}</div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9 }}>{L3D('Jabal ar-Rahmah', 'جبل الرحمہ', 'جبل الرحمة')}</div>
      </div>
    </Html>}
  </group>
);

// Muzdalifah
const Muzdalifah = () => {
  const pebbles = useMemo(() => {
    const hash = (seed) => Math.abs(Math.sin(seed * 127.1 + 311.7) * 43758.5453) % 1;
    return Array.from({ length: 40 }).map((_, i) => ({
      pos: [(hash(i) - 0.5) * 12, 0.1, (hash(i + 100) - 0.5) * 12],
      scale: 0.1 + hash(i + 200) * 0.15
    }));
  }, []);

  return (
    <group position={[25, 0, -45]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color="#2D2D3D" roughness={0.95} />
      </mesh>
      {pebbles.map((p, i) => (
        <mesh key={i} position={p.pos} scale={p.scale}>
          <sphereGeometry args={[1, 6, 6]} />
          <meshStandardMaterial color="#555555" roughness={0.9} />
        </mesh>
      ))}
      <Stars radius={25} depth={15} count={400} factor={3} />
      {_showLabels && <Html position={[0, 5, 0]} center distanceFactor={60}>
        <div style={{ background: 'rgba(45,45,61,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('muzdalifah')}>
          <div style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>🌙 {L3D('Muzdalifah', 'مزدلفہ', 'مزدلفة')}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>{L3D('Collect pebbles here', 'یہاں کنکریاں جمع کریں', 'اجمع الحصى هنا')}</div>
        </div>
      </Html>}
    </group>
  );
};

// Mina Tents
const MinaTents = () => {
  const tents = useMemo(() => {
    const arr = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        arr.push({ pos: [-6 + col * 4, 0, -4 + row * 4] });
      }
    }
    return arr;
  }, []);

  return (
    <group position={[10, 0, -30]}>
      {tents.map((t, i) => (
        <group key={i} position={t.pos}>
          <mesh position={[0, 1.2, 0]} castShadow>
            <coneGeometry args={[1.5, 2.4, 4]} />
            <meshStandardMaterial color="#FFFFFF" side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
      {_showLabels && <Html position={[0, 5, 0]} center distanceFactor={60}>
        <div style={{ background: 'rgba(255,255,255,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('mina')}>
          <div style={{ color: '#333', fontSize: 11, fontWeight: 700 }}>⛺ {L3D('Mina', 'منیٰ', 'منى')}</div>
          <div style={{ color: '#666', fontSize: 9 }}>{L3D('Tent City', 'خیموں کا شہر', 'مدينة الخيام')}</div>
        </div>
      </Html>}
    </group>
  );
};

// Jamarat Pillars with Multi-Level Walking Bridge
const Jamarat = () => (
  <group position={[12, 0, -38]}>
    {/* Multi-level bridge structure */}
    <mesh position={[0, 3.5, 0]} castShadow>
      <boxGeometry args={[18, 0.4, 8]} />
      <meshStandardMaterial color="#D4D0C8" roughness={0.5} />
    </mesh>
    {/* Bridge railing walls */}
    <mesh position={[0, 4.2, 4]}>
      <boxGeometry args={[18, 1.2, 0.15]} />
      <meshStandardMaterial color="#B0ACA4" roughness={0.5} transparent opacity={0.8} />
    </mesh>
    <mesh position={[0, 4.2, -4]}>
      <boxGeometry args={[18, 1.2, 0.15]} />
      <meshStandardMaterial color="#B0ACA4" roughness={0.5} transparent opacity={0.8} />
    </mesh>
    {/* Bridge support pillars */}
    {[-7, -3, 1, 5].map((x, i) => (
      <mesh key={`bp-${i}`} position={[x, 1.7, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.35, 3.4, 8]} />
        <meshStandardMaterial color="#999" roughness={0.6} />
      </mesh>
    ))}
    {/* Ramp entrance */}
    <mesh position={[-10, 1.8, 0]} rotation={[0, 0, 0.18]}>
      <boxGeometry args={[5, 0.3, 6]} />
      <meshStandardMaterial color="#D4D0C8" roughness={0.5} />
    </mesh>

    {/* Three Jamarat pillars on the bridge */}
    {[[-5, 3, 'Al-Ula'], [0, 4, 'Al-Wusta'], [5, 5, 'Al-Aqabah']].map(([x, h, name], i) => (
      <group key={i} position={[x, 3.5, 0]}>
        {/* Pillar */}
        <mesh position={[0, h / 2, 0]} castShadow>
          <cylinderGeometry args={[0.6, 0.6, h, 16]} />
          <meshStandardMaterial color="#4A4A4A" roughness={0.8} />
        </mesh>
        {/* Circular basin around pillar */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[2.5, 2, 0.4, 24]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
        {/* Pillar wall */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[2.3, 2.3, 0.6, 24]} />
          <meshStandardMaterial color="#555" roughness={0.7} transparent opacity={0.5} />
        </mesh>
      </group>
    ))}
    {/* Label */}
    {_showLabels && <Html position={[0, 12, 0]} center distanceFactor={60}>
      <div style={{ background: 'rgba(74,74,74,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('jamarat')}>
        <div style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>🪨 {L3D('Jamarat', 'جمرات', 'الجمرات')}</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>{L3D('Stoning Pillars', 'کنکریاں مارنے کی جگہ', 'رمي الجمرات')}</div>
      </div>
    </Html>}
  </group>
);

// Barber Area
const BarberArea = () => (
  <group position={[-10, 0, -20]}>
    <mesh position={[0, 2.5, 0]}>
      <coneGeometry args={[5, 3, 6]} />
      <meshStandardMaterial color="#FFFFFF" side={THREE.DoubleSide} />
    </mesh>
    <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[4, 24]} />
      <meshStandardMaterial color="#2E7D32" roughness={0.8} />
    </mesh>
    {_showLabels && <Html position={[0, 5, 0]} center distanceFactor={50}>
      <div style={{ background: 'rgba(46,125,50,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('halq_area')}>
        <div style={{ color: '#fff', fontSize: 10, fontWeight: 700 }}>✂️ {L3D('Halq/Taqsir', 'حلق/تقصیر', 'الحلق/التقصير')}</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>{L3D('Hair Cutting Area', 'بال کٹوانے کی جگہ', 'منطقة الحلاقة')}</div>
      </div>
    </Html>}
  </group>
);

// Sacrifice Area
const SacrificeArea = () => (
  <group position={[5, 0, -32]}>
    <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[4, 24]} />
      <meshStandardMaterial color="#D4B896" roughness={0.9} />
    </mesh>
    <mesh position={[0, 0.5, 0]}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color="#8B7355" roughness={0.8} />
    </mesh>
    {/* Simple sheep */}
    <group position={[2, 0, -1]}>
      <mesh position={[0, 0.6, 0]} castShadow>
        <sphereGeometry args={[0.6, 8, 8]} />
        <meshStandardMaterial color="#F5F0E0" roughness={0.9} />
      </mesh>
      <mesh position={[0.5, 0.7, 0]} castShadow>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#D4C4A0" roughness={0.8} />
      </mesh>
      {[[-0.3, 0.2, -0.2], [0.3, 0.2, -0.2], [-0.3, 0.2, 0.2], [0.3, 0.2, 0.2]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.4, 6]} />
          <meshStandardMaterial color="#8B7355" roughness={0.8} />
        </mesh>
      ))}
    </group>
    {_showLabels && <Html position={[0, 4, 0]} center distanceFactor={50}>
      <div style={{ background: 'rgba(139,115,85,0.85)', padding: '2px 8px', borderRadius: 5, textAlign: 'center', whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={() => triggerLocationClick('sacrifice_area')}>
        <div style={{ color: '#fff', fontSize: 10, fontWeight: 700 }}>🐑 {L3D('Sacrifice', 'قربانی', 'الذبح')}</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>{L3D('Nahr Area', 'نحر کی جگہ', 'منطقة النحر')}</div>
      </div>
    </Html>}
  </group>
);

// Palm Tree
const PalmTree = ({ position, scale = 1 }) => (
  <group position={position}>
    {/* Trunk */}
    <mesh position={[0, 2 * scale, 0]} castShadow>
      <cylinderGeometry args={[0.15 * scale, 0.25 * scale, 4 * scale, 8]} />
      <meshStandardMaterial color="#8B4513" roughness={0.9} />
    </mesh>
    {/* Leaves */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <mesh
        key={i}
        position={[
          Math.sin(angle * Math.PI / 180) * 0.5 * scale,
          4 * scale,
          Math.cos(angle * Math.PI / 180) * 0.5 * scale
        ]}
        rotation={[0.5, angle * Math.PI / 180, 0.3]}
      >
        <coneGeometry args={[0.8 * scale, 2 * scale, 4]} />
        <meshStandardMaterial color="#228B22" roughness={0.8} flatShading />
      </mesh>
    ))}
  </group>
);

// Minaret (Mosque Tower)
const Minaret = ({ position, height = 12 }) => (
  <group position={position}>
    {/* Base */}
    <mesh position={[0, 1, 0]} castShadow>
      <cylinderGeometry args={[1.2, 1.5, 2, 8]} />
      <meshStandardMaterial color="#F5F0E8" roughness={0.4} />
    </mesh>
    {/* Tower */}
    <mesh position={[0, height / 2 + 1, 0]} castShadow>
      <cylinderGeometry args={[0.8, 1, height - 2, 8]} />
      <meshStandardMaterial color="#FFFEF0" roughness={0.3} />
    </mesh>
    {/* Balcony */}
    <mesh position={[0, height - 1, 0]}>
      <cylinderGeometry args={[1.2, 1.2, 0.5, 8]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.3} />
    </mesh>
    {/* Dome top */}
    <mesh position={[0, height + 0.5, 0]}>
      <sphereGeometry args={[0.6, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.2} />
    </mesh>
    {/* Crescent */}
    <mesh position={[0, height + 1.3, 0]}>
      <torusGeometry args={[0.2, 0.05, 8, 16, Math.PI * 1.5]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.8} />
    </mesh>
  </group>
);

// Pre-computed city building positions (deterministic — avoids Math.random() flicker on re-render)
const CITY_BUILDINGS = Array.from({ length: 30 }, (_, i) => {
  const angle = (i / 30) * Math.PI * 2;
  // Deterministic pseudo-random using sin-based hash
  const seed1 = Math.abs(Math.sin(i * 127.1 + 311.7) * 43758.5453) % 1;
  const seed2 = Math.abs(Math.sin(i * 269.5 + 183.3) * 43758.5453) % 1;
  const dist = 50 + seed1 * 20;
  return { x: Math.sin(angle) * dist, z: Math.cos(angle) * dist, h: 3 + seed2 * 8 };
});

// Ground with realistic Makkah terrain
const Ground = () => (
  <group>
    {/* Outer terrain - brown rocky mountains */}
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[150, 64]} />
      <meshStandardMaterial color="#8B7355" roughness={0.95} />
    </mesh>

    {/* City area - lighter brown */}
    <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[80, 64]} />
      <meshStandardMaterial color="#C4A878" roughness={0.8} />
    </mesh>

    {/* Haram complex area */}
    <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[45, 64]} />
      <meshStandardMaterial color="#D4C4A8" roughness={0.6} />
    </mesh>

    {/* Surrounding mountains */}
    {[
      [-70, -60, 15], [80, -50, 18], [-60, 70, 12], [70, 60, 14],
      [-90, 0, 20], [90, -20, 16], [0, -90, 22], [-40, -80, 10]
    ].map(([x, z, h], i) => (
      <mesh key={i} position={[x, h/2 - 2, z]} castShadow>
        <coneGeometry args={[h * 1.5, h, 6]} />
        <meshStandardMaterial color="#7A6350" roughness={0.95} flatShading />
      </mesh>
    ))}

    {/* City buildings (simplified blocks) — deterministic positions to avoid flicker on re-render */}
    {CITY_BUILDINGS.map(({ x, z, h }, i) => (
      <mesh key={i} position={[x, h/2, z]} castShadow>
        <boxGeometry args={[4, h, 4]} />
        <meshStandardMaterial color="#D4C4B0" roughness={0.7} />
      </mesh>
    ))}
  </group>
);

// Walking Pilgrim with Tawaf and Sa'i Animation
const WalkingPilgrim = ({ currentStep, steps, isWalking, language = 'en', onTawafCircuit, onSaiLap, onReachDestination, onStoneThrow, onPebbleCollected, onAnimationDone, pilgrimPositionRef }) => {
  const groupRef = useRef();
  const lookDirectionRef = useRef(0); // Use ref to avoid 60 re-renders/sec in useFrame
  const tawafAngleRef = useRef(Math.PI); // Start from back of Kaaba
  const [tawafCircuit, setTawafCircuit] = useState(0);
  const lastCircuitRef = useRef(0);
  const saiProgressRef = useRef(0); // 0-7 for Sa'i laps
  const [saiLap, setSaiLap] = useState(0);
  const lastSaiLapRef = useRef(0); // Ref guard for Sa'i (state is stale in useFrame)
  const [reachedDestination, setReachedDestination] = useState(false);
  const positionInitializedRef = useRef(false);

  // --- Jamarat stoning state ---
  const jamaratPhaseRef = useRef('walking'); // 'walking' | 'throwing' | 'done'
  const currentPillarRef = useRef(0);        // 0, 1, 2 (which pillar to stone next)
  const stonesThrown = useRef(0);            // 0-7 per pillar
  const stoneTimerRef = useRef(0);           // accumulator for stone throw timing
  const [stoneCount, setStoneCount] = useState(0); // total stones for UI display
  const stoneFlightRef = useRef({ active: false, progress: 0, startX: 0, startY: 0, startZ: 0, endX: 0, endY: 0, endZ: 0 });
  const stoneMeshRef = useRef();             // ref for the flying stone mesh
  const impactRef = useRef({ active: false, timer: 0, x: 0, y: 0, z: 0 }); // impact flash at pillar
  const throwArmRef = useRef(0);             // arm swing animation progress (0-1)

  // --- Arafat standing state ---
  const arafatTimerRef = useRef(0);
  const arafatPhaseRef = useRef('walking');   // ref for useFrame (avoids stale closure)
  const [arafatPhase, setArafatPhase] = useState('walking'); // state for JSX conditionals
  const setArafatPhaseBoth = (v) => { arafatPhaseRef.current = v; setArafatPhase(v); };

  // --- Muzdalifah pebble collection state ---
  const muzTimerRef = useRef(0);
  const muzPebbleRef = useRef(0);            // 0-49 (sync ref for useFrame)
  const [muzPebbles, setMuzPebbles] = useState(0);
  const muzCollectingRef = useRef(false);

  // --- Sacrifice state ---
  const sacrificeTimerRef = useRef(0);
  const sacrificePhaseRef = useRef('walking'); // ref for useFrame
  const [sacrificePhase, setSacrificePhase] = useState('walking');
  const setSacrificePhaseBoth = (v) => { sacrificePhaseRef.current = v; setSacrificePhase(v); };

  // --- Halq state ---
  const halqTimerRef = useRef(0);
  const halqPhaseRef = useRef('walking');     // ref for useFrame
  const [halqPhase, setHalqPhase] = useState('walking');
  const setHalqPhaseBoth = (v) => { halqPhaseRef.current = v; setHalqPhase(v); };

  // Sa'i positions — z=0 (on the marble corridor). Hills pushed back to z=-6 so pilgrim doesn't clip.
  const SAFA_POS = [17, 0, 0];
  const MARWAH_POS = [33, 0, 0];
  const TAWAF_RADIUS = 12; // Slightly larger radius for visibility
  const TAWAF_START = [0, 0, TAWAF_RADIUS]; // Start position on circle (front of Kaaba)

  // Jamarat pillar world positions (Jamarat group at [12, 0, -38])
  const JAMARAT_GROUP = [12, 0, -38];
  const PILLAR_OFFSETS = [[-5, 0, 0], [0, 0, 0], [5, 0, 0]]; // Al-Ula, Al-Wusta, Al-Aqabah
  const PILLAR_WORLD = PILLAR_OFFSETS.map(([ox, , oz]) => [JAMARAT_GROUP[0] + ox, 3.5, JAMARAT_GROUP[2] + oz]);
  const THROW_STAND_OFFSET_Z = 4; // Stand 4 units south of pillar

  // Check if current step is a Tawaf step
  const isTawafStep = currentStep < steps.length &&
    (steps[currentStep].id === 'tawaf' ||
     steps[currentStep].id === 'tawaf_ifadah' ||
     steps[currentStep].id === 'tawaf_wida');

  // Check if current step is Sa'i
  const isSaiStep = currentStep < steps.length && steps[currentStep].id === 'sai';

  // Hajj step-specific animation detection
  const isJamarat1Step = currentStep < steps.length && steps[currentStep].id === 'jamarat1';
  const isMinaDaysStep = currentStep < steps.length && steps[currentStep].id === 'mina_days';
  const isJamaratStep = isJamarat1Step || isMinaDaysStep;
  const isArafatStep = currentStep < steps.length && steps[currentStep].id === 'arafat';
  const isMuzdalifahStep = currentStep < steps.length && steps[currentStep].id === 'muzdalifah';
  const isSacrificeStep = currentStep < steps.length && steps[currentStep].id === 'sacrifice';
  const isHalqStep = currentStep < steps.length && steps[currentStep].id === 'halq';

  // Reset when step changes
  useEffect(() => {
    setReachedDestination(false);
    positionInitializedRef.current = false;
    if (isTawafStep) {
      tawafAngleRef.current = 0; // Start from front
      lastCircuitRef.current = 0;
      setTawafCircuit(0);
    }
    if (isSaiStep) {
      saiProgressRef.current = 0;
      lastSaiLapRef.current = 0;
      setSaiLap(0);
    }
    // Reset Jamarat
    if (isJamaratStep) {
      jamaratPhaseRef.current = 'walking';
      currentPillarRef.current = 0;
      stonesThrown.current = 0;
      stoneTimerRef.current = 0;
      stoneFlightRef.current.active = false;
      setStoneCount(0);
    }
    // Reset Arafat
    if (isArafatStep) {
      arafatTimerRef.current = 0;
      setArafatPhaseBoth('walking');
    }
    // Reset Muzdalifah
    if (isMuzdalifahStep) {
      muzTimerRef.current = 0;
      muzPebbleRef.current = 0;
      muzCollectingRef.current = false;
      setMuzPebbles(0);
    }
    // Reset Sacrifice
    if (isSacrificeStep) {
      sacrificeTimerRef.current = 0;
      setSacrificePhaseBoth('walking');
    }
    // Reset Halq
    if (isHalqStep) {
      halqTimerRef.current = 0;
      setHalqPhaseBoth('walking');
    }
  }, [currentStep]);

  // Fire onAnimationDone when step-specific animations complete
  useEffect(() => { if (arafatPhase === 'done') onAnimationDone?.('arafat'); }, [arafatPhase]);
  useEffect(() => { if (muzPebbles >= 49 && isMuzdalifahStep) onAnimationDone?.('muzdalifah'); }, [muzPebbles]);
  useEffect(() => { if (sacrificePhase === 'done') onAnimationDone?.('sacrifice'); }, [sacrificePhase]);
  useEffect(() => { if (halqPhase === 'done') onAnimationDone?.('halq'); }, [halqPhase]);

  useFrame((state, rawDelta) => {
    if (currentStep >= steps.length || !groupRef.current) return;
    // Clamp delta to prevent massive jumps after tab switch (rAF pauses in background)
    const delta = Math.min(rawDelta, 0.1);

    const step = steps[currentStep];
    const pos = groupRef.current.position;

    // Initialize position once per step change.
    // - Step 0 (first load): offset from Miqat building so avatar is visible
    // - Step > 0 on fresh load (resumed from localStorage): place at previous step position
    // - Step > 0 during session (just advanced): keep current position (pilgrim walks from where it is)
    if (!positionInitializedRef.current) {
      if (currentStep === 0) {
        const base = steps[0]?.position || [-35, 0, 25];
        pos.set(base[0] + 5, 0, base[2] + 3); // On the green ground circle, close to Miqat building
        // Face toward Kaaba (origin) from Miqat position
        lookDirectionRef.current = Math.atan2(0 - pos.x, 0 - pos.z);
      } else if (pos.x === 0 && pos.z === 0) {
        // Fresh mount with resumed step - place at previous step's position
        const prevPos = steps[currentStep - 1]?.position || steps[currentStep].position;
        pos.set(prevPos[0], 0, prevPos[2]);
      }
      // Otherwise: keep current position (pilgrim walked here from previous step)
      positionInitializedRef.current = true;
    }

    if (isTawafStep) {
      // TAWAF: First walk to the circle, then start circling
      const targetOnCircle = TAWAF_START;
      const distToCircle = Math.sqrt(
        Math.pow(pos.x - targetOnCircle[0], 2) +
        Math.pow(pos.z - targetOnCircle[2], 2)
      );

      if (!reachedDestination && distToCircle > 0.5) {
        // Still walking TO the Tawaf starting point
        if (isWalking) {
          pos.x = THREE.MathUtils.lerp(pos.x, targetOnCircle[0], 0.05);
          pos.z = THREE.MathUtils.lerp(pos.z, targetOnCircle[2], 0.05);

          // Face direction of movement
          const dx = targetOnCircle[0] - pos.x;
          const dz = targetOnCircle[2] - pos.z;
          lookDirectionRef.current = Math.atan2(dx, dz);
        }
      } else {
        // Reached the circle - start Tawaf
        if (!reachedDestination) {
          setReachedDestination(true);
          tawafAngleRef.current = 0;
          onReachDestination?.('tawaf');
        }

        if (isWalking && lastCircuitRef.current < 7) {
          // Dynamic speed: one full circuit (2π radians) takes exactly as long as the audio
          // First circuit includes Black Stone takbir + gap + Rabbana atina prelude
          let duaDurationSec;
          if (lastCircuitRef.current === 0) {
            duaDurationSec = (getDuaDurationMs(TAWAF_DUA.atBlackStone.arabic) + 500 + getDuaDurationMs(TAWAF_DUA.betweenCorners.arabic)) / 1000;
          } else {
            duaDurationSec = getDuaDurationMs(TAWAF_CIRCUIT_DUAS[Math.min(lastCircuitRef.current, 6)]?.arabic) / 1000;
          }
          const tawafSpeed = (Math.PI * 2) / duaDurationSec;
          tawafAngleRef.current += tawafSpeed * delta;

          // Clamp to exactly 7 circuits (prevent overshoot)
          const MAX_ANGLE = Math.PI * 2 * 7;
          if (tawafAngleRef.current > MAX_ANGLE) tawafAngleRef.current = MAX_ANGLE;

          // Position on circle (counter-clockwise: Kaaba on pilgrim's left)
          pos.x = -Math.sin(tawafAngleRef.current) * TAWAF_RADIUS;
          pos.z = Math.cos(tawafAngleRef.current) * TAWAF_RADIUS;

          // Face tangent direction (counter-clockwise movement)
          lookDirectionRef.current = -tawafAngleRef.current - Math.PI / 2;

          // Track circuits - count after completing each full circle (2π radians)
          const fullCircles = Math.floor(tawafAngleRef.current / (Math.PI * 2));
          if (fullCircles > 0 && fullCircles > lastCircuitRef.current && fullCircles <= 7) {
            lastCircuitRef.current = fullCircles;
            setTawafCircuit(fullCircles);
            onTawafCircuit?.(fullCircles);
          }
        }
      }
    } else if (isSaiStep) {
      // SA'I: First walk to Safa, then start back-and-forth
      const distToSafa = Math.sqrt(
        Math.pow(pos.x - SAFA_POS[0], 2) +
        Math.pow(pos.z - SAFA_POS[2], 2)
      );

      if (!reachedDestination && distToSafa > 0.5) {
        // Walking TO Safa
        if (isWalking) {
          pos.x = THREE.MathUtils.lerp(pos.x, SAFA_POS[0], 0.05);
          pos.z = THREE.MathUtils.lerp(pos.z, SAFA_POS[2], 0.05);

          const dx = SAFA_POS[0] - pos.x;
          const dz = SAFA_POS[2] - pos.z;
          lookDirectionRef.current = Math.atan2(dx, dz);
        }
      } else {
        // Reached Safa - start Sa'i
        if (!reachedDestination) {
          setReachedDestination(true);
          saiProgressRef.current = 0;
          onReachDestination?.('sai');
        }

        if (isWalking && lastSaiLapRef.current < 7) {
          // Dynamic speed: one full lap (12 progress units)
          // All laps capped at 15s max → 7 laps ≈ 105s total (not 4+ min)
          // Audio restarts each lap via handleSaiLap callback
          let duaDurationSec;
          if (lastSaiLapRef.current === 0) {
            duaDurationSec = Math.min(
              (getDuaDurationMs(SAI_DUA.firstApproach.arabic) + 500 + getDuaDurationMs(SAI_DUA.atHills.arabic)) / 1000,
              15 // first lap capped at 15s (consistent with all laps)
            );
          } else {
            duaDurationSec = Math.min(
              getDuaDurationMs(SAI_LAP_DUAS[Math.min(lastSaiLapRef.current, 6)]?.arabic) / 1000,
              15 // subsequent laps max 15s
            );
          }
          const saiSpeed = 12 / duaDurationSec;
          saiProgressRef.current += saiSpeed * delta;

          // Clamp to exactly 7 laps (prevent overshoot)
          const MAX_PROGRESS = 12 * 7;
          if (saiProgressRef.current > MAX_PROGRESS) saiProgressRef.current = MAX_PROGRESS;

          // Calculate position between Safa and Marwah
          // Each lap is one direction: Safa->Marwah or Marwah->Safa
          // 7 laps total: Safa->Marwah (1), Marwah->Safa (2), etc.
          const currentLapNum = Math.floor(saiProgressRef.current / 12);
          const lapProgress = (saiProgressRef.current % 12) / 12; // 0 to 1 within current lap
          const goingToMarwah = currentLapNum % 2 === 0; // Even laps go to Marwah, odd laps go back

          if (goingToMarwah) {
            pos.x = THREE.MathUtils.lerp(SAFA_POS[0], MARWAH_POS[0], lapProgress);
          } else {
            pos.x = THREE.MathUtils.lerp(MARWAH_POS[0], SAFA_POS[0], lapProgress);
          }
          pos.z = 0; // Stay on marble corridor

          lookDirectionRef.current = goingToMarwah ? Math.PI / 2 : -Math.PI / 2;

          // Count completed laps (each direction = 1 lap)
          const completedLaps = currentLapNum;
          if (completedLaps > 0 && completedLaps > lastSaiLapRef.current && completedLaps <= 7) {
            lastSaiLapRef.current = completedLaps;
            setSaiLap(completedLaps);
            onSaiLap?.(completedLaps);
          }
        }
      }
    } else if (isJamaratStep) {
      // ===== JAMARAT STONING ANIMATION =====
      const pillarsToStone = isJamarat1Step ? [2] : [0, 1, 2]; // Eid: only large; Tashreeq: all 3
      const pillarIdx = pillarsToStone[currentPillarRef.current];

      if (pillarIdx === undefined) {
        // All pillars done
        if (jamaratPhaseRef.current !== 'done') {
          jamaratPhaseRef.current = 'done';
          if (!reachedDestination) {
            setReachedDestination(true);
            onReachDestination?.('jamarat');
          }
        }
      } else {
        const pillarWorld = PILLAR_WORLD[pillarIdx];
        const throwPosX = pillarWorld[0];
        const throwPosZ = pillarWorld[2] + THROW_STAND_OFFSET_Z;

        if (jamaratPhaseRef.current === 'walking') {
          const dist = Math.sqrt(Math.pow(pos.x - throwPosX, 2) + Math.pow(pos.z - throwPosZ, 2));
          if (isWalking && dist > 1.0) {
            const lerpSpeed = dist > 15 ? 0.06 : 0.05;
            pos.x = THREE.MathUtils.lerp(pos.x, throwPosX, lerpSpeed);
            pos.z = THREE.MathUtils.lerp(pos.z, throwPosZ, lerpSpeed);
            // Climb to bridge height
            pos.y = THREE.MathUtils.lerp(pos.y, 3.5, 0.05);
            lookDirectionRef.current = Math.atan2(throwPosX - pos.x, throwPosZ - pos.z);
          } else if (isWalking) {
            pos.set(throwPosX, 3.5, throwPosZ);
            jamaratPhaseRef.current = 'throwing';
            stoneTimerRef.current = 0;
            stonesThrown.current = 0;
            stoneFlightRef.current.active = false;
            // Face the pillar
            lookDirectionRef.current = Math.atan2(pillarWorld[0] - pos.x, pillarWorld[2] - pos.z);
            // First pillar reached — notify parent (only first time)
            if (!reachedDestination) {
              setReachedDestination(true);
              onReachDestination?.('jamarat');
            }
          }
        } else if (jamaratPhaseRef.current === 'throwing') {
          if (!isWalking) return; // paused
          stoneTimerRef.current += delta;

          // Animate throwing arm swing (quick forward snap on throw, slow reset)
          if (throwArmRef.current > 0) {
            throwArmRef.current = Math.max(0, throwArmRef.current - delta * 3);
          }

          // Animate in-flight stone — move the mesh directly via ref
          if (stoneFlightRef.current.active) {
            stoneFlightRef.current.progress += delta * 1.8; // ~0.55s flight (fast arc)
            const sf = stoneFlightRef.current;
            const t = Math.min(sf.progress, 1);
            if (stoneMeshRef.current) {
              // World-space position (stone is sibling of pilgrim group, not child)
              stoneMeshRef.current.position.x = THREE.MathUtils.lerp(sf.startX, sf.endX, t);
              stoneMeshRef.current.position.z = THREE.MathUtils.lerp(sf.startZ, sf.endZ, t);
              // Parabolic arc: rises then falls, peak at t=0.4 for a natural throw feel
              const arcHeight = Math.sin(t * Math.PI) * 2;
              stoneMeshRef.current.position.y = THREE.MathUtils.lerp(sf.startY, sf.endY, t) + arcHeight;
              // Scale: starts small, grows to full, then shrinks on impact
              const s = t < 0.1 ? t * 10 : t > 0.85 ? (1 - t) * 6.67 : 1;
              stoneMeshRef.current.scale.setScalar(s);
              stoneMeshRef.current.visible = true;
              // Spin the stone
              stoneMeshRef.current.rotation.x += delta * 12;
              stoneMeshRef.current.rotation.z += delta * 8;
            }
            if (sf.progress >= 1) {
              stoneFlightRef.current.active = false;
              if (stoneMeshRef.current) stoneMeshRef.current.visible = false;
              // Trigger impact flash at pillar
              impactRef.current = { active: true, timer: 0.6, x: sf.endX, y: sf.endY, z: sf.endZ };
            }
          }

          // Impact flash timer
          if (impactRef.current.active) {
            impactRef.current.timer -= delta;
            if (impactRef.current.timer <= 0) impactRef.current.active = false;
          }

          // Throw a new stone every 2.2s — enough for takbir audio (2.1s) to finish
          const THROW_INTERVAL = 2.2;
          if (stoneTimerRef.current >= THROW_INTERVAL && stonesThrown.current < 7) {
            stonesThrown.current += 1;
            stoneTimerRef.current = 0;
            throwArmRef.current = 1; // Trigger arm swing
            const totalStones = currentPillarRef.current * 7 + stonesThrown.current;
            setStoneCount(totalStones);
            onStoneThrow?.(currentPillarRef.current, stonesThrown.current);
            // Launch stone flight (world-space coordinates)
            stoneFlightRef.current = {
              active: true, progress: 0,
              startX: pos.x, startY: pos.y + 1.5, startZ: pos.z,
              endX: pillarWorld[0], endY: pillarWorld[1] + 0.5, endZ: pillarWorld[2]
            };
          }

          if (stonesThrown.current >= 7 && !stoneFlightRef.current.active) {
            // Done with this pillar — move to next
            currentPillarRef.current += 1;
            jamaratPhaseRef.current = 'walking';
            stonesThrown.current = 0;
            stoneTimerRef.current = 0;
          }
        }
      }
    } else if (isArafatStep) {
      // ===== ARAFAT STANDING ANIMATION =====
      const target = step.position;
      const dist = Math.sqrt(Math.pow(pos.x - target[0], 2) + Math.pow(pos.z - target[2], 2));

      if (arafatPhaseRef.current === 'walking') {
        if (isWalking && dist > 1.0) {
          const lerpSpeed = dist > 30 ? 0.06 : 0.05;
          pos.x = THREE.MathUtils.lerp(pos.x, target[0], lerpSpeed);
          pos.z = THREE.MathUtils.lerp(pos.z, target[2], lerpSpeed);
          lookDirectionRef.current = Math.atan2(target[0] - pos.x, target[2] - pos.z);
        } else if (isWalking) {
          pos.set(target[0], 0, target[2]);
          setArafatPhaseBoth('standing');
          arafatTimerRef.current = 0;
          // Face mountain (mountain is at [45, 0, -35], summit is north — face -z)
          lookDirectionRef.current = Math.PI; // Face north toward mountain peak
          if (!reachedDestination) {
            setReachedDestination(true);
            onReachDestination?.('arafat');
          }
        }
      } else if (arafatPhaseRef.current === 'standing') {
        if (!isWalking) return; // paused by user (Stop button)
        arafatTimerRef.current += delta;
        if (arafatTimerRef.current >= 8) {
          setArafatPhaseBoth('done');
        }
      }
    } else if (isMuzdalifahStep) {
      // ===== MUZDALIFAH PEBBLE COLLECTION ANIMATION =====
      const target = step.position;
      const dist = Math.sqrt(Math.pow(pos.x - target[0], 2) + Math.pow(pos.z - target[2], 2));

      if (!reachedDestination && dist > 1.0) {
        if (isWalking) {
          const lerpSpeed = dist > 30 ? 0.06 : 0.05;
          pos.x = THREE.MathUtils.lerp(pos.x, target[0], lerpSpeed);
          pos.z = THREE.MathUtils.lerp(pos.z, target[2], lerpSpeed);
          lookDirectionRef.current = Math.atan2(target[0] - pos.x, target[2] - pos.z);
        }
      } else {
        if (!reachedDestination) {
          pos.set(target[0], 0, target[2]);
          setReachedDestination(true);
          muzCollectingRef.current = true;
          onReachDestination?.('muzdalifah');
        }
        if (muzCollectingRef.current && isWalking && muzPebbleRef.current < 49) {
          muzTimerRef.current += delta;
          const COLLECT_INTERVAL = 0.12;
          if (muzTimerRef.current >= COLLECT_INTERVAL) {
            muzPebbleRef.current += 1;
            muzTimerRef.current = 0;
            setMuzPebbles(muzPebbleRef.current);
            onPebbleCollected?.(muzPebbleRef.current);
          }
          // Bob up and down (simulate bending to pick up pebbles — always at or below ground)
          pos.y = (Math.cos(muzPebbleRef.current * 0.5) - 1) * 0.15;
        } else if (muzPebbleRef.current >= 49) {
          pos.y = 0; // Return to ground level
          muzCollectingRef.current = false;
        }
      }
    } else if (isSacrificeStep) {
      // ===== SACRIFICE CEREMONY ANIMATION =====
      const target = step.position;
      const dist = Math.sqrt(Math.pow(pos.x - target[0], 2) + Math.pow(pos.z - target[2], 2));

      if (sacrificePhaseRef.current === 'walking') {
        if (isWalking && dist > 1.0) {
          const lerpSpeed = dist > 15 ? 0.06 : 0.05;
          pos.x = THREE.MathUtils.lerp(pos.x, target[0], lerpSpeed);
          pos.z = THREE.MathUtils.lerp(pos.z, target[2], lerpSpeed);
          lookDirectionRef.current = Math.atan2(target[0] - pos.x, target[2] - pos.z);
        } else if (isWalking) {
          pos.set(target[0], 0, target[2]);
          setSacrificePhaseBoth('ceremony');
          sacrificeTimerRef.current = 0;
          if (!reachedDestination) {
            setReachedDestination(true);
            onReachDestination?.('sacrifice');
          }
        }
      } else if (sacrificePhaseRef.current === 'ceremony') {
        if (!isWalking) return; // paused by user
        sacrificeTimerRef.current += delta;
        if (sacrificeTimerRef.current >= 6) setSacrificePhaseBoth('done');
      }
    } else if (isHalqStep) {
      // ===== HALQ HAIR CUTTING ANIMATION =====
      const target = step.position;
      const dist = Math.sqrt(Math.pow(pos.x - target[0], 2) + Math.pow(pos.z - target[2], 2));

      if (halqPhaseRef.current === 'walking') {
        if (isWalking && dist > 1.0) {
          const lerpSpeed = dist > 15 ? 0.06 : 0.05;
          pos.x = THREE.MathUtils.lerp(pos.x, target[0], lerpSpeed);
          pos.z = THREE.MathUtils.lerp(pos.z, target[2], lerpSpeed);
          lookDirectionRef.current = Math.atan2(target[0] - pos.x, target[2] - pos.z);
        } else if (isWalking) {
          pos.set(target[0], 0, target[2]);
          setHalqPhaseBoth('cutting');
          halqTimerRef.current = 0;
          if (!reachedDestination) {
            setReachedDestination(true);
            onReachDestination?.('halq');
          }
        }
      } else if (halqPhaseRef.current === 'cutting') {
        if (!isWalking) return; // paused by user
        halqTimerRef.current += delta;
        if (halqTimerRef.current >= 5) setHalqPhaseBoth('done');
      }
    } else {
      // Normal walking to step position
      const target = step.position;
      const dist = Math.sqrt(
        Math.pow(pos.x - target[0], 2) +
        Math.pow(pos.z - target[2], 2)
      );

      if (isWalking && dist > 1.0) {
        // Use faster lerp for longer distances to prevent slow crawling
        const lerpSpeed = dist > 30 ? 0.06 : 0.05;
        pos.x = THREE.MathUtils.lerp(pos.x, target[0], lerpSpeed);
        pos.z = THREE.MathUtils.lerp(pos.z, target[2], lerpSpeed);
        // Transition y back to ground after Jamarat (bridge height y=3.5)
        if (pos.y > 0.1) pos.y = THREE.MathUtils.lerp(pos.y, 0, 0.05);

        const dx = target[0] - pos.x;
        const dz = target[2] - pos.z;
        if (Math.abs(dx) > 0.1 || Math.abs(dz) > 0.1) {
          lookDirectionRef.current = Math.atan2(dx, dz);
        }
      } else if (isWalking && dist <= 1.0 && !reachedDestination) {
        // Pilgrim has arrived at step destination
        setReachedDestination(true);
        pos.x = target[0];
        pos.z = target[2];
        if (pos.y > 0.1) pos.y = 0; // Ensure ground level
        onReachDestination?.('step');
      }
    }

    // Share position with CameraController (for follow mode)
    if (pilgrimPositionRef) {
      pilgrimPositionRef.current.x = pos.x;
      pilgrimPositionRef.current.y = pos.y; // Include Y for Jamarat bridge height
      pilgrimPositionRef.current.z = pos.z;
    }

    // Apply look direction via parent group rotation (ref avoids 60 setState/sec)
    groupRef.current.rotation.y = lookDirectionRef.current;
  });

  // Get starting position (previous step) - offset from buildings so avatar is visible
  const getInitialPosition = () => {
    if (currentStep > 0 && steps[currentStep - 1]) {
      return steps[currentStep - 1].position;
    }
    // For Ihram (step 0), place avatar on the green ground circle, close to Miqat building
    const base = steps[0]?.position || [-35, 0, 25];
    return [base[0] + 5, base[1], base[2] + 3];
  };

  const initialPos = getInitialPosition();

  // Compute walking path for visual trail from start to destination
  const walkStart = getInitialPosition();
  const walkEnd = isTawafStep ? TAWAF_START : isSaiStep ? SAFA_POS : isJamaratStep ? [PILLAR_WORLD[isJamarat1Step ? 2 : 0][0], 0, PILLAR_WORLD[isJamarat1Step ? 2 : 0][2] + THROW_STAND_OFFSET_Z] : (currentStep < steps.length ? steps[currentStep].position : [0, 0, 0]);
  const wpDx = walkEnd[0] - walkStart[0];
  const wpDz = walkEnd[2] - walkStart[2];
  const wpLen = Math.sqrt(wpDx * wpDx + wpDz * wpDz);
  const wpColor = currentStep < steps.length ? steps[currentStep].color : '#10B981';
  const showWalkPath = isWalking && wpLen > 2 && !((isTawafStep || isSaiStep || isJamaratStep) && reachedDestination);

  return (
    <>
    {/* Walking path line - glowing trail from start to destination */}
    {showWalkPath && (
      <group>
        <mesh position={[(walkStart[0] + walkEnd[0]) / 2, 0.3, (walkStart[2] + walkEnd[2]) / 2]}
          rotation={[0, Math.atan2(wpDx, wpDz), 0]}>
          <boxGeometry args={[0.5, 0.15, wpLen]} />
          <meshStandardMaterial color={wpColor} emissive={wpColor} emissiveIntensity={0.5} transparent opacity={0.4} />
        </mesh>
        {[0.1, 0.3, 0.5, 0.7, 0.9].map((t, i) => (
          <mesh key={`wp-${i}`} position={[walkStart[0] + wpDx * t, 0.6, walkStart[2] + wpDz * t]}>
            <sphereGeometry args={[0.25, 8, 8]} />
            <meshStandardMaterial color={wpColor} emissive={wpColor} emissiveIntensity={0.7} transparent opacity={0.5} />
          </mesh>
        ))}
        <mesh position={[walkEnd[0], 1.2, walkEnd[2]]} rotation={[-Math.PI / 2, 0, Math.atan2(wpDx, wpDz)]}>
          <coneGeometry args={[0.5, 1.5, 6]} />
          <meshStandardMaterial color={wpColor} emissive={wpColor} emissiveIntensity={0.6} transparent opacity={0.7} />
        </mesh>
      </group>
    )}
    <group ref={groupRef} position={initialPos}>
      {/* Main Pilgrim - Larger scale for visibility */}
      {/* lookDirection handled by parent group rotation via lookDirectionRef */}
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={3}
        isMoving={isWalking}
        isRunning={isSaiStep}
        lookDirection={0}
      />

      {/* "Pilgrim in Ihram" label - visible at start to help user locate avatar */}
      {_showLabels && currentStep < steps.length && steps[currentStep].id === 'ihram' && !isWalking && (
        <Html position={[0, 8, 0]} center distanceFactor={40}>
          <div style={{ background: 'rgba(16,185,129,0.9)', padding: '4px 12px', borderRadius: 8, textAlign: 'center', whiteSpace: 'nowrap', border: '2px solid rgba(255,255,255,0.4)', boxShadow: '0 0 20px rgba(16,185,129,0.5)',
            direction: language === 'ar' || language === 'ur' ? 'rtl' : 'ltr',
            fontFamily: language === 'ar' || language === 'ur' ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>
              {language === 'ar' ? '🧕 حاج في الإحرام' : language === 'ur' ? '🧕 حاجی احرام میں' : '🧕 Pilgrim in Ihram'}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10 }}>
              {language === 'ar' ? 'عند الميقات: ذو الحليفة' : language === 'ur' ? 'میقات پر: ذوالحلیفہ' : 'At Miqat: Dhul Hulayfah'}
            </div>
          </div>
        </Html>
      )}

      {/* Spotlight on pilgrim */}
      <pointLight position={[0, 5, 0]} intensity={3} color="#FFFFFF" distance={20} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={0.5}
        intensity={2}
        color="#FFD700"
        castShadow
      />

      {/* Always visible beacon above pilgrim */}
      <Float speed={2} floatIntensity={0.5}>
        <mesh position={[0, 7, 0]}>
          <coneGeometry args={[0.5, 1.5, 4]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      {/* Glowing ring around pilgrim */}
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2, 32]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} transparent opacity={0.7} />
      </mesh>

      {/* Walking sparkles */}
      {isWalking && (
        <>
          <Sparkles count={25} scale={5} size={4} speed={2} color="#FFD700" opacity={0.8} />
          <Sparkles count={15} scale={3} size={2} speed={3} color="#FFFFFF" opacity={0.6} position={[0, 0.1, 0]} />
        </>
      )}

      {/* Standing sparkles when not walking */}
      {!isWalking && (
        <Sparkles count={10} scale={3} size={2} speed={1} color="#10B981" opacity={0.5} />
      )}

      {/* ===== HAJJ STEP-SPECIFIC VISUAL EFFECTS ===== */}

      {/* Jamarat stone + impact flash rendered outside pilgrim group (world-space) */}

      {/* Jamarat: stone counter label */}
      {isJamaratStep && jamaratPhaseRef.current === 'throwing' && (
        <Html position={[0, 8, 0]} center distanceFactor={40}>
          <div style={{ background: 'rgba(74,74,74,0.9)', padding: '4px 12px', borderRadius: 8, textAlign: 'center', whiteSpace: 'nowrap', border: '2px solid rgba(255,255,255,0.3)' }}>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>
              🪨 {stonesThrown.current}/7
            </div>
          </div>
        </Html>
      )}

      {/* Arafat: golden light beams + raised hands when standing */}
      {isArafatStep && arafatPhase === 'standing' && (
        <group>
          <mesh position={[0, 12, 0]}>
            <cylinderGeometry args={[0.3, 2, 24, 8]} />
            <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.6} transparent opacity={0.2} />
          </mesh>
          <Sparkles count={40} scale={6} size={5} speed={1.5} color="#FFD700" opacity={0.9} />
          {/* Raised hands indicator */}
          <mesh position={[-0.4, 6, 0.3]}>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshStandardMaterial color="#C4926A" emissive="#FFD700" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0.4, 6, 0.3]}>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshStandardMaterial color="#C4926A" emissive="#FFD700" emissiveIntensity={0.3} />
          </mesh>
          <pointLight position={[0, 8, 0]} intensity={3} color="#FFD700" distance={15} />
        </group>
      )}

      {/* Muzdalifah: pebble counter */}
      {isMuzdalifahStep && muzCollectingRef.current && muzPebbles < 49 && (
        <Html position={[0, 8, 0]} center distanceFactor={40}>
          <div style={{ background: 'rgba(45,45,61,0.9)', padding: '4px 12px', borderRadius: 8, textAlign: 'center', whiteSpace: 'nowrap', border: '2px solid rgba(255,255,255,0.3)' }}>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>🪨 {muzPebbles}/49</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10 }}>
              {language === 'ar' ? 'جمع الحصى' : language === 'ur' ? 'کنکریاں جمع ہو رہی ہیں' : 'Collecting pebbles'}
            </div>
          </div>
        </Html>
      )}
      {isMuzdalifahStep && muzCollectingRef.current && (
        <Sparkles count={20} scale={4} size={3} speed={2} color="#E8E0FF" opacity={0.7} position={[0, 0.5, 0]} />
      )}

      {/* Sacrifice: golden ceremony sparkles */}
      {isSacrificeStep && sacrificePhase === 'ceremony' && (
        <group>
          <Sparkles count={30} scale={5} size={4} speed={2} color="#FFD700" opacity={0.8} />
          <pointLight position={[0, 3, 0]} intensity={3} color="#FFD700" distance={10} />
        </group>
      )}

      {/* Halq: floating scissors + sparkles */}
      {isHalqStep && halqPhase === 'cutting' && (
        <group>
          <Float speed={3} floatIntensity={0.3}>
            <group position={[0.5, 5.5, 0]}>
              {/* Scissors: two crossing blades */}
              <mesh rotation={[0, 0, Math.PI / 6]}>
                <boxGeometry args={[0.08, 1.2, 0.02]} />
                <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
              </mesh>
              <mesh rotation={[0, 0, -Math.PI / 6]}>
                <boxGeometry args={[0.08, 1.2, 0.02]} />
                <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
              </mesh>
              <mesh>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshStandardMaterial color="#999" metalness={0.9} />
              </mesh>
            </group>
          </Float>
          <Sparkles count={20} scale={4} size={3} speed={2} color="#C0C0C0" opacity={0.7} />
          <Sparkles count={10} scale={3} size={2} speed={1.5} color="#FFD700" opacity={0.5} />
        </group>
      )}

      {/* Tawaf circuit counter removed — progress shown in UI dots instead */}

      {/* Circuit completion rings */}
      {isTawafStep && Array.from({ length: tawafCircuit }).map((_, i) => (
        <mesh key={i} position={[0, 0.1 + i * 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.5 + i * 0.2, 1.6 + i * 0.2, 32]} />
          <meshStandardMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6 - i * 0.05}
          />
        </mesh>
      ))}
    </group>

    {/* ===== WORLD-SPACE JAMARAT STONE (driven by stoneMeshRef in useFrame) ===== */}
    {isJamaratStep && (
      <mesh ref={stoneMeshRef} visible={false}>
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#8B7355" roughness={0.95} metalness={0} />
      </mesh>
    )}

    {/* ===== IMPACT FLASH at pillar basin ===== */}
    {isJamaratStep && impactRef.current.active && (
      <group position={[impactRef.current.x, impactRef.current.y, impactRef.current.z]}>
        <pointLight intensity={8} color="#FFD700" distance={6} decay={2} />
        <mesh>
          <sphereGeometry args={[0.5 * Math.max(0, impactRef.current.timer), 8, 8]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} transparent opacity={impactRef.current.timer} />
        </mesh>
        <Sparkles count={8} scale={2} size={6} speed={4} color="#FFD700" opacity={0.9} />
      </group>
    )}
    </>
  );
};

// Step-specific camera positions for best view of each location
const STEP_CAMERAS = {
  ihram:        { pos: [12, 16, 18], look: [0, 1, 0], offsetFromStep: true },    // Zoomed out to show full Miqat scene
  tawaf:        { pos: [5, 18, 22], look: [0, 1, 0] },                           // Above-front view of Kaaba circle
  maqam_ibrahim:{ pos: [12, 8, 6], look: [5, 1, 0] },                            // Close view of Maqam Ibrahim
  sai:          { pos: [22, 10, 16], look: [28, 1, 0] },                          // View along Sa'i corridor — hills behind, pilgrim on walkway
  halq:         { pos: [10, 12, 12], look: [0, 1, 0], offsetFromStep: true },     // Relative to step position (works for both Umrah & Hajj)
  mina1:        { pos: [18, 14, -20], look: [10, 1, -30] },                      // Mina tents
  arafat:       { pos: [52, 16, -22], look: [45, 3, -35] },                      // Mount Arafat closer
  muzdalifah:   { pos: [32, 12, -35], look: [25, 1, -45] },                      // Night at Muzdalifah
  jamarat1:     { pos: [20, 12, -28], look: [12, 3, -38] },                      // Jamarat bridge
  sacrifice:    { pos: [12, 10, -22], look: [5, 1, -32] },                       // Sacrifice area
  tawaf_ifadah: { pos: [5, 18, 22], look: [0, 1, 0] },                           // Kaaba again
  mina_days:    { pos: [18, 14, -20], look: [10, 1, -30] },                      // Back to Mina
  tawaf_wida:   { pos: [5, 18, 22], look: [0, 1, 0] },                           // Farewell Tawaf
};

// Camera Controller - Focuses on current step with per-step angles
// viewMode: 'step' (curated per-step), 'birdseye' (high overhead), 'follow' (close behind pilgrim)
// Uses controls.target (from makeDefault OrbitControls) to keep orbit center in sync with lookAt
const CameraController = ({ currentStep, steps, viewMode, pilgrimPositionRef }) => {
  const { camera, controls } = useThree();
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));
  const prevStepRef = useRef(-1);
  const prevViewModeRef = useRef(viewMode);
  const animatingRef = useRef(false);
  const frameCountRef = useRef(0);
  const camPosTemp = useRef(new THREE.Vector3());
  const camLookTemp = useRef(new THREE.Vector3());

  // Helper: sync OrbitControls target with our lookAt target
  const syncOrbitTarget = () => {
    if (controls) {
      controls.target.copy(targetRef.current);
      controls.update();
    }
  };

  useFrame(() => {
    if (currentStep >= steps.length) return;

    // Free mode: OrbitControls handles camera — do nothing
    if (viewMode === 'free') {
      prevStepRef.current = currentStep;
      prevViewModeRef.current = viewMode;
      return;
    }

    // Re-animate when step OR viewMode changes
    if (prevStepRef.current !== currentStep || prevStepRef.current === -1 || prevViewModeRef.current !== viewMode) {
      prevStepRef.current = currentStep;
      prevViewModeRef.current = viewMode;
      animatingRef.current = true;
      frameCountRef.current = 0;
    }

    // Follow mode: always track pilgrim (OrbitControls disabled via viewMode prop)
    // Close 3rd-person camera so avatar fills the frame
    if (viewMode === 'follow') {
      const px = pilgrimPositionRef?.current?.x ?? 0;
      const py = pilgrimPositionRef?.current?.y ?? 0;
      const pz = pilgrimPositionRef?.current?.z ?? 0;
      camPosTemp.current.set(px - 1.5, py + 2.8, pz + 3.5);
      camLookTemp.current.set(px, py + 1.2, pz);
      const lerpSpeed = frameCountRef.current < 5 ? 1 : 0.08;
      camera.position.lerp(camPosTemp.current, lerpSpeed);
      targetRef.current.lerp(camLookTemp.current, lerpSpeed);
      camera.lookAt(targetRef.current);
      frameCountRef.current++;
      return;
    }

    if (!animatingRef.current) return; // Animation done — OrbitControls handles user input

    frameCountRef.current++;
    const step = steps[currentStep];

    if (viewMode === 'birdseye') {
      // Elevated overhead view — close enough to still see the pilgrim
      const sx = step.position[0];
      const sz = step.position[2];
      camPosTemp.current.set(sx + 5, 30, sz + 20);
      camLookTemp.current.set(sx, 0, sz);
    } else {
      // 'step' mode: use curated STEP_CAMERAS
      const cam = STEP_CAMERAS[step.id];
      if (cam) {
        if (cam.offsetFromStep) {
          camPosTemp.current.set(step.position[0] + cam.pos[0], cam.pos[1], step.position[2] + cam.pos[2]);
          camLookTemp.current.set(step.position[0] + cam.look[0], cam.look[1], step.position[2] + cam.look[2]);
        } else {
          camPosTemp.current.set(cam.pos[0], cam.pos[1], cam.pos[2]);
          camLookTemp.current.set(cam.look[0], cam.look[1], cam.look[2]);
        }
      } else {
        camPosTemp.current.set(step.position[0] + 15, 12, step.position[2] + 15);
        camLookTemp.current.set(step.position[0], 2, step.position[2]);
      }
    }

    // Smooth camera movement — reuse Vector3 refs to avoid GC pressure
    // First frame: snap instantly so user sees correct view immediately
    if (frameCountRef.current === 1) {
      camera.position.copy(camPosTemp.current);
      targetRef.current.copy(camLookTemp.current);
      syncOrbitTarget(); // Snap OrbitControls target too — prevents fight on frame 1
    } else {
      const lerpSpeed = frameCountRef.current < 20 ? 0.03 : 0.05;
      camera.position.lerp(camPosTemp.current, lerpSpeed);
      targetRef.current.lerp(camLookTemp.current, lerpSpeed);
    }
    camera.lookAt(targetRef.current);
    // Keep OrbitControls target in sync during animation so it doesn't fight the camera
    syncOrbitTarget();

    // Stop animating after camera has settled (~80 frames ≈ 1.3 seconds)
    if (frameCountRef.current > 80) {
      animatingRef.current = false;
    }
  });

  return null;
};

// Step Markers
const StepMarkers = ({ steps, currentStep }) => {
  // Tawaf steps are at [0,0,0] (Kaaba center) - don't put markers on Kaaba
  const isTawafId = (id) => id === 'tawaf' || id === 'tawaf_ifadah' || id === 'tawaf_wida';

  return (
    <group>
      {steps.map((step, i) => {
        if (isTawafId(step.id)) return null; // No marker on Kaaba
        const isActive = i === currentStep;
        const isCompleted = i < currentStep;
        return (
          <group key={step.id} position={[step.position[0], 6, step.position[2]]}>
            <Float speed={2} floatIntensity={isActive ? 1 : 0.3}>
              <mesh>
                <sphereGeometry args={[isActive ? 1.2 : 0.8, 16, 16]} />
                <meshStandardMaterial
                  color={isCompleted ? '#10B981' : isActive ? step.color : '#666666'}
                  emissive={isActive ? step.color : '#000000'}
                  emissiveIntensity={isActive ? 0.5 : 0}
                />
              </mesh>
            </Float>
            <mesh position={[0, -3, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 6, 8]} />
              <meshStandardMaterial color={step.color} transparent opacity={0.4} />
            </mesh>
            {isActive && (
              <pointLight position={[0, 0, 0]} intensity={2} color={step.color} distance={12} />
            )}
          </group>
        );
      })}
    </group>
  );
};

// Determine time of day based on step
const getTimeOfDay = (stepId) => {
  if (stepId === 'muzdalifah') return 'night';
  if (stepId === 'arafat') return 'sunset';
  return 'day';
};

// Main Scene
const PilgrimageScene = ({ journeyType, currentStep, isWalking, viewMode, language = 'en', onTawafCircuit, onSaiLap, onReachDestination, onStoneThrow, onPebbleCollected, onAnimationDone, showLabels = true }) => {
  _sceneLanguage = language; // sync module-level language for 3D label components
  _showLabels = showLabels; // sync module-level label visibility for all 3D components
  const steps = journeyType === 'umrah' ? UMRAH_STEPS : HAJJ_STEPS;
  const pilgrimPositionRef = useRef({ x: 0, y: 0, z: 0 }); // shared: WalkingPilgrim writes, CameraController reads

  const isTawafStep = currentStep < steps.length &&
    (steps[currentStep].id === 'tawaf' ||
     steps[currentStep].id === 'tawaf_ifadah' ||
     steps[currentStep].id === 'tawaf_wida');

  const isSaiStep = currentStep < steps.length && steps[currentStep].id === 'sai';
  const timeOfDay = currentStep < steps.length ? getTimeOfDay(steps[currentStep].id) : 'day';
  const isNight = timeOfDay === 'night';
  const isSunset = timeOfDay === 'sunset';

  return (
    <>
      {/* Day/Night adaptive lighting */}
      <ambientLight intensity={isNight ? 0.15 : isSunset ? 0.4 : 0.5} color={isNight ? '#4a5568' : '#ffffff'} />
      <directionalLight
        position={isNight ? [0, 50, 0] : isSunset ? [100, 20, 50] : [40, 80, 40]}
        intensity={isNight ? 0.3 : isSunset ? 1.2 : 1.8}
        color={isNight ? '#B4C5E4' : isSunset ? '#FF8C42' : '#ffffff'}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={150}
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={80}
        shadow-camera-bottom={-80}
      />
      {!isNight && <directionalLight position={[-30, 50, -30]} intensity={0.5} color="#B4C5E4" />}
      <hemisphereLight args={[
        isNight ? '#1a1a3e' : isSunset ? '#FF6B35' : '#87CEEB',
        isNight ? '#0a0a15' : '#D4B896',
        isNight ? 0.2 : 0.6
      ]} />

      {/* Day/Night adaptive sky */}
      {isNight ? (
        <>
          <color attach="background" args={['#0a0a15']} />
          <Stars radius={200} depth={80} count={5000} factor={5} fade speed={0.3} />
          {/* Moon */}
          <mesh position={[-80, 60, -40]}>
            <sphereGeometry args={[5, 16, 16]} />
            <meshStandardMaterial color="#FFFDE7" emissive="#FFFDE7" emissiveIntensity={0.5} />
          </mesh>
          <pointLight position={[-80, 60, -40]} intensity={0.4} color="#E8E0FF" distance={200} />
        </>
      ) : isSunset ? (
        <>
          <Sky distance={450000} sunPosition={[100, 15, 50]} rayleigh={3} turbidity={10} />
          <Stars radius={300} depth={100} count={500} factor={2} fade speed={0.5} />
        </>
      ) : (
        <>
          <Sky distance={450000} sunPosition={[100, 50, 100]} />
          <Stars radius={300} depth={100} count={3000} factor={4} fade speed={0.5} />
        </>
      )}

      <fog attach="fog" args={[
        isNight ? '#0a0a20' : isSunset ? '#E8A87C' : '#E8D5B7',
        isNight ? 40 : 80,
        isNight ? 180 : 250
      ]} />

      {/* Dust/atmosphere */}
      <DustParticles count={isNight ? 100 : 200} area={100} color={isNight ? '#4a5568' : '#D4A574'} />
      <Sparkles count={50} scale={100} size={1} speed={0.2} color={isNight ? '#E8E0FF' : '#FFE4B5'} opacity={0.3} position={[0, 20, 0]} />

      {!isNight && (
        <>
          <Cloud position={[-40, 35, -60]} speed={0.1} opacity={isSunset ? 0.25 : 0.15} />
          <Cloud position={[50, 40, -80]} speed={0.15} opacity={isSunset ? 0.2 : 0.12} />
          <Cloud position={[0, 45, -100]} speed={0.08} opacity={0.1} />
        </>
      )}

      {/* Scene elements */}
      <Ground />
      <MasjidStructure />
      <Kaaba showTawafPath={isTawafStep && isWalking} showLabels={showLabels} />
      <MiqatStations />
      <MiqatDistanceLines visible={currentStep < steps.length && steps[currentStep].id === 'ihram'} />
      <SafaMarwah showPath={isSaiStep && isWalking} />

      {/* Makkah Clock Tower */}
      <ClockTower position={[0, 0, -55]} />

      {/* Mosque Minarets - 9 main minarets like real Masjid al-Haram */}
      <Minaret position={[-30, 0, -30]} height={20} />
      <Minaret position={[30, 0, -30]} height={20} />
      <Minaret position={[-30, 0, 30]} height={18} />
      <Minaret position={[30, 0, 30]} height={18} />
      <Minaret position={[0, 0, -35]} height={22} />
      <Minaret position={[-35, 0, 0]} height={18} />
      <Minaret position={[35, 0, 0]} height={18} />

      {/* Palm Trees around the complex */}
      <PalmTree position={[-45, 0, 35]} scale={1.5} />
      <PalmTree position={[-50, 0, 20]} scale={1.2} />
      <PalmTree position={[45, 0, 30]} scale={1.4} />
      <PalmTree position={[50, 0, 10]} scale={1.1} />
      <PalmTree position={[-40, 0, -40]} scale={1.3} />
      <PalmTree position={[42, 0, -35]} scale={1.2} />

      {journeyType === 'hajj' && (
        <>
          <MountArafat />
          <Muzdalifah />
          <MinaTents />
          <Jamarat />
          <SacrificeArea />
          {/* More palm trees for Hajj areas */}
          <PalmTree position={[50, 0, -40]} scale={1} />
          <PalmTree position={[30, 0, -50]} scale={0.8} />
        </>
      )}
      <BarberArea />

      {/* Markers and pilgrim */}
      <StepMarkers steps={steps} currentStep={currentStep} />
      <WalkingPilgrim
        currentStep={currentStep}
        steps={steps}
        isWalking={isWalking}
        language={language}
        onTawafCircuit={onTawafCircuit}
        onSaiLap={onSaiLap}
        onReachDestination={onReachDestination}
        onStoneThrow={onStoneThrow}
        onPebbleCollected={onPebbleCollected}
        onAnimationDone={onAnimationDone}
        pilgrimPositionRef={pilgrimPositionRef}
      />
      <CameraController currentStep={currentStep} steps={steps} viewMode={viewMode} pilgrimPositionRef={pilgrimPositionRef} />

      {/* OrbitControls — enabled for user interaction (drag to orbit, pinch to zoom) */}
      {/* Disabled in 'follow' mode where CameraController runs every frame */}
      {/* In step/birdseye: CameraController animates ~80 frames then stops, OrbitControls takes over */}
      <OrbitControls
        makeDefault
        enabled={viewMode !== 'follow'}
        enablePan={viewMode !== 'follow'}
        enableZoom={true}
        enableRotate={viewMode !== 'follow'}
        enableDamping={true}
        dampingFactor={0.1}
        minDistance={5}
        maxDistance={250}
        minPolarAngle={0.1}
        maxPolarAngle={Math.PI / 2.1}
        panSpeed={1.2}
        zoomSpeed={1}
        rotateSpeed={0.8}
      />
    </>
  );
};

// ============================================================
// UI COMPONENTS
// ============================================================

// Circular progress indicator
const ArcProgress = ({ steps, currentStep }) => {
  const total = steps.length;
  const circumference = 2 * Math.PI * 18;
  const filled = (currentStep / Math.max(total - 1, 1)) * circumference;
  return (
    <svg width="44" height="44" viewBox="0 0 44 44">
      <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
      <circle cx="22" cy="22" r="18" fill="none" stroke={steps[currentStep]?.color || '#10B981'}
        strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={circumference - filled}
        strokeLinecap="round" transform="rotate(-90 22 22)" className="transition-all duration-700" />
      <text x="22" y="22" textAnchor="middle" dominantBaseline="central" fill="white" fontSize="10" fontWeight="bold">
        {currentStep + 1}/{total}
      </text>
    </svg>
  );
};

// Mini-map for Hajj route
// Day-by-day timeline for Hajj
const HAJJ_DAY_TIMELINE = [
  { day: { en: '8th', ur: '۸', ar: '٨' }, steps: { en: ['Ihram', 'Mina'], ur: ['احرام', 'منیٰ'], ar: ['الإحرام', 'منى'] }, color: '#10B981', stepIds: ['ihram', 'mina1'] },
  { day: { en: '9th', ur: '۹', ar: '٩' }, steps: { en: ['Arafat', 'Muzdalifah'], ur: ['عرفات', 'مزدلفہ'], ar: ['عرفات', 'مزدلفة'] }, color: '#F59E0B', stepIds: ['arafat', 'muzdalifah'] },
  { day: { en: '10th', ur: '۱۰', ar: '١٠' }, steps: { en: ['Rami', 'Sacrifice', 'Halq', 'Tawaf', "Sa'i"], ur: ['رمی', 'قربانی', 'حلق', 'طواف', 'سعی'], ar: ['رمي', 'ذبح', 'حلق', 'طواف', 'سعي'] }, color: '#EF4444', stepIds: ['jamarat1', 'sacrifice', 'halq', 'tawaf_ifadah', 'sai'] },
  { day: { en: '11-13th', ur: '۱۱-۱۳', ar: '١١-١٣' }, steps: { en: ['Mina', 'Rami'], ur: ['منیٰ', 'رمی'], ar: ['منى', 'رمي'] }, color: '#8B5CF6', stepIds: ['mina_days'] },
  { day: { en: '12-13th', ur: '۱۲-۱۳', ar: '١٢-١٣' }, steps: { en: ['Tawaf Wada'], ur: ['طواف وداع'], ar: ['طواف الوداع'] }, color: '#6366F1', stepIds: ['tawaf_wida'] },
];

const MiniMap = ({ currentStep, steps, journeyType }) => {
  if (journeyType !== 'hajj') return null;
  const locations = [
    { id: 'makkah', label: L3D('Makkah', 'مکہ', 'مكة'), x: 15, y: 40, emoji: '🕋' },
    { id: 'mina', label: L3D('Mina', 'منیٰ', 'منى'), x: 45, y: 20, emoji: '⛺' },
    { id: 'arafat', label: L3D('Arafat', 'عرفات', 'عرفات'), x: 85, y: 8, emoji: '🏔️' },
    { id: 'muzdalifah', label: L3D('Muzdalifah', 'مزدلفہ', 'مزدلفة'), x: 65, y: 40, emoji: '🌙' },
  ];
  const stepLocMap = {
    ihram: 'makkah', mina1: 'mina', arafat: 'arafat', muzdalifah: 'muzdalifah',
    jamarat1: 'mina', sacrifice: 'mina', halq: 'mina',
    tawaf_ifadah: 'makkah', sai: 'makkah', mina_days: 'mina', tawaf_wida: 'makkah'
  };
  const current = stepLocMap[steps[currentStep]?.id] || 'makkah';
  const currentStepId = steps[currentStep]?.id;

  return (
    <div className="absolute top-20 right-2 z-30 w-44 bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
      {/* Map */}
      <div className="p-1.5">
        <svg viewBox="0 0 100 55" className="w-full">
          {/* Route lines */}
          <line x1="15" y1="40" x2="45" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3" />
          <line x1="45" y1="20" x2="85" y2="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3" />
          <line x1="85" y1="8" x2="65" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3" />
          <line x1="65" y1="40" x2="45" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3" />
          <line x1="45" y1="20" x2="15" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3" />
          {locations.map(loc => (
            <g key={loc.id}>
              <circle cx={loc.x} cy={loc.y} r={current === loc.id ? 7 : 4}
                fill={current === loc.id ? 'rgba(16,185,129,0.8)' : 'rgba(255,255,255,0.3)'}
                className="transition-all duration-500" />
              {current === loc.id && <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="7;12;7" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
              </circle>}
              <text x={loc.x} y={loc.y + 3} textAnchor="middle" fontSize="7" fill="white">{loc.emoji}</text>
              <text x={loc.x} y={loc.y + 12} textAnchor="middle" fontSize="4.5" fill="rgba(255,255,255,0.7)">{loc.label}</text>
            </g>
          ))}
        </svg>
      </div>
      {/* Day-by-day timeline */}
      <div className="border-t border-white/10 px-1.5 py-1 space-y-0.5">
        <div className="text-white/40 text-[8px] font-bold uppercase tracking-wider mb-0.5">{L3D('Hajj Days', 'حج کے دن', 'أيام الحج')}</div>
        {HAJJ_DAY_TIMELINE.map((d, i) => {
          const isActiveDay = d.stepIds.includes(currentStepId);
          return (
            <div key={i} className={`flex items-center gap-1 px-1 py-0.5 rounded ${isActiveDay ? 'bg-white/10' : ''}`}>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color, boxShadow: isActiveDay ? `0 0 6px ${d.color}` : 'none' }} />
              <div className="flex-1 min-w-0">
                <span className={`text-[8px] font-bold ${isActiveDay ? 'text-white' : 'text-white/50'}`}>{d.day[_sceneLanguage] || d.day.en}</span>
                <span className={`text-[7px] ml-1 ${isActiveDay ? 'text-white/80' : 'text-white/30'}`}>{(d.steps[_sceneLanguage] || d.steps.en).join(' > ')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Slide-in round notification with per-circuit/lap dua from authentic sources
const RoundNotification = ({ show, type, roundNumber, language, onClose }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const [collapsed, setCollapsed] = useState(false);
  const userCollapsedRef = useRef(false);

  // Get the authentic Sunnah recitations (same every circuit/lap)
  const data = type === 'tawaf' ? TAWAF_DUA : SAI_DUA;
  const displayNum = Math.min((roundNumber || 0) + 1, 7);
  const isFirstLap = type === 'sai' && roundNumber === 0;

  // Only reset collapsed on fresh show
  const prevShowRef = useRef(false);
  useEffect(() => {
    if (show && !prevShowRef.current) {
      userCollapsedRef.current = false;
      setCollapsed(false);
    }
    prevShowRef.current = show;
  }, [show]);

  const handleCollapse = () => {
    setCollapsed(c => {
      const next = !c;
      userCollapsedRef.current = next;
      return next;
    });
  };

  const isFirstTawaf = type === 'tawaf' && roundNumber === 0;

  // Choose which recitations to show
  const recitation1 = type === 'tawaf' ? data.atBlackStone : (isFirstLap ? data.firstApproach : null);
  const recitation2 = type === 'tawaf' ? data.betweenCorners : data.atHills;

  return (
    <div className={`absolute top-14 left-2 right-2 z-50 transition-all duration-500
      ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
      <div className={`rounded-xl shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden ${
        type === 'tawaf' ? 'bg-gradient-to-r from-amber-600/95 to-amber-500/95' : 'bg-gradient-to-r from-blue-600/95 to-cyan-500/95'
      }`}>
        {/* Header row */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-black/20 gap-1">
          <div className="flex items-center gap-1.5 min-w-0 flex-1 flex-wrap">
            <span className="text-lg shrink-0">{type === 'tawaf' ? '🕋' : '🏃'}</span>
            <span className="text-white font-bold text-sm shrink-0">
              {type === 'tawaf'
                ? (language === 'ar' ? `الشوط ${displayNum}/٧` : language === 'ur' ? `چکر ${displayNum}/7` : `Circuit ${displayNum}/7`)
                : (language === 'ar' ? `الشوط ${displayNum}/٧` : language === 'ur' ? `چکر ${displayNum}/7` : `Lap ${displayNum}/7`)}
            </span>
            <span className="text-white/40 text-[9px] shrink-0">
              {language === 'ar' ? '(سنة)' : language === 'ur' ? '(سنت)' : '(Sunnah)'}
            </span>
            <span className="text-white/30 text-[8px] shrink-0">
              📏 ~{type === 'tawaf' ? TAWAF_STATS.perCircuit : SAI_STATS.perLap}m
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={handleCollapse}
              className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center hover:bg-white/30 active:scale-90 transition-all">
              {collapsed ? '▼' : '▲'}
            </button>
            <button onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center hover:bg-white/30 active:scale-90 transition-all">
              ✕
            </button>
          </div>
        </div>

        {/* Content - collapsible; capped height to prevent pushing below controls bar */}
        {!collapsed && (
          <div className="px-3 py-2 max-h-[35vh] overflow-y-auto space-y-2">
            {/* Sunnah starting instruction — shown once when pilgrim arrives for Tawaf */}
            {isFirstTawaf && (
              <div className="bg-emerald-900/40 border border-emerald-400/30 rounded-lg px-2.5 py-2">
                <p className="text-emerald-300 text-[10px] font-bold mb-1 text-center">
                  {language === 'ar' ? '📍 من أين يبدأ الطواف؟' : language === 'ur' ? '📍 طواف کہاں سے شروع کریں؟' : '📍 Where to Start Tawaf?'}
                </p>
                <p className="text-white/90 text-[11px] text-center leading-relaxed"
                  style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  {language === 'ar'
                    ? 'ابدأ من الحجر الأسود (الركن الجنوبي الشرقي للكعبة). قف مقابله واستقبله بيمينك. اضطبع بأن تكشف كتفك الأيمن. ثم طُف حول الكعبة عكس عقارب الساعة.'
                    : language === 'ur'
                    ? 'حجر اسود سے شروع کریں (کعبہ کا جنوب مشرقی کونا)۔ اس کے سامنے کھڑے ہوں اور دایاں کندھا اس کی طرف رکھیں۔ اضطباع کریں — دایاں کندھا کھلا رکھیں۔ پھر کعبہ کے گرد گھڑی کی مخالف سمت چلیں۔'
                    : 'Start at the Black Stone (Hajar al-Aswad) — the south-east corner of the Kaaba. Stand facing it with the Kaaba on your left. Bare your right shoulder (Idtiba). Walk counter-clockwise around the Kaaba.'}
                </p>
                <p className="text-emerald-400/50 text-[8px] text-center mt-1">📚 Sahih Muslim 1218 — Jabir's description of the Prophet's ﷺ Tawaf</p>
              </div>
            )}

            {/* Recitation 1 (Black Stone / First Approach verse) */}
            {recitation1 && (
              <div className="bg-white/10 rounded-lg px-2.5 py-1.5">
                <p className="text-white/50 text-[9px] mb-0.5">
                  {type === 'tawaf'
                    ? (language === 'ar' ? '❶ عند الحجر الأسود' : language === 'ur' ? '❶ حجر اسود پر' : '❶ At the Black Stone')
                    : (language === 'ar' ? '❶ عند بداية السعي' : language === 'ur' ? '❶ سعی شروع کرتے وقت' : '❶ Starting Sa\'i')}
                </p>
                <p className="text-white text-sm leading-relaxed text-center" dir="rtl"
                  style={{ fontFamily: "'Scheherazade New', serif" }}>
                  {recitation1.arabic}
                </p>
                <p className="text-white/50 text-[9px] text-center italic">{recitation1.transliteration}</p>
                <p className="text-white/80 text-[11px] text-center"
                  style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  {recitation1[language] || recitation1.en}
                </p>
                <p className="text-white/30 text-[8px] text-center">📚 {recitation1.source}</p>
              </div>
            )}

            {/* Recitation 2 (main dua — Rabbana atina / La ilaha illallah) */}
            <div className="bg-white/10 rounded-lg px-2.5 py-1.5">
              <p className="text-white/50 text-[9px] mb-0.5">
                {type === 'tawaf'
                  ? (language === 'ar' ? '❷ بين الركن اليماني والحجر الأسود' : language === 'ur' ? '❷ رکن یمانی اور حجر اسود کے درمیان' : '❷ Between Rukn Yamani & Black Stone')
                  : (language === 'ar' ? `🤲 على الصفا والمروة — ٣ مرات` : language === 'ur' ? `🤲 صفا اور مروہ پر — ۳ بار` : `🤲 At Safa & Marwah — 3 times`)}
              </p>
              <p className="text-white text-base leading-relaxed text-center" dir="rtl"
                style={{ fontFamily: "'Scheherazade New', serif" }}>
                {recitation2.arabic}
              </p>
              <p className="text-white/50 text-[9px] text-center italic">{recitation2.transliteration}</p>
              <p className="text-white/80 text-[11px] text-center leading-relaxed"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {recitation2[language] || recitation2.en}
              </p>
              <p className="text-white/30 text-[8px] text-center">📚 {recitation2.source}</p>
            </div>

            {/* Personal dua note */}
            <p className="text-white/40 text-[10px] text-center leading-snug px-2"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              💡 {data.note[language] || data.note.en}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Big step number banner - shown at the start of each step
const StepBanner = ({ show, stepNumber, totalSteps, stepName, stepDescription, stepColor, language, stepId }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const stepLabel = language === 'ar' ? 'الخطوة' : language === 'ur' ? 'مرحلہ' : 'Step';
  const isTawaf = stepId === 'tawaf' || stepId === 'tawaf_ifadah' || stepId === 'tawaf_wida';

  return (
    <div
      className={`absolute inset-0 z-[55] flex items-center justify-center pointer-events-none transition-all duration-700
        ${show ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}
    >
      <div className={`text-center transition-all duration-700 max-w-md mx-4 ${show ? 'scale-100 translate-y-0' : 'scale-75 -translate-y-10'}`}>
        {/* Step number - huge */}
        <div className="relative inline-block mb-2">
          {/* Glow ring */}
          <div
            className={`absolute inset-0 rounded-full blur-xl transition-all duration-1000 ${show ? 'opacity-60 scale-110' : 'opacity-0 scale-50'}`}
            style={{ background: stepColor || '#10B981' }}
          />
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-[3px] backdrop-blur-sm"
            style={{
              borderColor: `${stepColor}cc`,
              background: `linear-gradient(135deg, ${stepColor}40, ${stepColor}15)`,
            }}
          >
            <span className="text-white font-black text-5xl sm:text-6xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              {stepNumber}
            </span>
          </div>
        </div>

        {/* Step label */}
        <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-1">
          {stepLabel} {stepNumber} / {totalSteps}
        </p>

        {/* Step name */}
        <h2
          className="text-white text-2xl sm:text-3xl font-bold px-6"
          style={{
            fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
            textShadow: '0 2px 15px rgba(0,0,0,0.6)',
          }}
        >
          {stepName}
        </h2>

        {/* Decorative line */}
        <div className="flex justify-center mt-3">
          <div
            className={`h-0.5 rounded-full transition-all duration-1000 ${show ? 'w-24' : 'w-0'}`}
            style={{ background: `linear-gradient(to right, transparent, ${stepColor || '#10B981'}, transparent)` }}
          />
        </div>

        {/* Step description */}
        {stepDescription && (
          <p className="text-white/80 text-sm sm:text-base mt-3 px-4 leading-relaxed"
            style={{
              fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            }}>
            {stepDescription}
          </p>
        )}

        {/* Tawaf starting instruction — prominent, shown FIRST before walking begins */}
        {isTawaf && (
          <div className="mt-4 mx-4 bg-amber-900/60 border-2 border-amber-400/50 rounded-xl px-4 py-3 backdrop-blur-sm animate-pulse">
            <p className="text-amber-300 text-xs font-bold mb-1">
              {language === 'ar' ? '📍 ابدأ من الحجر الأسود' : language === 'ur' ? '📍 حجر اسود سے شروع کریں' : '📍 Start at the Black Stone (Hajar al-Aswad)'}
            </p>
            <p className="text-white/90 text-[11px] leading-relaxed"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {language === 'ar'
                ? 'قف عند الحجر الأسود ⬛ (الركن الجنوبي الشرقي للكعبة — يتوهج الآن). اجعل الكعبة عن يسارك، واكشف كتفك الأيمن (اضطباع)، ثم طف عكس عقارب الساعة.'
                : language === 'ur'
                ? 'حجر اسود ⬛ پر کھڑے ہوں (کعبہ کا جنوب مشرقی کونا — ابھی چمک رہا ہے)۔ کعبہ کو اپنے بائیں رکھیں، دایاں کندھا کھلا رکھیں (اضطباع)، اور گھڑی کی مخالف سمت چلیں۔'
                : 'Stand at the Black Stone ⬛ (south-east corner of the Kaaba — glowing now). Keep the Kaaba on your left, bare your right shoulder (Idtiba), and walk counter-clockwise.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Confetti effect for completion
const ConfettiEffect = ({ active }) => {
  const particles = useMemo(() =>
    Array.from({ length: 60 }).map(() => ({
      x: Math.random() * 100,
      delay: Math.random() * 2,
      dur: 2 + Math.random() * 3,
      color: ['#FFD700', '#10B981', '#3B82F6', '#EC4899', '#F59E0B', '#8B5CF6'][Math.floor(Math.random() * 6)],
      size: 4 + Math.random() * 6,
    })), []);

  if (!active) return null;
  return (
    <div className="absolute inset-0 z-[60] pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div key={i} className="absolute animate-bounce" style={{
          left: `${p.x}%`, top: '-10px', width: p.size, height: p.size,
          backgroundColor: p.color, borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          animation: `confettiFall ${p.dur}s ease-in ${p.delay}s forwards`,
        }} />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Completion celebration modal
const CompletionCelebration = ({ show, journeyType, language, onClose }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const data = journeyType === 'hajj' ? HAJJ_COMPLETION : UMRAH_COMPLETION;
  if (!show) return null;

  return (
    <div className="absolute inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <ConfettiEffect active={true} />
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 mx-4 max-w-sm w-full border border-amber-500/30 shadow-2xl relative">
        <div className="text-center">
          <div className="text-6xl mb-4">🕋</div>
          <h2 className="text-2xl font-bold text-amber-400 mb-2" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            {data.title[language] || data.title.en}
          </h2>
          <p className="text-white/80 text-sm mb-4 leading-relaxed" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            {data.message[language] || data.message.en}
          </p>
          <div className="bg-black/30 rounded-xl p-4 mb-4">
            <p className="text-amber-300 text-lg mb-2 leading-relaxed" dir="rtl" style={{ fontFamily: "'Scheherazade New', serif" }}>
              {data.hadith.arabic}
            </p>
            <p className="text-white/60 text-xs italic mb-1">{data.hadith.transliteration}</p>
            <p className="text-white/80 text-sm" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {data.hadith.translation[language] || data.hadith.translation.en}
            </p>
            <p className="text-amber-400/60 text-xs mt-2">📚 {data.hadith.source}</p>
          </div>
          <button onClick={onClose} className="px-8 py-3 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 transition-all">
            {language === 'ar' ? 'تم ✓' : language === 'ur' ? 'مکمل ✓' : 'Done ✓'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Step Detail Side Panel - small right-side popup with scroller
const StepDetailSheet = ({ step, language, isExpanded, onToggle }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const rich = step?.richData;
  if (!step) return null;

  const langKey = language === 'ar' ? 'Ar' : language === 'ur' ? 'Ur' : '';
  const getName = (obj) => obj?.[`name${langKey}`] || obj?.name || '';
  const getLoc = () => rich?.[`location${langKey}`] || rich?.location || '';

  return (
    <>
      {/* Backdrop - tap to close (z-[38] behind panel z-40) */}
      <div className="absolute inset-0 z-[38]" onClick={onToggle} />
      {/* Side panel - slides in from right */}
      <div className={`absolute top-14 z-40 w-72 max-h-[70vh] rounded-xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden transition-transform duration-300 ${
        isRTL ? 'left-2' : 'right-2'
      }`}
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{ backgroundColor: `${step.color}e8`, wordBreak: 'break-word' }}
        onClick={e => e.stopPropagation()}>
        {/* Header + close */}
        <div className="flex items-center justify-between px-3 py-2 bg-black/20 border-b border-white/10">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="text-lg shrink-0">{rich?.emoji || '📖'}</span>
            <div className="min-w-0 flex-1">
              <h2 className="text-xs font-bold text-white leading-snug" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {step.name[language]}
              </h2>
              {getLoc() && <p className="text-white/50 text-[9px] leading-snug" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>📍 {getLoc()}</p>}
            </div>
          </div>
          <button onClick={onToggle} className="text-white/70 text-[10px] w-6 h-6 flex items-center justify-center bg-white/10 rounded-full shrink-0">✕</button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto overscroll-contain" style={{ maxHeight: 'calc(75vh - 44px)' }}>
          <div className="px-3 py-2 space-y-2">
            {/* Primary Dua */}
            <div className="bg-black/20 rounded-lg p-2">
              <p className="text-white text-[13px] text-center leading-relaxed" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                {step.dua.arabic}
              </p>
              <p className="text-white/80 text-[10px] text-center mt-1" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {step.dua[language] || step.dua.en}
              </p>
            </div>

            {/* Description */}
            {rich?.description?.[language] && (
              <p className="text-white/90 text-[10px] leading-relaxed" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {rich.description[language]}
              </p>
            )}

            {/* Miqat points for Ihram step */}
            {step.id === 'ihram' && (
              <div>
                <h3 className="text-amber-300 text-[10px] font-semibold mb-1">
                  {language === 'ar' ? 'المواقيت الخمسة ➝ 🕋' : language === 'ur' ? 'پانچ میقات ➝ 🕋' : '5 Miqat Points ➝ 🕋'}
                </h3>
                {MIQAT_POINTS.map((mq, i) => (
                  <div key={i} className="flex items-center gap-2 bg-black/15 rounded-lg px-2 py-1.5 mb-1">
                    <span className="text-amber-400 text-[10px] font-bold w-4">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[10px] font-semibold" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                        {mq.name[language] || mq.name.en}
                      </p>
                      <p className="text-white/50 text-[9px]">{mq.direction[language] || mq.direction.en} • {mq.distance}</p>
                    </div>
                    <span className="text-[10px]">➝ 🕋</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions checklist */}
            {rich?.actions?.[language] && (
              <div>
                <h3 className="text-white/60 text-[10px] font-semibold mb-1">
                  {language === 'ar' ? 'الخطوات:' : language === 'ur' ? 'مراحل:' : 'Steps:'}
                </h3>
                {rich.actions[language].map((action, i) => (
                  <div key={i} className="flex items-start gap-1.5 mb-0.5">
                    <span className="text-emerald-400 text-[9px] mt-0.5">●</span>
                    <p className="text-white/80 text-[10px] leading-snug" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                      {action}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* All Duas */}
            {rich?.duas?.length > 0 && (
              <div>
                <h3 className="text-white/60 text-[10px] font-semibold mb-1">
                  {language === 'ar' ? 'الأدعية:' : language === 'ur' ? 'دعائیں:' : 'Duas:'}
                </h3>
                {rich.duas.map((dua, i) => (
                  <div key={i} className="bg-black/20 rounded-lg p-2 mb-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-white/60 text-[9px]">{getName(dua)}</span>
                      {dua.isMain && <span className="text-[8px] bg-amber-400/30 text-amber-200 px-1 py-0.5 rounded-full">★</span>}
                    </div>
                    <p className="text-white text-[12px] text-center leading-relaxed" dir="rtl" style={{ fontFamily: "'Scheherazade New', serif" }}>
                      {dua.arabic}
                    </p>
                    {dua.transliteration && <p className="text-white/40 text-[9px] text-center italic mt-0.5">{dua.transliteration}</p>}
                    <p className="text-white/70 text-[10px] text-center mt-0.5" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                      {dua.translation?.[language] || dua.translation?.en}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Rules */}
            {rich?.rules?.[language] && (
              <div>
                <h3 className="text-white/60 text-[10px] font-semibold mb-1">
                  {language === 'ar' ? 'الأحكام:' : language === 'ur' ? 'احکام:' : 'Rules:'}
                </h3>
                {rich.rules[language].map((rule, i) => (
                  <div key={i} className="flex items-start gap-1.5 mb-0.5">
                    <span className="text-amber-400 text-[9px] mt-0.5">◆</span>
                    <p className="text-white/80 text-[10px]" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>{rule}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Kids tip */}
            {rich?.kidsTip?.[language] && (
              <div className="bg-emerald-500/20 rounded-lg p-2">
                <p className="text-emerald-200 text-[10px]" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  💡 {rich.kidsTip[language]}
                </p>
              </div>
            )}

            {/* Prophet's Miqat */}
            {step.prophetMiqat && (
              <div className="bg-amber-500/20 rounded-lg p-2 border border-amber-400/20">
                <p className="text-amber-200 text-[10px] leading-relaxed" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  {step.prophetMiqat[language] || step.prophetMiqat.en}
                </p>
              </div>
            )}

            {/* Miqat Info */}
            {step.miqatInfo && (
              <div className="pt-1.5 border-t border-white/15">
                <p className="text-yellow-200 text-[10px] whitespace-pre-line leading-relaxed" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  📍 {step.miqatInfo[language] || step.miqatInfo.en}
                </p>
              </div>
            )}

            {/* References */}
            {rich?.references?.length > 0 && (
              <div className="border-t border-white/10 pt-1">
                {rich.references.map((ref, i) => (
                  <p key={i} className="text-white/35 text-[9px]">📚 {ref.source} {ref.number}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Step Quiz component - compact popup
const StepQuiz = ({ stepId, language, onAnswer, onSkip }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const quiz = QUIZ_QUESTIONS[stepId];
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const quizTimerRef = useRef(null);

  useEffect(() => () => { if (quizTimerRef.current) clearTimeout(quizTimerRef.current); }, []);

  if (!quiz) return null;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === quiz.correct;
    if (isCorrect) haptics.stepComplete();
    else haptics.tap();
    quizTimerRef.current = setTimeout(() => onAnswer(isCorrect), 1200);
  };

  const getOptionText = (opt) => {
    if (typeof opt === 'string') return opt;
    return opt[language] || opt.en;
  };

  return (
    <div className="absolute inset-0 z-[65] flex items-center justify-center bg-black/40" onClick={onSkip}>
      <div className="bg-slate-800/95 backdrop-blur-md rounded-xl p-4 mx-6 max-w-xs w-full border border-white/15 shadow-2xl"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        onClick={e => e.stopPropagation()}>
        <div className="text-center mb-3">
          <span className="text-2xl">🧠</span>
          <h3 className="text-white font-bold text-sm mt-1 leading-snug" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            {quiz.q[language] || quiz.q.en}
          </h3>
        </div>
        <div className="space-y-1.5 mb-3">
          {quiz.options.map((opt, i) => {
            const correct = i === quiz.correct;
            const isSelected = i === selected;
            return (
              <button key={i} onClick={() => handleSelect(i)}
                className={`w-full px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  answered && correct ? 'bg-emerald-500/80 text-white ring-1 ring-emerald-400' :
                  answered && isSelected && !correct ? 'bg-red-500/80 text-white ring-1 ring-red-400' :
                  'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit', textAlign: isRTL ? 'right' : 'left' }}
              >
                {getOptionText(opt)}
                {answered && correct && ' ✓'}
                {answered && isSelected && !correct && ' ✗'}
              </button>
            );
          })}
        </div>
        <button onClick={onSkip} className="w-full text-white/40 text-[10px] py-1 hover:text-white/60"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
          {language === 'ar' ? 'تخطي' : language === 'ur' ? 'چھوڑیں' : 'Skip'}
        </button>
      </div>
    </div>
  );
};

// Controls overlay — fully localized
const ControlsOverlay = ({ show, onClose, language }) => {
  if (!show) return null;
  const isRTL = language === 'ar' || language === 'ur';
  const L = (en, ur, ar) => language === 'ar' ? ar : language === 'ur' ? ur : en;
  const font = isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit';
  return (
    <div className="absolute inset-0 z-[65] flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="bg-slate-800 rounded-2xl p-6 max-w-xs mx-4 border border-white/20" dir={isRTL ? 'rtl' : 'ltr'} onClick={e => e.stopPropagation()}>
        <h3 className="text-white text-lg font-bold mb-4 text-center" style={{ fontFamily: font }}>
          {L('Controls', 'کنٹرولز', 'التحكم')}
        </h3>
        <div className="space-y-3 text-white/80 text-sm" style={{ fontFamily: font }}>
          <div className="flex items-center gap-3"><span className="w-8 text-center">🖱️</span> <span>{L('Drag — Rotate camera', 'گھسیٹیں — کیمرا گھمائیں', 'اسحب — دوّر الكاميرا')}</span></div>
          <div className="flex items-center gap-3"><span className="w-8 text-center">🔍</span> <span>{L('Scroll — Zoom', 'سکرول — زوم', 'مرر — تكبير')}</span></div>
          <div className="flex items-center gap-3"><span className="w-8 text-center">→</span> <span>{L('Next step', 'اگلا قدم', 'الخطوة التالية')}</span></div>
          <div className="flex items-center gap-3"><span className="w-8 text-center">←</span> <span>{L('Previous step', 'پچھلا قدم', 'الخطوة السابقة')}</span></div>
          <div className="flex items-center gap-3"><span className="w-8 text-center">⎵</span> <span>{L('Auto-play toggle', 'خودکار چلائیں', 'تبديل التشغيل التلقائي')}</span></div>
          <div className="flex items-center gap-3"><span className="w-8 text-center">M</span> <span>{L('Mute / unmute', 'آواز بند / چالو', 'كتم / إلغاء الكتم')}</span></div>
          <div className="flex items-center gap-3"><span className="w-8 text-center">?</span> <span>{L('This help', 'یہ مدد', 'هذه المساعدة')}</span></div>
        </div>
        <button onClick={onClose} className="mt-4 w-full py-2 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20" style={{ fontFamily: font }}>{L('Close', 'بند کریں', 'إغلاق')}</button>
      </div>
    </div>
  );
};

// Location Detail Popup - shown when clicking a 3D label
// Positioned at top of screen with high z-index above all 3D labels
const LocationDetailPopup = ({ locationId, language, onClose }) => {
  const loc = LOCATION_DETAILS[locationId];
  if (!loc) return null;
  const isRTL = language === 'ar' || language === 'ur';
  return (
    <div className="absolute inset-0 z-[57] flex items-start justify-center pt-12 bg-black/50" onClick={onClose}>
      <div className="bg-slate-900 rounded-2xl mx-3 max-w-md w-full border border-white/15 shadow-2xl overflow-hidden"
        dir={isRTL ? 'rtl' : 'ltr'}
        onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-700/40 to-slate-800/80 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-3xl">{loc.emoji}</span>
            <h3 className="text-white font-bold text-base leading-snug" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {loc.name[language] || loc.name.en}
            </h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-sm flex items-center justify-center shrink-0">✕</button>
        </div>
        {/* Content */}
        <div className="px-4 py-3 max-h-[45vh] overflow-y-auto overscroll-contain">
          <p className="text-white/90 text-sm leading-relaxed"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit', wordBreak: 'break-word', lineHeight: isRTL ? '2' : '1.7' }}>
            {loc.description[language] || loc.description.en}
          </p>
          {loc.source && (
            <div className="mt-3 pt-2 border-t border-white/10">
              <p className="text-amber-400/70 text-xs">📚 {loc.source}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// ONBOARDING INTRO - shown once per journey type
// ============================================================
const INTRO_STORAGE_KEY = 'pilgrimage_intro_seen_';

const OnboardingIntro = ({ journeyType, language, onDismiss }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const isHajj = journeyType === 'hajj';

  const content = {
    title: {
      en: isHajj ? 'Your Hajj Guide' : 'Your Umrah Guide',
      ur: isHajj ? 'آپ کا حج گائیڈ' : 'آپ کا عمرہ گائیڈ',
      ar: isHajj ? 'دليل الحج' : 'دليل العمرة'
    },
    subtitle: {
      en: isHajj ? 'Learn all 12 steps of Hajj with 3D animation' : 'Learn all 5 steps of Umrah with 3D animation',
      ur: isHajj ? '3D اینیمیشن کے ساتھ حج کے 12 مراحل سیکھیں' : '3D اینیمیشن کے ساتھ عمرہ کے 5 مراحل سیکھیں',
      ar: isHajj ? 'تعلم خطوات الحج الـ12 بالرسوم ثلاثية الأبعاد' : 'تعلم خطوات العمرة الـ5 بالرسوم ثلاثية الأبعاد'
    },
    features: [
      {
        icon: '▶',
        label: { en: 'Auto-Play', ur: 'خودکار چلائیں', ar: 'تشغيل تلقائي' },
        desc: { en: 'Press Auto to watch the full journey automatically with duas at each step', ur: 'خودکار بٹن دبائیں - ہر قدم پر دعاؤں کے ساتھ پورا سفر دیکھیں', ar: 'اضغط تلقائي لمشاهدة الرحلة كاملة مع الأدعية' }
      },
      {
        icon: '→',
        label: { en: 'Step by Step', ur: 'قدم بہ قدم', ar: 'خطوة بخطوة' },
        desc: { en: 'Use arrow buttons to move through each step manually', ur: 'تیر کے بٹن سے ہر قدم پر خود جائیں', ar: 'استخدم الأسهم للتنقل بين الخطوات يدوياً' }
      },
      {
        icon: '🤲',
        label: { en: 'Authentic Duas', ur: 'مستند دعائیں', ar: 'أدعية صحيحة' },
        desc: { en: 'Hear and read the exact dua for each step, circuit, and lap', ur: 'ہر قدم، چکر اور پھیرے کی صحیح دعا سنیں اور پڑھیں', ar: 'اسمع واقرأ الدعاء الصحيح لكل خطوة وشوط' }
      },
      {
        icon: '🏷️',
        label: { en: 'Tap Landmarks', ur: 'مقامات دبائیں', ar: 'اضغط المعالم' },
        desc: { en: 'Tap 3D labels to learn about Kaaba, Black Stone, Zamzam & more', ur: 'کعبہ، حجر اسود، زمزم وغیرہ کے بارے میں جانیں', ar: 'اضغط على التسميات لتعرف عن الكعبة والحجر الأسود وزمزم' }
      },
    ],
    autoBtn: {
      label: { en: 'Auto Play', ur: 'خودکار', ar: 'تشغيل تلقائي' },
      desc: { en: 'Watch the full journey', ur: 'پورا سفر خودکار دیکھیں', ar: 'شاهد الرحلة كاملة' }
    },
    manualBtn: {
      label: { en: 'Manual Play', ur: 'دستی', ar: 'يدوي' },
      desc: { en: 'Control at your pace', ur: 'اپنی رفتار سے چلائیں', ar: 'تحكم بالسرعة' }
    }
  };

  return (
    <div className="absolute inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="mx-4 max-w-md w-full" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Card */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border border-amber-500/30 shadow-2xl overflow-hidden">
          {/* Header with icon */}
          <div className="relative bg-gradient-to-br from-amber-600/40 to-emerald-700/30 px-6 pt-6 pb-4 text-center">
            <div className="text-5xl mb-2">🕋</div>
            <h2 className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {content.title[language]}
            </h2>
            <p className="text-white/70 text-sm"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {content.subtitle[language]}
            </p>
          </div>

          {/* Features list */}
          <div className="px-5 py-4 space-y-3">
            {content.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-lg shrink-0">
                  {f.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm"
                    style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                    {f.label[language]}
                  </p>
                  <p className="text-white/50 text-xs leading-snug"
                    style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                    {f.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls hint */}
          <div className="mx-5 mb-4 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-center gap-4 text-white/40 text-[10px]">
              <span>🖱️ {language === 'ar' ? 'دوّر' : language === 'ur' ? 'گھمائیں' : 'Rotate'}</span>
              <span>🔍 {language === 'ar' ? 'كبّر' : language === 'ur' ? 'زوم' : 'Zoom'}</span>
              <span>⌨️ {language === 'ar' ? 'الأسهم' : language === 'ur' ? 'تیر' : 'Arrow Keys'}</span>
            </div>
          </div>

          {/* Mode selection buttons */}
          <div className="px-5 pb-5 flex gap-3">
            <button onClick={() => onDismiss('auto')}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.98] flex flex-col items-center gap-1"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              <span className="flex items-center gap-1.5 text-base">⏩ {content.autoBtn.label[language]}</span>
              <span className="text-[10px] text-white/60 font-normal">{content.autoBtn.desc[language]}</span>
            </button>
            <button onClick={() => onDismiss('manual')}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25 active:scale-[0.98] flex flex-col items-center gap-1"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              <span className="flex items-center gap-1.5 text-base">▶ {content.manualBtn.label[language]}</span>
              <span className="text-[10px] text-white/60 font-normal">{content.manualBtn.desc[language]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const STORAGE_PREFIX = 'pilgrimage_progress_';

const PilgrimageJourneyUnified = ({ journeyType = 'umrah', language = 'en', onComplete, onBack }) => {
  // Enrich steps with full data
  const steps = useMemo(() => {
    const rawSteps = journeyType === 'umrah' ? UMRAH_STEPS : HAJJ_STEPS;
    const fullData = journeyType === 'umrah' ? UMRAH_FULL_DATA : HAJJ_FULL_DATA;
    const idMap = journeyType === 'umrah' ? UMRAH_ID_MAP : HAJJ_ID_MAP;
    return enrichSteps(rawSteps, fullData, idMap);
  }, [journeyType]);

  // Progress persistence
  const storageKey = STORAGE_PREFIX + journeyType;
  const getSavedStep = () => {
    try {
      const val = parseInt(localStorage.getItem(storageKey), 10);
      if (isNaN(val) || val < 0) return 0;
      return Math.min(val, steps.length - 1);
    } catch { return 0; }
  };
  const saveStep = (s) => { try { localStorage.setItem(storageKey, s.toString()); } catch {} };

  // Core state
  const [currentStep, setCurrentStep] = useState(getSavedStep);
  const [isWalking, setIsWalking] = useState(false);
  const [viewMode, setViewMode] = useState('step');
  const viewModeBeforeFollowRef = useRef('step'); // remembers user's chosen mode before auto-follow
  const isAutoFollowActiveRef = useRef(false); // true only when WE auto-switched to follow
  const [autoPlay, setAutoPlay] = useState(false);
  const [showDua, setShowDua] = useState(false);

  // Tawaf/Sa'i tracking
  const [tawafCircuitDisplay, setTawafCircuitDisplay] = useState(0);
  const [showTawafNotification, setShowTawafNotification] = useState(false);
  const [saiLapDisplay, setSaiLapDisplay] = useState(0);
  const [showSaiNotification, setShowSaiNotification] = useState(false);
  const tawafDoneRef = useRef(false); // prevents Tawaf restart on same step
  const saiDoneRef = useRef(false);   // prevents Sa'i restart on same step

  // Jamarat tracking
  const [jamaratStoneDisplay, setJamaratStoneDisplay] = useState(0);
  const [showJamaratNotification, setShowJamaratNotification] = useState(false);
  const jamaratDoneRef = useRef(false);
  const arafatDoneRef = useRef(false);
  const muzDoneRef = useRef(false);
  const sacrificeDoneRef = useRef(false);
  const halqDoneRef = useRef(false);

  // New UI state
  const [isMuted, setIsMuted] = useState(() => {
    try { return localStorage.getItem('hajj_umrah_muted') === 'true'; } catch { return false; }
  });
  const tawafInitialDuaPlayedRef = useRef(false); // prevent initial dua replay on pause/resume
  const saiInitialDuaPlayedRef = useRef(false);
  const bannerShownForStepRef = useRef(-1); // track which step already showed the banner
  const bannerTimerRef = useRef(null); // dedicated timer — not in uiTimersRef so handlers don't kill it
  const [showLabels, setShowLabels] = useState(false);
  const [audioState, setAudioState] = useState({ playing: false, text: '' });
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showStepBanner, setShowStepBanner] = useState(true); // big step number overlay
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [pilgrimArrived, setPilgrimArrived] = useState(false); // true when pilgrim reaches step destination
  const pilgrimArrivedForStepRef = useRef(false); // sync ref: true ONLY when pilgrim walked to CURRENT step
  const [showIntro, setShowIntro] = useState(() => {
    try { return !localStorage.getItem(INTRO_STORAGE_KEY + journeyType); } catch { return true; }
  });
  const autoPlayTimersRef = useRef([]); // track all auto-play timers for clean cleanup
  const autoPlayRef = useRef(autoPlay); // live ref so delayed callbacks read current value
  autoPlayRef.current = autoPlay;
  const uiTimersRef = useRef([]); // track UI timers (notifications, dua display) for cleanup

  const isRTL = language === 'ar' || language === 'ur';
  const currentStepData = steps[currentStep];
  const currentStepDataRef = useRef(currentStepData);
  currentStepDataRef.current = currentStepData;

  const isTawafStep = currentStepData &&
    (currentStepData.id === 'tawaf' || currentStepData.id === 'tawaf_ifadah' || currentStepData.id === 'tawaf_wida');
  const isSaiStep = currentStepData && currentStepData.id === 'sai';
  const isJamarat1Step = currentStepData && currentStepData.id === 'jamarat1';
  const isMinaDaysStep = currentStepData && currentStepData.id === 'mina_days';
  const isJamaratStep = isJamarat1Step || isMinaDaysStep;
  const isArafatStep = currentStepData && currentStepData.id === 'arafat';
  const isMuzdalifahStep = currentStepData && currentStepData.id === 'muzdalifah';
  const isSacrificeStep = currentStepData && currentStepData.id === 'sacrifice';
  const isHalqStep = currentStepData && currentStepData.id === 'halq';

  // Get Hajj day info
  const currentDay = useMemo(() => {
    if (journeyType !== 'hajj' || !currentStepData?.day) return null;
    const dayNum = currentStepData.day;
    const dayMap = { 8: 1, 9: 2, 10: 3, 11: 4, 12: 5, 13: 5 };
    return HAJJ_DAYS.find(d => d.day === (dayMap[dayNum] || 1));
  }, [journeyType, currentStepData]);

  // Sync mute state to audio module + persist
  useEffect(() => {
    setMuted(isMuted);
    _isMuted = isMuted; // also sync module-level immediately on mount
    try { localStorage.setItem('hajj_umrah_muted', isMuted.toString()); } catch {}
  }, [isMuted]);

  // Register location click handler
  useEffect(() => {
    registerLocationClick((id) => setSelectedLocation(id));
    return () => registerLocationClick(null);
  }, []);

  // Register audio state change callback for UI indicator
  useEffect(() => {
    registerAudioStateChange((state) => setAudioState(state));
    return () => registerAudioStateChange(null);
  }, []);

  // Register timer callback so module-level audio can track timers for cleanup
  useEffect(() => {
    registerAddUiTimer((t) => uiTimersRef.current.push(t));
    return () => registerAddUiTimer(null);
  }, []);

  // Save progress
  useEffect(() => { saveStep(currentStep); }, [currentStep]);

  // Handle Tawaf circuit completion - sound + notification + authentic dua recitation
  // Notification only shows on first circuit; subsequent circuits update the dot counter silently
  const handleTawafCircuit = useCallback((circuitNumber) => {
    setTawafCircuitDisplay(circuitNumber);
    guardedPlay(playTawafCircuitSound, circuitNumber);
    haptics.roundComplete();
    setSelectedLocation(null);
    setIsDetailExpanded(false); // Close detail sheet to prevent overlap
    if (circuitNumber === 1) setShowTawafNotification(true);
    // Delay dua by 700ms so circuit sound (0.6s) finishes first — no overlap
    if (circuitNumber < 7) {
      const t = setTimeout(() => guardedPlay(playDuaAudio, TAWAF_DUA.betweenCorners.arabic), 700);
      uiTimersRef.current.push(t);
    }
  }, []);

  // Handle Sa'i lap completion - sound + notification + authentic dhikr recitation
  // Notification only shows on first lap; subsequent laps update the dot counter silently
  const handleSaiLap = useCallback((lapNumber) => {
    setSaiLapDisplay(lapNumber);
    guardedPlay(playSaiLapSound, lapNumber);
    haptics.roundComplete();
    setSelectedLocation(null);
    setIsDetailExpanded(false); // Close detail sheet to prevent overlap
    if (lapNumber === 1) setShowSaiNotification(true);
    // Delay dhikr by 500ms so lap sound (0.4s) finishes first — no overlap
    if (lapNumber < 7) {
      const t = setTimeout(() => guardedPlay(playDuaAudio, SAI_DUA.atHills.arabic), 500);
      uiTimersRef.current.push(t);
    }
  }, []);

  // Handle Jamarat stone throw — play takbir with each stone
  const handleStoneThrow = useCallback((pillarIndex, stoneNumber) => {
    const totalStones = pillarIndex * 7 + stoneNumber;
    setJamaratStoneDisplay(totalStones);
    haptics.tap();
    if (stoneNumber === 1 && pillarIndex === 0) {
      setShowJamaratNotification(true);
      setIsDetailExpanded(false);
    }
    // Play "Allahu Akbar" takbir with each throw
    const t = setTimeout(() => guardedPlay(playDuaAudio, 'بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ'), 300);
    uiTimersRef.current.push(t);
  }, []);

  // Handle Muzdalifah pebble collection
  const handlePebbleCollected = useCallback((count) => {
    // Play sound every 7th pebble
    if (count % 7 === 0) haptics.tap();
  }, []);

  // Cleanup on unmount - prevent memory leaks
  useEffect(() => {
    return () => {
      stopAudio();
      stopAmbientSound();
      autoPlayTimersRef.current.forEach(t => clearTimeout(t));
      uiTimersRef.current.forEach(t => clearTimeout(t));
      if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
      autoPlayTimersRef.current = [];
      uiTimersRef.current = [];
    };
  }, []);

  // Start ambient sound on first interaction (use module-level _isMuted to avoid stale closure)
  useEffect(() => {
    const startAmbient = () => {
      if (!_isMuted) playAmbientSound();
      window.removeEventListener('click', startAmbient);
    };
    window.addEventListener('click', startAmbient);
    return () => window.removeEventListener('click', startAmbient);
  }, []);

  // Reset displays when step changes - close all popups, clear timers to prevent overlapping
  useEffect(() => {
    setTawafCircuitDisplay(0);
    setSaiLapDisplay(0);
    setIsDetailExpanded(false);
    setShowTawafNotification(false);
    setShowSaiNotification(false);
    setSelectedLocation(null);
    setShowDua(false);
    stopAudio();
    // Clear all pending UI timers
    uiTimersRef.current.forEach(t => clearTimeout(t));
    uiTimersRef.current = [];
    tawafDoneRef.current = false;
    saiDoneRef.current = false;
    jamaratDoneRef.current = false;
    arafatDoneRef.current = false;
    muzDoneRef.current = false;
    sacrificeDoneRef.current = false;
    halqDoneRef.current = false;
    tawafInitialDuaPlayedRef.current = false;
    saiInitialDuaPlayedRef.current = false;
    setJamaratStoneDisplay(0);
    setShowJamaratNotification(false);
    // NOTE: manualNextPendingRef is NOT reset here — it's set in event handlers
    // and consumed by the manual arrival handler. Resetting here would kill it
    // before the pilgrim arrives. It's reset in toggleAutoPlay, handleStop, etc.
    manuallyPausedRef.current = false;
    pilgrimArrivedForStepRef.current = false; // sync: prevent stale arrival from previous step
    setPilgrimArrived(false);
    // Show banner immediately for all step changes.
    // For walking steps (auto-play/manual play), it will be hidden when walking starts (startWalking),
    // then re-shown on arrival via handleReachDestination.
    // For non-walking nav (→/←/dots), banner shows here and auto-hides.
    if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    bannerShownForStepRef.current = currentStep;
    setShowStepBanner(true);
    const isIhramStep = steps[currentStep]?.id === 'ihram';
    bannerTimerRef.current = setTimeout(() => setShowStepBanner(false), isIhramStep ? 6000 : 3000);
  }, [currentStep]);

  // Handle pilgrim arrival at destination (called from WalkingPilgrim via 3D scene)
  // Show the step banner NOW (after walk completes) instead of on step change
  const handleReachDestination = useCallback((type) => {
    pilgrimArrivedForStepRef.current = true;
    setPilgrimArrived(true);
    // Show step banner after arrival (not for Ihram — that shows immediately)
    const stepData = steps[currentStep];
    if (stepData && stepData.id !== 'ihram') {
      bannerShownForStepRef.current = currentStep;
      setShowStepBanner(true);
      if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
      bannerTimerRef.current = setTimeout(() => setShowStepBanner(false), 3000);
    }
  }, [currentStep, steps]);

  // Auto-follow camera: switch to 'follow' while pilgrim walks to destination,
  // then restore previous view mode once arrived.
  // Uses isAutoFollowActiveRef so we only restore if WE auto-switched (not if user manually chose 'follow')
  useEffect(() => {
    if (isWalking && !pilgrimArrived) {
      if (viewMode !== 'follow') {
        viewModeBeforeFollowRef.current = viewMode;
        isAutoFollowActiveRef.current = true;
        setViewMode('follow');
      }
    }
  }, [isWalking, pilgrimArrived]);

  useEffect(() => {
    if (pilgrimArrived && isAutoFollowActiveRef.current) {
      setViewMode(viewModeBeforeFollowRef.current);
      isAutoFollowActiveRef.current = false;
    }
  }, [pilgrimArrived]);

  // Show first Tawaf/Sa'i recitation ONLY after pilgrim reaches the starting position
  // Guard refs prevent replay on pause/resume (effect re-fires when isWalking toggles)
  useEffect(() => {
    if (!pilgrimArrived || !isWalking) return;
    if (isTawafStep && !tawafDoneRef.current && tawafCircuitDisplay === 0 && !tawafInitialDuaPlayedRef.current) {
      tawafInitialDuaPlayedRef.current = true;
      setIsDetailExpanded(false);
      setShowTawafNotification(true);
      // Play "Bismillahi wallahu Akbar" at the Black Stone (start of first circuit)
      guardedPlay(playDuaAudio, TAWAF_DUA.atBlackStone.arabic);
      // After Black Stone audio finishes (~2s), play "Rabbana atina" for the first circuit
      const blackStoneDur = getDuaDurationMs(TAWAF_DUA.atBlackStone.arabic) + 500;
      const firstDuaTimer = setTimeout(() => {
        guardedPlay(playDuaAudio, TAWAF_DUA.betweenCorners.arabic);
      }, blackStoneDur);
      uiTimersRef.current.push(firstDuaTimer);
    }
    if (isSaiStep && !saiDoneRef.current && saiLapDisplay === 0 && !saiInitialDuaPlayedRef.current) {
      saiInitialDuaPlayedRef.current = true;
      setIsDetailExpanded(false);
      setShowSaiNotification(true);
      // Play the Safa verse (Quran 2:158) - only recited once at the start of Sa'i
      guardedPlay(playDuaAudio, SAI_DUA.firstApproach.arabic);
      // After Safa verse finishes, play the dhikr for the first lap
      const safaVerseDur = getDuaDurationMs(SAI_DUA.firstApproach.arabic) + 500;
      const firstDhikrTimer = setTimeout(() => {
        guardedPlay(playDuaAudio, SAI_DUA.atHills.arabic);
      }, safaVerseDur);
      uiTimersRef.current.push(firstDhikrTimer);
    }
  }, [pilgrimArrived, isWalking, isTawafStep, isSaiStep]);

  // Helper: advance to next step or show completion
  const advanceStep = useCallback(() => {
    setCurrentStep(prev => {
      if (prev < steps.length - 1) {
        return prev + 1;
      } else {
        // Last step completed
        setAutoPlay(false);
        guardedPlay(playCompletionSound);
        haptics.celebration();
        setShowCompletion(true);
        return prev;
      }
    });
  }, [steps.length]);

  // Auto-play: show step banner for 2.5s, then start walking
  // This delay lets the user READ the step name + description before animation begins
  // Tawaf/Sa'i: walking starts after delay, completion handled by circuit/lap effects
  // Normal steps: walking starts after delay, advancement handled by arrival effect below
  useEffect(() => {
    // Clear any previous auto-play timers first
    autoPlayTimersRef.current.forEach(t => clearTimeout(t));
    autoPlayTimersRef.current = [];

    if (!autoPlay) return;
    if (currentStep >= steps.length) return;
    // NOTE: Don't clear uiTimersRef here — it would kill the banner hide timer.
    // Manual→auto-play cleanup is handled in toggleAutoPlay() instead.

    // If resuming mid-animation (pause→unpause, pilgrim already at destination), skip delay
    const isResuming = (isTawafStep && pilgrimArrived && tawafCircuitDisplay > 0) ||
                       (isSaiStep && pilgrimArrived && saiLapDisplay > 0) ||
                       (isJamaratStep && pilgrimArrived && jamaratStoneDisplay > 0) ||
                       ((isArafatStep || isMuzdalifahStep || isSacrificeStep || isHalqStep) && pilgrimArrived);

    const startWalking = () => {
      setShowStepBanner(false); // Hide banner when walking begins
      if (isTawafStep || isSaiStep) {
        if (isTawafStep && tawafDoneRef.current) return;
        if (isSaiStep && saiDoneRef.current) return;
        setIsWalking(true);
        guardedPlay(playStepSound);
        haptics.tap();
        // Resume audio if unpausing mid-circuit/lap — delay 900ms so step sound (0.8s) finishes
        if (isTawafStep && pilgrimArrived && tawafCircuitDisplay > 0 && tawafCircuitDisplay < 7) {
          const t = setTimeout(() => guardedPlay(playDuaAudio, TAWAF_DUA.betweenCorners.arabic), 900);
          autoPlayTimersRef.current.push(t);
        }
        if (isSaiStep && pilgrimArrived && saiLapDisplay > 0 && saiLapDisplay < 7) {
          const t = setTimeout(() => guardedPlay(playDuaAudio, SAI_DUA.atHills.arabic), 900);
          autoPlayTimersRef.current.push(t);
        }
        return;
      }

      // Normal step: start walking
      setIsWalking(true);
      guardedPlay(playStepSound);
      haptics.tap();
      // Play Talbiyah during walk TO Tawaf step (pilgrim traveling from Miqat/Mina to Kaaba)
      // In real Hajj/Umrah, Talbiyah is recited continuously until reaching the Kaaba
      const prevStep = currentStep > 0 ? steps[currentStep - 1] : null;
      if (prevStep && (prevStep.id === 'ihram' || prevStep.id === 'mina1') && prevStep.dua?.arabic) {
        const t = setTimeout(() => guardedPlay(playDuaAudio, prevStep.dua.arabic), 900);
        autoPlayTimersRef.current.push(t);
      }
    };

    // Special handling for Ihram step: stay at Miqat, play Talbiyah, then advance
    // This gives the user time to read the niyyah instructions and hear the Talbiyah
    // before the pilgrim starts walking toward the Kaaba
    const isIhramStep = currentStep < steps.length && steps[currentStep].id === 'ihram';

    if (isResuming) {
      // If animation already done (e.g. user toggled auto off during completion dua then back on),
      // just advance to next step — startWalking() would be redundant
      if ((isTawafStep && tawafDoneRef.current) || (isSaiStep && saiDoneRef.current)
        || (isJamaratStep && jamaratDoneRef.current) || (isArafatStep && arafatDoneRef.current)
        || (isMuzdalifahStep && muzDoneRef.current) || (isSacrificeStep && sacrificeDoneRef.current)
        || (isHalqStep && halqDoneRef.current)) {
        const advDelay = setTimeout(() => advanceStep(), 500);
        autoPlayTimersRef.current.push(advDelay);
      } else {
        // Resuming mid-circuit: start immediately (no banner needed)
        startWalking();
      }
    } else if (isIhramStep) {
      // Ihram: banner shows for 6s (handled by step-change effect), then play Talbiyah at Miqat
      const talbiyahStart = setTimeout(() => {
        setShowStepBanner(false); // Hide banner before showing Talbiyah dua
        setShowDua(true);
        haptics.duaMoment();
        const stepData = steps[currentStep];
        if (stepData?.dua?.arabic) guardedPlay(playDuaAudio, stepData.dua.arabic);
        const duaDuration = getDuaDisplayMs(stepData?.dua?.arabic, 2000);
        const advTimer = setTimeout(() => {
          setShowDua(false);
          advanceStep();
        }, duaDuration);
        autoPlayTimersRef.current.push(advTimer);
      }, 7000); // 6s banner + 1s pause to absorb the scene
      autoPlayTimersRef.current.push(talbiyahStart);
    } else {
      // Non-Ihram step: start walking immediately — banner shows on arrival via handleReachDestination
      const walkDelay = setTimeout(startWalking, 500);
      autoPlayTimersRef.current.push(walkDelay);
    }

    return () => {
      autoPlayTimersRef.current.forEach(t => clearTimeout(t));
      autoPlayTimersRef.current = [];
    };
  }, [autoPlay, currentStep]);

  // Auto-play arrival handler: when pilgrim reaches destination on a normal step, show dua then advance
  // IMPORTANT: Uses pilgrimArrivedForStepRef (sync ref) to prevent stale arrival from previous step.
  // Without this guard, when step changes from Tawaf→MaqamIbrahim, pilgrimArrived is still true
  // from Tawaf in the same render batch, causing a false dua + timer that gets cancelled by cleanup.
  useEffect(() => {
    if (!autoPlay || !pilgrimArrived) return;
    if (!pilgrimArrivedForStepRef.current) return; // Stale arrival from previous step — wait for real walk
    // Steps with their own animations — handled by dedicated completion effects below
    if (isTawafStep || isSaiStep || isJamaratStep || isArafatStep || isMuzdalifahStep || isSacrificeStep || isHalqStep) return;
    if (manualNextPendingRef.current) return; // Manual mode takes priority (user clicked →)

    // Pilgrim arrived at step position - stop walking
    // Wait for step banner (3s) to finish, THEN show dua, then advance
    setIsWalking(false);

    const bannerWait = 3200; // slightly longer than 3s banner
    const duaStartTimer = setTimeout(() => {
      setShowDua(true);
      haptics.duaMoment();
      if (currentStepData?.dua?.arabic) guardedPlay(playDuaAudio, currentStepData.dua.arabic);

      const duaDuration = getDuaDisplayMs(currentStepData?.dua?.arabic, 1000);
      const advTimer = setTimeout(() => {
        setShowDua(false);
        advanceStep();
      }, duaDuration);
      uiTimersRef.current.push(advTimer);
    }, bannerWait);
    uiTimersRef.current.push(duaStartTimer);
  }, [pilgrimArrived, autoPlay, isTawafStep, isSaiStep, isJamaratStep, isArafatStep, isMuzdalifahStep, isSacrificeStep, isHalqStep]);

  // Tawaf 7-circuit completion (works for both auto-play and manual)
  useEffect(() => {
    if (tawafCircuitDisplay < 7 || !isTawafStep || tawafDoneRef.current) return;
    tawafDoneRef.current = true; // prevent restart
    setIsWalking(false);
    haptics.stepComplete();
    guardedPlay(playCompletionSound);
    setShowTawafNotification(false);

    // Use ref to avoid stale closure — currentStepData may change if step changes during delay
    const stepData = currentStepDataRef.current;
    const localTimers = [];

    // Delay dua by 1200ms so completion fanfare (~1.1s) finishes first — no overlap
    const duaDelay = setTimeout(() => {
      setShowDua(true);
      if (stepData?.dua?.arabic) guardedPlay(playDuaAudio, stepData.dua.arabic);

      const duaDuration = getDuaDisplayMs(stepData?.dua?.arabic, 2000);
      const advTimer = setTimeout(() => {
        setShowDua(false);
        if (autoPlayRef.current) advanceStep();
      }, duaDuration);
      localTimers.push(advTimer);
      uiTimersRef.current.push(advTimer);
    }, 1200);
    localTimers.push(duaDelay);
    uiTimersRef.current.push(duaDelay);

    return () => { localTimers.forEach(t => clearTimeout(t)); };
  }, [tawafCircuitDisplay]);

  // Sa'i 7-lap completion (works for both auto-play and manual)
  useEffect(() => {
    if (saiLapDisplay < 7 || !isSaiStep || saiDoneRef.current) return;
    saiDoneRef.current = true; // prevent restart
    setIsWalking(false);
    haptics.stepComplete();
    guardedPlay(playCompletionSound);
    setShowSaiNotification(false);

    // Use ref to avoid stale closure
    const stepData = currentStepDataRef.current;
    const localTimers = [];

    // Delay dua by 1200ms so completion fanfare (~1.1s) finishes first — no overlap
    const duaDelay = setTimeout(() => {
      setShowDua(true);
      if (stepData?.dua?.arabic) guardedPlay(playDuaAudio, stepData.dua.arabic);

      const duaDuration = getDuaDisplayMs(stepData?.dua?.arabic, 2000);
      const advTimer = setTimeout(() => {
        setShowDua(false);
        if (autoPlayRef.current) advanceStep();
      }, duaDuration);
      localTimers.push(advTimer);
      uiTimersRef.current.push(advTimer);
    }, 1200);
    localTimers.push(duaDelay);
    uiTimersRef.current.push(duaDelay);

    return () => { localTimers.forEach(t => clearTimeout(t)); };
  }, [saiLapDisplay]);

  // Jamarat stoning completion (works for both auto-play and manual)
  useEffect(() => {
    const totalNeeded = isJamarat1Step ? 7 : 21;
    if (jamaratStoneDisplay < totalNeeded || !isJamaratStep || jamaratDoneRef.current) return;
    jamaratDoneRef.current = true;
    setIsWalking(false);
    haptics.stepComplete();
    guardedPlay(playCompletionSound);
    setShowJamaratNotification(false);

    const stepData = currentStepDataRef.current;
    const localTimers = [];

    const duaDelay = setTimeout(() => {
      setShowDua(true);
      if (stepData?.dua?.arabic) guardedPlay(playDuaAudio, stepData.dua.arabic);
      const duaDuration = getDuaDisplayMs(stepData?.dua?.arabic, 2000);
      const advTimer = setTimeout(() => {
        setShowDua(false);
        if (autoPlayRef.current) advanceStep();
      }, duaDuration);
      localTimers.push(advTimer);
      uiTimersRef.current.push(advTimer);
    }, 1200);
    localTimers.push(duaDelay);
    uiTimersRef.current.push(duaDelay);

    return () => { localTimers.forEach(t => clearTimeout(t)); };
  }, [jamaratStoneDisplay]);

  // Handle animation completion for Arafat, Muzdalifah, Sacrifice, Halq
  // Called by WalkingPilgrim via onAnimationDone callback when phase becomes 'done'
  const handleAnimationDone = useCallback((type) => {
    const doneRefMap = { arafat: arafatDoneRef, muzdalifah: muzDoneRef, sacrifice: sacrificeDoneRef, halq: halqDoneRef };
    const doneRef = doneRefMap[type];
    if (!doneRef || doneRef.current) return; // Already handled or unknown type
    doneRef.current = true;
    setIsWalking(false);
    haptics.stepComplete();
    if (type === 'muzdalifah') guardedPlay(playCompletionSound);

    const stepData = currentStepDataRef.current;

    const duaDelay = setTimeout(() => {
      setShowDua(true);
      if (stepData?.dua?.arabic) guardedPlay(playDuaAudio, stepData.dua.arabic);
      const duaDuration = getDuaDisplayMs(stepData?.dua?.arabic, 2000);
      const advTimer = setTimeout(() => {
        setShowDua(false);
        if (autoPlayRef.current) advanceStep();
      }, duaDuration);
      uiTimersRef.current.push(advTimer);
    }, 1200);
    uiTimersRef.current.push(duaDelay);
  }, []);

  // Manual next: when pilgrim arrives in manual mode, show dua then advance
  const manualNextPendingRef = useRef(false);
  const manuallyPausedRef = useRef(false); // true when user tapped Stop mid-walk

  useEffect(() => {
    if (!pilgrimArrived || !manualNextPendingRef.current) return;
    // Steps with own animations have their own completion logic — don't interfere
    if (isTawafStep || isSaiStep || isJamaratStep || isArafatStep || isMuzdalifahStep || isSacrificeStep || isHalqStep) {
      manualNextPendingRef.current = false;
      return;
    }
    manualNextPendingRef.current = false;

    // Clear any pending dua timers from initial arrival effect (e.g. Tawaf Black Stone → Rabbana)
    // to prevent them from firing and overriding the quiz/dua audio we're about to play
    uiTimersRef.current.forEach(t => clearTimeout(t));
    uiTimersRef.current = [];

    // Pilgrim arrived at current step destination - stop walking
    // Wait for step banner (3s) to finish, THEN show quiz/dua
    setIsWalking(false);
    haptics.stepComplete();

    const isLastStep = currentStep >= steps.length - 1;
    const bannerWait = 3200; // slightly longer than 3s banner

    const afterBanner = setTimeout(() => {
      if (QUIZ_QUESTIONS[currentStepData?.id]) {
        setShowQuiz(true);
      } else {
        setShowDua(true);
        haptics.duaMoment();
        if (currentStepData?.dua?.arabic) guardedPlay(playDuaAudio, currentStepData.dua.arabic);
        const duaDuration = getDuaDisplayMs(currentStepData?.dua?.arabic, 1000);
        const t = setTimeout(() => {
          setShowDua(false);
          if (isLastStep) {
            guardedPlay(playCompletionSound);
            haptics.celebration();
            setShowCompletion(true);
          }
        }, duaDuration);
        uiTimersRef.current.push(t);
      }
    }, bannerWait);
    uiTimersRef.current.push(afterBanner);
  }, [pilgrimArrived]);

  // Navigate to next step WITHOUT starting animation — just view the step info
  const handleNextStep = () => {
    if (isWalking || autoPlay || showDua) return;
    haptics.tap();
    if (currentStep < steps.length - 1) {
      manualNextPendingRef.current = false; // Cancel any pending arrival handling
      stopAudio();
      setCurrentStep(prev => prev + 1);
    }
  };

  // Navigate to previous step WITHOUT starting animation
  const handlePrevStep = () => {
    if (isWalking || autoPlay || showDua) return;
    if (currentStep > 0) {
      haptics.tap();
      manualNextPendingRef.current = false; // Cancel any pending arrival handling
      stopAudio();
      setCurrentStep(prev => prev - 1);
    }
  };

  // Stop: freeze pilgrim at current position, stop audio & timers
  // Also works during Ihram Talbiyah (showDua=true but isWalking=false)
  const handleStop = () => {
    if (autoPlay) return; // Use toggle for auto-play
    if (!isWalking && !showDua) return; // Nothing to stop
    haptics.tap();
    setShowStepBanner(false); // Banner no longer needed once user acts
    manuallyPausedRef.current = isWalking; // Only mark as paused if was walking (can resume)
    manualNextPendingRef.current = false; // Cancel pending arrival handling
    setIsWalking(false);
    setShowDua(false);
    stopAudio();
    // Cancel only UI timers (dua delays, etc.), not auto-play timers
    uiTimersRef.current.forEach(t => clearTimeout(t));
    uiTimersRef.current = [];
  };

  // Manual play: start walking animation for the current step (or resume if paused)
  const handleManualPlay = () => {
    if (autoPlay) return;

    // Resume from manual pause — pilgrim stays at same position, just restart walking
    if (manuallyPausedRef.current && !isWalking) {
      manuallyPausedRef.current = false;
      manualNextPendingRef.current = !pilgrimArrivedForStepRef.current; // Re-arm arrival handler
      setShowStepBanner(false); // Banner no longer needed
      setIsWalking(true);
      guardedPlay(playStepSound);
      return;
    }

    if (isWalking) return; // safety guard
    haptics.tap();
    setShowStepBanner(false); // Banner no longer needed once user starts an action

    // If step has its own animation: start walking (animation plays on arrival)
    if ((isTawafStep && !tawafDoneRef.current) || (isSaiStep && !saiDoneRef.current)
      || (isJamaratStep && !jamaratDoneRef.current) || (isArafatStep && !arafatDoneRef.current)
      || (isMuzdalifahStep && !muzDoneRef.current) || (isSacrificeStep && !sacrificeDoneRef.current)
      || (isHalqStep && !halqDoneRef.current)) {
      setIsWalking(true);
      guardedPlay(playStepSound);
      return;
    }

    // If at last step and done, show completion
    if (currentStep >= steps.length - 1) {
      guardedPlay(playCompletionSound);
      haptics.celebration();
      setShowCompletion(true);
      return;
    }

    // Ihram step: play Talbiyah at Miqat first, THEN advance and walk to Kaaba
    // This gives users time to hear the niyyah and Talbiyah before the pilgrim starts moving
    if (currentStepData?.id === 'ihram') {
      if (showDua) return; // Already playing Talbiyah — prevent double-click
      // Clear any stale timers from a previously dismissed Talbiyah (user clicked ✕ then Play again)
      uiTimersRef.current.forEach(t => clearTimeout(t));
      uiTimersRef.current = [];
      stopAudio();
      setShowDua(true);
      haptics.duaMoment();
      if (currentStepData.dua?.arabic) guardedPlay(playDuaAudio, currentStepData.dua.arabic);
      const duaDuration = getDuaDisplayMs(currentStepData.dua?.arabic, 2000);
      const t = setTimeout(() => {
        setShowDua(false);
        setCurrentStep(prev => prev + 1);
        setIsWalking(true);
        manualNextPendingRef.current = true;
        guardedPlay(playStepSound);
        // Play Talbiyah again during walk to Kaaba (continuous recitation)
        if (currentStepData.dua?.arabic) {
          const t2 = setTimeout(() => guardedPlay(playDuaAudio, currentStepData.dua.arabic), 900);
          uiTimersRef.current.push(t2);
        }
      }, duaDuration);
      uiTimersRef.current.push(t);
      return;
    }

    // Normal step: advance counter then walk pilgrim to new position
    setCurrentStep(prev => prev + 1);
    setIsWalking(true);
    manualNextPendingRef.current = true;
    guardedPlay(playStepSound);

    // Play Talbiyah during walk to Tawaf (from Miqat/Mina)
    const prevStep = steps[currentStep]; // the step we're leaving
    if (prevStep && (prevStep.id === 'ihram' || prevStep.id === 'mina1') && prevStep.dua?.arabic) {
      const t = setTimeout(() => guardedPlay(playDuaAudio, prevStep.dua.arabic), 900);
      uiTimersRef.current.push(t);
    }
  };

  const toggleAutoPlay = () => {
    haptics.tap();
    setShowStepBanner(false); // Banner no longer needed once user toggles mode
    // Clean break: always reset manual-mode refs to prevent cross-mode race conditions
    manualNextPendingRef.current = false;
    manuallyPausedRef.current = false;
    if (autoPlay) {
      // Turning OFF auto-play: clear everything
      autoPlayTimersRef.current.forEach(t => clearTimeout(t));
      autoPlayTimersRef.current = [];
      uiTimersRef.current.forEach(t => clearTimeout(t));
      uiTimersRef.current = [];
      setAutoPlay(false);
      setIsWalking(false);
      setShowDua(false);
      stopAudio();
    } else {
      // Turning ON auto-play: cancel any pending manual-mode timers/audio first
      // This prevents race conditions (e.g. manual Talbiyah timer + auto-play Talbiyah timer both firing)
      uiTimersRef.current.forEach(t => clearTimeout(t));
      uiTimersRef.current = [];
      setShowDua(false);
      setIsWalking(false);
      stopAudio();
      setAutoPlay(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => {
      const next = !prev;
      _isMuted = next; // Sync module-level flag so guardedPlay() works immediately
      if (next) { stopAudio(); stopAmbientSound(); }
      else playAmbientSound();
      return next;
    });
    haptics.tap();
  };

  const handleQuizAnswer = (isCorrect) => {
    setShowQuiz(false);
    setShowDua(true);
    haptics.duaMoment();
    if (currentStepData?.dua?.arabic) guardedPlay(playDuaAudio, currentStepData.dua.arabic);
    const duaDuration = getDuaDisplayMs(currentStepData?.dua?.arabic, 1000);
    const isLastStep = currentStep >= steps.length - 1;
    const t = setTimeout(() => {
      setShowDua(false);
      if (isLastStep) {
        guardedPlay(playCompletionSound);
        haptics.celebration();
        setShowCompletion(true);
      }
    }, duaDuration);
    uiTimersRef.current.push(t);
  };

  const handleCompletionClose = () => {
    setShowCompletion(false);
    try { localStorage.removeItem(storageKey); } catch {}
    onComplete?.();
  };

  // Keyboard shortcuts - use ref to avoid re-subscribing event listener every render
  const keyHandlersRef = useRef({});
  keyHandlersRef.current = { handleNextStep, handlePrevStep, toggleAutoPlay, toggleMute, showQuiz, showCompletion, showControls, isWalking, showDua };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const h = keyHandlersRef.current;
      if (h.showQuiz || h.showCompletion) return;
      switch (e.key) {
        case 'ArrowRight': if (!h.isWalking && !h.showDua) h.handleNextStep(); break;
        case 'ArrowLeft': if (!h.isWalking && !h.showDua) h.handlePrevStep(); break;
        case ' ': e.preventDefault(); h.toggleAutoPlay(); break;
        case 'm': case 'M': h.toggleMute(); break;
        case '?': case 'h': case 'H': setShowControls(p => !p); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const title = journeyType === 'umrah'
    ? { en: 'Umrah Journey', ur: 'عمرہ کا سفر', ar: 'رحلة العمرة' }
    : { en: 'Hajj Journey', ur: 'حج کا سفر', ar: 'رحلة الحج' };

  return (
    <div className="fixed inset-0 z-[10000] w-screen"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100dvh', overflow: 'hidden'
      }}
    >
      {/* Loading overlay - shown until 3D scene renders */}
      {!sceneLoaded && (
        <div className="absolute inset-0 z-[50] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="text-center">
            <div className="text-5xl mb-4 animate-bounce">🕋</div>
            <div className="w-12 h-12 mx-auto mb-3 border-3 border-white/20 border-t-emerald-400 rounded-full animate-spin" />
            <p className="text-white/60 text-sm" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {language === 'ar' ? 'جارٍ التحميل...' : language === 'ur' ? 'لوڈ ہو رہا ہے...' : 'Loading 3D scene...'}
            </p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [-62, 10, 60], fov: 60 }} dpr={[1, 1.5]}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', touchAction: 'none' }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onCreated={() => { setTimeout(() => setSceneLoaded(true), 500); }}>
        <Suspense fallback={null}>
          <PilgrimageScene journeyType={journeyType} currentStep={currentStep} isWalking={isWalking}
            viewMode={viewMode} language={language} onTawafCircuit={handleTawafCircuit} onSaiLap={handleSaiLap}
            onReachDestination={handleReachDestination} onStoneThrow={handleStoneThrow} onPebbleCollected={handlePebbleCollected}
            onAnimationDone={handleAnimationDone} showLabels={showLabels && !showStepBanner} />
        </Suspense>
      </Canvas>

      {/* Big Step Banner - shown at start of each step, hides when walking starts */}
      <StepBanner
        show={showStepBanner && sceneLoaded}
        stepNumber={currentStep + 1}
        totalSteps={steps.length}
        stepName={currentStepData?.name?.[language] || ''}
        stepDescription={currentStepData?.description?.[language] || ''}
        stepColor={currentStepData?.color}
        language={language}
        stepId={currentStepData?.id}
      />

      {/* Round Notifications - shows per-circuit/lap dua from authentic sources */}
      {/* Guard: hide when dua popup or detail sheet is showing to prevent overlap */}
      <RoundNotification show={showTawafNotification && !showDua && !isDetailExpanded} type="tawaf" roundNumber={tawafCircuitDisplay}
        language={language} onClose={() => setShowTawafNotification(false)} />
      <RoundNotification show={showSaiNotification && !showDua && !isDetailExpanded} type="sai" roundNumber={saiLapDisplay}
        language={language} onClose={() => setShowSaiNotification(false)} />

      {/* Jamarat Stone Throwing Notification */}
      {showJamaratNotification && !showDua && !isDetailExpanded && (
        <div className="absolute top-14 left-2 right-2 z-50 transition-all duration-500">
          <div className="rounded-xl shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden bg-gradient-to-r from-red-600/95 to-orange-500/95">
            <div className="flex items-center justify-between px-3 py-1.5 bg-black/20">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="text-lg shrink-0">🪨</span>
                <span className="text-white font-bold text-sm shrink-0">
                  {isMinaDaysStep
                    ? (language === 'ar' ? `حصاة ${jamaratStoneDisplay}/٢١` : language === 'ur' ? `کنکری ${jamaratStoneDisplay}/21` : `Stone ${jamaratStoneDisplay}/21`)
                    : (language === 'ar' ? `حصاة ${jamaratStoneDisplay}/٧` : language === 'ur' ? `کنکری ${jamaratStoneDisplay}/7` : `Stone ${jamaratStoneDisplay}/7`)}
                </span>
                <span className="text-white/40 text-[9px] truncate min-w-0">
                  {isMinaDaysStep
                    ? (language === 'ar' ? 'ثلاث جمرات' : language === 'ur' ? 'تینوں جمرات' : 'All 3 Pillars')
                    : (language === 'ar' ? 'جمرة العقبة' : language === 'ur' ? 'جمرہ عقبہ' : 'Al-Aqabah')}
                </span>
              </div>
              <button onClick={() => setShowJamaratNotification(false)}
                className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center hover:bg-white/30 shrink-0">✕</button>
            </div>
            <div className="px-3 py-2">
              <p className="text-white text-base leading-relaxed text-center" dir="rtl"
                style={{ fontFamily: "'Scheherazade New', serif" }}>
                بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ
              </p>
              <p className="text-white/60 text-[10px] text-center mt-1">
                {language === 'ar' ? 'في اسم الله، الله أكبر' : language === 'ur' ? 'اللہ کے نام سے، اللہ سب سے بڑا ہے' : 'In the name of Allah, Allah is the Greatest'}
              </p>
              <div className="flex justify-center gap-1 mt-2">
                {Array.from({ length: 7 }).map((_, i) => {
                  const currentPillarStones = jamaratStoneDisplay % 7 || (jamaratStoneDisplay > 0 ? 7 : 0);
                  return (
                    <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i < currentPillarStones ? 'bg-red-300 scale-110' : 'bg-white/20'
                    }`} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audio Playing Indicator - compact, non-overlapping */}
      {audioState.playing && !showTawafNotification && !showSaiNotification && !showJamaratNotification && (
        <div className="absolute top-14 right-2 z-40">
          <div className="rounded-lg shadow-lg backdrop-blur-md bg-emerald-700/80 border border-white/20 px-2 py-1 flex items-center gap-1.5">
            <span className="text-sm">🗣️</span>
            <div className="flex gap-0.5 items-end">
              {[1,2,3].map(i => (
                <div key={i} className="w-0.5 bg-white/80 rounded-full animate-pulse" style={{
                  height: `${4 + i * 3}px`,
                  animationDelay: `${i * 0.2}s`
                }} />
              ))}
            </div>
            <button onClick={() => { stopAudio(); setAudioState({ playing: false }); }}
              className="w-5 h-5 rounded-full bg-white/15 text-white/70 text-[9px] flex items-center justify-center hover:bg-white/25">
              ⏹
            </button>
          </div>
        </div>
      )}

      {/* Tawaf/Sa'i progress dots + distance/time - positioned below notification and header */}
      {(isTawafStep || isSaiStep) && isWalking && (
        <div className={`absolute left-2 z-30 transition-all duration-300 ${
          (showTawafNotification || showSaiNotification) ? 'bottom-28' : 'top-14'
        }`}>
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-white/80 text-[10px]">
                {isTawafStep ? '🕋' : '🏃'} {isTawafStep ? (tawafCircuitDisplay || 0) : (saiLapDisplay || 0)}/7
                {isSaiStep && (
                  <span className="text-blue-300/80 ml-1">
                    {(saiLapDisplay || 0) % 2 === 0
                      ? (language === 'ar' ? 'الصفا ← المروة' : language === 'ur' ? 'صفا ← مروہ' : 'Safa → Marwah')
                      : (language === 'ar' ? 'المروة ← الصفا' : language === 'ur' ? 'مروہ ← صفا' : 'Marwah → Safa')}
                  </span>
                )}
              </span>
              <div className="flex gap-0.5">
                {[1,2,3,4,5,6,7].map(n => (
                  <div key={n} className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    n <= (isTawafStep ? tawafCircuitDisplay : saiLapDisplay)
                      ? isTawafStep ? 'bg-amber-400 scale-110' : 'bg-blue-400 scale-110'
                      : 'bg-white/20'
                  }`} />
                ))}
              </div>
            </div>
            {/* Real distance & estimated time */}
            {(() => {
              const stats = isTawafStep ? TAWAF_STATS : SAI_STATS;
              const count = isTawafStep ? (tawafCircuitDisplay || 0) : (saiLapDisplay || 0);
              const distDone = count * (isTawafStep ? stats.perCircuit : stats.perLap);
              const timeDone = count * (isTawafStep ? stats.perCircuitMin : stats.perLapMin);
              const unitLabel = isTawafStep
                ? (language === 'ar' ? 'شوط' : language === 'ur' ? 'چکر' : 'circuit')
                : (language === 'ar' ? 'شوط' : language === 'ur' ? 'چکر' : 'lap');
              return (
                <div className="text-[9px] text-white/50 mt-0.5 leading-tight">
                  📏 {distDone}m / {(stats.total / 1000).toFixed(1)}km
                  {' · '}⏱ ~{timeDone}{language === 'ar' ? ' د' : language === 'ur' ? ' م' : ' min'}
                  {count > 0 && <span className="text-white/30"> ({stats[isTawafStep ? 'perCircuit' : 'perLap']}m/{unitLabel})</span>}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Mini-map (Hajj only) - small top-right; hidden when notifications/detail overlap */}
      {!showTawafNotification && !showSaiNotification && !showDua && !isDetailExpanded && (
        <MiniMap currentStep={currentStep} steps={steps} journeyType={journeyType} />
      )}

      {/* Compact Header - single thin bar — z-[60] keeps it above notifications */}
      <div className="absolute top-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-b from-black/60 to-transparent z-[60]">
        <div className="flex items-center gap-2">
          <button onClick={() => { stopAudio(); stopAmbientSound(); autoPlayTimersRef.current.forEach(t => clearTimeout(t)); autoPlayTimersRef.current = []; uiTimersRef.current.forEach(t => clearTimeout(t)); uiTimersRef.current = []; if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current); setSelectedLocation(null); onBack?.(); }}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-xs flex items-center justify-center">
            ←
          </button>

          <div className="flex-1 flex items-center justify-center gap-2 min-w-0">
            <ArcProgress steps={steps} currentStep={currentStep} />
            <div className="text-center min-w-0">
              <h1 className="text-sm font-bold text-white truncate" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {isRTL ? <>{title[language]} 🕋</> : <>🕋 {title[language]}</>}
              </h1>
              {currentDay && (
                <p className="text-amber-300 text-[10px] truncate">
                  {currentDay[`name${language === 'ar' ? 'Ar' : language === 'ur' ? 'Ur' : 'En'}`]} — {currentDay.date}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-0.5" style={{ direction: 'ltr' }}>
            {/* Mute button */}
            <button onClick={toggleMute}
              className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all ${
                isMuted ? 'bg-red-500/40 border border-red-400/40' : 'bg-white/10 border border-white/10 hover:bg-white/20'
              }`}>
              <span className="text-sm leading-none">{isMuted ? '🔇' : '🔊'}</span>
              <span className="text-[7px] text-white/50 leading-none mt-0.5">
                {isMuted ? (language === 'ar' ? 'صامت' : language === 'ur' ? 'خاموش' : 'Muted') : (language === 'ar' ? 'صوت' : language === 'ur' ? 'آواز' : 'Sound')}
              </span>
            </button>
            {/* Camera angle cycle button — highlighted in free mode */}
            <button onClick={() => {
                const idx = CAMERA_VIEWS.findIndex(v => v.id === viewMode);
                setViewMode(CAMERA_VIEWS[(idx + 1) % CAMERA_VIEWS.length].id);
              }}
              className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all ${
                viewMode === 'free'
                  ? 'bg-cyan-500/30 border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-white/10 border border-white/10 hover:bg-white/20'
              }`}>
              <span className="text-sm leading-none">{CAMERA_VIEWS.find(v => v.id === viewMode)?.icon || '🎬'}</span>
              <span className={`text-[7px] leading-none mt-0.5 ${viewMode === 'free' ? 'text-cyan-300' : 'text-white/50'}`}>
                {CAMERA_VIEWS.find(v => v.id === viewMode)?.label[language] || CAMERA_VIEWS.find(v => v.id === viewMode)?.label.en}
              </span>
            </button>
            {/* Labels button */}
            <button onClick={() => setShowLabels(p => !p)}
              className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all ${
                showLabels ? 'bg-emerald-500/40 border border-emerald-400/40' : 'bg-white/10 border border-white/10 hover:bg-white/20'
              }`}>
              <span className="text-sm leading-none">🏷️</span>
              <span className="text-[7px] text-white/50 leading-none mt-0.5">
                {language === 'ar' ? 'أسماء' : language === 'ur' ? 'نام' : 'Labels'}
              </span>
            </button>
            {/* Info/Guide button — disabled when modal popups are active */}
            <button onClick={() => { if (!showQuiz && !showCompletion) setShowControls(true); }}
              className="flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all">
              <span className="text-sm leading-none">❓</span>
              <span className="text-[7px] text-white/50 leading-none mt-0.5">
                {language === 'ar' ? 'مساعدة' : language === 'ur' ? 'مدد' : 'Help'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Step Info Pill - tap to expand full detail sheet */}
      {/* Hidden when dua/quiz/completion/controls active to prevent opening behind modals */}
      {/* Visible even when step banner is showing so user can tap for details */}
      {currentStepData && !isDetailExpanded && !showDua && !showQuiz && !showCompletion && !showControls && (
        <div className="absolute bottom-32 right-2 z-20">
          <button onClick={() => { setShowStepBanner(false); setIsDetailExpanded(true); }}
            className="flex items-center gap-2 pl-2 pr-3 py-2 rounded-2xl backdrop-blur-md border shadow-xl transition-all hover:scale-105 active:scale-95 max-w-[220px]"
            style={{ backgroundColor: `${currentStepData.color}dd`, borderColor: `${currentStepData.color}80` }}>
            <span className="w-6 h-6 rounded-lg bg-white/20 text-white text-xs font-bold flex items-center justify-center shrink-0">{currentStep + 1}</span>
            <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-white text-xs font-semibold block leading-snug" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {currentStepData.name[language]}
              </span>
              <span className="text-white/50 text-[9px] leading-tight block">
                {language === 'ar' ? 'اضغط للتفاصيل' : language === 'ur' ? 'تفصیل دیکھیں' : 'Tap for details'}
              </span>
            </div>
            <span className="text-white/40 text-xs shrink-0">📖</span>
          </button>
        </div>
      )}

      {/* Step Dua Popup - shows dua text during step arrival (non-Tawaf/Sa'i steps) */}
      {showDua && currentStepData?.dua && !showTawafNotification && !showSaiNotification && (
        <div className="absolute top-14 left-2 right-2 z-[51] animate-fade-in">
          <div className="rounded-xl shadow-2xl backdrop-blur-md bg-gradient-to-r from-emerald-700/95 to-teal-600/95 border border-white/20 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-1.5 bg-black/20">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="text-lg shrink-0">🤲</span>
                <span className="text-white font-bold text-sm truncate" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  {language === 'ar' ? 'الدعاء' : language === 'ur' ? 'دعا' : 'Dua'}
                  {' — '}
                  {currentStepData.name[language]}
                </span>
              </div>
              <button onClick={() => setShowDua(false)}
                className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center hover:bg-white/30 shrink-0"
                title="Hide popup (audio continues)">
                ✕
              </button>
            </div>
            <div className="px-3 py-2 max-h-[40vh] overflow-y-auto">
              <p className="text-white text-base leading-relaxed text-center mb-1" dir="rtl"
                style={{ fontFamily: "'Scheherazade New', serif" }}>
                {currentStepData.dua.arabic}
              </p>
              {currentStepData.dua.transliteration && (
                <p className="text-white/50 text-[10px] text-center italic mb-1">{currentStepData.dua.transliteration}</p>
              )}
              <p className="text-white/70 text-xs text-center leading-relaxed" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {currentStepData.dua[language] || currentStepData.dua.en}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Step Detail Bottom Sheet - hidden by default, shown on tap */}
      {/* Auto-hide when higher-priority popups are active so user doesn't feel stuck */}
      {isDetailExpanded && !showDua && !showQuiz && !showCompletion && !showControls && !showTawafNotification && !showSaiNotification && (
        <StepDetailSheet step={currentStepData} language={language}
          isExpanded={isDetailExpanded} onToggle={() => setIsDetailExpanded(p => !p)} />
      )}

      {/* Persistent step info bar - shows what's happening during the animation */}
      {currentStepData && isWalking && !showDua && !showTawafNotification && !showSaiNotification && !showStepBanner && (
        <div className="absolute bottom-24 left-3 right-3 z-20 pointer-events-none">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
            <span className="text-base shrink-0">
              {isTawafStep && pilgrimArrived ? '🕋' : isSaiStep && pilgrimArrived ? '🏃' : '🚶'}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold leading-snug" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {isTawafStep && pilgrimArrived
                  ? `${language === 'ur' ? 'طواف — چکر' : language === 'ar' ? 'الطواف — الشوط' : 'Tawaf — Circuit'} ${Math.min(tawafCircuitDisplay + 1, 7)}/7`
                  : isSaiStep && pilgrimArrived
                    ? `${language === 'ur' ? 'سعی — چکر' : language === 'ar' ? 'السعي — الشوط' : "Sa'i — Lap"} ${Math.min(saiLapDisplay + 1, 7)}/7  ${
                        saiLapDisplay % 2 === 0
                          ? (language === 'ar' ? '(الصفا ← المروة)' : language === 'ur' ? '(صفا ← مروہ)' : '(Safa → Marwah)')
                          : (language === 'ar' ? '(المروة ← الصفا)' : language === 'ur' ? '(مروہ ← صفا)' : '(Marwah → Safa)')
                      }`
                    : `${isRTL ? '←' : '→'} ${currentStepData.name[language]}`}
              </p>
              <p className="text-white/50 text-[10px] leading-snug" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {currentStepData.description?.[language] || ''}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Free camera mode hint — camera won't auto-reposition on step change */}
      {viewMode === 'free' && (
        <div className="absolute left-3 bottom-28 z-30 animate-fade-in pointer-events-none">
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl px-3 py-2 border border-cyan-400/30 shadow-lg shadow-cyan-500/10">
            <div className="flex items-center gap-2">
              <span className="text-xl">🕹️</span>
              <div>
                <p className="text-cyan-300 text-[10px] font-bold leading-tight" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  {language === 'ar' ? 'كاميرا حرة — بدون تتبع' : language === 'ur' ? 'آزاد کیمرہ — خودکار نہیں' : 'Free Camera — No Auto-Position'}
                </p>
                <p className="text-white/40 text-[9px] leading-tight" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  {language === 'ar' ? 'اسحب للدوران · اضغط للتكبير' : language === 'ur' ? 'گھمانے کیلئے کھینچیں · زوم کیلئے پنچ' : 'Drag to orbit · Pinch to zoom'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Controls bar */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" style={{ direction: 'ltr' }}>
        {/* Step progress pills */}
        <div className="flex justify-center gap-1 mb-2.5">
          {steps.map((step, i) => (
            <button key={step.id}
              onClick={() => { if (!isWalking && !autoPlay && !showDua) { haptics.tap(); manualNextPendingRef.current = false; stopAudio(); setCurrentStep(i); } }}
              disabled={isWalking || autoPlay || showDua}
              className={`rounded-full text-[9px] font-bold transition-all duration-300 ${
                i === currentStep
                  ? 'w-7 h-7 text-white scale-110 ring-2 ring-white/40 shadow-lg'
                  : i < currentStep
                    ? 'w-5 h-5 bg-emerald-500/60 text-white/90'
                    : 'w-5 h-5 bg-white/15 text-white/40'
              }`}
              style={{ backgroundColor: i === currentStep ? step.color : undefined,
                       boxShadow: i === currentStep ? `0 0 12px ${step.color}60` : undefined }}>
              {i < currentStep ? '✓' : i + 1}
            </button>
          ))}
        </div>
        {/* Action buttons — compact row: ↺ | ← | ▶ Play | → | ⏩ Auto */}
        <div className="flex items-center justify-center gap-1">
          {/* Restart — small icon-only */}
          <button onClick={() => {
              if (isWalking || autoPlay || showDua) return;
              haptics.tap(); stopAudio();
              manualNextPendingRef.current = false;
              autoPlayTimersRef.current.forEach(t => clearTimeout(t)); autoPlayTimersRef.current = [];
              uiTimersRef.current.forEach(t => clearTimeout(t)); uiTimersRef.current = [];
              setCurrentStep(0);
              try { localStorage.removeItem(storageKey); } catch {}
            }}
            disabled={isWalking || autoPlay || showDua || currentStep === 0}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all active:scale-90 ${
              isWalking || autoPlay || showDua || currentStep === 0
                ? 'bg-white/5 text-white/20'
                : 'bg-orange-500/20 text-orange-300 hover:bg-orange-500/30'
            }`} title={language === 'ar' ? 'إعادة' : language === 'ur' ? 'دوبارہ' : 'Restart'}>
            ↺
          </button>
          {/* Back — small icon-only */}
          <button onClick={handlePrevStep} disabled={currentStep === 0 || isWalking || autoPlay || showDua}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all active:scale-90 ${
              currentStep === 0 || isWalking || autoPlay || showDua
                ? 'bg-white/5 text-white/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`} title={language === 'ar' ? 'سابق' : language === 'ur' ? 'پچھلا' : 'Back'}>
            ←
          </button>
          {/* Manual Play / Stop toggle — main action, wider */}
          {/* showDua counts as "active" too (e.g. Ihram Talbiyah) so user can stop it */}
          <button onClick={(isWalking || showDua) ? (autoPlay ? toggleAutoPlay : handleStop) : handleManualPlay}
            disabled={autoPlay && !(isWalking || showDua)}
            className={`h-9 px-4 rounded-lg font-bold flex items-center gap-1.5 transition-all active:scale-95 ${
              (isWalking || showDua)
                ? 'bg-red-500/90 text-white shadow-lg shadow-red-500/20'
                : autoPlay
                  ? 'bg-white/10 text-white/30'
                  : manuallyPausedRef.current
                    ? 'bg-amber-500/90 text-white shadow-lg shadow-amber-500/20'
                    : 'bg-white/90 text-gray-800 hover:bg-white shadow-lg'
            }`}>
            <span className="text-sm">{(isWalking || showDua) ? '⏹' : manuallyPausedRef.current ? '▶' : '▶'}</span>
            <span className="text-xs">{
              (isWalking || showDua)
                ? (language === 'ar' ? 'إيقاف' : language === 'ur' ? 'روکیں' : 'Stop')
                : manuallyPausedRef.current
                  ? (language === 'ar' ? 'استئناف' : language === 'ur' ? 'جاری رکھیں' : 'Resume')
                  : (language === 'ar' ? 'ابدأ' : language === 'ur' ? 'چلائیں' : 'Play')
            }</span>
          </button>
          {/* Next — small icon-only */}
          <button onClick={handleNextStep} disabled={currentStep >= steps.length - 1 || isWalking || autoPlay || showDua}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all active:scale-90 ${
              currentStep >= steps.length - 1 || isWalking || autoPlay || showDua
                ? 'bg-white/5 text-white/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`} title={language === 'ar' ? 'التالي' : language === 'ur' ? 'اگلا' : 'Next'}>
            →
          </button>
          {/* Auto Play / Pause — compact */}
          <button onClick={toggleAutoPlay}
            className={`h-9 px-3 rounded-lg font-bold flex items-center gap-1 text-sm transition-all active:scale-95 ${
              autoPlay
                ? 'bg-red-500/90 text-white shadow-lg shadow-red-500/20'
                : 'bg-emerald-500/90 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500'
            }`}>
            <span>{autoPlay ? '⏸' : '⏩'}</span>
            <span className="text-xs">{autoPlay
              ? (language === 'ar' ? 'إيقاف' : language === 'ur' ? 'روکیں' : 'Stop')
              : (language === 'ar' ? 'تلقائي' : language === 'ur' ? 'خودکار' : 'Auto')}</span>
          </button>
        </div>
      </div>

      {/* Quiz overlay — hides Controls if open */}
      {showQuiz && !showControls && !showCompletion && <StepQuiz stepId={steps[currentStep]?.id} language={language}
        onAnswer={handleQuizAnswer} onSkip={() => { setShowQuiz(false); setShowDua(true); const t = setTimeout(() => setShowDua(false), 3000); uiTimersRef.current.push(t); }} />}

      {/* Completion celebration — highest priority modal */}
      <CompletionCelebration show={showCompletion} journeyType={journeyType}
        language={language} onClose={handleCompletionClose} />

      {/* Controls help overlay — hides Quiz if open */}
      <ControlsOverlay show={showControls && !showQuiz && !showCompletion} onClose={() => setShowControls(false)} language={language} />

      {/* One-time onboarding intro */}
      {showIntro && sceneLoaded && (
        <OnboardingIntro journeyType={journeyType} language={language} onDismiss={(mode) => {
          setShowIntro(false);
          try { localStorage.setItem(INTRO_STORAGE_KEY + journeyType, '1'); } catch {}
          if (mode === 'auto') {
            setAutoPlay(true);
          }
        }} />
      )}

      {/* Location detail popup - shown when clicking a 3D label */}
      {/* Hidden behind any active popup to prevent overlap */}
      {selectedLocation && !showCompletion && !showIntro && !showDua && !showTawafNotification && !showSaiNotification && (
        <LocationDetailPopup locationId={selectedLocation} language={language}
          onClose={() => setSelectedLocation(null)} />
      )}
    </div>
  );
};

export default PilgrimageJourneyUnified;
