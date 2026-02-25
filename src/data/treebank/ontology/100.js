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
      nameUr: "جنگی گھوڑوں کی قسم",
      nameArabic: "القسم بالخيل",
      color: '#8B5CF6',
      icon: 'Zap',
      description: { en: "A five-part oath describing charging war horses", ur: "جنگی گھوڑوں کی تصویر کشی میں پانچ حصوں والی قسم" },
      concepts: [
        {
          term: "العَادِيَات ضَبْحًا",
          transliteration: "Al-'Aadiyaat dabhan",
          meaning: { en: "The charging horses, panting", ur: "تیز دوڑتے ہانپتے گھوڑے" },
          explanation: { en: "Horses running so hard they're panting heavily - demonstrating their dedication to their riders.", ur: "گھوڑے اتنی تیز دوڑتے ہیں کہ شدید ہانپ رہے ہیں - اپنے سواروں کے لیے ان کی لگن کا اظہار۔" },
          verseRef: "100:1"
        },
        {
          term: "المُورِيَات قَدْحًا",
          transliteration: "Al-Mooriyaat qadhan",
          meaning: { en: "The spark-producers when striking", ur: "ٹاپوں سے چنگاریاں نکالنے والے" },
          explanation: { en: "Hooves striking rocks create sparks in night raids - horses continue despite difficulty.", ur: "رات کے حملوں میں سموں کا پتھروں سے ٹکرانا چنگاریاں پیدا کرتا ہے - گھوڑے مشکل کے باوجود جاری رہتے ہیں۔" },
          verseRef: "100:2"
        },
        {
          term: "المُغِيرَات صُبْحًا",
          transliteration: "Al-Mugheeraat subhan",
          meaning: { en: "The raiders at dawn", ur: "صبح کے وقت حملہ آور ہونے والے" },
          explanation: { en: "Dawn raids were strategically timed - horses serve their masters' timing perfectly.", ur: "صبح کے حملے حکمتِ عملی سے وقت پر ہوتے تھے - گھوڑے اپنے مالکوں کے وقت کی مکمل پابندی کرتے ہیں۔" },
          verseRef: "100:3"
        },
        {
          term: "فَأَثَرْنَ نَقْعًا",
          transliteration: "Fa-atharna naq'an",
          meaning: { en: "Raising clouds of dust", ur: "گرد و غبار کے بادل اٹھاتے ہوئے" },
          explanation: { en: "The dramatic dust cloud of cavalry charge - horses give everything.", ur: "گھڑ سواروں کے حملے میں گرد کا ڈرامائی بادل - گھوڑے سب کچھ لٹا دیتے ہیں۔" },
          verseRef: "100:4"
        },
        {
          term: "فَوَسَطْنَ جَمْعًا",
          transliteration: "Fa-wasatna jam'an",
          meaning: { en: "Penetrating the enemy center", ur: "دشمن کے وسط میں گھس جانے والے" },
          explanation: { en: "Horses plunge into danger, serving their riders with total loyalty.", ur: "گھوڑے خطرے میں کود پڑتے ہیں، مکمل وفاداری سے اپنے سواروں کی خدمت کرتے ہیں۔" },
          verseRef: "100:5"
        }
      ]
    },

    humanIngratitude: {
      name: "Human Ingratitude",
      nameUr: "انسانی ناشکری",
      nameArabic: "كفران الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "The contrast between horse loyalty and human ingratitude", ur: "گھوڑوں کی وفاداری اور انسانی ناشکری کا تقابل" },
      concepts: [
        {
          term: "كَنُود",
          transliteration: "Kanood",
          meaning: { en: "Ungrateful / Denying blessings", ur: "سخت ناشکرا / نعمتوں کا منکر" },
          explanation: { en: "Intensive form - extremely ungrateful. Human denies his Lord's blessings while horses serve their human masters loyally.", ur: "مبالغہ کا صیغہ - انتہائی ناشکرا۔ انسان اپنے رب کی نعمتوں کا انکار کرتا ہے جبکہ گھوڑے اپنے انسانی مالکوں کی وفاداری سے خدمت کرتے ہیں۔" },
          verseRef: "100:6"
        },
        {
          term: "لِحُبِّ الخَيْرِ لَشَدِيد",
          transliteration: "Li-hubb al-khayr la-shadeed",
          meaning: { en: "Intense in love of wealth", ur: "مال کی محبت میں شدید" },
          explanation: { en: "Human loves material wealth intensely - ironically الخَيْر (good/wealth) becomes his obsession instead of Allah.", ur: "انسان مادی دولت سے شدید محبت کرتا ہے - ستم ظریفی یہ کہ الخَيْر (بھلائی/مال) Allah کی جگہ اس کا جنون بن جاتا ہے۔" },
          verseRef: "100:8"
        }
      ]
    },

    judgmentDay: {
      name: "Resurrection and Exposure",
      nameUr: "قیامت اور انکشاف",
      nameArabic: "البعث والكشف",
      color: '#F59E0B',
      icon: 'Eye',
      description: { en: "What happens when graves open and secrets are exposed", ur: "جب قبریں کھلیں اور راز ظاہر ہوں تو کیا ہوگا" },
      concepts: [
        {
          term: "بُعْثِرَ مَا فِي القُبُور",
          transliteration: "Bu'thira maa fi al-quboor",
          meaning: { en: "When what's in graves is scattered", ur: "جب قبروں میں جو ہے بکھیر دیا جائے" },
          explanation: { en: "Bodies resurrected and brought out - the dead rise.", ur: "جسم دوبارہ زندہ ہو کر باہر نکالے جاتے ہیں - مردے اٹھ کھڑے ہوتے ہیں۔" },
          verseRef: "100:9"
        },
        {
          term: "حُصِّلَ مَا فِي الصُّدُور",
          transliteration: "Hussila maa fi as-sudoor",
          meaning: { en: "When what's in breasts is extracted", ur: "جب سینوں میں جو ہے نکال لیا جائے" },
          explanation: { en: "Hidden intentions, secrets, inner states - all exposed.", ur: "چھپے ارادے، راز، باطنی حالتیں - سب بے نقاب ہو جاتے ہیں۔" },
          verseRef: "100:10"
        },
        {
          term: "رَبَّهُم بِهِم خَبِير",
          transliteration: "Rabbuhum bihim khabeer",
          meaning: { en: "Their Lord is fully Aware of them", ur: "ان کا رب ان سے پوری طرح باخبر ہے" },
          explanation: { en: "Allah's complete knowledge - nothing hidden that Day.", ur: "Allah کا مکمل علم - اس دن کچھ بھی پوشیدہ نہیں۔" },
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
      description: { en: "Animals loyal vs Humans ungrateful", ur: "جانور وفادار بمقابلہ انسان ناشکرا" },
      explanation: "The core message: horses serve humans loyally; humans deny Allah ungratefully"
    },
    {
      from: "كَنُود",
      to: "لِحُبِّ الخَيْرِ لَشَدِيد",
      type: "causation",
      description: { en: "Ingratitude comes from love of wealth", ur: "ناشکری مال کی محبت سے آتی ہے" },
      explanation: "Obsession with material things leads to forgetting the source of blessings"
    },
    {
      from: "حُبّ الخَيْر",
      to: "البَعْث والكَشْف",
      type: "warning",
      description: { en: "Wealth obsession faces judgment", ur: "مال کا جنون حساب کا سامنا کرتا ہے" },
      explanation: "What they loved and hoarded will be exposed and judged"
    }
  ],

  thematicFlow: {
    title: "From Loyal Service to Ingratitude to Judgment",
    titleArabic: "من الخدمة المخلصة إلى الجحود إلى الحساب",
    description: { en: "The surah moves from animal loyalty to human failings to divine accountability", ur: "سورت جانوروں کی وفاداری سے انسانی کوتاہیوں اور پھر الٰہی جوابدہی کی طرف بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "The Oath",
        verses: "100:1-5",
        description: { en: "Five vivid descriptions of loyal war horses", ur: "وفادار جنگی گھوڑوں کے پانچ واضح مناظر" }
      },
      {
        stage: 2,
        theme: "The Indictment",
        verses: "100:6-8",
        description: { en: "Human ingratitude and wealth obsession exposed", ur: "انسانی ناشکری اور مال کے جنون کا پردہ فاش" }
      },
      {
        stage: 3,
        theme: "The Warning",
        verses: "100:9-11",
        description: { en: "Resurrection, exposure of secrets, divine awareness", ur: "قیامت، رازوں کا انکشاف، الٰہی آگاہی" }
      }
    ]
  },

  centralContrast: {
    title: "The Great Irony",
    description: { en: "The surah's central message through contrast", ur: "سورت کا مرکزی پیغام تقابل کے ذریعے" },
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
    title: { en: "Creation Shames the Created", ur: "مخلوق مخلوق کو شرمندہ کرتی ہے" },
    insight: { en: "This surah uses a brilliant rhetorical device: swearing by the loyalty of horses to expose human disloyalty. The horse - a mere animal - shows more dedication to its human master than humans show to their Divine Lord. When الإنسان (human, made from the root أنس meaning 'intimacy') becomes كَنُود (denier), even animals demonstrate superior character. The term الخَيْر (good/wealth) is ironic - humans pursue what they call 'good' while being 'bad' to their Lord.", ur: "یہ سورت ایک شاندار بلاغتی اسلوب استعمال کرتی ہے: گھوڑوں کی وفاداری کی قسم کھا کر انسانی بے وفائی کو بے نقاب کرنا۔ گھوڑا - محض ایک جانور - اپنے انسانی مالک سے انسانوں سے زیادہ لگن دکھاتا ہے جو وہ اپنے الٰہی رب کو دکھاتے ہیں۔ جب الإنسان (انسان، جڑ أنس یعنی 'انسیت' سے) کَنُود (منکر) بن جائے، تو جانور بھی بہتر کردار کا مظاہرہ کرتے ہیں۔ الخَيْر (بھلائی/مال) لفظ ستم ظریف ہے - انسان جسے 'بھلائی' کہتے ہیں اس کے پیچھے بھاگتے ہیں جبکہ اپنے رب کے لیے 'برے' ہوتے ہیں۔" },
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
