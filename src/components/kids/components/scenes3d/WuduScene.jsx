/**
 * WuduScene.jsx
 * 3D ablution/wudu scene with 2 variants:
 * - washing: hands under running water with splash particles
 * - done: hands raised in dua after completing wudu
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  EmiratiHeadStatic, EmiratiBodyStanding,
  AnimatedArm,
  SceneLights, Sparkles
} from './SharedAvatar';

// ============================================================
// WUDU AREA ELEMENTS
// ============================================================
const WuduBasin = memo(() => (
  <group position={[0.5, -0.3, -0.5]}>
    {/* Stone basin / sink */}
    <mesh>
      <boxGeometry args={[0.8, 0.12, 0.5]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.5} />
    </mesh>
    {/* Basin depression */}
    <mesh position={[0, -0.04, 0]} scale={[1, 0.4, 1]}>
      <cylinderGeometry args={[0.2, 0.22, 0.12, 12]} />
      <meshStandardMaterial color="#CBD5E1" roughness={0.3} />
    </mesh>
    {/* Water in basin */}
    <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.18, 16]} />
      <meshStandardMaterial color="#93C5FD" transparent opacity={0.6} roughness={0.1} />
    </mesh>
    {/* Faucet pipe */}
    <mesh position={[0, 0.25, -0.18]}>
      <cylinderGeometry args={[0.02, 0.02, 0.45, 6]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.7} />
    </mesh>
    {/* Faucet spout */}
    <mesh position={[0, 0.45, -0.1]} rotation={[Math.PI / 3, 0, 0]}>
      <cylinderGeometry args={[0.018, 0.015, 0.2, 6]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.7} />
    </mesh>
    {/* Faucet head */}
    <mesh position={[0, 0.4, 0.0]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshStandardMaterial color="#64748B" roughness={0.2} metalness={0.8} />
    </mesh>
    {/* Basin legs */}
    {[[-0.3, -0.45, -0.15], [0.3, -0.45, -0.15], [-0.3, -0.45, 0.15], [0.3, -0.45, 0.15]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.03, 0.03, 0.7, 6]} />
        <meshStandardMaterial color="#64748B" roughness={0.4} metalness={0.3} />
      </mesh>
    ))}
  </group>
));

// Water stream from faucet
const WaterStream = ({ active = true }) => {
  const streamRef = useRef();
  const dropsRef = useRef([]);

  useFrame((state) => {
    if (!streamRef.current) return;
    const t = state.clock.elapsedTime;
    // Wobble the stream
    streamRef.current.scale.x = 1 + Math.sin(t * 8) * 0.15;
    streamRef.current.scale.z = 1 + Math.cos(t * 8) * 0.15;
    streamRef.current.material.opacity = active ? 0.5 + Math.sin(t * 4) * 0.1 : 0;

    // Animate splash drops
    dropsRef.current.forEach((drop, i) => {
      if (!drop) return;
      const dropT = ((t * 2 + i * 0.5) % 1.5) / 1.5;
      drop.position.x = Math.sin(i * 2.1) * dropT * 0.15;
      drop.position.y = dropT * 0.15 - dropT * dropT * 0.3;
      drop.position.z = Math.cos(i * 1.7) * dropT * 0.12;
      drop.material.opacity = active ? (1 - dropT) * 0.5 : 0;
      drop.scale.setScalar(0.3 + dropT * 0.5);
    });
  });

  return (
    <group position={[0.5, -0.05, -0.5]}>
      {/* Main stream */}
      <mesh ref={streamRef} position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.008, 0.015, 0.3, 6]} />
        <meshStandardMaterial color="#60A5FA" transparent opacity={0.5} roughness={0.1} />
      </mesh>
      {/* Splash drops */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} ref={el => { dropsRef.current[i] = el; }} position={[0, 0, 0]}>
          <sphereGeometry args={[0.012, 4, 4]} />
          <meshStandardMaterial color="#93C5FD" transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
};

const Room = memo(() => (
  <group>
    {/* Floor - stone tiles */}
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#D1D5DB" roughness={0.5} />
    </mesh>
    {/* Back wall */}
    <mesh position={[0, 0.5, -1.2]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#F0FDF4" roughness={0.8} />
    </mesh>
    {/* Wall tile accent strip */}
    <mesh position={[0, -0.3, -1.18]}>
      <boxGeometry args={[5, 0.1, 0.02]} />
      <meshStandardMaterial color="#6EE7B7" roughness={0.4} />
    </mesh>
    {/* Lower tiles */}
    {Array.from({ length: 10 }).map((_, i) => (
      <mesh key={i} position={[-2 + i * 0.45, -0.7, -1.17]}>
        <boxGeometry args={[0.4, 0.6, 0.015]} />
        <meshStandardMaterial color={i % 2 === 0 ? '#D1FAE5' : '#ECFDF5'} roughness={0.3} />
      </mesh>
    ))}
    {/* Small towel on wall */}
    <mesh position={[-0.8, 0.2, -1.15]}>
      <boxGeometry args={[0.4, 0.6, 0.03]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.7} />
    </mesh>
    {/* Towel rack */}
    <mesh position={[-0.8, 0.55, -1.15]} rotation={[0, 0, 0]}>
      <cylinderGeometry args={[0.012, 0.012, 0.5, 6]} rotation={[0, 0, Math.PI / 2]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.3} metalness={0.5} />
    </mesh>
  </group>
));

// ============================================================
// WASHING CHARACTER - walks to basin, then washes hands
// ============================================================
const WashingCharacter = () => {
  const groupRef = useRef();
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.15, 0.15]);
  const rightHandRef = useRef([0.3, -0.15, 0.15]);
  const fingerCurlL = useRef(0.2);
  const fingerCurlR = useRef(0.2);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  // Basin is at [0.5, -0.3, -0.5]. Standing position near basin: [-0.1, -0.1, 0.1]
  // Start position (away from basin): [-0.8, -0.1, 0.5]

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 7;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    if (phase < 0.05) {
      // Standing away from basin
      groupRef.current.position.x = -0.8;
      groupRef.current.position.z = 0.5;
      groupRef.current.rotation.y = 0.15;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.25) {
      // Walk toward basin
      const p = smooth((phase - 0.05) / 0.2);
      groupRef.current.position.x = THREE.MathUtils.lerp(-0.8, -0.1, p);
      groupRef.current.position.z = THREE.MathUtils.lerp(0.5, 0.1, p);
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(p * Math.PI * 3)) * 0.025;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(0.15, 0.3, p);

      // Arm swing
      const walkT = p * Math.PI * 3;
      leftHandRef.current = [
        -0.3, -0.15 + Math.abs(Math.sin(walkT + Math.PI)) * 0.06,
        0.15 + Math.sin(walkT + Math.PI) * 0.15,
      ];
      rightHandRef.current = [
        0.3, -0.15 + Math.abs(Math.sin(walkT)) * 0.06,
        0.15 + Math.sin(walkT) * 0.15,
      ];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.35) {
      // Arrived at basin, reach hands forward toward water
      const p = smooth((phase - 0.25) / 0.1);
      groupRef.current.position.x = -0.1;
      groupRef.current.position.z = 0.1;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.3;

      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.3, 0.15, p),
        THREE.MathUtils.lerp(-0.15, 0.0, p),
        THREE.MathUtils.lerp(0.15, 0.35, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.2, p),
        THREE.MathUtils.lerp(-0.15, 0.0, p),
        THREE.MathUtils.lerp(0.15, 0.35, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.2, 0.4, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.2, 0.4, p);
    } else if (phase < 0.8) {
      // Rubbing hands under water
      groupRef.current.position.x = -0.1;
      groupRef.current.position.z = 0.1;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.3;

      const rubPhase = (phase - 0.35) / 0.45;
      const rub = Math.sin(rubPhase * Math.PI * 6) * 0.04;
      const rubY = Math.sin(rubPhase * Math.PI * 3) * 0.02;
      leftHandRef.current = [0.15 + rub, 0.0 + rubY, 0.35];
      rightHandRef.current = [0.2 - rub, 0.0 - rubY, 0.35];
      fingerCurlL.current = 0.4 + Math.sin(t * 4) * 0.2;
      fingerCurlR.current = 0.4 + Math.sin(t * 4 + 1) * 0.2;
    } else {
      // Pull hands back, rest before loop
      const p = smooth((phase - 0.8) / 0.2);
      leftHandRef.current = [
        THREE.MathUtils.lerp(0.15, -0.3, p),
        THREE.MathUtils.lerp(0.0, -0.15, p),
        THREE.MathUtils.lerp(0.35, 0.15, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.2, 0.3, p),
        THREE.MathUtils.lerp(0.0, -0.15, p),
        THREE.MathUtils.lerp(0.35, 0.15, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.4, 0.2, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.4, 0.2, p);
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY;
      const isWashing = phase > 0.35 && phase < 0.8;
      headRef.current.rotation.x = isWashing ? 0.15 + Math.sin(t * 0.8) * 0.03 : 0;
      headRef.current.rotation.y = isWashing ? 0 : Math.sin(t * 0.7) * 0.05;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = 0.3;
      mouthOpenRef.current.scale.x = 1.1 + Math.sin(t * 0.6) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-0.8, -0.1, 0.5]}>
      <EmiratiBodyStanding />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <AnimatedArm
        shoulderPos={leftShoulderPos}
        handPosRef={leftHandRef}
        fingerCurlRef={fingerCurlL}
        elbowBendDir={[-0.3, 0, 0.5]}
      />
      <AnimatedArm
        shoulderPos={rightShoulderPos}
        handPosRef={rightHandRef}
        fingerCurlRef={fingerCurlR}
        elbowBendDir={[0.3, 0, 0.5]}
      />
    </group>
  );
};

// ============================================================
// DUA CHARACTER - steps away from basin, raises hands in dua
// ============================================================
const DuaCharacter = () => {
  const groupRef = useRef();
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.15, 0.15]);
  const rightHandRef = useRef([0.3, -0.15, 0.15]);
  const fingerCurlL = useRef(0.2);
  const fingerCurlR = useRef(0.2);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  // Start near basin [-0.1, 0.1], step back to [-0.5, 0.4], then raise hands for dua

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 7;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    if (phase < 0.05) {
      // Standing near basin (just finished wudu)
      groupRef.current.position.x = -0.1;
      groupRef.current.position.z = 0.1;
      groupRef.current.rotation.y = 0.3;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.22) {
      // Step back away from basin
      const p = smooth((phase - 0.05) / 0.17);
      groupRef.current.position.x = THREE.MathUtils.lerp(-0.1, -0.5, p);
      groupRef.current.position.z = THREE.MathUtils.lerp(0.1, 0.4, p);
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(p * Math.PI * 2)) * 0.02;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(0.3, 0.15, p);

      // Walking arms
      const walkT = p * Math.PI * 2;
      leftHandRef.current = [
        -0.3, -0.15 + Math.abs(Math.sin(walkT + Math.PI)) * 0.05,
        0.15 + Math.sin(walkT + Math.PI) * 0.1,
      ];
      rightHandRef.current = [
        0.3, -0.15 + Math.abs(Math.sin(walkT)) * 0.05,
        0.15 + Math.sin(walkT) * 0.1,
      ];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.35) {
      // Raise hands for dua
      const p = smooth((phase - 0.22) / 0.13);
      groupRef.current.position.x = -0.5;
      groupRef.current.position.z = 0.4;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.15;

      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.3, -0.22, p),
        THREE.MathUtils.lerp(-0.15, 0.35, p),
        THREE.MathUtils.lerp(0.15, 0.32, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.22, p),
        THREE.MathUtils.lerp(-0.15, 0.35, p),
        THREE.MathUtils.lerp(0.15, 0.32, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.2, 0, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.2, 0, p);
    } else if (phase < 0.85) {
      // Dua pose - hands raised, palms up, gentle sway + recitation
      groupRef.current.position.x = -0.5;
      groupRef.current.position.z = 0.4;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.15;

      const sway = Math.sin(t * 1.2) * 0.02;
      const breathe = Math.sin(t * 0.8) * 0.015;
      leftHandRef.current = [-0.22 + sway, 0.35 + breathe, 0.32];
      rightHandRef.current = [0.22 - sway, 0.35 + breathe, 0.32];
      fingerCurlL.current = 0;
      fingerCurlR.current = 0;
    } else {
      // Lower hands, rest before loop
      const p = smooth((phase - 0.85) / 0.15);
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.22, -0.3, p),
        THREE.MathUtils.lerp(0.35, -0.15, p),
        THREE.MathUtils.lerp(0.32, 0.15, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.22, 0.3, p),
        THREE.MathUtils.lerp(0.35, -0.15, p),
        THREE.MathUtils.lerp(0.32, 0.15, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0, 0.2, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0, 0.2, p);
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY;
      const isDua = phase > 0.35 && phase < 0.85;
      headRef.current.rotation.x = isDua ? -0.08 + Math.sin(t * 0.6) * 0.03 : 0;
      headRef.current.rotation.y = isDua ? 0 : Math.sin(t * 0.7) * 0.05;
      headRef.current.rotation.z = Math.sin(t * 0.4) * 0.015;
    }

    if (mouthOpenRef.current) {
      const isDua = phase > 0.35 && phase < 0.85;
      mouthOpenRef.current.scale.y = isDua ? 0.4 + Math.sin(t * 2.5) * 0.15 : 0.35;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group ref={groupRef} position={[-0.1, -0.1, 0.1]}>
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
// DUA LIGHT EFFECT - radiating light when hands raised
// ============================================================
const DuaLight = () => {
  const ringsRef = useRef([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ringsRef.current.forEach((ring, i) => {
      if (!ring) return;
      const phase = (t * 0.5 + i * 0.3) % 1.5;
      ring.scale.setScalar(0.3 + phase * 0.8);
      ring.material.opacity = Math.max(0, 0.3 - phase * 0.25);
    });
  });

  return (
    <group position={[0, 0.6, 0.4]}>
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} ref={el => { ringsRef.current[i] = el; }} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.15, 0.18, 16]} />
          <meshBasicMaterial color="#FDE68A" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

// ============================================================
// FULL WUDU SCENE
// ============================================================
const WuduScene = memo(({ variant = 'washing', isActive }) => {
  const isWashing = variant === 'washing';

  return (
    <>
      <SceneLights warmth={0.4} />
      <pointLight position={[0.5, 1.0, 0.5]} intensity={0.5} color="#E0F2FE" distance={4} />
      <Room />
      <WuduBasin />
      <WaterStream active={isWashing} />

      {isWashing ? <WashingCharacter /> : <DuaCharacter />}
      {!isWashing && <DuaLight />}

      <Sparkles count={isWashing ? 4 : 7} />
    </>
  );
});

export default WuduScene;
