/**
 * HajjUmrahJourney/index.jsx
 * Main entry point for Hajj & Umrah Journey feature
 *
 * Features:
 * - Umrah Journey (FREE): 5 steps
 * - Hajj Journey (PREMIUM): 14 steps over 5 days
 * - TWO MODES:
 *   - Learn Mode: Step-by-step guide with 3D scenes
 *   - Play Mode: Interactive 3D games
 * - Multilingual: English, Urdu, Arabic
 * - Authentic hadith references
 */

import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Icons } from '../../common/Icons';
import JourneySelector from './JourneySelector';
import LanguageSelect from './LanguageSelect';

// Lazy load journey components
const UmrahJourney = lazy(() => import('./UmrahJourney'));
const HajjJourney = lazy(() => import('./HajjJourney'));
const UmrahGameJourney = lazy(() => import('./games/UmrahGameJourney'));

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-white/20 border-t-emerald-400 rounded-full animate-spin" />
      <p className="text-white/70">Loading...</p>
    </div>
  </div>
);

// Mode selector component (Learn vs Play)
const ModeSelector = ({ journey, language, onSelectMode, onBack }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const text = {
    title: {
      en: 'Choose Mode',
      ur: 'موڈ منتخب کریں',
      ar: 'اختر الوضع',
    },
    subtitle: {
      en: journey === 'umrah' ? 'How would you like to learn Umrah?' : 'How would you like to learn Hajj?',
      ur: journey === 'umrah' ? 'آپ عمرہ کیسے سیکھنا چاہتے ہیں؟' : 'آپ حج کیسے سیکھنا چاہتے ہیں؟',
      ar: journey === 'umrah' ? 'كيف تريد تعلم العمرة؟' : 'كيف تريد تعلم الحج؟',
    },
    learn: {
      title: { en: 'Learn Mode', ur: 'سیکھنے کا موڈ', ar: 'وضع التعلم' },
      subtitle: { en: 'Step-by-step guide with 3D scenes', ur: 'تھری ڈی مناظر کے ساتھ رہنمائی', ar: 'دليل خطوة بخطوة مع مشاهد ثلاثية الأبعاد' },
      features: { en: '📖 Read • 🎬 Watch • 🤲 Duas', ur: '📖 پڑھیں • 🎬 دیکھیں • 🤲 دعائیں', ar: '📖 اقرأ • 🎬 شاهد • 🤲 أدعية' },
    },
    play: {
      title: { en: 'Play Mode', ur: 'کھیلنے کا موڈ', ar: 'وضع اللعب' },
      subtitle: { en: 'Interactive 3D game experience', ur: 'تھری ڈی گیم کا تجربہ', ar: 'تجربة لعبة ثلاثية الأبعاد تفاعلية' },
      features: { en: '🎮 Play • 🏆 Earn Stars • 🎯 Complete Tasks', ur: '🎮 کھیلیں • 🏆 ستارے کمائیں • 🎯 مکمل کریں', ar: '🎮 العب • 🏆 اكسب نجوم • 🎯 أكمل المهام' },
      new: { en: 'NEW!', ur: 'نیا!', ar: 'جديد!' },
    },
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #1E1B4B 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              opacity: 0.3 + Math.random() * 0.5,
              animationDelay: `${Math.random() * 3}s`,
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

      {/* Title */}
      <div className="relative z-10 text-center mb-8">
        <div className="text-5xl mb-4">{journey === 'umrah' ? '🕌' : '🕋'}</div>
        <h1
          className="text-2xl sm:text-3xl font-bold text-white mb-2"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif" : 'inherit' }}
        >
          {text.title[language]}
        </h1>
        <p
          className="text-white/70 text-sm sm:text-base"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif" : 'inherit' }}
        >
          {text.subtitle[language]}
        </p>
      </div>

      {/* Mode cards */}
      <div className="relative z-10 flex flex-col gap-4 w-full max-w-md px-4">
        {/* Learn Mode */}
        <button
          onClick={() => onSelectMode('learn')}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-5 shadow-xl hover:scale-105 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
              📖
            </div>
            <div className="flex-1 text-left" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.learn.title[language]}
              </h3>
              <p
                className="text-white/80 text-sm"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.learn.subtitle[language]}
              </p>
              <p className="text-white/60 text-xs mt-1">
                {text.learn.features[language]}
              </p>
            </div>
            <Icons.ChevronRight className="w-6 h-6 text-white/70" />
          </div>
        </button>

        {/* Play Mode */}
        <button
          onClick={() => onSelectMode('play')}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-5 shadow-xl hover:scale-105 transition-all duration-300"
        >
          {/* NEW badge */}
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-amber-400 rounded-full text-amber-900 text-xs font-bold">
            {text.play.new[language]}
          </div>

          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
              🎮
            </div>
            <div className="flex-1 text-left" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.play.title[language]}
              </h3>
              <p
                className="text-white/80 text-sm"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.play.subtitle[language]}
              </p>
              <p className="text-white/60 text-xs mt-1">
                {text.play.features[language]}
              </p>
            </div>
            <Icons.ChevronRight className="w-6 h-6 text-white/70" />
          </div>

          {/* Animated glow for Play mode */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
        </button>
      </div>

      {/* Footer hint */}
      <p className="relative z-10 mt-8 text-white/40 text-xs text-center">
        {language === 'ar' ? '🎯 وضع اللعب يتيح لك المشاركة الفعلية في الشعائر' :
         language === 'ur' ? '🎯 پلے موڈ آپ کو عبادات میں حصہ لینے دیتا ہے' :
         '🎯 Play mode lets you actively participate in the rituals'}
      </p>

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

// Get saved language preference
const getSavedLanguage = () => {
  try {
    return localStorage.getItem('hajj_umrah_language') || null;
  } catch {
    return null;
  }
};

// Save language preference
const saveLanguage = (lang) => {
  try {
    localStorage.setItem('hajj_umrah_language', lang);
  } catch (e) {
    console.warn('Could not save language:', e);
  }
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const HajjUmrahJourney = ({ onBack }) => {
  // Screens: language, selector, mode_umrah, mode_hajj, umrah_learn, umrah_play, hajj_learn, hajj_play
  const [screen, setScreen] = useState('language');
  const [language, setLanguage] = useState(getSavedLanguage() || 'en');

  // Check for saved language on mount
  useEffect(() => {
    const saved = getSavedLanguage();
    if (saved) {
      setLanguage(saved);
      setScreen('selector');
    }
  }, []);

  // Handle language selection
  const handleLanguageSelect = useCallback((lang) => {
    setLanguage(lang);
    saveLanguage(lang);
    setScreen('selector');
  }, []);

  // Handle journey selection (Umrah or Hajj)
  const handleJourneySelect = useCallback((journey) => {
    setScreen(`mode_${journey}`); // Show mode selector
  }, []);

  // Handle mode selection (Learn or Play)
  const handleModeSelect = useCallback((mode) => {
    const journey = screen.replace('mode_', '');
    setScreen(`${journey}_${mode}`);
  }, [screen]);

  // Handle back navigation
  const handleBack = useCallback(() => {
    if (screen.includes('_learn') || screen.includes('_play')) {
      // From journey back to mode selector
      const journey = screen.split('_')[0];
      setScreen(`mode_${journey}`);
    } else if (screen.startsWith('mode_')) {
      // From mode selector back to journey selector
      setScreen('selector');
    } else if (screen === 'selector') {
      setScreen('language');
    } else {
      onBack?.();
    }
  }, [screen, onBack]);

  // Render based on current screen
  switch (screen) {
    case 'language':
      return (
        <LanguageSelect
          onSelectLanguage={handleLanguageSelect}
          onBack={onBack}
        />
      );

    case 'selector':
      return (
        <JourneySelector
          language={language}
          onSelectJourney={handleJourneySelect}
          onBack={handleBack}
          onChangeLanguage={() => setScreen('language')}
        />
      );

    case 'mode_umrah':
      return (
        <ModeSelector
          journey="umrah"
          language={language}
          onSelectMode={handleModeSelect}
          onBack={handleBack}
        />
      );

    case 'mode_hajj':
      return (
        <ModeSelector
          journey="hajj"
          language={language}
          onSelectMode={handleModeSelect}
          onBack={handleBack}
        />
      );

    case 'umrah_learn':
      return (
        <Suspense fallback={<LoadingScreen />}>
          <UmrahJourney
            language={language}
            onBack={handleBack}
          />
        </Suspense>
      );

    case 'umrah_play':
      return (
        <Suspense fallback={<LoadingScreen />}>
          <UmrahGameJourney
            language={language}
            onBack={handleBack}
          />
        </Suspense>
      );

    case 'hajj_learn':
      return (
        <Suspense fallback={<LoadingScreen />}>
          <HajjJourney
            language={language}
            onBack={handleBack}
          />
        </Suspense>
      );

    case 'hajj_play':
      // TODO: Create HajjGameJourney
      // For now, fall back to learn mode
      return (
        <Suspense fallback={<LoadingScreen />}>
          <HajjJourney
            language={language}
            onBack={handleBack}
          />
        </Suspense>
      );

    default:
      return null;
  }
};

export default HajjUmrahJourney;
