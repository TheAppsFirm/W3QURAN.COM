/**
 * Prayer Time Utilities
 * Calculate prayer times based on location using standard Islamic calculations
 */

// Calculation methods
const METHODS = {
  MWL: { name: 'Muslim World League', fajr: 18, isha: 17 },
  ISNA: { name: 'Islamic Society of North America', fajr: 15, isha: 15 },
  EGYPT: { name: 'Egyptian General Authority', fajr: 19.5, isha: 17.5 },
  MAKKAH: { name: 'Umm Al-Qura University', fajr: 18.5, isha: '90 min' },
  KARACHI: { name: 'University of Islamic Sciences', fajr: 18, isha: 18 },
};

// Madhab settings for Asr calculation
const MADHAB = {
  SHAFI: 1, // Standard (shadow = object length)
  HANAFI: 2, // Hanafi (shadow = 2x object length)
};

/**
 * Convert degrees to radians
 */
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Convert radians to degrees
 */
function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

/**
 * Calculate Julian Date
 */
function getJulianDate(year, month, day) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
}

/**
 * Calculate sun position
 */
function getSunPosition(jd) {
  const D = jd - 2451545.0;
  const g = (357.529 + 0.98560028 * D) % 360;
  const q = (280.459 + 0.98564736 * D) % 360;
  const L = (q + 1.915 * Math.sin(toRadians(g)) + 0.020 * Math.sin(toRadians(2 * g))) % 360;
  const e = 23.439 - 0.00000036 * D;
  const RA = toDegrees(Math.atan2(Math.cos(toRadians(e)) * Math.sin(toRadians(L)), Math.cos(toRadians(L))));
  const d = toDegrees(Math.asin(Math.sin(toRadians(e)) * Math.sin(toRadians(L))));
  const EqT = (q / 15) - (RA / 15);

  return { declination: d, equation: EqT };
}

/**
 * Calculate prayer time for a given angle
 */
function getTimeForAngle(angle, latitude, declination, isAfternoon, equation, timezone, longitude) {
  const cosHourAngle = (
    -Math.sin(toRadians(angle)) -
    Math.sin(toRadians(latitude)) * Math.sin(toRadians(declination))
  ) / (Math.cos(toRadians(latitude)) * Math.cos(toRadians(declination)));

  if (Math.abs(cosHourAngle) > 1) {
    return null; // Sun doesn't reach this angle
  }

  const hourAngle = toDegrees(Math.acos(cosHourAngle)) / 15;
  const midday = 12 + timezone - longitude / 15 - equation;

  if (isAfternoon) {
    return midday + hourAngle;
  }
  return midday - hourAngle;
}

/**
 * Calculate Asr time
 */
function getAsrTime(madhab, latitude, declination, equation, timezone, longitude) {
  const shadowRatio = madhab === MADHAB.HANAFI ? 2 : 1;
  const angle = toDegrees(Math.atan(1 / (shadowRatio + Math.tan(Math.abs(toRadians(latitude - declination))))));
  return getTimeForAngle(-angle, latitude, declination, true, equation, timezone, longitude);
}

/**
 * Format time from decimal hours to HH:MM AM/PM
 */
function formatTime(time) {
  if (time === null) return '--:--';

  // Normalize to 24-hour range
  time = (time + 24) % 24;

  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);

  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

/**
 * Calculate all prayer times for a given date and location
 */
export function calculatePrayerTimes(date, latitude, longitude, timezone, method = 'MWL', madhab = 'SHAFI') {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const jd = getJulianDate(year, month, day);
  const sun = getSunPosition(jd);

  const calc = METHODS[method] || METHODS.MWL;
  const madhabs = madhab === 'HANAFI' ? MADHAB.HANAFI : MADHAB.SHAFI;

  // Calculate times
  const fajr = getTimeForAngle(calc.fajr, latitude, sun.declination, false, sun.equation, timezone, longitude);
  const sunrise = getTimeForAngle(0.833, latitude, sun.declination, false, sun.equation, timezone, longitude);
  const dhuhr = 12 + timezone - longitude / 15 - sun.equation + (1 / 60); // Add 1 minute after solar noon
  const asr = getAsrTime(madhabs, latitude, sun.declination, sun.equation, timezone, longitude);
  const maghrib = getTimeForAngle(0.833, latitude, sun.declination, true, sun.equation, timezone, longitude);

  let isha;
  if (typeof calc.isha === 'number') {
    isha = getTimeForAngle(calc.isha, latitude, sun.declination, true, sun.equation, timezone, longitude);
  } else {
    // For methods like Makkah that use fixed time after Maghrib
    isha = maghrib + 1.5; // 90 minutes
  }

  return {
    fajr: formatTime(fajr),
    sunrise: formatTime(sunrise),
    dhuhr: formatTime(dhuhr),
    asr: formatTime(asr),
    maghrib: formatTime(maghrib),
    isha: formatTime(isha),
  };
}

/**
 * Calculate Qibla direction from a given location
 * Returns angle in degrees from North (clockwise)
 */
export function calculateQiblaDirection(latitude, longitude) {
  // Kaaba coordinates
  const kaabaLat = 21.4225;
  const kaabaLng = 39.8262;

  const phiK = toRadians(kaabaLat);
  const lambdaK = toRadians(kaabaLng);
  const phi = toRadians(latitude);
  const lambda = toRadians(longitude);

  const qibla = toDegrees(
    Math.atan2(
      Math.sin(lambdaK - lambda),
      Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda)
    )
  );

  // Normalize to 0-360
  return (qibla + 360) % 360;
}

/**
 * Get current prayer based on time
 */
export function getCurrentPrayer(times) {
  const now = new Date();
  const currentTime = now.getHours() + now.getMinutes() / 60;

  const parseTime = (timeStr) => {
    if (!timeStr || timeStr === '--:--') return -1;
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let h = hours;
    if (period === 'PM' && hours !== 12) h += 12;
    if (period === 'AM' && hours === 12) h = 0;
    return h + minutes / 60;
  };

  const prayers = [
    { name: 'Fajr', time: parseTime(times.fajr) },
    { name: 'Sunrise', time: parseTime(times.sunrise) },
    { name: 'Dhuhr', time: parseTime(times.dhuhr) },
    { name: 'Asr', time: parseTime(times.asr) },
    { name: 'Maghrib', time: parseTime(times.maghrib) },
    { name: 'Isha', time: parseTime(times.isha) },
  ];

  // Find current prayer (the one that has passed most recently)
  let current = null;
  for (let i = prayers.length - 1; i >= 0; i--) {
    if (currentTime >= prayers[i].time) {
      current = prayers[i].name;
      break;
    }
  }

  // If before Fajr, current is Isha from previous day
  if (!current) {
    current = 'Isha';
  }

  // Find next prayer
  let next = null;
  for (let i = 0; i < prayers.length; i++) {
    if (currentTime < prayers[i].time) {
      next = prayers[i].name;
      break;
    }
  }

  // If after Isha, next is Fajr
  if (!next) {
    next = 'Fajr';
  }

  return { current, next };
}

/**
 * Get timezone offset in hours
 */
export function getTimezoneOffset() {
  return -new Date().getTimezoneOffset() / 60;
}

export default {
  calculatePrayerTimes,
  calculateQiblaDirection,
  getCurrentPrayer,
  getTimezoneOffset,
};
