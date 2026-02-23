/**
 * SeertEventCard.jsx
 * Beautiful bedtime story card for Prophet's Life events
 * Features paged reading, audio narration, and multilingual support
 * Uses Google Cloud TTS (Chirp3-HD) for high-quality voice narration
 * Note: Uses proper Urdu fonts (Noto Nastaliq Urdu)
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Icons } from '../common/Icons';

// Get story for the selected language
const getStoryInLanguage = (event, lang) => {
  if (!event?.story?.[lang]) {
    // Fallback to English if language not available
    return event?.story?.en || {
      title: event.name,
      parts: ['Story not available.'],
      moral: '',
    };
  }
  return event.story[lang];
};

const SeertEventCard = ({
  event,
  language = 'en',
  onClose,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
  onComplete,
  isCompleted = false,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMoral, setShowMoral] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const audioRef = useRef(null);

  // Get the story in the selected language
  const story = getStoryInLanguage(event, language);
  const totalPages = story.parts?.length || 1;
  const isRTL = language === 'ar' || language === 'ur';

  // Font family for RTL languages
  const rtlFontFamily = "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Scheherazade New', 'Amiri', serif";

  // Stop audio when component unmounts or page changes
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

  // Stop current audio when page changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsReading(false);
    setIsLoading(false);
  }, [currentPage, showMoral]);

  // Preload voices on mount
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Trigger voice loading
      window.speechSynthesis.getVoices();
      // Some browsers need this event
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Check if we're in development mode (no API available)
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  // Fallback: Browser's Web Speech API (defined first so readAloud can use it)
  const playWithBrowserTTS = useCallback((text) => {
    if (!('speechSynthesis' in window)) {
      console.warn('[SeertTTS] Browser TTS not supported');
      setIsReading(false);
      setIsLoading(false);
      setSpeechSupported(false);
      return;
    }

    setIsLoading(false);

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'ur' ? 'ur-PK' : language === 'ar' ? 'ar-SA' : 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to find a matching voice
    const voices = window.speechSynthesis.getVoices();
    console.log('[SeertTTS] Available voices:', voices.length);

    if (voices.length > 0) {
      const langCode = language === 'ur' ? 'ur' : language === 'ar' ? 'ar' : 'en';
      const voice = voices.find(v => v.lang.startsWith(langCode)) ||
                    voices.find(v => v.lang.includes(langCode)) ||
                    voices.find(v => v.lang.startsWith('en'));
      if (voice) {
        console.log('[SeertTTS] Using voice:', voice.name, voice.lang);
        utterance.voice = voice;
      }
    }

    utterance.onstart = () => {
      console.log('[SeertTTS] Speech started');
      setIsReading(true);
    };
    utterance.onend = () => {
      console.log('[SeertTTS] Speech ended');
      setIsReading(false);
    };
    utterance.onerror = (e) => {
      console.error('[SeertTTS] Speech error:', e.error);
      setIsReading(false);
    };

    // Small delay to ensure voices are loaded
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100);
  }, [language]);

  // Play audio using Google HD Voice API with browser TTS fallback
  const readAloud = useCallback(async () => {
    const text = showMoral ? story.moral : story.parts[currentPage];
    if (!text) return;

    // Stop any current audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    setIsLoading(true);
    setIsReading(true);

    // In dev mode, skip API and use browser TTS directly
    if (isDev) {
      console.log('[SeertTTS] Dev mode - using browser TTS directly');
      playWithBrowserTTS(text);
      return;
    }

    try {
      // Try Google Cloud TTS API first (HD quality)
      // Using surah=1 which is free for all users
      const ttsUrl = `/api/tts?text=${encodeURIComponent(text)}&lang=${language}&surah=1`;
      const response = await fetch(ttsUrl);

      if (response.ok) {
        // Success - play the HD audio
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);

        const audio = new Audio(audioUrl);
        audioRef.current = audio;

        audio.onended = () => {
          setIsReading(false);
          setIsLoading(false);
          URL.revokeObjectURL(audioUrl);
        };

        audio.onerror = () => {
          console.warn('[SeertTTS] Audio playback error, falling back to browser TTS');
          URL.revokeObjectURL(audioUrl);
          playWithBrowserTTS(text);
        };

        setIsLoading(false);
        await audio.play();
        return;
      }

      // API failed - check if we should use browser TTS
      const errorData = await response.json().catch(() => ({}));
      if (errorData.useBrowserTTS) {
        console.log('[SeertTTS] API suggested browser TTS fallback');
        playWithBrowserTTS(text);
        return;
      }

      // Premium required or other error - try browser TTS
      console.log('[SeertTTS] API error:', errorData.error || response.status);
      playWithBrowserTTS(text);

    } catch (error) {
      console.warn('[SeertTTS] Network error, using browser TTS:', error.message);
      playWithBrowserTTS(text);
    }
  }, [currentPage, language, showMoral, story, isDev, playWithBrowserTTS]);

  // Stop reading
  const stopReading = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsReading(false);
    setIsLoading(false);
  };

  // Navigate to next page
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsAnimating(false);
      }, 200);
    } else if (!showMoral && story.moral) {
      // Show moral after last page
      setIsAnimating(true);
      setTimeout(() => {
        setShowMoral(true);
        setIsAnimating(false);
      }, 200);
    } else if (showMoral) {
      // Story completed - trigger completion callback
      if (!isCompleted && onComplete) {
        onComplete(event.id);
      }
      if (hasNext) {
        // Go to next event
        onNext?.();
        setCurrentPage(0);
        setShowMoral(false);
      } else {
        // No more stories - close the card
        onClose?.();
      }
    }
  };

  // Navigate to previous page
  const prevPage = () => {
    if (showMoral) {
      setIsAnimating(true);
      setTimeout(() => {
        setShowMoral(false);
        setIsAnimating(false);
      }, 200);
    } else if (currentPage > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsAnimating(false);
      }, 200);
    } else if (hasPrevious) {
      // Go to previous event
      onPrevious?.();
      setCurrentPage(0);
      setShowMoral(false);
    }
  };

  // Get event name in the selected language
  const getEventName = () => {
    switch (language) {
      case 'ar': return event.nameAr || event.name;
      case 'ur': return event.nameUr || event.name;
      default: return event.name;
    }
  };

  // Get location in the selected language
  const getLocation = () => {
    switch (language) {
      case 'ar': return event.locationAr || event.location;
      case 'ur': return event.locationUr || event.location;
      default: return event.location;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
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
              animationDuration: `${2 + Math.random() * 2}s`,
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
        className={`
          relative w-full max-w-2xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden
          transform transition-all duration-300
          ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}
        `}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* Header with event info */}
        <div
          className="p-4 sm:p-6 text-white relative"
          style={{ background: event.color || '#10B981' }}
        >
          {/* Completed badge */}
          {isCompleted && (
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full text-xs">
              <span>⭐</span>
              <span>{language === 'ur' ? 'مکمل' : language === 'ar' ? 'مكتمل' : 'Completed'}</span>
            </div>
          )}
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl">{event.emoji}</div>
            <div className="flex-1">
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  fontFamily: isRTL ? rtlFontFamily : 'inherit',
                }}
              >
                {story.title}
              </h2>
              <p
                className="text-white/80 text-sm sm:text-base mt-1"
                style={{
                  fontFamily: isRTL ? rtlFontFamily : 'inherit',
                }}
              >
                {getEventName()}
              </p>
              <div className="flex items-center gap-3 mt-2 text-sm text-white/70">
                <span>📍 {getLocation()}</span>
                <span>📅 {event.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story content */}
        <div className="p-6 sm:p-8">
          {!showMoral ? (
            <>
              {/* Story text */}
              <div
                className="text-lg sm:text-xl leading-relaxed text-gray-700 min-h-[180px]"
                style={{
                  fontFamily: isRTL ? rtlFontFamily : 'inherit',
                  textAlign: isRTL ? 'right' : 'left',
                  lineHeight: isRTL ? '2.2' : '1.8',
                }}
              >
                {story.parts[currentPage]}
              </div>

              {/* Page indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {story.parts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentPage(index);
                        setIsAnimating(false);
                      }, 200);
                    }}
                    className={`
                      w-3 h-3 rounded-full transition-all
                      ${index === currentPage
                        ? 'bg-emerald-500 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                      }
                    `}
                  />
                ))}
                {/* Moral indicator */}
                {story.moral && (
                  <div className="w-3 h-3 rounded-full bg-amber-300 ml-2" title="Moral" />
                )}
              </div>
            </>
          ) : (
            /* Moral section */
            <div className="text-center py-4">
              <div className="text-4xl mb-4">⭐</div>
              <h3
                className="text-lg font-bold text-emerald-600 mb-4"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? rtlFontFamily : 'inherit',
                }}
              >
                {language === 'ar' ? 'العبرة من القصة' : language === 'ur' ? 'سبق' : 'Lesson'}
              </h3>
              <p
                className="text-lg sm:text-xl text-gray-700 italic leading-relaxed"
                style={{
                  fontFamily: isRTL ? rtlFontFamily : 'inherit',
                  textAlign: isRTL ? 'right' : 'left',
                  lineHeight: isRTL ? '2.2' : '1.8',
                }}
              >
                "{story.moral}"
              </p>
            </div>
          )}
        </div>

        {/* Footer with controls */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            {/* Previous button - arrows flip for RTL */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0 && !showMoral && !hasPrevious}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all
                ${currentPage === 0 && !showMoral && !hasPrevious
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }
              `}
              style={{
                fontFamily: isRTL ? rtlFontFamily : 'inherit',
              }}
            >
              {isRTL ? <Icons.ChevronRight className="w-5 h-5" /> : <Icons.ChevronLeft className="w-5 h-5" />}
              <span className="hidden sm:inline">
                {language === 'ar' ? 'السابق' : language === 'ur' ? 'پچھلا' : 'Previous'}
              </span>
            </button>

            {/* Audio button - Google HD Voice */}
            <button
              onClick={isReading ? stopReading : readAloud}
              disabled={isLoading}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-lg
                ${isLoading
                  ? 'bg-amber-500 text-white'
                  : isReading
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }
                ${isLoading ? 'cursor-wait' : ''}
              `}
              style={{
                fontFamily: isRTL ? rtlFontFamily : 'inherit',
              }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{language === 'ar' ? 'جارٍ التحميل...' : language === 'ur' ? 'لوڈ ہو رہا ہے...' : 'Loading...'}</span>
                </>
              ) : isReading ? (
                <>
                  <Icons.VolumeX className="w-5 h-5" />
                  <span>{language === 'ar' ? 'توقف' : language === 'ur' ? 'رکیں' : 'Stop'}</span>
                </>
              ) : (
                <>
                  <Icons.Volume2 className="w-5 h-5" />
                  <span>{language === 'ar' ? 'استمع' : language === 'ur' ? 'سنیں' : 'Listen'}</span>
                </>
              )}
            </button>

            {/* Next button - arrows flip for RTL */}
            <button
              onClick={nextPage}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
              style={{
                fontFamily: isRTL ? rtlFontFamily : 'inherit',
              }}
            >
              <span className="hidden sm:inline">
                {showMoral
                  ? (hasNext
                    ? (language === 'ar' ? 'القصة التالية' : language === 'ur' ? 'اگلی کہانی' : 'Next Story')
                    : (language === 'ar' ? 'انتهى' : language === 'ur' ? 'ختم' : 'Done'))
                  : currentPage === totalPages - 1
                    ? (language === 'ar' ? 'العبرة' : language === 'ur' ? 'سبق' : 'Moral')
                    : (language === 'ar' ? 'التالي' : language === 'ur' ? 'اگلا' : 'Next')
                }
              </span>
              {isRTL ? <Icons.ChevronLeft className="w-5 h-5" /> : <Icons.ChevronRight className="w-5 h-5" />}
            </button>
          </div>

          {/* Page number */}
          <div className="text-center text-gray-500 text-sm mt-3">
            {showMoral
              ? (language === 'ar' ? 'العبرة' : language === 'ur' ? 'سبق' : 'Moral')
              : `${currentPage + 1} / ${totalPages}`
            }
          </div>
        </div>
      </div>

      {/* Event navigation hints */}
      <div
        className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 text-white/60 text-sm"
        style={{
          fontFamily: isRTL ? rtlFontFamily : 'inherit',
        }}
      >
        {hasPrevious && (
          <span className="flex items-center gap-1">
            <Icons.ChevronLeft className="w-4 h-4" />
            {language === 'ar' ? 'القصة السابقة' : language === 'ur' ? 'پچھلی کہانی' : 'Previous Story'}
          </span>
        )}
        {hasNext && (
          <span className="flex items-center gap-1">
            {language === 'ar' ? 'القصة التالية' : language === 'ur' ? 'اگلی کہانی' : 'Next Story'}
            <Icons.ChevronRight className="w-4 h-4" />
          </span>
        )}
      </div>

      {/* Import Urdu fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default SeertEventCard;
