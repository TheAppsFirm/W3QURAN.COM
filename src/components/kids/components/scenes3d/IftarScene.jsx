/**
 * IftarScene.jsx
 * 3D iftar scene - sunset sky, dates on table, child eating dates.
 * Used for dua when breaking fast.
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
// SUNSET SKY
// ============================================================
const SunsetSky = memo(() => (
  <group position={[0, 2, -3]}>
    {/* Sky gradient layers */}
    <mesh position={[0, 1, 0]}>
      <planeGeometry args={[10, 2]} />
      <meshBasicMaterial color="#1E3A5F" />
    </mesh>
    <mesh position={[0, 0.2, 0]}>
      <planeGeometry args={[10, 1.5]} />
      <meshBasicMaterial color="#7C2D8F" />
    </mesh>
    <mesh position={[0, -0.5, 0]}>
      <planeGeometry args={[10, 1.2]} />
      <meshBasicMaterial color="#EA580C" />
    </mesh>
    <mesh position={[0, -1.0, 0]}>
      <planeGeometry args={[10, 0.8]} />
      <meshBasicMaterial color="#F59E0B" />
    </mesh>
    {/* Sun (setting) */}
    <mesh position={[1.0, -0.8, 0.1]}>
      <circleGeometry args={[0.3, 20]} />
      <meshBasicMaterial color="#FDE68A" />
    </mesh>
    {/* Sun glow */}
    <mesh position={[1.0, -0.8, 0.05]}>
      <circleGeometry args={[0.5, 20]} />
      <meshBasicMaterial color="#F59E0B" transparent opacity={0.3} />
    </mesh>
    {/* Crescent moon */}
    <mesh position={[-1.5, 0.8, 0.1]} rotation={[0, 0, 0.3]}>
      <torusGeometry args={[0.08, 0.02, 6, 16, Math.PI * 1.3]} />
      <meshBasicMaterial color="#FDE68A" />
    </mesh>
    {/* Stars appearing */}
    {[[-2, 1.2], [-0.5, 1.5], [2.0, 1.0], [1.5, 1.6], [-1.8, 0.5]].map(([x, y], i) => (
      <mesh key={i} position={[x, y, 0.1]}>
        <circleGeometry args={[0.015, 5]} />
        <meshBasicMaterial color="#FDE68A" transparent opacity={0.6} />
      </mesh>
    ))}
  </group>
));

// ============================================================
// TABLE WITH IFTAR ITEMS
// ============================================================
const IftarTable = memo(() => (
  <group position={[0, -0.25, 0]}>
    {/* Table top */}
    <mesh>
      <boxGeometry args={[2.2, 0.06, 1.0]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    <mesh position={[0, -0.035, 0]}>
      <boxGeometry args={[2.24, 0.02, 1.04]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Legs */}
    {[[-0.95, -0.42, -0.4], [0.95, -0.42, -0.4], [-0.95, -0.42, 0.4], [0.95, -0.42, 0.4]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.04, 0.04, 0.78, 6]} />
        <meshStandardMaterial color="#8B6540" roughness={0.6} />
      </mesh>
    ))}
    {/* Table cloth (white runner) */}
    <mesh position={[0, 0.035, 0]}>
      <boxGeometry args={[1.8, 0.005, 0.5]} />
      <meshStandardMaterial color="white" roughness={0.5} />
    </mesh>
  </group>
));

const DatePlate = memo(({ position = [0.2, -0.16, 0.1] }) => (
  <group position={position}>
    {/* Plate */}
    <mesh>
      <cylinderGeometry args={[0.2, 0.22, 0.02, 16]} />
      <meshStandardMaterial color="#F1F5F9" roughness={0.3} />
    </mesh>
    <mesh position={[0, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.19, 0.004, 3, 16]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Dates */}
    {[
      [-0.06, 0.03, 0.02],
      [0.04, 0.03, -0.04],
      [-0.02, 0.03, 0.07],
      [0.08, 0.03, 0.04],
      [-0.08, 0.03, -0.05],
      [0.0, 0.03, -0.02],
    ].map((pos, i) => (
      <mesh key={i} position={pos} rotation={[0, i * 0.8, Math.PI / 2]}>
        <capsuleGeometry args={[0.015, 0.025, 4, 8]} />
        <meshStandardMaterial color="#5B3A1A" roughness={0.7} />
      </mesh>
    ))}
  </group>
));

const WaterGlass = memo(({ position = [-0.3, -0.12, -0.15] }) => (
  <group position={position}>
    <mesh>
      <cylinderGeometry args={[0.04, 0.05, 0.16, 8]} />
      <meshStandardMaterial color="#BFDBFE" transparent opacity={0.4} roughness={0.1} />
    </mesh>
    <mesh position={[0, -0.02, 0]}>
      <cylinderGeometry args={[0.035, 0.045, 0.1, 8]} />
      <meshStandardMaterial color="#60A5FA" transparent opacity={0.5} roughness={0.1} />
    </mesh>
  </group>
));

const Lantern = memo(({ position }) => (
  <group position={position}>
    {/* Base */}
    <mesh position={[0, -0.02, 0]}>
      <cylinderGeometry args={[0.04, 0.05, 0.03, 6]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Glass body */}
    <mesh position={[0, 0.08, 0]}>
      <cylinderGeometry args={[0.04, 0.04, 0.15, 6]} />
      <meshStandardMaterial color="#FDE68A" transparent opacity={0.4} roughness={0.2} />
    </mesh>
    {/* Top dome */}
    <mesh position={[0, 0.17, 0]}>
      <coneGeometry args={[0.04, 0.06, 6]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
    {/* Inner glow */}
    <pointLight position={[0, 0.08, 0]} intensity={0.3} color="#FDE68A" distance={1.5} />
  </group>
));

const Chair = memo(({ position }) => (
  <group position={position}>
    <mesh position={[0, -0.35, 0]}>
      <boxGeometry args={[0.4, 0.05, 0.38]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    <mesh position={[0, -0.05, -0.16]}>
      <boxGeometry args={[0.38, 0.55, 0.04]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {[[-0.16, -0.6, -0.14], [0.16, -0.6, -0.14], [-0.16, -0.6, 0.14], [0.16, -0.6, 0.14]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.02, 0.02, 0.45, 4]} />
        <meshStandardMaterial color="#8B6540" roughness={0.6} />
      </mesh>
    ))}
  </group>
));

const Room = memo(() => (
  <group>
    <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#D4A574" roughness={0.8} />
    </mesh>
    {/* Window opening to sunset */}
    <mesh position={[1.5, 0.3, -1.2]}>
      <boxGeometry args={[1.0, 1.2, 0.02]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    <mesh position={[1.5, 0.3, -1.18]}>
      <boxGeometry args={[0.85, 1.05, 0.01]} />
      <meshStandardMaterial color="#1E3A5F" roughness={0.5} />
    </mesh>
    {/* Side wall */}
    <mesh position={[-1.5, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial color="#FFF8E7" roughness={0.9} />
    </mesh>
  </group>
));

// ============================================================
// EATING DATES CHARACTER (seated)
// ============================================================
const IftarCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const fingerCurlRef = useRef(0);
  const foodVisibleRef = useRef(false);

  const headBaseY = 0.58;
  const rightShoulderPos = [0.22, 0.2, 0.05];
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const leftElbow = [-0.35, 0.0, 0.2];
  const leftHand = [-0.35, -0.14, 0.28];

  const restPos = [0.25, -0.1, 0.2];
  const reachPos = [0.45, -0.18, 0.12];
  const grabPos = [0.45, -0.12, 0.12];
  const mouthPos = [0.08, 0.4, 0.36];

  const handPos = useRef([...restPos]);

  useFrame((state) => {
    const cycle = 7;
    const t = (state.clock.elapsedTime % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    let hx, hy, hz, curl, hasFood, chewing;

    if (t < 0.12) {
      hx = restPos[0]; hy = restPos[1]; hz = restPos[2];
      curl = 0; hasFood = false; chewing = false;
    } else if (t < 0.25) {
      const p = smooth((t - 0.12) / 0.13);
      hx = THREE.MathUtils.lerp(restPos[0], reachPos[0], p);
      hy = THREE.MathUtils.lerp(restPos[1], reachPos[1], p);
      hz = THREE.MathUtils.lerp(restPos[2], reachPos[2], p);
      curl = 0; hasFood = false; chewing = false;
    } else if (t < 0.35) {
      const p = smooth((t - 0.25) / 0.1);
      hx = reachPos[0]; hy = THREE.MathUtils.lerp(reachPos[1], grabPos[1], p); hz = reachPos[2];
      curl = p; hasFood = curl > 0.4; chewing = false;
    } else if (t < 0.55) {
      const p = smooth((t - 0.35) / 0.2);
      hx = THREE.MathUtils.lerp(grabPos[0], mouthPos[0], p);
      hy = THREE.MathUtils.lerp(grabPos[1], mouthPos[1], p) + Math.sin(p * Math.PI) * 0.1;
      hz = THREE.MathUtils.lerp(grabPos[2], mouthPos[2], p);
      curl = 1; hasFood = true; chewing = false;
    } else if (t < 0.72) {
      hx = mouthPos[0]; hy = mouthPos[1]; hz = mouthPos[2];
      curl = 0.7; hasFood = (t - 0.55) / 0.17 < 0.15; chewing = true;
    } else if (t < 0.9) {
      const p = smooth((t - 0.72) / 0.18);
      hx = THREE.MathUtils.lerp(mouthPos[0], restPos[0], p);
      hy = THREE.MathUtils.lerp(mouthPos[1], restPos[1], p);
      hz = THREE.MathUtils.lerp(mouthPos[2], restPos[2], p);
      curl = Math.max(0, 0.7 - p); hasFood = false;
      chewing = p < 0.3;
    } else {
      hx = restPos[0]; hy = restPos[1]; hz = restPos[2];
      curl = 0; hasFood = false; chewing = false;
    }

    handPos.current = [hx, hy, hz];
    fingerCurlRef.current = curl;
    foodVisibleRef.current = hasFood;

    // Head animation - use direct target calculation to avoid floating point accumulation
    if (headRef.current) {
      headRef.current.position.y = headBaseY + (chewing ? Math.sin(state.clock.elapsedTime * 12) * 0.005 : 0);
      const headTargetY = t < 0.35 ? 0.2 : 0;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, headTargetY, 0.1);
      headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.015;
    }

    if (mouthOpenRef.current) {
      if (chewing) {
        mouthOpenRef.current.scale.y = 0.6 + Math.sin(state.clock.elapsedTime * 10) * 0.4;
      } else {
        mouthOpenRef.current.scale.y = THREE.MathUtils.lerp(mouthOpenRef.current.scale.y, 0.35, 0.1);
      }
      mouthOpenRef.current.scale.x = chewing ? 1.0 : 1.2;
    }
  });

  return (
    <group position={[-0.4, 0.1, 0.05]}>
      <EmiratiBody />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <StaticArm shoulderPos={leftShoulderPos} elbowPos={leftElbow} handPos={leftHand} />
      <AnimatedArm
        shoulderPos={rightShoulderPos}
        handPosRef={handPos}
        fingerCurlRef={fingerCurlRef}
        foodVisibleRef={foodVisibleRef}
        foodColor="#5B3A1A"
        elbowBendDir={[0.3, 0, 0.5]}
      />
    </group>
  );
};

// ============================================================
// FULL IFTAR SCENE
// ============================================================
const IftarScene = memo(({ variant, isActive }) => (
  <>
    <SceneLights warmth={0.7} />
    <ambientLight intensity={0.3} color="#FDE68A" />
    <pointLight position={[1.5, 0.3, -1.0]} intensity={0.3} color="#F59E0B" distance={4} />
    <SunsetSky />
    <Room />
    <IftarTable />
    <DatePlate />
    <WaterGlass />
    <Lantern position={[-0.6, -0.16, -0.2]} />
    <Lantern position={[0.7, -0.16, -0.25]} />
    <Chair position={[-0.4, 0, 0.5]} />

    <IftarCharacter />

    <Sparkles count={6} />
  </>
));

export default IftarScene;
