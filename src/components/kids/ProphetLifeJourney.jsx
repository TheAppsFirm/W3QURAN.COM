/**
 * ProphetLifeJourney.jsx
 * A beautiful standalone journey through the life of Prophet Muhammad ﷺ
 * Features: Language selection, motorbike ride, bedtime stories, audio
 * Note: No human avatars/representations used - only Islamic symbols
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Icons } from '../common/Icons';
import SeertLanguageSelect from './SeertLanguageSelect';
import SeertEventCard from './SeertEventCard';
import { Motorbike } from './components';
import { SEERAH_EVENTS } from './data/seerahData';

// Get saved language preference
const getSavedLanguage = () => {
  try {
    return localStorage.getItem('kids_seert_language') || null;
  } catch {
    return null;
  }
};

// Milestone Station component - Islamic architecture style (no human representations)
const MilestoneStation = ({ event, isActive, onClick, language = 'en' }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const getEventName = () => {
    switch (language) {
      case 'ar': return event.nameAr || event.name;
      case 'ur': return event.nameUr || event.name;
      default: return event.name;
    }
  };

  return (
    <div
      className={`
        flex flex-col items-center cursor-pointer transition-all duration-300
        ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}
      `}
      onClick={onClick}
    >
      {/* Milestone marker - Islamic dome/minaret style */}
      <div
        className={`
          relative w-24 h-28 transition-all duration-300
          ${isActive ? '' : ''}
        `}
      >
        <svg viewBox="0 0 80 100" className="w-full h-full drop-shadow-lg">
          {/* Base platform */}
          <rect x="15" y="85" width="50" height="10" rx="2" fill="#D4A574" />

          {/* Main dome structure */}
          <path
            d="M20 85 L20 50 Q40 20 60 50 L60 85 Z"
            fill={event.color || '#10B981'}
          />

          {/* Inner arch detail */}
          <path
            d="M28 85 L28 60 Q40 40 52 60 L52 85 Z"
            fill="white"
            opacity="0.2"
          />

          {/* Dome top ornament - crescent */}
          <circle cx="40" cy="28" r="8" fill="#FDE68A" />
          <circle cx="43" cy="26" r="6" fill={event.color || '#10B981'} />

          {/* Decorative band */}
          <rect x="20" y="50" width="40" height="4" fill="white" opacity="0.3" />

          {/* Side minarets */}
          <rect x="10" y="55" width="6" height="30" fill={event.color || '#10B981'} opacity="0.8" />
          <circle cx="13" cy="52" r="4" fill="#FDE68A" />

          <rect x="64" y="55" width="6" height="30" fill={event.color || '#10B981'} opacity="0.8" />
          <circle cx="67" cy="52" r="4" fill="#FDE68A" />
        </svg>

        {/* Event emoji/symbol - positioned in center of dome */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-2xl">
          {event.emoji}
        </div>

        {/* Glow effect when active */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-40 -z-10"
            style={{ background: event.color || '#10B981' }}
          />
        )}
      </div>

      {/* Event name card */}
      <div
        className={`
          mt-1 px-3 py-2 rounded-xl text-center transition-all duration-300
          ${isActive
            ? 'bg-white shadow-lg'
            : 'bg-white/90 hover:bg-white hover:shadow'
          }
        `}
        style={{
          minWidth: '90px',
          maxWidth: '130px',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        <p
          className="text-xs font-bold text-gray-800 leading-tight"
          style={{
            fontFamily: isRTL
              ? "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Scheherazade New', serif"
              : 'inherit',
          }}
        >
          {getEventName()}
        </p>
        <p className="text-[10px] text-gray-500 mt-0.5">{event.year}</p>
      </div>

      {/* "Tap to read" hint when active */}
      {isActive && (
        <div
          className="mt-1 px-2 py-1 bg-emerald-500 rounded-full text-white text-[10px] font-bold animate-bounce shadow-lg"
          style={{
            fontFamily: isRTL
              ? "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', sans-serif"
              : 'inherit',
          }}
        >
          {language === 'ar' ? 'اضغط للقراءة' : language === 'ur' ? 'پڑھنے کیلئے ٹیپ کریں' : 'Tap to Read!'}
        </div>
      )}
    </div>
  );
};

// Saudi Arabian landscape background component
const BeautifulRoad = ({ scrollPosition, viewportWidth }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient - warm Arabian sky */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #60A5FA 0%, #93C5FD 30%, #FBBF24 70%, #F59E0B 100%)',
        }}
      />

      {/* Sun - larger Arabian sun */}
      <div
        className="absolute w-28 h-28 rounded-full"
        style={{
          right: '15%',
          top: '5%',
          background: 'radial-gradient(circle, #FEF3C7 0%, #FDE68A 30%, #FBBF24 70%, #F59E0B 100%)',
          boxShadow: '0 0 100px rgba(251, 191, 36, 0.6)',
        }}
      />

      {/* Distant city silhouette - Mecca/Medina inspired */}
      <div
        className="absolute bottom-44 left-0"
        style={{
          width: '400%',
          transform: `translateX(${-scrollPosition * 0.08}px)`,
        }}
      >
        {/* Mosque/city silhouettes at intervals */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${i * 600}px`,
              bottom: 0,
            }}
          >
            <svg width="200" height="80" viewBox="0 0 200 80" opacity="0.3">
              {/* Central dome */}
              <path d="M80 80 L80 50 Q100 20 120 50 L120 80 Z" fill="#78350F" />
              {/* Left minaret */}
              <rect x="55" y="35" width="8" height="45" fill="#78350F" />
              <circle cx="59" cy="32" r="5" fill="#78350F" />
              {/* Right minaret */}
              <rect x="137" y="35" width="8" height="45" fill="#78350F" />
              <circle cx="141" cy="32" r="5" fill="#78350F" />
              {/* Buildings */}
              <rect x="20" y="55" width="30" height="25" fill="#78350F" />
              <rect x="150" y="50" width="35" height="30" fill="#78350F" />
            </svg>
          </div>
        ))}
      </div>

      {/* Far mountains - Jabal al-Nour style */}
      <div
        className="absolute bottom-36 left-0 h-36"
        style={{
          width: '250%',
          transform: `translateX(${-scrollPosition * 0.12}px)`,
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${i * 15}%`,
              width: '20%',
              height: `${50 + (i % 4) * 25}px`,
              background: 'linear-gradient(180deg, #A16207 0%, #92400E 50%, #78350F 100%)',
              clipPath: i % 2 === 0
                ? 'polygon(20% 100%, 50% 0%, 80% 100%)'
                : 'polygon(10% 100%, 40% 20%, 60% 0%, 90% 100%)',
            }}
          />
        ))}
      </div>

      {/* Sand dunes - mid layer */}
      <div
        className="absolute bottom-24 left-0 h-20"
        style={{
          width: '350%',
          transform: `translateX(${-scrollPosition * 0.25}px)`,
        }}
      >
        <svg width="100%" height="80" viewBox="0 0 1400 80" preserveAspectRatio="none">
          <path
            d="M0 80 Q100 30 200 60 Q350 20 500 50 Q650 10 800 45 Q950 25 1100 55 Q1250 15 1400 80 L1400 80 L0 80 Z"
            fill="#D4A574"
          />
        </svg>
      </div>

      {/* Date palm trees - Arabian style */}
      <div
        className="absolute bottom-20 left-0"
        style={{
          width: '600%',
          transform: `translateX(${-scrollPosition * 0.5}px)`,
        }}
      >
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${i * 250 + (i % 3) * 50}px`,
              bottom: '5px',
            }}
          >
            {/* Date palm tree */}
            <svg width="50" height="75" viewBox="0 0 50 75">
              {/* Trunk */}
              <path d="M25 75 L25 30" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
              <path d="M25 75 L24 30" stroke="#A0522D" strokeWidth="4" strokeLinecap="round" />
              {/* Trunk texture */}
              {[35, 45, 55, 65].map((y) => (
                <ellipse key={y} cx="25" cy={y} rx="4" ry="2" fill="#6B4226" />
              ))}
              {/* Palm fronds */}
              <path d="M25 30 Q5 25 2 10" stroke="#228B22" strokeWidth="3" fill="none" />
              <path d="M25 30 Q45 25 48 10" stroke="#228B22" strokeWidth="3" fill="none" />
              <path d="M25 30 Q10 20 5 5" stroke="#2E8B2E" strokeWidth="2.5" fill="none" />
              <path d="M25 30 Q40 20 45 5" stroke="#2E8B2E" strokeWidth="2.5" fill="none" />
              <path d="M25 30 Q15 15 12 0" stroke="#32CD32" strokeWidth="2" fill="none" />
              <path d="M25 30 Q35 15 38 0" stroke="#32CD32" strokeWidth="2" fill="none" />
              <path d="M25 30 Q25 10 25 0" stroke="#228B22" strokeWidth="2" fill="none" />
              {/* Dates */}
              <circle cx="20" cy="35" r="2" fill="#8B4513" />
              <circle cx="30" cy="36" r="2" fill="#8B4513" />
              <circle cx="24" cy="38" r="2" fill="#8B4513" />
            </svg>
          </div>
        ))}
      </div>

      {/* Near sand dunes */}
      <div
        className="absolute bottom-20 left-0 h-12"
        style={{
          width: '400%',
          transform: `translateX(${-scrollPosition * 0.4}px)`,
        }}
      >
        <svg width="100%" height="50" viewBox="0 0 1600 50" preserveAspectRatio="none">
          <path
            d="M0 50 Q80 20 160 40 Q280 10 400 35 Q520 5 640 30 Q760 15 880 40 Q1000 8 1120 35 Q1240 18 1360 38 Q1480 12 1600 50 Z"
            fill="#C4A06A"
          />
        </svg>
      </div>

      {/* Road - Arabian highway */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-800">
        {/* Road top edge */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-200/50" />

        {/* Center dashed line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 flex"
          style={{
            transform: `translateX(${-scrollPosition % 60}px) translateY(-50%)`,
            width: `${viewportWidth + 200}px`,
          }}
        >
          {Array.from({ length: Math.ceil((viewportWidth + 200) / 60) }, (_, i) => (
            <div
              key={i}
              className="w-10 h-2 bg-amber-400 flex-shrink-0"
              style={{ marginRight: '20px' }}
            />
          ))}
        </div>

        {/* Road bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-200/30" />
      </div>

      {/* Sandy ground below road */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-amber-700" />
    </div>
  );
};

const ProphetLifeJourney = ({ onBack }) => {
  // State
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);
  const [language, setLanguage] = useState(getSavedLanguage() || 'en');
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [showEventCard, setShowEventCard] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [moveDirection, setMoveDirection] = useState('right');
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Refs
  const containerRef = useRef(null);
  const moveIntervalRef = useRef(null);
  const audioContextRef = useRef(null);
  const engineOscRef = useRef(null);
  const engineGainRef = useRef(null);

  // Motorbike engine sound effect
  useEffect(() => {
    if (isMoving) {
      // Create audio context if needed
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;

      // Resume if suspended
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Create engine sound - low frequency oscillator
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, ctx.currentTime); // Low engine rumble

      // Add slight frequency variation for realism
      osc.frequency.setValueAtTime(55, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.1);
      osc.frequency.linearRampToValueAtTime(55, ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.1); // Fade in

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      engineOscRef.current = osc;
      engineGainRef.current = gain;
    } else {
      // Stop engine sound
      if (engineGainRef.current && audioContextRef.current) {
        const ctx = audioContextRef.current;
        engineGainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
        setTimeout(() => {
          if (engineOscRef.current) {
            try { engineOscRef.current.stop(); } catch (e) {}
            engineOscRef.current = null;
          }
        }, 250);
      }
    }

    return () => {
      if (engineOscRef.current) {
        try { engineOscRef.current.stop(); } catch (e) {}
      }
    };
  }, [isMoving]);

  // Constants
  const STATION_WIDTH = 180;
  const TOTAL_WIDTH = SEERAH_EVENTS.length * STATION_WIDTH + viewportWidth;
  const MAX_SCROLL = (SEERAH_EVENTS.length - 1) * STATION_WIDTH; // Max scroll to center last event
  const MOTORBIKE_POSITION = viewportWidth * 0.3; // Motorbike at 30% from left
  const MOVE_SPEED = 6;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check for saved language and auto-proceed
  useEffect(() => {
    const saved = getSavedLanguage();
    if (saved) {
      setLanguage(saved);
      setShowLanguageSelect(false);
    }
  }, []);

  // Calculate current event based on scroll position
  // Event index is simply which station the scroll position corresponds to
  const currentEvent = useMemo(() => {
    const eventIndex = Math.floor(scrollPosition / STATION_WIDTH);
    return Math.max(0, Math.min(eventIndex, SEERAH_EVENTS.length - 1));
  }, [scrollPosition]);

  // Update current event index when scroll changes
  useEffect(() => {
    setCurrentEventIndex(currentEvent);
  }, [currentEvent]);

  // Handle language selection
  const handleLanguageSelect = (langId) => {
    setLanguage(langId);
    setShowLanguageSelect(false);
  };

  // Movement controls
  const startMoving = useCallback((direction) => {
    if (moveIntervalRef.current) return;

    setIsMoving(true);
    setMoveDirection(direction);

    moveIntervalRef.current = setInterval(() => {
      setScrollPosition(prev => {
        const delta = direction === 'right' ? MOVE_SPEED : -MOVE_SPEED;
        const newPos = prev + delta;

        // Bounds check - use MAX_SCROLL so last event can be centered
        if (newPos < 0) return 0;
        if (newPos > MAX_SCROLL) return MAX_SCROLL;

        return newPos;
      });
    }, 16);
  }, [MAX_SCROLL]);

  const stopMoving = useCallback(() => {
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
      moveIntervalRef.current = null;
    }
    setIsMoving(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (moveIntervalRef.current) {
        clearInterval(moveIntervalRef.current);
      }
    };
  }, []);

  // Jump to event
  const jumpToEvent = useCallback((index) => {
    const targetScroll = index * STATION_WIDTH;
    setScrollPosition(targetScroll);
    setCurrentEventIndex(index);
  }, []);

  // Open event card
  const openEventCard = (index) => {
    setCurrentEventIndex(index);
    setShowEventCard(true);
  };

  // Navigate to next/previous event in card view
  const nextEvent = () => {
    if (currentEventIndex < SEERAH_EVENTS.length - 1) {
      const newIndex = currentEventIndex + 1;
      setCurrentEventIndex(newIndex);
      jumpToEvent(newIndex);
    }
  };

  const prevEvent = () => {
    if (currentEventIndex > 0) {
      const newIndex = currentEventIndex - 1;
      setCurrentEventIndex(newIndex);
      jumpToEvent(newIndex);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showEventCard) return;

      if (e.key === 'ArrowRight' || e.key === 'd') {
        startMoving('right');
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        startMoving('left');
      } else if (e.key === 'Enter' || e.key === ' ') {
        openEventCard(currentEventIndex);
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowRight', 'ArrowLeft', 'd', 'a'].includes(e.key)) {
        stopMoving();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [startMoving, stopMoving, currentEventIndex, showEventCard]);

  // Show language selection
  if (showLanguageSelect) {
    return (
      <SeertLanguageSelect
        onSelectLanguage={handleLanguageSelect}
        onBack={onBack}
      />
    );
  }

  // Show event card (bedtime story)
  if (showEventCard) {
    return (
      <SeertEventCard
        event={SEERAH_EVENTS[currentEventIndex]}
        language={language}
        onClose={() => setShowEventCard(false)}
        onNext={nextEvent}
        onPrevious={prevEvent}
        hasNext={currentEventIndex < SEERAH_EVENTS.length - 1}
        hasPrevious={currentEventIndex > 0}
      />
    );
  }

  // Main journey view
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ touchAction: 'none' }}
    >
      {/* Background with road */}
      <BeautifulRoad scrollPosition={scrollPosition} viewportWidth={viewportWidth} />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 p-3 flex items-center justify-between">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 font-bold hover:bg-white transition-all shadow-lg text-sm"
        >
          <Icons.ArrowLeft className="w-4 h-4" />
          <span>{language === 'ar' ? 'رجوع' : language === 'ur' ? 'واپس' : 'Back'}</span>
        </button>

        {/* Title */}
        <div
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full text-white shadow-lg"
          style={{
            fontFamily: language !== 'en'
              ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif"
              : 'inherit',
          }}
        >
          <span className="text-lg">🕌</span>
          <span className="font-bold text-sm">
            {language === 'ar' ? 'رحلة السيرة النبوية' : language === 'ur' ? 'سیرتِ نبوی ﷺ' : "Prophet's Life ﷺ"}
          </span>
        </div>

        {/* Language change button */}
        <button
          onClick={() => setShowLanguageSelect(true)}
          className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 font-bold hover:bg-white transition-all shadow-lg text-sm"
        >
          <span className="text-base">
            {language === 'en' ? '🇬🇧' : language === 'ur' ? '🇵🇰' : '🇸🇦'}
          </span>
        </button>
      </div>

      {/* Scrolling stations container - ABOVE the bike */}
      <div
        className="absolute left-0 flex items-end gap-0 transition-transform"
        style={{
          bottom: '140px', // Moved much higher
          // Center first station at motorbike position by offsetting by half station width
          transform: `translateX(${-scrollPosition + MOTORBIKE_POSITION - STATION_WIDTH / 2}px)`,
          width: `${TOTAL_WIDTH}px`,
        }}
      >
        {SEERAH_EVENTS.map((event, index) => (
          <div
            key={event.id}
            className="flex-shrink-0 flex items-end justify-center"
            style={{ width: `${STATION_WIDTH}px` }}
          >
            <MilestoneStation
              event={event}
              isActive={index === currentEventIndex}
              onClick={() => openEventCard(index)}
              language={language}
            />
          </div>
        ))}
      </div>

      {/* Motorbike - Fixed position at bottom */}
      <div
        className="absolute z-30"
        style={{
          left: `${MOTORBIKE_POSITION}px`,
          bottom: '22px',
          transform: 'translateX(-50%)',
        }}
      >
        <Motorbike
          isMoving={isMoving}
          direction={moveDirection}
          speed={1.5}
          scale={0.9}
        />
      </div>

      {/* Movement controls - Touch friendly */}
      <div className="absolute bottom-24 left-4 right-4 z-40 flex justify-between pointer-events-none">
        {/* Left button */}
        <button
          onMouseDown={() => startMoving('left')}
          onMouseUp={stopMoving}
          onMouseLeave={stopMoving}
          onTouchStart={() => startMoving('left')}
          onTouchEnd={stopMoving}
          disabled={scrollPosition <= 0}
          className={`
            pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all
            ${scrollPosition <= 0
              ? 'bg-gray-300 text-gray-500'
              : 'bg-white text-gray-800 hover:bg-gray-100 active:scale-95'
            }
          `}
        >
          <Icons.ChevronLeft className="w-7 h-7" />
        </button>

        {/* Right button */}
        <button
          onMouseDown={() => startMoving('right')}
          onMouseUp={stopMoving}
          onMouseLeave={stopMoving}
          onTouchStart={() => startMoving('right')}
          onTouchEnd={stopMoving}
          disabled={scrollPosition >= MAX_SCROLL}
          className={`
            pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all
            ${scrollPosition >= MAX_SCROLL
              ? 'bg-gray-300 text-gray-500'
              : 'bg-white text-gray-800 hover:bg-gray-100 active:scale-95'
            }
          `}
        >
          <Icons.ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Event progress indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
          <span className="text-xl">{SEERAH_EVENTS[currentEventIndex]?.emoji}</span>
          <span className="font-bold text-gray-800 text-sm">
            {currentEventIndex + 1} / {SEERAH_EVENTS.length}
          </span>
        </div>
      </div>

      {/* Event quick jump dots */}
      <div className="absolute bottom-3 right-4 z-30">
        <div className="flex gap-1 p-2 bg-white/80 backdrop-blur-sm rounded-full max-w-[200px] overflow-x-auto">
          {SEERAH_EVENTS.map((event, index) => (
            <button
              key={event.id}
              onClick={() => jumpToEvent(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all flex-shrink-0
                ${index === currentEventIndex
                  ? 'scale-150'
                  : 'hover:scale-125 opacity-60 hover:opacity-100'
                }
              `}
              style={{
                backgroundColor: event.color || '#10B981',
              }}
              title={event.name}
            />
          ))}
        </div>
      </div>

      {/* Import Urdu fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');

        .font-urdu {
          font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif;
        }
      `}</style>
    </div>
  );
};

export default ProphetLifeJourney;
