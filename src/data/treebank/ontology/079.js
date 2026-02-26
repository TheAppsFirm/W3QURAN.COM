/**
 * Surah An-Nazi'at (79) - Ontology of Quranic Concepts
 * Those Who Pull Out
 * Theme: Angels, resurrection, Pharaoh's story, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 79,
  surahName: "An-Nazi'at",
  surahNameArabic: "النازعات",
  revelationType: "Makki",
  totalAyahs: 46,

  categories: {
    angelicOaths: {
      name: "Oaths by Angels",
      nameUr: "فرشتوں کی قسمیں",
      nameArabic: "القسم بالملائكة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "النَّازِعَاتِ غَرْقًا", meaning: { en: "Those who extract violently", ur: "زور سے کھینچنے والیوں کی قسم" }, explanation: { en: "Angels pulling disbelievers' souls forcefully", ur: "فرشتے جو کافروں کی روحیں زبردستی نکالتے ہیں" }, verseRef: "79:1" },
        { term: "النَّاشِطَاتِ نَشْطًا", meaning: { en: "Those who release gently", ur: "آہستگی سے نکالنے والیوں کی" }, explanation: { en: "Angels taking believers' souls easily", ur: "فرشتے جو مومنوں کی روحیں آسانی سے نکالتے ہیں" }, verseRef: "79:2" },
        { term: "السَّابِحَاتِ سَبْحًا", meaning: { en: "Those who glide", ur: "تیرنے والیوں کی" }, explanation: { en: "Angels swimming through heavens", ur: "فرشتے جو آسمانوں میں تیرتے ہیں" }, verseRef: "79:3" },
        { term: "السَّابِقَاتِ سَبْقًا", meaning: { en: "Those who race", ur: "آگے بڑھنے والیوں کی" }, explanation: { en: "Angels racing to execute commands", ur: "فرشتے جو احکام پورے کرنے میں دوڑتے ہیں" }, verseRef: "79:4" },
        { term: "الْمُدَبِّرَاتِ أَمْرًا", meaning: { en: "Those who arrange affairs", ur: "کام کا انتظام کرنے والیوں کی" }, explanation: { en: "Angels managing cosmic operations", ur: "فرشتے جو کائناتی معاملات چلاتے ہیں" }, verseRef: "79:5" }
      ]
    },

    twoBlasts: {
      name: "The Two Trumpet Blasts",
      nameUr: "صور کی دو پھونکیں",
      nameArabic: "النفختان",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "الرَّاجِفَةُ", meaning: { en: "The quaking one", ur: "زلزلے والی پہلی پھونک" }, explanation: { en: "First blast - earth shakes, all die", ur: "پہلی پھونک - زمین کانپے گی، سب مر جائیں گے" }, verseRef: "79:6" },
        { term: "الرَّادِفَةُ", meaning: { en: "The subsequent one", ur: "اس کے بعد آنے والی (دوسری پھونک)" }, explanation: { en: "Second blast - resurrection follows", ur: "دوسری پھونک - دوبارہ زندہ ہوں گے" }, verseRef: "79:7" },
        { term: "قُلُوبٌ... وَاجِفَةٌ", meaning: { en: "Hearts trembling", ur: "دل کانپتے ہوں گے" }, explanation: { en: "Terror fills hearts on that Day", ur: "اس دن دلوں میں خوف بھرا ہوگا" }, verseRef: "79:8" },
        { term: "أَبْصَارُهَا خَاشِعَةٌ", meaning: { en: "Eyes humbled", ur: "نگاہیں جھکی ہوں گی" }, explanation: { en: "Lowered in fear and shame", ur: "خوف اور شرم سے نیچی" }, verseRef: "79:9" }
      ]
    },

    deniersMockery: {
      name: "Deniers' Mockery",
      nameUr: "منکرین کا مذاق",
      nameArabic: "سخرية المنكرين",
      color: '#EC4899',
      icon: 'MessageCircle',
      concepts: [
        { term: "لَمَرْدُودُونَ فِي الْحَافِرَةِ", meaning: { en: "Returned to former state", ur: "کیا ہم واقعی پہلی حالت میں لوٹائے جائیں گے؟" }, explanation: { en: "Deniers question resurrection", ur: "منکرین قیامت پر سوال اٹھاتے ہیں" }, verseRef: "79:10" },
        { term: "عِظَامًا نَّخِرَةً", meaning: { en: "Decayed bones", ur: "بوسیدہ ہڈیاں" }, explanation: { en: "How can crumbled bones return?", ur: "ٹوٹی ہوئی ہڈیاں کیسے واپس آ سکتی ہیں؟" }, verseRef: "79:11" },
        { term: "كَرَّةٌ خَاسِرَةٌ", meaning: { en: "Losing return", ur: "تو یہ گھاٹے کی واپسی ہوگی" }, explanation: { en: "Sarcastic dismissal of resurrection", ur: "قیامت کا طنزیہ مذاق" }, verseRef: "79:12" }
      ]
    },

    resurrectionEase: {
      name: "Resurrection's Ease",
      nameUr: "قیامت کی آسانی",
      nameArabic: "سهولة البعث",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "زَجْرَةٌ وَاحِدَةٌ", meaning: { en: "Single shout", ur: "بس ایک ہی ڈانٹ" }, explanation: { en: "Just one blast resurrects all - easy for Allah", ur: "صرف ایک پھونک سے سب جی اٹھیں گے - Allah کے لیے آسان" }, verseRef: "79:13" },
        { term: "بِالسَّاهِرَةِ", meaning: { en: "On earth's surface", ur: "زمین کی سطح پر" }, explanation: { en: "Suddenly standing on open ground", ur: "اچانک کھلے میدان میں کھڑے ہوں گے" }, verseRef: "79:14" }
      ]
    },

    musaPharaoh: {
      name: "Musa and Pharaoh",
      nameUr: "موسیٰ اور فرعون",
      nameArabic: "موسى وفرعون",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "بِالْوَادِ الْمُقَدَّسِ طُوًى", meaning: { en: "Sacred valley of Tuwa", ur: "مقدس وادی طویٰ" }, explanation: { en: "Where Allah called Musa", ur: "جہاں Allah نے موسیٰ علیہ السلام کو پکارا" }, verseRef: "79:16" },
        { term: "اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ", meaning: { en: "Go to Pharaoh, he transgressed", ur: "فرعون کے پاس جاؤ، وہ سرکش ہو گیا ہے" }, explanation: { en: "Mission to the tyrant", ur: "ظالم کے پاس جانے کا حکم" }, verseRef: "79:17" },
        { term: "هَل لَّكَ... تَزَكَّىٰ", meaning: { en: "Would you purify yourself?", ur: "کیا تو پاک ہونا چاہتا ہے؟" }, explanation: { en: "Gentle invitation to guidance", ur: "ہدایت کی نرم دعوت" }, verseRef: "79:18" },
        { term: "الْآيَةَ الْكُبْرَىٰ", meaning: { en: "The greatest Sign", ur: "سب سے بڑی نشانی" }, explanation: { en: "Staff/hand - miraculous proofs", ur: "عصا/ہاتھ - معجزاتی ثبوت" }, verseRef: "79:20" },
        { term: "أَنَا رَبُّكُمُ الْأَعْلَىٰ", meaning: { en: "I am your supreme lord", ur: "میں تمہارا سب سے بڑا رب ہوں" }, explanation: { en: "Pharaoh's ultimate blasphemy", ur: "فرعون کا انتہائی کفر" }, verseRef: "79:24" },
        { term: "نَكَالَ الْآخِرَةِ وَالْأُولَىٰ", meaning: { en: "Punishment of both worlds", ur: "آخرت اور دنیا دونوں کی سزا" }, explanation: { en: "Drowning + hellfire", ur: "غرق ہونا + جہنم کی آگ" }, verseRef: "79:25" }
      ]
    },

    creationSigns: {
      name: "Signs in Creation",
      nameUr: "تخلیق میں نشانیاں",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ", meaning: { en: "Are you harder to create or the sky?", ur: "تمہیں بنانا مشکل ہے یا آسمان کو؟" }, explanation: { en: "Sky's creation proves resurrection's ease", ur: "آسمان کی تخلیق ثابت کرتی ہے کہ دوبارہ پیدا کرنا آسان ہے" }, verseRef: "79:27" },
        { term: "رَفَعَ سَمْكَهَا فَسَوَّاهَا", meaning: { en: "Raised its ceiling, proportioned it", ur: "اس کی چھت بلند کی اور اسے درست کیا" }, explanation: { en: "Sky's construction", ur: "آسمان کی تعمیر" }, verseRef: "79:28" },
        { term: "أَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا", meaning: { en: "Darkened night, brought forth day", ur: "رات کو اندھیرا کیا اور دن کی روشنی نکالی" }, explanation: { en: "Night/day cycle", ur: "رات اور دن کا چکر" }, verseRef: "79:29" },
        { term: "الْأَرْضَ... دَحَاهَا", meaning: { en: "Earth He spread", ur: "زمین کو بچھایا" }, explanation: { en: "Earth spread (egg-like shape)", ur: "زمین پھیلائی (انڈے جیسی شکل)" }, verseRef: "79:30" },
        { term: "الْجِبَالَ أَرْسَاهَا", meaning: { en: "Mountains He anchored", ur: "پہاڑوں کو مضبوطی سے جمایا" }, explanation: { en: "Mountains as stabilizers", ur: "پہاڑ مستحکم کرنے والے" }, verseRef: "79:32" }
      ]
    },

    overwhelmingDay: {
      name: "The Overwhelming Day",
      nameUr: "سب سے بڑی آفت",
      nameArabic: "الطامة الكبرى",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "الطَّامَّةُ الْكُبْرَىٰ", meaning: { en: "The great Overwhelming", ur: "سب سے بڑی آفت (قیامت)" }, explanation: { en: "Judgment Day overwhelming all", ur: "یومِ حساب جو سب پر چھا جائے" }, verseRef: "79:34" },
        { term: "يَتَذَكَّرُ الْإِنسَانُ مَا سَعَىٰ", meaning: { en: "Man remembers his striving", ur: "انسان اپنی کوششیں یاد کرے گا" }, explanation: { en: "All efforts recalled", ur: "تمام اعمال یاد آ جائیں گے" }, verseRef: "79:35" },
        { term: "بُرِّزَتِ الْجَحِيمُ", meaning: { en: "Hell is displayed", ur: "جہنم نمایاں کر دی جائے گی" }, explanation: { en: "Hell made visible to all", ur: "جہنم سب کو دکھائی جائے گی" }, verseRef: "79:36" }
      ]
    },

    twoDestinies: {
      name: "Two Destinies",
      nameUr: "دو انجام",
      nameArabic: "المصيران",
      color: '#10B981',
      icon: 'Scale',
      concepts: [
        { term: "مَن طَغَىٰ وَآثَرَ الْحَيَاةَ الدُّنْيَا", meaning: { en: "Who transgressed and preferred dunya", ur: "جو سرکشی کرے اور دنیا کی زندگی کو ترجیح دے" }, explanation: { en: "Transgressor's choice", ur: "سرکش کا انتخاب" }, verseRef: "79:37-38" },
        { term: "الْجَحِيمَ هِيَ الْمَأْوَىٰ", meaning: { en: "Hell is the refuge", ur: "جہنم ہی اس کا ٹھکانا ہوگا" }, explanation: { en: "Transgressor's destination", ur: "سرکش کی منزل" }, verseRef: "79:39" },
        { term: "خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ", meaning: { en: "Feared standing before Lord, forbade soul from desires", ur: "جو اپنے رب کے سامنے کھڑے ہونے سے ڈرا اور نفس کو خواہشات سے روکا" }, explanation: { en: "Key to salvation - controlling nafs", ur: "نجات کی کنجی - نفس پر قابو" }, verseRef: "79:40" },
        { term: "الْجَنَّةَ هِيَ الْمَأْوَىٰ", meaning: { en: "Paradise is the refuge", ur: "جنت ہی اس کا ٹھکانا ہوگا" }, explanation: { en: "Believer's destination", ur: "مومن کی منزل" }, verseRef: "79:41" }
      ]
    },

    hourKnowledge: {
      name: "Knowledge of the Hour",
      nameUr: "قیامت کا علم",
      nameArabic: "علم الساعة",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "يَسْأَلُونَكَ عَنِ السَّاعَةِ", meaning: { en: "They ask about the Hour", ur: "وہ آپ سے قیامت کے بارے میں پوچھتے ہیں" }, explanation: { en: "People questioning timing", ur: "لوگ وقت کے بارے میں سوال کرتے ہیں" }, verseRef: "79:42" },
        { term: "إِلَىٰ رَبِّكَ مُنتَهَاهَا", meaning: { en: "To your Lord is its knowledge", ur: "اس کا علم تمہارے رب ہی کے پاس ہے" }, explanation: { en: "Only Allah knows timing", ur: "صرف Allah وقت جانتا ہے" }, verseRef: "79:44" },
        { term: "مُنذِرُ مَن يَخْشَاهَا", meaning: { en: "Warner to who fears it", ur: "آپ تو بس اس سے ڈرنے والوں کو خبردار کرنے والے ہیں" }, explanation: { en: "Prophet's role is warning", ur: "نبی کا کردار تنبیہ کرنا ہے" }, verseRef: "79:45" },
        { term: "لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً أَوْ ضُحَاهَا", meaning: { en: "Stayed only an evening or morning", ur: "گویا ایک شام یا اس کی صبح ہی ٹھہرے ہوں" }, explanation: { en: "Life feels incredibly short", ur: "زندگی بہت مختصر محسوس ہوگی" }, verseRef: "79:46" }
      ]
    }
  },

  relationships: [
    { from: "النازعات/الناشطات", to: "الراجفة/الرادفة", type: "function", description: { en: "Angels extract souls, then blasts resurrect", ur: "فرشتے روحیں نکالتے ہیں، پھر صور سے دوبارہ زندہ ہوں گے" } },
    { from: "فرعون طغى", to: "من طغى", type: "parallel", description: { en: "Pharaoh's transgression mirrors all transgressors", ur: "فرعون کی سرکشی ہر سرکش کا عکس ہے" } },
    { from: "السماء بناها", to: "أشد خلقا", type: "proof", description: { en: "Sky's creation proves resurrection's ease", ur: "آسمان کی تخلیق قیامت کی آسانی ثابت کرتی ہے" } },
    { from: "نهى النفس عن الهوى", to: "الجنة هي المأوى", type: "causation", description: { en: "Controlling desires leads to Paradise", ur: "خواہشات پر قابو جنت تک لے جاتا ہے" } },
    { from: "الساعة", to: "عشية أو ضحاها", type: "perspective", description: { en: "Life seems like hours when Hour comes", ur: "قیامت آنے پر زندگی گھنٹوں جیسی لگے گی" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Angelic Oaths", verses: "79:1-5", description: { en: "Five types of angels sworn by", ur: "پانچ قسم کے فرشتوں کی قسم" } },
      { stage: 2, theme: "Two Blasts", verses: "79:6-14", description: { en: "Quaking and resurrection", ur: "زلزلہ اور دوبارہ جی اٹھنا" } },
      { stage: 3, theme: "Musa & Pharaoh", verses: "79:15-26", description: { en: "Warning through history", ur: "تاریخ کے ذریعے تنبیہ" } },
      { stage: 4, theme: "Creation Signs", verses: "79:27-33", description: { en: "Sky, earth, mountains as proof", ur: "آسمان، زمین، پہاڑ بطور ثبوت" } },
      { stage: 5, theme: "Two Destinies", verses: "79:34-41", description: { en: "Transgressors vs those who fear", ur: "سرکش بمقابلہ خدا ترس" } },
      { stage: 6, theme: "Hour's Mystery", verses: "79:42-46", description: { en: "Only Allah knows; life feels short", ur: "صرف Allah جانتا ہے؛ زندگی مختصر لگے گی" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Accept gentle warnings", how: "Don't be like Pharaoh who rejected gentle invitation", verse: "79:18-19" },
      { principle: "Control your nafs", how: "Forbid soul from hawā (desires) - key to Paradise", verse: "79:40" },
      { principle: "Fear standing before Allah", how: "Imagine the maqām (standing) and let it guide behavior", verse: "79:40" },
      { principle: "Don't prefer dunya", how: "Those who chose worldly life over akhirah lost both", verse: "79:38" },
      { principle: "Life is short", how: "Will feel like evening/morning - don't waste it", verse: "79:46" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Key Formula: Khawf + Nahy al-Nafs", ur: "کامیابی کا فارمولا: خوفِ خدا + نفس کی مخالفت" },
    insight: { en: "Verse 40 provides the surah's central formula for salvation: 'feared standing before his Lord AND forbade the soul from desires.' Both elements are essential - fear (khawf) without action is incomplete; restraining desires (nahy al-nafs ʿan al-hawā) is the action. This contrasts with verse 38's transgressors who 'preferred worldly life' - they followed hawā instead of forbidding it. The surah presents Pharaoh as the ultimate example: given gentle invitation to purify (tazakkā - v18), shown the greatest sign (v20), yet he chose transgression (ṭughyān) and preferred his desires. The same choice faces everyone.", ur: "آیت 40 نجات کا مرکزی فارمولا دیتی ہے: 'اپنے رب کے سامنے کھڑے ہونے سے ڈرا اور نفس کو خواہشات سے روکا۔' دونوں عناصر ضروری ہیں - عمل کے بغیر خوف نامکمل ہے؛ خواہشات پر قابو ہی اصل عمل ہے۔ یہ آیت 38 کے سرکشوں کے برعکس ہے جنہوں نے 'دنیا کی زندگی کو ترجیح دی' - انہوں نے خواہشات کی پیروی کی بجائے روکنے کے۔ فرعون اعلیٰ مثال ہے: نرم دعوت دی گئی (تزکیہ - آیت 18)، سب سے بڑی نشانی دکھائی (آیت 20)، پھر بھی سرکشی اختیار کی۔ یہی انتخاب ہر کسی کے سامنے ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "Five feminine plurals فَاعِلات", example: { en: "النازعات، الناشطات، السابحات، السابقات، المدبرات", ur: "نازعات، ناشطات، سابحات، سابقات، مدبرات" }, effect: { en: "Powerful rhythmic opening", ur: "مؤثر لے دار آغاز" } },
      { feature: "Rare أَغْطَشَ", example: { en: "Darkened", ur: "اندھیرا کیا" }, effect: { en: "Unusual word for making night dark", ur: "رات کو تاریک کرنے کا نایاب لفظ" } },
      { feature: "دَحَاهَا", example: { en: "Spread it", ur: "بچھایا" }, effect: { en: "Egg-like spreading of earth", ur: "زمین کو انڈے کی شکل میں پھیلانا" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "79:30", topic: "Earth's shape", note: "دَحَاهَا - dahw is spreading in egg/oval shape" },
      { verse: "79:32", topic: "Mountains", note: "أَرْسَاهَا - anchoring like pegs stabilizing earth" }
    ]
  }
};

export default ONTOLOGY;
