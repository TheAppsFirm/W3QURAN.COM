/**
 * Surah Al-Ahqaf (46) - Ontology of Quranic Concepts
 * The Sand Dunes
 * Theme: Quran confirmation, kindness to parents, Jinn listening to Quran, 'Ad destruction at Al-Ahqaf
 */

export const ONTOLOGY = {
  surahId: 46,
  surahName: "Al-Ahqaf",
  surahNameArabic: "الأحقاف",
  revelationType: "Makki",
  totalAyahs: 35,

  categories: {
    quranConfirmation: {
      name: "Quran's Divine Origin",
      nameUr: "قرآن کی الٰہی اصل",
      nameArabic: "التأكيد على القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم", meaning: { en: "Ha Mim", ur: "حم" }, explanation: { en: "Disconnected letters opening the surah", ur: "سورت کے آغاز کے حروفِ مقطعات" }, verseRef: "46:1" },
        { term: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ", meaning: { en: "Revelation of the Book from Allah, the Mighty, the Wise", ur: "اس کتاب کا نازل کرنا الله کی طرف سے ہے جو غالب اور حکمت والا ہے" }, explanation: { en: "Divine source of Quran", ur: "قرآن کا الہٰی ماخذ" }, verseRef: "46:2" },
        { term: "مَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا إِلَّا بِالْحَقِّ", meaning: { en: "We created heavens and earth and what is between them only in truth", ur: "ہم نے آسمانوں اور زمین کو اور جو کچھ ان کے درمیان ہے صرف حق کے ساتھ پیدا کیا" }, explanation: { en: "Creation has purpose", ur: "تخلیق بامقصد ہے" }, verseRef: "46:3" },
        { term: "وَأَجَلٍ مُّسَمًّى", meaning: { en: "And for a specified term", ur: "اور ایک مقررہ مدت تک" }, explanation: { en: "Everything has appointed time", ur: "ہر چیز کا ایک مقررہ وقت ہے" }, verseRef: "46:3" },
        { term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", meaning: { en: "Confirming what came before it", ur: "اپنے سے پہلے کی کتابوں کی تصدیق کرنے والا" }, explanation: { en: "Quran confirms previous scriptures", ur: "قرآن پچھلی کتابوں کی تصدیق کرتا ہے" }, verseRef: "46:12" },
        { term: "لِسَانًا عَرَبِيًّا", meaning: { en: "In Arabic tongue", ur: "عربی زبان میں" }, explanation: { en: "Quran revealed in Arabic", ur: "قرآن عربی زبان میں نازل ہوا" }, verseRef: "46:12" },
        { term: "لِّيُنذِرَ الَّذِينَ ظَلَمُوا", meaning: { en: "To warn those who do wrong", ur: "تاکہ ظالموں کو ڈرائے" }, explanation: { en: "Warning function of Quran", ur: "قرآن کا تنبیہی کردار" }, verseRef: "46:12" },
        { term: "وَبُشْرَىٰ لِلْمُحْسِنِينَ", meaning: { en: "And glad tidings for doers of good", ur: "اور نیکی کرنے والوں کے لیے خوشخبری" }, explanation: { en: "Good news for righteous", ur: "نیکوکاروں کے لیے بشارت" }, verseRef: "46:12" }
      ]
    },

    idolCritique: {
      name: "Critique of Idol Worship",
      nameUr: "بت پرستی پر تنقید",
      nameArabic: "نقد عبادة الأصنام",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ", meaning: { en: "Show me what they created of the earth", ur: "مجھے دکھاؤ کہ انہوں نے زمین کا کون سا حصہ بنایا ہے" }, explanation: { en: "Challenge to prove idols' power", ur: "بتوں کی طاقت ثابت کرنے کا چیلنج" }, verseRef: "46:4" },
        { term: "أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ", meaning: { en: "Or do they have a share in the heavens?", ur: "یا کیا آسمانوں میں ان کا کوئی حصہ ہے؟" }, explanation: { en: "Idols have no cosmic role", ur: "بتوں کا کائنات میں کوئی کردار نہیں" }, verseRef: "46:4" },
        { term: "ائْتُونِي بِكِتَابٍ مِّن قَبْلِ هَـٰذَا", meaning: { en: "Bring me a book before this", ur: "اس سے پہلے کی کوئی کتاب لے آؤ" }, explanation: { en: "Demand for scriptural evidence", ur: "کتابی ثبوت کا مطالبہ" }, verseRef: "46:4" },
        { term: "أَوْ أَثَارَةٍ مِّنْ عِلْمٍ", meaning: { en: "Or a remnant of knowledge", ur: "یا علم کا کوئی نشان" }, explanation: { en: "Any trace of valid proof", ur: "کسی بھی معتبر ثبوت کا نشان" }, verseRef: "46:4" },
        { term: "وَمَنْ أَضَلُّ مِمَّن يَدْعُو مِن دُونِ اللَّهِ", meaning: { en: "Who is more astray than one who invokes besides Allah", ur: "اس سے زیادہ گمراہ کون ہے جو الله کے سوا دوسروں کو پکارے" }, explanation: { en: "Extreme misguidance of idol worship", ur: "بت پرستی کی انتہائی گمراہی" }, verseRef: "46:5" },
        { term: "مَن لَّا يَسْتَجِيبُ لَهُ إِلَىٰ يَوْمِ الْقِيَامَةِ", meaning: { en: "Those who will not respond to him until Day of Judgment", ur: "جو قیامت تک اسے جواب نہیں دے سکتے" }, explanation: { en: "Idols cannot answer prayers", ur: "بت دعاؤں کا جواب نہیں دے سکتے" }, verseRef: "46:5" },
        { term: "وَهُمْ عَن دُعَائِهِمْ غَافِلُونَ", meaning: { en: "And they are heedless of their prayers", ur: "اور وہ ان کی پکار سے بالکل بے خبر ہیں" }, explanation: { en: "Idols are oblivious", ur: "بت بالکل بے خبر ہیں" }, verseRef: "46:5" },
        { term: "وَإِذَا حُشِرَ النَّاسُ كَانُوا لَهُمْ أَعْدَاءً", meaning: { en: "When people are gathered, they will be enemies to them", ur: "جب لوگ جمع کیے جائیں گے تو وہ ان کے دشمن ہوں گے" }, explanation: { en: "Idols become enemies on Judgment Day", ur: "قیامت کے دن بت دشمن بن جائیں گے" }, verseRef: "46:6" },
        { term: "وَكَانُوا بِعِبَادَتِهِمْ كَافِرِينَ", meaning: { en: "And will deny their worship", ur: "اور وہ ان کی عبادت کا انکار کر دیں گے" }, explanation: { en: "Idols reject their worshippers", ur: "بت اپنے پوجاریوں کو رد کر دیں گے" }, verseRef: "46:6" }
      ]
    },

    quranRejection: {
      name: "Rejection of Quran",
      nameUr: "قرآن کا انکار",
      nameArabic: "رفض القرآن",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "قَالَ الَّذِينَ كَفَرُوا لِلْحَقِّ لَمَّا جَاءَهُمْ هَـٰذَا سِحْرٌ مُّبِينٌ", meaning: { en: "Those who disbelieved said when truth came: This is clear magic", ur: "جب حق ان کے پاس آیا تو کافروں نے کہا: یہ کھلا جادو ہے" }, explanation: { en: "Dismissing Quran as magic", ur: "قرآن کو جادو قرار دینا" }, verseRef: "46:7" },
        { term: "أَمْ يَقُولُونَ افْتَرَاهُ", meaning: { en: "Or do they say he invented it?", ur: "یا وہ کہتے ہیں کہ اس نے اسے خود گھڑا ہے؟" }, explanation: { en: "Accusation of fabrication", ur: "من گھڑت ہونے کا الزام" }, verseRef: "46:8" },
        { term: "قُلْ إِنِ افْتَرَيْتُهُ فَلَا تَمْلِكُونَ لِي مِنَ اللَّهِ شَيْئًا", meaning: { en: "Say: If I invented it, you cannot protect me from Allah", ur: "کہو: اگر میں نے اسے گھڑا ہے تو تم مجھے الله سے نہیں بچا سکتے" }, explanation: { en: "Prophet's defense", ur: "نبی ﷺ کا دفاع" }, verseRef: "46:8" },
        { term: "هُوَ أَعْلَمُ بِمَا تُفِيضُونَ فِيهِ", meaning: { en: "He knows best what you engage in", ur: "وہ خوب جانتا ہے جو تم بکتے ہو" }, explanation: { en: "Allah knows their mockery", ur: "الله ان کے مذاق سے واقف ہے" }, verseRef: "46:8" },
        { term: "كَفَىٰ بِهِ شَهِيدًا بَيْنِي وَبَيْنَكُمْ", meaning: { en: "Sufficient is He as witness between me and you", ur: "میرے اور تمہارے درمیان وہ گواہ کافی ہے" }, explanation: { en: "Allah as ultimate witness", ur: "الله بطور حتمی گواہ" }, verseRef: "46:8" }
      ]
    },

    prophetDefense: {
      name: "Prophet's Defense",
      nameUr: "نبی ﷺ کا دفاع",
      nameArabic: "دفاع النبي",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "قُلْ مَا كُنتُ بِدْعًا مِّنَ الرُّسُلِ", meaning: { en: "Say: I am not something unprecedented among messengers", ur: "کہو: میں رسولوں میں سے کوئی نرالا نہیں ہوں" }, explanation: { en: "Prophet follows prophetic tradition", ur: "نبی ﷺ نبوی روایت کی پیروی کرتے ہیں" }, verseRef: "46:9" },
        { term: "وَمَا أَدْرِي مَا يُفْعَلُ بِي وَلَا بِكُمْ", meaning: { en: "I know not what will be done with me or you", ur: "مجھے نہیں معلوم کہ میرے ساتھ یا تمہارے ساتھ کیا کیا جائے گا" }, explanation: { en: "Prophet has no knowledge of unseen", ur: "نبی ﷺ کو غیب کا علم نہیں" }, verseRef: "46:9" },
        { term: "إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰ إِلَيَّ", meaning: { en: "I only follow what is revealed to me", ur: "میں صرف اس وحی کی پیروی کرتا ہوں جو مجھ پر نازل ہوتی ہے" }, explanation: { en: "Prophet obeys revelation", ur: "نبی ﷺ وحی کی اطاعت کرتے ہیں" }, verseRef: "46:9" },
        { term: "وَمَا أَنَا إِلَّا نَذِيرٌ مُّبِينٌ", meaning: { en: "I am only a clear warner", ur: "میں تو صرف ایک صاف ڈرانے والا ہوں" }, explanation: { en: "Prophet's role defined", ur: "نبی ﷺ کے کردار کی وضاحت" }, verseRef: "46:9" }
      ]
    },

    witnessFromIsrael: {
      name: "Witness from Children of Israel",
      nameUr: "بنی اسرائیل سے گواہ",
      nameArabic: "شاهد من بني إسرائيل",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قُلْ أَرَأَيْتُمْ إِن كَانَ مِنْ عِندِ اللَّهِ وَكَفَرْتُم بِهِ", meaning: { en: "Say: Have you considered if it is from Allah and you disbelieved?", ur: "کہو: بتاؤ اگر یہ الله کی طرف سے ہو اور تم نے اس کا انکار کیا؟" }, explanation: { en: "What if Quran is truly divine?", ur: "اگر قرآن واقعی الہٰی ہو تو؟" }, verseRef: "46:10" },
        { term: "وَشَهِدَ شَاهِدٌ مِّن بَنِي إِسْرَائِيلَ عَلَىٰ مِثْلِهِ", meaning: { en: "And a witness from Children of Israel testified to its like", ur: "اور بنی اسرائیل میں سے ایک گواہ نے اسی جیسی چیز پر گواہی دی" }, explanation: { en: "Jewish witness confirms Quran matches Torah", ur: "یہودی گواہ نے تصدیق کی کہ قرآن تورات سے مطابقت رکھتا ہے" }, verseRef: "46:10" },
        { term: "فَآمَنَ وَاسْتَكْبَرْتُمْ", meaning: { en: "So he believed while you were arrogant", ur: "تو وہ ایمان لایا اور تم نے تکبر کیا" }, explanation: { en: "Contrast: humble believer vs arrogant rejectors", ur: "تقابل: عاجز مومن بمقابلہ متکبر منکرین" }, verseRef: "46:10" },
        { term: "إِنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ", meaning: { en: "Allah does not guide wrongdoing people", ur: "بے شک الله ظالم قوم کو ہدایت نہیں دیتا" }, explanation: { en: "Guidance withheld from oppressors", ur: "ظالموں سے ہدایت روک لی جاتی ہے" }, verseRef: "46:10" }
      ]
    },

    disbelieversExcuses: {
      name: "Disbelievers' Excuses",
      nameUr: "کافروں کے بہانے",
      nameArabic: "حجج الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا لَوْ كَانَ خَيْرًا مَّا سَبَقُونَا إِلَيْهِ", meaning: { en: "Disbelievers said of believers: If it were good, they wouldn't have preceded us to it", ur: "کافروں نے مومنوں کے بارے میں کہا: اگر یہ اچھا ہوتا تو وہ ہم سے پہلے اس تک نہ پہنچتے" }, explanation: { en: "Arrogant dismissal based on social status", ur: "سماجی حیثیت کی بنا پر متکبرانہ انکار" }, verseRef: "46:11" },
        { term: "وَإِذْ لَمْ يَهْتَدُوا بِهِ", meaning: { en: "And when they are not guided by it", ur: "اور جب انہوں نے اس سے ہدایت نہیں پائی" }, explanation: { en: "Their own rejection proves nothing", ur: "ان کا خود کا انکار کچھ ثابت نہیں کرتا" }, verseRef: "46:11" },
        { term: "فَسَيَقُولُونَ هَـٰذَا إِفْكٌ قَدِيمٌ", meaning: { en: "They will say: This is an ancient lie", ur: "تو وہ کہیں گے: یہ پرانا جھوٹ ہے" }, explanation: { en: "Dismissing truth as old falsehood", ur: "حق کو پرانا جھوٹ کہہ کر رد کرنا" }, verseRef: "46:11" }
      ]
    },

    mosesBook: {
      name: "Book of Moses",
      nameUr: "موسیٰ کی کتاب",
      nameArabic: "كتاب موسى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَمِن قَبْلِهِ كِتَابُ مُوسَىٰ إِمَامًا وَرَحْمَةً", meaning: { en: "And before it was the Book of Moses, a guide and mercy", ur: "اور اس سے پہلے موسیٰ کی کتاب تھی جو رہنما اور رحمت تھی" }, explanation: { en: "Torah as preceding guidance", ur: "تورات بطور پہلی ہدایت" }, verseRef: "46:12" },
        { term: "وَهَـٰذَا كِتَابٌ مُّصَدِّقٌ", meaning: { en: "And this is a confirming Book", ur: "اور یہ تصدیق کرنے والی کتاب ہے" }, explanation: { en: "Quran confirms Torah", ur: "قرآن تورات کی تصدیق کرتا ہے" }, verseRef: "46:12" }
      ]
    },

    steadfastBelievers: {
      name: "Steadfast Believers",
      nameUr: "ثابت قدم مومنین",
      nameArabic: "المؤمنون الصابرون",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا", meaning: { en: "Those who said 'Our Lord is Allah' then stood firm", ur: "بے شک جنہوں نے کہا ہمارا رب الله ہے پھر ثابت قدم رہے" }, explanation: { en: "Declaration followed by consistency", ur: "اعلان کے بعد استقامت" }, verseRef: "46:13" },
        { term: "فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", meaning: { en: "No fear upon them, nor will they grieve", ur: "نہ ان پر کوئی خوف ہوگا نہ وہ غمگین ہوں گے" }, explanation: { en: "Security for the steadfast", ur: "ثابت قدم رہنے والوں کے لیے امن" }, verseRef: "46:13" },
        { term: "أُولَـٰئِكَ أَصْحَابُ الْجَنَّةِ خَالِدِينَ فِيهَا", meaning: { en: "Those are companions of Paradise, abiding eternally", ur: "یہی جنت والے ہیں جو ہمیشہ اس میں رہیں گے" }, explanation: { en: "Eternal Paradise for believers", ur: "مومنوں کے لیے ابدی جنت" }, verseRef: "46:14" },
        { term: "جَزَاءً بِمَا كَانُوا يَعْمَلُونَ", meaning: { en: "As reward for what they used to do", ur: "ان اعمال کا بدلہ جو وہ کیا کرتے تھے" }, explanation: { en: "Actions determine reward", ur: "اعمال بدلہ طے کرتے ہیں" }, verseRef: "46:14" }
      ]
    },

    kindnessToParents: {
      name: "Kindness to Parents",
      nameUr: "والدین سے حسنِ سلوک",
      nameArabic: "الإحسان إلى الوالدين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ إِحْسَانًا", meaning: { en: "We have enjoined upon man kindness to his parents", ur: "ہم نے انسان کو اپنے والدین کے ساتھ نیکی کا حکم دیا" }, explanation: { en: "Divine command for parental kindness", ur: "والدین سے حسنِ سلوک کا الہٰی حکم" }, verseRef: "46:15" },
        { term: "حَمَلَتْهُ أُمُّهُ كُرْهًا وَوَضَعَتْهُ كُرْهًا", meaning: { en: "His mother carried him with hardship and delivered him with hardship", ur: "اس کی ماں نے اسے تکلیف سے اٹھایا اور تکلیف سے جنا" }, explanation: { en: "Mother's physical sacrifice", ur: "ماں کی جسمانی قربانی" }, verseRef: "46:15" },
        { term: "وَحَمْلُهُ وَفِصَالُهُ ثَلَاثُونَ شَهْرًا", meaning: { en: "Carrying him and weaning him is thirty months", ur: "اس کے حمل اور دودھ چھڑانے کی مدت تیس مہینے ہے" }, explanation: { en: "Period of pregnancy and nursing", ur: "حمل اور دودھ پلانے کی مدت" }, verseRef: "46:15" },
        { term: "حَتَّىٰ إِذَا بَلَغَ أَشُدَّهُ وَبَلَغَ أَرْبَعِينَ سَنَةً", meaning: { en: "Until he reaches maturity and reaches forty years", ur: "یہاں تک کہ جب وہ پختگی کو پہنچے اور چالیس سال کا ہو جائے" }, explanation: { en: "Age of full maturity", ur: "پوری پختگی کی عمر" }, verseRef: "46:15" },
        { term: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ", meaning: { en: "My Lord, enable me to be grateful for Your favor", ur: "اے میرے رب! مجھے توفیق دے کہ میں تیری نعمت کا شکر ادا کروں" }, explanation: { en: "Prayer for gratitude", ur: "شکر گزاری کی دعا" }, verseRef: "46:15" },
        { term: "الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ", meaning: { en: "Which You bestowed upon me and my parents", ur: "جو تو نے مجھ پر اور میرے والدین پر کی ہے" }, explanation: { en: "Gratitude for blessings to self and parents", ur: "اپنے اور والدین پر نعمتوں کا شکر" }, verseRef: "46:15" },
        { term: "وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ", meaning: { en: "And that I may do righteousness pleasing to You", ur: "اور ایسا نیک عمل کروں جو تجھے پسند آئے" }, explanation: { en: "Prayer for good deeds", ur: "نیک اعمال کی دعا" }, verseRef: "46:15" },
        { term: "وَأَصْلِحْ لِي فِي ذُرِّيَّتِي", meaning: { en: "And make righteous for me my offspring", ur: "اور میری اولاد کو نیک بنا دے" }, explanation: { en: "Prayer for righteous children", ur: "نیک اولاد کی دعا" }, verseRef: "46:15" },
        { term: "إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ", meaning: { en: "I have repented to You, and I am of the Muslims", ur: "میں تیری طرف توبہ کرتا ہوں اور میں مسلمانوں میں سے ہوں" }, explanation: { en: "Declaration of repentance and submission", ur: "توبہ اور اسلام کا اعلان" }, verseRef: "46:15" }
      ]
    },

    acceptedBelievers: {
      name: "Believers Whose Deeds Are Accepted",
      nameUr: "وہ مومنین جن کے اعمال قبول ہیں",
      nameArabic: "المقبولون من المؤمنين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "أُولَـٰئِكَ الَّذِينَ نَتَقَبَّلُ عَنْهُمْ أَحْسَنَ مَا عَمِلُوا", meaning: { en: "Those from whom We accept the best of what they did", ur: "یہ وہ لوگ ہیں جن سے ہم ان کے بہترین اعمال قبول کرتے ہیں" }, explanation: { en: "Best deeds accepted", ur: "بہترین اعمال قبول ہوتے ہیں" }, verseRef: "46:16" },
        { term: "وَنَتَجَاوَزُ عَن سَيِّئَاتِهِمْ", meaning: { en: "And We overlook their misdeeds", ur: "اور ہم ان کی برائیوں سے درگزر کرتے ہیں" }, explanation: { en: "Sins forgiven", ur: "گناہ معاف کیے جاتے ہیں" }, verseRef: "46:16" },
        { term: "فِي أَصْحَابِ الْجَنَّةِ", meaning: { en: "Among companions of Paradise", ur: "جنت والوں میں شامل" }, explanation: { en: "Their destination", ur: "ان کی منزل" }, verseRef: "46:16" },
        { term: "وَعْدَ الصِّدْقِ الَّذِي كَانُوا يُوعَدُونَ", meaning: { en: "The promise of truth which they were promised", ur: "سچا وعدہ جو ان سے کیا گیا تھا" }, explanation: { en: "Fulfillment of divine promise", ur: "الہٰی وعدے کی تکمیل" }, verseRef: "46:16" }
      ]
    },

    disobedientChild: {
      name: "Disobedient Child",
      nameUr: "نافرمان اولاد",
      nameArabic: "الولد العاق",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَالَّذِي قَالَ لِوَالِدَيْهِ أُفٍّ لَّكُمَا", meaning: { en: "And the one who says to his parents: Uff to you both", ur: "اور جس نے اپنے والدین سے کہا: افّ تم دونوں پر" }, explanation: { en: "Expression of disrespect", ur: "بے ادبی کا اظہار" }, verseRef: "46:17" },
        { term: "أَتَعِدَانِنِي أَنْ أُخْرَجَ وَقَدْ خَلَتِ الْقُرُونُ مِن قَبْلِي", meaning: { en: "Do you promise me I'll be brought forth when generations passed before me?", ur: "کیا تم مجھ سے وعدہ کرتے ہو کہ مجھے نکالا جائے گا جبکہ مجھ سے پہلے نسلیں گزر چکیں؟" }, explanation: { en: "Denying resurrection", ur: "قیامت کا انکار" }, verseRef: "46:17" },
        { term: "وَهُمَا يَسْتَغِيثَانِ اللَّهَ", meaning: { en: "While they both implore Allah", ur: "اور وہ دونوں الله سے فریاد کر رہے ہیں" }, explanation: { en: "Parents seeking Allah's help", ur: "والدین الله سے مدد مانگ رہے ہیں" }, verseRef: "46:17" },
        { term: "وَيْلَكَ آمِنْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: { en: "Woe to you! Believe! Indeed Allah's promise is true", ur: "تجھ پر افسوس! ایمان لے آ! بے شک الله کا وعدہ سچا ہے" }, explanation: { en: "Parents' plea for child's faith", ur: "والدین کی اولاد کے ایمان کے لیے التجا" }, verseRef: "46:17" },
        { term: "فَيَقُولُ مَا هَـٰذَا إِلَّا أَسَاطِيرُ الْأَوَّلِينَ", meaning: { en: "But he says: This is nothing but legends of the ancients", ur: "مگر وہ کہتا ہے: یہ تو پہلے لوگوں کی کہانیاں ہیں" }, explanation: { en: "Dismissing faith as mythology", ur: "ایمان کو داستانیں کہہ کر رد کرنا" }, verseRef: "46:17" },
        { term: "أُولَـٰئِكَ الَّذِينَ حَقَّ عَلَيْهِمُ الْقَوْلُ", meaning: { en: "Those upon whom the decree has come due", ur: "یہ وہ لوگ ہیں جن پر بات ثابت ہو گئی" }, explanation: { en: "Punishment decreed for them", ur: "ان پر عذاب کا فیصلہ ہو گیا" }, verseRef: "46:18" },
        { term: "فِي أُمَمٍ قَدْ خَلَتْ مِن قَبْلِهِم مِّنَ الْجِنِّ وَالْإِنسِ", meaning: { en: "Among nations of jinn and humans that passed before", ur: "ان سے پہلے جن اور انسان کی قوموں میں شامل" }, explanation: { en: "Joining previous condemned nations", ur: "پچھلی ہلاک شدہ قوموں میں شامل ہونا" }, verseRef: "46:18" },
        { term: "إِنَّهُمْ كَانُوا خَاسِرِينَ", meaning: { en: "Indeed, they were losers", ur: "بے شک وہ خسارے میں تھے" }, explanation: { en: "Ultimate loss", ur: "انتہائی خسارہ" }, verseRef: "46:18" }
      ]
    },

    ranksByDeeds: {
      name: "Ranks According to Deeds",
      nameUr: "اعمال کے مطابق درجات",
      nameArabic: "الدرجات بالأعمال",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "وَلِكُلٍّ دَرَجَاتٌ مِّمَّا عَمِلُوا", meaning: { en: "For all there are ranks from what they did", ur: "سب کے لیے ان کے اعمال کے مطابق درجے ہیں" }, explanation: { en: "Deeds determine levels", ur: "اعمال درجات طے کرتے ہیں" }, verseRef: "46:19" },
        { term: "وَلِيُوَفِّيَهُمْ أَعْمَالَهُمْ وَهُمْ لَا يُظْلَمُونَ", meaning: { en: "That He may fully compensate them, and they will not be wronged", ur: "تاکہ ان کے اعمال کا پورا بدلہ دے اور ان پر ظلم نہ ہو" }, explanation: { en: "Perfect justice in recompense", ur: "بدلے میں کامل انصاف" }, verseRef: "46:19" }
      ]
    },

    disbelieversExposed: {
      name: "Disbelievers Exposed on Judgment Day",
      nameUr: "قیامت کے دن کافروں کا بے نقاب ہونا",
      nameArabic: "فضح الكافرين يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَيَوْمَ يُعْرَضُ الَّذِينَ كَفَرُوا عَلَى النَّارِ", meaning: { en: "Day when disbelievers are exposed to the Fire", ur: "جس دن کافروں کو آگ کے سامنے پیش کیا جائے گا" }, explanation: { en: "Confrontation with Hell", ur: "جہنم کا سامنا" }, verseRef: "46:20" },
        { term: "أَذْهَبْتُمْ طَيِّبَاتِكُمْ فِي حَيَاتِكُمُ الدُّنْيَا", meaning: { en: "You exhausted your pleasures in your worldly life", ur: "تم نے اپنی دنیاوی زندگی میں اپنی نعمتیں ختم کر دیں" }, explanation: { en: "Consumed all good in dunya", ur: "دنیا میں تمام نعمتیں خرچ کر دیں" }, verseRef: "46:20" },
        { term: "وَاسْتَمْتَعْتُم بِهَا", meaning: { en: "And you enjoyed them", ur: "اور تم نے ان سے لطف اٹھایا" }, explanation: { en: "Temporary enjoyment", ur: "عارضی لذت" }, verseRef: "46:20" },
        { term: "فَالْيَوْمَ تُجْزَوْنَ عَذَابَ الْهُونِ", meaning: { en: "So today you are recompensed with humiliating punishment", ur: "آج تمہیں ذلت کا عذاب دیا جاتا ہے" }, explanation: { en: "Punishment of disgrace", ur: "ذلت کا عذاب" }, verseRef: "46:20" },
        { term: "بِمَا كُنتُمْ تَسْتَكْبِرُونَ فِي الْأَرْضِ بِغَيْرِ الْحَقِّ", meaning: { en: "Because you were arrogant in the earth without right", ur: "اس لیے کہ تم زمین میں ناحق تکبر کرتے تھے" }, explanation: { en: "Arrogance as cause", ur: "تکبر بطور سبب" }, verseRef: "46:20" },
        { term: "وَبِمَا كُنتُمْ تَفْسُقُونَ", meaning: { en: "And because you used to defiantly disobey", ur: "اور اس لیے کہ تم نافرمانی کرتے تھے" }, explanation: { en: "Defiance as cause", ur: "سرکشی بطور سبب" }, verseRef: "46:20" }
      ]
    },

    adDestruction: {
      name: "Destruction of 'Ad at Al-Ahqaf",
      nameUr: "احقاف میں عاد کی تباہی",
      nameArabic: "هلاك عاد في الأحقاف",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَاذْكُرْ أَخَا عَادٍ إِذْ أَنذَرَ قَوْمَهُ بِالْأَحْقَافِ", meaning: { en: "Mention the brother of 'Ad when he warned his people at Al-Ahqaf", ur: "عاد کے بھائی (ہود) کا ذکر کرو جب انہوں نے اپنی قوم کو احقاف میں خبردار کیا" }, explanation: { en: "Hud's warning at the Sand Dunes", ur: "ریت کے ٹیلوں پر ہود کی تنبیہ" }, verseRef: "46:21" },
        { term: "الْأَحْقَافِ", meaning: { en: "Al-Ahqaf (Sand Dunes)", ur: "احقاف (ریت کے ٹیلے)" }, explanation: { en: "Region of curved sand dunes where 'Ad lived", ur: "خمیدہ ریت کے ٹیلوں کا علاقہ جہاں قومِ عاد رہتی تھی" }, verseRef: "46:21" },
        { term: "وَقَدْ خَلَتِ النُّذُرُ مِن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ", meaning: { en: "And warners had passed before and after him", ur: "اور ان سے پہلے اور بعد میں بہت سے ڈرانے والے گزر چکے تھے" }, explanation: { en: "Many messengers sent", ur: "بہت سے رسول بھیجے گئے" }, verseRef: "46:21" },
        { term: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ", meaning: { en: "Worship none but Allah", ur: "الله کے سوا کسی کی عبادت نہ کرو" }, explanation: { en: "Core message of Hud", ur: "ہود کا بنیادی پیغام" }, verseRef: "46:21" },
        { term: "إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: { en: "I fear for you punishment of a tremendous Day", ur: "مجھے تمہارے لیے ایک عظیم دن کے عذاب کا ڈر ہے" }, explanation: { en: "Warning of catastrophe", ur: "تباہی کی تنبیہ" }, verseRef: "46:21" }
      ]
    },

    adResponse: {
      name: "'Ad's Response to Hud",
      nameUr: "ہود کو عاد کا جواب",
      nameArabic: "رد عاد على هود",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "قَالُوا أَجِئْتَنَا لِتَأْفِكَنَا عَنْ آلِهَتِنَا", meaning: { en: "They said: Have you come to turn us away from our gods?", ur: "انہوں نے کہا: کیا تم ہمیں ہمارے معبودوں سے پھیرنے آئے ہو؟" }, explanation: { en: "'Ad's accusation", ur: "قومِ عاد کا الزام" }, verseRef: "46:22" },
        { term: "فَأْتِنَا بِمَا تَعِدُنَا إِن كُنتَ مِنَ الصَّادِقِينَ", meaning: { en: "Bring us what you promise if you are truthful", ur: "اگر تم سچے ہو تو وہ عذاب لے آؤ جس کا وعدہ کرتے ہو" }, explanation: { en: "Demanding punishment", ur: "عذاب کا مطالبہ" }, verseRef: "46:22" },
        { term: "قَالَ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ", meaning: { en: "He said: Knowledge is only with Allah", ur: "انہوں نے کہا: علم صرف الله کے پاس ہے" }, explanation: { en: "Timing known only to Allah", ur: "وقت صرف الله کو معلوم ہے" }, verseRef: "46:23" },
        { term: "وَأُبَلِّغُكُم مَّا أُرْسِلْتُ بِهِ", meaning: { en: "I only convey what I was sent with", ur: "میں صرف وہ پہنچاتا ہوں جس کے ساتھ مجھے بھیجا گیا ہے" }, explanation: { en: "Prophet's role: delivering message", ur: "نبی کا کردار: پیغام پہنچانا" }, verseRef: "46:23" },
        { term: "وَلَـٰكِنِّي أَرَاكُمْ قَوْمًا تَجْهَلُونَ", meaning: { en: "But I see you are ignorant people", ur: "مگر میں دیکھ رہا ہوں کہ تم جاہل قوم ہو" }, explanation: { en: "Diagnosis of their condition", ur: "ان کی حالت کی تشخیص" }, verseRef: "46:23" }
      ]
    },

    theDestructiveWind: {
      name: "The Destructive Wind",
      nameUr: "تباہ کن ہوا",
      nameArabic: "الريح المدمرة",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "فَلَمَّا رَأَوْهُ عَارِضًا مُّسْتَقْبِلَ أَوْدِيَتِهِمْ", meaning: { en: "When they saw it as a cloud approaching their valleys", ur: "جب انہوں نے اسے ایک بادل کی صورت میں اپنی وادیوں کی طرف آتا دیکھا" }, explanation: { en: "Cloud seeming to bring rain", ur: "بادل جو بارش لاتا دکھائی دے رہا تھا" }, verseRef: "46:24" },
        { term: "قَالُوا هَـٰذَا عَارِضٌ مُّمْطِرُنَا", meaning: { en: "They said: This is a cloud bringing us rain", ur: "انہوں نے کہا: یہ بادل ہے جو ہم پر بارش برسائے گا" }, explanation: { en: "Misinterpreting the sign", ur: "نشانی کی غلط تعبیر" }, verseRef: "46:24" },
        { term: "بَلْ هُوَ مَا اسْتَعْجَلْتُم بِهِ", meaning: { en: "Rather, it is what you hastened", ur: "بلکہ یہ وہی ہے جس کی تم جلدی مچا رہے تھے" }, explanation: { en: "The punishment they demanded", ur: "وہ عذاب جس کا وہ مطالبہ کر رہے تھے" }, verseRef: "46:24" },
        { term: "رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ", meaning: { en: "A wind containing painful punishment", ur: "ایک ہوا جس میں دردناک عذاب ہے" }, explanation: { en: "Nature of the destruction", ur: "تباہی کی نوعیت" }, verseRef: "46:24" },
        { term: "تُدَمِّرُ كُلَّ شَيْءٍ بِأَمْرِ رَبِّهَا", meaning: { en: "Destroying everything by command of its Lord", ur: "اپنے رب کے حکم سے سب کچھ تباہ کر دے" }, explanation: { en: "Total destruction by divine order", ur: "الہٰی حکم سے مکمل تباہی" }, verseRef: "46:25" },
        { term: "فَأَصْبَحُوا لَا يُرَىٰ إِلَّا مَسَاكِنُهُمْ", meaning: { en: "They became such that nothing was seen except their dwellings", ur: "پھر ان کے سوا کچھ نظر نہ آیا مگر ان کے مکان" }, explanation: { en: "Only ruins remained", ur: "صرف کھنڈرات باقی رہے" }, verseRef: "46:25" },
        { term: "كَذَٰلِكَ نَجْزِي الْقَوْمَ الْمُجْرِمِينَ", meaning: { en: "Thus do We recompense the criminal people", ur: "اسی طرح ہم مجرم قوم کو سزا دیتے ہیں" }, explanation: { en: "Pattern of divine punishment", ur: "الہٰی عذاب کا طریقہ" }, verseRef: "46:25" }
      ]
    },

    adPower: {
      name: "'Ad's Power Was Useless",
      nameUr: "عاد کی طاقت بے کار تھی",
      nameArabic: "عجز قوة عاد",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَلَقَدْ مَكَّنَّاهُمْ فِيمَا إِن مَّكَّنَّاكُمْ فِيهِ", meaning: { en: "We had established them in what We have not established you", ur: "ہم نے انہیں وہ طاقت دی تھی جو تمہیں نہیں دی" }, explanation: { en: "'Ad had more power than Quraysh", ur: "قومِ عاد قریش سے زیادہ طاقتور تھی" }, verseRef: "46:26" },
        { term: "وَجَعَلْنَا لَهُمْ سَمْعًا وَأَبْصَارًا وَأَفْئِدَةً", meaning: { en: "We made for them hearing, sight, and hearts", ur: "ہم نے ان کو کان اور آنکھیں اور دل دیے تھے" }, explanation: { en: "Given full faculties", ur: "مکمل صلاحیتیں دی گئیں" }, verseRef: "46:26" },
        { term: "فَمَا أَغْنَىٰ عَنْهُمْ سَمْعُهُمْ وَلَا أَبْصَارُهُمْ وَلَا أَفْئِدَتُهُم مِّن شَيْءٍ", meaning: { en: "Their hearing, sight, and hearts availed them nothing", ur: "مگر ان کے کان اور آنکھیں اور دل ان کے کسی کام نہ آئے" }, explanation: { en: "Faculties useless when rejecting truth", ur: "حق کو رد کرنے پر صلاحیتیں بیکار ہو جاتی ہیں" }, verseRef: "46:26" },
        { term: "إِذْ كَانُوا يَجْحَدُونَ بِآيَاتِ اللَّهِ", meaning: { en: "Since they used to deny Allah's signs", ur: "کیونکہ وہ الله کی نشانیوں کا انکار کرتے تھے" }, explanation: { en: "Cause of their downfall", ur: "ان کی تباہی کا سبب" }, verseRef: "46:26" },
        { term: "وَحَاقَ بِهِم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: { en: "And they were enveloped by what they used to ridicule", ur: "اور جس چیز کا وہ مذاق اڑاتے تھے اسی نے انہیں گھیر لیا" }, explanation: { en: "Mocked punishment became reality", ur: "جس عذاب کا مذاق اڑاتے تھے وہ حقیقت بن گیا" }, verseRef: "46:26" }
      ]
    },

    surroundingDestruction: {
      name: "Surrounding Nations Destroyed",
      nameUr: "اردگرد کی اقوام تباہ ہوئیں",
      nameArabic: "إهلاك الأمم المجاورة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَلَقَدْ أَهْلَكْنَا مَا حَوْلَكُم مِّنَ الْقُرَىٰ", meaning: { en: "We have destroyed towns around you", ur: "ہم نے تمہارے ارد گرد کی بستیوں کو تباہ کر دیا" }, explanation: { en: "Surrounding nations destroyed", ur: "آس پاس کی قومیں تباہ ہوئیں" }, verseRef: "46:27" },
        { term: "وَصَرَّفْنَا الْآيَاتِ لَعَلَّهُمْ يَرْجِعُونَ", meaning: { en: "We diversified the signs so they might return", ur: "ہم نے نشانیوں کو مختلف طریقوں سے بیان کیا تاکہ وہ لوٹ آئیں" }, explanation: { en: "Signs given to prompt repentance", ur: "توبہ کی ترغیب کے لیے نشانیاں دی گئیں" }, verseRef: "46:27" },
        { term: "فَلَوْلَا نَصَرَهُمُ الَّذِينَ اتَّخَذُوا مِن دُونِ اللَّهِ قُرْبَانًا آلِهَةً", meaning: { en: "Why did those they took as gods besides Allah not help them?", ur: "پھر الله کے سوا جن کو انہوں نے تقرب کے لیے معبود بنایا تھا انہوں نے ان کی مدد کیوں نہ کی؟" }, explanation: { en: "False gods failed them", ur: "جھوٹے معبود ان کے کام نہ آئے" }, verseRef: "46:28" },
        { term: "بَلْ ضَلُّوا عَنْهُمْ", meaning: { en: "Rather, they vanished from them", ur: "بلکہ وہ ان سے غائب ہو گئے" }, explanation: { en: "Idols disappeared", ur: "بت غائب ہو گئے" }, verseRef: "46:28" },
        { term: "وَذَٰلِكَ إِفْكُهُمْ وَمَا كَانُوا يَفْتَرُونَ", meaning: { en: "That was their lie and what they used to invent", ur: "یہ ان کا جھوٹ تھا اور جو وہ گھڑا کرتے تھے" }, explanation: { en: "Their false beliefs exposed", ur: "ان کے جھوٹے عقائد بے نقاب ہوئے" }, verseRef: "46:28" }
      ]
    },

    jinnListeningToQuran: {
      name: "Jinn Listening to the Quran",
      nameUr: "جنات کا قرآن سننا",
      nameArabic: "استماع الجن للقرآن",
      color: '#F59E0B',
      icon: 'Sparkles',
      concepts: [
        { term: "وَإِذْ صَرَفْنَا إِلَيْكَ نَفَرًا مِّنَ الْجِنِّ يَسْتَمِعُونَ الْقُرْآنَ", meaning: { en: "When We directed to you a group of jinn listening to the Quran", ur: "جب ہم نے جنات کی ایک جماعت کو آپ کی طرف بھیجا جو قرآن سن رہے تھے" }, explanation: { en: "Jinn delegation sent to hear Quran", ur: "قرآن سننے کے لیے جنات کا وفد بھیجا گیا" }, verseRef: "46:29" },
        { term: "فَلَمَّا حَضَرُوهُ قَالُوا أَنصِتُوا", meaning: { en: "When they attended it, they said: Listen quietly", ur: "جب وہ اس کے پاس آئے تو کہنے لگے: خاموش ہو کر سنو" }, explanation: { en: "Jinn's reverence for Quran", ur: "جنات کی قرآن کے لیے تعظیم" }, verseRef: "46:29" },
        { term: "فَلَمَّا قُضِيَ وَلَّوْا إِلَىٰ قَوْمِهِم مُّنذِرِينَ", meaning: { en: "When it was concluded, they returned to their people as warners", ur: "جب تلاوت ختم ہوئی تو وہ ڈرانے والے بن کر اپنی قوم کی طرف لوٹے" }, explanation: { en: "Jinn became preachers", ur: "جنات مبلغ بن گئے" }, verseRef: "46:29" }
      ]
    },

    jinnAnnouncement: {
      name: "Jinn's Announcement to Their People",
      nameUr: "جنات کا اپنی قوم کو اعلان",
      nameArabic: "إعلان الجن لقومهم",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "قَالُوا يَا قَوْمَنَا إِنَّا سَمِعْنَا كِتَابًا أُنزِلَ مِن بَعْدِ مُوسَىٰ", meaning: { en: "They said: O our people, we heard a Book revealed after Moses", ur: "انہوں نے کہا: اے ہماری قوم! ہم نے ایک کتاب سنی ہے جو موسیٰ کے بعد نازل ہوئی" }, explanation: { en: "Jinn recognize Quran's place in scripture", ur: "جنات نے آسمانی کتابوں میں قرآن کا مقام پہچانا" }, verseRef: "46:30" },
        { term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", meaning: { en: "Confirming what came before it", ur: "اپنے سے پہلے کی تصدیق کرنے والی" }, explanation: { en: "Quran confirms previous revelation", ur: "قرآن پچھلی وحی کی تصدیق کرتا ہے" }, verseRef: "46:30" },
        { term: "يَهْدِي إِلَى الْحَقِّ وَإِلَىٰ طَرِيقٍ مُّسْتَقِيمٍ", meaning: { en: "Guiding to truth and to a straight path", ur: "حق اور سیدھے راستے کی طرف رہنمائی کرتی ہے" }, explanation: { en: "Quran's guidance recognized", ur: "قرآن کی ہدایت کی پہچان" }, verseRef: "46:30" },
        { term: "يَا قَوْمَنَا أَجِيبُوا دَاعِيَ اللَّهِ", meaning: { en: "O our people, respond to the caller of Allah", ur: "اے ہماری قوم! الله کے بلانے والے کی بات مانو" }, explanation: { en: "Call to follow Prophet", ur: "نبی ﷺ کی پیروی کی دعوت" }, verseRef: "46:31" },
        { term: "وَآمِنُوا بِهِ", meaning: { en: "And believe in him", ur: "اور اس پر ایمان لاؤ" }, explanation: { en: "Call to faith", ur: "ایمان کی دعوت" }, verseRef: "46:31" },
        { term: "يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ", meaning: { en: "He will forgive you your sins", ur: "وہ تمہارے گناہ معاف کر دے گا" }, explanation: { en: "Promise of forgiveness", ur: "مغفرت کا وعدہ" }, verseRef: "46:31" },
        { term: "وَيُجِرْكُم مِّنْ عَذَابٍ أَلِيمٍ", meaning: { en: "And protect you from a painful punishment", ur: "اور تمہیں دردناک عذاب سے بچائے گا" }, explanation: { en: "Promise of protection", ur: "حفاظت کا وعدہ" }, verseRef: "46:31" }
      ]
    },

    jinnWarning: {
      name: "Jinn's Warning",
      nameUr: "جنات کی تنبیہ",
      nameArabic: "تحذير الجن",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَن لَّا يُجِبْ دَاعِيَ اللَّهِ فَلَيْسَ بِمُعْجِزٍ فِي الْأَرْضِ", meaning: { en: "Whoever does not respond to Allah's caller cannot escape on earth", ur: "جو الله کے بلانے والے کو قبول نہ کرے وہ زمین میں بھاگ نہیں سکتا" }, explanation: { en: "No escape from Allah", ur: "الله سے کوئی فرار نہیں" }, verseRef: "46:32" },
        { term: "وَلَيْسَ لَهُ مِن دُونِهِ أَوْلِيَاءُ", meaning: { en: "And he has no protectors besides Him", ur: "اور الله کے سوا ان کا کوئی حامی نہیں" }, explanation: { en: "No protection outside Allah", ur: "الله کے سوا کوئی تحفظ نہیں" }, verseRef: "46:32" },
        { term: "أُولَـٰئِكَ فِي ضَلَالٍ مُّبِينٍ", meaning: { en: "Those are in clear error", ur: "وہ کھلی گمراہی میں ہیں" }, explanation: { en: "State of rejectors", ur: "منکرین کی حالت" }, verseRef: "46:32" }
      ]
    },

    resurrectionProof: {
      name: "Proof of Resurrection",
      nameUr: "قیامت کی دلیل",
      nameArabic: "إثبات البعث",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَلَمْ يَعْيَ بِخَلْقِهِنَّ", meaning: { en: "Do they not see that Allah who created heavens and earth was not wearied by their creation", ur: "کیا انہوں نے نہیں دیکھا کہ الله جس نے آسمانوں اور زمین کو پیدا کیا ان کے بنانے سے نہیں تھکا" }, explanation: { en: "Creator not tired by first creation", ur: "خالق پہلی تخلیق سے نہیں تھکا" }, verseRef: "46:33" },
        { term: "بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ", meaning: { en: "Is capable of giving life to the dead", ur: "مردوں کو زندہ کرنے پر قادر ہے" }, explanation: { en: "Resurrection within His power", ur: "قیامت اس کی قدرت میں ہے" }, verseRef: "46:33" },
        { term: "بَلَىٰ إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "Yes, He is over all things competent", ur: "بے شک وہ ہر چیز پر قادر ہے" }, explanation: { en: "Absolute divine power", ur: "مطلق الہٰی قدرت" }, verseRef: "46:33" }
      ]
    },

    judgmentDay: {
      name: "Judgment Day",
      nameUr: "یومِ حساب",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَيَوْمَ يُعْرَضُ الَّذِينَ كَفَرُوا عَلَى النَّارِ", meaning: { en: "Day when disbelievers are exposed to the Fire", ur: "جس دن کافروں کو آگ کے سامنے لایا جائے گا" }, explanation: { en: "Confrontation with reality", ur: "حقیقت کا سامنا" }, verseRef: "46:34" },
        { term: "أَلَيْسَ هَـٰذَا بِالْحَقِّ", meaning: { en: "Is this not the truth?", ur: "کیا یہ حق نہیں ہے؟" }, explanation: { en: "Question to deniers", ur: "منکرین سے سوال" }, verseRef: "46:34" },
        { term: "قَالُوا بَلَىٰ وَرَبِّنَا", meaning: { en: "They will say: Yes, by our Lord", ur: "وہ کہیں گے: ہاں ہمارے رب کی قسم" }, explanation: { en: "Forced admission", ur: "مجبوری میں اعتراف" }, verseRef: "46:34" },
        { term: "قَالَ فَذُوقُوا الْعَذَابَ بِمَا كُنتُمْ تَكْفُرُونَ", meaning: { en: "He will say: Then taste the punishment for what you used to deny", ur: "فرمائے گا: تو اب عذاب کا مزہ چکھو اپنے انکار کے بدلے" }, explanation: { en: "Punishment for denial", ur: "انکار کی سزا" }, verseRef: "46:34" }
      ]
    },

    prophetPatience: {
      name: "Command for Prophet's Patience",
      nameUr: "نبی ﷺ کو صبر کا حکم",
      nameArabic: "الأمر بالصبر",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ", meaning: { en: "Be patient as were the resolute messengers", ur: "صبر کرو جیسے عزم والے رسولوں نے صبر کیا" }, explanation: { en: "Patience like great prophets", ur: "عظیم انبیاء جیسا صبر" }, verseRef: "46:35" },
        { term: "أُولُو الْعَزْمِ", meaning: { en: "Ulu al-'Azm (Those of Determination)", ur: "اولوالعزم (ارادے والے)" }, explanation: { en: "Top tier prophets who showed extraordinary patience", ur: "اعلیٰ ترین انبیاء جنہوں نے غیرمعمولی صبر دکھایا" }, verseRef: "46:35" },
        { term: "وَلَا تَسْتَعْجِل لَّهُمْ", meaning: { en: "And do not be impatient for them", ur: "اور ان کے لیے جلدی نہ کرو" }, explanation: { en: "Don't rush punishment on disbelievers", ur: "کافروں پر عذاب کے لیے جلدی نہ کرو" }, verseRef: "46:35" },
        { term: "كَأَنَّهُمْ يَوْمَ يَرَوْنَ مَا يُوعَدُونَ لَمْ يَلْبَثُوا إِلَّا سَاعَةً مِّن نَّهَارٍ", meaning: { en: "On Day they see what they're promised, it will be as if they stayed but an hour of a day", ur: "جس دن وہ وعدہ شدہ عذاب دیکھیں گے تو ایسا لگے گا جیسے وہ دن کی ایک گھڑی ہی ٹھہرے تھے" }, explanation: { en: "Worldly life feels momentary", ur: "دنیا کی زندگی ایک لمحے جیسی لگے گی" }, verseRef: "46:35" },
        { term: "بَلَاغٌ", meaning: { en: "A notification/delivery", ur: "پیغام رسانی" }, explanation: { en: "Clear message delivered", ur: "واضح پیغام پہنچا دیا گیا" }, verseRef: "46:35" },
        { term: "فَهَلْ يُهْلَكُ إِلَّا الْقَوْمُ الْفَاسِقُونَ", meaning: { en: "Will any be destroyed except the defiantly disobedient?", ur: "کیا نافرمان قوم کے سوا کوئی ہلاک ہوگا؟" }, explanation: { en: "Only the rebellious face destruction", ur: "صرف سرکش لوگ ہلاکت کا سامنا کرتے ہیں" }, verseRef: "46:35" }
      ]
    }
  },

  relationships: [
    { from: "تنزيل الكتاب من الله", to: "مصدقاً لما بين يديه", type: "characteristic", description: { en: "Divine revelation confirms previous scriptures", ur: "الہٰی وحی پچھلی کتابوں کی تصدیق کرتی ہے" } },
    { from: "حملته أمه كرهاً", to: "ووصينا الإنسان بوالديه إحساناً", type: "causation", description: { en: "Mother's sacrifice demands gratitude", ur: "ماں کی قربانی شکر گزاری کا تقاضا کرتی ہے" } },
    { from: "قالوا ربنا الله ثم استقاموا", to: "فلا خوف عليهم", type: "consequence", description: { en: "Faith + steadfastness = security", ur: "ایمان + استقامت = امان" } },
    { from: "أذهبتم طيباتكم في حياتكم الدنيا", to: "فاليوم تجزون عذاب الهون", type: "consequence", description: { en: "Worldly indulgence leads to humiliation", ur: "دنیاوی عیش و عشرت ذلت کا باعث بنتی ہے" } },
    { from: "فأتنا بما تعدنا", to: "ريح فيها عذاب أليم", type: "response", description: { en: "'Ad's demand answered with destructive wind", ur: "قومِ عاد کے مطالبے کا جواب تباہ کن ہوا سے دیا گیا" } },
    { from: "نفراً من الجن يستمعون القرآن", to: "ولوا إلى قومهم منذرين", type: "progression", description: { en: "Jinn heard, believed, then preached", ur: "جنات نے سنا، ایمان لائے، پھر تبلیغ کی" } },
    { from: "ما أغنى عنهم سمعهم ولا أبصارهم", to: "يجحدون بآيات الله", type: "causation", description: { en: "Denying signs made faculties useless", ur: "نشانیوں کے انکار نے صلاحیتوں کو بیکار کر دیا" } },
    { from: "أولو العزم من الرسل", to: "فاصبر كما صبروا", type: "exemplar", description: { en: "Past prophets' patience as model", ur: "گزشتہ انبیاء کا صبر بطور نمونہ" } },
    { from: "قالوا هذا عارض ممطرنا", to: "بل هو ما استعجلتم به", type: "irony", description: { en: "Expected blessing was actually punishment", ur: "متوقع نعمت دراصل عذاب تھا" } },
    { from: "الذي قال لوالديه أف لكما", to: "حق عليهم القول", type: "consequence", description: { en: "Parental disrespect leads to divine decree", ur: "والدین کی بے ادبی الہٰی فیصلے کا باعث بنتی ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Revelation", verses: "46:1-6", description: { en: "Quran's divine origin, critique of idol worship", ur: "قرآن کا الہٰی ماخذ، بت پرستی پر تنقید" } },
      { stage: 2, theme: "Rejection and Defense", verses: "46:7-12", description: { en: "Accusations against Quran, Prophet's defense, confirmation of previous scriptures", ur: "قرآن پر الزامات، نبی ﷺ کا دفاع، پچھلی کتابوں کی تصدیق" } },
      { stage: 3, theme: "Steadfast Believers", verses: "46:13-14", description: { en: "Reward for those who declare faith and remain firm", ur: "ایمان کا اعلان اور ثابت قدم رہنے والوں کا اجر" } },
      { stage: 4, theme: "Kindness to Parents", verses: "46:15-16", description: { en: "Divine command, mother's sacrifice, model supplication", ur: "الہٰی حکم، ماں کی قربانی، نمونے کی دعا" } },
      { stage: 5, theme: "Disobedient Child", verses: "46:17-18", description: { en: "Contrast: ungrateful child denying resurrection", ur: "تقابل: ناشکرا اولاد جو قیامت کا انکار کرے" } },
      { stage: 6, theme: "Judgment Day Scenes", verses: "46:19-20", description: { en: "Ranks by deeds, disbelievers confronted", ur: "اعمال کے مطابق درجات، کافروں کا سامنا" } },
      { stage: 7, theme: "Story of 'Ad", verses: "46:21-26", description: { en: "Hud at Al-Ahqaf, people's rejection, destructive wind", ur: "احقاف میں ہود، قوم کا انکار، تباہ کن ہوا" } },
      { stage: 8, theme: "Lessons from Destruction", verses: "46:27-28", description: { en: "Surrounding towns destroyed, false gods failed", ur: "آس پاس کی بستیاں تباہ ہوئیں، جھوٹے معبود ناکام ہوئے" } },
      { stage: 9, theme: "Jinn Hear Quran", verses: "46:29-32", description: { en: "Jinn delegation listens, believes, warns their people", ur: "جنات کا وفد سنتا ہے، ایمان لاتا ہے، اپنی قوم کو خبردار کرتا ہے" } },
      { stage: 10, theme: "Proof and Patience", verses: "46:33-35", description: { en: "Resurrection proof, Judgment scene, patience command", ur: "قیامت کا ثبوت، حشر کا منظر، صبر کا حکم" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Quran confirms earlier scriptures", how: "Study connections between Quran, Torah, and Gospel", verse: "46:12" },
      { principle: "Be kind to parents", how: "Recognize mother's physical sacrifice; serve parents especially at 40+", verse: "46:15" },
      { principle: "Pray for gratitude, good deeds, and righteous offspring", how: "Use verse 15's supplication regularly", verse: "46:15" },
      { principle: "Faith requires steadfastness", how: "Declaration alone isn't enough; consistency matters", verse: "46:13" },
      { principle: "Don't exhaust pleasures in this life", how: "Balance worldly enjoyment with preparation for hereafter", verse: "46:20" },
      { principle: "Power and faculties are useless if rejecting truth", how: "'Ad had more than us yet perished; use abilities for truth", verse: "46:26" },
      { principle: "Quran impresses even jinn", how: "Recognize Quran's transcendent nature; recite with awareness", verse: "46:29" },
      { principle: "Respond to Allah's caller", how: "When truth comes, accept it; there's no escape from Allah", verse: "46:31-32" },
      { principle: "Be patient like Ulu al-'Azm", how: "Emulate Nuh, Ibrahim, Musa, Isa, Muhammad in patience", verse: "46:35" },
      { principle: "This life is but an hour", how: "On Judgment Day, all of dunya feels momentary", verse: "46:35" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Jinn's Model Da'wah", ur: "جنات کی نمونہ دعوت" },
    insight: { en: "Verses 29-32 present the jinn as model preachers. Their methodology is instructive: (1) They listened attentively: 'أَنصِتُوا' - they commanded each other to listen quietly, showing reverence. (2) They understood the message's place: 'كِتَابًا أُنزِلَ مِن بَعْدِ مُوسَىٰ' - they positioned it in prophetic history, not as something alien. (3) They explained benefits: guidance to truth, forgiveness, protection. (4) They warned of consequences: no escape, no protectors. This is remarkable because jinn are often depicted as mischievous, yet here they become earnest warners. They didn't need years of study - one sitting was enough. Their immediate transformation into callers to truth challenges human hesitation in sharing faith. If jinn, after one encounter with Quran, became 'mundhirin' (warners), what excuse do humans have who recite it daily?", ur: "آیات 29-32 جنات کو بطور نمونہ مبلغ پیش کرتی ہیں۔ ان کا طریقہ سبق آموز ہے: (1) انہوں نے توجہ سے سنا: 'أَنصِتُوا' - انہوں نے ایک دوسرے کو خاموشی سے سننے کا کہا، تعظیم کا مظاہرہ کرتے ہوئے۔ (2) انہوں نے پیغام کا مقام سمجھا: 'كِتَابًا أُنزِلَ مِن بَعْدِ مُوسَىٰ' - اسے نبوی تاریخ میں رکھا، کسی اجنبی چیز کے طور پر نہیں۔ (3) انہوں نے فوائد بیان کیے: حق کی طرف ہدایت، مغفرت، تحفظ۔ (4) انہوں نے نتائج سے خبردار کیا: کوئی فرار نہیں، کوئی حامی نہیں۔ یہ قابلِ ذکر ہے کیونکہ جنات کو اکثر شرارتی سمجھا جاتا ہے، لیکن یہاں وہ مخلص ڈرانے والے بنے۔ انہیں سالوں کے مطالعے کی ضرورت نہیں تھی - ایک مجلس کافی تھی۔ حق کے داعیوں میں ان کی فوری تبدیلی ایمان کی تبلیغ میں انسانی ہچکچاہٹ کو للکارتی ہے۔ اگر جنات قرآن کی ایک ملاقات کے بعد 'منذرین' بن گئے، تو جو انسان روزانہ اس کی تلاوت کرتے ہیں ان کے پاس کیا عذر ہے؟" },
    rootMeaning: { en: "The jinn's methodology: listen, contextualize, present benefits, warn of consequences", ur: "جنات کا طریقہ: سنو، سیاق و سباق بیان کرو، فوائد پیش کرو، نتائج سے خبردار کرو" }
  },

  historicalContext: {
    revelationPeriod: { en: "Late Makkan period", ur: "مکی دور کا آخری حصہ" },
    occasion: { en: "Revealed around the same time as the Prophet's trip to Ta'if. The jinn incident occurred when the Prophet was returning from Ta'if, dejected after being rejected.", ur: "نبی ﷺ کے سفرِ طائف کے قریب نازل ہوئی۔ جنات کا واقعہ اس وقت ہوا جب نبی ﷺ طائف سے مسترد ہونے کے بعد واپس آ رہے تھے۔" },
    note: { en: "Al-Ahqaf was revealed late in the Makkan period, possibly around the same time as the Prophet's trip to Ta'if. The jinn incident (verses 29-32) occurred when the Prophet ﷺ was returning from Ta'if, dejected after being rejected. While he prayed at Nakhlah, a group of jinn from Nusaybin (some say Yemen) heard his recitation and believed. This served as consolation: if Quraysh reject, jinn accept. The surah's name 'Al-Ahqaf' refers to the sand dune region where 'Ad lived (likely the Empty Quarter/Rub' al-Khali). The mention of a Jewish witness (verse 10) likely refers to Abdullah ibn Salam or others who recognized Quranic teachings matching Torah prophecies. The emphasis on parental kindness (verse 15) contrasts with stories of children being harsh to parents who accepted Islam.", ur: "الاحقاف مکی دور کے آخر میں نازل ہوئی، ممکنہ طور پر نبی ﷺ کے سفرِ طائف کے وقت۔ جنات کا واقعہ (آیات 29-32) اس وقت پیش آیا جب نبی ﷺ طائف سے مسترد ہونے کے بعد دل شکستہ واپس آ رہے تھے۔ نخلہ میں نماز کے دوران نصیبین (بعض کے مطابق یمن) سے جنات کے ایک گروہ نے آپ کی تلاوت سنی اور ایمان لائے۔ یہ تسلی کا ذریعہ تھا: اگر قریش انکار کریں تو جنات قبول کرتے ہیں۔ سورت کا نام 'الاحقاف' ریت کے ٹیلوں کے علاقے سے ہے جہاں قومِ عاد رہتی تھی (ممکنہ طور پر ربع الخالی)۔ یہودی گواہ کا ذکر (آیت 10) ممکنہ طور پر عبداللہ بن سلام یا ان لوگوں سے متعلق ہے جنہوں نے قرآنی تعلیمات کو تورات کی پیشگوئیوں سے مطابق پایا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الأَحْقَاف", example: { en: "Al-Ahqaf (Sand Dunes)", ur: "الاحقاف (ریت کے ٹیلے)" }, effect: { en: "Plural of حِقف - curved/crescent-shaped sand dune", ur: "حِقف کی جمع - خمیدہ/ہلالی شکل کے ریت کے ٹیلے" } },
      { feature: "كُرْهًا", example: { en: "With hardship", ur: "تکلیف کے ساتھ" }, effect: { en: "كُره (with damma) = hardship/difficulty vs. كَره (with fatha) = hatred", ur: "كُرہ (پیش کے ساتھ) = مشقت/تکلیف بمقابلہ كَرہ (زبر کے ساتھ) = نفرت" } },
      { feature: "أُفٍّ", example: { en: "Uff (expression of annoyance)", ur: "اُف (ناگواری کا اظہار)" }, effect: { en: "Onomatopoeia of disgust; smallest form of disrespect to parents forbidden", ur: "ناگواری کی آواز؛ والدین کی بے ادبی کی سب سے چھوٹی شکل بھی ممنوع" } },
      { feature: "عَارِضًا", example: { en: "Cloud", ur: "بادل" }, effect: { en: "From عَرَض - something appearing on horizon; used for rain clouds", ur: "عَرَض سے - افق پر ظاہر ہونے والی چیز؛ بارش کے بادلوں کے لیے استعمال" } },
      { feature: "أُولُو الْعَزْمِ", example: { en: "Those of Determination", ur: "عزم والے" }, effect: { en: "Technical term for top five prophets who showed extraordinary resolve", ur: "اصطلاح جو پانچ عظیم انبیاء کے لیے استعمال ہوتی ہے جنہوں نے غیرمعمولی عزم دکھایا" } },
      { feature: "نَفَرًا", example: { en: "A group (3-10)", ur: "ایک چھوٹا گروہ (3-10)" }, effect: { en: "Specific term for small delegation of jinn", ur: "جنات کے چھوٹے وفد کے لیے مخصوص اصطلاح" } },
      { feature: "بَلَاغٌ", example: { en: "A notification/proclamation", ur: "ایک اعلان/پیغام رسانی" }, effect: { en: "From بَلَغَ - to reach/deliver; Quran reaches its purpose", ur: "بَلَغَ سے - پہنچنا/پہنچانا؛ قرآن اپنے مقصد تک پہنچتا ہے" } },
      { feature: "تُدَمِّرُ", example: { en: "Destroys", ur: "تباہ کرتی ہے" }, effect: { en: "Form II intensive - complete destruction", ur: "باب تفعیل - مکمل تباہی" } }
    ]
  },

  uluAlAzm: {
    title: { en: "The Five Resolute Prophets", ur: "پانچ اولوالعزم انبیاء" },
    prophets: [
      { name: "Nuh (Noah)", arabic: "نوح", trial: { en: "950 years of preaching with minimal followers; own son drowned", ur: "950 سال تبلیغ کم پیروکاروں کے ساتھ؛ اپنا بیٹا ڈوب گیا" } },
      { name: "Ibrahim (Abraham)", arabic: "إبراهيم", trial: { en: "Thrown in fire; commanded to sacrifice son; left family in desert", ur: "آگ میں پھینکے گئے؛ بیٹے کی قربانی کا حکم؛ خاندان کو صحرا میں چھوڑا" } },
      { name: "Musa (Moses)", arabic: "موسى", trial: { en: "Confronted Pharaoh; led rebellious nation; 40 years in wilderness", ur: "فرعون کا مقابلہ کیا؛ سرکش قوم کی قیادت؛ 40 سال بیابان میں" } },
      { name: "Isa (Jesus)", arabic: "عيسى", trial: { en: "Rejected by his people; faced crucifixion attempt; followers distorted message", ur: "اپنی قوم نے رد کیا؛ صلیب دینے کی کوشش کا سامنا؛ پیروکاروں نے پیغام بگاڑ دیا" } },
      { name: "Muhammad", arabic: "محمد", trial: { en: "13 years persecution; boycott; exile; loss of loved ones; battles", ur: "13 سال ظلم و ستم؛ بائیکاٹ؛ جلاوطنی؛ پیاروں کا فراق؛ جنگیں" } }
    ],
    note: { en: "Verse 35 commands the Prophet to be patient like them, placing him in their company and confirming he faces similar trials.", ur: "آیت 35 نبی ﷺ کو ان جیسا صبر کرنے کا حکم دیتی ہے، آپ کو ان کی صحبت میں رکھتی ہے اور تصدیق کرتی ہے کہ آپ بھی ایسی ہی آزمائشوں کا سامنا کر رہے ہیں۔" }
  },

  adCivilization: {
    description: { en: "The people of 'Ad were an ancient Arabian tribe descended from 'Ad ibn Aws ibn Iram. They were known for:", ur: "قومِ عاد ایک قدیم عربی قبیلہ تھا جو عاد بن اوس بن ارم کی نسل سے تھا۔ وہ ان چیزوں کے لیے مشہور تھے:" },
    characteristics: [
      { en: "Massive physical stature and strength", ur: "بڑا جسمانی قد اور طاقت" },
      { en: "Advanced architecture and construction", ur: "ترقی یافتہ تعمیرات اور فنِ تعمیر" },
      { en: "Idol worship despite having a messenger", ur: "رسول ہونے کے باوجود بت پرستی" },
      { en: "Location in Al-Ahqaf (modern-day Oman/Yemen border region, possibly Rub' al-Khali)", ur: "احقاف میں مقام (آج کا عمان/یمن کا سرحدی علاقہ، ممکنہ طور پر ربع الخالی)" },
      { en: "Destroyed by a violent wind that lasted 7 nights and 8 days", ur: "تیز ہوا سے تباہ ہوئے جو 7 راتیں اور 8 دن جاری رہی" }
    ],
    quranicMentions: "Also mentioned in 7:65-72, 11:50-60, 26:123-140, 41:15-16, 51:41-42, 54:18-21, 69:6-8, 89:6-8"
  },

  scientificReferences: {
    notes: [
      { verse: "46:15", topic: "Pregnancy and Nursing", note: { en: "30 months total for carrying and weaning - combined with 24 months nursing (31:14), implies minimum 6 months pregnancy for viability, aligning with modern neonatology", ur: "حمل اور دودھ چھڑانے کے لیے کل 30 مہینے - 24 ماہ دودھ پلانے (31:14) کے ساتھ ملا کر، کم از کم 6 ماہ کا حمل قابلِ حیات ہونے کے لیے ضروری ہے، جو جدید نوزائیدگی کے علم سے مطابقت رکھتا ہے" } },
      { verse: "46:24-25", topic: "Meteorology", note: { en: "Description of devastating wind that appeared as rain cloud - sandstorms in Arabian desert can appear as dark clouds approaching valleys", ur: "تباہ کن ہوا کی تفصیل جو بارش کے بادل جیسی دکھائی دی - عربی صحرا میں ریت کے طوفان تاریک بادلوں کی صورت میں وادیوں کی طرف آتے دکھائی دے سکتے ہیں" } },
      { verse: "46:33", topic: "Creation", note: { en: "'Did not tire' (لَمْ يَعْيَ) - creation ex nihilo requires no exertion from the infinite Creator; used as proof for resurrection", ur: "'نہیں تھکا' (لَمْ يَعْيَ) - عدم سے تخلیق لامحدود خالق سے کسی محنت کی ضرورت نہیں رکھتی؛ قیامت کے ثبوت کے طور پر استعمال ہوا" } }
    ]
  },

  crossReferences: {
    references: [
      { topic: "Jinn hearing Quran", thisVerse: "46:29-32", relatedSurah: "Surah Al-Jinn (72)", note: "Full surah dedicated to this incident with jinn's perspective" },
      { topic: "Mother's sacrifice", thisVerse: "46:15", relatedVerse: "31:14", note: "Luqman also mentions 30 months + 2 years weaning" },
      { topic: "'Ad destruction", thisVerse: "46:21-26", relatedSurah: "Surah Hud (11:50-60)", note: "More details on Hud's dialogue with 'Ad" },
      { topic: "Ulu al-'Azm", thisVerse: "46:35", relatedVerse: "33:7", note: "Covenant with five prophets mentioned" },
      { topic: "Witness from Israel", thisVerse: "46:10", relatedVerse: "26:197", note: "Scholars of Israel recognized Quran's truth" }
    ]
  }
};

export default ONTOLOGY;
