/**
 * Surah Al-Haqqah (69) - Ontology of Quranic Concepts
 * The Inevitable Reality
 * Theme: Day of Judgment, destroyed nations, record books, Quran's divine origin
 */

export const ONTOLOGY = {
  surahId: 69,
  surahName: "Al-Haqqah",
  surahNameArabic: "الحاقة",
  revelationType: "Makki",
  totalAyahs: 52,

  categories: {
    namesOfJudgmentDay: {
      name: "Names of Judgment Day",
      nameUr: "قیامت کے نام",
      nameArabic: "أسماء يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "الْحَاقَّةُ", meaning: { en: "The Inevitable Reality", ur: "حق ہو کر رہنے والی" }, explanation: { en: "That which must come true", ur: "جو ضرور واقع ہو کر رہے گی" }, verseRef: "69:1-3" },
        { term: "الْقَارِعَةِ", meaning: { en: "The Striking Calamity", ur: "کھٹکھٹانے والی (قیامت)" }, explanation: { en: "Strikes hearts with terror", ur: "دلوں کو خوف سے تھرتھرا دے" }, verseRef: "69:4" },
        { term: "الْوَاقِعَةُ", meaning: { en: "The Occurrence", ur: "واقع ہونے والی" }, explanation: { en: "That which occurs", ur: "جو ضرور وقوع پذیر ہو گی" }, verseRef: "69:15" }
      ]
    },

    destroyedNations: {
      name: "Destroyed Nations",
      nameUr: "تباہ شدہ قومیں",
      nameArabic: "الأمم المهلكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ثَمُودُ", meaning: { en: "Thamud", ur: "ثمود" }, explanation: { en: "Prophet Salih's people", ur: "حضرت صالح کی قوم" }, verseRef: "69:4-5" },
        { term: "بِالطَّاغِيَةِ", meaning: { en: "Overwhelming blast", ur: "حد سے بڑھنے والے عذاب سے" }, explanation: { en: "Destroyed by thunderous sound", ur: "مہیب آواز سے تباہ کیے گئے" }, verseRef: "69:5" },
        { term: "عَادٌ", meaning: { en: "'Ad", ur: "عاد" }, explanation: { en: "Prophet Hud's people", ur: "حضرت ہود کی قوم" }, verseRef: "69:6-8" },
        { term: "بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ", meaning: { en: "Screaming violent wind", ur: "تیز سرد آندھی" }, explanation: { en: "Destroyed by fierce wind", ur: "شدید طوفانی ہوا سے تباہ کیے گئے" }, verseRef: "69:6" },
        { term: "سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا", meaning: { en: "Seven nights and eight days", ur: "سات راتیں اور آٹھ دن مسلسل" }, explanation: { en: "Duration of destruction", ur: "تباہی کی مدت" }, verseRef: "69:7" },
        { term: "أَعْجَازُ نَخْلٍ خَاوِيَةٍ", meaning: { en: "Hollow palm trunks", ur: "کھجوروں کے کھوکھلے تنے" }, explanation: { en: "Bodies like fallen trees", ur: "لاشیں گرے ہوئے درختوں کی طرح" }, verseRef: "69:7" },
        { term: "فِرْعَوْنُ وَمَن قَبْلَهُ", meaning: { en: "Pharaoh and those before", ur: "فرعون اور اس سے پہلے والے" }, explanation: { en: "Egyptian tyrant and predecessors", ur: "مصری ظالم اور اس کے پیشرو" }, verseRef: "69:9" },
        { term: "الْمُؤْتَفِكَاتُ", meaning: { en: "Overturned cities", ur: "الٹی ہوئی بستیاں" }, explanation: { en: "Cities of Lot's people", ur: "قومِ لوط کی بستیاں" }, verseRef: "69:9" }
      ]
    },

    noahsFlood: {
      name: "Noah's Flood",
      nameUr: "طوفانِ نوح",
      nameArabic: "طوفان نوح",
      color: '#06B6D4',
      icon: 'Book',
      concepts: [
        { term: "لَمَّا طَغَى الْمَاءُ", meaning: { en: "When water overflowed", ur: "جب پانی حد سے بڑھ گیا" }, explanation: { en: "The Great Flood", ur: "عظیم طوفان" }, verseRef: "69:11" },
        { term: "حَمَلْنَاكُمْ فِي الْجَارِيَةِ", meaning: { en: "Carried you in the ship", ur: "تمہیں کشتی میں سوار کیا" }, explanation: { en: "Ancestors saved on Ark", ur: "آباء واجداد کشتی پر بچائے گئے" }, verseRef: "69:11" },
        { term: "تَذْكِرَةً", meaning: { en: "A reminder", ur: "ایک نصیحت" }, explanation: { en: "Ark as lesson for humanity", ur: "کشتی بنی نوع انسان کے لیے عبرت" }, verseRef: "69:12" },
        { term: "أُذُنٌ وَاعِيَةٌ", meaning: { en: "Conscious ear", ur: "سننے والا کان" }, explanation: { en: "Those who truly listen", ur: "جو حقیقتاً سنتے ہیں" }, verseRef: "69:12" }
      ]
    },

    cosmicEvents: {
      name: "Cosmic Events",
      nameUr: "کائناتی واقعات",
      nameArabic: "الأحداث الكونية",
      color: '#8B5CF6',
      icon: 'Globe',
      concepts: [
        { term: "نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَةٌ", meaning: { en: "Horn blown with single blast", ur: "صور میں ایک پھونک ماری جائے گی" }, explanation: { en: "One blow initiates resurrection", ur: "ایک پھونک سے قیامت شروع ہو گی" }, verseRef: "69:13" },
        { term: "حُمِلَتِ الْأَرْضُ وَالْجِبَالُ", meaning: { en: "Earth and mountains lifted", ur: "زمین اور پہاڑ اٹھائے جائیں گے" }, explanation: { en: "Cosmic upheaval", ur: "کائناتی تباہی" }, verseRef: "69:14" },
        { term: "فَدُكَّتَا دَكَّةً وَاحِدَةً", meaning: { en: "Crushed with single blow", ur: "ایک ٹکر سے ریزہ ریزہ" }, explanation: { en: "Complete destruction", ur: "مکمل تباہی" }, verseRef: "69:14" },
        { term: "وَانشَقَّتِ السَّمَاءُ فَهِيَ يَوْمَئِذٍ وَاهِيَةٌ", meaning: { en: "Heaven splits, fragile that Day", ur: "آسمان پھٹ جائے گا، اس دن کمزور ہو گا" }, explanation: { en: "Sky breaks apart", ur: "آسمان ٹوٹ پھوٹ جائے گا" }, verseRef: "69:16" },
        { term: "وَالْمَلَكُ عَلَىٰ أَرْجَائِهَا", meaning: { en: "Angels at its edges", ur: "فرشتے اس کے کناروں پر" }, explanation: { en: "Angels positioned around", ur: "فرشتے چاروں طرف تعینات" }, verseRef: "69:17" },
        { term: "يَحْمِلُ عَرْشَ رَبِّكَ فَوْقَهُمْ ثَمَانِيَةٌ", meaning: { en: "Eight carry Lord's Throne", ur: "آٹھ فرشتے تیرے رب کا عرش اٹھائیں گے" }, explanation: { en: "Eight angels bear Throne", ur: "آٹھ فرشتے عرش اٹھائیں گے" }, verseRef: "69:17" }
      ]
    },

    accountAndExhibition: {
      name: "Account and Exhibition",
      nameUr: "پیشی اور حساب",
      nameArabic: "العرض والحساب",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "يَوْمَئِذٍ تُعْرَضُونَ", meaning: { en: "That Day you will be exhibited", ur: "اس دن تم پیش کیے جاؤ گے" }, explanation: { en: "All presented for judgment", ur: "سب حساب کے لیے پیش ہوں گے" }, verseRef: "69:18" },
        { term: "لَا تَخْفَىٰ مِنكُمْ خَافِيَةٌ", meaning: { en: "No secret hidden", ur: "تمہاری کوئی چھپی بات نہیں رہے گی" }, explanation: { en: "Complete exposure", ur: "مکمل بے پردگی" }, verseRef: "69:18" }
      ]
    },

    rightHandRecipients: {
      name: "Recipients of Right Hand",
      nameUr: "دائیں ہاتھ والے",
      nameArabic: "أصحاب اليمين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "أُوتِيَ كِتَابَهُ بِيَمِينِهِ", meaning: { en: "Given record in right hand", ur: "اعمال نامہ دائیں ہاتھ میں ملے گا" }, explanation: { en: "Success indicator", ur: "کامیابی کی نشانی" }, verseRef: "69:19" },
        { term: "هَاؤُمُ اقْرَءُوا كِتَابِيَهْ", meaning: { en: "Here, read my record!", ur: "لو میرا نامہ اعمال پڑھو!" }, explanation: { en: "Joyful invitation", ur: "خوشی سے دعوت" }, verseRef: "69:19" },
        { term: "ظَنَنتُ أَنِّي مُلَاقٍ حِسَابِيَهْ", meaning: { en: "I knew I'd meet my account", ur: "مجھے یقین تھا کہ مجھے حساب کا سامنا کرنا ہے" }, explanation: { en: "Belief in accountability", ur: "احتساب پر ایمان" }, verseRef: "69:20" },
        { term: "عِيشَةٍ رَّاضِيَةٍ", meaning: { en: "Pleasant life", ur: "پسندیدہ زندگی" }, explanation: { en: "Satisfying existence", ur: "خوشگوار زندگی" }, verseRef: "69:21" },
        { term: "جَنَّةٍ عَالِيَةٍ", meaning: { en: "Elevated Garden", ur: "بلند جنت" }, explanation: { en: "High Paradise", ur: "اونچا جنت" }, verseRef: "69:22" },
        { term: "قُطُوفُهَا دَانِيَةٌ", meaning: { en: "Fruits hanging near", ur: "پھل قریب لٹکے ہوئے" }, explanation: { en: "Easy access to fruits", ur: "پھلوں تک آسان رسائی" }, verseRef: "69:23" }
      ]
    },

    leftHandRecipients: {
      name: "Recipients of Left Hand",
      nameUr: "بائیں ہاتھ والے",
      nameArabic: "أصحاب الشمال",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أُوتِيَ كِتَابَهُ بِشِمَالِهِ", meaning: { en: "Given record in left hand", ur: "اعمال نامہ بائیں ہاتھ میں ملے گا" }, explanation: { en: "Failure indicator", ur: "ناکامی کی نشانی" }, verseRef: "69:25" },
        { term: "يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ", meaning: { en: "I wish I hadn't received my record", ur: "کاش مجھے میرا نامہ اعمال نہ ملتا" }, explanation: { en: "Regret over accountability", ur: "حساب پر پچھتاوا" }, verseRef: "69:25" },
        { term: "وَلَمْ أَدْرِ مَا حِسَابِيَهْ", meaning: { en: "I hadn't known my account", ur: "کاش مجھے اپنا حساب معلوم نہ ہوتا" }, explanation: { en: "Wish for ignorance", ur: "لاعلمی کی خواہش" }, verseRef: "69:26" },
        { term: "يَا لَيْتَهَا كَانَتِ الْقَاضِيَةَ", meaning: { en: "I wish it had been the end", ur: "کاش موت ہی فیصلہ کن ہوتی" }, explanation: { en: "Wish death was final", ur: "موت آخری ہونے کی تمنا" }, verseRef: "69:27" },
        { term: "مَا أَغْنَىٰ عَنِّي مَالِيَهْ", meaning: { en: "My wealth availed me nothing", ur: "میرا مال میرے کسی کام نہ آیا" }, explanation: { en: "Useless riches", ur: "بیکار دولت" }, verseRef: "69:28" },
        { term: "هَلَكَ عَنِّي سُلْطَانِيَهْ", meaning: { en: "Gone from me is my authority", ur: "میرا اقتدار مجھ سے چھن گیا" }, explanation: { en: "Lost power", ur: "طاقت کا خاتمہ" }, verseRef: "69:29" }
      ]
    },

    hellPunishment: {
      name: "Hell's Punishment",
      nameUr: "جہنم کا عذاب",
      nameArabic: "عذاب جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "خُذُوهُ فَغُلُّوهُ", meaning: { en: "Seize him and shackle him", ur: "اسے پکڑو اور طوق ڈالو" }, explanation: { en: "Command to angels", ur: "فرشتوں کو حکم" }, verseRef: "69:30" },
        { term: "ثُمَّ الْجَحِيمَ صَلُّوهُ", meaning: { en: "Then burn him in Hell", ur: "پھر اسے جہنم میں ڈال دو" }, explanation: { en: "Into Hellfire", ur: "دوزخ کی آگ میں" }, verseRef: "69:31" },
        { term: "سِلْسِلَةٍ ذَرْعُهَا سَبْعُونَ ذِرَاعًا", meaning: { en: "Chain of seventy cubits", ur: "ستّر ہاتھ لمبی زنجیر" }, explanation: { en: "70 arm-lengths long", ur: "ستّر بازو لمبی" }, verseRef: "69:32" },
        { term: "لَا يُؤْمِنُ بِاللَّهِ الْعَظِيمِ", meaning: { en: "Didn't believe in Allah", ur: "اللہ عظیم پر ایمان نہیں لایا" }, explanation: { en: "Reason 1: Disbelief", ur: "وجہ 1: کفر" }, verseRef: "69:33" },
        { term: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ", meaning: { en: "Didn't encourage feeding poor", ur: "مسکینوں کو کھلانے کی ترغیب نہیں دیتا تھا" }, explanation: { en: "Reason 2: Neglected poor", ur: "وجہ 2: غریبوں سے غفلت" }, verseRef: "69:34" },
        { term: "غِسْلِين", meaning: { en: "Foul pus/discharge", ur: "زخموں کا پیپ" }, explanation: { en: "Hell's only food", ur: "جہنم کی واحد غذا" }, verseRef: "69:36" }
      ]
    },

    quransDivineOrigin: {
      name: "Quran's Divine Origin",
      nameUr: "قرآن کا الٰہی ماخذ",
      nameArabic: "مصدر القرآن الإلهي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قَوْلُ رَسُولٍ كَرِيمٍ", meaning: { en: "Word of noble Messenger", ur: "معزز رسول کا کلام" }, explanation: { en: "Conveyed by Prophet ﷺ", ur: "نبی ﷺ کے ذریعے پہنچایا گیا" }, verseRef: "69:40" },
        { term: "وَمَا هُوَ بِقَوْلِ شَاعِرٍ", meaning: { en: "Not word of a poet", ur: "یہ کسی شاعر کا کلام نہیں" }, explanation: { en: "Rejects poetry claim", ur: "شاعری کے الزام کی تردید" }, verseRef: "69:41" },
        { term: "وَلَا بِقَوْلِ كَاهِنٍ", meaning: { en: "Not word of a soothsayer", ur: "اور نہ کسی کاہن کا کلام" }, explanation: { en: "Rejects divination claim", ur: "کہانت کے الزام کی تردید" }, verseRef: "69:42" },
        { term: "تَنزِيلٌ مِّن رَّبِّ الْعَالَمِينَ", meaning: { en: "Revelation from Lord of worlds", ur: "تمام جہانوں کے رب کی طرف سے نازل کیا گیا" }, explanation: { en: "Divine source confirmed", ur: "الہی ماخذ کی تصدیق" }, verseRef: "69:43" }
      ]
    },

    propheticAuthority: {
      name: "Prophetic Authority",
      nameUr: "نبوی اختیار",
      nameArabic: "سلطة النبوة",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ", meaning: { en: "If he fabricated sayings", ur: "اگر یہ ہم پر کوئی بات بنا لیتے" }, explanation: { en: "Hypothetical forgery", ur: "فرضی جعل سازی" }, verseRef: "69:44" },
        { term: "لَأَخَذْنَا مِنْهُ بِالْيَمِينِ", meaning: { en: "We would seize him by right hand", ur: "تو ہم ان کا دایاں ہاتھ پکڑ لیتے" }, explanation: { en: "Divine intervention", ur: "الہی مداخلت" }, verseRef: "69:45" },
        { term: "لَقَطَعْنَا مِنْهُ الْوَتِينَ", meaning: { en: "We would cut his aorta", ur: "پھر ان کی شہ رگ کاٹ دیتے" }, explanation: { en: "Instant death", ur: "فوری موت" }, verseRef: "69:46" },
        { term: "فَمَا مِنكُم مِّنْ أَحَدٍ عَنْهُ حَاجِزِينَ", meaning: { en: "None could prevent Us", ur: "تم میں سے کوئی ہمیں نہ روک سکتا" }, explanation: { en: "No protection from Allah", ur: "اللہ سے کوئی بچاؤ نہیں" }, verseRef: "69:47" }
      ]
    },

    quranAsCertainty: {
      name: "Quran as Certainty",
      nameUr: "قرآن بطور یقین",
      nameArabic: "القرآن يقين",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "تَذْكِرَةٌ لِّلْمُتَّقِينَ", meaning: { en: "Reminder for righteous", ur: "متقیوں کے لیے نصیحت" }, explanation: { en: "Benefits the God-fearing", ur: "اللہ سے ڈرنے والوں کو فائدہ دیتا ہے" }, verseRef: "69:48" },
        { term: "مِنكُم مُّكَذِّبِينَ", meaning: { en: "Among you deniers", ur: "تم میں سے کچھ جھٹلانے والے ہیں" }, explanation: { en: "Allah knows rejectors", ur: "اللہ انکار کرنے والوں کو جانتا ہے" }, verseRef: "69:49" },
        { term: "لَحَسْرَةٌ عَلَى الْكَافِرِينَ", meaning: { en: "Regret for disbelievers", ur: "کافروں کے لیے حسرت" }, explanation: { en: "Quran will be their regret", ur: "قرآن ان کے لیے باعثِ حسرت ہو گا" }, verseRef: "69:50" },
        { term: "لَحَقُّ الْيَقِينِ", meaning: { en: "The truth of certainty", ur: "یقین کی حقیقت" }, explanation: { en: "Absolute truth", ur: "مطلق سچائی" }, verseRef: "69:51" }
      ]
    }
  },

  relationships: [
    { from: "الحاقة", to: "القارعة/الواقعة", type: "synonymy", description: { en: "Different names for Day of Judgment", ur: "قیامت کے مختلف نام" } },
    { from: "ثمود", to: "الطاغية", type: "causation", description: { en: "Thamud destroyed by overwhelming blast", ur: "ثمود کو مہیب آواز سے تباہ کیا گیا" } },
    { from: "عاد", to: "ريح صرصر عاتية", type: "causation", description: { en: "'Ad destroyed by screaming violent wind", ur: "عاد کو شدید تیز آندھی سے تباہ کیا گیا" } },
    { from: "كتابه بيمينه", to: "عيشة راضية", type: "consequence", description: { en: "Right hand record → pleasant life", ur: "دائیں ہاتھ نامہ → خوشگوار زندگی" } },
    { from: "كتابه بشماله", to: "خذوه فغلوه", type: "consequence", description: { en: "Left hand record → seized and shackled", ur: "بائیں ہاتھ نامہ → پکڑ لیا اور جکڑ دیا" } },
    { from: "قول رسول كريم", to: "تنزيل من رب العالمين", type: "identity", description: { en: "Noble Messenger's word = Divine revelation", ur: "معزز رسول کا کلام = الہی وحی" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Inevitable", verses: "69:1-3", description: { en: "Triple emphasis on al-Haqqah's reality", ur: "الحاقہ کی حقیقت پر تین بار زور" } },
      { stage: 2, theme: "Past Destructions", verses: "69:4-12", description: { en: "Thamud, 'Ad, Pharaoh, overturned cities, flood", ur: "ثمود، عاد، فرعون، الٹی بستیاں، طوفان" } },
      { stage: 3, theme: "Cosmic Events", verses: "69:13-18", description: { en: "Horn blown, earth crushed, sky splits, exhibition", ur: "صور پھونکا جائے گا، زمین ریزہ ریزہ، آسمان پھٹے گا، پیشی" } },
      { stage: 4, theme: "Right Hand Success", verses: "69:19-24", description: { en: "Joyful record reading, Paradise", ur: "خوشی سے نامہ اعمال پڑھنا، جنت" } },
      { stage: 5, theme: "Left Hand Failure", verses: "69:25-37", description: { en: "Regretful record, chains, Hell, pus", ur: "نامہ پر ندامت، زنجیریں، جہنم، پیپ" } },
      { stage: 6, theme: "Quran's Truth", verses: "69:38-52", description: { en: "Not poetry or divination; divine revelation; certainty", ur: "نہ شاعری نہ کہانت؛ الہی وحی؛ یقین" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Learn from destroyed nations", how: "They denied; we must accept truth", verse: "69:4-10" },
      { principle: "Have conscious ears", how: "Be an أذن واعية - truly listen to Quran", verse: "69:12" },
      { principle: "Believe in accountability", how: "Say like believers: ظننت أني ملاق حسابيه", verse: "69:20" },
      { principle: "Wealth won't help", how: "What good is money on Judgment Day?", verse: "69:28" },
      { principle: "Feed the poor", how: "Failure to encourage feeding is punished", verse: "69:34" },
      { principle: "Quran is certainty", how: "Not poetry or speculation - حق اليقين", verse: "69:51" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Three Levels of Certainty", ur: "یقین کے تین درجے" },
    insight: { en: "Verse 51's 'حَقُّ الْيَقِينِ' (truth of certainty) represents the highest level of certainty in Islamic epistemology. Scholars identify three levels: (1) عِلْمُ الْيَقِين (knowledge of certainty) - like knowing fire burns from being told; (2) عَيْنُ الْيَقِين (eye of certainty) - like seeing fire; (3) حَقُّ الْيَقِين (truth of certainty) - like being burned by fire, experiencing reality directly. The Quran is described as حق اليقين because for those with insight, its truth is experienced reality, not mere information. This occurs in Surah Al-Waqi'ah too (56:95), framing the Quran's certainty at the highest possible level.", ur: "آیت 51 کا 'حَقُّ الْيَقِينِ' اسلامی علمِ معرفت میں یقین کا بلند ترین درجہ ہے۔ علماء تین درجے بتاتے ہیں: (1) عِلْمُ الْيَقِين - جیسے بتایا جائے کہ آگ جلاتی ہے؛ (2) عَيْنُ الْيَقِين - جیسے آگ دیکھنا؛ (3) حَقُّ الْيَقِين - جیسے آگ میں جلنا، حقیقت کا براہ راست تجربہ۔ قرآن کو حق الیقین کہا گیا کیونکہ بصیرت والوں کے لیے اس کی سچائی محض معلومات نہیں بلکہ تجربہ شدہ حقیقت ہے۔ یہ سورۃ الواقعہ (56:95) میں بھی آتا ہے۔" }
  },

  historicalContext: {
    note: { en: "Revealed in Makkah when the Quraysh were dismissing the Quran as poetry or soothsaying. The surah powerfully refutes this by showing the Quran's consistency, its alignment with previous revelations' messages, and the severe consequences if the Prophet ﷺ had fabricated even one word. The هاء at the end of words (كِتَابِيَهْ، حِسَابِيَهْ، مَالِيَهْ، سُلْطَانِيَهْ) is a pause marker (هاء السكت) that adds solemnity.", ur: "مکہ میں نازل ہوئی جب قریش قرآن کو شاعری یا کہانت کہتے تھے۔ سورت اس کی قوت سے تردید کرتی ہے: قرآن کی ہم آہنگی، سابقہ وحیوں سے مطابقت، اور یہ بتاتی ہے کہ اگر نبی ﷺ نے ایک لفظ بھی گھڑا ہوتا تو کیا ہوتا۔ الفاظ کے آخر میں هاء (كِتَابِيَهْ، حِسَابِيَهْ، مَالِيَهْ) هاء السکت ہے جو سنجیدگی بڑھاتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الْحَاقَّة", example: { en: "Active participle", ur: "اسم فاعل" }, effect: "That which makes truth manifest/inevitable" },
      { feature: "Triple opening", example: { en: "الحاقة، ما الحاقة، وما أدراك", ur: "الحاقہ، کیا ہے الحاقہ، تمہیں کیا معلوم الحاقہ کیا ہے" }, effect: "Rhetorical escalation of awe" },
      { feature: "صَرْصَر", example: { en: "Intensified form", ur: "شدت کا صیغہ" }, effect: "Reduplicated root = intense cold/sound" },
      { feature: "هاء السكت", example: "كتابيهْ، حسابيهْ", effect: "Pause marker adding solemnity" },
      { feature: "الْوَتِين", example: { en: "Aorta", ur: "شہ رگ" }, effect: "Rare anatomical term for life-artery" },
      { feature: "غِسْلِين", example: { en: "Wound discharge", ur: "زخموں کا پیپ" }, effect: "Uniquely graphic Hell-food description" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "69:46", topic: "Anatomy", note: "الْوَتِين (aorta) - cutting it causes instant death; anatomical precision" },
      { verse: "69:7", topic: "Duration", note: "7 nights + 8 days = scientific precision in describing 'Ad's destruction" }
    ]
  }
};

export default ONTOLOGY;
