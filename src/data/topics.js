/**
 * Topic Categories
 * Single Responsibility: Define topic metadata for filtering
 */

export const FAQ_TOPICS = [
  { id: 'prayer', label: 'Prayer (Salah)', icon: '🕌', description: 'Surahs about prayer and worship' },
  { id: 'faith', label: 'Faith (Iman)', icon: '💫', description: 'Core beliefs and faith' },
  { id: 'prophets', label: 'Prophets', icon: '📖', description: 'Stories of prophets' },
  { id: 'day of judgment', label: 'Day of Judgment', icon: '⚖️', description: 'Resurrection and accountability' },
  { id: 'paradise', label: 'Paradise (Jannah)', icon: '🌴', description: 'Descriptions of Paradise' },
  { id: 'hell', label: 'Hell (Jahannam)', icon: '🔥', description: 'Warnings about Hell' },
  { id: 'stories', label: 'Stories', icon: '📚', description: 'Historical narratives' },
  { id: 'law', label: 'Islamic Law', icon: '⚖️', description: 'Legal rulings' },
  { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', description: 'Family matters' },
  { id: 'women', label: 'Women', icon: '👩', description: 'Women in Islam' },
  { id: 'charity', label: 'Charity (Zakat)', icon: '🤲', description: 'Giving and charity' },
  { id: 'patience', label: 'Patience (Sabr)', icon: '🌱', description: 'Patience and perseverance' },
  { id: 'gratitude', label: 'Gratitude (Shukr)', icon: '🙏', description: 'Being thankful' },
  { id: 'tawhid', label: 'Monotheism', icon: '☝️', description: 'Oneness of Allah' },
  { id: 'creation', label: 'Creation', icon: '🌍', description: 'Signs in creation' },
  { id: 'forgiveness', label: 'Forgiveness', icon: '💚', description: 'Mercy and forgiveness' },
  { id: 'ramadan', label: 'Ramadan', icon: '🌙', description: 'Fasting and Ramadan' },
  { id: 'hajj', label: 'Hajj', icon: '🕋', description: 'Pilgrimage' },
  { id: 'friday', label: 'Friday', icon: '📿', description: 'Jumuah prayers' },
  { id: 'protection', label: 'Protection', icon: '🛡️', description: 'Seeking refuge' },
  { id: 'angels', label: 'Angels', icon: '✨', description: 'About angels' },
  { id: 'jinn', label: 'Jinn', icon: '👻', description: 'About jinn' },
  { id: 'death', label: 'Death', icon: '⏳', description: 'Death and afterlife' },
  { id: 'nature', label: 'Nature & Signs', icon: '🌿', description: 'Natural phenomena' },
];

/**
 * Get topic by ID
 */
export const getTopicById = (id) => FAQ_TOPICS.find((t) => t.id === id);

/**
 * Get topics for a surah
 */
export const getTopicsForSurah = (surah) => {
  if (!surah.topics) return [];
  return surah.topics.map(getTopicById).filter(Boolean);
};
