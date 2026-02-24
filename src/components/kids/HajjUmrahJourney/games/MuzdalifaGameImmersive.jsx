/**
 * MuzdalifaGameImmersive.jsx
 * Immersive 3D night experience at Muzdalifah
 * Player collects pebbles under the stars for Jamarat
 */

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Text, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { EnhancedSky, DustParticles, GoldenSparkles, RealisticPilgrim } from './EnhancedGraphics';

// ============================================================
// 3D COMPONENTS
// ============================================================

// Night sky with stars
const NightSky = () => {
  return (
    <>
      <Stars
        radius={300}
        depth={100}
        count={5000}
        factor={6}
        saturation={0}
        fade
        speed={0.5}
      />
      {/* Moon */}
      <mesh position={[100, 80, -150]}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshStandardMaterial
          color="#FFFACD"
          emissive="#FFFACD"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Moon glow */}
      <pointLight position={[100, 80, -150]} intensity={0.3} color="#FFFACD" distance={300} />
    </>
  );
};

// Desert ground at night
const NightDesert = () => {
  return (
    <group>
      {/* Main ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400, 64, 64]} />
        <meshStandardMaterial
          color="#2D2A26"
          roughness={1}
        />
      </mesh>

      {/* Rocky terrain patches */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 150,
            Math.random() * 0.3,
            (Math.random() - 0.5) * 150
          ]}
          rotation={[0, Math.random() * Math.PI, 0]}
        >
          <dodecahedronGeometry args={[1 + Math.random() * 2, 0]} />
          <meshStandardMaterial
            color={`hsl(30, ${10 + Math.random() * 15}%, ${15 + Math.random() * 10}%)`}
            roughness={1}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
};

// Mountains silhouette
const MountainsSilhouette = () => {
  const mountains = useMemo(() => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI + Math.PI / 2;
      const radius = 100 + Math.random() * 30;
      items.push({
        position: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius - 50],
        scale: [20 + Math.random() * 15, 30 + Math.random() * 40, 20 + Math.random() * 15]
      });
    }
    return items;
  }, []);

  return (
    <group>
      {mountains.map((m, i) => (
        <mesh key={i} position={m.position} scale={m.scale}>
          <coneGeometry args={[1, 1, 6]} />
          <meshStandardMaterial color="#1A1814" flatShading />
        </mesh>
      ))}
    </group>
  );
};

// Collectible pebble
const Pebble = ({ position, id, onCollect, collected }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && !collected) {
      // Gentle glow animation
      meshRef.current.position.y = 0.2 + Math.sin(state.clock.elapsedTime * 2 + id) * 0.1;
    }
  });

  if (collected) return null;

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={() => onCollect(id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color={hovered ? "#FFD700" : "#A0937D"}
          emissive={hovered ? "#FFD700" : "#FFD700"}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Glow effect */}
      <pointLight
        position={[0, 0.2, 0]}
        intensity={hovered ? 1 : 0.3}
        color="#FFD700"
        distance={3}
      />

      {/* Sparkle effect */}
      {hovered && (
        <Sparkles
          count={10}
          scale={1}
          size={2}
          speed={1}
          color="#FFD700"
        />
      )}
    </group>
  );
};

// Pebbles scattered on ground
const PebbleField = ({ onCollect, collectedPebbles }) => {
  const pebbles = useMemo(() => {
    const items = [];
    // Create ~70 pebbles scattered around
    for (let i = 0; i < 70; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 30 + 5;
      items.push({
        id: i,
        position: [
          Math.cos(angle) * radius,
          0,
          Math.sin(angle) * radius
        ]
      });
    }
    return items;
  }, []);

  return (
    <group>
      {pebbles.map((pebble) => (
        <Pebble
          key={pebble.id}
          id={pebble.id}
          position={pebble.position}
          onCollect={onCollect}
          collected={collectedPebbles.includes(pebble.id)}
        />
      ))}
    </group>
  );
};

// Pilgrims resting
const RestingPilgrims = () => {
  const pilgrims = useMemo(() => {
    const items = [];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 40 + 15;
      items.push({
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        rotation: Math.random() * Math.PI * 2,
        isLying: Math.random() > 0.3 // Most are lying down/resting
      });
    }
    return items;
  }, []);

  return (
    <group>
      {pilgrims.map((p, i) => (
        <group key={i} position={[p.x, 0, p.z]} rotation={[0, p.rotation, 0]}>
          {p.isLying ? (
            // Lying down pilgrim
            <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
              <capsuleGeometry args={[0.25, 1, 4, 8]} />
              <meshStandardMaterial color="#E8E8E8" />
            </mesh>
          ) : (
            // Sitting pilgrim
            <>
              <mesh position={[0, 0.4, 0]}>
                <capsuleGeometry args={[0.2, 0.4, 4, 8]} />
                <meshStandardMaterial color="#F0F0F0" />
              </mesh>
              <mesh position={[0, 0.9, 0]}>
                <sphereGeometry args={[0.15, 8, 8]} />
                <meshStandardMaterial color="#C4956A" />
              </mesh>
            </>
          )}
        </group>
      ))}
    </group>
  );
};

// Player character collecting pebbles (using RealisticPilgrim)
const PlayerCollector = ({ position, bagCount }) => {
  const bagRef = useRef();

  useFrame((state) => {
    if (bagRef.current) {
      bagRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group position={position}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={1.2}
        isMoving={false}
        lookDirection={0}
        skinTone="#C68642"
      />

      {/* Bag for pebbles */}
      <group ref={bagRef} position={[-0.7, 1, 0]}>
        <mesh>
          <sphereGeometry args={[0.25 + bagCount * 0.015, 12, 12]} />
          <meshStandardMaterial color="#8B7355" roughness={0.8} />
        </mesh>
        {/* Pebbles visible in bag */}
        {Array.from({ length: Math.min(bagCount, 10) }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 0.15,
              0.18,
              (Math.random() - 0.5) * 0.15
            ]}
          >
            <dodecahedronGeometry args={[0.06, 0]} />
            <meshStandardMaterial color="#A0937D" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Light to see around in the dark */}
      <pointLight position={[0, 2.5, 1]} intensity={0.6} color="#FFFACD" distance={12} />
    </group>
  );
};

// Camera follows player
const FollowCamera = ({ target }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (target) {
      camera.position.lerp(
        new THREE.Vector3(target[0], target[1] + 6, target[2] + 12),
        0.05
      );
      camera.lookAt(target[0], target[1] + 1, target[2]);
    }
  });

  return null;
};

// Main 3D scene
const MuzdalifaScene = ({ onCollectPebble, collectedPebbles, playerPos }) => {
  return (
    <>
      {/* Enhanced night lighting */}
      <ambientLight intensity={0.18} color="#4A5568" />

      {/* Moonlight directional */}
      <directionalLight
        position={[100, 80, -150]}
        intensity={0.4}
        color="#B4C5E4"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Subtle warm fill light */}
      <directionalLight position={[-50, 30, 50]} intensity={0.1} color="#FFE4C4" />

      {/* Hemisphere for ground/sky color bleed */}
      <hemisphereLight args={['#1a1a2e', '#2D2A26', 0.2]} />

      {/* Enhanced night sky */}
      <EnhancedSky timeOfDay="night" showStars={true} />

      {/* Additional dramatic stars */}
      <Stars
        radius={400}
        depth={150}
        count={8000}
        factor={8}
        saturation={0}
        fade
        speed={0.3}
      />

      {/* Moon */}
      <mesh position={[100, 80, -150]}>
        <sphereGeometry args={[12, 32, 32]} />
        <meshStandardMaterial
          color="#FFFACD"
          emissive="#FFFACD"
          emissiveIntensity={0.6}
        />
      </mesh>
      <pointLight position={[100, 80, -150]} intensity={0.5} color="#FFFACD" distance={400} />

      {/* Subtle night dust particles */}
      <DustParticles count={100} area={60} color="#4A5568" />

      {/* Environment */}
      <NightDesert />
      <MountainsSilhouette />
      <RestingPilgrims />

      {/* Pebbles to collect */}
      <PebbleField
        onCollect={onCollectPebble}
        collectedPebbles={collectedPebbles}
      />

      {/* Golden sparkles around pebble areas */}
      <GoldenSparkles position={[0, 0.5, 0]} active={collectedPebbles.length < 49} />

      {/* Player */}
      <PlayerCollector position={playerPos} bagCount={collectedPebbles.length} />

      {/* Camera */}
      <FollowCamera target={playerPos} />

      {/* Enhanced atmospheric fog for night */}
      <fog attach="fog" args={['#0a0a15', 25, 120]} />
    </>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const MuzdalifaGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [playerPos, setPlayerPos] = useState([0, 0, 0]);
  const [collectedPebbles, setCollectedPebbles] = useState([]);
  const [stage, setStage] = useState('collecting'); // collecting, praying, complete
  const keysRef = useRef({ w: false, a: false, s: false, d: false });
  const requiredPebbles = 49; // 7 pebbles × 7 days = 49 total for Jamarat
  const isRTL = language === 'ar' || language === 'ur';

  const text = {
    title: { en: 'Night at Muzdalifah', ur: 'مزدلفہ کی رات', ar: 'ليلة المزدلفة' },
    instruction: {
      en: `Collect ${requiredPebbles} pebbles for Jamarat stoning`,
      ur: `جمرات کے لیے ${requiredPebbles} کنکریاں جمع کریں`,
      ar: `اجمع ${requiredPebbles} حصاة لرمي الجمرات`
    },
    collected: { en: 'Pebbles collected', ur: 'کنکریاں جمع ہوئیں', ar: 'الحصى المجموعة' },
    tapToCollect: { en: 'Tap glowing pebbles to collect', ur: 'چمکتی کنکریوں کو ٹیپ کریں', ar: 'اضغط على الحصى المتوهجة لجمعها' },
    controls: {
      en: 'Use D-pad buttons, keyboard (WASD/Arrows), or click pebbles to collect',
      ur: 'ڈی پیڈ بٹن، کی بورڈ (WASD/تیر) یا کنکریوں پر کلک کریں',
      ar: 'استخدم أزرار التحكم أو لوحة المفاتيح (WASD/الأسهم) أو انقر على الحصى'
    },
    dua: {
      arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
      en: 'Our Lord, accept from us. Indeed You are the Hearing, the Knowing.',
      ur: 'اے ہمارے رب، ہم سے قبول فرما۔ بیشک تو سننے والا جاننے والا ہے۔'
    },
    complete: { en: 'Ready for Jamarat!', ur: 'جمرات کے لیے تیار!', ar: 'جاهز لرمي الجمرات!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' }
  };

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
        e.preventDefault();
        if (key === 'arrowup') keysRef.current.w = true;
        else if (key === 'arrowdown') keysRef.current.s = true;
        else if (key === 'arrowleft') keysRef.current.a = true;
        else if (key === 'arrowright') keysRef.current.d = true;
        else keysRef.current[key] = true;
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'arrowup') keysRef.current.w = false;
      else if (key === 'arrowdown') keysRef.current.s = false;
      else if (key === 'arrowleft') keysRef.current.a = false;
      else if (key === 'arrowright') keysRef.current.d = false;
      else if (keysRef.current[key] !== undefined) keysRef.current[key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Movement loop
  useEffect(() => {
    const moveLoop = setInterval(() => {
      const speed = 0.3;
      let dx = 0, dz = 0;

      if (keysRef.current.w) dz -= speed;
      if (keysRef.current.s) dz += speed;
      if (keysRef.current.a) dx -= speed;
      if (keysRef.current.d) dx += speed;

      if (dx !== 0 || dz !== 0) {
        setPlayerPos(prev => [
          Math.max(-40, Math.min(40, prev[0] + dx)),
          prev[1],
          Math.max(-40, Math.min(40, prev[2] + dz))
        ]);
      }
    }, 16);

    return () => clearInterval(moveLoop);
  }, []);

  const handleCollectPebble = useCallback((id) => {
    if (!collectedPebbles.includes(id) && collectedPebbles.length < requiredPebbles) {
      setCollectedPebbles(prev => {
        const newPebbles = [...prev, id];
        if (newPebbles.length >= requiredPebbles) {
          setTimeout(() => {
            setStage('praying');
            setTimeout(() => setStage('complete'), 3000);
          }, 500);
        }
        return newPebbles;
      });
    }
  }, [collectedPebbles, requiredPebbles]);

  return (
    <div
      className="fixed inset-0 z-[10000]"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 6, 12], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #0a0a15 0%, #0f0f23 100%)' }}
      >
        <MuzdalifaScene
          onCollectPebble={handleCollectPebble}
          collectedPebbles={collectedPebbles}
          playerPos={playerPos}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-50 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white pointer-events-auto"
        >
          ←
        </button>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="absolute top-4 right-4 z-50 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm pointer-events-auto"
        >
          {text.skip[language]} →
        </button>

        {/* Title */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
          <h1 className="text-white font-bold text-lg" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            🌙 {text.title[language]}
          </h1>
        </div>

        {/* Pebble counter */}
        {stage === 'collecting' && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-amber-500/80 backdrop-blur-sm rounded-full px-6 py-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🪨</span>
              <span className="text-white font-bold text-xl">
                {collectedPebbles.length} / {requiredPebbles}
              </span>
            </div>
          </div>
        )}

        {/* Instructions */}
        {stage === 'collecting' && collectedPebbles.length === 0 && (
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 text-center max-w-sm">
            <p className="text-white mb-2" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.instruction[language]}
            </p>
            <p className="text-amber-400 text-sm">
              {text.tapToCollect[language]}
            </p>
            <p className="text-white/50 text-xs mt-2">
              {text.controls[language]}
            </p>
          </div>
        )}

        {/* Praying screen */}
        {stage === 'praying' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <div className="bg-gradient-to-b from-indigo-900/90 to-purple-900/90 backdrop-blur-sm rounded-3xl px-10 py-8 text-center max-w-md">
              <span className="text-5xl block mb-4">🤲</span>
              <p
                className="text-2xl text-white mb-4 leading-relaxed"
                style={{ fontFamily: "'Scheherazade New', serif" }}
                dir="rtl"
              >
                {text.dua.arabic}
              </p>
              <p
                className="text-amber-300"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.dua[language] || text.dua.en}
              </p>
            </div>
          </div>
        )}

        {/* Complete screen */}
        {stage === 'complete' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-auto">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl px-12 py-8 text-center shadow-2xl">
              <span className="text-6xl block mb-4">🌙</span>
              <p
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.complete[language]}
              </p>
              <p className="text-white/70 mb-4">
                {collectedPebbles.length} 🪨 {text.collected[language]}
              </p>
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full"
              >
                {language === 'ar' ? 'إلى الجمرات' : language === 'ur' ? 'جمرات کی طرف' : 'To Jamarat'} →
              </button>
            </div>
          </div>
        )}

        {/* Walk Controls - Works on both desktop (mouse) and mobile (touch) */}
        {stage === 'collecting' && (
          <div className="absolute bottom-4 left-4 pointer-events-auto">
            <div className="grid grid-cols-3 gap-2" style={{ width: '200px' }}>
              <div></div>
              <button
                className="w-16 h-16 bg-indigo-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-indigo-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-indigo-600 cursor-pointer select-none"
                onMouseDown={() => { keysRef.current.w = true; }}
                onMouseUp={() => { keysRef.current.w = false; }}
                onMouseLeave={() => { keysRef.current.w = false; }}
                onTouchStart={() => { keysRef.current.w = true; }}
                onTouchEnd={() => { keysRef.current.w = false; }}
              >
                ↑
              </button>
              <div></div>
              <button
                className="w-16 h-16 bg-indigo-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-indigo-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-indigo-600 cursor-pointer select-none"
                onMouseDown={() => { keysRef.current.a = true; }}
                onMouseUp={() => { keysRef.current.a = false; }}
                onMouseLeave={() => { keysRef.current.a = false; }}
                onTouchStart={() => { keysRef.current.a = true; }}
                onTouchEnd={() => { keysRef.current.a = false; }}
              >
                ←
              </button>
              <button
                className="w-16 h-16 bg-indigo-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-indigo-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-indigo-600 cursor-pointer select-none"
                onMouseDown={() => { keysRef.current.s = true; }}
                onMouseUp={() => { keysRef.current.s = false; }}
                onMouseLeave={() => { keysRef.current.s = false; }}
                onTouchStart={() => { keysRef.current.s = true; }}
                onTouchEnd={() => { keysRef.current.s = false; }}
              >
                ↓
              </button>
              <button
                className="w-16 h-16 bg-indigo-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-indigo-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-indigo-600 cursor-pointer select-none"
                onMouseDown={() => { keysRef.current.d = true; }}
                onMouseUp={() => { keysRef.current.d = false; }}
                onMouseLeave={() => { keysRef.current.d = false; }}
                onTouchStart={() => { keysRef.current.d = true; }}
                onTouchEnd={() => { keysRef.current.d = false; }}
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MuzdalifaGameImmersive;
