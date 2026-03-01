/**
 * Offline Storage Module
 * Single Responsibility: Handle IndexedDB operations for offline Quran access
 */

import { VERSE_COUNTS, getGlobalAyahNumber } from '../hooks/useAudioPlayer';

const DB_NAME = 'QuranOfflineDB';
const DB_VERSION = 1;

// Store names
const STORES = {
  SURAHS: 'surahs',           // Full surah data with ayahs
  TRANSLATIONS: 'translations', // Cached translations
  TAFSEER: 'tafseer',         // Cached tafseer
  // Note: Audio is stored in Cache API (caches.open('w3quran-audio-offline')), not IndexedDB
  SETTINGS: 'settings',       // User preferences
  METADATA: 'metadata',       // Download metadata
};

let db = null;

/**
 * Check if an error is a quota exceeded error
 */
const isQuotaError = (error) => {
  return error?.name === 'QuotaExceededError' ||
    error?.code === 22 || // Legacy Safari
    error?.message?.toLowerCase().includes('quota');
};

/**
 * Initialize IndexedDB
 */
export const initDB = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB not available'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('Error opening IndexedDB:', request.error);
      reject(request.error);
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      // Surahs store - indexed by surah ID and translation
      if (!database.objectStoreNames.contains(STORES.SURAHS)) {
        const surahStore = database.createObjectStore(STORES.SURAHS, {
          keyPath: ['surahId', 'translationId'],
        });
        surahStore.createIndex('surahId', 'surahId', { unique: false });
        surahStore.createIndex('translationId', 'translationId', { unique: false });
      }

      // Translations store
      if (!database.objectStoreNames.contains(STORES.TRANSLATIONS)) {
        const translationStore = database.createObjectStore(STORES.TRANSLATIONS, {
          keyPath: 'id',
        });
        translationStore.createIndex('language', 'language', { unique: false });
      }

      // Tafseer store
      if (!database.objectStoreNames.contains(STORES.TAFSEER)) {
        const tafseerStore = database.createObjectStore(STORES.TAFSEER, {
          keyPath: ['surahId', 'ayahNumber', 'tafseerSource'],
        });
        tafseerStore.createIndex('surahId', 'surahId', { unique: false });
      }

      // Settings store
      if (!database.objectStoreNames.contains(STORES.SETTINGS)) {
        database.createObjectStore(STORES.SETTINGS, { keyPath: 'key' });
      }

      // Metadata store
      if (!database.objectStoreNames.contains(STORES.METADATA)) {
        const metaStore = database.createObjectStore(STORES.METADATA, {
          keyPath: 'key',
        });
        metaStore.createIndex('type', 'type', { unique: false });
      }
    };
  });
};

/**
 * Get database instance
 */
const getDB = async () => {
  try {
    if (!db) {
      await initDB();
    }
    return db;
  } catch (e) {
    console.warn('IndexedDB unavailable:', e.message);
    return null;
  }
};

/**
 * Save surah data to offline storage
 */
export const saveSurahOffline = async (surahId, translationId, data) => {
  const database = await getDB();
  if (!database) return null;
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORES.SURAHS, STORES.METADATA], 'readwrite');
    const store = transaction.objectStore(STORES.SURAHS);
    const metaStore = transaction.objectStore(STORES.METADATA);

    const record = {
      surahId,
      translationId,
      data,
      cachedAt: Date.now(),
    };

    store.put(record);

    // Update metadata
    const metaKey = `surah_${surahId}_${translationId}`;
    metaStore.put({
      key: metaKey,
      type: 'surah',
      surahId,
      translationId,
      size: JSON.stringify(data).length,
      cachedAt: Date.now(),
    });

    transaction.oncomplete = () => resolve(true);
    transaction.onerror = () => {
      if (isQuotaError(transaction.error)) {
        reject(new Error('STORAGE_FULL'));
      } else {
        reject(transaction.error);
      }
    };
  });
};

/**
 * Get cached surah data
 */
export const getCachedSurah = async (surahId, translationId) => {
  const database = await getDB();
  if (!database) return null;
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORES.SURAHS, 'readonly');
    const store = transaction.objectStore(STORES.SURAHS);
    const request = store.get([surahId, translationId]);

    request.onsuccess = () => {
      const result = request.result;
      if (result) {
        resolve(result.data);
      } else {
        resolve(null);
      }
    };
    request.onerror = () => reject(request.error);
  });
};

/**
 * Check if surah is cached
 */
export const isSurahCached = async (surahId, translationId) => {
  const cached = await getCachedSurah(surahId, translationId);
  return cached !== null;
};

/**
 * Save tafseer to offline storage
 */
export const saveTafseerOffline = async (surahId, ayahNumber, tafseerSource, data) => {
  const database = await getDB();
  if (!database) return null;
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORES.TAFSEER, 'readwrite');
    const store = transaction.objectStore(STORES.TAFSEER);

    store.put({
      surahId,
      ayahNumber,
      tafseerSource,
      data,
      cachedAt: Date.now(),
    });

    transaction.oncomplete = () => resolve(true);
    transaction.onerror = () => {
      if (isQuotaError(transaction.error)) {
        reject(new Error('STORAGE_FULL'));
      } else {
        reject(transaction.error);
      }
    };
  });
};

/**
 * Get cached tafseer
 */
export const getCachedTafseer = async (surahId, ayahNumber, tafseerSource) => {
  const database = await getDB();
  if (!database) return null;
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORES.TAFSEER, 'readonly');
    const store = transaction.objectStore(STORES.TAFSEER);
    const request = store.get([surahId, ayahNumber, tafseerSource]);

    request.onsuccess = () => {
      const result = request.result;
      resolve(result ? result.data : null);
    };
    request.onerror = () => reject(request.error);
  });
};

/**
 * Get all download metadata
 */
export const getDownloadMetadata = async () => {
  const database = await getDB();
  if (!database) return [];
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORES.METADATA, 'readonly');
    const store = transaction.objectStore(STORES.METADATA);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
};

/**
 * Get list of downloaded surahs
 */
export const getDownloadedSurahs = async () => {
  const metadata = await getDownloadMetadata();
  return metadata
    .filter(m => m.type === 'surah')
    .map(m => ({
      surahId: m.surahId,
      translationId: m.translationId,
      cachedAt: m.cachedAt,
      size: m.size,
    }));
};

/**
 * Calculate total storage used
 */
export const getTotalStorageUsed = async () => {
  const metadata = await getDownloadMetadata();
  return metadata.reduce((total, m) => total + (m.size || 0), 0);
};

/**
 * Delete cached surah
 */
export const deleteCachedSurah = async (surahId, translationId) => {
  const database = await getDB();
  if (!database) return null;
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORES.SURAHS, STORES.METADATA], 'readwrite');
    const store = transaction.objectStore(STORES.SURAHS);
    const metaStore = transaction.objectStore(STORES.METADATA);

    store.delete([surahId, translationId]);
    metaStore.delete(`surah_${surahId}_${translationId}`);

    transaction.oncomplete = () => resolve(true);
    transaction.onerror = () => reject(transaction.error);
  });
};

/**
 * Clear all cached data
 */
export const clearAllCache = async () => {
  const database = await getDB();
  if (!database) return null;
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(
      [STORES.SURAHS, STORES.TRANSLATIONS, STORES.TAFSEER, STORES.METADATA],
      'readwrite'
    );

    transaction.objectStore(STORES.SURAHS).clear();
    transaction.objectStore(STORES.TRANSLATIONS).clear();
    transaction.objectStore(STORES.TAFSEER).clear();
    transaction.objectStore(STORES.METADATA).clear();

    transaction.oncomplete = async () => {
      // Also clear Cache API (where audio is stored)
      if ('caches' in window) {
        try { await caches.delete('w3quran-audio-offline'); } catch (e) { /* ignore */ }
      }
      resolve(true);
    };
    transaction.onerror = () => reject(transaction.error);
  });
};

/**
 * Cache audio files for a surah into the browser Cache API
 * Returns total audio size in bytes
 */
export const cacheAudioForSurah = async (surahId, reciterId = 'ar.alafasy', onAudioProgress) => {
  if (!('caches' in window)) return 0;
  const cache = await caches.open('w3quran-audio-offline');
  const totalAyahs = VERSE_COUNTS[surahId] || 0;
  const baseUrl = `https://cdn.islamic.network/quran/audio/128/${reciterId}`;
  let totalBytes = 0;

  // Download in batches of 5 to avoid overwhelming the network
  for (let i = 1; i <= totalAyahs; i += 5) {
    const batch = [];
    for (let j = i; j < i + 5 && j <= totalAyahs; j++) {
      const globalAyah = getGlobalAyahNumber(surahId, j);
      const url = `${baseUrl}/${globalAyah}.mp3`;
      batch.push(
        (async () => {
          const cached = await cache.match(url);
          if (cached) {
            // Already cached — count its size from Content-Length header
            totalBytes += parseInt(cached.headers.get('content-length') || '0', 10);
            return;
          }
          try {
            const resp = await fetch(url);
            if (resp.ok) {
              totalBytes += parseInt(resp.headers.get('content-length') || '0', 10);
              await cache.put(url, resp);
            }
          } catch {}
        })()
      );
    }
    await Promise.all(batch);
    if (onAudioProgress) {
      onAudioProgress(Math.min(i + 4, totalAyahs), totalAyahs);
    }
  }

  // Save audio metadata to IndexedDB so size is tracked
  const database = await getDB();
  if (!database) return totalBytes;
  await new Promise((resolve, reject) => {
    const tx = database.transaction(STORES.METADATA, 'readwrite');
    tx.objectStore(STORES.METADATA).put({
      key: `audio_${surahId}_${reciterId}`,
      type: 'audio',
      surahId,
      reciterId,
      size: totalBytes,
      ayahCount: totalAyahs,
      cachedAt: Date.now(),
    });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });

  return totalBytes;
};

/**
 * Get list of downloaded audio metadata
 */
export const getDownloadedAudio = async () => {
  const metadata = await getDownloadMetadata();
  return metadata
    .filter(m => m.type === 'audio')
    .map(m => ({
      surahId: m.surahId,
      reciterId: m.reciterId,
      size: m.size || 0,
      ayahCount: m.ayahCount || 0,
      cachedAt: m.cachedAt,
    }));
};

/**
 * Delete audio cache for a specific surah
 */
export const deleteAudioCacheForSurah = async (surahId, reciterId = 'ar.alafasy') => {
  // Delete MP3s from Cache API — scan all cached keys for this surah
  if ('caches' in window) {
    try {
      const cache = await caches.open('w3quran-audio-offline');
      const totalAyahs = VERSE_COUNTS[surahId] || 0;

      // Delete Islamic Network CDN format
      const baseUrl = `https://cdn.islamic.network/quran/audio/128/${reciterId}`;
      for (let j = 1; j <= totalAyahs; j++) {
        const globalAyah = getGlobalAyahNumber(surahId, j);
        await cache.delete(`${baseUrl}/${globalAyah}.mp3`);
      }

      // Also delete EveryAyah format if reciterId matches narrator pattern
      const surahStr = String(surahId).padStart(3, '0');
      const keys = await cache.keys();
      for (const req of keys) {
        const url = req.url;
        // Match EveryAyah URLs for this surah (e.g. .../001001.mp3 to .../001286.mp3)
        if (url.includes('everyayah.com') && url.endsWith('.mp3')) {
          const filename = url.split('/').pop().replace('.mp3', '');
          if (filename.startsWith(surahStr)) {
            await cache.delete(req);
          }
        }
      }
    } catch {}
  }
  // Delete metadata from IndexedDB — delete all metadata entries for this surah
  const database = await getDB();
  if (!database) return null;
  // Delete specific reciter metadata
  await new Promise((resolve) => {
    const tx = database.transaction(STORES.METADATA, 'readwrite');
    tx.objectStore(STORES.METADATA).delete(`audio_${surahId}_${reciterId}`);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
  // Also clean up any other audio metadata for this surah
  const allMeta = await getDownloadMetadata();
  const audioMetaForSurah = allMeta.filter(m => m.type === 'audio' && m.surahId === surahId);
  for (const meta of audioMetaForSurah) {
    await new Promise((resolve) => {
      const tx = database.transaction(STORES.METADATA, 'readwrite');
      tx.objectStore(STORES.METADATA).delete(meta.key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  }
};

/**
 * Migration: detect audio already in Cache API (downloaded before metadata tracking)
 * and create metadata entries so the size display is correct.
 * Only runs for surahs that have text metadata but no audio metadata.
 */
export const migrateAudioMetadata = async (surahIds) => {
  if (!('caches' in window)) return;

  let cache;
  try {
    cache = await caches.open('w3quran-audio-offline');
  } catch {
    return;
  }

  const database = await getDB();
  if (!database) return;

  // Get all cached URLs to scan for any reciter's audio
  let cachedKeys;
  try {
    cachedKeys = await cache.keys();
  } catch {
    return;
  }

  // Build a map: surahId -> { reciterId, urls[] } from cached URLs
  // Islamic Network pattern: cdn.islamic.network/quran/audio/128/{reciterId}/{globalAyah}.mp3
  // EveryAyah pattern: everyayah.com/data/.../{SSSAAA}.mp3
  const islamicNetRegex = /cdn\.islamic\.network\/quran\/audio\/\d+\/([^/]+)\/(\d+)\.mp3/;
  const everyAyahRegex = /everyayah\.com\/.*\/(\d{3})(\d{3})\.mp3/;

  // Map globalAyah -> { surahId, ayahNum } for reverse lookup
  const globalToSurah = {};
  let g = 0;
  for (let s = 1; s <= 114; s++) {
    const count = VERSE_COUNTS[s] || 0;
    for (let a = 1; a <= count; a++) {
      g++;
      globalToSurah[g] = { surahId: s, ayahNum: a };
    }
  }

  // Collect found audio by surahId+reciterId
  const found = {}; // key: `${surahId}_${reciterId}` -> { count, totalBytes }

  for (const req of cachedKeys) {
    const url = req.url;
    let surahId, detectedReciter;

    const inMatch = url.match(islamicNetRegex);
    if (inMatch) {
      detectedReciter = inMatch[1];
      const globalNum = parseInt(inMatch[2]);
      const info = globalToSurah[globalNum];
      if (info) surahId = info.surahId;
    }

    if (!surahId) {
      const eaMatch = url.match(everyAyahRegex);
      if (eaMatch) {
        surahId = parseInt(eaMatch[1]);
        // Extract reciter from URL path between last known segment and filename
        // e.g. everyayah.com/data/translations/urdu_farhat_hashmi/001001.mp3
        const pathParts = new URL(url).pathname.split('/');
        detectedReciter = pathParts.slice(2, -1).join('/'); // everything between /data/ and filename
      }
    }

    if (!surahId || !detectedReciter) continue;
    if (!surahIds.includes(surahId)) continue;

    const key = `${surahId}_${detectedReciter}`;
    if (!found[key]) found[key] = { surahId, reciterId: detectedReciter, count: 0, totalBytes: 0 };
    found[key].count++;
    // Estimate size from Content-Length if available
    try {
      const resp = await cache.match(req);
      if (resp) {
        const len = parseInt(resp.headers.get('content-length') || '0', 10);
        found[key].totalBytes += len;
      }
    } catch {}
  }

  // Save metadata for each found surah+reciter combo
  for (const info of Object.values(found)) {
    if (info.count === 0) continue;

    const metaKey = `audio_${info.surahId}_${info.reciterId}`;

    // Check if metadata already exists
    const existing = await new Promise((resolve) => {
      const tx = database.transaction(STORES.METADATA, 'readonly');
      const req = tx.objectStore(STORES.METADATA).get(metaKey);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    });
    if (existing) continue;

    await new Promise((resolve) => {
      const tx = database.transaction(STORES.METADATA, 'readwrite');
      tx.objectStore(STORES.METADATA).put({
        key: metaKey,
        type: 'audio',
        surahId: info.surahId,
        reciterId: info.reciterId,
        size: info.totalBytes,
        ayahCount: info.count,
        cachedAt: Date.now(),
      });
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  }
};

/**
 * Cache narrator/translation audio for a surah
 * Supports both EveryAyah format (SSSAAA.mp3) and Islamic Network CDN (globalAyah.mp3)
 */
export const cacheNarratorAudioForSurah = async (surahId, narratorId, narratorConfig, onAudioProgress) => {
  if (!('caches' in window) || !narratorConfig) return 0;
  const cache = await caches.open('w3quran-audio-offline');
  const totalAyahs = VERSE_COUNTS[surahId] || 0;
  let totalBytes = 0;

  for (let i = 1; i <= totalAyahs; i += 5) {
    const batch = [];
    for (let j = i; j < i + 5 && j <= totalAyahs; j++) {
      let url;
      if (narratorConfig.type === 'everyayah') {
        const surahStr = String(surahId).padStart(3, '0');
        const ayahStr = String(j).padStart(3, '0');
        url = `${narratorConfig.baseUrl}/${surahStr}${ayahStr}.mp3`;
      } else {
        const globalAyah = getGlobalAyahNumber(surahId, j);
        url = `${narratorConfig.baseUrl}/${globalAyah}.mp3`;
      }
      batch.push(
        (async () => {
          const cached = await cache.match(url);
          if (cached) {
            totalBytes += parseInt(cached.headers.get('content-length') || '0', 10);
            return;
          }
          try {
            const resp = await fetch(url);
            if (resp.ok) {
              totalBytes += parseInt(resp.headers.get('content-length') || '0', 10);
              await cache.put(url, resp);
            }
          } catch {}
        })()
      );
    }
    await Promise.all(batch);
    if (onAudioProgress) onAudioProgress(Math.min(i + 4, totalAyahs), totalAyahs);
  }

  // Save metadata
  const database = await getDB();
  if (database) {
    await new Promise((resolve) => {
      const tx = database.transaction(STORES.METADATA, 'readwrite');
      tx.objectStore(STORES.METADATA).put({
        key: `audio_${surahId}_${narratorId}`,
        type: 'audio',
        surahId,
        reciterId: narratorId,
        size: totalBytes,
        ayahCount: totalAyahs,
        cachedAt: Date.now(),
      });
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  }

  return totalBytes;
};

/**
 * Check if audio URL is in offline Cache API
 */
export const getOfflineCachedAudioUrl = async (url) => {
  if (!('caches' in window)) return null;
  try {
    const cache = await caches.open('w3quran-audio-offline');
    const resp = await cache.match(url);
    if (resp) {
      const blob = await resp.blob();
      return URL.createObjectURL(blob);
    }
  } catch {}
  return null;
};

export const downloadSurahForOffline = async (surahId, translationId, onProgress, { includeAudio = true, reciterId = 'ar.alafasy', narratorId = null, narratorConfig = null } = {}) => {
  try {
    // Fetch both Arabic text and translation in parallel
    const [arabicRes, translationRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`),
      fetch(`https://api.alquran.cloud/v1/surah/${surahId}/${translationId}`),
    ]);

    if (!arabicRes.ok || !translationRes.ok) {
      throw new Error('Failed to fetch surah');
    }

    const [arabicJson, translationJson] = await Promise.all([
      arabicRes.json(),
      translationRes.json(),
    ]);

    if (arabicJson.code !== 200 || !arabicJson.data) {
      throw new Error('Invalid Arabic API response');
    }
    if (translationJson.code !== 200 || !translationJson.data) {
      throw new Error('Invalid translation API response');
    }

    // Save both Arabic and translation to IndexedDB
    await saveSurahOffline(surahId, 'quran-uthmani', arabicJson.data);
    await saveSurahOffline(surahId, translationId, translationJson.data);

    if (onProgress) onProgress(includeAudio ? 30 : 100);

    // Cache audio files for offline playback
    if (includeAudio) {
      const hasNarrator = narratorId && narratorConfig;
      // Arabic reciter audio (30-65% progress)
      await cacheAudioForSurah(surahId, reciterId, (done, total) => {
        if (onProgress) onProgress(30 + Math.round((done / total) * (hasNarrator ? 35 : 70)));
      });
      // Narrator/translation audio (65-100% progress)
      if (hasNarrator) {
        await cacheNarratorAudioForSurah(surahId, narratorId, narratorConfig, (done, total) => {
          if (onProgress) onProgress(65 + Math.round((done / total) * 35));
        });
      }
    }

    return translationJson.data;
  } catch (error) {
    console.error('Error downloading surah:', error);
    throw error;
  }
};

/**
 * Download multiple surahs (batch download)
 */
export const downloadSurahsForOffline = async (surahIds, translationId, onProgress, options = {}) => {
  const total = surahIds.length;
  let completed = 0;

  for (const surahId of surahIds) {
    try {
      await downloadSurahForOffline(surahId, translationId, null, options);
      completed++;
      if (onProgress) {
        onProgress(Math.round((completed / total) * 100), completed, total);
      }
    } catch (error) {
      console.error(`Failed to download surah ${surahId}:`, error);
    }
  }

  return completed;
};

/**
 * Check if offline mode is available
 */
export const isOfflineModeAvailable = () => {
  return 'indexedDB' in window;
};

/**
 * Get network status
 */
export const isOnline = () => {
  return navigator.onLine;
};

/**
 * Register service worker for offline support
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      return registration;
    } catch (error) {
      // ServiceWorker registration failed - offline mode may not work
      return null;
    }
  }
  return null;
};

// Initialize DB on module load
initDB().catch(() => { /* Silently handle initialization errors */ });
