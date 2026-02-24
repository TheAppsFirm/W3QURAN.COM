/**
 * EnhancedGraphics.jsx
 * Enhanced lighting, materials, and effects for modern 3D look
 * Improves visual quality across all immersive games
 */

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sky, Stars, Sparkles, Cloud, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// ============================================================
// ENHANCED LIGHTING SETUP
// ============================================================
export const EnhancedLighting = ({
  sunPosition = [100, 100, 50],
  ambientIntensity = 0.4,
  shadowQuality = 'high',
  warmth = 0 // 0 = neutral, 1 = warm (sunset), -1 = cool (night)
}) => {
  const warmColor = new THREE.Color().setHSL(0.08, 0.8, 0.55);
  const coolColor = new THREE.Color().setHSL(0.6, 0.3, 0.5);
  const neutralColor = new THREE.Color(0xffffff);

  const lightColor = useMemo(() => {
    if (warmth > 0) return warmColor.lerp(neutralColor, 1 - warmth);
    if (warmth < 0) return coolColor.lerp(neutralColor, 1 + warmth);
    return neutralColor;
  }, [warmth]);

  const shadowMapSize = shadowQuality === 'high' ? 4096 : shadowQuality === 'medium' ? 2048 : 1024;

  return (
    <>
      {/* Ambient for base illumination */}
      <ambientLight intensity={ambientIntensity} color={lightColor} />

      {/* Main directional (sun) light */}
      <directionalLight
        position={sunPosition}
        intensity={1.5}
        color={lightColor}
        castShadow
        shadow-mapSize={[shadowMapSize, shadowMapSize]}
        shadow-camera-far={200}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0001}
      />

      {/* Fill light from opposite side */}
      <directionalLight
        position={[-sunPosition[0] * 0.5, sunPosition[1] * 0.5, -sunPosition[2] * 0.5]}
        intensity={0.3}
        color="#B4C5E4"
      />

      {/* Hemisphere light for sky/ground color bleed */}
      <hemisphereLight
        args={['#87CEEB', '#DEB887', 0.4]}
      />

      {/* Rim light for depth */}
      <directionalLight
        position={[0, 20, -50]}
        intensity={0.2}
        color="#FFFFFF"
      />
    </>
  );
};

// ============================================================
// ENHANCED SKY WITH TIME OF DAY
// ============================================================
export const EnhancedSky = ({
  timeOfDay = 'day', // 'dawn', 'day', 'sunset', 'night'
  showStars = false
}) => {
  const skyParams = useMemo(() => {
    switch (timeOfDay) {
      case 'dawn':
        return { inclination: 0.35, azimuth: 0.1, rayleigh: 2, turbidity: 8 };
      case 'sunset':
        return { inclination: 0.48, azimuth: 0.25, rayleigh: 3, turbidity: 10 };
      case 'night':
        return { inclination: 0, azimuth: 0.25, rayleigh: 0, turbidity: 0 };
      case 'day':
      default:
        return { inclination: 0.5, azimuth: 0.25, rayleigh: 0.5, turbidity: 7 };
    }
  }, [timeOfDay]);

  return (
    <>
      {timeOfDay !== 'night' ? (
        <Sky
          distance={450000}
          sunPosition={[100, 50, 100]}
          {...skyParams}
          mieCoefficient={0.005}
          mieDirectionalG={0.8}
        />
      ) : (
        <>
          <color attach="background" args={['#0a0a15']} />
          <Stars
            radius={300}
            depth={100}
            count={5000}
            factor={6}
            saturation={0}
            fade
            speed={0.5}
          />
        </>
      )}

      {showStars && timeOfDay !== 'day' && (
        <Stars
          radius={200}
          depth={50}
          count={2000}
          factor={4}
          fade
          speed={0.3}
        />
      )}
    </>
  );
};

// ============================================================
// ENHANCED MATERIALS
// ============================================================
export const EnhancedMarbleMaterial = ({ color = '#F5F0E8', roughness = 0.3 }) => (
  <meshStandardMaterial
    color={color}
    roughness={roughness}
    metalness={0.1}
    envMapIntensity={0.5}
  />
);

export const EnhancedGoldMaterial = ({ emissive = true }) => (
  <meshStandardMaterial
    color="#D4AF37"
    roughness={0.2}
    metalness={0.8}
    emissive={emissive ? "#D4AF37" : "#000000"}
    emissiveIntensity={emissive ? 0.2 : 0}
    envMapIntensity={1}
  />
);

export const EnhancedStoneMaterial = ({ color = '#8B7355', flat = true }) => (
  <meshStandardMaterial
    color={color}
    roughness={0.95}
    metalness={0}
    flatShading={flat}
  />
);

export const EnhancedFabricMaterial = ({ color = '#FFFFFF' }) => (
  <meshStandardMaterial
    color={color}
    roughness={0.8}
    metalness={0}
  />
);

// ============================================================
// ATMOSPHERIC EFFECTS
// ============================================================
export const AtmosphericFog = ({ color = '#E8D5B7', near = 50, far = 200 }) => (
  <fog attach="fog" args={[color, near, far]} />
);

export const DustParticles = ({ count = 100, area = 50, color = '#D4A574' }) => (
  <Sparkles
    count={count}
    scale={area}
    size={2}
    speed={0.3}
    color={color}
    opacity={0.3}
  />
);

export const GoldenSparkles = ({ position = [0, 0, 0], active = true }) => {
  if (!active) return null;
  return (
    <Sparkles
      count={50}
      scale={5}
      size={4}
      speed={1}
      color="#FFD700"
      opacity={0.8}
      position={position}
    />
  );
};

// ============================================================
// ENHANCED CLOUDS
// ============================================================
export const AtmosphericClouds = ({ count = 5 }) => {
  const clouds = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 200,
        40 + Math.random() * 30,
        -50 - Math.random() * 100
      ],
      speed: 0.1 + Math.random() * 0.2,
      opacity: 0.2 + Math.random() * 0.2
    }));
  }, [count]);

  return (
    <>
      {clouds.map((cloud, i) => (
        <Cloud
          key={i}
          position={cloud.position}
          speed={cloud.speed}
          opacity={cloud.opacity}
          width={20}
          depth={5}
          segments={20}
        />
      ))}
    </>
  );
};

// ============================================================
// GROUND WITH BETTER SHADOWS
// ============================================================
export const EnhancedGround = ({
  size = [200, 200],
  color = '#C9B896',
  gridLines = false,
  segments = 128
}) => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
    <planeGeometry args={[...size, segments, segments]} />
    <meshStandardMaterial
      color={color}
      roughness={0.9}
      metalness={0}
    />
  </mesh>
);

// ============================================================
// CAMERA SHAKE EFFECT
// ============================================================
export const CameraShake = ({ intensity = 0.005, active = false }) => {
  const { camera } = useThree();
  const originalPosition = useRef(camera.position.clone());

  useFrame((state) => {
    if (active) {
      camera.position.x = originalPosition.current.x + (Math.random() - 0.5) * intensity;
      camera.position.y = originalPosition.current.y + (Math.random() - 0.5) * intensity;
    }
  });

  return null;
};

// ============================================================
// PILGRIM MODEL
// ============================================================
// Simple pilgrim model (always works, no GLB dependency)
const SimplePilgrim = ({
  position = [0, 0, 0],
  scale = 1,
  isMoving = false,
  lookDirection = 0
}) => {
  const groupRef = useRef();
  const legsRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = lookDirection;
    }
    // Walking animation
    if (isMoving && legsRef.current) {
      const t = state.clock.elapsedTime * 8;
      legsRef.current.children[0].rotation.x = Math.sin(t) * 0.4;
      legsRef.current.children[1].rotation.x = Math.sin(t + Math.PI) * 0.4;
    }
  });

  const s = scale;
  return (
    <group ref={groupRef} position={position}>
      {/* Body - Ihram garment */}
      <mesh position={[0, 0.5 * s, 0]} castShadow>
        <cylinderGeometry args={[0.15 * s, 0.2 * s, 0.8 * s, 12]} />
        <meshStandardMaterial color="#FAFAFA" roughness={0.6} />
      </mesh>

      {/* Upper body */}
      <mesh position={[0, 0.95 * s, 0]} castShadow>
        <cylinderGeometry args={[0.12 * s, 0.15 * s, 0.4 * s, 12]} />
        <meshStandardMaterial color="#FAFAFA" roughness={0.6} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.25 * s, 0]} castShadow>
        <sphereGeometry args={[0.12 * s, 16, 16]} />
        <meshStandardMaterial color="#D4A574" roughness={0.6} />
      </mesh>

      {/* Beard */}
      <mesh position={[0, 1.18 * s, 0.08 * s]}>
        <boxGeometry args={[0.1 * s, 0.06 * s, 0.04 * s]} />
        <meshStandardMaterial color="#2D2D2D" roughness={0.9} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.2 * s, 0.85 * s, 0.05 * s]} rotation={[0.2, 0, 0.3]} castShadow>
        <capsuleGeometry args={[0.04 * s, 0.25 * s, 4, 8]} />
        <meshStandardMaterial color="#D4A574" roughness={0.6} />
      </mesh>
      <mesh position={[0.2 * s, 0.85 * s, 0.05 * s]} rotation={[0.2, 0, -0.3]} castShadow>
        <capsuleGeometry args={[0.04 * s, 0.25 * s, 4, 8]} />
        <meshStandardMaterial color="#D4A574" roughness={0.6} />
      </mesh>

      {/* Legs */}
      <group ref={legsRef} position={[0, 0.15 * s, 0]}>
        <mesh position={[-0.07 * s, -0.1 * s, 0]} castShadow>
          <capsuleGeometry args={[0.05 * s, 0.2 * s, 4, 8]} />
          <meshStandardMaterial color="#FAFAFA" roughness={0.6} />
        </mesh>
        <mesh position={[0.07 * s, -0.1 * s, 0]} castShadow>
          <capsuleGeometry args={[0.05 * s, 0.2 * s, 4, 8]} />
          <meshStandardMaterial color="#FAFAFA" roughness={0.6} />
        </mesh>
      </group>

      {/* Feet */}
      <mesh position={[-0.07 * s, 0.02 * s, 0.03 * s]}>
        <boxGeometry args={[0.06 * s, 0.02 * s, 0.1 * s]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>
      <mesh position={[0.07 * s, 0.02 * s, 0.03 * s]}>
        <boxGeometry args={[0.06 * s, 0.02 * s, 0.1 * s]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>
    </group>
  );
};

// Export SimplePilgrim as the main pilgrim model
export const RealisticPilgrim = SimplePilgrim;
export const EnhancedPilgrim = SimplePilgrim;
export const PilgrimModel = SimplePilgrim;

// ============================================================
// FLOATING OBJECT WRAPPER
// ============================================================
export const FloatingObject = ({ children, speed = 1, height = 0.5 }) => (
  <Float speed={speed} rotationIntensity={0.2} floatIntensity={height}>
    {children}
  </Float>
);

export default {
  EnhancedLighting,
  EnhancedSky,
  EnhancedMarbleMaterial,
  EnhancedGoldMaterial,
  EnhancedStoneMaterial,
  EnhancedFabricMaterial,
  AtmosphericFog,
  DustParticles,
  GoldenSparkles,
  AtmosphericClouds,
  EnhancedGround,
  CameraShake,
  EnhancedPilgrim,
  RealisticPilgrim,
  PilgrimModel,
  FloatingObject
};

