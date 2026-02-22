/**
 * TravelScene.jsx
 * 3D travel scene - car with rotating wheels, child inside.
 * Used for dua when traveling.
 */

import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  EmiratiHeadStatic, EmiratiBody,
  StaticArm,
  SceneLights, Sparkles
} from './SharedAvatar';

// ============================================================
// CAR
// ============================================================
const Wheel = memo(({ position }) => {
  const wheelRef = useRef();

  useFrame((state) => {
    if (!wheelRef.current) return;
    wheelRef.current.rotation.z += 0.08;
  });

  return (
    <group position={position}>
      <group ref={wheelRef}>
        {/* Tire */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.12, 0.05, 8, 16]} />
          <meshStandardMaterial color="#1E293B" roughness={0.8} />
        </mesh>
        {/* Hubcap */}
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <circleGeometry args={[0.09, 8]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.3} metalness={0.5} />
        </mesh>
        {/* Spokes */}
        {[0, Math.PI / 3, Math.PI * 2 / 3, Math.PI, Math.PI * 4 / 3, Math.PI * 5 / 3].map((angle, i) => (
          <mesh key={i} position={[0, Math.sin(angle) * 0.05, Math.cos(angle) * 0.05]} rotation={[angle, Math.PI / 2, 0]}>
            <boxGeometry args={[0.01, 0.08, 0.01]} />
            <meshStandardMaterial color="#CBD5E1" roughness={0.3} metalness={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  );
});

const CarBody = memo(() => (
  <group>
    {/* Lower body - sleeker with rounded feel */}
    <mesh position={[0, -0.1, 0]}>
      <boxGeometry args={[2.1, 0.38, 0.9]} />
      <meshStandardMaterial color="#2563EB" roughness={0.35} />
    </mesh>
    {/* Hood slope (front wedge for modern look) */}
    <mesh position={[-0.7, 0.04, 0]} rotation={[0, 0, -0.12]}>
      <boxGeometry args={[0.6, 0.12, 0.88]} />
      <meshStandardMaterial color="#3B82F6" roughness={0.35} />
    </mesh>
    {/* Upper cabin - TALLER (+0.2) so head fits */}
    <mesh position={[0.1, 0.32, 0]}>
      <boxGeometry args={[1.2, 0.65, 0.85]} />
      <meshStandardMaterial color="#60A5FA" roughness={0.4} />
    </mesh>
    {/* Roof accent strip */}
    <mesh position={[0.1, 0.65, 0]}>
      <boxGeometry args={[1.15, 0.02, 0.82]} />
      <meshStandardMaterial color="#93C5FD" roughness={0.3} />
    </mesh>
    {/* Windshield - angled for modern look */}
    <mesh position={[-0.48, 0.32, 0]} rotation={[0, 0, -0.35]}>
      <boxGeometry args={[0.02, 0.58, 0.8]} />
      <meshStandardMaterial color="#BFDBFE" transparent opacity={0.5} roughness={0.1} />
    </mesh>
    {/* Rear window - angled */}
    <mesh position={[0.64, 0.32, 0]} rotation={[0, 0, 0.25]}>
      <boxGeometry args={[0.02, 0.55, 0.8]} />
      <meshStandardMaterial color="#BFDBFE" transparent opacity={0.5} roughness={0.1} />
    </mesh>
    {/* Side windows - taller to match cabin */}
    <mesh position={[0.1, 0.35, 0.43]}>
      <boxGeometry args={[0.9, 0.45, 0.02]} />
      <meshStandardMaterial color="#BFDBFE" transparent opacity={0.4} roughness={0.1} />
    </mesh>
    <mesh position={[0.1, 0.35, -0.43]}>
      <boxGeometry args={[0.9, 0.45, 0.02]} />
      <meshStandardMaterial color="#BFDBFE" transparent opacity={0.4} roughness={0.1} />
    </mesh>
    {/* Headlights - modern elongated */}
    <mesh position={[-1.05, -0.05, 0.3]}>
      <boxGeometry args={[0.04, 0.06, 0.12]} />
      <meshStandardMaterial color="#FDE68A" emissive="#FDE68A" emissiveIntensity={0.5} roughness={0.2} />
    </mesh>
    <mesh position={[-1.05, -0.05, -0.3]}>
      <boxGeometry args={[0.04, 0.06, 0.12]} />
      <meshStandardMaterial color="#FDE68A" emissive="#FDE68A" emissiveIntensity={0.5} roughness={0.2} />
    </mesh>
    {/* Taillights - modern strip */}
    <mesh position={[1.05, -0.05, 0.3]}>
      <boxGeometry args={[0.04, 0.05, 0.14]} />
      <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.3} roughness={0.3} />
    </mesh>
    <mesh position={[1.05, -0.05, -0.3]}>
      <boxGeometry args={[0.04, 0.05, 0.14]} />
      <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.3} roughness={0.3} />
    </mesh>
    {/* Bumpers */}
    <mesh position={[-1.06, -0.18, 0]}>
      <boxGeometry args={[0.04, 0.1, 0.88]} />
      <meshStandardMaterial color="#64748B" roughness={0.4} metalness={0.3} />
    </mesh>
    <mesh position={[1.06, -0.18, 0]}>
      <boxGeometry args={[0.04, 0.1, 0.88]} />
      <meshStandardMaterial color="#64748B" roughness={0.4} metalness={0.3} />
    </mesh>
    {/* Door lines */}
    <mesh position={[0.0, 0.0, 0.451]}>
      <boxGeometry args={[0.01, 0.7, 0.005]} />
      <meshStandardMaterial color="#1E40AF" roughness={0.3} />
    </mesh>
    <mesh position={[0.0, 0.0, -0.451]}>
      <boxGeometry args={[0.01, 0.7, 0.005]} />
      <meshStandardMaterial color="#1E40AF" roughness={0.3} />
    </mesh>
  </group>
));


// ============================================================
// ROAD & ENVIRONMENT
// ============================================================
const Road = memo(() => (
  <group>
    {/* Road surface */}
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 4]} />
      <meshStandardMaterial color="#475569" roughness={0.8} />
    </mesh>
    {/* Road markings */}
    {Array.from({ length: 8 }).map((_, i) => (
      <mesh key={i} position={[-3.5 + i * 1.2, -0.49, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.5, 0.06]} />
        <meshStandardMaterial color="#FDE68A" roughness={0.5} />
      </mesh>
    ))}
    {/* Desert ground on sides */}
    <mesh position={[0, -0.52, -2.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[12, 3]} />
      <meshStandardMaterial color="#D4A574" roughness={0.9} />
    </mesh>
    <mesh position={[0, -0.52, 2.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[12, 3]} />
      <meshStandardMaterial color="#D4A574" roughness={0.9} />
    </mesh>
  </group>
));

const DesertElements = memo(() => (
  <group>
    {/* Palm tree */}
    <group position={[-2, -0.5, -2.5]}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.07, 1.5, 6]} />
        <meshStandardMaterial color="#8B6914" roughness={0.8} />
      </mesh>
      {[0, 1.2, 2.4, 3.6, 4.8].map((angle, i) => (
        <group key={i} position={[0, 1.2, 0]} rotation={[0.8, angle, 0]}>
          <mesh position={[0, 0, 0.25]}>
            <boxGeometry args={[0.05, 0.02, 0.5]} />
            <meshStandardMaterial color="#22C55E" roughness={0.7} />
          </mesh>
        </group>
      ))}
    </group>
    {/* Sand dune */}
    <mesh position={[2, -0.3, -3]} scale={[2, 0.5, 1]}>
      <sphereGeometry args={[0.5, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color="#C8A882" roughness={0.9} />
    </mesh>
    {/* Distant mountains */}
    <mesh position={[0, 0.5, -4]}>
      <coneGeometry args={[1.5, 2, 4]} />
      <meshStandardMaterial color="#9CA3AF" roughness={0.9} />
    </mesh>
    <mesh position={[2.5, 0.3, -4.5]}>
      <coneGeometry args={[1, 1.5, 4]} />
      <meshStandardMaterial color="#A3A8B0" roughness={0.9} />
    </mesh>
  </group>
));

// Moving scenery lines to give sense of motion
const MotionLines = memo(() => {
  const linesRef = useRef([]);

  useFrame((state) => {
    linesRef.current.forEach((line, i) => {
      if (!line) return;
      line.position.x = ((line.position.x + 0.06) % 6) - 3;
    });
  });

  return (
    <group position={[0, -0.48, 1.5]}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} ref={el => { linesRef.current[i] = el; }} position={[-3 + i * 1.5, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.3, 0.015]} />
          <meshStandardMaterial color="#94A3B8" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
});

// ============================================================
// PASSENGER CHARACTER (sitting)
// ============================================================
const PassengerCharacter = memo(() => {
  const headRef = useRef();
  const mouthOpenRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];
  const leftElbow = [-0.32, 0.0, 0.2];
  const leftHand = [-0.25, -0.12, 0.3];
  const rightElbow = [0.32, 0.0, 0.2];
  const rightHand = [0.25, -0.12, 0.3];

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (headRef.current) {
      // Gentle car sway
      headRef.current.position.y = headBaseY + Math.sin(t * 2.5) * 0.008;
      headRef.current.rotation.z = Math.sin(t * 1.8) * 0.025;
      // Looking out window occasionally
      headRef.current.rotation.y = Math.sin(t * 0.4) * 0.15;
      headRef.current.rotation.x = Math.sin(t * 0.3) * 0.04;
    }

    if (mouthOpenRef.current) {
      // Gentle smile / talking
      mouthOpenRef.current.scale.y = 0.35 + Math.sin(t * 1.5) * 0.1;
      mouthOpenRef.current.scale.x = 1.2;
    }
  });

  return (
    <group position={[0.2, 0.12, 0]} scale={0.48}>
      <EmiratiBody />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <StaticArm shoulderPos={leftShoulderPos} elbowPos={leftElbow} handPos={leftHand} />
      <StaticArm shoulderPos={rightShoulderPos} elbowPos={rightElbow} handPos={rightHand} />
    </group>
  );
});

// ============================================================
// SKY
// ============================================================
const Sky = memo(() => (
  <group>
    <mesh position={[0, 3, -5]}>
      <planeGeometry args={[15, 6]} />
      <meshStandardMaterial color="#7DD3FC" roughness={0.9} />
    </mesh>
    {/* Sun */}
    <mesh position={[3, 3.5, -4.5]}>
      <circleGeometry args={[0.4, 16]} />
      <meshBasicMaterial color="#FDE68A" />
    </mesh>
    {/* Clouds */}
    <group position={[-2, 3, -3]}>
      <mesh><sphereGeometry args={[0.3, 6, 6]} /><meshStandardMaterial color="white" roughness={0.8} /></mesh>
      <mesh position={[0.2, 0.05, 0]}><sphereGeometry args={[0.22, 6, 6]} /><meshStandardMaterial color="#F8FAFC" roughness={0.8} /></mesh>
      <mesh position={[-0.18, -0.02, 0]}><sphereGeometry args={[0.2, 6, 6]} /><meshStandardMaterial color="#F1F5F9" roughness={0.8} /></mesh>
    </group>
  </group>
));

// ============================================================
// FULL TRAVEL SCENE
// ============================================================
const TravelScene = memo(({ variant, isActive }) => {
  const carRef = useRef();

  useFrame((state) => {
    if (!carRef.current) return;
    const t = state.clock.elapsedTime;
    // Gentle car bounce
    carRef.current.position.y = Math.sin(t * 3) * 0.01;
    carRef.current.rotation.z = Math.sin(t * 2.5) * 0.005;
  });

  return (
    <>
      <SceneLights warmth={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} color="#FFF8E1" />
      <Sky />
      <Road />
      <DesertElements />
      <MotionLines />

      <group ref={carRef} position={[0, 0.1, 0]}>
        <CarBody />
        <Wheel position={[-0.6, -0.32, 0.5]} />
        <Wheel position={[0.6, -0.32, 0.5]} />
        <Wheel position={[-0.6, -0.32, -0.5]} />
        <Wheel position={[0.6, -0.32, -0.5]} />
        <PassengerCharacter />
      </group>

      <Sparkles count={4} />
    </>
  );
});

export default TravelScene;
