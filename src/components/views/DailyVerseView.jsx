/**
 * DailyVerseView Component
 * Single Responsibility: Display daily inspirational verses with share/save/listen
 */

import { useState, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { DAILY_VERSES, SURAHS, PALETTES } from '../../data';
import { useLocalStorage } from '../../hooks';
import { useAudioPlayer, getAudioUrl } from '../../hooks/useAudioPlayer';
import { shareDailyVerse } from '../../utils/shareUtils';

function DailyVerseView({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(new Date().getDate() % DAILY_VERSES.length);
  const [shareStatus, setShareStatus] = useState(null);
  const [savedVerses, setSavedVerses] = useLocalStorage('saved_daily_verses', []);

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

  const nextVerse = () => setCurrentIndex((currentIndex + 1) % DAILY_VERSES.length);
  const prevVerse = () => setCurrentIndex((currentIndex - 1 + DAILY_VERSES.length) % DAILY_VERSES.length);

  // Check if current verse is saved
  const isVerseSaved = savedVerses.some(
    (v) => v.surah === verse.surah && v.ayah === verse.ayah
  );

  // Handle share
  const handleShare = useCallback(async () => {
    setShareStatus('sharing');
    const result = await shareDailyVerse({
      surah: verse.surah,
      ayah: verse.ayah,
      arabic: verse.arabic,
      translation: verse.translation,
      surahName: surah?.name,
    });

    if (result.success) {
      setShareStatus(result.method === 'clipboard' ? 'copied' : 'shared');
    } else {
      setShareStatus('error');
    }

    setTimeout(() => setShareStatus(null), 2000);
  }, [verse, surah]);

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

  // Handle listen - play audio for this verse
  const handleListen = useCallback(() => {
    // Create temporary audio for just this verse
    const url = getAudioUrl(verse.surah, verse.ayah);
    const audio = new Audio(url);
    audio.play().catch((err) => console.error('Audio play failed:', err));
  }, [verse]);

  // Get unique topics from daily verses
  const uniqueTopics = [...new Set(DAILY_VERSES.map((v) => v.topic))];

  return (
    <div className={`h-full overflow-auto flex flex-col items-center justify-center p-6 ${darkMode ? 'text-white' : ''}`}>
      <div className="max-w-lg w-full">
        <h2 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Daily Verses
        </h2>

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
            <p className="text-xl text-white/95 mb-4 leading-relaxed">"{verse.translation}"</p>

            {/* Reference */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 font-medium">{surah?.name || `Surah ${verse.surah}`}</p>
                <p className="text-white/60 text-sm">Ayah {verse.ayah}</p>
              </div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm capitalize">{verse.topic}</span>
            </div>
          </div>
        </div>

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
        <div className="flex gap-3 justify-center">
          {/* Share Button */}
          <button
            onClick={handleShare}
            disabled={shareStatus === 'sharing'}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50"
          >
            {shareStatus === 'sharing' ? (
              <Icons.Loader className="w-5 h-5 animate-spin" />
            ) : shareStatus === 'copied' ? (
              <Icons.Check className="w-5 h-5" />
            ) : shareStatus === 'shared' ? (
              <Icons.Check className="w-5 h-5" />
            ) : (
              <Icons.Share className="w-5 h-5" />
            )}
            {shareStatus === 'copied' ? 'Copied!' : shareStatus === 'shared' ? 'Shared!' : 'Share'}
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className={`px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
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
            className={`px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icons.Volume className="w-5 h-5" />
            Listen
          </button>
        </div>

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
