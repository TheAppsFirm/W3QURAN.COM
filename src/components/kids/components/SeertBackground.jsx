import React, { useMemo } from 'react';

/**
 * SeertBackground - Parallax scrolling background for Seerah Journey theme
 * Creates a beautiful Arabian desert landscape with dunes, palm trees, stars, and oases
 */
const SeertBackground = ({ scrollPosition = 0, width = 5000, time = 'sunset' }) => {
  // Parallax speed multipliers for each layer
  const parallaxSpeed = {
    sky: 0,           // Static
    farDunes: 0.15,
    palms: 0.35,
    nearDunes: 0.55,
    path: 1.0,
  };

  // Calculate layer offset based on scroll position and speed
  const getLayerOffset = (speed) => -(scrollPosition * width * speed / 100);

  // Time-based color schemes for Arabian desert
  const colorSchemes = {
    day: {
      skyTop: '#7DD3FC',
      skyMiddle: '#BAE6FD',
      skyBottom: '#FEF3C7',
      sun: '#FCD34D',
      sunGlow: '#FEF3C7',
      duneLight: '#F59E0B',
      duneMedium: '#D97706',
      duneDark: '#B45309',
      palmTrunk: '#78350F',
      palmLeaves: '#166534',
      sandPath: '#FDE68A',
      sandPathDark: '#FBBF24',
    },
    sunset: {
      skyTop: '#F97316',
      skyMiddle: '#FB923C',
      skyBottom: '#FDE68A',
      sun: '#EF4444',
      sunGlow: '#FCA5A5',
      duneLight: '#F59E0B',
      duneMedium: '#D97706',
      duneDark: '#92400E',
      palmTrunk: '#451A03',
      palmLeaves: '#14532D',
      sandPath: '#FDE68A',
      sandPathDark: '#F59E0B',
    },
    night: {
      skyTop: '#1E1B4B',
      skyMiddle: '#312E81',
      skyBottom: '#4338CA',
      sun: '#F5F5F4', // Moon
      sunGlow: '#E0E7FF',
      duneLight: '#78350F',
      duneMedium: '#451A03',
      duneDark: '#292524',
      palmTrunk: '#1C1917',
      palmLeaves: '#052E16',
      sandPath: '#92400E',
      sandPathDark: '#78350F',
    },
  };

  const colors = colorSchemes[time] || colorSchemes.sunset;

  // Generate stars (for night and sunset)
  const stars = useMemo(() => {
    if (time === 'day') return [];
    return Array.from({ length: time === 'night' ? 80 : 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 40}%`,
      size: 1 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.6,
      animationDelay: `${Math.random() * 3}s`,
    }));
  }, [time]);

  // Generate far dunes path
  const farDunesPath = useMemo(() => {
    const points = ['M0,280'];
    const numDunes = Math.floor(width / 200);

    for (let i = 0; i < numDunes; i++) {
      const x1 = i * 200 + 50;
      const x2 = i * 200 + 100;
      const x3 = i * 200 + 150;
      const x4 = i * 200 + 200;
      const y = 280 - (30 + Math.random() * 50);

      points.push(`Q${x1},${y} ${x2},${y + 10}`);
      points.push(`Q${x3},${y + 20} ${x4},280`);
    }

    points.push(`L${width},280 L${width},400 L0,400 Z`);
    return points.join(' ');
  }, [width]);

  // Generate near dunes path
  const nearDunesPath = useMemo(() => {
    const points = ['M0,320'];
    const numDunes = Math.floor(width / 150);

    for (let i = 0; i < numDunes; i++) {
      const x1 = i * 150 + 40;
      const x2 = i * 150 + 75;
      const x3 = i * 150 + 110;
      const x4 = i * 150 + 150;
      const y = 320 - (20 + Math.random() * 40);

      points.push(`Q${x1},${y} ${x2},${y + 5}`);
      points.push(`Q${x3},${y + 15} ${x4},320`);
    }

    points.push(`L${width},320 L${width},400 L0,400 Z`);
    return points.join(' ');
  }, [width]);

  // Generate palm trees
  const palmTrees = useMemo(() => Array.from({ length: Math.floor(width / 200) }, (_, i) => ({
    id: i,
    left: i * 200 + Math.random() * 80,
    scale: 0.7 + Math.random() * 0.4,
    hasOasis: i % 5 === 2, // Every 5th palm has an oasis
  })), [width]);

  // Generate path markings
  const pathMarkers = useMemo(() => {
    const count = Math.floor(width / 80);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * 80 + Math.random() * 30,
      type: i % 10 === 0 ? 'post' : 'footprint',
    }));
  }, [width]);

  // Palm Tree SVG component
  const PalmTree = ({ scale = 1 }) => (
    <svg width={40 * scale} height={80 * scale} viewBox="0 0 40 80">
      {/* Trunk */}
      <path
        d="M20 80 Q18 60 20 40 Q22 20 20 15"
        stroke={colors.palmTrunk}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Trunk texture */}
      {[25, 35, 45, 55, 65].map(y => (
        <ellipse key={y} cx="20" cy={y} rx="4" ry="2" fill={colors.palmTrunk} opacity="0.6" />
      ))}

      {/* Palm fronds */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => (
        <path
          key={angle}
          d={`M20,15 Q${20 + Math.cos(angle * Math.PI / 180) * 15},${15 + Math.sin(angle * Math.PI / 180) * 8} ${20 + Math.cos(angle * Math.PI / 180) * 25},${15 + Math.sin(angle * Math.PI / 180) * 20}`}
          stroke={colors.palmLeaves}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      ))}

      {/* Coconuts */}
      <circle cx="18" cy="18" r="3" fill="#78350F" />
      <circle cx="23" cy="20" r="3" fill="#78350F" />
    </svg>
  );

  // Oasis SVG component
  const Oasis = () => (
    <svg width="100" height="40" viewBox="0 0 100 40">
      {/* Water */}
      <ellipse cx="50" cy="30" rx="45" ry="10" fill="#38BDF8" opacity="0.7" />
      <ellipse cx="50" cy="28" rx="40" ry="8" fill="#7DD3FC" opacity="0.5" />

      {/* Grass around oasis */}
      {[10, 20, 30, 70, 80, 90].map(x => (
        <path
          key={x}
          d={`M${x},35 Q${x-3},25 ${x},20 Q${x+3},25 ${x},35`}
          fill="#166534"
        />
      ))}
    </svg>
  );

  // Crescent Moon (for night)
  const CrescentMoon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="18" fill={colors.sun} />
      <circle cx="32" cy="22" r="14" fill={colors.skyTop} />
    </svg>
  );

  return (
    <div
      className="seert-background"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: `linear-gradient(180deg, ${colors.skyTop} 0%, ${colors.skyMiddle} 40%, ${colors.skyBottom} 100%)`,
      }}
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes palmSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        @keyframes waterShimmer {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        @keyframes dustDrift {
          0%, 100% { transform: translateX(0); opacity: 0.3; }
          50% { transform: translateX(10px); opacity: 0.5; }
        }
      `}</style>

      {/* Stars Layer (night/sunset only) */}
      {stars.length > 0 && (
        <div style={{ position: 'absolute', inset: 0 }}>
          {stars.map(star => (
            <div
              key={star.id}
              style={{
                position: 'absolute',
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                borderRadius: '50%',
                background: 'white',
                opacity: star.opacity,
                animation: `starTwinkle 2s ease-in-out infinite`,
                animationDelay: star.animationDelay,
              }}
            />
          ))}
        </div>
      )}

      {/* Sun or Moon */}
      <div style={{
        position: 'absolute',
        top: time === 'night' ? 40 : 60,
        right: time === 'night' ? 60 : 100,
      }}>
        {time === 'night' ? (
          <CrescentMoon />
        ) : (
          <div style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${colors.sun}, ${colors.sunGlow})`,
            boxShadow: `0 0 40px ${colors.sunGlow}, 0 0 80px ${colors.sunGlow}`,
          }} />
        )}
      </div>

      {/* Far Dunes Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: getLayerOffset(parallaxSpeed.farDunes),
          width: width,
          height: 200,
        }}
      >
        <svg width={width} height="200" viewBox={`0 0 ${width} 200`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="farDuneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.duneLight} />
              <stop offset="100%" stopColor={colors.duneMedium} />
            </linearGradient>
          </defs>
          <path d={farDunesPath} fill="url(#farDuneGrad)" />
        </svg>
      </div>

      {/* Palm Trees Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          left: getLayerOffset(parallaxSpeed.palms),
          width: width,
          height: 150,
        }}
      >
        {palmTrees.map(palm => (
          <div
            key={palm.id}
            style={{
              position: 'absolute',
              left: palm.left,
              bottom: 0,
              transformOrigin: 'bottom center',
              animation: 'palmSway 4s ease-in-out infinite',
              animationDelay: `${palm.id * 0.2}s`,
            }}
          >
            <PalmTree scale={palm.scale} />
            {palm.hasOasis && (
              <div style={{
                position: 'absolute',
                bottom: -5,
                left: -30,
                animation: 'waterShimmer 3s ease-in-out infinite',
              }}>
                <Oasis />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Near Dunes Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: getLayerOffset(parallaxSpeed.nearDunes),
          width: width,
          height: 150,
        }}
      >
        <svg width={width} height="150" viewBox={`0 0 ${width} 150`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="nearDuneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.duneMedium} />
              <stop offset="100%" stopColor={colors.duneDark} />
            </linearGradient>
          </defs>
          <path d={nearDunesPath} fill="url(#nearDuneGrad)" />
        </svg>

        {/* Wind lines / sand particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${i * 12}%`,
              bottom: 30 + Math.random() * 40,
              width: 40,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${colors.duneLight}40, transparent)`,
              animation: 'dustDrift 3s ease-in-out infinite',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Sand Path Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: getLayerOffset(parallaxSpeed.path),
          width: width,
          height: 70,
        }}
      >
        {/* Main path */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 60,
          background: `linear-gradient(180deg, ${colors.sandPath} 0%, ${colors.sandPathDark} 100%)`,
          borderTop: `3px solid ${colors.duneDark}`,
        }} />

        {/* Path markers */}
        {pathMarkers.map(marker => (
          <div key={marker.id}>
            {marker.type === 'post' ? (
              <div style={{
                position: 'absolute',
                left: marker.left,
                bottom: 55,
                width: 8,
                height: 30,
                background: 'linear-gradient(90deg, #78350F 0%, #92400E 50%, #78350F 100%)',
                borderRadius: 2,
              }}>
                <div style={{
                  position: 'absolute',
                  top: -8,
                  left: -6,
                  width: 20,
                  height: 10,
                  background: '#DC2626',
                  borderRadius: 3,
                  border: '1px solid #991B1B',
                }} />
              </div>
            ) : (
              // Footprint-like marks in sand
              <div style={{
                position: 'absolute',
                left: marker.left,
                bottom: 20,
                width: 15,
                height: 8,
                background: colors.sandPathDark,
                borderRadius: '50%',
                opacity: 0.4,
              }} />
            )}
          </div>
        ))}

        {/* Small sand ripples */}
        {Array.from({ length: Math.floor(width / 100) }, (_, i) => (
          <div
            key={`ripple-${i}`}
            style={{
              position: 'absolute',
              left: i * 100 + Math.random() * 50,
              bottom: 40 + Math.random() * 15,
              width: 30 + Math.random() * 20,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${colors.sandPathDark}60, transparent)`,
              borderRadius: 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SeertBackground;
