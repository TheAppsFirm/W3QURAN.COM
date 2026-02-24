/**
 * JamaratGameImmersive.jsx
 * Immersive 3D game for stoning the Jamarat
 * Player throws pebbles at the three pillars
 */

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sky, Text, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { RealisticPilgrim, EnhancedLighting, DustParticles } from './EnhancedGraphics';

// ============================================================
// 3D COMPONENTS
// ============================================================

// The Jamarat bridge structure
const JamaratBridge = () => {
  return (
    <group>
      {/* Main platform */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[100, 1, 40]} />
        <meshStandardMaterial color="#B0A090" roughness={0.8} />
      </mesh>

      {/* Railings */}
      {[-18, 18].map((z, i) => (
        <group key={i}>
          {Array.from({ length: 20 }).map((_, j) => (
            <mesh key={j} position={[(j - 10) * 5, 1.5, z]}>
              <cylinderGeometry args={[0.1, 0.1, 3, 8]} />
              <meshStandardMaterial color="#8B8B8B" />
            </mesh>
          ))}
          <mesh position={[0, 2.8, z]}>
            <boxGeometry args={[100, 0.2, 0.2]} />
            <meshStandardMaterial color="#8B8B8B" />
          </mesh>
        </group>
      ))}

      {/* Floor tiles pattern */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[(i - 10) * 5, 0.51, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[4.8, 38]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#C4B8A8' : '#B8A898'}
            roughness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
};

// Single Jamrah pillar (obelisk/wall design)
const JamrahPillar = ({ position, name, isActive, hits, maxHits, onHit }) => {
  const pillarRef = useRef();
  const [hitAnimation, setHitAnimation] = useState(false);

  useFrame((state) => {
    if (pillarRef.current) {
      if (hitAnimation) {
        pillarRef.current.position.y = Math.sin(state.clock.elapsedTime * 20) * 0.1 + position[1];
      }
    }
  });

  const handleHit = useCallback(() => {
    if (hits < maxHits) {
      setHitAnimation(true);
      setTimeout(() => setHitAnimation(false), 200);
      onHit?.();
    }
  }, [hits, maxHits, onHit]);

  const progress = hits / maxHits;

  return (
    <group position={position}>
      {/* Circular basin */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[6, 7, 1, 32]} />
        <meshStandardMaterial color="#808080" roughness={0.7} />
      </mesh>

      {/* Inner basin (filled with pebbles) */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[5.5, 5.5, 0.5, 32]} />
        <meshStandardMaterial color="#5D5D5D" roughness={1} />
      </mesh>

      {/* Pebbles already in basin */}
      {Array.from({ length: Math.floor(progress * 30) }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            0.6 + Math.random() * 0.2,
            (Math.random() - 0.5) * 8
          ]}
        >
          <dodecahedronGeometry args={[0.15 + Math.random() * 0.1, 0]} />
          <meshStandardMaterial color="#A0937D" roughness={1} />
        </mesh>
      ))}

      {/* Central pillar/wall */}
      <mesh ref={pillarRef} position={[0, 4, 0]} castShadow onClick={handleHit}>
        <cylinderGeometry args={[1.5, 1.5, 7, 32]} />
        <meshStandardMaterial
          color={isActive ? "#4A4A4A" : "#3A3A3A"}
          roughness={0.6}
          emissive={isActive ? "#FF4444" : "#000000"}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </mesh>

      {/* Pillar top */}
      <mesh position={[0, 8, 0]}>
        <sphereGeometry args={[1.8, 16, 16]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.6} />
      </mesh>

      {/* Name sign */}
      <Text
        position={[0, 10, 0]}
        fontSize={1}
        color={isActive ? "#FFD700" : "#FFFFFF"}
        anchorX="center"
      >
        {name}
      </Text>

      {/* Progress indicator */}
      {isActive && (
        <group position={[0, -1, 8]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[8, 0.5, 0.5]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          <mesh position={[(progress - 0.5) * 4, 0, 0.1]}>
            <boxGeometry args={[8 * progress, 0.5, 0.3]} />
            <meshStandardMaterial
              color="#22C55E"
              emissive="#22C55E"
              emissiveIntensity={0.3}
            />
          </mesh>
        </group>
      )}

      {/* Active glow */}
      {isActive && (
        <>
          <pointLight position={[0, 4, 0]} intensity={0.5} color="#FF6B6B" distance={15} />
          <Sparkles
            count={20}
            scale={8}
            size={3}
            speed={0.5}
            color="#FFD700"
            position={[0, 5, 0]}
          />
        </>
      )}
    </group>
  );
};

// All three Jamarat
const ThreeJamarat = ({ activeJamrah, hits, onHit }) => {
  const jamarat = [
    { id: 'sughra', name: 'الصغرى', position: [-30, 0, 0], maxHits: 7 },
    { id: 'wusta', name: 'الوسطى', position: [0, 0, 0], maxHits: 7 },
    { id: 'aqaba', name: 'العقبة', position: [30, 0, 0], maxHits: 7 },
  ];

  return (
    <group>
      {jamarat.map((j) => (
        <JamrahPillar
          key={j.id}
          position={j.position}
          name={j.name}
          isActive={activeJamrah === j.id}
          hits={hits[j.id] || 0}
          maxHits={j.maxHits}
          onHit={() => onHit(j.id)}
        />
      ))}
    </group>
  );
};

// Flying pebble animation
const FlyingPebble = ({ startPos, targetPos, onComplete }) => {
  const meshRef = useRef();
  const [progress, setProgress] = useState(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const newProgress = Math.min(progress + delta * 3, 1);
      setProgress(newProgress);

      // Parabolic arc
      const x = startPos[0] + (targetPos[0] - startPos[0]) * newProgress;
      const z = startPos[2] + (targetPos[2] - startPos[2]) * newProgress;
      const arc = Math.sin(newProgress * Math.PI) * 5;
      const y = startPos[1] + (targetPos[1] - startPos[1]) * newProgress + arc;

      meshRef.current.position.set(x, y, z);
      meshRef.current.rotation.x += delta * 10;
      meshRef.current.rotation.y += delta * 8;

      if (newProgress >= 1) {
        onComplete?.();
      }
    }
  });

  return (
    <mesh ref={meshRef} position={startPos}>
      <dodecahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial color="#8B7355" />
    </mesh>
  );
};

// Player throwing pebbles (using RealisticPilgrim)
const PlayerThrower = ({ position }) => {
  return (
    <group position={position}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={1.2}
        isMoving={false}
        lookDirection={Math.PI}
        skinTone="#C68642"
      />
      {/* Pebble in hand indicator */}
      <mesh position={[0.6, 1.5, 0.3]}>
        <dodecahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
    </group>
  );
};

// Crowd of pilgrims
const PilgrimCrowd = () => {
  const pilgrims = useMemo(() => {
    const items = [];
    for (let i = 0; i < 50; i++) {
      items.push({
        x: (Math.random() - 0.5) * 80,
        z: Math.random() * 10 + 20,
        scale: 0.7 + Math.random() * 0.3
      });
    }
    return items;
  }, []);

  return (
    <group>
      {pilgrims.map((p, i) => (
        <group key={i} position={[p.x, 0.5, p.z]} scale={p.scale}>
          <mesh position={[0, 0.9, 0]}>
            <capsuleGeometry args={[0.25, 0.7, 4, 8]} />
            <meshStandardMaterial color="#F5F5F5" />
          </mesh>
          <mesh position={[0, 1.6, 0]}>
            <sphereGeometry args={[0.18, 8, 8]} />
            <meshStandardMaterial color="#C4956A" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Camera controller
const CameraController = ({ activeJamrah }) => {
  const { camera } = useThree();

  const targetPositions = {
    sughra: new THREE.Vector3(-30, 8, 25),
    wusta: new THREE.Vector3(0, 8, 25),
    aqaba: new THREE.Vector3(30, 8, 25),
  };

  useFrame(() => {
    const target = targetPositions[activeJamrah] || targetPositions.aqaba;
    camera.position.lerp(target, 0.03);

    const lookAt = activeJamrah === 'sughra' ? -30 : activeJamrah === 'wusta' ? 0 : 30;
    camera.lookAt(lookAt, 4, 0);
  });

  return null;
};

// Main 3D scene
const JamaratScene = ({ activeJamrah, hits, onHit, flyingPebbles, onPebbleLand }) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[50, 100, 50]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 50, 100]}
        inclination={0.5}
        azimuth={0.25}
        rayleigh={0.5}
      />

      {/* Environment */}
      <JamaratBridge />
      <ThreeJamarat
        activeJamrah={activeJamrah}
        hits={hits}
        onHit={onHit}
      />
      <PilgrimCrowd />

      {/* Player */}
      <PlayerThrower position={[
        activeJamrah === 'sughra' ? -30 : activeJamrah === 'wusta' ? 0 : 30,
        0.5,
        15
      ]} />

      {/* Flying pebbles */}
      {flyingPebbles.map((pebble) => (
        <FlyingPebble
          key={pebble.id}
          startPos={pebble.start}
          targetPos={pebble.target}
          onComplete={() => onPebbleLand(pebble.id)}
        />
      ))}

      {/* Camera */}
      <CameraController activeJamrah={activeJamrah} />
    </>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const JamaratGameImmersive = ({ language = 'en', onComplete, onBack, isAllThree = false }) => {
  const [activeJamrah, setActiveJamrah] = useState(isAllThree ? 'sughra' : 'aqaba');
  const [hits, setHits] = useState({ sughra: 0, wusta: 0, aqaba: 0 });
  const [flyingPebbles, setFlyingPebbles] = useState([]);
  const [stage, setStage] = useState('throwing'); // throwing, takbir, complete
  const [showTakbir, setShowTakbir] = useState(false);
  const pebbleIdRef = useRef(0);
  const isRTL = language === 'ar' || language === 'ur';

  const maxHits = 7;
  const jamratOrder = isAllThree ? ['sughra', 'wusta', 'aqaba'] : ['aqaba'];

  const text = {
    title: {
      en: isAllThree ? 'Stone All Three Jamarat' : 'Stone Jamrat al-Aqaba',
      ur: isAllThree ? 'تینوں جمرات کو کنکریاں ماریں' : 'جمرہ عقبہ کو کنکریاں ماریں',
      ar: isAllThree ? 'رمي الجمرات الثلاث' : 'رمي جمرة العقبة'
    },
    instruction: {
      en: 'Tap the pillar or button to throw pebbles',
      ur: 'کنکری پھینکنے کے لیے ستون یا بٹن کو ٹیپ کریں',
      ar: 'اضغط على العمود أو الزر لرمي الحصى'
    },
    controls: {
      en: 'Tap the throw button or pillar to stone',
      ur: 'پتھر مارنے کے لیے بٹن یا ستون ٹیپ کریں',
      ar: 'اضغط على زر الرمي أو العمود'
    },
    takbir: { arabic: 'اللَّهُ أَكْبَرُ', en: 'Allahu Akbar', ur: 'اللہ اکبر' },
    pebbles: { en: 'pebbles', ur: 'کنکریاں', ar: 'حصى' },
    next: { en: 'Next pillar', ur: 'اگلا ستون', ar: 'العمود التالي' },
    complete: { en: 'Jamarat Complete!', ur: 'جمرات مکمل!', ar: 'اكتمل رمي الجمرات!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' }
  };

  const jamrahNames = {
    sughra: { en: 'Small (Sughra)', ur: 'چھوٹا (صغرٰی)', ar: 'الصغرى' },
    wusta: { en: 'Medium (Wusta)', ur: 'درمیانہ (وسطیٰ)', ar: 'الوسطى' },
    aqaba: { en: 'Large (Aqaba)', ur: 'بڑا (عقبہ)', ar: 'العقبة' },
  };

  const handleThrowPebble = useCallback(() => {
    if (hits[activeJamrah] >= maxHits) return;

    const pebbleId = pebbleIdRef.current++;
    const targetX = activeJamrah === 'sughra' ? -30 : activeJamrah === 'wusta' ? 0 : 30;

    setFlyingPebbles(prev => [...prev, {
      id: pebbleId,
      start: [targetX, 2, 15],
      target: [targetX + (Math.random() - 0.5) * 3, 1, (Math.random() - 0.5) * 3]
    }]);

    // Show takbir
    setShowTakbir(true);
    setTimeout(() => setShowTakbir(false), 500);
  }, [activeJamrah, hits]);

  const handlePebbleLand = useCallback((pebbleId) => {
    setFlyingPebbles(prev => prev.filter(p => p.id !== pebbleId));

    setHits(prev => {
      const newHits = { ...prev, [activeJamrah]: Math.min(prev[activeJamrah] + 1, maxHits) };

      // Check if current jamrah is complete
      if (newHits[activeJamrah] >= maxHits) {
        const currentIndex = jamratOrder.indexOf(activeJamrah);
        if (currentIndex < jamratOrder.length - 1) {
          // Move to next jamrah
          setTimeout(() => {
            setActiveJamrah(jamratOrder[currentIndex + 1]);
          }, 1000);
        } else {
          // All complete
          setTimeout(() => setStage('complete'), 1000);
        }
      }

      return newHits;
    });
  }, [activeJamrah, jamratOrder]);

  const totalHits = Object.values(hits).reduce((a, b) => a + b, 0);
  const totalRequired = jamratOrder.length * maxHits;

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
        camera={{ position: [30, 8, 25], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #B8A898 100%)' }}
      >
        <JamaratScene
          activeJamrah={activeJamrah}
          hits={hits}
          onHit={handleThrowPebble}
          flyingPebbles={flyingPebbles}
          onPebbleLand={handlePebbleLand}
        />
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
            🎯 {text.title[language]}
          </h1>
        </div>

        {/* Current Jamrah indicator */}
        {stage === 'throwing' && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-red-500/80 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-white font-bold" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {jamrahNames[activeJamrah][language]}: {hits[activeJamrah]} / {maxHits}
            </span>
          </div>
        )}

        {/* Progress bar */}
        {isAllThree && stage === 'throwing' && (
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-64">
            <div className="flex gap-2 justify-center mb-2">
              {jamratOrder.map((j) => (
                <div
                  key={j}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    hits[j] >= maxHits
                      ? 'bg-emerald-500 text-white'
                      : j === activeJamrah
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-white/30 text-white/70'
                  }`}
                >
                  {hits[j] >= maxHits ? '✓' : hits[j]}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Takbir popup */}
        {showTakbir && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="bg-emerald-500/90 backdrop-blur-sm rounded-2xl px-10 py-6 animate-ping">
              <p className="text-3xl text-white font-bold" style={{ fontFamily: "'Scheherazade New', serif" }}>
                {text.takbir.arabic}
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        {stage === 'throwing' && hits[activeJamrah] === 0 && (
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
            <p className="text-white" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.instruction[language]}
            </p>
            <p className="text-amber-400 text-sm mt-2">
              {text.takbir[language]} 🎯
            </p>
          </div>
        )}

        {/* Throw button (mobile) */}
        {stage === 'throwing' && hits[activeJamrah] < maxHits && (
          <button
            onClick={handleThrowPebble}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-full shadow-lg pointer-events-auto active:scale-95 transition-transform"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            🪨 {text.takbir[language]}
          </button>
        )}

        {/* Complete screen */}
        {stage === 'complete' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-auto">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl px-12 py-8 text-center shadow-2xl">
              <span className="text-6xl block mb-4">🎯</span>
              <p
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.complete[language]}
              </p>
              <p className="text-white/70 mb-4">
                {totalHits} 🪨 {text.pebbles[language]}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: jamratOrder.length }).map((_, i) => (
                  <span key={i} className="text-2xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                ))}
              </div>
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-white text-red-600 font-bold rounded-full"
              >
                {language === 'ar' ? 'التالي' : language === 'ur' ? 'اگلا' : 'Next'} →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JamaratGameImmersive;
