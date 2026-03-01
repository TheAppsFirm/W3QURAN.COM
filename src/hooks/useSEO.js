/**
 * useSEO.js
 * Lightweight hook for dynamic meta tag updates on route changes.
 * Updates document.title, meta description, OG tags, and canonical URL.
 */

const DOMAIN = 'https://w3quran.com';
const DEFAULT_TITLE = 'w3Quran - Interactive Quran Explorer';
const DEFAULT_DESC = 'Explore the Holy Quran with beautiful 3D bubble visualization, daily verses, quizzes, audio recitation, word-by-word translation, and more.';
const DEFAULT_IMAGE = `${DOMAIN}/og-image.png`;

function setMeta(attr, value, content) {
  const el = document.querySelector(`meta[${attr}="${value}"]`);
  if (el) el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

/**
 * Update all SEO meta tags at once.
 * Call this whenever the route/view changes.
 *
 * @param {object} opts
 * @param {string} opts.title - Page title
 * @param {string} [opts.description] - Page description
 * @param {string} [opts.path] - URL path (e.g. '/surah/1')
 * @param {string} [opts.image] - OG image URL
 */
export function updateSEO({ title, description, path = '/', image }) {
  const fullTitle = title || DEFAULT_TITLE;
  const fullDesc = description || DEFAULT_DESC;
  const fullUrl = `${DOMAIN}${path}`;
  const fullImage = image || DEFAULT_IMAGE;

  // Title
  document.title = fullTitle;
  setMeta('name', 'title', fullTitle);

  // Description
  setMeta('name', 'description', fullDesc);

  // Canonical
  setCanonical(fullUrl);

  // Open Graph
  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', fullDesc);
  setMeta('property', 'og:url', fullUrl);
  setMeta('property', 'og:image', fullImage);

  // Twitter
  setMeta('name', 'twitter:title', fullTitle);
  setMeta('name', 'twitter:description', fullDesc);
  setMeta('name', 'twitter:url', fullUrl);
  setMeta('name', 'twitter:image', fullImage);
}

// SEO data for known views — uses clean URL paths for proper indexing
const VIEW_SEO = {
  listen:      { title: 'Listen to Quran - w3Quran', desc: 'Listen to the Holy Quran with multiple reciters including Al-Afasy, Abdul Basit, and more.', path: '/listen' },
  names:       { title: '99 Names of Allah - w3Quran', desc: 'Explore the 99 beautiful names of Allah with meanings, audio pronunciation, and details.', path: '/names-of-allah' },
  quiz:        { title: 'Quran Quiz - w3Quran', desc: 'Test your knowledge of the Holy Quran with interactive quizzes and challenges.', path: '/quiz' },
  prayer:      { title: 'Prayer Times - w3Quran', desc: 'Accurate prayer times with Qibla direction based on your location.', path: '/prayer-times' },
  daily:       { title: 'Daily Verse - w3Quran', desc: 'Read your daily verse from the Holy Quran with translation and reflection.', path: '/daily-verse' },
  stats:       { title: 'Reading Statistics - w3Quran', desc: 'Track your Quran reading progress, streaks, and achievements.', path: '/statistics' },
  kids:        { title: 'Kids Mode - w3Quran', desc: 'Fun and interactive Quran learning for kids with animated duas and engaging activities.', path: '/kids' },
  privacy:     { title: 'Privacy Policy - w3Quran', desc: 'Privacy policy for w3Quran application.', path: '/privacy' },
  terms:       { title: 'Terms of Service - w3Quran', desc: 'Terms of service for w3Quran application.', path: '/terms' },
  settings:    { title: 'Settings - w3Quran', desc: 'Customize your w3Quran reading experience.', path: '/settings' },
  donate:      { title: 'Donate - w3Quran', desc: 'Support the w3Quran project.', path: '/donate' },
  tasbih:      { title: 'Tasbih Counter - w3Quran', desc: 'Digital tasbih counter for dhikr and daily remembrance.', path: '/tasbih' },
  discussions: { title: 'Community Discussions - w3Quran', desc: 'Join surah discussions, share reflections, and connect with the Quran community.', path: '/discussions' },
};

// SEO data for modal/feature pages
const MODAL_SEO = {
  search:      { title: 'Search Quran - w3Quran', desc: 'Search the Holy Quran by keyword, verse number, or topic across all 114 surahs.', path: '/search' },
  hifz:        { title: 'Memorize Quran (Hifz) - w3Quran', desc: 'Memorize the Quran with spaced repetition, progressive word hiding, and tracking.', path: '/memorize' },
  hajjUmrah:   { title: 'Hajj & Umrah Guide - w3Quran', desc: 'Complete Hajj and Umrah guide with duas, rituals, step-by-step instructions, and Quranic references.', path: '/hajj-umrah' },
  babyNames:   { title: 'Islamic Baby Names - w3Quran', desc: 'Browse beautiful Islamic baby names with Quranic references, meanings, and origins.', path: '/baby-names' },
  mindMap:     { title: 'Quran Mind Map - w3Quran', desc: 'Explore Quranic themes and connections through interactive mind maps.', path: '/mind-map' },
  mood:        { title: 'Emotional Journey - w3Quran', desc: 'Track your spiritual mood and get personalized surah recommendations.', path: '/mood' },
  videoSync:   { title: 'Scholar Video Sync - w3Quran', desc: 'Watch scholar lectures synced with Quran verses for guided learning.', path: '/video-sync' },
  propheticMap: { title: 'Prophetic Map - w3Quran', desc: 'Explore stories of the Prophets mentioned in the Quran with cross-references.', path: '/prophetic-map' },
  timeMachine: { title: 'Revelation Timeline - w3Quran', desc: 'Explore the chronological order of Quran revelation with historical context.', path: '/time-machine' },
  companionAI: { title: 'AI Quran Guide - w3Quran', desc: 'Get AI-powered guidance and answers about the Quran and Islamic topics.', path: '/ai-guide' },
  globalPulse: { title: 'Ummah Pulse - w3Quran', desc: 'See what the global Muslim community is reading and discussing in the Quran.', path: '/ummah-pulse' },
  weatherSync: { title: 'Weather Verse - w3Quran', desc: 'Discover Quran verses that match your current weather and mood.', path: '/weather-verse' },
  soundHealing: { title: 'Sound Healing - w3Quran', desc: 'Experience the healing power of Quran recitation with ambient soundscapes.', path: '/sound-healing' },
  talkToQuran: { title: 'Talk to Quran - w3Quran', desc: 'Have a conversational experience with the Quran using AI-powered dialogue.', path: '/talk' },
  progress:    { title: 'Reading Progress - w3Quran', desc: 'View your Quran reading progress dashboard with detailed analytics.', path: '/progress' },
  achievements: { title: 'Achievements - w3Quran', desc: 'View your earned achievements and badges from your Quran journey.', path: '/achievements' },
  faq:         { title: 'FAQ - w3Quran', desc: 'Frequently asked questions about w3Quran features and usage.', path: '/faq' },
};

/**
 * Get SEO data for a specific view.
 * @param {string} view - Current view name
 * @param {object} [surah] - Surah object if reading
 * @param {string} [modal] - Current modal name
 * @returns {{ title: string, description: string, path: string }}
 */
export function getSEOForView(view, surah, modal) {
  if (surah) {
    return {
      title: `${surah.name} (${surah.arabic}) - w3Quran`,
      description: `Read Surah ${surah.name} (${surah.arabic}) - ${surah.meaning}. ${surah.ayahs} verses. ${surah.type === 'Makki' ? 'Meccan' : 'Medinan'} surah with translation, audio, and word-by-word meanings.`,
      path: `/surah/${surah.id}`,
    };
  }

  // Check modal SEO first
  if (modal) {
    const modalInfo = MODAL_SEO[modal];
    if (modalInfo) {
      return {
        title: modalInfo.title,
        description: modalInfo.desc,
        path: modalInfo.path,
      };
    }
  }

  const info = VIEW_SEO[view];
  if (info) {
    return {
      title: info.title,
      description: info.desc,
      path: info.path,
    };
  }

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    path: '/',
  };
}
