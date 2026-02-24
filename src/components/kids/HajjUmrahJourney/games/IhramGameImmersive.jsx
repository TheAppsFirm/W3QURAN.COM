/**
 * IhramGameImmersive.jsx
 * Immersive 3D Ihram experience at Miqat
 *
 * User enters the sacred state of Ihram at a Miqat station
 * with desert landscape and authentic atmosphere
 */

import React, { useRef, useState, useCallback, useEffect, memo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sky, Stars, Sparkles, Float, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import { initAudio, playClick, playDuaReveal, playGameComplete, stopAllSounds } from './audioUtils';
import { EnhancedLighting, AtmosphericFog, DustParticles, AtmosphericClouds, EnhancedSky, RealisticPilgrim } from './EnhancedGraphics';

// Colors
const SAND = '#D4B896';
const SAND_DARK = '#C4A882';
const SKIN = '#D4A574';
const WHITE_IHRAM = '#FAFAFA';
const NORMAL_CLOTH = '#5C6BC0';
const GOLD = '#D4AF37';
const MARBLE = '#F5F0E8';

// ============================================================
// DESERT LANDSCAPE
// ============================================================
const DesertLandscape = memo(() => {
  return (
    <group>
      {/* Main ground */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={SAND} roughness={0.95} />
      </mesh>

      {/* Sand dunes */}
      {[
        { pos: [-8, 0, -15], scale: [6, 2, 4] },
        { pos: [10, 0, -20], scale: [8, 2.5, 5] },
        { pos: [-15, 0, -25], scale: [10, 3, 6] },
        { pos: [20, 0, -18], scale: [7, 2, 4] },
        { pos: [0, 0, -30], scale: [12, 3.5, 7] },
      ].map((dune, i) => (
        <mesh key={i} position={dune.pos} scale={dune.scale}>
          <sphereGeometry args={[1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={SAND_DARK} roughness={0.9} />
        </mesh>
      ))}

      {/* Rocky outcrops */}
      {[
        { pos: [-12, 0.5, -8], scale: 1.5 },
        { pos: [15, 0.3, -12], scale: 1 },
        { pos: [-20, 0.4, -15], scale: 1.2 },
      ].map((rock, i) => (
        <mesh key={i} position={rock.pos} scale={rock.scale} castShadow>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#8B7355" roughness={0.85} flatShading />
        </mesh>
      ))}
    </group>
  );
});

// ============================================================
// MIQAT STATION
// ============================================================
const MiqatStation = memo(() => {
  return (
    <group position={[0, 0, -5]}>
      {/* Main building */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[8, 3, 6]} />
        <meshStandardMaterial color={MARBLE} roughness={0.4} />
      </mesh>

      {/* Dome */}
      <mesh position={[0, 3.5, 0]} castShadow>
        <sphereGeometry args={[2, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.35} />
      </mesh>

      {/* Golden crescent on top */}
      <group position={[0, 5.6, 0]}>
        <mesh>
          <torusGeometry args={[0.2, 0.04, 8, 16, Math.PI * 1.5]} />
          <meshStandardMaterial color={GOLD} roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color={GOLD} roughness={0.2} metalness={0.8} />
        </mesh>
      </group>

      {/* Entrance arch */}
      <group position={[0, 1.2, 3.1]}>
        <mesh castShadow>
          <boxGeometry args={[2.5, 2.4, 0.3]} />
          <meshStandardMaterial color="#D8D0C4" roughness={0.5} />
        </mesh>
        {/* Arch opening */}
        <mesh position={[0, -0.3, 0.1]}>
          <boxGeometry args={[1.8, 1.8, 0.2]} />
          <meshStandardMaterial color="#4A4A4A" />
        </mesh>
        {/* Arch top */}
        <mesh position={[0, 0.9, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.9, 0.15, 8, 16, Math.PI]} />
          <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
        </mesh>
      </group>

      {/* Side minarets */}
      {[-4.5, 4.5].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh position={[0, 2, 0]} castShadow>
            <cylinderGeometry args={[0.4, 0.5, 4, 8]} />
            <meshStandardMaterial color={MARBLE} roughness={0.4} />
          </mesh>
          <mesh position={[0, 4.3, 0]}>
            <cylinderGeometry args={[0.5, 0.4, 0.5, 8]} />
            <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[0, 5, 0]} castShadow>
            <coneGeometry args={[0.4, 1, 8]} />
            <meshStandardMaterial color={MARBLE} roughness={0.4} />
          </mesh>
        </group>
      ))}

      {/* Sign: MIQAT */}
      <mesh position={[0, 3.2, 3.2]} castShadow>
        <boxGeometry args={[3, 0.5, 0.1]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Interior light */}
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#FFF8E0" distance={10} />
    </group>
  );
});

// ============================================================
// PILGRIM CHARACTER (Using RealisticPilgrim)
// ============================================================
const PilgrimCharacter = memo(({ wearingIhram, isAnimating, step }) => {
  const isDuaPosition = isAnimating && (step === 'niyyah' || step === 'talbiyah');

  return (
    <group position={[0, 0, 3]}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={2}
        isMoving={false}
        lookDirection={0}
      />
      {/* Glow when animating */}
      {isAnimating && (
        <pointLight position={[0, 1.5, 0.5]} intensity={0.5} color="#10B981" distance={5} />
      )}
      {/* Debug light to make pilgrim visible */}
      <pointLight position={[0, 2, 1]} intensity={1} color="#FFFFFF" distance={10} />
    </group>
  );
});

// ============================================================
// ATMOSPHERIC EFFECTS (Enhanced)
// ============================================================
const DesertAtmosphere = memo(() => {
  return (
    <>
      {/* Enhanced dust particles */}
      <DustParticles count={150} area={40} color="#E8D4B8" />

      {/* Heat shimmer effect (subtle golden particles) */}
      <Sparkles
        count={50}
        scale={20}
        size={1.5}
        speed={0.4}
        color="#FFE4B5"
        opacity={0.2}
        position={[0, 2, -10]}
      />

      {/* Additional ground-level dust */}
      <Sparkles
        count={80}
        scale={30}
        size={0.8}
        speed={0.15}
        color="#D4B896"
        opacity={0.25}
        position={[0, 0.5, 0]}
      />

      {/* Enhanced atmospheric clouds */}
      <AtmosphericClouds count={8} />

      {/* Atmospheric fog for depth */}
      <AtmosphericFog color="#E8D5B7" near={30} far={120} />
    </>
  );
});

// ============================================================
// LIGHTING (Enhanced)
// ============================================================
const DesertLighting = memo(() => {
  return (
    <>
      {/* Enhanced multi-directional lighting */}
      <EnhancedLighting
        sunPosition={[15, 25, 10]}
        ambientIntensity={0.5}
        shadowQuality="high"
        warmth={0.3}
      />

      {/* Additional warm desert fill light */}
      <directionalLight position={[-10, 8, 5]} intensity={0.4} color="#FFE4C4" />

      {/* Ground bounce light */}
      <pointLight position={[0, 0.5, 0]} intensity={0.2} color="#D4B896" distance={20} />
    </>
  );
});

// ============================================================
// SKY (Enhanced)
// ============================================================
const DesertSky = memo(() => {
  return (
    <>
      <EnhancedSky timeOfDay="day" showStars={false} />

      {/* Additional subtle stars for depth */}
      <Stars radius={150} depth={60} count={1000} factor={2.5} fade speed={0.15} />
    </>
  );
});

// ============================================================
// MAIN SCENE
// ============================================================
const IhramScene = ({ wearingIhram, isAnimating, step }) => {
  return (
    <Suspense fallback={null}>
      <DesertLighting />
      <DesertSky />
      <DesertAtmosphere />
      <DesertLandscape />
      <MiqatStation />
      <PilgrimCharacter wearingIhram={wearingIhram} isAnimating={isAnimating} step={step} />
    </Suspense>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const IhramGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [step, setStep] = useState('intro'); // intro, niyyah, changing, ihram, talbiyah, complete
  const [wearingIhram, setWearingIhram] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const [currentDua, setCurrentDua] = useState(null);

  const isRTL = language === 'ar' || language === 'ur';

  useEffect(() => {
    initAudio();
    return () => stopAllSounds();
  }, []);

  const duas = {
    niyyah: {
      arabic: 'اللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي',
      en: 'O Allah, I intend to perform Umrah, make it easy and accept it from me.',
      ur: 'اے اللہ میں عمرہ کا ارادہ رکھتا ہوں، اسے آسان فرما اور قبول فرما۔',
    },
    talbiyah: {
      arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ',
      en: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am.',
      ur: 'میں حاضر ہوں اے اللہ میں حاضر ہوں، میں حاضر ہوں تیرا کوئی شریک نہیں۔',
    },
  };

  const text = {
    title: { en: 'Ihram', ur: 'احرام', ar: 'الإحرام' },
    subtitle: { en: 'Enter the Sacred State', ur: 'مقدس حالت میں داخل ہوں', ar: 'ادخل في الإحرام' },
    tapToStart: { en: 'Tap to begin', ur: 'شروع کرنے کے لیے ٹیپ کریں', ar: 'اضغط للبدء' },
    makeNiyyah: { en: 'Make Niyyah (Intention)', ur: 'نیت کریں', ar: 'انوِ النية' },
    changeClothes: { en: 'Wear Ihram Garments', ur: 'احرام کے کپڑے پہنیں', ar: 'ارتدِ ملابس الإحرام' },
    reciteTalbiyah: { en: 'Recite Talbiyah', ur: 'تلبیہ پڑھیں', ar: 'رددِ التلبية' },
    complete: { en: 'Ihram Complete!', ur: 'احرام مکمل!', ar: 'اكتمل الإحرام!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    next: { en: 'Continue to Tawaf', ur: 'طواف کی طرف جائیں', ar: 'تابع إلى الطواف' },
  };

  const handleAction = useCallback((action) => {
    playClick();
    setIsAnimating(true);

    if (action === 'start') {
      setStep('niyyah');
      setCurrentDua(duas.niyyah);
      playDuaReveal();
      setShowDua(true);
      setTimeout(() => {
        setShowDua(false);
        setStep('changing');
        setIsAnimating(false);
      }, 4000);
    } else if (action === 'change') {
      setTimeout(() => {
        setWearingIhram(true);
        setStep('ihram');
        setIsAnimating(false);
      }, 2000);
    } else if (action === 'talbiyah') {
      setStep('talbiyah');
      setCurrentDua(duas.talbiyah);
      playDuaReveal();
      setShowDua(true);
      setTimeout(() => {
        setShowDua(false);
        setStep('complete');
        setIsAnimating(false);
        playGameComplete();
      }, 5000);
    }
  }, [duas]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        if (step === 'intro') handleAction('start');
        else if (step === 'changing') handleAction('change');
        else if (step === 'ihram') handleAction('talbiyah');
        else if (step === 'complete') onComplete?.();
      }
      if (e.code === 'Escape') onBack?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, handleAction, onBack, onComplete]);

  return (
    <div
      className="fixed inset-0 z-[10000]"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #87CEEB 0%, #D4B896 100%)'
      }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-20 bg-gradient-to-b from-black/50 to-transparent">
        <button onClick={onBack} className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white">←</button>
        <div className="text-center">
          <h1 className="text-xl font-bold text-white drop-shadow-lg" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            🧕 {text.title[language]}
          </h1>
          <p className="text-white/80 text-sm">{text.subtitle[language]}</p>
        </div>
        <button onClick={onComplete} className="px-3 py-1 rounded-full bg-white/20 text-white/80 text-sm">
          {text.skip[language]} ⏭️
        </button>
      </div>

      {/* Progress */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {['niyyah', 'changing', 'talbiyah'].map((s, i) => (
          <div key={s} className={`w-3 h-3 rounded-full ${
            step === s ? 'bg-emerald-400 scale-125' :
            ['niyyah', 'changing', 'talbiyah'].indexOf(step) > i || step === 'complete' ? 'bg-emerald-400' : 'bg-white/30'
          }`} />
        ))}
      </div>

      {/* Dua Display */}
      {showDua && currentDua && (
        <div className="absolute top-28 left-4 right-4 z-30 flex justify-center">
          <div className="max-w-md p-5 bg-emerald-900/95 backdrop-blur-md rounded-2xl border border-emerald-500/30">
            <p className="text-white text-xl text-center mb-3 leading-loose" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
              {currentDua.arabic}
            </p>
            <p className="text-white/90 text-sm text-center" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {currentDua[language] || currentDua.en}
            </p>
          </div>
        </div>
      )}

      {/* 3D Scene */}
      <Canvas
        shadows
        camera={{ position: [0, 2, 8], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #E8D5B7 100%)' }}
      >
        <IhramScene wearingIhram={wearingIhram} isAnimating={isAnimating} step={step} />
      </Canvas>

      {/* Bottom UI */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        {step === 'intro' && (
          <button onClick={() => handleAction('start')} className="w-full py-4 bg-emerald-500 text-white font-bold text-lg rounded-full">
            {text.makeNiyyah[language]} 🤲
          </button>
        )}
        {step === 'changing' && (
          <button onClick={() => handleAction('change')} className="w-full py-4 bg-amber-500 text-white font-bold text-lg rounded-full animate-pulse">
            {text.changeClothes[language]} 👔
          </button>
        )}
        {step === 'ihram' && (
          <button onClick={() => handleAction('talbiyah')} className="w-full py-4 bg-emerald-500 text-white font-bold text-lg rounded-full">
            {text.reciteTalbiyah[language]} 🗣️
          </button>
        )}
        {step === 'complete' && (
          <div className="text-center">
            <div className="text-5xl mb-3">✅</div>
            <h2 className="text-2xl font-bold text-white mb-4">{text.complete[language]}</h2>
            <button onClick={onComplete} className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-full">
              {text.next[language]} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IhramGameImmersive;
