/**
 * HajjUmrahJourney/index.jsx
 * Main entry point for Hajj & Umrah Journey feature
 *
 * Features:
 * - Umrah Journey: 4 steps - Bird's Eye 3D Experience with Audio & Duas
 * - Hajj Journey: 11 steps - Bird's Eye 3D Experience with Audio & Duas
 * - Auto-play mode
 * - Multilingual: English, Urdu, Arabic
 */

import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import JourneySelector from './JourneySelector';
import LanguageSelect from './LanguageSelect';

// Lazy load the unified journey component
const PilgrimageJourneyUnified = lazy(() => import('./games/PilgrimageJourneyUnified'));

// Loading component
const LoadingScreen = ({ language }) => {
  const isRTL = language === 'ar' || language === 'ur';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <div className="text-6xl mb-6 animate-bounce">🕋</div>
        <div className="w-16 h-16 mx-auto mb-4 border-4 border-white/20 border-t-emerald-400 rounded-full animate-spin" />
        <p className="text-white/70" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
          {language === 'ar' ? 'جارٍ التحميل...' : language === 'ur' ? 'لوڈ ہو رہا ہے...' : 'Loading...'}
        </p>
      </div>
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
  const [screen, setScreen] = useState('language');
  const [language, setLanguage] = useState(getSavedLanguage() || 'en');
  const [journeyType, setJourneyType] = useState(null);

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

  // Handle journey selection
  const handleJourneySelect = useCallback((journey) => {
    setJourneyType(journey);
    setScreen('journey');
  }, []);

  // Handle back navigation
  const handleBack = useCallback(() => {
    if (screen === 'journey') {
      setScreen('selector');
      setJourneyType(null);
    } else if (screen === 'selector') {
      setScreen('language');
    } else {
      onBack?.();
    }
  }, [screen, onBack]);

  // Handle journey completion
  const handleComplete = useCallback(() => {
    setScreen('selector');
    setJourneyType(null);
  }, []);

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

    case 'journey':
      return (
        <Suspense fallback={<LoadingScreen language={language} />}>
          <PilgrimageJourneyUnified
            journeyType={journeyType}
            language={language}
            onBack={handleBack}
            onComplete={handleComplete}
          />
        </Suspense>
      );

    default:
      return null;
  }
};

export default HajjUmrahJourney;
