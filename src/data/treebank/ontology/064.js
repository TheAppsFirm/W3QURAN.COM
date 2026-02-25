/**
 * Surah At-Taghabun (The Mutual Disillusion) - Surah 64
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 64,
  surahName: "At-Taghabun",
  surahNameArabic: "التغابن",
  totalAyahs: 18,
  revelationType: "Medinan",
  mainTheme: "The Day of Mutual Disillusion and Balance in Worldly Life",

  categories: {
    divineAttributes: {
      name: "Divine Attributes",
      nameAr: "صفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Malik", arabic: "الملك", meaning: { en: "The Sovereign", ur: "بادشاہ" }, ayahs: [1], description: { en: "Allah's complete dominion over all creation", ur: "تمام مخلوقات پر Allah کی مکمل بادشاہت" } },
        { term: "Al-Qadir", arabic: "القدير", meaning: { en: "The All-Powerful", ur: "ہر چیز پر قادر" }, ayahs: [1], description: { en: "Allah's infinite power over everything", ur: "ہر چیز پر Allah کی لامحدود قدرت" } },
        { term: "Al-Basir", arabic: "البصير", meaning: { en: "The All-Seeing", ur: "سب دیکھنے والا" }, ayahs: [2], description: { en: "Allah sees all actions", ur: "Allah تمام اعمال دیکھتا ہے" } },
        { term: "Al-Alim", arabic: "العليم", meaning: { en: "The All-Knowing", ur: "سب جاننے والا" }, ayahs: [4, 11], description: { en: "Allah's complete knowledge including hearts", ur: "دلوں سمیت Allah کا مکمل علم" } },
        { term: "Al-Ghani", arabic: "الغني", meaning: { en: "The Self-Sufficient", ur: "بے نیاز" }, ayahs: [6], description: { en: "Allah needs nothing from creation", ur: "Allah کو مخلوق سے کسی چیز کی ضرورت نہیں" } },
        { term: "Al-Hamid", arabic: "الحميد", meaning: { en: "The Praiseworthy", ur: "تعریف کے لائق" }, ayahs: [6], description: { en: "Allah is worthy of all praise", ur: "Allah تمام تعریف کا مستحق ہے" } },
        { term: "Khabir", arabic: "الخبير", meaning: { en: "The All-Aware", ur: "باخبر" }, ayahs: [8], description: { en: "Allah's awareness of all details", ur: "ہر تفصیل سے Allah کی آگاہی" } },
        { term: "Al-Shakur", arabic: "الشكور", meaning: { en: "The Most Appreciative", ur: "بہت قدر فرمانے والا" }, ayahs: [17], description: { en: "Allah appreciates and rewards", ur: "Allah قدر کرتا ہے اور اجر دیتا ہے" } },
        { term: "Al-Halim", arabic: "الحليم", meaning: { en: "The Forbearing", ur: "بردبار" }, ayahs: [17], description: { en: "Allah's patience with servants", ur: "بندوں کے ساتھ Allah کا صبر" } },
        { term: "Al-Aziz Al-Hakim", arabic: "العزيز الحكيم", meaning: { en: "The Almighty, The Wise", ur: "غالب، حکمت والا" }, ayahs: [18], description: { en: "Power combined with wisdom", ur: "طاقت اور حکمت کا مجموعہ" } }
      ]
    },
    creationSigns: {
      name: "Signs of Creation",
      nameAr: "آيات الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Universal Glorification", arabic: "تسبيح الكائنات", meaning: { en: "All creation glorifies Allah", ur: "تمام مخلوقات Allah کی تسبیح کرتی ہیں" }, ayahs: [1] },
        { term: "Heavens and Earth", arabic: "السماوات والأرض", meaning: { en: "Created in truth", ur: "حق کے ساتھ تخلیق کیے گئے" }, ayahs: [3] },
        { term: "Human Form", arabic: "صور الإنسان", meaning: { en: "Beautiful human forms", ur: "خوبصورت انسانی صورتیں" }, ayahs: [3] },
        { term: "Belief and Disbelief", arabic: "الإيمان والكفر", meaning: { en: "Human choice in faith", ur: "ایمان میں انسانی اختیار" }, ayahs: [2] }
      ]
    },
    dayOfJudgment: {
      name: "Day of Judgment",
      nameAr: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "Yawm al-Jam", arabic: "يوم الجمع", meaning: { en: "Day of Gathering", ur: "جمع ہونے کا دن" }, ayahs: [9], description: { en: "When all humanity is assembled", ur: "جب پوری انسانیت جمع کی جائے گی" } },
        { term: "Yawm at-Taghabun", arabic: "يوم التغابن", meaning: { en: "Day of Mutual Disillusion", ur: "ہار جیت ظاہر ہونے کا دن" }, ayahs: [9], description: { en: "Day of loss and gain revelation", ur: "نفع و نقصان کے انکشاف کا دن" } },
        { term: "Resurrection Certainty", arabic: "البعث", meaning: { en: "Definite resurrection", ur: "یقینی دوبارہ اٹھایا جانا" }, ayahs: [7] },
        { term: "Account of Deeds", arabic: "الحساب", meaning: { en: "Being informed of actions", ur: "اعمال کی خبر دی جائے گی" }, ayahs: [7] }
      ]
    },
    socialGuidance: {
      name: "Family and Social Relations",
      nameAr: "العلاقات الأسرية",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "Family as Trial", arabic: "الفتنة الأسرية", meaning: { en: "Spouses and children can be adversaries", ur: "بیوی بچے دشمن بھی ہو سکتے ہیں" }, ayahs: [14] },
        { term: "Wealth as Trial", arabic: "فتنة المال", meaning: { en: "Wealth and children are tests", ur: "مال اور اولاد آزمائش ہیں" }, ayahs: [15] },
        { term: "Three-Fold Forgiveness", arabic: "العفو والصفح والمغفرة", meaning: { en: "Pardon, overlook, forgive", ur: "معاف کرو، درگزر کرو، بخش دو" }, ayahs: [14] },
        { term: "Protection from Greed", arabic: "الوقاية من الشح", meaning: { en: "Overcoming selfishness", ur: "بخل پر قابو پانا" }, ayahs: [16] }
      ]
    },
    obligations: {
      name: "Religious Obligations",
      nameAr: "الفرائض",
      color: '#10B981',
      icon: 'Book',
      concepts: [
        { term: "Taqwa Within Ability", arabic: "التقوى حسب الاستطاعة", meaning: { en: "Fear Allah as able", ur: "جتنا ہو سکے Allah سے ڈرو" }, ayahs: [16] },
        { term: "Obedience to Allah", arabic: "طاعة الله", meaning: { en: "Obeying Allah", ur: "Allah کی اطاعت" }, ayahs: [12] },
        { term: "Obedience to Messenger", arabic: "طاعة الرسول", meaning: { en: "Following the Prophet", ur: "رسول ﷺ کی پیروی" }, ayahs: [12] },
        { term: "Charitable Lending", arabic: "القرض الحسن", meaning: { en: "Good loan to Allah", ur: "Allah کو قرضِ حسنہ دینا" }, ayahs: [17] },
        { term: "Tawakkul", arabic: "التوكل", meaning: { en: "Reliance on Allah", ur: "Allah پر توکل" }, ayahs: [13] }
      ]
    }
  },

  relationships: [
    { from: "Universal Glorification", to: "Divine Sovereignty", type: "recognition", description: { en: "All creation acknowledges Allah's kingship", ur: "تمام مخلوقات Allah کی بادشاہت کا اعتراف کرتی ہیں" } },
    { from: "Human Choice", to: "Belief/Disbelief", type: "consequence", description: { en: "Allah created humans; they choose faith or denial", ur: "Allah نے انسان بنایا؛ وہ ایمان یا کفر کا انتخاب کرتے ہیں" } },
    { from: "Past Nations", to: "Divine Warning", type: "lesson", description: { en: "Previous deniers faced consequences", ur: "پچھلے منکروں کو نتائج بھگتنے پڑے" } },
    { from: "Resurrection Denial", to: "Prophetic Oath", type: "refutation", description: { en: "Prophet swears by Allah on resurrection", ur: "نبی ﷺ Allah کی قسم سے قیامت کی تصدیق کرتے ہیں" } },
    { from: "Day of Gathering", to: "Day of Taghabun", type: "definition", description: { en: "The assembly reveals true winners and losers", ur: "اجتماع حقیقی جیتنے اور ہارنے والوں کو ظاہر کرتا ہے" } },
    { from: "Family Relations", to: "Trial/Test", type: "nature", description: { en: "Loved ones can distract from Allah", ur: "پیارے لوگ Allah سے غافل کر سکتے ہیں" } },
    { from: "Forgiveness", to: "Divine Attribute", type: "reflection", description: { en: "Human forgiveness mirrors Allah's", ur: "انسانی معافی Allah کی معافی کا عکس ہے" } },
    { from: "Wealth/Children", to: "Fitna", type: "identification", description: { en: "Worldly attachments are tests", ur: "دنیاوی تعلقات آزمائش ہیں" } },
    { from: "Taqwa", to: "Human Capacity", type: "proportion", description: { en: "God-consciousness within ability", ur: "استطاعت کے مطابق خدا خوفی" } },
    { from: "Charity", to: "Multiplication", type: "reward", description: { en: "Good loans to Allah multiply", ur: "Allah کو دیا قرضِ حسنہ بڑھ کر واپس آتا ہے" } }
  ],

  thematicFlow: {
    title: "From Divine Sovereignty to Balanced Living",
    stages: [
      {
        name: "Divine Glory",
        ayahs: [1, 2, 3, 4],
        description: { en: "Allah's sovereignty, creation, knowledge of all things", ur: "Allah کی بادشاہت، تخلیق، ہر چیز کا علم" }
      },
      {
        name: "Historical Warning",
        ayahs: [5, 6],
        description: { en: "Past nations who rejected messengers faced consequences", ur: "رسولوں کو جھٹلانے والی پچھلی قومیں نتائج سے دوچار ہوئیں" }
      },
      {
        name: "Resurrection Certainty",
        ayahs: [7, 8],
        description: { en: "Prophetic oath confirming resurrection and accountability", ur: "قیامت اور احتساب کی تصدیق کرنے والی نبوی قسم" }
      },
      {
        name: "Day of Taghabun",
        ayahs: [9, 10],
        description: { en: "Day of mutual loss where truth becomes clear", ur: "باہمی ہار جیت کا دن جب حقیقت واضح ہو گی" }
      },
      {
        name: "Divine Decree",
        ayahs: [11, 12, 13],
        description: { en: "Everything by Allah's permission; respond with faith and trust", ur: "سب کچھ Allah کی اجازت سے؛ ایمان اور توکل سے جواب دو" }
      },
      {
        name: "Family Balance",
        ayahs: [14, 15],
        description: { en: "Spouses and children as potential adversaries; wealth as test", ur: "بیوی بچے ممکنہ دشمن؛ مال بطور آزمائش" }
      },
      {
        name: "Practical Guidance",
        ayahs: [16, 17, 18],
        description: { en: "Taqwa within ability, charity, and divine attributes", ur: "استطاعت کے مطابق تقویٰ، صدقہ، اور الٰہی صفات" }
      }
    ]
  },

  practicalApplication: {
    title: "Living with Balance and Awareness",
    applications: [
      {
        context: "Life's Trials",
        teaching: "All calamities come by Allah's permission; believe and your heart finds guidance",
        ayah: 11
      },
      {
        context: "Family Relations",
        teaching: "Be aware that family can sometimes divert from faith, but choose forgiveness",
        ayah: 14
      },
      {
        context: "Wealth Management",
        teaching: "Recognize wealth and children as tests, not ultimate goals",
        ayah: 15
      },
      {
        context: "Religious Practice",
        teaching: "Fear Allah as much as you are able - religion is not beyond capacity",
        ayah: 16
      },
      {
        context: "Overcoming Greed",
        teaching: "Those protected from soul's stinginess are the successful",
        ayah: 16
      },
      {
        context: "Charitable Giving",
        teaching: "Giving to Allah is a loan that returns multiplied",
        ayah: 17
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Day of Mutual Disillusion (يوم التغابن)", ur: "ہار جیت ظاہر ہونے کا دن (يوم التغابن)" },
    insight: { en: "This surah uniquely names Judgment Day as 'Yawm at-Taghabun' - the Day of Mutual Disillusion or Loss. The word غبن means deception in trade, loss, or being cheated. On that Day, disbelievers realize they were deceived by worldly life and lost the greatest trade - selling eternal paradise for temporary pleasures. Meanwhile, believers discover they gained immensely from what seemed like 'losses' in this world. Each group feels the other was cheated. This powerful commercial metaphor transforms our understanding of life's apparent gains and losses.", ur: "یہ سورت قیامت کو منفرد نام دیتی ہے 'یومِ تغابن' - باہمی ہار جیت ظاہر ہونے کا دن۔ غبن کا مطلب تجارت میں دھوکا، نقصان، ٹھگا جانا ہے۔ اس دن کافروں کو احساس ہوگا کہ دنیا نے انہیں دھوکا دیا اور سب سے بڑی تجارت میں ہار گئے - ابدی جنت کو عارضی لذتوں کے عوض بیچ دیا۔ دوسری طرف مومنوں کو معلوم ہوگا کہ جو دنیا میں 'نقصان' لگتا تھا وہ عظیم فائدہ تھا۔ ہر گروہ سمجھتا ہے کہ دوسرا ٹھگا گیا۔ یہ طاقتور تجارتی تشبیہ زندگی کے ظاہری نفع و نقصان کا نظریہ بدل دیتی ہے۔" },
    arabicTerm: "التغابن",
    rootMeaning: { en: "غ-ب-ن (deception in trade, to sell at loss)", ur: "غ-ب-ن (تجارت میں دھوکا، نقصان میں بیچنا)" },
    keyAyah: 9
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan period", ur: "مدنی دور" },
    note: { en: "This surah bridges Meccan themes (divine sovereignty, resurrection) with Medinan themes (social guidance, family matters). It addresses the community's practical challenges while maintaining theological depth. Verse 16's 'fear Allah as much as you are able' is considered by scholars to have abrogated or clarified the stricter 'true fear' mentioned elsewhere, establishing a balanced approach to religious obligation.", ur: "یہ سورت مکی موضوعات (الٰہی بادشاہت، قیامت) کو مدنی موضوعات (سماجی رہنمائی، خاندانی معاملات) سے جوڑتی ہے۔ یہ معاشرے کے عملی مسائل کو حل کرتی ہے جبکہ عقائدی گہرائی برقرار رکھتی ہے۔ آیت 16 کے 'جتنی استطاعت ہو Allah سے ڈرو' کو علماء نے دوسری جگہ ذکر کیے گئے سخت خوف کے حکم کی تنسیخ یا وضاحت سمجھا ہے، جو دینی فرائض میں متوازن رویے کو قائم کرتا ہے۔" }
  },

  linguisticFeatures: {
    features: [
      {
        name: "Unique Surah Naming",
        description: { en: "Only surah named after a Day of Judgment description", ur: "قیامت کی ایک صفت کے نام پر واحد سورت" },
        example: "التغابن - mutual trading loss"
      },
      {
        name: "Trilateral Forgiveness",
        description: { en: "Three verbs for forgiveness in succession", ur: "معافی کے تین فعل یکے بعد دیگرے" },
        example: "تَعْفُوا وَتَصْفَحُوا وَتَغْفِرُوا - pardon, overlook, forgive",
        ayah: 14
      },
      {
        name: "Capacity Clause",
        description: { en: "Qualification on religious duty", ur: "دینی فرض پر شرطِ استطاعت" },
        example: "مَا اسْتَطَعْتُمْ - as much as you are able",
        ayah: 16
      },
      {
        name: "Divine Name Clusters",
        description: { en: "Paired divine attributes throughout", ur: "پوری سورت میں الٰہی صفات کے جوڑے" },
        examples: ["غَنِيٌّ حَمِيدٌ", "شَكُورٌ حَلِيمٌ", "الْعَزِيزُ الْحَكِيمُ"]
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Human Creation",
        observation: "Reference to beautiful form (صُوَرَكُمْ) aligns with the complexity and elegance of human anatomy",
        ayah: 3
      },
      {
        topic: "Heart-Mind Connection",
        observation: "Guidance of the heart (يَهْدِ قَلْبَهُ) through faith reflects modern understanding of psycho-spiritual wellness",
        ayah: 11
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      {
        surah: 59,
        name: "Al-Hashr",
        relationship: "Both begin with cosmic glorification (يُسَبِّحُ)",
        type: "opening_parallel"
      },
      {
        surah: 62,
        name: "Al-Jumuah",
        relationship: "Musabbihat series - surahs beginning with glorification",
        type: "thematic_series"
      },
      {
        surah: 3,
        name: "Aal Imran",
        relationship: "Both warn about family distracting from faith",
        type: "thematic_parallel"
      },
      {
        surah: 8,
        name: "Al-Anfal",
        relationship: "Similar warning about wealth and children as fitna",
        type: "thematic_parallel"
      }
    ]
  }
};

export default ONTOLOGY;
