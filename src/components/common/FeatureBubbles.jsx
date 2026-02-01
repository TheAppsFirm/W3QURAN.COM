/**
 * FeatureBubbles Component
 * Magical floating bubble menu for Quran reader features
 * - Orbiting/floating bubbles on left side
 * - Thought bubble connections to panels
 * - Beautiful animations and transitions
 */

import { useState, memo } from 'react';
import { Icons } from './Icons';

// Feature definitions with icons and colors
const FEATURES = [
  { id: 'tafseer', icon: 'BookOpen', label: 'Tafseer', color: '#8B5CF6', description: 'Commentary & Explanation' },
  { id: 'memorize', icon: 'Brain', label: 'Memorize', color: '#F59E0B', description: 'Hifz Mode' },
  { id: 'bookmark', icon: 'Bookmark', label: 'Bookmarks', color: '#EC4899', description: 'Save & Notes' },
  { id: 'youtube', icon: 'Video', label: 'Lectures', color: '#EF4444', description: 'Video Explanations' },
  { id: 'share', icon: 'Share', label: 'Share', color: '#10B981', description: 'Share Beautiful Card' },
];

// Individual Feature Bubble
const FeatureBubble = memo(function FeatureBubble({
  feature,
  index,
  isActive,
  onClick,
  isHovered,
  onHover
}) {
  const Icon = Icons[feature.icon] || Icons.Circle;
  const delay = index * 0.1;

  return (
    <div
      className="relative group"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isActive ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
        }`}
        style={{
          background: `radial-gradient(circle, ${feature.color}60 0%, transparent 70%)`,
          filter: 'blur(10px)',
        }}
      />

      {/* Pulse ring when active */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${feature.color}`,
            animation: 'pulseRing 1.5s ease-out infinite',
          }}
        />
      )}

      {/* Main bubble */}
      <button
        onClick={onClick}
        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive
            ? 'scale-110 shadow-2xl'
            : 'hover:scale-110 shadow-lg'
        }`}
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`
            : `linear-gradient(135deg, ${feature.color}90, ${feature.color}60)`,
          boxShadow: isActive
            ? `0 0 30px ${feature.color}80, 0 10px 40px ${feature.color}40`
            : `0 4px 20px ${feature.color}40`,
          animation: `floatBubble ${3 + index * 0.5}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {/* Glass highlight */}
        <div
          className="absolute top-1 left-2 right-2 h-3 rounded-full opacity-50"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)',
          }}
        />

        <Icon className="w-5 h-5 text-white relative z-10" />
      </button>

      {/* Tooltip */}
      <div
        className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}
      >
        <div
          className="px-3 py-2 rounded-2xl text-white text-sm font-medium"
          style={{
            background: `linear-gradient(135deg, ${feature.color}f0, ${feature.color}cc)`,
            boxShadow: `0 4px 20px ${feature.color}50`,
          }}
        >
          <div className="flex items-center gap-2">
            <span>{feature.label}</span>
          </div>
          <div className="text-[10px] text-white/70 mt-0.5">{feature.description}</div>
        </div>
        {/* Tooltip arrow */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
          style={{
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: `8px solid ${feature.color}f0`,
          }}
        />
      </div>
    </div>
  );
});

// Thought bubble connection trail
const ThoughtBubbleTrail = memo(function ThoughtBubbleTrail({ isVisible, color, direction = 'right' }) {
  if (!isVisible) return null;

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-1 ${
        direction === 'right' ? 'left-full ml-2' : 'right-full mr-2'
      }`}
      style={{ animation: 'fadeIn 0.3s ease-out' }}
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            background: `${color}${90 - i * 15}`,
            animation: `bubbleDot 0.3s ease-out ${i * 0.05}s both`,
          }}
        />
      ))}
    </div>
  );
});

// Main FeatureBubbles Component
const FeatureBubbles = memo(function FeatureBubbles({
  activeFeature,
  onFeatureSelect,
  position = 'left' // 'left' or 'right'
}) {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <>
      {/* Bubble container */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 ${
          position === 'left' ? 'left-4' : 'right-4'
        }`}
        style={{ animation: 'slideInBubbles 0.5s ease-out' }}
      >
        {/* Connection line between bubbles */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5 rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
          }}
        />

        {FEATURES.map((feature, index) => (
          <div key={feature.id} className="relative">
            <FeatureBubble
              feature={feature}
              index={index}
              isActive={activeFeature === feature.id}
              isHovered={hoveredFeature === feature.id}
              onClick={() => onFeatureSelect(activeFeature === feature.id ? null : feature.id)}
              onHover={setHoveredFeature}
            />

            {/* Thought bubble trail when active */}
            {activeFeature === feature.id && (
              <ThoughtBubbleTrail
                isVisible={true}
                color={feature.color}
                direction={position === 'left' ? 'right' : 'left'}
              />
            )}
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes floatBubble {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(2deg); }
          75% { transform: translateY(3px) rotate(-2deg); }
        }

        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        @keyframes slideInBubbles {
          0% { opacity: 0; transform: translateY(-50%) translateX(-30px); }
          100% { opacity: 1; transform: translateY(-50%) translateX(0); }
        }

        @keyframes bubbleDot {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
});

export default FeatureBubbles;
export { FEATURES };
