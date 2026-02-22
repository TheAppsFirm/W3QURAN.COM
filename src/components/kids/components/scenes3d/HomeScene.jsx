/**
 * HomeScene.jsx
 * 3D home front door scene with 2 variants:
 * - enter: door opens, child enters home
 * - leave: child walks out, door closes behind
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
// HOME ELEMENTS
// ============================================================
const HomeFrontWall = memo(() => (
  <group position={[0, 0.5, -0.8]}>
    {/* Main wall */}
    <mesh>
      <boxGeometry args={[4, 3, 0.15]} />
      <meshStandardMaterial color="#FEF3C7" roughness={0.7} />
    </mesh>
    {/* Wall texture / stucco effect */}
    <mesh position={[0, 0, 0.08]}>
      <boxGeometry args={[3.9, 2.9, 0.01]} />
      <meshStandardMaterial color="#FDE68A" roughness={0.9} transparent opacity={0.3} />
    </mesh>
    {/* Decorative border at top */}
    <mesh position={[0, 1.4, 0.08]}>
      <boxGeometry args={[4, 0.12, 0.02]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.4} metalness={0.3} />
    </mesh>
    {/* Arabic pattern strip */}
    <mesh position={[0, 1.28, 0.08]}>
      <boxGeometry args={[3.5, 0.06, 0.02]} />
      <meshStandardMaterial color="#92400E" roughness={0.5} />
    </mesh>
  </group>
));

const HomeDoor = memo(() => {
  // Static door frame - animated panel is separate
  return (
    <group position={[0, -0.05, -0.7]}>
      {/* Door frame */}
      <mesh position={[-0.48, 0, 0]}>
        <boxGeometry args={[0.1, 2.3, 0.12]} />
        <meshStandardMaterial color="#92400E" roughness={0.5} />
      </mesh>
      <mesh position={[0.48, 0, 0]}>
        <boxGeometry args={[0.1, 2.3, 0.12]} />
        <meshStandardMaterial color="#92400E" roughness={0.5} />
      </mesh>
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[1.06, 0.1, 0.12]} />
        <meshStandardMaterial color="#92400E" roughness={0.5} />
      </mesh>
      {/* Decorative arch above door */}
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = (Math.PI / 6) * i - Math.PI / 2 + Math.PI / 6;
        const x = Math.cos(angle) * 0.45;
        const y = 1.15 + Math.sin(angle) * 0.3;
        return (
          <mesh key={i} position={[x, y, 0.06]}>
            <boxGeometry args={[0.15, 0.06, 0.02]} />
            <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
          </mesh>
        );
      })}
    </group>
  );
});

const AnimatedDoorPanel = memo(({ variant }) => {
  const doorRef = useRef();

  useFrame((state) => {
    if (!doorRef.current) return;
    const t = state.clock.elapsedTime;
    const cycle = 6;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (variant === 'enter') {
      // Door opens 0.05-0.18, stays open 0.18-0.6, closes 0.6-0.75
      if (phase < 0.05) {
        doorRef.current.rotation.y = 0;
      } else if (phase < 0.18) {
        doorRef.current.rotation.y = smooth((phase - 0.05) / 0.13) * -1.4;
      } else if (phase < 0.6) {
        doorRef.current.rotation.y = -1.4;
      } else if (phase < 0.75) {
        doorRef.current.rotation.y = THREE.MathUtils.lerp(-1.4, 0, smooth((phase - 0.6) / 0.15));
      } else {
        doorRef.current.rotation.y = 0;
      }
    } else {
      // Door opens 0.05-0.18, stays open 0.18-0.55, closes 0.55-0.7
      if (phase < 0.05) {
        doorRef.current.rotation.y = 0;
      } else if (phase < 0.18) {
        doorRef.current.rotation.y = smooth((phase - 0.05) / 0.13) * -1.4;
      } else if (phase < 0.55) {
        doorRef.current.rotation.y = -1.4;
      } else if (phase < 0.7) {
        doorRef.current.rotation.y = THREE.MathUtils.lerp(-1.4, 0, smooth((phase - 0.55) / 0.15));
      } else {
        doorRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <group position={[-0.42, -0.05, -0.7]}>
      <group ref={doorRef}>
        <mesh position={[0.4, 0, 0]}>
          <boxGeometry args={[0.8, 2.2, 0.06]} />
          <meshStandardMaterial color="#A0522D" roughness={0.6} />
        </mesh>
        {/* Door panels */}
        <mesh position={[0.4, 0.4, 0.035]}>
          <boxGeometry args={[0.6, 0.7, 0.01]} />
          <meshStandardMaterial color="#8B4513" roughness={0.6} />
        </mesh>
        <mesh position={[0.4, -0.4, 0.035]}>
          <boxGeometry args={[0.6, 0.7, 0.01]} />
          <meshStandardMaterial color="#8B4513" roughness={0.6} />
        </mesh>
        {/* Handle */}
        <mesh position={[0.7, 0, 0.05]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Handle plate */}
        <mesh position={[0.7, 0, 0.04]}>
          <boxGeometry args={[0.06, 0.15, 0.01]} />
          <meshStandardMaterial color="#C49B2C" roughness={0.3} metalness={0.5} />
        </mesh>
      </group>
    </group>
  );
});

const Window = memo(({ position }) => (
  <group position={position}>
    {/* Window frame */}
    <mesh>
      <boxGeometry args={[0.55, 0.6, 0.08]} />
      <meshStandardMaterial color="#92400E" roughness={0.5} />
    </mesh>
    {/* Glass */}
    <mesh position={[0, 0, 0.03]}>
      <boxGeometry args={[0.45, 0.5, 0.02]} />
      <meshStandardMaterial color="#BFDBFE" roughness={0.1} transparent opacity={0.5} />
    </mesh>
    {/* Crossbars */}
    <mesh position={[0, 0, 0.045]}>
      <boxGeometry args={[0.02, 0.52, 0.01]} />
      <meshStandardMaterial color="#92400E" roughness={0.5} />
    </mesh>
    <mesh position={[0, 0, 0.045]}>
      <boxGeometry args={[0.47, 0.02, 0.01]} />
      <meshStandardMaterial color="#92400E" roughness={0.5} />
    </mesh>
    {/* Mashrabiya pattern (simplified) */}
    <mesh position={[0, -0.3, 0.045]}>
      <boxGeometry args={[0.5, 0.04, 0.01]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.4} metalness={0.3} />
    </mesh>
  </group>
));

const PottedPlant = memo(({ position }) => (
  <group position={position}>
    {/* Pot */}
    <mesh position={[0, -0.75, 0]}>
      <cylinderGeometry args={[0.1, 0.12, 0.25, 8]} />
      <meshStandardMaterial color="#A0522D" roughness={0.7} />
    </mesh>
    {/* Pot rim */}
    <mesh position={[0, -0.62, 0]}>
      <cylinderGeometry args={[0.12, 0.1, 0.04, 8]} />
      <meshStandardMaterial color="#8B4513" roughness={0.7} />
    </mesh>
    {/* Plant */}
    <mesh position={[0, -0.45, 0]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshStandardMaterial color="#22C55E" roughness={0.7} />
    </mesh>
    <mesh position={[0.06, -0.3, 0.03]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial color="#16A34A" roughness={0.7} />
    </mesh>
    <mesh position={[-0.05, -0.32, -0.02]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial color="#15803D" roughness={0.7} />
    </mesh>
  </group>
));

const WelcomeMat = memo(() => (
  <group position={[0, -0.98, 0]}>
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[0.7, 0.4]} />
      <meshStandardMaterial color="#92400E" roughness={0.9} />
    </mesh>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.002]}>
      <planeGeometry args={[0.6, 0.3]} />
      <meshStandardMaterial color="#B45309" roughness={0.8} />
    </mesh>
  </group>
));

const Floor = memo(() => (
  <group>
    {/* Outdoor ground */}
    <mesh position={[0, -1.0, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 4]} />
      <meshStandardMaterial color="#D4A574" roughness={0.8} />
    </mesh>
    {/* Indoor floor */}
    <mesh position={[0, -1.0, -2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 4]} />
      <meshStandardMaterial color="#E8D5B7" roughness={0.6} />
    </mesh>
    {/* Threshold */}
    <mesh position={[0, -0.97, -0.6]}>
      <boxGeometry args={[1.0, 0.02, 0.15]} />
      <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.4} />
    </mesh>
  </group>
));

// ============================================================
// SHOE RACK (traditional)
// ============================================================
const ShoeRack = memo(() => (
  <group position={[0.9, -0.8, -0.4]}>
    {/* Rack frame */}
    <mesh>
      <boxGeometry args={[0.4, 0.35, 0.25]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {/* Shelf */}
    <mesh position={[0, -0.02, 0]}>
      <boxGeometry args={[0.38, 0.02, 0.24]} />
      <meshStandardMaterial color="#8B6540" roughness={0.6} />
    </mesh>
    {/* Small sandals on rack */}
    <mesh position={[-0.08, 0.1, 0.05]} rotation={[0, 0.2, 0]}>
      <boxGeometry args={[0.06, 0.02, 0.12]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
    <mesh position={[0.08, 0.1, 0.05]} rotation={[0, -0.2, 0]}>
      <boxGeometry args={[0.06, 0.02, 0.12]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
  </group>
));

// ============================================================
// ENTERING CHARACTER
// ============================================================
const EnteringCharacter = memo(() => {
  const groupRef = useRef();
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.4, 0.1]);
  const rightHandRef = useRef([0.3, -0.4, 0.1]);
  const fingerCurlL = useRef(0.15);
  const fingerCurlR = useRef(0.15);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 6;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    if (phase < 0.2) {
      // Standing outside, waiting for door to open
      groupRef.current.position.z = 1.2;
      groupRef.current.position.y = -0.1;
      groupRef.current.rotation.y = Math.PI;
    } else if (phase < 0.55) {
      // Walking in (door is fully open at 0.18)
      const p = smooth((phase - 0.2) / 0.35);
      groupRef.current.position.z = THREE.MathUtils.lerp(1.2, -1.0, p);
      groupRef.current.rotation.y = Math.PI;

      const walkT = p * Math.PI * 4;
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(walkT)) * 0.025;

      leftHandRef.current = [
        -0.3,
        -0.4 + Math.abs(Math.sin(walkT + Math.PI)) * 0.06,
        0.1 + Math.sin(walkT + Math.PI) * 0.1,
      ];
      rightHandRef.current = [
        0.3,
        -0.4 + Math.abs(Math.sin(walkT)) * 0.06,
        0.1 + Math.sin(walkT) * 0.1,
      ];
    } else if (phase < 0.7) {
      // Inside, happy
      groupRef.current.position.z = -1.0;
      groupRef.current.position.y = -0.1;
      const p = (phase - 0.55) / 0.15;
      groupRef.current.rotation.y = Math.PI + Math.sin(p * Math.PI * 2) * 0.15;

      leftHandRef.current = [-0.3, -0.35, 0.1];
      rightHandRef.current = [0.3, -0.35, 0.1];
    } else {
      // Reset
      const p = smooth((phase - 0.7) / 0.3);
      groupRef.current.position.z = THREE.MathUtils.lerp(-1.0, 1.2, p);
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.5) * 0.005;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = 0.3;
      mouthOpenRef.current.scale.x = 1.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 1.2]}>
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
        elbowBendDir={[0.3, 0, 0.5]}
      />
    </group>
  );
});

// ============================================================
// LEAVING CHARACTER
// ============================================================
const LeavingCharacter = memo(() => {
  const groupRef = useRef();
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef([-0.3, -0.4, 0.1]);
  const rightHandRef = useRef([0.3, -0.4, 0.1]);
  const fingerCurlL = useRef(0.15);
  const fingerCurlR = useRef(0.15);

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = 6;
    const phase = (t % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    if (!groupRef.current) return;

    if (phase < 0.2) {
      // Standing inside, waiting for door to open
      groupRef.current.position.z = -1.0;
      groupRef.current.rotation.y = 0;
    } else if (phase < 0.5) {
      // Walking out (door fully open at 0.18)
      const p = smooth((phase - 0.2) / 0.3);
      groupRef.current.position.z = THREE.MathUtils.lerp(-1.0, 1.5, p);
      groupRef.current.rotation.y = 0;

      const walkT = p * Math.PI * 4;
      groupRef.current.position.y = -0.1 + Math.abs(Math.sin(walkT)) * 0.025;

      leftHandRef.current = [
        -0.3,
        -0.4 + Math.abs(Math.sin(walkT + Math.PI)) * 0.06,
        0.1 + Math.sin(walkT + Math.PI) * 0.1,
      ];
      rightHandRef.current = [
        0.3,
        -0.4 + Math.abs(Math.sin(walkT)) * 0.06,
        0.1 + Math.sin(walkT) * 0.1,
      ];
    } else if (phase < 0.65) {
      // Outside, pausing (door closes at 0.55-0.7, after character is through)
      groupRef.current.position.z = 1.5;
      groupRef.current.position.y = -0.1;
      leftHandRef.current = [-0.3, -0.4, 0.1];
      rightHandRef.current = [0.3, -0.4, 0.1];
    } else {
      // Reset
      const p = smooth((phase - 0.65) / 0.35);
      groupRef.current.position.z = THREE.MathUtils.lerp(1.5, -1.0, p);
      groupRef.current.rotation.y = 0;
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.5) * 0.005;
      headRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = 0.3;
      mouthOpenRef.current.scale.x = 1.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, -1.0]}>
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
        elbowBendDir={[0.3, 0, 0.5]}
      />
    </group>
  );
});

// ============================================================
// HOME WARMTH LIGHT
// ============================================================
const HomeWarmth = () => {
  const lightRef = useRef();

  useFrame((state) => {
    if (!lightRef.current) return;
    const t = state.clock.elapsedTime;
    lightRef.current.intensity = 0.5 + Math.sin(t * 0.8) * 0.1;
  });

  return (
    <>
      <pointLight ref={lightRef} position={[0, 1.0, -1.5]} intensity={0.5} color="#FDE68A" distance={4} />
      <pointLight position={[0, 0.5, 1.5]} intensity={0.3} color="#FFF8E1" distance={3} />
    </>
  );
};

// ============================================================
// FULL HOME SCENE
// ============================================================
const HomeScene = memo(({ variant = 'enter', isActive }) => (
  <>
    <SceneLights warmth={0.5} />
    <HomeWarmth />
    <Floor />
    <HomeFrontWall />
    <HomeDoor />
    <AnimatedDoorPanel variant={variant} />
    <Window position={[-1.2, 0.6, -0.72]} />
    <Window position={[1.2, 0.6, -0.72]} />
    <PottedPlant position={[-0.8, 0, 0]} />
    <PottedPlant position={[0.8, 0, 0]} />
    <ShoeRack />
    <WelcomeMat />

    {variant === 'enter' ? <EnteringCharacter /> : <LeavingCharacter />}

    <Sparkles count={5} />
  </>
));

export default HomeScene;
