/**
 * Surah Ar-Rahman (The Most Merciful) - Surah 55
 * Ontology of Quranic Concepts and Relationships
 *
 * Theme: Allah's infinite mercy manifested through countless blessings
 * Unique Feature: 31 repetitions of "Which favors will you deny?"
 * Known as: "The Bride of the Quran" (Arus al-Quran)
 */

export const ONTOLOGY = {
  surahId: 55,
  surahName: "Ar-Rahman",
  surahNameArabic: "الرحمن",
  totalAyahs: 78,
  revelationType: "Medinan",
  mainTheme: { en: "Divine Mercy Manifested Through Countless Blessings", ur: "بے شمار نعمتوں کے ذریعے ظاہر ہونے والی الٰہی رحمت" },

  uniquePoeticStructure: {
    refrain: {
      arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      transliteration: "Fabi-ayyi ala'i Rabbikuma tukazziban",
      meaning: { en: "So which of the favors of your Lord will you deny?", ur: "تو تم اپنے رب کی کون کون سی نعمت جھٹلاؤ گے؟" },
      totalRepetitions: 31,
      ayahsWithRefrain: [13, 16, 18, 21, 23, 25, 28, 30, 32, 34, 36, 38, 40, 42, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77],
      rhetoricalPurpose: { en: "Each repetition challenges jinn and humans to acknowledge blessings; the dual form 'kuma' addresses both species together", ur: "ہر تکرار جنات اور انسانوں کو نعمتوں کا اعتراف کرنے کا چیلنج دیتی ہے؛ تثنیہ 'کما' دونوں مخلوقات کو ایک ساتھ مخاطب کرتا ہے" },
      linguisticNote: { en: "The word آلَاء (ala') is plural of إلى (ily) meaning favors/blessings - a rare plural form emphasizing abundance", ur: "لفظ آلَاء (آلاء) إلى (ایلیٰ) کی جمع ہے جس کا مطلب نعمتیں ہے - ایک نادر جمع کی شکل جو کثرت پر زور دیتی ہے" }
    },
    dualAddress: {
      arabic: "يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ",
      meaning: { en: "O assembly of jinn and mankind", ur: "اے جنات اور انسانوں کی جماعت" },
      note: { en: "Entire surah addresses both jinn and humans together, unique in the Quran", ur: "پوری سورة جنات اور انسانوں دونوں کو ایک ساتھ مخاطب کرتی ہے، قرآن میں منفرد" }
    },
    structure: {
      description: { en: "The surah has a tripartite structure: (1) Blessings in creation, (2) Day of Judgment scenes, (3) Rewards in Paradise", ur: "سورة کا سہ حصہ ڈھانچہ ہے: (1) تخلیق میں نعمتیں، (2) قیامت کے مناظر، (3) جنت کے انعامات" },
      pattern: { en: "Blessings enumerated -> Refrain challenges denial -> More blessings -> Refrain repeats", ur: "نعمتیں گنائی جاتی ہیں ← ترجیع تکذیب کو چیلنج کرتی ہے ← مزید نعمتیں ← ترجیع دہرائی جاتی ہے" }
    }
  },

  categories: {
    divineAttribute: {
      name: "The Most Merciful (Ar-Rahman)",
      nameAr: "صفة الرحمن",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Ar-Rahman", arabic: "الرَّحْمَٰنُ", meaning: { en: "The Most Merciful", ur: "بے حد مہربان" }, explanation: { en: "Opens the surah - Allah's mercy is the source of all blessings", ur: "سورة کا آغاز - اللہ کی رحمت تمام نعمتوں کا سرچشمہ ہے" }, ayahs: [1] },
        { term: "Rabbikuma", arabic: "رَبِّكُمَا", meaning: { en: "Your Lord (dual)", ur: "تم دونوں کا رب (تثنیہ)" }, explanation: { en: "Lord of both jinn and mankind", ur: "جنات اور انسانوں دونوں کا رب" }, ayahs: [13, 16, 18, 21, 23, 25, 28, 30, 32, 34] }
      ]
    },

    teachingQuran: {
      name: "Teaching of the Quran",
      nameAr: "تعليم القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Taught the Quran", arabic: "عَلَّمَ الْقُرْآنَ", meaning: { en: "He taught the Quran", ur: "اس نے قرآن سکھایا" }, explanation: { en: "First blessing mentioned - divine revelation", ur: "پہلی نعمت کا ذکر - الٰہی وحی" }, ayahs: [2] },
        { term: "Created mankind", arabic: "خَلَقَ الْإِنسَانَ", meaning: { en: "He created mankind", ur: "اس نے انسان کو پیدا کیا" }, explanation: { en: "Human creation as blessing", ur: "انسانی تخلیق بطور نعمت" }, ayahs: [3] },
        { term: "Taught expression", arabic: "عَلَّمَهُ الْبَيَانَ", meaning: { en: "Taught him clear expression", ur: "اسے بیان سکھایا" }, explanation: { en: "Gift of speech and communication", ur: "گفتگو اور ابلاغ کی نعمت" }, ayahs: [4] }
      ]
    },

    cosmicOrder: {
      name: "Cosmic Order and Balance",
      nameAr: "النظام الكوني والميزان",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Sun and Moon", arabic: "الشَّمْسُ وَالْقَمَرُ", meaning: { en: "The sun and moon", ur: "سورج اور چاند" }, explanation: { en: "Celestial bodies run by calculation (bi-husban)", ur: "آسمانی اجرام حساب سے چلتے ہیں (بحسبان)" }, ayahs: [5] },
        { term: "By calculation", arabic: "بِحُسْبَانٍ", meaning: { en: "By precise calculation", ur: "درست حساب سے" }, explanation: { en: "Perfect divine mathematics governing universe", ur: "کائنات کو چلانے والی کامل الٰہی ریاضی" }, ayahs: [5] },
        { term: "Stars and trees", arabic: "النَّجْمُ وَالشَّجَرُ", meaning: { en: "The stars (plants) and trees", ur: "تارے (بوٹے) اور درخت" }, explanation: { en: "Both prostrate to Allah - najm can mean stars or stemless plants", ur: "دونوں اللہ کو سجدہ کرتے ہیں - نجم کا مطلب ستارے یا بغیر تنے کے پودے" }, ayahs: [6] },
        { term: "The sky He raised", arabic: "وَالسَّمَاءَ رَفَعَهَا", meaning: { en: "And the heaven He raised", ur: "اور آسمان کو اس نے بلند کیا" }, explanation: { en: "Sky elevated as canopy", ur: "آسمان چھتری کی طرح بلند کیا" }, ayahs: [7] },
        { term: "The balance", arabic: "الْمِيزَانَ", meaning: { en: "The balance/scale", ur: "ترازو/میزان" }, explanation: { en: "Divine justice established in creation", ur: "تخلیق میں الٰہی عدل قائم کیا" }, ayahs: [7, 8, 9] }
      ]
    },

    justiceAndBalance: {
      name: "Justice and Balance",
      nameAr: "العدل والميزان",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "He established balance", arabic: "وَوَضَعَ الْمِيزَانَ", meaning: { en: "And He established the balance", ur: "اور اس نے میزان قائم کی" }, explanation: { en: "Justice as fundamental law", ur: "عدل بنیادی قانون کے طور پر" }, ayahs: [7] },
        { term: "Do not transgress", arabic: "أَلَّا تَطْغَوْا فِي الْمِيزَانِ", meaning: { en: "That you not transgress the balance", ur: "تاکہ تم میزان میں زیادتی نہ کرو" }, explanation: { en: "Command to maintain justice", ur: "عدل قائم رکھنے کا حکم" }, ayahs: [8] },
        { term: "Establish weight justly", arabic: "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ", meaning: { en: "Establish weight in justice", ur: "انصاف کے ساتھ وزن قائم کرو" }, explanation: { en: "Practical application of divine balance", ur: "الٰہی میزان کا عملی اطلاق" }, ayahs: [9] },
        { term: "Do not make short", arabic: "وَلَا تُخْسِرُوا الْمِيزَانَ", meaning: { en: "And do not make deficient the balance", ur: "اور تول میں کمی نہ کرو" }, explanation: { en: "Warning against cheating in measures", ur: "تول میں دھوکے سے تنبیہ" }, ayahs: [9] }
      ]
    },

    earthlyBlessings: {
      name: "Blessings of the Earth",
      nameAr: "نعم الأرض",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "Earth laid for creatures", arabic: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ", meaning: { en: "And the earth He laid for creatures", ur: "اور زمین کو اس نے مخلوقات کے لیے بچھایا" }, explanation: { en: "Earth prepared for all living beings", ur: "زمین تمام جانداروں کے لیے تیار کی" }, ayahs: [10] },
        { term: "Fruits and palms", arabic: "فِيهَا فَاكِهَةٌ وَالنَّخْلُ", meaning: { en: "In it are fruit and palm trees", ur: "اس میں پھل اور کھجور کے درخت ہیں" }, explanation: { en: "Sustenance provisions", ur: "رزق کا سامان" }, ayahs: [11] },
        { term: "Date palms with sheaths", arabic: "ذَاتُ الْأَكْمَامِ", meaning: { en: "Having sheaths", ur: "غلافوں والی" }, explanation: { en: "Protective covering for dates", ur: "کھجوروں کے لیے حفاظتی غلاف" }, ayahs: [11] },
        { term: "Grain with husks", arabic: "وَالْحَبُّ ذُو الْعَصْفِ", meaning: { en: "And grain having husks", ur: "اور بھوسے والا اناج" }, explanation: { en: "Staple food provision", ur: "بنیادی غذائی رزق" }, ayahs: [12] },
        { term: "Fragrant plants", arabic: "وَالرَّيْحَانُ", meaning: { en: "And sweet-scented plants", ur: "اور خوشبودار پودے" }, explanation: { en: "Aromatic herbs as blessing", ur: "خوشبودار جڑی بوٹیاں بطور نعمت" }, ayahs: [12] }
      ]
    },

    creationOfBeings: {
      name: "Creation of Jinn and Humans",
      nameAr: "خلق الجن والإنس",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Created man from clay", arabic: "خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ", meaning: { en: "He created man from clay like pottery", ur: "اس نے انسان کو کھنکھناتی مٹی سے بنایا" }, explanation: { en: "Human origin from dried clay", ur: "خشک مٹی سے انسانی اصل" }, ayahs: [14] },
        { term: "Like pottery", arabic: "كَالْفَخَّارِ", meaning: { en: "Like baked pottery", ur: "ٹھیکرے کی طرح" }, explanation: { en: "Sounding clay when struck", ur: "ٹھوکنے پر آواز دینے والی مٹی" }, ayahs: [14] },
        { term: "Created jinn from fire", arabic: "وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ", meaning: { en: "And created jinn from smokeless flame", ur: "اور جنات کو بے دھویں کی آگ سے بنایا" }, explanation: { en: "Jinn origin from fire", ur: "جنات کی اصل آگ سے ہے" }, ayahs: [15] },
        { term: "Smokeless flame", arabic: "مَّارِجٍ مِّن نَّارٍ", meaning: { en: "A smokeless flame of fire", ur: "آگ کا بے دھویں شعلہ" }, explanation: { en: "Pure, penetrating fire", ur: "خالص، نافذ آگ" }, ayahs: [15] }
      ]
    },

    divineAuthority: {
      name: "Divine Authority Over All",
      nameAr: "ربوبية الله",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Lord of two Easts", arabic: "رَبُّ الْمَشْرِقَيْنِ", meaning: { en: "Lord of the two Easts", ur: "دونوں مشرقوں کا رب" }, explanation: { en: "Summer and winter sunrise points", ur: "گرمیوں اور سردیوں میں سورج نکلنے کے مقامات" }, ayahs: [17] },
        { term: "Lord of two Wests", arabic: "وَرَبُّ الْمَغْرِبَيْنِ", meaning: { en: "Lord of the two Wests", ur: "دونوں مغربوں کا رب" }, explanation: { en: "Summer and winter sunset points", ur: "گرمیوں اور سردیوں میں سورج ڈوبنے کے مقامات" }, ayahs: [17] }
      ]
    },

    twoSeas: {
      name: "The Two Seas",
      nameAr: "البحران",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Released two seas", arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ", meaning: { en: "He released the two seas meeting", ur: "اس نے دو سمندر چھوڑے جو آپس میں ملتے ہیں" }, explanation: { en: "Salt and fresh water meeting", ur: "نمکین اور میٹھے پانی کا ملنا" }, ayahs: [19] },
        { term: "Barrier between them", arabic: "بَيْنَهُمَا بَرْزَخٌ", meaning: { en: "Between them is a barrier", ur: "ان کے درمیان ایک آڑ ہے" }, explanation: { en: "Natural separation maintained", ur: "قدرتی علیحدگی قائم رہتی ہے" }, ayahs: [20] },
        { term: "Neither transgresses", arabic: "لَّا يَبْغِيَانِ", meaning: { en: "They do not transgress", ur: "نہ وہ ایک دوسرے پر غالب آتے ہیں" }, explanation: { en: "Each stays in its bounds", ur: "ہر ایک اپنی حد میں رہتا ہے" }, ayahs: [20] },
        { term: "Pearls and coral", arabic: "اللُّؤْلُؤُ وَالْمَرْجَانُ", meaning: { en: "Pearls and coral", ur: "موتی اور مونگا" }, explanation: { en: "Treasures from the seas", ur: "سمندروں سے خزانے" }, ayahs: [22] },
        { term: "Ships like mountains", arabic: "الْجَوَارِ الْمُنشَآتُ", meaning: { en: "Ships elevated in the sea", ur: "سمندر میں بلند ہوتے جہاز" }, explanation: { en: "Sailing vessels as blessings", ur: "بحری جہاز بطور نعمت" }, ayahs: [24] },
        { term: "Like mountains", arabic: "كَالْأَعْلَامِ", meaning: { en: "Like mountains/landmarks", ur: "پہاڑوں/نشانیوں کی طرح" }, explanation: { en: "Ships towering on water", ur: "پانی پر بلند ہوتے جہاز" }, ayahs: [24] }
      ]
    },

    mortality: {
      name: "Mortality and Divine Permanence",
      nameAr: "الفناء والبقاء",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "All upon earth perishes", arabic: "كُلُّ مَنْ عَلَيْهَا فَانٍ", meaning: { en: "Everyone upon earth will perish", ur: "زمین پر ہر کوئی فانی ہے" }, explanation: { en: "Universal mortality", ur: "آفاقی فانی ہونا" }, ayahs: [26] },
        { term: "Face of your Lord remains", arabic: "وَيَبْقَىٰ وَجْهُ رَبِّكَ", meaning: { en: "And there will remain the Face of your Lord", ur: "اور تیرے رب کی ذات باقی رہے گی" }, explanation: { en: "Only Allah is eternal", ur: "صرف اللہ ابدی ہے" }, ayahs: [27] },
        { term: "Owner of Majesty and Honor", arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ", meaning: { en: "Owner of Majesty and Honor", ur: "جلال اور اکرام والا" }, explanation: { en: "Divine attributes of grandeur", ur: "عظمت کی الٰہی صفات" }, ayahs: [27, 78] }
      ]
    },

    dependenceOnAllah: {
      name: "Creation's Dependence",
      nameAr: "افتقار المخلوقات",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "All ask Him", arabic: "يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Whoever is in heavens and earth asks Him", ur: "آسمانوں اور زمین میں جو بھی ہے اس سے مانگتا ہے" }, explanation: { en: "Universal dependence on Allah", ur: "اللہ پر آفاقی انحصار" }, ayahs: [29] },
        { term: "Every day He is bringing about", arabic: "كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ", meaning: { en: "Every day He is upon some affair", ur: "ہر دن وہ ایک نئے کام میں ہے" }, explanation: { en: "Continuous divine activity", ur: "مسلسل الٰہی سرگرمی" }, ayahs: [29] }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameAr: "يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "We will attend to you", arabic: "سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ", meaning: { en: "We will attend to you, O two burdens", ur: "اے دونوں بھاری مخلوقو! ہم عنقریب تمہاری طرف متوجہ ہوں گے" }, explanation: { en: "Allah will judge jinn and humans", ur: "اللہ جنات اور انسانوں کا فیصلہ کرے گا" }, ayahs: [31] },
        { term: "Two burdens (Thaqalan)", arabic: "الثَّقَلَانِ", meaning: { en: "The two weighty ones", ur: "دو بھاری مخلوقات" }, explanation: { en: "Jinn and humans - weighty in importance", ur: "جنات اور انسان - اہمیت میں وزنی" }, ayahs: [31] },
        { term: "If you can pass beyond", arabic: "إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا", meaning: { en: "If you are able to pass beyond", ur: "اگر تم نکل سکتے ہو" }, explanation: { en: "Challenge to escape Allah's domain", ur: "اللہ کے دائرے سے فرار کا چیلنج" }, ayahs: [33] },
        { term: "Regions of heavens and earth", arabic: "مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "From the regions of heavens and earth", ur: "آسمانوں اور زمین کے کناروں سے" }, explanation: { en: "No escape possible", ur: "فرار ممکن نہیں" }, ayahs: [33] },
        { term: "Only with authority", arabic: "لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ", meaning: { en: "You cannot pass except by authority", ur: "تم بغیر اختیار نہیں نکل سکتے" }, explanation: { en: "Divine permission required", ur: "الٰہی اجازت ضروری ہے" }, ayahs: [33] },
        { term: "Flame of fire and smoke", arabic: "شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ", meaning: { en: "Flame of fire and smoke", ur: "آگ کا شعلہ اور دھواں" }, explanation: { en: "Sent upon those who try to escape", ur: "فرار ہونے والوں پر بھیجا جائے گا" }, ayahs: [35] },
        { term: "Sky splits open", arabic: "فَإِذَا انشَقَّتِ السَّمَاءُ", meaning: { en: "When the heaven splits open", ur: "جب آسمان پھٹ جائے گا" }, explanation: { en: "Cosmic destruction at end times", ur: "آخری وقت میں کائناتی تباہی" }, ayahs: [37] },
        { term: "Like rose-colored oil", arabic: "فَكَانَتْ وَرْدَةً كَالدِّهَانِ", meaning: { en: "Becoming rose-colored like oil", ur: "گلاب جیسا سرخ تیل کی طرح ہو جائے گا" }, explanation: { en: "Sky transforms in color", ur: "آسمان رنگ بدل لے گا" }, ayahs: [37] }
      ]
    },

    sinnersOnJudgment: {
      name: "Criminals on Judgment Day",
      nameAr: "المجرمون يوم القيامة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Criminals known by marks", arabic: "يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ", meaning: { en: "Criminals will be known by their marks", ur: "مجرم اپنی نشانیوں سے پہچانے جائیں گے" }, explanation: { en: "No hiding identity", ur: "شناخت چھپانا ممکن نہیں" }, ayahs: [41] },
        { term: "Seized by forelocks and feet", arabic: "فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ", meaning: { en: "Seized by forelocks and feet", ur: "پیشانیوں اور پاؤں سے پکڑے جائیں گے" }, explanation: { en: "Dragged to punishment", ur: "سزا کی طرف گھسیٹے جائیں گے" }, ayahs: [41] },
        { term: "This is Hell denied", arabic: "هَٰذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ", meaning: { en: "This is Hell which criminals denied", ur: "یہ وہ جہنم ہے جسے مجرم جھٹلاتے تھے" }, explanation: { en: "Confrontation with denied reality", ur: "جھٹلائی ہوئی حقیقت سے سامنا" }, ayahs: [43] },
        { term: "Between it and boiling water", arabic: "يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ آنٍ", meaning: { en: "They will circulate between it and scalding water", ur: "وہ اس (آگ) اور کھولتے پانی کے درمیان چکر لگائیں گے" }, explanation: { en: "Alternating torments", ur: "باری باری عذاب" }, ayahs: [44] }
      ]
    },

    twoGardensFirst: {
      name: "Two Gardens (First Pair)",
      nameAr: "الجنتان الأولى",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Two gardens", arabic: "جَنَّتَانِ", meaning: { en: "Two gardens", ur: "دو باغ" }, explanation: { en: "For those who feared standing before their Lord", ur: "ان کے لیے جو اپنے رب کے سامنے کھڑے ہونے سے ڈرتے تھے" }, ayahs: [46] },
        { term: "Who feared his Lord's standing", arabic: "لِمَنْ خَافَ مَقَامَ رَبِّهِ", meaning: { en: "For whoever feared the standing before his Lord", ur: "جو اپنے رب کے سامنے کھڑے ہونے سے ڈرا" }, explanation: { en: "Qualification for entry", ur: "داخلے کی شرط" }, ayahs: [46] },
        { term: "Both of spreading branches", arabic: "ذَوَاتَا أَفْنَانٍ", meaning: { en: "Having spreading branches", ur: "پھیلی ہوئی شاخوں والے" }, explanation: { en: "Lush vegetation", ur: "گھنی سبزہ زاری" }, ayahs: [48] },
        { term: "Two flowing springs", arabic: "فِيهِمَا عَيْنَانِ تَجْرِيَانِ", meaning: { en: "In both are two flowing springs", ur: "ان دونوں میں دو بہتے چشمے ہیں" }, explanation: { en: "Ever-flowing water", ur: "ہمیشہ بہتا پانی" }, ayahs: [50] },
        { term: "Every fruit in pairs", arabic: "فِيهِمَا مِن كُلِّ فَاكِهَةٍ زَوْجَانِ", meaning: { en: "In both of every fruit are two kinds", ur: "ان دونوں میں ہر پھل کی دو قسمیں ہیں" }, explanation: { en: "Variety and abundance", ur: "تنوع اور فراوانی" }, ayahs: [52] },
        { term: "Reclining on brocade linings", arabic: "مُتَّكِئِينَ عَلَىٰ فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ", meaning: { en: "Reclining on beds whose linings are of brocade", ur: "ریشمی استر والے بستروں پر ٹیک لگائے" }, explanation: { en: "Luxurious furnishing", ur: "شاندار ساز و سامان" }, ayahs: [54] },
        { term: "Fruits hanging near", arabic: "وَجَنَى الْجَنَّتَيْنِ دَانٍ", meaning: { en: "And the fruit of both gardens hanging near", ur: "اور دونوں باغوں کے پھل قریب لٹک رہے ہیں" }, explanation: { en: "Easy access to fruits", ur: "پھلوں تک آسان رسائی" }, ayahs: [54] }
      ]
    },

    companionsOfParadise: {
      name: "Companions in Paradise",
      nameAr: "حور الجنة",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Modest of glance", arabic: "قَاصِرَاتُ الطَّرْفِ", meaning: { en: "Limiting/restraining their glances", ur: "نگاہیں نیچی رکھنے والیاں" }, explanation: { en: "Modest companions", ur: "حیادار ساتھی" }, ayahs: [56, 72] },
        { term: "Untouched before", arabic: "لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ", meaning: { en: "Untouched by man or jinn before", ur: "ان سے پہلے کسی انسان یا جن نے ہاتھ نہیں لگایا" }, explanation: { en: "Pure companions", ur: "پاکیزہ ساتھی" }, ayahs: [56, 74] },
        { term: "Like rubies and coral", arabic: "كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ", meaning: { en: "As if they were rubies and coral", ur: "گویا وہ یاقوت اور مرجان ہیں" }, explanation: { en: "Beautiful and precious", ur: "خوبصورت اور قیمتی" }, ayahs: [58] },
        { term: "Good and beautiful", arabic: "حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ", meaning: { en: "Fair ones reserved in pavilions", ur: "حوریں خیموں میں محفوظ" }, explanation: { en: "Hur in pavilions", ur: "خیموں میں حوریں" }, ayahs: [72] }
      ]
    },

    twoGardensSecond: {
      name: "Two Gardens (Second Pair)",
      nameAr: "الجنتان الأخرى",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Besides these two", arabic: "وَمِن دُونِهِمَا جَنَّتَانِ", meaning: { en: "And besides them are two gardens", ur: "اور ان دونوں کے علاوہ دو اور باغ ہیں" }, explanation: { en: "Additional pair of gardens", ur: "باغوں کا اضافی جوڑا" }, ayahs: [62] },
        { term: "Dark green", arabic: "مُدْهَامَّتَانِ", meaning: { en: "Dark green in color", ur: "گہرے سبز رنگ کے" }, explanation: { en: "Intensely green gardens", ur: "شدید سبز باغات" }, ayahs: [64] },
        { term: "Two gushing springs", arabic: "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ", meaning: { en: "In both are two gushing springs", ur: "ان دونوں میں دو ابلتے چشمے ہیں" }, explanation: { en: "Abundant water", ur: "پانی کی فراوانی" }, ayahs: [66] },
        { term: "Fruit, palms, pomegranates", arabic: "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ", meaning: { en: "In both are fruit, palm trees, and pomegranates", ur: "ان دونوں میں پھل، کھجور اور انار ہیں" }, explanation: { en: "Specific fruits mentioned", ur: "مخصوص پھلوں کا ذکر" }, ayahs: [68] },
        { term: "Good and beautiful", arabic: "فِيهِنَّ خَيْرَاتٌ حِسَانٌ", meaning: { en: "In them are good and beautiful ones", ur: "ان میں نیک اور خوبصورت ہیں" }, explanation: { en: "Companions of excellence", ur: "اعلیٰ ساتھی" }, ayahs: [70] },
        { term: "Reclining on green cushions", arabic: "مُتَّكِئِينَ عَلَىٰ رَفْرَفٍ خُضْرٍ", meaning: { en: "Reclining on green cushions", ur: "سبز تکیوں پر ٹیک لگائے" }, explanation: { en: "Comfortable seating", ur: "آرام دہ بیٹھک" }, ayahs: [76] },
        { term: "Fine carpets", arabic: "وَعَبْقَرِيٍّ حِسَانٍ", meaning: { en: "And fine beautiful carpets", ur: "اور خوبصورت قالین" }, explanation: { en: "Luxurious flooring", ur: "شاندار فرش" }, ayahs: [76] }
      ]
    },

    rewardOfGoodness: {
      name: "Reward Principle",
      nameAr: "جزاء الإحسان",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Reward for good is good", arabic: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانِ", meaning: { en: "Is the reward for good anything but good?", ur: "کیا احسان کا بدلہ احسان کے سوا کچھ ہے؟" }, explanation: { en: "Fundamental principle of divine justice", ur: "الٰہی عدل کا بنیادی اصول" }, ayahs: [60] }
      ]
    },

    closingGlory: {
      name: "Closing Glory",
      nameAr: "الختام المجيد",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Blessed is the name", arabic: "تَبَارَكَ اسْمُ رَبِّكَ", meaning: { en: "Blessed is the name of your Lord", ur: "تیرے رب کا نام بابرکت ہے" }, explanation: { en: "Final praise", ur: "آخری حمد" }, ayahs: [78] },
        { term: "Owner of Majesty and Honor", arabic: "ذِي الْجَلَالِ وَالْإِكْرَامِ", meaning: { en: "Owner of Majesty and Honor", ur: "جلال اور اکرام والا" }, explanation: { en: "Divine attributes closing the surah", ur: "سورة ختم کرنے والی الٰہی صفات" }, ayahs: [78] }
      ]
    }
  },

  refrainPattern: {
    description: { en: "The 31 repetitions of the refrain 'Which favors will you deny?' create a powerful rhetorical rhythm", ur: "'تم کون سی نعمت جھٹلاؤ گے؟' کی 31 تکرار ایک طاقتور بلاغتی تال بناتی ہیں" },
    pattern: [
      { section: "Creation blessings (1-12)", refrainAfter: 13, count: "1st" },
      { section: "Human and jinn creation (14-15)", refrainAfter: 16, count: "2nd" },
      { section: "Two Easts and Wests (17)", refrainAfter: 18, count: "3rd" },
      { section: "Two seas (19-20)", refrainAfter: 21, count: "4th" },
      { section: "Pearls and coral (22)", refrainAfter: 23, count: "5th" },
      { section: "Ships (24)", refrainAfter: 25, count: "6th" },
      { section: "Mortality and permanence (26-27)", refrainAfter: 28, count: "7th" },
      { section: "All ask Him (29)", refrainAfter: 30, count: "8th" },
      { section: "Judgment announced (31)", refrainAfter: 32, count: "9th" },
      { section: "Cannot escape (33)", refrainAfter: 34, count: "10th" },
      { section: "Flame sent (35)", refrainAfter: 36, count: "11th" },
      { section: "Sky splits (37)", refrainAfter: 38, count: "12th" },
      { section: "No questioning about sins (39)", refrainAfter: 40, count: "13th" },
      { section: "Criminals seized (41)", refrainAfter: 42, count: "14th" },
      { section: "Hell shown (43-44)", refrainAfter: 45, count: "15th" },
      { section: "Two gardens announced (46)", refrainAfter: 47, count: "16th" },
      { section: "Gardens' branches (48)", refrainAfter: 49, count: "17th" },
      { section: "Two springs (50)", refrainAfter: 51, count: "18th" },
      { section: "Every fruit in pairs (52)", refrainAfter: 53, count: "19th" },
      { section: "Reclining, fruits near (54)", refrainAfter: 55, count: "20th" },
      { section: "Modest companions (56)", refrainAfter: 57, count: "21st" },
      { section: "Like rubies and coral (58)", refrainAfter: 59, count: "22nd" },
      { section: "Reward for good (60)", refrainAfter: 61, count: "23rd" },
      { section: "Two more gardens (62)", refrainAfter: 63, count: "24th" },
      { section: "Dark green (64)", refrainAfter: 65, count: "25th" },
      { section: "Two gushing springs (66)", refrainAfter: 67, count: "26th" },
      { section: "Fruits detailed (68)", refrainAfter: 69, count: "27th" },
      { section: "Good and beautiful (70)", refrainAfter: 71, count: "28th" },
      { section: "Hur in pavilions (72)", refrainAfter: 73, count: "29th" },
      { section: "Untouched companions (74)", refrainAfter: 75, count: "30th" },
      { section: "Green cushions, carpets (76)", refrainAfter: 77, count: "31st" }
    ]
  },

  relationships: [
    { from: "Ar-Rahman", to: "Teaching Quran", type: "manifestation", description: { en: "Mercy manifests first in revelation", ur: "رحمت سب سے پہلے وحی میں ظاہر ہوتی ہے" } },
    { from: "Teaching Quran", to: "Creating Human", type: "sequence", description: { en: "Knowledge before mentioning creation", ur: "تخلیق کے ذکر سے پہلے علم" } },
    { from: "Balance (Mizan)", to: "Justice Command", type: "divine_law", description: { en: "Cosmic balance demands human justice", ur: "کائناتی میزان انسانی عدل کا تقاضا کرتی ہے" } },
    { from: "Clay Creation", to: "Fire Creation", type: "contrast", description: { en: "Human from clay, jinn from fire", ur: "انسان مٹی سے، جنات آگ سے" } },
    { from: "Two Seas", to: "Barrier Between", type: "divine_separation", description: { en: "Allah maintains natural boundaries", ur: "اللہ قدرتی حدود قائم رکھتا ہے" } },
    { from: "All Perishes", to: "Face of Lord Remains", type: "contrast", description: { en: "Creation temporary, Creator eternal", ur: "مخلوق فانی، خالق ابدی" } },
    { from: "Feared His Lord", to: "Two Gardens", type: "reward", description: { en: "Fear leads to Paradise", ur: "خوفِ خدا جنت کی طرف لے جاتا ہے" } },
    { from: "Ihsan (Good)", to: "Ihsan (Reward)", type: "principle", description: { en: "Good deeds receive good reward", ur: "نیک اعمال کو نیک بدلہ ملتا ہے" } },
    { from: "First Two Gardens", to: "Second Two Gardens", type: "additional", description: { en: "More rewards upon rewards", ur: "انعامات پر مزید انعامات" } },
    { from: "Each Blessing", to: "Refrain Challenge", type: "rhetorical", description: { en: "Blessing followed by challenge to deny", ur: "نعمت کے بعد جھٹلانے کا چیلنج" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Mercy to Eternal Rewards", ur: "الٰہی رحمت سے ابدی انعامات تک" },
    stages: [
      { name: "Divine Mercy Proclaimed", ayahs: [1, 2, 3, 4], description: { en: "Ar-Rahman, Quran, human, speech", ur: "الرحمن، قرآن، انسان، بیان" } },
      { name: "Cosmic Order", ayahs: [5, 6, 7, 8, 9], description: { en: "Sun, moon, stars, trees, balance", ur: "سورج، چاند، ستارے، درخت، میزان" } },
      { name: "Earthly Provisions", ayahs: [10, 11, 12, 13], description: { en: "Earth, fruits, grains, herbs", ur: "زمین، پھل، اناج، جڑی بوٹیاں" } },
      { name: "Creation of Two Kinds", ayahs: [14, 15, 16], description: { en: "Humans from clay, jinn from fire", ur: "انسان مٹی سے، جنات آگ سے" } },
      { name: "Divine Lordship", ayahs: [17, 18], description: { en: "Lord of two Easts and Wests", ur: "دونوں مشرقوں اور مغربوں کا رب" } },
      { name: "The Two Seas", ayahs: [19, 20, 21, 22, 23, 24, 25], description: { en: "Seas, barrier, pearls, ships", ur: "سمندر، آڑ، موتی، جہاز" } },
      { name: "Mortality vs Eternity", ayahs: [26, 27, 28, 29, 30], description: { en: "All perish, Allah remains", ur: "سب فانی، اللہ باقی" } },
      { name: "Judgment Announced", ayahs: [31, 32, 33, 34, 35, 36], description: { en: "Two burdens judged, no escape", ur: "دونوں مخلوقات کا حساب، فرار نہیں" } },
      { name: "Cosmic Destruction", ayahs: [37, 38, 39, 40], description: { en: "Sky splits, no questioning", ur: "آسمان پھٹے گا، سوال نہیں ہو گا" } },
      { name: "Criminals' Fate", ayahs: [41, 42, 43, 44, 45], description: { en: "Seized, Hell, boiling water", ur: "پکڑے گئے، جہنم، کھولتا پانی" } },
      { name: "First Paradise Pair", ayahs: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], description: { en: "Two gardens for those who feared", ur: "ڈرنے والوں کے لیے دو باغ" } },
      { name: "Second Paradise Pair", ayahs: [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77], description: { en: "Two more gardens, dark green", ur: "دو مزید باغ، گہرے سبز" } },
      { name: "Divine Glory Closing", ayahs: [78], description: { en: "Blessed is the Name of your Lord", ur: "تیرے رب کا نام بابرکت ہے" } }
    ]
  },

  uniqueInsight: {
    title: { en: "The Bride of the Quran", ur: "قرآن کی دلہن (عروس القرآن)" },
    insight: { en: "Surah Ar-Rahman is called 'The Bride of the Quran' because of its exceptional beauty, rhythm, and adornment of meanings. The Prophet (peace be upon him) recited it to the jinn, and when he reached each refrain 'Which favors will you deny?', the jinn responded 'None of Your favors do we deny, our Lord!' This surah uniquely addresses both jinn and humans together 31 times, creating a courtroom-like atmosphere where every blessing is presented as evidence, and the audience is challenged to deny. The dual form in Arabic (tukazziban - you two deny) is grammatically significant, addressing jinn and humans as a pair throughout. The progression from worldly blessings to Judgment Day to Paradise creates a complete arc of divine mercy - from earthly sustenance to eternal reward.", ur: "سورة الرحمن کو 'قرآن کی دلہن' (عروس القرآن) کہا جاتا ہے اس کی غیر معمولی خوبصورتی، تال اور معانی کی آرائش کی وجہ سے۔ نبی صلی اللہ علیہ وسلم نے اسے جنات کو سنایا اور جب ہر ترجیع 'تم کون سی نعمت جھٹلاؤ گے؟' پر پہنچے تو جنات نے جواب دیا 'ہمارے رب! ہم تیری کسی نعمت کو نہیں جھٹلاتے!' یہ سورة منفرد طور پر جنات اور انسانوں دونوں کو 31 بار ایک ساتھ مخاطب کرتی ہے اور ایک عدالتی ماحول بناتی ہے جہاں ہر نعمت بطور ثبوت پیش کی جاتی ہے اور سامعین کو جھٹلانے کا چیلنج دیا جاتا ہے۔ عربی میں تثنیہ (تُكَذِّبَانِ) نحوی طور پر اہم ہے، پوری سورة میں جنات اور انسانوں کو ایک جوڑے کے طور پر مخاطب کرتی ہے۔" },
    arabicTerm: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    rootMeaning: { en: "أ-ل-و (ala') means favor/blessing; the form آلَاء is a plural of paucity used for great multitudes, suggesting countless uncountable blessings", ur: "أ-ل-و (آلاء) کا مطلب نعمت ہے؛ آلَاء جمعِ قلت کی شکل ہے جو بہت بڑی تعداد کے لیے استعمال ہوتی ہے، بے شمار نعمتوں کا اشارہ" },
    keyAyah: 13
  },

  historicalContext: {
    revelationPeriod: "Medinan (majority view), some say Makkan",
    occasion: { en: "Revealed to enumerate Allah's countless blessings to both jinn and humans, establishing the proof against those who deny. The Prophet (peace be upon him) recited it publicly in Makkah to both humans and jinn, demonstrating its universal address.", ur: "جنات اور انسانوں دونوں کے لیے اللہ کی بے شمار نعمتیں گنوانے کے لیے نازل ہوئی، منکرین کے خلاف حجت قائم کرتی ہے۔ نبی صلی اللہ علیہ وسلم نے اسے مکہ میں انسانوں اور جنات دونوں کو علانیہ سنایا۔" },
    note: { en: "This is the only surah that begins with a divine name (Ar-Rahman) rather than letters or praise. The name Ar-Rahman was so significant that some Makkans initially rejected it, not recognizing this attribute of Allah. The surah systematically builds the case for gratitude by listing blessing after blessing, then challenging denial after each.", ur: "یہ واحد سورة ہے جو حروف یا حمد کی بجائے الٰہی نام (الرحمن) سے شروع ہوتی ہے۔ نام الرحمن اتنا اہم تھا کہ بعض مکہ والوں نے ابتدا میں اسے رد کیا کیونکہ وہ اللہ کی اس صفت کو نہیں پہچانتے تھے۔ سورة منظم طریقے سے نعمت کے بعد نعمت گنا کر شکر کا مقدمہ بناتی ہے، پھر ہر ایک کے بعد تکذیب کا چیلنج دیتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Unique Opening", description: "الرَّحْمَٰنُ", example: { en: "Begins with divine name alone", ur: "صرف الٰہی نام سے شروع ہوتی ہے" }, ayah: 1 },
      { name: "Dual Form Throughout", description: "تُكَذِّبَانِ", example: { en: "Addresses two groups (jinn and humans)", ur: "دو گروہوں (جنات اور انسانوں) کو مخاطب" }, pattern: "31 times" },
      { name: "Refrain Structure", description: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", example: { en: "Repeated 31 times", ur: "31 بار دہرایا گیا" }, pattern: "After each blessing or theme" },
      { name: "Phonetic Beauty", description: "Rhyming endings in -an", example: { en: "الرَّحْمَٰنُ - الْقُرْآنَ - الْإِنسَانَ - الْبَيَانَ", ur: "الرَّحْمَٰنُ - الْقُرْآنَ - الْإِنسَانَ - الْبَيَانَ" }, ayahs: [1, 2, 3, 4] },
      { name: "Parallel Structure", description: "Pairs throughout", example: { en: "Two seas, two gardens, two springs, two kinds of fruit", ur: "دو سمندر، دو باغ، دو چشمے، دو قسم کے پھل" }, pattern: "Duality theme" },
      { name: "Rhetorical Question", description: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانِ", example: { en: "Is reward for good but good?", ur: "احسان کا بدلہ احسان کے سوا کیا ہے؟" }, ayah: 60 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 56, name: "Al-Waqi'ah", relationship: { en: "Both describe Paradise in vivid detail", ur: "دونوں جنت کو واضح تفصیل سے بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 1, name: "Al-Fatiha", relationship: { en: "Ar-Rahman is divine name from opening surah", ur: "الرحمن سورة فاتحہ کا الٰہی نام ہے" }, type: "name_connection" },
      { surah: 76, name: "Al-Insan", relationship: { en: "Both describe Paradise rewards elaborately", ur: "دونوں جنت کے انعامات کی تفصیل بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 54, name: "Al-Qamar", relationship: { en: "Preceding surah; contrasts with stories of punishment", ur: "پچھلی سورة؛ عذاب کے واقعات سے تقابل" }, type: "sequential_relationship" },
      { surah: 67, name: "Al-Mulk", relationship: { en: "Both challenge to find flaws in creation", ur: "دونوں تخلیق میں نقص ڈھونڈنے کا چیلنج دیتی ہیں" }, type: "thematic_parallel" },
      { surah: 25, name: "Al-Furqan", relationship: { en: "Also emphasizes Ar-Rahman's attributes", ur: "الرحمن کی صفات پر بھی زور دیتی ہے" }, type: "thematic_parallel" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Recognize blessings", ur: "نعمتوں کو پہچانو" }, how: { en: "Pause at each refrain and count your blessings", ur: "ہر ترجیع پر رکو اور اپنی نعمتیں گنو" }, verse: "55:13" },
      { principle: { en: "Fear standing before Allah", ur: "اللہ کے سامنے کھڑے ہونے سے ڈرو" }, how: { en: "This is the key to attaining Paradise gardens", ur: "یہ جنت کے باغات حاصل کرنے کی کلید ہے" }, verse: "55:46" },
      { principle: { en: "Maintain justice (balance)", ur: "عدل (میزان) قائم رکھو" }, how: { en: "Be fair in all dealings, do not cheat", ur: "ہر معاملے میں انصاف کرو، دھوکا نہ دو" }, verse: "55:8-9" },
      { principle: { en: "Remember mortality", ur: "فانی ہونا یاد رکھو" }, how: { en: "All perish except Allah - don't attach to dunya", ur: "اللہ کے سوا سب فانی ہے - دنیا سے نہ لپٹو" }, verse: "55:26-27" },
      { principle: { en: "Good deserves good", ur: "نیکی نیکی کی مستحق ہے" }, how: { en: "Do ihsan (excellence) and expect ihsan in return", ur: "احسان (عمدگی) کرو اور بدلے میں احسان کی توقع رکھو" }, verse: "55:60" },
      { principle: { en: "Both species accountable", ur: "دونوں مخلوقات جوابدہ ہیں" }, how: { en: "Jinn and humans alike will be judged", ur: "جنات اور انسان دونوں کا حساب ہو گا" }, verse: "55:31" }
    ]
  },

  virtue: {
    hadith: { en: "The Prophet (peace be upon him) said: 'Everything has a bride, and the bride of the Quran is Surah Ar-Rahman.' (Bayhaqi)", ur: "نبی صلی اللہ علیہ وسلم نے فرمایا: 'ہر چیز کی ایک دلہن ہوتی ہے اور قرآن کی دلہن سورة الرحمن ہے۔' (بیہقی)" },
    narration: { en: "Ali (may Allah be pleased with him) reported that when the Prophet recited this surah to the Companions, they remained silent. He said: 'The jinn responded better than you! Whenever I recited the refrain, they said: Nothing of Your favors do we deny, our Lord!'", ur: "حضرت علی رضی اللہ عنہ نے روایت کیا کہ جب نبی صلی اللہ علیہ وسلم نے صحابہ کو یہ سورة سنائی تو وہ خاموش رہے۔ آپ نے فرمایا: 'جنات نے تم سے بہتر جواب دیا! جب بھی میں نے ترجیع پڑھی، انہوں نے کہا: ہمارے رب! ہم تیری کسی نعمت کو نہیں جھٹلاتے!'" },
    recommendedRecitation: { en: "Recite with reflection on each blessing mentioned, responding to each refrain with gratitude", ur: "ہر ذکر شدہ نعمت پر غور کرتے ہوئے تلاوت کرو، ہر ترجیع کا شکر کے ساتھ جواب دو" }
  }
};

export default ONTOLOGY;
