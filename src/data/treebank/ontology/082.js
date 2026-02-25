/**
 * Surah Al-Infitar (82) - Ontology of Quranic Concepts
 * The Cleaving
 * Theme: Cosmic collapse, man's ingratitude, deeds recorded, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 82,
  surahName: "Al-Infitar",
  surahNameArabic: "الانفطار",
  revelationType: "Makki",
  totalAyahs: 19,

  categories: {
    cosmicCollapse: {
      name: "Cosmic Collapse",
      nameUr: "کائناتی انہدام",
      nameArabic: "انهيار الكون",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءُ انفَطَرَتْ", meaning: { en: "Sky is cleft", ur: "آسمان پھٹ جائے گا" }, explanation: { en: "Form VII - sky splits from within", ur: "باب انفعال - آسمان اندر سے پھٹے گا" }, verseRef: "82:1" },
        { term: "الْكَوَاكِبُ انتَثَرَتْ", meaning: { en: "Stars scattered", ur: "ستارے بکھر جائیں گے" }, explanation: { en: "Like pearls from broken necklace", ur: "ٹوٹے ہار سے موتیوں کی طرح" }, verseRef: "82:2" },
        { term: "الْبِحَارُ فُجِّرَتْ", meaning: { en: "Seas burst forth", ur: "سمندر پھاڑ دیے جائیں گے" }, explanation: { en: "Barriers removed, all water merges", ur: "رکاوٹیں ہٹا دی جائیں گی، سارا پانی مل جائے گا" }, verseRef: "82:3" },
        { term: "الْقُبُورُ بُعْثِرَتْ", meaning: { en: "Graves overturned", ur: "قبریں الٹ دی جائیں گی" }, explanation: { en: "Dead emerge - resurrection begins", ur: "مردے نکلیں گے - قیامت شروع" }, verseRef: "82:4" }
      ]
    },

    soulKnowledge: {
      name: "Soul's Knowledge",
      nameUr: "روح کا علم",
      nameArabic: "علم النفس",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ", meaning: { en: "Soul knows what it sent forth and held back", ur: "ہر جان جان لے گی جو اس نے آگے بھیجا اور جو پیچھے چھوڑا" }, explanation: { en: "Complete awareness of all deeds - good sent ahead, opportunities missed", ur: "تمام اعمال کی مکمل آگاہی - نیکیاں آگے بھیجیں، مواقع گنوائے" }, verseRef: "82:5" }
      ]
    },

    humanIngratitude: {
      name: "Human Ingratitude",
      nameUr: "انسانی ناشکری",
      nameArabic: "جحود الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ", meaning: { en: "What deceived you about your Generous Lord?", ur: "کس چیز نے تجھے اپنے کریم رب سے دھوکے میں ڈالا؟" }, explanation: { en: "Allah's generosity should inspire gratitude, not heedlessness", ur: "Allah کی سخاوت شکر کی دعوت دے نہ غفلت کی" }, verseRef: "82:6" },
        { term: "خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ", meaning: { en: "Created, proportioned, balanced you", ur: "تجھے پیدا کیا، درست کیا، متوازن بنایا" }, explanation: { en: "Three stages of perfect design", ur: "کامل تصمیم کے تین مراحل" }, verseRef: "82:7" },
        { term: "فِي أَيِّ صُورَةٍ... رَكَّبَكَ", meaning: { en: "In whatever form He assembled you", ur: "جس شکل میں چاہا تجھے جوڑا" }, explanation: { en: "Allah chose your specific form from infinite options", ur: "Allah نے لامحدود اختیارات سے تمہاری مخصوص شکل چنی" }, verseRef: "82:8" }
      ]
    },

    denialOfRecompense: {
      name: "Denial of Recompense",
      nameUr: "جزا و سزا کا انکار",
      nameArabic: "تكذيب الدين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "تُكَذِّبُونَ بِالدِّينِ", meaning: { en: "You deny the Recompense", ur: "تم جزا و سزا کو جھٹلاتے ہو" }, explanation: { en: "Din here = Judgment Day, not religion", ur: "دین یہاں یومِ حساب ہے، مذہب نہیں" }, verseRef: "82:9" }
      ]
    },

    nobleScribes: {
      name: "The Recording Angels",
      nameUr: "کرام الکاتبین (لکھنے والے فرشتے)",
      nameArabic: "الكرام الكاتبين",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "عَلَيْكُمْ لَحَافِظِينَ", meaning: { en: "Over you are guardians", ur: "تم پر نگران مقرر ہیں" }, explanation: { en: "Angels constantly watching", ur: "فرشتے مسلسل نگرانی کرتے ہیں" }, verseRef: "82:10" },
        { term: "كِرَامًا كَاتِبِينَ", meaning: { en: "Noble, recording", ur: "عزت دار، لکھنے والے" }, explanation: { en: "Honorable scribes, not mere clerks", ur: "معزز کاتب، محض منشی نہیں" }, verseRef: "82:11" },
        { term: "يَعْلَمُونَ مَا تَفْعَلُونَ", meaning: { en: "They know what you do", ur: "تم جو کچھ کرتے ہو وہ جانتے ہیں" }, explanation: { en: "Nothing hidden from recording angels", ur: "کاتب فرشتوں سے کچھ چھپا نہیں" }, verseRef: "82:12" }
      ]
    },

    twoDestinies: {
      name: "Two Final Destinations",
      nameUr: "دو حتمی ٹھکانے",
      nameArabic: "المصيران",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "الْأَبْرَارَ لَفِي نَعِيمٍ", meaning: { en: "Righteous in bliss", ur: "نیک لوگ نعمتوں میں ہوں گے" }, explanation: { en: "Paradise for the pious", ur: "متقین کے لیے جنت" }, verseRef: "82:13" },
        { term: "الْفُجَّارَ لَفِي جَحِيمٍ", meaning: { en: "Wicked in Hellfire", ur: "بدکار جہنم میں ہوں گے" }, explanation: { en: "Permanent punishment", ur: "دائمی عذاب" }, verseRef: "82:14" },
        { term: "مَا هُمْ عَنْهَا بِغَائِبِينَ", meaning: { en: "Never absent from it", ur: "وہ اس سے کبھی جدا نہ ہوں گے" }, explanation: { en: "No escape, no vacation from Fire", ur: "کوئی فرار نہیں، آگ سے کوئی چھٹی نہیں" }, verseRef: "82:16" }
      ]
    },

    dayOfRecompense: {
      name: "Day of Recompense",
      nameUr: "یومِ جزا",
      nameArabic: "يوم الدين",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ", meaning: { en: "What can make you know what is Day of Recompense?", ur: "تمہیں کیا معلوم جزا کا دن کیا ہے؟" }, explanation: { en: "Beyond human comprehension", ur: "انسانی سمجھ سے بالاتر" }, verseRef: "82:17-18" },
        { term: "لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا", meaning: { en: "No soul helps another soul", ur: "کوئی جان دوسری جان کے کام نہ آئے گی" }, explanation: { en: "No intercession without permission", ur: "اجازت کے بغیر کوئی سفارش نہیں" }, verseRef: "82:19" },
        { term: "وَالْأَمْرُ يَوْمَئِذٍ لِّلَّهِ", meaning: { en: "Command that Day belongs to Allah", ur: "اس دن سارا اختیار Allah کا ہوگا" }, explanation: { en: "Absolute divine sovereignty", ur: "مطلق الہٰی حاکمیت" }, verseRef: "82:19" }
      ]
    }
  },

  relationships: [
    { from: "انفطرت/انتثرت/فجرت/بعثرت", to: "علمت نفس", type: "trigger", description: { en: "Cosmic collapse reveals soul's deeds", ur: "کائناتی انہدام سے روح کے اعمال کھل جائیں" } },
    { from: "الكريم", to: "غرك", type: "contrast", description: { en: "Generosity met with deception/ingratitude", ur: "سخاوت کا جواب دھوکے/ناشکری سے" } },
    { from: "خلق/سوى/عدل", to: "تكذبون", type: "irony", description: { en: "Perfect creation yet you deny Creator", ur: "کامل تخلیق پھر بھی خالق کا انکار" } },
    { from: "كرام كاتبين", to: "يعلمون", type: "function", description: { en: "Angels record everything", ur: "فرشتے ہر چیز ریکارڈ کرتے ہیں" } },
    { from: "أبرار", to: "فجار", type: "antithesis", description: { en: "Righteous vs wicked - opposite outcomes", ur: "نیک بمقابلہ بدکار - مخالف نتائج" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Collapse", verses: "82:1-4", description: { en: "Sky, stars, seas, graves - all transformed", ur: "آسمان، ستارے، سمندر، قبریں - سب بدل جائیں" } },
      { stage: 2, theme: "Soul's Awareness", verses: "82:5", description: { en: "Every soul knows its deeds", ur: "ہر جان اپنے اعمال جان لے" } },
      { stage: 3, theme: "Human Ingratitude", verses: "82:6-9", description: { en: "Why deceived about Generous Lord?", ur: "کریم رب سے کیوں دھوکے میں؟" } },
      { stage: 4, theme: "Recording Angels", verses: "82:10-12", description: { en: "Noble scribes know all", ur: "معزز کاتب سب جانتے ہیں" } },
      { stage: 5, theme: "Two Destinies", verses: "82:13-16", description: { en: "Bliss vs Hellfire", ur: "نعمتیں بمقابلہ جہنم" } },
      { stage: 6, theme: "Allah's Sovereignty", verses: "82:17-19", description: { en: "Day when all command is Allah's", ur: "وہ دن جب سارا حکم Allah کا ہوگا" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Remember your creation", how: "You were designed perfectly - show gratitude", verse: "82:7-8" },
      { principle: "Don't be deceived", how: "Allah's patience isn't permission to sin", verse: "82:6" },
      { principle: "You're being watched", how: "Noble angels record everything", verse: "82:10-12" },
      { principle: "Send ahead good deeds", how: "What you 'send forth' will greet you", verse: "82:5" },
      { principle: "No one can help that Day", how: "Prepare yourself - no intercession guaranteed", verse: "82:19" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Question That Shakes: مَا غَرَّكَ", ur: "ہلا دینے والا سوال: مَا غَرَّكَ" },
    insight: { en: "Verse 6 asks one of the Quran's most penetrating questions: 'What deceived you concerning your Generous Lord?' The word غَرَّ (gharr) means to be fooled, tricked, deluded. Allah mentions His كَرَم (generosity) specifically - the very quality that allows time for repentance becomes the excuse for ingratitude. It's as if Allah asks: 'I gave you time, health, provision, forgiveness - and you took this generosity as permission to forget Me?' The question remains unanswered because there IS no valid answer. Nothing justifies being deceived about Al-Karim.", ur: "آیت 6 Quran کے سب سے گہرے سوالات میں سے ایک پوچھتی ہے: 'کس چیز نے تجھے اپنے کریم رب سے دھوکے میں ڈالا؟' غَرَّ کا مطلب ہے بیوقوف بنایا جانا، فریب کھانا۔ Allah اپنے کرم (سخاوت) کا خاص ذکر کرتا ہے - وہی صفت جو توبہ کا وقت دیتی ہے وہی ناشکری کا بہانہ بن جاتی ہے۔ گویا Allah پوچھتا ہے: 'میں نے تجھے وقت، صحت، رزق، معافی دی - اور تو نے اس سخاوت کو مجھے بھولنے کی اجازت سمجھا؟' سوال بے جواب ہے کیونکہ کوئی درست جواب ہے ہی نہیں۔ الکریم کے بارے میں دھوکے میں رہنے کا کوئی جواز نہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "Form VII انفطرت", example: { en: "Internal splitting", ur: "اندرونی شگاف" }, effect: { en: "Sky breaks from within", ur: "آسمان اندر سے پھٹتا ہے" } },
      { feature: "Repeated مَا أَدْرَاكَ", example: { en: "Verses 17-18", ur: "آیات 17-18" }, effect: { en: "Doubled for emphasis - incomprehensible", ur: "تاکید کے لیے تکرار - ناقابلِ فہم" } },
      { feature: "كِرَامًا كَاتِبِينَ", example: { en: "Noble + recording", ur: "معزز + لکھنے والے" }, effect: { en: "Angels are honorable, not mere recorders", ur: "فرشتے معزز ہیں، محض ریکارڈ رکھنے والے نہیں" } }
    ]
  },

  comparisonWithSimilar: {
    note: { en: "Compare with Surah 81 (At-Takwir) which also describes cosmic collapse. Al-Infitar focuses more on human accountability and recording angels.", ur: "سورت 81 (التکویر) سے موازنہ کریں جو بھی کائناتی انہدام بیان کرتی ہے۔ الانفطار زیادہ انسانی جوابدہی اور کاتب فرشتوں پر مرکوز ہے۔" }
  }
};

export default ONTOLOGY;
