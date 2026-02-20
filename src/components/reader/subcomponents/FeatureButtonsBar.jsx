/**
 * FeatureButtonsBar Component
 * Top feature buttons bar for quick access to reader features
 *
 * Features:
 * - Tafseer, Videos, Memorize, Bookmark, Share
 * - Innovative features: Visualize, Time Capsule, Voice, Meditate, Family
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

import { memo, useCallback } from 'react';
import { Icons } from '../../common/Icons';

/**
 * Feature button configuration
 * @typedef {Object} FeatureButton
 * @property {string} id - Unique identifier
 * @property {React.ComponentType} icon - Icon component
 * @property {string} color - Button color (hex)
 * @property {string} label - Display label
 */

/**
 * Default feature buttons configuration
 */
const DEFAULT_FEATURE_BUTTONS = [
  { id: 'tafseer', icon: Icons.BookOpen, color: '#8B5CF6', label: 'Tafseer' },
  { id: 'youtube', icon: Icons.Video, color: '#EF4444', label: 'Videos' },
  { id: 'memorize', icon: Icons.Brain, color: '#F59E0B', label: 'Memorize' },
  { id: 'bookmark', icon: Icons.Bookmark, color: '#EC4899', label: 'Bookmark' },
  { id: 'share', icon: Icons.Share, color: '#10B981', label: 'Share' },
  // Innovative Features
  { id: 'visualization', icon: Icons.Sparkle, color: '#6366F1', label: 'Visualize' },
  { id: 'timecapsule', icon: Icons.Capsule, color: '#F472B6', label: 'Capsule' },
  { id: 'voicecontrol', icon: Icons.Speech, color: '#22C55E', label: 'Voice' },
  { id: 'meditation', icon: Icons.Breath, color: '#A855F7', label: 'Meditate' },
  { id: 'family', icon: Icons.Family, color: '#F59E0B', label: 'Family' },
];

/**
 * FeatureButtonsBar - Horizontal scrollable bar of feature toggle buttons
 *
 * @param {Object} props
 * @param {boolean} props.isAnimating - Whether the parent is animating (for fade effect)
 * @param {Function} props.onFeatureSelect - Callback when a feature is selected
 * @param {Function} props.getActiveState - Function to determine if a feature is active
 * @param {Function} props.stopPropagation - Event handler to stop propagation
 * @param {FeatureButton[]} [props.buttons] - Custom button configuration
 */
const FeatureButtonsBar = memo(function FeatureButtonsBar({
  isAnimating = false,
  onFeatureSelect,
  getActiveState,
  stopPropagation,
  buttons = DEFAULT_FEATURE_BUTTONS,
}) {
  const handleClick = useCallback(
    (featureId) => {
      if (onFeatureSelect) {
        onFeatureSelect(featureId);
      }
    },
    [onFeatureSelect]
  );

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ${
        isAnimating ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
      }`}
      onClick={stopPropagation}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 max-w-[95vw] overflow-x-auto scrollbar-hide">
        {buttons.map((btn) => {
          const Icon = btn.icon;
          const isActive = getActiveState ? getActiveState(btn.id) : false;

          return (
            <button
              key={btn.id}
              onClick={() => handleClick(btn.id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all hover:scale-105 flex-shrink-0 ${
                isActive ? 'scale-105' : ''
              }`}
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${btn.color}, ${btn.color}cc)`
                  : 'rgba(255,255,255,0.1)',
                boxShadow: isActive ? `0 0 20px ${btn.color}60` : 'none',
              }}
              title={btn.label}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-white text-xs font-medium hidden sm:inline">
                {btn.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default FeatureButtonsBar;
export { DEFAULT_FEATURE_BUTTONS };
