/**
 * Locale Context
 * Provides internationalization (i18n) throughout the app
 */

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { locales, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, getBrowserLanguage, getLanguageDirection } from '../locales';

const LocaleContext = createContext(null);

const STORAGE_KEY = 'w3quran_language';

export function LocaleProvider({ children }) {
  // Initialize language from localStorage or browser
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    return localStorage.getItem(STORAGE_KEY) || getBrowserLanguage();
  });

  // Get current translations
  const translations = useMemo(() => locales[language] || locales[DEFAULT_LANGUAGE], [language]);

  // Get text direction
  const direction = useMemo(() => getLanguageDirection(language), [language]);

  // Update document direction when language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = direction;
      document.documentElement.lang = language;
    }
  }, [language, direction]);

  // Set language and persist to localStorage
  const setLanguage = useCallback((langCode) => {
    const supported = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
    if (supported) {
      setLanguageState(langCode);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, langCode);
      }
    }
  }, []);

  // Get translation by path (e.g., 'common.loading')
  const t = useCallback((path, fallback = '') => {
    const keys = path.split('.');
    let value = translations;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // Fallback to English if key not found
        value = locales[DEFAULT_LANGUAGE];
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return fallback || path;
          }
        }
        break;
      }
    }

    return value || fallback || path;
  }, [translations]);

  // Get translation with interpolation (e.g., t('hello', { name: 'John' }) => 'Hello, John')
  const tInterpolate = useCallback((path, variables = {}, fallback = '') => {
    let text = t(path, fallback);

    if (typeof text === 'string') {
      Object.entries(variables).forEach(([key, value]) => {
        text = text.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
      });
    }

    return text;
  }, [t]);

  // Check if current language is RTL
  const isRTL = direction === 'rtl';

  // Get current language info
  const currentLanguage = useMemo(() =>
    SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0],
    [language]
  );

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    tInterpolate,
    direction,
    isRTL,
    currentLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    translations,
  }), [language, setLanguage, t, tInterpolate, direction, isRTL, currentLanguage, translations]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

// Custom hook to use locale context
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

// Shorthand hook for just the translation function
export function useTranslation() {
  const { t, tInterpolate, language, isRTL, direction } = useLocale();
  return { t, tInterpolate, language, isRTL, direction };
}

export default LocaleContext;
