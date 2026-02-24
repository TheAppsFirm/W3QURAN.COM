/**
 * IhramGame.jsx
 * Interactive Ihram preparation game
 *
 * Steps:
 * 1. Make Niyyah (intention)
 * 2. Change into Ihram clothes
 * 3. Recite Talbiyah
 */

import React, { useState, useCallback, memo, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { initAudio, playClick, playDuaReveal, playGameComplete, stopAllSounds } from './audioUtils';

// Colors
const SKIN = '#F5C67A';
const WHITE_CLOTH = '#F8FAFC';
const NORMAL_CLOTH = '#64748B';
const SAND = '#D4B896';

// ============================================================
// DESERT ENVIRONMENT
// ============================================================
const DesertEnvironment = memo(() => (
  <group>
    {/* Ground */}
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color={SAND} roughness={0.9} />
    </mesh>

    {/* Sand dunes */}
    {[-3, 0, 3].map((x, i) => (
      <mesh key={i} position={[x, 0.2, -4]}>
        <sphereGeometry args={[2, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#C4A882" roughness={0.9} />
      </mesh>
    ))}

    {/* Miqat station */}
    <group position={[0, 0, -3]}>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[3, 2, 0.3]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.5, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.6, 0.06, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0, 2.2, 0.2]}>
        <boxGeometry args={[1.5, 0.35, 0.05]} />
        <meshStandardMaterial color="#10B981" roughness={0.5} />
      </mesh>
    </group>

    {/* Palm trees */}
    <PalmTree position={[-3, 0, -1]} />
    <PalmTree position={[3, 0, -1.5]} scale={0.9} />
  </group>
));

// ============================================================
// PALM TREE
// ============================================================
const PalmTree = memo(({ position, scale = 1 }) => (
  <group position={position} scale={scale}>
    <mesh position={[0, 1, 0]}>
      <cylinderGeometry args={[0.1, 0.15, 2, 8]} />
      <meshStandardMaterial color="#8B5A2B" roughness={0.8} />
    </mesh>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <group key={i} position={[0, 2, 0]} rotation={[0.5, (i / 6) * Math.PI * 2, 0]}>
        <mesh position={[0, 0, 0.5]} rotation={[-0.4, 0, 0]}>
          <boxGeometry args={[0.2, 0.03, 1]} />
          <meshStandardMaterial color="#228B22" roughness={0.7} />
        </mesh>
      </group>
    ))}
  </group>
));

// ============================================================
// ANIMATED AVATAR
// ============================================================
const AnimatedAvatar = ({ stage, isAnimating }) => {
  const groupRef = useRef();
  const armsRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Breathing
    groupRef.current.scale.y = 1 + Math.sin(t * 2) * 0.01;

    // Arm animation based on stage
    if (armsRef.current) {
      if (stage === 'niyyah' && isAnimating) {
        // Hands raised for dua
        armsRef.current.rotation.x = THREE.MathUtils.lerp(
          armsRef.current.rotation.x,
          -1.2,
          0.1
        );
      } else if (stage === 'talbiyah' && isAnimating) {
        // Hands raised, slight sway
        armsRef.current.rotation.x = -1.0 + Math.sin(t * 2) * 0.1;
      } else {
        // Normal position
        armsRef.current.rotation.x = THREE.MathUtils.lerp(
          armsRef.current.rotation.x,
          0,
          0.1
        );
      }
    }
  });

  const showIhram = stage === 'ihram_done' || stage === 'talbiyah' || stage === 'complete';

  return (
    <group ref={groupRef} position={[0, 0, 1]} scale={2}>
      {/* Normal clothes (shown before ihram) */}
      {!showIhram && (
        <group>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.1, 0.12, 0.4, 12]} />
            <meshStandardMaterial color={NORMAL_CLOTH} roughness={0.6} />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.12, 0.14, 0.4, 12]} />
            <meshStandardMaterial color="#475569" roughness={0.6} />
          </mesh>
        </group>
      )}

      {/* Ihram clothes */}
      {showIhram && (
        <group>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.08, 0.1, 0.4, 12]} />
            <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.1, 0.12, 0.4, 12]} />
            <meshStandardMaterial color="#E2E8F0" roughness={0.5} />
          </mesh>
        </group>
      )}

      {/* Head */}
      <group position={[0, 0.55, 0]}>
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.03, 0.02, 0.08]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        <mesh position={[0.03, 0.02, 0.08]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.025, 0.085]}>
          <torusGeometry args={[0.02, 0.006, 6, 8, Math.PI]} />
          <meshStandardMaterial color="#C0392B" />
        </mesh>
      </group>

      {/* Arms */}
      <group ref={armsRef} position={[0, 0.35, 0]}>
        <mesh position={[-0.12, 0, 0.05]} rotation={[0, 0, 0.4]}>
          <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
        <mesh position={[0.12, 0, 0.05]} rotation={[0, 0, -0.4]}>
          <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>

      {/* Feet */}
      <mesh position={[-0.04, -0.32, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
      <mesh position={[0.04, -0.32, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>

      {/* Glow when animating */}
      {isAnimating && (
        <pointLight position={[0, 0.3, 0.5]} intensity={0.8} color="#10B981" distance={2} />
      )}
    </group>
  );
};

// ============================================================
// SKY
// ============================================================
const Sky = memo(() => (
  <mesh position={[0, 5, -5]}>
    <planeGeometry args={[30, 15]} />
    <meshBasicMaterial color="#87CEEB" />
  </mesh>
));

// ============================================================
// LIGHTING
// ============================================================
const Lighting = memo(() => (
  <>
    <ambientLight intensity={0.6} />
    <directionalLight position={[3, 5, 2]} intensity={1.0} color="#FFF8E1" />
    <pointLight position={[0, 2, 2]} intensity={0.4} color="#FDE68A" distance={6} />
    <hemisphereLight args={['#87CEEB', SAND, 0.5]} />
  </>
));

// ============================================================
// STEP BUTTON COMPONENT
// ============================================================
const StepButton = ({ step, isActive, isComplete, onClick, language }) => {
  const isRTL = language === 'ar' || language === 'ur';

  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`
        flex items-center gap-3 p-4 rounded-2xl transition-all w-full
        ${isComplete
          ? 'bg-emerald-100 border-2 border-emerald-500'
          : isActive
            ? 'bg-white border-2 border-amber-400 shadow-lg scale-105 animate-pulse'
            : 'bg-gray-100 border-2 border-transparent opacity-50'
        }
      `}
    >
      <div className={`
        w-12 h-12 rounded-full flex items-center justify-center text-2xl
        ${isComplete ? 'bg-emerald-500' : isActive ? 'bg-amber-500' : 'bg-gray-300'}
      `}>
        {isComplete ? '✅' : step.emoji}
      </div>
      <div className="flex-1 text-left" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <p
          className={`font-bold ${isComplete ? 'text-emerald-700' : 'text-gray-800'}`}
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {step.title[language]}
        </p>
        <p
          className="text-sm text-gray-500"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {step.subtitle[language]}
        </p>
      </div>
      {isActive && !isComplete && (
        <span className="text-amber-500 text-2xl">👆</span>
      )}
    </button>
  );
};

// ============================================================
// MAIN GAME COMPONENT
// ============================================================
const IhramGame = ({ language = 'en', onComplete, onBack }) => {
  const [currentStage, setCurrentStage] = useState('start'); // start, niyyah, ihram, ihram_done, talbiyah, complete
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const [currentDua, setCurrentDua] = useState(null);

  const isRTL = language === 'ar' || language === 'ur';

  // Initialize audio
  useEffect(() => {
    initAudio();
    return () => stopAllSounds();
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAnimating) return;

      // Enter or Space to activate current step
      if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        if (currentStage === 'start') {
          handleStepAction('niyyah');
        } else if (currentStage === 'niyyah_done') {
          handleStepAction('ihram');
        } else if (currentStage === 'ihram_done') {
          handleStepAction('talbiyah');
        } else if (currentStage === 'complete') {
          onComplete?.();
        }
      }

      // Escape to go back
      if (e.code === 'Escape') {
        onBack?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStage, isAnimating, onBack, onComplete]);

  // Steps data
  const steps = [
    {
      id: 'niyyah',
      emoji: '🤲',
      title: { en: 'Make Niyyah', ur: 'نیت کریں', ar: 'النية' },
      subtitle: { en: 'Intention for Umrah', ur: 'عمرہ کی نیت', ar: 'نية العمرة' },
      dua: {
        arabic: 'اللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي',
        transliteration: "Allahumma inni uridu al-'umrata fa yassirha li wa taqabbalha minni",
        en: 'O Allah, I intend to perform Umrah, so make it easy for me and accept it from me.',
        ur: 'اے اللہ میں عمرہ کا ارادہ رکھتا ہوں، اسے میرے لیے آسان فرما اور مجھ سے قبول فرما۔',
        ar: 'اللهم إني أريد العمرة فيسرها لي وتقبلها مني',
      },
    },
    {
      id: 'ihram',
      emoji: '👔',
      title: { en: 'Wear Ihram', ur: 'احرام پہنیں', ar: 'لبس الإحرام' },
      subtitle: { en: 'Change into sacred garments', ur: 'مقدس لباس پہنیں', ar: 'ارتداء ثياب الإحرام' },
    },
    {
      id: 'talbiyah',
      emoji: '🗣️',
      title: { en: 'Recite Talbiyah', ur: 'تلبیہ پڑھیں', ar: 'التلبية' },
      subtitle: { en: 'The pilgrim\'s call', ur: 'حاجی کی پکار', ar: 'نداء الحاج' },
      dua: {
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
        transliteration: "Labbayk Allahumma labbayk, labbayk la shareeka laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la shareeka lak",
        en: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise and blessings are Yours, and all sovereignty. You have no partner.',
        ur: 'میں حاضر ہوں اے اللہ میں حاضر ہوں، میں حاضر ہوں تیرا کوئی شریک نہیں میں حاضر ہوں۔ بے شک تمام حمد و نعمت تیری ہے اور بادشاہی بھی، تیرا کوئی شریک نہیں۔',
        ar: 'لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك',
      },
    },
  ];

  // Text content
  const text = {
    title: { en: 'Ihram', ur: 'احرام', ar: 'الإحرام' },
    subtitle: { en: 'Enter the Sacred State', ur: 'مقدس حالت میں داخل ہوں', ar: 'الدخول في الإحرام' },
    complete: { en: 'Ihram Complete! 🎉', ur: 'احرام مکمل! 🎉', ar: 'اكتمل الإحرام! 🎉' },
    ready: { en: 'You are now in Ihram!', ur: 'اب آپ احرام میں ہیں!', ar: 'أنت الآن في الإحرام!' },
    next: { en: 'Start Tawaf', ur: 'طواف شروع کریں', ar: 'ابدأ الطواف' },
    tap: { en: 'Tap to recite', ur: 'پڑھنے کے لیے ٹیپ کریں', ar: 'اضغط للتلاوة' },
  };

  // Handle step action
  const handleStepAction = useCallback((stepId) => {
    const step = steps.find(s => s.id === stepId);

    playClick(); // Play click sound
    setIsAnimating(true);

    if (stepId === 'niyyah') {
      setCurrentStage('niyyah');
      setCurrentDua(step.dua);
      playDuaReveal();
      setShowDua(true);

      setTimeout(() => {
        setShowDua(false);
        setCurrentStage('niyyah_done');
        setIsAnimating(false);
      }, 5000);
    } else if (stepId === 'ihram') {
      setCurrentStage('ihram');

      setTimeout(() => {
        setCurrentStage('ihram_done');
        setIsAnimating(false);
      }, 2000);
    } else if (stepId === 'talbiyah') {
      setCurrentStage('talbiyah');
      setCurrentDua(step.dua);
      playDuaReveal();
      setShowDua(true);

      setTimeout(() => {
        setShowDua(false);
        setCurrentStage('complete');
        setIsAnimating(false);
        playGameComplete(); // Celebration sound
      }, 6000);
    }
  }, [steps]);

  // Determine which step is active
  const getStepStatus = (stepId) => {
    const stageOrder = ['start', 'niyyah', 'niyyah_done', 'ihram', 'ihram_done', 'talbiyah', 'complete'];
    const currentIndex = stageOrder.indexOf(currentStage);

    if (stepId === 'niyyah') {
      return {
        isActive: currentStage === 'start' || currentStage === 'niyyah',
        isComplete: currentIndex > stageOrder.indexOf('niyyah_done') - 1 && currentStage !== 'start',
      };
    } else if (stepId === 'ihram') {
      return {
        isActive: currentStage === 'niyyah_done',
        isComplete: currentIndex > stageOrder.indexOf('ihram_done') - 1,
      };
    } else if (stepId === 'talbiyah') {
      return {
        isActive: currentStage === 'ihram_done',
        isComplete: currentStage === 'complete',
      };
    }
    return { isActive: false, isComplete: false };
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #87CEEB 0%, #F0E68C 60%, #D4B896 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 z-20">
        <button
          onClick={onBack}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 shadow-lg"
        >
          ←
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl">🧕</span>
            <h1
              className="text-xl font-bold text-gray-800"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.title[language]}
            </h1>
          </div>
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {text.subtitle[language]}
          </p>
        </div>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 text-sm shadow-lg"
        >
          {language === 'ar' ? 'تخطي' : language === 'ur' ? 'چھوڑیں' : 'Skip'} →
        </button>
      </div>

      {/* 3D Scene */}
      <div className="flex-1 relative">
        <Canvas
          camera={{ position: [0, 1.5, 4], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Lighting />
          <Sky />
          <DesertEnvironment />
          <AnimatedAvatar stage={currentStage} isAnimating={isAnimating} />
        </Canvas>

        {/* Dua overlay */}
        {showDua && currentDua && (
          <div className="absolute inset-x-4 top-4 flex justify-center pointer-events-none z-30">
            <div className="max-w-md p-5 bg-emerald-900/95 backdrop-blur-sm rounded-2xl border border-emerald-500/30 shadow-2xl">
              <p
                className="text-white text-xl text-center mb-3 leading-loose"
                style={{ fontFamily: "'Scheherazade New', serif" }}
                dir="rtl"
              >
                {currentDua.arabic}
              </p>
              {currentDua.transliteration && (
                <p className="text-emerald-300/80 text-sm text-center italic mb-2">
                  {currentDua.transliteration}
                </p>
              )}
              <p
                className="text-white/90 text-sm text-center"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {currentDua[language] || currentDua.en}
              </p>
            </div>
          </div>
        )}

        {/* Clothing change animation overlay */}
        {currentStage === 'ihram' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">👔 → 🥋</div>
              <p className="text-white text-lg font-bold bg-black/50 px-4 py-2 rounded-full">
                {language === 'en' && 'Changing into Ihram...'}
                {language === 'ur' && 'احرام پہن رہے ہیں...'}
                {language === 'ar' && 'جاري ارتداء الإحرام...'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Steps panel */}
      <div className="p-4 bg-white/90 backdrop-blur-sm rounded-t-3xl shadow-2xl">
        {currentStage !== 'complete' ? (
          <div className="space-y-3">
            {steps.map((step) => {
              const { isActive, isComplete } = getStepStatus(step.id);
              return (
                <StepButton
                  key={step.id}
                  step={step}
                  isActive={isActive && !isAnimating}
                  isComplete={isComplete}
                  onClick={() => handleStepAction(step.id)}
                  language={language}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="text-5xl mb-3">🎉</div>
            <h2
              className="text-xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.complete[language]}
            </h2>
            <p
              className="text-gray-600 mb-4"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.ready[language]}
            </p>
            <button
              onClick={onComplete}
              className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.next[language]} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IhramGame;
