/**
 * Surah An-Naba' (78) - Ontology of Quranic Concepts
 * The News
 * Theme: The Great News (resurrection), creation signs, Hell and Paradise descriptions
 */

export const ONTOLOGY = {
  surahId: 78,
  surahName: "An-Naba'",
  surahNameArabic: "النبأ",
  revelationType: "Makki",
  totalAyahs: 40,

  categories: {
    greatNews: {
      name: "The Great News",
      nameUr: "بڑی خبر",
      nameArabic: "النبأ العظيم",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "عَمَّ يَتَسَاءَلُونَ", meaning: { en: "About what do they question?", ur: "یہ لوگ کس چیز کے بارے میں پوچھ رہے ہیں؟" }, explanation: { en: "Rhetorical opening about resurrection debates", ur: "قیامت کی بحث کے بارے میں بلاغی سوال" }, verseRef: "78:1" },
        { term: "النَّبَإِ الْعَظِيمِ", meaning: { en: "The great news", ur: "بڑی خبر (قیامت)" }, explanation: { en: "Resurrection - the news they disputed", ur: "قیامت - وہ خبر جس میں اختلاف تھا" }, verseRef: "78:2" },
        { term: "مُخْتَلِفُونَ", meaning: { en: "They differ", ur: "وہ اختلاف کرتے ہیں" }, explanation: { en: "People divided on resurrection's reality", ur: "لوگ قیامت کی حقیقت پر منقسم ہیں" }, verseRef: "78:3" },
        { term: "كَلَّا سَيَعْلَمُونَ", meaning: { en: "No! They will come to know", ur: "ہرگز نہیں! وہ عنقریب جان لیں گے" }, explanation: { en: "Double repetition for stern warning", ur: "سخت تنبیہ کے لیے دوہری تکرار" }, verseRef: "78:4-5" }
      ]
    },

    creationSigns: {
      name: "Signs of Divine Creation",
      nameUr: "الہٰی تخلیق کی نشانیاں",
      nameArabic: "آيات الخلق الإلهي",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "الْأَرْضَ مِهَادًا", meaning: { en: "Earth as a resting place", ur: "زمین کو بچھونا بنایا" }, explanation: { en: "Earth spread as bed/cradle", ur: "زمین بستر یا گہوارے کی طرح بچھائی" }, verseRef: "78:6" },
        { term: "الْجِبَالَ أَوْتَادًا", meaning: { en: "Mountains as stakes", ur: "پہاڑوں کو کھونٹے بنایا" }, explanation: { en: "Mountains stabilize earth like tent pegs", ur: "پہاڑ زمین کو خیمے کی کھونٹیوں کی طرح مستحکم کرتے ہیں" }, verseRef: "78:7" },
        { term: "أَزْوَاجًا", meaning: { en: "In pairs", ur: "جوڑے جوڑے" }, explanation: { en: "All creation in male/female pairs", ur: "تمام مخلوقات نر و مادہ جوڑوں میں" }, verseRef: "78:8" },
        { term: "نَوْمَكُمْ سُبَاتًا", meaning: { en: "Sleep as rest", ur: "نیند کو آرام بنایا" }, explanation: { en: "Sleep resembles death - daily reminder", ur: "نیند موت سے مشابہ ہے - روزانہ کی یاددہانی" }, verseRef: "78:9" },
        { term: "اللَّيْلَ لِبَاسًا", meaning: { en: "Night as covering", ur: "رات کو پردہ بنایا" }, explanation: { en: "Darkness clothes the world", ur: "اندھیرا دنیا کو ڈھانپ لیتا ہے" }, verseRef: "78:10" },
        { term: "النَّهَارَ مَعَاشًا", meaning: { en: "Day for livelihood", ur: "دن کو معاش کا ذریعہ بنایا" }, explanation: { en: "Day enables work and earning", ur: "دن کام اور کمائی کا موقع دیتا ہے" }, verseRef: "78:11" },
        { term: "سَبْعًا شِدَادًا", meaning: { en: "Seven strong (heavens)", ur: "سات مضبوط (آسمان) بنائے" }, explanation: { en: "Seven firm heavens built above", ur: "سات مستحکم آسمان اوپر تعمیر کیے" }, verseRef: "78:12" },
        { term: "سِرَاجًا وَهَّاجًا", meaning: { en: "Blazing lamp", ur: "روشن چمکتا چراغ (سورج)" }, explanation: { en: "Sun as burning, radiant lamp", ur: "سورج جلتا ہوا اور تابناک چراغ" }, verseRef: "78:13" }
      ]
    },

    rainProvision: {
      name: "Rain and Provision",
      nameUr: "بارش اور رزق",
      nameArabic: "المطر والرزق",
      color: '#22C55E',
      icon: 'Sun',
      concepts: [
        { term: "الْمُعْصِرَاتِ", meaning: { en: "Rain-laden clouds", ur: "بارش والے بادل" }, explanation: { en: "Clouds ready to squeeze out water", ur: "بادل جو پانی نچوڑنے کو تیار ہیں" }, verseRef: "78:14" },
        { term: "مَاءً ثَجَّاجًا", meaning: { en: "Water pouring abundantly", ur: "موسلادھار پانی" }, explanation: { en: "Heavy, continuous rainfall", ur: "شدید اور مسلسل بارش" }, verseRef: "78:14" },
        { term: "حَبًّا وَنَبَاتًا", meaning: { en: "Grain and vegetation", ur: "اناج اور سبزیاں" }, explanation: { en: "Rain produces food crops", ur: "بارش سے غذائی فصلیں پیدا ہوتی ہیں" }, verseRef: "78:15" },
        { term: "جَنَّاتٍ أَلْفَافًا", meaning: { en: "Gardens dense", ur: "گھنے باغات" }, explanation: { en: "Lush, intertwined gardens", ur: "سرسبز اور آپس میں ملے ہوئے باغات" }, verseRef: "78:16" }
      ]
    },

    dayOfSeparation: {
      name: "Day of Separation",
      nameUr: "فیصلے کا دن",
      nameArabic: "يوم الفصل",
      color: '#8B5CF6',
      icon: 'Scale',
      concepts: [
        { term: "يَوْمَ الْفَصْلِ... مِيقَاتًا", meaning: { en: "Day of Judgment is appointed", ur: "فیصلے کے دن کا وقت مقرر ہے" }, explanation: { en: "Fixed, unavoidable time", ur: "طے شدہ اور ناگزیر وقت" }, verseRef: "78:17" },
        { term: "يُنفَخُ فِي الصُّورِ", meaning: { en: "Trumpet is blown", ur: "صور پھونکا جائے گا" }, explanation: { en: "Signal for resurrection", ur: "قیامت کا اشارہ" }, verseRef: "78:18" },
        { term: "فَتَأْتُونَ أَفْوَاجًا", meaning: { en: "Coming in crowds", ur: "گروہ در گروہ آؤ گے" }, explanation: { en: "All humanity arrives in groups", ur: "پوری انسانیت جماعتوں میں آئے گی" }, verseRef: "78:18" },
        { term: "فُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا", meaning: { en: "Sky opened as gates", ur: "آسمان کھول دیا جائے گا اور دروازے ہو جائیں گے" }, explanation: { en: "Heaven splits into doorways", ur: "آسمان دروازوں میں بٹ جائے گا" }, verseRef: "78:19" },
        { term: "سُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا", meaning: { en: "Mountains become mirage", ur: "پہاڑ چلائے جائیں گے اور سراب ہو جائیں گے" }, explanation: { en: "Solid mountains dissolve like illusion", ur: "ٹھوس پہاڑ دھوکے کی طرح غائب ہو جائیں گے" }, verseRef: "78:20" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameUr: "جہنم کا بیان",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "جَهَنَّمَ... مِرْصَادًا", meaning: { en: "Hell as ambush", ur: "جہنم گھات لگائے ہوئے ہے" }, explanation: { en: "Hell lies in wait for transgressors", ur: "جہنم سرکشوں کے انتظار میں ہے" }, verseRef: "78:21" },
        { term: "لِّلطَّاغِينَ مَآبًا", meaning: { en: "For transgressors a refuge", ur: "سرکشوں کا ٹھکانا" }, explanation: { en: "Their final destination/return", ur: "ان کی آخری منزل" }, verseRef: "78:22" },
        { term: "لَّابِثِينَ فِيهَا أَحْقَابًا", meaning: { en: "Remaining therein for ages", ur: "مدتوں تک اس میں رہیں گے" }, explanation: { en: "Unending periods of punishment", ur: "عذاب کے نہ ختم ہونے والے ادوار" }, verseRef: "78:23" },
        { term: "لَّا... بَرْدًا وَلَا شَرَابًا", meaning: { en: "No coolness, no drink", ur: "نہ ٹھنڈک نہ پینے کو" }, explanation: { en: "No relief from heat or thirst", ur: "گرمی اور پیاس سے کوئی سکون نہیں" }, verseRef: "78:24" },
        { term: "حَمِيمًا وَغَسَّاقًا", meaning: { en: "Scalding water and purulence", ur: "کھولتا پانی اور پیپ" }, explanation: { en: "Only boiling water and pus to drink", ur: "صرف کھولتا پانی اور پیپ پینے کو" }, verseRef: "78:25" },
        { term: "جَزَاءً وِفَاقًا", meaning: { en: "Fitting recompense", ur: "بالکل مناسب بدلہ" }, explanation: { en: "Punishment matches their crimes", ur: "سزا ان کے جرائم کے مطابق ہے" }, verseRef: "78:26" }
      ]
    },

    reasonsForPunishment: {
      name: "Reasons for Punishment",
      nameUr: "عذاب کی وجوہات",
      nameArabic: "أسباب العذاب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَا يَرْجُونَ حِسَابًا", meaning: { en: "Not expecting accountability", ur: "حساب کتاب کی توقع نہیں رکھتے تھے" }, explanation: { en: "Denied any reckoning would come", ur: "کسی بھی جوابدہی سے انکار کیا" }, verseRef: "78:27" },
        { term: "كَذَّبُوا بِآيَاتِنَا كِذَّابًا", meaning: { en: "Denied Our signs completely", ur: "ہماری نشانیوں کو بالکل جھٹلایا" }, explanation: { en: "Persistent, emphatic rejection", ur: "مسلسل اور پرزور انکار" }, verseRef: "78:28" },
        { term: "كُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا", meaning: { en: "Everything enumerated in writing", ur: "ہم نے ہر چیز کو لکھ کر شمار کر رکھا ہے" }, explanation: { en: "All deeds precisely recorded", ur: "تمام اعمال درست طور پر درج ہیں" }, verseRef: "78:29" },
        { term: "فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا", meaning: { en: "Only increase in punishment", ur: "ہم تمہارا عذاب ہی بڑھائیں گے" }, explanation: { en: "No relief, only intensification", ur: "کوئی سکون نہیں، صرف شدت میں اضافہ" }, verseRef: "78:30" }
      ]
    },

    paradiseDescription: {
      name: "Description of Paradise",
      nameUr: "جنت کا بیان",
      nameArabic: "وصف الجنة",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "لِلْمُتَّقِينَ مَفَازًا", meaning: { en: "For righteous - success", ur: "متقین کے لیے کامیابی ہے" }, explanation: { en: "Ultimate triumph for God-conscious", ur: "خدا ترس لوگوں کی حتمی کامیابی" }, verseRef: "78:31" },
        { term: "حَدَائِقَ وَأَعْنَابًا", meaning: { en: "Gardens and grapevines", ur: "باغات اور انگور" }, explanation: { en: "Orchards of fruit", ur: "پھلوں کے باغات" }, verseRef: "78:32" },
        { term: "كَوَاعِبَ أَتْرَابًا", meaning: { en: "Companions of equal age", ur: "ہم عمر ساتھی" }, explanation: { en: "Perfect, matching companions", ur: "کامل اور ہم آہنگ رفیق" }, verseRef: "78:33" },
        { term: "كَأْسًا دِهَاقًا", meaning: { en: "Cup full to brim", ur: "لبریز جام" }, explanation: { en: "Overflowing drinks of Paradise", ur: "جنت کے بھرے ہوئے مشروبات" }, verseRef: "78:34" },
        { term: "لَّا... لَغْوًا وَلَا كِذَّابًا", meaning: { en: "No idle talk or lying", ur: "نہ فضول بات نہ جھوٹ" }, explanation: { en: "Pure, truthful speech only", ur: "صرف پاکیزہ اور سچی بات" }, verseRef: "78:35" },
        { term: "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا", meaning: { en: "Reward from Lord, gift calculated", ur: "آپ کے رب کی طرف سے کافی بدلہ اور عطا" }, explanation: { en: "Generous, measured gift from Allah", ur: "Allah کی طرف سے فراخ دلانہ اور بھرپور انعام" }, verseRef: "78:36" }
      ]
    },

    divineAuthority: {
      name: "Divine Authority on That Day",
      nameUr: "اس دن الہٰی اقتدار",
      nameArabic: "السلطة الإلهية يوم القيامة",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ... الرَّحْمَـٰنِ", meaning: { en: "Lord of heavens, earth - the Merciful", ur: "آسمانوں اور زمین کا رب - الرحمٰن" }, explanation: { en: "Allah's absolute sovereignty", ur: "Allah کی مطلق حاکمیت" }, verseRef: "78:37" },
        { term: "لَا يَمْلِكُونَ مِنْهُ خِطَابًا", meaning: { en: "None possess speech from Him", ur: "کوئی اس سے بات کرنے کی طاقت نہیں رکھتا" }, explanation: { en: "No intercession without permission", ur: "اجازت کے بغیر کوئی سفارش نہیں" }, verseRef: "78:37" },
        { term: "يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا", meaning: { en: "Spirit and angels stand in rows", ur: "روح (جبرائیل) اور فرشتے صف بستہ کھڑے ہوں گے" }, explanation: { en: "Jibreel and angels in formation", ur: "جبرائیل اور فرشتے صفوں میں" }, verseRef: "78:38" },
        { term: "لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ", meaning: { en: "None speak except by permission", ur: "کوئی نہیں بولے گا سوائے جسے اجازت ہو" }, explanation: { en: "Total silence except those permitted", ur: "مکمل خاموشی سوائے مجاز لوگوں کے" }, verseRef: "78:38" },
        { term: "ذَٰلِكَ الْيَوْمُ الْحَقُّ", meaning: { en: "That is the True Day", ur: "وہ حقیقی دن ہے" }, explanation: { en: "The Day of ultimate reality", ur: "حتمی حقیقت کا دن" }, verseRef: "78:39" }
      ]
    },

    finalWarning: {
      name: "Final Warning",
      nameUr: "آخری تنبیہ",
      nameArabic: "التحذير الأخير",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا", meaning: { en: "Whoever wills may take a path to Lord", ur: "جو چاہے اپنے رب کی طرف واپسی کا راستہ اختیار کرے" }, explanation: { en: "Choice and free will emphasized", ur: "انتخاب اور آزاد مرضی پر زور" }, verseRef: "78:39" },
        { term: "أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا", meaning: { en: "We warned you of near punishment", ur: "ہم نے تمہیں قریبی عذاب سے ڈرایا" }, explanation: { en: "Judgment closer than they think", ur: "حساب ان کے خیال سے زیادہ قریب ہے" }, verseRef: "78:40" },
        { term: "يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ", meaning: { en: "Man sees what his hands sent forth", ur: "انسان دیکھے گا جو اس کے ہاتھوں نے آگے بھیجا" }, explanation: { en: "Confronting one's own deeds", ur: "اپنے ہی اعمال کا سامنا" }, verseRef: "78:40" },
        { term: "يَا لَيْتَنِي كُنتُ تُرَابًا", meaning: { en: "Would that I were dust!", ur: "کاش میں مٹی ہوتا!" }, explanation: { en: "Disbeliever's ultimate regret", ur: "کافر کا انتہائی افسوس" }, verseRef: "78:40" }
      ]
    }
  },

  relationships: [
    { from: "النبأ العظيم", to: "يوم الفصل", type: "identity", description: { en: "The Great News IS the Day of Judgment", ur: "بڑی خبر دراصل یومِ فیصلہ ہے" } },
    { from: "الأرض مهادا", to: "الجبال أوتادا", type: "complementary", description: { en: "Earth spread + mountains anchoring it", ur: "زمین بچھائی + پہاڑوں نے مضبوط کیا" } },
    { from: "الليل لباسا", to: "النهار معاشا", type: "contrast", description: { en: "Night for rest, day for work - perfect balance", ur: "رات آرام کے لیے، دن کام کے لیے - کامل توازن" } },
    { from: "لا يرجون حسابا", to: "جهنم مرصادا", type: "causation", description: { en: "Denying accountability leads to Hell", ur: "جوابدہی سے انکار جہنم تک لے جاتا ہے" } },
    { from: "للمتقين مفازا", to: "للطاغين مآبا", type: "contrast", description: { en: "Success vs. refuge - opposite destinations", ur: "کامیابی بمقابلہ ٹھکانا - مخالف منزلیں" } },
    { from: "كل شيء أحصيناه", to: "ينظر المرء ما قدمت يداه", type: "consequence", description: { en: "Everything recorded → confronting one's deeds", ur: "ہر چیز ریکارڈ → اپنے اعمال کا سامنا" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Question", verses: "78:1-5", description: { en: "About what do they ask? The Great News they dispute", ur: "وہ کس بارے میں پوچھتے ہیں؟ بڑی خبر جس میں اختلاف ہے" } },
      { stage: 2, theme: "Creation Proofs", verses: "78:6-16", description: { en: "Earth, mountains, pairs, night/day, heavens, sun, rain, gardens", ur: "زمین، پہاڑ، جوڑے، رات/دن، آسمان، سورج، بارش، باغات" } },
      { stage: 3, theme: "Day of Separation", verses: "78:17-20", description: { en: "Appointed time, trumpet, crowds, sky and mountains transform", ur: "مقررہ وقت، صور، ہجوم، آسمان اور پہاڑ بدل جائیں" } },
      { stage: 4, theme: "Hell's Reality", verses: "78:21-30", description: { en: "Hell as ambush, ages of torment, no relief, increasing punishment", ur: "جہنم گھات میں، مدتوں عذاب، کوئی سکون نہیں، بڑھتا عذاب" } },
      { stage: 5, theme: "Paradise's Reality", verses: "78:31-36", description: { en: "Gardens, companions, pure drinks, divine gift", ur: "باغات، ساتھی، پاکیزہ مشروبات، الہٰی عطا" } },
      { stage: 6, theme: "Divine Majesty", verses: "78:37-40", description: { en: "Allah's authority, angels in rows, final warning, disbeliever's regret", ur: "Allah کا اقتدار، فرشتے صفوں میں، آخری تنبیہ، کافر کا پچھتاوا" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Believe in resurrection", how: "The 'Great News' is not myth but coming reality", verse: "78:1-5" },
      { principle: "See creation as proof", how: "Every natural phenomenon proves Allah's power to resurrect", verse: "78:6-16" },
      { principle: "Expect accountability", how: "Everything is recorded - live accordingly", verse: "78:27-29" },
      { principle: "Fear Hell's reality", how: "Not metaphor but actual torment for transgressors", verse: "78:21-30" },
      { principle: "Aspire to Paradise", how: "Muttaqeen receive mafaaz - ultimate success through taqwa", verse: "78:31-36" },
      { principle: "Choose now", how: "Path to Allah is open - make the choice before it's too late", verse: "78:39" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Disbeliever's Final Wish", ur: "کافر کی آخری آرزو" },
    insight: { en: "The surah's most powerful verse is its last: 'Would that I were dust!' (يَا لَيْتَنِي كُنتُ تُرَابًا). When disbelievers see their deeds and impending punishment, they wish for annihilation - to be dirt with no consciousness. But the Quran elsewhere (23:99-100) shows even death won't help; there's no escape. This wish contrasts with Adam's creation FROM dust - the very origin they scorn becomes their desperate desire. The irony: they mocked resurrection of dusty bones, now they'd give anything to BE dust. The surah's structure moves from questioning the Great News → proving it through creation → showing both destinations → this final, devastating regret. Their mockery becomes their ultimate torment.", ur: "سورت کی سب سے طاقتور آیت اس کی آخری ہے: 'کاش میں مٹی ہوتا!' جب کافر اپنے اعمال اور آنے والا عذاب دیکھیں گے تو فنا کی تمنا کریں گے - بغیر شعور کی مٹی بن جانا۔ لیکن Quran دوسری جگہ (23:99-100) بتاتا ہے کہ موت بھی مدد نہیں کرے گی۔ یہ تمنا آدم کی مٹی سے تخلیق کے بالکل الٹ ہے - جس اصل کا مذاق اڑاتے تھے وہی ان کی بے چین خواہش بن جائے گی۔ ستم ظریفی دیکھیں: مٹی کی ہڈیوں سے جی اٹھنے کا مذاق اڑاتے تھے، اب خود مٹی بننا چاہتے ہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "عَمَّ contraction", example: { en: "عَن + مَا = عَمَّ", ur: "عَن + مَا = عَمَّ (کس چیز کے بارے میں)" }, effect: { en: "Sharp, emphatic question opening", ur: "تیز اور مؤثر سوالیہ آغاز" } },
      { feature: "كَلَّا repetition", example: { en: "Verses 4-5", ur: "آیات 4-5" }, effect: { en: "Stern refutation + warning intensification", ur: "سخت تردید + تنبیہ میں شدت" } },
      { feature: "Ten creation signs", example: { en: "78:6-16", ur: "78:6-16 (دس نشانیاں)" }, effect: { en: "Comprehensive proof of divine power", ur: "الہٰی قدرت کا جامع ثبوت" } },
      { feature: "مِفعال pattern", example: { en: "مِرصاد (ambush)", ur: "مِرصاد (گھات)" }, effect: { en: "Instrument noun - Hell IS an ambush", ur: "اسمِ آلہ - جہنم خود ایک گھات ہے" } },
      { feature: "أَحْقَاب", example: { en: "Ages upon ages", ur: "مدتوں پر مدتیں" }, effect: { en: "Plural of plural indicating endless duration", ur: "جمع الجمع جو نہ ختم ہونے والی مدت ظاہر کرتی ہے" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "78:7", topic: "Mountains as stabilizers", note: "أَوتَاد (pegs/stakes) - mountains have deep roots stabilizing tectonic plates" },
      { verse: "78:13", topic: "Sun as burning lamp", note: "سِراج وَهّاج - lamp (combustion) not just light source, indicating solar fusion" },
      { verse: "78:14", topic: "Rain process", note: "مُعصِرات (squeezing clouds) - water vapor compressed until rain releases" }
    ]
  }
};

export default ONTOLOGY;
