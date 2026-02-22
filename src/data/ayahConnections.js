/**
 * Ayah Connections Data
 * Maps relationships between verses across the Quran
 * Types: theme, word, story, reference
 */

// Connection types with colors
export const CONNECTION_TYPES = {
  theme: { label: 'Same Theme', color: '#8B5CF6', description: 'Verses discussing the same topic' },
  word: { label: 'Same Word', color: '#06B6D4', description: 'Verses containing the same key word' },
  story: { label: 'Same Story', color: '#F59E0B', description: 'Parts of the same narrative' },
  reference: { label: 'Cross Reference', color: '#10B981', description: 'One verse references another' },
  contrast: { label: 'Contrast', color: '#EC4899', description: 'Contrasting ideas or commands' },
};

// Major Quranic themes with associated verses
export const QURAN_THEMES = {
  sabr: {
    name: 'Patience (Sabr)',
    nameAr: 'الصبر',
    color: '#06B6D4',
    icon: 'Cloud',
    description: 'Verses about patience and perseverance',
    verses: [
      { surah: 2, ayah: 45 }, { surah: 2, ayah: 153 }, { surah: 2, ayah: 155 },
      { surah: 3, ayah: 200 }, { surah: 16, ayah: 127 }, { surah: 39, ayah: 10 },
      { surah: 46, ayah: 35 }, { surah: 103, ayah: 3 }, { surah: 90, ayah: 17 },
    ],
  },
  tawakkul: {
    name: 'Trust in Allah (Tawakkul)',
    nameAr: 'التوكل',
    color: '#8B5CF6',
    icon: 'Heart',
    description: 'Verses about relying on Allah',
    verses: [
      { surah: 3, ayah: 159 }, { surah: 5, ayah: 23 }, { surah: 8, ayah: 49 },
      { surah: 9, ayah: 51 }, { surah: 12, ayah: 67 }, { surah: 14, ayah: 12 },
      { surah: 25, ayah: 58 }, { surah: 33, ayah: 3 }, { surah: 65, ayah: 3 },
    ],
  },
  shukr: {
    name: 'Gratitude (Shukr)',
    nameAr: 'الشكر',
    color: '#10B981',
    icon: 'Star',
    description: 'Verses about thankfulness to Allah',
    verses: [
      { surah: 2, ayah: 152 }, { surah: 2, ayah: 172 }, { surah: 14, ayah: 7 },
      { surah: 16, ayah: 114 }, { surah: 27, ayah: 40 }, { surah: 31, ayah: 12 },
      { surah: 34, ayah: 13 }, { surah: 39, ayah: 66 }, { surah: 54, ayah: 35 },
    ],
  },
  tawbah: {
    name: 'Repentance (Tawbah)',
    nameAr: 'التوبة',
    color: '#EC4899',
    icon: 'Refresh',
    description: 'Verses about seeking forgiveness',
    verses: [
      { surah: 2, ayah: 37 }, { surah: 2, ayah: 128 }, { surah: 4, ayah: 17 },
      { surah: 9, ayah: 104 }, { surah: 11, ayah: 3 }, { surah: 25, ayah: 70 },
      { surah: 39, ayah: 53 }, { surah: 66, ayah: 8 }, { surah: 110, ayah: 3 },
    ],
  },
  ihsan: {
    name: 'Excellence (Ihsan)',
    nameAr: 'الإحسان',
    color: '#F59E0B',
    icon: 'Award',
    description: 'Verses about doing good',
    verses: [
      { surah: 2, ayah: 195 }, { surah: 3, ayah: 134 }, { surah: 5, ayah: 93 },
      { surah: 16, ayah: 90 }, { surah: 28, ayah: 77 }, { surah: 55, ayah: 60 },
    ],
  },
  jannah: {
    name: 'Paradise (Jannah)',
    nameAr: 'الجنة',
    color: '#22C55E',
    icon: 'Sun',
    description: 'Descriptions of Paradise',
    verses: [
      { surah: 2, ayah: 25 }, { surah: 3, ayah: 15 }, { surah: 9, ayah: 72 },
      { surah: 13, ayah: 35 }, { surah: 47, ayah: 15 }, { surah: 55, ayah: 46 },
      { surah: 56, ayah: 15 }, { surah: 76, ayah: 12 }, { surah: 88, ayah: 10 },
    ],
  },
  tawhid: {
    name: 'Oneness of Allah (Tawhid)',
    nameAr: 'التوحيد',
    color: '#3B82F6',
    icon: 'Circle',
    description: 'Verses about monotheism',
    verses: [
      { surah: 2, ayah: 163 }, { surah: 2, ayah: 255 }, { surah: 3, ayah: 2 },
      { surah: 6, ayah: 102 }, { surah: 20, ayah: 14 }, { surah: 59, ayah: 22 },
      { surah: 112, ayah: 1 }, { surah: 112, ayah: 2 }, { surah: 112, ayah: 3 },
    ],
  },
  salah: {
    name: 'Prayer (Salah)',
    nameAr: 'الصلاة',
    color: '#6366F1',
    icon: 'Moon',
    description: 'Verses about prayer',
    verses: [
      { surah: 2, ayah: 43 }, { surah: 2, ayah: 238 }, { surah: 4, ayah: 103 },
      { surah: 11, ayah: 114 }, { surah: 17, ayah: 78 }, { surah: 20, ayah: 14 },
      { surah: 29, ayah: 45 }, { surah: 62, ayah: 9 }, { surah: 107, ayah: 4 },
    ],
  },
  dhikr: {
    name: 'Remembrance (Dhikr)',
    nameAr: 'الذكر',
    color: '#A855F7',
    icon: 'Heart',
    description: 'Verses about remembering Allah',
    verses: [
      { surah: 2, ayah: 152 }, { surah: 3, ayah: 191 }, { surah: 13, ayah: 28 },
      { surah: 18, ayah: 24 }, { surah: 33, ayah: 41 }, { surah: 39, ayah: 23 },
      { surah: 62, ayah: 10 }, { surah: 73, ayah: 8 }, { surah: 87, ayah: 15 },
    ],
  },
  adl: {
    name: 'Justice (Adl)',
    nameAr: 'العدل',
    color: '#EF4444',
    icon: 'Scale',
    description: 'Verses about justice',
    verses: [
      { surah: 4, ayah: 58 }, { surah: 4, ayah: 135 }, { surah: 5, ayah: 8 },
      { surah: 6, ayah: 152 }, { surah: 16, ayah: 90 }, { surah: 49, ayah: 9 },
      { surah: 57, ayah: 25 }, { surah: 60, ayah: 8 },
    ],
  },
};

// Stories that span multiple surahs
export const QURAN_STORIES = {
  musa: {
    name: 'Story of Musa (Moses)',
    nameAr: 'قصة موسى',
    color: '#3B82F6',
    icon: 'Book',
    description: 'The complete story of Prophet Musa across the Quran',
    chapters: [
      { surah: 2, ayahs: [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61] },
      { surah: 7, ayahs: [103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156] },
      { surah: 10, ayahs: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92] },
      { surah: 20, ayahs: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98] },
      { surah: 26, ayahs: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68] },
      { surah: 28, ayahs: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43] },
    ],
  },
  ibrahim: {
    name: 'Story of Ibrahim (Abraham)',
    nameAr: 'قصة إبراهيم',
    color: '#10B981',
    icon: 'Star',
    description: 'Prophet Ibrahim\'s journey',
    chapters: [
      { surah: 2, ayahs: [124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141] },
      { surah: 6, ayahs: [74, 75, 76, 77, 78, 79, 80, 81, 82, 83] },
      { surah: 14, ayahs: [35, 36, 37, 38, 39, 40, 41] },
      { surah: 21, ayahs: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73] },
      { surah: 37, ayahs: [83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113] },
    ],
  },
  yusuf: {
    name: 'Story of Yusuf (Joseph)',
    nameAr: 'قصة يوسف',
    color: '#F59E0B',
    icon: 'Sun',
    description: 'The best of stories',
    chapters: [
      { surah: 12, ayahs: Array.from({ length: 111 }, (_, i) => i + 1) },
    ],
  },
  isa: {
    name: 'Story of Isa (Jesus)',
    nameAr: 'قصة عيسى',
    color: '#8B5CF6',
    icon: 'Cloud',
    description: 'Prophet Isa and Maryam',
    chapters: [
      { surah: 3, ayahs: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60] },
      { surah: 5, ayahs: [110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120] },
      { surah: 19, ayahs: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
    ],
  },
  nuh: {
    name: 'Story of Nuh (Noah)',
    nameAr: 'قصة نوح',
    color: '#06B6D4',
    icon: 'Anchor',
    description: 'The great flood',
    chapters: [
      { surah: 7, ayahs: [59, 60, 61, 62, 63, 64] },
      { surah: 11, ayahs: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49] },
      { surah: 23, ayahs: [23, 24, 25, 26, 27, 28, 29, 30] },
      { surah: 71, ayahs: Array.from({ length: 28 }, (_, i) => i + 1) },
    ],
  },
  adam: {
    name: 'Story of Adam',
    nameAr: 'قصة آدم',
    color: '#22C55E',
    icon: 'Leaf',
    description: 'Creation and the Garden',
    chapters: [
      { surah: 2, ayahs: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39] },
      { surah: 7, ayahs: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
      { surah: 15, ayahs: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] },
      { surah: 20, ayahs: [115, 116, 117, 118, 119, 120, 121, 122, 123, 124] },
    ],
  },
};

// Key words with their occurrences
export const KEY_WORDS = {
  Allah: {
    nameAr: 'الله',
    color: '#3B82F6',
    count: 2699,
    sample_verses: [
      { surah: 1, ayah: 1 }, { surah: 2, ayah: 255 }, { surah: 112, ayah: 1 },
    ],
  },
  Quran: {
    nameAr: 'القرآن',
    color: '#8B5CF6',
    count: 70,
    sample_verses: [
      { surah: 2, ayah: 185 }, { surah: 17, ayah: 9 }, { surah: 55, ayah: 2 },
    ],
  },
  Salah: {
    nameAr: 'الصلاة',
    color: '#10B981',
    count: 67,
    sample_verses: [
      { surah: 2, ayah: 43 }, { surah: 4, ayah: 103 }, { surah: 29, ayah: 45 },
    ],
  },
  Taqwa: {
    nameAr: 'التقوى',
    color: '#F59E0B',
    count: 258,
    sample_verses: [
      { surah: 2, ayah: 2 }, { surah: 2, ayah: 197 }, { surah: 3, ayah: 102 },
    ],
  },
  Iman: {
    nameAr: 'الإيمان',
    color: '#EC4899',
    count: 811,
    sample_verses: [
      { surah: 2, ayah: 3 }, { surah: 3, ayah: 193 }, { surah: 49, ayah: 14 },
    ],
  },
};

// Sajdah Ayat - 14 verses where prostration is required
export const SAJDAH_AYAT = [
  { surah: 7, ayah: 206, name: 'Al-A\'raf', arabic: 'الأعراف' },
  { surah: 13, ayah: 15, name: 'Ar-Ra\'d', arabic: 'الرعد' },
  { surah: 16, ayah: 50, name: 'An-Nahl', arabic: 'النحل' },
  { surah: 17, ayah: 109, name: 'Al-Isra', arabic: 'الإسراء' },
  { surah: 19, ayah: 58, name: 'Maryam', arabic: 'مريم' },
  { surah: 22, ayah: 18, name: 'Al-Hajj', arabic: 'الحج' },
  { surah: 22, ayah: 77, name: 'Al-Hajj', arabic: 'الحج' },
  { surah: 25, ayah: 60, name: 'Al-Furqan', arabic: 'الفرقان' },
  { surah: 27, ayah: 26, name: 'An-Naml', arabic: 'النمل' },
  { surah: 32, ayah: 15, name: 'As-Sajdah', arabic: 'السجدة' },
  { surah: 38, ayah: 24, name: 'Sad', arabic: 'ص' },
  { surah: 41, ayah: 38, name: 'Fussilat', arabic: 'فصلت' },
  { surah: 53, ayah: 62, name: 'An-Najm', arabic: 'النجم' },
  { surah: 84, ayah: 21, name: 'Al-Inshiqaq', arabic: 'الانشقاق' },
  { surah: 96, ayah: 19, name: 'Al-Alaq', arabic: 'العلق' },
];

// Huroof al-Muqatta'at - Disjointed letters at the beginning of 29 surahs
export const MUQATTAAT = [
  { surah: 2, letters: 'الٓمٓ', latin: 'Alif Lam Mim', name: 'Al-Baqarah', arabic: 'البقرة' },
  { surah: 3, letters: 'الٓمٓ', latin: 'Alif Lam Mim', name: 'Aal-Imran', arabic: 'آل عمران' },
  { surah: 7, letters: 'الٓمٓصٓ', latin: 'Alif Lam Mim Sad', name: 'Al-A\'raf', arabic: 'الأعراف' },
  { surah: 10, letters: 'الٓر', latin: 'Alif Lam Ra', name: 'Yunus', arabic: 'يونس' },
  { surah: 11, letters: 'الٓر', latin: 'Alif Lam Ra', name: 'Hud', arabic: 'هود' },
  { surah: 12, letters: 'الٓر', latin: 'Alif Lam Ra', name: 'Yusuf', arabic: 'يوسف' },
  { surah: 13, letters: 'الٓمٓر', latin: 'Alif Lam Mim Ra', name: 'Ar-Ra\'d', arabic: 'الرعد' },
  { surah: 14, letters: 'الٓر', latin: 'Alif Lam Ra', name: 'Ibrahim', arabic: 'إبراهيم' },
  { surah: 15, letters: 'الٓر', latin: 'Alif Lam Ra', name: 'Al-Hijr', arabic: 'الحجر' },
  { surah: 19, letters: 'كٓهٰيٰعٓصٓ', latin: 'Kaf Ha Ya Ain Sad', name: 'Maryam', arabic: 'مريم' },
  { surah: 20, letters: 'طٰهٰ', latin: 'Ta Ha', name: 'Ta-Ha', arabic: 'طه' },
  { surah: 26, letters: 'طٰسٓمٓ', latin: 'Ta Sin Mim', name: 'Ash-Shu\'ara', arabic: 'الشعراء' },
  { surah: 27, letters: 'طٰسٓ', latin: 'Ta Sin', name: 'An-Naml', arabic: 'النمل' },
  { surah: 28, letters: 'طٰسٓمٓ', latin: 'Ta Sin Mim', name: 'Al-Qasas', arabic: 'القصص' },
  { surah: 29, letters: 'الٓمٓ', latin: 'Alif Lam Mim', name: 'Al-Ankabut', arabic: 'العنكبوت' },
  { surah: 30, letters: 'الٓمٓ', latin: 'Alif Lam Mim', name: 'Ar-Rum', arabic: 'الروم' },
  { surah: 31, letters: 'الٓمٓ', latin: 'Alif Lam Mim', name: 'Luqman', arabic: 'لقمان' },
  { surah: 32, letters: 'الٓمٓ', latin: 'Alif Lam Mim', name: 'As-Sajdah', arabic: 'السجدة' },
  { surah: 36, letters: 'يٰسٓ', latin: 'Ya Sin', name: 'Ya-Sin', arabic: 'يس' },
  { surah: 38, letters: 'صٓ', latin: 'Sad', name: 'Sad', arabic: 'ص' },
  { surah: 40, letters: 'حٰمٓ', latin: 'Ha Mim', name: 'Ghafir', arabic: 'غافر' },
  { surah: 41, letters: 'حٰمٓ', latin: 'Ha Mim', name: 'Fussilat', arabic: 'فصلت' },
  { surah: 42, letters: 'حٰمٓ عٓسٓقٓ', latin: 'Ha Mim Ain Sin Qaf', name: 'Ash-Shura', arabic: 'الشورى' },
  { surah: 43, letters: 'حٰمٓ', latin: 'Ha Mim', name: 'Az-Zukhruf', arabic: 'الزخرف' },
  { surah: 44, letters: 'حٰمٓ', latin: 'Ha Mim', name: 'Ad-Dukhan', arabic: 'الدخان' },
  { surah: 45, letters: 'حٰمٓ', latin: 'Ha Mim', name: 'Al-Jathiyah', arabic: 'الجاثية' },
  { surah: 46, letters: 'حٰمٓ', latin: 'Ha Mim', name: 'Al-Ahqaf', arabic: 'الأحقاف' },
  { surah: 50, letters: 'قٓ', latin: 'Qaf', name: 'Qaf', arabic: 'ق' },
  { surah: 68, letters: 'نٓ', latin: 'Nun', name: 'Al-Qalam', arabic: 'القلم' },
];

// Get connections for a specific verse
export const getVerseConnections = (surahId, ayahNum) => {
  const connections = {
    themes: [],
    stories: [],
    words: [],
  };

  // Check themes
  Object.entries(QURAN_THEMES).forEach(([key, theme]) => {
    const found = theme.verses.find(v => v.surah === surahId && v.ayah === ayahNum);
    if (found) {
      const related = theme.verses.filter(v => !(v.surah === surahId && v.ayah === ayahNum));
      connections.themes.push({
        id: key,
        ...theme,
        relatedVerses: related.slice(0, 10),
      });
    }
  });

  // Check stories
  Object.entries(QURAN_STORIES).forEach(([key, story]) => {
    for (const chapter of story.chapters) {
      if (chapter.surah === surahId && chapter.ayahs.includes(ayahNum)) {
        const related = [];
        story.chapters.forEach(ch => {
          if (ch.surah !== surahId) {
            related.push({ surah: ch.surah, ayah: ch.ayahs[0] });
          }
        });
        connections.stories.push({
          id: key,
          ...story,
          relatedVerses: related.slice(0, 10),
        });
        break;
      }
    }
  });

  return connections;
};

// Get all themes
export const getAllThemes = () => Object.entries(QURAN_THEMES).map(([id, theme]) => ({
  id,
  ...theme,
}));

// Get all stories
export const getAllStories = () => Object.entries(QURAN_STORIES).map(([id, story]) => ({
  id,
  ...story,
}));

export default {
  CONNECTION_TYPES,
  QURAN_THEMES,
  QURAN_STORIES,
  KEY_WORDS,
  SAJDAH_AYAT,
  MUQATTAAT,
  getVerseConnections,
  getAllThemes,
  getAllStories,
};
