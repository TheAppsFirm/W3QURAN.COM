/**
 * WeatherScene.jsx
 * 3D outdoor weather scene with 2 variants:
 * - rain: rain particles falling, child holds hands out
 * - thunder: dark sky, lightning flashes, child covers ears
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
// OUTDOOR ENVIRONMENT
// ============================================================
const Ground = memo(() => (
  <group>
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial color="#6B8E6B" roughness={0.9} />
    </mesh>
    {/* Path */}
    <mesh position={[0, -0.99, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.2, 4]} />
      <meshStandardMaterial color="#D4A574" roughness={0.8} />
    </mesh>
    {/* Grass tufts */}
    {[[-1.2, 0.3], [1.0, -0.2], [-0.8, 1.5], [1.3, 1.0], [-1.5, -0.5]].map(([x, z], i) => (
      <mesh key={i} position={[x, -0.9, z]}>
        <coneGeometry args={[0.06, 0.15, 4]} />
        <meshStandardMaterial color="#4ADE80" roughness={0.8} />
      </mesh>
    ))}
  </group>
));

const Tree = memo(({ position }) => (
  <group position={position}>
    {/* Trunk */}
    <mesh position={[0, -0.3, 0]}>
      <cylinderGeometry args={[0.06, 0.08, 1.0, 6]} />
      <meshStandardMaterial color="#8B6914" roughness={0.8} />
    </mesh>
    {/* Canopy */}
    <mesh position={[0, 0.4, 0]}>
      <sphereGeometry args={[0.4, 8, 8]} />
      <meshStandardMaterial color="#22C55E" roughness={0.7} />
    </mesh>
    <mesh position={[0.15, 0.55, 0.1]}>
      <sphereGeometry args={[0.25, 8, 8]} />
      <meshStandardMaterial color="#16A34A" roughness={0.7} />
    </mesh>
    <mesh position={[-0.12, 0.5, -0.08]}>
      <sphereGeometry args={[0.28, 8, 8]} />
      <meshStandardMaterial color="#15803D" roughness={0.7} />
    </mesh>
  </group>
));

// ============================================================
// RAIN PARTICLES
// ============================================================
const RainDrop = ({ x, z, speed, delay }) => {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * speed + delay) % 3;
    const normalT = t / 3;
    ref.current.position.y = THREE.MathUtils.lerp(2.5, -1.0, normalT);
    ref.current.material.opacity = normalT < 0.9 ? 0.4 : 0.4 * (1 - (normalT - 0.9) / 0.1);
  });

  return (
    <mesh ref={ref} position={[x, 2.5, z]}>
      <cylinderGeometry args={[0.005, 0.005, 0.12, 3]} />
      <meshStandardMaterial color="#93C5FD" transparent opacity={0.4} />
    </mesh>
  );
};

const Rain = memo(() => {
  const drops = useMemo(() =>
    Array.from({ length: 40 }).map(() => ({
      x: (Math.random() - 0.5) * 4,
      z: (Math.random() - 0.5) * 3,
      speed: 0.8 + Math.random() * 0.4,
      delay: Math.random() * 3,
    })), []
  );

  return (
    <group>
      {drops.map((d, i) => <RainDrop key={i} {...d} />)}
    </group>
  );
});

// ============================================================
// CLOUDS
// ============================================================
const Cloud = memo(({ position, dark = false }) => (
  <group position={position}>
    <mesh>
      <sphereGeometry args={[0.4, 8, 6]} />
      <meshStandardMaterial color={dark ? '#475569' : '#E2E8F0'} roughness={0.8} />
    </mesh>
    <mesh position={[0.3, -0.05, 0]}>
      <sphereGeometry args={[0.3, 8, 6]} />
      <meshStandardMaterial color={dark ? '#334155' : '#CBD5E1'} roughness={0.8} />
    </mesh>
    <mesh position={[-0.25, 0.05, 0.1]}>
      <sphereGeometry args={[0.28, 8, 6]} />
      <meshStandardMaterial color={dark ? '#3B4251' : '#D1D5DB'} roughness={0.8} />
    </mesh>
    <mesh position={[0.15, 0.1, -0.1]}>
      <sphereGeometry args={[0.25, 8, 6]} />
      <meshStandardMaterial color={dark ? '#394050' : '#D4D8DD'} roughness={0.8} />
    </mesh>
  </group>
));

// ============================================================
// LIGHTNING BOLT
// ============================================================
const Lightning = () => {
  const boltRef = useRef();
  const flashRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 4;
    const phase = (t % cycle) / cycle;

    if (boltRef.current) {
      const showBolt = phase > 0.7 && phase < 0.78;
      boltRef.current.visible = showBolt;
    }
    if (flashRef.current) {
      const flashIntensity = phase > 0.7 && phase < 0.8
        ? Math.sin((phase - 0.7) / 0.1 * Math.PI) * 2.0
        : 0;
      flashRef.current.intensity = flashIntensity;
    }
  });

  return (
    <>
      <group ref={boltRef} position={[0.8, 1.0, -0.5]} visible={false}>
        {/* Lightning segments */}
        <mesh position={[0, 0.4, 0]} rotation={[0, 0, 0.15]}>
          <boxGeometry args={[0.04, 0.5, 0.02]} />
          <meshBasicMaterial color="#FDE68A" />
        </mesh>
        <mesh position={[0.1, 0, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.035, 0.45, 0.02]} />
          <meshBasicMaterial color="#FBBF24" />
        </mesh>
        <mesh position={[-0.05, -0.35, 0]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.03, 0.35, 0.02]} />
          <meshBasicMaterial color="#FDE68A" />
        </mesh>
      </group>
      <pointLight ref={flashRef} position={[0, 2, 0]} intensity={0} color="#FFFFFF" distance={10} />
    </>
  );
};

// ============================================================
// RAIN CHARACTER - hands out in wonder
// ============================================================
const RainCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.35, 0.1, 0.3]);
  const rightHandRef = useRef([0.35, 0.1, 0.3]);
  const fingerCurlL = useRef(0);
  const fingerCurlR = useRef(0);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Hands out, palms up, catching rain
    const sway = Math.sin(t * 0.8) * 0.03;
    leftHandRef.current = [-0.38 + sway, 0.08 + Math.sin(t * 1.2) * 0.03, 0.35];
    rightHandRef.current = [0.38 - sway, 0.08 + Math.sin(t * 1.2 + 1) * 0.03, 0.35];
    fingerCurlL.current = 0;
    fingerCurlR.current = 0;

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.5) * 0.008;
      headRef.current.rotation.x = -0.15; // Looking up at rain
      headRef.current.rotation.z = Math.sin(t * 0.6) * 0.04;
      headRef.current.rotation.y = Math.sin(t * 0.4) * 0.06;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = 0.5 + Math.sin(t * 1.5) * 0.15;
      mouthOpenRef.current.scale.x = 1.2;
    }
  });

  return (
    <group position={[0, -0.1, 0.5]}>
      <EmiratiBodyStanding />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <AnimatedArm
        shoulderPos={leftShoulderPos}
        handPosRef={leftHandRef}
        fingerCurlRef={fingerCurlL}
        elbowBendDir={[-0.3, 0.1, 0.5]}
      />
      <AnimatedArm
        shoulderPos={rightShoulderPos}
        handPosRef={rightHandRef}
        fingerCurlRef={fingerCurlR}
        elbowBendDir={[0.3, 0.1, 0.5]}
      />
    </group>
  );
};

// ============================================================
// THUNDER CHARACTER - covers ears, slightly crouched
// ============================================================
const ThunderCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.22, 0.45, 0.15]);
  const rightHandRef = useRef([0.22, 0.45, 0.15]);
  const fingerCurlL = useRef(0.6);
  const fingerCurlR = useRef(0.6);
  const bodyRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 4;
    const phase = (t % cycle) / cycle;

    // Hands near ears (covering)
    const tremble = phase > 0.7 && phase < 0.8 ? Math.sin(t * 30) * 0.015 : 0;
    leftHandRef.current = [-0.25 + tremble, 0.45, 0.18];
    rightHandRef.current = [0.25 - tremble, 0.45, 0.18];
    fingerCurlL.current = 0.7;
    fingerCurlR.current = 0.7;

    if (headRef.current) {
      headRef.current.position.y = headBaseY + tremble * 0.5;
      // Flinch during lightning
      const flinch = phase > 0.7 && phase < 0.8;
      headRef.current.rotation.x = flinch ? 0.15 : THREE.MathUtils.lerp(headRef.current.rotation.x, 0.05, 0.05);
      headRef.current.rotation.z = Math.sin(t * 0.8) * 0.03 + tremble * 2;
    }

    if (mouthOpenRef.current) {
      const scared = phase > 0.7 && phase < 0.8;
      mouthOpenRef.current.scale.y = scared ? 1.0 : 0.4;
      mouthOpenRef.current.scale.x = scared ? 0.8 : 1.0;
    }

    if (bodyRef.current) {
      // Slight crouch during thunder
      const crouch = phase > 0.7 && phase < 0.8 ? 0.05 : 0;
      bodyRef.current.position.y = THREE.MathUtils.lerp(bodyRef.current.position.y || 0, -crouch, 0.1);
    }
  });

  return (
    <group position={[0, -0.1, 0.5]}>
      <group ref={bodyRef}>
        <EmiratiBodyStanding />
        <group ref={headRef} position={[0, headBaseY, 0]}>
          <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
        </group>
        <AnimatedArm
          shoulderPos={leftShoulderPos}
          handPosRef={leftHandRef}
          fingerCurlRef={fingerCurlL}
          elbowBendDir={[-0.4, 0.2, 0.3]}
        />
        <AnimatedArm
          shoulderPos={rightShoulderPos}
          handPosRef={rightHandRef}
          fingerCurlRef={fingerCurlR}
          elbowBendDir={[0.4, 0.2, 0.3]}
        />
      </group>
    </group>
  );
};

// ============================================================
// FULL WEATHER SCENE
// ============================================================
const WeatherScene = memo(({ variant = 'rain', isActive }) => {
  const isThunder = variant === 'thunder';

  return (
    <>
      <SceneLights warmth={isThunder ? 0.1 : 0.3} />
      <ambientLight intensity={isThunder ? 0.2 : 0.4} color={isThunder ? '#94A3B8' : '#E0F2FE'} />
      <Ground />
      <Tree position={[-1.5, 0, -0.8]} />
      <Tree position={[1.8, 0, -0.5]} />

      {/* Clouds */}
      <Cloud position={[-0.5, 2.2, -1]} dark={isThunder} />
      <Cloud position={[0.8, 2.4, -0.5]} dark={isThunder} />
      <Cloud position={[-1.2, 2.0, 0]} dark={isThunder} />

      <Rain />
      {isThunder && <Lightning />}

      {isThunder ? <ThunderCharacter /> : <RainCharacter />}

      <Sparkles count={isThunder ? 2 : 5} />
    </>
  );
});

export default WeatherScene;
