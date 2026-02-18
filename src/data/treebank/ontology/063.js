/**
 * Surah Al-Munafiqun (The Hypocrites) - Surah 63
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 63,
  surahName: "Al-Munafiqun",
  surahNameArabic: "المنافقون",
  totalAyahs: 11,
  revelationType: "Medinan",
  mainTheme: "Exposing the Nature and Dangers of Hypocrisy",

  categories: {
    hypocrisyTraits: {
      name: "Traits of Hypocrites",
      nameAr: "صفات المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "False Testimony", arabic: "الشهادة الكاذبة", meaning: "Lying while claiming to testify truth", ayahs: [1], description: "They claim to witness prophethood while lying" },
        { term: "Oaths as Shield", arabic: "الأيمان جُنة", meaning: "Using false oaths as protection", ayahs: [2], description: "Swearing falsely to avoid consequences" },
        { term: "Belief then Disbelief", arabic: "الإيمان ثم الكفر", meaning: "Apostasy of the heart", ayahs: [3], description: "Initial profession followed by inner rejection" },
        { term: "Sealed Hearts", arabic: "الطبع على القلوب", meaning: "Hearts sealed from understanding", ayahs: [3] },
        { term: "Impressive Exterior", arabic: "الظاهر الخادع", meaning: "Pleasing forms and speech", ayahs: [4], description: "Beautiful bodies and eloquent speech" },
        { term: "Propped-up Logs", arabic: "خشب مسندة", meaning: "Like hollow timber", ayahs: [4], description: "Impressive outside, empty inside" },
        { term: "Paranoia", arabic: "الخوف والريبة", meaning: "Thinking every shout is against them", ayahs: [4] },
        { term: "Arrogance", arabic: "الاستكبار", meaning: "Turning heads in pride", ayahs: [5] },
        { term: "Economic Warfare", arabic: "الحصار الاقتصادي", meaning: "Withholding support from believers", ayahs: [7] },
        { term: "False Honor Claims", arabic: "ادعاء العزة", meaning: "Claiming to be more honorable", ayahs: [8] }
      ]
    },
    divineJudgment: {
      name: "Divine Response to Hypocrisy",
      nameAr: "حكم الله في النفاق",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "Divine Testimony Against", arabic: "شهادة الله ضدهم", meaning: "Allah witnesses their lies", ayahs: [1] },
        { term: "No Forgiveness", arabic: "عدم المغفرة", meaning: "Prophet's intercession won't help them", ayahs: [6] },
        { term: "No Guidance", arabic: "عدم الهداية", meaning: "Allah doesn't guide the defiantly disobedient", ayahs: [6] },
        { term: "Divine Curse", arabic: "قاتلهم الله", meaning: "Allah's curse upon them", ayahs: [4] }
      ]
    },
    trueHonor: {
      name: "True Source of Honor",
      nameAr: "مصدر العزة الحقيقية",
      color: '#8B5CF6',
      icon: 'Crown',
      concepts: [
        { term: "Honor Belongs to Allah", arabic: "لله العزة", meaning: "All honor comes from Allah", ayahs: [8] },
        { term: "Prophet's Honor", arabic: "عزة الرسول", meaning: "Messenger shares in divine honor", ayahs: [8] },
        { term: "Believers' Honor", arabic: "عزة المؤمنين", meaning: "Believers have honor through faith", ayahs: [8] },
        { term: "Divine Treasures", arabic: "خزائن السماوات والأرض", meaning: "Allah owns all provisions", ayahs: [7] }
      ]
    },
    guidanceForBelievers: {
      name: "Guidance for Believers",
      nameAr: "توجيهات للمؤمنين",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Priority of Remembrance", arabic: "أولوية الذكر", meaning: "Don't let wealth distract from Allah", ayahs: [9] },
        { term: "Urgency of Charity", arabic: "عجلة الإنفاق", meaning: "Spend before death arrives", ayahs: [10] },
        { term: "Death's Certainty", arabic: "حتمية الأجل", meaning: "No delay when time comes", ayahs: [11] },
        { term: "Regret at Death", arabic: "الحسرة عند الموت", meaning: "Wishing for more time at death", ayahs: [10] }
      ]
    }
  },

  relationships: [
    { from: "False Testimony", to: "Divine Counter-Testimony", type: "opposition", description: "Their lies are met with Allah's truth" },
    { from: "Impressive Exterior", to: "Propped-up Logs", type: "metaphor", description: "Beautiful outside but hollow inside" },
    { from: "Oaths as Shield", to: "Blocking Allah's Path", type: "consequence", description: "False oaths lead to preventing others from truth" },
    { from: "Economic Warfare", to: "Divine Treasures", type: "futility", description: "Their withholding is meaningless given Allah's wealth" },
    { from: "Claims of Honor", to: "True Honor Source", type: "refutation", description: "They claim honor but it belongs to Allah" },
    { from: "Paranoia", to: "Guilty Conscience", type: "symptom", description: "Fear every shout because of inner guilt" },
    { from: "Death's Certainty", to: "Urgency of Charity", type: "motivation", description: "Inevitable death should prompt immediate action" },
    { from: "Wealth Distraction", to: "Loss", type: "consequence", description: "Being distracted by wealth leads to ultimate loss" }
  ],

  thematicFlow: {
    title: "From Hypocrisy Exposed to Guidance for Believers",
    stages: [
      {
        name: "Hypocrites' Entrance",
        ayahs: [1],
        description: "They come professing faith while lying"
      },
      {
        name: "Oaths and Obstruction",
        ayahs: [2, 3],
        description: "Using oaths as shields, hearts sealed from understanding"
      },
      {
        name: "Appearance vs Reality",
        ayahs: [4],
        description: "Impressive bodies and speech but like hollow logs; paranoid and dangerous"
      },
      {
        name: "Arrogant Rejection",
        ayahs: [5, 6],
        description: "Refusing Prophet's intercession with arrogance; forgiveness denied"
      },
      {
        name: "Economic Conspiracy",
        ayahs: [7],
        description: "Plotting to starve believers; Allah owns all treasures"
      },
      {
        name: "False Honor Claims",
        ayahs: [8],
        description: "Claiming superiority; true honor belongs to Allah, Prophet, and believers"
      },
      {
        name: "Warning to Believers",
        ayahs: [9, 10, 11],
        description: "Don't be distracted by wealth; spend before death"
      }
    ]
  },

  practicalApplication: {
    title: "Recognizing and Avoiding Hypocrisy",
    applications: [
      {
        context: "Self-Examination",
        teaching: "Check if your faith is only verbal or truly in the heart",
        ayah: 1
      },
      {
        context: "Sincerity in Speech",
        teaching: "Avoid using oaths and religious language as manipulation tools",
        ayah: 2
      },
      {
        context: "Substance Over Appearance",
        teaching: "Don't be fooled by impressive appearances or eloquent speech",
        ayah: 4
      },
      {
        context: "Financial Trust",
        teaching: "Trust in Allah's provision rather than hoarding or manipulating resources",
        ayah: 7
      },
      {
        context: "Source of Honor",
        teaching: "Seek honor through faith and obedience, not worldly status",
        ayah: 8
      },
      {
        context: "Priority Management",
        teaching: "Don't let wealth and children distract from Allah's remembrance",
        ayah: 9
      },
      {
        context: "Urgent Charity",
        teaching: "Give charity now; at death you will wish for more time to give",
        ayah: 10
      }
    ]
  },

  uniqueInsight: {
    title: "The 'Propped-Up Logs' (خُشُبٌ مُّسَنَّدَةٌ) Metaphor",
    insight: "This surah contains one of the Quran's most striking metaphors for hypocrites: 'propped-up logs' (خُشُبٌ مُّسَنَّدَةٌ). Timber that is beautiful but hollow, that looks sturdy but needs to be leaned against a wall because it has no strength of its own. The hypocrites have impressive bodies and eloquent speech, but spiritually they are empty and cannot stand on their own principles. They are paranoid, thinking every shout is against them because their guilty conscience knows their inner corruption. This agricultural/construction metaphor would have been immediately understood by the early Arab community and remains powerfully relevant.",
    arabicTerm: "خُشُبٌ مُّسَنَّدَةٌ",
    rootMeaning: "خ-ش-ب (wood/timber), س-ن-د (to support/prop up)",
    keyAyah: 4
  },

  historicalContext: {
    revelationPeriod: "After Battle of Banu Mustaliq (5-6 AH)",
    occasion: "The leader of hypocrites Abdullah ibn Ubayy said 'If we return to Madinah, the more honored will expel the more humble' - referring to expelling the Prophet and believers",
    note: "This surah directly quotes and refutes the hypocrites' statements, especially Ibn Ubayy's arrogant claim. When Umar wanted to kill Ibn Ubayy for this statement, the Prophet showed mercy, and later Ibn Ubayy's own son offered to execute his father if the Prophet commanded. The surah established that true honor belongs to Allah, His Messenger, and believers - not to those who merely claim high social status."
  },

  linguisticFeatures: {
    features: [
      {
        name: "Direct Quotation",
        description: "Hypocrites' exact words quoted and refuted",
        examples: ["نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ", "لَيُخْرِجَنَّ الْأَعَزُّ مِنْهَا الْأَذَلَّ"],
        ayahs: [1, 8]
      },
      {
        name: "Layered Testimony",
        description: "Multiple testimonies in single verse",
        example: "They testify → Allah testifies → Allah testifies against them",
        ayah: 1
      },
      {
        name: "Vivid Metaphor",
        description: "Agricultural/construction imagery for spiritual state",
        example: "خُشُبٌ مُّسَنَّدَةٌ - propped-up logs",
        ayah: 4
      },
      {
        name: "Emphatic Particles",
        description: "Multiple emphatics for certainty",
        examples: ["لَرَسُولُ", "لَكَاذِبُونَ", "لَيُخْرِجَنَّ"],
        emphasis: "Strong affirmation through لام التوكيد"
      },
      {
        name: "Conditional Regret",
        description: "لَوْلَا expressing impossible wish",
        example: "لَوْلَا أَخَّرْتَنِي - If only You had delayed me",
        ayah: 10
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Psychology of Hypocrisy",
        observation: "The paranoia described (thinking every shout is against them) reflects the psychological burden of maintaining deception",
        ayah: 4
      },
      {
        topic: "Body Language",
        observation: "Physical actions like turning heads (لَوَّوْا رُءُوسَهُمْ) as indicators of arrogance align with body language research",
        ayah: 5
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      {
        surah: 9,
        name: "At-Tawbah",
        relationship: "Most detailed treatment of hypocrites in the Quran",
        type: "thematic_parallel"
      },
      {
        surah: 2,
        name: "Al-Baqarah",
        relationship: "Opening description of hypocrites (verses 8-20)",
        type: "thematic_foundation"
      },
      {
        surah: 4,
        name: "An-Nisa",
        relationship: "Discusses hypocrites going between belief and disbelief",
        type: "thematic_parallel"
      },
      {
        surah: 62,
        name: "Al-Jumuah",
        relationship: "Directly preceding surah, also Medinan with community guidance",
        type: "sequential_relationship"
      }
    ]
  }
};

export default ONTOLOGY;
