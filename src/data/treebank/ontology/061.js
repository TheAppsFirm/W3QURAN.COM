/**
 * Surah As-Saff (The Ranks) - Surah 61
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 61,
  surahName: "As-Saff",
  surahNameArabic: "الصف",
  totalAyahs: 14,
  revelationType: "Medinan",
  mainTheme: "Unity in Faith and Action, Following the Prophetic Chain",

  categories: {
    divineAttributes: {
      name: "Divine Attributes",
      nameAr: "صفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Aziz", arabic: "العزيز", meaning: "The Almighty", ayahs: [1], description: "Invincible power" },
        { term: "Al-Hakim", arabic: "الحكيم", meaning: "The Wise", ayahs: [1], description: "Perfect wisdom in decrees" }
      ]
    },
    sincerity: {
      name: "Sincerity in Faith",
      nameAr: "الإخلاص في الإيمان",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Words vs Actions", arabic: "القول والعمل", meaning: "Consistency between speech and deed", ayahs: [2, 3], description: "Saying what you don't do is hateful to Allah" },
        { term: "Maqt", arabic: "المقت", meaning: "Divine hatred for hypocrisy", ayahs: [3], description: "Great sin of inconsistency" },
        { term: "Bunyan Marsus", arabic: "بنيان مرصوص", meaning: "Solid structure", ayahs: [4], description: "Unity like cemented wall" }
      ]
    },
    propheticChain: {
      name: "Prophetic Continuity",
      nameAr: "تسلسل الأنبياء",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Musa and His People", arabic: "موسى وقومه", meaning: "Moses suffering from his people", ayahs: [5], description: "Despite knowing he was a messenger" },
        { term: "Hearts Made to Deviate", arabic: "إزاغة القلوب", meaning: "Divine response to deviation", ayahs: [5] },
        { term: "Isa's Confirmation", arabic: "تصديق عيسى", meaning: "Jesus confirming Torah", ayahs: [6] },
        { term: "Ahmad Prophecy", arabic: "البشارة بأحمد", meaning: "Jesus foretelling Ahmad", ayahs: [6] },
        { term: "Rejection Pattern", arabic: "نمط الرفض", meaning: "Calling truth 'magic'", ayahs: [6] }
      ]
    },
    islamicStruggle: {
      name: "Sacred Struggle",
      nameAr: "الجهاد المقدس",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Fighting in Ranks", arabic: "القتال صفا", meaning: "Organized battle for Allah", ayahs: [4] },
        { term: "Profitable Trade", arabic: "تجارة منجية", meaning: "Saving transaction", ayahs: [10] },
        { term: "Jihad with Wealth", arabic: "الجهاد بالمال", meaning: "Striving with property", ayahs: [11] },
        { term: "Jihad with Lives", arabic: "الجهاد بالنفس", meaning: "Striving with lives", ayahs: [11] },
        { term: "Nasr and Fath", arabic: "النصر والفتح", meaning: "Victory and conquest", ayahs: [13] }
      ]
    },
    rewardsOfStruggle: {
      name: "Rewards for Believers",
      nameAr: "جزاء المؤمنين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "Sin Forgiveness", arabic: "مغفرة الذنوب", meaning: "Erasure of sins", ayahs: [12] },
        { term: "Gardens with Rivers", arabic: "جنات تجري", meaning: "Paradise gardens", ayahs: [12] },
        { term: "Pleasant Dwellings", arabic: "مساكن طيبة", meaning: "Beautiful homes in Eden", ayahs: [12] },
        { term: "Supreme Success", arabic: "الفوز العظيم", meaning: "Ultimate achievement", ayahs: [12] },
        { term: "Near Victory", arabic: "فتح قريب", meaning: "Imminent triumph", ayahs: [13] }
      ]
    },
    supportingAllah: {
      name: "Being Allah's Supporters",
      nameAr: "أنصار الله",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "Ansar Allah", arabic: "أنصار الله", meaning: "Helpers of Allah's cause", ayahs: [14] },
        { term: "Disciples' Model", arabic: "نموذج الحواريين", meaning: "Following Jesus's disciples", ayahs: [14] },
        { term: "Group that Believed", arabic: "الطائفة المؤمنة", meaning: "Faction that had faith", ayahs: [14] },
        { term: "Divine Support", arabic: "التأييد الإلهي", meaning: "Allah strengthening believers", ayahs: [14] }
      ]
    }
  },

  relationships: [
    { from: "Universal Glorification", to: "Human Obligation", type: "contrast", description: "All creation glorifies Allah; humans must align words with actions" },
    { from: "Saying Without Doing", to: "Divine Hatred", type: "consequence", description: "Inconsistency invokes Allah's maqt" },
    { from: "United Ranks", to: "Solid Structure", type: "metaphor", description: "Fighting in rows compared to cemented building" },
    { from: "Moses's Suffering", to: "Hearts Deviated", type: "consequence", description: "When they deviated, Allah made their hearts deviate" },
    { from: "Jesus's Mission", to: "Ahmad Prophecy", type: "continuity", description: "Jesus confirmed Torah and foretold Muhammad" },
    { from: "Light Extinguishing Attempt", to: "Light Completion", type: "opposition", description: "They try to blow out light; Allah will complete it" },
    { from: "Profitable Trade", to: "Jihad", type: "metaphor", description: "Faith and struggle presented as saving commerce" },
    { from: "Jihad", to: "Paradise", type: "reward", description: "Striving leads to forgiveness and gardens" },
    { from: "Disciples' Pledge", to: "Believers' Call", type: "model", description: "Muslims called to be like the disciples" }
  ],

  thematicFlow: {
    title: "From Cosmic Glory to Active Support of Truth",
    stages: [
      {
        name: "Cosmic Glorification",
        ayahs: [1],
        description: "Universal praise establishing divine authority"
      },
      {
        name: "Call for Consistency",
        ayahs: [2, 3],
        description: "Rebuke for saying what you don't do; gravely hateful to Allah"
      },
      {
        name: "United Fighting",
        ayahs: [4],
        description: "Allah loves those fighting in ranks like solid structure"
      },
      {
        name: "Moses's Struggle",
        ayahs: [5],
        description: "Moses asking why his people hurt him; deviation leads to sealed hearts"
      },
      {
        name: "Jesus's Mission",
        ayahs: [6],
        description: "Confirming Torah, foretelling Ahmad, yet accused of magic"
      },
      {
        name: "Lying About Islam",
        ayahs: [7],
        description: "Greatest injustice: lying about Allah while being called to Islam"
      },
      {
        name: "Inevitable Light",
        ayahs: [8, 9],
        description: "Attempts to extinguish Allah's light will fail; Islam will prevail"
      },
      {
        name: "Profitable Trade",
        ayahs: [10, 11],
        description: "Faith and jihad as saving transaction; striving with wealth and lives"
      },
      {
        name: "Rewards",
        ayahs: [12, 13],
        description: "Forgiveness, paradise, near victory - what believers love"
      },
      {
        name: "Call to Support",
        ayahs: [14],
        description: "Be Allah's helpers like the disciples; believers will prevail"
      }
    ]
  },

  practicalApplication: {
    title: "Living with Integrity and Purpose",
    applications: [
      {
        context: "Personal Integrity",
        teaching: "Ensure your actions match your words; inconsistency angers Allah",
        ayah: 2
      },
      {
        context: "Community Unity",
        teaching: "Work together like a solid, cemented structure",
        ayah: 4
      },
      {
        context: "Handling Opposition",
        teaching: "Expect accusations like 'magic' but trust Allah will complete His light",
        ayah: 8
      },
      {
        context: "Investment Perspective",
        teaching: "See faith and sacrifice as the most profitable trade",
        ayah: 10
      },
      {
        context: "Active Support",
        teaching: "Be helpers of Allah's cause, following the disciples' model",
        ayah: 14
      }
    ]
  },

  uniqueInsight: {
    title: "The Ahmad Prophecy (اسْمُهُ أَحْمَدُ)",
    insight: "This is the only verse in the Quran where the name 'Ahmad' (أَحْمَدُ) appears, placed on the lips of Jesus (Isa) as a prophecy of a messenger to come. Ahmad shares the same root as Muhammad (ح-م-د, meaning 'praise'), but Ahmad is the elative/superlative form meaning 'Most Praising' or 'Most Praised.' This verse establishes the continuity of prophethood: Jesus confirmed Moses (Torah) and foretold Muhammad, yet when Muhammad came with clear proofs, he was accused of 'obvious magic' - the same rejection pattern faced by previous messengers. This creates a powerful thread of prophetic solidarity.",
    arabicTerm: "اسْمُهُ أَحْمَدُ",
    rootMeaning: "ح-م-د (to praise) - Ahmad means 'Most Praised' or 'Most Praising'",
    keyAyah: 6
  },

  historicalContext: {
    revelationPeriod: "Medinan period, likely before major battles",
    occasion: "Some companions had expressed great zeal for jihad but when the time came, showed hesitation. The surah addresses the importance of following through on commitments.",
    note: "The surah uniquely names Prophet Muhammad by his alternate name 'Ahmad,' linking him to Jesus's prophecy. It establishes the chain: Moses → Jesus → Muhammad, all facing opposition but all part of one divine plan. The 'solid structure' (بُنْيَانٌ مَّرْصُوصٌ) metaphor emphasizes that believers must be like bricks cemented together, supporting each other without gaps."
  },

  linguisticFeatures: {
    features: [
      {
        name: "Musabbih Series",
        description: "Part of seven surahs glorifying Allah",
        pattern: "سَبَّحَ (perfect active)",
        note: "Past tense indicating completed/eternal glorification"
      },
      {
        name: "Rhetorical Question",
        description: "Why do you say what you don't do?",
        example: "لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ",
        ayah: 2
      },
      {
        name: "Architectural Metaphor",
        description: "Believers like cemented structure",
        example: "كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ",
        ayah: 4
      },
      {
        name: "Commercial Metaphor",
        description: "Faith as profitable trade",
        example: "هَلْ أَدُلُّكُمْ عَلَىٰ تِجَارَةٍ",
        ayah: 10
      },
      {
        name: "Prophetic Name Revelation",
        description: "Only occurrence of 'Ahmad'",
        example: "اسْمُهُ أَحْمَدُ",
        ayah: 6
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Structural Engineering",
        observation: "The 'marṣūṣ' (cemented/solid) building metaphor reflects understanding that individual bricks alone are weak, but bonded together create immense strength",
        ayah: 4
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      {
        surah: 57,
        name: "Al-Hadid",
        relationship: "Both part of Musabbihaat glorification surahs",
        type: "thematic_series"
      },
      {
        surah: 62,
        name: "Al-Jumuah",
        relationship: "Following surah, also Musabbihaat",
        type: "sequential_relationship"
      },
      {
        surah: 48,
        name: "Al-Fath",
        relationship: "Both promise divine victory (فتح)",
        type: "thematic_parallel"
      },
      {
        surah: 3,
        name: "Aal Imran",
        relationship: "Both discuss disciples (Hawāriyyūn) of Jesus",
        type: "thematic_parallel"
      },
      {
        surah: 9,
        name: "At-Tawbah",
        relationship: "Both discuss 'profitable trade' of faith",
        type: "thematic_parallel"
      }
    ]
  }
};

export default ONTOLOGY;
