/**
 * PrayerTimesView Component
 * Enhanced Prayer Times with Worldwide API support, Hijri Calendar, Ramadan Mode, Qibla Direction
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Icons } from '../common/Icons';
import { useLocalStorage } from '../../hooks';

// Calculation method options
const CALCULATION_METHODS = [
  { id: '2', name: 'ISNA (North America)', region: 'North America' },
  { id: '1', name: 'University of Karachi', region: 'Pakistan' },
  { id: '3', name: 'Muslim World League', region: 'Global' },
  { id: '4', name: 'Umm Al-Qura (Makkah)', region: 'Saudi Arabia' },
  { id: '5', name: 'Egyptian Authority', region: 'Egypt' },
  { id: '8', name: 'Gulf Region', region: 'UAE, Qatar, Kuwait' },
  { id: '13', name: 'Diyanet (Turkey)', region: 'Turkey' },
  { id: '0', name: 'Shia Ithna-Ansari', region: 'Shia' },
];

// Helper to convert 24h to 12h format
const formatTime = (time24, use12Hour) => {
  if (!time24 || !use12Hour) return time24;
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
};

function PrayerTimesView({ darkMode }) {
  // Location state
  const [location, setLocation] = useLocalStorage('prayer_location', null);
  const [locationName, setLocationName] = useLocalStorage('prayer_location_name', 'Unknown');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // Settings
  const [calculationMethod, setCalculationMethod] = useLocalStorage('prayer_method', '2');
  const [use12HourFormat, setUse12HourFormat] = useLocalStorage('prayer_time_format', true); // default to 12h
  const [showSettings, setShowSettings] = useState(false);

  // API data
  const [prayerData, setPrayerData] = useState(null);
  const [qiblaData, setQiblaData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Compass state
  const [compassHeading, setCompassHeading] = useState(0);
  const [hasCompass, setHasCompass] = useState(false);

  // Get user's location
  const getLocation = useCallback(() => {
    setIsLoadingLocation(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Try to get location name using reverse geocoding
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          const city = data.address?.city || data.address?.town || data.address?.village || 'Unknown';
          const country = data.address?.country || '';
          setLocationName(`${city}${country ? `, ${country}` : ''}`);
        } catch (err) {
          setLocationName(`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`);
        }

        setIsLoadingLocation(false);
      },
      (error) => {
        setLocationError(error.message);
        setIsLoadingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  }, [setLocation, setLocationName]);

  // Fetch prayer times from Aladhan API directly
  const fetchPrayerTimes = useCallback(async () => {
    if (!location) return;

    setIsLoading(true);
    try {
      const today = new Date();
      const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

      const response = await fetch(
        `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${location.latitude}&longitude=${location.longitude}&method=${calculationMethod}`
      );

      if (response.ok) {
        const data = await response.json();
        if (data.code === 200 && data.data) {
          const timings = data.data.timings;
          const hijri = data.data.date.hijri;
          const gregorian = data.data.date.gregorian;

          // Check if Ramadan
          const isRamadan = hijri.month.number === 9;

          // Calculate next prayer
          const now = new Date();
          const currentMinutes = now.getHours() * 60 + now.getMinutes();
          const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
          let nextPrayer = null;

          for (const prayer of prayerOrder) {
            const [hours, mins] = timings[prayer].split(':').map(Number);
            const prayerMinutes = hours * 60 + mins;
            if (prayerMinutes > currentMinutes) {
              const diffMins = prayerMinutes - currentMinutes;
              const hours = Math.floor(diffMins / 60);
              const mins = diffMins % 60;
              nextPrayer = {
                name: prayer,
                time: timings[prayer],
                countdown: hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
              };
              break;
            }
          }

          // If no next prayer today, it's Fajr tomorrow
          if (!nextPrayer) {
            nextPrayer = {
              name: 'Fajr',
              time: timings.Fajr,
              countdown: 'Tomorrow'
            };
          }

          setPrayerData({
            success: true,
            timings,
            date: {
              hijri: {
                formatted: `${hijri.day} ${hijri.month.en} ${hijri.year} AH`,
                formattedAr: `${hijri.day} ${hijri.month.ar} ${hijri.year} هـ`
              },
              gregorian: gregorian.date
            },
            ramadan: isRamadan ? {
              isRamadan: true,
              suhoorTime: timings.Fajr,
              iftarTime: timings.Maghrib
            } : { isRamadan: false },
            nextPrayer,
            location: {
              method: CALCULATION_METHODS.find(m => m.id === calculationMethod)?.name || 'Unknown',
              timezone: data.data.meta.timezone
            }
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch prayer times:', error);
    }
    setIsLoading(false);
  }, [location, calculationMethod]);

  // Fetch Qibla direction from Aladhan API directly
  const fetchQiblaDirection = useCallback(async () => {
    if (!location) return;

    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/qibla/${location.latitude}/${location.longitude}`
      );

      if (response.ok) {
        const data = await response.json();
        if (data.code === 200 && data.data) {
          const direction = data.data.direction;
          const directionRounded = Math.round(direction);

          // Calculate compass direction
          const compassDirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
          const compassAr = ['شمال', 'شمال شمال شرق', 'شمال شرق', 'شرق شمال شرق', 'شرق', 'شرق جنوب شرق', 'جنوب شرق', 'جنوب جنوب شرق', 'جنوب', 'جنوب جنوب غرب', 'جنوب غرب', 'غرب جنوب غرب', 'غرب', 'غرب شمال غرب', 'شمال غرب', 'شمال شمال غرب'];
          const index = Math.round(direction / 22.5) % 16;

          // Calculate distance to Kaaba (approximate)
          const kaabaLat = 21.4225;
          const kaabaLng = 39.8262;
          const R = 6371; // Earth's radius in km
          const dLat = (kaabaLat - location.latitude) * Math.PI / 180;
          const dLng = (kaabaLng - location.longitude) * Math.PI / 180;
          const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(location.latitude * Math.PI / 180) * Math.cos(kaabaLat * Math.PI / 180) *
                    Math.sin(dLng/2) * Math.sin(dLng/2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          const distance = R * c;

          setQiblaData({
            success: true,
            qibla: {
              direction,
              directionRounded,
              compass: compassDirections[index],
              compassAr: compassAr[index]
            },
            distance: {
              km: Math.round(distance)
            }
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch Qibla direction:', error);
    }
  }, [location]);

  // Fetch data when location changes
  useEffect(() => {
    if (location) {
      fetchPrayerTimes();
      fetchQiblaDirection();
    }
  }, [location, calculationMethod, fetchPrayerTimes, fetchQiblaDirection]);

  // Update prayer times every minute
  useEffect(() => {
    const interval = setInterval(() => {
      if (location) {
        fetchPrayerTimes();
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [location, fetchPrayerTimes]);

  // Try to get compass heading
  useEffect(() => {
    const handleOrientation = (event) => {
      if (event.webkitCompassHeading !== undefined) {
        setCompassHeading(event.webkitCompassHeading);
        setHasCompass(true);
      } else if (event.alpha !== null) {
        setCompassHeading(360 - event.alpha);
        setHasCompass(true);
      }
    };

    if (window.DeviceOrientationEvent) {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        setHasCompass(false);
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
        setHasCompass(true);
      }
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  // Store iOS compass handler ref for cleanup
  const iosCompassHandlerRef = useRef(null);

  // Request compass permission (iOS)
  const requestCompassPermission = async () => {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === 'granted') {
          // Remove old handler if exists
          if (iosCompassHandlerRef.current) {
            window.removeEventListener('deviceorientation', iosCompassHandlerRef.current);
          }
          // Create and store new handler
          iosCompassHandlerRef.current = (event) => {
            if (event.webkitCompassHeading !== undefined) {
              setCompassHeading(event.webkitCompassHeading);
              setHasCompass(true);
            }
          };
          window.addEventListener('deviceorientation', iosCompassHandlerRef.current);
        }
      } catch {
        // Compass permission denied - silently fail
      }
    }
  };

  // Cleanup iOS compass handler on unmount
  useEffect(() => {
    return () => {
      if (iosCompassHandlerRef.current) {
        window.removeEventListener('deviceorientation', iosCompassHandlerRef.current);
      }
    };
  }, []);

  // Prayer data with icons
  const prayers = useMemo(() => {
    if (!prayerData?.timings) return [];
    const t = prayerData.timings;
    return [
      { name: 'Fajr', arabic: 'الفجر', time: formatTime(t.Fajr, use12HourFormat), icon: '🌅', color: '#818CF8' },
      { name: 'Sunrise', arabic: 'الشروق', time: formatTime(t.Sunrise, use12HourFormat), icon: '☀️', color: '#FBBF24' },
      { name: 'Dhuhr', arabic: 'الظهر', time: formatTime(t.Dhuhr, use12HourFormat), icon: '🌞', color: '#F59E0B' },
      { name: 'Asr', arabic: 'العصر', time: formatTime(t.Asr, use12HourFormat), icon: '🌤️', color: '#FB923C' },
      { name: 'Maghrib', arabic: 'المغرب', time: formatTime(t.Maghrib, use12HourFormat), icon: '🌅', color: '#F472B6' },
      { name: 'Isha', arabic: 'العشاء', time: formatTime(t.Isha, use12HourFormat), icon: '🌙', color: '#8B5CF6' },
    ];
  }, [prayerData, use12HourFormat]);

  const isRamadan = prayerData?.ramadan?.isRamadan;
  const hijriDate = prayerData?.date?.hijri;
  const nextPrayer = prayerData?.nextPrayer;
  const suhoorTime = formatTime(prayerData?.ramadan?.suhoorTime, use12HourFormat);
  const iftarTime = formatTime(prayerData?.ramadan?.iftarTime, use12HourFormat);
  const nextPrayerTime = formatTime(nextPrayer?.time, use12HourFormat);

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={`h-full flex flex-col overflow-auto ${darkMode ? 'text-white' : ''}`}>
      {/* Header with Hijri Date */}
      <div
        className={`sticky top-0 z-10 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}
      >
        {/* Title row with back button */}
        <div className="relative flex items-center justify-center px-4 py-3">
          {/* Back button - vertically centered, proper touch target */}
          <button
            onClick={handleBack}
            className={`absolute left-3 p-2.5 rounded-full transition-all ${darkMode ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-gray-100 active:bg-gray-200'}`}
            style={{ minWidth: '44px', minHeight: '44px' }}
            title="Go back"
          >
            <Icons.ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
          </button>

          <h2 className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            🕌 Prayer Times
          </h2>
        </div>

        {/* Hijri Date */}
        {hijriDate && (
          <div className="text-center px-4 pb-2">
            <p className={`text-lg font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} dir="rtl">
              {hijriDate.formattedAr}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {hijriDate.formatted}
            </p>
          </div>
        )}

        {/* Ramadan Banner */}
        {isRamadan && (
          <div className="mx-4 mb-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center">
            <p className="font-bold text-lg">🌙 Ramadan Mubarak! 🌙</p>
            <div className="flex justify-center gap-6 mt-2 text-sm">
              <div>
                <span className="opacity-80">Suhoor ends:</span>{' '}
                <span className="font-bold">{suhoorTime}</span>
              </div>
              <div>
                <span className="opacity-80">Iftar:</span>{' '}
                <span className="font-bold">{iftarTime}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 pb-32 space-y-6">
        {/* Location */}
        <div className="text-center">
          {location ? (
            <div className="flex items-center justify-center gap-2">
              <Icons.MapPin className="w-4 h-4 text-emerald-500" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{locationName}</span>
              <button
                onClick={getLocation}
                className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                title="Update location"
              >
                <Icons.Refresh className="w-4 h-4 text-emerald-500" />
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                title="Settings"
              >
                <Icons.Settings className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          ) : (
            <button
              onClick={getLocation}
              disabled={isLoadingLocation}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center gap-2 mx-auto hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isLoadingLocation ? (
                <Icons.Loader className="w-5 h-5 animate-spin" />
              ) : (
                <Icons.MapPin className="w-5 h-5" />
              )}
              {isLoadingLocation ? 'Getting location...' : 'Enable Location for Prayer Times'}
            </button>
          )}
          {locationError && (
            <p className="text-red-500 text-sm mt-2">{locationError}</p>
          )}
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg space-y-4`}>
            {/* Time Format Toggle */}
            <div>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Time Format
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setUse12HourFormat(true)}
                  className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                    use12HourFormat
                      ? 'bg-emerald-500 text-white'
                      : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  12 Hour (AM/PM)
                </button>
                <button
                  onClick={() => setUse12HourFormat(false)}
                  className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                    !use12HourFormat
                      ? 'bg-emerald-500 text-white'
                      : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  24 Hour
                </button>
              </div>
            </div>

            {/* Calculation Method */}
            <div>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Calculation Method
              </h3>
              <select
                value={calculationMethod}
                onChange={(e) => setCalculationMethod(e.target.value)}
                className={`w-full p-3 rounded-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
              >
                {CALCULATION_METHODS.map((method) => (
                  <option key={method.id} value={method.id}>
                    {method.name} - {method.region}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Next Prayer Countdown */}
        {nextPrayer && (
          <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Next Prayer</p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {nextPrayer.name} at {nextPrayerTime}
            </p>
            <p className="text-emerald-500 font-semibold text-lg">
              ⏱️ {nextPrayer.countdown}
            </p>
          </div>
        )}

        {/* Prayer Times List */}
        <div className="space-y-3">
          {prayers.length > 0 ? (
            prayers.map((prayer) => {
              const isNext = nextPrayer?.name === prayer.name;
              const isPassed = prayers.findIndex(p => p.name === nextPrayer?.name) >
                prayers.findIndex(p => p.name === prayer.name);

              return (
                <div
                  key={prayer.name}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                    isNext
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-[1.02]'
                      : isPassed
                        ? darkMode
                          ? 'bg-gray-800/50 opacity-60'
                          : 'bg-gray-100 opacity-60'
                        : darkMode
                          ? 'bg-gray-800'
                          : 'bg-white shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ background: `${prayer.color}20` }}
                    >
                      {prayer.icon}
                    </div>
                    <div>
                      <div className={`font-bold ${isNext ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {prayer.name}
                        {isNext && <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">Next</span>}
                      </div>
                      <div className={`text-sm ${isNext ? 'text-white/80' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {prayer.arabic}
                      </div>
                    </div>
                  </div>
                  <div className={`text-xl font-bold ${isNext ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {prayer.time}
                  </div>
                </div>
              );
            })
          ) : isLoading ? (
            <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Icons.Loader className="w-8 h-8 mx-auto mb-4 animate-spin" />
              <p>Loading prayer times...</p>
            </div>
          ) : (
            <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Icons.Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Enable location to see prayer times</p>
            </div>
          )}
        </div>

        {/* Qibla Direction — Compass with Avatar + Kaaba */}
        <div className={`rounded-3xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <h3 className={`text-xl font-bold text-center mb-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            🧭 Qibla Direction
          </h3>

          {qiblaData ? (
            <>
              {/* Compass */}
              <div className="relative w-64 h-64 mx-auto">
                {/* Compass outer ring */}
                <div className={`absolute inset-0 rounded-full border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                  style={{
                    background: darkMode
                      ? 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)',
                  }}
                />

                {/* Compass tick marks */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                  {Array.from({ length: 72 }).map((_, i) => {
                    const deg = i * 5;
                    const r1 = 124;
                    const r2 = i % 18 === 0 ? 112 : i % 6 === 0 ? 116 : 120;
                    const x1 = 128 + r1 * Math.sin(deg * Math.PI / 180);
                    const y1 = 128 - r1 * Math.cos(deg * Math.PI / 180);
                    const x2 = 128 + r2 * Math.sin(deg * Math.PI / 180);
                    const y2 = 128 - r2 * Math.cos(deg * Math.PI / 180);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={darkMode ? '#4b5563' : '#d1d5db'} strokeWidth={i % 18 === 0 ? 2 : 0.8} />;
                  })}
                </svg>

                {/* Cardinal direction markers N E S W */}
                {[
                  { d: 'N', top: '8px', left: '50%', tx: '-50%', ty: '0', color: '#ef4444' },
                  { d: 'E', top: '50%', right: '8px', tx: '0', ty: '-50%' },
                  { d: 'S', bottom: '8px', left: '50%', tx: '-50%', ty: '0' },
                  { d: 'W', top: '50%', left: '8px', tx: '0', ty: '-50%' },
                ].map(({ d, color, ...pos }) => (
                  <div key={d} className="absolute font-bold text-sm"
                    style={{
                      ...pos,
                      transform: `translateX(${pos.tx}) translateY(${pos.ty})`,
                      color: color || (darkMode ? '#9ca3af' : '#6b7280'),
                    }}
                  >
                    {d}
                  </div>
                ))}

                {/* Rotating arm: Person (center) → needle → Kaaba (tip) */}
                {(() => {
                  const angle = qiblaData.qibla.direction - compassHeading;
                  return (
                    <div className="absolute inset-0"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        transition: hasCompass ? 'none' : 'transform 0.3s ease-out',
                      }}
                    >
                      {/* Person in sujood near center — SVG faces UP toward Kaaba */}
                      <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: '42%' }}>
                        <svg width="36" height="28" viewBox="0 0 36 28" fill="none"
                          style={{ transform: `rotate(-${angle}deg)`, transition: hasCompass ? 'none' : 'transform 0.3s ease-out' }}>
                          {/* Prayer mat */}
                          <rect x="2" y="22" width="32" height="5" rx="2.5" fill="#10b981" opacity="0.3" />
                          {/* Body in sujood — torso arched, head down */}
                          <path d="M28 20 C26 12 22 10 18 14 C16 16 12 20 8 22" stroke="#64748b" strokeWidth="4" strokeLinecap="round" fill="none" />
                          {/* Head touching ground */}
                          <circle cx="7" cy="21" r="4" fill="#f0d0a0" />
                          {/* Head cover */}
                          <path d="M4 18 Q7 14 10 18" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />
                          {/* Raised hips */}
                          <circle cx="29" cy="18" r="3" fill="#f8f8f8" stroke="#e5e7eb" strokeWidth="0.5" />
                        </svg>
                      </div>

                      {/* Needle line */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-1 rounded-full"
                        style={{
                          top: 24,
                          height: 78,
                          background: 'linear-gradient(to top, rgba(16,185,129,0.1), #10b981)',
                        }}
                      />
                      {/* Arrow head */}
                      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 14 }}>
                        <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-emerald-500" />
                      </div>
                      {/* Kaaba at the tip (counter-rotated to stay upright) */}
                      <div className="absolute left-1/2 text-xl"
                        style={{
                          top: -2,
                          transform: `translateX(-50%) rotate(-${angle}deg)`,
                          transition: hasCompass ? 'none' : 'transform 0.3s ease-out',
                        }}
                      >
                        🕋
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Info below compass */}
              <div className="text-center mt-4 space-y-1.5">
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {qiblaData.qibla.directionRounded}° {qiblaData.qibla.compass}
                </p>
                <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} dir="rtl">
                  {qiblaData.qibla.compassAr}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  📍 Distance to Kaaba: {qiblaData.distance.km.toLocaleString()} km
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {hasCompass ? 'Turn your device to align with the Qibla' : 'Face the direction the 🕋 points to'}
                </p>
                {!hasCompass && typeof DeviceOrientationEvent?.requestPermission === 'function' && (
                  <button
                    onClick={requestCompassPermission}
                    className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded-xl text-sm"
                  >
                    Enable Compass
                  </button>
                )}
              </div>
            </>
          ) : location ? (
            <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Icons.Loader className="w-8 h-8 mx-auto mb-4 animate-spin" />
              <p>Loading Qibla direction...</p>
            </div>
          ) : (
            <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <div className="text-4xl mb-4">🧭</div>
              <p>Enable location to see Qibla direction</p>
            </div>
          )}
        </div>

        {/* Location Info */}
        {prayerData?.location && (
          <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>
              Method: {prayerData.location.method} • Timezone: {prayerData.location.timezone}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrayerTimesView;
