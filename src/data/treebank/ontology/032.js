/**
 * Surah As-Sajdah (32) - Ontology of Quranic Concepts
 * The Prostration - 30 Ayahs, Makkan
 * Theme: Quran is from Allah, creation stages, reward for believers, Day of Judgment
 *
 * Special Note: Prophet Muhammad (peace be upon him) used to recite this surah
 * in Fajr prayer on Fridays, along with Surah Al-Insan (76).
 */

export const ONTOLOGY = {
  surahId: 32,
  surahName: "As-Sajdah",
  surahNameArabic: "السجدة",
  revelationType: "Makki",
  totalAyahs: 30,

  categories: {
    quranAuthority: {
      name: "Authority of the Quran",
      nameUr: "قرآن کا اختیار",
      nameArabic: "حجية القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "الم", meaning: { en: "Alif Lam Mim", ur: "الم" }, explanation: { en: "Mysterious letters - only Allah knows their full meaning", ur: "حروفِ مقطعات - ان کا مکمل مفہوم صرف اللہ جانتا ہے" }, verseRef: "32:1" },
        { term: "تَنزِيلُ الْكِتَابِ", meaning: { en: "Revelation of the Book", ur: "کتاب کا نزول" }, explanation: { en: "The Quran's divine origin affirmed", ur: "قرآن کی الٰہی اصلیت کی تصدیق" }, verseRef: "32:2" },
        { term: "لَا رَيْبَ فِيهِ", meaning: { en: "No doubt in it", ur: "اس میں کوئی شک نہیں" }, explanation: { en: "Absolute certainty of Quran's truth", ur: "قرآن کی سچائی کا قطعی یقین" }, verseRef: "32:2" },
        { term: "مِن رَّبِّ الْعَالَمِينَ", meaning: { en: "From Lord of the worlds", ur: "تمام جہانوں کے رب کی طرف سے" }, explanation: { en: "Universal authority - not just for Arabs", ur: "عالمگیر اختیار - صرف عربوں کے لیے نہیں" }, verseRef: "32:2" },
        { term: "أَمْ يَقُولُونَ افْتَرَاهُ", meaning: { en: "Or do they say he invented it?", ur: "کیا وہ کہتے ہیں اس نے اسے گھڑ لیا؟" }, explanation: { en: "Refuting false claims against the Prophet", ur: "نبی کے خلاف جھوٹے دعووں کی تردید" }, verseRef: "32:3" },
        { term: "الْحَقُّ مِن رَّبِّكَ", meaning: { en: "The truth from your Lord", ur: "تمہارے رب کی طرف سے حق" }, explanation: { en: "Certainty of divine revelation", ur: "الٰہی وحی کا یقین" }, verseRef: "32:3" }
      ]
    },

    divineCreation: {
      name: "Stages of Divine Creation",
      nameUr: "الٰہی تخلیق کے مراحل",
      nameArabic: "مراحل الخلق الإلهي",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "Created heavens and earth", ur: "آسمانوں اور زمین کو پیدا کیا" }, explanation: { en: "Cosmic creation in six days", ur: "چھ ادوار میں کائنات کی تخلیق" }, verseRef: "32:4" },
        { term: "فِي سِتَّةِ أَيَّامٍ", meaning: { en: "In six days/periods", ur: "چھ ادوار میں" }, explanation: { en: "Stages of creation - not human days but divine periods", ur: "تخلیق کے مراحل - انسانی دن نہیں بلکہ الٰہی ادوار" }, verseRef: "32:4" },
        { term: "اسْتَوَىٰ عَلَى الْعَرْشِ", meaning: { en: "Established Himself upon the Throne", ur: "عرش پر مستوی ہوا" }, explanation: { en: "Allah's sovereignty over creation", ur: "مخلوقات پر اللہ کی حاکمیت" }, verseRef: "32:4" },
        { term: "يُدَبِّرُ الْأَمْرَ", meaning: { en: "He arranges the matter", ur: "وہ تمام معاملات کی تدبیر کرتا ہے" }, explanation: { en: "Continuous divine governance of all affairs", ur: "تمام معاملات کی مسلسل الٰہی تدبیر" }, verseRef: "32:5" },
        { term: "خَلَقَ كُلَّ شَيْءٍ", meaning: { en: "Created everything", ur: "ہر چیز کو پیدا کیا" }, explanation: { en: "All-encompassing creation", ur: "ہمہ گیر تخلیق" }, verseRef: "32:7" }
      ]
    },

    humanCreation: {
      name: "Creation of Mankind",
      nameUr: "انسان کی تخلیق",
      nameArabic: "خلق الإنسان",
      color: "#8B5CF6",
      icon: "Users",
      concepts: [
        { term: "أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ", meaning: { en: "Made good everything He created", ur: "ہر چیز کو بہترین بنایا جو اس نے پیدا کی" }, explanation: { en: "Perfection in all creation", ur: "تمام تخلیق میں کمال" }, verseRef: "32:7" },
        { term: "بَدَأَ خَلْقَ الْإِنسَانِ مِن طِينٍ", meaning: { en: "Began creation of man from clay", ur: "انسان کی تخلیق مٹی سے شروع کی" }, explanation: { en: "Adam's origin from earth", ur: "آدم کی اصل زمین سے" }, verseRef: "32:7" },
        { term: "مِن سُلَالَةٍ مِّن مَّاءٍ مَّهِينٍ", meaning: { en: "From extract of despised water", ur: "حقیر پانی کے نچوڑ سے" }, explanation: { en: "Human reproduction - humble origins", ur: "انسانی تولید - حقیر ابتدا" }, verseRef: "32:8" },
        { term: "ثُمَّ سَوَّاهُ", meaning: { en: "Then He proportioned him", ur: "پھر اسے درست کیا" }, explanation: { en: "Perfect human form", ur: "کامل انسانی شکل" }, verseRef: "32:9" },
        { term: "وَنَفَخَ فِيهِ مِن رُّوحِهِ", meaning: { en: "And breathed into him of His Spirit", ur: "اور اس میں اپنی روح پھونکی" }, explanation: { en: "Divine spirit animating humans", ur: "الٰہی روح انسان کو زندہ کرتی ہے" }, verseRef: "32:9" },
        { term: "السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ", meaning: { en: "Hearing, vision, and hearts", ur: "کان، آنکھیں اور دل" }, explanation: { en: "Three gifts for guidance - use them!", ur: "ہدایت کے لیے تین تحائف - انہیں استعمال کرو!" }, verseRef: "32:9" }
      ]
    },

    disbelieversDoubts: {
      name: "Doubts of Disbelievers",
      nameUr: "کافروں کے شکوک",
      nameArabic: "شكوك الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَئِذَا ضَلَلْنَا فِي الْأَرْضِ", meaning: { en: "When we are lost in the earth", ur: "جب ہم زمین میں مل جائیں گے" }, explanation: { en: "Doubting resurrection after decomposition", ur: "گلنے سڑنے کے بعد دوبارہ اٹھائے جانے پر شک" }, verseRef: "32:10" },
        { term: "أَإِنَّا لَفِي خَلْقٍ جَدِيدٍ", meaning: { en: "Will we be in a new creation?", ur: "کیا ہم نئی تخلیق میں ہوں گے؟" }, explanation: { en: "Mocking the concept of resurrection", ur: "قیامت کے تصور کا مذاق اڑانا" }, verseRef: "32:10" },
        { term: "بَلْ هُم بِلِقَاءِ رَبِّهِمْ كَافِرُونَ", meaning: { en: "Rather they deny meeting their Lord", ur: "بلکہ وہ اپنے رب کی ملاقات کا انکار کرتے ہیں" }, explanation: { en: "Root cause - denial of accountability", ur: "بنیادی وجہ - جوابدہی کا انکار" }, verseRef: "32:10" }
      ]
    },

    deathAndResurrection: {
      name: "Death and Resurrection",
      nameUr: "موت اور قیامت",
      nameArabic: "الموت والبعث",
      color: "#8B5CF6",
      icon: "Sun",
      concepts: [
        { term: "يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ", meaning: { en: "Angel of Death will take you", ur: "موت کا فرشتہ تمہاری روحیں قبض کرے گا" }, explanation: { en: "Death is certain - appointed angel", ur: "موت یقینی ہے - مقرر فرشتہ" }, verseRef: "32:11" },
        { term: "الَّذِي وُكِّلَ بِكُمْ", meaning: { en: "Who has been entrusted with you", ur: "جو تم پر مقرر کیا گیا ہے" }, explanation: { en: "Angel assigned specifically for this task", ur: "خاص طور پر اس کام کے لیے مقرر فرشتہ" }, verseRef: "32:11" },
        { term: "ثُمَّ إِلَىٰ رَبِّكُمْ تُرْجَعُونَ", meaning: { en: "Then to your Lord you will be returned", ur: "پھر اپنے رب کی طرف لوٹائے جاؤ گے" }, explanation: { en: "Return to Allah is inevitable", ur: "اللہ کی طرف واپسی ناگزیر ہے" }, verseRef: "32:11" }
      ]
    },

    dayOfJudgment: {
      name: "The Day of Judgment",
      nameUr: "یومِ فیصلہ",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "الْمُجْرِمُونَ نَاكِسُو رُءُوسِهِمْ", meaning: { en: "Criminals hanging their heads", ur: "مجرم اپنے سر جھکائے ہوں گے" }, explanation: { en: "Shame and humiliation of sinners", ur: "گنہگاروں کی شرمندگی اور ذلت" }, verseRef: "32:12" },
        { term: "رَبَّنَا أَبْصَرْنَا وَسَمِعْنَا", meaning: { en: "Our Lord, we have seen and heard", ur: "اے ہمارے رب، ہم نے دیکھ لیا اور سن لیا" }, explanation: { en: "Too late confession on Judgment Day", ur: "قیامت کے دن بہت دیر کا اعتراف" }, verseRef: "32:12" },
        { term: "فَارْجِعْنَا نَعْمَلْ صَالِحًا", meaning: { en: "So return us, we will do righteousness", ur: "ہمیں واپس بھیج دے، ہم نیک عمل کریں گے" }, explanation: { en: "Futile request for second chance", ur: "دوسرے موقع کی بے سود درخواست" }, verseRef: "32:12" },
        { term: "إِنَّا مُوقِنُونَ", meaning: { en: "Indeed, we are now certain", ur: "بے شک اب ہمیں یقین ہے" }, explanation: { en: "Certainty comes too late", ur: "یقین بہت دیر سے آیا" }, verseRef: "32:12" },
        { term: "لَأَمْلَأَنَّ جَهَنَّمَ", meaning: { en: "I will surely fill Hell", ur: "میں ضرور جہنم بھر دوں گا" }, explanation: { en: "Divine decree - Hell will be filled", ur: "الٰہی فیصلہ - جہنم بھری جائے گی" }, verseRef: "32:13" }
      ]
    },

    believersReward: {
      name: "Reward for Believers",
      nameUr: "مومنوں کا اجر",
      nameArabic: "جزاء المؤمنين",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ", meaning: { en: "Their sides forsake beds", ur: "ان کے پہلو بستروں سے الگ ہوتے ہیں" }, explanation: { en: "Night prayer - leaving comfort for worship", ur: "تہجد - آرام چھوڑ کر عبادت کرنا" }, verseRef: "32:16" },
        { term: "يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا", meaning: { en: "They call their Lord in fear and hope", ur: "اپنے رب کو ڈر اور امید سے پکارتے ہیں" }, explanation: { en: "Balance of khawf (fear) and raja (hope)", ur: "خوف اور رجا (امید) کا توازن" }, verseRef: "32:16" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: { en: "And from what We provided them, they spend", ur: "اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں" }, explanation: { en: "Generosity from Allah's provision", ur: "اللہ کے رزق سے سخاوت" }, verseRef: "32:16" },
        { term: "فَلَا تَعْلَمُ نَفْسٌ مَّا أُخْفِيَ لَهُم", meaning: { en: "No soul knows what is hidden for them", ur: "کوئی نہیں جانتا ان کے لیے کیا چھپا رکھا ہے" }, explanation: { en: "Unimaginable rewards await", ur: "ناقابلِ تصور اجر انتظار میں ہے" }, verseRef: "32:17" },
        { term: "مِّن قُرَّةِ أَعْيُنٍ", meaning: { en: "Of comfort for the eyes", ur: "آنکھوں کی ٹھنڈک کا" }, explanation: { en: "Delights beyond imagination", ur: "تصور سے بالاتر لذتیں" }, verseRef: "32:17" },
        { term: "جَزَاءً بِمَا كَانُوا يَعْمَلُونَ", meaning: { en: "As reward for what they used to do", ur: "جو وہ کیا کرتے تھے اس کے بدلے" }, explanation: { en: "Direct correlation - deeds and reward", ur: "براہ راست تعلق - اعمال اور اجر" }, verseRef: "32:17" }
      ]
    },

    believerVsDisbeliever: {
      name: "Believer vs Disbeliever",
      nameUr: "مومن بمقابلہ کافر",
      nameArabic: "المؤمن والكافر",
      color: "#8B5CF6",
      icon: "Scale",
      concepts: [
        { term: "أَفَمَن كَانَ مُؤْمِنًا كَمَن كَانَ فَاسِقًا", meaning: { en: "Is one who was a believer like one who was defiantly disobedient?", ur: "کیا مومن اس جیسا ہے جو نافرمان ہو؟" }, explanation: { en: "Fundamental inequality", ur: "بنیادی عدم مساوات" }, verseRef: "32:18" },
        { term: "لَّا يَسْتَوُونَ", meaning: { en: "They are not equal", ur: "وہ برابر نہیں ہیں" }, explanation: { en: "Clear distinction in ranks", ur: "درجات میں واضح فرق" }, verseRef: "32:18" },
        { term: "جَنَّاتُ الْمَأْوَىٰ", meaning: { en: "Gardens of Refuge", ur: "ٹھکانے کے باغات" }, explanation: { en: "Paradise for believers", ur: "مومنوں کے لیے جنت" }, verseRef: "32:19" },
        { term: "نُزُلًا بِمَا كَانُوا يَعْمَلُونَ", meaning: { en: "As accommodation for what they did", ur: "ان کے اعمال کے بدلے مہمان نوازی" }, explanation: { en: "Actions determine destination", ur: "اعمال منزل طے کرتے ہیں" }, verseRef: "32:19" },
        { term: "مَّأْوَاهُمُ النَّارُ", meaning: { en: "Their refuge is the Fire", ur: "ان کا ٹھکانا آگ ہے" }, explanation: { en: "Hell for the disobedient", ur: "نافرمانوں کے لیے جہنم" }, verseRef: "32:20" },
        { term: "ذُوقُوا عَذَابَ النَّارِ", meaning: { en: "Taste the punishment of Fire", ur: "آگ کا عذاب چکھو" }, explanation: { en: "Experiencing what was denied", ur: "جس چیز کا انکار کرتے تھے اسے بھگتنا" }, verseRef: "32:20" }
      ]
    },

    lesserPunishment: {
      name: "Lesser Punishment",
      nameUr: "ادنیٰ عذاب",
      nameArabic: "العذاب الأدنى",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلَنُذِيقَنَّهُم مِّنَ الْعَذَابِ الْأَدْنَىٰ", meaning: { en: "We will make them taste the nearer punishment", ur: "ہم انہیں قریبی عذاب ضرور چکھائیں گے" }, explanation: { en: "Worldly hardships as warning", ur: "دنیاوی مشکلات بطور تنبیہ" }, verseRef: "32:21" },
        { term: "دُونَ الْعَذَابِ الْأَكْبَرِ", meaning: { en: "Before the greater punishment", ur: "بڑے عذاب سے پہلے" }, explanation: { en: "Greater punishment is in Hereafter", ur: "بڑا عذاب آخرت میں ہے" }, verseRef: "32:21" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: { en: "Perhaps they will return", ur: "شاید وہ لوٹ آئیں" }, explanation: { en: "Purpose - repentance and return to Allah", ur: "مقصد - توبہ اور اللہ کی طرف رجوع" }, verseRef: "32:21" }
      ]
    },

    turningAway: {
      name: "Turning Away from Truth",
      nameUr: "حق سے اعراض",
      nameArabic: "الإعراض عن الحق",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَمَنْ أَظْلَمُ مِمَّن ذُكِّرَ بِآيَاتِ رَبِّهِ", meaning: { en: "Who is more unjust than one reminded of his Lord's verses", ur: "اس سے بڑا ظالم کون جسے اس کے رب کی آیات یاد دلائی جائیں" }, explanation: { en: "Greatest injustice - ignoring guidance", ur: "سب سے بڑا ظلم - ہدایت کو نظرانداز کرنا" }, verseRef: "32:22" },
        { term: "ثُمَّ أَعْرَضَ عَنْهَا", meaning: { en: "Then turns away from them", ur: "پھر ان سے منہ موڑ لے" }, explanation: { en: "Deliberate rejection after reminder", ur: "یاددہانی کے بعد جان بوجھ کر ردّ کرنا" }, verseRef: "32:22" },
        { term: "إِنَّا مِنَ الْمُجْرِمِينَ مُنتَقِمُونَ", meaning: { en: "Indeed We will take retribution on the criminals", ur: "بے شک ہم مجرموں سے بدلہ لیں گے" }, explanation: { en: "Divine justice will prevail", ur: "الٰہی انصاف غالب آئے گا" }, verseRef: "32:22" }
      ]
    },

    musaAndQuran: {
      name: "Musa and the Quran",
      nameUr: "موسیٰ اور قرآن",
      nameArabic: "موسى والقرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "آتَيْنَا مُوسَى الْكِتَابَ", meaning: { en: "We gave Musa the Scripture", ur: "ہم نے موسیٰ کو کتاب دی" }, explanation: { en: "Precedent of divine revelation", ur: "الٰہی وحی کی سابقہ مثال" }, verseRef: "32:23" },
        { term: "فَلَا تَكُن فِي مِرْيَةٍ مِّن لِّقَائِهِ", meaning: { en: "So be not in doubt about meeting Him", ur: "اللہ سے ملاقات میں شک نہ کرو" }, explanation: { en: "Certainty of meeting Allah", ur: "اللہ سے ملاقات کا یقین" }, verseRef: "32:23" },
        { term: "هُدًى لِّبَنِي إِسْرَائِيلَ", meaning: { en: "Guidance for Children of Israel", ur: "بنی اسرائیل کے لیے ہدایت" }, explanation: { en: "Torah as guidance for its time", ur: "تورات اپنے زمانے کی ہدایت" }, verseRef: "32:23" },
        { term: "أَئِمَّةً يَهْدُونَ بِأَمْرِنَا", meaning: { en: "Leaders guiding by Our command", ur: "ہمارے حکم سے ہدایت کرنے والے پیشوا" }, explanation: { en: "Righteous leadership emerges from patience", ur: "نیک قیادت صبر سے پیدا ہوتی ہے" }, verseRef: "32:24" },
        { term: "لَمَّا صَبَرُوا", meaning: { en: "When they were patient", ur: "جب انہوں نے صبر کیا" }, explanation: { en: "Patience prerequisite for leadership", ur: "قیادت کے لیے صبر شرط ہے" }, verseRef: "32:24" },
        { term: "وَكَانُوا بِآيَاتِنَا يُوقِنُونَ", meaning: { en: "And they were certain of Our signs", ur: "اور وہ ہماری نشانیوں پر یقین رکھتے تھے" }, explanation: { en: "Certainty from pondering signs", ur: "نشانیوں پر غور سے یقین" }, verseRef: "32:24" }
      ]
    },

    dayOfDecision: {
      name: "The Day of Decision",
      nameUr: "فیصلے کا دن",
      nameArabic: "يوم الفصل",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "يَفْصِلُ بَيْنَهُمْ يَوْمَ الْقِيَامَةِ", meaning: { en: "Will judge between them on Day of Resurrection", ur: "قیامت کے دن ان کے درمیان فیصلہ کرے گا" }, explanation: { en: "Final judgment resolves all disputes", ur: "حتمی فیصلہ تمام تنازعات حل کرے گا" }, verseRef: "32:25" },
        { term: "فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ", meaning: { en: "Concerning that over which they differed", ur: "جن باتوں میں وہ اختلاف کرتے تھے" }, explanation: { en: "All differences settled by Allah", ur: "تمام اختلافات اللہ طے کرے گا" }, verseRef: "32:25" }
      ]
    },

    lessonsFromHistory: {
      name: "Lessons from Destroyed Nations",
      nameUr: "تباہ شدہ قوموں سے اسباق",
      nameArabic: "عبر من الأمم الهالكة",
      color: "#EF4444",
      icon: "Book",
      concepts: [
        { term: "أَوَلَمْ يَهْدِ لَهُمْ كَمْ أَهْلَكْنَا", meaning: { en: "Has it not guided them how many We destroyed", ur: "کیا انہیں ہدایت نہیں ملی کہ ہم نے کتنوں کو ہلاک کیا" }, explanation: { en: "Historical evidence of divine punishment", ur: "الٰہی عذاب کا تاریخی ثبوت" }, verseRef: "32:26" },
        { term: "يَمْشُونَ فِي مَسَاكِنِهِمْ", meaning: { en: "They walk in their dwellings", ur: "وہ ان کی بستیوں میں چلتے پھرتے ہیں" }, explanation: { en: "Arabs passed by ruins of destroyed nations", ur: "عرب تباہ شدہ قوموں کے کھنڈرات سے گزرتے تھے" }, verseRef: "32:26" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ", meaning: { en: "Indeed in that are signs", ur: "بے شک اس میں نشانیاں ہیں" }, explanation: { en: "Ruins are warning signs", ur: "کھنڈرات تنبیہ کی نشانیاں ہیں" }, verseRef: "32:26" },
        { term: "أَفَلَا يَسْمَعُونَ", meaning: { en: "Will they not hear?", ur: "کیا وہ نہیں سنتے؟" }, explanation: { en: "Call to reflect on history", ur: "تاریخ پر غور کرنے کی دعوت" }, verseRef: "32:26" }
      ]
    },

    signsOfMercy: {
      name: "Signs of Divine Mercy",
      nameUr: "الٰہی رحمت کی نشانیاں",
      nameArabic: "آيات الرحمة الإلهية",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "نَسُوقُ الْمَاءَ إِلَى الْأَرْضِ الْجُرُزِ", meaning: { en: "We drive water to barren land", ur: "ہم خشک زمین کی طرف پانی لے جاتے ہیں" }, explanation: { en: "Water revives dead earth", ur: "پانی مردہ زمین کو زندہ کرتا ہے" }, verseRef: "32:27" },
        { term: "فَنُخْرِجُ بِهِ زَرْعًا", meaning: { en: "Then We bring forth crops", ur: "پھر اس سے فصلیں نکالتے ہیں" }, explanation: { en: "Agriculture depends on divine provision", ur: "زراعت الٰہی رزق پر منحصر ہے" }, verseRef: "32:27" },
        { term: "تَأْكُلُ مِنْهُ أَنْعَامُهُمْ وَأَنفُسُهُمْ", meaning: { en: "From which their livestock and they eat", ur: "جس سے ان کے مویشی اور وہ خود کھاتے ہیں" }, explanation: { en: "Allah feeds all creatures", ur: "اللہ تمام مخلوقات کو کھلاتا ہے" }, verseRef: "32:27" },
        { term: "أَفَلَا يُبْصِرُونَ", meaning: { en: "Will they not see?", ur: "کیا وہ نہیں دیکھتے؟" }, explanation: { en: "Open your eyes to these signs!", ur: "ان نشانیوں کی طرف آنکھیں کھولو!" }, verseRef: "32:27" }
      ]
    },

    mockingThePromise: {
      name: "Mockers Demanding Judgment",
      nameUr: "فیصلے کا مطالبہ کرنے والے مذاق اڑانے والے",
      nameArabic: "المستهزئون بالوعد",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "مَتَىٰ هَٰذَا الْفَتْحُ", meaning: { en: "When is this conquest/decision?", ur: "یہ فتح/فیصلہ کب ہے؟" }, explanation: { en: "Mockers demanding the promised judgment", ur: "مذاق اڑانے والے وعدہ شدہ فیصلے کا مطالبہ کر رہے ہیں" }, verseRef: "32:28" },
        { term: "إِن كُنتُمْ صَادِقِينَ", meaning: { en: "If you are truthful", ur: "اگر تم سچے ہو" }, explanation: { en: "Challenging the Prophet", ur: "نبی کو چیلنج کرنا" }, verseRef: "32:28" },
        { term: "يَوْمَ الْفَتْحِ", meaning: { en: "Day of Decision/Conquest", ur: "فتح/فیصلے کا دن" }, explanation: { en: "The appointed time will come", ur: "مقررہ وقت آئے گا" }, verseRef: "32:29" },
        { term: "لَا يَنفَعُ الَّذِينَ كَفَرُوا إِيمَانُهُمْ", meaning: { en: "Faith of disbelievers will not benefit", ur: "کافروں کا ایمان فائدہ نہیں دے گا" }, explanation: { en: "Too late for faith on that Day", ur: "اس دن ایمان لانے میں بہت دیر ہو چکی ہوگی" }, verseRef: "32:29" },
        { term: "وَلَا هُمْ يُنظَرُونَ", meaning: { en: "Nor will they be reprieved", ur: "اور نہ انہیں مہلت دی جائے گی" }, explanation: { en: "No delay or second chance", ur: "کوئی تاخیر یا دوسرا موقع نہیں" }, verseRef: "32:29" }
      ]
    },

    finalCommand: {
      name: "Final Command",
      nameUr: "آخری حکم",
      nameArabic: "الأمر الأخير",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "فَأَعْرِضْ عَنْهُمْ", meaning: { en: "So turn away from them", ur: "پس ان سے اعراض کرو" }, explanation: { en: "Do not let their mockery affect you", ur: "ان کا مذاق تمہیں متاثر نہ کرے" }, verseRef: "32:30" },
        { term: "وَانتَظِرْ", meaning: { en: "And wait", ur: "اور انتظار کرو" }, explanation: { en: "Be patient - victory will come", ur: "صبر کرو - فتح آئے گی" }, verseRef: "32:30" },
        { term: "إِنَّهُم مُّنتَظِرُونَ", meaning: { en: "Indeed they are waiting", ur: "بے شک وہ بھی انتظار کر رہے ہیں" }, explanation: { en: "Both sides await - but outcomes differ", ur: "دونوں فریق انتظار میں ہیں - لیکن نتائج مختلف ہیں" }, verseRef: "32:30" }
      ]
    }
  },

  relationships: [
    { from: "تنزيل الكتاب", to: "لا ريب فيه", type: "quality", description: { en: "Divine revelation is doubt-free", ur: "الٰہی وحی شک سے پاک ہے" } },
    { from: "خلق الإنسان من طين", to: "نفخ فيه من روحه", type: "sequence", description: { en: "Physical then spiritual creation", ur: "پہلے جسمانی پھر روحانی تخلیق" } },
    { from: "السمع والأبصار والأفئدة", to: "قليلاً ما تشكرون", type: "irony", description: { en: "Faculties given but gratitude lacking", ur: "صلاحیتیں دی گئیں لیکن شکر نہیں" } },
    { from: "تتجافى جنوبهم", to: "قرة أعين", type: "reward", description: { en: "Night prayer leads to hidden delights", ur: "تہجد پوشیدہ لذتوں تک لے جاتی ہے" } },
    { from: "مؤمناً", to: "فاسقاً", type: "contrast", description: { en: "Believer and disobedient are not equal", ur: "مومن اور نافرمان برابر نہیں" } },
    { from: "العذاب الأدنى", to: "العذاب الأكبر", type: "progression", description: { en: "Lesser punishment warns of greater", ur: "چھوٹا عذاب بڑے کی تنبیہ ہے" } },
    { from: "صبروا", to: "أئمة", type: "cause", description: { en: "Patience leads to leadership", ur: "صبر قیادت تک لے جاتا ہے" } },
    { from: "الماء إلى الأرض الجرز", to: "البعث", type: "analogy", description: { en: "Reviving dead land parallels resurrection", ur: "مردہ زمین کا زندہ ہونا قیامت کی مثال ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Authority", verses: "32:1-3", description: { en: "Divine origin affirmed, doubters refuted", ur: "الٰہی اصلیت کی تصدیق، شک کرنے والوں کی تردید" } },
      { stage: 2, theme: "Cosmic Creation", verses: "32:4-6", description: { en: "Heavens, earth, and divine governance", ur: "آسمان، زمین اور الٰہی تدبیر" } },
      { stage: 3, theme: "Human Creation", verses: "32:7-9", description: { en: "From clay to spirit - stages of creation", ur: "مٹی سے روح تک - تخلیق کے مراحل" } },
      { stage: 4, theme: "Resurrection Doubts", verses: "32:10-11", description: { en: "Disbelievers' denial and Angel of Death", ur: "کافروں کا انکار اور ملک الموت" } },
      { stage: 5, theme: "Judgment Day Scene", verses: "32:12-14", description: { en: "Criminals' regret and Hell's decree", ur: "مجرموں کی پشیمانی اور جہنم کا فیصلہ" } },
      { stage: 6, theme: "Prostrating Believers", verses: "32:15-17", description: { en: "Those who leave beds for worship - hidden rewards", ur: "جو عبادت کے لیے بستر چھوڑیں - پوشیدہ اجر" } },
      { stage: 7, theme: "Two Paths", verses: "32:18-22", description: { en: "Believer vs disobedient, Paradise vs Fire", ur: "مومن بمقابلہ نافرمان، جنت بمقابلہ آگ" } },
      { stage: 8, theme: "Musa's Example", verses: "32:23-25", description: { en: "Torah parallel, patience creates leaders", ur: "تورات کی مثال، صبر پیشوا بناتا ہے" } },
      { stage: 9, theme: "Historical Warnings", verses: "32:26-27", description: { en: "Destroyed nations, signs in nature", ur: "تباہ شدہ قومیں، فطرت کی نشانیاں" } },
      { stage: 10, theme: "Final Confrontation", verses: "32:28-30", description: { en: "Mockers' challenge, command to wait", ur: "مذاق اڑانے والوں کا چیلنج، انتظار کا حکم" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Pray Tahajjud (night prayer)", how: "Leave your bed at night to worship Allah - the hidden rewards are worth it", verse: "32:16" },
      { principle: "Balance fear and hope", how: "Call upon Allah with both fear of punishment and hope for mercy", verse: "32:16" },
      { principle: "Use your faculties for guidance", how: "Allah gave you hearing, sight, and heart - use them to recognize truth", verse: "32:9" },
      { principle: "Learn from history", how: "Reflect on destroyed nations when you pass their ruins", verse: "32:26" },
      { principle: "Be patient for leadership", how: "True spiritual leadership comes through patience and certainty", verse: "32:24" },
      { principle: "Don't let mockery affect you", how: "Turn away from mockers and wait - Allah's promise is true", verse: "32:30" },
      { principle: "Give from what Allah provides", how: "Spend in charity from your sustenance", verse: "32:16" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Friday Fajr Surah", ur: "جمعہ کی فجر کی سورہ" },
    insight: { en: "Prophet Muhammad (peace be upon him) consistently recited this surah in the Friday Fajr prayer alongside Surah Al-Insan (76). Why these two? Both surahs contain: (1) Stages of human creation (32:7-9 and 76:1-2), (2) Description of believers who forsake sleep for worship (32:16 and 76:26), (3) Vivid descriptions of Paradise rewards (32:17 and 76:12-22), (4) Warnings about Judgment Day (32:12-14 and 76:7-10). Together they prepare Muslims for the week ahead by reminding them of their origin, purpose, and destination. The verse about prostration (32:15) includes a sajdah tilawah (prostration of recitation), making it the only surah named after this prostration. This surah teaches that true believers are those whose 'sides forsake their beds' - they sacrifice comfort for worship. The reward? 'No soul knows what is hidden for them of comfort for the eyes' (32:17) - Paradise's delights are beyond imagination.", ur: "نبی محمد (صلی اللہ علیہ وسلم) جمعہ کی فجر کی نماز میں مسلسل اس سورہ کو سورہ الانسان (76) کے ساتھ تلاوت فرماتے تھے۔ یہ دو سورتیں کیوں؟ دونوں سورتوں میں یہ چیزیں شامل ہیں: (1) انسانی تخلیق کے مراحل (32:7-9 اور 76:1-2)، (2) ان مومنوں کا بیان جو عبادت کے لیے نیند چھوڑتے ہیں (32:16 اور 76:26)، (3) جنت کے اجر کے واضح بیانات (32:17 اور 76:12-22)، (4) قیامت کے بارے میں تنبیہات (32:12-14 اور 76:7-10)۔ یہ مل کر مسلمانوں کو آنے والے ہفتے کے لیے تیار کرتی ہیں ان کی اصل، مقصد اور منزل یاد دلا کر۔ سجدے کی آیت (32:15) میں سجدہ تلاوت شامل ہے، جو اسے واحد سورہ بناتی ہے جو اس سجدے کے نام سے موسوم ہے۔ یہ سورہ سکھاتی ہے کہ سچے مومن وہ ہیں جن کے 'پہلو بستروں سے الگ ہوتے ہیں' - وہ عبادت کے لیے آرام قربان کرتے ہیں۔ اجر؟ 'کوئی نہیں جانتا ان کے لیے آنکھوں کی کیسی ٹھنڈک چھپا رکھی ہے' (32:17) - جنت کی لذتیں تصور سے بالاتر ہیں۔" }
  },

  historicalContext: {
    note: { en: "This Makki surah was revealed when the Prophet faced intense opposition in Mecca. The Arabs mocked the concept of resurrection, asking 'When we are scattered in the earth, will we be in a new creation?' (32:10). The surah responds by pointing to Allah's power in creation - if He created humans from clay and breathed His spirit into them, resurrection is certainly within His power. The reference to Musa (32:23) connects the Prophet's mission to previous prophets, establishing continuity of revelation. The command to 'turn away and wait' (32:30) provided comfort during persecution - ultimate victory was assured.", ur: "یہ مکی سورہ اس وقت نازل ہوئی جب نبی کو مکہ میں شدید مخالفت کا سامنا تھا۔ عرب قیامت کے تصور کا مذاق اڑاتے تھے اور پوچھتے تھے 'جب ہم زمین میں مل جائیں گے تو کیا نئی تخلیق میں ہوں گے؟' (32:10)۔ سورہ اللہ کی تخلیقی قدرت کی طرف اشارہ کر کے جواب دیتی ہے - اگر اس نے مٹی سے انسان بنایا اور اپنی روح پھونکی تو قیامت یقیناً اس کی قدرت میں ہے۔ موسیٰ کا حوالہ (32:23) نبی کے مشن کو پچھلے انبیاء سے جوڑتا ہے، وحی کے تسلسل کو ثابت کرتا ہے۔ 'ان سے اعراض کرو اور انتظار کرو' (32:30) کے حکم نے ظلم و ستم کے دوران تسلی فراہم کی - حتمی فتح کی یقین دہانی تھی۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الم", example: { en: "Huruf Muqatta'at", ur: "حروفِ مقطعات" }, effect: "Mysterious letters drawing attention to the miraculous Quran" },
      { feature: "تَتَجَافَىٰ", example: { en: "Their sides forsake", ur: "ان کے پہلو الگ ہوتے ہیں" }, effect: "Form VI verb - intensive mutual action, suggesting struggle against sleep" },
      { feature: "قُرَّةِ أَعْيُنٍ", example: { en: "Comfort of eyes", ur: "آنکھوں کی ٹھنڈک" }, effect: "Idiom for extreme delight - eyes find rest in seeing beloved" },
      { feature: "نَاكِسُو رُءُوسِهِمْ", example: { en: "Hanging their heads", ur: "اپنے سر جھکائے ہوئے" }, effect: "Active participle - continuous state of shame" },
      { feature: "الْجُرُزِ", example: { en: "Barren land", ur: "خشک بنجر زمین" }, effect: "Land so dry it has no vegetation at all - then revived" },
      { feature: "مُنتَظِرُونَ", example: { en: "Waiting", ur: "انتظار کرنے والے" }, effect: "Same word for both parties - but outcomes differ vastly" }
    ]
  },

  sajdahVerse: {
    verse: 15,
    text: "إِنَّمَا يُؤْمِنُ بِآيَاتِنَا الَّذِينَ إِذَا ذُكِّرُوا بِهَا خَرُّوا سُجَّدًا وَسَبَّحُوا بِحَمْدِ رَبِّهِمْ وَهُمْ لَا يَسْتَكْبِرُونَ",
    translation: "Only those believe in Our verses who, when reminded by them, fall down in prostration and exalt with praise of their Lord, and they are not arrogant",
    note: "This is a verse of sajdah (prostration). When reciting or hearing this verse, one should perform sajdah tilawah."
  },

  fridayConnection: {
    practice: "Recited by Prophet in Friday Fajr",
    pairedWith: "Surah Al-Insan (76)",
    wisdom: [
      "Both discuss human creation stages",
      "Both describe believers who worship at night",
      "Both contain vivid Paradise descriptions",
      "Both warn about Judgment Day",
      "Prepare the heart for Friday - best day of the week"
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "32:4", topic: "Creation in six periods", note: "Ayam (days) can mean periods - creation happened in stages" },
      { verse: "32:7-9", topic: "Human development stages", note: "Clay (minerals), fluid (sperm), shaping (embryo), spirit (consciousness)" },
      { verse: "32:9", topic: "Sensory development", note: "Hearing, then sight, then higher cognition - matches fetal development order" },
      { verse: "32:27", topic: "Water cycle", note: "Allah drives water to barren land - describes precipitation and irrigation" }
    ]
  }
};

export default ONTOLOGY;
