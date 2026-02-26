/**
 * Surah Al-Qari'ah (101) - Ontology of Quranic Concepts
 * The Striking Calamity
 * Theme: Day of Judgment and weighing of deeds
 */

export const ONTOLOGY = {
  surahId: 101,
  surahName: "Al-Qari'ah",
  surahNameArabic: "القارعة",
  revelationType: "Makki",
  totalAyahs: 11,

  categories: {
    namesOfJudgmentDay: {
      name: "Names of Judgment Day",
      nameUr: "یومِ قیامت کے نام",
      nameArabic: "أسماء يوم القيامة",
      color: '#F59E0B',
      icon: 'AlertTriangle',
      description: { en: "القارعة is one of 50+ Quranic names for the Day of Judgment", ur: "القارعة قرآن میں یومِ قیامت کے 50 سے زیادہ ناموں میں سے ایک ہے" },
      concepts: [
        {
          term: "القَارِعَة",
          transliteration: "Al-Qaari'ah",
          meaning: { en: "The Striking Calamity / The Knocker", ur: "کھٹکھٹانے والی / کوبنے والی آفت" },
          explanation: { en: "From قَرَعَ (to knock/strike). It strikes hearts with terror, strikes the earth with destruction.", ur: "قَرَعَ (کھٹکھٹانا/مارنا) سے۔ دلوں کو دہشت سے مارتی ہے، زمین کو تباہی سے۔" },
          verseRef: "101:1-3",
          otherNames: ["الحَاقَّة (The Reality)", "القِيَامَة (The Resurrection)", "الصَّاخَّة (The Deafening Blast)", "الطَّامَّة الكُبْرَى (The Greatest Catastrophe)"]
        }
      ]
    },

    cosmicChaos: {
      name: "Cosmic Chaos",
      nameUr: "کائناتی افراتفری",
      nameArabic: "الفوضى الكونية",
      color: '#EF4444',
      icon: 'Globe',
      description: { en: "Vivid imagery of universal destruction", ur: "کائناتی تباہی کی واضح تصویر کشی" },
      concepts: [
        {
          term: "النَّاسُ كَالفَرَاشِ المَبْثُوث",
          transliteration: "An-Naas kal-Faraash al-Mabthooth",
          meaning: { en: "People like scattered moths", ur: "لوگ بکھرے ہوئے پتنگوں کی طرح" },
          explanation: { en: "Moths are confused, directionless, attracted to fire (their destruction). People will be similarly disoriented.", ur: "پتنگے پریشان، بے سمت اور آگ (اپنی تباہی) کی طرف کھنچے ہوتے ہیں۔ لوگ بھی اسی طرح حواس باختہ ہوں گے۔" },
          verseRef: "101:4",
          imagery: "Billions of humans scattered like insects around a light"
        },
        {
          term: "الجِبَالُ كَالعِهْنِ المَنفُوش",
          transliteration: "Al-Jibaal kal-'Ihn al-Manfoosh",
          meaning: { en: "Mountains like fluffed wool", ur: "پہاڑ دھنکی ہوئی اون کی طرح" },
          explanation: { en: "عِهْن = colored wool. Mountains of various colors become light as carded wool. Complete transformation of the solid to the ethereal.", ur: "عِهْن = رنگین اون۔ مختلف رنگوں کے پہاڑ دھنکی ہوئی اون کی طرح ہلکے ہو جاتے ہیں۔ ٹھوس کا لطیف میں مکمل تبدیلی۔" },
          verseRef: "101:5",
          imagery: "Massive rock formations becoming lighter than air"
        }
      ]
    },

    divineJudgment: {
      name: "Divine Judgment",
      nameUr: "الٰہی فیصلہ",
      nameArabic: "الحساب الإلهي",
      color: '#8B5CF6',
      icon: 'Scale',
      description: { en: "The weighing of deeds", ur: "اعمال کا وزن کرنا" },
      concepts: [
        {
          term: "المَوَازِين",
          transliteration: "Al-Mawaazeen",
          meaning: { en: "The Scales", ur: "ترازو (میزان)" },
          explanation: { en: "Plural of مِيزان (scale). Real scales that weigh deeds - their weight determined by sincerity, not quantity.", ur: "مِیزان کی جمع (ترازو)۔ حقیقی ترازو جو اعمال تولتے ہیں - ان کا وزن اخلاص سے متعین ہوتا ہے، مقدار سے نہیں۔" },
          verseRef: "101:6, 8",
          theological: "Ahl as-Sunnah believe in literal scales on Judgment Day"
        },
        {
          term: "ثَقُلَت vs خَفَّت",
          transliteration: "Thaqulat vs Khaffat",
          meaning: { en: "Heavy vs Light", ur: "بھاری بمقابلہ ہلکا" },
          explanation: { en: "Two possible outcomes: scales heavy with good deeds → Paradise; scales light → Hell.", ur: "دو ممکنہ نتائج: نیکیوں سے بھاری پلڑا ← جنت؛ ہلکا پلڑا ← جہنم۔" },
          verseRef: "101:6-9"
        }
      ]
    },

    rewards: {
      name: "Eternal Destinations",
      nameUr: "ابدی ٹھکانے",
      nameArabic: "المآلات الأبدية",
      color: '#10B981',
      icon: 'Compass',
      description: { en: "The two final abodes", ur: "دو حتمی ٹھکانے" },
      concepts: [
        {
          term: "عِيشَةٌ رَاضِيَة",
          transliteration: "'Eeshatan Raadiyah",
          meaning: { en: "A pleasant/satisfying life", ur: "خوشگوار اور مطمئن زندگی" },
          explanation: { en: "Active participle - a life that inherently satisfies. Paradise described through its quality of living.", ur: "اسم فاعل - ایسی زندگی جو فطری طور پر مطمئن کرے۔ جنت کو اس کے معیارِ زندگی سے بیان کیا گیا۔" },
          verseRef: "101:7"
        },
        {
          term: "هَاوِيَة",
          transliteration: "Haawiyah",
          meaning: { en: "The Abyss / Bottomless Pit", ur: "گہری کھائی / بے تہ گڑھا" },
          explanation: { en: "From هَوَى (to fall). A pit one falls into endlessly. One of the names/levels of Hell.", ur: "هَوَى (گرنا) سے۔ ایسا گڑھا جس میں لامتناہی گرتا رہے۔ جہنم کے ناموں/درجات میں سے ایک۔" },
          verseRef: "101:9-11"
        },
        {
          term: "نَارٌ حَامِيَة",
          transliteration: "Naarun Haamiyah",
          meaning: { en: "Blazing hot fire", ur: "شدید تپتی آگ" },
          explanation: { en: "The final description - a fire of extreme heat. The surah ends with this terrifying image.", ur: "آخری توصیف - انتہائی حرارت کی آگ۔ سورت اس خوفناک منظر پر ختم ہوتی ہے۔" },
          verseRef: "101:11"
        }
      ]
    }
  },

  relationships: [
    {
      from: "القَارِعَة",
      to: "الفَرَاش المَبْثُوث",
      type: "effect",
      description: { en: "The Striking causes people to scatter", ur: "کھٹکھٹانے والی لوگوں کے بکھرنے کا سبب بنتی ہے" },
      explanation: "The calamity is so overwhelming that humanity becomes disoriented"
    },
    {
      from: "القَارِعَة",
      to: "العِهْن المَنفُوش",
      type: "effect",
      description: { en: "The Striking transforms mountains", ur: "کھٹکھٹانے والی پہاڑوں کو بدل دیتی ہے" },
      explanation: "Even the most solid things become light and scattered"
    },
    {
      from: "المَوَازِين ثَقُلَت",
      to: "عِيشَةٌ رَاضِيَة",
      type: "causation",
      description: { en: "Heavy scales lead to Paradise", ur: "بھاری پلڑے جنت کی طرف لے جاتے ہیں" },
      explanation: "Good deeds outweighing bad = eternal bliss"
    },
    {
      from: "المَوَازِين خَفَّت",
      to: "هَاوِيَة",
      type: "causation",
      description: { en: "Light scales lead to the Abyss", ur: "ہلکے پلڑے ہاویہ (گہری کھائی) کی طرف لے جاتے ہیں" },
      explanation: "Lack of good deeds = eternal torment"
    }
  ],

  thematicFlow: {
    title: "From Announcement to Destination",
    titleArabic: "من الإعلان إلى المصير",
    description: { en: "The surah moves from naming the Day to describing its outcomes", ur: "سورت اس دن کے نام سے اس کے نتائج کی تصویر کشی کی طرف بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "The Name",
        verses: "101:1-3",
        description: { en: "القارعة announced, then questioned - building suspense", ur: "القارعة کا اعلان، پھر سوال - تجسس پیدا کرنا" }
      },
      {
        stage: 2,
        theme: "The Scene",
        verses: "101:4-5",
        description: { en: "Vivid imagery of chaos - people and mountains transformed", ur: "افراتفری کی واضح تصویر - لوگ اور پہاڑ بدل گئے" }
      },
      {
        stage: 3,
        theme: "The Judgment",
        verses: "101:6-9",
        description: { en: "Two groups divided by the weight of their scales", ur: "دو گروہ اپنے پلڑوں کے وزن سے تقسیم" }
      },
      {
        stage: 4,
        theme: "The Punishment",
        verses: "101:10-11",
        description: { en: "هاوية defined as blazing fire", ur: "ہاویہ کی تعریف تپتی آگ سے" }
      }
    ]
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        name: "Opening Suspense",
        description: { en: "القَارِعَة (v.1) → مَا القَارِعَة (v.2) → وَمَا أَدْرَاكَ (v.3)", ur: "القَارِعَة (آ.1) ← مَا القَارِعَة (آ.2) ← وَمَا أَدْرَاكَ (آ.3)" },
        effect: "Three levels of building anticipation before explanation"
      },
      {
        name: "Contrasting Similes",
        description: { en: "People like moths (v.4) vs Mountains like wool (v.5)", ur: "لوگ پتنگوں کی طرح (آ.4) بمقابلہ پہاڑ اون کی طرح (آ.5)" },
        effect: "Living beings become insect-like; solid rock becomes ethereal"
      },
      {
        name: "The أُمّ Idiom",
        description: { en: "فَأُمُّهُ هَاوِيَة - 'His mother is the Abyss'", ur: "فَأُمُّهُ هَاوِيَة - 'اس کی ماں ہاویہ ہے'" },
        effect: "Dark irony: where one seeks refuge (mother) becomes source of torment"
      },
      {
        name: "Sound Symmetry",
        description: { en: "ثَقُلَت/خَفَّت (heavy/light) - phonetic contrast matching meaning", ur: "ثَقُلَت/خَفَّت (بھاری/ہلکا) - آواز کا تضاد معنی سے ملتا ہے" },
        effect: "Heavy word sounds heavier; light word sounds lighter"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 99,
        name: "Az-Zalzalah",
        relation: "Both describe earth's transformation on Judgment Day",
        sharedTheme: "Cosmic upheaval"
      },
      {
        surah: 81,
        name: "At-Takwir",
        relation: "More detailed description of cosmic chaos",
        sharedTheme: "Sun folded, stars scattered"
      },
      {
        surah: 82,
        name: "Al-Infitar",
        relation: "Sky torn apart, seas burst forth",
        sharedTheme: "Universal destruction"
      },
      {
        surah: 21,
        name: "Al-Anbiya",
        verse: 47,
        relation: "Describes the scales in detail",
        sharedTheme: "مَوَازِين القِسْط - scales of justice"
      },
      {
        surah: 23,
        name: "Al-Mu'minun",
        verses: "102-103",
        relation: "Heavy scales = success, light scales = losers",
        sharedTheme: "Weighing of deeds"
      }
    ]
  },

  hadith: [
    {
      arabic: "كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم",
      english: "Two words light on the tongue, heavy in the scales, beloved to the Most Merciful: SubhanAllahi wa bihamdihi, SubhanAllahil-'Adheem",
      source: "Sahih Bukhari & Muslim",
      relevance: "Shows how to make scales heavy"
    },
    {
      arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ",
      english: "Purity is half of faith, and Alhamdulillah fills the scale",
      source: "Sahih Muslim",
      relevance: "Simple actions that weigh heavily"
    }
  ],

  practicalApplication: {
    title: "Preparing for القارعة",
    applications: [
      {
        principle: "Visualize the Day",
        action: "Regularly contemplate the scene described - scattered people, dissolved mountains",
        verse: "101:4-5"
      },
      {
        principle: "Weigh your deeds now",
        action: "Daily self-accounting (مُحاسبة) - which actions are adding weight?",
        verse: "101:6-8"
      },
      {
        principle: "Focus on quality",
        action: "Sincerity (إخلاص) makes deeds heavy, not quantity",
        verse: "Related hadith"
      },
      {
        principle: "Fear the lightness",
        action: "Avoid sins that make scales light - they may seem small but add up",
        verse: "101:8-9"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Mother Paradox", ur: "ماں کا تضاد" },
    insight: { en: "The phrase فَأُمُّهُ هَاوِيَة ('his mother is the Abyss') contains profound irony. In Arabic, one's 'mother' represents ultimate refuge - where you return in distress. But for the one with light scales, their 'mother' (refuge) is the bottomless pit of Hell. The very concept of comfort is inverted. This person sought refuge in worldly things (wealth, status), and their ultimate refuge reflects that hollowness.", ur: "فَأُمُّهُ هَاوِيَة ('اس کی ماں ہاویہ ہے') میں گہری ستم ظریفی ہے۔ عربی میں 'ماں' آخری پناہ گاہ ہے - جہاں مصیبت میں لوٹا جائے۔ لیکن ہلکے پلڑے والے کی 'ماں' (پناہ) جہنم کی بے تہ کھائی ہے۔ سکون کا تصور ہی الٹ گیا۔ اس شخص نے دنیاوی چیزوں (مال، رتبے) میں پناہ ڈھونڈی، اور اس کی حتمی پناہ اسی کھوکھلے پن کی عکاسی کرتی ہے۔" },
    modernRelevance: "What do we run to for comfort? If it's not Allah, our 'mother' may be our destruction."
  },

  comparisonTable: {
    title: "Two Destinies",
    headers: ["Aspect", "Heavy Scales", "Light Scales"],
    rows: [
      {
        aspect: "Condition",
        heavy: "ثَقُلَت مَوَازِينُهُ",
        light: "خَفَّت مَوَازِينُهُ"
      },
      {
        aspect: "Cause",
        heavy: "Good deeds outweigh bad",
        light: "Bad deeds outweigh good"
      },
      {
        aspect: "Destination",
        heavy: "عِيشَةٌ رَاضِيَة (Paradise)",
        light: "هَاوِيَة (Abyss)"
      },
      {
        aspect: "Description",
        heavy: "Satisfying life",
        light: "نَارٌ حَامِيَة (Blazing fire)"
      }
    ]
  },

  imageryAnalysis: {
    title: "Visual Power of the Surah",
    images: [
      {
        image: "الفَرَاش المَبْثُوث (scattered moths)",
        analysis: { en: "Moths fly towards light (fire) - their attraction is their destruction. Similarly, humans will be drawn to judgment they tried to avoid.", ur: "پتنگے روشنی (آگ) کی طرف اڑتے ہیں - ان کی کشش ان کی تباہی ہے۔ اسی طرح انسان اس فیصلے کی طرف کھنچے جائیں گے جس سے بچنے کی کوشش کرتے تھے۔" }
      },
      {
        image: "العِهْن المَنفُوش (fluffed colored wool)",
        analysis: { en: "عِهْن specifically means COLORED wool. Mountains of different colors (brown, red, black) becoming like multicolored fluff - beauty in destruction.", ur: "عِهْن خاص طور پر رنگین اون ہے۔ مختلف رنگوں (بھورے، سرخ، سیاہ) کے پہاڑ رنگ برنگے پھاہے کی طرح - تباہی میں خوبصورتی۔" }
      },
      {
        image: "هَاوِيَة (bottomless pit)",
        analysis: { en: "Active participle - constantly falling. There is no bottom, no end to the falling. Eternal descent.", ur: "اسم فاعل - مسلسل گرنا۔ کوئی تہ نہیں، گرنے کا کوئی انت نہیں۔ ابدی سقوط۔" }
      }
    ]
  }
};

export default ONTOLOGY;
