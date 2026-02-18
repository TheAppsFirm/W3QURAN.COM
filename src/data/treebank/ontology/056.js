/**
 * Surah Al-Waqi'ah (The Inevitable Event) - Surah 56
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 56,
  surahName: "Al-Waqi'ah",
  surahNameArabic: "الواقعة",
  totalAyahs: 96,
  revelationType: "Makkan",
  mainTheme: "The Three Groups on Judgment Day and Proofs of Resurrection",

  categories: {
    threeGroups: {
      name: "Three Groups of Humanity",
      nameAr: "أصناف البشر الثلاثة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Ashab al-Maymanah", arabic: "أصحاب الميمنة", meaning: "Companions of the Right", ayahs: [8, 27, 38, 90, 91] },
        { term: "Ashab al-Mash'amah", arabic: "أصحاب المشأمة", meaning: "Companions of the Left", ayahs: [9, 41] },
        { term: "Al-Sabiqun", arabic: "السابقون", meaning: "The Foremost, brought near", ayahs: [10, 11, 12] }
      ]
    },
    sabiqunRewards: {
      name: "Rewards of the Foremost",
      nameAr: "جزاء السابقين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "Gardens of Pleasure", arabic: "جنات النعيم", meaning: "Gardens of bliss", ayahs: [12] },
        { term: "Jeweled Thrones", arabic: "سرر موضونة", meaning: "Woven couches with jewels", ayahs: [15] },
        { term: "Eternal Youth", arabic: "ولدان مخلدون", meaning: "Immortal youth serving", ayahs: [17] },
        { term: "Pure Wine", arabic: "كأس من معين", meaning: "Cups from flowing spring", ayahs: [18] },
        { term: "Hur Ein", arabic: "حور عين", meaning: "Fair ones with large eyes", ayahs: [22] },
        { term: "No Vain Talk", arabic: "لا لغو ولا تأثيم", meaning: "No idle or sinful speech", ayahs: [25] }
      ]
    },
    rightHandRewards: {
      name: "Rewards of the Right",
      nameAr: "جزاء أصحاب اليمين",
      color: '#10B981',
      icon: 'Gift',
      concepts: [
        { term: "Thornless Lote Trees", arabic: "سدر مخضود", meaning: "Lote trees without thorns", ayahs: [28] },
        { term: "Layered Banana Trees", arabic: "طلح منضود", meaning: "Clustered plantains", ayahs: [29] },
        { term: "Extended Shade", arabic: "ظل ممدود", meaning: "Long-extended shade", ayahs: [30] },
        { term: "Flowing Water", arabic: "ماء مسكوب", meaning: "Outpoured water", ayahs: [31] },
        { term: "Abundant Fruit", arabic: "فاكهة كثيرة", meaning: "Much fruit", ayahs: [32] },
        { term: "Raised Beds", arabic: "فرش مرفوعة", meaning: "Elevated couches", ayahs: [34] }
      ]
    },
    leftHandPunishment: {
      name: "Punishment of the Left",
      nameAr: "عذاب أصحاب الشمال",
      color: '#EF4444',
      icon: 'Flame',
      concepts: [
        { term: "Scorching Wind", arabic: "سموم", meaning: "Burning hot wind", ayahs: [42] },
        { term: "Boiling Water", arabic: "حميم", meaning: "Scalding water", ayahs: [42] },
        { term: "Black Smoke Shadow", arabic: "ظل من يحموم", meaning: "Shadow of black smoke", ayahs: [43] },
        { term: "Neither Cool Nor Noble", arabic: "لا بارد ولا كريم", meaning: "Not refreshing or pleasant", ayahs: [44] },
        { term: "Affluent Before", arabic: "مترفين", meaning: "They lived in luxury", ayahs: [45] },
        { term: "Tree of Zaqqum", arabic: "شجرة الزقوم", meaning: "Bitter tree filling bellies", ayahs: [52] }
      ]
    },
    proofsOfResurrection: {
      name: "Proofs of Resurrection",
      nameAr: "براهين البعث",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "First Creation", arabic: "الخلق الأول", meaning: "Allah created you first time", ayahs: [57, 62] },
        { term: "Sperm Drop", arabic: "النطفة", meaning: "What you emit - semen", ayahs: [58] },
        { term: "Crops You Sow", arabic: "ما تحرثون", meaning: "Seeds you plant", ayahs: [63, 64] },
        { term: "Water You Drink", arabic: "الماء المنزل", meaning: "Water from clouds", ayahs: [68, 69] },
        { term: "Fire You Kindle", arabic: "النار الموقدة", meaning: "Fire from trees", ayahs: [71, 72] }
      ]
    },
    quranGlory: {
      name: "Glory of the Quran",
      nameAr: "عظمة القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Quran Oath", arabic: "بمواقع النجوم", meaning: "By positions of stars", ayahs: [75, 76] },
        { term: "Noble Quran", arabic: "قرآن كريم", meaning: "Honorable Quran", ayahs: [77] },
        { term: "Hidden Book", arabic: "كتاب مكنون", meaning: "In a protected record", ayahs: [78] },
        { term: "Only Pure Touch It", arabic: "لا يمسه إلا المطهرون", meaning: "None touch it except purified", ayahs: [79] },
        { term: "From Lord of Worlds", arabic: "تنزيل من رب العالمين", meaning: "Revelation from Lord of worlds", ayahs: [80] }
      ]
    },
    deathMoment: {
      name: "The Moment of Death",
      nameAr: "لحظة الموت",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Soul at Throat", arabic: "الروح عند الحلقوم", meaning: "When soul reaches throat", ayahs: [83] },
        { term: "You Watch", arabic: "وأنتم تنظرون", meaning: "While you watch helplessly", ayahs: [84] },
        { term: "We Are Nearer", arabic: "نحن أقرب", meaning: "Allah is closer than you", ayahs: [85] },
        { term: "Cannot Return Soul", arabic: "ترجعونها", meaning: "You cannot return it", ayahs: [87] }
      ]
    }
  },

  relationships: [
    { from: "Three Groups", to: "Final Abode", type: "consequence", description: "Classification determines eternal destination" },
    { from: "Al-Sabiqun", to: "Highest Paradise", type: "reward", description: "Foremost receive greatest rewards" },
    { from: "First Creation", to: "Resurrection", type: "proof", description: "If created once, can be recreated" },
    { from: "Crops/Water/Fire", to: "Divine Power", type: "evidence", description: "Daily miracles prove resurrection" },
    { from: "Quran", to: "Pure Ones", type: "requirement", description: "Only purified touch the original" },
    { from: "Death Moment", to: "Human Helplessness", type: "demonstration", description: "Cannot stop or reverse death" },
    { from: "Luxury Before", to: "Punishment After", type: "reversal", description: "Worldly ease becomes eternal torment" }
  ],

  thematicFlow: {
    title: "From Cosmic Event to Individual Reckoning",
    stages: [
      { name: "The Event", ayahs: [1, 2, 3, 4, 5, 6], description: "When Al-Waqi'ah occurs" },
      { name: "Three Groups Named", ayahs: [7, 8, 9, 10, 11], description: "Right, Left, Foremost" },
      { name: "Sabiqun's Rewards", ayahs: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], description: "Foremost in gardens" },
      { name: "Right Hand Rewards", ayahs: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], description: "Companions of Right blessed" },
      { name: "Left Hand Punishment", ayahs: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56], description: "Scorching wind and zaqqum" },
      { name: "Proof: Creation", ayahs: [57, 58, 59, 60, 61, 62], description: "You were created from sperm" },
      { name: "Proof: Agriculture", ayahs: [63, 64, 65, 66, 67], description: "You don't make crops grow" },
      { name: "Proof: Water", ayahs: [68, 69, 70], description: "You don't bring down rain" },
      { name: "Proof: Fire", ayahs: [71, 72, 73, 74], description: "You don't create fire's tree" },
      { name: "Quran's Honor", ayahs: [75, 76, 77, 78, 79, 80, 81, 82], description: "Noble Quran from Allah" },
      { name: "Death Scene", ayahs: [83, 84, 85, 86, 87], description: "Soul at throat, you watch" },
      { name: "Final Three Groups", ayahs: [88, 89, 90, 91, 92, 93, 94, 95, 96], description: "Each group's fate summarized" }
    ]
  },

  uniqueInsight: {
    title: "The Soul at the Throat (فَلَوْلَا إِذَا بَلَغَتِ الْحُلْقُومَ)",
    insight: "Verses 83-87 paint a vivid scene of death: the soul reaches the throat, family watches helplessly, and Allah challenges: if you're not subject to judgment, bring the soul back. This confronts human arrogance with ultimate powerlessness. The phrase 'We are nearer to him than you, but you do not see' (v.85) reminds us that angels of death are present though invisible. The rhetorical challenge—'why don't you return the soul if you are truthful?'—demolishes any illusion of human control over life and death. This passage is why many scholars recommend reciting Al-Waqi'ah daily as preparation for death.",
    arabicTerm: "فَلَوْلَا إِذَا بَلَغَتِ الْحُلْقُومَ وَأَنتُمْ حِينَئِذٍ تَنظُرُونَ",
    rootMeaning: "ح-ل-ق-م (throat/gullet) - the final passage of the soul",
    keyAyah: 83
  },

  historicalContext: {
    revelationPeriod: "Makkan period",
    occasion: "Revealed to establish the reality of resurrection and judgment, which the Quraysh denied. The Prophet ﷺ said: 'Whoever recites Surah Al-Waqi'ah every night will never be afflicted by poverty.'",
    note: "This surah is distinctive for dividing humanity into three groups rather than two, introducing the elite 'Sabiqun' category. The four proofs of resurrection (creation, crops, water, fire) use daily observations to demonstrate Allah's power over life and death."
  },

  linguisticFeatures: {
    features: [
      { name: "Rhetorical Opening", description: "إِذَا وَقَعَتِ الْوَاقِعَةُ", example: "When the Event occurs", ayah: 1 },
      { name: "Triple Classification", description: "Three groups instead of usual two", pattern: "Sabiqun, Right, Left", ayahs: [7, 8, 9, 10] },
      { name: "Repeated Questions", description: "أَأَنتُمْ تَخْلُقُونَهُ... أَأَنتُمْ تَزْرَعُونَهُ", example: "Do YOU create/grow it?", ayahs: [59, 64, 69, 72] },
      { name: "Oath Structure", description: "فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ", example: "By positions of stars", ayah: 75 },
      { name: "Conditional Challenge", description: "فَلَوْلَا... تُرْجِعُونَهَا", example: "Why don't you return it?", ayah: 87 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 55, name: "Ar-Rahman", relationship: "Both describe Paradise rewards in detail", type: "thematic_parallel" },
      { surah: 78, name: "An-Naba", relationship: "Both focus on Day of Judgment", type: "thematic_parallel" },
      { surah: 81, name: "At-Takwir", relationship: "Both describe cosmic events at end times", type: "thematic_parallel" },
      { surah: 44, name: "Ad-Dukhan", relationship: "Both mention tree of Zaqqum", type: "thematic_parallel" },
      { surah: 57, name: "Al-Hadid", relationship: "Following surah, shifts to Medinan legislation", type: "sequential_relationship" }
    ]
  }
};

export default ONTOLOGY;
