/**
 * Meditation Sessions Data
 * Pre-built guided meditation sessions with Quranic verses
 */

// Dhikr phrases
export const DHIKR_PHRASES = {
  subhanallah: {
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'SubhanAllah',
    translation: 'Glory be to Allah',
    count: 33,
    color: '#10B981',
  },
  alhamdulillah: {
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    translation: 'All praise is due to Allah',
    count: 33,
    color: '#3B82F6',
  },
  allahuakbar: {
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    translation: 'Allah is the Greatest',
    count: 34,
    color: '#8B5CF6',
  },
  lailaha: {
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
    transliteration: 'La ilaha illa Allah',
    translation: 'There is no god but Allah',
    count: 100,
    color: '#F59E0B',
  },
  astaghfirullah: {
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    transliteration: 'Astaghfirullah',
    translation: 'I seek forgiveness from Allah',
    count: 100,
    color: '#EC4899',
  },
  hasbi: {
    arabic: 'حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ',
    transliteration: 'Hasbiyallahu wa ni\'mal wakeel',
    translation: 'Allah is sufficient for me, and He is the best disposer of affairs',
    count: 7,
    color: '#06B6D4',
  },
};

// Names of Allah for meditation
export const MEDITATION_NAMES = [
  { arabic: 'الرَّحْمَٰنُ', name: 'Ar-Rahman', meaning: 'The Most Gracious', color: '#F43F5E' },
  { arabic: 'الرَّحِيمُ', name: 'Ar-Raheem', meaning: 'The Most Merciful', color: '#EC4899' },
  { arabic: 'السَّلَامُ', name: 'As-Salam', meaning: 'The Source of Peace', color: '#10B981' },
  { arabic: 'الْغَفُورُ', name: 'Al-Ghafoor', meaning: 'The Forgiving', color: '#8B5CF6' },
  { arabic: 'الْحَلِيمُ', name: 'Al-Haleem', meaning: 'The Forbearing', color: '#3B82F6' },
  { arabic: 'الْوَدُودُ', name: 'Al-Wadud', meaning: 'The Loving', color: '#F59E0B' },
  { arabic: 'الصَّبُورُ', name: 'As-Sabur', meaning: 'The Patient', color: '#06B6D4' },
  { arabic: 'الشَّكُورُ', name: 'Ash-Shakoor', meaning: 'The Appreciative', color: '#22C55E' },
];

// Calming verses for meditation
export const CALMING_VERSES = [
  {
    surah: 94,
    ayah: 5,
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'For indeed, with hardship comes ease.',
  },
  {
    surah: 13,
    ayah: 28,
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    translation: 'Unquestionably, by the remembrance of Allah hearts are assured.',
  },
  {
    surah: 2,
    ayah: 286,
    arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
    translation: 'Allah does not burden a soul beyond that it can bear.',
  },
  {
    surah: 3,
    ayah: 139,
    arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ',
    translation: 'Do not weaken and do not grieve, for you will be superior.',
  },
  {
    surah: 65,
    ayah: 3,
    arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    translation: 'And whoever relies upon Allah - then He is sufficient for him.',
  },
  {
    surah: 39,
    ayah: 53,
    arabic: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
    translation: 'Do not despair of the mercy of Allah.',
  },
];

// Pre-built meditation sessions
export const MEDITATION_SESSIONS = {
  morning_peace: {
    id: 'morning_peace',
    name: 'Morning Peace',
    nameAr: 'سكينة الصباح',
    duration: 10,
    icon: 'Sun',
    color: '#F59E0B',
    description: 'Start your day with tranquility and gratitude.',
    phases: [
      { type: 'breathing', duration: 60, label: 'Center yourself', inhale: 4, hold: 4, exhale: 4 },
      { type: 'verse', verse: CALMING_VERSES[0], duration: 90, breathsPerVerse: 3 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.alhamdulillah, count: 33, duration: 120 },
      { type: 'verse', verse: CALMING_VERSES[4], duration: 90, breathsPerVerse: 3 },
      { type: 'breathing', duration: 60, label: 'Return with gratitude', inhale: 4, hold: 4, exhale: 6 },
    ],
  },

  stress_relief: {
    id: 'stress_relief',
    name: 'Stress Relief',
    nameAr: 'تخفيف التوتر',
    duration: 12,
    icon: 'Cloud',
    color: '#06B6D4',
    description: 'Release anxiety and find inner calm.',
    phases: [
      { type: 'breathing', duration: 90, label: 'Release tension', inhale: 4, hold: 7, exhale: 8 },
      { type: 'verse', verse: CALMING_VERSES[1], duration: 120, breathsPerVerse: 4 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.hasbi, count: 7, duration: 90 },
      { type: 'names', names: MEDITATION_NAMES.slice(0, 3), duration: 120 },
      { type: 'verse', verse: CALMING_VERSES[2], duration: 90, breathsPerVerse: 3 },
      { type: 'breathing', duration: 60, label: 'Embrace peace', inhale: 4, hold: 4, exhale: 6 },
    ],
  },

  gratitude: {
    id: 'gratitude',
    name: 'Gratitude Practice',
    nameAr: 'ممارسة الشكر',
    duration: 8,
    icon: 'Star',
    color: '#10B981',
    description: 'Cultivate thankfulness and appreciate blessings.',
    phases: [
      { type: 'breathing', duration: 45, label: 'Open your heart', inhale: 4, hold: 2, exhale: 4 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.alhamdulillah, count: 33, duration: 120 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.subhanallah, count: 33, duration: 120 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.allahuakbar, count: 34, duration: 120 },
      { type: 'breathing', duration: 45, label: 'Seal with thanks', inhale: 4, hold: 4, exhale: 4 },
    ],
  },

  forgiveness: {
    id: 'forgiveness',
    name: 'Seeking Forgiveness',
    nameAr: 'طلب المغفرة',
    duration: 10,
    icon: 'Refresh',
    color: '#8B5CF6',
    description: 'Purify your heart through repentance.',
    phases: [
      { type: 'breathing', duration: 60, label: 'Humble yourself', inhale: 4, hold: 4, exhale: 4 },
      { type: 'verse', verse: CALMING_VERSES[5], duration: 90, breathsPerVerse: 3 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.astaghfirullah, count: 100, duration: 240 },
      { type: 'breathing', duration: 60, label: 'Accept His mercy', inhale: 4, hold: 2, exhale: 6 },
    ],
  },

  night_reflection: {
    id: 'night_reflection',
    name: 'Night Reflection',
    nameAr: 'تأمل الليل',
    duration: 15,
    icon: 'Moon',
    color: '#3B82F6',
    description: 'End your day with peaceful reflection.',
    phases: [
      { type: 'breathing', duration: 90, label: 'Settle your mind', inhale: 4, hold: 7, exhale: 8 },
      { type: 'verse', verse: CALMING_VERSES[3], duration: 90, breathsPerVerse: 4 },
      { type: 'names', names: MEDITATION_NAMES.slice(3, 6), duration: 120 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.subhanallah, count: 33, duration: 90 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.alhamdulillah, count: 33, duration: 90 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.allahuakbar, count: 34, duration: 90 },
      { type: 'breathing', duration: 90, label: 'Prepare for rest', inhale: 4, hold: 4, exhale: 8 },
    ],
  },

  quick_calm: {
    id: 'quick_calm',
    name: 'Quick Calm',
    nameAr: 'هدوء سريع',
    duration: 3,
    icon: 'Zap',
    color: '#EC4899',
    description: 'A brief moment of peace when you need it.',
    phases: [
      { type: 'breathing', duration: 30, label: 'Breathe in peace', inhale: 4, hold: 4, exhale: 4 },
      { type: 'verse', verse: CALMING_VERSES[0], duration: 60, breathsPerVerse: 2 },
      { type: 'dhikr', phrase: DHIKR_PHRASES.hasbi, count: 3, duration: 45 },
      { type: 'breathing', duration: 30, label: 'Carry this peace', inhale: 4, hold: 2, exhale: 4 },
    ],
  },
};

// Get all sessions
export const getAllSessions = () => Object.values(MEDITATION_SESSIONS);

// Get session by ID
export const getSession = (id) => MEDITATION_SESSIONS[id] || null;

// Calculate total duration of a session in seconds
export const getSessionDuration = (session) => {
  return session.phases.reduce((total, phase) => total + phase.duration, 0);
};

export default {
  DHIKR_PHRASES,
  MEDITATION_NAMES,
  CALMING_VERSES,
  MEDITATION_SESSIONS,
  getAllSessions,
  getSession,
  getSessionDuration,
};
