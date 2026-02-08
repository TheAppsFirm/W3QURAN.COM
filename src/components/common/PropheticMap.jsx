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

// Timeline Slider with enhanced UI
const TimelineSlider = memo(({ value, onChange, events }) => {
  const minYear = -4000;
  const maxYear = 700;
  const currentEvent = events.filter(e => e.year <= value).pop();

  return (
    <div className="absolute bottom-4 left-4 right-4 z-[1000] max-w-2xl mx-auto">
      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/60 text-xs uppercase tracking-wider">Timeline</span>
          <span className="text-amber-400 text-lg font-bold">
            {value < 0 ? `${Math.abs(value)} BCE` : `${value} CE`}
          </span>
        </div>

        {/* Timeline markers */}
        <div className="relative h-2 mb-3">
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
          />
          {/* Event dots */}
          {events.filter(e => e.year >= minYear && e.year <= maxYear).map((event, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full -translate-x-1/2 top-0"
              style={{
                left: `${((event.year - minYear) / (maxYear - minYear)) * 100}%`,
                backgroundColor: event.year <= value ? '#F59E0B' : '#374151',
              }}
              title={event.label}
            />
          ))}
        </div>

        {currentEvent && (
          <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Icons.Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">{currentEvent.label}</div>
              <div className="text-white/50 text-xs capitalize">{currentEvent.type}</div>
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
  const mapRef = useRef(null);

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
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className={`p-2 rounded-lg transition-all ${showTimeline ? 'bg-amber-500/20 text-amber-400' : 'text-white/50 hover:text-white'}`}
                title="Timeline"
              >
                <Icons.Clock className="w-4 h-4" />
              </button>
              <select
                value={mapStyle}
                onChange={(e) => setMapStyle(e.target.value)}
                className="bg-white/10 text-white text-xs rounded-lg px-2 py-1.5 border border-white/20"
              >
                {Object.entries(MAP_STYLES).map(([key, style]) => (
                  <option key={key} value={key} className="bg-gray-900">{style.name}</option>
                ))}
              </select>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10">
                <Icons.X className="w-4 h-4 text-white/70" />
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
