/**
 * Surah Al-Jumuah (Friday) - Surah 62
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 62,
  surahName: "Al-Jumuah",
  surahNameArabic: "الجمعة",
  totalAyahs: 11,
  revelationType: "Medinan",
  mainTheme: "Friday Prayer Legislation and Proper Relationship with Worldly Affairs",

  categories: {
    divineAttributes: {
      name: "Divine Attributes",
      nameUr: "الٰہی صفات",
      nameAr: "صفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Malik", arabic: "الملك", meaning: { en: "The Sovereign", ur: "بادشاہ" }, ayahs: [1], description: { en: "Complete ownership and authority", ur: "مکمل ملکیت اور اختیار" } },
        { term: "Al-Quddus", arabic: "القدوس", meaning: { en: "The Holy", ur: "پاک ذات" }, ayahs: [1], description: { en: "Absolute purity and sanctity", ur: "مطلق پاکیزگی اور تقدس" } },
        { term: "Al-Aziz", arabic: "العزيز", meaning: { en: "The Almighty", ur: "غالب، زبردست" }, ayahs: [1, 3], description: { en: "Invincible power and might", ur: "ناقابلِ شکست قوت اور طاقت" } },
        { term: "Al-Hakim", arabic: "الحكيم", meaning: { en: "The Wise", ur: "حکمت والا" }, ayahs: [1, 3], description: { en: "Perfect wisdom in all matters", ur: "تمام معاملات میں کامل حکمت" } },
        { term: "Khayr al-Raziqin", arabic: "خير الرازقين", meaning: { en: "Best of Providers", ur: "سب سے بہتر رزق دینے والا" }, ayahs: [11], description: { en: "Allah as ultimate source of provision", ur: "Allah رزق کا حقیقی سرچشمہ" } }
      ]
    },
    propheticMission: {
      name: "Mission of the Prophet",
      nameUr: "نبی ﷺ کی رسالت",
      nameAr: "رسالة النبي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Sent Among Unlettered", arabic: "البعثة في الأميين", meaning: { en: "Messenger from among the Arabs", ur: "اَن پڑھ لوگوں میں سے رسول" }, ayahs: [2] },
        { term: "Recitation of Verses", arabic: "تلاوة الآيات", meaning: { en: "Reading Allah's signs", ur: "Allah کی آیات کی تلاوت" }, ayahs: [2] },
        { term: "Purification", arabic: "التزكية", meaning: { en: "Spiritual cleansing", ur: "روحانی تزکیہ" }, ayahs: [2] },
        { term: "Teaching Book", arabic: "تعليم الكتاب", meaning: { en: "Education in scripture", ur: "کتاب کی تعلیم" }, ayahs: [2] },
        { term: "Teaching Wisdom", arabic: "تعليم الحكمة", meaning: { en: "Imparting practical wisdom", ur: "حکمت سکھانا" }, ayahs: [2] },
        { term: "Universal Message", arabic: "الرسالة للآخرين", meaning: { en: "Message for future generations", ur: "آنے والی نسلوں کے لیے پیغام" }, ayahs: [3] }
      ]
    },
    scriptureKnowledge: {
      name: "Scripture Without Action",
      nameUr: "بے عمل علم",
      nameAr: "العلم بلا عمل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Torah Bearers", arabic: "حملة التوراة", meaning: { en: "Those entrusted with scripture", ur: "وہ لوگ جن کو تورات دی گئی" }, ayahs: [5] },
        { term: "Donkey with Books", arabic: "الحمار يحمل أسفارا", meaning: { en: "Carrying without understanding", ur: "بغیر سمجھے بوجھ اٹھانا" }, ayahs: [5], description: { en: "Harsh metaphor for unacted knowledge", ur: "بے عمل علم کی سخت تشبیہ" } },
        { term: "Death Challenge", arabic: "تحدي الموت", meaning: { en: "Challenge to wish for death", ur: "موت کی تمنا کا چیلنج" }, ayahs: [6] },
        { term: "Fear of Death", arabic: "الهروب من الموت", meaning: { en: "Fleeing from inevitable death", ur: "ناگزیر موت سے بھاگنا" }, ayahs: [7, 8] }
      ]
    },
    fridayPrayer: {
      name: "Friday Prayer Obligations",
      nameUr: "نمازِ جمعہ کے احکام",
      nameAr: "أحكام الجمعة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Call to Prayer", arabic: "النداء للصلاة", meaning: { en: "The Jumuah adhan", ur: "جمعہ کی اذان" }, ayahs: [9] },
        { term: "Hasten to Remembrance", arabic: "السعي للذكر", meaning: { en: "Proceeding to Friday prayer", ur: "نمازِ جمعہ کی طرف چلنا" }, ayahs: [9] },
        { term: "Leave Trade", arabic: "ترك البيع", meaning: { en: "Abandoning business for prayer", ur: "نماز کے لیے خرید و فروخت چھوڑنا" }, ayahs: [9] },
        { term: "Post-Prayer Dispersal", arabic: "الانتشار بعد الصلاة", meaning: { en: "Resuming work after prayer", ur: "نماز کے بعد کام دوبارہ شروع کرنا" }, ayahs: [10] },
        { term: "Seeking Bounty", arabic: "ابتغاء الفضل", meaning: { en: "Seeking livelihood after prayer", ur: "نماز کے بعد رزق تلاش کرنا" }, ayahs: [10] }
      ]
    },
    worldlyDistraction: {
      name: "Worldly Distractions",
      nameUr: "دنیاوی مشغولیات",
      nameAr: "الملهيات الدنيوية",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Trade Temptation", arabic: "فتنة التجارة", meaning: { en: "Commerce as distraction", ur: "تجارت بطور رکاوٹ" }, ayahs: [11] },
        { term: "Entertainment Distraction", arabic: "فتنة اللهو", meaning: { en: "Amusement pulling away", ur: "کھیل تماشا جو عبادت سے ہٹائے" }, ayahs: [11] },
        { term: "What Allah Has", arabic: "ما عند الله", meaning: { en: "Eternal reward is better", ur: "Allah کے پاس جو ہے وہ بہتر ہے" }, ayahs: [11] },
        { term: "Historical Incident", arabic: "الحادثة التاريخية", meaning: { en: "Companions leaving sermon for caravan", ur: "صحابہ کا قافلے کی خاطر خطبہ چھوڑ کر جانا" }, ayahs: [11] }
      ]
    }
  },

  relationships: [
    { from: "Universal Glorification", to: "Divine Attributes", type: "recognition", description: { en: "All creation acknowledges Allah's sovereignty and holiness", ur: "تمام مخلوقات Allah کی بادشاہت اور پاکیزگی کا اعتراف کرتی ہیں" } },
    { from: "Prophetic Mission", to: "Pre-Islamic Ignorance", type: "transformation", description: { en: "Prophet transforms people from clear error to guidance", ur: "نبی ﷺ لوگوں کو کھلی گمراہی سے ہدایت کی طرف بدلتے ہیں" } },
    { from: "Torah Bearers", to: "Donkey with Books", type: "metaphor", description: { en: "Knowledge without action is useless burden", ur: "بغیر عمل کے علم بے فائدہ بوجھ ہے" } },
    { from: "Divine Allies Claim", to: "Death Challenge", type: "test", description: { en: "True allies would welcome death to meet Allah", ur: "سچے دوست Allah سے ملنے کے لیے موت کا استقبال کریں" } },
    { from: "Fear of Death", to: "Guilty Conscience", type: "evidence", description: { en: "Not wishing for death reveals insincere claims", ur: "موت کی تمنا نہ کرنا جھوٹے دعوؤں کو ظاہر کرتا ہے" } },
    { from: "Friday Prayer", to: "Trade Suspension", type: "priority", description: { en: "Worship takes precedence over commerce", ur: "عبادت تجارت پر مقدم ہے" } },
    { from: "Post-Prayer Life", to: "Balanced Faith", type: "integration", description: { en: "Work resumes with Allah's remembrance", ur: "Allah کے ذکر کے ساتھ کام دوبارہ شروع ہوتا ہے" } },
    { from: "Caravan Arrival", to: "Sermon Abandonment", type: "failure", description: { en: "Worldly distraction overcoming spiritual priority", ur: "دنیاوی کشش کا روحانی ترجیح پر غالب آ جانا" } }
  ],

  thematicFlow: {
    title: "From Divine Glory to Proper Worship-Life Balance",
    stages: [
      {
        name: "Cosmic Glorification",
        ayahs: [1],
        description: { en: "Universal praise of Allah's sovereignty, holiness, power, and wisdom", ur: "Allah کی بادشاہت، پاکیزگی، قدرت اور حکمت کی آفاقی تسبیح" }
      },
      {
        name: "Prophetic Mission",
        ayahs: [2, 3, 4],
        description: { en: "Four-fold mission: recitation, purification, teaching Book, teaching wisdom; extends to future generations", ur: "چار پہلو رسالت: تلاوت، تزکیہ، کتاب کی تعلیم، حکمت کی تعلیم؛ آنے والی نسلوں تک" }
      },
      {
        name: "Scripture Without Action",
        ayahs: [5],
        description: { en: "Harsh metaphor of donkey carrying books for those with knowledge but no practice", ur: "بے عمل علم والوں کے لیے کتابیں اٹھانے والے گدھے کی سخت تشبیہ" }
      },
      {
        name: "Challenge to Claimants",
        ayahs: [6, 7, 8],
        description: { en: "Those claiming exclusive divine friendship should wish for death; their refusal proves insincerity", ur: "خصوصی الٰہی دوستی کے دعوےدار موت کی تمنا کریں؛ ان کا انکار بے ایمانی ثابت کرتا ہے" }
      },
      {
        name: "Friday Prayer Legislation",
        ayahs: [9],
        description: { en: "Mandatory attendance, leaving business, hastening to remembrance", ur: "لازمی حاضری، کاروبار چھوڑنا، ذکرِ الٰہی کی طرف چلنا" }
      },
      {
        name: "Post-Prayer Balance",
        ayahs: [10],
        description: { en: "Permission to seek livelihood after prayer, with continuous remembrance", ur: "نماز کے بعد رزق تلاش کرنے کی اجازت، مسلسل ذکر کے ساتھ" }
      },
      {
        name: "Rebuke and Reminder",
        ayahs: [11],
        description: { en: "Historical rebuke for leaving sermon; what Allah has is better than trade or entertainment", ur: "خطبہ چھوڑنے پر تاریخی سرزنش؛ Allah کے پاس جو ہے وہ تجارت اور تماشے سے بہتر ہے" }
      }
    ]
  },

  practicalApplication: {
    title: "Integrating Worship and Worldly Life",
    applications: [
      {
        context: "Learning Religion",
        teaching: "Don't just carry knowledge; understand and act upon it",
        ayah: 5
      },
      {
        context: "Friday Prayer",
        teaching: "Mandatory attendance; leave business when call is made",
        ayah: 9
      },
      {
        context: "Work After Worship",
        teaching: "Seeking livelihood after Friday prayer is encouraged, not forbidden",
        ayah: 10
      },
      {
        context: "Maintaining Focus",
        teaching: "Don't let business or entertainment distract from worship",
        ayah: 11
      },
      {
        context: "Trust in Provision",
        teaching: "Allah is the best provider; don't prioritize business over worship",
        ayah: 11
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Donkey Carrying Books (حِمَارٌ يَحْمِلُ أَسْفَارًا) Metaphor", ur: "کتابیں اٹھانے والے گدھے (حِمَارٌ يَحْمِلُ أَسْفَارًا) کی تشبیہ" },
    insight: { en: "This surah contains one of the Quran's most striking educational metaphors: those who have scripture but don't apply it are like a donkey carrying heavy books (أَسْفَارًا - plural of سِفْر, referring to scrolls/volumes). The donkey carries the physical weight without benefiting from the knowledge within. This imagery directly applies to: (1) Jews who had Torah but rejected Muhammad; (2) Muslims who memorize Quran without understanding; (3) Any scholar whose knowledge doesn't transform them. The metaphor emphasizes that religious knowledge obligates transformation, not mere possession.", ur: "اس سورت میں قرآن کی سب سے نمایاں تعلیمی تشبیہات میں سے ایک ہے: جن کے پاس کتاب ہے مگر اس پر عمل نہیں وہ ایسے گدھے جیسے ہیں جو بھاری کتابیں اٹھائے ہوئے ہو (أَسْفَارًا - سِفْر کی جمع، یعنی طومار/جلدیں)۔ گدھا جسمانی بوجھ اٹھاتا ہے بغیر اندر کے علم سے فائدہ اٹھائے۔ یہ تشبیہ براہِ راست لاگو ہوتی ہے: (1) یہود جن کے پاس تورات تھی مگر محمد ﷺ کو نہ مانا؛ (2) مسلمان جو قرآن حفظ کریں بغیر سمجھے؛ (3) ہر وہ عالم جس کا علم اسے بدل نہ سکے۔ تشبیہ واضح کرتی ہے کہ دینی علم تبدیلی کا تقاضا کرتا ہے، محض قبضے کا نہیں۔" },
    arabicTerm: "كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا",
    rootMeaning: { en: "ح-م-ر (donkey), س-ف-ر (book/scroll)", ur: "ح-م-ر (گدھا)، س-ف-ر (کتاب/طومار)" },
    keyAyah: 5
  },

  historicalContext: {
    revelationPeriod: { en: "Early Medinan period", ur: "ابتدائی مدنی دور" },
    occasion: { en: "The final verse (11) references a specific incident where a trade caravan arrived in Madinah during the Friday sermon. Many companions left the mosque to see the merchandise, leaving Prophet Muhammad standing at the pulpit. Only about twelve remained. This incident led to the strong reminder in verse 11.", ur: "آخری آیت (11) ایک مخصوص واقعے کا حوالہ دیتی ہے جب جمعہ کے خطبے کے دوران ایک تجارتی قافلہ مدینہ آیا۔ بہت سے صحابہ سامان دیکھنے مسجد سے نکل گئے، نبی ﷺ منبر پر کھڑے رہے۔ صرف بارہ کے قریب باقی رہے۔ اس واقعے نے آیت 11 کی سخت نصیحت کا سبب بنا۔" },
    note: { en: "This surah establishes the Friday prayer as a distinctive Islamic institution. The word 'Jumuah' comes from the root ج-م-ع (to gather/congregate), highlighting the communal nature of this prayer. The surah balances the strict obligation to attend with permission to resume business afterward, preventing ascetic extremism while maintaining worship priority.", ur: "یہ سورت نمازِ جمعہ کو ایک منفرد اسلامی ادارے کے طور پر قائم کرتی ہے۔ 'جمعہ' کا لفظ ج-م-ع (جمع ہونا) سے ہے جو اس نماز کی اجتماعی نوعیت ظاہر کرتا ہے۔ سورت حاضری کی سخت پابندی اور بعد میں کاروبار کی اجازت کے درمیان توازن رکھتی ہے، تارکِ دنیا انتہا پسندی سے بچاتے ہوئے عبادت کی ترجیح برقرار رکھتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      {
        name: "Musabbih Series",
        description: { en: "Part of seven surahs beginning with forms of سَبَّحَ", ur: "سَبَّحَ کی صورتوں سے شروع ہونے والی سات سورتوں میں سے ایک" },
        pattern: "يُسَبِّحُ (imperfect active)",
        note: "Creates cosmic backdrop for community legislation"
      },
      {
        name: "Fourfold Mission",
        description: { en: "Prophet's mission in four verbs", ur: "نبی ﷺ کی رسالت چار افعال میں" },
        example: "يَتْلُو... وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ",
        ayah: 2
      },
      {
        name: "Comparative Metaphor",
        description: { en: "Extended simile with كَمَثَلِ", ur: "كَمَثَلِ کے ساتھ مفصل تشبیہ" },
        example: "كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا",
        ayah: 5
      },
      {
        name: "Command Sequence",
        description: { en: "Series of imperatives for Friday observance", ur: "جمعہ کی پابندی کے لیے احکام کا سلسلہ" },
        example: "فَاسْعَوْا... وَذَرُوا... فَانتَشِرُوا... وَابْتَغُوا... وَاذْكُرُوا",
        ayahs: [9, 10]
      },
      {
        name: "Superlative Divine Name",
        description: { en: "Elative form for Allah as provider", ur: "رزاق کے طور پر Allah کا صیغہ تفضیل" },
        example: "خَيْرُ الرَّازِقِينَ",
        ayah: 11
      }
    ]
  },

  jurisprudentialImplications: {
    rulings: [
      {
        topic: "Mandatory Attendance",
        ruling: "Friday prayer is obligatory for adult Muslim males",
        evidence: "فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ",
        ayah: 9
      },
      {
        topic: "Business During Adhan",
        ruling: "Trade prohibited once Friday call to prayer begins",
        evidence: "وَذَرُوا الْبَيْعَ",
        ayah: 9
      },
      {
        topic: "Post-Prayer Commerce",
        ruling: "Business permitted and encouraged after Friday prayer",
        evidence: "فَانتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِن فَضْلِ اللَّهِ",
        ayah: 10
      },
      {
        topic: "Nature of Proceeding",
        ruling: "Walking normally, not literally running (اِسْعَوْا means 'proceed' not 'run')",
        evidence: "Context and Sunnah clarify the verse",
        ayah: 9
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      {
        surah: 59,
        name: "Al-Hashr",
        relationship: "Both part of Musabbihaat (glorification surahs)",
        type: "thematic_series"
      },
      {
        surah: 61,
        name: "As-Saff",
        relationship: "Directly preceding surah, also Musabbihaat",
        type: "sequential_relationship"
      },
      {
        surah: 63,
        name: "Al-Munafiqun",
        relationship: "Following surah, also Medinan with community focus",
        type: "sequential_relationship"
      },
      {
        surah: 2,
        name: "Al-Baqarah",
        relationship: "Contains similar Torah-bearer imagery and Jewish claims challenge",
        type: "thematic_parallel"
      }
    ]
  }
};

export default ONTOLOGY;
