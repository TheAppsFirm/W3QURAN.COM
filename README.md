# w3Quran

A beautiful, interactive Quran application built with React, Vite, and Tailwind CSS. Features stunning 3D bubble visualizations for navigating surahs, comprehensive reading tools, word-by-word learning, Tajweed support, and gamification elements.

## Features

### Navigation & Visualization
- **Interactive Bubble Navigation** - Beautiful 3D glass-morphism bubbles arranged in a golden spiral pattern
- **114 Surahs** - Complete Quran with topic-based color coding
- **30 Juzz View** - Navigate by Juzz (parts)
- **Hover Sounds** - Calming, Islamic-inspired sounds on bubble hover (toggleable in settings)

### Reading & Learning
- **Quran Reader** - Read with Arabic text, transliteration, and translation
- **Word-by-Word Mode** - Tap any word to see its meaning and transliteration
- **Single Word Audio** - Play individual word pronunciation for Tajweed learning
- **Multi-language Support** - Word meanings in English, Urdu, and more
- **Tajweed Highlighting** - Color-coded tajweed rules for proper recitation
- **Memorization Mode** - Hide/reveal words and verses for memorization practice

### Additional Features
- **99 Names of Allah** - Learn the beautiful names with meanings
- **Daily Verses** - Inspirational verses for daily reflection
- **Quiz Mode** - Test your knowledge with multiple difficulty levels
- **Prayer Times** - View prayer times with Qibla compass
- **Statistics** - Track your reading progress and achievements
- **Tafseer** - Access verse interpretations and explanations
- **Search** - Find verses by text or topic
- **Bookmarks** - Save your favorite verses
- **Share** - Share verses as text or beautiful images

### Technical Features
- **Dark Mode** - Eye-friendly dark theme (default)
- **Responsive Design** - Works on desktop and mobile devices
- **PWA Support** - Install as an app with offline support
- **Offline Mode** - Cached data for reading without internet
- **Accessibility** - ARIA labels, reduced motion support

## Tech Stack

- **React 18** - UI library with functional components and hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Web Audio API** - For hover sounds
- **IndexedDB** - For offline data storage
- **Service Worker** - For PWA offline caching

## Project Structure

```
w3quran/
├── src/
│   ├── components/
│   │   ├── common/              # Shared components
│   │   │   ├── Logo.jsx         # w3Quran logo component
│   │   │   ├── Icons.jsx        # 50+ SVG icons
│   │   │   ├── BubbleOverlay.jsx    # Reusable modal
│   │   │   ├── BubbleReaderOverlay.jsx # Full reader
│   │   │   └── ErrorBoundary.jsx
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.jsx       # Filter controls
│   │   │   ├── FloatingMenu.jsx # Bottom navigation
│   │   │   └── ZoomSlider.jsx   # Zoom controls
│   │   ├── bubbles/             # Bubble visualizations
│   │   │   ├── SurahBubble.jsx  # Surah bubble with 3D effects
│   │   │   └── JuzzBubble.jsx   # Juzz bubble
│   │   └── views/               # Page views
│   │       ├── QuranReaderView.jsx
│   │       ├── NamesOfAllahView.jsx
│   │       ├── QuizView.jsx
│   │       ├── SettingsView.jsx
│   │       ├── DailyVerseView.jsx
│   │       ├── StatisticsView.jsx
│   │       ├── ListenView.jsx
│   │       ├── DonateView.jsx
│   │       └── PrayerTimesView.jsx
│   ├── data/                    # Static data & storage
│   │   ├── surahs.js            # All 114 surahs metadata
│   │   ├── wordMeanings.js      # Multi-language word meanings
│   │   ├── offlineStorage.js    # IndexedDB storage
│   │   └── progressTracker.js   # Reading progress
│   ├── hooks/                   # Custom React hooks
│   │   ├── useLocalStorage.js   # Persistent state
│   │   ├── useQuranAPI.js       # API with word-by-word
│   │   └── useAudioPlayer.js    # Audio playback
│   ├── services/api/            # API abstraction layer
│   │   ├── FreeQuranApi.js      # Al-Quran Cloud API
│   │   └── index.js
│   ├── utils/                   # Utility functions
│   │   ├── soundUtils.js        # Hover sounds
│   │   ├── retryUtils.js        # API retry logic
│   │   └── shareUtils.js        # Sharing utilities
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & animations
├── public/
│   ├── sw.js                    # Service Worker
│   ├── icon-192.svg             # PWA icon
│   └── icon-512.svg             # PWA icon
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── CLAUDE.md                    # Claude AI context file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/w3quran.git
cd w3quran
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Settings

The app provides various customization options:

| Setting | Description |
|---------|-------------|
| Dark Mode | Toggle dark/light theme |
| Font Size | Adjust Arabic text size (Small/Medium/Large/XLarge) |
| Default Reciter | Choose preferred Qari |
| Hover Sounds | Enable/disable calming hover sounds |
| Auto-play Audio | Automatically play next verse |
| Show Translation | Display English translation |
| Tajweed Highlighting | Color-code tajweed rules |
| Word-by-Word Mode | Enable tap-to-reveal word meanings |
| Notifications | Daily verse and prayer reminders |

## Key Features Explained

### Bubble Visualization
Surahs are displayed as beautiful glass-morphism bubbles arranged in a golden spiral (Fibonacci) pattern. Each bubble's size corresponds to the number of ayahs, and colors represent the surah's primary topic.

### Word-by-Word Learning
Enable Word-by-Word mode in settings, then tap any Arabic word to see:
- Word meaning in your selected language
- Transliteration
- Play button for word audio (great for Tajweed practice)

### Tajweed Highlighting
When enabled, Arabic text is color-coded according to Tajweed rules:
- Blue shades - Madd (prolongation)
- Green - Ghunnah (nasalization)
- Red - Qalqalah (echo sound)
- And more...

### Hover Sounds
The app features calming, Islamic-inspired hover sounds when navigating bubbles. These can be toggled on/off in the Audio section of Settings.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Quran data from [Al-Quran Cloud API](https://alquran.cloud/api)
- Word translations from [Quran.com API](https://quran.com)
- Arabic fonts: Scheherazade New, Amiri
- Icons: Custom SVG icons

---

Made with love for the Muslim community.
