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
// Core components (needed immediately for first paint)
import { ErrorBoundary, LoadingSpinner, BubbleModal, Icons } from './components/common';
import { Header, FloatingMenu, StatsBar } from './components/layout';
import { SurahBubble, LayoutSelector } from './components/bubbles';
import { SURAHS, MAX_AYAHS } from './data';
import { useLocalStorage, isMobileDevice, BREAKPOINTS, useCloudSync } from './hooks';
import { updateSEO, getSEOForView } from './hooks/useSEO';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { GamificationProvider } from './contexts/GamificationContext';
import { logger } from './utils/logger';

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

// Lazy-load all layout components (80KB BubbleLayouts — only 1 layout shown at a time)
const LayoutRenderer = lazyWithRetry(() => import('./components/bubbles/LayoutRenderer'));

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
const TasbihView = lazyWithRetry(() => import('./components/views/TasbihView'));
const DiscussionsView = lazyWithRetry(() => import('./components/views/DiscussionsView'));
// CommunityWidget removed — discussions accessible via FloatingMenu "Chat" button

// Lazy-loaded modal features (only loaded when user opens them)
const ProgressDashboard = lazyWithRetry(() => import('./components/common/ProgressDashboard'));
const OfflineManager = lazyWithRetry(() => import('./components/common/OfflineManager'));
const HifzMode = lazyWithRetry(() => import('./components/common/HifzMode'));
const SearchPanel = lazyWithRetry(() => import('./components/common/SearchPanel'));
const DonateModal = lazyWithRetry(() => import('./components/common/DonateModal'));
const WordSearchMap = lazyWithRetry(() => import('./components/common/WordSearchMap'));
const EmotionalTracker = lazyWithRetry(() => import('./components/common/EmotionalTracker'));
const AnnouncementBanner = lazyWithRetry(() => import('./components/common/AnnouncementBanner'));
const ScholarVideoSync = lazyWithRetry(() => import('./components/common/ScholarVideoSync'));
const PropheticMap = lazyWithRetry(() => import('./components/common/PropheticMap'));
const TimeMachine = lazyWithRetry(() => import('./components/common/TimeMachine'));
const QuranCompanionAI = lazyWithRetry(() => import('./components/common/QuranCompanionAI'));
const QuranFAQ = lazyWithRetry(() => import('./components/common/QuranFAQ'));
const GlobalUmmahPulse = lazyWithRetry(() => import('./components/common/GlobalUmmahPulse'));
const VerseWeatherSync = lazyWithRetry(() => import('./components/common/VerseWeatherSync'));
const SoundHealingRoom = lazyWithRetry(() => import('./components/common/SoundHealingRoom'));
const QuranicBabyNames = lazyWithRetry(() => import('./components/common/QuranicBabyNames'));
const TalkToQuran = lazyWithRetry(() => import('./components/common/TalkToQuran'));
const KidsMode = lazyWithRetry(() => import('./components/kids/KidsMode'));
const KidsPremiumGate = lazyWithRetry(() => import('./components/kids/KidsPremiumGate'));
const PaymentResultPopup = lazyWithRetry(() => import('./components/common/PaymentResultPopup'));
const HajjUmrahJourney = lazyWithRetry(() => import('./components/kids/HajjUmrahJourney'));
const AnalyticsPanel = lazyWithRetry(() => import('./components/widgets/AnalyticsPanel'));
const BubbleReaderOverlay = lazyWithRetry(() => import('./components/common/BubbleReaderOverlay'));
const GamificationHub = lazyWithRetry(() => import('./components/common/GamificationHub'));
const GamificationNotifications = lazyWithRetry(() => import('./components/common/GamificationNotifications'));

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
  '/tasbih': { view: 'tasbih' },
  '/privacy': { view: 'privacy' },
  '/terms': { view: 'terms' },
  '/discussions': { view: 'discussions' },
  '/discussions/messages': { view: 'discussions', tab: 'dms' },
  '/discussions/profile': { view: 'discussions', tab: 'profile' },
  // /discussions/surah/:id handled dynamically in parseURL
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
  '/time-machine': { modal: 'timeMachine' },
  '/ai-guide': { modal: 'companionAI' },
  '/ummah-pulse': { modal: 'globalPulse' },
  '/weather-verse': { modal: 'weatherSync' },
  '/sound-healing': { modal: 'soundHealing' },
  '/baby-names': { modal: 'babyNames' },
  '/hajj-umrah': { modal: 'hajjUmrah' },
  '/talk': { modal: 'talkToQuran' },
  '/faq': { modal: 'faq' },
  '/achievements': { modal: 'achievements' },
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
  tasbih: '/tasbih',
  privacy: '/privacy',
  terms: '/terms',
  discussions: '/discussions',
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
  timeMachine: '/time-machine',
  companionAI: '/ai-guide',
  globalPulse: '/ummah-pulse',
  weatherSync: '/weather-verse',
  soundHealing: '/sound-healing',
  babyNames: '/baby-names',
  hajjUmrah: '/hajj-umrah',
  talkToQuran: '/talk',
  faq: '/faq',
  achievements: '/achievements',
};

/**
 * Main App Component
 */
// Blocked User Screen Component
const BlockedUserScreen = ({ reason, onDismiss }) => (
  <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
    <div className="max-w-md mx-4 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
        <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-3">Account Suspended</h1>
      <p className="text-white/70 mb-6">{reason}</p>
      <p className="text-white/50 text-sm mb-8">
        If you believe this is a mistake, please contact support at{' '}
        <a href="mailto:support@w3quran.com" className="text-purple-400 hover:text-purple-300">
          support@w3quran.com
        </a>
      </p>
      <button
        onClick={onDismiss}
        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
      >
        Continue as Guest
      </button>
    </div>
  </div>
);

function QuranBubbleApp() {
  // Auth state
  const { isAuthenticated, isPremium, isAdmin, blocked, blockedReason, clearBlocked, refreshUser } = useAuth();

  // State management using custom hooks for persistence
  const [view, setView] = useState('surahs');
  const [showGamificationHub, setShowGamificationHub] = useState(false);
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
  const [savedBookmarks, setSavedBookmarks] = useState([]);
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
      try {
        const parsed = JSON.parse(stored);
        return typeof parsed === 'string' ? parsed : 'grid';
      } catch { return typeof stored === 'string' ? stored : 'grid'; }
    }
    // Default: grid for all devices (bubble layouts have UI issues on mobile)
    return 'grid';
  };
  const [surahLayout, setSurahLayout] = useLocalStorage('surahLayout', getDefaultLayout());
  // Ensure surahLayout is always a string (localStorage could return non-string via JSON.parse)
  const safeLayout = typeof surahLayout === 'string' ? surahLayout : 'grid';
  const [showProgressDashboard, setShowProgressDashboard] = useState(false);
  const [showOfflineManager, setShowOfflineManager] = useState(false);
  const [showHifzMode, setShowHifzMode] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showMindMap, setShowMindMap] = useState(false);
  const [pendingDMCount, setPendingDMCount] = useState(0);
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [showVideoSync, setShowVideoSync] = useState(false);
  const [showPropheticMap, setShowPropheticMap] = useState(false);
  const [showTimeMachine, setShowTimeMachine] = useState(false);
  const [showCompanionAI, setShowCompanionAI] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showHajjUmrah, setShowHajjUmrah] = useState(false);
  const [showBookmarksPanel, setShowBookmarksPanel] = useState(false);

  // Re-read bookmarks from localStorage whenever panel opens (stays fresh after reader adds bookmarks)
  useEffect(() => {
    if (showBookmarksPanel) {
      try {
        const raw = localStorage.getItem('quran_app_quran_bookmarks');
        setSavedBookmarks(raw ? JSON.parse(raw) : []);
      } catch { setSavedBookmarks([]); }
    }
  }, [showBookmarksPanel]);

  // Next prayer time for sidebar badge
  const [nextPrayerInfo, setNextPrayerInfo] = useState(null);
  useEffect(() => {
    let cancelled = false;
    const fetchNextPrayer = async () => {
      try {
        const saved = localStorage.getItem('quran_app_prayer_location');
        if (!saved) return;
        const loc = JSON.parse(saved);
        if (!loc?.latitude) return;
        const methodRaw = localStorage.getItem('quran_app_prayer_method');
        const method = methodRaw ? JSON.parse(methodRaw) : '2';
        const d = new Date();
        const dateStr = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        const res = await fetch(`https://api.aladhan.com/v1/timings/${dateStr}?latitude=${loc.latitude}&longitude=${loc.longitude}&method=${method}`);
        if (!res.ok || cancelled) return;
        const data = await res.json();
        if (data.code !== 200 || cancelled) return;
        const t = data.data.timings;
        const nowMins = d.getHours() * 60 + d.getMinutes();
        for (const p of ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']) {
          const [h, m] = t[p].split(':').map(Number);
          if (h * 60 + m > nowMins) {
            const h12 = h % 12 || 12;
            const ampm = h >= 12 ? 'PM' : 'AM';
            if (!cancelled) setNextPrayerInfo({ name: p, time: `${h12}:${String(m).padStart(2,'0')} ${ampm}` });
            return;
          }
        }
        const [fh, fm] = t.Fajr.split(':').map(Number);
        const fh12 = fh % 12 || 12;
        if (!cancelled) setNextPrayerInfo({ name: 'Fajr', time: `${fh12}:${String(fm).padStart(2,'0')} AM` });
      } catch { /* silent */ }
    };
    fetchNextPrayer();
    const iv = setInterval(fetchNextPrayer, 60000);
    return () => { cancelled = true; clearInterval(iv); };
  }, []);
  const [showGlobalPulse, setShowGlobalPulse] = useState(false);
  const [showWeatherSync, setShowWeatherSync] = useState(false);
  const [showSoundHealing, setShowSoundHealing] = useState(false);
  const [showBabyNames, setShowBabyNames] = useState(false);
  const [showTalkToQuran, setShowTalkToQuran] = useState(false);
  const [showKidsMode, setShowKidsMode] = useState(false);
  const [adminTab, setAdminTab] = useState('overview');
  const [discussionInitial, setDiscussionInitial] = useState(null); // { surahId?, tab? }
  // Centralized payment return state
  const [paymentResult, setPaymentResult] = useState(null); // { success, canceled, source, feature, returnPath }
  const [paymentPremiumGate, setPaymentPremiumGate] = useState(null); // { feature, source, returnPath } — for "Try Again"
  const [isRefreshingUser, setIsRefreshingUser] = useState(false);

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
    setShowTimeMachine(false);
    setShowCompanionAI(false);
    setShowFAQ(false);
    setShowGlobalPulse(false);
    setShowWeatherSync(false);
    setShowSoundHealing(false);
    setShowBabyNames(false);
    setShowHajjUmrah(false);
    setShowTalkToQuran(false);
    setShowKidsMode(false);
    setShowFAQ(false);
    setShowGamificationHub(false);
    setShowAnalytics(false);
    setShowBookmarksPanel(false);
    setOverlayReaderSurah(null);
    setInitialVerse(1);
    setInitialPanel(null);
  }, []);

  // Reliable "go home" — always navigates to surahs view + updates URL
  const goHome = useCallback(() => {
    setView('surahs');
    updateURL('/');
  }, [updateURL]);

  // Kill all global audio sources - prevents double-playing across features
  const stopAllGlobalAudio = useCallback(() => {
    window.speechSynthesis?.cancel();
    // Stop any HTML5 audio elements that might be playing
    document.querySelectorAll('audio').forEach(a => { a.pause(); a.currentTime = 0; });
  }, []);

  // Smart donation popup trigger for free users
  // Uses a global 3-day cooldown so users aren't spammed across features
  const maybeShowDonation = useCallback((source) => {
    if (isPremium || isAdmin) return;
    const COOLDOWN_MS = 3 * 86400000; // 3 days global cooldown
    const lastShown = localStorage.getItem('w3quran_donate_last_shown');
    const elapsed = lastShown ? Date.now() - parseInt(lastShown, 10) : Infinity;
    if (elapsed < COOLDOWN_MS) return;
    // Show after a short delay for smooth UX
    setTimeout(() => {
      setShowDonateModal(true);
      localStorage.setItem('w3quran_donate_last_shown', String(Date.now()));
      logger.action('donate_popup_shown', { source });
    }, 800);
  }, [isPremium, isAdmin]);

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

  // Fetch pending DM count for notification badge
  useEffect(() => {
    if (!isAuthenticated) { setPendingDMCount(0); return; }
    const fetchDMCount = () => {
      fetch('/api/dm/conversations', { credentials: 'include' })
        .then(r => r.json())
        .then(data => setPendingDMCount(data.pending?.length || 0))
        .catch(() => {});
    };
    fetchDMCount();
    const interval = setInterval(fetchDMCount, 60000); // Poll every minute
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  // ─── Cloud Sync: Settings (premium) ───────────────────────
  const getSettingsData = useCallback(() => {
    const data = {};
    ['reader_fontsize', 'reader_reciter', 'reader_translation', 'reader_show_translation',
     'reader_tajweed', 'reader_wbw', 'reader_repeat', 'reader_autoscroll',
     'darkMode', 'zoom', 'contentZoom', 'surahLayout'].forEach(key => {
      const val = localStorage.getItem('quran_app_' + key);
      if (val !== null) data[key] = val;
    });
    return Object.keys(data).length ? data : null;
  }, []);

  const applySettingsData = useCallback((serverData) => {
    if (!serverData) return;
    Object.entries(serverData).forEach(([key, val]) => {
      const storageKey = 'quran_app_' + key;
      const current = localStorage.getItem(storageKey);
      if (current === null && val !== null) {
        // Only apply server value if no local value exists (local wins)
        localStorage.setItem(storageKey, val);
      }
    });
    // Trigger re-render for useLocalStorage hooks listening to storage events
    window.dispatchEvent(new Event('storage'));
  }, []);

  useCloudSync('settings', getSettingsData, applySettingsData,
    [darkMode, zoom, contentZoom, surahLayout], isAuthenticated && isPremium);

  // ─── Cloud Sync: Activity / Reading Progress (premium) ───
  const getActivityData = useCallback(() => {
    const data = {};
    const progress = localStorage.getItem('quran_reading_progress');
    const streak = localStorage.getItem('quran_reading_streak');
    const goals = localStorage.getItem('quran_reading_goals');
    if (progress) { try { data.progress = JSON.parse(progress); } catch {} }
    if (streak) { try { data.streak = JSON.parse(streak); } catch {} }
    if (goals) { try { data.goals = JSON.parse(goals); } catch {} }
    return Object.keys(data).length ? data : null;
  }, []);

  const applyActivityData = useCallback((serverData) => {
    if (!serverData) return;
    // Merge progress: take max totalAyahsRead, union surahs
    if (serverData.progress) {
      const local = JSON.parse(localStorage.getItem('quran_reading_progress') || 'null');
      if (!local) {
        localStorage.setItem('quran_reading_progress', JSON.stringify(serverData.progress));
      } else {
        const merged = { ...local };
        merged.totalAyahsRead = Math.max(local.totalAyahsRead || 0, serverData.progress.totalAyahsRead || 0);
        merged.totalSurahsCompleted = Math.max(local.totalSurahsCompleted || 0, serverData.progress.totalSurahsCompleted || 0);
        if (serverData.progress.surahs) {
          merged.surahs = { ...merged.surahs };
          Object.entries(serverData.progress.surahs).forEach(([sid, sdata]) => {
            if (!merged.surahs[sid]) {
              merged.surahs[sid] = sdata;
            } else {
              const localAyahs = new Set(merged.surahs[sid].completedAyahs || []);
              (sdata.completedAyahs || []).forEach(a => localAyahs.add(a));
              merged.surahs[sid] = { ...merged.surahs[sid], completedAyahs: [...localAyahs] };
              merged.surahs[sid].completed = merged.surahs[sid].completed || sdata.completed;
            }
          });
        }
        localStorage.setItem('quran_reading_progress', JSON.stringify(merged));
      }
    }
    // Merge streak: take max values
    if (serverData.streak) {
      const local = JSON.parse(localStorage.getItem('quran_reading_streak') || 'null');
      if (!local) {
        localStorage.setItem('quran_reading_streak', JSON.stringify(serverData.streak));
      } else {
        const merged = {
          currentStreak: Math.max(local.currentStreak || 0, serverData.streak.currentStreak || 0),
          longestStreak: Math.max(local.longestStreak || 0, serverData.streak.longestStreak || 0),
          lastReadDate: local.lastReadDate > serverData.streak.lastReadDate ? local.lastReadDate : serverData.streak.lastReadDate,
          readDates: [...new Set([...(local.readDates || []), ...(serverData.streak.readDates || [])])].sort(),
        };
        localStorage.setItem('quran_reading_streak', JSON.stringify(merged));
      }
    }
    // Goals: local wins (user-set preferences)
    if (serverData.goals && !localStorage.getItem('quran_reading_goals')) {
      localStorage.setItem('quran_reading_goals', JSON.stringify(serverData.goals));
    }
  }, []);

  useCloudSync('activity', getActivityData, applyActivityData,
    [readingProgress], isAuthenticated && isPremium);

  // Centralized payment return handler — single place for ALL payment results
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const success = params.get('payment_success') === '1';
    const canceled = params.get('payment_canceled') === '1';

    if (!success && !canceled) {
      // Handle silent return (user closed Stripe tab without completing)
      if (localStorage.getItem('kids_payment_pending') === 'true') {
        localStorage.removeItem('kids_payment_pending');
        localStorage.removeItem('payment_source');
        localStorage.removeItem('payment_feature');
        localStorage.removeItem('payment_return_path');
      }
      return;
    }

    const source = localStorage.getItem('payment_source') || 'kids';
    const feature = localStorage.getItem('payment_feature') || 'premium';
    const returnPath = localStorage.getItem('payment_return_path') || '/';

    // Clean up localStorage
    localStorage.removeItem('kids_payment_pending');
    localStorage.removeItem('payment_source');
    localStorage.removeItem('payment_feature');
    localStorage.removeItem('payment_return_path');

    // Clean URL params
    const url = new URL(window.location);
    url.searchParams.delete('payment_success');
    url.searchParams.delete('payment_canceled');
    window.history.replaceState({}, '', url.pathname + (url.search || ''));

    // Refresh user premium status on success
    if (success && refreshUser) {
      setIsRefreshingUser(true);
      refreshUser().catch(() => {}).finally(() => setIsRefreshingUser(false));
    }

    // Open the correct view based on source (so user lands on the same page)
    switch (source) {
      case 'kids': setShowKidsMode(true); break;
      case 'talk_to_quran': setShowTalkToQuran(true); break;
      // 'discussions', 'tasbih', 'dm_chat', 'surah_chat' — view is already set from URL parsing
    }

    // Show centralized payment result popup
    setPaymentResult({ success, canceled, source, feature, returnPath });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

      // Check for discussion profile route: /discussions/profile/:userId
      const discProfileMatch = path.match(/^\/discussions\/profile\/([^/]+)$/);
      if (discProfileMatch) {
        setDiscussionInitial({ profileUserId: discProfileMatch[1] });
        setView('discussions');
        return;
      }

      // Check for discussion DM conversation route: /discussions/messages/:connectionId
      const discDmMatch = path.match(/^\/discussions\/messages\/(.+)$/);
      if (discDmMatch) {
        setDiscussionInitial({ tab: 'dms', dmConnectionId: discDmMatch[1] });
        setView('discussions');
        return;
      }

      // Check for discussion surah route: /discussions/surah/:id
      const discSurahMatch = path.match(/^\/discussions\/surah\/(\d+)$/);
      if (discSurahMatch) {
        const surahId = parseInt(discSurahMatch[1], 10);
        if (surahId >= 1 && surahId <= 114) {
          setDiscussionInitial({ surahId });
          setView('discussions');
          return;
        }
      }

      // Check route config
      const config = ROUTE_CONFIG[path];
      if (config) {
        if (config.view) {
          setView(config.view);
          // Handle admin tab from route
          if (config.view === 'admin' && config.tab) {
            setAdminTab(config.tab);
          }
          // Handle discussion tab from route
          if (config.view === 'discussions' && config.tab) {
            setDiscussionInitial({ tab: config.tab });
          } else if (config.view === 'discussions') {
            setDiscussionInitial(null);
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
            case 'timeMachine': stopAllGlobalAudio(); setShowTimeMachine(true); break;
            case 'companionAI': setShowCompanionAI(true); break;
            case 'globalPulse': setShowGlobalPulse(true); break;
            case 'weatherSync': setShowWeatherSync(true); break;
            case 'soundHealing': stopAllGlobalAudio(); setShowSoundHealing(true); break;
            case 'babyNames': setShowBabyNames(true); break;
            case 'hajjUmrah': setShowHajjUmrah(true); break;
            case 'talkToQuran': setShowTalkToQuran(true); break;
            case 'faq': setShowFAQ(true); break;
            case 'achievements': setShowGamificationHub(true); break;
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
    // Skip for discussions — it manages its own sub-routes via onNavigate
    if (view === 'discussions') {
      // Only set base /discussions if no sub-route is already active
      const p = window.location.pathname;
      if (!p.startsWith('/discussions')) updateURL('/discussions');
      return;
    }
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
    if (showTimeMachine) updateURL(MODAL_TO_ROUTE.timeMachine);
  }, [showTimeMachine, updateURL]);

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

  useEffect(() => {
    if (showHajjUmrah) updateURL(MODAL_TO_ROUTE.hajjUmrah);
  }, [showHajjUmrah, updateURL]);

  useEffect(() => {
    if (showTalkToQuran) updateURL(MODAL_TO_ROUTE.talkToQuran);
  }, [showTalkToQuran, updateURL]);

  useEffect(() => {
    if (showFAQ) updateURL(MODAL_TO_ROUTE.faq);
  }, [showFAQ, updateURL]);

  useEffect(() => {
    if (showGamificationHub) updateURL(MODAL_TO_ROUTE.achievements);
  }, [showGamificationHub, updateURL]);

  // Update page title + meta tags (OG, description, canonical) based on current state
  useEffect(() => {
    let title = 'w3Quran - The Holy Quran';

    if (overlayReaderSurah) {
      // Surah page — full SEO with description
      const seo = getSEOForView(null, overlayReaderSurah);
      updateSEO(seo);
      return;
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
      // Known views — use SEO data with descriptions
      const seo = getSEOForView(view);
      updateSEO(seo);
      return;
    }

    // Fallback for modals/overlays — title only
    updateSEO({ title });
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
      showPropheticMap || showTimeMachine || showCompanionAI || showGlobalPulse || showWeatherSync ||
      showSoundHealing || showBabyNames || overlayReaderSurah;

    if (anyModalOpen) {
      closeAllModals();
      updateURL('/');
    }
  }, [
    showSearchPanel, showProgressDashboard, showOfflineManager, showHifzMode,
    showMindMap, showMoodTracker, showVideoSync, showPropheticMap, showTimeMachine, showCompanionAI,
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
    maybeShowDonation('mind_map');
  }, [updateURL, maybeShowDonation]);

  const handleCloseMood = useCallback(() => {
    setShowMoodTracker(false);
    updateURL('/');
    maybeShowDonation('mood_tracker');
  }, [updateURL, maybeShowDonation]);

  const handleCloseVideoSync = useCallback(() => {
    setShowVideoSync(false);
    updateURL('/');
  }, [updateURL]);

  const handleClosePropheticMap = useCallback(() => {
    setShowPropheticMap(false);
    updateURL('/');
    maybeShowDonation('prophetic_map');
  }, [updateURL, maybeShowDonation]);

  const handleCloseTimeMachine = useCallback(() => {
    // Force-kill any lingering audio/TTS from TimeMachine
    window.speechSynthesis?.cancel();
    setShowTimeMachine(false);
    updateURL('/');
    maybeShowDonation('time_machine');
  }, [updateURL, maybeShowDonation]);

  const handleCloseCompanionAI = useCallback(() => {
    setShowCompanionAI(false);
    updateURL('/');
    maybeShowDonation('ai_guide');
  }, [updateURL, maybeShowDonation]);

  const handleCloseGlobalPulse = useCallback(() => {
    setShowGlobalPulse(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseWeatherSync = useCallback(() => {
    setShowWeatherSync(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseSoundHealing = useCallback(() => {
    window.speechSynthesis?.cancel();
    setShowSoundHealing(false);
    updateURL('/');
    maybeShowDonation('sound_healing');
  }, [updateURL, maybeShowDonation]);

  const handleCloseBabyNames = useCallback(() => {
    setShowBabyNames(false);
    updateURL('/');
    maybeShowDonation('baby_names');
  }, [updateURL, maybeShowDonation]);

  const handleCloseDonate = useCallback(() => {
    setShowDonateModal(false);
  }, []);

  const handleCloseFAQ = useCallback(() => {
    setShowFAQ(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseGamificationHub = useCallback(() => {
    setShowGamificationHub(false);
    updateURL('/');
  }, [updateURL]);

  const handleCloseTalkToQuran = useCallback(() => {
    setShowTalkToQuran(false);
    updateURL('/');
    maybeShowDonation('talk_to_quran');
  }, [updateURL, maybeShowDonation]);

  const handleCloseHajjUmrah = useCallback(() => {
    setShowHajjUmrah(false);
    updateURL('/');
  }, [updateURL]);

  const handleOpenDonate = useCallback(() => {
    logger.action('donate_click', { user_type: isAuthenticated ? 'logged_in' : 'guest' });
    logger.flush(); // Send immediately so admin sees it right away
    setShowDonateModal(true);
  }, [isAuthenticated]);

  // Track visitor on page load and send heartbeat every 30 seconds
  // Use ref to store mutable values that don't trigger re-renders
  const userLocationRef = useRef({ lat: null, lng: null });
  const userIdRef = useRef(null);

  useEffect(() => {
    let heartbeatInterval = null;

    // Get user ID (initialize once)
    if (!userIdRef.current) {
      let userId = localStorage.getItem('w3quran_user_id');
      if (!userId) {
        userId = 'user_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
        localStorage.setItem('w3quran_user_id', userId);
      }
      userIdRef.current = userId;
    }

    // Try to get user's location
    const getLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            userLocationRef.current = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
          },
          () => {
            // Use default if permission denied
            userLocationRef.current = { lat: null, lng: null };
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
            userId: userIdRef.current,
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'direct',
            lat: userLocationRef.current.lat,
            lng: userLocationRef.current.lng,
          }),
        });
      } catch {
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
            userId: userIdRef.current,
            lat: userLocationRef.current.lat,
            lng: userLocationRef.current.lng,
            status,
            surahId,
            page: path || '/',
          }),
        });
        // Only parse JSON if response is valid JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          await response.json();
          // Heartbeat logged - response processed silently
        }
      } catch {
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
    // Update reading progress
    setReadingProgress((prev) => ({
      ...prev,
      [surah.id]: { lastRead: Date.now(), ayahsRead: (prev[surah.id]?.ayahsRead || 0) + 1 },
    }));
  }, [setReadingProgress, updateURL]);

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

  // Legacy shim for QuizView — routes to gamification system
  const handleEarnPoints = useCallback(() => {
    // Points now handled by gamification system in QuizView directly
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({ type: null, ayahRange: null, chronOrder: null, topic: null, search: '' });
  }, []);

  return (
    <div
      className={`flex flex-col overflow-hidden transition-colors duration-500 ${
        darkMode ? 'animated-bg-dark' : 'animated-bg'
      }`}
      style={{ height: '100dvh', minHeight: '-webkit-fill-available' }}
    >
      {/* Blocked User Screen */}
      {blocked && (
        <BlockedUserScreen reason={blockedReason} onDismiss={clearBlocked} />
      )}

      {/* Admin Announcements Banner */}
      {!blocked && (
        <Suspense fallback={null}>
          <AnnouncementBanner userTier={isPremium ? 'premium' : 'free'} />
        </Suspense>
      )}

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
          onAdminClick={() => { setView('admin'); updateURL('/admin'); }}
          onUpgradeClick={() => setPaymentPremiumGate({ feature: 'premium', source: 'general', returnPath: window.location.pathname })}
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
          zoom={zoom}
          setZoom={setZoom}
          contentZoom={contentZoom}
          setContentZoom={setContentZoom}
          surahLayout={safeLayout}
          setSurahLayout={setSurahLayout}
          showControls={true}
          onDonate={handleOpenDonate}
          onShowAchievements={() => setShowGamificationHub(true)}
          onWorldMap={() => setShowPropheticMap(true)}
          onTimeMachine={() => { stopAllGlobalAudio(); setShowTimeMachine(true); }}
          onGlobalPulse={() => setShowGlobalPulse(true)}
          onWeatherSync={() => setShowWeatherSync(true)}
          onHajjUmrah={() => setShowHajjUmrah(true)}
          onShowBookmarks={() => setShowBookmarksPanel(true)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden"
        style={view !== 'surahs' ? { paddingTop: 'env(safe-area-inset-top, 0px)' } : undefined}
      >
        {/* Surahs View */}
        {view === 'surahs' && (
          <>
            <div className="absolute inset-0 overflow-auto bubble-container pt-1 pr-10 sm:pr-12"
              style={{ paddingBottom: 'max(7rem, calc(env(safe-area-inset-bottom, 0px) + 7rem))' }}
            >
              {/* Spiral Layout (Default) */}
              {safeLayout === 'spiral' && (
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

              {/* All non-spiral layouts — lazy-loaded (80KB deferred) */}
              {safeLayout !== 'spiral' && (
                <Suspense fallback={<div className="flex items-center justify-center py-20"><LoadingSpinner /></div>}>
                  <LayoutRenderer
                    layout={safeLayout}
                    surahs={filtered}
                    onSurahClick={handleSelectSurah}
                    zoom={zoom}
                    contentZoom={contentZoom}
                    darkMode={darkMode}
                  />
                </Suspense>
              )}

              {/* Community widget removed — discussions accessible via FloatingMenu Chat button */}
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
          {view === 'listen' && <ListenView darkMode={darkMode} onBack={goHome} />}
          {view === 'donate' && <DonateView darkMode={darkMode} onBack={goHome} />}
          {view === 'settings' && <SettingsView darkMode={darkMode} setDarkMode={setDarkMode} onNavigate={setView} onBack={goHome} />}
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
          {view === 'names' && <NamesOfAllahView darkMode={darkMode} onBack={goHome} />}
          {view === 'quiz' && <QuizView darkMode={darkMode} onEarnPoints={handleEarnPoints} onBack={goHome} />}
          {view === 'prayer' && <PrayerTimesView darkMode={darkMode} onBack={goHome} />}
          {view === 'stats' && (
            <StatisticsView
              darkMode={darkMode}
              readingProgress={readingProgress}
              onBack={goHome}
            />
          )}
          {view === 'daily' && <DailyVerseView darkMode={darkMode} onBack={goHome} />}
          {view === 'tasbih' && (
            <Suspense fallback={<LoadingSpinner message="Loading Tasbih..." />}>
              <TasbihView darkMode={darkMode} onBack={goHome} />
            </Suspense>
          )}
          {view === 'discussions' && (
            <DiscussionsView
              darkMode={darkMode}
              onBack={() => { setView('surahs'); updateURL('/'); }}
              initialSurahId={discussionInitial?.surahId || null}
              initialTab={discussionInitial?.tab || null}
              initialProfileUserId={discussionInitial?.profileUserId || null}
              initialDmConnectionId={discussionInitial?.dmConnectionId || null}
              onNavigate={(path) => { updateURL(path); setDiscussionInitial(null); }}
              onNavigateSettings={() => { setView('settings'); updateURL('/settings'); }}
              onOpenAyah={(surahId, ayahNum) => {
                const surah = SURAHS.find(s => s.id === surahId);
                if (surah) {
                  setOverlayReaderSurah(surah);
                  setInitialVerse(ayahNum || 1);
                  updateURL(`/surah/${surah.id}${ayahNum > 1 ? `/${ayahNum}` : ''}`);
                }
              }}
            />
          )}
          {view === 'privacy' && <PrivacyPolicyView darkMode={darkMode} onBack={goHome} />}
          {view === 'terms' && <TermsOfServiceView darkMode={darkMode} onBack={goHome} />}
        </Suspense>
      </main>

      {/* Floating Menu - hidden when Talk to Quran or Admin panel is open */}
      {!showTalkToQuran && view !== 'admin' && view !== 'discussions' && (
        <FloatingMenu
          view={view}
          setView={setView}
          darkMode={darkMode}
          onDonate={handleOpenDonate}
          onMindMap={() => setShowMindMap(true)}
          onMood={() => setShowMoodTracker(true)}
          onVideoSync={() => setShowVideoSync(true)}
          onBabyNames={() => setShowBabyNames(true)}
          onTalkToQuran={() => setShowTalkToQuran(true)}
          onProgress={() => setShowProgressDashboard(true)}
          onOpenKidsMode={() => setShowKidsMode(true)}
          onAIGuide={() => setShowCompanionAI(true)}
          onSoundHealing={() => { stopAllGlobalAudio(); setShowSoundHealing(true); }}
          onSearch={() => setShowSearchPanel(true)}
          onHifz={() => setShowHifzMode(true)}
          onOffline={() => setShowOfflineManager(true)}
          onFAQ={() => setShowFAQ(true)}
        />
      )}

      {/* Bubble Modal */}
      {selected && (
        <BubbleModal
          surah={selected}
          onClose={() => {
            setSelected(null);
            setClickPosition(null);
          }}
          onRead={handleReadSurah}
          onDonate={handleOpenDonate}
          onUpgrade={() => {
            setSelected(null);
            setClickPosition(null);
            setPaymentPremiumGate({ feature: 'premium', source: 'general', returnPath: window.location.pathname });
          }}
          darkMode={darkMode}
          originPosition={clickPosition}
          layoutStyle={safeLayout}
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
          readerStyle={safeLayout}
          layoutStyle={safeLayout}
          onPanelChange={(panel) => {
            // Update URL when panel changes
            const basePath = `/surah/${overlayReaderSurah.id}${initialVerse > 1 ? `/${initialVerse}` : ''}`;
            const url = panel ? `${basePath}?panel=${panel}` : basePath;
            updateURL(url);
          }}
          onNavigateToView={(viewName) => {
            setView(viewName);
            updateURL(`/${viewName}`);
          }}
        />
      )}

      {/* Floating Sidebar — 4 Quick Access Buttons */}
      {view === 'surahs' && !showTalkToQuran && (
        <div
          style={{
            position: 'fixed',
            right: '8px',
            bottom: '96px',
            zIndex: 9998,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {[
            { key: 'daily', emoji: '☀️', title: 'Daily Verse', bg: ['#f59e0b', '#eab308'], glow: 'rgba(245,158,11,0.3)', delay: '0s', onClick: () => setView('daily') },
            { key: 'ai', emoji: '🤝', title: 'AI Guide', bg: ['#14b8a6', '#0d9488'], glow: 'rgba(20,184,166,0.3)', delay: '0.7s', onClick: () => setShowCompanionAI(true) },
            { key: 'tasbih', emoji: '📿', title: 'Tasbih', bg: ['#10b981', '#059669'], glow: 'rgba(16,185,129,0.3)', delay: '1.05s', onClick: () => setView('tasbih') },
          ].map(btn => (
            <button
              key={btn.key}
              onClick={btn.onClick}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group overflow-hidden"
              style={{
                background: `linear-gradient(145deg, ${btn.bg[0]}, ${btn.bg[1]})`,
                boxShadow: `0 0 15px ${btn.glow}, 0 3px 10px rgba(0,0,0,0.2), inset 0 -2px 8px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.25)`,
              }}
              title={btn.title}
            >
              <div className="absolute inset-0 rounded-full opacity-50 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, transparent 45%)' }} />
              <span className="text-base relative z-10 leading-none">{btn.emoji}</span>
              <span className="absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
                {btn.title}
              </span>
            </button>
          ))}

          {/* Prayer Times — with next prayer badge */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setView('prayer')}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #06b6d4, #0891b2)',
                boxShadow: '0 0 15px rgba(6,182,212,0.3), 0 3px 10px rgba(0,0,0,0.2), inset 0 -2px 8px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.25)',
              }}
              title="Prayer Times & Qibla"
            >
              <div className="absolute inset-0 rounded-full opacity-50 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, transparent 45%)' }} />
              <span className="text-base relative z-10 leading-none">🕌</span>
              <span className="absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
                Prayer
              </span>
            </button>
            {nextPrayerInfo && (
              <div className="mt-1 px-2 py-0.5 rounded-full text-center whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(20,184,166,0.15))',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(6,182,212,0.25)',
                }}>
                <p className="text-[8px] sm:text-[9px] font-bold" style={{ color: '#06b6d4' }}>{nextPrayerInfo.name}</p>
                <p className="text-[7px] sm:text-[8px] font-semibold" style={{ color: '#0891b2' }}>{nextPrayerInfo.time}</p>
              </div>
            )}
          </div>
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

      {/* Time Machine - Revelation Timeline */}
      {showTimeMachine && (
        <Suspense fallback={<LoadingSpinner message="Loading Time Machine..." />}>
          <TimeMachine
            isVisible={showTimeMachine}
            onClose={handleCloseTimeMachine}
            darkMode={darkMode}
            onNavigateToVerse={(surahId, ayahNumber) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowTimeMachine(false);
                setOverlayReaderSurah(surah);
                setInitialVerse(ayahNumber || 1);
              }
            }}
          />
        </Suspense>
      )}

      {/* Bookmarks Panel */}
      {showBookmarksPanel && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={() => setShowBookmarksPanel(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg max-h-[80vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Icons.Bookmark className="w-5 h-5 text-pink-400" />
                <h2 className="text-lg font-bold text-white">Bookmarks</h2>
                <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">{savedBookmarks.length}</span>
              </div>
              <button onClick={() => setShowBookmarksPanel(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors">
                <Icons.X className="w-4 h-4" />
              </button>
            </div>
            {/* Bookmark List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {savedBookmarks.length === 0 ? (
                <div className="text-center py-12 text-white/40">
                  <Icons.Bookmark className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No bookmarks yet</p>
                  <p className="text-xs mt-1">Open a surah and tap the bookmark button to save ayahs</p>
                </div>
              ) : (
                savedBookmarks.map((bm) => (
                  <button
                    key={bm.id}
                    onClick={() => {
                      const surah = SURAHS.find(s => s.id === bm.surahId);
                      if (surah) {
                        setShowBookmarksPanel(false);
                        setOverlayReaderSurah(surah);
                        setInitialVerse(bm.ayahNumber || 1);
                      }
                    }}
                    className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-pink-500/30 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center text-pink-300 text-sm font-bold">
                        {bm.surahId}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold text-sm">{bm.surahName}</span>
                          <span className="text-white/40 text-xs">Ayah {bm.ayahNumber}</span>
                        </div>
                        {bm.versePreview && (
                          <p className="text-white/50 text-xs mt-1 truncate font-arabic" dir="rtl">{bm.versePreview}</p>
                        )}
                        {bm.note && (
                          <p className="text-pink-300/60 text-xs mt-1 truncate">{bm.note}</p>
                        )}
                        <span className="text-white/20 text-[10px] mt-1 block">{new Date(bm.timestamp).toLocaleDateString()}</span>
                      </div>
                      <Icons.ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pink-400 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
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

      {/* Islamic FAQ */}
      {showFAQ && (
        <Suspense fallback={<LoadingSpinner message="Loading FAQ..." />}>
          <QuranFAQ
            isVisible={showFAQ}
            onClose={handleCloseFAQ}
            onNavigateToVerse={(surahId, ayahNumber) => {
              const surah = SURAHS.find(s => s.id === surahId);
              if (surah) {
                setShowFAQ(false);
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

      {/* Hajj & Umrah Journey */}
      {showHajjUmrah && (
        <Suspense fallback={<LoadingSpinner message="Loading Hajj Journey..." />}>
          <HajjUmrahJourney
            onBack={handleCloseHajjUmrah}
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
            onClose={handleCloseTalkToQuran}
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

      {/* Gamification Hub (achievements, challenges, progress) */}
      {showGamificationHub && (
        <Suspense fallback={null}>
          <GamificationHub
            isVisible={showGamificationHub}
            onClose={handleCloseGamificationHub}
          />
        </Suspense>
      )}

      {/* Gamification Notifications (XP toasts, achievement modals, level-ups) */}
      <Suspense fallback={null}>
        <GamificationNotifications />
      </Suspense>

      {/* Centralized Payment Result Popup — shown after returning from Stripe */}
      {paymentResult && (
        <Suspense fallback={null}>
          <PaymentResultPopup
            success={paymentResult.success}
            canceled={paymentResult.canceled}
            isLoading={isRefreshingUser}
            onClose={() => setPaymentResult(null)}
            onRetry={() => {
              const { feature, source, returnPath } = paymentResult;
              setPaymentResult(null);
              setPaymentPremiumGate({ feature, source, returnPath });
            }}
          />
        </Suspense>
      )}

      {/* Centralized Premium Gate — opened by "Try Again" from payment result */}
      {paymentPremiumGate && (
        <Suspense fallback={null}>
          <KidsPremiumGate
            feature={paymentPremiumGate.feature}
            source={paymentPremiumGate.source}
            returnPath={paymentPremiumGate.returnPath}
            onClose={() => setPaymentPremiumGate(null)}
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
      <GamificationProvider>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner message="Loading Quran App..." />}>
            <QuranBubbleApp />
          </Suspense>
        </ErrorBoundary>
      </GamificationProvider>
    </AuthProvider>
  );
}
