/**
 * YouTube Scholars Data
 * World-renowned Quran scholars and reciters
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 * Following Single Responsibility Principle
 */

export const YOUTUBE_SCHOLARS = [
  // Reciters
  {
    id: 'alafasy',
    name: 'Mishary Rashid Alafasy',
    type: 'reciter',
    country: 'Kuwait',
    channel: 'allolooo',
    searchQuery: 'Mishary Alafasy',
  },
  {
    id: 'sudais',
    name: 'Abdul Rahman Al-Sudais',
    type: 'reciter',
    country: 'Saudi Arabia',
    channel: '',
    searchQuery: 'Abdul Rahman Al Sudais',
  },
  {
    id: 'shuraim',
    name: 'Saud Al-Shuraim',
    type: 'reciter',
    country: 'Saudi Arabia',
    channel: '',
    searchQuery: 'Saud Al Shuraim',
  },
  {
    id: 'minshawi',
    name: 'Mohamed Siddiq Al-Minshawi',
    type: 'reciter',
    country: 'Egypt',
    channel: '',
    searchQuery: 'Minshawi',
  },
  {
    id: 'husary',
    name: 'Mahmoud Khalil Al-Husary',
    type: 'reciter',
    country: 'Egypt',
    channel: '',
    searchQuery: 'Al Husary',
  },
  {
    id: 'abdulbasit',
    name: 'Abdul Basit Abdul Samad',
    type: 'reciter',
    country: 'Egypt',
    channel: '',
    searchQuery: 'Abdul Basit',
  },
  {
    id: 'maher',
    name: 'Maher Al Muaiqly',
    type: 'reciter',
    country: 'Saudi Arabia',
    channel: '',
    searchQuery: 'Maher Al Muaiqly',
  },

  // Scholars/Explainers
  {
    id: 'nouman',
    name: 'Nouman Ali Khan',
    type: 'scholar',
    country: 'USA',
    channel: 'baaboroom',
    searchQuery: 'Nouman Ali Khan',
  },
  {
    id: 'mufti-menk',
    name: 'Mufti Menk',
    type: 'scholar',
    country: 'Zimbabwe',
    channel: 'MuftiMenk',
    searchQuery: 'Mufti Menk',
  },
  {
    id: 'omar-suleiman',
    name: 'Omar Suleiman',
    type: 'scholar',
    country: 'USA',
    channel: 'OmarSuleiman',
    searchQuery: 'Omar Suleiman',
  },
  {
    id: 'yasir-qadhi',
    name: 'Yasir Qadhi',
    type: 'scholar',
    country: 'USA',
    channel: 'YasirQadhi',
    searchQuery: 'Yasir Qadhi',
  },
  {
    id: 'tariq-jameel',
    name: 'Maulana Tariq Jameel',
    type: 'scholar',
    country: 'Pakistan',
    channel: '',
    searchQuery: 'Tariq Jameel',
  },
  {
    id: 'zakir-naik',
    name: 'Dr. Zakir Naik',
    type: 'scholar',
    country: 'India',
    channel: 'Abordem1',
    searchQuery: 'Zakir Naik',
  },
  {
    id: 'israr-ahmed',
    name: 'Dr. Israr Ahmed',
    type: 'scholar',
    country: 'Pakistan',
    channel: '',
    searchQuery: 'Dr Israr Ahmed',
  },
  {
    id: 'assim-hakeem',
    name: 'Assim Al Hakeem',
    type: 'scholar',
    country: 'Saudi Arabia',
    channel: 'assaboreem1',
    searchQuery: 'Assim Al Hakeem',
  },
  {
    id: 'tahir-qadri',
    name: 'Dr. Tahir-ul-Qadri',
    type: 'scholar',
    country: 'Pakistan',
    channel: 'MinhajTV',
    searchQuery: 'Tahir ul Qadri',
  },
  {
    id: 'ghamidi',
    name: 'Javed Ahmad Ghamidi',
    type: 'scholar',
    country: 'Pakistan',
    channel: 'GhamidiCenterOfIslamicLearning',
    searchQuery: 'Javed Ghamidi',
  },
];

/**
 * Filter scholars by type
 * @param {'all' | 'reciter' | 'scholar'} type
 * @returns {Array} Filtered scholars
 */
export const filterScholarsByType = (type) => {
  if (type === 'all') return YOUTUBE_SCHOLARS;
  return YOUTUBE_SCHOLARS.filter((s) => s.type === type);
};

/**
 * Generate YouTube search URL for a scholar and surah
 * @param {Object} scholar
 * @param {string} surahName
 * @param {'reciter' | 'scholar'} contentType
 * @returns {string} YouTube search URL
 */
export const getScholarSearchUrl = (scholar, surahName, contentType) => {
  const query = `${scholar.searchQuery} Surah ${surahName} ${
    contentType === 'reciter' ? 'recitation' : 'tafseer'
  }`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
};

/**
 * Generate general YouTube search URL
 * @param {string} surahName
 * @param {string} type - 'recitation' or 'tafseer explanation'
 * @returns {string} YouTube search URL
 */
export const getGeneralSearchUrl = (surahName, type) => {
  const query = `Surah ${surahName} ${type}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
};
