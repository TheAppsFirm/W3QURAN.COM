import React, { useMemo } from 'react';

/**
 * TrackBackground - Parallax scrolling background for Train Journey game
 * Creates a beautiful multi-layered scrolling landscape with sky, mountains, trees, and track
 */
const TrackBackground = ({ scrollPosition = 0, width = 5000, time = 'day' }) => {
  // Parallax speed multipliers for each layer
  const parallaxSpeed = {
    sky: 0,           // Static
    farMountains: 0.1,
    nearMountains: 0.3,
    trees: 0.6,
    track: 1.0,       // Full speed with train
  };

  // Calculate layer offset based on scroll position and speed
  const getLayerOffset = (speed) => -(scrollPosition * width * speed / 100);

  // Time-based color schemes
  const colorSchemes = {
    day: {
      skyTop: '#87CEEB',
      skyBottom: '#E0F7FA',
      sun: '#FCD34D',
      sunGlow: '#FEF3C7',
      farMountain: '#6366F1',
      farMountainLight: '#818CF8',
      nearHill: '#10B981',
      nearHillLight: '#34D399',
      treeDark: '#047857',
      treeLight: '#059669',
      grass: '#84CC16',
      cloudColor: '#FFFFFF',
    },
    sunset: {
      skyTop: '#F97316',
      skyBottom: '#FCD34D',
      sun: '#EF4444',
      sunGlow: '#FCA5A5',
      farMountain: '#7C3AED',
      farMountainLight: '#A78BFA',
      nearHill: '#065F46',
      nearHillLight: '#059669',
      treeDark: '#064E3B',
      treeLight: '#047857',
      grass: '#65A30D',
      cloudColor: '#FED7AA',
    },
    night: {
      skyTop: '#1E1B4B',
      skyBottom: '#312E81',
      sun: '#F5F5F4', // Moon
      sunGlow: '#E0E7FF',
      farMountain: '#3730A3',
      farMountainLight: '#4338CA',
      nearHill: '#064E3B',
      nearHillLight: '#047857',
      treeDark: '#022C22',
      treeLight: '#064E3B',
      grass: '#365314',
      cloudColor: '#6366F1',
    },
  };

  const colors = colorSchemes[time] || colorSchemes.day;

  // Generate clouds with memoization
  const clouds = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${i * 12 + Math.random() * 5}%`,
    top: `${8 + Math.random() * 15}%`,
    scale: 0.5 + Math.random() * 0.5,
    opacity: 0.7 + Math.random() * 0.3,
    animationDelay: `${Math.random() * 5}s`,
  })), []);

  // Generate far mountain peaks
  const farMountainPath = useMemo(() => {
    const peaks = [];
    const numPeaks = 6;
    const peakWidth = width / numPeaks;

    peaks.push(`M0,300`);

    for (let i = 0; i < numPeaks; i++) {
      const x1 = i * peakWidth + peakWidth * 0.3;
      const x2 = i * peakWidth + peakWidth * 0.5;
      const x3 = i * peakWidth + peakWidth * 0.7;
      const y1 = 300 - (80 + Math.random() * 120);

      peaks.push(`L${x1},${y1 + 30}`);
      peaks.push(`L${x2},${y1}`);
      peaks.push(`L${x3},${y1 + 40}`);
    }

    peaks.push(`L${width},300`);
    peaks.push(`L${width},400 L0,400 Z`);

    return peaks.join(' ');
  }, [width]);

  // Generate near hills
  const nearHillPath = useMemo(() => {
    const hills = [];
    const numHills = 10;
    const hillWidth = width / numHills;

    hills.push(`M0,350`);

    for (let i = 0; i < numHills; i++) {
      const x1 = i * hillWidth;
      const x2 = i * hillWidth + hillWidth * 0.5;
      const x3 = (i + 1) * hillWidth;
      const y = 350 - (40 + Math.random() * 60);

      hills.push(`Q${x1 + hillWidth * 0.25},${y} ${x2},${y + 10}`);
      hills.push(`Q${x2 + hillWidth * 0.25},${y + 20} ${x3},350`);
    }

    hills.push(`L${width},400 L0,400 Z`);

    return hills.join(' ');
  }, [width]);

  // Generate trees with variety
  const trees = useMemo(() => Array.from({ length: Math.floor(width / 80) }, (_, i) => ({
    id: i,
    type: ['pine', 'round', 'bush'][Math.floor(Math.random() * 3)],
    left: i * 80 + Math.random() * 40,
    scale: 0.6 + Math.random() * 0.6,
    flip: Math.random() > 0.5,
  })), [width]);

  // Generate flowers
  const flowers = useMemo(() => Array.from({ length: Math.floor(width / 60) }, (_, i) => ({
    id: i,
    left: i * 60 + Math.random() * 50,
    color: ['#EC4899', '#F472B6', '#FBBF24', '#A78BFA', '#F87171'][Math.floor(Math.random() * 5)],
    scale: 0.3 + Math.random() * 0.4,
  })), [width]);

  // Generate butterflies
  const butterflies = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${i * 12 + Math.random() * 8}%`,
    top: `${55 + Math.random() * 20}%`,
    color: ['#EC4899', '#8B5CF6', '#3B82F6', '#F59E0B'][Math.floor(Math.random() * 4)],
    animationDelay: `${Math.random() * 3}s`,
  })), []);

  // Generate track sleepers
  const sleepers = useMemo(() => {
    const count = Math.floor(width / 30);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * 30,
    }));
  }, [width]);

  // Tree SVG components
  const TreePine = ({ scale = 1, flip = false }) => (
    <svg
      width={30 * scale}
      height={50 * scale}
      viewBox="0 0 30 50"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      {/* Trunk */}
      <rect x="12" y="35" width="6" height="15" fill="#78350F" />
      {/* Tree layers */}
      <polygon points="15,0 0,20 30,20" fill={colors.treeDark} />
      <polygon points="15,8 2,25 28,25" fill={colors.treeLight} />
      <polygon points="15,15 4,35 26,35" fill={colors.treeDark} />
    </svg>
  );

  const TreeRound = ({ scale = 1 }) => (
    <svg width={35 * scale} height={45 * scale} viewBox="0 0 35 45">
      {/* Trunk */}
      <rect x="14" y="30" width="7" height="15" fill="#78350F" />
      {/* Foliage */}
      <ellipse cx="17.5" cy="18" rx="16" ry="18" fill={colors.treeLight} />
      <ellipse cx="12" cy="15" rx="10" ry="12" fill={colors.treeDark} />
      <ellipse cx="24" cy="20" rx="8" ry="10" fill={colors.treeDark} />
    </svg>
  );

  const Bush = ({ scale = 1 }) => (
    <svg width={25 * scale} height={20 * scale} viewBox="0 0 25 20">
      <ellipse cx="12.5" cy="12" rx="12" ry="8" fill={colors.treeLight} />
      <ellipse cx="8" cy="10" rx="7" ry="6" fill={colors.treeDark} />
      <ellipse cx="18" cy="11" rx="6" ry="5" fill={colors.treeDark} />
    </svg>
  );

  // Cloud SVG component
  const Cloud = ({ scale = 1, opacity = 1 }) => (
    <svg
      width={80 * scale}
      height={40 * scale}
      viewBox="0 0 80 40"
      style={{ opacity }}
    >
      <ellipse cx="25" cy="25" rx="18" ry="12" fill={colors.cloudColor} />
      <ellipse cx="45" cy="20" rx="22" ry="16" fill={colors.cloudColor} />
      <ellipse cx="65" cy="25" rx="15" ry="10" fill={colors.cloudColor} />
      <ellipse cx="35" cy="28" rx="20" ry="10" fill={colors.cloudColor} />
    </svg>
  );

  // Butterfly component
  const Butterfly = ({ color = '#EC4899' }) => (
    <svg width="20" height="16" viewBox="0 0 20 16" className="animate-bounce">
      <ellipse cx="10" cy="8" rx="1.5" ry="6" fill="#1F2937" />
      <ellipse cx="5" cy="6" rx="4" ry="5" fill={color} opacity="0.8" />
      <ellipse cx="15" cy="6" rx="4" ry="5" fill={color} opacity="0.8" />
      <ellipse cx="5" cy="11" rx="3" ry="4" fill={color} opacity="0.6" />
      <ellipse cx="15" cy="11" rx="3" ry="4" fill={color} opacity="0.6" />
    </svg>
  );

  return (
    <div
      className="track-background absolute inset-0 overflow-hidden"
      style={{ width: `${width}px`, minWidth: '100%' }}
    >
      {/* Sky Layer - Static gradient background */}
      <div
        className="sky-layer absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${colors.skyTop} 0%, ${colors.skyBottom} 100%)`,
          height: '100%',
        }}
      >
        {/* Sun/Moon */}
        <div
          className="sun absolute"
          style={{
            width: time === 'night' ? '50px' : '70px',
            height: time === 'night' ? '50px' : '70px',
            background: `radial-gradient(circle, ${colors.sun} 0%, ${colors.sun} 60%, transparent 100%)`,
            boxShadow: `0 0 60px 30px ${colors.sunGlow}`,
            borderRadius: '50%',
            top: '8%',
            right: '15%',
          }}
        />

        {/* Stars for night time */}
        {time === 'night' && (
          <div className="stars absolute inset-0">
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Clouds */}
        <div className="clouds-container absolute inset-0 pointer-events-none">
          {clouds.map((cloud) => (
            <div
              key={cloud.id}
              className="cloud absolute transition-transform duration-1000"
              style={{
                left: cloud.left,
                top: cloud.top,
                transform: `translateX(${scrollPosition * 0.05}px)`,
                animation: `gentleFloat 8s ease-in-out infinite`,
                animationDelay: cloud.animationDelay,
              }}
            >
              <Cloud scale={cloud.scale} opacity={cloud.opacity} />
            </div>
          ))}
        </div>

        {/* Birds for daytime */}
        {time === 'day' && (
          <div className="birds absolute" style={{ top: '20%', left: '30%' }}>
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                width="20"
                height="10"
                viewBox="0 0 20 10"
                className="absolute"
                style={{
                  left: `${i * 30}px`,
                  top: `${Math.sin(i) * 15}px`,
                  animation: `gentleFloat 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <path
                  d="M0,5 Q5,0 10,5 Q15,0 20,5"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.5"
                />
              </svg>
            ))}
          </div>
        )}
      </div>

      {/* Far Mountains Layer */}
      <div
        className="far-mountains absolute bottom-0 left-0 w-full"
        style={{
          transform: `translateX(${getLayerOffset(parallaxSpeed.farMountains)}px)`,
          width: `${width * 1.5}px`,
        }}
      >
        <svg
          width={width * 1.5}
          height="400"
          viewBox={`0 0 ${width} 400`}
          preserveAspectRatio="none"
          className="absolute bottom-0"
          style={{ opacity: 0.8 }}
        >
          <defs>
            <linearGradient id="farMountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.farMountain} />
              <stop offset="100%" stopColor={colors.farMountainLight} />
            </linearGradient>
            {/* Haze effect */}
            <filter id="mountainHaze">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>
          <path
            d={farMountainPath}
            fill="url(#farMountainGradient)"
            filter="url(#mountainHaze)"
          />
        </svg>
      </div>

      {/* Near Hills Layer */}
      <div
        className="near-hills absolute bottom-0 left-0"
        style={{
          transform: `translateX(${getLayerOffset(parallaxSpeed.nearMountains)}px)`,
          width: `${width * 1.5}px`,
        }}
      >
        <svg
          width={width * 1.5}
          height="400"
          viewBox={`0 0 ${width} 400`}
          preserveAspectRatio="none"
          className="absolute bottom-0"
        >
          <defs>
            <linearGradient id="nearHillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.nearHill} />
              <stop offset="100%" stopColor={colors.nearHillLight} />
            </linearGradient>
          </defs>
          <path d={nearHillPath} fill="url(#nearHillGradient)" />
        </svg>
      </div>

      {/* Trees Layer */}
      <div
        className="trees-layer absolute bottom-[15%] left-0"
        style={{
          transform: `translateX(${getLayerOffset(parallaxSpeed.trees)}px)`,
          width: `${width}px`,
        }}
      >
        {trees.map((tree) => (
          <div
            key={tree.id}
            className="absolute"
            style={{
              left: `${tree.left}px`,
              bottom: '0',
            }}
          >
            {tree.type === 'pine' && <TreePine scale={tree.scale} flip={tree.flip} />}
            {tree.type === 'round' && <TreeRound scale={tree.scale} />}
            {tree.type === 'bush' && <Bush scale={tree.scale} />}
          </div>
        ))}

        {/* Flowers at ground level */}
        {flowers.map((flower) => (
          <div
            key={`flower-${flower.id}`}
            className="absolute"
            style={{
              left: `${flower.left}px`,
              bottom: '-5px',
            }}
          >
            <svg width={15 * flower.scale} height={15 * flower.scale} viewBox="0 0 15 15">
              <circle cx="7.5" cy="7.5" r="4" fill={flower.color} />
              <circle cx="7.5" cy="7.5" r="2" fill="#FEF3C7" />
              <rect x="6.5" y="11" width="2" height="6" fill="#22C55E" />
            </svg>
          </div>
        ))}

        {/* Butterflies */}
        {butterflies.map((butterfly) => (
          <div
            key={`butterfly-${butterfly.id}`}
            className="absolute"
            style={{
              left: butterfly.left,
              top: butterfly.top,
              animation: `gentleFloat 3s ease-in-out infinite`,
              animationDelay: butterfly.animationDelay,
            }}
          >
            <Butterfly color={butterfly.color} />
          </div>
        ))}
      </div>

      {/* Ground/Grass Layer */}
      <div
        className="ground-layer absolute bottom-0 left-0 h-[15%]"
        style={{
          width: `${width}px`,
          background: `linear-gradient(to bottom, ${colors.grass} 0%, #65A30D 100%)`,
        }}
      />

      {/* Track Layer - moves with full scroll */}
      <div
        className="track-layer absolute bottom-0 left-0 h-[10%]"
        style={{
          width: `${width}px`,
        }}
      >
        {/* Gravel bed */}
        <div
          className="gravel absolute bottom-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, #78716C 0%, #57534E 100%)`,
          }}
        />

        {/* Track sleepers */}
        <div className="sleepers absolute bottom-[20%] left-0 w-full">
          {sleepers.map((sleeper) => (
            <div
              key={sleeper.id}
              className="absolute"
              style={{
                left: `${sleeper.left}px`,
                width: '20px',
                height: '8px',
                background: '#A8A29E',
                borderRadius: '2px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            />
          ))}
        </div>

        {/* Track rails */}
        <div
          className="rails absolute bottom-[30%] left-0 w-full"
          style={{ height: '4px' }}
        >
          {/* Left rail */}
          <div
            className="absolute top-0 left-0 w-full h-[3px]"
            style={{
              background: 'linear-gradient(to right, #44403C, #57534E)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)',
            }}
          />
          {/* Right rail */}
          <div
            className="absolute bottom-0 left-0 w-full h-[3px]"
            style={{
              background: 'linear-gradient(to right, #44403C, #57534E)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)',
              marginTop: '12px',
            }}
          />
        </div>

        {/* Grass edges */}
        <div
          className="grass-edge-left absolute bottom-[60%] left-0 w-full h-[15%]"
          style={{
            background: `linear-gradient(to bottom, ${colors.grass}, transparent)`,
          }}
        />
      </div>

      {/* Decorative elements that repeat */}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .cloud {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .track-background {
          will-change: transform;
        }

        .far-mountains,
        .near-hills,
        .trees-layer {
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default TrackBackground;
