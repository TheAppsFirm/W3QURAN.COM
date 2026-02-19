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

function PrayerTimesView({ darkMode }) {
  // Location state
  const [location, setLocation] = useLocalStorage('prayer_location', null);
  const [locationName, setLocationName] = useLocalStorage('prayer_location_name', 'Unknown');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // Settings
  const [calculationMethod, setCalculationMethod] = useLocalStorage('prayer_method', '2');
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

  // Fetch prayer times from API
  const fetchPrayerTimes = useCallback(async () => {
    if (!location) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/prayer-times?lat=${location.latitude}&lng=${location.longitude}&method=${calculationMethod}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setPrayerData(data);
        }
      }
    } catch (error) {
      console.error('Failed to fetch prayer times:', error);
    }
    setIsLoading(false);
  }, [location, calculationMethod]);

  // Fetch Qibla direction from API
  const fetchQiblaDirection = useCallback(async () => {
    if (!location) return;

    try {
      const response = await fetch(
        `/api/qibla?lat=${location.latitude}&lng=${location.longitude}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setQiblaData(data);
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

  // Request compass permission (iOS)
  const requestCompassPermission = async () => {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === 'granted') {
          window.addEventListener('deviceorientation', (event) => {
            if (event.webkitCompassHeading !== undefined) {
              setCompassHeading(event.webkitCompassHeading);
              setHasCompass(true);
            }
          });
        }
      } catch (err) {
        console.error('Compass permission denied');
      }
    }
  };

  // Prayer data with icons
  const prayers = useMemo(() => {
    if (!prayerData?.timings) return [];
    const t = prayerData.timings;
    return [
      { name: 'Fajr', arabic: 'الفجر', time: t.Fajr, icon: '🌅', color: '#818CF8' },
      { name: 'Sunrise', arabic: 'الشروق', time: t.Sunrise, icon: '☀️', color: '#FBBF24' },
      { name: 'Dhuhr', arabic: 'الظهر', time: t.Dhuhr, icon: '🌞', color: '#F59E0B' },
      { name: 'Asr', arabic: 'العصر', time: t.Asr, icon: '🌤️', color: '#FB923C' },
      { name: 'Maghrib', arabic: 'المغرب', time: t.Maghrib, icon: '🌅', color: '#F472B6' },
      { name: 'Isha', arabic: 'العشاء', time: t.Isha, icon: '🌙', color: '#8B5CF6' },
    ];
  }, [prayerData]);

  const isRamadan = prayerData?.ramadan?.isRamadan;
  const hijriDate = prayerData?.date?.hijri;
  const nextPrayer = prayerData?.nextPrayer;

  return (
    <div className={`h-full flex flex-col overflow-auto ${darkMode ? 'text-white' : ''}`}>
      {/* Header with Hijri Date */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl p-4 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <h2 className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🕌 Prayer Times
        </h2>

        {/* Hijri Date */}
        {hijriDate && (
          <div className="text-center mt-2">
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
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center">
            <p className="font-bold text-lg">🌙 Ramadan Mubarak! 🌙</p>
            <div className="flex justify-center gap-6 mt-2 text-sm">
              <div>
                <span className="opacity-80">Suhoor ends:</span>{' '}
                <span className="font-bold">{prayerData.ramadan.suhoorTime}</span>
              </div>
              <div>
                <span className="opacity-80">Iftar:</span>{' '}
                <span className="font-bold">{prayerData.ramadan.iftarTime}</span>
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
          <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
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
        )}

        {/* Next Prayer Countdown */}
        {nextPrayer && (
          <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Next Prayer</p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {nextPrayer.name} at {nextPrayer.time}
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

        {/* Qibla Compass */}
        <div className={`rounded-3xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <h3 className={`text-xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            🧭 Qibla Direction
          </h3>

          {qiblaData ? (
            <>
              <div className="relative w-56 h-56 mx-auto">
                {/* Compass Background */}
                <div
                  className={`absolute inset-0 rounded-full border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  style={{
                    background: darkMode
                      ? 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
                  }}
                />

                {/* Compass Ring */}
                <div
                  className="absolute inset-2 rounded-full transition-transform"
                  style={{
                    background: `conic-gradient(from ${-compassHeading}deg,
                      rgba(16, 185, 129, 0.4) 0deg,
                      rgba(16, 185, 129, 0.4) 15deg,
                      transparent 15deg,
                      transparent 345deg,
                      rgba(16, 185, 129, 0.4) 345deg)`,
                    transition: hasCompass ? 'none' : 'transform 0.3s ease-out',
                  }}
                />

                {/* Direction Markers */}
                {['N', 'E', 'S', 'W'].map((dir, i) => (
                  <div
                    key={dir}
                    className="absolute font-bold"
                    style={{
                      top: i === 0 ? '12px' : i === 2 ? 'auto' : '50%',
                      bottom: i === 2 ? '12px' : 'auto',
                      left: i === 3 ? '12px' : i === 1 ? 'auto' : '50%',
                      right: i === 1 ? '12px' : 'auto',
                      transform: `translateX(${i === 0 || i === 2 ? '-50%' : '0'}) translateY(${i === 1 || i === 3 ? '-50%' : '0'})`,
                      color: dir === 'N' ? '#ef4444' : darkMode ? '#9ca3af' : '#6b7280',
                      fontSize: '14px',
                    }}
                  >
                    {dir}
                  </div>
                ))}

                {/* Kaaba Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl">🕋</div>
                </div>

                {/* Qibla Direction Needle */}
                <div
                  className="absolute top-1/2 left-1/2 w-1.5 h-24 bg-gradient-to-t from-emerald-500 to-teal-400 origin-bottom rounded-full shadow-lg"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${qiblaData.qibla.direction - compassHeading}deg)`,
                    transition: hasCompass ? 'none' : 'transform 0.3s ease-out',
                  }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-emerald-500" />
                </div>
              </div>

              <div className="text-center mt-4 space-y-2">
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {qiblaData.qibla.directionRounded}° {qiblaData.qibla.compass}
                </p>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} dir="rtl">
                  {qiblaData.qibla.compassAr}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  📍 Distance to Kaaba: {qiblaData.distance.km.toLocaleString()} km
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {hasCompass ? 'Turn your device to align with the Qibla' : 'Point your device towards the Qibla'}
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
