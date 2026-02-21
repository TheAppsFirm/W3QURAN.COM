/**
 * Station.jsx
 * Train station component representing a Surah in the Kids Quran Journey game
 *
 * Features:
 * - Platform with wooden/stone texture
 * - Station sign post with surah details
 * - Decorative elements (flowers, lamp, bench)
 * - Color coding by Makki/Madani type
 * - Difficulty stars based on verse count
 * - Animated states for selection, proximity, and completion
 */

import React, { useMemo } from 'react';

/**
 * Get difficulty level based on verse count
 * @param {number} verses - Number of verses in the surah
 * @returns {{ level: number, label: string }}
 */
const getDifficulty = (verses) => {
  if (verses <= 20) return { level: 1, label: 'Easy' };
  if (verses <= 80) return { level: 2, label: 'Medium' };
  return { level: 3, label: 'Advanced' };
};

/**
 * Get theme colors based on surah type
 * @param {string} type - 'Makki' or 'Madani'
 * @returns {{ primary: string, secondary: string, glow: string }}
 */
const getTypeColors = (type) => {
  if (type === 'Makki') {
    return {
      primary: '#10B981', // Green
      secondary: '#059669',
      glow: 'rgba(16, 185, 129, 0.6)',
      light: '#D1FAE5',
    };
  }
  return {
    primary: '#3B82F6', // Blue
    secondary: '#2563EB',
    glow: 'rgba(59, 130, 246, 0.6)',
    light: '#DBEAFE',
  };
};

/**
 * Station Component
 * Represents a single surah as a train station
 */
const Station = ({
  surah = {
    id: 1,
    name: 'Al-Fatiha',
    nameAr: 'الفاتحة',
    verses: 7,
    type: 'Makki',
  },
  isSelected = false,
  isNear = false,
  isCompleted = false,
  onClick,
  position = 0,
}) => {
  // Calculate difficulty based on verse count
  const difficulty = useMemo(() => getDifficulty(surah.verses), [surah.verses]);

  // Get colors based on surah type
  const colors = useMemo(() => getTypeColors(surah.type), [surah.type]);

  // Render difficulty stars
  const renderStars = () => {
    return [...Array(3)].map((_, i) => (
      <span
        key={i}
        className={`text-sm transition-all duration-300 ${
          i < difficulty.level
            ? 'opacity-100 scale-100'
            : 'opacity-30 scale-90'
        }`}
        style={{
          filter: i < difficulty.level ? 'drop-shadow(0 0 4px #F59E0B)' : 'none',
        }}
        role="img"
        aria-hidden="true"
      >
        {i < difficulty.level ? '\u2B50' : '\u2606'}
      </span>
    ));
  };

  // Handle keyboard interaction
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={`
        station-container relative cursor-pointer select-none
        transition-all duration-300 ease-out
        ${isSelected ? 'z-20' : isNear ? 'z-10' : 'z-0'}
      `}
      style={{
        width: '100px',
        transform: `
          scale(${isSelected ? 1.1 : isNear ? 1.05 : 1})
          translateY(${isSelected ? '-8px' : isNear ? '-4px' : '0'})
        `,
        left: `${position}%`,
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Surah ${surah.id}: ${surah.name}, ${surah.verses} verses, ${difficulty.label} difficulty${isCompleted ? ', completed' : ''}`}
      aria-pressed={isSelected}
    >
      {/* Glow effect for selected/near states */}
      {(isSelected || isNear) && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: isSelected
              ? `0 0 40px ${colors.glow}, 0 0 60px ${colors.glow}`
              : `0 0 20px ${colors.glow}`,
            animation: isSelected ? 'stationGlow 2s ease-in-out infinite' : 'none',
          }}
        />
      )}

      {/* Station structure */}
      <div className="relative flex flex-col items-center">
        {/* Completed badge */}
        {isCompleted && (
          <div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-30"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.6)',
            }}
          >
            <span className="text-white text-lg font-bold" aria-hidden="true">
              {'\u2713'}
            </span>
          </div>
        )}

        {/* Station roof/canopy */}
        <div
          className="w-24 h-4 rounded-t-lg relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          {/* Roof pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 4px,
                rgba(255,255,255,0.3) 4px,
                rgba(255,255,255,0.3) 6px
              )`,
            }}
          />
          {/* Roof decorative tips */}
          <div
            className="absolute -left-1 -top-1 w-3 h-3 rounded-full"
            style={{ backgroundColor: colors.secondary }}
          />
          <div
            className="absolute -right-1 -top-1 w-3 h-3 rounded-full"
            style={{ backgroundColor: colors.secondary }}
          />
        </div>

        {/* Station sign post */}
        <div
          className="relative w-20 rounded-lg overflow-hidden shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${colors.light} 0%, white 50%, ${colors.light} 100%)`,
            border: `2px solid ${colors.primary}`,
            minHeight: '90px',
          }}
        >
          {/* Surah number circle */}
          <div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              border: '2px solid white',
            }}
          >
            {surah.id}
          </div>

          {/* Sign content */}
          <div className="pt-6 pb-2 px-1 text-center">
            {/* Arabic name */}
            <div
              className="text-lg font-bold leading-tight"
              style={{
                fontFamily: "'Scheherazade New', 'Amiri', serif",
                color: colors.secondary,
                textShadow: '0 1px 1px rgba(0,0,0,0.1)',
              }}
              dir="rtl"
            >
              {surah.nameAr}
            </div>

            {/* English name */}
            <div
              className="text-xs font-medium mt-0.5 truncate px-1"
              style={{ color: colors.primary }}
            >
              {surah.name}
            </div>

            {/* Verse count */}
            <div className="text-[10px] text-gray-500 mt-1">
              {surah.verses} verse{surah.verses !== 1 ? 's' : ''}
            </div>

            {/* Difficulty stars */}
            <div className="flex items-center justify-center gap-0.5 mt-1">
              {renderStars()}
            </div>

            {/* Type badge */}
            <div
              className="text-[8px] font-medium px-2 py-0.5 rounded-full mt-1 inline-block"
              style={{
                backgroundColor: colors.light,
                color: colors.primary,
              }}
            >
              {surah.type}
            </div>
          </div>
        </div>

        {/* Sign post pole */}
        <div
          className="w-3 h-6"
          style={{
            background: 'linear-gradient(90deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
            boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.3)',
          }}
        />

        {/* Platform base */}
        <div
          className="w-28 h-4 rounded-md relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #D2691E 0%, #8B4513 100%)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          {/* Wood grain texture */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.2) 2px,
                rgba(0,0,0,0.2) 3px
              )`,
            }}
          />
          {/* Platform edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white/30 to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 -left-3 flex flex-col items-center">
          {/* Lamp post */}
          <div className="relative">
            <div className="w-1 h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full" />
            <div
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-t-full"
              style={{
                background: isNear || isSelected
                  ? 'radial-gradient(circle at center, #FFE066 0%, #F59E0B 100%)'
                  : 'radial-gradient(circle at center, #FDE68A 0%, #F59E0B 100%)',
                boxShadow: isNear || isSelected
                  ? '0 0 15px rgba(245, 158, 11, 0.8)'
                  : '0 0 5px rgba(245, 158, 11, 0.4)',
              }}
            />
          </div>
        </div>

        {/* Decorative flowers on the right */}
        <div className="absolute bottom-4 -right-2 flex gap-0.5">
          <div className="text-xs transform rotate-12" style={{ color: '#EC4899' }}>
            {'\u2740'}
          </div>
          <div className="text-xs transform -rotate-12" style={{ color: '#F472B6' }}>
            {'\u273F'}
          </div>
          <div className="text-[10px]" style={{ color: '#10B981' }}>
            {'\u2618'}
          </div>
        </div>

        {/* Small bench */}
        <div className="absolute bottom-5 -right-6 transform scale-75">
          <div className="w-5 h-1 bg-amber-700 rounded-sm" />
          <div className="flex justify-between mt-0.5">
            <div className="w-0.5 h-2 bg-amber-800" />
            <div className="w-0.5 h-2 bg-amber-800" />
          </div>
        </div>

        {/* Enter prompt when selected */}
        {isSelected && (
          <div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
            style={{
              animation: 'stationBounce 1s ease-in-out infinite',
            }}
          >
            <div
              className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                boxShadow: `0 4px 15px ${colors.glow}`,
              }}
            >
              Tap to Enter!
            </div>
          </div>
        )}
      </div>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes stationGlow {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes stationBounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-4px);
          }
        }

        .station-container:focus {
          outline: none;
        }

        .station-container:focus-visible {
          outline: 3px solid #F59E0B;
          outline-offset: 4px;
          border-radius: 8px;
        }

        .station-container:hover {
          transform: scale(1.05) translateY(-4px);
        }

        .station-container:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default Station;
