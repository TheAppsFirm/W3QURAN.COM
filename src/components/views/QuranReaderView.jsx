/**
 * QuranReaderView Component
 * Single Responsibility: Display and interact with Quran verses
 * Uses quran-json package for authentic verse data
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { PALETTES } from '../../data';
import { useQuranVerses } from '../../hooks/useQuranVerses';
import { useAudioPlayer, RECITERS } from '../../hooks/useAudioPlayer';

// Storage keys
const STORAGE_KEYS = {
  NOTES: 'w3quran_notes',
  HIDDEN_AYAHS: 'w3quran_hidden_ayahs',
  FONT_SIZE: 'w3quran_font_size',
  RECITER: 'w3quran_reciter',
};

// Helper to get from localStorage
const getFromStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

// Helper to save to localStorage
const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable
  }
};

function QuranReaderView({ surah, onBack, darkMode, bookmarks = {}, setBookmarks }) {
  // Load persisted state from localStorage
  const [memorizationMode, setMemorizationMode] = useState(false);
  const [hiddenAyahs, setHiddenAyahs] = useState(() => {
    const stored = getFromStorage(STORAGE_KEYS.HIDDEN_AYAHS, {});
    return new Set(stored[surah?.id] || []);
  });
  const [notes, setNotes] = useState(() => getFromStorage(STORAGE_KEYS.NOTES, {}));
  const [showNoteInput, setShowNoteInput] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [fontSize, setFontSize] = useState(() => getFromStorage(STORAGE_KEYS.FONT_SIZE, 1.75));
  const [selectedReciter, setSelectedReciter] = useState(() =>
    getFromStorage(STORAGE_KEYS.RECITER, 'ar.alafasy')
  );
  const [showReciterMenu, setShowReciterMenu] = useState(false);

  const versesContainerRef = useRef(null);

  // Load verses using our custom hook
  const { verses, loading, error, surahInfo } = useQuranVerses(surah?.id);

  // Audio player hook
  const {
    isPlaying,
    isLoading: audioLoading,
    error: audioError,
    currentAyah,
    togglePlay,
    playAyah,
    nextAyah,
    prevAyah,
    stop,
    setCurrentAyah,
  } = useAudioPlayer({
    surahId: surah?.id,
    totalVerses: verses.length,
    reciterId: selectedReciter,
    onVerseChange: (ayahNum) => {
      // Scroll to current ayah
      if (versesContainerRef.current) {
        const ayahElement = versesContainerRef.current.querySelector(`[data-ayah="${ayahNum}"]`);
        if (ayahElement) {
          ayahElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    },
  });

  const palette = PALETTES[(surah?.id - 1) % 10];

  // Persist hidden ayahs when they change
  useEffect(() => {
    if (surah?.id) {
      const allHidden = getFromStorage(STORAGE_KEYS.HIDDEN_AYAHS, {});
      allHidden[surah.id] = Array.from(hiddenAyahs);
      saveToStorage(STORAGE_KEYS.HIDDEN_AYAHS, allHidden);
    }
  }, [hiddenAyahs, surah?.id]);

  // Persist font size
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.FONT_SIZE, fontSize);
  }, [fontSize]);

  // Persist selected reciter
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.RECITER, selectedReciter);
  }, [selectedReciter]);

  // Reset hidden ayahs when surah changes
  useEffect(() => {
    if (surah?.id) {
      const stored = getFromStorage(STORAGE_KEYS.HIDDEN_AYAHS, {});
      setHiddenAyahs(new Set(stored[surah.id] || []));
    }
  }, [surah?.id]);

  const toggleHidden = (ayahNum) => {
    const newHidden = new Set(hiddenAyahs);
    if (newHidden.has(ayahNum)) {
      newHidden.delete(ayahNum);
    } else {
      newHidden.add(ayahNum);
    }
    setHiddenAyahs(newHidden);
  };

  const toggleBookmark = (surahId, ayahNum) => {
    const key = `${surahId}:${ayahNum}`;
    const newBookmarks = { ...bookmarks };
    if (newBookmarks[key]) {
      delete newBookmarks[key];
    } else {
      newBookmarks[key] = { surahId, ayahNum, timestamp: Date.now() };
    }
    if (setBookmarks) {
      setBookmarks(newBookmarks);
    }
  };

  const saveNote = (surahId, ayahNum) => {
    if (noteText.trim()) {
      const key = `${surahId}:${ayahNum}`;
      const newNotes = { ...notes, [key]: noteText };
      setNotes(newNotes);
      saveToStorage(STORAGE_KEYS.NOTES, newNotes);
    }
    setShowNoteInput(null);
    setNoteText('');
  };

  const getNote = (surahId, ayahNum) => {
    return notes[`${surahId}:${ayahNum}`] || '';
  };

  const adjustFontSize = (delta) => {
    setFontSize((prev) => Math.min(3, Math.max(1, prev + delta)));
  };

  // Handle back - stop audio
  const handleBack = useCallback(() => {
    stop();
    onBack();
  }, [stop, onBack]);

  if (!surah) return null;

  // Loading state
  if (loading) {
    return (
      <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div
          className="p-4 flex items-center justify-between"
          style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}
        >
          <button onClick={handleBack} className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white active:scale-95 transition-transform" style={{ minWidth: 44, minHeight: 44 }}>
            <Icons.X className="w-5 h-5" />
          </button>
          <div className="text-center text-white">
            <h2 className="text-xl font-bold">{surah.name}</h2>
            <p className="text-sm opacity-80">{surah.arabic}</p>
          </div>
          <div className="w-11" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-purple-200/30"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
                style={{ borderTopColor: palette.colors[0], animationDuration: '1s' }}
              ></div>
            </div>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Loading verses...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div
          className="p-4 flex items-center justify-between"
          style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}
        >
          <button onClick={handleBack} className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white active:scale-95 transition-transform" style={{ minWidth: 44, minHeight: 44 }}>
            <Icons.X className="w-5 h-5" />
          </button>
          <div className="text-center text-white">
            <h2 className="text-xl font-bold">{surah.name}</h2>
          </div>
          <div className="w-11" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-4">
            <Icons.Book className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Failed to load verses</p>
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div
        className="p-4 flex items-center justify-between"
        style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}
      >
        <button
          onClick={handleBack}
          className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all"
          aria-label="Go back"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <Icons.ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-center text-white">
          <h2 className="text-xl font-bold">{surah.name}</h2>
          <p className="text-sm opacity-80">
            {surah.arabic} • {surah.meaning}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMemorizationMode(!memorizationMode)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              memorizationMode ? 'bg-white text-purple-600' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label={memorizationMode ? 'Exit memorization mode' : 'Enter memorization mode'}
            aria-pressed={memorizationMode}
          >
            <Icons.Brain className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Memorization Mode Banner */}
      {memorizationMode && (
        <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 text-center animate-fade-in-up">
          <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">
            Memorization Mode: Click verses to hide/reveal
          </span>
        </div>
      )}

      {/* Controls Bar */}
      <div className={`px-4 py-2 flex items-center justify-between border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {verses.length} Ayahs • {surahInfo?.type || surah.type}
        </span>
        <div className="flex items-center gap-3">
          {/* Reciter Selector */}
          <div className="relative">
            <button
              onClick={() => setShowReciterMenu(!showReciterMenu)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} hover:opacity-80`}
              aria-label="Select reciter"
            >
              <Icons.Mic className="w-3 h-3" />
              <span className="hidden sm:inline">{RECITERS[selectedReciter]?.name.split(' ')[0]}</span>
            </button>
            {showReciterMenu && (
              <div className={`absolute right-0 top-full mt-1 w-56 rounded-xl shadow-lg z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                {Object.entries(RECITERS).map(([id, reciter]) => (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedReciter(id);
                      setShowReciterMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-xl last:rounded-b-xl flex items-center justify-between ${
                      selectedReciter === id ? 'bg-emerald-50 dark:bg-emerald-900/30' : ''
                    }`}
                  >
                    <div>
                      <div className={darkMode ? 'text-white' : 'text-gray-800'}>{reciter.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{reciter.country}</div>
                    </div>
                    {selectedReciter === id && <Icons.Check className="w-4 h-4 text-emerald-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Font Size Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => adjustFontSize(-0.25)}
              className={`w-7 h-7 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} hover:opacity-80`}
              aria-label="Decrease font size"
            >
              <span className="text-sm font-bold">-</span>
            </button>
            <span className={`text-xs px-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Aa</span>
            <button
              onClick={() => adjustFontSize(0.25)}
              className={`w-7 h-7 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} hover:opacity-80`}
              aria-label="Increase font size"
            >
              <span className="text-sm font-bold">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Audio Error Banner */}
      {audioError && (
        <div className="bg-red-100 dark:bg-red-900/30 px-4 py-2 text-center">
          <span className="text-red-700 dark:text-red-300 text-sm">{audioError}</span>
        </div>
      )}

      {/* Verses */}
      <div ref={versesContainerRef} className="flex-1 overflow-auto p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Bismillah for all surahs except At-Tawbah (9) and Al-Fatiha (1 - already has it) */}
          {surah.id !== 9 && surah.id !== 1 && (
            <div className={`text-center py-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p
                className="font-arabic"
                style={{ fontSize: `${fontSize}rem`, fontFamily: "'Amiri', 'Scheherazade New', serif" }}
                dir="rtl"
                lang="ar"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                In the name of Allah, the Most Gracious, the Most Merciful
              </p>
            </div>
          )}

          {verses.map((verse) => {
            const isHidden = hiddenAyahs.has(verse.ayah);
            const isBookmarked = bookmarks[`${surah.id}:${verse.ayah}`];
            const isCurrent = currentAyah === verse.ayah && isPlaying;
            const noteContent = getNote(surah.id, verse.ayah);

            return (
              <div
                key={verse.ayah}
                data-ayah={verse.ayah}
                className={`rounded-2xl p-5 transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg ${
                  isCurrent ? 'ring-2 ring-emerald-500 shadow-emerald-500/20' : ''
                } ${memorizationMode ? 'cursor-pointer hover:shadow-xl' : ''}`}
                onClick={() => memorizationMode && toggleHidden(verse.ayah)}
                role={memorizationMode ? 'button' : undefined}
                aria-pressed={memorizationMode ? isHidden : undefined}
              >
                {/* Ayah Number & Actions */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}
                    aria-label={`Verse ${verse.ayah}`}
                  >
                    {verse.ayah}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(surah.id, verse.ayah);
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        isBookmarked ? 'bg-amber-100 text-amber-600' : darkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                      aria-pressed={!!isBookmarked}
                    >
                      <Icons.Bookmark className="w-4 h-4" style={{ fill: isBookmarked ? 'currentColor' : 'none' }} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setNoteText(noteContent);
                        setShowNoteInput(showNoteInput === verse.ayah ? null : verse.ayah);
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        noteContent ? 'bg-blue-100 text-blue-600' : darkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                      aria-label={noteContent ? 'Edit note' : 'Add note'}
                    >
                      <Icons.Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isPlaying && currentAyah === verse.ayah) {
                          togglePlay();
                        } else {
                          playAyah(verse.ayah);
                        }
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        isCurrent
                          ? 'bg-emerald-100 text-emerald-600'
                          : darkMode
                          ? 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                      aria-label={isCurrent ? 'Pause' : `Play verse ${verse.ayah}`}
                    >
                      {isCurrent ? (
                        audioLoading ? (
                          <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Icons.Pause className="w-4 h-4" />
                        )
                      ) : (
                        <Icons.Play className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Arabic Text */}
                <div
                  className={`text-right mb-4 leading-loose transition-all ${isHidden && memorizationMode ? 'blur-lg select-none' : ''}`}
                  style={{ fontFamily: "'Amiri', 'Scheherazade New', serif", fontSize: `${fontSize}rem` }}
                  dir="rtl"
                  lang="ar"
                >
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>{verse.arabic}</span>
                </div>

                {/* Transliteration */}
                {verse.transliteration && (
                  <p className={`text-sm italic mb-2 transition-all ${isHidden && memorizationMode ? 'blur-lg' : ''} ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {verse.transliteration}
                  </p>
                )}

                {/* Translation */}
                <p className={`leading-relaxed transition-all ${isHidden && memorizationMode ? 'blur-lg' : ''} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {verse.translation}
                </p>

                {/* Note Input */}
                {showNoteInput === verse.ayah && (
                  <div className="mt-4 flex gap-2 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      placeholder="Add your note..."
                      className={`flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-200 placeholder-gray-400'
                      }`}
                      onKeyDown={(e) => e.key === 'Enter' && saveNote(surah.id, verse.ayah)}
                      autoFocus
                    />
                    <button
                      onClick={() => saveNote(surah.id, verse.ayah)}
                      className="px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                )}

                {/* Saved Note */}
                {noteContent && showNoteInput !== verse.ayah && (
                  <div className={`mt-3 p-3 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      <strong>Note:</strong> {noteContent}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* End of Surah indicator */}
          <div className={`text-center py-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-current opacity-30" />
              <span className="text-sm">End of {surah.name}</span>
              <div className="h-px w-16 bg-current opacity-30" />
            </div>
          </div>
        </div>
      </div>

      {/* Audio Player Bar */}
      {isPlaying && verses.length > 0 && (
        <div className={`p-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} animate-fade-in-up`}>
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={prevAyah}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} disabled:opacity-50`}
                aria-label="Previous verse"
                disabled={currentAyah <= 1}
              >
                <Icons.SkipBack className="w-5 h-5" />
              </button>
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {audioLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Icons.Pause className="w-5 h-5" />
                ) : (
                  <Icons.Play className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={nextAyah}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} disabled:opacity-50`}
                aria-label="Next verse"
                disabled={currentAyah >= verses.length}
              >
                <Icons.SkipForward className="w-5 h-5" />
              </button>
            </div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Ayah {currentAyah} of {verses.length}
            </div>
            <button
              onClick={stop}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Stop and close player"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Click outside to close reciter menu */}
      {showReciterMenu && (
        <div className="fixed inset-0 z-40" onClick={() => setShowReciterMenu(false)} />
      )}
    </div>
  );
}

export default QuranReaderView;
