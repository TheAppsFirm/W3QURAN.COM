/**
 * Surah Al-Fil (105) - Ontology of Quranic Concepts
 * The Elephant
 * Theme: Divine protection of the Ka'bah
 */

export const ONTOLOGY = {
  surahId: 105,
  surahName: "Al-Fil",
  surahNameArabic: "الفيل",
  revelationType: "Makki",
  totalAyahs: 5,

  categories: {
    divineIntervention: {
      name: "Divine Intervention",
      nameArabic: "التدخل الإلهي",
      color: '#F59E0B',
      icon: 'Star',
      description: "Allah's direct action to protect His House",
      concepts: [
        {
          term: "فَعَلَ رَبُّك",
          transliteration: "Fa'ala Rabbuk",
          meaning: "What your Lord did",
          explanation: "Emphasizes Allah's personal, active intervention - not a natural disaster but deliberate divine action",
          verseRef: "105:1"
        },
        {
          term: "أَرْسَلَ",
          transliteration: "Arsala",
          meaning: "He sent",
          explanation: "Same word used for sending Prophets - these birds were divine messengers of destruction",
          verseRef: "105:3"
        }
      ]
    },

    enemiesOfKaaba: {
      name: "Enemies of the Ka'bah",
      nameArabic: "أعداء الكعبة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "Those who attempted to destroy Allah's House",
      concepts: [
        {
          term: "أَصْحَاب الفِيل",
          transliteration: "Ashaab al-Feel",
          meaning: "Companions/People of the Elephant",
          explanation: "Abraha al-Ashram's Abyssinian army that came to destroy Ka'bah in the Year of the Elephant (570 CE)",
          verseRef: "105:1"
        },
        {
          term: "كَيْدَهُم",
          transliteration: "Kaydahum",
          meaning: "Their plot/scheme",
          explanation: "Their evil plan to destroy Ka'bah and redirect pilgrimage to Abraha's church in Yemen",
          verseRef: "105:2"
        }
      ]
    },

    divineArmy: {
      name: "Divine Army",
      nameArabic: "جند الله",
      color: '#8B5CF6',
      icon: 'Shield',
      description: "The miraculous force sent to destroy the army",
      concepts: [
        {
          term: "طَيْرًا أَبَابِيل",
          transliteration: "Tayran Abaabeel",
          meaning: "Birds in successive flocks",
          explanation: "Wave after wave of birds - أَبَابِيل is unique in Quran, emphasizing continuous, overwhelming attack",
          verseRef: "105:3"
        },
        {
          term: "حِجَارَة مِن سِجِّيل",
          transliteration: "Hijaarah min Sijjeel",
          meaning: "Stones of baked/hard clay",
          explanation: "Divine projectiles - سِجِّيل used also for punishment of Lut's people. Not ordinary stones.",
          verseRef: "105:4"
        }
      ]
    },

    completeDestruction: {
      name: "Complete Destruction",
      nameArabic: "الدمار الشامل",
      color: '#DC2626',
      icon: 'Zap',
      description: "The utter annihilation of the army",
      concepts: [
        {
          term: "تَضْلِيل",
          transliteration: "Tadleel",
          meaning: "Misguidance / ruin",
          explanation: "Form II intensive - their plan didn't just fail, it led to their complete destruction",
          verseRef: "105:2"
        },
        {
          term: "عَصْف مَأْكُول",
          transliteration: "'Asf Ma'kool",
          meaning: "Eaten straw",
          explanation: "Chaff eaten by worms - hollow, perforated, scattered. Ultimate image of destruction.",
          verseRef: "105:5"
        }
      ]
    }
  },

  relationships: [
    {
      from: "كَيْد",
      to: "تَضْلِيل",
      type: "transformation",
      description: "Evil plan transformed into ruin",
      explanation: "Allah turned their own scheme against them"
    },
    {
      from: "طَيْر أَبَابِيل",
      to: "حِجَارَة سِجِّيل",
      type: "instrumentality",
      description: "Birds were instrument for stones",
      explanation: "Each bird carried stones to strike the army"
    },
    {
      from: "حِجَارَة سِجِّيل",
      to: "عَصْف مَأْكُول",
      type: "causation",
      description: "Stones caused complete destruction",
      explanation: "The divine projectiles reduced them to hollow husks"
    }
  ],

  thematicFlow: {
    title: "From Arrogance to Annihilation",
    titleArabic: "من الغرور إلى الدمار",
    description: "The surah traces the complete failure of human power against divine will",
    stages: [
      {
        stage: 1,
        theme: "Rhetorical Opening",
        verses: "105:1",
        description: "Have you not seen? - Drawing attention to a well-known event"
      },
      {
        stage: 2,
        theme: "Plan Destroyed",
        verses: "105:2",
        description: "Their scheme turned into complete failure"
      },
      {
        stage: 3,
        theme: "Divine Army Sent",
        verses: "105:3",
        description: "Waves of birds dispatched"
      },
      {
        stage: 4,
        theme: "Attack Executed",
        verses: "105:4",
        description: "Pelting with baked clay stones"
      },
      {
        stage: 5,
        theme: "Complete Destruction",
        verses: "105:5",
        description: "Reduced to eaten straw"
      }
    ]
  },

  historicalContext: {
    title: "The Year of the Elephant (عام الفيل)",
    year: "570 CE (approximately)",
    details: [
      {
        aspect: "Background",
        description: "Abraha al-Ashram, Abyssinian viceroy of Yemen, built a grand church (Al-Qullays) in Sana'a to divert Arab pilgrimage from Ka'bah"
      },
      {
        aspect: "Provocation",
        description: "An Arab defiled the church, enraging Abraha who vowed to destroy Ka'bah"
      },
      {
        aspect: "The Army",
        description: "Abraha marched with a massive army including war elephants, led by the elephant Mahmud"
      },
      {
        aspect: "Abdul Muttalib",
        description: "Prophet's grandfather retrieved his camels from Abraha, saying 'The House has a Lord who will protect it'"
      },
      {
        aspect: "The Miracle",
        description: "The elephant refused to march toward Ka'bah. Birds appeared and pelted the army with stones."
      },
      {
        aspect: "Aftermath",
        description: "Abraha's army was destroyed. Abraha himself died shortly after returning to Yemen."
      },
      {
        aspect: "Significance",
        description: "This year became the reference point for Arab chronology. Prophet Muhammad ﷺ was born in this year."
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 106,
        name: "Quraysh",
        relation: "Connected surah - Because Allah protected Ka'bah, Quraysh had security",
        sharedTheme: "Divine protection enabling Quraysh's prosperity"
      },
      {
        surah: 11,
        name: "Hud",
        verse: 82,
        relation: "Same سِجِّيل stones used for Lut's people",
        sharedTheme: "Divine punishment stones"
      },
      {
        surah: 15,
        name: "Al-Hijr",
        verse: 74,
        relation: "سِجِّيل مَنضُود - layered baked clay",
        sharedTheme: "Divine punishment projectiles"
      },
      {
        surah: 2,
        name: "Al-Baqarah",
        verse: 125,
        relation: "Ka'bah as place of safety",
        sharedTheme: "Sanctity of Ka'bah"
      }
    ],
    linguisticParallels: [
      {
        term: "أَبَابِيل",
        uniqueness: "Only appears in this surah",
        insight: "Special term for this unique miraculous event"
      },
      {
        term: "سِجِّيل",
        otherUsages: "11:82, 15:74",
        insight: "Always associated with divine punishment"
      }
    ]
  },

  hadith: [
    {
      arabic: "إن الله حبس عن مكة الفيل وسلط عليها رسوله والمؤمنين",
      english: "Allah prevented the elephant from entering Mecca and gave authority over it to His Messenger and the believers",
      source: "Sahih Bukhari",
      relevance: "Shows continuity of Ka'bah's protection"
    }
  ],

  practicalApplication: {
    title: "Lessons from the Elephant Incident",
    lessons: [
      {
        principle: "Divine protection",
        application: "Trust that Allah protects what He wills",
        verse: "105:1-2"
      },
      {
        principle: "Plots fail",
        application: "Evil schemes against Allah's religion will fail",
        verse: "105:2"
      },
      {
        principle: "Unconventional armies",
        application: "Allah's help comes in unexpected ways",
        verse: "105:3-4"
      },
      {
        principle: "Complete justice",
        application: "Divine punishment is thorough and complete",
        verse: "105:5"
      }
    ]
  },

  uniqueInsight: {
    title: "The Birth Year Sign",
    insight: "This event occurred in the year Prophet Muhammad ﷺ was born, serving as a divine sign heralding his coming. Allah protected Ka'bah miraculously just before sending the Prophet who would spiritually purify it. The Arabs counted years from this event (Year of the Elephant), making it the most significant pre-Islamic marker - and it pointed to the most significant birth in human history.",
    symbolism: [
      "Birds (طَيْر): Small creatures defeating mighty army - Islam's eventual triumph",
      "Elephant refusing to march: Even animals recognize Ka'bah's sanctity",
      "Eaten straw: The fate of those who oppose Allah's House"
    ]
  },

  comparisonTable: {
    title: "Abraha's Army vs. Divine Response",
    headers: ["Abraha's Power", "Allah's Response"],
    rows: [
      {
        abraha: "Massive army with elephants",
        divine: "Small birds (طَيْر)"
      },
      {
        abraha: "Human military might",
        divine: "Tiny stones (حِجَارَة)"
      },
      {
        abraha: "Organized invasion",
        divine: "Waves of birds (أَبَابِيل)"
      },
      {
        abraha: "Goal: Destroy Ka'bah",
        divine: "Result: Destroyed themselves"
      },
      {
        abraha: "Expected victory",
        divine: "Became like eaten straw"
      }
    ]
  },

  linguisticGems: [
    {
      observation: "Rhetorical أَلَمْ تَرَ",
      explanation: "Addressing Prophet ﷺ who wasn't born yet OR wasn't old enough to witness - emphasizes the event's fame and certainty"
    },
    {
      observation: "Feminine verb تَرْمِيهِم",
      explanation: "Agrees with collective طَيْر - treating the swarm as a single feminine unit acting in unison"
    },
    {
      observation: "Double imagery in عَصْف مَأْكُول",
      explanation: "عَصْف (chaff) = scattered/worthless + مَأْكُول (eaten) = full of holes. Two levels of destruction imagery."
    },
    {
      observation: "Five rhetorical questions",
      explanation: "Verses 1-2 have implied 'yes' answers - building certainty through questioning"
    }
  ]
};

export default ONTOLOGY;
