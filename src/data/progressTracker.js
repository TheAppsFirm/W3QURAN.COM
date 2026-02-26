/**
 * Progress Tracker Data Module
 * Single Responsibility: Track and manage Quran reading progress
 */

import { SURAHS, MAX_AYAHS, TOTAL_SURAHS, JUZZ } from './surahs';

// Total ayahs in the Quran
export const TOTAL_QURAN_AYAHS = 6236;

// Storage keys
const STORAGE_KEYS = {
  PROGRESS: 'quran_reading_progress',
  HISTORY: 'quran_reading_history',
  STREAK: 'quran_reading_streak',
  GOALS: 'quran_reading_goals',
};

/**
 * Default progress structure
 */
const createDefaultProgress = () => ({
  surahs: {}, // { surahId: { completedAyahs: Set, lastRead: timestamp, completed: boolean } }
  totalAyahsRead: 0,
  totalSurahsCompleted: 0,
  lastReadSurah: null,
  lastReadAyah: null,
  lastReadTimestamp: null,
  createdAt: Date.now(),
});

/**
 * Default streak structure
 */
const createDefaultStreak = () => ({
  currentStreak: 0,
  longestStreak: 0,
  lastReadDate: null,
  readDates: [], // Array of ISO date strings
});

/**
 * Default goals structure
 */
const createDefaultGoals = () => ({
  dailyAyahs: 10,
  dailyMinutes: 15,
  weeklyJuzz: 1,
  khatmahTarget: null, // Target date to complete Quran
});

/**
 * Load progress from localStorage
 */
export const loadProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert completedAyahs arrays back to Sets with validation
      if (parsed.surahs && typeof parsed.surahs === 'object') {
        Object.keys(parsed.surahs).forEach(surahId => {
          const surah = parsed.surahs[surahId];
          if (!surah || typeof surah !== 'object') {
            parsed.surahs[surahId] = { completedAyahs: new Set(), lastRead: null, completed: false };
            return;
          }
          if (Array.isArray(surah.completedAyahs)) {
            // Filter out invalid entries (non-numbers, NaN, negatives)
            const validAyahs = surah.completedAyahs.filter(a => typeof a === 'number' && a > 0 && Number.isFinite(a));
            surah.completedAyahs = new Set(validAyahs);
          } else {
            surah.completedAyahs = new Set();
          }
        });
      } else {
        parsed.surahs = {};
      }
      // Validate totalAyahsRead
      if (typeof parsed.totalAyahsRead !== 'number' || !Number.isFinite(parsed.totalAyahsRead)) {
        parsed.totalAyahsRead = 0;
      }
      return { ...createDefaultProgress(), ...parsed };
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }
  return createDefaultProgress();
};

/**
 * Save progress to localStorage
 */
export const saveProgress = (progress) => {
  try {
    // Convert Sets to arrays for JSON serialization
    const toSave = { ...progress };
    if (toSave.surahs) {
      const serializedSurahs = {};
      Object.keys(toSave.surahs).forEach(surahId => {
        serializedSurahs[surahId] = {
          ...toSave.surahs[surahId],
          completedAyahs: Array.from(toSave.surahs[surahId].completedAyahs || []),
        };
      });
      toSave.surahs = serializedSurahs;
    }
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(toSave));
    return true;
  } catch (error) {
    console.error('Error saving progress:', error);
    return false;
  }
};

/**
 * Load streak data from localStorage
 */
export const loadStreak = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.STREAK);
    if (stored) {
      return { ...createDefaultStreak(), ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Error loading streak:', error);
  }
  return createDefaultStreak();
};

/**
 * Save streak data to localStorage
 */
export const saveStreak = (streak) => {
  try {
    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streak));
    return true;
  } catch (error) {
    console.error('Error saving streak:', error);
    return false;
  }
};

/**
 * Load goals from localStorage
 */
export const loadGoals = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.GOALS);
    if (stored) {
      return { ...createDefaultGoals(), ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Error loading goals:', error);
  }
  return createDefaultGoals();
};

/**
 * Save goals to localStorage
 */
export const saveGoals = (goals) => {
  try {
    localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(goals));
    return true;
  } catch (error) {
    console.error('Error saving goals:', error);
    return false;
  }
};

/**
 * Mark an ayah as read
 */
export const markAyahRead = (surahId, ayahNumber) => {
  const progress = loadProgress();
  const streak = loadStreak();
  const today = new Date().toISOString().split('T')[0];

  // Initialize surah progress if needed
  if (!progress.surahs[surahId]) {
    progress.surahs[surahId] = {
      completedAyahs: new Set(),
      lastRead: null,
      completed: false,
    };
  }

  const surahProgress = progress.surahs[surahId];
  const wasAlreadyRead = surahProgress.completedAyahs.has(ayahNumber);

  // Add ayah to completed set
  surahProgress.completedAyahs.add(ayahNumber);
  surahProgress.lastRead = Date.now();

  // Check if surah is now complete
  const surahInfo = SURAHS.find(s => s.id === surahId);
  if (surahInfo && surahProgress.completedAyahs.size >= surahInfo.ayahs) {
    if (!surahProgress.completed) {
      surahProgress.completed = true;
      progress.totalSurahsCompleted++;
    }
  }

  // Update total count if this is a new ayah
  if (!wasAlreadyRead) {
    progress.totalAyahsRead++;
  }

  // Update last read info
  progress.lastReadSurah = surahId;
  progress.lastReadAyah = ayahNumber;
  progress.lastReadTimestamp = Date.now();

  // Update streak
  if (streak.lastReadDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (streak.lastReadDate === yesterdayStr) {
      // Continue streak
      streak.currentStreak++;
    } else if (streak.lastReadDate !== today) {
      // Reset streak (missed a day)
      streak.currentStreak = 1;
    }

    streak.lastReadDate = today;
    if (!streak.readDates.includes(today)) {
      streak.readDates.push(today);
      // Keep only last 365 days
      if (streak.readDates.length > 365) {
        streak.readDates = streak.readDates.slice(-365);
      }
    }

    // Update longest streak
    if (streak.currentStreak > streak.longestStreak) {
      streak.longestStreak = streak.currentStreak;
    }

    saveStreak(streak);
  }

  saveProgress(progress);
  return progress;
};

/**
 * Mark multiple ayahs as read (for batch operations)
 */
export const markAyahsRead = (surahId, ayahNumbers) => {
  ayahNumbers.forEach(ayahNum => markAyahRead(surahId, ayahNum));
  return loadProgress();
};

/**
 * Mark entire surah as read
 */
export const markSurahComplete = (surahId) => {
  const surahInfo = SURAHS.find(s => s.id === surahId);
  if (!surahInfo) return null;

  const ayahNumbers = Array.from({ length: surahInfo.ayahs }, (_, i) => i + 1);
  return markAyahsRead(surahId, ayahNumbers);
};

/**
 * Get progress for a specific surah
 */
export const getSurahProgress = (surahId) => {
  const progress = loadProgress();
  const surahInfo = SURAHS.find(s => s.id === surahId);

  if (!surahInfo) return null;

  const surahProgress = progress.surahs[surahId] || {
    completedAyahs: new Set(),
    lastRead: null,
    completed: false,
  };

  const completedCount = surahProgress.completedAyahs?.size || 0;

  return {
    surahId,
    surahName: surahInfo.name,
    totalAyahs: surahInfo.ayahs,
    completedAyahs: completedCount,
    percentage: Math.round((completedCount / surahInfo.ayahs) * 100),
    isComplete: surahProgress.completed,
    lastRead: surahProgress.lastRead,
  };
};

/**
 * Get overall Quran progress
 */
export const getOverallProgress = () => {
  const progress = loadProgress();
  const streak = loadStreak();
  const goals = loadGoals();

  const percentage = Math.round((progress.totalAyahsRead / TOTAL_QURAN_AYAHS) * 100);

  // Calculate Juzz progress
  const juzzProgress = {};
  JUZZ.forEach(juzz => {
    let juzzAyahsRead = 0;
    let totalJuzzAyahs = 0;

    // Count ayahs in each surah of this juzz
    SURAHS.filter(s => s.juzz === juzz.id || (Array.isArray(s.juzz) && s.juzz.includes(juzz.id)))
      .forEach(surah => {
        const surahProg = progress.surahs[surah.id];
        if (surahProg?.completedAyahs) {
          juzzAyahsRead += surahProg.completedAyahs.size;
        }
        totalJuzzAyahs += surah.ayahs;
      });

    juzzProgress[juzz.id] = {
      read: juzzAyahsRead,
      total: totalJuzzAyahs,
      percentage: totalJuzzAyahs > 0 ? Math.round((juzzAyahsRead / totalJuzzAyahs) * 100) : 0,
    };
  });

  // Calculate today's progress
  const today = new Date().toISOString().split('T')[0];
  const readToday = streak.lastReadDate === today;

  return {
    totalAyahsRead: progress.totalAyahsRead,
    totalAyahs: TOTAL_QURAN_AYAHS,
    percentage,
    totalSurahsCompleted: progress.totalSurahsCompleted,
    totalSurahs: TOTAL_SURAHS,
    currentStreak: streak.currentStreak,
    longestStreak: streak.longestStreak,
    readToday,
    lastReadSurah: progress.lastReadSurah,
    lastReadAyah: progress.lastReadAyah,
    lastReadTimestamp: progress.lastReadTimestamp,
    juzzProgress,
    goals,
  };
};

/**
 * Get reading history (last N sessions)
 */
export const getReadingHistory = (limit = 30) => {
  const progress = loadProgress();

  // Collect all surah read events
  const history = [];
  Object.entries(progress.surahs).forEach(([surahId, data]) => {
    if (data.lastRead) {
      const surahInfo = SURAHS.find(s => s.id === parseInt(surahId));
      history.push({
        surahId: parseInt(surahId),
        surahName: surahInfo?.name || `Surah ${surahId}`,
        timestamp: data.lastRead,
        ayahsRead: data.completedAyahs?.size || 0,
        isComplete: data.completed,
      });
    }
  });

  // Sort by timestamp descending
  history.sort((a, b) => b.timestamp - a.timestamp);

  return history.slice(0, limit);
};

/**
 * Get reading stats for a time period
 */
export const getReadingStats = (days = 7) => {
  const streak = loadStreak();
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days + 1);

  // Count days read in the period
  let daysRead = 0;
  const current = new Date(startDate);
  while (current <= endDate) {
    const dateStr = current.toISOString().split('T')[0];
    if (streak.readDates.includes(dateStr)) {
      daysRead++;
    }
    current.setDate(current.getDate() + 1);
  }

  return {
    period: days,
    daysRead,
    consistency: Math.round((daysRead / days) * 100),
    currentStreak: streak.currentStreak,
    longestStreak: streak.longestStreak,
  };
};

/**
 * Reset all progress (use with caution!)
 */
export const resetAllProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.STREAK);
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    return true;
  } catch (error) {
    console.error('Error resetting progress:', error);
    return false;
  }
};

/**
 * Export progress data (for backup)
 */
export const exportProgressData = () => {
  return {
    progress: loadProgress(),
    streak: loadStreak(),
    goals: loadGoals(),
    exportedAt: Date.now(),
  };
};

/**
 * Import progress data (from backup)
 */
export const importProgressData = (data) => {
  try {
    if (data.progress) saveProgress(data.progress);
    if (data.streak) saveStreak(data.streak);
    if (data.goals) saveGoals(data.goals);
    return true;
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
};
