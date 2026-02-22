/**
 * DuaScenes.jsx
 * Animated SVG scenes for dua learning. Each scene has an Emirati-style
 * child avatar (white kandura + ghutra) performing the dua's action.
 */

import React from 'react';

// Sparkle overlay
const SceneSparkles = ({ color = '#FDE68A', count = 8 }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="absolute rounded-full" style={{
        width: 4 + Math.random() * 4, height: 4 + Math.random() * 4,
        background: color, left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`,
        opacity: 0, animation: `duaSparkle ${1.5 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite`,
      }} />
    ))}
  </div>
);

// ============================================================
// EMIRATI CHILD AVATAR
// ============================================================

// Head with white ghutra (headscarf) + black agal
const EmiratiHead = ({ x, y, s = 1, eyes = 'open', smile = true, look = 0 }) => (
  <g transform={`translate(${x},${y}) scale(${s})`}>
    {/* Ghutra (white headscarf) - drapes down sides */}
    <path d="M-18 -8 Q-20 -16 -14 -20 Q0 -26 14 -20 Q20 -16 18 -8 L20 14 Q18 18 14 16 L-14 16 Q-18 18 -20 14 Z"
      fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
    {/* Face */}
    <circle cx="0" cy="0" r="14" fill="#FBBF24" />
    {/* Agal (black band) */}
    <ellipse cx="0" cy="-14" rx="15" ry="3" fill="none" stroke="#1E293B" strokeWidth="2.5" />
    {/* Eyes */}
    {eyes === 'closed' ? (
      <>
        <path d={`M${-5+look} -2 Q${-3+look} -4.5 ${-1+look} -2`} fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
        <path d={`M${3+look} -2 Q${5+look} -4.5 ${7+look} -2`} fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ) : eyes === 'sick' ? (
      <>
        <path d={`M${-6+look} -1 Q${-4+look} -3 ${-2+look} -1`} fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
        <path d={`M${2+look} -1 Q${4+look} -3 ${6+look} -1`} fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx={-4+look} cy="-2" r="2.5" fill="#374151" />
        <circle cx={6+look} cy="-2" r="2.5" fill="#374151" />
        <circle cx={-3.2+look} cy="-2.8" r="0.8" fill="white" />
        <circle cx={6.8+look} cy="-2.8" r="0.8" fill="white" />
      </>
    )}
    {/* Cheeks */}
    <circle cx="-10" cy="4" r="3" fill="#F9A8D4" opacity="0.4" />
    <circle cx="10" cy="4" r="3" fill="#F9A8D4" opacity="0.4" />
    {/* Mouth */}
    {smile ? (
      <path d="M-4 6 Q0 11 4 6" fill="none" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" />
    ) : (
      <ellipse cx="0" cy="7" rx="2.5" ry="1.8" fill="#374151" opacity="0.5" />
    )}
  </g>
);

// Body: white kandura
const EmiratiBody = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${s})`}>
    <path d="M-12 0 Q-14 28 -10 50 L10 50 Q14 28 12 0 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
    {/* Fold line */}
    <line x1="0" y1="8" x2="0" y2="45" stroke="#CBD5E1" strokeWidth="0.5" opacity="0.5" />
  </g>
);

// Hand (small circle)
const Hand = ({ cx, cy }) => <circle cx={cx} cy={cy} r="4" fill="#FBBF24" />;

// ============================================================
// 20 SCENES
// ============================================================

const KitchenScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* === LAYER 1: Plate & food ON table (drawn first so table covers lower parts) === */}
    {/* Plate on right side of table */}
    <ellipse cx="265" cy="130" rx="40" ry="9" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
    {/* Food on plate */}
    <circle cx="252" cy="123" r="7" fill="#EF4444"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.4s" fill="freeze" /></circle>
    <circle cx="268" cy="121" r="5.5" fill="#F59E0B"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.5s" fill="freeze" /></circle>
    <circle cx="280" cy="124" r="4.5" fill="#10B981"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.6s" fill="freeze" /></circle>
    {/* Glass */}
    <rect x="318" y="114" width="14" height="20" rx="2" fill="#93C5FD" opacity="0.6" />
    {/* Steam */}
    {isActive && <>
      <path d="M260 108 Q263 95 260 82" fill="none" stroke="white" strokeWidth="1.5" opacity="0.35">
        <animate attributeName="d" values="M260 108 Q263 95 260 82;M260 108 Q257 93 260 78;M260 108 Q263 95 260 82" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M275 106 Q278 94 275 80" fill="none" stroke="white" strokeWidth="1.2" opacity="0.25">
        <animate attributeName="d" values="M275 106 Q278 94 275 80;M275 106 Q272 92 275 76;M275 106 Q278 94 275 80" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
      </path>
    </>}

    {/* === LAYER 2: Table (covers avatar's lower body) === */}
    <rect x="60" y="136" width="290" height="10" rx="4" fill="#D4A574" />
    <rect x="80" y="146" width="8" height="38" fill="#C4956A" />
    <rect x="322" y="146" width="8" height="38" fill="#C4956A" />

    {/* === LAYER 3: Avatar on LEFT side, sitting behind table === */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.2s" fill="freeze" />
      {/* Body (lower part hidden behind table) */}
      <path d="M118 106 Q116 122 119 150 L143 150 Q146 122 144 106 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
      <line x1="131" y1="112" x2="131" y2="145" stroke="#CBD5E1" strokeWidth="0.5" opacity="0.5" />

      {/* Head - looking right toward food */}
      <EmiratiHead x={131} y={86} s={1} smile={true} look={3} />

      {/* Left arm resting on table */}
      <path d="M118 112 L108 128 L112 134" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <Hand cx={112} cy={134} />

      {/* Right arm - reaches RIGHT to plate at x=252, picks food, brings to mouth at x=138 y=93 */}
      {isActive ? (
        <g>
          {/* Arm path: from shoulder → plate → mouth */}
          <path d="M144 112 L180 128 L250 126" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" fill="none">
            <animate attributeName="d"
              values="M144 112 L180 128 L250 126;M144 112 L165 110 L140 93;M144 112 L165 110 L140 93;M144 112 L180 128 L250 126"
              dur="3s" repeatCount="indefinite" />
          </path>
          {/* Hand: plate(250,126) → mouth(140,93) */}
          <Hand cx={250} cy={126}>
            <animate attributeName="cx" values="250;140;140;250" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="126;93;93;126" dur="3s" repeatCount="indefinite" />
          </Hand>
          {/* Food piece travels with hand */}
          <circle r="4" fill="#EF4444" opacity="0">
            <animate attributeName="cx" values="250;140;140;250" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="126;93;93;126" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.9;0;0" dur="3s" repeatCount="indefinite" />
          </circle>
          {/* Mouth opens when food arrives */}
          <ellipse cx="131" cy="97" rx="3" ry="0.5" fill="#374151" opacity="0.5">
            <animate attributeName="ry" values="0.5;2.5;2.5;0.5" dur="3s" repeatCount="indefinite" />
          </ellipse>
        </g>
      ) : (
        <g>
          <path d="M144 112 L160 126" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <Hand cx={160} cy={126} />
        </g>
      )}
    </g>

    {/* Bismillah floating above */}
    {isActive && <text x="200" y="48" textAnchor="middle" fill="white" fontSize="14" fontFamily="serif" opacity="0">
      <animate attributeName="opacity" from="0" to="0.8" dur="1s" begin="1s" fill="freeze" />
      <animate attributeName="y" from="56" to="38" dur="2s" begin="1s" fill="freeze" />
      ﷽
    </text>}
  </svg>
);

const BedroomScene = ({ isActive, sceneVariant }) => {
  const isNight = sceneVariant === 'sleep';
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {/* Window */}
      <rect x="285" y="20" width="55" height="65" rx="4" fill={isNight ? '#1E3A5F' : '#87CEEB'} stroke="#D4A574" strokeWidth="3" />
      <line x1="312" y1="20" x2="312" y2="85" stroke="#D4A574" strokeWidth="2" />
      <line x1="285" y1="52" x2="340" y2="52" stroke="#D4A574" strokeWidth="2" />
      {isNight ? (
        <g><circle cx="305" cy="40" r="9" fill="#FDE68A" /><circle cx="310" cy="37" r="7" fill="#1E3A5F" /></g>
      ) : (
        <circle cx="305" cy="40" r="10" fill="#FDE68A"><animate attributeName="r" values="10;12;10" dur="3s" repeatCount="indefinite" /></circle>
      )}
      {isNight && isActive && <>
        <circle cx="295" cy="30" r="1.5" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" /></circle>
        <circle cx="328" cy="62" r="1" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" /></circle>
      </>}
      {/* Bed frame */}
      <rect x="50" y="120" width="220" height="65" rx="6" fill="#8B5CF6" opacity="0.8" />
      <rect x="45" y="95" width="12" height="90" rx="4" fill="#7C3AED" />
      <rect x="260" y="110" width="12" height="75" rx="4" fill="#7C3AED" />
      {/* Pillow */}
      <ellipse cx="100" cy="128" rx="32" ry="12" fill="white" opacity="0.9" />

      {isNight ? (
        /* SLEEPING: child lying on side with full body under blanket */
        <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
          {/* Head lying on pillow - sideways */}
          <circle cx="105" cy="122" r="14" fill="#FBBF24" />
          {/* Ghutra flat on pillow */}
          <path d="M91 115 Q105 107 119 115 L121 126 Q105 131 89 126 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <ellipse cx="105" cy="112" rx="13" ry="2.5" fill="none" stroke="#1E293B" strokeWidth="2" />
          {/* Closed eyes - peaceful */}
          <path d="M98 121 Q100 119 102 121" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M108 121 Q110 119 112 121" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="94" cy="125" r="2.5" fill="#F9A8D4" opacity="0.4" />
          <circle cx="116" cy="125" r="2.5" fill="#F9A8D4" opacity="0.4" />
          <path d="M101 129 Q105 132 109 129" fill="none" stroke="#374151" strokeWidth="1" strokeLinecap="round" />

          {/* Body shape under blanket - visible bump */}
          <path d="M120 120 Q130 115 160 118 Q200 115 230 120 L230 148 Q200 142 160 144 Q130 142 120 148 Z" fill="#F8FAFC" opacity="0.3" />

          {/* Blanket covering body with breathing animation */}
          <path d="M115 130 Q160 118 240 132 L240 175 Q160 170 60 175 L60 145 Q80 138 115 130 Z" fill="#A78BFA" opacity="0.75">
            {isActive && <animate attributeName="d"
              values="M115 130 Q160 118 240 132 L240 175 Q160 170 60 175 L60 145 Q80 138 115 130 Z;M115 130 Q160 122 240 134 L240 175 Q160 170 60 175 L60 145 Q80 138 115 130 Z;M115 130 Q160 118 240 132 L240 175 Q160 170 60 175 L60 145 Q80 138 115 130 Z"
              dur="3s" repeatCount="indefinite" />}
          </path>
          {/* Blanket fold edge */}
          <path d="M115 132 Q140 126 170 130" fill="none" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.5">
            {isActive && <animate attributeName="d" values="M115 132 Q140 126 170 130;M115 132 Q140 128 170 132;M115 132 Q140 126 170 130" dur="3s" repeatCount="indefinite" />}
          </path>

          {/* Feet bump at far end of blanket */}
          <ellipse cx="235" cy="140" rx="10" ry="14" fill="#A78BFA" opacity="0.6" />

          {/* Hand peeking out of blanket near face */}
          <Hand cx={120} cy={138} />

          {/* ZZZ floating */}
          {isActive && <>
            <text x="130" y="105" fill="white" fontSize="11" fontWeight="bold" opacity="0">
              <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" />
              <animate attributeName="y" from="108" to="82" dur="3s" repeatCount="indefinite" />z
            </text>
            <text x="148" y="92" fill="white" fontSize="15" fontWeight="bold" opacity="0">
              <animate attributeName="opacity" values="0;0.6;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="y" from="96" to="68" dur="3s" begin="0.5s" repeatCount="indefinite" />Z
            </text>
            <text x="165" y="78" fill="white" fontSize="20" fontWeight="bold" opacity="0">
              <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="y" from="84" to="52" dur="3s" begin="1s" repeatCount="indefinite" />Z
            </text>
          </>}
        </g>
      ) : (
        /* WAKING: sitting up in bed, stretching arms */
        <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
          <EmiratiHead x={130} y={92} s={1} smile={true} />
          <EmiratiBody x={130} y={110} s={0.6} />
          {/* Blanket around waist */}
          <rect x="60" y="143" width="200" height="35" rx="4" fill="#A78BFA" opacity="0.6" />
          <path d="M100 140 Q160 132 230 142" fill="#C4B5FD" opacity="0.5" />
          {/* Arms stretching up and down */}
          {isActive ? <>
            <path d="M119 116 L104 100" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round">
              <animate attributeName="d" values="M119 116 L104 100;M119 116 L100 85;M119 116 L104 100" dur="3s" repeatCount="indefinite" />
            </path>
            <Hand cx={104} cy={100}><animate attributeName="cy" values="100;85;100" dur="3s" repeatCount="indefinite" /><animate attributeName="cx" values="104;100;104" dur="3s" repeatCount="indefinite" /></Hand>
            <path d="M141 116 L156 100" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round">
              <animate attributeName="d" values="M141 116 L156 100;M141 116 L160 85;M141 116 L156 100" dur="3s" repeatCount="indefinite" />
            </path>
            <Hand cx={156} cy={100}><animate attributeName="cy" values="100;85;100" dur="3s" repeatCount="indefinite" /><animate attributeName="cx" values="156;160;156" dur="3s" repeatCount="indefinite" /></Hand>
          </> : <>
            <path d="M119 116 L104 100" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={104} cy={100} />
            <path d="M141 116 L156 100" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={156} cy={100} />
          </>}
          {/* Pillow behind */}
          <ellipse cx="100" cy="128" rx="28" ry="10" fill="white" opacity="0.5" />
        </g>
      )}
    </svg>
  );
};

const BathroomScene = ({ isActive, sceneVariant }) => {
  const isEnter = sceneVariant !== 'leave';
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      <defs>
        {/* Clip path so child disappears behind door frame when entering */}
        <clipPath id="doorClipEnter">
          <rect x="0" y="0" width="178" height="200" />
        </clipPath>
        <clipPath id="doorClipLeave">
          <rect x="0" y="0" width="178" height="200" />
        </clipPath>
      </defs>

      {/* Bathroom interior (visible through door) */}
      <rect x="178" y="33" width="94" height="148" fill="#E0F2FE" />
      {/* Tiles on bathroom wall */}
      <rect x="185" y="40" width="18" height="18" rx="1" fill="white" opacity="0.5" stroke="#BFDBFE" strokeWidth="0.5" />
      <rect x="207" y="40" width="18" height="18" rx="1" fill="white" opacity="0.5" stroke="#BFDBFE" strokeWidth="0.5" />
      <rect x="229" y="40" width="18" height="18" rx="1" fill="white" opacity="0.5" stroke="#BFDBFE" strokeWidth="0.5" />
      <rect x="185" y="62" width="18" height="18" rx="1" fill="white" opacity="0.5" stroke="#BFDBFE" strokeWidth="0.5" />
      <rect x="207" y="62" width="18" height="18" rx="1" fill="white" opacity="0.5" stroke="#BFDBFE" strokeWidth="0.5" />
      <rect x="229" y="62" width="18" height="18" rx="1" fill="white" opacity="0.5" stroke="#BFDBFE" strokeWidth="0.5" />

      {/* Door frame */}
      <rect x="170" y="25" width="110" height="160" rx="6" fill="#D4A574" />
      {/* Door opening (interior) */}
      <rect x="178" y="33" width="94" height="148" rx="4" fill="#E0F2FE" />

      {/* Door panel - swings open/close */}
      <rect x="178" y="33" width="94" height="148" rx="4" fill="#FEFCE8">
        {isActive && isEnter && <animate attributeName="width" values="94;40;40" dur="1s" fill="freeze" />}
        {isActive && !isEnter && <animate attributeName="width" values="40;40;94" dur="1.5s" begin="1.5s" fill="freeze" />}
      </rect>
      {/* Door handle */}
      <circle cx="260" cy="115" r="4" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5">
        {isActive && isEnter && <animate attributeName="cx" values="260;218;218" dur="1s" fill="freeze" />}
        {isActive && !isEnter && <animate attributeName="cx" values="218;218;260" dur="1.5s" begin="1.5s" fill="freeze" />}
      </circle>

      {/* Floor mat */}
      <rect x="135" y="175" width="80" height="8" rx="3" fill="#60A5FA" opacity="0.2" />

      {/* ENTERING: child walks from left to center of doorway, then into bathroom */}
      {isEnter ? (
        <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.3s" fill="freeze" />
          {isActive ? (
            <g>
              {/* Walk from left toward door, then through doorway */}
              <animateTransform attributeName="transform" type="translate" values="0 0;60 0;110 0;110 0" dur="3.5s" fill="freeze" />
              <g>
                {/* Bobbing walk */}
                <animate attributeName="transform" values="0 0;0 -3;0 0" dur="0.5s" repeatCount="indefinite" type="translate" attributeType="XML" />
                <EmiratiHead x={95} y={85} s={0.95} smile={true} look={3} />
                <EmiratiBody x={95} y={103} s={0.62} />
                {/* Arms swinging while walking */}
                <path d="M87 108 L80 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="d" values="M87 108 L80 122;M87 108 L82 118;M87 108 L80 122" dur="0.5s" repeatCount="indefinite" />
                </path>
                <Hand cx={80} cy={122}><animate attributeName="cy" values="122;118;122" dur="0.5s" repeatCount="indefinite" /></Hand>
                <path d="M103 108 L110 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="d" values="M103 108 L110 122;M103 108 L108 118;M103 108 L110 122" dur="0.5s" begin="0.25s" repeatCount="indefinite" />
                </path>
                <Hand cx={110} cy={122}><animate attributeName="cy" values="122;118;122" dur="0.5s" begin="0.25s" repeatCount="indefinite" /></Hand>
              </g>
              {/* Walking legs */}
              <line x1="91" y1="140" x2="85" y2="160" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="x2" values="85;96;85" dur="0.5s" repeatCount="indefinite" />
              </line>
              <line x1="99" y1="140" x2="105" y2="160" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="x2" values="105;94;105" dur="0.5s" repeatCount="indefinite" />
              </line>
            </g>
          ) : (
            <g>
              <EmiratiHead x={95} y={85} s={0.95} smile={true} look={3} />
              <EmiratiBody x={95} y={103} s={0.62} />
              <path d="M87 108 L80 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={80} cy={122} />
              <path d="M103 108 L110 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={110} cy={122} />
            </g>
          )}
        </g>
      ) : (
        /* LEAVING: child walks out from doorway toward left */
        <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.3s" fill="freeze" />
          {isActive ? (
            <g>
              <animateTransform attributeName="transform" type="translate" values="110 0;60 0;0 0;0 0" dur="3s" begin="0.3s" fill="freeze" />
              <g>
                <animate attributeName="transform" values="0 0;0 -3;0 0" dur="0.5s" repeatCount="indefinite" type="translate" attributeType="XML" />
                <EmiratiHead x={95} y={85} s={0.95} smile={true} look={-3} />
                <EmiratiBody x={95} y={103} s={0.62} />
                <path d="M87 108 L80 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="d" values="M87 108 L80 122;M87 108 L82 118;M87 108 L80 122" dur="0.5s" repeatCount="indefinite" />
                </path>
                <Hand cx={80} cy={122}><animate attributeName="cy" values="122;118;122" dur="0.5s" repeatCount="indefinite" /></Hand>
                <path d="M103 108 L110 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="d" values="M103 108 L110 122;M103 108 L108 118;M103 108 L110 122" dur="0.5s" begin="0.25s" repeatCount="indefinite" />
                </path>
                <Hand cx={110} cy={122}><animate attributeName="cy" values="122;118;122" dur="0.5s" begin="0.25s" repeatCount="indefinite" /></Hand>
              </g>
              <line x1="91" y1="140" x2="85" y2="160" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="x2" values="85;96;85" dur="0.5s" repeatCount="indefinite" />
              </line>
              <line x1="99" y1="140" x2="105" y2="160" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="x2" values="105;94;105" dur="0.5s" repeatCount="indefinite" />
              </line>
            </g>
          ) : (
            <g>
              <EmiratiHead x={95} y={85} s={0.95} smile={true} look={-3} />
              <EmiratiBody x={95} y={103} s={0.62} />
              <path d="M87 108 L80 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={80} cy={122} />
              <path d="M103 108 L110 122" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={110} cy={122} />
            </g>
          )}
        </g>
      )}

      {/* Dua thought bubble */}
      {isActive && <g opacity="0"><animate attributeName="opacity" from="0" to="0.8" dur="0.5s" begin="1s" fill="freeze" />
        <circle cx={isEnter ? 68 : 68} cy="58" r="4" fill="white" opacity="0.3" />
        <circle cx={isEnter ? 58 : 58} cy="48" r="6" fill="white" opacity="0.3" />
        <ellipse cx={isEnter ? 42 : 42} cy="32" rx="28" ry="16" fill="white" opacity="0.15" />
        <text x={isEnter ? 42 : 42} y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">🤲 Dua</text>
      </g>}
    </svg>
  );
};

const WuduScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Faucet */}
    <rect x="192" y="28" width="16" height="38" rx="4" fill="#9CA3AF" />
    <rect x="185" y="22" width="30" height="10" rx="3" fill="#6B7280" />
    {/* Basin */}
    <path d="M140 108 Q140 138 200 143 Q260 138 260 108 Z" fill="#3B82F6" opacity="0.4" />
    <path d="M140 108 Q170 95 200 108 Q230 95 260 108" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
    {/* Water stream */}
    {isActive && <path d="M200 66 Q200 87 200 104" fill="none" stroke="#60A5FA" strokeWidth="3" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
    </path>}
    {/* Child making wudu - hands move in/out of water */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.2s" fill="freeze" />
      <EmiratiHead x={200} y={68} s={0.85} smile={true} eyes="closed" />
      <path d="M190 82 Q189 100 192 116 L208 116 Q211 100 210 82 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
      {/* Arms washing - hands move up/down in water */}
      {isActive ? <>
        <path d="M190 90 L176 102 L184 106" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none">
          <animate attributeName="d" values="M190 90 L176 102 L184 106;M190 90 L178 98 L186 100;M190 90 L176 102 L184 106" dur="2s" repeatCount="indefinite" />
        </path>
        <Hand cx={184} cy={106}><animate attributeName="cy" values="106;100;106" dur="2s" repeatCount="indefinite" /></Hand>
        <path d="M210 90 L224 102 L216 106" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none">
          <animate attributeName="d" values="M210 90 L224 102 L216 106;M210 90 L222 98 L214 100;M210 90 L224 102 L216 106" dur="2s" repeatCount="indefinite" />
        </path>
        <Hand cx={216} cy={106}><animate attributeName="cy" values="106;100;106" dur="2s" repeatCount="indefinite" /></Hand>
      </> : <>
        <path d="M190 90 L176 102 L184 106" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" /><Hand cx={184} cy={106} />
        <path d="M210 90 L224 102 L216 106" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" /><Hand cx={216} cy={106} />
      </>}
    </g>
    {/* Water splashes */}
    {isActive && <>
      <circle cx="178" cy="103" r="2" fill="#93C5FD" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" /><animate attributeName="r" values="1;4;1" dur="1.5s" repeatCount="indefinite" /></circle>
      <circle cx="222" cy="101" r="2" fill="#93C5FD" opacity="0"><animate attributeName="opacity" values="0;0.7;0" dur="1.8s" begin="0.5s" repeatCount="indefinite" /><animate attributeName="r" values="1;3;1" dur="1.8s" begin="0.5s" repeatCount="indefinite" /></circle>
    </>}
    {/* Purity sparkles */}
    {isActive && <>
      <circle cx="160" cy="88" r="3" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="240" cy="86" r="2.5" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.7s" repeatCount="indefinite" /></circle>
    </>}
  </svg>
);

const MosqueScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Dome */}
    <path d="M135 160 L135 80 Q200 12 265 80 L265 160 Z" fill="#10B981" opacity="0.9" />
    <path d="M165 160 L165 100 Q200 62 235 100 L235 160 Z" fill="white" opacity="0.12" />
    <path d="M185 160 L185 118 Q200 102 215 118 L215 160 Z" fill="#065F46" opacity="0.8" />
    {/* Crescent */}
    <circle cx="200" cy="28" r="7" fill="#FDE68A"><animate attributeName="r" values="7;8;7" dur="3s" repeatCount="indefinite" /></circle>
    <circle cx="204" cy="25" r="5.5" fill="#10B981" />
    {/* Minarets */}
    <rect x="95" y="72" width="10" height="88" fill="#10B981" opacity="0.85" />
    <circle cx="100" cy="67" r="6" fill="#FDE68A" /><circle cx="103" cy="65" r="4" fill="#10B981" />
    <rect x="295" y="72" width="10" height="88" fill="#10B981" opacity="0.85" />
    <circle cx="300" cy="67" r="6" fill="#FDE68A" /><circle cx="303" cy="65" r="4" fill="#10B981" />
    {/* Ground */}
    <rect x="0" y="160" width="400" height="40" fill="#D4A574" opacity="0.3" />
    {/* Child walking toward mosque - bobbing walk */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g>
          <animateTransform attributeName="transform" type="translate" values="-30 0;0 0;0 0" dur="2s" fill="freeze" />
          <g><animate attributeName="transform" values="0 0;0 -2;0 0" dur="0.6s" repeatCount="indefinite" type="translate" attributeType="XML" />
            <EmiratiHead x={148} y={125} s={0.8} smile={true} look={3} />
            <EmiratiBody x={148} y={140} s={0.5} />
            <path d="M142 147 L136 157" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={136} cy={157} />
            <path d="M154 147 L160 157" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={160} cy={157} />
          </g>
          {/* Walking legs */}
          <line x1="144" y1="166" x2="138" y2="178" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="x2" values="138;148;138" dur="0.6s" repeatCount="indefinite" />
          </line>
          <line x1="152" y1="166" x2="158" y2="178" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="x2" values="158;148;158" dur="0.6s" repeatCount="indefinite" />
          </line>
        </g>
      ) : (
        <g>
          <EmiratiHead x={148} y={125} s={0.8} smile={true} look={3} />
          <EmiratiBody x={148} y={140} s={0.5} />
          <path d="M142 147 L136 157" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={136} cy={157} />
          <path d="M154 147 L160 157" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={160} cy={157} />
        </g>
      )}
    </g>
    {/* Door glow */}
    {isActive && <ellipse cx="200" cy="156" rx="18" ry="5" fill="#FDE68A" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" /></ellipse>}
  </svg>
);

const HomeScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="115" y="78" width="170" height="112" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
    <path d="M95 82 L200 18 L305 82 Z" fill="#EF4444" opacity="0.9" />
    {/* Door opening */}
    <rect x="183" y="112" width="36" height="78" rx="3" fill="#92400E">
      {isActive && <animate attributeName="width" values="36;20;20" dur="1.5s" fill="freeze" />}
    </rect>
    <path d="M183 112 Q201 100 219 112" fill="#7C2D12" />
    <circle cx="211" cy="150" r="2.5" fill="#FDE68A" />
    {/* Windows */}
    <rect x="125" y="96" width="32" height="28" rx="2" fill="#93C5FD" stroke="#F59E0B" strokeWidth="1.5" />
    <rect x="243" y="96" width="32" height="28" rx="2" fill="#93C5FD" stroke="#F59E0B" strokeWidth="1.5" />
    <rect x="178" y="186" width="44" height="5" rx="2" fill="#10B981" opacity="0.6" />
    {/* Child stepping into door */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.4s" fill="freeze" />
      {isActive ? (
        <g><animateTransform attributeName="transform" type="translate" values="0 0;22 0;22 0" dur="2s" fill="freeze" />
          <EmiratiHead x={153} y={135} s={0.7} smile={true} look={3} />
          <EmiratiBody x={153} y={149} s={0.45} />
          <path d="M147 154 L141 165" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={141} cy={165} />
          <path d="M159 154 L165 165" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={165} cy={165} />
        </g>
      ) : (
        <g>
          <EmiratiHead x={155} y={135} s={0.7} smile={true} look={3} />
          <EmiratiBody x={155} y={149} s={0.45} />
          <path d="M149 154 L143 165" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={143} cy={165} />
          <path d="M161 154 L167 165" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={167} cy={165} />
        </g>
      )}
    </g>
    {isActive && <ellipse cx="200" cy="180" rx="22" ry="6" fill="#FDE68A" opacity="0.3"><animate attributeName="opacity" values="0.2;0.4;0.2" dur="2.5s" repeatCount="indefinite" /></ellipse>}
  </svg>
);

const MirrorScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Mirror */}
    <ellipse cx="260" cy="88" rx="50" ry="60" fill="#D4A574" />
    <ellipse cx="260" cy="88" rx="44" ry="54" fill="#E0F2FE" />
    <rect x="255" y="148" width="10" height="16" fill="#D4A574" />
    <rect x="244" y="162" width="32" height="5" rx="2" fill="#C4956A" />
    {/* Shimmer */}
    {isActive && <ellipse cx="260" cy="88" rx="42" ry="52" fill="white" opacity="0.08"><animate attributeName="opacity" values="0.05;0.18;0.05" dur="3s" repeatCount="indefinite" /></ellipse>}
    {/* Reflection (faint) */}
    <circle cx="260" cy="72" r="10" fill="#FBBF24" opacity="0.25" />
    <path d="M252 82 Q252 98 255 108 L265 108 Q268 98 268 82 Z" fill="#F8FAFC" opacity="0.15" />
    {/* Child looking, head tilts side to side */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g>
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-5 140 90;5 140 90;-5 140 90" dur="3s" repeatCount="indefinite" />
            <EmiratiHead x={140} y={88} s={0.95} smile={true} look={4} />
          </g>
          <EmiratiBody x={140} y={106} s={0.62} />
          <path d="M133 112 L125 130" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={125} cy={130} />
          <path d="M147 112 L155 130" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={155} cy={130} />
        </g>
      ) : (
        <g>
          <EmiratiHead x={140} y={88} s={0.95} smile={true} look={4} />
          <EmiratiBody x={140} y={106} s={0.62} />
          <path d="M133 112 L125 130" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={125} cy={130} />
          <path d="M147 112 L155 130" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={155} cy={130} />
        </g>
      )}
    </g>
    {isActive && <>
      <circle cx="282" cy="58" r="3" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="240" cy="118" r="2.5" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;0.7;0" dur="2.5s" begin="0.8s" repeatCount="indefinite" /></circle>
    </>}
  </svg>
);

const ClothingScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Hanger */}
    <path d="M255 22 L255 32 L215 60 L295 60 L255 32" fill="none" stroke="#9CA3AF" strokeWidth="3" />
    <circle cx="255" cy="20" r="4" fill="none" stroke="#9CA3AF" strokeWidth="2" />
    {/* Shirt on hanger - drops down when child reaches */}
    <path d="M220 60 L220 155 L290 155 L290 60 L273 53 Q255 65 237 53 Z" fill="#60A5FA" opacity="0.9">
      {isActive && <animate attributeName="transform" values="0 0;0 0;0 15" dur="3s" fill="freeze" type="translate" attributeType="XML" />}
    </path>
    <path d="M220 60 L192 90 L202 94 L223 74" fill="#3B82F6" opacity="0.8" />
    <path d="M290 60 L318 90 L308 94 L287 74" fill="#3B82F6" opacity="0.8" />
    {/* Child reaching up for clothes */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      <EmiratiHead x={140} y={100} s={0.9} smile={true} look={4} />
      <EmiratiBody x={140} y={117} s={0.6} />
      {/* Right arm reaches up then pulls down */}
      {isActive ? <>
        <path d="M147 122 L160 105" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round">
          <animate attributeName="d" values="M147 122 L160 105;M147 122 L165 90;M147 122 L160 115" dur="3s" fill="freeze" />
        </path>
        <Hand cx={160} cy={105}><animate attributeName="cx" values="160;165;160" dur="3s" fill="freeze" /><animate attributeName="cy" values="105;90;115" dur="3s" fill="freeze" /></Hand>
      </> : <>
        <path d="M147 122 L160 105" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={160} cy={105} />
      </>}
      <path d="M133 122 L122 140" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={122} cy={140} />
    </g>
    {isActive && <>
      <circle cx="240" cy="90" r="3" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" /></circle>
      <circle cx="275" cy="120" r="2.5" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
    </>}
  </svg>
);

const RainScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <ellipse cx="150" cy="32" rx="60" ry="20" fill="white" opacity="0.8" />
    <ellipse cx="120" cy="36" rx="40" ry="16" fill="white" opacity="0.7" />
    <ellipse cx="190" cy="37" rx="35" ry="14" fill="white" opacity="0.7" />
    <ellipse cx="280" cy="38" rx="50" ry="18" fill="white" opacity="0.6" />
    {/* Rain */}
    {isActive && Array.from({ length: 12 }).map((_, i) => (
      <line key={i} x1={40+i*30+Math.random()*15} y1={60} x2={35+i*30+Math.random()*15} y2={72}
        stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0">
        <animate attributeName="y1" from={50+Math.random()*20} to="190" dur={`${1+Math.random()*0.5}s`} begin={`${Math.random()}s`} repeatCount="indefinite" />
        <animate attributeName="y2" from={62+Math.random()*20} to="200" dur={`${1+Math.random()*0.5}s`} begin={`${Math.random()}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.6;0" dur={`${1+Math.random()*0.5}s`} begin={`${Math.random()}s`} repeatCount="indefinite" />
      </line>
    ))}
    <ellipse cx="120" cy="180" rx="22" ry="4" fill="#60A5FA" opacity="0.3" />
    <ellipse cx="280" cy="183" rx="18" ry="3" fill="#60A5FA" opacity="0.25" />
    {/* Child looking up, spinning slightly */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g>
          <g><animateTransform attributeName="transform" type="rotate" values="-3 200 140;3 200 140;-3 200 140" dur="4s" repeatCount="indefinite" />
            <EmiratiHead x={200} y={112} s={0.95} smile={true} look={0} />
            <EmiratiBody x={200} y={130} s={0.65} />
            {/* Hands out catching rain */}
            <path d="M192 136 L178 125" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={178} cy={125} />
            <path d="M208 136 L222 125" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={222} cy={125} />
          </g>
        </g>
      ) : (
        <g>
          <EmiratiHead x={200} y={112} s={0.95} smile={true} />
          <EmiratiBody x={200} y={130} s={0.65} />
          <path d="M192 136 L178 125" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={178} cy={125} />
          <path d="M208 136 L222 125" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={222} cy={125} />
        </g>
      )}
    </g>
    {/* Rainbow */}
    {isActive && <path d="M50 140 Q200 50 350 140" fill="none" stroke="url(#rainbow)" strokeWidth="4" opacity="0"><animate attributeName="opacity" from="0" to="0.3" dur="2s" begin="1s" fill="freeze" /></path>}
    <defs><linearGradient id="rainbow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#EF4444" /><stop offset="20%" stopColor="#F59E0B" /><stop offset="40%" stopColor="#FDE68A" />
      <stop offset="60%" stopColor="#10B981" /><stop offset="80%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#8B5CF6" />
    </linearGradient></defs>
  </svg>
);

const ThunderScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <ellipse cx="160" cy="38" rx="70" ry="26" fill="#475569" opacity="0.9" />
    <ellipse cx="130" cy="42" rx="45" ry="18" fill="#64748B" opacity="0.8" />
    <ellipse cx="270" cy="45" rx="55" ry="22" fill="#64748B" opacity="0.75" />
    {/* Lightning */}
    {isActive && <path d="M200 62 L185 95 L200 90 L180 140" fill="none" stroke="#FDE68A" strokeWidth="4" strokeLinejoin="round" opacity="0">
      <animate attributeName="opacity" values="0;1;0;0;1;0;0;0;0" dur="3s" repeatCount="indefinite" />
    </path>}
    {isActive && <rect x="0" y="0" width="400" height="200" fill="white" opacity="0"><animate attributeName="opacity" values="0;0.3;0;0;0.2;0;0;0;0" dur="3s" repeatCount="indefinite" /></rect>}
    {/* Rain */}
    {isActive && Array.from({ length: 8 }).map((_, i) => (
      <line key={i} x1={60+i*40} y1="65" x2={55+i*40} y2="78" stroke="#94A3B8" strokeWidth="1.5" opacity="0">
        <animate attributeName="y1" from="65" to="190" dur={`${0.8+Math.random()*0.4}s`} begin={`${Math.random()}s`} repeatCount="indefinite" />
        <animate attributeName="y2" from="78" to="200" dur={`${0.8+Math.random()*0.4}s`} begin={`${Math.random()}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0" dur={`${0.8+Math.random()*0.4}s`} begin={`${Math.random()}s`} repeatCount="indefinite" />
      </line>
    ))}
    {/* Child flinching, covering ears, jumps on flash */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0;0 0;0 -4;0 0;0 0;0 0;0 0" dur="3s" repeatCount="indefinite" />
          <EmiratiHead x={200} y={120} s={0.95} smile={false} look={0} />
          <EmiratiBody x={200} y={138} s={0.65} />
          {/* Hands covering ears */}
          <path d="M192 142 L183 128" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={183} cy={128} />
          <path d="M208 142 L217 128" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={217} cy={128} />
        </g>
      ) : (
        <g>
          <EmiratiHead x={200} y={120} s={0.95} smile={false} />
          <EmiratiBody x={200} y={138} s={0.65} />
          <path d="M192 142 L183 128" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={183} cy={128} />
          <path d="M208 142 L217 128" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={217} cy={128} />
        </g>
      )}
    </g>
  </svg>
);

const FamilyScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Parent */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
      <circle cx="155" cy="58" r="16" fill="#FBBF24" />
      <path d="M139 52 Q155 34 171 52 Q173 62 171 70 Q155 76 139 70 Q137 62 139 52 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
      <ellipse cx="155" cy="46" rx="14" ry="3" fill="none" stroke="#1E293B" strokeWidth="2" />
      <circle cx="149" cy="58" r="2.5" fill="#374151" /><circle cx="161" cy="58" r="2.5" fill="#374151" />
      <path d="M149 66 Q155 71 161 66" fill="none" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="144" cy="63" r="2.5" fill="#F9A8D4" opacity="0.4" /><circle cx="166" cy="63" r="2.5" fill="#F9A8D4" opacity="0.4" />
      <path d="M140 76 Q138 110 141 152 L169 152 Q172 110 170 76 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
      {/* Parent hand patting child - moves down/up */}
      {isActive ? <>
        <path d="M170 88 Q185 92 198 95" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <animate attributeName="d" values="M170 88 Q185 92 198 95;M170 88 Q185 85 198 82;M170 88 Q185 92 198 95" dur="2.5s" repeatCount="indefinite" />
        </path>
        <Hand cx={198} cy={95}><animate attributeName="cy" values="95;82;95" dur="2.5s" repeatCount="indefinite" /></Hand>
      </> : <>
        <path d="M170 88 Q185 92 198 95" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" fill="none" /><Hand cx={198} cy={95} />
      </>}
      <path d="M140 88 L128 108" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={128} cy={108} />
    </g>
    {/* Child making dua */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      <EmiratiHead x={218} y={86} s={0.85} smile={true} eyes="closed" />
      <EmiratiBody x={218} y={102} s={0.55} />
      {/* Dua hands */}
      <path d="M212 108 L205 94" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={205} cy={94} />
      <path d="M224 108 L231 94" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={231} cy={94} />
    </g>
    {/* Hearts */}
    {isActive && <>
      <text x="188" y="45" textAnchor="middle" fill="#F43F5E" fontSize="13" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" /><animate attributeName="y" from="50" to="22" dur="3s" repeatCount="indefinite" />&#x2665;</text>
      <text x="205" y="38" textAnchor="middle" fill="#EC4899" fontSize="10" opacity="0"><animate attributeName="opacity" values="0;0.6;0" dur="3.5s" begin="0.8s" repeatCount="indefinite" /><animate attributeName="y" from="42" to="12" dur="3.5s" begin="0.8s" repeatCount="indefinite" />&#x2665;</text>
    </>}
  </svg>
);

const SneezeScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="265" y="108" width="55" height="42" rx="6" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="2" />
    <rect x="272" y="104" width="41" height="7" rx="3" fill="#93C5FD" />
    <path d="M290 104 Q293 88 296 104" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    {/* Child sneezing - head jerks forward */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.2s" fill="freeze" />
      {isActive ? (
        <g>
          {/* Head jerks forward */}
          <g><animateTransform attributeName="transform" type="translate" values="0 0;6 3;0 0" dur="2s" repeatCount="indefinite" />
            <circle cx="170" cy="88" r="14" fill="#FBBF24" />
            <path d="M156 82 Q170 68 184 82 Q186 90 184 96 Q170 100 156 96 Q154 90 156 82 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
            <ellipse cx="170" cy="78" rx="13" ry="3" fill="none" stroke="#1E293B" strokeWidth="2" />
            {/* Scrunched sneeze eyes */}
            <path d="M163 87 L168 85" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            <path d="M173 85 L178 87" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="170" cy="96" rx="3.5" ry="2.5" fill="#374151" opacity="0.6" />
            <circle cx="159" cy="91" r="2.5" fill="#FCA5A5" opacity="0.5" />
            <circle cx="181" cy="91" r="2.5" fill="#FCA5A5" opacity="0.5" />
          </g>
          <EmiratiBody x={170} y={103} s={0.58} />
          <path d="M164 109 L156 125" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={156} cy={125} />
          <path d="M176 109 L184 125" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={184} cy={125} />
        </g>
      ) : (
        <g>
          <EmiratiHead x={170} y={88} s={0.9} smile={false} />
          <EmiratiBody x={170} y={103} s={0.58} />
          <path d="M164 109 L156 125" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={156} cy={125} />
          <path d="M176 109 L184 125" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" /><Hand cx={184} cy={125} />
        </g>
      )}
    </g>
    {/* Sneeze burst particles */}
    {isActive && Array.from({ length: 6 }).map((_, i) => {
      const a = ((i * 60) - 30) * Math.PI / 180;
      return <circle key={i} cx={190+Math.cos(a)*18} cy={92+Math.sin(a)*14} r="2" fill="#FDE68A" opacity="0">
        <animate attributeName="opacity" values="0;0.8;0" dur="2s" begin={`${i*0.15}s`} repeatCount="indefinite" />
        <animate attributeName="cx" from={190+Math.cos(a)*10} to={190+Math.cos(a)*38} dur="2s" begin={`${i*0.15}s`} repeatCount="indefinite" />
        <animate attributeName="cy" from={92+Math.sin(a)*8} to={92+Math.sin(a)*30} dur="2s" begin={`${i*0.15}s`} repeatCount="indefinite" />
      </circle>;
    })}
  </svg>
);

const TravelScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <path d="M0 125 L80 50 L160 125" fill="#6366F1" opacity="0.3" />
    <path d="M100 125 L200 30 L300 125" fill="#8B5CF6" opacity="0.25" />
    <path d="M240 125 L340 60 L400 125" fill="#6366F1" opacity="0.2" />
    <path d="M0 180 Q100 150 200 160 Q300 170 400 155" fill="none" stroke="#6B7280" strokeWidth="18" opacity="0.5" />
    <path d="M0 180 Q100 150 200 160 Q300 170 400 155" fill="none" stroke="#FDE68A" strokeWidth="2" strokeDasharray="10 10" opacity="0.5" />
    {/* Car */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive && <animateTransform attributeName="transform" type="translate" from="-35 0" to="0 0" dur="1.2s" fill="freeze" />}
      <rect x="155" y="130" width="72" height="28" rx="8" fill="#14B8A6" />
      <rect x="168" y="122" width="24" height="14" rx="4" fill="#5EEAD4" opacity="0.8" />
      <rect x="196" y="122" width="24" height="14" rx="4" fill="#5EEAD4" opacity="0.8" />
      {/* Child in back window - bouncing */}
      <g>{isActive && <animate attributeName="transform" values="0 0;0 -2;0 0" dur="0.7s" repeatCount="indefinite" type="translate" attributeType="XML" />}
        <circle cx="208" cy="127" r="6" fill="#FBBF24" />
        <path d="M202 124 Q208 118 214 124 L215 128 Q208 130 201 128 Z" fill="#F8FAFC" opacity="0.9" />
        <ellipse cx="208" cy="121" rx="5.5" ry="1.5" fill="none" stroke="#1E293B" strokeWidth="1.2" />
        <circle cx="206" cy="126" r="1.2" fill="#374151" /><circle cx="211" cy="126" r="1.2" fill="#374151" />
        <path d="M206 129 Q208 131 210 129" fill="none" stroke="#374151" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      {/* Wheels rotating */}
      <circle cx="176" cy="160" r="7" fill="#374151" /><circle cx="176" cy="160" r="3" fill="#9CA3AF" />
      {isActive && <line x1="176" y1="154" x2="176" y2="166" stroke="#6B7280" strokeWidth="1"><animateTransform attributeName="transform" type="rotate" from="0 176 160" to="360 176 160" dur="0.5s" repeatCount="indefinite" /></line>}
      <circle cx="214" cy="160" r="7" fill="#374151" /><circle cx="214" cy="160" r="3" fill="#9CA3AF" />
      {isActive && <line x1="214" y1="154" x2="214" y2="166" stroke="#6B7280" strokeWidth="1"><animateTransform attributeName="transform" type="rotate" from="0 214 160" to="360 214 160" dur="0.5s" repeatCount="indefinite" /></line>}
    </g>
    <circle cx="50" cy="28" r="16" fill="#FDE68A" opacity="0.6">{isActive && <animate attributeName="r" values="16;18;16" dur="3s" repeatCount="indefinite" />}</circle>
  </svg>
);

const MarketScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="30" y="62" width="85" height="118" rx="4" fill="#FECACA" opacity="0.8" />
    <rect x="30" y="52" width="85" height="13" rx="3" fill="#EF4444" opacity="0.7" />
    <path d="M30 62 Q52 50 75 62 Q97 50 115 62" fill="#FCA5A5" />
    <rect x="55" y="108" width="35" height="72" rx="2" fill="#92400E" opacity="0.6" />
    <rect x="155" y="52" width="85" height="128" rx="4" fill="#BBF7D0" opacity="0.8" />
    <rect x="155" y="42" width="85" height="13" rx="3" fill="#10B981" opacity="0.7" />
    <path d="M155 52 Q177 40 197 52 Q219 40 240 52" fill="#86EFAC" />
    <rect x="178" y="92" width="38" height="88" rx="2" fill="#92400E" opacity="0.6" />
    <rect x="275" y="67" width="85" height="113" rx="4" fill="#BFDBFE" opacity="0.8" />
    <rect x="275" y="57" width="85" height="13" rx="3" fill="#3B82F6" opacity="0.7" />
    <path d="M275 67 Q297 55 317 67 Q339 55 360 67" fill="#93C5FD" />
    <rect x="298" y="107" width="38" height="73" rx="2" fill="#92400E" opacity="0.6" />
    <rect x="0" y="180" width="400" height="20" fill="#D4A574" opacity="0.3" />
    {/* Child walking, swaying, looking around */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.4s" fill="freeze" />
      {isActive ? (
        <g>
          <animateTransform attributeName="transform" type="translate" values="-15 0;15 0;-15 0" dur="6s" repeatCount="indefinite" />
          <g><animateTransform attributeName="transform" type="rotate" values="-2 197 150;2 197 150;-2 197 150" dur="1.2s" repeatCount="indefinite" />
            <EmiratiHead x={197} y={130} s={0.85} smile={true} look={0}>
            </EmiratiHead>
            <EmiratiBody x={197} y={146} s={0.55} />
            <path d="M191 152 L184 164" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={184} cy={164} />
            <path d="M203 152 L210 164" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={210} cy={164} />
          </g>
          {/* Walking legs */}
          <line x1="193" y1="172" x2="188" y2="182" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round"><animate attributeName="x2" values="188;198;188" dur="0.8s" repeatCount="indefinite" /></line>
          <line x1="201" y1="172" x2="206" y2="182" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round"><animate attributeName="x2" values="206;196;206" dur="0.8s" repeatCount="indefinite" /></line>
        </g>
      ) : (
        <g>
          <EmiratiHead x={197} y={130} s={0.85} smile={true} />
          <EmiratiBody x={197} y={146} s={0.55} />
          <path d="M191 152 L184 164" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={184} cy={164} />
          <path d="M203 152 L210 164" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" /><Hand cx={210} cy={164} />
        </g>
      )}
    </g>
  </svg>
);

const StudyScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="70" y="128" width="260" height="10" rx="3" fill="#D4A574" />
    <rect x="80" y="138" width="6" height="45" fill="#C4956A" />
    <rect x="324" y="138" width="6" height="45" fill="#C4956A" />
    {/* Books */}
    <rect x="100" y="106" width="48" height="7" rx="1" fill="#3B82F6" opacity="0.9" />
    <rect x="103" y="99" width="43" height="7" rx="1" fill="#10B981" opacity="0.9" />
    <rect x="101" y="92" width="46" height="7" rx="1" fill="#EF4444" opacity="0.9" />
    {/* Open book */}
    <path d="M210 125 L210 98 Q228 94 248 98 L248 125 Z" fill="white" opacity="0.9" />
    <path d="M210 125 L210 98 Q192 94 172 98 L172 125 Z" fill="#FEFCE8" opacity="0.9" />
    <line x1="210" y1="98" x2="210" y2="125" stroke="#D4A574" strokeWidth="1" />
    {/* Page turning animation */}
    {isActive && <path d="M210 100 Q220 98 230 100 L230 123 Q220 121 210 123 Z" fill="white" opacity="0.5">
      <animate attributeName="d" values="M210 100 Q220 98 230 100 L230 123 Q220 121 210 123 Z;M210 100 Q200 98 190 100 L190 123 Q200 121 210 123 Z;M210 100 Q220 98 230 100 L230 123 Q220 121 210 123 Z" dur="4s" repeatCount="indefinite" />
    </path>}
    {/* Pencil, lamp */}
    <line x1="266" y1="116" x2="288" y2="126" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <rect x="305" y="58" width="3" height="70" fill="#9CA3AF" />
    <path d="M292 58 Q308 40 324 58" fill="#FDE68A" opacity="0.8" />
    {/* Child reading - head nods */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g>
          <g><animateTransform attributeName="transform" type="rotate" values="0 210 76;4 210 76;0 210 76" dur="3.5s" repeatCount="indefinite" />
            <EmiratiHead x={210} y={76} s={0.85} smile={true} look={0} />
          </g>
          <path d="M200 90 Q199 108 202 125 L218 125 Q221 108 220 90 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          {/* Hand turning page */}
          <path d="M200 96 L186 110 L192 114" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" fill="none" /><Hand cx={192} cy={114} />
          <path d="M220 96 L234 110 L228 114" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" fill="none">
            <animate attributeName="d" values="M220 96 L234 110 L228 114;M220 96 L228 108 L218 112;M220 96 L234 110 L228 114" dur="4s" repeatCount="indefinite" />
          </path>
          <Hand cx={228} cy={114}><animate attributeName="cx" values="228;218;228" dur="4s" repeatCount="indefinite" /><animate attributeName="cy" values="114;112;114" dur="4s" repeatCount="indefinite" /></Hand>
        </g>
      ) : (
        <g>
          <EmiratiHead x={210} y={76} s={0.85} smile={true} />
          <path d="M200 90 Q199 108 202 125 L218 125 Q221 108 220 90 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <path d="M200 96 L186 110 L192 114" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" fill="none" /><Hand cx={192} cy={114} />
          <path d="M220 96 L234 110 L228 114" stroke="#F8FAFC" strokeWidth="3.5" strokeLinecap="round" fill="none" /><Hand cx={228} cy={114} />
        </g>
      )}
    </g>
    {isActive && <ellipse cx="308" cy="73" rx="28" ry="16" fill="#FDE68A" opacity="0.1"><animate attributeName="opacity" values="0.06;0.16;0.06" dur="3s" repeatCount="indefinite" /></ellipse>}
  </svg>
);

const ScaredScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="0" y="0" width="400" height="200" fill="#1E293B" opacity="0.5" />
    <circle cx="50" cy="25" r="1.5" fill="white" opacity="0.3" />
    <circle cx="120" cy="42" r="1" fill="white" opacity="0.2" />
    <circle cx="80" cy="68" r="1.5" fill="white" opacity="0.25" />
    {/* Child trembling, curled up */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g><animateTransform attributeName="transform" type="translate" values="-2 0;2 0;-2 0;1 0;-1 0" dur="0.4s" repeatCount="5" />
          <circle cx="160" cy="118" r="13" fill="#FBBF24" />
          <path d="M147 112 Q160 100 173 112 L175 122 Q160 126 145 122 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <ellipse cx="160" cy="108" rx="12" ry="2.5" fill="none" stroke="#1E293B" strokeWidth="2" />
          <circle cx="155" cy="117" r="3" fill="#374151" /><circle cx="165" cy="117" r="3" fill="#374151" />
          <circle cx="155.8" cy="116.3" r="1" fill="white" /><circle cx="165.8" cy="116.3" r="1" fill="white" />
          <path d="M155 126 Q160 123 165 126" fill="none" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M148 132 Q148 152 155 162 L165 162 Q172 152 172 132 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <path d="M148 138 Q145 148 150 158" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" /><Hand cx={150} cy={158} />
          <path d="M172 138 Q175 148 170 158" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" /><Hand cx={170} cy={158} />
        </g>
      ) : (
        <g>
          <circle cx="160" cy="118" r="13" fill="#FBBF24" />
          <path d="M147 112 Q160 100 173 112 L175 122 Q160 126 145 122 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <ellipse cx="160" cy="108" rx="12" ry="2.5" fill="none" stroke="#1E293B" strokeWidth="2" />
          <circle cx="155" cy="117" r="3" fill="#374151" /><circle cx="165" cy="117" r="3" fill="#374151" />
          <path d="M155 126 Q160 123 165 126" fill="none" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M148 132 Q148 152 155 162 L165 162 Q172 152 172 132 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <path d="M148 138 Q145 148 150 158" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" /><Hand cx={150} cy={158} />
          <path d="M172 138 Q175 148 170 158" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" /><Hand cx={170} cy={158} />
        </g>
      )}
    </g>
    {/* Protection shield */}
    {isActive && <g opacity="0"><animate attributeName="opacity" from="0" to="0.8" dur="1s" begin="2s" fill="freeze" />
      <path d="M280 55 L258 68 L258 108 Q258 132 280 142 Q302 132 302 108 L302 68 Z" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="2" />
    </g>}
    {isActive && <path d="M350 0 L300 200 L400 200 L400 0 Z" fill="#FDE68A" opacity="0"><animate attributeName="opacity" from="0" to="0.12" dur="1.5s" begin="1s" fill="freeze" /></path>}
  </svg>
);

const SickScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="80" y="102" width="200" height="65" rx="6" fill="#DBEAFE" opacity="0.8" />
    <rect x="75" y="92" width="10" height="75" rx="3" fill="#93C5FD" />
    <ellipse cx="120" cy="106" rx="28" ry="10" fill="white" opacity="0.8" />
    <rect x="80" y="128" width="200" height="39" rx="4" fill="#93C5FD" opacity="0.5" />
    {/* Child sick in bed, shifting uncomfortably */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g><animateTransform attributeName="transform" type="translate" values="0 0;2 1;0 0;-1 0;0 0" dur="4s" repeatCount="indefinite" />
          <circle cx="125" cy="105" r="12" fill="#FBBF24" />
          <path d="M113 100 Q125 90 137 100 L139 108 Q125 112 111 108 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <ellipse cx="125" cy="96" rx="11" ry="2.5" fill="none" stroke="#1E293B" strokeWidth="1.5" />
          <path d="M119 104 Q121 102 123 104" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M127 104 Q129 102 131 104" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="117" cy="108" r="2.5" fill="#FCA5A5" opacity="0.6" /><circle cx="133" cy="108" r="2.5" fill="#FCA5A5" opacity="0.6" />
          <path d="M122 112 Q125 110 128 112" fill="none" stroke="#374151" strokeWidth="1" strokeLinecap="round" />
          <path d="M140 122 Q178 112 248 126" fill="#93C5FD" opacity="0.4" />
        </g>
      ) : (
        <g>
          <circle cx="125" cy="105" r="12" fill="#FBBF24" />
          <path d="M113 100 Q125 90 137 100 L139 108 Q125 112 111 108 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
          <ellipse cx="125" cy="96" rx="11" ry="2.5" fill="none" stroke="#1E293B" strokeWidth="1.5" />
          <path d="M119 104 Q121 102 123 104" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M127 104 Q129 102 131 104" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="117" cy="108" r="2.5" fill="#FCA5A5" opacity="0.6" /><circle cx="133" cy="108" r="2.5" fill="#FCA5A5" opacity="0.6" />
          <path d="M122 112 Q125 110 128 112" fill="none" stroke="#374151" strokeWidth="1" strokeLinecap="round" />
          <path d="M140 122 Q178 112 248 126" fill="#93C5FD" opacity="0.4" />
        </g>
      )}
    </g>
    {/* Medicine */}
    <rect x="300" y="96" width="16" height="26" rx="3" fill="#EF4444" opacity="0.7" />
    <rect x="297" y="91" width="22" height="7" rx="2" fill="#DC2626" opacity="0.8" />
    <rect x="322" y="101" width="4" height="18" rx="2" fill="white" />
    <circle cx="324" cy="122" r="4" fill="#EF4444">{isActive && <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />}</circle>
    {/* Healing hearts */}
    {isActive && <>
      <text x="200" y="72" textAnchor="middle" fill="#10B981" fontSize="20" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" /><animate attributeName="y" from="78" to="52" dur="3s" repeatCount="indefinite" />&#x1f49a;</text>
    </>}
  </svg>
);

const AngryScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Large Emirati child face */}
    <circle cx="200" cy="90" r="48" fill="#FCA5A5" opacity="0.8">
      {isActive && <animate attributeName="fill" values="#FCA5A5;#FCD34D;#86EFAC" dur="3s" fill="freeze" />}
    </circle>
    {/* Ghutra */}
    <path d="M155 76 Q154 62 166 55 Q200 42 234 55 Q246 62 245 76 L250 120 Q245 126 235 122 L165 122 Q155 126 150 120 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
    <ellipse cx="200" cy="50" rx="38" ry="8" fill="none" stroke="#1E293B" strokeWidth="3" />
    {/* Face puffs then calms - scale pulse */}
    {isActive && <circle cx="200" cy="90" r="48" fill="transparent" stroke="#EF4444" strokeWidth="3" opacity="0.5">
      <animate attributeName="r" values="48;54;48;48" dur="1.5s" repeatCount="2" />
      <animate attributeName="opacity" values="0.5;0.3;0;0" dur="3s" fill="freeze" />
    </circle>}
    {/* Eyebrows calming */}
    <path d="M180 76 L194 70" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round">
      {isActive && <animate attributeName="d" values="M180 76 L194 70;M180 74 L194 74;M180 76 L194 76" dur="3s" fill="freeze" />}
    </path>
    <path d="M206 70 L220 76" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round">
      {isActive && <animate attributeName="d" values="M206 70 L220 76;M206 74 L220 74;M206 76 L220 76" dur="3s" fill="freeze" />}
    </path>
    <circle cx="188" cy="84" r="4.5" fill="#374151" /><circle cx="212" cy="84" r="4.5" fill="#374151" />
    <circle cx="189.5" cy="82.5" r="1.5" fill="white" /><circle cx="213.5" cy="82.5" r="1.5" fill="white" />
    {/* Cheeks appear as calming */}
    {isActive && <>
      <circle cx="173" cy="94" r="5.5" fill="#F9A8D4" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="3s" fill="freeze" /></circle>
      <circle cx="227" cy="94" r="5.5" fill="#F9A8D4" opacity="0"><animate attributeName="opacity" from="0" to="0.4" dur="3s" fill="freeze" /></circle>
    </>}
    {/* Mouth frown → smile */}
    <path d="M186 108 Q200 100 214 108" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round">
      {isActive && <animate attributeName="d" values="M186 108 Q200 100 214 108;M186 106 Q200 106 214 106;M186 104 Q200 114 214 104" dur="3s" fill="freeze" />}
    </path>
    {/* Body */}
    <path d="M182 134 Q180 154 184 170 L216 170 Q220 154 218 134 Z" fill="#FCA5A5" opacity="0.5">
      {isActive && <animate attributeName="fill" values="#FCA5A5;#FCD34D;#86EFAC" dur="3s" fill="freeze" />}
    </path>
    {/* Calming aura */}
    {isActive && <circle cx="200" cy="90" r="55" fill="none" stroke="#10B981" strokeWidth="2" opacity="0">
      <animate attributeName="opacity" values="0;0.4;0" dur="3s" begin="2s" repeatCount="indefinite" />
      <animate attributeName="r" values="55;68;55" dur="3s" begin="2s" repeatCount="indefinite" />
    </circle>}
  </svg>
);

const IftarScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <defs><linearGradient id="sunset" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F97316" stopOpacity="0.4" /><stop offset="100%" stopColor="#FDE68A" stopOpacity="0.2" /></linearGradient></defs>
    <rect x="0" y="0" width="400" height="85" fill="url(#sunset)" />
    {/* Setting sun */}
    <circle cx="320" cy="32" r="18" fill="#F97316" opacity="0.5">{isActive && <animate attributeName="cy" from="28" to="45" dur="5s" fill="freeze" />}</circle>

    {/* === Dates plate on right side === */}
    <ellipse cx="260" cy="130" rx="35" ry="8" fill="#F1F5F9" opacity="0.85" />
    <ellipse cx="248" cy="124" rx="5.5" ry="3.5" fill="#92400E" opacity="0.9" />
    <ellipse cx="260" cy="122" rx="5.5" ry="3.5" fill="#78350F" opacity="0.9" />
    <ellipse cx="272" cy="124" rx="5.5" ry="3.5" fill="#92400E" opacity="0.9" />
    {/* Water glass */}
    <rect x="310" y="116" width="14" height="20" rx="2" fill="#60A5FA" opacity="0.5" />
    {/* Small bowl on left */}
    <path d="M85 128 Q95 138 105 128" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />

    {/* === Table (covers lower body) === */}
    <rect x="60" y="136" width="280" height="9" rx="3" fill="#D4A574" />
    <rect x="75" y="145" width="6" height="36" fill="#C4956A" /><rect x="328" y="145" width="6" height="36" fill="#C4956A" />

    {/* === Child on LEFT, reaching to dates on RIGHT === */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
      {/* Body behind table */}
      <path d="M120 106 Q118 120 121 148 L145 148 Q148 120 146 106 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
      <line x1="133" y1="112" x2="133" y2="142" stroke="#CBD5E1" strokeWidth="0.5" opacity="0.5" />

      {/* Head looking right toward dates */}
      <EmiratiHead x={133} y={86} s={1} smile={true} eyes="closed" look={3} />

      {/* Left arm resting */}
      <path d="M120 112 L108 128 L112 134" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" />
      <Hand cx={112} cy={134} />

      {/* Right arm - reaches to dates, picks one, brings to mouth */}
      {isActive ? <>
        <path d="M146 112 L180 126 L248 124" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none">
          <animate attributeName="d"
            values="M146 112 L180 126 L248 124;M146 112 L158 108 L140 93;M146 112 L158 108 L140 93;M146 112 L180 126 L248 124"
            dur="3.2s" repeatCount="indefinite" />
        </path>
        <Hand cx={248} cy={124}>
          <animate attributeName="cx" values="248;140;140;248" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="124;93;93;124" dur="3.2s" repeatCount="indefinite" />
        </Hand>
        {/* Date travels with hand */}
        <ellipse rx="4.5" ry="3" fill="#92400E" opacity="0">
          <animate attributeName="cx" values="248;140;140;248" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="124;93;93;124" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0.9;0;0" dur="3.2s" repeatCount="indefinite" />
        </ellipse>
        {/* Mouth opens */}
        <ellipse cx="133" cy="97" rx="2.5" ry="0.5" fill="#374151" opacity="0.5">
          <animate attributeName="ry" values="0.5;2.2;2.2;0.5" dur="3.2s" repeatCount="indefinite" />
        </ellipse>
      </> : <>
        <path d="M146 112 L165 126" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" fill="none" />
        <Hand cx={165} cy={126} />
      </>}
    </g>

    {/* Crescent moon */}
    {isActive && <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="1.5s" fill="freeze" />
      <circle cx="60" cy="22" r="9" fill="#FDE68A" /><circle cx="64" cy="19" r="7" fill="#1E3A5F" opacity="0.9" />
    </g>}
    {/* Stars */}
    {isActive && <>
      <circle cx="40" cy="45" r="1.5" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="85" cy="30" r="1" fill="#FDE68A" opacity="0"><animate attributeName="opacity" values="0;0.6;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" /></circle>
    </>}
  </svg>
);

const CharacterScene = ({ isActive }) => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Star */}
    <path d="M200 15 L212 58 L258 58 L220 85 L232 130 L200 105 L168 130 L180 85 L142 58 L188 58 Z" fill="#FDE68A" opacity="0"><animate attributeName="opacity" from="0" to="0.5" dur="0.8s" fill="freeze" /></path>
    <path d="M200 32 L208 58 L238 58 L213 76 L222 106 L200 90 L178 106 L187 76 L162 58 L192 58 Z" fill="#FCD34D" opacity="0.25" />
    {/* Crown */}
    <path d="M182 42 L189 25 L200 36 L211 25 L218 42 Z" fill="#F59E0B" opacity="0"><animate attributeName="opacity" from="0" to="0.7" dur="0.5s" begin="0.5s" fill="freeze" /></path>
    {/* Child making dua, gentle sway */}
    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="0.3s" fill="freeze" />
      {isActive ? (
        <g><animateTransform attributeName="transform" type="rotate" values="-2 200 95;2 200 95;-2 200 95" dur="4s" repeatCount="indefinite" />
          <EmiratiHead x={200} y={72} s={1.05} smile={true} eyes="closed" />
          <EmiratiBody x={200} y={91} s={0.7} />
          {/* Dua hands */}
          <path d="M192 97 L183 82" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={183} cy={82} />
          <path d="M208 97 L217 82" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={217} cy={82} />
        </g>
      ) : (
        <g>
          <EmiratiHead x={200} y={72} s={1.05} smile={true} eyes="closed" />
          <EmiratiBody x={200} y={91} s={0.7} />
          <path d="M192 97 L183 82" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={183} cy={82} />
          <path d="M208 97 L217 82" stroke="#F8FAFC" strokeWidth="4.5" strokeLinecap="round" /><Hand cx={217} cy={82} />
        </g>
      )}
    </g>
    {/* Light radiating outward */}
    {isActive && <>
      <circle cx="200" cy="90" r="50" fill="none" stroke="#FDE68A" strokeWidth="1" opacity="0"><animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" /><animate attributeName="r" values="50;80;50" dur="3s" repeatCount="indefinite" /></circle>
      <circle cx="200" cy="90" r="60" fill="none" stroke="#FDE68A" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3"><animateTransform attributeName="transform" type="rotate" from="0 200 90" to="360 200 90" dur="12s" repeatCount="indefinite" /></circle>
    </>}
    {/* Orbiting hearts */}
    {isActive && <>
      <text x="200" y="90" textAnchor="middle" fill="#F43F5E" fontSize="13" opacity="0.6"><animateTransform attributeName="transform" type="rotate" from="0 200 90" to="360 200 90" dur="8s" repeatCount="indefinite" />&#x2665;</text>
      <text x="200" y="90" textAnchor="middle" fill="#EC4899" fontSize="9" opacity="0.4"><animateTransform attributeName="transform" type="rotate" from="180 200 90" to="540 200 90" dur="8s" repeatCount="indefinite" />&#x2665;</text>
    </>}
  </svg>
);

// ============================================================
// CONFIG
// ============================================================

const SCENE_BACKGROUNDS = {
  kitchen: 'linear-gradient(180deg, #065F46 0%, #10B981 60%, #34D399 100%)',
  bedroom: 'linear-gradient(180deg, #1E3A5F 0%, #3B82F6 50%, #93C5FD 100%)',
  bathroom: 'linear-gradient(180deg, #475569 0%, #64748B 60%, #94A3B8 100%)',
  wudu: 'linear-gradient(180deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)',
  mosque: 'linear-gradient(180deg, #065F46 0%, #059669 50%, #34D399 100%)',
  home: 'linear-gradient(180deg, #92400E 0%, #F59E0B 50%, #FDE68A 100%)',
  mirror: 'linear-gradient(180deg, #7C3AED 0%, #A78BFA 50%, #DDD6FE 100%)',
  clothing: 'linear-gradient(180deg, #1E40AF 0%, #60A5FA 50%, #BFDBFE 100%)',
  rain: 'linear-gradient(180deg, #374151 0%, #6B7280 40%, #9CA3AF 100%)',
  thunder: 'linear-gradient(180deg, #1E293B 0%, #334155 40%, #475569 100%)',
  family: 'linear-gradient(180deg, #831843 0%, #EC4899 50%, #FBCFE8 100%)',
  sneeze: 'linear-gradient(180deg, #C2410C 0%, #FB923C 50%, #FED7AA 100%)',
  travel: 'linear-gradient(180deg, #312E81 0%, #6366F1 50%, #A5B4FC 100%)',
  market: 'linear-gradient(180deg, #713F12 0%, #D97706 50%, #FDE68A 100%)',
  study: 'linear-gradient(180deg, #312E81 0%, #4F46E5 50%, #818CF8 100%)',
  scared: 'linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
  sick: 'linear-gradient(180deg, #831843 0%, #DB2777 40%, #F9A8D4 100%)',
  angry: 'linear-gradient(180deg, #7F1D1D 0%, #DC2626 30%, #86EFAC 100%)',
  iftar: 'linear-gradient(180deg, #7C2D12 0%, #EA580C 40%, #FDE68A 100%)',
  character: 'linear-gradient(180deg, #7F1D1D 0%, #F43F5E 40%, #FECDD3 100%)',
};

const SCENE_COMPONENTS = {
  kitchen: KitchenScene, bedroom: BedroomScene, bathroom: BathroomScene, wudu: WuduScene,
  mosque: MosqueScene, home: HomeScene, mirror: MirrorScene, clothing: ClothingScene,
  rain: RainScene, thunder: ThunderScene, family: FamilyScene, sneeze: SneezeScene,
  travel: TravelScene, market: MarketScene, study: StudyScene, scared: ScaredScene,
  sick: SickScene, angry: AngryScene, iftar: IftarScene, character: CharacterScene,
};

// ============================================================
// MAIN
// ============================================================

const DuaScene = ({ sceneId, isActive = true, isAudioPlaying = false, duaId }) => {
  const SceneComponent = SCENE_COMPONENTS[sceneId] || KitchenScene;
  const background = SCENE_BACKGROUNDS[sceneId] || SCENE_BACKGROUNDS.kitchen;

  // Scene variants
  let sceneVariant = 'default';
  if (duaId === 3) sceneVariant = 'sleep';
  else if (duaId === 4) sceneVariant = 'wake';
  else if (duaId === 5) sceneVariant = 'enter';
  else if (duaId === 6) sceneVariant = 'leave';

  return (
    <div className="relative w-full overflow-hidden rounded-b-3xl"
      style={{ height: '35vh', minHeight: 180, maxHeight: 280, background }}>
      <SceneComponent isActive={isActive} isAudioPlaying={isAudioPlaying} sceneVariant={sceneVariant} />
      {isActive && <SceneSparkles color={sceneId === 'scared' ? '#10B981' : '#FDE68A'} />}
      {isAudioPlaying && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 border-2 border-white/20 rounded-b-3xl" style={{ animation: 'duaPulse 1.5s ease-in-out infinite' }} />
        </div>
      )}
      <style>{`
        @keyframes duaSparkle { 0%, 100% { opacity: 0; transform: scale(0); } 50% { opacity: 0.8; transform: scale(1); } }
        @keyframes duaPulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
      `}</style>
    </div>
  );
};

export default DuaScene;
