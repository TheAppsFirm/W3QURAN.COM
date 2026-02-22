/**
 * FamilyScene.jsx
 * 3D family scene - child with parent figure, parent pats child's head.
 * Used for duas related to parents/family.
 */

import React, { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  SKIN, SKIN_DARK, WHITE_CLOTH, CLOTH_SHADOW, EYE_COLOR,
  EmiratiHeadStatic, EmiratiBodyStanding,
  StaticArm, AnimatedArm,
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
    {/* Sofa */}
    <mesh position={[-1.5, -0.4, -0.8]}>
      <boxGeometry args={[1.2, 0.5, 0.5]} />
      <meshStandardMaterial color="#7C3AED" roughness={0.7} />
    </mesh>
    <mesh position={[-1.5, -0.05, -1.0]}>
      <boxGeometry args={[1.2, 0.4, 0.1]} />
      <meshStandardMaterial color="#6D28D9" roughness={0.7} />
    </mesh>
    {/* Rug */}
    <mesh position={[0, -0.99, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2.5, 1.8]} />
      <meshStandardMaterial color="#92400E" roughness={0.8} />
    </mesh>
    <mesh position={[0, -0.988, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2.3, 1.6]} />
      <meshStandardMaterial color="#B45309" roughness={0.7} />
    </mesh>
    {/* Family photo on wall */}
    <mesh position={[0, 0.8, -1.18]}>
      <boxGeometry args={[0.5, 0.4, 0.02]} />
      <meshStandardMaterial color="#A07550" roughness={0.5} />
    </mesh>
    <mesh position={[0, 0.8, -1.16]}>
      <boxGeometry args={[0.42, 0.32, 0.01]} />
      <meshStandardMaterial color="#FDE68A" roughness={0.7} />
    </mesh>
  </group>
));

// ============================================================
// PARENT FIGURE (taller, with bisht)
// ============================================================
const ParentBody = memo(() => (
  <group>
    {/* Torso */}
    <mesh>
      <cylinderGeometry args={[0.24, 0.28, 0.6, 16]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Collar */}
    <mesh position={[0, 0.31, 0.08]}>
      <boxGeometry args={[0.14, 0.04, 0.06]} />
      <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
    </mesh>
    {/* Center line */}
    <mesh position={[0, 0, 0.22]}>
      <boxGeometry args={[0.008, 0.55, 0.005]} />
      <meshStandardMaterial color={CLOTH_SHADOW} transparent opacity={0.5} />
    </mesh>
    {/* Lower robe */}
    <mesh position={[0, -0.6, 0]}>
      <cylinderGeometry args={[0.28, 0.32, 0.65, 12]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Bisht (cloak) */}
    <mesh position={[0, -0.1, -0.12]} rotation={[0.05, 0, 0]}>
      <boxGeometry args={[0.65, 1.1, 0.04]} />
      <meshStandardMaterial color="#1E293B" roughness={0.6} transparent opacity={0.85} />
    </mesh>
    {/* Bisht gold trim */}
    <mesh position={[0, -0.1, -0.1]}>
      <boxGeometry args={[0.02, 1.05, 0.008]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
    {/* Feet */}
    <mesh position={[-0.1, -0.98, 0.04]}>
      <boxGeometry args={[0.12, 0.05, 0.18]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
    <mesh position={[0.1, -0.98, 0.04]}>
      <boxGeometry args={[0.12, 0.05, 0.18]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
  </group>
));

const ParentHead = memo(({ headRef, mouthRef }) => (
  <group ref={headRef}>
    {/* Head (slightly larger) */}
    <mesh>
      <sphereGeometry args={[0.3, 20, 20]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    {/* Ears */}
    <mesh position={[-0.28, 0, 0]}>
      <sphereGeometry args={[0.06, 10, 10]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    <mesh position={[0.28, 0, 0]}>
      <sphereGeometry args={[0.06, 10, 10]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    {/* Ghutra cap */}
    <mesh position={[0, 0.1, -0.02]}>
      <sphereGeometry args={[0.32, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.4} side={THREE.DoubleSide} />
    </mesh>
    {/* Left side drape */}
    <mesh position={[-0.24, -0.18, -0.06]} rotation={[0.1, 0, 0.25]}>
      <boxGeometry args={[0.16, 0.55, 0.32]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Right side drape */}
    <mesh position={[0.24, -0.18, -0.06]} rotation={[0.1, 0, -0.25]}>
      <boxGeometry args={[0.16, 0.55, 0.32]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Back drape panel */}
    <mesh position={[0, -0.18, -0.17]} rotation={[0.12, 0, 0]}>
      <boxGeometry args={[0.50, 0.68, 0.28]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Back neck cover */}
    <mesh position={[0, 0.02, -0.24]}>
      <boxGeometry args={[0.44, 0.24, 0.18]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Agal */}
    <mesh position={[0, 0.2, 0.02]} rotation={[Math.PI / 2 + 0.15, 0, 0]}>
      <torusGeometry args={[0.26, 0.03, 6, 20]} />
      <meshStandardMaterial color="#1E293B" roughness={0.3} metalness={0.2} />
    </mesh>
    <mesh position={[0, 0.22, 0.0]} rotation={[Math.PI / 2 + 0.15, 0, 0]}>
      <torusGeometry args={[0.24, 0.024, 6, 20]} />
      <meshStandardMaterial color="#1E293B" roughness={0.3} metalness={0.2} />
    </mesh>
    {/* Eyes */}
    <group position={[-0.09, 0.04, 0.26]}>
      <mesh><sphereGeometry args={[0.05, 14, 14]} /><meshStandardMaterial color="white" roughness={0.3} /></mesh>
      <mesh position={[0, 0, 0.03]}><sphereGeometry args={[0.03, 10, 10]} /><meshStandardMaterial color="#5B3A1A" /></mesh>
      <mesh position={[0, 0, 0.045]}><sphereGeometry args={[0.016, 8, 8]} /><meshStandardMaterial color={EYE_COLOR} /></mesh>
    </group>
    <group position={[0.09, 0.04, 0.26]}>
      <mesh><sphereGeometry args={[0.05, 14, 14]} /><meshStandardMaterial color="white" roughness={0.3} /></mesh>
      <mesh position={[0, 0, 0.03]}><sphereGeometry args={[0.03, 10, 10]} /><meshStandardMaterial color="#5B3A1A" /></mesh>
      <mesh position={[0, 0, 0.045]}><sphereGeometry args={[0.016, 8, 8]} /><meshStandardMaterial color={EYE_COLOR} /></mesh>
    </group>
    {/* Eyebrows */}
    <mesh position={[-0.09, 0.1, 0.26]} rotation={[0, 0, 0.1]}>
      <boxGeometry args={[0.08, 0.015, 0.02]} /><meshStandardMaterial color="#4A3520" />
    </mesh>
    <mesh position={[0.09, 0.1, 0.26]} rotation={[0, 0, -0.1]}>
      <boxGeometry args={[0.08, 0.015, 0.02]} /><meshStandardMaterial color="#4A3520" />
    </mesh>
    {/* Nose */}
    <mesh position={[0, -0.02, 0.29]}>
      <sphereGeometry args={[0.03, 8, 8]} /><meshStandardMaterial color={SKIN_DARK} roughness={0.8} />
    </mesh>
    {/* Beard */}
    <mesh position={[0, -0.14, 0.22]} scale={[1, 1, 0.6]}>
      <sphereGeometry args={[0.12, 10, 8]} />
      <meshStandardMaterial color="#4A3520" roughness={0.9} />
    </mesh>
    {/* Mouth */}
    <group ref={mouthRef} position={[0, -0.1, 0.28]}>
      <mesh>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshStandardMaterial color="#C0392B" roughness={0.5} />
      </mesh>
    </group>
  </group>
));

// ============================================================
// ANIMATED FAMILY
// ============================================================
const FamilyGroup = () => {
  const parentHeadRef = useRef();
  const parentMouthRef = useRef();
  const parentHandRef = useRef([0.4, 0.1, 0.3]);
  const parentFingerCurl = useRef(0.2);

  const childHeadRef = useRef();
  const childMouthRef = useRef();
  const childLeftHandRef = useRef([-0.2, -0.3, 0.1]);
  const childRightHandRef = useRef([0.2, -0.3, 0.1]);
  const childFingerCurlL = useRef(0.15);
  const childFingerCurlR = useRef(0.15);

  const parentRightShoulder = [0.26, 0.3, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 6;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    // Parent patting child's head
    // Child is ~0.9 units to the right and ~0.5 forward in world space
    // In parent local space (scaled 1.1): ~0.82 right, ~0.45 forward
    if (phase < 0.2) {
      // Hand resting at side
      parentHandRef.current = [0.3, -0.1, 0.2];
      parentFingerCurl.current = 0.2;
    } else if (phase < 0.4) {
      // Hand reaches toward child's head
      const p = smooth((phase - 0.2) / 0.2);
      parentHandRef.current = [
        THREE.MathUtils.lerp(0.3, 0.6, p),
        THREE.MathUtils.lerp(-0.1, 0.35, p),
        THREE.MathUtils.lerp(0.2, 0.55, p),
      ];
      parentFingerCurl.current = THREE.MathUtils.lerp(0.2, 0.1, p);
    } else if (phase < 0.7) {
      // Patting motion on child's head
      const p = (phase - 0.4) / 0.3;
      const pat = Math.sin(p * Math.PI * 4) * 0.03;
      parentHandRef.current = [0.6, 0.35 + pat, 0.55];
      parentFingerCurl.current = 0.15;
    } else {
      // Hand returns to side
      const p = smooth((phase - 0.7) / 0.3);
      parentHandRef.current = [
        THREE.MathUtils.lerp(0.6, 0.3, p),
        THREE.MathUtils.lerp(0.35, -0.1, p),
        THREE.MathUtils.lerp(0.55, 0.2, p),
      ];
      parentFingerCurl.current = THREE.MathUtils.lerp(0.15, 0.2, p);
    }

    // Parent head looks down at child
    if (parentHeadRef.current) {
      parentHeadRef.current.position.y = 0.72;
      const lookingAtChild = phase > 0.2 && phase < 0.7;
      parentHeadRef.current.rotation.x = lookingAtChild ? 0.2 : THREE.MathUtils.lerp(parentHeadRef.current.rotation.x, 0, 0.05);
      parentHeadRef.current.rotation.z = Math.sin(t * 0.4) * 0.02;
    }

    if (parentMouthRef.current) {
      // Warm smile
      parentMouthRef.current.scale.x = 1.3 + Math.sin(t * 0.6) * 0.1;
      parentMouthRef.current.scale.y = 0.35;
    }

    // Child looks up at parent
    if (childHeadRef.current) {
      childHeadRef.current.position.y = 0.58;
      const beingPatted = phase > 0.4 && phase < 0.7;
      childHeadRef.current.rotation.x = beingPatted ? -0.2 : THREE.MathUtils.lerp(childHeadRef.current.rotation.x, -0.1, 0.05);
      childHeadRef.current.rotation.z = Math.sin(t * 0.5) * 0.03;
      // Slight bob when patted
      if (beingPatted) {
        const p = (phase - 0.4) / 0.3;
        childHeadRef.current.position.y = 0.58 + Math.sin(p * Math.PI * 4) * 0.015;
      }
    }

    if (childMouthRef.current) {
      // Happy smile
      childMouthRef.current.scale.x = 1.4;
      childMouthRef.current.scale.y = 0.3;
    }

    childLeftHandRef.current = [-0.2, -0.3, 0.1];
    childRightHandRef.current = [0.2, -0.3, 0.1];
  });

  const childLeftShoulder = [-0.22, 0.2, 0.05];
  const childRightShoulder = [0.22, 0.2, 0.05];

  return (
    <group position={[0, 0, -0.2]}>
      {/* Parent (left, taller, slightly behind) */}
      <group position={[-0.55, 0.2, -0.15]} scale={1.1}>
        <ParentBody />
        <ParentHead headRef={parentHeadRef} mouthRef={parentMouthRef} />
        {/* Left arm resting at side */}
        <StaticArm
          shoulderPos={[-0.28, 0.3, 0.05]}
          elbowPos={[-0.34, 0.1, 0.15]}
          handPos={[-0.3, -0.1, 0.18]}
        />
        {/* Right arm animated (patting) */}
        <AnimatedArm
          shoulderPos={parentRightShoulder}
          handPosRef={parentHandRef}
          fingerCurlRef={parentFingerCurl}
          elbowBendDir={[0.3, 0.1, 0.5]}
        />
      </group>

      {/* Child (right, shorter, slightly in front) */}
      <group position={[0.35, -0.1, 0.35]}>
        <EmiratiBodyStanding />
        <group ref={childHeadRef} position={[0, 0.58, 0]}>
          <EmiratiHeadStatic mouthOpenRef={childMouthRef} />
        </group>
        <AnimatedArm
          shoulderPos={childLeftShoulder}
          handPosRef={childLeftHandRef}
          fingerCurlRef={childFingerCurlL}
          elbowBendDir={[-0.3, 0, 0.5]}
        />
        <AnimatedArm
          shoulderPos={childRightShoulder}
          handPosRef={childRightHandRef}
          fingerCurlRef={childFingerCurlR}
          elbowBendDir={[0.3, 0, 0.5]}
        />
      </group>
    </group>
  );
};

// ============================================================
// LOVE HEARTS floating up
// ============================================================
const Heart = ({ x, speed, phase, size }) => {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * speed + phase) % 3;
    const norm = t / 3;
    ref.current.position.y = 0.5 + norm * 1.5;
    ref.current.position.x = x + Math.sin(norm * Math.PI * 2) * 0.1;
    ref.current.material.opacity = Math.sin(norm * Math.PI) * 0.4;
    ref.current.scale.setScalar(size * (0.5 + norm * 0.5));
  });

  return (
    <mesh ref={ref} position={[x, 0.5, 0.3]}>
      <sphereGeometry args={[0.04, 6, 6]} />
      <meshBasicMaterial color="#F472B6" transparent opacity={0} />
    </mesh>
  );
};

const LoveHearts = memo(() => {
  const hearts = useMemo(() => Array.from({ length: 4 }).map(() => ({
    x: (Math.random() - 0.5) * 1.5,
    speed: 0.3 + Math.random() * 0.3,
    phase: Math.random() * 3,
    size: 0.7 + Math.random() * 0.6,
  })), []);

  return <>{hearts.map((h, i) => <Heart key={i} {...h} />)}</>;
});

// ============================================================
// FULL FAMILY SCENE
// ============================================================
const FamilyScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.7} />
    <pointLight position={[0, 1.5, 1]} intensity={0.4} color="#FDE68A" distance={4} />
    <Room />
    <FamilyGroup />
    <LoveHearts />
    <Sparkles count={6} />
  </>
));

export default FamilyScene;
