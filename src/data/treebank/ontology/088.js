/**
 * Surah Al-Ghashiyah (88) - Ontology of Quranic Concepts
 * The Overwhelming Event
 * Theme: Day of Judgment contrasts, signs in creation, Prophet as reminder
 */

export const ONTOLOGY = {
  surahId: 88,
  surahName: "Al-Ghashiyah",
  surahNameArabic: "الغاشية",
  revelationType: "Makki",
  totalAyahs: 26,

  categories: {
    overwhelmingEvent: {
      name: "The Overwhelming Event",
      nameArabic: "الغاشية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "الْغَاشِيَةِ", meaning: "The Overwhelming", explanation: "Day that 'covers' everything in its terror. From ghashiya (to cover/overwhelm). Nothing escapes it.", verseRef: "88:1" }
      ]
    },

    facesOfDoom: {
      name: "Faces of the Doomed",
      nameArabic: "وجوه العذاب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وُجُوهٌ خَاشِعَةٌ", meaning: "Humbled faces", explanation: "Khushu' forced on them - humility they refused in life", verseRef: "88:2" },
        { term: "عَامِلَةٌ نَّاصِبَةٌ", meaning: "Working, exhausted", explanation: "Worked hard in dunya on wrong path, now exhausted in punishment", verseRef: "88:3" },
        { term: "تَصْلَىٰ نَارًا حَامِيَةً", meaning: "Burn in hot Fire", explanation: "Haamiyah = reached extreme heat. Maximum burning", verseRef: "88:4" },
        { term: "عَيْنٍ آنِيَةٍ", meaning: "Boiling spring", explanation: "Drink from spring at maximum boiling - contrast to Paradise springs", verseRef: "88:5" },
        { term: "ضَرِيعٍ", meaning: "Thorny plant food", explanation: "Bitter, poisonous plant - no nourishment, no satisfaction", verseRef: "88:6-7" }
      ]
    },

    facesOfBliss: {
      name: "Faces of the Blessed",
      nameArabic: "وجوه النعيم",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "وُجُوهٌ نَّاعِمَةٌ", meaning: "Radiant faces", explanation: "Na'imah from na'eem (bliss) - faces showing inner joy", verseRef: "88:8" },
        { term: "لِّسَعْيِهَا رَاضِيَةٌ", meaning: "Pleased with their effort", explanation: "Sa'y (striving) paid off - satisfaction with life's work", verseRef: "88:9" },
        { term: "جَنَّةٍ عَالِيَةٍ", meaning: "Elevated Garden", explanation: "High in rank and physical location", verseRef: "88:10" },
        { term: "لَا تَسْمَعُ لَاغِيَةً", meaning: "No idle talk", explanation: "Paradise free from laghw - all speech meaningful", verseRef: "88:11" },
        { term: "عَيْنٌ جَارِيَةٌ", meaning: "Flowing spring", explanation: "Contrast with boiling spring of Hell - cool, refreshing", verseRef: "88:12" },
        { term: "سُرُرٌ مَّرْفُوعَةٌ", meaning: "Elevated couches", explanation: "Thrones raised high - honor and comfort", verseRef: "88:13" },
        { term: "أَكْوَابٌ مَّوْضُوعَةٌ", meaning: "Cups ready", explanation: "Service prepared - no waiting, no effort needed", verseRef: "88:14" },
        { term: "نَمَارِقُ مَصْفُوفَةٌ", meaning: "Cushions lined up", explanation: "Luxury seating arranged beautifully", verseRef: "88:15" },
        { term: "زَرَابِيُّ مَبْثُوثَةٌ", meaning: "Carpets spread", explanation: "Rich carpets covering the ground - complete comfort", verseRef: "88:16" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "الْإِبِلِ كَيْفَ خُلِقَتْ", meaning: "Camels - how created", explanation: "Desert marvel: water storage, wide feet, eyelashes, kneeling ability. Arabs knew them well", verseRef: "88:17" },
        { term: "السَّمَاءِ كَيْفَ رُفِعَتْ", meaning: "Sky - how raised", explanation: "Suspended without pillars, vast expanse above", verseRef: "88:18" },
        { term: "الْجِبَالِ كَيْفَ نُصِبَتْ", meaning: "Mountains - how fixed", explanation: "Stabilizing pegs in the earth, majestic and immovable", verseRef: "88:19" },
        { term: "الْأَرْضِ كَيْفَ سُطِحَتْ", meaning: "Earth - how spread", explanation: "Leveled for habitation, made suitable for life", verseRef: "88:20" }
      ]
    },

    prophetsRole: {
      name: "The Prophet's Role",
      nameArabic: "دور النبي",
      color: '#8B5CF6',
      icon: 'MessageCircle',
      concepts: [
        { term: "فَذَكِّرْ", meaning: "So remind", explanation: "Command to remind - primary prophetic function", verseRef: "88:21" },
        { term: "إِنَّمَا أَنتَ مُذَكِّرٌ", meaning: "You are only a reminder", explanation: "Not a controller or tyrant - just one who reminds", verseRef: "88:21" },
        { term: "لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ", meaning: "Not a controller over them", explanation: "Musaytir = tyrant/dictator. Prophet doesn't force belief", verseRef: "88:22" }
      ]
    },

    divineJustice: {
      name: "Divine Justice",
      nameArabic: "العدل الإلهي",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "الْعَذَابَ الْأَكْبَرَ", meaning: "The greatest punishment", explanation: "For those who turn away AND disbelieve - maximum consequence", verseRef: "88:24" },
        { term: "إِلَيْنَا إِيَابَهُمْ", meaning: "To Us is their return", explanation: "All return to Allah - inevitable destination", verseRef: "88:25" },
        { term: "عَلَيْنَا حِسَابَهُمْ", meaning: "Upon Us is their account", explanation: "Allah takes responsibility for judgment - no escape", verseRef: "88:26" }
      ]
    }
  },

  relationships: [
    { from: "وجوه خاشعة", to: "وجوه ناعمة", type: "antithesis", description: "Humbled vs Radiant - opposite fates" },
    { from: "عين آنية", to: "عين جارية", type: "antithesis", description: "Boiling vs Flowing springs" },
    { from: "عاملة ناصبة", to: "لسعيها راضية", type: "antithesis", description: "Exhausted toil vs Satisfied effort" },
    { from: "آيات الخلق", to: "فذكر", type: "causation", description: "Signs should lead to reminder" },
    { from: "مذكر", to: "ليس بمصيطر", type: "clarification", description: "Defines prophetic role's limits" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Overwhelming Day", verses: "88:1", description: "Opening question - have you heard of it?" },
      { stage: 2, theme: "Faces of Doom", verses: "88:2-7", description: "Humbled, exhausted, burning, poisonous food" },
      { stage: 3, theme: "Faces of Bliss", verses: "88:8-16", description: "Radiant, satisfied, Paradise luxuries" },
      { stage: 4, theme: "Signs in Creation", verses: "88:17-20", description: "Camels, sky, mountains, earth" },
      { stage: 5, theme: "Prophet's Role", verses: "88:21-22", description: "Reminder, not controller" },
      { stage: 6, theme: "Divine Judgment", verses: "88:23-26", description: "Punishment, return, accounting" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Work for the right cause", how: "Don't be 'aamilah naasibah' - exhausted on wrong path. Align effort with akhirah", verse: "88:3" },
      { principle: "Reflect on creation", how: "Look at camels, sky, mountains, earth - see Allah's design and power", verse: "88:17-20" },
      { principle: "Remind gently", how: "Be mudhakkir like the Prophet - remind without forcing or controlling", verse: "88:21-22" },
      { principle: "Seek Paradise's peace", how: "Work for jannah where there's no laghw - meaningful, beautiful speech only", verse: "88:11" }
    ]
  },

  uniqueInsight: {
    title: "The Contrast of Springs",
    insight: "The surah brilliantly contrasts two springs: 'ayn aaniyah (boiling spring - 88:5) for the doomed vs 'ayn jaariyah (flowing spring - 88:12) for the blessed. Same word ('ayn), opposite states. What you worked for in dunya determines which spring you drink from. The one who was 'aamilah naasibah' (working exhausted) on the wrong path drinks boiling water. The one who was 'li-sa'yihaa raadiyah' (pleased with her effort) drinks cool flowing water. The surah asks: which spring are you working toward?"
  },

  comparisonTable: {
    title: "Two Fates Compared",
    headers: ["Aspect", "Faces of Doom", "Faces of Bliss"],
    rows: [
      { aspect: "Expression", doom: "خَاشِعَةٌ (humbled)", bliss: "نَّاعِمَةٌ (radiant)" },
      { aspect: "Work Result", doom: "عَامِلَةٌ نَّاصِبَةٌ (exhausted)", bliss: "لِّسَعْيِهَا رَاضِيَةٌ (satisfied)" },
      { aspect: "Fire/Location", doom: "نَارًا حَامِيَةً (hot Fire)", bliss: "جَنَّةٍ عَالِيَةٍ (elevated Garden)" },
      { aspect: "Drink", doom: "عَيْنٍ آنِيَةٍ (boiling)", bliss: "عَيْنٌ جَارِيَةٌ (flowing)" },
      { aspect: "Food", doom: "ضَرِيعٍ (thorns)", bliss: "Implied: pure food" },
      { aspect: "Speech", doom: "N/A", bliss: "لَا لَاغِيَةً (no idle talk)" }
    ]
  }
};

export default ONTOLOGY;
