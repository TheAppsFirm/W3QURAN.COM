/**
 * JourneySelector.jsx
 * Screen to choose between Umrah and Hajj bird's eye journeys
 */

import React from 'react';
import { Icons } from '../../common/Icons';

const JourneySelector = ({ language, onSelectJourney, onBack, onChangeLanguage }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const text = {
    title: {
      en: 'Choose Your Journey',
      ur: 'اپنا سفر منتخب کریں',
      ar: 'اختر رحلتك',
    },
    subtitle: {
      en: 'Experience the sacred pilgrimage in 3D',
      ur: 'تھری ڈی میں مقدس حج کا تجربہ کریں',
      ar: 'عش تجربة الحج المقدس ثلاثي الأبعاد',
    },
    umrah: {
      title: { en: 'Umrah', ur: 'عمرہ', ar: 'العمرة' },
      subtitle: { en: 'The Lesser Pilgrimage', ur: 'چھوٹا حج', ar: 'الحج الأصغر' },
      steps: { en: '4 Steps', ur: '4 مراحل', ar: '4 خطوات' },
      features: { en: 'Bird\'s Eye • Auto Play • Duas', ur: 'فضائی منظر • آٹو پلے • دعائیں', ar: 'منظر علوي • تشغيل تلقائي • أدعية' },
    },
    hajj: {
      title: { en: 'Hajj', ur: 'حج', ar: 'الحج' },
      subtitle: { en: 'The Greater Pilgrimage', ur: 'بڑا حج', ar: 'الحج الأكبر' },
      steps: { en: '12 Steps', ur: '12 مراحل', ar: '12 خطوة' },
      features: { en: 'Bird\'s Eye • Auto Play • Duas', ur: 'فضائی منظر • آٹو پلے • دعائیں', ar: 'منظر علوي • تشغيل تلقائي • أدعية' },
    },
    features: {
      en: '🦅 Bird\'s Eye View • 🎵 Audio Duas • ▶️ Auto Play Experience',
      ur: '🦅 فضائی منظر • 🎵 آڈیو دعائیں • ▶️ آٹو پلے تجربہ',
      ar: '🦅 منظر من السماء • 🎵 أدعية صوتية • ▶️ تجربة تشغيل تلقائي',
    },
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #422006 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }, (_, i) => (
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

      {/* Title */}
      <div className="relative z-10 text-center mb-8">
        <div className="text-5xl mb-4">🕋</div>
        <h1
          className="text-2xl sm:text-3xl font-bold text-white mb-2"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif" : 'inherit' }}
        >
          {text.title[language]}
        </h1>
        <p
          className="text-white/70 text-sm sm:text-base"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {text.subtitle[language]}
        </p>
      </div>

      {/* Journey Cards */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full max-w-2xl px-4">
        {/* Umrah Card */}
        <button
          onClick={() => onSelectJourney('umrah')}
          className="flex-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-bold text-xs">🦅 3D</span>
          </div>

          <div className="relative text-center text-white">
            <div className="text-5xl mb-4">🕋</div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.umrah.title[language]}
            </h2>
            <p className="text-white/80 text-sm mb-3" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.umrah.subtitle[language]}
            </p>

            <div className="flex justify-center gap-4 text-sm mb-3">
              <span>📍 {text.umrah.steps[language]}</span>
            </div>

            <p className="text-white/70 text-xs">{text.umrah.features[language]}</p>
          </div>

          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <Icons.ChevronRight className="w-5 h-5 text-white" />
          </div>
        </button>

        {/* Hajj Card */}
        <button
          onClick={() => onSelectJourney('hajj')}
          className="flex-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-bold text-xs">🦅 3D</span>
          </div>

          <div className="relative text-center text-white">
            <div className="text-5xl mb-4">🕋</div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.hajj.title[language]}
            </h2>
            <p className="text-white/80 text-sm mb-3" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.hajj.subtitle[language]}
            </p>

            <div className="flex justify-center gap-4 text-sm mb-3">
              <span>📍 {text.hajj.steps[language]}</span>
            </div>

            <p className="text-white/70 text-xs">{text.hajj.features[language]}</p>
          </div>

          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <Icons.ChevronRight className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>

      {/* Features */}
      <div className="relative z-10 mt-8 text-center">
        <p className="text-white/50 text-xs sm:text-sm" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
          {text.features[language]}
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-white/40 text-xs">
        <p>🤲 تَقَبَّلَ اللَّهُ مِنَّا وَمِنكُم</p>
      </div>
    </div>
  );
};

export default JourneySelector;
