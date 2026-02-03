/**
 * Word Search Mind Map - Advanced Version
 * Features: Multi-language search, Auto-translation, Layout options, Filtering,
 * Pan/Move controls, Keyboard shortcuts, Export, Verse Preview
 */

import { useState, useEffect, useCallback, memo, useRef } from 'react';
import { Icons } from './Icons';
import { SURAHS, JUZZ } from '../../data';

// Language options for search
const SEARCH_LANGUAGES = [
  { id: 'en', name: 'English', nameAr: 'الإنجليزية', edition: 'en.asad', placeholder: 'Search in English (e.g., mercy, patience)...' },
  { id: 'ar', name: 'Arabic', nameAr: 'العربية', edition: 'quran-simple', placeholder: 'ابحث بالعربية (مثل: رحمة، صبر)...' },
  { id: 'ur', name: 'Urdu', nameAr: 'اردو', edition: 'ur.jalandhry', placeholder: 'اردو میں تلاش کریں...' },
];

// Common word translations for auto-search
const WORD_TRANSLATIONS = {
  // English to Arabic/Urdu
  mercy: { ar: 'رحمة', ur: 'رحمت' },
  patience: { ar: 'صبر', ur: 'صبر' },
  light: { ar: 'نور', ur: 'نور' },
  heart: { ar: 'قلب', ur: 'دل' },
  truth: { ar: 'حق', ur: 'سچ' },
  peace: { ar: 'سلام', ur: 'امن' },
  love: { ar: 'حب', ur: 'محبت' },
  faith: { ar: 'إيمان', ur: 'ایمان' },
  prayer: { ar: 'صلاة', ur: 'نماز' },
  god: { ar: 'الله', ur: 'اللہ' },
  allah: { ar: 'الله', ur: 'اللہ' },
  heaven: { ar: 'جنة', ur: 'جنت' },
  paradise: { ar: 'جنة', ur: 'جنت' },
  hell: { ar: 'نار', ur: 'جہنم' },
  fire: { ar: 'نار', ur: 'آگ' },
  water: { ar: 'ماء', ur: 'پانی' },
  earth: { ar: 'أرض', ur: 'زمین' },
  sky: { ar: 'سماء', ur: 'آسمان' },
  angel: { ar: 'ملك', ur: 'فرشتہ' },
  prophet: { ar: 'نبي', ur: 'نبی' },
  book: { ar: 'كتاب', ur: 'کتاب' },
  knowledge: { ar: 'علم', ur: 'علم' },
  wisdom: { ar: 'حكمة', ur: 'حکمت' },
  forgiveness: { ar: 'مغفرة', ur: 'معافی' },
  guidance: { ar: 'هداية', ur: 'ہدایت' },
  blessing: { ar: 'بركة', ur: 'برکت' },
  worship: { ar: 'عبادة', ur: 'عبادت' },
  believe: { ar: 'آمن', ur: 'ایمان' },
  fear: { ar: 'خوف', ur: 'خوف' },
  hope: { ar: 'رجاء', ur: 'امید' },
  soul: { ar: 'نفس', ur: 'روح' },
  death: { ar: 'موت', ur: 'موت' },
  life: { ar: 'حياة', ur: 'زندگی' },
  day: { ar: 'يوم', ur: 'دن' },
  night: { ar: 'ليل', ur: 'رات' },
  sun: { ar: 'شمس', ur: 'سورج' },
  moon: { ar: 'قمر', ur: 'چاند' },
  star: { ar: 'نجم', ur: 'ستارہ' },
  sin: { ar: 'ذنب', ur: 'گناہ' },
  repentance: { ar: 'توبة', ur: 'توبہ' },
  reward: { ar: 'أجر', ur: 'اجر' },
  punishment: { ar: 'عذاب', ur: 'عذاب' },
  justice: { ar: 'عدل', ur: 'انصاف' },
  charity: { ar: 'صدقة', ur: 'صدقہ' },
  fasting: { ar: 'صوم', ur: 'روزہ' },
  pilgrimage: { ar: 'حج', ur: 'حج' },
  mother: { ar: 'أم', ur: 'ماں' },
  father: { ar: 'أب', ur: 'باپ' },
  children: { ar: 'أولاد', ur: 'بچے' },
  family: { ar: 'أهل', ur: 'خاندان' },
  wealth: { ar: 'مال', ur: 'دولت' },
  poor: { ar: 'فقير', ur: 'غریب' },
  rich: { ar: 'غني', ur: 'امیر' },
  king: { ar: 'ملك', ur: 'بادشاہ' },
  servant: { ar: 'عبد', ur: 'بندہ' },
  remember: { ar: 'ذكر', ur: 'یاد' },
  grateful: { ar: 'شكر', ur: 'شکر' },
  time: { ar: 'وقت', ur: 'وقت' },
};

// Layout options
const LAYOUT_OPTIONS = [
  { id: 'spiral', name: 'Spiral', icon: 'Compass' },
  { id: 'grid', name: 'Grid', icon: 'Grid' },
  { id: 'circular', name: 'Circular', icon: 'Circle' },
  { id: 'tree', name: 'Tree', icon: 'Layers' },
];

// Filter options
const FILTER_OPTIONS = {
  revelation: [
    { id: 'all', name: 'All', nameAr: 'الكل' },
    { id: 'Makki', name: 'Makki', nameAr: 'مكية' },
    { id: 'Madani', name: 'Madani', nameAr: 'مدنية' },
  ],
  length: [
    { id: 'all', name: 'All Lengths', nameAr: 'الكل' },
    { id: 'short', name: 'Short (≤20)', nameAr: 'قصيرة' },
    { id: 'medium', name: 'Medium (21-100)', nameAr: 'متوسطة' },
    { id: 'long', name: 'Long (100+)', nameAr: 'طويلة' },
  ],
};

// Bubble Node Component with hover preview
const SearchResultNode = memo(function SearchResultNode({
  surah,
  matchCount,
  matches,
  x,
  y,
  isActive,
  onClick,
  delay = 0,
  color,
  bubbleZoom = 1,
  textZoom = 1,
  panX = 0,
  panY = 0,
  showPreview,
  onHover,
  animationsEnabled = true,
  searchLanguage = 'en',
}) {
  const [isHovered, setIsHovered] = useState(false);
  const baseSize = Math.max(50, Math.min(120, 40 + matchCount * 12));
  const size = baseSize * bubbleZoom;
  const isMakki = surah.type === 'Makki';

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) onHover({ surah, matches, x: x + panX, y: y + panY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onHover) onHover(null);
  };

  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute transition-all duration-300 focus:outline-none"
      style={{
        left: x + panX,
        top: y + panY,
        width: size,
        height: size,
        transform: `translate(-50%, -50%) scale(${isActive || isHovered ? 1.15 : 1})`,
        zIndex: isActive || isHovered ? 100 : 50,
        animation: animationsEnabled ? `bubblePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms both` : 'none',
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-500"
        style={{
          inset: '-20%',
          background: `radial-gradient(circle at 50% 50%, ${color}50 0%, transparent 70%)`,
          opacity: isActive || isHovered ? 1 : 0.4,
          filter: 'blur(10px)',
        }}
      />

      {/* Main bubble */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}ee 0%, ${color}aa 100%)`,
          boxShadow: isActive || isHovered
            ? `0 0 30px ${color}70, 0 10px 40px rgba(0,0,0,0.4)`
            : `0 5px 20px ${color}40`,
        }}
      >
        {/* Glass highlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '70%',
            height: '40%',
            top: '5%',
            left: '15%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
            borderRadius: '50%',
            transform: 'scaleY(0.5)',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-1">
          <span
            className="text-white font-bold leading-tight text-center truncate px-1"
            style={{
              maxWidth: size - 10,
              fontSize: `${12 * textZoom}px`,
            }}
          >
            {surah.name}
          </span>
          <span
            className="text-white/90 font-arabic"
            style={{ fontSize: `${10 * textZoom}px` }}
          >
            {surah.arabic}
          </span>
          <span
            className="text-white/70 mt-0.5"
            style={{ fontSize: `${9 * textZoom}px` }}
          >
            {matchCount} {matchCount === 1 ? 'match' : 'matches'}
          </span>
        </div>
      </div>

      {/* Match count badge */}
      <div
        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
        style={{
          background: 'linear-gradient(135deg, #ef4444, #f97316)',
          boxShadow: '0 2px 8px rgba(239, 68, 68, 0.5)',
        }}
      >
        {matchCount}
      </div>

      {/* Makki/Madani indicator */}
      <div
        className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
        style={{
          background: isMakki
            ? 'linear-gradient(135deg, #F59E0B, #D97706)'
            : 'linear-gradient(135deg, #10B981, #059669)',
          boxShadow: `0 2px 6px ${isMakki ? 'rgba(245, 158, 11, 0.5)' : 'rgba(16, 185, 129, 0.5)'}`,
        }}
        title={isMakki ? 'Makki' : 'Madani'}
      >
        {isMakki ? 'M' : 'D'}
      </div>
    </button>
  );
});

// Connection Line Component
const ConnectionLine = memo(function ConnectionLine({ from, to, color, panX = 0, panY = 0, animationsEnabled = true }) {
  const fromX = from.x + panX;
  const fromY = from.y + panY;
  const toX = to.x + panX;
  const toY = to.y + panY;

  const midX = (fromX + toX) / 2;
  const midY = (fromY + toY) / 2;
  const dx = toX - fromX;
  const dy = toY - fromY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const curvature = Math.min(dist * 0.15, 30);
  const px = dist > 0 ? -dy / dist * curvature : 0;
  const py = dist > 0 ? dx / dist * curvature : 0;

  const path = `M ${fromX} ${fromY} Q ${midX + px} ${midY + py} ${toX} ${toY}`;

  return (
    <g>
      <path
        d={path}
        stroke={color}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
        opacity="0.15"
        style={{ filter: 'blur(3px)' }}
      />
      <path
        d={path}
        stroke={color}
        strokeWidth={1.5}
        fill="none"
        strokeLinecap="round"
        strokeDasharray="6,3"
        opacity="0.6"
        style={{ animation: animationsEnabled ? 'connectionFlow 1s linear infinite' : 'none' }}
      />
    </g>
  );
});

// Hover Preview Component
const HoverPreview = memo(function HoverPreview({ data, containerSize, searchLanguage }) {
  if (!data) return null;

  const { surah, matches, x, y } = data;
  const previewX = Math.min(Math.max(x, 180), containerSize.width - 180);
  const previewY = y < containerSize.height / 2 ? y + 80 : y - 180;

  return (
    <div
      className="absolute z-[200] pointer-events-none"
      style={{
        left: previewX,
        top: previewY,
        transform: 'translateX(-50%)',
      }}
    >
      <div
        className="w-[320px] rounded-xl overflow-hidden border border-white/20 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(31,41,55,0.95) 0%, rgba(17,24,39,0.95) 100%)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div className="p-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white font-bold">{surah.name}</span>
              <span className="text-white/60 font-arabic mr-2"> ({surah.arabic})</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              surah.type === 'Makki' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'
            }`}>
              {surah.type}
            </span>
          </div>
          <div className="text-white/50 text-xs mt-1">
            {surah.ayahs} verses • {surah.meaning}
          </div>
        </div>

        {/* Preview matches */}
        <div className="p-3 max-h-[150px] overflow-y-auto">
          <div className="text-white/50 text-[10px] uppercase tracking-wider mb-2">
            First {Math.min(3, matches.length)} matches:
          </div>
          <div className="space-y-2">
            {matches.slice(0, 3).map((match, i) => (
              <div key={i} className="text-xs">
                <span className="text-purple-400 font-medium">Ayah {match.ayah}:</span>
                <p className={`text-white/80 line-clamp-2 mt-0.5 ${
                  searchLanguage === 'ar' || searchLanguage === 'ur' ? 'text-right font-arabic' : ''
                }`}>
                  {match.text}
                </p>
              </div>
            ))}
          </div>
          {matches.length > 3 && (
            <div className="text-white/40 text-[10px] mt-2">
              +{matches.length - 3} more matches...
            </div>
          )}
        </div>

        {/* Click hint */}
        <div className="px-3 py-2 bg-purple-500/10 border-t border-white/10">
          <div className="text-purple-300 text-[10px] text-center">
            Click to view all matches
          </div>
        </div>
      </div>
    </div>
  );
});

// Pan Control Component
const PanControls = memo(function PanControls({ onPan, onReset }) {
  return (
    <div className="absolute top-4 right-4 z-50">
      <div
        className="flex flex-col items-center gap-1 p-2 rounded-xl backdrop-blur-xl border border-white/20"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.2) 100%)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        }}
      >
        <button
          onClick={() => onPan(0, 50)}
          className="p-2 rounded-lg hover:bg-white/20 transition-all text-white/70 hover:text-white"
          title="Move Up (↑)"
        >
          <Icons.ChevronUp className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPan(50, 0)}
            className="p-2 rounded-lg hover:bg-white/20 transition-all text-white/70 hover:text-white"
            title="Move Left (←)"
          >
            <Icons.ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onReset}
            className="p-2 rounded-lg hover:bg-white/20 transition-all text-white/70 hover:text-white bg-white/10"
            title="Reset Position (R)"
          >
            <Icons.Target className="w-4 h-4" />
          </button>
          <button
            onClick={() => onPan(-50, 0)}
            className="p-2 rounded-lg hover:bg-white/20 transition-all text-white/70 hover:text-white"
            title="Move Right (→)"
          >
            <Icons.ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => onPan(0, -50)}
          className="p-2 rounded-lg hover:bg-white/20 transition-all text-white/70 hover:text-white"
          title="Move Down (↓)"
        >
          <Icons.ChevronDown className="w-4 h-4" />
        </button>
        <div className="text-[9px] text-white/40 mt-1">Drag or keys</div>
      </div>
    </div>
  );
});

// Layout Selector Component
const LayoutSelector = memo(function LayoutSelector({ selectedLayout, onSelect }) {
  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-white/10 border border-white/20">
      {LAYOUT_OPTIONS.map((layout) => {
        const IconComponent = Icons[layout.icon] || Icons.Circle;
        return (
          <button
            key={layout.id}
            onClick={() => onSelect(layout.id)}
            className={`p-2 rounded-lg transition-all ${
              selectedLayout === layout.id
                ? 'bg-purple-500/50 text-white'
                : 'text-white/60 hover:bg-white/10 hover:text-white'
            }`}
            title={layout.name}
          >
            <IconComponent className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
});

// Filter Panel Component
const FilterPanel = memo(function FilterPanel({ filters, onFilterChange, resultsCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
          filters.revelation !== 'all' || filters.length !== 'all' || filters.topN !== 20
            ? 'bg-purple-500/30 border-purple-500/50 text-white'
            : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
        }`}
      >
        <Icons.Filter className="w-4 h-4" />
        <span className="text-sm">Filters</span>
        {(filters.revelation !== 'all' || filters.length !== 'all') && (
          <span className="w-2 h-2 rounded-full bg-purple-400" />
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 z-50 w-[280px] rounded-xl overflow-hidden border border-white/20 bg-gray-800/95 backdrop-blur-xl shadow-xl">
            <div className="p-4 space-y-4">
              {/* Revelation Type */}
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                  Revelation Type
                </label>
                <div className="flex gap-2">
                  {FILTER_OPTIONS.revelation.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => onFilterChange('revelation', opt.id)}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm transition-all ${
                        filters.revelation === opt.id
                          ? 'bg-purple-500/50 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Surah Length */}
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                  Surah Length
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FILTER_OPTIONS.length.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => onFilterChange('length', opt.id)}
                      className={`px-3 py-2 rounded-lg text-sm transition-all ${
                        filters.length === opt.id
                          ? 'bg-cyan-500/50 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Top N Results */}
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                  Show Top Results: {filters.topN}
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={filters.topN}
                  onChange={(e) => onFilterChange('topN', parseInt(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${((filters.topN - 5) / 45) * 100}%, rgba(255,255,255,0.2) ${((filters.topN - 5) / 45) * 100}%, rgba(255,255,255,0.2) 100%)`,
                  }}
                />
              </div>

              {/* Juzz Filter */}
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                  Juzz (Para)
                </label>
                <select
                  value={filters.juzz}
                  onChange={(e) => onFilterChange('juzz', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-purple-500/50"
                >
                  <option value="all">All Juzz</option>
                  {Array.from({ length: 30 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>Juzz {i + 1}</option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  onFilterChange('revelation', 'all');
                  onFilterChange('length', 'all');
                  onFilterChange('topN', 20);
                  onFilterChange('juzz', 'all');
                }}
                className="w-full px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm transition-all"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

// Language Selector Component
const LanguageSelector = memo(function LanguageSelector({ selectedLang, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = SEARCH_LANGUAGES.find(l => l.id === selectedLang) || SEARCH_LANGUAGES[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
      >
        <Icons.Globe className="w-4 h-4 text-white/70" />
        <span className="text-white text-sm font-medium">{selected.name}</span>
        <Icons.ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 z-50 min-w-[180px] rounded-xl overflow-hidden border border-white/20 bg-gray-800/95 backdrop-blur-xl shadow-xl">
            {SEARCH_LANGUAGES.map((lang) => (
              <button
                key={lang.id}
                onClick={() => { onSelect(lang.id); setIsOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-all ${
                  selectedLang === lang.id ? 'bg-purple-500/20' : ''
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${selectedLang === lang.id ? 'bg-purple-400' : 'bg-white/20'}`} />
                <div>
                  <div className="text-white text-sm font-medium">{lang.name}</div>
                  <div className="text-white/50 text-xs">{lang.nameAr}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
});

// Main Word Search Map Component
const WordSearchMap = memo(function WordSearchMap({
  isVisible,
  onClose,
  onNavigateToVerse,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchLanguage, setSearchLanguage] = useState('en');
  const [layout, setLayout] = useState('spiral');
  const [hoverData, setHoverData] = useState(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [translatedTerms, setTranslatedTerms] = useState(null);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const mapRef = useRef(null);

  // Filters
  const [filters, setFilters] = useState({
    revelation: 'all',
    length: 'all',
    topN: 20,
    juzz: 'all',
  });

  // Zoom controls
  const [textZoom, setTextZoom] = useState(1);
  const [bubbleZoom, setBubbleZoom] = useState(1);
  const [spacing, setSpacing] = useState(1);

  // Pan controls
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Get current language config
  const currentLang = SEARCH_LANGUAGES.find(l => l.id === searchLanguage) || SEARCH_LANGUAGES[0];

  // Handle filter change
  const handleFilterChange = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  // Get Juzz for a surah
  const getSurahJuzz = useCallback((surahId) => {
    if (!JUZZ) return null;
    for (const juzz of JUZZ) {
      if (surahId >= juzz.startSurah && surahId <= juzz.endSurah) {
        return juzz.id;
      }
    }
    return null;
  }, []);

  // Filter results
  const filteredResults = useCallback(() => {
    let results = [...searchResults];

    // Filter by revelation type
    if (filters.revelation !== 'all') {
      results = results.filter(r => r.surah.type === filters.revelation);
    }

    // Filter by length
    if (filters.length !== 'all') {
      results = results.filter(r => {
        const ayahs = r.surah.ayahs;
        switch (filters.length) {
          case 'short': return ayahs <= 20;
          case 'medium': return ayahs > 20 && ayahs <= 100;
          case 'long': return ayahs > 100;
          default: return true;
        }
      });
    }

    // Filter by Juzz
    if (filters.juzz !== 'all') {
      const juzzNum = parseInt(filters.juzz);
      results = results.filter(r => {
        const surahJuzz = getSurahJuzz(r.surah.id);
        return surahJuzz === juzzNum;
      });
    }

    // Limit to top N
    return results.slice(0, filters.topN);
  }, [searchResults, filters, getSurahJuzz]);

  // Measure container size
  useEffect(() => {
    if (isVisible && containerRef.current) {
      const updateSize = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            const headerOffset = isFullscreen ? 140 : 160;
            setContainerSize({ width: rect.width, height: Math.max(rect.height - headerOffset, 400) });
          }
        }
      };
      const timer = setTimeout(updateSize, 50);
      window.addEventListener('resize', updateSize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateSize);
      };
    }
  }, [isVisible, isFullscreen]);

  // Focus input when opened
  useEffect(() => {
    if (isVisible && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isVisible]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
        if (e.key === 'Escape') {
          e.target.blur();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setPanY(prev => prev + 50);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setPanY(prev => prev - 50);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setPanX(prev => prev + 50);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setPanX(prev => prev - 50);
          break;
        case 'r':
        case 'R':
          setPanX(0);
          setPanY(0);
          break;
        case '+':
        case '=':
          setBubbleZoom(prev => Math.min(prev + 0.1, 2));
          break;
        case '-':
        case '_':
          setBubbleZoom(prev => Math.max(prev - 0.1, 0.5));
          break;
        case 'Escape':
          if (selectedSurah) {
            setSelectedSurah(null);
          } else {
            onClose();
          }
          break;
        case 'f':
        case 'F':
          setIsFullscreen(prev => !prev);
          break;
        case '1':
          setLayout('spiral');
          break;
        case '2':
          setLayout('grid');
          break;
        case '3':
          setLayout('circular');
          break;
        case '4':
          setLayout('tree');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, selectedSurah, onClose]);

  // Mouse drag for panning
  const handleMouseDown = useCallback((e) => {
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
  }, [panX, panY]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    setPanX(e.clientX - dragStart.x);
    setPanY(e.clientY - dragStart.y);
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePan = useCallback((dx, dy) => {
    setPanX(prev => prev + dx);
    setPanY(prev => prev + dy);
  }, []);

  const handleResetPan = useCallback(() => {
    setPanX(0);
    setPanY(0);
  }, []);

  // Search function with auto-translation
  const performSearch = useCallback(async (query, lang) => {
    if (!query || query.length < 2) {
      setSearchResults([]);
      setTranslatedTerms(null);
      return;
    }

    setIsSearching(true);
    const langConfig = SEARCH_LANGUAGES.find(l => l.id === lang) || SEARCH_LANGUAGES[0];

    // Check for translations
    const lowerQuery = query.toLowerCase().trim();
    const translation = WORD_TRANSLATIONS[lowerQuery];
    if (translation && lang === 'en') {
      setTranslatedTerms({ ar: translation.ar, ur: translation.ur });
    } else {
      setTranslatedTerms(null);
    }

    try {
      const response = await fetch(
        `https://api.alquran.cloud/v1/search/${encodeURIComponent(query)}/all/${langConfig.edition}`
      );
      const data = await response.json();

      if (data.code === 200 && data.data?.matches) {
        const surahMatches = {};
        data.data.matches.forEach(match => {
          const surahId = match.surah.number;
          if (!surahMatches[surahId]) {
            const surahData = SURAHS.find(s => s.id === surahId);
            surahMatches[surahId] = {
              surah: surahData || { id: surahId, name: match.surah.englishName, arabic: match.surah.name, type: 'Makki', ayahs: 0 },
              matches: [],
            };
          }
          surahMatches[surahId].matches.push({
            ayah: match.numberInSurah,
            text: match.text,
          });
        });

        const results = Object.values(surahMatches)
          .sort((a, b) => b.matches.length - a.matches.length);

        setSearchResults(results);
        setPanX(0);
        setPanY(0);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery, searchLanguage);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, searchLanguage, performSearch]);

  // Calculate node positions based on layout
  const getNodePositions = useCallback(() => {
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const results = filteredResults();
    const totalResults = results.length;

    if (totalResults === 0) return [];

    return results.map((result, i) => {
      let x, y;

      switch (layout) {
        case 'grid': {
          const cols = Math.ceil(Math.sqrt(totalResults));
          const cellWidth = (containerSize.width * 0.8) / cols;
          const cellHeight = (containerSize.height * 0.8) / Math.ceil(totalResults / cols);
          const col = i % cols;
          const row = Math.floor(i / cols);
          x = containerSize.width * 0.1 + col * cellWidth + cellWidth / 2;
          y = containerSize.height * 0.1 + row * cellHeight + cellHeight / 2;
          break;
        }

        case 'circular': {
          const angle = (i / totalResults) * Math.PI * 2 - Math.PI / 2;
          const radius = Math.min(containerSize.width, containerSize.height) * 0.35 * spacing;
          x = centerX + Math.cos(angle) * radius;
          y = centerY + Math.sin(angle) * radius;
          break;
        }

        case 'tree': {
          const levels = Math.ceil(Math.log2(totalResults + 1));
          const level = Math.floor(Math.log2(i + 1));
          const levelStart = Math.pow(2, level) - 1;
          const posInLevel = i - levelStart;
          const nodesInLevel = Math.min(Math.pow(2, level), totalResults - levelStart);
          const levelWidth = containerSize.width * 0.9;
          const levelHeight = (containerSize.height * 0.8) / levels;
          x = containerSize.width * 0.05 + (posInLevel + 0.5) * (levelWidth / nodesInLevel);
          y = containerSize.height * 0.1 + level * levelHeight + levelHeight / 2;
          break;
        }

        case 'spiral':
        default: {
          const angle = i * 2.4;
          const baseRadius = Math.min(containerSize.width, containerSize.height) * 0.35 * Math.sqrt(i / Math.max(totalResults, 1));
          const radius = baseRadius * spacing;
          x = centerX + Math.cos(angle) * radius;
          y = centerY + Math.sin(angle) * radius;
          break;
        }
      }

      return { ...result, x, y };
    });
  }, [filteredResults, containerSize, spacing, layout]);

  const positions = getNodePositions();
  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;
  const totalMatches = filteredResults().reduce((sum, r) => sum + r.matches.length, 0);

  // Color by revelation type
  const getNodeColor = useCallback((surah, index) => {
    if (surah.type === 'Makki') {
      return ['#F59E0B', '#EAB308', '#D97706', '#CA8A04'][index % 4];
    }
    return ['#10B981', '#14B8A6', '#059669', '#0D9488'][index % 4];
  }, []);

  const handleSurahClick = useCallback((result) => {
    setSelectedSurah(result);
  }, []);

  const handleNavigate = useCallback((surahId, ayah) => {
    if (onNavigateToVerse) {
      onNavigateToVerse(surahId, ayah);
      onClose();
    }
  }, [onNavigateToVerse, onClose]);

  // Export results as text file
  const handleExportImage = useCallback(() => {
    const results = filteredResults();
    if (results.length === 0) return;

    // Create detailed text export
    let text = `Quran Word Search: "${searchQuery}"\n`;
    text += `Language: ${currentLang.name}\n`;
    text += `Found in ${results.length} surahs with ${results.reduce((sum, r) => sum + r.matches.length, 0)} total matches\n`;
    text += `\n${'='.repeat(50)}\n\n`;

    results.forEach((result, i) => {
      text += `${i + 1}. ${result.surah.name} (${result.surah.arabic}) - ${result.surah.type}\n`;
      text += `   ${result.matches.length} matches in ${result.surah.ayahs} verses\n`;
      result.matches.slice(0, 5).forEach(match => {
        text += `   • Ayah ${match.ayah}: ${match.text.substring(0, 100)}${match.text.length > 100 ? '...' : ''}\n`;
      });
      if (result.matches.length > 5) {
        text += `   ... and ${result.matches.length - 5} more matches\n`;
      }
      text += '\n';
    });

    text += `\nExported from w3Quran Word Search Map`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.download = `quran-word-search-${searchQuery.replace(/[^a-z0-9]/gi, '-')}.txt`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }, [searchQuery, filteredResults, currentLang]);

  // Suggested words based on language
  const suggestedWords = {
    en: ['mercy', 'patience', 'light', 'heart', 'truth', 'peace'],
    ar: ['رحمة', 'صبر', 'نور', 'قلب', 'حق', 'سلام'],
    ur: ['رحمت', 'صبر', 'نور', 'دل', 'سچ', 'امن'],
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        ref={containerRef}
        className={`relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 overflow-hidden flex flex-col shadow-2xl border border-white/10 transition-all duration-300 ${
          isFullscreen ? 'w-full h-full rounded-none' : 'max-w-6xl w-full max-h-[95vh] rounded-3xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-4 border-b border-white/10 bg-black/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                <Icons.Search className="w-5 h-5 text-white relative z-10" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Word Search Map</h2>
                <p className="text-white/60 text-xs">Visual search across the Quran</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Animation Toggle */}
              <button
                onClick={() => setAnimationsEnabled(!animationsEnabled)}
                className={`p-2 rounded-lg transition-all ${
                  animationsEnabled ? 'bg-purple-500/30 text-purple-300' : 'bg-white/10 text-white/50'
                }`}
                title={animationsEnabled ? 'Disable animations' : 'Enable animations'}
              >
                <Icons.Zap className="w-4 h-4" />
              </button>

              {/* Export Button */}
              {searchResults.length > 0 && (
                <button
                  onClick={handleExportImage}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
                  title="Export as image"
                >
                  <Icons.Download className="w-4 h-4" />
                </button>
              )}

              <LanguageSelector selectedLang={searchLanguage} onSelect={setSearchLanguage} />
              <FilterPanel filters={filters} onFilterChange={handleFilterChange} resultsCount={filteredResults().length} />
              <LayoutSelector selectedLayout={layout} onSelect={setLayout} />

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-all"
                title={isFullscreen ? 'Exit fullscreen (F)' : 'Enter fullscreen (F)'}
              >
                {isFullscreen ? (
                  <Icons.Minimize className="w-5 h-5 text-white/70" />
                ) : (
                  <Icons.Maximize className="w-5 h-5 text-white/70" />
                )}
              </button>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10 transition-all" title="Close (Esc)">
                <Icons.X className="w-5 h-5 text-white/70" />
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLang.placeholder}
                className={`w-full px-4 py-2.5 pl-10 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 ${
                  searchLanguage === 'ar' || searchLanguage === 'ur' ? 'text-right font-arabic pr-10 pl-4' : ''
                }`}
                dir={searchLanguage === 'ar' || searchLanguage === 'ur' ? 'rtl' : 'ltr'}
              />
              <Icons.Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 ${
                searchLanguage === 'ar' || searchLanguage === 'ur' ? 'right-3' : 'left-3'
              }`} />
              {isSearching && (
                <div className={`absolute top-1/2 -translate-y-1/2 ${
                  searchLanguage === 'ar' || searchLanguage === 'ur' ? 'left-3' : 'right-3'
                }`}>
                  <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>

          {/* Results summary & translations */}
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
            {filteredResults().length > 0 && (
              <>
                <span className="text-white/60">
                  <span className="text-purple-400 font-bold">{filteredResults().length}</span> surahs
                  {searchResults.length > filteredResults().length && (
                    <span className="text-white/40"> (filtered from {searchResults.length})</span>
                  )}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">
                  <span className="text-cyan-400 font-bold">{totalMatches}</span> matches
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/40 text-xs">
                  <span className="text-amber-400">■</span> Makki <span className="text-emerald-400 ml-2">■</span> Madani
                </span>
              </>
            )}

            {/* Auto-translated terms */}
            {translatedTerms && (
              <>
                <span className="text-white/40">•</span>
                <span className="text-white/50 text-xs">
                  Also try:
                  <button
                    onClick={() => { setSearchLanguage('ar'); setSearchQuery(translatedTerms.ar); }}
                    className="ml-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 font-arabic"
                  >
                    {translatedTerms.ar}
                  </button>
                  <button
                    onClick={() => { setSearchLanguage('ur'); setSearchQuery(translatedTerms.ur); }}
                    className="ml-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 font-arabic"
                  >
                    {translatedTerms.ur}
                  </button>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Mind Map Content */}
        <div
          ref={mapRef}
          className={`flex-1 overflow-hidden relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ minHeight: '400px', height: containerSize.height }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-10 transition-transform duration-100"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
              transform: `translate(${panX % 40}px, ${panY % 40}px)`,
            }}
          />

          {/* Pan Controls */}
          {filteredResults().length > 0 && !selectedSurah && (
            <PanControls onPan={handlePan} onReset={handleResetPan} />
          )}

          {/* Hover Preview */}
          <HoverPreview data={hoverData} containerSize={containerSize} searchLanguage={searchLanguage} />

          {/* Empty state */}
          {!searchQuery && (
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center relative">
                <Icons.Search className="w-10 h-10 text-purple-400" />
                {animationsEnabled && (
                  <div
                    className="absolute rounded-full"
                    style={{
                      inset: '-4px',
                      background: 'conic-gradient(from 0deg, #8B5CF680, #EC489980, #8B5CF680)',
                      animation: 'spinSlow 4s linear infinite',
                      opacity: 0.6,
                    }}
                  />
                )}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Search Any Word</h3>
              <p className="text-white/60 text-center max-w-md text-sm mb-4">
                Type a word to see a visual map of all surahs where it appears.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {(suggestedWords[searchLanguage] || suggestedWords.en).map((word) => (
                  <button
                    key={word}
                    onClick={() => setSearchQuery(word)}
                    className={`px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-sm transition-all ${
                      searchLanguage === 'ar' || searchLanguage === 'ur' ? 'font-arabic' : ''
                    }`}
                  >
                    {word}
                  </button>
                ))}
              </div>
              <div className="mt-6 text-white/40 text-xs">
                Keyboard: Arrow keys to pan • +/- zoom • 1-4 layouts • R reset • F fullscreen
              </div>
            </div>
          )}

          {/* No results */}
          {searchQuery && !isSearching && filteredResults().length === 0 && (
            <div className="flex flex-col items-center justify-center h-full p-6">
              <Icons.AlertCircle className="w-12 h-12 text-white/30 mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">No Results Found</h3>
              <p className="text-white/60 text-center max-w-md text-sm">
                {searchResults.length > 0
                  ? 'No matches with current filters. Try adjusting the filters.'
                  : `No matches found for "${searchQuery}". Try a different word.`}
              </p>
            </div>
          )}

          {/* Mind Map Visualization */}
          {filteredResults().length > 0 && !selectedSurah && (
            <>
              {/* SVG for connection lines */}
              <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                {layout !== 'grid' && positions.map((result, i) => (
                  <ConnectionLine
                    key={`line-${result.surah.id}`}
                    from={{ x: centerX, y: centerY }}
                    to={{ x: result.x, y: result.y }}
                    color={getNodeColor(result.surah, i)}
                    panX={panX}
                    panY={panY}
                    animationsEnabled={animationsEnabled}
                  />
                ))}
              </svg>

              {/* Center node (for spiral/circular) */}
              {(layout === 'spiral' || layout === 'circular') && (
                <div
                  className="absolute transition-all duration-300"
                  style={{
                    left: centerX + panX,
                    top: centerY + panY,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className="rounded-full flex flex-col items-center justify-center relative overflow-hidden"
                    style={{
                      width: 80 * bubbleZoom,
                      height: 80 * bubbleZoom,
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                      boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
                    }}
                  >
                    <Icons.Search className="text-white mb-1" style={{ width: 24 * textZoom, height: 24 * textZoom }} />
                    <span
                      className={`text-white font-bold text-center px-2 truncate ${
                        searchLanguage === 'ar' || searchLanguage === 'ur' ? 'font-arabic' : ''
                      }`}
                      style={{ maxWidth: 70 * bubbleZoom, fontSize: `${10 * textZoom}px` }}
                    >
                      {searchQuery}
                    </span>
                  </div>
                </div>
              )}

              {/* Result nodes */}
              {positions.map((result, i) => (
                <SearchResultNode
                  key={result.surah.id}
                  surah={result.surah}
                  matchCount={result.matches.length}
                  matches={result.matches}
                  x={result.x}
                  y={result.y}
                  isActive={false}
                  onClick={() => handleSurahClick(result)}
                  delay={animationsEnabled ? i * 30 : 0}
                  color={getNodeColor(result.surah, i)}
                  bubbleZoom={bubbleZoom}
                  textZoom={textZoom}
                  panX={panX}
                  panY={panY}
                  onHover={setHoverData}
                  animationsEnabled={animationsEnabled}
                  searchLanguage={searchLanguage}
                />
              ))}
            </>
          )}

          {/* Zoom Control Panel */}
          {filteredResults().length > 0 && !selectedSurah && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <div
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl backdrop-blur-xl border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(236,72,153,0.2) 100%)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2">
                  <Icons.Type className="w-3.5 h-3.5 text-white/70" />
                  <input
                    type="range"
                    min="0.6"
                    max="1.5"
                    step="0.1"
                    value={textZoom}
                    onChange={(e) => setTextZoom(parseFloat(e.target.value))}
                    className="w-16 h-1.5 rounded-full appearance-none cursor-pointer bg-white/20"
                  />
                </div>
                <div className="w-px h-5 bg-white/20" />
                <div className="flex items-center gap-2">
                  <Icons.Circle className="w-3.5 h-3.5 text-white/70" />
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={bubbleZoom}
                    onChange={(e) => setBubbleZoom(parseFloat(e.target.value))}
                    className="w-16 h-1.5 rounded-full appearance-none cursor-pointer bg-white/20"
                  />
                </div>
                <div className="w-px h-5 bg-white/20" />
                <div className="flex items-center gap-2">
                  <Icons.Maximize className="w-3.5 h-3.5 text-white/70" />
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={spacing}
                    onChange={(e) => setSpacing(parseFloat(e.target.value))}
                    className="w-16 h-1.5 rounded-full appearance-none cursor-pointer bg-white/20"
                  />
                </div>
                <button
                  onClick={() => { setTextZoom(1); setBubbleZoom(1); setSpacing(1); setPanX(0); setPanY(0); }}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-all text-white/60 hover:text-white"
                  title="Reset all"
                >
                  <Icons.Refresh className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Surah Detail View */}
          {selectedSurah && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
              <div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-lg w-full max-h-[75vh] overflow-hidden border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-lg">{selectedSurah.surah.name}</h3>
                      <span className="text-white/60 font-arabic">({selectedSurah.surah.arabic})</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        selectedSurah.surah.type === 'Makki' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        {selectedSurah.surah.type}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">
                      {selectedSurah.matches.length} occurrences • {selectedSurah.surah.ayahs} verses
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedSurah(null)}
                    className="p-2 rounded-full hover:bg-white/10 transition-all"
                  >
                    <Icons.X className="w-5 h-5 text-white/70" />
                  </button>
                </div>

                <div className="p-4 overflow-y-auto max-h-[55vh]">
                  <div className="space-y-3">
                    {selectedSurah.matches.map((match, i) => (
                      <button
                        key={i}
                        onClick={() => handleNavigate(selectedSurah.surah.id, match.ayah)}
                        className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">
                            Ayah {match.ayah}
                          </span>
                        </div>
                        <p className={`text-white/80 text-sm line-clamp-3 ${
                          searchLanguage === 'ar' || searchLanguage === 'ur' ? 'text-right font-arabic' : ''
                        }`}
                          dir={searchLanguage === 'ar' || searchLanguage === 'ur' ? 'rtl' : 'ltr'}
                        >
                          {match.text}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes bubblePop {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes connectionFlow {
          from { stroke-dashoffset: 18; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .font-arabic {
          font-family: 'Scheherazade New', 'Amiri', 'Noto Naskh Arabic', serif;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
        }
        input[type="range"]:focus { outline: none; }
      `}</style>
    </div>
  );
});

export default WordSearchMap;
