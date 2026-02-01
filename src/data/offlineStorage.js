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
export const downloadSurahForOffline = async (surahId, translationId, onProgress) => {
  try {
    // Fetch from API
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${surahId}/${translationId}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch surah');
    }

    const data = await response.json();

    if (data.code !== 200 || !data.data) {
      throw new Error('Invalid API response');
    }

    // Save to IndexedDB
    await saveSurahOffline(surahId, translationId, data.data);

    if (onProgress) {
      onProgress(100);
    }

    return data.data;
  } catch (error) {
    console.error('Error downloading surah:', error);
    throw error;
  }
};

/**
 * Download multiple surahs (batch download)
 */
export const downloadSurahsForOffline = async (surahIds, translationId, onProgress) => {
  const total = surahIds.length;
  let completed = 0;

  for (const surahId of surahIds) {
    try {
      await downloadSurahForOffline(surahId, translationId);
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
