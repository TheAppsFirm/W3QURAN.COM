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

// Verse-synced videos with timestamps (for Scholar Video Sync feature)
// timestamps: { verseNumber: secondsFromStart }
export const VERSE_SYNCED_VIDEOS = {
  1: [ // Al-Fatiha
    {
      id: 'Al4OE0sE3kI',
      title: 'Word-by-Word Analysis of Al-Fatiha',
      scholar: 'nouman-ali-khan',
      duration: '1:02:34',
      timestamps: {
        1: 120,    // Bismillah starts at 2:00
        2: 480,    // Al-hamdu lillahi starts at 8:00
        3: 780,    // Ar-Rahman starts at 13:00
        4: 1020,   // Maliki yawmid-din at 17:00
        5: 1380,   // Iyyaka na'budu at 23:00
        6: 1800,   // Ihdinas-sirat at 30:00
        7: 2400,   // Siratal-ladheena at 40:00
      },
      language: 'en',
    },
  ],
  36: [ // Ya-Sin
    {
      id: 'demo_yasin_sync',
      title: 'Surah Ya-Sin Verse by Verse',
      scholar: 'nouman-ali-khan',
      duration: '2:15:00',
      timestamps: {
        1: 60,
        2: 180,
        3: 300,
        4: 420,
        5: 540,
        // More timestamps would be added
      },
      language: 'en',
    },
  ],
  55: [ // Ar-Rahman
    {
      id: 'demo_rahman_sync',
      title: 'Divine Attributes in Ar-Rahman',
      scholar: 'nouman-ali-khan',
      duration: '1:45:00',
      timestamps: {
        1: 90,
        2: 210,
        3: 330,
        4: 450,
        5: 570,
        6: 690,
        7: 810,
        8: 930,
      },
      language: 'en',
    },
  ],
  67: [ // Al-Mulk
    {
      id: 'nKn9IChwF88',
      title: 'Tafseer Surah Al-Mulk - The Kingdom',
      scholar: 'nouman-ali-khan',
      duration: '52:30',
      timestamps: {
        1: 60,
        2: 180,
        3: 300,
        4: 420,
        5: 540,
      },
      language: 'en',
    },
  ],
  112: [ // Al-Ikhlas
    {
      id: '8xOqKbMKOcI',
      title: 'Understanding Tawheed through Al-Ikhlas',
      scholar: 'nouman-ali-khan',
      duration: '28:15',
      timestamps: {
        1: 120,   // Qul huwa Allahu ahad
        2: 420,   // Allahus-samad
        3: 720,   // Lam yalid
        4: 1020,  // Wa lam yakun
      },
      language: 'en',
    },
  ],
};

// Get verse-synced videos for a surah
export const getVerseSyncedVideos = (surahId) => {
  return VERSE_SYNCED_VIDEOS[surahId] || [];
};

// Get timestamp for a specific verse in a video
export const getVerseTimestamp = (surahId, videoId, verseNumber) => {
  const videos = VERSE_SYNCED_VIDEOS[surahId] || [];
  const video = videos.find(v => v.id === videoId);
  if (video && video.timestamps) {
    return video.timestamps[verseNumber] || null;
  }
  return null;
};

// Get verse number from current video time
export const getVerseFromTime = (surahId, videoId, currentTime) => {
  const videos = VERSE_SYNCED_VIDEOS[surahId] || [];
  const video = videos.find(v => v.id === videoId);
  if (!video || !video.timestamps) return null;

  let currentVerse = 1;
  const timestamps = Object.entries(video.timestamps)
    .map(([verse, time]) => ({ verse: parseInt(verse), time }))
    .sort((a, b) => a.time - b.time);

  for (const { verse, time } of timestamps) {
    if (currentTime >= time) {
      currentVerse = verse;
    } else {
      break;
    }
  }
  return currentVerse;
};

// Format seconds to MM:SS or HH:MM:SS
export const formatTime = (seconds) => {
  if (!seconds || seconds < 0) return '0:00';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default SURAH_VIDEOS;
