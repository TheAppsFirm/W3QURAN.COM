/**
 * TawafGame.jsx
 * Interactive 3D Tawaf game - User walks around Kaaba 7 times
 *
 * Controls:
 * - Tap/Click to move forward
 * - Hold to walk continuously
 * - Complete 7 rounds around Kaaba
 */

import React, { useRef, useState, useCallback, useEffect, memo, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  initAudio,
  startWalkingSound,
  stopWalkingSound,
  playRoundComplete,
  playGameComplete,
  playDuaReveal,
  startAmbientSound,
  stopAmbientSound,
  stopAllSounds,
} from './audioUtils';

// Colors
const KAABA_BLACK = '#1a1a1a';
const GOLD = '#D4AF37';
const MARBLE = '#F5F0E8';
const SKIN = '#F5C67A';
const WHITE_CLOTH = '#F8FAFC';

// ============================================================
// THE KAABA
// ============================================================
const Kaaba = memo(() => (
  <group position={[0, 0, 0]}>
    {/* Main black cube */}
    <mesh position={[0, 0.6, 0]}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color={KAABA_BLACK} roughness={0.8} />
    </mesh>

    {/* Golden band */}
    {[[0, 0.9, 0.61], [0, 0.9, -0.61]].map((pos, i) => (
      <mesh key={i} position={pos}>
        <boxGeometry args={[1.22, 0.12, 0.02]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
      </mesh>
    ))}
    {[[0.61, 0.9, 0], [-0.61, 0.9, 0]].map((pos, i) => (
      <mesh key={`side-${i}`} position={pos}>
        <boxGeometry args={[0.02, 0.12, 1.22]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
      </mesh>
    ))}

    {/* Hajar al-Aswad (Black Stone) - Starting point marker */}
    <mesh position={[0.65, 0.5, 0.65]} rotation={[0, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0.1, 0.1, 0.2, 8]} />
      <meshStandardMaterial color="#2a2a2a" roughness={0.5} />
    </mesh>
    <mesh position={[0.65, 0.5, 0.65]} rotation={[0, Math.PI / 4, 0]}>
      <torusGeometry args={[0.12, 0.02, 8, 16]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
    </mesh>

    {/* Door */}
    <mesh position={[0, 0.7, 0.615]}>
      <boxGeometry args={[0.35, 0.5, 0.02]} />
      <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
    </mesh>
  </group>
));

// ============================================================
// MATAF FLOOR
// ============================================================
const Mataf = memo(() => (
  <group>
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[4, 64]} />
      <meshStandardMaterial color={MARBLE} roughness={0.3} />
    </mesh>

    {/* Guide rings */}
    {[1.8, 2.2, 2.6, 3.0].map((r, i) => (
      <mesh key={i} position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[r - 0.02, r + 0.02, 64]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.4} />
      </mesh>
    ))}

    {/* Starting line (green) */}
    <mesh position={[1.5, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[0.1, 1.5]} />
      <meshStandardMaterial color="#10B981" />
    </mesh>
  </group>
));

// ============================================================
// REALISTIC PILGRIM IN IHRAM (User controlled)
// ============================================================
const PlayerAvatar = ({ angle, isMoving }) => {
  const groupRef = useRef();
  const legsRef = useRef();
  const armsRef = useRef();
  const radius = 2;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Position on circle
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    groupRef.current.position.x = x;
    groupRef.current.position.z = z;

    // Face direction of movement (tangent to circle, counter-clockwise)
    // Fixed: subtract PI to face correct direction
    groupRef.current.rotation.y = angle - Math.PI / 2;

    // Walking animation
    if (isMoving) {
      groupRef.current.position.y = Math.abs(Math.sin(t * 8)) * 0.02;
      // Leg swing animation
      if (legsRef.current) {
        legsRef.current.children[0].rotation.x = Math.sin(t * 8) * 0.4;
        legsRef.current.children[1].rotation.x = -Math.sin(t * 8) * 0.4;
      }
      // Arm swing
      if (armsRef.current) {
        armsRef.current.children[0].rotation.x = -Math.sin(t * 8) * 0.3;
        armsRef.current.children[1].rotation.x = Math.sin(t * 8) * 0.3;
      }
    } else {
      groupRef.current.position.y = 0;
    }
  });

  return (
    <group ref={groupRef} scale={1.6}>
      {/* === IHRAM CLOTHES === */}

      {/* Izar (lower garment) - wrapped around waist to ankles */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.12, 0.08, 0.55, 16]} />
        <meshStandardMaterial color={WHITE_CLOTH} roughness={0.4} />
      </mesh>

      {/* Izar fold detail */}
      <mesh position={[0.08, 0.15, 0.08]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.02, 0.35, 0.08]} />
        <meshStandardMaterial color="#E8E8E8" roughness={0.5} />
      </mesh>

      {/* Rida (upper garment) - draped over left shoulder */}
      <group position={[0, 0.4, 0]}>
        {/* Main chest/back coverage */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.28, 0.25, 0.12]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.4} />
        </mesh>

        {/* Left shoulder drape */}
        <mesh position={[-0.12, 0.08, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
          <meshStandardMaterial color={WHITE_CLOTH} roughness={0.4} />
        </mesh>

        {/* Cloth hanging from left shoulder */}
        <mesh position={[-0.18, -0.1, 0.05]} rotation={[0.2, 0, 0.2]}>
          <boxGeometry args={[0.08, 0.3, 0.06]} />
          <meshStandardMaterial color="#F0F0F0" roughness={0.5} />
        </mesh>

        {/* Right shoulder exposed (Idtiba for Tawaf) */}
        <mesh position={[0.14, 0.05, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>

      {/* === HEAD === */}
      <group position={[0, 0.65, 0]}>
        {/* Head */}
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={SKIN} roughness={0.6} />
        </mesh>

        {/* Hair (short/shaved for Hajj) */}
        <mesh position={[0, 0.05, 0]}>
          <sphereGeometry args={[0.095, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#2D2D2D" roughness={0.9} />
        </mesh>

        {/* Face features */}
        {/* Eyes */}
        <mesh position={[-0.035, 0.02, 0.085]}>
          <sphereGeometry args={[0.012, 8, 8]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        <mesh position={[0.035, 0.02, 0.085]}>
          <sphereGeometry args={[0.012, 8, 8]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>

        {/* Eyebrows */}
        <mesh position={[-0.035, 0.045, 0.08]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[0.03, 0.006, 0.01]} />
          <meshStandardMaterial color="#2D2D2D" />
        </mesh>
        <mesh position={[0.035, 0.045, 0.08]} rotation={[0, 0, -0.1]}>
          <boxGeometry args={[0.03, 0.006, 0.01]} />
          <meshStandardMaterial color="#2D2D2D" />
        </mesh>

        {/* Nose */}
        <mesh position={[0, -0.01, 0.095]}>
          <boxGeometry args={[0.02, 0.03, 0.02]} />
          <meshStandardMaterial color={SKIN} roughness={0.6} />
        </mesh>

        {/* Beard (light) */}
        <mesh position={[0, -0.05, 0.06]}>
          <sphereGeometry args={[0.06, 8, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial color="#3D3D3D" roughness={0.9} />
        </mesh>
      </group>

      {/* === ARMS === */}
      <group ref={armsRef}>
        {/* Left arm */}
        <group position={[-0.18, 0.35, 0]}>
          <mesh rotation={[0, 0, 0.3]}>
            <capsuleGeometry args={[0.03, 0.2, 4, 8]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
          {/* Hand */}
          <mesh position={[-0.08, -0.12, 0]}>
            <sphereGeometry args={[0.025, 8, 8]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        </group>

        {/* Right arm (exposed for Idtiba) */}
        <group position={[0.18, 0.35, 0]}>
          <mesh rotation={[0, 0, -0.3]}>
            <capsuleGeometry args={[0.03, 0.2, 4, 8]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
          {/* Hand */}
          <mesh position={[0.08, -0.12, 0]}>
            <sphereGeometry args={[0.025, 8, 8]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        </group>
      </group>

      {/* === LEGS === */}
      <group ref={legsRef} position={[0, -0.2, 0]}>
        {/* Left leg */}
        <group position={[-0.05, 0, 0]}>
          <mesh>
            <capsuleGeometry args={[0.035, 0.25, 4, 8]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -0.15, 0.02]}>
            <boxGeometry args={[0.04, 0.02, 0.08]} />
            <meshStandardMaterial color="#8B7355" roughness={0.8} />
          </mesh>
        </group>

        {/* Right leg */}
        <group position={[0.05, 0, 0]}>
          <mesh>
            <capsuleGeometry args={[0.035, 0.25, 4, 8]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -0.15, 0.02]}>
            <boxGeometry args={[0.04, 0.02, 0.08]} />
            <meshStandardMaterial color="#8B7355" roughness={0.8} />
          </mesh>
        </group>
      </group>

      {/* Player glow indicator */}
      <pointLight position={[0, 0.5, 0]} intensity={0.4} color="#10B981" distance={1.5} />
    </group>
  );
};

// ============================================================
// OTHER PILGRIMS (Background NPCs)
// ============================================================
const NPCPilgrims = memo(() => {
  const groupRef = useRef();
  const pilgrims = Array.from({ length: 12 }, (_, i) => ({
    radius: 1.5 + Math.random() * 1.5,
    speed: 0.15 + Math.random() * 0.1,
    startAngle: (i / 12) * Math.PI * 2,
  }));

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      const p = pilgrims[i];
      const angle = p.startAngle - t * p.speed;
      child.position.x = Math.sin(angle) * p.radius;
      child.position.z = Math.cos(angle) * p.radius;
      child.position.y = Math.sin(t * 4 + i) * 0.01;
      child.rotation.y = angle + Math.PI / 2;
    });
  });

  return (
    <group ref={groupRef}>
      {pilgrims.map((_, i) => (
        <group key={i} scale={0.7}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.3, 8]} />
            <meshStandardMaterial color={WHITE_CLOTH} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.45, 0]}>
            <sphereGeometry args={[0.07, 10, 10]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        </group>
      ))}
    </group>
  );
});

// ============================================================
// FLOATING PARTICLES (Spiritual ambiance)
// ============================================================
const FloatingParticles = memo(() => {
  const particlesRef = useRef();
  const count = 50;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = Math.random() * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const t = state.clock.elapsedTime;
    const pos = particlesRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t + i) * 0.002;
      if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = 0;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#FDE68A"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
});

// ============================================================
// ATMOSPHERE (Enhanced)
// ============================================================
const Atmosphere = memo(() => (
  <>
    {/* Sky dome */}
    <mesh position={[0, 6, 0]}>
      <sphereGeometry args={[10, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshBasicMaterial color="#0f172a" side={THREE.BackSide} />
    </mesh>

    {/* Gradient overlay for depth */}
    <mesh position={[0, 3, 0]}>
      <sphereGeometry args={[9.5, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshBasicMaterial color="#1e3a5f" side={THREE.BackSide} transparent opacity={0.5} />
    </mesh>

    {/* Stars - more of them, varied sizes */}
    {Array.from({ length: 80 }).map((_, i) => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.5;
      const r = 8 + Math.random();
      const size = 0.01 + Math.random() * 0.03;
      return (
        <mesh
          key={i}
          position={[
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.cos(phi) + 1,
            r * Math.sin(phi) * Math.sin(theta)
          ]}
        >
          <sphereGeometry args={[size, 6, 6]} />
          <meshBasicMaterial color={i % 5 === 0 ? '#FEF3C7' : '#ffffff'} />
        </mesh>
      );
    })}

    {/* Moon with glow */}
    <group position={[4, 5, -4]}>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#FEF9C3" />
      </mesh>
      {/* Moon glow */}
      <mesh>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial color="#FEF3C7" transparent opacity={0.2} />
      </mesh>
      <pointLight intensity={0.3} color="#FEF3C7" distance={5} />
    </group>

    {/* Floating particles */}
    <FloatingParticles />
  </>
));

// ============================================================
// LIGHTING
// ============================================================
const Lighting = memo(() => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[3, 5, 2]} intensity={0.8} color="#FFF8E1" />
    <pointLight position={[0, 3, 0]} intensity={0.5} color="#FDE68A" distance={8} />
  </>
));

// ============================================================
// MAIN GAME COMPONENT
// ============================================================
const TawafGame = ({ language = 'en', onComplete, onBack }) => {
  const [angle, setAngle] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const lastCrossRef = useRef(0);
  const intervalRef = useRef(null);
  const keyPressedRef = useRef(false);

  const isRTL = language === 'ar' || language === 'ur';

  // Duas for each round of Tawaf
  const roundDuas = [
    {
      round: 1,
      name: { en: 'Beginning Tawaf', ur: 'طواف کا آغاز', ar: 'بداية الطواف' },
      arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
      transliteration: 'Bismillahi Wallahu Akbar',
      en: 'In the name of Allah, Allah is the Greatest',
      ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے',
    },
    {
      round: 2,
      name: { en: 'Round 2', ur: 'دوسرا چکر', ar: 'الشوط الثاني' },
      arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
      transliteration: 'SubhanAllah wal-hamdulillah wa la ilaha illAllah wallahu Akbar',
      en: 'Glory be to Allah, praise be to Allah, there is no god but Allah, Allah is Greatest',
      ur: 'اللہ پاک ہے، حمد اللہ کے لیے ہے، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے',
    },
    {
      round: 3,
      name: { en: 'Round 3', ur: 'تیسرا چکر', ar: 'الشوط الثالث' },
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
      transliteration: "Allahumma inni as'aluka al-'afwa wal-'afiyah fid-dunya wal-akhirah",
      en: 'O Allah, I ask You for forgiveness and well-being in this world and the Hereafter',
      ur: 'اے اللہ میں تجھ سے دنیا اور آخرت میں معافی اور عافیت مانگتا ہوں',
    },
    {
      round: 4,
      name: { en: 'Round 4', ur: 'چوتھا چکر', ar: 'الشوط الرابع' },
      arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      transliteration: 'Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina adhaban-nar',
      en: 'Our Lord, give us good in this world and the Hereafter, and protect us from the Fire',
      ur: 'اے ہمارے رب! ہمیں دنیا اور آخرت میں بھلائی دے اور آگ سے بچا',
    },
    {
      round: 5,
      name: { en: 'Round 5', ur: 'پانچواں چکر', ar: 'الشوط الخامس' },
      arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
      transliteration: 'Rabbighfir warham wa anta khairur-rahimin',
      en: 'My Lord, forgive and have mercy, You are the Best of those who show mercy',
      ur: 'اے میرے رب معاف فرما اور رحم کر، تو سب سے بہتر رحم کرنے والا ہے',
    },
    {
      round: 6,
      name: { en: 'Round 6', ur: 'چھٹا چکر', ar: 'الشوط السادس' },
      arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteration: "Allahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'anni",
      en: 'O Allah, You are Forgiving and love forgiveness, so forgive me',
      ur: 'اے اللہ تو معاف کرنے والا ہے اور معافی کو پسند کرتا ہے، پس مجھے معاف فرما',
    },
    {
      round: 7,
      name: { en: 'Final Round', ur: 'آخری چکر', ar: 'الشوط الأخير' },
      arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      transliteration: 'La ilaha illAllahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd wa huwa ala kulli shayin qadir',
      en: 'There is no god but Allah alone with no partner. His is the dominion and praise, and He is able to do all things',
      ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، بادشاہی اسی کی ہے اور حمد اسی کے لیے ہے',
    },
  ];

  // Text content
  const text = {
    title: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' },
    instruction: {
      en: 'Tap & hold to walk around the Kaaba',
      ur: 'کعبہ کے گرد چلنے کے لیے دبائیں اور پکڑیں',
      ar: 'اضغط مع الاستمرار للطواف حول الكعبة',
    },
    rounds: { en: 'Rounds', ur: 'چکر', ar: 'أشواط' },
    complete: {
      en: 'Tawaf Complete! 🎉',
      ur: 'طواف مکمل! 🎉',
      ar: 'اكتمل الطواف! 🎉',
    },
    skip: { en: 'Skip', ur: 'چھوڑیں', ar: 'تخطي' },
    next: { en: 'Next Step', ur: 'اگلا مرحلہ', ar: 'الخطوة التالية' },
  };

  // Get current round dua
  const currentRoundDua = roundDuas[Math.min(rounds, 6)];

  // Initialize audio on first interaction
  useEffect(() => {
    initAudio();
    startAmbientSound();
    return () => {
      stopAllSounds();
    };
  }, []);

  // Handle walking sound
  useEffect(() => {
    if (isMoving && !gameComplete) {
      startWalkingSound(false);
    } else {
      stopWalkingSound();
    }
  }, [isMoving, gameComplete]);

  // Move player
  const movePlayer = useCallback(() => {
    setAngle((prev) => {
      const newAngle = prev - 0.03; // Counter-clockwise

      // Check if crossed starting line (angle passes through 0)
      const prevNorm = ((lastCrossRef.current % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const newNorm = ((newAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

      // Detect crossing counter-clockwise (from small positive to large ~6.28)
      if (prevNorm < 1 && newNorm > 5) {
        setRounds((r) => {
          const newRounds = r + 1;
          playRoundComplete(); // Play sound on round complete
          if (newRounds >= 7) {
            setGameComplete(true);
            stopWalkingSound();
            playGameComplete();
          } else if (newRounds === 3 || newRounds === 5) {
            playDuaReveal();
            setShowDua(true);
            setTimeout(() => setShowDua(false), 4000);
          }
          return newRounds;
        });
      }

      lastCrossRef.current = newAngle;
      return newAngle;
    });
  }, []);

  // Handle touch/click
  const handlePointerDown = useCallback(() => {
    if (gameComplete) return;
    setIsMoving(true);
    intervalRef.current = setInterval(movePlayer, 50);
  }, [movePlayer, gameComplete]);

  const handlePointerUp = useCallback(() => {
    setIsMoving(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameComplete) return;
      // Space, Arrow keys, or W to walk
      if (['Space', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        if (!keyPressedRef.current) {
          keyPressedRef.current = true;
          setIsMoving(true);
          intervalRef.current = setInterval(movePlayer, 50);
        }
      }
      // Escape to go back
      if (e.code === 'Escape') {
        onBack?.();
      }
    };

    const handleKeyUp = (e) => {
      if (['Space', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
        keyPressedRef.current = false;
        setIsMoving(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [gameComplete, movePlayer, onBack]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #1a365d 0%, #2d3748 40%, #4a5568 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 z-20">
        <button
          onClick={onBack}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white"
        >
          ←
        </button>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🕋</span>
          <h1
            className="text-xl font-bold text-white"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {text.title[language]}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {/* Skip button */}
          {!gameComplete && (
            <button
              onClick={() => {
                stopAllSounds();
                playGameComplete();
                setGameComplete(true);
              }}
              className="px-3 py-1 rounded-full bg-white/20 text-white/80 text-sm hover:bg-white/30 transition-all"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.skip[language]} ⏭️
            </button>
          )}

          {/* Round counter */}
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/90 rounded-full">
            <span className="text-white font-bold">{Math.min(rounds, 7)}/7</span>
          </div>
        </div>
      </div>

      {/* Current Round Dua Display */}
      {!gameComplete && (
        <div className="px-4 py-2 bg-emerald-900/80 backdrop-blur-sm">
          <p className="text-emerald-300 text-xs text-center mb-1">
            {currentRoundDua.name[language]} - {language === 'ar' ? 'الدعاء' : language === 'ur' ? 'دعا' : 'Dua'}:
          </p>
          <p
            className="text-white text-sm text-center leading-relaxed"
            style={{ fontFamily: "'Scheherazade New', serif" }}
            dir="rtl"
          >
            {currentRoundDua.arabic}
          </p>
          <p
            className="text-white/70 text-xs text-center mt-1"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {currentRoundDua[language] || currentRoundDua.en}
          </p>
        </div>
      )}

      {/* 3D Canvas */}
      <div
        className="flex-1 relative"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        <Canvas
          camera={{ position: [0, 4, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Lighting />
          <Atmosphere />
          <Mataf />
          <Kaaba />
          <PlayerAvatar angle={angle} isMoving={isMoving} />
          <NPCPilgrims />
        </Canvas>

        {/* Instruction overlay */}
        {!gameComplete && !isMoving && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
            <div className="px-6 py-3 bg-black/60 backdrop-blur-sm rounded-full">
              <p
                className="text-white text-center"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                ⌨️ {language === 'ar' ? 'اضغط مفتاح المسافة أو الأسهم للمشي' :
                    language === 'ur' ? 'چلنے کے لیے Space یا Arrow keys دبائیں' :
                    'Hold SPACE or Arrow Keys to walk'}
              </p>
            </div>
          </div>
        )}

        {/* Dua popup */}
        {showDua && (
          <div className="absolute inset-x-4 top-1/4 flex justify-center pointer-events-none">
            <div className="max-w-md p-4 bg-emerald-900/90 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
              <p className="text-emerald-300 text-sm mb-2">🤲 Dua</p>
              <p
                className="text-white text-xl text-center mb-2 leading-loose"
                style={{ fontFamily: "'Scheherazade New', serif" }}
                dir="rtl"
              >
                {text.dua.arabic}
              </p>
              <p
                className="text-white/80 text-sm text-center"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {text.dua[language] || text.dua.en}
              </p>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
          <div className="flex gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  i < rounds
                    ? 'bg-emerald-500 text-white scale-100'
                    : i === rounds
                    ? 'bg-amber-500 text-white scale-110 animate-pulse'
                    : 'bg-white/20 text-white/50'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Completion modal */}
      {gameComplete && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-30">
          <div className="bg-white rounded-3xl p-8 mx-4 max-w-sm text-center animate-bounce-in">
            <div className="text-6xl mb-4">🎉</div>
            <h2
              className="text-2xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.complete[language]}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'en' && 'You completed 7 rounds around the Holy Kaaba!'}
              {language === 'ur' && 'آپ نے کعبہ مقدس کے 7 چکر مکمل کر لیے!'}
              {language === 'ar' && 'لقد أكملت 7 أشواط حول الكعبة المشرفة!'}
            </p>
            <button
              onClick={onComplete}
              className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {text.next[language]} →
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TawafGame;
