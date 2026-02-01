/**
 * Tracking Utilities
 * Track user activity and reading progress
 */

const STORAGE_KEY = 'quran_activity_log';
const WEEKLY_KEY = 'quran_weekly_activity';

/**
 * Get today's date key (YYYY-MM-DD)
 */
function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Get the day of week index (0 = Sunday, 6 = Saturday)
 */
function getDayIndex() {
  return new Date().getDay();
}

/**
 * Log a reading session
 */
export function logReadingSession(surahId, ayahsRead = 1, durationMinutes = 0) {
  const today = getTodayKey();
  const dayIndex = getDayIndex();

  // Get existing activity log
  const stored = localStorage.getItem(STORAGE_KEY);
  const activityLog = stored ? JSON.parse(stored) : {};

  // Initialize today's entry if needed
  if (!activityLog[today]) {
    activityLog[today] = {
      ayahsRead: 0,
      surahsVisited: [],
      totalMinutes: 0,
      sessions: 0,
    };
  }

  // Update today's activity
  activityLog[today].ayahsRead += ayahsRead;
  activityLog[today].totalMinutes += durationMinutes;
  activityLog[today].sessions += 1;
  if (!activityLog[today].surahsVisited.includes(surahId)) {
    activityLog[today].surahsVisited.push(surahId);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(activityLog));

  // Update weekly activity
  updateWeeklyActivity(dayIndex, ayahsRead);

  return activityLog[today];
}

/**
 * Update weekly activity chart data
 */
function updateWeeklyActivity(dayIndex, ayahsRead) {
  const stored = localStorage.getItem(WEEKLY_KEY);
  const weeklyData = stored ? JSON.parse(stored) : {
    data: [0, 0, 0, 0, 0, 0, 0],
    weekStart: getWeekStartDate(),
  };

  // Check if we need to reset for new week
  const currentWeekStart = getWeekStartDate();
  if (weeklyData.weekStart !== currentWeekStart) {
    weeklyData.data = [0, 0, 0, 0, 0, 0, 0];
    weeklyData.weekStart = currentWeekStart;
  }

  // Update today's data
  weeklyData.data[dayIndex] += ayahsRead;

  localStorage.setItem(WEEKLY_KEY, JSON.stringify(weeklyData));
}

/**
 * Get week start date (Sunday)
 */
function getWeekStartDate() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - dayOfWeek);
  return weekStart.toISOString().split('T')[0];
}

/**
 * Get weekly activity data for chart
 */
export function getWeeklyActivity() {
  const stored = localStorage.getItem(WEEKLY_KEY);
  if (!stored) {
    return [0, 0, 0, 0, 0, 0, 0];
  }

  const weeklyData = JSON.parse(stored);

  // Check if data is from current week
  const currentWeekStart = getWeekStartDate();
  if (weeklyData.weekStart !== currentWeekStart) {
    return [0, 0, 0, 0, 0, 0, 0];
  }

  return weeklyData.data;
}

/**
 * Calculate current streak
 */
export function calculateStreak() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return 0;

  const activityLog = JSON.parse(stored);
  const dates = Object.keys(activityLog).sort().reverse();

  if (dates.length === 0) return 0;

  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // Check if today has activity
  const today = getTodayKey();
  const hasActivityToday = activityLog[today] && activityLog[today].ayahsRead > 0;

  // If no activity today, start checking from yesterday
  if (!hasActivityToday) {
    currentDate.setDate(currentDate.getDate() - 1);
  }

  // Count consecutive days
  while (true) {
    const dateKey = currentDate.toISOString().split('T')[0];
    if (activityLog[dateKey] && activityLog[dateKey].ayahsRead > 0) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Get total ayahs read all time
 */
export function getTotalAyahsRead() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return 0;

  const activityLog = JSON.parse(stored);
  return Object.values(activityLog).reduce((sum, day) => sum + (day.ayahsRead || 0), 0);
}

/**
 * Get total reading time in minutes
 */
export function getTotalReadingTime() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return 0;

  const activityLog = JSON.parse(stored);
  return Object.values(activityLog).reduce((sum, day) => sum + (day.totalMinutes || 0), 0);
}

/**
 * Get number of unique surahs read
 */
export function getUniqueSurahsRead(readingProgress) {
  // Also count from activity log
  const stored = localStorage.getItem(STORAGE_KEY);
  const fromLog = new Set();

  if (stored) {
    const activityLog = JSON.parse(stored);
    Object.values(activityLog).forEach(day => {
      (day.surahsVisited || []).forEach(id => fromLog.add(id));
    });
  }

  // Combine with reading progress
  const fromProgress = new Set(Object.keys(readingProgress || {}));

  return new Set([...fromLog, ...fromProgress]).size;
}

/**
 * Get today's stats
 */
export function getTodayStats() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { ayahsRead: 0, surahsVisited: [], totalMinutes: 0, sessions: 0 };
  }

  const activityLog = JSON.parse(stored);
  const today = getTodayKey();

  return activityLog[today] || { ayahsRead: 0, surahsVisited: [], totalMinutes: 0, sessions: 0 };
}

/**
 * Get activity for the last N days
 */
export function getRecentActivity(days = 7) {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];

  const activityLog = JSON.parse(stored);
  const results = [];

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    results.push({
      date: dateKey,
      ...activityLog[dateKey] || { ayahsRead: 0, surahsVisited: [], totalMinutes: 0, sessions: 0 },
    });
  }

  return results.reverse();
}

export default {
  logReadingSession,
  getWeeklyActivity,
  calculateStreak,
  getTotalAyahsRead,
  getTotalReadingTime,
  getUniqueSurahsRead,
  getTodayStats,
  getRecentActivity,
};
