/**
 * Search Index Module
 * Single Responsibility: Full-text search across Quran verses
 * Uses Quran.com API for reliable search
 */

import { SURAHS } from './surahs';

// API base URLs
const QURAN_COM_API = 'https://api.quran.com/api/v4';

// Search result cache
let searchCache = {};

/**
 * Clear search cache
 */
export const clearSearchCache = () => {
  searchCache = {};
};

/**
 * Search across all surahs using Quran.com API
 */
export const searchQuran = async (query, options = {}) => {
  const {
    language = 'en',
    limit = 50,
  } = options;

  if (!query || query.trim().length < 2) {
    return { results: [], total: 0, query };
  }

  // Use :: delimiter to avoid cache key collisions (query might contain underscores)
  const cacheKey = `search::${query}::${language}::${limit}`;
  if (searchCache[cacheKey]) {
    return searchCache[cacheKey];
  }

  try {
    // Use Quran.com search API with AbortController for cleanup
    const controller = new AbortController();
    const response = await fetch(
      `${QURAN_COM_API}/search?q=${encodeURIComponent(query)}&size=${limit}&language=${language}`,
      { signal: controller.signal }
    );

    if (!response.ok) {
      throw new Error('Search API failed');
    }

    const data = await response.json();

    if (!data.search || !data.search.results) {
      return { results: [], total: 0, query };
    }

    // Process results
    const results = data.search.results.map(match => {
      const surah = SURAHS.find(s => s.id === match.verse_key?.split(':')[0] * 1);
      const [surahId, ayahNumber] = (match.verse_key || '1:1').split(':').map(Number);
      return {
        surahId,
        surahName: surah?.name || `Surah ${surahId}`,
        surahArabic: surah?.arabic || '',
        ayahNumber,
        text: match.text || '',
        highlighted: match.highlighted || highlightText(match.text || '', query),
      };
    });

    const result = {
      results,
      total: data.search.total_results || results.length,
      query,
    };

    // Cache the result
    searchCache[cacheKey] = result;

    return result;
  } catch (error) {
    // Only log in development mode
    if (import.meta.env.DEV) {
      console.error('Search error:', error);
    }
    return { results: [], total: 0, query, error: error.message };
  }
};

/**
 * Search in Arabic text using Quran.com API
 */
export const searchArabic = async (query, limit = 50) => {
  if (!query || query.trim().length < 2) {
    return { results: [], total: 0, query };
  }

  // Use :: delimiter to avoid cache key collisions
  const cacheKey = `search::arabic::${query}::${limit}`;
  if (searchCache[cacheKey]) {
    return searchCache[cacheKey];
  }

  try {
    // Use Quran.com search API with Arabic
    const response = await fetch(
      `${QURAN_COM_API}/search?q=${encodeURIComponent(query)}&size=${limit}&language=ar`
    );

    if (!response.ok) {
      throw new Error('Arabic search failed');
    }

    const data = await response.json();

    if (!data.search || !data.search.results) {
      return { results: [], total: 0, query };
    }

    const results = data.search.results.map(match => {
      const [surahId, ayahNumber] = (match.verse_key || '1:1').split(':').map(Number);
      const surah = SURAHS.find(s => s.id === surahId);
      return {
        surahId,
        surahName: surah?.name || `Surah ${surahId}`,
        surahArabic: surah?.arabic || '',
        ayahNumber,
        text: match.text || '',
        highlighted: match.highlighted,
        isArabic: true,
      };
    });

    const result = {
      results,
      total: data.search.total_results || results.length,
      query,
    };

    searchCache[cacheKey] = result;

    return result;
  } catch (error) {
    // Only log in development mode
    if (import.meta.env.DEV) {
      console.error('Arabic search error:', error);
    }
    return { results: [], total: 0, query, error: error.message };
  }
};

/**
 * Search in Urdu translation using Quran.com API
 */
export const searchUrdu = async (query, limit = 50) => {
  if (!query || query.trim().length < 2) {
    return { results: [], total: 0, query };
  }

  // Use :: delimiter to avoid cache key collisions
  const cacheKey = `search::urdu::${query}::${limit}`;
  if (searchCache[cacheKey]) {
    return searchCache[cacheKey];
  }

  try {
    // Use Quran.com search API with Urdu language
    const response = await fetch(
      `${QURAN_COM_API}/search?q=${encodeURIComponent(query)}&size=${limit}&language=ur`
    );

    if (!response.ok) {
      throw new Error('Urdu search failed');
    }

    const data = await response.json();

    if (!data.search || !data.search.results) {
      return { results: [], total: 0, query };
    }

    const results = data.search.results.map(match => {
      const [surahId, ayahNumber] = (match.verse_key || '1:1').split(':').map(Number);
      const surah = SURAHS.find(s => s.id === surahId);
      return {
        surahId,
        surahName: surah?.name || `Surah ${surahId}`,
        surahArabic: surah?.arabic || '',
        ayahNumber,
        text: match.text || '',
        highlighted: match.highlighted,
        isUrdu: true,
      };
    });

    const result = {
      results,
      total: data.search.total_results || results.length,
      query,
    };

    searchCache[cacheKey] = result;

    return result;
  } catch (error) {
    // Only log in development mode
    if (import.meta.env.DEV) {
      console.error('Urdu search error:', error);
    }
    return { results: [], total: 0, query, error: error.message };
  }
};

/**
 * Highlight search term in text
 */
const highlightText = (text, query) => {
  if (!text || !query) return text;

  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

/**
 * Escape special regex characters
 */
const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Search suggestions based on common topics - multilingual
 */
export const getSearchSuggestions = (mode = 'english') => {
  if (mode === 'urdu') {
    return [
      { query: 'رحمت', label: 'رحمت (Mercy)' },
      { query: 'صبر', label: 'صبر (Patience)' },
      { query: 'نماز', label: 'نماز (Prayer)' },
      { query: 'مغفرت', label: 'مغفرت (Forgiveness)' },
      { query: 'جنت', label: 'جنت (Paradise)' },
      { query: 'نیکی', label: 'نیکی (Good Deeds)' },
      { query: 'ہدایت', label: 'ہدایت (Guidance)' },
      { query: 'نور', label: 'نور (Light)' },
      { query: 'حق', label: 'حق (Truth)' },
      { query: 'ایمان', label: 'ایمان (Belief)' },
    ];
  }
  if (mode === 'arabic') {
    return [
      { query: 'رحمة', label: 'رحمة (Mercy)' },
      { query: 'صبر', label: 'صبر (Patience)' },
      { query: 'صلاة', label: 'صلاة (Prayer)' },
      { query: 'مغفرة', label: 'مغفرة (Forgiveness)' },
      { query: 'جنة', label: 'جنة (Paradise)' },
      { query: 'صالحات', label: 'صالحات (Good Deeds)' },
      { query: 'هداية', label: 'هداية (Guidance)' },
      { query: 'نور', label: 'نور (Light)' },
      { query: 'حق', label: 'حق (Truth)' },
      { query: 'إيمان', label: 'إيمان (Belief)' },
    ];
  }
  return [
    { query: 'mercy', label: 'Mercy (Rahma)' },
    { query: 'patience', label: 'Patience (Sabr)' },
    { query: 'prayer', label: 'Prayer (Salah)' },
    { query: 'forgiveness', label: 'Forgiveness' },
    { query: 'paradise', label: 'Paradise (Jannah)' },
    { query: 'righteous', label: 'Righteous Deeds' },
    { query: 'guidance', label: 'Guidance (Hidaya)' },
    { query: 'light', label: 'Light (Noor)' },
    { query: 'truth', label: 'Truth (Haqq)' },
    { query: 'believe', label: 'Belief (Iman)' },
  ];
};

/**
 * Get recent searches from localStorage
 */
export const getRecentSearches = () => {
  try {
    const stored = localStorage.getItem('quran_recent_searches');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

/**
 * Add to recent searches
 */
export const addRecentSearch = (query) => {
  if (!query || query.trim().length < 2) return;

  const recent = getRecentSearches();
  const filtered = recent.filter(q => q.toLowerCase() !== query.toLowerCase());
  const updated = [query, ...filtered].slice(0, 10);

  try {
    localStorage.setItem('quran_recent_searches', JSON.stringify(updated));
  } catch {
    // Silently fail - localStorage may be full or unavailable
  }
};

/**
 * Clear recent searches
 */
export const clearRecentSearches = () => {
  localStorage.removeItem('quran_recent_searches');
};
