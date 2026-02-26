/**
 * Surah Al-Jinn (72) - Ontology of Quranic Concepts
 * The Jinn
 * Theme: Jinn hearing Quran, monotheism, unseen knowledge, prophethood
 */

export const ONTOLOGY = {
  surahId: 72,
  surahName: "Al-Jinn",
  surahNameArabic: "الجن",
  revelationType: "Makki",
  totalAyahs: 28,

  categories: {
    jinnHearingQuran: {
      name: "Jinn Hearing the Quran",
      nameUr: "جنوں کا قرآن سننا",
      nameArabic: "استماع الجن للقرآن",
      color: '#8B5CF6',
      icon: 'Book',
      concepts: [
        { term: "اسْتَمَعَ نَفَرٌ مِّنَ الْجِنِّ", meaning: { en: "A group of jinn listened", ur: "جنوں کی ایک جماعت نے سنا" }, explanation: { en: "Jinn encountered Quran recitation", ur: "جنوں کو قرآن کی تلاوت سننے کا موقع ملا" }, verseRef: "72:1" },
        { term: "قُرْآنًا عَجَبًا", meaning: { en: "An amazing Quran", ur: "ایک حیرت انگیز قرآن" }, explanation: { en: "Jinn amazed by Quran's beauty", ur: "جن قرآن کی خوبصورتی پر حیران" }, verseRef: "72:1" },
        { term: "يَهْدِي إِلَى الرُّشْدِ", meaning: { en: "Guides to right way", ur: "سیدھے راستے کی ہدایت دیتا ہے" }, explanation: { en: "Quran's guidance recognized", ur: "قرآن کی ہدایت کو تسلیم کیا" }, verseRef: "72:2" },
        { term: "فَآمَنَّا بِهِ", meaning: { en: "So we believed in it", ur: "پس ہم اس پر ایمان لے آئے" }, explanation: { en: "Jinn accepted Islam", ur: "جنوں نے اسلام قبول کیا" }, verseRef: "72:2" }
      ]
    },

    tawheedOfJinn: {
      name: "Jinn's Monotheism",
      nameUr: "جنوں کی توحید",
      nameArabic: "توحيد الجن",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "لَن نُّشْرِكَ بِرَبِّنَا أَحَدًا", meaning: { en: "Never associate anyone with our Lord", ur: "ہم اپنے رب کے ساتھ کسی کو شریک نہیں کریں گے" }, explanation: { en: "Jinn reject shirk", ur: "جنوں نے شرک سے انکار کیا" }, verseRef: "72:2" },
        { term: "تَعَالَىٰ جَدُّ رَبِّنَا", meaning: { en: "Exalted is majesty of our Lord", ur: "بلند ہے ہمارے رب کی شان" }, explanation: { en: "Acknowledging Allah's greatness", ur: "اللہ کی عظمت کا اعتراف" }, verseRef: "72:3" },
        { term: "مَا اتَّخَذَ صَاحِبَةً وَلَا وَلَدًا", meaning: { en: "He took no wife nor child", ur: "اس نے نہ بیوی بنائی نہ اولاد" }, explanation: { en: "Rejecting Christian/pagan beliefs", ur: "عیسائی/مشرکانہ عقائد کی تردید" }, verseRef: "72:3" }
      ]
    },

    jinnFoolishOnes: {
      name: "The Foolish Among Jinn",
      nameUr: "جنوں میں بے وقوف",
      nameArabic: "سفهاء الجن",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "سَفِيهُنَا", meaning: { en: "Our foolish one", ur: "ہمارا بے وقوف (ابلیس)" }, explanation: { en: "Iblis and rebellious jinn", ur: "ابلیس اور باغی جن" }, verseRef: "72:4" },
        { term: "شَطَطًا", meaning: { en: "Excessive lies about Allah", ur: "اللہ پر حد سے بڑھ کر جھوٹ" }, explanation: { en: "Claims of partners/children", ur: "شریکوں/اولاد کے جھوٹے دعوے" }, verseRef: "72:4" },
        { term: "ظَنَنَّا أَن لَّن تَقُولَ الْإِنسُ وَالْجِنُّ عَلَى اللَّهِ كَذِبًا", meaning: { en: "Thought none would lie about Allah", ur: "ہم سمجھتے تھے کوئی اللہ پر جھوٹ نہیں بولے گا" }, explanation: { en: "Jinn were naive about falsehood", ur: "جن جھوٹ کے بارے میں بھولے بھالے تھے" }, verseRef: "72:5" }
      ]
    },

    humanJinnInteraction: {
      name: "Human-Jinn Relations",
      nameUr: "انسان اور جن کے تعلقات",
      nameArabic: "علاقة الإنس والجن",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "يَعُوذُونَ بِرِجَالٍ مِّنَ الْجِنِّ", meaning: { en: "Sought refuge with jinn men", ur: "جنوں کے مردوں کی پناہ لیتے تھے" }, explanation: { en: "Pre-Islamic practice of seeking jinn protection", ur: "جاہلیت میں جنوں سے پناہ مانگنے کا رواج" }, verseRef: "72:6" },
        { term: "فَزَادُوهُمْ رَهَقًا", meaning: { en: "They increased them in burden", ur: "تو جنوں نے ان کا بوجھ اور بڑھا دیا" }, explanation: { en: "Jinn exploitation made humans worse", ur: "جنوں کے استحصال نے انسانوں کو مزید خراب کیا" }, verseRef: "72:6" },
        { term: "ظَنُّوا... أَن لَّن يَبْعَثَ اللَّهُ أَحَدًا", meaning: { en: "Thought Allah wouldn't send anyone", ur: "سمجھتے تھے اللہ کسی کو نہیں بھیجے گا" }, explanation: { en: "Both denied resurrection/prophecy", ur: "دونوں نے قیامت/نبوت سے انکار کیا" }, verseRef: "72:7" }
      ]
    },

    heavensGuarded: {
      name: "Heavens Now Guarded",
      nameUr: "آسمان کی حفاظت",
      nameArabic: "حراسة السماء",
      color: '#06B6D4',
      icon: 'Shield',
      concepts: [
        { term: "لَمَسْنَا السَّمَاءَ", meaning: { en: "We sought the heaven", ur: "ہم نے آسمان کو ٹٹولا" }, explanation: { en: "Jinn used to eavesdrop", ur: "جن چوری سے سنتے تھے" }, verseRef: "72:8" },
        { term: "مُلِئَتْ حَرَسًا شَدِيدًا وَشُهُبًا", meaning: { en: "Filled with severe guards and flames", ur: "سخت پہرے داروں اور شہابوں سے بھرا ہوا" }, explanation: { en: "After Prophet ﷺ, heavens guarded", ur: "نبی ﷺ کے بعد آسمان محفوظ ہو گئے" }, verseRef: "72:8" },
        { term: "مَقَاعِدَ لِلسَّمْعِ", meaning: { en: "Seats for listening", ur: "سننے کی جگہیں" }, explanation: { en: "Jinn formerly had listening posts", ur: "جنوں کے سننے کے ٹھکانے تھے" }, verseRef: "72:9" },
        { term: "شِهَابًا رَّصَدًا", meaning: { en: "Burning flame lying in wait", ur: "گھات میں لگا ہوا شعلہ" }, explanation: { en: "Shooting stars chase eavesdroppers", ur: "شہاب ثاقب چوری سے سننے والوں کا پیچھا کرتے ہیں" }, verseRef: "72:9" }
      ]
    },

    jinnDiversity: {
      name: "Diversity Among Jinn",
      nameUr: "جنوں میں تنوع",
      nameArabic: "تنوع الجن",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "مِنَّا الصَّالِحُونَ", meaning: { en: "Among us are righteous", ur: "ہم میں سے کچھ نیک ہیں" }, explanation: { en: "Good jinn exist", ur: "نیک جن بھی ہیں" }, verseRef: "72:11" },
        { term: "دُونَ ذَٰلِكَ", meaning: { en: "Others below that", ur: "کچھ اس سے کم درجے کے" }, explanation: { en: "And sinful jinn exist", ur: "اور گنہگار جن بھی ہیں" }, verseRef: "72:11" },
        { term: "طَرَائِقَ قِدَدًا", meaning: { en: "Different paths/sects", ur: "مختلف راستے/فرقے" }, explanation: { en: "Jinn have varied beliefs like humans", ur: "جنوں کے عقائد بھی انسانوں کی طرح مختلف ہیں" }, verseRef: "72:11" },
        { term: "الْمُسْلِمُونَ", meaning: { en: "Muslims (among jinn)", ur: "مسلمان (جنوں میں)" }, explanation: { en: "Some jinn are Muslim", ur: "کچھ جن مسلمان ہیں" }, verseRef: "72:14" },
        { term: "الْقَاسِطُونَ", meaning: { en: "The unjust", ur: "ظالم (جنوں میں)" }, explanation: { en: "Some jinn are unjust", ur: "کچھ جن ظالم ہیں" }, verseRef: "72:14-15" }
      ]
    },

    jinnSubmission: {
      name: "Jinn's Submission",
      nameUr: "جنوں کی فرمانبرداری",
      nameArabic: "استسلام الجن",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "لَّن نُّعْجِزَ اللَّهَ فِي الْأَرْضِ", meaning: { en: "We cannot escape Allah on earth", ur: "ہم زمین میں اللہ کو عاجز نہیں کر سکتے" }, explanation: { en: "Jinn acknowledge Allah's power", ur: "جنوں نے اللہ کی قدرت تسلیم کی" }, verseRef: "72:12" },
        { term: "وَلَن نُّعْجِزَهُ هَرَبًا", meaning: { en: "Nor escape Him by fleeing", ur: "اور نہ بھاگ کر اس سے بچ سکتے ہیں" }, explanation: { en: "No escape from Allah", ur: "اللہ سے کوئی فرار نہیں" }, verseRef: "72:12" },
        { term: "لَمَّا سَمِعْنَا الْهُدَىٰ آمَنَّا بِهِ", meaning: { en: "When we heard guidance, we believed", ur: "جب ہم نے ہدایت سنی تو ایمان لے آئے" }, explanation: { en: "Immediate acceptance", ur: "فوری قبولیت" }, verseRef: "72:13" }
      ]
    },

    mosquesForAllah: {
      name: "Mosques for Allah Alone",
      nameUr: "مسجدیں صرف اللہ کے لیے",
      nameArabic: "المساجد لله",
      color: '#F59E0B',
      icon: 'Globe',
      concepts: [
        { term: "الْمَسَاجِدَ لِلَّهِ", meaning: { en: "Mosques are for Allah", ur: "مسجدیں اللہ کے لیے ہیں" }, explanation: { en: "Places of worship dedicated to Allah alone", ur: "عبادت گاہیں صرف اللہ کے لیے مخصوص" }, verseRef: "72:18" },
        { term: "فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا", meaning: { en: "Don't invoke anyone with Allah", ur: "اللہ کے ساتھ کسی اور کو نہ پکارو" }, explanation: { en: "Pure monotheism in worship", ur: "عبادت میں خالص توحید" }, verseRef: "72:18" }
      ]
    },

    prophetsCrowded: {
      name: "Crowds Around Prophet",
      nameUr: "نبی ﷺ کے گرد بھیڑ",
      nameArabic: "ازدحام حول النبي",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "لَمَّا قَامَ عَبْدُ اللَّهِ يَدْعُوهُ", meaning: { en: "When servant of Allah stood invoking Him", ur: "جب اللہ کے بندے نے کھڑے ہو کر اسے پکارا" }, explanation: { en: "Prophet ﷺ praying", ur: "نبی ﷺ نماز پڑھ رہے تھے" }, verseRef: "72:19" },
        { term: "كَادُوا يَكُونُونَ عَلَيْهِ لِبَدًا", meaning: { en: "They almost crowded upon him", ur: "قریب تھا کہ اس پر بھیڑ لگ جائے" }, explanation: { en: "Jinn flocked to hear him", ur: "جن سننے کے لیے ٹوٹ پڑے" }, verseRef: "72:19" }
      ]
    },

    prophetsLimitations: {
      name: "Prophet's Limitations",
      nameUr: "نبی ﷺ کی حدود",
      nameArabic: "حدود النبي",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "إِنَّمَا أَدْعُو رَبِّي", meaning: { en: "I only invoke my Lord", ur: "میں صرف اپنے رب کو پکارتا ہوں" }, explanation: { en: "Prophet is just a worshipper", ur: "نبی صرف ایک عبادت گزار ہیں" }, verseRef: "72:20" },
        { term: "لَا أَمْلِكُ لَكُمْ ضَرًّا وَلَا رَشَدًا", meaning: { en: "I don't possess harm or guidance for you", ur: "میں تمہارے نفع و نقصان کا مالک نہیں" }, explanation: { en: "Prophet has no divine powers", ur: "نبی کے پاس الہی طاقتیں نہیں" }, verseRef: "72:21" },
        { term: "لَن يُجِيرَنِي مِنَ اللَّهِ أَحَدٌ", meaning: { en: "None can protect me from Allah", ur: "اللہ سے مجھے کوئی بچانے والا نہیں" }, explanation: { en: "Prophet is a servant", ur: "نبی اللہ کے بندے ہیں" }, verseRef: "72:22" },
        { term: "إِلَّا بَلَاغًا مِّنَ اللَّهِ", meaning: { en: "Except notification from Allah", ur: "سوائے اللہ کا پیغام پہنچانے کے" }, explanation: { en: "Prophet's role is conveying message", ur: "نبی کا کردار پیغام پہنچانا ہے" }, verseRef: "72:23" }
      ]
    },

    unseenKnowledge: {
      name: "Knowledge of Unseen",
      nameUr: "علمِ غیب",
      nameArabic: "علم الغيب",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "عَالِمُ الْغَيْبِ", meaning: { en: "Knower of the unseen", ur: "غیب کا جاننے والا" }, explanation: { en: "Only Allah knows the ghayb", ur: "صرف اللہ غیب جانتا ہے" }, verseRef: "72:26" },
        { term: "فَلَا يُظْهِرُ عَلَىٰ غَيْبِهِ أَحَدًا", meaning: { en: "He reveals His unseen to none", ur: "وہ اپنے غیب پر کسی کو مطلع نہیں کرتا" }, explanation: { en: "Ghayb is Allah's exclusive domain", ur: "غیب اللہ کا خصوصی دائرہ ہے" }, verseRef: "72:26" },
        { term: "إِلَّا مَنِ ارْتَضَىٰ مِن رَّسُولٍ", meaning: { en: "Except a messenger He approves", ur: "سوائے جس رسول کو وہ پسند کرے" }, explanation: { en: "Prophets receive limited revelation", ur: "انبیاء کو محدود وحی ملتی ہے" }, verseRef: "72:27" },
        { term: "رَصَدًا", meaning: { en: "Observers (angels)", ur: "نگہبان (فرشتے)" }, explanation: { en: "Angels guard prophets receiving revelation", ur: "فرشتے وحی وصول کرنے والے انبیاء کی حفاظت کرتے ہیں" }, verseRef: "72:27" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameUr: "اللہ کا مکمل علم",
      nameArabic: "إحاطة علم الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "أَبْلَغُوا رِسَالَاتِ رَبِّهِمْ", meaning: { en: "They conveyed messages of their Lord", ur: "انہوں نے اپنے رب کے پیغامات پہنچائے" }, explanation: { en: "Prophets fulfill mission", ur: "انبیاء نے مشن پورا کیا" }, verseRef: "72:28" },
        { term: "وَأَحَاطَ بِمَا لَدَيْهِمْ", meaning: { en: "He encompasses what is with them", ur: "اس نے ان کے پاس جو کچھ ہے احاطہ کیا ہوا ہے" }, explanation: { en: "Allah's knowledge surrounds all", ur: "اللہ کا علم ہر چیز کو گھیرے ہوئے ہے" }, verseRef: "72:28" },
        { term: "وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا", meaning: { en: "Has counted everything in number", ur: "ہر چیز کو گن کر رکھا ہوا ہے" }, explanation: { en: "Nothing escapes Allah's count", ur: "کوئی چیز اللہ کے شمار سے نہیں بچتی" }, verseRef: "72:28" }
      ]
    }
  },

  relationships: [
    { from: "قرآناً عجباً", to: "فآمنا به", type: "causation", description: { en: "Amazing Quran → belief", ur: "حیرت انگیز قرآن → ایمان" } },
    { from: "يعوذون برجال من الجن", to: "فزادوهم رهقاً", type: "consequence", description: { en: "Seeking jinn protection → increased burden", ur: "جنوں سے پناہ → بوجھ میں اضافہ" } },
    { from: "مقاعد للسمع", to: "شهاباً رصداً", type: "change", description: { en: "Old listening posts → now guarded by flames", ur: "پرانے ٹھکانے → اب شعلوں سے محفوظ" } },
    { from: "منا الصالحون", to: "القاسطون", type: "contrast", description: { en: "Righteous jinn vs. unjust jinn", ur: "نیک جن بمقابلہ ظالم جن" } },
    { from: "عالم الغيب", to: "إلا من ارتضى من رسول", type: "exception", description: { en: "Only Allah knows ghayb, except what revealed to prophets", ur: "صرف اللہ غیب جانتا ہے، سوائے جو انبیاء پر ظاہر کیا" } },
    { from: "المساجد لله", to: "فلا تدعوا مع الله أحداً", type: "implication", description: { en: "Mosques for Allah → pure monotheism in worship", ur: "مسجدیں اللہ کے لیے → عبادت میں خالص توحید" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Jinn Encounter Quran", verses: "72:1-2", description: { en: "Group of jinn hear and believe in Quran", ur: "جنوں کی جماعت نے قرآن سنا اور ایمان لائے" } },
      { stage: 2, theme: "Jinn's Tawheed", verses: "72:3-7", description: { en: "Jinn affirm monotheism, reject past errors", ur: "جنوں نے توحید کا اقرار کیا، ماضی کی غلطیوں کو رد کیا" } },
      { stage: 3, theme: "Heavens Guarded", verses: "72:8-10", description: { en: "Eavesdropping stopped, heavens now protected", ur: "چوری سے سننا بند ہوا، آسمان اب محفوظ" } },
      { stage: 4, theme: "Jinn Diversity", verses: "72:11-15", description: { en: "Righteous and unjust among jinn", ur: "جنوں میں نیک اور ظالم" } },
      { stage: 5, theme: "Divine Blessing/Test", verses: "72:16-17", description: { en: "Steadfastness brings provision; turning away brings punishment", ur: "ثابت قدمی سے رزق؛ منہ موڑنے سے عذاب" } },
      { stage: 6, theme: "Pure Worship", verses: "72:18-19", description: { en: "Mosques for Allah; crowds around Prophet", ur: "مسجدیں اللہ کے لیے؛ نبی کے گرد بھیڑ" } },
      { stage: 7, theme: "Prophet's Role", verses: "72:20-25", description: { en: "Prophet is servant, conveyor; no power of his own", ur: "نبی بندے ہیں، پیغام رساں؛ اپنی کوئی طاقت نہیں" } },
      { stage: 8, theme: "Divine Knowledge", verses: "72:26-28", description: { en: "Only Allah knows ghayb; prophets protected to convey", ur: "صرف اللہ غیب جانتا ہے؛ انبیاء پیغام پہنچانے کے لیے محفوظ" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Quran impresses even jinn", how: "Its beauty transcends species - recite with confidence", verse: "72:1" },
      { principle: "Reject seeking jinn help", how: "Don't use amulets, fortune-tellers, or jinn contact", verse: "72:6" },
      { principle: "Jinn have free will like us", how: "They face same choices - good/evil, belief/disbelief", verse: "72:11" },
      { principle: "Mosques for Allah alone", how: "No saint-worship, grave-worship in mosques", verse: "72:18" },
      { principle: "Prophet had limitations", how: "Don't attribute divine powers to any human", verse: "72:21" },
      { principle: "Ghayb belongs to Allah", how: "Don't seek fortune-telling; only Allah knows future", verse: "72:26" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Jinn's Naivety", ur: "جنوں کی سادہ لوحی" },
    insight: { en: "Verse 5 reveals something remarkable: 'وَأَنَّا ظَنَنَّا أَن لَّن تَقُولَ الْإِنسُ وَالْجِنُّ عَلَى اللَّهِ كَذِبًا' - the jinn assumed that no one (human or jinn) would lie about Allah. They were shocked to discover that the 'foolish among them' (Iblis and followers) had been making false claims about Allah having a wife or son. This shows that deception about God wasn't instinctive to jinn - they had to learn it could happen. It also shows that even supernatural beings can be deceived and led astray. The jinn's journey from assumption to realization to faith mirrors the human experience of growing in discernment.", ur: "آیت 5 ایک حیرت انگیز بات ظاہر کرتی ہے: جن سمجھتے تھے کہ کوئی (انسان ہو یا جن) اللہ پر جھوٹ نہیں بولے گا۔ وہ حیران ہوئے جب معلوم ہوا کہ 'ان کے بے وقوفوں' (ابلیس اور اس کے پیروکاروں) نے اللہ کی بیوی یا اولاد کے جھوٹے دعوے کیے۔ یہ ظاہر کرتا ہے کہ خدا کے بارے میں دھوکہ جنوں کی فطرت نہیں تھی - انہیں سیکھنا پڑا کہ ایسا ہو سکتا ہے۔ یہ بھی دکھاتا ہے کہ مافوق الفطرت مخلوقات بھی دھوکے میں آ سکتی ہیں۔ جنوں کا اندازے سے ادراک اور پھر ایمان تک کا سفر انسانی تجربے سے ملتا جلتا ہے۔" }
  },

  historicalContext: {
    note: { en: "Revealed after the Prophet's trip to Ta'if when he was rejected and attacked. On his return, a group of jinn from Nusaybin (or Yemen) heard his recitation at Nakhlah valley. They returned to their people as warners. This incident is also referenced in 46:29-32. The surah establishes that Islam is for both worlds - ins (humans) and jinn.", ur: "نبی ﷺ کے سفرِ طائف کے بعد نازل ہوئی جب آپ کو رد کیا اور مارا گیا۔ واپسی پر نصیبین (یا یمن) کے جنوں کی جماعت نے نخلہ کی وادی میں آپ کی تلاوت سنی۔ وہ اپنی قوم کے پاس ڈرانے والے بن کر لوٹے۔ یہ واقعہ سورۃ الاحقاف (46:29-32) میں بھی مذکور ہے۔ سورت ثابت کرتی ہے کہ اسلام دونوں جہانوں کے لیے ہے - انس اور جن۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "نَفَر", example: { en: "Group (3-10 individuals)", ur: "چھوٹی جماعت (3-10 افراد)" }, effect: "Specific number range term" },
      { feature: "جَدّ", example: { en: "Majesty/greatness", ur: "شان/عظمت" }, effect: "Unusual term for Allah's attribute" },
      { feature: "شَطَط", example: { en: "Excessive/outrageous", ur: "حد سے بڑھا ہوا" }, effect: "Beyond normal limits" },
      { feature: "رَهَق", example: { en: "Burden/oppression", ur: "بوجھ/ظلم" }, effect: "Being overwhelmed" },
      { feature: "لِبَد", example: { en: "Crowds pressing", ur: "بھیڑ لگانا" }, effect: "Vivid image of dense gathering" },
      { feature: "مُلْتَحَد", example: { en: "Place of refuge", ur: "پناہ کی جگہ" }, effect: "Form VIII - place of turning/leaning" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "72:8-9", topic: "Shooting stars", note: "شُهُب (meteors/shooting stars) described as guarding heavens - visible phenomena given spiritual significance" }
    ]
  }
};

export default ONTOLOGY;
