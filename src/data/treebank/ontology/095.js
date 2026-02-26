/**
 * Surah At-Tin (95) - Ontology of Quranic Concepts
 * The Fig
 * Theme: Human dignity as best creation, the fall to lowest depths, and divine justice
 */

export const ONTOLOGY = {
  surahId: 95,
  surahName: "At-Tin",
  surahNameArabic: "التين",
  revelationType: "Makki",
  totalAyahs: 8,

  categories: {
    sacredOaths: {
      name: "Divine Oaths by Sacred Places",
      nameUr: "مقدس مقامات کی الٰہی قسمیں",
      nameArabic: "القسم بالأماكن المقدسة",
      color: '#8B5CF6',
      icon: 'Star',
      description: { en: "Allah swears by blessed fruits and sacred locations", ur: "اللہ مبارک پھلوں اور مقدس مقامات کی قسم کھاتا ہے" },
      concepts: [
        {
          term: "التِّين والزَّيْتُون",
          transliteration: "At-Teen waz-Zaytoon",
          meaning: { en: "The fig and the olive", ur: "انجیر اور زیتون" },
          explanation: { en: "Scholars say these represent: (1) The actual blessed fruits (2) The lands where they grow - Damascus/Palestine (3) The mountains where prophets received revelation. Fig and olive together symbolize complete blessing.", ur: "علماء کہتے ہیں یہ ظاہر کرتے ہیں: (1) حقیقی مبارک پھل (2) وہ سرزمینیں جہاں یہ اگتے ہیں - دمشق/فلسطین (3) وہ پہاڑ جہاں انبیاء کو وحی ملی۔ انجیر اور زیتون مل کر مکمل نعمت کی علامت۔" },
          verseRef: "95:1"
        },
        {
          term: "طُورِ سِينِين",
          transliteration: "Toor Seeneen",
          meaning: { en: "Mount Sinai", ur: "طور سینا" },
          explanation: { en: "The blessed mountain where Musa received the Torah. 'Seeneen' may mean 'blessed' or 'beautiful' in Syriac. Sacred site of divine communication.", ur: "وہ مبارک پہاڑ جہاں حضرت موسیٰ کو تورات ملی۔ 'سینین' سریانی میں 'مبارک' یا 'خوبصورت' کا مطلب ہو سکتا ہے۔ الٰہی کلام کا مقدس مقام۔" },
          verseRef: "95:2"
        },
        {
          term: "البَلَد الأَمِين",
          transliteration: "Al-Balad al-Ameen",
          meaning: { en: "The Secure City (Makkah)", ur: "امن والا شہر (مکہ)" },
          explanation: { en: "Makkah - the Haram where the Prophet received the Quran. 'Ameen' (secure) because fighting is prohibited there, and it's a sanctuary for all.", ur: "مکہ - وہ حرم جہاں نبی کو قرآن ملا۔ 'امین' (محفوظ) کیونکہ یہاں لڑائی ممنوع ہے اور یہ سب کے لیے پناہ گاہ ہے۔" },
          verseRef: "95:3"
        }
      ]
    },

    humanCreation: {
      name: "Human Excellence in Creation",
      nameUr: "تخلیق میں انسانی کمال",
      nameArabic: "كمال خلق الإنسان",
      color: '#F59E0B',
      icon: 'Crown',
      description: { en: "Man created in the most perfect form", ur: "انسان بہترین صورت میں پیدا کیا گیا" },
      concepts: [
        {
          term: "أَحْسَن تَقْوِيم",
          transliteration: "Ahsan Taqweem",
          meaning: { en: "The best stature/form", ur: "بہترین ساخت/صورت" },
          explanation: { en: "The superlative ahsan (best) + taqweem (straightening/form) = absolutely best possible form. Includes: upright posture, balanced proportions, intellect, speech, opposable thumbs, soul, and capacity for worship.", ur: "افعل التفضیل احسن (بہترین) + تقویم (سیدھا کرنا/صورت) = بالکل بہترین ممکنہ شکل۔ شامل ہے: سیدھی قامت، متوازن تناسب، عقل، بولنے کی صلاحیت، روح اور عبادت کی استعداد۔" },
          verseRef: "95:4"
        },
        {
          term: "خَلَقْنَا الإِنسَان",
          transliteration: "Khalaqna al-Insan",
          meaning: { en: "We created mankind", ur: "ہم نے انسان کو پیدا کیا" },
          explanation: { en: "Royal 'We' emphasizes divine majesty. Al-Insan (with definite article) means all humanity, not just one person. Every human is created with this potential.", ur: "شاہانہ 'ہم' الٰہی عظمت پر زور دیتا ہے۔ الانسان (الف لام کے ساتھ) مطلب پوری انسانیت، صرف ایک شخص نہیں۔ ہر انسان اس صلاحیت کے ساتھ پیدا ہوا۔" },
          verseRef: "95:4"
        }
      ]
    },

    humanFall: {
      name: "The Fall to Lowest Depths",
      nameUr: "پست ترین درجے تک گراوٹ",
      nameArabic: "الانحدار إلى أسفل سافلين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "How humans can descend from highest to lowest", ur: "انسان بلند ترین سے پست ترین تک کیسے گر سکتا ہے" },
      concepts: [
        {
          term: "أَسْفَل سَافِلِين",
          transliteration: "Asfal Saafileen",
          meaning: { en: "The lowest of the low", ur: "پست ترین درجہ" },
          explanation: { en: "Multiple interpretations: (1) Old age and weakness (2) Hellfire (3) Moral degradation through sin (4) Becoming worse than animals by rejecting fitrah. The contrast with 'best form' is stark.", ur: "متعدد تفسیریں: (1) بڑھاپا اور کمزوری (2) جہنم (3) گناہ سے اخلاقی زوال (4) فطرت رد کر کے جانوروں سے بدتر ہونا۔ 'بہترین صورت' سے تضاد واضح ہے۔" },
          verseRef: "95:5"
        },
        {
          term: "رَدَدْنَاهُ",
          transliteration: "Radadnaahu",
          meaning: { en: "We returned him", ur: "ہم نے اسے لوٹا دیا" },
          explanation: { en: "Allah allows the return/descent - not forces it. Through choices over time (thumma = then, with gap), humans can fall from their exalted position.", ur: "اللہ واپسی/نزول کی اجازت دیتا ہے - مجبور نہیں کرتا۔ وقت کے ساتھ انتخاب سے (ثمّ = پھر، وقفے کے ساتھ) انسان اپنے بلند مقام سے گر سکتا ہے۔" },
          verseRef: "95:5"
        }
      ]
    },

    salvation: {
      name: "The Path of Salvation",
      nameArabic: "طريق النجاة",
      color: '#10B981',
      icon: 'Compass',
      description: { en: "How to avoid falling to lowest depths", ur: "پست ترین درجے میں گرنے سے کیسے بچیں" },
      concepts: [
        {
          term: "آمَنُوا وَعَمِلُوا الصَّالِحَات",
          transliteration: "Aamanoo wa 'amilus-Saalihaat",
          meaning: { en: "Believe and do righteous deeds", ur: "ایمان لائے اور نیک عمل کیے" },
          explanation: { en: "The consistent Quranic formula for salvation. Faith (iman) without action is incomplete. Action without faith is directionless. Together they preserve human dignity.", ur: "نجات کا مستقل قرآنی فارمولا۔ ایمان بغیر عمل ادھورا ہے۔ عمل بغیر ایمان بے سمت ہے۔ دونوں مل کر انسانی وقار محفوظ رکھتے ہیں۔" },
          verseRef: "95:6"
        },
        {
          term: "أَجْر غَيْر مَمْنُون",
          transliteration: "Ajr ghayr Mamnoon",
          meaning: { en: "Reward uninterrupted", ur: "نہ ختم ہونے والا اجر" },
          explanation: { en: "Mamnoon from manna = cut off. Ghayr mamnoon = never cut off, never diminished, never reminded about (no 'strings attached'). Eternal, pure, unending reward.", ur: "ممنون منّ (کاٹنا) سے ماخوذ۔ غیر ممنون = کبھی نہ کٹنے والا، کبھی نہ گھٹنے والا، نہ احسان جتایا جائے (کوئی شرط نہیں)۔ ابدی، خالص، لامتناہی اجر۔" },
          verseRef: "95:6"
        }
      ]
    },

    divineJustice: {
      name: "The Supreme Judge",
      nameArabic: "أحكم الحاكمين",
      color: '#F59E0B',
      icon: 'Scale',
      description: { en: "Allah as the most just judge", ur: "اللہ سب سے عادل فیصلہ کرنے والا" },
      concepts: [
        {
          term: "أَحْكَم الحَاكِمِين",
          transliteration: "Ahkam al-Haakimeen",
          meaning: { en: "The most just of judges", ur: "سب سے عادل فیصلہ کرنے والا" },
          explanation: { en: "Ahkam combines wisdom (hikmah) and justice (hukm). Allah judges with perfect knowledge, complete fairness, and ultimate wisdom. No appeal needed or possible.", ur: "احکم میں حکمت اور عدل دونوں جمع ہیں۔ اللہ کامل علم، مکمل انصاف اور حتمی حکمت سے فیصلہ کرتا ہے۔ نہ اپیل کی ضرورت نہ امکان۔" },
          verseRef: "95:8"
        },
        {
          term: "الدِّين",
          transliteration: "Ad-Deen",
          meaning: { en: "The Recompense/Judgment", ur: "جزا و سزا/فیصلے کا دن" },
          explanation: { en: "Here deen means recompense/judgment, not religion. Same word because religion leads to judgment. Yawm ad-Deen = Day when all debts are settled.", ur: "یہاں دین کا مطلب جزا/فیصلہ ہے، مذہب نہیں۔ ایک ہی لفظ کیونکہ مذہب فیصلے کی طرف لے جاتا ہے۔ یوم الدین = وہ دن جب تمام حساب چکایا جائے گا۔" },
          verseRef: "95:7"
        }
      ]
    }
  },

  relationships: [
    {
      from: "أحسن تقويم",
      to: "أسفل سافلين",
      type: "contrast",
      description: { en: "From best to lowest", ur: "بہترین سے پست ترین تک" },
      explanation: { en: "The extreme contrast shows human potential for both heights and depths", ur: "انتہائی تضاد انسانی صلاحیت کو بلندی اور پستی دونوں کے لیے ظاہر کرتا ہے" }
    },
    {
      from: "أسفل سافلين",
      to: "آمنوا وعملوا الصالحات",
      type: "exception",
      description: { en: "Faith and deeds prevent the fall", ur: "ایمان اور اعمال گرنے سے بچاتے ہیں" },
      explanation: { en: "The 'illa' (except) shows the way to maintain human dignity", ur: "'الّا' (سوائے) انسانی وقار برقرار رکھنے کا راستہ دکھاتا ہے" }
    },
    {
      from: "التين والزيتون",
      to: "البلد الأمين",
      type: "progression",
      description: { en: "Geographic progression of revelation", ur: "وحی کی جغرافیائی پیش رفت" },
      explanation: { en: "From Levant (Isa) to Sinai (Musa) to Makkah (Muhammad) - history of guidance", ur: "شام (عیسیٰ) سے سینا (موسیٰ) سے مکہ (محمد) - ہدایت کی تاریخ" }
    },
    {
      from: "أحكم الحاكمين",
      to: "الدين",
      type: "authority",
      description: { en: "Supreme Judge for Judgment Day", ur: "یوم الحساب کا اعلیٰ ترین فیصلہ ساز" },
      explanation: { en: "Allah's perfect justice ensures fair recompense", ur: "اللہ کا کامل انصاف منصفانہ جزا یقینی بناتا ہے" }
    }
  ],

  thematicFlow: {
    title: "From Sacred Oaths to Divine Justice",
    titleArabic: "من القسم المقدس إلى العدل الإلهي",
    description: { en: "The surah moves from blessed oaths to human nature to accountability", ur: "سورت مبارک قسموں سے انسانی فطرت سے جوابدہی تک بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "Sacred Oaths",
        verses: "95:1-3",
        description: { en: "Three oaths by blessed places linked to prophets", ur: "انبیاء سے جڑے مبارک مقامات کی تین قسمیں" }
      },
      {
        stage: 2,
        theme: "Human Excellence",
        verses: "95:4",
        description: { en: "Mankind created in the best form", ur: "انسان بہترین صورت میں پیدا کیا گیا" }
      },
      {
        stage: 3,
        theme: "The Fall",
        verses: "95:5",
        description: { en: "Degradation to lowest of low", ur: "پست ترین درجے تک گراوٹ" }
      },
      {
        stage: 4,
        theme: "The Exception",
        verses: "95:6",
        description: { en: "Faith and deeds save from falling", ur: "ایمان اور اعمال گرنے سے بچاتے ہیں" }
      },
      {
        stage: 5,
        theme: "The Question",
        verses: "95:7",
        description: { en: "What causes denial of Judgment?", ur: "فیصلے کے انکار کا سبب کیا ہے؟" }
      },
      {
        stage: 6,
        theme: "Divine Justice",
        verses: "95:8",
        description: { en: "Allah as supreme judge - rhetorical conclusion", ur: "اللہ بحیثیت اعلیٰ فیصلہ ساز - بلاغی اختتام" }
      }
    ]
  },

  geographicSymbolism: {
    title: "Three Lands of Revelation",
    description: { en: "The oaths map the geography of prophethood", ur: "قسمیں نبوت کی جغرافیہ بیان کرتی ہیں" },
    places: [
      {
        symbol: "التين والزيتون",
        location: "Palestine/Damascus",
        prophet: "Isa (Jesus)",
        revelation: "Injil",
        note: "Land of figs and olives"
      },
      {
        symbol: "طور سينين",
        location: "Sinai Peninsula",
        prophet: "Musa (Moses)",
        revelation: "Torah",
        note: "Mountain of divine speech"
      },
      {
        symbol: "البلد الأمين",
        location: "Makkah",
        prophet: "Muhammad",
        revelation: "Quran",
        note: "Final, complete revelation"
      }
    ],
    insight: "All three places witness: humans can achieve greatness (prophets) or fall to depths (their opponents)"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 90,
        name: "Al-Balad",
        relation: "Also swears by 'this city' (Makkah)",
        sharedTheme: "Makkah's sanctity"
      },
      {
        surah: 84,
        name: "Al-Inshiqaq",
        verses: "84:6",
        relation: "Humans labor toward their Lord",
        sharedTheme: "Human striving"
      },
      {
        surah: 32,
        name: "As-Sajdah",
        verse: 7,
        relation: "'Who perfected everything He created'",
        sharedTheme: "Perfect creation"
      },
      {
        surah: 17,
        name: "Al-Isra",
        verse: 70,
        relation: "'We have honored the children of Adam'",
        sharedTheme: "Human dignity"
      },
      {
        surah: 91,
        name: "Ash-Shams",
        verses: "91:7-10",
        relation: "Soul's potential for purity or corruption",
        sharedTheme: "Human moral potential"
      }
    ]
  },

  hadith: [
    {
      arabic: "من قرأ والتين والزيتون فليقل: بلى وأنا على ذلك من الشاهدين",
      english: "Whoever reads 'By the fig and the olive' and reaches 'Is not Allah the most just of judges?' should say: 'Yes indeed, and I am among those who testify to that'",
      source: "Tirmidhi, Abu Dawud",
      relevance: "Recommended response at the end of this surah"
    },
    {
      arabic: "إن الله خلق آدم على صورته",
      english: "Allah created Adam in His image (or: in his best form)",
      source: "Bukhari & Muslim",
      relevance: "Relates to 'best stature' - human dignity from divine creation"
    }
  ],

  practicalApplication: {
    title: "Living the Message of At-Tin",
    applications: [
      {
        principle: "Honor your creation",
        how: "Recognize your potential - you're designed for greatness",
        verse: "95:4"
      },
      {
        principle: "Avoid the fall",
        how: "Choices degrade us over time (thumma) - guard against gradual decline",
        verse: "95:5"
      },
      {
        principle: "Faith + Action formula",
        how: "Neither faith without deeds nor deeds without faith suffices",
        verse: "95:6"
      },
      {
        principle: "Expect judgment",
        how: "Live knowing the Supreme Judge sees all",
        verse: "95:8"
      },
      {
        principle: "Respond to the surah",
        how: "Say 'Balaa, wa ana 'ala dhaalika min ash-shaahideen' at the end",
        verse: "95:8"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Two Extremes of Human Potential", ur: "انسانی صلاحیت کی دو انتہائیں" },
    insight: { en: "This surah presents the most dramatic contrast in the Quran regarding human nature. In just 8 verses, Allah describes humans as created in 'the BEST of stature' (ahsan taqweem) yet capable of falling to 'the LOWEST of the low' (asfal saafileen). No other creation has this range. Angels cannot fall; animals cannot rise. Only humans have this terrifying freedom - to become better than angels through worship, or worse than animals through rejection. The fig and olive (blessed foods), Sinai (Torah), and Makkah (Quran) - all witness this truth. And the surah ends not with description but with question: given this reality, why deny judgment? The Supreme Judge awaits.", ur: "یہ سورت انسانی فطرت کے بارے میں قرآن کا سب سے ڈرامائی تضاد پیش کرتی ہے۔ صرف 8 آیات میں اللہ بیان کرتا ہے کہ انسان 'بہترین ساخت' (احسن تقویم) میں بنایا گیا پھر بھی 'پست ترین' (اسفل سافلین) تک گر سکتا ہے۔ کسی اور مخلوق میں یہ وسعت نہیں۔ فرشتے نہیں گر سکتے؛ جانور نہیں اٹھ سکتے۔ صرف انسان کے پاس یہ خوفناک آزادی ہے - عبادت سے فرشتوں سے بہتر یا انکار سے جانوروں سے بدتر۔ سورت سوال پر ختم ہوتی ہے: اس حقیقت کے باوجود فیصلے کا انکار کیوں؟" },
    modernRelevance: "In an age that either inflates human ego ('you're perfect as you are') or deflates it ('humans are just animals'), this surah offers the balanced truth: tremendous potential requiring tremendous responsibility."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Four oaths opening",
        effect: "Building emphasis before the main statement"
      },
      {
        feature: "Elative contrast",
        example: "أَحْسَن (best) vs أَسْفَل (lowest)",
        effect: "Grammatical superlatives emphasize extremes"
      },
      {
        feature: "Rhetorical question",
        example: "أَلَيْسَ اللَّهُ بِأَحْكَمِ الحَاكِمِينَ",
        effect: "Negative question expecting positive answer = strong affirmation"
      },
      {
        feature: "Exception particle",
        example: "إِلَّا الَّذِينَ آمَنُوا",
        effect: "Hope after warning - balance of Quranic style"
      }
    ]
  },

  comparisonTable: {
    title: "Best Form vs Lowest Depths",
    headers: ["Best Stature (احسن تقویم)", "Lowest of Low (اسفل سافلین)"],
    rows: [
      {
        best: "Upright physical form",
        lowest: "Bent with age/disease"
      },
      {
        best: "Sound intellect",
        lowest: "Mental corruption"
      },
      {
        best: "Pure soul (fitrah)",
        lowest: "Corrupted nature"
      },
      {
        best: "Capacity for worship",
        lowest: "Denial of Creator"
      },
      {
        best: "Higher than angels",
        lowest: "Lower than animals"
      },
      {
        best: "Paradise potential",
        lowest: "Hellfire destination"
      }
    ]
  },

  numbersAndPatterns: {
    title: "Structural Patterns",
    patterns: [
      {
        pattern: "4 oaths",
        significance: "Fig, Olive, Sinai, Makkah - comprehensive witness"
      },
      {
        pattern: "8 verses total",
        significance: "Concise yet complete argument"
      },
      {
        pattern: "3 lands",
        significance: "Three major revelation sites"
      },
      {
        pattern: "2 outcomes",
        significance: "Fall or salvation - binary choice"
      }
    ]
  }
};

export default ONTOLOGY;
