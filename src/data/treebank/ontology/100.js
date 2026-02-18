/**
 * Surah Al-'Adiyat (100) - Ontology of Quranic Concepts
 * The Chargers
 * Theme: Human ingratitude contrasted with animal loyalty
 */

export const ONTOLOGY = {
  surahId: 100,
  surahName: "Al-'Adiyat",
  surahNameArabic: "العاديات",
  revelationType: "Makki",
  totalAyahs: 11,

  categories: {
    divineOath: {
      name: "The Oath by War Horses",
      nameArabic: "القسم بالخيل",
      color: '#8B5CF6',
      icon: 'Zap',
      description: "A five-part oath describing charging war horses",
      concepts: [
        {
          term: "العَادِيَات ضَبْحًا",
          transliteration: "Al-'Aadiyaat dabhan",
          meaning: "The charging horses, panting",
          explanation: "Horses running so hard they're panting heavily - demonstrating their dedication to their riders.",
          verseRef: "100:1"
        },
        {
          term: "المُورِيَات قَدْحًا",
          transliteration: "Al-Mooriyaat qadhan",
          meaning: "The spark-producers when striking",
          explanation: "Hooves striking rocks create sparks in night raids - horses continue despite difficulty.",
          verseRef: "100:2"
        },
        {
          term: "المُغِيرَات صُبْحًا",
          transliteration: "Al-Mugheeraat subhan",
          meaning: "The raiders at dawn",
          explanation: "Dawn raids were strategically timed - horses serve their masters' timing perfectly.",
          verseRef: "100:3"
        },
        {
          term: "فَأَثَرْنَ نَقْعًا",
          transliteration: "Fa-atharna naq'an",
          meaning: "Raising clouds of dust",
          explanation: "The dramatic dust cloud of cavalry charge - horses give everything.",
          verseRef: "100:4"
        },
        {
          term: "فَوَسَطْنَ جَمْعًا",
          transliteration: "Fa-wasatna jam'an",
          meaning: "Penetrating the enemy center",
          explanation: "Horses plunge into danger, serving their riders with total loyalty.",
          verseRef: "100:5"
        }
      ]
    },

    humanIngratitude: {
      name: "Human Ingratitude",
      nameArabic: "كفران الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "The contrast between horse loyalty and human ingratitude",
      concepts: [
        {
          term: "كَنُود",
          transliteration: "Kanood",
          meaning: "Ungrateful / Denying blessings",
          explanation: "Intensive form - extremely ungrateful. Human denies his Lord's blessings while horses serve their human masters loyally.",
          verseRef: "100:6"
        },
        {
          term: "لِحُبِّ الخَيْرِ لَشَدِيد",
          transliteration: "Li-hubb al-khayr la-shadeed",
          meaning: "Intense in love of wealth",
          explanation: "Human loves material wealth intensely - ironically الخَيْر (good/wealth) becomes his obsession instead of Allah.",
          verseRef: "100:8"
        }
      ]
    },

    judgmentDay: {
      name: "Resurrection and Exposure",
      nameArabic: "البعث والكشف",
      color: '#F59E0B',
      icon: 'Eye',
      description: "What happens when graves open and secrets are exposed",
      concepts: [
        {
          term: "بُعْثِرَ مَا فِي القُبُور",
          transliteration: "Bu'thira maa fi al-quboor",
          meaning: "When what's in graves is scattered",
          explanation: "Bodies resurrected and brought out - the dead rise.",
          verseRef: "100:9"
        },
        {
          term: "حُصِّلَ مَا فِي الصُّدُور",
          transliteration: "Hussila maa fi as-sudoor",
          meaning: "When what's in breasts is extracted",
          explanation: "Hidden intentions, secrets, inner states - all exposed.",
          verseRef: "100:10"
        },
        {
          term: "رَبَّهُم بِهِم خَبِير",
          transliteration: "Rabbuhum bihim khabeer",
          meaning: "Their Lord is fully Aware of them",
          explanation: "Allah's complete knowledge - nothing hidden that Day.",
          verseRef: "100:11"
        }
      ]
    }
  },

  relationships: [
    {
      from: "العاديات (horses)",
      to: "الإنسان (human)",
      type: "contrast",
      description: "Animals loyal vs Humans ungrateful",
      explanation: "The core message: horses serve humans loyally; humans deny Allah ungratefully"
    },
    {
      from: "كَنُود",
      to: "لِحُبِّ الخَيْرِ لَشَدِيد",
      type: "causation",
      description: "Ingratitude comes from love of wealth",
      explanation: "Obsession with material things leads to forgetting the source of blessings"
    },
    {
      from: "حُبّ الخَيْر",
      to: "البَعْث والكَشْف",
      type: "warning",
      description: "Wealth obsession faces judgment",
      explanation: "What they loved and hoarded will be exposed and judged"
    }
  ],

  thematicFlow: {
    title: "From Loyal Service to Ingratitude to Judgment",
    titleArabic: "من الخدمة المخلصة إلى الجحود إلى الحساب",
    description: "The surah moves from animal loyalty to human failings to divine accountability",
    stages: [
      {
        stage: 1,
        theme: "The Oath",
        verses: "100:1-5",
        description: "Five vivid descriptions of loyal war horses"
      },
      {
        stage: 2,
        theme: "The Indictment",
        verses: "100:6-8",
        description: "Human ingratitude and wealth obsession exposed"
      },
      {
        stage: 3,
        theme: "The Warning",
        verses: "100:9-11",
        description: "Resurrection, exposure of secrets, divine awareness"
      }
    ]
  },

  centralContrast: {
    title: "The Great Irony",
    description: "The surah's central message through contrast",
    comparison: {
      horses: [
        "Serve their masters intensely (ضَبْحًا)",
        "Endure hardship (sparks, night travel)",
        "Risk their lives (penetrating enemy lines)",
        "Show complete loyalty",
        "Give without expecting reward"
      ],
      humans: [
        "Are ungrateful to their Lord (كَنُود)",
        "Witness their own ingratitude",
        "Love wealth intensely",
        "Forget their source of blessings",
        "Will face full accountability"
      ]
    },
    punchline: "Animals are more grateful to humans than humans are to Allah"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 102,
        name: "At-Takathur",
        relation: "Both criticize love of wealth",
        sharedTheme: "Wealth obsession"
      },
      {
        surah: 104,
        name: "Al-Humazah",
        relation: "Also condemns wealth hoarding",
        sharedTheme: "Materialism condemned"
      },
      {
        surah: 89,
        name: "Al-Fajr",
        relation: "Similar: human tests God based on wealth",
        sharedTheme: "Misunderstanding blessings"
      },
      {
        surah: 82,
        name: "Al-Infitar",
        verse: 6,
        relation: "'What has deceived you about your Lord?'",
        sharedTheme: "Human ingratitude despite blessings"
      }
    ]
  },

  hadith: [
    {
      arabic: "الخيل معقود في نواصيها الخير إلى يوم القيامة",
      english: "Good is tied to the forelocks of horses until the Day of Judgment",
      source: "Sahih Bukhari & Muslim",
      relevance: "Shows the nobility of horses - context for the oath"
    },
    {
      arabic: "لو كان لابن آدم واديان من ذهب لأحب أن يكون له ثالث",
      english: "If the son of Adam had two valleys of gold, he would want a third",
      source: "Sahih Muslim",
      relevance: "Explains لِحُبِّ الخَيْرِ لَشَدِيد"
    }
  ],

  practicalApplication: {
    title: "Lessons from the Horses",
    applications: [
      {
        principle: "Loyal service",
        from: "Horses serve despite hardship",
        application: "Serve Allah even when difficult"
      },
      {
        principle: "Gratitude",
        from: "Horses are loyal; humans are كَنُود",
        application: "Be more grateful than animals, not less"
      },
      {
        principle: "Wealth perspective",
        from: "لِحُبِّ الخَيْرِ لَشَدِيد",
        application: "Don't let wealth become your god"
      },
      {
        principle: "Hidden awareness",
        from: "حُصِّلَ مَا فِي الصُّدُور",
        application: "Inner intentions matter - Allah knows them"
      }
    ]
  },

  uniqueInsight: {
    title: "Creation Shames the Created",
    insight: "This surah uses a brilliant rhetorical device: swearing by the loyalty of horses to expose human disloyalty. The horse - a mere animal - shows more dedication to its human master than humans show to their Divine Lord. When الإنسان (human, made from the root أنس meaning 'intimacy') becomes كَنُود (denier), even animals demonstrate superior character. The term الخَيْر (good/wealth) is ironic - humans pursue what they call 'good' while being 'bad' to their Lord.",
    modernRelevance: "In a world where pets often show more loyalty than people, this surah's message resonates: If animals serve faithfully, why do humans blessed with intellect deny their Creator?"
  },

  linguisticFeatures: {
    title: "Sound and Structure",
    features: [
      {
        feature: "Onomatopoeia",
        example: "ضَبْحًا sounds like heavy breathing",
        effect: "Immersive imagery - you hear the horses"
      },
      {
        feature: "Feminine plural verbs",
        example: "العاديات، فأثرن، فوسطن",
        effect: "Agreement with feminine collective 'horses' - Arabic grammatical precision"
      },
      {
        feature: "Intensive forms",
        example: "كَنُود (extremely ungrateful), شَدِيد (intense)",
        effect: "Emphasizes severity of human failing"
      },
      {
        feature: "Dramatic sequence",
        example: "فـ... فـ... فـ...",
        effect: "Building momentum like cavalry charge"
      }
    ]
  },

  comparisonTable: {
    title: "Horses vs Humans",
    headers: ["Aspect", "Horses", "Humans"],
    rows: [
      {
        aspect: "Service",
        horses: "Run until panting (ضَبْحًا)",
        humans: "Deny blessings (كَنُود)"
      },
      {
        aspect: "Hardship",
        horses: "Strike sparks, continue (قَدْحًا)",
        humans: "Complain, demand more"
      },
      {
        aspect: "Timing",
        horses: "Attack at optimal time (صُبْحًا)",
        humans: "Delay worship, prioritize wealth"
      },
      {
        aspect: "Courage",
        horses: "Penetrate enemy center (جَمْعًا)",
        humans: "Hide from accountability"
      },
      {
        aspect: "Loyalty",
        horses: "Total dedication to master",
        humans: "Witness their own ingratitude"
      }
    ]
  }
};

export default ONTOLOGY;
