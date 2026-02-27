/**
 * Daily Verses — Dynamic, context-aware verse system
 * Categories: time-of-day, thematic (rizq, sabr, etc.), special days (Jumu'ah, Ramadan)
 * Uses QURAN_THEMES from ayahConnections.js for thematic verses
 */

import { QURAN_THEMES } from './ayahConnections';

// ── Verse Categories ──

export const VERSE_CATEGORIES = {
  // ─── TIME-OF-DAY ───
  morning: {
    id: 'morning',
    nameKey: 'dailyVerse.categories.morning',
    icon: 'Sunrise',
    emoji: '🌅',
    color: '#FBBF24',
    timeRange: [4, 11],
    verses: [
      { surah: 73, ayah: 20 },   // recite what is easy of the Quran
      { surah: 6, ayah: 96 },    // Splitter of daybreak
      { surah: 17, ayah: 78 },   // Indeed the recitation of dawn is witnessed
      { surah: 30, ayah: 17 },   // Glory to Allah morning and evening
      { surah: 3, ayah: 191 },   // Those who remember Allah standing, sitting
      { surah: 24, ayah: 58 },   // Three times of privacy - before Fajr
      { surah: 20, ayah: 130 },  // Glorify before sunrise
      { surah: 50, ayah: 39 },   // Glorify before rising of the sun
    ],
  },
  evening: {
    id: 'evening',
    nameKey: 'dailyVerse.categories.evening',
    icon: 'Sunset',
    emoji: '🌇',
    color: '#F472B6',
    timeRange: [15, 20],
    verses: [
      { surah: 24, ayah: 35 },   // Allah is the Light of the heavens
      { surah: 40, ayah: 55 },   // Glorify your Lord in evening
      { surah: 50, ayah: 40 },   // Glorify before sunset
      { surah: 55, ayah: 17 },   // Lord of the two easts and two wests
      { surah: 2, ayah: 255 },   // Ayatul Kursi
      { surah: 76, ayah: 25 },   // Remember the name of your Lord morning and evening
      { surah: 52, ayah: 49 },   // Glorify Him in the night and at setting of the stars
    ],
  },
  night: {
    id: 'night',
    nameKey: 'dailyVerse.categories.night',
    icon: 'Moon',
    emoji: '🌙',
    color: '#8B5CF6',
    timeRange: [20, 4],
    verses: [
      { surah: 67, ayah: 2 },    // Who created death and life to test you
      { surah: 32, ayah: 16 },   // Their sides forsake their beds
      { surah: 17, ayah: 79 },   // Tahajjud — pray during part of the night
      { surah: 39, ayah: 9 },    // Is one who worships during night hours
      { surah: 51, ayah: 18 },   // In hours before dawn they seek forgiveness
      { surah: 73, ayah: 1 },    // O you wrapped in garments, stand the night
      { surah: 76, ayah: 26 },   // Prostrate to Him during a long part of the night
      { surah: 36, ayah: 36 },   // Glory to Him who created pairs
    ],
  },

  // ─── THEMATIC — populated from QURAN_THEMES ───
  sabr: {
    id: 'sabr',
    nameKey: 'dailyVerse.categories.sabr',
    icon: 'Shield',
    emoji: '🛡️',
    color: '#06B6D4',
    verses: [], // populated below from QURAN_THEMES
  },
  shukr: {
    id: 'shukr',
    nameKey: 'dailyVerse.categories.shukr',
    icon: 'Star',
    emoji: '⭐',
    color: '#10B981',
    verses: [],
  },
  tawakkul: {
    id: 'tawakkul',
    nameKey: 'dailyVerse.categories.tawakkul',
    icon: 'Heart',
    emoji: '💚',
    color: '#8B5CF6',
    verses: [],
  },
  tawbah: {
    id: 'tawbah',
    nameKey: 'dailyVerse.categories.tawbah',
    icon: 'RefreshCw',
    emoji: '🔄',
    color: '#EC4899',
    verses: [],
  },
  dhikr: {
    id: 'dhikr',
    nameKey: 'dailyVerse.categories.dhikr',
    icon: 'Heart',
    emoji: '📿',
    color: '#A855F7',
    verses: [],
  },

  // ─── THEMATIC — custom verse sets ───
  rizq: {
    id: 'rizq',
    nameKey: 'dailyVerse.categories.rizq',
    icon: 'Gift',
    emoji: '🤲',
    color: '#22C55E',
    verses: [
      { surah: 65, ayah: 3 },    // Whoever relies on Allah, He provides from unexpected sources
      { surah: 29, ayah: 60 },   // How many creatures carry not their provision — Allah provides
      { surah: 11, ayah: 6 },    // There is no creature on earth but its provision is upon Allah
      { surah: 2, ayah: 212 },   // Allah provides without account
      { surah: 17, ayah: 30 },   // Indeed your Lord extends provision for whom He wills
      { surah: 62, ayah: 10 },   // Disperse in the land and seek from Allah's bounty
      { surah: 3, ayah: 27 },    // You provide for whom You will without account
      { surah: 42, ayah: 19 },   // Allah is Subtle with His servants; He provides
    ],
  },
  hardship: {
    id: 'hardship',
    nameKey: 'dailyVerse.categories.hardship',
    icon: 'Umbrella',
    emoji: '🌧️',
    color: '#F59E0B',
    verses: [
      { surah: 2, ayah: 286 },   // Allah does not burden a soul beyond capacity
      { surah: 94, ayah: 5 },    // Indeed with hardship comes ease
      { surah: 94, ayah: 6 },    // Indeed with hardship comes ease
      { surah: 65, ayah: 7 },    // Allah does not charge a soul except according to what He gave
      { surah: 2, ayah: 155 },   // We will surely test you with something of fear
      { surah: 21, ayah: 87 },   // There is no deity except You; I was among the wrongdoers
      { surah: 3, ayah: 139 },   // Do not weaken and do not grieve
      { surah: 12, ayah: 87 },   // Do not despair of relief from Allah
      { surah: 39, ayah: 53 },   // Do not despair of the mercy of Allah
    ],
  },
  hidayah: {
    id: 'hidayah',
    nameKey: 'dailyVerse.categories.hidayah',
    icon: 'Compass',
    emoji: '🧭',
    color: '#EAB308',
    verses: [
      { surah: 1, ayah: 6 },     // Guide us to the straight path
      { surah: 2, ayah: 2 },     // This is the Book about which there is no doubt, a guidance
      { surah: 6, ayah: 161 },   // Say: My Lord has guided me to a straight path
      { surah: 42, ayah: 52 },   // You guide to a straight path
      { surah: 29, ayah: 69 },   // Those who strive for Us, We guide them
      { surah: 10, ayah: 57 },   // There has come to you instruction from your Lord
      { surah: 93, ayah: 7 },    // He found you lost and guided you
    ],
  },
  rahma: {
    id: 'rahma',
    nameKey: 'dailyVerse.categories.rahma',
    icon: 'Cloud',
    emoji: '💝',
    color: '#F43F5E',
    verses: [
      { surah: 39, ayah: 53 },   // Do not despair of the mercy of Allah
      { surah: 6, ayah: 54 },    // Your Lord has decreed upon Himself mercy
      { surah: 7, ayah: 156 },   // My mercy encompasses all things
      { surah: 21, ayah: 107 },  // We have not sent you except as a mercy
      { surah: 12, ayah: 87 },   // Do not despair of relief from Allah
      { surah: 2, ayah: 186 },   // When My servants ask about Me, indeed I am near
      { surah: 10, ayah: 58 },   // In the bounty of Allah and His mercy, let them rejoice
    ],
  },

  // ─── SPECIAL DAYS ───
  jumuah: {
    id: 'jumuah',
    nameKey: 'dailyVerse.categories.jumuah',
    icon: 'Star',
    emoji: '🕌',
    color: '#3B82F6',
    dayOfWeek: 5, // Friday
    verses: [
      { surah: 62, ayah: 9 },    // When the call to prayer on Friday...
      { surah: 62, ayah: 10 },   // Disperse in the land and seek bounty
      { surah: 18, ayah: 1 },    // Praise to Allah who revealed the Book — Surah Kahf
      { surah: 18, ayah: 10 },   // Companions of the Cave
      { surah: 18, ayah: 109 },  // If the sea were ink for the words of my Lord
      { surah: 18, ayah: 46 },   // Wealth and children are ornaments; good deeds remain
    ],
  },
  ramadan: {
    id: 'ramadan',
    nameKey: 'dailyVerse.categories.ramadan',
    icon: 'Moon',
    emoji: '🌙',
    color: '#6366F1',
    hijriMonth: 9,
    verses: [
      { surah: 2, ayah: 183 },   // Fasting has been prescribed for you
      { surah: 2, ayah: 185 },   // Month of Ramadan in which the Quran was revealed
      { surah: 2, ayah: 186 },   // When My servants ask about Me, indeed I am near
      { surah: 2, ayah: 187 },   // Permitted for you during nights of fasting
      { surah: 97, ayah: 1 },    // Indeed, We sent the Quran down during Laylatul Qadr
      { surah: 97, ayah: 3 },    // Laylatul Qadr is better than a thousand months
    ],
  },
};

// ── Populate thematic categories from QURAN_THEMES ──
const THEME_MAP = { sabr: 'sabr', shukr: 'shukr', tawakkul: 'tawakkul', tawbah: 'tawbah', dhikr: 'dhikr' };
Object.entries(THEME_MAP).forEach(([catKey, themeKey]) => {
  if (QURAN_THEMES[themeKey]?.verses) {
    VERSE_CATEGORIES[catKey].verses = QURAN_THEMES[themeKey].verses.map(v => ({
      surah: v.surah,
      ayah: v.ayah,
    }));
  }
});

// ── Category groupings for UI ──
export const TIME_CATEGORIES = ['morning', 'evening', 'night'];
export const THEMATIC_CATEGORIES = ['sabr', 'shukr', 'tawakkul', 'tawbah', 'rizq', 'hardship', 'dhikr', 'hidayah', 'rahma'];
export const SPECIAL_CATEGORIES = ['jumuah', 'ramadan'];
export const ALL_CATEGORY_IDS = [...TIME_CATEGORIES, ...THEMATIC_CATEGORIES, ...SPECIAL_CATEGORIES];

// ── Smart Verse Selection ──

/**
 * Get a context-aware verse based on time of day, day of week, and date rotation
 * Returns { verse: { surah, ayah }, categoryId: string }
 */
export const getSmartVerse = () => {
  const now = new Date();
  const hour = now.getHours();
  const dayOfWeek = now.getDay(); // 0=Sun, 5=Fri
  const dateHash = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();

  // Priority 1: Friday → Jumu'ah verses
  if (dayOfWeek === 5) {
    const verses = VERSE_CATEGORIES.jumuah.verses;
    return { verse: verses[dateHash % verses.length], categoryId: 'jumuah' };
  }

  // Priority 2: Time-of-day
  let timeCat = null;
  if (hour >= 4 && hour < 11) timeCat = 'morning';
  else if (hour >= 15 && hour < 20) timeCat = 'evening';
  else if (hour >= 20 || hour < 4) timeCat = 'night';

  if (timeCat) {
    const verses = VERSE_CATEGORIES[timeCat].verses;
    return { verse: verses[dateHash % verses.length], categoryId: timeCat };
  }

  // Priority 3: Midday → rotate through thematic categories by date
  const catIndex = now.getDate() % THEMATIC_CATEGORIES.length;
  const catId = THEMATIC_CATEGORIES[catIndex];
  const verses = VERSE_CATEGORIES[catId].verses;
  return { verse: verses[dateHash % verses.length], categoryId: catId };
};

/**
 * Get all verses in a category
 */
export const getVersesByCategory = (categoryId) => {
  return VERSE_CATEGORIES[categoryId]?.verses || [];
};

/**
 * Get category metadata
 */
export const getCategoryInfo = (categoryId) => {
  return VERSE_CATEGORIES[categoryId] || null;
};

/**
 * Get all categories with metadata
 */
export const getAllCategories = () => {
  return ALL_CATEGORY_IDS.map(id => ({ id, ...VERSE_CATEGORIES[id] }));
};

// ── Backward compatibility ──

/** @deprecated Use getSmartVerse() instead */
export const DAILY_VERSES = Object.values(VERSE_CATEGORIES)
  .flatMap(cat => cat.verses)
  .filter((v, i, arr) => arr.findIndex(x => x.surah === v.surah && x.ayah === v.ayah) === i);

/** @deprecated Use getSmartVerse() instead */
export const getTodaysVerse = () => {
  const { verse } = getSmartVerse();
  return verse;
};

export const getVerseByTopic = (topic) => {
  const cat = VERSE_CATEGORIES[topic];
  if (!cat?.verses?.length) return null;
  return cat.verses[0];
};

export const getAvailableTopics = () => ALL_CATEGORY_IDS;
