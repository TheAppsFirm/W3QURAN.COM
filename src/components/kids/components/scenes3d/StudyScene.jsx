/**
 * StudyScene.jsx
 * 3D study scene with 3 variants:
 * - reading: child turning pages of a book
 * - writing: hand moves with pen on paper
 * - dua: hands raised in supplication
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  EmiratiHeadStatic, EmiratiBody,
  StaticArm, AnimatedArm,
  SceneLights, Sparkles
} from './SharedAvatar';

// ============================================================
// STUDY FURNITURE
// ============================================================
const Desk = memo(() => (
  <group position={[0, -0.25, 0]}>
    {/* Desktop */}
    <mesh>
      <boxGeometry args={[2.0, 0.06, 1.0]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Front edge */}
    <mesh position={[0, -0.02, 0.48]}>
      <boxGeometry args={[2.04, 0.1, 0.04]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Desk legs */}
    {[[-0.9, -0.4, -0.4], [0.9, -0.4, -0.4], [-0.9, -0.4, 0.4], [0.9, -0.4, 0.4]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <boxGeometry args={[0.06, 0.7, 0.06]} />
        <meshStandardMaterial color="#8B6540" roughness={0.6} />
      </mesh>
    ))}
    {/* Drawer */}
    <mesh position={[0.5, -0.15, 0.3]}>
      <boxGeometry args={[0.5, 0.18, 0.35]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    <mesh position={[0.5, -0.15, 0.48]}>
      <sphereGeometry args={[0.02, 6, 6]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
  </group>
));

const Chair = memo(({ position }) => (
  <group position={position}>
    <mesh position={[0, -0.35, 0]}>
      <boxGeometry args={[0.4, 0.04, 0.38]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    <mesh position={[0, -0.05, -0.17]}>
      <boxGeometry args={[0.38, 0.56, 0.04]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {[[-0.16, -0.58, -0.14], [0.16, -0.58, -0.14], [-0.16, -0.58, 0.14], [0.16, -0.58, 0.14]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.02, 0.02, 0.42, 4]} />
        <meshStandardMaterial color="#8B6540" roughness={0.6} />
      </mesh>
    ))}
  </group>
));

const Book = memo(({ position = [0.15, -0.18, 0.1], open = true }) => (
  <group position={position}>
    {open ? (
      <>
        {/* Left page */}
        <mesh position={[-0.12, 0, 0]} rotation={[0, 0, -0.02]}>
          <boxGeometry args={[0.22, 0.015, 0.28]} />
          <meshStandardMaterial color="#FFFBEB" roughness={0.6} />
        </mesh>
        {/* Right page */}
        <mesh position={[0.12, 0, 0]} rotation={[0, 0, 0.02]}>
          <boxGeometry args={[0.22, 0.015, 0.28]} />
          <meshStandardMaterial color="#FFF8E7" roughness={0.6} />
        </mesh>
        {/* Spine */}
        <mesh position={[0, -0.005, 0]}>
          <boxGeometry args={[0.02, 0.025, 0.3]} />
          <meshStandardMaterial color="#065F46" roughness={0.5} />
        </mesh>
        {/* Cover edges */}
        <mesh position={[-0.23, -0.005, 0]}>
          <boxGeometry args={[0.015, 0.025, 0.3]} />
          <meshStandardMaterial color="#065F46" roughness={0.5} />
        </mesh>
        <mesh position={[0.23, -0.005, 0]}>
          <boxGeometry args={[0.015, 0.025, 0.3]} />
          <meshStandardMaterial color="#065F46" roughness={0.5} />
        </mesh>
        {/* Text lines (simplified) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={`l-${i}`} position={[-0.12, 0.01, -0.08 + i * 0.04]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.16, 0.008]} />
            <meshStandardMaterial color="#64748B" transparent opacity={0.4} />
          </mesh>
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={`r-${i}`} position={[0.12, 0.01, -0.08 + i * 0.04]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.16, 0.008]} />
            <meshStandardMaterial color="#64748B" transparent opacity={0.4} />
          </mesh>
        ))}
      </>
    ) : (
      <mesh>
        <boxGeometry args={[0.2, 0.03, 0.28]} />
        <meshStandardMaterial color="#065F46" roughness={0.5} />
      </mesh>
    )}
  </group>
));

const PenAndPaper = memo(({ position = [-0.3, -0.18, 0.1] }) => (
  <group position={position}>
    {/* Paper */}
    <mesh>
      <boxGeometry args={[0.25, 0.005, 0.32]} />
      <meshStandardMaterial color="white" roughness={0.5} />
    </mesh>
    {/* Written lines */}
    {Array.from({ length: 4 }).map((_, i) => (
      <mesh key={i} position={[0, 0.004, -0.1 + i * 0.04]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.18, 0.006]} />
        <meshStandardMaterial color="#1E293B" transparent opacity={0.3} />
      </mesh>
    ))}
    {/* Pen */}
    <mesh position={[0.2, 0.02, 0]} rotation={[0, 0.3, Math.PI / 12]}>
      <cylinderGeometry args={[0.008, 0.008, 0.18, 4]} />
      <meshStandardMaterial color="#1E293B" roughness={0.4} />
    </mesh>
    <mesh position={[0.2, 0.02, 0.09]} rotation={[0, 0.3, Math.PI / 12]}>
      <coneGeometry args={[0.008, 0.025, 4]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
  </group>
));

const Lamp = memo(() => (
  <group position={[0.7, -0.03, -0.2]}>
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[0.06, 0.08, 0.04, 8]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
    <mesh position={[0, 0.12, 0]}>
      <cylinderGeometry args={[0.01, 0.01, 0.2, 4]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
    <mesh position={[0, 0.25, 0]}>
      <cylinderGeometry args={[0.06, 0.1, 0.12, 8]} />
      <meshStandardMaterial color="#FDE68A" roughness={0.5} transparent opacity={0.8} />
    </mesh>
  </group>
));

const Room = memo(() => (
  <group>
    <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.7} />
    </mesh>
    <mesh position={[0, 0.5, -1.0]}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial color="#FFF8E7" roughness={0.9} />
    </mesh>
    {/* Bookshelf on wall */}
    <mesh position={[-1.0, 0.3, -0.95]}>
      <boxGeometry args={[0.8, 0.8, 0.08]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Shelf boards */}
    <mesh position={[-1.0, 0.0, -0.9]}>
      <boxGeometry args={[0.7, 0.02, 0.06]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    <mesh position={[-1.0, 0.3, -0.9]}>
      <boxGeometry args={[0.7, 0.02, 0.06]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Books on shelf */}
    {[[-1.25, '#3B82F6'], [-1.15, '#EF4444'], [-1.05, '#10B981'], [-0.95, '#F59E0B'], [-0.85, '#8B5CF6']].map(([x, color], i) => (
      <mesh key={i} position={[x, 0.15, -0.88]}>
        <boxGeometry args={[0.06, 0.22, 0.04]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
    ))}
  </group>
));

// ============================================================
// READING CHARACTER
// ============================================================
const ReadingCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const rightHandRef = useRef([0.35, -0.12, 0.2]);
  const fingerCurlR = useRef(0.3);
  const pageRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];
  const leftElbow = [-0.32, 0.0, 0.2];
  const leftHand = [-0.2, -0.12, 0.3];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 5;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    // Page turning animation
    if (phase < 0.6) {
      // Reading - hand rests near book
      rightHandRef.current = [0.2, -0.12, 0.22];
      fingerCurlR.current = 0.3;

      if (pageRef.current) {
        pageRef.current.rotation.y = 0;
      }
    } else if (phase < 0.8) {
      // Turning page
      const p = smooth((phase - 0.6) / 0.2);
      rightHandRef.current = [
        THREE.MathUtils.lerp(0.2, 0.3, Math.sin(p * Math.PI)),
        -0.12 + Math.sin(p * Math.PI) * 0.05,
        0.22,
      ];
      fingerCurlR.current = 0.5;

      if (pageRef.current) {
        pageRef.current.rotation.y = p * Math.PI;
      }
    } else {
      rightHandRef.current = [0.2, -0.12, 0.22];
      fingerCurlR.current = 0.3;
      if (pageRef.current) {
        pageRef.current.rotation.y = 0;
      }
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.005;
      headRef.current.rotation.x = 0.12; // Looking down at book
      headRef.current.rotation.y = Math.sin(t * 0.3) * 0.05; // Eye scanning
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.015;
    }

    if (mouthOpenRef.current) {
      // Slight movement (reading aloud?)
      mouthOpenRef.current.scale.y = 0.3 + Math.sin(t * 3) * 0.08;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group position={[-0.3, -0.1, -0.45]}>
      <EmiratiBody />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <StaticArm shoulderPos={leftShoulderPos} elbowPos={leftElbow} handPos={leftHand} />
      <AnimatedArm
        shoulderPos={rightShoulderPos}
        handPosRef={rightHandRef}
        fingerCurlRef={fingerCurlR}
        elbowBendDir={[0.3, 0, 0.5]}
      />
      {/* Animated page for turning */}
      <mesh ref={pageRef} position={[0.2, -0.08, 0.3]}>
        <boxGeometry args={[0.2, 0.002, 0.25]} />
        <meshStandardMaterial color="#FFFBEB" roughness={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// ============================================================
// WRITING CHARACTER
// ============================================================
const WritingCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const rightHandRef = useRef([0.0, -0.1, 0.25]);
  const fingerCurlR = useRef(0.7);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];
  const leftElbow = [-0.32, 0.0, 0.2];
  const leftHand = [-0.25, -0.12, 0.28];

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Writing motion - hand moves across paper
    const writeX = Math.sin(t * 1.5) * 0.08;
    const writeZ = 0.25 + ((t * 0.15) % 0.15) - 0.075;
    rightHandRef.current = [writeX, -0.1, writeZ];
    fingerCurlR.current = 0.7;

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.003;
      headRef.current.rotation.x = 0.15; // Looking down
      headRef.current.rotation.y = writeX * 0.3; // Following hand
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.01;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = 0.3;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group position={[-0.3, -0.1, -0.45]}>
      <EmiratiBody />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <StaticArm shoulderPos={leftShoulderPos} elbowPos={leftElbow} handPos={leftHand} />
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
// DUA CHARACTER - hands raised
// ============================================================
const DuaCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.22, 0.35, 0.3]);
  const rightHandRef = useRef([0.22, 0.35, 0.3]);
  const fingerCurlL = useRef(0);
  const fingerCurlR = useRef(0);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const sway = Math.sin(t * 1.0) * 0.02;
    const breathe = Math.sin(t * 0.8) * 0.015;

    leftHandRef.current = [-0.24 + sway, 0.35 + breathe, 0.32];
    rightHandRef.current = [0.24 - sway, 0.35 + breathe, 0.32];

    if (headRef.current) {
      headRef.current.position.y = headBaseY + breathe * 0.5;
      headRef.current.rotation.x = -0.1; // Looking slightly up
      headRef.current.rotation.z = Math.sin(t * 0.4) * 0.015;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = 0.35 + Math.sin(t * 2.5) * 0.12;
      mouthOpenRef.current.scale.x = 1.0;
    }
  });

  return (
    <group position={[-0.3, -0.1, -0.45]}>
      <EmiratiBody />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <AnimatedArm
        shoulderPos={leftShoulderPos}
        handPosRef={leftHandRef}
        fingerCurlRef={fingerCurlL}
        elbowBendDir={[-0.3, 0.2, 0.5]}
      />
      <AnimatedArm
        shoulderPos={rightShoulderPos}
        handPosRef={rightHandRef}
        fingerCurlRef={fingerCurlR}
        elbowBendDir={[0.3, 0.2, 0.5]}
      />
    </group>
  );
};

// ============================================================
// FULL STUDY SCENE
// ============================================================
const StudyScene = memo(({ variant = 'reading', isActive }) => (
  <>
    <SceneLights warmth={0.6} />
    <pointLight position={[0.7, 0.5, 0]} intensity={0.5} color="#FDE68A" distance={3} />
    <Room />
    <Desk />
    <Chair position={[-0.3, 0, -0.45]} />
    <Lamp />
    {variant === 'writing' ? <PenAndPaper position={[-0.3, -0.18, -0.15]} /> : <Book position={[-0.1, -0.18, -0.15]} />}

    {variant === 'reading' && <ReadingCharacter />}
    {variant === 'writing' && <WritingCharacter />}
    {variant === 'dua' && <DuaCharacter />}

    <Sparkles count={variant === 'dua' ? 7 : 4} />
  </>
));

export default StudyScene;
