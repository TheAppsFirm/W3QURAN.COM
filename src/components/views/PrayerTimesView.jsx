/**
 * PrayerTimesView Component
 * Single Responsibility: Display prayer times with geolocation and Qibla compass
 */

import { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common/Icons';
import {
  calculatePrayerTimes,
  calculateQiblaDirection,
  getCurrentPrayer,
  getTimezoneOffset,
} from '../../utils/prayerUtils';
import { useLocalStorage } from '../../hooks';

function PrayerTimesView({ darkMode }) {
  // Location state
  const [location, setLocation] = useLocalStorage('prayer_location', null);
  const [locationName, setLocationName] = useLocalStorage('prayer_location_name', 'Unknown');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // Prayer times state
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [currentPrayer, setCurrentPrayer] = useState({ current: null, next: null });

  // Compass state
  const [qiblaAngle, setQiblaAngle] = useState(0);
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

  // Calculate prayer times when location changes
  useEffect(() => {
    if (location) {
      const timezone = getTimezoneOffset();
      const times = calculatePrayerTimes(
        new Date(),
        location.latitude,
        location.longitude,
        timezone
      );
      setPrayerTimes(times);
      setQiblaAngle(calculateQiblaDirection(location.latitude, location.longitude));
    }
  }, [location]);

  // Update current prayer every minute
  useEffect(() => {
    if (prayerTimes) {
      const updateCurrentPrayer = () => {
        setCurrentPrayer(getCurrentPrayer(prayerTimes));
      };

      updateCurrentPrayer();
      const interval = setInterval(updateCurrentPrayer, 60000);
      return () => clearInterval(interval);
    }
  }, [prayerTimes]);

  // Try to get compass heading
  useEffect(() => {
    const handleOrientation = (event) => {
      if (event.webkitCompassHeading !== undefined) {
        // iOS
        setCompassHeading(event.webkitCompassHeading);
        setHasCompass(true);
      } else if (event.alpha !== null) {
        // Android
        setCompassHeading(360 - event.alpha);
        setHasCompass(true);
      }
    };

    if (window.DeviceOrientationEvent) {
      // Request permission for iOS 13+
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // Will need user gesture to request
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
  const prayers = prayerTimes
    ? [
        { name: 'Fajr', arabic: 'الفجر', time: prayerTimes.fajr, icon: '🌅' },
        { name: 'Sunrise', arabic: 'الشروق', time: prayerTimes.sunrise, icon: '☀️' },
        { name: 'Dhuhr', arabic: 'الظهر', time: prayerTimes.dhuhr, icon: '🌞' },
        { name: 'Asr', arabic: 'العصر', time: prayerTimes.asr, icon: '🌤️' },
        { name: 'Maghrib', arabic: 'المغرب', time: prayerTimes.maghrib, icon: '🌅' },
        { name: 'Isha', arabic: 'العشاء', time: prayerTimes.isha, icon: '🌙' },
      ]
    : [];

  return (
    <div className={`h-full flex flex-col p-6 overflow-auto ${darkMode ? 'text-white' : ''}`}>
      <h2 className={`text-3xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Prayer Times
      </h2>

      {/* Location */}
      <div className="text-center mb-6">
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
          </div>
        ) : (
          <button
            onClick={getLocation}
            disabled={isLoadingLocation}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl flex items-center gap-2 mx-auto hover:shadow-lg transition-all disabled:opacity-50"
          >
            {isLoadingLocation ? (
              <Icons.Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Icons.MapPin className="w-4 h-4" />
            )}
            {isLoadingLocation ? 'Getting location...' : 'Enable Location'}
          </button>
        )}
        {locationError && (
          <p className="text-red-500 text-sm mt-2">{locationError}</p>
        )}
      </div>

      {/* Prayer Times List */}
      <div className="max-w-md mx-auto w-full space-y-3 mb-8">
        {prayers.length > 0 ? (
          prayers.map((prayer) => {
            const isCurrent = currentPrayer.current === prayer.name;
            const isPassed = prayers.findIndex(p => p.name === currentPrayer.current) >
              prayers.findIndex(p => p.name === prayer.name);
            const isNext = currentPrayer.next === prayer.name;

            return (
              <div
                key={prayer.name}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                  isCurrent
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-[1.02]'
                    : isNext
                      ? darkMode
                        ? 'bg-gray-800 border-2 border-emerald-500'
                        : 'bg-white border-2 border-emerald-500 shadow-md'
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
                  <span className="text-2xl">{prayer.icon}</span>
                  <div>
                    <div className={`font-bold ${isCurrent ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {prayer.name}
                      {isCurrent && <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">Now</span>}
                      {isNext && !isCurrent && <span className="ml-2 text-xs text-emerald-500 font-normal">Next</span>}
                    </div>
                    <div className={`text-sm ${isCurrent ? 'text-white/80' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {prayer.arabic}
                    </div>
                  </div>
                </div>
                <div className={`text-xl font-bold ${isCurrent ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {prayer.time}
                </div>
              </div>
            );
          })
        ) : (
          <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <Icons.Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Enable location to see prayer times</p>
          </div>
        )}
      </div>

      {/* Qibla Compass */}
      <div className={`max-w-md mx-auto w-full rounded-3xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl mb-24`}>
        <h3 className={`text-xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Qibla Direction
        </h3>

        {location ? (
          <>
            <div className="relative w-48 h-48 mx-auto">
              {/* Compass Background */}
              <div
                className={`absolute inset-0 rounded-full border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              />

              {/* Compass Ring that rotates with device */}
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  background: `conic-gradient(from ${-compassHeading}deg,
                    rgba(16, 185, 129, 0.3) 0deg,
                    rgba(16, 185, 129, 0.3) 10deg,
                    transparent 10deg,
                    transparent 350deg,
                    rgba(16, 185, 129, 0.3) 350deg)`,
                  transition: hasCompass ? 'none' : 'transform 0.3s ease-out',
                }}
              />

              {/* Direction Markers */}
              {['N', 'E', 'S', 'W'].map((dir, i) => (
                <div
                  key={dir}
                  className="absolute font-bold text-sm"
                  style={{
                    top: i === 0 ? '8px' : i === 2 ? 'auto' : '50%',
                    bottom: i === 2 ? '8px' : 'auto',
                    left: i === 3 ? '8px' : i === 1 ? 'auto' : '50%',
                    right: i === 1 ? '8px' : 'auto',
                    transform: `translateX(${i === 0 || i === 2 ? '-50%' : '0'}) translateY(${i === 1 || i === 3 ? '-50%' : '0'})`,
                    color: dir === 'N' ? '#ef4444' : darkMode ? '#9ca3af' : '#6b7280',
                  }}
                >
                  {dir}
                </div>
              ))}

              {/* Kaaba Icon in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl">🕋</div>
              </div>

              {/* Qibla Direction Needle */}
              <div
                className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-emerald-500 to-teal-400 origin-bottom rounded-full"
                style={{
                  transform: `translate(-50%, -100%) rotate(${qiblaAngle - compassHeading}deg)`,
                  transition: hasCompass ? 'none' : 'transform 0.3s ease-out',
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-emerald-500" />
              </div>
            </div>

            <div className="text-center mt-4">
              <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {Math.round(qiblaAngle)}° from North
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {hasCompass ? 'Turn to align with the Qibla' : 'Point your device towards the Qibla'}
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
        ) : (
          <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="text-4xl mb-4">🧭</div>
            <p>Enable location to see Qibla direction</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrayerTimesView;
