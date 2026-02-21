/**
 * KidsMode Component
 * Main entry point for Quran Kids feature
 *
 * Features:
 * - Theme selection (Train, Garden, Desert adventures)
 * - Arabic Alphabet learning (Alif to Ya)
 * - Kid-friendly UI with colorful animations
 * - Full screen overlay experience
 * - Audio controls for background sounds
 */

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Icons } from '../common/Icons';
import KidsModeMenu from './KidsModeMenu';
import TrainJourney from './TrainJourney';
import ProphetLifeJourney from './ProphetLifeJourney';
import KidsSurahLearning from './KidsSurahLearning';
import KidsLoginGate from './KidsLoginGate';
import KidsPremiumGate from './KidsPremiumGate';
import { SURAHS } from '../../data';
import { useAuth } from '../../contexts/AuthContext';

// Payment Result Popup Component
const PaymentResultPopup = ({ success, canceled, onClose, onRetry, isLoading = false }) => {
  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl">
        {success ? (
          <>
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Quran Kids Premium! All features are now unlocked.
            </p>
            <button
              onClick={onClose}
              disabled={isLoading}
              className={`w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Activating Premium...</span>
                </>
              ) : (
                <span>Start Learning! 🚀</span>
              )}
            </button>
          </>
        ) : canceled ? (
          <>
            <div className="text-7xl mb-4">🤔</div>
            <h2 className="text-2xl font-bold text-amber-600 mb-2">Payment Canceled</h2>
            <p className="text-gray-600 mb-6">
              No worries! You can upgrade anytime to unlock all features.
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                Continue with Free
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-7xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h2>
            <p className="text-gray-600 mb-6">
              Something went wrong with your payment. Please try again.
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Full Arabic Alphabet with pronunciations, forms, and example words
// Forms: isolated, initial (start), medial (middle), final (end)
const ARABIC_ALPHABET = [
  { letter: 'ا', name: 'Alif', nameAr: 'ألف', sound: 'a',
    forms: { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا' },
    example: { word: 'أسد', meaning: 'Lion', emoji: '🦁' }, group: 1 },
  { letter: 'ب', name: 'Ba', nameAr: 'باء', sound: 'b',
    forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' },
    example: { word: 'بقرة', meaning: 'Cow', emoji: '🐄' }, group: 2 },
  { letter: 'ت', name: 'Ta', nameAr: 'تاء', sound: 't',
    forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' },
    example: { word: 'تفاح', meaning: 'Apple', emoji: '🍎' }, group: 2 },
  { letter: 'ث', name: 'Tha', nameAr: 'ثاء', sound: 'th',
    forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' },
    example: { word: 'ثعلب', meaning: 'Fox', emoji: '🦊' }, group: 2 },
  { letter: 'ج', name: 'Jim', nameAr: 'جيم', sound: 'j',
    forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' },
    example: { word: 'جمل', meaning: 'Camel', emoji: '🐪' }, group: 3 },
  { letter: 'ح', name: 'Ha', nameAr: 'حاء', sound: 'h',
    forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' },
    example: { word: 'حصان', meaning: 'Horse', emoji: '🐴' }, group: 3 },
  { letter: 'خ', name: 'Kha', nameAr: 'خاء', sound: 'kh',
    forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' },
    example: { word: 'خروف', meaning: 'Sheep', emoji: '🐑' }, group: 3 },
  { letter: 'د', name: 'Dal', nameAr: 'دال', sound: 'd',
    forms: { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد' },
    example: { word: 'دب', meaning: 'Bear', emoji: '🐻' }, group: 4 },
  { letter: 'ذ', name: 'Zal', nameAr: 'ذال', sound: 'dh',
    forms: { isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ' },
    example: { word: 'ذهب', meaning: 'Gold', emoji: '🥇' }, group: 4 },
  { letter: 'ر', name: 'Ra', nameAr: 'راء', sound: 'r',
    forms: { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر' },
    example: { word: 'رمان', meaning: 'Pomegranate', emoji: '🍎' }, group: 5 },
  { letter: 'ز', name: 'Zay', nameAr: 'زاي', sound: 'z',
    forms: { isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز' },
    example: { word: 'زهرة', meaning: 'Flower', emoji: '🌸' }, group: 5 },
  { letter: 'س', name: 'Sin', nameAr: 'سين', sound: 's',
    forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' },
    example: { word: 'سمك', meaning: 'Fish', emoji: '🐟' }, group: 6 },
  { letter: 'ش', name: 'Shin', nameAr: 'شين', sound: 'sh',
    forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' },
    example: { word: 'شمس', meaning: 'Sun', emoji: '☀️' }, group: 6 },
  { letter: 'ص', name: 'Sad', nameAr: 'صاد', sound: 'ṣ',
    forms: { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' },
    example: { word: 'صقر', meaning: 'Falcon', emoji: '🦅' }, group: 7 },
  { letter: 'ض', name: 'Dad', nameAr: 'ضاد', sound: 'ḍ',
    forms: { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' },
    example: { word: 'ضفدع', meaning: 'Frog', emoji: '🐸' }, group: 7 },
  { letter: 'ط', name: 'Ta', nameAr: 'طاء', sound: 'ṭ',
    forms: { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' },
    example: { word: 'طائر', meaning: 'Bird', emoji: '🐦' }, group: 8 },
  { letter: 'ظ', name: 'Za', nameAr: 'ظاء', sound: 'ẓ',
    forms: { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' },
    example: { word: 'ظرف', meaning: 'Envelope', emoji: '✉️' }, group: 8 },
  { letter: 'ع', name: 'Ayn', nameAr: 'عين', sound: 'ʿ',
    forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' },
    example: { word: 'عنب', meaning: 'Grapes', emoji: '🍇' }, group: 9 },
  { letter: 'غ', name: 'Ghayn', nameAr: 'غين', sound: 'gh',
    forms: { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' },
    example: { word: 'غزال', meaning: 'Deer', emoji: '🦌' }, group: 9 },
  { letter: 'ف', name: 'Fa', nameAr: 'فاء', sound: 'f',
    forms: { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' },
    example: { word: 'فيل', meaning: 'Elephant', emoji: '🐘' }, group: 10 },
  { letter: 'ق', name: 'Qaf', nameAr: 'قاف', sound: 'q',
    forms: { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' },
    example: { word: 'قمر', meaning: 'Moon', emoji: '🌙' }, group: 10 },
  { letter: 'ك', name: 'Kaf', nameAr: 'كاف', sound: 'k',
    forms: { isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' },
    example: { word: 'كلب', meaning: 'Dog', emoji: '🐕' }, group: 11 },
  { letter: 'ل', name: 'Lam', nameAr: 'لام', sound: 'l',
    forms: { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' },
    example: { word: 'ليمون', meaning: 'Lemon', emoji: '🍋' }, group: 12 },
  { letter: 'م', name: 'Mim', nameAr: 'ميم', sound: 'm',
    forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' },
    example: { word: 'موز', meaning: 'Banana', emoji: '🍌' }, group: 13 },
  { letter: 'ن', name: 'Nun', nameAr: 'نون', sound: 'n',
    forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' },
    example: { word: 'نحلة', meaning: 'Bee', emoji: '🐝' }, group: 14 },
  { letter: 'ه', name: 'Ha', nameAr: 'هاء', sound: 'h',
    forms: { isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه' },
    example: { word: 'هلال', meaning: 'Crescent', emoji: '🌙' }, group: 15 },
  { letter: 'و', name: 'Waw', nameAr: 'واو', sound: 'w',
    forms: { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو' },
    example: { word: 'وردة', meaning: 'Rose', emoji: '🌹' }, group: 16 },
  { letter: 'ي', name: 'Ya', nameAr: 'ياء', sound: 'y',
    forms: { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' },
    example: { word: 'يد', meaning: 'Hand', emoji: '✋' }, group: 17 },
];

// Alphabet sections mapping
const ALPHABET_SECTIONS = {
  'alphabet-1': { start: 0, end: 5, name: 'Alif to Jim', gradient: 'from-pink-400 via-rose-500 to-red-500' },
  'alphabet-2': { start: 5, end: 11, name: 'Ha to Zay', gradient: 'from-violet-400 via-purple-500 to-indigo-500' },
  'alphabet-3': { start: 11, end: 28, name: 'Sin to Ya', gradient: 'from-teal-400 via-cyan-500 to-blue-500' },
};

// Real Arabic alphabet audio files from IslamCan.com (free educational resource)
const LETTER_AUDIO_FILES = [
  '001-alif.mp3',   // Alif
  'ba.mp3',         // Ba (note: different naming)
  '003-taa.mp3',    // Ta
  '004-tha.mp3',    // Tha
  '005-jeem.mp3',   // Jim
  '006-haa.mp3',    // Ha
  '007-khaa.mp3',   // Kha
  '008-dal.mp3',    // Dal
  '009-dhal.mp3',   // Zal
  '010-raa.mp3',    // Ra
  '011-jaa.mp3',    // Zay
  '012-seen.mp3',   // Sin
  '013-sheen.mp3',  // Shin
  '014-saad.mp3',   // Sad
  '015-dhaad.mp3',  // Dad
  '016-toa.mp3',    // Ta
  '017-dhaa.mp3',   // Za
  '018-ain.mp3',    // Ayn
  '019-ghain.mp3',  // Ghayn
  '020-faa.mp3',    // Fa
  '021-qaaf.mp3',   // Qaf
  '022-kaaf.mp3',   // Kaf
  '023-laam.mp3',   // Lam
  '024-meem.mp3',   // Mim
  '025-noon.mp3',   // Nun
  '027-ha.mp3',     // Ha (not 026 which is Waw)
  '026-waw.mp3',    // Waw
  '029-yaa.mp3',    // Ya
];

const AUDIO_BASE_URL = 'https://www.islamcan.com/learn-arabic/arabic-alphabets/';

// Cache for preloaded audio
const audioCache = {};

// Preload audio files for faster playback
const preloadLetterAudio = (letterIndex) => {
  if (letterIndex >= 0 && letterIndex < LETTER_AUDIO_FILES.length && !audioCache[letterIndex]) {
    const audio = new Audio(AUDIO_BASE_URL + LETTER_AUDIO_FILES[letterIndex]);
    audio.preload = 'auto';
    audioCache[letterIndex] = audio;
  }
};

// Preload first few letters on page load
if (typeof window !== 'undefined') {
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      preloadLetterAudio(i);
    }
  }, 2000);
}

// Sound generator for alphabet - uses REAL human audio recordings
const playLetterSound = (letterIndex) => {
  try {
    if (letterIndex < 0 || letterIndex >= LETTER_AUDIO_FILES.length) return;

    // Use cached audio or create new
    let audio = audioCache[letterIndex];
    if (!audio) {
      audio = new Audio(AUDIO_BASE_URL + LETTER_AUDIO_FILES[letterIndex]);
      audioCache[letterIndex] = audio;
    }

    // Reset and play
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play().catch(e => {
      console.log('Audio play failed, trying fresh instance:', e);
      // If cached audio fails, try a fresh instance
      const freshAudio = new Audio(AUDIO_BASE_URL + LETTER_AUDIO_FILES[letterIndex]);
      freshAudio.play();
    });

    // Preload next few letters for smooth experience
    preloadLetterAudio(letterIndex + 1);
    preloadLetterAudio(letterIndex + 2);

    // Also play a soft chime for extra engagement
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      const pentatonic = [523.25, 587.33, 659.25, 783.99, 880.00];
      const freq = pentatonic[letterIndex % pentatonic.length];

      osc.type = 'sine';
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0, audioContext.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, audioContext.currentTime + 0.05);
      gain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      osc.stop(audioContext.currentTime + 0.25);
    } catch (e) {
      // Chime is optional, ignore errors
    }
  } catch (e) {
    console.log('Sound not available:', e);
  }
};

// Export for use in TrainJourney
export { ARABIC_ALPHABET, playLetterSound };

// Theme configurations (matching KidsModeMenu themes)
const THEMES = {
  train: {
    id: 'train',
    name: 'Train Journey',
    nameAr: 'رحلة القطار',
    description: 'Choo choo! Learn Quran on a magical train ride!',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    color: '#0EA5E9'
  },
  garden: {
    id: 'garden',
    name: 'Garden Path',
    nameAr: 'مسار الحديقة',
    description: 'Walk through a beautiful garden of verses!',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    color: '#10B981'
  },
  desert: {
    id: 'desert',
    name: 'Desert Caravan',
    nameAr: 'قافلة الصحراء',
    description: 'Journey across the desert with camels!',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    color: '#F59E0B'
  }
};

// Generate random stars for background animation
const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));
};

// Alphabet Learning Component
const AlphabetLearning = ({ sectionId, onBack }) => {
  const section = ALPHABET_SECTIONS[sectionId];
  const letters = ARABIC_ALPHABET.slice(section.start, section.end);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentLetter = letters[currentIndex];

  // Play sound when letter changes
  useEffect(() => {
    if (currentLetter) {
      playLetterSound(section.start + currentIndex);
    }
  }, [currentIndex, section.start]);

  const handleNext = () => {
    if (currentIndex < letters.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  const handleLetterClick = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br ${section.gradient}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-6xl font-arabic animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {ARABIC_ALPHABET[Math.floor(Math.random() * 28)].letter}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all"
        >
          <Icons.ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          {section.name}
        </h1>

        <div className="w-24" />
      </header>

      {/* Main letter display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 pb-32">
        {/* Current letter card */}
        <div
          className={`
            bg-white rounded-3xl shadow-2xl p-8 sm:p-12
            transform transition-all duration-300
            ${isAnimating ? 'scale-90 opacity-50' : 'scale-100 opacity-100'}
          `}
          onClick={() => playLetterSound(section.start + currentIndex)}
        >
          {/* Letter */}
          <div
            className="text-[120px] sm:text-[180px] font-bold text-center cursor-pointer"
            style={{
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              background: `linear-gradient(135deg, ${section.gradient.includes('pink') ? '#EC4899' : section.gradient.includes('violet') ? '#8B5CF6' : '#06B6D4'}, ${section.gradient.includes('pink') ? '#F43F5E' : section.gradient.includes('violet') ? '#6366F1' : '#0EA5E9'})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {currentLetter.letter}
          </div>

          {/* Name */}
          <div className="text-center mt-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {currentLetter.name}
            </h2>
            <p className="text-xl text-gray-500 font-arabic mt-1">
              {currentLetter.nameAr}
            </p>
            <p className="text-lg text-gray-400 mt-2">
              Sound: "{currentLetter.sound}"
            </p>
          </div>

          {/* Tap to hear */}
          <p className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
            <Icons.Volume2 className="w-4 h-4" />
            Tap to hear again
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-8 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`
              w-14 h-14 rounded-full flex items-center justify-center
              transition-all shadow-lg
              ${currentIndex === 0
                ? 'bg-white/20 text-white/40 cursor-not-allowed'
                : 'bg-white text-gray-800 hover:scale-110'
              }
            `}
          >
            <Icons.ChevronLeft className="w-8 h-8" />
          </button>

          <span className="text-white text-xl font-bold">
            {currentIndex + 1} / {letters.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === letters.length - 1}
            className={`
              w-14 h-14 rounded-full flex items-center justify-center
              transition-all shadow-lg
              ${currentIndex === letters.length - 1
                ? 'bg-white/20 text-white/40 cursor-not-allowed'
                : 'bg-white text-gray-800 hover:scale-110'
              }
            `}
          >
            <Icons.ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Letter thumbnails at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
          {letters.map((letter, index) => (
            <button
              key={index}
              onClick={() => handleLetterClick(index)}
              className={`
                w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center
                text-2xl sm:text-3xl font-bold font-arabic
                transition-all duration-200
                ${index === currentIndex
                  ? 'bg-white text-gray-800 scale-110 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/40'
                }
              `}
            >
              {letter.letter}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .font-arabic {
          font-family: 'Scheherazade New', 'Amiri', serif;
        }
      `}</style>
    </div>
  );
};

// ============================================================================
// Surah Journey Tracks - Age-based learning paths
// ============================================================================

const SURAH_TRACKS = {
  // Level 1: Little Stars (3-5 years) - 5 essential prayer surahs
  little: {
    id: 'little',
    name: 'Little Stars',
    nameAr: 'النجوم الصغيرة',
    ageRange: '3-5 years',
    ageQuestion: "I'm 3, 4, or 5 years old",
    emoji: '👶',
    color: '#10B981',
    description: 'My first 5 surahs!',
    surahs: [1, 112, 113, 114, 108], // Fatiha, Ikhlas, Falaq, Nas, Kawthar
    totalVerses: 25,
  },
  // Level 2: Young Learners (5-8 years) - 15 short surahs
  young: {
    id: 'young',
    name: 'Young Learners',
    nameAr: 'المتعلمون الصغار',
    ageRange: '5-8 years',
    ageQuestion: "I'm 5, 6, 7, or 8 years old",
    emoji: '👦',
    color: '#3B82F6',
    description: '15 short surahs to learn!',
    surahs: [1, 112, 113, 114, 108, 103, 110, 109, 105, 106, 107, 111, 97, 95, 94],
    totalVerses: 75,
  },
  // Level 3: Junior Hafiz (8-12 years) - 20 surahs
  junior: {
    id: 'junior',
    name: 'Junior Hafiz',
    nameAr: 'الحافظ الصغير',
    ageRange: '8-12 years',
    ageQuestion: "I'm 8, 9, 10, 11, or 12 years old",
    emoji: '👧',
    color: '#8B5CF6',
    description: '20 surahs for memorization!',
    surahs: [1, 112, 113, 114, 108, 103, 110, 109, 105, 106, 107, 111, 97, 95, 94, 93, 101, 102, 104, 99],
    totalVerses: 115,
  },
  // Level 4: Advanced (12+ years) - Full Juz Amma (37 surahs)
  advanced: {
    id: 'advanced',
    name: 'Juz Amma Master',
    nameAr: 'جزء عمّ',
    ageRange: '12+ years',
    ageQuestion: "I'm 12 years or older",
    emoji: '🧕',
    color: '#F59E0B',
    description: 'Complete Juz Amma - 37 surahs!',
    surahs: Array.from({ length: 37 }, (_, i) => 78 + i), // Surahs 78-114
    totalVerses: 564,
  },
};

// Get completed surahs from localStorage
const getCompletedSurahs = () => {
  try {
    const saved = localStorage.getItem('kids_completed_surahs');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

// Save completed surah
const saveCompletedSurah = (surahId) => {
  try {
    const completed = getCompletedSurahs();
    if (!completed.includes(surahId)) {
      completed.push(surahId);
      localStorage.setItem('kids_completed_surahs', JSON.stringify(completed));
    }
  } catch {}
};

// Get saved age group
const getSavedAgeGroup = () => {
  try {
    return localStorage.getItem('kids_age_group') || null;
  } catch {
    return null;
  }
};

// Save age group
const saveAgeGroup = (level) => {
  try {
    localStorage.setItem('kids_age_group', level);
  } catch {}
};

const KidsMode = ({ isVisible, onClose }) => {
  // Get auth state
  const { isAuthenticated, isPremium, loading: authLoading, refreshUser } = useAuth();

  // State management
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedThemeMode, setSelectedThemeMode] = useState('surahs'); // Mode: surahs, seert
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const [selectedAlphabetTheme, setSelectedAlphabetTheme] = useState('train'); // Theme: train, garden, seert
  const [selectedKalimas, setSelectedKalimas] = useState(false); // Stage 2: Six Kalimas
  const [selectedSurahs, setSelectedSurahs] = useState(false); // Stage 3: Surahs
  const [surahJourneyLevel, setSurahJourneyLevel] = useState(null); // Selected surah track
  const [showSurahSelection, setShowSurahSelection] = useState(false); // Show track selection
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [completedSurahs, setCompletedSurahs] = useState([]);
  const [paymentResult, setPaymentResult] = useState(null); // 'success' | 'canceled' | null
  const [showPremiumGate, setShowPremiumGate] = useState(false); // Show premium upgrade popup
  const [isRefreshingUser, setIsRefreshingUser] = useState(false); // Loading state while refreshing user after payment

  // Load saved progress on mount
  useEffect(() => {
    setCompletedSurahs(getCompletedSurahs());
    const savedLevel = getSavedAgeGroup();
    if (savedLevel) {
      setSurahJourneyLevel(savedLevel);
    }
  }, []);

  // Check for payment result in URL params or localStorage flag
  useEffect(() => {
    const handlePaymentReturn = async () => {
      const params = new URLSearchParams(window.location.search);
      const paymentPending = localStorage.getItem('kids_payment_pending');

      if (params.get('payment_success') === '1') {
        // Payment completed successfully
        setPaymentResult('success');
        // Clear payment pending flag
        localStorage.removeItem('kids_payment_pending');
        // Clean URL immediately
        window.history.replaceState({}, '', window.location.pathname);

        // Refresh user data to get updated premium status - WAIT for it to complete
        if (refreshUser) {
          setIsRefreshingUser(true);
          try {
            await refreshUser();
            console.log('[KidsMode] User refreshed after successful payment');
          } catch (error) {
            console.error('[KidsMode] Error refreshing user:', error);
          } finally {
            setIsRefreshingUser(false);
          }
        }
      } else if (params.get('payment_canceled') === '1') {
        // Payment was explicitly canceled
        setPaymentResult('canceled');
        // Clear payment pending flag
        localStorage.removeItem('kids_payment_pending');
        // Clean URL
        window.history.replaceState({}, '', window.location.pathname);
      } else if (paymentPending === 'true') {
        // User navigated away from Stripe without completing or canceling
        // This happens when user clicks browser back or closes tab
        // Treat as a silent return - just clear the flag and let them continue
        localStorage.removeItem('kids_payment_pending');
        // Optionally show a "continue where you left off" message
        // For now, we just silently clear and let user continue with free features
      }
    };

    handlePaymentReturn();
  }, [refreshUser]);

  // Memoize stars to prevent regeneration on every render
  const stars = useMemo(() => generateStars(50), []);
  const sparkles = useMemo(() => generateStars(20), []);

  // Handle exit with animation
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      setSelectedTheme(null);
      setIsPlaying(false);
      onClose?.();
    }, 300);
  };

  // Handle theme selection (Surah journeys)
  const handleThemeSelect = (themeId, mode = 'surahs') => {
    setSelectedThemeMode(mode);
    setSelectedTheme(themeId);
    if (themeId === 'train' && mode === 'surahs') {
      // Train Journey for Surahs - ask for age first if not saved
      handleStartSurahJourney();
    } else if (themeId === 'garden' && mode === 'surahs') {
      // Garden Journey for Surahs - ask for age first if not saved
      handleStartSurahJourney();
    } else if (themeId === 'seert' && mode === 'surahs') {
      // Camel Journey for Surahs - ask for age first if not saved
      handleStartSurahJourney();
    } else {
      setIsPlaying(true);
    }
  };

  // Handle special journey selection (Prophet's Life - motorbike)
  const handleSpecialJourneySelect = (journeyId, mode) => {
    if (journeyId === 'prophet-life' && mode === 'seert') {
      setSelectedTheme('motorbike');
      setSelectedThemeMode('seert');
      // Prophet's Life doesn't need age selection - go directly
      setSurahJourneyLevel('young'); // Default level for Seerah
      setSelectedSurahs(true);
    }
  };

  // Handle alphabet section selection
  const handleAlphabetSelect = (sectionId, theme = 'train') => {
    setSelectedAlphabet(sectionId);
    setSelectedAlphabetTheme(theme);
  };

  // Handle back to menu
  const handleBackToMenu = () => {
    setSelectedTheme(null);
    setSelectedThemeMode('surahs');
    setSelectedAlphabet(null);
    setSelectedAlphabetTheme('train');
    setSelectedKalimas(false);
    setSelectedSurahs(false);
    setShowSurahSelection(false); // Also reset age selection screen
    setSurahJourneyLevel(null);
    setIsPlaying(false);
  };

  // Handle progressing to next stage
  const handleNextStage = () => {
    if (selectedAlphabet) {
      // Stage 1 (Alphabet) → Stage 2 (Kalimas)
      // Keep selectedAlphabetTheme - it's already set
      setSelectedAlphabet(null);
      setSelectedKalimas(true);
      setSelectedSurahs(false);
    } else if (selectedKalimas) {
      // Stage 2 (Kalimas) → Stage 3 (Journey)
      setSelectedKalimas(false);

      // Set the correct theme and mode for Stage 3 based on which alphabet theme was used
      setSelectedTheme(selectedAlphabetTheme);
      if (selectedAlphabetTheme === 'seert') {
        setSelectedThemeMode('seert');
      } else {
        setSelectedThemeMode('surahs');
      }

      // Check if user already selected an age group
      const savedLevel = getSavedAgeGroup();
      if (savedLevel) {
        setSurahJourneyLevel(savedLevel);
        setSelectedSurahs(true);
      } else {
        setShowSurahSelection(true);
      }
    }
  };

  // Handle starting Surah Journey (from menu) - ask for age first
  const handleStartSurahJourney = () => {
    const savedLevel = getSavedAgeGroup();
    if (savedLevel) {
      // Check if saved age group is premium and user is not premium
      if (savedLevel !== 'little' && !isPremium) {
        // Show premium gate instead of going to journey
        setShowPremiumGate(true);
        return;
      }
      // Already have age saved and user has access, go directly to journey
      setSurahJourneyLevel(savedLevel);
      setSelectedSurahs(true);
    } else {
      // First time - ask for age
      setShowSurahSelection(true);
    }
  };

  // Handle selecting a surah track
  const handleSelectSurahTrack = (levelId) => {
    // Check if selected age group requires premium
    if (levelId !== 'little' && !isPremium) {
      // Show premium gate
      setShowPremiumGate(true);
      return;
    }

    setSurahJourneyLevel(levelId);
    saveAgeGroup(levelId);
    setShowSurahSelection(false);
    setSelectedSurahs(true);
  };

  // Check if a level is unlocked (free for non-premium users)
  const isLevelUnlocked = (levelId) => {
    // Only "little" (3-5 years) is free, others require premium
    return levelId === 'little' || isPremium;
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  // Handle entering a surah station - opens kids surah learning mode
  const handleEnterStation = useCallback((surahId) => {
    const surah = SURAHS.find(s => s.id === surahId);
    if (surah) {
      setSelectedSurah(surah);
    }
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

  // Show login gate if user is not authenticated (skip during auth loading)
  if (!authLoading && !isAuthenticated) {
    return <KidsLoginGate onClose={onClose} />;
  }

  // Show payment result popup if payment was just completed/canceled
  if (paymentResult) {
    return (
      <PaymentResultPopup
        success={paymentResult === 'success'}
        canceled={paymentResult === 'canceled'}
        isLoading={isRefreshingUser}
        onClose={() => {
          setPaymentResult(null);
          // If payment was successful, user is now premium and can continue
        }}
        onRetry={() => {
          setPaymentResult(null);
          setShowPremiumGate(true); // Show premium gate to try again
        }}
      />
    );
  }

  // Show premium gate if user wants to upgrade
  if (showPremiumGate) {
    return (
      <KidsPremiumGate
        onClose={() => setShowPremiumGate(false)}
        feature="premium"
      />
    );
  }

  // Kids Surah Learning Mode - when a surah is selected
  if (selectedSurah) {
    return (
      <KidsSurahLearning
        surah={selectedSurah}
        onBack={() => setSelectedSurah(null)}
        onComplete={(surahId) => {
          // Mark surah as completed
          saveCompletedSurah(surahId);
          setCompletedSurahs(prev => [...prev, surahId]);
        }}
      />
    );
  }

  // Surah Journey Track Selection Screen - Kid-friendly "How old are you?" UI
  if (showSurahSelection) {
    return (
      <div
        className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        }}
      >
        {/* Animated background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating balloons */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 15}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 2)}s`,
              }}
            >
              <div className="text-4xl sm:text-5xl">{['🎈', '🌟', '🎀', '✨', '🎈', '⭐', '🎊', '💫'][i]}</div>
            </div>
          ))}
          {/* Clouds */}
          <div className="absolute top-10 left-[5%] text-6xl opacity-60 animate-pulse">☁️</div>
          <div className="absolute top-20 right-[10%] text-5xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}>☁️</div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBackToMenu}
          className="absolute top-4 left-4 z-50 px-4 py-3 bg-white/30 backdrop-blur-sm rounded-full text-white font-bold flex items-center gap-2 hover:bg-white/40 transition-all text-lg shadow-lg"
        >
          <span className="text-xl">←</span>
          <span>Back</span>
        </button>

        {/* Content */}
        <div className="h-full flex flex-col items-center justify-center p-4 overflow-y-auto">
          {/* Friendly mascot */}
          <div className="text-7xl sm:text-8xl mb-4 animate-bounce">🧸</div>

          {/* Header - Kid friendly question */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              How Old Are You? 🎂
            </h1>
            <p className="text-xl sm:text-2xl font-arabic text-white/90 mb-2">كم عمرك؟</p>
            <p className="text-white/80 text-lg">
              Tap your age to start learning! 👆
            </p>
          </div>

          {/* Age selection buttons - BIG and colorful */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg w-full px-4">
            {Object.values(SURAH_TRACKS).map((track) => {
              const completedCount = track.surahs.filter(s => completedSurahs.includes(s)).length;
              const progress = Math.round((completedCount / track.surahs.length) * 100);
              const isLocked = !isLevelUnlocked(track.id);

              return (
                <button
                  key={track.id}
                  onClick={() => handleSelectSurahTrack(track.id)}
                  className="relative p-4 sm:p-6 rounded-3xl text-center transition-all transform hover:scale-110 active:scale-95 shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${track.color}ee, ${track.color}cc)`,
                    boxShadow: `0 10px 40px ${track.color}60`,
                  }}
                >
                  {/* Lock overlay for premium age groups */}
                  {isLocked && (
                    <div className="absolute inset-0 z-20 rounded-3xl bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center">
                      <Icons.Lock className="w-8 h-8 text-white mb-1" />
                      <span className="text-white text-xs font-bold px-2 py-1 bg-amber-500 rounded-full">PREMIUM</span>
                    </div>
                  )}

                  {/* Big emoji */}
                  <div className="text-5xl sm:text-6xl mb-2 animate-pulse">
                    {track.emoji}
                  </div>

                  {/* Age question text */}
                  <p className="text-white font-bold text-sm sm:text-base mb-1">
                    {track.ageQuestion}
                  </p>

                  {/* Surah count badge */}
                  <div className="inline-block px-3 py-1 bg-white/30 rounded-full text-white text-xs sm:text-sm font-medium">
                    {track.surahs.length} surahs 📖
                  </div>

                  {/* Progress indicator if they have progress */}
                  {completedCount > 0 && !isLocked && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-yellow-900">{completedCount}</span>
                    </div>
                  )}

                  {/* Star decorations */}
                  <div className="absolute top-1 left-1 text-lg opacity-70">✨</div>
                  <div className="absolute bottom-1 right-1 text-lg opacity-70">⭐</div>
                </button>
              );
            })}
          </div>

          {/* Fun message at bottom */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm sm:text-base">
              🚂 Pick your age and hop on the Quran Train! 🚂
            </p>
            {!isPremium && (
              <p className="text-white/50 text-xs mt-2">
                👶 Little Stars (3-5 years) is free • Other ages require Premium
              </p>
            )}
          </div>

          {/* Change age group option - shown if already selected before */}
          {getSavedAgeGroup() && (
            <button
              onClick={() => {
                localStorage.removeItem('kids_age_group');
                setSurahJourneyLevel(null);
              }}
              className="mt-4 px-4 py-2 bg-white/20 rounded-full text-white/80 text-sm hover:bg-white/30 transition-all"
            >
              🔄 Change my age
            </button>
          )}
        </div>

        <style>{`
          @keyframes float-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>
    );
  }

  // Prophet's Life Journey (motorbike + seert mode) - uses ProphetLifeJourney with Seerah events
  if (selectedSurahs && selectedTheme === 'motorbike' && selectedThemeMode === 'seert') {
    return (
      <div
        className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <ProphetLifeJourney onBack={handleBackToMenu} />
      </div>
    );
  }

  // Stage 3: Surahs journey (with selected track) - uses TrainJourney
  if (selectedSurahs && surahJourneyLevel) {
    const currentTrack = SURAH_TRACKS[surahJourneyLevel];

    // Determine banner styling based on journey type
    let bannerColor, bannerEmoji, bannerTitle, bannerSubtitle;
    if (selectedTheme === 'seert') {
      // Camel Surah journey
      bannerColor = '#D97706';
      bannerEmoji = '🐪';
      bannerTitle = 'Camel Journey';
      bannerSubtitle = `${currentTrack.surahs.length} Surahs`;
    } else if (selectedTheme === 'garden') {
      bannerColor = '#F472B6';
      bannerEmoji = '🌸';
      bannerTitle = 'Flower Garden';
      bannerSubtitle = `${currentTrack.surahs.length} Surahs`;
    } else {
      bannerColor = currentTrack.color;
      bannerEmoji = currentTrack.emoji;
      bannerTitle = currentTrack.name;
      bannerSubtitle = `${currentTrack.surahs.length} Surahs`;
    }

    // Determine actual theme to pass to TrainJourney
    let journeyTheme = 'train';
    if (selectedTheme === 'garden') {
      journeyTheme = 'garden';
    } else if (selectedTheme === 'seert') {
      journeyTheme = 'seert';
    }

    return (
      <div
        className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Track info banner with age change option */}
        <div
          className="absolute top-0 left-0 right-0 z-50 py-1 px-2 flex items-center justify-between text-white text-sm"
          style={{ background: bannerColor }}
        >
          <div className="flex-1" />
          <div className="flex items-center gap-1">
            <span>{bannerEmoji}</span>
            <span>{bannerTitle}</span>
            <span className="mx-1 opacity-60">•</span>
            <span>{bannerSubtitle}</span>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => {
                setSelectedSurahs(false);
                setShowSurahSelection(true);
              }}
              className="px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded-full text-xs flex items-center gap-1 transition-all"
              title="Change age group"
            >
              <span>🔄</span>
              <span className="hidden sm:inline">Change</span>
            </button>
          </div>
        </div>

        <TrainJourney
          mode="surahs"
          theme={journeyTheme}
          customSurahs={currentTrack.surahs}
          hasTopBanner={true}
          ageGroup={surahJourneyLevel}
          isPremium={isPremium}
          onEnterStation={handleEnterStation}
          onBack={() => {
            setSelectedSurahs(false);
            setShowSurahSelection(true);
          }}
        />
      </div>
    );
  }

  // Fallback: Show selection if surahs is true but no level selected
  if (selectedSurahs && !surahJourneyLevel) {
    setShowSurahSelection(true);
    setSelectedSurahs(false);
    return null;
  }

  // Stage 2: Six Kalimas journey (uses same theme as alphabet stage)
  if (selectedKalimas) {
    return (
      <div
        className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <TrainJourney
          mode="kalimas"
          theme={selectedAlphabetTheme}
          isPremium={isPremium}
          onEnterStation={(kalimaIndex) => {
            console.log('Learning Kalima:', kalimaIndex + 1);
          }}
          onBack={handleBackToMenu}
          onNextStage={handleNextStage}
        />
      </div>
    );
  }

  // When alphabet section is selected, show TrainJourney with alphabet mode
  if (selectedAlphabet) {
    return (
      <div
        className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <TrainJourney
          mode="alphabet"
          theme={selectedAlphabetTheme}
          isPremium={isPremium}
          onEnterStation={(letterIndex) => {
            // Handle letter selection
            console.log('Learning letter:', ARABIC_ALPHABET[letterIndex]);
          }}
          onBack={handleBackToMenu}
          onNextStage={handleNextStage}
        />
      </div>
    );
  }

  // When no theme selected, show KidsModeMenu (full screen component with its own styling)
  if (!selectedTheme) {
    return (
      <div
        className={`fixed inset-0 z-[9999] overflow-y-auto transition-all duration-300 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{ touchAction: 'manipulation' }}
      >
        {/* Close button overlay on top of KidsModeMenu */}
        <button
          onClick={handleClose}
          className="absolute top-4 left-4 z-[10000] flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"
        >
          <Icons.ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-sm">Exit</span>
        </button>

        {/* KidsModeMenu handles its own layout and styling */}
        <KidsModeMenu
          onSelectTheme={handleThemeSelect}
          onSelectAlphabet={handleAlphabetSelect}
          onSelectSpecialJourney={handleSpecialJourneySelect}
          isMuted={isMuted}
          onToggleMute={toggleMute}
        />
      </div>
    );
  }

  // When Train theme is selected, show TrainJourney
  if (selectedTheme === 'train') {
    return (
      <div
        className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <TrainJourney
          mode="surahs"
          theme="train"
          isPremium={isPremium}
          onEnterStation={handleEnterStation}
          onBack={handleBackToMenu}
        />
      </div>
    );
  }

  // For other themes (desert placeholder), show placeholder
  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
        isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{ touchAction: 'manipulation' }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 animate-gradient-shift" />

      {/* Animated stars layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      {/* Floating sparkles layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <div
            key={`sparkle-${sparkle.id}`}
            className="absolute animate-float-sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration + 3}s`
            }}
          >
            <Icons.Sparkles
              className="text-yellow-300 drop-shadow-lg"
              style={{
                width: `${sparkle.size * 4}px`,
                height: `${sparkle.size * 4}px`,
                filter: 'drop-shadow(0 0 6px rgba(253, 224, 71, 0.8))'
              }}
            />
          </div>
        ))}
      </div>

      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

      {/* Header with controls */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
        {/* Back button */}
        <button
          onClick={handleBackToMenu}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"
        >
          <Icons.ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-sm">Back</span>
        </button>

        {/* Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Quran Kids
          </h1>
          <p className="text-white/80 text-sm">
            {THEMES[selectedTheme]?.name}
          </p>
        </div>

        {/* Audio toggle */}
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <Icons.VolumeX className="w-5 h-5" />
          ) : (
            <Icons.Volume2 className="w-5 h-5" />
          )}
        </button>
      </header>

      {/* Main content area - Coming Soon for Garden & Desert */}
      <main className="absolute inset-0 pt-20 pb-8 px-4 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div
            className={`
              p-8 rounded-3xl backdrop-blur-lg bg-white/20 border border-white/30
              shadow-2xl transform transition-all duration-500
            `}
          >
            {/* Theme icon */}
            <div
              className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
              style={{
                backgroundColor: THEMES[selectedTheme]?.color || '#8B5CF6',
                boxShadow: `0 0 40px ${THEMES[selectedTheme]?.color}60`
              }}
            >
              {selectedTheme === 'garden' && (
                <div className="text-4xl text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 3.62 13.38 2.5 12 2.5S9.5 3.62 9.5 5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/>
                  </svg>
                </div>
              )}
              {selectedTheme === 'desert' && (
                <div className="text-4xl text-white">
                  <Icons.Sun className="w-12 h-12" />
                </div>
              )}
            </div>

            {/* Theme name */}
            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
              {THEMES[selectedTheme]?.name}
            </h2>
            <p className="text-xl text-white/90 font-arabic mb-4">
              {THEMES[selectedTheme]?.nameAr}
            </p>
            <p className="text-white/80 mb-8">
              {THEMES[selectedTheme]?.description}
            </p>

            {/* Coming soon placeholder */}
            <div className="bg-white/10 rounded-2xl p-6 mb-6">
              <Icons.Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <p className="text-white/90 text-lg font-medium">
                Coming Soon!
              </p>
              <p className="text-white/70 text-sm mt-2">
                This exciting journey is being prepared for young learners!
              </p>
              <p className="text-white/60 text-xs mt-3">
                Try the Train Journey - it's ready to play!
              </p>
            </div>

            {/* Action buttons placeholder */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBackToMenu}
                className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-medium hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Icons.Grid className="w-5 h-5" />
                Choose Another Theme
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        @keyframes float-sparkle {
          0% {
            opacity: 0;
            transform: translateY(20px) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        .animate-float-sparkle {
          animation: float-sparkle 8s ease-in-out infinite;
        }

        .font-arabic {
          font-family: 'Scheherazade New', 'Amiri', serif;
        }
      `}</style>
    </div>
  );
};

export default KidsMode;
