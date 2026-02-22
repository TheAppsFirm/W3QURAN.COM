/**
 * DuaScene3D.jsx
 * Scene router for all 3D dua scenes.
 * Lazy-loads individual scene components and maps duaId to scene + variant.
 */

import React, { lazy, Suspense, memo, useState } from 'react';
import { Canvas } from '@react-three/fiber';

// ============================================================
// LAZY-LOADED SCENES (code-split per scene)
// ============================================================
const KitchenScene = lazy(() => import('./scenes3d/KitchenScene'));
const BedroomScene = lazy(() => import('./scenes3d/BedroomScene'));
const BathroomScene = lazy(() => import('./scenes3d/BathroomScene'));
const WuduScene = lazy(() => import('./scenes3d/WuduScene'));
const MosqueScene = lazy(() => import('./scenes3d/MosqueScene'));
const HomeScene = lazy(() => import('./scenes3d/HomeScene'));
const MirrorScene = lazy(() => import('./scenes3d/MirrorScene'));
const ClothingScene = lazy(() => import('./scenes3d/ClothingScene'));
const WeatherScene = lazy(() => import('./scenes3d/WeatherScene'));
const FamilyScene = lazy(() => import('./scenes3d/FamilyScene'));
const SneezeScene = lazy(() => import('./scenes3d/SneezeScene'));
const TravelScene = lazy(() => import('./scenes3d/TravelScene'));
const MarketScene = lazy(() => import('./scenes3d/MarketScene'));
const StudyScene = lazy(() => import('./scenes3d/StudyScene'));
const ScaredScene = lazy(() => import('./scenes3d/ScaredScene'));
const SickScene = lazy(() => import('./scenes3d/SickScene'));
const AngryScene = lazy(() => import('./scenes3d/AngryScene'));
const IftarScene = lazy(() => import('./scenes3d/IftarScene'));
const CharacterScene = lazy(() => import('./scenes3d/CharacterScene'));

// ============================================================
// SCENE REGISTRY: sceneId → { Component, camera, background }
// ============================================================
const SCENE_REGISTRY = {
  kitchen:   { Component: KitchenScene,   bg: 'linear-gradient(180deg, #1a4731 0%, #065F46 40%, #10B981 100%)',   cam: [0, 0.8, 2.8], fov: 38 },
  bedroom:   { Component: BedroomScene,   bg: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  bathroom:  { Component: BathroomScene,  bg: 'linear-gradient(180deg, #334155 0%, #475569 40%, #64748B 100%)',   cam: [0, 0.5, 2.8], fov: 38 },
  wudu:      { Component: WuduScene,      bg: 'linear-gradient(180deg, #0c4a6e 0%, #0369a1 40%, #0ea5e9 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  mosque:    { Component: MosqueScene,    bg: 'linear-gradient(180deg, #3b0764 0%, #6b21a8 40%, #a855f7 100%)',   cam: [0, 0.6, 3.0], fov: 38 },
  home:      { Component: HomeScene,      bg: 'linear-gradient(180deg, #78350f 0%, #b45309 40%, #f59e0b 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  mirror:    { Component: MirrorScene,    bg: 'linear-gradient(180deg, #831843 0%, #be185d 40%, #ec4899 100%)',   cam: [1.0, 0.7, 2.2], fov: 38 },
  clothing:  { Component: ClothingScene,  bg: 'linear-gradient(180deg, #831843 0%, #db2777 40%, #f472b6 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  rain:      { Component: WeatherScene,   bg: 'linear-gradient(180deg, #164e63 0%, #0891b2 40%, #22d3ee 100%)',   cam: [0, 0.6, 3.0], fov: 38 },
  thunder:   { Component: WeatherScene,   bg: 'linear-gradient(180deg, #0f172a 0%, #1e293b 40%, #334155 100%)',   cam: [0, 0.6, 3.0], fov: 38 },
  family:    { Component: FamilyScene,    bg: 'linear-gradient(180deg, #881337 0%, #e11d48 40%, #fb7185 100%)',   cam: [0, 0.6, 3.2], fov: 38 },
  sneeze:    { Component: SneezeScene,    bg: 'linear-gradient(180deg, #7c2d12 0%, #ea580c 40%, #fb923c 100%)',   cam: [0, 0.6, 2.5], fov: 38 },
  travel:    { Component: TravelScene,    bg: 'linear-gradient(180deg, #134e4a 0%, #0d9488 40%, #2dd4bf 100%)',   cam: [0, 0.6, 3.2], fov: 38 },
  market:    { Component: MarketScene,    bg: 'linear-gradient(180deg, #134e4a 0%, #0f766e 40%, #14b8a6 100%)',   cam: [0, 0.6, 3.2], fov: 38 },
  study:     { Component: StudyScene,     bg: 'linear-gradient(180deg, #312e81 0%, #4338ca 40%, #6366f1 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  scared:    { Component: ScaredScene,    bg: 'linear-gradient(180deg, #3b0764 0%, #7e22ce 40%, #a855f7 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  sick:      { Component: SickScene,      bg: 'linear-gradient(180deg, #831843 0%, #be185d 40%, #ec4899 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  angry:     { Component: AngryScene,     bg: 'linear-gradient(180deg, #7f1d1d 0%, #dc2626 40%, #f87171 100%)',   cam: [0, 0.6, 2.5], fov: 44 },
  iftar:     { Component: IftarScene,     bg: 'linear-gradient(180deg, #78350f 0%, #c2410c 40%, #f97316 100%)',   cam: [0, 0.6, 2.8], fov: 38 },
  character: { Component: CharacterScene, bg: 'linear-gradient(180deg, #881337 0%, #e11d48 40%, #fb7185 100%)',   cam: [0, 0.8, 2.8], fov: 38 },
};

// ============================================================
// DUA → VARIANT MAPPING
// ============================================================
const DUA_VARIANTS = {
  1: 'eating', 2: 'thankful', 30: 'drinking',
  3: 'sleep', 4: 'wake',
  5: 'enter', 6: 'leave',
  7: 'washing', 8: 'done',
  9: 'enter', 10: 'leave',
  11: 'enter', 12: 'leave',
  15: 'rain', 16: 'thunder',
  21: 'reading', 22: 'writing', 23: 'dua',
  25: 'self', 26: 'visiting',
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
const DuaScene3D = memo(({ sceneId = 'kitchen', isActive = true, duaId = 1 }) => {
  const [ready, setReady] = useState(false);

  const scene = SCENE_REGISTRY[sceneId] || SCENE_REGISTRY.kitchen;
  const { Component, bg, cam, fov } = scene;
  const variant = DUA_VARIANTS[duaId] || 'default';

  return (
    <div className="relative w-full overflow-hidden rounded-b-3xl"
      style={{ height: '35vh', minHeight: 200, maxHeight: 320, background: bg }}>

      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              <div className="absolute inset-0 rounded-full border-2 border-t-emerald-300 animate-spin" />
            </div>
            <p className="text-white/50 text-[11px]">Loading 3D</p>
          </div>
        </div>
      )}

      <Canvas
        camera={{ position: cam, fov, near: 0.1, far: 20 }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%', opacity: ready ? 1 : 0, transition: 'opacity 0.4s ease' }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={() => setReady(true)}
      >
        <Suspense fallback={<SceneFallback />}>
          <Component variant={variant} isActive={isActive} />
        </Suspense>
      </Canvas>

      {isActive && (
        <div className="absolute top-3 left-0 right-0 text-center pointer-events-none">
          <p className="text-white/80 text-lg"
            style={{ fontFamily: "'Scheherazade New', serif", textShadow: '0 2px 8px rgba(0,0,0,0.3)', animation: 'duaFloat 3s ease-in-out infinite' }}>
            ﷽
          </p>
        </div>
      )}

      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-white/70 text-[10px] font-bold pointer-events-none">
        3D
      </div>

      <style>{`@keyframes duaFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }`}</style>
    </div>
  );
});

export default DuaScene3D;
