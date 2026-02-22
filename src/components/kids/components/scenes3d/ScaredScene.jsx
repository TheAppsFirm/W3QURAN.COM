/**
 * ScaredScene.jsx
 * 3D dark scene - child trembles, then a glowing shield of light appears.
 * Used for dua for protection / when feeling scared.
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  EmiratiHeadStatic, EmiratiBodyStanding,
  AnimatedArm,
  Sparkles
} from './SharedAvatar';

// ============================================================
// DARK ROOM
// ============================================================
const DarkRoom = memo(() => (
  <group>
    {/* Floor */}
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#374151" roughness={0.8} />
    </mesh>
    {/* Walls */}
    <mesh position={[0, 0.5, -1.5]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#1F2937" roughness={0.9} />
    </mesh>
    <mesh position={[-2, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#1F2937" roughness={0.9} />
    </mesh>
    <mesh position={[2, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#1F2937" roughness={0.9} />
    </mesh>
    {/* Window with moonlight */}
    <mesh position={[1.5, 0.5, -1.48]}>
      <boxGeometry args={[0.5, 0.5, 0.02]} />
      <meshStandardMaterial color="#1E3A5F" roughness={0.5} />
    </mesh>
    {/* Moon through window */}
    <mesh position={[1.5, 0.6, -1.46]}>
      <circleGeometry args={[0.08, 12]} />
      <meshBasicMaterial color="#FDE68A" transparent opacity={0.6} />
    </mesh>
    {/* Spooky shadows (dark shapes) */}
    <mesh position={[-1.2, 0, -1.2]} rotation={[0, 0.3, 0]}>
      <boxGeometry args={[0.4, 1.5, 0.04]} />
      <meshStandardMaterial color="#111827" roughness={0.9} transparent opacity={0.5} />
    </mesh>
  </group>
));

// ============================================================
// PROTECTION SHIELD (glowing dome)
// ============================================================
const ProtectionShield = memo(() => {
  const shieldRef = useRef();
  const ringsRef = useRef([]);
  const glowRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;

    // Shield appears after child makes dua (phase > 0.5)
    const shieldVisible = phase > 0.5;
    const shieldStrength = shieldVisible ? Math.min((phase - 0.5) / 0.15, 1) : 0;

    if (shieldRef.current) {
      shieldRef.current.material.opacity = shieldStrength * 0.2;
      shieldRef.current.scale.setScalar(0.8 + shieldStrength * 0.4);
      shieldRef.current.rotation.y = t * 0.3;
    }

    ringsRef.current.forEach((ring, i) => {
      if (!ring) return;
      const ringPhase = (t * 0.4 + i * 0.5) % 2;
      ring.material.opacity = shieldVisible ? Math.sin(ringPhase * Math.PI) * 0.3 : 0;
      ring.scale.setScalar(0.8 + ringPhase * 0.3);
      ring.rotation.x = Math.PI / 2 + i * 0.3;
    });

    if (glowRef.current) {
      glowRef.current.intensity = shieldStrength * 0.8;
    }
  });

  return (
    <group position={[0, 0.2, 0.3]}>
      {/* Main shield dome */}
      <mesh ref={shieldRef}>
        <sphereGeometry args={[1.2, 16, 12]} />
        <meshStandardMaterial
          color="#FDE68A"
          transparent
          opacity={0}
          roughness={0.2}
          side={THREE.DoubleSide}
          emissive="#FDE68A"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Concentric rings */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} ref={el => { ringsRef.current[i] = el; }} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8 + i * 0.2, 0.85 + i * 0.2, 24]} />
          <meshBasicMaterial color="#FDE68A" transparent opacity={0} side={THREE.DoubleSide} />
        </mesh>
      ))}
      {/* Shield light */}
      <pointLight ref={glowRef} intensity={0} color="#FDE68A" distance={4} />
    </group>
  );
});

// ============================================================
// SCARED CHARACTER - trembles, then calms with dua
// ============================================================
const ScaredCharacter = memo(() => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.4, 0.1]);
  const rightHandRef = useRef([0.3, -0.4, 0.1]);
  const fingerCurlL = useRef(0.3);
  const fingerCurlR = useRef(0.3);
  const bodyRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (phase < 0.3) {
      // Scared - trembling, arms hugging self
      const tremble = Math.sin(t * 20) * 0.008;

      leftHandRef.current = [-0.15 + tremble, 0.0, 0.2];
      rightHandRef.current = [0.15 - tremble, 0.0, 0.2];
      fingerCurlL.current = 0.6;
      fingerCurlR.current = 0.6;

      if (bodyRef.current) {
        bodyRef.current.position.x = tremble;
        bodyRef.current.rotation.z = tremble * 0.5;
      }

      if (headRef.current) {
        headRef.current.position.y = headBaseY;
        headRef.current.rotation.x = 0.1;
        headRef.current.rotation.y = tremble * 3;
        // Eyes wide - no way to show that, but mouth shows fear
      }

      if (mouthOpenRef.current) {
        mouthOpenRef.current.scale.y = 0.7;
        mouthOpenRef.current.scale.x = 0.8;
      }
    } else if (phase < 0.5) {
      // Raising hands for dua
      const p = smooth((phase - 0.3) / 0.2);
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.15, -0.22, p),
        THREE.MathUtils.lerp(0.0, 0.35, p),
        THREE.MathUtils.lerp(0.2, 0.3, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.15, 0.22, p),
        THREE.MathUtils.lerp(0.0, 0.35, p),
        THREE.MathUtils.lerp(0.2, 0.3, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.6, 0, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.6, 0, p);

      // Trembling decreases
      const tremble = Math.sin(t * 20) * 0.008 * (1 - p);
      if (bodyRef.current) {
        bodyRef.current.position.x = tremble;
        bodyRef.current.rotation.z = 0;
      }

      if (headRef.current) {
        headRef.current.rotation.x = THREE.MathUtils.lerp(0.1, -0.08, p);
      }

      if (mouthOpenRef.current) {
        mouthOpenRef.current.scale.y = THREE.MathUtils.lerp(0.7, 0.35, p);
        mouthOpenRef.current.scale.x = THREE.MathUtils.lerp(0.8, 1.0, p);
      }
    } else if (phase < 0.85) {
      // Calm - hands raised, shield visible, no trembling
      const sway = Math.sin(t * 1.0) * 0.015;
      leftHandRef.current = [-0.22 + sway, 0.35 + Math.sin(t * 0.8) * 0.01, 0.3];
      rightHandRef.current = [0.22 - sway, 0.35 + Math.sin(t * 0.8) * 0.01, 0.3];
      fingerCurlL.current = 0;
      fingerCurlR.current = 0;

      if (bodyRef.current) {
        bodyRef.current.position.x = 0;
        bodyRef.current.rotation.z = 0;
      }

      if (headRef.current) {
        headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.005;
        headRef.current.rotation.x = -0.08;
        headRef.current.rotation.z = Math.sin(t * 0.4) * 0.01;
      }

      if (mouthOpenRef.current) {
        // Calm, slight dua lip movement
        mouthOpenRef.current.scale.y = 0.35 + Math.sin(t * 2) * 0.1;
        mouthOpenRef.current.scale.x = 1.0;
      }
    } else {
      // Transition back to scared for loop
      const p = smooth((phase - 0.85) / 0.15);
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.22, -0.15, p),
        THREE.MathUtils.lerp(0.35, 0.0, p),
        0.2,
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.22, 0.15, p),
        THREE.MathUtils.lerp(0.35, 0.0, p),
        0.2,
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0, 0.6, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0, 0.6, p);
    }

    if (headRef.current && !(phase > 0.3 && phase < 0.5)) {
      headRef.current.rotation.y = Math.sin(t * 0.6) * (phase < 0.3 ? 0.1 : 0.03);
    }
  });

  return (
    <group position={[0, -0.1, 0.3]}>
      <group ref={bodyRef}>
        <EmiratiBodyStanding />
        <group ref={headRef} position={[0, headBaseY, 0]}>
          <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
        </group>
        <AnimatedArm
          shoulderPos={leftShoulderPos}
          handPosRef={leftHandRef}
          fingerCurlRef={fingerCurlL}
          elbowBendDir={[-0.3, 0.1, 0.4]}
        />
        <AnimatedArm
          shoulderPos={rightShoulderPos}
          handPosRef={rightHandRef}
          fingerCurlRef={fingerCurlR}
          elbowBendDir={[0.3, 0.1, 0.4]}
        />
      </group>
    </group>
  );
});

// ============================================================
// FULL SCARED SCENE
// ============================================================
const ScaredScene = memo(({ variant, isActive }) => (
  <>
    {/* Very dim lighting initially */}
    <ambientLight intensity={0.15} color="#475569" />
    <directionalLight position={[2, 3, 1]} intensity={0.2} color="#94A3B8" />
    <pointLight position={[1.5, 0.6, -1.0]} intensity={0.15} color="#FDE68A" distance={3} />

    <DarkRoom />
    <ScaredCharacter />
    <ProtectionShield />

    <Sparkles count={5} />
  </>
));

export default ScaredScene;
