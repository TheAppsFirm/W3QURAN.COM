/**
 * SeertLanguageSelect.jsx
 * Beautiful language selection screen for Prophet's Life journey
 * Lets kids choose their preferred language for stories
 */

import React, { useState, useEffect } from 'react';
import { Icons } from '../common/Icons';

// Supported languages for Seerah stories
const LANGUAGES = [
  {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    emoji: '📖',
    greeting: 'Welcome!',
    description: 'Stories in English',
    direction: 'ltr',
    voiceLang: 'en-US',
    gradient: 'from-blue-400 via-blue-500 to-blue-600',
  },
  {
    id: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    flag: '🇵🇰',
    emoji: '📚',
    greeting: '!خوش آمدید',
    description: 'اردو میں کہانیاں',
    direction: 'rtl',
    voiceLang: 'ur-PK',
    gradient: 'from-green-400 via-green-500 to-green-600',
  },
  {
    id: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    emoji: '📜',
    greeting: '!أهلاً وسهلاً',
    description: 'قصص بالعربية',
    direction: 'rtl',
    voiceLang: 'ar-SA',
    gradient: 'from-amber-400 via-amber-500 to-amber-600',
  },
];

// Get saved language preference
const getSavedLanguage = () => {
  try {
    return localStorage.getItem('kids_seert_language') || null;
  } catch {
    return null;
  }
};

// Save language preference
const saveLanguage = (langId) => {
  try {
    localStorage.setItem('kids_seert_language', langId);
  } catch {}
};

const SeertLanguageSelect = ({ onSelectLanguage, onBack }) => {
  const [selectedLang, setSelectedLang] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Check for saved preference
  useEffect(() => {
    const saved = getSavedLanguage();
    if (saved) {
      // If already selected before, could auto-proceed or show option to change
      setSelectedLang(saved);
    }
  }, []);

  // Handle language selection
  const handleSelect = (langId) => {
    setSelectedLang(langId);
    setIsAnimating(true);
    saveLanguage(langId);

    // Animate and then proceed
    setTimeout(() => {
      onSelectLanguage(langId);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Beautiful gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #1E1B4B 100%)',
        }}
      />

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.4 + Math.random() * 0.6,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 15}%`,
              animation: `shootingStar 4s ease-in-out ${i * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Crescent moon */}
      <div className="absolute top-10 right-10 text-6xl animate-pulse">
        🌙
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-50 px-4 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold flex items-center gap-2 hover:bg-white/30 transition-all text-lg shadow-lg"
      >
        <Icons.ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Main content */}
      <div className="h-full flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Motorbike icon */}
          <div className="text-6xl mb-4 animate-bounce">🏍️</div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Prophet's Life Journey
          </h1>
          <p className="text-xl sm:text-2xl font-arabic text-amber-300 mb-2">
            رحلة السيرة النبوية
          </p>
          <p className="text-white/80 text-lg max-w-md mx-auto">
            Choose your language for bedtime stories about Prophet Muhammad ﷺ
          </p>
        </div>

        {/* Language cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl w-full px-4">
          {LANGUAGES.map((lang, index) => (
            <button
              key={lang.id}
              onClick={() => handleSelect(lang.id)}
              disabled={isAnimating}
              className={`
                relative p-6 rounded-3xl text-center transition-all transform
                ${selectedLang === lang.id && isAnimating
                  ? 'scale-110 ring-4 ring-white/50'
                  : 'hover:scale-105 active:scale-95'
                }
                shadow-2xl
                ${isAnimating && selectedLang !== lang.id ? 'opacity-50' : ''}
              `}
              style={{
                background: `linear-gradient(135deg, ${lang.gradient.split(' ').filter(c => c.startsWith('from-') || c.startsWith('via-') || c.startsWith('to-')).map(c => {
                  const color = c.replace('from-', '').replace('via-', '').replace('to-', '');
                  const colorMap = {
                    'blue-400': '#60A5FA', 'blue-500': '#3B82F6', 'blue-600': '#2563EB',
                    'green-400': '#4ADE80', 'green-500': '#22C55E', 'green-600': '#16A34A',
                    'amber-400': '#FBBF24', 'amber-500': '#F59E0B', 'amber-600': '#D97706',
                  };
                  return colorMap[color] || '#3B82F6';
                }).join(', ')})`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Flag */}
              <div className="text-5xl mb-3">{lang.flag}</div>

              {/* Language name */}
              <h3 className="text-xl font-bold text-white mb-1">
                {lang.name}
              </h3>
              <p
                className="text-lg text-white/90 font-arabic"
                style={{ direction: lang.direction }}
              >
                {lang.nativeName}
              </p>

              {/* Description */}
              <p
                className="text-sm text-white/70 mt-2"
                style={{ direction: lang.direction }}
              >
                {lang.description}
              </p>

              {/* Greeting */}
              <div className="mt-3 px-3 py-1 bg-white/20 rounded-full inline-block">
                <span
                  className="text-white font-medium"
                  style={{ direction: lang.direction }}
                >
                  {lang.greeting}
                </span>
              </div>

              {/* Selected indicator */}
              {selectedLang === lang.id && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Icons.Check className="w-5 h-5 text-green-500" />
                </div>
              )}

              {/* Sparkle decorations */}
              <div className="absolute top-2 left-2 text-lg opacity-70">✨</div>
              <div className="absolute bottom-2 right-2 text-lg opacity-70">⭐</div>
            </button>
          ))}
        </div>

        {/* Info text */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm sm:text-base flex items-center justify-center gap-2">
            <span>🎧</span>
            <span>Stories will be read aloud in your chosen language</span>
            <span>🎧</span>
          </p>
        </div>

        {/* Previously selected indicator */}
        {getSavedLanguage() && !isAnimating && (
          <div className="mt-4 px-4 py-2 bg-white/10 rounded-full">
            <p className="text-white/70 text-sm">
              Last time you chose: <span className="font-bold text-white">{LANGUAGES.find(l => l.id === getSavedLanguage())?.name}</span>
            </p>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(200px) translateY(100px);
            opacity: 0;
          }
        }

        .font-arabic {
          font-family: 'Scheherazade New', 'Amiri', serif;
        }
      `}</style>
    </div>
  );
};

export default SeertLanguageSelect;
