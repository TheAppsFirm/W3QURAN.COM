/**
 * MarketScene.jsx
 * 3D market/souq scene - market stalls, child walking through.
 * Used for dua when entering the market.
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
// MARKET STALLS
// ============================================================
const MarketStall = memo(({ position, awningColor = '#EF4444', items = [] }) => (
  <group position={position}>
    {/* Stall counter */}
    <mesh position={[0, -0.4, 0]}>
      <boxGeometry args={[1.0, 0.08, 0.5]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Stall legs */}
    {[[-0.45, -0.72, -0.2], [0.45, -0.72, -0.2], [-0.45, -0.72, 0.2], [0.45, -0.72, 0.2]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.025, 0.025, 0.55, 4]} />
        <meshStandardMaterial color="#8B6540" roughness={0.6} />
      </mesh>
    ))}
    {/* Awning */}
    <mesh position={[0, 0.1, 0.05]} rotation={[0.15, 0, 0]}>
      <boxGeometry args={[1.1, 0.03, 0.65]} />
      <meshStandardMaterial color={awningColor} roughness={0.7} />
    </mesh>
    {/* Awning supports */}
    <mesh position={[-0.48, -0.15, -0.2]}>
      <cylinderGeometry args={[0.02, 0.02, 0.55, 4]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    <mesh position={[0.48, -0.15, -0.2]}>
      <cylinderGeometry args={[0.02, 0.02, 0.55, 4]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Awning scalloped edge */}
    {Array.from({ length: 6 }).map((_, i) => (
      <mesh key={`s-${i}`} position={[-0.4 + i * 0.16, 0.06, 0.35]}>
        <sphereGeometry args={[0.04, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={awningColor} roughness={0.7} />
      </mesh>
    ))}
    {/* Items on display */}
    {items.map(({ pos, color, size }, i) => (
      <mesh key={`item-${i}`} position={pos}>
        <sphereGeometry args={[size || 0.04, 8, 8]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
    ))}
  </group>
));

const FruitStall = memo(({ position }) => (
  <MarketStall
    position={position}
    awningColor="#EF4444"
    items={[
      { pos: [-0.3, -0.32, 0], color: '#EF4444', size: 0.05 },
      { pos: [-0.15, -0.32, 0.05], color: '#EF4444', size: 0.045 },
      { pos: [-0.22, -0.32, -0.08], color: '#DC2626', size: 0.04 },
      { pos: [0.05, -0.32, 0], color: '#F59E0B', size: 0.06 },
      { pos: [0.2, -0.32, 0.04], color: '#F59E0B', size: 0.055 },
      { pos: [0.35, -0.32, -0.02], color: '#22C55E', size: 0.05 },
      { pos: [0.28, -0.32, 0.08], color: '#16A34A', size: 0.04 },
    ]}
  />
));

const SpiceStall = memo(({ position }) => (
  <group position={position}>
    <MarketStall position={[0, 0, 0]} awningColor="#D97706" items={[]} />
    {/* Spice bowls */}
    {[
      { x: -0.3, color: '#DC2626' },
      { x: -0.1, color: '#F59E0B' },
      { x: 0.1, color: '#92400E' },
      { x: 0.3, color: '#15803D' },
    ].map(({ x, color }, i) => (
      <group key={i} position={[x, -0.34, 0]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.07, 0.04, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.03, 0]}>
          <coneGeometry args={[0.055, 0.06, 8]} />
          <meshStandardMaterial color={color} roughness={0.8} />
        </mesh>
      </group>
    ))}
  </group>
));

const ClothStall = memo(({ position }) => (
  <group position={position}>
    <MarketStall position={[0, 0, 0]} awningColor="#7C3AED" items={[]} />
    {/* Hanging fabrics */}
    {[
      { x: -0.3, color: '#BFDBFE' },
      { x: -0.1, color: '#FDE68A' },
      { x: 0.1, color: '#BBF7D0' },
      { x: 0.3, color: '#FECDD3' },
    ].map(({ x, color }, i) => (
      <mesh key={i} position={[x, -0.15, -0.15]}>
        <boxGeometry args={[0.12, 0.45, 0.02]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
    ))}
  </group>
));

const Ground = memo(() => (
  <group>
    {/* Souq floor - stone tiles */}
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial color="#D4A574" roughness={0.8} />
    </mesh>
    {/* Stone tile pattern */}
    {Array.from({ length: 6 }).map((_, r) =>
      Array.from({ length: 6 }).map((_, c) => (
        <mesh key={`${r}-${c}`} position={[-2.5 + c * 1, -0.99, -2.5 + r * 1]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.92, 0.92]} />
          <meshStandardMaterial color={(r + c) % 2 === 0 ? '#C8A882' : '#D4A574'} roughness={0.7} />
        </mesh>
      ))
    )}
  </group>
));

const SouqArch = memo(() => (
  <group position={[0, 1.5, -2]}>
    {/* Arch spanning the walkway */}
    <mesh position={[-1.8, -0.5, 0]}>
      <boxGeometry args={[0.15, 2, 0.15]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.5} />
    </mesh>
    <mesh position={[1.8, -0.5, 0]}>
      <boxGeometry args={[0.15, 2, 0.15]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.5} />
    </mesh>
    {/* Arch top */}
    {Array.from({ length: 7 }).map((_, i) => {
      const angle = (Math.PI / 6) * i - Math.PI / 2 + Math.PI / 6;
      return (
        <mesh key={i} position={[Math.cos(angle) * 1.6, 0.5 + Math.sin(angle) * 0.6, 0]}>
          <boxGeometry args={[0.5, 0.12, 0.15]} />
          <meshStandardMaterial color="#E8D5B7" roughness={0.5} />
        </mesh>
      );
    })}
  </group>
));

// ============================================================
// WALKING CHARACTER
// ============================================================
const WalkingCharacter = () => {
  const groupRef = useRef();
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.4, 0.1]);
  const rightHandRef = useRef([0.3, -0.4, 0.1]);
  const fingerCurlL = useRef(0.15);
  const fingerCurlR = useRef(0.15);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    // Walk back and forth through market
    if (phase < 0.45) {
      const p = smooth(phase / 0.45);
      groupRef.current.position.x = THREE.MathUtils.lerp(-1.5, 1.5, p);
      groupRef.current.rotation.y = Math.PI * 0.5;

      const walkT = p * Math.PI * 6;
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(walkT)) * 0.02;

      leftHandRef.current = [
        -0.3,
        -0.4 + Math.abs(Math.sin(walkT + Math.PI)) * 0.06,
        0.1 + Math.sin(walkT + Math.PI) * 0.1,
      ];
      rightHandRef.current = [
        0.3,
        -0.4 + Math.abs(Math.sin(walkT)) * 0.06,
        0.1 + Math.sin(walkT) * 0.1,
      ];
    } else if (phase < 0.55) {
      // Stop and look at stall
      groupRef.current.position.x = 1.5;
      groupRef.current.position.y = -0.1;
      const p = (phase - 0.45) / 0.1;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(Math.PI * 0.5, Math.PI, smooth(p));
      leftHandRef.current = [-0.3, -0.4, 0.1];
      rightHandRef.current = [0.3, -0.4, 0.1];
    } else if (phase < 0.95) {
      // Walk back
      const p = smooth((phase - 0.55) / 0.4);
      groupRef.current.position.x = THREE.MathUtils.lerp(1.5, -1.5, p);
      groupRef.current.rotation.y = -Math.PI * 0.5;

      const walkT = p * Math.PI * 6;
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(walkT)) * 0.02;

      leftHandRef.current = [
        -0.3,
        -0.4 + Math.abs(Math.sin(walkT)) * 0.06,
        0.1 + Math.sin(walkT) * 0.1,
      ];
      rightHandRef.current = [
        0.3,
        -0.4 + Math.abs(Math.sin(walkT + Math.PI)) * 0.06,
        0.1 + Math.sin(walkT + Math.PI) * 0.1,
      ];
    } else {
      // Brief pause
      groupRef.current.position.x = -1.5;
      groupRef.current.rotation.y = Math.PI * 0.5;
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY;
      // Looking around at stalls
      headRef.current.rotation.y = Math.sin(t * 0.8) * 0.2;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = 0.3;
      mouthOpenRef.current.scale.x = 1.15;
    }
  });

  return (
    <group ref={groupRef} position={[-1.5, -0.1, 0.5]}>
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
// FULL MARKET SCENE
// ============================================================
const MarketScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.6} />
    <pointLight position={[-1, 1.5, 1]} intensity={0.4} color="#FDE68A" distance={5} />
    <pointLight position={[1, 1.5, 1]} intensity={0.4} color="#FDE68A" distance={5} />
    <Ground />
    <SouqArch />

    {/* Stalls on both sides */}
    <FruitStall position={[-1.2, 0, -1.2]} />
    <SpiceStall position={[0.5, 0, -1.2]} />
    <ClothStall position={[2.0, 0, -1.2]} />

    <WalkingCharacter />

    <Sparkles count={6} />
  </>
));

export default MarketScene;
