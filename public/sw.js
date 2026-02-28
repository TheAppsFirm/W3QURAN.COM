/**
 * w3Quran Service Worker
 * Provides offline support and caching for the Quran application
 */

const CACHE_NAME = 'w3quran-cache-v4';
const STATIC_CACHE_NAME = 'w3quran-static-v4';
const API_CACHE_NAME = 'w3quran-api-v4';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
];

// API endpoints to cache
const API_PATTERNS = [
  'api.quran.com',
  'api.alquran.cloud',
  'audio.qurancdn.com',
];

// Maximum cache sizes
const MAX_API_CACHE_ITEMS = 100;
const MAX_AUDIO_CACHE_SIZE = 50 * 1024 * 1024; // 50MB

/**
 * Install event - cache static assets
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS.map(url => {
          return new Request(url, { cache: 'reload' });
        })).catch(() => {
          // Some assets may fail, continue anyway
        });
      })
      .then(() => self.skipWaiting())
  );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              return name.startsWith('w3quran-') &&
                     name !== CACHE_NAME &&
                     name !== STATIC_CACHE_NAME &&
                     name !== API_CACHE_NAME;
            })
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

/**
 * Check if request is for an API endpoint
 */
function isApiRequest(url) {
  return API_PATTERNS.some(pattern => url.includes(pattern));
}

/**
 * Check if request is for audio
 */
function isAudioRequest(url) {
  return url.includes('audio') || url.endsWith('.mp3') || url.endsWith('.ogg') || url.includes('cdn.islamic.network');
}

/**
 * Network-first strategy for API requests
 */
async function networkFirst(request) {
  const cache = await caches.open(API_CACHE_NAME);

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // Clone and cache the response
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch {
    // Network failed, try cache
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline response for API
    return new Response(
      JSON.stringify({ error: 'Offline', message: 'No cached data available' }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

/**
 * Network-first strategy for HTML (so new builds are picked up immediately)
 */
async function networkFirstHTML(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;

    // No cache either — offline fallback
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>w3Quran - Offline</title>
        <style>
          body {
            font-family: system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-align: center;
            padding: 20px;
          }
          .container { max-width: 400px; }
          h1 { font-size: 2rem; margin-bottom: 1rem; }
          p { opacity: 0.8; }
          button {
            margin-top: 20px;
            padding: 12px 24px;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>You're Offline</h1>
          <p>w3Quran needs an internet connection. Please check your connection and try again.</p>
          <button onclick="location.reload()">Retry</button>
        </div>
      </body>
      </html>`,
      { status: 200, headers: { 'Content-Type': 'text/html' } }
    );
  }
}

/**
 * Cache-first strategy for static assets (JS, CSS, images)
 */
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch {
    // Return a basic offline page for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return new Response(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>w3Quran - Offline</title>
          <style>
            body {
              font-family: system-ui, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #667eea, #764ba2);
              color: white;
              text-align: center;
              padding: 20px;
            }
            .container { max-width: 400px; }
            h1 { font-size: 2rem; margin-bottom: 1rem; }
            p { opacity: 0.8; }
            button {
              margin-top: 20px;
              padding: 12px 24px;
              background: white;
              color: #667eea;
              border: none;
              border-radius: 8px;
              font-weight: bold;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>You're Offline</h1>
            <p>w3Quran needs an internet connection. Please check your connection and try again.</p>
            <button onclick="location.reload()">Retry</button>
          </div>
        </body>
        </html>`,
        {
          status: 200,
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }

    throw new Error('Network error');
  }
}

/**
 * Stale-while-revalidate for audio
 */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    // Revalidate in background
    fetch(request).then(r => { if (r.ok) cache.put(request, r); }).catch(() => {});
    return cachedResponse;
  }

  // Also check offline audio cache (pre-downloaded)
  const offlineCache = await caches.open('w3quran-audio-offline');
  const offlineCached = await offlineCache.match(request);
  if (offlineCached) return offlineCached;

  // No cache hit, try network
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('', { status: 503, statusText: 'Offline' });
  }
}

/**
 * Fetch event - route requests to appropriate strategy
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = request.url;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.startsWith('http')) {
    return;
  }

  // Skip cross-origin requests (Google Analytics, ads, external APIs)
  if (!url.startsWith(self.location.origin)) {
    return;
  }

  // Skip internal API requests (Cloudflare Functions) - always fetch fresh
  if (url.includes('/api/')) {
    return;
  }

  // Route to appropriate caching strategy
  if (isApiRequest(url)) {
    event.respondWith(networkFirst(request));
  } else if (isAudioRequest(url)) {
    event.respondWith(staleWhileRevalidate(request));
  } else if (request.headers.get('accept')?.includes('text/html') || url.endsWith('/') || url.endsWith('/index.html')) {
    // HTML pages use network-first so new builds are picked up immediately
    event.respondWith(networkFirstHTML(request));
  } else {
    // JS/CSS/images use cache-first (they have hashed filenames from Vite)
    event.respondWith(cacheFirst(request));
  }
});

/**
 * Message handler for cache management
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((names) => {
      names.forEach((name) => {
        if (name.startsWith('w3quran-')) {
          caches.delete(name);
        }
      });
    });
  }

  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    getCacheSize().then((size) => {
      event.ports[0].postMessage({ size });
    });
  }
});

/**
 * Get total cache size
 */
async function getCacheSize() {
  let totalSize = 0;

  const cacheNames = await caches.keys();

  for (const name of cacheNames) {
    if (!name.startsWith('w3quran-')) continue;

    const cache = await caches.open(name);
    const keys = await cache.keys();

    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.clone().blob();
        totalSize += blob.size;
      }
    }
  }

  return totalSize;
}

/**
 * Periodic cache cleanup
 */
async function cleanupCache() {
  const cache = await caches.open(API_CACHE_NAME);
  const keys = await cache.keys();

  // Remove old API cache entries if we have too many
  if (keys.length > MAX_API_CACHE_ITEMS) {
    const toDelete = keys.slice(0, keys.length - MAX_API_CACHE_ITEMS);
    await Promise.all(toDelete.map(key => cache.delete(key)));
  }
}

// Run cleanup periodically
setInterval(cleanupCache, 60 * 60 * 1000); // Every hour
