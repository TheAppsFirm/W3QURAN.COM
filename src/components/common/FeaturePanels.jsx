/**
 * FeaturePanels Component
 * Floating bubble panels for each feature
 * - Tafseer: Commentary and explanation
 * - Memorize: Hifz mode controls
 * - Bookmarks: Save verses with notes
 * - YouTube: Curated video lectures
 * - Share: Generate beautiful shareable cards
 */

import { useState, useEffect, useCallback, memo, useRef } from 'react';
import { Icons } from './Icons';

// ============================================
// TAFSEER PANEL
// ============================================
const TafseerPanel = memo(function TafseerPanel({
  surahId,
  ayahNumber,
  palette,
  onClose
}) {
  const [tafseer, setTafseer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTafseer, setSelectedTafseer] = useState('en.ibn-kathir');

  const TAFSEER_SOURCES = {
    'en.ibn-kathir': { name: 'Ibn Kathir', lang: 'English' },
    'en.jalalayn': { name: 'Jalalayn', lang: 'English' },
    'ar.muyassar': { name: 'Al-Muyassar', lang: 'Arabic' },
  };

  useEffect(() => {
    if (!surahId || !ayahNumber) return;

    setLoading(true);
    // Using Al Quran Cloud API for tafseer
    fetch(`https://api.alquran.cloud/v1/ayah/${surahId}:${ayahNumber}/${selectedTafseer}`)
      .then(res => res.json())
      .then(data => {
        if (data.code === 200) {
          setTafseer(data.data.text);
        }
        setLoading(false);
      })
      .catch(() => {
        setTafseer('Unable to load tafseer. Please try again.');
        setLoading(false);
      });
  }, [surahId, ayahNumber, selectedTafseer]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: `${palette?.colors?.[0]}40` }}
          >
            <Icons.BookOpen className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Tafseer</h3>
            <p className="text-white/60 text-[10px]">Verse {surahId}:{ayahNumber}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <Icons.X className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Tafseer selector */}
      <div className="flex gap-1 mb-3 flex-wrap">
        {Object.entries(TAFSEER_SOURCES).map(([id, source]) => (
          <button
            key={id}
            onClick={() => setSelectedTafseer(id)}
            className={`px-2 py-1 rounded-full text-[10px] transition-all ${
              selectedTafseer === id
                ? 'bg-white/40 text-white font-medium'
                : 'bg-white/15 text-white/70 hover:bg-white/25'
            }`}
          >
            {source.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Icons.Loader className="w-6 h-6 animate-spin text-white/50" />
          </div>
        ) : (
          <p className="text-white/90 text-sm leading-relaxed">
            {tafseer || 'Select a verse to view its tafseer.'}
          </p>
        )}
      </div>
    </div>
  );
});

// ============================================
// MEMORIZATION PANEL
// ============================================
const MemorizePanel = memo(function MemorizePanel({
  onModeChange,
  currentMode,
  palette,
  onClose
}) {
  const [hideLevel, setHideLevel] = useState(0); // 0: show all, 1: hide some, 2: hide most, 3: hide all

  const HIDE_LEVELS = [
    { level: 0, name: 'Show All', icon: 'Eye', description: 'Full text visible' },
    { level: 1, name: 'Hide 25%', icon: 'EyeOff', description: 'Some words hidden' },
    { level: 2, name: 'Hide 50%', icon: 'EyeOff', description: 'Half words hidden' },
    { level: 3, name: 'Hide 75%', icon: 'EyeOff', description: 'Most words hidden' },
    { level: 4, name: 'Hide All', icon: 'Lock', description: 'Test yourself' },
  ];

  const handleLevelChange = (level) => {
    setHideLevel(level);
    onModeChange?.({ hideLevel: level });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: '#F59E0B40' }}
          >
            <Icons.Target className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Memorization Mode</h3>
            <p className="text-white/60 text-[10px]">Hifz Practice</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <Icons.X className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Hide level selector */}
      <div className="space-y-2 mb-4">
        {HIDE_LEVELS.map((item) => {
          const Icon = Icons[item.icon] || Icons.Circle;
          return (
            <button
              key={item.level}
              onClick={() => handleLevelChange(item.level)}
              className={`w-full p-3 rounded-2xl flex items-center gap-3 transition-all ${
                hideLevel === item.level
                  ? 'bg-amber-500/40 ring-2 ring-amber-400/50'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                hideLevel === item.level ? 'bg-amber-500' : 'bg-white/20'
              }`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-medium">{item.name}</p>
                <p className="text-white/60 text-[10px]">{item.description}</p>
              </div>
              {hideLevel === item.level && (
                <Icons.Check className="w-4 h-4 text-amber-300 ml-auto" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tips */}
      <div className="mt-auto p-3 bg-white/10 rounded-2xl">
        <p className="text-[10px] text-white/70 flex items-start gap-2">
          <span className="text-amber-400">💡</span>
          <span>Gradually increase the hide level as you memorize. Use audio to help with pronunciation.</span>
        </p>
      </div>
    </div>
  );
});

// ============================================
// BOOKMARKS PANEL
// ============================================
const BookmarksPanel = memo(function BookmarksPanel({
  surahId,
  surahName,
  ayahNumber,
  verseText,
  palette,
  onClose
}) {
  const [bookmarks, setBookmarks] = useState([]);
  const [note, setNote] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('quran_bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  // Save bookmark
  const saveBookmark = () => {
    const newBookmark = {
      id: Date.now(),
      surahId,
      surahName,
      ayahNumber,
      note,
      timestamp: new Date().toISOString(),
      preview: verseText?.slice(0, 50) + '...',
    };

    const updated = [...bookmarks, newBookmark];
    setBookmarks(updated);
    localStorage.setItem('quran_bookmarks', JSON.stringify(updated));
    setNote('');
    setShowAddForm(false);
  };

  // Delete bookmark
  const deleteBookmark = (id) => {
    const updated = bookmarks.filter(b => b.id !== id);
    setBookmarks(updated);
    localStorage.setItem('quran_bookmarks', JSON.stringify(updated));
  };

  const isCurrentVerseBookmarked = bookmarks.some(
    b => b.surahId === surahId && b.ayahNumber === ayahNumber
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: '#EC489940' }}
          >
            <Icons.Bookmark className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Bookmarks</h3>
            <p className="text-white/60 text-[10px]">{bookmarks.length} saved</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <Icons.X className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Add bookmark button */}
      {!showAddForm && !isCurrentVerseBookmarked && ayahNumber && (
        <button
          onClick={() => setShowAddForm(true)}
          className="w-full p-3 mb-3 rounded-2xl bg-pink-500/30 hover:bg-pink-500/40 transition-all flex items-center justify-center gap-2 text-white"
        >
          <Icons.Plus className="w-4 h-4" />
          <span className="text-sm">Bookmark {surahId}:{ayahNumber}</span>
        </button>
      )}

      {/* Add form */}
      {showAddForm && (
        <div className="p-3 mb-3 rounded-2xl bg-white/10" style={{ animation: 'slideDown 0.2s ease-out' }}>
          <p className="text-white/70 text-xs mb-2">Add note (optional):</p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Your thoughts..."
            className="w-full p-2 rounded-xl bg-white/10 text-white text-sm placeholder:text-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400/50"
            rows={2}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={saveBookmark}
              className="flex-1 py-2 rounded-xl bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition-all"
            >
              Save
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 rounded-xl bg-white/20 text-white text-sm hover:bg-white/30 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Bookmarks list */}
      <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
        {bookmarks.length === 0 ? (
          <div className="text-center py-8 text-white/50">
            <Icons.Bookmark className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No bookmarks yet</p>
            <p className="text-xs">Save verses while reading</p>
          </div>
        ) : (
          bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">
                    {bookmark.surahName} {bookmark.surahId}:{bookmark.ayahNumber}
                  </p>
                  {bookmark.note && (
                    <p className="text-white/70 text-xs mt-1 italic">"{bookmark.note}"</p>
                  )}
                  <p className="text-white/50 text-[10px] mt-1">
                    {new Date(bookmark.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => deleteBookmark(bookmark.id)}
                  className="opacity-0 group-hover:opacity-100 w-6 h-6 rounded-full bg-red-500/30 flex items-center justify-center hover:bg-red-500/50 transition-all"
                >
                  <Icons.X className="w-3 h-3 text-white" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
});

// ============================================
// YOUTUBE PANEL
// ============================================
const YouTubePanel = memo(function YouTubePanel({
  surahId,
  surahName,
  palette,
  onClose
}) {
  // Curated YouTube videos for surahs (sample data)
  const SURAH_VIDEOS = {
    1: [
      { id: 'yOzA0gqUMrY', title: 'Surah Al-Fatiha - Nouman Ali Khan', channel: 'Bayyinah Institute' },
      { id: 'TvJjKTdWNmo', title: 'Tafsir Al-Fatiha - Mufti Menk', channel: 'Mufti Menk' },
      { id: 'E9HLakY0K3w', title: 'Beauty of Surah Fatiha', channel: 'Islamic Guidance' },
    ],
    112: [
      { id: 'IKhB1bUiSqc', title: 'Surah Al-Ikhlas Explanation', channel: 'Bayyinah Institute' },
      { id: '8MDwF9QVAUY', title: 'Tafsir Surah Ikhlas - Dr. Yasir Qadhi', channel: 'Yasir Qadhi' },
    ],
    36: [
      { id: 'iohsJqfm_cs', title: 'Surah Yasin - Full Tafsir', channel: 'Bayyinah Institute' },
    ],
    // Default for surahs without specific videos
    default: [
      { id: '0FVcPqh8Z_Q', title: 'How to Study the Quran', channel: 'Bayyinah Institute' },
      { id: 'HvU7EtwJ3BM', title: 'Quran Recitation Tips', channel: 'Quran Weekly' },
    ],
  };

  const videos = SURAH_VIDEOS[surahId] || SURAH_VIDEOS.default;

  const openVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500/40"
          >
            <Icons.Video className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Video Lectures</h3>
            <p className="text-white/60 text-[10px]">{surahName || 'Recommended'}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <Icons.X className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Video list */}
      <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => openVideo(video.id)}
            className="w-full p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-left group"
            style={{ animation: `slideIn 0.3s ease-out ${index * 0.1}s both` }}
          >
            {/* Thumbnail placeholder */}
            <div className="relative w-full aspect-video rounded-xl bg-gradient-to-br from-red-500/30 to-red-600/30 mb-2 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20" />
              <div className="w-12 h-12 rounded-full bg-red-500/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icons.Play className="w-5 h-5 text-white ml-1" />
              </div>
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
            <p className="text-white/50 text-[10px] mt-1 flex items-center gap-1">
              <Icons.Video className="w-3 h-3" />
              {video.channel}
            </p>
          </button>
        ))}
      </div>

      {/* Search YouTube link */}
      <button
        onClick={() => window.open(`https://www.youtube.com/results?search_query=surah+${surahName}+tafsir`, '_blank')}
        className="mt-3 w-full p-3 rounded-2xl bg-red-500/30 hover:bg-red-500/40 transition-all flex items-center justify-center gap-2 text-white text-sm"
      >
        <Icons.Search className="w-4 h-4" />
        Search more on YouTube
      </button>
    </div>
  );
});

// ============================================
// SHARE PANEL
// ============================================
const SharePanel = memo(function SharePanel({
  surahId,
  surahName,
  surahArabic,
  ayahNumber,
  verseArabic,
  verseTranslation,
  palette,
  onClose
}) {
  const canvasRef = useRef(null);
  const [generating, setGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('gradient');

  const STYLES = [
    { id: 'gradient', name: 'Gradient', colors: palette?.colors || ['#6366f1', '#8b5cf6'] },
    { id: 'dark', name: 'Dark', colors: ['#1a1a2e', '#16213e'] },
    { id: 'light', name: 'Light', colors: ['#f8fafc', '#e2e8f0'] },
    { id: 'gold', name: 'Gold', colors: ['#92702e', '#c9a227'] },
  ];

  const generateImage = useCallback(async () => {
    setGenerating(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const style = STYLES.find(s => s.id === selectedStyle);

    // Canvas size (Instagram friendly)
    canvas.width = 1080;
    canvas.height = 1080;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, style.colors[0]);
    gradient.addColorStop(1, style.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative pattern
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 100 + 50,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Text color based on style
    const textColor = selectedStyle === 'light' ? '#1a1a2e' : '#ffffff';
    const subtleColor = selectedStyle === 'light' ? '#64748b' : 'rgba(255,255,255,0.7)';

    // Surah name
    ctx.fillStyle = subtleColor;
    ctx.font = '32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${surahName} (${surahId}:${ayahNumber})`, canvas.width / 2, 120);

    // Arabic verse
    ctx.fillStyle = textColor;
    ctx.font = '64px "Scheherazade New", serif';
    ctx.textAlign = 'center';

    // Word wrap Arabic
    const arabicLines = wrapText(ctx, verseArabic || '', canvas.width - 160, 64);
    let y = 300;
    arabicLines.forEach(line => {
      ctx.fillText(line, canvas.width / 2, y);
      y += 90;
    });

    // Divider
    ctx.strokeStyle = subtleColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(440, y + 30);
    ctx.lineTo(640, y + 30);
    ctx.stroke();

    // Translation
    ctx.fillStyle = subtleColor;
    ctx.font = '28px Arial';
    const transLines = wrapText(ctx, verseTranslation || '', canvas.width - 200, 28);
    y += 80;
    transLines.forEach(line => {
      ctx.fillText(line, canvas.width / 2, y);
      y += 40;
    });

    // App branding
    ctx.fillStyle = subtleColor;
    ctx.font = '24px Arial';
    ctx.fillText('w3Quran', canvas.width / 2, canvas.height - 60);

    // Download
    const link = document.createElement('a');
    link.download = `quran-${surahId}-${ayahNumber}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    setGenerating(false);
  }, [selectedStyle, surahId, surahName, ayahNumber, verseArabic, verseTranslation, palette]);

  // Helper function for text wrapping
  const wrapText = (ctx, text, maxWidth, fontSize) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    if (currentLine) lines.push(currentLine);
    return lines.slice(0, 4); // Max 4 lines
  };

  const shareToSocial = (platform) => {
    const text = `${verseArabic}\n\n"${verseTranslation}"\n\n- ${surahName} ${surahId}:${ayahNumber}`;
    const url = encodeURIComponent(window.location.href);
    const encodedText = encodeURIComponent(text);

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      whatsapp: `https://wa.me/?text=${encodedText}`,
      telegram: `https://t.me/share/url?url=${url}&text=${encodedText}`,
    };

    window.open(urls[platform], '_blank');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/40">
            <Icons.Share className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Share Verse</h3>
            <p className="text-white/60 text-[10px]">{surahId}:{ayahNumber}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <Icons.X className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Style selector */}
      <p className="text-white/70 text-xs mb-2">Choose style:</p>
      <div className="flex gap-2 mb-4">
        {STYLES.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className={`flex-1 p-2 rounded-xl transition-all ${
              selectedStyle === style.id ? 'ring-2 ring-white/50 scale-105' : ''
            }`}
            style={{
              background: `linear-gradient(135deg, ${style.colors[0]}, ${style.colors[1]})`,
            }}
          >
            <span className={`text-[10px] font-medium ${style.id === 'light' ? 'text-gray-800' : 'text-white'}`}>
              {style.name}
            </span>
          </button>
        ))}
      </div>

      {/* Preview */}
      <div
        className="flex-1 rounded-2xl p-4 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${STYLES.find(s => s.id === selectedStyle)?.colors[0]}, ${STYLES.find(s => s.id === selectedStyle)?.colors[1]})`,
        }}
      >
        <p className={`text-xs mb-2 ${selectedStyle === 'light' ? 'text-gray-600' : 'text-white/60'}`}>
          {surahName} {surahId}:{ayahNumber}
        </p>
        <p
          className={`text-lg leading-relaxed mb-3 ${selectedStyle === 'light' ? 'text-gray-800' : 'text-white'}`}
          style={{ fontFamily: "'Scheherazade New', serif" }}
          dir="rtl"
        >
          {verseArabic?.slice(0, 100)}{verseArabic?.length > 100 ? '...' : ''}
        </p>
        <p className={`text-[10px] ${selectedStyle === 'light' ? 'text-gray-600' : 'text-white/70'}`}>
          {verseTranslation?.slice(0, 80)}{verseTranslation?.length > 80 ? '...' : ''}
        </p>
      </div>

      {/* Hidden canvas for generation */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Download button */}
      <button
        onClick={generateImage}
        disabled={generating || !verseArabic}
        className="mt-3 w-full p-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 transition-all flex items-center justify-center gap-2 text-white font-medium"
      >
        {generating ? (
          <Icons.Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Icons.Download className="w-4 h-4" />
        )}
        Download Image
      </button>

      {/* Social share */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => shareToSocial('whatsapp')}
          className="flex-1 p-2 rounded-xl bg-green-500/30 hover:bg-green-500/50 transition-all flex items-center justify-center"
        >
          <span className="text-xs text-white">WhatsApp</span>
        </button>
        <button
          onClick={() => shareToSocial('twitter')}
          className="flex-1 p-2 rounded-xl bg-blue-500/30 hover:bg-blue-500/50 transition-all flex items-center justify-center"
        >
          <span className="text-xs text-white">Twitter</span>
        </button>
        <button
          onClick={() => shareToSocial('telegram')}
          className="flex-1 p-2 rounded-xl bg-sky-500/30 hover:bg-sky-500/50 transition-all flex items-center justify-center"
        >
          <span className="text-xs text-white">Telegram</span>
        </button>
      </div>
    </div>
  );
});

// ============================================
// MAIN FEATURE PANEL WRAPPER
// ============================================
const FeaturePanel = memo(function FeaturePanel({
  feature,
  surahId,
  surahName,
  surahArabic,
  ayahNumber,
  verseArabic,
  verseTranslation,
  palette,
  onClose,
  onMemorizeModeChange
}) {
  if (!feature) return null;

  const featureColors = {
    tafseer: '#8B5CF6',
    memorize: '#F59E0B',
    bookmark: '#EC4899',
    youtube: '#EF4444',
    share: '#10B981',
  };

  return (
    <div
      className="fixed z-50 top-1/2 -translate-y-1/2 right-4 sm:right-8 w-[320px] max-h-[70vh]"
      style={{ animation: 'bubblePanelIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      {/* Thought bubble connection */}
      <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: 8 - i * 1.5,
              height: 8 - i * 1.5,
              background: `${featureColors[feature]}${90 - i * 20}`,
              animation: `bubbleDot 0.3s ease-out ${(3 - i) * 0.05}s both`,
            }}
          />
        ))}
      </div>

      {/* Main panel bubble */}
      <div
        className="rounded-[32px] p-5 h-full overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${featureColors[feature]}e8, ${featureColors[feature]}cc)`,
          boxShadow: `
            0 25px 80px ${featureColors[feature]}50,
            0 0 60px ${featureColors[feature]}30,
            inset 0 -20px 50px rgba(0,0,0,0.2),
            inset 0 20px 50px rgba(255,255,255,0.1)
          `,
        }}
      >
        {/* Glass highlight */}
        <div
          className="absolute top-3 left-8 right-8 h-6 rounded-full opacity-40 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)',
          }}
        />

        {/* Panel content */}
        <div className="relative z-10 h-full">
          {feature === 'tafseer' && (
            <TafseerPanel
              surahId={surahId}
              ayahNumber={ayahNumber}
              palette={palette}
              onClose={onClose}
            />
          )}
          {feature === 'memorize' && (
            <MemorizePanel
              onModeChange={onMemorizeModeChange}
              palette={palette}
              onClose={onClose}
            />
          )}
          {feature === 'bookmark' && (
            <BookmarksPanel
              surahId={surahId}
              surahName={surahName}
              ayahNumber={ayahNumber}
              verseText={verseArabic}
              palette={palette}
              onClose={onClose}
            />
          )}
          {feature === 'youtube' && (
            <YouTubePanel
              surahId={surahId}
              surahName={surahName}
              palette={palette}
              onClose={onClose}
            />
          )}
          {feature === 'share' && (
            <SharePanel
              surahId={surahId}
              surahName={surahName}
              surahArabic={surahArabic}
              ayahNumber={ayahNumber}
              verseArabic={verseArabic}
              verseTranslation={verseTranslation}
              palette={palette}
              onClose={onClose}
            />
          )}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes bubblePanelIn {
          0% {
            opacity: 0;
            transform: translateY(-50%) translateX(40px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(-50%) translateX(0) scale(1);
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bubbleDot {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.5);
        }
      `}</style>
    </div>
  );
});

export default FeaturePanel;
export { TafseerPanel, MemorizePanel, BookmarksPanel, YouTubePanel, SharePanel };
