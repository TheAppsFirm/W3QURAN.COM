/**
 * Centralized Logging Utility for w3Quran
 * Tracks errors, performance, user actions, and app state
 *
 * Log Types:
 * - error: Crashes, exceptions, API failures
 * - performance: Slow operations, memory warnings
 * - action: User interactions, feature usage
 * - navigation: Page views, surah opens
 * - audio: Playback events, errors
 * - api: API calls, responses, failures
 */

// Browser/device detection
const getBrowserInfo = () => {
  if (typeof navigator === 'undefined') return { browser: 'unknown', os: 'unknown', device: 'unknown' };

  const ua = navigator.userAgent;

  // Browser detection
  let browser = 'unknown';
  if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'chrome';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'safari';
  else if (ua.includes('Firefox')) browser = 'firefox';
  else if (ua.includes('Edg')) browser = 'edge';

  // OS detection
  let os = 'unknown';
  if (ua.includes('Windows')) os = 'windows';
  else if (ua.includes('Mac')) os = 'macos';
  else if (ua.includes('Linux')) os = 'linux';
  else if (ua.includes('Android')) os = 'android';
  else if (/iPad|iPhone|iPod/.test(ua)) os = 'ios';

  // Device type
  let device = 'desktop';
  if (/Mobile|Android|iPhone|iPad|iPod/.test(ua)) device = 'mobile';
  if (/iPad|Tablet/.test(ua)) device = 'tablet';

  return { browser, os, device };
};

// Get memory info if available
const getMemoryInfo = () => {
  if (typeof performance !== 'undefined' && performance.memory) {
    const { usedJSHeapSize, jsHeapSizeLimit, totalJSHeapSize } = performance.memory;
    return {
      usedMB: Math.round(usedJSHeapSize / 1024 / 1024),
      totalMB: Math.round(totalJSHeapSize / 1024 / 1024),
      limitMB: Math.round(jsHeapSizeLimit / 1024 / 1024),
      usagePercent: Math.round((usedJSHeapSize / jsHeapSizeLimit) * 100),
    };
  }
  return null;
};

// Session ID for grouping logs
let sessionId = null;
const getSessionId = () => {
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  return sessionId;
};

// Log levels
const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  critical: 4,
};

// Current log level (can be configured)
let currentLogLevel = LOG_LEVELS.info;

// Queue for batching logs
let logQueue = [];
let flushTimeout = null;
const FLUSH_INTERVAL = 5000; // Flush every 5 seconds
const MAX_QUEUE_SIZE = 20; // Flush when queue reaches this size

/**
 * Send logs to server
 */
const flushLogs = async () => {
  if (logQueue.length === 0) return;

  const logsToSend = [...logQueue];
  logQueue = [];

  try {
    await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logs: logsToSend }),
      credentials: 'include',
    });
  } catch (err) {
    // If sending fails, don't lose the logs - put them back (up to a limit)
    if (logQueue.length < 50) {
      logQueue = [...logsToSend, ...logQueue].slice(0, 50);
    }
    console.warn('[Logger] Failed to send logs:', err.message);
  }
};

/**
 * Schedule a flush
 */
const scheduleFlush = () => {
  if (flushTimeout) return;
  flushTimeout = setTimeout(() => {
    flushTimeout = null;
    flushLogs();
  }, FLUSH_INTERVAL);
};

/**
 * Add log to queue
 */
const queueLog = (logEntry) => {
  logQueue.push(logEntry);

  // Immediate flush for errors/critical
  if (logEntry.level === 'error' || logEntry.level === 'critical') {
    flushLogs();
  } else if (logQueue.length >= MAX_QUEUE_SIZE) {
    flushLogs();
  } else {
    scheduleFlush();
  }
};

/**
 * Core logging function
 */
const log = (level, type, message, data = {}) => {
  if (LOG_LEVELS[level] < currentLogLevel) return;

  const browserInfo = getBrowserInfo();
  const memoryInfo = getMemoryInfo();

  const logEntry = {
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    level,
    type,
    message,
    ...browserInfo,
    memory: memoryInfo,
    url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...data,
  };

  // Console output in development
  if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
    const consoleMethod = level === 'error' || level === 'critical' ? 'error' :
                          level === 'warn' ? 'warn' : 'log';
    console[consoleMethod](`[${type.toUpperCase()}]`, message, data);
  }

  // Queue for server
  queueLog(logEntry);

  return logEntry;
};

/**
 * Convenience methods
 */
export const logger = {
  // Set log level
  setLevel: (level) => {
    if (LOG_LEVELS[level] !== undefined) {
      currentLogLevel = LOG_LEVELS[level];
    }
  },

  // Force flush logs now
  flush: flushLogs,

  // Error logging
  error: (message, data = {}) => log('error', 'error', message, data),
  critical: (message, data = {}) => log('critical', 'error', message, data),

  // Performance logging
  performance: (message, data = {}) => log('info', 'performance', message, data),
  slow: (operation, durationMs, data = {}) => {
    if (durationMs > 1000) {
      log('warn', 'performance', `Slow operation: ${operation}`, { durationMs, ...data });
    }
  },

  // Memory warning
  memoryWarning: (context = '') => {
    const memory = getMemoryInfo();
    if (memory && memory.usagePercent > 70) {
      log('warn', 'memory', `High memory usage${context ? `: ${context}` : ''}`, { memory });
    }
  },

  // User actions
  action: (action, data = {}) => log('info', 'action', action, data),

  // Navigation
  navigation: (page, data = {}) => log('info', 'navigation', `Viewed ${page}`, data),
  surahOpen: (surahId, surahName) => log('info', 'navigation', `Opened Surah ${surahId}`, { surahId, surahName }),
  surahClose: (surahId, ayahReached) => log('info', 'navigation', `Closed Surah ${surahId}`, { surahId, ayahReached }),

  // Audio events
  audioPlay: (surahId, ayahNum, reciter) => log('info', 'audio', 'Audio play', { surahId, ayahNum, reciter }),
  audioError: (surahId, ayahNum, error) => log('error', 'audio', 'Audio error', { surahId, ayahNum, error }),
  audioComplete: (surahId, ayahsPlayed) => log('info', 'audio', 'Audio complete', { surahId, ayahsPlayed }),

  // API calls
  apiCall: (endpoint, method = 'GET') => log('debug', 'api', `API call: ${method} ${endpoint}`, { endpoint, method }),
  apiError: (endpoint, status, error) => log('error', 'api', `API error: ${endpoint}`, { endpoint, status, error }),
  apiSlow: (endpoint, durationMs) => {
    if (durationMs > 2000) {
      log('warn', 'api', `Slow API: ${endpoint}`, { endpoint, durationMs });
    }
  },

  // Feature usage
  feature: (featureName, data = {}) => log('info', 'feature', `Used ${featureName}`, { feature: featureName, ...data }),

  // Component lifecycle (for debugging)
  componentMount: (name, data = {}) => log('debug', 'component', `Mount: ${name}`, data),
  componentError: (name, error) => log('error', 'component', `Error in ${name}`, { error: error?.message, stack: error?.stack }),

  // Crash tracking
  crash: (error, context = {}) => {
    log('critical', 'crash', error?.message || 'Unknown crash', {
      stack: error?.stack,
      ...context,
    });
    // Immediate flush for crashes
    flushLogs();
  },

  // Talk to Quran specific
  talkToQuran: {
    start: (method) => log('info', 'talk_to_quran', `Started: ${method}`, { method }),
    transcribe: (duration) => log('info', 'talk_to_quran', 'Transcribed', { durationSeconds: duration }),
    error: (error, method) => log('error', 'talk_to_quran', 'Error', { error, method }),
    response: (responseLength) => log('info', 'talk_to_quran', 'Got response', { responseLength }),
  },

  // Treebank/Grammar
  treebank: {
    open: (surahId, ayahNum) => log('info', 'treebank', 'Opened treebank', { surahId, ayahNum }),
    loadTime: (surahId, durationMs) => log('info', 'treebank', 'Loaded treebank', { surahId, durationMs }),
    error: (surahId, error) => log('error', 'treebank', 'Treebank error', { surahId, error }),
  },
};

// Global error handlers
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    logger.crash(event.error || new Error(event.message), {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    logger.crash(event.reason, { type: 'unhandledRejection' });
  });

  // Flush logs before page unload
  window.addEventListener('beforeunload', () => {
    flushLogs();
  });

  // Periodic memory check
  setInterval(() => {
    logger.memoryWarning('periodic check');
  }, 30000);
}

export default logger;
