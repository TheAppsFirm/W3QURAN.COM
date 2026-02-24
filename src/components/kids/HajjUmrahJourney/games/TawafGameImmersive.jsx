/**
 * TawafGameImmersive.jsx
 * Fully immersive 3D Tawaf experience
 *
 * Features:
 * - Realistic Kaaba and Mataf area
 * - Detailed mosque architecture
 * - NPC pilgrims walking around
 * - Day/night lighting
 * - Atmospheric effects
 * - Smooth camera following player
 */

import React, { useRef, useState, useCallback, useEffect, memo, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Sky,
  Stars,
  Environment,
  useGLTF,
  Html,
  Float,
  Sparkles,
  Cloud,
  PositionalAudio,
  PerspectiveCamera
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
import { EnhancedLighting, AtmosphericFog, DustParticles, GoldenSparkles, AtmosphericClouds, EnhancedSky, RealisticPilgrim } from './EnhancedGraphics';

// ============================================================
// CONSTANTS
// ============================================================
const KAABA_BLACK = '#0a0a0a';
const GOLD = '#D4AF37';
const GOLD_BRIGHT = '#FFD700';
const MARBLE_WHITE = '#F8F6F0';
const MARBLE_CREAM = '#EDE8DC';
const MARBLE_GRAY = '#D8D4CC';
const SKIN_TONES = ['#F5D0C5', '#D4A574', '#C68642', '#8D5524'];
const WHITE_IHRAM = '#FAFAFA';

// ============================================================
// DETAILED KAABA
// ============================================================
const DetailedKaaba = memo(() => {
  const kaabaRef = useRef();

  return (
    <group ref={kaabaRef} position={[0, 0, 0]}>
      {/* Base platform */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color={MARBLE_GRAY} roughness={0.4} />
      </mesh>

      {/* Main Kaaba structure */}
      <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.6, 1.5]} />
        <meshStandardMaterial
          color={KAABA_BLACK}
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Kiswah (cloth covering) - layered for depth */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[1.52, 1.62, 1.52]} />
        <meshStandardMaterial
          color="#050505"
          roughness={0.9}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Golden band (Hizam) - all 4 sides */}
      {[
        { pos: [0, 1.25, 0.77], rot: [0, 0, 0], size: [1.54, 0.18, 0.02] },
        { pos: [0, 1.25, -0.77], rot: [0, 0, 0], size: [1.54, 0.18, 0.02] },
        { pos: [0.77, 1.25, 0], rot: [0, Math.PI/2, 0], size: [1.54, 0.18, 0.02] },
        { pos: [-0.77, 1.25, 0], rot: [0, Math.PI/2, 0], size: [1.54, 0.18, 0.02] },
      ].map((band, i) => (
        <mesh key={i} position={band.pos} rotation={band.rot} castShadow>
          <boxGeometry args={band.size} />
          <meshStandardMaterial
            color={GOLD}
            roughness={0.2}
            metalness={0.8}
            emissive={GOLD}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}

      {/* Decorative golden panels with calligraphy pattern */}
      {[0, Math.PI/2, Math.PI, Math.PI * 1.5].map((rot, i) => (
        <group key={i} rotation={[0, rot, 0]}>
          {/* Main panel */}
          <mesh position={[0, 0.7, 0.76]} castShadow>
            <boxGeometry args={[0.6, 0.5, 0.02]} />
            <meshStandardMaterial
              color={GOLD_BRIGHT}
              roughness={0.25}
              metalness={0.75}
              emissive={GOLD}
              emissiveIntensity={0.05}
            />
          </mesh>
          {/* Inner decorative frame */}
          <mesh position={[0, 0.7, 0.77]}>
            <boxGeometry args={[0.5, 0.4, 0.01]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
          </mesh>
        </group>
      ))}

      {/* Door (Bab al-Kaaba) */}
      <group position={[0, 0.95, 0.76]}>
        {/* Door frame */}
        <mesh castShadow>
          <boxGeometry args={[0.55, 0.85, 0.04]} />
          <meshStandardMaterial
            color={GOLD}
            roughness={0.2}
            metalness={0.85}
            emissive={GOLD}
            emissiveIntensity={0.15}
          />
        </mesh>
        {/* Door panels */}
        <mesh position={[-0.12, 0, 0.02]}>
          <boxGeometry args={[0.2, 0.75, 0.02]} />
          <meshStandardMaterial color={GOLD_BRIGHT} roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0.12, 0, 0.02]}>
          <boxGeometry args={[0.2, 0.75, 0.02]} />
          <meshStandardMaterial color={GOLD_BRIGHT} roughness={0.3} metalness={0.7} />
        </mesh>
      </group>

      {/* Hajar al-Aswad (Black Stone) corner */}
      <group position={[0.82, 0.6, 0.82]} rotation={[0, Math.PI/4, 0]}>
        {/* Silver frame */}
        <mesh castShadow>
          <cylinderGeometry args={[0.14, 0.14, 0.22, 16]} />
          <meshStandardMaterial
            color="#C0C0C0"
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>
        {/* The stone itself */}
        <mesh position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#1a0505"
            roughness={0.5}
            metalness={0.2}
          />
        </mesh>
        {/* Glow */}
        <pointLight position={[0, 0, 0.15]} intensity={0.5} color="#FFE4B5" distance={1.5} />
      </group>

      {/* Multazam area marking */}
      <mesh position={[0.3, 0.5, 0.76]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.3, 0.6]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.95} />
      </mesh>

      {/* Roof covering (Ghilaf) */}
      <mesh position={[0, 1.68, 0]}>
        <boxGeometry args={[1.56, 0.05, 1.56]} />
        <meshStandardMaterial color={KAABA_BLACK} roughness={0.9} />
      </mesh>

      {/* Ambient light from Kaaba */}
      <pointLight position={[0, 2.5, 0]} intensity={0.8} color="#FFF8E0" distance={8} />
    </group>
  );
});

// ============================================================
// MAQAM IBRAHIM
// ============================================================
const MaqamIbrahim = memo(() => (
  <group position={[2, 0, 0]}>
    {/* Base */}
    <mesh position={[0, 0.1, 0]} castShadow>
      <cylinderGeometry args={[0.4, 0.45, 0.2, 16]} />
      <meshStandardMaterial color={MARBLE_CREAM} roughness={0.3} />
    </mesh>
    {/* Glass/crystal dome */}
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial
        color={GOLD}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.7}
      />
    </mesh>
    {/* Inner stand */}
    <mesh position={[0, 0.25, 0]}>
      <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />
      <meshStandardMaterial color={GOLD_BRIGHT} roughness={0.2} metalness={0.8} />
    </mesh>
    {/* The footprint stone */}
    <mesh position={[0, 0.35, 0]}>
      <boxGeometry args={[0.15, 0.05, 0.1]} />
      <meshStandardMaterial color="#8B7355" roughness={0.6} />
    </mesh>
    <pointLight position={[0, 0.6, 0]} intensity={0.3} color={GOLD} distance={2} />
  </group>
));

// ============================================================
// MATAF FLOOR (Tawaf area)
// ============================================================
const MatafFloor = memo(() => {
  return (
    <group>
      {/* Main circular floor */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial
          color={MARBLE_WHITE}
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>

      {/* Concentric guide circles */}
      {[2.5, 3.5, 4.5, 5.5, 6.5, 7.5].map((r, i) => (
        <mesh key={i} position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r - 0.03, r + 0.03, 64]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? MARBLE_CREAM : MARBLE_GRAY}
            roughness={0.35}
          />
        </mesh>
      ))}

      {/* Starting line (green - Hajar al-Aswad direction) */}
      <mesh position={[2.5, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.2, 4]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#10B981"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Radial floor patterns */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 5, -0.005, Math.sin(angle) * 5]}
            rotation={[-Math.PI / 2, 0, angle]}
          >
            <planeGeometry args={[0.02, 3]} />
            <meshStandardMaterial color={MARBLE_GRAY} />
          </mesh>
        );
      })}
    </group>
  );
});

// ============================================================
// MOSQUE PILLARS (surrounding the Mataf)
// ============================================================
const MosquePillars = memo(() => {
  const pillars = useMemo(() => {
    const result = [];
    const count = 24;
    const radius = 9;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      result.push({
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        height: 4 + Math.random() * 0.5,
      });
    }
    return result;
  }, []);

  return (
    <group>
      {pillars.map((pillar, i) => (
        <group key={i} position={[pillar.x, 0, pillar.z]}>
          {/* Pillar base */}
          <mesh position={[0, 0.15, 0]} castShadow>
            <cylinderGeometry args={[0.25, 0.3, 0.3, 12]} />
            <meshStandardMaterial color={MARBLE_CREAM} roughness={0.4} />
          </mesh>
          {/* Pillar shaft */}
          <mesh position={[0, pillar.height / 2 + 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.22, pillar.height, 12]} />
            <meshStandardMaterial color={MARBLE_WHITE} roughness={0.35} />
          </mesh>
          {/* Pillar capital */}
          <mesh position={[0, pillar.height + 0.4, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.2, 0.25, 12]} />
            <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
          </mesh>
          {/* Arch hint */}
          <mesh position={[0, pillar.height + 0.6, 0]}>
            <boxGeometry args={[0.5, 0.15, 0.5]} />
            <meshStandardMaterial color={MARBLE_CREAM} roughness={0.4} />
          </mesh>
        </group>
      ))}

      {/* Lights on pillars */}
      {pillars.filter((_, i) => i % 3 === 0).map((pillar, i) => (
        <pointLight
          key={i}
          position={[pillar.x, 3, pillar.z]}
          intensity={0.15}
          color="#FFF5E0"
          distance={5}
        />
      ))}
    </group>
  );
});

// ============================================================
// MINARETS
// ============================================================
const Minarets = memo(() => {
  const positions = [
    [12, 0, 12],
    [-12, 0, 12],
    [12, 0, -12],
    [-12, 0, -12],
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Base */}
          <mesh position={[0, 0.5, 0]} castShadow>
            <cylinderGeometry args={[0.6, 0.8, 1, 8]} />
            <meshStandardMaterial color={MARBLE_CREAM} roughness={0.4} />
          </mesh>
          {/* Main tower */}
          <mesh position={[0, 4, 0]} castShadow>
            <cylinderGeometry args={[0.4, 0.5, 7, 8]} />
            <meshStandardMaterial color={MARBLE_WHITE} roughness={0.35} />
          </mesh>
          {/* Balcony */}
          <mesh position={[0, 6.5, 0]}>
            <cylinderGeometry args={[0.65, 0.55, 0.4, 12]} />
            <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
          </mesh>
          {/* Upper tower */}
          <mesh position={[0, 8, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.4, 2.5, 8]} />
            <meshStandardMaterial color={MARBLE_WHITE} roughness={0.35} />
          </mesh>
          {/* Dome */}
          <mesh position={[0, 9.5, 0]}>
            <sphereGeometry args={[0.35, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color={GOLD_BRIGHT} roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Crescent */}
          <mesh position={[0, 10, 0]}>
            <torusGeometry args={[0.12, 0.025, 8, 16, Math.PI * 1.5]} />
            <meshStandardMaterial color={GOLD_BRIGHT} roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Light */}
          <pointLight position={[0, 7, 0]} intensity={0.3} color="#FFF5E0" distance={8} />
        </group>
      ))}
    </>
  );
});

// ============================================================
// PLAYER PILGRIM (Using RealisticPilgrim)
// ============================================================
const PlayerPilgrim = memo(({ angle, isMoving }) => {
  const groupRef = useRef();

  const radius = 4;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.position.x = x;
    groupRef.current.position.z = z;
  });

  return (
    <group ref={groupRef} position={[x, 0, z]}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={1.5}
        isMoving={isMoving}
        lookDirection={angle - Math.PI / 2}
      />
      {/* Player indicator light */}
      <pointLight position={[0, 2, 1]} intensity={1} color="#FFFFFF" distance={5} />
      {isMoving && (
        <pointLight position={[0, 1.2, 0.5]} intensity={0.5} color="#10B981" distance={2.5} />
      )}
    </group>
  );
});

// ============================================================
// NPC PILGRIMS
// ============================================================
const NPCPilgrims = memo(() => {
  const pilgrims = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      radius: 2.5 + Math.random() * 4.5,
      speed: 0.002 + Math.random() * 0.004,
      startAngle: Math.random() * Math.PI * 2,
      scale: 0.7 + Math.random() * 0.3,
      skinTone: SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)],
    }));
  }, []);

  return (
    <>
      {pilgrims.map((pilgrim) => (
        <NPCPilgrim key={pilgrim.id} {...pilgrim} />
      ))}
    </>
  );
});

const NPCPilgrim = memo(({ radius, speed, startAngle, scale, skinTone }) => {
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
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.6, 8]} />
        <meshStandardMaterial color={WHITE_IHRAM} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.07, 0.1, 0.25, 8]} />
        <meshStandardMaterial color={WHITE_IHRAM} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color={skinTone} roughness={0.7} />
      </mesh>
    </group>
  );
});

// ============================================================
// ATMOSPHERIC EFFECTS (Enhanced)
// ============================================================
const AtmosphericEffects = memo(() => {
  return (
    <>
      {/* Enhanced dust particles */}
      <DustParticles count={200} area={25} color="#F5E6D3" />

      {/* Sacred golden light particles near Kaaba */}
      <GoldenSparkles position={[0, 2, 0]} active={true} />

      {/* Additional golden aura around Kaaba */}
      <Sparkles
        count={80}
        scale={8}
        size={2}
        speed={0.15}
        color={GOLD}
        opacity={0.4}
        position={[0, 1.5, 0]}
      />

      {/* Subtle white particles for spiritual atmosphere */}
      <Sparkles
        count={100}
        scale={15}
        size={1}
        speed={0.1}
        color="#FFFFFF"
        opacity={0.15}
        position={[0, 3, 0]}
      />

      {/* Enhanced atmospheric clouds */}
      <AtmosphericClouds count={6} />

      {/* Atmospheric fog for depth and mood */}
      <AtmosphericFog color="#1a1a2e" near={20} far={100} />
    </>
  );
});

// ============================================================
// LIGHTING SETUP (Enhanced)
// ============================================================
const SceneLighting = memo(() => {
  return (
    <>
      {/* Enhanced multi-directional lighting system */}
      <EnhancedLighting
        sunPosition={[20, 30, 10]}
        ambientIntensity={0.5}
        shadowQuality="high"
        warmth={0.1}
      />

      {/* Additional warm fill light */}
      <directionalLight position={[-10, 10, -10]} intensity={0.35} color="#FFE4C4" />

      {/* Kaaba spotlight with enhanced glow */}
      <spotLight
        position={[0, 15, 0]}
        angle={0.5}
        penumbra={0.7}
        intensity={1.2}
        color="#FFF5E0"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Sacred golden rim light around Kaaba */}
      <pointLight position={[0, 3, 0]} intensity={0.6} color={GOLD} distance={10} />

      {/* Ground bounce for realism */}
      <pointLight position={[0, 0.2, 0]} intensity={0.3} color="#F5E6D3" distance={15} />
    </>
  );
});

// ============================================================
// SKY (Enhanced)
// ============================================================
const SceneSky = memo(() => {
  return (
    <>
      {/* Enhanced sky with twilight atmosphere */}
      <EnhancedSky timeOfDay="sunset" showStars={true} />

      {/* Additional stars for spiritual night sky effect */}
      <Stars
        radius={200}
        depth={80}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.2}
      />
    </>
  );
});

// ============================================================
// CAMERA CONTROLLER
// ============================================================
const CameraController = ({ playerAngle }) => {
  const { camera } = useThree();
  const radius = 4;

  useFrame(() => {
    // Position camera behind and above the player
    const targetX = Math.cos(playerAngle) * (radius + 3);
    const targetZ = Math.sin(playerAngle) * (radius + 3);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 3, 0.05);

    // Look at the Kaaba
    camera.lookAt(0, 1, 0);
  });

  return null;
};

// ============================================================
// MAIN SCENE
// ============================================================
const TawafScene = ({ angle, isMoving, rounds }) => {
  return (
    <Suspense fallback={null}>
      <SceneLighting />
      <SceneSky />
      <AtmosphericEffects />

      <DetailedKaaba />
      <MaqamIbrahim />
      <MatafFloor />
      <MosquePillars />
      <Minarets />

      <PlayerPilgrim angle={angle} isMoving={isMoving} />
      <NPCPilgrims />

      <CameraController playerAngle={angle} />
    </Suspense>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const TawafGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [angle, setAngle] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const intervalRef = useRef(null);
  const lastCrossRef = useRef(0);

  const isRTL = language === 'ar' || language === 'ur';

  // Duas for each round
  const roundDuas = useMemo(() => [
    { arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ', en: 'Glory be to Allah, praise be to Allah', ur: 'اللہ پاک ہے، تمام تعریف اللہ کے لیے' },
    { arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً', en: 'Our Lord, give us good in this world and the Hereafter', ur: 'اے رب! ہمیں دنیا اور آخرت میں بھلائی دے' },
    { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ', en: 'O Allah, I ask You for pardon and well-being', ur: 'اے اللہ! میں تجھ سے معافی اور عافیت مانگتا ہوں' },
    { arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ', en: 'My Lord, forgive and have mercy', ur: 'اے رب! معاف فرما اور رحم کر' },
    { arabic: 'اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا', en: 'O Allah, make it an accepted Hajj', ur: 'اے اللہ! اسے مقبول حج بنا دے' },
    { arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ', en: 'There is no god but Allah alone', ur: 'اللہ کے سوا کوئی معبود نہیں' },
    { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ', en: 'O Allah, I ask You for Paradise', ur: 'اے اللہ! میں تجھ سے جنت مانگتا ہوں' },
  ], []);

  const text = {
    title: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' },
    round: { en: 'Round', ur: 'چکر', ar: 'شوط' },
    hold: { en: 'Hold button or tap to walk around Kaaba', ur: 'کعبہ کے گرد چلنے کے لیے بٹن دبائیں یا ٹیپ کریں', ar: 'اضغط على الزر أو انقر للطواف حول الكعبة' },
    controls: { en: 'Use Walk button, keyboard (W/↑/Space), or click anywhere', ur: 'واک بٹن، کی بورڈ (W/↑/Space) یا کہیں بھی کلک کریں', ar: 'استخدم زر المشي أو لوحة المفاتيح (W/↑/Space) أو انقر في أي مكان' },
    complete: { en: 'Tawaf Complete!', ur: 'طواف مکمل!', ar: 'اكتمل الطواف!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    next: { en: 'Continue', ur: 'جاری رکھیں', ar: 'استمر' },
    walkBtn: { en: 'Walk', ur: 'چلیں', ar: 'امشِ' },
  };

  // Initialize audio
  useEffect(() => {
    initAudio();
    startAmbientSound();
    return () => stopAllSounds();
  }, []);

  // Walking sound
  useEffect(() => {
    if (isMoving && !gameComplete) {
      startWalkingSound();
    } else {
      stopWalkingSound();
    }
  }, [isMoving, gameComplete]);

  // Move player
  const movePlayer = useCallback(() => {
    setAngle((prev) => {
      const newAngle = prev - 0.02;

      const prevNorm = ((lastCrossRef.current % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const newNorm = ((newAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

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

  // Pointer handlers
  const handlePointerDown = useCallback(() => {
    if (gameComplete) return;
    setIsMoving(true);
    intervalRef.current = setInterval(movePlayer, 35);
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
        if (e.code === 'Enter' || e.code === 'Space') onComplete?.();
        return;
      }
      if (['ArrowUp', 'ArrowRight', 'ArrowLeft', 'KeyW', 'KeyD', 'KeyA', 'Space'].includes(e.code)) {
        e.preventDefault();
        if (!isMoving) {
          setIsMoving(true);
          intervalRef.current = setInterval(movePlayer, 35);
        }
      }
      if (e.code === 'Escape') onBack?.();
    };

    const handleKeyUp = (e) => {
      if (['ArrowUp', 'ArrowRight', 'ArrowLeft', 'KeyW', 'KeyD', 'KeyA', 'Space'].includes(e.code)) {
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
      className="fixed inset-0 z-[10000]"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)'
      }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-20 bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={onBack} className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white">
          ←
        </button>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🕋</span>
          <h1 className="text-xl font-bold text-white drop-shadow-lg" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            {text.title[language]}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {!gameComplete && (
            <button
              onClick={() => { stopAllSounds(); playGameComplete(); setGameComplete(true); }}
              className="px-3 py-1 rounded-full bg-white/20 text-white/80 text-sm"
            >
              {text.skip[language]} ⏭️
            </button>
          )}
          <div className="px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full">
            <span className="text-white font-bold text-lg">{Math.min(rounds, 7)}/7</span>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full transition-all ${i < rounds ? 'bg-emerald-400' : 'bg-white/30'}`} />
        ))}
      </div>

      {/* Dua display */}
      {showDua && rounds > 0 && rounds <= 7 && (
        <div className="absolute top-24 left-4 right-4 z-30 flex justify-center">
          <div className="max-w-md p-4 bg-emerald-900/95 backdrop-blur-md rounded-2xl border border-emerald-500/30">
            <div className="text-emerald-300 text-xs mb-2">{text.round[language]} {rounds}</div>
            <p className="text-white text-lg text-center mb-2 leading-relaxed" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
              {roundDuas[rounds - 1]?.arabic}
            </p>
            <p className="text-white/80 text-sm text-center" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {roundDuas[rounds - 1]?.[language] || roundDuas[rounds - 1]?.en}
            </p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <div
        className="w-full h-full cursor-pointer"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        <Canvas
          shadows
          camera={{ position: [6, 4, 6], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true }}
          style={{ background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%)' }}
        >
          <TawafScene angle={angle} isMoving={isMoving} rounds={rounds} />
        </Canvas>
      </div>

      {/* Walk Button - Works on both desktop (mouse) and mobile (touch) */}
      {!gameComplete && (
        <button
          className="fixed bottom-28 right-6 z-[10010] w-20 h-20 bg-emerald-500/90 backdrop-blur-md rounded-full text-white font-bold shadow-lg active:scale-95 transition-all flex flex-col items-center justify-center border-4 border-white/30 hover:bg-emerald-600 cursor-pointer select-none"
          onMouseDown={handlePointerDown}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchEnd={handlePointerUp}
        >
          <span className="text-2xl">🚶</span>
          <span className="text-xs mt-1" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>{text.walkBtn[language]}</span>
        </button>
      )}

      {/* Bottom UI */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        {!gameComplete ? (
          <div className="text-center">
            <p className="text-white/90 text-lg mb-2" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.hold[language]}
            </p>
            <p className="text-white/60 text-sm" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.controls[language]}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.complete[language]}
            </h2>
            <button
              onClick={onComplete}
              className="px-8 py-3 bg-emerald-500 text-white font-bold text-lg rounded-full hover:bg-emerald-600 transition-all"
            >
              {text.next[language]} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TawafGameImmersive;
