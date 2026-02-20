/**
 * ReaderContext - Centralized Reader State Management for w3Quran
 *
 * This context manages all reader-related state including:
 * - Navigation (current surah, ayah)
 * - Playback (isPlaying, audioSource, loading states)
 * - Panels (tafseer, videos, memorize, bookmarks, share)
 * - Settings (fontSize, tajweedMode, wordByWordMode, etc.)
 *
 * Design Principles Applied:
 * - Single Responsibility: Each action handles one state transition
 * - Dependency Inversion: Components depend on abstract actions, not concrete state
 * - Interface Segregation: Settings are separate from transient state
 *
 * Usage:
 * ```jsx
 * import { useReader } from '../contexts/ReaderContext';
 * const { state, actions, settings } = useReader();
 * ```
 *
 * @module ReaderContext
 */

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
} from 'react';
import { useLocalStorage } from '../hooks';

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Default reader settings with localStorage keys
 * @constant {Object}
 */
const DEFAULT_SETTINGS = {
  fontSize: 'medium',
  reciter: 'ar.alafasy',
  translation: 'ur.jalandhry',
  showTranslation: true,
  tajweedMode: false,
  wordByWordMode: false,
  repeatMode: 'none', // 'none' | 'verse' | 'surah'
  autoScroll: true,
};

/**
 * LocalStorage keys for persisted settings
 * @constant {Object}
 */
const STORAGE_KEYS = {
  fontSize: 'reader_fontsize',
  reciter: 'reader_reciter',
  translation: 'reader_translation',
  showTranslation: 'reader_show_translation',
  tajweedMode: 'reader_tajweed',
  wordByWordMode: 'reader_wbw',
  repeatMode: 'reader_repeat',
  autoScroll: 'reader_autoscroll',
};

/**
 * Available panel types
 * @constant {Object}
 */
export const PANELS = {
  TAFSEER: 'tafseer',
  VIDEOS: 'videos',
  MEMORIZE: 'memorize',
  BOOKMARKS: 'bookmarks',
  SHARE: 'share',
};

/**
 * Available audio modes
 * @constant {Object}
 */
export const AUDIO_MODES = {
  ARABIC: 'arabic',
  TRANSLATION: 'translation',
  COMBINED: 'combined',
};

// ============================================================================
// ACTION TYPES
// ============================================================================

/**
 * Action type constants for the reducer
 * @constant {Object}
 */
const ActionTypes = {
  // Navigation
  SET_SURAH: 'reader/SET_SURAH',
  SET_AYAH: 'reader/SET_AYAH',
  SET_LOCATION: 'reader/SET_LOCATION',

  // Playback
  SET_PLAYING: 'reader/SET_PLAYING',
  SET_AUDIO_SOURCE: 'reader/SET_AUDIO_SOURCE',
  SET_AUDIO_LOADING: 'reader/SET_AUDIO_LOADING',
  SET_AUDIO_ERROR: 'reader/SET_AUDIO_ERROR',
  SET_AUDIO_MODE: 'reader/SET_AUDIO_MODE',
  SET_COMBINED_PHASE: 'reader/SET_COMBINED_PHASE',

  // Panels
  SET_ACTIVE_PANEL: 'reader/SET_ACTIVE_PANEL',
  CLOSE_PANEL: 'reader/CLOSE_PANEL',
  TOGGLE_PANEL: 'reader/TOGGLE_PANEL',

  // Features
  SET_FEATURE: 'reader/SET_FEATURE',
  TOGGLE_FEATURE: 'reader/TOGGLE_FEATURE',

  // Selection
  SET_SELECTED_AYAH: 'reader/SET_SELECTED_AYAH',
  SET_SELECTED_VERSES: 'reader/SET_SELECTED_VERSES',
  TOGGLE_VERSE_SELECTION: 'reader/TOGGLE_VERSE_SELECTION',
  CLEAR_SELECTION: 'reader/CLEAR_SELECTION',

  // Memorization
  SET_HIDE_LEVEL: 'reader/SET_HIDE_LEVEL',

  // Loading
  SET_VERSES_LOADING: 'reader/SET_VERSES_LOADING',
  SET_VISIBLE_VERSES: 'reader/SET_VISIBLE_VERSES',
  LOAD_MORE_VERSES: 'reader/LOAD_MORE_VERSES',

  // Word-by-word
  SET_ACTIVE_WORD: 'reader/SET_ACTIVE_WORD',
  CLEAR_ACTIVE_WORD: 'reader/CLEAR_ACTIVE_WORD',

  // Reset
  RESET_STATE: 'reader/RESET_STATE',
  RESET_PLAYBACK: 'reader/RESET_PLAYBACK',
};

// ============================================================================
// INITIAL STATE
// ============================================================================

/**
 * Creates the initial state for the reader
 * @returns {Object} Initial reader state
 */
const createInitialState = () => ({
  // Navigation
  currentSurah: null,
  currentAyah: 1,

  // Playback state
  isPlaying: false,
  audioSource: null, // URL of current audio
  audioLoading: false,
  audioError: null,
  audioMode: AUDIO_MODES.ARABIC,
  combinedPhase: 'arabic', // For combined mode: 'arabic' | 'translation'

  // Panel visibility - only one panel can be open at a time
  activePanel: null, // PANELS.TAFSEER | PANELS.VIDEOS | etc. | null

  // Feature toggles (special features that overlay the reader)
  features: {
    emotionalTracker: false,
    moodEntry: false,
    connectionMap: false,
    scholarSync: false,
    treebank: false,
    livingVisualization: false,
    timeCapsule: false,
    heartbeatMeditation: false,
    familyCircle: false,
    voiceControl: false,
    artGenerator: false,
  },

  // Selection state
  selectedAyah: 1, // Currently focused ayah (for navigation)
  selectedVerses: [], // Array of verse numbers for multi-select
  selectionMode: false, // Whether multi-select is active

  // Memorization
  hideLevel: 0, // 0 = no hiding, 1-4 = progressive word hiding

  // Loading state
  versesLoading: false,
  visibleVerseCount: 50,

  // Word-by-word state
  activeWordIndex: null,
  activeWordAyah: null,
});

// ============================================================================
// REDUCER
// ============================================================================

/**
 * Reader state reducer
 *
 * Handles all state transitions for the reader.
 * Each case follows Single Responsibility - one action, one state change.
 *
 * @param {Object} state - Current state
 * @param {Object} action - Action with type and payload
 * @returns {Object} New state
 */
function readerReducer(state, action) {
  switch (action.type) {
    // ---- Navigation ----
    case ActionTypes.SET_SURAH:
      return {
        ...state,
        currentSurah: action.payload,
        currentAyah: 1, // Reset ayah when changing surah
        selectedAyah: 1,
        selectedVerses: [],
        selectionMode: false,
        visibleVerseCount: 50, // Reset visible verses
      };

    case ActionTypes.SET_AYAH:
      return { ...state, currentAyah: action.payload };

    case ActionTypes.SET_LOCATION:
      return {
        ...state,
        currentSurah: action.payload.surah,
        currentAyah: action.payload.ayah ?? 1,
        selectedAyah: action.payload.ayah ?? 1,
      };

    // ---- Playback ----
    case ActionTypes.SET_PLAYING:
      return { ...state, isPlaying: action.payload };

    case ActionTypes.SET_AUDIO_SOURCE:
      return { ...state, audioSource: action.payload };

    case ActionTypes.SET_AUDIO_LOADING:
      return { ...state, audioLoading: action.payload };

    case ActionTypes.SET_AUDIO_ERROR:
      return {
        ...state,
        audioError: action.payload,
        isPlaying: false,
        audioLoading: false,
      };

    case ActionTypes.SET_AUDIO_MODE:
      return { ...state, audioMode: action.payload };

    case ActionTypes.SET_COMBINED_PHASE:
      return { ...state, combinedPhase: action.payload };

    case ActionTypes.RESET_PLAYBACK:
      return {
        ...state,
        isPlaying: false,
        audioSource: null,
        audioLoading: false,
        audioError: null,
      };

    // ---- Panels ----
    case ActionTypes.SET_ACTIVE_PANEL:
      return { ...state, activePanel: action.payload };

    case ActionTypes.CLOSE_PANEL:
      return { ...state, activePanel: null };

    case ActionTypes.TOGGLE_PANEL:
      return {
        ...state,
        activePanel: state.activePanel === action.payload ? null : action.payload,
      };

    // ---- Features ----
    case ActionTypes.SET_FEATURE:
      return {
        ...state,
        features: {
          ...state.features,
          [action.payload.feature]: action.payload.value,
        },
      };

    case ActionTypes.TOGGLE_FEATURE:
      return {
        ...state,
        features: {
          ...state.features,
          [action.payload]: !state.features[action.payload],
        },
      };

    // ---- Selection ----
    case ActionTypes.SET_SELECTED_AYAH:
      return { ...state, selectedAyah: action.payload };

    case ActionTypes.SET_SELECTED_VERSES:
      return {
        ...state,
        selectedVerses: action.payload,
        selectionMode: action.payload.length > 0,
      };

    case ActionTypes.TOGGLE_VERSE_SELECTION: {
      const verseNum = action.payload;
      const isSelected = state.selectedVerses.includes(verseNum);
      const newSelection = isSelected
        ? state.selectedVerses.filter((v) => v !== verseNum)
        : [...state.selectedVerses, verseNum].sort((a, b) => a - b);
      return {
        ...state,
        selectedVerses: newSelection,
        selectionMode: newSelection.length > 0,
      };
    }

    case ActionTypes.CLEAR_SELECTION:
      return {
        ...state,
        selectedVerses: [],
        selectionMode: false,
      };

    // ---- Memorization ----
    case ActionTypes.SET_HIDE_LEVEL:
      return { ...state, hideLevel: action.payload };

    // ---- Loading ----
    case ActionTypes.SET_VERSES_LOADING:
      return { ...state, versesLoading: action.payload };

    case ActionTypes.SET_VISIBLE_VERSES:
      return { ...state, visibleVerseCount: action.payload };

    case ActionTypes.LOAD_MORE_VERSES:
      return {
        ...state,
        visibleVerseCount: state.visibleVerseCount + action.payload,
      };

    // ---- Word-by-word ----
    case ActionTypes.SET_ACTIVE_WORD:
      return {
        ...state,
        activeWordIndex: action.payload.index,
        activeWordAyah: action.payload.ayah,
      };

    case ActionTypes.CLEAR_ACTIVE_WORD:
      return {
        ...state,
        activeWordIndex: null,
        activeWordAyah: null,
      };

    // ---- Reset ----
    case ActionTypes.RESET_STATE:
      return createInitialState();

    default:
      console.warn(`Unknown action type: ${action.type}`);
      return state;
  }
}

// ============================================================================
// CONTEXT
// ============================================================================

/**
 * Reader context for state management
 * @type {React.Context}
 */
const ReaderContext = createContext(null);

// ============================================================================
// PROVIDER
// ============================================================================

/**
 * ReaderProvider Component
 *
 * Provides reader state and actions to the component tree.
 * Uses useReducer for predictable state updates and useMemo
 * to prevent unnecessary re-renders.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 *
 * @example
 * ```jsx
 * <ReaderProvider>
 *   <App />
 * </ReaderProvider>
 * ```
 */
export function ReaderProvider({ children }) {
  // Initialize reducer with lazy initial state
  const [state, dispatch] = useReducer(readerReducer, null, createInitialState);

  // ---- Persisted Settings (localStorage) ----
  const [fontSize, setFontSize] = useLocalStorage(
    STORAGE_KEYS.fontSize,
    DEFAULT_SETTINGS.fontSize
  );
  const [reciter, setReciter] = useLocalStorage(
    STORAGE_KEYS.reciter,
    DEFAULT_SETTINGS.reciter
  );
  const [translation, setTranslation] = useLocalStorage(
    STORAGE_KEYS.translation,
    DEFAULT_SETTINGS.translation
  );
  const [showTranslation, setShowTranslation] = useLocalStorage(
    STORAGE_KEYS.showTranslation,
    DEFAULT_SETTINGS.showTranslation
  );
  const [tajweedMode, setTajweedMode] = useLocalStorage(
    STORAGE_KEYS.tajweedMode,
    DEFAULT_SETTINGS.tajweedMode
  );
  const [wordByWordMode, setWordByWordMode] = useLocalStorage(
    STORAGE_KEYS.wordByWordMode,
    DEFAULT_SETTINGS.wordByWordMode
  );
  const [repeatMode, setRepeatMode] = useLocalStorage(
    STORAGE_KEYS.repeatMode,
    DEFAULT_SETTINGS.repeatMode
  );
  const [autoScroll, setAutoScroll] = useLocalStorage(
    STORAGE_KEYS.autoScroll,
    DEFAULT_SETTINGS.autoScroll
  );

  // ---- Memoized Actions ----
  // Using useMemo to create stable action references
  // This prevents child components from re-rendering when parent updates
  const actions = useMemo(
    () => ({
      // Navigation
      /**
       * Set the current surah (resets ayah to 1)
       * @param {number|Object} surah - Surah number or surah object
       */
      setSurah: (surah) =>
        dispatch({ type: ActionTypes.SET_SURAH, payload: surah }),

      /**
       * Set the current ayah
       * @param {number} ayah - Ayah number
       */
      setAyah: (ayah) =>
        dispatch({ type: ActionTypes.SET_AYAH, payload: ayah }),

      /**
       * Set both surah and ayah at once
       * @param {number} surah - Surah number or object
       * @param {number} [ayah=1] - Ayah number
       */
      setLocation: (surah, ayah = 1) =>
        dispatch({
          type: ActionTypes.SET_LOCATION,
          payload: { surah, ayah },
        }),

      // Playback
      /**
       * Set playing state
       * @param {boolean} isPlaying - Whether audio is playing
       */
      setPlaying: (isPlaying) =>
        dispatch({ type: ActionTypes.SET_PLAYING, payload: isPlaying }),

      /**
       * Start playback
       */
      play: () => dispatch({ type: ActionTypes.SET_PLAYING, payload: true }),

      /**
       * Pause playback
       */
      pause: () => dispatch({ type: ActionTypes.SET_PLAYING, payload: false }),

      /**
       * Toggle playback state
       */
      togglePlayback: () =>
        dispatch({ type: ActionTypes.SET_PLAYING, payload: !state.isPlaying }),

      /**
       * Set audio source URL
       * @param {string|null} url - Audio URL or null
       */
      setAudioSource: (url) =>
        dispatch({ type: ActionTypes.SET_AUDIO_SOURCE, payload: url }),

      /**
       * Set audio loading state
       * @param {boolean} loading - Whether audio is loading
       */
      setAudioLoading: (loading) =>
        dispatch({ type: ActionTypes.SET_AUDIO_LOADING, payload: loading }),

      /**
       * Set audio error
       * @param {Error|string|null} error - Error or null
       */
      setAudioError: (error) =>
        dispatch({ type: ActionTypes.SET_AUDIO_ERROR, payload: error }),

      /**
       * Set audio mode
       * @param {'arabic'|'translation'|'combined'} mode - Audio mode
       */
      setAudioMode: (mode) =>
        dispatch({ type: ActionTypes.SET_AUDIO_MODE, payload: mode }),

      /**
       * Set combined audio phase
       * @param {'arabic'|'translation'} phase - Current phase
       */
      setCombinedPhase: (phase) =>
        dispatch({ type: ActionTypes.SET_COMBINED_PHASE, payload: phase }),

      /**
       * Reset all playback state
       */
      resetPlayback: () => dispatch({ type: ActionTypes.RESET_PLAYBACK }),

      // Panels
      /**
       * Open a specific panel
       * @param {'tafseer'|'videos'|'memorize'|'bookmarks'|'share'} panel - Panel to open
       */
      openPanel: (panel) =>
        dispatch({ type: ActionTypes.SET_ACTIVE_PANEL, payload: panel }),

      /**
       * Close the currently open panel
       */
      closePanel: () => dispatch({ type: ActionTypes.CLOSE_PANEL }),

      /**
       * Toggle a panel open/closed
       * @param {string} panel - Panel to toggle
       */
      togglePanel: (panel) =>
        dispatch({ type: ActionTypes.TOGGLE_PANEL, payload: panel }),

      // Features
      /**
       * Set a feature's visibility
       * @param {string} feature - Feature name
       * @param {boolean} value - Whether feature is visible
       */
      setFeature: (feature, value) =>
        dispatch({
          type: ActionTypes.SET_FEATURE,
          payload: { feature, value },
        }),

      /**
       * Toggle a feature on/off
       * @param {string} feature - Feature name
       */
      toggleFeature: (feature) =>
        dispatch({ type: ActionTypes.TOGGLE_FEATURE, payload: feature }),

      // Selection
      /**
       * Set the selected ayah (for navigation focus)
       * @param {number} ayah - Ayah number
       */
      selectAyah: (ayah) =>
        dispatch({ type: ActionTypes.SET_SELECTED_AYAH, payload: ayah }),

      /**
       * Set multiple selected verses
       * @param {number[]} verses - Array of verse numbers
       */
      setSelectedVerses: (verses) =>
        dispatch({ type: ActionTypes.SET_SELECTED_VERSES, payload: verses }),

      /**
       * Toggle a verse in the selection
       * @param {number} verse - Verse number to toggle
       */
      toggleVerseSelection: (verse) =>
        dispatch({ type: ActionTypes.TOGGLE_VERSE_SELECTION, payload: verse }),

      /**
       * Clear all selected verses
       */
      clearSelection: () => dispatch({ type: ActionTypes.CLEAR_SELECTION }),

      // Memorization
      /**
       * Set the word hiding level for memorization
       * @param {0|1|2|3|4} level - Hide level (0=none, 4=all)
       */
      setHideLevel: (level) =>
        dispatch({ type: ActionTypes.SET_HIDE_LEVEL, payload: level }),

      // Loading
      /**
       * Set verses loading state
       * @param {boolean} loading - Whether verses are loading
       */
      setVersesLoading: (loading) =>
        dispatch({ type: ActionTypes.SET_VERSES_LOADING, payload: loading }),

      /**
       * Set number of visible verses
       * @param {number} count - Number of verses to show
       */
      setVisibleVerses: (count) =>
        dispatch({ type: ActionTypes.SET_VISIBLE_VERSES, payload: count }),

      /**
       * Load more verses (increment visible count)
       * @param {number} [count=30] - Number of additional verses to load
       */
      loadMoreVerses: (count = 30) =>
        dispatch({ type: ActionTypes.LOAD_MORE_VERSES, payload: count }),

      // Word-by-word
      /**
       * Set the active word for word-by-word mode
       * @param {number} index - Word index
       * @param {number} ayah - Ayah containing the word
       */
      setActiveWord: (index, ayah) =>
        dispatch({
          type: ActionTypes.SET_ACTIVE_WORD,
          payload: { index, ayah },
        }),

      /**
       * Clear active word selection
       */
      clearActiveWord: () => dispatch({ type: ActionTypes.CLEAR_ACTIVE_WORD }),

      // Reset
      /**
       * Reset all state to initial values
       */
      resetState: () => dispatch({ type: ActionTypes.RESET_STATE }),
    }),
    [state.isPlaying] // Only dependency needed for togglePlayback
  );

  // ---- Settings Object ----
  // Memoized settings with getters and setters
  const settings = useMemo(
    () => ({
      // Values
      fontSize,
      reciter,
      translation,
      showTranslation,
      tajweedMode,
      wordByWordMode,
      repeatMode,
      autoScroll,

      // Setters
      setFontSize,
      setReciter,
      setTranslation,
      setShowTranslation,
      setTajweedMode,
      setWordByWordMode,
      setRepeatMode,
      setAutoScroll,

      // Bulk update helper
      /**
       * Update multiple settings at once
       * @param {Object} updates - Object with setting keys and values
       */
      updateSettings: (updates) => {
        if (updates.fontSize !== undefined) setFontSize(updates.fontSize);
        if (updates.reciter !== undefined) setReciter(updates.reciter);
        if (updates.translation !== undefined) setTranslation(updates.translation);
        if (updates.showTranslation !== undefined) setShowTranslation(updates.showTranslation);
        if (updates.tajweedMode !== undefined) setTajweedMode(updates.tajweedMode);
        if (updates.wordByWordMode !== undefined) setWordByWordMode(updates.wordByWordMode);
        if (updates.repeatMode !== undefined) setRepeatMode(updates.repeatMode);
        if (updates.autoScroll !== undefined) setAutoScroll(updates.autoScroll);
      },

      /**
       * Reset settings to defaults
       */
      resetSettings: () => {
        setFontSize(DEFAULT_SETTINGS.fontSize);
        setReciter(DEFAULT_SETTINGS.reciter);
        setTranslation(DEFAULT_SETTINGS.translation);
        setShowTranslation(DEFAULT_SETTINGS.showTranslation);
        setTajweedMode(DEFAULT_SETTINGS.tajweedMode);
        setWordByWordMode(DEFAULT_SETTINGS.wordByWordMode);
        setRepeatMode(DEFAULT_SETTINGS.repeatMode);
        setAutoScroll(DEFAULT_SETTINGS.autoScroll);
      },
    }),
    [
      fontSize, setFontSize,
      reciter, setReciter,
      translation, setTranslation,
      showTranslation, setShowTranslation,
      tajweedMode, setTajweedMode,
      wordByWordMode, setWordByWordMode,
      repeatMode, setRepeatMode,
      autoScroll, setAutoScroll,
    ]
  );

  // ---- Derived State ----
  // Computed values that depend on state
  const derived = useMemo(
    () => ({
      /**
       * Whether any panel is currently open
       */
      hasOpenPanel: state.activePanel !== null,

      /**
       * Whether selection mode is active
       */
      isSelecting: state.selectionMode,

      /**
       * Number of selected verses
       */
      selectionCount: state.selectedVerses.length,

      /**
       * Whether audio is in error state
       */
      hasAudioError: state.audioError !== null,

      /**
       * Whether memorization mode is active (hide level > 0)
       */
      isMemorizationMode: state.hideLevel > 0,

      /**
       * Whether word-by-word mode has an active word
       */
      hasActiveWord: state.activeWordIndex !== null,
    }),
    [
      state.activePanel,
      state.selectionMode,
      state.selectedVerses.length,
      state.audioError,
      state.hideLevel,
      state.activeWordIndex,
    ]
  );

  // ---- Context Value ----
  const value = useMemo(
    () => ({
      state,
      actions,
      settings,
      derived,
      // Direct access to dispatch for advanced use cases
      dispatch,
      // Action types for external reducers
      ActionTypes,
    }),
    [state, actions, settings, derived]
  );

  return (
    <ReaderContext.Provider value={value}>
      {children}
    </ReaderContext.Provider>
  );
}

// ============================================================================
// HOOKS
// ============================================================================

/**
 * Hook to access the reader context
 *
 * @returns {Object} Reader context value containing:
 *   - state: Current reader state
 *   - actions: Memoized action creators
 *   - settings: Persisted settings with setters
 *   - derived: Computed derived values
 *   - dispatch: Raw dispatch function
 *   - ActionTypes: Action type constants
 *
 * @throws {Error} If used outside of ReaderProvider
 *
 * @example
 * ```jsx
 * function VerseDisplay() {
 *   const { state, actions, settings } = useReader();
 *
 *   return (
 *     <div onClick={() => actions.setAyah(state.currentAyah + 1)}>
 *       Surah {state.currentSurah?.id}, Ayah {state.currentAyah}
 *       <span>Font: {settings.fontSize}</span>
 *     </div>
 *   );
 * }
 * ```
 */
export function useReader() {
  const context = useContext(ReaderContext);

  if (!context) {
    throw new Error(
      'useReader must be used within a ReaderProvider. ' +
      'Wrap your component tree with <ReaderProvider>.'
    );
  }

  return context;
}

/**
 * Hook for just the reader state (no actions/settings)
 * Useful for components that only need to read state
 *
 * @returns {Object} Current reader state
 *
 * @example
 * ```jsx
 * function PlayButton() {
 *   const { isPlaying } = useReaderState();
 *   return <Icon name={isPlaying ? 'pause' : 'play'} />;
 * }
 * ```
 */
export function useReaderState() {
  const { state } = useReader();
  return state;
}

/**
 * Hook for just the reader actions (no state)
 * Useful for components that only dispatch actions
 *
 * @returns {Object} Memoized action creators
 *
 * @example
 * ```jsx
 * function PlayToggle() {
 *   const actions = useReaderActions();
 *   return <button onClick={() => actions.togglePlayback()}>Toggle</button>;
 * }
 * ```
 */
export function useReaderActions() {
  const { actions } = useReader();
  return actions;
}

/**
 * Hook for just the reader settings
 * Useful for settings components
 *
 * @returns {Object} Settings with getters and setters
 *
 * @example
 * ```jsx
 * function FontSizeSelector() {
 *   const { fontSize, setFontSize } = useReaderSettings();
 *   return <select value={fontSize} onChange={e => setFontSize(e.target.value)} />;
 * }
 * ```
 */
export function useReaderSettings() {
  const { settings } = useReader();
  return settings;
}

/**
 * Hook for panel management
 * Provides panel-specific state and actions
 *
 * @returns {Object} Panel state and actions
 *
 * @example
 * ```jsx
 * function TafseerButton() {
 *   const { activePanel, openPanel, closePanel, isOpen } = useReaderPanel();
 *   const isTafseerOpen = isOpen('tafseer');
 *
 *   return (
 *     <button onClick={() => isTafseerOpen ? closePanel() : openPanel('tafseer')}>
 *       Tafseer
 *     </button>
 *   );
 * }
 * ```
 */
export function useReaderPanel() {
  const { state, actions } = useReader();

  return useMemo(
    () => ({
      activePanel: state.activePanel,
      openPanel: actions.openPanel,
      closePanel: actions.closePanel,
      togglePanel: actions.togglePanel,
      /**
       * Check if a specific panel is open
       * @param {string} panel - Panel name
       * @returns {boolean}
       */
      isOpen: (panel) => state.activePanel === panel,
    }),
    [state.activePanel, actions.openPanel, actions.closePanel, actions.togglePanel]
  );
}

/**
 * Hook for playback control
 * Provides playback-specific state and actions
 *
 * @returns {Object} Playback state and actions
 *
 * @example
 * ```jsx
 * function AudioControls() {
 *   const { isPlaying, play, pause, audioLoading } = useReaderPlayback();
 *
 *   if (audioLoading) return <Spinner />;
 *   return (
 *     <button onClick={isPlaying ? pause : play}>
 *       {isPlaying ? 'Pause' : 'Play'}
 *     </button>
 *   );
 * }
 * ```
 */
export function useReaderPlayback() {
  const { state, actions } = useReader();

  return useMemo(
    () => ({
      isPlaying: state.isPlaying,
      audioSource: state.audioSource,
      audioLoading: state.audioLoading,
      audioError: state.audioError,
      audioMode: state.audioMode,
      combinedPhase: state.combinedPhase,
      play: actions.play,
      pause: actions.pause,
      togglePlayback: actions.togglePlayback,
      setAudioSource: actions.setAudioSource,
      setAudioLoading: actions.setAudioLoading,
      setAudioError: actions.setAudioError,
      setAudioMode: actions.setAudioMode,
      resetPlayback: actions.resetPlayback,
    }),
    [
      state.isPlaying,
      state.audioSource,
      state.audioLoading,
      state.audioError,
      state.audioMode,
      state.combinedPhase,
      actions.play,
      actions.pause,
      actions.togglePlayback,
      actions.setAudioSource,
      actions.setAudioLoading,
      actions.setAudioError,
      actions.setAudioMode,
      actions.resetPlayback,
    ]
  );
}

/**
 * Hook for selection management
 * Provides selection-specific state and actions
 *
 * @returns {Object} Selection state and actions
 *
 * @example
 * ```jsx
 * function VerseItem({ verseNum }) {
 *   const { isSelected, toggleSelection } = useReaderSelection();
 *
 *   return (
 *     <div
 *       className={isSelected(verseNum) ? 'selected' : ''}
 *       onClick={() => toggleSelection(verseNum)}
 *     >
 *       Verse {verseNum}
 *     </div>
 *   );
 * }
 * ```
 */
export function useReaderSelection() {
  const { state, actions } = useReader();

  return useMemo(
    () => ({
      selectedAyah: state.selectedAyah,
      selectedVerses: state.selectedVerses,
      selectionMode: state.selectionMode,
      selectionCount: state.selectedVerses.length,
      selectAyah: actions.selectAyah,
      setSelectedVerses: actions.setSelectedVerses,
      toggleSelection: actions.toggleVerseSelection,
      clearSelection: actions.clearSelection,
      /**
       * Check if a verse is selected
       * @param {number} verse - Verse number
       * @returns {boolean}
       */
      isSelected: (verse) => state.selectedVerses.includes(verse),
    }),
    [
      state.selectedAyah,
      state.selectedVerses,
      state.selectionMode,
      actions.selectAyah,
      actions.setSelectedVerses,
      actions.toggleVerseSelection,
      actions.clearSelection,
    ]
  );
}

// ============================================================================
// EXPORTS
// ============================================================================

// Export context for testing or direct access
export { ReaderContext, ActionTypes };

// Export default for convenience
export default ReaderContext;
