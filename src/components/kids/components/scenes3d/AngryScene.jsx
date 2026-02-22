/**
 * AngryScene.jsx
 * 3D scene - child starts angry, then calms down (expression changes).
 * Used for dua to control anger.
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  SKIN, SKIN_DARK, WHITE_CLOTH, EYE_COLOR,
  EmiratiBodyStanding,
  AnimatedArm,
  SceneLights, Sparkles
} from './SharedAvatar';

// ============================================================
// ROOM
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
  </group>
));

// ============================================================
// ANGER CLOUDS (red puffs that fade when calming)
// ============================================================
const AngerCloud = ({ index }) => {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;

    const angry = phase < 0.35;
    const calming = phase >= 0.35 && phase < 0.55;

    if (angry) {
      const offset = index * 1.2;
      ref.current.position.x = Math.sin(t * 2 + offset) * 0.3;
      ref.current.position.y = 1.0 + Math.sin(t * 1.5 + offset) * 0.15 + index * 0.12;
      ref.current.position.z = 0.3 + Math.cos(t * 1.8 + offset) * 0.2;
      ref.current.material.opacity = 0.35 + Math.sin(t * 3) * 0.1;
      ref.current.scale.setScalar(0.8 + Math.sin(t * 2 + offset) * 0.2);
    } else if (calming) {
      const p = (phase - 0.35) / 0.2;
      ref.current.material.opacity = THREE.MathUtils.lerp(0.35, 0, p);
      ref.current.position.y += 0.002;
      ref.current.scale.setScalar(THREE.MathUtils.lerp(0.8, 0.3, p));
    } else {
      ref.current.material.opacity = 0;
    }
  });

  return (
    <mesh ref={ref} position={[0, 1.0, 0.3]}>
      <sphereGeometry args={[0.08, 6, 6]} />
      <meshBasicMaterial color="#EF4444" transparent opacity={0} />
    </mesh>
  );
};

const AngerClouds = () => (
  <>
    {Array.from({ length: 4 }).map((_, i) => (
      <AngerCloud key={i} index={i} />
    ))}
  </>
);

// ============================================================
// CALMING GLOW (green/blue light that grows when calming)
// ============================================================
const CalmGlow = () => {
  const glowRef = useRef();
  const ringsRef = useRef([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;

    const calm = phase > 0.5;
    const calmStrength = calm ? Math.min((phase - 0.5) / 0.2, 1) : 0;

    if (glowRef.current) {
      glowRef.current.intensity = calmStrength * 0.6;
    }

    ringsRef.current.forEach((ring, i) => {
      if (!ring) return;
      const ringT = (t * 0.3 + i * 0.4) % 1.5;
      ring.material.opacity = calmStrength * Math.sin(ringT / 1.5 * Math.PI) * 0.25;
      ring.scale.setScalar(0.5 + ringT * 0.5);
    });
  });

  return (
    <group position={[0, 0.2, 0.3]}>
      <pointLight ref={glowRef} intensity={0} color="#BBF7D0" distance={4} />
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} ref={el => { ringsRef.current[i] = el; }} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5 + i * 0.3, 0]}>
          <ringGeometry args={[0.3 + i * 0.15, 0.34 + i * 0.15, 20]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

// ============================================================
// CUSTOM HEAD WITH ANIMATED EYEBROWS/MOUTH
// ============================================================
const AnimatedHead = ({ headRef, leftBrowRef, rightBrowRef, mouthRef }) => (
  <group ref={headRef}>
    {/* Head */}
    <mesh>
      <sphereGeometry args={[0.28, 20, 20]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    {/* Ears */}
    <mesh position={[-0.26, 0, 0]}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    <mesh position={[0.26, 0, 0]}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    {/* Ghutra cap */}
    <mesh position={[0, 0.08, -0.02]}>
      <sphereGeometry args={[0.3, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.4} side={THREE.DoubleSide} />
    </mesh>
    {/* Left side drape */}
    <mesh position={[-0.22, -0.15, -0.06]} rotation={[0.1, 0, 0.25]}>
      <boxGeometry args={[0.14, 0.5, 0.30]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Right side drape */}
    <mesh position={[0.22, -0.15, -0.06]} rotation={[0.1, 0, -0.25]}>
      <boxGeometry args={[0.14, 0.5, 0.30]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Back drape panel */}
    <mesh position={[0, -0.15, -0.16]} rotation={[0.12, 0, 0]}>
      <boxGeometry args={[0.46, 0.65, 0.26]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Back neck cover */}
    <mesh position={[0, 0.0, -0.22]}>
      <boxGeometry args={[0.42, 0.22, 0.16]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Agal */}
    <mesh position={[0, 0.18, 0.02]} rotation={[Math.PI / 2 + 0.15, 0, 0]}>
      <torusGeometry args={[0.24, 0.028, 6, 20]} />
      <meshStandardMaterial color="#1E293B" roughness={0.3} metalness={0.2} />
    </mesh>
    <mesh position={[0, 0.2, 0.0]} rotation={[Math.PI / 2 + 0.15, 0, 0]}>
      <torusGeometry args={[0.22, 0.022, 6, 20]} />
      <meshStandardMaterial color="#1E293B" roughness={0.3} metalness={0.2} />
    </mesh>
    {/* Eyes */}
    <group position={[-0.09, 0.04, 0.24]}>
      <mesh><sphereGeometry args={[0.055, 16, 16]} /><meshStandardMaterial color="white" roughness={0.3} /></mesh>
      <mesh position={[0, 0, 0.035]}><sphereGeometry args={[0.035, 12, 12]} /><meshStandardMaterial color="#5B3A1A" /></mesh>
      <mesh position={[0, 0, 0.05]}><sphereGeometry args={[0.018, 8, 8]} /><meshStandardMaterial color={EYE_COLOR} /></mesh>
      <mesh position={[0.015, 0.015, 0.055]}><sphereGeometry args={[0.008, 6, 6]} /><meshBasicMaterial color="white" /></mesh>
    </group>
    <group position={[0.09, 0.04, 0.24]}>
      <mesh><sphereGeometry args={[0.055, 16, 16]} /><meshStandardMaterial color="white" roughness={0.3} /></mesh>
      <mesh position={[0, 0, 0.035]}><sphereGeometry args={[0.035, 12, 12]} /><meshStandardMaterial color="#5B3A1A" /></mesh>
      <mesh position={[0, 0, 0.05]}><sphereGeometry args={[0.018, 8, 8]} /><meshStandardMaterial color={EYE_COLOR} /></mesh>
      <mesh position={[0.015, 0.015, 0.055]}><sphereGeometry args={[0.008, 6, 6]} /><meshBasicMaterial color="white" /></mesh>
    </group>
    {/* Animated Eyebrows (separate refs for independent rotation) */}
    <mesh ref={leftBrowRef} position={[-0.09, 0.11, 0.24]} rotation={[0, 0, 0.1]}>
      <boxGeometry args={[0.08, 0.018, 0.02]} /><meshStandardMaterial color="#4A3520" />
    </mesh>
    <mesh ref={rightBrowRef} position={[0.09, 0.11, 0.24]} rotation={[0, 0, -0.1]}>
      <boxGeometry args={[0.08, 0.018, 0.02]} /><meshStandardMaterial color="#4A3520" />
    </mesh>
    {/* Nose */}
    <mesh position={[0, -0.02, 0.27]}>
      <sphereGeometry args={[0.03, 8, 8]} /><meshStandardMaterial color={SKIN_DARK} roughness={0.8} />
    </mesh>
    {/* Cheeks */}
    <mesh position={[-0.18, -0.04, 0.18]}>
      <sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color="#F9A8D4" transparent opacity={0.3} />
    </mesh>
    <mesh position={[0.18, -0.04, 0.18]}>
      <sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color="#F9A8D4" transparent opacity={0.3} />
    </mesh>
    {/* Animated Mouth */}
    <group ref={mouthRef} position={[0, -0.12, 0.26]}>
      <mesh>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial color="#C0392B" roughness={0.5} />
      </mesh>
    </group>
  </group>
);

// ============================================================
// ANGRY CHARACTER
// ============================================================
const AngryCharacter = () => {
  const headRef = useRef();
  const leftBrowRef = useRef();
  const rightBrowRef = useRef();
  const mouthRef = useRef();
  const leftHandRef = useRef([-0.3, -0.4, 0.1]);
  const rightHandRef = useRef([0.3, -0.4, 0.1]);
  const fingerCurlL = useRef(0.5);
  const fingerCurlR = useRef(0.5);
  const bodyRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 8;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (phase < 0.35) {
      // Angry phase - tense body, fists clenched
      const tremble = Math.sin(t * 15) * 0.004;

      leftHandRef.current = [-0.25 + tremble, -0.1, 0.2];
      rightHandRef.current = [0.25 - tremble, -0.1, 0.2];
      fingerCurlL.current = 0.9; // Fists
      fingerCurlR.current = 0.9;

      if (bodyRef.current) {
        bodyRef.current.rotation.z = tremble * 0.5;
      }

      if (headRef.current) {
        headRef.current.position.y = headBaseY;
        headRef.current.rotation.x = 0.05;
        headRef.current.rotation.z = tremble * 0.5;
      }

      // Angry eyebrows (furrowed down inward)
      if (leftBrowRef.current) {
        leftBrowRef.current.rotation.z = -0.3;  // Left brow tilts inner-end down
        leftBrowRef.current.position.y = 0.09;
      }
      if (rightBrowRef.current) {
        rightBrowRef.current.rotation.z = 0.3;  // Right brow tilts inner-end down
        rightBrowRef.current.position.y = 0.09;
      }

      if (mouthRef.current) {
        // Tight frown - larger position change for visibility
        mouthRef.current.scale.x = 1.3;
        mouthRef.current.scale.y = 0.25;
        mouthRef.current.position.y = -0.14;
      }
    } else if (phase < 0.55) {
      // Calming down - deep breath, unclench fists
      const p = smooth((phase - 0.35) / 0.2);

      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.25, -0.3, p),
        THREE.MathUtils.lerp(-0.1, -0.3, p),
        THREE.MathUtils.lerp(0.2, 0.1, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.25, 0.3, p),
        THREE.MathUtils.lerp(-0.1, -0.3, p),
        THREE.MathUtils.lerp(0.2, 0.1, p),
      ];
      fingerCurlL.current = THREE.MathUtils.lerp(0.9, 0.2, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.9, 0.2, p);

      if (bodyRef.current) {
        bodyRef.current.rotation.z = 0;
      }

      // Eyebrows relax independently
      if (leftBrowRef.current) {
        leftBrowRef.current.rotation.z = THREE.MathUtils.lerp(-0.3, 0.1, p);
        leftBrowRef.current.position.y = THREE.MathUtils.lerp(0.09, 0.11, p);
      }
      if (rightBrowRef.current) {
        rightBrowRef.current.rotation.z = THREE.MathUtils.lerp(0.3, -0.1, p);
        rightBrowRef.current.position.y = THREE.MathUtils.lerp(0.09, 0.11, p);
      }

      if (headRef.current) {
        headRef.current.rotation.x = THREE.MathUtils.lerp(0.05, 0, p);
      }

      if (mouthRef.current) {
        mouthRef.current.scale.y = THREE.MathUtils.lerp(0.25, 0.5, p);
        mouthRef.current.position.y = THREE.MathUtils.lerp(-0.14, -0.11, p);
      }
    } else if (phase < 0.85) {
      // Calm, peaceful - gentle sway
      leftHandRef.current = [-0.3, -0.3 + Math.sin(t * 0.8) * 0.01, 0.1];
      rightHandRef.current = [0.3, -0.3 + Math.sin(t * 0.8 + 1) * 0.01, 0.1];
      fingerCurlL.current = 0.15;
      fingerCurlR.current = 0.15;

      if (headRef.current) {
        headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.005;
        headRef.current.rotation.z = Math.sin(t * 0.4) * 0.02;
        headRef.current.rotation.x = 0;
      }

      // Peaceful eyebrows
      if (leftBrowRef.current) {
        leftBrowRef.current.rotation.z = 0.1;
        leftBrowRef.current.position.y = 0.12;
      }
      if (rightBrowRef.current) {
        rightBrowRef.current.rotation.z = -0.1;
        rightBrowRef.current.position.y = 0.12;
      }

      if (mouthRef.current) {
        // Gentle smile - wider and higher than frown
        mouthRef.current.scale.x = 1.4;
        mouthRef.current.scale.y = 0.5;
        mouthRef.current.position.y = -0.11;
      }
    } else {
      // Transition back to angry for loop
      const p = smooth((phase - 0.85) / 0.15);
      fingerCurlL.current = THREE.MathUtils.lerp(0.15, 0.9, p);
      fingerCurlR.current = THREE.MathUtils.lerp(0.15, 0.9, p);

      leftHandRef.current = [
        THREE.MathUtils.lerp(-0.3, -0.25, p),
        THREE.MathUtils.lerp(-0.3, -0.1, p),
        THREE.MathUtils.lerp(0.1, 0.2, p),
      ];
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.25, p),
        THREE.MathUtils.lerp(-0.3, -0.1, p),
        THREE.MathUtils.lerp(0.1, 0.2, p),
      ];

      if (leftBrowRef.current) {
        leftBrowRef.current.rotation.z = THREE.MathUtils.lerp(0.1, -0.3, p);
      }
      if (rightBrowRef.current) {
        rightBrowRef.current.rotation.z = THREE.MathUtils.lerp(-0.1, 0.3, p);
      }
    }
  });

  return (
    <group position={[0, -0.1, 0.3]}>
      <group ref={bodyRef}>
        <EmiratiBodyStanding />
        <AnimatedHead headRef={headRef} leftBrowRef={leftBrowRef} rightBrowRef={rightBrowRef} mouthRef={mouthRef} />
        <AnimatedArm
          shoulderPos={leftShoulderPos}
          handPosRef={leftHandRef}
          fingerCurlRef={fingerCurlL}
          elbowBendDir={[-0.3, 0.1, 0.4]}
        />
        <AnimatedArm
          shoulderPos={rightShoulderPos}
          handPosRef={rightHandRef}
          fingerCurlRef={fingerCurlR}
          elbowBendDir={[0.3, 0.1, 0.4]}
        />
      </group>
    </group>
  );
};

// ============================================================
// FULL ANGRY SCENE
// ============================================================
const AngryScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.4} />
    <Room />
    <AngryCharacter />
    <AngerClouds />
    <CalmGlow />
    <Sparkles count={5} />
  </>
));

export default AngryScene;
