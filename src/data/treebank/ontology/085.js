/**
 * Surah Al-Buruj (85) - Ontology of Quranic Concepts
 * The Great Stars / The Constellations
 * Theme: Persecution of believers, People of the Trench, Allah's might
 */

export const ONTOLOGY = {
  surahId: 85,
  surahName: "Al-Buruj",
  surahNameArabic: "البروج",
  revelationType: "Makki",
  totalAyahs: 22,

  categories: {
    cosmicOaths: {
      name: "The Celestial Oath",
      nameUr: "آسمانی قسم",
      nameArabic: "القسم السماوي",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "السَّمَاءِ ذَاتِ الْبُرُوجِ", meaning: { en: "Sky with constellations", ur: "برجوں والے آسمان کی قسم" }, explanation: { en: "Stars as 'towers' or 'mansions' - celestial magnificence", ur: "ستارے بطور 'برج' - آسمانی شان و شوکت" }, verseRef: "85:1" },
        { term: "الْيَوْمِ الْمَوْعُودِ", meaning: { en: "The Promised Day", ur: "وعدے کے دن کی (قیامت)" }, explanation: { en: "Day of Judgment - the promise that will be fulfilled", ur: "قیامت - وہ وعدہ جو پورا ہوگا" }, verseRef: "85:2" },
        { term: "شَاهِدٍ وَمَشْهُودٍ", meaning: { en: "Witness and witnessed", ur: "گواہی دینے والے اور گواہی دیے جانے والے کی" }, explanation: { en: "Friday, Day of Arafah, or the witnessing on Judgment Day", ur: "جمعہ، یومِ عرفہ، یا قیامت کی گواہی" }, verseRef: "85:3" }
      ]
    },

    peopleOfTrench: {
      name: "People of the Trench",
      nameUr: "اصحابِ اخدود (خندق والے)",
      nameArabic: "أصحاب الأخدود",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "قُتِلَ أَصْحَابُ الْأُخْدُودِ", meaning: { en: "Destroyed were trench makers", ur: "مارے گئے خندق والے (ظالم)" }, explanation: { en: "Tyrants who burned believers alive - cursed by Allah", ur: "ظالم جنہوں نے مومنوں کو زندہ جلایا - Allah کی لعنت" }, verseRef: "85:4" },
        { term: "النَّارِ ذَاتِ الْوَقُودِ", meaning: { en: "Fire full of fuel", ur: "خوب ایندھن والی آگ" }, explanation: { en: "Massive fire pit prepared for persecution", ur: "ظلم کے لیے تیار کیا گیا بڑا آگ کا گڑھا" }, verseRef: "85:5" },
        { term: "هُمْ عَلَيْهَا قُعُودٌ", meaning: { en: "They sat by it", ur: "وہ اس کے کنارے بیٹھے تھے" }, explanation: { en: "Tyrants watching their crime - cold-blooded cruelty", ur: "ظالم اپنا جرم دیکھ رہے تھے - سنگ دلی سے" }, verseRef: "85:6" },
        { term: "مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ", meaning: { en: "What they did to believers", ur: "جو وہ مومنوں کے ساتھ کر رہے تھے" }, explanation: { en: "Their crime against believing men and women", ur: "مومن مردوں اور عورتوں کے خلاف ان کا جرم" }, verseRef: "85:7" }
      ]
    },

    believersCrime: {
      name: "The 'Crime' of Belief",
      nameUr: "ایمان کا 'جرم'",
      nameArabic: "جريمة الإيمان",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "مَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا", meaning: { en: "Resented only for believing", ur: "ان سے بس اسی بات پر ناراض تھے کہ وہ ایمان لے آئے" }, explanation: { en: "Only 'crime' was iman - ultimate injustice", ur: "واحد 'جرم' ایمان تھا - سب سے بڑا ظلم" }, verseRef: "85:8" },
        { term: "بِاللَّهِ الْعَزِيزِ الْحَمِيدِ", meaning: { en: "In Allah Mighty, Praiseworthy", ur: "Allah پر جو غالب اور قابلِ تعریف ہے" }, explanation: { en: "The One worthy of belief - tyrants opposed truth", ur: "وہ ذات جو ایمان کی مستحق ہے - ظالموں نے حق کی مخالفت کی" }, verseRef: "85:8" }
      ]
    },

    divineJustice: {
      name: "Divine Retribution",
      nameUr: "الٰہی انتقام",
      nameArabic: "العدل الإلهي",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "فَتَنُوا... ثُمَّ لَمْ يَتُوبُوا", meaning: { en: "Persecuted then didn't repent", ur: "ستایا پھر توبہ بھی نہ کی" }, explanation: { en: "Door of tawbah was open even for them - they refused", ur: "توبہ کا دروازہ ان کے لیے بھی کھلا تھا - انہوں نے انکار کیا" }, verseRef: "85:10" },
        { term: "عَذَابُ جَهَنَّمَ... الْحَرِيقِ", meaning: { en: "Hell's punishment of burning", ur: "جہنم کا عذاب اور جلانے کی سزا" }, explanation: { en: "They burned believers; they will burn - poetic justice", ur: "انہوں نے مومنوں کو جلایا؛ خود جلیں گے - انصاف" }, verseRef: "85:10" },
        { term: "جَنَّاتٌ تَجْرِي... الْفَوْزُ الْكَبِيرُ", meaning: { en: "Gardens with rivers - great success", ur: "نہروں والے باغات - بڑی کامیابی" }, explanation: { en: "Believers' ultimate reward despite worldly suffering", ur: "دنیاوی تکلیف کے باوجود مومنوں کا حتمی انعام" }, verseRef: "85:11" }
      ]
    },

    divineAttributes: {
      name: "Allah's Attributes",
      nameUr: "اللہ کی صفات",
      nameArabic: "صفات الله",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "بَطْشَ رَبِّكَ لَشَدِيدٌ", meaning: { en: "Lord's grip is severe", ur: "تمہارے رب کی پکڑ بہت سخت ہے" }, explanation: { en: "Allah's seizing of tyrants - sudden, powerful", ur: "Allah کا ظالموں کو پکڑنا - اچانک، طاقتور" }, verseRef: "85:12" },
        { term: "يُبْدِئُ وَيُعِيدُ", meaning: { en: "Originates and repeats", ur: "وہ پہلی بار پیدا کرتا ہے اور دوبارہ پیدا کرے گا" }, explanation: { en: "Creates initially and resurrects - complete power", ur: "ابتدائی تخلیق اور دوبارہ پیدائش - مکمل قدرت" }, verseRef: "85:13" },
        { term: "الْغَفُورُ الْوَدُودُ", meaning: { en: "Forgiving, Loving", ur: "بخشنے والا، محبت کرنے والا" }, explanation: { en: "Even after batsh, door of forgiveness remains open", ur: "سخت پکڑ کے بعد بھی مغفرت کا دروازہ کھلا ہے" }, verseRef: "85:14" },
        { term: "ذُو الْعَرْشِ الْمَجِيدُ", meaning: { en: "Owner of Glorious Throne", ur: "عرشِ عظیم کا مالک" }, explanation: { en: "Ultimate sovereignty and honor", ur: "حتمی حاکمیت اور عزت" }, verseRef: "85:15" },
        { term: "فَعَّالٌ لِّمَا يُرِيدُ", meaning: { en: "Doer of whatever He wills", ur: "جو چاہے کرنے والا" }, explanation: { en: "Continuous, unrestricted divine action", ur: "مسلسل، بلا روک ٹوک الہٰی عمل" }, verseRef: "85:16" }
      ]
    },

    historicalWarning: {
      name: "Historical Examples",
      nameUr: "تاریخی عبرتیں",
      nameArabic: "العبرة التاريخية",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حَدِيثُ الْجُنُودِ", meaning: { en: "Story of the forces", ur: "لشکروں کی کہانی" }, explanation: { en: "Mighty armies of the past - where are they now?", ur: "ماضی کے طاقتور لشکر - اب کہاں ہیں؟" }, verseRef: "85:17" },
        { term: "فِرْعَوْنَ وَثَمُودَ", meaning: { en: "Pharaoh and Thamud", ur: "فرعون اور ثمود" }, explanation: { en: "Two great powers destroyed - warning to Quraysh", ur: "دو بڑی طاقتیں تباہ ہوئیں - قریش کے لیے تنبیہ" }, verseRef: "85:18" }
      ]
    },

    quranPreservation: {
      name: "Preserved Quran",
      nameUr: "محفوظ قرآن",
      nameArabic: "القرآن المحفوظ",
      color: '#3B82F6',
      icon: 'Shield',
      concepts: [
        { term: "قُرْآنٌ مَّجِيدٌ", meaning: { en: "Glorious Quran", ur: "عظمت والا Quran" }, explanation: { en: "Despite denial, Quran is honored and glorious", ur: "انکار کے باوجود Quran معزز اور عظیم ہے" }, verseRef: "85:21" },
        { term: "لَوْحٍ مَّحْفُوظٍ", meaning: { en: "Preserved Tablet", ur: "لوحِ محفوظ" }, explanation: { en: "Al-Lawh al-Mahfuz - eternal divine record", ur: "لوحِ محفوظ - ابدی الہٰی ریکارڈ" }, verseRef: "85:22" }
      ]
    }
  },

  relationships: [
    { from: "أصحاب الأخدود", to: "عذاب الحريق", type: "consequence", description: { en: "Burned believers; will be burned", ur: "مومنوں کو جلایا؛ خود جلائے جائیں گے" } },
    { from: "لم يتوبوا", to: "الغفور الودود", type: "contrast", description: { en: "Forgiveness available but refused", ur: "مغفرت دستیاب تھی مگر انکار کیا" } },
    { from: "فرعون وثمود", to: "بطش ربك", type: "example", description: { en: "Historical proof of Allah's grip", ur: "Allah کی پکڑ کا تاریخی ثبوت" } },
    { from: "في تكذيب", to: "محيط", type: "consequence", description: { en: "Deniers surrounded by Allah", ur: "جھٹلانے والے Allah کے گھیرے میں ہیں" } },
    { from: "قرآن مجيد", to: "لوح محفوظ", type: "source", description: { en: "Quran preserved in eternal tablet", ur: "Quran ابدی تختی میں محفوظ" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Oath", verses: "85:1-3", description: { en: "Sky, Promised Day, witness", ur: "آسمان، وعدے کا دن، گواہ" } },
      { stage: 2, theme: "People of Trench", verses: "85:4-9", description: { en: "Tyrants burned believers for faith", ur: "ظالموں نے ایمان کی وجہ سے مومنوں کو جلایا" } },
      { stage: 3, theme: "Divine Justice", verses: "85:10-11", description: { en: "Torturers to Hell, believers to Paradise", ur: "ظالم جہنم میں، مومن جنت میں" } },
      { stage: 4, theme: "Divine Attributes", verses: "85:12-16", description: { en: "Severe grip, yet Forgiving and Loving", ur: "سخت پکڑ، مگر بخشنے والا اور محبت کرنے والا" } },
      { stage: 5, theme: "Historical Warning", verses: "85:17-20", description: { en: "Pharaoh, Thamud - all encompassed", ur: "فرعون، ثمود - سب گھیرے میں" } },
      { stage: 6, theme: "Quran Eternal", verses: "85:21-22", description: { en: "Glorious Quran in Preserved Tablet", ur: "عظمت والا Quran لوحِ محفوظ میں" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Faith has cost", how: "Believers may suffer but ultimate victory is theirs", verse: "85:4-8" },
      { principle: "Repentance remains open", how: "Even persecutors could repent - door never closes", verse: "85:10" },
      { principle: "Trust Allah's justice", how: "Tyrants' grip is temporary; Allah's grip is final", verse: "85:12" },
      { principle: "Allah is Wadud", how: "Despite severity, Allah actively loves His servants", verse: "85:14" },
      { principle: "Quran is preserved", how: "Trust the Book - it's in the Preserved Tablet forever", verse: "85:22" }
    ]
  },

  uniqueInsight: {
    title: { en: "From Fire to Fire", ur: "آگ سے آگ تک" },
    insight: { en: "Surah Al-Buruj presents a powerful inversion: tyrants created a fire (نَارِ ذَاتِ الْوَقُودِ) to destroy believers. But verse 10 announces they face عَذَابُ الْحَرِيقِ - the punishment of burning. The exact tool of their oppression becomes their punishment. Meanwhile, believers who were thrown into fire enter جَنَّاتٌ - gardens with rivers, the opposite of fire. The surah's message: persecution can kill the body but not the soul. The oppressors' fire was temporary; Allah's fire is eternal. What appears as defeat was actually the believers' ultimate victory.", ur: "سورت البروج ایک طاقتور الٹ پیش کرتی ہے: ظالموں نے آگ (نَارِ ذَاتِ الْوَقُودِ) بنائی مومنوں کو ختم کرنے کے لیے۔ لیکن آیت 10 اعلان کرتی ہے کہ انہیں عَذَابُ الْحَرِیقِ - جلنے کی سزا ملے گی۔ ظلم کا وہی آلہ ان کی سزا بنے گا۔ ادھر مومن جنہیں آگ میں ڈالا گیا وہ جنات (نہروں والے باغات) میں داخل ہوں گے - آگ کا الٹ۔ سورت کا پیغام: ظلم جسم مار سکتا ہے روح نہیں۔ ظالموں کی آگ عارضی تھی؛ Allah کی آگ ابدی ہے۔ جو شکست نظر آتی تھی وہ دراصل مومنوں کی حتمی فتح تھی۔" }
  },

  historicalContext: {
    note: { en: "Refers to the People of the Trench (أصحاب الأخدود) - a king who persecuted believers by burning them alive in a pit. Identified with Dhū Nuwās of Yemen or similar persecutions. Story detailed in Sahih Muslim.", ur: "اصحاب الاخدود کا حوالہ - ایک بادشاہ نے مومنوں کو گڑھے میں زندہ جلا کر ستایا۔ یمن کے ذو نواس یا اسی طرح کے ظلم سے منسوب۔ تفصیل صحیح مسلم میں ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "فَعّال intensive", example: { en: "فَعَّالٌ لِّمَا يُرِيدُ", ur: "جو چاہے کرنے والا" }, effect: { en: "Continuous doing - Allah always acts", ur: "مسلسل عمل - Allah ہمیشہ کرتا ہے" } },
      { feature: "Passive curse", example: { en: "قُتِلَ", ur: "مارے گئے (ملعون ہوئے)" }, effect: { en: "Divine passive - destroyed by Allah", ur: "الہٰی مجہول - Allah کی طرف سے تباہ" } },
      { feature: "Pairing opposites", example: { en: "شَاهِدٍ وَمَشْهُودٍ", ur: "گواہ اور گواہی دیا جانے والا" }, effect: { en: "Active-passive from same root", ur: "ایک ہی جڑ سے فاعل اور مفعول" } }
    ]
  }
};

export default ONTOLOGY;
