/**
 * IhramScene.jsx
 * 3D scene showing pilgrim preparing for Ihram at Miqat
 * The pilgrim changes into Ihram garments and makes intention
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Colors
const SKIN = '#F5C67A';
const WHITE_CLOTH = '#F8FAFC';
const CLOTH_SHADOW = '#E2E8F0';
const NORMAL_CLOTH = '#64748B';
const SAND = '#D4B896';
const PALM_TRUNK = '#8B5A2B';
const PALM_GREEN = '#228B22';

// ============================================================
// MIQAT STATION (entry point for Ihram)
// ============================================================
const MiqatStation = memo(() => (
  <group position={[0, 0, -2]}>
    {/* Simple structure */}
    <mesh position={[0, 0.8, 0]}>
      <boxGeometry args={[2, 1.6, 0.3]} />
      <meshStandardMaterial color="#E8E0D0" roughness={0.6} />
    </mesh>

    {/* Arch entrance */}
    <mesh position={[0, 1.2, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.5, 0.05, 8, 16, Math.PI]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.4} metalness={0.3} />
    </mesh>

    {/* Sign */}
    <mesh position={[0, 1.8, 0.2]}>
      <boxGeometry args={[1.2, 0.3, 0.05]} />
      <meshStandardMaterial color="#10B981" roughness={0.5} />
    </mesh>

    {/* Crescent on top */}
    <mesh position={[0, 2.1, 0.2]} rotation={[0, 0, 0.1]}>
      <torusGeometry args={[0.12, 0.02, 8, 16, Math.PI * 1.3]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
  </group>
));

// ============================================================
// DESERT ENVIRONMENT
// ============================================================
const DesertEnvironment = memo(() => (
  <group>
    {/* Sandy ground */}
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[12, 12]} />
      <meshStandardMaterial color={SAND} roughness={0.9} />
    </mesh>

    {/* Sand dunes in background */}
    {[-4, -2, 2, 4].map((x, i) => (
      <mesh key={i} position={[x, 0.2, -4 - i * 0.5]}>
        <sphereGeometry args={[1.5 + Math.random(), 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#C4A882" roughness={0.9} />
      </mesh>
    ))}

    {/* Palm trees */}
    <PalmTree position={[-2.5, 0, -1]} />
    <PalmTree position={[2.5, 0, -1.5]} scale={0.9} />
    <PalmTree position={[-3, 0, 1]} scale={0.8} />
  </group>
));

// ============================================================
// PALM TREE
// ============================================================
const PalmTree = memo(({ position, scale = 1 }) => (
  <group position={position} scale={scale}>
    {/* Trunk */}
    <mesh position={[0, 0.8, 0]}>
      <cylinderGeometry args={[0.08, 0.12, 1.6, 8]} />
      <meshStandardMaterial color={PALM_TRUNK} roughness={0.8} />
    </mesh>

    {/* Fronds */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <group key={i} position={[0, 1.6, 0]} rotation={[0.4, (i / 6) * Math.PI * 2, 0]}>
        <mesh position={[0, 0, 0.4]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.15, 0.02, 0.8]} />
          <meshStandardMaterial color={PALM_GREEN} roughness={0.7} />
        </mesh>
      </group>
    ))}
  </group>
));

// ============================================================
// IHRAM GARMENTS (on stand/display)
// ============================================================
const IhramGarments = memo(() => (
  <group position={[1.5, 0, 0]}>
    {/* Stand */}
    <mesh position={[0, 0.5, 0]}>
      <cylinderGeometry args={[0.05, 0.08, 1, 8]} />
      <meshStandardMaterial color="#8B6914" roughness={0.6} />
    </mesh>
    <mesh position={[0, 1, 0]}>
      <boxGeometry args={[0.4, 0.02, 0.1]} />
      <meshStandardMaterial color="#8B6914" roughness={0.6} />
    </mesh>

    {/* Upper garment (rida) */}
    <mesh position={[0, 0.85, 0]} rotation={[0.2, 0, 0]}>
      <boxGeometry args={[0.35, 0.4, 0.02]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>

    {/* Lower garment (izar) */}
    <mesh position={[0, 0.45, 0.05]}>
      <boxGeometry args={[0.3, 0.5, 0.02]} />
      <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
    </mesh>
  </group>
));

// ============================================================
// ANIMATED PILGRIM - changing into Ihram
// ============================================================
const AnimatedPilgrim = () => {
  const groupRef = useRef();
  const bodyRef = useRef();
  const headRef = useRef();
  const normalClothRef = useRef();
  const ihramClothRef = useRef();
  const armsRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const cycle = 10;
    const phase = (t % cycle) / cycle;

    // Animation phases:
    // 0-0.2: Standing in normal clothes
    // 0.2-0.4: Raising hands for niyyah
    // 0.4-0.6: "Changing" (fade transition)
    // 0.6-0.8: In Ihram, hands lowered
    // 0.8-1.0: Making dua in Ihram

    if (phase < 0.2) {
      // Standing normally
      if (normalClothRef.current) normalClothRef.current.visible = true;
      if (ihramClothRef.current) ihramClothRef.current.visible = false;
      if (armsRef.current) {
        armsRef.current.rotation.x = 0;
      }
    } else if (phase < 0.4) {
      // Raising hands for niyyah (intention)
      const p = (phase - 0.2) / 0.2;
      if (armsRef.current) {
        armsRef.current.rotation.x = p * -1.2;
      }
    } else if (phase < 0.6) {
      // Transition to Ihram
      const p = (phase - 0.4) / 0.2;
      if (normalClothRef.current) {
        normalClothRef.current.visible = p < 0.5;
      }
      if (ihramClothRef.current) {
        ihramClothRef.current.visible = p >= 0.5;
      }
    } else if (phase < 0.8) {
      // In Ihram, arms down
      if (normalClothRef.current) normalClothRef.current.visible = false;
      if (ihramClothRef.current) ihramClothRef.current.visible = true;
      const p = (phase - 0.6) / 0.2;
      if (armsRef.current) {
        armsRef.current.rotation.x = THREE.MathUtils.lerp(-1.2, 0, p);
      }
    } else {
      // Making dua in Ihram
      const p = (phase - 0.8) / 0.2;
      const duaSway = Math.sin(t * 2) * 0.05;
      if (armsRef.current) {
        armsRef.current.rotation.x = -0.8 + duaSway;
      }
    }

    // Gentle breathing
    if (bodyRef.current) {
      bodyRef.current.scale.y = 1 + Math.sin(t * 2) * 0.01;
    }

    // Head movement
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
      headRef.current.position.y = 0.55 + Math.sin(t * 2) * 0.005;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 1]} scale={1.4}>
      {/* Normal clothes (visible at start) */}
      <group ref={normalClothRef}>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.4, 12]} />
          <meshStandardMaterial color={NORMAL_CLOTH} roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.12, 0.14, 0.4, 12]} />
          <meshStandardMaterial color="#475569" roughness={0.6} />
        </mesh>
      </group>

      {/* Ihram clothes (visible after change) */}
      <group ref={ihramClothRef} visible={false}>
        <mesh ref={bodyRef} position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.4, 12]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.4, 12]} />
          <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
        </mesh>
      </group>

      {/* Head */}
      <group ref={headRef} position={[0, 0.55, 0]}>
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

      {/* Arms */}
      <group ref={armsRef} position={[0, 0.35, 0]}>
        <mesh position={[-0.12, 0, 0.05]} rotation={[0, 0, 0.4]}>
          <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
        <mesh position={[0.12, 0, 0.05]} rotation={[0, 0, -0.4]}>
          <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>

      {/* Feet */}
      <mesh position={[-0.04, -0.32, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
      <mesh position={[0.04, -0.32, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
    </group>
  );
};

// ============================================================
// SCENE LIGHTING
// ============================================================
const SceneLighting = memo(() => (
  <>
    <ambientLight intensity={0.6} />
    <directionalLight position={[3, 5, 2]} intensity={1.0} color="#FFF8E1" />
    <pointLight position={[0, 2, 2]} intensity={0.4} color="#FDE68A" distance={6} />
    <hemisphereLight args={['#87CEEB', SAND, 0.5]} />
  </>
));

// ============================================================
// SKY
// ============================================================
const Sky = memo(() => (
  <mesh position={[0, 4, -5]}>
    <planeGeometry args={[20, 10]} />
    <meshBasicMaterial color="#87CEEB" />
  </mesh>
));

// ============================================================
// MAIN SCENE EXPORT
// ============================================================
const IhramScene = memo(({ variant = 'prepare', isActive = true }) => (
  <>
    <SceneLighting />
    <Sky />
    <DesertEnvironment />
    <MiqatStation />
    <IhramGarments />
    <AnimatedPilgrim />
  </>
));

export default IhramScene;
