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
      nameAr: "صفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Malik", arabic: "الملك", meaning: "The Sovereign", ayahs: [1], description: "Complete ownership and authority" },
        { term: "Al-Quddus", arabic: "القدوس", meaning: "The Holy", ayahs: [1], description: "Absolute purity and sanctity" },
        { term: "Al-Aziz", arabic: "العزيز", meaning: "The Almighty", ayahs: [1, 3], description: "Invincible power and might" },
        { term: "Al-Hakim", arabic: "الحكيم", meaning: "The Wise", ayahs: [1, 3], description: "Perfect wisdom in all matters" },
        { term: "Khayr al-Raziqin", arabic: "خير الرازقين", meaning: "Best of Providers", ayahs: [11], description: "Allah as ultimate source of provision" }
      ]
    },
    propheticMission: {
      name: "Mission of the Prophet",
      nameAr: "رسالة النبي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Sent Among Unlettered", arabic: "البعثة في الأميين", meaning: "Messenger from among the Arabs", ayahs: [2] },
        { term: "Recitation of Verses", arabic: "تلاوة الآيات", meaning: "Reading Allah's signs", ayahs: [2] },
        { term: "Purification", arabic: "التزكية", meaning: "Spiritual cleansing", ayahs: [2] },
        { term: "Teaching Book", arabic: "تعليم الكتاب", meaning: "Education in scripture", ayahs: [2] },
        { term: "Teaching Wisdom", arabic: "تعليم الحكمة", meaning: "Imparting practical wisdom", ayahs: [2] },
        { term: "Universal Message", arabic: "الرسالة للآخرين", meaning: "Message for future generations", ayahs: [3] }
      ]
    },
    scriptureKnowledge: {
      name: "Scripture Without Action",
      nameAr: "العلم بلا عمل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Torah Bearers", arabic: "حملة التوراة", meaning: "Those entrusted with scripture", ayahs: [5] },
        { term: "Donkey with Books", arabic: "الحمار يحمل أسفارا", meaning: "Carrying without understanding", ayahs: [5], description: "Harsh metaphor for unacted knowledge" },
        { term: "Death Challenge", arabic: "تحدي الموت", meaning: "Challenge to wish for death", ayahs: [6] },
        { term: "Fear of Death", arabic: "الهروب من الموت", meaning: "Fleeing from inevitable death", ayahs: [7, 8] }
      ]
    },
    fridayPrayer: {
      name: "Friday Prayer Obligations",
      nameAr: "أحكام الجمعة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Call to Prayer", arabic: "النداء للصلاة", meaning: "The Jumuah adhan", ayahs: [9] },
        { term: "Hasten to Remembrance", arabic: "السعي للذكر", meaning: "Proceeding to Friday prayer", ayahs: [9] },
        { term: "Leave Trade", arabic: "ترك البيع", meaning: "Abandoning business for prayer", ayahs: [9] },
        { term: "Post-Prayer Dispersal", arabic: "الانتشار بعد الصلاة", meaning: "Resuming work after prayer", ayahs: [10] },
        { term: "Seeking Bounty", arabic: "ابتغاء الفضل", meaning: "Seeking livelihood after prayer", ayahs: [10] }
      ]
    },
    worldlyDistraction: {
      name: "Worldly Distractions",
      nameAr: "الملهيات الدنيوية",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Trade Temptation", arabic: "فتنة التجارة", meaning: "Commerce as distraction", ayahs: [11] },
        { term: "Entertainment Distraction", arabic: "فتنة اللهو", meaning: "Amusement pulling away", ayahs: [11] },
        { term: "What Allah Has", arabic: "ما عند الله", meaning: "Eternal reward is better", ayahs: [11] },
        { term: "Historical Incident", arabic: "الحادثة التاريخية", meaning: "Companions leaving sermon for caravan", ayahs: [11] }
      ]
    }
  },

  relationships: [
    { from: "Universal Glorification", to: "Divine Attributes", type: "recognition", description: "All creation acknowledges Allah's sovereignty and holiness" },
    { from: "Prophetic Mission", to: "Pre-Islamic Ignorance", type: "transformation", description: "Prophet transforms people from clear error to guidance" },
    { from: "Torah Bearers", to: "Donkey with Books", type: "metaphor", description: "Knowledge without action is useless burden" },
    { from: "Divine Allies Claim", to: "Death Challenge", type: "test", description: "True allies would welcome death to meet Allah" },
    { from: "Fear of Death", to: "Guilty Conscience", type: "evidence", description: "Not wishing for death reveals insincere claims" },
    { from: "Friday Prayer", to: "Trade Suspension", type: "priority", description: "Worship takes precedence over commerce" },
    { from: "Post-Prayer Life", to: "Balanced Faith", type: "integration", description: "Work resumes with Allah's remembrance" },
    { from: "Caravan Arrival", to: "Sermon Abandonment", type: "failure", description: "Worldly distraction overcoming spiritual priority" }
  ],

  thematicFlow: {
    title: "From Divine Glory to Proper Worship-Life Balance",
    stages: [
      {
        name: "Cosmic Glorification",
        ayahs: [1],
        description: "Universal praise of Allah's sovereignty, holiness, power, and wisdom"
      },
      {
        name: "Prophetic Mission",
        ayahs: [2, 3, 4],
        description: "Four-fold mission: recitation, purification, teaching Book, teaching wisdom; extends to future generations"
      },
      {
        name: "Scripture Without Action",
        ayahs: [5],
        description: "Harsh metaphor of donkey carrying books for those with knowledge but no practice"
      },
      {
        name: "Challenge to Claimants",
        ayahs: [6, 7, 8],
        description: "Those claiming exclusive divine friendship should wish for death; their refusal proves insincerity"
      },
      {
        name: "Friday Prayer Legislation",
        ayahs: [9],
        description: "Mandatory attendance, leaving business, hastening to remembrance"
      },
      {
        name: "Post-Prayer Balance",
        ayahs: [10],
        description: "Permission to seek livelihood after prayer, with continuous remembrance"
      },
      {
        name: "Rebuke and Reminder",
        ayahs: [11],
        description: "Historical rebuke for leaving sermon; what Allah has is better than trade or entertainment"
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
    title: "The Donkey Carrying Books (حِمَارٌ يَحْمِلُ أَسْفَارًا) Metaphor",
    insight: "This surah contains one of the Quran's most striking educational metaphors: those who have scripture but don't apply it are like a donkey carrying heavy books (أَسْفَارًا - plural of سِفْر, referring to scrolls/volumes). The donkey carries the physical weight without benefiting from the knowledge within. This imagery directly applies to: (1) Jews who had Torah but rejected Muhammad; (2) Muslims who memorize Quran without understanding; (3) Any scholar whose knowledge doesn't transform them. The metaphor emphasizes that religious knowledge obligates transformation, not mere possession.",
    arabicTerm: "كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا",
    rootMeaning: "ح-م-ر (donkey), س-ف-ر (book/scroll)",
    keyAyah: 5
  },

  historicalContext: {
    revelationPeriod: "Early Medinan period",
    occasion: "The final verse (11) references a specific incident where a trade caravan arrived in Madinah during the Friday sermon. Many companions left the mosque to see the merchandise, leaving Prophet Muhammad standing at the pulpit. Only about twelve remained. This incident led to the strong reminder in verse 11.",
    note: "This surah establishes the Friday prayer as a distinctive Islamic institution. The word 'Jumuah' comes from the root ج-م-ع (to gather/congregate), highlighting the communal nature of this prayer. The surah balances the strict obligation to attend with permission to resume business afterward, preventing ascetic extremism while maintaining worship priority."
  },

  linguisticFeatures: {
    features: [
      {
        name: "Musabbih Series",
        description: "Part of seven surahs beginning with forms of سَبَّحَ",
        pattern: "يُسَبِّحُ (imperfect active)",
        note: "Creates cosmic backdrop for community legislation"
      },
      {
        name: "Fourfold Mission",
        description: "Prophet's mission in four verbs",
        example: "يَتْلُو... وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ",
        ayah: 2
      },
      {
        name: "Comparative Metaphor",
        description: "Extended simile with كَمَثَلِ",
        example: "كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا",
        ayah: 5
      },
      {
        name: "Command Sequence",
        description: "Series of imperatives for Friday observance",
        example: "فَاسْعَوْا... وَذَرُوا... فَانتَشِرُوا... وَابْتَغُوا... وَاذْكُرُوا",
        ayahs: [9, 10]
      },
      {
        name: "Superlative Divine Name",
        description: "Elative form for Allah as provider",
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
