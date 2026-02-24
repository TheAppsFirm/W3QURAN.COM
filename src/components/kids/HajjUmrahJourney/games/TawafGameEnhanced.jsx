/**
 * TawafGameEnhanced.jsx
 * Enhanced 3D Tawaf game with realistic visuals
 *
 * Features:
 * - Realistic lighting and shadows
 * - Atmospheric effects (dust particles, light rays)
 * - Detailed Kaaba with proper textures
 * - Realistic pilgrim model with Ihram
 * - Proper counter-clockwise Tawaf movement
 * - Immersive environment
 */

import React, { useRef, useState, useCallback, useEffect, memo, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Sky,
  Stars,
  Environment,
  Float,
  Sparkles,
  useTexture,
  Text3D,
  Center,
  ContactShadows,
  Lightformer,
  Cloud
} from '@react-three/drei';
import * as THREE from 'three';
import {
  initAudio,
  startWalkingSound,
  stopWalkingSound,
  playRoundComplete,
  playGameComplete,
  playDuaReveal,
  startAmbientSound,
  stopAmbientSound,
  stopAllSounds,
} from './audioUtils';
import { RealisticPilgrim as GLBPilgrim } from './EnhancedGraphics';

// Colors
const KAABA_BLACK = '#0a0a0a';
const GOLD = '#D4AF37';
const GOLD_LIGHT = '#F5D67A';
const MARBLE = '#F5F0E8';
const MARBLE_DARK = '#E8E0D0';
const SKIN = '#D4A574';
const WHITE_CLOTH = '#FAFAFA';
const SAND = '#C2956E';

// ============================================================
// REALISTIC KAABA
// ============================================================
const RealisticKaaba = memo(() => {
  const groupRef = useRef();

  // Subtle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main Kaaba structure */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 1.5, 1.4]} />
        <meshStandardMaterial
          color={KAABA_BLACK}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Kiswah (cloth covering) - slightly larger for depth */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1.42, 1.52, 1.42]} />
        <meshStandardMaterial
          color={KAABA_BLACK}
          roughness={0.95}
          metalness={0}
          transparent
          opacity={0.98}
        />
      </mesh>

      {/* Golden band - Hizam */}
      {[0.71, -0.71].map((z, i) => (
        <mesh key={`band-z-${i}`} position={[0, 1.1, z]} castShadow>
          <boxGeometry args={[1.44, 0.15, 0.03]} />
          <meshStandardMaterial
            color={GOLD}
            roughness={0.2}
            metalness={0.8}
            emissive={GOLD}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
      {[0.71, -0.71].map((x, i) => (
        <mesh key={`band-x-${i}`} position={[x, 1.1, 0]} castShadow>
          <boxGeometry args={[0.03, 0.15, 1.44]} />
          <meshStandardMaterial
            color={GOLD}
            roughness={0.2}
            metalness={0.8}
            emissive={GOLD}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}

      {/* Golden calligraphy panels */}
      {[
        [0, 0.6, 0.72],
        [0.72, 0.6, 0],
        [0, 0.6, -0.72],
        [-0.72, 0.6, 0],
      ].map((pos, i) => (
        <mesh key={`panel-${i}`} position={pos} rotation={[0, (i * Math.PI) / 2, 0]}>
          <planeGeometry args={[0.8, 0.4]} />
          <meshStandardMaterial
            color={GOLD_LIGHT}
            roughness={0.3}
            metalness={0.7}
            emissive={GOLD}
            emissiveIntensity={0.05}
          />
        </mesh>
      ))}

      {/* Door - Bab al-Kaaba */}
      <mesh position={[0, 0.85, 0.72]} castShadow>
        <boxGeometry args={[0.45, 0.7, 0.03]} />
        <meshStandardMaterial
          color={GOLD}
          roughness={0.2}
          metalness={0.9}
          emissive={GOLD}
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Door frame */}
      <mesh position={[0, 0.85, 0.73]}>
        <boxGeometry args={[0.5, 0.75, 0.01]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>

      {/* Hajar al-Aswad (Black Stone) */}
      <group position={[0.75, 0.55, 0.75]} rotation={[0, Math.PI / 4, 0]}>
        {/* Silver frame */}
        <mesh>
          <cylinderGeometry args={[0.12, 0.12, 0.15, 16]} />
          <meshStandardMaterial
            color="#C0C0C0"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        {/* Black stone */}
        <mesh position={[0, 0, 0.01]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#1a0a0a"
            roughness={0.6}
            metalness={0.3}
          />
        </mesh>
        {/* Glow effect */}
        <pointLight position={[0, 0, 0.1]} intensity={0.3} color={GOLD} distance={1} />
      </group>

      {/* Maqam Ibrahim (golden structure) */}
      <group position={[1.2, 0, 1.2]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.6, 8]} />
          <meshStandardMaterial
            color={GOLD}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color={GOLD}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </group>

      {/* Ambient glow around Kaaba */}
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#FFF8E8" distance={5} />
    </group>
  );
});

// ============================================================
// ENHANCED MATAF (TAWAF AREA)
// ============================================================
const EnhancedMataf = memo(() => {
  return (
    <group>
      {/* Main floor - white marble */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[5, 64]} />
        <meshStandardMaterial
          color={MARBLE}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Marble pattern rings */}
      {[1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5].map((r, i) => (
        <mesh key={i} position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r - 0.03, r + 0.03, 64]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? MARBLE_DARK : '#D0C8BC'}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Starting line - green marble (Hajar al-Aswad direction) */}
      <mesh position={[1.8, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.15, 2.5]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#10B981"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Outer boundary - decorative */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.9, 5, 64]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Pillars around the Mataf */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 5.5;
        const z = Math.sin(angle) * 5.5;
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh position={[0, 1.5, 0]} castShadow>
              <cylinderGeometry args={[0.15, 0.18, 3, 12]} />
              <meshStandardMaterial color={MARBLE} roughness={0.3} />
            </mesh>
            {/* Pillar top */}
            <mesh position={[0, 3.1, 0]}>
              <boxGeometry args={[0.4, 0.2, 0.4]} />
              <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
            </mesh>
          </group>
        );
      })}

      {/* Lights on pillars */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 5.5;
        const z = Math.sin(angle) * 5.5;
        return (
          <pointLight
            key={`light-${i}`}
            position={[x, 2.5, z]}
            intensity={0.15}
            color="#FFF5E0"
            distance={4}
          />
        );
      })}
    </group>
  );
});

// ============================================================
// REALISTIC PILGRIM (Using GLB Model)
// ============================================================
const RealisticPilgrim = memo(({ angle, isMoving }) => {
  const groupRef = useRef();

  // Calculate position on the circle
  const radius = 2.2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  // Face direction of movement (tangent to circle, counter-clockwise)
  const lookDirection = angle - Math.PI / 2;

  useFrame(() => {
    if (!groupRef.current) return;
    // Smooth position update
    groupRef.current.position.x = x;
    groupRef.current.position.z = z;
  });

  return (
    <group ref={groupRef} position={[x, 0, z]}>
      <GLBPilgrim
        position={[0, 0, 0]}
        scale={1}
        isMoving={isMoving}
        lookDirection={lookDirection}
      />
      {/* Highlight when moving */}
      {isMoving && (
        <pointLight position={[0, 0.5, 0.3]} intensity={0.3} color="#10B981" distance={1} />
      )}
    </group>
  );
});

// ============================================================
// OTHER PILGRIMS (NPCs)
// ============================================================
const OtherPilgrims = memo(() => {
  const pilgrimsData = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      radius: 1.6 + Math.random() * 2.2,
      speed: 0.003 + Math.random() * 0.004,
      startAngle: Math.random() * Math.PI * 2,
      scale: 0.7 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <>
      {pilgrimsData.map((pilgrim) => (
        <NPCPilgrim key={pilgrim.id} {...pilgrim} />
      ))}
    </>
  );
});

const NPCPilgrim = memo(({ radius, speed, startAngle, scale }) => {
  const ref = useRef();
  const angleRef = useRef(startAngle);

  useFrame(() => {
    if (!ref.current) return;
    angleRef.current -= speed;
    const x = Math.cos(angleRef.current) * radius;
    const z = Math.sin(angleRef.current) * radius;
    ref.current.position.x = x;
    ref.current.position.z = z;
    ref.current.rotation.y = angleRef.current - Math.PI / 2;
  });

  return (
    <group ref={ref} scale={scale}>
      {/* Simple pilgrim body */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.5, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.2, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.72, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
    </group>
  );
});

// ============================================================
// ATMOSPHERIC EFFECTS
// ============================================================
const AtmosphericEffects = memo(() => {
  return (
    <>
      {/* Dust particles */}
      <Sparkles
        count={100}
        scale={12}
        size={0.4}
        speed={0.2}
        color="#F5E6D3"
        opacity={0.3}
      />

      {/* Light rays */}
      <Sparkles
        count={30}
        scale={8}
        size={1}
        speed={0.1}
        color={GOLD}
        opacity={0.15}
        position={[0, 3, 0]}
      />
    </>
  );
});

// ============================================================
// ENHANCED LIGHTING
// ============================================================
const EnhancedLighting = memo(() => {
  return (
    <>
      {/* Main sun light */}
      <directionalLight
        position={[10, 15, 5]}
        intensity={1.5}
        color="#FFF8E8"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Ambient */}
      <ambientLight intensity={0.4} color="#E8E0F0" />

      {/* Fill light */}
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#FFE4C4" />

      {/* Kaaba spotlight */}
      <spotLight
        position={[0, 8, 0]}
        angle={0.5}
        penumbra={0.5}
        intensity={0.5}
        color="#FFF5E0"
        target-position={[0, 0, 0]}
      />

      {/* Hemisphere light for sky/ground colors */}
      <hemisphereLight args={['#87CEEB', SAND, 0.4]} />
    </>
  );
});

// ============================================================
// SKY AND ENVIRONMENT
// ============================================================
const SkyEnvironment = memo(() => {
  return (
    <>
      {/* Realistic sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 50, 100]}
        inclination={0.6}
        azimuth={0.25}
        turbidity={8}
        rayleigh={0.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Stars (subtle, for atmosphere) */}
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />
    </>
  );
});

// ============================================================
// MAIN GAME SCENE
// ============================================================
const TawafScene = ({ angle, isMoving, rounds }) => {
  return (
    <>
      <EnhancedLighting />
      <SkyEnvironment />
      <AtmosphericEffects />

      <RealisticKaaba />
      <EnhancedMataf />
      <RealisticPilgrim angle={angle} isMoving={isMoving} />
      <OtherPilgrims />

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={0.4}
        scale={15}
        blur={2}
        far={10}
      />
    </>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const TawafGameEnhanced = ({ language = 'en', onComplete, onBack }) => {
  const [angle, setAngle] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const intervalRef = useRef(null);
  const lastCrossRef = useRef(0);

  const isRTL = language === 'ar' || language === 'ur';

  // Initialize audio
  useEffect(() => {
    initAudio();
    startAmbientSound();
    return () => stopAllSounds();
  }, []);

  // Handle walking sound
  useEffect(() => {
    if (isMoving && !gameComplete) {
      startWalkingSound();
    } else {
      stopWalkingSound();
    }
  }, [isMoving, gameComplete]);

  // Duas for each round
  const roundDuas = useMemo(() => [
    { arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ', en: 'Glory be to Allah, praise be to Allah, there is no god but Allah, Allah is the Greatest', ur: 'اللہ پاک ہے، تمام تعریف اللہ کے لیے، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے' },
    { arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', en: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire', ur: 'اے ہمارے رب! ہمیں دنیا میں بھلائی دے اور آخرت میں بھلائی دے اور ہمیں آگ کے عذاب سے بچا' },
    { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', en: 'O Allah, I ask You for pardon and well-being in this world and the Hereafter', ur: 'اے اللہ! میں تجھ سے دنیا اور آخرت میں معافی اور عافیت مانگتا ہوں' },
    { arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ', en: 'My Lord, forgive and have mercy, for You are the best of those who show mercy', ur: 'اے میرے رب! معاف فرما اور رحم کر، تو سب سے بہتر رحم کرنے والا ہے' },
    { arabic: 'اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَسَعْيًا مَشْكُورًا وَذَنْبًا مَغْفُورًا', en: 'O Allah, make it a blessed Hajj, an accepted effort, and a forgiven sin', ur: 'اے اللہ! اسے مقبول حج، قابل شکر سعی اور معاف گناہ بنا دے' },
    { arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', en: 'There is no god but Allah alone, He has no partner', ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں' },
    { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ', en: 'O Allah, I ask You for Paradise and seek refuge with You from the Fire', ur: 'اے اللہ! میں تجھ سے جنت مانگتا ہوں اور تیری پناہ چاہتا ہوں آگ سے' },
  ], []);

  const text = {
    title: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' },
    round: { en: 'Round', ur: 'چکر', ar: 'شوط' },
    holdToWalk: { en: 'Hold to walk', ur: 'چلنے کے لیے دبائیں', ar: 'اضغط للمشي' },
    complete: { en: 'Tawaf Complete!', ur: 'طواف مکمل!', ar: 'اكتمل الطواف!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    next: { en: 'Continue', ur: 'جاری رکھیں', ar: 'استمر' },
  };

  // Move player
  const movePlayer = useCallback(() => {
    setAngle((prev) => {
      const newAngle = prev - 0.025; // Counter-clockwise

      // Check if crossed starting line
      const prevNorm = ((lastCrossRef.current % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const newNorm = ((newAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

      // Detect crossing counter-clockwise
      if (prevNorm < 1 && newNorm > 5) {
        setRounds((r) => {
          const newRounds = r + 1;
          playRoundComplete();
          if (newRounds >= 7) {
            setGameComplete(true);
            stopWalkingSound();
            stopAmbientSound();
            playGameComplete();
          } else {
            playDuaReveal();
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
    intervalRef.current = setInterval(movePlayer, 40);
  }, [movePlayer, gameComplete]);

  const handlePointerUp = useCallback(() => {
    setIsMoving(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameComplete) {
        if (e.code === 'Enter' || e.code === 'Space') {
          onComplete?.();
        }
        return;
      }
      if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        if (!isMoving) {
          setIsMoving(true);
          intervalRef.current = setInterval(movePlayer, 40);
        }
      }
      if (e.code === 'Escape') {
        onBack?.();
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        handlePointerUp();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameComplete, isMoving, movePlayer, handlePointerUp, onBack, onComplete]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      stopAllSounds();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-20 bg-gradient-to-b from-black/50 to-transparent">
        <button
          onClick={onBack}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-lg hover:bg-white/30 transition-all"
        >
          ←
        </button>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🕋</span>
          <h1
            className="text-xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {text.title[language]}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {!gameComplete && (
            <button
              onClick={() => {
                stopAllSounds();
                playGameComplete();
                setGameComplete(true);
              }}
              className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white/80 text-sm hover:bg-white/30 transition-all"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.skip[language]} ⏭️
            </button>
          )}

          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full shadow-lg">
            <span className="text-white font-bold text-lg">{Math.min(rounds, 7)}/7</span>
          </div>
        </div>
      </div>

      {/* Dua Display */}
      {showDua && rounds > 0 && rounds <= 7 && (
        <div className="absolute top-20 left-4 right-4 z-30 flex justify-center">
          <div className="max-w-lg p-4 bg-emerald-900/95 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl">
            <div className="text-emerald-300 text-xs mb-2 font-bold">
              {text.round[language]} {rounds}
            </div>
            <p
              className="text-white text-lg text-center mb-2 leading-relaxed"
              style={{ fontFamily: "'Scheherazade New', serif" }}
              dir="rtl"
            >
              {roundDuas[rounds - 1]?.arabic}
            </p>
            <p
              className="text-white/80 text-sm text-center"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {roundDuas[rounds - 1]?.[language] || roundDuas[rounds - 1]?.en}
            </p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <div
        className="flex-1 cursor-pointer"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        <Canvas
          shadows
          camera={{ position: [0, 4, 8], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true }}
        >
          <Suspense fallback={null}>
            <TawafScene angle={angle} isMoving={isMoving} rounds={rounds} />
          </Suspense>
        </Canvas>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        {!gameComplete ? (
          <div className="text-center">
            <p
              className="text-white/90 text-lg font-medium mb-2"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.holdToWalk[language]}
            </p>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm">↑ W</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm">SPACE</span>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.complete[language]}
            </h2>
            <button
              onClick={onComplete}
              className="px-8 py-3 bg-emerald-500 text-white font-bold text-lg rounded-full hover:bg-emerald-600 transition-all shadow-lg"
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

export default TawafGameEnhanced;
