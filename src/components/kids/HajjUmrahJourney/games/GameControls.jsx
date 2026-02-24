/**
 * GameControls.jsx
 * Shared mobile controls and loading screens for all immersive games
 */

import React, { useCallback, useRef, useEffect } from 'react';

// ============================================================
// MOBILE JOYSTICK CONTROLS
// ============================================================
export const MobileControls = ({ onMove, onMoveEnd, showJoystick = true }) => {
  const joystickRef = useRef(null);
  const knobRef = useRef(null);
  const activeRef = useRef(false);
  const centerRef = useRef({ x: 0, y: 0 });

  const handleStart = useCallback((e) => {
    e.preventDefault();
    activeRef.current = true;
    const touch = e.touches ? e.touches[0] : e;
    const rect = joystickRef.current.getBoundingClientRect();
    centerRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }, []);

  const handleMove = useCallback((e) => {
    if (!activeRef.current) return;
    e.preventDefault();
    const touch = e.touches ? e.touches[0] : e;
    const dx = touch.clientX - centerRef.current.x;
    const dy = touch.clientY - centerRef.current.y;
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 40);
    const angle = Math.atan2(dy, dx);

    if (knobRef.current) {
      knobRef.current.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    }

    // Normalize to -1 to 1
    const normalizedX = (Math.cos(angle) * distance) / 40;
    const normalizedY = (Math.sin(angle) * distance) / 40;
    onMove?.(normalizedX, normalizedY);
  }, [onMove]);

  const handleEnd = useCallback(() => {
    activeRef.current = false;
    if (knobRef.current) {
      knobRef.current.style.transform = 'translate(0, 0)';
    }
    onMoveEnd?.();
  }, [onMoveEnd]);

  if (!showJoystick) return null;

  return (
    <div className="fixed bottom-8 left-8 z-[10010] md:hidden">
      <div
        ref={joystickRef}
        className="w-28 h-28 rounded-full bg-black/30 backdrop-blur-md border-2 border-white/30 flex items-center justify-center"
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          ref={knobRef}
          className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm border-2 border-white/70 transition-transform duration-75"
        />
      </div>
      <p className="text-white/50 text-xs text-center mt-2">Move</p>
    </div>
  );
};

// ============================================================
// ARROW BUTTON CONTROLS (Alternative to joystick)
// ============================================================
export const ArrowControls = ({ keysRef, vertical = true }) => {
  const handlePress = useCallback((key, pressed) => {
    if (keysRef?.current) {
      keysRef.current[key] = pressed;
    }
  }, [keysRef]);

  return (
    <div className="fixed bottom-6 left-6 z-[10010] md:hidden pointer-events-auto">
      <div className="grid grid-cols-3 gap-1" style={{ width: '168px' }}>
        {vertical && (
          <>
            <div />
            <button
              className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-xl text-white text-2xl font-bold active:bg-white/50 active:scale-95 transition-all border border-white/20 shadow-lg"
              onTouchStart={() => handlePress('w', true)}
              onTouchEnd={() => handlePress('w', false)}
              onMouseDown={() => handlePress('w', true)}
              onMouseUp={() => handlePress('w', false)}
              onMouseLeave={() => handlePress('w', false)}
            >
              ↑
            </button>
            <div />
          </>
        )}
        <button
          className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-xl text-white text-2xl font-bold active:bg-white/50 active:scale-95 transition-all border border-white/20 shadow-lg"
          onTouchStart={() => handlePress('a', true)}
          onTouchEnd={() => handlePress('a', false)}
          onMouseDown={() => handlePress('a', true)}
          onMouseUp={() => handlePress('a', false)}
          onMouseLeave={() => handlePress('a', false)}
        >
          ←
        </button>
        {vertical && (
          <button
            className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-xl text-white text-2xl font-bold active:bg-white/50 active:scale-95 transition-all border border-white/20 shadow-lg"
            onTouchStart={() => handlePress('s', true)}
            onTouchEnd={() => handlePress('s', false)}
            onMouseDown={() => handlePress('s', true)}
            onMouseUp={() => handlePress('s', false)}
            onMouseLeave={() => handlePress('s', false)}
          >
            ↓
          </button>
        )}
        {!vertical && <div className="w-14" />}
        <button
          className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-xl text-white text-2xl font-bold active:bg-white/50 active:scale-95 transition-all border border-white/20 shadow-lg"
          onTouchStart={() => handlePress('d', true)}
          onTouchEnd={() => handlePress('d', false)}
          onMouseDown={() => handlePress('d', true)}
          onMouseUp={() => handlePress('d', false)}
          onMouseLeave={() => handlePress('d', false)}
        >
          →
        </button>
      </div>
    </div>
  );
};

// ============================================================
// ACTION BUTTON (for throwing, tapping, etc.)
// ============================================================
export const ActionButton = ({ onPress, label, icon, color = 'amber' }) => {
  const colors = {
    amber: 'bg-amber-500 active:bg-amber-600',
    emerald: 'bg-emerald-500 active:bg-emerald-600',
    red: 'bg-red-500 active:bg-red-600',
    blue: 'bg-blue-500 active:bg-blue-600',
  };

  return (
    <button
      onClick={onPress}
      className={`fixed bottom-8 right-8 z-[10010] w-20 h-20 ${colors[color]} rounded-full text-white font-bold shadow-lg active:scale-95 transition-all flex flex-col items-center justify-center md:hidden border-4 border-white/30`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

// ============================================================
// KEYBOARD CONTROLS HOOK
// ============================================================
export const useKeyboardControls = (keysRef) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
        e.preventDefault();
        if (key === 'arrowup' || key === 'w') keysRef.current.w = true;
        if (key === 'arrowdown' || key === 's') keysRef.current.s = true;
        if (key === 'arrowleft' || key === 'a') keysRef.current.a = true;
        if (key === 'arrowright' || key === 'd') keysRef.current.d = true;
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'arrowup' || key === 'w') keysRef.current.w = false;
      if (key === 'arrowdown' || key === 's') keysRef.current.s = false;
      if (key === 'arrowleft' || key === 'a') keysRef.current.a = false;
      if (key === 'arrowright' || key === 'd') keysRef.current.d = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keysRef]);
};

// ============================================================
// IMMERSIVE LOADING SCREEN
// ============================================================
export const ImmersiveLoading = ({ language, title, emoji, gradient }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const defaultGradient = 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 50%, #1E1B4B 100%)';

  return (
    <div
      className="fixed inset-0 z-[10001] flex flex-col items-center justify-center"
      style={{ background: gradient || defaultGradient }}
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative text-center z-10">
        <div className="text-7xl mb-6 animate-bounce">{emoji || '🕋'}</div>

        {/* Spinning loader */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-amber-400 rounded-full animate-spin" />
          <div className="absolute inset-2 border-4 border-transparent border-t-emerald-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>

        <h2
          className="text-white text-xl font-bold"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {title || (language === 'ar' ? 'جاري التحميل...' : language === 'ur' ? 'لوڈ ہو رہا ہے...' : 'Loading...')}
        </h2>

        <p className="text-white/50 text-sm mt-2">
          {language === 'ar' ? 'الرجاء الانتظار' : language === 'ur' ? 'براہ کرم انتظار کریں' : 'Please wait'}
        </p>
      </div>
    </div>
  );
};

export default { MobileControls, ArrowControls, ActionButton, useKeyboardControls, ImmersiveLoading };
