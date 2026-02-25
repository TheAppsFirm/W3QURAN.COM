/**
 * GamificationContext
 * Single provider for all gamification state, sync, and notifications.
 * Replaces per-component useGamification() hook instances.
 */

import { createContext, useContext, useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useAuth } from './AuthContext';
import {
  getGamificationData, saveGamificationData, getLevelInfo,
  addXP, updateStreak, checkAndUnlockAchievements,
  generateDailyChallenges, updateChallengeProgress,
  recordVerseRead, recordSurahComplete, recordShare,
  recordMapVisit, recordAICompanionUse, recordMeditationSession,
  recordCapsuleCreated, recordVoiceCommand,
  recordVerseListened, recordSurahListened,
  XP_REWARDS, ACHIEVEMENTS,
} from '../data/gamificationSystem';

const GamificationContext = createContext(null);

const NOTIF_XP = 'xp';
const NOTIF_ACHIEVEMENT = 'achievement';
const NOTIF_LEVEL_UP = 'level_up';
const NOTIF_STREAK = 'streak';

let notifIdCounter = 0;

/** Merge server and local gamification data — take the "best" of each */
function mergeData(local, server) {
  if (!server) return local;
  if (!local) return server;

  const merged = { ...local };

  if ((server.xp || 0) > (merged.xp || 0)) {
    merged.xp = server.xp;
    merged.level = server.level;
  }

  const achieveSet = new Set([...(merged.achievements || []), ...(server.achievements || [])]);
  merged.achievements = [...achieveSet];

  if ((server.streaks?.current || 0) > (merged.streaks?.current || 0)) {
    merged.streaks = { ...merged.streaks, ...server.streaks };
  }
  if ((server.streaks?.best || 0) > (merged.streaks?.best || 0)) {
    merged.streaks = { ...merged.streaks, best: server.streaks.best };
  }

  if (server.stats) {
    merged.stats = { ...merged.stats };
    for (const [key, val] of Object.entries(server.stats)) {
      if (Array.isArray(val)) {
        merged.stats[key] = [...new Set([...(merged.stats[key] || []), ...val])];
      } else if (typeof val === 'number') {
        merged.stats[key] = Math.max(merged.stats[key] || 0, val);
      }
    }
  }

  if (server.dailyChallenges?.length > 0) {
    const serverDate = server.dailyChallenges[0]?.date;
    const localDate = merged.dailyChallenges?.[0]?.date;
    const today = new Date().toDateString();
    if (serverDate === today) {
      merged.dailyChallenges = server.dailyChallenges;
    } else if (localDate !== today) {
      merged.dailyChallenges = [];
    }
  }

  return merged;
}

// Default return for consumers outside provider
const DEFAULT_LEVEL_INFO = getLevelInfo(0);
const FALLBACK = {
  xp: 0, level: 1, levelInfo: DEFAULT_LEVEL_INFO,
  streak: { current: 0, best: 0 },
  achievements: [], dailyChallenges: [], stats: {},
  recordAction: () => null,
  syncToServer: () => {},
  notifications: [],
  dismissNotification: () => {},
  isActive: false,
  ACHIEVEMENTS,
};

export function GamificationProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState(() => getGamificationData());
  const [notifications, setNotifications] = useState([]);

  // Refs for stable callbacks (no state in deps)
  const syncingRef = useRef(false);
  const recentVerses = useRef(new Set());
  const xpBatch = useRef({ amount: 0, timer: null });

  const isActive = isAuthenticated;

  // --- Notifications ---

  const pushNotification = useCallback((type, notifData) => {
    const id = `notif_${++notifIdCounter}`;
    setNotifications(prev => [...prev, { id, type, data: notifData, timestamp: Date.now() }]);
  }, []);

  const pushXPNotification = useCallback((amount) => {
    xpBatch.current.amount += amount;
    if (xpBatch.current.timer) return;
    xpBatch.current.timer = setTimeout(() => {
      if (xpBatch.current.amount > 0) {
        pushNotification(NOTIF_XP, { amount: xpBatch.current.amount });
      }
      xpBatch.current.amount = 0;
      xpBatch.current.timer = null;
    }, 3000);
  }, [pushNotification]);

  const dismissNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // --- Server Sync (stable — no syncing state in deps) ---

  const syncToServer = useCallback(async () => {
    if (!isAuthenticated || syncingRef.current) return;
    syncingRef.current = true;
    try {
      const currentData = getGamificationData();
      await fetch('/api/user/sync', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataType: 'gamification', data: currentData }),
      });
    } catch {
      // Fail silently — data stays in localStorage
    } finally {
      syncingRef.current = false;
    }
  }, [isAuthenticated]);

  // Load from server on auth
  useEffect(() => {
    if (!isAuthenticated) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/user/sync?type=gamification', { credentials: 'include' });
        if (!res.ok || cancelled) return;
        const { data: serverResponse } = await res.json();
        if (!cancelled && serverResponse?.gamification?.data) {
          const localData = getGamificationData();
          const merged = mergeData(localData, serverResponse.gamification.data);
          saveGamificationData(merged);
          setData(merged);
        }
      } catch {
        // Use local data
      }
    })();
    return () => { cancelled = true; };
  }, [isAuthenticated]);

  // Auto-sync every 60s (stable deps — no thrashing)
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(syncToServer, 60000);
    return () => clearInterval(interval);
  }, [isAuthenticated, syncToServer]);

  // Clear verse dedup set every 30s
  useEffect(() => {
    const interval = setInterval(() => recentVerses.current.clear(), 30000);
    return () => clearInterval(interval);
  }, []);

  // Clean up XP batch timer on unmount
  useEffect(() => {
    return () => {
      if (xpBatch.current.timer) clearTimeout(xpBatch.current.timer);
    };
  }, []);

  // Daily login trigger — fires once per day when auth becomes active
  useEffect(() => {
    if (!isActive) return;
    const d = getGamificationData();
    const today = new Date().toDateString();
    if (d.streaks?.lastActiveDate === today) return;

    addXP(XP_REWARDS.dailyLogin, 'Daily login');
    const streakResult = updateStreak();
    generateDailyChallenges();

    if (streakResult.updated && [3, 7, 30, 100].includes(streakResult.current)) {
      pushNotification(NOTIF_STREAK, { days: streakResult.current });
    }

    // Refresh state + sync
    setData(getGamificationData());
    syncToServer();
  }, [isActive, pushNotification, syncToServer]);

  // --- Process results after any gamification action ---

  const processResults = useCallback((beforeXP) => {
    const afterData = getGamificationData();
    const beforeLevel = getLevelInfo(beforeXP).current.level;
    const afterLevel = getLevelInfo(afterData.xp).current.level;
    const xpGained = afterData.xp - beforeXP;

    if (xpGained > 0) pushXPNotification(xpGained);

    if (afterLevel > beforeLevel) {
      pushNotification(NOTIF_LEVEL_UP, {
        oldLevel: getLevelInfo(beforeXP).current,
        newLevel: getLevelInfo(afterData.xp).current,
      });
    }

    const newAchievements = checkAndUnlockAchievements();
    let hasNewAchievement = false;
    for (const a of newAchievements) {
      if (a.unlocked) {
        pushNotification(NOTIF_ACHIEVEMENT, a);
        hasNewAchievement = true;
      }
    }

    // Single sync if anything meaningful happened
    if (afterLevel > beforeLevel || hasNewAchievement) {
      syncToServer();
    }

    setData(afterData);
  }, [pushXPNotification, pushNotification, syncToServer]);

  // --- Action dispatcher ---

  const recordAction = useCallback((actionType, payload = {}) => {
    if (!isActive) return null;

    const beforeXP = getGamificationData().xp;

    switch (actionType) {
      case 'verse_read': {
        const key = `${payload.surahId}:${payload.ayahNum}`;
        if (recentVerses.current.has(key)) return null;
        recentVerses.current.add(key);
        recordVerseRead(payload.surahId, payload.ayahNum);
        break;
      }
      case 'surah_complete':
        recordSurahComplete(payload.surahId);
        break;
      case 'listen_verse':
        recordVerseListened(payload.surahId, payload.ayahNum);
        break;
      case 'listen_surah':
        recordSurahListened(payload.surahId);
        break;
      case 'quiz_correct':
        addXP(10, 'Quiz correct answer');
        updateChallengeProgress('read_verses', 0);
        break;
      case 'share':
        recordShare();
        break;
      case 'bookmark':
        addXP(XP_REWARDS.bookmarkVerse, 'Bookmarked verse');
        break;
      case 'ai_companion':
        recordAICompanionUse();
        break;
      case 'meditation':
        recordMeditationSession();
        break;
      case 'capsule':
        recordCapsuleCreated();
        break;
      case 'voice_command':
        recordVoiceCommand();
        break;
      case 'map_visit':
        recordMapVisit(payload.locationId);
        break;
      default:
        return null;
    }

    processResults(beforeXP);
  }, [isActive, processResults]);

  // --- Derived values ---

  const xp = data.xp || 0;
  const level = data.level || 1;
  const levelInfo = getLevelInfo(xp);
  const streak = data.streaks || { current: 0, best: 0 };
  const achievements = data.achievements || [];
  const dailyChallenges = data.dailyChallenges || [];
  const stats = data.stats || {};

  const value = useMemo(() => ({
    xp, level, levelInfo, streak, achievements, dailyChallenges, stats,
    recordAction, syncToServer,
    notifications, dismissNotification,
    isActive, ACHIEVEMENTS,
  }), [xp, level, levelInfo, streak, achievements, dailyChallenges, stats,
       recordAction, syncToServer, notifications, dismissNotification, isActive]);

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) return FALLBACK;
  return context;
}
