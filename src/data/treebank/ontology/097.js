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
      description: { en: "The moment the Quran began its revelation", ur: "وہ لمحہ جب قرآن کا نزول شروع ہوا" },
      concepts: [
        {
          term: "أَنزَلْنَاهُ",
          transliteration: "Anzalnaahu",
          meaning: { en: "We sent it down", ur: "ہم نے اسے نازل کیا" },
          explanation: { en: "The 'it' refers to the Quran. Scholars discuss: either the entire Quran descended to Bayt al-'Izzah in the lowest heaven, then gradually revealed over 23 years, OR the first verses descended this night.", ur: "'اسے' سے مراد قرآن ہے۔ علماء کی بحث: یا تو پورا قرآن بیت العزہ (آسمان دنیا) پر نازل ہوا، پھر 23 سال میں تدریجاً اترا، یا اس رات پہلی آیات نازل ہوئیں۔" },
          verseRef: "97:1"
        },
        {
          term: "لَيْلَة القَدْر",
          transliteration: "Laylat al-Qadr",
          meaning: { en: "The Night of Power/Decree", ur: "شبِ قدر / تقدیر کی رات" },
          explanation: { en: "Multiple meanings of قَدْر: (1) Decree - destinies determined (2) Power - immense spiritual power (3) Honor - most honored night (4) Measure - Quran's portions measured out.", ur: "قَدْر کے متعدد معانی: (1) تقدیر - قسمتوں کا فیصلہ (2) قدرت - عظیم روحانی طاقت (3) عزت - سب سے بامقام رات (4) مقدار - قرآن کے حصے مقرر کیے گئے۔" },
          verseRef: "97:1-3"
        }
      ]
    },

    nightVirtue: {
      name: "The Night's Virtue",
      nameArabic: "فضل الليلة",
      color: '#8B5CF6',
      icon: 'Moon',
      description: { en: "Why this night is extraordinary", ur: "یہ رات کیوں غیر معمولی ہے" },
      concepts: [
        {
          term: "خَيْرٌ مِن أَلْفِ شَهْر",
          transliteration: "Khayrun min alfi shahr",
          meaning: { en: "Better than a thousand months", ur: "ہزار مہینوں سے بہتر" },
          explanation: { en: "1000 months ≈ 83.3 years - a lifetime. Worship on this one night equals more than 83 years of worship. This was given to the Ummah whose lifespans are shorter than previous nations.", ur: "1000 مہینے ≈ 83.3 سال - ایک پوری زندگی۔ اس ایک رات کی عبادت 83 سال سے زیادہ عبادت کے برابر ہے۔ یہ اس امت کو عطا کی گئی جن کی عمریں پچھلی امتوں سے کم ہیں۔" },
          verseRef: "97:3"
        }
      ]
    },

    angelicDescent: {
      name: "Angelic Descent",
      nameArabic: "نزول الملائكة",
      color: '#F59E0B',
      icon: 'Star',
      description: { en: "The angels and Spirit descend this night", ur: "فرشتے اور روح اس رات نازل ہوتے ہیں" },
      concepts: [
        {
          term: "تَنَزَّلُ المَلَائِكَة",
          transliteration: "Tanazzal al-Malaa'ikah",
          meaning: { en: "The angels descend", ur: "فرشتے اترتے ہیں" },
          explanation: { en: "Form V (تَفَعَّل) indicates gradual, repeated descent - angels keep coming down throughout the night. More angels descend this night than at any other time.", ur: "باب تَفَعُّل بتدریج اور بار بار نزول کی نشاندہی کرتا ہے - پوری رات فرشتے اترتے رہتے ہیں۔ اس رات کسی بھی اور وقت سے زیادہ فرشتے نازل ہوتے ہیں۔" },
          verseRef: "97:4"
        },
        {
          term: "الرُّوح",
          transliteration: "Ar-Rooh",
          meaning: { en: "The Spirit (Jibreel)", ur: "روح (جبریل علیہ السلام)" },
          explanation: { en: "Jibreel (Gabriel) mentioned separately from angels due to his special honor. He brought the Quran down, and he descends on this night.", ur: "جبریل علیہ السلام کو ان کے خاص مقام کی وجہ سے فرشتوں سے الگ ذکر کیا گیا۔ وہ قرآن لے کر آئے اور اس رات نازل ہوتے ہیں۔" },
          verseRef: "97:4"
        },
        {
          term: "بِإِذْنِ رَبِّهِم مِن كُلِّ أَمْر",
          transliteration: "Bi-idhni rabbihim min kulli amr",
          meaning: { en: "By permission of their Lord for every matter", ur: "اپنے رب کے حکم سے ہر معاملے کے لیے" },
          explanation: { en: "Angels descend with decrees for the coming year - provisions, deaths, births, all matters determined.", ur: "فرشتے آنے والے سال کے فیصلے لے کر اترتے ہیں - رزق، موت، پیدائش، تمام معاملات مقرر ہوتے ہیں۔" },
          verseRef: "97:4"
        }
      ]
    },

    nightPeace: {
      name: "Complete Peace",
      nameArabic: "السلام التام",
      color: '#10B981',
      icon: 'Heart',
      description: { en: "The night is pure peace until dawn", ur: "یہ رات فجر تک خالص سلامتی ہے" },
      concepts: [
        {
          term: "سَلَامٌ هِيَ",
          transliteration: "Salaamun hiya",
          meaning: { en: "Peace it is", ur: "وہ سراسر سلامتی ہے" },
          explanation: { en: "Predicate fronted for emphasis - the night IS peace itself. No evil, no disturbance, complete spiritual serenity. Angels greet believers with peace.", ur: "تقدیم خبر تاکید کے لیے - رات خود سلامتی ہے۔ کوئی برائی نہیں، کوئی خلل نہیں، مکمل روحانی سکون۔ فرشتے ایمان والوں کو سلام کرتے ہیں۔" },
          verseRef: "97:5"
        },
        {
          term: "حَتَّى مَطْلَعِ الفَجْر",
          transliteration: "Hattaa matla' al-fajr",
          meaning: { en: "Until the emergence of dawn", ur: "فجر طلوع ہونے تک" },
          explanation: { en: "The blessed state continues until dawn - then normal time resumes. This defines the window for special worship.", ur: "یہ برکت والی کیفیت فجر تک جاری رہتی ہے - پھر عام وقت شروع ہوتا ہے۔ یہ خصوصی عبادت کی مدت متعین کرتی ہے۔" },
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
      description: { en: "Quran revealed during this specific night", ur: "قرآن اس مخصوص رات میں نازل ہوا" },
      explanation: "The most significant revelation at the most significant time"
    },
    {
      from: "لَيْلَة القَدْر",
      to: "خَيْر من ألف شهر",
      type: "value",
      description: { en: "Night's value equals 83+ years", ur: "رات کی قدر 83 سال سے زیادہ کے برابر" },
      explanation: "Divine compensation for shorter lifespans"
    },
    {
      from: "الملائكة والروح",
      to: "سَلَام",
      type: "causation",
      description: { en: "Angels bring peace", ur: "فرشتے سلامتی لاتے ہیں" },
      explanation: "Their descent fills the night with peace and blessings"
    }
  ],

  thematicFlow: {
    title: "From Revelation to Peace",
    titleArabic: "من التنزيل إلى السلام",
    description: { en: "The surah moves from the event to its significance to its atmosphere", ur: "سورت واقعے سے اس کی اہمیت اور پھر اس کی فضا کی طرف بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "The Event",
        verses: "97:1",
        description: { en: "Quran revealed on this night", ur: "اس رات قرآن نازل ہوا" }
      },
      {
        stage: 2,
        theme: "The Question",
        verses: "97:2",
        description: { en: "What is this night? (Building importance)", ur: "یہ رات کیا ہے؟ (اہمیت کا اظہار)" }
      },
      {
        stage: 3,
        theme: "The Value",
        verses: "97:3",
        description: { en: "Better than 1000 months", ur: "ہزار مہینوں سے بہتر" }
      },
      {
        stage: 4,
        theme: "The Activity",
        verses: "97:4",
        description: { en: "Angels and Spirit descend", ur: "فرشتے اور روح نازل ہوتے ہیں" }
      },
      {
        stage: 5,
        theme: "The Atmosphere",
        verses: "97:5",
        description: { en: "Pure peace until dawn", ur: "فجر تک خالص سلامتی" }
      }
    ]
  },

  whenIsLaylatulQadr: {
    title: "Finding Laylat al-Qadr",
    description: { en: "When does this night occur?", ur: "یہ رات کب آتی ہے؟" },
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
    title: { en: "Why 1000 Months?", ur: "ہزار مہینے کیوں؟" },
    insight: { en: "The Prophet ﷺ was shown the lifespans of previous nations - Nuh lived 950 years, some prophets lived centuries. The Muslim Ummah's average lifespan is 60-70 years. How could they match those rewards? Allah gave Laylat al-Qadr: one night = 1000 months (83.3 years). A Muslim who catches this night for just 10 years has earned equivalent of 833 years of worship. This is divine compensation and mercy.", ur: "نبی ﷺ کو پچھلی امتوں کی عمریں دکھائی گئیں - نوح علیہ السلام 950 سال زندہ رہے، بعض انبیاء صدیوں تک۔ مسلم امت کی اوسط عمر 60-70 سال ہے۔ وہ ان ثوابات کو کیسے پا سکتے ہیں؟ Allah نے لیلۃ القدر عطا کی: ایک رات = 1000 مہینے (83.3 سال)۔ جو مسلمان صرف 10 سال یہ رات پائے اس نے 833 سال کی عبادت کے برابر ثواب کمایا۔ یہ الٰہی تلافی اور رحمت ہے۔" },
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
