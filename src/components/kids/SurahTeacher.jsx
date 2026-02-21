/**
 * SurahTeacher.jsx
 * AI-Powered Inline Surah Teaching for Kids
 *
 * Features:
 * - Inline panel (shows in sky area, train stays visible)
 * - Age-appropriate content
 * - Translation selection (English, Urdu, etc.)
 * - Word-by-word teaching with audio
 * - AI teaching notes
 * - Interactive quizzes
 * - Progress tracking
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { WORD_MEANINGS } from '../../data/wordMeanings';

// ============================================================================
// AUDIO CONFIGURATION - Fixed URLs
// ============================================================================

// Correct verse audio URL format from various sources
const getVerseAudioUrl = (surahId, verseNum, reciter = 'Alafasy_128kbps') => {
  // Format: 001001 for surah 1, verse 1
  const formattedRef = String(surahId).padStart(3, '0') + String(verseNum).padStart(3, '0');
  return `https://everyayah.com/data/${reciter}/${formattedRef}.mp3`;
};

// Get word audio from Quran.com CDN
const getWordAudioUrl = (location) => {
  // location format: "1:1:1" (surah:verse:word)
  return `https://audio.qurancdn.com/wbw/${location.replace(/:/g, '_')}.mp3`;
};

// ============================================================================
// TRANSLATION OPTIONS
// ============================================================================

const TRANSLATIONS = {
  en: { name: 'English', flag: '🇬🇧', id: 'en.sahih', translator: 'Sahih International' },
  ur: { name: 'اردو', flag: '🇵🇰', id: 'ur.jalandhry', translator: 'Fateh Muhammad Jalandhry' },
  id: { name: 'Indonesian', flag: '🇮🇩', id: 'id.indonesian', translator: 'Indonesian Ministry' },
  tr: { name: 'Türkçe', flag: '🇹🇷', id: 'tr.diyanet', translator: 'Diyanet İşleri' },
  fr: { name: 'Français', flag: '🇫🇷', id: 'fr.hamidullah', translator: 'Muhammad Hamidullah' },
  de: { name: 'Deutsch', flag: '🇩🇪', id: 'de.aburida', translator: 'Abu Rida' },
};

// Popular Quran reciters
const RECITERS = {
  'Alafasy_128kbps': { name: 'Mishary Al-Afasy', nameAr: 'مشاري العفاسي', country: '🇰🇼' },
  'Abdul_Basit_Murattal_128kbps': { name: 'Abdul Basit', nameAr: 'عبد الباسط', country: '🇪🇬' },
  'Hudhaify_128kbps': { name: 'Al-Hudhaify', nameAr: 'الحذيفي', country: '🇸🇦' },
  'Minshawy_Murattal_128kbps': { name: 'Al-Minshawi', nameAr: 'المنشاوي', country: '🇪🇬' },
  'Husary_128kbps': { name: 'Mahmoud Al-Husary', nameAr: 'محمود الحصري', country: '🇪🇬' },
};

// ============================================================================
// AGE GROUP CONTENT
// ============================================================================

const AGE_GROUPS = {
  little: {
    id: 'little',
    name: 'Little Stars',
    nameAr: 'النجوم الصغيرة',
    age: '3-5',
    emoji: '👶',
    color: '#10B981',
    features: ['Simple words', 'Basic meanings', 'Lots of pictures', 'Short sessions'],
  },
  young: {
    id: 'young',
    name: 'Young Learners',
    nameAr: 'المتعلمون',
    age: '5-8',
    emoji: '👦',
    color: '#3B82F6',
    features: ['Easy explanations', 'Word meanings', 'Fun facts', 'Practice mode'],
  },
  junior: {
    id: 'junior',
    name: 'Junior Hafiz',
    nameAr: 'الحافظ الصغير',
    age: '8-12',
    emoji: '👧',
    color: '#8B5CF6',
    features: ['Full meanings', 'Tajweed basics', 'Memorization', 'Quizzes'],
  },
  advanced: {
    id: 'advanced',
    name: 'Advanced',
    nameAr: 'متقدم',
    age: '12+',
    emoji: '🧕',
    color: '#F59E0B',
    features: ['Tafseer', 'Arabic grammar', 'Context', 'Deep learning'],
  },
};

// ============================================================================
// AI TEACHING CONTENT - Comprehensive for all short surahs
// ============================================================================

const SURAH_TEACHING = {
  1: {
    name: 'Al-Fatiha',
    nameAr: 'الفاتحة',
    meaning: 'The Opening',
    importance: 'Most important surah - recited in every prayer!',
    whenToRecite: 'Every Salah (prayer) - at least 17 times daily',
    keyLessons: [
      'Allah is the Lord of all worlds',
      'We ask Allah alone for help',
      'We pray for guidance to the straight path',
    ],
    funFacts: [
      'Called "Umm al-Kitab" (Mother of the Book)',
      'Also called "As-Sab al-Mathani" (The Seven Oft-Repeated)',
      'Without it, prayer is incomplete!',
    ],
    story: 'This was one of the first complete surahs revealed to Prophet Muhammad ﷺ. It teaches us how to talk to Allah.',
    littleKids: 'This surah is like saying "Hello" to Allah! We tell Allah He is the best and ask Him to help us be good.',
    youngKids: 'Al-Fatiha is our special conversation with Allah. We praise Him, ask for His help, and request guidance.',
    juniorKids: 'This surah contains the essence of the entire Quran - praise, worship, and supplication.',
  },
  112: {
    name: 'Al-Ikhlas',
    nameAr: 'الإخلاص',
    meaning: 'The Sincerity / Purity',
    importance: 'Equal to one-third of the Quran!',
    whenToRecite: 'Before sleeping, for protection, any time for blessings',
    keyLessons: [
      'Allah is ONE - there is no god but Him',
      'Allah is eternal and self-sufficient',
      'Allah has no parents and no children',
      'Nothing is like Allah',
    ],
    funFacts: [
      'Reading it 3 times = reward of reading entire Quran!',
      'Prophet ﷺ loved this surah very much',
      'It answers: "Who is Allah?"',
    ],
    story: 'Some people asked Prophet Muhammad ﷺ to describe Allah. This surah was revealed as the perfect answer.',
    littleKids: 'Allah is ONE! He has no mommy or daddy. He made everything and He is the BEST!',
    youngKids: 'This surah teaches Tawheed - that Allah is unique and ONE. Nothing is like Him.',
    juniorKids: 'Al-Ikhlas refutes all forms of shirk (polytheism) and establishes pure monotheism.',
  },
  113: {
    name: 'Al-Falaq',
    nameAr: 'الفلق',
    meaning: 'The Daybreak',
    importance: 'Protection from evil',
    whenToRecite: 'Morning, evening, before sleeping',
    keyLessons: [
      'Seek refuge in Allah from darkness',
      'Allah protects us from all evil',
      'Trust in Allah for protection',
    ],
    funFacts: [
      'One of the two "protection surahs" (Al-Muawwidhatayn)',
      'Prophet ﷺ recited it when he was sick',
      'Blow on your hands and wipe your body after reading',
    ],
    story: 'Prophet ﷺ used to recite this and An-Nas every night before sleeping, blow on his hands, and wipe his body.',
    littleKids: 'When you feel scared of the dark, say this surah! Allah will protect you.',
    youngKids: 'Al-Falaq is like a shield from Allah. It protects us from bad things we cannot see.',
    juniorKids: 'This surah teaches us to seek refuge in Allah from the evil in His creation.',
  },
  114: {
    name: 'An-Nas',
    nameAr: 'الناس',
    meaning: 'The Mankind',
    importance: 'Protection from whispers of Shaytan',
    whenToRecite: 'When feeling anxious, before sleeping, morning & evening',
    keyLessons: [
      'Allah is the Lord of all people',
      'Allah is the King of all people',
      'Allah is the God of all people',
      'Shaytan whispers evil thoughts',
    ],
    funFacts: [
      'Last surah of the Quran!',
      'Companion to Al-Falaq (together called Al-Muawwidhatayn)',
      'Protection from Shaytan\'s whispers',
    ],
    story: 'Shaytan tries to whisper bad thoughts to us. This surah teaches us to ask Allah for protection.',
    littleKids: 'Sometimes we think bad thoughts - that is Shaytan! Say this surah and he runs away!',
    youngKids: 'An-Nas protects our hearts from bad whispers. Allah is our protector!',
    juniorKids: 'This surah specifically addresses protection from the whisperer (al-waswas).',
  },
  108: {
    name: 'Al-Kawthar',
    nameAr: 'الكوثر',
    meaning: 'The Abundance',
    importance: 'Promise of abundance from Allah',
    whenToRecite: 'When feeling grateful, during prayer',
    keyLessons: [
      'Allah gives abundantly to believers',
      'Pray and sacrifice for Allah',
      'Your enemies will be cut off',
    ],
    funFacts: [
      'Shortest surah - only 3 verses!',
      'Kawthar is a river in Paradise',
      'The river is whiter than milk and sweeter than honey',
    ],
    story: 'When Prophet ﷺ\'s son died, enemies mocked him. Allah revealed this surah promising him abundance.',
    littleKids: 'Allah gave Prophet Muhammad ﷺ a beautiful river in Jannah called Kawthar!',
    youngKids: 'This surah promises that people who are mean to believers will be forgotten.',
    juniorKids: 'Al-Kawthar was revealed as consolation and a promise of eternal blessings.',
  },
  103: {
    name: 'Al-Asr',
    nameAr: 'العصر',
    meaning: 'The Time',
    importance: 'Formula for success in life',
    whenToRecite: 'Daily reminder, any time',
    keyLessons: [
      'Time is precious - don\'t waste it',
      'Have faith (Iman)',
      'Do good deeds',
      'Encourage truth and patience',
    ],
    funFacts: [
      'Imam Shafi\'i said this surah alone is enough guidance for humanity',
      'Companions would not part without reciting it',
      'Only 3 verses but contains complete guidance',
    ],
    story: 'This surah tells us humans are in loss EXCEPT those who believe, do good, and help each other.',
    littleKids: 'Don\'t waste time! Believe in Allah, be good, and help your friends be good too!',
    youngKids: 'Time is running out! Use it for faith, good deeds, truth, and patience.',
    juniorKids: 'This surah outlines the four requirements for salvation from loss.',
  },
  110: {
    name: 'An-Nasr',
    nameAr: 'النصر',
    meaning: 'The Divine Support',
    importance: 'Promise of victory and forgiveness',
    whenToRecite: 'When seeking success, after achievements',
    keyLessons: [
      'Allah\'s help always comes',
      'When you succeed, thank Allah',
      'Always seek forgiveness',
    ],
    funFacts: [
      'Last surah revealed to Prophet ﷺ',
      'Revealed during Hajj, shortly before Prophet\'s passing',
      'Sign that Prophet\'s mission was complete',
    ],
    story: 'This surah was revealed when Makkah was conquered. It reminded Prophet ﷺ to thank Allah.',
    littleKids: 'When good things happen, say Alhamdulillah and ask Allah to forgive your mistakes!',
    youngKids: 'Victory comes from Allah! When we succeed, we should thank Allah and seek forgiveness.',
    juniorKids: 'This surah taught the Prophet to glorify Allah and seek forgiveness as his mission concluded.',
  },
  109: {
    name: 'Al-Kafirun',
    nameAr: 'الكافرون',
    meaning: 'The Disbelievers',
    importance: 'Declaration of pure faith',
    whenToRecite: 'Morning/evening adhkar, before sleeping',
    keyLessons: [
      'Muslims worship only Allah',
      'No compromise in faith',
      'Respect but don\'t follow other religions',
      'Your religion is yours, mine is mine',
    ],
    funFacts: [
      'Called "Al-Muqashqishah" (The Purifier)',
      'Protects from shirk (associating partners with Allah)',
      'Read before sleeping for protection',
    ],
    story: 'The Quraysh offered Prophet ﷺ a deal: worship their gods sometimes. This surah was the answer: NO!',
    littleKids: 'We only worship Allah! We are kind to everyone but we only pray to Allah.',
    youngKids: 'This surah declares that Muslims will never worship anything except Allah.',
    juniorKids: 'Al-Kafirun establishes the principle of religious clarity while maintaining peaceful coexistence.',
  },
  // Add more surahs as needed...
};

// ============================================================================
// Fetch verse with translations
// ============================================================================

// Remove Bismillah from verse 1 text (since audio doesn't include it)
// Exceptions: Surah 1 (Bismillah IS verse 1) and Surah 9 (no Bismillah)
const removeBismillah = (text, surahId, verseNum) => {
  if (verseNum !== 1 || surahId === 1 || surahId === 9) {
    return text;
  }
  // Bismillah pattern - matches various diacritical variations
  const bismillahPattern = /^بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\s*/;
  const bismillahPattern2 = /^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/;
  const bismillahPattern3 = /^بسم الله الرحمن الرحيم\s*/;

  let cleaned = text.replace(bismillahPattern, '');
  cleaned = cleaned.replace(bismillahPattern2, '');
  cleaned = cleaned.replace(bismillahPattern3, '');

  return cleaned.trim();
};

const fetchVerseData = async (surahId, verseNum, translationId = 'en.sahih') => {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surahId}:${verseNum}/editions/quran-uthmani,${translationId}`
    );
    const data = await response.json();
    if (data.code === 200 && data.data) {
      const rawArabic = data.data[0]?.text || '';
      return {
        arabic: removeBismillah(rawArabic, surahId, verseNum),
        translation: data.data[1]?.text || '',
      };
    }
  } catch (error) {
    console.error('Error fetching verse:', error);
  }
  return null;
};

// ============================================================================
// Settings Panel Component
// ============================================================================

const SettingsPanel = ({ isOpen, onClose, ageGroup, setAgeGroup, translation, setTranslation, reciter, setReciter }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '380px',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid #e5e7eb',
            flexShrink: 0,
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>⚙️ Settings</h3>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#f3f4f6',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icons.X style={{ width: '20px', height: '20px', color: '#4b5563' }} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '12px 16px',
          }}
        >
          {/* Age Group Selection */}
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#4b5563', marginBottom: '6px' }}>
              👶 Age Group
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {Object.values(AGE_GROUPS).map((group) => (
                <button
                  key={group.id}
                  onClick={() => setAgeGroup(group.id)}
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    textAlign: 'left',
                    border: `2px solid ${ageGroup === group.id ? '#3b82f6' : '#e5e7eb'}`,
                    backgroundColor: ageGroup === group.id ? '#eff6ff' : 'white',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '18px' }}>{group.emoji}</span>
                    <div>
                      <p style={{ fontWeight: '500', fontSize: '12px', margin: 0 }}>{group.name}</p>
                      <p style={{ fontSize: '10px', color: '#6b7280', margin: 0 }}>{group.age} yrs</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Reciter Selection */}
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#4b5563', marginBottom: '6px' }}>
              🎙️ Quran Reciter
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {Object.entries(RECITERS).map(([key, rec]) => (
                <button
                  key={key}
                  onClick={() => setReciter(key)}
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: `2px solid ${reciter === key ? '#a855f7' : '#e5e7eb'}`,
                    backgroundColor: reciter === key ? '#faf5ff' : 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{rec.country}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>{rec.name}</span>
                    <span style={{ fontSize: '10px', color: '#6b7280', marginLeft: '4px' }}>{rec.nameAr}</span>
                  </div>
                  {reciter === key && <span style={{ color: '#a855f7' }}>✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Translation Selection */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#4b5563', marginBottom: '6px' }}>
              🌐 Translation
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {Object.entries(TRANSLATIONS).map(([key, trans]) => (
                <button
                  key={key}
                  onClick={() => setTranslation(key)}
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: `2px solid ${translation === key ? '#22c55e' : '#e5e7eb'}`,
                    backgroundColor: translation === key ? '#f0fdf4' : 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{trans.flag}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>{trans.name}</span>
                    <span style={{ fontSize: '10px', color: '#6b7280', marginLeft: '4px' }}>({trans.translator})</span>
                  </div>
                  {translation === key && <span style={{ color: '#22c55e' }}>✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '12px 16px',
            borderTop: '1px solid #e5e7eb',
            flexShrink: 0,
          }}
        >
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(to right, #22c55e, #10b981)',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            ✅ Done
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Word Card Component - Age-appropriate styling
// ============================================================================

const WordCard = ({ word, index, isPlaying, onPlay, ageGroup = 'young' }) => {
  // Larger cards for younger kids
  const isLittle = ageGroup === 'little';
  const isYoung = ageGroup === 'young';

  return (
    <button
      onClick={() => onPlay(index)}
      className={`
        flex flex-col items-center rounded-2xl transition-all transform
        ${isPlaying
          ? 'bg-gradient-to-br from-yellow-300 to-orange-300 scale-110 ring-4 ring-yellow-400 shadow-xl'
          : 'bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 hover:scale-105 shadow-lg'
        }
        ${isLittle ? 'p-4 min-w-[100px]' : 'p-3 min-w-[80px]'}
        border-2 border-transparent hover:border-purple-300
      `}
    >
      {/* Arabic word - bigger for little kids */}
      <span className={`font-arabic text-gray-800 ${isLittle ? 'text-3xl' : 'text-2xl'}`}>
        {word.ar}
      </span>

      {/* Transliteration with fun styling */}
      <span className={`text-purple-600 font-medium ${isLittle ? 'text-sm' : 'text-xs'}`}>
        {word.transliteration}
      </span>

      {/* Meaning - English */}
      <span className={`text-blue-700 text-center leading-tight font-medium ${isLittle ? 'text-sm mt-1' : 'text-xs'}`}>
        {word.en}
      </span>

      {/* Urdu meaning */}
      {word.ur && (
        <span className={`text-green-700 font-urdu ${isLittle ? 'text-sm' : 'text-xs'}`} dir="rtl">
          {word.ur}
        </span>
      )}

      {/* Sound indicator with animation */}
      <div className={`mt-1 flex items-center gap-1 ${isPlaying ? 'animate-bounce' : ''}`}>
        <Icons.Volume2 className={`${isLittle ? 'w-5 h-5' : 'w-4 h-4'} ${isPlaying ? 'text-orange-600' : 'text-purple-400'}`} />
        {isPlaying && <span className="text-xs text-orange-600 font-bold">🔊</span>}
      </div>
    </button>
  );
};

// ============================================================================
// Main SurahTeacher Component
// ============================================================================

const SurahTeacher = ({ surah, onClose, onComplete, isInline = true, ageGroup: propAgeGroup = null, hasTopBanner = false }) => {
  // Get saved age group - use prop if provided, otherwise read from localStorage
  const savedAgeGroup = propAgeGroup || (() => {
    try { return localStorage.getItem('kids_age_group') || 'young'; } catch { return 'young'; }
  })();

  // State
  // Skip train intro for little kids - their simple interface is already engaging
  const [showTrainIntro, setShowTrainIntro] = useState(savedAgeGroup !== 'little');
  const [currentVerse, setCurrentVerse] = useState(1);
  const [verseData, setVerseData] = useState(null);
  const [isPlayingVerse, setIsPlayingVerse] = useState(false);
  const [playingWordIndex, setPlayingWordIndex] = useState(-1);
  const [showSettings, setShowSettings] = useState(false);
  const [showTeachingNotes, setShowTeachingNotes] = useState(true);
  const [showAgeSelection, setShowAgeSelection] = useState(() => {
    // Don't show age selection if ageGroup was passed as prop
    if (propAgeGroup) return false;
    try { return !localStorage.getItem('kids_age_group'); } catch { return true; }
  });
  const [ageGroup, setAgeGroup] = useState(savedAgeGroup);
  const [translation, setTranslation] = useState(() => {
    try { return localStorage.getItem('kids_translation') || 'en'; } catch { return 'en'; }
  });
  const [reciter, setReciter] = useState(() => {
    try { return localStorage.getItem('kids_reciter') || 'Alafasy_128kbps'; } catch { return 'Alafasy_128kbps'; }
  });

  const audioRef = useRef(null);

  // Get word meanings for current verse
  const currentWords = WORD_MEANINGS[surah.id]?.[currentVerse] || [];

  // Get teaching content
  const teaching = SURAH_TEACHING[surah.id];

  // Get age-appropriate explanation
  const getAgeExplanation = () => {
    if (!teaching) return null;
    switch (ageGroup) {
      case 'little': return teaching.littleKids;
      case 'young': return teaching.youngKids;
      case 'junior': case 'advanced': return teaching.juniorKids;
      default: return teaching.youngKids;
    }
  };

  // Save preferences
  useEffect(() => {
    try {
      localStorage.setItem('kids_age_group', ageGroup);
      localStorage.setItem('kids_translation', translation);
      localStorage.setItem('kids_reciter', reciter);
    } catch {}
  }, [ageGroup, translation, reciter]);

  // Fetch verse data
  useEffect(() => {
    const loadVerse = async () => {
      setVerseData(null);
      const transId = TRANSLATIONS[translation]?.id || 'en.sahih';
      const data = await fetchVerseData(surah.id, currentVerse, transId);
      setVerseData(data);
    };
    loadVerse();
  }, [surah.id, currentVerse, translation]);

  // Play verse audio
  const playVerse = useCallback(() => {
    if (isPlayingVerse && audioRef.current) {
      audioRef.current.pause();
      setIsPlayingVerse(false);
      return;
    }

    const url = getVerseAudioUrl(surah.id, currentVerse, reciter);
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play()
        .then(() => setIsPlayingVerse(true))
        .catch(e => {
          console.log('Audio failed, trying Google TTS:', e);
          if (verseData?.arabic) {
            try {
              const ttsUrl = `/api/tts?text=${encodeURIComponent(verseData.arabic)}&lang=ar`;
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
  }, [surah.id, currentVerse, isPlayingVerse, verseData, reciter]);

  // Handle audio end
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => setIsPlayingVerse(false);
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  // Play individual word — uses Google TTS for reliable Arabic
  const playWord = (index) => {
    const word = currentWords[index];
    if (!word) return;

    setPlayingWordIndex(index);

    try {
      const ttsUrl = `/api/tts?text=${encodeURIComponent(word.ar)}&lang=ar`;
      const audio = new Audio();
      audio.preload = 'auto';
      audio.onended = () => setPlayingWordIndex(-1);
      audio.onerror = () => {
        if (window.speechSynthesis) {
          const u = new SpeechSynthesisUtterance(word.ar);
          u.lang = 'ar-SA';
          u.rate = 0.6;
          u.onend = () => setPlayingWordIndex(-1);
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(u);
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
  };

  // Navigation
  const goNext = () => {
    if (currentVerse < surah.ayahs) {
      setCurrentVerse(prev => prev + 1);
      setShowTeachingNotes(false);
    } else {
      onComplete?.(surah.id);
    }
  };

  const goPrev = () => {
    if (currentVerse > 1) {
      setCurrentVerse(prev => prev - 1);
    }
  };

  const ageInfo = AGE_GROUPS[ageGroup];

  // Calculate top position based on banner
  const topPosition = hasTopBanner ? 'top-12' : 'top-8';

  return (
    <div className={`
      ${isInline ? `absolute inset-x-0 ${topPosition} bottom-[220px] bg-gradient-to-b from-sky-100/98 via-blue-50/95 to-purple-100/98 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-white/50` : 'fixed inset-0 bg-gradient-to-b from-sky-100 to-purple-100'}
      z-50 flex flex-col overflow-hidden
    `}>
      {/* Hidden audio */}
      <audio ref={audioRef} preload="auto" />

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        translation={translation}
        setTranslation={setTranslation}
        reciter={reciter}
        setReciter={setReciter}
      />

      {/* Train Interior Intro - Welcome screen with conductor */}
      {showTrainIntro && !showAgeSelection && (
        <div className="absolute inset-0 z-50 flex flex-col overflow-hidden rounded-b-3xl">
          {/* Train interior background - wood paneling effect */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg,
                  #5D4E37 0%,
                  #8B7355 10%,
                  #C4A77D 20%,
                  #C4A77D 80%,
                  #5D4E37 100%
                )
              `,
            }}
          >
            {/* Wood grain texture overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 20px,
                  rgba(139, 90, 43, 0.3) 20px,
                  rgba(139, 90, 43, 0.3) 21px
                )`,
              }}
            />
          </div>

          {/* Train window frame */}
          <div className="absolute top-4 left-4 right-4 h-24 bg-gradient-to-b from-sky-400 via-sky-300 to-white rounded-t-xl border-4 border-amber-700 shadow-inner">
            {/* Window view - clouds and sun */}
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute top-2 right-6 text-3xl animate-pulse">☀️</div>
              <div className="absolute top-4 left-8 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>☁️</div>
              <div className="absolute top-6 left-1/2 text-xl animate-bounce" style={{ animationDelay: '1s' }}>☁️</div>
              <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-green-400/50 to-transparent" />
            </div>
            {/* Curtains */}
            <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-red-700 to-red-600 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-red-700 to-red-600 rounded-tr-lg" />
          </div>

          {/* Conductor character */}
          <div className="relative flex-1 flex flex-col items-center justify-center pt-20 pb-4 px-4">
            {/* Conductor avatar */}
            <div className="relative mb-2">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 border-4 border-amber-600 shadow-2xl flex items-center justify-center">
                <span className="text-5xl sm:text-6xl">🧑‍✈️</span>
              </div>
              {/* Conductor hat badge */}
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-600 rounded-full border-2 border-yellow-400 flex items-center justify-center shadow-lg">
                <span className="text-lg">🚂</span>
              </div>
            </div>

            {/* Welcome speech bubble */}
            <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-2xl max-w-sm mb-4 border-2 border-amber-300">
              {/* Speech bubble tail */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-l-2 border-t-2 border-amber-300 transform rotate-45" />

              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 text-center mb-1">
                Assalamu Alaikum! 👋
              </h2>
              <p className="text-center text-amber-700 text-sm sm:text-base mb-2">
                Welcome aboard the Quran Express!
              </p>

              {/* Surah info */}
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-3 text-center">
                <p className="text-gray-600 text-xs mb-1">Today we&apos;re learning</p>
                <p className="font-bold text-emerald-800 text-lg">{surah.name}</p>
                <p className="font-arabic text-emerald-700 text-xl" dir="rtl">سورة {surah.arabic}</p>
                <div className="flex justify-center gap-2 mt-2 text-xs">
                  <span className="px-2 py-0.5 bg-white rounded-full text-emerald-700">
                    {surah.ayahs} verses
                  </span>
                  <span className="px-2 py-0.5 bg-white rounded-full text-emerald-700">
                    {surah.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Start Learning Button */}
            <button
              onClick={() => setShowTrainIntro(false)}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="text-2xl group-hover:animate-bounce">🎓</span>
                Start Learning!
                <span className="text-2xl group-hover:animate-bounce">📚</span>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            {/* Skip intro option */}
            <button
              onClick={() => setShowTrainIntro(false)}
              className="mt-3 text-amber-600/70 text-sm hover:text-amber-700 underline"
            >
              Skip intro
            </button>
          </div>

          {/* Train floor / carpet */}
          <div className="h-8 bg-gradient-to-t from-red-800 to-red-700" />
        </div>
      )}

      {/* Age Selection Screen - Shows first time */}
      {showAgeSelection && (
        <div className="absolute inset-0 z-50 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex flex-col items-center justify-center p-4 rounded-b-3xl">
          {/* Fun decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {['⭐', '🌙', '✨', '🌟', '💫'].map((emoji, i) => (
              <span
                key={i}
                className="absolute text-3xl animate-pulse"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${10 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {emoji}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-md">
            <div className="text-5xl mb-3">👋</div>
            <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">Assalamu Alaikum!</h2>
            <p className="text-white/90 mb-4">How old are you?</p>

            {/* Age Group Cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {Object.values(AGE_GROUPS).map((group) => (
                <button
                  key={group.id}
                  onClick={() => {
                    setAgeGroup(group.id);
                    localStorage.setItem('kids_age_group', group.id);
                    setShowAgeSelection(false);
                  }}
                  className="bg-white rounded-2xl p-3 shadow-xl transform hover:scale-105 transition-all text-left"
                  style={{ borderLeft: `4px solid ${group.color}` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{group.emoji}</span>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{group.name}</p>
                      <p className="text-xs text-gray-500">{group.age} years</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Translation Selection */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-3">
              <p className="text-white text-sm font-medium mb-2">🌐 Choose your language:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {Object.entries(TRANSLATIONS).slice(0, 4).map(([key, trans]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setTranslation(key);
                      localStorage.setItem('kids_translation', key);
                    }}
                    className={`
                      px-3 py-1.5 rounded-full text-sm font-medium transition-all
                      ${translation === key
                        ? 'bg-white text-purple-600 shadow-lg'
                        : 'bg-white/30 text-white hover:bg-white/50'
                      }
                    `}
                  >
                    {trans.flag} {trans.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Skip for returning users */}
            <button
              onClick={() => setShowAgeSelection(false)}
              className="text-white/70 text-sm hover:text-white underline"
            >
              Skip for now
            </button>
          </div>
        </div>
      )}

      {/* Header - Different for each age group */}
      <div className={`flex items-center justify-between shadow-lg ${
        ageGroup === 'little'
          ? 'px-2 py-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400'
          : ageGroup === 'advanced'
          ? 'px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-800'
          : 'px-3 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
      }`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className={`flex items-center justify-center transition-all ${
            ageGroup === 'little'
              ? 'w-10 h-10 rounded-full bg-white/30 text-white text-lg'
              : ageGroup === 'advanced'
              ? 'gap-1 px-3 py-1.5 rounded-md bg-slate-600 hover:bg-slate-500 text-white text-sm font-bold'
              : 'gap-1 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-bold backdrop-blur-sm'
          }`}
        >
          {ageGroup === 'little' ? '✕' : (
            <>
              <Icons.ArrowLeft className="w-4 h-4" />
              <span>{ageGroup === 'advanced' ? 'Back' : 'Close'}</span>
            </>
          )}
        </button>

        {/* Title */}
        <div className="text-center flex-1">
          {ageGroup === 'little' ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">📖</span>
              <span className="text-xl font-bold text-white font-arabic" dir="rtl">{surah.arabic}</span>
            </div>
          ) : (
            <>
              <h2 className={`font-bold text-white drop-shadow-md ${ageGroup === 'advanced' ? 'text-base' : 'text-lg'}`}>
                {ageGroup === 'advanced' ? `Surah ${surah.name}` : surah.name}
              </h2>
              <p className="text-xs text-white/80">
                {ageGroup === 'advanced' ? `Ayah ${currentVerse}/${surah.ayahs}` : `Verse ${currentVerse} of ${surah.ayahs}`}
              </p>
            </>
          )}
        </div>

        {/* Settings - Hidden for little kids */}
        {ageGroup !== 'little' ? (
          <button
            onClick={() => setShowSettings(true)}
            className={`p-2 transition-all ${
              ageGroup === 'advanced'
                ? 'rounded-md bg-slate-600 hover:bg-slate-500'
                : 'rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            <Icons.Settings className="w-4 h-4 text-white" />
          </button>
        ) : (
          <div className="w-10" />
        )}
      </div>

      {/* Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto p-3">
        {/* =====================================================
            LITTLE KIDS MODE (3-5 years) - Super Simple & Fun!
            - HUGE Arabic text
            - GIANT play button
            - Fun animations
            - NO text to read
            ===================================================== */}
        {ageGroup === 'little' ? (
          <div className="h-full flex flex-col items-center justify-center relative">
            {/* Fun floating emojis */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {['⭐', '🌙', '✨', '🌟', '💫', '🎈'].map((emoji, i) => (
                <span
                  key={i}
                  className="absolute text-3xl animate-bounce"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${5 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${1 + (i % 2)}s`,
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            {/* Verse number - BIG and fun */}
            <div className="mb-4 px-6 py-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full shadow-lg animate-pulse">
              <span className="text-2xl font-bold text-white">
                {currentVerse} ⭐ {surah.ayahs}
              </span>
            </div>

            {/* HUGE Arabic text */}
            <div className="bg-white rounded-[40px] p-8 shadow-2xl border-8 border-yellow-300 max-w-lg mx-auto mb-6">
              <p
                className="font-arabic text-5xl sm:text-6xl text-center leading-relaxed text-emerald-700"
                dir="rtl"
                style={{ lineHeight: '2' }}
              >
                {verseData?.arabic || '...'}
              </p>
            </div>

            {/* GIANT Play Button */}
            <button
              onClick={playVerse}
              className={`
                w-32 h-32 rounded-full shadow-2xl flex flex-col items-center justify-center
                transform transition-all hover:scale-110 active:scale-95
                ${isPlayingVerse
                  ? 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 animate-pulse'
                  : 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500'
                }
              `}
              style={{
                boxShadow: isPlayingVerse
                  ? '0 0 40px rgba(251, 191, 36, 0.7)'
                  : '0 0 40px rgba(16, 185, 129, 0.5)',
              }}
            >
              <span className="text-5xl mb-1">{isPlayingVerse ? '🔊' : '▶️'}</span>
              <span className="text-white font-bold text-sm">
                {isPlayingVerse ? 'Playing!' : 'Listen!'}
              </span>
            </button>

            {/* Fun mascot */}
            <div className="mt-4 text-center">
              <span className="text-6xl animate-bounce inline-block">🧸</span>
            </div>
          </div>
        ) : (
          /* =====================================================
             OTHER AGE GROUPS (5+) - Standard learning interface
             ===================================================== */
          <>
        {/* Teaching Notes (collapsible) - Not shown for little kids */}
        {teaching && showTeachingNotes && currentVerse === 1 && ageGroup !== 'little' && (
          <div className="mb-3 bg-white rounded-2xl p-3 shadow-lg border-l-4 border-yellow-400">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-2xl">📚</span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{teaching.name}</h3>
                <p className="text-xs text-gray-500">{teaching.meaning}</p>
              </div>
              <button
                onClick={() => setShowTeachingNotes(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Icons.ChevronUp className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="bg-blue-50 rounded-xl p-2 mb-2">
              <p className="text-sm text-blue-800 font-medium mb-1">🌟 {teaching.importance}</p>
              <p className="text-xs text-blue-700">{getAgeExplanation()}</p>
            </div>

            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                ⏰ {teaching.whenToRecite}
              </span>
            </div>

            {teaching.funFacts && (
              <div className="mt-2 bg-yellow-50 rounded-lg p-2">
                <p className="text-xs font-bold text-yellow-800 mb-1">💡 Fun Facts:</p>
                {teaching.funFacts.slice(0, 2).map((fact, i) => (
                  <p key={i} className="text-xs text-yellow-700">• {fact}</p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Verse Card - Age appropriate styling */}
        <div className={`bg-white shadow-xl overflow-hidden ${ageGroup === 'advanced' ? 'rounded-xl border border-gray-200' : 'rounded-3xl border-4 border-emerald-200'}`}>
          {/* Arabic Verse */}
          <div className={`
            ${ageGroup === 'advanced'
              ? 'bg-gradient-to-br from-slate-50 to-gray-100 border-b border-gray-200 p-4'
              : `bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-b-2 border-emerald-100 ${ageGroup === 'little' ? 'p-6' : 'p-4'}`
            }
          `}>
            {/* Verse number badge */}
            <div className="flex justify-center mb-2">
              <span className={`
                ${ageGroup === 'advanced'
                  ? 'px-3 py-1 rounded-md bg-slate-700 text-white text-sm font-medium'
                  : `px-4 py-1 rounded-full bg-emerald-500 text-white font-bold ${ageGroup === 'little' ? 'text-lg' : 'text-sm'}`
                }
              `}>
                {ageGroup === 'advanced' ? `Ayah ${currentVerse}` : `Verse ${currentVerse} ✨`}
              </span>
            </div>

            <p
              className={`font-arabic text-center leading-loose ${
                ageGroup === 'advanced'
                  ? 'text-3xl text-slate-800'
                  : `text-gray-800 ${ageGroup === 'little' ? 'text-4xl' : 'text-2xl'}`
              }`}
              dir="rtl"
            >
              {verseData?.arabic || '...'}
            </p>

            {/* Play button - Mature for 12+, Kid-friendly for others */}
            <button
              onClick={playVerse}
              className={`
                mx-auto mt-4 flex items-center justify-center gap-2 transition-all
                ${ageGroup === 'advanced'
                  ? `px-4 py-2 rounded-lg text-sm ${
                      isPlayingVerse
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`
                  : `rounded-full shadow-xl transform hover:scale-110 ${
                      isPlayingVerse
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-900 animate-pulse'
                        : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600'
                    } ${ageGroup === 'little' ? 'px-8 py-4 text-xl' : 'px-6 py-3 text-base'}`
                }
              `}
            >
              {isPlayingVerse ? (
                <>
                  {ageGroup === 'advanced' ? (
                    <>
                      <Icons.Pause className="w-4 h-4" />
                      <span className="font-medium">Pause</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl">🔊</span>
                      <span className="font-bold">Playing...</span>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Icons.Play className={`${ageGroup === 'little' ? 'w-8 h-8' : ageGroup === 'advanced' ? 'w-4 h-4' : 'w-5 h-5'}`} />
                  <span className={ageGroup === 'advanced' ? 'font-medium' : 'font-bold'}>
                    {ageGroup === 'little' ? 'Listen! 🎧' : ageGroup === 'advanced' ? 'Listen to Recitation' : 'Listen'}
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Word-by-Word Section - Age appropriate */}
          {currentWords.length > 0 && (
            <div className={`p-3 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border-b ${ageGroup === 'little' ? 'py-4' : ''}`}>
              <p className={`text-center text-gray-600 mb-3 ${ageGroup === 'little' ? 'text-base font-bold' : 'text-xs'}`}>
                {ageGroup === 'little' ? '👆 Tap the words! 🎵' : '👆 Tap each word to learn'}
              </p>
              <div className={`flex flex-wrap justify-center ${ageGroup === 'little' ? 'gap-3' : 'gap-2'}`} dir="rtl">
                {currentWords.map((word, idx) => (
                  <WordCard
                    key={idx}
                    word={word}
                    index={idx}
                    isPlaying={playingWordIndex === idx}
                    onPlay={playWord}
                    ageGroup={ageGroup}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Translation */}
          <div className="p-3">
            <div className="flex items-center gap-2 mb-1">
              <span>{TRANSLATIONS[translation]?.flag || '🌐'}</span>
              <span className="text-xs font-medium text-gray-600">{TRANSLATIONS[translation]?.name}</span>
            </div>
            <p className={`text-sm text-gray-700 ${translation === 'ur' ? 'font-urdu text-right' : ''}`}
               dir={translation === 'ur' ? 'rtl' : 'ltr'}>
              {verseData?.translation || 'Loading translation...'}
            </p>
          </div>
        </div>

        {/* Key Lesson (for first verse) - Not shown for little kids */}
        {teaching?.keyLessons && currentVerse === 1 && ageGroup !== 'little' && (
          <div className="mt-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-3">
            <p className="text-xs font-bold text-pink-800 mb-1">💝 Key Lessons:</p>
            {teaching.keyLessons.slice(0, 2).map((lesson, i) => (
              <p key={i} className="text-xs text-pink-700">• {lesson}</p>
            ))}
          </div>
        )}
          </>
        )}
      </div>

      {/* Navigation Footer - BIG for little kids */}
      <div className={`flex items-center justify-between bg-white border-t shadow-lg ${ageGroup === 'little' ? 'px-4 py-3' : 'px-3 py-2'}`}>
        <button
          onClick={goPrev}
          disabled={currentVerse <= 1}
          className={`
            flex items-center justify-center font-bold
            ${ageGroup === 'little'
              ? `w-16 h-16 rounded-full text-3xl ${currentVerse <= 1 ? 'bg-gray-200 text-gray-400' : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'}`
              : `gap-1 px-3 py-2 rounded-full text-sm ${currentVerse <= 1 ? 'bg-gray-100 text-gray-400' : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow'}`
            }
          `}
        >
          {ageGroup === 'little' ? '⬅️' : (
            <>
              <Icons.ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </>
          )}
        </button>

        {/* Progress - Simple for little kids */}
        <div className="flex items-center gap-1">
          {ageGroup === 'little' ? (
            <span className="text-2xl font-bold text-gray-700">
              {currentVerse} / {surah.ayahs}
            </span>
          ) : (
            <>
              {Array.from({ length: Math.min(surah.ayahs, 7) }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i < currentVerse ? 'bg-green-500' : 'bg-gray-300'}`}
                />
              ))}
              {surah.ayahs > 7 && <span className="text-xs text-gray-500">+{surah.ayahs - 7}</span>}
            </>
          )}
        </div>

        <button
          onClick={goNext}
          className={`
            flex items-center justify-center font-bold
            ${ageGroup === 'little'
              ? `w-16 h-16 rounded-full text-3xl ${currentVerse >= surah.ayahs ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-pink-500 to-rose-600'} text-white shadow-lg`
              : `gap-1 px-3 py-2 rounded-full text-sm ${currentVerse >= surah.ayahs ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow' : 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow'}`
            }
          `}
        >
          {ageGroup === 'little' ? (
            currentVerse >= surah.ayahs ? '🎉' : '➡️'
          ) : (
            <>
              <span>{currentVerse >= surah.ayahs ? 'Done! 🎉' : 'Next'}</span>
              {currentVerse < surah.ayahs && <Icons.ChevronRight className="w-4 h-4" />}
            </>
          )}
        </button>
      </div>

      {/* Styles */}
      <style>{`
        .font-arabic { font-family: 'Scheherazade New', 'Amiri', serif; }
        .font-urdu { font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif; }
      `}</style>
    </div>
  );
};

export default SurahTeacher;
