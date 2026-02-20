/**
 * Analytics Tracker for w3Quran
 * Tracks user behavior and batches events for server upload
 *
 * Events tracked:
 * - page_view: Page navigation
 * - surah_read: Reading a surah
 * - audio_play: Playing audio
 * - feature_use: Using a feature (tafseer, memorize, etc.)
 * - search: Search queries
 * - purchase: Subscription purchases
 * - session_end: When user leaves
 */

// Session ID for grouping events
let sessionId = null;
const getSessionId = () => {
  if (!sessionId) {
    // Check for existing session in sessionStorage (with error handling for private browsing)
    try {
      sessionId = sessionStorage.getItem('w3q_session_id');
    } catch (e) {
      // sessionStorage access denied (private browsing mode)
      console.warn('[Analytics] sessionStorage access denied:', e.message);
    }

    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      // Try to persist (but don't crash if it fails)
      try {
        sessionStorage.setItem('w3q_session_id', sessionId);
      } catch (e) {
        console.warn('[Analytics] sessionStorage write denied:', e.message);
      }
    }
  }
  return sessionId;
};

// Event queue for batching
let eventQueue = [];
let flushTimeout = null;
const FLUSH_INTERVAL = 30000; // 30 seconds
const MAX_QUEUE_SIZE = 50;

// Session tracking
let sessionStartTime = Date.now();
let lastActivityTime = Date.now();

/**
 * Core tracking function - adds event to queue
 */
const trackEvent = (eventType, data = {}) => {
  if (typeof window === 'undefined') return;

  lastActivityTime = Date.now();

  const event = {
    event_type: eventType,
    session_id: getSessionId(),
    page_url: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...data
  };

  eventQueue.push(event);

  // Immediate flush for important events
  if (eventType === 'purchase' || eventType === 'error') {
    flushEvents();
  } else if (eventQueue.length >= MAX_QUEUE_SIZE) {
    flushEvents();
  } else {
    scheduleFlush();
  }
};

/**
 * Schedule a flush
 */
const scheduleFlush = () => {
  if (flushTimeout) return;
  flushTimeout = setTimeout(() => {
    flushTimeout = null;
    flushEvents();
  }, FLUSH_INTERVAL);
};

/**
 * Send events to server
 */
const flushEvents = async () => {
  if (eventQueue.length === 0) return;

  const eventsToSend = [...eventQueue];
  eventQueue = [];

  try {
    await fetch('/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: eventsToSend }),
      credentials: 'include',
      // Use keepalive for page unload scenarios
      keepalive: true
    });
  } catch (err) {
    // Put events back if failed (up to a limit)
    if (eventQueue.length < 100) {
      eventQueue = [...eventsToSend, ...eventQueue].slice(0, 100);
    }
    console.warn('[Analytics] Failed to send events:', err.message);
  }
};

// ============================================
// PUBLIC TRACKING METHODS
// ============================================

/**
 * Track page view
 */
export const trackPageView = (path) => {
  trackEvent('page_view', {
    page_url: path || window.location.pathname
  });
};

/**
 * Track surah reading
 */
export const trackSurahRead = (surahId, durationSeconds = 0, completionPercent = 0) => {
  trackEvent('surah_read', {
    surah_id: surahId,
    duration_seconds: durationSeconds,
    completion_percent: completionPercent
  });
};

/**
 * Track audio playback
 */
export const trackAudioPlay = (surahId, ayahNum, reciter, durationSeconds = 0) => {
  trackEvent('audio_play', {
    surah_id: surahId,
    ayah_num: ayahNum,
    duration_seconds: durationSeconds,
    metadata: { reciter }
  });
};

/**
 * Track feature usage
 */
export const trackFeatureUse = (featureName, metadata = {}) => {
  trackEvent('feature_use', {
    feature_name: featureName,
    metadata
  });
};

/**
 * Track search
 */
export const trackSearch = (query, resultCount = 0) => {
  trackEvent('search', {
    search_query: query,
    result_count: resultCount
  });
};

/**
 * Track purchase/subscription
 */
export const trackPurchase = (tier, amount, metadata = {}) => {
  trackEvent('purchase', {
    metadata: {
      tier,
      amount,
      ...metadata
    }
  });
};

/**
 * Track error (for correlation with app_logs)
 */
export const trackError = (errorType, message, surahId = null) => {
  trackEvent('error', {
    surah_id: surahId,
    metadata: {
      error_type: errorType,
      message: message?.slice(0, 500)
    }
  });
};

/**
 * Track Talk to Quran usage
 */
export const trackTalkToQuran = (action, metadata = {}) => {
  trackEvent('feature_use', {
    feature_name: 'talk_to_quran',
    metadata: {
      action, // 'start', 'message_sent', 'response_received', 'error'
      ...metadata
    }
  });
};

/**
 * Track bookmark action
 */
export const trackBookmark = (surahId, ayahNum, action = 'add') => {
  trackEvent('feature_use', {
    feature_name: 'bookmark',
    surah_id: surahId,
    ayah_num: ayahNum,
    metadata: { action }
  });
};

/**
 * Track tafseer view
 */
export const trackTafseerView = (surahId, ayahNum, tafseerSource) => {
  trackEvent('feature_use', {
    feature_name: 'tafseer',
    surah_id: surahId,
    ayah_num: ayahNum,
    metadata: { tafseer_source: tafseerSource }
  });
};

/**
 * Track verse art generation
 */
export const trackVerseArt = (surahId, ayahNum, style) => {
  trackEvent('feature_use', {
    feature_name: 'verse_art',
    surah_id: surahId,
    ayah_num: ayahNum,
    metadata: { style }
  });
};

/**
 * Track memorization mode usage
 */
export const trackMemorize = (surahId, hideLevel, duration) => {
  trackEvent('feature_use', {
    feature_name: 'memorize',
    surah_id: surahId,
    duration_seconds: duration,
    metadata: { hide_level: hideLevel }
  });
};

// ============================================
// AUTOMATIC TRACKING SETUP
// ============================================

/**
 * Initialize analytics tracking
 * Call this once when app loads
 */
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Track initial page view
  trackPageView();

  // Track session end on page unload
  const handleUnload = () => {
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 1000);
    trackEvent('session_end', {
      duration_seconds: sessionDuration
    });
    flushEvents();
  };

  window.addEventListener('beforeunload', handleUnload);
  window.addEventListener('pagehide', handleUnload);

  // Track visibility changes (for mobile tab switches)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flushEvents();
    }
  });

  // Periodic flush even if no new events
  setInterval(() => {
    if (eventQueue.length > 0) {
      flushEvents();
    }
  }, FLUSH_INTERVAL);

  console.log('[Analytics] Initialized with session:', getSessionId());
};

/**
 * Track route changes (for SPA navigation)
 */
export const trackRouteChange = (path) => {
  trackPageView(path);
};

// ============================================
// ANALYTICS OBJECT EXPORT
// ============================================

export const analytics = {
  init: initAnalytics,
  pageView: trackPageView,
  routeChange: trackRouteChange,
  surahRead: trackSurahRead,
  audioPlay: trackAudioPlay,
  featureUse: trackFeatureUse,
  search: trackSearch,
  purchase: trackPurchase,
  error: trackError,
  talkToQuran: trackTalkToQuran,
  bookmark: trackBookmark,
  tafseer: trackTafseerView,
  verseArt: trackVerseArt,
  memorize: trackMemorize,
  flush: flushEvents
};

export default analytics;
