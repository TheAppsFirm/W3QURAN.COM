/**
 * Ayah Connection Map - Visual Quran Explorer
 * Interactive Mind Map showing how verses connect across the entire Quran
 * Features:
 * - Interactive mind map/flowchart visualization
 * - Theme-based connections with animated lines
 * - Story threads across surahs
 * - Click to explore related verses
 * - Bubble-style nodes with glass effects
 */

import { useState, useEffect, useCallback, memo, useMemo, useRef } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import {
  QURAN_THEMES,
  QURAN_STORIES,
  CONNECTION_TYPES,
  getVerseConnections,
  getAllThemes,
  getAllStories,
} from '../../data/ayahConnections';

// Mind Map Node Component - Bubble Style
const MindMapNode = memo(function MindMapNode({
  id,
  label,
  labelAr,
  sublabel,
  icon,
  color,
  x,
  y,
  size = 'medium',
  isActive,
  isCenter,
  onClick,
  animationDelay = 0,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = Icons[icon] || Icons.Star;

  const sizes = {
    small: { width: 60, height: 60, iconSize: 20, fontSize: 9 },
    medium: { width: 80, height: 80, iconSize: 24, fontSize: 10 },
    large: { width: 100, height: 100, iconSize: 28, fontSize: 11 },
    xlarge: { width: 140, height: 140, iconSize: 36, fontSize: 13 },
  };

  const s = sizes[size];

  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick && onClick(); }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute transition-all duration-500 focus:outline-none"
      style={{
        left: x,
        top: y,
        width: s.width,
        height: s.height,
        transform: `translate(-50%, -50%) scale(${isActive || isHovered ? 1.15 : 1})`,
        zIndex: isActive || isHovered ? 100 : 50,
        animation: `bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${animationDelay}ms both`,
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-500"
        style={{
          inset: '-20%',
          background: `radial-gradient(circle at 50% 50%, ${color}50 0%, transparent 70%)`,
          opacity: isActive || isHovered ? 1 : 0.3,
          filter: 'blur(10px)',
          animation: isActive || isHovered ? 'breathe 2s ease-in-out infinite' : 'none',
        }}
      />

      {/* Spinning ring */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-500"
        style={{
          inset: '-8%',
          background: `conic-gradient(from 0deg, ${color}90, ${color}50, ${color}90)`,
          opacity: isActive || isHovered ? 0.8 : 0,
          animation: 'spinSlow 4s linear infinite',
          filter: 'blur(1px)',
        }}
      />

      {/* Main bubble */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: isCenter
            ? `linear-gradient(135deg, ${color} 0%, ${color}dd 50%, ${color}bb 100%)`
            : `linear-gradient(135deg, ${color}ee 0%, ${color}cc 50%, ${color}aa 100%)`,
          boxShadow: isActive || isHovered
            ? `0 0 30px ${color}70, 0 10px 40px rgba(0,0,0,0.4), inset 0 -15px 30px ${color}60, inset 0 15px 30px rgba(255,255,255,0.3)`
            : `0 5px 20px ${color}40, inset 0 -10px 20px ${color}40, inset 0 10px 20px rgba(255,255,255,0.2)`,
        }}
      >
        {/* Glass highlight - top */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '70%',
            height: '40%',
            top: '5%',
            left: '15%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            transform: 'scaleY(0.5)',
          }}
        />

        {/* Small bright spot */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '18%',
            height: '12%',
            top: '15%',
            left: '20%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Clock sweep on hover */}
        {(isActive || isHovered) && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.3) 0deg, transparent 60deg)`,
                animation: 'spinSlow 2s linear infinite',
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-1">
          <Icon
            className="text-white drop-shadow-lg"
            style={{ width: s.iconSize, height: s.iconSize }}
          />
          {size !== 'small' && (
            <>
              <span
                className="text-white font-bold mt-1 text-center leading-tight max-w-full px-1 truncate"
                style={{ fontSize: s.fontSize }}
              >
                {label}
              </span>
              {labelAr && size !== 'medium' && (
                <span
                  className="text-white/80 text-center leading-tight"
                  style={{ fontSize: s.fontSize - 1, fontFamily: "'Scheherazade New', serif" }}
                  dir="rtl"
                >
                  {labelAr}
                </span>
              )}
            </>
          )}
        </div>
      </div>

      {/* Outer border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300"
        style={{
          border: `2px solid ${isActive || isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)'}`,
          boxShadow: isActive || isHovered ? `0 0 15px ${color}60, inset 0 0 10px ${color}30` : 'none',
        }}
      />

      {/* Sublabel tooltip */}
      {sublabel && (isActive || isHovered) && (
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 whitespace-nowrap z-50"
        >
          <span className="text-white text-xs">{sublabel}</span>
        </div>
      )}
    </button>
  );
});

// Connection Line Component - Animated SVG
const ConnectionLine = memo(function ConnectionLine({ from, to, color, animated = true, thickness = 2, delay = 0 }) {
  const id = `gradient-${from.x}-${from.y}-${to.x}-${to.y}`;

  // Calculate control points for curved line
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const curvature = Math.min(dist * 0.2, 50);

  // Perpendicular offset for curve
  const px = -dy / dist * curvature;
  const py = dx / dist * curvature;

  const path = `M ${from.x} ${from.y} Q ${midX + px} ${midY + py} ${to.x} ${to.y}`;

  return (
    <g>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="50%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Glow line */}
      <path
        d={path}
        stroke={color}
        strokeWidth={thickness + 4}
        fill="none"
        strokeLinecap="round"
        opacity="0.2"
        style={{ filter: 'blur(4px)' }}
      />

      {/* Main line */}
      <path
        d={path}
        stroke={`url(#${id})`}
        strokeWidth={thickness}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={animated ? "8,4" : "none"}
        style={{
          animation: animated ? `connectionFlow 1s linear infinite` : 'none',
          animationDelay: `${delay}ms`,
        }}
      />

      {/* Flowing particle */}
      {animated && (
        <circle r="3" fill={color}>
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin={`${delay}ms`}
          >
            <mpath href={`#path-${id}`} />
          </animateMotion>
        </circle>
      )}
      <path id={`path-${id}`} d={path} fill="none" style={{ display: 'none' }} />
    </g>
  );
});

// Theme Mind Map View
const ThemeMindMap = memo(function ThemeMindMap({ themes, onSelectTheme, selectedTheme, containerSize }) {
  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;
  const radius = Math.min(containerSize.width, containerSize.height) * 0.35;

  // Calculate positions in a circle around center
  const positions = themes.map((theme, i) => {
    const angle = (i / themes.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative w-full h-full">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      >
        {themes.map((theme, i) => (
          <ConnectionLine
            key={`line-${theme.id}`}
            from={{ x: centerX, y: centerY }}
            to={positions[i]}
            color={theme.color}
            animated={selectedTheme?.id === theme.id}
            thickness={selectedTheme?.id === theme.id ? 3 : 1.5}
            delay={i * 100}
          />
        ))}
      </svg>

      {/* Center node */}
      <MindMapNode
        id="center"
        label="Quran"
        labelAr="القرآن"
        sublabel="Explore Themes"
        icon="Book"
        color="#8B5CF6"
        x={centerX}
        y={centerY}
        size="xlarge"
        isCenter={true}
        isActive={!selectedTheme}
        onClick={() => onSelectTheme(null)}
        animationDelay={0}
      />

      {/* Theme nodes */}
      {themes.map((theme, i) => (
        <MindMapNode
          key={theme.id}
          id={theme.id}
          label={theme.name.split(' ')[0]}
          labelAr={theme.nameAr}
          sublabel={`${theme.verses.length} verses`}
          icon={theme.icon}
          color={theme.color}
          x={positions[i].x}
          y={positions[i].y}
          size="medium"
          isActive={selectedTheme?.id === theme.id}
          onClick={() => onSelectTheme(theme)}
          animationDelay={(i + 1) * 80}
        />
      ))}
    </div>
  );
});

// Story Mind Map View
const StoryMindMap = memo(function StoryMindMap({ stories, onSelectStory, selectedStory, containerSize }) {
  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;
  const radius = Math.min(containerSize.width, containerSize.height) * 0.35;

  // Calculate positions in a circle around center
  const positions = stories.map((story, i) => {
    const angle = (i / stories.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative w-full h-full">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      >
        {stories.map((story, i) => (
          <ConnectionLine
            key={`line-${story.id}`}
            from={{ x: centerX, y: centerY }}
            to={positions[i]}
            color={story.color}
            animated={selectedStory?.id === story.id}
            thickness={selectedStory?.id === story.id ? 3 : 1.5}
            delay={i * 100}
          />
        ))}
      </svg>

      {/* Center node */}
      <MindMapNode
        id="center"
        label="Prophets"
        labelAr="الأنبياء"
        sublabel="Explore Stories"
        icon="Users"
        color="#F59E0B"
        x={centerX}
        y={centerY}
        size="xlarge"
        isCenter={true}
        isActive={!selectedStory}
        onClick={() => onSelectStory(null)}
        animationDelay={0}
      />

      {/* Story nodes */}
      {stories.map((story, i) => (
        <MindMapNode
          key={story.id}
          id={story.id}
          label={story.name.split(' ')[0]}
          labelAr={story.nameAr}
          sublabel={`${story.chapters.length} surahs`}
          icon={story.icon}
          color={story.color}
          x={positions[i].x}
          y={positions[i].y}
          size="medium"
          isActive={selectedStory?.id === story.id}
          onClick={() => onSelectStory(story)}
          animationDelay={(i + 1) * 80}
        />
      ))}
    </div>
  );
});

// Theme Detail View - Shows verses as a flowchart
const ThemeDetailView = memo(function ThemeDetailView({ theme, onSelectVerse, onBack, containerSize }) {
  const Icon = Icons[theme.icon] || Icons.Star;
  const centerX = containerSize.width / 2;
  const centerY = 100;

  // Arrange verses in rows
  const versesPerRow = Math.min(5, Math.ceil(Math.sqrt(theme.verses.length)));
  const rowHeight = 120;
  const colWidth = Math.min(140, (containerSize.width - 100) / versesPerRow);

  const getVersePosition = (index) => {
    const row = Math.floor(index / versesPerRow);
    const col = index % versesPerRow;
    const rowVerseCount = Math.min(versesPerRow, theme.verses.length - row * versesPerRow);
    const rowStartX = centerX - ((rowVerseCount - 1) * colWidth) / 2;

    return {
      x: rowStartX + col * colWidth,
      y: centerY + 120 + row * rowHeight,
    };
  };

  return (
    <div className="relative w-full h-full overflow-auto">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: Math.max(containerSize.height, centerY + 150 + Math.ceil(theme.verses.length / versesPerRow) * rowHeight) }}
      >
        {theme.verses.map((verse, i) => {
          const pos = getVersePosition(i);
          return (
            <ConnectionLine
              key={`line-${verse.surah}-${verse.ayah}`}
              from={{ x: centerX, y: centerY + 50 }}
              to={pos}
              color={theme.color}
              animated={false}
              thickness={1.5}
              delay={i * 50}
            />
          );
        })}
      </svg>

      {/* Theme header node */}
      <MindMapNode
        id={theme.id}
        label={theme.name.split(' ')[0]}
        labelAr={theme.nameAr}
        sublabel={theme.description.slice(0, 40) + '...'}
        icon={theme.icon}
        color={theme.color}
        x={centerX}
        y={centerY}
        size="large"
        isCenter={true}
        isActive={true}
        onClick={onBack}
        animationDelay={0}
      />

      {/* Back button */}
      <button
        onClick={(e) => { e.stopPropagation(); onBack(); }}
        className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
      >
        <Icons.ChevronLeft className="w-4 h-4 text-white" />
        <span className="text-white text-sm">Back</span>
      </button>

      {/* Verse nodes */}
      {theme.verses.map((verse, i) => {
        const pos = getVersePosition(i);
        const surah = SURAHS.find(s => s.id === verse.surah);
        return (
          <MindMapNode
            key={`${verse.surah}-${verse.ayah}`}
            id={`${verse.surah}-${verse.ayah}`}
            label={`${verse.surah}:${verse.ayah}`}
            sublabel={surah?.name || `Surah ${verse.surah}`}
            icon="BookOpen"
            color={theme.color}
            x={pos.x}
            y={pos.y}
            size="small"
            isActive={false}
            onClick={() => onSelectVerse(verse.surah, verse.ayah)}
            animationDelay={(i + 1) * 50}
          />
        );
      })}
    </div>
  );
});

// Story Detail View - Shows chapters as a flowchart
const StoryDetailView = memo(function StoryDetailView({ story, onSelectVerse, onBack, containerSize }) {
  const Icon = Icons[story.icon] || Icons.Book;
  const centerX = containerSize.width / 2;
  const centerY = 100;

  // Arrange chapters vertically
  const chapterHeight = 100;

  return (
    <div className="relative w-full h-full overflow-auto">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: Math.max(containerSize.height, centerY + 150 + story.chapters.length * chapterHeight) }}
      >
        {story.chapters.map((chapter, i) => (
          <ConnectionLine
            key={`line-${chapter.surah}`}
            from={{ x: centerX, y: centerY + 50 + i * 10 }}
            to={{ x: centerX, y: centerY + 140 + i * chapterHeight }}
            color={story.color}
            animated={true}
            thickness={2}
            delay={i * 100}
          />
        ))}
      </svg>

      {/* Story header node */}
      <MindMapNode
        id={story.id}
        label={story.name}
        labelAr={story.nameAr}
        sublabel={story.description.slice(0, 40) + '...'}
        icon={story.icon}
        color={story.color}
        x={centerX}
        y={centerY}
        size="large"
        isCenter={true}
        isActive={true}
        onClick={onBack}
        animationDelay={0}
      />

      {/* Back button */}
      <button
        onClick={(e) => { e.stopPropagation(); onBack(); }}
        className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
      >
        <Icons.ChevronLeft className="w-4 h-4 text-white" />
        <span className="text-white text-sm">Back</span>
      </button>

      {/* Chapter nodes */}
      {story.chapters.map((chapter, i) => {
        const surah = SURAHS.find(s => s.id === chapter.surah);
        return (
          <MindMapNode
            key={chapter.surah}
            id={`chapter-${chapter.surah}`}
            label={surah?.name || `Surah ${chapter.surah}`}
            sublabel={`Verses ${chapter.ayahs[0]}-${chapter.ayahs[chapter.ayahs.length - 1]}`}
            icon="BookOpen"
            color={story.color}
            x={centerX}
            y={centerY + 140 + i * chapterHeight}
            size="medium"
            isActive={false}
            onClick={() => onSelectVerse(chapter.surah, chapter.ayahs[0])}
            animationDelay={(i + 1) * 100}
          />
        );
      })}
    </div>
  );
});

// Main Ayah Connection Map Component
const AyahConnectionMap = memo(function AyahConnectionMap({
  isVisible,
  onClose,
  initialSurah = null,
  initialAyah = null,
  onNavigateToVerse,
}) {
  const [activeTab, setActiveTab] = useState('themes'); // themes, stories, explore
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showThemeDetail, setShowThemeDetail] = useState(false);
  const [showStoryDetail, setShowStoryDetail] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const containerRef = useRef(null);

  const themes = useMemo(() => getAllThemes(), []);
  const stories = useMemo(() => getAllStories(), []);

  // Measure container size
  useEffect(() => {
    if (isVisible && containerRef.current) {
      const updateSize = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            setContainerSize({ width: rect.width, height: Math.max(rect.height - 80, 400) });
          }
        }
      };
      // Small delay to ensure element is fully rendered
      const timer = setTimeout(updateSize, 50);
      window.addEventListener('resize', updateSize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateSize);
      };
    }
  }, [isVisible]);

  const handleSelectTheme = useCallback((theme) => {
    if (theme) {
      setSelectedTheme(theme);
      setShowThemeDetail(true);
    } else {
      setShowThemeDetail(false);
      setSelectedTheme(null);
    }
  }, []);

  const handleSelectStory = useCallback((story) => {
    if (story) {
      setSelectedStory(story);
      setShowStoryDetail(true);
    } else {
      setShowStoryDetail(false);
      setSelectedStory(null);
    }
  }, []);

  const handleNavigateToVerse = useCallback((surah, ayah) => {
    if (onNavigateToVerse) {
      onNavigateToVerse(surah, ayah);
      onClose();
    }
  }, [onNavigateToVerse, onClose]);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setSelectedTheme(null);
    setSelectedStory(null);
    setShowThemeDetail(false);
    setShowStoryDetail(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        ref={containerRef}
        className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-4 sm:p-6 border-b border-white/10 bg-black/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                <Icons.Network className="w-6 h-6 text-white relative z-10" />
                {/* Glass effect */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-white/50 to-transparent rounded-full transform scale-x-150" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Quran Mind Map</h2>
                <p className="text-white/60 text-xs sm:text-sm">Visual connections across the Quran</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
            {[
              { id: 'themes', label: 'Themes', icon: Icons.Layers, count: themes.length, color: '#8B5CF6' },
              { id: 'stories', label: 'Stories', icon: Icons.Book, count: stories.length, color: '#F59E0B' },
              { id: 'explore', label: 'Explore', icon: Icons.Search, color: '#10B981' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-full transition-all flex-shrink-0"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${tab.color}dd, ${tab.color}99)`
                      : 'rgba(255,255,255,0.05)',
                    boxShadow: isActive ? `0 0 20px ${tab.color}40` : 'none',
                  }}
                >
                  <Icon className="w-4 h-4 text-white" />
                  <span className={`text-sm ${isActive ? 'text-white font-medium' : 'text-white/60'}`}>
                    {tab.label}
                  </span>
                  {tab.count && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                        color: isActive ? 'white' : 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mind Map Content */}
        <div
          className="flex-1 overflow-hidden relative"
          style={{ minHeight: '400px', height: containerSize.height }}
        >
          {/* Background grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Themes Tab - Mind Map */}
          {activeTab === 'themes' && !showThemeDetail && (
            <ThemeMindMap
              themes={themes}
              onSelectTheme={handleSelectTheme}
              selectedTheme={selectedTheme}
              containerSize={containerSize}
            />
          )}

          {/* Theme Detail View */}
          {activeTab === 'themes' && showThemeDetail && selectedTheme && (
            <ThemeDetailView
              theme={selectedTheme}
              onSelectVerse={handleNavigateToVerse}
              onBack={() => {
                setShowThemeDetail(false);
                setSelectedTheme(null);
              }}
              containerSize={containerSize}
            />
          )}

          {/* Stories Tab - Mind Map */}
          {activeTab === 'stories' && !showStoryDetail && (
            <StoryMindMap
              stories={stories}
              onSelectStory={handleSelectStory}
              selectedStory={selectedStory}
              containerSize={containerSize}
            />
          )}

          {/* Story Detail View */}
          {activeTab === 'stories' && showStoryDetail && selectedStory && (
            <StoryDetailView
              story={selectedStory}
              onSelectVerse={handleNavigateToVerse}
              onBack={() => {
                setShowStoryDetail(false);
                setSelectedStory(null);
              }}
              containerSize={containerSize}
            />
          )}

          {/* Explore Tab */}
          {activeTab === 'explore' && (
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center relative">
                <Icons.Search className="w-12 h-12 text-emerald-400" />
                {/* Glass effect */}
                <div className="absolute top-2 left-1/4 w-1/2 h-1/4 bg-gradient-to-b from-white/30 to-transparent rounded-full transform scale-x-150" />
                {/* Spinning ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: '-4px',
                    background: 'conic-gradient(from 0deg, #10B98180, #14B8A680, #10B98180)',
                    animation: 'spinSlow 4s linear infinite',
                    opacity: 0.6,
                  }}
                />
              </div>

              <h3 className="text-white font-bold text-xl mb-2">Explore Any Verse</h3>
              <p className="text-white/60 text-center max-w-md mb-8">
                Click on any verse while reading to discover its connections to other parts of the Quran.
              </p>

              {/* Quick Links */}
              <div className="w-full max-w-2xl">
                <h4 className="text-white/60 text-sm font-medium mb-4 text-center">Popular Verses</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { surah: 2, ayah: 255, name: 'Ayatul Kursi', color: '#8B5CF6' },
                    { surah: 36, ayah: 1, name: 'Ya-Sin', color: '#06B6D4' },
                    { surah: 55, ayah: 1, name: 'Ar-Rahman', color: '#10B981' },
                    { surah: 112, ayah: 1, name: 'Al-Ikhlas', color: '#F59E0B' },
                    { surah: 1, ayah: 1, name: 'Al-Fatiha', color: '#EC4899' },
                    { surah: 67, ayah: 1, name: 'Al-Mulk', color: '#EF4444' },
                  ].map((verse) => (
                    <button
                      key={`${verse.surah}-${verse.ayah}`}
                      onClick={() => handleNavigateToVerse(verse.surah, verse.ayah)}
                      className="p-4 rounded-2xl transition-all hover:scale-105 text-left relative overflow-hidden group"
                      style={{
                        background: `linear-gradient(135deg, ${verse.color}30, ${verse.color}10)`,
                        border: `1px solid ${verse.color}30`,
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${verse.color}20 0%, transparent 70%)`,
                        }}
                      />
                      <p className="text-white font-medium relative z-10">{verse.name}</p>
                      <p className="text-white/60 text-sm relative z-10">Surah {verse.surah}:{verse.ayah}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Connection Type Legend */}
        <div className="flex-shrink-0 p-3 sm:p-4 border-t border-white/10 bg-black/30">
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            {Object.entries(CONNECTION_TYPES).map(([key, type]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: type.color,
                    boxShadow: `0 0 8px ${type.color}80`,
                  }}
                />
                <span className="text-white/60 text-xs">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes connectionFlow {
          0% {
            stroke-dashoffset: 20;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
});

export default AyahConnectionMap;
