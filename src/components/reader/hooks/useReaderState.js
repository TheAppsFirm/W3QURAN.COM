/**
 * useReaderState Hook
 *
 * Consolidates reader state management using useReducer
 * to replace the 74+ useState calls in BubbleReaderOverlay
 *
 * Benefits:
 * - Single source of truth for reader state
 * - Predictable state updates via actions
 * - Easier debugging and testing
 * - Reduced re-renders
 */

import { useReducer, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../../../hooks';
import { DEFAULT_READER_SETTINGS } from '../constants';

// Action types
const ACTIONS = {
  // Playback
  SET_PLAYING: 'SET_PLAYING',
  SET_CURRENT_AYAH: 'SET_CURRENT_AYAH',
  SET_AUDIO_LOADING: 'SET_AUDIO_LOADING',
  SET_AUDIO_ERROR: 'SET_AUDIO_ERROR',
  SET_AUDIO_MODE: 'SET_AUDIO_MODE',

  // Panels
  SET_ACTIVE_PANEL: 'SET_ACTIVE_PANEL',
  CLOSE_PANEL: 'CLOSE_PANEL',

  // Features
  TOGGLE_FEATURE: 'TOGGLE_FEATURE',

  // Selection
  SELECT_AYAH: 'SELECT_AYAH',
  SELECT_MULTIPLE: 'SELECT_MULTIPLE',
  CLEAR_SELECTION: 'CLEAR_SELECTION',

  // Memorization
  SET_HIDE_LEVEL: 'SET_HIDE_LEVEL',

  // Loading
  SET_VERSES_LOADING: 'SET_VERSES_LOADING',
  SET_VISIBLE_VERSES: 'SET_VISIBLE_VERSES',
  LOAD_MORE_VERSES: 'LOAD_MORE_VERSES',

  // Word-by-word
  SET_ACTIVE_WORD: 'SET_ACTIVE_WORD',
  CLEAR_ACTIVE_WORD: 'CLEAR_ACTIVE_WORD',

  // Reset
  RESET_STATE: 'RESET_STATE',
};

// Initial state
const createInitialState = () => ({
  // Playback state
  isPlaying: false,
  currentAyah: 1,
  audioLoading: false,
  audioError: null,
  audioMode: 'arabic', // 'arabic' | 'translation' | 'combined'
  combinedPhase: 'arabic',

  // Panel visibility
  activePanel: null, // 'tafseer' | 'videos' | 'memorize' | 'bookmark' | 'share' | null
  leftFeature: null,

  // Feature toggles
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
  selectedAyah: 1,
  selectedVerses: [],
  selectionMode: false,

  // Memorization
  hideLevel: 0, // 0 = no hiding, 1-4 = progressive hiding

  // Loading state
  versesLoading: false,
  visibleVerseCount: 50,

  // Word-by-word state
  activeWordIndex: null,
  activeWordAyah: null,
});

// Reducer function
function readerReducer(state, action) {
  switch (action.type) {
    // Playback
    case ACTIONS.SET_PLAYING:
      return { ...state, isPlaying: action.payload };

    case ACTIONS.SET_CURRENT_AYAH:
      return { ...state, currentAyah: action.payload };

    case ACTIONS.SET_AUDIO_LOADING:
      return { ...state, audioLoading: action.payload };

    case ACTIONS.SET_AUDIO_ERROR:
      return { ...state, audioError: action.payload };

    case ACTIONS.SET_AUDIO_MODE:
      return { ...state, audioMode: action.payload };

    // Panels
    case ACTIONS.SET_ACTIVE_PANEL:
      return { ...state, activePanel: action.payload };

    case ACTIONS.CLOSE_PANEL:
      return { ...state, activePanel: null };

    // Features
    case ACTIONS.TOGGLE_FEATURE:
      return {
        ...state,
        features: {
          ...state.features,
          [action.payload]: !state.features[action.payload],
        },
      };

    // Selection
    case ACTIONS.SELECT_AYAH:
      return { ...state, selectedAyah: action.payload };

    case ACTIONS.SELECT_MULTIPLE:
      return {
        ...state,
        selectedVerses: action.payload,
        selectionMode: action.payload.length > 0,
      };

    case ACTIONS.CLEAR_SELECTION:
      return { ...state, selectedVerses: [], selectionMode: false };

    // Memorization
    case ACTIONS.SET_HIDE_LEVEL:
      return { ...state, hideLevel: action.payload };

    // Loading
    case ACTIONS.SET_VERSES_LOADING:
      return { ...state, versesLoading: action.payload };

    case ACTIONS.SET_VISIBLE_VERSES:
      return { ...state, visibleVerseCount: action.payload };

    case ACTIONS.LOAD_MORE_VERSES:
      return {
        ...state,
        visibleVerseCount: state.visibleVerseCount + action.payload,
      };

    // Word-by-word
    case ACTIONS.SET_ACTIVE_WORD:
      return {
        ...state,
        activeWordIndex: action.payload.index,
        activeWordAyah: action.payload.ayah,
      };

    case ACTIONS.CLEAR_ACTIVE_WORD:
      return { ...state, activeWordIndex: null, activeWordAyah: null };

    // Reset
    case ACTIONS.RESET_STATE:
      return createInitialState();

    default:
      return state;
  }
}

/**
 * useReaderState Hook
 *
 * @returns {Object} Reader state and actions
 */
export function useReaderState() {
  const [state, dispatch] = useReducer(readerReducer, null, createInitialState);

  // Persisted settings (separate from transient state)
  const [fontSize, setFontSize] = useLocalStorage(
    'reader_fontsize',
    DEFAULT_READER_SETTINGS.fontSize
  );
  const [reciter, setReciter] = useLocalStorage(
    'reader_reciter',
    DEFAULT_READER_SETTINGS.reciter
  );
  const [translation, setTranslation] = useLocalStorage(
    'reader_translation',
    DEFAULT_READER_SETTINGS.translation
  );
  const [showTranslation, setShowTranslation] = useLocalStorage(
    'reader_show_translation',
    DEFAULT_READER_SETTINGS.showTranslation
  );
  const [tajweedMode, setTajweedMode] = useLocalStorage(
    'reader_tajweed',
    DEFAULT_READER_SETTINGS.tajweedMode
  );
  const [wordByWordMode, setWordByWordMode] = useLocalStorage(
    'reader_wbw',
    DEFAULT_READER_SETTINGS.wordByWordMode
  );
  const [repeatMode, setRepeatMode] = useLocalStorage(
    'reader_repeat',
    DEFAULT_READER_SETTINGS.repeatMode
  );
  const [autoScroll, setAutoScroll] = useLocalStorage(
    'reader_autoscroll',
    DEFAULT_READER_SETTINGS.autoScroll
  );

  // Memoized actions
  const actions = useMemo(
    () => ({
      // Playback
      setPlaying: (isPlaying) =>
        dispatch({ type: ACTIONS.SET_PLAYING, payload: isPlaying }),
      setCurrentAyah: (ayah) =>
        dispatch({ type: ACTIONS.SET_CURRENT_AYAH, payload: ayah }),
      setAudioLoading: (loading) =>
        dispatch({ type: ACTIONS.SET_AUDIO_LOADING, payload: loading }),
      setAudioError: (error) =>
        dispatch({ type: ACTIONS.SET_AUDIO_ERROR, payload: error }),
      setAudioMode: (mode) =>
        dispatch({ type: ACTIONS.SET_AUDIO_MODE, payload: mode }),

      // Panels
      openPanel: (panel) =>
        dispatch({ type: ACTIONS.SET_ACTIVE_PANEL, payload: panel }),
      closePanel: () => dispatch({ type: ACTIONS.CLOSE_PANEL }),

      // Features
      toggleFeature: (feature) =>
        dispatch({ type: ACTIONS.TOGGLE_FEATURE, payload: feature }),

      // Selection
      selectAyah: (ayah) =>
        dispatch({ type: ACTIONS.SELECT_AYAH, payload: ayah }),
      selectMultiple: (verses) =>
        dispatch({ type: ACTIONS.SELECT_MULTIPLE, payload: verses }),
      clearSelection: () => dispatch({ type: ACTIONS.CLEAR_SELECTION }),

      // Memorization
      setHideLevel: (level) =>
        dispatch({ type: ACTIONS.SET_HIDE_LEVEL, payload: level }),

      // Loading
      setVersesLoading: (loading) =>
        dispatch({ type: ACTIONS.SET_VERSES_LOADING, payload: loading }),
      setVisibleVerses: (count) =>
        dispatch({ type: ACTIONS.SET_VISIBLE_VERSES, payload: count }),
      loadMoreVerses: (count) =>
        dispatch({ type: ACTIONS.LOAD_MORE_VERSES, payload: count }),

      // Word-by-word
      setActiveWord: (index, ayah) =>
        dispatch({
          type: ACTIONS.SET_ACTIVE_WORD,
          payload: { index, ayah },
        }),
      clearActiveWord: () => dispatch({ type: ACTIONS.CLEAR_ACTIVE_WORD }),

      // Reset
      resetState: () => dispatch({ type: ACTIONS.RESET_STATE }),
    }),
    []
  );

  // Settings object
  const settings = useMemo(
    () => ({
      fontSize,
      setFontSize,
      reciter,
      setReciter,
      translation,
      setTranslation,
      showTranslation,
      setShowTranslation,
      tajweedMode,
      setTajweedMode,
      wordByWordMode,
      setWordByWordMode,
      repeatMode,
      setRepeatMode,
      autoScroll,
      setAutoScroll,
    }),
    [
      fontSize,
      setFontSize,
      reciter,
      setReciter,
      translation,
      setTranslation,
      showTranslation,
      setShowTranslation,
      tajweedMode,
      setTajweedMode,
      wordByWordMode,
      setWordByWordMode,
      repeatMode,
      setRepeatMode,
      autoScroll,
      setAutoScroll,
    ]
  );

  return {
    state,
    actions,
    settings,
  };
}

export { ACTIONS };
export default useReaderState;
