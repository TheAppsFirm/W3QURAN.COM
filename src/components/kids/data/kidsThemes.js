/**
 * Kids Mode Theme Configuration
 * Contains all themes, surah data, achievements, and sound effects for Quran Kids mode
 */

// =============================================================================
// SURAH DATA - All 114 Surahs with kid-friendly information
// =============================================================================

export const SURAH_DATA = [
  { id: 1, name: 'Al-Fatiha', nameAr: 'الفاتحة', verses: 7, type: 'Makki', meaning: 'The Opening' },
  { id: 2, name: 'Al-Baqarah', nameAr: 'البقرة', verses: 286, type: 'Madani', meaning: 'The Cow' },
  { id: 3, name: 'Al-Imran', nameAr: 'آل عمران', verses: 200, type: 'Madani', meaning: 'Family of Imran' },
  { id: 4, name: 'An-Nisa', nameAr: 'النساء', verses: 176, type: 'Madani', meaning: 'The Women' },
  { id: 5, name: 'Al-Maidah', nameAr: 'المائدة', verses: 120, type: 'Madani', meaning: 'The Table Spread' },
  { id: 6, name: 'Al-Anam', nameAr: 'الأنعام', verses: 165, type: 'Makki', meaning: 'The Cattle' },
  { id: 7, name: 'Al-Araf', nameAr: 'الأعراف', verses: 206, type: 'Makki', meaning: 'The Heights' },
  { id: 8, name: 'Al-Anfal', nameAr: 'الأنفال', verses: 75, type: 'Madani', meaning: 'The Spoils of War' },
  { id: 9, name: 'At-Tawbah', nameAr: 'التوبة', verses: 129, type: 'Madani', meaning: 'The Repentance' },
  { id: 10, name: 'Yunus', nameAr: 'يونس', verses: 109, type: 'Makki', meaning: 'Jonah' },
  { id: 11, name: 'Hud', nameAr: 'هود', verses: 123, type: 'Makki', meaning: 'Hud' },
  { id: 12, name: 'Yusuf', nameAr: 'يوسف', verses: 111, type: 'Makki', meaning: 'Joseph' },
  { id: 13, name: 'Ar-Rad', nameAr: 'الرعد', verses: 43, type: 'Madani', meaning: 'The Thunder' },
  { id: 14, name: 'Ibrahim', nameAr: 'إبراهيم', verses: 52, type: 'Makki', meaning: 'Abraham' },
  { id: 15, name: 'Al-Hijr', nameAr: 'الحجر', verses: 99, type: 'Makki', meaning: 'The Rocky Tract' },
  { id: 16, name: 'An-Nahl', nameAr: 'النحل', verses: 128, type: 'Makki', meaning: 'The Bee' },
  { id: 17, name: 'Al-Isra', nameAr: 'الإسراء', verses: 111, type: 'Makki', meaning: 'The Night Journey' },
  { id: 18, name: 'Al-Kahf', nameAr: 'الكهف', verses: 110, type: 'Makki', meaning: 'The Cave' },
  { id: 19, name: 'Maryam', nameAr: 'مريم', verses: 98, type: 'Makki', meaning: 'Mary' },
  { id: 20, name: 'Ta-Ha', nameAr: 'طه', verses: 135, type: 'Makki', meaning: 'Ta-Ha' },
  { id: 21, name: 'Al-Anbiya', nameAr: 'الأنبياء', verses: 112, type: 'Makki', meaning: 'The Prophets' },
  { id: 22, name: 'Al-Hajj', nameAr: 'الحج', verses: 78, type: 'Madani', meaning: 'The Pilgrimage' },
  { id: 23, name: 'Al-Muminun', nameAr: 'المؤمنون', verses: 118, type: 'Makki', meaning: 'The Believers' },
  { id: 24, name: 'An-Nur', nameAr: 'النور', verses: 64, type: 'Madani', meaning: 'The Light' },
  { id: 25, name: 'Al-Furqan', nameAr: 'الفرقان', verses: 77, type: 'Makki', meaning: 'The Criterion' },
  { id: 26, name: 'Ash-Shuara', nameAr: 'الشعراء', verses: 227, type: 'Makki', meaning: 'The Poets' },
  { id: 27, name: 'An-Naml', nameAr: 'النمل', verses: 93, type: 'Makki', meaning: 'The Ant' },
  { id: 28, name: 'Al-Qasas', nameAr: 'القصص', verses: 88, type: 'Makki', meaning: 'The Stories' },
  { id: 29, name: 'Al-Ankabut', nameAr: 'العنكبوت', verses: 69, type: 'Makki', meaning: 'The Spider' },
  { id: 30, name: 'Ar-Rum', nameAr: 'الروم', verses: 60, type: 'Makki', meaning: 'The Romans' },
  { id: 31, name: 'Luqman', nameAr: 'لقمان', verses: 34, type: 'Makki', meaning: 'Luqman' },
  { id: 32, name: 'As-Sajdah', nameAr: 'السجدة', verses: 30, type: 'Makki', meaning: 'The Prostration' },
  { id: 33, name: 'Al-Ahzab', nameAr: 'الأحزاب', verses: 73, type: 'Madani', meaning: 'The Confederates' },
  { id: 34, name: 'Saba', nameAr: 'سبأ', verses: 54, type: 'Makki', meaning: 'Sheba' },
  { id: 35, name: 'Fatir', nameAr: 'فاطر', verses: 45, type: 'Makki', meaning: 'The Originator' },
  { id: 36, name: 'Ya-Sin', nameAr: 'يس', verses: 83, type: 'Makki', meaning: 'Ya-Sin' },
  { id: 37, name: 'As-Saffat', nameAr: 'الصافات', verses: 182, type: 'Makki', meaning: 'Those in Ranks' },
  { id: 38, name: 'Sad', nameAr: 'ص', verses: 88, type: 'Makki', meaning: 'Sad' },
  { id: 39, name: 'Az-Zumar', nameAr: 'الزمر', verses: 75, type: 'Makki', meaning: 'The Groups' },
  { id: 40, name: 'Ghafir', nameAr: 'غافر', verses: 85, type: 'Makki', meaning: 'The Forgiver' },
  { id: 41, name: 'Fussilat', nameAr: 'فصلت', verses: 54, type: 'Makki', meaning: 'Explained in Detail' },
  { id: 42, name: 'Ash-Shura', nameAr: 'الشورى', verses: 53, type: 'Makki', meaning: 'The Consultation' },
  { id: 43, name: 'Az-Zukhruf', nameAr: 'الزخرف', verses: 89, type: 'Makki', meaning: 'The Gold Ornaments' },
  { id: 44, name: 'Ad-Dukhan', nameAr: 'الدخان', verses: 59, type: 'Makki', meaning: 'The Smoke' },
  { id: 45, name: 'Al-Jathiyah', nameAr: 'الجاثية', verses: 37, type: 'Makki', meaning: 'The Kneeling' },
  { id: 46, name: 'Al-Ahqaf', nameAr: 'الأحقاف', verses: 35, type: 'Makki', meaning: 'The Sand Dunes' },
  { id: 47, name: 'Muhammad', nameAr: 'محمد', verses: 38, type: 'Madani', meaning: 'Muhammad' },
  { id: 48, name: 'Al-Fath', nameAr: 'الفتح', verses: 29, type: 'Madani', meaning: 'The Victory' },
  { id: 49, name: 'Al-Hujurat', nameAr: 'الحجرات', verses: 18, type: 'Madani', meaning: 'The Chambers' },
  { id: 50, name: 'Qaf', nameAr: 'ق', verses: 45, type: 'Makki', meaning: 'Qaf' },
  { id: 51, name: 'Adh-Dhariyat', nameAr: 'الذاريات', verses: 60, type: 'Makki', meaning: 'The Scattering Winds' },
  { id: 52, name: 'At-Tur', nameAr: 'الطور', verses: 49, type: 'Makki', meaning: 'The Mount' },
  { id: 53, name: 'An-Najm', nameAr: 'النجم', verses: 62, type: 'Makki', meaning: 'The Star' },
  { id: 54, name: 'Al-Qamar', nameAr: 'القمر', verses: 55, type: 'Makki', meaning: 'The Moon' },
  { id: 55, name: 'Ar-Rahman', nameAr: 'الرحمن', verses: 78, type: 'Madani', meaning: 'The Most Merciful' },
  { id: 56, name: 'Al-Waqiah', nameAr: 'الواقعة', verses: 96, type: 'Makki', meaning: 'The Event' },
  { id: 57, name: 'Al-Hadid', nameAr: 'الحديد', verses: 29, type: 'Madani', meaning: 'The Iron' },
  { id: 58, name: 'Al-Mujadila', nameAr: 'المجادلة', verses: 22, type: 'Madani', meaning: 'The Pleading Woman' },
  { id: 59, name: 'Al-Hashr', nameAr: 'الحشر', verses: 24, type: 'Madani', meaning: 'The Gathering' },
  { id: 60, name: 'Al-Mumtahanah', nameAr: 'الممتحنة', verses: 13, type: 'Madani', meaning: 'The Examined One' },
  { id: 61, name: 'As-Saff', nameAr: 'الصف', verses: 14, type: 'Madani', meaning: 'The Row' },
  { id: 62, name: 'Al-Jumuah', nameAr: 'الجمعة', verses: 11, type: 'Madani', meaning: 'Friday' },
  { id: 63, name: 'Al-Munafiqun', nameAr: 'المنافقون', verses: 11, type: 'Madani', meaning: 'The Hypocrites' },
  { id: 64, name: 'At-Taghabun', nameAr: 'التغابن', verses: 18, type: 'Madani', meaning: 'Mutual Loss and Gain' },
  { id: 65, name: 'At-Talaq', nameAr: 'الطلاق', verses: 12, type: 'Madani', meaning: 'The Divorce' },
  { id: 66, name: 'At-Tahrim', nameAr: 'التحريم', verses: 12, type: 'Madani', meaning: 'The Prohibition' },
  { id: 67, name: 'Al-Mulk', nameAr: 'الملك', verses: 30, type: 'Makki', meaning: 'The Sovereignty' },
  { id: 68, name: 'Al-Qalam', nameAr: 'القلم', verses: 52, type: 'Makki', meaning: 'The Pen' },
  { id: 69, name: 'Al-Haqqah', nameAr: 'الحاقة', verses: 52, type: 'Makki', meaning: 'The Reality' },
  { id: 70, name: 'Al-Maarij', nameAr: 'المعارج', verses: 44, type: 'Makki', meaning: 'The Ways of Ascent' },
  { id: 71, name: 'Nuh', nameAr: 'نوح', verses: 28, type: 'Makki', meaning: 'Noah' },
  { id: 72, name: 'Al-Jinn', nameAr: 'الجن', verses: 28, type: 'Makki', meaning: 'The Jinn' },
  { id: 73, name: 'Al-Muzzammil', nameAr: 'المزمل', verses: 20, type: 'Makki', meaning: 'The Wrapped One' },
  { id: 74, name: 'Al-Muddaththir', nameAr: 'المدثر', verses: 56, type: 'Makki', meaning: 'The Cloaked One' },
  { id: 75, name: 'Al-Qiyamah', nameAr: 'القيامة', verses: 40, type: 'Makki', meaning: 'The Resurrection' },
  { id: 76, name: 'Al-Insan', nameAr: 'الإنسان', verses: 31, type: 'Madani', meaning: 'The Human' },
  { id: 77, name: 'Al-Mursalat', nameAr: 'المرسلات', verses: 50, type: 'Makki', meaning: 'Those Sent Forth' },
  { id: 78, name: 'An-Naba', nameAr: 'النبأ', verses: 40, type: 'Makki', meaning: 'The Great News' },
  { id: 79, name: 'An-Naziat', nameAr: 'النازعات', verses: 46, type: 'Makki', meaning: 'Those Who Pull Out' },
  { id: 80, name: 'Abasa', nameAr: 'عبس', verses: 42, type: 'Makki', meaning: 'He Frowned' },
  { id: 81, name: 'At-Takwir', nameAr: 'التكوير', verses: 29, type: 'Makki', meaning: 'The Folding Up' },
  { id: 82, name: 'Al-Infitar', nameAr: 'الإنفطار', verses: 19, type: 'Makki', meaning: 'The Splitting' },
  { id: 83, name: 'Al-Mutaffifin', nameAr: 'المطففين', verses: 36, type: 'Makki', meaning: 'Those Who Give Less' },
  { id: 84, name: 'Al-Inshiqaq', nameAr: 'الانشقاق', verses: 25, type: 'Makki', meaning: 'The Splitting Open' },
  { id: 85, name: 'Al-Buruj', nameAr: 'البروج', verses: 22, type: 'Makki', meaning: 'The Great Stars' },
  { id: 86, name: 'At-Tariq', nameAr: 'الطارق', verses: 17, type: 'Makki', meaning: 'The Night Visitor' },
  { id: 87, name: 'Al-Ala', nameAr: 'الأعلى', verses: 19, type: 'Makki', meaning: 'The Most High' },
  { id: 88, name: 'Al-Ghashiyah', nameAr: 'الغاشية', verses: 26, type: 'Makki', meaning: 'The Overwhelming' },
  { id: 89, name: 'Al-Fajr', nameAr: 'الفجر', verses: 30, type: 'Makki', meaning: 'The Dawn' },
  { id: 90, name: 'Al-Balad', nameAr: 'البلد', verses: 20, type: 'Makki', meaning: 'The City' },
  { id: 91, name: 'Ash-Shams', nameAr: 'الشمس', verses: 15, type: 'Makki', meaning: 'The Sun' },
  { id: 92, name: 'Al-Layl', nameAr: 'الليل', verses: 21, type: 'Makki', meaning: 'The Night' },
  { id: 93, name: 'Ad-Duha', nameAr: 'الضحى', verses: 11, type: 'Makki', meaning: 'The Morning Hours' },
  { id: 94, name: 'Ash-Sharh', nameAr: 'الشرح', verses: 8, type: 'Makki', meaning: 'The Relief' },
  { id: 95, name: 'At-Tin', nameAr: 'التين', verses: 8, type: 'Makki', meaning: 'The Fig' },
  { id: 96, name: 'Al-Alaq', nameAr: 'العلق', verses: 19, type: 'Makki', meaning: 'The Clot' },
  { id: 97, name: 'Al-Qadr', nameAr: 'القدر', verses: 5, type: 'Makki', meaning: 'The Night of Power' },
  { id: 98, name: 'Al-Bayyinah', nameAr: 'البينة', verses: 8, type: 'Madani', meaning: 'The Clear Evidence' },
  { id: 99, name: 'Az-Zalzalah', nameAr: 'الزلزلة', verses: 8, type: 'Madani', meaning: 'The Earthquake' },
  { id: 100, name: 'Al-Adiyat', nameAr: 'العاديات', verses: 11, type: 'Makki', meaning: 'The Charging Steeds' },
  { id: 101, name: 'Al-Qariah', nameAr: 'القارعة', verses: 11, type: 'Makki', meaning: 'The Striking Calamity' },
  { id: 102, name: 'At-Takathur', nameAr: 'التكاثر', verses: 8, type: 'Makki', meaning: 'Competition in Increase' },
  { id: 103, name: 'Al-Asr', nameAr: 'العصر', verses: 3, type: 'Makki', meaning: 'The Time' },
  { id: 104, name: 'Al-Humazah', nameAr: 'الهمزة', verses: 9, type: 'Makki', meaning: 'The Slanderer' },
  { id: 105, name: 'Al-Fil', nameAr: 'الفيل', verses: 5, type: 'Makki', meaning: 'The Elephant' },
  { id: 106, name: 'Quraysh', nameAr: 'قريش', verses: 4, type: 'Makki', meaning: 'Quraysh' },
  { id: 107, name: 'Al-Maun', nameAr: 'الماعون', verses: 7, type: 'Makki', meaning: 'Small Kindnesses' },
  { id: 108, name: 'Al-Kawthar', nameAr: 'الكوثر', verses: 3, type: 'Makki', meaning: 'The Abundance' },
  { id: 109, name: 'Al-Kafirun', nameAr: 'الكافرون', verses: 6, type: 'Makki', meaning: 'The Disbelievers' },
  { id: 110, name: 'An-Nasr', nameAr: 'النصر', verses: 3, type: 'Madani', meaning: 'The Divine Support' },
  { id: 111, name: 'Al-Masad', nameAr: 'المسد', verses: 5, type: 'Makki', meaning: 'The Palm Fiber' },
  { id: 112, name: 'Al-Ikhlas', nameAr: 'الإخلاص', verses: 4, type: 'Makki', meaning: 'The Sincerity' },
  { id: 113, name: 'Al-Falaq', nameAr: 'الفلق', verses: 5, type: 'Makki', meaning: 'The Daybreak' },
  { id: 114, name: 'An-Nas', nameAr: 'الناس', verses: 6, type: 'Makki', meaning: 'Mankind' },
];

// =============================================================================
// DIFFICULTY LEVELS - Categorizing surahs by length/complexity for kids
// =============================================================================

export const DIFFICULTY_LEVELS = {
  easy: {
    id: 'easy',
    name: 'Easy',
    nameAr: 'سهل',
    color: '#10B981', // emerald
    emoji: '⭐',
    description: 'Short surahs perfect for beginners',
    maxVerses: 15,
    stars: 1,
    xpMultiplier: 1,
  },
  medium: {
    id: 'medium',
    name: 'Medium',
    nameAr: 'متوسط',
    color: '#F59E0B', // amber
    emoji: '⭐⭐',
    description: 'Moderate length surahs for growing learners',
    maxVerses: 50,
    stars: 2,
    xpMultiplier: 1.5,
  },
  hard: {
    id: 'hard',
    name: 'Hard',
    nameAr: 'صعب',
    color: '#EF4444', // red
    emoji: '⭐⭐⭐',
    description: 'Longer surahs for advanced learners',
    maxVerses: Infinity,
    stars: 3,
    xpMultiplier: 2,
  },
};

/**
 * Get difficulty level for a surah based on verse count
 */
export const getSurahDifficulty = (verseCount) => {
  if (verseCount <= DIFFICULTY_LEVELS.easy.maxVerses) {
    return DIFFICULTY_LEVELS.easy;
  } else if (verseCount <= DIFFICULTY_LEVELS.medium.maxVerses) {
    return DIFFICULTY_LEVELS.medium;
  }
  return DIFFICULTY_LEVELS.hard;
};

// =============================================================================
// HELPER FUNCTION - Generate stations for each theme
// =============================================================================

/**
 * Generate 114 surah stations with positions for a theme track
 * @param {string} themeId - The theme identifier
 * @returns {Array} Array of station objects
 */
function generateStations(themeId) {
  const trackLength = 10000; // Total track length in pixels
  const spacing = trackLength / 114;

  return SURAH_DATA.map((surah, index) => {
    const difficulty = getSurahDifficulty(surah.verses);

    return {
      surahId: surah.id,
      position: index * spacing,
      name: surah.name,
      nameAr: surah.nameAr,
      meaning: surah.meaning,
      verseCount: surah.verses,
      type: surah.type,
      difficulty: difficulty.id,
      stars: difficulty.stars,
      xpReward: Math.ceil(surah.verses * difficulty.xpMultiplier * 10),
      // Theme-specific station styling
      stationStyle: getStationStyle(themeId, index),
    };
  });
}

/**
 * Get theme-specific station styling based on theme and position
 */
function getStationStyle(themeId, index) {
  const styles = {
    train: {
      icon: index % 5 === 0 ? 'major-station' : 'minor-station',
      size: index % 5 === 0 ? 'large' : 'medium',
      hasRefreshment: index % 10 === 0,
      landmark: index % 20 === 0 ? 'mountain' : null,
    },
    garden: {
      icon: index % 5 === 0 ? 'pavilion' : 'flower-arch',
      size: index % 5 === 0 ? 'large' : 'medium',
      hasRefreshment: index % 10 === 0,
      landmark: index % 20 === 0 ? 'fountain' : null,
    },
    desert: {
      icon: index % 5 === 0 ? 'oasis' : 'tent',
      size: index % 5 === 0 ? 'large' : 'medium',
      hasRefreshment: index % 10 === 0,
      landmark: index % 20 === 0 ? 'pyramid' : null,
    },
    seert: {
      icon: index % 5 === 0 ? 'mosque' : 'tent',
      size: index % 5 === 0 ? 'large' : 'medium',
      hasRefreshment: index % 8 === 0,
      landmark: index % 10 === 0 ? 'minaret' : null,
    },
  };

  return styles[themeId] || styles.train;
}

// =============================================================================
// KIDS THEMES - Main theme configurations
// =============================================================================

export const KIDS_THEMES = {
  train: {
    id: 'train',
    name: 'Train Journey',
    nameAr: 'رحلة القطار',
    emoji: '🚂',
    description: 'Travel through mountains and valleys',
    descriptionAr: 'سافر عبر الجبال والوديان',
    unlockLevel: 1, // Available from start
    colors: {
      primary: '#3B82F6', // blue
      secondary: '#06B6D4', // cyan
      accent: '#8B5CF6', // purple
      text: '#1E3A8A',
      textLight: '#93C5FD',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      gradientDark: 'from-blue-700 via-cyan-700 to-blue-800',
    },
    background: {
      sky: '#87CEEB',
      skyGradient: 'linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)',
      ground: '#228B22',
      groundGradient: 'linear-gradient(180deg, #228B22 0%, #1B5E20 100%)',
      elements: ['mountains', 'clouds', 'trees', 'tunnels', 'bridges', 'stations'],
      parallaxLayers: [
        { id: 'sky', speed: 0.1, zIndex: 0 },
        { id: 'far-mountains', speed: 0.2, zIndex: 1 },
        { id: 'near-mountains', speed: 0.4, zIndex: 2 },
        { id: 'trees', speed: 0.6, zIndex: 3 },
        { id: 'track', speed: 1, zIndex: 4 },
      ],
    },
    vehicle: {
      type: 'train',
      name: 'Quran Express',
      nameAr: 'قطار القرآن',
      emoji: '🚂',
      speed: 1,
      acceleration: 0.5,
      sounds: ['whistle', 'chugga', 'bell'],
      animation: 'bounce-gentle',
      carriages: 3, // Number of train cars
    },
    journey: {
      startLabel: 'Al-Fatiha Station',
      endLabel: 'An-Nas Station',
      milestones: [
        { surahId: 1, label: 'Journey Begins', emoji: '🚂' },
        { surahId: 36, label: 'Heart of Quran', emoji: '💚' },
        { surahId: 55, label: 'Ar-Rahman Valley', emoji: '🌸' },
        { surahId: 78, label: 'Juz Amma Express', emoji: '⭐' },
        { surahId: 114, label: 'Journey Complete', emoji: '🎉' },
      ],
    },
    rewards: {
      completionBadge: 'train-conductor',
      collectibles: ['golden-ticket', 'conductor-hat', 'train-whistle'],
    },
    stations: generateStations('train'),
  },

  garden: {
    id: 'garden',
    name: 'Garden Path',
    nameAr: 'طريق الحديقة',
    emoji: '🌺',
    description: 'Walk through paradise gardens',
    descriptionAr: 'امشِ عبر حدائق الجنة',
    unlockLevel: 5,
    colors: {
      primary: '#10B981', // emerald
      secondary: '#34D399', // green
      accent: '#F472B6', // pink
      text: '#064E3B',
      textLight: '#A7F3D0',
      gradient: 'from-emerald-500 via-green-400 to-teal-500',
      gradientDark: 'from-emerald-700 via-green-600 to-teal-700',
    },
    background: {
      sky: '#E0F7FA',
      skyGradient: 'linear-gradient(180deg, #E0F7FA 0%, #FFFFFF 100%)',
      ground: '#81C784',
      groundGradient: 'linear-gradient(180deg, #81C784 0%, #4CAF50 100%)',
      elements: ['flowers', 'butterflies', 'fountains', 'birds', 'trees', 'arches'],
      parallaxLayers: [
        { id: 'sky', speed: 0.1, zIndex: 0 },
        { id: 'clouds', speed: 0.15, zIndex: 1 },
        { id: 'far-trees', speed: 0.3, zIndex: 2 },
        { id: 'flowers', speed: 0.5, zIndex: 3 },
        { id: 'path', speed: 1, zIndex: 4 },
      ],
    },
    vehicle: {
      type: 'carpet', // flying carpet
      name: 'Magic Carpet',
      nameAr: 'البساط السحري',
      emoji: '🧞',
      speed: 0.8,
      acceleration: 0.3,
      sounds: ['birds', 'water', 'wind', 'chimes'],
      animation: 'float-gentle',
      glowColor: '#34D399',
    },
    journey: {
      startLabel: 'Garden Gate',
      endLabel: 'Paradise End',
      milestones: [
        { surahId: 1, label: 'Garden Entrance', emoji: '🚪' },
        { surahId: 19, label: 'Maryam Meadow', emoji: '🌷' },
        { surahId: 55, label: 'Rahman Garden', emoji: '🌹' },
        { surahId: 76, label: 'Insan Oasis', emoji: '💧' },
        { surahId: 114, label: 'Garden Complete', emoji: '🏆' },
      ],
    },
    rewards: {
      completionBadge: 'garden-keeper',
      collectibles: ['golden-flower', 'butterfly-net', 'magic-seeds'],
    },
    stations: generateStations('garden'),
  },

  desert: {
    id: 'desert',
    name: 'Desert Caravan',
    nameAr: 'قافلة الصحراء',
    emoji: '🐪',
    description: 'Journey through golden sands',
    descriptionAr: 'رحلة عبر الرمال الذهبية',
    unlockLevel: 10,
    colors: {
      primary: '#F59E0B', // amber
      secondary: '#FBBF24', // yellow
      accent: '#EF4444', // red
      text: '#78350F',
      textLight: '#FDE68A',
      gradient: 'from-amber-500 via-orange-400 to-yellow-500',
      gradientDark: 'from-amber-700 via-orange-600 to-yellow-700',
    },
    background: {
      sky: '#FEF3C7',
      skyGradient: 'linear-gradient(180deg, #FEF3C7 0%, #FDE68A 50%, #F59E0B 100%)',
      ground: '#D2691E',
      groundGradient: 'linear-gradient(180deg, #D2691E 0%, #8B4513 100%)',
      elements: ['dunes', 'palms', 'oasis', 'stars', 'moon', 'tents'],
      parallaxLayers: [
        { id: 'sky', speed: 0.05, zIndex: 0 },
        { id: 'far-dunes', speed: 0.2, zIndex: 1 },
        { id: 'palms', speed: 0.4, zIndex: 2 },
        { id: 'near-dunes', speed: 0.6, zIndex: 3 },
        { id: 'sand', speed: 1, zIndex: 4 },
      ],
    },
    vehicle: {
      type: 'camel',
      name: 'Faithful Camel',
      nameAr: 'الجمل الأمين',
      emoji: '🐪',
      speed: 0.6,
      acceleration: 0.2,
      sounds: ['wind', 'camel', 'desert', 'bells'],
      animation: 'sway-walk',
      companions: 2, // Number of following camels
    },
    journey: {
      startLabel: 'Desert Edge',
      endLabel: 'Oasis of Knowledge',
      milestones: [
        { surahId: 1, label: 'Caravan Departs', emoji: '🐪' },
        { surahId: 12, label: 'Yusuf Trail', emoji: '⭐' },
        { surahId: 28, label: 'Qasas Crossing', emoji: '📜' },
        { surahId: 71, label: 'Nuh Dunes', emoji: '🌊' },
        { surahId: 114, label: 'Journey End', emoji: '🏕️' },
      ],
    },
    rewards: {
      completionBadge: 'desert-explorer',
      collectibles: ['golden-compass', 'water-flask', 'desert-star'],
    },
    stations: generateStations('desert'),
  },

  ocean: {
    id: 'ocean',
    name: 'Ocean Voyage',
    nameAr: 'رحلة المحيط',
    emoji: '⛵',
    description: 'Sail across beautiful seas',
    descriptionAr: 'أبحر عبر البحار الجميلة',
    unlockLevel: 15,
    colors: {
      primary: '#0EA5E9', // sky blue
      secondary: '#06B6D4', // cyan
      accent: '#8B5CF6', // purple
      text: '#0C4A6E',
      textLight: '#BAE6FD',
      gradient: 'from-sky-500 via-cyan-500 to-blue-600',
      gradientDark: 'from-sky-700 via-cyan-700 to-blue-800',
    },
    background: {
      sky: '#7DD3FC',
      skyGradient: 'linear-gradient(180deg, #7DD3FC 0%, #E0F2FE 100%)',
      ground: '#0284C7',
      groundGradient: 'linear-gradient(180deg, #0EA5E9 0%, #0369A1 100%)',
      elements: ['waves', 'fish', 'dolphins', 'islands', 'lighthouse', 'seagulls'],
      parallaxLayers: [
        { id: 'sky', speed: 0.1, zIndex: 0 },
        { id: 'clouds', speed: 0.15, zIndex: 1 },
        { id: 'far-islands', speed: 0.25, zIndex: 2 },
        { id: 'waves', speed: 0.5, zIndex: 3 },
        { id: 'water', speed: 1, zIndex: 4 },
      ],
    },
    vehicle: {
      type: 'ship',
      name: 'Quran Ship',
      nameAr: 'سفينة القرآن',
      emoji: '⛵',
      speed: 0.9,
      acceleration: 0.4,
      sounds: ['waves', 'seagulls', 'ship-horn', 'wind'],
      animation: 'rock-gentle',
      crew: ['captain', 'navigator'],
    },
    journey: {
      startLabel: 'Harbor of Faith',
      endLabel: 'Island of Completion',
      milestones: [
        { surahId: 1, label: 'Set Sail', emoji: '⛵' },
        { surahId: 10, label: 'Yunus Waters', emoji: '🐋' },
        { surahId: 55, label: 'Rahman Reef', emoji: '🐚' },
        { surahId: 71, label: 'Nuh Bay', emoji: '🌈' },
        { surahId: 114, label: 'Safe Harbor', emoji: '⚓' },
      ],
    },
    rewards: {
      completionBadge: 'ocean-captain',
      collectibles: ['golden-anchor', 'pearl', 'compass-rose'],
    },
    stations: generateStations('ocean'),
  },

  space: {
    id: 'space',
    name: 'Space Adventure',
    nameAr: 'مغامرة الفضاء',
    emoji: '🚀',
    description: 'Explore the universe of knowledge',
    descriptionAr: 'استكشف كون المعرفة',
    unlockLevel: 20,
    colors: {
      primary: '#8B5CF6', // violet
      secondary: '#A855F7', // purple
      accent: '#EC4899', // pink
      text: '#4C1D95',
      textLight: '#DDD6FE',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      gradientDark: 'from-violet-700 via-purple-700 to-fuchsia-700',
    },
    background: {
      sky: '#0F0A1E',
      skyGradient: 'linear-gradient(180deg, #0F0A1E 0%, #1E1B4B 50%, #312E81 100%)',
      ground: '#1E1B4B',
      groundGradient: 'radial-gradient(circle, #312E81 0%, #1E1B4B 100%)',
      elements: ['stars', 'planets', 'asteroids', 'nebula', 'comets', 'satellites'],
      parallaxLayers: [
        { id: 'deep-space', speed: 0.05, zIndex: 0 },
        { id: 'far-stars', speed: 0.1, zIndex: 1 },
        { id: 'planets', speed: 0.3, zIndex: 2 },
        { id: 'near-stars', speed: 0.5, zIndex: 3 },
        { id: 'space-lane', speed: 1, zIndex: 4 },
      ],
    },
    vehicle: {
      type: 'rocket',
      name: 'Quran Rocket',
      nameAr: 'صاروخ القرآن',
      emoji: '🚀',
      speed: 1.2,
      acceleration: 0.8,
      sounds: ['rocket', 'beeps', 'whoosh', 'stars'],
      animation: 'thrust-float',
      thrusters: true,
    },
    journey: {
      startLabel: 'Launch Pad',
      endLabel: 'Knowledge Galaxy',
      milestones: [
        { surahId: 1, label: 'Liftoff!', emoji: '🚀' },
        { surahId: 53, label: 'Najm Star', emoji: '⭐' },
        { surahId: 54, label: 'Qamar Moon', emoji: '🌙' },
        { surahId: 86, label: 'Tariq Station', emoji: '✨' },
        { surahId: 114, label: 'Mission Complete', emoji: '🌟' },
      ],
    },
    rewards: {
      completionBadge: 'space-explorer',
      collectibles: ['golden-star', 'moon-crystal', 'galaxy-map'],
    },
    stations: generateStations('space'),
  },

  seert: {
    id: 'seert',
    name: 'Seerah Journey',
    nameAr: 'رحلة السيرة',
    emoji: '🐪',
    description: 'Journey through the life of Prophet Muhammad (PBUH)',
    descriptionAr: 'رحلة عبر حياة النبي محمد ﷺ',
    unlockLevel: 1, // Available from start
    colors: {
      primary: '#D4A574', // sandy gold
      secondary: '#B8860B', // dark golden
      accent: '#10B981', // emerald
      text: '#78350F',
      textLight: '#FEF3C7',
      gradient: 'from-amber-600 via-yellow-700 to-orange-600',
      gradientDark: 'from-amber-800 via-yellow-900 to-orange-800',
    },
    background: {
      sky: '#FEF3C7',
      skyGradient: 'linear-gradient(180deg, #FEF3C7 0%, #FDE68A 50%, #FBBF24 100%)',
      ground: '#D2691E',
      groundGradient: 'linear-gradient(180deg, #D2691E 0%, #8B4513 100%)',
      elements: ['dunes', 'date-palms', 'camels', 'stars', 'moon', 'minarets', 'oasis'],
      parallaxLayers: [
        { id: 'sky', speed: 0.05, zIndex: 0 },
        { id: 'far-dunes', speed: 0.15, zIndex: 1 },
        { id: 'date-palms', speed: 0.3, zIndex: 2 },
        { id: 'near-dunes', speed: 0.5, zIndex: 3 },
        { id: 'sand-path', speed: 1, zIndex: 4 },
      ],
    },
    vehicle: {
      type: 'camel',
      name: 'Faithful Camel',
      nameAr: 'الجمل الأمين',
      emoji: '🐪',
      speed: 0.7,
      acceleration: 0.3,
      sounds: ['camel', 'wind', 'bells', 'desert'],
      animation: 'sway-walk',
      companions: 2, // Number of following camels
    },
    journey: {
      startLabel: 'Birth of the Prophet',
      endLabel: 'Farewell Pilgrimage',
      milestones: [
        { eventId: 1, label: 'Birth', emoji: '👶' },
        { eventId: 5, label: 'First Revelation', emoji: '📖' },
        { eventId: 10, label: 'Isra & Mi\'raj', emoji: '🌙' },
        { eventId: 11, label: 'Hijra', emoji: '🐪' },
        { eventId: 15, label: 'Conquest of Mecca', emoji: '🏰' },
        { eventId: 16, label: 'Farewell Pilgrimage', emoji: '🕋' },
      ],
    },
    rewards: {
      completionBadge: 'seerah-scholar',
      collectibles: ['golden-crescent', 'prophets-sandal', 'mecca-medal'],
    },
    stations: generateStations('seert'),
  },
};

// =============================================================================
// ACHIEVEMENTS - Gamification rewards for kids
// =============================================================================

export const ACHIEVEMENTS = {
  // Reading Milestones
  first_surah: {
    id: 'first_surah',
    name: 'First Steps',
    nameAr: 'الخطوة الأولى',
    description: 'Complete your first surah',
    descriptionAr: 'أكمل أول سورة لك',
    emoji: '🌟',
    icon: 'star',
    xpReward: 100,
    category: 'reading',
    requirement: { type: 'surahs_completed', count: 1 },
  },
  five_surahs: {
    id: 'five_surahs',
    name: 'Rising Star',
    nameAr: 'نجم صاعد',
    description: 'Complete 5 surahs',
    descriptionAr: 'أكمل ٥ سور',
    emoji: '⭐',
    icon: 'stars',
    xpReward: 250,
    category: 'reading',
    requirement: { type: 'surahs_completed', count: 5 },
  },
  ten_surahs: {
    id: 'ten_surahs',
    name: 'Super Reader',
    nameAr: 'قارئ ممتاز',
    description: 'Complete 10 surahs',
    descriptionAr: 'أكمل ١٠ سور',
    emoji: '🏅',
    icon: 'medal',
    xpReward: 500,
    category: 'reading',
    requirement: { type: 'surahs_completed', count: 10 },
  },
  juz_amma: {
    id: 'juz_amma',
    name: 'Juz Amma Hero',
    nameAr: 'بطل جزء عم',
    description: 'Complete all surahs in Juz Amma',
    descriptionAr: 'أكمل جميع سور جزء عم',
    emoji: '🎖️',
    icon: 'trophy',
    xpReward: 1000,
    category: 'reading',
    requirement: { type: 'juz_completed', juzId: 30 },
  },
  quran_complete: {
    id: 'quran_complete',
    name: 'Quran Champion',
    nameAr: 'بطل القرآن',
    description: 'Complete all 114 surahs',
    descriptionAr: 'أكمل جميع ١١٤ سورة',
    emoji: '👑',
    icon: 'crown',
    xpReward: 5000,
    category: 'reading',
    requirement: { type: 'surahs_completed', count: 114 },
  },

  // Streak Achievements
  three_day_streak: {
    id: 'three_day_streak',
    name: 'Getting Started',
    nameAr: 'البداية',
    description: 'Read for 3 days in a row',
    descriptionAr: 'اقرأ لمدة ٣ أيام متتالية',
    emoji: '🔥',
    icon: 'flame',
    xpReward: 150,
    category: 'streak',
    requirement: { type: 'streak_days', count: 3 },
  },
  seven_day_streak: {
    id: 'seven_day_streak',
    name: 'Week Warrior',
    nameAr: 'محارب الأسبوع',
    description: 'Read for 7 days in a row',
    descriptionAr: 'اقرأ لمدة ٧ أيام متتالية',
    emoji: '💪',
    icon: 'muscle',
    xpReward: 350,
    category: 'streak',
    requirement: { type: 'streak_days', count: 7 },
  },
  thirty_day_streak: {
    id: 'thirty_day_streak',
    name: 'Month Master',
    nameAr: 'سيد الشهر',
    description: 'Read for 30 days in a row',
    descriptionAr: 'اقرأ لمدة ٣٠ يوماً متتالياً',
    emoji: '🏆',
    icon: 'trophy',
    xpReward: 1500,
    category: 'streak',
    requirement: { type: 'streak_days', count: 30 },
  },

  // Theme Achievements
  train_complete: {
    id: 'train_complete',
    name: 'Train Conductor',
    nameAr: 'سائق القطار',
    description: 'Complete the train journey',
    descriptionAr: 'أكمل رحلة القطار',
    emoji: '🚂',
    icon: 'train',
    xpReward: 500,
    category: 'theme',
    requirement: { type: 'theme_completed', themeId: 'train' },
  },
  garden_complete: {
    id: 'garden_complete',
    name: 'Garden Keeper',
    nameAr: 'حارس الحديقة',
    description: 'Complete the garden path',
    descriptionAr: 'أكمل طريق الحديقة',
    emoji: '🌺',
    icon: 'flower',
    xpReward: 500,
    category: 'theme',
    requirement: { type: 'theme_completed', themeId: 'garden' },
  },
  desert_complete: {
    id: 'desert_complete',
    name: 'Desert Explorer',
    nameAr: 'مستكشف الصحراء',
    description: 'Complete the desert caravan',
    descriptionAr: 'أكمل رحلة القافلة',
    emoji: '🐪',
    icon: 'camel',
    xpReward: 500,
    category: 'theme',
    requirement: { type: 'theme_completed', themeId: 'desert' },
  },
  ocean_complete: {
    id: 'ocean_complete',
    name: 'Ocean Captain',
    nameAr: 'قبطان المحيط',
    description: 'Complete the ocean voyage',
    descriptionAr: 'أكمل رحلة المحيط',
    emoji: '⛵',
    icon: 'ship',
    xpReward: 500,
    category: 'theme',
    requirement: { type: 'theme_completed', themeId: 'ocean' },
  },
  space_complete: {
    id: 'space_complete',
    name: 'Space Explorer',
    nameAr: 'مستكشف الفضاء',
    description: 'Complete the space adventure',
    descriptionAr: 'أكمل مغامرة الفضاء',
    emoji: '🚀',
    icon: 'rocket',
    xpReward: 500,
    category: 'theme',
    requirement: { type: 'theme_completed', themeId: 'space' },
  },
  seert_complete: {
    id: 'seert_complete',
    name: 'Seerah Scholar',
    nameAr: 'عالم السيرة',
    description: 'Complete the Seerah journey',
    descriptionAr: 'أكمل رحلة السيرة',
    emoji: '🐪',
    icon: 'camel',
    xpReward: 600,
    category: 'theme',
    requirement: { type: 'theme_completed', themeId: 'seert' },
  },
  all_themes: {
    id: 'all_themes',
    name: 'Ultimate Explorer',
    nameAr: 'المستكشف النهائي',
    description: 'Complete all 6 theme journeys',
    descriptionAr: 'أكمل جميع الرحلات الست',
    emoji: '🌈',
    icon: 'rainbow',
    xpReward: 3500,
    category: 'theme',
    requirement: { type: 'all_themes_completed' },
  },

  // Special Achievements
  early_bird: {
    id: 'early_bird',
    name: 'Early Bird',
    nameAr: 'الطائر المبكر',
    description: 'Read before Fajr time',
    descriptionAr: 'اقرأ قبل صلاة الفجر',
    emoji: '🌅',
    icon: 'sunrise',
    xpReward: 200,
    category: 'special',
    requirement: { type: 'time_based', before: 'fajr' },
  },
  night_owl: {
    id: 'night_owl',
    name: 'Night Reader',
    nameAr: 'قارئ الليل',
    description: 'Read after Isha time',
    descriptionAr: 'اقرأ بعد صلاة العشاء',
    emoji: '🌙',
    icon: 'moon',
    xpReward: 200,
    category: 'special',
    requirement: { type: 'time_based', after: 'isha' },
  },
  friday_reader: {
    id: 'friday_reader',
    name: 'Friday Reader',
    nameAr: 'قارئ الجمعة',
    description: 'Read Surah Al-Kahf on Friday',
    descriptionAr: 'اقرأ سورة الكهف يوم الجمعة',
    emoji: '📖',
    icon: 'book',
    xpReward: 300,
    category: 'special',
    requirement: { type: 'specific_surah', surahId: 18, day: 'friday' },
  },
  memorizer: {
    id: 'memorizer',
    name: 'Little Hafiz',
    nameAr: 'الحافظ الصغير',
    description: 'Complete memorization mode for a surah',
    descriptionAr: 'أكمل وضع الحفظ لسورة واحدة',
    emoji: '🧠',
    icon: 'brain',
    xpReward: 400,
    category: 'special',
    requirement: { type: 'memorization_completed', count: 1 },
  },
};

// Get achievements by category
export const getAchievementsByCategory = (category) => {
  return Object.values(ACHIEVEMENTS).filter(a => a.category === category);
};

// =============================================================================
// SOUND EFFECTS - Audio configuration for kids mode
// =============================================================================

export const SOUND_EFFECTS = {
  // UI Sounds
  ui: {
    tap: {
      id: 'tap',
      file: 'tap.mp3',
      volume: 0.5,
      description: 'Button tap sound',
    },
    success: {
      id: 'success',
      file: 'success.mp3',
      volume: 0.6,
      description: 'Success/completion sound',
    },
    reward: {
      id: 'reward',
      file: 'reward.mp3',
      volume: 0.7,
      description: 'Achievement/reward unlocked',
    },
    levelUp: {
      id: 'level-up',
      file: 'level-up.mp3',
      volume: 0.8,
      description: 'Level up celebration',
    },
    error: {
      id: 'error',
      file: 'error.mp3',
      volume: 0.4,
      description: 'Error/incorrect sound',
    },
    pop: {
      id: 'pop',
      file: 'pop.mp3',
      volume: 0.4,
      description: 'Bubble pop sound',
    },
    whoosh: {
      id: 'whoosh',
      file: 'whoosh.mp3',
      volume: 0.5,
      description: 'Transition whoosh',
    },
  },

  // Train Theme Sounds
  train: {
    whistle: {
      id: 'train-whistle',
      file: 'train-whistle.mp3',
      volume: 0.6,
      description: 'Train whistle sound',
    },
    chugga: {
      id: 'chugga',
      file: 'chugga.mp3',
      volume: 0.4,
      loop: true,
      description: 'Train chugging sound',
    },
    bell: {
      id: 'train-bell',
      file: 'train-bell.mp3',
      volume: 0.5,
      description: 'Station bell',
    },
    arrival: {
      id: 'train-arrival',
      file: 'train-arrival.mp3',
      volume: 0.6,
      description: 'Arriving at station',
    },
  },

  // Garden Theme Sounds
  garden: {
    birds: {
      id: 'birds',
      file: 'birds.mp3',
      volume: 0.3,
      loop: true,
      description: 'Bird chirping ambient',
    },
    water: {
      id: 'fountain',
      file: 'fountain.mp3',
      volume: 0.3,
      loop: true,
      description: 'Fountain water sound',
    },
    wind: {
      id: 'gentle-wind',
      file: 'gentle-wind.mp3',
      volume: 0.2,
      loop: true,
      description: 'Gentle breeze',
    },
    chimes: {
      id: 'wind-chimes',
      file: 'wind-chimes.mp3',
      volume: 0.4,
      description: 'Wind chimes',
    },
    butterfly: {
      id: 'butterfly',
      file: 'flutter.mp3',
      volume: 0.3,
      description: 'Butterfly flutter',
    },
  },

  // Desert Theme Sounds
  desert: {
    wind: {
      id: 'desert-wind',
      file: 'desert-wind.mp3',
      volume: 0.3,
      loop: true,
      description: 'Desert wind ambient',
    },
    camel: {
      id: 'camel',
      file: 'camel.mp3',
      volume: 0.5,
      description: 'Camel sound',
    },
    bells: {
      id: 'caravan-bells',
      file: 'caravan-bells.mp3',
      volume: 0.4,
      loop: true,
      description: 'Caravan bells jingling',
    },
    oasis: {
      id: 'oasis',
      file: 'oasis.mp3',
      volume: 0.5,
      description: 'Oasis water sound',
    },
  },

  // Ocean Theme Sounds
  ocean: {
    waves: {
      id: 'waves',
      file: 'waves.mp3',
      volume: 0.4,
      loop: true,
      description: 'Ocean waves ambient',
    },
    seagulls: {
      id: 'seagulls',
      file: 'seagulls.mp3',
      volume: 0.3,
      description: 'Seagull calls',
    },
    shipHorn: {
      id: 'ship-horn',
      file: 'ship-horn.mp3',
      volume: 0.6,
      description: 'Ship horn',
    },
    splash: {
      id: 'splash',
      file: 'splash.mp3',
      volume: 0.5,
      description: 'Water splash',
    },
    dolphin: {
      id: 'dolphin',
      file: 'dolphin.mp3',
      volume: 0.5,
      description: 'Dolphin chirp',
    },
  },

  // Space Theme Sounds
  space: {
    rocket: {
      id: 'rocket',
      file: 'rocket.mp3',
      volume: 0.5,
      description: 'Rocket engine',
    },
    beeps: {
      id: 'space-beeps',
      file: 'space-beeps.mp3',
      volume: 0.3,
      loop: true,
      description: 'Space station beeps',
    },
    whoosh: {
      id: 'space-whoosh',
      file: 'space-whoosh.mp3',
      volume: 0.5,
      description: 'Flying through space',
    },
    stars: {
      id: 'star-collect',
      file: 'star-collect.mp3',
      volume: 0.6,
      description: 'Collecting a star',
    },
    landing: {
      id: 'landing',
      file: 'landing.mp3',
      volume: 0.6,
      description: 'Landing on planet',
    },
  },
};

// Get sounds for a specific theme
export const getThemeSounds = (themeId) => {
  return SOUND_EFFECTS[themeId] || {};
};

// =============================================================================
// HELPER EXPORTS
// =============================================================================

// Get theme by ID
export const getThemeById = (themeId) => KIDS_THEMES[themeId] || KIDS_THEMES.train;

// Get all theme IDs
export const getThemeIds = () => Object.keys(KIDS_THEMES);

// Get themes available at a certain level
export const getUnlockedThemes = (level) => {
  return Object.values(KIDS_THEMES).filter(theme => theme.unlockLevel <= level);
};

// Get surah by ID
export const getSurahById = (surahId) => SURAH_DATA.find(s => s.id === surahId);

// Get total verse count
export const getTotalVerseCount = () => SURAH_DATA.reduce((sum, s) => sum + s.verses, 0);

// Get surahs by difficulty
export const getSurahsByDifficulty = (difficultyId) => {
  const difficulty = DIFFICULTY_LEVELS[difficultyId];
  if (!difficulty) return [];

  const prevMax = difficultyId === 'easy' ? 0 :
                  difficultyId === 'medium' ? DIFFICULTY_LEVELS.easy.maxVerses :
                  DIFFICULTY_LEVELS.medium.maxVerses;

  return SURAH_DATA.filter(s => s.verses > prevMax && s.verses <= difficulty.maxVerses);
};

// Default export
export default {
  KIDS_THEMES,
  SURAH_DATA,
  DIFFICULTY_LEVELS,
  ACHIEVEMENTS,
  SOUND_EFFECTS,
  getSurahDifficulty,
  getThemeById,
  getThemeIds,
  getUnlockedThemes,
  getSurahById,
  getTotalVerseCount,
  getSurahsByDifficulty,
  getThemeSounds,
  getAchievementsByCategory,
};
