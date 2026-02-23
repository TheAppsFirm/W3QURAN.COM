/**
 * StepCard.jsx
 * Detailed step information modal for Hajj/Umrah
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Icons } from '../../common/Icons';

const StepCard = ({ step, language, onClose, onComplete, isCompleted }) => {
  const [activeTab, setActiveTab] = useState('info'); // info, duas, rules
  const [isReading, setIsReading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  const isRTL = language === 'ar' || language === 'ur';
  const rtlFontFamily = "'Noto Nastaliq Urdu', 'Scheherazade New', serif";

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Get localized content
  const getDescription = () => step.description?.[language] || step.description?.en || '';
  const getActions = () => step.actions?.[language] || step.actions?.en || [];
  const getRules = () => step.rules?.[language] || step.rules?.en || [];
  const getKidsTip = () => step.kidsTip?.[language] || step.kidsTip?.en || '';
  const getLocation = () => {
    switch (language) {
      case 'ar': return step.locationAr;
      case 'ur': return step.locationUr;
      default: return step.location;
    }
  };
  const getStepName = () => {
    switch (language) {
      case 'ar': return step.nameAr;
      case 'ur': return step.nameUr;
      default: return step.name;
    }
  };

  // Text-to-speech
  const readAloud = useCallback(() => {
    const text = getDescription();
    if (!text) return;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsLoading(true);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'ur' ? 'ur-PK' : language === 'ar' ? 'ar-SA' : 'en-US';
      utterance.rate = 0.85;

      utterance.onstart = () => {
        setIsReading(true);
        setIsLoading(false);
      };
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => {
        setIsReading(false);
        setIsLoading(false);
      };

      setTimeout(() => window.speechSynthesis.speak(utterance), 100);
    }
  }, [language, step]);

  const stopReading = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsReading(false);
    setIsLoading(false);
  };

  // Tabs
  const tabs = [
    { id: 'info', label: { en: 'Info', ur: 'معلومات', ar: 'معلومات' }, icon: '📖' },
    { id: 'duas', label: { en: 'Duas', ur: 'دعائیں', ar: 'أدعية' }, icon: '🤲' },
    { id: 'rules', label: { en: 'Rules', ur: 'احکام', ar: 'أحكام' }, icon: '📋' },
  ];

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #1E1B4B 100%)',
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
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Crescent moon */}
      <div className="absolute top-8 right-8 text-5xl animate-pulse">🌙</div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 z-50 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all shadow-lg"
      >
        <Icons.X className="w-6 h-6" />
      </button>

      {/* Main card */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* Header */}
        <div
          className="p-4 sm:p-6 text-white relative flex-shrink-0"
          style={{ background: step.color || '#10B981' }}
        >
          {/* Completed badge */}
          {isCompleted && (
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full text-xs">
              <span>⭐</span>
              <span>{language === 'ur' ? 'مکمل' : language === 'ar' ? 'مكتمل' : 'Completed'}</span>
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl">{step.emoji}</div>
            <div className="flex-1">
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: isRTL ? rtlFontFamily : 'inherit' }}
              >
                {getStepName()}
              </h2>
              <div className="flex items-center gap-3 mt-2 text-sm text-white/80">
                <span>📍 {getLocation()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-all
                ${activeTab === tab.id
                  ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50'
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
              style={{ fontFamily: isRTL ? rtlFontFamily : 'inherit' }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label[language]}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              {/* Description */}
              <div
                className="text-gray-700 leading-relaxed"
                style={{
                  fontFamily: isRTL ? rtlFontFamily : 'inherit',
                  lineHeight: isRTL ? '2.2' : '1.8',
                  textAlign: isRTL ? 'right' : 'left',
                }}
              >
                {getDescription()}
              </div>

              {/* What to do */}
              <div className="mt-4">
                <h4
                  className="font-bold text-gray-800 mb-2"
                  style={{ fontFamily: isRTL ? rtlFontFamily : 'inherit' }}
                >
                  {language === 'ar' ? 'ما يجب فعله:' : language === 'ur' ? 'کیا کرنا ہے:' : 'What to do:'}
                </h4>
                <ul className="space-y-2">
                  {getActions().map((action, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                      style={{
                        fontFamily: isRTL ? rtlFontFamily : 'inherit',
                        lineHeight: isRTL ? '2' : '1.6',
                      }}
                    >
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kids tip */}
              {getKidsTip() && (
                <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p
                    className="text-amber-800 text-sm"
                    style={{
                      fontFamily: isRTL ? rtlFontFamily : 'inherit',
                      lineHeight: isRTL ? '2' : '1.6',
                    }}
                  >
                    {getKidsTip()}
                  </p>
                </div>
              )}

              {/* References */}
              {step.references && step.references.length > 0 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-700 text-sm mb-2">
                    {language === 'ar' ? '📚 المراجع' : language === 'ur' ? '📚 حوالے' : '📚 References'}
                  </h4>
                  <ul className="space-y-1">
                    {step.references.map((ref, index) => (
                      <li key={index} className="text-gray-500 text-xs">
                        • {ref.source} {ref.number}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Duas Tab */}
          {activeTab === 'duas' && (
            <div className="space-y-4">
              {step.duas && step.duas.map((dua, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${dua.isMain ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-gray-50'}`}
                >
                  {/* Dua name */}
                  <h4
                    className="font-bold text-gray-800 mb-2"
                    style={{ fontFamily: isRTL ? rtlFontFamily : 'inherit' }}
                  >
                    {dua.isMain && <span className="text-amber-500 mr-1">⭐</span>}
                    {language === 'ar' ? dua.nameAr : language === 'ur' ? (dua.nameUr || dua.name) : dua.name}
                  </h4>

                  {/* Arabic text */}
                  <p
                    className="text-2xl text-gray-800 mb-3 leading-loose text-right"
                    style={{ fontFamily: "'Scheherazade New', serif" }}
                    dir="rtl"
                  >
                    {dua.arabic}
                  </p>

                  {/* Transliteration */}
                  {dua.transliteration && (
                    <p className="text-gray-500 text-sm italic mb-2">
                      {dua.transliteration}
                    </p>
                  )}

                  {/* Translation */}
                  {dua.translation && dua.translation[language] && (
                    <p
                      className="text-gray-600"
                      style={{
                        fontFamily: isRTL ? rtlFontFamily : 'inherit',
                        lineHeight: isRTL ? '2' : '1.6',
                      }}
                    >
                      {dua.translation[language]}
                    </p>
                  )}

                  {/* Quran reference */}
                  {dua.quranRef && (
                    <p className="text-emerald-600 text-sm mt-2 font-medium">
                      📖 {dua.quranRef}
                    </p>
                  )}
                </div>
              ))}

              {(!step.duas || step.duas.length === 0) && (
                <div className="text-center text-gray-500 py-8">
                  {language === 'ar' ? 'لا توجد أدعية مخصصة لهذه الخطوة' :
                   language === 'ur' ? 'اس مرحلے کے لیے کوئی مخصوص دعا نہیں' :
                   'No specific duas for this step'}
                </div>
              )}
            </div>
          )}

          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <div className="space-y-4">
              {getRules().length > 0 ? (
                <ul className="space-y-3">
                  {getRules().map((rule, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <span className="text-xl">⚠️</span>
                      <span
                        className="text-gray-700"
                        style={{
                          fontFamily: isRTL ? rtlFontFamily : 'inherit',
                          lineHeight: isRTL ? '2' : '1.6',
                        }}
                      >
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  {language === 'ar' ? 'لا توجد قواعد مخصصة' :
                   language === 'ur' ? 'کوئی مخصوص اصول نہیں' :
                   'No specific rules for this step'}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between gap-4">
            {/* Audio button */}
            <button
              onClick={isReading ? stopReading : readAloud}
              disabled={isLoading}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all
                ${isLoading
                  ? 'bg-amber-500 text-white cursor-wait'
                  : isReading
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isReading ? (
                <Icons.VolumeX className="w-5 h-5" />
              ) : (
                <Icons.Volume2 className="w-5 h-5" />
              )}
              <span style={{ fontFamily: isRTL ? rtlFontFamily : 'inherit' }}>
                {isReading
                  ? (language === 'ar' ? 'توقف' : language === 'ur' ? 'رکیں' : 'Stop')
                  : (language === 'ar' ? 'استمع' : language === 'ur' ? 'سنیں' : 'Listen')
                }
              </span>
            </button>

            {/* Complete button */}
            {!isCompleted ? (
              <button
                onClick={onComplete}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-lg"
                style={{ fontFamily: isRTL ? rtlFontFamily : 'inherit' }}
              >
                <span>
                  {language === 'ar' ? 'إكمال الخطوة' : language === 'ur' ? 'مرحلہ مکمل کریں' : 'Complete Step'}
                </span>
                <span>✓</span>
              </button>
            ) : (
              <div
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-600 font-bold rounded-full"
                style={{ fontFamily: isRTL ? rtlFontFamily : 'inherit' }}
              >
                <span>⭐</span>
                <span>
                  {language === 'ar' ? 'مكتمل' : language === 'ur' ? 'مکمل' : 'Completed'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default StepCard;
