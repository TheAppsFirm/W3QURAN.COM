/**
 * SneezeScene.jsx
 * 3D scene - child sneezing with head jerk animation.
 * Used for dua after sneezing (Alhamdulillah).
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
// SIMPLE ROOM
// ============================================================
const Room = memo(() => (
  <group>
    <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.7} />
    </mesh>
    <mesh position={[0, 0.5, -1.2]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#FFF8E7" roughness={0.9} />
    </mesh>
    {/* Small table */}
    <mesh position={[1.0, -0.6, -0.3]}>
      <boxGeometry args={[0.5, 0.04, 0.4]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {[[-0.2, -0.4], [0.2, -0.4], [-0.2, 0], [0.2, 0]].map(([dx, dz], i) => (
      <mesh key={i} position={[1.0 + dx, -0.8, -0.3 + dz]}>
        <cylinderGeometry args={[0.02, 0.02, 0.38, 4]} />
        <meshStandardMaterial color="#8B6540" roughness={0.6} />
      </mesh>
    ))}
    {/* Tissue box on table */}
    <mesh position={[1.0, -0.52, -0.3]}>
      <boxGeometry args={[0.15, 0.1, 0.1]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.5} />
    </mesh>
    <mesh position={[1.0, -0.45, -0.3]}>
      <boxGeometry args={[0.05, 0.06, 0.04]} />
      <meshStandardMaterial color="white" roughness={0.4} />
    </mesh>
  </group>
));

// ============================================================
// SNEEZE PARTICLES (cartoon puff)
// ============================================================
const SneezePuff = () => {
  const puffsRef = useRef([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 5;
    const phase = (t % cycle) / cycle;

    puffsRef.current.forEach((puff, i) => {
      if (!puff) return;
      // Show only during sneeze moment
      const sneezePhase = phase > 0.35 && phase < 0.5;
      if (sneezePhase) {
        const p = (phase - 0.35) / 0.15;
        const angle = (i / 6) * Math.PI * 0.8 - Math.PI * 0.4;
        puff.position.x = Math.sin(angle) * p * 0.4;
        puff.position.y = 0.4 + Math.cos(angle) * p * 0.2;
        puff.position.z = 0.3 + p * 0.5;
        puff.material.opacity = (1 - p) * 0.35;
        puff.scale.setScalar(0.3 + p * 0.8);
      } else {
        puff.material.opacity = 0;
        puff.scale.setScalar(0);
      }
    });
  });

  return (
    <group position={[0, 0, 0]}>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} ref={el => { puffsRef.current[i] = el; }}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshStandardMaterial color="#F1F5F9" transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
};

// ============================================================
// SNEEZING CHARACTER
// ============================================================
const SneezingCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.4, 0.1]);
  const rightHandRef = useRef([0.3, -0.4, 0.1]);
  const fingerCurlL = useRef(0.15);
  const fingerCurlR = useRef(0.15);
  const bodyRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 5;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (phase < 0.2) {
      // Normal standing
      if (headRef.current) {
        headRef.current.position.y = headBaseY;
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, 0, 0.05);
      }
      leftHandRef.current = [-0.3, -0.4, 0.1];
      rightHandRef.current = [0.3, -0.4, 0.1];
      fingerCurlL.current = 0.15;
      fingerCurlR.current = 0.15;
    } else if (phase < 0.3) {
      // Pre-sneeze: head tilts back, inhaling
      const p = smooth((phase - 0.2) / 0.1);
      if (headRef.current) {
        headRef.current.rotation.x = THREE.MathUtils.lerp(0, -0.3, p);
        headRef.current.position.y = headBaseY + p * 0.03;
      }
      // Hand moves towards mouth
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.1, p),
        THREE.MathUtils.lerp(-0.4, 0.2, p),
        THREE.MathUtils.lerp(0.1, 0.25, p),
      ];
      fingerCurlR.current = THREE.MathUtils.lerp(0.15, 0.3, p);
    } else if (phase < 0.35) {
      // Windup - head further back
      const p = smooth((phase - 0.3) / 0.05);
      if (headRef.current) {
        headRef.current.rotation.x = THREE.MathUtils.lerp(-0.3, -0.4, p);
      }
      rightHandRef.current = [0.1, 0.2, 0.25];
    } else if (phase < 0.42) {
      // SNEEZE! - head jerks forward fast
      const p = smooth((phase - 0.35) / 0.07);
      if (headRef.current) {
        headRef.current.rotation.x = THREE.MathUtils.lerp(-0.4, 0.5, p);
        headRef.current.position.y = headBaseY - p * 0.06;
      }
      rightHandRef.current = [0.1, 0.35, 0.3];
      fingerCurlR.current = 0.6;

      if (bodyRef.current) {
        bodyRef.current.rotation.x = p * 0.1;
      }
    } else if (phase < 0.55) {
      // Recovery
      const p = smooth((phase - 0.42) / 0.13);
      if (headRef.current) {
        headRef.current.rotation.x = THREE.MathUtils.lerp(0.5, 0, p);
        headRef.current.position.y = THREE.MathUtils.lerp(headBaseY - 0.06, headBaseY, p);
      }
      if (bodyRef.current) {
        bodyRef.current.rotation.x = THREE.MathUtils.lerp(0.1, 0, p);
      }
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.1, 0.15, p),
        THREE.MathUtils.lerp(0.35, 0.3, p),
        0.3,
      ];
    } else if (phase < 0.75) {
      // Post-sneeze: hand raised in gratitude saying Alhamdulillah
      const p = (phase - 0.55) / 0.2;
      rightHandRef.current = [0.15, 0.3 + Math.sin(p * Math.PI) * 0.05, 0.3];
      fingerCurlR.current = 0.2;

      if (headRef.current) {
        headRef.current.rotation.x = 0;
        headRef.current.rotation.z = Math.sin(t * 1.5) * 0.03;
      }
    } else {
      // Return to normal
      const p = smooth((phase - 0.75) / 0.25);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.15, 0.3, p),
        THREE.MathUtils.lerp(0.3, -0.4, p),
        THREE.MathUtils.lerp(0.3, 0.1, p),
      ];
      fingerCurlR.current = THREE.MathUtils.lerp(0.2, 0.15, p);
    }

    if (mouthOpenRef.current) {
      // Mouth wide during sneeze
      const sneezing = phase > 0.3 && phase < 0.42;
      const preSneeze = phase > 0.2 && phase < 0.3;
      if (sneezing) {
        mouthOpenRef.current.scale.y = 1.5;
        mouthOpenRef.current.scale.x = 1.0;
      } else if (preSneeze) {
        const p = (phase - 0.2) / 0.1;
        mouthOpenRef.current.scale.y = THREE.MathUtils.lerp(0.3, 0.8, p);
        mouthOpenRef.current.scale.x = 0.9;
      } else {
        mouthOpenRef.current.scale.y = THREE.MathUtils.lerp(mouthOpenRef.current.scale.y, 0.3, 0.1);
        mouthOpenRef.current.scale.x = THREE.MathUtils.lerp(mouthOpenRef.current.scale.x, 1.1, 0.1);
      }
    }

    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }
  });

  return (
    <group position={[0, -0.1, 0.3]}>
      <group ref={bodyRef}>
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
      </group>
      <SneezePuff />
    </group>
  );
};

// ============================================================
// FULL SNEEZE SCENE
// ============================================================
const SneezeScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.5} />
    <Room />
    <SneezingCharacter />
    <Sparkles count={4} />
  </>
));

export default SneezeScene;
