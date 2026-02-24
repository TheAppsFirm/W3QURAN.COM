/**
 * SaiGameEnhanced.jsx
 * Enhanced Sa'i game with realistic 3D visuals
 *
 * Features:
 * - Realistic Safa and Marwah hills
 * - Beautiful Mas'a corridor
 * - Atmospheric lighting
 * - Green zone running area
 * - 7 laps between the hills
 */

import React, { useRef, useState, useCallback, useEffect, memo, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Sky,
  Stars,
  Sparkles,
  ContactShadows,
} from '@react-three/drei';
import * as THREE from 'three';
import {
  initAudio,
  startWalkingSound,
  stopWalkingSound,
  playRoundComplete,
  playGameComplete,
  playDuaReveal,
  stopAllSounds,
} from './audioUtils';

// Colors
const ROCK_LIGHT = '#B8A898';
const ROCK_DARK = '#8A7B6E';
const ROCK_MID = '#9E8E7E';
const MARBLE = '#F5F0E8';
const MARBLE_DARK = '#E0D8CC';
const SKIN = '#D4A574';
const WHITE_CLOTH = '#FAFAFA';
const GREEN_MARKER = '#10B981';
const GREEN_LIGHT = '#D1FAE5';
const GOLD = '#D4AF37';

// ============================================================
// ENHANCED SAFA HILL
// ============================================================
const SafaHill = memo(() => {
  return (
    <group position={[-5, 0, 0]}>
      {/* Main rock formation */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <dodecahedronGeometry args={[1.2, 2]} />
        <meshStandardMaterial
          color={ROCK_LIGHT}
          roughness={0.95}
          flatShading
        />
      </mesh>

      {/* Secondary rocks */}
      <mesh position={[0.5, 0.3, 0.4]} castShadow>
        <dodecahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial color={ROCK_DARK} roughness={0.9} flatShading />
      </mesh>
      <mesh position={[-0.4, 0.25, 0.3]} castShadow>
        <dodecahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial color={ROCK_MID} roughness={0.92} flatShading />
      </mesh>
      <mesh position={[0.3, 0.15, -0.5]} castShadow>
        <dodecahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial color={ROCK_LIGHT} roughness={0.88} flatShading />
      </mesh>

      {/* Steps carved into rock */}
      {[0, 0.2, 0.4, 0.6].map((y, i) => (
        <mesh key={i} position={[0.8 - i * 0.1, y, 0]} castShadow>
          <boxGeometry args={[0.4, 0.08, 0.6]} />
          <meshStandardMaterial color={MARBLE_DARK} roughness={0.5} />
        </mesh>
      ))}

      {/* Sign post */}
      <group position={[0, 1.8, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
          <meshStandardMaterial color="#4A4A4A" roughness={0.6} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[1, 0.3, 0.05]} />
          <meshStandardMaterial
            color={GREEN_MARKER}
            emissive={GREEN_MARKER}
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Arabic text indicator */}
        <mesh position={[0, 0.6, 0.03]}>
          <planeGeometry args={[0.8, 0.2]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>

      {/* Glowing marker */}
      <pointLight position={[0, 1.5, 0.5]} intensity={0.5} color={GREEN_MARKER} distance={3} />
    </group>
  );
});

// ============================================================
// ENHANCED MARWAH HILL
// ============================================================
const MarwahHill = memo(() => {
  return (
    <group position={[5, 0, 0]}>
      {/* Main rock formation - slightly different shape */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <dodecahedronGeometry args={[1.3, 2]} />
        <meshStandardMaterial
          color={ROCK_DARK}
          roughness={0.95}
          flatShading
        />
      </mesh>

      {/* Secondary rocks */}
      <mesh position={[-0.5, 0.35, 0.3]} castShadow>
        <dodecahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color={ROCK_LIGHT} roughness={0.9} flatShading />
      </mesh>
      <mesh position={[0.4, 0.3, 0.4]} castShadow>
        <dodecahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial color={ROCK_MID} roughness={0.92} flatShading />
      </mesh>
      <mesh position={[-0.3, 0.2, -0.4]} castShadow>
        <dodecahedronGeometry args={[0.65, 1]} />
        <meshStandardMaterial color={ROCK_DARK} roughness={0.88} flatShading />
      </mesh>

      {/* Steps */}
      {[0, 0.2, 0.4, 0.6].map((y, i) => (
        <mesh key={i} position={[-0.8 + i * 0.1, y, 0]} castShadow>
          <boxGeometry args={[0.4, 0.08, 0.6]} />
          <meshStandardMaterial color={MARBLE_DARK} roughness={0.5} />
        </mesh>
      ))}

      {/* Sign post */}
      <group position={[0, 1.9, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
          <meshStandardMaterial color="#4A4A4A" roughness={0.6} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[1, 0.3, 0.05]} />
          <meshStandardMaterial
            color={GREEN_MARKER}
            emissive={GREEN_MARKER}
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[0, 0.6, 0.03]}>
          <planeGeometry args={[0.8, 0.2]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>

      <pointLight position={[0, 1.5, 0.5]} intensity={0.5} color={GREEN_MARKER} distance={3} />
    </group>
  );
});

// ============================================================
// MAS'A CORRIDOR
// ============================================================
const MasaCorridor = memo(() => {
  return (
    <group>
      {/* Main floor - white marble */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial color={MARBLE} roughness={0.25} />
      </mesh>

      {/* Green zone (running area for men) */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 3.8]} />
        <meshStandardMaterial
          color={GREEN_LIGHT}
          transparent
          opacity={0.5}
          emissive={GREEN_MARKER}
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Green line markers */}
      <mesh position={[-1.5, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.05, 3.8]} />
        <meshStandardMaterial color={GREEN_MARKER} emissive={GREEN_MARKER} emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[1.5, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.05, 3.8]} />
        <meshStandardMaterial color={GREEN_MARKER} emissive={GREEN_MARKER} emissiveIntensity={0.3} />
      </mesh>

      {/* Marble pattern lines */}
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((x) => (
        <mesh key={x} position={[x, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.02, 4]} />
          <meshStandardMaterial color={MARBLE_DARK} />
        </mesh>
      ))}

      {/* Side walls with arches */}
      {[-1, 1].map((side) => (
        <group key={side} position={[0, 0, side * 2.2]}>
          {/* Wall */}
          <mesh position={[0, 1.5, 0]} castShadow>
            <boxGeometry args={[12, 3, 0.2]} />
            <meshStandardMaterial color={MARBLE} roughness={0.4} />
          </mesh>

          {/* Arches */}
          {[-4, -2, 0, 2, 4].map((x) => (
            <group key={x} position={[x, 0, side * -0.1]}>
              {/* Pillar left */}
              <mesh position={[-0.4, 1.2, 0]} castShadow>
                <cylinderGeometry args={[0.08, 0.1, 2.4, 12]} />
                <meshStandardMaterial color={MARBLE} roughness={0.35} />
              </mesh>
              {/* Pillar right */}
              <mesh position={[0.4, 1.2, 0]} castShadow>
                <cylinderGeometry args={[0.08, 0.1, 2.4, 12]} />
                <meshStandardMaterial color={MARBLE} roughness={0.35} />
              </mesh>
              {/* Arch top */}
              <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.4, 0.08, 8, 16, Math.PI]} />
                <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      {/* Ceiling with lights */}
      <mesh position={[0, 3.5, 0]} receiveShadow>
        <boxGeometry args={[12, 0.3, 4.5]} />
        <meshStandardMaterial color="#E8E0D8" roughness={0.5} />
      </mesh>

      {/* Ceiling lights */}
      {[-4, -2, 0, 2, 4].map((x) => (
        <group key={x} position={[x, 3.3, 0]}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.2, 0.1, 16]} />
            <meshStandardMaterial
              color="#FFF8E0"
              emissive="#FFF8E0"
              emissiveIntensity={0.5}
            />
          </mesh>
          <pointLight intensity={0.4} color="#FFF5E0" distance={4} />
        </group>
      ))}
    </group>
  );
});

// ============================================================
// PILGRIM
// ============================================================
const Pilgrim = memo(({ positionX, isMoving, direction }) => {
  const groupRef = useRef();
  const legRef = useRef();
  const armRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    // Update position
    groupRef.current.position.x = positionX;

    // Face direction of movement
    const targetRotation = direction > 0 ? 0 : Math.PI;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation,
      0.15
    );

    // Walking/running animation
    if (isMoving && legRef.current && armRef.current) {
      const speed = Math.abs(positionX) < 1.5 ? 12 : 8; // Faster in green zone
      const t = state.clock.elapsedTime * speed;
      const amplitude = Math.abs(positionX) < 1.5 ? 0.6 : 0.4;
      legRef.current.rotation.x = Math.sin(t) * amplitude;
      armRef.current.rotation.x = Math.sin(t + Math.PI) * amplitude * 0.7;
    } else if (legRef.current && armRef.current) {
      legRef.current.rotation.x *= 0.85;
      armRef.current.rotation.x *= 0.85;
    }

    // Breathing
    groupRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
  });

  return (
    <group ref={groupRef} position={[positionX, 0, 0]} scale={1}>
      {/* Body - Izar */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.18, 0.8, 12]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.6} />
      </mesh>

      {/* Upper body - Rida */}
      <mesh position={[-0.02, 0.75, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.14, 0.4, 12]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.6} />
      </mesh>

      {/* Exposed shoulder */}
      <mesh position={[0.1, 0.82, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>

      {/* Head */}
      <group position={[0, 1.05, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color={SKIN} roughness={0.6} />
        </mesh>
        {/* Beard */}
        <mesh position={[0, -0.04, 0.08]}>
          <boxGeometry args={[0.1, 0.06, 0.03]} />
          <meshStandardMaterial color="#2D2D2D" roughness={0.9} />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.04, 0.02, 0.1]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#1E1E1E" />
        </mesh>
        <mesh position={[0.04, 0.02, 0.1]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#1E1E1E" />
        </mesh>
      </group>

      {/* Arms */}
      <group ref={armRef} position={[0, 0.7, 0]}>
        <mesh position={[-0.18, 0, 0.04]} rotation={[0, 0, 0.3]} castShadow>
          <capsuleGeometry args={[0.03, 0.25, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.6} />
        </mesh>
        <mesh position={[0.18, 0, 0.04]} rotation={[0, 0, -0.3]} castShadow>
          <capsuleGeometry args={[0.03, 0.25, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.6} />
        </mesh>
      </group>

      {/* Legs */}
      <group ref={legRef} position={[0, 0.15, 0]}>
        <mesh position={[-0.06, -0.12, 0]} castShadow>
          <capsuleGeometry args={[0.045, 0.2, 4, 8]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.6} />
        </mesh>
        <mesh position={[0.06, -0.12, 0]} castShadow>
          <capsuleGeometry args={[0.045, 0.2, 4, 8]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.6} />
        </mesh>
      </group>

      {/* Feet */}
      <mesh position={[-0.06, -0.02, 0.02]}>
        <boxGeometry args={[0.05, 0.02, 0.1]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.8} />
      </mesh>
      <mesh position={[0.06, -0.02, 0.02]}>
        <boxGeometry args={[0.05, 0.02, 0.1]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.8} />
      </mesh>

      {/* Running glow in green zone */}
      {isMoving && Math.abs(positionX) < 1.5 && (
        <pointLight position={[0, 0.5, 0.3]} intensity={0.4} color={GREEN_MARKER} distance={1.5} />
      )}
    </group>
  );
});

// ============================================================
// OTHER PILGRIMS (NPCs)
// ============================================================
const OtherPilgrims = memo(() => {
  const pilgrimsData = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      startX: -4 + Math.random() * 8,
      speed: 0.01 + Math.random() * 0.015,
      zOffset: -1.2 + Math.random() * 2.4,
      scale: 0.7 + Math.random() * 0.25,
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

const NPCPilgrim = memo(({ startX, speed, zOffset, scale }) => {
  const ref = useRef();
  const posRef = useRef(startX);
  const dirRef = useRef(1);

  useFrame(() => {
    if (!ref.current) return;

    posRef.current += speed * dirRef.current;

    if (posRef.current > 4.5) {
      posRef.current = 4.5;
      dirRef.current = -1;
    } else if (posRef.current < -4.5) {
      posRef.current = -4.5;
      dirRef.current = 1;
    }

    ref.current.position.x = posRef.current;
    ref.current.rotation.y = dirRef.current > 0 ? 0 : Math.PI;
  });

  return (
    <group ref={ref} position={[startX, 0, zOffset]} scale={scale}>
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.55, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.07, 0.1, 0.25, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
    </group>
  );
});

// ============================================================
// LIGHTING
// ============================================================
const EnhancedLighting = memo(() => {
  return (
    <>
      <ambientLight intensity={0.4} color="#F5F0E8" />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        color="#FFF8E8"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#E8E0F0" />
      <hemisphereLight args={['#87CEEB', '#E8DCC8', 0.4]} />
    </>
  );
});

// ============================================================
// ATMOSPHERIC EFFECTS
// ============================================================
const AtmosphericEffects = memo(() => {
  return (
    <>
      <Sparkles
        count={50}
        scale={15}
        size={0.3}
        speed={0.2}
        color="#F5E6D3"
        opacity={0.25}
      />
      <Stars
        radius={80}
        depth={30}
        count={500}
        factor={2}
        saturation={0}
        fade
        speed={0.3}
      />
    </>
  );
});

// ============================================================
// MAIN SCENE
// ============================================================
const SaiScene = ({ positionX, isMoving, direction }) => {
  return (
    <>
      <EnhancedLighting />
      <AtmosphericEffects />
      <Sky
        distance={450000}
        sunPosition={[50, 30, 100]}
        inclination={0.5}
        azimuth={0.25}
        turbidity={6}
        rayleigh={0.4}
      />

      <SafaHill />
      <MarwahHill />
      <MasaCorridor />
      <Pilgrim positionX={positionX} isMoving={isMoving} direction={direction} />
      <OtherPilgrims />

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
const SaiGameEnhanced = ({ language = 'en', onComplete, onBack }) => {
  const [positionX, setPositionX] = useState(-4);
  const [laps, setLaps] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = toward Marwah, -1 = toward Safa
  const [gameComplete, setGameComplete] = useState(false);
  const [atHill, setAtHill] = useState('safa'); // 'safa', 'marwah', null
  const [showDua, setShowDua] = useState(false);

  const touchStartRef = useRef(0);
  const lastTouchRef = useRef(0);
  const isRTL = language === 'ar' || language === 'ur';

  // Initialize audio
  useEffect(() => {
    initAudio();
    return () => stopAllSounds();
  }, []);

  // Duas
  const duas = useMemo(() => ({
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
  }), []);

  const text = {
    title: { en: "Sa'i", ur: 'سعی', ar: 'السعي' },
    laps: { en: 'Laps', ur: 'چکر', ar: 'أشواط' },
    safa: { en: 'Safa', ur: 'صفا', ar: 'الصفا' },
    marwah: { en: 'Marwah', ur: 'مروہ', ar: 'المروة' },
    swipe: { en: 'Swipe left/right to walk', ur: 'چلنے کے لیے سوائپ کریں', ar: 'اسحب للمشي' },
    run: { en: 'Run in green zone!', ur: 'سبز زون میں دوڑیں!', ar: 'اركض في المنطقة الخضراء!' },
    complete: { en: "Sa'i Complete!", ur: 'سعی مکمل!', ar: 'اكتمل السعي!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    next: { en: 'Continue', ur: 'جاری رکھیں', ar: 'استمر' },
  };

  // Move player
  const movePlayer = useCallback((delta) => {
    if (gameComplete) return;

    setPositionX((prev) => {
      const inGreenZone = Math.abs(prev) < 1.5;
      const speed = inGreenZone ? 0.12 : 0.06;
      const newPos = prev + delta * speed;

      // Clamp position
      const clampedPos = Math.max(-4.5, Math.min(4.5, newPos));

      // Update direction
      if (delta > 0) setDirection(1);
      else if (delta < 0) setDirection(-1);

      // Check hill arrival
      if (clampedPos >= 4.3 && prev < 4.3) {
        // Arrived at Marwah
        setAtHill('marwah');
        setLaps((l) => {
          const newLaps = l + 1;
          playRoundComplete();
          if (newLaps >= 7) {
            setGameComplete(true);
            stopWalkingSound();
            playGameComplete();
          } else {
            playDuaReveal();
            setShowDua(true);
            setTimeout(() => setShowDua(false), 3000);
          }
          return newLaps;
        });
      } else if (clampedPos <= -4.3 && prev > -4.3) {
        // Arrived at Safa
        setAtHill('safa');
        if (laps > 0) {
          setLaps((l) => {
            const newLaps = l + 1;
            playRoundComplete();
            if (newLaps >= 7) {
              setGameComplete(true);
              stopWalkingSound();
              playGameComplete();
            } else {
              playDuaReveal();
              setShowDua(true);
              setTimeout(() => setShowDua(false), 3000);
            }
            return newLaps;
          });
        }
      } else {
        setAtHill(null);
      }

      return clampedPos;
    });
  }, [gameComplete, laps]);

  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.touches[0].clientX;
    lastTouchRef.current = e.touches[0].clientX;
    setIsMoving(true);
    startWalkingSound(Math.abs(positionX) < 1.5);
  }, [positionX]);

  const handleTouchMove = useCallback((e) => {
    const currentX = e.touches[0].clientX;
    const delta = (currentX - lastTouchRef.current) * 0.15;
    lastTouchRef.current = currentX;
    movePlayer(delta);
  }, [movePlayer]);

  const handleTouchEnd = useCallback(() => {
    setIsMoving(false);
    stopWalkingSound();
  }, []);

  // Mouse handlers
  const handleMouseDown = useCallback((e) => {
    touchStartRef.current = e.clientX;
    lastTouchRef.current = e.clientX;
    setIsMoving(true);
    startWalkingSound(Math.abs(positionX) < 1.5);

    const handleMouseMove = (e) => {
      const delta = (e.clientX - lastTouchRef.current) * 0.15;
      lastTouchRef.current = e.clientX;
      movePlayer(delta);
    };

    const handleMouseUp = () => {
      setIsMoving(false);
      stopWalkingSound();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [movePlayer, positionX]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameComplete) {
        if (e.code === 'Enter' || e.code === 'Space') {
          onComplete?.();
        }
        return;
      }

      if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        if (!isMoving) {
          setIsMoving(true);
          startWalkingSound(Math.abs(positionX) < 1.5);
        }
        movePlayer(1);
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        if (!isMoving) {
          setIsMoving(true);
          startWalkingSound(Math.abs(positionX) < 1.5);
        }
        movePlayer(-1);
      } else if (e.code === 'Escape') {
        onBack?.();
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === 'ArrowRight' || e.code === 'KeyD' || e.code === 'ArrowLeft' || e.code === 'KeyA') {
        setIsMoving(false);
        stopWalkingSound();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameComplete, isMoving, movePlayer, onBack, onComplete, positionX]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-20 bg-gradient-to-b from-black/50 to-transparent">
        <button
          onClick={onBack}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-lg"
        >
          ←
        </button>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🏔️</span>
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
              className="px-3 py-1 rounded-full bg-white/20 text-white/80 text-sm"
            >
              {text.skip[language]} ⏭️
            </button>
          )}
          <div className="px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full">
            <span className="text-white font-bold">{Math.min(laps, 7)}/7</span>
          </div>
        </div>
      </div>

      {/* Location indicators */}
      <div className="absolute top-20 left-0 right-0 flex justify-between px-6 z-10">
        <div className={`px-4 py-2 rounded-full transition-all ${positionX < -3 ? 'bg-emerald-500 text-white scale-110' : 'bg-white/30 text-white/80'}`}>
          🏔️ {text.safa[language]}
        </div>
        <div className={`px-4 py-2 rounded-full transition-all ${positionX > 3 ? 'bg-emerald-500 text-white scale-110' : 'bg-white/30 text-white/80'}`}>
          {text.marwah[language]} 🏔️
        </div>
      </div>

      {/* Dua Display */}
      {showDua && atHill && (
        <div className="absolute top-32 left-4 right-4 z-30 flex justify-center">
          <div className="max-w-lg p-4 bg-emerald-900/95 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl">
            <p
              className="text-white text-lg text-center mb-2 leading-relaxed"
              style={{ fontFamily: "'Scheherazade New', serif" }}
              dir="rtl"
            >
              {duas[atHill]?.arabic}
            </p>
            <p
              className="text-white/80 text-sm text-center"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {duas[atHill]?.[language] || duas[atHill]?.en}
            </p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <div
        className="flex-1 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <Canvas
          shadows
          camera={{ position: [0, 2.5, 6], fov: 50 }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <SaiScene
              positionX={positionX}
              isMoving={isMoving}
              direction={direction}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Green zone indicator */}
      {!gameComplete && Math.abs(positionX) < 1.5 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full text-white font-bold animate-pulse">
          🏃 {text.run[language]}
        </div>
      )}

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        {!gameComplete ? (
          <div className="text-center">
            <p
              className="text-white/90 text-lg font-medium mb-2"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.swipe[language]}
            </p>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm">← A</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm">D →</span>
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

export default SaiGameEnhanced;
