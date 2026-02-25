/**
 * Surah Al-Humazah (104) - Ontology of Quranic Concepts
 * The Slanderer
 * Theme: Condemnation of backbiting, slander, and materialism
 */

export const ONTOLOGY = {
  surahId: 104,
  surahName: "Al-Humazah",
  surahNameArabic: "الهمزة",
  revelationType: "Makki",
  totalAyahs: 9,

  categories: {
    socialSins: {
      name: "Sins of the Tongue and Gesture",
      nameArabic: "آفات اللسان والإشارة",
      color: '#EF4444',
      icon: 'MessageCircle',
      description: { en: "The twin sins of indirect and direct mockery", ur: "بالواسطہ اور براہ راست تمسخر کے جوڑے گناہ" },
      concepts: [
        {
          term: "هُمَزَة",
          transliteration: "Humazah",
          meaning: { en: "Backbiter / Secret mocker", ur: "غیبت کرنے والا / پیٹھ پیچھے مذاق اڑانے والا" },
          explanation: { en: "One who mocks through gestures, facial expressions, hints - behind people's backs. Pattern فُعَلَة indicates habitual behavior.", ur: "جو اشاروں، چہرے کے تاثرات، کنایوں سے مذاق اڑائے - لوگوں کی پیٹھ پیچھے۔ وزن فُعَلَة عادتی رویے کی نشاندہی کرتا ہے۔" },
          verseRef: "104:1"
        },
        {
          term: "لُمَزَة",
          transliteration: "Lumazah",
          meaning: { en: "Slanderer / Face-to-face mocker", ur: "عیب جوئی کرنے والا / منہ پر طعنہ دینے والا" },
          explanation: { en: "One who mocks with words directly to people's faces. Same intensive pattern showing habitual action.", ur: "جو الفاظ سے براہ راست لوگوں کے منہ پر تمسخر کرے۔ وہی مبالغہ کا وزن جو عادتی عمل ظاہر کرتا ہے۔" },
          verseRef: "104:1"
        }
      ]
    },

    materialismSins: {
      name: "Sins of Wealth Obsession",
      nameArabic: "حب المال",
      color: '#F59E0B',
      icon: 'AlertTriangle',
      description: { en: "The delusion of wealth bringing security", ur: "دولت سے تحفظ ملنے کا دھوکا" },
      concepts: [
        {
          term: "جَمَعَ مَالًا وَعَدَّدَهُ",
          transliteration: "Jama'a maalan wa 'addadahu",
          meaning: { en: "Collects wealth and counts it", ur: "مال جمع کرتا اور گنتا رہتا ہے" },
          explanation: { en: "عَدَّدَ (Form II) shows obsessive counting - not just having wealth but being consumed by it.", ur: "عَدَّدَ (باب تفعیل) جنونی گنتی ظاہر کرتا ہے - صرف مال رکھنا نہیں بلکہ اس میں ڈوب جانا۔" },
          verseRef: "104:2"
        },
        {
          term: "أَخْلَدَهُ",
          transliteration: "Akhladahu",
          meaning: { en: "Will make him immortal", ur: "اسے ہمیشہ زندہ رکھے گا" },
          explanation: { en: "The false belief that wealth grants eternity - delusion that money defeats death.", ur: "یہ جھوٹا عقیدہ کہ دولت ابدیت دیتی ہے - یہ دھوکا کہ پیسہ موت کو ہرا سکتا ہے۔" },
          verseRef: "104:3"
        }
      ]
    },

    divineJustice: {
      name: "Poetic Divine Justice",
      nameArabic: "العدالة الإلهية",
      color: '#8B5CF6',
      icon: 'Scale',
      description: { en: "The punishment fitting the crime", ur: "جرم کے مطابق سزا" },
      concepts: [
        {
          term: "لَيُنۢبَذَنَّ",
          transliteration: "La-yunbadhanna",
          meaning: { en: "Will surely be thrown", ur: "ضرور پھینکا جائے گا" },
          explanation: { en: "Passive voice - thrown like garbage. Strongest possible emphasis with لَ and نون التوكيد.", ur: "مجہول - کوڑے کی طرح پھینکا جائے گا۔ لَ اور نون التوکید سے شدید ترین تاکید۔" },
          verseRef: "104:4"
        },
        {
          term: "الحُطَمَة",
          transliteration: "Al-Hutamah",
          meaning: { en: "The Crusher", ur: "کچلنے والی (آگ)" },
          explanation: { en: "Same pattern (فُعَلَة) as هُمَزَة/لُمَزَة - the crusher of reputations meets the Crusher fire. Poetic justice.", ur: "وہی وزن (فُعَلَة) جو هُمَزَة/لُمَزَة کا ہے - عزتیں کچلنے والا کچلنے والی آگ سے ملتا ہے۔ شاعرانہ انصاف۔" },
          verseRef: "104:4-5"
        }
      ]
    },

    hellDescription: {
      name: "Nature of Hell-Fire",
      nameArabic: "وصف النار",
      color: '#DC2626',
      icon: 'Zap',
      description: { en: "The terrifying description of الحُطَمَة", ur: "الحُطَمَة کی خوفناک تصویر" },
      concepts: [
        {
          term: "نَارُ اللَّهِ المُوقَدَة",
          transliteration: "Naar Allahi al-Mooqadah",
          meaning: { en: "Allah's kindled fire", ur: "Allah کی بھڑکائی ہوئی آگ" },
          explanation: { en: "Attributed to Allah to indicate unimaginable intensity - constantly fueled, never dying.", ur: "Allah کی طرف منسوب ناقابلِ تصور شدت ظاہر کرنے کے لیے - مسلسل بھڑکتی، کبھی نہ بجھنے والی۔" },
          verseRef: "104:6"
        },
        {
          term: "تَطَّلِعُ عَلَى الأَفْئِدَة",
          transliteration: "Tattali'u 'ala al-Af'idah",
          meaning: { en: "Reaches/penetrates the hearts", ur: "دلوں تک پہنچتی ہے / دلوں کو چھیدتی ہے" },
          explanation: { en: "Fire doesn't just burn skin - it penetrates to the heart where greed resided.", ur: "آگ صرف جلد نہیں جلاتی - دل تک پہنچتی ہے جہاں لالچ بسی ہوئی تھی۔" },
          verseRef: "104:7"
        },
        {
          term: "مُؤْصَدَةٌ فِي عَمَدٍ مُمَدَّدَة",
          transliteration: "Mu'sadah fee 'amadin mumaddadah",
          meaning: { en: "Sealed in extended columns", ur: "اونچے ستونوں میں بند" },
          explanation: { en: "Complete entrapment - sealed with towering pillars. No escape in any direction.", ur: "مکمل قید - بلند ستونوں سے بند۔ کسی بھی سمت فرار ممکن نہیں۔" },
          verseRef: "104:8-9"
        }
      ]
    }
  },

  relationships: [
    {
      from: "هُمَزَة لُمَزَة",
      to: "الحُطَمَة",
      type: "poetic-justice",
      description: { en: "The crusher of reputations meets the Crusher", ur: "عزتیں کچلنے والا کچلنے والی (آگ) سے ملتا ہے" },
      explanation: "Same Arabic pattern (فُعَلَة) links the crime to its punishment"
    },
    {
      from: "جَمَعَ مَالًا",
      to: "أَخْلَدَهُ",
      type: "delusion",
      description: { en: "Wealth accumulation leads to false sense of immortality", ur: "مال جمع کرنا ابدیت کے جھوٹے احساس کی طرف لے جاتا ہے" },
      explanation: "كَلَّا (Never!) exposes this as complete falsehood"
    },
    {
      from: "الأَفْئِدَة (hearts)",
      to: "جَمَعَ مَالًا (collecting wealth)",
      type: "location-of-sin",
      description: { en: "Hearts burned because that's where greed lived", ur: "دل جلائے جاتے ہیں کیونکہ وہیں لالچ بسی تھی" },
      explanation: "Fire reaches the seat of the disease - the greedy heart"
    },
    {
      from: "مُؤْصَدَة",
      to: "عَمَدٍ مُمَدَّدَة",
      type: "description",
      description: { en: "Sealed + pillars = complete entrapment", ur: "بند + ستون = مکمل قید" },
      explanation: "Multiple layers of confinement in punishment"
    }
  ],

  thematicFlow: {
    title: "From Sin to Punishment",
    titleArabic: "من الذنب إلى العقاب",
    description: { en: "The surah moves from describing sins to their eternal consequence", ur: "سورت گناہوں کی تصویر سے ان کے ابدی نتائج کی طرف بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "Declaration of Doom",
        verses: "104:1",
        description: { en: "Woe announced for every slanderer", ur: "ہر عیب جو اور طعنہ زن کے لیے ہلاکت کا اعلان" }
      },
      {
        stage: 2,
        theme: "The Sins Described",
        verses: "104:2-3",
        description: { en: "Wealth obsession and delusion of immortality", ur: "مال کا جنون اور ابدیت کا دھوکا" }
      },
      {
        stage: 3,
        theme: "Rejection of Delusion",
        verses: "104:4",
        description: { en: "كَلَّا - emphatic rejection of false belief", ur: "كَلَّا - جھوٹے عقیدے کی سخت تردید" }
      },
      {
        stage: 4,
        theme: "Rhetorical Question",
        verses: "104:5",
        description: { en: "What can make you know what الحُطَمَة is?", ur: "تمہیں کیا معلوم الحُطَمَة کیا ہے؟" }
      },
      {
        stage: 5,
        theme: "Description of Punishment",
        verses: "104:6-9",
        description: { en: "Detailed description of the Crusher", ur: "حطمہ (کچلنے والی آگ) کی تفصیلی تصویر" }
      }
    ]
  },

  linguisticMiracles: {
    title: "Linguistic Features",
    features: [
      {
        name: "Pattern Parallelism",
        description: { en: "هُمَزَة, لُمَزَة, and الحُطَمَة all share فُعَلَة pattern", ur: "هُمَزَة، لُمَزَة اور الحُطَمَة سب فُعَلَة وزن میں مشترک ہیں" },
        significance: "The crime (crushing reputations) matches the punishment (being crushed)"
      },
      {
        name: "Sound Symbolism",
        description: { en: "ح-ط-م root sounds aggressive, crushing", ur: "ح-ط-م جڑ کی آواز جارحانہ، کچلنے والی ہے" },
        significance: "The word itself sounds like crushing/shattering"
      },
      {
        name: "Emphatic Oath Structure",
        description: { en: "لَ + verb + نون التوكيد in لَيُنۢبَذَنَّ", ur: "لَيُنۢبَذَنَّ میں لَ + فعل + نون التوکید" },
        significance: "Strongest possible emphasis in Arabic grammar"
      },
      {
        name: "Feminine Singular for Collective",
        description: { en: "مُؤْصَدَة and مُمَدَّدَة (feminine) describe abstract fire/pillars", ur: "مُؤْصَدَة اور مُمَدَّدَة (مؤنث) مجرد آگ/ستونوں کی توصیف" },
        significance: "Creates atmosphere of totality and encompassment"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 107,
        name: "Al-Ma'un",
        relation: "Both condemn hypocrisy and social sins",
        sharedTheme: "Criticism of outward show vs inner corruption"
      },
      {
        surah: 111,
        name: "Al-Masad",
        relation: "Both describe specific punishments in Hell",
        sharedTheme: "Fire as punishment"
      },
      {
        surah: 49,
        name: "Al-Hujurat",
        verse: 11,
        relation: "'Do not mock one another' - expands on هُمَزَة لُمَزَة",
        sharedTheme: "Prohibition of mocking"
      },
      {
        surah: 9,
        name: "At-Tawbah",
        verse: 79,
        relation: "Hypocrites mocking believers' charity",
        sharedTheme: "Condemnation of mockers"
      }
    ],
    hadithConnections: [
      {
        reference: "Muslim",
        text: "Backbiting is mentioning your brother in a way he dislikes",
        connection: "Defines هُمَزَة behavior"
      },
      {
        reference: "Bukhari",
        text: "The signs of a hypocrite: when he speaks he lies, when he promises he breaks it",
        connection: "Character traits of the slanderer type"
      }
    ]
  },

  hadith: [
    {
      arabic: "الغِيبَة ذِكْرُك أَخَاكَ بِمَا يَكْرَه",
      english: "Backbiting is mentioning your brother in a way he would dislike",
      source: "Sahih Muslim",
      relevance: "Defines the هُمَزَة behavior condemned in verse 1"
    },
    {
      arabic: "لا يَدْخُلُ الجَنَّةَ نَمَّام",
      english: "A tale-bearer (slanderer) will not enter Paradise",
      source: "Sahih Bukhari & Muslim",
      relevance: "Severe warning matching the surah's وَيْل"
    }
  ],

  practicalApplication: {
    title: "Self-Examination",
    questions: [
      {
        sin: "هُمَزَة behavior",
        question: "Do I mock people through gestures, facial expressions, or hints?",
        remedy: "Replace mockery with sincere advice"
      },
      {
        sin: "لُمَزَة behavior",
        question: "Do I criticize people directly to hurt them?",
        remedy: "Speak to uplift, not to wound"
      },
      {
        sin: "Wealth obsession",
        question: "Do I constantly think about my money and possessions?",
        remedy: "Remember wealth is a test, not security"
      },
      {
        sin: "False immortality",
        question: "Do I act as if I'll live forever?",
        remedy: "Remember death daily"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Psychology of the Slanderer", ur: "طعنہ زن کی نفسیات" },
    insight: { en: "This surah reveals the deep connection between mockery and materialism. The person who mocks others (هُمَزَة لُمَزَة) is the same one obsessed with counting wealth. Why? Because both behaviors come from the same diseased heart: one that finds security in worldly things (wealth) and superiority over others (mockery). The fire reaching 'hearts' (الأَفْئِدَة) is the ultimate justice - it burns the very organ where pride and greed resided.", ur: "یہ سورت تمسخر اور مادہ پرستی کے گہرے تعلق کو بے نقاب کرتی ہے۔ جو شخص دوسروں کا مذاق اڑاتا ہے (هُمَزَة لُمَزَة) وہی مال گننے کا جنونی ہے۔ کیوں؟ کیونکہ دونوں رویے ایک ہی بیمار دل سے آتے ہیں: جو دنیاوی چیزوں (دولت) میں تحفظ اور دوسروں پر برتری (تمسخر) ڈھونڈتا ہے۔ آگ کا 'دلوں' (الأَفْئِدَة) تک پہنچنا حتمی انصاف ہے - وہی عضو جلتا ہے جہاں تکبر اور لالچ بسے تھے۔" },
    modernRelevance: "In an age of social media mockery, online bullying, and wealth-flaunting, this surah is painfully relevant. The modern هُمَزَة posts memes mocking others; the modern لُمَزَة leaves cruel comments. The حُطَمَة awaits both."
  },

  comparisonTable: {
    title: "هُمَزَة vs لُمَزَة",
    headers: ["Aspect", "هُمَزَة", "لُمَزَة"],
    rows: [
      {
        aspect: "Method",
        humazah: "Gestures, expressions, hints",
        lumazah: "Direct words"
      },
      {
        aspect: "Timing",
        humazah: "Behind the back",
        lumazah: "To the face"
      },
      {
        aspect: "Tool",
        humazah: "Non-verbal communication",
        lumazah: "Verbal attacks"
      },
      {
        aspect: "Modern Example",
        humazah: "Rolling eyes, shared looks, subtweets",
        lumazah: "Direct insults, cruel comments"
      }
    ]
  },

  conclusionMessage: {
    title: "Final Warning",
    message: "The surah begins with وَيْل (woe/destruction) and ends with مُمَدَّدَة (extended) - from the opening curse to the endless punishment. There is no relief clause, no exception mentioned. This is one of the strongest warnings in the Quran against two connected sins: mocking Allah's creation and worshipping Allah's provision (wealth). Both are forms of forgetting the Creator."
  }
};

export default ONTOLOGY;
