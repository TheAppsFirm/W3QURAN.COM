/**
 * LanguageSelect.jsx
 * Language selection screen for Hajj & Umrah Journey
 */

import React from 'react';
import { Icons } from '../../common/Icons';

const LANGUAGES = [
  {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    direction: 'ltr',
  },
  {
    id: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    flag: '🇵🇰',
    direction: 'rtl',
  },
  {
    id: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    direction: 'rtl',
  },
];

const LanguageSelect = ({ onSelectLanguage, onBack }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
      }}
    >
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${10 + (i * 3) % 80}%`,
              top: `${5 + (i * 7) % 45}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              opacity: 0.3 + (i % 5) * 0.1,
              animationDelay: `${(i % 5) * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
      >
        <Icons.ArrowLeft className="w-6 h-6" />
      </button>

      {/* Main content */}
      <div className="relative z-10 text-center mb-8">
        <div className="text-6xl mb-4">🕋</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Hajj & Umrah Journey
        </h1>
        <p className="text-white/80 text-lg">
          Learn the sacred pilgrimage step by step
        </p>
      </div>

      {/* Language cards */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full max-w-lg px-4">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => onSelectLanguage(lang.id)}
            className="flex-1 group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl hover:scale-105 transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <div className="relative flex flex-col items-center gap-3">
              <span className="text-4xl">{lang.flag}</span>
              <div>
                <p className="font-bold text-gray-800 text-lg">{lang.name}</p>
                <p
                  className="text-gray-500 text-sm"
                  style={{
                    fontFamily: lang.direction === 'rtl'
                      ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif"
                      : 'inherit',
                  }}
                >
                  {lang.nativeName}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Icons.ChevronRight className="w-6 h-6 text-amber-500" />
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-white/60 text-sm">
        <p>🤲 May Allah accept your worship</p>
      </div>

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default LanguageSelect;
