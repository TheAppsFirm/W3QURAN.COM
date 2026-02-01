/**
 * Search Index Module
 * Single Responsibility: Full-text search across Quran verses
 */

import { SURAHS } from './surahs';

// API base URL
const API_BASE = 'https://api.alquran.cloud/v1';

// Search result cache
let searchCache = {};

/**
 * Clear search cache
 */
export const clearSearchCache = () => {
  searchCache = {};
};

/**
 * Search across all surahs using API
 */
export const searchQuran = async (query, options = {}) => {
  const {
    language = 'en',
    translationId = 'en.sahih',
    limit = 50,
  } = options;

  if (!query || query.trim().length < 2) {
    return { results: [], total: 0, query };
  }

  const cacheKey = `${query}_${translationId}_${limit}`;
  if (searchCache[cacheKey]) {
    return searchCache[cacheKey];
  }

  try {
    // Use the search API
    const response = await fetch(
      `${API_BASE}/search/${encodeURIComponent(query)}/${translationId}/all`
    );

    if (!response.ok) {
      throw new Error('Search API failed');
    }

    const data = await response.json();

    if (data.code !== 200 || !data.data) {
      return { results: [], total: 0, query };
    }

    // Process results
    const results = (data.data.matches || [])
      .slice(0, limit)
      .map(match => {
        const surah = SURAHS.find(s => s.id === match.surah.number);
        return {
          surahId: match.surah.number,
          surahName: surah?.name || match.surah.englishName,
          surahArabic: surah?.arabic || match.surah.name,
          ayahNumber: match.numberInSurah,
          text: match.text,
          highlighted: highlightText(match.text, query),
          edition: match.edition?.identifier || translationId,
        };
      });

    const result = {
      results,
      total: data.data.count || results.length,
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
 * Search in Arabic text
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
    const response = await fetch(
      `${API_BASE}/search/${encodeURIComponent(query)}/quran-uthmani/all`
    );

    if (!response.ok) {
      throw new Error('Arabic search failed');
    }

    const data = await response.json();

    if (data.code !== 200 || !data.data) {
      return { results: [], total: 0, query };
    }

    const results = (data.data.matches || [])
      .slice(0, limit)
      .map(match => {
        const surah = SURAHS.find(s => s.id === match.surah.number);
        return {
          surahId: match.surah.number,
          surahName: surah?.name || match.surah.englishName,
          surahArabic: surah?.arabic || match.surah.name,
          ayahNumber: match.numberInSurah,
          text: match.text,
          isArabic: true,
        };
      });

    const result = {
      results,
      total: data.data.count || results.length,
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
