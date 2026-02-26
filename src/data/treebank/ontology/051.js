/**
 * Surah Adh-Dhariyat (The Scattering Winds) - Surah 51
 * Ontology of Quranic Concepts and Relationships
 * 60 Ayahs - Makkan
 * Major themes: The Scattering Winds, Creation's Purpose (Worship), Ibrahim's Guests, Destroyed Nations
 */

export const ONTOLOGY = {
  surahId: 51,
  surahName: "Adh-Dhariyat",
  surahNameArabic: "الذاريات",
  totalAyahs: 60,
  revelationType: "Makkan",
  mainTheme: { en: "Divine Signs in Nature and History Confirming Resurrection and Judgment", ur: "فطرت اور تاریخ میں الٰہی نشانیاں جو قیامت اور حساب کی تصدیق کرتی ہیں" },

  categories: {
    cosmicOaths: {
      name: "The Cosmic Oaths",
      nameUr: "کائناتی قسمیں",
      nameAr: "القسم بالمخلوقات",
      color: "#8B5CF6",
      concepts: [
        { term: "Adh-Dhariyat", arabic: "وَالذَّارِيَاتِ ذَرْوًا", meaning: { en: "By the winds scattering [dust]", ur: "بکھیرنے والی ہواؤں کی قسم" }, ayahs: [1] },
        { term: "Al-Hamilat", arabic: "فَالْحَامِلَاتِ وِقْرًا", meaning: { en: "And [clouds] carrying a load [of rain]", ur: "اور (بارش کا) بوجھ اٹھانے والے (بادلوں کی)" }, ayahs: [2] },
        { term: "Al-Jariyat", arabic: "فَالْجَارِيَاتِ يُسْرًا", meaning: { en: "And [ships] sailing with ease", ur: "اور آسانی سے چلنے والے (جہازوں کی)" }, ayahs: [3] },
        { term: "Al-Muqassimat", arabic: "فَالْمُقَسِّمَاتِ أَمْرًا", meaning: { en: "And [angels] distributing affairs", ur: "اور (فرشتوں کی جو) معاملات تقسیم کرتے ہیں" }, ayahs: [4] }
      ]
    },

    promiseOfJudgment: {
      name: "Promise of Judgment",
      nameUr: "جزا کا وعدہ",
      nameAr: "وعد يوم الدين",
      color: "#EF4444",
      concepts: [
        { term: "True Promise", arabic: "إِنَّمَا تُوعَدُونَ لَصَادِقٌ", meaning: { en: "Indeed, what you are promised is true", ur: "بلاشبہ جس کا تم سے وعدہ کیا جاتا ہے وہ سچ ہے" }, ayahs: [5] },
        { term: "Day of Recompense", arabic: "وَإِنَّ الدِّينَ لَوَاقِعٌ", meaning: { en: "And indeed, the recompense will occur", ur: "اور بلاشبہ جزا و سزا ضرور واقع ہوگی" }, ayahs: [6] },
        { term: "Day of Sorting", arabic: "يَوْمَ هُمْ عَلَى النَّارِ يُفْتَنُونَ", meaning: { en: "Day they are tried over the Fire", ur: "جس دن وہ آگ پر آزمائے جائیں گے" }, ayahs: [13] },
        { term: "Taste Affliction", arabic: "ذُوقُوا فِتْنَتَكُمْ", meaning: { en: "Taste your affliction", ur: "اپنی آزمائش کا مزہ چکھو" }, ayahs: [14] }
      ]
    },

    signsInCosmos: {
      name: "Signs in the Cosmos",
      nameUr: "کائنات میں نشانیاں",
      nameAr: "آيات في السماء",
      color: "#3B82F6",
      concepts: [
        { term: "Woven Sky", arabic: "وَالسَّمَاءِ ذَاتِ الْحُبُكِ", meaning: { en: "By the sky containing pathways", ur: "راستوں والے آسمان کی قسم" }, ayahs: [7] },
        { term: "Conflicting Sayings", arabic: "إِنَّكُمْ لَفِي قَوْلٍ مُّخْتَلِفٍ", meaning: { en: "Indeed, you are in differing speech", ur: "بلاشبہ تم مختلف باتوں میں (پڑے ہوئے) ہو" }, ayahs: [8] },
        { term: "Deluded Away", arabic: "يُؤْفَكُ عَنْهُ مَنْ أُفِكَ", meaning: { en: "Deluded from Quran is he who is deluded", ur: "قرآن سے وہی پھرا ہوا ہے جو پھرا ہوا ہے" }, ayahs: [9] }
      ]
    },

    liarsDestroyed: {
      name: "The Liars Destroyed",
      nameUr: "جھوٹوں کی ہلاکت",
      nameAr: "هلاك الكاذبين",
      color: "#F59E0B",
      concepts: [
        { term: "Al-Kharrasun", arabic: "قُتِلَ الْخَرَّاصُونَ", meaning: { en: "Destroyed are the liars/speculators", ur: "ہلاک ہوئے اٹکل لگانے والے جھوٹے" }, ayahs: [10] },
        { term: "Heedless Ones", arabic: "الَّذِينَ هُمْ فِي غَمْرَةٍ سَاهُونَ", meaning: { en: "Those in flood [of ignorance], heedless", ur: "جو (جہالت کے) سیلاب میں غافل ہیں" }, ayahs: [11] },
        { term: "Questioning Day", arabic: "يَسْأَلُونَ أَيَّانَ يَوْمُ الدِّينِ", meaning: { en: "They ask, When is the Day of Recompense?", ur: "وہ پوچھتے ہیں، جزا کا دن کب ہے؟" }, ayahs: [12] }
      ]
    },

    righteousRewards: {
      name: "Rewards of the Righteous",
      nameUr: "متقیوں کا اجر",
      nameAr: "جزاء المتقين",
      color: "#10B981",
      concepts: [
        { term: "Gardens and Springs", arabic: "فِي جَنَّاتٍ وَعُيُونٍ", meaning: { en: "In gardens and springs", ur: "باغوں اور چشموں میں" }, ayahs: [15] },
        { term: "Receiving Gifts", arabic: "آخِذِينَ مَا آتَاهُمْ رَبُّهُمْ", meaning: { en: "Receiving what their Lord has given them", ur: "اپنے رب کی دی ہوئی چیزیں لیتے ہوئے" }, ayahs: [16] },
        { term: "Muhsinun Before", arabic: "إِنَّهُمْ كَانُوا قَبْلَ ذَٰلِكَ مُحْسِنِينَ", meaning: { en: "They were doers of good before that", ur: "وہ اس سے پہلے نیکی کرنے والے تھے" }, ayahs: [16] },
        { term: "Little Sleep", arabic: "كَانُوا قَلِيلًا مِّنَ اللَّيْلِ مَا يَهْجَعُونَ", meaning: { en: "They used to sleep little at night", ur: "وہ رات کو بہت کم سوتے تھے" }, ayahs: [17] },
        { term: "Seeking Forgiveness", arabic: "وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ", meaning: { en: "And in early dawn they sought forgiveness", ur: "اور صبح کے وقت وہ استغفار کرتے تھے" }, ayahs: [18] },
        { term: "Sharing Wealth", arabic: "وَفِي أَمْوَالِهِمْ حَقٌّ لِّلسَّائِلِ وَالْمَحْرُومِ", meaning: { en: "And in their wealth was a right for the beggar and deprived", ur: "اور ان کے مالوں میں مانگنے والے اور محروم کا حق تھا" }, ayahs: [19] }
      ]
    },

    signsOnEarth: {
      name: "Signs on Earth and Within",
      nameUr: "زمین اور انسان میں نشانیاں",
      nameAr: "آيات في الأرض والأنفس",
      color: "#6366F1",
      concepts: [
        { term: "Signs on Earth", arabic: "وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ", meaning: { en: "On earth are signs for the certain", ur: "زمین میں یقین رکھنے والوں کے لیے نشانیاں ہیں" }, ayahs: [20] },
        { term: "Signs in Yourselves", arabic: "وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ", meaning: { en: "And in yourselves. Do you not see?", ur: "اور تمہارے اپنے اندر بھی۔ کیا تم نہیں دیکھتے؟" }, ayahs: [21] },
        { term: "Provision in Sky", arabic: "وَفِي السَّمَاءِ رِزْقُكُمْ", meaning: { en: "And in the sky is your provision", ur: "اور آسمان میں تمہارا رزق ہے" }, ayahs: [22] },
        { term: "Promise True", arabic: "إِنَّهُ لَحَقٌّ مِّثْلَ مَا أَنَّكُمْ تَنطِقُونَ", meaning: { en: "It is truth, just as you speak", ur: "یہ بالکل سچ ہے جیسے تم بولتے ہو" }, ayahs: [23] }
      ]
    },

    ibrahimGuests: {
      name: "Ibrahim's Honored Guests",
      nameUr: "ابراہیم کے معزز مہمان",
      nameAr: "ضيف إبراهيم المكرمين",
      color: "#EC4899",
      concepts: [
        { term: "Honored Guests", arabic: "ضَيْفِ إِبْرَاهِيمَ الْمُكْرَمِينَ", meaning: { en: "Honored guests of Ibrahim", ur: "ابراہیم کے معزز مہمان" }, ayahs: [24] },
        { term: "Greeting Peace", arabic: "قَالُوا سَلَامًا ۖ قَالَ سَلَامٌ", meaning: { en: "They said Peace; he said Peace", ur: "انہوں نے کہا سلام؛ انہوں نے کہا سلام" }, ayahs: [25] },
        { term: "Unknown People", arabic: "قَوْمٌ مُّنكَرُونَ", meaning: { en: "Unrecognized people", ur: "اجنبی لوگ" }, ayahs: [25] },
        { term: "Roasted Calf", arabic: "فَجَاءَ بِعِجْلٍ حَنِيذٍ", meaning: { en: "He brought a roasted calf", ur: "وہ بھنا ہوا بچھڑا لے آئے" }, ayahs: [26] },
        { term: "Not Eating", arabic: "أَلَا تَأْكُلُونَ", meaning: { en: "Will you not eat?", ur: "کیا تم کھاؤ گے نہیں؟" }, ayahs: [27] },
        { term: "Fear in Heart", arabic: "فَأَوْجَسَ مِنْهُمْ خِيفَةً", meaning: { en: "He felt fear of them", ur: "ان سے دل میں ڈر محسوس کیا" }, ayahs: [28] },
        { term: "Do Not Fear", arabic: "لَا تَخَفْ", meaning: { en: "Do not fear", ur: "ڈرو نہیں" }, ayahs: [28] },
        { term: "Glad Tidings", arabic: "وَبَشَّرُوهُ بِغُلَامٍ عَلِيمٍ", meaning: { en: "They gave him good tidings of a learned boy", ur: "انہوں نے ایک علم والے بیٹے کی خوشخبری دی" }, ayahs: [28] },
        { term: "Wife's Reaction", arabic: "فَأَقْبَلَتِ امْرَأَتُهُ فِي صَرَّةٍ", meaning: { en: "His wife came forward with a cry", ur: "ان کی بیوی چیخ مارتی ہوئی آگے آئیں" }, ayahs: [29] },
        { term: "Struck Her Face", arabic: "فَصَكَّتْ وَجْهَهَا", meaning: { en: "She struck her face [in amazement]", ur: "اپنے چہرے پر ہاتھ مارا [حیرت سے]" }, ayahs: [29] },
        { term: "Barren Old Woman", arabic: "عَجُوزٌ عَقِيمٌ", meaning: { en: "A barren old woman", ur: "ایک بوڑھی بانجھ عورت" }, ayahs: [29] },
        { term: "Allah's Decree", arabic: "كَذَٰلِكِ قَالَ رَبُّكِ", meaning: { en: "Thus said your Lord", ur: "ایسے ہی تمہارے رب نے فرمایا" }, ayahs: [30] }
      ]
    },

    missionToLut: {
      name: "Mission to Lut's People",
      nameUr: "لوط کی قوم کی طرف بھیجنا",
      nameAr: "إرسال إلى قوم لوط",
      color: "#F43F5E",
      concepts: [
        { term: "Angels' Mission", arabic: "قَالَ فَمَا خَطْبُكُمْ أَيُّهَا الْمُرْسَلُونَ", meaning: { en: "What is your mission, O messengers?", ur: "اے بھیجے ہوئے فرشتو، تمہارا کام کیا ہے؟" }, ayahs: [31] },
        { term: "Sinful People", arabic: "إِلَىٰ قَوْمٍ مُّجْرِمِينَ", meaning: { en: "To a sinful people", ur: "ایک مجرم قوم کی طرف" }, ayahs: [32] },
        { term: "Stones of Clay", arabic: "حِجَارَةً مِّن طِينٍ", meaning: { en: "Stones of clay", ur: "مٹی کے پتھر" }, ayahs: [33] },
        { term: "Marked by Lord", arabic: "مُّسَوَّمَةً عِندَ رَبِّكَ", meaning: { en: "Marked by your Lord", ur: "تمہارے رب کے پاس نشان لگے ہوئے" }, ayahs: [34] },
        { term: "For Transgressors", arabic: "لِلْمُسْرِفِينَ", meaning: { en: "For the transgressors", ur: "حد سے گزرنے والوں کے لیے" }, ayahs: [34] },
        { term: "Believers Evacuated", arabic: "فَأَخْرَجْنَا مَن كَانَ فِيهَا مِنَ الْمُؤْمِنِينَ", meaning: { en: "We brought out whoever was there of believers", ur: "ہم نے جو مؤمن وہاں تھے انہیں نکال لیا" }, ayahs: [35] },
        { term: "Only One House", arabic: "فَمَا وَجَدْنَا فِيهَا غَيْرَ بَيْتٍ مِّنَ الْمُسْلِمِينَ", meaning: { en: "We found only one house of Muslims", ur: "ہم نے اس میں مسلمانوں کا صرف ایک گھرانا پایا" }, ayahs: [36] },
        { term: "Sign Left", arabic: "وَتَرَكْنَا فِيهَا آيَةً", meaning: { en: "And We left therein a sign", ur: "اور ہم نے اس میں ایک نشانی چھوڑی" }, ayahs: [37] }
      ]
    },

    storyOfMusa: {
      name: "Story of Musa",
      nameUr: "موسیٰ کا واقعہ",
      nameAr: "قصة موسى",
      color: "#14B8A6",
      concepts: [
        { term: "Sent to Pharaoh", arabic: "إِذْ أَرْسَلْنَاهُ إِلَىٰ فِرْعَوْنَ", meaning: { en: "When We sent him to Pharaoh", ur: "جب ہم نے انہیں فرعون کی طرف بھیجا" }, ayahs: [38] },
        { term: "Clear Authority", arabic: "بِسُلْطَانٍ مُّبِينٍ", meaning: { en: "With clear authority", ur: "واضح دلیل کے ساتھ" }, ayahs: [38] },
        { term: "Pharaoh Turned Away", arabic: "فَتَوَلَّىٰ بِرُكْنِهِ", meaning: { en: "He turned away with his supporters", ur: "وہ اپنے حمایتیوں سمیت منہ پھیر گیا" }, ayahs: [39] },
        { term: "Called Sorcerer", arabic: "سَاحِرٌ أَوْ مَجْنُونٌ", meaning: { en: "A sorcerer or a madman", ur: "جادوگر یا پاگل" }, ayahs: [39] },
        { term: "Seized and Cast", arabic: "فَأَخَذْنَاهُ وَجُنُودَهُ فَنَبَذْنَاهُمْ فِي الْيَمِّ", meaning: { en: "So We seized him and his soldiers and cast them into the sea", ur: "تو ہم نے اسے اور اس کے لشکروں کو پکڑ کر سمندر میں پھینک دیا" }, ayahs: [40] },
        { term: "Blameworthy State", arabic: "وَهُوَ مُلِيمٌ", meaning: { en: "While he was blameworthy", ur: "جبکہ وہ قابلِ ملامت تھا" }, ayahs: [40] }
      ]
    },

    storyOfAad: {
      name: "Story of 'Aad",
      nameUr: "عاد کا واقعہ",
      nameAr: "قصة عاد",
      color: "#F59E0B",
      concepts: [
        { term: "Barren Wind", arabic: "الرِّيحَ الْعَقِيمَ", meaning: { en: "The barren wind", ur: "بانجھ ہوا" }, ayahs: [41] },
        { term: "Left Nothing", arabic: "مَا تَذَرُ مِن شَيْءٍ", meaning: { en: "It left nothing", ur: "اس نے کچھ نہ چھوڑا" }, ayahs: [42] },
        { term: "Decayed Ruins", arabic: "إِلَّا جَعَلَتْهُ كَالرَّمِيمِ", meaning: { en: "Except made it like disintegrated ruins", ur: "سوائے اسے بوسیدہ کھنڈر بنا دیا" }, ayahs: [42] }
      ]
    },

    storyOfThamud: {
      name: "Story of Thamud",
      nameUr: "ثمود کا واقعہ",
      nameAr: "قصة ثمود",
      color: "#A855F7",
      concepts: [
        { term: "Enjoy Yourselves", arabic: "تَمَتَّعُوا حَتَّىٰ حِينٍ", meaning: { en: "Enjoy yourselves for a while", ur: "کچھ وقت تک فائدہ اٹھا لو" }, ayahs: [43] },
        { term: "Defied Command", arabic: "فَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ", meaning: { en: "They were insolent toward command of their Lord", ur: "وہ اپنے رب کے حکم سے سرکشی کرنے لگے" }, ayahs: [44] },
        { term: "Thunderbolt Struck", arabic: "فَأَخَذَتْهُمُ الصَّاعِقَةُ", meaning: { en: "So the thunderbolt seized them", ur: "تو کڑک نے انہیں پکڑ لیا" }, ayahs: [44] },
        { term: "Could Not Stand", arabic: "فَمَا اسْتَطَاعُوا مِن قِيَامٍ", meaning: { en: "They could not stand", ur: "وہ کھڑے بھی نہ ہو سکے" }, ayahs: [45] },
        { term: "No Help", arabic: "وَمَا كَانُوا مُنتَصِرِينَ", meaning: { en: "And they had no helpers", ur: "اور ان کے کوئی مددگار نہ تھے" }, ayahs: [45] }
      ]
    },

    storyOfNuh: {
      name: "Story of Nuh",
      nameUr: "نوح کا واقعہ",
      nameAr: "قصة نوح",
      color: "#3B82F6",
      concepts: [
        { term: "People of Nuh Before", arabic: "وَقَوْمَ نُوحٍ مِّن قَبْلُ", meaning: { en: "And the people of Nuh before", ur: "اور پہلے نوح کی قوم" }, ayahs: [46] },
        { term: "Defiantly Disobedient", arabic: "إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ", meaning: { en: "They were a defiantly disobedient people", ur: "وہ سرکشی سے نافرمان قوم تھی" }, ayahs: [46] }
      ]
    },

    creationSigns: {
      name: "Signs in Creation",
      nameUr: "تخلیق میں نشانیاں",
      nameAr: "آيات في الخلق",
      color: "#22C55E",
      concepts: [
        { term: "Built Sky with Strength", arabic: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ", meaning: { en: "And the sky We constructed with strength", ur: "اور آسمان کو ہم نے قوت سے بنایا" }, ayahs: [47] },
        { term: "We Are Expanding", arabic: "وَإِنَّا لَمُوسِعُونَ", meaning: { en: "And indeed, We are [its] expanders", ur: "اور بلاشبہ ہم اسے وسعت دینے والے ہیں" }, ayahs: [47] },
        { term: "Spread Earth", arabic: "وَالْأَرْضَ فَرَشْنَاهَا", meaning: { en: "And the earth We have spread out", ur: "اور زمین کو ہم نے بچھایا" }, ayahs: [48] },
        { term: "Excellent Spreaders", arabic: "فَنِعْمَ الْمَاهِدُونَ", meaning: { en: "How excellent is the preparer", ur: "کیا ہی اچھے بچھانے والے ہیں" }, ayahs: [48] },
        { term: "Created Pairs", arabic: "وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ", meaning: { en: "And of all things We created two pairs", ur: "اور ہر چیز کے ہم نے جوڑے بنائے" }, ayahs: [49] },
        { term: "That You Remember", arabic: "لَعَلَّكُمْ تَذَكَّرُونَ", meaning: { en: "That perhaps you may remember", ur: "تاکہ تم نصیحت حاصل کرو" }, ayahs: [49] }
      ]
    },

    purposeOfCreation: {
      name: "Purpose of Creation",
      nameUr: "تخلیق کا مقصد",
      nameAr: "الحكمة من الخلق",
      color: "#EF4444",
      concepts: [
        { term: "Flee to Allah", arabic: "فَفِرُّوا إِلَى اللَّهِ", meaning: { en: "So flee to Allah", ur: "پس اللہ کی طرف بھاگو" }, ayahs: [50] },
        { term: "Clear Warner", arabic: "إِنِّي لَكُم مِّنْهُ نَذِيرٌ مُّبِينٌ", meaning: { en: "Indeed, I am to you from Him a clear warner", ur: "بلاشبہ میں تمہارے لیے اس کی طرف سے واضح ڈرانے والا ہوں" }, ayahs: [50, 51] },
        { term: "No Other God", arabic: "وَلَا تَجْعَلُوا مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: { en: "And do not make with Allah another deity", ur: "اور اللہ کے ساتھ کوئی دوسرا معبود نہ بناؤ" }, ayahs: [51] },
        { term: "Created for Worship", arabic: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ", meaning: { en: "I did not create jinn and mankind except to worship Me", ur: "میں نے جن اور انسان کو صرف اپنی عبادت کے لیے پیدا کیا" }, ayahs: [56] },
        { term: "No Provision Wanted", arabic: "مَا أُرِيدُ مِنْهُم مِّن رِّزْقٍ", meaning: { en: "I do not want from them any provision", ur: "میں ان سے کوئی رزق نہیں چاہتا" }, ayahs: [57] },
        { term: "No Food Wanted", arabic: "وَمَا أُرِيدُ أَن يُطْعِمُونِ", meaning: { en: "Nor do I want them to feed Me", ur: "اور نہ میں چاہتا ہوں کہ وہ مجھے کھلائیں" }, ayahs: [57] },
        { term: "Allah is Provider", arabic: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ", meaning: { en: "Indeed, Allah is the Provider", ur: "بلاشبہ اللہ ہی رزق دینے والا ہے" }, ayahs: [58] },
        { term: "Firm Strength", arabic: "ذُو الْقُوَّةِ الْمَتِينُ", meaning: { en: "Owner of firm strength", ur: "مضبوط طاقت والا" }, ayahs: [58] }
      ]
    },

    warningToDisbelievers: {
      name: "Warning to Disbelievers",
      nameUr: "کافروں کو تنبیہ",
      nameAr: "تحذير المكذبين",
      color: "#F43F5E",
      concepts: [
        { term: "Share of Punishment", arabic: "فَإِنَّ لِلَّذِينَ ظَلَمُوا ذَنُوبًا", meaning: { en: "Those who wronged have a share [of punishment]", ur: "ظلم کرنے والوں کے لیے (عذاب کا) حصہ ہے" }, ayahs: [59] },
        { term: "Like Their Companions", arabic: "مِّثْلَ ذَنُوبِ أَصْحَابِهِمْ", meaning: { en: "Like the share of their companions", ur: "ان کے ساتھیوں جیسا حصہ" }, ayahs: [59] },
        { term: "Do Not Hasten", arabic: "فَلَا يَسْتَعْجِلُونِ", meaning: { en: "So let them not impatiently urge Me", ur: "پس وہ مجھ سے جلدی نہ مچائیں" }, ayahs: [59] },
        { term: "Woe to Them", arabic: "فَوَيْلٌ لِّلَّذِينَ كَفَرُوا", meaning: { en: "Woe to those who disbelieve", ur: "ہلاکت ہے ان کافروں کے لیے" }, ayahs: [60] },
        { term: "Promised Day", arabic: "مِن يَوْمِهِمُ الَّذِي يُوعَدُونَ", meaning: { en: "From their Day which they are promised", ur: "اس دن سے جس کا ان سے وعدہ کیا جاتا ہے" }, ayahs: [60] }
      ]
    }
  },

  relationships: [
    { from: "Cosmic Oaths", to: "Judgment Promise", type: "proof", description: { en: "Natural phenomena testify to certain resurrection", ur: "قدرتی مظاہر یقینی قیامت کی گواہی دیتے ہیں" } },
    { from: "Signs on Earth/Self", to: "Certainty of Faith", type: "evidence", description: { en: "Creation signs lead to conviction", ur: "تخلیق کی نشانیاں یقین کی طرف لے جاتی ہیں" } },
    { from: "Ibrahim's Guests", to: "Promise of Ishaq", type: "glad_tidings", description: { en: "Angels brought news of son despite old age", ur: "فرشتوں نے بڑھاپے کے باوجود بیٹے کی خوشخبری دی" } },
    { from: "Ibrahim's Guests", to: "Lut's Destruction", type: "dual_mission", description: { en: "Same angels brought good news and destruction", ur: "وہی فرشتے خوشخبری اور تباہی لائے" } },
    { from: "Destroyed Nations", to: "Warning to Quraysh", type: "parallel", description: { en: "Past punishments warn present deniers", ur: "ماضی کے عذاب موجودہ منکرین کو خبردار کرتے ہیں" } },
    { from: "Created for Worship", to: "Flee to Allah", type: "purpose", description: { en: "Knowing purpose leads to action", ur: "مقصد جاننا عمل کی طرف لے جاتا ہے" } },
    { from: "Expanding Universe", to: "Divine Power", type: "evidence", description: { en: "Cosmic expansion proves Allah's ability", ur: "کائنات کی وسعت اللہ کی قدرت ثابت کرتی ہے" } },
    { from: "Created Pairs", to: "Divine Wisdom", type: "demonstration", description: { en: "Pairs in creation show deliberate design", ur: "تخلیق میں جوڑے منصوبہ بند ڈیزائن ظاہر کرتے ہیں" } }
  ],

  thematicFlow: {
    title: { en: "From Cosmic Signs to Life's Purpose", ur: "کائناتی نشانیوں سے زندگی کے مقصد تک" },
    stages: [
      { name: "Cosmic Oaths", ayahs: [1, 2, 3, 4, 5, 6], description: { en: "Winds, clouds, ships, angels testify to Judgment", ur: "ہوائیں، بادل، جہاز، فرشتے قیامت کی گواہی دیتے ہیں" } },
      { name: "Sky Pathways", ayahs: [7, 8, 9], description: { en: "Woven sky, conflicting speech", ur: "بُنے ہوئے آسمان، متضاد باتیں" } },
      { name: "Liars' Fate", ayahs: [10, 11, 12, 13, 14], description: { en: "Speculators destroyed, tried over Fire", ur: "اٹکل لگانے والے ہلاک، آگ پر آزمائے جائیں گے" } },
      { name: "Righteous Rewards", ayahs: [15, 16, 17, 18, 19], description: { en: "Gardens, night prayer, charity", ur: "باغات، تہجد، صدقہ" } },
      { name: "Signs Everywhere", ayahs: [20, 21, 22, 23], description: { en: "On earth, in yourselves, in sky", ur: "زمین میں، تمہارے اندر، آسمان میں" } },
      { name: "Ibrahim's Story", ayahs: [24, 25, 26, 27, 28, 29, 30], description: { en: "Honored guests, good news of son", ur: "معزز مہمان، بیٹے کی خوشخبری" } },
      { name: "Mission to Lut", ayahs: [31, 32, 33, 34, 35, 36, 37], description: { en: "Stones for sinful people", ur: "گنہگار قوم پر پتھر" } },
      { name: "Musa and Pharaoh", ayahs: [38, 39, 40], description: { en: "Clear authority, drowned in sea", ur: "واضح دلیل، سمندر میں غرق" } },
      { name: "'Aad's Destruction", ayahs: [41, 42], description: { en: "Barren wind left nothing", ur: "بانجھ ہوا نے کچھ نہ چھوڑا" } },
      { name: "Thamud's End", ayahs: [43, 44, 45], description: { en: "Thunderbolt while watching", ur: "کڑک نے دیکھتے ہی دیکھتے پکڑ لیا" } },
      { name: "Nuh's People", ayahs: [46], description: { en: "Defiantly disobedient", ur: "سرکشی سے نافرمان" } },
      { name: "Creation Miracles", ayahs: [47, 48, 49], description: { en: "Expanding sky, spread earth, pairs", ur: "پھیلتا آسمان، بچھی زمین، جوڑے" } },
      { name: "Core Message", ayahs: [50, 51, 52, 53, 54, 55, 56, 57, 58], description: { en: "Flee to Allah, worship alone", ur: "اللہ کی طرف بھاگو، صرف اسی کی عبادت کرو" } },
      { name: "Final Warning", ayahs: [59, 60], description: { en: "Share of punishment awaits", ur: "عذاب کا حصہ منتظر ہے" } }
    ]
  },

  uniqueInsight: {
    title: { en: "The Purpose of Existence (وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ)", ur: "وجود کا مقصد (وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ)" },
    insight: { en: "Verse 56 is one of the most profound statements in the Quran about human purpose: 'I did not create jinn and mankind except to worship Me.' This verse, placed after multiple stories of destroyed nations and signs in creation, answers the fundamental question: Why do we exist? The answer is not that Allah needs worship (verses 57-58 clarify He needs nothing), but that worship (ibadah) is our path to fulfillment, our way of connecting with the Divine. The verb 'ya'budun' encompasses all acts of devotion, obedience, and love. The positioning after cosmic signs and historical warnings shows that recognizing Allah through His signs naturally leads to worship, while rejecting those signs leads to the fate of previous nations.", ur: "آیت 56 انسانی مقصد کے بارے میں قرآن کے سب سے گہرے بیانات میں سے ایک ہے: 'میں نے جن اور انسان کو صرف اپنی عبادت کے لیے پیدا کیا۔' یہ آیت، تباہ شدہ اقوام اور تخلیق کی نشانیوں کے بعد رکھی گئی ہے، بنیادی سوال کا جواب دیتی ہے: ہم کیوں ہیں؟ جواب یہ نہیں کہ اللہ کو عبادت کی ضرورت ہے (آیت 57-58 واضح کرتی ہیں کہ اسے کسی چیز کی ضرورت نہیں)، بلکہ عبادت ہمارے تکمیل کا راستہ ہے، الٰہی ذات سے جڑنے کا طریقہ ہے۔ 'يعبدون' میں عقیدت، اطاعت اور محبت کے تمام اعمال شامل ہیں۔ کائناتی نشانیوں اور تاریخی تنبیہات کے بعد اس کی جگہ دکھاتی ہے کہ نشانیوں سے اللہ کو پہچاننا قدرتی طور پر عبادت کی طرف لے جاتا ہے، جبکہ ان نشانیوں کا انکار پچھلی اقوام جیسے انجام کی طرف لے جاتا ہے۔" },
    arabicTerm: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
    rootMeaning: { en: "ع-ب-د (to worship/serve) - defines the relationship between creation and Creator", ur: "ع-ب-د (عبادت/بندگی کرنا) - مخلوق اور خالق کے درمیان تعلق کی وضاحت کرتا ہے" },
    keyAyah: 56
  },

  historicalContext: {
    revelationPeriod: { en: "Makkan period", ur: "مکی دور" },
    occasion: { en: "Revealed to establish the reality of resurrection through cosmic and historical evidence, and to clarify the purpose of human existence. The surah addresses Quraysh who denied the afterlife despite clear signs all around them.", ur: "کائناتی اور تاریخی شواہد سے قیامت کی حقیقت قائم کرنے اور انسانی وجود کا مقصد واضح کرنے کے لیے نازل ہوئی۔ یہ سورت قریش کو مخاطب کرتی ہے جنہوں نے اپنے چاروں طرف واضح نشانیوں کے باوجود آخرت کا انکار کیا۔" },
    note: { en: "The surah uniquely combines four types of evidence: cosmic phenomena (winds, clouds, sky), earthly signs (creation, pairs), self-reflection (signs within), and historical precedent (destroyed nations). Verse 47 'We are expanding it' (موسعون) is remarkably relevant to modern cosmology's discovery of the expanding universe.", ur: "یہ سورت منفرد طور پر چار قسم کے شواہد کو جمع کرتی ہے: کائناتی مظاہر (ہوائیں، بادل، آسمان)، زمینی نشانیاں (تخلیق، جوڑے)، خود غور و فکر (اندرونی نشانیاں)، اور تاریخی نظیر (تباہ شدہ اقوام)۔ آیت 47 'ہم اسے وسعت دے رہے ہیں' (موسعون) جدید فلکیات کی پھیلتی کائنات کی دریافت سے حیرت انگیز طور پر مطابقت رکھتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Opening Oaths", description: "وَالذَّارِيَاتِ... فَالْحَامِلَاتِ... فَالْجَارِيَاتِ... فَالْمُقَسِّمَاتِ", example: { en: "Four connected oaths building momentum", ur: "چار مربوط قسمیں جو رفتار بڑھاتی ہیں" }, ayah: 1 },
      { name: "Rhetorical Question", description: "أَفَلَا تُبْصِرُونَ", example: { en: "Do you not see?", ur: "کیا تم نہیں دیکھتے؟" }, ayah: 21 },
      { name: "Command to Flee", description: "فَفِرُّوا إِلَى اللَّهِ", example: { en: "Flee to Allah - urgency of return", ur: "اللہ کی طرف بھاگو - واپسی کی فوری ضرورت" }, ayah: 50 },
      { name: "Exclusion Particle", description: "إِلَّا لِيَعْبُدُونِ", example: { en: "'Except to worship' - sole purpose", ur: "'سوائے عبادت کے' - واحد مقصد" }, ayah: 56 },
      { name: "Divine Names", description: "الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ", example: { en: "The Provider, Owner of Firm Strength", ur: "رزق دینے والا، مضبوط طاقت کا مالک" }, ayah: 58 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 52, name: "At-Tur", relationship: "Both open with cosmic oaths, continue resurrection theme", type: "sequential_pair" },
      { surah: 50, name: "Qaf", relationship: "Both focus on resurrection and Day of Judgment", type: "thematic_parallel" },
      { surah: 11, name: "Hud", relationship: "Both detail stories of Nuh, 'Aad, Thamud, Lut", type: "story_parallel" },
      { surah: 15, name: "Al-Hijr", relationship: "Both mention Ibrahim's guests and Lut's people", type: "story_parallel" },
      { surah: 37, name: "As-Saffat", relationship: "Both mention Ibrahim's glad tidings of a son", type: "story_parallel" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Night Worship", ur: "رات کی عبادت" }, how: { en: "Pray tahajjud like the righteous who slept little (v.17)", ur: "تہجد پڑھو جیسے نیک لوگ جو کم سوتے تھے (آیت 17)" }, verse: "51:17" },
      { principle: { en: "Pre-Dawn Seeking", ur: "صبح سویرے طلب" }, how: { en: "Make istighfar in the early dawn hours (v.18)", ur: "صبح کے اوقات میں استغفار کرو (آیت 18)" }, verse: "51:18" },
      { principle: { en: "Charity", ur: "صدقہ" }, how: { en: "Recognize others' rights in your wealth (v.19)", ur: "اپنے مال میں دوسروں کا حق پہچانو (آیت 19)" }, verse: "51:19" },
      { principle: { en: "Observe Signs", ur: "نشانیاں دیکھو" }, how: { en: "Look at earth and yourself for evidence of Allah (v.20-21)", ur: "اللہ کے ثبوت کے لیے زمین اور خود اپنے آپ کو دیکھو (آیت 20-21)" }, verse: "51:20-21" },
      { principle: { en: "Know Your Purpose", ur: "اپنا مقصد جانو" }, how: { en: "Live for worship in all its forms (v.56)", ur: "عبادت کی ہر شکل کے لیے جیو (آیت 56)" }, verse: "51:56" },
      { principle: { en: "Flee to Allah", ur: "اللہ کی طرف بھاگو" }, how: { en: "Make Allah your refuge from all troubles (v.50)", ur: "تمام مصائب سے اللہ کو پناہ گاہ بناؤ (آیت 50)" }, verse: "51:50" }
    ]
  }
};

export default ONTOLOGY;
