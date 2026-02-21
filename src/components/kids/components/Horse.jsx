import React from 'react';

/**
 * Horse - Beautiful horse with kid rider for Garden theme
 *
 * Features:
 * - Cute cartoon horse with proper proportions
 * - Little girl rider with pigtails
 * - Galloping animation with leg movements
 * - Flowing mane and tail
 * - Garden-friendly colors (pink/purple theme)
 */
const Horse = ({
  isMoving = false,
  direction = 'right',
  speed = 0.5,
  scale = 1,
  className = '',
}) => {
  const walkDuration = speed > 0 ? Math.max(0.25, 0.5 / speed) : 0.5;
  const isLeft = direction === 'left';
  const scaleX = isLeft ? -1 : 1;

  return (
    <div className={`horse-wrapper ${className}`}>
      <style>{`
        @keyframes horseGallop {
          0%, 100% { transform: scale(${scale}) scaleX(${scaleX}) translateY(0) rotate(0deg); }
          15% { transform: scale(${scale}) scaleX(${scaleX}) translateY(-8px) rotate(-2deg); }
          30% { transform: scale(${scale}) scaleX(${scaleX}) translateY(-2px) rotate(0deg); }
          50% { transform: scale(${scale}) scaleX(${scaleX}) translateY(0) rotate(1deg); }
          65% { transform: scale(${scale}) scaleX(${scaleX}) translateY(-6px) rotate(-1deg); }
          80% { transform: scale(${scale}) scaleX(${scaleX}) translateY(-2px) rotate(0deg); }
        }
        @keyframes legFrontGallop {
          0% { transform: rotate(-35deg); }
          25% { transform: rotate(25deg); }
          50% { transform: rotate(35deg); }
          75% { transform: rotate(-15deg); }
          100% { transform: rotate(-35deg); }
        }
        @keyframes legBackGallop {
          0% { transform: rotate(35deg); }
          25% { transform: rotate(-25deg); }
          50% { transform: rotate(-35deg); }
          75% { transform: rotate(15deg); }
          100% { transform: rotate(35deg); }
        }
        @keyframes maneWave {
          0%, 100% { transform: rotate(-8deg) scaleX(1); }
          50% { transform: rotate(8deg) scaleX(1.1); }
        }
        @keyframes tailWave {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes riderBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-1deg); }
        }
        @keyframes earTwitch {
          0%, 90%, 100% { transform: rotate(0deg); }
          95% { transform: rotate(-10deg); }
        }
      `}</style>

      <div
        style={{
          transform: `scale(${scale}) scaleX(${scaleX})`,
          transformOrigin: 'center bottom',
          animation: isMoving ? `horseGallop ${walkDuration}s ease-in-out infinite` : 'none',
        }}
      >
        <svg width="160" height="130" viewBox="0 0 160 130">
          <defs>
            {/* Horse body - warm chestnut */}
            <linearGradient id="horseBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#CD853F" />
              <stop offset="50%" stopColor="#A0522D" />
              <stop offset="100%" stopColor="#8B4513" />
            </linearGradient>
            {/* Horse belly - lighter */}
            <linearGradient id="horseBelly" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DEB887" />
              <stop offset="100%" stopColor="#D2B48C" />
            </linearGradient>
            {/* Mane and tail - dark flowing */}
            <linearGradient id="horseManeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A3728" />
              <stop offset="100%" stopColor="#2C1810" />
            </linearGradient>
            {/* Saddle - pink/purple for garden */}
            <linearGradient id="saddleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#BE185D" />
            </linearGradient>
            {/* Saddle blanket */}
            <linearGradient id="blanketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
            {/* Kid clothes - light dress */}
            <linearGradient id="kidDress" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDF4FF" />
              <stop offset="100%" stopColor="#FAE8FF" />
            </linearGradient>
            {/* Skin tone */}
            <linearGradient id="kidSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDBF8F" />
              <stop offset="100%" stopColor="#E5A97A" />
            </linearGradient>
          </defs>

          {/* Ground shadow */}
          <ellipse cx="75" cy="125" rx="55" ry="6" fill="rgba(0,0,0,0.15)" />

          {/* === HORSE === */}

          {/* Back legs (behind body) */}
          <g style={{
            transformOrigin: '40px 75px',
            animation: isMoving ? `legBackGallop ${walkDuration}s ease-in-out infinite` : 'none',
          }}>
            {/* Upper leg */}
            <ellipse cx="38" cy="82" rx="8" ry="14" fill="url(#horseBodyGrad)" />
            {/* Lower leg */}
            <rect x="32" y="88" width="12" height="28" rx="5" fill="url(#horseBodyGrad)" />
            {/* Hoof */}
            <ellipse cx="38" cy="118" rx="8" ry="5" fill="#2C1810" />
          </g>
          <g style={{
            transformOrigin: '55px 75px',
            animation: isMoving ? `legBackGallop ${walkDuration}s ease-in-out infinite` : 'none',
            animationDelay: `${walkDuration * 0.5}s`,
          }}>
            <ellipse cx="53" cy="82" rx="8" ry="14" fill="url(#horseBodyGrad)" />
            <rect x="47" y="88" width="12" height="28" rx="5" fill="url(#horseBodyGrad)" />
            <ellipse cx="53" cy="118" rx="8" ry="5" fill="#2C1810" />
          </g>

          {/* Tail */}
          <g style={{
            transformOrigin: '22px 55px',
            animation: isMoving ? `tailWave ${walkDuration * 1.2}s ease-in-out infinite` : 'none',
          }}>
            <path d="M25 52 Q10 55 5 75 Q8 85 12 90 Q6 78 10 70 Q8 60 20 52" fill="url(#horseManeGrad)" />
            <path d="M25 54 Q15 58 12 72 Q16 80 18 85" stroke="#1A0F0A" strokeWidth="2" fill="none" opacity="0.3" />
          </g>

          {/* Body */}
          <ellipse cx="70" cy="62" rx="42" ry="26" fill="url(#horseBodyGrad)" />
          {/* Belly highlight */}
          <ellipse cx="70" cy="70" rx="30" ry="15" fill="url(#horseBelly)" opacity="0.4" />

          {/* Front legs */}
          <g style={{
            transformOrigin: '95px 75px',
            animation: isMoving ? `legFrontGallop ${walkDuration}s ease-in-out infinite` : 'none',
          }}>
            <ellipse cx="93" cy="80" rx="7" ry="12" fill="url(#horseBodyGrad)" />
            <rect x="87" y="85" width="12" height="30" rx="5" fill="url(#horseBodyGrad)" />
            <ellipse cx="93" cy="118" rx="8" ry="5" fill="#2C1810" />
          </g>
          <g style={{
            transformOrigin: '108px 75px',
            animation: isMoving ? `legFrontGallop ${walkDuration}s ease-in-out infinite` : 'none',
            animationDelay: `${walkDuration * 0.5}s`,
          }}>
            <ellipse cx="106" cy="80" rx="7" ry="12" fill="url(#horseBodyGrad)" />
            <rect x="100" y="85" width="12" height="30" rx="5" fill="url(#horseBodyGrad)" />
            <ellipse cx="106" cy="118" rx="8" ry="5" fill="#2C1810" />
          </g>

          {/* Neck */}
          <path d="M100 52 Q115 40 125 28 Q132 26 130 38 Q118 50 105 58" fill="url(#horseBodyGrad)" />

          {/* Head */}
          <ellipse cx="130" cy="30" rx="20" ry="16" fill="url(#horseBodyGrad)" />

          {/* Face/snout */}
          <ellipse cx="145" cy="36" rx="12" ry="10" fill="#DEB887" />
          {/* Nostrils */}
          <ellipse cx="152" cy="35" rx="2.5" ry="3" fill="#4A3728" />
          <ellipse cx="152" cy="40" rx="2" ry="2.5" fill="#4A3728" />
          {/* Mouth line */}
          <path d="M148 44 Q152 46 155 44" stroke="#6B4423" strokeWidth="1.5" fill="none" />

          {/* Eye */}
          <ellipse cx="125" cy="26" rx="6" ry="7" fill="white" />
          <ellipse cx="126" cy="26" rx="4" ry="5" fill="#3B2F2F" />
          <circle cx="127.5" cy="24.5" r="1.5" fill="white" />
          {/* Eyelashes */}
          <path d="M120 22 Q122 20 124 22" stroke="#3B2F2F" strokeWidth="0.8" fill="none" />

          {/* Ears */}
          <g style={{
            transformOrigin: '118px 12px',
            animation: isMoving ? `earTwitch 3s ease-in-out infinite` : 'none',
          }}>
            <path d="M115 18 Q112 6 118 4 Q122 6 120 18" fill="url(#horseBodyGrad)" stroke="#8B4513" strokeWidth="1" />
            <path d="M116 16 Q114 10 118 8" fill="#FDBF8F" opacity="0.5" />
          </g>
          <path d="M125 16 Q128 6 134 8 Q136 12 130 18" fill="url(#horseBodyGrad)" stroke="#8B4513" strokeWidth="1" />

          {/* Mane */}
          <g style={{
            transformOrigin: '110px 20px',
            animation: isMoving ? `maneWave ${walkDuration * 1.5}s ease-in-out infinite` : 'none',
          }}>
            <path d="M118 20 Q108 8 112 22 Q100 12 108 30 Q95 22 102 40 Q92 35 98 50 Q95 55 105 55" fill="url(#horseManeGrad)" />
            {/* Mane highlights */}
            <path d="M116 18 Q110 14 114 25" stroke="#5D4E37" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M110 25 Q102 20 108 38" stroke="#5D4E37" strokeWidth="1.5" fill="none" opacity="0.5" />
          </g>

          {/* Forelock (front mane tuft) */}
          <path d="M120 18 Q118 10 122 8 Q126 10 124 18" fill="url(#horseManeGrad)" />

          {/* === SADDLE === */}
          {/* Blanket under saddle */}
          <path d="M50 48 L90 48 L92 68 L48 68 Z" fill="url(#blanketGrad)" />
          <rect x="48" y="66" width="46" height="4" fill="#9333EA" />
          {/* Saddle */}
          <ellipse cx="70" cy="45" rx="16" ry="8" fill="url(#saddleGrad)" stroke="#9D174D" strokeWidth="2" />
          {/* Saddle horn */}
          <ellipse cx="80" cy="42" rx="4" ry="6" fill="#9D174D" />
          {/* Stirrup strap */}
          <rect x="52" y="50" width="2" height="22" fill="#6B4423" />
          <rect x="86" y="50" width="2" height="22" fill="#6B4423" />
          {/* Stirrups */}
          <ellipse cx="53" cy="73" rx="5" ry="3" fill="#4A3728" stroke="#2C1810" strokeWidth="1" />
          <ellipse cx="87" cy="73" rx="5" ry="3" fill="#4A3728" stroke="#2C1810" strokeWidth="1" />

          {/* === KID RIDER === */}
          <g style={{
            animation: isMoving ? `riderBob ${walkDuration}s ease-in-out infinite` : 'none',
          }}>
            {/* Legs in stirrups */}
            <path d="M58 50 Q52 60 53 72" stroke="url(#kidDress)" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M82 50 Q88 60 87 72" stroke="url(#kidDress)" strokeWidth="8" strokeLinecap="round" fill="none" />
            {/* Shoes */}
            <ellipse cx="53" cy="73" rx="6" ry="4" fill="#EC4899" />
            <ellipse cx="87" cy="73" rx="6" ry="4" fill="#EC4899" />

            {/* Body/Dress */}
            <path d="M60 28 Q55 35 56 50 L84 50 Q85 35 80 28 Q70 22 60 28" fill="url(#kidDress)" stroke="#F0ABFC" strokeWidth="1" />
            {/* Dress decoration */}
            <path d="M62 40 Q70 42 78 40" stroke="#F0ABFC" strokeWidth="1.5" fill="none" />
            <circle cx="70" cy="35" r="2" fill="#F0ABFC" />

            {/* Arms holding reins */}
            <path d="M60 34 Q50 38 46 45" stroke="url(#kidDress)" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M80 34 Q90 38 94 45" stroke="url(#kidDress)" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* Hands */}
            <circle cx="46" cy="46" r="5" fill="url(#kidSkinGrad)" />
            <circle cx="94" cy="46" r="5" fill="url(#kidSkinGrad)" />

            {/* Reins */}
            <path d="M46 46 Q65 55 94 46 Q115 40 130 35" stroke="#6B4423" strokeWidth="2" fill="none" />

            {/* Head */}
            <circle cx="70" cy="16" r="12" fill="url(#kidSkinGrad)" />

            {/* Hair - cute pigtails */}
            <ellipse cx="58" cy="14" rx="5" ry="8" fill="#4A3728" />
            <ellipse cx="82" cy="14" rx="5" ry="8" fill="#4A3728" />
            <ellipse cx="70" cy="6" rx="14" ry="6" fill="#4A3728" />
            {/* Hair bows */}
            <circle cx="56" cy="10" r="3" fill="#EC4899" />
            <circle cx="84" cy="10" r="3" fill="#EC4899" />

            {/* Face */}
            {/* Eyes */}
            <ellipse cx="65" cy="15" rx="3" ry="3.5" fill="white" />
            <ellipse cx="75" cy="15" rx="3" ry="3.5" fill="white" />
            <ellipse cx="66" cy="15" rx="2" ry="2.5" fill="#3B2F2F" />
            <ellipse cx="76" cy="15" rx="2" ry="2.5" fill="#3B2F2F" />
            <circle cx="67" cy="14" r="1" fill="white" />
            <circle cx="77" cy="14" r="1" fill="white" />
            {/* Eyelashes */}
            <path d="M62 12 Q64 11 66 12" stroke="#3B2F2F" strokeWidth="0.7" fill="none" />
            <path d="M74 12 Q76 11 78 12" stroke="#3B2F2F" strokeWidth="0.7" fill="none" />
            {/* Nose */}
            <ellipse cx="70" cy="18" rx="1.5" ry="1" fill="#E5A97A" />
            {/* Happy smile */}
            <path d="M66 21 Q70 24 74 21" stroke="#C06060" strokeWidth="1.2" fill="none" />
            {/* Rosy cheeks */}
            <ellipse cx="62" cy="19" rx="2.5" ry="1.5" fill="#FFB4B4" opacity="0.6" />
            <ellipse cx="78" cy="19" rx="2.5" ry="1.5" fill="#FFB4B4" opacity="0.6" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Horse;
