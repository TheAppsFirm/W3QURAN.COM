/**
 * KaabaScene.jsx
 * 3D Kaaba scene with Tawaf animation
 * The pilgrim walks around the Kaaba counter-clockwise
 */

import React, { useRef, memo, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Colors
const KAABA_BLACK = '#1a1a1a';
const GOLD = '#D4AF37';
const GOLD_DARK = '#B8941E';
const MARBLE = '#F5F0E8';
const SKIN = '#F5C67A';
const WHITE_CLOTH = '#F8FAFC';
const CLOTH_SHADOW = '#E2E8F0';

// ============================================================
// THE KAABA - Sacred cube structure
// ============================================================
const Kaaba = memo(() => (
  <group position={[0, 0, 0]}>
    {/* Main black cube */}
    <mesh position={[0, 0.6, 0]}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color={KAABA_BLACK} roughness={0.8} />
    </mesh>

    {/* Kiswah (black cloth covering) golden band - horizontal */}
    <mesh position={[0, 0.9, 0.61]}>
      <boxGeometry args={[1.22, 0.12, 0.02]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
    </mesh>
    <mesh position={[0, 0.9, -0.61]}>
      <boxGeometry args={[1.22, 0.12, 0.02]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
    </mesh>
    <mesh position={[0.61, 0.9, 0]}>
      <boxGeometry args={[0.02, 0.12, 1.22]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
    </mesh>
    <mesh position={[-0.61, 0.9, 0]}>
      <boxGeometry args={[0.02, 0.12, 1.22]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
    </mesh>

    {/* Decorative gold patterns on the cloth */}
    {[-0.3, 0, 0.3].map((x, i) => (
      <mesh key={i} position={[x, 0.55, 0.612]}>
        <planeGeometry args={[0.15, 0.4]} />
        <meshStandardMaterial color={GOLD_DARK} roughness={0.4} metalness={0.5} />
      </mesh>
    ))}

    {/* Hajar al-Aswad (Black Stone) - corner marker */}
    <mesh position={[0.6, 0.5, 0.6]} rotation={[0, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
      <meshStandardMaterial color="#2a2a2a" roughness={0.5} />
    </mesh>
    <mesh position={[0.6, 0.5, 0.6]} rotation={[0, Math.PI / 4, 0]}>
      <torusGeometry args={[0.1, 0.02, 8, 16]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
    </mesh>

    {/* Door of Kaaba (Bab al-Kaaba) */}
    <group position={[0, 0.7, 0.615]}>
      <mesh>
        <boxGeometry args={[0.35, 0.5, 0.02]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Door frame */}
      <mesh position={[0, 0, 0.01]}>
        <boxGeometry args={[0.32, 0.47, 0.01]} />
        <meshStandardMaterial color={GOLD_DARK} roughness={0.4} metalness={0.4} />
      </mesh>
    </group>

    {/* Maqam Ibrahim - golden station */}
    <group position={[0, -0.05, 1.2]}>
      <mesh>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 8]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.08, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} transparent opacity={0.8} />
      </mesh>
    </group>
  </group>
));

// ============================================================
// MATAF (Tawaf area) - circular marble floor
// ============================================================
const Mataf = memo(() => (
  <group>
    {/* Main circular floor */}
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[3, 64]} />
      <meshStandardMaterial color={MARBLE} roughness={0.3} />
    </mesh>

    {/* Concentric guide rings */}
    {[1.5, 2.0, 2.5].map((r, i) => (
      <mesh key={i} position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[r - 0.02, r + 0.02, 64]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.4} />
      </mesh>
    ))}

    {/* Outer edge */}
    <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[2.9, 3.0, 64]} />
      <meshStandardMaterial color="#D4C8B8" roughness={0.5} />
    </mesh>
  </group>
));

// ============================================================
// PILGRIM IN IHRAM - white clothed figure
// ============================================================
const PilgrimAvatar = memo(({ position, rotation }) => (
  <group position={position} rotation={rotation}>
    {/* Body in Ihram (two white cloths) */}
    <mesh position={[0, 0.25, 0]}>
      <cylinderGeometry args={[0.08, 0.1, 0.35, 8]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>

    {/* Lower Ihram (izar) */}
    <mesh position={[0, -0.05, 0]}>
      <cylinderGeometry args={[0.1, 0.12, 0.4, 8]} />
      <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
    </mesh>

    {/* Head */}
    <mesh position={[0, 0.55, 0]}>
      <sphereGeometry args={[0.1, 12, 12]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>

    {/* Arms raised in dua while walking */}
    <mesh position={[-0.12, 0.35, 0.05]} rotation={[0.3, 0, 0.5]}>
      <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    <mesh position={[0.12, 0.35, 0.05]} rotation={[0.3, 0, -0.5]}>
      <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>

    {/* Feet */}
    <mesh position={[-0.04, -0.28, 0.02]}>
      <boxGeometry args={[0.04, 0.02, 0.08]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
    <mesh position={[0.04, -0.28, 0.02]}>
      <boxGeometry args={[0.04, 0.02, 0.08]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
  </group>
));

// ============================================================
// ANIMATED PILGRIM doing Tawaf
// ============================================================
const TawafPilgrim = ({ radius = 1.8, speed = 0.3, startAngle = 0, yOffset = 0 }) => {
  const groupRef = useRef();
  const initialAngle = useMemo(() => startAngle, [startAngle]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Counter-clockwise rotation (traditional Tawaf direction)
    const angle = initialAngle - t * speed;

    // Position on circle
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    groupRef.current.position.x = x;
    groupRef.current.position.z = z;
    groupRef.current.position.y = yOffset + Math.sin(t * 4) * 0.01; // Walking bounce

    // Face tangent to circle (direction of movement)
    groupRef.current.rotation.y = angle + Math.PI / 2;
  });

  return (
    <group ref={groupRef}>
      <PilgrimAvatar position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </group>
  );
};

// ============================================================
// OTHER PILGRIMS (crowd effect)
// ============================================================
const PilgrimCrowd = memo(() => {
  const pilgrims = useMemo(() => {
    const arr = [];
    // Inner ring
    for (let i = 0; i < 6; i++) {
      arr.push({ radius: 1.3, angle: (i / 6) * Math.PI * 2, speed: 0.25 + Math.random() * 0.1 });
    }
    // Middle ring
    for (let i = 0; i < 10; i++) {
      arr.push({ radius: 1.8, angle: (i / 10) * Math.PI * 2, speed: 0.2 + Math.random() * 0.1 });
    }
    // Outer ring
    for (let i = 0; i < 12; i++) {
      arr.push({ radius: 2.3, angle: (i / 12) * Math.PI * 2, speed: 0.15 + Math.random() * 0.1 });
    }
    return arr;
  }, []);

  return (
    <>
      {pilgrims.map((p, i) => (
        <TawafPilgrim
          key={i}
          radius={p.radius}
          startAngle={p.angle}
          speed={p.speed}
        />
      ))}
    </>
  );
});

// ============================================================
// MAIN PILGRIM (larger, in foreground)
// ============================================================
const MainPilgrim = () => {
  const groupRef = useRef();
  const armLRef = useRef();
  const armRRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Tawaf around Kaaba
    const radius = 1.5;
    const angle = -t * 0.4; // Slow, steady pace

    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    groupRef.current.position.x = x;
    groupRef.current.position.z = z;
    groupRef.current.position.y = Math.sin(t * 3) * 0.015;
    groupRef.current.rotation.y = angle + Math.PI / 2;

    // Arm animation (dua gesture)
    if (armLRef.current && armRRef.current) {
      const duaPhase = Math.sin(t * 0.5);
      armLRef.current.rotation.x = 0.3 + duaPhase * 0.1;
      armRRef.current.rotation.x = 0.3 + duaPhase * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.5}>
      {/* Body */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.35, 12]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.4, 12]} />
        <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
      </mesh>

      {/* Head with more detail */}
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
      </group>

      {/* Arms */}
      <group ref={armLRef} position={[-0.12, 0.35, 0.05]} rotation={[0.3, 0, 0.5]}>
        <mesh>
          <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>
      <group ref={armRRef} position={[0.12, 0.35, 0.05]} rotation={[0.3, 0, -0.5]}>
        <mesh>
          <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>

      {/* Feet */}
      <mesh position={[-0.04, -0.28, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
      <mesh position={[0.04, -0.28, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
    </group>
  );
};

// ============================================================
// AMBIENT ATMOSPHERE
// ============================================================
const Atmosphere = memo(() => (
  <>
    {/* Sky dome hint */}
    <mesh position={[0, 5, 0]}>
      <sphereGeometry args={[8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshBasicMaterial color="#1a365d" side={THREE.BackSide} />
    </mesh>

    {/* Stars */}
    {Array.from({ length: 30 }).map((_, i) => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.4;
      const r = 7;
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
    <mesh position={[3, 4, -3]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color="#FEF9C3" />
    </mesh>
  </>
));

// ============================================================
// SCENE LIGHTING
// ============================================================
const SceneLighting = memo(() => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[3, 5, 2]} intensity={0.8} color="#FFF8E1" />
    <pointLight position={[0, 3, 0]} intensity={0.5} color="#FDE68A" distance={8} />
    <pointLight position={[0, 1, 2]} intensity={0.3} color="#FFF5E0" distance={5} />
  </>
));

// ============================================================
// MAIN SCENE EXPORT
// ============================================================
const KaabaScene = memo(({ variant = 'tawaf', isActive = true }) => (
  <>
    <SceneLighting />
    <Atmosphere />
    <Mataf />
    <Kaaba />
    <MainPilgrim />
    <PilgrimCrowd />
  </>
));

export default KaabaScene;
