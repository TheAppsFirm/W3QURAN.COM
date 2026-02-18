/**
 * Surah Al-Mursalat (77) - Ontology of Quranic Concepts
 * Those Sent Forth
 * Theme: Divine agents (winds/angels), Day of Judgment, denial consequences, famous refrain
 */

export const ONTOLOGY = {
  surahId: 77,
  surahName: "Al-Mursalat",
  surahNameArabic: "المرسلات",
  revelationType: "Makki",
  totalAyahs: 50,

  categories: {
    divineOaths: {
      name: "Oaths by Divine Agents",
      nameArabic: "القسم بالعوامل الإلهية",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "وَالْمُرْسَلَاتِ عُرْفًا", meaning: "Those sent forth in succession", explanation: "Winds/angels sent one after another", verseRef: "77:1" },
        { term: "فَالْعَاصِفَاتِ عَصْفًا", meaning: "Those blowing violently", explanation: "Storming winds or angels", verseRef: "77:2" },
        { term: "وَالنَّاشِرَاتِ نَشْرًا", meaning: "Those spreading", explanation: "Spreading clouds or revelations", verseRef: "77:3" },
        { term: "فَالْفَارِقَاتِ فَرْقًا", meaning: "Those separating", explanation: "Distinguishing truth from falsehood", verseRef: "77:4" },
        { term: "فَالْمُلْقِيَاتِ ذِكْرًا", meaning: "Those delivering reminder", explanation: "Angels delivering revelation", verseRef: "77:5" },
        { term: "عُذْرًا أَوْ نُذْرًا", meaning: "As excuse or warning", explanation: "Purpose: remove excuses, give warnings", verseRef: "77:6" }
      ]
    },

    promiseCertainty: {
      name: "Certainty of Promise",
      nameArabic: "يقينية الوعد",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "إِنَّمَا تُوعَدُونَ لَوَاقِعٌ", meaning: "What you are promised will occur", explanation: "Resurrection is certain", verseRef: "77:7" }
      ]
    },

    cosmicEvents: {
      name: "Cosmic Events of That Day",
      nameArabic: "الأحداث الكونية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "النُّجُومُ طُمِسَتْ", meaning: "Stars extinguished", explanation: "Light sources wiped out", verseRef: "77:8" },
        { term: "السَّمَاءُ فُرِجَتْ", meaning: "Sky split open", explanation: "Heavens torn asunder", verseRef: "77:9" },
        { term: "الْجِبَالُ نُسِفَتْ", meaning: "Mountains blown away", explanation: "Mountains scattered as dust", verseRef: "77:10" },
        { term: "الرُّسُلُ أُقِّتَتْ", meaning: "Messengers gathered", explanation: "Prophets assembled for testimony", verseRef: "77:11" }
      ]
    },

    dayOfSeparation: {
      name: "Day of Separation",
      nameArabic: "يوم الفصل",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "لِأَيِّ يَوْمٍ أُجِّلَتْ", meaning: "For what Day were they postponed?", explanation: "Building suspense about That Day", verseRef: "77:12" },
        { term: "لِيَوْمِ الْفَصْلِ", meaning: "For the Day of Judgment", explanation: "Day when truth is separated from falsehood", verseRef: "77:13" },
        { term: "مَا أَدْرَاكَ مَا يَوْمُ الْفَصْلِ", meaning: "What can make you know?", explanation: "Its severity beyond imagination", verseRef: "77:14" }
      ]
    },

    historicalWarnings: {
      name: "Historical Warnings",
      nameArabic: "التحذيرات التاريخية",
      color: '#EC4899',
      icon: 'Book',
      concepts: [
        { term: "أَلَمْ نُهْلِكِ الْأَوَّلِينَ", meaning: "Did We not destroy the ancients?", explanation: "Past nations destroyed", verseRef: "77:16" },
        { term: "ثُمَّ نُتْبِعُهُمُ الْآخِرِينَ", meaning: "Then followed them with later ones", explanation: "Pattern continues with deniers", verseRef: "77:17" },
        { term: "كَذَٰلِكَ نَفْعَلُ بِالْمُجْرِمِينَ", meaning: "Thus We deal with criminals", explanation: "Divine justice consistent", verseRef: "77:18" }
      ]
    },

    creationProofs: {
      name: "Proofs from Creation",
      nameArabic: "براهين من الخلق",
      color: '#3B82F6',
      icon: 'Users',
      concepts: [
        { term: "أَلَمْ نَخْلُقكُّم مِّن مَّاءٍ مَّهِينٍ", meaning: "Did We not create you from despised fluid?", explanation: "Humble origin of humanity", verseRef: "77:20" },
        { term: "قَرَارٍ مَّكِينٍ", meaning: "Secure resting place", explanation: "Womb as safe container", verseRef: "77:21" },
        { term: "إِلَىٰ قَدَرٍ مَّعْلُومٍ", meaning: "Until known term", explanation: "Precise gestation period", verseRef: "77:22" },
        { term: "فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ", meaning: "We determined - excellent Determiners!", explanation: "Allah's perfect planning", verseRef: "77:23" }
      ]
    },

    earthProofs: {
      name: "Earth as Evidence",
      nameArabic: "الأرض كدليل",
      color: '#22C55E',
      icon: 'Globe',
      concepts: [
        { term: "الْأَرْضَ كِفَاتًا أَحْيَاءً وَأَمْوَاتًا", meaning: "Earth containing living and dead", explanation: "Earth holds both living creatures and corpses", verseRef: "77:25-26" },
        { term: "رَوَاسِيَ شَامِخَاتٍ", meaning: "Towering mountains", explanation: "Mountains firmly rooted", verseRef: "77:27" },
        { term: "مَّاءً فُرَاتًا", meaning: "Sweet water", explanation: "Fresh water for drinking", verseRef: "77:27" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "انطَلِقُوا إِلَىٰ مَا كُنتُم بِهِ تُكَذِّبُونَ", meaning: "Proceed to what you denied", explanation: "Facing denied reality", verseRef: "77:29" },
        { term: "ظِلٍّ ذِي ثَلَاثِ شُعَبٍ", meaning: "Shadow of three branches", explanation: "Smoke splitting into branches", verseRef: "77:30" },
        { term: "لَّا ظَلِيلٍ وَلَا يُغْنِي مِنَ اللَّهَبِ", meaning: "Neither shading nor availing against flame", explanation: "False shade providing no relief", verseRef: "77:31" },
        { term: "تَرْمِي بِشَرَرٍ كَالْقَصْرِ", meaning: "Throws sparks like palaces", explanation: "Sparks as large as buildings", verseRef: "77:32" },
        { term: "كَأَنَّهُ جِمَالَتٌ صُفْرٌ", meaning: "Like yellow/black camels", explanation: "Massive, rope-like sparks", verseRef: "77:33" }
      ]
    },

    silencedDeniers: {
      name: "Silenced Deniers",
      nameArabic: "إسكات المكذبين",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "هَـٰذَا يَوْمُ لَا يَنطِقُونَ", meaning: "This is Day they will not speak", explanation: "Speechless from terror", verseRef: "77:35" },
        { term: "وَلَا يُؤْذَنُ لَهُمْ فَيَعْتَذِرُونَ", meaning: "Not permitted to make excuses", explanation: "No opportunity for excuses", verseRef: "77:36" },
        { term: "فَإِن كَانَ لَكُمْ كَيْدٌ فَكِيدُونِ", meaning: "If you have a plan, plot against Me", explanation: "Challenge to plot against Allah", verseRef: "77:39" }
      ]
    },

    paradiseDescription: {
      name: "Paradise for Righteous",
      nameArabic: "الجنة للمتقين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "الْمُتَّقِينَ فِي ظِلَالٍ وَعُيُونٍ", meaning: "Righteous in shades and springs", explanation: "True shade vs. false Hell shade", verseRef: "77:41" },
        { term: "وَفَوَاكِهَ مِمَّا يَشْتَهُونَ", meaning: "Fruits of their desire", explanation: "Whatever they wish", verseRef: "77:42" },
        { term: "كُلُوا وَاشْرَبُوا هَنِيئًا", meaning: "Eat and drink with satisfaction", explanation: "Reward for good deeds", verseRef: "77:43" },
        { term: "كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ", meaning: "Thus We reward the doers of good", explanation: "Muhsineen rewarded", verseRef: "77:44" }
      ]
    },

    worldlyEnjoyment: {
      name: "Worldly Enjoyment Warning",
      nameArabic: "تحذير التمتع الدنيوي",
      color: '#F59E0B',
      icon: 'AlertTriangle',
      concepts: [
        { term: "كُلُوا وَتَمَتَّعُوا قَلِيلًا", meaning: "Eat and enjoy a little", explanation: "Brief worldly pleasure", verseRef: "77:46" },
        { term: "إِنَّكُم مُّجْرِمُونَ", meaning: "Indeed you are criminals", explanation: "Denial makes them criminals", verseRef: "77:46" }
      ]
    },

    finalRefusal: {
      name: "Final Refusal to Submit",
      nameArabic: "الرفض النهائي للخضوع",
      color: '#EF4444',
      icon: 'MessageCircle',
      concepts: [
        { term: "إِذَا قِيلَ لَهُمُ ارْكَعُوا لَا يَرْكَعُونَ", meaning: "When told 'Bow down,' they bow not", explanation: "Refusing worship/submission", verseRef: "77:48" },
        { term: "فَبِأَيِّ حَدِيثٍ بَعْدَهُ يُؤْمِنُونَ", meaning: "In what message after this will they believe?", explanation: "If Quran rejected, what will convince?", verseRef: "77:50" }
      ]
    }
  },

  refrain: {
    text: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
    meaning: "Woe that Day to the deniers",
    occurrences: [15, 19, 24, 28, 34, 37, 40, 45, 47, 49],
    count: 10,
    significance: "Most repeated refrain in any surah - emphasizes severity of denial"
  },

  relationships: [
    { from: "المرسلات/العاصفات", to: "ذكرا", type: "purpose", description: "Winds and angels sent to deliver reminder" },
    { from: "ما توعدون", to: "يوم الفصل", type: "identity", description: "Promise = Day of Judgment" },
    { from: "نهلك الأولين", to: "نفعل بالمجرمين", type: "pattern", description: "Past destruction = future pattern" },
    { from: "ماء مهين", to: "فنعم القادرون", type: "contrast", description: "Despised fluid → perfect creation shows Allah's power" },
    { from: "ظل ذي ثلاث شعب", to: "ظلال وعيون", type: "contrast", description: "False shade in Hell vs. real shade in Paradise" },
    { from: "ويل للمكذبين (x10)", to: "لا ينطقون", type: "consequence", description: "Denial leads to speechless terror" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Oaths", verses: "77:1-7", description: "Winds/angels sworn, promise certain" },
      { stage: 2, theme: "Cosmic Signs", verses: "77:8-15", description: "Stars, sky, mountains transform; Day of Separation" },
      { stage: 3, theme: "Historical Lesson", verses: "77:16-19", description: "Past nations destroyed; pattern continues" },
      { stage: 4, theme: "Creation Proof", verses: "77:20-28", description: "Human from fluid, earth contains all, mountains, water" },
      { stage: 5, theme: "Hell's Reality", verses: "77:29-40", description: "Three-branched smoke, palace-sized sparks, speechless" },
      { stage: 6, theme: "Paradise Contrast", verses: "77:41-44", description: "Muttaqeen in shades, springs, fruits" },
      { stage: 7, theme: "Final Warning", verses: "77:45-50", description: "Brief enjoyment, refuse to bow, what else will they believe?" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Accept reminders", how: "Angels deliver dhikr - receive it gratefully", verse: "77:5-6" },
      { principle: "Remember your origin", how: "Created from despised fluid - stay humble", verse: "77:20" },
      { principle: "Submit when called", how: "When told to bow (rukoo), bow - don't refuse worship", verse: "77:48" },
      { principle: "Don't enjoy 'a little'", how: "Brief worldly pleasure not worth eternal loss", verse: "77:46" },
      { principle: "Believe in the Quran", how: "If not this, what will you believe?", verse: "77:50" }
    ]
  },

  uniqueInsight: {
    title: "The Ten-Fold Refrain Structure",
    insight: "No other surah has a refrain repeated 10 times. 'Woe that Day to the deniers' (وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ) functions like a hammer striking after each proof: (1) after promise certainty, (2) after historical destruction, (3) after creation proof, (4) after earth signs, (5) after Hell description, (6) after silence, (7) after challenge, (8) after Paradise description, (9) after worldly enjoyment warning, (10) after refusing to bow. The final verse asks: 'In what message after this will they believe?' - if 10 refrains and countless proofs don't convince them, nothing will. The structure creates crescendo of warning, each refrain more devastating than the last."
  },

  linguisticFeatures: {
    features: [
      { feature: "10x Refrain", example: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ", effect: "Hammering emphasis on denial's consequence" },
      { feature: "Five feminine plurals", example: "المرسلات، العاصفات، الناشرات، الفارقات، الملقيات", effect: "Powerful rhythmic oath sequence" },
      { feature: "كِفَاتًا", example: "Container", effect: "Rare word for earth holding life/death" },
      { feature: "شُعَب", example: "Branches", effect: "Hell's smoke dividing into three" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "77:20-22", topic: "Human development", note: "Fluid → womb → measured term - embryological accuracy" },
      { verse: "77:27", topic: "Mountains", note: "رَواسِي (anchors) - mountains stabilizing crust" },
      { verse: "77:25-26", topic: "Earth's function", note: "كِفات - earth 'contains' living on surface, dead beneath" }
    ]
  }
};

export default ONTOLOGY;
