/**
 * Surah Quraysh (106) - Ontology of Quranic Concepts
 * The Quraysh
 * Theme: Divine blessings require gratitude through worship
 */

export const ONTOLOGY = {
  surahId: 106,
  surahName: "Quraysh",
  surahNameArabic: "قريش",
  revelationType: "Makki",
  totalAyahs: 4,

  categories: {
    tribalUnity: {
      name: "Tribal Unity and Familiarity",
      nameArabic: "إيلاف قريش",
      color: '#3B82F6',
      icon: 'Users',
      description: "Allah's blessing of uniting and familiarizing Quraysh",
      concepts: [
        {
          term: "إِيلَاف",
          transliteration: "Eelaaf",
          meaning: "Accustomed security / familiarity / unification",
          explanation: "Form IV verbal noun - Allah made Quraysh familiar with their trade routes, gave them security, and united them as a tribe. This is the only surah using this word.",
          verseRef: "106:1-2"
        },
        {
          term: "قُرَيْش",
          transliteration: "Quraysh",
          meaning: "The noble tribe of Mecca",
          explanation: "Only mention by name in Quran. From قَرْش (to gather/collect) or a type of shark (strong). They were keepers of Ka'bah.",
          verseRef: "106:1"
        }
      ]
    },

    tradeJourneys: {
      name: "Annual Trade Journeys",
      nameArabic: "رحلتي الشتاء والصيف",
      color: '#06B6D4',
      icon: 'Compass',
      description: "The two annual trading expeditions that sustained Quraysh",
      concepts: [
        {
          term: "رِحْلَة الشِّتَاء",
          transliteration: "Rihlat ash-Shitaa'",
          meaning: "Winter Journey",
          explanation: "Journey to Yemen (south) during winter - warmer climate. Traded for spices, leather, and incense.",
          verseRef: "106:2"
        },
        {
          term: "رِحْلَة الصَّيْف",
          transliteration: "Rihlat as-Sayf",
          meaning: "Summer Journey",
          explanation: "Journey to Syria/Sham (north) during summer. Traded goods from Yemen and brought back wheat, olive oil, and luxury items.",
          verseRef: "106:2"
        }
      ]
    },

    divineObligations: {
      name: "Worship as Gratitude",
      nameArabic: "العبادة شكراً للنعم",
      color: '#8B5CF6',
      icon: 'Heart',
      description: "The obligation to worship Allah in response to His blessings",
      concepts: [
        {
          term: "فَلْيَعْبُدُوا رَبَّ هَٰذَا البَيْت",
          transliteration: "Falya'budoo Rabba haadha al-Bayt",
          meaning: "Let them worship the Lord of this House",
          explanation: "The consequential command - blessings require gratitude expressed through worship. 'This House' = Ka'bah, reminding Quraysh Allah owns it, not them.",
          verseRef: "106:3"
        }
      ]
    },

    divineBlessings: {
      name: "Two Fundamental Blessings",
      nameArabic: "نعمتا الطعام والأمن",
      color: '#10B981',
      icon: 'Sparkles',
      description: "The two basic human needs Allah provided",
      concepts: [
        {
          term: "أَطْعَمَهُم مِن جُوع",
          transliteration: "At'amahum min joo'",
          meaning: "Fed them against hunger",
          explanation: "Mecca is barren desert - without trade routes, Quraysh would starve. Allah enabled their sustenance.",
          verseRef: "106:4"
        },
        {
          term: "آمَنَهُم مِن خَوْف",
          transliteration: "Aamanahum min khawf",
          meaning: "Secured them from fear",
          explanation: "Arab tribes were raiders; Quraysh alone were safe due to their status as Ka'bah keepers. This security was from Allah.",
          verseRef: "106:4"
        }
      ]
    }
  },

  relationships: [
    {
      from: "إيلاف",
      to: "رحلة التجارة",
      type: "enablement",
      description: "Unity/familiarity enabled safe trade journeys",
      explanation: "Allah's blessing of tribal unity made annual trade possible"
    },
    {
      from: "رحلة التجارة",
      to: "الطعام والأمن",
      type: "provision",
      description: "Trade journeys provided food and maintained security",
      explanation: "Economic prosperity led to both sustenance and political safety"
    },
    {
      from: "النعم",
      to: "العبادة",
      type: "obligation",
      description: "Blessings create obligation to worship",
      explanation: "The فَ in فَلْيَعْبُدُوا shows worship is the required response to blessings"
    },
    {
      from: "رَبّ البَيْت",
      to: "قريش",
      type: "ownership",
      description: "Allah owns the House, not Quraysh",
      explanation: "Reminder that their status as keepers doesn't make them owners"
    }
  ],

  thematicFlow: {
    title: "From Blessing to Obligation",
    titleArabic: "من النعمة إلى الشكر",
    description: "The surah moves from divine gifts to human response",
    stages: [
      {
        stage: 1,
        theme: "The Gift of Unity",
        verses: "106:1",
        description: "Allah united Quraysh and made them secure"
      },
      {
        stage: 2,
        theme: "The Gift of Trade",
        verses: "106:2",
        description: "Annual trade journeys provided economic stability"
      },
      {
        stage: 3,
        theme: "The Required Response",
        verses: "106:3",
        description: "Therefore worship the Lord of Ka'bah"
      },
      {
        stage: 4,
        theme: "Reminder of Favors",
        verses: "106:4",
        description: "He provided food and security"
      }
    ]
  },

  connectionToAlFil: {
    title: "Connection to Surah Al-Fil (105)",
    description: "Many scholars consider these two surahs connected",
    evidence: [
      "لِإِيلَٰفِ begins with لِ which can connect to previous surah",
      "Al-Fil describes how Allah destroyed Abraha's army",
      "This protection enabled Quraysh's continued security",
      "Both discuss Allah's protection of Ka'bah and its keepers"
    ],
    readingInstruction: "Some scholars recommend reading both surahs together in prayer"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 105,
        name: "Al-Fil",
        relation: "Describes the protection of Mecca from Abraha's army",
        sharedTheme: "Divine protection of Ka'bah"
      },
      {
        surah: 14,
        name: "Ibrahim",
        verse: 37,
        relation: "Ibrahim's prayer for provision for Mecca: 'ارزقهم من الثمرات'",
        sharedTheme: "Divine provision for Mecca's inhabitants"
      },
      {
        surah: 29,
        name: "Al-Ankabut",
        verse: 67,
        relation: "'أَوَلَمْ يَرَوْا أَنَّا جَعَلْنَا حَرَمًا آمِنًا' - We made a secure sanctuary",
        sharedTheme: "Mecca as a secure sanctuary"
      },
      {
        surah: 28,
        name: "Al-Qasas",
        verse: 57,
        relation: "Quraysh's excuse about leaving Mecca for Islam",
        sharedTheme: "Security of Mecca"
      }
    ],
    linguisticParallels: [
      {
        term: "أَطْعَمَهُم مِن جُوع",
        parallel: "Ibrahim's prayer (14:37): فَارْزُقْهُم مِنَ الثَّمَرَاتِ",
        insight: "Allah answering Ibrahim's ancient prayer for Mecca"
      },
      {
        term: "آمَنَهُم مِن خَوْف",
        parallel: "Al-Fil (105) - destruction of attackers",
        insight: "Al-Fil shows HOW Allah secured them"
      }
    ]
  },

  historicalContext: {
    title: "Historical Background",
    details: [
      {
        aspect: "Quraysh's Position",
        description: "Quraysh were the dominant tribe of Mecca, keepers of Ka'bah since Qusay ibn Kilab (5th century CE)"
      },
      {
        aspect: "Trade Economy",
        description: "Mecca's barren location made trade essential. Quraysh monopolized Arabian trade routes."
      },
      {
        aspect: "Sacred Security",
        description: "Arabs respected Ka'bah keepers - Quraysh could travel safely when others would be raided."
      },
      {
        aspect: "Trade Routes",
        routes: {
          winter: "Mecca → Yemen (spices, incense, leather)",
          summer: "Mecca → Syria/Palestine (wheat, oil, textiles)"
        }
      }
    ]
  },

  hadith: [
    {
      arabic: "قريش قادة الناس في الخير والشر إلى يوم القيامة",
      english: "Quraysh are leaders of people in good and evil until the Day of Judgment",
      source: "Sahih Muslim",
      relevance: "Shows Quraysh's special status in Islamic tradition"
    },
    {
      arabic: "الأئمة من قريش",
      english: "The leaders (Imams) are from Quraysh",
      source: "Multiple sources",
      relevance: "Prophetic recognition of Quraysh's leadership role"
    }
  ],

  practicalApplication: {
    title: "Lessons for Today",
    lessons: [
      {
        principle: "Recognize blessings",
        application: "Identify the specific ways Allah has blessed you",
        verse: "106:1-2, 4"
      },
      {
        principle: "Blessings require gratitude",
        application: "Express thankfulness through worship, not just words",
        verse: "106:3"
      },
      {
        principle: "Allah owns everything",
        application: "Our status, wealth, and position belong to Allah",
        verse: "106:3 - 'رَبَّ هَٰذَا البَيْت'"
      },
      {
        principle: "Basic needs are divine gifts",
        application: "Food and security are not entitled rights but Allah's mercy",
        verse: "106:4"
      }
    ]
  },

  uniqueInsight: {
    title: "The Logic of Gratitude",
    insight: "This surah presents a simple, powerful argument: Allah gave you everything → therefore worship Him alone. The Quraysh were uniquely blessed with tribal unity, economic prosperity through trade, food in a barren land, and security among hostile tribes. Each blessing traces back to Allah, making worship the only logical response.",
    modernRelevance: "In an age where we take modern conveniences for granted - food, safety, economic opportunity - this surah reminds us that every blessing is from Allah and demands grateful acknowledgment through worship."
  },

  comparisonTable: {
    title: "Quraysh's Unique Blessings",
    headers: ["Blessing", "Other Arab Tribes", "Quraysh"],
    rows: [
      {
        blessing: "Unity",
        otherTribes: "Tribal conflicts, internal warfare",
        quraysh: "United around Ka'bah stewardship"
      },
      {
        blessing: "Trade",
        otherTribes: "Local/limited, dangerous",
        quraysh: "International, protected routes"
      },
      {
        blessing: "Food",
        otherTribes: "Pastoral, subsistence",
        quraysh: "Abundant through trade profits"
      },
      {
        blessing: "Security",
        otherTribes: "Constant raiding, tribal wars",
        quraysh: "Protected due to Ka'bah sanctity"
      }
    ]
  },

  linguisticGems: [
    {
      observation: "Rare vocabulary",
      explanation: "إِيلَاف appears only in this surah (twice). The word emphasizes how unique Allah's blessing of unity was to Quraysh."
    },
    {
      observation: "Singular رِحْلَة for two journeys",
      explanation: "Using singular 'journey' for both winter and summer suggests the journeys were like one continuous blessing."
    },
    {
      observation: "Demonstrative هَٰذَا",
      explanation: "'This House' - pointing directly at Ka'bah, emphasizing its immediate, tangible presence for the listeners."
    },
    {
      observation: "Form IV verbs",
      explanation: "أَطْعَمَ and آمَنَ are both Form IV (causative) - Allah CAUSED their feeding and security; they didn't earn it."
    }
  ]
};

export default ONTOLOGY;
