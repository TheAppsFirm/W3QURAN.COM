/**
 * CharacterScene.jsx
 * 3D dua pose scene - child with hands raised, light radiates outward.
 * Generic/default scene for general duas.
 */

import React, { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  EmiratiHeadStatic, EmiratiBodyStanding,
  AnimatedArm,
  SceneLights, Sparkles
} from './SharedAvatar';

// ============================================================
// PEACEFUL ENVIRONMENT
// ============================================================
const Room = memo(() => (
  <group>
    {/* Floor - prayer rug style */}
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.7} />
    </mesh>
    {/* Prayer rug */}
    <mesh position={[0, -0.99, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.2, 1.8]} />
      <meshStandardMaterial color="#065F46" roughness={0.8} />
    </mesh>
    <mesh position={[0, -0.988, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.0, 1.6]} />
      <meshStandardMaterial color="#047857" roughness={0.7} />
    </mesh>
    {/* Mihrab pattern */}
    <mesh position={[0, -0.986, -0.35]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.3, 12, 0, Math.PI]} />
      <meshStandardMaterial color="#10B981" roughness={0.6} />
    </mesh>
    {/* Border decoration */}
    <mesh position={[0, -0.984, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.48, 0.52, 20]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.4} side={THREE.DoubleSide} />
    </mesh>
    {/* Back wall */}
    <mesh position={[0, 0.5, -1.2]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#FFF8E7" roughness={0.9} />
    </mesh>
    {/* Qibla arch on wall */}
    <group position={[0, 0.5, -1.18]}>
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = (Math.PI / 6) * i - Math.PI / 2 + Math.PI / 6;
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.4, 0.3 + Math.sin(angle) * 0.25, 0]}>
            <boxGeometry args={[0.13, 0.05, 0.01]} />
            <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
          </mesh>
        );
      })}
    </group>
  </group>
));

// ============================================================
// RADIATING LIGHT EFFECT
// ============================================================
const RadiatingLight = () => {
  const raysRef = useRef([]);
  const glowRef = useRef();
  const outerGlowRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    raysRef.current.forEach((ray, i) => {
      if (!ray) return;
      const phase = (t * 0.3 + i * 0.2) % 2;
      ray.scale.setScalar(0.5 + phase * 0.6);
      ray.material.opacity = Math.max(0, 0.25 - phase * 0.15);
      ray.rotation.z = t * 0.1 + i * (Math.PI * 2 / 5);
    });

    if (glowRef.current) {
      glowRef.current.intensity = 0.5 + Math.sin(t * 1.5) * 0.15;
    }

    if (outerGlowRef.current) {
      outerGlowRef.current.material.opacity = 0.08 + Math.sin(t * 0.8) * 0.04;
      outerGlowRef.current.scale.setScalar(1 + Math.sin(t * 0.6) * 0.1);
    }
  });

  return (
    <group position={[0, 0.6, 0.3]}>
      {/* Central glow */}
      <pointLight ref={glowRef} intensity={0.5} color="#FDE68A" distance={4} />

      {/* Glow sphere */}
      <mesh ref={outerGlowRef}>
        <sphereGeometry args={[0.8, 16, 12]} />
        <meshStandardMaterial
          color="#FDE68A"
          transparent
          opacity={0.08}
          roughness={0.2}
          side={THREE.DoubleSide}
          emissive="#FDE68A"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Radiating rings */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          ref={el => { raysRef.current[i] = el; }}
          rotation={[Math.PI / 2, 0, i * (Math.PI * 2 / 5)]}
        >
          <ringGeometry args={[0.3 + i * 0.12, 0.34 + i * 0.12, 20]} />
          <meshBasicMaterial color="#FDE68A" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

// ============================================================
// LIGHT PARTICLES - floating upward
// ============================================================
const LightParticle = ({ x, speed, phase, size }) => {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * speed + phase) % 4;
    const norm = t / 4;
    ref.current.position.y = -0.5 + norm * 2.5;
    ref.current.position.x = x + Math.sin(norm * Math.PI * 3) * 0.15;
    ref.current.material.opacity = Math.sin(norm * Math.PI) * 0.5;
    ref.current.scale.setScalar(size * (0.5 + Math.sin(norm * Math.PI) * 0.5));
  });

  return (
    <mesh ref={ref} position={[x, 0, 0.3]}>
      <sphereGeometry args={[0.02, 4, 4]} />
      <meshBasicMaterial color="#FDE68A" transparent opacity={0} />
    </mesh>
  );
};

const LightParticles = memo(() => {
  const particles = useMemo(() => Array.from({ length: 8 }).map(() => ({
    x: (Math.random() - 0.5) * 2,
    speed: 0.2 + Math.random() * 0.3,
    phase: Math.random() * 4,
    size: 0.5 + Math.random() * 1.0,
  })), []);

  return <>{particles.map((p, i) => <LightParticle key={i} {...p} />)}</>;
});

// ============================================================
// DUA CHARACTER - hands raised, light radiates
// ============================================================
const DuaCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.24, 0.38, 0.3]);
  const rightHandRef = useRef([0.24, 0.38, 0.3]);
  const fingerCurlL = useRef(0);
  const fingerCurlR = useRef(0);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Gentle breathing sway with hands raised
    const breathe = Math.sin(t * 0.8) * 0.02;
    const sway = Math.sin(t * 1.0) * 0.015;

    leftHandRef.current = [
      -0.24 + sway,
      0.38 + breathe,
      0.32 + Math.sin(t * 0.6) * 0.01,
    ];
    rightHandRef.current = [
      0.24 - sway,
      0.38 + breathe,
      0.32 + Math.sin(t * 0.6) * 0.01,
    ];

    // Fingers stay open (palms up for dua)
    fingerCurlL.current = 0;
    fingerCurlR.current = 0;

    if (headRef.current) {
      headRef.current.position.y = headBaseY + breathe * 0.5;
      // Looking slightly upward
      headRef.current.rotation.x = -0.1 + Math.sin(t * 0.5) * 0.03;
      headRef.current.rotation.z = Math.sin(t * 0.4) * 0.015;
      // Slight tilt side to side
      headRef.current.rotation.y = Math.sin(t * 0.3) * 0.04;
    }

    if (mouthOpenRef.current) {
      // Lip movement - reciting dua
      mouthOpenRef.current.scale.y = 0.35 + Math.sin(t * 2.5) * 0.15;
      mouthOpenRef.current.scale.x = 1.0 + Math.sin(t * 1.8) * 0.05;
    }
  });

  return (
    <group position={[0, -0.1, 0.2]}>
      <EmiratiBodyStanding />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <AnimatedArm
        shoulderPos={leftShoulderPos}
        handPosRef={leftHandRef}
        fingerCurlRef={fingerCurlL}
        elbowBendDir={[-0.3, 0.2, 0.5]}
      />
      <AnimatedArm
        shoulderPos={rightShoulderPos}
        handPosRef={rightHandRef}
        fingerCurlRef={fingerCurlR}
        elbowBendDir={[0.3, 0.2, 0.5]}
      />
    </group>
  );
};

// ============================================================
// FULL CHARACTER/DUA SCENE
// ============================================================
const CharacterScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.6} />
    <Room />
    <DuaCharacter />
    <RadiatingLight />
    <LightParticles />
    <Sparkles count={8} />
  </>
));

export default CharacterScene;
