/**
 * Nature Parallels Data
 * Maps Quranic verses about nature to real-world phenomena
 * Used by the Living Visualization feature
 */

export const NATURE_PARALLELS = {
  mountains: {
    id: 'mountains',
    name: 'Mountains as Pegs',
    nameAr: 'الجبال أوتادًا',
    icon: 'Mountain',
    color: '#6B7280',
    description: 'The Quran describes mountains as pegs that stabilize the earth, a scientific fact discovered only recently.',
    verses: [
      { surah: 78, ayah: 7, arabic: 'وَالْجِبَالَ أَوْتَادًا', translation: 'And the mountains as pegs' },
      { surah: 21, ayah: 31, arabic: 'وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ', translation: 'And We placed within the earth firmly set mountains' },
      { surah: 16, ayah: 15, arabic: 'وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِكُمْ', translation: 'And He has cast into the earth firmly set mountains, lest it shift with you' },
    ],
    scientificFact: 'Modern geology confirms mountains have deep roots extending into the Earth\'s crust, like pegs or stakes, helping to stabilize tectonic plates.',
    imageKeywords: ['mountain roots', 'plate tectonics', 'geology'],
  },

  water_cycle: {
    id: 'water_cycle',
    name: 'Water Cycle',
    nameAr: 'دورة الماء',
    icon: 'Waves',
    color: '#3B82F6',
    description: 'The Quran accurately describes the water cycle centuries before it was scientifically understood.',
    verses: [
      { surah: 39, ayah: 21, arabic: 'أَلَمْ تَرَ أَنَّ اللَّهَ أَنزَلَ مِنَ السَّمَاءِ مَاءً', translation: 'Do you not see that Allah sends down rain from the sky' },
      { surah: 23, ayah: 18, arabic: 'وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً بِقَدَرٍ', translation: 'And We have sent down rain from the sky in a measured amount' },
      { surah: 30, ayah: 48, arabic: 'اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ فَتُثِيرُ سَحَابًا', translation: 'Allah is the One who sends the winds, and they stir the clouds' },
    ],
    scientificFact: 'The water cycle involves evaporation, cloud formation through wind, precipitation in measured amounts, and storage underground - all mentioned in the Quran.',
    imageKeywords: ['water cycle', 'rain clouds', 'precipitation'],
  },

  bees: {
    id: 'bees',
    name: 'The Bee',
    nameAr: 'النحل',
    icon: 'Star',
    color: '#F59E0B',
    description: 'The Quran refers to the bee in female form, which was unknown at the time - worker bees are indeed female.',
    verses: [
      { surah: 16, ayah: 68, arabic: 'وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ', translation: 'And your Lord inspired to the bee' },
      { surah: 16, ayah: 69, arabic: 'يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ', translation: 'From their bellies comes a drink of varying colors' },
    ],
    scientificFact: 'The Arabic verb used for the bee is in the feminine form. Scientists only discovered in the 20th century that worker bees (who make honey) are exclusively female.',
    imageKeywords: ['honeybee', 'beehive', 'honey production'],
  },

  embryology: {
    id: 'embryology',
    name: 'Human Development',
    nameAr: 'خلق الإنسان',
    icon: 'Heart',
    color: '#EC4899',
    description: 'The Quran describes stages of embryonic development with remarkable accuracy.',
    verses: [
      { surah: 23, ayah: 14, arabic: 'خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا الْعَلَقَةَ مُضْغَةً', translation: 'Then We made the sperm-drop into a clinging clot, and We made the clot into a lump' },
      { surah: 22, ayah: 5, arabic: 'ثُمَّ مِن مُّضْغَةٍ مُّخَلَّقَةٍ وَغَيْرِ مُخَلَّقَةٍ', translation: 'Then from a lump, formed and unformed' },
      { surah: 39, ayah: 6, arabic: 'يَخْلُقُكُمْ فِي بُطُونِ أُمَّهَاتِكُمْ خَلْقًا مِّن بَعْدِ خَلْقٍ فِي ظُلُمَاتٍ ثَلَاثٍ', translation: 'He creates you in the wombs of your mothers, creation after creation, within three darknesses' },
    ],
    scientificFact: 'The "three darknesses" refer to the abdominal wall, uterine wall, and amniotic sac. The stages described match modern embryology.',
    imageKeywords: ['embryo development', 'fetal stages', 'human embryology'],
  },

  universe_expansion: {
    id: 'universe_expansion',
    name: 'Expanding Universe',
    nameAr: 'توسع الكون',
    icon: 'Stars',
    color: '#8B5CF6',
    description: 'The Quran mentions the expansion of the universe, a concept discovered only in the 20th century.',
    verses: [
      { surah: 51, ayah: 47, arabic: 'وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ', translation: 'And the heaven We constructed with strength, and indeed, We are [its] expander' },
    ],
    scientificFact: 'Edwin Hubble discovered in 1929 that the universe is expanding. The Quran mentioned this 1400 years ago.',
    imageKeywords: ['universe expansion', 'galaxies', 'cosmic expansion'],
  },

  iron: {
    id: 'iron',
    name: 'Iron from Space',
    nameAr: 'الحديد من السماء',
    icon: 'Zap',
    color: '#EF4444',
    description: 'The Quran states that iron was "sent down" - science confirms iron formed in supernovae.',
    verses: [
      { surah: 57, ayah: 25, arabic: 'وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ', translation: 'And We sent down iron, wherein is great military might' },
    ],
    scientificFact: 'Iron cannot form in our solar system naturally. It was produced in supernova explosions and "sent down" to Earth via meteorites billions of years ago.',
    imageKeywords: ['supernova', 'iron meteorite', 'space iron'],
  },

  barrier_seas: {
    id: 'barrier_seas',
    name: 'Barrier Between Seas',
    nameAr: 'حاجز البحرين',
    icon: 'Waves',
    color: '#06B6D4',
    description: 'The Quran describes an invisible barrier between two seas that prevents mixing.',
    verses: [
      { surah: 55, ayah: 19, arabic: 'مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ', translation: 'He released the two seas, meeting [side by side]' },
      { surah: 55, ayah: 20, arabic: 'بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ', translation: 'Between them is a barrier they do not transgress' },
      { surah: 25, ayah: 53, arabic: 'وَجَعَلَ بَيْنَهُمَا بَرْزَخًا وَحِجْرًا مَّحْجُورًا', translation: 'And He placed between them a barrier and prohibiting partition' },
    ],
    scientificFact: 'Oceanography has discovered that when fresh and salt water meet, or two seas of different salinity, they maintain distinct layers due to density differences - a "barrier" that prevents mixing.',
    imageKeywords: ['halocline', 'sea barrier', 'water density'],
  },

  fingerprints: {
    id: 'fingerprints',
    name: 'Fingerprints',
    nameAr: 'البصمات',
    icon: 'Target',
    color: '#10B981',
    description: 'The Quran mentions the uniqueness of fingertips, emphasizing Allah\'s ability to recreate even the smallest details.',
    verses: [
      { surah: 75, ayah: 4, arabic: 'بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ', translation: 'Yes, [We are] able to proportion his fingertips' },
    ],
    scientificFact: 'Fingerprints were only discovered to be unique identifiers in the late 19th century. The Quran emphasized the fingertips specifically 1400 years ago.',
    imageKeywords: ['fingerprint', 'unique identity', 'biometrics'],
  },

  darkness_ocean: {
    id: 'darkness_ocean',
    name: 'Deep Sea Darkness',
    nameAr: 'ظلمات البحر',
    icon: 'Moon',
    color: '#1E3A8A',
    description: 'The Quran describes the layered darkness of deep oceans, impossible to know without modern technology.',
    verses: [
      { surah: 24, ayah: 40, arabic: 'أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُّجِّيٍّ يَغْشَاهُ مَوْجٌ مِّن فَوْقِهِ مَوْجٌ', translation: 'Or [they are] like darkness within an unfathomable sea covered by waves, upon which are waves' },
    ],
    scientificFact: 'At 200 meters depth, light disappears. Deep ocean has internal waves between water layers. This was unknown until the 20th century with submarines.',
    imageKeywords: ['deep ocean', 'ocean darkness', 'underwater depths'],
  },

  pain_receptors: {
    id: 'pain_receptors',
    name: 'Pain Receptors',
    nameAr: 'مستقبلات الألم',
    icon: 'Zap',
    color: '#DC2626',
    description: 'The Quran mentions that skin specifically feels pain, a fact confirmed by modern medicine.',
    verses: [
      { surah: 4, ayah: 56, arabic: 'كُلَّمَا نَضِجَتْ جُلُودُهُم بَدَّلْنَاهُمْ جُلُودًا غَيْرَهَا', translation: 'Every time their skins are roasted through, We will replace them with other skins so they may taste the punishment' },
    ],
    scientificFact: 'Pain receptors are concentrated in the skin. When skin is completely burned, pain sensation is lost. The Quran mentions replacement of skin to continue feeling - a medically accurate detail.',
    imageKeywords: ['skin anatomy', 'pain receptors', 'nerve endings'],
  },
};

// Word frequency data for word cloud
export const QURAN_WORD_FREQUENCIES = {
  Allah: { count: 2699, color: '#3B82F6' },
  Rab: { count: 980, color: '#8B5CF6', translation: 'Lord' },
  Quran: { count: 70, color: '#10B981' },
  Iman: { count: 811, color: '#EC4899', translation: 'Faith' },
  Salah: { count: 99, color: '#F59E0B', translation: 'Prayer' },
  Taqwa: { count: 258, color: '#EF4444', translation: 'God-consciousness' },
  Rahma: { count: 339, color: '#06B6D4', translation: 'Mercy' },
  Ilm: { count: 854, color: '#6366F1', translation: 'Knowledge' },
  Hidayah: { count: 316, color: '#22C55E', translation: 'Guidance' },
  Jannah: { count: 147, color: '#84CC16', translation: 'Paradise' },
  Nar: { count: 145, color: '#DC2626', translation: 'Fire' },
  Sabr: { count: 103, color: '#14B8A6', translation: 'Patience' },
  Shukr: { count: 75, color: '#A855F7', translation: 'Gratitude' },
  Tawbah: { count: 87, color: '#F472B6', translation: 'Repentance' },
  Dua: { count: 212, color: '#0EA5E9', translation: 'Supplication' },
  Dhikr: { count: 292, color: '#FBBF24', translation: 'Remembrance' },
  Amal: { count: 360, color: '#10B981', translation: 'Deeds' },
  Haq: { count: 287, color: '#EF4444', translation: 'Truth' },
  Adl: { count: 28, color: '#8B5CF6', translation: 'Justice' },
  Khair: { count: 176, color: '#22C55E', translation: 'Good' },
};

// Get all nature parallels
export const getAllNatureParallels = () => Object.values(NATURE_PARALLELS);

// Get nature parallel by ID
export const getNatureParallel = (id) => NATURE_PARALLELS[id] || null;

export default {
  NATURE_PARALLELS,
  QURAN_WORD_FREQUENCIES,
  getAllNatureParallels,
  getNatureParallel,
};
