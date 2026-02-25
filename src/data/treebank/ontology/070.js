/**
 * Surah Al-Ma'arij (70) - Ontology of Quranic Concepts
 * The Ascending Stairways
 * Theme: Day of Judgment, human nature, qualities of successful believers
 */

export const ONTOLOGY = {
  surahId: 70,
  surahName: "Al-Ma'arij",
  surahNameArabic: "المعارج",
  revelationType: "Makki",
  totalAyahs: 44,

  categories: {
    inevitablePunishment: {
      name: "Inevitable Punishment",
      nameArabic: "العذاب الواقع",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ", meaning: { en: "A questioner asked about punishment to occur", ur: "ایک مانگنے والے نے واقع ہونے والا عذاب مانگا" }, explanation: { en: "Al-Nadr ibn al-Harith mockingly asked for punishment", ur: "نضر بن حارث نے تمسخراً عذاب مانگا" }, verseRef: "70:1" },
        { term: "لِلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ", meaning: { en: "For disbelievers, none can prevent it", ur: "کافروں کے لیے، کوئی اسے روک نہیں سکتا" }, explanation: { en: "No one can stop divine punishment", ur: "کوئی الہی عذاب کو نہیں روک سکتا" }, verseRef: "70:2" },
        { term: "ذِي الْمَعَارِجِ", meaning: { en: "Owner of ascending stairways", ur: "بلند درجوں والا" }, explanation: { en: "Allah's high stations where angels ascend", ur: "اللہ کے بلند مقامات جہاں فرشتے چڑھتے ہیں" }, verseRef: "70:3" }
      ]
    },

    angelicAscent: {
      name: "Angelic Ascent",
      nameArabic: "صعود الملائكة",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ", meaning: { en: "Angels and Spirit ascend", ur: "فرشتے اور روح (جبریل) چڑھتے ہیں" }, explanation: { en: "Jibreel and angels ascend to Allah", ur: "جبریل اور فرشتے اللہ کی طرف بلند ہوتے ہیں" }, verseRef: "70:4" },
        { term: "خَمْسِينَ أَلْفَ سَنَةٍ", meaning: { en: "Fifty thousand years", ur: "پچاس ہزار سال" }, explanation: { en: "Length of Day of Judgment for disbelievers", ur: "کافروں کے لیے قیامت کے دن کی لمبائی" }, verseRef: "70:4" }
      ]
    },

    beautifulPatience: {
      name: "Beautiful Patience",
      nameArabic: "الصبر الجميل",
      color: '#3B82F6',
      icon: 'Heart',
      concepts: [
        { term: "فَاصْبِرْ صَبْرًا جَمِيلًا", meaning: { en: "Be patient with beautiful patience", ur: "خوبصورت صبر کرو" }, explanation: { en: "Patience without complaint", ur: "بغیر شکایت کے صبر" }, verseRef: "70:5" },
        { term: "يَرَوْنَهُ بَعِيدًا... وَنَرَاهُ قَرِيبًا", meaning: { en: "They see it far; We see it near", ur: "وہ اسے دور سمجھتے ہیں اور ہم اسے قریب دیکھتے ہیں" }, explanation: { en: "Different perspectives on Day of Judgment", ur: "قیامت کے بارے میں مختلف نقطہ نظر" }, verseRef: "70:6-7" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment Scenes",
      nameArabic: "مشاهد القيامة",
      color: '#F59E0B',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءُ كَالْمُهْلِ", meaning: { en: "Sky like murky oil", ur: "آسمان پگھلی ہوئی دھات کی طرح" }, explanation: { en: "Sky changes color/texture", ur: "آسمان کی رنگت بدل جائے گی" }, verseRef: "70:8" },
        { term: "الْجِبَالُ كَالْعِهْنِ", meaning: { en: "Mountains like wool", ur: "پہاڑ رنگین اون کی طرح" }, explanation: { en: "Mountains become colored wool", ur: "پہاڑ دھنکی ہوئی اون بن جائیں گے" }, verseRef: "70:9" },
        { term: "وَلَا يَسْأَلُ حَمِيمٌ حَمِيمًا", meaning: { en: "No friend asks about friend", ur: "کوئی قریبی کسی قریبی کی خبر نہیں لے گا" }, explanation: { en: "Even close friends preoccupied", ur: "قریبی دوست بھی اپنی فکر میں مشغول" }, verseRef: "70:10" }
      ]
    },

    desperateRansom: {
      name: "Desperate Ransom Offers",
      nameArabic: "محاولات الفداء اليائسة",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "يَوَدُّ الْمُجْرِمُ لَوْ يَفْتَدِي", meaning: { en: "Criminal wishes to ransom himself", ur: "مجرم چاہے گا کہ فدیہ دے کر بچ جائے" }, explanation: { en: "Desperate to escape punishment", ur: "سزا سے بچنے کی بے تاب کوشش" }, verseRef: "70:11" },
        { term: "بِبَنِيهِ", meaning: { en: "With his children", ur: "اپنے بچوں کو دے کر" }, explanation: { en: "Would sacrifice his own children", ur: "اپنے بچوں کو قربان کرنے کو تیار" }, verseRef: "70:11" },
        { term: "وَصَاحِبَتِهِ وَأَخِيهِ", meaning: { en: "His wife and brother", ur: "اپنی بیوی اور بھائی کو" }, explanation: { en: "Would sacrifice spouse and siblings", ur: "بیوی اور بھائی بہن کو قربان کرے" }, verseRef: "70:12" },
        { term: "وَفَصِيلَتِهِ", meaning: { en: "His tribe", ur: "اپنے خاندان کو" }, explanation: { en: "Would sacrifice entire clan", ur: "پورے قبیلے کو قربان کرے" }, verseRef: "70:13" },
        { term: "وَمَن فِي الْأَرْضِ جَمِيعًا", meaning: { en: "Everyone on earth", ur: "زمین پر جتنے لوگ ہیں سب کو" }, explanation: { en: "Would sacrifice all humanity", ur: "تمام انسانیت کو قربان کرے" }, verseRef: "70:14" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "لَظَىٰ", meaning: { en: "Laza (blazing fire)", ur: "بھڑکتی آگ (لظیٰ)" }, explanation: { en: "Name for Hellfire", ur: "جہنم کا ایک نام" }, verseRef: "70:15" },
        { term: "نَزَّاعَةً لِّلشَّوَىٰ", meaning: { en: "Remover of scalps", ur: "کھال اتارنے والی" }, explanation: { en: "Burns off skin from head", ur: "سر کی کھال جلا دے" }, verseRef: "70:16" },
        { term: "تَدْعُو مَنْ أَدْبَرَ وَتَوَلَّىٰ", meaning: { en: "Calls those who turned back", ur: "پکارتی ہے اسے جو پیٹھ پھیر کر ہٹ گیا" }, explanation: { en: "Hell summons the rejecters", ur: "جہنم منکرین کو بلاتی ہے" }, verseRef: "70:17" },
        { term: "وَجَمَعَ فَأَوْعَىٰ", meaning: { en: "Collected and hoarded", ur: "مال جمع کیا اور سمیٹ کر رکھا" }, explanation: { en: "Hoarded wealth, didn't spend", ur: "مال جمع کیا اور خرچ نہیں کیا" }, verseRef: "70:18" }
      ]
    },

    humanNature: {
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "خُلِقَ هَلُوعًا", meaning: { en: "Created anxious/impatient", ur: "بے صبر پیدا کیا گیا" }, explanation: { en: "Human's inherent impatience", ur: "انسان کی فطری بے صبری" }, verseRef: "70:19" },
        { term: "إِذَا مَسَّهُ الشَّرُّ جَزُوعًا", meaning: { en: "When evil touches, distressed", ur: "جب تکلیف پہنچے تو گھبرا جائے" }, explanation: { en: "Panic in hardship", ur: "مصیبت میں گھبراہٹ" }, verseRef: "70:20" },
        { term: "إِذَا مَسَّهُ الْخَيْرُ مَنُوعًا", meaning: { en: "When good touches, withholding", ur: "جب بھلائی ملے تو روکنے لگے" }, explanation: { en: "Stingy in prosperity", ur: "خوشحالی میں کنجوسی" }, verseRef: "70:21" }
      ]
    },

    exceptionsFromHumanWeakness: {
      name: "Exceptions to Human Weakness",
      nameArabic: "المستثنون من الضعف البشري",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "إِلَّا الْمُصَلِّينَ", meaning: { en: "Except those who pray", ur: "سوائے نماز پڑھنے والوں کے" }, explanation: { en: "Prayer overcomes impatience", ur: "نماز بے صبری پر غالب آتی ہے" }, verseRef: "70:22" },
        { term: "عَلَىٰ صَلَاتِهِمْ دَائِمُونَ", meaning: { en: "Constant in their prayer", ur: "اپنی نماز پر ہمیشگی کرنے والے" }, explanation: { en: "Consistent prayer", ur: "مستقل نماز" }, verseRef: "70:23" },
        { term: "حَقٌّ مَّعْلُومٌ", meaning: { en: "Known right", ur: "مقرر حق (زکوٰۃ)" }, explanation: { en: "Give assigned portion (zakah)", ur: "مقررہ حصہ دینا (زکوٰۃ)" }, verseRef: "70:24" },
        { term: "لِلسَّائِلِ وَالْمَحْرُومِ", meaning: { en: "For beggar and deprived", ur: "مانگنے والے اور محروم کے لیے" }, explanation: { en: "Charity to those who ask and don't", ur: "مانگنے والوں اور نہ مانگنے والوں کو صدقہ" }, verseRef: "70:25" },
        { term: "يُصَدِّقُونَ بِيَوْمِ الدِّينِ", meaning: { en: "Believe in Day of Judgment", ur: "جزا کے دن پر ایمان رکھنے والے" }, explanation: { en: "Affirm accountability", ur: "احتساب کی تصدیق" }, verseRef: "70:26" },
        { term: "مِنْ عَذَابِ رَبِّهِم مُّشْفِقُونَ", meaning: { en: "Fear punishment of Lord", ur: "اپنے رب کے عذاب سے ڈرنے والے" }, explanation: { en: "Not feel secure from punishment", ur: "عذاب سے بے خوف نہیں" }, verseRef: "70:27" },
        { term: "لِفُرُوجِهِمْ حَافِظُونَ", meaning: { en: "Guard their private parts", ur: "اپنی شرم گاہوں کی حفاظت کرنے والے" }, explanation: { en: "Chastity", ur: "پاکدامنی" }, verseRef: "70:29" },
        { term: "لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ", meaning: { en: "Fulfill trusts and promises", ur: "اپنی امانتوں اور عہدوں کی نگہبانی کرنے والے" }, explanation: { en: "Trustworthiness", ur: "امانتداری" }, verseRef: "70:32" },
        { term: "بِشَهَادَاتِهِمْ قَائِمُونَ", meaning: { en: "Stand firm in testimony", ur: "اپنی گواہیوں پر قائم رہنے والے" }, explanation: { en: "Honest witnessing", ur: "سچی گواہی" }, verseRef: "70:33" },
        { term: "عَلَىٰ صَلَاتِهِمْ يُحَافِظُونَ", meaning: { en: "Carefully maintain prayer", ur: "اپنی نماز کی حفاظت کرنے والے" }, explanation: { en: "Guard prayer times", ur: "نماز کے اوقات کی پابندی" }, verseRef: "70:34" }
      ]
    },

    disbelieversRushing: {
      name: "Disbelievers' Mockery",
      nameArabic: "استهزاء الكافرين",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "قِبَلَكَ مُهْطِعِينَ", meaning: { en: "Hastening toward you", ur: "تمہاری طرف دوڑتے ہوئے" }, explanation: { en: "Running to mock Prophet", ur: "نبی ﷺ کا مذاق اڑانے دوڑے آتے" }, verseRef: "70:36" },
        { term: "عِزِينَ", meaning: { en: "In groups", ur: "گروہوں میں" }, explanation: { en: "Crowding from all sides", ur: "ہر طرف سے بھیڑ لگاتے" }, verseRef: "70:37" },
        { term: "أَيَطْمَعُ... أَن يُدْخَلَ جَنَّةَ نَعِيمٍ", meaning: { en: "Does each aspire to enter Paradise?", ur: "کیا ان میں سے ہر ایک نعمت کی جنت میں داخل ہونے کی تمنا رکھتا ہے؟" }, explanation: { en: "Rhetorical question - without faith, no Paradise", ur: "استفہامی سوال - ایمان کے بغیر جنت نہیں" }, verseRef: "70:38" }
      ]
    },

    divineOath: {
      name: "Divine Oath",
      nameArabic: "القسم الإلهي",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "بِرَبِّ الْمَشَارِقِ وَالْمَغَارِبِ", meaning: { en: "By Lord of Easts and Wests", ur: "تمام مشرقوں اور مغربوں کے رب کی قسم" }, explanation: { en: "Plural - multiple sunrise/sunset points", ur: "جمع - متعدد طلوع و غروب کے مقامات" }, verseRef: "70:40" },
        { term: "لَقَادِرُونَ عَلَىٰ أَن نُّبَدِّلَ خَيْرًا مِّنْهُمْ", meaning: { en: "Able to replace with better", ur: "ان سے بہتر لوگ لانے پر قادر ہیں" }, explanation: { en: "Allah can replace rejectors", ur: "اللہ انکار کرنے والوں کو بدل سکتا ہے" }, verseRef: "70:40-41" }
      ]
    },

    finalScene: {
      name: "Final Scene",
      nameArabic: "المشهد الأخير",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "يَخْرُجُونَ مِنَ الْأَجْدَاثِ سِرَاعًا", meaning: { en: "Emerge from graves hastening", ur: "قبروں سے تیزی سے نکلیں گے" }, explanation: { en: "Quick resurrection", ur: "تیز رفتار قیامت" }, verseRef: "70:43" },
        { term: "كَأَنَّهُمْ إِلَىٰ نُصُبٍ يُوفِضُونَ", meaning: { en: "As if racing to an idol", ur: "جیسے کسی نشانے کی طرف دوڑ رہے ہوں" }, explanation: { en: "Rushing like they used to rush to idols", ur: "جیسے بتوں کی طرف دوڑا کرتے تھے" }, verseRef: "70:43" },
        { term: "خَاشِعَةً أَبْصَارُهُمْ", meaning: { en: "Eyes humbled", ur: "ان کی نگاہیں جھکی ہوئی ہوں گی" }, explanation: { en: "Eyes cast down in shame", ur: "شرم سے نظریں نیچی" }, verseRef: "70:44" },
        { term: "تَرْهَقُهُمْ ذِلَّةٌ", meaning: { en: "Humiliation covering them", ur: "ذلت ان پر چھا رہی ہو گی" }, explanation: { en: "Overwhelmed with disgrace", ur: "رسوائی سے ڈھکے ہوئے" }, verseRef: "70:44" }
      ]
    }
  },

  relationships: [
    { from: "هلوعاً... جزوعاً... منوعاً", to: "إلا المصلين", type: "exception", description: { en: "Prayer overcomes human weakness", ur: "نماز انسانی کمزوری پر غالب آتی ہے" } },
    { from: "يرونه بعيداً", to: "نراه قريباً", type: "contrast", description: { en: "Human vs divine perspective on Day of Judgment", ur: "قیامت پر انسانی بمقابلہ الہی نقطہ نظر" } },
    { from: "دائمون على صلاتهم", to: "يحافظون على صلاتهم", type: "bookend", description: { en: "Prayer begins and ends the righteous qualities", ur: "نماز نیک صفات کی شروعات اور اختتام" } },
    { from: "جمع فأوعى", to: "للسائل والمحروم", type: "contrast", description: { en: "Hoarding vs giving to needy", ur: "مال جمع کرنا بمقابلہ ضرورتمندوں کو دینا" } },
    { from: "المشارق والمغارب", to: "مسبوقين", type: "power", description: { en: "Lord of all directions is never outrun", ur: "تمام سمتوں کا رب کبھی مات نہیں کھاتا" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Inevitable Punishment", verses: "70:1-7", description: { en: "Questioner mocks; punishment certain; be patient", ur: "سائل نے مذاق اڑایا؛ عذاب یقینی؛ صبر کرو" } },
      { stage: 2, theme: "Day of Judgment", verses: "70:8-14", description: { en: "Sky/mountains change; desperate ransom offers", ur: "آسمان/پہاڑ بدل جائیں گے؛ مایوسانہ فدیے کی پیشکش" } },
      { stage: 3, theme: "Hell Description", verses: "70:15-18", description: { en: "Laza burns scalps; calls those who hoarded", ur: "لظیٰ کھال جلا دے؛ مال جمع کرنے والوں کو بلائے" } },
      { stage: 4, theme: "Human Nature", verses: "70:19-21", description: { en: "Man impatient in hardship, stingy in ease", ur: "انسان مصیبت میں بے صبر، آسانی میں بخیل" } },
      { stage: 5, theme: "Exceptions", verses: "70:22-35", description: { en: "Eleven qualities of successful believers", ur: "کامیاب مومنین کی گیارہ صفات" } },
      { stage: 6, theme: "Disbelievers' Fate", verses: "70:36-44", description: { en: "Mockery futile; resurrection; humiliation", ur: "تمسخر بے سود؛ قیامت؛ ذلت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Beautiful patience", how: "Endure without complaining; don't seek sympathy", verse: "70:5" },
      { principle: "Constant prayer", how: "Pray consistently, not just in crisis", verse: "70:23" },
      { principle: "Give to those who don't ask", how: "Seek out the deprived who don't beg", verse: "70:25" },
      { principle: "Fear Allah's punishment", how: "Never feel secure from accountability", verse: "70:27-28" },
      { principle: "Guard chastity", how: "Protect yourself except with spouse", verse: "70:29-30" },
      { principle: "Fulfill trusts", how: "Keep promises and return what's entrusted", verse: "70:32" },
      { principle: "Honest testimony", how: "Never lie in witnessing even if costly", verse: "70:33" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Eleven Qualities Formula", ur: "گیارہ صفات کا فارمولا" },
    insight: { en: "Verses 22-35 provide a comprehensive checklist of 11 qualities that exempt believers from human weakness (halūʿ): (1) Constant in prayer, (2) Give known right to poor, (3) Help beggars, (4) Help deprived, (5) Believe in Day of Judgment, (6) Fear Allah's punishment, (7) Guard chastity, (8) Fulfill trusts, (9) Keep promises, (10) Stand firm in testimony, (11) Carefully maintain prayer. Notice prayer bookends the list (verses 23 and 34). The first and last quality is salah - showing its central importance. The list moves from worship → charity → belief → morality → testimony → prayer again. This structure shows that Islamic righteousness integrates worship, social responsibility, belief, and ethics as an inseparable whole.", ur: "آیات 22-35 گیارہ صفات کی جامع فہرست دیتی ہیں جو مومنین کو انسانی کمزوری (ہَلُوع) سے مستثنیٰ کرتی ہیں: (1) نماز پر مداومت، (2) غریبوں کو مقرر حق دینا، (3) مانگنے والوں کی مدد، (4) محرومین کی مدد، (5) قیامت پر ایمان، (6) اللہ کے عذاب سے خوف، (7) پاکدامنی، (8) امانتیں ادا کرنا، (9) عہد نبھانا، (10) گواہی پر قائم رہنا، (11) نماز کی حفاظت۔ نماز فہرست کی شروعات اور اختتام دونوں میں ہے (آیت 23 اور 34) - اس کی مرکزی اہمیت ظاہر کرتی ہے۔ عبادت → صدقہ → ایمان → اخلاق → گواہی → نماز - یہ ڈھانچہ دکھاتا ہے کہ اسلامی نیکی عبادت، سماجی ذمہ داری، عقیدہ اور اخلاقیات کا ناقابلِ تقسیم مجموعہ ہے۔" }
  },

  historicalContext: {
    note: { en: "Verse 1 refers to al-Nadr ibn al-Harith who mockingly demanded: 'O Allah, if this is the truth from You, rain down stones on us or bring painful punishment' (8:32). The surah responds that such punishment will indeed come - but only at Allah's appointed time. The term 'maʿārij' (ascending stairways) refers to the high stations of Allah to which angels ascend.", ur: "آیت 1 نضر بن حارث کے بارے میں ہے جس نے تمسخراً کہا: 'اے اللہ، اگر یہ تیری طرف سے حق ہے تو ہم پر پتھر برسا یا دردناک عذاب لا' (8:32)۔ سورت جواب دیتی ہے کہ ایسا عذاب ضرور آئے گا - لیکن اللہ کے مقررہ وقت پر۔ 'معارج' (بلند سیڑھیاں) سے مراد اللہ کے بلند مقامات ہیں جن پر فرشتے چڑھتے ہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "هَلُوع", example: { en: "Intensively anxious", ur: "انتہائی بے صبر" }, effect: "faʿūl pattern - intensive quality" },
      { feature: "جَزُوع", example: { en: "Intensively distressed", ur: "انتہائی گھبرانے والا" }, effect: "faʿūl pattern - excessive panic" },
      { feature: "مَنُوع", example: { en: "Intensively withholding", ur: "انتہائی روکنے والا" }, effect: "faʿūl pattern - extreme stinginess" },
      { feature: "نَزَّاعَة", example: { en: "Intensive remover", ur: "شدت سے کھینچنے والی" }, effect: "faʿʿālah pattern - continuous action" },
      { feature: "عِزِين", example: { en: "Groups (plural of عِزَة)", ur: "جماعتیں (عِزَة کی جمع)" }, effect: "Scattered factions" },
      { feature: "المَعَارِج", example: { en: "Places of ascent", ur: "بلند مقامات" }, effect: "Plural of مِعْرَج - stairways" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "70:4", topic: "Relativity of time", note: "50,000 years for Day of Judgment - different time experience" },
      { verse: "70:40", topic: "Multiple sunrises", note: "المشارق والمغارب (plural) - sun rises/sets at different points throughout year" }
    ]
  }
};

export default ONTOLOGY;
