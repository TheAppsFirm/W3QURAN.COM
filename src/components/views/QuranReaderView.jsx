/**
 * QuranReaderView Component
 * Single Responsibility: Display and interact with Quran verses
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';
import { PALETTES } from '../../data';

// Sample verses data (in production, this would come from API)
const QURAN_VERSES = {
  1: [
    {
      ayah: 1,
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      transliteration: "Bismillahir Rahmanir Raheem",
      translation: 'In the name of Allah, the Most Gracious, the Most Merciful.',
      tafsir: 'This verse is called Basmalah. It is a prayer seeking Allah\'s help and blessing.',
    },
    {
      ayah: 2,
      arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      transliteration: "Alhamdu lillahi Rabbil 'Aalameen",
      translation: 'All praise is due to Allah, Lord of the worlds.',
      tafsir: 'This verse acknowledges Allah as the Creator and Sustainer of everything.',
    },
    {
      ayah: 3,
      arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
      transliteration: 'Ar-Rahmanir Raheem',
      translation: 'The Most Gracious, the Most Merciful.',
      tafsir: 'These are two of the beautiful names of Allah, emphasizing His infinite mercy.',
    },
    {
      ayah: 4,
      arabic: 'مَالِكِ يَوْمِ الدِّينِ',
      transliteration: 'Maaliki Yawmid-Deen',
      translation: 'Master of the Day of Judgment.',
      tafsir: 'Allah is the sole authority on the Day of Resurrection.',
    },
    {
      ayah: 5,
      arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      transliteration: "Iyyaaka na'budu wa iyyaaka nasta'een",
      translation: 'You alone we worship, and You alone we ask for help.',
      tafsir: 'This verse expresses complete devotion and reliance on Allah alone.',
    },
    {
      ayah: 6,
      arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      transliteration: 'Ihdinas-Siraatal-Mustaqeem',
      translation: 'Guide us to the straight path.',
      tafsir: 'A prayer for guidance to the path of righteousness.',
    },
    {
      ayah: 7,
      arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      transliteration: "Siraatal-lazeena an'amta 'alayhim, ghayril-maghdoobi 'alayhim wa lad-daaalleen",
      translation: 'The path of those upon whom You have bestowed favor, not of those who have earned anger or of those who are astray.',
      tafsir: 'This verse asks for the path of the righteous, not those who went astray.',
    },
  ],
};

function QuranReaderView({ surah, onBack, darkMode, bookmarks, setBookmarks }) {
  const [currentAyah, setCurrentAyah] = useState(0);
  const [showTafsir, setShowTafsir] = useState(false);
  const [memorizationMode, setMemorizationMode] = useState(false);
  const [hiddenAyahs, setHiddenAyahs] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [notes, setNotes] = useState({});
  const [showNoteInput, setShowNoteInput] = useState(null);
  const [noteText, setNoteText] = useState('');

  const verses = QURAN_VERSES[surah?.id] || [];
  const palette = PALETTES[(surah?.id - 1) % 10];

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
    setBookmarks(newBookmarks);
  };

  const saveNote = (ayahNum) => {
    if (noteText.trim()) {
      setNotes({ ...notes, [ayahNum]: noteText });
    }
    setShowNoteInput(null);
    setNoteText('');
  };

  if (!surah) return null;

  return (
    <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div
        className="p-4 flex items-center justify-between"
        style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}
      >
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
          <Icons.X className="w-5 h-5" />
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
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              memorizationMode ? 'bg-white text-purple-600' : 'bg-white/20 text-white'
            }`}
          >
            <Icons.Brain className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Memorization Mode Banner */}
      {memorizationMode && (
        <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 text-center">
          <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">
            Memorization Mode: Click verses to hide/reveal
          </span>
        </div>
      )}

      {/* Verses */}
      <div className="flex-1 overflow-auto p-4">
        {verses.length > 0 ? (
          <div className="max-w-2xl mx-auto space-y-6">
            {verses.map((verse, idx) => {
              const isHidden = hiddenAyahs.has(verse.ayah);
              const isBookmarked = bookmarks[`${surah.id}:${verse.ayah}`];
              return (
                <div
                  key={verse.ayah}
                  className={`rounded-2xl p-5 transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg ${
                    currentAyah === idx ? 'ring-2 ring-emerald-500' : ''
                  }`}
                  onClick={() => memorizationMode && toggleHidden(verse.ayah)}
                >
                  {/* Ayah Number & Actions */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}
                    >
                      {verse.ayah}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(surah.id, verse.ayah);
                        }}
                        className={`p-2 rounded-full ${
                          isBookmarked ? 'bg-amber-100 text-amber-600' : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        <Icons.Bookmark className="w-4 h-4" style={{ fill: isBookmarked ? 'currentColor' : 'none' }} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowNoteInput(showNoteInput === verse.ayah ? null : verse.ayah);
                        }}
                        className={`p-2 rounded-full ${
                          notes[verse.ayah] ? 'bg-blue-100 text-blue-600' : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        <Icons.Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentAyah(idx);
                          setIsPlaying(true);
                        }}
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}
                      >
                        <Icons.Volume className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Arabic Text */}
                  <div
                    className={`text-right mb-4 leading-loose transition-all ${isHidden && memorizationMode ? 'blur-lg select-none' : ''}`}
                    style={{ fontFamily: "'Scheherazade New', 'Amiri', serif", fontSize: '1.75rem' }}
                  >
                    <span className={darkMode ? 'text-white' : 'text-gray-800'}>{verse.arabic}</span>
                  </div>

                  {/* Transliteration */}
                  <p className={`text-sm italic mb-2 ${isHidden && memorizationMode ? 'blur-lg' : ''} ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {verse.transliteration}
                  </p>

                  {/* Translation */}
                  <p className={`${isHidden && memorizationMode ? 'blur-lg' : ''} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {verse.translation}
                  </p>

                  {/* Note Input */}
                  {showNoteInput === verse.ayah && (
                    <div className="mt-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="text"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="Add your note..."
                        className={`flex-1 px-4 py-2 rounded-xl border ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'
                        }`}
                      />
                      <button onClick={() => saveNote(verse.ayah)} className="px-4 py-2 bg-emerald-500 text-white rounded-xl">
                        Save
                      </button>
                    </div>
                  )}

                  {/* Saved Note */}
                  {notes[verse.ayah] && showNoteInput !== verse.ayah && (
                    <div className={`mt-3 p-3 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                      <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                        <strong>Note:</strong> {notes[verse.ayah]}
                      </p>
                    </div>
                  )}

                  {/* Tafsir Toggle */}
                  {verse.tafsir && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowTafsir(showTafsir === verse.ayah ? null : verse.ayah);
                      }}
                      className={`mt-3 text-sm font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                    >
                      {showTafsir === verse.ayah ? 'Hide Tafsir' : 'Show Tafsir'}
                    </button>
                  )}

                  {/* Tafsir Content */}
                  {showTafsir === verse.ayah && verse.tafsir && (
                    <div className={`mt-3 p-4 rounded-xl ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                      <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                        <strong>Tafsir:</strong> {verse.tafsir}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Icons.Book className={`w-16 h-16 mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Full text coming soon for this surah.</p>
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Try Al-Fatiha (1) for now</p>
          </div>
        )}
      </div>

      {/* Audio Player Bar */}
      {isPlaying && verses.length > 0 && (
        <div className={`p-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentAyah(Math.max(0, currentAyah - 1))}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              >
                <Icons.SkipBack className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white"
              >
                {isPlaying ? <Icons.Pause className="w-5 h-5" /> : <Icons.Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setCurrentAyah(Math.min(verses.length - 1, currentAyah + 1))}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              >
                <Icons.SkipForward className="w-5 h-5" />
              </button>
            </div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Ayah {currentAyah + 1} of {verses.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuranReaderView;
