/**
 * YouTube Videos Database - Authentic Scholar Videos
 * Curated list of verified Islamic scholars and their Quran explanations
 */

// Verified Scholars/Channels
export const SCHOLARS = {
  'nouman-ali-khan': {
    id: 'nouman-ali-khan',
    name: 'Nouman Ali Khan',
    channel: 'Bayyinah Institute',
    channelId: 'UC4mUoICjWZqbLkG1J4B2cYg',
    specialty: 'Arabic Linguistic Analysis',
    language: 'en',
    verified: true,
  },
  'mufti-menk': {
    id: 'mufti-menk',
    name: 'Mufti Ismail Menk',
    channel: 'Mufti Menk',
    channelId: 'UC2BI3bHyXlTGjPDp0mkkQkg',
    specialty: 'General Tafseer',
    language: 'en',
    verified: true,
  },
  'omar-suleiman': {
    id: 'omar-suleiman',
    name: 'Dr. Omar Suleiman',
    channel: 'Yaqeen Institute',
    channelId: 'UC3vHW2h36lKUDqFoKCxrNuw',
    specialty: 'Spiritual Insights',
    language: 'en',
    verified: true,
  },
  'yasir-qadhi': {
    id: 'yasir-qadhi',
    name: 'Dr. Yasir Qadhi',
    channel: 'Yasir Qadhi',
    channelId: 'UCPRtrDJGWYPn6NVh5aqKSoA',
    specialty: 'Academic Tafseer',
    language: 'en',
    verified: true,
  },
  'abdul-nasir-jangda': {
    id: 'abdul-nasir-jangda',
    name: 'Shaykh Abdul Nasir Jangda',
    channel: 'Qalam Institute',
    channelId: 'UCsqTQ4W6zP-aVcCKC4YSckQ',
    specialty: 'Seerah & Tafseer',
    language: 'en',
    verified: true,
  },
  'mishary-alafasy': {
    id: 'mishary-alafasy',
    name: 'Mishary Rashid Alafasy',
    channel: 'Mishary Alafasy',
    channelId: 'UCaVEIRs02IsMDlbZ6qa-zRw',
    specialty: 'Recitation',
    language: 'ar',
    verified: true,
  },
  'dr-israr-ahmed': {
    id: 'dr-israr-ahmed',
    name: 'Dr. Israr Ahmed',
    channel: 'Dr Israr Ahmed',
    channelId: 'UCHWVbHPMBXGu0cBF5vYJBrw',
    specialty: 'Urdu Tafseer',
    language: 'ur',
    verified: true,
  },
  'tariq-jameel': {
    id: 'tariq-jameel',
    name: 'Maulana Tariq Jameel',
    channel: 'Tariq Jameel',
    channelId: 'UC0TsJaRfXpXgEhPgzE_qHmQ',
    specialty: 'Spiritual Lectures',
    language: 'ur',
    verified: true,
  },
};

// Video categories
export const VIDEO_CATEGORIES = {
  tafseer: { id: 'tafseer', name: 'Tafseer', icon: 'BookOpen', color: '#8B5CF6' },
  recitation: { id: 'recitation', name: 'Recitation', icon: 'Headphones', color: '#06B6D4' },
  lecture: { id: 'lecture', name: 'Lectures', icon: 'Video', color: '#EF4444' },
  wordAnalysis: { id: 'wordAnalysis', name: 'Word Analysis', icon: 'Type', color: '#F59E0B' },
};

// Curated videos per Surah (sample - expand as needed)
export const SURAH_VIDEOS = {
  1: { // Al-Fatiha
    tafseer: [
      { id: 'Al4OE0sE3kI', title: 'Surah Al-Fatiha - Deep Linguistic Analysis', scholar: 'nouman-ali-khan', duration: '1:02:34', views: '2.1M' },
      { id: 'gOvgPZjVLsg', title: 'Understanding Al-Fatiha - The Opening', scholar: 'mufti-menk', duration: '45:21', views: '1.5M' },
      { id: 'oJGYhJVqVnA', title: 'Tafseer of Surah Fatiha', scholar: 'yasir-qadhi', duration: '58:43', views: '890K' },
    ],
    recitation: [
      { id: 'I-5f9Lygxik', title: 'Surah Al-Fatiha - Beautiful Recitation', scholar: 'mishary-alafasy', duration: '1:23', views: '45M' },
    ],
    lecture: [
      { id: 'iIwKXk1DdBo', title: 'The Secrets of Al-Fatiha', scholar: 'omar-suleiman', duration: '32:15', views: '1.2M' },
    ],
  },
  2: { // Al-Baqarah
    tafseer: [
      { id: 'playlist:PLutdSTmJ7bAKQg7PBwCK2_MnN8Mq_9u-w', title: 'Complete Tafseer Al-Baqarah Series', scholar: 'nouman-ali-khan', duration: 'Series', views: '5M+' },
      { id: '6sP6rPTHHHk', title: 'Surah Baqarah Overview', scholar: 'yasir-qadhi', duration: '1:15:22', views: '750K' },
    ],
    recitation: [
      { id: 'pYK7rMg_J1Q', title: 'Surah Al-Baqarah Full', scholar: 'mishary-alafasy', duration: '2:24:32', views: '89M' },
    ],
    lecture: [
      { id: 'xLMMuLW3bTc', title: 'Lessons from Surah Baqarah', scholar: 'mufti-menk', duration: '52:18', views: '2.3M' },
    ],
  },
  18: { // Al-Kahf
    tafseer: [
      { id: 'playlist:PLutdSTmJ7bAI7nsEDJ9EP0BA0B30l5ezk', title: 'Tafseer Surah Al-Kahf Complete', scholar: 'nouman-ali-khan', duration: 'Series', views: '3.2M' },
      { id: 'QIPBkqpHD_Q', title: 'Story of the Cave - Deep Dive', scholar: 'yasir-qadhi', duration: '1:45:00', views: '1.1M' },
    ],
    recitation: [
      { id: 'EAg5xFOthIs', title: 'Surah Al-Kahf Beautiful Recitation', scholar: 'mishary-alafasy', duration: '45:32', views: '125M' },
    ],
    lecture: [
      { id: 'Sn_Hcv0aYjk', title: 'Surah Kahf - Protection from Dajjal', scholar: 'mufti-menk', duration: '48:22', views: '3.5M' },
      { id: 'J_H2b6FtNE4', title: 'Friday Surah - Al Kahf Explained', scholar: 'omar-suleiman', duration: '38:15', views: '980K' },
    ],
  },
  36: { // Ya-Sin
    tafseer: [
      { id: 'playlist:PLutdSTmJ7bALZq3kv0wjLkkS8xKsSDNwm', title: 'Tafseer Surah Ya-Sin', scholar: 'nouman-ali-khan', duration: 'Series', views: '2.8M' },
    ],
    recitation: [
      { id: 'LQDGi3KJzME', title: 'Surah Ya-Sin - Heart of Quran', scholar: 'mishary-alafasy', duration: '23:15', views: '156M' },
    ],
    lecture: [
      { id: 'TYPqZHXK2EA', title: 'The Heart of the Quran - Ya-Sin', scholar: 'mufti-menk', duration: '55:30', views: '2.1M' },
    ],
  },
  55: { // Ar-Rahman
    tafseer: [
      { id: 'playlist:PLutdSTmJ7bAKGVV4_5xJbFD_RQdC0v_NF', title: 'Divine Love in Surah Rahman', scholar: 'nouman-ali-khan', duration: 'Series', views: '4.1M' },
    ],
    recitation: [
      { id: 'HU9etHX9gVY', title: 'Surah Ar-Rahman - Most Beautiful', scholar: 'mishary-alafasy', duration: '12:45', views: '210M' },
    ],
    lecture: [
      { id: 'pXTqYz9PKbM', title: 'Which Favors Will You Deny?', scholar: 'omar-suleiman', duration: '42:18', views: '1.8M' },
    ],
  },
  67: { // Al-Mulk
    tafseer: [
      { id: 'nKn9IChwF88', title: 'Tafseer Surah Al-Mulk', scholar: 'nouman-ali-khan', duration: '52:30', views: '1.9M' },
    ],
    recitation: [
      { id: 'JQYlJrQzLok', title: 'Surah Al-Mulk - Protection from Grave', scholar: 'mishary-alafasy', duration: '8:22', views: '98M' },
    ],
    lecture: [
      { id: 'nEJ_RZlIQCc', title: 'Surah Mulk - The Kingdom', scholar: 'mufti-menk', duration: '38:45', views: '1.5M' },
    ],
  },
  112: { // Al-Ikhlas
    tafseer: [
      { id: '8xOqKbMKOcI', title: 'Surah Ikhlas - 1/3 of Quran', scholar: 'nouman-ali-khan', duration: '28:15', views: '2.4M' },
    ],
    recitation: [
      { id: 'wBIfyZDCR-c', title: 'Surah Al-Ikhlas Beautiful', scholar: 'mishary-alafasy', duration: '0:45', views: '45M' },
    ],
    lecture: [
      { id: 'KfCH_MJrNXI', title: 'Pure Monotheism - Al Ikhlas', scholar: 'yasir-qadhi', duration: '35:22', views: '890K' },
    ],
  },
  113: { // Al-Falaq
    tafseer: [
      { id: '2PD_tEk7gJo', title: 'Protection Surahs - Al Falaq', scholar: 'nouman-ali-khan', duration: '22:30', views: '1.1M' },
    ],
    recitation: [
      { id: 'VNsqzVQl5Xw', title: 'Surah Al-Falaq', scholar: 'mishary-alafasy', duration: '0:38', views: '32M' },
    ],
  },
  114: { // An-Nas
    tafseer: [
      { id: 'KtEXRQEDTqU', title: 'Surah An-Nas - Seeking Refuge', scholar: 'nouman-ali-khan', duration: '25:18', views: '1.3M' },
    ],
    recitation: [
      { id: 'p_HGHgDH8HE', title: 'Surah An-Nas', scholar: 'mishary-alafasy', duration: '0:42', views: '28M' },
    ],
    lecture: [
      { id: 'NMQb8B2qxBY', title: 'Evil Whispers - An Nas', scholar: 'mufti-menk', duration: '28:15', views: '750K' },
    ],
  },
};

// Get videos for a surah
export const getVideosForSurah = (surahId, category = null) => {
  const surahVideos = SURAH_VIDEOS[surahId];

  if (!surahVideos) {
    // Return generic search results for surahs without specific videos
    return null;
  }

  if (category) {
    return surahVideos[category] || [];
  }

  return surahVideos;
};

// Get scholar info
export const getScholarInfo = (scholarId) => {
  return SCHOLARS[scholarId] || null;
};

// Generate YouTube embed URL
export const getYouTubeEmbedUrl = (videoId) => {
  if (videoId.startsWith('playlist:')) {
    const playlistId = videoId.replace('playlist:', '');
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  }
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
};

// Generate YouTube watch URL
export const getYouTubeWatchUrl = (videoId) => {
  if (videoId.startsWith('playlist:')) {
    const playlistId = videoId.replace('playlist:', '');
    return `https://www.youtube.com/playlist?list=${playlistId}`;
  }
  return `https://www.youtube.com/watch?v=${videoId}`;
};

// Search query generator for surahs without curated videos
export const generateSearchQuery = (surahName, category = 'tafseer') => {
  const queries = {
    tafseer: `${surahName} tafseer explanation`,
    recitation: `${surahName} quran recitation beautiful`,
    lecture: `${surahName} surah lesson lecture`,
    wordAnalysis: `${surahName} arabic word by word`,
  };
  return queries[category] || `${surahName} quran`;
};

export default SURAH_VIDEOS;
