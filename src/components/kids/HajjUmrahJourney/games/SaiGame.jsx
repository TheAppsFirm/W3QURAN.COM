/**
 * SaiGame.jsx
 * Interactive Sa'i game - Walk/run between Safa and Marwah 7 times
 *
 * Controls:
 * - Swipe or drag left/right to move
 * - Move faster in green zone (where men traditionally run)
 * - Complete 7 laps
 */

import React, { useRef, useState, useCallback, useEffect, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Colors
const ROCK_LIGHT = '#A8998A';
const ROCK_DARK = '#7A6B5E';
const MARBLE = '#F5F0E8';
const SKIN = '#F5C67A';
const WHITE_CLOTH = '#F8FAFC';
const GREEN_MARKER = '#10B981';

// ============================================================
// SAFA HILL
// ============================================================
const SafaHill = memo(() => (
  <group position={[-4, 0, 0]}>
    <mesh position={[0, 0.4, 0]}>
      <dodecahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color={ROCK_LIGHT} roughness={0.9} flatShading />
    </mesh>
    <mesh position={[0.4, 0.15, 0.3]}>
      <dodecahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial color={ROCK_DARK} roughness={0.9} flatShading />
    </mesh>

    {/* Sign */}
    <mesh position={[0, 1.5, 0]}>
      <boxGeometry args={[0.8, 0.2, 0.05]} />
      <meshStandardMaterial color={GREEN_MARKER} />
    </mesh>
    <mesh position={[0, 0.9, 0]}>
      <cylinderGeometry args={[0.04, 0.04, 1, 6]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  </group>
));

// ============================================================
// MARWAH HILL
// ============================================================
const MarwahHill = memo(() => (
  <group position={[4, 0, 0]}>
    <mesh position={[0, 0.45, 0]}>
      <dodecahedronGeometry args={[1.1, 1]} />
      <meshStandardMaterial color={ROCK_DARK} roughness={0.9} flatShading />
    </mesh>
    <mesh position={[-0.4, 0.2, 0.2]}>
      <dodecahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial color={ROCK_LIGHT} roughness={0.9} flatShading />
    </mesh>

    {/* Sign */}
    <mesh position={[0, 1.5, 0]}>
      <boxGeometry args={[0.8, 0.2, 0.05]} />
      <meshStandardMaterial color={GREEN_MARKER} />
    </mesh>
    <mesh position={[0, 0.9, 0]}>
      <cylinderGeometry args={[0.04, 0.04, 1, 6]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  </group>
));

// ============================================================
// MAS'A CORRIDOR
// ============================================================
const MasaCorridor = memo(() => (
  <group>
    {/* Floor */}
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 3]} />
      <meshStandardMaterial color={MARBLE} roughness={0.3} />
    </mesh>

    {/* Green zone (running area) */}
    <mesh position={[0, 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2.5, 2.8]} />
      <meshStandardMaterial color="#D1FAE5" transparent opacity={0.6} />
    </mesh>

    {/* Green light markers */}
    <mesh position={[-1.25, 0.6, 1.4]}>
      <boxGeometry args={[0.15, 0.15, 0.05]} />
      <meshBasicMaterial color={GREEN_MARKER} />
    </mesh>
    <mesh position={[1.25, 0.6, 1.4]}>
      <boxGeometry args={[0.15, 0.15, 0.05]} />
      <meshBasicMaterial color={GREEN_MARKER} />
    </mesh>

    {/* Columns */}
    {[-3, -1.5, 0, 1.5, 3].map((x, i) => (
      <group key={i}>
        <mesh position={[x, 0.8, 1.4]}>
          <cylinderGeometry args={[0.08, 0.1, 1.6, 8]} />
          <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
        </mesh>
        <mesh position={[x, 0.8, -1.4]}>
          <cylinderGeometry args={[0.08, 0.1, 1.6, 8]} />
          <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
        </mesh>
      </group>
    ))}

    {/* Ceiling */}
    <mesh position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 3]} />
      <meshStandardMaterial color="#F8FAFC" side={THREE.DoubleSide} />
    </mesh>

    {/* Arches */}
    {[-2.25, -0.75, 0.75, 2.25].map((x, i) => (
      <mesh key={i} position={[x, 1.6, 1.4]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.04, 8, 12, Math.PI]} />
        <meshStandardMaterial color="#E8E0D0" />
      </mesh>
    ))}
  </group>
));

// ============================================================
// PLAYER AVATAR
// ============================================================
const PlayerAvatar = ({ positionX, isMoving, isRunning }) => {
  const groupRef = useRef();
  const legLRef = useRef();
  const legRRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Position
    groupRef.current.position.x = positionX;

    // Face direction of movement
    groupRef.current.rotation.y = positionX > groupRef.current.userData.lastX ? Math.PI / 2 : -Math.PI / 2;
    groupRef.current.userData.lastX = positionX;

    // Walking/running animation
    if (isMoving) {
      const speed = isRunning ? 12 : 6;
      const bounce = isRunning ? 0.06 : 0.03;
      groupRef.current.position.y = Math.abs(Math.sin(t * speed)) * bounce;

      // Leg animation
      if (legLRef.current && legRRef.current) {
        const swing = Math.sin(t * speed) * (isRunning ? 0.5 : 0.3);
        legLRef.current.rotation.x = swing;
        legRRef.current.rotation.x = -swing;
      }
    } else {
      groupRef.current.position.y = 0;
    }
  });

  return (
    <group ref={groupRef} position={[positionX, 0, 0]} scale={1.5} userData={{ lastX: positionX }}>
      {/* Body */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.4, 12]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>

      {/* Lower body */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.35, 12]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.5} />
      </mesh>

      {/* Head */}
      <group position={[0, 0.65, 0]}>
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
      </group>

      {/* Arms swinging */}
      <mesh position={[-0.12, 0.4, 0]} rotation={[isRunning ? -0.8 : -0.3, 0, 0.3]}>
        <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
      <mesh position={[0.12, 0.4, 0]} rotation={[isRunning ? -0.8 : -0.3, 0, -0.3]}>
        <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>

      {/* Legs */}
      <group ref={legLRef} position={[-0.04, -0.1, 0]}>
        <mesh>
          <capsuleGeometry args={[0.03, 0.15, 4, 8]} />
          <meshStandardMaterial color="#E2E8F0" roughness={0.5} />
        </mesh>
      </group>
      <group ref={legRRef} position={[0.04, -0.1, 0]}>
        <mesh>
          <capsuleGeometry args={[0.03, 0.15, 4, 8]} />
          <meshStandardMaterial color="#E2E8F0" roughness={0.5} />
        </mesh>
      </group>

      {/* Player indicator */}
      <pointLight position={[0, 0.5, 0]} intensity={0.5} color="#10B981" distance={1} />
    </group>
  );
};

// ============================================================
// NPC PILGRIMS
// ============================================================
const NPCPilgrims = memo(() => {
  const groupRef = useRef();
  const pilgrims = useRef(
    Array.from({ length: 8 }, (_, i) => ({
      x: -3 + Math.random() * 6,
      z: -0.8 + Math.random() * 1.6,
      speed: 0.3 + Math.random() * 0.4,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))
  ).current;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      const p = pilgrims[i];
      p.x += p.speed * p.direction * 0.01;

      // Bounce at edges
      if (p.x > 3.5) { p.direction = -1; }
      if (p.x < -3.5) { p.direction = 1; }

      child.position.x = p.x;
      child.position.z = p.z;
      child.position.y = Math.abs(Math.sin(t * 5 + i)) * 0.02;
      child.rotation.y = p.direction > 0 ? Math.PI / 2 : -Math.PI / 2;
    });
  });

  return (
    <group ref={groupRef}>
      {pilgrims.map((p, i) => (
        <group key={i} position={[p.x, 0, p.z]} scale={0.6}>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.35, 8]} />
            <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.08, 10, 10]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        </group>
      ))}
    </group>
  );
});

// ============================================================
// LIGHTING
// ============================================================
const Lighting = memo(() => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 4, 3]} intensity={0.8} color="#FFF8E1" />
    <pointLight position={[0, 2, 0]} intensity={0.4} color="#FDE68A" distance={6} />
    <pointLight position={[-4, 1, 0]} intensity={0.3} color="#FFF5E0" distance={4} />
    <pointLight position={[4, 1, 0]} intensity={0.3} color="#FFF5E0" distance={4} />
  </>
));

// ============================================================
// MAIN GAME COMPONENT
// ============================================================
const SaiGame = ({ language = 'en', onComplete, onBack }) => {
  const [positionX, setPositionX] = useState(-3.5); // Start at Safa
  const [laps, setLaps] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = towards Marwah, -1 = towards Safa
  const [showDua, setShowDua] = useState(false);
  const [currentDua, setCurrentDua] = useState('safa');
  const [gameComplete, setGameComplete] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const moveIntervalRef = useRef(null);
  const isRTL = language === 'ar' || language === 'ur';

  // Check if in green zone (running zone)
  const isInGreenZone = Math.abs(positionX) < 1.25;

  // Text content
  const text = {
    title: { en: "Sa'i", ur: 'سعی', ar: 'السعي' },
    instruction: {
      en: 'Swipe left/right to walk',
      ur: 'چلنے کے لیے بائیں/دائیں سوائپ کریں',
      ar: 'اسحب يميناً/يساراً للمشي',
    },
    runHint: {
      en: '🏃 Run faster in green zone!',
      ur: '🏃 سبز زون میں تیز دوڑیں!',
      ar: '🏃 اركض أسرع في المنطقة الخضراء!',
    },
    laps: { en: 'Laps', ur: 'چکر', ar: 'أشواط' },
    safa: { en: 'Safa', ur: 'صفا', ar: 'الصفا' },
    marwah: { en: 'Marwah', ur: 'مروہ', ar: 'المروة' },
    complete: {
      en: "Sa'i Complete! 🎉",
      ur: 'سعی مکمل! 🎉',
      ar: 'اكتمل السعي! 🎉',
    },
    duas: {
      safa: {
        arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
        en: 'Indeed, Safa and Marwah are among the symbols of Allah.',
        ur: 'بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔',
      },
      marwah: {
        arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ الأَعَزُّ الأَكْرَمُ',
        en: 'My Lord, forgive and have mercy, for You are the Most Mighty, Most Generous.',
        ur: 'اے میرے رب! معاف فرما اور رحم کر، تو ہی سب سے عزت والا اور کرم والا ہے۔',
      },
    },
    next: { en: 'Next Step', ur: 'اگلا مرحلہ', ar: 'الخطوة التالية' },
  };

  // Move player
  const movePlayer = useCallback((dir) => {
    setPositionX((prev) => {
      const speed = isInGreenZone ? 0.08 : 0.05;
      const newX = prev + (dir * speed);

      // Reached Marwah
      if (newX >= 3.5 && dir > 0) {
        setLaps((l) => {
          const newLaps = l + 1;
          if (newLaps >= 7) {
            setGameComplete(true);
          }
          return newLaps;
        });
        setDirection(-1);
        setCurrentDua('marwah');
        setShowDua(true);
        setTimeout(() => setShowDua(false), 3000);
        return 3.5;
      }

      // Reached Safa
      if (newX <= -3.5 && dir < 0) {
        setLaps((l) => l); // Don't increment on return to Safa
        setDirection(1);
        setCurrentDua('safa');
        setShowDua(true);
        setTimeout(() => setShowDua(false), 3000);
        return -3.5;
      }

      return Math.max(-3.5, Math.min(3.5, newX));
    });
  }, [isInGreenZone]);

  // Touch handlers
  const handleTouchStart = (e) => {
    if (gameComplete) return;
    const touch = e.touches?.[0] || e;
    setTouchStartX(touch.clientX);
    setIsMoving(true);
  };

  const handleTouchMove = (e) => {
    if (gameComplete || touchStartX === null) return;
    const touch = e.touches?.[0] || e;
    const diff = touch.clientX - touchStartX;

    if (Math.abs(diff) > 5) {
      const dir = diff > 0 ? 1 : -1;
      movePlayer(dir);
      setTouchStartX(touch.clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsMoving(false);
    setTouchStartX(null);
  };

  // Mouse drag for desktop
  const handleMouseDown = (e) => {
    handleTouchStart(e);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    handleTouchMove(e);
  };

  const handleMouseUp = () => {
    handleTouchEnd();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Calculate progress percentage
  const progressPercent = ((laps + (direction > 0 ? (positionX + 3.5) / 7 : 0)) / 7) * 100;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #F5F0E8 0%, #E8E0D0 40%, #D4C8B8 100%)',
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

        <div className="flex items-center gap-3">
          <span className="text-3xl">🏔️</span>
          <h1
            className="text-xl font-bold text-gray-800"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {text.title[language]}
          </h1>
        </div>

        {/* Lap counter */}
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/90 rounded-full shadow-lg">
          <span className="text-white font-bold">{Math.min(laps, 7)}/7</span>
          <span className="text-white/80 text-sm">{text.laps[language]}</span>
        </div>
      </div>

      {/* Location indicators */}
      <div className="flex justify-between px-8 py-2 z-10">
        <div className={`px-4 py-1 rounded-full ${positionX < -2 ? 'bg-emerald-500 text-white' : 'bg-white/50 text-gray-600'}`}>
          {text.safa[language]} 🏔️
        </div>
        <div className={`px-4 py-1 rounded-full ${positionX > 2 ? 'bg-emerald-500 text-white' : 'bg-white/50 text-gray-600'}`}>
          🏔️ {text.marwah[language]}
        </div>
      </div>

      {/* 3D Canvas */}
      <div
        className="flex-1 relative cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <Canvas
          camera={{ position: [0, 2.5, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Lighting />
          <MasaCorridor />
          <SafaHill />
          <MarwahHill />
          <PlayerAvatar positionX={positionX} isMoving={isMoving} isRunning={isInGreenZone && isMoving} />
          <NPCPilgrims />
        </Canvas>

        {/* Green zone hint */}
        {isInGreenZone && isMoving && (
          <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
            <div className="px-4 py-2 bg-emerald-500/90 rounded-full text-white font-bold animate-pulse">
              {text.runHint[language]}
            </div>
          </div>
        )}

        {/* Instruction overlay */}
        {!gameComplete && !isMoving && (
          <div className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none">
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
          <div className="absolute inset-x-4 top-8 flex justify-center pointer-events-none z-30">
            <div className="max-w-md p-4 bg-emerald-900/90 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
              <p className="text-emerald-300 text-sm mb-2">
                🤲 {currentDua === 'safa' ? text.safa[language] : text.marwah[language]}
              </p>
              <p
                className="text-white text-lg text-center mb-2 leading-loose"
                style={{ fontFamily: "'Scheherazade New', serif" }}
                dir="rtl"
              >
                {text.duas[currentDua].arabic}
              </p>
              <p
                className="text-white/80 text-sm text-center"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.duas[currentDua][language] || text.duas[currentDua].en}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="p-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <span className="text-2xl">🏔️</span>
          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300"
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            />
          </div>
          <span className="text-2xl">🏔️</span>
        </div>
        <div className="flex justify-center mt-2 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                i < laps
                  ? 'bg-emerald-500 text-white'
                  : i === laps
                  ? 'bg-amber-500 text-white animate-pulse'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              {i + 1}
            </div>
          ))}
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
              {language === 'en' && 'You completed 7 laps between Safa and Marwah!'}
              {language === 'ur' && 'آپ نے صفا اور مروہ کے درمیان 7 چکر مکمل کر لیے!'}
              {language === 'ar' && 'لقد أكملت 7 أشواط بين الصفا والمروة!'}
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

export default SaiGame;
