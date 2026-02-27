/**
 * Global Ummah Pulse - Live World Map
 * Real-time visualization of Quran readers around the world
 * Uses Leaflet for real interactive map
 */

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import { useTranslation } from '../../contexts/LocaleContext';

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom Kaaba icon for Makkah
const kaabaIcon = L.divIcon({
  html: '<div style="font-size: 24px; text-shadow: 0 0 8px rgba(0,0,0,0.8);">🕋</div>',
  className: 'kaaba-marker',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

// Custom Mosque icon for Madinah
const mosqueIcon = L.divIcon({
  html: '<div style="font-size: 20px; text-shadow: 0 0 8px rgba(0,0,0,0.8);">🕌</div>',
  className: 'mosque-marker',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

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

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.log('API not available (dev mode)');
      return false;
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.log('Failed to track activity:', error.message);
    return false;
  }
};

// Map recenter component
const MapController = memo(function MapController({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
});

// Component to handle map size invalidation - fixes tiles not rendering
const MapSizeInvalidator = memo(function MapSizeInvalidator() {
  const map = useMap();

  useEffect(() => {
    // Invalidate size on mount after a short delay
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // Also invalidate on window resize
    const handleResize = () => {
      map.invalidateSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);

  return null;
});

// Animated pulsing marker for city activity (grouped)
const CityMarker = memo(function CityMarker({ position, city, onClick }) {
  const { t } = useTranslation();
  const totalVisitors = (city.readers || 0) + (city.browsing || 0);
  const size = Math.min(30, 8 + totalVisitors * 3);
  // Green for readers, blue for browsers, mix if both
  const hasReaders = city.readers > 0;
  const hasBrowsers = city.browsing > 0;
  const color = hasReaders && hasBrowsers ? '#8B5CF6' : // Purple for mixed
                hasReaders ? '#10B981' : // Green for readers
                '#3B82F6'; // Blue for browsers

  return (
    <CircleMarker
      center={position}
      radius={size / 2}
      pathOptions={{
        color: color,
        fillColor: color,
        fillOpacity: 0.6,
        weight: 2,
        opacity: 0.8,
      }}
      eventHandlers={{
        click: () => onClick(city),
      }}
    >
      <Popup>
        <div className="text-center p-2 min-w-[120px]">
          <p className="font-bold text-gray-800">{city.name}</p>
          <p className="text-gray-500 text-xs mb-1">{city.country}</p>
          <div className="flex justify-center gap-3 text-xs">
            {city.readers > 0 && (
              <span className="text-emerald-600">{t('ummah.readingCount', '📖 {{count}} reading', { count: city.readers })}</span>
            )}
            {city.browsing > 0 && (
              <span className="text-blue-600">{t('ummah.browsingCount', '👁 {{count}} browsing', { count: city.browsing })}</span>
            )}
          </div>
          {city.activities?.[0]?.surahName && (
            <p className="text-gray-400 text-xs mt-1">
              {t('ummah.readingLabel', 'Reading')}: {city.activities[0].surahName}
            </p>
          )}
        </div>
      </Popup>
    </CircleMarker>
  );
});

// Individual visitor marker
const VisitorMarker = memo(function VisitorMarker({ visitor }) {
  const { t } = useTranslation();
  const isReading = visitor.status === 'reading';
  const color = isReading ? '#10B981' : '#3B82F6';
  const size = isReading ? 8 : 6;

  return (
    <CircleMarker
      center={[visitor.lat, visitor.lng]}
      radius={size / 2}
      pathOptions={{
        color: color,
        fillColor: color,
        fillOpacity: 0.7,
        weight: 1,
        opacity: 0.9,
      }}
    >
      <Popup>
        <div className="text-center p-1 min-w-[100px]">
          <p className="font-bold text-gray-700 text-sm">{visitor.city}</p>
          <p className={`text-xs ${isReading ? 'text-emerald-600' : 'text-blue-600'}`}>
            {isReading ? `📖 ${t('ummah.readingLabel', 'Reading')} ${visitor.surahName || t('ummah.quran', 'Quran')}` : `👁 ${t('ummah.browsingLabel', 'Browsing')}`}
          </p>
        </div>
      </Popup>
    </CircleMarker>
  );
});

// Real World Map Component using Leaflet
const RealWorldMap = memo(function RealWorldMap({ cities, liveVisitors, onCityClick, selectedCity }) {
  const { t } = useTranslation();
  // Holy cities always shown
  const holyCities = [
    { name: t('ummah.makkah', 'Makkah'), lat: 21.4225, lng: 39.8262, icon: kaabaIcon, description: t('ummah.holiestCity', 'The Holiest City') },
    { name: t('ummah.madinah', 'Madinah'), lat: 24.5247, lng: 39.5692, icon: mosqueIcon, description: t('ummah.cityOfProphet', 'City of the Prophet') },
  ];

  return (
    <MapContainer
      center={[25, 45]} // Center on Middle East
      zoom={2}
      minZoom={2}
      maxZoom={12}
      className="w-full h-full"
      style={{ minHeight: '300px', background: '#0f172a' }}
      zoomControl={false}
      attributionControl={false}
    >
      {/* Component to fix map tile rendering */}
      <MapSizeInvalidator />
      {/* Dark themed map tiles */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Map controller for recentering */}
      {selectedCity && (
        <MapController center={[selectedCity.lat, selectedCity.lng]} />
      )}

      {/* Holy cities markers */}
      {holyCities.map((city) => (
        <Marker
          key={city.name}
          position={[city.lat, city.lng]}
          icon={city.icon}
        >
          <Popup>
            <div className="text-center p-2">
              <p className="font-bold text-amber-600 text-lg">{city.name}</p>
              <p className="text-gray-600 text-sm">{city.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* City grouped markers (larger, shows aggregate) */}
      {cities.map((city) => (
        <CityMarker
          key={city.id}
          position={[city.lat, city.lng]}
          city={city}
          onClick={onCityClick}
        />
      ))}

      {/* Individual visitor markers (smaller dots) */}
      {liveVisitors.map((visitor, index) => (
        <VisitorMarker
          key={`visitor-${visitor.odUserId || index}`}
          visitor={visitor}
        />
      ))}
    </MapContainer>
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

// Live Activity Feed - shows cities and visitors
const ActivityFeed = memo(function ActivityFeed({ cities, liveVisitors, onSelectCity }) {
  const { t } = useTranslation();
  // Sort cities by total activity
  const sortedCities = [...cities]
    .sort((a, b) => (b.readers + b.browsing) - (a.readers + a.browsing))
    .slice(0, 5);

  const totalLive = liveVisitors?.length || 0;

  return (
    <div className="space-y-2">
      <h4 className="text-white/60 text-xs uppercase tracking-wide mb-3">
        {t('ummah.liveActivity', 'Live Activity')} {totalLive > 0 && <span className="text-emerald-400">({totalLive} {t('ummah.online', 'online')})</span>}
      </h4>
      {sortedCities.length === 0 ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
            <Icons.Globe className="w-6 h-6 text-white/30" />
          </div>
          <p className="text-white/40 text-sm">{t('ummah.noVisitors', 'No visitors right now')}</p>
          <p className="text-white/30 text-xs mt-1">{t('ummah.youWillAppear', "You'll appear on the map!")}</p>
        </div>
      ) : (
        sortedCities.map((city, index) => (
          <div
            key={city.id}
            className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all"
            style={{ animation: `fadeIn 0.3s ease ${index * 0.1}s both` }}
            onClick={() => onSelectCity(city)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${city.readers > 0 ? 'bg-emerald-400' : 'bg-blue-400'}`}
                style={{ animation: 'pulse 2s infinite' }}
              />
              <div>
                <span className="text-white text-sm">{city.name}</span>
                <span className="text-white/40 text-xs ml-1">({city.country})</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex gap-2 text-xs">
                {city.readers > 0 && <span className="text-emerald-400">📖 {city.readers}</span>}
                {city.browsing > 0 && <span className="text-blue-400">👁 {city.browsing}</span>}
              </div>
              {city.activities?.[0]?.surahName && (
                <p className="text-white/30 text-xs">{city.activities[0].surahName}</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
});

// Main Component
const GlobalUmmahPulse = memo(function GlobalUmmahPulse({ isVisible, onClose }) {
  const { t, language, isRTL } = useTranslation();
  const [cities, setCities] = useState([]);
  const [liveVisitors, setLiveVisitors] = useState([]);
  const [stats, setStats] = useState({
    liveNow: 0,
    liveReading: 0,
    liveBrowsing: 0,
    activeLocations: 0,
    todayVisitors: 0,
    todayReadings: 0,
    allTimeVisits: 0,
  });
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLive, setIsLive] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const intervalRef = useRef(null);

  // Fetch real data from API - always show real-time data only
  const fetchRealData = useCallback(async () => {
    try {
      setConnectionStatus('connecting');
      const response = await fetch('/api/ummah-pulse');

      // Check if response is JSON (not HTML fallback from dev server)
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('API not available');
      }

      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      console.log('[Ummah Pulse] API Response:', data);

      if (data.success) {
        // Set cities (grouped by location)
        setCities(data.cities || []);

        // Set individual live visitors
        setLiveVisitors(data.liveVisitors || []);

        // Get popular surah from today's readings
        const popularSurahs = data.popularSurahsToday || {};
        const topSurahEntry = Object.entries(popularSurahs).sort(([,a], [,b]) => b - a)[0];
        const topSurahId = topSurahEntry ? parseInt(topSurahEntry[0]) : 1;
        const topSurahReaders = topSurahEntry ? topSurahEntry[1] : 0;

        setStats({
          // Live stats
          liveNow: data.stats?.liveNow || 0,
          liveReading: data.stats?.liveReading || 0,
          liveBrowsing: data.stats?.liveBrowsing || 0,
          activeLocations: data.stats?.activeLocations || 0,
          // Today stats
          todayVisitors: data.stats?.todayVisitors || 0,
          todayUniqueVisitors: data.stats?.todayUniqueVisitors || 0,
          todayReadings: data.stats?.todayReadings || 0,
          // All-time stats
          allTimeVisits: data.stats?.allTimeVisits || 0,
          // Top surah
          topSurahId,
          topSurahReaders,
        });
        setConnectionStatus('live');
        return;
      }

      throw new Error('No data from API');
    } catch (error) {
      console.log('Ummah Pulse API:', error.message);
      // Always show real-time empty state - no simulated data
      setCities([]);
      setLiveVisitors([]);
      setStats({
        liveNow: 0,
        liveReading: 0,
        liveBrowsing: 0,
        activeLocations: 0,
        todayVisitors: 0,
        todayUniqueVisitors: 0,
        todayReadings: 0,
        allTimeVisits: 0,
        topSurahId: 1,
        topSurahReaders: 0,
      });
      setConnectionStatus('offline');
    }
  }, []);

  // Initialize and update periodically
  useEffect(() => {
    if (!isVisible) return;

    fetchRealData();

    if (isLive) {
      intervalRef.current = setInterval(fetchRealData, 5000); // Update every 5 seconds for real-time feel
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, isLive, fetchRealData]);

  const handleCityClick = useCallback((city) => {
    setSelectedCity(city);
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
        <div className="flex-shrink-0 p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center relative flex-shrink-0">
                <Icons.Globe className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-white">{t('ummah.title', 'Global Ummah Pulse')}</h2>
                <p className="text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    connectionStatus === 'live' ? 'bg-emerald-400 animate-pulse' :
                    connectionStatus === 'connecting' ? 'bg-amber-400 animate-pulse' :
                    'bg-red-400'
                  }`} />
                  {!isLive ? t('ummah.paused', 'Paused') :
                    connectionStatus === 'live' ? t('ummah.live', 'Live') :
                    connectionStatus === 'connecting' ? t('ummah.connecting', 'Connecting...') :
                    t('ummah.offline', 'Offline')
                  } • {stats.liveNow > 0 ? `${stats.liveNow} ${t('ummah.onlineNow', 'online now')}` : t('ummah.waitingForVisitors', 'Waiting for visitors...')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsLive(!isLive)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isLive
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/10 text-white/60 border border-white/20'
                }`}
              >
                {isLive ? `● ${t('ummah.live', 'Live')}` : `○ ${t('ummah.paused', 'Paused')}`}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <Icons.X className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Content - map needs overflow visible for tiles */}
        <div className="flex-1 flex flex-col sm:flex-row min-h-[400px]" style={{ overflow: 'visible' }}>
          {/* Map Area - ensure minimum height for Leaflet to render */}
          <div className="flex-1 relative min-h-[300px] sm:min-h-[400px]" style={{ minHeight: '300px', overflow: 'visible' }}>
            <RealWorldMap
              cities={cities}
              liveVisitors={liveVisitors}
              onCityClick={handleCityClick}
              selectedCity={selectedCity}
            />

            {/* Legend */}
            <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-black/70 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/10 z-[1000]`}>
              <div className="flex items-center gap-3 sm:gap-4 text-xs">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
                  <span className="text-white/60">{t('ummah.readingLabel', 'Reading')}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400" />
                  <span className="text-white/60">{t('ummah.browsingLabel', 'Browsing')}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>🕋</span>
                  <span className="text-white/60">{t('ummah.makkah', 'Makkah')}</span>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute top-4 left-4 right-4 flex gap-2 sm:gap-3 flex-wrap z-[1000]">
              <div className="bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 border border-white/10">
                <p className="text-white/60 text-xs">{t('ummah.liveNow', 'Live Now')}</p>
                <p className="text-emerald-400 font-bold text-sm sm:text-base">
                  📖 {stats.liveReading} {t('ummah.readingLabel', 'reading')} • 👁 {stats.liveBrowsing} {t('ummah.browsingLabel', 'browsing')}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full sm:w-72 border-t sm:border-t-0 sm:border-l border-white/10 p-4 overflow-y-auto bg-black/20 max-h-[40vh] sm:max-h-none">
            {/* Live Stats Grid */}
            <h4 className="text-white/60 text-xs uppercase tracking-wide mb-3">{t('ummah.liveNow', 'Live Now')}</h4>
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <StatsCard
                icon={Icons.Users}
                label={t('ummah.online', 'Online')}
                value={stats.liveNow || 0}
                color="#8B5CF6"
                subtext={`${stats.liveReading || 0} ${t('ummah.readingLabel', 'reading')}`}
              />
              <StatsCard
                icon={Icons.MapPin}
                label={t('ummah.locations', 'Locations')}
                value={stats.activeLocations || 0}
                color="#3B82F6"
              />
              <StatsCard
                icon={Icons.BookOpen}
                label={t('ummah.topSurah', 'Top Surah')}
                value={topSurah?.name || 'Al-Fatiha'}
                color="#F59E0B"
              />
            </div>

            {/* Today's Stats */}
            <h4 className="text-white/60 text-xs uppercase tracking-wide mb-3">{t('ummah.todaysActivity', "Today's Activity")}</h4>
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 mb-4 sm:mb-6">
              <div className="bg-white/5 rounded-lg p-2 sm:p-3 border border-white/10">
                <p className="text-white/40 text-xs">{t('ummah.visitors', 'Visitors')}</p>
                <p className="text-white font-bold text-sm sm:text-lg">{(stats.todayVisitors || 0).toLocaleString()}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2 sm:p-3 border border-white/10">
                <p className="text-white/40 text-xs">{t('ummah.unique', 'Unique')}</p>
                <p className="text-cyan-400 font-bold text-sm sm:text-lg">{(stats.todayUniqueVisitors || 0).toLocaleString()}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2 sm:p-3 border border-white/10">
                <p className="text-white/40 text-xs">{t('ummah.readings', 'Readings')}</p>
                <p className="text-emerald-400 font-bold text-sm sm:text-lg">{(stats.todayReadings || 0).toLocaleString()}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2 sm:p-3 border border-white/10">
                <p className="text-white/40 text-xs">{t('ummah.allTime', 'All-Time')}</p>
                <p className="text-amber-400 font-bold text-sm sm:text-lg">{(stats.allTimeVisits || 0).toLocaleString()}</p>
              </div>
            </div>

            {/* Activity Feed */}
            <ActivityFeed cities={cities} liveVisitors={liveVisitors} onSelectCity={handleCityClick} />

            {/* Message */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <p className="text-emerald-400 text-xs sm:text-sm text-center">
                {t('ummah.inspirationalMessage', 'You are never alone in your journey with the Quran')}
              </p>
              <p className="text-white/40 text-xs text-center mt-1 sm:mt-2">
                {t('ummah.realTimeData', 'Real-time data from w3Quran readers')}
              </p>
            </div>
          </div>
        </div>

        {/* Selected City Detail */}
        {selectedCity && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-xl z-[1001]">
            <button
              onClick={() => setSelectedCity(null)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"
            >
              <Icons.X className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Icons.MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold">{selectedCity.name}</h4>
                <p className="text-white/60 text-xs">{selectedCity.country}</p>
                <div className="flex gap-3 mt-1">
                  {selectedCity.readers > 0 && (
                    <span className="text-emerald-400 text-sm">📖 {selectedCity.readers} {t('ummah.readingLabel', 'reading')}</span>
                  )}
                  {selectedCity.browsing > 0 && (
                    <span className="text-blue-400 text-sm">👁 {selectedCity.browsing} {t('ummah.browsingLabel', 'browsing')}</span>
                  )}
                </div>
                {selectedCity.activities?.[0]?.surahName && (
                  <p className="text-white/50 text-xs mt-1">
                    {t('ummah.readingLabel', 'Reading')}: {selectedCity.activities[0].surahName}
                  </p>
                )}
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
        .leaflet-container {
          background: #0f172a !important;
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
        }
        .leaflet-popup-content {
          color: white;
          margin: 8px 12px;
        }
        .leaflet-popup-tip {
          background: rgba(15, 23, 42, 0.95);
        }
        .kaaba-marker, .mosque-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-control-attribution {
          display: none;
        }
      `}</style>
    </div>
  );
});

export default GlobalUmmahPulse;
