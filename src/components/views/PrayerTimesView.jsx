/**
 * PrayerTimesView Component
 * Single Responsibility: Display prayer times and Qibla direction
 */

import { useState, useEffect } from 'react';

function PrayerTimesView({ darkMode }) {
  const [qiblaAngle] = useState(0);
  const [compassHeading, setCompassHeading] = useState(0);

  // Sample prayer times (in real app, these would be calculated based on location)
  const prayerTimes = [
    { name: 'Fajr', arabic: 'الفجر', time: '5:23 AM', icon: '🌅', passed: true },
    { name: 'Sunrise', arabic: 'الشروق', time: '6:45 AM', icon: '☀️', passed: true },
    { name: 'Dhuhr', arabic: 'الظهر', time: '12:30 PM', icon: '🌞', passed: false, current: true },
    { name: 'Asr', arabic: 'العصر', time: '3:45 PM', icon: '🌤️', passed: false },
    { name: 'Maghrib', arabic: 'المغرب', time: '6:15 PM', icon: '🌅', passed: false },
    { name: 'Isha', arabic: 'العشاء', time: '7:45 PM', icon: '🌙', passed: false },
  ];

  // Simulate compass rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCompassHeading((prev) => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`h-full flex flex-col p-6 overflow-auto ${darkMode ? 'text-white' : ''}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Prayer Times</h2>

      {/* Prayer Times List */}
      <div className="max-w-md mx-auto w-full space-y-3 mb-8">
        {prayerTimes.map((prayer) => (
          <div
            key={prayer.name}
            className={`flex items-center justify-between p-4 rounded-2xl ${
              prayer.current
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : prayer.passed
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
                <div className={`font-bold ${prayer.current ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {prayer.name}
                </div>
                <div className={`text-sm ${prayer.current ? 'text-white/80' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {prayer.arabic}
                </div>
              </div>
            </div>
            <div className={`text-xl font-bold ${prayer.current ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
              {prayer.time}
            </div>
          </div>
        ))}
      </div>

      {/* Qibla Compass */}
      <div className={`max-w-md mx-auto w-full rounded-3xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
        <h3 className={`text-xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Qibla Direction</h3>
        <div className="relative w-48 h-48 mx-auto">
          {/* Compass Ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-emerald-500"
            style={{
              background: `conic-gradient(from 0deg, #10b981 0deg, #10b981 10deg, transparent 10deg, transparent 350deg, #10b981 350deg)`,
              transform: `rotate(${-compassHeading}deg)`,
              transition: 'transform 0.1s linear',
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
                transform: i === 0 || i === 2 ? 'translateX(-50%)' : 'translateY(-50%)',
                color: dir === 'N' ? '#ef4444' : darkMode ? '#9ca3af' : '#6b7280',
              }}
            >
              {dir}
            </div>
          ))}
          {/* Kaaba Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl">🕋</div>
          </div>
          {/* Compass Needle */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-16 bg-red-500 origin-bottom"
            style={{
              transform: `translate(-50%, -100%) rotate(${qiblaAngle - compassHeading}deg)`,
              borderRadius: '2px',
            }}
          />
        </div>
        <p className={`text-center mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Point your device towards the Qibla</p>
      </div>
    </div>
  );
}

export default PrayerTimesView;
