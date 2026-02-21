/**
 * Main App Component
 *
 * Follows SOLID Principles:
 * - Single Responsibility: Orchestrates the app flow
 * - Open/Closed: Easy to add new views without modification
 * - Liskov Substitution: Views can be swapped
 * - Interface Segregation: Uses specific hooks for specific features
 * - Dependency Inversion: Depends on abstractions (context, hooks)
 */

import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback, useRef } from 'react';
// Core components (needed immediately for first paint + reading)
import { ErrorBoundary, LoadingSpinner, BubbleModal, BubbleReaderOverlay } from './components/common';
import { Header, FloatingMenu, StatsBar } from './components/layout';
import { SurahBubble, LayoutSelector, ClockLayout, GridLayout, JuzzGroupLayout, AlphabetLayout, RevelationLayout, BookLayout, ListLayout, CompactLayout, HoneycombLayout, WaveLayout, LengthLayout, KidsLayout, ArtLayout } from './components/bubbles';
import { SURAHS, MAX_AYAHS } from './data';
import { useLocalStorage, isMobileDevice, BREAKPOINTS } from './hooks';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Auto-reload on stale chunk errors (happens after new deploys when cached index.js references old chunk hashes)
const lazyWithRetry = (importFn) => lazy(() =>
  importFn().catch(() => {
    const hasReloaded = sessionStorage.getItem('chunk_reload');
    if (!hasReloaded) {
      sessionStorage.setItem('chunk_reload', '1');
      window.location.reload();
    }
    return importFn();
  })
);

// Clear reload flag on successful page load
if (sessionStorage.getItem('chunk_reload')) sessionStorage.removeItem('chunk_reload');

// Lazy-loaded views (only loaded when user navigates to them)
const SettingsView = lazyWithRetry(() => import('./components/views/SettingsView'));
const AdminDashboard = lazyWithRetry(() => import('./components/views/AdminDashboard'));
const NamesOfAllahView = lazyWithRetry(() => import('./components/views/NamesOfAllahView'));
const QuizView = lazyWithRetry(() => import('./components/views/QuizView'));
const DailyVerseView = lazyWithRetry(() => import('./components/views/DailyVerseView'));
const StatisticsView = lazyWithRetry(() => import('./components/views/StatisticsView'));
const ListenView = lazyWithRetry(() => import('./components/views/ListenView'));
const DonateView = lazyWithRetry(() => import('./components/views/DonateView'));
const PrayerTimesView = lazyWithRetry(() => import('./components/views/PrayerTimesView'));
const PrivacyPolicyView = lazyWithRetry(() => import('./components/views/PrivacyPolicyView'));
const TermsOfServiceView = lazyWithRetry(() => import('./components/views/TermsOfServiceView'));

// Lazy-loaded modal features (only loaded when user opens them)
const ProgressDashboard = lazyWithRetry(() => import('./components/common/ProgressDashboard'));
const OfflineManager = lazyWithRetry(() => import('./components/common/OfflineManager'));
const HifzMode = lazyWithRetry(() => import('./components/common/HifzMode'));
const SearchPanel = lazyWithRetry(() => import('./components/common/SearchPanel'));
const DonateModal = lazyWithRetry(() => import('./components/common/DonateModal'));
const WordSearchMap = lazyWithRetry(() => import('./components/common/WordSearchMap'));
const EmotionalTracker = lazyWithRetry(() => import('./components/common/EmotionalTracker'));
const ScholarVideoSync = lazyWithRetry(() => import('./components/common/ScholarVideoSync'));
const PropheticMap = lazyWithRetry(() => import('./components/common/PropheticMap'));
const QuranCompanionAI = lazyWithRetry(() => import('./components/common/QuranCompanionAI'));
const GlobalUmmahPulse = lazyWithRetry(() => import('./components/common/GlobalUmmahPulse'));
const VerseWeatherSync = lazyWithRetry(() => import('./components/common/VerseWeatherSync'));
const SoundHealingRoom = lazyWithRetry(() => import('./components/common/SoundHealingRoom'));
const QuranicBabyNames = lazyWithRetry(() => import('./components/common/QuranicBabyNames'));
const TalkToQuran = lazyWithRetry(() => import('./components/common/TalkToQuran'));
const KidsMode = lazyWithRetry(() => import('./components/kids/KidsMode'));
const AnalyticsPanel = lazyWithRetry(() => import('./components/widgets/AnalyticsPanel'));

// All animation keyframes and utility CSS classes moved to index.css for better caching
// Fonts: Amiri + Scheherazade loaded in index.html; Noto Nastaliq Urdu loaded on demand below

// Ambient Floating Particles Component — deferred to avoid blocking initial render
const AmbientParticlesInner = ({ darkMode }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const orbCount = isMobile ? 3 : 6;
  const sparkleCount = isMobile ? 8 : 20;
  const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#06b6d4', '#10b981'];
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ contain: 'layout style paint' }}>
      {[...Array(orbCount)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
            background: `radial-gradient(circle, ${colors[i]}${darkMode ? '30' : '20'} 0%, transparent 70%)`,
            animation: `floatOrb ${15 + i * 3}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
      {[...Array(sparkleCount)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            width: 4 + (i % 4),
            height: 4 + (i % 4),
            left: `${(i * 5.3) % 100}%`,
            top: `${(i * 7.1) % 100}%`,
            background: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(139,92,246,0.5)',
            boxShadow: darkMode
              ? '0 0 10px rgba(255,255,255,0.5)'
              : '0 0 10px rgba(139,92,246,0.4)',
            animation: `sparkle ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

const AmbientParticles = ({ darkMode }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  return show ? <AmbientParticlesInner darkMode={darkMode} /> : null;
};

/**
 * URL Route mapping
 */
const ROUTE_CONFIG = {
  // Main views
  '/': { view: 'surahs' },
  '/kids': { view: 'kids' },
  '/listen': { view: 'listen' },
  '/donate': { view: 'donate' },
  '/settings': { view: 'settings' },
  '/names-of-allah': { view: 'names' },
  '/quiz': { view: 'quiz' },
  '/prayer-times': { view: 'prayer' },
  '/statistics': { view: 'stats' },
  '/daily-verse': { view: 'daily' },
  '/privacy': { view: 'privacy' },
  '/terms': { view: 'terms' },
  // Admin routes with tabs
  '/admin': { view: 'admin', tab: 'overview' },
  '/admin/overview': { view: 'admin', tab: 'overview' },
  '/admin/analytics': { view: 'admin', tab: 'analytics' },
  '/admin/users': { view: 'admin', tab: 'users' },
  '/admin/logs': { view: 'admin', tab: 'logs' },
  '/admin/transactions': { view: 'admin', tab: 'transactions' },
  '/admin/settings': { view: 'admin', tab: 'settings' },
  // Modals/Features
  '/search': { modal: 'search' },
  '/progress': { modal: 'progress' },
  '/offline': { modal: 'offline' },
  '/memorize': { modal: 'hifz' },
  '/mind-map': { modal: 'mindMap' },
  '/mood': { modal: 'mood' },
  '/video-sync': { modal: 'videoSync' },
  '/prophetic-map': { modal: 'propheticMap' },
  '/ai-guide': { modal: 'companionAI' },
  '/ummah-pulse': { modal: 'globalPulse' },
  '/weather-verse': { modal: 'weatherSync' },
  '/sound-healing': { modal: 'soundHealing' },
  '/baby-names': { modal: 'babyNames' },
};

// Reverse mapping for state to URL
const VIEW_TO_ROUTE = {
  surahs: '/',
  kids: '/kids',
  listen: '/listen',
  donate: '/donate',
  settings: '/settings',
  admin: '/admin',
  names: '/names-of-allah',
  quiz: '/quiz',
  prayer: '/prayer-times',
  stats: '/statistics',
  daily: '/daily-verse',
  privacy: '/privacy',
  terms: '/terms',
};

const MODAL_TO_ROUTE = {
  search: '/search',
  progress: '/progress',
  offline: '/offline',
  hifz: '/memorize',
  mindMap: '/mind-map',
  mood: '/mood',
  videoSync: '/video-sync',
  propheticMap: '/prophetic-map',
  companionAI: '/ai-guide',
  globalPulse: '/ummah-pulse',
  weatherSync: '/weather-verse',
  soundHealing: '/sound-healing',
  babyNames: '/baby-names',
};

/**
 * Main App Component
 */
function QuranBubbleApp() {
  // Auth state
  const { isAuthenticated } = useAuth();

  // State management using custom hooks for persistence
  const [view, setView] = useState('surahs');
  const [level, setLevel] = useLocalStorage('level', 'starter');
  const [points, setPoints] = useLocalStorage('points', 170);
  const [streak, setStreak] = useLocalStorage('streak', 3);
  const [badges] = useLocalStorage('badges', 2);
  const [selected, setSelected] = useState(null);
  const [clickPosition, setClickPosition] = useState(null);
  const [filters, setFilters] = useState({
    type: null,
    ayahRange: null,
    chronOrder: null,
    topic: null,
    search: '',
  });
  const [zoom, setZoom] = useLocalStorage('zoom', 1);
  const [contentZoom, setContentZoom] = useLocalStorage('contentZoom', 1);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', {});
  const [readingProgress, setReadingProgress] = useLocalStorage('readingProgress', {});
  const [overlayReaderSurah, setOverlayReaderSurah] = useState(null);
  const [initialVerse, setInitialVerse] = useState(1); // For navigating to specific verse
  const [initialPanel, setInitialPanel] = useState(null); // For opening specific panel (tafseer, etc.)
  // Grid layout is the default for all devices (cleanest, most stable UI)
  // User's saved preference takes priority (handled by useLocalStorage)
  const getDefaultLayout = () => {
    // Check if user already has a saved preference
    const stored = localStorage.getItem('surahLayout');
    if (stored) {
      try { return JSON.parse(stored); } catch { return stored; }
    }
    // Default: grid for all devices (bubble layouts have UI issues on mobile)
    return 'grid';
  };
  const [surahLayout, setSurahLayout] = useLocalStorage('surahLayout', getDefaultLayout());
  const [showProgressDashboard, setShowProgressDashboard] = useState(false);
  const [showOfflineManager, setShowOfflineManager] = useState(false);
  const [showHifzMode, setShowHifzMode] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showMindMap, setShowMindMap] = useState(false);
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [showVideoSync, setShowVideoSync] = useState(false);
  const [showPropheticMap, setShowPropheticMap] = useState(false);
  const [showCompanionAI, setShowCompanionAI] = useState(false);
  const [showGlobalPulse, setShowGlobalPulse] = useState(false);
  const [showWeatherSync, setShowWeatherSync] = useState(false);
  const [showSoundHealing, setShowSoundHealing] = useState(false);
  const [showBabyNames, setShowBabyNames] = useState(false);
  const [showTalkToQuran, setShowTalkToQuran] = useState(false);
  const [showKidsMode, setShowKidsMode] = useState(false);
  const [adminTab, setAdminTab] = useState('overview');

  // Track if we're handling a popstate event (browser back/forward)
  const isPopstateRef = useRef(false);

  // Helper to update URL without triggering navigation
  const updateURL = useCallback((path, replace = false) => {
    if (isPopstateRef.current) return; // Don't update URL during popstate handling
    if (window.location.pathname !== path) {
      if (replace) {
        window.history.replaceState({ path }, '', path);
      } else {
        window.history.pushState({ path }, '', path);
      }
    }
  }, []);

  // Close all modals helper
  const closeAllModals = useCallback(() => {
    setShowSearchPanel(false);
    setShowProgressDashboard(false);
    setShowOfflineManager(false);
    setShowHifzMode(false);
    setShowDonateModal(false);
    setShowMindMap(false);
    setShowMoodTracker(false);
    setShowVideoSync(false);
    setShowPropheticMap(false);
    setShowCompanionAI(false);
    setShowGlobalPulse(false);
    setShowWeatherSync(false);
    setShowSoundHealing(false);
    setShowBabyNames(false);
    setOverlayReaderSurah(null);
    setInitialVerse(1);
    setInitialPanel(null);
  }, []);

  // Check for pending upgrade after login
  useEffect(() => {
    if (isAuthenticated) {
      const pendingUpgrade = localStorage.getItem('pendingUpgrade');
      if (pendingUpgrade === 'true') {
        localStorage.removeItem('pendingUpgrade');
        setView('settings');
      }
    }
  }, [isAuthenticated]);

  // Auto-open Kids Mode when returning from payment
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isPaymentReturn = params.get('payment_success') === '1' || params.get('payment_canceled') === '1';
    const paymentPending = localStorage.getItem('kids_payment_pending');

    // Open Kids Mode if returning from payment flow
    if (isPaymentReturn || paymentPending === 'true') {
      setShowKidsMode(true);
    }
  }, []);

  // Parse URL and set initial state
  useEffect(() => {
    const parseURL = () => {
      const path = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      const panel = searchParams.get('panel'); // e.g., tafseer, settings

      // Check for surah route: /surah/:id or /surah/:id/:ayah
      const surahMatch = path.match(/^\/surah\/(\d+)(?:\/(\d+))?$/);
      if (surahMatch) {
        const surahId = parseInt(surahMatch[1], 10);
        const ayahNum = surahMatch[2] ? parseInt(surahMatch[2], 10) : 1;
        const surah = SURAHS.find(s => s.id === surahId);
        if (surah) {
          setOverlayReaderSurah(surah);
          setInitialVerse(ayahNum);
          setInitialPanel(panel); // Pass panel to reader
          setView('surahs');
          return;
        }
      }

      // Check route config
      const config = ROUTE_CONFIG[path];
      if (config) {
        if (config.view) {
          setView(config.view);
          // Handle admin tab from route
          if (config.tab) {
            setAdminTab(config.tab);
          }
        } else if (config.modal) {
          setView('surahs'); // Modals open over surahs view
          switch (config.modal) {
            case 'search': setShowSearchPanel(true); break;
            case 'progress': setShowProgressDashboard(true); break;
            case 'offline': setShowOfflineManager(true); break;
            case 'hifz': setShowHifzMode(true); break;
            case 'mindMap': setShowMindMap(true); break;
            case 'mood': setShowMoodTracker(true); break;
            case 'videoSync': setShowVideoSync(true); break;
            case 'propheticMap': setShowPropheticMap(true); break;
            case 'companionAI': setShowCompanionAI(true); break;
            case 'globalPulse': setShowGlobalPulse(true); break;
            case 'weatherSync': setShowWeatherSync(true); break;
            case 'soundHealing': setShowSoundHealing(true); break;
            case 'babyNames': setShowBabyNames(true); break;
          }
        }
      } else {
        // Default to home
        setView('surahs');
      }
    };

    parseURL();

    // Handle browser back/forward
    const handlePopstate = () => {
      isPopstateRef.current = true;
      closeAllModals();
      parseURL();
      // Reset flag after a short delay
      setTimeout(() => {
        isPopstateRef.current = false;
      }, 100);
    };

    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, [closeAllModals]);

  // Update URL when view changes
  useEffect(() => {
    const route = VIEW_TO_ROUTE[view];
    if (route && !overlayReaderSurah) {
      updateURL(route);
    }
  }, [view, overlayReaderSurah, updateURL]);

  // Update URL when surah reader opens
  useEffect(() => {
    if (overlayReaderSurah) {
      const path = initialVerse > 1
        ? `/surah/${overlayReaderSurah.id}/${initialVerse}`
        : `/surah/${overlayReaderSurah.id}`;
      updateURL(path);
    }
  }, [overlayReaderSurah, initialVerse, updateURL]);

  // Update URL when modals open
  useEffect(() => {
    if (showSearchPanel) updateURL(MODAL_TO_ROUTE.search);
  }, [showSearchPanel, updateURL]);

  useEffect(() => {
    if (showProgressDashboard) updateURL(MODAL_TO_ROUTE.progress);
  }, [showProgressDashboard, updateURL]);

  useEffect(() => {
    if (showOfflineManager) updateURL(MODAL_TO_ROUTE.offline);
  }, [showOfflineManager, updateURL]);

  useEffect(() => {
    if (showHifzMode) updateURL(MODAL_TO_ROUTE.hifz);
  }, [showHifzMode, updateURL]);

  useEffect(() => {
    if (showMindMap) updateURL(MODAL_TO_ROUTE.mindMap);
  }, [showMindMap, updateURL]);

  useEffect(() => {
    if (showMoodTracker) updateURL(MODAL_TO_ROUTE.mood);
  }, [showMoodTracker, updateURL]);

  useEffect(() => {
    if (showVideoSync) updateURL(MODAL_TO_ROUTE.videoSync);
  }, [showVideoSync, updateURL]);

  useEffect(() => {
    if (showPropheticMap) updateURL(MODAL_TO_ROUTE.propheticMap);
  }, [showPropheticMap, updateURL]);

  useEffect(() => {
    if (showCompanionAI) updateURL(MODAL_TO_ROUTE.companionAI);
  }, [showCompanionAI, updateURL]);

  useEffect(() => {
    if (showGlobalPulse) updateURL(MODAL_TO_ROUTE.globalPulse);
  }, [showGlobalPulse, updateURL]);

  useEffect(() => {
    if (showWeatherSync) updateURL(MODAL_TO_ROUTE.weatherSync);
  }, [showWeatherSync, updateURL]);

  useEffect(() => {
    if (showSoundHealing) updateURL(MODAL_TO_ROUTE.soundHealing);
  }, [showSoundHealing, updateURL]);

  useEffect(() => {
    if (showBabyNames) updateURL(MODAL_TO_ROUTE.babyNames);
  }, [showBabyNames, updateURL]);

  // Update page title based on current state
  useEffect(() => {
    let title = 'w3Quran - The Holy Quran';

    if (overlayReaderSurah) {
      title = `${overlayReaderSurah.name} (${overlayReaderSurah.arabic}) - w3Quran`;
    } else if (showSearchPanel) {
      title = 'Search - w3Quran';
    } else if (showProgressDashboard) {
      title = 'Progress - w3Quran';
    } else if (showHifzMode) {
      title = 'Memorization (Hifz) - w3Quran';
    } else if (showMindMap) {
      title = 'Word Search Map - w3Quran';
    } else if (showMoodTracker) {
      title = 'Mood Tracker - w3Quran';
    } else if (showVideoSync) {
      title = 'Scholar Videos - w3Quran';
    } else if (showPropheticMap) {
      title = 'Prophetic World Map - w3Quran';
    } else if (showCompanionAI) {
      title = 'AI Companion - w3Quran';
    } else if (showGlobalPulse) {
      title = 'Global Ummah Pulse - w3Quran';
    } else if (showWeatherSync) {
      title = 'Weather Verses - w3Quran';
    } else if (showSoundHealing) {
      title = 'Sound Healing - w3Quran';
    } else if (showBabyNames) {
      title = 'Quranic Baby Names - w3Quran';
    } else {
      switch (view) {
        case 'listen': title = 'Listen - w3Quran'; break;
        case 'donate': title = 'Donate - w3Quran'; break;
        case 'settings': title = 'Settings - w3Quran'; break;
        case 'names': title = '99 Names of Allah - w3Quran'; break;
        case 'quiz': title = 'Quiz - w3Quran'; break;
        case 'prayer': title = 'Prayer Times - w3Quran'; break;
        case 'stats': title = 'Statistics - w3Quran'; break;
        case 'daily': title = 'Daily Verse - w3Quran'; break;
        case 'privacy': title = 'Privacy Policy - w3Quran'; break;
        case 'terms': title = 'Terms of Service - w3Quran'; break;
        default: title = 'w3Quran - The Holy Quran';
      }
    }

    document.title = title;
  }, [
    view, overlayReaderSurah, showSearchPanel, showProgressDashboard,
    showHifzMode, showMindMap, showMoodTracker, showVideoSync,
    showPropheticMap, showCompanionAI, showGlobalPulse, showWeatherSync,
    showSoundHealing, showBabyNames
  ]);

  // Navigate back helper - closes modals and navigates to previous route
  const navigateBack = useCallback(() => {
    const anyModalOpen = showSearchPanel || showProgressDashboard || showOfflineManager ||
      showHifzMode || showMindMap || showMoodTracker || showVideoSync ||
      showPropheticMap || showCompanionAI || showGlobalPulse || showWeatherSync ||
      showSoundHealing || showBabyNames || overlayReaderSurah;

    if (anyModalOpen) {
      closeAllModals();
      updateURL('/');
    }
  }, [
    showSearchPanel, showProgressDashboard, showOfflineManager, showHifzMode,
    showMindMap, showMoodTracker, showVideoSync, showPropheticMap, showCompanionAI,
    showGlobalPulse, showWeatherSync, showSoundHealing, showBabyNames, overlayReaderSurah,
    closeAllModals, updateURL
  ]);

  // Modal close handlers that also update URL
  const handleCloseSearch = useCallback(() => {
    setShowSearchPanel(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseProgress = useCallback(() => {
    setShowProgressDashboard(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseOffline = useCallback(() => {
    setShowOfflineManager(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseHifz = useCallback(() => {
    setShowHifzMode(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseMindMap = useCallback(() => {
    setShowMindMap(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseMood = useCallback(() => {
    setShowMoodTracker(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseVideoSync = useCallback(() => {
    setShowVideoSync(false);
    updateURL('/');
  }, [updateURL]);

  const handleClosePropheticMap = useCallback(() => {
    setShowPropheticMap(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseCompanionAI = useCallback(() => {
    setShowCompanionAI(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseGlobalPulse = useCallback(() => {
    setShowGlobalPulse(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseWeatherSync = useCallback(() => {
    setShowWeatherSync(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseSoundHealing = useCallback(() => {
    setShowSoundHealing(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseBabyNames = useCallback(() => {
    setShowBabyNames(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseDonate = useCallback(() => {
    setShowDonateModal(false);
  }, []);

  // Track visitor on page load and send heartbeat every 30 seconds
  useEffect(() => {
    let heartbeatInterval = null;
    let userLocation = { lat: null, lng: null };

    // Get user ID
    let userId = localStorage.getItem('w3quran_user_id');
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem('w3quran_user_id', userId);
    }

    // Try to get user's location
    const getLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
          },
          () => {
            // Use default if permission denied
            userLocation = { lat: null, lng: null };
          },
          { timeout: 5000, maximumAge: 300000 }
        );
      }
    };

    // Track initial visit
    const trackVisitor = async () => {
      // Skip API calls in development mode (API only exists in production)
      if (import.meta.env.DEV) return;

      try {
        await fetch('/api/ummah-pulse', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'visit',
            userId,
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'direct',
            lat: userLocation.lat,
            lng: userLocation.lng,
          }),
        });
      } catch (error) {
        // Silently fail
      }
    };

    // Send heartbeat to show real-time presence
    const sendHeartbeat = async () => {
      // Skip API calls in development mode (API only exists in production)
      if (import.meta.env.DEV) return;

      try {
        // Determine status from current path
        const path = window.location.pathname;
        let status = 'browsing';
        let surahId = null;

        const surahMatch = path.match(/^\/surah\/(\d+)/);
        if (surahMatch) {
          status = 'reading';
          surahId = parseInt(surahMatch[1], 10);
        }

        const response = await fetch('/api/ummah-pulse', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'heartbeat',
            userId,
            lat: userLocation.lat,
            lng: userLocation.lng,
            status,
            surahId,
            page: path || '/',
          }),
        });
        // Only parse JSON if response is valid JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          console.log('[Heartbeat]', status, result);
        }
      } catch (error) {
        // Silently fail - don't break the app
      }
    };

    // Initialize
    getLocation();
    setTimeout(() => {
      trackVisitor();
      sendHeartbeat();
    }, 1000); // Wait for location

    // Send heartbeat every 30 seconds
    heartbeatInterval = setInterval(sendHeartbeat, 30000);

    // Cleanup
    return () => {
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
    };
  }, []);

  // Memoized filtered surahs
  const filtered = useMemo(() => {
    let r = [...SURAHS];

    // Search filter
    if (filters.search) {
      const q = filters.search.toLowerCase();
      r = r.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.arabic.includes(q) ||
          s.meaning?.toLowerCase().includes(q)
      );
    }

    // Type filter (Makki/Madani)
    if (filters.type) r = r.filter((s) => s.type === filters.type);

    // Ayah range filter
    if (filters.ayahRange) {
      if (filters.ayahRange === '1-20') r = r.filter((s) => s.ayahs >= 1 && s.ayahs <= 20);
      if (filters.ayahRange === '21-50') r = r.filter((s) => s.ayahs >= 21 && s.ayahs <= 50);
      if (filters.ayahRange === '51-100') r = r.filter((s) => s.ayahs >= 51 && s.ayahs <= 100);
      if (filters.ayahRange === '100+') r = r.filter((s) => s.ayahs > 100);
    }

    // Topic filter
    if (filters.topic) {
      r = r.filter((s) => s.topics?.includes(filters.topic));
    }

    // Chronological order
    if (filters.chronOrder === 'Chronological') {
      r = r.sort((a, b) => a.chronOrder - b.chronOrder);
    } else if (filters.chronOrder === 'Reverse Chron') {
      r = r.sort((a, b) => b.chronOrder - a.chronOrder);
    }

    return r;
  }, [filters]);

  // Memoized callbacks to prevent child re-renders
  const handleSelectSurah = useCallback((surah, position) => {
    setSelected(surah);
    setClickPosition(position || null);
  }, []);

  const handleReadSurah = useCallback((surah) => {
    // Use overlay reader instead of full page navigation
    setOverlayReaderSurah(surah);
    setInitialVerse(1);
    setSelected(null);
    updateURL(`/surah/${surah.id}`);
    setPoints((p) => p + 10);
    // Update reading progress
    setReadingProgress((prev) => ({
      ...prev,
      [surah.id]: { lastRead: Date.now(), ayahsRead: (prev[surah.id]?.ayahsRead || 0) + 1 },
    }));
  }, [setPoints, setReadingProgress, updateURL]);

  // Handle closing the reader overlay
  const handleCloseOverlayReader = useCallback(() => {
    setOverlayReaderSurah(null);
    setInitialVerse(1);
    updateURL('/');
  }, [updateURL]);

  // Handle changing surah (from next/prev buttons in reader)
  const handleChangeSurah = useCallback((newSurah) => {
    setOverlayReaderSurah(newSurah);
    setInitialVerse(1);
    updateURL(`/surah/${newSurah.id}`);
    // Update reading progress
    setReadingProgress((prev) => ({
      ...prev,
      [newSurah.id]: { lastRead: Date.now(), ayahsRead: (prev[newSurah.id]?.ayahsRead || 0) + 1 },
    }));
  }, [setReadingProgress, updateURL]);

  const handleUpgrade = useCallback(() => setLevel('pro'), [setLevel]);

  const handleEarnPoints = useCallback((pts) => setPoints((p) => p + pts), [setPoints]);

  const clearFilters = useCallback(() => {
    setFilters({ type: null, ayahRange: null, chronOrder: null, topic: null, search: '' });
  }, []);

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden transition-colors duration-500 ${
        darkMode ? 'animated-bg-dark' : 'animated-bg'
      }`}
    >
      {/* Ambient floating particles */}
      <AmbientParticles darkMode={darkMode} />
      {/* Header - only on surahs view */}
      {view === 'surahs' && (
        <Header
          filters={filters}
          setFilters={setFilters}
          showAnalytics={showAnalytics}
          setShowAnalytics={setShowAnalytics}
          onSettingsClick={() => setView('settings')}
        />
      )}

      {/* Analytics Panel */}
      {view === 'surahs' && showAnalytics && (
        <Suspense fallback={null}>
          <AnalyticsPanel surahs={filtered} readingProgress={readingProgress} darkMode={darkMode} />
        </Suspense>
      )}

      {/* Stats Bar */}
      {view === 'surahs' && (
        <StatsBar
          level={level}
          points={points}
          streak={streak}
          badges={badges}
          onUpgrade={handleUpgrade}
          zoom={zoom}
          setZoom={setZoom}
          contentZoom={contentZoom}
          setContentZoom={setContentZoom}
          surahLayout={surahLayout}
          setSurahLayout={setSurahLayout}
          showControls={true}
          onDonate={() => setShowDonateModal(true)}
          onMood={() => setShowMoodTracker(true)}
          onMindMap={() => setShowMindMap(true)}
          onWorldMap={() => setShowPropheticMap(true)}
          onAIGuide={() => setShowCompanionAI(true)}
          onGlobalPulse={() => setShowGlobalPulse(true)}
          onWeatherSync={() => setShowWeatherSync(true)}
          onSoundHealing={() => setShowSoundHealing(true)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        {/* Surahs View */}
        {view === 'surahs' && (
          <>
            <div className="absolute inset-0 overflow-auto bubble-container pt-4 pr-10 sm:pr-12 pb-28 sm:pb-32">
              {/* Spiral Layout (Default) */}
              {surahLayout === 'spiral' && (
                <div
                  className="relative"
                  style={{
                    width: Math.min(Math.max(1400 * zoom, 1400), window.innerWidth < 768 ? window.innerWidth * 2.5 : Math.max(1400 * zoom, 1400)),
                    height: Math.min(Math.max(1400 * zoom, 1400), window.innerWidth < 768 ? window.innerWidth * 2.5 : Math.max(1400 * zoom, 1400)),
                    margin: '0 auto',
                    marginTop: window.innerWidth < 768 ? '1rem' : '2rem',
                  }}
                >
                  {/* Beautiful Quran Word in Clock Shape - Center */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                    style={{ transform: `translate(-50%, -50%) scale(${zoom})` }}
                  >
                    {/* Outer rotating ring */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        width: 280,
                        height: 280,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'conic-gradient(from 0deg, #8B5CF6, #06B6D4, #10B981, #F59E0B, #EC4899, #8B5CF6)',
                        animation: 'spinSlow 20s linear infinite',
                        opacity: 0.3,
                        filter: 'blur(20px)',
                      }}
                    />

                    {/* Clock markers - 12 dots around */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'][i % 4]}, ${['#6366F1', '#0891B2', '#059669', '#D97706'][i % 4]})`,
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-120px)`,
                          boxShadow: `0 0 10px ${['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'][i % 4]}60`,
                          animation: `breathe ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}

                    {/* Inner glowing circle */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 200,
                        height: 200,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: darkMode
                          ? 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(6,182,212,0.15) 50%, transparent 70%)',
                        animation: 'breathe 4s ease-in-out infinite',
                      }}
                    />

                    {/* Main Quran text container */}
                    <div
                      className="relative flex flex-col items-center justify-center"
                      style={{ width: 240, height: 240 }}
                    >
                      {/* Arabic Quran word */}
                      <span
                        className="text-transparent bg-clip-text font-bold"
                        style={{
                          fontFamily: "'Scheherazade New', 'Amiri', serif",
                          fontSize: '4.5rem',
                          background: darkMode
                            ? 'linear-gradient(135deg, #C4B5FD 0%, #67E8F9 50%, #A7F3D0 100%)'
                            : 'linear-gradient(135deg, #7C3AED 0%, #0891B2 50%, #059669 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          textShadow: 'none',
                          filter: darkMode ? 'drop-shadow(0 0 20px rgba(139,92,246,0.5))' : 'drop-shadow(0 0 15px rgba(139,92,246,0.3))',
                          lineHeight: 1,
                        }}
                        dir="rtl"
                      >
                        القرآن
                      </span>

                      {/* English subtitle */}
                      <span
                        className="text-transparent bg-clip-text font-semibold tracking-widest mt-1"
                        style={{
                          fontSize: '0.9rem',
                          background: darkMode
                            ? 'linear-gradient(90deg, #94A3B8, #CBD5E1)'
                            : 'linear-gradient(90deg, #64748B, #475569)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          letterSpacing: '0.3em',
                        }}
                      >
                        THE HOLY QURAN
                      </span>

                      {/* Decorative line */}
                      <div
                        className="mt-2"
                        style={{
                          width: 60,
                          height: 2,
                          background: darkMode
                            ? 'linear-gradient(90deg, transparent, #8B5CF6, #06B6D4, transparent)'
                            : 'linear-gradient(90deg, transparent, #7C3AED, #0891B2, transparent)',
                          borderRadius: 1,
                        }}
                      />
                    </div>
                  </div>

                  {filtered.map((s, i) => (
                    <SurahBubble
                      key={s.id}
                      surah={s}
                      index={i}
                      onClick={handleSelectSurah}
                      maxAyahs={MAX_AYAHS}
                      total={filtered.length}
                      zoom={zoom}
                      contentZoom={contentZoom}
                    />
                  ))}
                </div>
              )}

              {/* Clock Layout */}
              {surahLayout === 'clock' && (
                <ClockLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Grid Layout */}
              {surahLayout === 'grid' && (
                <GridLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Juzz Group Layout */}
              {surahLayout === 'juzz' && (
                <JuzzGroupLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Alphabet Layout */}
              {surahLayout === 'alphabet' && (
                <AlphabetLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Revelation Order Layout */}
              {surahLayout === 'revelation' && (
                <RevelationLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Book Layout */}
              {surahLayout === 'book' && (
                <BookLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* List Layout - Simple list view */}
              {surahLayout === 'list' && (
                <ListLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Compact Layout - Smaller grid */}
              {surahLayout === 'compact' && (
                <CompactLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Honeycomb Layout */}
              {surahLayout === 'honeycomb' && (
                <HoneycombLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Wave Layout */}
              {surahLayout === 'wave' && (
                <WaveLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Length Layout - Sorted by ayah count */}
              {surahLayout === 'length' && (
                <LengthLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}

              {/* Kids Layouts - Fun and colorful for children */}
              {(surahLayout === 'kids-rainbow' || surahLayout === 'kids-blocks' || surahLayout === 'kids-bubbles') && (
                <KidsLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                  variant={surahLayout.replace('kids-', '')}
                />
              )}

              {/* Kids Art Layout - Art studio style */}
              {surahLayout === 'kids-art' && (
                <ArtLayout
                  surahs={filtered}
                  onSurahClick={handleSelectSurah}
                  zoom={zoom}
                  contentZoom={contentZoom}
                  darkMode={darkMode}
                />
              )}
            </div>

            {/* Filter info - positioned above the bottom floating menu */}
            {(filters.type || filters.ayahRange || filters.topic || filters.search) && (
              <div
                className={`fixed bottom-36 left-1/2 -translate-x-1/2 z-40 backdrop-blur-xl rounded-full px-5 py-2.5 shadow-lg border flex items-center gap-3 ${
                  darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'
                }`}
              >
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {filtered.length} of 114 surahs
                </span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-purple-600 font-semibold hover:text-purple-800 flex items-center gap-1"
                >
                  ✕ Clear
                </button>
              </div>
            )}
          </>
        )}

        {/* Other Views (lazy-loaded) */}
        <Suspense fallback={<LoadingSpinner message="Loading..." />}>
          {view === 'listen' && <ListenView level={level} darkMode={darkMode} />}
          {view === 'donate' && <DonateView darkMode={darkMode} />}
          {view === 'settings' && <SettingsView darkMode={darkMode} setDarkMode={setDarkMode} onNavigate={setView} />}
          {view === 'admin' && (
            <AdminDashboard
              onClose={() => setView('settings')}
              initialTab={adminTab}
              onTabChange={(tab) => {
                setAdminTab(tab);
                updateURL(tab === 'overview' ? '/admin' : `/admin/${tab}`);
              }}
            />
          )}
          {view === 'names' && <NamesOfAllahView darkMode={darkMode} />}
          {view === 'quiz' && <QuizView darkMode={darkMode} onEarnPoints={handleEarnPoints} />}
          {view === 'prayer' && <PrayerTimesView darkMode={darkMode} />}
          {view === 'stats' && (
            <StatisticsView
              darkMode={darkMode}
              readingProgress={readingProgress}
              streak={streak}
              points={points}
            />
          )}
          {view === 'daily' && <DailyVerseView darkMode={darkMode} />}
          {view === 'privacy' && <PrivacyPolicyView darkMode={darkMode} onBack={() => setView('surahs')} />}
          {view === 'terms' && <TermsOfServiceView darkMode={darkMode} onBack={() => setView('surahs')} />}
        </Suspense>
      </main>

      {/* Floating Menu */}
      <FloatingMenu
        view={view}
        setView={setView}
        darkMode={darkMode}
        onDonate={() => setShowDonateModal(true)}
        onMindMap={() => setShowMindMap(true)}
        onMood={() => setShowMoodTracker(true)}
        onVideoSync={() => setShowVideoSync(true)}
        onBabyNames={() => setShowBabyNames(true)}
        onTalkToQuran={() => setShowTalkToQuran(true)}
        onProgress={() => setShowProgressDashboard(true)}
        onOpenKidsMode={() => setShowKidsMode(true)}
      />

      {/* Bubble Modal */}
      {selected && (
        <BubbleModal
          surah={selected}
          onClose={() => {
            setSelected(null);
            setClickPosition(null);
          }}
          onRead={handleReadSurah}
          onDonate={() => setShowDonateModal(true)}
          onUpgrade={() => {
            setSelected(null);
            setClickPosition(null);
            setView('settings');
          }}
          darkMode={darkMode}
          originPosition={clickPosition}
          layoutStyle={surahLayout}
        />
      )}

      {/* Bubble Reader Overlay */}
      {overlayReaderSurah && (
        <BubbleReaderOverlay
          surah={overlayReaderSurah}
          onClose={handleCloseOverlayReader}
          onChangeSurah={(surah) => {
            handleChangeSurah(surah);
            setInitialVerse(1); // Reset when changing surah
            setInitialPanel(null); // Reset panel when changing surah
          }}
          darkMode={darkMode}
          initialVerse={initialVerse}
          initialPanel={initialPanel}
          readerStyle={surahLayout}
          layoutStyle={surahLayout}
          onPanelChange={(panel) => {
            // Update URL when panel changes
            const basePath = `/surah/${overlayReaderSurah.id}${initialVerse > 1 ? `/${initialVerse}` : ''}`;
            const url = panel ? `${basePath}?panel=${panel}` : basePath;
            updateURL(url);
          }}
        />
      )}

      {/* Floating Bubble Buttons - Feature Access - Vertical Stack on Right Side */}
      {view === 'surahs' && (
        <div className="fixed right-2 sm:right-4 z-40 flex flex-col gap-2 sm:gap-3 bottom-24 sm:bottom-28 md:bottom-[100px]">
          {/* Search Button */}
          <button
            onClick={() => setShowSearchPanel(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            style={{
              background: 'linear-gradient(145deg, #f59e0b, #d97706)',
              boxShadow: `
                0 0 20px rgba(245, 158, 11, 0.35),
                0 4px 15px rgba(0, 0, 0, 0.2),
                inset 0 -3px 10px rgba(0,0,0,0.2),
                inset 0 3px 10px rgba(255,255,255,0.25)
              `,
              animation: 'gentleFloat 4s ease-in-out infinite',
            }}
            title="Search Quran"
          >
            <div className="absolute inset-1 rounded-full opacity-50" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 50%)',
            }} />
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
              Search
            </span>
          </button>

          {/* Progress Button */}
          <button
            onClick={() => setShowProgressDashboard(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            style={{
              background: 'linear-gradient(145deg, #10b981, #059669)',
              boxShadow: `
                0 0 20px rgba(16, 185, 129, 0.35),
                0 4px 15px rgba(0, 0, 0, 0.2),
                inset 0 -3px 10px rgba(0,0,0,0.2),
                inset 0 3px 10px rgba(255,255,255,0.25)
              `,
              animation: 'gentleFloat 4s ease-in-out infinite',
              animationDelay: '0.5s',
            }}
            title="Reading Progress"
          >
            <div className="absolute inset-1 rounded-full opacity-50" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 50%)',
            }} />
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
              Progress
            </span>
          </button>

          {/* Hifz Mode Button */}
          <button
            onClick={() => setShowHifzMode(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            style={{
              background: 'linear-gradient(145deg, #8b5cf6, #6366f1)',
              boxShadow: `
                0 0 20px rgba(139, 92, 246, 0.35),
                0 4px 15px rgba(0, 0, 0, 0.2),
                inset 0 -3px 10px rgba(0,0,0,0.2),
                inset 0 3px 10px rgba(255,255,255,0.25)
              `,
              animation: 'gentleFloat 4s ease-in-out infinite',
              animationDelay: '1s',
            }}
            title="Hifz Mode (Memorization)"
          >
            <div className="absolute inset-1 rounded-full opacity-50" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 50%)',
            }} />
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
              Memorize
            </span>
          </button>

          {/* Offline Mode Button */}
          <button
            onClick={() => setShowOfflineManager(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            style={{
              background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
              boxShadow: `
                0 0 20px rgba(59, 130, 246, 0.35),
                0 4px 15px rgba(0, 0, 0, 0.2),
                inset 0 -3px 10px rgba(0,0,0,0.2),
                inset 0 3px 10px rgba(255,255,255,0.25)
              `,
              animation: 'gentleFloat 4s ease-in-out infinite',
              animationDelay: '1.5s',
            }}
            title="Offline Mode"
          >
            <div className="absolute inset-1 rounded-full opacity-50" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 50%)',
            }} />
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
              Offline
            </span>
          </button>

          {/* Prayer Times Button */}
          <button
            onClick={() => setView('prayer')}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            style={{
              background: 'linear-gradient(145deg, #06b6d4, #0891b2)',
              boxShadow: `
                0 0 20px rgba(6, 182, 212, 0.35),
                0 4px 15px rgba(0, 0, 0, 0.2),
                inset 0 -3px 10px rgba(0,0,0,0.2),
                inset 0 3px 10px rgba(255,255,255,0.25)
              `,
              animation: 'gentleFloat 4s ease-in-out infinite',
              animationDelay: '2s',
            }}
            title="Prayer Times & Qibla"
          >
            <div className="absolute inset-1 rounded-full opacity-50" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 50%)',
            }} />
            <span className="text-xl relative z-10">🕌</span>
            <span className="absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
              Prayer
            </span>
          </button>
        </div>
      )}

      {/* Progress Dashboard */}
      {showProgressDashboard && (
        <Suspense fallback={<LoadingSpinner message="Loading Progress..." />}>
          <ProgressDashboard
            onClose={handleCloseProgress}
            onNavigateToSurah={(surah) => {
              setShowProgressDashboard(false);
              setOverlayReaderSurah(surah);
            }}
          />
        </Suspense>
      )}

      {/* Offline Manager */}
      {showOfflineManager && (
        <Suspense fallback={<LoadingSpinner message="Loading Offline Manager..." />}>
          <OfflineManager
            onClose={handleCloseOffline}
          />
        </Suspense>
      )}

      {/* Hifz Mode */}
      {showHifzMode && (
        <Suspense fallback={<LoadingSpinner message="Loading Memorization..." />}>
          <HifzMode
            onClose={handleCloseHifz}
          />
        </Suspense>
      )}

      {/* Search Panel */}
      {showSearchPanel && (
        <Suspense fallback={<LoadingSpinner message="Searching..." />}>
          <SearchPanel
            onClose={handleCloseSearch}
            onSelectResult={(surah, ayahNumber) => {
              setShowSearchPanel(false);
              setOverlayReaderSurah(surah);
              setInitialVerse(ayahNumber || 1);
            }}
          />
        </Suspense>
      )}

      {/* Donate Modal */}
      {showDonateModal && (
        <Suspense fallback={null}>
          <DonateModal
            isOpen={showDonateModal}
            onClose={handleCloseDonate}
          />
        </Suspense>
      )}

      {/* Word Search Mind Map */}
      {showMindMap && (
        <Suspense fallback={<LoadingSpinner message="Loading Mind Map..." />}>
          <WordSearchMap
            isVisible={showMindMap}
            onClose={handleCloseMindMap}
            onNavigateToVerse={(surahId, ayahNumber) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowMindMap(false);
                setOverlayReaderSurah(surah);
                setInitialVerse(ayahNumber || 1);
              }
            }}
          />
        </Suspense>
      )}

      {/* Mood Tracker */}
      {showMoodTracker && (
        <Suspense fallback={<LoadingSpinner message="Loading Mood Tracker..." />}>
          <EmotionalTracker
            isVisible={showMoodTracker}
            onClose={handleCloseMood}
            onNavigateToSurah={(surahId) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowMoodTracker(false);
                setOverlayReaderSurah(surah);
              }
            }}
          />
        </Suspense>
      )}

      {/* Video Sync - Standalone mode */}
      {showVideoSync && (
        <Suspense fallback={<LoadingSpinner message="Loading Videos..." />}>
          <ScholarVideoSync
            isVisible={showVideoSync}
            onClose={handleCloseVideoSync}
            onNavigateToSurah={(surahId) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowVideoSync(false);
                setOverlayReaderSurah(surah);
              }
            }}
          />
        </Suspense>
      )}

      {/* Prophetic World Map */}
      {showPropheticMap && (
        <Suspense fallback={<LoadingSpinner message="Loading Map..." />}>
          <PropheticMap
            isVisible={showPropheticMap}
            onClose={handleClosePropheticMap}
            onNavigateToVerse={(surahId, ayahNumber) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowPropheticMap(false);
                setOverlayReaderSurah(surah);
                setInitialVerse(ayahNumber);
              }
            }}
          />
        </Suspense>
      )}

      {/* AI Companion Guide */}
      {showCompanionAI && (
        <Suspense fallback={<LoadingSpinner message="Loading AI Guide..." />}>
          <QuranCompanionAI
            isVisible={showCompanionAI}
            onClose={handleCloseCompanionAI}
            onNavigateToVerse={(surahId, ayahNumber) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowCompanionAI(false);
                setOverlayReaderSurah(surah);
                setInitialVerse(ayahNumber);
              }
            }}
          />
        </Suspense>
      )}

      {/* Global Ummah Pulse */}
      {showGlobalPulse && (
        <Suspense fallback={<LoadingSpinner message="Loading Ummah Pulse..." />}>
          <GlobalUmmahPulse
            isVisible={showGlobalPulse}
            onClose={handleCloseGlobalPulse}
          />
        </Suspense>
      )}

      {/* Verse Weather Sync */}
      {showWeatherSync && (
        <Suspense fallback={<LoadingSpinner message="Loading Weather Verses..." />}>
          <VerseWeatherSync
            isVisible={showWeatherSync}
            onClose={handleCloseWeatherSync}
            onNavigateToVerse={(surahId, ayahNumber) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowWeatherSync(false);
                setOverlayReaderSurah(surah);
                setInitialVerse(ayahNumber);
              }
            }}
          />
        </Suspense>
      )}

      {/* Sound Healing Room */}
      {showSoundHealing && (
        <Suspense fallback={<LoadingSpinner message="Loading Sound Healing..." />}>
          <SoundHealingRoom
            isVisible={showSoundHealing}
            onClose={handleCloseSoundHealing}
          />
        </Suspense>
      )}

      {/* Quranic Baby Names */}
      {showBabyNames && (
        <Suspense fallback={<LoadingSpinner message="Loading Baby Names..." />}>
          <QuranicBabyNames
            isVisible={showBabyNames}
            onClose={handleCloseBabyNames}
          />
        </Suspense>
      )}

      {/* Talk to Quran AI */}
      {showTalkToQuran && (
        <Suspense fallback={<LoadingSpinner message="Loading Talk to Quran..." />}>
          <TalkToQuran
            isVisible={showTalkToQuran}
            onClose={() => setShowTalkToQuran(false)}
            darkMode={darkMode}
          />
        </Suspense>
      )}

      {/* Kids Mode - Quran Learning Journey */}
      {(showKidsMode || view === 'kids') && (
        <Suspense fallback={<LoadingSpinner message="Loading Kids Mode..." />}>
          <KidsMode
            isVisible={showKidsMode || view === 'kids'}
            onClose={() => {
              setShowKidsMode(false);
              if (view === 'kids') {
                setView('surahs');
                window.history.pushState({}, '', '/');
              }
            }}
          />
        </Suspense>
      )}

      {/* Animation styles moved to index.css for better caching */}
    </div>
  );
}

/**
 * Root App Component with Error Boundary
 */
export default function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner message="Loading Quran App..." />}>
          <QuranBubbleApp />
        </Suspense>
      </ErrorBoundary>
    </AuthProvider>
  );
}
