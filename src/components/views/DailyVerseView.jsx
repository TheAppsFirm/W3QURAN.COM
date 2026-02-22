/**
 * DailyVerseView Component
 * Single Responsibility: Display daily inspirational verses with share/save/listen
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { Icons } from '../common/Icons';
import { DAILY_VERSES, SURAHS, PALETTES } from '../../data';
import { useLocalStorage } from '../../hooks';
import { useAudioPlayer, getAudioUrl } from '../../hooks/useAudioPlayer';
import { TRANSLATIONS } from '../../hooks/useTranslationsAPI';
import { SharePanel } from '../reader/panels';

// Build grouped translations list from TRANSLATIONS object
const GROUPED_TRANSLATIONS = (() => {
  const groups = {};
  for (const [id, info] of Object.entries(TRANSLATIONS)) {
    const lang = info.language;
    if (!groups[lang]) groups[lang] = [];
    groups[lang].push({ id, label: info.languageNative ? `${info.nameEn || info.name}` : info.name, language: lang, native: info.languageNative });
  }
  // Sort: Urdu first, then English, then rest alphabetically
  const order = ['Urdu', 'English'];
  return Object.entries(groups).sort(([a], [b]) => {
    const ai = order.indexOf(a), bi = order.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.localeCompare(b);
  });
})();

function DailyVerseView({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(new Date().getDate() % DAILY_VERSES.length);
  const [savedVerses, setSavedVerses] = useLocalStorage('saved_daily_verses', []);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Translation state
  const [selectedTranslation, setSelectedTranslation] = useLocalStorage('daily_verse_translation', 'default');
  const [fetchedTranslation, setFetchedTranslation] = useState(null);
  const [isLoadingTranslation, setIsLoadingTranslation] = useState(false);
  const [showTranslationPicker, setShowTranslationPicker] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false); // repeat current ayah
  const repeatModeRef = useRef(false);
  const [showSharePanel, setShowSharePanel] = useState(false);

  const verse = DAILY_VERSES[currentIndex];
  const p = PALETTES[currentIndex % 10];
  const surah = SURAHS.find((s) => s.id === verse.surah);

  // Audio player for current verse
  const {
    isPlaying,
    isLoading: audioLoading,
    togglePlay,
  } = useAudioPlayer({
    surahId: verse.surah,
    totalVerses: surah?.ayahs || 1,
  });

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      setIsAudioPlaying(false);
    }
  }, []);

  const nextVerse = () => {
    stopAudio();
    setCurrentIndex((currentIndex + 1) % DAILY_VERSES.length);
  };
  const prevVerse = () => {
    stopAudio();
    setCurrentIndex((currentIndex - 1 + DAILY_VERSES.length) % DAILY_VERSES.length);
  };

  // Check if current verse is saved
  const isVerseSaved = savedVerses.some(
    (v) => v.surah === verse.surah && v.ayah === verse.ayah
  );

  // Handle save/unsave
  const handleSave = useCallback(() => {
    if (isVerseSaved) {
      setSavedVerses(savedVerses.filter(
        (v) => !(v.surah === verse.surah && v.ayah === verse.ayah)
      ));
    } else {
      setSavedVerses([...savedVerses, {
        surah: verse.surah,
        ayah: verse.ayah,
        arabic: verse.arabic,
        translation: verse.translation,
        topic: verse.topic,
        savedAt: Date.now(),
      }]);
    }
  }, [verse, isVerseSaved, savedVerses, setSavedVerses]);

  // Keep ref in sync so onended always sees latest value
  useEffect(() => {
    repeatModeRef.current = repeatMode;
    // If repeat turned off while playing, set loop=false on current audio
    if (!repeatMode && audioRef.current) {
      audioRef.current.loop = false;
    }
  }, [repeatMode]);

  // Handle listen - play audio for this verse (supports repeat)
  const handleListen = useCallback(() => {
    // Stop any existing audio first
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    // If already playing, just stop
    if (isAudioPlaying) {
      setIsAudioPlaying(false);
      return;
    }

    // Create and play new audio
    const url = getAudioUrl(verse.surah, verse.ayah);
    const audio = new Audio(url);
    audioRef.current = audio;

    audio.loop = repeatModeRef.current;
    audio.onended = () => setIsAudioPlaying(false);
    audio.onerror = () => setIsAudioPlaying(false);

    audio.play()
      .then(() => setIsAudioPlaying(true))
      .catch((err) => {
        console.error('Audio play failed:', err);
        setIsAudioPlaying(false);
      });
  }, [verse, isAudioPlaying]);

  // Fetch translation when selection or verse changes
  useEffect(() => {
    if (selectedTranslation === 'default') {
      setFetchedTranslation(null);
      return;
    }
    let cancelled = false;
    const fetchTranslation = async () => {
      setIsLoadingTranslation(true);
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${verse.surah}:${verse.ayah}/${selectedTranslation}`);
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (!cancelled && data.code === 200) {
          setFetchedTranslation(data.data.text);
        }
      } catch {
        if (!cancelled) setFetchedTranslation(null);
      }
      if (!cancelled) setIsLoadingTranslation(false);
    };
    fetchTranslation();
    return () => { cancelled = true; };
  }, [selectedTranslation, verse.surah, verse.ayah]);

  const displayTranslation = fetchedTranslation || verse.translation;
  const translationLabel = selectedTranslation === 'default'
    ? null
    : TRANSLATIONS[selectedTranslation]?.languageNative
      ? `${TRANSLATIONS[selectedTranslation].languageNative} — ${TRANSLATIONS[selectedTranslation].nameEn || TRANSLATIONS[selectedTranslation].name}`
      : TRANSLATIONS[selectedTranslation]?.name;

  // Get unique topics from daily verses
  const uniqueTopics = [...new Set(DAILY_VERSES.map((v) => v.topic))];

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={`h-full overflow-auto ${darkMode ? 'text-white' : ''}`}>
      {/* Header with back button */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={handleBack}
            className={`p-2 rounded-full transition-all ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
            title="Go back"
          >
            <Icons.ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Daily Verses
          </h2>
        </div>
      </div>

      <div className="max-w-lg w-full mx-auto p-6 pb-32">

        {/* Main Verse Card */}
        <div
          className="rounded-3xl p-8 text-white shadow-2xl mb-6 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, white 0%, transparent 70%)`, transform: 'translate(30%, -30%)' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Icons.Sparkles className="w-6 h-6" />
                <span className="font-semibold">Verse of the Day</span>
              </div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {currentIndex + 1} / {DAILY_VERSES.length}
              </span>
            </div>

            {/* Arabic Text */}
            <div
              className="text-4xl mb-6 text-right leading-loose"
              style={{ fontFamily: "'Scheherazade New', serif" }}
            >
              {verse.arabic}
            </div>

            {/* Translation */}
            <div className="mb-4">
              {isLoadingTranslation ? (
                <div className="flex items-center gap-2 text-white/70">
                  <Icons.Loader className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Loading translation...</span>
                </div>
              ) : (
                <p className={`text-xl text-white/95 leading-relaxed ${selectedTranslation.startsWith('ur.') ? 'font-urdu' : ''}`}
                  dir={selectedTranslation.startsWith('ur.') || selectedTranslation.startsWith('ar.') ? 'rtl' : 'ltr'}
                  style={selectedTranslation.startsWith('ur.') ? { fontSize: '1.3rem' } : {}}>
                  "{displayTranslation}"
                </p>
              )}
              {translationLabel && (
                <p className="text-white/50 text-xs mt-1">{translationLabel}</p>
              )}
            </div>

            {/* Reference + Translation toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 font-medium">{surah?.name || `Surah ${verse.surah}`}</p>
                <p className="text-white/60 text-sm">Ayah {verse.ayah}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowTranslationPicker(!showTranslationPicker)}
                  className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm flex items-center gap-1.5 transition-all"
                >
                  <Icons.Globe className="w-3.5 h-3.5" />
                  <span className="text-xs">Translation</span>
                </button>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm capitalize">{verse.topic}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Translation Picker */}
        {showTranslationPicker && (
          <div className={`rounded-2xl p-4 mb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center justify-between mb-3">
              <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Choose Translation
              </p>
              <button onClick={() => setShowTranslationPicker(false)}
                className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Icons.X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
              {/* Default option */}
              <button
                onClick={() => { setSelectedTranslation('default'); setShowTranslationPicker(false); }}
                className={`w-full px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                  selectedTranslation === 'default'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                English (Default — built-in)
              </button>
              {/* Grouped by language */}
              {GROUPED_TRANSLATIONS.map(([language, items]) => (
                <div key={language}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {language} {items[0].native ? `(${items[0].native})` : ''}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {items.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setSelectedTranslation(t.id); setShowTranslationPicker(false); }}
                        className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left truncate ${
                          selectedTranslation === t.id
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        title={t.label}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={prevVerse}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'
            }`}
          >
            <Icons.SkipBack className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
          <button
            onClick={nextVerse}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'
            }`}
          >
            <Icons.SkipForward className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          {/* Share Button — opens SharePanel */}
          <button
            onClick={() => setShowSharePanel(true)}
            className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Icons.Share className="w-5 h-5" />
            Share
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
              isVerseSaved
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                : darkMode
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-700'
            }`}
          >
            {isVerseSaved ? (
              <Icons.BookmarkFilled className="w-5 h-5" />
            ) : (
              <Icons.Bookmark className="w-5 h-5" />
            )}
            {isVerseSaved ? 'Saved' : 'Save'}
          </button>

          {/* Listen Button */}
          <button
            onClick={handleListen}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
              isAudioPlaying
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {isAudioPlaying ? (
              <Icons.Pause className="w-5 h-5" />
            ) : (
              <Icons.Volume className="w-5 h-5" />
            )}
            {isAudioPlaying ? 'Playing' : 'Listen'}
          </button>

          {/* Repeat Toggle */}
          <button
            onClick={() => setRepeatMode(!repeatMode)}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
              repeatMode
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icons.Repeat className="w-5 h-5" />
            {repeatMode ? 'Repeat On' : 'Repeat'}
          </button>
        </div>

        {/* SharePanel overlay */}
        {showSharePanel && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 pb-24"
            onClick={(e) => { if (e.target === e.currentTarget) setShowSharePanel(false); }}>
            <div className="w-full max-w-lg rounded-2xl overflow-hidden max-h-[75vh] overflow-y-auto border-2 border-white/20 bg-[#1a1a2e] m-4 p-5 pb-10"
              style={{ boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.3)' }}>
              <SharePanel
                surahId={verse.surah}
                surahName={surah?.name || `Surah ${verse.surah}`}
                ayahNumber={verse.ayah}
                verseArabic={verse.arabic}
                verseTranslation={displayTranslation}
                onClose={() => setShowSharePanel(false)}
              />
            </div>
          </div>
        )}

        {/* Saved count indicator */}
        {savedVerses.length > 0 && (
          <p className={`text-center text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {savedVerses.length} verse{savedVerses.length !== 1 ? 's' : ''} saved
          </p>
        )}

        {/* Topic Pills */}
        <div className="mt-8">
          <p className={`text-center text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Browse by topic
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {uniqueTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  const idx = DAILY_VERSES.findIndex((v) => v.topic === topic);
                  if (idx !== -1) setCurrentIndex(idx);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  verse.topic === topic
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyVerseView;
