import React, { useMemo } from 'react';

/**
 * Train2D - A cute 2D animated train component for Kids Quran Journey
 *
 * Features:
 * - Locomotive with chimney, cabin, and wheels
 * - 2 colorful passenger carriages
 * - Animated smoke puffs when moving
 * - Spinning wheels based on speed
 * - Directional flipping
 * - Bouncy movement animation
 */
const Train2D = ({
  isMoving = false,
  direction = 'right',
  speed = 0.5,
  scale = 1,
  className = '',
}) => {
  // Generate smoke puffs that rise and fade
  const smokePuffs = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
      size: 20 + Math.random() * 15,
    })), []);

  // Calculate wheel animation duration based on speed
  const wheelDuration = speed > 0 ? Math.max(0.2, 1 / (speed * 2)) : 1;
  const bounceDuration = speed > 0 ? Math.max(0.15, 0.3 / speed) : 0.3;

  // Inline styles for animations
  const styles = {
    trainContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      transform: `scale(${scale}) scaleX(${direction === 'left' ? -1 : 1})`,
      transformOrigin: 'center bottom',
      animation: isMoving ? `trainBounce ${bounceDuration}s ease-in-out infinite` : 'none',
    },
    wheel: {
      animation: isMoving ? `wheelSpin ${wheelDuration}s linear infinite` : 'none',
    },
    smokePuff: (puff) => ({
      position: 'absolute',
      width: puff.size,
      height: puff.size,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, #ffffff, #d4d4d4)',
      animation: isMoving ? `smokePuff 1.5s ease-out infinite` : 'none',
      animationDelay: `${puff.delay}s`,
      opacity: isMoving ? undefined : 0,
      left: '50%',
      transform: 'translateX(-50%)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }),
  };

  return (
    <div className={`train-2d-wrapper ${className}`}>
      {/* CSS Keyframes */}
      <style>{`
        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes smokePuff {
          0% {
            opacity: 0.9;
            transform: translateX(-50%) translateY(0) scale(0.5);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-60px) scale(1.5);
          }
        }

        @keyframes trainBounce {
          0%, 100% { transform: scale(${scale}) scaleX(${direction === 'left' ? -1 : 1}) translateY(0); }
          50% { transform: scale(${scale}) scaleX(${direction === 'left' ? -1 : 1}) translateY(-3px); }
        }
      `}</style>

      <div style={styles.trainContainer} className="train-container">
        {/* ===== LOCOMOTIVE ===== */}
        <div className="locomotive" style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          {/* Chimney with Smoke */}
          <div className="chimney-area" style={{
            position: 'relative',
            marginLeft: 25,
            marginBottom: -2,
          }}>
            {/* Chimney */}
            <div style={{
              width: 20,
              height: 25,
              background: 'linear-gradient(to right, #1f2937, #374151, #1f2937)',
              borderRadius: '4px 4px 0 0',
              border: '3px solid #111827',
              borderBottom: 'none',
              position: 'relative',
            }}>
              {/* Chimney top rim */}
              <div style={{
                position: 'absolute',
                top: -5,
                left: -5,
                width: 30,
                height: 8,
                background: 'linear-gradient(to bottom, #4b5563, #374151)',
                borderRadius: '4px 4px 2px 2px',
                border: '3px solid #111827',
              }} />
            </div>

            {/* Smoke Puffs */}
            <div style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              width: 40,
              height: 80,
              pointerEvents: 'none',
            }}>
              {smokePuffs.map(puff => (
                <div key={puff.id} style={styles.smokePuff(puff)} />
              ))}
            </div>
          </div>

          {/* Locomotive Body */}
          <div style={{
            position: 'relative',
            width: 120,
            height: 50,
            background: 'linear-gradient(to bottom, #ef4444, #dc2626, #b91c1c)',
            borderRadius: '15px 25px 8px 8px',
            border: '3px solid #991b1b',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)',
          }}>
            {/* Gold stripe */}
            <div style={{
              position: 'absolute',
              bottom: 12,
              left: 5,
              right: 5,
              height: 6,
              background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)',
              borderRadius: 3,
              border: '1px solid #d97706',
            }} />

            {/* Headlight */}
            <div style={{
              position: 'absolute',
              right: -5,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 14,
              height: 14,
              background: 'radial-gradient(circle at 30% 30%, #fef3c7, #fbbf24)',
              borderRadius: '50%',
              border: '2px solid #92400e',
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.6)',
            }} />
          </div>

          {/* Cabin */}
          <div style={{
            position: 'absolute',
            left: -35,
            bottom: 0,
            width: 50,
            height: 65,
            background: 'linear-gradient(to bottom, #3b82f6, #2563eb, #1d4ed8)',
            borderRadius: '8px 8px 4px 4px',
            border: '3px solid #1e40af',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)',
          }}>
            {/* Cabin roof */}
            <div style={{
              position: 'absolute',
              top: -8,
              left: -4,
              right: -4,
              height: 10,
              background: 'linear-gradient(to bottom, #1e40af, #1e3a8a)',
              borderRadius: '6px 6px 0 0',
              border: '3px solid #1e3a8a',
              borderBottom: 'none',
            }} />

            {/* Cabin window */}
            <div style={{
              position: 'absolute',
              top: 8,
              left: 8,
              right: 8,
              height: 25,
              background: 'linear-gradient(to bottom, #7dd3fc, #38bdf8)',
              borderRadius: 4,
              border: '2px solid #0284c7',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5)',
            }}>
              {/* Window cross */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: 2,
                background: '#1e40af',
                transform: 'translateX(-50%)',
              }} />
            </div>
          </div>

          {/* Cow Catcher */}
          <div style={{
            position: 'absolute',
            right: -15,
            bottom: 0,
            width: 0,
            height: 0,
            borderLeft: '20px solid #374151',
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))',
          }} />

          {/* Cow catcher bars */}
          <div style={{
            position: 'absolute',
            right: -12,
            bottom: 2,
            width: 15,
            height: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: '100%',
                height: 2,
                background: '#1f2937',
                borderRadius: 1,
              }} />
            ))}
          </div>

          {/* Wheels */}
          <div style={{
            position: 'absolute',
            bottom: -18,
            left: -30,
            right: 10,
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            {/* Big wheel */}
            <Wheel size={36} style={styles.wheel} />
            {/* Medium wheel */}
            <Wheel size={30} style={styles.wheel} />
            {/* Small wheel */}
            <Wheel size={26} style={styles.wheel} />
          </div>
        </div>

        {/* Coupling 1 */}
        <Coupling />

        {/* ===== CARRIAGE 1 (Green) ===== */}
        <Carriage
          color="#22c55e"
          darkColor="#16a34a"
          borderColor="#15803d"
          wheelStyle={styles.wheel}
        />

        {/* Coupling 2 */}
        <Coupling />

        {/* ===== CARRIAGE 2 (Purple) ===== */}
        <Carriage
          color="#a855f7"
          darkColor="#9333ea"
          borderColor="#7e22ce"
          wheelStyle={styles.wheel}
        />
      </div>
    </div>
  );
};

// Wheel Component
const Wheel = ({ size, style }) => (
  <div style={{
    width: size,
    height: size,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4b5563, #1f2937)',
    border: '3px solid #111827',
    position: 'relative',
    boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
    ...style,
  }}>
    {/* Wheel center hub */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: size * 0.35,
      height: size * 0.35,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      border: '2px solid #d97706',
      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)',
    }} />

    {/* Wheel spokes */}
    {[0, 45, 90, 135].map(angle => (
      <div key={angle} style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: size * 0.8,
        height: 2,
        background: '#6b7280',
        transformOrigin: 'center',
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }} />
    ))}
  </div>
);

// Coupling Component
const Coupling = () => (
  <div style={{
    width: 15,
    height: 8,
    background: 'linear-gradient(to bottom, #6b7280, #4b5563)',
    borderRadius: 2,
    border: '2px solid #374151',
    marginBottom: 20,
    boxShadow: '0 2px 3px rgba(0,0,0,0.3)',
  }} />
);

// Carriage Component
const Carriage = ({ color, darkColor, borderColor, wheelStyle }) => (
  <div style={{
    position: 'relative',
    width: 80,
    height: 45,
    background: `linear-gradient(to bottom, ${color}, ${darkColor})`,
    borderRadius: 8,
    border: `3px solid ${borderColor}`,
    boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)',
  }}>
    {/* Roof */}
    <div style={{
      position: 'absolute',
      top: -6,
      left: -2,
      right: -2,
      height: 8,
      background: `linear-gradient(to bottom, ${borderColor}, ${darkColor})`,
      borderRadius: '6px 6px 0 0',
      border: `2px solid ${borderColor}`,
      borderBottom: 'none',
    }} />

    {/* Windows with kid silhouettes */}
    <div style={{
      position: 'absolute',
      top: 8,
      left: 8,
      right: 8,
      height: 22,
      display: 'flex',
      gap: 6,
    }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          flex: 1,
          background: 'linear-gradient(to bottom, #7dd3fc, #38bdf8)',
          borderRadius: 3,
          border: '2px solid #0284c7',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Kid silhouette */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 12,
            height: 14,
            background: '#1e293b',
            borderRadius: '50% 50% 0 0',
            opacity: 0.6,
          }}>
            {/* Head */}
            <div style={{
              position: 'absolute',
              top: -6,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 8,
              height: 8,
              background: '#1e293b',
              borderRadius: '50%',
            }} />
          </div>
        </div>
      ))}
    </div>

    {/* Bottom stripe */}
    <div style={{
      position: 'absolute',
      bottom: 4,
      left: 4,
      right: 4,
      height: 4,
      background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)',
      borderRadius: 2,
      border: '1px solid #d97706',
    }} />

    {/* Wheels */}
    <div style={{
      position: 'absolute',
      bottom: -18,
      left: 10,
      right: 10,
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <Wheel size={24} style={wheelStyle} />
      <Wheel size={24} style={wheelStyle} />
    </div>
  </div>
);

export default Train2D;
