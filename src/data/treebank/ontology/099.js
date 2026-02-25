/**
 * Surah Az-Zalzalah (99) - Ontology of Quranic Concepts
 * The Earthquake
 * Theme: The final earthquake and perfect atomic-level justice
 */

export const ONTOLOGY = {
  surahId: 99,
  surahName: "Az-Zalzalah",
  surahNameArabic: "الزلزلة",
  revelationType: "Madani (some say Makki)",
  totalAyahs: 8,

  categories: {
    cosmicEvent: {
      name: "The Final Earthquake",
      nameUr: "عظیم زلزلہ",
      nameArabic: "الزلزلة الكبرى",
      color: '#EF4444',
      icon: 'Globe',
      description: { en: "The earth-shattering event marking the end", ur: "زمین کو ہلا دینے والا واقعہ جو قیامت کی علامت ہے" },
      concepts: [
        {
          term: "زُلْزِلَت زِلْزَالَهَا",
          transliteration: "Zulzilat zilzaalahaa",
          meaning: { en: "Shaken with ITS earthquake", ur: "اپنے مقررہ زلزلے سے ہلا دی گئی" },
          explanation: { en: "Cognate accusative emphasizes this is THE earthquake - earth's destined, final tremor. Not any earthquake, but the one it was created for.", ur: "مفعول مطلق اس بات پر زور دیتا ہے کہ یہ وہ زلزلہ ہے - زمین کا مقدر، آخری جھٹکا۔ کوئی عام زلزلہ نہیں بلکہ وہ جس کے لیے زمین بنائی گئی۔" },
          verseRef: "99:1"
        },
        {
          term: "أَخْرَجَت أَثْقَالَهَا",
          transliteration: "Akhrajat athqaalahaa",
          meaning: { en: "Expels its burdens", ur: "اپنے بوجھ باہر نکالتی ہے" },
          explanation: { en: "Earth releases: dead bodies (resurrection), hidden treasures, recorded events. Everything concealed is brought forth.", ur: "زمین باہر نکالتی ہے: مردہ جسم (قیامت)، چھپے خزانے، درج شدہ واقعات۔ ہر چھپی ہوئی چیز سامنے آتی ہے۔" },
          verseRef: "99:2"
        }
      ]
    },

    earthAsWitness: {
      name: "Earth as Divine Witness",
      nameUr: "زمین بطور الٰہی گواہ",
      nameArabic: "الأرض شاهدة",
      color: '#06B6D4',
      icon: 'Eye',
      description: { en: "The earth testifies about all that occurred on it", ur: "زمین ہر اس چیز کی گواہی دیتی ہے جو اس پر ہوئی" },
      concepts: [
        {
          term: "تُحَدِّثُ أَخْبَارَهَا",
          transliteration: "Tuhaddith akhbaarahaa",
          meaning: { en: "It will report its news", ur: "وہ اپنی خبریں بیان کرے گی" },
          explanation: { en: "Form II intensive - earth narrates in detail every event that occurred on it. Every sin, every good deed, every secret - earth witnessed and will testify.", ur: "باب تفعیل شدت کے لیے - زمین تفصیل سے ہر واقعہ بیان کرتی ہے جو اس پر ہوا۔ ہر گناہ، ہر نیکی، ہر راز - زمین نے دیکھا اور گواہی دے گی۔" },
          verseRef: "99:4"
        },
        {
          term: "بِأَنَّ رَبَّك أَوْحَى لَهَا",
          transliteration: "Bi-anna Rabbaka awhaa lahaa",
          meaning: { en: "Because your Lord commanded it", ur: "کیونکہ تمہارے رب نے اسے حکم دیا" },
          explanation: { en: "Earth speaks by divine command - Allah instructs His creation to testify. Even inanimate objects obey.", ur: "زمین الٰہی حکم سے بولتی ہے - Allah اپنی مخلوق کو گواہی کا حکم دیتا ہے۔ بے جان چیزیں بھی اطاعت کرتی ہیں۔" },
          verseRef: "99:5"
        }
      ]
    },

    humanScattering: {
      name: "Human Classification",
      nameUr: "انسانوں کی درجہ بندی",
      nameArabic: "تصنيف البشر",
      color: '#8B5CF6',
      icon: 'Users',
      description: { en: "People emerge separated by their deeds", ur: "لوگ اپنے اعمال کے مطابق الگ الگ نکلتے ہیں" },
      concepts: [
        {
          term: "يَصْدُرُ النَّاسُ أَشْتَاتًا",
          transliteration: "Yasdur an-naas ashtaatan",
          meaning: { en: "People proceed in scattered groups", ur: "لوگ مختلف گروہوں میں بکھرے ہوئے نکلتے ہیں" },
          explanation: { en: "Humanity exits graves separated - not by race or wealth, but by deeds. Different destinations based on different records.", ur: "انسانیت قبروں سے الگ الگ نکلتی ہے - نسل یا دولت سے نہیں بلکہ اعمال سے۔ مختلف اعمال نامے کی بنا پر مختلف منازل۔" },
          verseRef: "99:6"
        },
        {
          term: "لِيُرَوْا أَعْمَالَهُم",
          transliteration: "Li-yuraw a'maalahum",
          meaning: { en: "To be shown their deeds", ur: "تاکہ انہیں ان کے اعمال دکھائے جائیں" },
          explanation: { en: "Purpose: everyone sees their own record - nothing hidden, nothing forgotten.", ur: "مقصد: ہر شخص اپنا اعمال نامہ دیکھے - کچھ چھپا نہیں، کچھ بھولا نہیں۔" },
          verseRef: "99:6"
        }
      ]
    },

    atomicJustice: {
      name: "Atomic-Level Accountability",
      nameUr: "ذرّہ برابر جوابدہی",
      nameArabic: "حساب مثقال الذرة",
      color: '#F59E0B',
      icon: 'Scale',
      description: { en: "Perfect justice down to the smallest deed", ur: "چھوٹے سے چھوٹے عمل تک مکمل انصاف" },
      concepts: [
        {
          term: "مِثْقَال ذَرَّة خَيْرًا",
          transliteration: "Mithqaal dharrah khayran",
          meaning: { en: "Atom's weight of good", ur: "ذرہ برابر نیکی" },
          explanation: { en: "Even the tiniest good deed is recorded and rewarded. No kindness is too small to matter.", ur: "چھوٹی سے چھوٹی نیکی بھی درج اور اجر کے قابل ہے۔ کوئی بھلائی اتنی چھوٹی نہیں کہ اہمیت نہ رکھے۔" },
          verseRef: "99:7"
        },
        {
          term: "مِثْقَال ذَرَّة شَرًّا",
          transliteration: "Mithqaal dharrah sharran",
          meaning: { en: "Atom's weight of evil", ur: "ذرہ برابر برائی" },
          explanation: { en: "Even the smallest sin is recorded. No wrong escapes accountability.", ur: "چھوٹے سے چھوٹا گناہ بھی درج ہوتا ہے۔ کوئی غلطی حساب سے نہیں بچتی۔" },
          verseRef: "99:8"
        },
        {
          term: "يَرَهُ",
          transliteration: "Yarahu",
          meaning: { en: "Will see it", ur: "اسے دیکھ لے گا" },
          explanation: { en: "The person SEES their deed - transformed into reward or punishment, the deed is witnessed.", ur: "شخص اپنا عمل دیکھتا ہے - اجر یا سزا میں تبدیل شدہ، عمل کا مشاہدہ ہوتا ہے۔" },
          verseRef: "99:7-8"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الزلزلة",
      to: "أثقال",
      type: "causation",
      description: { en: "Earthquake causes burdens to emerge", ur: "زلزلہ بوجھ کے نکلنے کا سبب بنتا ہے" },
      explanation: "The shaking forces earth to release everything hidden"
    },
    {
      from: "أخبارها",
      to: "أوحى لها",
      type: "enablement",
      description: { en: "Divine command enables earth's testimony", ur: "الٰہی حکم زمین کی گواہی کو ممکن بناتا ہے" },
      explanation: "Earth speaks because Allah commanded it"
    },
    {
      from: "أشتاتا",
      to: "ليروا أعمالهم",
      type: "purpose",
      description: { en: "Separation is for showing deeds", ur: "جدائی اعمال دکھانے کے لیے ہے" },
      explanation: "Groups form based on what will be shown"
    },
    {
      from: "مثقال ذرة خير",
      to: "مثقال ذرة شر",
      type: "parallel",
      description: { en: "Perfect symmetry of justice", ur: "انصاف کی مکمل ہم آہنگی" },
      explanation: "Same standard for good and evil - complete fairness"
    }
  ],

  thematicFlow: {
    title: "From Earthquake to Accountability",
    titleArabic: "من الزلزلة إلى الحساب",
    description: { en: "The surah moves from cosmic event to individual reckoning", ur: "سورت کائناتی واقعے سے انفرادی حساب کتاب کی طرف بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "The Event",
        verses: "99:1-2",
        description: { en: "Earth shakes and expels its burdens", ur: "زمین ہلتی ہے اور اپنے بوجھ نکالتی ہے" }
      },
      {
        stage: 2,
        theme: "Human Reaction",
        verses: "99:3",
        description: { en: "Human confusion at the event", ur: "واقعے پر انسان کی حیرانی" }
      },
      {
        stage: 3,
        theme: "Earth's Testimony",
        verses: "99:4-5",
        description: { en: "Earth reports by divine command", ur: "زمین الٰہی حکم سے خبریں بیان کرتی ہے" }
      },
      {
        stage: 4,
        theme: "Human Separation",
        verses: "99:6",
        description: { en: "People emerge in groups to see deeds", ur: "لوگ گروہوں میں اعمال دیکھنے نکلتے ہیں" }
      },
      {
        stage: 5,
        theme: "Perfect Justice",
        verses: "99:7-8",
        description: { en: "Atomic-level accountability", ur: "ذرّہ برابر حساب" }
      }
    ]
  },

  theAtomVerses: {
    title: "The Atom Verses (7-8)",
    significance: { en: "Among the most memorized and quoted verses in the Quran", ur: "قرآن کی سب سے زیادہ حفظ اور حوالہ دی جانے والی آیات میں سے" },
    details: [
      {
        aspect: "Universal Principle",
        description: { en: "Establishes that NO deed is insignificant - every action matters", ur: "یہ ثابت کرتا ہے کہ کوئی عمل معمولی نہیں - ہر عمل اہمیت رکھتا ہے" }
      },
      {
        aspect: "Perfect Symmetry",
        description: { en: "Identical structure for good and evil shows equal, fair treatment", ur: "نیکی اور برائی کے لیے ایک جیسی ساخت مساوی اور منصفانہ سلوک ظاہر کرتی ہے" }
      },
      {
        aspect: "ذَرَّة (Atom)",
        description: { en: "Smallest conceivable particle - now understood as 'atom' in Arabic", ur: "قابلِ تصور سب سے چھوٹا ذرہ - اب عربی میں 'ایٹم' کے معنی میں استعمال ہوتا ہے" }
      },
      {
        aspect: "يَرَهُ (Will See It)",
        description: { en: "Active seeing - the person witnesses their deed in transformed form", ur: "فعال مشاہدہ - شخص اپنے عمل کو تبدیل شدہ شکل میں دیکھتا ہے" }
      }
    ],
    modernRelevance: "In an age of 'small sins don't matter', these verses remind that everything counts"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 81,
        name: "At-Takwir",
        relation: "Detailed cosmic signs of Judgment Day",
        sharedTheme: "End times description"
      },
      {
        surah: 82,
        name: "Al-Infitar",
        relation: "Sky splits, seas burst, graves overturned",
        sharedTheme: "Cosmic destruction"
      },
      {
        surah: 101,
        name: "Al-Qari'ah",
        relation: "Another name for Judgment Day, also mentions scales",
        sharedTheme: "Day of Judgment"
      },
      {
        surah: 21,
        name: "Al-Anbiya",
        verse: 47,
        relation: "'We place scales of justice for the Day of Resurrection'",
        sharedTheme: "Scales and atomic justice"
      }
    ]
  },

  hadith: [
    {
      arabic: "إن هذه الآية أجمع آية للخير والشر: فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
      english: "This verse is the most comprehensive regarding good and evil",
      source: "Various Tafseer",
      relevance: "Shows the foundational importance of verses 7-8"
    },
    {
      arabic: "اتقوا النار ولو بشق تمرة",
      english: "Fear the Fire even if with half a date (given in charity)",
      source: "Sahih Bukhari & Muslim",
      relevance: "Illustrates that even tiny good deeds matter"
    },
    {
      arabic: "لا تحقرن من المعروف شيئاً",
      english: "Do not belittle any good deed",
      source: "Sahih Muslim",
      relevance: "Direct application of verse 7"
    }
  ],

  practicalApplication: {
    title: "Living by the Atom Verses",
    applications: [
      {
        principle: "No good is too small",
        example: "A smile, a kind word, picking up litter",
        verse: "99:7"
      },
      {
        principle: "No sin is 'minor'",
        example: "A glance, a whisper, a small lie",
        verse: "99:8"
      },
      {
        principle: "Earth records everything",
        example: "Be mindful of actions even when alone",
        verse: "99:4"
      },
      {
        principle: "Deeds will be seen",
        example: "Act as if you'll watch a replay of your life",
        verse: "99:6"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Earth's Memory", ur: "زمین کی یادداشت" },
    insight: { en: "This surah reveals that the earth is not merely passive ground - it's a divine recording device. Every footstep toward sin or prayer, every secret meeting, every hidden act of kindness or cruelty - earth remembers. And on Judgment Day, by Allah's command, it will testify. The most private sins and the most hidden charities will be announced by the very ground they occurred upon. This transforms how we understand privacy and accountability.", ur: "یہ سورت ظاہر کرتی ہے کہ زمین محض بے جان سطح نہیں - یہ ایک الٰہی ریکارڈنگ آلہ ہے۔ گناہ یا نماز کی طرف ہر قدم، ہر خفیہ ملاقات، ہر چھپی ہوئی بھلائی یا ظلم - زمین یاد رکھتی ہے۔ اور قیامت کے دن، Allah کے حکم سے، یہ گواہی دے گی۔ سب سے نجی گناہ اور سب سے چھپے صدقے اسی زمین سے اعلان ہوں گے جہاں وہ ہوئے۔ یہ رازداری اور جوابدہی کے بارے میں ہماری سمجھ کو بدل دیتا ہے۔" },
    modernRelevance: "In an age of surveillance and digital footprints, this surah anticipated that nothing is truly private. But unlike human surveillance, divine recording is perfect, just, and for ultimate accountability."
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        feature: "Onomatopoeia",
        example: "زُلْزِلَت - sounds like shaking",
        effect: "You hear the earthquake in the word"
      },
      {
        feature: "Cognate Accusative",
        example: "زُلْزِلَت زِلْزَالَهَا",
        effect: "Emphasizes THE earthquake - earth's destined end"
      },
      {
        feature: "Perfect Parallelism",
        example: "Verses 7 and 8 mirror exactly except خَيْر/شَرّ",
        effect: "Visual and auditory balance = perfect justice"
      },
      {
        feature: "Feminine Earth",
        example: "All pronouns referring to earth are feminine",
        effect: "Earth portrayed as responsive, obedient creation"
      }
    ]
  },

  comparisonTable: {
    title: "What Emerges from Earth",
    headers: ["Item", "Interpretation", "Verse"],
    rows: [
      {
        item: "أَثْقَالَهَا (burdens)",
        interpretation: "Dead bodies for resurrection",
        verse: "99:2"
      },
      {
        item: "أَثْقَالَهَا",
        interpretation: "Hidden treasures people hoarded",
        verse: "99:2"
      },
      {
        item: "أَخْبَارَهَا (news)",
        interpretation: "All recorded events",
        verse: "99:4"
      },
      {
        item: "أَعْمَالَهُم (deeds)",
        interpretation: "Individual actions shown",
        verse: "99:6"
      },
      {
        item: "مِثْقَال ذَرَّة",
        interpretation: "Smallest particle of deed",
        verse: "99:7-8"
      }
    ]
  }
};

export default ONTOLOGY;
