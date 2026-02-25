/**
 * Surah An-Nahl (16) - Ontology of Quranic Concepts
 * The Bee - 128 Ayahs, Makki
 * Theme: Divine blessings enumeration, signs in nature, justice and kindness, gratitude
 */

export const ONTOLOGY = {
  surahId: 16,
  surahName: "An-Nahl",
  surahNameArabic: "النحل",
  revelationType: "Makki",
  totalAyahs: 128,

  categories: {
    divineDecree: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Decree & Command",
      nameArabic: "أمر الله",
      concepts: [
        { term: "أَتَىٰ أَمْرُ اللَّهِ", meaning: { en: "The command of Allah is coming", ur: "اللہ کا حکم آ رہا ہے" }, explanation: { en: "Opening declaration - Day of Judgment is certain", ur: "افتتاحی اعلان - قیامت کا دن یقینی ہے" }, verseRef: "16:1" },
        { term: "فَلَا تَسْتَعْجِلُوهُ", meaning: { en: "So do not hasten it", ur: "پس اس کی جلدی نہ کرو" }, explanation: { en: "Warning against demanding punishment prematurely", ur: "وقت سے پہلے عذاب کے مطالبے سے خبردار" }, verseRef: "16:1" },
        { term: "سُبْحَانَهُ وَتَعَالَىٰ", meaning: { en: "Exalted is He and high above", ur: "پاک ہے وہ اور بلند و برتر" }, explanation: { en: "Allah transcends all partners", ur: "اللہ تمام شریکوں سے پاک ہے" }, verseRef: "16:1" }
      ]
    },

    propheticRevelation: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Revelation & Prophets",
      nameArabic: "الوحي والرسل",
      concepts: [
        { term: "يُنَزِّلُ الْمَلَائِكَةَ بِالرُّوحِ", meaning: { en: "He sends down angels with the spirit/revelation", ur: "وہ فرشتوں کو روح/وحی کے ساتھ نازل کرتا ہے" }, explanation: { en: "Divine method of guidance through angels", ur: "فرشتوں کے ذریعے ہدایت کا الٰہی طریقہ" }, verseRef: "16:2" },
        { term: "أَنْ أَنذِرُوا", meaning: { en: "Warn that", ur: "خبردار کرو کہ" }, explanation: { en: "Core prophetic mission - warning of monotheism", ur: "نبوت کا بنیادی مشن - توحید کی تنبیہ" }, verseRef: "16:2" },
        { term: "لَا إِلَٰهَ إِلَّا أَنَا فَاتَّقُونِ", meaning: { en: "There is no deity except Me, so fear Me", ur: "میرے سوا کوئی معبود نہیں پس مجھ سے ڈرو" }, explanation: { en: "Central message of all prophets", ur: "تمام انبیاء کا مرکزی پیغام" }, verseRef: "16:2" },
        { term: "وَمَا أَرْسَلْنَا مِن قَبْلِكَ", meaning: { en: "And We did not send before you", ur: "اور ہم نے آپ سے پہلے نہیں بھیجا" }, explanation: { en: "All previous messengers taught same message", ur: "تمام پچھلے رسولوں نے ایک ہی پیغام سکھایا" }, verseRef: "16:43" },
        { term: "فَاسْأَلُوا أَهْلَ الذِّكْرِ", meaning: { en: "So ask people of knowledge", ur: "پس اہلِ ذکر سے پوچھو" }, explanation: { en: "Seeking knowledge from experts", ur: "ماہرین سے علم حاصل کرنا" }, verseRef: "16:43" }
      ]
    },

    creationSigns: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Signs in Creation",
      nameArabic: "آيات الخلق",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ", meaning: { en: "Created heavens and earth in truth", ur: "آسمانوں اور زمین کو حق کے ساتھ پیدا کیا" }, explanation: { en: "Creation has purpose and truth", ur: "تخلیق کا مقصد اور حقیقت ہے" }, verseRef: "16:3" },
        { term: "خَلَقَ الْإِنسَانَ مِن نُّطْفَةٍ", meaning: { en: "Created man from a drop", ur: "انسان کو ایک بوند سے پیدا کیا" }, explanation: { en: "Human origin from humble beginning", ur: "انسان کی ابتدا حقیر شروعات سے" }, verseRef: "16:4" },
        { term: "وَالْأَنْعَامَ خَلَقَهَا", meaning: { en: "And the livestock He created", ur: "اور مویشیوں کو اس نے پیدا کیا" }, explanation: { en: "Animals as blessing - warmth, benefits, food", ur: "جانور بطور نعمت - گرمائش، فوائد، خوراک" }, verseRef: "16:5" },
        { term: "وَالْخَيْلَ وَالْبِغَالَ وَالْحَمِيرَ", meaning: { en: "And horses, mules, and donkeys", ur: "اور گھوڑے اور خچر اور گدھے" }, explanation: { en: "Transportation and adornment", ur: "سواری اور زینت" }, verseRef: "16:8" },
        { term: "وَيَخْلُقُ مَا لَا تَعْلَمُونَ", meaning: { en: "And He creates what you do not know", ur: "اور وہ پیدا کرتا ہے جو تم نہیں جانتے" }, explanation: { en: "Future inventions and unknown creations", ur: "مستقبل کی ایجادات اور نامعلوم مخلوقات" }, verseRef: "16:8" }
      ]
    },

    waterBlessing: {
      color: '#F59E0B',
      icon: 'Star',
      name: "The Blessing of Water",
      nameArabic: "نعمة الماء",
      concepts: [
        { term: "هُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: { en: "He who sent down water from sky", ur: "وہی ہے جس نے آسمان سے پانی اتارا" }, explanation: { en: "Rain as divine provision", ur: "بارش بطور الٰہی رزق" }, verseRef: "16:10" },
        { term: "لَّكُم مِّنْهُ شَرَابٌ", meaning: { en: "From it is drink for you", ur: "اس میں تمہارے لیے پینے کا پانی ہے" }, explanation: { en: "Water for drinking", ur: "پینے کے لیے پانی" }, verseRef: "16:10" },
        { term: "وَمِنْهُ شَجَرٌ", meaning: { en: "And from it is foliage", ur: "اور اسی سے درخت ہیں" }, explanation: { en: "Vegetation for animals", ur: "جانوروں کے لیے سبزہ" }, verseRef: "16:10" },
        { term: "يُنبِتُ لَكُم بِهِ الزَّرْعَ", meaning: { en: "He causes to grow crops for you", ur: "وہ تمہارے لیے اس سے فصلیں اگاتا ہے" }, explanation: { en: "Agriculture dependent on rain", ur: "بارش پر منحصر زراعت" }, verseRef: "16:11" },
        { term: "وَالزَّيْتُونَ وَالنَّخِيلَ وَالْأَعْنَابَ", meaning: { en: "Olives, palms, and grapes", ur: "زیتون اور کھجوریں اور انگور" }, explanation: { en: "Variety of fruits as blessing", ur: "پھلوں کی قسمیں بطور نعمت" }, verseRef: "16:11" }
      ]
    },

    cosmicSigns: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Cosmic Signs",
      nameArabic: "الآيات الكونية",
      concepts: [
        { term: "وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ", meaning: { en: "He subjected for you night and day", ur: "اس نے رات اور دن کو تمہارے لیے مسخر کیا" }, explanation: { en: "Celestial system in service", ur: "آسمانی نظام خدمت میں" }, verseRef: "16:12" },
        { term: "وَالشَّمْسَ وَالْقَمَرَ", meaning: { en: "And the sun and moon", ur: "اور سورج اور چاند" }, explanation: { en: "Celestial bodies in divine service", ur: "آسمانی اجسام الٰہی خدمت میں" }, verseRef: "16:12" },
        { term: "وَالنُّجُومُ مُسَخَّرَاتٌ بِأَمْرِهِ", meaning: { en: "Stars subjected by His command", ur: "ستارے اس کے حکم سے مسخر ہیں" }, explanation: { en: "Stars for guidance", ur: "ستارے رہنمائی کے لیے" }, verseRef: "16:12" },
        { term: "وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ", meaning: { en: "He cast into earth mountains", ur: "اس نے زمین میں پہاڑ ڈال دیے" }, explanation: { en: "Mountains as stabilizers", ur: "پہاڑ بطور مستحکم کرنے والے" }, verseRef: "16:15" },
        { term: "وَعَلَامَاتٍ ۚ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ", meaning: { en: "And landmarks, by stars they guide themselves", ur: "اور نشانیاں، اور ستاروں سے وہ راستہ پاتے ہیں" }, explanation: { en: "Navigation signs", ur: "راہنمائی کی نشانیاں" }, verseRef: "16:16" }
      ]
    },

    seaBlessing: {
      color: '#EF4444',
      icon: 'Users',
      name: "Blessings of the Sea",
      nameArabic: "نعم البحر",
      concepts: [
        { term: "وَهُوَ الَّذِي سَخَّرَ الْبَحْرَ", meaning: { en: "He who subjected the sea", ur: "اور وہی ہے جس نے سمندر کو مسخر کیا" }, explanation: { en: "Sea in service of humans", ur: "سمندر انسانوں کی خدمت میں" }, verseRef: "16:14" },
        { term: "لِتَأْكُلُوا مِنْهُ لَحْمًا طَرِيًّا", meaning: { en: "That you may eat fresh meat", ur: "تاکہ تم اس سے تازہ گوشت کھاؤ" }, explanation: { en: "Seafood as provision", ur: "سمندری غذا بطور رزق" }, verseRef: "16:14" },
        { term: "وَتَسْتَخْرِجُوا مِنْهُ حِلْيَةً", meaning: { en: "Extract ornaments from it", ur: "اور اس سے زیور نکالو" }, explanation: { en: "Pearls and coral", ur: "موتی اور مونگا" }, verseRef: "16:14" },
        { term: "وَتَرَى الْفُلْكَ مَوَاخِرَ فِيهِ", meaning: { en: "See ships sailing through it", ur: "اور تم جہازوں کو اس میں چلتے دیکھتے ہو" }, explanation: { en: "Maritime transport", ur: "سمندری نقل و حمل" }, verseRef: "16:14" },
        { term: "وَلِتَبْتَغُوا مِن فَضْلِهِ", meaning: { en: "That you may seek His bounty", ur: "تاکہ تم اس کا فضل تلاش کرو" }, explanation: { en: "Trade through seas", ur: "سمندروں کے ذریعے تجارت" }, verseRef: "16:14" }
      ]
    },

    theBee: {
      color: '#EC4899',
      icon: 'Globe',
      name: "The Bee - Central Theme",
      nameArabic: "النحل",
      concepts: [
        { term: "وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ", meaning: { en: "Your Lord inspired the bee", ur: "اور تمہارے رب نے شہد کی مکھی کو الہام کیا" }, explanation: { en: "Divine instinct given to bees", ur: "مکھیوں کو دی گئی الٰہی فطرت" }, verseRef: "16:68" },
        { term: "أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا", meaning: { en: "Make homes in mountains", ur: "پہاڑوں میں گھر بنا" }, explanation: { en: "Bee habitats - mountains, trees, structures", ur: "مکھیوں کے مسکن - پہاڑ، درخت، عمارات" }, verseRef: "16:68" },
        { term: "وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ", meaning: { en: "And in trees and in what they construct", ur: "اور درختوں میں اور جو چھتریاں بناتے ہیں" }, explanation: { en: "Various dwelling places", ur: "مختلف رہائش گاہیں" }, verseRef: "16:68" },
        { term: "ثُمَّ كُلِي مِن كُلِّ الثَّمَرَاتِ", meaning: { en: "Then eat from all fruits", ur: "پھر ہر قسم کے پھلوں سے کھا" }, explanation: { en: "Bee collecting nectar", ur: "مکھی کا رس جمع کرنا" }, verseRef: "16:69" },
        { term: "فَاسْلُكِي سُبُلَ رَبِّكِ ذُلُلًا", meaning: { en: "Follow paths of your Lord made easy", ur: "اپنے رب کے آسان راستوں پر چل" }, explanation: { en: "Divine guidance in bee behavior", ur: "مکھی کے رویے میں الٰہی رہنمائی" }, verseRef: "16:69" },
        { term: "يَخْرُجُ مِن بُطُونِهَا شَرَابٌ", meaning: { en: "Emerges from its bellies a drink", ur: "اس کے پیٹ سے ایک مشروب نکلتا ہے" }, explanation: { en: "Honey production", ur: "شہد کی پیداوار" }, verseRef: "16:69" },
        { term: "مُّخْتَلِفٌ أَلْوَانُهُ", meaning: { en: "Varying in colors", ur: "مختلف رنگوں کا" }, explanation: { en: "Different types of honey", ur: "شہد کی مختلف اقسام" }, verseRef: "16:69" },
        { term: "فِيهِ شِفَاءٌ لِّلنَّاسِ", meaning: { en: "In it is healing for people", ur: "اس میں لوگوں کے لیے شفا ہے" }, explanation: { en: "Medicinal properties of honey", ur: "شہد کی دوائی خصوصیات" }, verseRef: "16:69" }
      ]
    },

    humanBlessings: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Human Faculties & Life",
      nameArabic: "نعم الإنسان",
      concepts: [
        { term: "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ", meaning: { en: "Allah brought you from mothers' wombs", ur: "اللہ نے تمہیں تمہاری ماؤں کے پیٹوں سے نکالا" }, explanation: { en: "Birth knowing nothing", ur: "کچھ نہ جانتے ہوئے پیدائش" }, verseRef: "16:78" },
        { term: "لَا تَعْلَمُونَ شَيْئًا", meaning: { en: "Knowing nothing", ur: "کچھ نہ جانتے ہوئے" }, explanation: { en: "Initial state of ignorance", ur: "لاعلمی کی ابتدائی حالت" }, verseRef: "16:78" },
        { term: "وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ", meaning: { en: "Made for you hearing, vision, and hearts", ur: "تمہارے لیے کان اور آنکھیں اور دل بنائے" }, explanation: { en: "Three faculties for learning", ur: "سیکھنے کی تین صلاحیتیں" }, verseRef: "16:78" },
        { term: "لَعَلَّكُمْ تَشْكُرُونَ", meaning: { en: "That perhaps you will be grateful", ur: "تاکہ شاید تم شکر ادا کرو" }, explanation: { en: "Faculties should lead to gratitude", ur: "صلاحیتیں شکرگزاری کی طرف لے جانی چاہئیں" }, verseRef: "16:78" }
      ]
    },

    homeShelter: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Homes & Shelter",
      nameArabic: "البيوت والسكن",
      concepts: [
        { term: "وَاللَّهُ جَعَلَ لَكُم مِّن بُيُوتِكُمْ سَكَنًا", meaning: { en: "Allah made your homes a place of rest", ur: "اللہ نے تمہارے گھروں کو سکون کی جگہ بنایا" }, explanation: { en: "Peace in homes", ur: "گھروں میں سکون" }, verseRef: "16:80" },
        { term: "وَجَعَلَ لَكُم مِّن جُلُودِ الْأَنْعَامِ بُيُوتًا", meaning: { en: "Made for you from animal skins houses", ur: "جانوروں کی کھالوں سے تمہارے لیے گھر بنائے" }, explanation: { en: "Tents from leather - portable", ur: "چمڑے کے خیمے - قابلِ نقل" }, verseRef: "16:80" },
        { term: "تَسْتَخِفُّونَهَا يَوْمَ ظَعْنِكُمْ", meaning: { en: "Light for travel day", ur: "سفر کے دن ہلکے ہوتے ہیں" }, explanation: { en: "Easy to carry during travel", ur: "سفر میں اٹھانے میں آسان" }, verseRef: "16:80" },
        { term: "وَيَوْمَ إِقَامَتِكُمْ", meaning: { en: "And day of residence", ur: "اور قیام کے دن" }, explanation: { en: "Suitable for settlement too", ur: "رہائش کے لیے بھی موزوں" }, verseRef: "16:80" },
        { term: "وَمِنْ أَصْوَافِهَا وَأَوْبَارِهَا وَأَشْعَارِهَا", meaning: { en: "From wool, fur, and hair", ur: "اون اور بالوں اور روؤں سے" }, explanation: { en: "Materials for furnishing", ur: "ساز و سامان کے مواد" }, verseRef: "16:80" },
        { term: "أَثَاثًا وَمَتَاعًا إِلَىٰ حِينٍ", meaning: { en: "Furnishing and enjoyment for a time", ur: "سامان اور ایک وقت تک فائدہ" }, explanation: { en: "Temporary worldly provisions", ur: "عارضی دنیاوی سامان" }, verseRef: "16:80" }
      ]
    },

    shadesProtection: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Shades & Protection",
      nameArabic: "الظلال والحماية",
      concepts: [
        { term: "وَاللَّهُ جَعَلَ لَكُم مِّمَّا خَلَقَ ظِلَالًا", meaning: { en: "Allah made shade from what He created", ur: "اللہ نے اپنی بنائی ہوئی چیزوں سے تمہارے لیے سائے بنائے" }, explanation: { en: "Natural shade - trees, mountains", ur: "قدرتی سایہ - درخت، پہاڑ" }, verseRef: "16:81" },
        { term: "وَجَعَلَ لَكُم مِّنَ الْجِبَالِ أَكْنَانًا", meaning: { en: "Made shelters in mountains", ur: "پہاڑوں میں تمہارے لیے پناہ گاہیں بنائیں" }, explanation: { en: "Caves and mountain refuges", ur: "غاریں اور پہاڑی پناہ گاہیں" }, verseRef: "16:81" },
        { term: "وَجَعَلَ لَكُمْ سَرَابِيلَ تَقِيكُمُ الْحَرَّ", meaning: { en: "Made garments to protect from heat", ur: "تمہارے لیے لباس بنائے جو گرمی سے بچائیں" }, explanation: { en: "Clothing as protection", ur: "لباس بطور تحفظ" }, verseRef: "16:81" },
        { term: "وَسَرَابِيلَ تَقِيكُم بَأْسَكُمْ", meaning: { en: "And armor to protect in battle", ur: "اور زرہیں جو تمہیں جنگ میں بچائیں" }, explanation: { en: "Protective gear for war", ur: "جنگ کے لیے حفاظتی سامان" }, verseRef: "16:81" }
      ]
    },

    tawheedRefutation: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Refutation of Polytheism",
      nameArabic: "إبطال الشرك",
      concepts: [
        { term: "أَفَمَن يَخْلُقُ كَمَن لَّا يَخْلُقُ", meaning: { en: "Is He who creates like one who does not?", ur: "کیا جو پیدا کرے وہ ایسا ہے جیسا جو نہ بنائے؟" }, explanation: { en: "Creator vs created - cannot be equal", ur: "خالق بمقابلہ مخلوق - برابر نہیں ہو سکتے" }, verseRef: "16:17" },
        { term: "وَالَّذِينَ يَدْعُونَ مِن دُونِ اللَّهِ لَا يَخْلُقُونَ شَيْئًا", meaning: { en: "Those they invoke besides Allah create nothing", ur: "جنہیں وہ اللہ کے سوا پکارتے ہیں وہ کچھ نہیں بناتے" }, explanation: { en: "False gods are powerless", ur: "جھوٹے معبود بے بس ہیں" }, verseRef: "16:20" },
        { term: "وَهُمْ يُخْلَقُونَ", meaning: { en: "And they themselves are created", ur: "اور وہ خود بنائے ہوئے ہیں" }, explanation: { en: "Idols are created things", ur: "بت خود مخلوق ہیں" }, verseRef: "16:20" },
        { term: "أَمْوَاتٌ غَيْرُ أَحْيَاءٍ", meaning: { en: "Dead, not alive", ur: "مردے ہیں، زندہ نہیں" }, explanation: { en: "False gods are lifeless", ur: "جھوٹے معبود بے جان ہیں" }, verseRef: "16:21" },
        { term: "وَمَا يَشْعُرُونَ أَيَّانَ يُبْعَثُونَ", meaning: { en: "They perceive not when they will be resurrected", ur: "انہیں خبر نہیں کب اٹھائے جائیں گے" }, explanation: { en: "Idols have no knowledge", ur: "بتوں کو کوئی علم نہیں" }, verseRef: "16:21" }
      ]
    },

    disbelieverTraits: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Traits of Disbelievers",
      nameArabic: "صفات الكافرين",
      concepts: [
        { term: "إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ", meaning: { en: "Your God is one God", ur: "تمہارا معبود ایک معبود ہے" }, explanation: { en: "Core declaration of monotheism", ur: "توحید کا بنیادی اعلان" }, verseRef: "16:22" },
        { term: "لَا يُؤْمِنُونَ بِالْآخِرَةِ قُلُوبُهُم مُّنكِرَةٌ", meaning: { en: "Those who disbelieve in Hereafter, their hearts reject", ur: "جو آخرت پر ایمان نہیں لاتے ان کے دل انکار کرنے والے ہیں" }, explanation: { en: "Denial comes from heart", ur: "انکار دل سے آتا ہے" }, verseRef: "16:22" },
        { term: "وَهُم مُّسْتَكْبِرُونَ", meaning: { en: "And they are arrogant", ur: "اور وہ تکبر کرنے والے ہیں" }, explanation: { en: "Pride prevents acceptance", ur: "تکبر قبولیت میں رکاوٹ ہے" }, verseRef: "16:22" },
        { term: "لَا جَرَمَ أَنَّ اللَّهَ يَعْلَمُ", meaning: { en: "Assuredly Allah knows", ur: "بلاشبہ اللہ جانتا ہے" }, explanation: { en: "Nothing hidden from Allah", ur: "اللہ سے کچھ چھپا نہیں" }, verseRef: "16:23" },
        { term: "إِنَّهُ لَا يُحِبُّ الْمُسْتَكْبِرِينَ", meaning: { en: "He does not love the arrogant", ur: "وہ تکبر کرنے والوں کو پسند نہیں کرتا" }, explanation: { en: "Arrogance brings divine displeasure", ur: "تکبر الٰہی ناراضگی لاتا ہے" }, verseRef: "16:23" }
      ]
    },

    justiceKindness: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Justice & Excellence",
      nameArabic: "العدل والإحسان",
      concepts: [
        { term: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ", meaning: { en: "Allah commands justice", ur: "بے شک اللہ عدل کا حکم دیتا ہے" }, explanation: { en: "Divine command for fairness", ur: "انصاف کا الٰہی حکم" }, verseRef: "16:90" },
        { term: "وَالْإِحْسَانِ", meaning: { en: "And excellence/goodness", ur: "اور احسان" }, explanation: { en: "Going beyond mere justice to beauty", ur: "محض انصاف سے آگے بڑھ کر حسنِ سلوک" }, verseRef: "16:90" },
        { term: "وَإِيتَاءِ ذِي الْقُرْبَىٰ", meaning: { en: "And giving to relatives", ur: "اور رشتہ داروں کو دینا" }, explanation: { en: "Maintaining family ties", ur: "خاندانی رشتے نبھانا" }, verseRef: "16:90" },
        { term: "وَيَنْهَىٰ عَنِ الْفَحْشَاءِ", meaning: { en: "And forbids immorality", ur: "اور بے حیائی سے روکتا ہے" }, explanation: { en: "Prohibition of indecency", ur: "فحاشی کی ممانعت" }, verseRef: "16:90" },
        { term: "وَالْمُنكَرِ", meaning: { en: "And wrongdoing", ur: "اور برائی" }, explanation: { en: "Prohibition of all evil", ur: "ہر برائی کی ممانعت" }, verseRef: "16:90" },
        { term: "وَالْبَغْيِ", meaning: { en: "And oppression", ur: "اور ظلم و زیادتی" }, explanation: { en: "Prohibition of transgression", ur: "سرکشی کی ممانعت" }, verseRef: "16:90" },
        { term: "يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ", meaning: { en: "He admonishes you that you may remember", ur: "وہ تمہیں نصیحت کرتا ہے تاکہ تم یاد رکھو" }, explanation: { en: "Purpose of divine guidance", ur: "الٰہی رہنمائی کا مقصد" }, verseRef: "16:90" }
      ]
    },

    covenantFulfillment: {
      color: '#10B981',
      icon: 'Book',
      name: "Covenants & Oaths",
      nameArabic: "العهود والأيمان",
      concepts: [
        { term: "وَأَوْفُوا بِعَهْدِ اللَّهِ إِذَا عَاهَدتُّمْ", meaning: { en: "Fulfill covenant of Allah when you make covenant", ur: "اللہ کا عہد پورا کرو جب عہد کرو" }, explanation: { en: "Keeping promises made to Allah", ur: "اللہ سے کیے ہوئے وعدے نبھانا" }, verseRef: "16:91" },
        { term: "وَلَا تَنقُضُوا الْأَيْمَانَ بَعْدَ تَوْكِيدِهَا", meaning: { en: "Do not break oaths after confirming them", ur: "قسمیں پختہ کرنے کے بعد مت توڑو" }, explanation: { en: "Sanctity of confirmed oaths", ur: "پختہ قسموں کا تقدس" }, verseRef: "16:91" },
        { term: "وَقَدْ جَعَلْتُمُ اللَّهَ عَلَيْكُمْ كَفِيلًا", meaning: { en: "You have made Allah your guarantor", ur: "تم نے اللہ کو اپنا ضامن بنایا ہے" }, explanation: { en: "Allah witnesses oaths", ur: "اللہ قسموں کا گواہ ہے" }, verseRef: "16:91" },
        { term: "وَلَا تَكُونُوا كَالَّتِي نَقَضَتْ غَزْلَهَا", meaning: { en: "Do not be like she who untwists her thread", ur: "اس عورت کی طرح نہ ہو جس نے اپنا سوت کھول دیا" }, explanation: { en: "Parable of breaking agreements", ur: "عہد توڑنے کی تمثیل" }, verseRef: "16:92" }
      ]
    },

    quranGuidance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Quran as Guidance",
      nameArabic: "القرآن هدى",
      concepts: [
        { term: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", meaning: { en: "We sent down the Book explaining all things", ur: "ہم نے آپ پر کتاب نازل کی ہر چیز کی وضاحت کرنے والی" }, explanation: { en: "Comprehensive guidance", ur: "جامع رہنمائی" }, verseRef: "16:89" },
        { term: "وَهُدًى وَرَحْمَةً", meaning: { en: "And guidance and mercy", ur: "اور ہدایت اور رحمت" }, explanation: { en: "Quran is guidance and mercy", ur: "قرآن ہدایت اور رحمت ہے" }, verseRef: "16:89" },
        { term: "وَبُشْرَىٰ لِلْمُسْلِمِينَ", meaning: { en: "And good news for Muslims", ur: "اور مسلمانوں کے لیے خوشخبری" }, explanation: { en: "Glad tidings for believers", ur: "ایمان والوں کے لیے بشارت" }, verseRef: "16:89" },
        { term: "فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ", meaning: { en: "When you recite Quran, seek refuge in Allah", ur: "جب تم قرآن پڑھو تو اللہ کی پناہ مانگو" }, explanation: { en: "Protection before recitation", ur: "تلاوت سے پہلے پناہ" }, verseRef: "16:98" },
        { term: "مِنَ الشَّيْطَانِ الرَّجِيمِ", meaning: { en: "From Satan, the expelled", ur: "مردود شیطان سے" }, explanation: { en: "Seeking protection from Satan", ur: "شیطان سے پناہ مانگنا" }, verseRef: "16:98" }
      ]
    },

    ibrahimModel: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Ibrahim as Model",
      nameArabic: "إبراهيم أسوة",
      concepts: [
        { term: "إِنَّ إِبْرَاهِيمَ كَانَ أُمَّةً", meaning: { en: "Indeed Ibrahim was a nation", ur: "بے شک ابراہیم اکیلے ایک امت تھے" }, explanation: { en: "One man = entire community in virtue", ur: "ایک آدمی = نیکی میں پوری جماعت" }, verseRef: "16:120" },
        { term: "قَانِتًا لِّلَّهِ حَنِيفًا", meaning: { en: "Devoutly obedient to Allah, inclining to truth", ur: "اللہ کے فرمانبردار، حق کی طرف جھکے ہوئے" }, explanation: { en: "Total devotion and monotheism", ur: "مکمل عقیدت اور توحید" }, verseRef: "16:120" },
        { term: "وَلَمْ يَكُ مِنَ الْمُشْرِكِينَ", meaning: { en: "And was not of the polytheists", ur: "اور مشرکوں میں سے نہ تھے" }, explanation: { en: "Pure monotheism", ur: "خالص توحید" }, verseRef: "16:120" },
        { term: "شَاكِرًا لِّأَنْعُمِهِ", meaning: { en: "Grateful for His blessings", ur: "اس کی نعمتوں کے شکرگزار" }, explanation: { en: "Gratitude as trait of Ibrahim", ur: "شکرگزاری ابراہیم کی خصوصیت" }, verseRef: "16:121" },
        { term: "اجْتَبَاهُ وَهَدَاهُ", meaning: { en: "He chose him and guided him", ur: "اس نے انہیں چن لیا اور ہدایت دی" }, explanation: { en: "Divine selection and guidance", ur: "الٰہی انتخاب اور رہنمائی" }, verseRef: "16:121" },
        { term: "إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "To a straight path", ur: "سیدھے راستے کی طرف" }, explanation: { en: "Guided to right way", ur: "صحیح راستے کی ہدایت" }, verseRef: "16:121" }
      ]
    },

    patience: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Patience & Perseverance",
      nameArabic: "الصبر",
      concepts: [
        { term: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", meaning: { en: "Be patient, and your patience is only through Allah", ur: "صبر کریں اور آپ کا صبر صرف اللہ کی توفیق سے ہے" }, explanation: { en: "Patience enabled by Allah", ur: "صبر اللہ کی توفیق سے ممکن ہے" }, verseRef: "16:127" },
        { term: "وَلَا تَحْزَنْ عَلَيْهِمْ", meaning: { en: "Do not grieve over them", ur: "ان پر غمگین نہ ہوں" }, explanation: { en: "No sorrow for disbelievers", ur: "کافروں پر غم نہ کریں" }, verseRef: "16:127" },
        { term: "وَلَا تَكُ فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ", meaning: { en: "Do not be in distress from their plotting", ur: "ان کی سازشوں سے تنگ نہ ہوں" }, explanation: { en: "No anxiety from enemy schemes", ur: "دشمن کی چالوں سے پریشانی نہ ہو" }, verseRef: "16:127" },
        { term: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا", meaning: { en: "Indeed Allah is with those who fear Him", ur: "بے شک اللہ ان لوگوں کے ساتھ ہے جو تقویٰ اختیار کریں" }, explanation: { en: "Divine support for righteous", ur: "نیک لوگوں کے لیے الٰہی مدد" }, verseRef: "16:128" },
        { term: "وَّالَّذِينَ هُم مُّحْسِنُونَ", meaning: { en: "And those who do good", ur: "اور جو نیکی کرنے والے ہیں" }, explanation: { en: "Allah with the doers of good", ur: "اللہ نیکوکاروں کے ساتھ ہے" }, verseRef: "16:128" }
      ]
    },

    dawahWisdom: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Wisdom in Calling to Allah",
      nameArabic: "الحكمة في الدعوة",
      concepts: [
        { term: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ", meaning: { en: "Invite to way of your Lord with wisdom", ur: "اپنے رب کے راستے کی طرف حکمت سے دعوت دیں" }, explanation: { en: "Use wisdom in dawah", ur: "دعوت میں حکمت استعمال کریں" }, verseRef: "16:125" },
        { term: "وَالْمَوْعِظَةِ الْحَسَنَةِ", meaning: { en: "And good instruction", ur: "اور عمدہ نصیحت" }, explanation: { en: "Beautiful preaching", ur: "خوبصورت تبلیغ" }, verseRef: "16:125" },
        { term: "وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ", meaning: { en: "And argue with them in best way", ur: "اور ان سے بہترین طریقے سے بحث کریں" }, explanation: { en: "Best manner of debate", ur: "بحث کا بہترین طریقہ" }, verseRef: "16:125" },
        { term: "إِنَّ رَبَّكَ هُوَ أَعْلَمُ", meaning: { en: "Indeed your Lord knows best", ur: "بے شک آپ کا رب بہتر جانتا ہے" }, explanation: { en: "Allah knows who is guided", ur: "اللہ جانتا ہے کون ہدایت یافتہ ہے" }, verseRef: "16:125" },
        { term: "بِمَن ضَلَّ عَن سَبِيلِهِ", meaning: { en: "Who strays from His path", ur: "کون اس کے راستے سے بھٹکا" }, explanation: { en: "Knowledge of the misguided", ur: "گمراہوں کا علم" }, verseRef: "16:125" },
        { term: "وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ", meaning: { en: "And He knows best who is guided", ur: "اور ہدایت یافتہ لوگوں کو وہ بہتر جانتا ہے" }, explanation: { en: "Knowledge of the guided", ur: "ہدایت یافتہ لوگوں کا علم" }, verseRef: "16:125" }
      ]
    },

    provisionsGratitude: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Provisions & Gratitude",
      nameArabic: "الرزق والشكر",
      concepts: [
        { term: "وَاللَّهُ فَضَّلَ بَعْضَكُمْ عَلَىٰ بَعْضٍ فِي الرِّزْقِ", meaning: { en: "Allah favored some over others in provision", ur: "اللہ نے رزق میں بعض کو بعض پر فضیلت دی" }, explanation: { en: "Inequality in provision is test", ur: "رزق میں فرق آزمائش ہے" }, verseRef: "16:71" },
        { term: "فَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا", meaning: { en: "Eat from what Allah provided you, lawful and good", ur: "اللہ نے جو حلال و طیب رزق دیا ہے اس سے کھاؤ" }, explanation: { en: "Eat halal provisions", ur: "حلال رزق کھائیں" }, verseRef: "16:114" },
        { term: "وَاشْكُرُوا نِعْمَتَ اللَّهِ", meaning: { en: "And be grateful for blessing of Allah", ur: "اور اللہ کی نعمت کا شکر ادا کرو" }, explanation: { en: "Gratitude for blessings", ur: "نعمتوں کا شکر" }, verseRef: "16:114" },
        { term: "إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ", meaning: { en: "If it is Him you worship", ur: "اگر تم اسی کی عبادت کرتے ہو" }, explanation: { en: "Gratitude connected to worship", ur: "شکرگزاری عبادت سے جڑی ہے" }, verseRef: "16:114" }
      ]
    },

    idolsParable: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Parables Against Idols",
      nameArabic: "أمثال ضد الأصنام",
      concepts: [
        { term: "ضَرَبَ اللَّهُ مَثَلًا عَبْدًا مَّمْلُوكًا", meaning: { en: "Allah presents parable of an owned slave", ur: "اللہ نے ایک غلام کی مثال دی" }, explanation: { en: "Slave vs free man - idol vs Allah", ur: "غلام بمقابلہ آزاد آدمی - بت بمقابلہ اللہ" }, verseRef: "16:75" },
        { term: "لَّا يَقْدِرُ عَلَىٰ شَيْءٍ", meaning: { en: "Unable to do anything", ur: "کسی چیز پر قدرت نہیں رکھتا" }, explanation: { en: "Powerless slave = powerless idol", ur: "بے بس غلام = بے بس بت" }, verseRef: "16:75" },
        { term: "وَمَن رَّزَقْنَاهُ مِنَّا رِزْقًا حَسَنًا", meaning: { en: "And one We provided good provision", ur: "اور جسے ہم نے اچھا رزق دیا" }, explanation: { en: "Free man = Allah who provides", ur: "آزاد آدمی = اللہ جو رزق دیتا ہے" }, verseRef: "16:75" },
        { term: "هَلْ يَسْتَوُونَ", meaning: { en: "Are they equal?", ur: "کیا وہ برابر ہیں؟" }, explanation: { en: "Rhetorical - clearly not equal", ur: "سوالیہ - واضح طور پر برابر نہیں" }, verseRef: "16:75" },
        { term: "وَضَرَبَ اللَّهُ مَثَلًا رَّجُلَيْنِ", meaning: { en: "Allah presents parable of two men", ur: "اللہ نے دو آدمیوں کی مثال دی" }, explanation: { en: "Mute man vs just commander", ur: "گونگا آدمی بمقابلہ عادل حاکم" }, verseRef: "16:76" }
      ]
    },

    resurrectionsure: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Certainty of Resurrection",
      nameArabic: "يقين البعث",
      concepts: [
        { term: "وَأَقْسَمُوا بِاللَّهِ جَهْدَ أَيْمَانِهِمْ", meaning: { en: "They swear by Allah their strongest oaths", ur: "وہ اللہ کی پختہ قسمیں کھاتے ہیں" }, explanation: { en: "Disbelievers deny resurrection", ur: "کافر قیامت سے انکار کرتے ہیں" }, verseRef: "16:38" },
        { term: "لَا يَبْعَثُ اللَّهُ مَن يَمُوتُ", meaning: { en: "Allah will not resurrect who dies", ur: "اللہ مرنے والوں کو نہیں اٹھائے گا" }, explanation: { en: "False claim denied", ur: "جھوٹا دعویٰ رد" }, verseRef: "16:38" },
        { term: "بَلَىٰ وَعْدًا عَلَيْهِ حَقًّا", meaning: { en: "Yes, a true promise binding on Him", ur: "ہاں، یہ اس پر حق وعدہ ہے" }, explanation: { en: "Resurrection is true promise", ur: "قیامت سچا وعدہ ہے" }, verseRef: "16:38" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: { en: "But most people do not know", ur: "لیکن اکثر لوگ نہیں جانتے" }, explanation: { en: "Ignorance of most", ur: "اکثریت کی لاعلمی" }, verseRef: "16:38" },
        { term: "لِيُبَيِّنَ لَهُمُ الَّذِي يَخْتَلِفُونَ فِيهِ", meaning: { en: "To make clear what they differed about", ur: "تاکہ واضح کرے جس میں وہ اختلاف کرتے تھے" }, explanation: { en: "Clarification on Judgment Day", ur: "قیامت کے دن وضاحت" }, verseRef: "16:39" }
      ]
    },

    makkahSanctity: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Makkah as Sanctuary",
      nameArabic: "مكة حرم آمن",
      concepts: [
        { term: "وَضَرَبَ اللَّهُ مَثَلًا قَرْيَةً كَانَتْ آمِنَةً", meaning: { en: "Allah presents parable of a city that was secure", ur: "اللہ نے ایک بستی کی مثال دی جو امن والی تھی" }, explanation: { en: "Secure city - Makkah parable", ur: "محفوظ شہر - مکہ کی تمثیل" }, verseRef: "16:112" },
        { term: "مُّطْمَئِنَّةً يَأْتِيهَا رِزْقُهَا رَغَدًا", meaning: { en: "At ease, provision coming abundantly", ur: "اطمینان سے، رزق فراوانی سے آ رہا تھا" }, explanation: { en: "Abundant provision", ur: "فراوان رزق" }, verseRef: "16:112" },
        { term: "مِّن كُلِّ مَكَانٍ", meaning: { en: "From every place", ur: "ہر جگہ سے" }, explanation: { en: "Provision from all directions", ur: "چاروں طرف سے رزق" }, verseRef: "16:112" },
        { term: "فَكَفَرَتْ بِأَنْعُمِ اللَّهِ", meaning: { en: "But it denied blessings of Allah", ur: "پھر اس نے اللہ کی نعمتوں کی ناشکری کی" }, explanation: { en: "Ingratitude brings punishment", ur: "ناشکری عذاب لاتی ہے" }, verseRef: "16:112" },
        { term: "فَأَذَاقَهَا اللَّهُ لِبَاسَ الْجُوعِ وَالْخَوْفِ", meaning: { en: "Allah made it taste garment of hunger and fear", ur: "اللہ نے اسے بھوک اور خوف کا لباس پہنا دیا" }, explanation: { en: "Punishment through hunger/fear", ur: "بھوک اور خوف کے ذریعے عذاب" }, verseRef: "16:112" }
      ]
    }
  },

  relationships: [
    { from: "أمر الله", to: "لا تستعجلوه", type: "warning", description: { en: "Judgment certain but timing is Allah's", ur: "قیامت یقینی ہے لیکن وقت اللہ کے اختیار میں" } },
    { from: "الملائكة بالروح", to: "لا إله إلا أنا", type: "purpose", description: { en: "Angels bring revelation to teach Tawheed", ur: "فرشتے توحید سکھانے کے لیے وحی لاتے ہیں" } },
    { from: "أوحى إلى النحل", to: "شفاء للناس", type: "result", description: { en: "Divine guidance to bee produces healing honey", ur: "مکھی کو الٰہی الہام سے شفا بخش شہد بنتا ہے" } },
    { from: "بالحكمة", to: "والموعظة الحسنة", type: "progression", description: { en: "Wisdom leads to good preaching", ur: "حکمت عمدہ تبلیغ کی طرف لے جاتی ہے" } },
    { from: "العدل", to: "الإحسان", type: "progression", description: { en: "Justice is baseline, excellence goes beyond", ur: "عدل بنیاد ہے، احسان اس سے آگے ہے" } },
    { from: "السمع والأبصار والأفئدة", to: "لعلكم تشكرون", type: "purpose", description: { en: "Faculties given for gratitude", ur: "صلاحیتیں شکرگزاری کے لیے دی گئیں" } },
    { from: "إبراهيم أمة", to: "شاكراً", type: "trait", description: { en: "Ibrahim's defining quality was gratitude", ur: "ابراہیم کی نمایاں خصوصیت شکرگزاری تھی" } },
    { from: "واصبر", to: "إن الله مع الذين اتقوا", type: "reward", description: { en: "Patience brings Allah's company", ur: "صبر اللہ کی معیت لاتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Decree", verses: "16:1-2", description: { en: "Opening warning - command of Allah coming", ur: "افتتاحی تنبیہ - اللہ کا حکم آ رہا ہے" } },
      { stage: 2, theme: "Creation Signs", verses: "16:3-18", description: { en: "Enumeration of blessings in creation", ur: "تخلیق میں نعمتوں کی فہرست" } },
      { stage: 3, theme: "Refuting Polytheism", verses: "16:19-29", description: { en: "False gods are powerless and lifeless", ur: "جھوٹے معبود بے بس اور بے جان ہیں" } },
      { stage: 4, theme: "Two Destinations", verses: "16:30-34", description: { en: "Paradise for righteous, Hell for arrogant", ur: "نیکوکاروں کے لیے جنت، متکبروں کے لیے جہنم" } },
      { stage: 5, theme: "Resurrection Certain", verses: "16:35-40", description: { en: "Allah will resurrect - true promise", ur: "اللہ اٹھائے گا - سچا وعدہ" } },
      { stage: 6, theme: "Prophet Stories", verses: "16:41-50", description: { en: "Emigrants for Allah, prophets as men", ur: "اللہ کے لیے ہجرت کرنے والے، انبیاء بطور انسان" } },
      { stage: 7, theme: "No Partners", verses: "16:51-60", description: { en: "Two gods? False daughters? All rejected", ur: "دو معبود؟ جھوٹی بیٹیاں؟ سب رد" } },
      { stage: 8, theme: "The Bee", verses: "16:66-69", description: { en: "Central passage - miracle of bee and honey", ur: "مرکزی حصہ - مکھی اور شہد کا معجزہ" } },
      { stage: 9, theme: "Human Blessings", verses: "16:70-83", description: { en: "Life stages, homes, faculties, provisions", ur: "زندگی کے مراحل، گھر، صلاحیتیں، رزق" } },
      { stage: 10, theme: "Witnesses & Book", verses: "16:84-89", description: { en: "Each community has witness, Quran explains all", ur: "ہر امت میں گواہ، قرآن سب کی وضاحت" } },
      { stage: 11, theme: "Justice Commanded", verses: "16:90-97", description: { en: "Famous verse on justice, kindness, kinship", ur: "عدل، احسان، صلہ رحمی کی مشہور آیت" } },
      { stage: 12, theme: "Satan's Weakness", verses: "16:98-100", description: { en: "Seek refuge, Satan has no power over believers", ur: "پناہ مانگو، شیطان کا مومنوں پر اختیار نہیں" } },
      { stage: 13, theme: "Quran's Purpose", verses: "16:101-111", description: { en: "Quran guidance, not fabricated, patience", ur: "قرآن ہدایت، من گھڑت نہیں، صبر" } },
      { stage: 14, theme: "Secure City", verses: "16:112-119", description: { en: "Makkah parable, eat halal, exceptions", ur: "مکہ کی تمثیل، حلال کھاؤ، رعایتیں" } },
      { stage: 15, theme: "Ibrahim's Model", verses: "16:120-124", description: { en: "Ibrahim as ummah, grateful, guided", ur: "ابراہیم بطور امت، شکرگزار، ہدایت یافتہ" } },
      { stage: 16, theme: "Dawah & Patience", verses: "16:125-128", description: { en: "Wise calling, patience, Allah with righteous", ur: "حکمت سے دعوت، صبر، اللہ نیکوکاروں کے ساتھ" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Count blessings", ur: "نعمتیں گنیں" }, how: { en: "List provisions in your life - water, food, shelter, senses", ur: "اپنی زندگی میں رزق کی فہرست بنائیں - پانی، خوراک، چھت، حواس" }, verse: "16:10-18" },
      { principle: { en: "Use wisdom in calling", ur: "دعوت میں حکمت استعمال کریں" }, how: { en: "Adjust approach based on audience", ur: "سامعین کے مطابق انداز بدلیں" }, verse: "16:125" },
      { principle: { en: "Practice justice AND excellence", ur: "عدل اور احسان دونوں کریں" }, how: { en: "Don't just be fair, go above and beyond in goodness", ur: "صرف منصفانہ نہ ہوں، نیکی میں حد سے آگے جائیں" }, verse: "16:90" },
      { principle: { en: "Maintain family ties", ur: "رشتے نبھائیں" }, how: { en: "Give to relatives, don't cut off kinship", ur: "رشتہ داروں کو دیں، صلہ رحمی نہ توڑیں" }, verse: "16:90" },
      { principle: { en: "Fulfill oaths", ur: "قسمیں پوری کریں" }, how: { en: "Don't break promises made with Allah as witness", ur: "اللہ کو گواہ بنا کر کیے ہوئے وعدے نہ توڑیں" }, verse: "16:91" },
      { principle: { en: "Be grateful like Ibrahim", ur: "ابراہیم کی طرح شکرگزار ہوں" }, how: { en: "Thank Allah for specific blessings daily", ur: "روزانہ مخصوص نعمتوں پر اللہ کا شکر ادا کریں" }, verse: "16:121" },
      { principle: { en: "Seek refuge before Quran", ur: "قرآن سے پہلے پناہ مانگیں" }, how: { en: "Say 'A'udhu billahi...' before reciting", ur: "تلاوت سے پہلے 'اعوذ باللہ...' پڑھیں" }, verse: "16:98" },
      { principle: { en: "Be patient through Allah", ur: "اللہ کے ذریعے صبر کریں" }, how: { en: "Know patience is enabled by Allah, not self-will", ur: "جانیں کہ صبر اللہ کی توفیق سے ہے، اپنی طاقت سے نہیں" }, verse: "16:127" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Blessings (An-Ni'am)", ur: "نعمتوں کی سورت (النعم)" },
    insight: { en: "Surah An-Nahl is also called 'Surah An-Ni'am' (The Blessings) because it enumerates more blessings than any other surah. The structure moves from cosmic blessings (heavens, earth, water) to animal blessings (livestock, bees) to human blessings (birth, faculties, homes) - all building to the climax at verse 90: the command for justice (adl), excellence (ihsan), and kinship. The bee passage (68-69) is central - showing divine guidance operating even in insects. The word 'wahy' (revelation) is used for both prophets and bees, connecting natural instinct to divine guidance. The surah begins with warning (amr Allah coming) and ends with comfort (Allah is with the patient and good-doers) - a complete emotional arc.", ur: "سورۃ النحل کو 'سورۃ النعم' (نعمتوں کی سورت) بھی کہا جاتا ہے کیونکہ اس میں کسی بھی اور سورت سے زیادہ نعمتیں شمار کی گئی ہیں۔ ڈھانچہ کائناتی نعمتوں (آسمان، زمین، پانی) سے حیوانی نعمتوں (مویشی، مکھیاں) سے انسانی نعمتوں (پیدائش، صلاحیتیں، گھر) تک بڑھتا ہے - سب آیت 90 پر عروج: عدل، احسان اور صلہ رحمی کے حکم تک پہنچتے ہیں۔ مکھی کا حصہ (68-69) مرکزی ہے - کیڑوں میں بھی الٰہی رہنمائی کا مظاہرہ۔ لفظ 'وحی' انبیاء اور مکھیوں دونوں کے لیے استعمال ہوا، فطری جبلت کو الٰہی رہنمائی سے جوڑتا ہے۔ سورت تنبیہ سے شروع ہوتی ہے اور تسلی پر ختم ہوتی ہے - ایک مکمل جذباتی سفر۔" }
  },

  historicalContext: {
    note: { en: "Revealed in late Makkan period when persecution intensified. The extensive enumeration of blessings served to remind Quraysh of Allah's favors despite their opposition. The reference to emigrants (16:41) shows some companions had already fled to Abyssinia. The command to debate in best manner (16:125) and be patient (16:127) reflects the non-violent resistance phase. Verse 106 about forced apostasy was revealed about Ammar ibn Yasir whose parents were killed for refusing to renounce Islam - the verse permits verbal denial under torture if heart remains firm.", ur: "مکی دور کے آخری حصے میں نازل ہوئی جب ظلم شدید ہوا۔ نعمتوں کی وسیع فہرست قریش کو ان کی مخالفت کے باوجود اللہ کے احسانات یاد دلانے کے لیے تھی۔ مہاجرین کا حوالہ (16:41) ظاہر کرتا ہے کہ کچھ صحابہ حبشہ ہجرت کر چکے تھے۔ بہترین طریقے سے بحث (16:125) اور صبر (16:127) کا حکم غیر تشدد مزاحمت کے مرحلے کی عکاسی کرتا ہے۔ آیت 106 جبری ارتداد کے بارے میں عمار بن یاسر کے بارے میں نازل ہوئی جن کے والدین اسلام نہ چھوڑنے پر شہید کیے گئے - آیت تشدد کے تحت زبانی انکار کی اجازت دیتی ہے بشرطیکہ دل مضبوط رہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "أُمَّةً", example: { en: "Ibrahim was an ummah (nation)", ur: "ابراہیم ایک امت تھے" }, effect: { en: "One man embodying nation's worth", ur: "ایک آدمی پوری قوم کی قدر کا حامل" } },
      { feature: "شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ", example: { en: "Drink varying in colors", ur: "مختلف رنگوں کا مشروب" }, effect: { en: "Scientific observation - honey varieties", ur: "سائنسی مشاہدہ - شہد کی اقسام" } },
      { feature: "تِبْيَانًا لِّكُلِّ شَيْءٍ", example: { en: "Explanation of all things", ur: "ہر چیز کی وضاحت" }, effect: { en: "Comprehensive nature of Quran", ur: "قرآن کی جامعیت" } },
      { feature: "لِبَاسَ الْجُوعِ", example: { en: "Garment of hunger", ur: "بھوک کا لباس" }, effect: { en: "Metaphor - hunger so complete it wraps like clothing", ur: "استعارہ - بھوک اتنی مکمل کہ لباس کی طرح لپیٹ لے" } },
      { feature: "ظِلَالًا", example: { en: "Shades", ur: "سائے" }, effect: { en: "Multiple types of shade - natural and constructed", ur: "سائے کی مختلف اقسام - قدرتی اور تعمیر شدہ" } },
      { feature: "حَنِيفًا", example: { en: "Inclining to truth", ur: "حق کی طرف مائل" }, effect: { en: "Ibrahim's pure monotheism", ur: "ابراہیم کی خالص توحید" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "16:4", topic: "Human embryology", note: { en: "Creation from nutfah (drop) - sperm", ur: "نطفے (بوند) سے تخلیق" } },
      { verse: "16:66", topic: "Milk production", note: { en: "Milk from between digestion and blood - accurate physiology", ur: "ہضم اور خون کے درمیان سے دودھ - درست جسمانیات" } },
      { verse: "16:68-69", topic: "Bee behavior", note: { en: "Female bees work (feminine verbs used), paths made easy, healing in honey", ur: "مادہ مکھیاں کام کرتی ہیں (مؤنث افعال استعمال)، راستے آسان، شہد میں شفا" } },
      { verse: "16:79", topic: "Bird flight", note: { en: "Nothing holds them except Allah - aerodynamics", ur: "انہیں اللہ کے سوا کوئی نہیں روکتا - ایروڈائنامکس" } },
      { verse: "16:15", topic: "Mountains", note: { en: "Mountains as stakes/pegs - tectonic stabilization", ur: "پہاڑ بطور میخیں - ٹیکٹونک استحکام" } }
    ]
  }
};

export default ONTOLOGY;
