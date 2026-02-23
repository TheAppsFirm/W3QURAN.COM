/**
 * UmrahGameJourney.jsx
 * Main game flow for Umrah - connects all interactive games
 *
 * Flow: Ihram → Tawaf → Sa'i → Completion
 */

import React, { useState, useCallback, lazy, Suspense } from 'react';

// Lazy load games for code splitting
const IhramGame = lazy(() => import('./IhramGame'));
const TawafGame = lazy(() => import('./TawafGame'));
const SaiGame = lazy(() => import('./SaiGame'));

// Loading component
const GameLoading = ({ language }) => {
  const isRTL = language === 'ar' || language === 'ur';
  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #1E1B4B 100%)',
      }}
    >
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 border-4 border-white/20 border-t-emerald-400 rounded-full animate-spin" />
        <p
          className="text-white/80"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {language === 'ar' ? 'جاري التحميل...' :
           language === 'ur' ? 'لوڈ ہو رہا ہے...' :
           'Loading...'}
        </p>
      </div>
    </div>
  );
};

// Completion celebration screen
const CompletionScreen = ({ language, onFinish, stars }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const text = {
    title: {
      en: 'Umrah Complete! 🎉',
      ur: 'عمرہ مکمل! 🎉',
      ar: 'اكتملت العمرة! 🎉',
    },
    subtitle: {
      en: 'MashaAllah! You have completed the Umrah journey!',
      ur: 'ماشاءاللہ! آپ نے عمرہ کا سفر مکمل کر لیا!',
      ar: 'ما شاء الله! لقد أكملت رحلة العمرة!',
    },
    hadith: {
      arabic: 'الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا',
      en: 'The performance of Umrah is an expiation for the sins committed between it and the previous Umrah.',
      ur: 'ایک عمرہ دوسرے عمرہ تک کے گناہوں کا کفارہ ہے۔',
      source: 'Sahih Bukhari 1773',
    },
    stars: { en: 'Stars Earned', ur: 'ستارے', ar: 'النجوم' },
    done: { en: 'Finish', ur: 'مکمل', ar: 'إنهاء' },
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Confetti effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {['🌟', '⭐', '✨', '🎉', '🎊'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
        {/* Trophy */}
        <div className="text-8xl mb-4 animate-bounce">🏆</div>

        {/* Title */}
        <h1
          className="text-3xl font-bold text-gray-800 mb-2"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {text.title[language]}
        </h1>

        <p
          className="text-gray-600 mb-6"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {text.subtitle[language]}
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={`text-4xl ${i < stars ? 'animate-pulse' : 'opacity-30'}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Hadith */}
        <div className="bg-emerald-50 rounded-2xl p-4 mb-6">
          <p
            className="text-emerald-800 text-lg mb-2 leading-loose"
            style={{ fontFamily: "'Scheherazade New', serif" }}
            dir="rtl"
          >
            {text.hadith.arabic}
          </p>
          <p
            className="text-emerald-600 text-sm"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {text.hadith[language] || text.hadith.en}
          </p>
          <p className="text-emerald-500 text-xs mt-2">
            📚 {text.hadith.source}
          </p>
        </div>

        {/* Finish button */}
        <button
          onClick={onFinish}
          className="w-full py-4 bg-emerald-500 text-white font-bold text-lg rounded-full hover:bg-emerald-600 transition-all shadow-lg"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {text.done[language]} ✓
        </button>
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </div>
  );
};

// Game progress map
const GameProgressMap = ({ currentGame, language, onSelectGame }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const games = [
    { id: 'ihram', emoji: '🧕', name: { en: 'Ihram', ur: 'احرام', ar: 'الإحرام' } },
    { id: 'tawaf', emoji: '🕋', name: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' } },
    { id: 'sai', emoji: '🏔️', name: { en: "Sa'i", ur: 'سعی', ar: 'السعي' } },
    { id: 'complete', emoji: '🎉', name: { en: 'Done!', ur: 'مکمل!', ar: 'تم!' } },
  ];

  const gameOrder = ['ihram', 'tawaf', 'sai', 'complete'];
  const currentIndex = gameOrder.indexOf(currentGame);

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #1E1B4B 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <span className="text-5xl mb-4 block">🕌</span>
        <h1
          className="text-2xl font-bold text-white"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {language === 'ar' ? 'رحلة العمرة' :
           language === 'ur' ? 'عمرہ کا سفر' :
           'Umrah Journey'}
        </h1>
      </div>

      {/* Progress map */}
      <div className="flex items-center gap-2 mb-8">
        {games.map((game, i) => (
          <React.Fragment key={game.id}>
            <button
              onClick={() => i <= currentIndex && onSelectGame(game.id)}
              disabled={i > currentIndex}
              className={`
                w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all
                ${i < currentIndex
                  ? 'bg-emerald-500 text-white scale-100'
                  : i === currentIndex
                    ? 'bg-amber-500 text-white scale-110 ring-4 ring-amber-300/50 animate-pulse'
                    : 'bg-white/20 text-white/50 scale-90'
                }
              `}
            >
              <span className="text-2xl">{i < currentIndex ? '✅' : game.emoji}</span>
            </button>
            {i < games.length - 1 && (
              <div
                className={`w-8 h-1 rounded-full ${
                  i < currentIndex ? 'bg-emerald-400' : 'bg-white/20'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Current game info */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm w-full text-center">
        <span className="text-5xl mb-4 block">
          {games[currentIndex]?.emoji || '🕋'}
        </span>
        <h2
          className="text-xl font-bold text-white mb-2"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {games[currentIndex]?.name[language] || 'Umrah'}
        </h2>
        <p
          className="text-white/70 mb-4 text-sm"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {language === 'ar' ? `الخطوة ${currentIndex + 1} من 3` :
           language === 'ur' ? `مرحلہ ${currentIndex + 1} از 3` :
           `Step ${currentIndex + 1} of 3`}
        </p>
        <button
          onClick={() => onSelectGame(currentGame)}
          className="w-full py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {language === 'ar' ? 'ابدأ' :
           language === 'ur' ? 'شروع کریں' :
           'Start'} →
        </button>
      </div>
    </div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const UmrahGameJourney = ({ language = 'en', onBack }) => {
  const [currentGame, setCurrentGame] = useState('ihram');
  const [showMap, setShowMap] = useState(true);
  const [stars, setStars] = useState(0);

  // Game flow
  const handleGameComplete = useCallback((game) => {
    setStars((s) => s + 1); // Earn a star

    if (game === 'ihram') {
      setCurrentGame('tawaf');
      setShowMap(true);
    } else if (game === 'tawaf') {
      setCurrentGame('sai');
      setShowMap(true);
    } else if (game === 'sai') {
      setCurrentGame('complete');
      setShowMap(false);
    }
  }, []);

  // Start selected game
  const handleSelectGame = useCallback((game) => {
    if (game !== 'complete') {
      setShowMap(false);
    }
  }, []);

  // Handle back from game
  const handleGameBack = useCallback(() => {
    setShowMap(true);
  }, []);

  // Render current screen
  if (currentGame === 'complete') {
    return (
      <CompletionScreen
        language={language}
        stars={stars}
        onFinish={onBack}
      />
    );
  }

  if (showMap) {
    return (
      <div>
        {/* Back button */}
        <button
          onClick={onBack}
          className="fixed top-4 left-4 z-[10001] p-3 rounded-full bg-white/20 backdrop-blur-sm text-white"
        >
          ←
        </button>

        <GameProgressMap
          currentGame={currentGame}
          language={language}
          onSelectGame={handleSelectGame}
        />
      </div>
    );
  }

  return (
    <Suspense fallback={<GameLoading language={language} />}>
      {currentGame === 'ihram' && (
        <IhramGame
          language={language}
          onComplete={() => handleGameComplete('ihram')}
          onBack={handleGameBack}
        />
      )}
      {currentGame === 'tawaf' && (
        <TawafGame
          language={language}
          onComplete={() => handleGameComplete('tawaf')}
          onBack={handleGameBack}
        />
      )}
      {currentGame === 'sai' && (
        <SaiGame
          language={language}
          onComplete={() => handleGameComplete('sai')}
          onBack={handleGameBack}
        />
      )}
    </Suspense>
  );
};

export default UmrahGameJourney;
