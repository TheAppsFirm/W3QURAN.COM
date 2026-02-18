/**
 * Surah Al-Mulk (67) - Ontology of Quranic Concepts
 * The Sovereignty / Dominion
 * Theme: Allah's sovereignty, perfect creation, accountability, blessings
 */

export const ONTOLOGY = {
  surahId: 67,
  surahName: "Al-Mulk",
  surahNameArabic: "الملك",
  revelationType: "Makki",
  totalAyahs: 30,

  categories: {
    divineSovereignty: {
      name: "Divine Sovereignty",
      nameArabic: "الملك الإلهي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ", meaning: "Blessed is He in Whose Hand is dominion", explanation: "Opening declaration of Allah's absolute control", verseRef: "67:1" },
        { term: "عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: "Over all things competent", explanation: "Unlimited divine power", verseRef: "67:1" }
      ]
    },

    purposeOfLife: {
      name: "Purpose of Life",
      nameArabic: "الحكمة من الخلق",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "خَلَقَ الْمَوْتَ وَالْحَيَاةَ", meaning: "Created death and life", explanation: "Death mentioned first - reminder of return to Allah", verseRef: "67:2" },
        { term: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا", meaning: "To test you - which is best in deed", explanation: "Life is a test of quality, not quantity", verseRef: "67:2" },
        { term: "الْعَزِيزُ الْغَفُورُ", meaning: "The Mighty, the Forgiving", explanation: "Power to punish, yet chooses to forgive", verseRef: "67:2" }
      ]
    },

    perfectCreation: {
      name: "Perfection of Creation",
      nameArabic: "كمال الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "سَبْعَ سَمَاوَاتٍ طِبَاقًا", meaning: "Seven heavens in layers", explanation: "Multi-layered cosmic structure", verseRef: "67:3" },
        { term: "مَا تَرَىٰ... مِن تَفَاوُتٍ", meaning: "You see no inconsistency", explanation: "No flaws in creation", verseRef: "67:3" },
        { term: "فَارْجِعِ الْبَصَرَ", meaning: "Return your vision", explanation: "Challenge to find any flaw", verseRef: "67:3" },
        { term: "يَنقَلِبْ... خَاسِئًا وَهُوَ حَسِيرٌ", meaning: "Returns humbled and fatigued", explanation: "Vision returns unable to find defect", verseRef: "67:4" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs",
      nameArabic: "الآيات الكونية",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "زَيَّنَّا السَّمَاءَ... بِمَصَابِيحَ", meaning: "Adorned heaven with lamps", explanation: "Stars as decoration and guidance", verseRef: "67:5" },
        { term: "رُجُومًا لِّلشَّيَاطِينِ", meaning: "Missiles for devils", explanation: "Stars protect against eavesdropping jinn", verseRef: "67:5" },
        { term: "الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ", meaning: "Birds spreading and folding wings", explanation: "Only Allah holds them aloft", verseRef: "67:19" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "عَذَابُ جَهَنَّمَ", meaning: "Punishment of Hell", explanation: "Prepared for disbelievers", verseRef: "67:6" },
        { term: "سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ", meaning: "They hear inhaling while it boils", explanation: "Hell has sound and heat", verseRef: "67:7" },
        { term: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ", meaning: "Almost bursting from rage", explanation: "Hell itself is angry at sinners", verseRef: "67:8" },
        { term: "أَلَمْ يَأْتِكُمْ نَذِيرٌ", meaning: "Did not a warner come to you?", explanation: "Hell's keepers question new arrivals", verseRef: "67:8" }
      ]
    },

    admissionOfGuilt: {
      name: "Admission of Guilt",
      nameArabic: "الاعتراف بالذنب",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ", meaning: "We denied and said Allah sent nothing", explanation: "Admission of rejecting truth", verseRef: "67:9" },
        { term: "لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ", meaning: "If only we had listened or reasoned", explanation: "Regret for not using intellect", verseRef: "67:10" },
        { term: "فَاعْتَرَفُوا بِذَنبِهِمْ", meaning: "So they will admit their sin", explanation: "Too late confession", verseRef: "67:11" },
        { term: "فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ", meaning: "Away with companions of Blaze", explanation: "Curse upon them", verseRef: "67:11" }
      ]
    },

    rewardForRighteous: {
      name: "Reward for Righteous",
      nameArabic: "جزاء المتقين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ", meaning: "Fear their Lord unseen", explanation: "Faith without physical seeing", verseRef: "67:12" },
        { term: "مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ", meaning: "Forgiveness and great reward", explanation: "Double blessing for believers", verseRef: "67:12" }
      ]
    },

    divineKnowledge: {
      name: "Divine Knowledge",
      nameArabic: "العلم الإلهي",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "أَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ", meaning: "Conceal or publicize your speech", explanation: "Allah hears all regardless", verseRef: "67:13" },
        { term: "عَلِيمٌ بِذَاتِ الصُّدُورِ", meaning: "Knowing of what is within breasts", explanation: "Allah knows even thoughts", verseRef: "67:13" },
        { term: "أَلَا يَعْلَمُ مَنْ خَلَقَ", meaning: "Would He not know who created?", explanation: "Creator knows creation intimately", verseRef: "67:14" },
        { term: "اللَّطِيفُ الْخَبِيرُ", meaning: "The Subtle, the Aware", explanation: "Knows finest details", verseRef: "67:14" }
      ]
    },

    earthlyBlessings: {
      name: "Earthly Blessings",
      nameArabic: "نعم الأرض",
      color: '#22C55E',
      icon: 'Globe',
      concepts: [
        { term: "جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا", meaning: "Made the earth tame for you", explanation: "Earth submits to human use", verseRef: "67:15" },
        { term: "فَامْشُوا فِي مَنَاكِبِهَا", meaning: "Walk among its paths", explanation: "Travel and explore freely", verseRef: "67:15" },
        { term: "وَكُلُوا مِن رِّزْقِهِ", meaning: "Eat from His provision", explanation: "All sustenance is from Allah", verseRef: "67:15" },
        { term: "وَإِلَيْهِ النُّشُورُ", meaning: "And to Him is resurrection", explanation: "Reminder amid blessings", verseRef: "67:15" }
      ]
    },

    divineWarnings: {
      name: "Divine Warnings",
      nameArabic: "التحذيرات الإلهية",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "أَن يَخْسِفَ بِكُمُ الْأَرْضَ", meaning: "To make the earth swallow you", explanation: "Earth can turn against you", verseRef: "67:16" },
        { term: "يُرْسِلَ عَلَيْكُمْ حَاصِبًا", meaning: "Send upon you a storm of stones", explanation: "Divine punishment from sky", verseRef: "67:17" },
        { term: "وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ", meaning: "Already denied those before them", explanation: "Historical precedent of destruction", verseRef: "67:18" },
        { term: "فَكَيْفَ كَانَ نَكِيرِ", meaning: "How was My rejection", explanation: "Rhetorical - punishment was severe", verseRef: "67:18" }
      ]
    },

    humanDependence: {
      name: "Human Dependence on Allah",
      nameArabic: "اعتماد البشر على الله",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ", meaning: "None holds them except the Most Merciful", explanation: "Birds' flight depends on Allah", verseRef: "67:19" },
        { term: "أَمَّنْ هَٰذَا الَّذِي... يَنصُرُكُم", meaning: "Who is this that would help you?", explanation: "No army can help against Allah", verseRef: "67:20" },
        { term: "يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ", meaning: "Would provide if He withheld provision", explanation: "All sustenance is from Allah alone", verseRef: "67:21" }
      ]
    },

    twoPaths: {
      name: "Two Paths",
      nameArabic: "الطريقان",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "مُكِبًّا عَلَىٰ وَجْهِهِ", meaning: "Fallen on his face", explanation: "Disbeliever walks blind and stumbling", verseRef: "67:22" },
        { term: "يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: "Walks upright on straight path", explanation: "Believer walks guided and stable", verseRef: "67:22" }
      ]
    },

    humanFaculties: {
      name: "Human Faculties",
      nameArabic: "قدرات الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "أَنشَأَكُمْ", meaning: "Produced you", explanation: "Allah originated creation", verseRef: "67:23" },
        { term: "السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ", meaning: "Hearing, vision, and hearts", explanation: "Three gifts - use for guidance", verseRef: "67:23" },
        { term: "قَلِيلًا مَّا تَشْكُرُونَ", meaning: "Little you are grateful", explanation: "Ingratitude for blessings", verseRef: "67:23" }
      ]
    },

    finalDestination: {
      name: "Final Destination",
      nameArabic: "المصير النهائي",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "ذَرَأَكُمْ فِي الْأَرْضِ", meaning: "Dispersed you in earth", explanation: "Spread humanity across earth", verseRef: "67:24" },
        { term: "وَإِلَيْهِ تُحْشَرُونَ", meaning: "And to Him you will be gathered", explanation: "All return to Allah", verseRef: "67:24" },
        { term: "مَتَىٰ هَٰذَا الْوَعْدُ", meaning: "When is this promise?", explanation: "Mockers demanding date", verseRef: "67:25" },
        { term: "إِنَّمَا الْعِلْمُ عِندَ اللَّهِ", meaning: "Knowledge is only with Allah", explanation: "Only Allah knows timing", verseRef: "67:26" }
      ]
    },

    waterBlessing: {
      name: "The Water Blessing",
      nameArabic: "نعمة الماء",
      color: '#06B6D4',
      icon: 'Sparkles',
      concepts: [
        { term: "إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا", meaning: "If your water becomes sunken", explanation: "Water could disappear into earth", verseRef: "67:30" },
        { term: "فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ", meaning: "Who could bring you flowing water?", explanation: "Only Allah provides water - final rhetorical question", verseRef: "67:30" }
      ]
    }
  },

  relationships: [
    { from: "بيده الملك", to: "قدير", type: "expansion", description: "Dominion implies power over all" },
    { from: "الموت والحياة", to: "ليبلوكم", type: "purpose", description: "Life/death exist for testing" },
    { from: "تفاوت/فطور", to: "خاسئاً حسير", type: "result", description: "Searching for flaws leads to failure" },
    { from: "نسمع أو نعقل", to: "أصحاب السعير", type: "cause", description: "Ignoring faculties leads to Hell" },
    { from: "يخشون بالغيب", to: "مغفرة وأجر", type: "reward", description: "Fear leads to forgiveness" },
    { from: "مكباً على وجهه", to: "سوياً على صراط", type: "contrast", description: "Disbeliever vs believer paths" },
    { from: "السمع والأبصار والأفئدة", to: "قليلاً ما تشكرون", type: "irony", description: "Faculties given but gratitude lacking" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Sovereignty", verses: "67:1-2", description: "Allah's dominion and purpose of life" },
      { stage: 2, theme: "Perfect Creation", verses: "67:3-5", description: "Flawless heavens, stars as lamps" },
      { stage: 3, theme: "Hell's Questioning", verses: "67:6-11", description: "Disbelievers' admission of guilt" },
      { stage: 4, theme: "Believer's Reward", verses: "67:12-14", description: "Fear unseen, Allah's knowledge" },
      { stage: 5, theme: "Earth's Blessings", verses: "67:15-21", description: "Tame earth, provision, dependence" },
      { stage: 6, theme: "Two Paths", verses: "67:22-24", description: "Stumbling vs upright walking" },
      { stage: 7, theme: "Final Questions", verses: "67:25-30", description: "When? Only Allah knows; water blessing" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Focus on quality of deeds", how: "Best in deed, not most in deed", verse: "67:2" },
      { principle: "Contemplate creation", how: "Look at sky repeatedly - see perfection", verse: "67:3-4" },
      { principle: "Use intellect", how: "Listen and reason - don't be like Hell's residents", verse: "67:10" },
      { principle: "Fear Allah privately", how: "Fear Him in the unseen - when alone", verse: "67:12" },
      { principle: "Guard thoughts", how: "Allah knows what's in hearts - purify intentions", verse: "67:13" },
      { principle: "Be grateful for senses", how: "Thank Allah for hearing, sight, hearts", verse: "67:23" },
      { principle: "Remember water blessing", how: "Don't take water for granted", verse: "67:30" }
    ]
  },

  uniqueInsight: {
    title: "The Protective Surah",
    insight: "Prophet Muhammad ﷺ said about this surah: 'There is a surah in the Quran of thirty verses that interceded for a man until he was forgiven. It is Tabarak alladhi biyadihil-mulk' (Tirmidhi). Known as 'al-Munjiyah' (the Savior) and 'al-Mani'ah' (the Protector), this surah is recommended to recite every night before sleep. Its structure is remarkable: it begins with Allah's sovereignty (v.1), questions human purpose (v.2), demonstrates perfect creation (v.3-5), warns of Hell (v.6-11), promises reward (v.12), and ends with ultimate dependence - water (v.30). The final question 'Who could bring you flowing water?' encapsulates the entire surah's message: complete dependence on Allah for everything, from cosmic order to daily water."
  },

  historicalContext: {
    note: "This Makki surah addresses the fundamental belief in Allah's sovereignty and the reality of accountability. The challenge to find flaws in creation (v.3-4) addresses Arab polytheists who believed in multiple gods for different functions. The reference to water 'becoming sunken' (v.30) would resonate deeply with desert Arabs entirely dependent on wells and springs. The surah is sometimes called 'Tabarak' (Blessed) after its opening word."
  },

  linguisticFeatures: {
    features: [
      { feature: "تَبَارَكَ", example: "Form VI verb", effect: "Intensive blessing - continuously blessed" },
      { feature: "طِبَاقًا", example: "Layers", effect: "From طَبَق - stacked one upon another" },
      { feature: "خَاسِئًا حَسِيرًا", example: "Humbled and fatigued", effect: "Rhyming adjectives - complete failure" },
      { feature: "شَهِيق", example: "Inhaling sound", effect: "Onomatopoeia - Hell's gasping" },
      { feature: "ذَلُولًا", example: "Submissive/tame", effect: "faʿūl pattern - thoroughly tamed" },
      { feature: "مَّعِين", example: "Flowing (water)", effect: "From عَيْن - visible, abundant spring" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "67:3", topic: "Layered heavens", note: "Seven layers - correlates with atmosphere layers or cosmic structure" },
      { verse: "67:5", topic: "Stars as missiles", note: "Meteors ('shooting stars') visible phenomena guarding space" },
      { verse: "67:15", topic: "Tame earth", note: "Earth's crust stable enough for habitation despite inner molten core" },
      { verse: "67:19", topic: "Bird flight", note: "Aerodynamics requires precise conditions Allah maintains" },
      { verse: "67:30", topic: "Groundwater", note: "Water table can recede - aquifers are finite resources" }
    ]
  }
};

export default ONTOLOGY;
