/**
 * Quran Heartbeat Meditation
 * Guided meditation with breathing exercises, Quranic verses, and beautiful dhikr audio
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import {
  MEDITATION_SESSIONS,
  DHIKR_PHRASES,
  getAllSessions,
  getSession,
  getSessionDuration,
} from '../../data/meditationSessions';

// Soft, peaceful Islamic dhikr audio - melodic nasheeds for meditation
// All tracks are gentle and calming, suitable for meditation and relaxation
const DHIKR_AUDIO_TRACKS = {
  allah: {
    url: 'https://archive.org/download/OmarEsa-AllahAndHisBeloved/12%20-%20Allahu.mp3',
    arabic: 'الله',
    transliteration: 'Allahu',
    meaning: 'Gentle Remembrance of Allah',
  },
  yaAllah: {
    url: 'https://archive.org/download/OmarEsa-AllahAndHisBeloved/15%20-%20Ya%20Allah.mp3',
    arabic: 'يا الله',
    transliteration: 'Ya Allah',
    meaning: 'O Allah - Calling upon the Most Merciful',
  },
  subhanAllah: {
    url: 'https://archive.org/download/OmarEsa-AllahAndHisBeloved/14%20-%20Subhanallah.mp3',
    arabic: 'سبحان الله',
    transliteration: 'SubhanAllah',
    meaning: 'Glory to Allah',
  },
  alhamdulillah: {
    url: 'https://archive.org/download/OmarEsa-AllahAndHisBeloved/10%20-%20Alhamdulillah.mp3',
    arabic: 'الحمد لله',
    transliteration: 'Alhamdulillah',
    meaning: 'All Praise and Thanks to Allah',
  },
  dhikr: {
    url: 'https://archive.org/download/OmarEsa-AllahAndHisBeloved/08%20-%20Dhikr.mp3',
    arabic: 'ذكر الله',
    transliteration: 'Dhikr',
    meaning: 'Peaceful Remembrance of Allah',
  },
  astagfirullah: {
    url: 'https://archive.org/download/OmarEsa-AllahAndHisBeloved/03%20-%20Astagfirullah.mp3',
    arabic: 'أستغفر الله',
    transliteration: 'Astagfirullah',
    meaning: 'I seek forgiveness from Allah',
  },
  subhanAllahWalhamdulillah: {
    url: 'https://archive.org/download/SubhanallahWalhamdulillah/Subhanallah%20Walhamdulillah.mp3',
    arabic: 'سبحان الله والحمد لله',
    transliteration: 'SubhanAllah Walhamdulillah',
    meaning: 'Glory and Praise to Allah',
  },
  yaRahman: {
    url: 'https://archive.org/download/YaRasoolallahYaHabeeballah2/Ya%20Rahman.mp3',
    arabic: 'يا رحمن',
    transliteration: 'Ya Rahman',
    meaning: 'O Most Merciful',
  },
};

// Dhikr tracks for different meditation types
const MEDITATION_DHIKR = {
  breathing: ['allah', 'yaAllah', 'dhikr'],
  contemplation: ['subhanAllah', 'alhamdulillah', 'dhikr'],
  names: ['allah', 'yaAllah', 'astagfirullah'],
  sleep: ['subhanAllahWalhamdulillah', 'allah', 'yaAllah'],
};

// Local dhikr phrases for display - Soft, peaceful phrases for meditation
const LOCAL_DHIKR_PHRASES = [
  { arabic: 'الله', transliteration: 'Allah', meaning: 'Allah' },
  { arabic: 'سبحان الله', transliteration: 'SubhanAllah', meaning: 'Glory to Allah' },
  { arabic: 'الحمد لله', transliteration: 'Alhamdulillah', meaning: 'All Praise to Allah' },
  { arabic: 'لا إله إلا الله', transliteration: 'La ilaha illallah', meaning: 'There is no god but Allah' },
  { arabic: 'يا الله', transliteration: 'Ya Allah', meaning: 'O Allah' },
  { arabic: 'يا رحمن', transliteration: 'Ya Rahman', meaning: 'O Most Merciful' },
  { arabic: 'أستغفر الله', transliteration: 'Astagfirullah', meaning: 'I seek forgiveness from Allah' },
];

const MEDITATION_AUDIO = {
  // Peaceful nature sounds for background
  ambient: [
    'https://assets.mixkit.co/active_storage/sfx/2432/2432-preview.mp3', // Gentle stream
    'https://assets.mixkit.co/active_storage/sfx/2514/2514-preview.mp3', // Forest ambience
  ],
};

// Breathing Circle Component
const BreathingCircle = memo(function BreathingCircle({
  phase, // 'inhale' | 'hold' | 'exhale'
  duration,
  progress,
  color,
}) {
  const sizes = {
    inhale: { scale: 1.4, opacity: 0.8 },
    hold: { scale: 1.4, opacity: 1 },
    exhale: { scale: 1, opacity: 0.6 },
  };

  const current = sizes[phase] || sizes.inhale;

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Outer glow */}
      <div
        className="absolute rounded-full transition-all"
        style={{
          width: `${current.scale * 200}px`,
          height: `${current.scale * 200}px`,
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          transitionDuration: `${duration}s`,
        }}
      />

      {/* Main circle */}
      <div
        className="absolute rounded-full transition-all flex items-center justify-center"
        style={{
          width: `${current.scale * 150}px`,
          height: `${current.scale * 150}px`,
          backgroundColor: `${color}30`,
          border: `3px solid ${color}`,
          opacity: current.opacity,
          transitionDuration: `${duration}s`,
        }}
      >
        <span className="text-white text-lg font-medium capitalize">{phase}</span>
      </div>

      {/* Progress ring */}
      <svg className="absolute w-full h-full -rotate-90">
        <circle
          cx="96"
          cy="96"
          r="88"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray={`${progress * 553} 553`}
          opacity={0.5}
        />
      </svg>
    </div>
  );
});

// Dhikr Counter Component
const DhikrCounter = memo(function DhikrCounter({
  phrase,
  targetCount,
  currentCount,
  onCount,
}) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Arabic text */}
      <div className="text-center">
        <p
          className="text-4xl text-white mb-2"
          style={{ fontFamily: "'Scheherazade New', serif" }}
          dir="rtl"
        >
          {phrase.arabic}
        </p>
        <p className="text-white/60 text-sm">{phrase.transliteration}</p>
        <p className="text-white/40 text-xs mt-1">{phrase.translation}</p>
      </div>

      {/* Counter circle */}
      <button
        onClick={onCount}
        className="relative w-32 h-32 rounded-full flex items-center justify-center transition-transform active:scale-95"
        style={{ backgroundColor: `${phrase.color}30`, border: `3px solid ${phrase.color}` }}
      >
        <div className="text-center">
          <p className="text-3xl font-bold text-white">{currentCount}</p>
          <p className="text-white/60 text-sm">/ {targetCount}</p>
        </div>

        {/* Progress ring */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="58"
            fill="none"
            stroke={phrase.color}
            strokeWidth="6"
            strokeDasharray={`${(currentCount / targetCount) * 364} 364`}
            strokeLinecap="round"
          />
        </svg>
      </button>

      <p className="text-white/40 text-sm">Tap to count</p>
    </div>
  );
});

// Verse Display Component
const VerseDisplay = memo(function VerseDisplay({ verse }) {
  return (
    <div className="flex flex-col items-center gap-4 px-6">
      <p
        className="text-3xl text-white text-center leading-relaxed"
        style={{ fontFamily: "'Scheherazade New', serif" }}
        dir="rtl"
      >
        {verse.arabic}
      </p>
      <p className="text-white/70 text-center text-lg italic">
        "{verse.translation}"
      </p>
      <p className="text-white/40 text-sm">
        Surah {verse.surah}:{verse.ayah}
      </p>
    </div>
  );
});

// Names of Allah Component
const NamesDisplay = memo(function NamesDisplay({ names, currentIndex }) {
  const name = names[currentIndex % names.length];

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="w-32 h-32 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${name.color}30`, border: `3px solid ${name.color}` }}
      >
        <p
          className="text-3xl text-white"
          style={{ fontFamily: "'Scheherazade New', serif" }}
          dir="rtl"
        >
          {name.arabic}
        </p>
      </div>
      <div className="text-center">
        <p className="text-white font-medium text-xl">{name.name}</p>
        <p className="text-white/60 text-sm mt-1">{name.meaning}</p>
      </div>
    </div>
  );
});

// Session Selector
const SessionSelector = memo(function SessionSelector({ onSelect }) {
  const sessions = useMemo(() => getAllSessions(), []);

  return (
    <div className="space-y-4">
      <h3 className="text-white/60 text-sm mb-4">Choose a meditation</h3>
      <div className="space-y-3">
        {sessions.map((session) => {
          const Icon = Icons[session.icon] || Icons.Heart;
          return (
            <button
              key={session.id}
              onClick={() => onSelect(session)}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-4 text-left group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${session.color}30` }}
              >
                <Icon className="w-7 h-7" style={{ color: session.color }} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{session.name}</h4>
                <p className="text-white/60 text-sm">{session.description}</p>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-sm">{session.duration} min</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
});

// Active Session Component
const ActiveSession = memo(function ActiveSession({
  session,
  onComplete,
  onCancel,
  soundEnabled,
}) {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [dhikrCount, setDhikrCount] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const ambientAudioRef = useRef(null);
  const dhikrAudioRef = useRef(null);
  const dhikrTrackIndex = useRef(0);
  const lastBreathingPhaseRef = useRef('inhale');
  const [currentDhikrDisplay, setCurrentDhikrDisplay] = useState(null);

  // Stop all audio helper
  const stopAllAudio = useCallback(() => {
    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
      ambientAudioRef.current = null;
    }
    if (dhikrAudioRef.current) {
      dhikrAudioRef.current.pause();
      dhikrAudioRef.current = null;
    }
  }, []);

  // Initialize ambient Islamic sound
  useEffect(() => {
    if (!soundEnabled) {
      stopAllAudio();
      return;
    }

    // Stop any existing ambient audio first
    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
      ambientAudioRef.current = null;
    }

    // Pick a random Islamic background sound
    const randomIndex = Math.floor(Math.random() * MEDITATION_AUDIO.ambient.length);
    const ambient = new Audio(MEDITATION_AUDIO.ambient[randomIndex]);
    ambient.loop = true;
    ambient.volume = 0.15; // Soft background
    ambientAudioRef.current = ambient;

    // Try to play (may need user interaction first)
    ambient.play().catch(() => {
      console.log('Ambient audio blocked, will play on user interaction');
    });

    return () => {
      if (ambientAudioRef.current) {
        ambientAudioRef.current.pause();
        ambientAudioRef.current = null;
      }
    };
  }, [soundEnabled, stopAllAudio]);

  // Play dhikr audio track
  const playDhikrSound = useCallback(() => {
    if (!soundEnabled) return;

    // Get current phase type for dhikr selection
    const currentPhase = session.phases[currentPhaseIndex];
    const phaseType = currentPhase?.type || 'breathing';
    const dhikrKeys = MEDITATION_DHIKR[phaseType] || MEDITATION_DHIKR.breathing;

    // Cycle through available dhikr tracks
    const trackKey = dhikrKeys[dhikrTrackIndex.current % dhikrKeys.length];
    const track = DHIKR_AUDIO_TRACKS[trackKey];
    dhikrTrackIndex.current++;

    if (!track) return;

    // Update display
    setCurrentDhikrDisplay({
      arabic: track.arabic,
      transliteration: track.transliteration,
      meaning: track.meaning,
    });

    // Stop any currently playing dhikr
    if (dhikrAudioRef.current) {
      dhikrAudioRef.current.pause();
    }

    // Play the dhikr track
    dhikrAudioRef.current = new Audio(track.url);
    dhikrAudioRef.current.volume = 0.6;
    dhikrAudioRef.current.play().catch((err) => {
      console.log('Dhikr audio failed:', err);
    });
  }, [soundEnabled, session, currentPhaseIndex]);

  // Play dhikr on exhale during breathing phases
  useEffect(() => {
    // Only play when transitioning to exhale phase (not on initial render)
    if (breathingPhase === 'exhale' && lastBreathingPhaseRef.current === 'hold' && soundEnabled) {
      // Update display with a random phrase
      const displayPhrase = LOCAL_DHIKR_PHRASES[Math.floor(Math.random() * LOCAL_DHIKR_PHRASES.length)];
      setCurrentDhikrDisplay(displayPhrase);
    }
    lastBreathingPhaseRef.current = breathingPhase;
  }, [breathingPhase, soundEnabled]);

  // Pause/resume audio
  useEffect(() => {
    if (isPaused) {
      // Pause all audio
      if (ambientAudioRef.current) ambientAudioRef.current.pause();
      if (dhikrAudioRef.current) dhikrAudioRef.current.pause();
    } else {
      // Resume audio
      if (ambientAudioRef.current) {
        ambientAudioRef.current.play().catch(() => {});
      }
      if (dhikrAudioRef.current) {
        dhikrAudioRef.current.play().catch(() => {});
      }
    }
  }, [isPaused]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (ambientAudioRef.current) {
        ambientAudioRef.current.pause();
        ambientAudioRef.current = null;
      }
      if (dhikrAudioRef.current) {
        dhikrAudioRef.current.pause();
        dhikrAudioRef.current = null;
      }
    };
  }, []);

  const currentPhase = session.phases[currentPhaseIndex];
  const totalDuration = getSessionDuration(session);
  const elapsedDuration = session.phases.slice(0, currentPhaseIndex).reduce((t, p) => t + p.duration, 0) + (phaseProgress * currentPhase.duration);
  const overallProgress = elapsedDuration / totalDuration;

  // Phase timer
  useEffect(() => {
    if (isPaused || !currentPhase) return;

    startTimeRef.current = Date.now();
    const phaseDuration = currentPhase.duration * 1000;

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / phaseDuration, 1);
      setPhaseProgress(progress);

      // Handle breathing phases
      if (currentPhase.type === 'breathing') {
        const cycleTime = (currentPhase.inhale + currentPhase.hold + currentPhase.exhale) * 1000;
        const cycleProgress = (elapsed % cycleTime) / cycleTime;

        const inhaleRatio = currentPhase.inhale / (currentPhase.inhale + currentPhase.hold + currentPhase.exhale);
        const holdRatio = (currentPhase.inhale + currentPhase.hold) / (currentPhase.inhale + currentPhase.hold + currentPhase.exhale);

        if (cycleProgress < inhaleRatio) {
          setBreathingPhase('inhale');
        } else if (cycleProgress < holdRatio) {
          setBreathingPhase('hold');
        } else {
          setBreathingPhase('exhale');
        }
      }

      // Handle names rotation
      if (currentPhase.type === 'names') {
        const rotationInterval = currentPhase.duration * 1000 / currentPhase.names.length;
        setNameIndex(Math.floor(elapsed / rotationInterval));
      }

      // Move to next phase
      if (progress >= 1) {
        if (currentPhaseIndex < session.phases.length - 1) {
          setCurrentPhaseIndex(prev => prev + 1);
          setPhaseProgress(0);
          setDhikrCount(0);
        } else {
          clearInterval(timerRef.current);
          onComplete();
        }
      }
    }, 100);

    return () => clearInterval(timerRef.current);
  }, [currentPhaseIndex, isPaused, session, currentPhase, onComplete]);

  const handleDhikrCount = useCallback(() => {
    if (currentPhase.type !== 'dhikr') return;
    playDhikrSound(); // Play sound on each count
    setDhikrCount(prev => Math.min(prev + 1, currentPhase.count));
  }, [currentPhase, playDhikrSound]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  if (!currentPhase) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Progress bar */}
      <div className="h-1 bg-white/10">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${overallProgress * 100}%`,
            backgroundColor: session.color,
          }}
        />
      </div>

      {/* Phase indicator */}
      <div className="text-center py-4 border-b border-white/10">
        <p className="text-white/60 text-sm">
          Phase {currentPhaseIndex + 1} of {session.phases.length}
        </p>
        {currentPhase.label && (
          <p className="text-white font-medium mt-1">{currentPhase.label}</p>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center py-8">
        {currentPhase.type === 'breathing' && (
          <BreathingCircle
            phase={breathingPhase}
            duration={currentPhase[breathingPhase]}
            progress={phaseProgress}
            color={session.color}
          />
        )}

        {currentPhase.type === 'verse' && (
          <VerseDisplay verse={currentPhase.verse} />
        )}

        {currentPhase.type === 'dhikr' && (
          <DhikrCounter
            phrase={currentPhase.phrase}
            targetCount={currentPhase.count}
            currentCount={dhikrCount}
            onCount={handleDhikrCount}
          />
        )}

        {currentPhase.type === 'names' && (
          <NamesDisplay
            names={currentPhase.names}
            currentIndex={nameIndex}
          />
        )}
      </div>

      {/* Controls */}
      <div className="flex-shrink-0 p-6 border-t border-white/10">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-xl bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
          >
            End Session
          </button>
          <button
            onClick={togglePause}
            className="px-8 py-3 rounded-xl font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: isPaused ? session.color : `${session.color}30`,
              color: 'white',
            }}
          >
            {isPaused ? (
              <>
                <Icons.Play className="w-5 h-5" />
                Resume
              </>
            ) : (
              <>
                <Icons.Pause className="w-5 h-5" />
                Pause
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
});

// Completion Screen
const CompletionScreen = memo(function CompletionScreen({ session, onClose }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: `${session.color}30` }}
      >
        <Icons.Check className="w-12 h-12" style={{ color: session.color }} />
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">Session Complete</h2>
      <p className="text-white/60 mb-8">
        May Allah accept your remembrance and grant you peace.
      </p>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
        <p
          className="text-xl text-white mb-2"
          style={{ fontFamily: "'Scheherazade New', serif" }}
          dir="rtl"
        >
          جَزَاكَ اللَّهُ خَيْرًا
        </p>
        <p className="text-white/60 text-sm">JazakAllahu Khairan</p>
      </div>

      <button
        onClick={onClose}
        className="px-8 py-3 rounded-xl font-medium text-white transition-all"
        style={{ backgroundColor: session.color }}
      >
        Done
      </button>
    </div>
  );
});

// Main Component
const HeartbeatMeditation = memo(function HeartbeatMeditation({
  isVisible,
  onClose,
}) {
  const [selectedSession, setSelectedSession] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleSelectSession = useCallback((session) => {
    setSelectedSession(session);
    setIsActive(true);
    setIsComplete(false);
  }, []);

  const handleComplete = useCallback(() => {
    setIsActive(false);
    setIsComplete(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsActive(false);
    setSelectedSession(null);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSession(null);
    setIsActive(false);
    setIsComplete(false);
    onClose();
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Dark calming background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900" />

      <div
        className="relative bg-black/40 backdrop-blur-lg rounded-3xl overflow-hidden max-w-md w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        {!isActive && (
          <div className="flex-shrink-0 p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Icons.Breath className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Meditation</h2>
                  <p className="text-white/60 text-sm">Find your inner peace</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Sound toggle */}
                <button
                  onClick={() => setSoundEnabled(prev => !prev)}
                  className={`p-2 rounded-full transition-all ${soundEnabled ? 'bg-purple-500/30 text-purple-400' : 'hover:bg-white/10 text-white/40'}`}
                  title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
                >
                  {soundEnabled ? (
                    <Icons.Volume2 className="w-5 h-5" />
                  ) : (
                    <Icons.VolumeX className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-all"
                >
                  <Icons.X className="w-6 h-6 text-white/70" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {isComplete && selectedSession ? (
            <CompletionScreen session={selectedSession} onClose={handleClose} />
          ) : isActive && selectedSession ? (
            <ActiveSession
              session={selectedSession}
              onComplete={handleComplete}
              onCancel={handleCancel}
              soundEnabled={soundEnabled}
            />
          ) : (
            <div className="p-6">
              <SessionSelector onSelect={handleSelectSession} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default HeartbeatMeditation;
