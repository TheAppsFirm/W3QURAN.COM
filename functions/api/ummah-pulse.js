/**
 * Cloudflare Pages Function - Global Ummah Pulse API
 * Tracks real-time Quran reading activity and live visitors across the world
 * Uses Cloudflare D1 for storage (migrated from KV for better free tier limits)
 */

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
  if (!lat || !lng) return CITIES_DATA.makkah;

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

  return closestCity || { id: 'makkah', ...CITIES_DATA.makkah };
}

/**
 * Track visitor presence (heartbeat) - shows live visitors on map
 * Uses D1 instead of KV
 */
async function trackPresence(env, data) {
  const { userId, lat, lng, status, surahId, page } = data;

  if (!userId) return { success: false, error: 'No userId provided' };

  const city = getCityFromCoords(lat, lng);

  try {
    // Upsert presence record in D1
    await env.DB.prepare(`
      INSERT INTO ummah_presence (user_id, lat, lng, status, surah_id, page, last_seen)
      VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
      ON CONFLICT(user_id) DO UPDATE SET
        lat = excluded.lat,
        lng = excluded.lng,
        status = excluded.status,
        surah_id = excluded.surah_id,
        page = excluded.page,
        last_seen = datetime('now')
    `).bind(
      userId,
      lat || city.lat,
      lng || city.lng,
      status || 'browsing',
      surahId || null,
      page || 'home'
    ).run();

    // Clean up old presence records (older than 2 minutes)
    await env.DB.prepare(`
      DELETE FROM ummah_presence
      WHERE last_seen < datetime('now', '-2 minutes')
    `).run();

    return { success: true };
  } catch (error) {
    console.error('[trackPresence] D1 Error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Track page visit
 */
async function trackVisitor(env, data) {
  const { userId, lat, lng } = data;
  const today = new Date().toISOString().split('T')[0];

  try {
    // Track presence
    await trackPresence(env, { userId, lat, lng, status: 'browsing', page: 'home' });

    // Update daily stats
    await env.DB.prepare(`
      INSERT INTO ummah_daily_stats (date, total_visits, unique_visitors, updated_at)
      VALUES (?, 1, 1, datetime('now'))
      ON CONFLICT(date) DO UPDATE SET
        total_visits = total_visits + 1,
        updated_at = datetime('now')
    `).bind(today).run();

    // Update all-time stats
    await env.DB.prepare(`
      INSERT INTO ummah_stats (id, total_visits, unique_visitors, updated_at)
      VALUES ('global', 1, 1, datetime('now'))
      ON CONFLICT(id) DO UPDATE SET
        total_visits = total_visits + 1,
        updated_at = datetime('now')
    `).run();

    return { success: true };
  } catch (error) {
    console.error('[trackVisitor] D1 Error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Track reading activity
 */
async function trackActivity(env, data) {
  const { lat, lng, surahId, userId } = data;
  const today = new Date().toISOString().split('T')[0];
  const city = getCityFromCoords(lat, lng);

  try {
    // Update presence to reading status
    await trackPresence(env, { userId, lat, lng, status: 'reading', surahId, page: `surah-${surahId}` });

    // Store activity record
    const activityId = `act_${Date.now()}_${userId?.slice(-8) || 'anon'}`;
    await env.DB.prepare(`
      INSERT INTO ummah_activities (id, user_id, activity_type, surah_id, lat, lng, created_at)
      VALUES (?, ?, 'reading', ?, ?, ?, datetime('now'))
    `).bind(activityId, userId, surahId, lat || city.lat, lng || city.lng).run();

    // Update daily reading count
    await env.DB.prepare(`
      INSERT INTO ummah_daily_stats (date, total_readings, updated_at)
      VALUES (?, 1, datetime('now'))
      ON CONFLICT(date) DO UPDATE SET
        total_readings = total_readings + 1,
        updated_at = datetime('now')
    `).bind(today).run();

    // Clean up old activities (older than 1 hour)
    await env.DB.prepare(`
      DELETE FROM ummah_activities
      WHERE created_at < datetime('now', '-1 hour')
    `).run();

    return { success: true };
  } catch (error) {
    console.error('[trackActivity] D1 Error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get all active readers and stats
 */
async function getActiveReaders(env) {
  const today = new Date().toISOString().split('T')[0];
  const cities = [];
  const liveVisitors = [];

  try {
    // Get live presence (last 2 minutes)
    const presenceResult = await env.DB.prepare(`
      SELECT * FROM ummah_presence
      WHERE last_seen > datetime('now', '-2 minutes')
      ORDER BY last_seen DESC
      LIMIT 100
    `).all();

    for (const row of presenceResult.results || []) {
      const city = getCityFromCoords(row.lat, row.lng);
      liveVisitors.push({
        odUserId: row.user_id?.slice(-8) || 'anon',
        city: city.name,
        country: city.country,
        cityId: city.id,
        lat: row.lat,
        lng: row.lng,
        status: row.status,
        surahId: row.surah_id,
        surahName: row.surah_id ? (SURAH_NAMES[row.surah_id] || `Surah ${row.surah_id}`) : null,
        page: row.page,
        lastSeen: new Date(row.last_seen).getTime(),
      });
    }

    // Group by city
    const visitorsByCity = {};
    for (const visitor of liveVisitors) {
      const cityId = visitor.cityId;
      if (!visitorsByCity[cityId]) {
        visitorsByCity[cityId] = {
          id: cityId,
          name: visitor.city,
          country: visitor.country,
          lat: visitor.lat,
          lng: visitor.lng,
          readers: 0,
          browsing: 0,
          visitors: [],
        };
      }
      visitorsByCity[cityId].visitors.push(visitor);
      if (visitor.status === 'reading') {
        visitorsByCity[cityId].readers += 1;
      } else {
        visitorsByCity[cityId].browsing += 1;
      }
    }

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
      });
    }

    // Get daily stats
    const dailyStats = await env.DB.prepare(`
      SELECT * FROM ummah_daily_stats WHERE date = ?
    `).bind(today).first() || { total_visits: 0, unique_visitors: 0, total_readings: 0 };

    // Get all-time stats
    const allTimeStats = await env.DB.prepare(`
      SELECT * FROM ummah_stats WHERE id = 'global'
    `).first() || { total_visits: 0, unique_visitors: 0, total_readings: 0 };

    // Get recent activities
    const activitiesResult = await env.DB.prepare(`
      SELECT * FROM ummah_activities
      ORDER BY created_at DESC
      LIMIT 10
    `).all();

    const recentActivity = (activitiesResult.results || []).map(row => {
      const city = getCityFromCoords(row.lat, row.lng);
      return {
        cityId: city.id,
        city: city.name,
        country: city.country,
        surahId: row.surah_id,
        surahName: SURAH_NAMES[row.surah_id] || `Surah ${row.surah_id}`,
        timestamp: new Date(row.created_at).getTime(),
      };
    });

    return {
      cities,
      liveVisitors,
      stats: {
        liveNow: liveVisitors.length,
        liveReading: liveVisitors.filter(v => v.status === 'reading').length,
        liveBrowsing: liveVisitors.filter(v => v.status === 'browsing').length,
        activeLocations: cities.length,
        todayVisitors: dailyStats.total_visits || 0,
        todayReadings: dailyStats.total_readings || 0,
        allTimeVisits: allTimeStats.total_visits || 0,
      },
      recentActivity,
    };
  } catch (error) {
    console.error('[getActiveReaders] D1 Error:', error);
    return {
      cities: [],
      liveVisitors: [],
      stats: { liveNow: 0, liveReading: 0, liveBrowsing: 0, activeLocations: 0, todayVisitors: 0, todayReadings: 0, allTimeVisits: 0 },
      recentActivity: [],
    };
  }
}

/**
 * Main handler
 */
export async function onRequest(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Check if D1 is available
  if (!env.DB) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Database not configured',
      cities: [],
      liveVisitors: [],
      stats: { liveNow: 0 },
      recentActivity: [],
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    if (request.method === 'POST') {
      const data = await request.json();

      if (data.type === 'visit') {
        const result = await trackVisitor(env, data);
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } else if (data.type === 'heartbeat') {
        const result = await trackPresence(env, data);
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } else {
        const result = await trackActivity(env, data);
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    if (request.method === 'GET') {
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
