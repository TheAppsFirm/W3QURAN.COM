/**
 * TrainJourney.jsx
 * A 2D interactive train journey game for kids to learn Quran
 *
 * Features:
 * - Horizontal scrolling train journey through 114 surah stations
 * - Cute animated train with rotating wheels and smoke puffs
 * - Beautiful parallax background (sky, mountains, trees)
 * - Interactive stations with surah info (Makki/Madani coloring)
 * - Desktop and mobile controls
 * - Mini-map showing progress
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { SURAHS } from '../../data';
import { Icons } from '../common/Icons';
import { ARABIC_ALPHABET, playLetterSound } from './KidsMode';
import SurahTeacher from './SurahTeacher';
import KidsPremiumGate from './KidsPremiumGate';
import { MagicCarpet, Camel, GardenBackground, SeertBackground, Motorbike, RoadBackground } from './components';
import { SEERAH_EVENTS } from './data/seerahData';

// Free tier station limit (first 5 stations are free)
const FREE_STATION_LIMIT = 5;

// ============================================================================
// Speech Synthesis Priming (required for iOS/Safari)
// ============================================================================

let speechPrimed = false;
const primeSpeechSynthesis = () => {
  if (speechPrimed || typeof window === 'undefined' || !window.speechSynthesis) return;
  try {
    // Speak empty/silent utterance to "unlock" speech synthesis
    const utterance = new SpeechSynthesisUtterance('');
    utterance.volume = 0;
    window.speechSynthesis.speak(utterance);
    speechPrimed = true;
  } catch (e) {
    // Ignore errors
  }
};

// ============================================================================
// Surah Name Audio - Uses Speech Synthesis
// ============================================================================

// Play surah name — uses Google TTS for reliable Arabic audio
const playSurahName = (surah) => {
  if (!surah || !surah.arabic || surah.type === 'finish') return;
  if (typeof window === 'undefined') return;

  const text = `سورة ${surah.arabic}`;
  speakArabic(text);
};

// Kalima audio URLs from TheSufi.com
// Local audio files - stored in public/audio/kalimas/
const KALIMA_AUDIO_URLS = {
  1: '/audio/kalimas/kalima-1-tayyiba.mp3',
  2: '/audio/kalimas/kalima-2-shahadat.mp3',
  3: '/audio/kalimas/kalima-3-tamjeed.mp3',
  4: '/audio/kalimas/kalima-4-tawheed.mp3',
  5: '/audio/kalimas/kalima-5-istighfar.mp3',
  6: '/audio/kalimas/kalima-6-radde-kufr.mp3',
};

// Cache for audio elements
const kalimaAudioCache = {};

// Global audio state controller
let currentKalimaAudio = null;
let kalimaAudioListeners = [];

// Subscribe to audio state changes
const subscribeToKalimaAudio = (callback) => {
  kalimaAudioListeners.push(callback);
  return () => {
    kalimaAudioListeners = kalimaAudioListeners.filter(cb => cb !== callback);
  };
};

// Notify all listeners
const notifyKalimaListeners = (state) => {
  kalimaAudioListeners.forEach(cb => cb(state));
};

// Play kalima audio with state management
const playKalimaAudio = (kalima) => {
  if (!kalima || !kalima.id) return null;

  const url = KALIMA_AUDIO_URLS[kalima.id];
  if (!url) return null;

  try {
    // Stop any currently playing kalima audio
    if (currentKalimaAudio && !currentKalimaAudio.paused) {
      currentKalimaAudio.pause();
      currentKalimaAudio.currentTime = 0;
    }

    // Use cached audio or create new
    if (!kalimaAudioCache[kalima.id]) {
      kalimaAudioCache[kalima.id] = new Audio(url);
    }

    const audio = kalimaAudioCache[kalima.id];
    currentKalimaAudio = audio;

    audio.currentTime = 0;
    audio.play().then(() => {
      notifyKalimaListeners({ playing: true, kalimaId: kalima.id });
    }).catch(e => {
      console.log('Kalima audio playback failed:', e);
    });

    // Handle audio end
    audio.onended = () => {
      notifyKalimaListeners({ playing: false, kalimaId: kalima.id });
    };

    return audio;
  } catch (e) {
    console.log('Kalima audio not available:', e);
    return null;
  }
};

// Pause kalima audio
const pauseKalimaAudio = () => {
  if (currentKalimaAudio && !currentKalimaAudio.paused) {
    currentKalimaAudio.pause();
    notifyKalimaListeners({ playing: false, paused: true });
  }
};

// Resume kalima audio
const resumeKalimaAudio = () => {
  if (currentKalimaAudio && currentKalimaAudio.paused) {
    currentKalimaAudio.play().catch(() => {});
    notifyKalimaListeners({ playing: true });
  }
};

// Get current audio state
const getKalimaAudioState = () => {
  if (!currentKalimaAudio) return { playing: false, currentTime: 0, duration: 0 };
  return {
    playing: !currentKalimaAudio.paused,
    currentTime: currentKalimaAudio.currentTime,
    duration: currentKalimaAudio.duration || 0,
  };
};

// ============================================================================
// Constants & Configuration
// ============================================================================

// Dynamic config based on mode
const getConfig = (mode) => {
  if (mode === 'alphabet') {
    return {
      TRACK_WIDTH: 29 * 250, // 28 letters + 1 finish station
      STATION_SPACING: 250,
      STATION_COUNT: 29, // 28 letters + finish station
    };
  }
  if (mode === 'kalimas') {
    return {
      TRACK_WIDTH: 7 * 400, // 6 kalimas + 1 finish station
      STATION_SPACING: 400,
      STATION_COUNT: 7, // 6 kalimas + finish station
    };
  }
  if (mode === 'seert') {
    return {
      TRACK_WIDTH: 17 * 350, // 16 events + 1 finish station
      STATION_SPACING: 350,
      STATION_COUNT: 17, // 16 events + finish station
    };
  }
  // Default: surahs mode
  return {
    TRACK_WIDTH: 114 * 200,
    STATION_SPACING: 200,
    STATION_COUNT: 114,
  };
};

const TRAIN_WIDTH = 180;
const TRAIN_HEIGHT = 80;
const MAX_SPEED = 15;
const ACCELERATION = 0.8;
const DECELERATION = 0.5;
const FRICTION = 0.95;

// Colors for Makki (green) and Madani (blue) surahs
const STATION_COLORS = {
  Makki: {
    primary: '#10B981',    // Emerald
    secondary: '#059669',
    glow: 'rgba(16, 185, 129, 0.5)',
    bg: 'linear-gradient(135deg, #10B981, #047857)',
  },
  Madani: {
    primary: '#3B82F6',    // Blue
    secondary: '#2563EB',
    glow: 'rgba(59, 130, 246, 0.5)',
    bg: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
  },
};

// Beautiful gradient colors for alphabet letters (14 colors, cycling)
const ALPHABET_COLORS = [
  { primary: '#F43F5E', secondary: '#E11D48', glow: 'rgba(244, 63, 94, 0.5)', bg: 'linear-gradient(135deg, #F43F5E, #BE123C)' },
  { primary: '#EC4899', secondary: '#DB2777', glow: 'rgba(236, 72, 153, 0.5)', bg: 'linear-gradient(135deg, #EC4899, #BE185D)' },
  { primary: '#A855F7', secondary: '#9333EA', glow: 'rgba(168, 85, 247, 0.5)', bg: 'linear-gradient(135deg, #A855F7, #7E22CE)' },
  { primary: '#8B5CF6', secondary: '#7C3AED', glow: 'rgba(139, 92, 246, 0.5)', bg: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' },
  { primary: '#6366F1', secondary: '#4F46E5', glow: 'rgba(99, 102, 241, 0.5)', bg: 'linear-gradient(135deg, #6366F1, #4338CA)' },
  { primary: '#3B82F6', secondary: '#2563EB', glow: 'rgba(59, 130, 246, 0.5)', bg: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' },
  { primary: '#0EA5E9', secondary: '#0284C7', glow: 'rgba(14, 165, 233, 0.5)', bg: 'linear-gradient(135deg, #0EA5E9, #0369A1)' },
  { primary: '#14B8A6', secondary: '#0D9488', glow: 'rgba(20, 184, 166, 0.5)', bg: 'linear-gradient(135deg, #14B8A6, #0F766E)' },
  { primary: '#10B981', secondary: '#059669', glow: 'rgba(16, 185, 129, 0.5)', bg: 'linear-gradient(135deg, #10B981, #047857)' },
  { primary: '#22C55E', secondary: '#16A34A', glow: 'rgba(34, 197, 94, 0.5)', bg: 'linear-gradient(135deg, #22C55E, #15803D)' },
  { primary: '#84CC16', secondary: '#65A30D', glow: 'rgba(132, 204, 22, 0.5)', bg: 'linear-gradient(135deg, #84CC16, #4D7C0F)' },
  { primary: '#EAB308', secondary: '#CA8A04', glow: 'rgba(234, 179, 8, 0.5)', bg: 'linear-gradient(135deg, #EAB308, #A16207)' },
  { primary: '#F59E0B', secondary: '#D97706', glow: 'rgba(245, 158, 11, 0.5)', bg: 'linear-gradient(135deg, #F59E0B, #B45309)' },
  { primary: '#F97316', secondary: '#EA580C', glow: 'rgba(249, 115, 22, 0.5)', bg: 'linear-gradient(135deg, #F97316, #C2410C)' },
];

// Six Kalimas of Islam - Stage 2 content
const SIX_KALIMAS = [
  {
    id: 1,
    name: 'Kalima Tayyiba',
    nameAr: 'كلمة الطيبة',
    meaning: 'Word of Purity',
    arabic: 'لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ',
    transliteration: 'La ilaha illallah Muhammadur Rasulullah',
    translation: 'There is no god but Allah, Muhammad is the Messenger of Allah',
    urdu: 'اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں',
    color: '#10B981',
    wordCount: 6,
    audioDuration: 8, // seconds
  },
  {
    id: 2,
    name: 'Kalima Shahadat',
    nameAr: 'كلمة الشهادة',
    meaning: 'Word of Testimony',
    arabic: 'أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: 'Ashhadu alla ilaha illallah wahdahu la sharika lahu wa ashhadu anna Muhammadan abduhu wa rasuluhu',
    translation: 'I bear witness that there is no god but Allah, He is One and has no partner, and I bear witness that Muhammad is His servant and Messenger',
    urdu: 'میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں',
    color: '#3B82F6',
    wordCount: 18,
    audioDuration: 15,
  },
  {
    id: 3,
    name: 'Kalima Tamjeed',
    nameAr: 'كلمة التمجيد',
    meaning: 'Word of Glorification',
    arabic: 'سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ',
    transliteration: 'Subhanallahi wal hamdu lillahi wa la ilaha illallahu wallahu akbar wa la hawla wa la quwwata illa billahil aliyyil azeem',
    translation: 'Glory be to Allah, all praise be to Allah, there is no god but Allah, Allah is the Greatest, and there is no power or strength except with Allah, the Most High, the Most Great',
    urdu: 'اللہ پاک ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے، اور طاقت اور قوت نہیں مگر اللہ بلند و برتر کی مدد سے',
    color: '#8B5CF6',
    wordCount: 19,
    audioDuration: 18,
  },
  {
    id: 4,
    name: 'Kalima Tawheed',
    nameAr: 'كلمة التوحيد',
    meaning: 'Word of Oneness',
    arabic: 'لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا ذُو الْجَلَالِ وَالْإِكْرَامِ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'La ilaha illallahu wahdahu la sharika lahu lahul mulku wa lahul hamdu yuhyi wa yumitu wa huwa hayyun la yamutu abadan abada dhul jalali wal ikram biyadihil khair wa huwa ala kulli shayin qadir',
    translation: 'There is no god but Allah, He is One, He has no partner, His is the Kingdom and for Him is all praise, He gives life and causes death, He is Living and will never die, Owner of Majesty and Honour, in His hand is all good, and He has power over everything',
    urdu: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، بادشاہی اسی کی ہے، تعریف اسی کی ہے، وہی زندہ کرتا ہے اور مارتا ہے، وہ زندہ ہے کبھی نہیں مرے گا، عزت اور بزرگی والا ہے، اس کے ہاتھ میں بھلائی ہے، وہ ہر چیز پر قادر ہے',
    color: '#F59E0B',
    wordCount: 30,
    audioDuration: 25,
  },
  {
    id: 5,
    name: 'Kalima Astaghfar',
    nameAr: 'كلمة الاستغفار',
    meaning: 'Word of Seeking Forgiveness',
    arabic: 'أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمَدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ',
    transliteration: 'Astaghfirullaha rabbi min kulli dhambin adhnabtuhu amadan aw khata-an sirran aw alaniyatan wa atubu ilaihi minadh dhambil ladhi a\'lamu wa minadh dhambil ladhi la a\'lamu innaka anta allamul ghuyubi wa sattarul uyubi wa ghaffarudh dhunubi wa la hawla wa la quwwata illa billahil aliyyil azeem',
    translation: 'I seek forgiveness from Allah, my Lord, for every sin I committed knowingly or unknowingly, secretly or openly, and I turn to Him in repentance for the sins I know and for the sins I do not know. You are the Knower of the unseen, the Concealer of faults, the Forgiver of sins, and there is no power or strength except with Allah, the Most High, the Most Great',
    urdu: 'میں اللہ سے معافی مانگتا ہوں جو میرا رب ہے، ہر اس گناہ سے جو میں نے کیا، جان بوجھ کر یا غلطی سے، چھپ کر یا کھلے عام، اور میں اس کی طرف توبہ کرتا ہوں ان گناہوں سے جو میں جانتا ہوں اور جو نہیں جانتا۔ بے شک تو عیبوں کو چھپانے والا، گناہوں کو بخشنے والا ہے، اور کوئی طاقت نہیں مگر اللہ بلند و برتر سے',
    color: '#EC4899',
    wordCount: 42,
    audioDuration: 35,
  },
  {
    id: 6,
    name: 'Kalima Radde Kufr',
    nameAr: 'كلمة رد الكفر',
    meaning: 'Word of Rejecting Disbelief',
    arabic: 'اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنْ كُلِّ دِينٍ سِوَى دِينِ الْإِسْلَامِ وَأَسْلَمْتُ وَأَقُولُ لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ',
    transliteration: 'Allahumma inni a\'udhu bika min an ushrika bika shay-an wa ana a\'lamu wa astaghfiruka lima la a\'lamu innaka anta allamul ghuyub tubtu anhu wa tabarra\'tu min kulli dinin siwa dinil Islam wa aslamtu wa aqulu la ilaha illallahu Muhammadur Rasulullah',
    translation: 'O Allah! I seek refuge in You from associating anything with You knowingly, and I seek Your forgiveness for what I do not know. You are the Knower of the unseen. I repent from it and I free myself from every religion other than Islam, and I submit and I say there is no god but Allah, Muhammad is the Messenger of Allah',
    urdu: 'اے اللہ! میں تیری پناہ چاہتا ہوں اس سے کہ تیرے ساتھ کسی کو شریک کروں جانتے ہوئے، اور معافی مانگتا ہوں اس سے جو نہیں جانتا۔ بے شک تو غیب کا جاننے والا ہے۔ میں نے اس سے توبہ کی اور ہر دین سے بیزاری کی سوائے اسلام کے، اور میں نے اسلام قبول کیا، اور کہتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں',
    color: '#06B6D4',
    wordCount: 35,
    audioDuration: 30,
  },
];

// ============================================================================
// Celebration/Fireworks Component
// ============================================================================

const CelebrationModal = ({ isVisible, onClose, onNextStage, completedStage }) => {
  const [fireworks, setFireworks] = useState([]);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (isVisible) {
      // Generate fireworks
      const newFireworks = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60 + 10,
        color: ['#F43F5E', '#EC4899', '#A855F7', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 7)],
        delay: Math.random() * 2,
        size: Math.random() * 20 + 10,
      }));
      setFireworks(newFireworks);

      // Generate confetti
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: ['#F43F5E', '#EC4899', '#A855F7', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#FBBF24'][Math.floor(Math.random() * 8)],
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 3,
        rotation: Math.random() * 360,
      }));
      setConfetti(newConfetti);

      // Play celebration sound
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        // Play a happy celebration melody
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C (major chord arpeggio)
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.15);
          gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * 0.15 + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.15);
          osc.stop(ctx.currentTime + i * 0.15 + 0.6);
        });
      } catch (e) {}
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Fireworks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fireworks.map((fw) => (
          <div
            key={fw.id}
            className="absolute animate-ping"
            style={{
              left: `${fw.x}%`,
              top: `${fw.y}%`,
              animationDelay: `${fw.delay}s`,
              animationDuration: '1s',
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: fw.size,
                height: fw.size,
                backgroundColor: fw.color,
                boxShadow: `0 0 ${fw.size * 2}px ${fw.color}`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((c) => (
          <div
            key={c.id}
            className="absolute w-3 h-3"
            style={{
              left: `${c.x}%`,
              top: '-5%',
              backgroundColor: c.color,
              transform: `rotate(${c.rotation}deg)`,
              animation: `confettiFall ${c.duration}s ease-in ${c.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Celebration Card */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-1 shadow-2xl animate-bounce-slow mx-4">
        <div className="bg-white rounded-3xl p-6 sm:p-8 text-center max-w-md">
          {/* Trophy/Star */}
          <div className="text-6xl sm:text-8xl mb-4 animate-pulse">🏆</div>

          {/* Congratulations text */}
          <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">
            Masha'Allah!
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            ماشاء اللہ
          </h2>

          <p className="text-gray-600 mb-4">
            {completedStage === 'alphabet'
              ? 'You have completed all 28 Arabic Letters!'
              : completedStage === 'kalimas'
                ? 'You have memorized all 6 Kalimas!'
                : 'You have completed this stage!'}
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((star) => (
              <span key={star} className="text-3xl sm:text-4xl animate-spin-slow" style={{ animationDelay: `${star * 0.2}s` }}>
                ⭐
              </span>
            ))}
          </div>

          {/* Next stage button - Alphabet → Kalimas */}
          {completedStage === 'alphabet' && (
            <button
              onClick={onNextStage}
              className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all mb-3"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Continue to Six Kalimas</span>
                <span>→</span>
              </span>
              <span className="text-sm opacity-80">Stage 2</span>
            </button>
          )}

          {/* Next stage button - Kalimas → Surahs */}
          {completedStage === 'kalimas' && (
            <button
              onClick={onNextStage}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all mb-3"
            >
              <span className="flex items-center justify-center gap-2">
                <span>🕌 Learn Surahs</span>
                <span>→</span>
              </span>
              <span className="text-sm opacity-80">Stage 3</span>
            </button>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full py-2 px-6 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-all"
          >
            {completedStage === 'alphabet' || completedStage === 'kalimas' ? 'Practice Again' : 'Close'}
          </button>
        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

// ============================================================================
// Arabic Letter Writing Animation - RTL reveal with pen at edge
// ============================================================================

const ArabicLetterWritingAnimation = ({ letter, color, isPlaying, onReplay }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isDone, setIsDone] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) {
      setProgress(100);
      setIsDone(true);
      return;
    }

    // Reset
    setProgress(0);
    setIsDone(false);

    const duration = 2000; // 2 seconds to write
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      if (p < 100) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsDone(true);
      }
    };

    // Small delay before starting
    const timer = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, animationKey]);

  const handleReplay = () => {
    setAnimationKey(prev => prev + 1);
    if (onReplay) onReplay();
  };

  // Pen position calculation for RTL writing:
  // - Arabic writes RIGHT to LEFT
  // - clipPath: inset(0 0 0 X%) clips from LEFT, reveals from RIGHT
  // - At progress=0: clip=100% from left, nothing visible, pen at RIGHT (90%)
  // - At progress=100: clip=0%, fully visible, pen at LEFT (10%)
  const clipFromLeft = 100 - progress; // 100→0 as progress 0→100
  const penX = 90 - (progress * 0.8); // 90%→10% as progress 0→100
  const penY = 50; // Center vertically

  return (
    <div className="flex flex-col items-center">
      <div className="text-xs text-gray-500 mb-1">✍️ Write:</div>
      <div className="relative w-20 h-24 bg-gradient-to-b from-gray-50 to-white rounded-xl border-2 border-gray-300 overflow-hidden shadow-inner">
        {/* Notebook lines */}
        <div className="absolute inset-x-2 top-[30%] h-px bg-blue-200/50" />
        <div className="absolute inset-x-2 top-[60%] h-px bg-blue-200/50" />

        {/* Faint letter guide */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-5xl select-none"
            style={{
              fontFamily: "'Scheherazade New', serif",
              color: `${color}20`,
            }}
          >
            {letter}
          </span>
        </div>

        {/* Letter being revealed - clips from LEFT, reveals from RIGHT (RTL) */}
        {/* inset(top right bottom left) */}
        <div
          key={`letter-${animationKey}`}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            clipPath: `inset(0 0 0 ${clipFromLeft}%)`,
          }}
        >
          <span
            className="text-5xl select-none drop-shadow-sm"
            style={{
              fontFamily: "'Scheherazade New', serif",
              color: color,
            }}
          >
            {letter}
          </span>
        </div>

        {/* Pen at the reveal edge - moves RIGHT to LEFT */}
        {!isDone && progress > 0 && progress < 100 && (
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: `${penX}%`,
              top: `${penY}%`,
              transform: 'translate(-50%, -50%) rotate(-45deg)',
            }}
          >
            <span className="text-lg drop-shadow">✏️</span>
          </div>
        )}

        {/* Small sparkle on completion */}
        {isDone && (
          <div className="absolute top-1 right-1 text-xs">✨</div>
        )}

        {/* Replay button */}
        <button
          onClick={handleReplay}
          className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-sm hover:scale-110 active:scale-95 transition-transform z-10"
          title="Replay"
        >
          🔄
        </button>
      </div>

    </div>
  );
};

// ============================================================================
// Alphabet Learning Card - Complete learning with levels, forms & examples
// ============================================================================

// Helper function to speak Arabic text using Speech Synthesis
// Uses the same reliable pattern as playSurahName above
// Cached audio element for TTS playback
let ttsAudioElement = null;

const speakArabic = (text) => {
  if (!text || typeof window === 'undefined') return;

  // Strategy 1: Try Google TTS via the app's /api/tts proxy (most reliable for Arabic)
  const tryGoogleTTS = () => {
    try {
      if (ttsAudioElement) {
        ttsAudioElement.pause();
        ttsAudioElement.removeAttribute('src');
        ttsAudioElement = null;
      }
      const ttsUrl = `/api/tts?text=${encodeURIComponent(text)}&lang=ar`;
      ttsAudioElement = new Audio();
      ttsAudioElement.volume = 1.0;
      ttsAudioElement.preload = 'auto';

      // Wait for audio to be ready before playing
      ttsAudioElement.oncanplaythrough = () => {
        ttsAudioElement.play().catch(e => {
          console.log('Google TTS play failed:', e);
          trySpeechSynthesis();
        });
      };
      ttsAudioElement.onerror = (e) => {
        console.log('Google TTS load error, trying speechSynthesis:', e);
        trySpeechSynthesis();
      };
      ttsAudioElement.src = ttsUrl;
      ttsAudioElement.load();
    } catch (e) {
      console.log('Google TTS error, trying speechSynthesis:', e);
      trySpeechSynthesis();
    }
  };

  // Strategy 2: Fallback to Web Speech API
  const trySpeechSynthesis = () => {
    if (!window.speechSynthesis) return;

    primeSpeechSynthesis();

    const doSpeak = () => {
      try {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        const voices = window.speechSynthesis.getVoices();
        const arabicVoice = voices.find(v =>
          v.lang === 'ar-SA' || v.lang === 'ar-AE' || v.lang.startsWith('ar')
        );

        if (arabicVoice) {
          utterance.voice = arabicVoice;
        }

        utterance.lang = 'ar-SA';
        utterance.rate = 0.6;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.log('speakArabic speech synthesis error:', err);
      }
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      doSpeak();
    } else {
      window.speechSynthesis.addEventListener('voiceschanged', () => doSpeak(), { once: true });
      setTimeout(doSpeak, 300);
    }
  };

  // Try Google TTS first (works reliably for Arabic on all browsers)
  tryGoogleTTS();
};

const AlphabetLearningCard = ({ station, visitedCount, color, onPlaySound }) => {
  const [isWritingPlaying, setIsWritingPlaying] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(1); // 1-4 levels
  const [completedLevels, setCompletedLevels] = useState([]);

  // Harakat (diacritical marks) with the letter
  const harakat = useMemo(() => {
    const letter = station?.letter || 'ا';
    return [
      { name: 'Zabar', nameAr: 'زَبَر', mark: 'َ', example: letter + 'َ', sound: 'a' },
      { name: 'Zeer', nameAr: 'زِیر', mark: 'ِ', example: letter + 'ِ', sound: 'i' },
      { name: 'Pesh', nameAr: 'پیش', mark: 'ُ', example: letter + 'ُ', sound: 'u' },
      { name: 'Jazm', nameAr: 'جزم', mark: 'ْ', example: letter + 'ْ', sound: '' },
      { name: 'Shadda', nameAr: 'شدّہ', mark: 'ّ', example: letter + 'ّ', sound: 'double' },
      { name: 'Tanween', nameAr: 'تنوین', mark: 'ً', example: letter + 'ً', sound: 'an' },
    ];
  }, [station?.letter]);

  // Complete current level and move to next
  const completeLevel = useCallback(() => {
    if (!completedLevels.includes(currentLevel)) {
      setCompletedLevels(prev => [...prev, currentLevel]);
    }
    if (currentLevel < 4) {
      setCurrentLevel(prev => prev + 1);
    }
  }, [currentLevel, completedLevels]);

  if (!station) return null;

  const levels = [
    { id: 1, name: 'Letter', icon: '📝' },
    { id: 2, name: 'Forms', icon: '✨' },
    { id: 3, name: 'Harakat', icon: '📖' },
    { id: 4, name: 'Word', icon: '🎯' },
  ];

  return (
    <div
      className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-4 animate-fadeIn overflow-hidden max-w-md"
      style={{ borderColor: color.primary }}
    >
      {/* Header with progress & stars */}
      <div
        className="px-4 py-2 flex items-center justify-between"
        style={{ background: color.bg }}
      >
        <div className="flex items-center gap-2 text-white">
          <span className="text-lg">🚂</span>
          <span className="font-bold">Stage 1</span>
        </div>
        {/* Stars for completed levels */}
        <div className="flex gap-0.5">
          {[1, 2, 3, 4].map(l => (
            <span key={l} className={`text-lg ${completedLevels.includes(l) ? '' : 'opacity-30'}`}>
              {completedLevels.includes(l) ? '⭐' : '☆'}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white/90 text-sm">
          <span>{visitedCount}/28</span>
        </div>
      </div>

      {/* Level tabs */}
      <div className="flex border-b bg-gray-50">
        {levels.map(level => (
          <button
            key={level.id}
            onClick={() => setCurrentLevel(level.id)}
            className={`flex-1 py-2 px-1 text-xs font-medium transition-all flex flex-col items-center gap-0.5
              ${currentLevel === level.id ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}
              ${completedLevels.includes(level.id) ? 'border-b-2 border-green-500' : ''}
            `}
          >
            <span>{level.icon}</span>
            <span className="hidden sm:inline">{level.name}</span>
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Level 1: Learn the Letter */}
        {currentLevel === 1 && (
          <div className="animate-fadeIn space-y-4">
            <div className="flex items-start justify-center gap-4">
              {/* Big letter */}
              <div
                className="w-24 h-28 rounded-2xl flex items-center justify-center text-white shadow-2xl relative flex-shrink-0"
                style={{ background: color.bg }}
              >
                <div className="absolute inset-0 bg-white/10 animate-pulse rounded-2xl" />
                <span className="text-6xl font-arabic drop-shadow-lg relative z-10" style={{ fontFamily: "'Scheherazade New', serif" }}>
                  {station.letter}
                </span>
              </div>
              {/* Info */}
              <div className="flex flex-col flex-1">
                <div className="text-xl font-bold text-gray-800">{station.name}</div>
                <div className="text-lg font-arabic text-gray-600">{station.nameAr}</div>
                <div className="text-xs text-gray-500">Letter #{(station.index || 0) + 1}</div>
                <button
                  onClick={onPlaySound}
                  className="mt-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-1"
                >
                  <span>🔊</span> Sound
                </button>
              </div>
              {/* Writing */}
              <ArabicLetterWritingAnimation letter={station.letter} color={color.primary} isPlaying={isWritingPlaying} onReplay={() => setIsWritingPlaying(p => !p)} />
            </div>
            <button onClick={completeLevel} className="w-full py-2.5 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold shadow-lg hover:scale-[1.02] transition-transform">
              Next: Letter Forms →
            </button>
          </div>
        )}

        {/* Level 2: Letter Forms (Positions) */}
        {currentLevel === 2 && (
          <div className="animate-fadeIn space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">Letter Forms ✨</h3>
              <p className="text-xs text-gray-500">Tap each form to hear it</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: 'isolated', label: 'Alone', labelAr: 'مفرد' },
                { key: 'initial', label: 'Start', labelAr: 'أول' },
                { key: 'medial', label: 'Middle', labelAr: 'وسط' },
                { key: 'final', label: 'End', labelAr: 'آخر' },
              ].map(form => (
                <div
                  key={form.key}
                  className="bg-gray-50 rounded-xl p-3 text-center border-2 border-transparent hover:border-purple-300 transition-all cursor-pointer active:scale-95"
                  onClick={() => speakArabic(station.forms?.[form.key] || station.letter)}
                >
                  <div className="text-4xl font-arabic mb-1" style={{ color: color.primary, fontFamily: "'Scheherazade New', serif" }}>
                    {station.forms?.[form.key] || station.letter}
                  </div>
                  <div className="text-[10px] font-bold text-gray-700">{form.label}</div>
                  <div className="text-[10px] text-gray-400 font-arabic">{form.labelAr}</div>
                </div>
              ))}
            </div>
            <button onClick={completeLevel} className="w-full py-2.5 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold shadow-lg hover:scale-[1.02] transition-transform">
              Next: Harakat →
            </button>
          </div>
        )}

        {/* Level 3: Harakat */}
        {currentLevel === 3 && (
          <div className="animate-fadeIn space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">Harakat 📖</h3>
              <p className="text-xs text-gray-500">Diacritical marks - tap to hear</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {harakat.map((h, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer active:scale-95"
                  onClick={() => speakArabic(h.example)}
                >
                  <div className="text-2xl font-arabic mb-0.5" style={{ color: color.primary, fontFamily: "'Scheherazade New', serif" }}>
                    {h.example}
                  </div>
                  <div className="text-[10px] text-gray-600 font-medium">{h.name}</div>
                  <div className="text-[10px] text-gray-400 font-arabic">{h.nameAr}</div>
                </div>
              ))}
            </div>
            <button onClick={completeLevel} className="w-full py-2.5 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold shadow-lg hover:scale-[1.02] transition-transform">
              Next: Example Word →
            </button>
          </div>
        )}

        {/* Level 4: Example Word */}
        {currentLevel === 4 && (
          <div className="animate-fadeIn space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">Example Word 🎯</h3>
              <p className="text-xs text-gray-500">A word using this letter</p>
            </div>
            {station.example ? (
              <div
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 text-center border-2 cursor-pointer active:scale-95 transition-transform"
                style={{ borderColor: color.primary + '40' }}
                onClick={() => speakArabic(station.example.word)}
              >
                <div className="text-5xl mb-2">{station.example.emoji}</div>
                <div className="text-4xl font-arabic mb-2" style={{ color: color.primary, fontFamily: "'Scheherazade New', serif" }}>
                  {station.example.word}
                </div>
                <div className="text-lg font-bold text-gray-700">{station.example.meaning}</div>
                <div className="mt-2 text-sm text-gray-500">Tap to hear 🔊</div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-4 text-center text-gray-500">
                Example word coming soon!
              </div>
            )}
            {/* Completion celebration */}
            {completedLevels.length >= 3 && (
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">🎉</div>
                <div className="font-bold text-green-700">Letter Complete!</div>
                <div className="flex justify-center gap-1 mt-1">
                  {[1, 2, 3, 4].map(s => <span key={s} className="text-xl">⭐</span>)}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// Kalima Learning Card - Interactive learning with word highlighting
// ============================================================================

const KalimaLearningCard = ({ kalima, visitedCount, totalCount, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [learningMode, setLearningMode] = useState('listen'); // 'listen', 'repeat', 'practice'
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [showRepeatPrompt, setShowRepeatPrompt] = useState(false);
  const audioRef = useRef(null);
  const wordTimerRef = useRef(null);

  // Split Arabic text into words for highlighting
  const arabicWords = useMemo(() => {
    if (!kalima?.arabic) return [];
    return kalima.arabic.split(/\s+/);
  }, [kalima?.arabic]);

  // Cleanup on unmount or kalima change
  useEffect(() => {
    return () => {
      if (wordTimerRef.current) clearInterval(wordTimerRef.current);
      pauseKalimaAudio();
    };
  }, [kalima?.id]);

  // Subscribe to audio state changes
  useEffect(() => {
    const unsubscribe = subscribeToKalimaAudio((state) => {
      setIsPlaying(state.playing);
      // When audio stops (not just paused), clear highlighting
      if (!state.playing) {
        // Clear the word timer to stop highlighting
        if (wordTimerRef.current) {
          clearInterval(wordTimerRef.current);
          wordTimerRef.current = null;
        }
        setCurrentWordIndex(-1);
        // Show repeat prompt if in repeat mode and audio finished naturally
        if (!state.paused && learningMode === 'repeat') {
          setShowRepeatPrompt(true);
        }
      }
    });
    return unsubscribe;
  }, [learningMode]);

  // Handle play
  const handlePlay = () => {
    if (isPaused) {
      resumeKalimaAudio();
      setIsPaused(false);
      startWordHighlighting();
    } else {
      const audio = playKalimaAudio(kalima);
      if (audio) {
        audioRef.current = audio;
        setShowRepeatPrompt(false);
        startWordHighlighting();
      }
    }
  };

  // Handle pause
  const handlePause = () => {
    pauseKalimaAudio();
    setIsPaused(true);
    if (wordTimerRef.current) clearInterval(wordTimerRef.current);
  };

  // Start word highlighting animation - uses audioDuration for accurate timing
  const startWordHighlighting = () => {
    if (wordTimerRef.current) clearInterval(wordTimerRef.current);

    const totalWords = arabicWords.length;
    if (totalWords === 0) return;

    // Start from beginning
    setCurrentWordIndex(0);

    // Calculate interval based on actual audio duration
    // audioDuration is in seconds, we want milliseconds per word
    const audioDurationMs = (kalima.audioDuration || 15) * 1000;
    // Leave some buffer at the end (10%)
    const effectiveDuration = audioDurationMs * 0.9;
    // Time per word
    const intervalTime = Math.floor(effectiveDuration / totalWords);

    wordTimerRef.current = setInterval(() => {
      setCurrentWordIndex(prev => {
        if (prev >= totalWords - 1) {
          clearInterval(wordTimerRef.current);
          return -1;
        }
        return prev + 1;
      });
    }, intervalTime);
  };

  // Handle repeat mode - give user time to repeat
  const handleRepeatMode = () => {
    setLearningMode('repeat');
    setShowRepeatPrompt(false);
    handlePlay();
  };

  if (!kalima) return null;

  return (
    <div
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-3 animate-fadeIn max-w-lg w-full mx-2 max-h-[70vh] flex flex-col"
      style={{ borderColor: kalima.color, borderWidth: '3px' }}
    >
      {/* Header with progress - fixed */}
      <div
        className="rounded-t-xl px-3 py-1.5 flex items-center justify-between flex-shrink-0"
        style={{ background: kalima.color }}
      >
        <div className="flex items-center gap-1.5 text-white">
          <span className="text-sm">📿</span>
          <span className="font-bold text-sm">Stage 2</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/90 text-xs">
          <span>{visitedCount}/{totalCount}</span>
          <span>{visitedCount === totalCount ? '🏆' : '⭐'}</span>
        </div>
      </div>

      {/* Kalima content - scrollable */}
      <div className="p-3 overflow-y-auto flex-1">
        {/* Title */}
        <div className="text-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">
            {kalima.name}
          </h3>
          <p className="text-base font-arabic" style={{ color: kalima.color }}>
            {kalima.nameAr}
          </p>
          <p className="text-xs text-gray-500">{kalima.meaning}</p>
        </div>

        {/* Arabic text with word highlighting - tap any word to hear it */}
        <div className="bg-gray-50 rounded-xl p-3 mb-2">
          <div className="text-[10px] text-gray-400 text-center mb-1">Tap any word to hear it 🔊</div>
          <div className="font-arabic text-lg sm:text-xl leading-relaxed text-center" dir="rtl">
            {arabicWords.map((word, index) => (
              <span
                key={index}
                onClick={() => {
                  // Speak single word
                  if (window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                    const u = new SpeechSynthesisUtterance(word);
                    u.lang = 'ar-SA';
                    u.rate = 0.7;
                    window.speechSynthesis.speak(u);
                  }
                }}
                className={`
                  inline-block mx-0.5 px-1 rounded transition-all duration-200 cursor-pointer
                  hover:bg-yellow-100 hover:scale-105 active:scale-95
                  ${currentWordIndex === index
                    ? 'bg-yellow-300 scale-110 font-bold shadow-md'
                    : currentWordIndex > index
                      ? 'text-gray-400'
                      : ''
                  }
                `}
                style={{
                  color: currentWordIndex === index ? kalima.color : undefined,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Transliteration - collapsible */}
        <details className="text-center text-xs text-gray-500 mb-2">
          <summary className="cursor-pointer hover:text-gray-700">Show transliteration</summary>
          <p className="italic mt-1 px-2">{kalima.transliteration}</p>
        </details>

        {/* Repeat prompt */}
        {showRepeatPrompt && learningMode === 'repeat' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-2 text-center animate-pulse">
            <p className="text-green-700 font-bold">🎤 Your turn! Repeat...</p>
          </div>
        )}

        {/* Control buttons - compact */}
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="px-5 py-2 rounded-full text-white font-bold shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5"
              style={{ background: kalima.color }}
            >
              <span>{isPaused ? '▶️' : '🔊'}</span>
              <span>{isPaused ? 'Resume' : 'Listen'}</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="px-5 py-2 rounded-full bg-gray-500 text-white font-bold shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5"
            >
              <span>⏸️</span>
              <span>Pause</span>
            </button>
          )}
          <button
            onClick={handleRepeatMode}
            className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
              learningMode === 'repeat' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            🎤 Repeat
          </button>
        </div>

        {/* Translations - compact tabs style */}
        <div className="border-t border-gray-100 pt-2">
          {/* Urdu Translation */}
          {kalima.urdu && (
            <details className="mb-2" open>
              <summary className="cursor-pointer text-xs font-medium text-emerald-600 flex items-center gap-1 justify-center">
                🇵🇰 اردو ترجمہ
              </summary>
              <div className="bg-emerald-50 rounded-lg p-2 mt-1">
                <p className="text-center text-emerald-800 text-xs leading-relaxed" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {kalima.urdu}
                </p>
              </div>
            </details>
          )}

          {/* English Translation */}
          <details>
            <summary className="cursor-pointer text-xs font-medium text-gray-500 flex items-center gap-1 justify-center">
              🇬🇧 English Translation
            </summary>
            <div className="bg-gray-50 rounded-lg p-2 mt-1">
              <p className="text-center text-gray-600 text-xs leading-relaxed">
                {kalima.translation}
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Seert Event Learning Card - Shows Seerah event details
// ============================================================================

const SeertEventCard = ({ event, visitedCount, totalCount }) => {
  if (!event || event.type === 'finish') return null;

  const bgColor = event.color || '#D4A574';

  return (
    <div
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-4 overflow-hidden animate-fadeIn max-w-sm"
      style={{ borderColor: bgColor }}
    >
      {/* Header with emoji and title */}
      <div
        className="px-4 py-3 text-center"
        style={{ background: bgColor }}
      >
        <div className="text-4xl mb-1">{event.emoji || '🕌'}</div>
        <div className="text-white font-bold text-lg">
          {event.name}
        </div>
        <div className="text-white/90 font-arabic text-xl mt-1">
          {event.nameAr}
        </div>
      </div>

      {/* Event details */}
      <div className="p-4">
        {/* Year and location */}
        <div className="flex justify-center gap-4 mb-3 text-sm">
          {event.year && (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
              <span>📅</span>
              <span className="font-medium">{event.year}</span>
              {event.yearHijri && (
                <span className="text-gray-500 font-arabic">({event.yearHijri})</span>
              )}
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
              <span>📍</span>
              <span className="font-medium">{event.location}</span>
            </div>
          )}
        </div>

        {/* Kid-friendly description */}
        <div className="bg-gray-50 rounded-xl p-3 mb-3">
          <p className="text-gray-700 text-sm leading-relaxed text-center">
            {event.kidFriendly || event.description}
          </p>
        </div>

        {/* Quran reference if available */}
        {event.quranRef && (
          <div
            className="text-center text-xs px-3 py-2 rounded-lg"
            style={{ background: `${bgColor}20`, color: bgColor }}
          >
            <span className="font-arabic">📖 {event.quranRef}</span>
          </div>
        )}

        {/* Progress */}
        <div className="mt-3 text-center text-xs text-gray-400">
          Event {event.id} of {totalCount} • {visitedCount} visited
        </div>
      </div>
    </div>
  );
};

// Scene configurations - Different themes every 10 surahs
const SCENES = [
  { // Surahs 1-10: Sunny Meadow
    id: 'meadow',
    name: 'Sunny Meadow',
    skyGradient: 'from-sky-300 via-sky-400 to-sky-500',
    sunColor: '#FCD34D',
    mountainFar: '#94A3B8',
    mountainNear: '#22C55E',
    groundColor: '#22C55E',
  },
  { // Surahs 11-20: Sunset Valley
    id: 'sunset',
    name: 'Sunset Valley',
    skyGradient: 'from-orange-300 via-rose-400 to-purple-500',
    sunColor: '#FB923C',
    mountainFar: '#D97706',
    mountainNear: '#CA8A04',
    groundColor: '#84CC16',
  },
  { // Surahs 21-30: Ocean Coast
    id: 'ocean',
    name: 'Ocean Coast',
    skyGradient: 'from-cyan-300 via-blue-400 to-indigo-500',
    sunColor: '#FBBF24',
    mountainFar: '#0EA5E9',
    mountainNear: '#0D9488',
    groundColor: '#14B8A6',
  },
  { // Surahs 31-40: Forest Adventure
    id: 'forest',
    name: 'Forest Adventure',
    skyGradient: 'from-emerald-300 via-teal-400 to-cyan-500',
    sunColor: '#A3E635',
    mountainFar: '#166534',
    mountainNear: '#15803D',
    groundColor: '#16A34A',
  },
  { // Surahs 41-50: Mountain Heights
    id: 'mountain',
    name: 'Mountain Heights',
    skyGradient: 'from-slate-300 via-blue-400 to-indigo-600',
    sunColor: '#F8FAFC',
    mountainFar: '#64748B',
    mountainNear: '#475569',
    groundColor: '#10B981',
  },
  { // Surahs 51-60: Desert Oasis
    id: 'desert',
    name: 'Desert Oasis',
    skyGradient: 'from-amber-200 via-yellow-300 to-orange-400',
    sunColor: '#FDE047',
    mountainFar: '#D97706',
    mountainNear: '#B45309',
    groundColor: '#A3E635',
  },
  { // Surahs 61-70: Twilight Path
    id: 'twilight',
    name: 'Twilight Path',
    skyGradient: 'from-violet-400 via-purple-500 to-indigo-600',
    sunColor: '#C4B5FD',
    mountainFar: '#7C3AED',
    mountainNear: '#6D28D9',
    groundColor: '#34D399',
  },
  { // Surahs 71-80: Cherry Blossom
    id: 'cherry',
    name: 'Cherry Blossom',
    skyGradient: 'from-pink-300 via-rose-300 to-pink-400',
    sunColor: '#FECDD3',
    mountainFar: '#F472B6',
    mountainNear: '#EC4899',
    groundColor: '#86EFAC',
  },
  { // Surahs 81-90: Northern Lights
    id: 'aurora',
    name: 'Northern Lights',
    skyGradient: 'from-emerald-400 via-cyan-500 to-violet-600',
    sunColor: '#67E8F9',
    mountainFar: '#0891B2',
    mountainNear: '#0E7490',
    groundColor: '#4ADE80',
  },
  { // Surahs 91-100: Golden Hour
    id: 'golden',
    name: 'Golden Hour',
    skyGradient: 'from-yellow-300 via-amber-400 to-orange-500',
    sunColor: '#FCD34D',
    mountainFar: '#F59E0B',
    mountainNear: '#D97706',
    groundColor: '#A3E635',
  },
  { // Surahs 101-110: Starry Night
    id: 'starry',
    name: 'Starry Night',
    skyGradient: 'from-indigo-800 via-purple-900 to-slate-900',
    sunColor: '#E0E7FF',
    mountainFar: '#4338CA',
    mountainNear: '#3730A3',
    groundColor: '#22D3EE',
    isNight: true,
  },
  { // Surahs 111-114: Divine Light (Finale)
    id: 'divine',
    name: 'Divine Light',
    skyGradient: 'from-yellow-100 via-amber-200 to-white',
    sunColor: '#FEFCE8',
    mountainFar: '#FDE68A',
    mountainNear: '#FCD34D',
    groundColor: '#86EFAC',
    isBright: true,
  },
];

// Get scene based on position (uses default spacing of 200 for surahs)
const getSceneForPosition = (position, stationSpacing = 200) => {
  const stationIndex = Math.floor((position - 100) / stationSpacing);
  const sceneIndex = Math.min(Math.floor(stationIndex / 10), SCENES.length - 1);
  return SCENES[Math.max(0, sceneIndex)];
};

// ============================================================================
// Sound Effects Manager (Web Audio API)
// ============================================================================

let audioContext = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

const SoundEffects = {
  // Train whistle - classic train sound
  trainWhistle: () => {
    try {
      const ctx = getAudioContext();
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(600, ctx.currentTime);
      osc2.frequency.setValueAtTime(800, ctx.currentTime);

      // Whistle sweep
      osc1.frequency.linearRampToValueAtTime(700, ctx.currentTime + 0.3);
      osc2.frequency.linearRampToValueAtTime(900, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.2);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.5);
      osc2.stop(ctx.currentTime + 0.5);
    } catch (e) { /* Silently fail */ }
  },

  // Chugga chugga - train moving rhythm
  chugga: () => {
    try {
      const ctx = getAudioContext();
      const noise = ctx.createBufferSource();
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < buffer.length; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.3;
      }

      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 300;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) { /* Silently fail */ }
  },

  // Islamic chime - station arrival (inspired by peaceful mosque sounds)
  stationBell: () => {
    try {
      const ctx = getAudioContext();

      // Create a peaceful 3-note ascending chime (like adhan opening)
      const notes = [392, 440, 523.25]; // G4, A4, C5 - peaceful ascending

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;

        const startTime = ctx.currentTime + i * 0.15;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.6);
      });
    } catch (e) { /* Silently fail */ }
  },

  // Click sound for selection
  click: () => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) { /* Silently fail */ }
  },

  // Success sound - entering station
  success: () => {
    try {
      const ctx = getAudioContext();
      const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;

        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.1 + 0.05);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + i * 0.1 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.3);
      });
    } catch (e) { /* Silently fail */ }
  },

  // Whoosh - fast movement
  whoosh: () => {
    try {
      const ctx = getAudioContext();
      const noise = ctx.createBufferSource();
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < buffer.length; i++) {
        data[i] = (Math.random() * 2 - 1);
      }

      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.3);
      filter.Q.value = 2;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) { /* Silently fail */ }
  },
};

// ============================================================================
// Smoke Particle Component
// ============================================================================

const SmokeParticle = ({ x, y, id, onComplete }) => {
  const [style, setStyle] = useState({
    opacity: 0.8,
    transform: 'scale(0.5)',
    left: x,
    top: y,
  });

  useEffect(() => {
    const startTime = Date.now();
    let animFrame;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / 1500, 1);

      setStyle({
        opacity: 0.8 * (1 - progress),
        transform: `scale(${0.5 + progress * 1.5}) translateY(${-progress * 60}px)`,
        left: x + Math.sin(progress * 4) * 10,
        top: y,
      });

      if (progress < 1) {
        animFrame = requestAnimationFrame(animate);
      } else {
        onComplete(id);
      }
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [x, y, id, onComplete]);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...style,
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,200,200,0.8) 0%, rgba(150,150,150,0.3) 70%, transparent 100%)',
        filter: 'blur(3px)',
      }}
    />
  );
};

// ============================================================================
// Train Component
// ============================================================================

const Train = ({ x, isMoving, direction, speed }) => {
  const [wheelRotation, setWheelRotation] = useState(0);
  const [smokeParticles, setSmokeParticles] = useState([]);
  const smokeIdRef = useRef(0);

  // Rotate wheels when moving
  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      setWheelRotation(prev => prev + Math.abs(speed) * 5);
    }, 50);

    return () => clearInterval(interval);
  }, [isMoving, speed]);

  // Generate smoke when moving
  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      smokeIdRef.current += 1;
      setSmokeParticles(prev => [
        ...prev.slice(-8),
        { id: smokeIdRef.current, x: 0, y: 0 }
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, [isMoving]);

  const removeSmoke = useCallback((id) => {
    setSmokeParticles(prev => prev.filter(p => p.id !== id));
  }, []);

  return (
    <div
      className="absolute bottom-[60px] z-20"
      style={{
        left: x - TRAIN_WIDTH / 2,
        transform: `scaleX(${direction >= 0 ? -1 : 1})`,
        transition: 'transform 0.3s ease',
      }}
    >
      {/* Smoke particles */}
      <div className="absolute -top-10 left-8">
        {smokeParticles.map(p => (
          <SmokeParticle
            key={p.id}
            id={p.id}
            x={p.x}
            y={p.y}
            onComplete={removeSmoke}
          />
        ))}
      </div>

      {/* Train SVG */}
      <svg width={TRAIN_WIDTH} height={TRAIN_HEIGHT + 20} viewBox="0 0 180 100" fill="none">
        {/* Locomotive body */}
        <rect x="5" y="30" width="60" height="45" rx="5" fill="#EF4444" />
        <rect x="5" y="30" width="60" height="15" rx="5" fill="#DC2626" />

        {/* Chimney */}
        <rect x="15" y="10" width="15" height="25" rx="3" fill="#1F2937" />
        <rect x="12" y="5" width="21" height="8" rx="3" fill="#374151" />

        {/* Cabin */}
        <rect x="40" y="15" width="25" height="20" rx="3" fill="#FCD34D" />
        <rect x="45" y="20" width="8" height="10" rx="1" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1" />
        <rect x="55" y="20" width="8" height="10" rx="1" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1" />

        {/* Front detail */}
        <circle cx="25" cy="50" r="8" fill="#FCD34D" />
        <circle cx="25" cy="50" r="5" fill="#F59E0B" />

        {/* Connector */}
        <rect x="65" y="55" width="10" height="8" fill="#6B7280" />

        {/* Carriage 1 */}
        <rect x="75" y="35" width="45" height="35" rx="5" fill="#3B82F6" />
        <rect x="75" y="35" width="45" height="12" rx="5" fill="#2563EB" />
        <rect x="82" y="50" width="10" height="12" rx="2" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1" />
        <rect x="98" y="50" width="10" height="12" rx="2" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1" />

        {/* Connector 2 */}
        <rect x="120" y="55" width="8" height="8" fill="#6B7280" />

        {/* Carriage 2 */}
        <rect x="128" y="35" width="45" height="35" rx="5" fill="#10B981" />
        <rect x="128" y="35" width="45" height="12" rx="5" fill="#059669" />
        <rect x="135" y="50" width="10" height="12" rx="2" fill="#6EE7B7" stroke="#34D399" strokeWidth="1" />
        <rect x="151" y="50" width="10" height="12" rx="2" fill="#6EE7B7" stroke="#34D399" strokeWidth="1" />

        {/* Wheels - Locomotive */}
        <g transform={`rotate(${wheelRotation}, 20, 78)`}>
          <circle cx="20" cy="78" r="10" fill="#374151" stroke="#1F2937" strokeWidth="2" />
          <circle cx="20" cy="78" r="4" fill="#6B7280" />
          <line x1="20" y1="68" x2="20" y2="88" stroke="#6B7280" strokeWidth="2" />
          <line x1="10" y1="78" x2="30" y2="78" stroke="#6B7280" strokeWidth="2" />
        </g>
        <g transform={`rotate(${wheelRotation}, 50, 78)`}>
          <circle cx="50" cy="78" r="10" fill="#374151" stroke="#1F2937" strokeWidth="2" />
          <circle cx="50" cy="78" r="4" fill="#6B7280" />
          <line x1="50" y1="68" x2="50" y2="88" stroke="#6B7280" strokeWidth="2" />
          <line x1="40" y1="78" x2="60" y2="78" stroke="#6B7280" strokeWidth="2" />
        </g>

        {/* Wheels - Carriage 1 */}
        <g transform={`rotate(${wheelRotation}, 85, 78)`}>
          <circle cx="85" cy="78" r="8" fill="#374151" stroke="#1F2937" strokeWidth="2" />
          <circle cx="85" cy="78" r="3" fill="#6B7280" />
        </g>
        <g transform={`rotate(${wheelRotation}, 110, 78)`}>
          <circle cx="110" cy="78" r="8" fill="#374151" stroke="#1F2937" strokeWidth="2" />
          <circle cx="110" cy="78" r="3" fill="#6B7280" />
        </g>

        {/* Wheels - Carriage 2 */}
        <g transform={`rotate(${wheelRotation}, 140, 78)`}>
          <circle cx="140" cy="78" r="8" fill="#374151" stroke="#1F2937" strokeWidth="2" />
          <circle cx="140" cy="78" r="3" fill="#6B7280" />
        </g>
        <g transform={`rotate(${wheelRotation}, 165, 78)`}>
          <circle cx="165" cy="78" r="8" fill="#374151" stroke="#1F2937" strokeWidth="2" />
          <circle cx="165" cy="78" r="3" fill="#6B7280" />
        </g>
      </svg>
    </div>
  );
};

// ============================================================================
// Station Component - Cute Little House Design
// ============================================================================

const Station = ({ surah, x, isSelected, isNearby, onSelect, stationScale = 1 }) => {
  const colors = STATION_COLORS[surah.type] || STATION_COLORS.Makki;
  const difficulty = (surah.ayahs || 7) <= 20 ? 1 : (surah.ayahs || 7) <= 100 ? 2 : 3;
  const isMakki = !surah.type || surah.type === 'Makki';
  const houseColors = isMakki
    ? { roof: '#16A34A', wall: '#86EFAC', door: '#15803D', window: '#DCFCE7' }
    : { roof: '#2563EB', wall: '#93C5FD', door: '#1D4ED8', window: '#DBEAFE' };

  return (
    <div
      className={`absolute bottom-28 cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-30' : isNearby ? 'z-20' : 'z-10'
      }`}
      style={{
        left: x - 50 * stationScale,
        width: 100 * stationScale,
        transform: `scale(${(isSelected ? 1.15 : isNearby ? 1.08 : 1) * stationScale})`,
        transformOrigin: 'bottom center',
        animation: isSelected ? 'houseBounce 0.6s ease-in-out infinite' : 'none',
      }}
      onClick={() => onSelect(surah)}
    >
      {/* Glow effect */}
      {(isSelected || isNearby) && (
        <div
          className="absolute -inset-4 rounded-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
            animation: isSelected ? 'pulse 1.5s ease-in-out infinite' : 'none',
            zIndex: -1,
          }}
        />
      )}

      <div className="relative flex flex-col items-center">
        {/* Surah name sign - NOW AT TOP */}
        <div
          className="mb-1 px-2 py-1 rounded-lg shadow-md text-center"
          style={{
            background: isSelected ? colors.bg : 'white',
            border: `2px solid ${colors.primary}`,
            minWidth: 80,
          }}
        >
          {/* Arabic name */}
          <div
            className="text-sm font-bold leading-tight"
            style={{
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              color: isSelected ? 'white' : colors.secondary,
            }}
            dir="rtl"
          >
            {surah.arabic}
          </div>

          {/* English name */}
          <div
            className="text-[9px] font-medium truncate"
            style={{ color: isSelected ? 'white' : colors.primary }}
          >
            {surah.name}
          </div>

          {/* Difficulty stars */}
          <div className="flex justify-center gap-0.5 mt-0.5">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="text-[10px]"
                style={{
                  color: i < difficulty ? '#FCD34D' : '#E5E7EB',
                  textShadow: i < difficulty ? '0 0 4px #FCD34D' : 'none',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Surah number badge */}
        <div
          className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10"
          style={{
            background: colors.bg,
            border: '3px solid white',
            boxShadow: isSelected ? `0 0 15px ${colors.glow}` : '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          {surah.id}
        </div>

        {/* House structure */}
        <svg width="90" height="110" viewBox="0 0 90 110" className="drop-shadow-lg">
          {/* Chimney */}
          <rect x="60" y="8" width="12" height="20" fill="#8B4513" rx="2" />
          <rect x="58" y="5" width="16" height="6" fill="#A0522D" rx="2" />
          {/* Smoke puffs */}
          {isNearby && (
            <>
              <circle cx="66" cy="0" r="4" fill="white" opacity="0.7" className="animate-bounce" style={{ animationDelay: '0s' }} />
              <circle cx="70" cy="-8" r="3" fill="white" opacity="0.5" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
            </>
          )}

          {/* Roof */}
          <polygon
            points="45,15 5,50 85,50"
            fill={houseColors.roof}
            stroke="#333"
            strokeWidth="2"
          />
          {/* Roof highlight */}
          <polygon
            points="45,18 15,47 45,47"
            fill="white"
            opacity="0.2"
          />
          {/* Roof tiles pattern */}
          <line x1="20" y1="40" x2="70" y2="40" stroke={colors.secondary} strokeWidth="2" opacity="0.5" />
          <line x1="30" y1="32" x2="60" y2="32" stroke={colors.secondary} strokeWidth="2" opacity="0.5" />

          {/* House body */}
          <rect x="12" y="48" width="66" height="55" fill={houseColors.wall} stroke="#333" strokeWidth="2" rx="3" />

          {/* Windows */}
          <rect x="18" y="55" width="18" height="18" fill={houseColors.window} stroke={houseColors.door} strokeWidth="2" rx="2" />
          <line x1="27" y1="55" x2="27" y2="73" stroke={houseColors.door} strokeWidth="1.5" />
          <line x1="18" y1="64" x2="36" y2="64" stroke={houseColors.door} strokeWidth="1.5" />

          <rect x="54" y="55" width="18" height="18" fill={houseColors.window} stroke={houseColors.door} strokeWidth="2" rx="2" />
          <line x1="63" y1="55" x2="63" y2="73" stroke={houseColors.door} strokeWidth="1.5" />
          <line x1="54" y1="64" x2="72" y2="64" stroke={houseColors.door} strokeWidth="1.5" />

          {/* Door */}
          <rect x="35" y="75" width="20" height="28" fill={houseColors.door} stroke="#333" strokeWidth="2" rx="2" />
          <rect x="37" y="77" width="16" height="10" fill={houseColors.window} rx="1" />
          <circle cx="51" cy="92" r="2.5" fill="#FCD34D" />

          {/* Door mat */}
          <rect x="32" y="102" width="26" height="5" fill="#D97706" rx="2" />

          {/* Decorative flowers */}
          <circle cx="8" cy="98" r="4" fill="#F472B6" />
          <circle cx="5" cy="100" r="3" fill="#EC4899" />
          <circle cx="82" cy="98" r="4" fill="#FBBF24" />
          <circle cx="85" cy="100" r="3" fill="#F59E0B" />

          {/* Ground */}
          <rect x="0" y="103" width="90" height="7" fill="#22C55E" rx="3" />
        </svg>
      </div>

      <style>{`
        @keyframes houseBounce {
          0%, 100% { transform: scale(1.15) translateY(0); }
          50% { transform: scale(1.15) translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

// ============================================================================
// Alphabet Station Component - For learning Arabic letters
// ============================================================================

const AlphabetStation = ({ letter, index, x, isSelected, isNearby, onSelect, stationScale = 1 }) => {
  const colors = ALPHABET_COLORS[index % ALPHABET_COLORS.length];

  return (
    <div
      className={`absolute bottom-28 cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-30' : isNearby ? 'z-20' : 'z-10'
      }`}
      style={{
        left: x - 60 * stationScale,
        width: 120 * stationScale,
        transform: `scale(${(isSelected ? 1.15 : isNearby ? 1.08 : 1) * stationScale})`,
        transformOrigin: 'bottom center',
        animation: isSelected ? 'letterBounce 0.6s ease-in-out infinite' : 'none',
      }}
      onClick={() => onSelect(letter, index)}
    >
      {/* Glow effect */}
      {(isSelected || isNearby) && (
        <div
          className="absolute -inset-4 rounded-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
            animation: isSelected ? 'pulse 1.5s ease-in-out infinite' : 'none',
            zIndex: -1,
          }}
        />
      )}

      <div className="relative flex flex-col items-center">
        {/* Letter name at top */}
        <div
          className="mb-2 px-3 py-1 rounded-lg shadow-md text-center"
          style={{
            background: isSelected ? colors.bg : 'white',
            border: `2px solid ${colors.primary}`,
            minWidth: 90,
          }}
        >
          <div
            className="text-sm font-bold"
            style={{ color: isSelected ? 'white' : colors.secondary }}
          >
            {letter.name}
          </div>
          <div
            className="text-xs font-arabic"
            style={{ color: isSelected ? 'white' : colors.primary }}
          >
            {letter.nameAr}
          </div>
        </div>

        {/* Big Letter Card */}
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white/50"
          style={{ background: colors.bg }}
        >
          <span
            className="text-6xl text-white font-arabic drop-shadow-lg"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
          >
            {letter.letter}
          </span>
        </div>

        {/* Sound indicator when selected */}
        {isSelected && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl animate-bounce">
            🔊
          </div>
        )}

        {/* Station number badge */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
          style={{ background: colors.bg }}
        >
          {index + 1}
        </div>
      </div>

      <style>{`
        @keyframes letterBounce {
          0%, 100% { transform: scale(1.15) translateY(0); }
          50% { transform: scale(1.15) translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

// ============================================================================
// Kalima Station Component - For learning Six Kalimas
// ============================================================================

const KalimaStation = ({ kalima, index, x, isSelected, isNearby, onSelect, stationScale = 1 }) => {
  const bgColor = kalima.color;

  return (
    <div
      className={`absolute bottom-24 cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-30' : isNearby ? 'z-20' : 'z-10'
      }`}
      style={{
        left: x - 100 * stationScale,
        width: 200 * stationScale,
        transform: `scale(${(isSelected ? 1.1 : isNearby ? 1.05 : 1) * stationScale})`,
        transformOrigin: 'bottom center',
        animation: isSelected ? 'kalimaPulse 2s ease-in-out infinite' : 'none',
      }}
      onClick={() => onSelect(kalima, index)}
    >
      {/* Glow effect */}
      {(isSelected || isNearby) && (
        <div
          className="absolute -inset-6 rounded-3xl"
          style={{
            background: `radial-gradient(circle, ${bgColor}50 0%, transparent 70%)`,
            animation: isSelected ? 'pulse 1.5s ease-in-out infinite' : 'none',
            zIndex: -1,
          }}
        />
      )}

      <div className="relative flex flex-col items-center">
        {/* Kalima number badge */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-xl z-10"
          style={{ background: bgColor }}
        >
          {index + 1}
        </div>

        {/* Main Card */}
        <div
          className="w-48 rounded-2xl shadow-2xl border-4 overflow-hidden"
          style={{ borderColor: bgColor }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 text-center"
            style={{ background: bgColor }}
          >
            <div className="text-white font-bold text-sm">
              {kalima.name}
            </div>
            <div className="text-white/90 font-arabic text-base mt-1">
              {kalima.nameAr}
            </div>
            <div className="text-white/80 text-xs mt-1">
              {kalima.meaning}
            </div>
          </div>

          {/* Arabic text preview */}
          <div className="bg-white p-3">
            <div
              className="text-center font-arabic text-lg leading-relaxed"
              style={{ color: bgColor }}
            >
              {kalima.arabic.slice(0, 40)}...
            </div>
          </div>

          {/* Tap to learn indicator */}
          {isSelected && (
            <div
              className="px-4 py-2 text-center text-white text-xs font-bold animate-pulse"
              style={{ background: bgColor }}
            >
              🎯 Tap to Learn
            </div>
          )}
        </div>

        {/* Sparkle decorations for selected */}
        {isSelected && (
          <>
            <span className="absolute -top-2 -left-2 text-xl animate-ping">✨</span>
            <span className="absolute -top-2 -right-2 text-xl animate-ping" style={{ animationDelay: '0.2s' }}>✨</span>
          </>
        )}
      </div>

      <style>{`
        @keyframes kalimaPulse {
          0%, 100% { transform: scale(1.1) translateY(0); }
          50% { transform: scale(1.1) translateY(-3px); }
        }
      `}</style>
    </div>
  );
};

// ============================================================================
// Finish Station Component - Cute tiny house with Kalima flag
// ============================================================================

const FinishStation = ({ x, isSelected, isNearby, onSelect, mode, stationScale = 1 }) => {
  const isAlphabet = mode === 'alphabet';

  return (
    <div
      className={`absolute bottom-28 cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-30' : isNearby ? 'z-20' : 'z-10'
      }`}
      style={{
        left: x - 50 * stationScale,
        width: 100 * stationScale,
        transform: `scale(${(isSelected ? 1.15 : isNearby ? 1.08 : 1) * stationScale})`,
        transformOrigin: 'bottom center',
        animation: isSelected ? 'houseBounce 0.6s ease-in-out infinite' : 'none',
      }}
      onClick={onSelect}
    >
      {/* Glow effect */}
      {(isSelected || isNearby) && (
        <div
          className="absolute -inset-4 rounded-3xl"
          style={{
            background: `radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, transparent 70%)`,
            animation: isSelected ? 'pulse 1.5s ease-in-out infinite' : 'none',
            zIndex: -1,
          }}
        />
      )}

      <div className="relative flex flex-col items-center">
        {/* Sign above house - "Stage 2" or "Complete" */}
        <div
          className="mb-1 px-3 py-1 rounded-lg shadow-md text-center"
          style={{
            background: isSelected ? 'linear-gradient(135deg, #F59E0B, #D97706)' : 'white',
            border: '2px solid #F59E0B',
            minWidth: 80,
          }}
        >
          <div
            className="text-xs font-bold"
            style={{ color: isSelected ? 'white' : '#D97706' }}
          >
            {isAlphabet ? '→ Stage 2' : '🏆 Complete!'}
          </div>
          <div
            className="text-[10px] font-arabic"
            style={{ color: isSelected ? 'white' : '#F59E0B' }}
          >
            {isAlphabet ? 'کلمات' : 'مکمل'}
          </div>
        </div>

        {/* Cute tiny house with flag */}
        <svg width="90" height="100" viewBox="0 0 90 100" className="drop-shadow-lg">
          {/* Flag pole */}
          <rect x="70" y="5" width="3" height="50" fill="#8B4513" />

          {/* Kalima Flag - Green Islamic flag */}
          <g className={isSelected || isNearby ? 'animate-pulse' : ''}>
            <rect x="45" y="5" width="25" height="18" fill="#10B981" rx="1" />
            {/* Crescent moon on flag */}
            <circle cx="57" cy="14" r="5" fill="white" />
            <circle cx="59" cy="13" r="4" fill="#10B981" />
            {/* Star */}
            <polygon points="62,14 63,16 65,16 63.5,17.5 64,20 62,18.5 60,20 60.5,17.5 59,16 61,16" fill="white" />
          </g>

          {/* Chimney */}
          <rect x="55" y="25" width="10" height="15" fill="#B45309" rx="2" />
          <rect x="53" y="22" width="14" height="5" fill="#D97706" rx="2" />

          {/* Smoke puffs from chimney */}
          {(isSelected || isNearby) && (
            <>
              <circle cx="60" cy="18" r="3" fill="white" opacity="0.7" className="animate-bounce" />
              <circle cx="63" cy="12" r="2.5" fill="white" opacity="0.5" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
            </>
          )}

          {/* Roof - Golden/amber for finish */}
          <polygon
            points="45,35 5,55 85,55"
            fill="url(#finishRoof)"
          />
          <defs>
            <linearGradient id="finishRoof" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* House body */}
          <rect x="12" y="55" width="66" height="40" fill="#FEF3C7" rx="2" />

          {/* Door - Decorated */}
          <rect x="35" y="65" width="20" height="30" fill="#92400E" rx="3" />
          <circle cx="50" cy="82" r="2" fill="#F59E0B" /> {/* Door handle */}

          {/* Windows */}
          <rect x="18" y="62" width="12" height="12" fill="#FEF9C3" rx="1" />
          <rect x="60" y="62" width="12" height="12" fill="#FEF9C3" rx="1" />
          <line x1="24" y1="62" x2="24" y2="74" stroke="#D97706" strokeWidth="1" />
          <line x1="18" y1="68" x2="30" y2="68" stroke="#D97706" strokeWidth="1" />
          <line x1="66" y1="62" x2="66" y2="74" stroke="#D97706" strokeWidth="1" />
          <line x1="60" y1="68" x2="72" y2="68" stroke="#D97706" strokeWidth="1" />

          {/* Welcome mat */}
          <rect x="32" y="92" width="26" height="5" fill="#D97706" rx="1" />
        </svg>

        {/* Sparkles for selected */}
        {isSelected && (
          <>
            <span className="absolute -top-2 left-0 text-lg animate-ping">✨</span>
            <span className="absolute -top-2 right-0 text-lg animate-ping" style={{ animationDelay: '0.3s' }}>✨</span>
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// Seert (Seerah) Station Component - Tent/Oasis themed for Prophet's life events
// ============================================================================

const SeertStation = ({ event, index, x, isSelected, isNearby, onSelect, stationScale = 1 }) => {
  const bgColor = event.color || '#D4A574';

  return (
    <div
      className={`absolute bottom-24 cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-30' : isNearby ? 'z-20' : 'z-10'
      }`}
      style={{
        left: x - 110 * stationScale,
        width: 220 * stationScale,
        transform: `scale(${(isSelected ? 1.1 : isNearby ? 1.05 : 1) * stationScale})`,
        transformOrigin: 'bottom center',
        animation: isSelected ? 'seertPulse 2s ease-in-out infinite' : 'none',
      }}
      onClick={() => onSelect(event, index)}
    >
      {/* Glow effect */}
      {(isSelected || isNearby) && (
        <div
          className="absolute -inset-6 rounded-3xl"
          style={{
            background: `radial-gradient(circle, ${bgColor}50 0%, transparent 70%)`,
            animation: isSelected ? 'pulse 1.5s ease-in-out infinite' : 'none',
            zIndex: -1,
          }}
        />
      )}

      <div className="relative flex flex-col items-center">
        {/* Event number badge with emoji */}
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center text-white shadow-xl z-10 border-4 border-white"
          style={{ background: bgColor }}
        >
          <span className="text-xl">{event.emoji || '🕌'}</span>
        </div>

        {/* Tent-shaped card */}
        <div
          className="w-52 rounded-2xl shadow-2xl border-4 overflow-hidden mt-4"
          style={{ borderColor: bgColor }}
        >
          {/* Tent top - decorative */}
          <div
            className="relative h-3"
            style={{ background: `linear-gradient(135deg, ${bgColor}, ${bgColor}cc)` }}
          >
            {/* Tent patterns */}
            <div className="absolute inset-0 flex justify-around items-center">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/40" />
              ))}
            </div>
          </div>

          {/* Header */}
          <div
            className="px-4 py-3 text-center"
            style={{ background: bgColor }}
          >
            <div className="text-white font-bold text-sm">
              {event.name}
            </div>
            <div className="text-white/90 font-arabic text-lg mt-1">
              {event.nameAr}
            </div>
            {event.year && (
              <div className="text-white/80 text-xs mt-1 flex items-center justify-center gap-2">
                <span>📅 {event.year}</span>
                {event.yearHijri && <span className="font-arabic">({event.yearHijri})</span>}
              </div>
            )}
          </div>

          {/* Description preview */}
          <div className="bg-white p-3">
            <div
              className="text-center text-sm text-gray-700 leading-relaxed"
            >
              {event.kidFriendly ? event.kidFriendly.slice(0, 60) : event.description?.slice(0, 60)}...
            </div>
            {event.location && (
              <div className="text-center text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                <span>📍</span>
                <span>{event.location}</span>
              </div>
            )}
          </div>

          {/* Tap to learn indicator */}
          {isSelected && (
            <div
              className="px-4 py-2 text-center text-white text-xs font-bold animate-pulse"
              style={{ background: bgColor }}
            >
              🐪 Tap to Explore Event
            </div>
          )}
        </div>

        {/* Sparkle decorations for selected */}
        {isSelected && (
          <>
            <span className="absolute -top-2 -left-2 text-xl animate-ping">⭐</span>
            <span className="absolute -top-2 -right-2 text-xl animate-ping" style={{ animationDelay: '0.2s' }}>⭐</span>
          </>
        )}
      </div>

      <style>{`
        @keyframes seertPulse {
          0%, 100% { transform: scale(1.1) translateY(0); }
          50% { transform: scale(1.1) translateY(-3px); }
        }
      `}</style>
    </div>
  );
};

// ============================================================================
// Parallax Background Components
// ============================================================================

const SkyLayer = ({ scene, hasTopBanner = false }) => (
  <div className={`absolute inset-0 bg-gradient-to-b ${scene.skyGradient} transition-all duration-1000`}>
    {/* Sun/Moon */}
    <div
      className={`absolute right-20 w-20 h-20 rounded-full shadow-lg transition-all duration-1000 ${hasTopBanner ? 'top-16' : 'top-8'}`}
      style={{
        backgroundColor: scene.sunColor,
        boxShadow: `0 0 60px ${scene.sunColor}80`,
      }}
    >
      <div
        className="absolute inset-2 rounded-full"
        style={{ backgroundColor: scene.sunColor, filter: 'brightness(1.1)' }}
      />
    </div>

    {/* Stars (only for night scene) */}
    {scene.isNight && (
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    )}

    {/* Scene name indicator - hidden when banner present to avoid overlap */}
    {!hasTopBanner && (
      <div className="absolute right-4 top-4 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium">
        {scene.name}
      </div>
    )}

    {/* Clouds */}
    {[
      { left: '10%', top: '15%', scale: 1, delay: 0 },
      { left: '30%', top: '8%', scale: 1.2, delay: 2 },
      { left: '55%', top: '20%', scale: 0.8, delay: 4 },
      { left: '75%', top: '12%', scale: 1.1, delay: 1 },
      { left: '90%', top: '25%', scale: 0.9, delay: 3 },
    ].map((cloud, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          left: cloud.left,
          top: cloud.top,
          transform: `scale(${cloud.scale})`,
          animation: `floatCloud ${15 + i * 2}s ease-in-out infinite`,
          animationDelay: `${cloud.delay}s`,
        }}
      >
        <svg width="100" height="50" viewBox="0 0 100 50">
          <ellipse cx="30" cy="35" rx="25" ry="15" fill="white" fillOpacity={scene.isNight ? 0.3 : 0.9} />
          <ellipse cx="50" cy="30" rx="30" ry="18" fill="white" fillOpacity={scene.isNight ? 0.4 : 0.95} />
          <ellipse cx="70" cy="35" rx="25" ry="15" fill="white" fillOpacity={scene.isNight ? 0.3 : 0.9} />
          <ellipse cx="50" cy="20" rx="20" ry="15" fill="white" fillOpacity={scene.isNight ? 0.5 : 1} />
        </svg>
      </div>
    ))}
  </div>
);

const FarMountains = ({ offset, scene }) => (
  <div
    className="absolute bottom-40 left-0 w-[200%] h-48 transition-colors duration-1000"
    style={{ transform: `translateX(${-offset * 0.1}px)` }}
  >
    <svg width="100%" height="100%" viewBox="0 0 2000 200" preserveAspectRatio="none">
      <path
        d="M0,200 L100,100 L200,150 L350,50 L500,120 L650,30 L800,100 L950,60 L1100,140 L1250,40 L1400,110 L1550,70 L1700,130 L1850,50 L2000,120 L2000,200 Z"
        fill={scene.mountainFar}
        fillOpacity="0.6"
        className="transition-all duration-1000"
      />
      <path
        d="M0,200 L150,120 L300,160 L450,80 L600,140 L750,60 L900,130 L1050,90 L1200,150 L1350,70 L1500,130 L1650,100 L1800,140 L2000,80 L2000,200 Z"
        fill={scene.mountainFar}
        fillOpacity="0.8"
        className="transition-all duration-1000"
      />
    </svg>
  </div>
);

const NearMountains = ({ offset, scene }) => (
  <div
    className="absolute bottom-36 left-0 w-[200%] h-36 transition-colors duration-1000"
    style={{ transform: `translateX(${-offset * 0.25}px)` }}
  >
    <svg width="100%" height="100%" viewBox="0 0 2000 150" preserveAspectRatio="none">
      <path
        d="M0,150 L80,80 L180,120 L280,50 L400,100 L520,30 L640,90 L780,60 L900,110 L1020,40 L1150,95 L1280,55 L1400,100 L1530,45 L1660,85 L1800,65 L1920,100 L2000,70 L2000,150 Z"
        fill={scene.mountainNear}
        fillOpacity="0.9"
        className="transition-all duration-1000"
      />
    </svg>
  </div>
);

const Trees = ({ offset }) => {
  const trees = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      x: i * 150 + Math.random() * 50,
      scale: 0.6 + Math.random() * 0.6,
      type: Math.floor(Math.random() * 3),
    }));
  }, []);

  return (
    <div
      className="absolute bottom-24 left-0 w-[200%] h-32"
      style={{ transform: `translateX(${-offset * 0.4}px)` }}
    >
      {trees.map((tree, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: tree.x,
            transform: `scale(${tree.scale})`,
          }}
        >
          {tree.type === 0 && (
            // Pine tree
            <svg width="40" height="60" viewBox="0 0 40 60">
              <rect x="17" y="45" width="6" height="15" fill="#92400E" />
              <polygon points="20,0 35,25 5,25" fill="#166534" />
              <polygon points="20,15 38,45 2,45" fill="#15803D" />
            </svg>
          )}
          {tree.type === 1 && (
            // Round tree
            <svg width="40" height="60" viewBox="0 0 40 60">
              <rect x="17" y="40" width="6" height="20" fill="#92400E" />
              <circle cx="20" cy="25" r="20" fill="#22C55E" />
              <circle cx="12" cy="20" r="12" fill="#16A34A" />
              <circle cx="28" cy="20" r="12" fill="#16A34A" />
            </svg>
          )}
          {tree.type === 2 && (
            // Bush
            <svg width="40" height="40" viewBox="0 0 40 40">
              <ellipse cx="20" cy="30" rx="18" ry="12" fill="#22C55E" />
              <ellipse cx="12" cy="25" rx="10" ry="8" fill="#16A34A" />
              <ellipse cx="28" cy="25" rx="10" ry="8" fill="#16A34A" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

const Flowers = ({ offset }) => {
  const flowers = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      x: i * 100 + Math.random() * 60,
      y: Math.random() * 15,
      color: ['#F472B6', '#FBBF24', '#A78BFA', '#FB7185', '#60A5FA'][Math.floor(Math.random() * 5)],
      size: 3 + Math.random() * 4,
    }));
  }, []);

  return (
    <div
      className="absolute bottom-20 left-0 w-[200%] h-8"
      style={{ transform: `translateX(${-offset * 0.5}px)` }}
    >
      {flowers.map((flower, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: flower.x,
            bottom: flower.y,
            width: flower.size,
            height: flower.size,
            backgroundColor: flower.color,
          }}
        />
      ))}
    </div>
  );
};

// ============================================================================
// Track Component
// ============================================================================

const Track = ({ offset, width }) => (
  <div
    className="absolute bottom-[50px] left-0 h-8"
    style={{
      width: width + 500,
      transform: `translateX(${-offset}px)`,
    }}
  >
    {/* Rail bed */}
    <div className="absolute bottom-0 w-full h-6 bg-gradient-to-b from-amber-600 to-amber-800" />

    {/* Rails */}
    <div className="absolute bottom-5 w-full h-1 bg-gray-500 shadow-sm" />
    <div className="absolute bottom-2 w-full h-1 bg-gray-500 shadow-sm" />

    {/* Sleepers */}
    <div className="absolute bottom-0 w-full flex">
      {Array.from({ length: Math.ceil((width + 500) / 30) }, (_, i) => (
        <div
          key={i}
          className="w-4 h-6 bg-amber-900 rounded-sm"
          style={{ marginLeft: i === 0 ? 0 : 26 }}
        />
      ))}
    </div>
  </div>
);

// ============================================================================
// Mini Map Component
// ============================================================================

const MiniMap = ({ trainPosition, stations, totalWidth, selectedStation, mode = 'surahs', theme = 'train' }) => {
  const mapWidth = 300;
  const scale = mapWidth / totalWidth;
  const stationCount = stations.length;

  // Get color based on mode
  const getStationColor = (station, index) => {
    if (mode === 'alphabet') {
      return ALPHABET_COLORS[index % ALPHABET_COLORS.length].primary;
    }
    if (mode === 'kalimas') {
      return station.color || '#10B981';
    }
    if (mode === 'seert') {
      return station.color || '#D4A574';
    }
    return STATION_COLORS[station.type]?.primary || '#10B981';
  };

  // Check if station is selected
  const isSelected = (station, index) => {
    if (mode === 'alphabet') {
      return selectedStation?.letter === station.letter;
    }
    if (mode === 'kalimas' || mode === 'seert') {
      return selectedStation?.id === station.id;
    }
    return selectedStation?.id === station.id;
  };

  // Get vehicle emoji based on theme
  const vehicleEmoji = theme === 'garden' ? '🧞' : theme === 'seert' ? '🐪' : '🚂';

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
        <div className="relative h-3" style={{ width: mapWidth }}>
          {/* Track line */}
          <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -translate-y-1/2" />

          {/* Stations */}
          {stations.map((station, i) => (
            <div
              key={station.id || i}
              className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all ${
                isSelected(station, i)
                  ? 'w-2.5 h-2.5 ring-2 ring-yellow-400'
                  : ''
              }`}
              style={{
                left: (i / (stationCount - 1)) * mapWidth,
                backgroundColor: getStationColor(station, i),
              }}
            />
          ))}

          {/* Vehicle indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-100"
            style={{ left: trainPosition * scale - 8 }}
          >
            <div
              className="w-full h-full rounded shadow-lg flex items-center justify-center"
              style={{ background: theme === 'garden' ? '#8B5CF6' : theme === 'seert' ? '#D4A574' : '#EF4444' }}
            >
              <span className="text-[8px]">{vehicleEmoji}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Control Buttons Component
// ============================================================================

const ControlButtons = ({ onLeft, onRight, onStop, isMoving, ageGroup = 'young' }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const intervalRef = useRef(null);
  const isLittle = ageGroup === 'little';

  // Handle continuous movement while holding button
  const startMoving = useCallback((direction) => {
    // Prime speech synthesis on first interaction
    primeSpeechSynthesis();

    if (direction === 'left') {
      onLeft();
    } else {
      onRight();
    }
  }, [onLeft, onRight]);

  const stopMoving = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    onStop();
  }, [onStop]);

  return (
    <div className={`absolute z-[60] flex ${isLittle ? 'bottom-20 right-4 gap-4' : 'bottom-20 right-4 gap-3'}`}>
      {/* Left/Back button */}
      <button
        ref={leftRef}
        className={`rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-all border-2 ${
          isLittle
            ? 'w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 border-purple-300 text-white'
            : 'w-16 h-16 bg-white border-gray-300 hover:bg-gray-50'
        }`}
        style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
        onTouchStart={(e) => { e.preventDefault(); startMoving('left'); }}
        onTouchEnd={(e) => { e.preventDefault(); stopMoving(); }}
        onMouseDown={() => startMoving('left')}
        onMouseUp={() => stopMoving()}
        onMouseLeave={() => stopMoving()}
      >
        {isLittle ? (
          <span className="text-3xl">⬅️</span>
        ) : (
          <Icons.ChevronLeft className="w-10 h-10 text-gray-700" />
        )}
      </button>

      {/* Right/Forward button */}
      <button
        ref={rightRef}
        className={`rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-all border-2 ${
          isLittle
            ? 'w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 border-pink-300 text-white'
            : 'w-16 h-16 bg-white border-gray-300 hover:bg-gray-50'
        }`}
        style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
        onTouchStart={(e) => { e.preventDefault(); startMoving('right'); }}
        onTouchEnd={(e) => { e.preventDefault(); stopMoving(); }}
        onMouseDown={() => startMoving('right')}
        onMouseUp={() => stopMoving()}
        onMouseLeave={() => stopMoving()}
      >
        {isLittle ? (
          <span className="text-3xl">➡️</span>
        ) : (
          <Icons.ChevronRight className="w-10 h-10 text-gray-700" />
        )}
      </button>
    </div>
  );
};

// ============================================================================
// Enter Station Button Component
// ============================================================================

const EnterStationButton = ({ station, onEnter, mode = 'surahs', ageGroup = 'young' }) => {
  if (!station) return null;

  const isLittle = ageGroup === 'little';

  // Get colors based on mode
  let bgColor, displayText, stationId, buttonText;

  if (mode === 'alphabet') {
    // For alphabet mode, use station.index if available, otherwise find it
    const letterIndex = station.index !== undefined
      ? station.index
      : ARABIC_ALPHABET.findIndex(l => l.letter === station.letter);
    const safeIndex = letterIndex >= 0 ? letterIndex : 0;
    const colorSet = ALPHABET_COLORS[safeIndex % ALPHABET_COLORS.length] || ALPHABET_COLORS[0];
    bgColor = `linear-gradient(135deg, ${colorSet.primary}, ${colorSet.secondary})`;
    displayText = station.letter || 'ا';
    stationId = safeIndex;
    buttonText = isLittle ? '🎓 Learn!' : 'Learn';
  } else if (mode === 'kalimas') {
    // For kalimas mode
    const kalimaColor = station.color || '#10B981';
    bgColor = `linear-gradient(135deg, ${kalimaColor}, ${kalimaColor}CC)`;
    displayText = station.nameAr || '';
    stationId = station.index !== undefined ? station.index : (station.id ? station.id - 1 : 0);
    buttonText = isLittle ? '📿 Learn!' : 'Memorize';
  } else {
    // For surahs mode
    const colors = STATION_COLORS[station.type] || STATION_COLORS.Makki;
    bgColor = colors?.bg || 'linear-gradient(135deg, #10B981, #047857)';
    displayText = station.arabic || '';
    stationId = station.id || 1;
    buttonText = isLittle ? '📖 Learn!' : 'Enter';
  }

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 z-50 animate-bounce ${isLittle ? 'bottom-32' : 'bottom-28'}`}>
      <button
        className={`rounded-full text-white font-bold shadow-2xl flex items-center gap-2 active:scale-95 transition-transform ${
          isLittle ? 'px-8 py-4 text-xl' : 'px-6 py-3'
        }`}
        style={{
          background: bgColor,
          boxShadow: isLittle ? '0 8px 30px rgba(0,0,0,0.3)' : undefined,
        }}
        onClick={() => onEnter(stationId)}
      >
        <span className={isLittle ? 'text-2xl' : 'text-lg'}>{buttonText}</span>
        {!isLittle && <span className="font-arabic text-lg">{displayText}</span>}
        {!isLittle && <Icons.ChevronRight className="w-5 h-5" />}
      </button>
    </div>
  );
};

// ============================================================================
// Animals Component (decorative)
// ============================================================================

const Animals = ({ offset }) => {
  const animals = useMemo(() => [
    { x: 500, emoji: '🦋', speed: 0.3 },
    { x: 1200, emoji: '🐦', speed: 0.35 },
    { x: 2000, emoji: '🦋', speed: 0.3 },
    { x: 2800, emoji: '🐦', speed: 0.35 },
    { x: 3600, emoji: '🦋', speed: 0.3 },
    { x: 4500, emoji: '🦜', speed: 0.32 },
    { x: 5500, emoji: '🦋', speed: 0.3 },
    { x: 6500, emoji: '🐦', speed: 0.35 },
  ], []);

  return (
    <>
      {animals.map((animal, i) => (
        <div
          key={i}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: animal.x - offset * animal.speed,
            top: 80 + Math.sin(Date.now() / 1000 + i) * 20,
            animation: 'floatAnimal 3s ease-in-out infinite',
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {animal.emoji}
        </div>
      ))}
    </>
  );
};

// ============================================================================
// Main TrainJourney Component
// ============================================================================

const TrainJourney = ({ onEnterStation, onBack, onNextStage, mode = 'surahs', customSurahs = null, hasTopBanner = false, ageGroup = 'young', theme = 'train', isPremium = false }) => {
  const containerRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Desktop responsive scale - scales stations and spacing for larger screens
  const desktopScale = useMemo(() => {
    if (viewportWidth >= 1536) return 1.6;  // 2xl screens (1536px+)
    if (viewportWidth >= 1280) return 1.4;  // xl screens (1280px+)
    if (viewportWidth >= 1024) return 1.2;  // lg screens (1024px+)
    return 1;                                // mobile/tablet
  }, [viewportWidth]);

  // Get config based on mode (with custom surahs support), scaled for desktop
  const config = useMemo(() => {
    let baseConfig;
    if (mode === 'surahs' && customSurahs && customSurahs.length > 0) {
      baseConfig = {
        TRACK_WIDTH: (customSurahs.length + 1) * 200,
        STATION_SPACING: 200,
        STATION_COUNT: customSurahs.length + 1,
      };
    } else {
      baseConfig = getConfig(mode);
    }
    // Scale spacing and track width for desktop viewports
    const scaledSpacing = Math.round(baseConfig.STATION_SPACING * desktopScale);
    return {
      ...baseConfig,
      STATION_SPACING: scaledSpacing,
      TRACK_WIDTH: baseConfig.STATION_COUNT * scaledSpacing,
    };
  }, [mode, customSurahs, desktopScale]);
  const TRACK_WIDTH = config.TRACK_WIDTH;
  const STATION_SPACING = config.STATION_SPACING;
  // Always start at position 100 (first station)
  const [trainPosition, setTrainPosition] = useState(100);
  const [trainSpeed, setTrainSpeed] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [movingDirection, setMovingDirection] = useState(0); // -1 left, 0 none, 1 right
  const [selectedStation, setSelectedStation] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Celebration state
  const [showCelebration, setShowCelebration] = useState(false);
  const [visitedStations, setVisitedStations] = useState(new Set());
  const celebrationShownRef = useRef(false);

  // Inline surah teacher state
  const [showInlineTeacher, setShowInlineTeacher] = useState(false);
  const [teachingSurah, setTeachingSurah] = useState(null);

  // Premium gate state
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const premiumGateShownRef = useRef(false); // Track if we've shown the gate for movement limit

  // Calculate max allowed position for free users (station 5 = index 4, so limit is just before station 6)
  const maxFreePosition = useMemo(() => {
    if (isPremium) return Infinity;
    // Allow movement up to just past station 5 (index 4), block at station 6 (index 5)
    // Station positions: 100, 300, 500, 700, 900, 1100...
    // We want to stop at ~1050 (between station 5 and 6)
    return 100 + (FREE_STATION_LIMIT - 1) * STATION_SPACING + STATION_SPACING * 0.75;
  }, [isPremium, STATION_SPACING]);

  // Sound effect timing refs
  const lastChuggaRef = useRef(0);
  const lastWhistleRef = useRef(0);
  const lastStationBellRef = useRef(null);

  // Current scene based on position
  const currentScene = useMemo(() => getSceneForPosition(trainPosition, STATION_SPACING), [trainPosition, STATION_SPACING]);

  // Ref for smooth animation
  const speedRef = useRef(0);
  const positionRef = useRef(100);

  // Refs for values used in game loop (to avoid stale closures)
  const modeRef = useRef(mode);
  const isPremiumRef = useRef(isPremium);
  const maxFreePositionRef = useRef(maxFreePosition);

  // Update refs when values change
  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { isPremiumRef.current = isPremium; }, [isPremium]);
  useEffect(() => { maxFreePositionRef.current = maxFreePosition; }, [maxFreePosition]);

  // Reset train position when mode changes
  useEffect(() => {
    setTrainPosition(100);
    positionRef.current = 100;
    speedRef.current = 0;
    setTrainSpeed(0);
    setSelectedStation(null);
    setVisitedStations(new Set());
    celebrationShownRef.current = false;
    lastStationBellRef.current = null;
  }, [mode]);

  // Handle back button - stop all audio before going back
  const handleBack = useCallback(() => {
    // Stop kalima audio
    pauseKalimaAudio();
    // Stop any speech synthesis
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    // Call the original onBack
    if (onBack) onBack();
  }, [onBack]);

  // Get the data source based on mode (including finish station)
  const dataSource = useMemo(() => {
    if (mode === 'alphabet') {
      // Add finish station at the end
      return [
        ...ARABIC_ALPHABET,
        { type: 'finish', name: 'Finish', nameAr: 'النهاية' }
      ];
    }
    if (mode === 'kalimas') {
      // Add finish station at the end
      return [
        ...SIX_KALIMAS,
        { type: 'finish', name: 'Complete', nameAr: 'مکمل' }
      ];
    }
    if (mode === 'seert') {
      // Seerah journey - life events of Prophet Muhammad (PBUH)
      return [
        ...SEERAH_EVENTS,
        { type: 'finish', name: 'Journey Complete', nameAr: 'رحلة مکمل', id: 'finish' }
      ];
    }
    // Surahs mode - use custom surahs if provided
    if (customSurahs && customSurahs.length > 0) {
      const filteredSurahs = customSurahs.map(id => SURAHS.find(s => s.id === id)).filter(Boolean);
      return [
        ...filteredSurahs,
        { type: 'finish', name: 'Complete', nameAr: 'مکمل', id: 'finish' }
      ];
    }
    return SURAHS;
  }, [mode, customSurahs]);

  // Calculate station positions
  const stations = useMemo(() => {
    return dataSource.map((item, i) => ({
      ...item,
      position: 100 + i * STATION_SPACING,
      index: i,
    }));
  }, [dataSource, STATION_SPACING]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update scroll offset based on train position
  useEffect(() => {
    const targetOffset = Math.max(0, trainPosition - viewportWidth / 2);
    setScrollOffset(targetOffset);
  }, [trainPosition, viewportWidth]);

  // Optimized game loop using refs for smooth 60fps animation
  useEffect(() => {
    let animFrame;
    let lastTime = performance.now();
    let frameCount = 0;

    const gameLoop = (currentTime) => {
      const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2); // Normalize to 60fps, cap at 2x
      lastTime = currentTime;
      frameCount++;

      // Update speed using ref for smooth interpolation
      if (movingDirection !== 0) {
        speedRef.current += movingDirection * ACCELERATION * deltaTime;
        speedRef.current = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, speedRef.current));
      } else {
        speedRef.current *= Math.pow(FRICTION, deltaTime);
        if (Math.abs(speedRef.current) < 0.1) speedRef.current = 0;
      }

      // Update position using ref
      positionRef.current += speedRef.current * deltaTime;
      positionRef.current = Math.max(50, Math.min(TRACK_WIDTH - 50, positionRef.current));

      // Check premium limit for alphabet/kalimas mode (free users limited to first 5 stations)
      if ((modeRef.current === 'alphabet' || modeRef.current === 'kalimas') && !isPremiumRef.current) {
        if (positionRef.current > maxFreePositionRef.current) {
          // Stop at the limit
          positionRef.current = maxFreePositionRef.current;
          speedRef.current = 0;

          // Show premium gate once when hitting the limit
          if (!premiumGateShownRef.current) {
            premiumGateShownRef.current = true;
            // Use setTimeout to update React state outside of animation frame
            setTimeout(() => setShowPremiumGate(true), 0);
          }
        }
      }

      // Play sounds (throttled) - only gentle chugga, no honk
      const now = Date.now();
      if (Math.abs(speedRef.current) > 2 && now - lastChuggaRef.current > 180) {
        SoundEffects.chugga();
        lastChuggaRef.current = now;
      }
      // Train whistle/honk removed for a more peaceful experience

      // Update React state only every 2 frames to reduce re-renders
      if (frameCount % 2 === 0) {
        setTrainPosition(positionRef.current);
        setTrainSpeed(speedRef.current);
        setIsMoving(Math.abs(speedRef.current) > 0.5);
      }

      animFrame = requestAnimationFrame(gameLoop);
    };

    animFrame = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animFrame);
  }, [movingDirection]);

  // Find nearby station
  useEffect(() => {
    const nearestIndex = stations.findIndex(
      s => Math.abs(s.position - trainPosition) < 60 * desktopScale
    );
    const nearestStation = nearestIndex >= 0 ? stations[nearestIndex] : null;

    if (nearestStation && Math.abs(trainSpeed) < 2) {
      // Unique key for station to detect changes
      const stationKey = mode === 'alphabet'
        ? `letter-${nearestIndex}`
        : mode === 'kalimas'
        ? `kalima-${nearestIndex}`
        : `surah-${nearestStation.id}`;

      if (stationKey !== lastStationBellRef.current) {
        SoundEffects.stationBell();
        // Play audio based on mode
        setTimeout(() => {
          if (mode === 'alphabet') {
            playLetterSound(nearestIndex);
          } else if (mode === 'surahs') {
            playSurahName(nearestStation);
          } else if (mode === 'kalimas') {
            playKalimaAudio(nearestStation);
          }
        }, 400);
        lastStationBellRef.current = stationKey;
      }

      // Set selected station with index for alphabet and kalimas mode
      if (mode === 'alphabet' || mode === 'kalimas') {
        setSelectedStation({ ...nearestStation, index: nearestIndex });

        // Track visited stations (only for actual letters/kalimas, not finish station)
        if (!nearestStation.type || nearestStation.type !== 'finish') {
          setVisitedStations(prev => {
            const newSet = new Set(prev);
            newSet.add(nearestIndex);
            return newSet;
          });
        }
        // Note: Celebration is now ONLY triggered by the finish station, not the last letter
      } else {
        setSelectedStation(nearestStation);
      }
    } else if (Math.abs(trainSpeed) > 3) {
      setSelectedStation(null);
    }
  }, [trainPosition, trainSpeed, stations, mode]);

  // Handle entering a station - must be defined before keyboard controls
  const handleEnterStation = useCallback((stationId) => {
    // Check station limit for free users in surahs mode
    if (mode === 'surahs' && !isPremium) {
      // Find the station index
      const stationIndex = stations.findIndex(s => s.id === stationId);
      if (stationIndex >= FREE_STATION_LIMIT) {
        // Show premium gate for stations beyond the free limit
        setShowPremiumGate(true);
        return;
      }
    }

    SoundEffects.success();

    // For surahs mode, show inline teacher instead of calling onEnterStation
    if (mode === 'surahs') {
      const surah = SURAHS.find(s => s.id === stationId);
      if (surah) {
        setTeachingSurah(surah);
        setShowInlineTeacher(true);
        return;
      }
    }

    // For alphabet and kalimas, use the original behavior
    onEnterStation(stationId);
  }, [onEnterStation, mode, isPremium, stations]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setMovingDirection(-1);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setMovingDirection(1);
      } else if ((e.key === 'Enter' || e.key === ' ') && selectedStation) {
        handleEnterStation(selectedStation.id);
      }
    };

    const handleKeyUp = (e) => {
      if (
        e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A' ||
        e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D'
      ) {
        setMovingDirection(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedStation, handleEnterStation]);

  // Touch/swipe controls
  const touchStartRef = useRef(null);
  const lastTouchRef = useRef(null);
  const doubleTapRef = useRef(null);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    lastTouchRef.current = e.touches[0].clientX;

    // Double tap detection
    const now = Date.now();
    if (doubleTapRef.current && now - doubleTapRef.current < 300 && selectedStation) {
      handleEnterStation(selectedStation.id);
    }
    doubleTapRef.current = now;
  };

  const handleTouchMove = (e) => {
    if (!touchStartRef.current) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - lastTouchRef.current;

    if (Math.abs(deltaX) > 5) {
      setMovingDirection(deltaX > 0 ? -1 : 1);
    }

    lastTouchRef.current = currentX;
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    lastTouchRef.current = null;
    setMovingDirection(0);
  };

  // Station click handler
  const handleStationSelect = (surah) => {
    SoundEffects.click();
    setSelectedStation(surah);
    // Move train towards selected station
    const targetPos = surah.position;
    if (targetPos > trainPosition) {
      setMovingDirection(1);
      setTimeout(() => setMovingDirection(0), Math.abs(targetPos - trainPosition) * 10);
    } else if (targetPos < trainPosition) {
      setMovingDirection(-1);
      setTimeout(() => setMovingDirection(0), Math.abs(targetPos - trainPosition) * 10);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden touch-none select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background layers - theme-dependent */}
      {theme === 'garden' ? (
        <GardenBackground
          scrollPosition={(scrollOffset / TRACK_WIDTH) * 100}
          width={TRACK_WIDTH}
          time={currentScene?.name === 'night' ? 'sunset' : 'day'}
        />
      ) : theme === 'seert' ? (
        <SeertBackground
          scrollPosition={(scrollOffset / TRACK_WIDTH) * 100}
          width={TRACK_WIDTH}
          time={currentScene?.name === 'night' ? 'night' : currentScene?.name === 'sunset' ? 'sunset' : 'day'}
        />
      ) : theme === 'motorbike' ? (
        <RoadBackground
          scrollPosition={(scrollOffset / TRACK_WIDTH) * 100}
          width={TRACK_WIDTH}
          time={currentScene?.name === 'night' ? 'night' : currentScene?.name === 'sunset' ? 'sunset' : 'day'}
        />
      ) : (
        <>
          <SkyLayer scene={currentScene} hasTopBanner={hasTopBanner} />
          <FarMountains offset={scrollOffset} scene={currentScene} />
          <NearMountains offset={scrollOffset} scene={currentScene} />
          <Trees offset={scrollOffset} />
          <Flowers offset={scrollOffset} />
          <Animals offset={scrollOffset} />
        </>
      )}

      {/* Inline Surah Teacher - appears in sky area above train */}
      {showInlineTeacher && teachingSurah && (
        <SurahTeacher
          surah={teachingSurah}
          ageGroup={ageGroup}
          hasTopBanner={hasTopBanner}
          onClose={() => {
            setShowInlineTeacher(false);
            setTeachingSurah(null);
          }}
          onComplete={(surahId) => {
            setShowInlineTeacher(false);
            setTeachingSurah(null);
          }}
          isInline={true}
        />
      )}

      {/* Track - only for train theme (garden/seert/motorbike have paths in background) */}
      {theme === 'train' && <Track offset={scrollOffset} width={TRACK_WIDTH} />}

      {/* Stations */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateX(${-scrollOffset}px)` }}
      >
        {mode === 'alphabet' ? (
          // Alphabet mode - show letter stations + finish station
          stations.map((station, index) => (
            station.type === 'finish' ? (
              <FinishStation
                key="finish"
                x={station.position}
                isSelected={selectedStation?.type === 'finish'}
                stationScale={desktopScale}
                isNearby={Math.abs(station.position - trainPosition) < 150}
                mode={mode}
                onSelect={() => {
                  SoundEffects.click();
                  setSelectedStation({ ...station, index, position: station.position });
                  // Show celebration
                  if (!celebrationShownRef.current) {
                    celebrationShownRef.current = true;
                    setTimeout(() => setShowCelebration(true), 500);
                  }
                }}
              />
            ) : (
              <AlphabetStation
                key={index}
                letter={station}
                index={index}
                x={station.position}
                isSelected={selectedStation?.letter === station.letter}
                isNearby={Math.abs(station.position - trainPosition) < 150 * desktopScale}
                stationScale={desktopScale}
                onSelect={(letter, idx) => {
                  SoundEffects.click();
                  setSelectedStation({ ...letter, index: idx, position: station.position });
                }}
              />
            )
          ))
        ) : mode === 'kalimas' ? (
          // Kalimas mode - show kalima stations + finish station
          stations.map((station, index) => (
            station.type === 'finish' ? (
              <FinishStation
                key="finish"
                x={station.position}
                isSelected={selectedStation?.type === 'finish'}
                stationScale={desktopScale}
                isNearby={Math.abs(station.position - trainPosition) < 200}
                mode={mode}
                onSelect={() => {
                  SoundEffects.click();
                  setSelectedStation({ ...station, index, position: station.position });
                  // Show celebration for kalimas completion
                  if (!celebrationShownRef.current) {
                    celebrationShownRef.current = true;
                    setTimeout(() => setShowCelebration(true), 500);
                  }
                }}
              />
            ) : (
              <KalimaStation
                key={station.id}
                kalima={station}
                index={index}
                x={station.position}
                isSelected={selectedStation?.id === station.id}
                isNearby={Math.abs(station.position - trainPosition) < 200 * desktopScale}
                stationScale={desktopScale}
                onSelect={(kalima, idx) => {
                  SoundEffects.click();
                  setSelectedStation({ ...kalima, index: idx, position: station.position });
                }}
              />
            )
          ))
        ) : mode === 'seert' ? (
          // Seert mode - show Seerah event stations + finish station
          stations.map((station, index) => (
            station.type === 'finish' ? (
              <FinishStation
                key="finish"
                x={station.position}
                isSelected={selectedStation?.type === 'finish'}
                stationScale={desktopScale}
                isNearby={Math.abs(station.position - trainPosition) < 200}
                mode={mode}
                onSelect={() => {
                  SoundEffects.click();
                  setSelectedStation({ ...station, index, position: station.position });
                  if (!celebrationShownRef.current) {
                    celebrationShownRef.current = true;
                    setTimeout(() => setShowCelebration(true), 500);
                  }
                }}
              />
            ) : (
              <SeertStation
                key={station.id}
                event={station}
                index={index}
                x={station.position}
                isSelected={selectedStation?.id === station.id}
                isNearby={Math.abs(station.position - trainPosition) < 200 * desktopScale}
                stationScale={desktopScale}
                onSelect={(event, idx) => {
                  SoundEffects.click();
                  setSelectedStation({ ...event, index: idx, position: station.position });
                }}
              />
            )
          ))
        ) : (
          // Surahs mode - show surah stations
          stations.map(station => (
            <Station
              key={station.id}
              surah={station}
              x={station.position}
              isSelected={selectedStation?.id === station.id}
              isNearby={Math.abs(station.position - trainPosition) < 150 * desktopScale}
              onSelect={handleStationSelect}
              stationScale={desktopScale}
            />
          ))
        )}
      </div>

      {/* Vehicle - theme-dependent */}
      {/* Direction: use movingDirection for immediate response, fallback to trainSpeed */}
      {theme === 'garden' ? (
        <div
          className="absolute z-20"
          style={{
            left: trainPosition - scrollOffset - 90,
            bottom: 70,
          }}
        >
          <MagicCarpet
            isMoving={isMoving}
            direction={movingDirection !== 0 ? (movingDirection > 0 ? 'right' : 'left') : (trainSpeed >= 0 ? 'right' : 'left')}
            speed={Math.abs(trainSpeed) / MAX_SPEED}
            scale={1.2}
          />
        </div>
      ) : theme === 'seert' ? (
        <div
          className="absolute z-20"
          style={{
            left: trainPosition - scrollOffset - 80,
            bottom: 55,
          }}
        >
          <Camel
            isMoving={isMoving}
            direction={movingDirection !== 0 ? (movingDirection > 0 ? 'right' : 'left') : (trainSpeed >= 0 ? 'right' : 'left')}
            speed={Math.abs(trainSpeed) / MAX_SPEED}
            scale={1}
          />
        </div>
      ) : theme === 'motorbike' ? (
        <div
          className="absolute z-20"
          style={{
            left: trainPosition - scrollOffset - 60,
            bottom: 45,
          }}
        >
          <Motorbike
            isMoving={isMoving}
            direction={movingDirection !== 0 ? (movingDirection > 0 ? 'right' : 'left') : (trainSpeed >= 0 ? 'right' : 'left')}
            speed={Math.abs(trainSpeed) / MAX_SPEED}
            scale={1}
          />
        </div>
      ) : (
        <Train
          x={trainPosition - scrollOffset}
          isMoving={isMoving}
          direction={trainSpeed >= 0 ? 1 : -1}
          speed={trainSpeed}
        />
      )}

      {/* UI Elements */}

      {/* Back button */}
      <button
        className={`absolute left-4 z-40 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center active:scale-95 transition-transform border-2 border-gray-200 ${hasTopBanner ? 'top-14' : 'top-4'}`}
        onClick={handleBack}
      >
        <Icons.ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Station indicator - Full metadata card (hidden when SurahTeacher is open) */}
      {!showInlineTeacher && (
      <div className={`absolute left-1/2 -translate-x-1/2 z-40 ${hasTopBanner ? 'top-14' : 'top-4'}`}>
        {selectedStation ? (
          selectedStation.type === 'finish' ? (
            // Finish station card
            <div className="bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-3xl p-1 shadow-2xl animate-pulse">
              <div className="bg-white rounded-3xl p-6 text-center">
                <div className="text-5xl mb-2">{mode === 'seert' ? '🐪' : '🏆'}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {mode === 'alphabet' ? 'Alphabet Complete!' : mode === 'seert' ? 'Seerah Journey Complete!' : 'Kalimas Complete!'}
                </h3>
                <p className="text-gray-600 mb-3">
                  {mode === 'alphabet' ? 'ماشاء اللہ! All 28 letters learned!' : mode === 'seert' ? 'ماشاء اللہ! Journey through the Prophet\'s life complete!' : 'ماشاء اللہ! All 6 Kalimas learned!'}
                </p>
                <button
                  onClick={() => {
                    if (!celebrationShownRef.current) {
                      celebrationShownRef.current = true;
                      setShowCelebration(true);
                    }
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  🎉 Celebrate & Continue!
                </button>
              </div>
            </div>
          ) : mode === 'alphabet' ? (
            // Alphabet mode info card - BIG letter for kids with writing animation!
            <AlphabetLearningCard
              station={selectedStation}
              visitedCount={visitedStations.size}
              color={ALPHABET_COLORS[(selectedStation.index || 0) % ALPHABET_COLORS.length]}
              onPlaySound={() => playLetterSound(selectedStation.index || 0)}
            />
          ) : mode === 'kalimas' ? (
            // Kalimas mode - Interactive Learning Card
            <KalimaLearningCard
              kalima={selectedStation}
              visitedCount={visitedStations.size}
              totalCount={6}
            />
          ) : mode === 'seert' ? (
            // Seert mode - Seerah Event Learning Card
            <SeertEventCard
              event={selectedStation}
              visitedCount={visitedStations.size}
              totalCount={SEERAH_EVENTS.length}
            />
          ) : (
            // Surahs mode info card
            (() => {
              const surahColors = STATION_COLORS[selectedStation.type] || STATION_COLORS.Makki;
              return (
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border-2 animate-fadeIn"
              style={{ borderColor: surahColors.primary }}
            >
              {/* Header row */}
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  style={{ background: surahColors.bg }}
                >
                  {selectedStation.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-gray-800">
                      {selectedStation.name}
                    </span>
                    <span
                      className="font-arabic text-lg"
                      style={{ color: surahColors.primary }}
                    >
                      {selectedStation.arabic}
                    </span>
                    {/* Speaker button to play surah name */}
                    <button
                      onClick={() => playSurahName(selectedStation)}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
                      title="Listen to surah name"
                    >
                      <Icons.Volume2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  {selectedStation.meaning && (
                    <div className="text-sm text-gray-500 italic">
                      "{selectedStation.meaning}"
                    </div>
                  )}
                </div>
              </div>

              {/* Metadata row */}
              <div className="flex items-center gap-4 text-sm">
                {/* Type badge */}
                <div
                  className="px-3 py-1 rounded-full text-white font-medium flex items-center gap-1"
                  style={{ background: surahColors.bg }}
                >
                  {selectedStation.type === 'Makki' ? '🕋' : '🕌'}
                  <span>{selectedStation.type}</span>
                </div>

                {/* Ayah count */}
                <div className="flex items-center gap-1 text-gray-600">
                  <span className="text-lg">📖</span>
                  <span className="font-bold">{selectedStation.ayahs}</span>
                  <span>Ayahs</span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Level:</span>
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="text-base"
                      style={{
                        color: i < (selectedStation.ayahs <= 20 ? 1 : selectedStation.ayahs <= 100 ? 2 : 3)
                          ? '#FCD34D'
                          : '#E5E7EB',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Topics */}
              {selectedStation.topics && selectedStation.topics.length > 0 && (
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-gray-400">Topics:</span>
                  {selectedStation.topics.slice(0, 3).map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs capitalize"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
              );
            })()
          )
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-gray-200">
            <span className="text-gray-500">
              {mode === 'alphabet'
                ? '🚂 Move the train to learn Arabic letters!'
                : mode === 'kalimas'
                ? '📿 Move the train to learn the Six Kalimas!'
                : 'Use arrow keys or swipe to move the train'
              }
            </span>
          </div>
        )}
      </div>
      )}

      {/* Controls hint (desktop) - Hidden when teaching panel is open, positioned below banner if present */}
      {!showInlineTeacher && (
        <div className={`hidden md:block absolute right-4 z-20 ${hasTopBanner ? 'top-12' : 'top-4'}`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">←</kbd>
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">→</kbd>
              <span>Move</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px]">Enter</kbd>
              <span>Enter station</span>
            </div>
          </div>
        </div>
      )}

      {/* Enter station button - Hidden when teaching panel is open */}
      {!showInlineTeacher && (
        <EnterStationButton
          station={selectedStation}
          onEnter={handleEnterStation}
          mode={mode}
          ageGroup={ageGroup}
        />
      )}

      {/* Mobile control buttons - Hidden when teaching panel is open */}
      {!showInlineTeacher && (
        <ControlButtons
          onLeft={() => setMovingDirection(-1)}
          onRight={() => setMovingDirection(1)}
          onStop={() => setMovingDirection(0)}
          isMoving={isMoving}
          ageGroup={ageGroup}
        />
      )}

      {/* Mini map */}
      <MiniMap
        trainPosition={trainPosition}
        stations={stations}
        totalWidth={TRACK_WIDTH}
        selectedStation={selectedStation}
        mode={mode}
        theme={theme}
      />

      {/* Progress indicator - moved to TOP RIGHT to avoid overlap */}
      {(mode === 'alphabet' || mode === 'kalimas') && !selectedStation && (
        <div className="absolute top-4 right-16 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-purple-600">
                {visitedStations.size}/{mode === 'alphabet' ? 28 : 6}
              </span>
              <span className="text-base">
                {mode === 'alphabet'
                  ? (visitedStations.size === 28 ? '🏆' : visitedStations.size >= 20 ? '🌟' : '🚂')
                  : (visitedStations.size === 6 ? '🏆' : visitedStations.size >= 4 ? '🌟' : '📿')
                }
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Celebration Modal */}
      <CelebrationModal
        isVisible={showCelebration}
        onClose={() => setShowCelebration(false)}
        onNextStage={() => {
          setShowCelebration(false);
          if (onNextStage) onNextStage();
        }}
        completedStage={mode}
      />

      {/* Premium Gate Modal - shown when trying to access station beyond free limit */}
      {showPremiumGate && (
        <KidsPremiumGate
          onClose={() => {
            setShowPremiumGate(false);
            // Reset the ref after a delay so the popup can show again if user tries to move past limit
            setTimeout(() => {
              premiumGateShownRef.current = false;
            }, 1000);
          }}
          feature="station_limit"
        />
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatCloud {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }

        @keyframes floatAnimal {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .font-arabic {
          font-family: 'Scheherazade New', 'Amiri', serif;
        }
      `}</style>
    </div>
  );
};

export default TrainJourney;
export { SIX_KALIMAS };
