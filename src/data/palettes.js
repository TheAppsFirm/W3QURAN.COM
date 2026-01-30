/**
 * Color Palettes
 * Single Responsibility: Define visual themes for the app
 */

// Beautiful dreamy color palettes for general use
export const PALETTES = [
  { name: 'Ocean Dream', colors: ['#0ea5e9', '#06b6d4', '#14b8a6'], glow: '#67e8f9', accent: '#a5f3fc' },
  { name: 'Aurora', colors: ['#8b5cf6', '#a855f7', '#d946ef'], glow: '#c4b5fd', accent: '#e9d5ff' },
  { name: 'Sunset', colors: ['#f97316', '#f59e0b', '#eab308'], glow: '#fdba74', accent: '#fef08a' },
  { name: 'Rose Garden', colors: ['#ec4899', '#f43f5e', '#fb7185'], glow: '#f9a8d4', accent: '#fecdd3' },
  { name: 'Emerald Forest', colors: ['#10b981', '#14b8a6', '#06b6d4'], glow: '#6ee7b7', accent: '#a7f3d0' },
  { name: 'Royal Purple', colors: ['#7c3aed', '#8b5cf6', '#a855f7'], glow: '#a78bfa', accent: '#c4b5fd' },
  { name: 'Golden Hour', colors: ['#f59e0b', '#fbbf24', '#fcd34d'], glow: '#fde047', accent: '#fef9c3' },
  { name: 'Cherry Blossom', colors: ['#f472b6', '#ec4899', '#db2777'], glow: '#f9a8d4', accent: '#fbcfe8' },
  { name: 'Deep Sea', colors: ['#0284c7', '#0891b2', '#0d9488'], glow: '#22d3ee', accent: '#a5f3fc' },
  { name: 'Lavender Dreams', colors: ['#a855f7', '#c084fc', '#e879f9'], glow: '#d8b4fe', accent: '#f5d0fe' },
];

// Topic-based color palettes for content-meaningful bubble coloring
export const TOPIC_PALETTES = {
  prayer: { name: 'Prayer', colors: ['#0ea5e9', '#0284c7', '#0369a1'], glow: '#7dd3fc', accent: '#bae6fd' },
  faith: { name: 'Faith', colors: ['#8b5cf6', '#7c3aed', '#6d28d9'], glow: '#c4b5fd', accent: '#ddd6fe' },
  prophets: { name: 'Prophets', colors: ['#f59e0b', '#d97706', '#b45309'], glow: '#fcd34d', accent: '#fef3c7' },
  'day of judgment': { name: 'Day of Judgment', colors: ['#dc2626', '#b91c1c', '#991b1b'], glow: '#fca5a5', accent: '#fee2e2' },
  paradise: { name: 'Paradise', colors: ['#10b981', '#059669', '#047857'], glow: '#6ee7b7', accent: '#d1fae5' },
  hell: { name: 'Hell', colors: ['#ef4444', '#dc2626', '#b91c1c'], glow: '#f87171', accent: '#fecaca' },
  stories: { name: 'Stories', colors: ['#06b6d4', '#0891b2', '#0e7490'], glow: '#67e8f9', accent: '#cffafe' },
  law: { name: 'Islamic Law', colors: ['#6366f1', '#4f46e5', '#4338ca'], glow: '#a5b4fc', accent: '#e0e7ff' },
  family: { name: 'Family', colors: ['#ec4899', '#db2777', '#be185d'], glow: '#f9a8d4', accent: '#fce7f3' },
  women: { name: 'Women', colors: ['#f472b6', '#ec4899', '#db2777'], glow: '#fbcfe8', accent: '#fdf2f8' },
  charity: { name: 'Charity', colors: ['#22c55e', '#16a34a', '#15803d'], glow: '#86efac', accent: '#dcfce7' },
  patience: { name: 'Patience', colors: ['#14b8a6', '#0d9488', '#0f766e'], glow: '#5eead4', accent: '#ccfbf1' },
  gratitude: { name: 'Gratitude', colors: ['#eab308', '#ca8a04', '#a16207'], glow: '#fde047', accent: '#fef9c3' },
  tawhid: { name: 'Monotheism', colors: ['#a855f7', '#9333ea', '#7e22ce'], glow: '#d8b4fe', accent: '#f3e8ff' },
  creation: { name: 'Creation', colors: ['#3b82f6', '#2563eb', '#1d4ed8'], glow: '#93c5fd', accent: '#dbeafe' },
  forgiveness: { name: 'Forgiveness', colors: ['#22d3ee', '#06b6d4', '#0891b2'], glow: '#a5f3fc', accent: '#cffafe' },
  ramadan: { name: 'Ramadan', colors: ['#a78bfa', '#8b5cf6', '#7c3aed'], glow: '#c4b5fd', accent: '#ede9fe' },
  hajj: { name: 'Hajj', colors: ['#171717', '#404040', '#525252'], glow: '#a3a3a3', accent: '#e5e5e5' },
  friday: { name: 'Friday', colors: ['#16a34a', '#15803d', '#166534'], glow: '#86efac', accent: '#bbf7d0' },
  protection: { name: 'Protection', colors: ['#64748b', '#475569', '#334155'], glow: '#94a3b8', accent: '#cbd5e1' },
  angels: { name: 'Angels', colors: ['#f0abfc', '#e879f9', '#d946ef'], glow: '#f5d0fe', accent: '#fae8ff' },
  jinn: { name: 'Jinn', colors: ['#4c1d95', '#5b21b6', '#6d28d9'], glow: '#8b5cf6', accent: '#c4b5fd' },
  death: { name: 'Death', colors: ['#78716c', '#57534e', '#44403c'], glow: '#a8a29e', accent: '#d6d3d1' },
  nature: { name: 'Nature & Signs', colors: ['#84cc16', '#65a30d', '#4d7c0f'], glow: '#bef264', accent: '#ecfccb' },
  guidance: { name: 'Guidance', colors: ['#0ea5e9', '#0284c7', '#0369a1'], glow: '#38bdf8', accent: '#bae6fd' },
  mercy: { name: 'Mercy', colors: ['#fb7185', '#f43f5e', '#e11d48'], glow: '#fda4af', accent: '#ffe4e6' },
  resurrection: { name: 'Resurrection', colors: ['#f97316', '#ea580c', '#c2410c'], glow: '#fdba74', accent: '#ffedd5' },
  victory: { name: 'Victory', colors: ['#fbbf24', '#f59e0b', '#d97706'], glow: '#fcd34d', accent: '#fef3c7' },
  jihad: { name: 'Struggle', colors: ['#ef4444', '#dc2626', '#b91c1c'], glow: '#f87171', accent: '#fee2e2' },
  repentance: { name: 'Repentance', colors: ['#2dd4bf', '#14b8a6', '#0d9488'], glow: '#5eead4', accent: '#ccfbf1' },
  wisdom: { name: 'Wisdom', colors: ['#8b5cf6', '#7c3aed', '#6d28d9'], glow: '#a78bfa', accent: '#ddd6fe' },
  character: { name: 'Character', colors: ['#06b6d4', '#0891b2', '#0e7490'], glow: '#22d3ee', accent: '#cffafe' },
  worship: { name: 'Worship', colors: ['#3b82f6', '#2563eb', '#1d4ed8'], glow: '#60a5fa', accent: '#dbeafe' },
  quran: { name: 'Quran', colors: ['#10b981', '#059669', '#047857'], glow: '#34d399', accent: '#d1fae5' },
  makkah: { name: 'Makkah', colors: ['#171717', '#262626', '#404040'], glow: '#737373', accent: '#d4d4d4' },
  miracles: { name: 'Miracles', colors: ['#f59e0b', '#eab308', '#ca8a04'], glow: '#fde047', accent: '#fef9c3' },
  'names of allah': { name: 'Names of Allah', colors: ['#a855f7', '#9333ea', '#7e22ce'], glow: '#c084fc', accent: '#e9d5ff' },
};

// SVG icon paths for each topic
export const TOPIC_ICONS = {
  prayer: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8v7l-7 3.5L5 15V8l7-3.2z',
  faith: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  prophets: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  'day of judgment': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
  paradise: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93V17h2v2.93c-3.95-.49-7-3.85-7-7.93h2v2h2v-2h2v2h2v-2h2c0 4.08-3.05 7.44-7 7.93z',
  hell: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z',
  stories: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
  law: 'M4 4h16v2H4V4zm0 14h16v2H4v-2zm0-7h16v2H4v-2z',
  family: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  women: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
  charity: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  patience: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
  gratitude: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
  tawhid: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
  creation: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
  forgiveness: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  ramadan: 'M12.7 4.1C11.97 2.82 11.1 2 10 2c-2.76 0-5 4.03-5 9s2.24 9 5 9c1.1 0 1.97-.82 2.7-2.1C13.43 19.18 14.66 20 16 20c2.76 0 5-4.03 5-9s-2.24-9-5-9c-1.34 0-2.57.82-3.3 2.1z',
  hajj: 'M12 2L6 7h12L12 2zm0 4L8.5 9H15.5L12 6zm-6 5v9h12v-9H6zm6 7c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z',
  friday: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  protection: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
  angels: 'M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z',
  jinn: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6h10v2H7v-2z',
  death: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
  nature: 'M6.05 8.05c-2.73 2.73-2.73 7.15-.02 9.88 1.47-3.4 4.09-6.24 7.36-7.93A15.85 15.85 0 006.05 8.05zm9.9 0c2.73 2.73 2.73 7.17 0 9.9-1.47-3.4-4.09-6.26-7.36-7.95a15.85 15.85 0 007.36-1.95z',
  guidance: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z',
  mercy: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  resurrection: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
  victory: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z',
  jihad: 'M6 19h12v2H6zm3-10V7l-5 4 5 4v-2h12V9zm0 4V9.5l-2.5 2L9 13zm3-9h2v3h-2zm0 15h2v3h-2z',
  repentance: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
  wisdom: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
  character: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
  worship: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8v7l-7 3.5L5 15V8l7-3.2z',
  quran: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z',
  makkah: 'M12 2L6 7h12L12 2zm0 4L8.5 9H15.5L12 6zm-6 5v9h12v-9H6zm6 7c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z',
  miracles: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'names of allah': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3-8c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.26-.04-.51-.1-.75l1.66-1.66c.28.72.44 1.52.44 2.41 0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c.89 0 1.69.16 2.41.44l-1.66 1.66c-.24-.06-.49-.1-.75-.1-1.66 0-3 1.34-3 3z',
};

/**
 * Get primary topic palette for a surah
 */
export const getTopicPalette = (surah) => {
  if (surah.topics && surah.topics.length > 0) {
    const primaryTopic = surah.topics[0];
    return TOPIC_PALETTES[primaryTopic] || TOPIC_PALETTES.faith;
  }
  return TOPIC_PALETTES.faith;
};

/**
 * Get topic icon path
 */
export const getTopicIcon = (surah) => {
  if (surah.topics && surah.topics.length > 0) {
    const primaryTopic = surah.topics[0];
    return TOPIC_ICONS[primaryTopic] || TOPIC_ICONS.faith;
  }
  return TOPIC_ICONS.faith;
};
