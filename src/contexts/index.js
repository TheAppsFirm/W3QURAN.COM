/**
 * Contexts Index
 * Central export for all React contexts
 *
 * This file consolidates all context exports to provide a single import point.
 * Previously contexts were split between /context/ and /contexts/ directories.
 * Now all contexts live in /contexts/ for consistency.
 */

// Auth Context - User authentication and subscription management
export {
  AuthProvider,
  useAuth,
  default as AuthContext,
} from './AuthContext';

// Reader Context - Centralized reader state management
export {
  ReaderProvider,
  ReaderContext,
  useReader,
  useReaderState,
  useReaderActions,
  useReaderSettings,
  useReaderPanel,
  useReaderPlayback,
  useReaderSelection,
  PANELS,
  AUDIO_MODES,
  ActionTypes as ReaderActionTypes,
} from './ReaderContext';

// Theme Context - Dynamic theme and layout management
export {
  ThemeProvider,
  useTheme,
  LAYOUT_STYLES,
  default as ThemeContext,
} from './ThemeContext';

// App Context - Global app state (views, filters, zoom, bookmarks)
export {
  AppProvider,
  useApp,
  useNavigation,
  useTheme as useAppTheme, // Renamed to avoid conflict with ThemeContext's useTheme
  useFilters,
  useBookmarks,
  VIEWS,
  ACTIONS as AppActions,
  default as AppContext,
} from './AppContext';

// Gamification Context - XP, levels, achievements, streaks, notifications
export {
  GamificationProvider,
  useGamification,
} from './GamificationContext';

// Locale Context - Internationalization (i18n)
export {
  LocaleProvider,
  useLocale,
  useTranslation,
  default as LocaleContext,
} from './LocaleContext';
