/**
 * Prayer Times API
 * Uses Aladhan API for worldwide prayer times and Islamic calendar
 *
 * GET /api/prayer-times?lat=XXX&lng=XXX&method=2
 *
 * Calculation Methods:
 * 0 - Shia Ithna-Ansari
 * 1 - University of Islamic Sciences, Karachi
 * 2 - Islamic Society of North America (ISNA)
 * 3 - Muslim World League
 * 4 - Umm Al-Qura University, Makkah
 * 5 - Egyptian General Authority of Survey
 * 7 - Institute of Geophysics, University of Tehran
 * 8 - Gulf Region
 * 9 - Kuwait
 * 10 - Qatar
 * 11 - Majlis Ugama Islam Singapura, Singapore
 * 12 - Union Organization Islamic de France
 * 13 - Diyanet İşleri Başkanlığı, Turkey
 * 14 - Spiritual Administration of Muslims of Russia
 */

const ALADHAN_BASE = 'https://api.aladhan.com/v1';

// Cache for prayer times (valid for 1 hour)
const cache = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export async function onRequest(context) {
  const { request } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  const url = new URL(request.url);
  const lat = url.searchParams.get('lat');
  const lng = url.searchParams.get('lng');
  const method = url.searchParams.get('method') || '2'; // Default: ISNA
  const city = url.searchParams.get('city');
  const country = url.searchParams.get('country');

  try {
    let timingsData;
    let hijriData;

    // Build cache key
    const cacheKey = `${lat}-${lng}-${method}`;
    const cached = cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      timingsData = cached.data;
    } else {
      // Fetch prayer times
      let timingsUrl;
      if (lat && lng) {
        timingsUrl = `${ALADHAN_BASE}/timings?latitude=${lat}&longitude=${lng}&method=${method}`;
      } else if (city && country) {
        timingsUrl = `${ALADHAN_BASE}/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`;
      } else {
        // Default to Makkah
        timingsUrl = `${ALADHAN_BASE}/timings?latitude=21.4225&longitude=39.8262&method=4`;
      }

      const timingsResponse = await fetch(timingsUrl);
      if (!timingsResponse.ok) {
        throw new Error('Failed to fetch prayer times');
      }

      timingsData = await timingsResponse.json();

      // Cache the result
      cache.set(cacheKey, {
        data: timingsData,
        timestamp: Date.now(),
      });
    }

    // Extract relevant data
    const timings = timingsData.data?.timings || {};
    const date = timingsData.data?.date || {};
    const meta = timingsData.data?.meta || {};

    // Calculate next prayer
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let nextPrayer = null;
    let nextPrayerTime = null;
    let countdown = null;

    for (const prayer of prayerOrder) {
      const [hours, minutes] = timings[prayer]?.split(':').map(Number) || [0, 0];
      const prayerMinutes = hours * 60 + minutes;

      if (prayerMinutes > currentTime) {
        nextPrayer = prayer;
        nextPrayerTime = timings[prayer];
        countdown = prayerMinutes - currentTime;
        break;
      }
    }

    // If no next prayer today, it's Fajr tomorrow
    if (!nextPrayer) {
      nextPrayer = 'Fajr';
      nextPrayerTime = timings.Fajr;
      const [hours, minutes] = timings.Fajr?.split(':').map(Number) || [0, 0];
      countdown = (24 * 60 - currentTime) + (hours * 60 + minutes);
    }

    // Format countdown
    const countdownHours = Math.floor(countdown / 60);
    const countdownMinutes = countdown % 60;
    const countdownFormatted = countdownHours > 0
      ? `${countdownHours}h ${countdownMinutes}m`
      : `${countdownMinutes}m`;

    // Determine if it's Ramadan
    const hijriMonth = date.hijri?.month?.number || 0;
    const isRamadan = hijriMonth === 9;

    // Calculate Suhoor and Iftar times (for Ramadan)
    const suhoorTime = timings.Fajr; // Suhoor ends at Fajr
    const iftarTime = timings.Maghrib; // Iftar at Maghrib

    return new Response(JSON.stringify({
      success: true,
      timings: {
        Fajr: timings.Fajr,
        Sunrise: timings.Sunrise,
        Dhuhr: timings.Dhuhr,
        Asr: timings.Asr,
        Maghrib: timings.Maghrib,
        Isha: timings.Isha,
      },
      nextPrayer: {
        name: nextPrayer,
        time: nextPrayerTime,
        countdown: countdownFormatted,
        countdownMinutes: countdown,
      },
      date: {
        gregorian: date.gregorian?.date || new Date().toLocaleDateString(),
        hijri: {
          day: date.hijri?.day,
          month: date.hijri?.month?.en,
          monthAr: date.hijri?.month?.ar,
          monthNumber: date.hijri?.month?.number,
          year: date.hijri?.year,
          formatted: `${date.hijri?.day} ${date.hijri?.month?.en} ${date.hijri?.year}`,
          formattedAr: `${date.hijri?.day} ${date.hijri?.month?.ar} ${date.hijri?.year}`,
        },
        weekday: {
          en: date.hijri?.weekday?.en,
          ar: date.hijri?.weekday?.ar,
        },
      },
      ramadan: {
        isRamadan,
        suhoorTime: isRamadan ? suhoorTime : null,
        iftarTime: isRamadan ? iftarTime : null,
      },
      location: {
        latitude: meta.latitude,
        longitude: meta.longitude,
        timezone: meta.timezone,
        method: meta.method?.name,
      },
    }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Prayer Times] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch prayer times',
      message: error.message,
    }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
