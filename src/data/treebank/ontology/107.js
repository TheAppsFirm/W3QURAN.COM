/**
 * Surah Al-Ma'un (107) - Ontology of Quranic Concepts
 * The Small Kindnesses
 * Theme: Social responsibility linked to faith
 */

export const ONTOLOGY = {
  surahId: 107,
  surahName: "Al-Ma'un",
  surahNameArabic: "الماعون",
  revelationType: "Makki/Madani (disputed)",
  totalAyahs: 7,

  categories: {
    denialOfFaith: {
      name: "Denial of Judgment Day",
      nameArabic: "تكذيب الدين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "The root cause of social injustice - disbelief in accountability",
      concepts: [
        {
          term: "الدِّين",
          transliteration: "ad-Deen",
          meaning: "The Recompense / Day of Judgment",
          explanation: "Here دِين means Day of Judgment (يوم الدين), not religion. Denying accountability leads to social cruelty.",
          verseRef: "107:1"
        },
        {
          term: "يُكَذِّب",
          transliteration: "yukadhdhibu",
          meaning: "To deny repeatedly",
          explanation: "Form II verb indicating persistent, deliberate denial - not momentary doubt.",
          verseRef: "107:1"
        }
      ]
    },

    socialCruelty: {
      name: "Social Cruelty",
      nameArabic: "القسوة الاجتماعية",
      color: '#DC2626',
      icon: 'Users',
      description: "Behaviors that stem from denying divine accountability",
      concepts: [
        {
          term: "يَدُعُّ اليَتِيم",
          transliteration: "yadu' al-yateem",
          meaning: "Pushes away the orphan",
          explanation: "Physical violence against the most vulnerable. يَدُعُّ is rare and violent - pushing, shoving, repelling.",
          verseRef: "107:2"
        },
        {
          term: "لا يَحُضُّ على طَعام المِسكِين",
          transliteration: "laa yahuddu 'ala ta'aam al-miskeen",
          meaning: "Does not encourage feeding the poor",
          explanation: "Double sin: neither feeds them personally NOR encourages others to do so.",
          verseRef: "107:3"
        }
      ]
    },

    religiousHypocrisy: {
      name: "Religious Hypocrisy",
      nameArabic: "الرياء في العبادة",
      color: '#F59E0B',
      icon: 'Eye',
      description: "External worship without internal sincerity",
      concepts: [
        {
          term: "ساهون عن صلاتهم",
          transliteration: "saahoon 'an salaatihim",
          meaning: "Heedless OF their prayer",
          explanation: "Critical: عَن (of/from) not فِي (in). They neglect prayer entirely, delay it, don't care about it - different from being distracted during prayer.",
          verseRef: "107:5"
        },
        {
          term: "يُرَاءُون",
          transliteration: "yuraa'oon",
          meaning: "They show off",
          explanation: "Form III from رَأَى (see) - mutual seeing. They perform worship to be seen by people, not for Allah.",
          verseRef: "107:6"
        }
      ]
    },

    smallKindnesses: {
      name: "Refusing Small Kindnesses",
      nameArabic: "منع الماعون",
      color: '#10B981',
      icon: 'Heart',
      description: "The climax - refusing even trivial assistance",
      concepts: [
        {
          term: "الماعون",
          transliteration: "al-maa'oon",
          meaning: "Small household items / basic necessities",
          explanation: "Items people commonly borrow: pot, bucket, salt, axe, needle. Some say it means Zakat. Either way, refusing small help reveals deep stinginess.",
          verseRef: "107:7",
          examples: ["pot (قِدْر)", "bucket (دَلْو)", "salt (مِلْح)", "axe (فَأْس)", "needle (إِبْرَة)"]
        }
      ]
    }
  },

  relationships: [
    {
      from: "تكذيب الدين",
      to: "قسوة اليتيم",
      type: "causation",
      description: "Denying Judgment Day leads to cruelty toward orphans",
      explanation: "Without belief in accountability, there's no motivation for compassion"
    },
    {
      from: "تكذيب الدين",
      to: "عدم إطعام المسكين",
      type: "causation",
      description: "Denying Judgment leads to ignoring the poor",
      explanation: "No eternal reward means no incentive for charity"
    },
    {
      from: "سهو الصلاة",
      to: "الرياء",
      type: "association",
      description: "Neglecting prayer leads to show-off worship",
      explanation: "When prayer isn't for Allah, it becomes performance"
    },
    {
      from: "الرياء",
      to: "منع الماعون",
      type: "progression",
      description: "Show-off worship leads to refusing small kindnesses",
      explanation: "If worship is for show, charity will also be for show - no hidden acts of kindness"
    }
  ],

  thematicFlow: {
    title: "From Belief to Behavior",
    titleArabic: "من العقيدة إلى السلوك",
    description: "The surah shows how denial of faith manifests in social behavior",
    stages: [
      {
        stage: 1,
        theme: "Root Cause",
        verses: "107:1",
        description: "Denial of Judgment Day - the theological root"
      },
      {
        stage: 2,
        theme: "Social Symptoms",
        verses: "107:2-3",
        description: "Cruelty to orphans and neglect of poor"
      },
      {
        stage: 3,
        theme: "Religious Symptoms",
        verses: "107:4-6",
        description: "Hypocritical prayer and showing off"
      },
      {
        stage: 4,
        theme: "Climax",
        verses: "107:7",
        description: "Refusing even the smallest kindness"
      }
    ]
  },

  structuralAnalysis: {
    title: "Two Halves Structure",
    description: "The surah divides into two distinct parts",
    parts: [
      {
        verses: "1-3",
        theme: "The Denier's Social Behavior",
        focus: "External actions toward people",
        characteristics: ["Cruel to orphans", "Ignores the poor"]
      },
      {
        verses: "4-7",
        theme: "The Hypocrite's Religious Behavior",
        focus: "Corrupted worship",
        characteristics: ["Neglects prayer", "Shows off", "Refuses help"]
      }
    ],
    connection: "Both parts describe the same person from different angles - social and religious"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 89,
        name: "Al-Fajr",
        relation: "Criticizes those who don't honor orphans (89:17)",
        sharedTheme: "Treatment of orphans"
      },
      {
        surah: 93,
        name: "Ad-Duha",
        relation: "Commands kindness to orphans (93:9)",
        sharedTheme: "Orphan care as duty"
      },
      {
        surah: 104,
        name: "Al-Humazah",
        relation: "Condemns wealth-hoarding",
        sharedTheme: "Stinginess and its punishment"
      },
      {
        surah: 4,
        name: "An-Nisa",
        verse: 142,
        relation: "Describes hypocrites in prayer",
        sharedTheme: "Lazy, show-off prayer"
      }
    ],
    linguisticParallels: [
      {
        term: "يَدُعُّ",
        otherUsage: "52:13 - 'On the Day they will be pushed (يُدَعُّونَ) to the Fire'",
        insight: "Those who push orphans will themselves be pushed to Hell"
      },
      {
        term: "ويل",
        frequency: "Used 40 times in Quran",
        contexts: "Always for severe warning of punishment"
      }
    ]
  },

  hadith: [
    {
      arabic: "أنا وكافل اليتيم في الجنة هكذا",
      english: "I and the one who sponsors an orphan will be in Paradise like this (indicating closeness with his fingers)",
      source: "Sahih Bukhari",
      relevance: "Contrast to those who push orphans away"
    },
    {
      arabic: "الرياء الشرك الأصغر",
      english: "Showing off (riya) is minor shirk",
      source: "Musnad Ahmad",
      relevance: "Explains why يُرَاءُونَ is severely condemned"
    },
    {
      arabic: "ما آمن بي من بات شبعان وجاره جائع إلى جنبه وهو يعلم",
      english: "He has not believed in me who sleeps full while his neighbor beside him is hungry and he knows it",
      source: "Al-Tabarani",
      relevance: "Explains لا يَحُضُّ على طَعَام المِسكِين"
    }
  ],

  practicalApplication: {
    title: "Self-Examination Checklist",
    description: "Questions to avoid the behaviors condemned in this surah",
    questions: [
      {
        category: "Belief",
        question: "Do I truly believe in the Day of Judgment and act accordingly?",
        verse: "107:1"
      },
      {
        category: "Social",
        question: "How do I treat those weaker than me - orphans, children, employees?",
        verse: "107:2"
      },
      {
        category: "Charity",
        question: "Do I encourage others to give, or only give when directly asked?",
        verse: "107:3"
      },
      {
        category: "Prayer",
        question: "Do I pray on time with presence, or delay and rush through?",
        verse: "107:5"
      },
      {
        category: "Sincerity",
        question: "Do I worship the same in private as in public?",
        verse: "107:6"
      },
      {
        category: "Generosity",
        question: "Am I willing to share small things - time, resources, help?",
        verse: "107:7"
      }
    ]
  },

  uniqueInsight: {
    title: "The Definitive Test of Faith",
    insight: "This surah presents a revolutionary criterion: true faith is measured not by theological claims or visible worship, but by how we treat society's weakest members and whether we share even small kindnesses.",
    details: [
      "The theological root: Denying accountability leads to cruelty",
      "The social test: Treatment of orphans and poor reveals true faith",
      "The worship test: Prayer without social action is hollow",
      "The ultimate test: Even refusing small items (مَاعُون) exposes the heart"
    ],
    modernRelevance: "In an age of performative religion and social media spirituality, this surah asks: Do your private actions match your public persona? Would you help someone when no one is watching?"
  },

  comparisonTable: {
    title: "True Faith vs. Hypocrisy",
    headers: ["Aspect", "True Believer", "Denier/Hypocrite"],
    rows: [
      {
        aspect: "Belief",
        trueBeliever: "Believes in Judgment Day",
        hypocrite: "Denies accountability"
      },
      {
        aspect: "Orphans",
        trueBeliever: "Sponsors and protects",
        hypocrite: "Pushes away violently"
      },
      {
        aspect: "Poor",
        trueBeliever: "Feeds and encourages others",
        hypocrite: "Ignores and doesn't encourage"
      },
      {
        aspect: "Prayer",
        trueBeliever: "Prays on time with focus",
        hypocrite: "Neglects and delays"
      },
      {
        aspect: "Intention",
        trueBeliever: "Worships for Allah alone",
        hypocrite: "Shows off for people"
      },
      {
        aspect: "Small Help",
        trueBeliever: "Shares willingly",
        hypocrite: "Refuses even trivial items"
      }
    ]
  },

  linguisticGems: [
    {
      observation: "عَن vs فِي in verse 5",
      explanation: "سَاهُونَ عَن صَلَاتِهِمْ (heedless OF their prayer) not فِي (IN their prayer). This distinction exonerates those who get distracted during prayer and condemns those who neglect prayer entirely."
    },
    {
      observation: "Progressive narrowing",
      explanation: "The surah moves from cosmic (Judgment Day) → social (orphans, poor) → personal (prayer) → smallest (مَاعُون). Sins at every level interconnect."
    },
    {
      observation: "Shock value of verse 4",
      explanation: "فَوَيْلٌ لِّلْمُصَلِّينَ - 'Woe to those who pray' shocks the reader. This rhetorical device forces continuation to verse 5 for clarification."
    }
  ]
};

export default ONTOLOGY;
