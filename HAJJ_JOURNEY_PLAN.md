# Hajj Journey - Interactive 2D/3D Feature Plan

## Overview
An interactive, animated journey through all Hajj rituals - educational for both kids and adults with authentic Islamic references.

---

## Visual Approach Options

### Option A: 2D Animated Journey (Recommended)
Similar to Prophet's Life Journey with motorbike - but with **pilgrim walking/bus** through Mecca/Mina/Arafat
- **Pros**: Faster to build, works on all devices, smooth animations
- **Style**: Beautiful parallax scrolling with Islamic architecture
- **Transport**: Walking pilgrim silhouette or bus moving between locations

### Option B: 3D Interactive Map
Bird's eye view 3D map of Hajj locations using Three.js
- **Pros**: More immersive, impressive visuals
- **Cons**: Heavier, may lag on mobile, longer dev time

### Option C: Hybrid (2.5D)
2D journey with 3D popup scenes at each location
- Each ritual opens a 3D animated scene (like existing Dua scenes)

**Recommendation**: Start with **Option A (2D)** with possibility to add 3D scenes later

---

## Hajj Rituals (14 Steps) - With Authentic Sources

### Day 1: 8th Dhul Hijjah (Yawm al-Tarwiyah)

| # | Ritual | Arabic | Location | Source |
|---|--------|--------|----------|--------|
| 1 | **Ihram** | الإحرام | Miqat | Sahih Bukhari 1524, Sahih Muslim 1181 |
| 2 | **Tawaf al-Qudum** | طواف القدوم | Masjid al-Haram | Sahih Bukhari 1614, Sahih Muslim 1235 |
| 3 | **Sa'i** | السعي | Safa & Marwah | Sahih Bukhari 1643, Quran 2:158 |
| 4 | **Going to Mina** | الذهاب إلى منى | Mina | Sahih Muslim 1218 |

### Day 2: 9th Dhul Hijjah (Yawm Arafah)

| # | Ritual | Arabic | Location | Source |
|---|--------|--------|----------|--------|
| 5 | **Wuquf at Arafat** | الوقوف بعرفة | Mount Arafat | Sahih Muslim 1218, Tirmidhi 889 |
| 6 | **Muzdalifah** | المبيت بمزدلفة | Muzdalifah | Sahih Bukhari 1683, Sahih Muslim 1218 |

### Day 3: 10th Dhul Hijjah (Yawm al-Nahr - Eid)

| # | Ritual | Arabic | Location | Source |
|---|--------|--------|----------|--------|
| 7 | **Rami al-Jamarat** | رمي الجمرات | Jamarat Bridge | Sahih Bukhari 1746, Sahih Muslim 1297 |
| 8 | **Sacrifice (Hady)** | الهدي | Mina | Quran 22:36, Sahih Bukhari 1718 |
| 9 | **Halq/Taqsir** | الحلق/التقصير | Mina | Sahih Bukhari 1726, Sahih Muslim 1301 |
| 10 | **Tawaf al-Ifadah** | طواف الإفاضة | Masjid al-Haram | Sahih Bukhari 1755, Quran 22:29 |

### Days 4-5: 11th-12th Dhul Hijjah (Ayyam al-Tashreeq)

| # | Ritual | Arabic | Location | Source |
|---|--------|--------|----------|--------|
| 11 | **Rami (Day 2)** | رمي اليوم الثاني | Jamarat Bridge | Sahih Muslim 1297 |
| 12 | **Rami (Day 3)** | رمي اليوم الثالث | Jamarat Bridge | Sahih Muslim 1297 |
| 13 | **Staying in Mina** | المبيت بمنى | Mina | Sahih Bukhari 1742 |

### Final

| # | Ritual | Arabic | Location | Source |
|---|--------|--------|----------|--------|
| 14 | **Tawaf al-Wada** | طواف الوداع | Masjid al-Haram | Sahih Bukhari 1755, Sahih Muslim 1327 |

---

## Visual Locations (2D Scenes)

```
Miqat → Makkah (Kaaba) → Safa/Marwah → Mina → Arafat → Muzdalifah → Mina (Jamarat) → Makkah (Final)
```

### Scene Design

1. **Miqat** - Desert checkpoint with pilgrims in Ihram
2. **Masjid al-Haram** - Kaaba with pilgrims doing Tawaf
3. **Safa & Marwah** - Hills with pilgrims walking between
4. **Mina** - White tent city
5. **Mount Arafat** - Mountain with pilgrims making dua
6. **Muzdalifah** - Open plain under stars
7. **Jamarat** - Bridge with pillars
8. **Kaaba (Final)** - Farewell Tawaf scene

---

## Data Structure

```javascript
// src/components/kids/data/hajjData.js

export const HAJJ_STEPS = [
  {
    id: 1,
    name: 'Ihram',
    nameAr: 'الإحرام',
    nameUr: 'احرام',
    day: 1,
    dayName: 'Yawm al-Tarwiyah',
    dayNameAr: 'يوم التروية',
    location: 'Miqat',
    locationAr: 'الميقات',
    emoji: '🧕',
    color: '#10B981',
    coordinates: { lat: 21.4225, lng: 39.8262 }, // For map

    // Duas for this step
    duas: [
      {
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ...',
        transliteration: 'Labbayk Allahumma labbayk...',
        translation: {
          en: 'Here I am, O Allah, here I am...',
          ur: 'حاضر ہوں اے اللہ حاضر ہوں...',
        }
      }
    ],

    // Story/explanation
    story: {
      en: {
        title: 'Entering the Sacred State',
        parts: [
          'Ihram is the special state of purity...',
          'Pilgrims wear simple white clothes...',
        ],
        rules: ['No cutting hair/nails', 'No perfume', 'No hunting'],
      },
      ur: {
        title: 'احرام باندھنا',
        parts: [...],
        rules: [...],
      },
      ar: {
        title: 'الدخول في الإحرام',
        parts: [...],
        rules: [...],
      }
    },

    // Authentic references
    references: [
      { source: 'Sahih Bukhari', number: '1524' },
      { source: 'Sahih Muslim', number: '1181' },
    ],
  },
  // ... more steps
];
```

---

## Components Structure

```
src/components/kids/
├── HajjJourney.jsx              # Main journey component
├── HajjLanguageSelect.jsx       # Language selection screen
├── HajjStepCard.jsx             # Detailed step info modal
├── HajjMap.jsx                  # Optional: Interactive map view
├── components/
│   ├── HajjBackground.jsx       # Parallax desert/city background
│   ├── Pilgrim.jsx              # Animated pilgrim figure
│   ├── HajjLocation.jsx         # Location marker (like MilestoneStation)
│   └── scenes3d/
│       ├── KaabaScene.jsx       # 3D Kaaba for Tawaf
│       ├── ArafatScene.jsx      # 3D Mount Arafat
│       └── JamaratScene.jsx     # 3D Jamarat pillars
└── data/
    └── hajjData.js              # All Hajj steps data
```

---

## UI Flow

```
┌─────────────────────────────────────────────────────┐
│                  Language Select                     │
│         🇬🇧 English  🇵🇰 Urdu  🇸🇦 Arabic            │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  ← Back    🕋 Hajj Journey    Day 1/5  ⭐ 40        │
├─────────────────────────────────────────────────────┤
│                                                      │
│   [Desert Background with Parallax Scrolling]       │
│                                                      │
│   🕋        🏔️        ⛺        🌙        🕋        │
│  Kaaba   Arafat    Mina    Muzdalifah  Kaaba       │
│                                                      │
│              🚶 ← Pilgrim (animated)                │
│   ═══════════════════════════════════════          │
│                                                      │
├─────────────────────────────────────────────────────┤
│   ◀️                                           ▶️   │
│              [ Step 3 of 14 ]                       │
└─────────────────────────────────────────────────────┘
```

---

## Step Card UI (When tapped)

```
┌─────────────────────────────────────────────────────┐
│  ✕                           🕋 Step 2 of 14        │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ╭──────────────────────────────────────────╮       │
│  │            طَوَافُ القُدُومِ                │       │
│  │         Tawaf al-Qudum                   │       │
│  │       (Arrival Circumambulation)          │       │
│  ╰──────────────────────────────────────────╯       │
│                                                      │
│  📍 Masjid al-Haram, Makkah                         │
│  📅 8th Dhul Hijjah                                 │
│                                                      │
│  ┌────────────────────────────────────────┐         │
│  │  Pilgrims walk around the Kaaba       │         │
│  │  7 times in an anti-clockwise         │         │
│  │  direction, starting from the         │         │
│  │  Black Stone (Hajar al-Aswad)...      │         │
│  └────────────────────────────────────────┘         │
│                                                      │
│  🤲 Dua:                                            │
│  ┌────────────────────────────────────────┐         │
│  │ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً...      │         │
│  └────────────────────────────────────────┘         │
│                                                      │
│  📚 References:                                      │
│  • Sahih Bukhari 1614                               │
│  • Sahih Muslim 1235                                │
│                                                      │
│        [◀️ Previous]  🔊 Listen  [Next ▶️]          │
└─────────────────────────────────────────────────────┘
```

---

## Features

### Core Features
- ✅ 14 Hajj steps with authentic sources
- ✅ Multilingual (English, Urdu, Arabic)
- ✅ Animated pilgrim walking between locations
- ✅ Beautiful parallax desert/city backgrounds
- ✅ Audio narration (TTS)
- ✅ Duas for each step with Arabic + transliteration
- ✅ Progress tracking & completion celebrations

### Enhanced Features (Phase 2)
- 🎯 3D Kaaba scene for Tawaf visualization
- 🎯 3D Jamarat stone-throwing animation
- 🎯 Interactive map view (bird's eye)
- 🎯 Day/Night mode (matches actual Hajj timing)
- 🎯 Quiz mode after completion
- 🎯 Certificate on completion

---

## Implementation Phases

### Phase 1: Core Journey (Week 1)
1. Create `hajjData.js` with all 14 steps
2. Create `HajjJourney.jsx` (main component)
3. Create `HajjBackground.jsx` (parallax scenes)
4. Create `Pilgrim.jsx` (animated figure)
5. Create `HajjStepCard.jsx` (step details modal)
6. Add to KidsModeMenu

### Phase 2: Polish (Week 2)
1. Add progress tracking & celebrations
2. Add audio narration
3. Add duas with proper Arabic rendering
4. Add day/night visual changes

### Phase 3: 3D Scenes (Optional)
1. 3D Kaaba scene for Tawaf
2. 3D Mount Arafat scene
3. 3D Jamarat throwing scene

---

## Menu Integration

Add to `SPECIAL_JOURNEYS` in `KidsModeMenu.jsx`:

```javascript
{
  id: 'hajj-journey',
  name: "Hajj Journey",
  nameAr: 'رحلة الحج',
  emoji: '🕋',
  description: 'Learn all Hajj rituals step by step!',
  gradient: 'from-amber-400 via-yellow-500 to-orange-500',
  shadowColor: 'shadow-amber-500/50',
  glowColor: 'amber',
  bgPattern: 'desert',
  mode: 'hajj',
  premium: false,
}
```

---

## Questions for User

1. **Target audience**: Kids only, or adults too?
2. **Depth**: Simple overview or detailed fiqh rules?
3. **3D priority**: Should we start with 3D or keep 2D first?
4. **Quiz**: Add quiz at the end?
5. **Premium**: Free or premium feature?

---

## Estimated Timeline

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Phase 1 | 3-4 days | Working 2D journey with all steps |
| Phase 2 | 2-3 days | Audio, progress, polish |
| Phase 3 | 3-5 days | 3D scenes (optional) |

**Total: 5-12 days** depending on scope
