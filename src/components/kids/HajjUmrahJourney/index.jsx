/**
 * HajjUmrahJourney/index.jsx
 * Main entry point for Hajj & Umrah Journey feature
 *
 * Features:
 * - Umrah Journey (FREE): 5 steps
 * - Hajj Journey (PREMIUM): 14 steps over 5 days
 * - 3D Emirati Avatar performing rituals
 * - Multilingual: English, Urdu, Arabic
 * - Authentic hadith references
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Icons } from '../../common/Icons';
import JourneySelector from './JourneySelector';
import UmrahJourney from './UmrahJourney';
import HajjJourney from './HajjJourney';
import LanguageSelect from './LanguageSelect';

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

const HajjUmrahJourney = ({ onBack }) => {
  const [screen, setScreen] = useState('language'); // language, selector, umrah, hajj
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

  // Handle journey selection
  const handleJourneySelect = useCallback((journey) => {
    setScreen(journey); // 'umrah' or 'hajj'
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
        <UmrahJourney
          language={language}
          onBack={handleBack}
        />
      );

    case 'hajj':
      return (
        <HajjJourney
          language={language}
          onBack={handleBack}
        />
      );

    default:
      return null;
  }
};

export default HajjUmrahJourney;
