/**
 * KitchenScene.jsx
 * 3D kitchen scene with 3 variants:
 * - eating (dua 1): Pick food from plate, eat
 * - thankful (dua 2): Hands raised in gratitude after eating
 * - drinking (dua 30): Pick up glass, drink milk
 */

import React, { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  SKIN, WHITE_CLOTH, CLOTH_SHADOW,
  EmiratiHeadStatic, EmiratiBody, StaticArm, AnimatedArm,
  Hand3D, SceneLights, Sparkles, computeElbow, getBoneTransform
} from './SharedAvatar';

// ============================================================
// SHARED KITCHEN FURNITURE
// ============================================================
const Table = memo(() => (
  <group position={[0, -0.25, 0]}>
    <mesh>
      <boxGeometry args={[2.4, 0.06, 1.2]} />
      <meshStandardMaterial color="#C8956A" roughness={0.6} />
    </mesh>
    <mesh position={[0, -0.035, 0]}>
      <boxGeometry args={[2.44, 0.02, 1.24]} />
      <meshStandardMaterial color="#B8855A" roughness={0.6} />
    </mesh>
    {[[-1.05, -0.42, -0.5], [1.05, -0.42, -0.5], [-1.05, -0.42, 0.5], [1.05, -0.42, 0.5]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.04, 0.04, 0.78, 6]} />
        <meshStandardMaterial color="#A07550" roughness={0.6} />
      </mesh>
    ))}
  </group>
));

const Chair = memo(({ position }) => (
  <group position={position}>
    <mesh position={[0, -0.35, 0]}>
      <boxGeometry args={[0.45, 0.05, 0.4]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    <mesh position={[0, -0.05, -0.18]}>
      <boxGeometry args={[0.42, 0.6, 0.04]} />
      <meshStandardMaterial color="#A07550" roughness={0.6} />
    </mesh>
    {[[-0.18, -0.65, -0.15], [0.18, -0.65, -0.15], [-0.18, -0.65, 0.15], [0.18, -0.65, 0.15]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <cylinderGeometry args={[0.025, 0.025, 0.55, 6]} />
        <meshStandardMaterial color="#8B6540" roughness={0.6} />
      </mesh>
    ))}
  </group>
));

const Plate = memo(({ position = [0.1, -0.17, 0.18] }) => (
  <group position={position}>
    <mesh><cylinderGeometry args={[0.32, 0.34, 0.03, 20]} /><meshStandardMaterial color="#F1F5F9" roughness={0.3} metalness={0.1} /></mesh>
    <mesh position={[0, 0.015, 0]}><cylinderGeometry args={[0.26, 0.28, 0.015, 20]} /><meshStandardMaterial color="white" roughness={0.3} /></mesh>
    <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.3, 0.005, 4, 20]} /><meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
    </mesh>
  </group>
));

const FoodItems = memo(({ position = [0.1, -0.12, 0.18] }) => (
  <group position={position}>
    <mesh><sphereGeometry args={[0.12, 12, 6, 0, Math.PI * 2, 0, Math.PI * 0.5]} /><meshStandardMaterial color="#FEF3C7" roughness={0.8} /></mesh>
    <mesh position={[-0.08, 0.02, 0.06]}><sphereGeometry args={[0.04, 8, 8]} /><meshStandardMaterial color="#92400E" roughness={0.6} /></mesh>
    <mesh position={[0.06, 0.02, -0.04]}><sphereGeometry args={[0.035, 8, 8]} /><meshStandardMaterial color="#92400E" roughness={0.6} /></mesh>
    <mesh position={[0.1, 0.01, 0.05]}><sphereGeometry args={[0.03, 8, 8]} /><meshStandardMaterial color="#EF4444" roughness={0.4} /></mesh>
    <mesh position={[-0.05, 0.04, -0.06]}><sphereGeometry args={[0.025, 6, 6]} /><meshStandardMaterial color="#22C55E" roughness={0.5} /></mesh>
  </group>
));

const Glass = memo(({ position = [0.55, -0.12, -0.1] }) => (
  <group position={position}>
    <mesh><cylinderGeometry args={[0.05, 0.06, 0.2, 10]} /><meshStandardMaterial color="#BFDBFE" transparent opacity={0.4} roughness={0.1} /></mesh>
    <mesh position={[0, -0.02, 0]}><cylinderGeometry args={[0.045, 0.055, 0.14, 10]} /><meshStandardMaterial color="#60A5FA" transparent opacity={0.5} roughness={0.1} /></mesh>
  </group>
));

// Tall milk glass on table for drinking variant
const TableMilkGlass = memo(({ position = [0.1, -0.095, 0.18] }) => (
  <group position={position}>
    {/* Glass body - transparent */}
    <mesh>
      <cylinderGeometry args={[0.06, 0.05, 0.28, 14]} />
      <meshPhysicalMaterial color="#E0F2FE" transparent opacity={0.25} roughness={0.05} />
    </mesh>
    {/* Milk inside */}
    <mesh position={[0, -0.015, 0]}>
      <cylinderGeometry args={[0.055, 0.045, 0.23, 14]} />
      <meshStandardMaterial color="#FEFEFA" roughness={0.4} />
    </mesh>
    {/* Milk foam top */}
    <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.055, 14]} />
      <meshStandardMaterial color="white" />
    </mesh>
    {/* Glass rim */}
    <mesh position={[0, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.06, 0.005, 6, 14]} />
      <meshStandardMaterial color="#93C5FD" transparent opacity={0.4} />
    </mesh>
    {/* Glass bottom */}
    <mesh position={[0, -0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.05, 14]} />
      <meshStandardMaterial color="#DBEAFE" transparent opacity={0.4} />
    </mesh>
  </group>
));

const SteamParticle = ({ offset, speed, xWiggle }) => {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = ((state.clock.elapsedTime * speed + offset) % 2.5) / 2.5;
    ref.current.position.y = t * 0.4;
    ref.current.position.x = Math.sin(t * Math.PI * 2) * xWiggle;
    ref.current.material.opacity = Math.sin(t * Math.PI) * 0.25;
    ref.current.scale.setScalar(0.3 + t * 0.7);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.025, 4, 4]} />
      <meshStandardMaterial color="white" transparent opacity={0} depthWrite={false} />
    </mesh>
  );
};

const Steam = memo(({ position = [0.1, -0.05, 0.18] }) => {
  const data = useMemo(() => Array.from({ length: 4 }).map((_, i) => ({
    offset: i * 0.5, speed: 0.5 + Math.random() * 0.3, xWiggle: (Math.random() - 0.5) * 0.1,
  })), []);
  return <group position={position}>{data.map((d, i) => <SteamParticle key={i} {...d} />)}</group>;
});

const Room = memo(() => (
  <group>
    <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} /><meshStandardMaterial color="#D4A574" roughness={0.8} />
    </mesh>
    <mesh position={[0, 0.5, -1.2]}>
      <planeGeometry args={[6, 3]} /><meshStandardMaterial color="#FFF8E7" roughness={0.9} />
    </mesh>
    <group position={[0.8, 0.8, -1.18]}>
      <mesh><boxGeometry args={[0.6, 0.6, 0.02]} /><meshStandardMaterial color="#87CEEB" roughness={0.2} /></mesh>
      <mesh position={[0, 0, 0.01]}><boxGeometry args={[0.65, 0.04, 0.02]} /><meshStandardMaterial color="#A07550" roughness={0.6} /></mesh>
      <mesh position={[0, 0, 0.01]}><boxGeometry args={[0.04, 0.65, 0.02]} /><meshStandardMaterial color="#A07550" roughness={0.6} /></mesh>
    </group>
  </group>
));

// ============================================================
// EATING CHARACTER (original from dua #1)
// ============================================================
const EatingCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const fingerCurlRef = useRef(0);
  const foodVisibleRef = useRef(false);

  const headBaseY = 0.58;
  const rightShoulderPos = [0.22, 0.2, 0.05];
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const leftElbow = [-0.38, 0.02, 0.2];
  const leftHand = [-0.42, -0.14, 0.28];

  const restPos = [0.45, -0.1, 0.25];
  const reachPos = [0.6, -0.25, 0.12];
  const grabPos = [0.6, -0.12, 0.12];
  const mouthPos = [0.1, 0.42, 0.38];

  const handPos = useRef([...restPos]);
  const plateFoodRef = useRef();

  useFrame((state) => {
    const cycle = 6;
    const t = (state.clock.elapsedTime % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    let hx, hy, hz, curl, hasFood, chewing, lookAtPlate;

    if (t < 0.1) {
      hx = restPos[0]; hy = restPos[1]; hz = restPos[2];
      curl = 0; hasFood = false; chewing = false; lookAtPlate = true;
    } else if (t < 0.22) {
      const p = smooth((t - 0.1) / 0.12);
      hx = THREE.MathUtils.lerp(restPos[0], reachPos[0], p);
      hy = THREE.MathUtils.lerp(restPos[1], reachPos[1], p);
      hz = THREE.MathUtils.lerp(restPos[2], reachPos[2], p);
      curl = 0; hasFood = false; chewing = false; lookAtPlate = true;
    } else if (t < 0.32) {
      const p = smooth((t - 0.22) / 0.1);
      hx = THREE.MathUtils.lerp(reachPos[0], grabPos[0], p);
      hy = THREE.MathUtils.lerp(reachPos[1], grabPos[1], p);
      hz = THREE.MathUtils.lerp(reachPos[2], grabPos[2], p);
      curl = p; hasFood = p > 0.4; chewing = false; lookAtPlate = true;
    } else if (t < 0.55) {
      const p = smooth((t - 0.32) / 0.23);
      hx = THREE.MathUtils.lerp(grabPos[0], mouthPos[0], p);
      hy = THREE.MathUtils.lerp(grabPos[1], mouthPos[1], p) + Math.sin(p * Math.PI) * 0.12;
      hz = THREE.MathUtils.lerp(grabPos[2], mouthPos[2], p);
      curl = 1; hasFood = true; chewing = false; lookAtPlate = p < 0.3;
    } else if (t < 0.72) {
      const p = (t - 0.55) / 0.17;
      hx = mouthPos[0]; hy = mouthPos[1]; hz = mouthPos[2];
      curl = 1 - p * 0.6; hasFood = p < 0.3; chewing = true; lookAtPlate = false;
    } else if (t < 0.9) {
      const p = smooth((t - 0.72) / 0.18);
      hx = THREE.MathUtils.lerp(mouthPos[0], restPos[0], p);
      hy = THREE.MathUtils.lerp(mouthPos[1], restPos[1], p) + Math.sin(p * Math.PI) * 0.05;
      hz = THREE.MathUtils.lerp(mouthPos[2], restPos[2], p);
      curl = Math.max(0, 0.4 - p * 0.4); hasFood = false;
      chewing = p < 0.3; lookAtPlate = p > 0.5;
    } else {
      hx = restPos[0]; hy = restPos[1]; hz = restPos[2];
      curl = 0; hasFood = false; chewing = false; lookAtPlate = true;
    }

    handPos.current = [hx, hy, hz];
    fingerCurlRef.current = curl;
    foodVisibleRef.current = hasFood;

    if (headRef.current) {
      headRef.current.position.y = headBaseY + (chewing ? Math.sin(state.clock.elapsedTime * 14) * 0.006 : 0);
      const targetRotY = lookAtPlate ? 0.25 : 0.0;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetRotY, 0.04);
      const targetRotX = chewing ? 0.08 : 0;
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x || 0, targetRotX, 0.05);
      headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.015;
    }

    if (mouthOpenRef.current) {
      if (chewing) {
        mouthOpenRef.current.scale.y = 0.6 + Math.sin(state.clock.elapsedTime * 12) * 0.5;
        mouthOpenRef.current.scale.x = 1.0 + Math.sin(state.clock.elapsedTime * 12 + 1) * 0.15;
      } else {
        mouthOpenRef.current.scale.y = THREE.MathUtils.lerp(mouthOpenRef.current.scale.y, 0.4, 0.1);
        mouthOpenRef.current.scale.x = THREE.MathUtils.lerp(mouthOpenRef.current.scale.x, 1.0, 0.1);
      }
    }

    if (plateFoodRef.current) {
      plateFoodRef.current.visible = !hasFood;
    }
  });

  return (
    <group>
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
        elbowBendDir={[0.3, 0, 0.5]}
      />
      <mesh ref={plateFoodRef} position={[0.6, -0.22, 0.12]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshStandardMaterial color="#E74C3C" roughness={0.4} />
      </mesh>
    </group>
  );
};

// ============================================================
// THANKFUL CHARACTER (dua #2 - after eating, hands raised)
// ============================================================
const ThankfulCharacter = memo(() => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const leftHandRef = useRef();
  const rightHandRef = useRef();

  const headBaseY = 0.58;
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const rightShoulderPos = [0.22, 0.2, 0.05];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Gentle sway
    if (headRef.current) {
      headRef.current.position.y = headBaseY + Math.sin(t * 1.2) * 0.01;
      headRef.current.rotation.x = Math.sin(t * 0.8) * 0.04 - 0.05; // slight look up
      headRef.current.rotation.z = Math.sin(t * 0.6) * 0.02;
    }
    // Hands gently sway palms-up
    if (leftHandRef.current) {
      leftHandRef.current.position.y = 0.15 + Math.sin(t * 1.5) * 0.02;
    }
    if (rightHandRef.current) {
      rightHandRef.current.position.y = 0.15 + Math.sin(t * 1.5 + 0.5) * 0.02;
    }
    // Gentle smile (small mouth)
    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.x = 1.3 + Math.sin(t * 0.8) * 0.1;
      mouthOpenRef.current.scale.y = 0.3;
    }
  });

  // Static dua hands (palms up)
  const leftElbow = computeElbow(leftShoulderPos, [-0.2, 0.15, 0.35], [-0.3, 0, 0.5]);
  const rightElbow = computeElbow(rightShoulderPos, [0.2, 0.15, 0.35], [0.3, 0, 0.5]);
  const leftUpper = getBoneTransform(leftShoulderPos, leftElbow);
  const rightUpper = getBoneTransform(rightShoulderPos, rightElbow);
  const leftLower = getBoneTransform(leftElbow, [-0.2, 0.15, 0.35]);
  const rightLower = getBoneTransform(rightElbow, [0.2, 0.15, 0.35]);

  return (
    <group>
      <EmiratiBody />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>

      {/* Left arm - raised palms up */}
      <group>
        <mesh position={leftShoulderPos}><sphereGeometry args={[0.055, 12, 12]} /><meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} /></mesh>
        <mesh position={leftUpper.position} quaternion={leftUpper.quaternion}><capsuleGeometry args={[0.04, leftUpper.length - 0.08, 4, 12]} /><meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} /></mesh>
        <mesh position={leftElbow}><sphereGeometry args={[0.042, 10, 10]} /><meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} /></mesh>
        <mesh position={leftLower.position} quaternion={leftLower.quaternion}><capsuleGeometry args={[0.032, leftLower.length - 0.06, 4, 12]} /><meshStandardMaterial color={SKIN} roughness={0.7} /></mesh>
        <group ref={leftHandRef} position={[-0.2, 0.15, 0.35]}>
          <Hand3D fingerRefs={{ current: [] }} />
        </group>
      </group>

      {/* Right arm - raised palms up */}
      <group>
        <mesh position={rightShoulderPos}><sphereGeometry args={[0.055, 12, 12]} /><meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} /></mesh>
        <mesh position={rightUpper.position} quaternion={rightUpper.quaternion}><capsuleGeometry args={[0.04, rightUpper.length - 0.08, 4, 12]} /><meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} /></mesh>
        <mesh position={rightElbow}><sphereGeometry args={[0.042, 10, 10]} /><meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} /></mesh>
        <mesh position={rightLower.position} quaternion={rightLower.quaternion}><capsuleGeometry args={[0.032, rightLower.length - 0.06, 4, 12]} /><meshStandardMaterial color={SKIN} roughness={0.7} /></mesh>
        <group ref={rightHandRef} position={[0.2, 0.15, 0.35]}>
          <Hand3D fingerRefs={{ current: [] }} />
        </group>
      </group>
    </group>
  );
});

// ============================================================
// DRINKING CHARACTER (dua #30 - drinking milk)
// ============================================================
const DrinkingCharacter = () => {
  const headRef = useRef();
  const mouthOpenRef = useRef();
  const fingerCurlRef = useRef(0);

  const headBaseY = 0.58;
  const rightShoulderPos = [0.22, 0.2, 0.05];
  const leftShoulderPos = [-0.22, 0.2, 0.05];
  const leftElbow = [-0.38, 0.02, 0.2];
  const leftHand = [-0.42, -0.14, 0.28];

  // Glass positions (local to avatar, character at [-0.5, 0.1, 0.05])
  // Table top world y=-0.22, glass height 0.28, center needs to be at -0.22+0.14=-0.08 world, local=-0.18
  const glassTableY = -0.18;                  // on table surface
  const restPos = [0.55, -0.05, 0.12];       // hand hovering near glass
  const grabPos = [0.55, -0.08, 0.12];       // hand grabs glass mid-height
  const liftPos = [0.2, 0.2, 0.3];           // midway
  const drinkPos = [0.0, 0.28, 0.36];         // hand at mouth level (glass rim touches lips after tilt)

  const handPos = useRef([...restPos]);
  const glassRef = useRef();

  useFrame((state) => {
    const cycle = 7;
    const t = (state.clock.elapsedTime % cycle) / cycle;
    const smooth = (p) => p * p * (3 - 2 * p);

    let hx, hy, hz, curl, drinking, lookDown;

    if (t < 0.1) {
      hx = restPos[0]; hy = restPos[1]; hz = restPos[2];
      curl = 0; drinking = false; lookDown = true;
    } else if (t < 0.2) {
      const p = smooth((t - 0.1) / 0.1);
      hx = THREE.MathUtils.lerp(restPos[0], grabPos[0], p);
      hy = THREE.MathUtils.lerp(restPos[1], grabPos[1], p);
      hz = THREE.MathUtils.lerp(restPos[2], grabPos[2], p);
      curl = p; drinking = false; lookDown = true;
    } else if (t < 0.4) {
      const p = smooth((t - 0.2) / 0.2);
      hx = THREE.MathUtils.lerp(grabPos[0], drinkPos[0], p);
      hy = THREE.MathUtils.lerp(grabPos[1], drinkPos[1], p) + Math.sin(p * Math.PI) * 0.08;
      hz = THREE.MathUtils.lerp(grabPos[2], drinkPos[2], p);
      curl = 1; drinking = false; lookDown = p < 0.3;
    } else if (t < 0.65) {
      hx = drinkPos[0]; hy = drinkPos[1]; hz = drinkPos[2];
      curl = 1; drinking = true; lookDown = false;
    } else if (t < 0.85) {
      const p = smooth((t - 0.65) / 0.2);
      hx = THREE.MathUtils.lerp(drinkPos[0], restPos[0], p);
      hy = THREE.MathUtils.lerp(drinkPos[1], restPos[1], p) + Math.sin(p * Math.PI) * 0.05;
      hz = THREE.MathUtils.lerp(drinkPos[2], restPos[2], p);
      curl = 1 - p; drinking = false; lookDown = p > 0.5;
    } else {
      hx = restPos[0]; hy = restPos[1]; hz = restPos[2];
      curl = 0; drinking = false; lookDown = true;
    }

    handPos.current = [hx, hy, hz];
    fingerCurlRef.current = curl;

    // Glass follows hand when gripping
    if (glassRef.current) {
      if (curl > 0.3) {
        glassRef.current.position.set(hx, hy + 0.06, hz);
        // When drinking: tilt glass top toward face (-z direction) so milk pours into mouth
        glassRef.current.rotation.x = drinking ? -0.55 : 0;
        glassRef.current.rotation.z = 0;
      } else {
        glassRef.current.position.set(0.55, glassTableY, 0.12);
        glassRef.current.rotation.x = 0;
        glassRef.current.rotation.z = 0;
      }
    }

    if (headRef.current) {
      headRef.current.position.y = headBaseY;
      const targetRotY = lookDown ? 0.2 : 0.0;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetRotY, 0.04);
      headRef.current.rotation.x = drinking ? -0.25 : THREE.MathUtils.lerp(headRef.current.rotation.x || 0, 0, 0.05);
      headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.015;
    }

    if (mouthOpenRef.current) {
      mouthOpenRef.current.scale.y = drinking ? 0.6 : 0.3;
      mouthOpenRef.current.scale.x = drinking ? 0.8 : 1.0;
    }
  });

  return (
    <group>
      <EmiratiBody />
      <group ref={headRef} position={[0, headBaseY, 0]}>
        <EmiratiHeadStatic mouthOpenRef={mouthOpenRef} />
      </group>
      <StaticArm shoulderPos={leftShoulderPos} elbowPos={leftElbow} handPos={leftHand} />
      <AnimatedArm
        shoulderPos={rightShoulderPos}
        handPosRef={handPos}
        fingerCurlRef={fingerCurlRef}
        elbowBendDir={[0.3, 0, 0.5]}
      />
      {/* Milk glass that follows hand */}
      <group ref={glassRef} position={[0.55, glassTableY, 0.12]}>
        {/* Glass body - transparent */}
        <mesh>
          <cylinderGeometry args={[0.06, 0.05, 0.28, 14]} />
          <meshPhysicalMaterial color="#E0F2FE" transparent opacity={0.25} roughness={0.05} />
        </mesh>
        {/* Milk inside */}
        <mesh position={[0, -0.015, 0]}>
          <cylinderGeometry args={[0.055, 0.045, 0.23, 14]} />
          <meshStandardMaterial color="#FEFEFA" roughness={0.4} />
        </mesh>
        {/* Milk foam top */}
        <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.055, 14]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* Glass rim */}
        <mesh position={[0, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.06, 0.005, 6, 14]} />
          <meshStandardMaterial color="#93C5FD" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
};

// ============================================================
// FULL KITCHEN SCENE
// ============================================================
const KitchenScene = memo(({ variant = 'eating' }) => (
  <>
    <SceneLights />
    <Room />
    <Table />
    <Chair position={[-0.5, 0, -0.1]} />

    {/* Food scene items - only for eating/thankful */}
    {variant !== 'drinking' && (
      <>
        <Plate />
        <FoodItems />
        <Steam />
        <Glass />
      </>
    )}

    <group position={[-0.5, 0.1, 0.05]}>
      {variant === 'eating' && <EatingCharacter />}
      {variant === 'thankful' && <ThankfulCharacter />}
      {variant === 'drinking' && <DrinkingCharacter />}
    </group>

    <Sparkles />
  </>
));

export default KitchenScene;
