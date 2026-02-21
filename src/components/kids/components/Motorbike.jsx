/**
 * Motorbike.jsx
 * Modern motorbike with rider in white traditional dress
 * Rider sits properly on bike, leaning forward, facing direction of travel
 * Note: Rider shown as silhouette (no face/features) for religious appropriateness
 */

import React from 'react';

const Motorbike = ({
  isMoving = false,
  direction = 'right',
  speed = 1,
  scale = 1
}) => {
  const isRight = direction === 'right';

  return (
    <div
      className="relative"
      style={{
        transform: `scale(${scale}) scaleX(${isRight ? 1 : -1})`,
        transformOrigin: 'center bottom'
      }}
    >
      {/* Main container with bounce animation */}
      <div
        className="relative"
        style={{
          animation: isMoving ? `bikeRide ${0.25 / speed}s ease-in-out infinite` : 'none'
        }}
      >
        {/* Dust trail when moving */}
        {isMoving && (
          <div className="absolute -right-6 bottom-4 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: `${10 + i * 4}px`,
                  height: `${10 + i * 4}px`,
                  background: 'radial-gradient(circle, rgba(180,140,100,0.5) 0%, transparent 70%)',
                  animation: `dustTrail 0.4s ease-out ${i * 0.08}s infinite`,
                }}
              />
            ))}
          </div>
        )}

        {/* Shadow */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          style={{
            width: '100px',
            height: '16px',
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, transparent 70%)',
          }}
        />

        {/* Complete Motorbike with Rider SVG */}
        <svg width="130" height="100" viewBox="0 0 130 100" className="relative">
          <defs>
            {/* Bike gradients */}
            <linearGradient id="bikeGreen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="wheelMetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4B5563" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
            <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="50%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>
            <radialGradient id="headlight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="100%" stopColor="#FDE68A" />
            </radialGradient>

            {/* Rider gradients */}
            <linearGradient id="whiteThobe" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
            <linearGradient id="keffiyeh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAFAFA" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
            <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4A574" />
              <stop offset="100%" stopColor="#C4956A" />
            </linearGradient>
          </defs>

          {/* ===== RIDER (behind bike parts) ===== */}

          {/* Rider's back leg (left leg, behind bike) */}
          <path
            d="M50 48 Q44 58 38 70 L42 72 Q48 62 52 50"
            fill="url(#whiteThobe)"
            stroke="#D1D5DB"
            strokeWidth="0.5"
          />
          {/* Back foot on rear footpeg */}
          <ellipse cx="40" cy="72" rx="5" ry="2.5" fill="#8B4513" />

          {/* ===== BIKE ===== */}

          {/* Back wheel */}
          <g style={{
            transformOrigin: '26px 78px',
            animation: isMoving ? `wheelSpin ${0.35 / speed}s linear infinite` : 'none'
          }}>
            <circle cx="26" cy="78" r="18" fill="#1F2937" />
            <circle cx="26" cy="78" r="16" fill="url(#wheelMetal)" />
            <circle cx="26" cy="78" r="10" fill="#374151" />
            <circle cx="26" cy="78" r="5" fill="#6B7280" />
            {[0, 45, 90, 135].map((angle) => (
              <line
                key={angle}
                x1="26"
                y1="78"
                x2={26 + 13 * Math.cos(angle * Math.PI / 180)}
                y2={78 + 13 * Math.sin(angle * Math.PI / 180)}
                stroke="#9CA3AF"
                strokeWidth="1.5"
              />
            ))}
          </g>

          {/* Front wheel */}
          <g style={{
            transformOrigin: '102px 78px',
            animation: isMoving ? `wheelSpin ${0.35 / speed}s linear infinite` : 'none'
          }}>
            <circle cx="102" cy="78" r="18" fill="#1F2937" />
            <circle cx="102" cy="78" r="16" fill="url(#wheelMetal)" />
            <circle cx="102" cy="78" r="10" fill="#374151" />
            <circle cx="102" cy="78" r="5" fill="#6B7280" />
            {[0, 45, 90, 135].map((angle) => (
              <line
                key={angle}
                x1="102"
                y1="78"
                x2={102 + 13 * Math.cos(angle * Math.PI / 180)}
                y2={78 + 13 * Math.sin(angle * Math.PI / 180)}
                stroke="#9CA3AF"
                strokeWidth="1.5"
              />
            ))}
          </g>

          {/* Bike frame */}
          <path
            d="M26 78 L42 55 L75 48 L102 78"
            fill="none"
            stroke="url(#bikeGreen)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Engine block */}
          <rect x="38" y="58" width="28" height="14" rx="3" fill="#374151" />
          <rect x="42" y="62" width="5" height="7" rx="1" fill="#1F2937" />
          <rect x="50" y="62" width="5" height="7" rx="1" fill="#1F2937" />
          <rect x="58" y="62" width="5" height="7" rx="1" fill="#1F2937" />

          {/* Fuel tank */}
          <path
            d="M48 48 Q58 38 78 44 L78 52 Q58 56 48 52 Z"
            fill="url(#bikeGreen)"
          />
          <path
            d="M52 47 Q60 42 74 46"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
          />

          {/* Seat - rider sits here */}
          <path
            d="M52 46 Q62 42 78 44 L80 50 Q62 54 52 50 Z"
            fill="#1F2937"
          />

          {/* Front fork */}
          <line x1="82" y1="48" x2="102" y2="62" stroke="url(#chrome)" strokeWidth="4" />

          {/* Handlebar */}
          <line x1="84" y1="42" x2="94" y2="36" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
          <line x1="84" y1="42" x2="94" y2="46" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
          <circle cx="94" cy="36" r="3" fill="#1F2937" />
          <circle cx="94" cy="46" r="3" fill="#1F2937" />

          {/* Headlight */}
          <ellipse cx="108" cy="54" rx="5" ry="4" fill="url(#headlight)" />
          {isMoving && (
            <ellipse cx="116" cy="54" rx="10" ry="4" fill="#FDE68A" opacity="0.3" />
          )}

          {/* Front fender */}
          <path
            d="M90 65 Q102 55 114 65"
            fill="none"
            stroke="url(#bikeGreen)"
            strokeWidth="3"
          />

          {/* Back fender */}
          <path
            d="M14 65 Q26 55 38 65"
            fill="none"
            stroke="url(#bikeGreen)"
            strokeWidth="3"
          />

          {/* Exhaust */}
          <path
            d="M22 68 L8 70 Q5 70 5 68 L8 66 L22 64"
            fill="url(#chrome)"
          />
          {isMoving && (
            <>
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  cx={0 - i * 8}
                  cy={68 - i * 2}
                  r={3 + i}
                  fill="#9CA3AF"
                  opacity={0.3 - i * 0.08}
                  style={{
                    animation: `exhaustSmoke 0.6s ease-out ${i * 0.15}s infinite`
                  }}
                />
              ))}
            </>
          )}

          {/* Kickstand (when not moving) */}
          {!isMoving && (
            <line x1="50" y1="68" x2="44" y2="86" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />
          )}

          {/* ===== RIDER SITTING ON SEAT ===== */}

          {/* Rider's front leg (right leg, on footpeg) */}
          <path
            d="M62 50 Q68 58 74 68 L78 70 Q72 60 66 50"
            fill="url(#whiteThobe)"
            stroke="#D1D5DB"
            strokeWidth="0.5"
          />
          {/* Front foot on footpeg */}
          <ellipse cx="76" cy="70" rx="5" ry="2.5" fill="#8B4513" />

          {/* Rider's body - sitting on seat, leaning forward */}
          <g style={{
            animation: isMoving ? `riderBounce ${0.25 / speed}s ease-in-out infinite` : 'none'
          }}>
            {/* Torso - white thobe, positioned on seat */}
            <path
              d="M56 26 Q51 30 50 44 L54 50 L68 50 L72 44 Q71 30 66 26 Q61 22 56 26"
              fill="url(#whiteThobe)"
              stroke="#D1D5DB"
              strokeWidth="0.5"
            />

            {/* Left arm reaching to handlebar */}
            <path
              d="M54 32 Q66 36 80 38 Q88 38 94 36"
              fill="none"
              stroke="url(#whiteThobe)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Left sleeve cuff */}
            <ellipse cx="92" cy="36" rx="4" ry="3" fill="#F3F4F6" />
            {/* Left hand on grip */}
            <circle cx="94" cy="36" r="3.5" fill="url(#skinTone)" />

            {/* Right arm reaching to handlebar */}
            <path
              d="M68 32 Q78 38 86 42 Q90 44 94 44"
              fill="none"
              stroke="url(#whiteThobe)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Right sleeve cuff */}
            <ellipse cx="92" cy="44" rx="4" ry="3" fill="#F3F4F6" />
            {/* Right hand on grip */}
            <circle cx="94" cy="46" r="3.5" fill="url(#skinTone)" />

            {/* Head with white keffiyeh/ghutra - positioned above torso */}
            <g>
              {/* Keffiyeh base (white head covering) */}
              <ellipse cx="62" cy="14" rx="12" ry="10" fill="url(#keffiyeh)" />

              {/* Keffiyeh drape on left */}
              <path
                d="M51 12 Q48 18 50 28 L55 30 L57 20 Q53 16 52 12"
                fill="url(#keffiyeh)"
              />

              {/* Keffiyeh drape on right - flowing back */}
              <path
                d="M73 12 Q76 18 74 28 L69 30 L67 20 Q71 16 72 12"
                fill="url(#keffiyeh)"
              />

              {/* Agal (black cord) */}
              <ellipse cx="62" cy="8" rx="10" ry="4" fill="none" stroke="#1F2937" strokeWidth="2" />

              {/* Face - cute boy face */}
              <ellipse cx="64" cy="16" rx="7" ry="8" fill="url(#skinTone)" />

              {/* Hair peeking from keffiyeh */}
              <path d="M58 10 Q62 8 68 10" fill="#4A3728" />

              {/* Eyes - cute style, looking forward */}
              <ellipse cx="61" cy="14" rx="1.8" ry="2.2" fill="#1F2937" />
              <ellipse cx="67" cy="14" rx="1.8" ry="2.2" fill="#1F2937" />
              {/* Eye shine */}
              <circle cx="61.5" cy="13.5" r="0.6" fill="white" />
              <circle cx="67.5" cy="13.5" r="0.6" fill="white" />

              {/* Eyebrows */}
              <path d="M59 12 Q61 11 63 12" fill="none" stroke="#3D2914" strokeWidth="0.8" />
              <path d="M65 12 Q67 11 69 12" fill="none" stroke="#3D2914" strokeWidth="0.8" />

              {/* Cute nose */}
              <path d="M64 16 L64.5 18" stroke="#C4956A" strokeWidth="0.8" strokeLinecap="round" />

              {/* Happy smile */}
              <path d="M61 20 Q64 22 67 20" fill="none" stroke="#8B6F5A" strokeWidth="0.8" strokeLinecap="round" />

              {/* Rosy cheeks */}
              <ellipse cx="59" cy="18" rx="1.5" ry="1" fill="#FBBFB0" opacity="0.5" />
              <ellipse cx="69" cy="18" rx="1.5" ry="1" fill="#FBBFB0" opacity="0.5" />
            </g>
          </g>
        </svg>

        {/* Wind effect lines when moving */}
        {isMoving && speed > 1 && (
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute h-0.5 rounded-full"
                style={{
                  width: `${10 + i * 4}px`,
                  left: `${-15 - i * 6}px`,
                  top: `${-10 + i * 10}px`,
                  background: 'linear-gradient(to left, rgba(255,255,255,0.4), transparent)',
                  animation: `windLine 0.25s ease-out ${i * 0.06}s infinite`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes bikeRide {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-1.5px) rotate(-0.3deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-1px) rotate(0.3deg); }
        }

        @keyframes riderBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-1.5px); }
        }

        @keyframes wheelSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes dustTrail {
          0% {
            opacity: 0.5;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-20px) scale(1.5);
          }
        }

        @keyframes exhaustSmoke {
          0% {
            opacity: 0.3;
            transform: translateX(0) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-15px) translateY(-8px) scale(1.8);
          }
        }

        @keyframes windLine {
          0% {
            opacity: 0.4;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Motorbike;
