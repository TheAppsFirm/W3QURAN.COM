/**
 * Prophetic Stories World Map - Enhanced Quranic Geography
 * Features: Animated journeys, Sacred mosques, Revelation sites, Qibla compass,
 * Prophet graves, Caves, 3D Globe mode, Audio narration
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, useMapEvents, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import {
  PROPHETIC_LOCATIONS,
  PROPHET_JOURNEYS,
  DESTROYED_NATIONS,
  MIRACLES_LOCATIONS,
  QURANIC_ANIMALS,
  TRADE_ROUTES,
  TIMELINE_EVENTS,
  SACRED_MOSQUES,
  REVELATION_LOCATIONS,
  SPECIAL_LOCATIONS,
  PROPHET_GRAVES,
  QURANIC_CAVES,
  getAllLocations,
  getAllJourneys,
  getAllDestroyedNations,
  getAllMiracles,
  getAllAnimals,
  getAllTradeRoutes,
  getTimelineEvents,
  getAllSacredMosques,
  getAllRevelationLocations,
  getAllSpecialLocations,
  getAllProphetGraves,
  getAllQuranicCaves,
  calculateQibla,
  distanceToMakkah,
} from '../../data/propheticLocations';

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Map tile providers
const MAP_STYLES = {
  dark: { name: 'Dark', url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' },
  satellite: { name: 'Satellite', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' },
  terrain: { name: 'Terrain', url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' },
  standard: { name: 'Standard', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' },
};

// Enhanced layer configurations
const LAYERS = {
  locations: { id: 'locations', name: 'Sites', icon: 'MapPin', color: '#F59E0B' },
  mosques: { id: 'mosques', name: 'Mosques', icon: 'Star', color: '#10B981' },
  revelations: { id: 'revelations', name: 'Revelations', icon: 'BookOpen', color: '#8B5CF6' },
  destroyed: { id: 'destroyed', name: 'Destroyed', icon: 'AlertCircle', color: '#DC2626' },
  miracles: { id: 'miracles', name: 'Miracles', icon: 'Sparkles', color: '#EC4899' },
  graves: { id: 'graves', name: 'Graves', icon: 'Heart', color: '#6B7280' },
  caves: { id: 'caves', name: 'Caves', icon: 'Mountain', color: '#06B6D4' },
  journeys: { id: 'journeys', name: 'Journeys', icon: 'Route', color: '#F472B6' },
  animals: { id: 'animals', name: 'Animals', icon: 'Heart', color: '#22C55E' },
};

// Prophet Timeline Data with detailed information
const PROPHETS_TIMELINE = [
  {
    id: 'adam',
    name: 'Adam',
    nameAr: 'آدم',
    periodStart: -4000,
    periodEnd: -3000,
    color: '#22C55E',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'First human and prophet, created by Allah. Built the first Kaaba.',
    keyEvents: ['Creation from clay', 'Life in Paradise', 'Descended to Earth', 'Built the Kaaba'],
    verses: ['2:30-37', '7:11-25', '20:115-123'],
    icon: '🌍'
  },
  {
    id: 'nuh',
    name: 'Nuh (Noah)',
    nameAr: 'نوح',
    periodStart: -3000,
    periodEnd: -2500,
    color: '#3B82F6',
    location: 'ark',
    coords: [39.4, 44.2],
    story: 'Preached for 950 years. Built the Ark to save believers from the great flood.',
    keyEvents: ['950 years of preaching', 'Building the Ark', 'The Great Flood', 'Ark landed on Mt. Judi'],
    verses: ['11:25-48', '71:1-28', '23:23-30'],
    icon: '🚢'
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim (Abraham)',
    nameAr: 'إبراهيم',
    periodStart: -2000,
    periodEnd: -1850,
    color: '#F59E0B',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Father of prophets. Rebuilt the Kaaba with Ismail. Tested with the sacrifice.',
    keyEvents: ['Destroyed idols', 'Survived the fire', 'Rebuilt the Kaaba', 'Sacrifice of Ismail'],
    verses: ['2:124-132', '14:35-41', '37:99-113'],
    icon: '🔥'
  },
  {
    id: 'ismail',
    name: 'Ismail (Ishmael)',
    nameAr: 'إسماعيل',
    periodStart: -1900,
    periodEnd: -1800,
    color: '#EC4899',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Son of Ibrahim. Helped build the Kaaba. Father of Arab lineage to Prophet Muhammad ﷺ.',
    keyEvents: ['Left in Makkah as infant', 'Zamzam miracle', 'Built Kaaba with Ibrahim', 'Ancestor of Muhammad ﷺ'],
    verses: ['2:125-127', '37:102-107', '19:54-55'],
    icon: '💧'
  },
  {
    id: 'yaqub',
    name: 'Yaqub (Jacob)',
    nameAr: 'يعقوب',
    periodStart: -1800,
    periodEnd: -1700,
    color: '#8B5CF6',
    location: 'canaan',
    coords: [31.5, 35.2],
    story: 'Son of Ishaq. Father of 12 sons including Yusuf. Also known as Israel.',
    keyEvents: ['Father of 12 tribes', 'Grief for Yusuf', 'Reunion in Egypt', 'Named Israel'],
    verses: ['12:4-18', '12:84-100'],
    icon: '👨‍👦‍👦'
  },
  {
    id: 'yusuf',
    name: 'Yusuf (Joseph)',
    nameAr: 'يوسف',
    periodStart: -1700,
    periodEnd: -1600,
    color: '#06B6D4',
    location: 'egypt',
    coords: [30.0444, 31.2357],
    story: 'Known for his beauty and dream interpretation. Rose from slave to minister of Egypt.',
    keyEvents: ['Thrown in well', 'Sold as slave', 'Prison and dreams', 'Minister of Egypt'],
    verses: ['12:1-111'],
    icon: '⭐'
  },
  {
    id: 'musa',
    name: 'Musa (Moses)',
    nameAr: 'موسى',
    periodStart: -1400,
    periodEnd: -1280,
    color: '#DC2626',
    location: 'sinai',
    coords: [28.5456, 33.9756],
    story: 'Spoke directly to Allah. Led Bani Israel out of Egypt. Received the Torah.',
    keyEvents: ['Basket in Nile', 'Burning bush', 'Parting the sea', 'Mount Sinai revelation'],
    verses: ['20:9-98', '28:3-43', '7:103-162'],
    icon: '📜'
  },
  {
    id: 'dawud',
    name: 'Dawud (David)',
    nameAr: 'داود',
    periodStart: -1040,
    periodEnd: -970,
    color: '#10B981',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'King and prophet. Defeated Jalut (Goliath). Given the Zabur (Psalms). Beautiful voice.',
    keyEvents: ['Defeated Goliath', 'King of Israel', 'Given Zabur', 'Iron made soft for him'],
    verses: ['2:251', '21:78-80', '34:10-11'],
    icon: '🎵'
  },
  {
    id: 'sulayman',
    name: 'Sulayman (Solomon)',
    nameAr: 'سليمان',
    periodStart: -970,
    periodEnd: -931,
    color: '#F472B6',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'Son of Dawud. Commanded jinn, wind, and animals. Built magnificent temple.',
    keyEvents: ['Understood animals', 'Commanded jinn', 'Queen of Sheba visit', 'Built the temple'],
    verses: ['27:15-44', '21:81-82', '34:12-14'],
    icon: '👑'
  },
  {
    id: 'isa',
    name: 'Isa (Jesus)',
    nameAr: 'عيسى',
    periodStart: 1,
    periodEnd: 33,
    color: '#A855F7',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'Born miraculously to Maryam. Given the Injeel. Performed miracles. Raised to heaven.',
    keyEvents: ['Miraculous birth', 'Spoke in cradle', 'Healed the sick', 'Raised to heaven'],
    verses: ['3:45-55', '5:110-118', '19:16-35'],
    icon: '✨'
  },
  {
    id: 'muhammad',
    name: 'Muhammad ﷺ',
    nameAr: 'محمد ﷺ',
    periodStart: 570,
    periodEnd: 632,
    color: '#10B981',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Final Prophet and Messenger. Received the Quran. Established Islam.',
    keyEvents: ['First revelation', 'Isra & Miraj', 'Hijra to Madinah', 'Conquest of Makkah'],
    verses: ['33:40', '48:29', '3:144'],
    icon: '🌙'
  }
];

// Custom marker icons with animations
const createMarkerIcon = (color, size = 28, isSelected = false, iconType = 'default') => {
  const iconHtml = iconType === 'mosque'
    ? `<div style="font-size: ${size * 0.5}px; text-align: center; line-height: ${size}px;">🕌</div>`
    : iconType === 'grave'
    ? `<div style="font-size: ${size * 0.5}px; text-align: center; line-height: ${size}px;">⭐</div>`
    : iconType === 'cave'
    ? `<div style="font-size: ${size * 0.5}px; text-align: center; line-height: ${size}px;">🏔️</div>`
    : iconType === 'revelation'
    ? `<div style="font-size: ${size * 0.5}px; text-align: center; line-height: ${size}px;">📖</div>`
    : `<div style="width: ${size*0.4}px; height: ${size*0.4}px; background: white; border-radius: 50%; margin: ${size*0.3}px auto; opacity: 0.9;"></div>`;

  return L.divIcon({
    html: `<div style="
      width: ${size}px; height: ${size}px;
      background: ${color}; border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.4), 0 0 ${isSelected ? '20px' : '10px'} ${color}80;
      ${isSelected ? 'animation: markerPulse 1.5s infinite;' : ''}
      display: flex; align-items: center; justify-content: center;
    ">${iconHtml}</div>`,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
};

// Animated Polyline Component
const AnimatedPolyline = memo(({ positions, color, isActive, onClick, name }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <>
      {/* Base path */}
      <Polyline
        positions={positions}
        pathOptions={{
          color: color,
          weight: isActive ? 5 : 3,
          opacity: isActive ? 0.9 : 0.4,
          dashArray: isActive ? '15, 10' : '8, 4',
          dashOffset: isActive ? -offset : 0,
        }}
        eventHandlers={{ click: onClick }}
      />
      {/* Animated glow effect when active */}
      {isActive && (
        <Polyline
          positions={positions}
          pathOptions={{
            color: color,
            weight: 8,
            opacity: 0.2,
            lineCap: 'round',
          }}
        />
      )}
    </>
  );
});

// Qibla Compass Overlay
const QiblaCompass = memo(({ userLocation, qiblaAngle, distance }) => {
  if (!userLocation) return null;

  return (
    <div className="absolute bottom-20 right-4 z-[1000]">
      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-4 border border-amber-500/30 shadow-xl">
        <div className="text-center mb-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Qibla Direction</span>
        </div>

        {/* Compass Circle */}
        <div className="relative w-24 h-24 mx-auto">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/50" />

          {/* Cardinal directions */}
          {['N', 'E', 'S', 'W'].map((dir, i) => (
            <div
              key={dir}
              className="absolute text-white/50 text-[10px] font-bold"
              style={{
                top: i === 0 ? '2px' : i === 2 ? 'auto' : '50%',
                bottom: i === 2 ? '2px' : 'auto',
                left: i === 3 ? '4px' : i === 1 ? 'auto' : '50%',
                right: i === 1 ? '4px' : 'auto',
                transform: (i === 0 || i === 2) ? 'translateX(-50%)' : 'translateY(-50%)',
              }}
            >
              {dir}
            </div>
          ))}

          {/* Kaaba icon at center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-amber-500 rounded-sm flex items-center justify-center text-black text-xs">
              🕋
            </div>
          </div>

          {/* Qibla arrow */}
          <div
            className="absolute inset-0"
            style={{ transform: `rotate(${qiblaAngle}deg)` }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderBottom: '16px solid #F59E0B',
              }}
            />
          </div>
        </div>

        {/* Distance info */}
        <div className="text-center mt-3">
          <div className="text-amber-400 text-lg font-bold">{Math.round(qiblaAngle)}°</div>
          <div className="text-white/60 text-xs">{distance.toLocaleString()} km to Kaaba</div>
        </div>
      </div>
    </div>
  );
});

// Map Controls
const MapControls = memo(({ onZoomIn, onZoomOut, onReset, onLocateUser, isLocating, coords }) => (
  <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
    <div className="bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
      <button onClick={onZoomIn} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20" title="Zoom In">
        <Icons.ZoomIn className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button onClick={onZoomOut} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20" title="Zoom Out">
        <Icons.ZoomOut className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button onClick={onReset} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20" title="Reset View">
        <Icons.Refresh className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button
        onClick={onLocateUser}
        className={`w-9 h-9 flex items-center justify-center hover:bg-white/20 ${isLocating ? 'text-amber-400 animate-pulse' : 'text-white'}`}
        title="Find My Location & Qibla"
      >
        <Icons.Compass className="w-4 h-4" />
      </button>
    </div>
    {coords && (
      <div className="bg-black/80 backdrop-blur-sm rounded-xl p-2 border border-white/20 text-center">
        <div className="text-white/50 text-[9px] uppercase">Coords</div>
        <div className="text-white text-[10px] font-mono">{coords.lat.toFixed(3)}, {coords.lng.toFixed(3)}</div>
      </div>
    )}
  </div>
));

// Map Events Handler
const MapEventHandler = memo(({ onCoordsChange, onMapRef }) => {
  const map = useMap();
  useEffect(() => { onMapRef && onMapRef(map); }, [map, onMapRef]);
  useMapEvents({
    mousemove: (e) => onCoordsChange && onCoordsChange(e.latlng),
  });
  return null;
});

// Layer Toggle Button
const LayerToggle = memo(({ layer, isActive, onClick, count }) => {
  const Icon = Icons[layer.icon] || Icons.MapPin;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-2 py-1 rounded-lg transition-all text-[11px] ${
        isActive ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white hover:bg-white/10'
      }`}
      style={isActive ? { borderBottom: `2px solid ${layer.color}` } : {}}
    >
      <Icon className="w-3 h-3" style={{ color: isActive ? layer.color : undefined }} />
      <span className="hidden sm:inline">{layer.name}</span>
      {count > 0 && <span className="text-[9px] opacity-60">({count})</span>}
    </button>
  );
});

// 3D Globe Component using CSS 3D transforms
const Globe3D = memo(({ locations, onMarkerClick, selectedItem, activeProphet }) => {
  const [rotation, setRotation] = useState({ x: 23, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const lastPosition = useRef({ x: 0, y: 0 });
  const globeRef = useRef(null);

  // Auto-rotate
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => ({ ...prev, y: (prev.y + 0.3) % 360 }));
    }, 50);
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Convert lat/lng to 3D position on globe
  const latLngTo3D = (lat, lng, radius = 160) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return { x, y, z };
  };

  // Check if point is visible (front of globe)
  const isVisible = (lat, lng) => {
    const { z } = latLngTo3D(lat, lng);
    const rotatedZ = z * Math.cos(rotation.y * Math.PI / 180) -
                     latLngTo3D(lat, lng).x * Math.sin(rotation.y * Math.PI / 180);
    return rotatedZ > -20;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastPosition.current.x;
    const deltaY = e.clientY - lastPosition.current.y;
    setRotation(prev => ({
      x: Math.max(-60, Math.min(60, prev.x + deltaY * 0.3)),
      y: prev.y + deltaX * 0.5
    }));
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    const touch = e.touches[0];
    lastPosition.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastPosition.current.x;
    const deltaY = touch.clientY - lastPosition.current.y;
    setRotation(prev => ({
      x: Math.max(-60, Math.min(60, prev.x + deltaY * 0.3)),
      y: prev.y + deltaX * 0.5
    }));
    lastPosition.current = { x: touch.clientX, y: touch.clientY };
  };

  // Fly to location
  const flyToLocation = (coords) => {
    const targetY = -coords[1];
    setAutoRotate(false);
    setRotation({ x: coords[0] * 0.3, y: targetY });
  };

  // Fly to active prophet
  useEffect(() => {
    if (activeProphet) {
      flyToLocation(activeProphet.coords);
    }
  }, [activeProphet]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Globe container */}
      <div
        ref={globeRef}
        className="relative cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1000px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Globe sphere */}
        <div
          className="relative transition-transform duration-75"
          style={{
            width: '320px',
            height: '320px',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Globe surface with gradient */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #1e40af 0%, #1e3a5f 30%, #0f172a 70%, #020617 100%)',
              boxShadow: `
                inset -30px -30px 60px rgba(0,0,0,0.8),
                inset 20px 20px 40px rgba(59,130,246,0.2),
                0 0 60px rgba(59,130,246,0.3),
                0 0 120px rgba(59,130,246,0.1)
              `,
            }}
          />

          {/* Continent outlines (simplified) */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23047857' opacity='0.3' d='M20,30 Q30,25 35,35 T40,45 Q35,50 25,48 T20,30'/%3E%3Cpath fill='%23047857' opacity='0.3' d='M55,20 Q65,15 75,25 T80,40 Q75,50 60,45 T55,20'/%3E%3Cpath fill='%23047857' opacity='0.3' d='M45,55 Q55,50 60,60 T55,75 Q45,80 40,70 T45,55'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
            }}
          />

          {/* Grid lines */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`lat-${i}`}
              className="absolute rounded-full border border-cyan-500/10"
              style={{
                width: `${320 - i * 40}px`,
                height: `${320 - i * 40}px`,
                left: `${i * 20}px`,
                top: `${i * 20}px`,
              }}
            />
          ))}

          {/* Location markers */}
          {locations.map(loc => {
            const { x, y, z } = latLngTo3D(loc.coords[0], loc.coords[1], 162);
            const visible = isVisible(loc.coords[0], loc.coords[1]);
            const isActive = activeProphet?.id === loc.prophets?.[0]?.toLowerCase();
            const isSelected = selectedItem?.id === loc.id;

            return (
              <div
                key={loc.id}
                className={`absolute transition-all duration-300 cursor-pointer ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate3d(${x}px, ${-y}px, ${z}px) translate(-50%, -50%)`,
                  zIndex: z > 0 ? 10 : 1,
                }}
                onClick={() => onMarkerClick(loc, 'location')}
              >
                <div
                  className={`relative ${isActive || isSelected ? 'scale-150' : ''} transition-transform`}
                  style={{
                    width: '12px',
                    height: '12px',
                    background: loc.color || '#F59E0B',
                    borderRadius: '50%',
                    boxShadow: `0 0 ${isActive ? '20px' : '8px'} ${loc.color || '#F59E0B'}`,
                    border: '2px solid white',
                  }}
                />
                {(isActive || isSelected) && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-white font-bold bg-black/70 px-2 py-0.5 rounded">
                    {loc.name}
                  </div>
                )}
              </div>
            );
          })}

          {/* Kaaba marker - always prominent */}
          <div
            className="absolute transition-all duration-300"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate3d(${latLngTo3D(21.4225, 39.8262, 165).x}px, ${-latLngTo3D(21.4225, 39.8262, 165).y}px, ${latLngTo3D(21.4225, 39.8262, 165).z}px) translate(-50%, -50%)`,
              zIndex: 100,
              opacity: isVisible(21.4225, 39.8262) ? 1 : 0,
            }}
          >
            <div className="relative animate-pulse">
              <div className="w-4 h-4 bg-amber-400 rounded-sm flex items-center justify-center text-[10px] shadow-lg shadow-amber-400/50">
                🕋
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-lg backdrop-blur-sm transition-all ${autoRotate ? 'bg-amber-500/30 text-amber-400' : 'bg-white/10 text-white/60'}`}
          title={autoRotate ? 'Stop rotation' : 'Auto rotate'}
        >
          <Icons.Refresh className="w-4 h-4" />
        </button>
        <button
          onClick={() => setRotation({ x: 23, y: 0 })}
          className="p-2 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 backdrop-blur-sm"
          title="Reset view"
        >
          <Icons.Globe3D className="w-4 h-4" />
        </button>
      </div>

      {/* Active prophet indicator */}
      {activeProphet && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{activeProphet.icon}</span>
            <div>
              <div className="text-white font-bold">{activeProphet.name}</div>
              <div className="text-white/50 text-xs">{activeProphet.nameAr}</div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-white/40 text-xs">
        Drag to rotate • Click markers for details
      </div>
    </div>
  );
});

// Enhanced Timeline Slider with Prophet Details
const TimelineSlider = memo(({ value, onChange, events, prophets = [], onProphetClick, onFlyToLocation }) => {
  const minYear = -4000;
  const maxYear = 700;
  const currentEvent = (events || []).filter(e => e.year <= value).pop();

  // Find active prophet(s) for current year
  const activeProphets = (prophets || []).filter(p => value >= p.periodStart && value <= p.periodEnd);
  const mainProphet = activeProphets[activeProphets.length - 1]; // Most recent one

  return (
    <div className="absolute bottom-4 left-4 right-4 z-[1000] max-w-3xl mx-auto">
      <div className="bg-black/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Prophet Card - Shows when a prophet is active */}
        {mainProphet && (
          <div
            className="p-4 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors"
            onClick={() => onFlyToLocation(mainProphet.coords)}
            style={{ borderLeft: `4px solid ${mainProphet.color}` }}
          >
            <div className="flex items-start gap-4">
              {/* Prophet Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: `${mainProphet.color}20` }}
              >
                {mainProphet.icon}
              </div>

              {/* Prophet Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg">{mainProphet.name}</h3>
                  <span className="text-white/40 text-sm" dir="rtl">{mainProphet.nameAr}</span>
                </div>
                <p className="text-white/60 text-sm mb-2 line-clamp-2">{mainProphet.story}</p>

                {/* Key Events */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {mainProphet.keyEvents.slice(0, 3).map((event, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full text-[10px] text-white/80"
                      style={{ backgroundColor: `${mainProphet.color}30` }}
                    >
                      {event}
                    </span>
                  ))}
                </div>

                {/* Verses */}
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-xs">Verses:</span>
                  {mainProphet.verses.slice(0, 2).map((v, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); onProphetClick(mainProphet, v); }}
                      className="px-2 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs transition-colors"
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Period Badge */}
              <div className="text-right flex-shrink-0">
                <div className="text-white/40 text-xs uppercase">Period</div>
                <div className="text-white text-sm font-mono">
                  {mainProphet.periodStart < 0 ? `${Math.abs(mainProphet.periodStart)} BCE` : `${mainProphet.periodStart} CE`}
                </div>
                <div className="text-white/30 text-xs">to</div>
                <div className="text-white text-sm font-mono">
                  {mainProphet.periodEnd < 0 ? `${Math.abs(mainProphet.periodEnd)} BCE` : `${mainProphet.periodEnd} CE`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timeline Slider */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icons.Clock className="w-4 h-4 text-amber-400" />
              <span className="text-white/60 text-xs uppercase tracking-wider">Timeline</span>
            </div>
            <span className="text-amber-400 text-xl font-bold font-mono">
              {value < 0 ? `${Math.abs(value)} BCE` : `${value} CE`}
            </span>
          </div>

          {/* Slider with Prophet Markers */}
          <div className="relative h-8 mb-2">
            {/* Prophet period backgrounds */}
            {prophets.map(prophet => {
              const startPercent = ((prophet.periodStart - minYear) / (maxYear - minYear)) * 100;
              const endPercent = ((prophet.periodEnd - minYear) / (maxYear - minYear)) * 100;
              const isActive = value >= prophet.periodStart && value <= prophet.periodEnd;
              return (
                <div
                  key={prophet.id}
                  className="absolute h-6 top-1 rounded transition-opacity cursor-pointer"
                  style={{
                    left: `${Math.max(0, startPercent)}%`,
                    width: `${Math.min(100 - startPercent, endPercent - startPercent)}%`,
                    backgroundColor: `${prophet.color}${isActive ? '50' : '20'}`,
                    borderBottom: isActive ? `2px solid ${prophet.color}` : 'none',
                  }}
                  title={prophet.name}
                  onClick={() => onChange(prophet.periodStart + Math.floor((prophet.periodEnd - prophet.periodStart) / 2))}
                />
              );
            })}

            {/* Slider input */}
            <input
              type="range"
              min={minYear}
              max={maxYear}
              value={value}
              onChange={(e) => onChange(parseInt(e.target.value))}
              className="absolute w-full h-8 top-0 opacity-0 cursor-pointer z-10"
            />

            {/* Custom thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                left: `calc(${((value - minYear) / (maxYear - minYear)) * 100}% - 10px)`,
              }}
            >
              <div className="w-5 h-5 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 border-2 border-white" />
            </div>
          </div>

          {/* Era Labels */}
          <div className="flex justify-between text-[10px] text-white/30">
            <span>4000 BCE</span>
            <span>2000 BCE</span>
            <span>1 CE</span>
            <span>700 CE</span>
          </div>
        </div>

        {/* Prophet Quick Select */}
        <div className="px-4 pb-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {prophets.map(prophet => {
              const isActive = value >= prophet.periodStart && value <= prophet.periodEnd;
              return (
                <button
                  key={prophet.id}
                  onClick={() => onChange(prophet.periodStart + Math.floor((prophet.periodEnd - prophet.periodStart) / 2))}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white hover:bg-white/10'
                  }`}
                  style={isActive ? { borderBottom: `2px solid ${prophet.color}` } : {}}
                >
                  <span>{prophet.icon}</span>
                  <span>{prophet.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

// Enhanced Detail Panel
const DetailPanel = memo(({ item, type, onClose, onNavigateToVerse }) => {
  if (!item) return null;

  const renderContent = () => {
    switch(type) {
      case 'mosque':
        return (
          <>
            {item.imageUrl && (
              <div className="mb-3 rounded-lg overflow-hidden h-32">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
            )}
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Capacity</span>
                <p className="text-white text-sm">{item.capacity}</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Built</span>
                <p className="text-white text-sm">{item.builtYear}</p>
              </div>
            </div>
            {item.facts && (
              <div className="space-y-1">
                {item.facts.slice(0, 3).map((fact, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/60">
                    <span className="text-emerald-400">•</span>
                    {fact}
                  </div>
                ))}
              </div>
            )}
          </>
        );
      case 'revelation':
        return (
          <>
            <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-purple-400 text-xs uppercase">Surah</span>
                  <p className="text-white font-bold">{item.surahName}</p>
                </div>
                <span className="px-2 py-1 rounded bg-purple-500/30 text-purple-300 text-xs">{item.verses}</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-2">{item.description}</p>
            <p className="text-white/50 text-xs italic">{item.context}</p>
          </>
        );
      case 'grave':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="p-2 rounded-lg bg-white/5 mb-2">
              <span className="text-white/40 text-[10px] uppercase">Location</span>
              <p className="text-white text-sm">{item.location}</p>
            </div>
            {item.companions?.length > 0 && (
              <div className="mb-2">
                <span className="text-white/40 text-[10px] uppercase">Also buried here:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.companions.map(c => (
                    <span key={c} className="px-2 py-0.5 rounded bg-white/10 text-white/70 text-xs">{c}</span>
                  ))}
                </div>
              </div>
            )}
            {item.note && (
              <p className="text-amber-400/80 text-xs italic">"{item.note}"</p>
            )}
          </>
        );
      case 'cave':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/25 mb-2">
              <span className="text-cyan-400 text-xs uppercase">Mountain</span>
              <p className="text-white">{item.mountain}</p>
            </div>
            {item.events?.length > 0 && (
              <div className="space-y-1 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Events:</span>
                {item.events.map((e, i) => (
                  <div key={i} className="text-white/70 text-xs flex items-center gap-2">
                    <span className="text-cyan-400">•</span> {e}
                  </div>
                ))}
              </div>
            )}
            {item.climbTime && (
              <p className="text-white/40 text-xs">Climb time: {item.climbTime}</p>
            )}
          </>
        );
      case 'location':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.prophets?.length > 0 && (
              <div className="mb-3">
                <span className="text-white/50 text-xs">Prophets:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.prophets.map(p => (
                    <span key={p} className="px-2 py-0.5 rounded bg-white/10 text-white text-xs">{p}</span>
                  ))}
                </div>
              </div>
            )}
            {item.events?.slice(0, 2).map((e, i) => (
              <div key={i} className="p-2 rounded-lg bg-white/5 mb-2">
                <div className="flex justify-between">
                  <span className="text-white text-xs font-medium">{e.name}</span>
                  {e.year && <span className="text-white/40 text-xs">{e.year}</span>}
                </div>
                {e.verses?.length > 0 && (
                  <div className="flex gap-1 mt-1">
                    {e.verses.slice(0, 2).map((v, j) => (
                      <button key={j} onClick={() => {
                        const [s, a] = v.split(':');
                        onNavigateToVerse(parseInt(s), parseInt(a?.split('-')[0] || 1));
                      }} className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-xs">
                        {v}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        );
      case 'destroyed':
        return (
          <>
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <span className="text-white/50 text-xs">Sin:</span>
                <p className="text-white/80 text-sm">{item.sin}</p>
              </div>
              <div className="flex-1">
                <span className="text-white/50 text-xs">Prophet:</span>
                <p className="text-white/80 text-sm">{item.prophet}</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 mb-3">
              <span className="text-red-400 text-xs uppercase">Punishment</span>
              <p className="text-white font-medium">{item.punishment}</p>
              <p className="text-amber-400 text-sm" dir="rtl">{item.punishmentAr}</p>
            </div>
            <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25">
              <span className="text-amber-400 text-xs">Lesson:</span>
              <p className="text-white/90 text-sm">{item.lesson}</p>
            </div>
          </>
        );
      case 'miracle':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 mb-3">
              <span className="text-purple-400 text-xs uppercase">Prophet</span>
              <p className="text-white font-medium">{item.prophet}</p>
            </div>
            {item.scientificNote && (
              <div className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/25">
                <span className="text-cyan-400 text-xs">Note:</span>
                <p className="text-white/90 text-sm">{item.scientificNote}</p>
              </div>
            )}
          </>
        );
      default:
        return <p className="text-white/70 text-sm">{item.description}</p>;
    }
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 z-[1000] max-w-md mx-auto">
      <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color || '#F59E0B'}25` }}>
              {type === 'mosque' ? '🕌' : type === 'grave' ? '⭐' : type === 'cave' ? '🏔️' : type === 'revelation' ? '📖' :
               <Icons.MapPin className="w-5 h-5" style={{ color: item.color || '#F59E0B' }} />}
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">{item.name}</h3>
              <p className="text-white/50 text-xs" dir="rtl">{item.nameAr}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10">
            <Icons.X className="w-4 h-4 text-white/50" />
          </button>
        </div>
        <div className="p-3 max-h-[250px] overflow-y-auto custom-scrollbar">
          {renderContent()}
          {item.verses && (
            <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-white/10">
              {(Array.isArray(item.verses) ? item.verses : [item.verses]).slice(0, 4).map((v, i) => (
                <button key={i} onClick={() => {
                  const ref = typeof v === 'string' ? v : `${v.surah}:${v.ayah}`;
                  const [s, a] = ref.split(':');
                  onNavigateToVerse(parseInt(s), parseInt(a?.split('-')[0] || 1));
                }} className="px-2 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs transition-colors">
                  📖 {typeof v === 'string' ? v : `${v.surah}:${v.ayah}`}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Journey Selection Panel
const JourneyPanel = memo(({ journeys, activeJourney, setActiveJourney }) => (
  <div className="absolute top-16 left-4 z-[1000] max-w-[180px]">
    <div className="bg-black/90 backdrop-blur-md rounded-xl p-2 border border-white/20">
      <div className="text-white/50 text-[10px] uppercase mb-2 px-1">Prophet Journeys</div>
      {journeys.map(journey => (
        <button
          key={journey.id}
          onClick={() => setActiveJourney(activeJourney === journey.id ? null : journey.id)}
          className={`w-full text-left px-2 py-1.5 rounded-lg text-xs flex items-center gap-2 transition-all ${
            activeJourney === journey.id ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'
          }`}
        >
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: journey.color }}
          />
          <span className="truncate">{journey.name}</span>
          {activeJourney === journey.id && (
            <Icons.Play className="w-3 h-3 ml-auto text-green-400" />
          )}
        </button>
      ))}
    </div>
  </div>
));

// Main Component
const PropheticMap = memo(function PropheticMap({ isVisible, onClose, onNavigateToVerse }) {
  const [activeLayers, setActiveLayers] = useState(['locations', 'mosques']);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [mapStyle, setMapStyle] = useState('dark');
  const [mouseCoords, setMouseCoords] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const [timelineYear, setTimelineYear] = useState(632);
  const [activeJourney, setActiveJourney] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [showQibla, setShowQibla] = useState(false);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'globe'
  const mapRef = useRef(null);

  // Get active prophet for current timeline year
  const activeProphet = useMemo(() => {
    return PROPHETS_TIMELINE.filter(p => timelineYear >= p.periodStart && timelineYear <= p.periodEnd).pop();
  }, [timelineYear]);

  // Get all data
  const locations = useMemo(() => getAllLocations(), []);
  const destroyedNations = useMemo(() => getAllDestroyedNations(), []);
  const miracles = useMemo(() => getAllMiracles(), []);
  const animals = useMemo(() => getAllAnimals(), []);
  const journeys = useMemo(() => getAllJourneys(), []);
  const timelineEvents = useMemo(() => getTimelineEvents(), []);
  const sacredMosques = useMemo(() => getAllSacredMosques(), []);
  const revelations = useMemo(() => getAllRevelationLocations(), []);
  const graves = useMemo(() => getAllProphetGraves(), []);
  const caves = useMemo(() => getAllQuranicCaves(), []);

  const defaultCenter = [26, 42];
  const defaultZoom = 4;

  const toggleLayer = (layerId) => {
    setActiveLayers(prev =>
      prev.includes(layerId) ? prev.filter(l => l !== layerId) : [...prev, layerId]
    );
  };

  const handleMarkerClick = (item, type) => {
    setSelectedItem(item);
    setSelectedType(type);
    if (mapRef.current && item.coords) {
      mapRef.current.flyTo(item.coords, 8, { duration: 0.8 });
    }
  };

  const handleLocateUser = useCallback(() => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setShowQibla(true);
        setIsLocating(false);
        if (mapRef.current) {
          mapRef.current.flyTo([latitude, longitude], 6, { duration: 1 });
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setIsLocating(false);
      }
    );
  }, []);

  const qiblaAngle = userLocation ? calculateQibla(userLocation.lat, userLocation.lng) : null;
  const distanceKm = userLocation ? distanceToMakkah(userLocation.lat, userLocation.lng) : null;

  // Handle prophet verse click from timeline
  const handleProphetVerseClick = useCallback((prophet, verseRef) => {
    const [surah, ayah] = verseRef.split(':');
    onNavigateToVerse(parseInt(surah), parseInt(ayah?.split('-')[0] || 1));
    onClose();
  }, [onNavigateToVerse, onClose]);

  // Fly to location from timeline
  const handleFlyToLocation = useCallback((coords) => {
    if (viewMode === 'map' && mapRef.current) {
      mapRef.current.flyTo(coords, 8, { duration: 1 });
    }
    // Globe handles this internally via activeProphet
  }, [viewMode]);

  // Get journey coordinates
  const getJourneyCoords = (journey) => {
    return journey.waypoints.map(wp => {
      if (wp.coords) return wp.coords;
      const loc = locations.find(l => l.id === wp.location);
      return loc ? loc.coords : null;
    }).filter(Boolean);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        className="relative bg-gray-900 rounded-2xl overflow-hidden w-full h-full md:w-[96%] md:h-[94%] md:max-w-7xl md:m-auto md:mt-[1.5%] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 px-3 py-2 border-b border-white/10 bg-black/40">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Icons.Globe3D className="w-4 h-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <h2 className="text-sm font-bold text-white">Quranic World Map</h2>
                <p className="text-white/50 text-[10px]">
                  {locations.length + sacredMosques.length + Object.keys(destroyedNations).length + graves.length + caves.length} locations
                </p>
              </div>
            </div>

            {/* Layer Toggles - Scrollable on mobile */}
            <div className="flex items-center gap-1 overflow-x-auto flex-1 justify-center px-2 hide-scrollbar">
              {Object.values(LAYERS).map(layer => {
                let count = 0;
                if (layer.id === 'locations') count = locations.length;
                else if (layer.id === 'mosques') count = sacredMosques.length;
                else if (layer.id === 'revelations') count = revelations.length;
                else if (layer.id === 'destroyed') count = destroyedNations.length;
                else if (layer.id === 'miracles') count = miracles.length;
                else if (layer.id === 'graves') count = graves.length;
                else if (layer.id === 'caves') count = caves.length;
                else if (layer.id === 'journeys') count = journeys.length;
                else if (layer.id === 'animals') count = animals.length;

                return (
                  <LayerToggle
                    key={layer.id}
                    layer={layer}
                    isActive={activeLayers.includes(layer.id)}
                    onClick={() => toggleLayer(layer.id)}
                    count={count}
                  />
                );
              })}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-1">
              {/* Globe/Map Toggle */}
              <div className="flex items-center bg-white/10 rounded-lg p-0.5 mr-1">
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-2 py-1 rounded text-xs flex items-center gap-1 transition-all ${
                    viewMode === 'map' ? 'bg-amber-500 text-black' : 'text-white/60 hover:text-white'
                  }`}
                  title="Flat Map"
                >
                  <Icons.Map className="w-3 h-3" />
                  <span className="hidden sm:inline">Map</span>
                </button>
                <button
                  onClick={() => setViewMode('globe')}
                  className={`px-2 py-1 rounded text-xs flex items-center gap-1 transition-all ${
                    viewMode === 'globe' ? 'bg-amber-500 text-black' : 'text-white/60 hover:text-white'
                  }`}
                  title="3D Globe"
                >
                  <Icons.Globe3D className="w-3 h-3" />
                  <span className="hidden sm:inline">Globe</span>
                </button>
              </div>
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className={`p-2 rounded-lg transition-all ${showTimeline ? 'bg-amber-500/20 text-amber-400' : 'text-white/50 hover:text-white'}`}
                title="Interactive Timeline"
              >
                <Icons.Clock className="w-4 h-4" />
              </button>
              {viewMode === 'map' && (
                <select
                  value={mapStyle}
                  onChange={(e) => setMapStyle(e.target.value)}
                  className="bg-white/10 text-white text-xs rounded-lg px-2 py-1.5 border border-white/20"
                >
                  {Object.entries(MAP_STYLES).map(([key, style]) => (
                    <option key={key} value={key} className="bg-gray-900">{style.name}</option>
                  ))}
                </select>
              )}
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10">
                <Icons.X className="w-4 h-4 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Map or Globe */}
        <div className="flex-1 relative">
          {viewMode === 'globe' ? (
            <Globe3D
              locations={locations}
              onMarkerClick={handleMarkerClick}
              selectedItem={selectedItem}
              activeProphet={showTimeline ? activeProphet : null}
            />
          ) : (
          <MapContainer
            center={defaultCenter}
            zoom={defaultZoom}
            className="w-full h-full"
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer url={MAP_STYLES[mapStyle].url} />
            <MapEventHandler onCoordsChange={setMouseCoords} onMapRef={(m) => mapRef.current = m} />

            {/* User Location Marker */}
            {userLocation && (
              <CircleMarker
                center={[userLocation.lat, userLocation.lng]}
                radius={8}
                pathOptions={{ color: '#3B82F6', fillColor: '#3B82F6', fillOpacity: 0.8 }}
              />
            )}

            {/* Prophet Journeys with Animation */}
            {activeLayers.includes('journeys') && journeys.map(journey => {
              const coords = getJourneyCoords(journey);
              return (
                <AnimatedPolyline
                  key={journey.id}
                  positions={coords}
                  color={journey.color}
                  isActive={activeJourney === journey.id}
                  onClick={() => setActiveJourney(activeJourney === journey.id ? null : journey.id)}
                  name={journey.name}
                />
              );
            })}

            {/* Sacred Mosques */}
            {activeLayers.includes('mosques') && sacredMosques.map(mosque => (
              <Marker
                key={mosque.id}
                position={mosque.coords}
                icon={createMarkerIcon(mosque.color, 32, selectedItem?.id === mosque.id, 'mosque')}
                eventHandlers={{ click: () => handleMarkerClick(mosque, 'mosque') }}
              />
            ))}

            {/* Revelation Locations */}
            {activeLayers.includes('revelations') && revelations.map(rev => (
              <Marker
                key={rev.id}
                position={rev.coords}
                icon={createMarkerIcon(rev.color, 26, selectedItem?.id === rev.id, 'revelation')}
                eventHandlers={{ click: () => handleMarkerClick(rev, 'revelation') }}
              />
            ))}

            {/* Location Markers */}
            {activeLayers.includes('locations') && locations
              .filter(loc => !showTimeline || timelineEvents.some(e => e.location === loc.id && e.year <= timelineYear))
              .map(loc => (
                <Marker
                  key={loc.id}
                  position={loc.coords}
                  icon={createMarkerIcon(loc.color, 26, selectedItem?.id === loc.id)}
                  eventHandlers={{ click: () => handleMarkerClick(loc, 'location') }}
                />
              ))}

            {/* Destroyed Nations */}
            {activeLayers.includes('destroyed') && destroyedNations.map(nation => (
              <Marker
                key={nation.id}
                position={nation.coords}
                icon={createMarkerIcon(nation.color, 28, selectedItem?.id === nation.id)}
                eventHandlers={{ click: () => handleMarkerClick(nation, 'destroyed') }}
              />
            ))}

            {/* Miracles */}
            {activeLayers.includes('miracles') && miracles.map(miracle => (
              <Marker
                key={miracle.id}
                position={miracle.coords}
                icon={createMarkerIcon(miracle.color, 26, selectedItem?.id === miracle.id)}
                eventHandlers={{ click: () => handleMarkerClick(miracle, 'miracle') }}
              />
            ))}

            {/* Prophet Graves */}
            {activeLayers.includes('graves') && graves.map(grave => (
              <Marker
                key={grave.id}
                position={grave.coords}
                icon={createMarkerIcon(grave.color, 26, selectedItem?.id === grave.id, 'grave')}
                eventHandlers={{ click: () => handleMarkerClick(grave, 'grave') }}
              />
            ))}

            {/* Caves */}
            {activeLayers.includes('caves') && caves.map(cave => (
              <Marker
                key={cave.id}
                position={cave.coords}
                icon={createMarkerIcon(cave.color, 26, selectedItem?.id === cave.id, 'cave')}
                eventHandlers={{ click: () => handleMarkerClick(cave, 'cave') }}
              />
            ))}

            {/* Animals */}
            {activeLayers.includes('animals') && animals.map(animal => (
              <CircleMarker
                key={animal.id}
                center={animal.coords}
                radius={10}
                pathOptions={{ color: animal.color, fillColor: animal.color, fillOpacity: 0.6 }}
                eventHandlers={{ click: () => handleMarkerClick(animal, 'animal') }}
              />
            ))}
          </MapContainer>
          )}

          {/* Map Controls - only show in map mode */}
          {viewMode === 'map' && (
            <MapControls
              onZoomIn={() => mapRef.current?.zoomIn()}
              onZoomOut={() => mapRef.current?.zoomOut()}
              onReset={() => mapRef.current?.setView(defaultCenter, defaultZoom)}
              onLocateUser={handleLocateUser}
              isLocating={isLocating}
              coords={mouseCoords}
            />
          )}

          {/* Journey Panel - only show in map mode */}
          {viewMode === 'map' && activeLayers.includes('journeys') && (
            <JourneyPanel
              journeys={journeys}
              activeJourney={activeJourney}
              setActiveJourney={setActiveJourney}
            />
          )}

          {/* Qibla Compass - only in map mode */}
          {viewMode === 'map' && showQibla && userLocation && qiblaAngle !== null && (
            <QiblaCompass
              userLocation={userLocation}
              qiblaAngle={qiblaAngle}
              distance={distanceKm}
            />
          )}

          {/* Timeline Slider */}
          {showTimeline && (
            <TimelineSlider
              value={timelineYear}
              onChange={setTimelineYear}
              events={timelineEvents}
              prophets={PROPHETS_TIMELINE}
              onProphetClick={handleProphetVerseClick}
              onFlyToLocation={handleFlyToLocation}
            />
          )}

          {/* Detail Panel */}
          {!showTimeline && selectedItem && (
            <DetailPanel
              item={selectedItem}
              type={selectedType}
              onClose={() => { setSelectedItem(null); setSelectedType(null); }}
              onNavigateToVerse={onNavigateToVerse}
            />
          )}
        </div>

        {/* Legend */}
        <div className="flex-shrink-0 px-3 py-1.5 border-t border-white/10 bg-black/40">
          <div className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar">
              {[
                { color: '#10B981', label: 'Mosques' },
                { color: '#8B5CF6', label: 'Revelations' },
                { color: '#F59E0B', label: 'Sites' },
                { color: '#DC2626', label: 'Destroyed' },
                { color: '#EC4899', label: 'Miracles' },
                { color: '#6B7280', label: 'Graves' },
                { color: '#06B6D4', label: 'Caves' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-white/50">{item.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleLocateUser}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Icons.Compass className="w-3 h-3" />
              <span>Find Qibla</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes markerPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        .custom-marker { background: transparent !important; border: none !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
});

export default PropheticMap;
