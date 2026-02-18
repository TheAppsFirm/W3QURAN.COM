/**
 * Surah Al-Qari'ah (101) - Ontology of Quranic Concepts
 * The Striking Calamity
 * Theme: Day of Judgment and weighing of deeds
 */

export const ONTOLOGY = {
  surahId: 101,
  surahName: "Al-Qari'ah",
  surahNameArabic: "القارعة",
  revelationType: "Makki",
  totalAyahs: 11,

  categories: {
    namesOfJudgmentDay: {
      name: "Names of Judgment Day",
      nameArabic: "أسماء يوم القيامة",
      color: '#F59E0B',
      icon: 'AlertTriangle',
      description: "القارعة is one of 50+ Quranic names for the Day of Judgment",
      concepts: [
        {
          term: "القَارِعَة",
          transliteration: "Al-Qaari'ah",
          meaning: "The Striking Calamity / The Knocker",
          explanation: "From قَرَعَ (to knock/strike). It strikes hearts with terror, strikes the earth with destruction.",
          verseRef: "101:1-3",
          otherNames: ["الحَاقَّة (The Reality)", "القِيَامَة (The Resurrection)", "الصَّاخَّة (The Deafening Blast)", "الطَّامَّة الكُبْرَى (The Greatest Catastrophe)"]
        }
      ]
    },

    cosmicChaos: {
      name: "Cosmic Chaos",
      nameArabic: "الفوضى الكونية",
      color: '#EF4444',
      icon: 'Globe',
      description: "Vivid imagery of universal destruction",
      concepts: [
        {
          term: "النَّاسُ كَالفَرَاشِ المَبْثُوث",
          transliteration: "An-Naas kal-Faraash al-Mabthooth",
          meaning: "People like scattered moths",
          explanation: "Moths are confused, directionless, attracted to fire (their destruction). People will be similarly disoriented.",
          verseRef: "101:4",
          imagery: "Billions of humans scattered like insects around a light"
        },
        {
          term: "الجِبَالُ كَالعِهْنِ المَنفُوش",
          transliteration: "Al-Jibaal kal-'Ihn al-Manfoosh",
          meaning: "Mountains like fluffed wool",
          explanation: "عِهْن = colored wool. Mountains of various colors become light as carded wool. Complete transformation of the solid to the ethereal.",
          verseRef: "101:5",
          imagery: "Massive rock formations becoming lighter than air"
        }
      ]
    },

    divineJudgment: {
      name: "Divine Judgment",
      nameArabic: "الحساب الإلهي",
      color: '#8B5CF6',
      icon: 'Scale',
      description: "The weighing of deeds",
      concepts: [
        {
          term: "المَوَازِين",
          transliteration: "Al-Mawaazeen",
          meaning: "The Scales",
          explanation: "Plural of مِيزان (scale). Real scales that weigh deeds - their weight determined by sincerity, not quantity.",
          verseRef: "101:6, 8",
          theological: "Ahl as-Sunnah believe in literal scales on Judgment Day"
        },
        {
          term: "ثَقُلَت vs خَفَّت",
          transliteration: "Thaqulat vs Khaffat",
          meaning: "Heavy vs Light",
          explanation: "Two possible outcomes: scales heavy with good deeds → Paradise; scales light → Hell.",
          verseRef: "101:6-9"
        }
      ]
    },

    rewards: {
      name: "Eternal Destinations",
      nameArabic: "المآلات الأبدية",
      color: '#10B981',
      icon: 'Compass',
      description: "The two final abodes",
      concepts: [
        {
          term: "عِيشَةٌ رَاضِيَة",
          transliteration: "'Eeshatan Raadiyah",
          meaning: "A pleasant/satisfying life",
          explanation: "Active participle - a life that inherently satisfies. Paradise described through its quality of living.",
          verseRef: "101:7"
        },
        {
          term: "هَاوِيَة",
          transliteration: "Haawiyah",
          meaning: "The Abyss / Bottomless Pit",
          explanation: "From هَوَى (to fall). A pit one falls into endlessly. One of the names/levels of Hell.",
          verseRef: "101:9-11"
        },
        {
          term: "نَارٌ حَامِيَة",
          transliteration: "Naarun Haamiyah",
          meaning: "Blazing hot fire",
          explanation: "The final description - a fire of extreme heat. The surah ends with this terrifying image.",
          verseRef: "101:11"
        }
      ]
    }
  },

  relationships: [
    {
      from: "القَارِعَة",
      to: "الفَرَاش المَبْثُوث",
      type: "effect",
      description: "The Striking causes people to scatter",
      explanation: "The calamity is so overwhelming that humanity becomes disoriented"
    },
    {
      from: "القَارِعَة",
      to: "العِهْن المَنفُوش",
      type: "effect",
      description: "The Striking transforms mountains",
      explanation: "Even the most solid things become light and scattered"
    },
    {
      from: "المَوَازِين ثَقُلَت",
      to: "عِيشَةٌ رَاضِيَة",
      type: "causation",
      description: "Heavy scales lead to Paradise",
      explanation: "Good deeds outweighing bad = eternal bliss"
    },
    {
      from: "المَوَازِين خَفَّت",
      to: "هَاوِيَة",
      type: "causation",
      description: "Light scales lead to the Abyss",
      explanation: "Lack of good deeds = eternal torment"
    }
  ],

  thematicFlow: {
    title: "From Announcement to Destination",
    titleArabic: "من الإعلان إلى المصير",
    description: "The surah moves from naming the Day to describing its outcomes",
    stages: [
      {
        stage: 1,
        theme: "The Name",
        verses: "101:1-3",
        description: "القارعة announced, then questioned - building suspense"
      },
      {
        stage: 2,
        theme: "The Scene",
        verses: "101:4-5",
        description: "Vivid imagery of chaos - people and mountains transformed"
      },
      {
        stage: 3,
        theme: "The Judgment",
        verses: "101:6-9",
        description: "Two groups divided by the weight of their scales"
      },
      {
        stage: 4,
        theme: "The Punishment",
        verses: "101:10-11",
        description: "هاوية defined as blazing fire"
      }
    ]
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        name: "Opening Suspense",
        description: "القَارِعَة (v.1) → مَا القَارِعَة (v.2) → وَمَا أَدْرَاكَ (v.3)",
        effect: "Three levels of building anticipation before explanation"
      },
      {
        name: "Contrasting Similes",
        description: "People like moths (v.4) vs Mountains like wool (v.5)",
        effect: "Living beings become insect-like; solid rock becomes ethereal"
      },
      {
        name: "The أُمّ Idiom",
        description: "فَأُمُّهُ هَاوِيَة - 'His mother is the Abyss'",
        effect: "Dark irony: where one seeks refuge (mother) becomes source of torment"
      },
      {
        name: "Sound Symmetry",
        description: "ثَقُلَت/خَفَّت (heavy/light) - phonetic contrast matching meaning",
        effect: "Heavy word sounds heavier; light word sounds lighter"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 99,
        name: "Az-Zalzalah",
        relation: "Both describe earth's transformation on Judgment Day",
        sharedTheme: "Cosmic upheaval"
      },
      {
        surah: 81,
        name: "At-Takwir",
        relation: "More detailed description of cosmic chaos",
        sharedTheme: "Sun folded, stars scattered"
      },
      {
        surah: 82,
        name: "Al-Infitar",
        relation: "Sky torn apart, seas burst forth",
        sharedTheme: "Universal destruction"
      },
      {
        surah: 21,
        name: "Al-Anbiya",
        verse: 47,
        relation: "Describes the scales in detail",
        sharedTheme: "مَوَازِين القِسْط - scales of justice"
      },
      {
        surah: 23,
        name: "Al-Mu'minun",
        verses: "102-103",
        relation: "Heavy scales = success, light scales = losers",
        sharedTheme: "Weighing of deeds"
      }
    ]
  },

  hadith: [
    {
      arabic: "كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم",
      english: "Two words light on the tongue, heavy in the scales, beloved to the Most Merciful: SubhanAllahi wa bihamdihi, SubhanAllahil-'Adheem",
      source: "Sahih Bukhari & Muslim",
      relevance: "Shows how to make scales heavy"
    },
    {
      arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ",
      english: "Purity is half of faith, and Alhamdulillah fills the scale",
      source: "Sahih Muslim",
      relevance: "Simple actions that weigh heavily"
    }
  ],

  practicalApplication: {
    title: "Preparing for القارعة",
    applications: [
      {
        principle: "Visualize the Day",
        action: "Regularly contemplate the scene described - scattered people, dissolved mountains",
        verse: "101:4-5"
      },
      {
        principle: "Weigh your deeds now",
        action: "Daily self-accounting (مُحاسبة) - which actions are adding weight?",
        verse: "101:6-8"
      },
      {
        principle: "Focus on quality",
        action: "Sincerity (إخلاص) makes deeds heavy, not quantity",
        verse: "Related hadith"
      },
      {
        principle: "Fear the lightness",
        action: "Avoid sins that make scales light - they may seem small but add up",
        verse: "101:8-9"
      }
    ]
  },

  uniqueInsight: {
    title: "The Mother Paradox",
    insight: "The phrase فَأُمُّهُ هَاوِيَة ('his mother is the Abyss') contains profound irony. In Arabic, one's 'mother' represents ultimate refuge - where you return in distress. But for the one with light scales, their 'mother' (refuge) is the bottomless pit of Hell. The very concept of comfort is inverted. This person sought refuge in worldly things (wealth, status), and their ultimate refuge reflects that hollowness.",
    modernRelevance: "What do we run to for comfort? If it's not Allah, our 'mother' may be our destruction."
  },

  comparisonTable: {
    title: "Two Destinies",
    headers: ["Aspect", "Heavy Scales", "Light Scales"],
    rows: [
      {
        aspect: "Condition",
        heavy: "ثَقُلَت مَوَازِينُهُ",
        light: "خَفَّت مَوَازِينُهُ"
      },
      {
        aspect: "Cause",
        heavy: "Good deeds outweigh bad",
        light: "Bad deeds outweigh good"
      },
      {
        aspect: "Destination",
        heavy: "عِيشَةٌ رَاضِيَة (Paradise)",
        light: "هَاوِيَة (Abyss)"
      },
      {
        aspect: "Description",
        heavy: "Satisfying life",
        light: "نَارٌ حَامِيَة (Blazing fire)"
      }
    ]
  },

  imageryAnalysis: {
    title: "Visual Power of the Surah",
    images: [
      {
        image: "الفَرَاش المَبْثُوث (scattered moths)",
        analysis: "Moths fly towards light (fire) - their attraction is their destruction. Similarly, humans will be drawn to judgment they tried to avoid."
      },
      {
        image: "العِهْن المَنفُوش (fluffed colored wool)",
        analysis: "عِهْن specifically means COLORED wool. Mountains of different colors (brown, red, black) becoming like multicolored fluff - beauty in destruction."
      },
      {
        image: "هَاوِيَة (bottomless pit)",
        analysis: "Active participle - constantly falling. There is no bottom, no end to the falling. Eternal descent."
      }
    ]
  }
};

export default ONTOLOGY;
