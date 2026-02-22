/**
 * Interactive Prophetic Map
 * Leaflet-based map with gaming elements, zoom/pan, animated journeys
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icons } from './Icons';
import {
  PROPHETIC_LOCATIONS,
  PROPHET_JOURNEYS,
  getAllLocations,
  getLocation,
  getJourney,
} from '../../data/propheticLocations';
import {
  isLocationUnlocked,
  unlockLocation,
  recordMapVisit,
  getGamificationData,
} from '../../data/gamificationSystem';

// Custom marker icons
const createMarkerIcon = (color, isUnlocked, isSelected) => {
  const size = isSelected ? 40 : 30;
  const opacity = isUnlocked ? 1 : 0.4;

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${isUnlocked ? color : '#666'};
        border: 3px solid ${isSelected ? '#fff' : 'rgba(255,255,255,0.6)'};
        border-radius: 50%;
        box-shadow: 0 0 ${isSelected ? '20px' : '10px'} ${color}${isUnlocked ? '80' : '40'};
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${opacity};
        transition: all 0.3s ease;
        ${isSelected ? 'animation: pulse 1.5s infinite;' : ''}
      ">
        ${isUnlocked ? `
          <svg width="${size * 0.5}" height="${size * 0.5}" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        ` : `
          <svg width="${size * 0.5}" height="${size * 0.5}" viewBox="0 0 24 24" fill="white">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
        `}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
};

// Map Controls Component
const MapControls = memo(function MapControls({ onZoomIn, onZoomOut, onReset }) {
  return (
    <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
      <button
        onClick={onZoomIn}
        className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
      >
        <Icons.ZoomIn className="w-5 h-5" />
      </button>
      <button
        onClick={onZoomOut}
        className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
      >
        <Icons.ZoomOut className="w-5 h-5" />
      </button>
      <button
        onClick={onReset}
        className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
        title="Reset View"
      >
        <Icons.Refresh className="w-5 h-5" />
      </button>
    </div>
  );
});

// Map Controller Hook Component
function MapController({ center, zoom, onMapReady }) {
  const map = useMap();

  useEffect(() => {
    if (onMapReady) {
      onMapReady(map);
    }
  }, [map, onMapReady]);

  useEffect(() => {
    if (center && zoom) {
      map.setView(center, zoom, { animate: true });
    }
  }, [map, center, zoom]);

  return null;
}

// Journey Path Component with Animation
const JourneyPath = memo(function JourneyPath({
  journey,
  isActive,
  progress = 1,
  color,
}) {
  const pathCoords = journey.path.map(p => [p.lat, p.lng]);

  // Calculate visible portion based on progress
  const visibleCoords = useMemo(() => {
    if (progress >= 1) return pathCoords;

    const totalPoints = pathCoords.length;
    const pointsToShow = Math.ceil(totalPoints * progress);
    return pathCoords.slice(0, pointsToShow);
  }, [pathCoords, progress]);

  return (
    <>
      {/* Background path (full journey, faded) */}
      <Polyline
        positions={pathCoords}
        pathOptions={{
          color: color,
          weight: 3,
          opacity: 0.2,
          dashArray: '10, 10',
        }}
      />
      {/* Active path (animated portion) */}
      {isActive && (
        <Polyline
          positions={visibleCoords}
          pathOptions={{
            color: color,
            weight: 4,
            opacity: 0.8,
          }}
        />
      )}
    </>
  );
});

// Location Card Component
const LocationCard = memo(function LocationCard({
  location,
  isUnlocked,
  onUnlock,
  onNavigateToVerse,
  onClose,
}) {
  if (!location) return null;

  return (
    <div className="absolute bottom-4 left-4 right-4 z-[1000] max-w-md mx-auto">
      <div
        className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
        style={{
          boxShadow: `0 0 30px ${location.color || '#8B5CF6'}40`,
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-white">{location.name}</h3>
            <p
              className="text-xl"
              style={{ fontFamily: "'Scheherazade New', serif" }}
              dir="rtl"
            >
              {location.nameAr}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20"
          >
            <Icons.X className="w-4 h-4 text-white" />
          </button>
        </div>

        {isUnlocked ? (
          <>
            {/* Description */}
            <p className="text-white/70 text-sm mb-3">{location.significance}</p>

            {/* Prophets */}
            <div className="flex flex-wrap gap-2 mb-3">
              {location.prophets.map((prophet) => (
                <span
                  key={prophet}
                  className="px-2 py-1 rounded-full bg-white/10 text-white/80 text-xs"
                >
                  {prophet}
                </span>
              ))}
            </div>

            {/* Events */}
            {location.events && location.events.length > 0 && (
              <div className="space-y-2">
                <p className="text-white/60 text-xs uppercase">Key Events</p>
                {location.events.slice(0, 2).map((event, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-white/5 border border-white/10"
                  >
                    <p className="text-white text-sm font-medium">{event.name}</p>
                    {event.verses && event.verses.length > 0 && (
                      <button
                        onClick={() => {
                          const [surah, ayah] = event.verses[0].split(':');
                          onNavigateToVerse(parseInt(surah), parseInt(ayah));
                        }}
                        className="text-xs mt-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-all"
                        style={{ color: location.color || '#8B5CF6' }}
                      >
                        Read {event.verses[0]}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          // Locked state
          <div className="text-center py-4">
            <Icons.Lock className="w-12 h-12 text-white/30 mx-auto mb-3" />
            <p className="text-white/60 text-sm mb-4">
              Read related verses to unlock this location
            </p>
            <button
              onClick={() => onUnlock(location.id)}
              className="px-4 py-2 rounded-xl text-white font-medium transition-all"
              style={{
                background: `linear-gradient(135deg, ${location.color || '#8B5CF6'}, ${location.color || '#8B5CF6'}cc)`,
              }}
            >
              Unlock Now (+3 XP)
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

// Journey Selector Component
const JourneySelector = memo(function JourneySelector({
  journeys,
  activeJourney,
  onSelect,
}) {
  return (
    <div className="absolute top-4 left-4 z-[1000] max-w-xs">
      <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/20">
        <p className="text-white/60 text-xs uppercase mb-2">Prophet Journeys</p>
        <div className="space-y-1">
          {journeys.map((journey) => (
            <button
              key={journey.id}
              onClick={() => onSelect(journey.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all ${
                activeJourney === journey.id
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: journey.color }}
              />
              <span className="text-sm">{journey.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

// Progress Bar Component
const ProgressBar = memo(function ProgressBar({
  unlockedCount,
  totalCount,
}) {
  const percent = (unlockedCount / totalCount) * 100;

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] w-64">
      <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/60 text-xs">Locations Discovered</span>
          <span className="text-white text-sm font-medium">{unlockedCount}/{totalCount}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percent}%`,
              background: 'linear-gradient(90deg, #10B981, #3B82F6, #8B5CF6)',
            }}
          />
        </div>
      </div>
    </div>
  );
});

// Main Interactive Map Component
const InteractiveMap = memo(function InteractiveMap({
  isVisible,
  onClose,
  onNavigateToVerse,
}) {
  const [mapRef, setMapRef] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeJourney, setActiveJourney] = useState(null);
  const [journeyProgress, setJourneyProgress] = useState(0);
  const [unlockedLocations, setUnlockedLocations] = useState([]);

  const locations = useMemo(() => getAllLocations(), []);
  const journeys = useMemo(() => Object.values(PROPHET_JOURNEYS), []);

  // Load unlocked locations
  useEffect(() => {
    const data = getGamificationData();
    setUnlockedLocations(data.unlockedLocations || ['makkah']);
  }, [isVisible]);

  // Journey animation - with proper RAF cleanup
  useEffect(() => {
    if (!activeJourney) return;

    setJourneyProgress(0);
    const duration = 3000; // 3 seconds
    const startTime = Date.now();
    let rafId = null;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setJourneyProgress(progress);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    // Cleanup: cancel animation frame if activeJourney changes or unmounts
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activeJourney]);

  const handleMapReady = useCallback((map) => {
    setMapRef(map);
  }, []);

  const handleZoomIn = useCallback(() => {
    if (mapRef) mapRef.zoomIn();
  }, [mapRef]);

  const handleZoomOut = useCallback(() => {
    if (mapRef) mapRef.zoomOut();
  }, [mapRef]);

  const handleReset = useCallback(() => {
    if (mapRef) {
      mapRef.setView([25, 40], 4, { animate: true });
    }
  }, [mapRef]);

  const handleLocationClick = useCallback((location) => {
    setSelectedLocation(location);
    recordMapVisit(location.id);

    // Center map on location
    if (mapRef) {
      mapRef.setView([location.coords[0], location.coords[1]], 8, { animate: true });
    }
  }, [mapRef]);

  const handleUnlockLocation = useCallback((locationId) => {
    const result = unlockLocation(locationId);
    if (result.unlocked) {
      setUnlockedLocations(prev => [...prev, locationId]);
    }
  }, []);

  const handleNavigateToVerse = useCallback((surahId, ayahNum) => {
    onNavigateToVerse(surahId, ayahNum);
    onClose();
  }, [onNavigateToVerse, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999]">
      {/* Map Container */}
      <MapContainer
        center={[25, 40]}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <MapController onMapReady={handleMapReady} />

        {/* Satellite Tile Layer */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Esri"
        />

        {/* Labels Layer */}
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png"
          attribution="Stamen"
          opacity={0.7}
        />

        {/* Journey Paths */}
        {journeys.map((journey) => (
          <JourneyPath
            key={journey.id}
            journey={journey}
            isActive={activeJourney === journey.id}
            progress={activeJourney === journey.id ? journeyProgress : 0}
            color={journey.color}
          />
        ))}

        {/* Location Markers */}
        {locations.map((location) => {
          const isUnlocked = unlockedLocations.includes(location.id);
          const isSelected = selectedLocation?.id === location.id;

          return (
            <Marker
              key={location.id}
              position={[location.coords[0], location.coords[1]]}
              icon={createMarkerIcon(location.color || '#8B5CF6', isUnlocked, isSelected)}
              eventHandlers={{
                click: () => handleLocationClick(location),
              }}
            />
          );
        })}
      </MapContainer>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-20 z-[1001] w-10 h-10 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
      >
        <Icons.X className="w-5 h-5" />
      </button>

      {/* Map Controls */}
      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      {/* Journey Selector */}
      <JourneySelector
        journeys={journeys}
        activeJourney={activeJourney}
        onSelect={setActiveJourney}
      />

      {/* Progress Bar */}
      {!selectedLocation && (
        <ProgressBar
          unlockedCount={unlockedLocations.length}
          totalCount={locations.length}
        />
      )}

      {/* Location Card */}
      {selectedLocation && (
        <LocationCard
          location={selectedLocation}
          isUnlocked={unlockedLocations.includes(selectedLocation.id)}
          onUnlock={handleUnlockLocation}
          onNavigateToVerse={handleNavigateToVerse}
          onClose={() => setSelectedLocation(null)}
        />
      )}

      {/* Custom Styles */}
      <style>{`
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .leaflet-container {
          background: #1a1a2e;
        }
      `}</style>
    </div>
  );
});

export default InteractiveMap;
