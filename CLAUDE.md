# w3Quran - Project Context for Claude

## Project Overview
w3Quran is an interactive Quran explorer app built with React + Vite + Tailwind CSS. It features beautiful 3D bubble visualizations for Surahs and Juzz, audio recitation, quizzes, daily verses, and more.

## Tech Stack
- **React 18** with functional components and hooks
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **No external state management** - uses React useState/useContext and custom hooks
- **LocalStorage** for persistence via `useLocalStorage` hook

## Project Structure
```
src/
├── components/
│   ├── bubbles/          # Bubble visualizations
│   │   ├── SurahBubble.jsx    # Individual surah bubble (fibonacci spiral)
│   │   ├── JuzzBubble.jsx     # Individual juzz bubble
│   │   └── BubbleConnections.jsx  # SVG connections (currently unused)
│   ├── common/           # Shared components
│   │   ├── ErrorBoundary.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── Modal.jsx
│   ├── layout/           # Layout components
│   │   ├── Header.jsx
│   │   ├── FloatingMenu.jsx
│   │   ├── ZoomSlider.jsx     # Dual zoom (bubble size + content size)
│   │   └── StatsBar.jsx
│   ├── views/            # Full-page views
│   │   ├── QuranReaderView.jsx
│   │   ├── NamesOfAllahView.jsx
│   │   ├── QuizView.jsx
│   │   ├── SettingsView.jsx
│   │   ├── DailyVerseView.jsx
│   │   ├── StatisticsView.jsx
│   │   ├── ListenView.jsx
│   │   ├── DonateView.jsx
│   │   └── PrayerTimesView.jsx
│   └── widgets/          # Dashboard widgets
│       └── AnalyticsPanel.jsx
├── data/
│   ├── index.js          # Main data exports
│   ├── surahs.js         # SURAHS array with all 114 surahs
│   ├── juzz.js           # JUZZ array with 30 juzz
│   └── quran_en.js       # Full Quran English translation
├── hooks/
│   ├── index.js
│   ├── useLocalStorage.js
│   └── useAudioPlayer.js # Audio playback with race condition handling
├── App.jsx               # Main app with view routing
└── main.jsx              # Entry point
```

## Key Data Structures

### Surah Object
```javascript
{
  id: 1,                    // Surah number (1-114)
  name: 'Al-Fatiha',        // English transliteration
  arabic: 'الفاتحة',         // Arabic name
  ayahs: 7,                 // Number of verses
  type: 'Makki',            // 'Makki' or 'Madani'
  meaning: 'The Opening',   // English meaning
  chronOrder: 5,            // Chronological revelation order
  topics: ['prayer', 'faith', 'guidance']  // Topic tags
}
```

### Juzz Object
```javascript
{
  id: 1,                    // Juzz number (1-30)
  arabic: 'الم'              // First word of juzz in Arabic
}
```

## Bubble Layout System

### Fibonacci Spiral (Phyllotaxis)
Bubbles use the golden angle (137.508°) for organic positioning:
```javascript
const scale = baseScale * zoom;
const r = Math.sqrt(index + 1) * scale;
const a = index * 137.508 * (Math.PI / 180);
const x = r * Math.cos(a);
const y = r * Math.sin(a);

// Position with calc() for centering
left: `calc(50% + ${x}px - ${size / 2}px)`
top: `calc(50% + ${y}px - ${size / 2}px)`
```

### Variable Bubble Sizes (Surahs)
Bubble size scales with ayah count:
```javascript
const baseMinSize = 78;
const baseMaxSize = 160;
const size = minSize + ((surah.ayahs / maxAyahs) * (maxSize - minSize));
```

### Color Palettes
Topic-based colors from `getTopicPalette(surah)`:
```javascript
{
  colors: ['#6366f1', '#8b5cf6', '#a855f7'],  // Gradient colors
  glow: '#6366f1'                              // Glow/accent color
}
```

## CSS Animations (defined in App.jsx)
- `gentleFloat` - Subtle vertical floating
- `spinSlow` - Slow rotation for rainbow rings
- `floatParticle` - Particle hover effect
- `breathe` - Pulsing glow
- `shimmerWave` - Light sweep on hover
- `colorShift` - Subtle hue rotation

## Bubble Visual Layers (bottom to top)
1. Outer soft glow (blur, radial gradient)
2. Iridescent rainbow ring (conic gradient, spins on hover)
3. Inner glow ring
4. Main bubble body (linear gradient)
5. Background pattern overlay
6. Color overlay gradients
7. Glass layers (2 layers with borders)
8. Top crescent highlight
9. Secondary/tertiary bright spots
10. Bottom reflection
11. Rainbow shimmer (hover only)
12. Content (number badge, Arabic name, English name, ayah count)
13. Floating particles (hover only)
14. Outer ring border

## Zoom System
Two independent zoom controls:
- **Bubble Zoom** (`zoom`): Scales bubble size and positions
- **Content Zoom** (`contentZoom`): Scales text inside bubbles

Both stored in localStorage.

## Audio System (useAudioPlayer.js)
- Uses Al-Quran Cloud API CDN
- Supports multiple reciters
- Handles race conditions with separate load/play effects
- AbortError is expected and ignored when switching tracks

### Audio URL Format
```javascript
const globalAyah = getGlobalAyahNumber(surahId, ayahNum);
// https://cdn.islamic.network/quran/audio/128/ar.alafasy/{globalAyah}.mp3
```

## Common Issues & Solutions

### "All 114 surahs not showing"
- Container size must accommodate spiral layout
- Use large container (1400px+) with margin auto
- Bubbles position from center using `calc(50% + ...)`

### "Audio AbortError spam"
- Separate audio loading from play/pause logic
- Track current URL to avoid unnecessary reloads
- Ignore AbortError (expected when source changes)

### "Deprecated meta tag warning"
- Use `mobile-web-app-capable` instead of `apple-mobile-web-app-capable`

## Build Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## External APIs
- **Al-Quran Cloud**: Audio CDN and verse data
- **Islamic Network CDN**: Audio files

## Design Philosophy
- Beautiful glass-morphism bubbles with multiple layers
- Organic fibonacci spiral layout
- Rich hover effects (glow, particles, shimmer)
- Topic-based color coding
- RTL support for Arabic content
- Accessibility: reduced motion support
