/**
 * HajjUmrahJourney/index.jsx
 * Main entry point for Hajj & Umrah Journey feature
 *
 * Features:
 * - Umrah Journey (FREE): 5 steps - Interactive 3D Game
 * - Hajj Journey (PREMIUM): 14 steps over 5 days - Interactive 3D Game
 * - Keyboard controls for desktop users
 * - Multilingual: English, Urdu, Arabic
 * - Authentic hadith references
 */

import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Icons } from '../../common/Icons';
import JourneySelector from './JourneySelector';
import LanguageSelect from './LanguageSelect';

// Lazy load game components
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
  // Screens: language, selector, umrah, hajj
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

  // Handle journey selection - go directly to game
  const handleJourneySelect = useCallback((journey) => {
    setScreen(journey); // 'umrah' or 'hajj' - directly to game
  }, []);

  // Handle back navigation
  const handleBack = useCallback(() => {
    if (screen === 'umrah' || screen === 'hajj') {
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

    case 'umrah':
      return (
        <Suspense fallback={<LoadingScreen />}>
          <UmrahGameJourney
            language={language}
            onBack={handleBack}
          />
        </Suspense>
      );

    case 'hajj':
      // TODO: Create HajjGameJourney
      return (
        <Suspense fallback={<LoadingScreen />}>
          <UmrahGameJourney
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
