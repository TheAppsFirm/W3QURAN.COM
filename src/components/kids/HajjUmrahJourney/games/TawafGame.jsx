/**
 * TawafGame.jsx
 * Interactive 3D Tawaf game - User walks around Kaaba 7 times
 *
 * Controls:
 * - Tap/Click to move forward
 * - Hold to walk continuously
 * - Complete 7 rounds around Kaaba
 */

import React, { useRef, useState, useCallback, useEffect, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Colors
const KAABA_BLACK = '#1a1a1a';
const GOLD = '#D4AF37';
const MARBLE = '#F5F0E8';
const SKIN = '#F5C67A';
const WHITE_CLOTH = '#F8FAFC';

// ============================================================
// THE KAABA
// ============================================================
const Kaaba = memo(() => (
  <group position={[0, 0, 0]}>
    {/* Main black cube */}
    <mesh position={[0, 0.6, 0]}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color={KAABA_BLACK} roughness={0.8} />
    </mesh>

    {/* Golden band */}
    {[[0, 0.9, 0.61], [0, 0.9, -0.61]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <boxGeometry args={[1.22, 0.12, 0.02]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
      </mesh>
    ))}
    {[[0.61, 0.9, 0], [-0.61, 0.9, 0]].map((pos, i) => (
      <mesh key={`side-${i}`} position={pos}>
        <boxGeometry args={[0.02, 0.12, 1.22]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
      </mesh>
    ))}

    {/* Hajar al-Aswad (Black Stone) - Starting point marker */}
    <mesh position={[0.65, 0.5, 0.65]} rotation={[0, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0.1, 0.1, 0.2, 8]} />
      <meshStandardMaterial color="#2a2a2a" roughness={0.5} />
    </mesh>
    <mesh position={[0.65, 0.5, 0.65]} rotation={[0, Math.PI / 4, 0]}>
      <torusGeometry args={[0.12, 0.02, 8, 16]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
    </mesh>

    {/* Door */}
    <mesh position={[0, 0.7, 0.615]}>
      <boxGeometry args={[0.35, 0.5, 0.02]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
    </mesh>
  </group>
));

// ============================================================
// MATAF FLOOR
// ============================================================
const Mataf = memo(() => (
  <group>
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[4, 64]} />
      <meshStandardMaterial color={MARBLE} roughness={0.3} />
    </mesh>

    {/* Guide rings */}
    {[1.8, 2.2, 2.6, 3.0].map((r, i) => (
      <mesh key={i} position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[r - 0.02, r + 0.02, 64]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.4} />
      </mesh>
    ))}

    {/* Starting line (green) */}
    <mesh position={[1.5, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[0.1, 1.5]} />
      <meshStandardMaterial color="#10B981" />
    </mesh>
  </group>
));

// ============================================================
// PLAYER AVATAR (User controlled)
// ============================================================
const PlayerAvatar = ({ angle, isMoving }) => {
  const groupRef = useRef();
  const bodyRef = useRef();
  const radius = 2;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Position on circle
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    groupRef.current.position.x = x;
    groupRef.current.position.z = z;
    groupRef.current.rotation.y = angle + Math.PI / 2;

    // Walking animation when moving
    if (isMoving && bodyRef.current) {
      groupRef.current.position.y = Math.abs(Math.sin(t * 8)) * 0.03;
    } else {
      groupRef.current.position.y = 0;
    }
  });

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Body in Ihram */}
      <mesh ref={bodyRef} position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.35, 12]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.4, 12]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.5} />
      </mesh>

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

      {/* Arms raised in dua */}
      <mesh position={[-0.12, 0.35, 0.05]} rotation={[-0.5, 0, 0.4]}>
        <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
      <mesh position={[0.12, 0.35, 0.05]} rotation={[-0.5, 0, -0.4]}>
        <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>

      {/* Glow indicator */}
      <pointLight position={[0, 0.5, 0]} intensity={0.5} color="#10B981" distance={1} />
    </group>
  );
};

// ============================================================
// OTHER PILGRIMS (Background NPCs)
// ============================================================
const NPCPilgrims = memo(() => {
  const groupRef = useRef();
  const pilgrims = Array.from({ length: 12 }, (_, i) => ({
    radius: 1.5 + Math.random() * 1.5,
    speed: 0.15 + Math.random() * 0.1,
    startAngle: (i / 12) * Math.PI * 2,
  }));

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      const p = pilgrims[i];
      const angle = p.startAngle - t * p.speed;
      child.position.x = Math.sin(angle) * p.radius;
      child.position.z = Math.cos(angle) * p.radius;
      child.position.y = Math.sin(t * 4 + i) * 0.01;
      child.rotation.y = angle + Math.PI / 2;
    });
  });

  return (
    <group ref={groupRef}>
      {pilgrims.map((_, i) => (
        <group key={i} scale={0.7}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.3, 8]} />
            <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.45, 0]}>
            <sphereGeometry args={[0.07, 10, 10]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        </group>
      ))}
    </group>
  );
});

// ============================================================
// ATMOSPHERE
// ============================================================
const Atmosphere = memo(() => (
  <>
    <mesh position={[0, 6, 0]}>
      <sphereGeometry args={[10, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshBasicMaterial color="#1a365d" side={THREE.BackSide} />
    </mesh>

    {/* Stars */}
    {Array.from({ length: 40 }).map((_, i) => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.4;
      const r = 9;
      return (
        <mesh
          key={i}
          position={[
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.cos(phi) + 2,
            r * Math.sin(phi) * Math.sin(theta)
          ]}
        >
          <sphereGeometry args={[0.02 + Math.random() * 0.02, 4, 4]} />
          <meshBasicMaterial color="#FEF3C7" />
        </mesh>
      );
    })}

    {/* Moon */}
    <mesh position={[4, 5, -4]}>
      <sphereGeometry args={[0.4, 16, 16]} />
      <meshBasicMaterial color="#FEF9C3" />
    </mesh>
  </>
));

// ============================================================
// LIGHTING
// ============================================================
const Lighting = memo(() => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[3, 5, 2]} intensity={0.8} color="#FFF8E1" />
    <pointLight position={[0, 3, 0]} intensity={0.5} color="#FDE68A" distance={8} />
  </>
));

// ============================================================
// MAIN GAME COMPONENT
// ============================================================
const TawafGame = ({ language = 'en', onComplete, onBack }) => {
  const [angle, setAngle] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const lastCrossRef = useRef(0);
  const intervalRef = useRef(null);

  const isRTL = language === 'ar' || language === 'ur';

  // Text content
  const text = {
    title: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' },
    instruction: {
      en: 'Tap & hold to walk around the Kaaba',
      ur: 'کعبہ کے گرد چلنے کے لیے دبائیں اور پکڑیں',
      ar: 'اضغط مع الاستمرار للطواف حول الكعبة',
    },
    rounds: { en: 'Rounds', ur: 'چکر', ar: 'أشواط' },
    complete: {
      en: 'Tawaf Complete! 🎉',
      ur: 'طواف مکمل! 🎉',
      ar: 'اكتمل الطواف! 🎉',
    },
    dua: {
      arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      en: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the torment of the Fire.',
      ur: 'اے ہمارے رب! ہمیں دنیا میں بھی بھلائی دے اور آخرت میں بھی بھلائی دے اور ہمیں آگ کے عذاب سے بچا۔',
    },
    next: { en: 'Next Step', ur: 'اگلا مرحلہ', ar: 'الخطوة التالية' },
  };

  // Move player
  const movePlayer = useCallback(() => {
    setAngle((prev) => {
      const newAngle = prev - 0.03; // Counter-clockwise

      // Check if crossed starting line (angle passes through 0)
      const prevNorm = ((lastCrossRef.current % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const newNorm = ((newAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

      // Detect crossing (from ~6.28 to ~0)
      if (prevNorm > 5 && newNorm < 1) {
        setRounds((r) => {
          const newRounds = r + 1;
          if (newRounds >= 7) {
            setGameComplete(true);
          } else if (newRounds === 3 || newRounds === 5) {
            setShowDua(true);
            setTimeout(() => setShowDua(false), 4000);
          }
          return newRounds;
        });
      }

      lastCrossRef.current = newAngle;
      return newAngle;
    });
  }, []);

  // Handle touch/click
  const handlePointerDown = useCallback(() => {
    if (gameComplete) return;
    setIsMoving(true);
    intervalRef.current = setInterval(movePlayer, 50);
  }, [movePlayer, gameComplete]);

  const handlePointerUp = useCallback(() => {
    setIsMoving(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #1a365d 0%, #2d3748 40%, #4a5568 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 z-20">
        <button
          onClick={onBack}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white"
        >
          ←
        </button>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🕋</span>
          <h1
            className="text-xl font-bold text-white"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {text.title[language]}
          </h1>
        </div>

        {/* Round counter */}
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/90 rounded-full">
          <span className="text-white font-bold">{Math.min(rounds, 7)}/7</span>
          <span className="text-white/80 text-sm">{text.rounds[language]}</span>
        </div>
      </div>

      {/* 3D Canvas */}
      <div
        className="flex-1 relative"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        <Canvas
          camera={{ position: [0, 4, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Lighting />
          <Atmosphere />
          <Mataf />
          <Kaaba />
          <PlayerAvatar angle={angle} isMoving={isMoving} />
          <NPCPilgrims />
        </Canvas>

        {/* Instruction overlay */}
        {!gameComplete && !isMoving && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
            <div className="px-6 py-3 bg-black/60 backdrop-blur-sm rounded-full">
              <p
                className="text-white text-center"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                👆 {text.instruction[language]}
              </p>
            </div>
          </div>
        )}

        {/* Dua popup */}
        {showDua && (
          <div className="absolute inset-x-4 top-1/4 flex justify-center pointer-events-none">
            <div className="max-w-md p-4 bg-emerald-900/90 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
              <p className="text-emerald-300 text-sm mb-2">🤲 Dua</p>
              <p
                className="text-white text-xl text-center mb-2 leading-loose"
                style={{ fontFamily: "'Scheherazade New', serif" }}
                dir="rtl"
              >
                {text.dua.arabic}
              </p>
              <p
                className="text-white/80 text-sm text-center"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.dua[language] || text.dua.en}
              </p>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
          <div className="flex gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  i < rounds
                    ? 'bg-emerald-500 text-white scale-100'
                    : i === rounds
                    ? 'bg-amber-500 text-white scale-110 animate-pulse'
                    : 'bg-white/20 text-white/50'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Completion modal */}
      {gameComplete && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-30">
          <div className="bg-white rounded-3xl p-8 mx-4 max-w-sm text-center animate-bounce-in">
            <div className="text-6xl mb-4">🎉</div>
            <h2
              className="text-2xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.complete[language]}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'en' && 'You completed 7 rounds around the Holy Kaaba!'}
              {language === 'ur' && 'آپ نے کعبہ مقدس کے 7 چکر مکمل کر لیے!'}
              {language === 'ar' && 'لقد أكملت 7 أشواط حول الكعبة المشرفة!'}
            </p>
            <button
              onClick={onComplete}
              className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.next[language]} →
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TawafGame;
