/**
 * Surah Al-Inshiqaq (84) - Ontology of Quranic Concepts
 * The Splitting
 * Theme: Sky splits, earth flattened, records given, stages of existence
 */

export const ONTOLOGY = {
  surahId: 84,
  surahName: "Al-Inshiqaq",
  surahNameArabic: "الانشقاق",
  revelationType: "Makki",
  totalAyahs: 25,

  categories: {
    cosmicUpheaval: {
      name: "Cosmic Transformation",
      nameUr: "کائناتی تبدیلی",
      nameArabic: "التحول الكوني",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءُ انشَقَّتْ", meaning: { en: "Sky splits apart", ur: "آسمان پھٹ جائے گا" }, explanation: { en: "Form VII - internal breaking, sky rips from within", ur: "باب انفعال - اندرونی شگاف، آسمان اندر سے پھٹے گا" }, verseRef: "84:1" },
        { term: "وَأَذِنَتْ لِرَبِّهَا", meaning: { en: "Listens to its Lord", ur: "اپنے رب کی سنتا ہے (فرمانبردار ہے)" }, explanation: { en: "Sky instantly obeys Allah's command", ur: "آسمان فوراً Allah کا حکم مانتا ہے" }, verseRef: "84:2" },
        { term: "الْأَرْضُ مُدَّتْ", meaning: { en: "Earth stretched flat", ur: "زمین کو ہموار کر دیا جائے گا" }, explanation: { en: "Mountains removed, valleys filled - level plain", ur: "پہاڑ ہٹائے، وادیاں بھریں - ہموار میدان" }, verseRef: "84:3" },
        { term: "وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ", meaning: { en: "Casts out and empties", ur: "جو کچھ اس میں ہے اگل دے گی اور خالی ہو جائے گی" }, explanation: { en: "Earth disgorges dead, treasures - nothing hidden", ur: "زمین مُردوں اور خزانوں کو اگلے گی - کچھ چھپا نہیں" }, verseRef: "84:4" }
      ]
    },

    humanJourney: {
      name: "Human Toiling",
      nameUr: "انسانی محنت و مشقت",
      nameArabic: "كدح الإنسان",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا", meaning: { en: "Toiling toward your Lord", ur: "اے انسان تو اپنے رب کی طرف محنت کرتا ہوا جا رہا ہے" }, explanation: { en: "Life is hard labor, inevitable meeting with Allah", ur: "زندگی سخت محنت ہے، Allah سے ملاقات ناگزیر ہے" }, verseRef: "84:6" },
        { term: "فَمُلَاقِيهِ", meaning: { en: "Then meeting Him", ur: "پھر اس سے ملنا ہی ہے" }, explanation: { en: "No escape from the encounter - question is: how?", ur: "ملاقات سے فرار ممکن نہیں - سوال یہ ہے: کیسی ملاقات ہوگی؟" }, verseRef: "84:6" }
      ]
    },

    twoRecords: {
      name: "Two Groups Receiving Records",
      nameUr: "نامۂ اعمال پانے والے دو گروہ",
      nameArabic: "فريقان والكتاب",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "كِتَابَهُ بِيَمِينِهِ", meaning: { en: "Record in right hand", ur: "نامہ اعمال دائیں ہاتھ میں" }, explanation: { en: "Right hand = honor, success, blessing", ur: "دایاں ہاتھ = عزت، کامیابی، برکت" }, verseRef: "84:7" },
        { term: "حِسَابًا يَسِيرًا", meaning: { en: "Easy reckoning", ur: "آسان حساب" }, explanation: { en: "Quick presentation, no harsh interrogation", ur: "مختصر پیشی، سخت پوچھ گچھ نہیں" }, verseRef: "84:8" },
        { term: "يَنقَلِبُ... مَسْرُورًا", meaning: { en: "Returns joyful", ur: "خوشی سے اپنے گھر والوں میں لوٹے گا" }, explanation: { en: "Reunited with family in Paradise, overjoyed", ur: "جنت میں اہل خانہ سے ملاقات، بے حد خوش" }, verseRef: "84:9" },
        { term: "كِتَابَهُ وَرَاءَ ظَهْرِهِ", meaning: { en: "Record behind back", ur: "نامہ اعمال پیٹھ کے پیچھے سے" }, explanation: { en: "Shame, trying to hide exposed sins", ur: "شرم، بے نقاب گناہوں کو چھپانے کی کوشش" }, verseRef: "84:10" },
        { term: "يَدْعُو ثُبُورًا", meaning: { en: "Cries for destruction", ur: "ہلاکت کو پکارے گا" }, explanation: { en: "Wishes for annihilation - prefers non-existence", ur: "فنا کی تمنا - نہ ہونا بہتر سمجھے" }, verseRef: "84:11" }
      ]
    },

    causeOfDoom: {
      name: "Cause of Their Doom",
      nameUr: "ان کی ہلاکت کا سبب",
      nameArabic: "سبب الهلاك",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "كَانَ فِي أَهْلِهِ مَسْرُورًا", meaning: { en: "Was joyful among family", ur: "اپنے گھر والوں میں خوش تھا" }, explanation: { en: "Wrong joy - heedless pleasure in dunya", ur: "غلط خوشی - دنیا میں غافل لطف" }, verseRef: "84:13" },
        { term: "ظَنَّ أَن لَّن يَحُورَ", meaning: { en: "Thought he'd never return", ur: "سمجھتا تھا کہ کبھی لوٹنا نہیں ہوگا" }, explanation: { en: "Denied resurrection - fatal miscalculation", ur: "قیامت کا انکار - مہلک غلطی" }, verseRef: "84:14" },
        { term: "بَلَىٰ", meaning: { en: "Yes indeed!", ur: "کیوں نہیں! ضرور!" }, explanation: { en: "Emphatic affirmation after negation", ur: "نفی کے بعد زور دار اثبات" }, verseRef: "84:15" }
      ]
    },

    twilightOaths: {
      name: "Twilight Oaths",
      nameUr: "شفق کی قسمیں",
      nameArabic: "قسم الغروب",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "بِالشَّفَقِ", meaning: { en: "By the twilight", ur: "شفق (سرخی شام) کی قسم" }, explanation: { en: "Afterglow at sunset - transition time", ur: "غروب کی سرخی - تبدیلی کا وقت" }, verseRef: "84:16" },
        { term: "وَاللَّيْلِ وَمَا وَسَقَ", meaning: { en: "Night and what it gathers", ur: "رات اور جو کچھ وہ سمیٹ لے" }, explanation: { en: "Night envelops creatures to rest", ur: "رات مخلوقات کو آرام کے لیے لپیٹ لیتی ہے" }, verseRef: "84:17" },
        { term: "وَالْقَمَرِ إِذَا اتَّسَقَ", meaning: { en: "Moon when full", ur: "چاند جب پورا ہو جائے" }, explanation: { en: "Moon reaches completion - cycles of change", ur: "چاند تکمیل کو پہنچے - تبدیلی کے چکر" }, verseRef: "84:18" }
      ]
    },

    stagesOfExistence: {
      name: "Life Stages",
      nameUr: "زندگی کے مراحل",
      nameArabic: "أطوار الحياة",
      color: '#22C55E',
      icon: 'Compass',
      concepts: [
        { term: "لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ", meaning: { en: "Stage after stage", ur: "تم ضرور حالت در حالت بدلتے رہو گے" }, explanation: { en: "Womb → birth → childhood → youth → old age → death → barzakh → resurrection", ur: "رحم → پیدائش → بچپن → جوانی → بڑھاپا → موت → برزخ → قیامت" }, verseRef: "84:19" }
      ]
    },

    rejecters: {
      name: "The Deniers",
      nameUr: "جھٹلانے والے",
      nameArabic: "المكذبون",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَا يُؤْمِنُونَ", meaning: { en: "They don't believe", ur: "وہ ایمان نہیں لاتے" }, explanation: { en: "Despite all signs, refuse to believe", ur: "تمام نشانیوں کے باوجود ایمان لانے سے انکار" }, verseRef: "84:20" },
        { term: "لَا يَسْجُدُونَ", meaning: { en: "They don't prostrate", ur: "وہ سجدہ نہیں کرتے" }, explanation: { en: "Quran recited but no submission - arrogance", ur: "Quran سنایا جاتا ہے مگر سر نہیں جھکاتے - تکبر" }, verseRef: "84:21" },
        { term: "يُكَذِّبُونَ", meaning: { en: "They deny", ur: "وہ جھٹلاتے ہیں" }, explanation: { en: "Active denial, not mere ignorance", ur: "فعال انکار، محض لاعلمی نہیں" }, verseRef: "84:22" }
      ]
    },

    finalDestinies: {
      name: "Final Outcomes",
      nameUr: "حتمی انجام",
      nameArabic: "المصير النهائي",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "بَشِّرْهُم بِعَذَابٍ أَلِيمٍ", meaning: { en: "Give them 'tidings' of painful punishment", ur: "انہیں دردناک عذاب کی 'خوشخبری' سنا دو" }, explanation: { en: "Sarcastic بَشّر - usually positive word", ur: "طنزیہ بَشِّر - عام طور پر مثبت لفظ" }, verseRef: "84:24" },
        { term: "أَجْرٌ غَيْرُ مَمْنُونٍ", meaning: { en: "Reward without end", ur: "کبھی نہ ختم ہونے والا اجر" }, explanation: { en: "Believers: endless reward, no termination", ur: "مومنوں کے لیے: لامتناہی اجر، کوئی انقطاع نہیں" }, verseRef: "84:25" }
      ]
    }
  },

  relationships: [
    { from: "انشقت", to: "أذنت لربها", type: "consequence", description: { en: "Sky splits because it obeys", ur: "آسمان پھٹتا ہے کیونکہ وہ فرمانبردار ہے" } },
    { from: "كادح", to: "ملاقيه", type: "destination", description: { en: "Toiling leads to meeting", ur: "محنت ملاقات تک لے جاتی ہے" } },
    { from: "يمين", to: "وراء ظهر", type: "antithesis", description: { en: "Right hand vs behind back", ur: "دایاں ہاتھ بمقابلہ پیٹھ کے پیچھے" } },
    { from: "مسرورا (v9)", to: "مسرورا (v13)", type: "contrast", description: { en: "True joy vs false joy", ur: "سچی خوشی بمقابلہ جھوٹی خوشی" } },
    { from: "شفق/ليل/قمر", to: "طبقا عن طبق", type: "parallel", description: { en: "Natural cycles mirror life stages", ur: "قدرتی چکر زندگی کے مراحل کا عکس ہیں" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Events", verses: "84:1-5", description: { en: "Sky splits, earth flattens, both obey", ur: "آسمان پھٹے، زمین ہموار ہو، دونوں فرمانبردار" } },
      { stage: 2, theme: "Human Toiling", verses: "84:6", description: { en: "Life is struggle toward Allah", ur: "زندگی Allah کی طرف محنت ہے" } },
      { stage: 3, theme: "Two Outcomes", verses: "84:7-15", description: { en: "Right hand joy vs behind back doom", ur: "دائیں ہاتھ کی خوشی بمقابلہ پیٹھ پیچھے کی بربادی" } },
      { stage: 4, theme: "Nature's Oath", verses: "84:16-18", description: { en: "Twilight, night, moon witness", ur: "شفق، رات، چاند گواہ" } },
      { stage: 5, theme: "Life Stages", verses: "84:19", description: { en: "Moving through existence's levels", ur: "وجود کی سطحوں سے گزرنا" } },
      { stage: 6, theme: "Deniers & Believers", verses: "84:20-25", description: { en: "Denial punished, faith rewarded", ur: "انکار کی سزا، ایمان کا اجر" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Life is toil", how: "Accept struggle as part of journey to Allah", verse: "84:6" },
      { principle: "Meeting is certain", how: "Prepare for the inevitable encounter", verse: "84:6" },
      { principle: "Record matters", how: "Build a record worthy of the right hand", verse: "84:7-9" },
      { principle: "Heedless joy is dangerous", how: "Joy disconnected from akhirah leads to doom", verse: "84:13-14" },
      { principle: "Prostrate to Quran", how: "Humble yourself when truth is recited", verse: "84:21" }
    ]
  },

  uniqueInsight: {
    title: { en: "Two Kinds of Masrur (Joyful)", ur: "مسرور (خوش) کی دو قسمیں" },
    insight: { en: "The surah uses 'masrūran' (joyful) twice with opposite meanings. In verse 9, the believer 'returns to his family joyful' - true joy in Paradise reunion. In verse 13, the disbeliever 'was among his family joyful' - false joy from heedlessness. Same word, opposite outcomes. The difference? Verse 14 explains: 'He thought he'd never return.' The disbeliever's joy was based on denial of meeting Allah. The believer's joy is the fruit of preparation for that meeting. The surah asks: which masrūr are you building toward?", ur: "سورت 'مسرور' (خوش) دو بار مخالف معنوں میں استعمال کرتی ہے۔ آیت 9 میں مومن 'خوشی سے اپنے گھر والوں میں لوٹتا ہے' - جنت میں ملاقات کی سچی خوشی۔ آیت 13 میں کافر 'اپنے گھر والوں میں خوش تھا' - غفلت کی جھوٹی خوشی۔ ایک ہی لفظ، مخالف نتائج۔ فرق کیا ہے؟ آیت 14 بتاتی ہے: 'وہ سمجھتا تھا کبھی لوٹنا نہیں۔' کافر کی خوشی Allah سے ملاقات کے انکار پر مبنی تھی۔ مومن کی خوشی اس ملاقات کی تیاری کا پھل ہے۔ سورت پوچھتی ہے: تم کون سی خوشی بنا رہے ہو؟" }
  },

  sajdahVerse: {
    verse: 21,
    note: "Prostration verse (sajdah tilawah) - marked with ۩. Reciter and listener should prostrate."
  },

  linguisticFeatures: {
    features: [
      { feature: "Form VII انشقّت", example: { en: "Internal breaking", ur: "اندرونی شگاف" }, effect: { en: "Sky splits from within, not by external force", ur: "آسمان اندر سے پھٹتا ہے، بیرونی قوت سے نہیں" } },
      { feature: "Energetic nun", example: { en: "لَتَرْكَبُنَّ", ur: "لَتَرْكَبُنَّ (ضرور بالضرور)" }, effect: { en: "Emphatic certainty - you WILL move through stages", ur: "مؤکد یقین - تم ضرور مراحل سے گزرو گے" } },
      { feature: "Sarcastic بَشِّر", example: { en: "Give them 'good news' of punishment", ur: "انہیں عذاب کی 'خوشخبری' دو" }, effect: { en: "Ironic reversal of joyful term", ur: "خوشی کے لفظ کا طنزیہ الٹ استعمال" } }
    ]
  }
};

export default ONTOLOGY;
