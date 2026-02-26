/**
 * Surah Al-Qalam (68) - Ontology of Quranic Concepts
 * The Pen
 * Theme: Defense of Prophet's character, story of Garden owners, fate of deniers
 */

export const ONTOLOGY = {
  surahId: 68,
  surahName: "Al-Qalam",
  surahNameArabic: "القلم",
  revelationType: "Makki",
  totalAyahs: 52,

  categories: {
    divineOath: {
      name: "Divine Oath by the Pen",
      nameUr: "قلم کی الٰہی قسم",
      nameArabic: "القسم بالقلم",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "ن", meaning: { en: "Nun (disconnected letter)", ur: "نون (حروفِ مقطعات)" }, explanation: { en: "One of the mysterious letters of Quran", ur: "قرآن کے پُراسرار حروف میں سے ایک" }, verseRef: "68:1" },
        { term: "وَالْقَلَمِ", meaning: { en: "By the Pen", ur: "قلم کی قسم" }, explanation: { en: "Oath by writing instrument - symbol of knowledge", ur: "لکھنے کے آلے کی قسم - علم کی علامت" }, verseRef: "68:1" },
        { term: "وَمَا يَسْطُرُونَ", meaning: { en: "And what they inscribe", ur: "اور جو کچھ وہ لکھتے ہیں" }, explanation: { en: "Angels recording deeds or writers writing", ur: "فرشتے اعمال لکھ رہے ہیں یا لکھنے والے لکھ رہے ہیں" }, verseRef: "68:1" }
      ]
    },

    prophetDefense: {
      name: "Defense of Prophet's Character",
      nameUr: "نبی ﷺ کے کردار کا دفاع",
      nameArabic: "الدفاع عن خلق النبي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "مَا أَنتَ بِمَجْنُونٍ", meaning: { en: "You are not a madman", ur: "آپ دیوانے نہیں ہیں" }, explanation: { en: "Refuting disbelievers' accusation", ur: "کافروں کے الزام کی تردید" }, verseRef: "68:2" },
        { term: "أَجْرًا غَيْرَ مَمْنُونٍ", meaning: { en: "Uninterrupted reward", ur: "نہ ختم ہونے والا اجر" }, explanation: { en: "Endless reward for Prophet", ur: "نبی ﷺ کے لیے لامتناہی اجر" }, verseRef: "68:3" },
        { term: "خُلُقٍ عَظِيمٍ", meaning: { en: "Exalted character", ur: "عظیم اخلاق" }, explanation: { en: "Prophet's supreme moral character", ur: "نبی ﷺ کا بلند ترین اخلاقی کردار" }, verseRef: "68:4" }
      ]
    },

    futureVindication: {
      name: "Future Vindication",
      nameUr: "مستقبل میں سچائی کا ثبوت",
      nameArabic: "التبرئة المستقبلية",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "فَسَتُبْصِرُ وَيُبْصِرُونَ", meaning: { en: "You will see and they will see", ur: "جلد تم بھی دیکھ لو گے اور وہ بھی دیکھ لیں گے" }, explanation: { en: "Truth will become clear", ur: "سچائی واضح ہو جائے گی" }, verseRef: "68:5" },
        { term: "بِأَييِّكُمُ الْمَفْتُونُ", meaning: { en: "Which of you is afflicted", ur: "تم میں سے کون دیوانہ ہے" }, explanation: { en: "Who is truly insane will be revealed", ur: "واقعی کون پاگل ہے یہ ظاہر ہو جائے گا" }, verseRef: "68:6" },
        { term: "هُوَ أَعْلَمُ بِمَن ضَلَّ", meaning: { en: "He knows who strayed", ur: "وہ خوب جانتا ہے کون گمراہ ہوا" }, explanation: { en: "Allah knows the truly misguided", ur: "اللہ جانتا ہے کہ حقیقتاً گمراہ کون ہے" }, verseRef: "68:7" }
      ]
    },

    evilCharacteristics: {
      name: "Evil Characteristics to Avoid",
      nameUr: "بری صفات جن سے بچنا ہے",
      nameArabic: "الصفات السيئة للتجنب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "حَلَّافٍ مَّهِينٍ", meaning: { en: "Excessive swearer, despicable", ur: "بہت زیادہ قسمیں کھانے والا، ذلیل" }, explanation: { en: "One who swears too much is degraded", ur: "جو بہت زیادہ قسمیں کھائے وہ ذلیل ہے" }, verseRef: "68:10" },
        { term: "هَمَّازٍ مَّشَّاءٍ بِنَمِيمٍ", meaning: { en: "Slanderer, spreader of gossip", ur: "عیب جو، چغل خور" }, explanation: { en: "Backbiter who spreads malicious talk", ur: "غیبت کرنے والا جو فساد کی باتیں پھیلائے" }, verseRef: "68:11" },
        { term: "مَّنَّاعٍ لِّلْخَيْرِ", meaning: { en: "Preventer of good", ur: "بھلائی سے روکنے والا" }, explanation: { en: "One who blocks charity and goodness", ur: "جو صدقہ اور نیکی کو روکے" }, verseRef: "68:12" },
        { term: "مُعْتَدٍ أَثِيمٍ", meaning: { en: "Transgressor, sinful", ur: "حد سے گزرنے والا، گنہگار" }, explanation: { en: "Aggressive and sinful person", ur: "جارحانہ اور گناہ گار شخص" }, verseRef: "68:12" },
        { term: "عُتُلٍّ... زَنِيمٍ", meaning: { en: "Cruel, outcast", ur: "سخت دل، بدنسب" }, explanation: { en: "Harsh and of doubtful origin", ur: "سنگ دل اور مشکوک نسب والا" }, verseRef: "68:13" }
      ]
    },

    wealthArrogance: {
      name: "Wealth and Arrogance",
      nameUr: "مال اور غرور",
      nameArabic: "المال والغرور",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ذَا مَالٍ وَبَنِينَ", meaning: { en: "Owner of wealth and children", ur: "مال اور اولاد والا" }, explanation: { en: "Material blessings shouldn't cause arrogance", ur: "مادی نعمتیں تکبر کا سبب نہیں ہونی چاہییں" }, verseRef: "68:14" },
        { term: "أَسَاطِيرُ الْأَوَّلِينَ", meaning: { en: "Legends of the ancients", ur: "پہلوں کی کہانیاں" }, explanation: { en: "Dismissing Quran as old stories", ur: "قرآن کو پرانی کہانیاں کہہ کر رد کرنا" }, verseRef: "68:15" },
        { term: "سَنَسِمُهُ عَلَى الْخُرْطُومِ", meaning: { en: "We will brand him on snout", ur: "ہم اس کی ناک پر داغ لگائیں گے" }, explanation: { en: "Disgrace on Day of Judgment", ur: "قیامت کے دن رسوائی" }, verseRef: "68:16" }
      ]
    },

    gardenOwners: {
      name: "Story of the Garden Owners",
      nameUr: "باغ والوں کا قصہ",
      nameArabic: "قصة أصحاب الجنة",
      color: '#22C55E',
      icon: 'Book',
      concepts: [
        { term: "أَصْحَابَ الْجَنَّةِ", meaning: { en: "Companions of the garden", ur: "باغ والے" }, explanation: { en: "Wealthy garden owners who excluded poor", ur: "مالدار باغ والے جنہوں نے غریبوں کو محروم رکھا" }, verseRef: "68:17" },
        { term: "لَيَصْرِمُنَّهَا مُصْبِحِينَ", meaning: { en: "To harvest at morning", ur: "صبح سویرے پھل توڑ لیں گے" }, explanation: { en: "Planned to pick fruit before poor arrived", ur: "غریبوں کے آنے سے پہلے پھل توڑنے کا منصوبہ" }, verseRef: "68:17" },
        { term: "وَلَا يَسْتَثْنُونَ", meaning: { en: "Without saying 'In sha Allah'", ur: "اللہ کی مشیئت کا ذکر نہیں کیا" }, explanation: { en: "Failed to say 'If Allah wills'", ur: "ان شاء اللہ کہنا بھول گئے" }, verseRef: "68:18" },
        { term: "طَائِفٌ مِّن رَّبِّكَ", meaning: { en: "A visitor from your Lord", ur: "تیرے رب کی طرف سے ایک آفت" }, explanation: { en: "Night calamity destroyed garden", ur: "رات کی آفت نے باغ تباہ کر دیا" }, verseRef: "68:19" },
        { term: "فَأَصْبَحَتْ كَالصَّرِيمِ", meaning: { en: "Became like one harvested", ur: "کٹے ہوئے کھیت کی طرح ہو گیا" }, explanation: { en: "Garden became black, burnt", ur: "باغ سیاہ اور جلا ہوا ہو گیا" }, verseRef: "68:20" }
      ]
    },

    gardenOwnersRemorse: {
      name: "The Garden Owners' Remorse",
      nameUr: "باغ والوں کی ندامت",
      nameArabic: "ندم أصحاب الجنة",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "لَا يَدْخُلَنَّهَا... مِّسْكِينٌ", meaning: { en: "No poor person will enter", ur: "کوئی مسکین داخل نہ ہونے پائے" }, explanation: { en: "Their selfish intention", ur: "ان کی خودغرضانہ نیت" }, verseRef: "68:24" },
        { term: "إِنَّا لَضَالُّونَ", meaning: { en: "Indeed we are lost", ur: "بلاشبہ ہم راستہ بھول گئے ہیں" }, explanation: { en: "First thought - wrong place", ur: "پہلا خیال - غلط جگہ آ گئے" }, verseRef: "68:26" },
        { term: "بَلْ نَحْنُ مَحْرُومُونَ", meaning: { en: "Rather, we are deprived", ur: "بلکہ ہم محروم کر دیے گئے ہیں" }, explanation: { en: "Realization of their loss", ur: "اپنے نقصان کا ادراک" }, verseRef: "68:27" },
        { term: "لَوْلَا تُسَبِّحُونَ", meaning: { en: "Why do you not glorify Allah?", ur: "تم اللہ کی تسبیح کیوں نہیں کرتے؟" }, explanation: { en: "The moderate one's reminder", ur: "معتدل شخص کی یاددہانی" }, verseRef: "68:28" },
        { term: "سُبْحَانَ رَبِّنَا", meaning: { en: "Glory be to our Lord", ur: "ہمارا رب پاک ہے" }, explanation: { en: "Their repentance", ur: "ان کی توبہ" }, verseRef: "68:29" },
        { term: "إِنَّا كُنَّا ظَالِمِينَ", meaning: { en: "Indeed we were wrongdoers", ur: "بلاشبہ ہم ظالم تھے" }, explanation: { en: "Admission of wrong", ur: "غلطی کا اعتراف" }, verseRef: "68:29" }
      ]
    },

    muslimsVsCriminals: {
      name: "Muslims vs Criminals",
      nameUr: "مسلمان بمقابلہ مجرمین",
      nameArabic: "المسلمون مقابل المجرمين",
      color: '#10B981',
      icon: 'Scale',
      concepts: [
        { term: "جَنَّاتِ النَّعِيمِ", meaning: { en: "Gardens of Pleasure", ur: "نعمتوں کے باغات" }, explanation: { en: "Reward for the righteous", ur: "نیک لوگوں کا اجر" }, verseRef: "68:34" },
        { term: "أَفَنَجْعَلُ الْمُسْلِمِينَ كَالْمُجْرِمِينَ", meaning: { en: "Will We treat Muslims like criminals?", ur: "کیا ہم مسلمانوں کو مجرموں جیسا کر دیں؟" }, explanation: { en: "Rhetorical - justice demands difference", ur: "استفہامی - انصاف فرق کا تقاضا کرتا ہے" }, verseRef: "68:35" },
        { term: "مَا لَكُمْ كَيْفَ تَحْكُمُونَ", meaning: { en: "What is wrong with you? How do you judge?", ur: "تمہیں کیا ہو گیا ہے؟ تم کیسا فیصلہ کرتے ہو؟" }, explanation: { en: "Challenging false logic", ur: "غلط منطق کو چیلنج" }, verseRef: "68:36" }
      ]
    },

    rhetoricalQuestions: {
      name: "Rhetorical Questions",
      nameUr: "بلاغتی سوالات",
      nameArabic: "الأسئلة البلاغية",
      color: '#06B6D4',
      icon: 'MessageCircle',
      concepts: [
        { term: "أَمْ لَكُمْ كِتَابٌ فِيهِ تَدْرُسُونَ", meaning: { en: "Do you have a book you study?", ur: "کیا تمہارے پاس کوئی کتاب ہے جس میں پڑھتے ہو؟" }, explanation: { en: "No scriptural basis for their claims", ur: "ان کے دعووں کی کوئی کتابی بنیاد نہیں" }, verseRef: "68:37" },
        { term: "أَمْ لَكُمْ أَيْمَانٌ عَلَيْنَا", meaning: { en: "Do you have oaths from Us?", ur: "کیا تمہارے پاس ہماری طرف سے قسمیں ہیں؟" }, explanation: { en: "No divine guarantee for their desires", ur: "ان کی خواہشات کی کوئی الہی ضمانت نہیں" }, verseRef: "68:39" },
        { term: "أَمْ لَهُمْ شُرَكَاءُ", meaning: { en: "Do they have partners?", ur: "کیا ان کے شریک ہیں؟" }, explanation: { en: "No partners can help them", ur: "کوئی شریک ان کی مدد نہیں کر سکتا" }, verseRef: "68:41" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "يَوْمَ يُكْشَفُ عَن سَاقٍ", meaning: { en: "Day the shin is exposed", ur: "جس دن پنڈلی کھولی جائے گی" }, explanation: { en: "Metaphor for severe difficulty", ur: "شدید مشکل کا استعارہ" }, verseRef: "68:42" },
        { term: "يُدْعَوْنَ إِلَى السُّجُودِ فَلَا يَسْتَطِيعُونَ", meaning: { en: "Called to prostrate but cannot", ur: "سجدے کے لیے بلائے جائیں گے مگر نہ کر سکیں گے" }, explanation: { en: "Unable to bow as they refused in life", ur: "سجدہ نہیں کر سکیں گے کیونکہ دنیا میں انکار کیا" }, verseRef: "68:42" },
        { term: "خَاشِعَةً أَبْصَارُهُمْ", meaning: { en: "Their eyes humbled", ur: "ان کی نگاہیں جھکی ہوئی ہوں گی" }, explanation: { en: "Downcast in shame", ur: "شرم سے نگاہیں نیچی" }, verseRef: "68:43" },
        { term: "تَرْهَقُهُمْ ذِلَّةٌ", meaning: { en: "Humiliation covers them", ur: "ذلت ان پر چھا جائے گی" }, explanation: { en: "Overwhelmed by disgrace", ur: "رسوائی سے مغلوب" }, verseRef: "68:43" }
      ]
    },

    divineStrategy: {
      name: "Divine Strategy",
      nameUr: "الٰہی تدبیر",
      nameArabic: "الاستدراج الإلهي",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "سَنَسْتَدْرِجُهُم", meaning: { en: "We will progressively lead them", ur: "ہم انہیں آہستہ آہستہ پکڑیں گے" }, explanation: { en: "Gradual approach to punishment", ur: "سزا کی طرف بتدریج لے جانا" }, verseRef: "68:44" },
        { term: "مِّنْ حَيْثُ لَا يَعْلَمُونَ", meaning: { en: "From where they don't know", ur: "جہاں سے وہ نہیں جانتے" }, explanation: { en: "Unaware of their downfall", ur: "اپنی تباہی سے بےخبر" }, verseRef: "68:44" },
        { term: "وَأُمْلِي لَهُمْ", meaning: { en: "I give them respite", ur: "میں انہیں مہلت دیتا ہوں" }, explanation: { en: "Time is given before punishment", ur: "عذاب سے پہلے وقت دیا جاتا ہے" }, verseRef: "68:45" },
        { term: "إِنَّ كَيْدِي مَتِينٌ", meaning: { en: "My plan is firm", ur: "بلاشبہ میری تدبیر مضبوط ہے" }, explanation: { en: "Allah's strategy is unbreakable", ur: "اللہ کی تدبیر ناقابلِ شکست ہے" }, verseRef: "68:45" }
      ]
    },

    prophetYunus: {
      name: "Reference to Prophet Yunus",
      nameUr: "حضرت یونس علیہ السلام کا ذکر",
      nameArabic: "ذكر سيدنا يونس",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "صَاحِبِ الْحُوتِ", meaning: { en: "Companion of the fish", ur: "مچھلی والے (حضرت یونس)" }, explanation: { en: "Prophet Yunus (Jonah)", ur: "حضرت یونس علیہ السلام" }, verseRef: "68:48" },
        { term: "إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ", meaning: { en: "When he called while distressed", ur: "جب انہوں نے بے قرار ہو کر پکارا" }, explanation: { en: "Called to Allah from fish's belly", ur: "مچھلی کے پیٹ سے اللہ کو پکارا" }, verseRef: "68:48" },
        { term: "تَدَارَكَهُ نِعْمَةٌ مِّن رَّبِّهِ", meaning: { en: "Favor from Lord overtook him", ur: "ان کے رب کی نعمت نے انہیں سنبھال لیا" }, explanation: { en: "Allah's mercy saved him", ur: "اللہ کی رحمت نے انہیں بچا لیا" }, verseRef: "68:49" },
        { term: "فَاجْتَبَاهُ رَبُّهُ", meaning: { en: "His Lord chose him", ur: "ان کے رب نے انہیں چن لیا" }, explanation: { en: "Became among the righteous", ur: "نیک لوگوں میں شامل ہوئے" }, verseRef: "68:50" }
      ]
    },

    evilEye: {
      name: "The Evil Eye",
      nameUr: "بدنظری (نظرِ بد)",
      nameArabic: "العين الحاسدة",
      color: '#EC4899',
      icon: 'Shield',
      concepts: [
        { term: "لَيُزْلِقُونَكَ بِأَبْصَارِهِمْ", meaning: { en: "They would make you slip with their eyes", ur: "وہ اپنی نظروں سے تمہیں پھسلانا چاہتے ہیں" }, explanation: { en: "Evil eye of envy and hatred", ur: "حسد اور نفرت کی بدنظری" }, verseRef: "68:51" },
        { term: "إِنَّهُ لَمَجْنُونٌ", meaning: { en: "He is surely mad", ur: "یہ تو دیوانہ ہے" }, explanation: { en: "Accusation of madness repeated", ur: "پاگل پن کا الزام دوبارہ دہرایا" }, verseRef: "68:51" },
        { term: "ذِكْرٌ لِّلْعَالَمِينَ", meaning: { en: "Reminder for all worlds", ur: "تمام جہانوں کے لیے نصیحت" }, explanation: { en: "Quran is universal guidance", ur: "قرآن عالمگیر ہدایت ہے" }, verseRef: "68:52" }
      ]
    }
  },

  relationships: [
    { from: "بمجنون", to: "خلق عظيم", type: "contrast", description: { en: "Accusation refuted by praising his character", ur: "الزام کو آپ کے کردار کی تعریف سے رد کیا" } },
    { from: "أصحاب الجنة", to: "أهل مكة", type: "parallel", description: { en: "Garden owners' arrogance mirrors Meccan disbelievers", ur: "باغ والوں کا تکبر مکہ کے کافروں کا عکس ہے" } },
    { from: "ولا يستثنون", to: "سبحان ربنا", type: "progression", description: { en: "From forgetting Allah to glorifying Him", ur: "اللہ کو بھولنے سے اللہ کی تسبیح تک" } },
    { from: "المسلمين كالمجرمين", to: "جنات النعيم", type: "contrast", description: { en: "Different outcomes for different groups", ur: "مختلف گروہوں کے لیے مختلف نتائج" } },
    { from: "صاحب الحوت", to: "فاصبر لحكم ربك", type: "lesson", description: { en: "Yunus' impatience - lesson for Prophet Muhammad", ur: "یونس کی بے صبری - نبی محمد ﷺ کے لیے سبق" } },
    { from: "لمجنون (v.2)", to: "لمجنون (v.51)", type: "bookend", description: { en: "Same accusation at start and end, both refuted", ur: "شروع اور آخر میں ایک ہی الزام، دونوں رد" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Oath & Defense", verses: "68:1-7", description: { en: "Oath by pen, Prophet not mad, exalted character", ur: "قلم کی قسم، نبی دیوانے نہیں، عظیم اخلاق" } },
      { stage: 2, theme: "Evil Character Traits", verses: "68:8-16", description: { en: "Nine negative traits to avoid", ur: "نو بری صفات جن سے بچنا ہے" } },
      { stage: 3, theme: "Garden Owners Story", verses: "68:17-33", description: { en: "Parable of those who excluded the poor", ur: "ان لوگوں کی مثال جنہوں نے غریبوں کو محروم رکھا" } },
      { stage: 4, theme: "Muslim vs Criminal", verses: "68:34-41", description: { en: "Rhetorical questions challenging false logic", ur: "غلط منطق کو چیلنج کرنے والے بلاغتی سوالات" } },
      { stage: 5, theme: "Day of Judgment", verses: "68:42-47", description: { en: "Unable to prostrate, divine strategy", ur: "سجدہ کرنے سے عاجز، الہی تدبیر" } },
      { stage: 6, theme: "Patience & Conclusion", verses: "68:48-52", description: { en: "Yunus reference, evil eye, universal message", ur: "یونس کا حوالہ، بدنظری، عالمگیر پیغام" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Value of knowledge", how: "The pen is honored - seek and spread knowledge", verse: "68:1" },
      { principle: "Noble character", how: "Develop beautiful manners like Prophet Muhammad", verse: "68:4" },
      { principle: "Avoid evil speech", how: "Don't swear excessively, don't gossip, don't slander", verse: "68:10-11" },
      { principle: "Share wealth with poor", how: "Don't hoard wealth or exclude the needy", verse: "68:17-25" },
      { principle: "Say 'In sha Allah'", how: "Always acknowledge Allah's will in plans", verse: "68:18" },
      { principle: "Repent quickly", how: "Like garden owners - admit wrong, seek forgiveness", verse: "68:29" },
      { principle: "Patience in adversity", how: "Don't abandon mission like Yunus initially did", verse: "68:48" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Nine Evil Traits Portrait", ur: "نو بری صفات کی تصویر" },
    insight: { en: "Verses 10-13 paint a comprehensive portrait of a despicable person using nine characteristics: (1) حَلَّاف - excessive swearer, (2) مَهِين - despicable, (3) هَمَّاز - slanderer, (4) مَشَّاء بِنَمِيم - spreader of gossip, (5) مَنَّاع لِلْخَيْر - blocker of good, (6) مُعْتَد - transgressor, (7) أَثِيم - sinful, (8) عُتُل - harsh/cruel, (9) زَنِيم - ignoble outcast. These are contrasted with Prophet Muhammad's 'خُلُق عَظِيم' (exalted character) in verse 4. The surah teaches that wealth and children (verse 14) mean nothing if accompanied by these traits. The structure is deliberate: one positive trait vs. nine negative traits emphasizes that one good character outweighs many bad ones - quality over quantity in morality.", ur: "آیات 10-13 نو خصوصیات کے ذریعے ایک ذلیل شخص کی جامع تصویر کشی کرتی ہیں: (1) حَلَّاف - بہت قسم کھانے والا، (2) مَهِين - حقیر، (3) هَمَّاز - عیب جو، (4) مَشَّاء بِنَمِيم - چغل خور، (5) مَنَّاع لِلْخَيْر - بھلائی سے روکنے والا، (6) مُعْتَد - حد سے گزرنے والا، (7) أَثِيم - گنہگار، (8) عُتُل - سخت دل، (9) زَنِيم - بدنسب۔ ان کا تقابل نبی ﷺ کے 'خُلُق عَظِيم' (عظیم اخلاق) سے ہے آیت 4 میں۔ سورت سکھاتی ہے کہ مال اور اولاد (آیت 14) بے معنی ہیں اگر یہ صفات ساتھ ہوں۔ ایک مثبت صفت بمقابلہ نو منفی - اخلاق میں معیار مقدار سے اہم ہے۔" }
  },

  historicalContext: {
    note: { en: "This surah was revealed early in Mecca when disbelievers called the Prophet 'majnūn' (possessed/mad) for claiming prophethood. The 'companion of the fish' reference to Prophet Yunus (Jonah) reminds Prophet Muhammad to be patient unlike Yunus who left his people in frustration. The 'garden owners' story is believed to refer to a garden in Yemen whose owners plotted to harvest before dawn to avoid giving to the poor, but Allah destroyed it overnight. The phrase 'yukshafu ʿan sāq' (shin exposed) is an Arabic idiom for severe difficulty, not literal.", ur: "یہ سورت مکہ میں ابتدائی دور میں نازل ہوئی جب کافروں نے نبوت کے دعوے پر نبی ﷺ کو 'مجنون' (پاگل) کہا۔ 'صاحب الحوت' حضرت یونس کا حوالہ نبی ﷺ کو صبر کی تلقین ہے۔ 'باغ والوں' کی کہانی یمن کے ایک باغ سے متعلق ہے جس کے مالکوں نے غریبوں کو محروم رکھنے کے لیے فجر سے پہلے فصل کاٹنے کی سازش کی، لیکن اللہ نے رات ہی میں اسے تباہ کر دیا۔ 'یُکشَف عن ساق' شدید مشکل کا عربی محاورہ ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "حَلَّاف", example: { en: "Excessive swearer", ur: "بہت زیادہ قسم کھانے والا" }, effect: "faʿʿāl pattern - intensive" },
      { feature: "هَمَّاز", example: { en: "Habitual slanderer", ur: "عادتاً عیب جو" }, effect: "faʿʿāl pattern - intensive" },
      { feature: "مَشَّاء", example: { en: "Habitual walker (with gossip)", ur: "عادتاً چغلی لے کر پھرنے والا" }, effect: "faʿʿāl pattern - intensive" },
      { feature: "مَنَّاع", example: { en: "Constant preventer", ur: "ہمیشہ روکنے والا" }, effect: "faʿʿāl pattern - intensive" },
      { feature: "سَنَسْتَدْرِجُهُم", example: { en: "We will gradually lead them", ur: "ہم انہیں آہستہ آہستہ پکڑیں گے" }, effect: "Form X - seeking to lead gradually" },
      { feature: "خُلُق", example: { en: "Character/manners", ur: "اخلاق/کردار" }, effect: "Distinguished from خَلْق (creation)" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "68:1", topic: "The Pen", note: "Writing as foundation of civilization and knowledge preservation" },
      { verse: "68:51", topic: "Evil eye", note: "Psychosomatic effects of intense negative attention - envy's harm" }
    ]
  }
};

export default ONTOLOGY;
