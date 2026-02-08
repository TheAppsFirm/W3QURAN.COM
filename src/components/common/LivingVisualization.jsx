/**
 * Living Quran Visualization
 * Dynamic, real-time visualization of Quranic concepts through animated graphics
 * Features: Theme Galaxy, Word Cloud, Nature Parallels
 *
 * HOW THIS HELPS USERS:
 * - Theme Galaxy: See major Quranic themes (Sabr, Tawakkul, Shukr, etc.) as connected stars
 *   Users can click any theme to see related verses and apply them to their life
 * - Word Cloud: Discover the most frequently mentioned words in Quran
 *   Shows what Allah emphasizes most - helps prioritize understanding
 * - Nature Signs: Scientific miracles showing how Quran describes natural phenomena
 *   Strengthens faith by connecting revelation to observable reality
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { QURAN_THEMES, QURAN_STORIES } from '../../data/ayahConnections';
import { NATURE_PARALLELS, QURAN_WORD_FREQUENCIES, getAllNatureParallels } from '../../data/natureParallels';
import { SURAHS } from '../../data';

// Visualization modes with user-focused descriptions
const MODES = [
  {
    id: 'galaxy',
    name: 'Theme Galaxy',
    icon: 'Stars',
    description: 'Explore themes as constellations',
    helpText: 'Click any theme to find verses for your situation'
  },
  {
    id: 'wordcloud',
    name: 'Word Cloud',
    icon: 'Type',
    description: 'Most frequent Quranic words',
    helpText: 'Discover what Allah emphasizes most in the Quran'
  },
  {
    id: 'nature',
    name: 'Nature Signs',
    icon: 'Leaf',
    description: 'Scientific miracles in the Quran',
    helpText: 'See how Quran describes natural phenomena'
  },
];

// How each theme helps in daily life
const THEME_LIFE_APPLICATIONS = {
  sabr: {
    situation: "When facing difficulties, loss, or waiting for something",
    advice: "Practice patience knowing Allah is with those who persevere",
    dua: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
  },
  tawakkul: {
    situation: "When anxious about the future or making decisions",
    advice: "Trust in Allah's plan after doing your best effort",
    dua: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
  },
  shukr: {
    situation: "To increase blessings and find contentment",
    advice: "Express gratitude daily - it multiplies what you have",
    dua: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
  },
  tawbah: {
    situation: "After making mistakes or feeling spiritually distant",
    advice: "Allah's mercy is vast - turn back sincerely",
    dua: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ",
  },
  dhikr: {
    situation: "When feeling empty, distracted, or stressed",
    advice: "Remember Allah often - hearts find peace in His remembrance",
    dua: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
  },
  ihsan: {
    situation: "To improve your worship and character",
    advice: "Worship as if you see Allah - He always sees you",
    dua: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
  },
  taqwa: {
    situation: "When facing temptation or ethical dilemmas",
    advice: "Allah-consciousness is your inner compass for right choices",
    dua: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا",
  },
  rizq: {
    situation: "When worried about provision, job, or finances",
    advice: "Allah provides from sources you cannot imagine",
    dua: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ",
  },
  hidayah: {
    situation: "When seeking direction or truth in life",
    advice: "Ask Allah sincerely - He guides those who seek",
    dua: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
  },
  rahma: {
    situation: "When needing comfort or wanting to show mercy to others",
    advice: "Allah's mercy encompasses everything - be merciful to receive mercy",
    dua: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
  },
};

// Theme Galaxy Component with enhanced guidance
const ThemeGalaxy = memo(function ThemeGalaxy({ onSelectTheme, onNavigateToVerse }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const themesRef = useRef([]);

  const themes = useMemo(() => Object.entries(QURAN_THEMES).map(([id, theme]) => ({
    id,
    ...theme,
    x: 0,
    y: 0,
    radius: 28 + (theme.verses?.length || 5) * 2.5,
  })), []);

  // Initialize positions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.65;

    themesRef.current = themes.map((theme, i) => {
      const angle = (i / themes.length) * Math.PI * 2 - Math.PI / 2;
      return {
        ...theme,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        angle,
        orbitRadius: radius,
        orbitSpeed: 0.0001 + Math.random() * 0.00005,
      };
    });
  }, [themes]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw subtle connecting lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      themesRef.current.forEach((theme, i) => {
        themesRef.current.forEach((other, j) => {
          if (i < j) {
            ctx.beginPath();
            ctx.moveTo(theme.x, theme.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw themes
      themesRef.current.forEach((theme, i) => {
        // Update position with gentle orbit
        theme.angle += theme.orbitSpeed;
        theme.x = centerX + Math.cos(theme.angle) * theme.orbitRadius;
        theme.y = centerY + Math.sin(theme.angle) * theme.orbitRadius + Math.sin(time * 0.02 + i) * 3;

        const isHovered = hoveredTheme === theme.id;
        const isSelected = selectedTheme === theme.id;
        const scale = isHovered ? 1.2 : isSelected ? 1.15 : 1;
        const radius = theme.radius * scale;

        // Glow
        const gradient = ctx.createRadialGradient(theme.x, theme.y, 0, theme.x, theme.y, radius * 2);
        gradient.addColorStop(0, `${theme.color}50`);
        gradient.addColorStop(0.5, `${theme.color}15`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(theme.x, theme.y, radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Main circle
        ctx.beginPath();
        ctx.arc(theme.x, theme.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${theme.color}${isHovered || isSelected ? 'dd' : 'aa'}`;
        ctx.fill();

        // Border
        ctx.strokeStyle = `${theme.color}`;
        ctx.lineWidth = isHovered || isSelected ? 3 : 1.5;
        ctx.stroke();

        // Small orbiting particles
        for (let p = 0; p < 2; p++) {
          const particleAngle = time * 0.04 + (p * Math.PI);
          const px = theme.x + Math.cos(particleAngle) * (radius + 8);
          const py = theme.y + Math.sin(particleAngle) * (radius + 8);
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = `${theme.color}60`;
          ctx.fill();
        }
      });

      // Draw center with Quran symbol
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      centerGradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      centerGradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.05)');
      centerGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hoveredTheme, selectedTheme]);

  // Handle mouse interaction
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    let found = null;
    themesRef.current.forEach((theme) => {
      const dx = x - theme.x;
      const dy = y - theme.y;
      if (Math.sqrt(dx * dx + dy * dy) < theme.radius * 1.2) {
        found = theme.id;
      }
    });
    setHoveredTheme(found);
  }, []);

  const handleClick = useCallback((e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    themesRef.current.forEach((theme) => {
      const dx = x - theme.x;
      const dy = y - theme.y;
      if (Math.sqrt(dx * dx + dy * dy) < theme.radius * 1.2) {
        setSelectedTheme(theme.id);
        onSelectTheme && onSelectTheme(theme);
      }
    });
  }, [onSelectTheme]);

  const selectedThemeData = selectedTheme ? QURAN_THEMES[selectedTheme] : null;
  const lifeApplication = selectedTheme ? THEME_LIFE_APPLICATIONS[selectedTheme] : null;

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Canvas area */}
      <div className="relative flex-shrink-0" style={{ height: '300px' }}>
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="w-full h-full cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredTheme(null)}
          onClick={handleClick}
        />

        {/* Theme labels overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {themesRef.current.map((theme) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return null;
            const scaleX = rect.width / 600;
            const scaleY = rect.height / 400;
            return (
              <div
                key={theme.id}
                className="absolute text-center transition-all duration-300"
                style={{
                  left: theme.x * scaleX,
                  top: (theme.y + theme.radius + 8) * scaleY,
                  transform: 'translateX(-50%)',
                  opacity: hoveredTheme === theme.id || selectedTheme === theme.id ? 1 : 0.5,
                }}
              >
                <span className="text-white text-[10px] font-medium bg-black/60 px-1.5 py-0.5 rounded whitespace-nowrap">
                  {theme.name?.replace(/\s*\([^)]*\)/, '')}
                </span>
              </div>
            );
          })}
        </div>

        {/* Instruction when no theme selected */}
        {!selectedTheme && (
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Icons.Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-white/80 text-sm">Click any theme to see how it applies to your life</span>
            </div>
          </div>
        )}
      </div>

      {/* Selected theme details with life application */}
      {selectedThemeData && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 border-t border-white/10 bg-black/20">
          {/* Theme header */}
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: selectedThemeData.color }}
            >
              {(() => {
                const Icon = Icons[selectedThemeData.icon] || Icons.Star;
                return <Icon className="w-6 h-6 text-white" />;
              })()}
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-lg">{selectedThemeData.name}</h4>
              <p className="text-white/50 text-sm" dir="rtl">{selectedThemeData.nameAr}</p>
            </div>
            <button
              onClick={() => setSelectedTheme(null)}
              className="p-2 rounded-lg hover:bg-white/10"
            >
              <Icons.X className="w-4 h-4 text-white/50" />
            </button>
          </div>

          <p className="text-white/70 text-sm">{selectedThemeData.description}</p>

          {/* Life Application - How this helps */}
          {lifeApplication && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-500/25 space-y-3">
              <div className="flex items-center gap-2">
                <Icons.Lightbulb className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">How This Helps You</span>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-white/50 text-xs uppercase tracking-wide">When to apply:</span>
                  <p className="text-white/90 text-sm mt-0.5">{lifeApplication.situation}</p>
                </div>
                <div>
                  <span className="text-white/50 text-xs uppercase tracking-wide">Guidance:</span>
                  <p className="text-white/90 text-sm mt-0.5">{lifeApplication.advice}</p>
                </div>
                <div>
                  <span className="text-white/50 text-xs uppercase tracking-wide">Recommended Dua:</span>
                  <p className="text-amber-400 text-lg mt-1" dir="rtl" style={{ fontFamily: "'Scheherazade New', serif" }}>
                    {lifeApplication.dua}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Related verses */}
          <div>
            <h5 className="text-white/60 text-xs uppercase tracking-wide mb-2">Read Related Verses</h5>
            <div className="flex flex-wrap gap-2">
              {selectedThemeData.verses?.slice(0, 6).map((verse, idx) => {
                const surah = SURAHS.find(s => s.id === verse.surah);
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigateToVerse && onNavigateToVerse(verse.surah, verse.ayah)}
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm border border-white/10"
                  >
                    {surah?.name} {verse.surah}:{verse.ayah}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

// Word Cloud Component with explanations
const WordCloud = memo(function WordCloud({ onSelectWord }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const words = useMemo(() =>
    Object.entries(QURAN_WORD_FREQUENCIES)
      .map(([word, data]) => ({
        word,
        ...data,
        size: Math.log(data.count) * 7 + 14,
      }))
      .sort((a, b) => b.count - a.count),
    []
  );

  return (
    <div className="p-4 space-y-4">
      {/* Explanation */}
      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
        <div className="flex items-center gap-2 mb-1">
          <Icons.Info className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Why Word Frequency Matters</span>
        </div>
        <p className="text-white/70 text-xs">
          The most repeated words reveal what Allah emphasizes. Understanding these core concepts
          helps prioritize your Quranic study and deepens comprehension.
        </p>
      </div>

      {/* Word cloud */}
      <div className="flex flex-wrap justify-center gap-3 items-center min-h-[200px] py-4">
        {words.map((item, idx) => (
          <button
            key={item.word}
            onClick={() => {
              setSelectedWord(item);
              onSelectWord && onSelectWord(item);
            }}
            className={`transition-all duration-300 hover:scale-110 px-2 py-1 rounded ${
              selectedWord?.word === item.word ? 'ring-2 ring-white/50 bg-white/10' : ''
            }`}
            style={{
              fontSize: `${Math.min(item.size, 28)}px`,
              color: item.color,
              opacity: 0.8 + (idx < 5 ? 0.2 : 0),
            }}
          >
            {item.word}
          </button>
        ))}
      </div>

      {/* Selected word details */}
      {selectedWord && (
        <div className="p-4 rounded-xl bg-white/10 border border-white/20 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold text-xl">{selectedWord.word}</h4>
              {selectedWord.translation && (
                <p className="text-white/60 text-sm">{selectedWord.translation}</p>
              )}
            </div>
            <div
              className="w-14 h-14 rounded-xl flex flex-col items-center justify-center"
              style={{ backgroundColor: `${selectedWord.color}25` }}
            >
              <span className="text-white font-bold text-lg">{selectedWord.count}</span>
              <span className="text-white/50 text-[10px]">times</span>
            </div>
          </div>

          {selectedWord.meaning && (
            <p className="text-white/70 text-sm">{selectedWord.meaning}</p>
          )}

          <div className="p-3 rounded-lg bg-amber-500/15 border border-amber-500/25">
            <p className="text-amber-400/90 text-sm">
              <span className="font-medium">Reflection:</span> When Allah mentions something {selectedWord.count} times,
              it's an invitation to deeply understand and apply this concept in your life.
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

// Nature Parallels Component with scientific insights
const NatureParallels = memo(function NatureParallels({ onNavigateToVerse }) {
  const [selectedParallel, setSelectedParallel] = useState(null);
  const parallels = useMemo(() => getAllNatureParallels(), []);

  return (
    <div className="p-4 space-y-4">
      {/* Introduction */}
      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="flex items-center gap-2 mb-1">
          <Icons.Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 text-sm font-medium">Signs in Creation</span>
        </div>
        <p className="text-white/70 text-xs">
          The Quran describes natural phenomena with remarkable accuracy, revealed 1400 years
          before modern science discovered them. These "signs" (آيات) strengthen faith.
        </p>
      </div>

      {/* Parallels grid */}
      <div className="grid grid-cols-2 gap-3">
        {parallels.slice(0, 8).map((parallel) => {
          const Icon = Icons[parallel.icon] || Icons.Star;
          const isSelected = selectedParallel?.id === parallel.id;

          return (
            <button
              key={parallel.id}
              onClick={() => setSelectedParallel(isSelected ? null : parallel)}
              className={`p-3 rounded-xl transition-all text-left ${
                isSelected
                  ? 'bg-white/15 border-white/30 ring-1 ring-white/20'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              } border`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${parallel.color}25` }}
                >
                  <Icon className="w-4 h-4" style={{ color: parallel.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm truncate">{parallel.name}</h4>
                </div>
              </div>
              <p className="text-white/50 text-xs truncate" dir="rtl">{parallel.nameAr}</p>
            </button>
          );
        })}
      </div>

      {/* Selected parallel details */}
      {selectedParallel && (
        <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 space-y-4">
          <div className="flex items-start gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${selectedParallel.color}25` }}
            >
              {(() => {
                const Icon = Icons[selectedParallel.icon] || Icons.Star;
                return <Icon className="w-6 h-6" style={{ color: selectedParallel.color }} />;
              })()}
            </div>
            <div>
              <h3 className="text-white font-bold">{selectedParallel.name}</h3>
              <p className="text-white/70 text-sm mt-1">{selectedParallel.description}</p>
            </div>
          </div>

          {/* Verses */}
          <div className="space-y-2">
            <h4 className="text-white/50 text-xs uppercase tracking-wide">Quranic Verses</h4>
            {selectedParallel.verses.map((verse, idx) => (
              <button
                key={idx}
                onClick={() => onNavigateToVerse && onNavigateToVerse(verse.surah, verse.ayah)}
                className="w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left"
              >
                <p
                  className="text-white text-base mb-1"
                  dir="rtl"
                  style={{ fontFamily: "'Scheherazade New', serif" }}
                >
                  {verse.arabic}
                </p>
                <p className="text-white/70 text-sm">{verse.translation}</p>
                <p className="text-cyan-400 text-xs mt-1">{verse.surah}:{verse.ayah}</p>
              </button>
            ))}
          </div>

          {/* Scientific fact */}
          <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/25">
            <div className="flex items-center gap-2 mb-2">
              <Icons.CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-xs uppercase tracking-wide font-medium">Modern Science Confirms</span>
            </div>
            <p className="text-white/90 text-sm">{selectedParallel.scientificFact}</p>
          </div>

          {/* Reflection prompt */}
          <div className="p-3 rounded-lg bg-purple-500/15 border border-purple-500/25">
            <div className="flex items-center gap-2 mb-1">
              <Icons.Lightbulb className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-xs uppercase tracking-wide font-medium">Reflection</span>
            </div>
            <p className="text-white/80 text-sm">
              How could an unlettered man in 7th century Arabia describe this phenomenon
              with such precision? This is one of Allah's signs for those who reflect.
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

// Main Component
const LivingVisualization = memo(function LivingVisualization({
  isVisible,
  onClose,
  onNavigateToVerse,
}) {
  const [activeMode, setActiveMode] = useState('galaxy');

  if (!isVisible) return null;

  const activeConfig = MODES.find(m => m.id === activeMode);

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icons.Stars className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Living Quran</h2>
                <p className="text-white/50 text-xs">Visualize & apply Quranic wisdom</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-5 h-5 text-white/70" />
            </button>
          </div>

          {/* Mode Tabs */}
          <div className="flex gap-2">
            {MODES.map((mode) => {
              const Icon = Icons[mode.icon] || Icons.Star;
              const isActive = activeMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`flex-1 p-2.5 rounded-xl transition-all flex flex-col items-center gap-1 ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-500/25 to-pink-500/25 border-purple-500/40'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  } border`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'text-white/50'}`} />
                  <span className={`text-xs font-medium ${isActive ? 'text-white' : 'text-white/50'}`}>
                    {mode.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Help text for active mode */}
          {activeConfig && (
            <p className="text-white/40 text-xs text-center mt-2">
              {activeConfig.helpText}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeMode === 'galaxy' && (
            <ThemeGalaxy
              onSelectTheme={(theme) => console.log('Selected theme:', theme)}
              onNavigateToVerse={onNavigateToVerse}
            />
          )}
          {activeMode === 'wordcloud' && (
            <WordCloud
              onSelectWord={(word) => console.log('Selected word:', word)}
            />
          )}
          {activeMode === 'nature' && (
            <NatureParallels onNavigateToVerse={onNavigateToVerse} />
          )}
        </div>
      </div>
    </div>
  );
});

export default LivingVisualization;
