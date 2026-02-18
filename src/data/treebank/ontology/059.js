/**
 * Surah Al-Hashr (The Gathering) - Surah 59
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 59,
  surahName: "Al-Hashr",
  surahNameArabic: "الحشر",
  totalAyahs: 24,
  revelationType: "Medinan",
  mainTheme: "Expulsion of Banu Nadir, Distribution of Fai', and Divine Names",

  categories: {
    divineAction: {
      name: "Divine Action Against Enemies",
      nameAr: "الفعل الإلهي ضد الأعداء",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "Expulsion from Homes", arabic: "الإخراج من الديار", meaning: "Allah expelled the disbelieving People of the Book", ayahs: [2] },
        { term: "First Gathering", arabic: "أول الحشر", meaning: "First exile of Jews from Madinah", ayahs: [2] },
        { term: "Terror in Hearts", arabic: "الرعب في القلوب", meaning: "Allah cast terror into their hearts", ayahs: [2] },
        { term: "Destroying Their Homes", arabic: "يخربون بيوتهم", meaning: "They demolished their own houses", ayahs: [2] }
      ]
    },
    faiDistribution: {
      name: "Distribution of Fai' (War Gains)",
      nameAr: "توزيع الفيء",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "Fai' without Battle", arabic: "الفيء بلا قتال", meaning: "Gains acquired without fighting", ayahs: [6, 7] },
        { term: "Allah's Distribution", arabic: "توزيع الله", meaning: "Allah decides distribution", ayahs: [7] },
        { term: "Five Categories", arabic: "خمس فئات", meaning: "Allah, Messenger, relatives, orphans, needy, travelers", ayahs: [7] },
        { term: "Preventing Wealth Circulation Among Rich", arabic: "دولة بين الأغنياء", meaning: "Wealth should not circulate only among wealthy", ayahs: [7] }
      ]
    },
    muhajirin: {
      name: "The Emigrants (Muhajirin)",
      nameAr: "المهاجرون",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Poor Emigrants", arabic: "الفقراء المهاجرين", meaning: "Expelled from homes and properties", ayahs: [8] },
        { term: "Seeking Allah's Bounty", arabic: "ابتغاء فضل الله", meaning: "They seek Allah's grace and pleasure", ayahs: [8] },
        { term: "Helping Allah's Cause", arabic: "نصرة الله ورسوله", meaning: "They support Allah and His Messenger", ayahs: [8] },
        { term: "The Truthful Ones", arabic: "الصادقون", meaning: "They are the truly sincere", ayahs: [8] }
      ]
    },
    ansar: {
      name: "The Helpers (Ansar)",
      nameAr: "الأنصار",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Settled in Madinah", arabic: "تبوؤوا الدار", meaning: "Established home before emigrants came", ayahs: [9] },
        { term: "Love for Emigrants", arabic: "محبة المهاجرين", meaning: "They love those who emigrated to them", ayahs: [9] },
        { term: "No Envy", arabic: "عدم الحاجة", meaning: "No jealousy for what emigrants received", ayahs: [9] },
        { term: "Ithar - Preferring Others", arabic: "الإيثار", meaning: "Giving preference over themselves despite poverty", ayahs: [9] }
      ]
    },
    laterGenerations: {
      name: "Later Generations",
      nameAr: "الأجيال اللاحقة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Seeking Forgiveness", arabic: "طلب المغفرة", meaning: "Praying for themselves and predecessors", ayahs: [10] },
        { term: "No Resentment", arabic: "عدم الغل", meaning: "No rancor toward believers", ayahs: [10] },
        { term: "Brotherhood Across Time", arabic: "الأخوة عبر الزمن", meaning: "Spiritual connection with predecessors", ayahs: [10] }
      ]
    },
    hypocritesAlliance: {
      name: "Hypocrites' False Alliance",
      nameAr: "تحالف المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "False Promises", arabic: "الوعود الكاذبة", meaning: "Promising to fight alongside Jews", ayahs: [11] },
        { term: "Broken Promises", arabic: "نقض العهود", meaning: "They would not actually help", ayahs: [12] },
        { term: "Fleeing Battle", arabic: "الفرار من القتال", meaning: "They would turn backs if they fought", ayahs: [12] },
        { term: "Fear of Believers", arabic: "الخوف من المؤمنين", meaning: "More afraid of believers than Allah", ayahs: [13] }
      ]
    },
    satansDeception: {
      name: "Satan's Deception",
      nameAr: "خداع الشيطان",
      color: '#EF4444',
      icon: 'Flame',
      concepts: [
        { term: "Command to Disbelieve", arabic: "الأمر بالكفر", meaning: "Satan tells man to disbelieve", ayahs: [16] },
        { term: "Abandonment", arabic: "التبرؤ", meaning: "Satan disowns after leading astray", ayahs: [16] },
        { term: "Claiming to Fear Allah", arabic: "ادعاء الخوف", meaning: "Satan's false claim of fearing Allah", ayahs: [16] },
        { term: "Both in Fire", arabic: "كلاهما في النار", meaning: "Satan and follower together in Hell", ayahs: [17] }
      ]
    },
    divineNames: {
      name: "The Beautiful Names of Allah",
      nameAr: "أسماء الله الحسنى",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Knower of Unseen", arabic: "عالم الغيب والشهادة", meaning: "Knows hidden and manifest", ayahs: [22] },
        { term: "Al-Rahman Al-Rahim", arabic: "الرحمن الرحيم", meaning: "Most Merciful, Especially Merciful", ayahs: [22] },
        { term: "Al-Malik", arabic: "الملك", meaning: "The Sovereign King", ayahs: [23] },
        { term: "Al-Quddus", arabic: "القدوس", meaning: "The Holy, Pure", ayahs: [23] },
        { term: "Al-Salam", arabic: "السلام", meaning: "The Source of Peace", ayahs: [23] },
        { term: "Al-Mumin", arabic: "المؤمن", meaning: "The Granter of Security", ayahs: [23] },
        { term: "Al-Muhaymin", arabic: "المهيمن", meaning: "The Controller, Guardian", ayahs: [23] },
        { term: "Al-Aziz", arabic: "العزيز", meaning: "The Almighty", ayahs: [23, 24] },
        { term: "Al-Jabbar", arabic: "الجبار", meaning: "The Compeller", ayahs: [23] },
        { term: "Al-Mutakabbir", arabic: "المتكبر", meaning: "The Supreme", ayahs: [23] },
        { term: "Al-Khaliq", arabic: "الخالق", meaning: "The Creator", ayahs: [24] },
        { term: "Al-Bari", arabic: "البارئ", meaning: "The Originator", ayahs: [24] },
        { term: "Al-Musawwir", arabic: "المصور", meaning: "The Fashioner", ayahs: [24] },
        { term: "Al-Hakim", arabic: "الحكيم", meaning: "The All-Wise", ayahs: [24] }
      ]
    }
  },

  relationships: [
    { from: "Opposition to Allah", to: "Expulsion", type: "consequence", description: "Those who opposed Allah and Messenger were expelled" },
    { from: "Self-Destruction", to: "Divine Plan", type: "irony", description: "They destroyed their own homes thinking it would deny Muslims" },
    { from: "Fai'", to: "Social Justice", type: "purpose", description: "Wealth distributed to prevent concentration among rich" },
    { from: "Muhajirin", to: "Truthfulness", type: "title", description: "Emigrants declared 'the truthful' for their sacrifice" },
    { from: "Ansar", to: "Ithar", type: "virtue", description: "Helpers exemplified selfless preference for others" },
    { from: "Later Muslims", to: "Predecessors", type: "prayer", description: "Seek forgiveness for themselves and predecessors" },
    { from: "Hypocrites", to: "Jews", type: "false_alliance", description: "Promised but never delivered support" },
    { from: "Satan", to: "Followers", type: "abandonment", description: "Leads astray then disclaims responsibility" },
    { from: "Quran", to: "Mountain", type: "hypothetical", description: "Would humble and shatter a mountain" },
    { from: "Divine Names", to: "Creation", type: "glorification", description: "All creation glorifies Allah's names" }
  ],

  thematicFlow: {
    title: "From Divine Judgment to Divine Names",
    stages: [
      { name: "Universal Glorification", ayahs: [1], description: "All heavens and earth glorify Allah" },
      { name: "Expulsion of Enemies", ayahs: [2, 3, 4, 5], description: "Banu Nadir expelled; their unexpected defeat" },
      { name: "Fai' Distribution", ayahs: [6, 7], description: "Rules for wealth gained without battle" },
      { name: "Muhajirin's Honor", ayahs: [8], description: "Description and praise of emigrants" },
      { name: "Ansar's Excellence", ayahs: [9], description: "Helpers' love and selflessness (Ithar)" },
      { name: "Later Muslims' Prayer", ayahs: [10], description: "Supplication for all believers across time" },
      { name: "Hypocrites Exposed", ayahs: [11, 12, 13, 14, 15], description: "Their false promises to Jews" },
      { name: "Satan's Pattern", ayahs: [16, 17], description: "How Satan leads then abandons" },
      { name: "Self-Accountability", ayahs: [18, 19, 20], description: "Prepare for tomorrow; don't forget Allah" },
      { name: "Quran's Weight", ayahs: [21], description: "Mountain would shatter from its weight" },
      { name: "Divine Names Climax", ayahs: [22, 23, 24], description: "13+ names of Allah in finale" }
    ]
  },

  practicalApplication: {
    title: "Living the Lessons of Al-Hashr",
    applications: [
      {
        context: "Wealth Distribution",
        teaching: "Share resources so wealth circulates beyond the wealthy",
        ayah: 7
      },
      {
        context: "Brotherhood",
        teaching: "Love fellow believers; rejoice in their good fortune without envy",
        ayah: 9
      },
      {
        context: "Ithar (Selflessness)",
        teaching: "Give preference to others' needs even when you yourself are in need",
        ayah: 9
      },
      {
        context: "Unity Across Generations",
        teaching: "Make dua for predecessors and don't hold grudges against believers",
        ayah: 10
      },
      {
        context: "Self-Reflection",
        teaching: "Look at what you've sent forward for tomorrow (Hereafter)",
        ayah: 18
      },
      {
        context: "Remembering Allah",
        teaching: "Don't forget Allah or He'll make you forget yourself",
        ayah: 19
      },
      {
        context: "Dhikr with Names",
        teaching: "Contemplate and invoke Allah by His beautiful names",
        ayah: 24
      }
    ]
  },

  uniqueInsight: {
    title: "Ithar: Preferring Others Over Oneself (وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ)",
    insight: "Verse 9 introduces one of Islam's most noble concepts: 'Ithar' (الإيثار) - giving preference to others over oneself even when personally in need. The Ansar (Helpers) of Madinah are praised for loving the emigrants, feeling no jealousy over what they received, and preferring others 'even though they themselves were in need' (وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ). This goes beyond generosity (giving from surplus) to selflessness (giving from what you need). The famous story of an Ansari giving his only food to a guest while his family went hungry exemplifies this. The verse concludes that whoever is protected from the stinginess of their own soul—those are the successful ones. This teaching elevated charity from mere obligation to spiritual excellence.",
    arabicTerm: "وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
    rootMeaning: "أ-ث-ر (to prefer, give precedence) - choosing others' welfare over your own",
    keyAyah: 9
  },

  historicalContext: {
    revelationPeriod: "4 AH, after Battle of Uhud",
    occasion: "The Jewish tribe Banu Nadir broke their treaty with Muslims by attempting to assassinate Prophet Muhammad. When confronted, they were given the choice to leave with their belongings. They initially refused, trusting the hypocrites' promises of support, but when no help came, they surrendered and were expelled.",
    note: "The surah addresses the aftermath of this expulsion—particularly how to distribute the 'fai'' (property acquired without battle). Unlike 'ghanimah' (war booty) which follows specific rules, fai' belongs entirely to the Prophet to distribute for community welfare. This became a foundational principle of Islamic economics: preventing wealth from circulating only among the rich."
  },

  linguisticFeatures: {
    features: [
      { name: "Musabbih Series", description: "Opens with سَبَّحَ (past tense glorification)", pattern: "Part of seven surahs beginning with tasbih", ayah: 1 },
      { name: "Architectural Irony", description: "يُخْرِبُونَ بُيُوتَهُم - destroying their own homes", example: "They demolished what they built to spite Muslims", ayah: 2 },
      { name: "Contrast Formula", description: "لَا يَسْتَوِي - 'Not equal'", example: "Companions of Fire vs Paradise", ayah: 20 },
      { name: "Name Cascade", description: "13+ Divine Names in final verses", pattern: "Rapid succession of attributes", ayahs: [22, 23, 24] },
      { name: "Hypothetical Image", description: "If Quran sent upon a mountain", example: "لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ", ayah: 21 }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Economic Theory",
        observation: "Verse 7's principle 'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ' (so it doesn't circulate only among the rich) anticipates modern economic concerns about wealth concentration",
        ayah: 7
      },
      {
        topic: "Psychological Projection",
        observation: "Verse 19 describes how forgetting Allah leads to forgetting oneself—a profound insight into self-awareness requiring God-consciousness",
        ayah: 19
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 8, name: "Al-Anfal", relationship: "Both address distribution of gains; Anfal focuses on ghanimah, Hashr on fai'", type: "thematic_complement" },
      { surah: 33, name: "Al-Ahzab", relationship: "Both address siege situations and hypocrites' behavior", type: "thematic_parallel" },
      { surah: 63, name: "Al-Munafiqun", relationship: "Both expose hypocrites' true nature", type: "thematic_parallel" },
      { surah: 57, name: "Al-Hadid", relationship: "Both part of Musabbihaat glorification surahs", type: "thematic_series" },
      { surah: 112, name: "Al-Ikhlas", relationship: "Both focus on divine names and attributes", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
