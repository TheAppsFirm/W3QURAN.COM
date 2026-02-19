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

  const cacheKey = `${query}_${language}_${limit}`;
  if (searchCache[cacheKey]) {
    return searchCache[cacheKey];
  }

  try {
    // Use Quran.com search API
    const response = await fetch(
      `${QURAN_COM_API}/search?q=${encodeURIComponent(query)}&size=${limit}&language=${language}`
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
    console.error('Search error:', error);
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

  const cacheKey = `arabic_${query}_${limit}`;
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
    console.error('Arabic search error:', error);
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

  const cacheKey = `urdu_${query}_${limit}`;
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
    console.error('Urdu search error:', error);
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
 * Search suggestions based on common topics
 */
export const getSearchSuggestions = () => {
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
  } catch (error) {
    console.error('Error saving recent search:', error);
  }
};

/**
 * Clear recent searches
 */
export const clearRecentSearches = () => {
  localStorage.removeItem('quran_recent_searches');
};
