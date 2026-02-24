/**
 * SaiGameImmersive.jsx
 * Immersive 3D Sa'i experience between Safa and Marwah
 *
 * Walk/run 7 times between the two hills through the Mas'a corridor
 */

import React, { useRef, useState, useCallback, useEffect, memo, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sky, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import {
  initAudio, startWalkingSound, stopWalkingSound,
  playRoundComplete, playGameComplete, playDuaReveal, stopAllSounds
} from './audioUtils';
import { EnhancedLighting, AtmosphericFog, DustParticles, GoldenSparkles, EnhancedSky, RealisticPilgrim } from './EnhancedGraphics';

// Colors
const ROCK_LIGHT = '#B8A898';
const ROCK_DARK = '#8A7B6E';
const MARBLE = '#F5F0E8';
const MARBLE_CREAM = '#EDE8DC';
const GOLD = '#D4AF37';
const GREEN = '#10B981';
const GREEN_LIGHT = '#D1FAE5';
const SKIN = '#D4A574';
const WHITE_IHRAM = '#FAFAFA';

// ============================================================
// SAFA HILL (Detailed rocky mountain)
// ============================================================
const SafaHill = memo(() => {
  return (
    <group position={[-8, 0, 0]}>
      {/* Main rock mass */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <dodecahedronGeometry args={[2.5, 2]} />
        <meshStandardMaterial color={ROCK_LIGHT} roughness={0.92} flatShading />
      </mesh>

      {/* Secondary rocks */}
      {[
        { pos: [1.2, 0.6, 0.8], scale: 1.4, color: ROCK_DARK },
        { pos: [-0.8, 0.5, 1], scale: 1, color: ROCK_LIGHT },
        { pos: [0.5, 0.3, -1.2], scale: 1.2, color: ROCK_DARK },
        { pos: [-1.5, 0.4, -0.5], scale: 0.9, color: '#9E8E7E' },
        { pos: [1.8, 0.3, -0.3], scale: 0.8, color: ROCK_LIGHT },
      ].map((rock, i) => (
        <mesh key={i} position={rock.pos} scale={rock.scale} castShadow>
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color={rock.color} roughness={0.9} flatShading />
        </mesh>
      ))}

      {/* Steps carved into rock */}
      {[0, 0.25, 0.5, 0.75, 1].map((y, i) => (
        <mesh key={i} position={[2 - i * 0.15, y, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.12, 1]} />
          <meshStandardMaterial color={MARBLE_CREAM} roughness={0.5} />
        </mesh>
      ))}

      {/* Green sign */}
      <group position={[0, 3.5, 1.5]}>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 2, 8]} />
          <meshStandardMaterial color="#4A4A4A" roughness={0.6} metalness={0.3} />
        </mesh>
        <mesh position={[0, 1.1, 0]} castShadow>
          <boxGeometry args={[1.5, 0.5, 0.08]} />
          <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={0.3} />
        </mesh>
        {/* Arabic text "الصفا" */}
        <mesh position={[0, 1.1, 0.05]}>
          <planeGeometry args={[1.2, 0.35]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>

      {/* Ambient glow */}
      <pointLight position={[0, 2, 2]} intensity={0.4} color={GREEN} distance={5} />
    </group>
  );
});

// ============================================================
// MARWAH HILL
// ============================================================
const MarwahHill = memo(() => {
  return (
    <group position={[8, 0, 0]}>
      {/* Main rock mass - slightly different shape */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <dodecahedronGeometry args={[2.8, 2]} />
        <meshStandardMaterial color={ROCK_DARK} roughness={0.92} flatShading />
      </mesh>

      {/* Secondary rocks */}
      {[
        { pos: [-1.3, 0.7, 0.6], scale: 1.5, color: ROCK_LIGHT },
        { pos: [0.9, 0.5, 1.2], scale: 1.1, color: ROCK_DARK },
        { pos: [-0.5, 0.4, -1], scale: 1.3, color: '#9E8E7E' },
        { pos: [1.6, 0.3, -0.8], scale: 0.95, color: ROCK_LIGHT },
        { pos: [-1.8, 0.35, 0], scale: 0.85, color: ROCK_DARK },
      ].map((rock, i) => (
        <mesh key={i} position={rock.pos} scale={rock.scale} castShadow>
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color={rock.color} roughness={0.9} flatShading />
        </mesh>
      ))}

      {/* Steps */}
      {[0, 0.25, 0.5, 0.75, 1].map((y, i) => (
        <mesh key={i} position={[-2 + i * 0.15, y, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.12, 1]} />
          <meshStandardMaterial color={MARBLE_CREAM} roughness={0.5} />
        </mesh>
      ))}

      {/* Green sign */}
      <group position={[0, 3.8, 1.5]}>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 2, 8]} />
          <meshStandardMaterial color="#4A4A4A" roughness={0.6} metalness={0.3} />
        </mesh>
        <mesh position={[0, 1.1, 0]} castShadow>
          <boxGeometry args={[1.5, 0.5, 0.08]} />
          <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 1.1, 0.05]}>
          <planeGeometry args={[1.2, 0.35]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>

      <pointLight position={[0, 2, 2]} intensity={0.4} color={GREEN} distance={5} />
    </group>
  );
});

// ============================================================
// MAS'A CORRIDOR (The walking path)
// ============================================================
const MasaCorridor = memo(() => {
  return (
    <group>
      {/* Main floor */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 6]} />
        <meshStandardMaterial color={MARBLE} roughness={0.25} />
      </mesh>

      {/* Green running zone (middle section) */}
      <mesh position={[0, -0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5.8]} />
        <meshStandardMaterial color={GREEN_LIGHT} transparent opacity={0.5} emissive={GREEN} emissiveIntensity={0.05} />
      </mesh>

      {/* Green line markers */}
      {[-2.5, 2.5].map((x, i) => (
        <mesh key={i} position={[x, -0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.08, 5.8]} />
          <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={0.4} />
        </mesh>
      ))}

      {/* Floor pattern lines */}
      {Array.from({ length: 21 }).map((_, i) => (
        <mesh key={i} position={[-10 + i, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.03, 6]} />
          <meshStandardMaterial color={MARBLE_CREAM} />
        </mesh>
      ))}

      {/* Side walls with pillars and arches */}
      {[-3.2, 3.2].map((z, sideIdx) => (
        <group key={sideIdx} position={[0, 0, z]}>
          {/* Continuous wall */}
          <mesh position={[0, 2, 0]} castShadow>
            <boxGeometry args={[20, 4, 0.3]} />
            <meshStandardMaterial color={MARBLE} roughness={0.4} />
          </mesh>

          {/* Pillars with arches */}
          {Array.from({ length: 11 }).map((_, i) => {
            const x = -10 + i * 2;
            return (
              <group key={i} position={[x, 0, z > 0 ? -0.2 : 0.2]}>
                {/* Left pillar */}
                <mesh position={[-0.6, 1.8, 0]} castShadow>
                  <cylinderGeometry args={[0.12, 0.15, 3.6, 12]} />
                  <meshStandardMaterial color={MARBLE} roughness={0.35} />
                </mesh>
                {/* Right pillar */}
                <mesh position={[0.6, 1.8, 0]} castShadow>
                  <cylinderGeometry args={[0.12, 0.15, 3.6, 12]} />
                  <meshStandardMaterial color={MARBLE} roughness={0.35} />
                </mesh>
                {/* Arch */}
                <mesh position={[0, 3.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[0.6, 0.1, 8, 16, Math.PI]} />
                  <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
                </mesh>
              </group>
            );
          })}
        </group>
      ))}

      {/* Ceiling */}
      <mesh position={[0, 4.5, 0]} receiveShadow>
        <boxGeometry args={[20, 0.4, 7]} />
        <meshStandardMaterial color="#E8E0D8" roughness={0.5} />
      </mesh>

      {/* Ceiling lights */}
      {Array.from({ length: 9 }).map((_, i) => {
        const x = -8 + i * 2;
        return (
          <group key={i} position={[x, 4.2, 0]}>
            <mesh>
              <cylinderGeometry args={[0.2, 0.25, 0.15, 16]} />
              <meshStandardMaterial color="#FFF8E0" emissive="#FFF8E0" emissiveIntensity={0.6} />
            </mesh>
            <pointLight intensity={0.3} color="#FFF5E0" distance={5} />
          </group>
        );
      })}
    </group>
  );
});

// ============================================================
// PILGRIM (Using RealisticPilgrim GLB model)
// ============================================================
const Pilgrim = memo(({ positionX, isMoving, direction }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.position.x = positionX;
    // Smooth rotation to face direction
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      direction > 0 ? 0 : Math.PI,
      0.12
    );
  });

  return (
    <group ref={groupRef} position={[positionX, 0, 0]}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={2}
        isMoving={isMoving}
        lookDirection={0}
      />
      {/* Debug light */}
      <pointLight position={[0, 2, 1]} intensity={1} color="#FFFFFF" distance={8} />
      {/* Green glow when running in green zone */}
      {isMoving && Math.abs(positionX) < 2.5 && (
        <pointLight position={[0, 0.6, 0.4]} intensity={0.5} color={GREEN} distance={2} />
      )}
    </group>
  );
});

// ============================================================
// NPC PILGRIMS
// ============================================================
const NPCPilgrims = memo(() => {
  const pilgrims = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      startX: -7 + Math.random() * 14,
      speed: 0.012 + Math.random() * 0.018,
      zOffset: -2 + Math.random() * 4,
      scale: 0.7 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <>
      {pilgrims.map((p) => (
        <NPCPilgrim key={p.id} {...p} />
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
    if (posRef.current > 7) { posRef.current = 7; dirRef.current = -1; }
    else if (posRef.current < -7) { posRef.current = -7; dirRef.current = 1; }
    ref.current.position.x = posRef.current;
    ref.current.rotation.y = dirRef.current > 0 ? 0 : Math.PI;
  });

  return (
    <group ref={ref} position={[startX, 0, zOffset]} scale={scale}>
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.14, 0.65, 8]} />
        <meshStandardMaterial color={WHITE_IHRAM} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.08, 0.11, 0.28, 8]} />
        <meshStandardMaterial color={WHITE_IHRAM} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.92, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
    </group>
  );
});

// ============================================================
// LIGHTING & ATMOSPHERE (Enhanced)
// ============================================================
const SceneLighting = memo(() => (
  <>
    {/* Enhanced multi-directional lighting */}
    <EnhancedLighting
      sunPosition={[8, 15, 5]}
      ambientIntensity={0.5}
      shadowQuality="high"
      warmth={0.15}
    />

    {/* Additional fill light for corridor */}
    <directionalLight position={[-8, 10, -5]} intensity={0.4} color="#E8E0F0" />

    {/* Corridor interior lights */}
    <pointLight position={[0, 4, 0]} intensity={0.5} color="#FFF5E0" distance={15} />
    <pointLight position={[-6, 4, 0]} intensity={0.3} color="#FFF5E0" distance={10} />
    <pointLight position={[6, 4, 0]} intensity={0.3} color="#FFF5E0" distance={10} />
  </>
));

const Atmosphere = memo(() => (
  <>
    {/* Enhanced dust particles */}
    <DustParticles count={120} area={30} color="#F5E6D3" />

    {/* Golden sparkles at hill locations */}
    <GoldenSparkles position={[-8, 2, 0]} active={true} />
    <GoldenSparkles position={[8, 2, 0]} active={true} />

    {/* Additional marble dust in corridor */}
    <Sparkles count={100} scale={20} size={0.6} speed={0.2} color="#FFFFFF" opacity={0.15} position={[0, 2, 0]} />

    {/* Green zone energy particles */}
    <Sparkles count={60} scale={6} size={1} speed={0.4} color={GREEN} opacity={0.3} position={[0, 1, 0]} />

    {/* Enhanced sky */}
    <EnhancedSky timeOfDay="day" showStars={false} />

    {/* Subtle background stars */}
    <Stars radius={120} depth={50} count={800} factor={2.5} fade speed={0.2} />

    {/* Atmospheric fog for depth */}
    <AtmosphericFog color="#E8D5B7" near={40} far={150} />
  </>
));

// ============================================================
// MAIN SCENE
// ============================================================
const SaiScene = ({ positionX, isMoving, direction }) => (
  <Suspense fallback={null}>
    <SceneLighting />
    <Atmosphere />
    <SafaHill />
    <MarwahHill />
    <MasaCorridor />
    <Pilgrim positionX={positionX} isMoving={isMoving} direction={direction} />
    <NPCPilgrims />
  </Suspense>
);

// ============================================================
// MAIN COMPONENT
// ============================================================
const SaiGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [positionX, setPositionX] = useState(-6.5);
  const [laps, setLaps] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState(1);
  const [gameComplete, setGameComplete] = useState(false);
  const [atHill, setAtHill] = useState('safa');
  const [showDua, setShowDua] = useState(false);

  const touchRef = useRef(0);
  const isRTL = language === 'ar' || language === 'ur';

  useEffect(() => { initAudio(); return () => stopAllSounds(); }, []);

  const duas = useMemo(() => ({
    safa: { arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ', en: 'Indeed, Safa and Marwah are among the symbols of Allah.', ur: 'بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔' },
    marwah: { arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ الأَعَزُّ الأَكْرَمُ', en: 'My Lord, forgive and have mercy, You are the Most Mighty.', ur: 'اے میرے رب! معاف فرما اور رحم کر۔' },
  }), []);

  const text = {
    title: { en: "Sa'i", ur: 'سعی', ar: 'السعي' },
    safa: { en: 'Safa', ur: 'صفا', ar: 'الصفا' },
    marwah: { en: 'Marwah', ur: 'مروہ', ar: 'المروة' },
    instruction: { en: 'Walk between Safa and Marwah 7 times', ur: 'صفا اور مروہ کے درمیان 7 بار چلیں', ar: 'امشِ بين الصفا والمروة 7 مرات' },
    controls: { en: 'Use arrow buttons, swipe, or keyboard (A/D/←/→)', ur: 'تیر والے بٹن، سوائپ یا کی بورڈ (A/D/←/→) استعمال کریں', ar: 'استخدم أزرار الأسهم أو السحب أو لوحة المفاتيح (A/D/←/→)' },
    run: { en: '🏃 Run in green zone!', ur: '🏃 سبز زون میں دوڑیں!', ar: '🏃 اركض في المنطقة الخضراء!' },
    complete: { en: "Sa'i Complete!", ur: 'سعی مکمل!', ar: 'اكتمل السعي!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    next: { en: 'Continue', ur: 'جاری رکھیں', ar: 'استمر' },
  };

  const movePlayer = useCallback((delta) => {
    if (gameComplete) return;
    setPositionX((prev) => {
      const inGreen = Math.abs(prev) < 2.5;
      const speed = inGreen ? 0.15 : 0.08;
      const newPos = Math.max(-7, Math.min(7, prev + delta * speed));

      if (delta > 0) setDirection(1);
      else if (delta < 0) setDirection(-1);

      // Check arrivals
      if (newPos >= 6.8 && prev < 6.8) {
        setAtHill('marwah');
        setLaps((l) => {
          const newL = l + 1;
          playRoundComplete();
          if (newL >= 7) { setGameComplete(true); stopWalkingSound(); playGameComplete(); }
          else { playDuaReveal(); setShowDua(true); setTimeout(() => setShowDua(false), 3000); }
          return newL;
        });
      } else if (newPos <= -6.8 && prev > -6.8 && laps > 0) {
        setAtHill('safa');
        setLaps((l) => {
          const newL = l + 1;
          playRoundComplete();
          if (newL >= 7) { setGameComplete(true); stopWalkingSound(); playGameComplete(); }
          else { playDuaReveal(); setShowDua(true); setTimeout(() => setShowDua(false), 3000); }
          return newL;
        });
      } else {
        setAtHill(null);
      }
      return newPos;
    });
  }, [gameComplete, laps]);

  // Touch/mouse handlers
  const handleTouchStart = (e) => { touchRef.current = e.touches[0].clientX; setIsMoving(true); startWalkingSound(); };
  const handleTouchMove = (e) => { const d = (e.touches[0].clientX - touchRef.current) * 0.12; touchRef.current = e.touches[0].clientX; movePlayer(d); };
  const handleTouchEnd = () => { setIsMoving(false); stopWalkingSound(); };

  const handleMouseDown = (e) => {
    touchRef.current = e.clientX;
    setIsMoving(true);
    startWalkingSound();
    const move = (e) => { const d = (e.clientX - touchRef.current) * 0.12; touchRef.current = e.clientX; movePlayer(d); };
    const up = () => { setIsMoving(false); stopWalkingSound(); window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // Keyboard
  useEffect(() => {
    const down = (e) => {
      if (gameComplete) { if (e.code === 'Enter' || e.code === 'Space') onComplete?.(); return; }
      if (e.code === 'ArrowRight' || e.code === 'KeyD') { if (!isMoving) { setIsMoving(true); startWalkingSound(); } movePlayer(1); }
      else if (e.code === 'ArrowLeft' || e.code === 'KeyA') { if (!isMoving) { setIsMoving(true); startWalkingSound(); } movePlayer(-1); }
      else if (e.code === 'Escape') onBack?.();
    };
    const up = (e) => { if (['ArrowRight', 'KeyD', 'ArrowLeft', 'KeyA'].includes(e.code)) { setIsMoving(false); stopWalkingSound(); } };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, [gameComplete, isMoving, movePlayer, onBack, onComplete]);

  return (
    <div
      className="fixed inset-0 z-[10000]"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #87CEEB 0%, #E8D5B7 100%)'
      }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-20 bg-gradient-to-b from-black/50 to-transparent">
        <button onClick={onBack} className="p-3 rounded-full bg-white/20 text-white">←</button>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏔️</span>
          <h1 className="text-xl font-bold text-white">{text.title[language]}</h1>
        </div>
        <div className="flex items-center gap-2">
          {!gameComplete && <button onClick={() => { stopAllSounds(); playGameComplete(); setGameComplete(true); }} className="px-3 py-1 rounded-full bg-white/20 text-white/80 text-sm">{text.skip[language]} ⏭️</button>}
          <div className="px-4 py-2 bg-emerald-500/90 rounded-full"><span className="text-white font-bold">{Math.min(laps, 7)}/7</span></div>
        </div>
      </div>

      {/* Location indicators */}
      <div className="absolute top-20 left-0 right-0 flex justify-between px-6 z-10">
        <div className={`px-4 py-2 rounded-full transition-all ${positionX < -5 ? 'bg-emerald-500 text-white scale-110' : 'bg-white/30 text-white/80'}`}>🏔️ {text.safa[language]}</div>
        <div className={`px-4 py-2 rounded-full transition-all ${positionX > 5 ? 'bg-emerald-500 text-white scale-110' : 'bg-white/30 text-white/80'}`}>{text.marwah[language]} 🏔️</div>
      </div>

      {/* Progress dots */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${i < laps ? 'bg-emerald-400' : 'bg-white/30'}`} />
        ))}
      </div>

      {/* Dua */}
      {showDua && atHill && (
        <div className="absolute top-36 left-4 right-4 z-30 flex justify-center">
          <div className="max-w-md p-4 bg-emerald-900/95 backdrop-blur-md rounded-2xl">
            <p className="text-white text-lg text-center mb-2 leading-relaxed" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">{duas[atHill]?.arabic}</p>
            <p className="text-white/80 text-sm text-center">{duas[atHill]?.[language] || duas[atHill]?.en}</p>
          </div>
        </div>
      )}

      {/* 3D */}
      <div className="w-full h-full cursor-grab" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown}>
        <Canvas
          shadows
          camera={{ position: [0, 3, 10], fov: 50 }}
          dpr={[1, 2]}
          style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #F5E6D3 100%)' }}
        >
          <SaiScene positionX={positionX} isMoving={isMoving} direction={direction} />
        </Canvas>
      </div>

      {/* Green zone indicator */}
      {!gameComplete && Math.abs(positionX) < 2.5 && (
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-500/90 rounded-full text-white font-bold animate-pulse">{text.run[language]}</div>
      )}

      {/* Walk Controls - Works on both desktop (mouse) and mobile (touch) */}
      {!gameComplete && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[10010] pointer-events-auto flex gap-6">
          {/* Left / Safa Button */}
          <button
            className="w-20 h-20 bg-emerald-500/90 backdrop-blur-md rounded-full text-white font-bold active:bg-emerald-600 active:scale-95 transition-all border-4 border-white/30 shadow-lg flex flex-col items-center justify-center hover:bg-emerald-600 cursor-pointer select-none"
            onMouseDown={() => { if (!isMoving) { setIsMoving(true); startWalkingSound(); } movePlayer(-1); }}
            onMouseUp={() => { setIsMoving(false); stopWalkingSound(); }}
            onMouseLeave={() => { setIsMoving(false); stopWalkingSound(); }}
            onTouchStart={() => { if (!isMoving) { setIsMoving(true); startWalkingSound(); } movePlayer(-1); }}
            onTouchEnd={() => { setIsMoving(false); stopWalkingSound(); }}
          >
            <span className="text-2xl">←</span>
            <span className="text-xs" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>{text.safa[language]}</span>
          </button>

          {/* Right / Marwah Button */}
          <button
            className="w-20 h-20 bg-emerald-500/90 backdrop-blur-md rounded-full text-white font-bold active:bg-emerald-600 active:scale-95 transition-all border-4 border-white/30 shadow-lg flex flex-col items-center justify-center hover:bg-emerald-600 cursor-pointer select-none"
            onMouseDown={() => { if (!isMoving) { setIsMoving(true); startWalkingSound(); } movePlayer(1); }}
            onMouseUp={() => { setIsMoving(false); stopWalkingSound(); }}
            onMouseLeave={() => { setIsMoving(false); stopWalkingSound(); }}
            onTouchStart={() => { if (!isMoving) { setIsMoving(true); startWalkingSound(); } movePlayer(1); }}
            onTouchEnd={() => { setIsMoving(false); stopWalkingSound(); }}
          >
            <span className="text-2xl">→</span>
            <span className="text-xs" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>{text.marwah[language]}</span>
          </button>
        </div>
      )}

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        {!gameComplete ? (
          <div className="text-center">
            <p className="text-white/90 text-lg mb-2" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.instruction[language]}
            </p>
            <p className="text-white/60 text-sm" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.controls[language]}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>{text.complete[language]}</h2>
            <button onClick={onComplete} className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-full">{text.next[language]} →</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaiGameImmersive;
