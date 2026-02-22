/**
 * MirrorScene.jsx
 * 3D mirror scene - child standing at a mirror, head tilts side to side.
 * Used for dua when looking in the mirror.
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
// MIRROR & ROOM
// ============================================================
const StandingMirror = memo(() => (
  <group position={[0, 0.2, -0.7]}>
    {/* Mirror frame */}
    <mesh>
      <boxGeometry args={[0.9, 1.4, 0.06]} />
      <meshStandardMaterial color="#A07550" roughness={0.5} />
    </mesh>
    {/* Mirror glass */}
    <mesh position={[0, 0, 0.035]}>
      <boxGeometry args={[0.78, 1.28, 0.01]} />
      <meshStandardMaterial color="#C7D2FE" roughness={0.05} metalness={0.6} />
    </mesh>
    {/* Inner frame bevel */}
    <mesh position={[0, 0, 0.03]}>
      <boxGeometry args={[0.84, 1.34, 0.005]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
    {/* Decorative top */}
    <mesh position={[0, 0.73, 0.03]}>
      <boxGeometry args={[0.7, 0.04, 0.02]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
  </group>
));

// Simple reflected avatar silhouette in mirror
const MirrorReflection = memo(() => (
  <group position={[0, 0.1, -0.65]} scale={[0.65, 0.65, 0.01]}>
    {/* Head silhouette */}
    <mesh position={[0, 0.55, 0]}>
      <sphereGeometry args={[0.2, 10, 10]} />
      <meshStandardMaterial color="#D1D5DB" transparent opacity={0.35} roughness={0.2} />
    </mesh>
    {/* Ghutra */}
    <mesh position={[0, 0.6, -0.02]}>
      <sphereGeometry args={[0.22, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
      <meshStandardMaterial color="#F1F5F9" transparent opacity={0.3} roughness={0.3} />
    </mesh>
    {/* Body */}
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[0.16, 0.2, 0.45, 10]} />
      <meshStandardMaterial color="#F1F5F9" transparent opacity={0.3} roughness={0.3} />
    </mesh>
    {/* Lower */}
    <mesh position={[0, -0.45, 0]}>
      <cylinderGeometry args={[0.18, 0.22, 0.5, 10]} />
      <meshStandardMaterial color="#F1F5F9" transparent opacity={0.25} roughness={0.3} />
    </mesh>
  </group>
));

const SmallShelf = memo(() => (
  <group position={[0.7, -0.4, -0.65]}>
    <mesh>
      <boxGeometry args={[0.35, 0.04, 0.2]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Perfume bottle */}
    <mesh position={[-0.05, 0.08, 0]}>
      <cylinderGeometry args={[0.025, 0.03, 0.1, 6]} />
      <meshStandardMaterial color="#7C3AED" roughness={0.3} transparent opacity={0.7} />
    </mesh>
    <mesh position={[-0.05, 0.14, 0]}>
      <cylinderGeometry args={[0.01, 0.015, 0.03, 4]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Comb */}
    <mesh position={[0.08, 0.04, 0]} rotation={[0, 0, 0.3]}>
      <boxGeometry args={[0.06, 0.03, 0.01]} />
      <meshStandardMaterial color="#1E293B" roughness={0.5} />
    </mesh>
  </group>
));

const Room = memo(() => (
  <group>
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.7} />
    </mesh>
    <mesh position={[0, 0.5, -0.9]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#FFF8E7" roughness={0.9} />
    </mesh>
    <mesh position={[-1.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial color="#FFFBEB" roughness={0.9} />
    </mesh>
  </group>
));

// ============================================================
// MIRROR CHARACTER - faces mirror, tilts head, says dua, adjusts ghutra
// ============================================================
const MirrorCharacter = memo(() => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.15, 0.15]);
  const rightHandRef = useRef([0.3, -0.15, 0.15]);
  const fingerCurlL = useRef(0.2);
  const fingerCurlR = useRef(0.2);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  // Mirror is at z=-0.7 facing +Z. Character faces mirror → rotation.y ≈ PI.
  // Position slightly offset so camera (at +Z) sees left profile / 3/4 view.
  // rotation.y = PI - 0.35 → face points toward mirror and slightly left,
  // giving camera a view of the character's left cheek.

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (phase < 0.15) {
      // Standing, looking at mirror
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
      if (headRef.current) {
        headRef.current.rotation.y = 0;
        headRef.current.rotation.z = 0;
      }
    } else if (phase < 0.28) {
      // Raise hands for dua
      const p = smooth((phase - 0.15) / 0.13);
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
    } else if (phase < 0.45) {
      // Dua pose - reciting mirror dua
      const sway = Math.sin(t * 1.2) * 0.01;
      leftHandRef.current = [-0.22 + sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      rightHandRef.current = [0.22 - sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      fingerCurlL.current = 0;
      fingerCurlR.current = 0;
    } else if (phase < 0.55) {
      // Lower hands
      const p = smooth((phase - 0.45) / 0.1);
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
    } else if (phase < 0.65) {
      // Tilt head left, looking at reflection
      const p = smooth((phase - 0.55) / 0.1);
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(0, 0.2, p);
        headRef.current.rotation.y = THREE.MathUtils.lerp(0, -0.1, p);
      }
    } else if (phase < 0.75) {
      // Tilt head right
      const p = smooth((phase - 0.65) / 0.1);
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(0.2, -0.2, p);
        headRef.current.rotation.y = THREE.MathUtils.lerp(-0.1, 0.1, p);
      }
    } else if (phase < 0.85) {
      // Right hand reaches up to adjust ghutra
      const p = smooth((phase - 0.75) / 0.1);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.15, p),
        THREE.MathUtils.lerp(-0.15, 0.6, p),
        THREE.MathUtils.lerp(0.15, 0.2, p),
      ];
      fingerCurlR.current = THREE.MathUtils.lerp(0.2, 0.5, p);
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(-0.2, 0, p);
        headRef.current.rotation.y = THREE.MathUtils.lerp(0.1, 0, p);
      }
    } else {
      // Hand comes back down
      const p = smooth((phase - 0.85) / 0.15);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.15, 0.3, p),
        THREE.MathUtils.lerp(0.6, -0.15, p),
        THREE.MathUtils.lerp(0.2, 0.15, p),
      ];
      fingerCurlR.current = THREE.MathUtils.lerp(0.5, 0.2, p);
      if (headRef.current) {
        headRef.current.rotation.y = 0;
        headRef.current.rotation.z = 0;
      }
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.005;
    }

    if (mouthOpenRef.current) {
      const isDua = phase > 0.28 && phase < 0.45;
      mouthOpenRef.current.scale.y = isDua ? 0.4 + Math.sin(t * 2.5) * 0.12 : 0.3;
      mouthOpenRef.current.scale.x = isDua ? 1.0 : 1.3 + Math.sin(t * 0.8) * 0.1;
    }
  });

  return (
    <group position={[0.15, -0.1, 0.0]} rotation={[0, Math.PI - 0.35, 0]}>
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
// FULL MIRROR SCENE
// ============================================================
const MirrorScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.5} />
    <pointLight position={[0, 1.0, 0.5]} intensity={0.4} color="#FFF8E1" distance={4} />
    <Room />
    <StandingMirror />
    <MirrorReflection />
    <SmallShelf />

    <MirrorCharacter />

    <Sparkles count={4} />
  </>
));

export default MirrorScene;
