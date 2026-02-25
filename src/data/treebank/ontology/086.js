/**
 * Surah At-Tariq (86) - Ontology of Quranic Concepts
 * The Night Comer / The Piercing Star
 * Theme: Cosmic oath, human creation, Quran's decisive word
 */

export const ONTOLOGY = {
  surahId: 86,
  surahName: "At-Tariq",
  surahNameArabic: "الطارق",
  revelationType: "Makki",
  totalAyahs: 17,

  categories: {
    cosmicOaths: {
      name: "The Cosmic Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "السَّمَاءِ وَالطَّارِقِ", meaning: { en: "Sky and night-comer", ur: "آسمان اور رات کو آنے والے کی قسم" }, explanation: { en: "Sky swears by its visitor - the piercing star", ur: "آسمان اپنے مہمان کی قسم کھاتا ہے - چمکتا ستارہ" }, verseRef: "86:1" },
        { term: "النَّجْمُ الثَّاقِبُ", meaning: { en: "Piercing star", ur: "چمکتا ستارہ جو تاریکی چیرتا ہے" }, explanation: { en: "Star that pierces darkness with light. Could be pulsars discovered in modern astronomy", ur: "ستارہ جو روشنی سے اندھیرا چیرتا ہے۔ جدید فلکیات میں دریافت ہونے والے پلسار ہو سکتے ہیں" }, verseRef: "86:3" }
      ]
    },

    divineWatch: {
      name: "Divine Guardianship",
      nameArabic: "الحفظ الإلهي",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "كُلُّ نَفْسٍ... حَافِظٌ", meaning: { en: "Every soul has guardian", ur: "ہر جان پر نگہبان ہے" }, explanation: { en: "Angels record every deed - nothing hidden from Allah", ur: "فرشتے ہر عمل لکھتے ہیں - Allah سے کچھ چھپا نہیں" }, verseRef: "86:4" }
      ]
    },

    humanCreation: {
      name: "Human Origin",
      nameArabic: "خلق الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "مَاءٍ دَافِقٍ", meaning: { en: "Ejected fluid", ur: "اچھلتا ہوا پانی" }, explanation: { en: "Scientific description: forceful emission of reproductive fluid", ur: "سائنسی بیان: تولیدی مادے کا زور سے نکلنا" }, verseRef: "86:6" },
        { term: "بَيْنِ الصُّلْبِ وَالتَّرَائِبِ", meaning: { en: "Between backbone and ribs", ur: "پیٹھ کی ہڈی اور سینے کی ہڈیوں کے درمیان سے" }, explanation: { en: "Embryological origin region of reproductive system", ur: "تولیدی نظام کی جنینیاتی اصل کا علاقہ" }, verseRef: "86:7" },
        { term: "عَلَىٰ رَجْعِهِ لَقَادِرٌ", meaning: { en: "Able to return him", ur: "اسے واپس لانے پر قادر ہے" }, explanation: { en: "Resurrection proof: He who created can recreate", ur: "قیامت کا ثبوت: جس نے بنایا وہ دوبارہ بنا سکتا ہے" }, verseRef: "86:8" }
      ]
    },

    judgmentDay: {
      name: "Day of Secrets",
      nameArabic: "يوم السرائر",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "تُبْلَى السَّرَائِرُ", meaning: { en: "Secrets examined", ur: "پوشیدہ رازوں کی جانچ ہوگی" }, explanation: { en: "Hidden intentions exposed - no secrets survive Judgment", ur: "چھپی ہوئی نیتیں بے نقاب - کوئی راز قیامت میں نہیں بچے گا" }, verseRef: "86:9" },
        { term: "مِن قُوَّةٍ وَلَا نَاصِرٍ", meaning: { en: "No strength or helper", ur: "نہ کوئی طاقت ہوگی نہ کوئی مددگار" }, explanation: { en: "Complete helplessness - no power or ally can save", ur: "مکمل بے بسی - نہ طاقت بچائے نہ حلیف" }, verseRef: "86:10" }
      ]
    },

    naturalOaths: {
      name: "Sky and Earth Testimony",
      nameArabic: "شهادة السماء والأرض",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءِ ذَاتِ الرَّجْعِ", meaning: { en: "Sky of return", ur: "لوٹا کر بھیجنے والے آسمان کی قسم" }, explanation: { en: "Rain cycle: water returns from sky repeatedly", ur: "بارش کا چکر: پانی بار بار آسمان سے لوٹتا ہے" }, verseRef: "86:11" },
        { term: "الْأَرْضِ ذَاتِ الصَّدْعِ", meaning: { en: "Earth of splitting", ur: "پھٹنے والی زمین کی" }, explanation: { en: "Ground splits for plant growth - germination", ur: "زمین پودوں کے لیے پھٹتی ہے - اگاؤ" }, verseRef: "86:12" }
      ]
    },

    quranNature: {
      name: "Nature of Quran",
      nameArabic: "طبيعة القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قَوْلٌ فَصْلٌ", meaning: { en: "Decisive word", ur: "فیصلہ کن کلام" }, explanation: { en: "Quran separates truth from falsehood conclusively", ur: "Quran حق اور باطل کو قطعی طور پر الگ کرتا ہے" }, verseRef: "86:13" },
        { term: "وَمَا هُوَ بِالْهَزْلِ", meaning: { en: "Not amusement", ur: "یہ ہنسی مذاق نہیں ہے" }, explanation: { en: "Quran is serious divine communication, not entertainment", ur: "Quran سنجیدہ الہٰی پیغام ہے، تفریح نہیں" }, verseRef: "86:14" }
      ]
    },

    divineCounter: {
      name: "Allah's Counter-Plan",
      nameArabic: "كيد الله",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "يَكِيدُونَ كَيْدًا", meaning: { en: "They plot a plot", ur: "وہ چال چلتے ہیں" }, explanation: { en: "Enemies of truth scheme against revelation", ur: "حق کے دشمن وحی کے خلاف سازش کرتے ہیں" }, verseRef: "86:15" },
        { term: "وَأَكِيدُ كَيْدًا", meaning: { en: "I plan a plan", ur: "اور میں (بھی) تدبیر کرتا ہوں" }, explanation: { en: "Allah's perfect counter - human schemes fail", ur: "Allah کی کامل تدبیر - انسانی سازشیں ناکام" }, verseRef: "86:16" },
        { term: "أَمْهِلْهُمْ رُوَيْدًا", meaning: { en: "Allow them respite briefly", ur: "انہیں تھوڑی مہلت دے دو" }, explanation: { en: "Just a little time - their end approaches", ur: "بس تھوڑا سا وقت - ان کا انجام قریب ہے" }, verseRef: "86:17" }
      ]
    }
  },

  relationships: [
    { from: "النجم الثاقب", to: "حافظ", type: "parallel", description: { en: "Star watches from sky, angels watch souls", ur: "ستارہ آسمان سے دیکھتا ہے، فرشتے روحوں کی نگرانی کرتے ہیں" } },
    { from: "ماء دافق", to: "رجعه", type: "implication", description: { en: "Creation proves resurrection capability", ur: "تخلیق قیامت کی صلاحیت ثابت کرتی ہے" } },
    { from: "السرائر", to: "لا قوة ولا ناصر", type: "consequence", description: { en: "Exposed secrets leave no defense", ur: "بے نقاب راز کوئی دفاع نہیں چھوڑتے" } },
    { from: "الرجع", to: "الصدع", type: "parallel", description: { en: "Sky returns rain, earth splits for growth", ur: "آسمان بارش لوٹاتا ہے، زمین اگنے کے لیے پھٹتی ہے" } },
    { from: "كيدهم", to: "كيدي", type: "contrast", description: { en: "Their plotting vs Allah's planning", ur: "ان کی سازش بمقابلہ Allah کی تدبیر" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Oath", verses: "86:1-3", description: { en: "Sky and piercing star witness", ur: "آسمان اور چمکتا ستارہ گواہ" } },
      { stage: 2, theme: "Soul Watched", verses: "86:4", description: { en: "Every soul has guardian", ur: "ہر جان پر نگہبان" } },
      { stage: 3, theme: "Human Creation", verses: "86:5-8", description: { en: "Created from fluid, can be resurrected", ur: "مادے سے بنایا، دوبارہ بنایا جا سکتا ہے" } },
      { stage: 4, theme: "Judgment Reality", verses: "86:9-10", description: { en: "Secrets exposed, no help", ur: "راز بے نقاب، کوئی مدد نہیں" } },
      { stage: 5, theme: "Natural Testimony", verses: "86:11-12", description: { en: "Sky returns rain, earth splits", ur: "آسمان بارش لوٹاتا ہے، زمین پھٹتی ہے" } },
      { stage: 6, theme: "Quran's Authority", verses: "86:13-14", description: { en: "Decisive, not amusement", ur: "فیصلہ کن، مذاق نہیں" } },
      { stage: 7, theme: "Divine Victory", verses: "86:15-17", description: { en: "Their plots fail, give respite briefly", ur: "ان کی سازشیں ناکام، تھوڑی مہلت دو" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "You're being watched", how: "Angels record everything - live consciously", verse: "86:4" },
      { principle: "Reflect on origins", how: "Your humble beginning should humble you now", verse: "86:5-7" },
      { principle: "No hidden sins", how: "Secrets will be exposed - purify intentions now", verse: "86:9" },
      { principle: "Take Quran seriously", how: "Not entertainment - life-changing guidance", verse: "86:13-14" },
      { principle: "Trust Allah's plan", how: "Enemies plot but Allah's plan prevails", verse: "86:15-17" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Night Visitor and the Hidden Guardian", ur: "رات کا مہمان اور چھپا ہوا نگہبان" },
    insight: { en: "Surah At-Tariq opens with a mysterious 'night visitor' - a piercing star that appears when darkness falls. This cosmic visitor parallels the حافظ (guardian) over every soul. Just as the star pierces darkness to witness the night, the guardian angel witnesses what humans hide in the darkness of their souls. The surah's message: whether in cosmic expanse or intimate secrecy, nothing escapes observation. The star's 'piercing' (ثاقب) mirrors how secrets will be 'examined' (تُبلى) on Judgment Day - both involve penetrating what seems hidden.", ur: "سورت الطارق ایک پراسرار 'رات کے مہمان' سے شروع ہوتی ہے - ایک چمکتا ستارہ جو اندھیرا چھانے پر نمودار ہوتا ہے۔ یہ کائناتی مہمان ہر جان پر مقرر حافظ (نگہبان) سے مماثل ہے۔ جیسے ستارہ اندھیرا چیر کر رات کا گواہ بنتا ہے، ویسے ہی نگہبان فرشتہ اس کا گواہ ہے جو انسان اپنی روحوں کے اندھیرے میں چھپاتے ہیں۔ سورت کا پیغام: چاہے کائناتی وسعت ہو یا خلوت کی رازداری، کچھ بھی نظر سے نہیں بچتا۔ ستارے کا 'چیرنا' (ثاقب) اس بات کا عکس ہے کہ قیامت کے دن راز 'جانچے' (تُبلى) جائیں گے۔" }
  },

  scientificReferences: {
    notes: [
      { verse: "86:3", topic: "Piercing star", note: "May refer to pulsars - stars emitting piercing radiation beams" },
      { verse: "86:6-7", topic: "Embryology", note: "Describes reproductive fluid and embryological origin region" },
      { verse: "86:11", topic: "Water cycle", note: "Sky 'returns' (raj') rain - cyclical nature of precipitation" },
      { verse: "86:12", topic: "Plant growth", note: "Earth 'splits' (ṣad') for germination" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "Cognate accusative", example: { en: "يَكِيدُونَ كَيْدًا / أَكِيدُ كَيْدًا", ur: "یَکیدون کیدا / أکید کیدا (مفعول مطلق)" }, effect: { en: "Emphasis on plotting", ur: "سازش پر زور" } },
      { feature: "Diminutive رُوَيْدًا", example: { en: "From رَود", ur: "رَود سے تصغیر" }, effect: { en: "Just a little - belittles their remaining time", ur: "بس ذرا سا - ان کے بچے وقت کو حقیر ظاہر کرتا ہے" } },
      { feature: "Active participle فَاعِل", example: { en: "طارق، ثاقب، حافظ، دافق", ur: "طارق، ثاقب، حافظ، دافق" }, effect: { en: "Ongoing active states", ur: "جاری فعال کیفیات" } }
    ]
  }
};

export default ONTOLOGY;
