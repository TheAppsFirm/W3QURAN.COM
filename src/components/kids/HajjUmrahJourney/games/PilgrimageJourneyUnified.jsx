/**
 * PilgrimageJourneyUnified.jsx
 *
 * Unified immersive bird's eye experience for both Umrah and Hajj
 * Features: Auto-play, Audio, Duas, Beautiful 3D scenes
 */

import React, { useRef, useState, useCallback, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Sky, Stars, Sparkles, Cloud, Float, Text, OrbitControls
} from '@react-three/drei';
import * as THREE from 'three';
import { RealisticPilgrim, DustParticles, GoldenSparkles } from './EnhancedGraphics';

// ============================================================
// AUDIO UTILITIES - ENHANCED
// ============================================================
let audioContext = null;
let currentAudio = null;
let ambientSource = null;

const initAudio = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
};

const playDuaAudio = (text) => {
  // Use speech synthesis for dua recitation
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
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
};

// Play a beautiful melodic step sound
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
    });
  } catch (e) {
    console.log('Audio not available');
  }
};

// Play Tawaf circuit completion sound
const playTawafCircuitSound = (circuitNumber) => {
  try {
    initAudio();
    // Rising melody for each circuit
    const baseNote = 261.63; // C4
    const scale = [1, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2]; // Major scale ratios
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
  } catch (e) {
    console.log('Audio not available');
  }
};

// Play completion fanfare
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

// Play Sa'i lap completion sound
const playSaiLapSound = (lapNumber) => {
  try {
    initAudio();
    // Different melody for Sa'i
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
  } catch (e) {
    console.log('Audio not available');
  }
};

// ============================================================
// JOURNEY STEPS DATA
// ============================================================
const UMRAH_STEPS = [
  {
    id: 'ihram',
    name: { en: 'Ihram', ur: 'احرام', ar: 'الإحرام' },
    position: [-70, 0, 50],  // Far from Makkah - representing Miqat distance
    color: '#10B981',
    dua: {
      arabic: 'لَبَّيْكَ اللَّهُمَّ عُمْرَةً',
      en: 'Here I am O Allah, for Umrah',
      ur: 'حاضر ہوں اے اللہ عمرہ کے لیے'
    },
    description: {
      en: 'Enter the sacred state at Miqat',
      ur: 'میقات پر احرام باندھیں',
      ar: 'الدخول في الإحرام من الميقات'
    },
    miqatInfo: {
      en: '5 Miqat Points with distances from Makkah:\n1) Dhul Hulayfah - 450km (from Madinah)\n2) Juhfah/Rabigh - 183km (from Syria/Egypt)\n3) Qarn al-Manazil - 75km (from Najd)\n4) Yalamlam - 92km (from Yemen)\n5) Dhat Irq - 94km (from Iraq)',
      ur: 'مکہ سے 5 میقات کے فاصلے:\n1) ذوالحلیفہ - 450 کلومیٹر (مدینہ سے آنے والوں کیلئے)\n2) جحفہ/رابغ - 183 کلومیٹر (شام/مصر سے)\n3) قرن المنازل - 75 کلومیٹر (نجد سے)\n4) یلملم - 92 کلومیٹر (یمن سے)\n5) ذات عرق - 94 کلومیٹر (عراق سے)',
      ar: '5 مواقيت مع المسافات من مكة:\n1) ذو الحليفة - 450 كم (من المدينة)\n2) الجحفة/رابغ - 183 كم (من الشام/مصر)\n3) قرن المنازل - 75 كم (من نجد)\n4) يلملم - 92 كم (من اليمن)\n5) ذات عرق - 94 كم (من العراق)'
    }
  },
  {
    id: 'tawaf',
    name: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' },
    position: [0, 0, 0],
    color: '#F59E0B',
    dua: {
      arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
      en: 'Glory be to Allah, Praise be to Allah, There is no god but Allah, Allah is the Greatest',
      ur: 'اللہ پاک ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے'
    },
    description: {
      en: 'Circle the Kaaba 7 times counter-clockwise',
      ur: 'کعبہ کے 7 چکر لگائیں',
      ar: 'الطواف حول الكعبة 7 أشواط'
    }
  },
  {
    id: 'sai',
    name: { en: "Sa'i", ur: 'سعی', ar: 'السعي' },
    position: [25, 0, 0],
    color: '#3B82F6',
    dua: {
      arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
      en: 'Indeed, Safa and Marwah are among the symbols of Allah',
      ur: 'بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں'
    },
    description: {
      en: 'Walk 7 times between Safa and Marwah',
      ur: 'صفا اور مروہ کے درمیان 7 چکر',
      ar: 'السعي بين الصفا والمروة 7 أشواط'
    }
  },
  {
    id: 'halq',
    name: { en: 'Halq/Taqsir', ur: 'حلق/تقصیر', ar: 'الحلق/التقصير' },
    position: [-15, 0, -15],
    color: '#8B5CF6',
    dua: {
      arabic: 'اللَّهُمَّ اغْفِرْ لِي ذُنُوبِي',
      en: 'O Allah, forgive my sins',
      ur: 'اے اللہ میرے گناہ معاف فرما'
    },
    description: {
      en: 'Shave or trim hair to complete Umrah',
      ur: 'عمرہ مکمل کرنے کے لیے بال کٹوائیں',
      ar: 'الحلق أو التقصير لإتمام العمرة'
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
      arabic: 'لَبَّيْكَ اللَّهُمَّ حَجًّا',
      en: 'Here I am O Allah, for Hajj',
      ur: 'حاضر ہوں اے اللہ حج کے لیے'
    },
    description: {
      en: 'Enter sacred state at Miqat (8th Dhul Hijjah)',
      ur: '8 ذوالحجہ - میقات پر احرام',
      ar: 'الإحرام من الميقات (8 ذو الحجة)'
    },
    miqatInfo: {
      en: '5 Miqat Points with distances from Makkah:\n1) Dhul Hulayfah - 450km (from Madinah)\n2) Juhfah/Rabigh - 183km (from Syria/Egypt)\n3) Qarn al-Manazil - 75km (from Najd)\n4) Yalamlam - 92km (from Yemen)\n5) Dhat Irq - 94km (from Iraq)',
      ur: 'مکہ سے 5 میقات کے فاصلے:\n1) ذوالحلیفہ - 450 کلومیٹر (مدینہ سے آنے والوں کیلئے)\n2) جحفہ/رابغ - 183 کلومیٹر (شام/مصر سے)\n3) قرن المنازل - 75 کلومیٹر (نجد سے)\n4) یلملم - 92 کلومیٹر (یمن سے)\n5) ذات عرق - 94 کلومیٹر (عراق سے)',
      ar: '5 مواقيت مع المسافات من مكة:\n1) ذو الحليفة - 450 كم (من المدينة)\n2) الجحفة/رابغ - 183 كم (من الشام/مصر)\n3) قرن المنازل - 75 كم (من نجد)\n4) يلملم - 92 كم (من اليمن)\n5) ذات عرق - 94 كم (من العراق)'
    },
    day: 8
  },
  {
    id: 'mina1',
    name: { en: 'Mina (Day 1)', ur: 'منیٰ (پہلا دن)', ar: 'منى (اليوم الأول)' },
    position: [10, 0, -30],
    color: '#EC4899',
    dua: {
      arabic: 'اللَّهُمَّ هَذِهِ مِنًى فَامْنُنْ عَلَيَّ بِمَا مَنَنْتَ بِهِ عَلَى أَوْلِيَائِكَ',
      en: 'O Allah, this is Mina, bestow upon me what You bestowed upon Your friends',
      ur: 'اے اللہ یہ منیٰ ہے، مجھ پر وہ احسان فرما جو تو نے اپنے دوستوں پر فرمایا'
    },
    description: {
      en: 'Stay overnight in Mina, pray 5 prayers',
      ur: 'منیٰ میں رات گزاریں، 5 نمازیں پڑھیں',
      ar: 'المبيت في منى وأداء الصلوات الخمس'
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
      en: 'There is no god but Allah alone, He has no partner. To Him belongs the dominion and praise, and He is capable of all things',
      ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریفیں ہیں'
    },
    description: {
      en: 'Stand at Arafat from noon to sunset (9th Dhul Hijjah)',
      ur: '9 ذوالحجہ - عرفات میں دوپہر سے مغرب تک',
      ar: 'الوقوف بعرفة من الظهر إلى الغروب (9 ذو الحجة)'
    },
    day: 9
  },
  {
    id: 'muzdalifah',
    name: { en: 'Muzdalifah', ur: 'مزدلفہ', ar: 'مزدلفة' },
    position: [25, 0, -45],
    color: '#06B6D4',
    dua: {
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنْ تَجْمَعَ لِي فِي هَذَا الْمَكَانِ جَوَامِعَ الْخَيْرِ كُلِّهِ',
      en: 'O Allah, I ask You to gather for me in this place all comprehensive good',
      ur: 'اے اللہ میں تجھ سے سوال کرتا ہوں کہ اس جگہ میرے لیے تمام بھلائیاں جمع فرما'
    },
    description: {
      en: 'Spend night under stars, collect pebbles',
      ur: 'ستاروں تلے رات، کنکریاں جمع کریں',
      ar: 'المبيت في مزدلفة وجمع الحصى'
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
      en: 'In the name of Allah, Allah is the Greatest',
      ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے'
    },
    description: {
      en: 'Stone the large pillar 7 times (10th Dhul Hijjah)',
      ur: '10 ذوالحجہ - بڑے جمرے پر 7 کنکریاں',
      ar: 'رمي جمرة العقبة الكبرى (10 ذو الحجة)'
    },
    day: 10
  },
  {
    id: 'sacrifice',
    name: { en: 'Sacrifice', ur: 'قربانی', ar: 'الأضحية' },
    position: [5, 0, -32],
    color: '#F97316',
    dua: {
      arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اللَّهُمَّ هَذَا مِنْكَ وَلَكَ',
      en: 'In the name of Allah, Allah is the Greatest. O Allah, this is from You and for You',
      ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے۔ یہ تیری طرف سے ہے اور تیرے لیے ہے'
    },
    description: {
      en: 'Offer sacrifice (Qurbani)',
      ur: 'قربانی کریں',
      ar: 'ذبح الأضحية'
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
      en: 'Praise be to Allah who has completed our rites for us',
      ur: 'تمام تعریفیں اللہ کے لیے جس نے ہمارے مناسک پورے کر دیے'
    },
    description: {
      en: 'Shave or trim hair',
      ur: 'سر منڈوائیں یا بال کٹوائیں',
      ar: 'الحلق أو التقصير'
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
      en: 'Our Lord, give us good in this world and good in the Hereafter, and save us from the torment of the Fire',
      ur: 'اے ہمارے رب! ہمیں دنیا میں بھی بھلائی دے اور آخرت میں بھی بھلائی دے اور ہمیں آگ کے عذاب سے بچا'
    },
    description: {
      en: 'Circle the Kaaba 7 times (obligatory)',
      ur: 'کعبہ کے 7 چکر (فرض)',
      ar: 'الطواف حول الكعبة 7 أشواط (ركن)'
    },
    day: 10
  },
  {
    id: 'sai',
    name: { en: "Sa'i", ur: 'سعی', ar: 'السعي' },
    position: [25, 0, 0],
    color: '#3B82F6',
    dua: {
      arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ الأَعَزُّ الأَكْرَمُ',
      en: 'My Lord, forgive and have mercy, You are the Most Mighty, Most Noble',
      ur: 'اے میرے رب معاف فرما اور رحم کر، تو ہی سب سے عزت والا اور کرم والا ہے'
    },
    description: {
      en: 'Walk between Safa and Marwah 7 times',
      ur: 'صفا اور مروہ کے درمیان 7 چکر',
      ar: 'السعي بين الصفا والمروة'
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
      en: 'Allah is the Greatest, Allah is the Greatest, there is no god but Allah. Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise',
      ur: 'اللہ سب سے بڑا ہے، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے، تمام تعریفیں اللہ کے لیے ہیں'
    },
    description: {
      en: 'Stay in Mina, stone all 3 pillars daily (11-13 Dhul Hijjah)',
      ur: '11-13 ذوالحجہ - منیٰ میں قیام، روزانہ تینوں جمرات',
      ar: 'المبيت في منى ورمي الجمرات الثلاث (11-13 ذو الحجة)'
    },
    day: 11
  },
  {
    id: 'tawaf_wida',
    name: { en: 'Tawaf al-Wida', ur: 'طواف وداع', ar: 'طواف الوداع' },
    position: [0, 0, 0],
    color: '#10B981',
    dua: {
      arabic: 'اللَّهُمَّ إِنَّ الْبَيْتَ بَيْتُكَ وَالْعَبْدَ عَبْدُكَ، اللَّهُمَّ لَا تَجْعَلْهُ آخِرَ الْعَهْدِ مِنْ بَيْتِكَ',
      en: 'O Allah, the House is Your House and the servant is Your servant. O Allah, do not make this my last visit to Your House',
      ur: 'اے اللہ یہ گھر تیرا گھر ہے اور بندہ تیرا بندہ ہے۔ اے اللہ اسے تیرے گھر کی آخری حاضری نہ بنا'
    },
    description: {
      en: 'Farewell Tawaf before leaving Makkah',
      ur: 'مکہ سے جانے سے پہلے الوداعی طواف',
      ar: 'طواف الوداع قبل مغادرة مكة'
    },
    day: 13
  }
];

const GOLD = '#D4AF37';
const KAABA_BLACK = '#1A1A1A';
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
const CrowdPilgrims = ({ count = 25, radius = 15, center = [0, 0, 0] }) => {
  const pilgrims = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
      const r = radius + (Math.random() - 0.5) * 6;
      return {
        position: [
          center[0] + Math.sin(angle) * r,
          0,
          center[2] + Math.cos(angle) * r
        ],
        scale: 0.8 + Math.random() * 0.4,
        angle: angle + Math.PI / 2,
        speed: 0.1 + Math.random() * 0.1
      };
    });
  }, [count, radius, center]);

  return (
    <group>
      {pilgrims.map((p, i) => (
        <AnimatedCrowdPilgrim key={i} {...p} index={i} />
      ))}
    </group>
  );
};

// Single animated crowd pilgrim
const AnimatedCrowdPilgrim = ({ position, scale, angle, speed, index }) => {
  const ref = useRef();
  const initialAngle = useRef(angle);

  useFrame((state) => {
    if (ref.current) {
      // Slowly circle around Kaaba
      const currentAngle = initialAngle.current + state.clock.elapsedTime * speed * 0.3;
      const radius = Math.sqrt(position[0] ** 2 + position[2] ** 2);
      ref.current.position.x = Math.sin(currentAngle) * radius;
      ref.current.position.z = Math.cos(currentAngle) * radius;
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

// Detailed Kaaba with all features
const Kaaba = ({ showTawafPath = false }) => {
  return (
    <group position={[0, 0, 0]}>
      {/* Main Kaaba structure - Black Kiswah */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color={KAABA_BLACK} roughness={0.7} />
      </mesh>

      {/* Gold band (Hizam) - embroidered belt */}
      <mesh position={[0, 4.2, 0]}>
        <boxGeometry args={[5.15, 0.8, 5.15]} />
        <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.3} emissive={GOLD} emissiveIntensity={0.2} />
      </mesh>

      {/* Kaaba door (Bab al-Kaaba) - gold */}
      <mesh position={[2.51, 2.5, 0]}>
        <boxGeometry args={[0.1, 2.5, 1.5]} />
        <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Black Stone (Hajar al-Aswad) corner */}
      <group position={[2.55, 1.2, 2.55]}>
        <mesh>
          <cylinderGeometry args={[0.35, 0.35, 0.5, 16]} />
          <meshStandardMaterial color="#1A0A00" metalness={0.4} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.2]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#0A0A0A" metalness={0.6} roughness={0.3} />
        </mesh>
        <pointLight position={[0, 0.5, 0]} intensity={2} color="#FFD700" distance={4} />
      </group>

      {/* Hijr Ismail (Hateem) - semi-circular wall */}
      <mesh position={[-4, 0.6, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[3, 0.4, 8, 32, Math.PI]} />
        <meshStandardMaterial color={MARBLE} roughness={0.4} />
      </mesh>
      <mesh position={[-4, 0.02, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <ringGeometry args={[0, 3, 32, 1, 0, Math.PI]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
      </mesh>

      {/* Maqam Ibrahim - golden cage */}
      <group position={[4, 0, 0]}>
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 1.6, 8]} />
          <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.3} transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.3} />
        </mesh>
        <pointLight position={[0, 1, 0]} intensity={0.5} color="#FFD700" distance={3} />
      </group>

      {/* Zamzam Well area indicator */}
      <mesh position={[6, 0.05, -3]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 24]} />
        <meshStandardMaterial color="#4A90A4" roughness={0.6} />
      </mesh>

      {/* Mataf floor - polished marble */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4, 18, 64]} />
        <meshStandardMaterial color={MARBLE} roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Tawaf path visualization */}
      <TawafPathRing active={showTawafPath} />

      {/* Ambient effects */}
      <GoldenSparkles position={[0, 5, 0]} active={true} />
      <pointLight position={[0, 8, 0]} intensity={3} color={GOLD} distance={30} />
      <pointLight position={[0, 3, 0]} intensity={1} color="#FFFFFF" distance={15} />

      {/* Crowd pilgrims */}
      <CrowdPilgrims count={40} radius={14} center={[0, 0, 0]} />
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
            {/* Column */}
            <mesh position={[0, 4, 0]} castShadow>
              <cylinderGeometry args={[0.5, 0.6, 8, 12]} />
              <meshStandardMaterial color={MOSQUE_WHITE} roughness={0.3} />
            </mesh>
            {/* Column capital */}
            <mesh position={[0, 8.2, 0]}>
              <cylinderGeometry args={[0.8, 0.5, 0.5, 12]} />
              <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.4} />
            </mesh>
          </group>
        );
      })}

      {/* Small domes on corners */}
      {[[-35, -35], [35, -35], [-35, 35], [35, 35]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 5, 0]}>
            <sphereGeometry args={[3, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color={MOSQUE_WHITE} roughness={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Miqat Station - Large boundary complex (represents one of 5 Miqat points)
const MiqatStation = () => (
  <group position={[-70, 0, 50]}>
    {/* Main mosque building */}
    <mesh position={[0, 3, 0]} castShadow>
      <boxGeometry args={[15, 6, 10]} />
      <meshStandardMaterial color="#FFFEF0" roughness={0.4} />
    </mesh>

    {/* Central dome */}
    <mesh position={[0, 7.5, 0]}>
      <sphereGeometry args={[4, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color="#10B981" roughness={0.4} />
    </mesh>

    {/* Crescent on main dome */}
    <mesh position={[0, 11, 0]} rotation={[0, 0, Math.PI / 4]}>
      <torusGeometry args={[0.5, 0.1, 8, 16, Math.PI * 1.5]} />
      <meshStandardMaterial color={GOLD} metalness={0.8} />
    </mesh>

    {/* Two minarets */}
    {[-8, 8].map((x, i) => (
      <group key={i} position={[x, 0, 0]}>
        <mesh position={[0, 6, 0]} castShadow>
          <cylinderGeometry args={[0.8, 1, 12, 8]} />
          <meshStandardMaterial color="#FFFEF0" roughness={0.4} />
        </mesh>
        <mesh position={[0, 12.5, 0]}>
          <sphereGeometry args={[0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#10B981" roughness={0.4} />
        </mesh>
        <mesh position={[0, 13.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.2, 0.04, 8, 16, Math.PI * 1.5]} />
          <meshStandardMaterial color={GOLD} metalness={0.8} />
        </mesh>
      </group>
    ))}

    {/* Entrance arch */}
    <mesh position={[0, 3, 5.1]}>
      <boxGeometry args={[4, 5, 0.3]} />
      <meshStandardMaterial color="#8B4513" roughness={0.7} />
    </mesh>
    <mesh position={[0, 5.5, 5.15]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2, 0.3, 8, 16, Math.PI]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.6} />
    </mesh>

    {/* "MIQAT" sign board */}
    <mesh position={[0, 8, 5.2]}>
      <boxGeometry args={[6, 1.5, 0.2]} />
      <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
    </mesh>

    {/* Large courtyard */}
    <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[20, 32]} />
      <meshStandardMaterial color="#E8DCC8" roughness={0.6} />
    </mesh>

    {/* Boundary markers showing this is a Miqat */}
    {[0, 1, 2, 3, 4].map((i) => (
      <group key={i} position={[(i - 2) * 8, 0, 15]}>
        <mesh position={[0, 1.5, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 3, 8]} />
          <meshStandardMaterial color="#10B981" />
        </mesh>
        <mesh position={[0, 3.2, 0]}>
          <sphereGeometry args={[0.4, 12, 12]} />
          <meshStandardMaterial color={GOLD} metalness={0.7} />
        </mesh>
      </group>
    ))}

    {/* Info sign - "5 Miqat Points" */}
    <mesh position={[0, 2, 18]} rotation={[0, 0, 0]}>
      <boxGeometry args={[12, 3, 0.2]} />
      <meshStandardMaterial color="#1E3A5F" roughness={0.5} />
    </mesh>

    <pointLight position={[0, 8, 8]} intensity={2} color="#FFF8E0" distance={25} />
    <pointLight position={[0, 12, 0]} intensity={1} color="#10B981" distance={15} />
  </group>
);

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
      {/* SAFA HILL - Rocky mountain */}
      <group position={[-8, 0, 0]}>
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
        {/* Green marker sign */}
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[2, 1, 0.3]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.6} />
        </mesh>
        <pointLight position={[0, 5, 0]} intensity={1} color="#10B981" distance={8} />
        {/* "SAFA" text area */}
        <mesh position={[0, 0.1, 3]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2, 16]} />
          <meshStandardMaterial color="#10B981" transparent opacity={0.3} />
        </mesh>
      </group>

      {/* MARWAH HILL - Larger rocky mountain */}
      <group position={[8, 0, 0]}>
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
        {/* Green marker sign */}
        <mesh position={[0, 6, 0]}>
          <boxGeometry args={[2, 1, 0.3]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.6} />
        </mesh>
        <pointLight position={[0, 6, 0]} intensity={1} color="#10B981" distance={8} />
        {/* "MARWAH" text area */}
        <mesh position={[0, 0.1, 3]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2, 16]} />
          <meshStandardMaterial color="#10B981" transparent opacity={0.3} />
        </mesh>
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
  </group>
);

// Muzdalifah
const Muzdalifah = () => {
  const pebbles = useMemo(() =>
    Array.from({ length: 40 }).map(() => ({
      pos: [(Math.random() - 0.5) * 12, 0.1, (Math.random() - 0.5) * 12],
      scale: 0.1 + Math.random() * 0.15
    })), []);

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
    </group>
  );
};

// Jamarat Pillars
const Jamarat = () => (
  <group position={[12, 0, -38]}>
    {[[-5, 3], [0, 4], [5, 5]].map(([x, h], i) => (
      <group key={i} position={[x, 0, 0]}>
        <mesh position={[0, h / 2, 0]} castShadow>
          <cylinderGeometry args={[0.6, 0.6, h, 16]} />
          <meshStandardMaterial color="#4A4A4A" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[2.5, 2, 0.4, 24]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
      </group>
    ))}
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

    {/* City buildings (simplified blocks) */}
    {Array.from({ length: 30 }).map((_, i) => {
      const angle = (i / 30) * Math.PI * 2;
      const dist = 50 + Math.random() * 20;
      const x = Math.sin(angle) * dist;
      const z = Math.cos(angle) * dist;
      const h = 3 + Math.random() * 8;
      return (
        <mesh key={i} position={[x, h/2, z]} castShadow>
          <boxGeometry args={[4, h, 4]} />
          <meshStandardMaterial color="#D4C4B0" roughness={0.7} />
        </mesh>
      );
    })}
  </group>
);

// Walking Pilgrim with Tawaf and Sa'i Animation
const WalkingPilgrim = ({ currentStep, steps, isWalking, onTawafCircuit, onSaiLap }) => {
  const groupRef = useRef();
  const [lookDirection, setLookDirection] = useState(0);
  const tawafAngleRef = useRef(Math.PI); // Start from back of Kaaba
  const [tawafCircuit, setTawafCircuit] = useState(0);
  const lastCircuitRef = useRef(0);
  const saiProgressRef = useRef(0); // 0-7 for Sa'i laps
  const [saiLap, setSaiLap] = useState(0);
  const [reachedDestination, setReachedDestination] = useState(false);
  const positionInitializedRef = useRef(false);

  // Sa'i positions (Safa Marwah is at [25, 0, 0])
  const SAFA_POS = [17, 0, 0];   // Safa at 25-8 = 17
  const MARWAH_POS = [33, 0, 0]; // Marwah at 25+8 = 33
  const TAWAF_RADIUS = 12; // Slightly larger radius for visibility
  const TAWAF_START = [0, 0, TAWAF_RADIUS]; // Start position on circle (front of Kaaba)

  // Check if current step is a Tawaf step
  const isTawafStep = currentStep < steps.length &&
    (steps[currentStep].id === 'tawaf' ||
     steps[currentStep].id === 'tawaf_ifadah' ||
     steps[currentStep].id === 'tawaf_wida');

  // Check if current step is Sa'i
  const isSaiStep = currentStep < steps.length && steps[currentStep].id === 'sai';

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
      setSaiLap(0);
    }
  }, [currentStep]);

  useFrame((state, delta) => {
    if (currentStep >= steps.length || !groupRef.current) return;

    const step = steps[currentStep];
    const pos = groupRef.current.position;

    // Initialize position from previous step (only once per step)
    if (!positionInitializedRef.current) {
      const prevPos = currentStep > 0 && steps[currentStep - 1]
        ? steps[currentStep - 1].position
        : steps[0]?.position || [-35, 0, 25];
      pos.set(prevPos[0], 0, prevPos[2]);
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
          setLookDirection(Math.atan2(dx, dz));
        }
      } else {
        // Reached the circle - start Tawaf
        if (!reachedDestination) {
          setReachedDestination(true);
          tawafAngleRef.current = 0;
        }

        if (isWalking && lastCircuitRef.current < 7) {
          const tawafSpeed = 2.5; // Faster speed for better experience (~17 seconds for 7 circuits)
          tawafAngleRef.current += tawafSpeed * delta;

          // Position on circle (counter-clockwise)
          pos.x = Math.sin(tawafAngleRef.current) * TAWAF_RADIUS;
          pos.z = Math.cos(tawafAngleRef.current) * TAWAF_RADIUS;

          // Face tangent direction (counter-clockwise movement)
          setLookDirection(tawafAngleRef.current + Math.PI / 2);

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
          setLookDirection(Math.atan2(dx, dz));
        }
      } else {
        // Reached Safa - start Sa'i
        if (!reachedDestination) {
          setReachedDestination(true);
          saiProgressRef.current = 0;
        }

        if (isWalking && saiLap < 7) {
          const saiSpeed = 10; // Slightly faster for smoother animation
          saiProgressRef.current += saiSpeed * delta;

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
          pos.z = 0;

          setLookDirection(goingToMarwah ? Math.PI / 2 : -Math.PI / 2);

          // Count completed laps (each direction = 1 lap)
          const completedLaps = currentLapNum;
          if (completedLaps > 0 && completedLaps > saiLap && completedLaps <= 7) {
            setSaiLap(completedLaps);
            onSaiLap?.(completedLaps);
          }
        }
      }
    } else {
      // Normal walking to step position
      const target = step.position;
      const dist = Math.sqrt(
        Math.pow(pos.x - target[0], 2) +
        Math.pow(pos.z - target[2], 2)
      );

      if (isWalking || dist > 0.5) {
        pos.x = THREE.MathUtils.lerp(pos.x, target[0], 0.05);
        pos.z = THREE.MathUtils.lerp(pos.z, target[2], 0.05);

        const dx = target[0] - pos.x;
        const dz = target[2] - pos.z;
        if (Math.abs(dx) > 0.1 || Math.abs(dz) > 0.1) {
          setLookDirection(Math.atan2(dx, dz));
        }
      }
    }
  });

  // Get starting position (previous step)
  const getInitialPosition = () => {
    if (currentStep > 0 && steps[currentStep - 1]) {
      return steps[currentStep - 1].position;
    }
    return steps[0]?.position || [-35, 0, 25];
  };

  const initialPos = getInitialPosition();

  return (
    <group ref={groupRef} position={initialPos}>
      {/* Main Pilgrim - Larger scale for visibility */}
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={3}
        isMoving={isWalking}
        lookDirection={lookDirection}
      />

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

      {/* Tawaf circuit counter floating above pilgrim */}
      {isTawafStep && (
        <Float speed={3} floatIntensity={0.5}>
          <group position={[0, 5, 0]}>
            {/* Circuit number indicator */}
            <mesh>
              <sphereGeometry args={[0.8, 16, 16]} />
              <meshStandardMaterial
                color={tawafCircuit >= 7 ? '#10B981' : '#FFD700'}
                emissive={tawafCircuit >= 7 ? '#10B981' : '#FFD700'}
                emissiveIntensity={0.6}
                transparent
                opacity={0.9}
              />
            </mesh>
            {/* Glow effect */}
            <mesh scale={1.3}>
              <sphereGeometry args={[0.8, 16, 16]} />
              <meshStandardMaterial
                color="#FFD700"
                transparent
                opacity={0.2}
              />
            </mesh>
          </group>
        </Float>
      )}

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
  );
};

// Camera Controller - Focuses on current step
const CameraController = ({ currentStep, steps, viewMode }) => {
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    if (currentStep >= steps.length) return;

    const step = steps[currentStep];
    let targetPos, lookAt;

    if (viewMode === 'birdseye') {
      // Bird's eye but centered on current step
      targetPos = new THREE.Vector3(
        step.position[0] * 0.3,
        50,
        step.position[2] * 0.3 + 30
      );
      lookAt = new THREE.Vector3(step.position[0] * 0.5, 0, step.position[2] * 0.5);
    } else {
      // Follow mode - closer to step
      targetPos = new THREE.Vector3(
        step.position[0] + 15,
        12,
        step.position[2] + 15
      );
      lookAt = new THREE.Vector3(step.position[0], 2, step.position[2]);
    }

    camera.position.lerp(targetPos, 0.025);
    targetRef.current.lerp(lookAt, 0.025);
    camera.lookAt(targetRef.current);
  });

  return null;
};

// Step Markers
const StepMarkers = ({ steps, currentStep }) => (
  <group>
    {steps.map((step, i) => {
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

// Main Scene
const PilgrimageScene = ({ journeyType, currentStep, isWalking, viewMode, onTawafCircuit, onSaiLap }) => {
  const steps = journeyType === 'umrah' ? UMRAH_STEPS : HAJJ_STEPS;

  // Check if current step is a Tawaf step
  const isTawafStep = currentStep < steps.length &&
    (steps[currentStep].id === 'tawaf' ||
     steps[currentStep].id === 'tawaf_ifadah' ||
     steps[currentStep].id === 'tawaf_wida');

  // Check if current step is Sa'i
  const isSaiStep = currentStep < steps.length && steps[currentStep].id === 'sai';

  return (
    <>
      {/* Enhanced lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[40, 80, 40]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={150}
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={80}
        shadow-camera-bottom={-80}
      />
      <directionalLight position={[-30, 50, -30]} intensity={0.5} color="#B4C5E4" />
      <hemisphereLight args={['#87CEEB', '#D4B896', 0.6]} />

      {/* Sky and atmosphere */}
      <Sky distance={450000} sunPosition={[100, 50, 100]} />
      <Stars radius={300} depth={100} count={3000} factor={4} fade speed={0.5} />
      <fog attach="fog" args={['#E8D5B7', 80, 250]} />

      {/* Enhanced dust particles */}
      <DustParticles count={200} area={100} color="#D4A574" />
      <Sparkles count={50} scale={100} size={1} speed={0.2} color="#FFE4B5" opacity={0.3} position={[0, 20, 0]} />

      {/* Clouds for atmosphere */}
      <Cloud position={[-40, 35, -60]} speed={0.1} opacity={0.15} />
      <Cloud position={[50, 40, -80]} speed={0.15} opacity={0.12} />
      <Cloud position={[0, 45, -100]} speed={0.08} opacity={0.1} />

      {/* Scene elements */}
      <Ground />
      <MasjidStructure />
      <Kaaba showTawafPath={isTawafStep && isWalking} />
      <MiqatStation />
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
        onTawafCircuit={onTawafCircuit}
        onSaiLap={onSaiLap}
      />
      <CameraController currentStep={currentStep} steps={steps} viewMode={viewMode} />

      {/* OrbitControls for mouse interaction */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={150}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, 0, 0]}
      />
    </>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const PilgrimageJourneyUnified = ({ journeyType = 'umrah', language = 'en', onComplete, onBack }) => {
  const steps = journeyType === 'umrah' ? UMRAH_STEPS : HAJJ_STEPS;
  const [currentStep, setCurrentStep] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [viewMode, setViewMode] = useState('birdseye');
  const [autoPlay, setAutoPlay] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const [tawafCircuitDisplay, setTawafCircuitDisplay] = useState(0);
  const [showTawafNotification, setShowTawafNotification] = useState(false);
  const [saiLapDisplay, setSaiLapDisplay] = useState(0);
  const [showSaiNotification, setShowSaiNotification] = useState(false);

  const isRTL = language === 'ar' || language === 'ur';
  const currentStepData = steps[currentStep];

  // Check if current step is Tawaf
  const isTawafStep = currentStepData &&
    (currentStepData.id === 'tawaf' ||
     currentStepData.id === 'tawaf_ifadah' ||
     currentStepData.id === 'tawaf_wida');

  // Check if current step is Sa'i
  const isSaiStep = currentStepData && currentStepData.id === 'sai';

  // Handle Tawaf circuit completion
  const handleTawafCircuit = useCallback((circuitNumber) => {
    setTawafCircuitDisplay(circuitNumber);
    playTawafCircuitSound(circuitNumber);
    setShowTawafNotification(true);
    setTimeout(() => setShowTawafNotification(false), 1500);
  }, []);

  // Handle Sa'i lap completion
  const handleSaiLap = useCallback((lapNumber) => {
    setSaiLapDisplay(lapNumber);
    playSaiLapSound(lapNumber);
    setShowSaiNotification(true);
    setTimeout(() => setShowSaiNotification(false), 1500);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudio();
      stopAmbientSound();
    };
  }, []);

  // Start ambient sound on mount (after user interaction)
  useEffect(() => {
    const startAmbient = () => {
      playAmbientSound();
      window.removeEventListener('click', startAmbient);
    };
    window.addEventListener('click', startAmbient);
    return () => window.removeEventListener('click', startAmbient);
  }, []);

  // Reset displays when step changes
  useEffect(() => {
    setTawafCircuitDisplay(0);
    setSaiLapDisplay(0);
  }, [currentStep]);

  // Auto-play logic - with special handling for Tawaf (7 circuits) and Sa'i (7 laps)
  useEffect(() => {
    if (autoPlay && currentStep < steps.length) {
      setIsWalking(true);
      playStepSound();

      // For Tawaf and Sa'i, we don't use a fixed timer
      // Instead, we wait for the animations to complete (tracked via tawafCircuitDisplay/saiLapDisplay)
      if (!isTawafStep && !isSaiStep) {
        // Normal step - use fixed timer
        const walkTimer = setTimeout(() => {
          setIsWalking(false);
          setShowDua(true);

          // Play dua audio
          if (currentStepData?.dua?.arabic) {
            playDuaAudio(currentStepData.dua.arabic);
          }

          const duaTimer = setTimeout(() => {
            setShowDua(false);
            if (currentStep < steps.length - 1) {
              setCurrentStep(prev => prev + 1);
            } else {
              setAutoPlay(false);
              playCompletionSound();
            }
          }, 5000);

          return () => clearTimeout(duaTimer);
        }, 3000);

        return () => clearTimeout(walkTimer);
      }
      // For Tawaf/Sa'i steps, walking continues until completion is detected in the separate effect below
    }
  }, [autoPlay, currentStep, steps.length, currentStepData, isTawafStep, isSaiStep]);

  // Effect to handle Tawaf completion during auto-play
  useEffect(() => {
    if (autoPlay && isTawafStep && tawafCircuitDisplay >= 7) {
      // Tawaf complete - stop walking and show dua
      setIsWalking(false);
      setShowDua(true);
      playCompletionSound();

      if (currentStepData?.dua?.arabic) {
        playDuaAudio(currentStepData.dua.arabic);
      }

      const duaTimer = setTimeout(() => {
        setShowDua(false);
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setAutoPlay(false);
        }
      }, 5000);

      return () => clearTimeout(duaTimer);
    }
  }, [autoPlay, isTawafStep, tawafCircuitDisplay, currentStepData, currentStep, steps.length]);

  // Effect to handle Sa'i completion during auto-play
  useEffect(() => {
    if (autoPlay && isSaiStep && saiLapDisplay >= 7) {
      // Sa'i complete - stop walking and show dua
      setIsWalking(false);
      setShowDua(true);
      playCompletionSound();

      if (currentStepData?.dua?.arabic) {
        playDuaAudio(currentStepData.dua.arabic);
      }

      const duaTimer = setTimeout(() => {
        setShowDua(false);
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setAutoPlay(false);
        }
      }, 5000);

      return () => clearTimeout(duaTimer);
    }
  }, [autoPlay, isSaiStep, saiLapDisplay, currentStepData, currentStep, steps.length]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setIsWalking(true);
      playStepSound();
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsWalking(false);
        setShowDua(true);
        if (steps[currentStep + 1]?.dua?.arabic) {
          playDuaAudio(steps[currentStep + 1].dua.arabic);
        }
        setTimeout(() => setShowDua(false), 4000);
      }, 2000);
    } else {
      playCompletionSound();
      onComplete?.();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const toggleAutoPlay = () => {
    if (autoPlay) {
      setAutoPlay(false);
      stopAudio();
    } else {
      setAutoPlay(true);
    }
  };

  const title = journeyType === 'umrah'
    ? { en: 'Umrah Journey', ur: 'عمرہ کا سفر', ar: 'رحلة العمرة' }
    : { en: 'Hajj Journey', ur: 'حج کا سفر', ar: 'رحلة الحج' };

  return (
    <div
      className="fixed inset-0 z-[10000] w-screen h-screen"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Canvas
        shadows
        camera={{ position: [5, 70, 35], fov: 60 }}
        dpr={[1, 2]}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <PilgrimageScene
            journeyType={journeyType}
            currentStep={currentStep}
            isWalking={isWalking}
            viewMode={viewMode}
            onTawafCircuit={handleTawafCircuit}
            onSaiLap={handleSaiLap}
          />
        </Suspense>
      </Canvas>

      {/* Tawaf Circuit Notification */}
      {showTawafNotification && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-pulse">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-8 py-4 rounded-full shadow-2xl text-2xl font-bold">
            🕋 {language === 'ar' ? `الشوط ${tawafCircuitDisplay}` : language === 'ur' ? `چکر ${tawafCircuitDisplay}` : `Circuit ${tawafCircuitDisplay}`} / 7
          </div>
        </div>
      )}

      {/* Sa'i Lap Notification */}
      {showSaiNotification && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-pulse">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full shadow-2xl text-2xl font-bold">
            🏃 {language === 'ar' ? `الشوط ${saiLapDisplay}` : language === 'ur' ? `چکر ${saiLapDisplay}` : `Lap ${saiLapDisplay}`} / 7
          </div>
        </div>
      )}

      {/* Compact Tawaf/Sa'i Progress - Top left */}
      {(isTawafStep || isSaiStep) && isWalking && (
        <div className="absolute top-20 left-3 z-30">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
            <span className="text-white/80 text-xs">
              {isTawafStep ? '🕋' : '🏃'} {isTawafStep ? (tawafCircuitDisplay || 0) : (saiLapDisplay || 0)}/7
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <div
                  key={n}
                  className={`w-4 h-4 rounded-full transition-all ${
                    n <= (isTawafStep ? tawafCircuitDisplay : saiLapDisplay)
                      ? isTawafStep ? 'bg-amber-400' : 'bg-blue-400'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
        <div className="flex items-center justify-between">
          <button
            onClick={() => { stopAudio(); onBack?.(); }}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
          >
            ← {language === 'ar' ? 'رجوع' : language === 'ur' ? 'واپس' : 'Back'}
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-white drop-shadow-lg" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {journeyType === 'umrah' ? '🕌' : '🕋'} {title[language]}
            </h1>
            <p className="text-white/80 text-sm">
              {language === 'ar' ? `الخطوة ${currentStep + 1} من ${steps.length}` :
               language === 'ur' ? `مرحلہ ${currentStep + 1} از ${steps.length}` :
               `Step ${currentStep + 1} of ${steps.length}`}
            </p>
          </div>

          <button
            onClick={() => setViewMode(viewMode === 'birdseye' ? 'follow' : 'birdseye')}
            className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm hover:bg-white/30"
          >
            {viewMode === 'birdseye' ? '👁️' : '🦅'}
          </button>
        </div>

        {/* Progress */}
        <div className="mt-3 flex justify-center gap-1.5 flex-wrap max-w-md mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`h-2 rounded-full transition-all ${
                i < currentStep ? 'bg-emerald-400 w-6' :
                i === currentStep ? 'w-10' : 'bg-white/30 w-6'
              }`}
              style={{ backgroundColor: i === currentStep ? step.color : undefined }}
            />
          ))}
        </div>
      </div>


      {/* Compact Step Info - Bottom Right */}
      {currentStepData && (
        <div className="absolute bottom-32 right-3 z-20 w-72 max-h-[40vh] overflow-y-auto">
          <div
            className="p-3 rounded-xl backdrop-blur-md border border-white/30 shadow-lg"
            style={{ backgroundColor: `${currentStepData.color}dd` }}
          >
            {/* Step number and name */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-sm">
                {currentStep + 1}
              </div>
              <h2 className="text-base font-bold text-white" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {currentStepData.name[language]}
              </h2>
            </div>
            {/* Dua */}
            <p className="text-white text-sm text-center mb-1 leading-relaxed" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
              {currentStepData.dua.arabic}
            </p>
            <p className="text-white/80 text-xs text-center mb-2" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {currentStepData.dua[language] || currentStepData.dua.en}
            </p>
            {/* Miqat Info - with line breaks */}
            {currentStepData.miqatInfo && (
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-yellow-200 text-xs whitespace-pre-line leading-relaxed" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                  📍 {currentStepData.miqatInfo[language] || currentStepData.miqatInfo.en}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent" style={{ direction: 'ltr' }}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={handlePrevStep}
            disabled={currentStep === 0 || isWalking}
            className={`px-5 py-2.5 rounded-full font-bold transition-all ${
              currentStep === 0 || isWalking ? 'bg-white/20 text-white/50' : 'bg-white/30 text-white hover:bg-white/40'
            }`}
          >
            ← Prev
          </button>

          <button
            onClick={toggleAutoPlay}
            className={`px-6 py-2.5 rounded-full font-bold transition-all ${
              autoPlay ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white hover:bg-emerald-600'
            }`}
          >
            {autoPlay ? '⏸️ Pause' : '▶️ Auto'}
          </button>

          <button
            onClick={handleNextStep}
            disabled={isWalking}
            className={`px-5 py-2.5 rounded-full font-bold transition-all ${
              isWalking ? 'bg-amber-500 text-white animate-pulse' :
              currentStep === steps.length - 1 ? 'bg-emerald-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            {isWalking ? '...' : currentStep === steps.length - 1 ? '✓ Done' : 'Next →'}
          </button>
        </div>

        {/* Quick nav */}
        <div className="flex justify-center gap-1.5 flex-wrap" style={{ direction: 'ltr' }}>
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => !isWalking && !autoPlay && setCurrentStep(i)}
              disabled={isWalking || autoPlay}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                i === currentStep ? 'text-white scale-110' :
                i < currentStep ? 'bg-emerald-500/50 text-white' : 'bg-white/20 text-white/70'
              }`}
              style={{ backgroundColor: i === currentStep ? step.color : undefined }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PilgrimageJourneyUnified;
