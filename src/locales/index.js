/**
 * Localization Index
 * Export all locale files and utilities
 */

import en from './en';
import ur from './ur';
import ar from './ar';

export const locales = {
  en,
  ur,
  ar,
};

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'ur', label: 'Urdu', nativeLabel: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: '🇸🇦', dir: 'rtl' },
];

export const DEFAULT_LANGUAGE = 'ur';

// Get browser language or default
export const getBrowserLanguage = () => {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;

  const browserLang = navigator.language.split('-')[0];
  const supported = SUPPORTED_LANGUAGES.find(l => l.code === browserLang);
  return supported ? supported.code : DEFAULT_LANGUAGE;
};

// Get translation by path (e.g., 'common.loading')
export const getTranslation = (locale, path, fallback = '') => {
  const keys = path.split('.');
  let value = locales[locale] || locales[DEFAULT_LANGUAGE];

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
};

// Get direction for language
export const getLanguageDirection = (langCode) => {
  const lang = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
  return lang?.dir || 'ltr';
};

export default locales;
