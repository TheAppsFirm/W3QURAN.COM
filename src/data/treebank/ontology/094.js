/**
 * Surah Ash-Sharh (94) - Ontology of Quranic Concepts
 * The Expansion / Relief
 * Theme: Divine blessings, comfort after hardship, and perpetual striving toward Allah
 */

export const ONTOLOGY = {
  surahId: 94,
  surahName: "Ash-Sharh",
  surahNameArabic: "الشرح",
  revelationType: "Makki",
  totalAyahs: 8,

  categories: {
    divineBlessings: {
      name: "Divine Blessings Upon the Prophet",
      nameArabic: "نعم الله على النبي",
      color: '#F59E0B',
      icon: 'Star',
      description: "Four blessings Allah bestowed upon His Messenger",
      concepts: [
        {
          term: "شَرْح الصَّدْر",
          transliteration: "Sharh as-Sadr",
          meaning: "Expansion of the chest",
          explanation: "Opening of the heart to receive guidance, wisdom, and patience. Includes both the literal opening (angels purifying his heart) and spiritual opening (capacity for prophethood).",
          verseRef: "94:1"
        },
        {
          term: "وَضْع الوِزْر",
          transliteration: "Wad' al-Wizr",
          meaning: "Removal of the burden",
          explanation: "The heavy burden of concerns, struggles, or responsibilities was lifted from the Prophet. Some say pre-prophetic worries, others say the weight of receiving revelation.",
          verseRef: "94:2-3"
        },
        {
          term: "رَفْع الذِّكْر",
          transliteration: "Raf' adh-Dhikr",
          meaning: "Elevation of mention/reputation",
          explanation: "Prophet's name paired with Allah's in shahada, adhan, iqamah, salawat. Billions mention him daily. No human has higher mention in history.",
          verseRef: "94:4"
        }
      ]
    },

    easeWithHardship: {
      name: "The Promise of Ease",
      nameArabic: "اليسر مع العسر",
      color: '#10B981',
      icon: 'Sparkles',
      description: "The famous principle that ease accompanies difficulty",
      concepts: [
        {
          term: "مَعَ العُسْر يُسْرًا",
          transliteration: "Ma'al 'usri yusra",
          meaning: "With hardship is ease",
          explanation: "Ma'a (WITH) not ba'da (AFTER) - ease exists simultaneously with hardship, not just afterwards. Even in the darkest moments, elements of ease are present.",
          verseRef: "94:5-6"
        },
        {
          term: "العُسْر",
          transliteration: "Al-'Usr",
          meaning: "THE hardship (definite)",
          explanation: "Definite article 'al-' makes it specific. In Arabic, repeated definite = same entity. So 'al-'usr' mentioned twice = ONE hardship.",
          verseRef: "94:5-6"
        },
        {
          term: "يُسْرًا × 2",
          transliteration: "Yusran (twice)",
          meaning: "An ease (indefinite, twice)",
          explanation: "Indefinite 'yusran' mentioned twice. In Arabic, repeated indefinite = different entities. So TWO eases vs ONE hardship. Ease always wins!",
          verseRef: "94:5-6"
        }
      ]
    },

    perpetualStriving: {
      name: "Continuous Effort",
      nameArabic: "الجهد المستمر",
      color: '#3B82F6',
      icon: 'Zap',
      description: "Never rest - finish one task, begin another",
      concepts: [
        {
          term: "فَإِذَا فَرَغْتَ فَانصَبْ",
          transliteration: "Fa-idha faraghta fa-nsab",
          meaning: "When you finish, then strive",
          explanation: "No idle time. Finish worldly duties, turn to worship. Finish obligatory worship, do voluntary. The believer is always productively engaged.",
          verseRef: "94:7"
        },
        {
          term: "إِلَى رَبِّكَ فَارْغَب",
          transliteration: "Ilaa Rabbika fa-rghab",
          meaning: "To your Lord direct your longing",
          explanation: "Ultimate direction of all hope and desire is Allah. All effort ultimately aims at His pleasure. Raghiba ilaa = turn toward with desire.",
          verseRef: "94:8"
        }
      ]
    }
  },

  relationships: [
    {
      from: "شرح الصدر",
      to: "وضع الوزر",
      type: "causation",
      description: "Expanded chest enables bearing burdens",
      explanation: "With an expanded heart, burdens feel lighter"
    },
    {
      from: "وضع الوزر",
      to: "رفع الذكر",
      type: "progression",
      description: "Burden removed, mention elevated",
      explanation: "Freedom from burden allows rise in status"
    },
    {
      from: "العسر",
      to: "يسرا",
      type: "accompaniment",
      description: "Hardship and ease coexist",
      explanation: "Ma'a (with) indicates simultaneity"
    },
    {
      from: "فرغت",
      to: "انصب",
      type: "sequence",
      description: "Finish then strive",
      explanation: "One duty ends, another begins"
    }
  ],

  thematicFlow: {
    title: "From Divine Gift to Human Response",
    titleArabic: "من العطاء الإلهي إلى الاستجابة البشرية",
    description: "Allah's blessings lead to human obligation",
    stages: [
      {
        stage: 1,
        theme: "Blessing 1: Opened Chest",
        verses: "94:1",
        description: "Heart expanded for guidance"
      },
      {
        stage: 2,
        theme: "Blessing 2: Burden Removed",
        verses: "94:2-3",
        description: "Heavy load lifted"
      },
      {
        stage: 3,
        theme: "Blessing 3: Name Elevated",
        verses: "94:4",
        description: "Eternal mention alongside Allah"
      },
      {
        stage: 4,
        theme: "The Universal Law",
        verses: "94:5-6",
        description: "With hardship comes ease (twice!)"
      },
      {
        stage: 5,
        theme: "Human Response",
        verses: "94:7-8",
        description: "Perpetual striving toward Allah"
      }
    ]
  },

  theTwoEasesAnalysis: {
    title: "Mathematical Miracle: Two Eases vs One Hardship",
    description: "Arabic grammar proves ease always overcomes hardship",
    analysis: [
      {
        principle: "Repeated definite = same entity",
        application: "العُسْر (al-'usr) appears twice → ONE hardship",
        evidence: "Both have 'al-' definite article"
      },
      {
        principle: "Repeated indefinite = different entities",
        application: "يُسْرًا (yusran) appears twice → TWO eases",
        evidence: "Both lack definite article"
      },
      {
        principle: "Mathematical conclusion",
        application: "2 eases vs 1 hardship = Ease wins 2:1",
        evidence: "Prophet ﷺ said: 'One difficulty cannot overcome two eases'"
      }
    ],
    propheticConfirmation: "The Prophet ﷺ is reported to have said after this revelation: 'لن يغلب عسرٌ يسرين' (One hardship cannot overcome two eases)"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 93,
        name: "Ad-Duha",
        relation: "Sister surah - same theme of consolation",
        sharedTheme: "Comfort to the Prophet in difficulty"
      },
      {
        surah: 6,
        name: "Al-An'am",
        verse: 125,
        relation: "'Whoever Allah wills to guide, He expands his chest for Islam'",
        sharedTheme: "Sharh as-sadr (chest expansion)"
      },
      {
        surah: 39,
        name: "Az-Zumar",
        verse: 22,
        relation: "'Is one whose chest Allah has expanded for Islam...'",
        sharedTheme: "Expanded chest for guidance"
      },
      {
        surah: 20,
        name: "Ta-Ha",
        verse: 25,
        relation: "Musa prays 'Rabbi-shrah li sadri' (My Lord, expand my chest)",
        sharedTheme: "Prophetic request for sharh sadr"
      }
    ]
  },

  hadith: [
    {
      arabic: "لن يغلب عسر يسرين",
      english: "One hardship cannot overcome two eases",
      source: "Various narrations",
      relevance: "Prophet's commentary on verses 5-6"
    },
    {
      arabic: "شُق صدري واستُخرج قلبي فغُسل بماء زمزم",
      english: "My chest was opened and my heart was taken out and washed with Zamzam water",
      source: "Sahih Muslim (Isra/Mi'raj narration)",
      relevance: "Physical fulfillment of 'sharh sadr'"
    },
    {
      arabic: "ما من نبي إلا وقد قال: ربِّ اشرح لي صدري",
      english: "Every prophet prayed: 'My Lord, expand my chest for me'",
      source: "Tafseer literature",
      relevance: "Universal prophetic need for chest expansion"
    }
  ],

  practicalApplication: {
    title: "Living by Surah Ash-Sharh",
    applications: [
      {
        principle: "Gratitude for expansion",
        how: "Recognize that understanding, patience, and guidance are divine gifts",
        verse: "94:1"
      },
      {
        principle: "Burdens are temporary",
        how: "Know that Allah removes burdens - seek His help",
        verse: "94:2-3"
      },
      {
        principle: "Seek elevated mention",
        how: "Live so your name is mentioned with respect after you",
        verse: "94:4"
      },
      {
        principle: "Find ease within hardship",
        how: "Don't wait for hardship to end - look for ease NOW",
        verse: "94:5-6"
      },
      {
        principle: "Never be idle",
        how: "Finish one good deed, immediately start another",
        verse: "94:7"
      },
      {
        principle: "Direct all hopes to Allah",
        how: "Make Allah the ultimate goal of every effort",
        verse: "94:8"
      }
    ]
  },

  uniqueInsight: {
    title: "The Grammar of Hope",
    insight: "This short surah contains one of the Quran's most profound grammatical miracles. The word 'hardship' (al-'usr) appears with the definite article both times - in Arabic, this means it's the SAME hardship being mentioned twice. But 'ease' (yusran) appears indefinitely both times - meaning TWO DIFFERENT eases are promised. The Prophet ﷺ himself explained: 'One hardship cannot overcome two eases.' This isn't mere comfort - it's a mathematical guarantee embedded in Arabic grammar. Furthermore, the preposition 'ma'a' (with) rather than 'ba'da' (after) means ease doesn't just FOLLOW hardship - it EXISTS WITH IT, simultaneously. Even in your darkest hour, ease is already present.",
    modernRelevance: "In times of depression, anxiety, or difficulty, this surah teaches: (1) Ease is already here, look for it (2) More ease is coming (3) Keep working, don't stop (4) Direct all hope to Allah"
  },

  connectionToAdDuha: {
    title: "Twin Surahs: Ad-Duha and Ash-Sharh",
    description: "These two surahs are often considered a pair",
    connections: [
      {
        aspect: "Theme",
        adDuha: "Allah has not abandoned you (consolation)",
        ashSharh: "Allah has blessed you (enumeration)"
      },
      {
        aspect: "Structure",
        adDuha: "11 verses, past/future blessings",
        ashSharh: "8 verses, specific blessings"
      },
      {
        aspect: "Ending",
        adDuha: "Share your blessings (outward)",
        ashSharh: "Direct your heart to Allah (inward)"
      },
      {
        aspect: "Some scholars",
        note: "Consider them one surah - Imam Shafi'i reportedly didn't say bismillah between them in prayer"
      }
    ]
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        feature: "Rhetorical questions",
        example: "أَلَمْ نَشْرَحْ (Did We not expand...)",
        effect: "Gentle reminder, answer is obviously yes"
      },
      {
        feature: "Three past tense blessings",
        example: "شَرَحْنَا, وَضَعْنَا, رَفَعْنَا",
        effect: "Accomplished facts, not promises"
      },
      {
        feature: "Definite vs indefinite contrast",
        example: "العُسْر vs يُسْرًا",
        effect: "Grammatical proof of ease prevailing"
      },
      {
        feature: "Imperative conclusion",
        example: "فَانصَبْ, فَارْغَب",
        effect: "Call to action after comfort"
      }
    ]
  },

  comparisonTable: {
    title: "The Four Divine Gifts",
    headers: ["Blessing", "Arabic", "Effect"],
    rows: [
      {
        blessing: "Chest expansion",
        arabic: "شَرْح الصَّدْر",
        effect: "Capacity for wisdom, patience, guidance"
      },
      {
        blessing: "Burden removal",
        arabic: "وَضْع الوِزْر",
        effect: "Freedom from crushing weight"
      },
      {
        blessing: "Back relief",
        arabic: "أَنقَضَ ظَهْرَكَ",
        effect: "Physical and spiritual rest"
      },
      {
        blessing: "Name elevation",
        arabic: "رَفْع الذِّكْر",
        effect: "Eternal honor and remembrance"
      }
    ]
  },

  memorization: {
    title: "Memorization Aid",
    structure: [
      "Verse 1: Chest opened",
      "Verses 2-3: Burden removed (that weighed on back)",
      "Verse 4: Mention elevated",
      "Verses 5-6: With hardship, ease (repeated!)",
      "Verse 7: When free, strive",
      "Verse 8: To your Lord, turn"
    ],
    mnemonic: "Chest → Burden → Back → Mention → Ease × 2 → Work → Lord"
  }
};

export default ONTOLOGY;
