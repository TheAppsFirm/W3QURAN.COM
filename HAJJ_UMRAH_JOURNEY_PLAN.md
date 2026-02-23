# Umrah & Hajj Journey - Complete 3D Interactive Feature

## Overview
Two interactive 3D journeys with an **Emirati avatar** performing all rituals step-by-step.
- **Umrah Journey**: FREE - 5 steps
- **Hajj Journey**: PREMIUM - 14 steps
- **Audience**: Kids AND Adults
- **Languages**: English, Urdu, Arabic

---

## Avatar Design: Emirati Pilgrim

### Male Avatar (Default)
```
┌─────────────────────────────┐
│     👳 (White Ghutra)       │
│        ╭───╮                │
│        │ 😊 │  <- Friendly  │
│        ╰───╯     face       │
│      ┌─────┐                │
│      │     │  <- White      │
│      │ Ihram│     Ihram     │
│      │     │     cloth      │
│      └──┬──┘                │
│        / \                  │
│       /   \                 │
└─────────────────────────────┘
```

### Avatar States
- **Normal**: Standing, walking
- **Tawaf**: Walking around Kaaba
- **Praying**: In sujood/ruku
- **Making Dua**: Hands raised
- **Sa'i**: Walking/jogging between hills
- **Rami**: Throwing stones

### 3D Avatar Tech
- Use **Three.js** with simple geometric shapes (like existing DuaScene3D)
- Smooth animations for each ritual
- No facial features to respect Islamic guidelines
- Simple but recognizable Emirati style

---

## Two Journeys Structure

### 🕋 UMRAH (Free) - 5 Steps

| # | Step | Arabic | Location | Duration |
|---|------|--------|----------|----------|
| 1 | Ihram | الإحرام | Miqat | Entry state |
| 2 | Tawaf | الطواف | Kaaba | 7 rounds |
| 3 | Prayer at Maqam Ibrahim | الصلاة | Maqam Ibrahim | 2 rakaat |
| 4 | Sa'i | السعي | Safa-Marwah | 7 times |
| 5 | Halq/Taqsir | الحلق | Anywhere | Hair cut |

**Completion**: Certificate + Badge

---

### 🕋 HAJJ (Premium) - 14 Steps over 5 Days

#### Day 1: 8th Dhul Hijjah (يوم التروية)
| # | Step | Arabic | Location |
|---|------|--------|----------|
| 1 | Ihram | الإحرام | Miqat |
| 2 | Tawaf al-Qudum | طواف القدوم | Kaaba |
| 3 | Sa'i | السعي | Safa-Marwah |
| 4 | Travel to Mina | الذهاب لمنى | Mina |
| 5 | Night in Mina | المبيت بمنى | Mina Tents |

#### Day 2: 9th Dhul Hijjah (يوم عرفة)
| # | Step | Arabic | Location |
|---|------|--------|----------|
| 6 | Wuquf at Arafat | الوقوف بعرفة | Mount Arafat |
| 7 | Travel to Muzdalifah | المغادرة لمزدلفة | Muzdalifah |
| 8 | Night under stars | المبيت بمزدلفة | Open plain |

#### Day 3: 10th Dhul Hijjah (يوم النحر - Eid!)
| # | Step | Arabic | Location |
|---|------|--------|----------|
| 9 | Rami Jamarat al-Aqaba | رمي جمرة العقبة | Jamarat |
| 10 | Sacrifice (Hady) | ذبح الهدي | Mina |
| 11 | Halq/Taqsir | الحلق/التقصير | Mina |
| 12 | Tawaf al-Ifadah | طواف الإفاضة | Kaaba |

#### Days 4-5: 11th-12th Dhul Hijjah (أيام التشريق)
| # | Step | Arabic | Location |
|---|------|--------|----------|
| 13 | Rami all 3 Jamarat | رمي الجمرات الثلاث | Jamarat |
| 14 | Tawaf al-Wada | طواف الوداع | Kaaba |

**Completion**: Certificate + Special Badge + Confetti

---

## 3D Scenes Design

### Scene 1: Miqat (Entry Point)
```
┌─────────────────────────────────────────┐
│  🏜️ Desert landscape                    │
│                                         │
│    ┌─────────┐                          │
│    │ MIQAT   │  <- Checkpoint building  │
│    │ ميقات   │                          │
│    └────┬────┘                          │
│         │                               │
│    👳 Avatar enters in Ihram            │
│                                         │
│  "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ"              │
└─────────────────────────────────────────┘
```

### Scene 2: Kaaba (Tawaf)
```
┌─────────────────────────────────────────┐
│           Masjid al-Haram               │
│                                         │
│         ╭─────────────────╮             │
│        ╱                   ╲            │
│       │    ┌─────────┐      │           │
│       │    │  ■■■■■  │      │  <- Kaaba │
│       │    │  ■■■■■  │      │           │
│       │    │  ■■■■■  │      │           │
│       │    └─────────┘      │           │
│       │  👳→ ↓              │  <- Avatar│
│       │      ←    ↑         │    walks  │
│        ╲                   ╱     around │
│         ╰─────────────────╯             │
│                                         │
│  Round: 3/7  🔄                         │
└─────────────────────────────────────────┘
```

### Scene 3: Safa & Marwah (Sa'i)
```
┌─────────────────────────────────────────┐
│                                         │
│  ⛰️ SAFA                    ⛰️ MARWAH   │
│    │                           │        │
│    │     👳 ──────────────►    │        │
│    │     (walking/jogging)     │        │
│    │                           │        │
│  ══════════════════════════════════     │
│         Green lights zone               │
│        (men jog here)                   │
│                                         │
│  Lap: 4/7  ➡️                           │
└─────────────────────────────────────────┘
```

### Scene 4: Mina (Tent City)
```
┌─────────────────────────────────────────┐
│           Mina Tent City                │
│                                         │
│    ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺         │
│    ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺         │
│    ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺ ⛺         │
│                                         │
│         👳 (resting/praying)            │
│                                         │
│    🌙 Night time - stars visible        │
└─────────────────────────────────────────┘
```

### Scene 5: Mount Arafat (Wuquf)
```
┌─────────────────────────────────────────┐
│              جبل عرفة                    │
│           Mount Arafat                  │
│                                         │
│              /\                         │
│             /  \                        │
│            /    \                       │
│           / 🤲👳 \   <- Making dua      │
│          /        \                     │
│         /__________\                    │
│                                         │
│  "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ"    │
│                                         │
│  ☀️ Afternoon sun                       │
└─────────────────────────────────────────┘
```

### Scene 6: Muzdalifah (Night Under Stars)
```
┌─────────────────────────────────────────┐
│  ✨ ⭐ ✨ ⭐ ✨ ⭐ ✨ ⭐ ✨ ⭐        │
│           🌙                            │
│                                         │
│    Open plain of Muzdalifah            │
│                                         │
│         👳 (collecting pebbles)         │
│        ○ ○ ○ ○ ○ ○ ○                   │
│                                         │
│    Collecting 49 pebbles for Rami      │
│                                         │
└─────────────────────────────────────────┘
```

### Scene 7: Jamarat (Stone Throwing)
```
┌─────────────────────────────────────────┐
│           Jamarat Bridge                │
│                                         │
│    ┌───┐     ┌───┐     ┌───┐           │
│    │ ● │     │ ● │     │ ● │           │
│    │   │     │   │     │   │           │
│    │ S │     │ M │     │ L │           │
│    └───┘     └───┘     └───┘           │
│   Small    Medium    Large             │
│                                         │
│         👳 ○──►  (throwing)             │
│                                         │
│  "بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ"            │
│                                         │
│  Stones: 5/7  🎯                        │
└─────────────────────────────────────────┘
```

---

## Technical Architecture

### Components Structure
```
src/components/kids/
├── HajjUmrahJourney/
│   ├── index.jsx                    # Main entry
│   ├── JourneySelector.jsx          # Choose Umrah or Hajj
│   ├── LanguageSelect.jsx           # EN/UR/AR
│   ├── UmrahJourney.jsx            # Umrah flow (FREE)
│   ├── HajjJourney.jsx             # Hajj flow (PREMIUM)
│   ├── StepCard.jsx                # Step details modal
│   ├── CompletionCertificate.jsx   # End certificate
│   │
│   ├── scenes3d/
│   │   ├── EmiratiAvatar.jsx       # 3D Avatar component
│   │   ├── KaabaScene.jsx          # Tawaf scene
│   │   ├── SafaMarwahScene.jsx     # Sa'i scene
│   │   ├── MinaScene.jsx           # Tent city
│   │   ├── ArafatScene.jsx         # Mountain scene
│   │   ├── MuzdalifahScene.jsx     # Night scene
│   │   ├── JamaratScene.jsx        # Stone throwing
│   │   └── MiqatScene.jsx          # Entry point
│   │
│   └── data/
│       ├── umrahSteps.js           # Umrah data
│       └── hajjSteps.js            # Hajj data
│
└── KidsModeMenu.jsx                # Add menu entries
```

### 3D Tech Stack
- **Three.js** (already used in project)
- **@react-three/fiber** for React integration
- **Simple geometric shapes** for avatar (cylinders, spheres)
- **GLTF models** for Kaaba, mountains (optional)

---

## Data Structure

```javascript
// umrahSteps.js
export const UMRAH_STEPS = [
  {
    id: 1,
    name: 'Ihram',
    nameAr: 'الإحرام',
    nameUr: 'احرام',

    location: 'Miqat',
    locationAr: 'الميقات',
    locationUr: 'میقات',

    emoji: '🧕',
    color: '#10B981',
    scene: 'miqat', // Which 3D scene to show

    // Avatar actions for this step
    avatarActions: ['walk', 'stand', 'raise_hands'],

    // Step explanation
    description: {
      en: 'Enter the sacred state of Ihram at the Miqat...',
      ur: 'میقات پر احرام کی پاک حالت میں داخل ہوں...',
      ar: 'الدخول في حالة الإحرام المقدسة عند الميقات...',
    },

    // What to do
    actions: {
      en: ['Make intention (Niyyah)', 'Wear Ihram clothes', 'Recite Talbiyah'],
      ur: ['نیت کریں', 'احرام کے کپڑے پہنیں', 'تلبیہ پڑھیں'],
      ar: ['النية', 'لبس ثياب الإحرام', 'التلبية'],
    },

    // Duas
    duas: [
      {
        name: 'Talbiyah',
        nameAr: 'التلبية',
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
        transliteration: 'Labbayk Allahumma labbayk, labbayk la shareeka laka labbayk, innal-hamda wan-ni\'mata laka wal-mulk, la shareeka lak',
        translation: {
          en: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise and blessings are Yours, and all sovereignty, You have no partner.',
          ur: 'میں حاضر ہوں اے اللہ میں حاضر ہوں، میں حاضر ہوں تیرا کوئی شریک نہیں میں حاضر ہوں۔ بے شک تمام حمد و نعمت تیری ہے اور بادشاہی بھی، تیرا کوئی شریک نہیں۔',
        },
        audioUrl: '/audio/duas/talbiyah.mp3',
      }
    ],

    // Authentic references
    references: [
      { source: 'Sahih Bukhari', number: '1524', chapter: 'Hajj' },
      { source: 'Sahih Muslim', number: '1181', chapter: 'Hajj' },
    ],

    // Rules/restrictions
    rules: {
      en: ['No cutting hair or nails', 'No perfume', 'No hunting', 'No marriage contracts'],
      ur: ['بال یا ناخن نہ کاٹیں', 'خوشبو نہ لگائیں', 'شکار نہ کریں', 'نکاح نہ کریں'],
      ar: ['لا قص للشعر أو الأظافر', 'لا طيب', 'لا صيد', 'لا نكاح'],
    },

    // Tips for kids
    kidsTip: {
      en: '💡 Tip: Ihram clothes are like a uniform - everyone looks the same, rich or poor!',
      ur: '💡 ٹپ: احرام کے کپڑے یونیفارم کی طرح ہیں - سب ایک جیسے لگتے ہیں، امیر ہو یا غریب!',
      ar: '💡 نصيحة: ثياب الإحرام كالزي الموحد - الجميع يبدون متشابهين!',
    },
  },
  // ... more steps
];
```

---

## UI Flow

### Main Menu Entry
```
┌─────────────────────────────────────────┐
│     🕋 Umrah & Hajj Journey             │
│                                         │
│   Learn the sacred pilgrimage           │
│   step by step with 3D animation        │
│                                         │
│   ┌─────────────┐ ┌─────────────┐      │
│   │   🕋        │ │   🕋        │      │
│   │   UMRAH     │ │   HAJJ      │      │
│   │   5 Steps   │ │   14 Steps  │      │
│   │   FREE ✓    │ │   PREMIUM 👑│      │
│   └─────────────┘ └─────────────┘      │
│                                         │
└─────────────────────────────────────────┘
```

### Journey Screen
```
┌─────────────────────────────────────────┐
│ ← Back   🕋 UMRAH Journey    🇵🇰 اردو   │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │      [3D SCENE HERE]           │   │
│  │                                 │   │
│  │      👳 Avatar doing Tawaf     │   │
│  │           around 🕋            │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Step 2 of 5: TAWAF                     │
│  طواف - Circumambulation                │
│                                         │
│  Round: 3/7  ████████░░░░ 43%          │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Walk around the Kaaba 7 times  │   │
│  │ in anti-clockwise direction... │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [🤲 Duas]  [📖 Details]  [🔊 Audio]   │
│                                         │
│       [◀️ Back]  [Next Step ▶️]         │
└─────────────────────────────────────────┘
```

---

## Avatar Animation States

```javascript
const AVATAR_ANIMATIONS = {
  // Basic
  idle: 'Standing still',
  walk: 'Walking forward',
  walk_fast: 'Jogging (for Sa\'i green zone)',

  // Prayer
  standing: 'Standing in prayer',
  ruku: 'Bowing',
  sujood: 'Prostration',
  sitting: 'Sitting between sujood',

  // Specific rituals
  tawaf: 'Walking around (circular path)',
  raising_hands: 'Making dua',
  throwing: 'Throwing stones (Jamarat)',
  drinking: 'Drinking Zamzam',
  touching: 'Touching Black Stone area',
  shaving: 'Head being shaved (Halq)',

  // Transitions
  enter_ihram: 'Putting on Ihram',
  exit_ihram: 'Changing to normal clothes',
};
```

---

## Implementation Phases

### Phase 1: Foundation (3-4 days)
1. ✅ Create data files (umrahSteps.js, hajjSteps.js)
2. ✅ Create JourneySelector component
3. ✅ Create basic UmrahJourney flow
4. ✅ Create StepCard component
5. ✅ Add to KidsModeMenu

### Phase 2: 3D Avatar & Scenes (5-7 days)
1. Create EmiratiAvatar.jsx (3D character)
2. Create KaabaScene.jsx (Tawaf)
3. Create SafaMarwahScene.jsx (Sa'i)
4. Create MiqatScene.jsx
5. Add avatar animations
6. Connect scenes to journey

### Phase 3: Hajj Premium (3-4 days)
1. Create HajjJourney.jsx
2. Create MinaScene, ArafatScene, MuzdalifahScene
3. Create JamaratScene (stone throwing)
4. Add premium gate for Hajj

### Phase 4: Polish (2-3 days)
1. Add audio narration (TTS)
2. Add progress tracking & celebrations
3. Add completion certificates
4. Add day/night visuals for Hajj
5. Testing & bug fixes

---

## Premium Integration

```javascript
// In JourneySelector.jsx
const handleSelectJourney = (type) => {
  if (type === 'hajj') {
    if (!user?.isPremium) {
      setShowPremiumGate(true);
      return;
    }
  }
  setSelectedJourney(type);
};
```

---

## Menu Integration

Add to `SPECIAL_JOURNEYS` in `KidsModeMenu.jsx`:

```javascript
{
  id: 'umrah-hajj',
  name: "Umrah & Hajj",
  nameAr: 'العمرة والحج',
  emoji: '🕋',
  description: 'Learn pilgrimage rituals with 3D animation!',
  gradient: 'from-amber-400 via-yellow-500 to-orange-500',
  shadowColor: 'shadow-amber-500/50',
  glowColor: 'amber',
  bgPattern: 'kaaba',
  mode: 'hajj-umrah',
  premium: false, // Entry is free, Hajj inside is premium
},
```

---

## Estimated Timeline

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Phase 1 | 3-4 days | Basic Umrah journey (2D with data) |
| Phase 2 | 5-7 days | 3D Avatar + main scenes |
| Phase 3 | 3-4 days | Full Hajj journey |
| Phase 4 | 2-3 days | Audio, polish, certificates |

**Total: 13-18 days**

---

## Summary

| Feature | Umrah | Hajj |
|---------|-------|------|
| Steps | 5 | 14 |
| Price | FREE | PREMIUM |
| Days | 1 | 5 |
| 3D Scenes | 4 | 8 |
| Certificate | Yes | Yes (Special) |
| Avatar | Emirati 3D | Emirati 3D |
| Languages | EN/UR/AR | EN/UR/AR |
| Audio | Yes | Yes |

---

## Ready to Start?

Shall I begin implementation with:
1. **Data files** (umrahSteps.js, hajjSteps.js) with all authentic content
2. **Basic journey components** (selector, flow, step cards)
3. **Then add 3D scenes** progressively

Let me know if you want any changes to this plan!
