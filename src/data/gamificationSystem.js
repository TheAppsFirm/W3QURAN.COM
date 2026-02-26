/**
 * Gamification System
 * Global XP, levels, achievements, daily challenges, and streaks
 */

const STORAGE_KEY = 'w3quran_gamification';

// ===========================================
// LEVELS & XP
// ===========================================

export const LEVELS = [
  { level: 1, name: 'Seeker', nameAr: 'طالب', xpRequired: 0, color: '#6B7280' },
  { level: 2, name: 'Reader', nameAr: 'قارئ', xpRequired: 100, color: '#10B981' },
  { level: 3, name: 'Student', nameAr: 'طالب علم', xpRequired: 300, color: '#3B82F6' },
  { level: 4, name: 'Scholar', nameAr: 'عالم', xpRequired: 600, color: '#8B5CF6' },
  { level: 5, name: 'Teacher', nameAr: 'معلم', xpRequired: 1000, color: '#F59E0B' },
  { level: 6, name: 'Guide', nameAr: 'مرشد', xpRequired: 1500, color: '#EC4899' },
  { level: 7, name: 'Master', nameAr: 'أستاذ', xpRequired: 2500, color: '#EF4444' },
  { level: 8, name: 'Hafiz', nameAr: 'حافظ', xpRequired: 4000, color: '#14B8A6' },
  { level: 9, name: 'Sage', nameAr: 'حكيم', xpRequired: 6000, color: '#6366F1' },
  { level: 10, name: 'Luminary', nameAr: 'نور', xpRequired: 10000, color: '#FFD700' },
];

// XP rewards for different actions
export const XP_REWARDS = {
  // Reading
  readVerse: 1,
  readSurah: 10,
  readJuz: 50,

  // Memorization
  memorizeVerse: 5,
  reviewVerse: 2,
  masterVerse: 10,

  // Features
  useAICompanion: 3,
  useVisualization: 2,
  createTimeCapsule: 5,
  useVoiceControl: 2,
  exploreMap: 3,
  completeMeditation: 10,
  familySession: 15,

  // Audio Listening
  listenVerse: 1,
  listenSurah: 5,

  // Engagement
  dailyLogin: 5,
  completeChallenge: 20,
  shareVerse: 3,
  bookmarkVerse: 1,

  // Streaks
  streakBonus3: 10,
  streakBonus7: 25,
  streakBonus30: 100,
};

// ===========================================
// ACHIEVEMENTS
// ===========================================

export const ACHIEVEMENTS = {
  // Reading Achievements
  first_verse: {
    id: 'first_verse',
    name: 'First Step',
    nameAr: 'الخطوة الأولى',
    description: 'Read your first verse',
    icon: 'BookOpen',
    color: '#10B981',
    xp: 10,
    category: 'reading',
  },
  surah_complete: {
    id: 'surah_complete',
    name: 'Surah Master',
    nameAr: 'ختم السورة',
    description: 'Complete reading a full surah',
    icon: 'Award',
    color: '#3B82F6',
    xp: 25,
    category: 'reading',
  },
  juz_complete: {
    id: 'juz_complete',
    name: 'Juz Champion',
    nameAr: 'بطل الجزء',
    description: 'Complete reading a full juz',
    icon: 'Trophy',
    color: '#F59E0B',
    xp: 100,
    category: 'reading',
  },
  quran_complete: {
    id: 'quran_complete',
    name: 'Khatm Al-Quran',
    nameAr: 'ختم القرآن',
    description: 'Complete reading the entire Quran',
    icon: 'Crown',
    color: '#FFD700',
    xp: 1000,
    category: 'reading',
  },

  // Streak Achievements
  streak_3: {
    id: 'streak_3',
    name: 'Consistent',
    nameAr: 'مثابر',
    description: 'Maintain a 3-day reading streak',
    icon: 'Fire',
    color: '#EF4444',
    xp: 15,
    category: 'streak',
  },
  streak_7: {
    id: 'streak_7',
    name: 'Week Warrior',
    nameAr: 'محارب الأسبوع',
    description: 'Maintain a 7-day reading streak',
    icon: 'Fire',
    color: '#F59E0B',
    xp: 30,
    category: 'streak',
  },
  streak_30: {
    id: 'streak_30',
    name: 'Monthly Master',
    nameAr: 'سيد الشهر',
    description: 'Maintain a 30-day reading streak',
    icon: 'Fire',
    color: '#8B5CF6',
    xp: 150,
    category: 'streak',
  },
  streak_100: {
    id: 'streak_100',
    name: 'Devoted',
    nameAr: 'مخلص',
    description: 'Maintain a 100-day reading streak',
    icon: 'Star',
    color: '#FFD700',
    xp: 500,
    category: 'streak',
  },

  // Feature Achievements
  ai_seeker: {
    id: 'ai_seeker',
    name: 'Guidance Seeker',
    nameAr: 'طالب الهداية',
    description: 'Use AI Companion 10 times',
    icon: 'HeartHandshake',
    color: '#14B8A6',
    xp: 25,
    category: 'features',
  },
  explorer: {
    id: 'explorer',
    name: 'Explorer',
    nameAr: 'مستكشف',
    description: 'Discover 5 locations on the Prophetic Map',
    icon: 'Globe3D',
    color: '#0EA5E9',
    xp: 30,
    category: 'features',
  },
  world_traveler: {
    id: 'world_traveler',
    name: 'World Traveler',
    nameAr: 'رحالة',
    description: 'Unlock all locations on the Prophetic Map',
    icon: 'Map',
    color: '#6366F1',
    xp: 100,
    category: 'features',
  },
  meditator: {
    id: 'meditator',
    name: 'Inner Peace',
    nameAr: 'السكينة',
    description: 'Complete 5 meditation sessions',
    icon: 'Breath',
    color: '#8B5CF6',
    xp: 40,
    category: 'features',
  },
  time_keeper: {
    id: 'time_keeper',
    name: 'Time Keeper',
    nameAr: 'حافظ الذكريات',
    description: 'Create 5 time capsules',
    icon: 'Capsule',
    color: '#F472B6',
    xp: 25,
    category: 'features',
  },
  voice_master: {
    id: 'voice_master',
    name: 'Voice Master',
    nameAr: 'سيد الصوت',
    description: 'Use 20 voice commands',
    icon: 'Speech',
    color: '#22C55E',
    xp: 30,
    category: 'features',
  },

  // Memorization Achievements
  first_memorize: {
    id: 'first_memorize',
    name: 'Memory Seed',
    nameAr: 'بذرة الحفظ',
    description: 'Memorize your first verse',
    icon: 'Brain',
    color: '#EC4899',
    xp: 15,
    category: 'hifz',
  },
  memorize_10: {
    id: 'memorize_10',
    name: 'Growing Memory',
    nameAr: 'ذاكرة نامية',
    description: 'Memorize 10 verses',
    icon: 'Brain',
    color: '#8B5CF6',
    xp: 50,
    category: 'hifz',
  },
  memorize_100: {
    id: 'memorize_100',
    name: 'Strong Memory',
    nameAr: 'ذاكرة قوية',
    description: 'Memorize 100 verses',
    icon: 'Brain',
    color: '#F59E0B',
    xp: 200,
    category: 'hifz',
  },

  // Social Achievements
  family_leader: {
    id: 'family_leader',
    name: 'Family Leader',
    nameAr: 'قائد العائلة',
    description: 'Create a family circle',
    icon: 'Family',
    color: '#F59E0B',
    xp: 20,
    category: 'social',
  },
  generous_sharer: {
    id: 'generous_sharer',
    name: 'Generous Sharer',
    nameAr: 'كريم المشاركة',
    description: 'Share 10 verses',
    icon: 'Share',
    color: '#10B981',
    xp: 25,
    category: 'social',
  },

  // Listening Achievements
  first_listen: {
    id: 'first_listen',
    name: 'First Recitation',
    nameAr: 'أول استماع',
    description: 'Listen to a complete surah',
    icon: 'Headphones',
    color: '#0EA5E9',
    xp: 10,
    category: 'listening',
  },
  listen_10: {
    id: 'listen_10',
    name: 'Devoted Listener',
    nameAr: 'مستمع مخلص',
    description: 'Listen to 10 complete surahs',
    icon: 'Headphones',
    color: '#6366F1',
    xp: 50,
    category: 'listening',
  },
  listen_juz: {
    id: 'listen_juz',
    name: 'Juz Listener',
    nameAr: 'مستمع الجزء',
    description: 'Listen to a complete juz',
    icon: 'Music',
    color: '#F59E0B',
    xp: 100,
    category: 'listening',
  },
};

// ===========================================
// DAILY CHALLENGES
// ===========================================

export const CHALLENGE_TEMPLATES = [
  {
    id: 'read_verses',
    type: 'reading',
    name: 'Daily Reading',
    nameAr: 'القراءة اليومية',
    description: 'Read {target} verses today',
    icon: 'BookOpen',
    color: '#10B981',
    targets: [5, 10, 20, 30],
    xpReward: [10, 15, 25, 40],
  },
  {
    id: 'use_meditation',
    type: 'feature',
    name: 'Peaceful Mind',
    nameAr: 'السكينة',
    description: 'Complete a meditation session',
    icon: 'Breath',
    color: '#8B5CF6',
    targets: [1],
    xpReward: [15],
  },
  {
    id: 'explore_map',
    type: 'feature',
    name: 'Explorer',
    nameAr: 'استكشاف',
    description: 'Visit {target} location(s) on the map',
    icon: 'Globe3D',
    color: '#0EA5E9',
    targets: [1, 2, 3],
    xpReward: [10, 15, 25],
  },
  {
    id: 'memorize_verses',
    type: 'hifz',
    name: 'Memory Builder',
    nameAr: 'بناء الذاكرة',
    description: 'Review {target} verses',
    icon: 'Brain',
    color: '#EC4899',
    targets: [3, 5, 10],
    xpReward: [10, 20, 35],
  },
  {
    id: 'use_companion',
    type: 'feature',
    name: 'Seek Guidance',
    nameAr: 'طلب الهداية',
    description: 'Ask the AI Companion for guidance',
    icon: 'HeartHandshake',
    color: '#14B8A6',
    targets: [1],
    xpReward: [10],
  },
  {
    id: 'share_verse',
    type: 'social',
    name: 'Spread Light',
    nameAr: 'نشر النور',
    description: 'Share a verse with someone',
    icon: 'Share',
    color: '#10B981',
    targets: [1],
    xpReward: [10],
  },
  {
    id: 'create_capsule',
    type: 'feature',
    name: 'Memory Keeper',
    nameAr: 'حافظ الذكريات',
    description: 'Create a time capsule',
    icon: 'Capsule',
    color: '#F472B6',
    targets: [1],
    xpReward: [15],
  },
];

// ===========================================
// DEFAULT STATE
// ===========================================

const DEFAULT_DATA = {
  xp: 0,
  level: 1,
  achievements: [],
  unlockedLocations: ['makkah'], // Start with Makkah unlocked
  dailyChallenges: [],
  challengeHistory: [],
  streaks: {
    current: 0,
    best: 0,
    lastActiveDate: null,
  },
  stats: {
    versesRead: 0,
    surahsCompleted: [],
    juzCompleted: [],
    meditationSessions: 0,
    capsuleCreated: 0,
    voiceCommands: 0,
    aiCompanionUses: 0,
    mapLocationsVisited: [],
    sharesCount: 0,
    memorizedVerses: 0,
    totalReadingTime: 0,
    surahsListened: [],
    versesListened: 0,
  },
  createdAt: null,
  lastUpdated: null,
};

// ===========================================
// STORAGE FUNCTIONS
// ===========================================

export const getGamificationData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...DEFAULT_DATA,
        ...parsed,
        stats: { ...DEFAULT_DATA.stats, ...(parsed.stats || {}) },
        streaks: { ...DEFAULT_DATA.streaks, ...(parsed.streaks || {}) },
      };
    }
    // Initialize with default data
    const initial = { ...DEFAULT_DATA, createdAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  } catch {
    return DEFAULT_DATA;
  }
};

export const saveGamificationData = (data) => {
  try {
    const updated = { ...data, lastUpdated: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch {
    console.error('Failed to save gamification data');
    return false;
  }
};

// ===========================================
// LEVEL FUNCTIONS
// ===========================================

export const getLevelInfo = (xp) => {
  let currentLevel = LEVELS[0];
  let nextLevel = LEVELS[1];

  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) {
      currentLevel = LEVELS[i];
      nextLevel = LEVELS[i + 1] || null;
      break;
    }
  }

  const xpForCurrentLevel = currentLevel.xpRequired;
  const xpForNextLevel = nextLevel ? nextLevel.xpRequired : currentLevel.xpRequired;
  const xpProgress = xp - xpForCurrentLevel;
  const xpNeeded = xpForNextLevel - xpForCurrentLevel;
  const progressPercent = nextLevel ? (xpProgress / xpNeeded) * 100 : 100;

  return {
    current: currentLevel,
    next: nextLevel,
    xpProgress,
    xpNeeded,
    progressPercent,
  };
};

// ===========================================
// XP FUNCTIONS
// ===========================================

export const addXP = (amount, reason = '') => {
  const data = getGamificationData();
  const oldLevel = getLevelInfo(data.xp).current.level;

  data.xp += amount;

  const newLevelInfo = getLevelInfo(data.xp);
  const leveledUp = newLevelInfo.current.level > oldLevel;

  // Update level
  data.level = newLevelInfo.current.level;

  saveGamificationData(data);

  return {
    newXP: data.xp,
    xpGained: amount,
    leveledUp,
    newLevel: leveledUp ? newLevelInfo.current : null,
    reason,
  };
};

// ===========================================
// STREAK FUNCTIONS
// ===========================================

export const updateStreak = () => {
  const data = getGamificationData();
  const today = new Date().toDateString();
  const lastActive = data.streaks.lastActiveDate;

  if (lastActive === today) {
    // Already active today
    return { updated: false, current: data.streaks.current };
  }

  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (lastActive === yesterday) {
    // Consecutive day - increment streak
    data.streaks.current += 1;
  } else if (lastActive !== today) {
    // Gap in activity - reset streak
    data.streaks.current = 1;
  }

  // Update best streak
  if (data.streaks.current > data.streaks.best) {
    data.streaks.best = data.streaks.current;
  }

  data.streaks.lastActiveDate = today;

  // Check streak achievements
  const streakAchievements = [];
  if (data.streaks.current >= 3 && !data.achievements.includes('streak_3')) {
    streakAchievements.push('streak_3');
    data.xp += ACHIEVEMENTS.streak_3.xp;
  }
  if (data.streaks.current >= 7 && !data.achievements.includes('streak_7')) {
    streakAchievements.push('streak_7');
    data.xp += ACHIEVEMENTS.streak_7.xp;
  }
  if (data.streaks.current >= 30 && !data.achievements.includes('streak_30')) {
    streakAchievements.push('streak_30');
    data.xp += ACHIEVEMENTS.streak_30.xp;
  }
  if (data.streaks.current >= 100 && !data.achievements.includes('streak_100')) {
    streakAchievements.push('streak_100');
    data.xp += ACHIEVEMENTS.streak_100.xp;
  }

  data.achievements = [...data.achievements, ...streakAchievements];

  saveGamificationData(data);

  return {
    updated: true,
    current: data.streaks.current,
    best: data.streaks.best,
    newAchievements: streakAchievements,
  };
};

// ===========================================
// ACHIEVEMENT FUNCTIONS
// ===========================================

export const unlockAchievement = (achievementId) => {
  const data = getGamificationData();

  if (data.achievements.includes(achievementId)) {
    return { unlocked: false, alreadyHad: true };
  }

  const achievement = ACHIEVEMENTS[achievementId];
  if (!achievement) {
    return { unlocked: false, error: 'Achievement not found' };
  }

  data.achievements.push(achievementId);
  data.xp += achievement.xp;
  data.level = getLevelInfo(data.xp).current.level;

  saveGamificationData(data);

  return {
    unlocked: true,
    achievement,
    xpGained: achievement.xp,
    newXP: data.xp,
  };
};

export const checkAndUnlockAchievements = () => {
  const data = getGamificationData();
  const newAchievements = [];

  // Reading achievements
  if (data.stats.versesRead >= 1 && !data.achievements.includes('first_verse')) {
    newAchievements.push(unlockAchievement('first_verse'));
  }
  if ((data.stats.surahsCompleted?.length || 0) >= 1 && !data.achievements.includes('surah_complete')) {
    newAchievements.push(unlockAchievement('surah_complete'));
  }
  if ((data.stats.juzCompleted?.length || 0) >= 1 && !data.achievements.includes('juz_complete')) {
    newAchievements.push(unlockAchievement('juz_complete'));
  }

  // Feature achievements
  if (data.stats.aiCompanionUses >= 10 && !data.achievements.includes('ai_seeker')) {
    newAchievements.push(unlockAchievement('ai_seeker'));
  }
  if ((data.stats.mapLocationsVisited?.length || 0) >= 5 && !data.achievements.includes('explorer')) {
    newAchievements.push(unlockAchievement('explorer'));
  }
  if (data.stats.meditationSessions >= 5 && !data.achievements.includes('meditator')) {
    newAchievements.push(unlockAchievement('meditator'));
  }
  if (data.stats.capsuleCreated >= 5 && !data.achievements.includes('time_keeper')) {
    newAchievements.push(unlockAchievement('time_keeper'));
  }
  if (data.stats.voiceCommands >= 20 && !data.achievements.includes('voice_master')) {
    newAchievements.push(unlockAchievement('voice_master'));
  }

  // Memorization achievements
  if (data.stats.memorizedVerses >= 1 && !data.achievements.includes('first_memorize')) {
    newAchievements.push(unlockAchievement('first_memorize'));
  }
  if (data.stats.memorizedVerses >= 10 && !data.achievements.includes('memorize_10')) {
    newAchievements.push(unlockAchievement('memorize_10'));
  }
  if (data.stats.memorizedVerses >= 100 && !data.achievements.includes('memorize_100')) {
    newAchievements.push(unlockAchievement('memorize_100'));
  }

  // Social achievements
  if (data.stats.sharesCount >= 10 && !data.achievements.includes('generous_sharer')) {
    newAchievements.push(unlockAchievement('generous_sharer'));
  }

  // Listening achievements
  const surahsListened = data.stats.surahsListened?.length || 0;
  if (surahsListened >= 1 && !data.achievements.includes('first_listen')) {
    newAchievements.push(unlockAchievement('first_listen'));
  }
  if (surahsListened >= 10 && !data.achievements.includes('listen_10')) {
    newAchievements.push(unlockAchievement('listen_10'));
  }

  return newAchievements.filter(a => a.unlocked);
};

// ===========================================
// LOCATION UNLOCK FUNCTIONS
// ===========================================

export const unlockLocation = (locationId) => {
  const data = getGamificationData();

  if (data.unlockedLocations.includes(locationId)) {
    return { unlocked: false, alreadyHad: true };
  }

  data.unlockedLocations.push(locationId);

  // Add to visited stats
  if (!data.stats.mapLocationsVisited.includes(locationId)) {
    data.stats.mapLocationsVisited.push(locationId);
  }

  // Add XP for exploring
  const xpResult = addXP(XP_REWARDS.exploreMap, `Unlocked ${locationId}`);

  saveGamificationData(data);

  // Check for explorer achievement
  checkAndUnlockAchievements();

  return {
    unlocked: true,
    locationId,
    ...xpResult,
  };
};

export const isLocationUnlocked = (locationId) => {
  const data = getGamificationData();
  return data.unlockedLocations.includes(locationId);
};

// ===========================================
// DAILY CHALLENGE FUNCTIONS
// ===========================================

export const generateDailyChallenges = () => {
  const data = getGamificationData();
  const today = new Date().toDateString();

  // Check if challenges already generated today
  if (data.dailyChallenges.length > 0 && data.dailyChallenges[0].date === today) {
    return data.dailyChallenges;
  }

  // Generate 3 random challenges
  const shuffled = [...CHALLENGE_TEMPLATES].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3);

  const challenges = selected.map((template) => {
    const targetIndex = Math.floor(Math.random() * template.targets.length);
    return {
      id: `${template.id}_${Date.now()}`,
      templateId: template.id,
      name: template.name,
      nameAr: template.nameAr,
      description: template.description.replace('{target}', template.targets[targetIndex]),
      icon: template.icon,
      color: template.color,
      target: template.targets[targetIndex],
      progress: 0,
      completed: false,
      xpReward: template.xpReward[targetIndex],
      date: today,
    };
  });

  data.dailyChallenges = challenges;
  saveGamificationData(data);

  return challenges;
};

export const updateChallengeProgress = (templateId, progressAmount = 1) => {
  const data = getGamificationData();
  const challenge = data.dailyChallenges.find(c => c.templateId === templateId && !c.completed);

  if (!challenge) {
    return { updated: false };
  }

  challenge.progress += progressAmount;

  if (challenge.progress >= challenge.target) {
    challenge.completed = true;
    challenge.progress = challenge.target;

    // Award XP
    const xpResult = addXP(challenge.xpReward, `Completed challenge: ${challenge.name}`);

    // Add to history
    data.challengeHistory.push({
      ...challenge,
      completedAt: new Date().toISOString(),
    });

    saveGamificationData(data);

    return {
      updated: true,
      completed: true,
      challenge,
      ...xpResult,
    };
  }

  saveGamificationData(data);

  return {
    updated: true,
    completed: false,
    challenge,
  };
};

// ===========================================
// STAT TRACKING FUNCTIONS
// ===========================================

export const recordVerseRead = (surahId, ayahNum) => {
  const data = getGamificationData();
  data.stats.versesRead += 1;

  // Add XP
  addXP(XP_REWARDS.readVerse, 'Read verse');

  // Update streak
  updateStreak();

  // Update reading challenge
  updateChallengeProgress('read_verses', 1);

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.versesRead;
};

export const recordSurahComplete = (surahId) => {
  const data = getGamificationData();

  if (!data.stats.surahsCompleted.includes(surahId)) {
    data.stats.surahsCompleted.push(surahId);
    addXP(XP_REWARDS.readSurah, `Completed Surah ${surahId}`);
  }

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.surahsCompleted;
};

export const recordMeditationSession = () => {
  const data = getGamificationData();
  data.stats.meditationSessions += 1;

  addXP(XP_REWARDS.completeMeditation, 'Completed meditation');
  updateChallengeProgress('use_meditation', 1);

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.meditationSessions;
};

export const recordAICompanionUse = () => {
  const data = getGamificationData();
  data.stats.aiCompanionUses += 1;

  addXP(XP_REWARDS.useAICompanion, 'Used AI Companion');
  updateChallengeProgress('use_companion', 1);

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.aiCompanionUses;
};

export const recordCapsuleCreated = () => {
  const data = getGamificationData();
  data.stats.capsuleCreated += 1;

  addXP(XP_REWARDS.createTimeCapsule, 'Created time capsule');
  updateChallengeProgress('create_capsule', 1);

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.capsuleCreated;
};

export const recordVoiceCommand = () => {
  const data = getGamificationData();
  data.stats.voiceCommands += 1;

  addXP(XP_REWARDS.useVoiceControl, 'Used voice command');

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.voiceCommands;
};

export const recordShare = () => {
  const data = getGamificationData();
  data.stats.sharesCount += 1;

  addXP(XP_REWARDS.shareVerse, 'Shared verse');
  updateChallengeProgress('share_verse', 1);

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.sharesCount;
};

export const recordMapVisit = (locationId) => {
  const data = getGamificationData();

  if (!data.stats.mapLocationsVisited.includes(locationId)) {
    data.stats.mapLocationsVisited.push(locationId);
    updateChallengeProgress('explore_map', 1);
  }

  saveGamificationData(data);
  checkAndUnlockAchievements();

  return data.stats.mapLocationsVisited;
};

// ===========================================
// LISTENING STAT FUNCTIONS
// ===========================================

export const recordVerseListened = (surahId, ayahNum) => {
  const data = getGamificationData();
  data.stats.versesListened = (data.stats.versesListened || 0) + 1;
  addXP(XP_REWARDS.listenVerse, 'Listened to verse');
  saveGamificationData(data);
};

export const recordSurahListened = (surahId) => {
  const data = getGamificationData();
  if (!data.stats.surahsListened) data.stats.surahsListened = [];
  if (!data.stats.surahsListened.includes(surahId)) {
    data.stats.surahsListened.push(surahId);
    addXP(XP_REWARDS.listenSurah, `Listened to Surah ${surahId}`);
  }
  saveGamificationData(data);
  checkAndUnlockAchievements();
  return data.stats.surahsListened;
};

// ===========================================
// RESET FUNCTION
// ===========================================

export const resetGamificationData = () => {
  localStorage.removeItem(STORAGE_KEY);
  return DEFAULT_DATA;
};

export default {
  LEVELS,
  XP_REWARDS,
  ACHIEVEMENTS,
  CHALLENGE_TEMPLATES,
  getGamificationData,
  saveGamificationData,
  getLevelInfo,
  addXP,
  updateStreak,
  unlockAchievement,
  checkAndUnlockAchievements,
  unlockLocation,
  isLocationUnlocked,
  generateDailyChallenges,
  updateChallengeProgress,
  recordVerseRead,
  recordSurahComplete,
  recordMeditationSession,
  recordAICompanionUse,
  recordCapsuleCreated,
  recordVoiceCommand,
  recordShare,
  recordMapVisit,
  recordVerseListened,
  recordSurahListened,
  resetGamificationData,
};
