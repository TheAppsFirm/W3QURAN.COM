/**
 * SaiScene.jsx
 * 3D Sa'i scene - walking/running between Safa and Marwah
 * The pilgrim walks between the two hills 7 times
 */

import React, { useRef, memo, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Colors
const ROCK_LIGHT = '#A8998A';
const ROCK_DARK = '#7A6B5E';
const MARBLE = '#F5F0E8';
const SKIN = '#F5C67A';
const WHITE_CLOTH = '#F8FAFC';
const CLOTH_SHADOW = '#E2E8F0';
const GREEN_MARKER = '#10B981';

// ============================================================
// SAFA HILL (starting point)
// ============================================================
const SafaHill = memo(() => (
  <group position={[-3.5, 0, 0]}>
    {/* Main rock formation */}
    <mesh position={[0, 0.3, 0]}>
      <dodecahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial color={ROCK_LIGHT} roughness={0.9} flatShading />
    </mesh>
    <mesh position={[0.3, 0.1, 0.2]}>
      <dodecahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial color={ROCK_DARK} roughness={0.9} flatShading />
    </mesh>
    <mesh position={[-0.2, 0.15, -0.2]}>
      <dodecahedronGeometry args={[0.4, 1]} />
      <meshStandardMaterial color={ROCK_LIGHT} roughness={0.9} flatShading />
    </mesh>

    {/* Green sign marker */}
    <mesh position={[0, 1.2, 0]}>
      <boxGeometry args={[0.6, 0.15, 0.05]} />
      <meshStandardMaterial color={GREEN_MARKER} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0.6, 0]}>
      <cylinderGeometry args={[0.03, 0.03, 0.8, 6]} />
      <meshStandardMaterial color="#666" roughness={0.6} />
    </mesh>

    {/* Text "SAFA" indicator */}
    <mesh position={[0, 1.4, 0]}>
      <boxGeometry args={[0.4, 0.1, 0.02]} />
      <meshBasicMaterial color="#FEF3C7" />
    </mesh>
  </group>
));

// ============================================================
// MARWAH HILL (end point)
// ============================================================
const MarwahHill = memo(() => (
  <group position={[3.5, 0, 0]}>
    {/* Main rock formation */}
    <mesh position={[0, 0.35, 0]}>
      <dodecahedronGeometry args={[0.85, 1]} />
      <meshStandardMaterial color={ROCK_DARK} roughness={0.9} flatShading />
    </mesh>
    <mesh position={[-0.35, 0.15, 0.15]}>
      <dodecahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial color={ROCK_LIGHT} roughness={0.9} flatShading />
    </mesh>
    <mesh position={[0.2, 0.1, -0.25]}>
      <dodecahedronGeometry args={[0.45, 1]} />
      <meshStandardMaterial color={ROCK_DARK} roughness={0.9} flatShading />
    </mesh>

    {/* Green sign marker */}
    <mesh position={[0, 1.2, 0]}>
      <boxGeometry args={[0.6, 0.15, 0.05]} />
      <meshStandardMaterial color={GREEN_MARKER} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0.6, 0]}>
      <cylinderGeometry args={[0.03, 0.03, 0.8, 6]} />
      <meshStandardMaterial color="#666" roughness={0.6} />
    </mesh>

    {/* Text indicator */}
    <mesh position={[0, 1.4, 0]}>
      <boxGeometry args={[0.5, 0.1, 0.02]} />
      <meshBasicMaterial color="#FEF3C7" />
    </mesh>
  </group>
));

// ============================================================
// MAS'A (covered corridor between hills)
// ============================================================
const MasaCorridor = memo(() => (
  <group>
    {/* Floor */}
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[8, 2]} />
      <meshStandardMaterial color={MARBLE} roughness={0.3} />
    </mesh>

    {/* Floor lane markings */}
    <mesh position={[0, 0.001, -0.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[7, 0.02]} />
      <meshStandardMaterial color="#E2E8F0" />
    </mesh>
    <mesh position={[0, 0.001, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[7, 0.02]} />
      <meshStandardMaterial color="#E2E8F0" />
    </mesh>

    {/* Green marker zone (where men run) */}
    <mesh position={[0, 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2, 1.8]} />
      <meshStandardMaterial color="#D1FAE5" transparent opacity={0.5} />
    </mesh>
    {/* Green lights */}
    <mesh position={[-1, 0.5, 0.95]}>
      <boxGeometry args={[0.1, 0.1, 0.05]} />
      <meshBasicMaterial color="#10B981" />
    </mesh>
    <mesh position={[1, 0.5, 0.95]}>
      <boxGeometry args={[0.1, 0.1, 0.05]} />
      <meshBasicMaterial color="#10B981" />
    </mesh>

    {/* Columns along the corridor */}
    {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((x, i) => (
      <group key={i}>
        <mesh position={[x, 0.8, 0.9]}>
          <cylinderGeometry args={[0.06, 0.08, 1.6, 8]} />
          <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
        </mesh>
        <mesh position={[x, 0.8, -0.9]}>
          <cylinderGeometry args={[0.06, 0.08, 1.6, 8]} />
          <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
        </mesh>
      </group>
    ))}

    {/* Ceiling hint */}
    <mesh position={[0, 1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[8, 2]} />
      <meshStandardMaterial color="#F8FAFC" roughness={0.5} side={THREE.DoubleSide} />
    </mesh>

    {/* Arches between columns */}
    {[-2, -1, 0, 1, 2].map((x, i) => (
      <group key={`arch-${i}`}>
        <mesh position={[x, 1.5, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.03, 8, 12, Math.PI]} />
          <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
        </mesh>
        <mesh position={[x, 1.5, -0.9]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.03, 8, 12, Math.PI]} />
          <meshStandardMaterial color="#E8E0D0" roughness={0.5} />
        </mesh>
      </group>
    ))}
  </group>
));

// ============================================================
// OTHER PILGRIMS walking (crowd)
// ============================================================
const WalkingPilgrim = ({ startX, speed, delay, direction = 1 }) => {
  const groupRef = useRef();
  const initialDelay = useMemo(() => delay, [delay]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime + initialDelay;

    // Walk between Safa and Marwah
    const walkCycle = 8; // seconds for one way
    const progress = ((t * speed) % walkCycle) / walkCycle;

    // Ping-pong motion
    const lap = Math.floor((t * speed) / walkCycle);
    const goingRight = lap % 2 === 0;

    const x = goingRight
      ? THREE.MathUtils.lerp(-3, 3, progress)
      : THREE.MathUtils.lerp(3, -3, progress);

    groupRef.current.position.x = x;
    groupRef.current.position.y = Math.abs(Math.sin(progress * Math.PI * 12)) * 0.02;
    groupRef.current.rotation.y = goingRight ? Math.PI / 2 : -Math.PI / 2;
  });

  return (
    <group ref={groupRef} position={[startX, 0, direction * 0.3]} scale={0.8}>
      {/* Pilgrim in Ihram */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.3, 8]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.08, 0.09, 0.3, 8]} />
        <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.48, 0]}>
        <sphereGeometry args={[0.08, 10, 10]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
    </group>
  );
};

// ============================================================
// MAIN PILGRIM (larger, animated)
// ============================================================
const MainPilgrim = () => {
  const groupRef = useRef();
  const armLRef = useRef();
  const armRRef = useRef();
  const lapCountRef = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    const walkCycle = 6; // seconds per lap
    const progress = (t % walkCycle) / walkCycle;
    const lap = Math.floor(t / walkCycle);
    const goingRight = lap % 2 === 0;

    // Track laps (7 total for Sa'i)
    lapCountRef.current = Math.min(lap + 1, 7);

    // Position
    const x = goingRight
      ? THREE.MathUtils.lerp(-2.8, 2.8, progress)
      : THREE.MathUtils.lerp(2.8, -2.8, progress);

    groupRef.current.position.x = x;

    // Running in green zone (middle section)
    const inGreenZone = Math.abs(x) < 1;
    const bounceHeight = inGreenZone ? 0.04 : 0.02;
    const bounceSpeed = inGreenZone ? 8 : 5;

    groupRef.current.position.y = Math.abs(Math.sin(t * bounceSpeed)) * bounceHeight;
    groupRef.current.rotation.y = goingRight ? Math.PI / 2 : -Math.PI / 2;

    // Arm swing
    if (armLRef.current && armRRef.current) {
      const swing = Math.sin(t * (inGreenZone ? 12 : 8)) * (inGreenZone ? 0.4 : 0.25);
      armLRef.current.rotation.x = swing;
      armRRef.current.rotation.x = -swing;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.3}>
      {/* Body in Ihram */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.35, 12]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.4, 12]} />
        <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
      </mesh>

      {/* Head */}
      <group position={[0, 0.55, 0]}>
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
        <mesh position={[-0.03, 0.02, 0.08]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        <mesh position={[0.03, 0.02, 0.08]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.03, 0.085]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.025, 0.008, 6, 8, Math.PI]} />
          <meshStandardMaterial color="#C0392B" />
        </mesh>
      </group>

      {/* Arms (animated) */}
      <group ref={armLRef} position={[-0.1, 0.3, 0]}>
        <mesh rotation={[0, 0, 0.3]}>
          <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>
      <group ref={armRRef} position={[0.1, 0.3, 0]}>
        <mesh rotation={[0, 0, -0.3]}>
          <capsuleGeometry args={[0.025, 0.18, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>

      {/* Feet */}
      <mesh position={[-0.04, -0.28, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
      <mesh position={[0.04, -0.28, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.08]} />
        <meshStandardMaterial color="#8B6914" roughness={0.7} />
      </mesh>
    </group>
  );
};

// ============================================================
// CROWD OF PILGRIMS
// ============================================================
const PilgrimCrowd = memo(() => {
  const pilgrims = useMemo(() => [
    { startX: -2, speed: 0.8, delay: 0, direction: 1 },
    { startX: 1, speed: 0.9, delay: 2, direction: -1 },
    { startX: -1, speed: 0.7, delay: 4, direction: 1 },
    { startX: 2, speed: 0.85, delay: 1, direction: -1 },
    { startX: 0, speed: 0.75, delay: 3, direction: 1 },
    { startX: -2.5, speed: 0.95, delay: 5, direction: -1 },
    { startX: 2.5, speed: 0.7, delay: 2.5, direction: 1 },
    { startX: 1.5, speed: 0.8, delay: 3.5, direction: -1 },
  ], []);

  return (
    <>
      {pilgrims.map((p, i) => (
        <WalkingPilgrim key={i} {...p} />
      ))}
    </>
  );
});

// ============================================================
// SCENE LIGHTING
// ============================================================
const SceneLighting = memo(() => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 4, 3]} intensity={0.8} color="#FFF8E1" />
    <pointLight position={[0, 2, 0]} intensity={0.4} color="#FDE68A" distance={6} />
    <pointLight position={[-3, 1, 0]} intensity={0.3} color="#FFF5E0" distance={4} />
    <pointLight position={[3, 1, 0]} intensity={0.3} color="#FFF5E0" distance={4} />
  </>
));

// ============================================================
// MAIN SCENE EXPORT
// ============================================================
const SaiScene = memo(({ variant = 'sai', isActive = true }) => (
  <>
    <SceneLighting />
    <MasaCorridor />
    <SafaHill />
    <MarwahHill />
    <MainPilgrim />
    <PilgrimCrowd />
  </>
));

export default SaiScene;
