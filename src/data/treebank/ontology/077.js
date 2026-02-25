/**
 * Surah Al-Mursalat (77) - Ontology of Quranic Concepts
 * Those Sent Forth
 * Theme: Divine agents (winds/angels), Day of Judgment, denial consequences, famous refrain
 */

export const ONTOLOGY = {
  surahId: 77,
  surahName: "Al-Mursalat",
  surahNameArabic: "المرسلات",
  revelationType: "Makki",
  totalAyahs: 50,

  categories: {
    divineOaths: {
      name: "Oaths by Divine Agents",
      nameArabic: "القسم بالعوامل الإلهية",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "وَالْمُرْسَلَاتِ عُرْفًا", meaning: { en: "Those sent forth in succession", ur: "پے در پے بھیجی جانے والی ہواؤں/فرشتوں کی قسم" }, explanation: { en: "Winds/angels sent one after another", ur: "ہوائیں یا فرشتے یکے بعد دیگرے بھیجے گئے" }, verseRef: "77:1" },
        { term: "فَالْعَاصِفَاتِ عَصْفًا", meaning: { en: "Those blowing violently", ur: "تیز آندھی کی طرح چلنے والیوں کی" }, explanation: { en: "Storming winds or angels", ur: "طوفانی ہوائیں یا فرشتے" }, verseRef: "77:2" },
        { term: "وَالنَّاشِرَاتِ نَشْرًا", meaning: { en: "Those spreading", ur: "پھیلانے والیوں کی" }, explanation: { en: "Spreading clouds or revelations", ur: "بادل یا وحی پھیلانے والی" }, verseRef: "77:3" },
        { term: "فَالْفَارِقَاتِ فَرْقًا", meaning: { en: "Those separating", ur: "حق و باطل میں فرق کرنے والیوں کی" }, explanation: { en: "Distinguishing truth from falsehood", ur: "سچ اور جھوٹ میں تمیز کرنا" }, verseRef: "77:4" },
        { term: "فَالْمُلْقِيَاتِ ذِكْرًا", meaning: { en: "Those delivering reminder", ur: "نصیحت پہنچانے والیوں کی" }, explanation: { en: "Angels delivering revelation", ur: "فرشتے جو وحی پہنچاتے ہیں" }, verseRef: "77:5" },
        { term: "عُذْرًا أَوْ نُذْرًا", meaning: { en: "As excuse or warning", ur: "عذر قائم کرنے یا ڈرانے کے لیے" }, explanation: { en: "Purpose: remove excuses, give warnings", ur: "مقصد: عذر ختم کرنا، تنبیہ کرنا" }, verseRef: "77:6" }
      ]
    },

    promiseCertainty: {
      name: "Certainty of Promise",
      nameArabic: "يقينية الوعد",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "إِنَّمَا تُوعَدُونَ لَوَاقِعٌ", meaning: { en: "What you are promised will occur", ur: "جس چیز کا تم سے وعدہ کیا جا رہا ہے وہ ضرور ہوگی" }, explanation: { en: "Resurrection is certain", ur: "قیامت یقینی ہے" }, verseRef: "77:7" }
      ]
    },

    cosmicEvents: {
      name: "Cosmic Events of That Day",
      nameArabic: "الأحداث الكونية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "النُّجُومُ طُمِسَتْ", meaning: { en: "Stars extinguished", ur: "ستارے بجھا دیے گئے" }, explanation: { en: "Light sources wiped out", ur: "روشنی کے ذرائع ختم کر دیے گئے" }, verseRef: "77:8" },
        { term: "السَّمَاءُ فُرِجَتْ", meaning: { en: "Sky split open", ur: "آسمان پھٹ گیا" }, explanation: { en: "Heavens torn asunder", ur: "آسمان ٹکڑے ٹکڑے ہو گئے" }, verseRef: "77:9" },
        { term: "الْجِبَالُ نُسِفَتْ", meaning: { en: "Mountains blown away", ur: "پہاڑ اڑا دیے گئے" }, explanation: { en: "Mountains scattered as dust", ur: "پہاڑ دھول بن کر بکھر گئے" }, verseRef: "77:10" },
        { term: "الرُّسُلُ أُقِّتَتْ", meaning: { en: "Messengers gathered", ur: "رسولوں کے لیے وقت مقرر کیا گیا" }, explanation: { en: "Prophets assembled for testimony", ur: "انبیاء گواہی کے لیے جمع کیے گئے" }, verseRef: "77:11" }
      ]
    },

    dayOfSeparation: {
      name: "Day of Separation",
      nameArabic: "يوم الفصل",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "لِأَيِّ يَوْمٍ أُجِّلَتْ", meaning: { en: "For what Day were they postponed?", ur: "کس دن کے لیے مہلت دی گئی؟" }, explanation: { en: "Building suspense about That Day", ur: "اس دن کے بارے میں تجسس پیدا کرنا" }, verseRef: "77:12" },
        { term: "لِيَوْمِ الْفَصْلِ", meaning: { en: "For the Day of Judgment", ur: "فیصلے کے دن کے لیے" }, explanation: { en: "Day when truth is separated from falsehood", ur: "وہ دن جب حق باطل سے الگ کیا جائے گا" }, verseRef: "77:13" },
        { term: "مَا أَدْرَاكَ مَا يَوْمُ الْفَصْلِ", meaning: { en: "What can make you know?", ur: "تمہیں کیا معلوم کہ فیصلے کا دن کیا ہے؟" }, explanation: { en: "Its severity beyond imagination", ur: "اس کی شدت تصور سے بالاتر ہے" }, verseRef: "77:14" }
      ]
    },

    historicalWarnings: {
      name: "Historical Warnings",
      nameArabic: "التحذيرات التاريخية",
      color: '#EC4899',
      icon: 'Book',
      concepts: [
        { term: "أَلَمْ نُهْلِكِ الْأَوَّلِينَ", meaning: { en: "Did We not destroy the ancients?", ur: "کیا ہم نے پہلی قوموں کو ہلاک نہیں کیا؟" }, explanation: { en: "Past nations destroyed", ur: "ماضی کی قومیں تباہ ہوئیں" }, verseRef: "77:16" },
        { term: "ثُمَّ نُتْبِعُهُمُ الْآخِرِينَ", meaning: { en: "Then followed them with later ones", ur: "پھر بعد والوں کو بھی ان کے پیچھے لگا دیں گے" }, explanation: { en: "Pattern continues with deniers", ur: "انکار کرنے والوں کے ساتھ یہ سلسلہ جاری رہے گا" }, verseRef: "77:17" },
        { term: "كَذَٰلِكَ نَفْعَلُ بِالْمُجْرِمِينَ", meaning: { en: "Thus We deal with criminals", ur: "ہم مجرموں کے ساتھ ایسا ہی کرتے ہیں" }, explanation: { en: "Divine justice consistent", ur: "الہٰی انصاف ہمیشہ یکساں ہے" }, verseRef: "77:18" }
      ]
    },

    creationProofs: {
      name: "Proofs from Creation",
      nameArabic: "براهين من الخلق",
      color: '#3B82F6',
      icon: 'Users',
      concepts: [
        { term: "أَلَمْ نَخْلُقكُّم مِّن مَّاءٍ مَّهِينٍ", meaning: { en: "Did We not create you from despised fluid?", ur: "کیا ہم نے تمہیں حقیر پانی سے پیدا نہیں کیا؟" }, explanation: { en: "Humble origin of humanity", ur: "انسانیت کی حقیر اصل" }, verseRef: "77:20" },
        { term: "قَرَارٍ مَّكِينٍ", meaning: { en: "Secure resting place", ur: "محفوظ ٹھکانا (رحمِ مادر)" }, explanation: { en: "Womb as safe container", ur: "رحم بطور محفوظ حفاظتی خول" }, verseRef: "77:21" },
        { term: "إِلَىٰ قَدَرٍ مَّعْلُومٍ", meaning: { en: "Until known term", ur: "ایک معلوم مدت تک" }, explanation: { en: "Precise gestation period", ur: "حمل کی مقررہ مدت" }, verseRef: "77:22" },
        { term: "فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ", meaning: { en: "We determined - excellent Determiners!", ur: "ہم نے اندازہ مقرر کیا اور کیا خوب اندازہ مقرر کرنے والے ہیں ہم" }, explanation: { en: "Allah's perfect planning", ur: "Allah کی کامل منصوبہ بندی" }, verseRef: "77:23" }
      ]
    },

    earthProofs: {
      name: "Earth as Evidence",
      nameArabic: "الأرض كدليل",
      color: '#22C55E',
      icon: 'Globe',
      concepts: [
        { term: "الْأَرْضَ كِفَاتًا أَحْيَاءً وَأَمْوَاتًا", meaning: { en: "Earth containing living and dead", ur: "زمین زندوں اور مُردوں کو سمیٹنے والی" }, explanation: { en: "Earth holds both living creatures and corpses", ur: "زمین زندہ مخلوقات اور لاشوں دونوں کو اپنے اندر رکھتی ہے" }, verseRef: "77:25-26" },
        { term: "رَوَاسِيَ شَامِخَاتٍ", meaning: { en: "Towering mountains", ur: "اونچے اونچے پہاڑ" }, explanation: { en: "Mountains firmly rooted", ur: "پہاڑ مضبوطی سے جمے ہوئے" }, verseRef: "77:27" },
        { term: "مَّاءً فُرَاتًا", meaning: { en: "Sweet water", ur: "میٹھا پانی" }, explanation: { en: "Fresh water for drinking", ur: "پینے کا تازہ پانی" }, verseRef: "77:27" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "انطَلِقُوا إِلَىٰ مَا كُنتُم بِهِ تُكَذِّبُونَ", meaning: { en: "Proceed to what you denied", ur: "چلو اس چیز کی طرف جسے تم جھٹلاتے تھے" }, explanation: { en: "Facing denied reality", ur: "جھٹلائی ہوئی حقیقت کا سامنا" }, verseRef: "77:29" },
        { term: "ظِلٍّ ذِي ثَلَاثِ شُعَبٍ", meaning: { en: "Shadow of three branches", ur: "تین شاخوں والا سایہ (دھوئیں کا)" }, explanation: { en: "Smoke splitting into branches", ur: "دھواں جو شاخوں میں بٹ جائے" }, verseRef: "77:30" },
        { term: "لَّا ظَلِيلٍ وَلَا يُغْنِي مِنَ اللَّهَبِ", meaning: { en: "Neither shading nor availing against flame", ur: "نہ سایہ دینے والا نہ شعلے سے بچانے والا" }, explanation: { en: "False shade providing no relief", ur: "جھوٹا سایہ جو کوئی راحت نہیں دیتا" }, verseRef: "77:31" },
        { term: "تَرْمِي بِشَرَرٍ كَالْقَصْرِ", meaning: { en: "Throws sparks like palaces", ur: "محل جیسی چنگاریاں اچھالتی ہے" }, explanation: { en: "Sparks as large as buildings", ur: "عمارتوں جتنی بڑی چنگاریاں" }, verseRef: "77:32" },
        { term: "كَأَنَّهُ جِمَالَتٌ صُفْرٌ", meaning: { en: "Like yellow/black camels", ur: "جیسے زرد یا سیاہ اونٹ ہوں" }, explanation: { en: "Massive, rope-like sparks", ur: "بہت بڑی، رسی جیسی چنگاریاں" }, verseRef: "77:33" }
      ]
    },

    silencedDeniers: {
      name: "Silenced Deniers",
      nameArabic: "إسكات المكذبين",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "هَـٰذَا يَوْمُ لَا يَنطِقُونَ", meaning: { en: "This is Day they will not speak", ur: "یہ وہ دن ہے جب وہ بول نہیں سکیں گے" }, explanation: { en: "Speechless from terror", ur: "دہشت سے بے زبان" }, verseRef: "77:35" },
        { term: "وَلَا يُؤْذَنُ لَهُمْ فَيَعْتَذِرُونَ", meaning: { en: "Not permitted to make excuses", ur: "نہ انہیں اجازت دی جائے گی کہ عذر پیش کریں" }, explanation: { en: "No opportunity for excuses", ur: "عذر کا کوئی موقع نہیں" }, verseRef: "77:36" },
        { term: "فَإِن كَانَ لَكُمْ كَيْدٌ فَكِيدُونِ", meaning: { en: "If you have a plan, plot against Me", ur: "اگر تمہاری کوئی چال ہے تو مجھ سے چل کر دکھاؤ" }, explanation: { en: "Challenge to plot against Allah", ur: "Allah کے خلاف سازش کا چیلنج" }, verseRef: "77:39" }
      ]
    },

    paradiseDescription: {
      name: "Paradise for Righteous",
      nameArabic: "الجنة للمتقين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "الْمُتَّقِينَ فِي ظِلَالٍ وَعُيُونٍ", meaning: { en: "Righteous in shades and springs", ur: "متقین سائے اور چشموں میں ہوں گے" }, explanation: { en: "True shade vs. false Hell shade", ur: "حقیقی سایہ بمقابلہ جہنم کا جھوٹا سایہ" }, verseRef: "77:41" },
        { term: "وَفَوَاكِهَ مِمَّا يَشْتَهُونَ", meaning: { en: "Fruits of their desire", ur: "جو پھل چاہیں" }, explanation: { en: "Whatever they wish", ur: "جو بھی دل چاہے" }, verseRef: "77:42" },
        { term: "كُلُوا وَاشْرَبُوا هَنِيئًا", meaning: { en: "Eat and drink with satisfaction", ur: "مزے سے کھاؤ پیو" }, explanation: { en: "Reward for good deeds", ur: "نیک اعمال کا بدلہ" }, verseRef: "77:43" },
        { term: "كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ", meaning: { en: "Thus We reward the doers of good", ur: "ہم نیکی کرنے والوں کو ایسے ہی بدلہ دیتے ہیں" }, explanation: { en: "Muhsineen rewarded", ur: "محسنین کو اجر" }, verseRef: "77:44" }
      ]
    },

    worldlyEnjoyment: {
      name: "Worldly Enjoyment Warning",
      nameArabic: "تحذير التمتع الدنيوي",
      color: '#F59E0B',
      icon: 'AlertTriangle',
      concepts: [
        { term: "كُلُوا وَتَمَتَّعُوا قَلِيلًا", meaning: { en: "Eat and enjoy a little", ur: "کھاؤ اور تھوڑا فائدہ اٹھا لو" }, explanation: { en: "Brief worldly pleasure", ur: "دنیا کی مختصر لذت" }, verseRef: "77:46" },
        { term: "إِنَّكُم مُّجْرِمُونَ", meaning: { en: "Indeed you are criminals", ur: "بے شک تم مجرم ہو" }, explanation: { en: "Denial makes them criminals", ur: "انکار انہیں مجرم بنا دیتا ہے" }, verseRef: "77:46" }
      ]
    },

    finalRefusal: {
      name: "Final Refusal to Submit",
      nameArabic: "الرفض النهائي للخضوع",
      color: '#EF4444',
      icon: 'MessageCircle',
      concepts: [
        { term: "إِذَا قِيلَ لَهُمُ ارْكَعُوا لَا يَرْكَعُونَ", meaning: { en: "When told 'Bow down,' they bow not", ur: "جب انہیں کہا جاتا ہے رکوع کرو تو رکوع نہیں کرتے" }, explanation: { en: "Refusing worship/submission", ur: "عبادت اور سرتسلیم خم کرنے سے انکار" }, verseRef: "77:48" },
        { term: "فَبِأَيِّ حَدِيثٍ بَعْدَهُ يُؤْمِنُونَ", meaning: { en: "In what message after this will they believe?", ur: "اس کے بعد کون سی بات پر ایمان لائیں گے؟" }, explanation: { en: "If Quran rejected, what will convince?", ur: "اگر Quran کو رد کیا تو کیا چیز قائل کرے گی؟" }, verseRef: "77:50" }
      ]
    }
  },

  refrain: {
    text: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
    meaning: { en: "Woe that Day to the deniers", ur: "اس دن جھٹلانے والوں کے لیے تباہی ہے" },
    occurrences: [15, 19, 24, 28, 34, 37, 40, 45, 47, 49],
    count: 10,
    significance: { en: "Most repeated refrain in any surah - emphasizes severity of denial", ur: "Quran کی کسی بھی سورت میں سب سے زیادہ دہرایا جانے والا فقرہ - انکار کی شدت پر زور" }
  },

  relationships: [
    { from: "المرسلات/العاصفات", to: "ذكرا", type: "purpose", description: { en: "Winds and angels sent to deliver reminder", ur: "ہوائیں اور فرشتے نصیحت پہنچانے کے لیے بھیجے گئے" } },
    { from: "ما توعدون", to: "يوم الفصل", type: "identity", description: { en: "Promise = Day of Judgment", ur: "وعدہ = یومِ فیصلہ" } },
    { from: "نهلك الأولين", to: "نفعل بالمجرمين", type: "pattern", description: { en: "Past destruction = future pattern", ur: "ماضی کی تباہی = مستقبل کا نمونہ" } },
    { from: "ماء مهين", to: "فنعم القادرون", type: "contrast", description: { en: "Despised fluid → perfect creation shows Allah's power", ur: "حقیر مادے سے کامل تخلیق Allah کی قدرت ظاہر کرتی ہے" } },
    { from: "ظل ذي ثلاث شعب", to: "ظلال وعيون", type: "contrast", description: { en: "False shade in Hell vs. real shade in Paradise", ur: "جہنم کا جھوٹا سایہ بمقابلہ جنت کا اصلی سایہ" } },
    { from: "ويل للمكذبين (x10)", to: "لا ينطقون", type: "consequence", description: { en: "Denial leads to speechless terror", ur: "انکار بے زبان دہشت تک لے جاتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Oaths", verses: "77:1-7", description: { en: "Winds/angels sworn, promise certain", ur: "ہواؤں/فرشتوں کی قسم، وعدہ یقینی" } },
      { stage: 2, theme: "Cosmic Signs", verses: "77:8-15", description: { en: "Stars, sky, mountains transform; Day of Separation", ur: "ستارے، آسمان، پہاڑ بدل جائیں؛ یومِ فصل" } },
      { stage: 3, theme: "Historical Lesson", verses: "77:16-19", description: { en: "Past nations destroyed; pattern continues", ur: "پچھلی قومیں تباہ ہوئیں؛ سلسلہ جاری ہے" } },
      { stage: 4, theme: "Creation Proof", verses: "77:20-28", description: { en: "Human from fluid, earth contains all, mountains, water", ur: "مادے سے انسان، زمین سب سمیٹتی ہے، پہاڑ، پانی" } },
      { stage: 5, theme: "Hell's Reality", verses: "77:29-40", description: { en: "Three-branched smoke, palace-sized sparks, speechless", ur: "تین شاخوں والا دھواں، محل جیسی چنگاریاں، بے زبان" } },
      { stage: 6, theme: "Paradise Contrast", verses: "77:41-44", description: { en: "Muttaqeen in shades, springs, fruits", ur: "متقین سائے، چشموں اور پھلوں میں" } },
      { stage: 7, theme: "Final Warning", verses: "77:45-50", description: { en: "Brief enjoyment, refuse to bow, what else will they believe?", ur: "تھوڑا فائدہ، رکوع سے انکار، اور کس بات پر ایمان لائیں گے؟" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Accept reminders", how: "Angels deliver dhikr - receive it gratefully", verse: "77:5-6" },
      { principle: "Remember your origin", how: "Created from despised fluid - stay humble", verse: "77:20" },
      { principle: "Submit when called", how: "When told to bow (rukoo), bow - don't refuse worship", verse: "77:48" },
      { principle: "Don't enjoy 'a little'", how: "Brief worldly pleasure not worth eternal loss", verse: "77:46" },
      { principle: "Believe in the Quran", how: "If not this, what will you believe?", verse: "77:50" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Ten-Fold Refrain Structure", ur: "دس مرتبہ دہرائے جانے والے فقرے کی ساخت" },
    insight: { en: "No other surah has a refrain repeated 10 times. 'Woe that Day to the deniers' (وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ) functions like a hammer striking after each proof: (1) after promise certainty, (2) after historical destruction, (3) after creation proof, (4) after earth signs, (5) after Hell description, (6) after silence, (7) after challenge, (8) after Paradise description, (9) after worldly enjoyment warning, (10) after refusing to bow. The final verse asks: 'In what message after this will they believe?' - if 10 refrains and countless proofs don't convince them, nothing will. The structure creates crescendo of warning, each refrain more devastating than the last.", ur: "کسی اور سورت میں کوئی فقرہ 10 بار نہیں دہرایا گیا۔ 'اس دن جھٹلانے والوں کے لیے تباہی ہے' ہر دلیل کے بعد ہتھوڑے کی طرح کام کرتا ہے: (1) وعدے کی یقینیت کے بعد، (2) تاریخی تباہی کے بعد، (3) تخلیق کی دلیل کے بعد، (4) زمین کی نشانیوں کے بعد، (5) جہنم کی تصویر کشی کے بعد، (6) خاموشی کے بعد، (7) چیلنج کے بعد، (8) جنت کی تصویر کے بعد، (9) دنیاوی لذت کی تنبیہ کے بعد، (10) رکوع سے انکار کے بعد۔ آخری آیت پوچھتی ہے: 'اس کے بعد کون سی بات پر ایمان لائیں گے؟' - اگر 10 بار تکرار اور بے شمار دلائل قائل نہیں کر سکے تو کچھ نہیں کر سکے گا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "10x Refrain", example: { en: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ", ur: "اس دن جھٹلانے والوں کے لیے تباہی" }, effect: { en: "Hammering emphasis on denial's consequence", ur: "انکار کے نتائج پر بار بار زور" } },
      { feature: "Five feminine plurals", example: { en: "المرسلات، العاصفات، الناشرات، الفارقات، الملقيات", ur: "مرسلات، عاصفات، ناشرات، فارقات، ملقیات" }, effect: { en: "Powerful rhythmic oath sequence", ur: "قسموں کی مؤثر لے دار ترتیب" } },
      { feature: "كِفَاتًا", example: { en: "Container", ur: "سمیٹنے والی" }, effect: { en: "Rare word for earth holding life/death", ur: "زندگی اور موت کو سمیٹنے والی زمین کے لیے نایاب لفظ" } },
      { feature: "شُعَب", example: { en: "Branches", ur: "شاخیں" }, effect: { en: "Hell's smoke dividing into three", ur: "جہنم کا دھواں تین حصوں میں بٹنا" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "77:20-22", topic: "Human development", note: "Fluid → womb → measured term - embryological accuracy" },
      { verse: "77:27", topic: "Mountains", note: "رَواسِي (anchors) - mountains stabilizing crust" },
      { verse: "77:25-26", topic: "Earth's function", note: "كِفات - earth 'contains' living on surface, dead beneath" }
    ]
  }
};

export default ONTOLOGY;
