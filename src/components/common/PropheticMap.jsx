/**
 * Prophetic Stories World Map - Comprehensive Quranic Geography
 * Features: Multiple layers, Timeline, Qibla direction, Miracles, Animals, Trade routes
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
  getAllLocations,
  getAllJourneys,
  getAllDestroyedNations,
  getAllMiracles,
  getAllAnimals,
  getAllTradeRoutes,
  getTimelineEvents,
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

// Layer configurations
const LAYERS = {
  locations: { id: 'locations', name: 'Sacred Sites', icon: 'MapPin', color: '#F59E0B' },
  destroyed: { id: 'destroyed', name: 'Destroyed Nations', icon: 'AlertCircle', color: '#DC2626' },
  battles: { id: 'battles', name: 'Battle Sites', icon: 'Zap', color: '#EF4444' },
  miracles: { id: 'miracles', name: 'Miracles', icon: 'Sparkles', color: '#8B5CF6' },
  animals: { id: 'animals', name: 'Animals', icon: 'Heart', color: '#10B981' },
  routes: { id: 'routes', name: 'Trade Routes', icon: 'Route', color: '#3B82F6' },
  journeys: { id: 'journeys', name: 'Prophet Journeys', icon: 'Route', color: '#EC4899' },
};

// Custom marker icons
const createMarkerIcon = (color, size = 28, isSelected = false) => {
  return L.divIcon({
    html: `<div style="
      width: ${size}px; height: ${size}px;
      background: ${color}; border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.4), 0 0 ${isSelected ? '15px' : '8px'} ${color}80;
      ${isSelected ? 'animation: pulse 1.5s infinite;' : ''}
    "><div style="width: ${size*0.4}px; height: ${size*0.4}px; background: white; border-radius: 50%; margin: ${size*0.3}px auto; opacity: 0.9;"></div></div>`,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
};

// Map Controls
const MapControls = memo(({ onZoomIn, onZoomOut, onReset, coords, qiblaAngle, distanceKm }) => (
  <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
    <div className="bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
      <button onClick={onZoomIn} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20">
        <Icons.ZoomIn className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button onClick={onZoomOut} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20">
        <Icons.ZoomOut className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button onClick={onReset} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20">
        <Icons.Refresh className="w-4 h-4" />
      </button>
    </div>
    {coords && (
      <div className="bg-black/80 backdrop-blur-sm rounded-xl p-2 border border-white/20 text-center">
        <div className="text-white/50 text-[9px] uppercase">Coords</div>
        <div className="text-white text-[10px] font-mono">{coords.lat.toFixed(3)}, {coords.lng.toFixed(3)}</div>
        {qiblaAngle !== null && (
          <>
            <div className="h-px bg-white/20 my-1" />
            <div className="text-amber-400 text-[9px]">Qibla: {Math.round(qiblaAngle)}°</div>
            <div className="text-white/50 text-[9px]">{distanceKm} km to Kaaba</div>
          </>
        )}
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
const LayerToggle = memo(({ layer, isActive, onClick }) => {
  const Icon = Icons[layer.icon] || Icons.MapPin;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-xs ${
        isActive ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'
      }`}
      style={isActive ? { borderBottom: `2px solid ${layer.color}` } : {}}
    >
      <Icon className="w-3.5 h-3.5" style={{ color: isActive ? layer.color : undefined }} />
      <span className="hidden sm:inline">{layer.name}</span>
    </button>
  );
});

// Timeline Slider
const TimelineSlider = memo(({ value, onChange, events }) => {
  const minYear = -4000;
  const maxYear = 700;
  const currentEvent = events.find(e => e.year <= value && events.filter(ev => ev.year <= value).pop() === e);

  return (
    <div className="absolute bottom-16 left-4 right-4 z-[1000] bg-black/80 backdrop-blur-sm rounded-xl p-3 border border-white/20">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white/60 text-xs">Timeline</span>
        <span className="text-amber-400 text-sm font-medium">
          {value < 0 ? `${Math.abs(value)} BCE` : `${value} CE`}
        </span>
      </div>
      <input
        type="range"
        min={minYear}
        max={maxYear}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
      />
      {currentEvent && (
        <div className="mt-2 text-center">
          <span className="text-white text-xs">{currentEvent.label}</span>
        </div>
      )}
    </div>
  );
});

// Detail Panel
const DetailPanel = memo(({ item, type, onClose, onNavigateToVerse }) => {
  if (!item) return null;

  const renderContent = () => {
    switch(type) {
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
            <p className="text-white/70 text-sm mb-2">{item.description}</p>
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
      case 'animal':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 mb-3">
              <span className="text-emerald-400 text-xs uppercase">What Happened</span>
              <p className="text-white/90 text-sm">{item.event}</p>
            </div>
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
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}25` }}>
              <Icons.MapPin className="w-5 h-5" style={{ color: item.color }} />
            </div>
            <div>
              <h3 className="text-white font-bold">{item.name}</h3>
              <p className="text-white/50 text-xs" dir="rtl">{item.nameAr}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10">
            <Icons.X className="w-4 h-4 text-white/50" />
          </button>
        </div>
        <div className="p-3 max-h-[200px] overflow-y-auto custom-scrollbar">
          {renderContent()}
          {item.verses && (
            <div className="flex flex-wrap gap-1 mt-2">
              {(Array.isArray(item.verses) ? item.verses : [item.verses]).slice(0, 4).map((v, i) => (
                <button key={i} onClick={() => {
                  const ref = typeof v === 'string' ? v : `${v.surah}:${v.ayah}`;
                  const [s, a] = ref.split(':');
                  onNavigateToVerse(parseInt(s), parseInt(a?.split('-')[0] || 1));
                }} className="px-2 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs">
                  {typeof v === 'string' ? v : `${v.surah}:${v.ayah}`}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Main Component
const PropheticMap = memo(function PropheticMap({ isVisible, onClose, onNavigateToVerse }) {
  const [activeLayers, setActiveLayers] = useState(['locations']);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [mapStyle, setMapStyle] = useState('dark');
  const [mouseCoords, setMouseCoords] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const [timelineYear, setTimelineYear] = useState(632);
  const [activeRoute, setActiveRoute] = useState(null);
  const [activeJourney, setActiveJourney] = useState(null);
  const mapRef = useRef(null);

  const locations = useMemo(() => getAllLocations(), []);
  const destroyedNations = useMemo(() => getAllDestroyedNations(), []);
  const miracles = useMemo(() => getAllMiracles(), []);
  const animals = useMemo(() => getAllAnimals(), []);
  const routes = useMemo(() => getAllTradeRoutes(), []);
  const journeys = useMemo(() => getAllJourneys(), []);
  const timelineEvents = useMemo(() => getTimelineEvents(), []);

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
      mapRef.current.flyTo(item.coords, 7, { duration: 0.8 });
    }
  };

  const qiblaAngle = mouseCoords ? calculateQibla(mouseCoords.lat, mouseCoords.lng) : null;
  const distanceKm = mouseCoords ? distanceToMakkah(mouseCoords.lat, mouseCoords.lng) : null;

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
                <h2 className="text-sm font-bold text-white">Quranic Map</h2>
                <p className="text-white/50 text-[10px]">{locations.length + Object.keys(destroyedNations).length + Object.keys(miracles).length} locations</p>
              </div>
            </div>

            {/* Layer Toggles */}
            <div className="flex items-center gap-1 overflow-x-auto flex-1 justify-center">
              {Object.values(LAYERS).map(layer => (
                <LayerToggle
                  key={layer.id}
                  layer={layer}
                  isActive={activeLayers.includes(layer.id)}
                  onClick={() => toggleLayer(layer.id)}
                />
              ))}
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

            {/* Trade Routes */}
            {activeLayers.includes('routes') && routes.map(route => (
              <Polyline
                key={route.id}
                positions={route.waypoints.map(w => w.coords)}
                pathOptions={{ color: route.color, weight: 3, opacity: activeRoute === route.id ? 1 : 0.5, dashArray: '8, 4' }}
                eventHandlers={{ click: () => setActiveRoute(activeRoute === route.id ? null : route.id) }}
              />
            ))}

            {/* Prophet Journeys */}
            {activeLayers.includes('journeys') && journeys.map(journey => {
              const coords = getJourneyCoords(journey);
              return (
                <Polyline
                  key={journey.id}
                  positions={coords}
                  pathOptions={{ color: journey.color, weight: 4, opacity: activeJourney === journey.id ? 1 : 0.4, dashArray: '10, 6' }}
                  eventHandlers={{ click: () => setActiveJourney(activeJourney === journey.id ? null : journey.id) }}
                />
              );
            })}

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

            {/* Battle Sites */}
            {activeLayers.includes('battles') && locations
              .filter(loc => loc.category === 'battle')
              .map(loc => (
                <Marker
                  key={`battle-${loc.id}`}
                  position={loc.coords}
                  icon={createMarkerIcon('#EF4444', 24, selectedItem?.id === loc.id)}
                  eventHandlers={{ click: () => handleMarkerClick(loc, 'location') }}
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
            coords={mouseCoords}
            qiblaAngle={qiblaAngle}
            distanceKm={distanceKm}
          />

          {/* Route/Journey Selection */}
          {(activeLayers.includes('routes') || activeLayers.includes('journeys')) && (
            <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2 max-w-[200px]">
              {activeLayers.includes('routes') && (
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                  <div className="text-white/50 text-[10px] uppercase mb-1">Trade Routes</div>
                  {routes.map(route => (
                    <button
                      key={route.id}
                      onClick={() => setActiveRoute(activeRoute === route.id ? null : route.id)}
                      className={`w-full text-left px-2 py-1 rounded text-xs flex items-center gap-2 ${
                        activeRoute === route.id ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: route.color }} />
                      {route.name}
                    </button>
                  ))}
                </div>
              )}
              {activeLayers.includes('journeys') && (
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                  <div className="text-white/50 text-[10px] uppercase mb-1">Prophet Journeys</div>
                  {journeys.map(journey => (
                    <button
                      key={journey.id}
                      onClick={() => setActiveJourney(activeJourney === journey.id ? null : journey.id)}
                      className={`w-full text-left px-2 py-1 rounded text-xs flex items-center gap-2 ${
                        activeJourney === journey.id ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: journey.color }} />
                      {journey.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
          {!showTimeline && (
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
            <div className="flex items-center gap-3 overflow-x-auto">
              {[
                { color: '#F59E0B', label: 'Holy Sites' },
                { color: '#DC2626', label: 'Destroyed' },
                { color: '#EF4444', label: 'Battles' },
                { color: '#8B5CF6', label: 'Miracles' },
                { color: '#10B981', label: 'Animals' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-white/50">{item.label}</span>
                </div>
              ))}
            </div>
            <span className="text-white/30">Click markers to explore</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        .custom-marker { background: transparent !important; border: none !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
      `}</style>
    </div>
  );
});

export default PropheticMap;
