/**
 * ArafatGameImmersive.jsx
 * Immersive 3D experience for the Day of Arafat
 * The most important pillar of Hajj - standing on the plains of Arafat
 */

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sky, Stars, Text, Float, Sparkles, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import { EnhancedLighting, AtmosphericFog, DustParticles, GoldenSparkles, AtmosphericClouds, RealisticPilgrim } from './EnhancedGraphics';

// ============================================================
// 3D COMPONENTS
// ============================================================

// Vast plains of Arafat
const ArafatPlains = () => {
  return (
    <group>
      {/* Main ground - vast desert */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[800, 800, 128, 128]} />
        <meshStandardMaterial
          color="#C9B896"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Prayer area markers - carpet-like areas */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[
            (Math.random() - 0.5) * 100,
            0.02,
            (Math.random() - 0.5) * 100
          ]}
        >
          <planeGeometry args={[3, 5]} />
          <meshStandardMaterial color="#2E7D32" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
};

// Mount of Mercy (Jabal al-Rahmah) - iconic mountain
const MountOfMercy = () => {
  return (
    <group position={[0, 0, -80]}>
      {/* Main mountain */}
      <mesh position={[0, 0, 0]} castShadow>
        <coneGeometry args={[30, 50, 32]} />
        <meshStandardMaterial
          color="#8B7355"
          roughness={0.95}
          flatShading
        />
      </mesh>

      {/* Rocky formations */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 20 + Math.random() * 10;
        const height = Math.random() * 15 + 5;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              height / 2,
              Math.sin(angle) * radius - 80
            ]}
          >
            <coneGeometry args={[5 + Math.random() * 3, height, 8]} />
            <meshStandardMaterial
              color={`hsl(30, ${20 + Math.random() * 20}%, ${35 + Math.random() * 20}%)`}
              roughness={1}
              flatShading
            />
          </mesh>
        );
      })}

      {/* White pillar at the top (monument) */}
      <mesh position={[0, 52, 0]}>
        <cylinderGeometry args={[1, 1.5, 8, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Glowing dome on top */}
      <mesh position={[0, 58, 0]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Path to mountain */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 40]}>
        <planeGeometry args={[8, 80]} />
        <meshStandardMaterial color="#A0937D" roughness={0.9} />
      </mesh>
    </group>
  );
};

// Thousands of pilgrims in white
const PilgrimCrowd = () => {
  const crowdRef = useRef([]);

  const pilgrims = useMemo(() => {
    const items = [];
    // Create dense crowd
    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 60 + 10;
      items.push({
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius - 40,
        scale: 0.7 + Math.random() * 0.3,
        swayOffset: Math.random() * Math.PI * 2
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    crowdRef.current.forEach((pilgrim, i) => {
      if (pilgrim) {
        // Gentle swaying - people making dua
        const data = pilgrims[i];
        pilgrim.rotation.z = Math.sin(state.clock.elapsedTime + data.swayOffset) * 0.05;
        pilgrim.position.y = Math.abs(Math.sin(state.clock.elapsedTime * 0.5 + data.swayOffset)) * 0.1;
      }
    });
  });

  return (
    <group>
      {pilgrims.map((p, i) => (
        <group
          key={i}
          ref={(el) => (crowdRef.current[i] = el)}
          position={[p.x, 0, p.z]}
          scale={p.scale}
        >
          {/* Body */}
          <mesh position={[0, 0.9, 0]}>
            <capsuleGeometry args={[0.25, 0.7, 4, 8]} />
            <meshStandardMaterial color="#FAFAFA" />
          </mesh>
          {/* Head */}
          <mesh position={[0, 1.6, 0]}>
            <sphereGeometry args={[0.18, 8, 8]} />
            <meshStandardMaterial color="#D4A574" />
          </mesh>
          {/* Raised hands (dua position) */}
          {Math.random() > 0.5 && (
            <>
              <mesh position={[0.3, 1.5, 0.1]} rotation={[0.8, 0, 0.2]}>
                <capsuleGeometry args={[0.08, 0.4, 4, 4]} />
                <meshStandardMaterial color="#D4A574" />
              </mesh>
              <mesh position={[-0.3, 1.5, 0.1]} rotation={[0.8, 0, -0.2]}>
                <capsuleGeometry args={[0.08, 0.4, 4, 4]} />
                <meshStandardMaterial color="#D4A574" />
              </mesh>
            </>
          )}
        </group>
      ))}
    </group>
  );
};

// Player pilgrim with raised hands (using RealisticPilgrim)
const PlayerPilgrim = ({ position, isDua }) => {
  return (
    <group position={position}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={1.2}
        isMoving={false}
        lookDirection={0}
        isDuaPosition={isDua}
        skinTone="#C68642"
      />

      {/* Glowing aura during dua */}
      {isDua && (
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </group>
  );
};

// Sun setting (time of acceptance)
const SettingSun = ({ progress }) => {
  const sunPosition = useMemo(() => {
    // Sun starts high and moves towards horizon
    const y = 100 - progress * 60;
    return [200, Math.max(y, 20), -100];
  }, [progress]);

  return (
    <>
      <Sky
        distance={450000}
        sunPosition={sunPosition}
        inclination={0.3 + progress * 0.2}
        azimuth={0.25}
        rayleigh={2 - progress * 0.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Warm light from setting sun */}
      <directionalLight
        position={sunPosition}
        intensity={1.5 - progress * 0.5}
        color={`hsl(${30 + progress * 20}, 100%, ${50 - progress * 10}%)`}
        castShadow
      />
    </>
  );
};

// Spiritual particles rising
const SpiritualParticles = ({ active }) => {
  if (!active) return null;

  return (
    <>
      <Sparkles
        count={200}
        scale={80}
        size={3}
        speed={1}
        color="#FFD700"
        opacity={0.6}
      />
      <Sparkles
        count={100}
        scale={50}
        size={5}
        speed={2}
        color="#FFFFFF"
        opacity={0.4}
      />
    </>
  );
};

// Camera controller
const CameraController = ({ lookAtMountain, isDuaMode }) => {
  const { camera } = useThree();

  useFrame((state) => {
    if (isDuaMode) {
      // Slowly rotate around during dua
      const angle = state.clock.elapsedTime * 0.1;
      camera.position.lerp(
        new THREE.Vector3(
          Math.sin(angle) * 5,
          3,
          Math.cos(angle) * 5 + 10
        ),
        0.02
      );
      camera.lookAt(0, 2, 0);
    } else if (lookAtMountain) {
      camera.position.lerp(new THREE.Vector3(0, 30, 80), 0.02);
      camera.lookAt(0, 20, -80);
    } else {
      camera.position.lerp(new THREE.Vector3(0, 5, 20), 0.02);
      camera.lookAt(0, 2, 0);
    }
  });

  return null;
};

// Main 3D scene
const ArafatScene = ({ stage, duaProgress }) => {
  return (
    <>
      {/* Enhanced lighting with warm sunset feel */}
      <EnhancedLighting
        sunPosition={[200, 100 - duaProgress * 60, -100]}
        ambientIntensity={0.4 + duaProgress * 0.2}
        shadowQuality="high"
        warmth={0.3 + duaProgress * 0.4}
      />

      {/* Additional warm fill light */}
      <directionalLight position={[-50, 30, 50]} intensity={0.4} color="#FFE4C4" />

      <SettingSun progress={duaProgress} />

      {/* Enhanced atmospheric effects */}
      <DustParticles count={250} area={100} color="#E8D5B7" />
      <AtmosphericFog color="#E8C89C" near={60} far={250} />

      {/* Environment */}
      <ArafatPlains />
      <MountOfMercy />
      <PilgrimCrowd />

      {/* Player */}
      <PlayerPilgrim
        position={[0, 0, 5]}
        isDua={stage === 'dua' || stage === 'acceptance'}
      />

      {/* Golden sparkles at Mount of Mercy */}
      <GoldenSparkles position={[0, 55, -80]} active={true} />

      {/* Spiritual effects during dua */}
      <SpiritualParticles active={stage === 'dua' || stage === 'acceptance'} />

      {/* Enhanced atmospheric clouds */}
      <AtmosphericClouds count={10} />

      {/* Stars appearing as sun sets */}
      {duaProgress > 0.5 && (
        <Stars
          radius={200}
          depth={80}
          count={Math.floor(duaProgress * 3000)}
          factor={3}
          fade
          speed={0.3}
        />
      )}

      {/* Camera */}
      <CameraController
        lookAtMountain={stage === 'arrival'}
        isDuaMode={stage === 'dua' || stage === 'acceptance'}
      />
    </>
  );
};

// ============================================================
// DUAS FOR ARAFAT
// ============================================================
const ARAFAT_DUAS = [
  {
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    en: 'There is no god but Allah alone, without partner',
    ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں'
  },
  {
    arabic: 'لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    en: 'His is the dominion and His is the praise, and He has power over all things',
    ur: 'اسی کی بادشاہی ہے اور اسی کی حمد ہے، اور وہ ہر چیز پر قادر ہے'
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
    en: 'O Allah, I ask You for Paradise and seek refuge from the Fire',
    ur: 'اے اللہ میں تجھ سے جنت مانگتا ہوں اور جہنم سے پناہ مانگتا ہوں'
  },
  {
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    en: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the torment of the Fire',
    ur: 'اے ہمارے رب، ہمیں دنیا میں بھلائی دے اور آخرت میں بھی بھلائی دے اور ہمیں آگ کے عذاب سے بچا'
  }
];

// ============================================================
// MAIN COMPONENT
// ============================================================
const ArafatGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [stage, setStage] = useState('arrival'); // arrival, dua, acceptance, complete
  const [currentDuaIndex, setCurrentDuaIndex] = useState(0);
  const [duaProgress, setDuaProgress] = useState(0);
  const isRTL = language === 'ar' || language === 'ur';

  const text = {
    title: { en: 'Day of Arafah', ur: 'یوم عرفہ', ar: 'يوم عرفة' },
    subtitle: { en: 'The Greatest Pillar of Hajj', ur: 'حج کا سب سے بڑا رکن', ar: 'الركن الأعظم من أركان الحج' },
    hadith: {
      arabic: 'الحَجُّ عَرَفَة',
      en: '"Hajj is Arafah"',
      ur: '"حج عرفہ ہے"',
      source: 'Sunan al-Tirmidhi'
    },
    tapToDua: { en: 'Tap to begin your supplication', ur: 'دعا شروع کرنے کے لیے ٹیپ کریں', ar: 'اضغط لبدء الدعاء' },
    makingDua: { en: 'Making Dua...', ur: 'دعا کر رہے ہیں...', ar: 'تدعو...' },
    nextDua: { en: 'Tap for next dua', ur: 'اگلی دعا کے لیے ٹیپ کریں', ar: 'اضغط للدعاء التالي' },
    accepted: { en: 'Your dua has been heard', ur: 'آپ کی دعا سنی گئی', ar: 'دعاؤك مقبولة' },
    complete: { en: 'Arafah Complete!', ur: 'عرفات مکمل!', ar: 'اكتمل عرفة!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' }
  };

  // Progress through dua
  const handleDuaTap = useCallback(() => {
    if (stage === 'arrival') {
      setStage('dua');
    } else if (stage === 'dua') {
      if (currentDuaIndex < ARAFAT_DUAS.length - 1) {
        setCurrentDuaIndex(prev => prev + 1);
        setDuaProgress((currentDuaIndex + 1) / ARAFAT_DUAS.length);
      } else {
        setStage('acceptance');
        setDuaProgress(1);
        setTimeout(() => {
          setStage('complete');
        }, 3000);
      }
    }
  }, [stage, currentDuaIndex]);

  return (
    <div
      className="fixed inset-0 z-[10000]"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #F59E0B 0%, #D97706 50%, #92400E 100%)'
      }}
    >
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 30, 80], fov: 60 }}
        onClick={handleDuaTap}
        style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #E8D5B7 100%)' }}
      >
        <ArafatScene stage={stage} duaProgress={duaProgress} />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-50 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white pointer-events-auto"
        >
          ←
        </button>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="absolute top-4 right-4 z-50 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm pointer-events-auto"
        >
          {text.skip[language]} →
        </button>

        {/* Title */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
          <h1 className="text-white font-bold text-lg" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            🏔️ {text.title[language]}
          </h1>
          <p className="text-amber-300 text-sm" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            {text.subtitle[language]}
          </p>
        </div>

        {/* Arrival screen */}
        {stage === 'arrival' && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-2xl px-8 py-6 text-center max-w-md pointer-events-auto">
            <p className="text-2xl text-amber-400 mb-2" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
              {text.hadith.arabic}
            </p>
            <p className="text-white mb-1" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.hadith[language] || text.hadith.en}
            </p>
            <p className="text-white/50 text-xs mb-4">{text.hadith.source}</p>
            <button
              onClick={handleDuaTap}
              className="px-6 py-3 bg-amber-500 text-white font-bold rounded-full animate-pulse"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.tapToDua[language]}
            </button>
          </div>
        )}

        {/* Dua display */}
        {stage === 'dua' && (
          <div
            className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-2xl px-8 py-6 text-center max-w-lg pointer-events-auto"
            onClick={handleDuaTap}
          >
            {/* Progress dots */}
            <div className="flex justify-center gap-2 mb-4">
              {ARAFAT_DUAS.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i <= currentDuaIndex ? 'bg-amber-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Current dua */}
            <p
              className="text-3xl text-white mb-4 leading-relaxed"
              style={{ fontFamily: "'Scheherazade New', serif" }}
              dir="rtl"
            >
              {ARAFAT_DUAS[currentDuaIndex].arabic}
            </p>
            <p
              className="text-amber-300 mb-4"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {ARAFAT_DUAS[currentDuaIndex][language] || ARAFAT_DUAS[currentDuaIndex].en}
            </p>

            <p className="text-white/50 text-sm animate-pulse" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.nextDua[language]}
            </p>
          </div>
        )}

        {/* Acceptance animation */}
        {stage === 'acceptance' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-b from-amber-500/80 to-orange-600/80 backdrop-blur-sm rounded-3xl px-12 py-8 text-center animate-pulse">
              <span className="text-6xl block mb-4">🤲</span>
              <p
                className="text-white text-2xl font-bold"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.accepted[language]}
              </p>
              <p className="text-white/70 text-lg mt-2" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                آمين يا رب العالمين
              </p>
            </div>
          </div>
        )}

        {/* Complete screen */}
        {stage === 'complete' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-auto">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl px-12 py-8 text-center shadow-2xl">
              <span className="text-6xl block mb-4">🏔️</span>
              <p
                className="text-white text-2xl font-bold mb-4"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.complete[language]}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-2xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                ))}
              </div>
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-white text-amber-600 font-bold rounded-full"
              >
                {language === 'ar' ? 'إلى المزدلفة' : language === 'ur' ? 'مزدلفہ کی طرف' : 'To Muzdalifah'} →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArafatGameImmersive;
