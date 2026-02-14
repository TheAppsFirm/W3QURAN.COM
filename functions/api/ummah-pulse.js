/**
 * Cloudflare Pages Function - Global Ummah Pulse API
 * Tracks real-time Quran reading activity and live visitors across the world
 * Uses Cloudflare KV for storage
 */

// Activity data structure
// Key: "activity:{timestamp}" -> { city, country, surah, lat, lng, timestamp }
// Key: "stats:global" -> { totalReaders, activeLocations }
// Key: "city:{cityId}" -> { readers: number, lastActive: timestamp }
// Key: "presence:{userId}" -> { lat, lng, city, status, lastSeen }

const CITIES_DATA = {
  makkah: { name: 'Makkah', country: 'Saudi Arabia', lat: 21.4225, lng: 39.8262 },
  madinah: { name: 'Madinah', country: 'Saudi Arabia', lat: 24.5247, lng: 39.5692 },
  cairo: { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357 },
  istanbul: { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784 },
  jakarta: { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456 },
  kualalumpur: { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869 },
  dubai: { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708 },
  karachi: { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011 },
  lahore: { name: 'Lahore', country: 'Pakistan', lat: 31.5204, lng: 74.3587 },
  dhaka: { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125 },
  london: { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278 },
  newyork: { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060 },
  losangeles: { name: 'Los Angeles', country: 'USA', lat: 34.0522, lng: -118.2437 },
  toronto: { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832 },
  paris: { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522 },
  berlin: { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050 },
  riyadh: { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753 },
  jeddah: { name: 'Jeddah', country: 'Saudi Arabia', lat: 21.5433, lng: 39.1728 },
  amman: { name: 'Amman', country: 'Jordan', lat: 31.9454, lng: 35.9284 },
  baghdad: { name: 'Baghdad', country: 'Iraq', lat: 33.3152, lng: 44.3661 },
  tehran: { name: 'Tehran', country: 'Iran', lat: 35.6892, lng: 51.3890 },
  casablanca: { name: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898 },
  algiers: { name: 'Algiers', country: 'Algeria', lat: 36.7538, lng: 3.0588 },
  tunis: { name: 'Tunis', country: 'Tunisia', lat: 36.8065, lng: 10.1815 },
  mumbai: { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777 },
  delhi: { name: 'Delhi', country: 'India', lat: 28.7041, lng: 77.1025 },
  singapore: { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198 },
  sydney: { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 },
  melbourne: { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631 },
};

const SURAH_NAMES = {
  1: 'Al-Fatiha', 2: 'Al-Baqarah', 36: 'Ya-Sin', 55: 'Ar-Rahman',
  67: 'Al-Mulk', 112: 'Al-Ikhlas', 113: 'Al-Falaq', 114: 'An-Nas',
  18: 'Al-Kahf', 56: 'Al-Waqiah', 78: 'An-Naba', 93: 'Ad-Duha',
};

/**
 * Get city from coordinates (approximate)
 */
function getCityFromCoords(lat, lng) {
  let closestCity = null;
  let minDistance = Infinity;

  for (const [id, city] of Object.entries(CITIES_DATA)) {
    const distance = Math.sqrt(
      Math.pow(city.lat - lat, 2) + Math.pow(city.lng - lng, 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestCity = { id, ...city };
    }
  }

  return closestCity;
}

/**
 * Track visitor presence (heartbeat) - shows live visitors on map
 */
async function trackPresence(env, data) {
  const { userId, lat, lng, status, surahId, page } = data;
  const timestamp = Date.now();

  if (!userId) return { success: false, error: 'No userId' };

  const city = getCityFromCoords(lat || 21.4225, lng || 39.8262);

  // Create presence record
  const presence = {
    odUserId: userId.slice(-8), // Anonymized
    lat: lat || city?.lat || 21.4225,
    lng: lng || city?.lng || 39.8262,
    cityId: city?.id || 'unknown',
    city: city?.name || 'Unknown',
    country: city?.country || 'Unknown',
    status: status || 'browsing', // 'browsing', 'reading', 'listening'
    surahId: surahId || null,
    surahName: surahId ? (SURAH_NAMES[surahId] || `Surah ${surahId}`) : null,
    page: page || 'home',
    lastSeen: timestamp,
  };

  // Store presence with 45 second TTL (heartbeat every 30 seconds)
  const presenceKey = `presence:${userId}`;
  await env.UMMAH_KV.put(presenceKey, JSON.stringify(presence), {
    expirationTtl: 45,
  });

  return { success: true, presence };
}

/**
 * Track page visit (called when user visits the site)
 */
async function trackVisitor(env, data) {
  const { userId, userAgent, referrer, lat, lng } = data;
  const timestamp = Date.now();
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  // Also track presence
  await trackPresence(env, { userId, lat, lng, status: 'browsing', page: 'home' });

  // Create visitor record
  const visitor = {
    odUserId: (userId || '').slice(-8) || 'anonymous',
    timestamp,
    userAgent: userAgent?.substring(0, 200) || 'unknown',
    referrer: referrer?.substring(0, 200) || 'direct',
    type: 'pageview',
  };

  // Store visitor log (persists for 30 days)
  const visitorKey = `visitor:${today}:${timestamp}:${(userId || '').slice(-8) || Math.random().toString(36).slice(2, 8)}`;
  await env.UMMAH_KV.put(visitorKey, JSON.stringify(visitor), {
    expirationTtl: 2592000, // 30 days
  });

  // Update daily visitor count
  const dailyKey = `visitors:${today}`;
  const dailyData = await env.UMMAH_KV.get(dailyKey, 'json') || { count: 0, unique: [] };
  dailyData.count += 1;
  if (userId && !dailyData.unique.includes(userId)) {
    dailyData.unique.push(userId);
    // Keep only last 1000 unique IDs to save space
    if (dailyData.unique.length > 1000) {
      dailyData.unique = dailyData.unique.slice(-1000);
    }
  }
  await env.UMMAH_KV.put(dailyKey, JSON.stringify(dailyData), {
    expirationTtl: 2592000, // 30 days
  });

  // Update all-time visitor stats
  const allTimeKey = 'stats:alltime';
  const allTime = await env.UMMAH_KV.get(allTimeKey, 'json') || { totalVisits: 0, uniqueVisitors: 0 };
  allTime.totalVisits += 1;
  if (userId && !dailyData.unique.includes(userId)) {
    allTime.uniqueVisitors += 1;
  }
  await env.UMMAH_KV.put(allTimeKey, JSON.stringify(allTime));

  return { success: true, visitor };
}

/**
 * Track reading activity
 */
async function trackActivity(env, data) {
  const { lat, lng, surahId, userId } = data;
  const timestamp = Date.now();
  const today = new Date().toISOString().split('T')[0];
  const city = getCityFromCoords(lat, lng);

  if (!city) return { success: false };

  // Also update presence to 'reading' status
  await trackPresence(env, { userId, lat, lng, status: 'reading', surahId, page: `surah-${surahId}` });

  // Create activity record
  const activity = {
    cityId: city.id,
    city: city.name,
    country: city.country,
    surahId,
    surahName: SURAH_NAMES[surahId] || `Surah ${surahId}`,
    lat: city.lat,
    lng: city.lng,
    timestamp,
    odUserId: (userId || '').slice(-8) || 'anonymous',
  };

  // Store in KV with TTL of 5 minutes (active readers)
  const activityKey = `activity:${timestamp}:${userId || Math.random().toString(36).slice(2)}`;
  await env.UMMAH_KV.put(activityKey, JSON.stringify(activity), {
    expirationTtl: 300, // 5 minutes
  });

  // Also store in reading log (persists for 30 days)
  const readingKey = `reading:${today}:${timestamp}:${(userId || '').slice(-8) || Math.random().toString(36).slice(2, 8)}`;
  await env.UMMAH_KV.put(readingKey, JSON.stringify(activity), {
    expirationTtl: 2592000, // 30 days
  });

  // Update city reader count
  const cityKey = `city:${city.id}`;
  const cityData = await env.UMMAH_KV.get(cityKey, 'json') || { readers: 0, activities: [] };
  cityData.readers = Math.min(cityData.readers + 1, 999);
  cityData.lastActive = timestamp;
  cityData.activities = [...(cityData.activities || []).slice(-10), activity];
  await env.UMMAH_KV.put(cityKey, JSON.stringify(cityData), {
    expirationTtl: 300,
  });

  // Update global stats
  const statsKey = 'stats:global';
  const stats = await env.UMMAH_KV.get(statsKey, 'json') || { totalReaders: 0, sessionsToday: 0 };
  stats.totalReaders = Math.min((stats.totalReaders || 0) + 1, 9999);
  stats.sessionsToday = (stats.sessionsToday || 0) + 1;
  stats.lastUpdate = timestamp;
  await env.UMMAH_KV.put(statsKey, JSON.stringify(stats), {
    expirationTtl: 86400, // 24 hours
  });

  // Update daily reading stats
  const dailyReadKey = `readings:${today}`;
  const dailyRead = await env.UMMAH_KV.get(dailyReadKey, 'json') || { count: 0, surahs: {} };
  dailyRead.count += 1;
  dailyRead.surahs[surahId] = (dailyRead.surahs[surahId] || 0) + 1;
  await env.UMMAH_KV.put(dailyReadKey, JSON.stringify(dailyRead), {
    expirationTtl: 2592000,
  });

  return { success: true, activity };
}

/**
 * Get all active readers, live visitors, and stats
 */
async function getActiveReaders(env) {
  const cities = [];
  const activities = [];
  const liveVisitors = [];
  const today = new Date().toISOString().split('T')[0];

  // Get all live presence data
  const presenceList = await env.UMMAH_KV.list({ prefix: 'presence:' });
  for (const key of presenceList.keys.slice(0, 100)) {
    const presence = await env.UMMAH_KV.get(key.name, 'json');
    if (presence) {
      liveVisitors.push(presence);
    }
  }

  // Group live visitors by city for display
  const visitorsByCity = {};
  for (const visitor of liveVisitors) {
    const cityId = visitor.cityId || 'unknown';
    if (!visitorsByCity[cityId]) {
      visitorsByCity[cityId] = {
        id: cityId,
        name: visitor.city,
        country: visitor.country,
        lat: visitor.lat,
        lng: visitor.lng,
        visitors: [],
        readers: 0,
        browsing: 0,
      };
    }
    visitorsByCity[cityId].visitors.push(visitor);
    if (visitor.status === 'reading') {
      visitorsByCity[cityId].readers += 1;
    } else {
      visitorsByCity[cityId].browsing += 1;
    }
  }

  // Convert to cities array
  for (const [cityId, cityData] of Object.entries(visitorsByCity)) {
    cities.push({
      id: cityId,
      name: cityData.name,
      country: cityData.country,
      lat: cityData.lat,
      lng: cityData.lng,
      readers: cityData.readers,
      browsing: cityData.browsing,
      total: cityData.visitors.length,
      lastActive: Math.max(...cityData.visitors.map(v => v.lastSeen)),
      activities: cityData.visitors.slice(0, 5).map(v => ({
        status: v.status,
        surahId: v.surahId,
        surahName: v.surahName,
        page: v.page,
      })),
    });
  }

  // Get all-time stats
  const allTime = await env.UMMAH_KV.get('stats:alltime', 'json') || { totalVisits: 0, uniqueVisitors: 0 };

  // Get today's visitor stats
  const dailyVisitors = await env.UMMAH_KV.get(`visitors:${today}`, 'json') || { count: 0, unique: [] };

  // Get today's reading stats
  const dailyReadings = await env.UMMAH_KV.get(`readings:${today}`, 'json') || { count: 0, surahs: {} };

  // Get recent activity feed
  const activityList = await env.UMMAH_KV.list({ prefix: 'activity:' });
  for (const key of activityList.keys.slice(0, 20)) {
    const activity = await env.UMMAH_KV.get(key.name, 'json');
    if (activity) activities.push(activity);
  }

  // Calculate live stats
  const totalLiveVisitors = liveVisitors.length;
  const totalReading = liveVisitors.filter(v => v.status === 'reading').length;
  const totalBrowsing = liveVisitors.filter(v => v.status === 'browsing').length;

  return {
    cities,
    liveVisitors: liveVisitors.map(v => ({
      odUserId: v.odUserId,
      city: v.city,
      country: v.country,
      lat: v.lat,
      lng: v.lng,
      status: v.status,
      surahName: v.surahName,
      page: v.page,
      lastSeen: v.lastSeen,
    })),
    stats: {
      // Live stats
      liveNow: totalLiveVisitors,
      liveReading: totalReading,
      liveBrowsing: totalBrowsing,
      activeLocations: cities.length,
      // Today stats
      todayVisitors: dailyVisitors.count || 0,
      todayUniqueVisitors: dailyVisitors.unique?.length || 0,
      todayReadings: dailyReadings.count || 0,
      // All-time stats
      allTimeVisits: allTime.totalVisits || 0,
      allTimeUniqueVisitors: allTime.uniqueVisitors || 0,
    },
    recentActivity: activities.sort((a, b) => b.timestamp - a.timestamp).slice(0, 10),
    popularSurahsToday: dailyReadings.surahs || {},
  };
}

/**
 * Main handler
 */
export async function onRequest(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Check if KV is available
  if (!env.UMMAH_KV) {
    // Return empty data if KV not configured
    return new Response(JSON.stringify({
      success: true,
      error: 'KV not configured',
      cities: [],
      liveVisitors: [],
      stats: {
        liveNow: 0,
        liveReading: 0,
        liveBrowsing: 0,
        activeLocations: 0,
        todayVisitors: 0,
        todayReadings: 0,
        allTimeVisits: 0,
      },
      recentActivity: [],
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    if (request.method === 'POST') {
      const data = await request.json();

      // Handle different tracking types
      if (data.type === 'visit') {
        // Track page visit
        const result = await trackVisitor(env, data);
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } else if (data.type === 'heartbeat') {
        // Track presence heartbeat
        const result = await trackPresence(env, data);
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } else {
        // Track reading activity (default)
        const result = await trackActivity(env, data);
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    if (request.method === 'GET') {
      // Get active readers and live visitors
      const data = await getActiveReaders(env);
      return new Response(JSON.stringify({ success: true, ...data }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Ummah Pulse Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
