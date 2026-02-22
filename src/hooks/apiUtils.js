/**
 * API Utilities
 * Shared utilities for Quran API hooks
 *
 * @module hooks/apiUtils
 */

/** Al Quran Cloud API Base URL */
export const API_BASE = 'https://api.alquran.cloud/v1';

/** Quran.com API Base URL */
export const QURAN_COM_API = 'https://api.quran.com/api/v4';

/** QuranWBW.com Static API Base URL */
export const QURANWBW_API = 'https://static.quranwbw.com/data/v4';

/** Authenticated API endpoint (Cloudflare Function) */
export const AUTH_API_ENDPOINT = '/api/quran-words';

/** Cache for API responses */
const apiCache = new Map();

/**
 * Fetch data from API with caching
 *
 * @param {string} url - API URL to fetch
 * @param {string} cacheKey - Unique key for caching
 * @param {Object} [options] - Fetch options
 * @param {AbortSignal} [options.signal] - AbortController signal for cancellation
 * @returns {Promise<any>} - Parsed response data
 * @throws {Error} - On API error or non-OK response
 *
 * @example
 * const controller = new AbortController();
 * const data = await fetchWithCache(
 *   'https://api.alquran.cloud/v1/surah/1',
 *   'surah-1',
 *   { signal: controller.signal }
 * );
 */
export async function fetchWithCache(url, cacheKey, options = {}) {
  if (apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  const response = await fetch(url, { signal: options.signal });
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  if (data.code !== 200 || data.status !== 'OK') {
    throw new Error(data.data || 'API returned error');
  }

  apiCache.set(cacheKey, data.data);
  return data.data;
}

/**
 * Fetch data without AlQuran Cloud wrapper validation
 * Used for Quran.com and other APIs that have different response formats
 *
 * @param {string} url - API URL to fetch
 * @param {string} cacheKey - Unique key for caching
 * @param {Object} [options] - Fetch options
 * @param {AbortSignal} [options.signal] - AbortController signal for cancellation
 * @returns {Promise<any>} - Parsed response data
 * @throws {Error} - On API error
 */
export async function fetchWithCacheSimple(url, cacheKey, options = {}) {
  if (apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  const response = await fetch(url, { signal: options.signal });
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  apiCache.set(cacheKey, data);
  return data;
}

/**
 * Get cached data by key
 *
 * @param {string} cacheKey - Cache key
 * @returns {any|undefined} - Cached data or undefined
 */
export function getFromCache(cacheKey) {
  return apiCache.get(cacheKey);
}

/**
 * Set data in cache
 *
 * @param {string} cacheKey - Cache key
 * @param {any} data - Data to cache
 */
export function setInCache(cacheKey, data) {
  apiCache.set(cacheKey, data);
}

/**
 * Check if cache has a key
 *
 * @param {string} cacheKey - Cache key
 * @returns {boolean} - True if key exists in cache
 */
export function hasInCache(cacheKey) {
  return apiCache.has(cacheKey);
}

/**
 * Clear all cached data
 */
export function clearCache() {
  apiCache.clear();
}

/**
 * Clear specific cache entry
 *
 * @param {string} cacheKey - Cache key to clear
 */
export function clearCacheEntry(cacheKey) {
  apiCache.delete(cacheKey);
}
