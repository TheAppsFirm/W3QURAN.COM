/**
 * Surah Al-Hujurat (The Chambers) - Surah 49
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 49,
  surahName: "Al-Hujurat",
  surahNameArabic: "الحجرات",
  totalAyahs: 18,
  revelationType: "Medinan",
  mainTheme: "Social Ethics: Etiquette with the Prophet, Verifying News, Brotherhood, Avoiding Mockery and Backbiting, Unity of Humanity",

  categories: {
    etiquetteWithProphet: {
      name: "Etiquette with the Prophet",
      nameAr: "أدب مع الرسول",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Not Preceding Allah and Messenger", arabic: "لا تقدموا بين يدي الله ورسوله", meaning: "Don't put yourselves ahead of Allah and His Messenger", ayahs: [1] },
        { term: "Lowering Voice", arabic: "غض الصوت", meaning: "Lower your voices before the Prophet", ayahs: [2, 3] },
        { term: "Hearts Tested for Taqwa", arabic: "امتحن الله قلوبهم للتقوى", meaning: "Those who lower voices have hearts tested for piety", ayahs: [3] },
        { term: "Calling from Behind Chambers", arabic: "ينادونك من وراء الحجرات", meaning: "Those who call from behind private chambers", ayahs: [4] },
        { term: "Waiting Patiently", arabic: "الصبر حتى يخرج", meaning: "Better to wait until he comes out", ayahs: [5] }
      ]
    },
    verifyingNews: {
      name: "Verifying News and Information",
      nameAr: "التثبت من الأخبار",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Fasiq's Report", arabic: "نبأ الفاسق", meaning: "News brought by a corrupt person", ayahs: [6] },
        { term: "Tabayyun", arabic: "التبين", meaning: "Verification before action", ayahs: [6] },
        { term: "Harming in Ignorance", arabic: "إصابة قوم بجهالة", meaning: "Harming people unknowingly", ayahs: [6] },
        { term: "Regret", arabic: "الندامة", meaning: "Becoming regretful over hasty action", ayahs: [6] }
      ]
    },
    faithBeautified: {
      name: "Faith Beautified in Hearts",
      nameAr: "تزيين الإيمان",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Messenger Among You", arabic: "فيكم رسول الله", meaning: "The Messenger is among you", ayahs: [7] },
        { term: "Allah Beautified Faith", arabic: "حبب إليكم الإيمان وزينه", meaning: "Allah made faith beloved and beautified it", ayahs: [7] },
        { term: "Hatred of Disbelief", arabic: "كره إليكم الكفر والفسوق والعصيان", meaning: "Made disbelief, sin, and disobedience hateful", ayahs: [7] },
        { term: "Ar-Rashidun", arabic: "الراشدون", meaning: "The rightly guided ones", ayahs: [7] }
      ]
    },
    conflictResolution: {
      name: "Conflict Resolution Among Believers",
      nameAr: "إصلاح ذات البين",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Two Groups Fighting", arabic: "طائفتان من المؤمنين اقتتلوا", meaning: "If two parties of believers fight", ayahs: [9] },
        { term: "Islah", arabic: "الإصلاح", meaning: "Making reconciliation between them", ayahs: [9, 10] },
        { term: "Fighting the Aggressor", arabic: "قتال الباغية", meaning: "Fight the transgressing party", ayahs: [9] },
        { term: "Return to Allah's Command", arabic: "الفيء إلى أمر الله", meaning: "Until it returns to Allah's command", ayahs: [9] },
        { term: "Justice in Reconciliation", arabic: "العدل في الإصلاح", meaning: "Reconcile with justice", ayahs: [9] }
      ]
    },
    brotherhood: {
      name: "Brotherhood of Believers",
      nameAr: "أخوة المؤمنين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Believers Are Brothers", arabic: "إنما المؤمنون إخوة", meaning: "Believers are but brothers", ayahs: [10] },
        { term: "Reconcile Brothers", arabic: "أصلحوا بين أخويكم", meaning: "Make peace between your brothers", ayahs: [10] },
        { term: "Taqwa for Mercy", arabic: "التقوى للرحمة", meaning: "Fear Allah that you may receive mercy", ayahs: [10] }
      ]
    },
    socialProhibitions: {
      name: "Social Prohibitions",
      nameAr: "المنهيات الاجتماعية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "No Mockery", arabic: "النهي عن السخرية", meaning: "A people should not mock another", ayahs: [11] },
        { term: "Men Mocking Men", arabic: "سخرية الرجال", meaning: "Men should not mock men", ayahs: [11] },
        { term: "Women Mocking Women", arabic: "سخرية النساء", meaning: "Women should not mock women", ayahs: [11] },
        { term: "The Mocked May Be Better", arabic: "عسى أن يكونوا خيرا منهم", meaning: "Perhaps they are better than them", ayahs: [11] },
        { term: "No Self-Defamation", arabic: "لا تلمزوا أنفسكم", meaning: "Do not defame one another", ayahs: [11] },
        { term: "No Evil Nicknames", arabic: "لا تنابزوا بالألقاب", meaning: "Do not call each other by offensive nicknames", ayahs: [11] },
        { term: "Fisq After Iman", arabic: "الفسوق بعد الإيمان", meaning: "Wretched is the name of disobedience after faith", ayahs: [11] }
      ]
    },
    avoidingSuspicion: {
      name: "Avoiding Suspicion and Backbiting",
      nameAr: "اجتناب الظن والغيبة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Avoid Much Suspicion", arabic: "اجتنبوا كثيرا من الظن", meaning: "Avoid much negative assumption", ayahs: [12] },
        { term: "Some Suspicion is Sin", arabic: "بعض الظن إثم", meaning: "Some suspicion is indeed sinful", ayahs: [12] },
        { term: "No Spying", arabic: "لا تجسسوا", meaning: "Do not spy on one another", ayahs: [12] },
        { term: "No Backbiting", arabic: "لا يغتب بعضكم بعضا", meaning: "Do not backbite one another", ayahs: [12] },
        { term: "Eating Dead Brother's Flesh", arabic: "أكل لحم الأخ ميتا", meaning: "Like eating flesh of dead brother", ayahs: [12] },
        { term: "Disgust at Backbiting", arabic: "فكرهتموه", meaning: "You would hate it", ayahs: [12] }
      ]
    },
    humanUnity: {
      name: "Unity of Humanity",
      nameAr: "وحدة البشرية",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Single Male and Female", arabic: "من ذكر وأنثى", meaning: "Created from one male and one female", ayahs: [13] },
        { term: "Nations and Tribes", arabic: "شعوبا وقبائل", meaning: "Made you peoples and tribes", ayahs: [13] },
        { term: "Li-Ta'arafu", arabic: "لتعارفوا", meaning: "That you may know one another", ayahs: [13] },
        { term: "Honor by Taqwa", arabic: "أكرمكم عند الله أتقاكم", meaning: "Most honorable is the most righteous", ayahs: [13] },
        { term: "Allah is Knowing", arabic: "إن الله عليم خبير", meaning: "Allah is All-Knowing, All-Aware", ayahs: [13] }
      ]
    },
    trueIman: {
      name: "True Faith vs Claimed Faith",
      nameAr: "الإيمان الحقيقي والمدعى",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Islam vs Iman", arabic: "الإسلام والإيمان", meaning: "Distinction between submission and true faith", ayahs: [14] },
        { term: "Bedouins' Claim", arabic: "قالت الأعراب آمنا", meaning: "Bedouins say 'We believe'", ayahs: [14] },
        { term: "Say Aslamna", arabic: "قولوا أسلمنا", meaning: "Say 'We have submitted'", ayahs: [14] },
        { term: "Faith Not Yet Entered Hearts", arabic: "لما يدخل الإيمان في قلوبكم", meaning: "Faith has not yet entered your hearts", ayahs: [14] },
        { term: "True Believers", arabic: "المؤمنون حقا", meaning: "Those who truly believe", ayahs: [15] },
        { term: "Believe Then Don't Doubt", arabic: "آمنوا ثم لم يرتابوا", meaning: "Believed then never doubted", ayahs: [15] },
        { term: "Jihad with Wealth and Lives", arabic: "الجهاد بالأموال والأنفس", meaning: "Strive with wealth and lives", ayahs: [15] },
        { term: "As-Sadiqun", arabic: "الصادقون", meaning: "Those are the truthful ones", ayahs: [15] }
      ]
    },
    divineKnowledge: {
      name: "Divine Knowledge",
      nameAr: "علم الله",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Teaching Allah Your Religion?", arabic: "أتعلمون الله بدينكم", meaning: "Would you inform Allah of your religion?", ayahs: [16] },
        { term: "Allah Knows All", arabic: "يعلم ما في السماوات والأرض", meaning: "Allah knows what is in heavens and earth", ayahs: [16, 18] },
        { term: "Favor of Guidance", arabic: "منة الهداية", meaning: "Do not consider your Islam a favor", ayahs: [17] },
        { term: "Allah's Favor", arabic: "بل الله يمن عليكم", meaning: "Rather Allah has favored you", ayahs: [17] },
        { term: "Ghayb al-Samawat", arabic: "غيب السماوات والأرض", meaning: "Unseen of heavens and earth", ayahs: [18] },
        { term: "Allah Sees All Actions", arabic: "بصير بما تعملون", meaning: "Allah is Seeing of what you do", ayahs: [18] }
      ]
    }
  },

  relationships: [
    { from: "Etiquette with Prophet", to: "Taqwa", type: "result", description: "Proper conduct indicates hearts tested for piety" },
    { from: "Unverified News", to: "Regret", type: "consequence", description: "Acting on unverified news leads to regret" },
    { from: "Verification", to: "Justice", type: "protection", description: "Tabayyun protects from harming innocents" },
    { from: "Believers Fighting", to: "Reconciliation", type: "obligation", description: "Community must reconcile fighting parties" },
    { from: "Brotherhood", to: "Reconciliation", type: "foundation", description: "Brotherhood necessitates making peace" },
    { from: "Mockery", to: "Possible Inferiority", type: "irony", description: "The mocker may be worse than the mocked" },
    { from: "Backbiting", to: "Eating Dead Flesh", type: "analogy", description: "Backbiting is like consuming dead brother's flesh" },
    { from: "Nations and Tribes", to: "Mutual Recognition", type: "purpose", description: "Diversity exists for mutual knowing, not superiority" },
    { from: "Taqwa", to: "True Honor", type: "measure", description: "Honor is measured by piety, not lineage" },
    { from: "Islam", to: "Iman", type: "distinction", description: "Outward submission differs from inner faith" },
    { from: "True Faith", to: "No Doubt + Jihad", type: "evidence", description: "True believers don't doubt and strive with everything" },
    { from: "Claiming Faith", to: "Divine Knowledge", type: "futility", description: "Cannot inform Allah of what He already knows" }
  ],

  thematicFlow: {
    title: "From Prophetic Etiquette to Human Brotherhood",
    stages: [
      { name: "Etiquette with Allah and Messenger", ayahs: [1], description: "Do not precede Allah and His Messenger in any matter" },
      { name: "Lowering Voices", ayahs: [2, 3], description: "Lower voices before Prophet; those who do have hearts tested for taqwa" },
      { name: "Calling from Chambers", ayahs: [4, 5], description: "Those calling from behind chambers lack understanding; patience is better" },
      { name: "Verifying News", ayahs: [6], description: "Verify news from corrupt sources before acting" },
      { name: "Faith Beautified", ayahs: [7, 8], description: "Allah made faith beloved and beautified in believers' hearts" },
      { name: "Conflict Resolution", ayahs: [9], description: "If believers fight, reconcile them; fight aggressors until they comply" },
      { name: "Brotherhood", ayahs: [10], description: "Believers are brothers; reconcile between your brothers" },
      { name: "No Mockery or Nicknames", ayahs: [11], description: "Don't mock, defame, or use offensive nicknames" },
      { name: "No Suspicion or Backbiting", ayahs: [12], description: "Avoid suspicion, spying, and backbiting" },
      { name: "Unity of Humanity", ayahs: [13], description: "Created from one pair; tribes for recognition; honor is by taqwa" },
      { name: "Islam vs Iman", ayahs: [14, 15], description: "Bedouins claimed faith; true believers don't doubt and strive" },
      { name: "Allah's Complete Knowledge", ayahs: [16, 17, 18], description: "Allah knows all; guidance is His favor; He sees everything" }
    ]
  },

  uniqueInsight: {
    title: "Honor is Only by Taqwa (إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ)",
    insight: "Verse 13 revolutionized human social organization. In a world defined by tribal pride, racial superiority, and aristocratic lineage, this verse declared that all humanity came from one man and one woman. The diversity of nations and tribes exists not for competition but for 'ta'aruf'—mutual recognition and learning. The only criterion for honor with Allah is taqwa (God-consciousness), which is invisible to human eyes. No one can claim superiority based on birth, color, language, or wealth. The Prophet (peace be upon him) delivered this verse during his Farewell Pilgrimage, declaring: 'No Arab has superiority over a non-Arab, nor a non-Arab over an Arab; no white person over a black person, nor a black person over a white person—except by taqwa.' This verse remains Islam's definitive statement on human equality.",
    arabicTerm: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ",
    rootMeaning: "ع-ر-ف (to know, recognize) - Tribes exist for mutual recognition (ta'aruf), not pride",
    keyAyah: 13
  },

  historicalContext: {
    revelationPeriod: "Medinan period, after 9 AH (Year of Delegations)",
    occasion: "Multiple incidents: (1) Some companions spoke ahead of the Prophet or raised their voices in his presence. (2) Al-Walid ibn Uqba brought false news about Banu al-Mustaliq, nearly causing war. (3) Bedouin delegations came claiming faith while having ulterior motives. (4) The incident of people calling the Prophet from outside his chambers. These events prompted guidance on social etiquette and community ethics.",
    note: "This surah is called 'Surah al-Akhlaq' (The Surah of Manners) because it establishes fundamental principles of Islamic social ethics. It addressed the new reality of diverse tribes and backgrounds joining Islam, establishing equality and proper conduct as foundations of the Muslim community."
  },

  linguisticFeatures: {
    features: [
      { name: "Ya Ayyuhalladhina Amanu", description: "يا أيها الذين آمنوا", example: "Five direct addresses to believers (1, 6, 9, 11, 12)", ayahs: [1, 6, 9, 11, 12] },
      { name: "Ya Ayyuhan-Nas", description: "يا أيها الناس", example: "One universal address to all humanity", ayah: 13 },
      { name: "Vivid Analogy", description: "أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا", example: "Backbiting as eating dead brother's flesh", ayah: 12 },
      { name: "Rhetorical Question", description: "أَتُعَلِّمُونَ اللَّهَ بِدِينِكُمْ", example: "Would you teach Allah your religion?", ayah: 16 },
      { name: "Inna + Emphasis", description: "إنما المؤمنون إخوة", example: "Believers are ONLY brothers", ayah: 10 },
      { name: "Prohibition Series", description: "لا يسخر...لا تلمزوا...لا تنابزوا", example: "Rapid-fire prohibitions", ayah: 11 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 24, name: "An-Nur", relationship: "Both address social ethics, privacy, and backbiting", type: "thematic_parallel" },
      { surah: 33, name: "Al-Ahzab", relationship: "Both address etiquette with the Prophet", type: "thematic_parallel" },
      { surah: 48, name: "Al-Fath", relationship: "Both from late Medinan period; victory and community consolidation", type: "historical_parallel" },
      { surah: 58, name: "Al-Mujadila", relationship: "Both address social protocols and private conversations", type: "thematic_parallel" },
      { surah: 60, name: "Al-Mumtahina", relationship: "Both from Year of Delegations; community relations", type: "historical_parallel" },
      { surah: 104, name: "Al-Humazah", relationship: "Both condemn mockery and defamation", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
