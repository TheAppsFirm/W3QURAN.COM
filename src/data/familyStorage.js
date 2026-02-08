/**
 * Family Storage
 * Local storage for family circle data
 */

const STORAGE_KEY = 'w3quran_family_circle';

// Avatar options
export const AVATARS = {
  adults: [
    { id: 'man1', emoji: '👨', label: 'Man' },
    { id: 'woman1', emoji: '👩', label: 'Woman' },
    { id: 'man2', emoji: '👨‍🦱', label: 'Man (curly)' },
    { id: 'woman2', emoji: '👩‍🦱', label: 'Woman (curly)' },
    { id: 'man3', emoji: '👳', label: 'Man (turban)' },
    { id: 'woman3', emoji: '🧕', label: 'Woman (hijab)' },
  ],
  kids: [
    { id: 'boy1', emoji: '👦', label: 'Boy' },
    { id: 'girl1', emoji: '👧', label: 'Girl' },
    { id: 'boy2', emoji: '👦🏽', label: 'Boy (medium)' },
    { id: 'girl2', emoji: '👧🏽', label: 'Girl (medium)' },
    { id: 'baby1', emoji: '👶', label: 'Baby' },
    { id: 'baby2', emoji: '👶🏽', label: 'Baby (medium)' },
  ],
};

// Achievements definitions
export const ACHIEVEMENTS = {
  first_surah: {
    id: 'first_surah',
    name: 'First Surah',
    nameAr: 'السورة الأولى',
    description: 'Read your first complete surah',
    icon: 'BookOpen',
    color: '#10B981',
    points: 10,
  },
  week_streak: {
    id: 'week_streak',
    name: 'Week Warrior',
    nameAr: 'محارب الأسبوع',
    description: 'Read Quran for 7 consecutive days',
    icon: 'Fire',
    color: '#F59E0B',
    points: 25,
  },
  five_surahs: {
    id: 'five_surahs',
    name: 'Explorer',
    nameAr: 'مستكشف',
    description: 'Read 5 different surahs',
    icon: 'Compass',
    color: '#3B82F6',
    points: 20,
  },
  quiz_master: {
    id: 'quiz_master',
    name: 'Quiz Master',
    nameAr: 'سيد المسابقات',
    description: 'Get 10 quiz questions correct',
    icon: 'Trophy',
    color: '#8B5CF6',
    points: 30,
  },
  memorizer: {
    id: 'memorizer',
    name: 'Memorizer',
    nameAr: 'حافظ',
    description: 'Memorize 10 verses',
    icon: 'Brain',
    color: '#EC4899',
    points: 50,
  },
  family_reader: {
    id: 'family_reader',
    name: 'Family Reader',
    nameAr: 'قارئ العائلة',
    description: 'Complete a family reading session',
    icon: 'Users',
    color: '#06B6D4',
    points: 15,
  },
  juz_complete: {
    id: 'juz_complete',
    name: 'Juz Champion',
    nameAr: 'بطل الجزء',
    description: 'Complete reading a full juz',
    icon: 'Award',
    color: '#22C55E',
    points: 100,
  },
};

// Quiz categories for kids
export const KIDS_QUIZ_CATEGORIES = [
  { id: 'prophets', name: 'Prophet Stories', icon: 'Book', color: '#10B981' },
  { id: 'vocabulary', name: 'Arabic Words', icon: 'Type', color: '#3B82F6' },
  { id: 'surahs', name: 'Surah Names', icon: 'BookOpen', color: '#8B5CF6' },
  { id: 'basics', name: 'Islamic Basics', icon: 'Star', color: '#F59E0B' },
];

// Default family data
const DEFAULT_FAMILY_DATA = {
  familyId: null,
  familyName: '',
  members: [],
  sharedGoals: [],
  readingSessions: [],
  createdAt: null,
};

// Generate unique ID
const generateId = () => `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Get stored family data
export const getFamilyData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_FAMILY_DATA;
  } catch {
    return DEFAULT_FAMILY_DATA;
  }
};

// Save family data
export const saveFamilyData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    console.error('Failed to save family data');
    return false;
  }
};

// Create a new family
export const createFamily = (name) => {
  const data = {
    ...DEFAULT_FAMILY_DATA,
    familyId: generateId(),
    familyName: name,
    createdAt: new Date().toISOString(),
  };
  saveFamilyData(data);
  return data;
};

// Add a family member
export const addFamilyMember = ({
  name,
  avatar,
  age,
  isKid = false,
}) => {
  const data = getFamilyData();

  const member = {
    id: generateId(),
    name,
    avatar,
    age,
    isKid,
    progress: {
      surahsRead: [],
      versesRead: 0,
      quizScores: [],
      timeSpent: 0,
      streak: 0,
      lastActive: null,
    },
    achievements: [],
    joinedAt: new Date().toISOString(),
  };

  data.members.push(member);
  saveFamilyData(data);
  return member;
};

// Update member
export const updateFamilyMember = (memberId, updates) => {
  const data = getFamilyData();
  const memberIndex = data.members.findIndex(m => m.id === memberId);

  if (memberIndex !== -1) {
    data.members[memberIndex] = { ...data.members[memberIndex], ...updates };
    saveFamilyData(data);
    return data.members[memberIndex];
  }
  return null;
};

// Remove member
export const removeFamilyMember = (memberId) => {
  const data = getFamilyData();
  data.members = data.members.filter(m => m.id !== memberId);
  saveFamilyData(data);
  return true;
};

// Record member progress
export const recordMemberProgress = (memberId, {
  surahId,
  versesRead,
  timeSpent,
  quizScore,
}) => {
  const data = getFamilyData();
  const memberIndex = data.members.findIndex(m => m.id === memberId);

  if (memberIndex === -1) return null;

  const member = data.members[memberIndex];
  const today = new Date().toDateString();
  const lastActive = member.progress.lastActive ? new Date(member.progress.lastActive).toDateString() : null;

  // Update progress
  if (surahId && !member.progress.surahsRead.includes(surahId)) {
    member.progress.surahsRead.push(surahId);
  }

  if (versesRead) {
    member.progress.versesRead += versesRead;
  }

  if (timeSpent) {
    member.progress.timeSpent += timeSpent;
  }

  if (quizScore !== undefined) {
    member.progress.quizScores.push({
      score: quizScore,
      date: new Date().toISOString(),
    });
  }

  // Update streak
  if (lastActive === today) {
    // Already active today
  } else if (lastActive === new Date(Date.now() - 86400000).toDateString()) {
    // Active yesterday, increment streak
    member.progress.streak += 1;
  } else if (lastActive !== today) {
    // Gap in activity, reset streak
    member.progress.streak = 1;
  }

  member.progress.lastActive = new Date().toISOString();

  // Check for achievements
  checkAchievements(member);

  data.members[memberIndex] = member;
  saveFamilyData(data);
  return member;
};

// Check and award achievements
const checkAchievements = (member) => {
  const earned = member.achievements;
  const progress = member.progress;

  // First surah
  if (progress.surahsRead.length >= 1 && !earned.includes('first_surah')) {
    member.achievements.push('first_surah');
  }

  // Week streak
  if (progress.streak >= 7 && !earned.includes('week_streak')) {
    member.achievements.push('week_streak');
  }

  // Five surahs
  if (progress.surahsRead.length >= 5 && !earned.includes('five_surahs')) {
    member.achievements.push('five_surahs');
  }

  // Quiz master
  const correctAnswers = progress.quizScores.reduce((sum, q) => sum + (q.score || 0), 0);
  if (correctAnswers >= 10 && !earned.includes('quiz_master')) {
    member.achievements.push('quiz_master');
  }
};

// Create a shared goal
export const createSharedGoal = ({
  type, // 'complete_surah' | 'daily_reading' | 'memorize'
  surahId,
  target,
  deadline,
}) => {
  const data = getFamilyData();

  const goal = {
    id: generateId(),
    type,
    surahId,
    target,
    deadline: deadline?.toISOString(),
    progress: 0,
    completed: false,
    createdAt: new Date().toISOString(),
    memberProgress: {},
  };

  data.sharedGoals.push(goal);
  saveFamilyData(data);
  return goal;
};

// Update goal progress
export const updateGoalProgress = (goalId, memberId, progress) => {
  const data = getFamilyData();
  const goalIndex = data.sharedGoals.findIndex(g => g.id === goalId);

  if (goalIndex === -1) return null;

  data.sharedGoals[goalIndex].memberProgress[memberId] = progress;

  // Calculate overall progress
  const memberProgresses = Object.values(data.sharedGoals[goalIndex].memberProgress);
  if (memberProgresses.length > 0) {
    data.sharedGoals[goalIndex].progress = memberProgresses.reduce((a, b) => a + b, 0) / memberProgresses.length;
  }

  // Check if completed
  if (data.sharedGoals[goalIndex].progress >= 100) {
    data.sharedGoals[goalIndex].completed = true;
  }

  saveFamilyData(data);
  return data.sharedGoals[goalIndex];
};

// Record a reading session
export const recordReadingSession = ({
  surahId,
  startVerse,
  endVerse,
  participants,
  duration,
}) => {
  const data = getFamilyData();

  const session = {
    id: generateId(),
    surahId,
    startVerse,
    endVerse,
    participants,
    duration,
    date: new Date().toISOString(),
  };

  data.readingSessions.push(session);

  // Award family reader achievement to participants
  participants.forEach(memberId => {
    const memberIndex = data.members.findIndex(m => m.id === memberId);
    if (memberIndex !== -1 && !data.members[memberIndex].achievements.includes('family_reader')) {
      data.members[memberIndex].achievements.push('family_reader');
    }
  });

  saveFamilyData(data);
  return session;
};

// Get family leaderboard
export const getFamilyLeaderboard = () => {
  const data = getFamilyData();

  return data.members
    .map(member => ({
      id: member.id,
      name: member.name,
      avatar: member.avatar,
      isKid: member.isKid,
      points: calculatePoints(member),
      surahsRead: member.progress.surahsRead.length,
      streak: member.progress.streak,
      achievements: member.achievements.length,
    }))
    .sort((a, b) => b.points - a.points);
};

// Calculate member points
const calculatePoints = (member) => {
  let points = 0;

  // Surahs read: 5 points each
  points += member.progress.surahsRead.length * 5;

  // Streak: 2 points per day
  points += member.progress.streak * 2;

  // Quiz scores
  const totalQuizPoints = member.progress.quizScores.reduce((sum, q) => sum + (q.score || 0), 0);
  points += totalQuizPoints;

  // Achievements
  member.achievements.forEach(achId => {
    const ach = ACHIEVEMENTS[achId];
    if (ach) points += ach.points;
  });

  return points;
};

// Reset family data
export const resetFamilyData = () => {
  localStorage.removeItem(STORAGE_KEY);
  return DEFAULT_FAMILY_DATA;
};

export default {
  AVATARS,
  ACHIEVEMENTS,
  KIDS_QUIZ_CATEGORIES,
  getFamilyData,
  saveFamilyData,
  createFamily,
  addFamilyMember,
  updateFamilyMember,
  removeFamilyMember,
  recordMemberProgress,
  createSharedGoal,
  updateGoalProgress,
  recordReadingSession,
  getFamilyLeaderboard,
  resetFamilyData,
};
