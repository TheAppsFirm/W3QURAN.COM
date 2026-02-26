/**
 * Audio Visualizer Component
 * Real-time waveform visualization with theme highlighting
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { QURAN_THEMES } from '../../data/ayahConnections';

// Theme colors for verse visualization
const THEME_COLORS = {
  sabr: '#06B6D4',      // Patience - Cyan
  tawakkul: '#8B5CF6',  // Trust - Purple
  shukr: '#10B981',     // Gratitude - Green
  tawbah: '#F59E0B',    // Repentance - Amber
  dhikr: '#EC4899',     // Remembrance - Pink
  ihsan: '#6366F1',     // Excellence - Indigo
  taqwa: '#14B8A6',     // God-consciousness - Teal
  rizq: '#22C55E',      // Provision - Green
  hidayah: '#EAB308',   // Guidance - Yellow
  rahma: '#F43F5E',     // Mercy - Rose
};

// Waveform Bar Component
const WaveformBar = memo(function WaveformBar({ height, color, delay }) {
  return (
    <div
      className="rounded-full transition-all"
      style={{
        width: '4px',
        height: `${Math.max(4, height)}px`,
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}60`,
        animation: `waveform 0.5s ease-in-out infinite`,
        animationDelay: `${delay}ms`,
      }}
    />
  );
});

// Frequency Bars Visualizer
const FrequencyBars = memo(function FrequencyBars({
  frequencies,
  color,
  barCount = 32,
}) {
  const bars = useMemo(() => {
    return Array.from({ length: barCount }, (_, i) => {
      const freq = frequencies[Math.floor(i * frequencies.length / barCount)] || 0;
      return Math.max(4, freq * 100);
    });
  }, [frequencies, barCount]);

  return (
    <div className="flex items-end justify-center gap-1 h-24">
      {bars.map((height, i) => (
        <WaveformBar
          key={i}
          height={height}
          color={color}
          delay={i * 20}
        />
      ))}
    </div>
  );
});

// Circular Visualizer
const CircularVisualizer = memo(function CircularVisualizer({
  frequencies,
  color,
  size = 200,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;

    ctx.clearRect(0, 0, size, size);

    // Draw circular waveform
    const barCount = 64;
    const angleStep = (Math.PI * 2) / barCount;

    frequencies.forEach((freq, i) => {
      if (i >= barCount) return;

      const angle = i * angleStep - Math.PI / 2;
      const barHeight = Math.max(5, freq * 50);

      const x1 = centerX + Math.cos(angle) * radius;
      const y1 = centerY + Math.sin(angle) * radius;
      const x2 = centerX + Math.cos(angle) * (radius + barHeight);
      const y2 = centerY + Math.sin(angle) * (radius + barHeight);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Add glow
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
    });

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = `${color}20`;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [frequencies, color, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="rounded-full"
    />
  );
});

// Theme Indicator Component
const ThemeIndicator = memo(function ThemeIndicator({ themes, currentTheme }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {themes.map((theme) => {
        const isActive = currentTheme === theme.id;
        return (
          <div
            key={theme.id}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isActive ? 'scale-110' : 'opacity-50'
            }`}
            style={{
              backgroundColor: isActive ? `${theme.color}30` : 'rgba(255,255,255,0.1)',
              color: isActive ? theme.color : 'white',
              border: `2px solid ${isActive ? theme.color : 'transparent'}`,
              boxShadow: isActive ? `0 0 20px ${theme.color}40` : 'none',
            }}
          >
            <span>{theme.nameAr}</span>
            <span className="ml-2 opacity-70">{theme.name}</span>
          </div>
        );
      })}
    </div>
  );
});

// Main Audio Visualizer Component
const AudioVisualizer = memo(function AudioVisualizer({
  isVisible,
  audioElement,
  currentVerse,
  verseThemes = [],
  isPlaying,
  onClose,
  mode = 'bars', // 'bars' | 'circular' | 'wave'
}) {
  const [frequencies, setFrequencies] = useState(new Array(64).fill(0));
  const [currentTheme, setCurrentTheme] = useState(null);
  const [visualizerColor, setVisualizerColor] = useState('#8B5CF6');

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);

  // Get theme info
  const themeList = useMemo(() => {
    return Object.entries(QURAN_THEMES).map(([id, theme]) => ({
      id,
      name: theme.name.split(' ')[0],
      nameAr: theme.nameAr,
      color: theme.color,
    }));
  }, []);

  // Update theme based on verse
  useEffect(() => {
    if (verseThemes.length > 0) {
      const theme = verseThemes[0];
      setCurrentTheme(theme);
      setVisualizerColor(THEME_COLORS[theme] || '#8B5CF6');
    } else {
      setCurrentTheme(null);
      setVisualizerColor('#8B5CF6');
    }
  }, [verseThemes]);

  // Setup audio analyzer
  useEffect(() => {
    if (!audioElement || !isVisible) return;

    try {
      // Create audio context
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const audioContext = audioContextRef.current;

      // Skip if closed, resume if suspended
      if (audioContext.state === 'closed') return;
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      // Create analyzer
      if (!analyserRef.current) {
        analyserRef.current = audioContext.createAnalyser();
        analyserRef.current.fftSize = 256;
        analyserRef.current.smoothingTimeConstant = 0.8;
      }

      // Connect source if not already connected
      if (!sourceRef.current) {
        try {
          sourceRef.current = audioContext.createMediaElementSource(audioElement);
          audioElement._sourceNode = sourceRef.current;
        } catch (e) {
          // Element already connected — reuse existing source
          sourceRef.current = audioElement._sourceNode;
        }
        if (sourceRef.current) {
          sourceRef.current.connect(analyserRef.current);
          analyserRef.current.connect(audioContext.destination);
        }
      }

      // Animation loop
      const updateFrequencies = () => {
        if (!analyserRef.current) return;

        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyserRef.current.getByteFrequencyData(dataArray);

        // Normalize to 0-1 range
        const normalized = Array.from(dataArray).map(v => v / 255);
        setFrequencies(normalized);

        animationRef.current = requestAnimationFrame(updateFrequencies);
      };

      if (isPlaying) {
        updateFrequencies();
      }

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } catch (error) {
      console.error('Audio visualizer error:', error);
    }
  }, [audioElement, isVisible, isPlaying]);

  // Cleanup AudioContext and nodes on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      try {
        if (sourceRef.current) {
          sourceRef.current.disconnect();
          sourceRef.current = null;
        }
        if (analyserRef.current) {
          analyserRef.current.disconnect();
          analyserRef.current = null;
        }
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
          audioContextRef.current.close();
          audioContextRef.current = null;
        }
      } catch {
        // Nodes may already be disconnected
      }
    };
  }, []);

  // Generate demo frequencies when not playing
  useEffect(() => {
    if (!isPlaying && isVisible) {
      const interval = setInterval(() => {
        const demo = Array.from({ length: 64 }, () => Math.random() * 0.3 + 0.1);
        setFrequencies(demo);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${visualizerColor}20 0%, #000 70%)`,
        }}
      />

      {/* Content */}
      <div
        className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-8 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: `2px solid ${visualizerColor}40`,
          boxShadow: `0 0 60px ${visualizerColor}30`,
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <Icons.X className="w-5 h-5 text-white" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Audio Visualizer</h2>
          <p className="text-white/60 text-sm">
            {isPlaying ? 'Visualizing recitation...' : 'Waiting for audio...'}
          </p>
        </div>

        {/* Visualizer */}
        <div className="flex justify-center mb-8">
          {mode === 'circular' ? (
            <CircularVisualizer
              frequencies={frequencies}
              color={visualizerColor}
              size={240}
            />
          ) : (
            <FrequencyBars
              frequencies={frequencies}
              color={visualizerColor}
              barCount={32}
            />
          )}
        </div>

        {/* Current Verse Info */}
        {currentVerse && (
          <div className="text-center mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm mb-2">Now Playing</p>
            <p className="text-white font-medium">
              Surah {currentVerse.surah}, Verse {currentVerse.ayah}
            </p>
          </div>
        )}

        {/* Theme Indicators */}
        <div className="space-y-4">
          <p className="text-white/60 text-sm text-center">Active Themes</p>
          <ThemeIndicator themes={themeList} currentTheme={currentTheme} />
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => {}}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'bars' ? 'bg-white/20 text-white' : 'bg-white/5 text-white/60'
            }`}
          >
            Bars
          </button>
          <button
            onClick={() => {}}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'circular' ? 'bg-white/20 text-white' : 'bg-white/5 text-white/60'
            }`}
          >
            Circular
          </button>
        </div>
      </div>

      {/* CSS for waveform animation */}
      <style>{`
        @keyframes waveform {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
      `}</style>
    </div>
  );
});

// Mini Visualizer (for embedding in reader)
export const MiniVisualizer = memo(function MiniVisualizer({
  isPlaying,
  color = '#8B5CF6',
  barCount = 5,
}) {
  const [heights, setHeights] = useState(new Array(barCount).fill(4));

  useEffect(() => {
    if (!isPlaying) {
      setHeights(new Array(barCount).fill(4));
      return;
    }

    const interval = setInterval(() => {
      setHeights(Array.from({ length: barCount }, () => Math.random() * 20 + 4));
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, barCount]);

  return (
    <div className="flex items-end justify-center gap-0.5 h-6">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full transition-all duration-100"
          style={{
            height: `${h}px`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
});

export default AudioVisualizer;
