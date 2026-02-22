/**
 * BathroomScene.jsx
 * 3D bathroom scene with 2 variants:
 * - enter: door opens, child walks in
 * - leave: child walks out, door closes
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
// BATHROOM ELEMENTS
// ============================================================
const TiledWall = memo(({ position, rotation, width = 4, height = 3, tileColor = '#D1FAE5', groutColor = '#E5E7EB' }) => (
  <group position={position} rotation={rotation}>
    {/* Base wall */}
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial color={groutColor} roughness={0.9} />
    </mesh>
    {/* Tile pattern rows */}
    {Array.from({ length: 8 }).map((_, row) =>
      Array.from({ length: 10 }).map((_, col) => (
        <mesh
          key={`${row}-${col}`}
          position={[
            -width / 2 + 0.2 + col * (width / 10.5),
            -height / 2 + 0.2 + row * (height / 8.5),
            0.005
          ]}
        >
          <boxGeometry args={[width / 11.5, height / 9.5, 0.008]} />
          <meshStandardMaterial
            color={row < 4 ? tileColor : '#F0FDF4'}
            roughness={0.3}
          />
        </mesh>
      ))
    )}
  </group>
));

const BathroomFloor = memo(() => (
  <group>
    {/* Floor */}
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#E2E8F0" roughness={0.4} />
    </mesh>
    {/* Floor tile grid pattern */}
    {Array.from({ length: 6 }).map((_, row) =>
      Array.from({ length: 6 }).map((_, col) => (
        <mesh
          key={`f-${row}-${col}`}
          position={[-2.5 + col * 1, -0.99, -2.5 + row * 1]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.95, 0.95]} />
          <meshStandardMaterial
            color={(row + col) % 2 === 0 ? '#CBD5E1' : '#E2E8F0'}
            roughness={0.3}
          />
        </mesh>
      ))
    )}
  </group>
));

const BathroomSink = memo(() => (
  <group position={[1.0, -0.2, -0.8]}>
    {/* Basin */}
    <mesh>
      <boxGeometry args={[0.6, 0.08, 0.4]} />
      <meshStandardMaterial color="#F1F5F9" roughness={0.2} />
    </mesh>
    {/* Basin bowl (inverted dome) */}
    <mesh position={[0, -0.06, 0]} scale={[1, 0.5, 1]}>
      <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color="white" roughness={0.2} side={THREE.DoubleSide} />
    </mesh>
    {/* Faucet */}
    <mesh position={[0, 0.12, -0.12]}>
      <cylinderGeometry args={[0.015, 0.015, 0.2, 6]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.7} />
    </mesh>
    <mesh position={[0, 0.2, -0.06]} rotation={[Math.PI / 3, 0, 0]}>
      <cylinderGeometry args={[0.015, 0.012, 0.15, 6]} />
      <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.7} />
    </mesh>
    {/* Mirror above */}
    <mesh position={[0, 0.6, -0.18]}>
      <boxGeometry args={[0.5, 0.6, 0.03]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.1} metalness={0.3} />
    </mesh>
    <mesh position={[0, 0.6, -0.17]}>
      <boxGeometry args={[0.54, 0.64, 0.01]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Support pedestal */}
    <mesh position={[0, -0.45, -0.05]}>
      <cylinderGeometry args={[0.06, 0.08, 0.8, 8]} />
      <meshStandardMaterial color="#F1F5F9" roughness={0.3} />
    </mesh>
  </group>
));

// ============================================================
// ENTERING CHARACTER - walks in through door
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

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 7;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    // Path: start at door opening, walk into bathroom center
    // Door is at x=-1.2, z=0.5. Child starts just outside, walks to center.
    if (phase < 0.08) {
      // Standing at doorway, facing into bathroom
      groupRef.current.position.x = -0.7;
      groupRef.current.position.z = 0.5;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.3;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.4) {
      // Walking into bathroom - toward sink area
      const p = smooth((phase - 0.08) / 0.32);
      groupRef.current.position.x = THREE.MathUtils.lerp(-0.7, 0.2, p);
      groupRef.current.position.z = THREE.MathUtils.lerp(0.5, 0.0, p);
      // Body bob during walk
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(p * Math.PI * 4)) * 0.025;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(0.3, 0.15, p);

      // Natural arm swing - opposite arms
      const walkT = p * Math.PI * 4;
      leftHandRef.current = [
        -0.3,
        -0.15 + Math.abs(Math.sin(walkT + Math.PI)) * 0.06,
        0.15 + Math.sin(walkT + Math.PI) * 0.15,
      ];
      rightHandRef.current = [
        0.3,
        -0.15 + Math.abs(Math.sin(walkT)) * 0.06,
        0.15 + Math.sin(walkT) * 0.15,
      ];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.55) {
      // Stopped, raise hands for dua
      const p = smooth((phase - 0.4) / 0.15);
      groupRef.current.position.x = 0.2;
      groupRef.current.position.z = 0.0;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.15;

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
    } else if (phase < 0.8) {
      // Dua pose - hands raised, palms up, slight sway
      groupRef.current.position.x = 0.2;
      groupRef.current.position.z = 0.0;
      groupRef.current.position.y = -0.1;
      const sway = Math.sin(t * 1.2) * 0.012;
      leftHandRef.current = [-0.22 + sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      rightHandRef.current = [0.22 - sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      fingerCurlL.current = 0;
      fingerCurlR.current = 0;
    } else {
      // Lower hands, return to rest
      const p = smooth((phase - 0.8) / 0.2);
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
    }

    // Head animation
    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 2) * 0.005;
      const isDua = phase > 0.55 && phase < 0.8;
      headRef.current.rotation.x = isDua ? -0.08 : 0;
      headRef.current.rotation.y = isDua ? 0 : Math.sin(t * 0.7) * 0.08;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      const isDua = phase > 0.55 && phase < 0.8;
      mouthOpenRef.current.scale.y = isDua ? 0.4 + Math.sin(t * 2.5) * 0.12 : 0.35;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group ref={groupRef} position={[-0.7, -0.1, 0.5]}>
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
// LEAVING CHARACTER - says dua then walks out through door
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
    const cycle = 7;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    // Face (eyes/mouth) is at +Z. At rotation.y=0 model faces +Z (toward camera).
    // Entering: rotation.y≈0.15, face toward camera, walks from z=0.5→z=0.0 (into room).
    // Leaving: keep rotation.y≈-0.15 (face still toward camera/+Z), walk from z=0.0→z=0.5→z=1.0 (out through door).
    // The character walks toward the camera and exits through the door behind/around the camera view.

    // Flow: stand → dua → walk toward door (face visible) → through door → gone → loop
    if (phase < 0.08) {
      // Standing inside bathroom, facing camera
      groupRef.current.position.x = 0.2;
      groupRef.current.position.z = 0.0;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.15;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else if (phase < 0.2) {
      // Raise hands for dua before leaving
      const p = smooth((phase - 0.08) / 0.12);
      groupRef.current.position.x = 0.2;
      groupRef.current.position.z = 0.0;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.15;

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
    } else if (phase < 0.42) {
      // Dua pose - hands raised palms up, reciting "Ghufranaka"
      groupRef.current.position.x = 0.2;
      groupRef.current.position.z = 0.0;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = 0.15;
      const sway = Math.sin(t * 1.2) * 0.012;
      leftHandRef.current = [-0.22 + sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      rightHandRef.current = [0.22 - sway, 0.3 + Math.sin(t * 0.8) * 0.01, 0.3];
      fingerCurlL.current = 0;
      fingerCurlR.current = 0;
    } else if (phase < 0.52) {
      // Lower hands, slight turn toward door direction
      const p = smooth((phase - 0.42) / 0.1);
      groupRef.current.position.x = 0.2;
      groupRef.current.position.z = 0.0;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(0.15, -0.15, p);

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
      // Walk toward door: [0.2, 0.0] → [-0.7, 0.5] (reverse of entering path)
      const p = smooth((phase - 0.52) / 0.26);
      groupRef.current.position.x = THREE.MathUtils.lerp(0.2, -0.7, p);
      groupRef.current.position.z = THREE.MathUtils.lerp(0.0, 0.5, p);
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(p * Math.PI * 4)) * 0.025;
      groupRef.current.rotation.y = -0.15; // face +Z (toward camera/door), slight left

      const walkT = p * Math.PI * 4;
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
    } else if (phase < 0.9) {
      // Walk through door and out: [-0.7, 0.5] → [-0.7, 1.0]
      const p = smooth((phase - 0.78) / 0.12);
      groupRef.current.position.x = -0.7;
      groupRef.current.position.z = THREE.MathUtils.lerp(0.5, 1.0, p);
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(p * Math.PI * 2)) * 0.02;
      groupRef.current.rotation.y = -0.15;

      const walkT = p * Math.PI * 2;
      leftHandRef.current = [
        -0.3, -0.15 + Math.abs(Math.sin(walkT + Math.PI)) * 0.05,
        0.15 + Math.sin(walkT + Math.PI) * 0.12,
      ];
      rightHandRef.current = [
        0.3, -0.15 + Math.abs(Math.sin(walkT)) * 0.05,
        0.15 + Math.sin(walkT) * 0.12,
      ];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    } else {
      // Gone — character outside door. Hold until loop restart.
      groupRef.current.position.x = -0.7;
      groupRef.current.position.z = 1.0;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = -0.15;
      leftHandRef.current = [-0.3, -0.15, 0.15];
      rightHandRef.current = [0.3, -0.15, 0.15];
      fingerCurlL.current = 0.2;
      fingerCurlR.current = 0.2;
    }

    // Head animation
    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 2) * 0.005;
      const isDua = phase > 0.22 && phase < 0.48;
      headRef.current.rotation.x = isDua ? -0.08 : 0;
      headRef.current.rotation.y = isDua ? 0 : Math.sin(t * 0.7) * 0.08;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      const isDua = phase > 0.22 && phase < 0.48;
      mouthOpenRef.current.scale.y = isDua ? 0.4 + Math.sin(t * 2.5) * 0.12 : 0.35;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group ref={groupRef} position={[0.2, -0.1, 0.0]}>
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
// ANIMATED DOOR WRAPPER
// ============================================================
const AnimatedDoor = memo(({ variant }) => {
  const doorGroupRef = useRef();
  const doorPanelRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 7;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!doorPanelRef.current) return;

    if (variant === 'enter') {
      // Door opens before child walks in, closes after
      if (phase < 0.04) {
        doorPanelRef.current.rotation.y = 0;
      } else if (phase < 0.1) {
        doorPanelRef.current.rotation.y = smooth((phase - 0.04) / 0.06) * -1.3;
      } else if (phase < 0.5) {
        doorPanelRef.current.rotation.y = -1.3;
      } else if (phase < 0.6) {
        doorPanelRef.current.rotation.y = THREE.MathUtils.lerp(-1.3, 0, smooth((phase - 0.5) / 0.1));
      } else {
        doorPanelRef.current.rotation.y = 0;
      }
    } else {
      // Leave: door opens as child walks toward it, fully open before arrival at z=0.5
      if (phase < 0.6) {
        doorPanelRef.current.rotation.y = 0;
      } else if (phase < 0.7) {
        doorPanelRef.current.rotation.y = smooth((phase - 0.6) / 0.1) * -1.3;
      } else if (phase < 0.92) {
        doorPanelRef.current.rotation.y = -1.3;
      } else {
        doorPanelRef.current.rotation.y = THREE.MathUtils.lerp(-1.3, 0, smooth((phase - 0.92) / 0.08));
      }
    }
  });

  return (
    <group ref={doorGroupRef} position={[-1.2, 0.2, 0.5]}>
      {/* Door frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.08, 2.2, 0.08]} />
        <meshStandardMaterial color="#A07550" roughness={0.6} />
      </mesh>
      <mesh position={[0.85, 0, 0]}>
        <boxGeometry args={[0.08, 2.2, 0.08]} />
        <meshStandardMaterial color="#A07550" roughness={0.6} />
      </mesh>
      <mesh position={[0.425, 1.06, 0]}>
        <boxGeometry args={[0.92, 0.08, 0.08]} />
        <meshStandardMaterial color="#A07550" roughness={0.6} />
      </mesh>

      {/* Animated door panel */}
      <group position={[0.04, 0, 0]} ref={doorPanelRef}>
        <mesh position={[0.38, 0, 0]}>
          <boxGeometry args={[0.76, 2.1, 0.05]} />
          <meshStandardMaterial color="#C8956A" roughness={0.6} />
        </mesh>
        <mesh position={[0.38, 0.35, 0.028]}>
          <boxGeometry args={[0.55, 0.6, 0.01]} />
          <meshStandardMaterial color="#B8855A" roughness={0.6} />
        </mesh>
        <mesh position={[0.38, -0.4, 0.028]}>
          <boxGeometry args={[0.55, 0.6, 0.01]} />
          <meshStandardMaterial color="#B8855A" roughness={0.6} />
        </mesh>
        <mesh position={[0.65, 0, 0.04]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
});

// ============================================================
// FULL BATHROOM SCENE
// ============================================================
const BathroomScene = memo(({ variant = 'enter', isActive }) => (
  <>
    <SceneLights warmth={0.3} />
    <pointLight position={[0, 1.5, 0]} intensity={0.6} color="#F0F9FF" distance={5} />
    <BathroomFloor />
    <TiledWall
      position={[0, 0.5, -1.2]}
      rotation={[0, 0, 0]}
      tileColor="#D1FAE5"
    />
    <TiledWall
      position={[1.8, 0.5, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      width={3}
      tileColor="#DBEAFE"
    />
    <AnimatedDoor variant={variant} />
    <BathroomSink />

    {variant === 'enter' ? <EnteringCharacter /> : <LeavingCharacter />}

    <Sparkles count={4} />
  </>
));

export default BathroomScene;
