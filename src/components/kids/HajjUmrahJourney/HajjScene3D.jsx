/**
 * HajjScene3D.jsx
 * Scene router for all Hajj/Umrah 3D scenes.
 * Lazy-loads individual scene components and maps stepId to scene.
 */

import React, { lazy, Suspense, memo, useState } from 'react';
import { Canvas } from '@react-three/fiber';

// ============================================================
// LAZY-LOADED SCENES (code-split per scene)
// ============================================================
const KaabaScene = lazy(() => import('./scenes3d/KaabaScene'));
const SaiScene = lazy(() => import('./scenes3d/SaiScene'));
const IhramScene = lazy(() => import('./scenes3d/IhramScene'));

// ============================================================
// SCENE REGISTRY: sceneId → { Component, camera, background }
// ============================================================
const SCENE_REGISTRY = {
  // Miqat / Ihram scene (desert with pilgrim changing into ihram)
  miqat: {
    Component: IhramScene,
    bg: 'linear-gradient(180deg, #87CEEB 0%, #F0E68C 60%, #D4B896 100%)',
    cam: [0, 1, 3.5],
    fov: 45
  },
  ihram: {
    Component: IhramScene,
    bg: 'linear-gradient(180deg, #87CEEB 0%, #F0E68C 60%, #D4B896 100%)',
    cam: [0, 1, 3.5],
    fov: 45
  },
  // Tawaf scene (Kaaba with pilgrims circling)
  kaaba: {
    Component: KaabaScene,
    bg: 'linear-gradient(180deg, #1a365d 0%, #2d3748 40%, #4a5568 100%)',
    cam: [0, 2, 4],
    fov: 50
  },
  tawaf: {
    Component: KaabaScene,
    bg: 'linear-gradient(180deg, #1a365d 0%, #2d3748 40%, #4a5568 100%)',
    cam: [0, 2, 4],
    fov: 50
  },
  // Sa'i scene (walking between Safa and Marwah)
  masa: {
    Component: SaiScene,
    bg: 'linear-gradient(180deg, #F5F0E8 0%, #E8E0D0 40%, #D4C8B8 100%)',
    cam: [0, 1.5, 3.5],
    fov: 55
  },
  sai: {
    Component: SaiScene,
    bg: 'linear-gradient(180deg, #F5F0E8 0%, #E8E0D0 40%, #D4C8B8 100%)',
    cam: [0, 1.5, 3.5],
    fov: 55
  },
  safa_marwah: {
    Component: SaiScene,
    bg: 'linear-gradient(180deg, #F5F0E8 0%, #E8E0D0 40%, #D4C8B8 100%)',
    cam: [0, 1.5, 3.5],
    fov: 55
  },
  // Completion scene (show Kaaba for celebration)
  completion: {
    Component: KaabaScene,
    bg: 'linear-gradient(180deg, #1a365d 0%, #2d3748 40%, #4a5568 100%)',
    cam: [0, 2, 4],
    fov: 50
  },
  // Halq/Taqsir (hair cutting) - reuse Ihram scene
  halq: {
    Component: IhramScene,
    bg: 'linear-gradient(180deg, #F5F0E8 0%, #E8E0D0 50%, #D4C8B8 100%)',
    cam: [0, 1, 3],
    fov: 45
  },
  // Hajj-specific scenes
  mina: {
    Component: IhramScene,
    bg: 'linear-gradient(180deg, #87CEEB 0%, #F0E68C 60%, #D4B896 100%)',
    cam: [0, 1, 3.5],
    fov: 45
  },
  arafat: {
    Component: IhramScene,
    bg: 'linear-gradient(180deg, #FEF3C7 0%, #FDE68A 40%, #F59E0B 100%)',
    cam: [0, 1, 3.5],
    fov: 45
  },
  muzdalifah: {
    Component: IhramScene,
    bg: 'linear-gradient(180deg, #1E293B 0%, #334155 50%, #475569 100%)',
    cam: [0, 1, 3.5],
    fov: 45
  },
  jamarat: {
    Component: IhramScene,
    bg: 'linear-gradient(180deg, #87CEEB 0%, #F0E68C 60%, #D4B896 100%)',
    cam: [0, 1, 3.5],
    fov: 45
  },
};

// ============================================================
// STEP TO SCENE MAPPING
// ============================================================
const STEP_TO_SCENE = {
  // Umrah steps
  1: 'ihram',    // Ihram at Miqat
  2: 'tawaf',    // Tawaf around Kaaba
  3: 'sai',      // Sa'i between Safa and Marwah
  4: 'halq',     // Halq/Taqsir (hair cutting)
  5: 'tawaf',    // Completion (show Kaaba again)

  // Hajj steps (8th Dhul Hijjah onwards)
  6: 'ihram',    // Day 1: Ihram
  7: 'mina',     // Day 1: Go to Mina
  8: 'arafat',   // Day 2: Arafat
  9: 'muzdalifah', // Day 2: Muzdalifah
  10: 'jamarat', // Day 3: Jamarat
  11: 'tawaf',   // Day 3: Tawaf al-Ifadah
  12: 'sai',     // Day 3: Sa'i
  13: 'mina',    // Day 4: Mina (nights)
  14: 'jamarat', // Day 4-5: Stoning
  15: 'tawaf',   // Tawaf al-Wida (Farewell)
};

// R3F fallback (renders inside Canvas)
const SceneFallback = () => (
  <>
    <ambientLight intensity={0.3} />
    <mesh>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="#10B981" transparent opacity={0.3} />
    </mesh>
  </>
);

// ============================================================
// MAIN EXPORT
// ============================================================
const HajjScene3D = memo(({ stepId = 1, sceneId = null, isActive = true }) => {
  const [ready, setReady] = useState(false);

  // Determine which scene to show
  const effectiveSceneId = sceneId || STEP_TO_SCENE[stepId] || 'tawaf';
  const scene = SCENE_REGISTRY[effectiveSceneId] || SCENE_REGISTRY.tawaf;
  const { Component, bg, cam, fov } = scene;

  return (
    <div
      className="relative w-full overflow-hidden rounded-b-3xl"
      style={{ height: '40vh', minHeight: 220, maxHeight: 380, background: bg }}
    >
      {/* Loading indicator */}
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              <div className="absolute inset-0 rounded-full border-2 border-t-emerald-300 animate-spin" />
            </div>
            <p className="text-white/60 text-xs">Loading 3D Scene</p>
          </div>
        </div>
      )}

      <Canvas
        camera={{ position: cam, fov, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        style={{
          width: '100%',
          height: '100%',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={() => setReady(true)}
      >
        <Suspense fallback={<SceneFallback />}>
          <Component isActive={isActive} />
        </Suspense>
      </Canvas>

      {/* Bismillah overlay */}
      {isActive && (
        <div className="absolute top-3 left-0 right-0 text-center pointer-events-none">
          <p
            className="text-white/80 text-xl drop-shadow-lg"
            style={{
              fontFamily: "'Scheherazade New', serif",
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              animation: 'hajjFloat 3s ease-in-out infinite'
            }}
          >
            ﷽
          </p>
        </div>
      )}

      {/* 3D badge */}
      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white/80 text-[10px] font-bold pointer-events-none">
        3D
      </div>

      {/* Scene label */}
      <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/90 text-xs font-medium pointer-events-none capitalize">
        {effectiveSceneId}
      </div>

      <style>{`
        @keyframes hajjFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
});

export default HajjScene3D;
