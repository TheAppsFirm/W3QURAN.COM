/**
 * KidsSurahLearning.jsx
 * AI-Powered Interactive Surah Learning for Kids
 *
 * Features:
 * - Verse-by-verse navigation with beautiful cards
 * - Word-by-word breakdown with tap-to-hear
 * - Arabic, transliteration, English & Urdu meanings
 * - AI teaching mode with explanations
 * - Interactive quizzes
 * - Repeat-after-me mode for memorization
 * - Progress tracking with stars
 * - Kid-friendly animations and colors
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { WORD_MEANINGS } from '../../data/wordMeanings';

// Speech synthesis priming (required for iOS/Safari/Chrome)
let speechPrimedLocal = false;
const primeSpeech = () => {
  if (speechPrimedLocal || typeof window === 'undefined' || !window.speechSynthesis) return;
  try {
    const utterance = new SpeechSynthesisUtterance('');
    utterance.volume = 0;
    window.speechSynthesis.speak(utterance);
    speechPrimedLocal = true;
  } catch (e) {
    // Ignore
  }
};

// Learning modes
const LEARNING_MODES = {
  LEARN: 'learn',      // Normal learning with word meanings
  LISTEN: 'listen',    // Just listen mode with repeat
  QUIZ: 'quiz',        // Interactive quiz
  MEMORIZE: 'memorize' // Hide words progressively
};

// Verse audio from Quran.com CDN
const getVerseAudioUrl = (surahId, verseNum, reciter = 'ar.alafasy') => {
  const paddedSurah = String(surahId).padStart(3, '0');
  const paddedVerse = String(verseNum).padStart(3, '0');
  return `https://cdn.islamic.network/quran/audio/128/${reciter}/${surahId}${paddedVerse}.mp3`;
};

// Word audio from Quran.com
const getWordAudioUrl = (surahId, verseNum, wordPosition) => {
  return `https://audio.qurancdn.com/wbw/001_${String(verseNum).padStart(3, '0')}_${String(wordPosition).padStart(3, '0')}.mp3`;
};

// Fetch verse text from API
const fetchVerseText = async (surahId, verseNum) => {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surahId}:${verseNum}/editions/quran-simple,en.sahih,ur.jalandhry`
    );
    const data = await response.json();
    if (data.code === 200 && data.data) {
      return {
        arabic: data.data[0]?.text || '',
        english: data.data[1]?.text || '',
        urdu: data.data[2]?.text || '',
      };
    }
  } catch (error) {
    console.error('Error fetching verse:', error);
  }
  return null;
};

// Colors for different verse cards
const VERSE_COLORS = [
  { bg: 'from-emerald-400 to-teal-500', text: 'text-emerald-900' },
  { bg: 'from-blue-400 to-indigo-500', text: 'text-blue-900' },
  { bg: 'from-purple-400 to-violet-500', text: 'text-purple-900' },
  { bg: 'from-pink-400 to-rose-500', text: 'text-pink-900' },
  { bg: 'from-amber-400 to-orange-500', text: 'text-amber-900' },
  { bg: 'from-cyan-400 to-blue-500', text: 'text-cyan-900' },
  { bg: 'from-green-400 to-emerald-500', text: 'text-green-900' },
];

// Word Card Component - Individual word with meanings
const WordCard = ({ word, index, onPlay, isPlaying, surahId, verseNum }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTap = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
    onPlay(index);
  };

  return (
    <button
      onClick={handleTap}
      className={`
        flex flex-col items-center p-3 rounded-2xl
        transition-all duration-200 transform
        ${isPlaying ? 'bg-yellow-100 scale-110 ring-4 ring-yellow-400' : 'bg-white/90 hover:bg-white'}
        ${isPressed ? 'scale-95' : ''}
        shadow-lg hover:shadow-xl
        min-w-[80px]
      `}
    >
      {/* Arabic word - large */}
      <span className="text-2xl sm:text-3xl font-arabic text-gray-800 mb-1">
        {word.ar}
      </span>

      {/* Transliteration */}
      <span className="text-xs text-purple-600 font-medium mb-1">
        {word.transliteration}
      </span>

      {/* English meaning */}
      <span className="text-xs text-blue-700 font-medium text-center leading-tight">
        {word.en}
      </span>

      {/* Urdu meaning */}
      <span className="text-xs text-green-700 font-urdu text-center leading-tight mt-0.5" dir="rtl">
        {word.ur}
      </span>

      {/* Sound indicator */}
      <div className={`mt-1 ${isPlaying ? 'animate-pulse' : ''}`}>
        <Icons.Volume2 className={`w-4 h-4 ${isPlaying ? 'text-yellow-600' : 'text-gray-400'}`} />
      </div>
    </button>
  );
};

// Verse Card Component - Full verse display
const VerseCard = ({
  surah,
  verseNum,
  totalVerses,
  words,
  verseText,
  onNext,
  onPrev,
  onPlayVerse,
  isPlayingVerse,
  colorIndex
}) => {
  const [playingWordIndex, setPlayingWordIndex] = useState(-1);
  const audioRef = useRef(null);
  const color = VERSE_COLORS[colorIndex % VERSE_COLORS.length];

  // Play individual word — uses Google TTS for reliable Arabic audio
  const playWord = useCallback((wordIndex) => {
    setPlayingWordIndex(wordIndex);

    if (!words[wordIndex]) {
      setTimeout(() => setPlayingWordIndex(-1), 1000);
      return;
    }

    const text = words[wordIndex].ar;

    // Use Google TTS via app proxy (reliable Arabic on all browsers)
    try {
      const ttsUrl = `/api/tts?text=${encodeURIComponent(text)}&lang=ar`;
      const audio = new Audio();
      audio.volume = 1.0;
      audio.preload = 'auto';
      audio.onended = () => setPlayingWordIndex(-1);
      audio.onerror = () => {
        // Fallback to speechSynthesis
        if (window.speechSynthesis) {
          primeSpeech();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'ar-SA';
          utterance.rate = 0.7;
          utterance.onend = () => setPlayingWordIndex(-1);
          utterance.onerror = () => setPlayingWordIndex(-1);
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        } else {
          setPlayingWordIndex(-1);
        }
      };
      audio.oncanplaythrough = () => {
        audio.play().catch(() => audio.onerror?.());
      };
      audio.src = ttsUrl;
      audio.load();
    } catch (e) {
      setTimeout(() => setPlayingWordIndex(-1), 1000);
    }
  }, [words]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Verse Header */}
      <div className={`
        rounded-t-3xl px-6 py-4 bg-gradient-to-r ${color.bg}
        flex items-center justify-between
      `}>
        <div className="flex items-center gap-2">
          <span className="text-2xl">📖</span>
          <div>
            <h2 className="text-white font-bold text-lg">{surah.name}</h2>
            <p className="text-white/80 text-sm">{surah.meaning}</p>
          </div>
        </div>

        {/* Verse number badge */}
        <div className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white font-bold">
            Verse {verseNum} / {totalVerses}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-3xl shadow-xl overflow-hidden">
        {/* Full Arabic Verse */}
        <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-b">
          <p
            className="text-3xl sm:text-4xl font-arabic text-gray-800 text-center leading-loose"
            dir="rtl"
          >
            {verseText?.arabic || words?.map(w => w.ar).join(' ')}
          </p>

          {/* Play verse button */}
          <button
            onClick={onPlayVerse}
            className={`
              mx-auto mt-4 flex items-center gap-2 px-6 py-2 rounded-full
              transition-all transform hover:scale-105
              ${isPlayingVerse
                ? 'bg-yellow-400 text-yellow-900'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
              }
              shadow-lg
            `}
          >
            {isPlayingVerse ? (
              <>
                <Icons.Pause className="w-5 h-5" />
                <span>Playing...</span>
              </>
            ) : (
              <>
                <Icons.Play className="w-5 h-5" />
                <span>Listen to Verse</span>
              </>
            )}
          </button>
        </div>

        {/* Word-by-Word Section */}
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <h3 className="text-center text-gray-600 font-medium mb-3 flex items-center justify-center gap-2">
            <span>👆</span>
            <span>Tap each word to learn</span>
            <span>👆</span>
          </h3>

          {words && words.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-2" dir="rtl">
              {words.map((word, idx) => (
                <WordCard
                  key={idx}
                  word={word}
                  index={idx}
                  onPlay={playWord}
                  isPlaying={playingWordIndex === idx}
                  surahId={surah.id}
                  verseNum={verseNum}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Icons.Loader className="w-8 h-8 mx-auto animate-spin mb-2" />
              <p>Loading word meanings...</p>
            </div>
          )}
        </div>

        {/* Translations Section */}
        <div className="p-4 space-y-3">
          {/* English Translation */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🇬🇧</span>
              <span className="font-bold text-blue-800">English</span>
            </div>
            <p className="text-blue-900 text-sm leading-relaxed">
              {verseText?.english || words?.map(w => w.en).join(' ')}
            </p>
          </div>

          {/* Urdu Translation */}
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🇵🇰</span>
              <span className="font-bold text-green-800">اردو</span>
            </div>
            <p className="text-green-900 text-sm leading-relaxed font-urdu text-right" dir="rtl">
              {verseText?.urdu || words?.map(w => w.ur).join(' ')}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4 bg-gray-50 flex items-center justify-between">
          <button
            onClick={onPrev}
            disabled={verseNum <= 1}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full font-bold
              transition-all transform hover:scale-105
              ${verseNum <= 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
              }
            `}
          >
            <Icons.ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          {/* Progress stars */}
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(totalVerses, 7) }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < verseNum ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ⭐
              </span>
            ))}
            {totalVerses > 7 && (
              <span className="text-xs text-gray-500 ml-1">+{totalVerses - 7}</span>
            )}
          </div>

          <button
            onClick={onNext}
            disabled={verseNum >= totalVerses}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full font-bold
              transition-all transform hover:scale-105
              ${verseNum >= totalVerses
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
              }
            `}
          >
            <span>{verseNum >= totalVerses ? 'Complete! 🎉' : 'Next'}</span>
            {verseNum < totalVerses && <Icons.ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

// AI Teaching Tips for common surahs
const AI_TEACHING_TIPS = {
  1: { // Al-Fatiha
    intro: "This is the most important Surah! We recite it in every prayer.",
    tips: [
      "Al-Fatiha means 'The Opening' - it opens the Quran!",
      "We say this surah at least 17 times every day in our prayers.",
      "It teaches us to ask Allah for guidance.",
    ],
    funFact: "Did you know? Al-Fatiha is also called 'Umm al-Kitab' (Mother of the Book)! 📚"
  },
  112: { // Al-Ikhlas
    intro: "This powerful Surah is equal to one-third of the Quran!",
    tips: [
      "Al-Ikhlas means 'The Purity' or 'Sincerity'",
      "It teaches us that Allah is ONE and only ONE.",
      "Prophet Muhammad ﷺ loved this Surah very much!",
    ],
    funFact: "Reading this Surah 3 times is like reading the whole Quran! ⭐"
  },
  113: { // Al-Falaq
    intro: "This Surah protects us from bad things!",
    tips: [
      "Al-Falaq means 'The Daybreak' - when the sun rises!",
      "We ask Allah to protect us from darkness and evil.",
      "Prophet Muhammad ﷺ used to recite this before sleeping.",
    ],
    funFact: "This is one of the two protection Surahs called 'Al-Muawwidhatayn'! 🛡️"
  },
  114: { // An-Nas
    intro: "This Surah protects us from whispers of Shaytan!",
    tips: [
      "An-Nas means 'The People' or 'Mankind'",
      "We ask Allah, the Lord of people, to protect us.",
      "Recite this with Al-Falaq for complete protection!",
    ],
    funFact: "This is the last Surah of the Quran! 📖"
  },
  108: { // Al-Kawthar
    intro: "The shortest Surah in the Quran - only 3 verses!",
    tips: [
      "Al-Kawthar means 'The Abundance' - a river in Paradise!",
      "Allah gave Prophet Muhammad ﷺ this special gift.",
      "It teaches us to pray and be grateful to Allah.",
    ],
    funFact: "Al-Kawthar is a beautiful river in Paradise made of milk and honey! 🌊"
  },
};

// Quiz questions generator
const generateQuiz = (words, verseNum) => {
  if (!words || words.length < 2) return null;

  const randomWord = words[Math.floor(Math.random() * words.length)];
  const wrongAnswers = words
    .filter(w => w.ar !== randomWord.ar)
    .slice(0, 2)
    .map(w => w.en);

  const options = [randomWord.en, ...wrongAnswers].sort(() => Math.random() - 0.5);

  return {
    question: `What does "${randomWord.ar}" mean?`,
    questionAr: randomWord.ar,
    correctAnswer: randomWord.en,
    options,
  };
};

// Repeat After Me Component
const RepeatAfterMe = ({ words, onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  const currentWord = words[currentWordIndex];

  const playCurrentWord = () => {
    if (!currentWord) return;
    setIsPlaying(true);

    // Use Google TTS for reliable Arabic pronunciation
    try {
      const ttsUrl = `/api/tts?text=${encodeURIComponent(currentWord.ar)}&lang=ar`;
      const audio = new Audio();
      audio.preload = 'auto';
      audio.onended = () => { setIsPlaying(false); setShowMeaning(true); };
      audio.onerror = () => {
        if (window.speechSynthesis) {
          const utterance = new SpeechSynthesisUtterance(currentWord.ar);
          utterance.lang = 'ar-SA';
          utterance.rate = 0.5;
          utterance.onend = () => { setIsPlaying(false); setShowMeaning(true); };
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        } else {
          setIsPlaying(false);
          setShowMeaning(true);
        }
      };
      audio.oncanplaythrough = () => {
        audio.play().catch(() => audio.onerror?.());
      };
      audio.src = ttsUrl;
      audio.load();
    } catch (e) {
      setIsPlaying(false);
      setShowMeaning(true);
    }
  };

  const nextWord = () => {
    setShowMeaning(false);
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    playCurrentWord();
  }, [currentWordIndex]);

  if (!currentWord) return null;

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-yellow-300">
      <h3 className="text-center text-lg font-bold text-orange-800 mb-4">
        🎤 Repeat After Me!
      </h3>

      {/* Current word */}
      <div className="text-center">
        <p className="text-5xl font-arabic text-gray-800 mb-4">
          {currentWord.ar}
        </p>

        <p className="text-lg text-purple-600 font-medium mb-2">
          {currentWord.transliteration}
        </p>

        {showMeaning && (
          <div className="animate-fade-in space-y-2 mt-4">
            <p className="text-blue-700">🇬🇧 {currentWord.en}</p>
            <p className="text-green-700 font-urdu" dir="rtl">🇵🇰 {currentWord.ur}</p>
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={playCurrentWord}
            className={`
              px-4 py-2 rounded-full font-bold
              ${isPlaying
                ? 'bg-yellow-400 text-yellow-900 animate-pulse'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
              }
              shadow-lg
            `}
          >
            {isPlaying ? '🔊 Playing...' : '🔊 Listen Again'}
          </button>

          {showMeaning && (
            <button
              onClick={nextWord}
              className="px-4 py-2 rounded-full font-bold bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg"
            >
              {currentWordIndex < words.length - 1 ? 'Next Word →' : 'Done! ✅'}
            </button>
          )}
        </div>

        {/* Progress */}
        <div className="mt-4 flex justify-center gap-1">
          {words.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < currentWordIndex ? 'bg-green-500' :
                i === currentWordIndex ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Quiz Component
const QuizMode = ({ quiz, onAnswer, onSkip }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    setTimeout(() => {
      onAnswer(answer === quiz.correctAnswer);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 border-2 border-purple-300">
      <h3 className="text-center text-lg font-bold text-purple-800 mb-4">
        🧠 Quiz Time!
      </h3>

      {/* Question */}
      <div className="text-center mb-6">
        <p className="text-4xl font-arabic text-gray-800 mb-2">
          {quiz.questionAr}
        </p>
        <p className="text-gray-600">What does this word mean?</p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {quiz.options.map((option, i) => (
          <button
            key={i}
            onClick={() => !showResult && handleAnswer(option)}
            disabled={showResult}
            className={`
              w-full py-3 px-4 rounded-xl font-medium text-left
              transition-all transform
              ${showResult
                ? option === quiz.correctAnswer
                  ? 'bg-green-500 text-white scale-105'
                  : option === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-white/50 text-gray-400'
                : 'bg-white hover:bg-purple-50 hover:scale-102 text-gray-700'
              }
              border-2 ${showResult && option === quiz.correctAnswer ? 'border-green-600' : 'border-transparent'}
              shadow-md
            `}
          >
            {String.fromCharCode(65 + i)}. {option}
            {showResult && option === quiz.correctAnswer && ' ✅'}
            {showResult && option === selectedAnswer && option !== quiz.correctAnswer && ' ❌'}
          </button>
        ))}
      </div>

      {/* Skip button */}
      <button
        onClick={onSkip}
        className="w-full mt-4 py-2 text-purple-600 hover:text-purple-800 text-sm"
      >
        Skip quiz →
      </button>
    </div>
  );
};

// Main Component
const KidsSurahLearning = ({ surah, onBack, onComplete }) => {
  const [currentVerse, setCurrentVerse] = useState(1);
  const [verseText, setVerseText] = useState(null);
  const [isPlayingVerse, setIsPlayingVerse] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [learningMode, setLearningMode] = useState(LEARNING_MODES.LEARN);
  const [showIntro, setShowIntro] = useState(true);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const audioRef = useRef(null);

  // Get word meanings for current verse
  const currentWords = WORD_MEANINGS[surah.id]?.[currentVerse] || [];

  // Get AI tips for this surah
  const aiTips = AI_TEACHING_TIPS[surah.id];

  // Fetch verse text
  useEffect(() => {
    const loadVerse = async () => {
      setVerseText(null);
      const text = await fetchVerseText(surah.id, currentVerse);
      setVerseText(text);
    };
    loadVerse();
  }, [surah.id, currentVerse]);

  // Generate quiz when entering quiz mode
  useEffect(() => {
    if (learningMode === LEARNING_MODES.QUIZ && currentWords.length >= 2) {
      setCurrentQuiz(generateQuiz(currentWords, currentVerse));
    }
  }, [learningMode, currentWords, currentVerse]);

  // Play full verse audio
  const playVerse = useCallback(() => {
    if (isPlayingVerse && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlayingVerse(false);
      return;
    }

    const audioUrl = getVerseAudioUrl(surah.id, currentVerse);

    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play().then(() => {
        setIsPlayingVerse(true);
      }).catch(e => {
        console.log('Audio play failed:', e);
        // Fallback to Google TTS
        if (verseText?.arabic) {
          try {
            const ttsUrl = `/api/tts?text=${encodeURIComponent(verseText.arabic)}&lang=ar`;
            const ttsAudio = new Audio();
            ttsAudio.preload = 'auto';
            ttsAudio.onended = () => setIsPlayingVerse(false);
            ttsAudio.onerror = () => setIsPlayingVerse(false);
            ttsAudio.oncanplaythrough = () => {
              ttsAudio.play().catch(() => setIsPlayingVerse(false));
            };
            ttsAudio.src = ttsUrl;
            ttsAudio.load();
            setIsPlayingVerse(true);
          } catch (err) {
            setIsPlayingVerse(false);
          }
        }
      });
    }
  }, [surah.id, currentVerse, isPlayingVerse, verseText]);

  // Handle audio end
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlayingVerse(false);
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  // Navigate to next verse
  const goNext = () => {
    if (currentVerse < surah.ayahs) {
      setCurrentVerse(prev => prev + 1);
      setIsPlayingVerse(false);
      setLearningMode(LEARNING_MODES.LEARN);
    } else {
      // Completed all verses
      setShowCelebration(true);
    }
  };

  // Navigate to previous verse
  const goPrev = () => {
    if (currentVerse > 1) {
      setCurrentVerse(prev => prev - 1);
      setIsPlayingVerse(false);
      setLearningMode(LEARNING_MODES.LEARN);
    }
  };

  // Handle quiz answer
  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }
    setLearningMode(LEARNING_MODES.LEARN);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto" />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-4xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-3 flex items-center justify-between bg-black/10 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold hover:bg-white/30 transition-all text-sm"
        >
          <Icons.ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="text-center">
          <h1 className="text-lg font-bold text-white">{surah.name}</h1>
          <p className="text-white/80 text-xs font-arabic">{surah.arabic}</p>
        </div>

        {/* Score */}
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-yellow-400/90 text-yellow-900 font-bold text-sm">
          <span>⭐</span>
          <span>{quizScore}</span>
        </div>
      </header>

      {/* Intro Modal */}
      {showIntro && aiTips && (
        <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full text-center shadow-2xl animate-bounce-in">
            <div className="text-5xl mb-3">📚</div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Surah {surah.name}
            </h2>
            <p className="text-3xl font-arabic text-purple-600 mb-3">
              {surah.arabic}
            </p>

            <div className="bg-blue-50 rounded-xl p-4 mb-4 text-left">
              <p className="text-blue-800 font-medium mb-2">{aiTips.intro}</p>
              <ul className="space-y-1">
                {aiTips.tips.map((tip, i) => (
                  <li key={i} className="text-blue-700 text-sm flex items-start gap-2">
                    <span>✨</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-3 mb-4 border border-yellow-200">
              <p className="text-yellow-800 text-sm">{aiTips.funFact}</p>
            </div>

            <button
              onClick={() => setShowIntro(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg hover:scale-105 transition-transform"
            >
              🚀 Start Learning!
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="absolute inset-0 pt-16 pb-4 px-3 overflow-y-auto">
        {/* Learning Mode Tabs */}
        <div className="flex justify-center gap-2 mb-3">
          {[
            { mode: LEARNING_MODES.LEARN, label: '📖 Learn', color: 'from-blue-500 to-indigo-600' },
            { mode: LEARNING_MODES.LISTEN, label: '🎧 Repeat', color: 'from-green-500 to-emerald-600' },
            { mode: LEARNING_MODES.QUIZ, label: '🧠 Quiz', color: 'from-purple-500 to-violet-600' },
          ].map(({ mode, label, color }) => (
            <button
              key={mode}
              onClick={() => setLearningMode(mode)}
              className={`
                px-3 py-1.5 rounded-full text-xs font-bold transition-all
                ${learningMode === mode
                  ? `bg-gradient-to-r ${color} text-white shadow-lg scale-105`
                  : 'bg-white/30 text-white hover:bg-white/40'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content based on mode */}
        {learningMode === LEARNING_MODES.LISTEN && currentWords.length > 0 ? (
          <div className="max-w-lg mx-auto">
            <RepeatAfterMe
              words={currentWords}
              onComplete={() => setLearningMode(LEARNING_MODES.LEARN)}
            />
          </div>
        ) : learningMode === LEARNING_MODES.QUIZ && currentQuiz ? (
          <div className="max-w-lg mx-auto">
            <QuizMode
              quiz={currentQuiz}
              onAnswer={handleQuizAnswer}
              onSkip={() => setLearningMode(LEARNING_MODES.LEARN)}
            />
          </div>
        ) : (
          <VerseCard
            surah={surah}
            verseNum={currentVerse}
            totalVerses={surah.ayahs}
            words={currentWords}
            verseText={verseText}
            onNext={goNext}
            onPrev={goPrev}
            onPlayVerse={playVerse}
            isPlayingVerse={isPlayingVerse}
            colorIndex={currentVerse - 1}
          />
        )}
      </main>

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full text-center shadow-2xl animate-bounce-in">
            <div className="text-6xl mb-3">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Mashallah!
            </h2>
            <p className="text-lg text-gray-600 mb-1">
              You completed Surah {surah.name}!
            </p>
            <p className="text-3xl font-arabic text-purple-600 mb-3">
              {surah.arabic}
            </p>

            {/* Score summary */}
            <div className="bg-yellow-50 rounded-xl p-4 mb-4 border border-yellow-200">
              <p className="text-yellow-800 font-bold">Your Score: ⭐ {quizScore} points</p>
              <p className="text-yellow-700 text-sm mt-1">
                {quizScore >= 5 ? "Amazing! You're a Quran Star! 🌟" :
                 quizScore >= 3 ? "Great job! Keep learning! 📚" :
                 "Good start! Try again for more points! 💪"}
              </p>
            </div>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                  ⭐
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setShowCelebration(false);
                  setCurrentVerse(1);
                  setQuizScore(0);
                  setShowIntro(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 transition-transform"
              >
                📖 Learn Again
              </button>

              <button
                onClick={() => {
                  setShowCelebration(false);
                  onComplete?.(surah.id);
                  onBack();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg hover:scale-105 transition-transform"
              >
                ✅ Back to Journey
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .font-arabic {
          font-family: 'Scheherazade New', 'Amiri', serif;
        }
        .font-urdu {
          font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default KidsSurahLearning;
