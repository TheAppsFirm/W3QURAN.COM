/**
 * Surah Ad-Duha (93) - Ontology of Quranic Concepts
 * The Morning Brightness
 * Theme: Divine consolation - Allah has not abandoned His beloved Messenger
 */

export const ONTOLOGY = {
  surahId: 93,
  surahName: "Ad-Duha",
  surahNameArabic: "الضحى",
  revelationType: "Makki",
  totalAyahs: 11,

  categories: {
    divineOaths: {
      name: "Divine Oaths",
      nameArabic: "القسم الإلهي",
      color: '#F59E0B',
      icon: 'Sun',
      description: "Allah swears by two contrasting times",
      concepts: [
        {
          term: "الضُّحَى",
          transliteration: "Ad-Duha",
          meaning: "The Morning Brightness",
          explanation: "The time when the sun rises high and spreads its light. Symbolizes clarity, hope, and the return of revelation after a pause. Light after darkness.",
          verseRef: "93:1"
        },
        {
          term: "اللَّيْل إِذَا سَجَى",
          transliteration: "Al-Layl idha Sajaa",
          meaning: "The Night when it settles",
          explanation: "Night that becomes still and peaceful. Represents the period when revelation paused (fatrah), but even in this 'darkness', there was calm purpose. Not frightening, but serene.",
          verseRef: "93:2"
        }
      ]
    },

    divineReassurance: {
      name: "Divine Reassurance",
      nameArabic: "التطمين الإلهي",
      color: '#8B5CF6',
      icon: 'Heart',
      description: "Allah's comfort to His Messenger",
      concepts: [
        {
          term: "مَا وَدَّعَكَ رَبُّكَ",
          transliteration: "Maa wadda'aka Rabbuka",
          meaning: "Your Lord has not abandoned you",
          explanation: "Direct negation of the accusation that Allah had forsaken the Prophet when revelation paused. Wadda'a = to bid farewell, abandon. Allah NEVER does this to His beloved.",
          verseRef: "93:3"
        },
        {
          term: "وَمَا قَلَى",
          transliteration: "Wa maa Qalaa",
          meaning: "Nor has He detested you",
          explanation: "Qalaa = to detest, hate with abandonment. Stronger than wadda'a. Not only didn't Allah leave, He never even felt displeasure. The Prophet remains beloved.",
          verseRef: "93:3"
        }
      ]
    },

    futurePromises: {
      name: "Promises of the Future",
      nameArabic: "وعود المستقبل",
      color: '#10B981',
      icon: 'Sparkles',
      description: "What awaits the Prophet",
      concepts: [
        {
          term: "الآخِرَة خَيْر مِنَ الأُولَى",
          transliteration: "Al-Aakhiratu khayrun minal-Oola",
          meaning: "The Hereafter is better than this life",
          explanation: "Whatever difficulties now, the eternal future is incomparably better. The 'first life' (oola) implies there IS a 'last life' (aakhirah) - logic of hope.",
          verseRef: "93:4"
        },
        {
          term: "لَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى",
          transliteration: "La-sawfa yu'teeka Rabbuka fa-tardaa",
          meaning: "Your Lord will give you until you are satisfied",
          explanation: "Triple emphasis: la + sawfa + verb. Absolute certainty of future giving. The giving is unspecified = unlimited. Prophet will intercede until satisfied.",
          verseRef: "93:5"
        }
      ]
    },

    pastBlessings: {
      name: "Past Blessings Recalled",
      nameArabic: "النعم الماضية",
      color: '#3B82F6',
      icon: 'Star',
      description: "Three states transformed by Allah",
      concepts: [
        {
          term: "يَتِيمًا فَآوَى",
          transliteration: "Yateeman fa-Aawaa",
          meaning: "Orphan, so He sheltered",
          explanation: "Prophet's father died before his birth, mother when he was 6. Yet Allah sheltered him through Abdul-Muttalib, then Abu Talib. Never truly alone.",
          verseRef: "93:6"
        },
        {
          term: "ضَالًّا فَهَدَى",
          transliteration: "Daallan fa-Hadaa",
          meaning: "Unaware, so He guided",
          explanation: "NOT morally astray - seeking truth before finding it. The Prophet searched for truth (tahannuth in Hira) and Allah guided him to complete revelation.",
          verseRef: "93:7"
        },
        {
          term: "عَائِلًا فَأَغْنَى",
          transliteration: "'Aa'ilan fa-Aghnaa",
          meaning: "Poor, so He enriched",
          explanation: "Prophet was not wealthy. Allah enriched him through Khadijah's support, trade, and especially through contentment (ghina an-nafs). True richness.",
          verseRef: "93:8"
        }
      ]
    },

    ethicalCommands: {
      name: "Ethical Commands",
      nameArabic: "الأوامر الأخلاقية",
      color: '#22C55E',
      icon: 'Users',
      description: "Three commands based on past blessings",
      concepts: [
        {
          term: "فَلَا تَقْهَرْ اليَتِيم",
          transliteration: "Fa-laa Taqhar al-Yateem",
          meaning: "Do not oppress the orphan",
          explanation: "Since you were orphaned and Allah sheltered you, never use power against orphans. Qahr = to overpower, humiliate, dominate. Protect the vulnerable.",
          verseRef: "93:9"
        },
        {
          term: "فَلَا تَنْهَرْ السَّائِل",
          transliteration: "Fa-laa Tanhar as-Saa'il",
          meaning: "Do not rebuke the petitioner",
          explanation: "Since you were in need and Allah provided, don't rebuff those who ask - whether for money or knowledge. Nahr = harsh rebuke. Even if you can't help, be gentle.",
          verseRef: "93:10"
        },
        {
          term: "فَحَدِّثْ بِنِعْمَة رَبِّك",
          transliteration: "Fa-Haddith bi-Ni'mati Rabbik",
          meaning: "Proclaim the blessing of your Lord",
          explanation: "Since Allah guided you, share that guidance. Express gratitude through proclamation. The greatest blessing (prophethood/Quran) must be shared with all.",
          verseRef: "93:11"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الضحى",
      to: "الليل",
      type: "contrast",
      description: "Light after darkness",
      explanation: "Both are from Allah - times of revelation and pause both serve purpose"
    },
    {
      from: "يتيما فآوى",
      to: "فلا تقهر اليتيم",
      type: "causation",
      description: "Experience leads to empathy",
      explanation: "You were orphaned → protect orphans"
    },
    {
      from: "عائلا فأغنى",
      to: "فلا تنهر السائل",
      type: "causation",
      description: "Need leads to generosity",
      explanation: "You were in need → help the needy"
    },
    {
      from: "ضالا فهدى",
      to: "فحدث بنعمة ربك",
      type: "causation",
      description: "Guidance leads to sharing",
      explanation: "You were guided → share the guidance"
    }
  ],

  thematicFlow: {
    title: "From Darkness to Duty",
    titleArabic: "من الظلمة إلى الواجب",
    description: "The surah moves from comfort to command",
    stages: [
      {
        stage: 1,
        theme: "Divine Oaths",
        verses: "93:1-2",
        description: "Light and calm night - both from Allah"
      },
      {
        stage: 2,
        theme: "Reassurance",
        verses: "93:3",
        description: "Allah has NOT abandoned or hated you"
      },
      {
        stage: 3,
        theme: "Future Promise",
        verses: "93:4-5",
        description: "The future is better; you will be satisfied"
      },
      {
        stage: 4,
        theme: "Past Blessings",
        verses: "93:6-8",
        description: "Three transformations: orphan, seeker, poor"
      },
      {
        stage: 5,
        theme: "Ethical Commands",
        verses: "93:9-11",
        description: "Three commands based on three blessings"
      }
    ]
  },

  backgroundContext: {
    title: "Revelation Background",
    description: "Why this surah was revealed",
    events: [
      {
        event: "The Pause (Fatrah)",
        detail: "Revelation stopped for a period (15 nights, 40 days, or more - scholars differ)"
      },
      {
        event: "The Accusation",
        detail: "Enemies said 'His Lord has abandoned him' or 'His Lord is angry with him'"
      },
      {
        event: "The Prophet's Distress",
        detail: "The Prophet ﷺ felt great sadness at the pause in revelation"
      },
      {
        event: "The Comfort",
        detail: "This surah came as divine consolation and reassurance"
      }
    ],
    wisdom: "The pause made the Prophet appreciate revelation more, and showed that it was truly from Allah, not self-generated"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 94,
        name: "Ash-Sharh",
        relation: "Sister surah - continuation of comfort theme",
        sharedTheme: "Divine blessings on the Prophet"
      },
      {
        surah: 108,
        name: "Al-Kawthar",
        relation: "Another surah of comfort after criticism",
        sharedTheme: "Divine gifts after human attacks"
      },
      {
        surah: 17,
        name: "Al-Isra",
        verse: 79,
        relation: "'Perhaps your Lord will raise you to a praised station'",
        sharedTheme: "Future elevation promised"
      },
      {
        surah: 68,
        name: "Al-Qalam",
        verses: "68:1-4",
        relation: "Defense against accusation of madness",
        sharedTheme: "Divine defense of Prophet's character"
      }
    ]
  },

  hadith: [
    {
      arabic: "أما ترضى أن تكون لهم الدنيا ولنا الآخرة؟",
      english: "Are you not pleased that they have the dunya and we have the aakhirah?",
      source: "Sahih Muslim",
      relevance: "Prophet's contentment with verse 4's promise"
    },
    {
      arabic: "من لا يشكر الناس لا يشكر الله",
      english: "He who does not thank people does not thank Allah",
      source: "Abu Dawud, Tirmidhi",
      relevance: "Related to verse 11 - proclaiming Allah's blessings"
    }
  ],

  practicalApplication: {
    title: "Living by Ad-Duha",
    applications: [
      {
        principle: "Trust during dark times",
        how: "Even when you feel abandoned, Allah is watching and caring",
        verse: "93:1-3"
      },
      {
        principle: "Value the afterlife",
        how: "Focus on eternal success, not temporary comfort",
        verse: "93:4"
      },
      {
        principle: "Expect divine giving",
        how: "Allah WILL provide - trust the promise",
        verse: "93:5"
      },
      {
        principle: "Remember your origin",
        how: "Recall your vulnerabilities to build humility and empathy",
        verse: "93:6-8"
      },
      {
        principle: "Protect the vulnerable",
        how: "Never oppress orphans or rebuke those in need",
        verse: "93:9-10"
      },
      {
        principle: "Proclaim blessings",
        how: "Share what Allah has given you - especially guidance",
        verse: "93:11"
      }
    ]
  },

  uniqueInsight: {
    title: "The Architecture of Comfort",
    insight: "This surah is a masterclass in divine consolation. It begins with OATHS (verses 1-2) that establish credibility. Then NEGATION of the accusation (verse 3). Then FUTURE PROMISES (verses 4-5) to redirect focus from present pain. Then PAST EVIDENCE (verses 6-8) proving Allah's consistent care - if He helped before, why would He abandon now? Finally, PRACTICAL COMMANDS (verses 9-11) that turn grief into purpose. The structure teaches us HOW to comfort others: acknowledge their pain, promise future good, remind of past blessings, and give them meaningful action. Notice the three-part pattern: orphan→shelter, lost→guided, poor→enriched, then: orphan→don't oppress, petitioner→don't rebuke, blessing→proclaim. Your past struggles become your present mission.",
    modernRelevance: "For anyone feeling abandoned by Allah - through depression, hardship, or spiritual drought - this surah is the answer. The 'night' always settles peacefully before the 'duha' arrives."
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        feature: "Rhetorical question sequence",
        example: "أَلَم يَجِدْكَ يَتِيمًا... (verses 6-8)",
        effect: "Forces reflection - answer is obviously yes"
      },
      {
        feature: "Amma + fa construction",
        example: "فَأَمَّا اليَتِيمَ فَلَا تَقْهَرْ",
        effect: "Distributes commands systematically"
      },
      {
        feature: "Personal address (Rabbuka)",
        count: "4 times in 11 verses",
        effect: "Emphasizes intimate divine-human relationship"
      },
      {
        feature: "Three parallels",
        example: "Found-then (wajada-fa) x 3",
        effect: "Pattern of transformation"
      }
    ]
  },

  comparisonTable: {
    title: "Three Blessings → Three Commands",
    headers: ["Past State", "Allah's Gift", "Your Duty"],
    rows: [
      {
        past: "Orphan (يَتِيمًا)",
        gift: "Shelter (آوَى)",
        duty: "Don't oppress orphans"
      },
      {
        past: "Unaware (ضَالًّا)",
        gift: "Guidance (هَدَى)",
        duty: "Proclaim the blessing"
      },
      {
        past: "Poor (عَائِلًا)",
        gift: "Sufficiency (أَغْنَى)",
        duty: "Don't rebuke petitioners"
      }
    ]
  },

  connectionToAshSharh: {
    title: "Twin Surahs: Ad-Duha and Ash-Sharh",
    description: "Often considered a pair, possibly one surah",
    aspects: [
      {
        aspect: "Theme",
        adDuha: "Allah hasn't abandoned you",
        ashSharh: "Look at what Allah gave you"
      },
      {
        aspect: "Focus",
        adDuha: "External circumstances (orphan, poor)",
        ashSharh: "Internal transformation (expanded chest)"
      },
      {
        aspect: "Time reference",
        adDuha: "Past (what He did)",
        ashSharh: "Present/future (what He does)"
      },
      {
        aspect: "Some scholars",
        note: "Imam Shafi'i didn't recite bismillah between them in prayer"
      }
    ]
  },

  memorization: {
    title: "Memorization Structure",
    outline: [
      "Verses 1-2: Two oaths (duha, night)",
      "Verse 3: Negation (didn't abandon, didn't hate)",
      "Verses 4-5: Future promises (aakhirah better, you'll be satisfied)",
      "Verses 6-8: Three past blessings (orphan→shelter, lost→guided, poor→enriched)",
      "Verses 9-11: Three commands (don't oppress, don't rebuke, proclaim)"
    ],
    mnemonic: "Oaths → Negation → Promises → Past → Commands"
  },

  spiritualPrescription: {
    title: "When to Recite Ad-Duha",
    occasions: [
      "When feeling abandoned or alone",
      "During depression or spiritual low",
      "When revelation/inspiration seems to have stopped",
      "When facing criticism from enemies",
      "When needing to remember past blessings",
      "When seeking motivation for charity and kindness"
    ],
    effect: "This surah is spiritual medicine for feelings of divine abandonment"
  }
};

export default ONTOLOGY;
