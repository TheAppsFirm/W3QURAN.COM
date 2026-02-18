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
        { term: "Al-Malik", arabic: "الملك", meaning: "The Sovereign", ayahs: [1], description: "Allah's complete dominion over all creation" },
        { term: "Al-Qadir", arabic: "القدير", meaning: "The All-Powerful", ayahs: [1], description: "Allah's infinite power over everything" },
        { term: "Al-Basir", arabic: "البصير", meaning: "The All-Seeing", ayahs: [2], description: "Allah sees all actions" },
        { term: "Al-Alim", arabic: "العليم", meaning: "The All-Knowing", ayahs: [4, 11], description: "Allah's complete knowledge including hearts" },
        { term: "Al-Ghani", arabic: "الغني", meaning: "The Self-Sufficient", ayahs: [6], description: "Allah needs nothing from creation" },
        { term: "Al-Hamid", arabic: "الحميد", meaning: "The Praiseworthy", ayahs: [6], description: "Allah is worthy of all praise" },
        { term: "Khabir", arabic: "الخبير", meaning: "The All-Aware", ayahs: [8], description: "Allah's awareness of all details" },
        { term: "Al-Shakur", arabic: "الشكور", meaning: "The Most Appreciative", ayahs: [17], description: "Allah appreciates and rewards" },
        { term: "Al-Halim", arabic: "الحليم", meaning: "The Forbearing", ayahs: [17], description: "Allah's patience with servants" },
        { term: "Al-Aziz Al-Hakim", arabic: "العزيز الحكيم", meaning: "The Almighty, The Wise", ayahs: [18], description: "Power combined with wisdom" }
      ]
    },
    creationSigns: {
      name: "Signs of Creation",
      nameAr: "آيات الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Universal Glorification", arabic: "تسبيح الكائنات", meaning: "All creation glorifies Allah", ayahs: [1] },
        { term: "Heavens and Earth", arabic: "السماوات والأرض", meaning: "Created in truth", ayahs: [3] },
        { term: "Human Form", arabic: "صور الإنسان", meaning: "Beautiful human forms", ayahs: [3] },
        { term: "Belief and Disbelief", arabic: "الإيمان والكفر", meaning: "Human choice in faith", ayahs: [2] }
      ]
    },
    dayOfJudgment: {
      name: "Day of Judgment",
      nameAr: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "Yawm al-Jam", arabic: "يوم الجمع", meaning: "Day of Gathering", ayahs: [9], description: "When all humanity is assembled" },
        { term: "Yawm at-Taghabun", arabic: "يوم التغابن", meaning: "Day of Mutual Disillusion", ayahs: [9], description: "Day of loss and gain revelation" },
        { term: "Resurrection Certainty", arabic: "البعث", meaning: "Definite resurrection", ayahs: [7] },
        { term: "Account of Deeds", arabic: "الحساب", meaning: "Being informed of actions", ayahs: [7] }
      ]
    },
    socialGuidance: {
      name: "Family and Social Relations",
      nameAr: "العلاقات الأسرية",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "Family as Trial", arabic: "الفتنة الأسرية", meaning: "Spouses and children can be adversaries", ayahs: [14] },
        { term: "Wealth as Trial", arabic: "فتنة المال", meaning: "Wealth and children are tests", ayahs: [15] },
        { term: "Three-Fold Forgiveness", arabic: "العفو والصفح والمغفرة", meaning: "Pardon, overlook, forgive", ayahs: [14] },
        { term: "Protection from Greed", arabic: "الوقاية من الشح", meaning: "Overcoming selfishness", ayahs: [16] }
      ]
    },
    obligations: {
      name: "Religious Obligations",
      nameAr: "الفرائض",
      color: '#10B981',
      icon: 'Book',
      concepts: [
        { term: "Taqwa Within Ability", arabic: "التقوى حسب الاستطاعة", meaning: "Fear Allah as able", ayahs: [16] },
        { term: "Obedience to Allah", arabic: "طاعة الله", meaning: "Obeying Allah", ayahs: [12] },
        { term: "Obedience to Messenger", arabic: "طاعة الرسول", meaning: "Following the Prophet", ayahs: [12] },
        { term: "Charitable Lending", arabic: "القرض الحسن", meaning: "Good loan to Allah", ayahs: [17] },
        { term: "Tawakkul", arabic: "التوكل", meaning: "Reliance on Allah", ayahs: [13] }
      ]
    }
  },

  relationships: [
    { from: "Universal Glorification", to: "Divine Sovereignty", type: "recognition", description: "All creation acknowledges Allah's kingship" },
    { from: "Human Choice", to: "Belief/Disbelief", type: "consequence", description: "Allah created humans; they choose faith or denial" },
    { from: "Past Nations", to: "Divine Warning", type: "lesson", description: "Previous deniers faced consequences" },
    { from: "Resurrection Denial", to: "Prophetic Oath", type: "refutation", description: "Prophet swears by Allah on resurrection" },
    { from: "Day of Gathering", to: "Day of Taghabun", type: "definition", description: "The assembly reveals true winners and losers" },
    { from: "Family Relations", to: "Trial/Test", type: "nature", description: "Loved ones can distract from Allah" },
    { from: "Forgiveness", to: "Divine Attribute", type: "reflection", description: "Human forgiveness mirrors Allah's" },
    { from: "Wealth/Children", to: "Fitna", type: "identification", description: "Worldly attachments are tests" },
    { from: "Taqwa", to: "Human Capacity", type: "proportion", description: "God-consciousness within ability" },
    { from: "Charity", to: "Multiplication", type: "reward", description: "Good loans to Allah multiply" }
  ],

  thematicFlow: {
    title: "From Divine Sovereignty to Balanced Living",
    stages: [
      {
        name: "Divine Glory",
        ayahs: [1, 2, 3, 4],
        description: "Allah's sovereignty, creation, knowledge of all things"
      },
      {
        name: "Historical Warning",
        ayahs: [5, 6],
        description: "Past nations who rejected messengers faced consequences"
      },
      {
        name: "Resurrection Certainty",
        ayahs: [7, 8],
        description: "Prophetic oath confirming resurrection and accountability"
      },
      {
        name: "Day of Taghabun",
        ayahs: [9, 10],
        description: "Day of mutual loss where truth becomes clear"
      },
      {
        name: "Divine Decree",
        ayahs: [11, 12, 13],
        description: "Everything by Allah's permission; respond with faith and trust"
      },
      {
        name: "Family Balance",
        ayahs: [14, 15],
        description: "Spouses and children as potential adversaries; wealth as test"
      },
      {
        name: "Practical Guidance",
        ayahs: [16, 17, 18],
        description: "Taqwa within ability, charity, and divine attributes"
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
    title: "The Day of Mutual Disillusion (يوم التغابن)",
    insight: "This surah uniquely names Judgment Day as 'Yawm at-Taghabun' - the Day of Mutual Disillusion or Loss. The word غبن means deception in trade, loss, or being cheated. On that Day, disbelievers realize they were deceived by worldly life and lost the greatest trade - selling eternal paradise for temporary pleasures. Meanwhile, believers discover they gained immensely from what seemed like 'losses' in this world. Each group feels the other was cheated. This powerful commercial metaphor transforms our understanding of life's apparent gains and losses.",
    arabicTerm: "التغابن",
    rootMeaning: "غ-ب-ن (deception in trade, to sell at loss)",
    keyAyah: 9
  },

  historicalContext: {
    revelationPeriod: "Medinan period",
    note: "This surah bridges Meccan themes (divine sovereignty, resurrection) with Medinan themes (social guidance, family matters). It addresses the community's practical challenges while maintaining theological depth. Verse 16's 'fear Allah as much as you are able' is considered by scholars to have abrogated or clarified the stricter 'true fear' mentioned elsewhere, establishing a balanced approach to religious obligation."
  },

  linguisticFeatures: {
    features: [
      {
        name: "Unique Surah Naming",
        description: "Only surah named after a Day of Judgment description",
        example: "التغابن - mutual trading loss"
      },
      {
        name: "Trilateral Forgiveness",
        description: "Three verbs for forgiveness in succession",
        example: "تَعْفُوا وَتَصْفَحُوا وَتَغْفِرُوا - pardon, overlook, forgive",
        ayah: 14
      },
      {
        name: "Capacity Clause",
        description: "Qualification on religious duty",
        example: "مَا اسْتَطَعْتُمْ - as much as you are able",
        ayah: 16
      },
      {
        name: "Divine Name Clusters",
        description: "Paired divine attributes throughout",
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
