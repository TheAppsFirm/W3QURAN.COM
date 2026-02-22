/**
 * App Context - Global State Management
 *
 * Follows:
 * - Single Responsibility: Manages only app-wide state
 * - Dependency Inversion: Components depend on context abstraction
 * - Open/Closed: Easy to extend with new state without modifying consumers
 */

import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// ============================================================================
// Types & Constants
// ============================================================================

const VIEWS = {
  SURAHS: 'surahs',
  JUZZ: 'juzz',
  LISTEN: 'listen',
  READER: 'reader',
  NAMES: 'names',
  QUIZ: 'quiz',
  PRAYER: 'prayer',
  STATS: 'stats',
  SETTINGS: 'settings',
  DONATE: 'donate',
  DAILY: 'daily',
};

const ACTIONS = {
  SET_VIEW: 'SET_VIEW',
  SET_SELECTED_SURAH: 'SET_SELECTED_SURAH',
  SET_FILTERS: 'SET_FILTERS',
  SET_ZOOM: 'SET_ZOOM',
  TOGGLE_ANALYTICS: 'TOGGLE_ANALYTICS',
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
  UPDATE_PROGRESS: 'UPDATE_PROGRESS',
  ADD_POINTS: 'ADD_POINTS',
  INCREMENT_STREAK: 'INCREMENT_STREAK',
};

// ============================================================================
// Reducer
// ============================================================================

const initialState = {
  view: VIEWS.SURAHS,
  selectedSurah: null,
  readerSurah: null,
  filters: {
    type: null,
    ayahRange: null,
    chronOrder: null,
    topic: null,
    search: '',
  },
  zoom: 1,
  showAnalytics: false,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_VIEW:
      return { ...state, view: action.payload };

    case ACTIONS.SET_SELECTED_SURAH:
      return { ...state, selectedSurah: action.payload };

    case ACTIONS.SET_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case ACTIONS.SET_ZOOM:
      return { ...state, zoom: Math.max(0.5, Math.min(2, action.payload)) };

    case ACTIONS.TOGGLE_ANALYTICS:
      return { ...state, showAnalytics: !state.showAnalytics };

    default:
      return state;
  }
};

// ============================================================================
// Context
// ============================================================================

const AppContext = createContext(null);

/**
 * App Provider - Wraps the app with global state
 */
export const AppProvider = ({ children }) => {
  // Reducer for UI state (non-persistent)
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Persistent state using localStorage
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', {});
  const [readingProgress, setReadingProgress] = useLocalStorage('readingProgress', {});
  const [points, setPoints] = useLocalStorage('points', 0);
  const [streak, setStreak] = useLocalStorage('streak', 0);
  const [level, setLevel] = useLocalStorage('level', 'starter');
  const [selectedTranslation, setSelectedTranslation] = useLocalStorage('translation', 'en.sahih');
  const [selectedReciter, setSelectedReciter] = useLocalStorage('reciter', 'ar.alafasy');

  // ============================================================================
  // Actions (Memoized for performance)
  // ============================================================================

  const actions = useMemo(
    () => ({
      // Navigation
      setView: (view) => dispatch({ type: ACTIONS.SET_VIEW, payload: view }),
      selectSurah: (surah) => dispatch({ type: ACTIONS.SET_SELECTED_SURAH, payload: surah }),
      closeSurah: () => dispatch({ type: ACTIONS.SET_SELECTED_SURAH, payload: null }),

      // Filters
      setFilters: (filters) => dispatch({ type: ACTIONS.SET_FILTERS, payload: filters }),
      clearFilters: () =>
        dispatch({
          type: ACTIONS.SET_FILTERS,
          payload: { type: null, ayahRange: null, chronOrder: null, topic: null, search: '' },
        }),
      setSearchQuery: (query) => dispatch({ type: ACTIONS.SET_FILTERS, payload: { search: query } }),

      // Zoom
      setZoom: (zoom) => dispatch({ type: ACTIONS.SET_ZOOM, payload: zoom }),
      zoomIn: () => dispatch({ type: ACTIONS.SET_ZOOM, payload: state.zoom + 0.1 }),
      zoomOut: () => dispatch({ type: ACTIONS.SET_ZOOM, payload: state.zoom - 0.1 }),

      // Analytics
      toggleAnalytics: () => dispatch({ type: ACTIONS.TOGGLE_ANALYTICS }),

      // Theme
      toggleDarkMode: () => setDarkMode((prev) => !prev),

      // Bookmarks
      addBookmark: (verseKey, data = {}) => {
        setBookmarks((prev) => ({
          ...prev,
          [verseKey]: { ...data, addedAt: Date.now() },
        }));
      },
      removeBookmark: (verseKey) => {
        setBookmarks((prev) => {
          const next = { ...prev };
          delete next[verseKey];
          return next;
        });
      },
      isBookmarked: (verseKey) => !!bookmarks[verseKey],

      // Progress
      updateProgress: (surahId, data) => {
        setReadingProgress((prev) => ({
          ...prev,
          [surahId]: {
            ...prev[surahId],
            ...data,
            lastRead: Date.now(),
          },
        }));
      },

      // Gamification
      addPoints: (amount) => {
        setPoints((prev) => prev + amount);
        // Check for level up
        const newPoints = points + amount;
        if (newPoints >= 1000 && level === 'starter') {
          setLevel('intermediate');
        } else if (newPoints >= 5000 && level === 'intermediate') {
          setLevel('advanced');
        }
      },
      incrementStreak: () => setStreak((prev) => prev + 1),
      resetStreak: () => setStreak(0),

      // Preferences
      setTranslation: (id) => setSelectedTranslation(id),
      setReciter: (id) => setSelectedReciter(id),
    }),
    [
      state.zoom,
      points,
      level,
      bookmarks,
      setDarkMode,
      setBookmarks,
      setReadingProgress,
      setPoints,
      setStreak,
      setLevel,
      setSelectedTranslation,
      setSelectedReciter,
    ]
  );

  // ============================================================================
  // Context Value
  // ============================================================================

  const value = useMemo(
    () => ({
      // UI State
      ...state,

      // Persistent State
      darkMode,
      bookmarks,
      readingProgress,
      points,
      streak,
      level,
      selectedTranslation,
      selectedReciter,

      // Actions
      ...actions,

      // Constants
      VIEWS,
    }),
    [
      state,
      darkMode,
      bookmarks,
      readingProgress,
      points,
      streak,
      level,
      selectedTranslation,
      selectedReciter,
      actions,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Hook to use App Context
 * @returns {Object} - Context value
 * @throws {Error} - If used outside AppProvider
 */
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

/**
 * Hook for just navigation state
 */
export const useNavigation = () => {
  const { view, setView, VIEWS } = useApp();
  return { view, setView, VIEWS };
};

/**
 * Hook for just theme state
 */
export const useTheme = () => {
  const { darkMode, toggleDarkMode } = useApp();
  return { darkMode, toggleDarkMode };
};

/**
 * Hook for just filters
 */
export const useFilters = () => {
  const { filters, setFilters, clearFilters, setSearchQuery } = useApp();
  return { filters, setFilters, clearFilters, setSearchQuery };
};

/**
 * Hook for bookmarks
 */
export const useBookmarks = () => {
  const { bookmarks, addBookmark, removeBookmark, isBookmarked } = useApp();
  return { bookmarks, addBookmark, removeBookmark, isBookmarked };
};

export { VIEWS, ACTIONS };
export default AppContext;
