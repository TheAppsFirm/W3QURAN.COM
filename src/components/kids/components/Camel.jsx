import React, { useMemo } from 'react';

/**
 * Camel - An animated camel component for Kids Quran Journey (Desert/Seert theme)
 *
 * Features:
 * - Walking leg animation
 * - Head bobbing motion
 * - Decorative saddle with tassels
 * - Kid rider on the camel
 * - Dust particles when moving
 */
const Camel = ({
  isMoving = false,
  direction = 'right',
  speed = 0.5,
  scale = 1,
  className = '',
  showCompanions = false,
}) => {
  // Generate dust particles
  const dustParticles = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 0.15,
      size: 8 + Math.random() * 8,
      offsetX: Math.random() * 40,
    })), []);

  // Calculate animation durations based on speed
  const walkDuration = speed > 0 ? Math.max(0.3, 0.8 / speed) : 0.8;
  const bobDuration = walkDuration * 2;

  return (
    <div className={`camel-wrapper ${className}`}>
      {/* CSS Keyframes */}
      <style>{`
        @keyframes camelWalk {
          0%, 100% {
            transform: scale(${scale}) scaleX(${direction === 'left' ? -1 : 1}) translateY(0);
          }
          25% {
            transform: scale(${scale}) scaleX(${direction === 'left' ? -1 : 1}) translateY(-4px);
          }
          50% {
            transform: scale(${scale}) scaleX(${direction === 'left' ? -1 : 1}) translateY(0);
          }
          75% {
            transform: scale(${scale}) scaleX(${direction === 'left' ? -1 : 1}) translateY(-3px);
          }
        }

        @keyframes headBob {
          0%, 100% { transform: rotate(-5deg) translateY(0); }
          50% { transform: rotate(5deg) translateY(-3px); }
        }

        @keyframes legFrontWalk {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }

        @keyframes legBackWalk {
          0%, 100% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
        }

        @keyframes tailSwing {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }

        @keyframes dustFloat {
          0% {
            opacity: 0.6;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-15px) scale(0.5);
          }
        }

        @keyframes saddleTassel {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
      `}</style>

      <div
        className="camel-container"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 30,
          transform: `scale(${scale}) scaleX(${direction === 'left' ? -1 : 1})`,
          transformOrigin: 'center bottom',
          animation: isMoving ? `camelWalk ${walkDuration}s ease-in-out infinite` : 'none',
        }}
      >
        {/* Main Camel */}
        <CamelBody isMoving={isMoving} walkDuration={walkDuration} bobDuration={bobDuration} isMain={true} />

        {/* Companion Camels */}
        {showCompanions && (
          <>
            <CamelBody
              isMoving={isMoving}
              walkDuration={walkDuration}
              bobDuration={bobDuration}
              scale={0.8}
              delay={0.2}
            />
            <CamelBody
              isMoving={isMoving}
              walkDuration={walkDuration}
              bobDuration={bobDuration}
              scale={0.65}
              delay={0.4}
            />
          </>
        )}

        {/* Dust Particles */}
        {isMoving && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: direction === 'right' ? -30 : 'auto',
            right: direction === 'left' ? -30 : 'auto',
            width: 50,
            height: 30,
            pointerEvents: 'none',
          }}>
            {dustParticles.map(particle => (
              <div
                key={particle.id}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: particle.offsetX,
                  width: particle.size,
                  height: particle.size,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #D2B48C 0%, #C4A882 100%)',
                  animation: `dustFloat 0.8s ease-out infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Individual Camel Body Component
const CamelBody = ({
  isMoving = false,
  walkDuration = 0.8,
  bobDuration = 1.6,
  scale = 1,
  delay = 0,
  isMain = false,
}) => {
  const camelColor = '#D2B48C'; // Tan
  const camelDark = '#C4A882';
  const camelLight = '#E6D5B8';

  return (
    <div
      style={{
        position: 'relative',
        width: 120 * scale,
        height: 100 * scale,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Body */}
      <div style={{
        position: 'absolute',
        bottom: 30 * scale,
        left: 20 * scale,
        width: 80 * scale,
        height: 45 * scale,
        background: `linear-gradient(180deg, ${camelLight} 0%, ${camelColor} 50%, ${camelDark} 100%)`,
        borderRadius: `${25 * scale}px ${30 * scale}px ${15 * scale}px ${15 * scale}px`,
        border: `2px solid ${camelDark}`,
        boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
      }}>
        {/* Hump */}
        <div style={{
          position: 'absolute',
          top: -18 * scale,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 35 * scale,
          height: 25 * scale,
          background: `linear-gradient(180deg, ${camelLight} 0%, ${camelColor} 100%)`,
          borderRadius: '50% 50% 30% 30%',
          border: `2px solid ${camelDark}`,
          borderBottom: 'none',
        }} />

        {/* Saddle (main camel only) */}
        {isMain && (
          <div style={{
            position: 'absolute',
            top: -25 * scale,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 45 * scale,
            height: 30 * scale,
          }}>
            {/* Saddle blanket */}
            <div style={{
              position: 'absolute',
              top: 12 * scale,
              left: 0,
              width: '100%',
              height: 18 * scale,
              background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
              borderRadius: 4 * scale,
              border: '2px solid #991B1B',
            }}>
              {/* Gold trim */}
              <div style={{
                position: 'absolute',
                top: 3 * scale,
                left: 3 * scale,
                right: 3 * scale,
                height: 3 * scale,
                background: 'linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)',
                borderRadius: 2,
              }} />
              <div style={{
                position: 'absolute',
                bottom: 3 * scale,
                left: 3 * scale,
                right: 3 * scale,
                height: 3 * scale,
                background: 'linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)',
                borderRadius: 2,
              }} />
            </div>

            {/* Tassels */}
            {[-8, 8].map((offset, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  bottom: -10 * scale,
                  left: `calc(50% + ${offset * scale}px)`,
                  width: 4 * scale,
                  height: 12 * scale,
                  background: 'linear-gradient(180deg, #FBBF24 0%, #D97706 100%)',
                  borderRadius: `0 0 ${2 * scale}px ${2 * scale}px`,
                  transformOrigin: 'top center',
                  animation: isMoving ? `saddleTassel 0.4s ease-in-out infinite` : 'none',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}

            {/* Kid Rider - Sitting properly on saddle with legs on each side */}
            <div style={{
              position: 'absolute',
              top: -8 * scale,
              left: '50%',
              transform: 'translateX(-50%)',
            }}>
              {/* Left Leg (hanging down left side of camel) */}
              <div style={{
                position: 'absolute',
                top: 18 * scale,
                left: -8 * scale,
                width: 6 * scale,
                height: 16 * scale,
                background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                borderRadius: `${2 * scale}px`,
                border: '1px solid #BAE6FD',
                transform: 'rotate(-15deg)',
              }}>
                {/* Left Foot */}
                <div style={{
                  position: 'absolute',
                  bottom: -2 * scale,
                  left: 0,
                  width: 8 * scale,
                  height: 4 * scale,
                  background: '#8B4513',
                  borderRadius: `${2 * scale}px`,
                }} />
              </div>

              {/* Right Leg (hanging down right side of camel) */}
              <div style={{
                position: 'absolute',
                top: 18 * scale,
                right: -8 * scale,
                width: 6 * scale,
                height: 16 * scale,
                background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                borderRadius: `${2 * scale}px`,
                border: '1px solid #BAE6FD',
                transform: 'rotate(15deg)',
              }}>
                {/* Right Foot */}
                <div style={{
                  position: 'absolute',
                  bottom: -2 * scale,
                  right: 0,
                  width: 8 * scale,
                  height: 4 * scale,
                  background: '#8B4513',
                  borderRadius: `${2 * scale}px`,
                }} />
              </div>

              {/* Kid's Body - Torso sitting on saddle */}
              <div style={{
                position: 'relative',
                width: 24 * scale,
                height: 28 * scale,
              }}>
                {/* Body/Thobe */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 20 * scale,
                  height: 16 * scale,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
                  borderRadius: `${4 * scale}px ${4 * scale}px ${6 * scale}px ${6 * scale}px`,
                  border: '1.5px solid #E0F2FE',
                }} />

                {/* Head with Keffiyeh - facing forward */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 16 * scale,
                  height: 14 * scale,
                }}>
                  {/* Keffiyeh base (white head covering) */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 16 * scale,
                    height: 10 * scale,
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                    borderRadius: `${8 * scale}px`,
                    border: '1px solid #E2E8F0',
                  }} />

                  {/* Agal (black band) */}
                  <div style={{
                    position: 'absolute',
                    top: 2 * scale,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 14 * scale,
                    height: 2 * scale,
                    background: '#1E293B',
                    borderRadius: 2,
                  }} />

                  {/* Face - cute boy face facing forward */}
                  <div style={{
                    position: 'absolute',
                    top: 3 * scale,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 11 * scale,
                    height: 10 * scale,
                    background: 'linear-gradient(180deg, #D4A574 0%, #C4956A 100%)',
                    borderRadius: '50%',
                  }}>
                    {/* Eyes - looking forward */}
                    <div style={{
                      position: 'absolute',
                      top: 3 * scale,
                      left: 2 * scale,
                      width: 2.5 * scale,
                      height: 3 * scale,
                      background: '#1E293B',
                      borderRadius: '50%',
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0.5 * scale,
                        left: 0.5 * scale,
                        width: 1 * scale,
                        height: 1 * scale,
                        background: 'white',
                        borderRadius: '50%',
                      }} />
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: 3 * scale,
                      right: 2 * scale,
                      width: 2.5 * scale,
                      height: 3 * scale,
                      background: '#1E293B',
                      borderRadius: '50%',
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0.5 * scale,
                        left: 0.5 * scale,
                        width: 1 * scale,
                        height: 1 * scale,
                        background: 'white',
                        borderRadius: '50%',
                      }} />
                    </div>

                    {/* Cute smile */}
                    <div style={{
                      position: 'absolute',
                      bottom: 2 * scale,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 4 * scale,
                      height: 2 * scale,
                      borderRadius: `0 0 ${4 * scale}px ${4 * scale}px`,
                      border: '1px solid #8B6F5A',
                      borderTop: 'none',
                    }} />

                    {/* Rosy cheeks */}
                    <div style={{
                      position: 'absolute',
                      top: 5 * scale,
                      left: 0.5 * scale,
                      width: 2 * scale,
                      height: 1.5 * scale,
                      background: '#FBBFB0',
                      borderRadius: '50%',
                      opacity: 0.6,
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: 5 * scale,
                      right: 0.5 * scale,
                      width: 2 * scale,
                      height: 1.5 * scale,
                      background: '#FBBFB0',
                      borderRadius: '50%',
                      opacity: 0.6,
                    }} />
                  </div>
                </div>

                {/* Arms reaching forward to hold reins */}
                <div style={{
                  position: 'absolute',
                  top: 12 * scale,
                  left: -4 * scale,
                  width: 10 * scale,
                  height: 4 * scale,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
                  borderRadius: `${2 * scale}px`,
                  transform: 'rotate(-30deg)',
                  border: '1px solid #E0F2FE',
                }} />
                <div style={{
                  position: 'absolute',
                  top: 12 * scale,
                  right: -4 * scale,
                  width: 10 * scale,
                  height: 4 * scale,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
                  borderRadius: `${2 * scale}px`,
                  transform: 'rotate(30deg)',
                  border: '1px solid #E0F2FE',
                }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Neck */}
      <div style={{
        position: 'absolute',
        bottom: 55 * scale,
        left: 75 * scale,
        width: 15 * scale,
        height: 35 * scale,
        background: `linear-gradient(90deg, ${camelDark} 0%, ${camelColor} 50%, ${camelLight} 100%)`,
        borderRadius: `${5 * scale}px ${5 * scale}px 0 0`,
        transform: 'rotate(25deg)',
        transformOrigin: 'bottom center',
      }} />

      {/* Head */}
      <div
        style={{
          position: 'absolute',
          bottom: 85 * scale,
          left: 85 * scale,
          transformOrigin: 'bottom left',
          animation: isMoving ? `headBob ${bobDuration}s ease-in-out infinite` : 'none',
        }}
      >
        <div style={{
          width: 30 * scale,
          height: 20 * scale,
          background: `linear-gradient(180deg, ${camelLight} 0%, ${camelColor} 100%)`,
          borderRadius: `${8 * scale}px ${15 * scale}px ${8 * scale}px ${5 * scale}px`,
          border: `2px solid ${camelDark}`,
          position: 'relative',
        }}>
          {/* Snout */}
          <div style={{
            position: 'absolute',
            right: -8 * scale,
            top: 5 * scale,
            width: 12 * scale,
            height: 12 * scale,
            background: `linear-gradient(180deg, ${camelLight} 0%, ${camelColor} 100%)`,
            borderRadius: `${3 * scale}px ${8 * scale}px ${8 * scale}px ${3 * scale}px`,
            border: `2px solid ${camelDark}`,
          }}>
            {/* Nostril */}
            <div style={{
              position: 'absolute',
              right: 2 * scale,
              top: 5 * scale,
              width: 3 * scale,
              height: 2 * scale,
              background: '#78350F',
              borderRadius: '50%',
            }} />
          </div>

          {/* Eye */}
          <div style={{
            position: 'absolute',
            left: 6 * scale,
            top: 5 * scale,
            width: 6 * scale,
            height: 6 * scale,
            background: '#1E293B',
            borderRadius: '50%',
          }}>
            <div style={{
              position: 'absolute',
              top: 1 * scale,
              left: 1 * scale,
              width: 2 * scale,
              height: 2 * scale,
              background: 'white',
              borderRadius: '50%',
            }} />
          </div>

          {/* Ear */}
          <div style={{
            position: 'absolute',
            top: -5 * scale,
            left: 3 * scale,
            width: 5 * scale,
            height: 8 * scale,
            background: camelColor,
            borderRadius: `${3 * scale}px ${3 * scale}px 0 0`,
            border: `1px solid ${camelDark}`,
          }} />
        </div>
      </div>

      {/* Front Legs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 70 * scale,
        display: 'flex',
        gap: 8 * scale,
      }}>
        <CamelLeg
          scale={scale}
          animation={isMoving ? `legFrontWalk ${walkDuration}s ease-in-out infinite` : 'none'}
          delay="0s"
        />
        <CamelLeg
          scale={scale}
          animation={isMoving ? `legFrontWalk ${walkDuration}s ease-in-out infinite` : 'none'}
          delay={`${walkDuration / 2}s`}
        />
      </div>

      {/* Back Legs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 25 * scale,
        display: 'flex',
        gap: 8 * scale,
      }}>
        <CamelLeg
          scale={scale}
          animation={isMoving ? `legBackWalk ${walkDuration}s ease-in-out infinite` : 'none'}
          delay={`${walkDuration / 4}s`}
        />
        <CamelLeg
          scale={scale}
          animation={isMoving ? `legBackWalk ${walkDuration}s ease-in-out infinite` : 'none'}
          delay={`${(walkDuration / 4) * 3}s`}
        />
      </div>

      {/* Tail */}
      <div style={{
        position: 'absolute',
        bottom: 40 * scale,
        left: 8 * scale,
        width: 4 * scale,
        height: 20 * scale,
        background: `linear-gradient(180deg, ${camelColor} 0%, ${camelDark} 100%)`,
        borderRadius: `${2 * scale}px`,
        transformOrigin: 'top center',
        animation: isMoving ? `tailSwing ${walkDuration * 1.5}s ease-in-out infinite` : 'none',
      }}>
        {/* Tail tuft */}
        <div style={{
          position: 'absolute',
          bottom: -5 * scale,
          left: -2 * scale,
          width: 8 * scale,
          height: 8 * scale,
          background: '#78350F',
          borderRadius: '50%',
        }} />
      </div>
    </div>
  );
};

// Camel Leg Component
const CamelLeg = ({ scale = 1, animation = 'none', delay = '0s' }) => {
  const legColor = '#C4A882';
  const legLight = '#D2B48C';

  return (
    <div
      style={{
        width: 8 * scale,
        height: 35 * scale,
        background: `linear-gradient(90deg, ${legColor} 0%, ${legLight} 50%, ${legColor} 100%)`,
        borderRadius: `${2 * scale}px`,
        transformOrigin: 'top center',
        animation: animation,
        animationDelay: delay,
        boxShadow: '0 2px 3px rgba(0,0,0,0.2)',
      }}
    >
      {/* Hoof */}
      <div style={{
        position: 'absolute',
        bottom: -3 * scale,
        left: -1 * scale,
        width: 10 * scale,
        height: 6 * scale,
        background: '#78350F',
        borderRadius: `0 0 ${3 * scale}px ${3 * scale}px`,
      }} />
    </div>
  );
};

export default Camel;
