/**
 * ClothingScene.jsx
 * 3D wardrobe scene - child reaching for clothes in a wardrobe.
 * Used for dua when wearing new clothes.
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
// WARDROBE
// ============================================================
const Wardrobe = memo(() => (
  <group position={[0.6, 0, -0.6]}>
    {/* Main wardrobe body */}
    <mesh>
      <boxGeometry args={[1.2, 2.2, 0.5]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Top molding */}
    <mesh position={[0, 1.12, 0]}>
      <boxGeometry args={[1.28, 0.06, 0.56]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Base */}
    <mesh position={[0, -1.06, 0]}>
      <boxGeometry args={[1.24, 0.08, 0.52]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Left door */}
    <mesh position={[-0.29, 0, 0.26]}>
      <boxGeometry args={[0.58, 2.0, 0.04]} />
      <meshStandardMaterial color="#B8855A" roughness={0.5} />
    </mesh>
    {/* Left door panel */}
    <mesh position={[-0.29, 0.3, 0.285]}>
      <boxGeometry args={[0.42, 0.6, 0.01]} />
      <meshStandardMaterial color="#A07550" roughness={0.5} />
    </mesh>
    <mesh position={[-0.29, -0.4, 0.285]}>
      <boxGeometry args={[0.42, 0.6, 0.01]} />
      <meshStandardMaterial color="#A07550" roughness={0.5} />
    </mesh>
    {/* Left handle */}
    <mesh position={[-0.06, 0, 0.3]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>

    {/* Right door (open) */}
    <group position={[0.58, 0, 0.26]} rotation={[0, -1.2, 0]}>
      <mesh position={[-0.29, 0, 0]}>
        <boxGeometry args={[0.58, 2.0, 0.04]} />
        <meshStandardMaterial color="#B8855A" roughness={0.5} />
      </mesh>
      <mesh position={[-0.29, 0.3, 0.015]}>
        <boxGeometry args={[0.42, 0.6, 0.01]} />
        <meshStandardMaterial color="#A07550" roughness={0.5} />
      </mesh>
      <mesh position={[-0.29, -0.4, 0.015]}>
        <boxGeometry args={[0.42, 0.6, 0.01]} />
        <meshStandardMaterial color="#A07550" roughness={0.5} />
      </mesh>
      <mesh position={[-0.52, 0, 0.02]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
      </mesh>
    </group>

    {/* Clothes inside wardrobe (visible through open right door) */}
    {/* Hanging rod */}
    <mesh position={[0, 0.65, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.015, 0.015, 1.0, 6]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Hangers with clothes */}
    <ClothHanger position={[0.15, 0.55, 0]} color="#F9FAFB" />
    <ClothHanger position={[0.35, 0.55, 0]} color="#DBEAFE" />
    <ClothHanger position={[-0.05, 0.55, 0]} color="#FEF3C7" />
    {/* Folded clothes on bottom */}
    <mesh position={[0.1, -0.7, 0]}>
      <boxGeometry args={[0.3, 0.12, 0.25]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.7} />
    </mesh>
    <mesh position={[0.1, -0.55, 0]}>
      <boxGeometry args={[0.25, 0.1, 0.22]} />
      <meshStandardMaterial color="#BBF7D0" roughness={0.7} />
    </mesh>
  </group>
));

const ClothHanger = memo(({ position, color }) => (
  <group position={position}>
    {/* Hanger hook */}
    <mesh position={[0, 0.08, 0]}>
      <torusGeometry args={[0.02, 0.004, 4, 8, Math.PI]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Hanger bar */}
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <boxGeometry args={[0.15, 0.005, 0.008]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Cloth (kandura hanging) */}
    <mesh position={[0, -0.35, 0]}>
      <boxGeometry args={[0.14, 0.65, 0.04]} />
      <meshStandardMaterial color={color} roughness={0.6} />
    </mesh>
  </group>
));

const Room = memo(() => (
  <group>
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.7} />
    </mesh>
    <mesh position={[0, 0.5, -1.0]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#FFF8E7" roughness={0.9} />
    </mesh>
    <mesh position={[1.5, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial color="#FFFBEB" roughness={0.9} />
    </mesh>
  </group>
));

// ============================================================
// CLOTH IN HAND - a small kandura held by the character
// ============================================================
const ClothInHand = memo(({ clothRef }) => (
  <group ref={clothRef} visible={false}>
    {/* Main kandura body */}
    <mesh position={[0, -0.12, 0]}>
      <boxGeometry args={[0.18, 0.28, 0.03]} />
      <meshStandardMaterial color="#DBEAFE" roughness={0.6} />
    </mesh>
    {/* Collar area */}
    <mesh position={[0, 0.03, 0.005]}>
      <boxGeometry args={[0.12, 0.04, 0.025]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.5} />
    </mesh>
    {/* Left sleeve */}
    <mesh position={[-0.11, -0.04, 0]} rotation={[0, 0, 0.4]}>
      <boxGeometry args={[0.08, 0.12, 0.025]} />
      <meshStandardMaterial color="#DBEAFE" roughness={0.6} />
    </mesh>
    {/* Right sleeve */}
    <mesh position={[0.11, -0.04, 0]} rotation={[0, 0, -0.4]}>
      <boxGeometry args={[0.08, 0.12, 0.025]} />
      <meshStandardMaterial color="#DBEAFE" roughness={0.6} />
    </mesh>
  </group>
));

// ============================================================
// CHARACTER - reaches into wardrobe, grabs cloth, holds it up, admires
// ============================================================
const ClothingCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const clothRef = useRef();
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

    let clothVisible = false;
    let clothX = 0, clothY = 0, clothZ = 0.25;
    let clothRotZ = 0;

    if (phase < 0.12) {
      // Standing, looking at wardrobe
      rightHandRef.current = [0.3, -0.4, 0.1];
      leftHandRef.current = [-0.3, -0.4, 0.1];
      fingerCurlR.current = 0.15;
      fingerCurlL.current = 0.15;
    } else if (phase < 0.28) {
      // Right hand reaches up to wardrobe
      const p = smooth((phase - 0.12) / 0.16);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.55, p),
        THREE.MathUtils.lerp(-0.4, 0.45, p),
        THREE.MathUtils.lerp(0.1, -0.15, p),
      ];
      fingerCurlR.current = THREE.MathUtils.lerp(0.15, 0.0, p);
      leftHandRef.current = [-0.3, -0.4, 0.1];
      fingerCurlL.current = 0.15;
    } else if (phase < 0.38) {
      // Grab cloth - fingers curl, cloth appears
      const p = smooth((phase - 0.28) / 0.1);
      rightHandRef.current = [0.55, 0.45, -0.15];
      fingerCurlR.current = THREE.MathUtils.lerp(0.0, 0.7, p);
      leftHandRef.current = [-0.3, -0.4, 0.1];
      fingerCurlL.current = 0.15;
      clothVisible = p > 0.3;
      clothX = 0.55; clothY = 0.35; clothZ = -0.1;
    } else if (phase < 0.52) {
      // Pull cloth down from wardrobe with right hand
      const p = smooth((phase - 0.38) / 0.14);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.55, 0.15, p),
        THREE.MathUtils.lerp(0.45, 0.15, p),
        THREE.MathUtils.lerp(-0.15, 0.25, p),
      ];
      fingerCurlR.current = 0.7;
      // Left hand comes up to meet
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.3, -0.15, p),
        THREE.MathUtils.lerp(-0.4, 0.15, p),
        THREE.MathUtils.lerp(0.1, 0.25, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.15, 0.7, p);
      clothVisible = true;
      clothX = THREE.MathUtils.lerp(0.55, 0.0, p);
      clothY = THREE.MathUtils.lerp(0.35, 0.15, p);
      clothZ = THREE.MathUtils.lerp(-0.1, 0.28, p);
    } else if (phase < 0.72) {
      // Hold cloth up in front with both hands, admire it
      const sway = Math.sin(t * 1.5) * 0.02;
      rightHandRef.current = [0.15, 0.15 + sway, 0.25];
      leftHandRef.current = [-0.15, 0.15 + sway, 0.25];
      fingerCurlR.current = 0.7;
      fingerCurlL.current = 0.7;
      clothVisible = true;
      clothX = 0.0; clothY = 0.15 + sway; clothZ = 0.28;
    } else if (phase < 0.82) {
      // Hold cloth against body (wearing gesture)
      const p = smooth((phase - 0.72) / 0.1);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.15, 0.12, p),
        THREE.MathUtils.lerp(0.15, 0.0, p),
        THREE.MathUtils.lerp(0.25, 0.18, p),
      ];
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.15, -0.12, p),
        THREE.MathUtils.lerp(0.15, 0.0, p),
        THREE.MathUtils.lerp(0.25, 0.18, p),
      ];
      fingerCurlR.current = 0.7;
      fingerCurlL.current = 0.7;
      clothVisible = true;
      clothX = 0.0;
      clothY = THREE.MathUtils.lerp(0.15, 0.0, p);
      clothZ = THREE.MathUtils.lerp(0.28, 0.2, p);
    } else {
      // Lower hands, cloth disappears (put it on)
      const p = smooth((phase - 0.82) / 0.18);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.12, 0.3, p),
        THREE.MathUtils.lerp(0.0, -0.4, p),
        THREE.MathUtils.lerp(0.18, 0.1, p),
      ];
      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.12, -0.3, p),
        THREE.MathUtils.lerp(0.0, -0.4, p),
        THREE.MathUtils.lerp(0.18, 0.1, p),
      ];
      fingerCurlR.current = THREE.MathUtils.lerp(0.7, 0.15, p);
      fingerCurlL.current = THREE.MathUtils.lerp(0.7, 0.15, p);
      clothVisible = p < 0.4;
      clothX = 0.0; clothY = THREE.MathUtils.lerp(0.0, -0.3, p); clothZ = 0.2;
    }

    // Update cloth position and visibility
    if (clothRef.current) {
      clothRef.current.visible = clothVisible;
      clothRef.current.position.set(clothX, clothY, clothZ);
      clothRef.current.rotation.z = clothRotZ;
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.005;
      const lookUp = phase > 0.12 && phase < 0.38;
      const lookCloth = phase > 0.38 && phase < 0.82;
      const targetX = lookUp ? -0.15 : lookCloth ? 0.12 : 0;
      const targetY = lookUp ? 0.2 : lookCloth ? 0.0 : 0;
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, 0.05);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, 0.05);
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      const happy = phase > 0.52 && phase < 0.82;
      mouthOpenRef.current.scale.x = happy ? 1.4 : 1.1;
      mouthOpenRef.current.scale.y = happy ? 0.5 : 0.3;
    }
  });

  return (
    <group position={[-0.3, -0.1, 0.2]} rotation={[0, 0.3, 0]}>
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
        elbowBendDir={[0.3, 0.2, 0.5]}
      />
      <ClothInHand clothRef={clothRef} />
    </group>
  );
};

// ============================================================
// FULL CLOTHING SCENE
// ============================================================
const ClothingScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.5} />
    <pointLight position={[0.6, 1.0, 0.3]} intensity={0.4} color="#FFF8E1" distance={4} />
    <Room />
    <Wardrobe />
    <ClothingCharacter />
    <Sparkles count={4} />
  </>
));

export default ClothingScene;
