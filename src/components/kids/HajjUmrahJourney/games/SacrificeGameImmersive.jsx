/**
 * SacrificeGameImmersive.jsx
 * Respectful 3D experience for the Qurbani/Sacrifice step
 * Focus on the spiritual meaning, not graphic content
 */

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sky, Text, Float, Sparkles, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import { RealisticPilgrim, EnhancedLighting, DustParticles } from './EnhancedGraphics';

// ============================================================
// 3D COMPONENTS
// ============================================================

// Mina landscape
const MinaLandscape = () => {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#C9B896" roughness={1} />
      </mesh>

      {/* Mountains in background */}
      {Array.from({ length: 15 }).map((_, i) => {
        const angle = (i / 15) * Math.PI + Math.PI / 4;
        const radius = 80;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius - 40]}
            scale={[15 + Math.random() * 10, 25 + Math.random() * 20, 15 + Math.random() * 10]}
          >
            <coneGeometry args={[1, 1, 6]} />
            <meshStandardMaterial color="#8B7355" flatShading />
          </mesh>
        );
      })}
    </group>
  );
};

// Slaughterhouse area (abstract, not graphic)
const SacrificeArea = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Clean facility building */}
      <mesh position={[0, 3, -10]}>
        <boxGeometry args={[20, 6, 15]} />
        <meshStandardMaterial color="#E8E8E8" roughness={0.3} />
      </mesh>

      {/* Dome */}
      <mesh position={[0, 7, -10]}>
        <sphereGeometry args={[5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#10B981" roughness={0.4} />
      </mesh>

      {/* Entrance */}
      <mesh position={[0, 2, -2]}>
        <boxGeometry args={[6, 4, 0.5]} />
        <meshStandardMaterial color="#5D4037" />
      </mesh>

      {/* Sign */}
      <Text
        position={[0, 6.5, -2.5]}
        fontSize={0.8}
        color="#FFFFFF"
        anchorX="center"
      >
        🐑 Qurbani
      </Text>
    </group>
  );
};

// Sheep in pen (cute, kid-friendly)
const SheepPen = ({ onSelectSheep, selectedSheep }) => {
  const sheep = useMemo(() => {
    const items = [];
    for (let i = 0; i < 8; i++) {
      items.push({
        id: i,
        x: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 8 + 20,
        scale: 0.8 + Math.random() * 0.3
      });
    }
    return items;
  }, []);

  return (
    <group>
      {/* Pen fence */}
      <mesh position={[0, 0.5, 20]}>
        <boxGeometry args={[16, 1, 0.2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[-8, 0.5, 24]}>
        <boxGeometry args={[0.2, 1, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[8, 0.5, 24]}>
        <boxGeometry args={[0.2, 1, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Sheep */}
      {sheep.map((s) => (
        <group
          key={s.id}
          position={[s.x, 0, s.z]}
          scale={s.scale}
          onClick={() => onSelectSheep(s.id)}
        >
          {/* Body - fluffy */}
          <mesh position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial
              color={selectedSheep === s.id ? "#FFD700" : "#FAFAFA"}
              roughness={1}
            />
          </mesh>
          {/* Head */}
          <mesh position={[0.4, 0.7, 0]}>
            <sphereGeometry args={[0.25, 8, 8]} />
            <meshStandardMaterial color="#2D2D2D" />
          </mesh>
          {/* Legs */}
          {[[-0.2, 0, -0.2], [0.2, 0, -0.2], [-0.2, 0, 0.2], [0.2, 0, 0.2]].map((pos, i) => (
            <mesh key={i} position={pos}>
              <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
              <meshStandardMaterial color="#2D2D2D" />
            </mesh>
          ))}
          {/* Selection glow */}
          {selectedSheep === s.id && (
            <pointLight position={[0, 1, 0]} intensity={0.5} color="#FFD700" distance={3} />
          )}
        </group>
      ))}
    </group>
  );
};

// Pilgrim character (using RealisticPilgrim)
const Pilgrim = ({ position }) => {
  return (
    <group position={position}>
      <RealisticPilgrim
        position={[0, 0, 0]}
        scale={1.2}
        isMoving={false}
        lookDirection={Math.PI}
        skinTone="#C68642"
      />
    </group>
  );
};

// Distribution visualization
const DistributionVisualization = ({ active }) => {
  if (!active) return null;

  return (
    <group position={[0, 0, 0]}>
      {/* Three portions floating */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[-5, 3, 5]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#22C55E" emissive="#22C55E" emissiveIntensity={0.3} />
          </mesh>
          <Text position={[0, 1.2, 0]} fontSize={0.4} color="#FFFFFF">
            Poor
          </Text>
          <Text position={[0, 1.6, 0]} fontSize={0.5}>
            🤲
          </Text>
        </group>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[0, 3, 5]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.3} />
          </mesh>
          <Text position={[0, 1.2, 0]} fontSize={0.4} color="#FFFFFF">
            Family
          </Text>
          <Text position={[0, 1.6, 0]} fontSize={0.5}>
            👨‍👩‍👧‍👦
          </Text>
        </group>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[5, 3, 5]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.3} />
          </mesh>
          <Text position={[0, 1.2, 0]} fontSize={0.4} color="#FFFFFF">
            Self
          </Text>
          <Text position={[0, 1.6, 0]} fontSize={0.5}>
            🏠
          </Text>
        </group>
      </Float>

      {/* Connection lines */}
      <Sparkles count={50} scale={15} size={3} speed={1} color="#FFD700" position={[0, 3, 5]} />
    </group>
  );
};

// Camera controller
const CameraController = ({ stage }) => {
  const { camera } = useThree();

  useFrame(() => {
    let target;
    if (stage === 'select') {
      target = new THREE.Vector3(0, 5, 35);
    } else if (stage === 'sacrifice') {
      target = new THREE.Vector3(0, 8, 15);
    } else {
      target = new THREE.Vector3(0, 6, 20);
    }
    camera.position.lerp(target, 0.03);
    camera.lookAt(0, 2, 10);
  });

  return null;
};

// Main 3D scene
const SacrificeScene = ({ stage, selectedSheep, onSelectSheep }) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[50, 100, 50]} intensity={1} castShadow />

      {/* Sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 50, 100]}
        inclination={0.5}
        azimuth={0.25}
      />

      {/* Environment */}
      <MinaLandscape />
      <SacrificeArea />

      {stage === 'select' && (
        <SheepPen onSelectSheep={onSelectSheep} selectedSheep={selectedSheep} />
      )}

      {/* Pilgrim */}
      <Pilgrim position={[0, 0, 10]} />

      {/* Distribution visualization */}
      <DistributionVisualization active={stage === 'distribute'} />

      {/* Clouds */}
      <Cloud position={[-30, 40, -50]} speed={0.2} opacity={0.3} />
      <Cloud position={[30, 50, -60]} speed={0.15} opacity={0.25} />

      {/* Camera */}
      <CameraController stage={stage} />
    </>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const SacrificeGameImmersive = ({ language = 'en', onComplete, onBack }) => {
  const [stage, setStage] = useState('story'); // story, select, bismillah, sacrifice, distribute, complete
  const [selectedSheep, setSelectedSheep] = useState(null);
  const isRTL = language === 'ar' || language === 'ur';

  const text = {
    title: { en: 'Qurbani (Sacrifice)', ur: 'قربانی', ar: 'الأضحية' },
    story: {
      title: { en: 'The Story of Ibrahim', ur: 'حضرت ابراہیم کی کہانی', ar: 'قصة إبراهيم' },
      text: {
        en: 'Prophet Ibrahim (AS) was willing to sacrifice his son Ismail as an act of obedience to Allah. Allah accepted his devotion and replaced Ismail with a ram. We commemorate this great sacrifice today.',
        ur: 'حضرت ابراہیم علیہ السلام اللہ کی فرمانبرداری میں اپنے بیٹے اسماعیل کو قربان کرنے کو تیار تھے۔ اللہ نے ان کی عقیدت قبول کی اور اسماعیل کی جگہ مینڈھا رکھ دیا۔ آج ہم اس عظیم قربانی کی یاد مناتے ہیں۔',
        ar: 'كان النبي إبراهيم عليه السلام مستعداً للتضحية بابنه إسماعيل طاعةً لله. قبِل الله إخلاصه وفدى إسماعيل بكبش. نحن نحيي هذه التضحية العظيمة اليوم.'
      }
    },
    select: {
      title: { en: 'Select an Animal', ur: 'جانور منتخب کریں', ar: 'اختر الأضحية' },
      instruction: { en: 'Tap to select a healthy animal', ur: 'صحت مند جانور منتخب کرنے کے لیے ٹیپ کریں', ar: 'اضغط لاختيار حيوان صحي' }
    },
    bismillah: {
      arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
      en: 'In the name of Allah, Allah is the Greatest',
      ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے',
      instruction: { en: 'Say Bismillah before the sacrifice', ur: 'قربانی سے پہلے بسم اللہ کہیں', ar: 'قل بسم الله قبل الذبح' }
    },
    distribute: {
      title: { en: 'Distribute the Meat', ur: 'گوشت تقسیم کریں', ar: 'توزيع اللحم' },
      text: {
        en: 'The meat is divided into three parts: one for the poor, one for relatives, and one for the family.',
        ur: 'گوشت تین حصوں میں تقسیم ہوتا ہے: ایک غریبوں کے لیے، ایک رشتہ داروں کے لیے، اور ایک گھر والوں کے لیے۔',
        ar: 'يُقسم اللحم إلى ثلاثة أجزاء: جزء للفقراء، وجزء للأقارب، وجزء للأسرة.'
      }
    },
    complete: { en: 'Qurbani Complete!', ur: 'قربانی مکمل!', ar: 'اكتملت الأضحية!' },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    next: { en: 'Next', ur: 'اگلا', ar: 'التالي' },
    confirm: { en: 'Confirm', ur: 'تصدیق', ar: 'تأكيد' }
  };

  const handleSelectSheep = useCallback((id) => {
    setSelectedSheep(id);
  }, []);

  const handleNext = useCallback(() => {
    if (stage === 'story') setStage('select');
    else if (stage === 'select' && selectedSheep !== null) setStage('bismillah');
    else if (stage === 'bismillah') {
      setStage('sacrifice');
      setTimeout(() => setStage('distribute'), 2000);
    }
    else if (stage === 'distribute') {
      setTimeout(() => setStage('complete'), 2000);
    }
  }, [stage, selectedSheep]);

  return (
    <div
      className="fixed inset-0 z-[10000]"
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        background: 'linear-gradient(to bottom, #87CEEB 0%, #C9B896 100%)'
      }}
    >
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 5, 35], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #87CEEB 0%, #C9B896 100%)' }}
      >
        <SacrificeScene
          stage={stage}
          selectedSheep={selectedSheep}
          onSelectSheep={handleSelectSheep}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-50 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white pointer-events-auto"
        >
          ←
        </button>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="absolute top-4 right-4 z-50 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm pointer-events-auto"
        >
          {text.skip[language]} →
        </button>

        {/* Title */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
          <h1 className="text-white font-bold text-lg" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
            🐑 {text.title[language]}
          </h1>
        </div>

        {/* Story stage */}
        {stage === 'story' && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-6 max-w-md text-center pointer-events-auto">
            <h2 className="text-amber-400 text-xl font-bold mb-3" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.story.title[language]}
            </h2>
            <p className="text-white text-sm leading-relaxed mb-4" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.story.text[language]}
            </p>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-full"
            >
              {text.next[language]} →
            </button>
          </div>
        )}

        {/* Select stage */}
        {stage === 'select' && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-4 text-center pointer-events-auto">
            <p className="text-white mb-2" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.select.instruction[language]}
            </p>
            {selectedSheep !== null && (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-full mt-2"
              >
                {text.confirm[language]} ✓
              </button>
            )}
          </div>
        )}

        {/* Bismillah stage */}
        {stage === 'bismillah' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto" onClick={handleNext}>
            <div className="bg-black/70 backdrop-blur-sm rounded-3xl px-12 py-8 text-center animate-pulse">
              <p className="text-4xl text-white mb-4" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                {text.bismillah.arabic}
              </p>
              <p className="text-amber-400 mb-4" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
                {text.bismillah[language] || text.bismillah.en}
              </p>
              <p className="text-white/50 text-sm">
                {language === 'ar' ? 'اضغط للمتابعة' : language === 'ur' ? 'جاری رکھنے کے لیے ٹیپ کریں' : 'Tap to continue'}
              </p>
            </div>
          </div>
        )}

        {/* Sacrifice stage (brief, respectful) */}
        {stage === 'sacrifice' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-center">
              <span className="text-6xl block mb-4">🤲</span>
              <p className="text-white text-xl" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                اللَّهُمَّ تَقَبَّلْ مِنَّا
              </p>
            </div>
          </div>
        )}

        {/* Distribute stage */}
        {stage === 'distribute' && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-6 max-w-md text-center pointer-events-auto">
            <h2 className="text-amber-400 text-xl font-bold mb-3" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.distribute.title[language]}
            </h2>
            <p className="text-white text-sm leading-relaxed mb-4" style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}>
              {text.distribute.text[language]}
            </p>
            <div className="flex justify-center gap-4 mb-4">
              <span className="text-3xl">🤲</span>
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <span className="text-3xl">🏠</span>
            </div>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-full"
            >
              {text.next[language]} →
            </button>
          </div>
        )}

        {/* Complete stage */}
        {stage === 'complete' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-auto">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl px-12 py-8 text-center shadow-2xl">
              <span className="text-6xl block mb-4">🐑</span>
              <p
                className="text-white text-2xl font-bold mb-4"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.complete[language]}
              </p>
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-full"
              >
                {text.next[language]} →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SacrificeGameImmersive;
