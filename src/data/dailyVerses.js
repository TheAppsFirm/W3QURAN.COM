/**
 * Daily Verses
 * Single Responsibility: Define inspirational verses for daily display
 */

export const DAILY_VERSES = [
  {
    surah: 2,
    ayah: 286,
    arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
    translation: 'Allah does not burden a soul beyond that it can bear.',
    topic: 'comfort',
  },
  {
    surah: 94,
    ayah: 6,
    arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Indeed, with hardship comes ease.',
    topic: 'hope',
  },
  {
    surah: 3,
    ayah: 139,
    arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ',
    translation: 'Do not weaken and do not grieve, and you will be superior.',
    topic: 'strength',
  },
  {
    surah: 2,
    ayah: 152,
    arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ',
    translation: 'So remember Me; I will remember you.',
    topic: 'remembrance',
  },
  {
    surah: 13,
    ayah: 28,
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    translation: 'Verily, in the remembrance of Allah do hearts find rest.',
    topic: 'peace',
  },
  {
    surah: 2,
    ayah: 186,
    arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
    translation: 'And when My servants ask you about Me, indeed I am near.',
    topic: 'closeness',
  },
  {
    surah: 65,
    ayah: 3,
    arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    translation: 'Whoever relies upon Allah, then He is sufficient for him.',
    topic: 'trust',
  },
  {
    surah: 29,
    ayah: 69,
    arabic: 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا',
    translation: 'Those who strive for Us, We will surely guide them to Our ways.',
    topic: 'guidance',
  },
  {
    surah: 39,
    ayah: 53,
    arabic: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
    translation: 'Do not despair of the mercy of Allah.',
    topic: 'mercy',
  },
  {
    surah: 3,
    ayah: 159,
    arabic: 'فَتَوَكَّلْ عَلَى اللَّهِ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ',
    translation: 'Put your trust in Allah. Indeed, Allah loves those who rely upon Him.',
    topic: 'trust',
  },
];

/**
 * Get verse for today
 */
export const getTodaysVerse = () => {
  const today = new Date().getDate();
  return DAILY_VERSES[today % DAILY_VERSES.length];
};

/**
 * Get verse by topic
 */
export const getVerseByTopic = (topic) => DAILY_VERSES.find((v) => v.topic === topic);

/**
 * Get all available topics
 */
export const getAvailableTopics = () => [...new Set(DAILY_VERSES.map((v) => v.topic))];
