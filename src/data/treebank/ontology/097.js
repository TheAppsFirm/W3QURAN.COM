/**
 * Surah Al-Qadr (97) - Ontology of Quranic Concepts
 * The Night of Power
 * Theme: The blessed night when the Quran was revealed
 */

export const ONTOLOGY = {
  surahId: 97,
  surahName: "Al-Qadr",
  surahNameArabic: "القدر",
  revelationType: "Makki",
  totalAyahs: 5,

  categories: {
    quranRevelation: {
      name: "The Quran's Descent",
      nameArabic: "نزول القرآن",
      color: '#3B82F6',
      icon: 'Book',
      description: "The moment the Quran began its revelation",
      concepts: [
        {
          term: "أَنزَلْنَاهُ",
          transliteration: "Anzalnaahu",
          meaning: "We sent it down",
          explanation: "The 'it' refers to the Quran. Scholars discuss: either the entire Quran descended to Bayt al-'Izzah in the lowest heaven, then gradually revealed over 23 years, OR the first verses descended this night.",
          verseRef: "97:1"
        },
        {
          term: "لَيْلَة القَدْر",
          transliteration: "Laylat al-Qadr",
          meaning: "The Night of Power/Decree",
          explanation: "Multiple meanings of قَدْر: (1) Decree - destinies determined (2) Power - immense spiritual power (3) Honor - most honored night (4) Measure - Quran's portions measured out.",
          verseRef: "97:1-3"
        }
      ]
    },

    nightVirtue: {
      name: "The Night's Virtue",
      nameArabic: "فضل الليلة",
      color: '#8B5CF6',
      icon: 'Moon',
      description: "Why this night is extraordinary",
      concepts: [
        {
          term: "خَيْرٌ مِن أَلْفِ شَهْر",
          transliteration: "Khayrun min alfi shahr",
          meaning: "Better than a thousand months",
          explanation: "1000 months ≈ 83.3 years - a lifetime. Worship on this one night equals more than 83 years of worship. This was given to the Ummah whose lifespans are shorter than previous nations.",
          verseRef: "97:3"
        }
      ]
    },

    angelicDescent: {
      name: "Angelic Descent",
      nameArabic: "نزول الملائكة",
      color: '#F59E0B',
      icon: 'Star',
      description: "The angels and Spirit descend this night",
      concepts: [
        {
          term: "تَنَزَّلُ المَلَائِكَة",
          transliteration: "Tanazzal al-Malaa'ikah",
          meaning: "The angels descend",
          explanation: "Form V (تَفَعَّل) indicates gradual, repeated descent - angels keep coming down throughout the night. More angels descend this night than at any other time.",
          verseRef: "97:4"
        },
        {
          term: "الرُّوح",
          transliteration: "Ar-Rooh",
          meaning: "The Spirit (Jibreel)",
          explanation: "Jibreel (Gabriel) mentioned separately from angels due to his special honor. He brought the Quran down, and he descends on this night.",
          verseRef: "97:4"
        },
        {
          term: "بِإِذْنِ رَبِّهِم مِن كُلِّ أَمْر",
          transliteration: "Bi-idhni rabbihim min kulli amr",
          meaning: "By permission of their Lord for every matter",
          explanation: "Angels descend with decrees for the coming year - provisions, deaths, births, all matters determined.",
          verseRef: "97:4"
        }
      ]
    },

    nightPeace: {
      name: "Complete Peace",
      nameArabic: "السلام التام",
      color: '#10B981',
      icon: 'Heart',
      description: "The night is pure peace until dawn",
      concepts: [
        {
          term: "سَلَامٌ هِيَ",
          transliteration: "Salaamun hiya",
          meaning: "Peace it is",
          explanation: "Predicate fronted for emphasis - the night IS peace itself. No evil, no disturbance, complete spiritual serenity. Angels greet believers with peace.",
          verseRef: "97:5"
        },
        {
          term: "حَتَّى مَطْلَعِ الفَجْر",
          transliteration: "Hattaa matla' al-fajr",
          meaning: "Until the emergence of dawn",
          explanation: "The blessed state continues until dawn - then normal time resumes. This defines the window for special worship.",
          verseRef: "97:5"
        }
      ]
    }
  },

  relationships: [
    {
      from: "أَنزَلْنَاهُ",
      to: "لَيْلَة القَدْر",
      type: "event-time",
      description: "Quran revealed during this specific night",
      explanation: "The most significant revelation at the most significant time"
    },
    {
      from: "لَيْلَة القَدْر",
      to: "خَيْر من ألف شهر",
      type: "value",
      description: "Night's value equals 83+ years",
      explanation: "Divine compensation for shorter lifespans"
    },
    {
      from: "الملائكة والروح",
      to: "سَلَام",
      type: "causation",
      description: "Angels bring peace",
      explanation: "Their descent fills the night with peace and blessings"
    }
  ],

  thematicFlow: {
    title: "From Revelation to Peace",
    titleArabic: "من التنزيل إلى السلام",
    description: "The surah moves from the event to its significance to its atmosphere",
    stages: [
      {
        stage: 1,
        theme: "The Event",
        verses: "97:1",
        description: "Quran revealed on this night"
      },
      {
        stage: 2,
        theme: "The Question",
        verses: "97:2",
        description: "What is this night? (Building importance)"
      },
      {
        stage: 3,
        theme: "The Value",
        verses: "97:3",
        description: "Better than 1000 months"
      },
      {
        stage: 4,
        theme: "The Activity",
        verses: "97:4",
        description: "Angels and Spirit descend"
      },
      {
        stage: 5,
        theme: "The Atmosphere",
        verses: "97:5",
        description: "Pure peace until dawn"
      }
    ]
  },

  whenIsLaylatulQadr: {
    title: "Finding Laylat al-Qadr",
    description: "When does this night occur?",
    positions: [
      {
        view: "Ramadan",
        evidence: "Surah Al-Baqarah 2:185 - Quran revealed in Ramadan"
      },
      {
        view: "Last 10 nights",
        evidence: "Prophet ﷺ sought it in last 10 nights of Ramadan (Bukhari)"
      },
      {
        view: "Odd nights of last 10",
        evidence: "'Seek it in the odd nights of the last 10' (Bukhari)"
      },
      {
        view: "27th night",
        evidence: "Most common opinion among scholars"
      },
      {
        view: "Hidden/shifts",
        evidence: "Wisdom: so people worship multiple nights"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 2,
        name: "Al-Baqarah",
        verse: 185,
        relation: "States Quran revealed in Ramadan",
        sharedTheme: "Timing of revelation"
      },
      {
        surah: 44,
        name: "Ad-Dukhan",
        verses: "1-4",
        relation: "Mentions 'blessed night' of revelation and decree",
        sharedTheme: "Night of revelation"
      },
      {
        surah: 53,
        name: "An-Najm",
        verses: "4-10",
        relation: "Describes Jibreel (الرُّوح) teaching Prophet",
        sharedTheme: "Jibreel's role"
      }
    ]
  },

  hadith: [
    {
      arabic: "من قام ليلة القدر إيماناً واحتساباً غُفر له ما تقدم من ذنبه",
      english: "Whoever stands in prayer on Laylat al-Qadr with faith and seeking reward, his previous sins will be forgiven",
      source: "Sahih Bukhari & Muslim",
      relevance: "Shows the immense reward of this night"
    },
    {
      arabic: "التمسوها في الوتر من العشر الأواخر من رمضان",
      english: "Seek it in the odd nights of the last ten of Ramadan",
      source: "Sahih Bukhari",
      relevance: "Guidance on when to find it"
    },
    {
      arabic: "اللهم إنك عفو تحب العفو فاعف عني",
      english: "O Allah, You are Forgiving and love forgiveness, so forgive me",
      source: "Tirmidhi",
      relevance: "Du'a taught to Aisha for this night"
    }
  ],

  practicalApplication: {
    title: "Maximizing Laylat al-Qadr",
    applications: [
      {
        action: "Seek it actively",
        how: "Don't sleep through the last 10 nights",
        verse: "97:1-3"
      },
      {
        action: "Pray Tahajjud",
        how: "Night prayer with long surahs",
        verse: "97:4 - angels witness"
      },
      {
        action: "Make du'a",
        how: "Ask for forgiveness, guidance, needs",
        verse: "97:5 - night of peace"
      },
      {
        action: "Read Quran",
        how: "The book revealed this night",
        verse: "97:1"
      },
      {
        action: "Give charity",
        how: "Deeds multiplied this night",
        verse: "97:3"
      }
    ]
  },

  uniqueInsight: {
    title: "Why 1000 Months?",
    insight: "The Prophet ﷺ was shown the lifespans of previous nations - Nuh lived 950 years, some prophets lived centuries. The Muslim Ummah's average lifespan is 60-70 years. How could they match those rewards? Allah gave Laylat al-Qadr: one night = 1000 months (83.3 years). A Muslim who catches this night for just 10 years has earned equivalent of 833 years of worship. This is divine compensation and mercy.",
    mathematicalBeauty: "If someone catches Laylat al-Qadr every year for 50 years = equivalent to 4,166 years of worship"
  },

  signsOfTheNight: {
    title: "Signs of Laylat al-Qadr",
    signs: [
      {
        sign: "Peaceful atmosphere",
        source: "Derived from verse 5: 'Peace it is'",
        note: "Serenity in the heart and environment"
      },
      {
        sign: "Moderate temperature",
        source: "Hadith literature",
        note: "Neither hot nor cold"
      },
      {
        sign: "Calm weather",
        source: "Hadith literature",
        note: "No strong winds"
      },
      {
        sign: "Morning sun rises without rays",
        source: "Sahih Muslim",
        note: "The following morning's sun"
      }
    ]
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        feature: "Three mentions of لَيْلَة القَدْر",
        effect: "Emphasizes its supreme importance"
      },
      {
        feature: "وَمَا أَدْرَاكَ formula",
        effect: "Builds anticipation - beyond normal knowing"
      },
      {
        feature: "سَلَامٌ fronted",
        effect: "Emphasizes peace as the night's essence"
      },
      {
        feature: "Royal 'We' (إِنَّا)",
        effect: "Divine majesty in announcing this gift"
      }
    ]
  },

  comparisonTable: {
    title: "Meanings of القَدْر",
    headers: ["Meaning", "Arabic Term", "Implication"],
    rows: [
      {
        meaning: "Decree/Predestination",
        arabic: "التقدير",
        implication: "Destinies for the year are set this night"
      },
      {
        meaning: "Power/Ability",
        arabic: "القدرة",
        implication: "Night of immense spiritual power"
      },
      {
        meaning: "Honor/Status",
        arabic: "الشرف والمنزلة",
        implication: "Most honored night of the year"
      },
      {
        meaning: "Measure/Portion",
        arabic: "المقدار",
        implication: "Quran's portions measured for revelation"
      }
    ]
  }
};

export default ONTOLOGY;
