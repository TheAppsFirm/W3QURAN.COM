/**
 * Global Ummah Pulse - Live World Map
 * Real-time visualization of Quran readers around the world
 * Shows dots lighting up globally with reader counts per surah
 */

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';

// User ID for tracking (persistent per browser)
const getUserId = () => {
  let userId = localStorage.getItem('w3quran_user_id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('w3quran_user_id', userId);
  }
  return userId;
};

/**
 * Track user reading activity - call this when user opens a surah
 * @param {number} surahId - The surah being read
 * @returns {Promise<boolean>} - Success status
 */
export const trackReadingActivity = async (surahId) => {
  try {
    // Get user's location (if permitted)
    let lat = 21.4225; // Default to Makkah
    let lng = 39.8262;

    if ('geolocation' in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 5000,
            maximumAge: 300000, // Cache for 5 minutes
          });
        });
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      } catch {
        // Use default location if permission denied
        console.log('Geolocation not available, using default location');
      }
    }

    const response = await fetch('/api/ummah-pulse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        surahId,
        lat,
        lng,
        userId: getUserId(),
        timestamp: Date.now(),
      }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.log('Failed to track activity:', error.message);
    return false;
  }
};

// Simulated global reading data (in production, this would come from a real-time backend)
const MAJOR_CITIES = [
  { name: 'Makkah', lat: 21.4225, lng: 39.8262, weight: 10 },
  { name: 'Madinah', lat: 24.5247, lng: 39.5692, weight: 8 },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357, weight: 7 },
  { name: 'Istanbul', lat: 41.0082, lng: 28.9784, weight: 6 },
  { name: 'Jakarta', lat: -6.2088, lng: 106.8456, weight: 9 },
  { name: 'Karachi', lat: 24.8607, lng: 67.0011, weight: 8 },
  { name: 'Lahore', lat: 31.5497, lng: 74.3436, weight: 7 },
  { name: 'Dhaka', lat: 23.8103, lng: 90.4125, weight: 7 },
  { name: 'Riyadh', lat: 24.7136, lng: 46.6753, weight: 6 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, weight: 5 },
  { name: 'Kuala Lumpur', lat: 3.1390, lng: 101.6869, weight: 6 },
  { name: 'London', lat: 51.5074, lng: -0.1278, weight: 4 },
  { name: 'New York', lat: 40.7128, lng: -74.0060, weight: 4 },
  { name: 'Los Angeles', lat: 34.0522, lng: -118.2437, weight: 3 },
  { name: 'Toronto', lat: 43.6532, lng: -79.3832, weight: 3 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522, weight: 3 },
  { name: 'Berlin', lat: 52.5200, lng: 13.4050, weight: 2 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, weight: 3 },
  { name: 'Cape Town', lat: -33.9249, lng: 18.4241, weight: 2 },
  { name: 'Lagos', lat: 6.5244, lng: 3.3792, weight: 4 },
  { name: 'Casablanca', lat: 33.5731, lng: -7.5898, weight: 4 },
  { name: 'Tehran', lat: 35.6892, lng: 51.3890, weight: 5 },
  { name: 'Baghdad', lat: 33.3152, lng: 44.3661, weight: 4 },
  { name: 'Amman', lat: 31.9454, lng: 35.9284, weight: 3 },
  { name: 'Beirut', lat: 33.8938, lng: 35.5018, weight: 2 },
  { name: 'Islamabad', lat: 33.6844, lng: 73.0479, weight: 5 },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777, weight: 5 },
  { name: 'Delhi', lat: 28.7041, lng: 77.1025, weight: 5 },
  { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, weight: 4 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, weight: 3 },
  { name: 'Doha', lat: 25.2854, lng: 51.5310, weight: 3 },
  { name: 'Kuwait City', lat: 29.3759, lng: 47.9774, weight: 3 },
  { name: 'Muscat', lat: 23.5880, lng: 58.3829, weight: 2 },
  { name: 'Jeddah', lat: 21.5433, lng: 39.1728, weight: 6 },
  { name: 'Alexandria', lat: 31.2001, lng: 29.9187, weight: 4 },
  { name: 'Tunis', lat: 36.8065, lng: 10.1815, weight: 3 },
  { name: 'Algiers', lat: 36.7538, lng: 3.0588, weight: 3 },
  { name: 'Rabat', lat: 34.0209, lng: -6.8416, weight: 3 },
  { name: 'Nairobi', lat: -1.2921, lng: 36.8219, weight: 2 },
  { name: 'Addis Ababa', lat: 8.9806, lng: 38.7578, weight: 2 },
];

// Popular surahs that are commonly read
const POPULAR_SURAHS = [1, 2, 3, 18, 36, 55, 56, 67, 78, 112, 113, 114];

// Generate random reading activity
const generateReadingActivity = () => {
  const activities = [];
  const now = Date.now();

  MAJOR_CITIES.forEach(city => {
    // More readers during prayer times (simulated)
    const hour = new Date().getUTCHours();
    const localHour = (hour + Math.floor(city.lng / 15)) % 24;
    const isPrayerTime = [5, 6, 12, 13, 15, 16, 18, 19, 20, 21].includes(localHour);

    const baseReaders = city.weight * (isPrayerTime ? 15 : 8);
    const readers = Math.floor(baseReaders + Math.random() * baseReaders);

    // Randomly select a surah being read
    const surahId = POPULAR_SURAHS[Math.floor(Math.random() * POPULAR_SURAHS.length)];

    activities.push({
      id: `${city.name}-${now}`,
      city: city.name,
      lat: city.lat + (Math.random() - 0.5) * 2,
      lng: city.lng + (Math.random() - 0.5) * 2,
      readers,
      surahId,
      surahName: SURAHS.find(s => s.id === surahId)?.name || 'Al-Fatiha',
      timestamp: now,
      isPrayerTime,
    });
  });

  return activities;
};

// Generate total stats
const generateGlobalStats = (activities) => {
  const totalReaders = activities.reduce((sum, a) => sum + a.readers, 0);
  const surahCounts = {};

  activities.forEach(a => {
    surahCounts[a.surahId] = (surahCounts[a.surahId] || 0) + a.readers;
  });

  const topSurah = Object.entries(surahCounts)
    .sort(([,a], [,b]) => b - a)[0];

  return {
    totalReaders,
    topSurahId: topSurah ? parseInt(topSurah[0]) : 1,
    topSurahReaders: topSurah ? topSurah[1] : 0,
    activeCountries: new Set(activities.map(a => a.city)).size,
  };
};

// Pulsing Dot Component
const PulsingDot = memo(function PulsingDot({ x, y, size, color, readers, city, surahName, isPrayerTime, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Outer pulse */}
      <circle
        cx={x}
        cy={y}
        r={size * 2}
        fill={color}
        opacity={0.2}
        className="animate-ping"
        style={{ transformOrigin: `${x}px ${y}px` }}
      />

      {/* Middle glow */}
      <circle
        cx={x}
        cy={y}
        r={size * 1.5}
        fill={color}
        opacity={0.4}
      />

      {/* Inner dot */}
      <circle
        cx={x}
        cy={y}
        r={size}
        fill={color}
        stroke="white"
        strokeWidth={1}
        opacity={0.9}
      />

      {/* Prayer time indicator */}
      {isPrayerTime && (
        <circle
          cx={x}
          cy={y}
          r={size + 4}
          fill="none"
          stroke="#F59E0B"
          strokeWidth={2}
          strokeDasharray="4 2"
          className="animate-spin"
          style={{ animationDuration: '3s' }}
        />
      )}

      {/* Hover tooltip */}
      {isHovered && (
        <g>
          <rect
            x={x + 10}
            y={y - 40}
            width={160}
            height={50}
            rx={8}
            fill="rgba(0,0,0,0.85)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text x={x + 20} y={y - 22} fill="white" fontSize="11" fontWeight="bold">
            {city}
          </text>
          <text x={x + 20} y={y - 8} fill="#10B981" fontSize="10">
            {readers.toLocaleString()} reading now
          </text>
          <text x={x + 20} y={y + 6} fill="#60A5FA" fontSize="9">
            Most: {surahName}
          </text>
        </g>
      )}
    </g>
  );
});

// World Map SVG Component
const WorldMap = memo(function WorldMap({ activities, onDotClick }) {
  // Convert lat/lng to SVG coordinates
  const latLngToXY = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      {/* Background gradient */}
      <defs>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E1E3F" />
        </linearGradient>
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="400" fill="url(#mapGradient)" />

      {/* Simplified world map outline */}
      <path
        d="M50,200 Q100,180 150,190 T250,185 T350,195 T450,180 T550,190 T650,185 T750,195"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="40"
      />

      {/* Grid lines */}
      {[...Array(9)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 50}
          x2="800"
          y2={i * 50}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}
      {[...Array(17)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="400"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}

      {/* Continent shapes (simplified) */}
      {/* North America */}
      <ellipse cx="150" cy="150" rx="80" ry="60" fill="rgba(255,255,255,0.03)" />
      {/* South America */}
      <ellipse cx="200" cy="280" rx="40" ry="70" fill="rgba(255,255,255,0.03)" />
      {/* Europe */}
      <ellipse cx="420" cy="120" rx="50" ry="40" fill="rgba(255,255,255,0.03)" />
      {/* Africa */}
      <ellipse cx="420" cy="230" rx="60" ry="80" fill="rgba(255,255,255,0.03)" />
      {/* Asia */}
      <ellipse cx="580" cy="150" rx="100" ry="70" fill="rgba(255,255,255,0.03)" />
      {/* Australia */}
      <ellipse cx="680" cy="300" rx="40" ry="30" fill="rgba(255,255,255,0.03)" />

      {/* Reading activity dots */}
      {activities.map((activity, index) => {
        const { x, y } = latLngToXY(activity.lat, activity.lng);
        const size = Math.min(8, 3 + activity.readers / 50);
        const color = activity.isPrayerTime ? '#F59E0B' : '#10B981';

        return (
          <PulsingDot
            key={activity.id}
            x={x}
            y={y}
            size={size}
            color={color}
            readers={activity.readers}
            city={activity.city}
            surahName={activity.surahName}
            isPrayerTime={activity.isPrayerTime}
            onClick={() => onDotClick(activity)}
          />
        );
      })}

      {/* Makkah special marker */}
      <g>
        <circle cx={latLngToXY(21.4225, 39.8262).x} cy={latLngToXY(21.4225, 39.8262).y} r="12" fill="#F59E0B" opacity="0.3" />
        <circle cx={latLngToXY(21.4225, 39.8262).x} cy={latLngToXY(21.4225, 39.8262).y} r="8" fill="#F59E0B" opacity="0.6" />
        <text
          x={latLngToXY(21.4225, 39.8262).x}
          y={latLngToXY(21.4225, 39.8262).y + 20}
          fill="#F59E0B"
          fontSize="8"
          textAnchor="middle"
        >
          Makkah
        </text>
      </g>
    </svg>
  );
});

// Stats Card Component
const StatsCard = memo(function StatsCard({ icon: Icon, label, value, color, subtext }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <p className="text-white/60 text-xs">{label}</p>
          <p className="text-white font-bold text-lg">{value}</p>
          {subtext && <p className="text-white/40 text-xs">{subtext}</p>}
        </div>
      </div>
    </div>
  );
});

// Live Activity Feed
const ActivityFeed = memo(function ActivityFeed({ activities }) {
  const recentActivities = activities
    .sort((a, b) => b.readers - a.readers)
    .slice(0, 5);

  return (
    <div className="space-y-2">
      <h4 className="text-white/60 text-xs uppercase tracking-wide mb-3">Live Activity</h4>
      {recentActivities.map((activity, index) => (
        <div
          key={activity.id}
          className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10"
          style={{ animation: `fadeIn 0.3s ease ${index * 0.1}s both` }}
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${activity.isPrayerTime ? 'bg-amber-400' : 'bg-emerald-400'}`}
              style={{ animation: 'pulse 2s infinite' }}
            />
            <span className="text-white text-sm">{activity.city}</span>
          </div>
          <div className="text-right">
            <p className="text-emerald-400 text-sm font-medium">{activity.readers}</p>
            <p className="text-white/40 text-xs">{activity.surahName}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

// Main Component
const GlobalUmmahPulse = memo(function GlobalUmmahPulse({ isVisible, onClose }) {
  const [activities, setActivities] = useState([]);
  const [stats, setStats] = useState({ totalReaders: 0, topSurahId: 1, topSurahReaders: 0, activeCountries: 0 });
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isLive, setIsLive] = useState(true);
  const [isRealData, setIsRealData] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const intervalRef = useRef(null);

  // Fetch real data from API
  const fetchRealData = useCallback(async () => {
    try {
      const response = await fetch('/api/ummah-pulse');
      if (!response.ok) throw new Error('API error');

      const data = await response.json();

      if (data.success && data.cities && data.cities.length > 0) {
        // Transform API data to activities format
        const newActivities = data.cities.map(city => {
          const recentActivity = city.activities?.[0];
          return {
            id: `${city.id}-${Date.now()}`,
            city: city.name,
            lat: city.lat,
            lng: city.lng,
            readers: city.readers || 1,
            surahId: recentActivity?.surahId || POPULAR_SURAHS[Math.floor(Math.random() * POPULAR_SURAHS.length)],
            surahName: recentActivity?.surahName || SURAHS.find(s => s.id === (recentActivity?.surahId || 1))?.name || 'Al-Fatiha',
            timestamp: city.lastActive || Date.now(),
            isPrayerTime: false,
          };
        });

        setActivities(newActivities);
        setStats({
          totalReaders: data.stats?.totalReaders || newActivities.reduce((sum, a) => sum + a.readers, 0),
          topSurahId: 1,
          topSurahReaders: 0,
          activeCountries: data.stats?.activeLocations || newActivities.length,
        });
        setIsRealData(!data.simulated);
        setConnectionStatus(data.simulated ? 'simulated' : 'live');
        return;
      }

      throw new Error('No data');
    } catch (error) {
      console.log('Falling back to simulated data:', error.message);
      // Fallback to simulated data
      const newActivities = generateReadingActivity();
      setActivities(newActivities);
      setStats(generateGlobalStats(newActivities));
      setIsRealData(false);
      setConnectionStatus('simulated');
    }
  }, []);

  // Initialize and update periodically
  useEffect(() => {
    if (!isVisible) return;

    fetchRealData();

    if (isLive) {
      intervalRef.current = setInterval(fetchRealData, 10000); // Update every 10 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, isLive, fetchRealData]);

  const handleDotClick = useCallback((activity) => {
    setSelectedActivity(activity);
  }, []);

  const topSurah = SURAHS.find(s => s.id === stats.topSurahId);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center relative">
                <Icons.Globe className="w-7 h-7 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Global Ummah Pulse</h2>
                <p className="text-emerald-400 text-sm flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full animate-pulse ${isRealData ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  {isLive ? (isRealData ? 'Live' : 'Simulated') : 'Paused'} • {stats.totalReaders.toLocaleString()} reading now
                  {!isRealData && <span className="text-amber-400/70 text-xs">(demo)</span>}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLive(!isLive)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isLive
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/10 text-white/60 border border-white/20'
                }`}
              >
                {isLive ? '● Live' : '○ Paused'}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <Icons.X className="w-6 h-6 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex">
          {/* Map Area */}
          <div className="flex-1 relative">
            <WorldMap activities={activities} onDotClick={handleDotClick} />

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-white/60">Reading</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="text-white/60">Prayer Time</span>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute top-4 left-4 right-4 flex gap-3 flex-wrap">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
                <p className="text-white/60 text-xs">Most Read Right Now</p>
                <p className="text-amber-400 font-bold">
                  {stats.topSurahReaders.toLocaleString()} reading {topSurah?.name || 'Quran'}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-72 border-l border-white/10 p-4 overflow-y-auto bg-black/20">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              <StatsCard
                icon={Icons.Users}
                label="Total Readers"
                value={stats.totalReaders.toLocaleString()}
                color="#10B981"
                subtext="Around the world"
              />
              <StatsCard
                icon={Icons.MapPin}
                label="Active Locations"
                value={stats.activeCountries}
                color="#3B82F6"
                subtext="Cities & regions"
              />
              <StatsCard
                icon={Icons.BookOpen}
                label="Top Surah"
                value={topSurah?.name || 'Al-Fatiha'}
                color="#F59E0B"
                subtext={`${stats.topSurahReaders.toLocaleString()} readers`}
              />
            </div>

            {/* Activity Feed */}
            <ActivityFeed activities={activities} />

            {/* Message */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <p className="text-emerald-400 text-sm text-center">
                🤲 You are never alone in your journey with the Quran
              </p>
              <p className="text-white/40 text-xs text-center mt-2">
                Join millions of Muslims reading together
              </p>
            </div>
          </div>
        </div>

        {/* Selected Activity Detail */}
        {selectedActivity && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-xl">
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"
            >
              <Icons.X className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Icons.MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold">{selectedActivity.city}</h4>
                <p className="text-emerald-400 text-sm">
                  {selectedActivity.readers.toLocaleString()} people reading
                </p>
                <p className="text-white/60 text-xs">
                  Most popular: Surah {selectedActivity.surahName}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
});

export default GlobalUmmahPulse;
