/**
 * RoadBackground.jsx
 * A parallax highway/road background for the Prophet's Life motorbike journey
 * Features rolling hills, road with lane markers, and Islamic landmarks
 */

import React, { useMemo } from 'react';

const RoadBackground = ({ scrollPosition = 0, width = 5000, time = 'day' }) => {
  // Determine colors based on time of day
  const colors = useMemo(() => {
    switch (time) {
      case 'sunset':
        return {
          sky: ['#F97316', '#FB923C', '#FDE68A', '#FEF3C7'],
          mountains: '#92400E',
          hills: '#78350F',
          grass: '#365314',
          road: '#1F2937',
        };
      case 'night':
        return {
          sky: ['#0F172A', '#1E293B', '#334155', '#475569'],
          mountains: '#1E3A5F',
          hills: '#1E3A8A',
          grass: '#14532D',
          road: '#111827',
        };
      default: // day
        return {
          sky: ['#7DD3FC', '#38BDF8', '#0EA5E9', '#0284C7'],
          mountains: '#6366F1',
          hills: '#818CF8',
          grass: '#22C55E',
          road: '#374151',
        };
    }
  }, [time]);

  // Generate hills
  const hills = useMemo(() => {
    const hillCount = Math.ceil(width / 400);
    return Array.from({ length: hillCount }, (_, i) => ({
      id: i,
      x: i * 400 + Math.sin(i * 1.5) * 100,
      height: 80 + Math.sin(i * 0.8) * 40,
      width: 300 + Math.sin(i * 1.2) * 100,
    }));
  }, [width]);

  // Generate trees/palms along the road
  const trees = useMemo(() => {
    const treeCount = Math.ceil(width / 300);
    return Array.from({ length: treeCount }, (_, i) => ({
      id: i,
      x: i * 300 + Math.sin(i * 2) * 80,
      side: i % 2 === 0 ? 'top' : 'bottom',
      type: i % 3 === 0 ? 'palm' : 'cypress',
      scale: 0.7 + Math.random() * 0.4,
    }));
  }, [width]);

  // Generate landmarks (mosques, minarets) at key positions
  const landmarks = useMemo(() => {
    // Place landmarks at significant positions (representing Seerah events)
    const positions = [800, 2000, 3500, 5000, 6500, 8000];
    return positions.filter(p => p < width).map((pos, i) => ({
      id: i,
      x: pos,
      type: ['mosque', 'minaret', 'dome'][i % 3],
    }));
  }, [width]);

  // Generate lane markers
  const laneMarkers = useMemo(() => {
    const markerCount = Math.ceil(width / 50);
    return Array.from({ length: markerCount }, (_, i) => ({
      id: i,
      x: i * 50,
    }));
  }, [width]);

  // Parallax offset calculations
  const skyOffset = scrollPosition * 0.1;
  const hillOffset = scrollPosition * 0.3;
  const treeOffset = scrollPosition * 0.7;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${colors.sky.join(', ')})`,
        }}
      />

      {/* Sun/Moon */}
      <div
        className="absolute w-20 h-20 rounded-full"
        style={{
          left: `${20 + skyOffset * 0.1}%`,
          top: '10%',
          background: time === 'night'
            ? 'radial-gradient(circle, #F8FAFC 0%, #E2E8F0 50%, transparent 70%)'
            : 'radial-gradient(circle, #FEF3C7 0%, #FDE68A 50%, #FBBF24 100%)',
          boxShadow: time === 'night'
            ? '0 0 40px rgba(248, 250, 252, 0.5)'
            : '0 0 60px rgba(251, 191, 36, 0.6)',
        }}
      />

      {/* Stars (night only) */}
      {time === 'night' && (
        <div className="absolute inset-0">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${(i * 37 + skyOffset) % 100}%`,
                top: `${(i * 17) % 40}%`,
                animationDelay: `${i * 0.1}s`,
                opacity: 0.5 + Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Clouds */}
      {time !== 'night' && (
        <div className="absolute inset-0">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${((i * 25 + skyOffset * 0.2) % 120) - 20}%`,
                top: `${5 + i * 8}%`,
              }}
            >
              <svg width="120" height="60" viewBox="0 0 120 60" fill="white" opacity="0.8">
                <ellipse cx="60" cy="35" rx="50" ry="20" />
                <ellipse cx="35" cy="30" rx="30" ry="18" />
                <ellipse cx="85" cy="32" rx="28" ry="16" />
                <ellipse cx="50" cy="25" rx="25" ry="15" />
                <ellipse cx="75" cy="28" rx="22" ry="14" />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Far hills */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{ transform: `translateX(${-hillOffset}px)`, width: `${width}px` }}
      >
        {hills.map((hill) => (
          <div
            key={hill.id}
            className="absolute bottom-20 rounded-full"
            style={{
              left: hill.x,
              width: hill.width,
              height: hill.height,
              background: `linear-gradient(180deg, ${colors.hills} 0%, ${colors.mountains} 100%)`,
            }}
          />
        ))}
      </div>

      {/* Grass strip (top of road) */}
      <div
        className="absolute bottom-24 left-0 h-24"
        style={{
          width: `${width}px`,
          background: `linear-gradient(180deg, ${colors.grass} 0%, #15803D 100%)`,
        }}
      />

      {/* Trees along the road */}
      <div
        className="absolute bottom-24 left-0"
        style={{ transform: `translateX(${-treeOffset}px)`, width: `${width}px` }}
      >
        {trees.map((tree) => (
          <div
            key={tree.id}
            className="absolute"
            style={{
              left: tree.x,
              bottom: tree.side === 'top' ? '60px' : '-30px',
              transform: `scale(${tree.scale})`,
            }}
          >
            {tree.type === 'palm' ? (
              // Palm tree
              <svg width="40" height="80" viewBox="0 0 40 80">
                {/* Trunk */}
                <path d="M18 80 L18 30 Q20 25 22 30 L22 80 Z" fill="#92400E" />
                {/* Leaves */}
                <path d="M20 30 Q5 20 0 35" stroke="#15803D" strokeWidth="3" fill="none" />
                <path d="M20 30 Q35 20 40 35" stroke="#15803D" strokeWidth="3" fill="none" />
                <path d="M20 30 Q0 30 5 45" stroke="#22C55E" strokeWidth="2" fill="none" />
                <path d="M20 30 Q40 30 35 45" stroke="#22C55E" strokeWidth="2" fill="none" />
                <path d="M20 30 Q20 10 25 25" stroke="#16A34A" strokeWidth="2" fill="none" />
                <path d="M20 30 Q20 10 15 25" stroke="#16A34A" strokeWidth="2" fill="none" />
              </svg>
            ) : (
              // Cypress tree
              <svg width="30" height="70" viewBox="0 0 30 70">
                <path d="M15 0 L5 50 L12 50 L12 70 L18 70 L18 50 L25 50 Z" fill="#166534" />
                <path d="M15 5 L8 40 L22 40 Z" fill="#15803D" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Landmarks (mosques, minarets) */}
      <div
        className="absolute bottom-24 left-0"
        style={{ transform: `translateX(${-treeOffset * 0.8}px)`, width: `${width}px` }}
      >
        {landmarks.map((landmark) => (
          <div
            key={landmark.id}
            className="absolute bottom-20"
            style={{ left: landmark.x }}
          >
            {landmark.type === 'mosque' && (
              <svg width="100" height="80" viewBox="0 0 100 80">
                {/* Main dome */}
                <path d="M20 80 L20 50 Q50 10 80 50 L80 80 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
                {/* Door */}
                <rect x="40" y="55" width="20" height="25" fill="#6366F1" rx="10" />
                {/* Crescent */}
                <circle cx="50" cy="25" r="6" fill="#FBBF24" />
                <circle cx="52" cy="24" r="5" fill="#E5E7EB" />
              </svg>
            )}
            {landmark.type === 'minaret' && (
              <svg width="30" height="100" viewBox="0 0 30 100">
                {/* Tower */}
                <rect x="8" y="20" width="14" height="80" fill="#E5E7EB" />
                {/* Top */}
                <polygon points="15,0 5,20 25,20" fill="#E5E7EB" />
                {/* Crescent */}
                <circle cx="15" cy="8" r="4" fill="#FBBF24" />
                {/* Windows */}
                <rect x="11" y="35" width="8" height="12" fill="#6366F1" rx="4" />
                <rect x="11" y="55" width="8" height="12" fill="#6366F1" rx="4" />
              </svg>
            )}
            {landmark.type === 'dome' && (
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M5 60 L5 40 Q30 5 55 40 L55 60 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
                <circle cx="30" cy="20" r="5" fill="#FBBF24" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Road */}
      <div
        className="absolute bottom-0 left-0 h-24"
        style={{
          width: `${width}px`,
          background: colors.road,
        }}
      >
        {/* Road edge (white line) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/50" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50" />

        {/* Center lane markers (dashed) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-2 flex"
          style={{ width: `${width}px` }}
        >
          {laneMarkers.map((marker) => (
            <div
              key={marker.id}
              className="h-full bg-yellow-400 mr-8"
              style={{ width: '30px', marginLeft: marker.id === 0 ? '0' : '20px' }}
            />
          ))}
        </div>
      </div>

      {/* Ground strip below road */}
      <div
        className="absolute bottom-0 left-0 h-4"
        style={{
          width: `${width}px`,
          background: '#78350F',
        }}
      />
    </div>
  );
};

export default RoadBackground;
