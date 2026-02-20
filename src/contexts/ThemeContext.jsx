/**
 * ThemeContext - Dynamic Theme Management for w3Quran
 *
 * Provides:
 * - Current theme state
 * - Theme switching functions
 * - Dynamic theme computation based on surah
 * - Persistence to localStorage
 *
 * Usage:
 * import { useTheme } from '../contexts/ThemeContext';
 * const { theme, setLayoutStyle, overlayTheme, modalTheme } = useTheme();
 */

import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { getOverlayTheme, getModalTheme, THEME_LIST, LAYOUT_TO_OVERLAY_THEME } from '../data/themes';

// Create context
const ThemeContext = createContext(null);

// Re-export THEME_LIST as LAYOUT_STYLES for backwards compatibility
// Single source of truth is now in themes.js
export const LAYOUT_STYLES = THEME_LIST;

// Theme provider component
export function ThemeProvider({ children }) {
  // Get initial layout from localStorage or default to 'grid'
  const [layoutStyle, setLayoutStyleState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('w3quran_layout_style') || 'grid';
    }
    return 'grid';
  });

  // Current surah for dynamic theme computation
  const [currentSurah, setCurrentSurah] = useState(null);

  // Dark mode preference (can be auto, light, or dark)
  const [darkModePreference, setDarkModePreference] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('w3quran_dark_mode') || 'auto';
    }
    return 'auto';
  });

  // Set layout style with persistence
  const setLayoutStyle = useCallback((style) => {
    setLayoutStyleState(style);
    if (typeof window !== 'undefined') {
      localStorage.setItem('w3quran_layout_style', style);
    }
  }, []);

  // Set dark mode preference with persistence
  const setDarkMode = useCallback((mode) => {
    setDarkModePreference(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('w3quran_dark_mode', mode);
    }
  }, []);

  // Compute overlay theme based on current layout and surah
  const overlayTheme = useMemo(() => {
    return getOverlayTheme(layoutStyle, currentSurah);
  }, [layoutStyle, currentSurah]);

  // Compute modal theme based on current layout and surah
  const modalTheme = useMemo(() => {
    return getModalTheme(layoutStyle, currentSurah);
  }, [layoutStyle, currentSurah]);

  // Determine if current theme is dark
  const isDarkMode = useMemo(() => {
    if (darkModePreference === 'auto') {
      return overlayTheme.isDark ?? true;
    }
    return darkModePreference === 'dark';
  }, [darkModePreference, overlayTheme]);

  // Get theme key from layout style
  const themeKey = useMemo(() => {
    return LAYOUT_TO_OVERLAY_THEME[layoutStyle] || 'grid';
  }, [layoutStyle]);

  // Available themes for UI (using THEME_LIST directly)
  const availableThemes = THEME_LIST;

  // Context value
  const value = useMemo(() => ({
    // Current state
    layoutStyle,
    themeKey,
    currentSurah,
    isDarkMode,
    darkModePreference,

    // Computed themes
    overlayTheme,
    modalTheme,

    // Setters
    setLayoutStyle,
    setCurrentSurah,
    setDarkMode,

    // Helpers
    availableThemes,
    layoutStyles: LAYOUT_STYLES,
  }), [
    layoutStyle,
    themeKey,
    currentSurah,
    isDarkMode,
    darkModePreference,
    overlayTheme,
    modalTheme,
    setLayoutStyle,
    setDarkMode,
    availableThemes,
  ]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Export for convenience
export default ThemeContext;
