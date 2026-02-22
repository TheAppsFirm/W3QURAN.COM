/**
 * BedroomScene.jsx
 * 3D bedroom scene with 2 variants:
 * - sleep: child lying down, gentle breathing animation
 * - wake: child sitting up, stretching arms
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  WHITE_CLOTH, CLOTH_SHADOW,
  EmiratiHeadStatic, EmiratiBody, EmiratiBodyStanding,
  StaticArm, AnimatedArm,
  SceneLights, Sparkles
} from './SharedAvatar';

// ============================================================
// BEDROOM FURNITURE
// ============================================================
const Bed = memo(() => (
  <group position={[0, -0.55, 0]}>
    {/* Mattress */}
    <mesh position={[0, 0.1, 0]}>
      <boxGeometry args={[1.4, 0.2, 0.9]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.8} />
    </mesh>
    {/* Bed frame */}
    <mesh position={[0, -0.05, 0]}>
      <boxGeometry args={[1.5, 0.1, 1.0]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
    {/* Headboard */}
    <mesh position={[-0.7, 0.45, 0]}>
      <boxGeometry args={[0.08, 0.8, 1.0]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Headboard decorative top */}
    <mesh position={[-0.7, 0.85, 0]}>
      <boxGeometry args={[0.1, 0.04, 1.04]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Bed legs */}
    {[[-0.65, -0.25, -0.4], [-0.65, -0.25, 0.4], [0.65, -0.25, -0.4], [0.65, -0.25, 0.4]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.035, 0.035, 0.4, 6]} />
        <meshStandardMaterial color="#6B4F2A" roughness={0.7} />
      </mesh>
    ))}
  </group>
));

const Pillow = memo(({ position = [-0.4, -0.32, 0] }) => (
  <group position={position}>
    <mesh>
      <boxGeometry args={[0.3, 0.1, 0.5]} />
      <meshStandardMaterial color="#F1F5F9" roughness={0.6} />
    </mesh>
    {/* Pillow puff */}
    <mesh position={[0, 0.04, 0]} scale={[1.05, 0.6, 1.05]}>
      <sphereGeometry args={[0.16, 12, 8]} />
      <meshStandardMaterial color="#FAFAFA" roughness={0.5} />
    </mesh>
  </group>
));

const Blanket = memo(({ position = [0.15, -0.35, 0] }) => (
  <group position={position}>
    {/* Main blanket drape */}
    <mesh>
      <boxGeometry args={[0.9, 0.06, 0.85]} />
      <meshStandardMaterial color="#7C3AED" roughness={0.7} />
    </mesh>
    {/* Blanket fold at top */}
    <mesh position={[-0.35, 0.04, 0]}>
      <boxGeometry args={[0.25, 0.08, 0.88]} />
      <meshStandardMaterial color="#8B5CF6" roughness={0.6} />
    </mesh>
    {/* Pattern stripe */}
    <mesh position={[0.1, 0.035, 0]}>
      <boxGeometry args={[0.15, 0.005, 0.86]} />
      <meshStandardMaterial color="#DDD6FE" roughness={0.6} />
    </mesh>
  </group>
));

const NightStand = memo(() => (
  <group position={[1.0, -0.55, 0]}>
    <mesh position={[0, 0.2, 0]}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Drawer knob */}
    <mesh position={[0, 0.2, 0.21]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Lamp base */}
    <mesh position={[0, 0.45, 0]}>
      <cylinderGeometry args={[0.06, 0.08, 0.05, 8]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
    {/* Lamp shade */}
    <mesh position={[0, 0.6, 0]}>
      <cylinderGeometry args={[0.08, 0.12, 0.2, 8]} />
      <meshStandardMaterial color="#FDE68A" roughness={0.5} transparent opacity={0.8} />
    </mesh>
  </group>
));

const MoonWindow = memo(() => (
  <group position={[-1.5, 0.5, -0.8]}>
    {/* Window frame */}
    <mesh>
      <boxGeometry args={[0.05, 0.8, 0.8]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Night sky */}
    <mesh position={[0.01, 0, 0]}>
      <boxGeometry args={[0.02, 0.7, 0.7]} />
      <meshStandardMaterial color="#1E1B4B" roughness={0.9} />
    </mesh>
    {/* Moon */}
    <mesh position={[0.02, 0.15, 0.1]}>
      <circleGeometry args={[0.1, 16]} />
      <meshBasicMaterial color="#FDE68A" />
    </mesh>
    {/* Stars */}
    {[[0.03, 0.25, -0.2], [0.03, -0.1, -0.25], [0.03, 0.05, 0.25]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <circleGeometry args={[0.015, 6]} />
        <meshBasicMaterial color="#FBBF24" />
      </mesh>
    ))}
    {/* Window cross bars */}
    <mesh position={[0.025, 0, 0]}>
      <boxGeometry args={[0.02, 0.02, 0.72]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    <mesh position={[0.025, 0, 0]}>
      <boxGeometry args={[0.02, 0.72, 0.02]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
  </group>
));

const Room = memo(() => (
  <group>
    {/* Floor */}
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#C8A882" roughness={0.8} />
    </mesh>
    {/* Back wall */}
    <mesh position={[0, 0.5, -1.5]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#E8E0D8" roughness={0.9} />
    </mesh>
    {/* Side wall */}
    <mesh position={[-1.8, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#EDE5DD" roughness={0.9} />
    </mesh>
  </group>
));

// ============================================================
// SLEEPING CHARACTER - lying down with breathing
// ============================================================
const SleepingCharacter = () => {
  const groupRef = useRef();
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const blanketRef = useRef();
  const chestRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Gentle breathing
    const breath = Math.sin(t * 1.0) * 0.012;

    if (headRef.current) {
      // Slight head movement during sleep
      headRef.current.rotation.z = Math.sin(t * 0.3) * 0.03;
      headRef.current.position.y = 0.28 + breath * 0.3;
    }

    if (mouthOpenRef.current) {
      // Gentle mouth opening/closing (breathing)
      mouthOpenRef.current.scale.y = 0.3 + Math.sin(t * 1.0) * 0.15;
      mouthOpenRef.current.scale.x = 0.8;
    }

    if (blanketRef.current) {
      // Blanket rises with breathing
      blanketRef.current.position.y = -0.35 + breath;
    }

    if (chestRef.current) {
      chestRef.current.scale.y = 1.0 + Math.sin(t * 1.0) * 0.03;
    }
  });

  // Lying-down arm positions
  const leftShoulderPos = [-0.05, 0.0, -0.2];
  const leftElbow = [-0.05, -0.15, -0.35];
  const leftHand = [-0.05, -0.2, -0.5];

  const rightShoulderPos = [-0.05, 0.0, 0.2];
  const rightElbow = [-0.05, -0.15, 0.35];
  const rightHand = [-0.05, -0.2, 0.5];

  return (
    <group ref={groupRef} position={[0.15, -0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
      {/* Body lying down */}
      <group ref={chestRef}>
        <mesh>
          <cylinderGeometry args={[0.18, 0.22, 0.5, 16]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
        </mesh>
        {/* Collar */}
        <mesh position={[0, 0.26, 0.06]}>
          <boxGeometry args={[0.1, 0.03, 0.05]} />
          <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
        </mesh>
        {/* Lower body */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.22, 0.25, 0.55, 12]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
        </mesh>
      </group>

      {/* Head on pillow */}
      <group ref={headRef} position={[0, 0.28, 0]}>
        <group scale={0.75}>
          <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
        </group>
      </group>

      {/* Arms at sides */}
      <StaticArm shoulderPos={leftShoulderPos} elbowPos={leftElbow} handPos={leftHand} />
      <StaticArm shoulderPos={rightShoulderPos} elbowPos={rightElbow} handPos={rightHand} />
    </group>
  );
};

// ============================================================
// WAKING CHARACTER - sitting up, stretching
// ============================================================
const WakingCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([0.0, 0.5, 0.1]);
  const rightHandRef = useRef([0.0, 0.5, 0.1]);
  const fingerCurlL = useRef(0.3);
  const fingerCurlR = useRef(0.3);
  const bodyRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 5;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    // Stretching animation
    if (phase < 0.3) {
      // Sitting up, arms begin to rise
      const p = smooth(phase / 0.3);
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.3, -0.45, p),
        THREE.MathUtils.lerp(0.0, 0.55, p),
        THREE.MathUtils.lerp(0.1, 0.15, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.45, p),
        THREE.MathUtils.lerp(0.0, 0.55, p),
        THREE.MathUtils.lerp(0.1, 0.15, p),
      ];
      fingerCurlL.current = 0.3;
      fingerCurlR.current = 0.3;
    } else if (phase < 0.6) {
      // Full stretch with gentle sway
      const p = (phase - 0.3) / 0.3;
      const sway = Math.sin(p * Math.PI * 2) * 0.05;
      leftHandRef.current = [-0.45 + sway, 0.55 + Math.sin(p * Math.PI) * 0.08, 0.15];
      rightHandRef.current = [0.45 - sway, 0.55 + Math.sin(p * Math.PI) * 0.08, 0.15];
      fingerCurlL.current = 0.6 + Math.sin(p * Math.PI) * 0.3;
      fingerCurlR.current = 0.6 + Math.sin(p * Math.PI) * 0.3;
    } else {
      // Arms come down
      const p = smooth((phase - 0.6) / 0.4);
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.45, -0.3, p),
        THREE.MathUtils.lerp(0.55, 0.0, p),
        THREE.MathUtils.lerp(0.15, 0.1, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.45, 0.3, p),
        THREE.MathUtils.lerp(0.55, 0.0, p),
        THREE.MathUtils.lerp(0.15, 0.1, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.6, 0.3, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.6, 0.3, p);
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.5) * 0.01;
      // Yawning tilt
      headRef.current.rotation.x = Math.sin(t * 0.8) * 0.06 - 0.03;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.03;
    }

    if (mouthOpenRef.current) {
      // Yawning
      const yawnPhase = (t % 4) / 4;
      if (yawnPhase < 0.15) {
        const p = smooth(yawnPhase / 0.15);
        mouthOpenRef.current.scale.y = THREE.MathUtils.lerp(0.3, 1.2, p);
        mouthOpenRef.current.scale.x = THREE.MathUtils.lerp(1.0, 0.9, p);
      } else if (yawnPhase < 0.35) {
        mouthOpenRef.current.scale.y = 1.2 + Math.sin(t * 3) * 0.1;
        mouthOpenRef.current.scale.x = 0.9;
      } else if (yawnPhase < 0.5) {
        const p = smooth((yawnPhase - 0.35) / 0.15);
        mouthOpenRef.current.scale.y = THREE.MathUtils.lerp(1.2, 0.3, p);
        mouthOpenRef.current.scale.x = THREE.MathUtils.lerp(0.9, 1.0, p);
      } else {
        mouthOpenRef.current.scale.y = 0.3;
        mouthOpenRef.current.scale.x = 1.0;
      }
    }
  });

  return (
    <group>
      <EmiratiBody />
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
// FULL BEDROOM SCENE
// ============================================================
const BedroomScene = memo(({ variant = 'sleep', isActive }) => {
  const isSleeping = variant === 'sleep';

  return (
    <>
      <SceneLights warmth={isSleeping ? 0.2 : 0.6} />
      {/* Dim the scene for sleeping */}
      {isSleeping && (
        <pointLight position={[1.0, 0.6, 0]} intensity={0.4} color="#FDE68A" distance={3} />
      )}
      <Room />
      <Bed />
      <Pillow position={isSleeping ? [-0.4, -0.32, 0] : [-0.45, -0.32, 0]} />
      {isSleeping && <Blanket />}
      <NightStand />
      <MoonWindow />

      {isSleeping ? (
        <group position={[0.05, 0.15, 0]}>
          <SleepingCharacter />
        </group>
      ) : (
        <group position={[-0.2, -0.15, 0.3]}>
          <WakingCharacter />
        </group>
      )}

      <Sparkles count={isSleeping ? 3 : 6} />
    </>
  );
});

export default BedroomScene;
