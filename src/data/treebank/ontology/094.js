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
      description: { en: "Four blessings Allah bestowed upon His Messenger", ur: "چار نعمتیں جو اللہ نے اپنے رسول کو عطا فرمائیں" },
      concepts: [
        {
          term: "شَرْح الصَّدْر",
          transliteration: "Sharh as-Sadr",
          meaning: { en: "Expansion of the chest", ur: "سینے کی کشادگی" },
          explanation: { en: "Opening of the heart to receive guidance, wisdom, and patience. Includes both the literal opening (angels purifying his heart) and spiritual opening (capacity for prophethood).", ur: "ہدایت، حکمت اور صبر حاصل کرنے کے لیے دل کا کھلنا۔ لفظی کشائش (فرشتوں کا دل پاک کرنا) اور روحانی کشائش (نبوت کی صلاحیت) دونوں شامل۔" },
          verseRef: "94:1"
        },
        {
          term: "وَضْع الوِزْر",
          transliteration: "Wad' al-Wizr",
          meaning: { en: "Removal of the burden", ur: "بوجھ اتارنا" },
          explanation: { en: "The heavy burden of concerns, struggles, or responsibilities was lifted from the Prophet. Some say pre-prophetic worries, others say the weight of receiving revelation.", ur: "فکروں، مشکلات یا ذمہ داریوں کا بھاری بوجھ نبی سے اتار دیا گیا۔ کچھ کہتے ہیں نبوت سے پہلے کی فکریں، کچھ کہتے ہیں وحی کا بوجھ۔" },
          verseRef: "94:2-3"
        },
        {
          term: "رَفْع الذِّكْر",
          transliteration: "Raf' adh-Dhikr",
          meaning: { en: "Elevation of mention/reputation", ur: "ذکر کو بلند کرنا" },
          explanation: { en: "Prophet's name paired with Allah's in shahada, adhan, iqamah, salawat. Billions mention him daily. No human has higher mention in history.", ur: "نبی کا نام شہادت، اذان، اقامت، صلوٰۃ میں اللہ کے ساتھ۔ اربوں لوگ روزانہ ان کا ذکر کرتے ہیں۔ تاریخ میں کسی انسان کا اتنا بلند ذکر نہیں۔" },
          verseRef: "94:4"
        }
      ]
    },

    easeWithHardship: {
      name: "The Promise of Ease",
      nameArabic: "اليسر مع العسر",
      color: '#10B981',
      icon: 'Sparkles',
      description: { en: "The famous principle that ease accompanies difficulty", ur: "مشہور اصول کہ آسانی مشکل کے ساتھ ہے" },
      concepts: [
        {
          term: "مَعَ العُسْر يُسْرًا",
          transliteration: "Ma'al 'usri yusra",
          meaning: { en: "With hardship is ease", ur: "مشکل کے ساتھ آسانی ہے" },
          explanation: { en: "Ma'a (WITH) not ba'da (AFTER) - ease exists simultaneously with hardship, not just afterwards. Even in the darkest moments, elements of ease are present.", ur: "مع (ساتھ) نہ کہ بعد (بعد میں) - آسانی مشکل کے ساتھ بیک وقت موجود ہے، صرف بعد میں نہیں۔ سب سے تاریک لمحات میں بھی آسانی کے عناصر موجود ہیں۔" },
          verseRef: "94:5-6"
        },
        {
          term: "العُسْر",
          transliteration: "Al-'Usr",
          meaning: { en: "THE hardship (definite)", ur: "وہ مشکل (معرفہ)" },
          explanation: { en: "Definite article 'al-' makes it specific. In Arabic, repeated definite = same entity. So 'al-'usr' mentioned twice = ONE hardship.", ur: "الف لام تعریف مخصوص بناتا ہے۔ عربی میں معرفہ دہرایا جائے = ایک ہی چیز۔ 'العسر' دو بار ذکر = ایک ہی مشکل۔" },
          verseRef: "94:5-6"
        },
        {
          term: "يُسْرًا × 2",
          transliteration: "Yusran (twice)",
          meaning: { en: "An ease (indefinite, twice)", ur: "ایک آسانی (نکرہ، دو بار)" },
          explanation: { en: "Indefinite 'yusran' mentioned twice. In Arabic, repeated indefinite = different entities. So TWO eases vs ONE hardship. Ease always wins!", ur: "نکرہ 'یسراً' دو بار ذکر۔ عربی میں نکرہ دہرایا جائے = مختلف چیزیں۔ تو دو آسانیاں بمقابلہ ایک مشکل۔ آسانی ہمیشہ جیتتی ہے!" },
          verseRef: "94:5-6"
        }
      ]
    },

    perpetualStriving: {
      name: "Continuous Effort",
      nameArabic: "الجهد المستمر",
      color: '#3B82F6',
      icon: 'Zap',
      description: { en: "Never rest - finish one task, begin another", ur: "کبھی رکو نہیں - ایک کام ختم کرو، دوسرا شروع کرو" },
      concepts: [
        {
          term: "فَإِذَا فَرَغْتَ فَانصَبْ",
          transliteration: "Fa-idha faraghta fa-nsab",
          meaning: { en: "When you finish, then strive", ur: "جب فارغ ہو تو محنت کرو" },
          explanation: { en: "No idle time. Finish worldly duties, turn to worship. Finish obligatory worship, do voluntary. The believer is always productively engaged.", ur: "فارغ وقت نہیں۔ دنیاوی کام ختم کرو، عبادت کی طرف متوجہ ہو۔ فرض عبادت ختم ہو، نفل شروع کرو۔ مومن ہمیشہ مصروف عمل رہتا ہے۔" },
          verseRef: "94:7"
        },
        {
          term: "إِلَى رَبِّكَ فَارْغَب",
          transliteration: "Ilaa Rabbika fa-rghab",
          meaning: { en: "To your Lord direct your longing", ur: "اپنے رب کی طرف رغبت کرو" },
          explanation: { en: "Ultimate direction of all hope and desire is Allah. All effort ultimately aims at His pleasure. Raghiba ilaa = turn toward with desire.", ur: "تمام امید اور خواہش کی حتمی سمت اللہ ہے۔ تمام کوششیں بالآخر اس کی رضا کی طرف ہیں۔ رغب الیٰ = خواہش کے ساتھ رجوع کرنا۔" },
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
      description: { en: "Expanded chest enables bearing burdens", ur: "کشادہ سینہ بوجھ اٹھانے کے قابل بناتا ہے" },
      explanation: { en: "With an expanded heart, burdens feel lighter", ur: "کشادہ دل کے ساتھ بوجھ ہلکے محسوس ہوتے ہیں" }
    },
    {
      from: "وضع الوزر",
      to: "رفع الذكر",
      type: "progression",
      description: { en: "Burden removed, mention elevated", ur: "بوجھ اترا، ذکر بلند ہوا" },
      explanation: { en: "Freedom from burden allows rise in status", ur: "بوجھ سے آزادی مرتبے کی بلندی کا سبب" }
    },
    {
      from: "العسر",
      to: "يسرا",
      type: "accompaniment",
      description: { en: "Hardship and ease coexist", ur: "مشکل اور آسانی ایک ساتھ" },
      explanation: { en: "Ma'a (with) indicates simultaneity", ur: "مع (ساتھ) بیک وقت ہونے کی نشاندہی" }
    },
    {
      from: "فرغت",
      to: "انصب",
      type: "sequence",
      description: { en: "Finish then strive", ur: "فارغ ہو تو محنت کرو" },
      explanation: { en: "One duty ends, another begins", ur: "ایک فرض ختم ہو، دوسرا شروع ہو" }
    }
  ],

  thematicFlow: {
    title: "From Divine Gift to Human Response",
    titleArabic: "من العطاء الإلهي إلى الاستجابة البشرية",
    description: { en: "Allah's blessings lead to human obligation", ur: "اللہ کی نعمتیں انسانی ذمہ داری کی طرف لے جاتی ہیں" },
    stages: [
      {
        stage: 1,
        theme: "Blessing 1: Opened Chest",
        verses: "94:1",
        description: { en: "Heart expanded for guidance", ur: "ہدایت کے لیے دل کھول دیا" }
      },
      {
        stage: 2,
        theme: "Blessing 2: Burden Removed",
        verses: "94:2-3",
        description: { en: "Heavy load lifted", ur: "بھاری بوجھ اتار دیا" }
      },
      {
        stage: 3,
        theme: "Blessing 3: Name Elevated",
        verses: "94:4",
        description: { en: "Eternal mention alongside Allah", ur: "اللہ کے ساتھ ابدی ذکر" }
      },
      {
        stage: 4,
        theme: "The Universal Law",
        verses: "94:5-6",
        description: { en: "With hardship comes ease (twice!)", ur: "مشکل کے ساتھ آسانی (دو بار!)" }
      },
      {
        stage: 5,
        theme: "Human Response",
        verses: "94:7-8",
        description: { en: "Perpetual striving toward Allah", ur: "اللہ کی طرف مسلسل کوشش" }
      }
    ]
  },

  theTwoEasesAnalysis: {
    title: "Mathematical Miracle: Two Eases vs One Hardship",
    description: { en: "Arabic grammar proves ease always overcomes hardship", ur: "عربی قواعد ثابت کرتے ہیں آسانی ہمیشہ مشکل پر غالب آتی ہے" },
    analysis: [
      {
        principle: "Repeated definite = same entity",
        application: "العُسْر (al-'usr) appears twice -> ONE hardship",
        evidence: "Both have 'al-' definite article"
      },
      {
        principle: "Repeated indefinite = different entities",
        application: "يُسْرًا (yusran) appears twice -> TWO eases",
        evidence: "Both lack definite article"
      },
      {
        principle: "Mathematical conclusion",
        application: "2 eases vs 1 hardship = Ease wins 2:1",
        evidence: "Prophet said: 'One difficulty cannot overcome two eases'"
      }
    ],
    propheticConfirmation: "The Prophet is reported to have said after this revelation: 'One hardship cannot overcome two eases'"
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
    title: { en: "The Grammar of Hope", ur: "امید کی صرف و نحو" },
    insight: { en: "This short surah contains one of the Quran's most profound grammatical miracles. The word 'hardship' (al-'usr) appears with the definite article both times - in Arabic, this means it's the SAME hardship being mentioned twice. But 'ease' (yusran) appears indefinitely both times - meaning TWO DIFFERENT eases are promised. The Prophet himself explained: 'One hardship cannot overcome two eases.' This isn't mere comfort - it's a mathematical guarantee embedded in Arabic grammar. Furthermore, the preposition 'ma'a' (with) rather than 'ba'da' (after) means ease doesn't just FOLLOW hardship - it EXISTS WITH IT, simultaneously. Even in your darkest hour, ease is already present.", ur: "اس مختصر سورت میں قرآن کے سب سے گہرے صرف و نحوی معجزات میں سے ایک ہے۔ لفظ 'مشکل' (العسر) دونوں بار الف لام کے ساتھ آیا - عربی میں اس کا مطلب ایک ہی مشکل ہے۔ لیکن 'آسانی' (یسراً) دونوں بار نکرہ آئی - یعنی دو مختلف آسانیوں کا وعدہ۔ نبی نے خود فرمایا: 'ایک مشکل دو آسانیوں پر غالب نہیں آ سکتی۔' یہ محض تسلی نہیں - عربی قواعد میں پوشیدہ ریاضیاتی ضمانت ہے۔ مزید برآں، حرف جار 'مع' (ساتھ) نہ کہ 'بعد' (بعد) کا مطلب ہے آسانی مشکل کے بعد ہی نہیں آتی - بلکہ ساتھ موجود ہے، بیک وقت۔" },
    modernRelevance: "In times of depression, anxiety, or difficulty, this surah teaches: (1) Ease is already here, look for it (2) More ease is coming (3) Keep working, don't stop (4) Direct all hope to Allah"
  },

  connectionToAdDuha: {
    title: "Twin Surahs: Ad-Duha and Ash-Sharh",
    description: { en: "These two surahs are often considered a pair", ur: "ان دو سورتوں کو اکثر ایک جوڑی سمجھا جاتا ہے" },
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
    mnemonic: "Chest - Burden - Back - Mention - Ease x 2 - Work - Lord"
  }
};

export default ONTOLOGY;
