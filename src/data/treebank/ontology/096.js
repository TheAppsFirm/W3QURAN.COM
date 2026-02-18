/**
 * Surah Al-Alaq (96) - Ontology of Quranic Concepts
 * The Clinging Clot / Read
 * Theme: First revelation - command to read, divine knowledge, warning against arrogance
 */

export const ONTOLOGY = {
  surahId: 96,
  surahName: "Al-Alaq",
  surahNameArabic: "العلق",
  revelationType: "Makki",
  totalAyahs: 19,

  categories: {
    divineCommand: {
      name: "The Command to Read",
      nameArabic: "الأمر بالقراءة",
      color: '#3B82F6',
      icon: 'Book',
      description: "The first words revealed to the Prophet",
      concepts: [
        {
          term: "اقْرَأْ",
          transliteration: "Iqra'",
          meaning: "Read/Recite",
          explanation: "The very first word of the Quran revealed. Qara'a means to read, recite, gather, collect. Islam begins with a command to seek knowledge. Same root as 'Quran' - the book defined by being read.",
          verseRef: "96:1, 96:3"
        },
        {
          term: "بِاسْمِ رَبِّكَ",
          transliteration: "Bismi Rabbika",
          meaning: "In the name of your Lord",
          explanation: "Read with Allah's name, invoking His authority, seeking His help. All knowledge should begin with acknowledgment of the true source.",
          verseRef: "96:1"
        }
      ]
    },

    humanCreation: {
      name: "Human Creation",
      nameArabic: "خلق الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      description: "How Allah created mankind",
      concepts: [
        {
          term: "خَلَقَ الإِنسَانَ مِنْ عَلَقٍ",
          transliteration: "Khalaqal-Insaana min 'Alaq",
          meaning: "Created man from a clinging clot",
          explanation: "'Alaq = that which clings/attaches. Describes the embryo when it implants in the uterine wall. Modern embryology confirms this clinging stage. Humble origin shows Allah's creative power.",
          verseRef: "96:2"
        },
        {
          term: "الأَكْرَمُ",
          transliteration: "Al-Akram",
          meaning: "The Most Generous",
          explanation: "Allah's generosity is shown in giving knowledge. He could have created without teaching, but He generously shares wisdom with His creation.",
          verseRef: "96:3"
        }
      ]
    },

    divineTeaching: {
      name: "Divine Knowledge",
      nameArabic: "التعليم الإلهي",
      color: '#F59E0B',
      icon: 'Sparkles',
      description: "Allah as the source of all knowledge",
      concepts: [
        {
          term: "عَلَّمَ بِالقَلَمِ",
          transliteration: "'Allama bil-Qalam",
          meaning: "Taught by the pen",
          explanation: "The pen symbolizes written knowledge - preserved, transmitted, civilizational. First revelation mentions pen - emphasizing literacy and learning.",
          verseRef: "96:4"
        },
        {
          term: "عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ",
          transliteration: "'Allamal-Insaana maa lam ya'lam",
          meaning: "Taught man what he knew not",
          explanation: "All human knowledge originates from Allah. Science, arts, technology - everything we know is divine teaching. We start in complete ignorance.",
          verseRef: "96:5"
        }
      ]
    },

    humanArrogance: {
      name: "Human Transgression",
      nameArabic: "طغيان الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "How humans transgress when they feel self-sufficient",
      concepts: [
        {
          term: "إِنَّ الإِنسَانَ لَيَطْغَى",
          transliteration: "Innal-Insaana la-Yatghaa",
          meaning: "Indeed man transgresses",
          explanation: "Despite receiving divine gifts, humans tend toward rebellion. Tughyan = exceeding bounds, rebelling, tyranny. Same root as Pharaoh's description (taghaa).",
          verseRef: "96:6"
        },
        {
          term: "أَن رَآهُ اسْتَغْنَى",
          transliteration: "An ra'aahus-taghnaa",
          meaning: "Because he sees himself self-sufficient",
          explanation: "Istighnaa = considering oneself independent of Allah. The root of all sin - feeling you don't need God. Wealth, health, power create this delusion.",
          verseRef: "96:7"
        },
        {
          term: "إِلَى رَبِّكَ الرُّجْعَى",
          transliteration: "Ilaa Rabbikar-Ruj'aa",
          meaning: "To your Lord is the return",
          explanation: "Warning: no matter how self-sufficient you feel, you return to Allah. All arrogance ends at death. Accountability is inevitable.",
          verseRef: "96:8"
        }
      ]
    },

    abuJahlIncident: {
      name: "The Opposition",
      nameArabic: "المعارضة",
      color: '#EF4444',
      icon: 'Shield',
      description: "The case of one who forbids prayer",
      concepts: [
        {
          term: "الَّذِي يَنْهَى عَبْدًا إِذَا صَلَّى",
          transliteration: "Alladhee Yanhaa 'Abdan idhaa Sallaa",
          meaning: "The one who forbids a servant when he prays",
          explanation: "Refers to Abu Jahl who threatened to crush the Prophet's neck if he prayed at the Ka'bah. Prayer was so threatening to enemies of truth.",
          verseRef: "96:9-10"
        },
        {
          term: "أَرَأَيْتَ",
          transliteration: "Ara'ayta",
          meaning: "Have you seen/considered",
          explanation: "Rhetorical formula drawing attention to remarkable behavior - can you believe someone would forbid prayer?",
          verseRef: "96:9, 11, 13"
        },
        {
          term: "أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَى",
          transliteration: "A lam Ya'lam bi-annAllaaha Yaraa",
          meaning: "Does he not know that Allah sees?",
          explanation: "Divine surveillance - nothing escapes Allah's sight. The forbidder acts as if no one watches, but Allah sees everything.",
          verseRef: "96:14"
        }
      ]
    },

    divineWarning: {
      name: "Divine Punishment",
      nameArabic: "العقوبة الإلهية",
      color: '#EF4444',
      icon: 'Zap',
      description: "Warning to those who oppose truth",
      concepts: [
        {
          term: "لَنَسْفَعَن بِالنَّاصِيَةِ",
          transliteration: "La-nasfa'an bin-Naasiyah",
          meaning: "We will drag him by the forelock",
          explanation: "Nasfa' = to seize violently, drag. Arabs led prisoners by the forelock - ultimate humiliation. Modern note: prefrontal cortex (behind forelock) controls decisions.",
          verseRef: "96:15"
        },
        {
          term: "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ",
          transliteration: "Naasiyatin Kaadhibatin Khaati'ah",
          meaning: "A lying, sinning forelock",
          explanation: "The forelock/forehead described instead of the person - metonymy. Double sin: lying (kaadhibah) and sinning intentionally (khaati'ah).",
          verseRef: "96:16"
        },
        {
          term: "الزَّبَانِيَةَ",
          transliteration: "Az-Zabaaniyah",
          meaning: "The angels of Hell",
          explanation: "From zabana = to push violently. Fierce angels who push sinners into Hell. Challenge: your allies vs Allah's angels.",
          verseRef: "96:18"
        }
      ]
    },

    divineGuidance: {
      name: "The Path Forward",
      nameArabic: "السبيل",
      color: '#10B981',
      icon: 'Compass',
      description: "Final instruction to the Prophet",
      concepts: [
        {
          term: "لَا تُطِعْهُ",
          transliteration: "Laa Tuti'hu",
          meaning: "Do not obey him",
          explanation: "Don't submit to those who forbid worship. Continue your mission regardless of opposition.",
          verseRef: "96:19"
        },
        {
          term: "وَاسْجُدْ وَاقْتَرِب",
          transliteration: "Wasjud waq-Tarib",
          meaning: "Prostrate and draw near",
          explanation: "Sujood brings you closest to Allah. Prophet said: 'Closest a servant is to his Lord is in prostration.' Physical and spiritual nearness achieved.",
          verseRef: "96:19"
        }
      ]
    }
  },

  relationships: [
    {
      from: "اقرأ",
      to: "علّم بالقلم",
      type: "purpose",
      description: "Reading enables written knowledge",
      explanation: "The command to read leads to learning through the pen"
    },
    {
      from: "علّم الإنسان",
      to: "إن الإنسان ليطغى",
      type: "irony",
      description: "Taught yet transgresses",
      explanation: "Despite divine teaching, humans still rebel"
    },
    {
      from: "استغنى",
      to: "إلى ربك الرجعى",
      type: "contrast",
      description: "False independence vs inevitable return",
      explanation: "Self-sufficiency is illusion; return to Allah is reality"
    },
    {
      from: "ينهى عبدا إذا صلى",
      to: "واسجد واقترب",
      type: "opposition",
      description: "Forbidding vs commanding prayer",
      explanation: "Enemy forbids prayer; Allah commands more prayer"
    }
  ],

  thematicFlow: {
    title: "From Knowledge to Worship",
    titleArabic: "من العلم إلى العبادة",
    description: "The surah moves from learning to warning to worship",
    stages: [
      {
        stage: 1,
        theme: "The Command",
        verses: "96:1-5",
        description: "First revelation: read, create, teach"
      },
      {
        stage: 2,
        theme: "Human Nature",
        verses: "96:6-8",
        description: "Warning about human arrogance"
      },
      {
        stage: 3,
        theme: "The Opposition",
        verses: "96:9-14",
        description: "Case of one who forbids prayer"
      },
      {
        stage: 4,
        theme: "The Threat",
        verses: "96:15-18",
        description: "Punishment for the opponent"
      },
      {
        stage: 5,
        theme: "The Response",
        verses: "96:19",
        description: "Don't obey; prostrate and draw near"
      }
    ]
  },

  revelationContext: {
    title: "The First Revelation",
    description: "The momentous beginning of prophethood",
    events: [
      {
        event: "Cave of Hira",
        detail: "Prophet was engaged in tahannuth (devotion) when Jibreel appeared"
      },
      {
        event: "Jibreel's Command",
        detail: "'Read!' - Prophet replied 'I cannot read' - squeezed three times"
      },
      {
        event: "First Words",
        detail: "Verses 1-5 were revealed - first five verses"
      },
      {
        event: "Prophet's Reaction",
        detail: "Returned trembling to Khadijah: 'Cover me, cover me'"
      },
      {
        event: "Later Verses",
        detail: "Verses 6-19 revealed later about Abu Jahl incident"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 68,
        name: "Al-Qalam",
        verse: 1,
        relation: "Swears by the pen",
        sharedTheme: "Pen as symbol of knowledge"
      },
      {
        surah: 20,
        name: "Ta-Ha",
        verses: "114",
        relation: "'Say: My Lord, increase me in knowledge'",
        sharedTheme: "Prayer for knowledge"
      },
      {
        surah: 39,
        name: "Az-Zumar",
        verse: 9,
        relation: "'Are those who know equal to those who don't?'",
        sharedTheme: "Value of knowledge"
      },
      {
        surah: 55,
        name: "Ar-Rahman",
        verses: "1-4",
        relation: "'Taught the Quran, created man, taught him speech'",
        sharedTheme: "Divine teaching"
      }
    ]
  },

  hadith: [
    {
      arabic: "أقرأ وربك الأكرم الذي علم بالقلم",
      english: "Read! And your Lord is the Most Generous, Who taught by the pen",
      source: "Sahih Bukhari (First Revelation)",
      relevance: "The narration of how these verses were revealed"
    },
    {
      arabic: "أقرب ما يكون العبد من ربه وهو ساجد",
      english: "The closest a servant is to his Lord is when he is in prostration",
      source: "Sahih Muslim",
      relevance: "Explains verse 19: 'Prostrate and draw near'"
    },
    {
      arabic: "طلب العلم فريضة على كل مسلم",
      english: "Seeking knowledge is an obligation upon every Muslim",
      source: "Ibn Majah",
      relevance: "The command 'Iqra' applies to all Muslims"
    }
  ],

  practicalApplication: {
    title: "Living by Al-Alaq",
    applications: [
      {
        principle: "Begin with Allah's name",
        how: "Start every endeavor with Bismillah",
        verse: "96:1"
      },
      {
        principle: "Seek knowledge always",
        how: "Never stop learning - first command was 'Read!'",
        verse: "96:1-5"
      },
      {
        principle: "Stay humble",
        how: "Remember your origin (clot) and your return (to Allah)",
        verse: "96:2, 8"
      },
      {
        principle: "Avoid self-sufficiency delusion",
        how: "No matter your success, you need Allah",
        verse: "96:6-7"
      },
      {
        principle: "Remember Allah sees",
        how: "Act as if being watched - because you are",
        verse: "96:14"
      },
      {
        principle: "Prostrate to draw near",
        how: "In difficulty, increase sujood",
        verse: "96:19"
      }
    ]
  },

  uniqueInsight: {
    title: "Why 'Read' First?",
    insight: "The first word of divine revelation to humanity was 'Iqra' - Read! Not 'Pray!', 'Fast!', or 'Give charity!' - but READ. This establishes that Islam is fundamentally a religion of knowledge and literacy. An illiterate Prophet received a command to read - emphasizing that divine help makes the impossible possible. The same surah that commands reading also warns: those who gain knowledge but become arrogant (thinking they don't need Allah) face the worst fate. Knowledge without humility leads to destruction (like Abu Jahl - literal meaning: 'Father of Ignorance' - yet he was very knowledgeable). The surah ends with 'prostrate and draw near' - knowledge should lead to worship, not arrogance. This is the foundation: learn, stay humble, worship.",
    modernRelevance: "In the age of information overload, this surah reminds us: pursue knowledge (Iqra), but remember its source (Allah), stay humble despite what you learn, and let knowledge bring you closer to Allah, not away from Him."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "First word revealed",
        example: "اقْرَأْ (Iqra')",
        effect: "Imperative - knowledge is commanded, not optional"
      },
      {
        feature: "Rhetorical questions",
        example: "أَرَأَيْتَ (Have you seen)",
        effect: "Draws attention to remarkable situations"
      },
      {
        feature: "Emphatic structures",
        example: "لَيَطْغَىٰ (surely transgresses)",
        effect: "Lam of emphasis before verb"
      },
      {
        feature: "Metonymy",
        example: "نَاصِيَةٍ كَاذِبَةٍ (lying forelock)",
        effect: "Part (forelock) represents whole (person)"
      }
    ]
  },

  scientificMiracle: {
    title: "The 'Alaq Description",
    description: "The accuracy of describing embryonic development",
    details: [
      {
        stage: "'Alaq (clinging/attaching)",
        scientific: "Implantation - embryo attaches to uterine wall",
        note: "The word 'alaq literally means 'that which clings'"
      },
      {
        stage: "Forelock (Naasiyah)",
        scientific: "Prefrontal cortex controls decision-making",
        note: "Lying/sinning attributed to forelock - modern neuroscience confirms frontal lobe's role"
      }
    ]
  },

  comparisonTable: {
    title: "First Revelation vs Abu Jahl's Response",
    headers: ["Divine Gift", "Human Response"],
    rows: [
      {
        divine: "Read! (Iqra)",
        human: "Forbids reading/learning"
      },
      {
        divine: "Allah teaches",
        human: "Claims self-sufficiency"
      },
      {
        divine: "Created from clot",
        human: "Becomes arrogant"
      },
      {
        divine: "Prophet prays",
        human: "Tries to stop prayer"
      },
      {
        divine: "Will call angels",
        human: "Calls his assembly"
      }
    ]
  },

  memorization: {
    title: "Memorization Structure",
    sections: [
      "Verses 1-5: First revelation (Iqra, creation, teaching)",
      "Verses 6-8: Human arrogance",
      "Verses 9-14: Abu Jahl incident (forbids prayer)",
      "Verses 15-18: Threat of punishment",
      "Verse 19: Conclusion (don't obey, prostrate)"
    ],
    mnemonic: "Read → Create → Teach → Transgress → Forbid → Punish → Prostrate"
  }
};

export default ONTOLOGY;
