/**
 * Qibla Direction API
 * Returns the direction to Kaaba from any location
 *
 * GET /api/qibla?lat=XXX&lng=XXX
 */

// Kaaba coordinates
const KAABA_LAT = 21.4225;
const KAABA_LNG = 39.8262;

// Calculate Qibla direction using the spherical law of cosines
function calculateQiblaDirection(lat, lng) {
  const lat1 = (lat * Math.PI) / 180;
  const lng1 = (lng * Math.PI) / 180;
  const lat2 = (KAABA_LAT * Math.PI) / 180;
  const lng2 = (KAABA_LNG * Math.PI) / 180;

  const dLng = lng2 - lng1;

  const x = Math.sin(dLng);
  const y = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(dLng);

  let qibla = Math.atan2(x, y);
  qibla = (qibla * 180) / Math.PI;

  // Normalize to 0-360
  if (qibla < 0) {
    qibla += 360;
  }

  return qibla;
}

// Calculate distance to Kaaba in km
function calculateDistance(lat, lng) {
  const R = 6371; // Earth's radius in km
  const lat1 = (lat * Math.PI) / 180;
  const lng1 = (lng * Math.PI) / 180;
  const lat2 = (KAABA_LAT * Math.PI) / 180;
  const lng2 = (KAABA_LNG * Math.PI) / 180;

  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Get compass direction name
function getCompassDirection(degrees) {
  const directions = [
    { name: 'N', nameAr: 'شمال', min: 337.5, max: 360 },
    { name: 'N', nameAr: 'شمال', min: 0, max: 22.5 },
    { name: 'NE', nameAr: 'شمال شرق', min: 22.5, max: 67.5 },
    { name: 'E', nameAr: 'شرق', min: 67.5, max: 112.5 },
    { name: 'SE', nameAr: 'جنوب شرق', min: 112.5, max: 157.5 },
    { name: 'S', nameAr: 'جنوب', min: 157.5, max: 202.5 },
    { name: 'SW', nameAr: 'جنوب غرب', min: 202.5, max: 247.5 },
    { name: 'W', nameAr: 'غرب', min: 247.5, max: 292.5 },
    { name: 'NW', nameAr: 'شمال غرب', min: 292.5, max: 337.5 },
  ];

  for (const dir of directions) {
    if (degrees >= dir.min && degrees < dir.max) {
      return dir;
    }
  }
  return { name: 'N', nameAr: 'شمال' };
}

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
  const lat = parseFloat(url.searchParams.get('lat'));
  const lng = parseFloat(url.searchParams.get('lng'));

  if (isNaN(lat) || isNaN(lng)) {
    return new Response(JSON.stringify({
      error: 'Invalid coordinates',
      message: 'Please provide valid lat and lng parameters',
    }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  try {
    const direction = calculateQiblaDirection(lat, lng);
    const distance = calculateDistance(lat, lng);
    const compass = getCompassDirection(direction);

    return new Response(JSON.stringify({
      success: true,
      qibla: {
        direction: Math.round(direction * 100) / 100,
        directionRounded: Math.round(direction),
        compass: compass.name,
        compassAr: compass.nameAr,
      },
      distance: {
        km: Math.round(distance),
        miles: Math.round(distance * 0.621371),
      },
      kaaba: {
        latitude: KAABA_LAT,
        longitude: KAABA_LNG,
      },
      userLocation: {
        latitude: lat,
        longitude: lng,
      },
    }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Qibla] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to calculate Qibla direction',
      message: error.message,
    }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
