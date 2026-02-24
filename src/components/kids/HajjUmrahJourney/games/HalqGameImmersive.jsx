/**
 * HalqGameImmersive.jsx
 * Immersive 3D experience for Halq/Taqsir (hair cutting)
 * Marks the partial exit from Ihram
 */

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sky, Text, Float, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { EnhancedLighting, AtmosphericFog, DustParticles, GoldenSparkles, EnhancedSky, RealisticPilgrim } from './EnhancedGraphics';

// ============================================================
// 3D COMPONENTS
// ============================================================

// Barber shop / salon area
const BarberArea = () => {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#C4B8A8" roughness={0.9} />
      </mesh>

      {/* Tent structure */}
      <mesh position={[0, 4, 0]}>
        <coneGeometry args={[12, 8, 8]} />
        <meshStandardMaterial color="#F5F5F5" roughness={0.8} side={THREE.DoubleSide} />
      </mesh>

      {/* Support poles */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 10, 2, Math.sin(angle) * 10]}>
            <cylinderGeometry args={[0.2, 0.2, 4, 8]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        );
      })}

      {/* Floor mat */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color="#2E7D32" roughness={0.9} />
      </mesh>
    </group>
  );
};

// Barber chairs
const BarberChairs = ({ activeChair }) => {
  const chairs = [
    { id: 0, position: [-5, 0, 0], occupied: true },
    { id: 1, position: [0, 0, 0], occupied: false }, // Player's chair
    { id: 2, position: [5, 0, 0], occupied: true },
  ];

  return (
    <group>
      {chairs.map((chair) => (
        <group key={chair.id} position={chair.position}>
          {/* Chair base */}
          <mesh position={[0, 0.3, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 0.3, 16]} />
            <meshStandardMaterial color="#4A4A4A" />
          </mesh>

          {/* Chair seat */}
          <mesh position={[0, 0.6, 0]}>
            <boxGeometry args={[1.2, 0.3, 1.2]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          {/* Chair back */}
          <mesh position={[0, 1.2, -0.5]}>
            <boxGeometry args={[1.2, 1.2, 0.2]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          {/* Mirror */}
          <mesh position={[0, 1.5, 2]}>
            <boxGeometry args={[1.5, 2, 0.1]} />
            <meshStandardMaterial color="#87CEEB" metalness={0.9} roughness={0.1} />
          </mesh>

          {/* Mirror frame */}
          <mesh position={[0, 1.5, 1.95]}>
            <boxGeometry args={[1.7, 2.2, 0.05]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          {/* Highlight active chair */}
          {chair.id === activeChair && (
            <pointLight position={[0, 2, 0]} intensity={0.5} color="#FFD700" distance={5} />
          )}

          {/* Occupied chairs have pilgrims */}
          {chair.occupied && (
            <group position={[0, 0.9, 0]}>
              <mesh position={[0, 0.5, 0]}>
                <capsuleGeometry args={[0.3, 0.5, 8, 8]} />
                <meshStandardMaterial color="#FAFAFA" />
              </mesh>
              <mesh position={[0, 1.1, 0]}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#D4A574" />
              </mesh>
            </group>
          )}
        </group>
      ))}
    </group>
  );
};

// Player pilgrim getting haircut (Using RealisticPilgrim GLB model)
const PlayerPilgrim = ({ position, hairProgress }) => {
  return (
    <group position={position}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={1.2}
        isMoving={false}
        isDuaPosition={false}
      />
      {/* Cape/cloth overlay for barber scene */}
      <mesh position={[0, 0.8, 0.1]}>
        <coneGeometry args={[0.8, 1, 16, 1, true]} />
        <meshStandardMaterial color="#FFFFFF" side={THREE.DoubleSide} opacity={0.9} transparent />
      </mesh>
    </group>
  );
};

// Barber character
const Barber = ({ position, isWorking }) => {
  const armRef = useRef();

  useFrame((state) => {
    if (armRef.current && isWorking) {
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 5) * 0.3 + 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <capsuleGeometry args={[0.4, 1, 8, 16]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#D4A574" />
      </mesh>

      {/* Arm with razor/scissors */}
      <group ref={armRef} position={[0.5, 1.5, 0.3]}>
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, 1]}>
          <capsuleGeometry args={[0.08, 0.5, 8, 8]} />
          <meshStandardMaterial color="#D4A574" />
        </mesh>
        {/* Razor */}
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.15, 0.05, 0.3]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
};

// Falling hair particles
const FallingHair = ({ active }) => {
  const particlesRef = useRef([]);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 1,
      startY: 1.5 + Math.random() * 0.5,
      speed: 0.5 + Math.random() * 0.5
    }));
  }, []);

  useFrame((state) => {
    if (!active) return;
    particlesRef.current.forEach((p, i) => {
      if (p) {
        const data = particles[i];
        p.position.y = ((data.startY - state.clock.elapsedTime * data.speed) % 2) + 0.5;
        p.position.x = data.startX + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1;
      }
    });
  });

  if (!active) return null;

  return (
    <group position={[0, 0, 0]}>
      {particles.map((p, i) => (
        <mesh
          key={p.id}
          ref={(el) => (particlesRef.current[i] = el)}
          position={[p.startX, p.startY, 0]}
        >
          <sphereGeometry args={[0.02, 4, 4]} />
          <meshStandardMaterial color="#2D2D2D" />
        </mesh>
      ))}
    </group>
  );
};

// Camera controller
const CameraController = ({ stage }) => {
  const { camera } = useThree();

  useFrame(() => {
    let target;
    if (stage === 'cutting') {
      target = new THREE.Vector3(2, 2.5, 4);
    } else {
      target = new THREE.Vector3(0, 4, 12);
    }
    camera.position.lerp(target, 0.03);
    camera.lookAt(0, 1.5, 0);
  });

  return null;
};

// Main scene
const HalqScene = ({ stage, hairProgress }) => {
  return (
    <>
      {/* Enhanced Lighting */}
      <EnhancedLighting
        sunPosition={[10, 20, 10]}
        ambientIntensity={0.5}
        shadowQuality="high"
        warmth={0.2}
      />

      {/* Additional interior lighting */}
      <pointLight position={[0, 6, 0]} intensity={0.8} color="#FFF8E0" distance={20} />
      <pointLight position={[-5, 3, 2]} intensity={0.3} color="#FFE4C4" distance={10} />
      <pointLight position={[5, 3, 2]} intensity={0.3} color="#FFE4C4" distance={10} />

      {/* Enhanced Sky */}
      <EnhancedSky timeOfDay="day" showStars={false} />
      <Stars radius={150} depth={60} count={800} factor={2} fade speed={0.2} />

      {/* Atmospheric effects */}
      <DustParticles count={80} area={25} color="#E8D5B7" />
      <AtmosphericFog color="#E8D5B7" near={30} far={100} />

      {/* Environment */}
      <BarberArea />
      <BarberChairs activeChair={1} />

      {/* Player in chair */}
      <PlayerPilgrim position={[0, 0.7, 0]} hairProgress={hairProgress} />

      {/* Barber */}
      <Barber position={[-0.8, 0, 0.5]} isWorking={stage === 'cutting'} />

      {/* Falling hair */}
      <FallingHair active={stage === 'cutting'} />

      {/* Enhanced sparkles for completion */}
      {stage === 'complete' && (
        <>
          <GoldenSparkles position={[0, 2, 0]} active={true} />
          <Sparkles count={80} scale={8} size={5} speed={1.2} color="#FFD700" position={[0, 2, 0]} />
          <Sparkles count={50} scale={6} size={3} speed={0.8} color="#FFFFFF" position={[0, 2.5, 0]} />
        </>
      )}

      {/* Camera */}
      <CameraController stage={stage} />
    </>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const HalqGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [stage, setStage] = useState('intro'); // intro, cutting, dua, complete
  const [hairProgress, setHairProgress] = useState(0);
  const isRTL = language === 'ar' || language === 'ur';

  const text = {
    title: { en: 'Halq / Taqsir', ur: 'حلق / تقصیر', ar: 'الحلق / التقصير' },
    intro: {
      title: { en: 'Time to Shave', ur: 'بال کٹوانے کا وقت', ar: 'وقت الحلق' },
      text: {
        en: 'Men shave their heads (Halq) or trim hair (Taqsir). Women cut a fingertip length. This marks partial exit from Ihram.',
        ur: 'مرد سر منڈواتے ہیں (حلق) یا بال کٹواتے ہیں (تقصیر)۔ خواتین انگلی کے برابر کاٹتی ہیں۔ یہ احرام سے جزوی خروج ہے۔',
        ar: 'يحلق الرجال رؤوسهم (الحلق) أو يقصرون الشعر (التقصير). تقصر النساء قدر أنملة. هذا يمثل الخروج الجزئي من الإحرام.'
      }
    },
    cutting: { en: 'Getting haircut...', ur: 'بال کٹ رہے ہیں...', ar: 'جاري الحلق...' },
    dua: {
      arabic: 'اللَّهُمَّ اغْفِرْ لِي ذُنُوبِي',
      en: 'O Allah, forgive my sins',
      ur: 'اے اللہ میرے گناہ معاف فرما'
    },
    complete: { en: 'Halq Complete!', ur: 'حلق مکمل!', ar: 'اكتمل الحلق!' },
    freedom: {
      en: 'You have partially exited Ihram! You may now wear regular clothes.',
      ur: 'آپ جزوی طور پر احرام سے باہر آ گئے! اب آپ عام کپڑے پہن سکتے ہیں۔',
      ar: 'خرجت جزئياً من الإحرام! يمكنك الآن ارتداء الملابس العادية.'
    },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    start: { en: 'Start', ur: 'شروع کریں', ar: 'ابدأ' }
  };

  // Animate hair cutting
  useEffect(() => {
    if (stage === 'cutting') {
      const interval = setInterval(() => {
        setHairProgress(prev => {
          if (prev >= 1) {
            clearInterval(interval);
            setTimeout(() => setStage('dua'), 500);
            return 1;
          }
          return prev + 0.05;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [stage]);

  const handleStart = () => {
    setStage('cutting');
  };

  return (
    <div
      className="fixed inset-0 z-[10000]"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #87CEEB 0%, #D4B896 100%)'
      }}
    >
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 4, 12], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #D4B896 100%)' }}
      >
        <HalqScene stage={stage} hairProgress={hairProgress} />
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
            ✂️ {text.title[language]}
          </h1>
        </div>

        {/* Intro */}
        {stage === 'intro' && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-6 max-w-md text-center pointer-events-auto">
            <h2 className="text-amber-400 text-xl font-bold mb-3" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.intro.title[language]}
            </h2>
            <p className="text-white text-sm leading-relaxed mb-4" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.intro.text[language]}
            </p>
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-full"
            >
              {text.start[language]} ✂️
            </button>
          </div>
        )}

        {/* Cutting progress */}
        {stage === 'cutting' && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-4 text-center">
            <p className="text-white mb-3" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.cutting[language]}
            </p>
            {/* Progress bar */}
            <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-100"
                style={{ width: `${hairProgress * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Dua stage */}
        {stage === 'dua' && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
            onClick={() => setStage('complete')}
          >
            <div className="bg-black/70 backdrop-blur-sm rounded-3xl px-12 py-8 text-center">
              <span className="text-5xl block mb-4">🤲</span>
              <p className="text-3xl text-white mb-4" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                {text.dua.arabic}
              </p>
              <p className="text-amber-400" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {text.dua[language] || text.dua.en}
              </p>
              <p className="text-white/50 text-sm mt-4">
                {language === 'ar' ? 'اضغط للمتابعة' : language === 'ur' ? 'جاری رکھنے کے لیے ٹیپ کریں' : 'Tap to continue'}
              </p>
            </div>
          </div>
        )}

        {/* Complete */}
        {stage === 'complete' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-auto">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl px-12 py-8 text-center shadow-2xl max-w-sm">
              <span className="text-6xl block mb-4">✂️</span>
              <p
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.complete[language]}
              </p>
              <p
                className="text-white/80 text-sm mb-4"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.freedom[language]}
              </p>
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full"
              >
                {language === 'ar' ? 'إلى الطواف' : language === 'ur' ? 'طواف کی طرف' : 'To Tawaf'} →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HalqGameImmersive;
