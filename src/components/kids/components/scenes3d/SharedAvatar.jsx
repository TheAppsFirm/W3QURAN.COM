/**
 * SharedAvatar.jsx
 * Reusable Emirati boy avatar components for all 3D dua scenes.
 * Includes: head (ghutra + agal), body (kandura), articulated arms with IK,
 * hand with finger curl, and shared environment helpers.
 */

import React, { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================================
// CONSTANTS
// ============================================================
export const SKIN = '#F5C67A';
export const SKIN_DARK = '#D4A24E';
export const WHITE_CLOTH = '#F8FAFC';
export const CLOTH_SHADOW = '#E2E8F0';
export const AGAL_COLOR = '#1E293B';
export const EYE_COLOR = '#1E293B';
export const Y_UP = new THREE.Vector3(0, 1, 0);

// ============================================================
// HELPER: Orient a cylinder between two 3D points using quaternion
// ============================================================
export function getBoneTransform(startArr, endArr) {
  const s = new THREE.Vector3(...startArr);
  const e = new THREE.Vector3(...endArr);
  const dir = new THREE.Vector3().subVectors(e, s);
  const len = dir.length();
  dir.normalize();
  const mid = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5);
  const quat = new THREE.Quaternion().setFromUnitVectors(Y_UP, dir);
  return { position: mid.toArray(), quaternion: quat, length: len };
}

// Compute a natural elbow position given shoulder + hand
export function computeElbow(shoulder, hand, bendDir = [0, 0, 1]) {
  const mid = [
    (shoulder[0] + hand[0]) / 2,
    (shoulder[1] + hand[1]) / 2,
    (shoulder[2] + hand[2]) / 2,
  ];
  const dx = hand[0] - shoulder[0];
  const dy = hand[1] - shoulder[1];
  const dz = hand[2] - shoulder[2];
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const bendAmount = Math.max(0.05, 0.2 - dist * 0.15);
  return [
    mid[0] + bendDir[0] * bendAmount,
    mid[1] + bendDir[1] * bendAmount + 0.08,
    mid[2] + bendDir[2] * bendAmount,
  ];
}

// ============================================================
// HAND with fingers that open/close + optional food slot
// ============================================================
export const Hand3D = ({ position = [0, 0, 0], palmRef, fingerRefs, foodInHandRef, foodColor = '#E74C3C' }) => (
  <group ref={palmRef} position={position}>
    <mesh scale={[1, 0.6, 0.8]}>
      <sphereGeometry args={[0.055, 12, 12]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    {[-0.025, -0.008, 0.008, 0.025].map((xOff, i) => (
      <group key={i} position={[xOff, -0.03, 0.015]} ref={el => { if (fingerRefs) fingerRefs.current[i] = el; }}>
        <mesh scale={[0.6, 1, 0.6]}>
          <capsuleGeometry args={[0.011, 0.032, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>
    ))}
    <group position={[0.04, -0.01, 0.02]} ref={el => { if (fingerRefs) fingerRefs.current[4] = el; }}>
      <mesh scale={[0.7, 1, 0.7]}>
        <capsuleGeometry args={[0.013, 0.028, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
    </group>
    {foodInHandRef && (
      <mesh ref={foodInHandRef} position={[0, -0.02, 0.015]} visible={false}>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshStandardMaterial color={foodColor} roughness={0.4} />
      </mesh>
    )}
  </group>
);

// ============================================================
// STATIC ARM - quaternion-based bone orientation
// ============================================================
export const StaticArm = ({ shoulderPos, elbowPos, handPos, sleeveColor = WHITE_CLOTH }) => {
  const upper = useMemo(() => getBoneTransform(shoulderPos, elbowPos), []);
  const lower = useMemo(() => getBoneTransform(elbowPos, handPos), []);

  return (
    <group>
      <mesh position={shoulderPos}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshStandardMaterial color={sleeveColor} roughness={0.5} />
      </mesh>
      <mesh position={upper.position} quaternion={upper.quaternion}>
        <capsuleGeometry args={[0.04, upper.length - 0.08, 4, 12]} />
        <meshStandardMaterial color={sleeveColor} roughness={0.5} />
      </mesh>
      <mesh position={elbowPos}>
        <sphereGeometry args={[0.042, 10, 10]} />
        <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
      </mesh>
      <mesh position={lower.position} quaternion={lower.quaternion}>
        <capsuleGeometry args={[0.032, lower.length - 0.06, 4, 12]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
      <Hand3D position={handPos} fingerRefs={{ current: [] }} />
    </group>
  );
};

// ============================================================
// ANIMATED ARM - per-frame quaternion updates with finger curl
// ============================================================
export const AnimatedArm = ({ shoulderPos, handPosRef, fingerCurlRef, foodVisibleRef, foodColor, elbowBendDir = [0.3, 0, 0.5], sleeveColor = WHITE_CLOTH }) => {
  const upperRef = useRef();
  const lowerRef = useRef();
  const elbowRef = useRef();
  const handGroupRef = useRef();
  const fingerRefs = useRef([]);
  const foodInHandRef = useRef();

  const _s = useMemo(() => new THREE.Vector3(), []);
  const _e = useMemo(() => new THREE.Vector3(), []);
  const _h = useMemo(() => new THREE.Vector3(), []);
  const _dir = useMemo(() => new THREE.Vector3(), []);
  const _mid = useMemo(() => new THREE.Vector3(), []);
  const _quat = useMemo(() => new THREE.Quaternion(), []);

  useFrame(() => {
    const hp = handPosRef.current;
    const sp = shoulderPos;
    const elbow = computeElbow(sp, hp, elbowBendDir);

    _s.set(sp[0], sp[1], sp[2]);
    _e.set(elbow[0], elbow[1], elbow[2]);
    _dir.subVectors(_e, _s);
    const upperLen = _dir.length();
    _dir.normalize();
    _mid.addVectors(_s, _e).multiplyScalar(0.5);
    _quat.setFromUnitVectors(Y_UP, _dir);

    if (upperRef.current) {
      upperRef.current.position.copy(_mid);
      upperRef.current.quaternion.copy(_quat);
      upperRef.current.scale.set(1, upperLen / 0.22, 1);
    }

    if (elbowRef.current) {
      elbowRef.current.position.set(elbow[0], elbow[1], elbow[2]);
    }

    _s.set(elbow[0], elbow[1], elbow[2]);
    _h.set(hp[0], hp[1], hp[2]);
    _dir.subVectors(_h, _s);
    const lowerLen = _dir.length();
    _dir.normalize();
    _mid.addVectors(_s, _h).multiplyScalar(0.5);
    _quat.setFromUnitVectors(Y_UP, _dir);

    if (lowerRef.current) {
      lowerRef.current.position.copy(_mid);
      lowerRef.current.quaternion.copy(_quat);
      lowerRef.current.scale.set(1, lowerLen / 0.22, 1);
    }

    if (handGroupRef.current) {
      handGroupRef.current.position.set(hp[0], hp[1], hp[2]);
    }

    const curl = fingerCurlRef ? fingerCurlRef.current : 0;
    for (let i = 0; i < 4; i++) {
      const finger = fingerRefs.current[i];
      if (finger) {
        finger.rotation.x = curl * 1.2;
        finger.position.y = -0.03 + curl * 0.015;
        finger.position.z = 0.015 + curl * 0.01;
      }
    }
    const thumb = fingerRefs.current[4];
    if (thumb) {
      thumb.rotation.z = -0.5 + curl * -0.8;
      thumb.position.x = 0.04 - curl * 0.015;
    }

    if (foodInHandRef.current) {
      const showFood = foodVisibleRef ? foodVisibleRef.current : false;
      foodInHandRef.current.visible = showFood;
      const s = showFood ? 0.8 + curl * 0.2 : 0;
      foodInHandRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <mesh position={shoulderPos}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshStandardMaterial color={sleeveColor} roughness={0.5} />
      </mesh>
      <mesh ref={upperRef}>
        <capsuleGeometry args={[0.04, 0.14, 4, 12]} />
        <meshStandardMaterial color={sleeveColor} roughness={0.5} />
      </mesh>
      <mesh ref={elbowRef}>
        <sphereGeometry args={[0.042, 10, 10]} />
        <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
      </mesh>
      <mesh ref={lowerRef}>
        <capsuleGeometry args={[0.032, 0.14, 4, 12]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
      <Hand3D palmRef={handGroupRef} fingerRefs={fingerRefs} foodInHandRef={foodVisibleRef ? foodInHandRef : undefined} foodColor={foodColor} />
    </group>
  );
};

// ============================================================
// EMIRATI HEAD (ghutra + agal + face)
// ============================================================
export const EmiratiHeadStatic = ({ mouthOpenRef }) => (
  <group>
    <mesh>
      <sphereGeometry args={[0.28, 20, 20]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    <mesh position={[-0.26, 0, 0]}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    <mesh position={[0.26, 0, 0]}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial color={SKIN} roughness={0.7} />
    </mesh>
    {/* Ghutra cap - covers top and back of head */}
    <mesh position={[0, 0.08, -0.02]}>
      <sphereGeometry args={[0.3, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.4} side={THREE.DoubleSide} />
    </mesh>
    {/* Left side drape */}
    <mesh position={[-0.22, -0.15, -0.06]} rotation={[0.1, 0, 0.25]}>
      <boxGeometry args={[0.14, 0.5, 0.30]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    <mesh position={[-0.2, -0.42, -0.06]} rotation={[0.05, 0, 0.15]}>
      <boxGeometry args={[0.16, 0.15, 0.32]} />
      <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
    </mesh>
    {/* Right side drape */}
    <mesh position={[0.22, -0.15, -0.06]} rotation={[0.1, 0, -0.25]}>
      <boxGeometry args={[0.14, 0.5, 0.30]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    <mesh position={[0.2, -0.42, -0.06]} rotation={[0.05, 0, -0.15]}>
      <boxGeometry args={[0.16, 0.15, 0.32]} />
      <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
    </mesh>
    {/* Back drape panel - thick enough to cover full back of head */}
    <mesh position={[0, -0.15, -0.16]} rotation={[0.12, 0, 0]}>
      <boxGeometry args={[0.46, 0.65, 0.26]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Back neck cover - bridges cap to back drape at the top */}
    <mesh position={[0, 0.0, -0.22]}>
      <boxGeometry args={[0.42, 0.22, 0.16]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0.18, 0.02]} rotation={[Math.PI / 2 + 0.15, 0, 0]}>
      <torusGeometry args={[0.24, 0.028, 6, 20]} />
      <meshStandardMaterial color={AGAL_COLOR} roughness={0.3} metalness={0.2} />
    </mesh>
    <mesh position={[0, 0.2, 0.0]} rotation={[Math.PI / 2 + 0.15, 0, 0]}>
      <torusGeometry args={[0.22, 0.022, 6, 20]} />
      <meshStandardMaterial color={AGAL_COLOR} roughness={0.3} metalness={0.2} />
    </mesh>
    <group position={[-0.09, 0.04, 0.24]}>
      <mesh><sphereGeometry args={[0.055, 16, 16]} /><meshStandardMaterial color="white" roughness={0.3} /></mesh>
      <mesh position={[0, 0, 0.035]}><sphereGeometry args={[0.035, 12, 12]} /><meshStandardMaterial color="#5B3A1A" roughness={0.2} /></mesh>
      <mesh position={[0, 0, 0.05]}><sphereGeometry args={[0.018, 8, 8]} /><meshStandardMaterial color={EYE_COLOR} roughness={0.1} /></mesh>
      <mesh position={[0.015, 0.015, 0.055]}><sphereGeometry args={[0.008, 6, 6]} /><meshBasicMaterial color="white" /></mesh>
    </group>
    <group position={[0.09, 0.04, 0.24]}>
      <mesh><sphereGeometry args={[0.055, 16, 16]} /><meshStandardMaterial color="white" roughness={0.3} /></mesh>
      <mesh position={[0, 0, 0.035]}><sphereGeometry args={[0.035, 12, 12]} /><meshStandardMaterial color="#5B3A1A" roughness={0.2} /></mesh>
      <mesh position={[0, 0, 0.05]}><sphereGeometry args={[0.018, 8, 8]} /><meshStandardMaterial color={EYE_COLOR} roughness={0.1} /></mesh>
      <mesh position={[0.015, 0.015, 0.055]}><sphereGeometry args={[0.008, 6, 6]} /><meshBasicMaterial color="white" /></mesh>
    </group>
    <mesh position={[-0.09, 0.11, 0.24]} rotation={[0, 0, 0.1]}>
      <boxGeometry args={[0.08, 0.015, 0.02]} /><meshStandardMaterial color="#4A3520" />
    </mesh>
    <mesh position={[0.09, 0.11, 0.24]} rotation={[0, 0, -0.1]}>
      <boxGeometry args={[0.08, 0.015, 0.02]} /><meshStandardMaterial color="#4A3520" />
    </mesh>
    <mesh position={[0, -0.02, 0.27]}>
      <sphereGeometry args={[0.03, 8, 8]} /><meshStandardMaterial color={SKIN_DARK} roughness={0.8} />
    </mesh>
    <mesh position={[-0.18, -0.04, 0.18]}>
      <sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color="#F9A8D4" transparent opacity={0.3} />
    </mesh>
    <mesh position={[0.18, -0.04, 0.18]}>
      <sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color="#F9A8D4" transparent opacity={0.3} />
    </mesh>
    <group ref={mouthOpenRef} position={[0, -0.12, 0.26]}>
      <mesh>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial color="#C0392B" roughness={0.5} />
      </mesh>
    </group>
  </group>
);

// ============================================================
// BODY (Kandura)
// ============================================================
export const EmiratiBody = () => (
  <group>
    <mesh>
      <cylinderGeometry args={[0.2, 0.25, 0.55, 16]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0.28, 0.08]}>
      <boxGeometry args={[0.12, 0.04, 0.06]} />
      <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0, 0.2]}>
      <boxGeometry args={[0.008, 0.5, 0.005]} />
      <meshStandardMaterial color={CLOTH_SHADOW} transparent opacity={0.5} />
    </mesh>
    <mesh position={[0, -0.38, 0.12]} rotation={[0.6, 0, 0]}>
      <cylinderGeometry args={[0.24, 0.18, 0.4, 12]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
  </group>
);

// ============================================================
// STANDING BODY (for non-sitting scenes)
// ============================================================
export const EmiratiBodyStanding = () => (
  <group>
    <mesh>
      <cylinderGeometry args={[0.2, 0.22, 0.55, 16]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0.28, 0.08]}>
      <boxGeometry args={[0.12, 0.04, 0.06]} />
      <meshStandardMaterial color={CLOTH_SHADOW} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0, 0.18]}>
      <boxGeometry args={[0.008, 0.5, 0.005]} />
      <meshStandardMaterial color={CLOTH_SHADOW} transparent opacity={0.5} />
    </mesh>
    {/* Lower kandura (long robe) */}
    <mesh position={[0, -0.55, 0]}>
      <cylinderGeometry args={[0.22, 0.28, 0.6, 12]} />
      <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
    </mesh>
    {/* Feet */}
    <mesh position={[-0.08, -0.9, 0.04]}>
      <boxGeometry args={[0.1, 0.04, 0.16]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
    <mesh position={[0.08, -0.9, 0.04]}>
      <boxGeometry args={[0.1, 0.04, 0.16]} />
      <meshStandardMaterial color="#8B6914" roughness={0.7} />
    </mesh>
  </group>
);

// ============================================================
// SPARKLE PARTICLES
// ============================================================
const Sparkle = ({ x, y, z, speed, size, phase }) => {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + phase;
    ref.current.position.y = y + Math.sin(t) * 0.2;
    ref.current.material.opacity = (Math.sin(t * 2) + 1) * 0.25;
  });
  return <mesh ref={ref} position={[x, y, z]}><sphereGeometry args={[size, 4, 4]} /><meshBasicMaterial color="#FDE68A" transparent opacity={0} /></mesh>;
};

export const Sparkles = memo(({ count = 5 }) => {
  const data = useMemo(() => Array.from({ length: count }).map(() => ({
    x: (Math.random() - 0.5) * 2.5, y: 0.3 + Math.random() * 1.2, z: (Math.random() - 0.5) * 1.5,
    speed: 0.3 + Math.random() * 0.5, size: 0.012 + Math.random() * 0.015, phase: Math.random() * Math.PI * 2,
  })), [count]);
  return <>{data.map((d, i) => <Sparkle key={i} {...d} />)}</>;
});

// ============================================================
// STANDARD SCENE LIGHTS
// ============================================================
export const SceneLights = ({ warmth = 0.5 }) => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[3, 5, 4]} intensity={1.0} color="#FFF8E1" />
    <directionalLight position={[-2, 3, -1]} intensity={0.3} color="#E0F7FA" />
    <pointLight position={[0.8, 1.5, 1]} intensity={warmth} color="#FDE68A" distance={5} />
    <pointLight position={[-0.5, 0.5, 1.5]} intensity={0.3} color="#FFF5E0" distance={4} />
  </>
);
