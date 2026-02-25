/**
 * Surah Al-A'la (87) - Ontology of Quranic Concepts
 * The Most High
 * Theme: Glorification of Allah, divine guidance, success through purification
 */

export const ONTOLOGY = {
  surahId: 87,
  surahName: "Al-A'la",
  surahNameArabic: "الأعلى",
  revelationType: "Makki",
  totalAyahs: 19,

  categories: {
    glorification: {
      name: "Glorifying the Most High",
      nameArabic: "تسبيح الأعلى",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى", meaning: { en: "Glorify name of your Lord Most High", ur: "اپنے رب اعلیٰ کے نام کی تسبیح کرو" }, explanation: { en: "Opening command - tasbih connects to Allah's supreme transcendence", ur: "ابتدائی حکم - تسبیح اللہ کی اعلیٰ ترین بلندی سے جڑی ہے" }, verseRef: "87:1" },
        { term: "الْأَعْلَى", meaning: { en: "The Most High", ur: "سب سے بلند" }, explanation: { en: "Superlative: nothing above Allah in any sense - rank, power, knowledge", ur: "صیغہ افضل: کسی بھی لحاظ سے اللہ سے بالاتر کچھ نہیں - مرتبے، طاقت، علم میں" }, verseRef: "87:1" }
      ]
    },

    divineAttributes: {
      name: "Divine Acts",
      nameArabic: "أفعال الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "خَلَقَ فَسَوَّىٰ", meaning: { en: "Created then proportioned", ur: "پیدا کیا پھر درست کیا" }, explanation: { en: "Creation with perfection - not random, precisely designed", ur: "کمال کے ساتھ تخلیق - بے ترتیب نہیں، بالکل درست ڈیزائن" }, verseRef: "87:2" },
        { term: "قَدَّرَ فَهَدَىٰ", meaning: { en: "Destined then guided", ur: "اندازہ مقرر کیا پھر ہدایت دی" }, explanation: { en: "Determines purpose, then provides guidance to fulfill it", ur: "مقصد مقرر کرتا ہے، پھر اسے پورا کرنے کی ہدایت دیتا ہے" }, verseRef: "87:3" },
        { term: "أَخْرَجَ الْمَرْعَىٰ", meaning: { en: "Brought forth pasture", ur: "چراگاہ نکالی" }, explanation: { en: "Sustenance provision - from earth comes life", ur: "رزق کی فراہمی - زمین سے زندگی نکلتی ہے" }, verseRef: "87:4" },
        { term: "فَجَعَلَهُ غُثَاءً أَحْوَىٰ", meaning: { en: "Made it dry debris", ur: "پھر اسے سیاہ کوڑا کر دیا" }, explanation: { en: "Cycle of life: green → dead. Reminder of transience", ur: "زندگی کا چکر: سبز → مردہ۔ فانی ہونے کی یاد دہانی" }, verseRef: "87:5" }
      ]
    },

    divinePromise: {
      name: "Promise to the Prophet",
      nameArabic: "الوعد للنبي",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "سَنُقْرِئُكَ فَلَا تَنسَىٰ", meaning: { en: "We will make you recite, you won't forget", ur: "ہم آپ کو پڑھائیں گے، آپ نہیں بھولیں گے" }, explanation: { en: "Divine guarantee of Quran preservation in Prophet's heart", ur: "نبی ﷺ کے دل میں قرآن کی حفاظت کی الٰہی ضمانت" }, verseRef: "87:6" },
        { term: "وَنُيَسِّرُكَ لِلْيُسْرَىٰ", meaning: { en: "We will ease you toward ease", ur: "ہم آپ کو آسانی کی طرف آسان کریں گے" }, explanation: { en: "Allah's path is facilitated, not burden. Islam = ease", ur: "اللہ کا راستہ آسان بنایا گیا ہے، بوجھ نہیں۔ اسلام = آسانی" }, verseRef: "87:8" }
      ]
    },

    theReminder: {
      name: "The Reminder",
      nameArabic: "التذكرة",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ", meaning: { en: "Remind if reminder benefits", ur: "نصیحت کرو اگر نصیحت فائدہ دے" }, explanation: { en: "Prophet's duty is reminding - results are Allah's domain", ur: "نبی ﷺ کا فرض نصیحت ہے - نتائج اللہ کے اختیار میں ہیں" }, verseRef: "87:9" },
        { term: "سَيَذَّكَّرُ مَن يَخْشَىٰ", meaning: { en: "Who fears will remember", ur: "جو خشیت رکھتا ہے وہ نصیحت قبول کرے گا" }, explanation: { en: "Khashyah (reverential fear) opens heart to reminder", ur: "خشیت (خدا خوفی) دل کو نصیحت کے لیے کھول دیتی ہے" }, verseRef: "87:10" },
        { term: "وَيَتَجَنَّبُهَا الْأَشْقَى", meaning: { en: "Most wretched avoids it", ur: "سب سے بدبخت اس سے پرہیز کرتا ہے" }, explanation: { en: "Ultimate wretchedness: running from what saves you", ur: "انتہائی بدبختی: اس چیز سے بھاگنا جو بچاتی ہے" }, verseRef: "87:11" }
      ]
    },

    twoDestinies: {
      name: "Two Destinies",
      nameArabic: "المصيران",
      color: '#EF4444',
      icon: 'Compass',
      concepts: [
        { term: "النَّارَ الْكُبْرَىٰ", meaning: { en: "The greatest Fire", ur: "سب سے بڑی آگ" }, explanation: { en: "Maximum Fire for maximum rejection", ur: "انتہائی انکار کے لیے انتہائی آگ" }, verseRef: "87:12" },
        { term: "لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ", meaning: { en: "Neither dies nor lives", ur: "نہ مرے نہ جیے" }, explanation: { en: "State between death and life - no escape either way", ur: "موت اور زندگی کے درمیان کی حالت - کسی بھی طرف نجات نہیں" }, verseRef: "87:13" },
        { term: "قَدْ أَفْلَحَ مَن تَزَكَّىٰ", meaning: { en: "Succeeded who purifies", ur: "کامیاب ہوا جس نے پاکیزگی اختیار کی" }, explanation: { en: "Falah (success) through tazkiyah (purification)", ur: "فلاح (کامیابی) تزکیہ (پاکیزگی) کے ذریعے" }, verseRef: "87:14" }
      ]
    },

    purificationPath: {
      name: "Path of Success",
      nameArabic: "طريق الفلاح",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "تَزَكَّىٰ", meaning: { en: "Purifies himself", ur: "اپنے آپ کو پاک کرتا ہے" }, explanation: { en: "Tazkiyah = purifying soul from spiritual diseases", ur: "تزکیہ = روح کو روحانی بیماریوں سے پاک کرنا" }, verseRef: "87:14" },
        { term: "وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّىٰ", meaning: { en: "Remembers Lord's name, prays", ur: "اپنے رب کا نام یاد کرتا ہے اور نماز پڑھتا ہے" }, explanation: { en: "Dhikr leads to salah - remembrance manifests in action", ur: "ذکر نماز کی طرف لے جاتا ہے - یاد عمل میں ظاہر ہوتی ہے" }, verseRef: "87:15" }
      ]
    },

    worldlyVsEternal: {
      name: "Worldly vs Eternal",
      nameArabic: "الدنيا والآخرة",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا", meaning: { en: "You prefer worldly life", ur: "تم دنیا کی زندگی کو ترجیح دیتے ہو" }, explanation: { en: "Human tendency - choosing immediate over eternal", ur: "انسانی فطرت - ابدی کے بجائے فوری کا انتخاب" }, verseRef: "87:16" },
        { term: "وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ", meaning: { en: "Hereafter better, more lasting", ur: "آخرت بہتر ہے اور زیادہ باقی رہنے والی" }, explanation: { en: "Two advantages: superior quality AND eternal duration", ur: "دو فوائد: اعلیٰ معیار اور ابدی دوام" }, verseRef: "87:17" }
      ]
    },

    ancientScriptures: {
      name: "Earlier Scriptures",
      nameArabic: "الصحف الأولى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "الصُّحُفِ الْأُولَىٰ", meaning: { en: "Former scriptures", ur: "پہلے کے صحیفے" }, explanation: { en: "Quran's message echoes all divine revelation", ur: "قرآن کا پیغام تمام الٰہی وحی کی بازگشت ہے" }, verseRef: "87:18" },
        { term: "صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ", meaning: { en: "Scriptures of Ibrahim and Musa", ur: "ابراہیم اور موسیٰ علیہما السلام کے صحیفے" }, explanation: { en: "Connects to Abrahamic monotheistic tradition", ur: "ابراہیمی توحیدی روایت سے جوڑتا ہے" }, verseRef: "87:19" }
      ]
    }
  },

  relationships: [
    { from: "سبّح", to: "الأعلى", type: "object", description: { en: "Glorification directed to Most High", ur: "تسبیح اعلیٰ ذات کی طرف" } },
    { from: "خلق فسوى", to: "قدر فهدى", type: "sequence", description: { en: "Creation → Destiny → Guidance flow", ur: "تخلیق ← تقدیر ← ہدایت کا سلسلہ" } },
    { from: "الذكرى", to: "من يخشى", type: "reception", description: { en: "Reminder received by fearers", ur: "نصیحت خشیت رکھنے والوں کو ملتی ہے" } },
    { from: "تزكى", to: "أفلح", type: "causation", description: { en: "Purification causes success", ur: "پاکیزگی کامیابی کا سبب بنتی ہے" } },
    { from: "الدنيا", to: "الآخرة", type: "antithesis", description: { en: "Worldly vs eternal - wrong choice", ur: "دنیا بمقابلہ آخرت - غلط انتخاب" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: { en: "Glorification Command", ur: "تسبیح کا حکم" }, verses: "87:1", description: { en: "Glorify the Most High", ur: "اعلیٰ ذات کی تسبیح کرو" } },
      { stage: 2, theme: { en: "Divine Attributes", ur: "الٰہی صفات" }, verses: "87:2-5", description: { en: "Creator, Designer, Sustainer", ur: "خالق، مصور، رازق" } },
      { stage: 3, theme: { en: "Prophet's Mission", ur: "نبی ﷺ کا مشن" }, verses: "87:6-9", description: { en: "Quran preserved, ease granted, reminder commanded", ur: "قرآن محفوظ، آسانی عطا، نصیحت کا حکم" } },
      { stage: 4, theme: { en: "Two Responses", ur: "دو ردعمل" }, verses: "87:10-13", description: { en: "Fearers remember, wretched avoid, Fire awaits", ur: "خشیت والے یاد کرتے ہیں، بدبخت ٹالتے ہیں، آگ منتظر ہے" } },
      { stage: 5, theme: { en: "Path to Success", ur: "کامیابی کا راستہ" }, verses: "87:14-15", description: { en: "Purification + remembrance + prayer", ur: "تزکیہ + ذکر + نماز" } },
      { stage: 6, theme: { en: "Priority Check", ur: "ترجیحات کی جانچ" }, verses: "87:16-17", description: { en: "You prefer dunya, but akhirah is better", ur: "تم دنیا کو ترجیح دیتے ہو، لیکن آخرت بہتر ہے" } },
      { stage: 7, theme: { en: "Ancient Confirmation", ur: "قدیم تصدیق" }, verses: "87:18-19", description: { en: "Same message in Ibrahim and Musa's scriptures", ur: "ابراہیم اور موسیٰ کے صحیفوں میں وہی پیغام" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Begin with tasbih", ur: "تسبیح سے آغاز کرو" }, how: { en: "Start prayers, days, deeds with glorifying Allah's transcendence", ur: "نمازیں، دن، اعمال اللہ کی بزرگی کی تسبیح سے شروع کرو" }, verse: "87:1" },
      { principle: { en: "Trust Allah's design", ur: "اللہ کے منصوبے پر بھروسہ کرو" }, how: { en: "He created, proportioned, destined, and guided - trust the plan", ur: "اس نے پیدا کیا، درست کیا، تقدیر بنائی، اور ہدایت دی - منصوبے پر بھروسہ کرو" }, verse: "87:2-3" },
      { principle: { en: "Focus on reminding", ur: "نصیحت پر توجہ دو" }, how: { en: "Your job is to remind; results belong to Allah", ur: "تمہارا کام نصیحت کرنا ہے؛ نتائج اللہ کے اختیار میں ہیں" }, verse: "87:9" },
      { principle: { en: "Purify to succeed", ur: "کامیابی کے لیے پاکیزگی اختیار کرو" }, how: { en: "Tazkiyah (soul-cleansing) is prerequisite for falah (success)", ur: "تزکیہ (روح کی صفائی) فلاح (کامیابی) کی شرط ہے" }, verse: "87:14" },
      { principle: { en: "Prioritize akhirah", ur: "آخرت کو ترجیح دو" }, how: { en: "Consciously choose eternal over temporary in decisions", ur: "فیصلوں میں شعوری طور پر ابدی کو عارضی پر ترجیح دو" }, verse: "87:16-17" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Tasbih-Tazkiyah Connection", ur: "تسبیح اور تزکیہ کا رشتہ" },
    insight: { en: "Surah Al-A'la begins with 'Sabbih' (glorify) and its success condition is 'tazakkā' (purify). These are connected: glorification of Allah externally leads to purification internally. When you truly recognize Allah as 'Al-A'la' (Most High), your soul naturally purifies - pride diminishes, worldly attachments loosen. The surah's progression (glorify → remember → purify → succeed) is a spiritual algorithm. Prophet ﷺ loved this surah in Eid prayers because it encapsulates the entire spiritual journey in 19 verses.", ur: "سورۃ الاعلیٰ 'سَبِّحِ' (تسبیح کرو) سے شروع ہوتی ہے اور اس کی کامیابی کی شرط 'تَزَكّٰى' (پاکیزگی) ہے۔ یہ آپس میں جڑے ہیں: بیرونی طور پر اللہ کی تسبیح اندرونی پاکیزگی کی طرف لے جاتی ہے۔ جب آپ واقعی اللہ کو 'الاعلیٰ' (سب سے بلند) مانتے ہیں تو روح خود بخود پاک ہوتی ہے - تکبر کم ہوتا ہے، دنیاوی لگاؤ ڈھیلا ہوتا ہے۔ سورت کی ترتیب (تسبیح ← ذکر ← تزکیہ ← فلاح) ایک روحانی الگورتھم ہے۔ نبی ﷺ عید کی نمازوں میں اس سورت کو پسند فرماتے تھے کیونکہ یہ 19 آیات میں پورا روحانی سفر سمیٹتی ہے۔" }
  },

  sunnah: {
    note: { en: "Prophet ﷺ regularly recited Al-A'la in Witr prayer and Eid prayers (paired with Al-Ghashiyah). It's one of the most beloved surahs for night prayers.", ur: "نبی ﷺ باقاعدگی سے وتر اور عید کی نمازوں میں سورۃ الاعلیٰ پڑھتے تھے (الغاشیہ کے ساتھ)۔ یہ رات کی نمازوں کی سب سے محبوب سورتوں میں سے ایک ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: { en: "فَ sequence", ur: "فَ کی ترتیب" }, example: "خَلَقَ فَسَوَّىٰ، قَدَّرَ فَهَدَىٰ", effect: { en: "Immediate divine action - no gap between creation and perfection", ur: "فوری الٰہی عمل - تخلیق اور کمال کے درمیان کوئی وقفہ نہیں" } },
      { feature: { en: "Superlative form", ur: "صیغہ افضل" }, example: "الْأَعْلَى، الْأَشْقَى، الْكُبْرَىٰ", effect: { en: "Extremes emphasized: Highest Lord, most wretched, greatest Fire", ur: "انتہاؤں پر زور: بلند ترین رب، بدبخت ترین، سب سے بڑی آگ" } },
      { feature: { en: "Same root repetition", ur: "ایک ہی جذر کی تکرار" }, example: "يُسر → اليُسرى", effect: { en: "Allah eases toward ease - concept doubled", ur: "اللہ آسانی کی طرف آسان کرتا ہے - تصور دوگنا" } }
    ]
  }
};

export default ONTOLOGY;
