/**
 * Surah Al-An'am (6) - Ontology of Quranic Concepts
 * The Cattle / The Livestock
 *
 * Theme: Foundational Makkan surah on pure monotheism (Tawheed)
 * Major Topics: Divine sovereignty, Ibrahim's journey to truth, polytheism refutation,
 *               Prophet's mission, cattle and food laws, signs of Allah
 *
 * Revelation: Makki (revealed all at once according to Ibn Abbas)
 * Verses: 165
 * Virtue: Contains greatest verse of divine attributes (6:59)
 */

export const ONTOLOGY = {
  surahId: 6,
  surahName: "Al-An'am",
  surahNameArabic: "الأنعام",
  revelationType: "Makki",
  totalAyahs: 165,

  categories: {
    divineCreation: {
      name: "Divine Creation & Sovereignty",
      nameUr: "الٰہی تخلیق اور حاکمیت",
      nameArabic: "الخلق والسيادة الإلهية",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "Praise to Allah who created heavens and earth", ur: "تمام تعریفیں Allah کے لیے ہیں جس نے آسمانوں اور زمین کو پیدا کیا" }, explanation: { en: "Opening declaration of Allah as Creator", ur: "سورت کا آغاز Allah کی خالقیت کے اعلان سے" }, verseRef: "6:1" },
        { term: "وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ", meaning: { en: "And made darkness and light", ur: "اور اندھیروں اور روشنی کو بنایا" }, explanation: { en: "Allah created both - no dualism", ur: "Allah نے دونوں بنائے - کوئی دوئیت نہیں" }, verseRef: "6:1" },
        { term: "خَلَقَكُم مِّن طِينٍ", meaning: { en: "Created you from clay", ur: "تمہیں مٹی سے پیدا کیا" }, explanation: { en: "Human origin from earth", ur: "انسان کی اصل مٹی سے ہے" }, verseRef: "6:2" },
        { term: "ثُمَّ قَضَىٰ أَجَلًا", meaning: { en: "Then decreed a term", ur: "پھر ایک مدت مقرر کی" }, explanation: { en: "Life spans are predetermined", ur: "زندگی کی مدت پہلے سے مقرر ہے" }, verseRef: "6:2" },
        { term: "وَهُوَ اللَّهُ فِي السَّمَاوَاتِ وَفِي الْأَرْضِ", meaning: { en: "He is Allah in the heavens and earth", ur: "وہی Allah ہے آسمانوں اور زمین میں" }, explanation: { en: "Allah's presence encompasses all", ur: "Allah کی موجودگی ہر جگہ محیط ہے" }, verseRef: "6:3" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameUr: "اللہ کا مکمل علم",
      nameArabic: "علم الله الكامل",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "يَعْلَمُ سِرَّكُمْ وَجَهْرَكُمْ", meaning: { en: "Knows your secret and public", ur: "تمہارے پوشیدہ اور ظاہر کو جانتا ہے" }, explanation: { en: "Nothing hidden from Allah", ur: "Allah سے کچھ بھی پوشیدہ نہیں" }, verseRef: "6:3" },
        { term: "وَعِندَهُ مَفَاتِحُ الْغَيْبِ", meaning: { en: "With Him are keys of unseen", ur: "اس کے پاس غیب کی کنجیاں ہیں" }, explanation: { en: "Five unseen matters only Allah knows", ur: "غیب کے پانچ معاملات صرف Allah جانتا ہے" }, verseRef: "6:59" },
        { term: "لَا يَعْلَمُهَا إِلَّا هُوَ", meaning: { en: "None knows them except Him", ur: "انہیں اس کے سوا کوئی نہیں جانتا" }, explanation: { en: "Exclusive divine knowledge", ur: "علم غیب صرف Allah کے لیے مخصوص ہے" }, verseRef: "6:59" },
        { term: "وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ", meaning: { en: "Knows what is in land and sea", ur: "خشکی اور سمندر میں جو کچھ ہے جانتا ہے" }, explanation: { en: "Complete knowledge of all creation", ur: "تمام مخلوقات کا مکمل علم" }, verseRef: "6:59" },
        { term: "وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا", meaning: { en: "No leaf falls but He knows it", ur: "کوئی پتا نہیں گرتا مگر وہ اسے جانتا ہے" }, explanation: { en: "Awareness of every detail in universe", ur: "کائنات کی ہر تفصیل سے آگاہی" }, verseRef: "6:59" },
        { term: "وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ", meaning: { en: "No grain in darkness of earth", ur: "زمین کی تاریکیوں میں کوئی دانہ نہیں" }, explanation: { en: "Even seeds underground are known", ur: "زمین کے نیچے بیج بھی معلوم ہیں" }, verseRef: "6:59" },
        { term: "فِي كِتَابٍ مُّبِينٍ", meaning: { en: "In a clear record", ur: "ایک واضح کتاب میں درج ہے" }, explanation: { en: "All recorded in Lawh al-Mahfuz", ur: "سب کچھ لوحِ محفوظ میں درج ہے" }, verseRef: "6:59" }
      ]
    },

    ibrahimJourney: {
      name: "Ibrahim's Search for Truth",
      nameUr: "ابراہیم کی تلاشِ حق",
      nameArabic: "رحلة إبراهيم للحق",
      color: '#10B981',
      icon: 'Compass',
      concepts: [
        { term: "وَكَذَٰلِكَ نُرِي إِبْرَاهِيمَ مَلَكُوتَ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Thus We showed Ibrahim the dominion of heavens and earth", ur: "اسی طرح ہم نے ابراہیم کو آسمانوں اور زمین کی بادشاہت دکھائی" }, explanation: { en: "Allah guided Ibrahim through reflection", ur: "Allah نے ابراہیم کو غور و فکر کے ذریعے ہدایت دی" }, verseRef: "6:75" },
        { term: "فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا", meaning: { en: "When night covered him, he saw a star", ur: "جب رات نے انہیں ڈھانپ لیا تو ایک تارا دیکھا" }, explanation: { en: "First celestial observation", ur: "پہلا آسمانی مشاہدہ" }, verseRef: "6:76" },
        { term: "قَالَ هَٰذَا رَبِّي", meaning: { en: "He said: This is my Lord", ur: "کہا: یہ میرا رب ہے" }, explanation: { en: "Methodology of elimination to find truth", ur: "حق تلاش کرنے کا طریقہ کار - رد و قبول" }, verseRef: "6:76" },
        { term: "فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ", meaning: { en: "When it set, he said: I love not those that set", ur: "جب وہ غروب ہوا تو کہا: میں ڈوبنے والوں کو پسند نہیں کرتا" }, explanation: { en: "True God cannot disappear", ur: "سچا معبود غائب نہیں ہو سکتا" }, verseRef: "6:76" },
        { term: "فَلَمَّا رَأَى الْقَمَرَ بَازِغًا", meaning: { en: "When he saw moon rising", ur: "جب چاند کو چمکتا دیکھا" }, explanation: { en: "Second celestial test", ur: "دوسرا آسمانی امتحان" }, verseRef: "6:77" },
        { term: "فَلَمَّا رَأَى الشَّمْسَ بَازِغَةً", meaning: { en: "When he saw sun rising", ur: "جب سورج کو طلوع ہوتا دیکھا" }, explanation: { en: "Third and greatest celestial test", ur: "تیسرا اور سب سے بڑا آسمانی امتحان" }, verseRef: "6:78" },
        { term: "هَٰذَا أَكْبَرُ", meaning: { en: "This is greater", ur: "یہ تو سب سے بڑا ہے" }, explanation: { en: "Sun seems most powerful", ur: "سورج سب سے زیادہ طاقتور لگتا ہے" }, verseRef: "6:78" },
        { term: "إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "I have turned my face to He who created heavens and earth", ur: "میں نے اپنا رخ اس ذات کی طرف کر لیا جس نے آسمانوں اور زمین کو پیدا کیا" }, explanation: { en: "Conclusion: worship Creator, not creation", ur: "نتیجہ: مخلوق نہیں بلکہ خالق کی عبادت کرو" }, verseRef: "6:79" },
        { term: "حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ", meaning: { en: "Inclining to truth, not of polytheists", ur: "یکسو ہو کر، اور میں مشرکوں میں سے نہیں" }, explanation: { en: "True monotheism declared", ur: "حقیقی توحید کا اعلان" }, verseRef: "6:79" }
      ]
    },

    propheticLineage: {
      name: "Chain of Prophets",
      nameUr: "انبیاء کا سلسلہ",
      nameArabic: "سلسلة الأنبياء",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "وَتِلْكَ حُجَّتُنَا آتَيْنَاهَا إِبْرَاهِيمَ", meaning: { en: "That was Our argument We gave Ibrahim", ur: "یہ ہماری دلیل تھی جو ہم نے ابراہیم کو دی" }, explanation: { en: "Ibrahim's logical proof from Allah", ur: "ابراہیم کی عقلی دلیل Allah کی طرف سے تھی" }, verseRef: "6:83" },
        { term: "وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ", meaning: { en: "We gave him Ishaq and Yaqub", ur: "ہم نے انہیں اسحاق اور یعقوب عطا کیے" }, explanation: { en: "Blessed descendants", ur: "برکت والی اولاد" }, verseRef: "6:84" },
        { term: "وَنُوحًا هَدَيْنَا مِن قَبْلُ", meaning: { en: "And Nuh We guided before", ur: "اور نوح کو ہم نے پہلے ہدایت دی" }, explanation: { en: "Earlier prophet in lineage", ur: "سلسلے میں پہلے کے نبی" }, verseRef: "6:84" },
        { term: "وَدَاوُودَ وَسُلَيْمَانَ وَأَيُّوبَ وَيُوسُفَ وَمُوسَىٰ وَهَارُونَ", meaning: { en: "And Dawud, Sulayman, Ayyub, Yusuf, Musa, Harun", ur: "اور داؤد، سلیمان، ایوب، یوسف، موسیٰ اور ہارون" }, explanation: { en: "Great prophets of Bani Israel", ur: "بنی اسرائیل کے عظیم انبیاء" }, verseRef: "6:84" },
        { term: "وَزَكَرِيَّا وَيَحْيَىٰ وَعِيسَىٰ وَإِلْيَاسَ", meaning: { en: "And Zakariyya, Yahya, Isa, Ilyas", ur: "اور زکریا، یحییٰ، عیسیٰ اور الیاس" }, explanation: { en: "Later prophets", ur: "بعد کے انبیاء" }, verseRef: "6:85" },
        { term: "وَإِسْمَاعِيلَ وَالْيَسَعَ وَيُونُسَ وَلُوطًا", meaning: { en: "And Ismail, Al-Yasa, Yunus, Lut", ur: "اور اسماعیل، الیسع، یونس اور لوط" }, explanation: { en: "Additional prophets mentioned", ur: "مزید انبیاء کا تذکرہ" }, verseRef: "6:86" },
        { term: "أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ فَبِهُدَاهُمُ اقْتَدِهْ", meaning: { en: "Those are whom Allah guided, so follow their guidance", ur: "یہ وہ لوگ ہیں جنہیں Allah نے ہدایت دی، پس ان کی ہدایت کی پیروی کرو" }, explanation: { en: "Command to follow prophets' way", ur: "انبیاء کے طریقے کی پیروی کا حکم" }, verseRef: "6:90" }
      ]
    },

    polytheismRefutation: {
      name: "Refutation of Polytheism",
      nameUr: "شرک کی تردید",
      nameArabic: "تفنيد الشرك",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ", meaning: { en: "Yet those who disbelieve equate others with their Lord", ur: "پھر بھی کافر لوگ اپنے رب کے ساتھ دوسروں کو برابر ٹھہراتے ہیں" }, explanation: { en: "Core error of polytheism", ur: "شرک کی بنیادی غلطی" }, verseRef: "6:1" },
        { term: "وَجَعَلُوا لِلَّهِ شُرَكَاءَ الْجِنَّ", meaning: { en: "They made jinn partners with Allah", ur: "انہوں نے جنوں کو Allah کا شریک بنایا" }, explanation: { en: "Worship of jinn exposed", ur: "جنوں کی پوجا کا پردہ فاش" }, verseRef: "6:100" },
        { term: "وَخَرَقُوا لَهُ بَنِينَ وَبَنَاتٍ بِغَيْرِ عِلْمٍ", meaning: { en: "They fabricated sons and daughters for Him without knowledge", ur: "انہوں نے بغیر علم کے اس کے بیٹے اور بیٹیاں گھڑ لیں" }, explanation: { en: "False claims of divine offspring", ur: "الہٰی اولاد کے جھوٹے دعوے" }, verseRef: "6:100" },
        { term: "سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يَصِفُونَ", meaning: { en: "Exalted is He above what they describe", ur: "وہ پاک اور بلند ہے ان باتوں سے جو یہ بیان کرتے ہیں" }, explanation: { en: "Allah is transcendent above false attributes", ur: "Allah جھوٹی صفات سے پاک و بالا ہے" }, verseRef: "6:100" },
        { term: "بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Originator of heavens and earth", ur: "آسمانوں اور زمین کو نئے سرے سے بنانے والا" }, explanation: { en: "Allah creates without prior model", ur: "Allah بغیر کسی سابقہ نمونے کے تخلیق کرتا ہے" }, verseRef: "6:101" },
        { term: "أَنَّىٰ يَكُونُ لَهُ وَلَدٌ", meaning: { en: "How could He have a son?", ur: "اس کا بچہ کیسے ہو سکتا ہے؟" }, explanation: { en: "Logical refutation of divine offspring", ur: "الہٰی اولاد کی عقلی تردید" }, verseRef: "6:101" },
        { term: "إِنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ لَيُسَمُّونَ الْمَلَائِكَةَ تَسْمِيَةَ الْأُنثَىٰ", meaning: { en: "Those who do not believe in Hereafter name angels female names", ur: "جو آخرت پر ایمان نہیں رکھتے وہ فرشتوں کو عورتوں کے نام دیتے ہیں" }, explanation: { en: "Arabs called angels daughters of Allah", ur: "عرب فرشتوں کو Allah کی بیٹیاں کہتے تھے" }, verseRef: "6:8-9" },
        { term: "قُلْ أَغَيْرَ اللَّهِ أَتَّخِذُ وَلِيًّا", meaning: { en: "Say: Shall I take other than Allah as protector?", ur: "کہو: کیا میں Allah کے سوا کسی کو حامی بناؤں؟" }, explanation: { en: "Rhetorical rejection of false gods", ur: "جھوٹے معبودوں کی بلاغی تردید" }, verseRef: "6:14" }
      ]
    },

    signsCosmic: {
      name: "Cosmic Signs of Allah",
      nameUr: "اللہ کی کائناتی نشانیاں",
      nameArabic: "الآيات الكونية",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "فَالِقُ الْإِصْبَاحِ", meaning: { en: "Cleaver of daybreak", ur: "صبح کو چیرنے والا" }, explanation: { en: "Allah splits the dawn daily", ur: "Allah روزانہ صبح کو پھاڑتا ہے" }, verseRef: "6:96" },
        { term: "وَجَعَلَ اللَّيْلَ سَكَنًا", meaning: { en: "Made night for rest", ur: "رات کو سکون کا ذریعہ بنایا" }, explanation: { en: "Night for peace and sleep", ur: "رات آرام اور نیند کے لیے" }, verseRef: "6:96" },
        { term: "وَالشَّمْسَ وَالْقَمَرَ حُسْبَانًا", meaning: { en: "Sun and moon for calculation", ur: "سورج اور چاند کو حساب کے لیے بنایا" }, explanation: { en: "Celestial timepieces", ur: "آسمانی وقت شمار" }, verseRef: "6:96" },
        { term: "وَهُوَ الَّذِي جَعَلَ لَكُمُ النُّجُومَ لِتَهْتَدُوا بِهَا", meaning: { en: "He made stars for your guidance", ur: "اسی نے تمہارے لیے ستارے بنائے تاکہ ان سے راستہ پاؤ" }, explanation: { en: "Stars as navigation aids", ur: "ستارے راہنمائی کا ذریعہ" }, verseRef: "6:97" },
        { term: "فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ", meaning: { en: "In darknesses of land and sea", ur: "خشکی اور سمندر کی تاریکیوں میں" }, explanation: { en: "Guidance in all terrains", ur: "ہر قسم کے راستوں میں رہنمائی" }, verseRef: "6:97" },
        { term: "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: { en: "He sent down water from sky", ur: "وہی ہے جس نے آسمان سے پانی اتارا" }, explanation: { en: "Rain as divine provision", ur: "بارش بطور الہٰی رزق" }, verseRef: "6:99" },
        { term: "فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ", meaning: { en: "We brought forth vegetation of all kinds", ur: "پھر ہم نے اس سے ہر قسم کی نباتات نکالیں" }, explanation: { en: "Plant diversity from water", ur: "پانی سے پودوں کا تنوع" }, verseRef: "6:99" }
      ]
    },

    signsPlants: {
      name: "Agricultural Signs",
      nameUr: "زراعت کی نشانیاں",
      nameArabic: "آيات الزراعة",
      color: '#10B981',
      icon: 'Globe',
      concepts: [
        { term: "حَدَائِقَ ذَاتَ بَهْجَةٍ", meaning: { en: "Gardens of delight", ur: "خوشنما باغات" }, explanation: { en: "Beautiful gardens as signs", ur: "خوبصورت باغات بطور نشانیاں" }, verseRef: "6:99" },
        { term: "وَمِنَ النَّخْلِ مِن طَلْعِهَا قِنْوَانٌ دَانِيَةٌ", meaning: { en: "From date-palm, clusters hanging low", ur: "کھجور کے درخت سے جھکے ہوئے گچھے" }, explanation: { en: "Accessible fruit provision", ur: "آسانی سے دستیاب پھلوں کی فراہمی" }, verseRef: "6:99" },
        { term: "وَجَنَّاتٍ مِّنْ أَعْنَابٍ", meaning: { en: "Gardens of grapes", ur: "انگوروں کے باغات" }, explanation: { en: "Vineyards as blessing", ur: "انگوروں کے باغات بطور نعمت" }, verseRef: "6:99" },
        { term: "وَالزَّيْتُونَ وَالرُّمَّانَ مُشْتَبِهًا وَغَيْرَ مُتَشَابِهٍ", meaning: { en: "Olives and pomegranates, similar yet different", ur: "زیتون اور انار، ملتے جلتے مگر مختلف" }, explanation: { en: "Diversity in creation", ur: "تخلیق میں تنوع" }, verseRef: "6:99" },
        { term: "انظُرُوا إِلَىٰ ثَمَرِهِ إِذَا أَثْمَرَ وَيَنْعِهِ", meaning: { en: "Look at its fruit when it yields and ripens", ur: "اس کے پھل کو دیکھو جب وہ پھلے اور پکے" }, explanation: { en: "Observe growth cycle", ur: "نشوونما کے چکر کا مشاہدہ کرو" }, verseRef: "6:99" },
        { term: "إِنَّ فِي ذَٰلِكُمْ لَآيَاتٍ لِّقَوْمٍ يُؤْمِنُونَ", meaning: { en: "In that are signs for believing people", ur: "اس میں ایمان لانے والوں کے لیے نشانیاں ہیں" }, explanation: { en: "Signs require faith to perceive", ur: "نشانیاں سمجھنے کے لیے ایمان ضروری ہے" }, verseRef: "6:99" }
      ]
    },

    cattleLaws: {
      name: "Cattle and Food Laws",
      nameUr: "مویشیوں اور کھانے کے احکام",
      nameArabic: "أحكام الأنعام والطعام",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "وَمِنَ الْأَنْعَامِ حَمُولَةً وَفَرْشًا", meaning: { en: "From cattle, carriers and bedding", ur: "مویشیوں میں سے بوجھ اٹھانے والے اور بچھانے والے" }, explanation: { en: "Uses of livestock - transport and wool/leather", ur: "مویشیوں کے استعمال - سواری اور اون/چمڑا" }, verseRef: "6:142" },
        { term: "ثَمَانِيَةَ أَزْوَاجٍ", meaning: { en: "Eight pairs", ur: "آٹھ جوڑے" }, explanation: { en: "Four types, male and female each", ur: "چار قسمیں، ہر ایک کا نر اور مادہ" }, verseRef: "6:143" },
        { term: "مِّنَ الضَّأْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ", meaning: { en: "Of sheep two and of goats two", ur: "بھیڑ میں سے دو اور بکری میں سے دو" }, explanation: { en: "First pair of cattle", ur: "مویشیوں کا پہلا جوڑا" }, verseRef: "6:143" },
        { term: "وَمِنَ الْإِبِلِ اثْنَيْنِ وَمِنَ الْبَقَرِ اثْنَيْنِ", meaning: { en: "Of camels two and of cattle two", ur: "اونٹ میں سے دو اور گائے میں سے دو" }, explanation: { en: "Second pair of livestock", ur: "مویشیوں کا دوسرا جوڑا" }, verseRef: "6:144" },
        { term: "قُل لَّا أَجِدُ فِي مَا أُوحِيَ إِلَيَّ مُحَرَّمًا", meaning: { en: "Say: I find not forbidden in revelation", ur: "کہو: مجھے وحی میں کوئی حرام نہیں ملتا" }, explanation: { en: "Limiting prohibitions to revelation", ur: "حرام صرف وحی تک محدود ہے" }, verseRef: "6:145" },
        { term: "إِلَّا أَن يَكُونَ مَيْتَةً", meaning: { en: "Except dead animal", ur: "سوائے مردار کے" }, explanation: { en: "Carrion prohibited", ur: "مردار حرام ہے" }, verseRef: "6:145" },
        { term: "أَوْ دَمًا مَّسْفُوحًا", meaning: { en: "Or blood poured forth", ur: "یا بہتا ہوا خون" }, explanation: { en: "Flowing blood prohibited", ur: "بہتا خون حرام ہے" }, verseRef: "6:145" },
        { term: "أَوْ لَحْمَ خِنزِيرٍ", meaning: { en: "Or flesh of swine", ur: "یا سور کا گوشت" }, explanation: { en: "Pork prohibited", ur: "خنزیر کا گوشت حرام ہے" }, verseRef: "6:145" },
        { term: "أَوْ فِسْقًا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ", meaning: { en: "Or profanity dedicated to other than Allah", ur: "یا وہ جو Allah کے سوا کسی اور کے نام پر ذبح کیا گیا" }, explanation: { en: "Idolatrous slaughter prohibited", ur: "بتوں کے نام کی قربانی حرام ہے" }, verseRef: "6:145" }
      ]
    },

    paganPractices: {
      name: "Pagan Practices Refuted",
      nameUr: "جاہلی رسوم کی تردید",
      nameArabic: "العادات الجاهلية المردودة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَالُوا هَٰذِهِ أَنْعَامٌ وَحَرْثٌ حِجْرٌ", meaning: { en: "They say: These cattle and crops are forbidden", ur: "یہ کہتے ہیں: یہ مویشی اور فصلیں ممنوع ہیں" }, explanation: { en: "Arabs' self-made food taboos", ur: "عربوں کے خودساختہ کھانے کی پابندیاں" }, verseRef: "6:138" },
        { term: "لَّا يَطْعَمُهَا إِلَّا مَن نَّشَاءُ", meaning: { en: "None may eat except whom we will", ur: "انہیں صرف وہی کھائے جسے ہم چاہیں" }, explanation: { en: "Arbitrary restrictions", ur: "من مانی پابندیاں" }, verseRef: "6:138" },
        { term: "وَأَنْعَامٌ حُرِّمَتْ ظُهُورُهَا", meaning: { en: "Cattle whose backs are forbidden", ur: "مویشی جن کی پیٹھ حرام کی گئی" }, explanation: { en: "Made-up prohibition on riding", ur: "سواری پر خودساختہ پابندی" }, verseRef: "6:138" },
        { term: "وَأَنْعَامٌ لَّا يَذْكُرُونَ اسْمَ اللَّهِ عَلَيْهَا", meaning: { en: "Cattle over which they mention not Allah's name", ur: "مویشی جن پر یہ Allah کا نام نہیں لیتے" }, explanation: { en: "Slaughter for idols", ur: "بتوں کے لیے ذبح" }, verseRef: "6:138" },
        { term: "افْتِرَاءً عَلَيْهِ", meaning: { en: "Inventing lies against Him", ur: "اس پر جھوٹا بہتان" }, explanation: { en: "False attribution to Allah", ur: "Allah کی طرف جھوٹی نسبت" }, verseRef: "6:138" },
        { term: "مَا فِي بُطُونِ هَٰذِهِ الْأَنْعَامِ خَالِصَةٌ لِّذُكُورِنَا", meaning: { en: "What is in bellies of these cattle for our males only", ur: "ان مویشیوں کے پیٹ میں جو ہے وہ صرف ہمارے مردوں کے لیے ہے" }, explanation: { en: "Gender discrimination in food", ur: "کھانے میں صنفی امتیاز" }, verseRef: "6:139" },
        { term: "وَمُحَرَّمٌ عَلَىٰ أَزْوَاجِنَا", meaning: { en: "Forbidden to our wives", ur: "ہماری عورتوں پر حرام ہے" }, explanation: { en: "Women excluded from certain foods", ur: "عورتوں کو بعض کھانوں سے محروم رکھنا" }, verseRef: "6:139" },
        { term: "قَدْ خَسِرَ الَّذِينَ قَتَلُوا أَوْلَادَهُمْ سَفَهًا", meaning: { en: "Lost are those who killed their children foolishly", ur: "خسارے میں ہیں وہ جنہوں نے حماقت سے اپنی اولاد کو قتل کیا" }, explanation: { en: "Infanticide condemned", ur: "بچوں کے قتل کی مذمت" }, verseRef: "6:140" }
      ]
    },

    prophetMission: {
      name: "Prophet's Mission",
      nameUr: "نبی کی رسالت",
      nameArabic: "رسالة النبي",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "قُلْ إِنَّنِي هَدَانِي رَبِّي إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "Say: My Lord has guided me to straight path", ur: "کہو: میرے رب نے مجھے سیدھے راستے کی ہدایت دی ہے" }, explanation: { en: "Prophet's guidance from Allah", ur: "نبی ﷺ کو Allah کی طرف سے ہدایت" }, verseRef: "6:161" },
        { term: "دِينًا قِيَمًا مِّلَّةَ إِبْرَاهِيمَ حَنِيفًا", meaning: { en: "Upright religion, way of Ibrahim, inclining to truth", ur: "سیدھا دین، ابراہیم کا ملت، حق کی طرف جھکا ہوا" }, explanation: { en: "Continuity with Ibrahim's faith", ur: "ابراہیم کے دین کا تسلسل" }, verseRef: "6:161" },
        { term: "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ", meaning: { en: "Say: My prayer, sacrifice, life and death are for Allah", ur: "کہو: میری نماز، میری قربانی، میرا جینا اور مرنا سب Allah کے لیے ہے" }, explanation: { en: "Complete dedication to Allah", ur: "Allah کے لیے مکمل وقف ہونا" }, verseRef: "6:162" },
        { term: "رَبِّ الْعَالَمِينَ", meaning: { en: "Lord of all worlds", ur: "تمام جہانوں کا رب" }, explanation: { en: "Universal lordship", ur: "آفاقی ربوبیت" }, verseRef: "6:162" },
        { term: "لَا شَرِيكَ لَهُ", meaning: { en: "No partner has He", ur: "اس کا کوئی شریک نہیں" }, explanation: { en: "Core monotheistic declaration", ur: "توحید کا بنیادی اعلان" }, verseRef: "6:163" },
        { term: "وَبِذَٰلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ", meaning: { en: "With this I was commanded, and I am first of Muslims", ur: "مجھے اسی کا حکم دیا گیا ہے اور میں پہلا مسلمان ہوں" }, explanation: { en: "Prophet leads in submission", ur: "نبی ﷺ اطاعت میں پیش پیش" }, verseRef: "6:163" }
      ]
    },

    accountability: {
      name: "Individual Accountability",
      nameUr: "انفرادی جوابدہی",
      nameArabic: "المسؤولية الفردية",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "قُلْ أَغَيْرَ اللَّهِ أَبْغِي رَبًّا", meaning: { en: "Say: Shall I seek other than Allah as Lord?", ur: "کہو: کیا میں Allah کے سوا کوئی رب تلاش کروں؟" }, explanation: { en: "No lord besides Allah", ur: "Allah کے سوا کوئی رب نہیں" }, verseRef: "6:164" },
        { term: "وَهُوَ رَبُّ كُلِّ شَيْءٍ", meaning: { en: "While He is Lord of all things", ur: "حالانکہ وہ ہر چیز کا رب ہے" }, explanation: { en: "Universal sovereignty", ur: "آفاقی حاکمیت" }, verseRef: "6:164" },
        { term: "وَلَا تَكْسِبُ كُلُّ نَفْسٍ إِلَّا عَلَيْهَا", meaning: { en: "Every soul earns only for itself", ur: "ہر جان جو کماتی ہے وہ اسی کے ذمے ہے" }, explanation: { en: "Individual responsibility for deeds", ur: "اعمال کی انفرادی ذمہ داری" }, verseRef: "6:164" },
        { term: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ", meaning: { en: "No bearer of burden bears another's burden", ur: "کوئی بوجھ اٹھانے والا دوسرے کا بوجھ نہیں اٹھائے گا" }, explanation: { en: "No vicarious punishment", ur: "کوئی نیابتی سزا نہیں" }, verseRef: "6:164" },
        { term: "ثُمَّ إِلَىٰ رَبِّكُم مَّرْجِعُكُمْ", meaning: { en: "Then to your Lord is your return", ur: "پھر تمہارے رب کی طرف تمہاری واپسی ہے" }, explanation: { en: "Final return to Allah", ur: "Allah کی طرف آخری واپسی" }, verseRef: "6:164" },
        { term: "فَيُنَبِّئُكُم بِمَا كُنتُمْ فِيهِ تَخْتَلِفُونَ", meaning: { en: "He will inform you of what you differed in", ur: "وہ تمہیں بتائے گا جس میں تم اختلاف کرتے تھے" }, explanation: { en: "Disputes resolved on Judgment Day", ur: "تنازعات قیامت کے دن حل ہوں گے" }, verseRef: "6:164" }
      ]
    },

    humanSuccession: {
      name: "Human Succession on Earth",
      nameUr: "زمین پر انسان کی خلافت",
      nameArabic: "خلافة الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "وَهُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ الْأَرْضِ", meaning: { en: "He made you successors on earth", ur: "وہی ہے جس نے تمہیں زمین میں جانشین بنایا" }, explanation: { en: "Humans as stewards", ur: "انسان بطور نائب و امین" }, verseRef: "6:165" },
        { term: "وَرَفَعَ بَعْضَكُمْ فَوْقَ بَعْضٍ دَرَجَاتٍ", meaning: { en: "Raised some of you above others in degrees", ur: "تم میں سے بعض کو بعض پر درجات میں بلند کیا" }, explanation: { en: "Variation in provision is test", ur: "رزق میں فرق آزمائش ہے" }, verseRef: "6:165" },
        { term: "لِّيَبْلُوَكُمْ فِي مَا آتَاكُمْ", meaning: { en: "To test you in what He gave you", ur: "تاکہ تمہیں آزمائے اس میں جو اس نے تمہیں دیا" }, explanation: { en: "Wealth and status are tests", ur: "دولت اور مرتبہ آزمائش ہیں" }, verseRef: "6:165" },
        { term: "إِنَّ رَبَّكَ سَرِيعُ الْعِقَابِ", meaning: { en: "Your Lord is swift in punishment", ur: "بے شک تمہارا رب سزا دینے میں تیز ہے" }, explanation: { en: "Warning of consequences", ur: "نتائج کی تنبیہ" }, verseRef: "6:165" },
        { term: "وَإِنَّهُ لَغَفُورٌ رَّحِيمٌ", meaning: { en: "And He is Forgiving, Merciful", ur: "اور بے شک وہ بخشنے والا، رحم کرنے والا ہے" }, explanation: { en: "Balance of justice and mercy", ur: "عدل اور رحمت کا توازن" }, verseRef: "6:165" }
      ]
    },

    deathAngels: {
      name: "Death and Angels",
      nameUr: "موت اور فرشتے",
      nameArabic: "الموت والملائكة",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَيُرْسِلُ عَلَيْكُمْ حَفَظَةً", meaning: { en: "He is Dominant over His servants and sends guardian angels", ur: "وہ اپنے بندوں پر غالب ہے اور تم پر نگہبان فرشتے بھیجتا ہے" }, explanation: { en: "Angels record deeds", ur: "فرشتے اعمال لکھتے ہیں" }, verseRef: "6:61" },
        { term: "حَتَّىٰ إِذَا جَاءَ أَحَدَكُمُ الْمَوْتُ تَوَفَّتْهُ رُسُلُنَا", meaning: { en: "Until when death comes, Our messengers take him", ur: "یہاں تک کہ جب تم میں سے کسی کو موت آئے تو ہمارے بھیجے ہوئے فرشتے اس کی روح قبض کرتے ہیں" }, explanation: { en: "Angels collect souls at death", ur: "فرشتے موت کے وقت روح قبض کرتے ہیں" }, verseRef: "6:61" },
        { term: "وَهُمْ لَا يُفَرِّطُونَ", meaning: { en: "And they do not fail", ur: "اور وہ کوتاہی نہیں کرتے" }, explanation: { en: "Angels fulfill duties perfectly", ur: "فرشتے اپنے فرائض مکمل طور پر نبھاتے ہیں" }, verseRef: "6:61" },
        { term: "ثُمَّ رُدُّوا إِلَى اللَّهِ مَوْلَاهُمُ الْحَقِّ", meaning: { en: "Then returned to Allah, their true Master", ur: "پھر لوگوں کو Allah کی طرف لوٹایا جاتا ہے جو ان کا حقیقی مالک ہے" }, explanation: { en: "Return to Allah after death", ur: "موت کے بعد Allah کی طرف واپسی" }, verseRef: "6:62" }
      ]
    },

    quranRevelation: {
      name: "Quran Revelation",
      nameUr: "نزولِ قرآن",
      nameArabic: "نزول القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَهَٰذَا كِتَابٌ أَنزَلْنَاهُ مُبَارَكٌ", meaning: { en: "This is a Book We revealed, blessed", ur: "اور یہ ایک بابرکت کتاب ہے جو ہم نے نازل کی" }, explanation: { en: "Quran's divine origin and blessing", ur: "Quran کی الہٰی اصل اور برکت" }, verseRef: "6:92" },
        { term: "مُّصَدِّقُ الَّذِي بَيْنَ يَدَيْهِ", meaning: { en: "Confirming what came before it", ur: "اپنے سے پہلے کی کتابوں کی تصدیق کرنے والی" }, explanation: { en: "Quran confirms previous scriptures", ur: "Quran پچھلی کتابوں کی تصدیق کرتا ہے" }, verseRef: "6:92" },
        { term: "وَلِتُنذِرَ أُمَّ الْقُرَىٰ وَمَنْ حَوْلَهَا", meaning: { en: "To warn mother of cities and those around", ur: "تاکہ شہروں کی ماں (مکہ) اور اس کے ارد گرد والوں کو خبردار کرے" }, explanation: { en: "Makkah as center, message to all", ur: "مکہ مرکز ہے، پیغام سب کے لیے" }, verseRef: "6:92" },
        { term: "وَالَّذِينَ يُؤْمِنُونَ بِالْآخِرَةِ يُؤْمِنُونَ بِهِ", meaning: { en: "Those who believe in Hereafter believe in it", ur: "جو آخرت پر ایمان رکھتے ہیں وہ اس پر بھی ایمان رکھتے ہیں" }, explanation: { en: "Faith in Quran linked to afterlife belief", ur: "Quran پر ایمان آخرت کے ایمان سے جڑا ہے" }, verseRef: "6:92" },
        { term: "وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا", meaning: { en: "Who is more unjust than one who invents lies about Allah", ur: "اس سے بڑا ظالم کون ہے جو Allah پر جھوٹ باندھے" }, explanation: { en: "Fabricating against Allah is worst", ur: "Allah پر جھوٹ باندھنا سب سے بڑا ظلم ہے" }, verseRef: "6:93" },
        { term: "أَوْ قَالَ أُوحِيَ إِلَيَّ وَلَمْ يُوحَ إِلَيْهِ شَيْءٌ", meaning: { en: "Or says 'Revelation came to me' when nothing was revealed", ur: "یا وہ جو کہے مجھ پر وحی آئی حالانکہ اس پر کچھ نازل نہیں ہوا" }, explanation: { en: "False prophets condemned", ur: "جھوٹے نبیوں کی مذمت" }, verseRef: "6:93" }
      ]
    },

    previousNations: {
      name: "Previous Nations' Fate",
      nameUr: "پچھلی قوموں کا انجام",
      nameArabic: "مصير الأمم السابقة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ", meaning: { en: "Do they not see how many generations We destroyed before?", ur: "کیا انہوں نے نہیں دیکھا کہ ہم نے ان سے پہلے کتنی قومیں تباہ کیں؟" }, explanation: { en: "Historical warning", ur: "تاریخی تنبیہ" }, verseRef: "6:6" },
        { term: "مَّكَّنَّاهُمْ فِي الْأَرْضِ مَا لَمْ نُمَكِّن لَّكُمْ", meaning: { en: "Established them in earth as We have not for you", ur: "ہم نے انہیں زمین میں ایسی طاقت دی جو تمہیں نہیں دی" }, explanation: { en: "Past nations had more power", ur: "پچھلی قومیں زیادہ طاقتور تھیں" }, verseRef: "6:6" },
        { term: "وَأَرْسَلْنَا السَّمَاءَ عَلَيْهِم مِّدْرَارًا", meaning: { en: "Sent sky upon them pouring rain", ur: "ان پر آسمان سے موسلادھار بارش بھیجی" }, explanation: { en: "Abundant provision given", ur: "بے شمار رزق دیا گیا" }, verseRef: "6:6" },
        { term: "فَأَهْلَكْنَاهُم بِذُنُوبِهِمْ", meaning: { en: "Destroyed them for their sins", ur: "پھر ان کے گناہوں کی وجہ سے انہیں تباہ کر دیا" }, explanation: { en: "Sin leads to destruction", ur: "گناہ تباہی کا سبب بنتا ہے" }, verseRef: "6:6" },
        { term: "وَأَنشَأْنَا مِن بَعْدِهِمْ قَرْنًا آخَرِينَ", meaning: { en: "Raised after them another generation", ur: "ان کے بعد ایک اور قوم اٹھائی" }, explanation: { en: "Allah replaces nations", ur: "Allah قوموں کو بدل دیتا ہے" }, verseRef: "6:6" }
      ]
    },

    disbelieversExcuses: {
      name: "Disbelievers' Excuses",
      nameUr: "کافروں کے بہانے",
      nameArabic: "أعذار الكافرين",
      color: '#EC4899',
      icon: 'MessageCircle',
      concepts: [
        { term: "وَلَوْ نَزَّلْنَا عَلَيْكَ كِتَابًا فِي قِرْطَاسٍ فَلَمَسُوهُ بِأَيْدِيهِمْ", meaning: { en: "Even if We sent a book on paper and they touched it", ur: "اگر ہم تم پر کاغذ پر لکھی کتاب نازل کرتے اور وہ اسے ہاتھوں سے چھوتے" }, explanation: { en: "Physical proof would be denied", ur: "مادی ثبوت بھی انکار کیا جاتا" }, verseRef: "6:7" },
        { term: "لَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ", meaning: { en: "Disbelievers would say: This is only clear magic", ur: "کافر لوگ کہتے: یہ تو صریح جادو ہے" }, explanation: { en: "Any miracle called magic", ur: "ہر معجزے کو جادو کہا جاتا" }, verseRef: "6:7" },
        { term: "وَقَالُوا لَوْلَا أُنزِلَ عَلَيْهِ مَلَكٌ", meaning: { en: "They say: Why was an angel not sent down?", ur: "یہ کہتے ہیں: اس پر فرشتہ کیوں نہیں اتارا گیا؟" }, explanation: { en: "Demanding visible angels", ur: "نظر آنے والے فرشتوں کا مطالبہ" }, verseRef: "6:8" },
        { term: "وَلَوْ أَنزَلْنَا مَلَكًا لَّقُضِيَ الْأَمْرُ", meaning: { en: "If We sent an angel, matter would be decided", ur: "اگر ہم فرشتہ اتارتے تو معاملہ فیصل ہو جاتا" }, explanation: { en: "Angel appearance = immediate judgment", ur: "فرشتے کا ظاہر ہونا = فوری فیصلہ" }, verseRef: "6:8" },
        { term: "وَلَوْ جَعَلْنَاهُ مَلَكًا لَّجَعَلْنَاهُ رَجُلًا", meaning: { en: "If We made him angel, We would have made him a man", ur: "اگر ہم اسے فرشتہ بناتے تو بھی اسے مرد کی شکل میں بھیجتے" }, explanation: { en: "Angels would appear human anyway", ur: "فرشتے بہرحال انسانی شکل میں آتے" }, verseRef: "6:9" }
      ]
    },

    guidanceMisguidance: {
      name: "Guidance and Misguidance",
      nameUr: "ہدایت اور گمراہی",
      nameArabic: "الهداية والضلال",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "مَن يَشَإِ اللَّهُ يُضْلِلْهُ وَمَن يَشَأْ يَجْعَلْهُ عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "Whom Allah wills He leaves astray, whom He wills He places on straight path", ur: "جسے Allah چاہے گمراہ کر دے اور جسے چاہے سیدھے راستے پر رکھ دے" }, explanation: { en: "Divine will in guidance", ur: "ہدایت میں الہٰی مشیت" }, verseRef: "6:39" },
        { term: "فَمَن يُرِدِ اللَّهُ أَن يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ", meaning: { en: "Whom Allah wants to guide, He expands his chest to Islam", ur: "جسے Allah ہدایت دینا چاہے اس کا سینہ اسلام کے لیے کھول دیتا ہے" }, explanation: { en: "Heart opened for faith", ur: "ایمان کے لیے دل کھول دیا جاتا ہے" }, verseRef: "6:125" },
        { term: "وَمَن يُرِدْ أَن يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا", meaning: { en: "Whom He wants to misguide, He makes his chest tight, constricted", ur: "جسے وہ گمراہ کرنا چاہے اس کا سینہ تنگ اور بند کر دیتا ہے" }, explanation: { en: "Heart closed to truth", ur: "دل حق کے لیے بند ہو جاتا ہے" }, verseRef: "6:125" },
        { term: "كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ", meaning: { en: "As though climbing into the sky", ur: "جیسے وہ آسمان میں چڑھ رہا ہو" }, explanation: { en: "Difficulty breathing metaphor", ur: "سانس لینے میں دشواری کی تمثیل" }, verseRef: "6:125" },
        { term: "كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ", meaning: { en: "Thus Allah places defilement on those who do not believe", ur: "اسی طرح Allah ان لوگوں پر پلیدی ڈالتا ہے جو ایمان نہیں لاتے" }, explanation: { en: "Disbelief brings spiritual corruption", ur: "کفر روحانی بگاڑ لاتا ہے" }, verseRef: "6:125" }
      ]
    },

    commandments: {
      name: "Core Commandments",
      nameUr: "بنیادی احکامات",
      color: '#22C55E',
      icon: 'Shield',
      nameArabic: "الوصايا الأساسية",
      concepts: [
        { term: "قُلْ تَعَالَوْا أَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ", meaning: { en: "Say: Come, I recite what your Lord has forbidden", ur: "کہو: آؤ، میں تمہیں سناؤں جو تمہارے رب نے تم پر حرام کیا ہے" }, explanation: { en: "Introduction to divine commands", ur: "الہٰی احکامات کا تعارف" }, verseRef: "6:151" },
        { term: "أَلَّا تُشْرِكُوا بِهِ شَيْئًا", meaning: { en: "Associate nothing with Him", ur: "اس کے ساتھ کسی کو شریک نہ ٹھہراؤ" }, explanation: { en: "First command: no shirk", ur: "پہلا حکم: شرک نہ کرو" }, verseRef: "6:151" },
        { term: "وَبِالْوَالِدَيْنِ إِحْسَانًا", meaning: { en: "And to parents, good treatment", ur: "اور والدین کے ساتھ اچھا سلوک کرو" }, explanation: { en: "Kindness to parents", ur: "والدین سے حسنِ سلوک" }, verseRef: "6:151" },
        { term: "وَلَا تَقْتُلُوا أَوْلَادَكُم مِّنْ إِمْلَاقٍ", meaning: { en: "Do not kill your children from poverty", ur: "اپنی اولاد کو غربت کی وجہ سے قتل نہ کرو" }, explanation: { en: "No infanticide", ur: "بچوں کا قتل ممنوع" }, verseRef: "6:151" },
        { term: "نَّحْنُ نَرْزُقُكُمْ وَإِيَّاهُمْ", meaning: { en: "We provide for you and them", ur: "ہم تمہیں بھی رزق دیتے ہیں اور انہیں بھی" }, explanation: { en: "Allah provides for all", ur: "Allah سب کو رزق دیتا ہے" }, verseRef: "6:151" },
        { term: "وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ", meaning: { en: "Do not approach immoralities - open or secret", ur: "بے حیائی کے قریب نہ جاؤ خواہ ظاہری ہوں یا پوشیدہ" }, explanation: { en: "Avoid all indecency", ur: "ہر قسم کی بے حیائی سے بچو" }, verseRef: "6:151" },
        { term: "وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ", meaning: { en: "Do not kill soul Allah made sacred except by right", ur: "جس جان کو Allah نے حرام کیا ہے اسے ناحق قتل نہ کرو" }, explanation: { en: "Sanctity of life", ur: "جان کی حرمت" }, verseRef: "6:151" },
        { term: "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ", meaning: { en: "Do not approach orphan's wealth except in best manner", ur: "یتیم کے مال کے قریب نہ جاؤ مگر بہترین طریقے سے" }, explanation: { en: "Protect orphan's property", ur: "یتیم کے مال کی حفاظت کرو" }, verseRef: "6:152" },
        { term: "وَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ بِالْقِسْطِ", meaning: { en: "Give full measure and weight with justice", ur: "ناپ اور تول انصاف سے پورا کرو" }, explanation: { en: "Fair business dealings", ur: "کاروبار میں انصاف" }, verseRef: "6:152" },
        { term: "وَإِذَا قُلْتُمْ فَاعْدِلُوا", meaning: { en: "When you speak, be just", ur: "جب بولو تو انصاف سے بولو" }, explanation: { en: "Truthful speech always", ur: "ہمیشہ سچی بات کہو" }, verseRef: "6:152" },
        { term: "وَبِعَهْدِ اللَّهِ أَوْفُوا", meaning: { en: "Fulfill the covenant of Allah", ur: "Allah کے عہد کو پورا کرو" }, explanation: { en: "Keep promises to Allah", ur: "Allah سے کیے وعدے پورے کرو" }, verseRef: "6:152" },
        { term: "وَأَنَّ هَٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ", meaning: { en: "This is My straight path, so follow it", ur: "اور یہ میرا سیدھا راستہ ہے پس اس کی پیروی کرو" }, explanation: { en: "Follow this way only", ur: "صرف اسی راستے کی پیروی کرو" }, verseRef: "6:153" },
        { term: "وَلَا تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ عَن سَبِيلِهِ", meaning: { en: "Do not follow other paths, they will separate you from His path", ur: "دوسرے راستوں پر نہ چلو ورنہ وہ تمہیں اس کے راستے سے ہٹا دیں گے" }, explanation: { en: "Unity on straight path", ur: "سیدھے راستے پر اتحاد" }, verseRef: "6:153" }
      ]
    }
  },

  relationships: [
    { from: "خلق السماوات والأرض", to: "جعل الظلمات والنور", type: "enumeration", description: { en: "Creation includes opposites", ur: "تخلیق میں اضداد شامل ہیں" } },
    { from: "كوكب", to: "قمر", type: "progression", description: { en: "Ibrahim's logical ascent", ur: "ابراہیم کی عقلی پیش رفت" } },
    { from: "قمر", to: "شمس", type: "progression", description: { en: "Ibrahim's journey continues", ur: "ابراہیم کا سفر جاری" } },
    { from: "شمس", to: "فاطر السماوات", type: "conclusion", description: { en: "Ibrahim reaches Creator", ur: "ابراہیم خالق تک پہنچے" } },
    { from: "مفاتح الغيب", to: "ورقة تسقط", type: "expansion", description: { en: "From cosmic to minute details", ur: "کائناتی سے لے کر باریک تفصیلات تک" } },
    { from: "ثمانية أزواج", to: "ضأن/معز/إبل/بقر", type: "enumeration", description: { en: "Eight pairs specified", ur: "آٹھ جوڑوں کی تفصیل" } },
    { from: "لا تشركوا", to: "صراط مستقيم", type: "cause-effect", description: { en: "Monotheism leads to straight path", ur: "توحید سیدھے راستے کی طرف لے جاتی ہے" } },
    { from: "افتراء على الله", to: "خسران", type: "consequence", description: { en: "False claims bring loss", ur: "جھوٹے دعوے نقصان لاتے ہیں" } },
    { from: "خلائف الأرض", to: "ليبلوكم", type: "purpose", description: { en: "Succession is a test", ur: "خلافت ایک آزمائش ہے" } },
    { from: "هداية الله", to: "شرح الصدر", type: "manifestation", description: { en: "Guidance opens hearts", ur: "ہدایت دلوں کو کھولتی ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Creation & Attributes", verses: "6:1-18", description: { en: "Opening praise, Allah's creation, refutation of polytheism", ur: "افتتاحی حمد، Allah کی تخلیق، شرک کی تردید" } },
      { stage: 2, theme: "Warning & Previous Nations", verses: "6:19-49", description: { en: "Consequences of denial, fate of past nations", ur: "انکار کے نتائج، گزشتہ قوموں کا انجام" } },
      { stage: 3, theme: "Divine Knowledge & Power", verses: "6:50-73", description: { en: "Allah's complete knowledge, keys of unseen, protection", ur: "Allah کا مکمل علم، غیب کی کنجیاں، حفاظت" } },
      { stage: 4, theme: "Ibrahim's Journey", verses: "6:74-90", description: { en: "Search for truth through stars/moon/sun to Creator", ur: "ستاروں/چاند/سورج سے خالق تک حق کی تلاش" } },
      { stage: 5, theme: "Quran & False Claims", verses: "6:91-117", description: { en: "Quran's status, false prophets, cosmic signs", ur: "Quran کا مقام، جھوٹے نبی، کائناتی نشانیاں" } },
      { stage: 6, theme: "Guidance & Misguidance", verses: "6:118-135", description: { en: "Open vs closed hearts, patience commanded", ur: "کھلے اور بند دل، صبر کا حکم" } },
      { stage: 7, theme: "Pagan Practices", verses: "6:136-147", description: { en: "False food taboos, cattle superstitions refuted", ur: "جھوٹے کھانے کے رواج، مویشیوں کے توہمات کی تردید" } },
      { stage: 8, theme: "Core Commandments", verses: "6:148-154", description: { en: "Ten commandments equivalent, straight path", ur: "دس بنیادی احکام، سیدھا راستہ" } },
      { stage: 9, theme: "Final Instructions", verses: "6:155-165", description: { en: "Follow Quran, Prophet's dedication, human succession", ur: "Quran کی پیروی، نبی ﷺ کی فدا کاری، انسانی خلافت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Pure Monotheism", how: "Never associate anything with Allah in worship, supplication, or reliance", verse: "6:151, 6:163" },
      { principle: "Reflect Like Ibrahim", how: "Use logic and observation to strengthen faith, reject blind following", verse: "6:76-79" },
      { principle: "Knowledge of Unseen", how: "Trust Allah knows all, even falling leaves - nothing is insignificant to Him", verse: "6:59" },
      { principle: "Complete Dedication", how: "Prayer, sacrifice, life, and death - all for Allah alone", verse: "6:162" },
      { principle: "Individual Accountability", how: "No one bears another's burden - focus on your own deeds", verse: "6:164" },
      { principle: "Following Commands", how: "Adhere to the commandments - parents, life sanctity, justice, promises", verse: "6:151-153" },
      { principle: "Reject Superstition", how: "Food laws come from revelation, not traditions or superstitions", verse: "6:138-145" },
      { principle: "Observation of Signs", how: "Look at fruits ripening, stars guiding, rain falling - see Allah's signs", verse: "6:97-99" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Tawheed's Foundation", ur: "توحید کی بنیاد کی سورت" },
    insight: { en: "Surah Al-An'am is unique among Makkan surahs - Ibn Abbas reported it was revealed all at once, accompanied by 70,000 angels glorifying Allah. This comprehensive surah establishes the intellectual, logical, and spiritual foundations of monotheism. Ibrahim's journey from star to moon to sun to Creator (6:76-79) provides the timeless methodology for discovering truth through rational reflection. The 'Keys of the Unseen' verse (6:59) is considered one of the greatest verses about Allah's knowledge. The surah's name 'Al-An'am' (Cattle) refers to the extensive refutation of pre-Islamic Arab superstitions about livestock, demonstrating that true religion liberates from man-made taboos. The final verses (6:151-153) present Islam's core commandments - comparable to the Ten Commandments - showing Islam's ethical continuity with previous revelations. The surah concludes with the profound declaration that life, death, prayer, and sacrifice are all for Allah alone (6:162-163).", ur: "سورۃ الانعام مکی سورتوں میں منفرد ہے - ابن عباس کی روایت کے مطابق یہ ایک ہی مرتبہ نازل ہوئی، ستر ہزار فرشتے Allah کی تسبیح کرتے ہوئے ساتھ تھے۔ یہ جامع سورت توحید کی عقلی، منطقی اور روحانی بنیادیں قائم کرتی ہے۔ ابراہیم کا ستارے سے چاند سے سورج سے خالق تک کا سفر (6:76-79) غور و فکر سے حق کی تلاش کا لازوال طریقہ فراہم کرتا ہے۔ 'مفاتح الغیب' کی آیت (6:59) Allah کے علم کے بارے میں عظیم ترین آیات میں شمار ہوتی ہے۔ سورت کا نام 'الانعام' (مویشی) اسلام سے قبل عرب کے مویشیوں کے توہمات کی وسیع تردید کی طرف اشارہ کرتا ہے، جو ظاہر کرتا ہے کہ سچا دین انسانی بنائے ہوئے رواجوں سے آزاد کرتا ہے۔ آخری آیات (6:151-153) اسلام کے بنیادی احکامات پیش کرتی ہیں جو اخلاقی تسلسل ظاہر کرتے ہیں۔ سورت اس عمیق اعلان پر ختم ہوتی ہے کہ زندگی، موت، نماز اور قربانی سب صرف Allah کے لیے ہیں (6:162-163)۔" }
  },

  historicalContext: {
    note: { en: "Al-An'am was revealed in Makkah during a critical phase when the Prophet ﷺ faced intense opposition. The surah addresses the Arab polytheists' core beliefs, systematically dismantling idol worship, angel worship, and superstitious practices. The cattle-related discussions (6:136-145) specifically target the complex food taboo system Arabs had invented, including the bahira (she-camel with split ear), sa'iba (she-camel let loose), wasila (newborn female kept if male born with it), and ham (stallion freed after producing offspring). These practices combined religious superstition with gender discrimination and were all declared false inventions against Allah.", ur: "سورۃ الانعام مکہ میں ایک نازک دور میں نازل ہوئی جب نبی ﷺ کو شدید مخالفت کا سامنا تھا۔ سورت عرب مشرکین کے بنیادی عقائد کا جواب دیتی ہے، منظم طریقے سے بت پرستی، فرشتوں کی پوجا اور توہم پرستانہ رسومات کی تردید کرتی ہے۔ مویشیوں سے متعلق بحث (6:136-145) خاص طور پر عربوں کے ایجاد کردہ پیچیدہ کھانے کی پابندیوں کے نظام کو نشانہ بناتی ہے، جن میں بحیرہ (کان چرے اونٹنی)، سائبہ (آزاد چھوڑی گئی اونٹنی)، وصیلہ (نر کے ساتھ پیدا ہونے والی مادہ)، اور حام (اولاد پیدا کرنے کے بعد آزاد کیا گیا نر) شامل ہیں۔ ان رسومات نے مذہبی توہم پرستی کو صنفی امتیاز کے ساتھ ملایا تھا اور سب کو Allah پر جھوٹا بہتان قرار دیا گیا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "فَالِقُ", example: { en: "Cleaver (of daybreak)", ur: "صبح کو چیرنے والا" }, effect: "Intensive form - Allah actively splits the dawn daily" },
      { feature: "مَفَاتِح الْغَيْبِ", example: { en: "Keys of unseen", ur: "غیب کی کنجیاں" }, effect: "Plural of مفتاح - multiple domains of hidden knowledge" },
      { feature: "حَنِيفًا", example: { en: "Inclining to truth", ur: "حق کی طرف جھکا ہوا" }, effect: "Root ح ن ف - turning away from falsehood toward truth" },
      { feature: "كَأَنَّمَا يَصَّعَّدُ", example: { en: "As if climbing up", ur: "جیسے آسمان میں چڑھ رہا ہو" }, effect: "Form V - intensive, struggling to ascend" },
      { feature: "خَلَائِف", example: { en: "Successors", ur: "جانشین" }, effect: "Plural of خليفة - multiple generations as stewards" },
      { feature: "طِبَاقًا", example: { en: "In layers", ur: "تہوں میں" }, effect: "From طبق - matching, layered" }
    ]
  },

  namesOfAllahInSurah: {
    names: [
      { name: "الله", transliteration: "Allah", meaning: { en: "The One True God", ur: "واحد برحق معبود" }, verse: "6:1" },
      { name: "رب العالمين", transliteration: "Rabb al-'Alamin", meaning: { en: "Lord of All Worlds", ur: "تمام جہانوں کا رب" }, verse: "6:162" },
      { name: "القاهر", transliteration: "Al-Qahir", meaning: { en: "The Dominant", ur: "غالب" }, verse: "6:61" },
      { name: "اللطيف الخبير", transliteration: "Al-Latif Al-Khabir", meaning: { en: "The Subtle, The All-Aware", ur: "باریک بین، خبر رکھنے والا" }, verse: "6:103" },
      { name: "فاطر السماوات والأرض", transliteration: "Fatir as-Samawat wal-Ard", meaning: { en: "Originator of Heavens and Earth", ur: "آسمانوں اور زمین کو عدم سے پیدا کرنے والا" }, verse: "6:79" },
      { name: "بديع السماوات والأرض", transliteration: "Badi' as-Samawat wal-Ard", meaning: { en: "Originator (without model)", ur: "بغیر نمونے کے ایجاد کرنے والا" }, verse: "6:101" },
      { name: "الغفور الرحيم", transliteration: "Al-Ghafur Ar-Rahim", meaning: { en: "The Forgiving, The Merciful", ur: "بخشنے والا، رحم کرنے والا" }, verse: "6:165" },
      { name: "سريع العقاب", transliteration: "Sari' al-'Iqab", meaning: { en: "Swift in Punishment", ur: "جلد سزا دینے والا" }, verse: "6:165" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "6:59", topic: "Divine Knowledge", note: "Awareness of every falling leaf - ecosystem interconnectedness" },
      { verse: "6:96", topic: "Sun and Moon for Calculation", note: "Lunar and solar cycles for timekeeping" },
      { verse: "6:97", topic: "Star Navigation", note: "Stars as guidance in darkness - historical and modern navigation" },
      { verse: "6:99", topic: "Botanical Diversity", note: "From one water, diverse plants emerge - genetic variation" },
      { verse: "6:125", topic: "Altitude and Breathing", note: "Chest constriction when ascending - relates to atmospheric pressure" }
    ]
  }
};

export default ONTOLOGY;
