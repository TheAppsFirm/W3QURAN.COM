/**
 * Verse Art Generator - Create Beautiful Shareable Verse Images
 * Features:
 * - Multiple calligraphy styles
 * - Stunning backgrounds (geometric, nature, gradients)
 * - Export for Instagram, WhatsApp, Twitter, etc.
 * - Translation overlay
 */

import { useState, useRef, useCallback, memo, useEffect } from 'react';
import { Icons } from './Icons';

// Calligraphy/Font Styles
const FONT_STYLES = [
  { id: 'scheherazade', name: 'Scheherazade', nameAr: 'شهرزاد', family: "'Scheherazade New', serif", description: 'Classical Naskh' },
  { id: 'amiri', name: 'Amiri', nameAr: 'أميري', family: "'Amiri', serif", description: 'Elegant Traditional' },
  { id: 'lateef', name: 'Lateef', nameAr: 'لطیف', family: "'Lateef', serif", description: 'Nastaliq Style' },
  { id: 'noto-naskh', name: 'Noto Naskh', nameAr: 'نوتو نسخ', family: "'Noto Naskh Arabic', serif", description: 'Modern Clean' },
  { id: 'rakkas', name: 'Rakkas', nameAr: 'رقاص', family: "'Rakkas', cursive", description: 'Bold Decorative' },
];

// Background Templates
const BACKGROUNDS = [
  // Gradients
  { id: 'gradient-purple', name: 'Royal Purple', type: 'gradient', value: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', textColor: '#ffffff' },
  { id: 'gradient-emerald', name: 'Emerald Night', type: 'gradient', value: 'linear-gradient(135deg, #0d2818 0%, #1a4d2e 50%, #2d6a4f 100%)', textColor: '#ffffff' },
  { id: 'gradient-gold', name: 'Golden Sunset', type: 'gradient', value: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3d3020 100%)', textColor: '#d4af37' },
  { id: 'gradient-ocean', name: 'Deep Ocean', type: 'gradient', value: 'linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)', textColor: '#ffffff' },
  { id: 'gradient-rose', name: 'Rose Garden', type: 'gradient', value: 'linear-gradient(135deg, #2d1f2f 0%, #4a2040 50%, #6b2d5b 100%)', textColor: '#ffd1dc' },

  // Solid Colors
  { id: 'solid-black', name: 'Classic Black', type: 'solid', value: '#0a0a0a', textColor: '#ffffff' },
  { id: 'solid-cream', name: 'Parchment', type: 'solid', value: '#f5f0e6', textColor: '#2c1810' },
  { id: 'solid-navy', name: 'Navy Blue', type: 'solid', value: '#1a2744', textColor: '#ffffff' },

  // Patterns (CSS patterns)
  { id: 'pattern-geometric', name: 'Islamic Geometric', type: 'pattern', value: 'geometric', textColor: '#ffffff', bgColor: '#1a1a2e' },
  { id: 'pattern-stars', name: 'Starry Night', type: 'pattern', value: 'stars', textColor: '#ffd700', bgColor: '#0a0a1a' },
  { id: 'pattern-arabesque', name: 'Arabesque', type: 'pattern', value: 'arabesque', textColor: '#ffffff', bgColor: '#1a3a2a' },
];

// Export Sizes
const EXPORT_SIZES = [
  { id: 'instagram-post', name: 'Instagram Post', width: 1080, height: 1080, icon: 'Instagram' },
  { id: 'instagram-story', name: 'Instagram Story', width: 1080, height: 1920, icon: 'Instagram' },
  { id: 'whatsapp', name: 'WhatsApp Status', width: 1080, height: 1920, icon: 'MessageCircle' },
  { id: 'twitter', name: 'Twitter/X', width: 1200, height: 675, icon: 'Twitter' },
  { id: 'facebook', name: 'Facebook', width: 1200, height: 630, icon: 'Facebook' },
  { id: 'desktop', name: 'Desktop Wallpaper', width: 1920, height: 1080, icon: 'Monitor' },
  { id: 'mobile', name: 'Mobile Wallpaper', width: 1080, height: 2340, icon: 'Smartphone' },
];

// Frame Styles
const FRAME_STYLES = [
  { id: 'none', name: 'No Frame' },
  { id: 'simple', name: 'Simple Border' },
  { id: 'ornate', name: 'Ornate Islamic' },
  { id: 'modern', name: 'Modern Minimal' },
  { id: 'golden', name: 'Golden Frame' },
];

// Generate Islamic geometric pattern SVG
const generateGeometricPattern = (size = 100) => {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="islamicPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M25,0 L50,25 L25,50 L0,25 Z" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
          <circle cx="25" cy="25" r="10" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
          <path d="M25,15 L35,25 L25,35 L15,25 Z" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamicPattern)"/>
    </svg>
  `;
};

// Main Component
const VerseArtGenerator = memo(function VerseArtGenerator({
  isVisible,
  onClose,
  verseArabic,
  verseTranslation,
  surahName,
  ayahNumber,
  surahId
}) {
  const canvasRef = useRef(null);
  const previewRef = useRef(null);

  const [selectedFont, setSelectedFont] = useState(FONT_STYLES[0]);
  const [selectedBg, setSelectedBg] = useState(BACKGROUNDS[0]);
  const [selectedSize, setSelectedSize] = useState(EXPORT_SIZES[0]);
  const [selectedFrame, setSelectedFrame] = useState(FRAME_STYLES[0]);
  const [showTranslation, setShowTranslation] = useState(true);
  const [fontSize, setFontSize] = useState(48);
  const [translationFontSize, setTranslationFontSize] = useState(18);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('background'); // background, font, size, frame

  // Generate the art on canvas
  const generateArt = useCallback(async (forExport = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    const width = forExport ? selectedSize.width : 400;
    const height = forExport ? selectedSize.height : 400 * (selectedSize.height / selectedSize.width);
    const scale = forExport ? 1 : 400 / selectedSize.width;

    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background
    if (selectedBg.type === 'gradient') {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      // Parse gradient colors from CSS
      const colors = selectedBg.value.match(/rgb[a]?\([^)]+\)|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/g) || ['#1a1a2e', '#0f3460'];
      colors.forEach((color, i) => {
        gradient.addColorStop(i / (colors.length - 1 || 1), color);
      });
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    } else if (selectedBg.type === 'solid') {
      ctx.fillStyle = selectedBg.value;
      ctx.fillRect(0, 0, width, height);
    } else if (selectedBg.type === 'pattern') {
      ctx.fillStyle = selectedBg.bgColor || '#1a1a2e';
      ctx.fillRect(0, 0, width, height);
      // Draw geometric pattern overlay
      ctx.globalAlpha = 0.15;
      // Simple geometric pattern
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 1;
      const patternSize = 60 * (forExport ? 1 : scale);
      for (let x = 0; x < width; x += patternSize) {
        for (let y = 0; y < height; y += patternSize) {
          ctx.beginPath();
          ctx.moveTo(x + patternSize/2, y);
          ctx.lineTo(x + patternSize, y + patternSize/2);
          ctx.lineTo(x + patternSize/2, y + patternSize);
          ctx.lineTo(x, y + patternSize/2);
          ctx.closePath();
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(x + patternSize/2, y + patternSize/2, patternSize/4, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    }

    // Draw frame if selected
    if (selectedFrame.id !== 'none') {
      const frameWidth = forExport ? 40 : 10;
      ctx.strokeStyle = selectedBg.textColor === '#ffffff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
      ctx.lineWidth = frameWidth / 2;

      if (selectedFrame.id === 'golden') {
        ctx.strokeStyle = '#d4af37';
      }

      if (selectedFrame.id === 'ornate') {
        // Double frame for ornate
        ctx.strokeRect(frameWidth, frameWidth, width - frameWidth * 2, height - frameWidth * 2);
        ctx.strokeRect(frameWidth * 2, frameWidth * 2, width - frameWidth * 4, height - frameWidth * 4);
        // Corner decorations
        const cornerSize = frameWidth * 3;
        [[0, 0], [width, 0], [0, height], [width, height]].forEach(([cx, cy]) => {
          ctx.beginPath();
          ctx.arc(cx, cy, cornerSize, 0, Math.PI * 2);
          ctx.stroke();
        });
      } else {
        ctx.strokeRect(frameWidth, frameWidth, width - frameWidth * 2, height - frameWidth * 2);
      }
    }

    // Text settings
    const scaledArabicSize = (forExport ? fontSize : fontSize * scale);
    const scaledTranslationSize = (forExport ? translationFontSize : translationFontSize * scale);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw Arabic verse
    ctx.font = `${scaledArabicSize}px ${selectedFont.family.replace(/'/g, '')}`;
    ctx.fillStyle = selectedBg.textColor;

    // Word wrap for Arabic
    const maxWidth = width * 0.85;
    const arabicLines = wrapText(ctx, verseArabic || 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', maxWidth);
    const lineHeight = scaledArabicSize * 1.8;

    // Calculate vertical positions
    const totalArabicHeight = arabicLines.length * lineHeight;
    const totalTranslationHeight = showTranslation ? scaledTranslationSize * 4 : 0;
    const referenceHeight = scaledTranslationSize * 2;
    const totalHeight = totalArabicHeight + totalTranslationHeight + referenceHeight + (forExport ? 80 : 20);

    let startY = (height - totalHeight) / 2 + lineHeight / 2;

    // Draw each line of Arabic
    arabicLines.forEach((line, i) => {
      // Add subtle text shadow
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = forExport ? 10 : 3;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = forExport ? 4 : 1;

      ctx.fillText(line, width / 2, startY + (i * lineHeight));
    });

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // Draw translation if enabled
    if (showTranslation && verseTranslation) {
      const translationY = startY + totalArabicHeight + (forExport ? 50 : 15);
      ctx.font = `italic ${scaledTranslationSize}px 'Georgia', serif`;
      ctx.fillStyle = selectedBg.textColor;
      ctx.globalAlpha = 0.85;

      const translationLines = wrapText(ctx, `"${verseTranslation}"`, maxWidth);
      translationLines.slice(0, 3).forEach((line, i) => {
        ctx.fillText(line, width / 2, translationY + (i * scaledTranslationSize * 1.5));
      });

      ctx.globalAlpha = 1;
    }

    // Draw reference (Surah:Ayah)
    const refY = height - (forExport ? 60 : 20);
    ctx.font = `${scaledTranslationSize * 0.9}px 'Georgia', serif`;
    ctx.fillStyle = selectedBg.textColor;
    ctx.globalAlpha = 0.7;
    ctx.fillText(`— ${surahName || 'Al-Fatiha'} ${surahId || 1}:${ayahNumber || 1} —`, width / 2, refY);
    ctx.globalAlpha = 1;

    // Draw w3Quran watermark
    ctx.font = `${forExport ? 16 : 8}px Arial`;
    ctx.fillStyle = selectedBg.textColor;
    ctx.globalAlpha = 0.4;
    ctx.fillText('w3Quran.com', width - (forExport ? 70 : 30), height - (forExport ? 25 : 8));
    ctx.globalAlpha = 1;

    return canvas;
  }, [selectedFont, selectedBg, selectedSize, selectedFrame, showTranslation, fontSize, translationFontSize, verseArabic, verseTranslation, surahName, ayahNumber, surahId]);

  // Word wrap helper
  const wrapText = (ctx, text, maxWidth) => {
    if (!text) return [''];
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0] || '';

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + ' ' + words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  // Update preview when settings change
  useEffect(() => {
    if (isVisible) {
      generateArt(false);
    }
  }, [isVisible, generateArt]);

  // Export image
  const handleExport = useCallback(async () => {
    setIsGenerating(true);
    try {
      await generateArt(true);
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Convert to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `w3quran-${surahName || 'verse'}-${ayahNumber || '1'}-${selectedSize.id}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsGenerating(false);
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Export failed:', error);
      setIsGenerating(false);
    }
  }, [generateArt, surahName, ayahNumber, selectedSize.id]);

  // Copy to clipboard
  const handleCopy = useCallback(async () => {
    setIsGenerating(true);
    try {
      await generateArt(true);
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.toBlob(async (blob) => {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          alert('Image copied to clipboard!');
        } catch {
          // Fallback - download instead
          handleExport();
        }
        setIsGenerating(false);
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Copy failed:', error);
      setIsGenerating(false);
    }
  }, [generateArt, handleExport]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Preview Panel */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center bg-black/30 min-h-[300px]">
          <h3 className="text-white/60 text-sm mb-4 flex items-center gap-2">
            <Icons.Image className="w-4 h-4" />
            Preview
          </h3>

          <div
            ref={previewRef}
            className="relative rounded-xl overflow-hidden shadow-2xl"
            style={{
              width: '100%',
              maxWidth: 400,
              aspectRatio: `${selectedSize.width} / ${selectedSize.height}`,
              maxHeight: '50vh',
            }}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
              style={{ background: selectedBg.type === 'solid' ? selectedBg.value : undefined }}
            />
          </div>

          {/* Export Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleExport}
              disabled={isGenerating}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-medium hover:scale-105 transition-all disabled:opacity-50"
            >
              <Icons.Download className="w-5 h-5" />
              {isGenerating ? 'Generating...' : 'Download'}
            </button>

            <button
              onClick={handleCopy}
              disabled={isGenerating}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-all disabled:opacity-50"
            >
              <Icons.Copy className="w-5 h-5" />
              Copy
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="w-full md:w-80 bg-black/40 p-4 overflow-y-auto max-h-[50vh] md:max-h-none">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
          >
            <Icons.X className="w-5 h-5" />
          </button>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Icons.Palette className="w-5 h-5 text-purple-400" />
            Customize
          </h2>

          {/* Tabs */}
          <div className="flex gap-1 mb-4 bg-white/5 rounded-xl p-1">
            {[
              { id: 'background', icon: Icons.Image, label: 'BG' },
              { id: 'font', icon: Icons.Type, label: 'Font' },
              { id: 'size', icon: Icons.Maximize, label: 'Size' },
              { id: 'frame', icon: Icons.Square, label: 'Frame' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Background Options */}
          {activeTab === 'background' && (
            <div className="space-y-3">
              <label className="text-white/60 text-xs uppercase tracking-wide">Background Style</label>
              <div className="grid grid-cols-3 gap-2">
                {BACKGROUNDS.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBg(bg)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
                      selectedBg.id === bg.id ? 'border-purple-500 ring-2 ring-purple-500/50' : 'border-white/10'
                    }`}
                    style={{
                      background: bg.type === 'pattern' ? bg.bgColor : bg.value,
                    }}
                    title={bg.name}
                  >
                    {bg.type === 'pattern' && (
                      <div className="w-full h-full opacity-30" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)`
                      }} />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-white/40 text-xs">{selectedBg.name}</p>
            </div>
          )}

          {/* Font Options */}
          {activeTab === 'font' && (
            <div className="space-y-4">
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide">Calligraphy Style</label>
                <div className="space-y-2 mt-2">
                  {FONT_STYLES.map((font) => (
                    <button
                      key={font.id}
                      onClick={() => setSelectedFont(font)}
                      className={`w-full p-3 rounded-xl text-left transition-all ${
                        selectedFont.id === font.id
                          ? 'bg-purple-500/30 border border-purple-500'
                          : 'bg-white/5 border border-transparent hover:bg-white/10'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{font.name}</span>
                        <span className="text-xl" style={{ fontFamily: font.family }} dir="rtl">{font.nameAr}</span>
                      </div>
                      <p className="text-white/40 text-xs mt-1">{font.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide">Arabic Font Size: {fontSize}px</label>
                <input
                  type="range"
                  min="24"
                  max="72"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full mt-2 accent-purple-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-white/60 text-sm">Show Translation</label>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className={`w-12 h-6 rounded-full transition-all ${showTranslation ? 'bg-purple-500' : 'bg-white/20'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all transform ${showTranslation ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>

              {showTranslation && (
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wide">Translation Size: {translationFontSize}px</label>
                  <input
                    type="range"
                    min="12"
                    max="28"
                    value={translationFontSize}
                    onChange={(e) => setTranslationFontSize(Number(e.target.value))}
                    className="w-full mt-2 accent-purple-500"
                  />
                </div>
              )}
            </div>
          )}

          {/* Size Options */}
          {activeTab === 'size' && (
            <div className="space-y-3">
              <label className="text-white/60 text-xs uppercase tracking-wide">Export Size</label>
              <div className="space-y-2">
                {EXPORT_SIZES.map((size) => {
                  const Icon = Icons[size.icon] || Icons.Image;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`w-full p-3 rounded-xl text-left flex items-center gap-3 transition-all ${
                        selectedSize.id === size.id
                          ? 'bg-purple-500/30 border border-purple-500'
                          : 'bg-white/5 border border-transparent hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-white/60" />
                      <div className="flex-1">
                        <span className="text-white font-medium">{size.name}</span>
                        <p className="text-white/40 text-xs">{size.width} × {size.height}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Frame Options */}
          {activeTab === 'frame' && (
            <div className="space-y-3">
              <label className="text-white/60 text-xs uppercase tracking-wide">Frame Style</label>
              <div className="grid grid-cols-2 gap-2">
                {FRAME_STYLES.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame)}
                    className={`p-3 rounded-xl text-center transition-all ${
                      selectedFrame.id === frame.id
                        ? 'bg-purple-500/30 border border-purple-500'
                        : 'bg-white/5 border border-transparent hover:bg-white/10'
                    }`}
                  >
                    <span className="text-white text-sm">{frame.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default VerseArtGenerator;
