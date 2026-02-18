/**
 * Surah As-Sajdah (32) - Ontology of Quranic Concepts
 * The Prostration - 30 Ayahs, Makkan
 * Theme: Quran is from Allah, creation stages, reward for believers, Day of Judgment
 *
 * Special Note: Prophet Muhammad (peace be upon him) used to recite this surah
 * in Fajr prayer on Fridays, along with Surah Al-Insan (76).
 */

export const ONTOLOGY = {
  surahId: 32,
  surahName: "As-Sajdah",
  surahNameArabic: "السجدة",
  revelationType: "Makki",
  totalAyahs: 30,

  categories: {
    quranAuthority: {
      name: "Authority of the Quran",
      nameArabic: "حجية القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "الم", meaning: "Alif Lam Mim", explanation: "Mysterious letters - only Allah knows their full meaning", verseRef: "32:1" },
        { term: "تَنزِيلُ الْكِتَابِ", meaning: "Revelation of the Book", explanation: "The Quran's divine origin affirmed", verseRef: "32:2" },
        { term: "لَا رَيْبَ فِيهِ", meaning: "No doubt in it", explanation: "Absolute certainty of Quran's truth", verseRef: "32:2" },
        { term: "مِن رَّبِّ الْعَالَمِينَ", meaning: "From Lord of the worlds", explanation: "Universal authority - not just for Arabs", verseRef: "32:2" },
        { term: "أَمْ يَقُولُونَ افْتَرَاهُ", meaning: "Or do they say he invented it?", explanation: "Refuting false claims against the Prophet", verseRef: "32:3" },
        { term: "الْحَقُّ مِن رَّبِّكَ", meaning: "The truth from your Lord", explanation: "Certainty of divine revelation", verseRef: "32:3" }
      ]
    },

    divineCreation: {
      name: "Stages of Divine Creation",
      nameArabic: "مراحل الخلق الإلهي",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: "Created heavens and earth", explanation: "Cosmic creation in six days", verseRef: "32:4" },
        { term: "فِي سِتَّةِ أَيَّامٍ", meaning: "In six days/periods", explanation: "Stages of creation - not human days but divine periods", verseRef: "32:4" },
        { term: "اسْتَوَىٰ عَلَى الْعَرْشِ", meaning: "Established Himself upon the Throne", explanation: "Allah's sovereignty over creation", verseRef: "32:4" },
        { term: "يُدَبِّرُ الْأَمْرَ", meaning: "He arranges the matter", explanation: "Continuous divine governance of all affairs", verseRef: "32:5" },
        { term: "خَلَقَ كُلَّ شَيْءٍ", meaning: "Created everything", explanation: "All-encompassing creation", verseRef: "32:7" }
      ]
    },

    humanCreation: {
      name: "Creation of Mankind",
      nameArabic: "خلق الإنسان",
      color: "#8B5CF6",
      icon: "Users",
      concepts: [
        { term: "أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ", meaning: "Made good everything He created", explanation: "Perfection in all creation", verseRef: "32:7" },
        { term: "بَدَأَ خَلْقَ الْإِنسَانِ مِن طِينٍ", meaning: "Began creation of man from clay", explanation: "Adam's origin from earth", verseRef: "32:7" },
        { term: "مِن سُلَالَةٍ مِّن مَّاءٍ مَّهِينٍ", meaning: "From extract of despised water", explanation: "Human reproduction - humble origins", verseRef: "32:8" },
        { term: "ثُمَّ سَوَّاهُ", meaning: "Then He proportioned him", explanation: "Perfect human form", verseRef: "32:9" },
        { term: "وَنَفَخَ فِيهِ مِن رُّوحِهِ", meaning: "And breathed into him of His Spirit", explanation: "Divine spirit animating humans", verseRef: "32:9" },
        { term: "السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ", meaning: "Hearing, vision, and hearts", explanation: "Three gifts for guidance - use them!", verseRef: "32:9" }
      ]
    },

    disbelieversDoubts: {
      name: "Doubts of Disbelievers",
      nameArabic: "شكوك الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَئِذَا ضَلَلْنَا فِي الْأَرْضِ", meaning: "When we are lost in the earth", explanation: "Doubting resurrection after decomposition", verseRef: "32:10" },
        { term: "أَإِنَّا لَفِي خَلْقٍ جَدِيدٍ", meaning: "Will we be in a new creation?", explanation: "Mocking the concept of resurrection", verseRef: "32:10" },
        { term: "بَلْ هُم بِلِقَاءِ رَبِّهِمْ كَافِرُونَ", meaning: "Rather they deny meeting their Lord", explanation: "Root cause - denial of accountability", verseRef: "32:10" }
      ]
    },

    deathAndResurrection: {
      name: "Death and Resurrection",
      nameArabic: "الموت والبعث",
      color: "#8B5CF6",
      icon: "Sun",
      concepts: [
        { term: "يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ", meaning: "Angel of Death will take you", explanation: "Death is certain - appointed angel", verseRef: "32:11" },
        { term: "الَّذِي وُكِّلَ بِكُمْ", meaning: "Who has been entrusted with you", explanation: "Angel assigned specifically for this task", verseRef: "32:11" },
        { term: "ثُمَّ إِلَىٰ رَبِّكُمْ تُرْجَعُونَ", meaning: "Then to your Lord you will be returned", explanation: "Return to Allah is inevitable", verseRef: "32:11" }
      ]
    },

    dayOfJudgment: {
      name: "The Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "الْمُجْرِمُونَ نَاكِسُو رُءُوسِهِمْ", meaning: "Criminals hanging their heads", explanation: "Shame and humiliation of sinners", verseRef: "32:12" },
        { term: "رَبَّنَا أَبْصَرْنَا وَسَمِعْنَا", meaning: "Our Lord, we have seen and heard", explanation: "Too late confession on Judgment Day", verseRef: "32:12" },
        { term: "فَارْجِعْنَا نَعْمَلْ صَالِحًا", meaning: "So return us, we will do righteousness", explanation: "Futile request for second chance", verseRef: "32:12" },
        { term: "إِنَّا مُوقِنُونَ", meaning: "Indeed, we are now certain", explanation: "Certainty comes too late", verseRef: "32:12" },
        { term: "لَأَمْلَأَنَّ جَهَنَّمَ", meaning: "I will surely fill Hell", explanation: "Divine decree - Hell will be filled", verseRef: "32:13" }
      ]
    },

    believersReward: {
      name: "Reward for Believers",
      nameArabic: "جزاء المؤمنين",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ", meaning: "Their sides forsake beds", explanation: "Night prayer - leaving comfort for worship", verseRef: "32:16" },
        { term: "يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا", meaning: "They call their Lord in fear and hope", explanation: "Balance of khawf (fear) and raja (hope)", verseRef: "32:16" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: "And from what We provided them, they spend", explanation: "Generosity from Allah's provision", verseRef: "32:16" },
        { term: "فَلَا تَعْلَمُ نَفْسٌ مَّا أُخْفِيَ لَهُم", meaning: "No soul knows what is hidden for them", explanation: "Unimaginable rewards await", verseRef: "32:17" },
        { term: "مِّن قُرَّةِ أَعْيُنٍ", meaning: "Of comfort for the eyes", explanation: "Delights beyond imagination", verseRef: "32:17" },
        { term: "جَزَاءً بِمَا كَانُوا يَعْمَلُونَ", meaning: "As reward for what they used to do", explanation: "Direct correlation - deeds and reward", verseRef: "32:17" }
      ]
    },

    believerVsDisbeliever: {
      name: "Believer vs Disbeliever",
      nameArabic: "المؤمن والكافر",
      color: "#8B5CF6",
      icon: "Scale",
      concepts: [
        { term: "أَفَمَن كَانَ مُؤْمِنًا كَمَن كَانَ فَاسِقًا", meaning: "Is one who was a believer like one who was defiantly disobedient?", explanation: "Fundamental inequality", verseRef: "32:18" },
        { term: "لَّا يَسْتَوُونَ", meaning: "They are not equal", explanation: "Clear distinction in ranks", verseRef: "32:18" },
        { term: "جَنَّاتُ الْمَأْوَىٰ", meaning: "Gardens of Refuge", explanation: "Paradise for believers", verseRef: "32:19" },
        { term: "نُزُلًا بِمَا كَانُوا يَعْمَلُونَ", meaning: "As accommodation for what they did", explanation: "Actions determine destination", verseRef: "32:19" },
        { term: "مَّأْوَاهُمُ النَّارُ", meaning: "Their refuge is the Fire", explanation: "Hell for the disobedient", verseRef: "32:20" },
        { term: "ذُوقُوا عَذَابَ النَّارِ", meaning: "Taste the punishment of Fire", explanation: "Experiencing what was denied", verseRef: "32:20" }
      ]
    },

    lesserPunishment: {
      name: "Lesser Punishment",
      nameArabic: "العذاب الأدنى",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلَنُذِيقَنَّهُم مِّنَ الْعَذَابِ الْأَدْنَىٰ", meaning: "We will make them taste the nearer punishment", explanation: "Worldly hardships as warning", verseRef: "32:21" },
        { term: "دُونَ الْعَذَابِ الْأَكْبَرِ", meaning: "Before the greater punishment", explanation: "Greater punishment is in Hereafter", verseRef: "32:21" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: "Perhaps they will return", explanation: "Purpose - repentance and return to Allah", verseRef: "32:21" }
      ]
    },

    turningAway: {
      name: "Turning Away from Truth",
      nameArabic: "الإعراض عن الحق",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَمَنْ أَظْلَمُ مِمَّن ذُكِّرَ بِآيَاتِ رَبِّهِ", meaning: "Who is more unjust than one reminded of his Lord's verses", explanation: "Greatest injustice - ignoring guidance", verseRef: "32:22" },
        { term: "ثُمَّ أَعْرَضَ عَنْهَا", meaning: "Then turns away from them", explanation: "Deliberate rejection after reminder", verseRef: "32:22" },
        { term: "إِنَّا مِنَ الْمُجْرِمِينَ مُنتَقِمُونَ", meaning: "Indeed We will take retribution on the criminals", explanation: "Divine justice will prevail", verseRef: "32:22" }
      ]
    },

    musaAndQuran: {
      name: "Musa and the Quran",
      nameArabic: "موسى والقرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "آتَيْنَا مُوسَى الْكِتَابَ", meaning: "We gave Musa the Scripture", explanation: "Precedent of divine revelation", verseRef: "32:23" },
        { term: "فَلَا تَكُن فِي مِرْيَةٍ مِّن لِّقَائِهِ", meaning: "So be not in doubt about meeting Him", explanation: "Certainty of meeting Allah", verseRef: "32:23" },
        { term: "هُدًى لِّبَنِي إِسْرَائِيلَ", meaning: "Guidance for Children of Israel", explanation: "Torah as guidance for its time", verseRef: "32:23" },
        { term: "أَئِمَّةً يَهْدُونَ بِأَمْرِنَا", meaning: "Leaders guiding by Our command", explanation: "Righteous leadership emerges from patience", verseRef: "32:24" },
        { term: "لَمَّا صَبَرُوا", meaning: "When they were patient", explanation: "Patience prerequisite for leadership", verseRef: "32:24" },
        { term: "وَكَانُوا بِآيَاتِنَا يُوقِنُونَ", meaning: "And they were certain of Our signs", explanation: "Certainty from pondering signs", verseRef: "32:24" }
      ]
    },

    dayOfDecision: {
      name: "The Day of Decision",
      nameArabic: "يوم الفصل",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "يَفْصِلُ بَيْنَهُمْ يَوْمَ الْقِيَامَةِ", meaning: "Will judge between them on Day of Resurrection", explanation: "Final judgment resolves all disputes", verseRef: "32:25" },
        { term: "فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ", meaning: "Concerning that over which they differed", explanation: "All differences settled by Allah", verseRef: "32:25" }
      ]
    },

    lessonsFromHistory: {
      name: "Lessons from Destroyed Nations",
      nameArabic: "عبر من الأمم الهالكة",
      color: "#EF4444",
      icon: "Book",
      concepts: [
        { term: "أَوَلَمْ يَهْدِ لَهُمْ كَمْ أَهْلَكْنَا", meaning: "Has it not guided them how many We destroyed", explanation: "Historical evidence of divine punishment", verseRef: "32:26" },
        { term: "يَمْشُونَ فِي مَسَاكِنِهِمْ", meaning: "They walk in their dwellings", explanation: "Arabs passed by ruins of destroyed nations", verseRef: "32:26" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ", meaning: "Indeed in that are signs", explanation: "Ruins are warning signs", verseRef: "32:26" },
        { term: "أَفَلَا يَسْمَعُونَ", meaning: "Will they not hear?", explanation: "Call to reflect on history", verseRef: "32:26" }
      ]
    },

    signsOfMercy: {
      name: "Signs of Divine Mercy",
      nameArabic: "آيات الرحمة الإلهية",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "نَسُوقُ الْمَاءَ إِلَى الْأَرْضِ الْجُرُزِ", meaning: "We drive water to barren land", explanation: "Water revives dead earth", verseRef: "32:27" },
        { term: "فَنُخْرِجُ بِهِ زَرْعًا", meaning: "Then We bring forth crops", explanation: "Agriculture depends on divine provision", verseRef: "32:27" },
        { term: "تَأْكُلُ مِنْهُ أَنْعَامُهُمْ وَأَنفُسُهُمْ", meaning: "From which their livestock and they eat", explanation: "Allah feeds all creatures", verseRef: "32:27" },
        { term: "أَفَلَا يُبْصِرُونَ", meaning: "Will they not see?", explanation: "Open your eyes to these signs!", verseRef: "32:27" }
      ]
    },

    mockingThePromise: {
      name: "Mockers Demanding Judgment",
      nameArabic: "المستهزئون بالوعد",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "مَتَىٰ هَٰذَا الْفَتْحُ", meaning: "When is this conquest/decision?", explanation: "Mockers demanding the promised judgment", verseRef: "32:28" },
        { term: "إِن كُنتُمْ صَادِقِينَ", meaning: "If you are truthful", explanation: "Challenging the Prophet", verseRef: "32:28" },
        { term: "يَوْمَ الْفَتْحِ", meaning: "Day of Decision/Conquest", explanation: "The appointed time will come", verseRef: "32:29" },
        { term: "لَا يَنفَعُ الَّذِينَ كَفَرُوا إِيمَانُهُمْ", meaning: "Faith of disbelievers will not benefit", explanation: "Too late for faith on that Day", verseRef: "32:29" },
        { term: "وَلَا هُمْ يُنظَرُونَ", meaning: "Nor will they be reprieved", explanation: "No delay or second chance", verseRef: "32:29" }
      ]
    },

    finalCommand: {
      name: "Final Command",
      nameArabic: "الأمر الأخير",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "فَأَعْرِضْ عَنْهُمْ", meaning: "So turn away from them", explanation: "Do not let their mockery affect you", verseRef: "32:30" },
        { term: "وَانتَظِرْ", meaning: "And wait", explanation: "Be patient - victory will come", verseRef: "32:30" },
        { term: "إِنَّهُم مُّنتَظِرُونَ", meaning: "Indeed they are waiting", explanation: "Both sides await - but outcomes differ", verseRef: "32:30" }
      ]
    }
  },

  relationships: [
    { from: "تنزيل الكتاب", to: "لا ريب فيه", type: "quality", description: "Divine revelation is doubt-free" },
    { from: "خلق الإنسان من طين", to: "نفخ فيه من روحه", type: "sequence", description: "Physical then spiritual creation" },
    { from: "السمع والأبصار والأفئدة", to: "قليلاً ما تشكرون", type: "irony", description: "Faculties given but gratitude lacking" },
    { from: "تتجافى جنوبهم", to: "قرة أعين", type: "reward", description: "Night prayer leads to hidden delights" },
    { from: "مؤمناً", to: "فاسقاً", type: "contrast", description: "Believer and disobedient are not equal" },
    { from: "العذاب الأدنى", to: "العذاب الأكبر", type: "progression", description: "Lesser punishment warns of greater" },
    { from: "صبروا", to: "أئمة", type: "cause", description: "Patience leads to leadership" },
    { from: "الماء إلى الأرض الجرز", to: "البعث", type: "analogy", description: "Reviving dead land parallels resurrection" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Authority", verses: "32:1-3", description: "Divine origin affirmed, doubters refuted" },
      { stage: 2, theme: "Cosmic Creation", verses: "32:4-6", description: "Heavens, earth, and divine governance" },
      { stage: 3, theme: "Human Creation", verses: "32:7-9", description: "From clay to spirit - stages of creation" },
      { stage: 4, theme: "Resurrection Doubts", verses: "32:10-11", description: "Disbelievers' denial and Angel of Death" },
      { stage: 5, theme: "Judgment Day Scene", verses: "32:12-14", description: "Criminals' regret and Hell's decree" },
      { stage: 6, theme: "Prostrating Believers", verses: "32:15-17", description: "Those who leave beds for worship - hidden rewards" },
      { stage: 7, theme: "Two Paths", verses: "32:18-22", description: "Believer vs disobedient, Paradise vs Fire" },
      { stage: 8, theme: "Musa's Example", verses: "32:23-25", description: "Torah parallel, patience creates leaders" },
      { stage: 9, theme: "Historical Warnings", verses: "32:26-27", description: "Destroyed nations, signs in nature" },
      { stage: 10, theme: "Final Confrontation", verses: "32:28-30", description: "Mockers' challenge, command to wait" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Pray Tahajjud (night prayer)", how: "Leave your bed at night to worship Allah - the hidden rewards are worth it", verse: "32:16" },
      { principle: "Balance fear and hope", how: "Call upon Allah with both fear of punishment and hope for mercy", verse: "32:16" },
      { principle: "Use your faculties for guidance", how: "Allah gave you hearing, sight, and heart - use them to recognize truth", verse: "32:9" },
      { principle: "Learn from history", how: "Reflect on destroyed nations when you pass their ruins", verse: "32:26" },
      { principle: "Be patient for leadership", how: "True spiritual leadership comes through patience and certainty", verse: "32:24" },
      { principle: "Don't let mockery affect you", how: "Turn away from mockers and wait - Allah's promise is true", verse: "32:30" },
      { principle: "Give from what Allah provides", how: "Spend in charity from your sustenance", verse: "32:16" }
    ]
  },

  uniqueInsight: {
    title: "The Friday Fajr Surah",
    insight: "Prophet Muhammad (peace be upon him) consistently recited this surah in the Friday Fajr prayer alongside Surah Al-Insan (76). Why these two? Both surahs contain: (1) Stages of human creation (32:7-9 and 76:1-2), (2) Description of believers who forsake sleep for worship (32:16 and 76:26), (3) Vivid descriptions of Paradise rewards (32:17 and 76:12-22), (4) Warnings about Judgment Day (32:12-14 and 76:7-10). Together they prepare Muslims for the week ahead by reminding them of their origin, purpose, and destination. The verse about prostration (32:15) includes a sajdah tilawah (prostration of recitation), making it the only surah named after this prostration. This surah teaches that true believers are those whose 'sides forsake their beds' - they sacrifice comfort for worship. The reward? 'No soul knows what is hidden for them of comfort for the eyes' (32:17) - Paradise's delights are beyond imagination."
  },

  historicalContext: {
    note: "This Makki surah was revealed when the Prophet faced intense opposition in Mecca. The Arabs mocked the concept of resurrection, asking 'When we are scattered in the earth, will we be in a new creation?' (32:10). The surah responds by pointing to Allah's power in creation - if He created humans from clay and breathed His spirit into them, resurrection is certainly within His power. The reference to Musa (32:23) connects the Prophet's mission to previous prophets, establishing continuity of revelation. The command to 'turn away and wait' (32:30) provided comfort during persecution - ultimate victory was assured."
  },

  linguisticFeatures: {
    features: [
      { feature: "الم", example: "Huruf Muqatta'at", effect: "Mysterious letters drawing attention to the miraculous Quran" },
      { feature: "تَتَجَافَىٰ", example: "Their sides forsake", effect: "Form VI verb - intensive mutual action, suggesting struggle against sleep" },
      { feature: "قُرَّةِ أَعْيُنٍ", example: "Comfort of eyes", effect: "Idiom for extreme delight - eyes find rest in seeing beloved" },
      { feature: "نَاكِسُو رُءُوسِهِمْ", example: "Hanging their heads", effect: "Active participle - continuous state of shame" },
      { feature: "الْجُرُزِ", example: "Barren land", effect: "Land so dry it has no vegetation at all - then revived" },
      { feature: "مُنتَظِرُونَ", example: "Waiting", effect: "Same word for both parties - but outcomes differ vastly" }
    ]
  },

  sajdahVerse: {
    verse: 15,
    text: "إِنَّمَا يُؤْمِنُ بِآيَاتِنَا الَّذِينَ إِذَا ذُكِّرُوا بِهَا خَرُّوا سُجَّدًا وَسَبَّحُوا بِحَمْدِ رَبِّهِمْ وَهُمْ لَا يَسْتَكْبِرُونَ",
    translation: "Only those believe in Our verses who, when reminded by them, fall down in prostration and exalt with praise of their Lord, and they are not arrogant",
    note: "This is a verse of sajdah (prostration). When reciting or hearing this verse, one should perform sajdah tilawah."
  },

  fridayConnection: {
    practice: "Recited by Prophet in Friday Fajr",
    pairedWith: "Surah Al-Insan (76)",
    wisdom: [
      "Both discuss human creation stages",
      "Both describe believers who worship at night",
      "Both contain vivid Paradise descriptions",
      "Both warn about Judgment Day",
      "Prepare the heart for Friday - best day of the week"
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "32:4", topic: "Creation in six periods", note: "Ayam (days) can mean periods - creation happened in stages" },
      { verse: "32:7-9", topic: "Human development stages", note: "Clay (minerals), fluid (sperm), shaping (embryo), spirit (consciousness)" },
      { verse: "32:9", topic: "Sensory development", note: "Hearing, then sight, then higher cognition - matches fetal development order" },
      { verse: "32:27", topic: "Water cycle", note: "Allah drives water to barren land - describes precipitation and irrigation" }
    ]
  }
};

export default ONTOLOGY;
