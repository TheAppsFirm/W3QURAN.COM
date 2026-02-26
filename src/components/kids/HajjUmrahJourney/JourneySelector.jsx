/**
 * JourneySelector.jsx
 * Screen to choose between Umrah and Hajj bird's eye journeys
 */

import React from 'react';
import { Icons } from '../../common/Icons';
import { useTranslation } from '../../../contexts/LocaleContext';

const JourneySelector = ({ language, onSelectJourney, onBack, onChangeLanguage, hajjLocked = false }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const { t } = useTranslation();

  const text = {
    title: t('hajjUmrah.chooseJourney'),
    subtitle: t('hajjUmrah.experienceIn3D'),
    umrah: {
      title: t('hajjUmrah.umrah'),
      subtitle: t('hajjUmrah.lesserPilgrimage'),
      steps: t('hajjUmrah.steps5'),
      badge: t('hajjUmrah.free'),
      features: `${t('hajjUmrah.birdsEye')} • ${t('hajjUmrah.autoPlay')} • ${t('hajjUmrah.duas')}`,
    },
    hajj: {
      title: t('hajjUmrah.hajj'),
      subtitle: t('hajjUmrah.greaterPilgrimage'),
      steps: t('hajjUmrah.steps12'),
      badge: t('hajjUmrah.premiumBadge'),
      features: `${t('hajjUmrah.birdsEye')} • ${t('hajjUmrah.autoPlay')} • ${t('hajjUmrah.duas')}`,
    },
    features: t('hajjUmrah.features'),
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
          {text.title}
        </h1>
        <p
          className="text-white/70 text-sm sm:text-base"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {text.subtitle}
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

          <div className="absolute top-4 right-4 flex gap-2">
            <span className="px-3 py-1 bg-emerald-300/90 backdrop-blur-sm rounded-full text-xs font-bold text-emerald-900">
              {text.umrah.badge}
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-xs">🦅 3D</span>
          </div>

          <div className="relative text-center text-white">
            <div className="text-5xl mb-4">🕋</div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.umrah.title}
            </h2>
            <p className="text-white/80 text-sm mb-3" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.umrah.subtitle}
            </p>

            <div className="flex justify-center gap-4 text-sm mb-3">
              <span>📍 {text.umrah.steps}</span>
            </div>

            <p className="text-white/70 text-xs">{text.umrah.features}</p>
          </div>

          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <Icons.ChevronRight className="w-5 h-5 text-white" />
          </div>
        </button>

        {/* Hajj Card — Premium Gold */}
        <button
          onClick={() => onSelectJourney('hajj')}
          className="flex-1 group relative overflow-hidden rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 25%, #FFD700 50%, #DAA520 75%, #B8860B 100%)',
            boxShadow: '0 0 30px rgba(218,165,32,0.4), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
          }}
        >
          {/* Shimmer sweep effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s ease-in-out infinite',
            }}
          />

          {/* Subtle inner border glow */}
          <div className="absolute inset-[1px] rounded-3xl border border-yellow-300/30 pointer-events-none" />

          {/* Top badges */}
          <div className="absolute top-4 right-4 flex gap-2 z-[3]">
            {hajjLocked ? (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                style={{ background: 'rgba(0,0,0,0.5)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
              >
                🔒 {text.hajj.badge}
              </span>
            ) : (
              <span className="px-3 py-1 bg-emerald-300/90 backdrop-blur-sm rounded-full text-xs font-bold text-emerald-900">
                {text.umrah.badge}
              </span>
            )}
            <span
              className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
              style={{ background: 'rgba(0,0,0,0.35)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)' }}
            >
              🦅 3D
            </span>
          </div>

          {/* Dim overlay for locked state */}
          {hajjLocked && <div className="absolute inset-0 bg-black/25 rounded-3xl z-[1]" />}

          <div className="relative text-center z-[2]">
            <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}>🕋</div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{
                fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
                color: '#1a0a00',
                textShadow: '0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              {text.hajj.title}
            </h2>
            <p
              className="text-sm mb-3"
              style={{
                fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
                color: '#3d1f00',
              }}
            >
              {text.hajj.subtitle}
            </p>

            <div className="flex justify-center gap-4 text-sm mb-3" style={{ color: '#2d1400' }}>
              <span>📍 {text.hajj.steps}</span>
            </div>

            <p className="text-xs" style={{ color: '#5a3000' }}>{text.hajj.features}</p>
          </div>

          <div
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform z-[2]"
            style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,215,0,0.4)' }}
          >
            {hajjLocked
              ? <Icons.Lock className="w-5 h-5" style={{ color: '#FFD700' }} />
              : <Icons.ChevronRight className="w-5 h-5" style={{ color: '#FFD700' }} />
            }
          </div>
        </button>
      </div>

      {/* Features */}
      <div className="relative z-10 mt-8 text-center">
        <p className="text-white/50 text-xs sm:text-sm" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
          {text.features}
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
