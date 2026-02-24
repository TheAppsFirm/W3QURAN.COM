/**
 * MinaGameImmersive.jsx
 * Immersive 3D tent city experience for Mina
 * Player walks through tent valley, finds their tent, and settles in
 */

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sky, Stars, Text, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { EnhancedLighting, AtmosphericFog, DustParticles, GoldenSparkles, EnhancedSky, RealisticPilgrim } from './EnhancedGraphics';

// ============================================================
// 3D COMPONENTS
// ============================================================

// Desert ground with sand texture
const DesertGround = () => {
  return (
    <group>
      {/* Main ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[500, 500, 64, 64]} />
        <meshStandardMaterial
          color="#D4A574"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Sand dunes around edges */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.random() * 3 + 1,
              Math.sin(angle) * radius
            ]}
            scale={[10 + Math.random() * 10, 3 + Math.random() * 3, 10 + Math.random() * 10]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#C4956A" roughness={1} />
          </mesh>
        );
      })}
    </group>
  );
};

// Valley mountains surrounding Mina
const ValleyMountains = () => {
  const mountains = useMemo(() => {
    const items = [];
    // Create mountain range on both sides
    for (let i = 0; i < 30; i++) {
      const side = i < 15 ? -1 : 1;
      const z = (i % 15) * 15 - 100;
      items.push({
        position: [side * (60 + Math.random() * 20), 0, z],
        scale: [15 + Math.random() * 10, 20 + Math.random() * 30, 15 + Math.random() * 10],
        color: `hsl(30, ${20 + Math.random() * 20}%, ${40 + Math.random() * 20}%)`
      });
    }
    return items;
  }, []);

  return (
    <group>
      {mountains.map((m, i) => (
        <mesh key={i} position={m.position} scale={m.scale}>
          <coneGeometry args={[1, 1, 8]} />
          <meshStandardMaterial color={m.color} roughness={0.9} flatShading />
        </mesh>
      ))}
    </group>
  );
};

// Single tent component
const Tent = ({ position, color, isTarget, isHighlighted, onClick }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current && isHighlighted) {
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
    }
  });

  return (
    <group position={position} onClick={onClick}>
      {/* Tent body - triangular prism shape */}
      <mesh ref={meshRef} position={[0, 2, 0]} castShadow>
        <coneGeometry args={[3, 4, 4]} />
        <meshStandardMaterial
          color={isTarget ? '#FFD700' : color}
          roughness={0.8}
          emissive={isHighlighted ? '#FFD700' : '#000000'}
          emissiveIntensity={isHighlighted ? 0.3 : 0}
        />
      </mesh>

      {/* Tent entrance */}
      <mesh position={[0, 1, 2]} rotation={[0.2, 0, 0]}>
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial color="#2D1B0E" side={THREE.DoubleSide} />
      </mesh>

      {/* Ground mat */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <circleGeometry args={[3.5, 16]} />
        <meshStandardMaterial color="#8B7355" roughness={1} />
      </mesh>

      {/* Glowing marker for target tent */}
      {isTarget && (
        <Float speed={2} rotationIntensity={0} floatIntensity={1}>
          <mesh position={[0, 6, 0]}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial
              color="#FFD700"
              emissive="#FFD700"
              emissiveIntensity={1}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      )}
    </group>
  );
};

// Tent city - organized rows of white tents
const TentCity = ({ playerPosition, targetTent, onReachTarget }) => {
  const tents = useMemo(() => {
    const items = [];
    // Create organized tent rows
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 6; col++) {
        const x = (col - 2.5) * 10;
        const z = row * 12 - 40;
        items.push({
          id: `${row}-${col}`,
          position: [x, 0, z],
          color: '#F5F5F5', // White tents
          isTarget: row === 4 && col === 3 // Middle-ish tent as target
        });
      }
    }
    return items;
  }, []);

  // Check if player reached target
  useEffect(() => {
    if (playerPosition && targetTent) {
      const target = tents.find(t => t.isTarget);
      if (target) {
        const dist = Math.sqrt(
          Math.pow(playerPosition[0] - target.position[0], 2) +
          Math.pow(playerPosition[2] - target.position[2], 2)
        );
        if (dist < 5) {
          onReachTarget?.();
        }
      }
    }
  }, [playerPosition, tents, onReachTarget]);

  return (
    <group>
      {tents.map((tent) => (
        <Tent
          key={tent.id}
          position={tent.position}
          color={tent.color}
          isTarget={tent.isTarget}
          isHighlighted={tent.isTarget && targetTent}
        />
      ))}
    </group>
  );
};

// Pilgrim character (using RealisticPilgrim)
const Pilgrim = ({ position, isMoving }) => {
  return (
    <group position={position}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={1.2}
        isMoving={isMoving}
        lookDirection={0}
        skinTone="#C68642"
      />
      {/* Small bag */}
      <mesh position={[0.6, 1, 0.25]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.3, 0.4, 0.2]} />
        <meshStandardMaterial color="#5D4037" />
      </mesh>
    </group>
  );
};

// NPC Pilgrims walking around
const NPCPilgrims = () => {
  const npcsRef = useRef([]);

  const npcs = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 50,
      startZ: Math.random() * 80 - 50,
      speed: 0.3 + Math.random() * 0.3,
      direction: Math.random() * Math.PI * 2
    }));
  }, []);

  useFrame((state) => {
    npcsRef.current.forEach((npc, i) => {
      if (npc) {
        const data = npcs[i];
        npc.position.x = data.startX + Math.sin(state.clock.elapsedTime * data.speed + i) * 10;
        npc.position.z = data.startZ + Math.cos(state.clock.elapsedTime * data.speed + i) * 5;
        npc.rotation.y = Math.atan2(
          Math.cos(state.clock.elapsedTime * data.speed + i) * data.speed,
          Math.sin(state.clock.elapsedTime * data.speed + i) * data.speed * 10
        );
      }
    });
  });

  return (
    <group>
      {npcs.map((npc, i) => (
        <group key={npc.id} ref={(el) => (npcsRef.current[i] = el)} position={[npc.startX, 0, npc.startZ]}>
          <mesh position={[0, 1, 0]}>
            <capsuleGeometry args={[0.3, 0.8, 8, 16]} />
            <meshStandardMaterial color="#F0F0F0" roughness={0.8} />
          </mesh>
          <mesh position={[0, 1.8, 0]}>
            <sphereGeometry args={[0.2, 8, 8]} />
            <meshStandardMaterial color="#C4956A" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Service buildings (bathrooms, water stations)
const ServiceBuildings = () => {
  return (
    <group>
      {/* Water station */}
      <group position={[-25, 0, 0]}>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[4, 3, 3]} />
          <meshStandardMaterial color="#3B82F6" roughness={0.3} />
        </mesh>
        <Text
          position={[0, 3.5, 0]}
          fontSize={0.5}
          color="#FFFFFF"
          anchorX="center"
        >
          💧 ZamZam
        </Text>
      </group>

      {/* Restroom facility */}
      <group position={[25, 0, -20]}>
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[6, 4, 4]} />
          <meshStandardMaterial color="#78716C" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
};

// Camera that follows player
const FollowCamera = ({ target }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (target.current) {
      const pos = target.current;
      camera.position.lerp(
        new THREE.Vector3(pos[0], pos[1] + 8, pos[2] + 15),
        0.05
      );
      camera.lookAt(pos[0], pos[1] + 1, pos[2]);
    }
  });

  return null;
};

// Main 3D scene - receives keysRef from parent
const MinaScene = ({ onReachTent, language, keysRef }) => {
  const [playerPos, setPlayerPos] = useState([0, 0, -60]);
  const [isMoving, setIsMoving] = useState(false);
  const [reachedTent, setReachedTent] = useState(false);
  const playerPosRef = useRef(playerPos);

  // Movement update
  useFrame(() => {
    const speed = 0.2;
    let dx = 0, dz = 0;

    if (keysRef.current.w) dz -= speed;
    if (keysRef.current.s) dz += speed;
    if (keysRef.current.a) dx -= speed;
    if (keysRef.current.d) dx += speed;

    if (dx !== 0 || dz !== 0) {
      setIsMoving(true);
      setPlayerPos(prev => {
        const newPos = [
          Math.max(-40, Math.min(40, prev[0] + dx)),
          prev[1],
          Math.max(-70, Math.min(60, prev[2] + dz))
        ];
        playerPosRef.current = newPos;
        return newPos;
      });
    } else {
      setIsMoving(false);
    }
  });

  const handleReachTarget = useCallback(() => {
    if (!reachedTent) {
      setReachedTent(true);
      onReachTent?.();
    }
  }, [reachedTent, onReachTent]);

  return (
    <>
      {/* Enhanced Lighting */}
      <EnhancedLighting
        sunPosition={[50, 100, 50]}
        ambientIntensity={0.6}
        shadowQuality="high"
        warmth={0.25}
      />

      {/* Additional fill light for valley */}
      <directionalLight position={[-30, 50, -30]} intensity={0.3} color="#FFE4C4" />

      {/* Enhanced Sky */}
      <EnhancedSky timeOfDay="day" showStars={false} />
      <Stars radius={200} depth={80} count={1000} factor={2.5} fade speed={0.15} />

      {/* Enhanced Atmospheric effects */}
      <DustParticles count={200} area={120} color="#D4A574" />
      <AtmosphericFog color="#E8D5B7" near={50} far={200} />

      {/* Additional heat shimmer particles */}
      <Sparkles
        count={80}
        scale={80}
        size={2.5}
        speed={0.2}
        color="#FFE4B5"
        opacity={0.2}
        position={[0, 1, 0]}
      />

      {/* Environment */}
      <DesertGround />
      <ValleyMountains />
      <TentCity
        playerPosition={playerPosRef.current}
        targetTent={!reachedTent}
        onReachTarget={handleReachTarget}
      />
      <NPCPilgrims />
      <ServiceBuildings />

      {/* Golden sparkles at target tent */}
      {!reachedTent && <GoldenSparkles position={[5, 4, 8]} active={true} />}

      {/* Player */}
      <Pilgrim position={playerPos} isMoving={isMoving} />

      {/* Camera */}
      <FollowCamera target={playerPosRef} />
    </>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const MinaGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [stage, setStage] = useState('walking'); // walking, settling, praying, complete
  const [showInstructions, setShowInstructions] = useState(true);
  const keysRef = useRef({ w: false, a: false, s: false, d: false });
  const isRTL = language === 'ar' || language === 'ur';

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
        e.preventDefault();
        if (key === 'arrowup' || key === 'w') keysRef.current.w = true;
        if (key === 'arrowdown' || key === 's') keysRef.current.s = true;
        if (key === 'arrowleft' || key === 'a') keysRef.current.a = true;
        if (key === 'arrowright' || key === 'd') keysRef.current.d = true;
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'arrowup' || key === 'w') keysRef.current.w = false;
      if (key === 'arrowdown' || key === 's') keysRef.current.s = false;
      if (key === 'arrowleft' || key === 'a') keysRef.current.a = false;
      if (key === 'arrowright' || key === 'd') keysRef.current.d = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const text = {
    title: { en: 'Journey to Mina', ur: 'منیٰ کا سفر', ar: 'الذهاب إلى منى' },
    instruction: {
      en: 'Walk through the tent city and find your tent (marked with golden light)',
      ur: 'خیموں کی بستی میں چلیں اور اپنا خیمہ تلاش کریں (سنہری روشنی سے نشان زد)',
      ar: 'امشِ عبر مدينة الخيام وابحث عن خيمتك (المميزة بالضوء الذهبي)'
    },
    controls: { en: 'Use arrow buttons, click, or keyboard (WASD/↑↓←→)', ur: 'تیر والے بٹن، کلک یا کی بورڈ (WASD/↑↓←→) استعمال کریں', ar: 'استخدم أزرار الأسهم أو النقر أو لوحة المفاتيح (WASD/↑↓←→)' },
    reached: { en: 'You found your tent!', ur: 'آپ نے اپنا خیمہ تلاش کر لیا!', ar: 'وجدت خيمتك!' },
    settling: { en: 'Settle in and prepare for the Day of Arafah...', ur: 'آرام کریں اور یوم عرفہ کی تیاری کریں...', ar: 'استقر واستعد ليوم عرفة...' },
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْ حَجِّي مَبْرُورًا',
      en: 'O Allah, make my Hajj accepted',
      ur: 'اے اللہ میرا حج قبول فرما'
    },
    complete: { en: 'Ready for Arafah!', ur: 'عرفات کے لیے تیار!', ar: 'جاهز لعرفة!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' }
  };

  const handleReachTent = useCallback(() => {
    setStage('settling');
    setTimeout(() => {
      setStage('praying');
      setTimeout(() => {
        setStage('complete');
      }, 3000);
    }, 2000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstructions(false), 4000);
    return () => clearTimeout(timer);
  }, []);

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
        camera={{ position: [0, 10, 20], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #D4B896 100%)' }}
      >
        <MinaScene onReachTent={handleReachTent} language={language} keysRef={keysRef} />
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
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm rounded-full px-6 py-2">
          <h1 className="text-white font-bold" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            ⛺ {text.title[language]}
          </h1>
        </div>

        {/* Instructions */}
        {showInstructions && stage === 'walking' && (
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-4 max-w-md text-center">
            <p className="text-white mb-2" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.instruction[language]}
            </p>
            <p className="text-amber-400 text-sm">
              {text.controls[language]}
            </p>
          </div>
        )}

        {/* Stage messages */}
        {stage === 'settling' && (
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-emerald-500/80 backdrop-blur-sm rounded-2xl px-8 py-4 animate-pulse">
            <p className="text-white text-lg font-bold" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              ✓ {text.reached[language]}
            </p>
          </div>
        )}

        {stage === 'praying' && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-6 text-center max-w-md">
            <p className="text-2xl text-white mb-3" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
              {text.dua.arabic}
            </p>
            <p className="text-amber-400" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.dua[language] || text.dua.en}
            </p>
          </div>
        )}

        {stage === 'complete' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-emerald-500 rounded-3xl px-12 py-8 text-center animate-bounce pointer-events-auto">
              <span className="text-5xl block mb-4">⛺</span>
              <p className="text-white text-2xl font-bold mb-4" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {text.complete[language]}
              </p>
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-full"
              >
                {language === 'ar' ? 'التالي' : language === 'ur' ? 'اگلا' : 'Next'} →
              </button>
            </div>
          </div>
        )}

        {/* Walk Controls - Works on both desktop (mouse) and mobile (touch) */}
        {stage === 'walking' && (
          <div className="absolute bottom-6 left-6 pointer-events-auto">
            <div className="grid grid-cols-3 gap-2" style={{ width: '200px' }}>
              <div></div>
              <button
                className="w-16 h-16 bg-amber-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-amber-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-amber-600 cursor-pointer select-none"
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
                className="w-16 h-16 bg-amber-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-amber-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-amber-600 cursor-pointer select-none"
                onMouseDown={() => { keysRef.current.a = true; }}
                onMouseUp={() => { keysRef.current.a = false; }}
                onMouseLeave={() => { keysRef.current.a = false; }}
                onTouchStart={() => { keysRef.current.a = true; }}
                onTouchEnd={() => { keysRef.current.a = false; }}
              >
                ←
              </button>
              <button
                className="w-16 h-16 bg-amber-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-amber-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-amber-600 cursor-pointer select-none"
                onMouseDown={() => { keysRef.current.s = true; }}
                onMouseUp={() => { keysRef.current.s = false; }}
                onMouseLeave={() => { keysRef.current.s = false; }}
                onTouchStart={() => { keysRef.current.s = true; }}
                onTouchEnd={() => { keysRef.current.s = false; }}
              >
                ↓
              </button>
              <button
                className="w-16 h-16 bg-amber-500/90 backdrop-blur-md rounded-full text-white text-2xl font-bold active:bg-amber-600 active:scale-95 transition-all border-3 border-white/30 shadow-lg flex items-center justify-center hover:bg-amber-600 cursor-pointer select-none"
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

export default MinaGameImmersive;
