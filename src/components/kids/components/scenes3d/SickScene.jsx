/**
 * SickScene.jsx
 * 3D sick scene with 2 variants:
 * - self: child sick in bed with thermometer
 * - visiting: child visiting a sick person in bed
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  SKIN, WHITE_CLOTH,
  EmiratiHeadStatic, EmiratiBody, EmiratiBodyStanding,
  AnimatedArm,
  SceneLights, Sparkles
} from './SharedAvatar';

// ============================================================
// ROOM ELEMENTS
// ============================================================
const SickBed = memo(() => (
  <group position={[0.3, -0.55, -0.3]}>
    {/* Mattress */}
    <mesh position={[0, 0.1, 0]}>
      <boxGeometry args={[1.4, 0.18, 0.8]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.8} />
    </mesh>
    {/* Bed frame */}
    <mesh position={[0, -0.02, 0]}>
      <boxGeometry args={[1.5, 0.08, 0.9]} />
      <meshStandardMaterial color="#F1F5F9" roughness={0.3} />
    </mesh>
    {/* Headboard */}
    <mesh position={[-0.7, 0.45, 0]}>
      <boxGeometry args={[0.06, 0.75, 0.9]} />
      <meshStandardMaterial color="#F1F5F9" roughness={0.3} />
    </mesh>
    {/* Bed legs */}
    {[[-0.65, -0.25, -0.35], [-0.65, -0.25, 0.35], [0.65, -0.25, -0.35], [0.65, -0.25, 0.35]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 6]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.3} />
      </mesh>
    ))}
    {/* Pillow */}
    <group position={[-0.4, 0.28, 0]}>
      <mesh scale={[1, 0.5, 1]}>
        <boxGeometry args={[0.28, 0.12, 0.45]} />
        <meshStandardMaterial color="white" roughness={0.5} />
      </mesh>
    </group>
    {/* Blanket */}
    <mesh position={[0.1, 0.25, 0]}>
      <boxGeometry args={[0.85, 0.06, 0.75]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.7} />
    </mesh>
    <mesh position={[-0.2, 0.28, 0]}>
      <boxGeometry args={[0.2, 0.08, 0.78]} />
      <meshStandardMaterial color="#93C5FD" roughness={0.6} />
    </mesh>
  </group>
));

const NightTable = memo(() => (
  <group position={[1.2, -0.55, -0.3]}>
    <mesh position={[0, 0.2, 0]}>
      <boxGeometry args={[0.35, 0.35, 0.35]} />
      <meshStandardMaterial color="#F1F5F9" roughness={0.3} />
    </mesh>
    {/* Medicine bottle */}
    <mesh position={[-0.08, 0.42, 0]}>
      <cylinderGeometry args={[0.025, 0.025, 0.08, 6]} />
      <meshStandardMaterial color="#EF4444" roughness={0.4} />
    </mesh>
    <mesh position={[-0.08, 0.47, 0]}>
      <cylinderGeometry args={[0.015, 0.028, 0.02, 6]} />
      <meshStandardMaterial color="white" roughness={0.4} />
    </mesh>
    {/* Water glass */}
    <mesh position={[0.08, 0.42, 0]}>
      <cylinderGeometry args={[0.03, 0.035, 0.1, 8]} />
      <meshStandardMaterial color="#BFDBFE" transparent opacity={0.4} roughness={0.1} />
    </mesh>
    <mesh position={[0.08, 0.38, 0]}>
      <cylinderGeometry args={[0.025, 0.03, 0.06, 8]} />
      <meshStandardMaterial color="#93C5FD" transparent opacity={0.5} roughness={0.1} />
    </mesh>
  </group>
));

const Room = memo(() => (
  <group>
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.7} />
    </mesh>
    <mesh position={[0, 0.5, -1.2]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#F0F9FF" roughness={0.9} />
    </mesh>
    <mesh position={[-1.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial color="#F0F9FF" roughness={0.9} />
    </mesh>
    {/* Window with curtains */}
    <mesh position={[-1.48, 0.5, -0.5]}>
      <boxGeometry args={[0.02, 0.6, 0.5]} />
      <meshStandardMaterial color="#E0F2FE" roughness={0.3} />
    </mesh>
    <mesh position={[-1.47, 0.5, -0.72]}>
      <boxGeometry args={[0.02, 0.7, 0.12]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.6} />
    </mesh>
    <mesh position={[-1.47, 0.5, -0.28]}>
      <boxGeometry args={[0.02, 0.7, 0.12]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.6} />
    </mesh>
  </group>
));

// ============================================================
// SICK CHILD IN BED (self variant)
// ============================================================
const SickChildInBed = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const chestRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Weak breathing
    const breath = Math.sin(t * 0.8) * 0.008;

    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(t * 0.3) * 0.04;
      headRef.current.position.y = 0.28 + breath * 0.3;
    }

    if (chestRef.current) {
      chestRef.current.scale.y = 1.0 + Math.sin(t * 0.8) * 0.02;
    }

    if (mouthOpenRef.current) {
      // Slight open mouth (unwell)
      mouthOpenRef.current.scale.y = 0.5 + Math.sin(t * 0.8) * 0.1;
      mouthOpenRef.current.scale.x = 0.9;
    }
  });

  return (
    <group position={[0.15, -0.15, -0.3]} rotation={[0, 0, Math.PI / 2]}>
      <group ref={chestRef}>
        {/* Simplified lying body */}
        <mesh>
          <cylinderGeometry args={[0.16, 0.2, 0.45, 12]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.2, 0.22, 0.45, 12]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
        </mesh>
      </group>
      <group ref={headRef} position={[0, 0.28, 0]}>
        <group scale={0.72}>
          <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
        </group>
      </group>
      {/* Arms under blanket (just shoulder hints) */}
      <mesh position={[-0.15, 0.0, 0.18]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      <mesh position={[0.15, 0.0, 0.18]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      {/* Thermometer */}
      <mesh position={[0.08, 0.15, 0.2]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.006, 0.006, 0.1, 4]} />
        <meshStandardMaterial color="white" roughness={0.3} />
      </mesh>
      <mesh position={[0.06, 0.12, 0.2]}>
        <sphereGeometry args={[0.012, 6, 6]} />
        <meshStandardMaterial color="#EF4444" roughness={0.3} />
      </mesh>
    </group>
  );
};

// ============================================================
// VISITING VARIANT - child stands by bed, sick person in bed
// ============================================================
const SickPersonInBed = () => {
  const headRef = useRef();
  const mouthRef = useRef();
  const chestRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(t * 0.2) * 0.03;
    }
    if (chestRef.current) {
      chestRef.current.scale.y = 1.0 + Math.sin(t * 0.7) * 0.015;
    }
    if (mouthRef.current) {
      mouthRef.current.scale.y = 0.4;
      mouthRef.current.scale.x = 0.85;
    }
  });

  return (
    <group position={[0.15, -0.15, -0.3]} rotation={[0, 0, Math.PI / 2]}>
      <group ref={chestRef}>
        {/* Upper body */}
        <mesh>
          <cylinderGeometry args={[0.18, 0.22, 0.5, 12]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
        </mesh>
        {/* Lower body */}
        <mesh position={[0, -0.42, 0]}>
          <cylinderGeometry args={[0.2, 0.22, 0.45, 12]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
        </mesh>
        {/* Feet hints */}
        <mesh position={[-0.08, -0.7, 0.04]}>
          <boxGeometry args={[0.08, 0.04, 0.12]} />
          <meshStandardMaterial color="#8B6914" roughness={0.7} />
        </mesh>
        <mesh position={[0.08, -0.7, 0.04]}>
          <boxGeometry args={[0.08, 0.04, 0.12]} />
          <meshStandardMaterial color="#8B6914" roughness={0.7} />
        </mesh>
      </group>
      {/* Full head with face, ghutra, agal — proper EmiratiHeadStatic */}
      <group ref={headRef} position={[0, 0.3, 0]}>
        <group scale={0.75}>
          <EmiratiHeadStatic mouthOpenRef={mouthRef} />
        </group>
      </group>
      {/* Arms under blanket (shoulder hints) */}
      <mesh position={[-0.16, 0.05, 0.18]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      <mesh position={[0.16, 0.05, 0.18]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      {/* Small compress on forehead */}
      <mesh position={[0, 0.35, 0.22]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.12, 0.025, 0.06]} />
        <meshStandardMaterial color="#93C5FD" roughness={0.6} />
      </mesh>
    </group>
  );
};

const VisitingChild = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.2, 0.0, 0.2]);
  const rightHandRef = useRef([0.2, 0.0, 0.2]);
  const fingerCurlL = useRef(0.15);
  const fingerCurlR = useRef(0.15);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 6;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);
    const lerpSpeed = 0.08; // smooth per-frame interpolation

    // Compute target positions based on phase
    let targetL, targetR, targetCurlL, targetCurlR;

    if (phase < 0.4) {
      // Standing beside bed, hands together (concerned)
      targetL = [-0.1, -0.1, 0.28];
      targetR = [0.1, -0.1, 0.28];
      targetCurlL = 0.3;
      targetCurlR = 0.3;
    } else if (phase < 0.6) {
      // Raising hands for dua
      const p = smooth((phase - 0.4) / 0.2);
      targetL = [
        THREE.MathUtils.lerp(-0.1, -0.2, p),
        THREE.MathUtils.lerp(-0.1, 0.32, p),
        THREE.MathUtils.lerp(0.28, 0.3, p),
      ];
      targetR = [
        THREE.MathUtils.lerp(0.1, 0.2, p),
        THREE.MathUtils.lerp(-0.1, 0.32, p),
        THREE.MathUtils.lerp(0.28, 0.3, p),
      ];
      targetCurlL = THREE.MathUtils.lerp(0.3, 0, p);
      targetCurlR = THREE.MathUtils.lerp(0.3, 0, p);
    } else if (phase < 0.85) {
      // Dua for the sick person
      const sway = Math.sin(t * 1.0) * 0.015;
      targetL = [-0.2 + sway, 0.32 + Math.sin(t * 0.8) * 0.01, 0.3];
      targetR = [0.2 - sway, 0.32 + Math.sin(t * 0.8) * 0.01, 0.3];
      targetCurlL = 0;
      targetCurlR = 0;
    } else {
      // Hands come down
      const p = smooth((phase - 0.85) / 0.15);
      targetL = [
        THREE.MathUtils.lerp(-0.2, -0.1, p),
        THREE.MathUtils.lerp(0.32, -0.1, p),
        0.28,
      ];
      targetR = [
        THREE.MathUtils.lerp(0.2, 0.1, p),
        THREE.MathUtils.lerp(0.32, -0.1, p),
        0.28,
      ];
      targetCurlL = THREE.MathUtils.lerp(0, 0.3, p);
      targetCurlR = THREE.MathUtils.lerp(0, 0.3, p);
    }

    // Per-frame lerp toward targets for smooth transitions
    const prev = leftHandRef.current;
    leftHandRef.current = [
      THREE.MathUtils.lerp(prev[0], targetL[0], lerpSpeed),
      THREE.MathUtils.lerp(prev[1], targetL[1], lerpSpeed),
      THREE.MathUtils.lerp(prev[2], targetL[2], lerpSpeed),
    ];
    const prevR = rightHandRef.current;
    rightHandRef.current = [
      THREE.MathUtils.lerp(prevR[0], targetR[0], lerpSpeed),
      THREE.MathUtils.lerp(prevR[1], targetR[1], lerpSpeed),
      THREE.MathUtils.lerp(prevR[2], targetR[2], lerpSpeed),
    ];
    fingerCurlL.current = THREE.MathUtils.lerp(fingerCurlL.current, targetCurlL, lerpSpeed);
    fingerCurlR.current = THREE.MathUtils.lerp(fingerCurlR.current, targetCurlR, lerpSpeed);

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.005;
      const isDua = phase > 0.6 && phase < 0.85;
      headRef.current.rotation.x = isDua ? -0.08 : 0.05;
      headRef.current.rotation.y = isDua ? 0 : 0.15; // Look at sick person
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      const isDua = phase > 0.6 && phase < 0.85;
      mouthOpenRef.current.scale.y = isDua ? 0.35 + Math.sin(t * 2.5) * 0.1 : 0.3;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group position={[-0.6, -0.1, 0.6]} rotation={[0, 0.3, 0]}>
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
// HEALING GLOW
// ============================================================
const HealingGlow = () => {
  const glowRef = useRef();

  useFrame((state) => {
    if (!glowRef.current) return;
    const t = state.clock.elapsedTime;
    glowRef.current.intensity = 0.2 + Math.sin(t * 0.6) * 0.1;
  });

  return (
    <pointLight ref={glowRef} position={[0.3, 0.5, -0.3]} intensity={0.2} color="#BBF7D0" distance={3} />
  );
};

// ============================================================
// FULL SICK SCENE
// ============================================================
const SickScene = memo(({ variant = 'self', isActive }) => (
  <>
    <SceneLights warmth={0.4} />
    <HealingGlow />
    <Room />
    <SickBed />
    <NightTable />

    {variant === 'self' ? (
      <SickChildInBed />
    ) : (
      <>
        <SickPersonInBed />
        <VisitingChild />
      </>
    )}

    <Sparkles count={variant === 'visiting' ? 6 : 3} />
  </>
));

export default SickScene;
