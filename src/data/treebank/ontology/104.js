/**
 * Surah Al-Humazah (104) - Ontology of Quranic Concepts
 * The Slanderer
 * Theme: Condemnation of backbiting, slander, and materialism
 */

export const ONTOLOGY = {
  surahId: 104,
  surahName: "Al-Humazah",
  surahNameArabic: "الهمزة",
  revelationType: "Makki",
  totalAyahs: 9,

  categories: {
    socialSins: {
      name: "Sins of the Tongue and Gesture",
      nameArabic: "آفات اللسان والإشارة",
      color: '#EF4444',
      icon: 'MessageCircle',
      description: "The twin sins of indirect and direct mockery",
      concepts: [
        {
          term: "هُمَزَة",
          transliteration: "Humazah",
          meaning: "Backbiter / Secret mocker",
          explanation: "One who mocks through gestures, facial expressions, hints - behind people's backs. Pattern فُعَلَة indicates habitual behavior.",
          verseRef: "104:1"
        },
        {
          term: "لُمَزَة",
          transliteration: "Lumazah",
          meaning: "Slanderer / Face-to-face mocker",
          explanation: "One who mocks with words directly to people's faces. Same intensive pattern showing habitual action.",
          verseRef: "104:1"
        }
      ]
    },

    materialismSins: {
      name: "Sins of Wealth Obsession",
      nameArabic: "حب المال",
      color: '#F59E0B',
      icon: 'AlertTriangle',
      description: "The delusion of wealth bringing security",
      concepts: [
        {
          term: "جَمَعَ مَالًا وَعَدَّدَهُ",
          transliteration: "Jama'a maalan wa 'addadahu",
          meaning: "Collects wealth and counts it",
          explanation: "عَدَّدَ (Form II) shows obsessive counting - not just having wealth but being consumed by it.",
          verseRef: "104:2"
        },
        {
          term: "أَخْلَدَهُ",
          transliteration: "Akhladahu",
          meaning: "Will make him immortal",
          explanation: "The false belief that wealth grants eternity - delusion that money defeats death.",
          verseRef: "104:3"
        }
      ]
    },

    divineJustice: {
      name: "Poetic Divine Justice",
      nameArabic: "العدالة الإلهية",
      color: '#8B5CF6',
      icon: 'Scale',
      description: "The punishment fitting the crime",
      concepts: [
        {
          term: "لَيُنۢبَذَنَّ",
          transliteration: "La-yunbadhanna",
          meaning: "Will surely be thrown",
          explanation: "Passive voice - thrown like garbage. Strongest possible emphasis with لَ and نون التوكيد.",
          verseRef: "104:4"
        },
        {
          term: "الحُطَمَة",
          transliteration: "Al-Hutamah",
          meaning: "The Crusher",
          explanation: "Same pattern (فُعَلَة) as هُمَزَة/لُمَزَة - the crusher of reputations meets the Crusher fire. Poetic justice.",
          verseRef: "104:4-5"
        }
      ]
    },

    hellDescription: {
      name: "Nature of Hell-Fire",
      nameArabic: "وصف النار",
      color: '#DC2626',
      icon: 'Zap',
      description: "The terrifying description of الحُطَمَة",
      concepts: [
        {
          term: "نَارُ اللَّهِ المُوقَدَة",
          transliteration: "Naar Allahi al-Mooqadah",
          meaning: "Allah's kindled fire",
          explanation: "Attributed to Allah to indicate unimaginable intensity - constantly fueled, never dying.",
          verseRef: "104:6"
        },
        {
          term: "تَطَّلِعُ عَلَى الأَفْئِدَة",
          transliteration: "Tattali'u 'ala al-Af'idah",
          meaning: "Reaches/penetrates the hearts",
          explanation: "Fire doesn't just burn skin - it penetrates to the heart where greed resided.",
          verseRef: "104:7"
        },
        {
          term: "مُؤْصَدَةٌ فِي عَمَدٍ مُمَدَّدَة",
          transliteration: "Mu'sadah fee 'amadin mumaddadah",
          meaning: "Sealed in extended columns",
          explanation: "Complete entrapment - sealed with towering pillars. No escape in any direction.",
          verseRef: "104:8-9"
        }
      ]
    }
  },

  relationships: [
    {
      from: "هُمَزَة لُمَزَة",
      to: "الحُطَمَة",
      type: "poetic-justice",
      description: "The crusher of reputations meets the Crusher",
      explanation: "Same Arabic pattern (فُعَلَة) links the crime to its punishment"
    },
    {
      from: "جَمَعَ مَالًا",
      to: "أَخْلَدَهُ",
      type: "delusion",
      description: "Wealth accumulation leads to false sense of immortality",
      explanation: "كَلَّا (Never!) exposes this as complete falsehood"
    },
    {
      from: "الأَفْئِدَة (hearts)",
      to: "جَمَعَ مَالًا (collecting wealth)",
      type: "location-of-sin",
      description: "Hearts burned because that's where greed lived",
      explanation: "Fire reaches the seat of the disease - the greedy heart"
    },
    {
      from: "مُؤْصَدَة",
      to: "عَمَدٍ مُمَدَّدَة",
      type: "description",
      description: "Sealed + pillars = complete entrapment",
      explanation: "Multiple layers of confinement in punishment"
    }
  ],

  thematicFlow: {
    title: "From Sin to Punishment",
    titleArabic: "من الذنب إلى العقاب",
    description: "The surah moves from describing sins to their eternal consequence",
    stages: [
      {
        stage: 1,
        theme: "Declaration of Doom",
        verses: "104:1",
        description: "Woe announced for every slanderer"
      },
      {
        stage: 2,
        theme: "The Sins Described",
        verses: "104:2-3",
        description: "Wealth obsession and delusion of immortality"
      },
      {
        stage: 3,
        theme: "Rejection of Delusion",
        verses: "104:4",
        description: "كَلَّا - emphatic rejection of false belief"
      },
      {
        stage: 4,
        theme: "Rhetorical Question",
        verses: "104:5",
        description: "What can make you know what الحُطَمَة is?"
      },
      {
        stage: 5,
        theme: "Description of Punishment",
        verses: "104:6-9",
        description: "Detailed description of the Crusher"
      }
    ]
  },

  linguisticMiracles: {
    title: "Linguistic Features",
    features: [
      {
        name: "Pattern Parallelism",
        description: "هُمَزَة, لُمَزَة, and الحُطَمَة all share فُعَلَة pattern",
        significance: "The crime (crushing reputations) matches the punishment (being crushed)"
      },
      {
        name: "Sound Symbolism",
        description: "ح-ط-م root sounds aggressive, crushing",
        significance: "The word itself sounds like crushing/shattering"
      },
      {
        name: "Emphatic Oath Structure",
        description: "لَ + verb + نون التوكيد in لَيُنۢبَذَنَّ",
        significance: "Strongest possible emphasis in Arabic grammar"
      },
      {
        name: "Feminine Singular for Collective",
        description: "مُؤْصَدَة and مُمَدَّدَة (feminine) describe abstract fire/pillars",
        significance: "Creates atmosphere of totality and encompassment"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 107,
        name: "Al-Ma'un",
        relation: "Both condemn hypocrisy and social sins",
        sharedTheme: "Criticism of outward show vs inner corruption"
      },
      {
        surah: 111,
        name: "Al-Masad",
        relation: "Both describe specific punishments in Hell",
        sharedTheme: "Fire as punishment"
      },
      {
        surah: 49,
        name: "Al-Hujurat",
        verse: 11,
        relation: "'Do not mock one another' - expands on هُمَزَة لُمَزَة",
        sharedTheme: "Prohibition of mocking"
      },
      {
        surah: 9,
        name: "At-Tawbah",
        verse: 79,
        relation: "Hypocrites mocking believers' charity",
        sharedTheme: "Condemnation of mockers"
      }
    ],
    hadithConnections: [
      {
        reference: "Muslim",
        text: "Backbiting is mentioning your brother in a way he dislikes",
        connection: "Defines هُمَزَة behavior"
      },
      {
        reference: "Bukhari",
        text: "The signs of a hypocrite: when he speaks he lies, when he promises he breaks it",
        connection: "Character traits of the slanderer type"
      }
    ]
  },

  hadith: [
    {
      arabic: "الغِيبَة ذِكْرُك أَخَاكَ بِمَا يَكْرَه",
      english: "Backbiting is mentioning your brother in a way he would dislike",
      source: "Sahih Muslim",
      relevance: "Defines the هُمَزَة behavior condemned in verse 1"
    },
    {
      arabic: "لا يَدْخُلُ الجَنَّةَ نَمَّام",
      english: "A tale-bearer (slanderer) will not enter Paradise",
      source: "Sahih Bukhari & Muslim",
      relevance: "Severe warning matching the surah's وَيْل"
    }
  ],

  practicalApplication: {
    title: "Self-Examination",
    questions: [
      {
        sin: "هُمَزَة behavior",
        question: "Do I mock people through gestures, facial expressions, or hints?",
        remedy: "Replace mockery with sincere advice"
      },
      {
        sin: "لُمَزَة behavior",
        question: "Do I criticize people directly to hurt them?",
        remedy: "Speak to uplift, not to wound"
      },
      {
        sin: "Wealth obsession",
        question: "Do I constantly think about my money and possessions?",
        remedy: "Remember wealth is a test, not security"
      },
      {
        sin: "False immortality",
        question: "Do I act as if I'll live forever?",
        remedy: "Remember death daily"
      }
    ]
  },

  uniqueInsight: {
    title: "The Psychology of the Slanderer",
    insight: "This surah reveals the deep connection between mockery and materialism. The person who mocks others (هُمَزَة لُمَزَة) is the same one obsessed with counting wealth. Why? Because both behaviors come from the same diseased heart: one that finds security in worldly things (wealth) and superiority over others (mockery). The fire reaching 'hearts' (الأَفْئِدَة) is the ultimate justice - it burns the very organ where pride and greed resided.",
    modernRelevance: "In an age of social media mockery, online bullying, and wealth-flaunting, this surah is painfully relevant. The modern هُمَزَة posts memes mocking others; the modern لُمَزَة leaves cruel comments. The حُطَمَة awaits both."
  },

  comparisonTable: {
    title: "هُمَزَة vs لُمَزَة",
    headers: ["Aspect", "هُمَزَة", "لُمَزَة"],
    rows: [
      {
        aspect: "Method",
        humazah: "Gestures, expressions, hints",
        lumazah: "Direct words"
      },
      {
        aspect: "Timing",
        humazah: "Behind the back",
        lumazah: "To the face"
      },
      {
        aspect: "Tool",
        humazah: "Non-verbal communication",
        lumazah: "Verbal attacks"
      },
      {
        aspect: "Modern Example",
        humazah: "Rolling eyes, shared looks, subtweets",
        lumazah: "Direct insults, cruel comments"
      }
    ]
  },

  conclusionMessage: {
    title: "Final Warning",
    message: "The surah begins with وَيْل (woe/destruction) and ends with مُمَدَّدَة (extended) - from the opening curse to the endless punishment. There is no relief clause, no exception mentioned. This is one of the strongest warnings in the Quran against two connected sins: mocking Allah's creation and worshipping Allah's provision (wealth). Both are forms of forgetting the Creator."
  }
};

export default ONTOLOGY;
