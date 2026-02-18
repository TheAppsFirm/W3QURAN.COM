/**
 * Surah Al-Hadid (The Iron) - Surah 57
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 57,
  surahName: "Al-Hadid",
  surahNameArabic: "الحديد",
  totalAyahs: 29,
  revelationType: "Medinan",
  mainTheme: "Divine Sovereignty, Spending in Allah's Way, and Iron's Creation",

  categories: {
    divineAttributes: {
      name: "Divine Attributes",
      nameAr: "صفات الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Awwal", arabic: "الأول", meaning: "The First - before everything", ayahs: [3] },
        { term: "Al-Akhir", arabic: "الآخر", meaning: "The Last - after everything", ayahs: [3] },
        { term: "Al-Zahir", arabic: "الظاهر", meaning: "The Manifest - nothing above Him", ayahs: [3] },
        { term: "Al-Batin", arabic: "الباطن", meaning: "The Hidden - nothing below Him", ayahs: [3] },
        { term: "Universal Glorification", arabic: "التسبيح الكوني", meaning: "All creation glorifies Allah", ayahs: [1] }
      ]
    },
    cosmicDominion: {
      name: "Cosmic Dominion",
      nameAr: "الملك الكوني",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Heavens and Earth Dominion", arabic: "ملك السماوات والأرض", meaning: "Sovereignty over all creation", ayahs: [2, 5] },
        { term: "Life and Death", arabic: "الإحياء والإماتة", meaning: "He gives life and causes death", ayahs: [2] },
        { term: "Six Days Creation", arabic: "الخلق في ستة أيام", meaning: "Creation in six periods", ayahs: [4] },
        { term: "Throne Establishment", arabic: "الاستواء على العرش", meaning: "Established on the Throne", ayahs: [4] },
        { term: "Merging Night and Day", arabic: "إيلاج الليل والنهار", meaning: "Gradual day-night transition", ayahs: [6] }
      ]
    },
    spendingInAllahsWay: {
      name: "Spending in Allah's Way",
      nameAr: "الإنفاق في سبيل الله",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Mustakhlifin", arabic: "مستخلفين", meaning: "Trustees, not owners of wealth", ayahs: [7] },
        { term: "Qard Hasan", arabic: "القرض الحسن", meaning: "Beautiful loan to Allah", ayahs: [11, 18] },
        { term: "Pre-Conquest vs Post", arabic: "قبل الفتح وبعده", meaning: "Different reward for timing", ayahs: [10] },
        { term: "Multiplication of Reward", arabic: "مضاعفة الأجر", meaning: "Allah multiplies charity", ayahs: [11, 18] }
      ]
    },
    lightAndDarkness: {
      name: "Light and Darkness",
      nameAr: "النور والظلمات",
      color: '#3B82F6',
      icon: 'Sun',
      concepts: [
        { term: "Darkness to Light", arabic: "من الظلمات إلى النور", meaning: "Guidance from darkness to light", ayahs: [9] },
        { term: "Believers' Light", arabic: "نور المؤمنين", meaning: "Light running before them on Judgment Day", ayahs: [12] },
        { term: "Hypocrites Seeking Light", arabic: "طلب المنافقين النور", meaning: "Hypocrites asking to share light", ayahs: [13] },
        { term: "Wall Between Groups", arabic: "السور بين الفريقين", meaning: "Barrier separating believers and hypocrites", ayahs: [13] }
      ]
    },
    hypocrisyExposed: {
      name: "Hypocrites on Judgment Day",
      nameAr: "المنافقون يوم القيامة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Wait For Us", arabic: "انظرونا نقتبس", meaning: "Hypocrites begging for light", ayahs: [13] },
        { term: "Go Back", arabic: "ارجعوا وراءكم", meaning: "Told to go back for light", ayahs: [13] },
        { term: "You Were With Us", arabic: "ألم نكن معكم", meaning: "Hypocrites claiming companionship", ayahs: [14] },
        { term: "Self-Destruction", arabic: "فتنتم أنفسكم", meaning: "They afflicted themselves with doubt", ayahs: [14] },
        { term: "No Ransom Accepted", arabic: "لا يؤخذ فدية", meaning: "No ransom accepted that Day", ayahs: [15] }
      ]
    },
    heartSoftening: {
      name: "Softening of Hearts",
      nameAr: "خشوع القلوب",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Time for Khushu", arabic: "ألم يأن للخشوع", meaning: "Has the time not come for hearts to humble?", ayahs: [16] },
        { term: "Warning Against Hardness", arabic: "التحذير من قسوة القلب", meaning: "Don't be like those whose hearts hardened", ayahs: [16] },
        { term: "Earth Revival Metaphor", arabic: "إحياء الأرض الميتة", meaning: "Allah revives dead earth—and hearts", ayahs: [17] }
      ]
    },
    worldlyLifeNature: {
      name: "Nature of Worldly Life",
      nameAr: "طبيعة الحياة الدنيا",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Play and Amusement", arabic: "لعب ولهو", meaning: "Life is play and amusement", ayahs: [20] },
        { term: "Adornment", arabic: "زينة", meaning: "Worldly decoration", ayahs: [20] },
        { term: "Mutual Boasting", arabic: "تفاخر", meaning: "Competition in pride", ayahs: [20] },
        { term: "Multiplication of Wealth", arabic: "تكاثر", meaning: "Racing for more wealth and children", ayahs: [20] },
        { term: "Rain Metaphor", arabic: "مثل الغيث", meaning: "Like vegetation that withers", ayahs: [20] }
      ]
    },
    divineDecree: {
      name: "Divine Decree (Qadr)",
      nameAr: "القدر الإلهي",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "Pre-Written Calamities", arabic: "المصائب في كتاب", meaning: "All disasters written before creation", ayahs: [22] },
        { term: "No Grief for Lost", arabic: "لا تأسوا على ما فاتكم", meaning: "Don't grieve over what passed", ayahs: [23] },
        { term: "No Excessive Joy", arabic: "لا تفرحوا بما آتاكم", meaning: "Don't be exultant at gains", ayahs: [23] },
        { term: "Against Pride", arabic: "المختال الفخور", meaning: "Allah dislikes self-deluded boasters", ayahs: [23] }
      ]
    },
    ironAndJustice: {
      name: "Iron and Justice",
      nameAr: "الحديد والعدل",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "Iron Sent Down", arabic: "أنزلنا الحديد", meaning: "Allah sent down iron", ayahs: [25] },
        { term: "Great Might", arabic: "بأس شديد", meaning: "Iron has military power", ayahs: [25] },
        { term: "Benefits for People", arabic: "منافع للناس", meaning: "Iron has many uses", ayahs: [25] },
        { term: "Book and Balance", arabic: "الكتاب والميزان", meaning: "Scripture and justice scale", ayahs: [25] },
        { term: "Standing in Justice", arabic: "ليقوم الناس بالقسط", meaning: "That people maintain justice", ayahs: [25] }
      ]
    },
    propheticChain: {
      name: "Prophetic Lineage",
      nameAr: "سلسلة الأنبياء",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Noah and Abraham", arabic: "نوح وإبراهيم", meaning: "Starting prophets", ayahs: [26] },
        { term: "Prophethood in Descendants", arabic: "النبوة في الذرية", meaning: "Placed in their offspring", ayahs: [26] },
        { term: "Jesus and Gospel", arabic: "عيسى والإنجيل", meaning: "Followed by Jesus with Gospel", ayahs: [27] },
        { term: "Rahbaniyya", arabic: "الرهبانية", meaning: "Monasticism they invented", ayahs: [27] }
      ]
    }
  },

  relationships: [
    { from: "Divine Names", to: "Cosmic Reality", type: "explanation", description: "Al-Awwal, Al-Akhir, etc. explain Allah's relationship to creation" },
    { from: "Mustakhlifin", to: "Spending", type: "motivation", description: "Being trustees motivates spending what is Allah's" },
    { from: "Qard Hasan", to: "Multiplication", type: "consequence", description: "Beautiful loan multiplied many times" },
    { from: "Darkness", to: "Light", type: "transformation", description: "Revelation transforms from ignorance to guidance" },
    { from: "Hypocrites' Company", to: "No Benefit", type: "futility", description: "Being with believers didn't help without sincerity" },
    { from: "Hearts Softening", to: "Time Question", type: "admonition", description: "Rhetorical question about delayed humility" },
    { from: "Worldly Life", to: "Withering Plants", type: "metaphor", description: "Both beautiful then destroyed" },
    { from: "Pre-Written Decree", to: "Emotional Balance", type: "purpose", description: "Knowing qadr prevents excessive grief or joy" },
    { from: "Iron", to: "Justice", type: "instrument", description: "Iron enables enforcement of justice" },
    { from: "Book and Balance", to: "Human Conduct", type: "guidance", description: "Scripture guides, scale measures justice" }
  ],

  thematicFlow: {
    title: "From Divine Glory to Human Responsibility",
    stages: [
      { name: "Cosmic Glorification", ayahs: [1], description: "All creation glorifies Allah" },
      { name: "Divine Attributes", ayahs: [2, 3, 4, 5, 6], description: "Allah's sovereignty, names, and cosmic control" },
      { name: "Call to Faith and Spending", ayahs: [7, 8, 9, 10, 11], description: "Believe and spend as trustees" },
      { name: "Believers' Light", ayahs: [12], description: "Light running before believers" },
      { name: "Hypocrites Exposed", ayahs: [13, 14, 15], description: "Barrier separating them from light" },
      { name: "Heart Softening Call", ayahs: [16, 17], description: "Time for hearts to humble" },
      { name: "Rewards for Givers", ayahs: [18, 19], description: "Charitable become truthful and martyrs" },
      { name: "Worldly Life's Nature", ayahs: [20], description: "Five descriptions of dunya" },
      { name: "Race to Paradise", ayahs: [21], description: "Compete for forgiveness" },
      { name: "Divine Decree", ayahs: [22, 23, 24], description: "All written; don't grieve or boast" },
      { name: "Iron and Justice", ayahs: [25], description: "Sent down with power and benefit" },
      { name: "Prophetic History", ayahs: [26, 27], description: "From Noah to Jesus" },
      { name: "Final Call", ayahs: [28, 29], description: "Fear Allah, believe, receive double mercy" }
    ]
  },

  uniqueInsight: {
    title: "Iron Sent Down (وَأَنزَلْنَا الْحَدِيدَ)",
    insight: "Verse 25 states Allah 'sent down' (أَنزَلْنَا) iron—using the same verb for revelation. Modern science confirms iron wasn't formed on Earth but came from exploding stars (supernovae), literally 'sent down' from space. The surah's numerical position (57) equals iron's atomic number, and the word 'hadid' appears at a specific position corresponding to iron's isotope. But beyond science, the verse's placement is profound: iron comes after mentioning the Book and Balance (justice), showing that scripture provides spiritual guidance, scales measure fairness, and iron provides the power to enforce justice when needed. This trinity—revelation, justice, and power—forms the basis of human civilization. The verse acknowledges iron's 'great might' (بَأْسٌ شَدِيدٌ) for warfare but also 'benefits for people' (مَنَافِعُ لِلنَّاسِ)—tools, construction, transport. This balanced view recognizes both defensive and constructive uses.",
    arabicTerm: "وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
    rootMeaning: "ح-د-د (to limit, sharpen) - iron sets boundaries and limits",
    keyAyah: 25
  },

  historicalContext: {
    revelationPeriod: "Medinan period, likely 6-7 AH",
    occasion: "The Muslims faced financial strain and needed encouragement to spend in Allah's cause. Some believers' hearts had begun to harden after initial enthusiasm. The surah addresses both issues while establishing principles of faith and spending.",
    note: "This is the first of the 'Musabbihaat'—five surahs beginning with some form of 'sabbaha.' The famous verse 16 ('Has the time not come for believers' hearts to humble?') moved companions to tears. Verse 25 about iron is remarkable for matching modern astronomical knowledge about iron's extraterrestrial origin."
  },

  linguisticFeatures: {
    features: [
      { name: "Musabbih Opening", description: "سَبَّحَ - perfect tense glorification", pattern: "Indicating completed/eternal action", ayah: 1 },
      { name: "Four Divine Names", description: "الأول الآخر الظاهر الباطن", example: "Paired opposites covering all dimensions", ayah: 3 },
      { name: "Rhetorical Question", description: "أَلَمْ يَأْنِ - Has not the time come?", example: "Powerful admonition technique", ayah: 16 },
      { name: "Five-fold Description", description: "لعب ولهو وزينة وتفاخر وتكاثر", example: "Five terms for worldly life", ayah: 20 },
      { name: "Rain Parable", description: "كَمَثَلِ غَيْثٍ", example: "Growth, yellowing, debris cycle", ayah: 20 }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Iron's Cosmic Origin",
        observation: "Modern astrophysics confirms iron formed in stellar nucleosynthesis, not on Earth—literally 'sent down' from dying stars",
        ayah: 25
      },
      {
        topic: "Numerical Coincidence",
        observation: "Surah 57 = iron's atomic number; various calculations of word positions relate to isotopes",
        ayah: 25
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 59, name: "Al-Hashr", relationship: "Both part of Musabbihaat glorification series", type: "thematic_series" },
      { surah: 61, name: "As-Saff", relationship: "Both part of Musabbihaat; both address spending", type: "thematic_series" },
      { surah: 2, name: "Al-Baqarah", relationship: "Both use throne (ʿarsh) and dominion language", type: "thematic_parallel" },
      { surah: 3, name: "Aal Imran", relationship: "Both discuss Jesus and previous scripture", type: "thematic_parallel" },
      { surah: 112, name: "Al-Ikhlas", relationship: "Both focus on divine unity and attributes", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
