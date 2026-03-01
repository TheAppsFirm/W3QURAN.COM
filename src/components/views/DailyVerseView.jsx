/**
 * DailyVerseView — Dynamic, context-aware daily verses
 * Time-of-day, thematic categories (rizq, sabr, hardship...), special days (Jumu'ah)
 */

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Icons } from '../common/Icons';
import { SURAHS, PALETTES } from '../../data';
import {
  VERSE_CATEGORIES, ALL_CATEGORY_IDS, TIME_CATEGORIES, THEMATIC_CATEGORIES,
  getSmartVerse, getVersesByCategory, getCategoryInfo,
} from '../../data/dailyVerses';
import { useLocalStorage } from '../../hooks';
import { getAudioUrl } from '../../hooks/useAudioPlayer';
import { TRANSLATIONS } from '../../hooks/useTranslationsAPI';
import { useTranslation } from '../../contexts/LocaleContext';
import { SharePanel } from '../reader/panels';

// Build grouped translations list
const GROUPED_TRANSLATIONS = (() => {
  const groups = {};
  for (const [id, info] of Object.entries(TRANSLATIONS)) {
    const lang = info.language;
    if (!groups[lang]) groups[lang] = [];
    groups[lang].push({ id, label: info.languageNative ? `${info.nameEn || info.name}` : info.name, language: lang, native: info.languageNative });
  }
  const order = ['Urdu', 'English'];
  return Object.entries(groups).sort(([a], [b]) => {
    const ai = order.indexOf(a), bi = order.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.localeCompare(b);
  });
})();

function DailyVerseView({ darkMode, onBack }) {
  const { t, isRTL, language } = useTranslation();

  // Smart verse selection on load
  const smartResult = useMemo(() => getSmartVerse(), []);
  const [activeCategory, setActiveCategory] = useState(smartResult.categoryId);
  const categoryVerses = useMemo(() => getVersesByCategory(activeCategory), [activeCategory]);
  const [verseIndex, setVerseIndex] = useState(() => {
    // Find the smart verse index within its category
    const idx = categoryVerses.findIndex(v => v.surah === smartResult.verse.surah && v.ayah === smartResult.verse.ayah);
    return idx >= 0 ? idx : 0;
  });

  // Recalculate verseIndex when category changes
  useEffect(() => {
    setVerseIndex(0);
  }, [activeCategory]);

  const verse = categoryVerses[verseIndex] || categoryVerses[0] || { surah: 1, ayah: 1 };
  const catInfo = getCategoryInfo(activeCategory);
  const p = PALETTES[(verse.surah + verse.ayah) % 10];
  const surah = SURAHS.find((s) => s.id === verse.surah);

  const [savedVerses, setSavedVerses] = useLocalStorage('saved_daily_verses', []);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Translation state
  const [selectedTranslation, setSelectedTranslation] = useLocalStorage('daily_verse_translation', 'default');
  const [fetchedTranslation, setFetchedTranslation] = useState(null);
  const [isLoadingTranslation, setIsLoadingTranslation] = useState(false);
  const [showTranslationPicker, setShowTranslationPicker] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);
  const repeatModeRef = useRef(false);
  const [showSharePanel, setShowSharePanel] = useState(false);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      setIsAudioPlaying(false);
    }
  }, []);

  const nextVerse = () => {
    stopAudio();
    setVerseIndex((verseIndex + 1) % categoryVerses.length);
  };
  const prevVerse = () => {
    stopAudio();
    setVerseIndex((verseIndex - 1 + categoryVerses.length) % categoryVerses.length);
  };

  const isVerseSaved = savedVerses.some(
    (v) => v.surah === verse.surah && v.ayah === verse.ayah
  );

  const handleSave = useCallback(() => {
    if (isVerseSaved) {
      setSavedVerses(savedVerses.filter(
        (v) => !(v.surah === verse.surah && v.ayah === verse.ayah)
      ));
    } else {
      setSavedVerses([...savedVerses, {
        surah: verse.surah,
        ayah: verse.ayah,
        topic: activeCategory,
        savedAt: Date.now(),
      }]);
    }
  }, [verse, isVerseSaved, savedVerses, setSavedVerses, activeCategory]);

  useEffect(() => {
    repeatModeRef.current = repeatMode;
    if (!repeatMode && audioRef.current) audioRef.current.loop = false;
  }, [repeatMode]);

  const handleListen = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    if (isAudioPlaying) { setIsAudioPlaying(false); return; }

    const url = getAudioUrl(verse.surah, verse.ayah);
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.loop = repeatModeRef.current;
    audio.onended = () => setIsAudioPlaying(false);
    audio.onerror = () => setIsAudioPlaying(false);
    audio.play()
      .then(() => setIsAudioPlaying(true))
      .catch(() => setIsAudioPlaying(false));
  }, [verse, isAudioPlaying]);

  // Fetch translation when selection or verse changes
  useEffect(() => {
    if (selectedTranslation === 'default') { setFetchedTranslation(null); return; }
    let cancelled = false;
    (async () => {
      setIsLoadingTranslation(true);
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${verse.surah}:${verse.ayah}/${selectedTranslation}`);
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (!cancelled && data.code === 200) setFetchedTranslation(data.data.text);
      } catch {
        if (!cancelled) setFetchedTranslation(null);
      }
      if (!cancelled) setIsLoadingTranslation(false);
    })();
    return () => { cancelled = true; };
  }, [selectedTranslation, verse.surah, verse.ayah]);

  // Also fetch Arabic text from API (since new data layer doesn't have inline arabic)
  const [arabicText, setArabicText] = useState('');
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${verse.surah}:${verse.ayah}/quran-uthmani`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!cancelled && data.code === 200) setArabicText(data.data.text);
      } catch {
        if (!cancelled) setArabicText('');
      }
    })();
    return () => { cancelled = true; };
  }, [verse.surah, verse.ayah]);

  // Fetch default translation based on user's language
  const [defaultTranslation, setDefaultTranslation] = useState('');
  useEffect(() => {
    if (selectedTranslation !== 'default') return;
    let cancelled = false;
    const langEdition = language === 'ur' ? 'ur.jalandhry' : language === 'ar' ? 'ar.jalalayn' : 'en.sahih';
    (async () => {
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${verse.surah}:${verse.ayah}/${langEdition}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!cancelled && data.code === 200) setDefaultTranslation(data.data.text);
      } catch {
        if (!cancelled) setDefaultTranslation('');
      }
    })();
    return () => { cancelled = true; };
  }, [verse.surah, verse.ayah, language, selectedTranslation]);

  const displayTranslation = fetchedTranslation || defaultTranslation;
  const isTranslationRTL = selectedTranslation === 'default'
    ? (language === 'ur' || language === 'ar')
    : (selectedTranslation.startsWith('ur.') || selectedTranslation.startsWith('ar.'));
  const translationLabel = selectedTranslation === 'default'
    ? null
    : TRANSLATIONS[selectedTranslation]?.languageNative
      ? `${TRANSLATIONS[selectedTranslation].languageNative} — ${TRANSLATIONS[selectedTranslation].nameEn || TRANSLATIONS[selectedTranslation].name}`
      : TRANSLATIONS[selectedTranslation]?.name;

  const handleBack = () => onBack ? onBack() : window.history.back();

  return (
    <div className={`h-full overflow-auto ${darkMode ? 'text-white' : ''}`}
      style={{ paddingBottom: 'max(6rem, calc(env(safe-area-inset-bottom, 0px) + 6rem))' }}>

      {/* Header */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top))' }}>
        <div className={`flex items-center gap-3 p-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button
            onClick={handleBack}
            className={`p-2.5 rounded-full transition-all active:scale-95 ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
            title={t('common.back', 'Go back')}
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Icons.ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''} ${darkMode ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {t('dailyVerse.title', 'Daily Verses')}
          </h2>
        </div>
      </div>

      <div className="max-w-lg w-full mx-auto p-6 pb-32">

        {/* Category Bar — horizontal scrollable */}
        <div className="mb-5 -mx-6 px-6">
          <p className={`text-center text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('dailyVerse.browseByCategory', 'Browse by category')}
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {ALL_CATEGORY_IDS.map((catId) => {
              const cat = VERSE_CATEGORIES[catId];
              if (!cat?.verses?.length) return null;
              const isActive = activeCategory === catId;
              return (
                <button
                  key={catId}
                  onClick={() => setActiveCategory(catId)}
                  className={`flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white shadow-lg'
                      : darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={isActive ? { background: cat.color } : {}}
                >
                  <span className="text-sm">{cat.emoji}</span>
                  <span>{t(cat.nameKey, catId)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Verse Card */}
        <div
          className="rounded-3xl p-8 text-white shadow-2xl mb-6 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
        >
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Icons.Sparkles className="w-6 h-6" />
                <span className="font-semibold">{t('dailyVerse.verseOfTheDay', 'Verse of the Day')}</span>
              </div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {verseIndex + 1} / {categoryVerses.length}
              </span>
            </div>

            {/* Arabic */}
            <div
              className="text-4xl mb-6 text-right leading-loose min-h-[4rem]"
              style={{ fontFamily: "'Scheherazade New', serif" }}
              dir="rtl"
            >
              {arabicText || (
                <div className="flex items-center justify-center gap-2 text-white/50 text-lg">
                  <Icons.Loader className="w-5 h-5 animate-spin" />
                </div>
              )}
            </div>

            {/* Translation */}
            <div className="mb-4">
              {isLoadingTranslation || (!displayTranslation && selectedTranslation === 'default') ? (
                <div className="flex items-center gap-2 text-white/70">
                  <Icons.Loader className="w-4 h-4 animate-spin" />
                  <span className="text-sm">{t('common.loading', 'Loading...')}</span>
                </div>
              ) : displayTranslation ? (
                <p className={`text-xl text-white/95 leading-relaxed ${isTranslationRTL ? 'font-urdu' : ''}`}
                  dir={isTranslationRTL ? 'rtl' : 'ltr'}
                  style={isTranslationRTL ? { fontSize: '1.3rem' } : {}}>
                  "{displayTranslation}"
                </p>
              ) : null}
              {translationLabel && (
                <p className="text-white/50 text-xs mt-1">{translationLabel}</p>
              )}
            </div>

            {/* Reference + Translation toggle */}
            <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={isRTL ? 'text-right' : ''}>
                <p className="text-white/80 font-medium">{surah?.name || `${t('reader.surah', 'Surah')} ${verse.surah}`}</p>
                <p className="text-white/60 text-sm">{t('reader.ayah', 'Ayah')} {verse.ayah}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowTranslationPicker(!showTranslationPicker)}
                  className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm flex items-center gap-1.5 transition-all"
                >
                  <Icons.Globe className="w-3.5 h-3.5" />
                  <span className="text-xs">{t('reader.translation', 'Translation')}</span>
                </button>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {catInfo?.emoji} {t(catInfo?.nameKey || '', activeCategory)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Translation Picker */}
        {showTranslationPicker && (
          <div className={`rounded-2xl p-4 mb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center justify-between mb-3">
              <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {t('dailyVerse.chooseTranslation', 'Choose Translation')}
              </p>
              <button onClick={() => setShowTranslationPicker(false)}
                className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Icons.X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
              <button
                onClick={() => { setSelectedTranslation('default'); setShowTranslationPicker(false); }}
                className={`w-full px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                  selectedTranslation === 'default'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t('dailyVerse.defaultTranslation', 'Default (auto by language)')}
              </button>
              {GROUPED_TRANSLATIONS.map(([lang, items]) => (
                <div key={lang}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {lang} {items[0].native ? `(${items[0].native})` : ''}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {items.map((tr) => (
                      <button
                        key={tr.id}
                        onClick={() => { setSelectedTranslation(tr.id); setShowTranslationPicker(false); }}
                        className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left truncate ${
                          selectedTranslation === tr.id
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        title={tr.label}
                      >
                        {tr.label}
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
          <button
            onClick={() => setShowSharePanel(true)}
            className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Icons.Share className="w-5 h-5" />
            {t('common.share', 'Share')}
          </button>

          <button
            onClick={handleSave}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
              isVerseSaved
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {isVerseSaved ? <Icons.BookmarkFilled className="w-5 h-5" /> : <Icons.Bookmark className="w-5 h-5" />}
            {isVerseSaved ? t('dailyVerse.saved', 'Saved') : t('common.save', 'Save')}
          </button>

          <button
            onClick={handleListen}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
              isAudioPlaying
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {isAudioPlaying ? <Icons.Pause className="w-5 h-5" /> : <Icons.Volume className="w-5 h-5" />}
            {isAudioPlaying ? t('dailyVerse.playing', 'Playing') : t('dailyVerse.listen', 'Listen')}
          </button>

          <button
            onClick={() => setRepeatMode(!repeatMode)}
            className={`px-5 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
              repeatMode
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icons.Repeat className="w-5 h-5" />
            {repeatMode ? t('dailyVerse.repeatOn', 'Repeat On') : t('reader.repeat', 'Repeat')}
          </button>
        </div>

        {/* SharePanel overlay */}
        {showSharePanel && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            style={{
              paddingTop: 'max(1rem, env(safe-area-inset-top, 1rem))',
              paddingBottom: 'max(6rem, calc(env(safe-area-inset-bottom, 1rem) + 5rem))'
            }}
            onClick={(e) => { if (e.target === e.currentTarget) setShowSharePanel(false); }}>
            <div className="w-full max-w-lg rounded-2xl overflow-hidden max-h-[75vh] overflow-y-auto border-2 border-white/20 bg-[#1a1a2e] m-4 p-5 pb-10"
              style={{ boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.3)' }}>
              <SharePanel
                surahId={verse.surah}
                surahName={surah?.name || `${t('reader.surah', 'Surah')} ${verse.surah}`}
                ayahNumber={verse.ayah}
                verseArabic={arabicText}
                verseTranslation={displayTranslation}
                onClose={() => setShowSharePanel(false)}
              />
            </div>
          </div>
        )}

        {/* Saved count */}
        {savedVerses.length > 0 && (
          <p className={`text-center text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('dailyVerse.versesSaved', '{count} verses saved').replace('{count}', savedVerses.length)}
          </p>
        )}
      </div>
    </div>
  );
}

export default DailyVerseView;
