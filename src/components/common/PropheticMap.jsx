/**
 * Prophetic Stories World Map - Enhanced Quranic Geography
 * Features: Animated journeys, Sacred mosques, Revelation sites, Qibla compass,
 * Prophet graves, Caves, Timeline with prophet details
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

// Prophet Timeline Data with detailed information including family (Islamic sources)
const PROPHETS_TIMELINE = [
  {
    id: 'adam',
    name: 'Adam',
    nameAr: 'آدم',
    title: 'Abu al-Bashar (Father of Humanity)',
    periodStart: -4000,
    periodEnd: -3000,
    color: '#22C55E',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'First human and prophet, created by Allah from clay. Taught the names of all things. Built the first Kaaba.',
    family: {
      wife: 'Hawwa (Eve)',
      sons: ['Habil (Abel)', 'Qabil (Cain)', 'Shith (Seth)'],
      note: 'Father of all humanity. Shith continued the prophetic lineage.'
    },
    keyEvents: ['Creation from clay', 'Life in Paradise', 'Descended to Earth', 'Built the Kaaba'],
    verses: ['2:30-37', '7:11-25', '20:115-123'],
    icon: '🌍'
  },
  {
    id: 'nuh',
    name: 'Nuh',
    nameAr: 'نوح',
    title: 'Shaykh al-Anbiya (Elder of Prophets)',
    periodStart: -3000,
    periodEnd: -2500,
    color: '#3B82F6',
    location: 'ark',
    coords: [39.4, 44.2],
    story: 'First Rasul (Messenger). Preached for 950 years. Built the Ark to save believers from the great flood.',
    family: {
      father: 'Lamech (Lamak)',
      sons: ['Sam (Shem)', 'Ham', 'Yafith (Japheth)', 'Yam/Kan\'an (drowned)'],
      note: 'Sam\'s lineage led to Ibrahim. One son rejected faith and drowned.'
    },
    keyEvents: ['950 years of dawah', 'Building the Ark', 'The Great Flood', 'Ark landed on Mt. Judi'],
    verses: ['11:25-48', '71:1-28', '23:23-30'],
    icon: '🚢'
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim',
    nameAr: 'إبراهيم',
    title: 'Khalilullah (Friend of Allah)',
    periodStart: -2000,
    periodEnd: -1850,
    color: '#F59E0B',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Father of Prophets. Destroyed idols, survived fire. Rebuilt the Kaaba with Ismail. Tested with sacrifice.',
    family: {
      father: 'Azar (Terah)',
      wives: ['Sarah', 'Hajar (Hagar)'],
      sons: ['Ismail (from Hajar)', 'Ishaq (from Sarah)'],
      note: 'From Ismail: Arab prophets including Muhammad ﷺ. From Ishaq: Israelite prophets.'
    },
    keyEvents: ['Destroyed idols', 'Survived the fire', 'Rebuilt the Kaaba', 'Sacrifice of Ismail'],
    verses: ['2:124-132', '14:35-41', '37:99-113'],
    icon: '🔥'
  },
  {
    id: 'ismail',
    name: 'Ismail',
    nameAr: 'إسماعيل',
    title: 'Dhabihullah (Sacrifice of Allah)',
    periodStart: -1900,
    periodEnd: -1800,
    color: '#EC4899',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Son of Ibrahim and Hajar. Left as infant in Makkah. Zamzam miracle. Built Kaaba with his father.',
    family: {
      father: 'Ibrahim',
      mother: 'Hajar (Hagar)',
      sons: ['12 sons including Kedar (Qaydar)'],
      note: 'Direct ancestor of Prophet Muhammad ﷺ through Kedar (Qaydar).'
    },
    keyEvents: ['Left in Makkah valley', 'Zamzam miracle', 'Built Kaaba with Ibrahim', 'Ancestor of Muhammad ﷺ'],
    verses: ['2:125-127', '37:102-107', '19:54-55'],
    icon: '💧'
  },
  {
    id: 'yaqub',
    name: 'Yaqub',
    nameAr: 'يعقوب',
    title: 'Israel (Servant of Allah)',
    periodStart: -1800,
    periodEnd: -1700,
    color: '#8B5CF6',
    location: 'canaan',
    coords: [31.5, 35.2],
    story: 'Son of Ishaq, grandson of Ibrahim. Father of 12 sons who became the 12 tribes of Bani Israel.',
    family: {
      father: 'Ishaq (Isaac)',
      mother: 'Rifqah (Rebecca)',
      grandfather: 'Ibrahim',
      sons: ['Yusuf', 'Binyamin (Benjamin)', 'Yahuda (Judah)', 'Lawi (Levi)', 'and 8 others'],
      note: 'His 12 sons became the 12 tribes of Israel (Bani Israel).'
    },
    keyEvents: ['Father of 12 tribes', 'Grief for Yusuf', 'Reunion in Egypt', 'Named Israel'],
    verses: ['12:4-18', '12:84-100', '19:49'],
    icon: '👨‍👦‍👦'
  },
  {
    id: 'yusuf',
    name: 'Yusuf',
    nameAr: 'يوسف',
    title: 'As-Siddiq (The Truthful)',
    periodStart: -1700,
    periodEnd: -1600,
    color: '#06B6D4',
    location: 'egypt',
    coords: [30.0444, 31.2357],
    story: 'Known for exceptional beauty and dream interpretation. Rose from slave to Aziz (Minister) of Egypt.',
    family: {
      father: 'Yaqub (Jacob)',
      mother: 'Rahil (Rachel)',
      fullBrother: 'Binyamin (Benjamin)',
      halfBrothers: '10 half-brothers',
      sons: ['Ephraim', 'Manasseh'],
      note: 'Given half of all beauty. His story is called "Ahsan al-Qasas" (Best of Stories).'
    },
    keyEvents: ['Thrown in well', 'Sold as slave', 'Prison and dreams', 'Aziz of Egypt'],
    verses: ['12:1-111'],
    icon: '⭐'
  },
  {
    id: 'musa',
    name: 'Musa',
    nameAr: 'موسى',
    title: 'Kalimullah (One who spoke to Allah)',
    periodStart: -1400,
    periodEnd: -1280,
    color: '#DC2626',
    location: 'sinai',
    coords: [28.5456, 33.9756],
    story: 'Spoke directly to Allah at Mount Sinai. Led Bani Israel out of Egypt. Received the Torah.',
    family: {
      father: 'Imran',
      mother: 'Yukabid (Jochebed)',
      brother: 'Harun (Aaron) - also a prophet',
      sister: 'Maryam (Miriam)',
      wife: 'Safura (Zipporah), daughter of Shuayb',
      note: 'Most mentioned prophet in the Quran (136 times).'
    },
    keyEvents: ['Basket in Nile', 'Burning bush', 'Parting the sea', 'Torah at Sinai'],
    verses: ['20:9-98', '28:3-43', '7:103-162'],
    icon: '📜'
  },
  {
    id: 'dawud',
    name: 'Dawud',
    nameAr: 'داود',
    title: 'Prophet-King of Israel',
    periodStart: -1040,
    periodEnd: -970,
    color: '#10B981',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'King and prophet. Defeated Jalut (Goliath). Given the Zabur (Psalms). Mountains and birds glorified Allah with him.',
    family: {
      tribe: 'Tribe of Yahuda (Judah)',
      sons: ['Sulayman (Solomon) - also a prophet', 'and others'],
      note: 'Given beautiful voice. Iron made soft in his hands to make armor.'
    },
    keyEvents: ['Defeated Goliath', 'King of Israel', 'Given Zabur', 'Iron made soft'],
    verses: ['2:251', '21:78-80', '34:10-11', '38:17-26'],
    icon: '🎵'
  },
  {
    id: 'sulayman',
    name: 'Sulayman',
    nameAr: 'سليمان',
    title: 'Prophet-King with Greatest Dominion',
    periodStart: -970,
    periodEnd: -931,
    color: '#F472B6',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'Son of Dawud. Given kingdom over jinn, wind, and animals. Understood language of all creatures.',
    family: {
      father: 'Dawud (David)',
      note: 'Given greatest kingdom ever. No one after him will have such dominion (Quran 38:35).'
    },
    keyEvents: ['Understood animals', 'Commanded jinn', 'Queen of Sheba visit', 'Built the temple'],
    verses: ['27:15-44', '21:81-82', '34:12-14', '38:30-40'],
    icon: '👑'
  },
  {
    id: 'isa',
    name: 'Isa',
    nameAr: 'عيسى',
    title: 'Ruhullah & Al-Masih (Spirit of Allah & The Messiah)',
    periodStart: 1,
    periodEnd: 33,
    color: '#A855F7',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'Born miraculously to Maryam without father. Given the Injeel (Gospel). Performed miracles. Raised alive to heaven.',
    family: {
      mother: 'Maryam bint Imran (Mary)',
      maternal_grandfather: 'Imran',
      maternal_grandmother: 'Hannah',
      uncle: 'Zakariya (prophet)',
      cousin: 'Yahya/John (prophet)',
      note: 'Born without father by Allah\'s command "Kun" (Be). Will return before Day of Judgment.'
    },
    keyEvents: ['Miraculous birth', 'Spoke in cradle', 'Healed the sick', 'Raised to heaven'],
    verses: ['3:45-55', '5:110-118', '19:16-35', '4:157-158'],
    icon: '✨'
  },
  {
    id: 'muhammad',
    name: 'Muhammad ﷺ',
    nameAr: 'محمد ﷺ',
    title: 'Khatam an-Nabiyyin (Seal of Prophets)',
    periodStart: 570,
    periodEnd: 632,
    color: '#10B981',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Final Prophet and Messenger to all mankind. Received the Quran over 23 years. Established Islam.',
    family: {
      father: 'Abdullah ibn Abd al-Muttalib (died before birth)',
      mother: 'Aminah bint Wahb (died when he was 6)',
      grandfather: 'Abd al-Muttalib (raised him)',
      uncle: 'Abu Talib (protected him)',
      wives: ['Khadijah', 'Aisha', 'and others - Mothers of Believers'],
      children: ['Qasim', 'Abdullah', 'Ibrahim (sons)', 'Zainab', 'Ruqayyah', 'Umm Kulthum', 'Fatimah (daughters)'],
      note: 'Lineage: Muhammad ﷺ → ... → Adnan → ... → Kedar → Ismail → Ibrahim'
    },
    keyEvents: ['First revelation (610 CE)', 'Isra & Miraj', 'Hijra to Madinah (622 CE)', 'Conquest of Makkah (630 CE)'],
    verses: ['33:40', '48:29', '3:144', '21:107'],
    icon: '🌙'
  }
];

// Custom marker icons with labels
const createMarkerIcon = (color, size = 28, isSelected = false, iconType = 'default', label = '') => {
  const icons = {
    mosque: '🕌',
    grave: '⭐',
    cave: '🏔️',
    revelation: '📖',
    miracle: '✨',
    destroyed: '⚠️',
    animal: '🐪',
    default: '📍'
  };

  const icon = icons[iconType] || icons.default;
  const showLabel = isSelected && label;

  return L.divIcon({
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
        <div style="
          width: ${size}px; height: ${size}px;
          background: ${color}; border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4), 0 0 ${isSelected ? '25px' : '12px'} ${color}90;
          ${isSelected ? 'animation: markerPulse 1.5s infinite; transform: scale(1.2);' : ''}
          display: flex; align-items: center; justify-content: center;
          font-size: ${size * 0.5}px;
          transition: transform 0.2s ease;
        ">${icon}</div>
        ${showLabel ? `
          <div style="
            position: absolute;
            top: ${size + 4}px;
            background: rgba(0,0,0,0.85);
            color: white;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            border: 1px solid ${color}50;
          ">${label}</div>
        ` : ''}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [size, size + (showLabel ? 30 : 0)],
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

// Collapsible Layer Panel
const LayerPanel = memo(({ layers, activeLayers, toggleLayer, counts, isOpen, setIsOpen }) => {
  return (
    <div className="absolute top-4 left-4 z-[1000]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-black/90 backdrop-blur-md rounded-xl border border-white/20 text-white shadow-lg hover:bg-black/95 transition-all"
      >
        <Icons.Layers className="w-4 h-4 text-amber-400" />
        <span className="text-sm font-medium">Layers</span>
        <span className="text-xs bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full">
          {activeLayers.length}
        </span>
        <Icons.ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="mt-2 bg-black/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden w-56">
          <div className="p-2 border-b border-white/10">
            <p className="text-white/50 text-xs uppercase tracking-wider">Toggle Layers</p>
          </div>
          <div className="p-2 space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {Object.values(layers).map(layer => {
              const Icon = Icons[layer.icon] || Icons.MapPin;
              const isActive = activeLayers.includes(layer.id);
              const count = counts[layer.id] || 0;

              return (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: isActive ? `${layer.color}30` : 'rgba(255,255,255,0.05)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: isActive ? layer.color : undefined }} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">{layer.name}</p>
                    <p className="text-[10px] text-white/40">{count} locations</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive ? 'border-amber-400 bg-amber-400' : 'border-white/30'
                    }`}
                  >
                    {isActive && <Icons.Check className="w-3 h-3 text-black" />}
                  </div>
                </button>
              );
            })}
          </div>
          {/* Quick actions */}
          <div className="p-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => Object.keys(layers).forEach(id => !activeLayers.includes(id) && toggleLayer(id))}
              className="flex-1 text-xs py-1.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/20"
            >
              Select All
            </button>
            <button
              onClick={() => activeLayers.forEach(id => toggleLayer(id))}
              className="flex-1 text-xs py-1.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/20"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

// Compact Timeline Slider with Prophet Details
const TimelineSlider = memo(({ value, onChange, events, prophets = [], onProphetClick, onFlyToLocation }) => {
  const minYear = -4000;
  const maxYear = 700;
  const [isExpanded, setIsExpanded] = useState(false); // Start collapsed

  // Find active prophet(s) for current year
  const activeProphets = (prophets || []).filter(p => value >= p.periodStart && value <= p.periodEnd);
  const mainProphet = activeProphets[activeProphets.length - 1];

  // Format year display
  const formatYear = (year) => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

  return (
    <div className="absolute bottom-3 left-3 right-3 z-[1000] max-w-5xl mx-auto">
      <div className="bg-gray-950/95 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden">

        {/* Compact Header with Prophet Selector */}
        <div className="p-3 bg-gray-900/80">
          {/* Prophet Row - Horizontal scroll on mobile, flex wrap on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {prophets.map(prophet => {
              const isActive = value >= prophet.periodStart && value <= prophet.periodEnd;
              return (
                <button
                  key={prophet.id}
                  onClick={() => {
                    onChange(prophet.periodStart + Math.floor((prophet.periodEnd - prophet.periodStart) / 2));
                    onFlyToLocation(prophet.coords);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="text-base">{prophet.icon}</span>
                  <span className={`text-xs font-semibold whitespace-nowrap ${isActive ? 'text-black' : ''}`}>
                    {prophet.name === 'Muhammad ﷺ' ? 'Muhammad ﷺ' : prophet.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Bar */}
          <div className="relative h-8 mt-2">
            {/* Background track */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-gray-800 rounded-full" />

            {/* Prophet period segments */}
            {prophets.map(prophet => {
              const startPercent = ((prophet.periodStart - minYear) / (maxYear - minYear)) * 100;
              const endPercent = ((prophet.periodEnd - minYear) / (maxYear - minYear)) * 100;
              const isActive = value >= prophet.periodStart && value <= prophet.periodEnd;

              return (
                <div
                  key={prophet.id}
                  className="absolute top-1/2 -translate-y-1/2 h-3 rounded-full cursor-pointer transition-all hover:h-4"
                  style={{
                    left: `${Math.max(0, startPercent)}%`,
                    width: `${Math.min(100 - startPercent, endPercent - startPercent)}%`,
                    backgroundColor: isActive ? prophet.color : `${prophet.color}50`,
                    boxShadow: isActive ? `0 0 8px ${prophet.color}` : 'none',
                  }}
                  title={prophet.name}
                  onClick={() => {
                    onChange(prophet.periodStart + Math.floor((prophet.periodEnd - prophet.periodStart) / 2));
                    onFlyToLocation(prophet.coords);
                  }}
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
              className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
            />

            {/* Custom thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ left: `calc(${((value - minYear) / (maxYear - minYear)) * 100}%)` }}
            >
              <div className="w-4 h-4 -ml-2 bg-white rounded-full shadow-lg border-2 border-amber-400" />
            </div>
          </div>

          {/* Year labels and expand button */}
          <div className="flex items-center justify-between mt-1">
            <span className="text-[10px] text-gray-500">4000 BCE</span>
            {mainProphet && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs"
              >
                <span className="text-base">{mainProphet.icon}</span>
                <span className="text-white font-medium">{mainProphet.name}</span>
                <span className="text-amber-400">{formatYear(value)}</span>
                <Icons.ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
            <span className="text-[10px] text-gray-500">700 CE</span>
          </div>
        </div>

        {/* Expanded Content - Prophet Details */}
        {isExpanded && mainProphet && (
          <div className="p-3 bg-gray-900/90 border-t border-gray-700 max-h-[35vh] overflow-y-auto custom-scrollbar">
            {/* Two Column Layout */}
            <div className="flex gap-3">
              {/* Left - Icon & Basic Info */}
              <div className="flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: mainProphet.color }}
                  onClick={() => onFlyToLocation(mainProphet.coords)}
                >
                  {mainProphet.icon}
                </div>
              </div>

              {/* Right - Details */}
              <div className="flex-1 min-w-0">
                {/* Name & Title */}
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-white font-bold text-base">{mainProphet.name}</h3>
                  <span className="text-gray-400 text-sm" dir="rtl">{mainProphet.nameAr}</span>
                </div>
                {mainProphet.title && (
                  <p className="text-amber-400 text-xs italic mb-2">"{mainProphet.title}"</p>
                )}
                <p className="text-gray-300 text-xs mb-2 leading-relaxed">{mainProphet.story}</p>

                {/* Family - Compact Grid */}
                {mainProphet.family && (
                  <div className="mb-2 p-2 rounded-lg bg-gray-800/50 border border-gray-700">
                    <p className="text-amber-400 text-[10px] font-bold uppercase mb-1">👨‍👩‍👧‍👦 Family</p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[11px]">
                      {mainProphet.family.father && (
                        <div><span className="text-gray-500">Father:</span> <span className="text-white">{mainProphet.family.father}</span></div>
                      )}
                      {mainProphet.family.mother && (
                        <div><span className="text-gray-500">Mother:</span> <span className="text-white">{mainProphet.family.mother}</span></div>
                      )}
                      {mainProphet.family.wife && (
                        <div className="col-span-2"><span className="text-gray-500">Wife:</span> <span className="text-white">{mainProphet.family.wife}</span></div>
                      )}
                      {mainProphet.family.wives && (
                        <div className="col-span-2"><span className="text-gray-500">Wives:</span> <span className="text-white">{mainProphet.family.wives.join(', ')}</span></div>
                      )}
                      {mainProphet.family.sons && (
                        <div className="col-span-2"><span className="text-gray-500">Sons:</span> <span className="text-white">{Array.isArray(mainProphet.family.sons) ? mainProphet.family.sons.join(', ') : mainProphet.family.sons}</span></div>
                      )}
                      {mainProphet.family.brother && (
                        <div><span className="text-gray-500">Brother:</span> <span className="text-white">{mainProphet.family.brother}</span></div>
                      )}
                    </div>
                    {mainProphet.family.note && (
                      <p className="text-amber-300/70 text-[10px] mt-1 italic">📌 {mainProphet.family.note}</p>
                    )}
                  </div>
                )}

                {/* Events & Verses Row */}
                <div className="flex flex-wrap gap-1.5">
                  {mainProphet.keyEvents.slice(0, 3).map((event, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] text-white bg-gray-700">{event}</span>
                  ))}
                  {mainProphet.verses.slice(0, 2).map((v, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); onProphetClick(mainProphet, v); }}
                      className="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-medium"
                    >
                      📖 {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
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
  const [layerPanelOpen, setLayerPanelOpen] = useState(false);
  const mapRef = useRef(null);

  // Get all data first
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

  // Layer counts for panel (after data is defined)
  const layerCounts = useMemo(() => ({
    locations: locations.length,
    mosques: sacredMosques.length,
    revelations: revelations.length,
    destroyed: destroyedNations.length,
    miracles: miracles.length,
    graves: graves.length,
    caves: caves.length,
    journeys: journeys.length,
    animals: animals.length,
  }), [locations, sacredMosques, revelations, destroyedNations, miracles, graves, caves, journeys, animals]);

  // Get active prophet for current timeline year
  const activeProphet = useMemo(() => {
    return PROPHETS_TIMELINE.filter(p => timelineYear >= p.periodStart && timelineYear <= p.periodEnd).pop();
  }, [timelineYear]);

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
    if (mapRef.current) {
      mapRef.current.flyTo(coords, 8, { duration: 1 });
    }
  }, []);

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
        {/* Header - Simplified */}
        <div className="flex-shrink-0 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-black/60 to-black/40">
          <div className="flex items-center justify-between">
            {/* Left: Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Icons.Globe3D className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Quranic World Map</h2>
                <p className="text-white/50 text-xs">
                  {activeLayers.length} layers • {Object.values(layerCounts).reduce((a, b) => a + b, 0)} locations
                </p>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
                  showTimeline
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'text-white/60 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                <Icons.Clock className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">Timeline</span>
              </button>

              <select
                value={mapStyle}
                onChange={(e) => setMapStyle(e.target.value)}
                className="bg-white/10 text-white text-sm rounded-xl px-3 py-2 border border-white/20 cursor-pointer"
              >
                {Object.entries(MAP_STYLES).map(([key, style]) => (
                  <option key={key} value={key} className="bg-gray-900">{style.name}</option>
                ))}
              </select>

              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Icons.X className="w-5 h-5 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 relative">
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

          {/* Layer Panel */}
          <LayerPanel
            layers={LAYERS}
            activeLayers={activeLayers}
            toggleLayer={toggleLayer}
            counts={layerCounts}
            isOpen={layerPanelOpen}
            setIsOpen={setLayerPanelOpen}
          />

          {/* Map Controls */}
          <MapControls
            onZoomIn={() => mapRef.current?.zoomIn()}
            onZoomOut={() => mapRef.current?.zoomOut()}
            onReset={() => mapRef.current?.setView(defaultCenter, defaultZoom)}
            onLocateUser={handleLocateUser}
            isLocating={isLocating}
            coords={mouseCoords}
          />

          {/* Journey Panel */}
          {activeLayers.includes('journeys') && (
            <JourneyPanel
              journeys={journeys}
              activeJourney={activeJourney}
              setActiveJourney={setActiveJourney}
            />
          )}

          {/* Qibla Compass */}
          {showQibla && userLocation && qiblaAngle !== null && (
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
