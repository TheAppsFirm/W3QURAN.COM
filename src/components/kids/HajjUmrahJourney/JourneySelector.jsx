/**
 * JourneySelector.jsx
 * Screen to choose between Umrah (FREE) and Hajj (PREMIUM)
 */

import React, { useState } from 'react';
import { Icons } from '../../common/Icons';
import { useAuth } from '../../../contexts/AuthContext';
import KidsPremiumGate from '../KidsPremiumGate';

const JourneySelector = ({ language, onSelectJourney, onBack, onChangeLanguage }) => {
  const { user } = useAuth();
  const [showPremiumGate, setShowPremiumGate] = useState(false);

  const isRTL = language === 'ar' || language === 'ur';

  // Localized text
  const text = {
    title: {
      en: 'Choose Your Journey',
      ur: 'اپنا سفر منتخب کریں',
      ar: 'اختر رحلتك',
    },
    subtitle: {
      en: 'Learn the sacred pilgrimage step by step',
      ur: 'قدم بہ قدم مقدس حج سیکھیں',
      ar: 'تعلم الحج المقدس خطوة بخطوة',
    },
    umrah: {
      title: { en: 'Umrah', ur: 'عمرہ', ar: 'العمرة' },
      subtitle: { en: 'The Lesser Pilgrimage', ur: 'چھوٹا حج', ar: 'الحج الأصغر' },
      steps: { en: '5 Steps', ur: '5 مراحل', ar: '5 خطوات' },
      time: { en: 'Few Hours', ur: 'چند گھنٹے', ar: 'بضع ساعات' },
      free: { en: 'FREE', ur: 'مفت', ar: 'مجاني' },
    },
    hajj: {
      title: { en: 'Hajj', ur: 'حج', ar: 'الحج' },
      subtitle: { en: 'The Greater Pilgrimage', ur: 'بڑا حج', ar: 'الحج الأكبر' },
      steps: { en: '14 Steps', ur: '14 مراحل', ar: '14 خطوة' },
      time: { en: '5 Days', ur: '5 دن', ar: '5 أيام' },
      premium: { en: 'PREMIUM', ur: 'پریمیم', ar: 'مميز' },
    },
    features: {
      en: 'Interactive 3D scenes • Audio narration • Authentic references',
      ur: 'تھری ڈی مناظر • آڈیو • مستند حوالے',
      ar: 'مشاهد ثلاثية الأبعاد • سرد صوتي • مراجع موثوقة',
    },
  };

  const handleHajjClick = () => {
    // Check if user has premium access
    if (user?.isPremium) {
      onSelectJourney('hajj');
    } else {
      setShowPremiumGate(true);
    }
  };

  // Premium gate modal
  if (showPremiumGate) {
    return (
      <KidsPremiumGate
        onClose={() => setShowPremiumGate(false)}
        featureName="Hajj Journey"
        featureDescription="Learn all 14 steps of Hajj with 3D animations"
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #422006 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              opacity: 0.3 + Math.random() * 0.5,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <button
          onClick={onBack}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <Icons.ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onChangeLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <span className="text-lg">
            {language === 'en' ? '🇬🇧' : language === 'ur' ? '🇵🇰' : '🇸🇦'}
          </span>
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center mb-8">
        <div className="text-5xl mb-4">🕋</div>
        <h1
          className="text-2xl sm:text-3xl font-bold text-white mb-2"
          style={{
            fontFamily: isRTL
              ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif"
              : 'inherit',
          }}
        >
          {text.title[language]}
        </h1>
        <p
          className="text-white/70 text-sm sm:text-base"
          style={{
            fontFamily: isRTL
              ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif"
              : 'inherit',
          }}
        >
          {text.subtitle[language]}
        </p>
      </div>

      {/* Journey cards */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full max-w-2xl px-4">
        {/* Umrah Card - FREE */}
        <button
          onClick={() => onSelectJourney('umrah')}
          className="flex-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 shadow-2xl hover:scale-105 transition-all duration-300"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* FREE badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
            <span
              className="text-white font-bold text-xs"
              style={{
                fontFamily: isRTL
                  ? "'Noto Nastaliq Urdu', serif"
                  : 'inherit',
              }}
            >
              {text.umrah.free[language]} ✓
            </span>
          </div>

          {/* Content */}
          <div className="relative text-center text-white">
            <div className="text-5xl mb-4">🕌</div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{
                fontFamily: isRTL
                  ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif"
                  : 'inherit',
              }}
            >
              {text.umrah.title[language]}
            </h2>
            <p
              className="text-white/80 text-sm mb-4"
              style={{
                fontFamily: isRTL
                  ? "'Noto Nastaliq Urdu', serif"
                  : 'inherit',
              }}
            >
              {text.umrah.subtitle[language]}
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>{text.umrah.steps[language]}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{text.umrah.time[language]}</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <Icons.ChevronRight className="w-5 h-5 text-white" />
          </div>
        </button>

        {/* Hajj Card - PREMIUM */}
        <button
          onClick={handleHajjClick}
          className="flex-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 shadow-2xl hover:scale-105 transition-all duration-300"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* PREMIUM badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-1">
            <span className="text-yellow-200">👑</span>
            <span
              className="text-white font-bold text-xs"
              style={{
                fontFamily: isRTL
                  ? "'Noto Nastaliq Urdu', serif"
                  : 'inherit',
              }}
            >
              {text.hajj.premium[language]}
            </span>
          </div>

          {/* Lock icon for non-premium users */}
          {!user?.isPremium && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center">
                <Icons.Lock className="w-8 h-8 text-white" />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="relative text-center text-white">
            <div className="text-5xl mb-4">🕋</div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{
                fontFamily: isRTL
                  ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif"
                  : 'inherit',
              }}
            >
              {text.hajj.title[language]}
            </h2>
            <p
              className="text-white/80 text-sm mb-4"
              style={{
                fontFamily: isRTL
                  ? "'Noto Nastaliq Urdu', serif"
                  : 'inherit',
              }}
            >
              {text.hajj.subtitle[language]}
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>{text.hajj.steps[language]}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📅</span>
                <span>{text.hajj.time[language]}</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <Icons.ChevronRight className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>

      {/* Features */}
      <div className="relative z-10 mt-8 text-center">
        <p
          className="text-white/50 text-xs sm:text-sm"
          style={{
            fontFamily: isRTL
              ? "'Noto Nastaliq Urdu', serif"
              : 'inherit',
          }}
        >
          {text.features[language]}
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-white/40 text-xs">
        <p>🤲 تَقَبَّلَ اللَّهُ مِنَّا وَمِنكُم</p>
      </div>

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default JourneySelector;
