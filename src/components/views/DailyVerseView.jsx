/**
 * DailyVerseView Component
 * Single Responsibility: Display daily inspirational verses
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';
import { DAILY_VERSES, SURAHS, PALETTES } from '../../data';

function DailyVerseView({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(new Date().getDate() % DAILY_VERSES.length);
  const verse = DAILY_VERSES[currentIndex];
  const p = PALETTES[currentIndex % 10];
  const surah = SURAHS.find((s) => s.id === verse.surah);

  const nextVerse = () => setCurrentIndex((currentIndex + 1) % DAILY_VERSES.length);
  const prevVerse = () => setCurrentIndex((currentIndex - 1 + DAILY_VERSES.length) % DAILY_VERSES.length);

  return (
    <div className={`h-full flex flex-col items-center justify-center p-6 ${darkMode ? 'text-white' : ''}`}>
      <div className="max-w-lg w-full">
        <h2 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Daily Verses</h2>

        {/* Main Verse Card */}
        <div
          className="rounded-3xl p-8 text-white shadow-2xl mb-6"
          style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
        >
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
          <div className="text-4xl mb-6 text-right leading-loose" style={{ fontFamily: "'Scheherazade New', serif" }}>
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
          <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
            <Icons.Share className="w-5 h-5" /> Share
          </button>
          <button
            className={`px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icons.Bookmark className="w-5 h-5" /> Save
          </button>
          <button
            className={`px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icons.Volume className="w-5 h-5" /> Listen
          </button>
        </div>

        {/* Topic Pills */}
        <div className="mt-8">
          <p className={`text-center text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Browse by topic</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['comfort', 'hope', 'strength', 'peace', 'trust', 'guidance', 'mercy'].map((topic) => (
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
