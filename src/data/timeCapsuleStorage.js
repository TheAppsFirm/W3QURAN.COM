/**
 * Time Capsule Storage
 * IndexedDB storage for voice notes, photos, and capsule entries
 */

const DB_NAME = 'w3quran_timecapsule';
const DB_VERSION = 1;

// Database stores
const STORES = {
  CAPSULES: 'capsules',
  MEDIA: 'media',
};

// Initialize database
let dbInstance = null;

export const initCapsuleDB = () => {
  return new Promise((resolve, reject) => {
    if (dbInstance) {
      resolve(dbInstance);
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);

    request.onsuccess = () => {
      dbInstance = request.result;
      resolve(dbInstance);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Capsules store
      if (!db.objectStoreNames.contains(STORES.CAPSULES)) {
        const capsuleStore = db.createObjectStore(STORES.CAPSULES, { keyPath: 'id' });
        capsuleStore.createIndex('verseRef', 'verseRef', { unique: false });
        capsuleStore.createIndex('type', 'type', { unique: false });
        capsuleStore.createIndex('createdAt', 'createdAt', { unique: false });
        capsuleStore.createIndex('unlockAt', 'unlockAt', { unique: false });
      }

      // Media store for blobs
      if (!db.objectStoreNames.contains(STORES.MEDIA)) {
        db.createObjectStore(STORES.MEDIA, { keyPath: 'id' });
      }
    };
  });
};

// Generate unique ID
const generateId = () => `capsule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Create a new capsule entry
export const createCapsule = async ({
  type, // 'voice' | 'text' | 'photo' | 'milestone' | 'future_message'
  verseRef, // e.g., '2:255'
  content, // text content or reference to media
  mediaBlob, // optional Blob for voice/photo
  mood, // optional mood
  location, // optional { lat, lng }
  unlockAt, // optional Date for future messages
  isPrivate = true,
  metadata = {},
}) => {
  const db = await initCapsuleDB();
  const id = generateId();
  const now = new Date().toISOString();

  // Store media blob separately if provided
  let mediaId = null;
  if (mediaBlob) {
    mediaId = `media_${id}`;
    const mediaTransaction = db.transaction(STORES.MEDIA, 'readwrite');
    const mediaStore = mediaTransaction.objectStore(STORES.MEDIA);
    await new Promise((resolve, reject) => {
      const request = mediaStore.put({ id: mediaId, blob: mediaBlob, type: mediaBlob.type });
      request.onsuccess = resolve;
      request.onerror = () => reject(request.error);
    });
  }

  const capsule = {
    id,
    type,
    verseRef,
    content,
    mediaId,
    mood,
    location,
    createdAt: now,
    unlockAt: unlockAt ? unlockAt.toISOString() : null,
    isPrivate,
    isLocked: !!unlockAt,
    metadata,
  };

  const transaction = db.transaction(STORES.CAPSULES, 'readwrite');
  const store = transaction.objectStore(STORES.CAPSULES);

  return new Promise((resolve, reject) => {
    const request = store.put(capsule);
    request.onsuccess = () => resolve(capsule);
    request.onerror = () => reject(request.error);
  });
};

// Get all capsules
export const getAllCapsules = async () => {
  const db = await initCapsuleDB();
  const transaction = db.transaction(STORES.CAPSULES, 'readonly');
  const store = transaction.objectStore(STORES.CAPSULES);

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => {
      const capsules = request.result || [];
      // Check and update lock status
      const now = new Date();
      const updated = capsules.map(c => ({
        ...c,
        isLocked: c.unlockAt && new Date(c.unlockAt) > now,
      }));
      resolve(updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    };
    request.onerror = () => reject(request.error);
  });
};

// Get capsules for a specific verse
export const getCapsulesByVerse = async (verseRef) => {
  const db = await initCapsuleDB();
  const transaction = db.transaction(STORES.CAPSULES, 'readonly');
  const store = transaction.objectStore(STORES.CAPSULES);
  const index = store.index('verseRef');

  return new Promise((resolve, reject) => {
    const request = index.getAll(verseRef);
    request.onsuccess = () => {
      const capsules = request.result || [];
      const now = new Date();
      const updated = capsules.map(c => ({
        ...c,
        isLocked: c.unlockAt && new Date(c.unlockAt) > now,
      }));
      resolve(updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    };
    request.onerror = () => reject(request.error);
  });
};

// Get single capsule
export const getCapsule = async (id) => {
  const db = await initCapsuleDB();
  const transaction = db.transaction(STORES.CAPSULES, 'readonly');
  const store = transaction.objectStore(STORES.CAPSULES);

  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Get media blob
export const getMedia = async (mediaId) => {
  if (!mediaId) return null;

  const db = await initCapsuleDB();
  const transaction = db.transaction(STORES.MEDIA, 'readonly');
  const store = transaction.objectStore(STORES.MEDIA);

  return new Promise((resolve, reject) => {
    const request = store.get(mediaId);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Delete a capsule
export const deleteCapsule = async (id) => {
  const db = await initCapsuleDB();

  // First get the capsule to check for media
  const capsule = await getCapsule(id);
  if (capsule?.mediaId) {
    const mediaTransaction = db.transaction(STORES.MEDIA, 'readwrite');
    const mediaStore = mediaTransaction.objectStore(STORES.MEDIA);
    mediaStore.delete(capsule.mediaId);
  }

  const transaction = db.transaction(STORES.CAPSULES, 'readwrite');
  const store = transaction.objectStore(STORES.CAPSULES);

  return new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
};

// Get upcoming unlocks (future messages that will unlock soon)
export const getUpcomingUnlocks = async (daysAhead = 7) => {
  const capsules = await getAllCapsules();
  const now = new Date();
  const futureDate = new Date(now.getTime() + daysAhead * 24 * 60 * 60 * 1000);

  return capsules.filter(c =>
    c.unlockAt &&
    new Date(c.unlockAt) > now &&
    new Date(c.unlockAt) <= futureDate
  ).sort((a, b) => new Date(a.unlockAt) - new Date(b.unlockAt));
};

// Get recently unlocked capsules
export const getRecentlyUnlocked = async (daysBack = 7) => {
  const capsules = await getAllCapsules();
  const now = new Date();
  const pastDate = new Date(now.getTime() - daysBack * 24 * 60 * 60 * 1000);

  return capsules.filter(c =>
    c.unlockAt &&
    new Date(c.unlockAt) <= now &&
    new Date(c.unlockAt) >= pastDate
  ).sort((a, b) => new Date(b.unlockAt) - new Date(a.unlockAt));
};

// Get capsule stats
export const getCapsuleStats = async () => {
  const capsules = await getAllCapsules();
  const now = new Date();

  return {
    total: capsules.length,
    voice: capsules.filter(c => c.type === 'voice').length,
    text: capsules.filter(c => c.type === 'text').length,
    photo: capsules.filter(c => c.type === 'photo').length,
    milestone: capsules.filter(c => c.type === 'milestone').length,
    futureMessage: capsules.filter(c => c.type === 'future_message').length,
    locked: capsules.filter(c => c.isLocked).length,
    versesWithCapsules: [...new Set(capsules.map(c => c.verseRef))].length,
  };
};

// Export all data (for backup)
export const exportCapsuleData = async () => {
  const capsules = await getAllCapsules();
  // Note: Media blobs are not exported to keep JSON manageable
  return {
    exportDate: new Date().toISOString(),
    capsules: capsules.map(({ mediaId, ...rest }) => rest),
  };
};

// Milestone types
export const MILESTONE_TYPES = {
  first_surah: { label: 'First Surah Read', icon: 'BookOpen', color: '#10B981' },
  memorization: { label: 'Memorization Complete', icon: 'Brain', color: '#8B5CF6' },
  khatam: { label: 'Quran Completion', icon: 'Award', color: '#F59E0B' },
  ramadan: { label: 'Ramadan Reflection', icon: 'Moon', color: '#3B82F6' },
  dua_answered: { label: 'Dua Answered', icon: 'Star', color: '#EC4899' },
  life_event: { label: 'Life Milestone', icon: 'Heart', color: '#EF4444' },
};

export default {
  initCapsuleDB,
  createCapsule,
  getAllCapsules,
  getCapsulesByVerse,
  getCapsule,
  getMedia,
  deleteCapsule,
  getUpcomingUnlocks,
  getRecentlyUnlocked,
  getCapsuleStats,
  exportCapsuleData,
  MILESTONE_TYPES,
};
