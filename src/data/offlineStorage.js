/**
 * Offline Storage Module
 * Single Responsibility: Handle IndexedDB operations for offline Quran access
 */

const DB_NAME = 'QuranOfflineDB';
const DB_VERSION = 1;

// Store names
const STORES = {
  SURAHS: 'surahs',           // Full surah data with ayahs
  TRANSLATIONS: 'translations', // Cached translations
  TAFSEER: 'tafseer',         // Cached tafseer
  AUDIO: 'audio',             // Audio files
  SETTINGS: 'settings',       // User preferences
  METADATA: 'metadata',       // Download metadata
};

let db = null;

/**
 * Initialize IndexedDB
 */
export const initDB = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
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

      // Audio store
      if (!database.objectStoreNames.contains(STORES.AUDIO)) {
        const audioStore = database.createObjectStore(STORES.AUDIO, {
          keyPath: ['surahId', 'reciterId'],
        });
        audioStore.createIndex('surahId', 'surahId', { unique: false });
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
  if (!db) {
    await initDB();
  }
  return db;
};

/**
 * Save surah data to offline storage
 */
export const saveSurahOffline = async (surahId, translationId, data) => {
  const database = await getDB();
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
    transaction.onerror = () => reject(transaction.error);
  });
};

/**
 * Get cached surah data
 */
export const getCachedSurah = async (surahId, translationId) => {
  const database = await getDB();
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
    transaction.onerror = () => reject(transaction.error);
  });
};

/**
 * Get cached tafseer
 */
export const getCachedTafseer = async (surahId, ayahNumber, tafseerSource) => {
  const database = await getDB();
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
 * Save audio file to offline storage
 */
export const saveAudioOffline = async (surahId, reciterId, audioBlob) => {
  const database = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORES.AUDIO, STORES.METADATA], 'readwrite');
    const store = transaction.objectStore(STORES.AUDIO);
    const metaStore = transaction.objectStore(STORES.METADATA);

    store.put({
      surahId,
      reciterId,
      audioBlob,
      cachedAt: Date.now(),
    });

    metaStore.put({
      key: `audio_${surahId}_${reciterId}`,
      type: 'audio',
      surahId,
      reciterId,
      size: audioBlob.size,
      cachedAt: Date.now(),
    });

    transaction.oncomplete = () => resolve(true);
    transaction.onerror = () => reject(transaction.error);
  });
};

/**
 * Get cached audio
 */
export const getCachedAudio = async (surahId, reciterId) => {
  const database = await getDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORES.AUDIO, 'readonly');
    const store = transaction.objectStore(STORES.AUDIO);
    const request = store.get([surahId, reciterId]);

    request.onsuccess = () => {
      const result = request.result;
      resolve(result ? result.audioBlob : null);
    };
    request.onerror = () => reject(request.error);
  });
};

/**
 * Get all download metadata
 */
export const getDownloadMetadata = async () => {
  const database = await getDB();
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
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(
      [STORES.SURAHS, STORES.TRANSLATIONS, STORES.TAFSEER, STORES.AUDIO, STORES.METADATA],
      'readwrite'
    );

    transaction.objectStore(STORES.SURAHS).clear();
    transaction.objectStore(STORES.TRANSLATIONS).clear();
    transaction.objectStore(STORES.TAFSEER).clear();
    transaction.objectStore(STORES.AUDIO).clear();
    transaction.objectStore(STORES.METADATA).clear();

    transaction.oncomplete = () => resolve(true);
    transaction.onerror = () => reject(transaction.error);
  });
};

/**
 * Download surah for offline use
 */
// Verse counts per surah for audio URL calculation
const VERSE_COUNTS = [
  0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
  111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
  54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49,
  62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28,
  28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
];

function getGlobalAyahNumber(surahId, ayahNum) {
  let g = 0;
  for (let i = 1; i < surahId; i++) g += VERSE_COUNTS[i];
  return g + ayahNum;
}

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
  // Delete MP3s from Cache API
  if ('caches' in window) {
    try {
      const cache = await caches.open('w3quran-audio-offline');
      const totalAyahs = VERSE_COUNTS[surahId] || 0;
      const baseUrl = `https://cdn.islamic.network/quran/audio/128/${reciterId}`;
      for (let j = 1; j <= totalAyahs; j++) {
        const globalAyah = getGlobalAyahNumber(surahId, j);
        await cache.delete(`${baseUrl}/${globalAyah}.mp3`);
      }
    } catch {}
  }
  // Delete metadata from IndexedDB
  const database = await getDB();
  await new Promise((resolve, reject) => {
    const tx = database.transaction(STORES.METADATA, 'readwrite');
    tx.objectStore(STORES.METADATA).delete(`audio_${surahId}_${reciterId}`);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

/**
 * Migration: detect audio already in Cache API (downloaded before metadata tracking)
 * and create metadata entries so the size display is correct.
 * Only runs for surahs that have text metadata but no audio metadata.
 */
export const migrateAudioMetadata = async (surahIds, reciterId = 'ar.alafasy') => {
  if (!('caches' in window)) return;

  let cache;
  try {
    cache = await caches.open('w3quran-audio-offline');
  } catch {
    return;
  }

  const database = await getDB();
  const baseUrl = `https://cdn.islamic.network/quran/audio/128/${reciterId}`;

  for (const surahId of surahIds) {
    // Check if audio metadata already exists
    const existing = await new Promise((resolve) => {
      const tx = database.transaction(STORES.METADATA, 'readonly');
      const req = tx.objectStore(STORES.METADATA).get(`audio_${surahId}_${reciterId}`);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    });

    if (existing) continue; // Already has metadata

    const totalAyahs = VERSE_COUNTS[surahId] || 0;
    if (totalAyahs === 0) continue;

    // Quick check: is the first ayah cached?
    const firstGlobal = getGlobalAyahNumber(surahId, 1);
    const firstResp = await cache.match(`${baseUrl}/${firstGlobal}.mp3`);
    if (!firstResp) continue; // No audio cached for this surah

    // Audio exists — sample a few ayahs to estimate total size
    const sampleIndices = [1, Math.ceil(totalAyahs / 2), totalAyahs];
    let sampleBytes = 0;
    let sampleCount = 0;

    for (const ayahNum of sampleIndices) {
      const globalAyah = getGlobalAyahNumber(surahId, ayahNum);
      const resp = await cache.match(`${baseUrl}/${globalAyah}.mp3`);
      if (resp) {
        const len = parseInt(resp.headers.get('content-length') || '0', 10);
        if (len > 0) {
          sampleBytes += len;
          sampleCount++;
        }
      }
    }

    // Estimate total: average sample size * total ayahs
    const avgSize = sampleCount > 0 ? sampleBytes / sampleCount : 0;
    const estimatedTotal = Math.round(avgSize * totalAyahs);

    // Save metadata
    await new Promise((resolve) => {
      const tx = database.transaction(STORES.METADATA, 'readwrite');
      tx.objectStore(STORES.METADATA).put({
        key: `audio_${surahId}_${reciterId}`,
        type: 'audio',
        surahId,
        reciterId,
        size: estimatedTotal,
        ayahCount: totalAyahs,
        cachedAt: Date.now(),
      });
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  }
};

export const downloadSurahForOffline = async (surahId, translationId, onProgress, { includeAudio = true, reciterId = 'ar.alafasy' } = {}) => {
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

    if (onProgress) onProgress(includeAudio ? 50 : 100);

    // Cache audio files for offline playback
    if (includeAudio) {
      await cacheAudioForSurah(surahId, reciterId, (done, total) => {
        if (onProgress) onProgress(50 + Math.round((done / total) * 50));
      });
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
