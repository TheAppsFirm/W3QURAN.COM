import React, { useMemo } from 'react';

/**
 * GardenBackground - Parallax scrolling background for Garden Journey theme
 * Creates a beautiful multi-layered scrolling garden with flowers, butterflies, fountains
 */
const GardenBackground = ({ scrollPosition = 0, width = 5000, time = 'day' }) => {
  // Parallax speed multipliers for each layer
  const parallaxSpeed = {
    sky: 0,           // Static
    farFlowers: 0.15,
    nearFlowers: 0.4,
    butterflies: 0.5,
    path: 1.0,        // Full speed with carpet
  };

  // Calculate layer offset based on scroll position and speed
  const getLayerOffset = (speed) => -(scrollPosition * width * speed / 100);

  // Time-based color schemes for garden
  const colorSchemes = {
    day: {
      skyTop: '#E0F7FA',
      skyBottom: '#FFFFFF',
      sun: '#FCD34D',
      sunGlow: '#FEF3C7',
      grassLight: '#86EFAC',
      grassMedium: '#4ADE80',
      grassDark: '#22C55E',
      pathLight: '#FEF3C7',
      pathDark: '#FDE68A',
      cloudColor: '#FFFFFF',
      flowerPink: '#F472B6',
      flowerPurple: '#A78BFA',
      flowerYellow: '#FBBF24',
      flowerRed: '#FB7185',
      fountainWater: '#7DD3FC',
    },
    sunset: {
      skyTop: '#FED7AA',
      skyBottom: '#FECACA',
      sun: '#F97316',
      sunGlow: '#FED7AA',
      grassLight: '#65A30D',
      grassMedium: '#4D7C0F',
      grassDark: '#365314',
      pathLight: '#FDE68A',
      pathDark: '#F59E0B',
      cloudColor: '#FED7AA',
      flowerPink: '#EC4899',
      flowerPurple: '#8B5CF6',
      flowerYellow: '#F59E0B',
      flowerRed: '#EF4444',
      fountainWater: '#38BDF8',
    },
  };

  const colors = colorSchemes[time] || colorSchemes.day;

  // Generate soft clouds
  const clouds = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${i * 10 + Math.random() * 5}%`,
    top: `${5 + Math.random() * 12}%`,
    scale: 0.4 + Math.random() * 0.4,
    opacity: 0.6 + Math.random() * 0.3,
    animationDelay: `${Math.random() * 5}s`,
  })), []);

  // Generate far flower fields (small dots)
  const farFlowers = useMemo(() => Array.from({ length: Math.floor(width / 20) }, (_, i) => ({
    id: i,
    left: i * 20 + Math.random() * 15,
    top: 180 + Math.random() * 40,
    color: [colors.flowerPink, colors.flowerPurple, colors.flowerYellow, colors.flowerRed][Math.floor(Math.random() * 4)],
    size: 3 + Math.random() * 4,
  })), [width, colors]);

  // Generate near flowers (larger, detailed)
  const nearFlowers = useMemo(() => Array.from({ length: Math.floor(width / 50) }, (_, i) => ({
    id: i,
    left: i * 50 + Math.random() * 30,
    type: ['tulip', 'daisy', 'rose', 'sunflower'][Math.floor(Math.random() * 4)],
    color: [colors.flowerPink, colors.flowerPurple, colors.flowerYellow, colors.flowerRed][Math.floor(Math.random() * 4)],
    scale: 0.6 + Math.random() * 0.5,
  })), [width, colors]);

  // Generate butterflies
  const butterflies = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${i * 8 + Math.random() * 5}%`,
    top: `${40 + Math.random() * 30}%`,
    color: [colors.flowerPink, colors.flowerPurple, '#38BDF8', '#FBBF24'][Math.floor(Math.random() * 4)],
    animationDelay: `${Math.random() * 3}s`,
    scale: 0.5 + Math.random() * 0.5,
  })), [colors]);

  // Generate fountains (at milestone positions)
  const fountains = useMemo(() => {
    const count = Math.floor(width / 1000); // One fountain per 1000px
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * 1000 + 500,
    }));
  }, [width]);

  // Generate flower arches (stations decoration)
  const flowerArches = useMemo(() => {
    const count = Math.floor(width / 250);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * 250,
    }));
  }, [width]);

  // Generate path stones
  const pathStones = useMemo(() => {
    const count = Math.floor(width / 40);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * 40,
      offset: Math.random() * 10 - 5,
      width: 30 + Math.random() * 15,
    }));
  }, [width]);

  // Cloud SVG component
  const Cloud = ({ scale = 1, opacity = 1 }) => (
    <svg width={60 * scale} height={30 * scale} viewBox="0 0 60 30" style={{ opacity }}>
      <ellipse cx="15" cy="20" rx="12" ry="10" fill={colors.cloudColor} />
      <ellipse cx="30" cy="15" rx="15" ry="12" fill={colors.cloudColor} />
      <ellipse cx="45" cy="20" rx="12" ry="10" fill={colors.cloudColor} />
      <ellipse cx="25" cy="22" rx="10" ry="8" fill={colors.cloudColor} />
      <ellipse cx="38" cy="22" rx="10" ry="8" fill={colors.cloudColor} />
    </svg>
  );

  // Flower SVG components
  const Tulip = ({ color = '#F472B6', scale = 1 }) => (
    <svg width={20 * scale} height={35 * scale} viewBox="0 0 20 35">
      <path d="M10 35 L10 18" stroke="#22C55E" strokeWidth="2" />
      <ellipse cx="10" cy="10" rx="8" ry="10" fill={color} />
      <path d="M10 0 Q5 8 10 12 Q15 8 10 0" fill={color} opacity="0.8" />
    </svg>
  );

  const Daisy = ({ color = '#FBBF24', scale = 1 }) => (
    <svg width={24 * scale} height={35 * scale} viewBox="0 0 24 35">
      <path d="M12 35 L12 16" stroke="#22C55E" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
        <ellipse
          key={angle}
          cx={12 + Math.cos(angle * Math.PI / 180) * 6}
          cy={10 + Math.sin(angle * Math.PI / 180) * 6}
          rx="4"
          ry="6"
          fill="white"
          transform={`rotate(${angle} 12 10)`}
        />
      ))}
      <circle cx="12" cy="10" r="5" fill={color} />
    </svg>
  );

  const Rose = ({ color = '#FB7185', scale = 1 }) => (
    <svg width={22 * scale} height={35 * scale} viewBox="0 0 22 35">
      <path d="M11 35 L11 15" stroke="#22C55E" strokeWidth="2" />
      <circle cx="11" cy="10" r="8" fill={color} />
      <circle cx="11" cy="10" r="5" fill={color} opacity="0.7" />
      <circle cx="11" cy="10" r="3" fill={color} opacity="0.5" />
    </svg>
  );

  const Sunflower = ({ scale = 1 }) => (
    <svg width={28 * scale} height={40 * scale} viewBox="0 0 28 40">
      <path d="M14 40 L14 18" stroke="#22C55E" strokeWidth="3" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => (
        <ellipse
          key={angle}
          cx={14 + Math.cos(angle * Math.PI / 180) * 8}
          cy={12 + Math.sin(angle * Math.PI / 180) * 8}
          rx="5"
          ry="8"
          fill="#FBBF24"
          transform={`rotate(${angle} 14 12)`}
        />
      ))}
      <circle cx="14" cy="12" r="6" fill="#78350F" />
    </svg>
  );

  // Butterfly SVG component
  const Butterfly = ({ color = '#F472B6', scale = 1 }) => (
    <svg width={20 * scale} height={16 * scale} viewBox="0 0 20 16" className="butterfly-animate">
      <ellipse cx="10" cy="8" rx="1.5" ry="6" fill="#1E293B" />
      <ellipse cx="5" cy="5" rx="4" ry="5" fill={color} opacity="0.9" />
      <ellipse cx="15" cy="5" rx="4" ry="5" fill={color} opacity="0.9" />
      <ellipse cx="5" cy="11" rx="3" ry="4" fill={color} opacity="0.7" />
      <ellipse cx="15" cy="11" rx="3" ry="4" fill={color} opacity="0.7" />
      <circle cx="5" cy="5" r="1.5" fill="white" opacity="0.5" />
      <circle cx="15" cy="5" r="1.5" fill="white" opacity="0.5" />
    </svg>
  );

  // Fountain SVG component
  const Fountain = () => (
    <svg width="80" height="100" viewBox="0 0 80 100">
      {/* Base */}
      <ellipse cx="40" cy="90" rx="35" ry="10" fill="#94A3B8" />
      <rect x="10" y="70" width="60" height="20" rx="5" fill="#CBD5E1" />

      {/* Bowl */}
      <ellipse cx="40" cy="70" rx="25" ry="8" fill="#94A3B8" />
      <ellipse cx="40" cy="68" rx="20" ry="6" fill={colors.fountainWater} />

      {/* Center pillar */}
      <rect x="35" y="40" width="10" height="30" fill="#CBD5E1" />

      {/* Water spray */}
      <path d="M40 40 Q30 20 25 35" stroke={colors.fountainWater} strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M40 40 Q50 20 55 35" stroke={colors.fountainWater} strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M40 40 L40 15" stroke={colors.fountainWater} strokeWidth="4" fill="none" opacity="0.8" />

      {/* Water droplets */}
      <circle cx="25" cy="40" r="2" fill={colors.fountainWater} opacity="0.6" />
      <circle cx="55" cy="42" r="2" fill={colors.fountainWater} opacity="0.6" />
      <circle cx="40" cy="18" r="3" fill={colors.fountainWater} opacity="0.7" />
    </svg>
  );

  const renderFlower = (flower) => {
    switch (flower.type) {
      case 'tulip': return <Tulip color={flower.color} scale={flower.scale} />;
      case 'daisy': return <Daisy color={flower.color} scale={flower.scale} />;
      case 'rose': return <Rose color={flower.color} scale={flower.scale} />;
      case 'sunflower': return <Sunflower scale={flower.scale} />;
      default: return <Tulip color={flower.color} scale={flower.scale} />;
    }
  };

  return (
    <div
      className="garden-background"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: `linear-gradient(180deg, ${colors.skyTop} 0%, ${colors.skyBottom} 100%)`,
      }}
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes butterflyFloat {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(-3deg); }
          75% { transform: translateY(-12px) rotate(3deg); }
        }

        @keyframes cloudDrift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }

        @keyframes waterSpray {
          0%, 100% { opacity: 0.7; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.1); }
        }

        @keyframes flowerSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        .butterfly-animate {
          animation: butterflyFloat 2s ease-in-out infinite;
        }
      `}</style>

      {/* Sun */}
      <div style={{
        position: 'absolute',
        top: 30,
        right: 80,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${colors.sun}, ${colors.sunGlow})`,
        boxShadow: `0 0 60px ${colors.sunGlow}, 0 0 100px ${colors.sunGlow}`,
      }} />

      {/* Clouds Layer */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {clouds.map(cloud => (
          <div
            key={cloud.id}
            style={{
              position: 'absolute',
              left: cloud.left,
              top: cloud.top,
              animation: `cloudDrift 8s ease-in-out infinite`,
              animationDelay: cloud.animationDelay,
            }}
          >
            <Cloud scale={cloud.scale} opacity={cloud.opacity} />
          </div>
        ))}
      </div>

      {/* Far grass/flower field */}
      <div style={{
        position: 'absolute',
        bottom: 160,
        left: 0,
        width: '100%',
        height: 100,
        background: `linear-gradient(180deg, ${colors.grassLight}80 0%, ${colors.grassMedium} 100%)`,
      }} />

      {/* Far Flowers Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 160,
          left: getLayerOffset(parallaxSpeed.farFlowers),
          width: width,
          height: 60,
        }}
      >
        {farFlowers.map(flower => (
          <div
            key={flower.id}
            style={{
              position: 'absolute',
              left: flower.left,
              bottom: flower.top - 180,
              width: flower.size,
              height: flower.size,
              borderRadius: '50%',
              background: flower.color,
            }}
          />
        ))}
      </div>

      {/* Near grass */}
      <div style={{
        position: 'absolute',
        bottom: 80,
        left: 0,
        width: '100%',
        height: 100,
        background: `linear-gradient(180deg, ${colors.grassMedium} 0%, ${colors.grassDark} 100%)`,
      }} />

      {/* Near Flowers Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: getLayerOffset(parallaxSpeed.nearFlowers),
          width: width,
          height: 100,
        }}
      >
        {nearFlowers.map(flower => (
          <div
            key={flower.id}
            style={{
              position: 'absolute',
              left: flower.left,
              bottom: 20,
              animation: 'flowerSway 3s ease-in-out infinite',
              animationDelay: `${flower.id * 0.1}s`,
            }}
          >
            {renderFlower(flower)}
          </div>
        ))}
      </div>

      {/* Fountains Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          left: getLayerOffset(parallaxSpeed.nearFlowers),
          width: width,
          height: 120,
        }}
      >
        {fountains.map(fountain => (
          <div
            key={fountain.id}
            style={{
              position: 'absolute',
              left: fountain.left,
              bottom: 10,
              animation: 'waterSpray 2s ease-in-out infinite',
            }}
          >
            <Fountain />
          </div>
        ))}
      </div>

      {/* Butterflies Layer */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {butterflies.map(butterfly => (
          <div
            key={butterfly.id}
            style={{
              position: 'absolute',
              left: butterfly.left,
              top: butterfly.top,
              animationDelay: butterfly.animationDelay,
            }}
          >
            <Butterfly color={butterfly.color} scale={butterfly.scale} />
          </div>
        ))}
      </div>

      {/* Path Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: getLayerOffset(parallaxSpeed.path),
          width: width,
          height: 90,
        }}
      >
        {/* Main path */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 60,
          background: `linear-gradient(180deg, ${colors.pathLight} 0%, ${colors.pathDark} 100%)`,
          borderTop: `3px solid ${colors.grassDark}`,
        }} />

        {/* Path stones */}
        {pathStones.map(stone => (
          <div
            key={stone.id}
            style={{
              position: 'absolute',
              left: stone.left,
              bottom: 15 + stone.offset,
              width: stone.width,
              height: 20,
              background: `linear-gradient(135deg, #F5F5F4 0%, #E7E5E4 100%)`,
              borderRadius: '50%',
              border: '2px solid #D6D3D1',
              opacity: 0.8,
            }}
          />
        ))}

        {/* Grass tufts along path edge */}
        {Array.from({ length: Math.floor(width / 60) }, (_, i) => (
          <div
            key={`grass-${i}`}
            style={{
              position: 'absolute',
              left: i * 60 + Math.random() * 30,
              bottom: 55,
              width: 0,
              height: 0,
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: `12px solid ${colors.grassDark}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GardenBackground;
