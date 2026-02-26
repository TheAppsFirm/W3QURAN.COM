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
      nameUr: "الٰہی مداخلت",
      nameArabic: "التدخل الإلهي",
      color: '#F59E0B',
      icon: 'Star',
      description: { en: "Allah's direct action to protect His House", ur: "اپنے گھر کی حفاظت کے لیے Allah کا براہ راست عمل" },
      concepts: [
        {
          term: "فَعَلَ رَبُّك",
          transliteration: "Fa'ala Rabbuk",
          meaning: { en: "What your Lord did", ur: "تمہارے رب نے کیا کیا" },
          explanation: { en: "Emphasizes Allah's personal, active intervention - not a natural disaster but deliberate divine action", ur: "Allah کی ذاتی، فعال مداخلت پر زور - قدرتی آفت نہیں بلکہ جان بوجھ کر الٰہی عمل" },
          verseRef: "105:1"
        },
        {
          term: "أَرْسَلَ",
          transliteration: "Arsala",
          meaning: { en: "He sent", ur: "اس نے بھیجا" },
          explanation: { en: "Same word used for sending Prophets - these birds were divine messengers of destruction", ur: "وہی لفظ جو انبیاء بھیجنے کے لیے استعمال ہوتا ہے - یہ پرندے تباہی کے الٰہی قاصد تھے" },
          verseRef: "105:3"
        }
      ]
    },

    enemiesOfKaaba: {
      name: "Enemies of the Ka'bah",
      nameUr: "کعبہ کے دشمن",
      nameArabic: "أعداء الكعبة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "Those who attempted to destroy Allah's House", ur: "وہ لوگ جنہوں نے Allah کے گھر کو تباہ کرنے کی کوشش کی" },
      concepts: [
        {
          term: "أَصْحَاب الفِيل",
          transliteration: "Ashaab al-Feel",
          meaning: { en: "Companions/People of the Elephant", ur: "ہاتھی والے / اصحاب الفیل" },
          explanation: { en: "Abraha al-Ashram's Abyssinian army that came to destroy Ka'bah in the Year of the Elephant (570 CE)", ur: "ابرہہ الاشرم کا حبشی لشکر جو عام الفیل (570ء) میں کعبہ کو تباہ کرنے آیا" },
          verseRef: "105:1"
        },
        {
          term: "كَيْدَهُم",
          transliteration: "Kaydahum",
          meaning: { en: "Their plot/scheme", ur: "ان کی چال / سازش" },
          explanation: { en: "Their evil plan to destroy Ka'bah and redirect pilgrimage to Abraha's church in Yemen", ur: "کعبہ کو تباہ کرنے اور حج کو یمن میں ابرہہ کے گرجے کی طرف موڑنے کا شیطانی منصوبہ" },
          verseRef: "105:2"
        }
      ]
    },

    divineArmy: {
      name: "Divine Army",
      nameUr: "الٰہی لشکر",
      nameArabic: "جند الله",
      color: '#8B5CF6',
      icon: 'Shield',
      description: { en: "The miraculous force sent to destroy the army", ur: "لشکر کو تباہ کرنے کے لیے بھیجی گئی معجزاتی قوت" },
      concepts: [
        {
          term: "طَيْرًا أَبَابِيل",
          transliteration: "Tayran Abaabeel",
          meaning: { en: "Birds in successive flocks", ur: "جھنڈ در جھنڈ پرندے" },
          explanation: { en: "Wave after wave of birds - أَبَابِيل is unique in Quran, emphasizing continuous, overwhelming attack", ur: "لہر در لہر پرندے - أَبَابِيل قرآن میں منفرد ہے، مسلسل اور زبردست حملے پر زور" },
          verseRef: "105:3"
        },
        {
          term: "حِجَارَة مِن سِجِّيل",
          transliteration: "Hijaarah min Sijjeel",
          meaning: { en: "Stones of baked/hard clay", ur: "پکی ہوئی مٹی کے پتھر" },
          explanation: { en: "Divine projectiles - سِجِّيل used also for punishment of Lut's people. Not ordinary stones.", ur: "الٰہی گولے - سِجِّيل قومِ لوط کی سزا کے لیے بھی استعمال ہوا۔ عام پتھر نہیں۔" },
          verseRef: "105:4"
        }
      ]
    },

    completeDestruction: {
      name: "Complete Destruction",
      nameUr: "مکمل تباہی",
      nameArabic: "الدمار الشامل",
      color: '#DC2626',
      icon: 'Zap',
      description: { en: "The utter annihilation of the army", ur: "لشکر کی مکمل تباہی" },
      concepts: [
        {
          term: "تَضْلِيل",
          transliteration: "Tadleel",
          meaning: { en: "Misguidance / ruin", ur: "گمراہی / تباہی" },
          explanation: { en: "Form II intensive - their plan didn't just fail, it led to their complete destruction", ur: "باب تفعیل شدت کے لیے - ان کا منصوبہ صرف ناکام نہیں ہوا بلکہ ان کی مکمل تباہی کا سبب بنا" },
          verseRef: "105:2"
        },
        {
          term: "عَصْف مَأْكُول",
          transliteration: "'Asf Ma'kool",
          meaning: { en: "Eaten straw", ur: "کھایا ہوا بھوسا" },
          explanation: { en: "Chaff eaten by worms - hollow, perforated, scattered. Ultimate image of destruction.", ur: "کیڑوں کا کھایا ہوا بھوسا - کھوکھلا، سوراخ دار، بکھرا ہوا۔ تباہی کی انتہائی تصویر۔" },
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
      description: { en: "Evil plan transformed into ruin", ur: "شیطانی منصوبہ تباہی میں بدل گیا" },
      explanation: "Allah turned their own scheme against them"
    },
    {
      from: "طَيْر أَبَابِيل",
      to: "حِجَارَة سِجِّيل",
      type: "instrumentality",
      description: { en: "Birds were instrument for stones", ur: "پرندے پتھروں کا ذریعہ تھے" },
      explanation: "Each bird carried stones to strike the army"
    },
    {
      from: "حِجَارَة سِجِّيل",
      to: "عَصْف مَأْكُول",
      type: "causation",
      description: { en: "Stones caused complete destruction", ur: "پتھروں نے مکمل تباہی کی" },
      explanation: "The divine projectiles reduced them to hollow husks"
    }
  ],

  thematicFlow: {
    title: "From Arrogance to Annihilation",
    titleArabic: "من الغرور إلى الدمار",
    description: { en: "The surah traces the complete failure of human power against divine will", ur: "سورت الٰہی ارادے کے مقابلے میں انسانی طاقت کی مکمل ناکامی کا سراغ لگاتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "Rhetorical Opening",
        verses: "105:1",
        description: { en: "Have you not seen? - Drawing attention to a well-known event", ur: "کیا تم نے نہیں دیکھا؟ - ایک معروف واقعے کی طرف توجہ دلانا" }
      },
      {
        stage: 2,
        theme: "Plan Destroyed",
        verses: "105:2",
        description: { en: "Their scheme turned into complete failure", ur: "ان کی سازش مکمل ناکامی میں بدل گئی" }
      },
      {
        stage: 3,
        theme: "Divine Army Sent",
        verses: "105:3",
        description: { en: "Waves of birds dispatched", ur: "پرندوں کے جھنڈ بھیجے گئے" }
      },
      {
        stage: 4,
        theme: "Attack Executed",
        verses: "105:4",
        description: { en: "Pelting with baked clay stones", ur: "پکی ہوئی مٹی کے پتھروں سے بارش" }
      },
      {
        stage: 5,
        theme: "Complete Destruction",
        verses: "105:5",
        description: { en: "Reduced to eaten straw", ur: "کھائے ہوئے بھوسے کی طرح ہو گئے" }
      }
    ]
  },

  historicalContext: {
    title: "The Year of the Elephant (عام الفيل)",
    year: "570 CE (approximately)",
    details: [
      {
        aspect: "Background",
        description: { en: "Abraha al-Ashram, Abyssinian viceroy of Yemen, built a grand church (Al-Qullays) in Sana'a to divert Arab pilgrimage from Ka'bah", ur: "ابرہہ الاشرم، یمن کا حبشی نائب بادشاہ، نے صنعاء میں شاندار گرجا (القلیس) تعمیر کیا تاکہ عرب حج کو کعبہ سے موڑ سکے" }
      },
      {
        aspect: "Provocation",
        description: { en: "An Arab defiled the church, enraging Abraha who vowed to destroy Ka'bah", ur: "ایک عرب نے گرجے کی بے حرمتی کی، ابرہہ غصے میں آیا اور کعبہ تباہ کرنے کی قسم کھائی" }
      },
      {
        aspect: "The Army",
        description: { en: "Abraha marched with a massive army including war elephants, led by the elephant Mahmud", ur: "ابرہہ نے جنگی ہاتھیوں سمیت بڑے لشکر کے ساتھ کوچ کیا، سربراہ ہاتھی محمود تھا" }
      },
      {
        aspect: "Abdul Muttalib",
        description: { en: "Prophet's grandfather retrieved his camels from Abraha, saying 'The House has a Lord who will protect it'", ur: "نبی ﷺ کے دادا نے ابرہہ سے اپنے اونٹ واپس لیے اور کہا 'اس گھر کا ایک رب ہے جو اس کی حفاظت کرے گا'" }
      },
      {
        aspect: "The Miracle",
        description: { en: "The elephant refused to march toward Ka'bah. Birds appeared and pelted the army with stones.", ur: "ہاتھی نے کعبہ کی طرف بڑھنے سے انکار کیا۔ پرندے نمودار ہوئے اور لشکر پر پتھر برسائے۔" }
      },
      {
        aspect: "Aftermath",
        description: { en: "Abraha's army was destroyed. Abraha himself died shortly after returning to Yemen.", ur: "ابرہہ کا لشکر تباہ ہو گیا۔ ابرہہ خود یمن واپسی کے فوراً بعد مر گیا۔" }
      },
      {
        aspect: "Significance",
        description: { en: "This year became the reference point for Arab chronology. Prophet Muhammad ﷺ was born in this year.", ur: "یہ سال عرب تاریخ کا حوالہ نقطہ بن گیا۔ نبی محمد ﷺ اسی سال پیدا ہوئے۔" }
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
    title: { en: "The Birth Year Sign", ur: "سالِ ولادت کی نشانی" },
    insight: { en: "This event occurred in the year Prophet Muhammad ﷺ was born, serving as a divine sign heralding his coming. Allah protected Ka'bah miraculously just before sending the Prophet who would spiritually purify it. The Arabs counted years from this event (Year of the Elephant), making it the most significant pre-Islamic marker - and it pointed to the most significant birth in human history.", ur: "یہ واقعہ اسی سال پیش آیا جب نبی محمد ﷺ پیدا ہوئے، جو ان کی آمد کی الٰہی نشانی تھی۔ Allah نے کعبہ کی معجزاتی حفاظت اس نبی کو بھیجنے سے ٹھیک پہلے کی جو اسے روحانی طور پر پاک کریں گے۔ عربوں نے اس واقعے سے سال گننا شروع کیا (عام الفیل)، جو اسے اسلام سے پہلے کا سب سے اہم حوالہ بناتا ہے - اور یہ انسانی تاریخ کی سب سے اہم ولادت کی طرف اشارہ کرتا تھا۔" },
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
