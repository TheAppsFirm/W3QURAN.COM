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
      nameUr: "قبائلی اتحاد اور مانوسیت",
      nameArabic: "إيلاف قريش",
      color: '#3B82F6',
      icon: 'Users',
      description: { en: "Allah's blessing of uniting and familiarizing Quraysh", ur: "قریش کو متحد اور مانوس کرنے کی Allah کی نعمت" },
      concepts: [
        {
          term: "إِيلَاف",
          transliteration: "Eelaaf",
          meaning: { en: "Accustomed security / familiarity / unification", ur: "مانوسیت / عادت / اتحاد" },
          explanation: { en: "Form IV verbal noun - Allah made Quraysh familiar with their trade routes, gave them security, and united them as a tribe. This is the only surah using this word.", ur: "باب افعال کا مصدر - Allah نے قریش کو ان کے تجارتی راستوں سے مانوس کیا، انہیں تحفظ دیا اور بطور قبیلہ متحد کیا۔ یہ واحد سورت ہے جس میں یہ لفظ استعمال ہوا۔" },
          verseRef: "106:1-2"
        },
        {
          term: "قُرَيْش",
          transliteration: "Quraysh",
          meaning: { en: "The noble tribe of Mecca", ur: "مکہ کا معزز قبیلہ" },
          explanation: { en: "Only mention by name in Quran. From قَرْش (to gather/collect) or a type of shark (strong). They were keepers of Ka'bah.", ur: "قرآن میں نام سے واحد ذکر۔ قَرْش (جمع کرنا) یا ایک قسم کی شارک (طاقتور) سے۔ وہ کعبہ کے محافظ تھے۔" },
          verseRef: "106:1"
        }
      ]
    },

    tradeJourneys: {
      name: "Annual Trade Journeys",
      nameUr: "سالانہ تجارتی سفر",
      nameArabic: "رحلتي الشتاء والصيف",
      color: '#06B6D4',
      icon: 'Compass',
      description: { en: "The two annual trading expeditions that sustained Quraysh", ur: "دو سالانہ تجارتی سفر جنہوں نے قریش کو قائم رکھا" },
      concepts: [
        {
          term: "رِحْلَة الشِّتَاء",
          transliteration: "Rihlat ash-Shitaa'",
          meaning: { en: "Winter Journey", ur: "سردیوں کا سفر" },
          explanation: { en: "Journey to Yemen (south) during winter - warmer climate. Traded for spices, leather, and incense.", ur: "سردیوں میں یمن (جنوب) کا سفر - گرم آب و ہوا۔ مصالحے، چمڑے اور بخور کی تجارت۔" },
          verseRef: "106:2"
        },
        {
          term: "رِحْلَة الصَّيْف",
          transliteration: "Rihlat as-Sayf",
          meaning: { en: "Summer Journey", ur: "گرمیوں کا سفر" },
          explanation: { en: "Journey to Syria/Sham (north) during summer. Traded goods from Yemen and brought back wheat, olive oil, and luxury items.", ur: "گرمیوں میں شام (شمال) کا سفر۔ یمن سے مال لے جاتے اور گندم، زیتون کا تیل اور قیمتی اشیاء واپس لاتے۔" },
          verseRef: "106:2"
        }
      ]
    },

    divineObligations: {
      name: "Worship as Gratitude",
      nameUr: "شکرانے کی عبادت",
      nameArabic: "العبادة شكراً للنعم",
      color: '#8B5CF6',
      icon: 'Heart',
      description: { en: "The obligation to worship Allah in response to His blessings", ur: "Allah کی نعمتوں کے جواب میں اس کی عبادت کی ذمہ داری" },
      concepts: [
        {
          term: "فَلْيَعْبُدُوا رَبَّ هَٰذَا البَيْت",
          transliteration: "Falya'budoo Rabba haadha al-Bayt",
          meaning: { en: "Let them worship the Lord of this House", ur: "پس انہیں اس گھر کے رب کی عبادت کرنی چاہیے" },
          explanation: { en: "The consequential command - blessings require gratitude expressed through worship. 'This House' = Ka'bah, reminding Quraysh Allah owns it, not them.", ur: "نتیجہ خیز حکم - نعمتیں شکر چاہتی ہیں جو عبادت سے ظاہر ہو۔ 'یہ گھر' = کعبہ، قریش کو یاد دلانا کہ Allah اس کا مالک ہے، وہ نہیں۔" },
          verseRef: "106:3"
        }
      ]
    },

    divineBlessings: {
      name: "Two Fundamental Blessings",
      nameUr: "دو بنیادی نعمتیں",
      nameArabic: "نعمتا الطعام والأمن",
      color: '#10B981',
      icon: 'Sparkles',
      description: { en: "The two basic human needs Allah provided", ur: "دو بنیادی انسانی ضروریات جو Allah نے فراہم کیں" },
      concepts: [
        {
          term: "أَطْعَمَهُم مِن جُوع",
          transliteration: "At'amahum min joo'",
          meaning: { en: "Fed them against hunger", ur: "انہیں بھوک سے بچا کر کھلایا" },
          explanation: { en: "Mecca is barren desert - without trade routes, Quraysh would starve. Allah enabled their sustenance.", ur: "مکہ بنجر صحرا ہے - تجارتی راستوں کے بغیر قریش بھوکے مرتے۔ Allah نے ان کا رزق ممکن بنایا۔" },
          verseRef: "106:4"
        },
        {
          term: "آمَنَهُم مِن خَوْف",
          transliteration: "Aamanahum min khawf",
          meaning: { en: "Secured them from fear", ur: "انہیں خوف سے محفوظ کیا" },
          explanation: { en: "Arab tribes were raiders; Quraysh alone were safe due to their status as Ka'bah keepers. This security was from Allah.", ur: "عرب قبائل لوٹ مار کرتے تھے؛ صرف قریش محفوظ تھے کعبہ کے محافظ ہونے کی حیثیت سے۔ یہ تحفظ Allah کی طرف سے تھا۔" },
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
      description: { en: "Unity/familiarity enabled safe trade journeys", ur: "اتحاد/مانوسیت نے محفوظ تجارتی سفر ممکن بنائے" },
      explanation: "Allah's blessing of tribal unity made annual trade possible"
    },
    {
      from: "رحلة التجارة",
      to: "الطعام والأمن",
      type: "provision",
      description: { en: "Trade journeys provided food and maintained security", ur: "تجارتی سفروں نے خوراک فراہم کی اور تحفظ قائم رکھا" },
      explanation: "Economic prosperity led to both sustenance and political safety"
    },
    {
      from: "النعم",
      to: "العبادة",
      type: "obligation",
      description: { en: "Blessings create obligation to worship", ur: "نعمتیں عبادت کی ذمہ داری پیدا کرتی ہیں" },
      explanation: "The فَ in فَلْيَعْبُدُوا shows worship is the required response to blessings"
    },
    {
      from: "رَبّ البَيْت",
      to: "قريش",
      type: "ownership",
      description: { en: "Allah owns the House, not Quraysh", ur: "Allah گھر کا مالک ہے، قریش نہیں" },
      explanation: "Reminder that their status as keepers doesn't make them owners"
    }
  ],

  thematicFlow: {
    title: "From Blessing to Obligation",
    titleArabic: "من النعمة إلى الشكر",
    description: { en: "The surah moves from divine gifts to human response", ur: "سورت الٰہی عطاؤں سے انسانی جواب کی طرف بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "The Gift of Unity",
        verses: "106:1",
        description: { en: "Allah united Quraysh and made them secure", ur: "Allah نے قریش کو متحد اور محفوظ کیا" }
      },
      {
        stage: 2,
        theme: "The Gift of Trade",
        verses: "106:2",
        description: { en: "Annual trade journeys provided economic stability", ur: "سالانہ تجارتی سفروں نے معاشی استحکام دیا" }
      },
      {
        stage: 3,
        theme: "The Required Response",
        verses: "106:3",
        description: { en: "Therefore worship the Lord of Ka'bah", ur: "پس کعبہ کے رب کی عبادت کرو" }
      },
      {
        stage: 4,
        theme: "Reminder of Favors",
        verses: "106:4",
        description: { en: "He provided food and security", ur: "اس نے خوراک اور تحفظ فراہم کیا" }
      }
    ]
  },

  connectionToAlFil: {
    title: "Connection to Surah Al-Fil (105)",
    description: { en: "Many scholars consider these two surahs connected", ur: "بہت سے علماء ان دو سورتوں کو مربوط سمجھتے ہیں" },
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
        description: { en: "Quraysh were the dominant tribe of Mecca, keepers of Ka'bah since Qusay ibn Kilab (5th century CE)", ur: "قریش مکہ کا غالب قبیلہ تھا، قصی بن کلاب (پانچویں صدی عیسوی) سے کعبہ کے محافظ" }
      },
      {
        aspect: "Trade Economy",
        description: { en: "Mecca's barren location made trade essential. Quraysh monopolized Arabian trade routes.", ur: "مکہ کے بنجر مقام نے تجارت کو ضروری بنایا۔ قریش نے عرب تجارتی راستوں پر اجارہ داری قائم کی۔" }
      },
      {
        aspect: "Sacred Security",
        description: { en: "Arabs respected Ka'bah keepers - Quraysh could travel safely when others would be raided.", ur: "عرب کعبہ کے محافظوں کا احترام کرتے تھے - قریش محفوظ سفر کر سکتے تھے جبکہ دوسروں پر لوٹ مار ہوتی۔" }
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
    title: { en: "The Logic of Gratitude", ur: "شکرگزاری کی منطق" },
    insight: { en: "This surah presents a simple, powerful argument: Allah gave you everything → therefore worship Him alone. The Quraysh were uniquely blessed with tribal unity, economic prosperity through trade, food in a barren land, and security among hostile tribes. Each blessing traces back to Allah, making worship the only logical response.", ur: "یہ سورت ایک سادہ لیکن طاقتور دلیل پیش کرتی ہے: Allah نے تمہیں سب کچھ دیا ← پس صرف اسی کی عبادت کرو۔ قریش کو منفرد نعمتیں ملیں: قبائلی اتحاد، تجارت سے معاشی خوشحالی، بنجر سرزمین میں خوراک، اور دشمن قبائل کے درمیان تحفظ۔ ہر نعمت Allah تک پہنچتی ہے، جو عبادت کو واحد منطقی جواب بناتی ہے۔" },
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
