/**
 * Surah Al-Ma'un (107) - Ontology of Quranic Concepts
 * The Small Kindnesses
 * Theme: Social responsibility linked to faith
 */

export const ONTOLOGY = {
  surahId: 107,
  surahName: "Al-Ma'un",
  surahNameArabic: "الماعون",
  revelationType: "Makki/Madani (disputed)",
  totalAyahs: 7,

  categories: {
    denialOfFaith: {
      name: "Denial of Judgment Day",
      nameUr: "یومِ جزا کا انکار",
      nameArabic: "تكذيب الدين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "The root cause of social injustice - disbelief in accountability", ur: "سماجی ناانصافی کی بنیادی وجہ - جوابدہی سے انکار" },
      concepts: [
        {
          term: "الدِّين",
          transliteration: "ad-Deen",
          meaning: { en: "The Recompense / Day of Judgment", ur: "جزا و سزا / یومِ قیامت" },
          explanation: { en: "Here دِين means Day of Judgment (يوم الدين), not religion. Denying accountability leads to social cruelty.", ur: "یہاں دِين سے مراد یومِ قیامت (يوم الدين) ہے، مذہب نہیں۔ جوابدہی کا انکار سماجی ظلم کی طرف لے جاتا ہے۔" },
          verseRef: "107:1"
        },
        {
          term: "يُكَذِّب",
          transliteration: "yukadhdhibu",
          meaning: { en: "To deny repeatedly", ur: "بار بار جھٹلانا" },
          explanation: { en: "Form II verb indicating persistent, deliberate denial - not momentary doubt.", ur: "باب تفعیل کا فعل جو مسلسل، جان بوجھ کر انکار ظاہر کرتا ہے - لمحاتی شک نہیں۔" },
          verseRef: "107:1"
        }
      ]
    },

    socialCruelty: {
      name: "Social Cruelty",
      nameUr: "سماجی ظلم",
      nameArabic: "القسوة الاجتماعية",
      color: '#DC2626',
      icon: 'Users',
      description: { en: "Behaviors that stem from denying divine accountability", ur: "وہ رویے جو الٰہی جوابدہی کے انکار سے پیدا ہوتے ہیں" },
      concepts: [
        {
          term: "يَدُعُّ اليَتِيم",
          transliteration: "yadu' al-yateem",
          meaning: { en: "Pushes away the orphan", ur: "یتیم کو دھکیلتا ہے" },
          explanation: { en: "Physical violence against the most vulnerable. يَدُعُّ is rare and violent - pushing, shoving, repelling.", ur: "سب سے کمزور کے خلاف جسمانی تشدد۔ يَدُعُّ نادر اور شدید ہے - دھکیلنا، ٹھیلنا، دور کرنا۔" },
          verseRef: "107:2"
        },
        {
          term: "لا يَحُضُّ على طَعام المِسكِين",
          transliteration: "laa yahuddu 'ala ta'aam al-miskeen",
          meaning: { en: "Does not encourage feeding the poor", ur: "مسکین کو کھلانے کی ترغیب نہیں دیتا" },
          explanation: { en: "Double sin: neither feeds them personally NOR encourages others to do so.", ur: "دوہرا گناہ: نہ خود کھلاتا ہے اور نہ دوسروں کو ترغیب دیتا ہے۔" },
          verseRef: "107:3"
        }
      ]
    },

    religiousHypocrisy: {
      name: "Religious Hypocrisy",
      nameUr: "مذہبی ریاکاری",
      nameArabic: "الرياء في العبادة",
      color: '#F59E0B',
      icon: 'Eye',
      description: { en: "External worship without internal sincerity", ur: "باطنی اخلاص کے بغیر ظاہری عبادت" },
      concepts: [
        {
          term: "ساهون عن صلاتهم",
          transliteration: "saahoon 'an salaatihim",
          meaning: { en: "Heedless OF their prayer", ur: "اپنی نماز سے غافل" },
          explanation: { en: "Critical: عَن (of/from) not فِي (in). They neglect prayer entirely, delay it, don't care about it - different from being distracted during prayer.", ur: "اہم: عَن (سے) نہ کہ فِي (میں)۔ وہ نماز سے بالکل غافل ہیں، تاخیر کرتے ہیں، پرواہ نہیں کرتے - نماز کے دوران توجہ بٹنے سے مختلف ہے۔" },
          verseRef: "107:5"
        },
        {
          term: "يُرَاءُون",
          transliteration: "yuraa'oon",
          meaning: { en: "They show off", ur: "وہ دکھاوا کرتے ہیں" },
          explanation: { en: "Form III from رَأَى (see) - mutual seeing. They perform worship to be seen by people, not for Allah.", ur: "باب مفاعلہ، رَأَى (دیکھنا) سے - باہمی دیکھنا۔ وہ لوگوں کو دکھانے کے لیے عبادت کرتے ہیں، Allah کے لیے نہیں۔" },
          verseRef: "107:6"
        }
      ]
    },

    smallKindnesses: {
      name: "Refusing Small Kindnesses",
      nameUr: "چھوٹی بھلائیوں سے انکار",
      nameArabic: "منع الماعون",
      color: '#10B981',
      icon: 'Heart',
      description: { en: "The climax - refusing even trivial assistance", ur: "عروج - معمولی مدد سے بھی انکار" },
      concepts: [
        {
          term: "الماعون",
          transliteration: "al-maa'oon",
          meaning: { en: "Small household items / basic necessities", ur: "چھوٹی گھریلو چیزیں / بنیادی ضروریات" },
          explanation: { en: "Items people commonly borrow: pot, bucket, salt, axe, needle. Some say it means Zakat. Either way, refusing small help reveals deep stinginess.", ur: "وہ چیزیں جو لوگ عام طور پر ادھار لیتے ہیں: ہنڈیا، بالٹی، نمک، کلہاڑی، سوئی۔ بعض کہتے ہیں اس سے مراد زکاۃ ہے۔ دونوں صورتوں میں چھوٹی مدد سے انکار گہری بخیلی ظاہر کرتا ہے۔" },
          verseRef: "107:7",
          examples: ["pot (قِدْر)", "bucket (دَلْو)", "salt (مِلْح)", "axe (فَأْس)", "needle (إِبْرَة)"]
        }
      ]
    }
  },

  relationships: [
    {
      from: "تكذيب الدين",
      to: "قسوة اليتيم",
      type: "causation",
      description: { en: "Denying Judgment Day leads to cruelty toward orphans", ur: "یومِ قیامت کا انکار یتیموں پر ظلم کی طرف لے جاتا ہے" },
      explanation: "Without belief in accountability, there's no motivation for compassion"
    },
    {
      from: "تكذيب الدين",
      to: "عدم إطعام المسكين",
      type: "causation",
      description: { en: "Denying Judgment leads to ignoring the poor", ur: "قیامت کا انکار غریبوں کو نظرانداز کرنے کی طرف لے جاتا ہے" },
      explanation: "No eternal reward means no incentive for charity"
    },
    {
      from: "سهو الصلاة",
      to: "الرياء",
      type: "association",
      description: { en: "Neglecting prayer leads to show-off worship", ur: "نماز کی غفلت دکھاوے کی عبادت کی طرف لے جاتی ہے" },
      explanation: "When prayer isn't for Allah, it becomes performance"
    },
    {
      from: "الرياء",
      to: "منع الماعون",
      type: "progression",
      description: { en: "Show-off worship leads to refusing small kindnesses", ur: "دکھاوے کی عبادت چھوٹی بھلائیوں سے انکار کی طرف لے جاتی ہے" },
      explanation: "If worship is for show, charity will also be for show - no hidden acts of kindness"
    }
  ],

  thematicFlow: {
    title: "From Belief to Behavior",
    titleArabic: "من العقيدة إلى السلوك",
    description: { en: "The surah shows how denial of faith manifests in social behavior", ur: "سورت دکھاتی ہے کہ ایمان کا انکار سماجی رویے میں کیسے ظاہر ہوتا ہے" },
    stages: [
      {
        stage: 1,
        theme: "Root Cause",
        verses: "107:1",
        description: { en: "Denial of Judgment Day - the theological root", ur: "یومِ قیامت کا انکار - عقیدے کی جڑ" }
      },
      {
        stage: 2,
        theme: "Social Symptoms",
        verses: "107:2-3",
        description: { en: "Cruelty to orphans and neglect of poor", ur: "یتیموں پر ظلم اور غریبوں سے بے پروائی" }
      },
      {
        stage: 3,
        theme: "Religious Symptoms",
        verses: "107:4-6",
        description: { en: "Hypocritical prayer and showing off", ur: "منافقانہ نماز اور دکھاوا" }
      },
      {
        stage: 4,
        theme: "Climax",
        verses: "107:7",
        description: { en: "Refusing even the smallest kindness", ur: "چھوٹی سے چھوٹی بھلائی سے بھی انکار" }
      }
    ]
  },

  structuralAnalysis: {
    title: "Two Halves Structure",
    description: { en: "The surah divides into two distinct parts", ur: "سورت دو واضح حصوں میں تقسیم ہوتی ہے" },
    parts: [
      {
        verses: "1-3",
        theme: "The Denier's Social Behavior",
        focus: "External actions toward people",
        characteristics: ["Cruel to orphans", "Ignores the poor"]
      },
      {
        verses: "4-7",
        theme: "The Hypocrite's Religious Behavior",
        focus: "Corrupted worship",
        characteristics: ["Neglects prayer", "Shows off", "Refuses help"]
      }
    ],
    connection: "Both parts describe the same person from different angles - social and religious"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 89,
        name: "Al-Fajr",
        relation: "Criticizes those who don't honor orphans (89:17)",
        sharedTheme: "Treatment of orphans"
      },
      {
        surah: 93,
        name: "Ad-Duha",
        relation: "Commands kindness to orphans (93:9)",
        sharedTheme: "Orphan care as duty"
      },
      {
        surah: 104,
        name: "Al-Humazah",
        relation: "Condemns wealth-hoarding",
        sharedTheme: "Stinginess and its punishment"
      },
      {
        surah: 4,
        name: "An-Nisa",
        verse: 142,
        relation: "Describes hypocrites in prayer",
        sharedTheme: "Lazy, show-off prayer"
      }
    ],
    linguisticParallels: [
      {
        term: "يَدُعُّ",
        otherUsage: "52:13 - 'On the Day they will be pushed (يُدَعُّونَ) to the Fire'",
        insight: "Those who push orphans will themselves be pushed to Hell"
      },
      {
        term: "ويل",
        frequency: "Used 40 times in Quran",
        contexts: "Always for severe warning of punishment"
      }
    ]
  },

  hadith: [
    {
      arabic: "أنا وكافل اليتيم في الجنة هكذا",
      english: "I and the one who sponsors an orphan will be in Paradise like this (indicating closeness with his fingers)",
      source: "Sahih Bukhari",
      relevance: "Contrast to those who push orphans away"
    },
    {
      arabic: "الرياء الشرك الأصغر",
      english: "Showing off (riya) is minor shirk",
      source: "Musnad Ahmad",
      relevance: "Explains why يُرَاءُونَ is severely condemned"
    },
    {
      arabic: "ما آمن بي من بات شبعان وجاره جائع إلى جنبه وهو يعلم",
      english: "He has not believed in me who sleeps full while his neighbor beside him is hungry and he knows it",
      source: "Al-Tabarani",
      relevance: "Explains لا يَحُضُّ على طَعَام المِسكِين"
    }
  ],

  practicalApplication: {
    title: "Self-Examination Checklist",
    description: { en: "Questions to avoid the behaviors condemned in this surah", ur: "اس سورت میں مذموم رویوں سے بچنے کے لیے سوالات" },
    questions: [
      {
        category: "Belief",
        question: "Do I truly believe in the Day of Judgment and act accordingly?",
        verse: "107:1"
      },
      {
        category: "Social",
        question: "How do I treat those weaker than me - orphans, children, employees?",
        verse: "107:2"
      },
      {
        category: "Charity",
        question: "Do I encourage others to give, or only give when directly asked?",
        verse: "107:3"
      },
      {
        category: "Prayer",
        question: "Do I pray on time with presence, or delay and rush through?",
        verse: "107:5"
      },
      {
        category: "Sincerity",
        question: "Do I worship the same in private as in public?",
        verse: "107:6"
      },
      {
        category: "Generosity",
        question: "Am I willing to share small things - time, resources, help?",
        verse: "107:7"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Definitive Test of Faith", ur: "ایمان کا حتمی امتحان" },
    insight: { en: "This surah presents a revolutionary criterion: true faith is measured not by theological claims or visible worship, but by how we treat society's weakest members and whether we share even small kindnesses.", ur: "یہ سورت ایک انقلابی معیار پیش کرتی ہے: سچا ایمان عقیدے کے دعووں یا ظاہری عبادت سے نہیں بلکہ اس سے ناپا جاتا ہے کہ ہم معاشرے کے کمزور ترین لوگوں سے کیسا سلوک کرتے ہیں اور کیا ہم چھوٹی بھلائیاں بھی بانٹتے ہیں۔" },
    details: [
      "The theological root: Denying accountability leads to cruelty",
      "The social test: Treatment of orphans and poor reveals true faith",
      "The worship test: Prayer without social action is hollow",
      "The ultimate test: Even refusing small items (مَاعُون) exposes the heart"
    ],
    modernRelevance: "In an age of performative religion and social media spirituality, this surah asks: Do your private actions match your public persona? Would you help someone when no one is watching?"
  },

  comparisonTable: {
    title: "True Faith vs. Hypocrisy",
    headers: ["Aspect", "True Believer", "Denier/Hypocrite"],
    rows: [
      {
        aspect: "Belief",
        trueBeliever: "Believes in Judgment Day",
        hypocrite: "Denies accountability"
      },
      {
        aspect: "Orphans",
        trueBeliever: "Sponsors and protects",
        hypocrite: "Pushes away violently"
      },
      {
        aspect: "Poor",
        trueBeliever: "Feeds and encourages others",
        hypocrite: "Ignores and doesn't encourage"
      },
      {
        aspect: "Prayer",
        trueBeliever: "Prays on time with focus",
        hypocrite: "Neglects and delays"
      },
      {
        aspect: "Intention",
        trueBeliever: "Worships for Allah alone",
        hypocrite: "Shows off for people"
      },
      {
        aspect: "Small Help",
        trueBeliever: "Shares willingly",
        hypocrite: "Refuses even trivial items"
      }
    ]
  },

  linguisticGems: [
    {
      observation: "عَن vs فِي in verse 5",
      explanation: "سَاهُونَ عَن صَلَاتِهِمْ (heedless OF their prayer) not فِي (IN their prayer). This distinction exonerates those who get distracted during prayer and condemns those who neglect prayer entirely."
    },
    {
      observation: "Progressive narrowing",
      explanation: "The surah moves from cosmic (Judgment Day) → social (orphans, poor) → personal (prayer) → smallest (مَاعُون). Sins at every level interconnect."
    },
    {
      observation: "Shock value of verse 4",
      explanation: "فَوَيْلٌ لِّلْمُصَلِّينَ - 'Woe to those who pray' shocks the reader. This rhetorical device forces continuation to verse 5 for clarification."
    }
  ]
};

export default ONTOLOGY;
