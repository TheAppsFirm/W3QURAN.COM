/**
 * EnhancedGraphics.jsx
 * Enhanced lighting, materials, and effects for modern 3D look
 * Improves visual quality across all immersive games
 */

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sky, Stars, Sparkles, Cloud, Float, Environment, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js';

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
// Pilgrim in Ihram — detailed model with complete anatomy and authentic clothing
// Proportions: ~1.75m man with 7.5 head heights, scale=1 → ~1.4 units tall
// Ihram: Izar (lower wrap waist→below knee) + Rida (upper drape, right shoulder bare)
// GLB-based pilgrim model with walking/running animations
const PILGRIM_MODEL_URL = '/models/hajj/pilgrim.glb';

const GLBPilgrim = ({ position = [0, 0, 0], scale = 1, isMoving = false, isRunning = false, lookDirection = 0 }) => {
  const groupRef = useRef();
  const modelRef = useRef();
  const { scene, animations } = useGLTF(PILGRIM_MODEL_URL, true); // true = Draco decoder

  // SkeletonUtils.clone properly handles skinned meshes + bones
  const clonedScene = useMemo(() => skeletonClone(scene), [scene]);
  const { actions } = useAnimations(animations, modelRef);

  // Find animation names
  const walkName = useMemo(() => {
    const names = Object.keys(actions);
    return names.find(n => n.toLowerCase().includes('walk')) || names[0];
  }, [actions]);
  const runName = useMemo(() => {
    const names = Object.keys(actions);
    return names.find(n => n.toLowerCase().includes('run'));
  }, [actions]);

  // Handle animation state changes
  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    // Fade out all animations
    Object.values(actions).forEach(a => { if (a) a.fadeOut(0.3); });

    if (isMoving) {
      const animName = (isRunning && runName) ? runName : walkName;
      if (animName && actions[animName]) {
        actions[animName].reset().fadeIn(0.3).play();
      }
    }
  }, [isMoving, isRunning, actions, walkName, runName]);

  // Clipping plane ref — updated every frame to follow model's WORLD transform
  const idtibaPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0));
  // Reusable vectors to avoid allocations in useFrame
  const _worldQuat = useMemo(() => new THREE.Quaternion(), []);
  const _worldPos = useMemo(() => new THREE.Vector3(), []);
  const _normal = useMemo(() => new THREE.Vector3(), []);

  // Handle rotation + update clipping plane to follow actual world orientation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = lookDirection;

      // Get the ACTUAL world rotation (includes parent group rotation from WalkingPilgrim)
      groupRef.current.getWorldQuaternion(_worldQuat);
      groupRef.current.getWorldPosition(_worldPos);

      // Base normal (-1, 0, 0) clips the model's local right side (positive X)
      // Rotate it by the actual world quaternion so it follows the model everywhere
      _normal.set(-1, 0, 0).applyQuaternion(_worldQuat);

      idtibaPlaneRef.current.normal.copy(_normal);
      // Plane passes through the model's world center
      idtibaPlaneRef.current.constant = -_normal.dot(_worldPos);
    }
  });

  // Setup: hide Kopiah + Slippers, apply Idtiba clipping, enable shadows
  const { gl } = useThree();
  useEffect(() => {
    gl.localClippingEnabled = true;

    const ihramMeshes = [];

    clonedScene.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const matName = child.material?.name?.toLowerCase() || '';

      // Hide Kopiah — no cap during Ihram
      // Hide Slippers — pilgrims are barefoot during Tawaf
      if (matName.includes('kopiah') || matName.includes('slipper')) {
        child.visible = false;
        return;
      }

      // Collect Ihram meshes to determine upper vs lower
      if (matName.includes('ihram')) {
        child.geometry.computeBoundingBox();
        const bb = child.geometry.boundingBox;
        const centerY = (bb.min.y + bb.max.y) / 2;
        ihramMeshes.push({ mesh: child, centerY, matName });
      }
    });

    // Find the upper Ihram (Rida) — group with higher average Y
    if (ihramMeshes.length > 0) {
      const groups = {};
      ihramMeshes.forEach(({ mesh, centerY, matName }) => {
        if (!groups[matName]) groups[matName] = { meshes: [], totalY: 0, count: 0 };
        groups[matName].meshes.push(mesh);
        groups[matName].totalY += centerY;
        groups[matName].count++;
      });

      let upperGroup = null;
      let highestY = -Infinity;
      Object.entries(groups).forEach(([name, g]) => {
        const avgY = g.totalY / g.count;
        if (avgY > highestY) {
          highestY = avgY;
          upperGroup = g;
        }
      });

      // Apply the shared clipping plane ref to Rida meshes
      if (upperGroup) {
        upperGroup.meshes.forEach(mesh => {
          mesh.material = mesh.material.clone();
          mesh.material.clippingPlanes = [idtibaPlaneRef.current];
          mesh.material.clipShadows = true;
        });
      }
    }
  }, [clonedScene, gl]);

  // Scale: the GLB model is roughly human-sized, we adjust to match scene
  const modelScale = scale * 0.45;

  return (
    <group ref={groupRef} position={position}>
      <group ref={modelRef}>
        <primitive object={clonedScene} scale={[modelScale, modelScale, modelScale]} />
      </group>
    </group>
  );
};

// Wrapper component — renders GLB model with Suspense fallback
const SimplePilgrim = (props) => {
  return (
    <Suspense fallback={<FallbackPilgrim position={props.position} scale={props.scale} />}>
      <GLBPilgrim {...props} />
    </Suspense>
  );
};

// Minimal fallback shown while GLB loads
const FallbackPilgrim = ({ position = [0, 0, 0], scale = 1 }) => {
  const s = scale;
  return (
    <group position={position}>
      {/* Simple capsule body placeholder */}
      <mesh position={[0, 0.6 * s, 0]} castShadow>
        <capsuleGeometry args={[0.12 * s, 0.6 * s, 4, 8]} />
        <meshStandardMaterial color="#F5F2EC" roughness={0.8} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.1 * s, 0]} castShadow>
        <sphereGeometry args={[0.1 * s, 8, 8]} />
        <meshStandardMaterial color="#C4926A" roughness={0.5} />
      </mesh>
    </group>
  );
};

// Preload the model for faster initial display
useGLTF.preload(PILGRIM_MODEL_URL, true);

// Export as main pilgrim model
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

