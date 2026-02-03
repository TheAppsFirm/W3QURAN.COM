# w3Quran - Project Context for Claude

## Project Overview
w3Quran is an innovative, interactive Quran application with a unique bubble-themed UI. Built with React + Vite + Tailwind CSS, it features beautiful 3D bubble visualizations, glassmorphism design, and a comprehensive reading experience with features no other Quran app has.

## Tech Stack
- **React 18** with functional components and hooks
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **No external state management** - uses React useState/useContext and custom hooks
- **LocalStorage** for persistence via `useLocalStorage` hook
- **IndexedDB** for offline storage via `offlineStorage.js`
- **Canvas API** for image generation (Verse Art)
- **Web Audio API** for sounds

## APIs Used
- **Al Quran Cloud API** (`api.alquran.cloud/v1`): Verses, audio, translations
- **Quran.com API v4** (`api.quran.com/api/v4`): Word-by-word (English only), morphology
- **Audio CDN**: `audio.qurancdn.com` for word pronunciation

## Project Structure
```
src/
├── components/
│   ├── bubbles/              # Bubble visualizations
│   │   ├── SurahBubble.jsx   # Individual surah bubble
│   │   ├── JuzzBubble.jsx    # Individual juzz bubble
│   │   ├── StyledBubble.jsx  # Reusable styled bubble
│   │   └── BubbleLayouts.jsx # Different layout patterns
│   ├── common/               # Shared components (MAIN FEATURES HERE)
│   │   ├── BubbleReaderOverlay.jsx  # Main reader (~2500 lines)
│   │   ├── Icons.jsx                # 80+ SVG icons
│   │   ├── Logo.jsx                 # w3Quran logo
│   │   ├── VerseArtGenerator.jsx    # Shareable verse images
│   │   ├── EmotionalTracker.jsx     # Mood tracking
│   │   ├── AyahConnectionMap.jsx    # Visual Quran explorer
│   │   ├── ScholarVideoSync.jsx     # Video sync feature
│   │   ├── YouTubePlayer.jsx        # Embedded player
│   │   ├── BubbleOverlay.jsx        # Reusable modal
│   │   ├── ProgressDashboard.jsx    # Reading progress
│   │   ├── HifzMode.jsx             # Memorization
│   │   ├── SearchPanel.jsx          # Search
│   │   └── ...
│   ├── layout/               # Layout components
│   │   ├── Header.jsx        # Filter controls
│   │   ├── FloatingMenu.jsx  # Bottom navigation
│   │   ├── ZoomSlider.jsx    # Dual zoom controls
│   │   └── StatsBar.jsx
│   ├── views/                # Full-page views
│   │   ├── QuranReaderView.jsx
│   │   ├── NamesOfAllahView.jsx
│   │   ├── QuizView.jsx
│   │   ├── SettingsView.jsx
│   │   ├── DailyVerseView.jsx
│   │   ├── StatisticsView.jsx
│   │   ├── ListenView.jsx
│   │   └── PrayerTimesView.jsx
│   └── widgets/
│       └── AnalyticsPanel.jsx
├── data/
│   ├── index.js              # Central data exports
│   ├── surahs.js             # SURAHS array + JUZZ + helpers
│   ├── wordMeanings.js       # Multi-language word meanings (LOCAL)
│   ├── youtubeVideos.js      # Scholar videos + VERSE_SYNCED_VIDEOS
│   ├── ayahConnections.js    # QURAN_THEMES + QURAN_STORIES
│   ├── tafseerData.js        # Tafseer sources + API
│   ├── palettes.js           # Color palettes per surah
│   ├── progressTracker.js    # Reading progress
│   ├── hifzTracker.js        # Memorization spaced repetition
│   ├── offlineStorage.js     # IndexedDB caching
│   ├── searchIndex.js        # Search functionality
│   └── quizQuestions.js      # Quiz data
├── hooks/
│   ├── index.js
│   ├── useLocalStorage.js    # Persistent state
│   ├── useQuranAPI.js        # Main API hook + useMultilingualWords
│   └── useAudioPlayer.js     # Audio playback
├── utils/
│   ├── soundUtils.js         # Hover sounds
│   ├── shareUtils.js         # Sharing functionality
│   ├── trackingUtils.js      # Analytics
│   └── retryUtils.js         # Fetch with retry
├── App.jsx                   # Main app with view routing
├── main.jsx                  # Entry point
└── index.css                 # Global styles + animations
```

---

## INNOVATIVE FEATURES (Unique to w3Quran)

### 1. Verse Art Generator (`VerseArtGenerator.jsx`)
Creates beautiful shareable verse images using Canvas API.

**Features:**
- **Calligraphy Styles**: Scheherazade, Amiri, Lateef, Noto Naskh, Rakkas
- **Backgrounds**: 11 gradient templates (Midnight, Ocean, Forest, Sunset, etc.)
- **Export Sizes**: Instagram Post/Story, WhatsApp Status, Twitter, Facebook, Desktop
- **Frame Styles**: None, Simple, Ornate, Modern, Classic
- **Watermark**: Optional w3Quran branding

**Access:** Share panel > "Create Beautiful Art" button

**Code Pattern:**
```javascript
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
// Draw gradient background, Arabic text, translation, decorations
canvas.toBlob(blob => { /* download or share */ });
```

---

### 2. Emotional Journey Tracker (`EmotionalTracker.jsx`)
Tracks reading mood and provides personalized surah suggestions.

**Mood States:**
| Mood | Arabic | Color | Icon |
|------|--------|-------|------|
| Peaceful | سكينة | #06B6D4 | Cloud |
| Motivated | همة | #F59E0B | Zap |
| Reflective | تأمل | #8B5CF6 | Meh |
| Moved | تأثر | #EC4899 | Smile |
| Grateful | شكر | #10B981 | Smile |
| Hopeful | أمل | #3B82F6 | Cloud |

**Features:**
- Auto-prompts after 1+ minute reading (MoodEntryForm)
- Tracks streak, weekly sessions, reading time
- Personalized surah suggestions based on mood
- Mood history visualization
- LocalStorage: `w3quran_emotional_tracker`

**Access:** Top bar "Mood" button (cyan, Activity icon)

**Surah Recommendations by Mood:**
```javascript
MOOD_SURAH_RECOMMENDATIONS = {
  anxious: [93, 94, 55, 20, 35],  // Ad-Duha, Ash-Sharh, Ar-Rahman
  sad: [93, 94, 12, 65, 3],       // Yusuf for hope
  grateful: [55, 14, 16, 31, 35], // Ar-Rahman, Ibrahim
  // ...
}
```

---

### 3. Ayah Connection Map (`AyahConnectionMap.jsx`)
Visual explorer for Quranic themes and prophet stories with cross-surah navigation.

**Themes (10):**
| Theme | Arabic | Color | Example Verses |
|-------|--------|-------|----------------|
| Sabr (Patience) | الصبر | #06B6D4 | 2:45, 2:153, 3:200 |
| Tawakkul (Trust) | التوكل | #8B5CF6 | 3:159, 65:3, 14:12 |
| Shukr (Gratitude) | الشكر | #10B981 | 14:7, 31:12, 2:152 |
| Tawbah (Repentance) | التوبة | #F59E0B | 39:53, 4:110, 66:8 |
| Dhikr (Remembrance) | الذكر | #EC4899 | 13:28, 33:41, 2:152 |
| Ihsan (Excellence) | الإحسان | #6366F1 | 16:90, 55:60, 2:195 |
| Taqwa (God-consciousness) | التقوى | #14B8A6 | 2:197, 3:102, 65:2 |
| Rizq (Provision) | الرزق | #22C55E | 65:3, 29:60, 11:6 |
| Hidayah (Guidance) | الهداية | #EAB308 | 1:6, 2:2, 6:161 |
| Rahma (Mercy) | الرحمة | #F43F5E | 21:107, 6:54, 7:156 |

**Prophet Stories (6):**
- Musa (Moses) - 8 key verses
- Ibrahim (Abraham) - 7 key verses
- Yusuf (Joseph) - 6 key verses
- Isa (Jesus) - 5 key verses
- Nuh (Noah) - 5 key verses
- Adam - 4 key verses

**Access:** Top bar "Map" button (purple, Network icon)

**Data File:** `src/data/ayahConnections.js`

---

### 4. Scholar Video Sync (`ScholarVideoSync.jsx`)
YouTube videos synced with verse timestamps for guided learning.

**Features:**
- Verse-timestamp synchronization
- Mini player mode (watch while reading)
- Scholar profiles with verification badges
- Jump to verse timestamp
- Popular scholars search

**Supported Scholars:**
| Scholar | Specialty | Language |
|---------|-----------|----------|
| Nouman Ali Khan | Arabic Linguistic Analysis | English |
| Mufti Menk | General Tafseer | English |
| Dr. Omar Suleiman | Spiritual Insights | English |
| Dr. Yasir Qadhi | Academic Tafseer | English |
| Dr. Israr Ahmed | Urdu Tafseer | Urdu |
| Maulana Tariq Jameel | Spiritual Lectures | Urdu |

**Access:** Top bar "Sync" button (pink, Link icon)

**Data Structure (`youtubeVideos.js`):**
```javascript
VERSE_SYNCED_VIDEOS = {
  1: [{ // Al-Fatiha
    id: 'Al4OE0sE3kI',
    title: 'Word-by-Word Analysis',
    scholar: 'nouman-ali-khan',
    timestamps: {
      1: 120,  // verse 1 at 2:00
      2: 480,  // verse 2 at 8:00
      // ...
    }
  }]
}
```

**Surahs with Video Timestamps:** 1, 36, 55, 67, 112 (sample data, expandable)

---

## TOP FEATURE BAR (8 Buttons)

Located at top center of BubbleReaderOverlay:

| # | Button | Icon | Color | Feature | Side |
|---|--------|------|-------|---------|------|
| 1 | Tafseer | BookOpen | #8B5CF6 | Right panel tafseer | right |
| 2 | Videos | Video | #EF4444 | YouTube scholar search | left |
| 3 | Memorize | Brain | #F59E0B | Word hiding levels | left |
| 4 | Bookmark | Bookmark | #EC4899 | Save bookmarks | left |
| 5 | Share | Share | #10B981 | Share + Art Generator | left |
| 6 | Mood | Activity | #06B6D4 | Emotional tracker | special |
| 7 | Map | Network | #A855F7 | Connection map | special |
| 8 | Sync | Link | #F472B6 | Scholar video sync | special |

**Code Location:** `BubbleReaderOverlay.jsx` line ~1800

---

## WORD-BY-WORD SYSTEM

### API Limitation
**Important:** Quran.com API only provides English word translations. For Urdu/other languages, we must use local data.

### Local Data Coverage (`wordMeanings.js`)
Only 4 surahs have Urdu word meanings:
- Surah 1 (Al-Fatiha)
- Surah 112 (Al-Ikhlas)
- Surah 113 (Al-Falaq)
- Surah 114 (An-Nas)

**110 surahs are MISSING Urdu word-by-word data.**

### Current Behavior
1. Default translation: `ur.jalandhry` (Urdu)
2. When Urdu word data unavailable: Shows English with indicator
3. Indicator: "Word meanings shown in **English** — Urdu not available for this surah"

### Hook: `useMultilingualWords`
```javascript
const {
  wordsMap,           // { verseNum: [{ arabic, meaning, transliteration, audioUrl }] }
  loading,
  isFallback,         // true if showing English instead of requested language
  userLanguage        // user's requested language (ur, en, etc.)
} = useMultilingualWords(surahId, translationId);
```

### Word Data Structure
```javascript
WORD_MEANINGS = {
  1: { // Surah Al-Fatiha
    1: [ // Ayah 1
      { ar: 'بِسْمِ', en: 'In the name', ur: 'نام سے', transliteration: 'bismi' },
      { ar: 'اللَّهِ', en: 'of Allah', ur: 'اللہ کے', transliteration: 'Allahi' },
      // ...
    ]
  }
}
```

---

## CORE READER FEATURES (BubbleReaderOverlay.jsx)

### Reading Modes
- **Normal**: Standard verse display
- **Tajweed Mode**: Color-coded tajweed rules
- **Word-by-Word Mode**: Tap words for meanings + audio
- **Memorization Mode**: Progressive word hiding (4 levels: 25%, 50%, 75%, 100%)

### Audio Features
- Multiple reciters (Al-Afasy, Abdul Basit, etc.)
- Verse repeat / Surah repeat modes
- Auto-scroll following current verse
- Individual word audio playback

### Panels
- **Tafseer** (Right): Multiple sources per language
- **Videos** (Left): YouTube scholar search
- **Memorize** (Left): Hide level controls
- **Bookmark** (Left): Save/manage bookmarks
- **Share** (Left): Share verse + Art Generator

### Selection Mode
- Multi-select verses for batch sharing
- Selection indicator with verse numbers

---

## DATA STRUCTURES

### Surah Object (`surahs.js`)
```javascript
{
  id: 1,
  name: 'Al-Fatiha',
  arabic: 'الفاتحة',
  ayahs: 7,
  type: 'Makki',
  meaning: 'The Opening',
  chronOrder: 5,
  topics: ['prayer', 'faith', 'guidance']
}
```

### Quran Themes (`ayahConnections.js`)
```javascript
QURAN_THEMES = {
  sabr: {
    name: 'Patience (Sabr)',
    nameAr: 'الصبر',
    color: '#06B6D4',
    description: 'Verses about patience...',
    verses: [
      { surah: 2, ayah: 45, preview: 'واستعينوا بالصبر...' },
      // ...
    ]
  }
}
```

### Palettes (`palettes.js`)
Each surah has a unique 3-color gradient palette (10 palettes cycling):
```javascript
PALETTES = [
  { id: 0, name: 'Emerald', colors: ['#10B981', '#059669', '#047857'] },
  { id: 1, name: 'Sapphire', colors: ['#3B82F6', '#2563EB', '#1D4ED8'] },
  // ...
]
```

---

## STYLING & DESIGN

### Design Philosophy
- Beautiful glassmorphism bubbles with multiple layers
- Organic fibonacci spiral layout for surahs
- Rich hover effects (glow, particles, shimmer)
- RTL support for Arabic content
- Mobile-first responsive design

### Key CSS Animations (`index.css`)
- `gentleFloat` - Subtle vertical floating
- `spinSlow` - Slow rotation for rings
- `floatBubble` - Bubble float effect
- `shimmerWave` - Light sweep
- `bubblePop` - Pop-in animation
- `slideDown` / `slideUp` - Panel animations
- `scaleIn` - Modal entrance

### Fonts
- **Arabic**: Scheherazade New (primary), Amiri, Lateef, Noto Naskh Arabic
- **UI**: System fonts via Tailwind

---

## SETTINGS (localStorage)

| Key | Description | Default |
|-----|-------------|---------|
| `reader_translation` | Translation ID | `ur.jalandhry` |
| `reader_reciter` | Reciter ID | `ar.alafasy` |
| `reader_fontsize` | Font size | `medium` |
| `reader_tajweed` | Tajweed mode | `false` |
| `reader_wbw` | Word-by-word mode | `false` |
| `reader_show_translation` | Show translation | `true` |
| `reader_autoscroll` | Auto-scroll | `true` |
| `reader_repeat` | Repeat mode | `none` |
| `w3quran_sound_enabled` | Hover sounds | `true` |
| `w3quran_emotional_tracker` | Mood data | `{}` |

---

## COMMON TASKS

### Add New Feature Button
1. Add state: `const [showFeature, setShowFeature] = useState(false);`
2. Add to button array (~line 1800 in BubbleReaderOverlay.jsx):
   ```javascript
   { id: 'featureid', icon: Icons.IconName, color: '#HEX', label: 'Label', side: 'special' }
   ```
3. Add handler in `handleFeatureSelect`:
   ```javascript
   } else if (featureId === 'featureid') {
     setShowFeature(true);
   }
   ```
4. Render component with `isVisible={showFeature}`

### Add New Icon
1. Add to `Icons.jsx`:
   ```javascript
   export const NewIcon = (props) => (
     <Icon {...props}>
       <path d="..." />
     </Icon>
   );
   ```
2. Add to Icons export object: `NewIcon: NewIcon,`

### Add Word Meanings for New Surah
Add to `wordMeanings.js`:
```javascript
WORD_MEANINGS[surahNumber] = {
  1: [
    { ar: 'Arabic', en: 'English', ur: 'Urdu', transliteration: 'trans' },
    // ...
  ],
  // more ayahs...
}
```

### Add Video Timestamps
Add to `youtubeVideos.js` in `VERSE_SYNCED_VIDEOS`:
```javascript
surahNumber: [{
  id: 'YouTubeVideoId',
  title: 'Video Title',
  scholar: 'scholar-id',
  duration: 'HH:MM:SS',
  timestamps: { 1: seconds, 2: seconds, ... }
}]
```

---

## DEVELOPMENT

```bash
# Install dependencies
npm install

# Run dev server (default: localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## FUTURE FEATURES TO ADD

1. **Voice Notes Journal** - Record personal audio reflections on verses
2. **Social Reading Rooms** - Real-time group reading sessions
3. **AR Experience** - Augmented reality verse display (mobile)
4. **Accessibility Mode** - Dyslexia-friendly font, high contrast, larger touch targets
5. **Guided Study Plans** - 30-day challenges, structured learning paths
6. **More Urdu Word Data** - Expand coverage beyond 4 surahs
7. **More Video Timestamps** - Add timestamps for more surahs

---

## IMPORTANT FILES REFERENCE

| Task | File(s) |
|------|---------|
| Main reader UI | `BubbleReaderOverlay.jsx` |
| Add icons | `Icons.jsx` |
| Add translations | `useQuranAPI.js` (TRANSLATIONS) |
| Word meanings | `wordMeanings.js` |
| Video timestamps | `youtubeVideos.js` |
| Themes/stories | `ayahConnections.js` |
| Color palettes | `palettes.js` |
| Surah data | `surahs.js` |
| Tafseer sources | `tafseerData.js` |
