/**
 * Hifz (Memorization) Tracker Module
 * Single Responsibility: Handle spaced repetition for Quran memorization
 *
 * Uses a simplified SM-2 (SuperMemo 2) algorithm for spaced repetition
 */

const STORAGE_KEY = 'quran_hifz_tracker';

// Default ease factor (starting difficulty)
const DEFAULT_EASE = 2.5;

// Minimum ease factor
const MIN_EASE = 1.3;

// Intervals in days
const INITIAL_INTERVALS = [1, 3, 7, 14, 30, 60, 120, 240];

// Rating levels
export const RATING = {
  AGAIN: 0,      // Complete failure - reset
  HARD: 1,       // Significant difficulty
  GOOD: 2,       // Correct with some effort
  EASY: 3,       // Perfect recall
};

// Hifz states
export const HIFZ_STATE = {
  NEW: 'new',           // Never reviewed
  LEARNING: 'learning', // In initial learning phase
  REVIEWING: 'reviewing', // In review phase
  MASTERED: 'mastered', // Mastered (interval > 30 days)
};

/**
 * Default ayah hifz data structure
 */
const createDefaultAyahData = () => ({
  state: HIFZ_STATE.NEW,
  ease: DEFAULT_EASE,
  interval: 0,          // Days until next review
  repetitions: 0,       // Successful repetitions in a row
  nextReview: null,     // Next review date (ISO string)
  lastReview: null,     // Last review date
  totalReviews: 0,      // Total times reviewed
  correctCount: 0,      // Times answered correctly
  createdAt: Date.now(),
});

/**
 * Load hifz data from localStorage
 */
export const loadHifzData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading hifz data:', error);
  }
  return {
    ayahs: {},           // { "surahId:ayahNumber": ayahData }
    dailyGoal: 5,        // Ayahs to review per day
    newPerDay: 3,        // New ayahs to add per day
    stats: {
      totalMemorized: 0,
      totalReviews: 0,
      streakDays: 0,
      lastStudyDate: null,
    },
  };
};

/**
 * Save hifz data to localStorage
 */
export const saveHifzData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving hifz data:', error);
    return false;
  }
};

/**
 * Get ayah key
 */
const getAyahKey = (surahId, ayahNumber) => `${surahId}:${ayahNumber}`;

/**
 * Calculate next interval based on rating (SM-2 algorithm)
 */
const calculateNextInterval = (currentInterval, ease, rating, repetitions) => {
  if (rating === RATING.AGAIN) {
    // Reset - start over
    return 1;
  }

  if (repetitions === 0) {
    return 1;
  } else if (repetitions === 1) {
    return 3;
  } else {
    // For subsequent reviews, multiply by ease factor
    let newInterval = currentInterval * ease;

    // Adjust based on rating
    if (rating === RATING.HARD) {
      newInterval *= 0.8;
    } else if (rating === RATING.EASY) {
      newInterval *= 1.3;
    }

    return Math.round(Math.max(1, newInterval));
  }
};

/**
 * Calculate new ease factor based on rating
 */
const calculateNewEase = (currentEase, rating) => {
  let newEase = currentEase;

  switch (rating) {
    case RATING.AGAIN:
      newEase -= 0.3;
      break;
    case RATING.HARD:
      newEase -= 0.15;
      break;
    case RATING.GOOD:
      // No change
      break;
    case RATING.EASY:
      newEase += 0.15;
      break;
  }

  return Math.max(MIN_EASE, newEase);
};

/**
 * Add ayah to hifz tracking
 */
export const addAyahToHifz = (surahId, ayahNumber) => {
  const data = loadHifzData();
  const key = getAyahKey(surahId, ayahNumber);

  if (!data.ayahs[key]) {
    data.ayahs[key] = {
      ...createDefaultAyahData(),
      surahId,
      ayahNumber,
    };
    saveHifzData(data);
  }

  return data.ayahs[key];
};

/**
 * Add multiple ayahs to hifz (range)
 */
export const addAyahRangeToHifz = (surahId, startAyah, endAyah) => {
  const data = loadHifzData();

  for (let ayah = startAyah; ayah <= endAyah; ayah++) {
    const key = getAyahKey(surahId, ayah);
    if (!data.ayahs[key]) {
      data.ayahs[key] = {
        ...createDefaultAyahData(),
        surahId,
        ayahNumber: ayah,
      };
    }
  }

  saveHifzData(data);
  return data;
};

/**
 * Remove ayah from hifz tracking
 */
export const removeAyahFromHifz = (surahId, ayahNumber) => {
  const data = loadHifzData();
  const key = getAyahKey(surahId, ayahNumber);

  if (data.ayahs[key]) {
    delete data.ayahs[key];
    saveHifzData(data);
  }

  return data;
};

/**
 * Review an ayah with rating
 */
export const reviewAyah = (surahId, ayahNumber, rating) => {
  const data = loadHifzData();
  const key = getAyahKey(surahId, ayahNumber);

  if (!data.ayahs[key]) {
    addAyahToHifz(surahId, ayahNumber);
  }

  const ayah = data.ayahs[key];
  const now = new Date();

  // Calculate new values
  const newEase = calculateNewEase(ayah.ease, rating);

  let newRepetitions;
  if (rating === RATING.AGAIN) {
    newRepetitions = 0;
    ayah.state = HIFZ_STATE.LEARNING;
  } else {
    newRepetitions = ayah.repetitions + 1;
  }

  const newInterval = calculateNextInterval(
    ayah.interval,
    newEase,
    rating,
    newRepetitions
  );

  // Calculate next review date
  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + newInterval);

  // Update ayah data
  ayah.ease = newEase;
  ayah.interval = newInterval;
  ayah.repetitions = newRepetitions;
  ayah.nextReview = nextReview.toISOString();
  ayah.lastReview = now.toISOString();
  ayah.totalReviews++;

  if (rating !== RATING.AGAIN) {
    ayah.correctCount++;
  }

  // Update state based on interval
  if (newInterval >= 30) {
    ayah.state = HIFZ_STATE.MASTERED;
  } else if (newRepetitions >= 2) {
    ayah.state = HIFZ_STATE.REVIEWING;
  } else {
    ayah.state = HIFZ_STATE.LEARNING;
  }

  // Update global stats
  data.stats.totalReviews++;

  const today = now.toISOString().split('T')[0];
  if (data.stats.lastStudyDate !== today) {
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (data.stats.lastStudyDate === yesterdayStr) {
      data.stats.streakDays++;
    } else {
      data.stats.streakDays = 1;
    }
    data.stats.lastStudyDate = today;
  }

  // Count mastered ayahs
  data.stats.totalMemorized = Object.values(data.ayahs)
    .filter(a => a.state === HIFZ_STATE.MASTERED).length;

  saveHifzData(data);
  return ayah;
};

/**
 * Get ayahs due for review today
 */
export const getDueAyahs = () => {
  const data = loadHifzData();
  const now = new Date();
  const today = now.toISOString();

  const dueAyahs = Object.values(data.ayahs)
    .filter(ayah => {
      if (!ayah.nextReview) return true; // New ayahs
      return ayah.nextReview <= today;
    })
    .sort((a, b) => {
      // Priority: learning > due > others
      if (a.state === HIFZ_STATE.LEARNING && b.state !== HIFZ_STATE.LEARNING) return -1;
      if (b.state === HIFZ_STATE.LEARNING && a.state !== HIFZ_STATE.LEARNING) return 1;

      // Then by due date
      if (!a.nextReview) return -1;
      if (!b.nextReview) return 1;
      return new Date(a.nextReview) - new Date(b.nextReview);
    });

  return dueAyahs;
};

/**
 * Get new ayahs (not yet reviewed)
 */
export const getNewAyahs = () => {
  const data = loadHifzData();

  return Object.values(data.ayahs)
    .filter(ayah => ayah.state === HIFZ_STATE.NEW && !ayah.lastReview);
};

/**
 * Get ayahs in learning phase
 */
export const getLearningAyahs = () => {
  const data = loadHifzData();

  return Object.values(data.ayahs)
    .filter(ayah => ayah.state === HIFZ_STATE.LEARNING);
};

/**
 * Get mastered ayahs
 */
export const getMasteredAyahs = () => {
  const data = loadHifzData();

  return Object.values(data.ayahs)
    .filter(ayah => ayah.state === HIFZ_STATE.MASTERED);
};

/**
 * Get hifz stats for a surah
 */
export const getSurahHifzStats = (surahId) => {
  const data = loadHifzData();

  const surahAyahs = Object.values(data.ayahs)
    .filter(a => a.surahId === surahId);

  const total = surahAyahs.length;
  const mastered = surahAyahs.filter(a => a.state === HIFZ_STATE.MASTERED).length;
  const learning = surahAyahs.filter(a => a.state === HIFZ_STATE.LEARNING).length;
  const reviewing = surahAyahs.filter(a => a.state === HIFZ_STATE.REVIEWING).length;

  return {
    total,
    mastered,
    learning,
    reviewing,
    percentage: total > 0 ? Math.round((mastered / total) * 100) : 0,
  };
};

/**
 * Get overall hifz statistics
 */
export const getHifzStats = () => {
  const data = loadHifzData();

  const allAyahs = Object.values(data.ayahs);
  const total = allAyahs.length;
  const mastered = allAyahs.filter(a => a.state === HIFZ_STATE.MASTERED).length;
  const learning = allAyahs.filter(a => a.state === HIFZ_STATE.LEARNING).length;
  const reviewing = allAyahs.filter(a => a.state === HIFZ_STATE.REVIEWING).length;
  const newCount = allAyahs.filter(a => a.state === HIFZ_STATE.NEW).length;

  // Calculate average ease
  const avgEase = total > 0
    ? allAyahs.reduce((sum, a) => sum + a.ease, 0) / total
    : DEFAULT_EASE;

  // Calculate retention rate
  const totalReviews = allAyahs.reduce((sum, a) => sum + a.totalReviews, 0);
  const correctReviews = allAyahs.reduce((sum, a) => sum + a.correctCount, 0);
  const retentionRate = totalReviews > 0
    ? Math.round((correctReviews / totalReviews) * 100)
    : 0;

  return {
    total,
    mastered,
    learning,
    reviewing,
    new: newCount,
    avgEase: Math.round(avgEase * 100) / 100,
    retentionRate,
    streakDays: data.stats.streakDays,
    totalReviews: data.stats.totalReviews,
    dailyGoal: data.dailyGoal,
    newPerDay: data.newPerDay,
  };
};

/**
 * Get today's study session
 */
export const getTodaySession = () => {
  const data = loadHifzData();
  const dueAyahs = getDueAyahs();
  const newAyahs = getNewAyahs();

  // Get reviews due
  const reviewsDue = dueAyahs.filter(a => a.lastReview).slice(0, data.dailyGoal);

  // Get new cards to learn
  const newToLearn = newAyahs.slice(0, data.newPerDay);

  return {
    reviewsDue,
    newToLearn,
    totalDue: reviewsDue.length + newToLearn.length,
  };
};

/**
 * Update daily goals
 */
export const updateDailyGoals = (dailyGoal, newPerDay) => {
  const data = loadHifzData();
  data.dailyGoal = dailyGoal;
  data.newPerDay = newPerDay;
  saveHifzData(data);
  return data;
};

/**
 * Get ayah hifz data
 */
export const getAyahHifzData = (surahId, ayahNumber) => {
  const data = loadHifzData();
  const key = getAyahKey(surahId, ayahNumber);
  return data.ayahs[key] || null;
};

/**
 * Check if ayah is in hifz
 */
export const isAyahInHifz = (surahId, ayahNumber) => {
  const data = loadHifzData();
  const key = getAyahKey(surahId, ayahNumber);
  return !!data.ayahs[key];
};

/**
 * Reset hifz data (use with caution!)
 */
export const resetHifzData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

/**
 * Export hifz data
 */
export const exportHifzData = () => {
  return {
    ...loadHifzData(),
    exportedAt: Date.now(),
  };
};

/**
 * Import hifz data
 */
export const importHifzData = (data) => {
  if (data && data.ayahs) {
    saveHifzData(data);
    return true;
  }
  return false;
};
