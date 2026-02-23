# Hajj & Umrah Interactive 3D Game Plan

## Vision
Transform Hajj/Umrah learning into an **interactive 3D game** where users actively participate and perform rituals step-by-step, like a guided simulation game.

---

## Game Structure

### Umrah Journey (5 Interactive Levels)

| Level | Name | Game Mechanic | User Actions |
|-------|------|---------------|--------------|
| 1 | **Ihram** | Dress-up mini-game | Tap to change clothes, recite Talbiyah |
| 2 | **Tawaf** | Walking game | Tap/hold to walk 7 rounds around Kaaba |
| 3 | **Sa'i** | Running game | Swipe to walk/run between Safa & Marwah 7x |
| 4 | **Halq/Taqsir** | Completion ritual | Tap to symbolically complete |
| 5 | **Celebration** | Victory screen | See achievements, share |

### Hajj Journey (14 Interactive Levels over 5 Days)

| Day | Level | Name | Game Mechanic |
|-----|-------|------|---------------|
| 1 | 1 | Ihram | Same as Umrah |
| 1 | 2 | Go to Mina | Walking journey |
| 2 | 3 | Arafat | Stand and make dua (timed) |
| 2 | 4 | Muzdalifah | Collect pebbles mini-game |
| 3 | 5 | Jamarat | Throw stones at pillar |
| 3 | 6 | Sacrifice | Tap to complete |
| 3 | 7 | Halq | Hair cutting animation |
| 3 | 8 | Tawaf Ifadah | Same as Umrah Tawaf |
| 3 | 9 | Sa'i | Same as Umrah Sa'i |
| 4-5 | 10-14 | Remaining | Mina nights, more Jamarat, farewell Tawaf |

---

## Game Mechanics Detail

### 1. Tawaf Game (Walking around Kaaba)
```
┌─────────────────────────────────────┐
│  🕋 Tawaf        Round: 3/7  ⭐⭐⭐ │
├─────────────────────────────────────┤
│                                     │
│         ┌───────┐                   │
│         │ KAABA │                   │
│         └───────┘                   │
│              👤 ← Player            │
│                                     │
│  [  ①  ②  ③  ④  ⑤  ⑥  ⑦  ]       │
│                                     │
│  👆 Tap & hold to walk              │
└─────────────────────────────────────┘
```

**Controls:**
- Tap & hold anywhere = walk counter-clockwise
- Release = stop
- Auto-shows dua at Black Stone corner

**Completion:** 7 full rounds

---

### 2. Sa'i Game (Walking between hills)
```
┌─────────────────────────────────────┐
│  🏔️ Sa'i         Lap: 4/7          │
├─────────────────────────────────────┤
│                                     │
│  SAFA ←────────────────→ MARWAH    │
│   🏔️     [GREEN ZONE]      🏔️      │
│          👤→ RUN!                   │
│                                     │
│  ════════════════════════════════   │
│  Progress: ▓▓▓▓▓▓░░░░░░ 58%        │
│                                     │
│  ← Swipe to move →                  │
└─────────────────────────────────────┘
```

**Controls:**
- Swipe left/right to move
- Move faster in green zone (men run here)
- Dua appears at each hill

**Completion:** 7 laps (Safa→Marwah→Safa = 1 lap counts as 1)

---

### 3. Ihram Game (Getting Ready)
```
┌─────────────────────────────────────┐
│  🧕 Ihram - Enter Sacred State      │
├─────────────────────────────────────┤
│                                     │
│         👤                          │
│      [Avatar]                       │
│                                     │
│  Step 1: Make Niyyah (Intention)    │
│  [  🤲 Tap to recite  ]             │
│                                     │
│  Step 2: Wear Ihram                 │
│  [  👔 Tap to change  ]             │
│                                     │
│  Step 3: Say Talbiyah               │
│  [  🗣️ Tap to recite  ]             │
└─────────────────────────────────────┘
```

**Controls:**
- Tap buttons to complete each action
- Audio plays for duas
- Animation shows avatar changing

---

### 4. Jamarat Game (Throwing Stones) - Hajj Only
```
┌─────────────────────────────────────┐
│  🪨 Jamarat      Stones: 5/7       │
├─────────────────────────────────────┤
│                                     │
│           ┌─────┐                   │
│           │PILLAR│ ← Target         │
│           └─────┘                   │
│              ↑                      │
│         🪨  throw                   │
│              │                      │
│             👤                      │
│                                     │
│  👆 Swipe up to throw stone         │
└─────────────────────────────────────┘
```

**Controls:**
- Swipe up to throw
- Must say "Bismillah" before each throw
- 7 stones total

---

### 5. Arafat Game (Standing & Dua) - Hajj Only
```
┌─────────────────────────────────────┐
│  🏔️ Day of Arafah    Time: 2:45    │
├─────────────────────────────────────┤
│                                     │
│     Mount Arafat 🏔️                 │
│                                     │
│         👤 🤲                        │
│      Making Dua                     │
│                                     │
│  Current Dua:                       │
│  "لا إله إلا الله وحده..."           │
│                                     │
│  [  🤲 Tap to make dua  ]           │
│  Hold to increase reward meter      │
└─────────────────────────────────────┘
```

**Controls:**
- Tap & hold to make dua
- Longer hold = more "reward points"
- Shows various duas to recite

---

## Technical Architecture

### File Structure
```
src/components/kids/HajjUmrahJourney/
├── games/
│   ├── TawafGame.jsx       # 7 rounds around Kaaba
│   ├── SaiGame.jsx         # 7 laps between hills
│   ├── IhramGame.jsx       # Preparation steps
│   ├── JamaratGame.jsx     # Stone throwing (Hajj)
│   ├── ArafatGame.jsx      # Standing & dua (Hajj)
│   └── GameComponents.jsx  # Shared 3D components
├── UmrahGameJourney.jsx    # Main Umrah game flow
├── HajjGameJourney.jsx     # Main Hajj game flow
└── ...existing files
```

### Shared Components
- `PlayerAvatar` - User-controlled pilgrim
- `Kaaba3D` - Kaaba model
- `Hills3D` - Safa/Marwah hills
- `Mataf3D` - Tawaf floor
- `Pillar3D` - Jamarat pillar
- `NPCPilgrims` - Background crowd

### State Management
```javascript
{
  currentGame: 'tawaf' | 'sai' | 'ihram' | etc,
  progress: {
    tawaf: { rounds: 3, completed: false },
    sai: { laps: 5, completed: false },
    // ...
  },
  totalStars: 15, // Earned stars
  achievements: ['first_tawaf', 'speed_runner', etc]
}
```

---

## UI/UX Design

### Game HUD (Heads-Up Display)
- Top left: Back button
- Top center: Game title + emoji
- Top right: Progress counter (3/7)
- Bottom: Instructions + controls hint
- Center overlays: Duas when triggered

### Progress Visualization
- Circle indicators for Tawaf rounds
- Progress bar for Sa'i
- Checklist for Ihram steps
- Counter for Jamarat stones

### Rewards System
- ⭐ Stars for completing each game
- 🏆 Achievements for special actions
- 📜 Certificates at journey end
- 🎵 Celebratory sounds

---

## Audio & Haptics

### Sound Effects
- Footsteps while walking
- Crowd ambience
- "Ding" on round/lap complete
- Recitation audio for duas
- Celebration music on completion

### Haptic Feedback (Mobile)
- Light vibration on tap
- Strong vibration on milestone

---

## Multilingual Support

All text in: **English**, **Urdu**, **Arabic**
- Instructions
- Duas (Arabic + translation)
- Completion messages
- Achievements

---

## Implementation Phases

### Phase 1: Core Games (Priority)
1. ✅ TawafGame.jsx - Walk around Kaaba
2. 🔲 SaiGame.jsx - Walk between hills
3. 🔲 IhramGame.jsx - Preparation steps

### Phase 2: Hajj Specific
4. 🔲 JamaratGame.jsx - Stone throwing
5. 🔲 ArafatGame.jsx - Standing & dua
6. 🔲 MuzdalifaGame.jsx - Collect pebbles

### Phase 3: Polish
7. 🔲 Sound effects & audio
8. 🔲 Achievements system
9. 🔲 Certificates/sharing
10. 🔲 Tutorial/onboarding

---

## Questions for User

1. **Controls preference?**
   - A) Tap & hold to walk
   - B) On-screen joystick
   - C) Swipe gestures only

2. **Difficulty level?**
   - A) Easy (guided, auto-complete hints)
   - B) Normal (clear instructions)
   - C) Realistic (timed, more challenging)

3. **Avatar customization?**
   - A) Fixed Emirati avatar
   - B) Choose skin tone
   - C) Choose gender appearance

4. **Rewards system?**
   - A) Stars only
   - B) Stars + achievements
   - C) Full gamification (leaderboard, badges)

---

## Next Steps

1. Confirm this plan with user
2. Implement TawafGame (already started)
3. Implement SaiGame
4. Implement IhramGame
5. Wire games into journey flow
6. Test and iterate
