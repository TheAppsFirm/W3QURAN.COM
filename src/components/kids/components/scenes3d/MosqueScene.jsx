/**
 * MosqueScene.jsx
 * Beautiful 3D mosque entrance with ornate archway, dome, minarets, lanterns.
 * - enter: child says dua then walks in through archway
 * - leave: child walks out, looks back at mosque
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  EmiratiHeadStatic, EmiratiBodyStanding,
  AnimatedArm,
  SceneLights, Sparkles
} from './SharedAvatar';

const GOLD = '#D4AF37';
const GOLD_DARK = '#B8941E';
const CREAM = '#F5F0E8';
const GREEN = '#10B981';
const GREEN_DARK = '#065F46';
const MARBLE = '#F0EDE5';

// ============================================================
// ORNATE PILLARS
// ============================================================
const Pillar = memo(({ x }) => (
  <group position={[x, 0, -0.5]}>
    {/* Base plinth */}
    <mesh position={[0, -1.15, 0]}>
      <boxGeometry args={[0.38, 0.3, 0.38]} />
      <meshStandardMaterial color="#E0D8C8" roughness={0.5} />
    </mesh>
    {/* Base moulding */}
    <mesh position={[0, -0.95, 0]}>
      <cylinderGeometry args={[0.18, 0.2, 0.12, 12]} />
      <meshStandardMaterial color={CREAM} roughness={0.4} />
    </mesh>
    {/* Main shaft */}
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[0.12, 0.13, 2.2, 12]} />
      <meshStandardMaterial color={CREAM} roughness={0.35} />
    </mesh>
    {/* Shaft decorative rings */}
    {[-0.5, 0, 0.5].map((y, i) => (
      <mesh key={i} position={[0, y, 0]}>
        <torusGeometry args={[0.135, 0.012, 6, 16]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
      </mesh>
    ))}
    {/* Capital (top ornament) */}
    <mesh position={[0, 1.15, 0]}>
      <cylinderGeometry args={[0.2, 0.13, 0.28, 12]} />
      <meshStandardMaterial color={CREAM} roughness={0.4} />
    </mesh>
    {/* Capital gold ring */}
    <mesh position={[0, 1.03, 0]}>
      <torusGeometry args={[0.14, 0.015, 6, 16]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
    </mesh>
  </group>
));

// ============================================================
// ISLAMIC ARCH - pointed horseshoe style
// ============================================================
const IslamicArch = memo(() => {
  // Build a pointed Islamic arch with smooth curve
  const archStones = [];
  const numSegments = 15;
  for (let i = 0; i < numSegments; i++) {
    // Create a pointed arch shape
    const t = i / (numSegments - 1); // 0 to 1
    const angle = Math.PI * t;
    const r = 0.9;
    const pointedness = 0.35;
    const x = Math.cos(angle) * r;
    const y = 1.25 + Math.sin(angle) * (r + pointedness * Math.sin(angle));
    archStones.push(
      <mesh key={i} position={[x, y, -0.5]} rotation={[0, 0, -angle + Math.PI / 2]}>
        <boxGeometry args={[0.22, 0.1, 0.14]} />
        <meshStandardMaterial
          color={i % 2 === 0 ? GOLD : '#E8D5A0'}
          roughness={0.35}
          metalness={i % 2 === 0 ? 0.4 : 0.1}
        />
      </mesh>
    );
  }

  return (
    <group>
      {archStones}
      {/* Keystone at top */}
      <mesh position={[0, 2.15, -0.5]}>
        <boxGeometry args={[0.18, 0.22, 0.16]} />
        <meshStandardMaterial color={GOLD_DARK} roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Star on keystone */}
      <mesh position={[0, 2.15, -0.42]}>
        <circleGeometry args={[0.06, 6]} />
        <meshStandardMaterial color={GOLD} roughness={0.2} metalness={0.6} />
      </mesh>
    </group>
  );
});

// ============================================================
// MOSQUE WALLS WITH DECORATIVE ELEMENTS
// ============================================================
const MosqueWalls = memo(() => (
  <group>
    {/* Left wall */}
    <mesh position={[-1.9, 0.5, -0.5]}>
      <boxGeometry args={[0.8, 3.2, 0.18]} />
      <meshStandardMaterial color={CREAM} roughness={0.5} />
    </mesh>
    {/* Right wall */}
    <mesh position={[1.9, 0.5, -0.5]}>
      <boxGeometry args={[0.8, 3.2, 0.18]} />
      <meshStandardMaterial color={CREAM} roughness={0.5} />
    </mesh>
    {/* Top wall above arch */}
    <mesh position={[0, 2.55, -0.5]}>
      <boxGeometry args={[4.6, 0.6, 0.18]} />
      <meshStandardMaterial color={CREAM} roughness={0.5} />
    </mesh>

    {/* Decorative band above arch - geometric pattern */}
    <mesh position={[0, 2.35, -0.4]}>
      <boxGeometry args={[3.8, 0.06, 0.02]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.4} />
    </mesh>
    <mesh position={[0, 2.27, -0.4]}>
      <boxGeometry args={[3.5, 0.04, 0.02]} />
      <meshStandardMaterial color={GREEN} roughness={0.4} />
    </mesh>
    <mesh position={[0, 2.42, -0.4]}>
      <boxGeometry args={[3.5, 0.04, 0.02]} />
      <meshStandardMaterial color={GREEN} roughness={0.4} />
    </mesh>

    {/* Small decorative arches on walls - left */}
    <mesh position={[-1.9, 0.8, -0.38]} rotation={[0, 0, 0]}>
      <planeGeometry args={[0.5, 0.7]} />
      <meshStandardMaterial color="#E8E0D0" roughness={0.6} />
    </mesh>
    {/* Small decorative arches on walls - right */}
    <mesh position={[1.9, 0.8, -0.38]} rotation={[0, 0, 0]}>
      <planeGeometry args={[0.5, 0.7]} />
      <meshStandardMaterial color="#E8E0D0" roughness={0.6} />
    </mesh>

    {/* Inner back wall (visible through arch) */}
    <mesh position={[0, 0.5, -2.5]}>
      <planeGeometry args={[5, 3.5]} />
      <meshStandardMaterial color="#E8F0E0" roughness={0.7} />
    </mesh>

    {/* Mihrab niche on back wall */}
    <mesh position={[0, 0.6, -2.45]}>
      <boxGeometry args={[0.8, 1.5, 0.08]} />
      <meshStandardMaterial color={GREEN_DARK} roughness={0.6} />
    </mesh>
    <mesh position={[0, 0.6, -2.42]}>
      <boxGeometry args={[0.65, 1.3, 0.04]} />
      <meshStandardMaterial color={GREEN} roughness={0.5} />
    </mesh>
    {/* Mihrab arch top */}
    {Array.from({ length: 7 }).map((_, i) => {
      const angle = (Math.PI / 6) * i - Math.PI / 2 + Math.PI / 6;
      const mx = Math.cos(angle) * 0.3;
      const my = 1.35 + Math.sin(angle) * 0.25;
      return (
        <mesh key={i} position={[mx, my, -2.42]}>
          <boxGeometry args={[0.1, 0.06, 0.04]} />
          <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.4} />
        </mesh>
      );
    })}
  </group>
));

// ============================================================
// GREEN DOME
// ============================================================
const MosqueDome = memo(() => (
  <group position={[0, 2.8, -1.8]}>
    {/* Dome drum (cylinder base) */}
    <mesh position={[0, -0.15, 0]}>
      <cylinderGeometry args={[0.7, 0.75, 0.3, 16]} />
      <meshStandardMaterial color={CREAM} roughness={0.4} />
    </mesh>
    {/* Dome gold ring */}
    <mesh position={[0, -0.02, 0]}>
      <torusGeometry args={[0.71, 0.018, 6, 24]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Main dome */}
    <mesh>
      <sphereGeometry args={[0.7, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color={GREEN} roughness={0.35} />
    </mesh>
    {/* Dome tip finial */}
    <mesh position={[0, 0.7, 0]}>
      <cylinderGeometry args={[0.01, 0.01, 0.15, 6]} />
      <meshStandardMaterial color={GOLD} roughness={0.2} metalness={0.6} />
    </mesh>
    {/* Crescent moon */}
    <mesh position={[0, 0.82, 0]} rotation={[0, 0, 0.1]}>
      <torusGeometry args={[0.06, 0.012, 6, 14, Math.PI * 1.3]} />
      <meshStandardMaterial color={GOLD} roughness={0.2} metalness={0.7} />
    </mesh>
    {/* Star above crescent */}
    <mesh position={[0.04, 0.9, 0]}>
      <sphereGeometry args={[0.018, 6, 6]} />
      <meshStandardMaterial color={GOLD} roughness={0.2} metalness={0.7} />
    </mesh>
  </group>
));

// ============================================================
// MINARETS
// ============================================================
const Minaret = memo(({ x }) => (
  <group position={[x, 0, -1.8]}>
    {/* Base */}
    <mesh position={[0, -0.8, 0]}>
      <boxGeometry args={[0.35, 0.4, 0.35]} />
      <meshStandardMaterial color="#E0D8C8" roughness={0.5} />
    </mesh>
    {/* Main tower */}
    <mesh position={[0, 0.5, 0]}>
      <cylinderGeometry args={[0.1, 0.14, 2.2, 8]} />
      <meshStandardMaterial color={CREAM} roughness={0.4} />
    </mesh>
    {/* Balcony ring */}
    <mesh position={[0, 1.4, 0]}>
      <cylinderGeometry args={[0.2, 0.18, 0.08, 10]} />
      <meshStandardMaterial color={CREAM} roughness={0.4} />
    </mesh>
    <mesh position={[0, 1.38, 0]}>
      <torusGeometry args={[0.19, 0.012, 6, 16]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Upper tower */}
    <mesh position={[0, 1.8, 0]}>
      <cylinderGeometry args={[0.06, 0.1, 0.7, 8]} />
      <meshStandardMaterial color={CREAM} roughness={0.4} />
    </mesh>
    {/* Minaret dome */}
    <mesh position={[0, 2.2, 0]}>
      <sphereGeometry args={[0.09, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color={GREEN} roughness={0.35} />
    </mesh>
    {/* Crescent */}
    <mesh position={[0, 2.35, 0]} rotation={[0, 0, 0.1]}>
      <torusGeometry args={[0.035, 0.008, 6, 10, Math.PI * 1.3]} />
      <meshStandardMaterial color={GOLD} roughness={0.2} metalness={0.6} />
    </mesh>
  </group>
));

// ============================================================
// HANGING LANTERNS
// ============================================================
const Lantern = ({ position, delay = 0 }) => {
  const lanternRef = useRef();

  useFrame((state) => {
    if (!lanternRef.current) return;
    const t = state.clock.elapsedTime + delay;
    // Gentle swing
    lanternRef.current.rotation.z = Math.sin(t * 0.8) * 0.06;
    lanternRef.current.rotation.x = Math.sin(t * 0.6) * 0.03;
  });

  return (
    <group ref={lanternRef} position={position}>
      {/* Chain */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.3, 4]} />
        <meshStandardMaterial color={GOLD_DARK} roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Lantern body */}
      <mesh>
        <cylinderGeometry args={[0.06, 0.05, 0.16, 6]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.4} transparent opacity={0.9} />
      </mesh>
      {/* Glass glow */}
      <mesh>
        <cylinderGeometry args={[0.045, 0.035, 0.12, 6]} />
        <meshBasicMaterial color="#FEF3C7" transparent opacity={0.6} />
      </mesh>
      {/* Bottom tip */}
      <mesh position={[0, -0.1, 0]}>
        <coneGeometry args={[0.04, 0.06, 6]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Light */}
      <pointLight position={[0, 0, 0]} intensity={0.15} color="#FDE68A" distance={2} />
    </group>
  );
};

// ============================================================
// ORNATE FLOOR
// ============================================================
const MosqueFloor = memo(() => (
  <group>
    {/* Main marble floor */}
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial color={MARBLE} roughness={0.25} />
    </mesh>
    {/* Checkerboard pattern */}
    {Array.from({ length: 6 }).map((_, row) =>
      Array.from({ length: 6 }).map((_, col) => (
        <mesh
          key={`${row}-${col}`}
          position={[-2.5 + col * 1, -0.99, -2.5 + row * 1]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            color={(row + col) % 2 === 0 ? '#E8E0D0' : MARBLE}
            roughness={0.25}
          />
        </mesh>
      ))
    )}
    {/* Central decorative diamond on floor */}
    <mesh position={[0, -0.985, -1.0]} rotation={[-Math.PI / 2, Math.PI / 4, 0]}>
      <planeGeometry args={[0.8, 0.8]} />
      <meshStandardMaterial color={GREEN_DARK} roughness={0.5} />
    </mesh>
    {/* Steps leading up to entrance */}
    <mesh position={[0, -1.05, 0.8]}>
      <boxGeometry args={[2.2, 0.1, 0.4]} />
      <meshStandardMaterial color="#E0D8C8" roughness={0.4} />
    </mesh>
    <mesh position={[0, -1.12, 1.1]}>
      <boxGeometry args={[2.4, 0.1, 0.3]} />
      <meshStandardMaterial color="#D8CFC0" roughness={0.4} />
    </mesh>
  </group>
));

// ============================================================
// PRAYER CARPET (visible inside through arch)
// ============================================================
const PrayerCarpet = memo(() => (
  <group position={[0, -0.98, -1.8]}>
    {/* Main carpet */}
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2.5, 1.8]} />
      <meshStandardMaterial color={GREEN_DARK} roughness={0.8} />
    </mesh>
    {/* Inner border */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.002]}>
      <planeGeometry args={[2.2, 1.5]} />
      <meshStandardMaterial color="#047857" roughness={0.7} />
    </mesh>
    {/* Mihrab arch pattern on carpet */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0.004]}>
      <circleGeometry args={[0.4, 12, 0, Math.PI]} />
      <meshStandardMaterial color={GREEN} roughness={0.6} />
    </mesh>
    {/* Gold border line */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.005]}>
      <planeGeometry args={[2.3, 0.03]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.4} />
    </mesh>
  </group>
));

// ============================================================
// ENTERING CHARACTER - says dua then walks in through archway
// ============================================================
const EnteringCharacter = memo(() => {
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

  // Arch opening at z=-0.5. Outside: z>0. Inside: z<-0.5.
  // Face is at +Z on model. rotation.y=0 → face toward camera (+Z).
  // To walk INTO mosque (toward -Z), we need rotation.y=PI (face toward -Z).

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    if (phase < 0.06) {
      // Standing outside mosque, facing camera
      groupRef.current.position.x = 0;
      groupRef.current.position.z = 1.3;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.1;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.18) {
      // Raise hands for dua (before entering)
      const p = smooth((phase - 0.06) / 0.12);
      groupRef.current.position.x = 0;
      groupRef.current.position.z = 1.3;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.1;

      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.3, -0.22, p),
        THREE.MathUtils.lerp(-0.15, 0.3, p),
        THREE.MathUtils.lerp(0.15, 0.3, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.22, p),
        THREE.MathUtils.lerp(-0.15, 0.3, p),
        THREE.MathUtils.lerp(0.15, 0.3, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.2, 0, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.2, 0, p);
    } else if (phase < 0.38) {
      // Dua pose - reciting entering mosque dua
      groupRef.current.position.x = 0;
      groupRef.current.position.z = 1.3;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.1;

      const sway = Math.sin(t * 1.2) * 0.012;
      leftHandRef.current = [-0.22 + sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      rightHandRef.current = [0.22 - sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      fingerCurlL.current = 0;
      fingerCurlR.current = 0;
    } else if (phase < 0.48) {
      // Lower hands + turn to face the mosque (rotation.y → PI)
      const p = smooth((phase - 0.38) / 0.1);
      groupRef.current.position.x = 0;
      groupRef.current.position.z = 1.3;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(0.1, Math.PI, p);

      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.22, -0.3, p),
        THREE.MathUtils.lerp(0.3, -0.15, p),
        THREE.MathUtils.lerp(0.3, 0.15, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.22, 0.3, p),
        THREE.MathUtils.lerp(0.3, -0.15, p),
        THREE.MathUtils.lerp(0.3, 0.15, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0, 0.2, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0, 0.2, p);
    } else if (phase < 0.78) {
      // Walk into mosque (z: 1.3 → -1.2), facing -Z (rotation.y=PI)
      const p = smooth((phase - 0.48) / 0.3);
      groupRef.current.position.x = 0;
      groupRef.current.position.z = THREE.MathUtils.lerp(1.3, -1.2, p);
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(p * Math.PI * 5)) * 0.025;
      groupRef.current.rotation.y = Math.PI;

      // Arm swing while walking
      const walkT = p * Math.PI * 5;
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
    } else if (phase < 0.88) {
      // Arrived inside, looking around in awe
      groupRef.current.position.x = 0;
      groupRef.current.position.z = -1.2;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = Math.PI;

      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else {
      // Hold inside (loop will reset)
      groupRef.current.position.x = 0;
      groupRef.current.position.z = -1.2;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = Math.PI;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    }

    // Head
    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 2) * 0.005;
      const isDua = phase > 0.18 && phase < 0.38;
      const isInside = phase > 0.78 && phase < 0.88;
      headRef.current.rotation.x = isDua ? -0.08 : 0;
      headRef.current.rotation.y = isInside
        ? Math.sin((phase - 0.78) / 0.1 * Math.PI) * 0.4
        : isDua ? 0 : Math.sin(t * 0.7) * 0.06;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      const isDua = phase > 0.18 && phase < 0.38;
      mouthOpenRef.current.scale.y = isDua ? 0.4 + Math.sin(t * 2.5) * 0.12 : 0.35;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 1.3]}>
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
});

// ============================================================
// LEAVING CHARACTER - walks out, looks back at mosque
// ============================================================
const LeavingCharacter = memo(() => {
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

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    if (phase < 0.06) {
      // Standing inside mosque, facing camera
      groupRef.current.position.x = 0;
      groupRef.current.position.z = -1.0;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.1;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.18) {
      // Raise hands for dua before leaving
      const p = smooth((phase - 0.06) / 0.12);
      groupRef.current.rotation.y = 0.1;

      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.3, -0.22, p),
        THREE.MathUtils.lerp(-0.15, 0.3, p),
        THREE.MathUtils.lerp(0.15, 0.3, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.22, p),
        THREE.MathUtils.lerp(-0.15, 0.3, p),
        THREE.MathUtils.lerp(0.15, 0.3, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.2, 0, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.2, 0, p);
    } else if (phase < 0.38) {
      // Dua pose
      const sway = Math.sin(t * 1.2) * 0.012;
      leftHandRef.current = [-0.22 + sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      rightHandRef.current = [0.22 - sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      fingerCurlL.current = 0;
      fingerCurlR.current = 0;
    } else if (phase < 0.48) {
      // Lower hands, stay facing camera (walking toward +Z = toward camera = out)
      const p = smooth((phase - 0.38) / 0.1);
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.22, -0.3, p),
        THREE.MathUtils.lerp(0.3, -0.15, p),
        THREE.MathUtils.lerp(0.3, 0.15, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.22, 0.3, p),
        THREE.MathUtils.lerp(0.3, -0.15, p),
        THREE.MathUtils.lerp(0.3, 0.15, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0, 0.2, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0, 0.2, p);
      groupRef.current.rotation.y = 0.1;
    } else if (phase < 0.78) {
      // Walk out (z: -1.0 → 1.5), face toward camera (rotation.y≈0)
      const p = smooth((phase - 0.48) / 0.3);
      groupRef.current.position.z = THREE.MathUtils.lerp(-1.0, 1.5, p);
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(p * Math.PI * 5)) * 0.025;
      groupRef.current.rotation.y = 0;

      const walkT = p * Math.PI * 5;
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
    } else {
      // Standing outside, pause
      groupRef.current.position.z = 1.5;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 2) * 0.005;
      const isDua = phase > 0.18 && phase < 0.38;
      const isOutside = phase > 0.78;
      // Look back at mosque briefly when outside
      headRef.current.rotation.x = isDua ? -0.08 : 0;
      headRef.current.rotation.y = isOutside
        ? Math.sin((phase - 0.78) * 10) * 0.3
        : isDua ? 0 : Math.sin(t * 0.7) * 0.06;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      const isDua = phase > 0.18 && phase < 0.38;
      mouthOpenRef.current.scale.y = isDua ? 0.4 + Math.sin(t * 2.5) * 0.12 : 0.35;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, -1.0]}>
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
});

// ============================================================
// MOSQUE WARM GLOW LIGHTING
// ============================================================
const MosqueGlow = memo(() => {
  const glowRef = useRef();

  useFrame((state) => {
    if (!glowRef.current) return;
    const t = state.clock.elapsedTime;
    glowRef.current.intensity = 0.5 + Math.sin(t * 0.5) * 0.1;
  });

  return (
    <>
      <pointLight ref={glowRef} position={[0, 1.8, -1.2]} intensity={0.5} color="#FDE68A" distance={6} />
      <pointLight position={[0, 2.5, -0.5]} intensity={0.3} color={GOLD} distance={5} />
      {/* Interior warm glow visible through arch */}
      <pointLight position={[0, 0.5, -2.0]} intensity={0.4} color="#FEF3C7" distance={4} />
    </>
  );
});

// ============================================================
// FULL MOSQUE SCENE
// ============================================================
const MosqueScene = memo(({ variant = 'enter', isActive }) => (
  <>
    <SceneLights warmth={0.6} />
    <MosqueGlow />
    <MosqueFloor />
    <Pillar x={-1.0} />
    <Pillar x={1.0} />
    <IslamicArch />
    <MosqueWalls />
    <MosqueDome />
    <Minaret x={-2.2} />
    <Minaret x={2.2} />
    <PrayerCarpet />

    {/* Hanging lanterns inside */}
    <Lantern position={[-0.5, 1.6, -1.2]} delay={0} />
    <Lantern position={[0.5, 1.6, -1.2]} delay={0.5} />
    <Lantern position={[0, 1.8, -0.3]} delay={1.0} />

    {variant === 'enter' ? <EnteringCharacter /> : <LeavingCharacter />}

    <Sparkles count={8} />
  </>
));

export default MosqueScene;
