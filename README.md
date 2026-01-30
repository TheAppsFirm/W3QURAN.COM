# w3Quran

A beautiful, interactive Quran application built with React, Vite, and Tailwind CSS. Features stunning 3D bubble visualizations for navigating surahs, comprehensive reading tools, and gamification elements.

## Features

- **Interactive Bubble Navigation** - Beautiful 3D glass-morphism bubbles arranged in a golden spiral pattern
- **114 Surahs** - Complete Quran with topic-based color coding
- **30 Juzz View** - Navigate by Juzz (parts)
- **Quran Reader** - Read with Arabic text, transliteration, and translation
- **Memorization Mode** - Hide/reveal verses for memorization practice
- **99 Names of Allah** - Learn the beautiful names with meanings
- **Daily Verses** - Inspirational verses for daily reflection
- **Quiz Mode** - Test your knowledge with multiple difficulty levels
- **Prayer Times** - View prayer times with Qibla compass
- **Statistics** - Track your reading progress and achievements
- **Dark Mode** - Eye-friendly dark theme
- **Responsive Design** - Works on desktop and mobile devices
- **Offline Support** - Cached data for offline access

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **@quranjs/api** - Quran API (optional, with free API fallback)

## Project Structure

```
w3quran/
├── src/
│   ├── components/
│   │   ├── common/              # Shared components
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Icons.jsx        # 50+ SVG icons
│   │   │   ├── Modal.jsx
│   │   │   └── index.js
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.jsx       # Filter controls
│   │   │   ├── FloatingMenu.jsx # Bottom navigation
│   │   │   ├── ZoomSlider.jsx   # Zoom controls
│   │   │   ├── StatsBar.jsx     # User stats display
│   │   │   └── index.js
│   │   ├── bubbles/             # Bubble visualizations
│   │   │   ├── SurahBubble.jsx  # Surah bubble with 3D effects
│   │   │   ├── JuzzBubble.jsx   # Juzz bubble
│   │   │   └── index.js
│   │   ├── views/               # Page views
│   │   │   ├── QuranReaderView.jsx
│   │   │   ├── NamesOfAllahView.jsx
│   │   │   ├── QuizView.jsx
│   │   │   ├── SettingsView.jsx
│   │   │   ├── DailyVerseView.jsx
│   │   │   ├── StatisticsView.jsx
│   │   │   ├── ListenView.jsx
│   │   │   ├── DonateView.jsx
│   │   │   ├── PrayerTimesView.jsx
│   │   │   └── index.js
│   │   └── widgets/
│   │       ├── AnalyticsPanel.jsx
│   │       └── index.js
│   ├── data/                    # Static data
│   │   ├── surahs.js            # All 114 surahs metadata
│   │   ├── palettes.js          # Color palettes & topic icons
│   │   ├── topics.js            # Topic categories
│   │   ├── namesOfAllah.js      # 99 Names of Allah
│   │   ├── dailyVerses.js       # Inspirational verses
│   │   ├── quizQuestions.js     # Quiz content
│   │   └── index.js
│   ├── hooks/                   # Custom React hooks
│   │   ├── useLocalStorage.js   # Persistent state
│   │   ├── useDebounce.js       # Debounce/throttle utilities
│   │   ├── useQuranData.js      # API data fetching
│   │   └── index.js
│   ├── services/api/            # API abstraction layer
│   │   ├── QuranApiInterface.js # API contract/interface
│   │   ├── FreeQuranApi.js      # Free API implementation
│   │   ├── QuranJsApi.js        # @quranjs/api adapter
│   │   └── index.js
│   ├── context/
│   │   └── AppContext.jsx       # Global state management
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Architecture

This project follows **SOLID principles**:

- **Single Responsibility** - Each component has one clear purpose
- **Open/Closed** - Easy to add new features without modifying existing code
- **Liskov Substitution** - API implementations can be swapped seamlessly
- **Interface Segregation** - Small, focused hooks and components
- **Dependency Inversion** - Components depend on abstractions (context, hooks)

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

## API Configuration (Optional)

The app uses a free Quran API by default. To use the official @quranjs/api:

1. Get credentials from [quranjs.com](https://quranjs.com)
2. Create a `.env` file:
```env
VITE_QURANJS_CLIENT_ID=your_client_id
VITE_QURANJS_CLIENT_SECRET=your_client_secret
```

The app will automatically switch to the official API when credentials are provided.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Key Features Explained

### Bubble Visualization
Surahs are displayed as beautiful glass-morphism bubbles arranged in a golden spiral (Fibonacci) pattern. Each bubble's size corresponds to the number of ayahs, and colors represent the surah's primary topic.

### Topic-Based Coloring
Surahs are colored based on their primary topic:
- Prayer (blue)
- Faith (purple)
- Prophets (gold)
- Paradise (green)
- And 20+ more topics

### Memorization Mode
In the Quran Reader, enable memorization mode to hide verses. Click on hidden verses to reveal them - perfect for testing your memorization.

### Gamification
- Earn points for reading
- Track daily streaks
- Unlock achievements
- Level up from Starter to Pro

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
- Arabic fonts: Scheherazade New, Amiri
- Icons: Custom SVG icons

---

Made with love for the Muslim community.
