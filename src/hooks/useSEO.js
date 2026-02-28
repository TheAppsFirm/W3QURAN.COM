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
 * @param {string} [opts.path] - URL path (e.g. '/?surah=1')
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
  listen:   { title: 'Listen to Quran - w3Quran', desc: 'Listen to the Holy Quran with multiple reciters including Al-Afasy, Abdul Basit, and more.', path: '/listen' },
  names:    { title: '99 Names of Allah - w3Quran', desc: 'Explore the 99 beautiful names of Allah with meanings, audio pronunciation, and details.', path: '/names-of-allah' },
  quiz:     { title: 'Quran Quiz - w3Quran', desc: 'Test your knowledge of the Holy Quran with interactive quizzes and challenges.', path: '/quiz' },
  prayer:   { title: 'Prayer Times - w3Quran', desc: 'Accurate prayer times with Qibla direction based on your location.', path: '/prayer-times' },
  daily:    { title: 'Daily Verse - w3Quran', desc: 'Read your daily verse from the Holy Quran with translation and reflection.', path: '/daily-verse' },
  stats:    { title: 'Reading Statistics - w3Quran', desc: 'Track your Quran reading progress, streaks, and achievements.', path: '/statistics' },
  kids:     { title: 'Kids Mode - w3Quran', desc: 'Fun and interactive Quran learning for kids with animated duas and engaging activities.', path: '/kids' },
  privacy:  { title: 'Privacy Policy - w3Quran', desc: 'Privacy policy for w3Quran application.', path: '/privacy' },
  terms:    { title: 'Terms of Service - w3Quran', desc: 'Terms of service for w3Quran application.', path: '/terms' },
  settings: { title: 'Settings - w3Quran', desc: 'Customize your w3Quran reading experience.', path: '/settings' },
  donate:   { title: 'Donate - w3Quran', desc: 'Support the w3Quran project.', path: '/donate' },
  tasbih:   { title: 'Tasbih Counter - w3Quran', desc: 'Digital tasbih counter for dhikr and daily remembrance.', path: '/tasbih' },
  discussions: { title: 'Community Discussions - w3Quran', desc: 'Join surah discussions, share reflections, and connect with the Quran community.', path: '/discussions' },
};

/**
 * Get SEO data for a specific view.
 * @param {string} view - Current view name
 * @param {object} [surah] - Surah object if reading
 * @returns {{ title: string, description: string, path: string }}
 */
export function getSEOForView(view, surah) {
  if (surah) {
    return {
      title: `${surah.name} (${surah.arabic}) - w3Quran`,
      description: `Read Surah ${surah.name} (${surah.arabic}) - ${surah.meaning}. ${surah.ayahs} verses. ${surah.type === 'Makki' ? 'Meccan' : 'Medinan'} surah with translation, audio, and word-by-word meanings.`,
      path: `/surah/${surah.id}`,
    };
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
