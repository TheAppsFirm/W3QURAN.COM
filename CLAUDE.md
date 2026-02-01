# w3Quran - Project Context for Claude

## Project Overview
w3Quran is an interactive Quran explorer app built with React + Vite + Tailwind CSS. It features beautiful 3D bubble visualizations for Surahs and Juzz, audio recitation, word-by-word meanings, Tajweed highlighting, quizzes, daily verses, and more.

## Tech Stack
- **React 18** with functional components and hooks
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **No external state management** - uses React useState/useContext and custom hooks
- **LocalStorage** for persistence via `useLocalStorage` hook
- **IndexedDB** for offline storage via `offlineStorage.js`
- **Service Worker** for PWA offline support

## Project Structure
```
src/
├── components/
│   ├── bubbles/              # Bubble visualizations
│   │   ├── SurahBubble.jsx   # Individual surah bubble with hover sounds
│   │   ├── JuzzBubble.jsx    # Individual juzz bubble
│   │   ├── StyledBubble.jsx  # Reusable styled bubble component
│   │   └── BubbleLayouts.jsx # Different layout patterns
│   ├── common/               # Shared components
│   │   ├── ErrorBoundary.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Icons.jsx         # 50+ SVG icons
│   │   ├── Logo.jsx          # w3Quran logo (w3quran text inside bubble)
│   │   ├── BubbleOverlay.jsx # Reusable bubble-style modal
│   │   ├── BubbleReaderOverlay.jsx # Full-featured Quran reader
│   │   └── Modal.jsx
│   ├── layout/               # Layout components
│   │   ├── Header.jsx        # Filter controls
│   │   ├── FloatingMenu.jsx  # Bottom navigation with sound effects
│   │   ├── ZoomSlider.jsx    # Dual zoom controls
│   │   └── StatsBar.jsx
│   ├── views/                # Full-page views
│   │   ├── QuranReaderView.jsx
│   │   ├── NamesOfAllahView.jsx
│   │   ├── QuizView.jsx
│   │   ├── SettingsView.jsx  # Includes hover sound toggle
│   │   ├── DailyVerseView.jsx
│   │   ├── StatisticsView.jsx
│   │   ├── ListenView.jsx
│   │   ├── DonateView.jsx
│   │   └── PrayerTimesView.jsx
│   └── widgets/
│       └── AnalyticsPanel.jsx
├── data/
│   ├── index.js              # Main data exports
│   ├── surahs.js             # SURAHS array with all 114 surahs
│   ├── juzz.js               # JUZZ array with 30 juzz
│   ├── wordMeanings.js       # Multi-language word meanings (local data)
│   ├── offlineStorage.js     # IndexedDB for offline data
│   ├── searchIndex.js        # Search functionality
│   ├── tafseerData.js        # Tafseer content
│   ├── progressTracker.js    # Reading progress tracking
│   └── hifzTracker.js        # Memorization tracking
├── hooks/
│   ├── index.js
│   ├── useLocalStorage.js    # Persistent state with prefix
│   ├── useQuranAPI.js        # Quran API with word-by-word support
│   └── useAudioPlayer.js     # Audio playback with race condition handling
├── services/api/
│   ├── QuranApiInterface.js  # API contract
│   ├── FreeQuranApi.js       # Al-Quran Cloud API (with retry logic)
│   └── QuranJsApi.js         # @quranjs/api adapter
├── utils/
│   ├── soundUtils.js         # Hover sounds (Islamic-style, with on/off toggle)
│   ├── retryUtils.js         # Fetch with retry and circuit breaker
│   ├── sanitize.js           # XSS prevention for search highlights
│   └── shareUtils.js         # Sharing functionality
├── App.jsx                   # Main app with view routing
├── main.jsx                  # Entry point
└── index.css                 # Global styles with bubble animations
```

## Key Features

### Logo Component (`Logo.jsx`)
- Animated bubble with "w3Quran" text inside
- Multiple sizes: small, medium, large, xlarge
- Animated glow, spinning rainbow ring, floating particles
- Exports: `Logo`, `LogoIcon`, `LogoFull`

### Sound System (`soundUtils.js`)
- Calming, Islamic-inspired hover sounds
- Web Audio API for tone generation
- Throttled playback to prevent spam
- On/off toggle stored in localStorage (`w3quran_sound_enabled`)
- Key functions:
  - `playThrottledHoverSound()` - For bubble hovers
  - `isSoundEnabled()` / `setSoundEnabled()` - Toggle control
  - `toggleSound()` - Quick toggle

### Word-by-Word System (`useQuranAPI.js`)
- Multi-language word meanings (English, Urdu, etc.)
- Local data support for common surahs
- Quran.com API fallback for word translations
- Language determined from translation ID via `WORD_TRANSLATION_LANGUAGES`
- Single word audio playback for Tajweed learning
- Key hook: `useMultilingualWords(surahId, translationId)`

### Bubble Reader Overlay (`BubbleReaderOverlay.jsx`)
- Full-featured Quran reading experience
- Word-by-word mode with tap-to-show meanings
- Single word audio playback button
- Tajweed highlighting with color-coded rules
- Memorization mode (hide words/verses)
- Audio playback with verse navigation
- Tafseer panel integration
- Share/bookmark functionality

### Retry Utilities (`retryUtils.js`)
- `fetchWithRetry()` - Exponential backoff for API calls
- `withCircuitBreaker()` - Prevents cascade failures
- Used by FreeQuranApi for all API calls

### PWA Support
- Service Worker (`public/sw.js`) for offline caching
- PWA icons (icon-192.svg, icon-512.svg)
- Cache strategies: cache-first for static, network-first for API

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
  topics: ['prayer', 'faith', 'guidance']
}
```

### Word Meaning Object
```javascript
{
  arabic: 'بِسْمِ',
  meaning: 'In the name of',
  transliteration: "bismi",
  audioUrl: 'https://audio.qurancdn.com/...'  // Optional
}
```

## Bubble Layout System

### Fibonacci Spiral (Phyllotaxis)
```javascript
const scale = baseScale * zoom;
const r = Math.sqrt(index + 1) * scale;
const a = index * 137.508 * (Math.PI / 180);
const x = r * Math.cos(a);
const y = r * Math.sin(a);
```

### Variable Bubble Sizes
```javascript
const size = minSize + ((surah.ayahs / maxAyahs) * (maxSize - minSize));
```

## CSS Animations (index.css)
- `gentleFloat` - Subtle vertical floating
- `spinSlow` - Slow rotation for rainbow rings
- `floatParticle` - Particle hover effect
- `breathe` - Pulsing glow
- `shimmerWave` - Light sweep
- `bubbleWobble` - Gentle wobble effect
- `bubblePop` - Pop-in animation
- `glowPulse` - Pulsing glow shadows
- `orbitalSpin` - Orbital motion
- `rainbowBorder` - Cycling border colors

## Audio System

### Verse Audio (useAudioPlayer.js)
- Uses Al-Quran Cloud API CDN
- Supports multiple reciters
- Handles race conditions with separate load/play effects

### Word Audio
- Individual word audio from Quran.com CDN
- Played via simple Audio element in word tooltip
- Available when `audioUrl` is present in word data

## Settings
Settings stored in localStorage with prefix:
- `settings_notifications` - Daily reminders
- `settings_autoplay` - Auto-play next verse
- `settings_translation` - Show translation
- `settings_tajweed` - Tajweed highlighting
- `settings_wordbyword` - Word-by-word mode
- `settings_fontsize` - Arabic font size
- `settings_reciter` - Default reciter
- `w3quran_sound_enabled` - Hover sounds on/off

## External APIs
- **Al-Quran Cloud** (`api.alquran.cloud/v1`): Verses, audio, translations
- **Quran.com API** (`api.quran.com/api/v4`): Word-by-word, morphology
- **Islamic Network CDN**: Audio files

## Build Commands
```bash
npm run dev      # Development server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## Design Philosophy
- Beautiful glass-morphism bubbles with multiple layers
- Organic fibonacci spiral layout
- Rich hover effects (glow, particles, shimmer)
- Topic-based color coding
- RTL support for Arabic content
- Accessibility: ARIA labels, reduced motion support
- Islamic aesthetic: calming sounds, pleasant animations
- Mobile-first responsive design with touch targets
