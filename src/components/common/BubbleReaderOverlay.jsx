/**
 * BubbleReaderOverlay Component
 * Horizontal ellipse bubble-shaped Quran reader with:
 * - Tajweed color-coded text
 * - Word-by-Word meanings with side panel
 * - Multiple translation options
 * - Audio player with multiple reciters
 * - Next/Previous surah navigation
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { PALETTES, SURAHS } from '../../data';
import { useQuranAPI, useMultilingualWords, TRANSLATIONS, TAJWEED_RULES, WORD_TRANSLATION_LANGUAGES, POS_LABELS } from '../../hooks/useQuranAPI';
import { useLocalStorage } from '../../hooks';
import { logReadingSession } from '../../utils/trackingUtils';
import { shareVerse } from '../../utils/shareUtils';
import FeatureBubbles from './FeatureBubbles';
import FeaturePanel from './FeaturePanels';

// Audio CDN
const AUDIO_CDN = 'https://cdn.islamic.network/quran/audio/128';

// Reciters
const RECITERS = {
  'ar.alafasy': { name: 'Mishary Alafasy', country: 'Kuwait' },
  'ar.abdurrahmaansudais': { name: 'Abdul Rahman Al-Sudais', country: 'Saudi Arabia' },
  'ar.abdulsamad': { name: 'Abdul Samad', country: 'Egypt' },
  'ar.shaatree': { name: 'Abu Bakr Al-Shatri', country: 'Saudi Arabia' },
  'ar.husary': { name: 'Mahmoud Khalil Al-Husary', country: 'Egypt' },
  'ar.minshawi': { name: 'Mohamed Al-Minshawi', country: 'Egypt' },
};

// Verse counts for global ayah calculation
const VERSE_COUNTS = [
  0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
  111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
  54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49,
  62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28,
  28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
];

function getGlobalAyahNumber(surahId, ayahNum) {
  let globalAyah = 0;
  for (let i = 1; i < surahId; i++) {
    globalAyah += VERSE_COUNTS[i];
  }
  return globalAyah + ayahNum;
}

// Tajweed Text Renderer
const TajweedText = memo(function TajweedText({ segments }) {
  if (!segments || segments.length === 0) return null;
  return (
    <span>
      {segments.map((segment, index) => {
        if (segment.type === 'plain') {
          return <span key={index}>{segment.text}</span>;
        }
        return (
          <span
            key={index}
            style={{ color: segment.color }}
            title={`${segment.name}: ${segment.description}`}
            className="cursor-help"
          >
            {segment.text}
          </span>
        );
      })}
    </span>
  );
});

// Arabic grammar helper - analyzes word patterns
const analyzeArabicWord = (word) => {
  if (!word) return null;

  // Remove diacritics for pattern matching
  const stripped = word.replace(/[\u064B-\u065F\u0670]/g, '');

  // Common Arabic word patterns (أوزان)
  const patterns = {
    // Verb patterns (أوزان الفعل)
    verb: [
      { regex: /^ي.{2,}$/, pattern: 'يَفْعَلُ', type: 'V', desc: 'Present tense (مضارع)' },
      { regex: /^ت.{2,}$/, pattern: 'تَفْعَلُ', type: 'V', desc: 'Present tense (2nd person)' },
      { regex: /^أ.{2,}$/, pattern: 'أَفْعَلُ', type: 'V', desc: 'Present tense (1st person)' },
      { regex: /^ن.{2,}$/, pattern: 'نَفْعَلُ', type: 'V', desc: 'Present tense (we)' },
      { regex: /^است.+$/, pattern: 'اِسْتَفْعَلَ', type: 'V', desc: 'Form X (استفعال)' },
      { regex: /^انف.+$/, pattern: 'اِنْفَعَلَ', type: 'V', desc: 'Form VII (انفعال)' },
      { regex: /^افت.+$/, pattern: 'اِفْتَعَلَ', type: 'V', desc: 'Form VIII (افتعال)' },
      { regex: /^تف.+ل$/, pattern: 'تَفَعَّلَ', type: 'V', desc: 'Form V (تفعّل)' },
      { regex: /^تفا.+$/, pattern: 'تَفَاعَلَ', type: 'V', desc: 'Form VI (تفاعل)' },
      { regex: /^أف.+$/, pattern: 'أَفْعَلَ', type: 'V', desc: 'Form IV (أفعل)' },
    ],
    // Noun patterns (أوزان الاسم)
    noun: [
      { regex: /^ال.+$/, pattern: 'الـ...', type: 'N', desc: 'Definite noun (معرفة)' },
      { regex: /.+ون$/, pattern: 'فاعِلُونَ', type: 'N', desc: 'Masculine plural' },
      { regex: /.+ين$/, pattern: 'فاعِلِينَ', type: 'N', desc: 'Masculine plural (oblique)' },
      { regex: /.+ات$/, pattern: 'فاعِلات', type: 'N', desc: 'Feminine plural' },
      { regex: /.+ة$/, pattern: 'فَعْلَة', type: 'N', desc: 'Feminine singular (تاء مربوطة)' },
      { regex: /^م.{3,}$/, pattern: 'مَفْعُول', type: 'N', desc: 'Passive participle / place noun' },
    ],
    // Particle patterns (الحروف)
    particle: [
      { regex: /^ب$|^بـ$/, pattern: 'بِ', type: 'P', desc: 'Preposition "by/with"' },
      { regex: /^ل$|^لـ$/, pattern: 'لِ', type: 'P', desc: 'Preposition "for/to"' },
      { regex: /^ف$|^فـ$/, pattern: 'فَ', type: 'CONJ', desc: 'Conjunction "then/so"' },
      { regex: /^و$|^وَ$/, pattern: 'وَ', type: 'CONJ', desc: 'Conjunction "and"' },
      { regex: /^من$/, pattern: 'مِنْ', type: 'P', desc: 'Preposition "from"' },
      { regex: /^في$/, pattern: 'فِي', type: 'P', desc: 'Preposition "in"' },
      { regex: /^على$/, pattern: 'عَلَى', type: 'P', desc: 'Preposition "on/upon"' },
      { regex: /^إلى$/, pattern: 'إِلَى', type: 'P', desc: 'Preposition "to"' },
      { regex: /^إن$|^أن$/, pattern: 'إِنَّ/أَنَّ', type: 'ACC', desc: 'Accusative particle' },
      { regex: /^لا$/, pattern: 'لَا', type: 'NEG', desc: 'Negation particle' },
      { regex: /^ما$/, pattern: 'مَا', type: 'REL', desc: 'Relative/Negation' },
      { regex: /^الذي$|^التي$/, pattern: 'الَّذِي', type: 'REL', desc: 'Relative pronoun' },
      { regex: /^هذا$|^هذه$/, pattern: 'هٰذَا', type: 'DEM', desc: 'Demonstrative pronoun' },
      { regex: /^ذلك$|^تلك$/, pattern: 'ذٰلِكَ', type: 'DEM', desc: 'Demonstrative (far)' },
    ],
    // Pronoun suffixes
    pronoun: [
      { regex: /.+هم$/, pattern: '...هُمْ', type: 'PRON', desc: 'Their/them (masc.)' },
      { regex: /.+هن$/, pattern: '...هُنَّ', type: 'PRON', desc: 'Their/them (fem.)' },
      { regex: /.+ه$/, pattern: '...هُ', type: 'PRON', desc: 'His/him' },
      { regex: /.+ها$/, pattern: '...هَا', type: 'PRON', desc: 'Her/it' },
      { regex: /.+ك$/, pattern: '...كَ', type: 'PRON', desc: 'Your (masc.)' },
      { regex: /.+كم$/, pattern: '...كُمْ', type: 'PRON', desc: 'Your (plural)' },
      { regex: /.+نا$/, pattern: '...نَا', type: 'PRON', desc: 'Our/us' },
    ],
  };

  // Try to match patterns
  for (const category of Object.values(patterns)) {
    for (const p of category) {
      if (p.regex.test(stripped)) {
        return {
          pattern: p.pattern,
          type: p.type,
          description: p.desc,
          category: p.type,
        };
      }
    }
  }

  // Default - unknown pattern
  return {
    pattern: null,
    type: 'default',
    description: 'Quranic word',
    category: 'default',
  };
};

// Simple Word Component - just highlights and triggers callback
// Supports memorization mode with hidden words
const WordItem = memo(function WordItem({ word, isActive, onClick, hidden = false, showOnHover = false }) {
  const [revealed, setRevealed] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (hidden) {
      setRevealed(!revealed);
    } else if (onClick) {
      onClick();
    }
  };

  const isHidden = hidden && !revealed;

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => showOnHover && setRevealed(true)}
      onMouseLeave={() => showOnHover && setRevealed(false)}
      role="button"
      tabIndex={0}
      className={`inline-block mx-0.5 cursor-pointer transition-all duration-200 rounded px-1.5 py-1 ${
        isActive
          ? 'bg-yellow-400/60 scale-110 shadow-lg ring-2 ring-yellow-300/50'
          : isHidden
          ? 'bg-amber-500/40 hover:bg-amber-500/60'
          : 'hover:bg-white/30 hover:scale-105'
      }`}
      style={{ userSelect: 'none' }}
    >
      {isHidden ? (
        <span className="opacity-0 select-none" aria-hidden="true">{word}</span>
      ) : (
        word
      )}
      {isHidden && (
        <span className="absolute inset-0 flex items-center justify-center text-white/50 text-xs">
          ?
        </span>
      )}
    </span>
  );
});

// Language display names
const LANG_NAMES = {
  'en': 'English',
  'ur': 'اردو',
  'fr': 'Français',
  'de': 'Deutsch',
  'id': 'Indonesia',
  'tr': 'Türkçe',
  'ru': 'Русский',
};

// Floating Word Meaning Bubble - Fixed position on right side of screen
const WordMeaningBubble = memo(function WordMeaningBubble({
  word,
  meaning,
  transliteration,
  wordLang,
  palette,
  onClose,
  isLoading
}) {
  const [showDetails, setShowDetails] = useState(false);

  // Analyze word for grammar patterns
  const wordAnalysis = useMemo(() => analyzeArabicWord(word), [word]);

  const isRTL = wordLang === 'ur' || wordLang === 'ar';
  const langName = LANG_NAMES[wordLang] || 'English';
  const posInfo = POS_LABELS[wordAnalysis?.type] || POS_LABELS['default'];

  if (!word) return null;

  return (
    <>
      {/* Thinking dots connecting to the bubble */}
      <div
        className="fixed z-[60] flex items-center gap-2"
        style={{
          right: '240px',
          top: '50%',
          transform: 'translateY(-50%)',
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: `${palette?.colors?.[0] || '#6366f1'}`,
            animation: 'bubbleDot 0.3s ease-out 0.05s both',
          }}
        />
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: `${palette?.colors?.[1] || '#8b5cf6'}`,
            animation: 'bubbleDot 0.3s ease-out 0.1s both',
          }}
        />
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: `${palette?.colors?.[0] || '#6366f1'}`,
            animation: 'bubbleDot 0.3s ease-out 0.15s both',
          }}
        />
      </div>

      {/* Main Bubble - Fixed on right side */}
      <div
        className="fixed z-[60] right-4 top-1/2 -translate-y-1/2 w-[220px]"
        style={{ animation: 'slideInFromRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bubble shape */}
        <div
          className="relative rounded-[40px] px-5 py-6 text-center shadow-2xl"
          style={{
            background: `linear-gradient(145deg, ${palette?.colors?.[0] || '#6366f1'}f5, ${palette?.colors?.[1] || '#8b5cf6'}f5)`,
            boxShadow: `
              0 20px 60px ${palette?.colors?.[0] || '#6366f1'}70,
              0 0 40px ${palette?.colors?.[1] || '#8b5cf6'}50,
              inset 0 -15px 40px rgba(0,0,0,0.25),
              inset 0 15px 40px rgba(255,255,255,0.2)
            `,
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-all text-white hover:scale-110"
          >
            <Icons.X className="w-4 h-4" />
          </button>

          {/* Glass highlight */}
          <div
            className="absolute top-2 left-6 right-6 h-4 rounded-full opacity-50"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)',
            }}
          />

          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 4 + i * 2,
                height: 4 + i * 2,
                right: `${20 + i * 15}%`,
                top: `${20 + i * 20}%`,
                background: 'rgba(255,255,255,0.6)',
                animation: `floatParticle ${2 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 mt-2">
            {/* Arabic word - Large and prominent */}
            <div
              className="text-4xl text-white font-bold mb-2"
              style={{
                fontFamily: "'Scheherazade New', serif",
                textShadow: '0 4px 15px rgba(0,0,0,0.4)',
              }}
              dir="rtl"
              lang="ar"
            >
              {word}
            </div>

            {/* Transliteration */}
            {transliteration && (
              <p className="text-sm text-white/80 italic mb-2">
                {transliteration}
              </p>
            )}

            {/* Part of speech badges */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="px-3 py-1 bg-white/30 rounded-full text-xs text-white font-semibold">
                {posInfo.en}
              </span>
              <span
                className="px-3 py-1 bg-white/25 rounded-full text-sm text-white"
                style={{ fontFamily: "'Scheherazade New', serif" }}
                dir="rtl"
              >
                {posInfo.ar}
              </span>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 mx-auto mb-3 bg-white/40 rounded-full" />

            {/* Meaning - Main focus */}
            <div className="bg-white/15 rounded-2xl p-3 mb-3">
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 py-2">
                  <Icons.Loader className="w-4 h-4 animate-spin text-white/70" />
                  <span className="text-white/70 text-sm">Loading...</span>
                </div>
              ) : (
                <p
                  className="text-base text-white leading-relaxed font-medium"
                  dir={isRTL ? 'rtl' : 'ltr'}
                  style={isRTL ? { fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: '1.1rem' } : {}}
                >
                  {meaning || 'Meaning not available'}
                </p>
              )}
            </div>

            {/* Grammar toggle */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm text-white transition-all flex items-center justify-center gap-2"
            >
              <span>{showDetails ? 'Hide Grammar' : 'Show Grammar'}</span>
              <span className="text-xs">{showDetails ? '▲' : '▼'}</span>
            </button>

            {/* Grammar Details - expandable */}
            {showDetails && wordAnalysis && (
              <div
                className="mt-3 p-3 bg-black/20 rounded-2xl text-left"
                style={{ animation: 'slideDown 0.2s ease-out' }}
              >
                {/* Pattern info */}
                {wordAnalysis.pattern && (
                  <div className="mb-2">
                    <span className="text-[10px] text-white/60 block uppercase tracking-wide">Pattern (الوزن)</span>
                    <span
                      className="text-lg text-white"
                      style={{ fontFamily: "'Scheherazade New', serif" }}
                      dir="rtl"
                    >
                      {wordAnalysis.pattern}
                    </span>
                  </div>
                )}

                {/* Grammar description */}
                {wordAnalysis.description && (
                  <div className="mb-2">
                    <span className="text-[10px] text-white/60 block uppercase tracking-wide">Type</span>
                    <span className="text-sm text-white/90">
                      {wordAnalysis.description}
                    </span>
                  </div>
                )}

                {/* Learning tip */}
                <div className="mt-3 p-2 bg-white/10 rounded-xl">
                  <p className="text-[10px] text-white/70">
                    💡 Learn Quranic Arabic by understanding word patterns and grammar.
                  </p>
                </div>
              </div>
            )}

            {/* Language indicator */}
            <div className="mt-3 text-center space-y-1">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] text-white/70">
                {langName}
              </span>
            </div>
          </div>
        </div>

        {/* Bubble pointer/tail pointing left */}
        <div
          className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2"
          style={{
            width: 0,
            height: 0,
            borderTop: '15px solid transparent',
            borderBottom: '15px solid transparent',
            borderRight: `20px solid ${palette?.colors?.[0] || '#6366f1'}f5`,
            filter: 'drop-shadow(-4px 0 8px rgba(0,0,0,0.3))',
          }}
        />
      </div>
    </>
  );
});

const BubbleReaderOverlay = memo(function BubbleReaderOverlay({
  surah,
  onClose,
  darkMode,
  onChangeSurah, // New prop for surah navigation
}) {
  // Settings State
  const [fontSize, setFontSize] = useLocalStorage('reader_fontsize', 'medium');
  const [selectedReciter, setSelectedReciter] = useLocalStorage('reader_reciter', 'ar.alafasy');
  const [selectedTranslation, setSelectedTranslation] = useLocalStorage('reader_translation', 'en.sahih');
  const [showTranslation, setShowTranslation] = useLocalStorage('reader_show_translation', true);
  const [tajweedMode, setTajweedMode] = useLocalStorage('reader_tajweed', false);
  const [wordByWordMode, setWordByWordMode] = useLocalStorage('reader_wbw', false);
  const [repeatMode, setRepeatMode] = useLocalStorage('reader_repeat', 'none');
  const [autoScroll, setAutoScroll] = useLocalStorage('reader_autoscroll', true);

  // UI State
  const [shareStatus, setShareStatus] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  // Word selection state (for tracking active word with full data)
  const [selectedWordData, setSelectedWordData] = useState(null);

  // Feature bubbles state
  const [activeFeature, setActiveFeature] = useState(null);
  const [memorizeSettings, setMemorizeSettings] = useState({ hideLevel: 0 });

  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [audioLoading, setAudioLoading] = useState(false);
  const [audioError, setAudioError] = useState(null);

  const audioRef = useRef(null);
  const versesContainerRef = useRef(null);
  const startTime = useRef(Date.now());

  // Refs to track current state for event handlers (avoid stale closures)
  const isPlayingRef = useRef(isPlaying);
  const currentAyahRef = useRef(currentAyah);
  const repeatModeRef = useRef(repeatMode);
  const selectedReciterRef = useRef(selectedReciter);

  // Keep refs in sync
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
  useEffect(() => { currentAyahRef.current = currentAyah; }, [currentAyah]);
  useEffect(() => { repeatModeRef.current = repeatMode; }, [repeatMode]);
  useEffect(() => { selectedReciterRef.current = selectedReciter; }, [selectedReciter]);

  // Fetch verses with API
  const { verses, loading, error } = useQuranAPI(surah?.id, {
    translationId: selectedTranslation,
    includeTajweed: tajweedMode,
    includeWordByWord: false, // We use the multilingual hook instead
  });

  // Fetch word-by-word meanings (local data = multi-language, API = English only)
  const { wordsMap, loading: wordsLoading, language: wordLang, userLanguage, isLocalData } = useMultilingualWords(
    wordByWordMode ? surah?.id : null,
    selectedTranslation
  );

  const palette = PALETTES[(surah?.id - 1) % 10];
  const totalVerses = verses.length || surah?.ayahs || 0;
  const totalVersesRef = useRef(totalVerses);
  useEffect(() => { totalVersesRef.current = totalVerses; }, [totalVerses]);

  // Get prev/next surah info
  const prevSurah = surah?.id > 1 ? SURAHS.find(s => s.id === surah.id - 1) : null;
  const nextSurah = surah?.id < 114 ? SURAHS.find(s => s.id === surah.id + 1) : null;

  // Font size mapping
  const fontSizeMap = {
    small: { arabic: '1.4rem', translation: '0.8rem' },
    medium: { arabic: '1.8rem', translation: '0.95rem' },
    large: { arabic: '2.2rem', translation: '1.1rem' },
    xlarge: { arabic: '2.6rem', translation: '1.2rem' },
  };

  // Initialize audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => {
      setAudioLoading(false);
      setAudioError(null);
    };

    const handleLoadStart = () => {
      setAudioLoading(true);
      setAudioError(null);
    };

    const handleError = () => {
      setAudioError('Failed to load audio');
      setAudioLoading(false);
      setIsPlaying(false);
    };

    const handleEnded = () => {
      const repeat = repeatModeRef.current;
      const current = currentAyahRef.current;
      const total = totalVersesRef.current;

      if (repeat === 'verse') {
        audio.currentTime = 0;
        audio.play().catch(console.error);
      } else if (current < total) {
        setCurrentAyah(prev => prev + 1);
      } else if (repeat === 'surah') {
        setCurrentAyah(1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []); // Empty deps - only run once

  // Load and play audio when source changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !surah?.id) return;

    const globalAyah = getGlobalAyahNumber(surah.id, currentAyah);
    const url = `${AUDIO_CDN}/${selectedReciter}/${globalAyah}.mp3`;

    // Always update source when these change
    audio.pause();
    audio.src = url;
    audio.load();

    // Auto-scroll to current ayah
    if (autoScroll && versesContainerRef.current) {
      const ayahElement = versesContainerRef.current.querySelector(`[data-ayah="${currentAyah}"]`);
      if (ayahElement) {
        ayahElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [surah?.id, currentAyah, selectedReciter, autoScroll]);

  // Handle play/pause separately
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const attemptPlay = () => {
        audio.play().catch(err => {
          if (err.name !== 'AbortError') {
            console.error('Playback error:', err);
            setAudioError('Playback failed');
            setIsPlaying(false);
          }
        });
      };

      if (audio.readyState >= 3) {
        attemptPlay();
      } else {
        const handleCanPlay = () => {
          if (isPlayingRef.current) {
            attemptPlay();
          }
        };
        audio.addEventListener('canplaythrough', handleCanPlay, { once: true });
        return () => audio.removeEventListener('canplaythrough', handleCanPlay);
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentAyah, selectedReciter]);

  // Animation and keyboard
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedWordData) {
          setSelectedWordData(null);
        } else {
          handleClose();
        }
      }
      if (e.key === ' ' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      }
      if (e.key === 'ArrowRight') currentAyah < totalVerses && setCurrentAyah(prev => prev + 1);
      if (e.key === 'ArrowLeft') currentAyah > 1 && setCurrentAyah(prev => prev - 1);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentAyah, totalVerses, selectedWordData]);

  const handleClose = useCallback(() => {
    const duration = Math.round((Date.now() - startTime.current) / 60000);
    logReadingSession(surah.id, verses.length > 0 ? 1 : 0, duration);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    onClose();
  }, [surah, verses.length, onClose]);

  const handleShareVerse = useCallback(async (verse, ayahNum) => {
    setShareStatus(ayahNum);
    await shareVerse({
      surahName: surah.name,
      surahId: surah.id,
      ayahNumber: ayahNum,
      arabic: verse.arabic,
      translation: verse.translation,
    });
    setTimeout(() => setShareStatus(null), 2000);
  }, [surah]);

  // Toggle play/pause for specific ayah - FIXED
  const toggleAyahPlayback = useCallback((ayahNum) => {
    if (currentAyah === ayahNum && isPlaying) {
      // Same ayah and playing -> pause
      setIsPlaying(false);
    } else if (currentAyah === ayahNum && !isPlaying) {
      // Same ayah and paused -> play
      setIsPlaying(true);
    } else {
      // Different ayah -> switch to it and play
      setCurrentAyah(ayahNum);
      setIsPlaying(true);
    }
  }, [currentAyah, isPlaying]);

  // Navigate to surah
  const goToSurah = useCallback((newSurah) => {
    if (!newSurah || !onChangeSurah) return;

    // Reset audio state
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    setIsPlaying(false);
    setCurrentAyah(1);
    setSelectedWordData(null);

    onChangeSurah(newSurah);
  }, [onChangeSurah]);

  if (!surah) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)'
            : 'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(200,200,220,0.7) 100%)',
          backdropFilter: 'blur(12px)',
        }}
      />

      {/* Previous Surah Button - Left Side */}
      {prevSurah && onChangeSurah && (
        <button
          onClick={(e) => { e.stopPropagation(); goToSurah(prevSurah); }}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 group transition-all duration-300 ${
            isAnimating ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${PALETTES[(prevSurah.id - 1) % 10].colors[0]}90, ${PALETTES[(prevSurah.id - 1) % 10].colors[1]}90)`,
              boxShadow: `0 4px 20px ${PALETTES[(prevSurah.id - 1) % 10].colors[0]}50`,
            }}
          >
            <Icons.ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 whitespace-nowrap pointer-events-none">
            <p className="text-white text-xs font-medium">{prevSurah.name}</p>
            <p className="text-white/60 text-[10px]">Surah {prevSurah.id}</p>
          </div>
        </button>
      )}

      {/* Next Surah Button - Right Side */}
      {nextSurah && onChangeSurah && (
        <button
          onClick={(e) => { e.stopPropagation(); goToSurah(nextSurah); }}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 group transition-all duration-300 ${
            isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${PALETTES[(nextSurah.id - 1) % 10].colors[0]}90, ${PALETTES[(nextSurah.id - 1) % 10].colors[1]}90)`,
              boxShadow: `0 4px 20px ${PALETTES[(nextSurah.id - 1) % 10].colors[0]}50`,
            }}
          >
            <Icons.ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 whitespace-nowrap pointer-events-none">
            <p className="text-white text-xs font-medium">{nextSurah.name}</p>
            <p className="text-white/60 text-[10px]">Surah {nextSurah.id}</p>
          </div>
        </button>
      )}

      {/* Main Bubble - Horizontal Ellipse */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          isAnimating ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          width: 'min(92vw, 900px)',
          height: 'min(88vh, 680px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Outer Glow - Breathing */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-35px',
            borderRadius: '50%',
            background: `radial-gradient(ellipse 55% 45% at center, ${palette.colors[0]}50 0%, transparent 70%)`,
            animation: 'breathe 3s ease-in-out infinite',
          }}
        />

        {/* Spinning Rainbow Ring */}
        <div
          className="absolute opacity-50 pointer-events-none"
          style={{
            inset: '-18px',
            borderRadius: '50%',
            background: `conic-gradient(from 0deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]}, ${palette.colors[0]})`,
            filter: 'blur(15px)',
            animation: 'spin 15s linear infinite',
          }}
        />

        {/* Main Bubble - Ellipse */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: '50%',
            background: `linear-gradient(145deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
            boxShadow: `
              0 0 70px ${palette.colors[0]}60,
              0 0 100px ${palette.colors[1]}40,
              inset 0 -35px 70px rgba(0,0,0,0.3),
              inset 0 35px 70px rgba(255,255,255,0.2)
            `,
          }}
        >
          {/* Glass Highlight */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '3%',
              left: '15%',
              width: '50%',
              height: '18%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              borderRadius: '50%',
              filter: 'blur(2px)',
              transform: 'scaleY(0.35)',
            }}
          />

          {/* Bright Spot */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '6%',
              left: '20%',
              width: '10%',
              height: '6%',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 3 + Math.random() * 4,
                height: 3 + Math.random() * 4,
                left: `${20 + Math.random() * 60}%`,
                top: `${15 + Math.random() * 65}%`,
                background: 'rgba(255,255,255,0.8)',
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                animation: `floatParticle ${2.5 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Close Button - positioned well inside the ellipse */}
          <button
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
            className="absolute w-9 h-9 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 hover:scale-110 transition-all z-20 text-white"
            style={{ top: '4%', right: '42%' }}
            aria-label="Close"
          >
            <Icons.X className="w-4 h-4" />
          </button>

          {/* Surah Number - positioned well inside the ellipse */}
          <div
            className="absolute w-10 h-10 rounded-full flex items-center justify-center text-base font-bold text-white z-20"
            style={{ top: '4%', left: '42%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)' }}
          >
            {surah.id}
          </div>

          {/* Content Container */}
          <div
            className="absolute flex flex-col text-white"
            style={{
              top: '12%',
              left: '10%',
              right: selectedWordData ? '0' : '10%',
              bottom: '10%',
              transition: 'right 0.2s ease-out',
            }}
          >
            {/* Header */}
            <div className="text-center flex-shrink-0 mb-1" style={{ paddingRight: selectedWordData ? '10%' : 0 }}>
              <div
                className="text-2xl sm:text-3xl mb-0.5"
                style={{ fontFamily: "'Scheherazade New', serif", textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
                lang="ar" dir="rtl"
              >
                {surah.arabic}
              </div>
              <h1 className="text-base sm:text-lg font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                {surah.name}
              </h1>

              {/* Options Row */}
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-2 flex-wrap px-4">
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] sm:text-xs">
                  {surah.ayahs} Ayahs
                </span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] sm:text-xs">
                  {surah.type}
                </span>

                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                    showSettings ? 'bg-white/40' : 'bg-white/20'
                  }`}
                >
                  <Icons.Settings className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>

                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs transition-all ${
                    showTranslation ? 'bg-white/40 font-medium' : 'bg-white/15'
                  }`}
                >
                  Translation
                </button>
                <button
                  onClick={() => setTajweedMode(!tajweedMode)}
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs transition-all ${
                    tajweedMode ? 'bg-gradient-to-r from-red-500/80 to-green-500/80 font-medium' : 'bg-white/15'
                  }`}
                >
                  Tajweed
                </button>
                <button
                  onClick={() => setWordByWordMode(!wordByWordMode)}
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs transition-all ${
                    wordByWordMode ? 'bg-gradient-to-r from-amber-500/80 to-orange-500/80 font-medium' : 'bg-white/15'
                  }`}
                >
                  Word
                </button>
                <button
                  onClick={() => setAutoScroll(!autoScroll)}
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs transition-all ${
                    autoScroll ? 'bg-white/40 font-medium' : 'bg-white/15'
                  }`}
                >
                  Auto-Scroll
                </button>
                <button
                  onClick={() => setRepeatMode(repeatMode === 'none' ? 'verse' : repeatMode === 'verse' ? 'surah' : 'none')}
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs transition-all ${
                    repeatMode !== 'none' ? 'bg-purple-500/80 font-medium' : 'bg-white/15'
                  }`}
                >
                  {repeatMode === 'none' ? 'Repeat' : repeatMode === 'verse' ? 'Verse' : 'Surah'}
                </button>
              </div>

              {/* Settings Panel */}
              {showSettings && (
                <div className="mt-2 p-2 sm:p-3 bg-black/20 backdrop-blur-sm rounded-xl mx-4" style={{ animation: 'slideDown 0.2s ease-out' }}>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-white/70">Size:</span>
                      <button
                        onClick={() => {
                          const sizes = ['small', 'medium', 'large', 'xlarge'];
                          const idx = sizes.indexOf(fontSize);
                          if (idx > 0) setFontSize(sizes[idx - 1]);
                        }}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                      >
                        <Icons.ZoomOut className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </button>
                      <span className="text-[10px] sm:text-xs w-4 text-center font-bold">{fontSize.charAt(0).toUpperCase()}</span>
                      <button
                        onClick={() => {
                          const sizes = ['small', 'medium', 'large', 'xlarge'];
                          const idx = sizes.indexOf(fontSize);
                          if (idx < sizes.length - 1) setFontSize(sizes[idx + 1]);
                        }}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                      >
                        <Icons.ZoomIn className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </button>
                    </div>

                    <div className="w-px h-4 bg-white/30" />

                    <select
                      value={selectedTranslation}
                      onChange={(e) => setSelectedTranslation(e.target.value)}
                      className="px-2 py-1 rounded-full text-[10px] sm:text-xs bg-white/20 text-white cursor-pointer max-w-[120px] sm:max-w-[140px]"
                    >
                      {Object.entries(TRANSLATIONS).map(([id, info]) => (
                        <option key={id} value={id} className="text-gray-800">{info.name}</option>
                      ))}
                    </select>

                    <select
                      value={selectedReciter}
                      onChange={(e) => setSelectedReciter(e.target.value)}
                      className="px-2 py-1 rounded-full text-[10px] sm:text-xs bg-white/20 text-white cursor-pointer max-w-[120px] sm:max-w-[140px]"
                    >
                      {Object.entries(RECITERS).map(([id, info]) => (
                        <option key={id} value={id} className="text-gray-800">{info.name}</option>
                      ))}
                    </select>
                  </div>

                  {tajweedMode && (
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
                      {Object.entries(TAJWEED_RULES).slice(0, 6).map(([key, rule]) => (
                        <span key={key} className="px-1.5 py-0.5 rounded bg-black/20 text-[9px]" style={{ color: rule.color }}>
                          ● {rule.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Main Content Area with Word Panel */}
            <div className="flex-1 flex overflow-hidden relative">
              {/* Verses Container */}
              <div
                ref={versesContainerRef}
                className="flex-1 overflow-y-auto overflow-x-hidden px-2 sm:px-4"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)',
                  scrollBehavior: 'smooth',
                }}
              >
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-32 gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Icons.Loader className="w-5 h-5 animate-spin" />
                    </div>
                    <p className="text-xs text-white/70">Loading...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-8">
                    <Icons.AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">{error}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {surah.id !== 9 && surah.id !== 1 && (
                      <div
                        className="text-center py-2"
                        style={{
                          fontFamily: "'Scheherazade New', serif",
                          fontSize: fontSizeMap[fontSize].arabic,
                          textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        }}
                        dir="rtl" lang="ar"
                      >
                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                      </div>
                    )}

                    {verses.map((verse, index) => {
                      const ayahNum = verse.number || index + 1;
                      const isCurrentAyah = currentAyah === ayahNum;

                      // Always use original Arabic text (split by space)
                      const arabicWords = verse.arabic.split(' ').filter(w => w.trim());

                      // Get meanings from Quran.com API (matched by position)
                      const wordMeanings = wordsMap[ayahNum] || [];

                      // Calculate which words to hide based on memorization settings
                      const hideLevel = memorizeSettings.hideLevel || 0;
                      const shouldHideWord = (wordIdx, totalWords) => {
                        if (hideLevel === 0) return false; // Show all
                        if (hideLevel === 4) return true; // Hide all
                        // Progressive hiding: 25%, 50%, 75%
                        const hideRatio = hideLevel * 0.25;
                        // Use a deterministic pattern based on word index
                        return (wordIdx % Math.ceil(1 / hideRatio)) === 0;
                      };

                      return (
                        <div
                          key={ayahNum}
                          data-ayah={ayahNum}
                          className={`rounded-2xl p-3 sm:p-4 transition-all duration-500 ${
                            isCurrentAyah ? 'bg-white/25' : 'bg-white/10'
                          } ${hideLevel > 0 ? 'ring-2 ring-amber-400/30' : ''}`}
                          style={{
                            transform: isCurrentAyah ? 'scale(1.01)' : 'scale(1)',
                            boxShadow: isCurrentAyah ? '0 0 20px rgba(255,255,255,0.2)' : 'none',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        >
                          <div
                            className="leading-[2.2] mb-2 relative"
                            style={{
                              fontFamily: "'Scheherazade New', serif",
                              fontSize: fontSizeMap[fontSize].arabic,
                              textShadow: '0 1px 6px rgba(0,0,0,0.3)',
                            }}
                            dir="rtl" lang="ar"
                          >
                            {/* Word mode - use API words directly for accurate mapping */}
                            {wordByWordMode ? (
                              wordMeanings.length > 0 ? (
                                // Use words from API (accurate word boundaries)
                                wordMeanings.map((wordData, wordIdx) => {
                                  const wordKey = `${ayahNum}-${wordIdx}`;
                                  const isHidden = shouldHideWord(wordIdx, wordMeanings.length);
                                  return (
                                    <WordItem
                                      key={wordKey}
                                      word={wordData.arabic}
                                      isActive={selectedWordData?.key === wordKey}
                                      hidden={isHidden}
                                      showOnHover={hideLevel > 0 && hideLevel < 4}
                                      onClick={() => setSelectedWordData({
                                        key: wordKey,
                                        word: wordData.arabic,
                                        meaning: wordData.meaning,
                                        transliteration: wordData.transliteration,
                                        isLoading: false,
                                      })}
                                    />
                                  );
                                })
                              ) : (
                                // Fallback to split words while loading
                                arabicWords.map((word, wordIdx) => {
                                  const wordKey = `${ayahNum}-${wordIdx}`;
                                  const isHidden = shouldHideWord(wordIdx, arabicWords.length);
                                  return (
                                    <WordItem
                                      key={wordKey}
                                      word={word}
                                      isActive={selectedWordData?.key === wordKey}
                                      hidden={isHidden}
                                      showOnHover={hideLevel > 0 && hideLevel < 4}
                                      onClick={() => setSelectedWordData({
                                        key: wordKey,
                                        word,
                                        meaning: '',
                                        transliteration: '',
                                        isLoading: wordsLoading,
                                      })}
                                    />
                                  );
                                })
                              )
                            ) : tajweedMode && verse.tajweedSegments ? (
                              <TajweedText segments={verse.tajweedSegments} />
                            ) : (
                              verse.arabic
                            )}
                            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ml-2 text-xs sm:text-sm font-bold align-middle bg-white/25">
                              {ayahNum}
                            </span>
                          </div>

                          {showTranslation && verse.translation && (
                            <p
                              className="text-white/85 leading-relaxed mb-2"
                              style={{ fontSize: fontSizeMap[fontSize].translation }}
                            >
                              {verse.translation}
                            </p>
                          )}

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => toggleAyahPlayback(ayahNum)}
                              className={`p-1.5 sm:p-2 rounded-full transition-all hover:scale-110 ${
                                isCurrentAyah && isPlaying ? 'bg-white/40' : 'bg-white/15'
                              }`}
                            >
                              {audioLoading && isCurrentAyah ? (
                                <Icons.Loader className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin" />
                              ) : isCurrentAyah && isPlaying ? (
                                <Icons.Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              ) : (
                                <Icons.Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              )}
                            </button>
                            <button
                              onClick={() => handleShareVerse(verse, ayahNum)}
                              className={`p-1.5 sm:p-2 rounded-full transition-all hover:scale-110 ${
                                shareStatus === ayahNum ? 'bg-emerald-500/80' : 'bg-white/15'
                              }`}
                            >
                              {shareStatus === ayahNum ? (
                                <Icons.Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              ) : (
                                <Icons.Share className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="h-4" />
                  </div>
                )}
              </div>

            </div>

            {/* Audio Controls */}
            <div className="flex-shrink-0 pt-1">
              {audioError && (
                <p className="text-center text-red-300 text-[10px] mb-1">{audioError}</p>
              )}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <button
                  onClick={() => currentAyah > 1 && setCurrentAyah(prev => prev - 1)}
                  disabled={currentAyah <= 1}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-30"
                >
                  <Icons.SkipBack className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>

                <button
                  onClick={() => setIsPlaying(prev => !prev)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 transition-all hover:scale-105"
                  style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                >
                  {audioLoading ? (
                    <Icons.Loader className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  ) : isPlaying ? (
                    <Icons.Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Icons.Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => currentAyah < totalVerses && setCurrentAyah(prev => prev + 1)}
                  disabled={currentAyah >= totalVerses}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-30"
                >
                  <Icons.SkipForward className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
              <div className="text-center mt-0.5 text-[10px] sm:text-xs text-white/70">
                {currentAyah} / {totalVerses}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bubbles - Left side */}
      <FeatureBubbles
        activeFeature={activeFeature}
        onFeatureSelect={(feature) => {
          setActiveFeature(feature);
          // Close word meaning bubble when opening a feature
          if (feature) setSelectedWordData(null);
        }}
        position="left"
      />

      {/* Feature Panel - Right side (when feature is active) */}
      {activeFeature && (
        <FeaturePanel
          feature={activeFeature}
          surahId={surah?.id}
          surahName={surah?.name}
          surahArabic={surah?.arabic}
          ayahNumber={currentAyah}
          verseArabic={verses[currentAyah - 1]?.arabic}
          verseTranslation={verses[currentAyah - 1]?.translation}
          palette={palette}
          onClose={() => setActiveFeature(null)}
          onMemorizeModeChange={setMemorizeSettings}
        />
      )}

      {/* Word Meaning Bubble - Fixed on right side of screen */}
      {selectedWordData && !activeFeature && (
        <WordMeaningBubble
          word={selectedWordData.word}
          meaning={selectedWordData.meaning}
          transliteration={selectedWordData.transliteration}
          wordLang={wordLang}
          palette={palette}
          isLoading={selectedWordData.isLoading}
          onClose={() => setSelectedWordData(null)}
        />
      )}

      {/* Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.04); opacity: 0.9; }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-6px) scale(1.2); opacity: 0.5; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bubbleGrow {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.3);
          }
          50% {
            transform: translateX(-50%) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateY(-50%) translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes bubbleDot {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
});

export default BubbleReaderOverlay;
