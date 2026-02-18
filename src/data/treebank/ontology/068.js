/**
 * Surah Al-Qalam (68) - Ontology of Quranic Concepts
 * The Pen
 * Theme: Defense of Prophet's character, story of Garden owners, fate of deniers
 */

export const ONTOLOGY = {
  surahId: 68,
  surahName: "Al-Qalam",
  surahNameArabic: "القلم",
  revelationType: "Makki",
  totalAyahs: 52,

  categories: {
    divineOath: {
      name: "Divine Oath by the Pen",
      nameArabic: "القسم بالقلم",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "ن", meaning: "Nun (disconnected letter)", explanation: "One of the mysterious letters of Quran", verseRef: "68:1" },
        { term: "وَالْقَلَمِ", meaning: "By the Pen", explanation: "Oath by writing instrument - symbol of knowledge", verseRef: "68:1" },
        { term: "وَمَا يَسْطُرُونَ", meaning: "And what they inscribe", explanation: "Angels recording deeds or writers writing", verseRef: "68:1" }
      ]
    },

    prophetDefense: {
      name: "Defense of Prophet's Character",
      nameArabic: "الدفاع عن خلق النبي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "مَا أَنتَ بِمَجْنُونٍ", meaning: "You are not a madman", explanation: "Refuting disbelievers' accusation", verseRef: "68:2" },
        { term: "أَجْرًا غَيْرَ مَمْنُونٍ", meaning: "Uninterrupted reward", explanation: "Endless reward for Prophet", verseRef: "68:3" },
        { term: "خُلُقٍ عَظِيمٍ", meaning: "Exalted character", explanation: "Prophet's supreme moral character", verseRef: "68:4" }
      ]
    },

    futureVindication: {
      name: "Future Vindication",
      nameArabic: "التبرئة المستقبلية",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "فَسَتُبْصِرُ وَيُبْصِرُونَ", meaning: "You will see and they will see", explanation: "Truth will become clear", verseRef: "68:5" },
        { term: "بِأَييِّكُمُ الْمَفْتُونُ", meaning: "Which of you is afflicted", explanation: "Who is truly insane will be revealed", verseRef: "68:6" },
        { term: "هُوَ أَعْلَمُ بِمَن ضَلَّ", meaning: "He knows who strayed", explanation: "Allah knows the truly misguided", verseRef: "68:7" }
      ]
    },

    evilCharacteristics: {
      name: "Evil Characteristics to Avoid",
      nameArabic: "الصفات السيئة للتجنب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "حَلَّافٍ مَّهِينٍ", meaning: "Excessive swearer, despicable", explanation: "One who swears too much is degraded", verseRef: "68:10" },
        { term: "هَمَّازٍ مَّشَّاءٍ بِنَمِيمٍ", meaning: "Slanderer, spreader of gossip", explanation: "Backbiter who spreads malicious talk", verseRef: "68:11" },
        { term: "مَّنَّاعٍ لِّلْخَيْرِ", meaning: "Preventer of good", explanation: "One who blocks charity and goodness", verseRef: "68:12" },
        { term: "مُعْتَدٍ أَثِيمٍ", meaning: "Transgressor, sinful", explanation: "Aggressive and sinful person", verseRef: "68:12" },
        { term: "عُتُلٍّ... زَنِيمٍ", meaning: "Cruel, outcast", explanation: "Harsh and of doubtful origin", verseRef: "68:13" }
      ]
    },

    wealthArrogance: {
      name: "Wealth and Arrogance",
      nameArabic: "المال والغرور",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ذَا مَالٍ وَبَنِينَ", meaning: "Owner of wealth and children", explanation: "Material blessings shouldn't cause arrogance", verseRef: "68:14" },
        { term: "أَسَاطِيرُ الْأَوَّلِينَ", meaning: "Legends of the ancients", explanation: "Dismissing Quran as old stories", verseRef: "68:15" },
        { term: "سَنَسِمُهُ عَلَى الْخُرْطُومِ", meaning: "We will brand him on snout", explanation: "Disgrace on Day of Judgment", verseRef: "68:16" }
      ]
    },

    gardenOwners: {
      name: "Story of the Garden Owners",
      nameArabic: "قصة أصحاب الجنة",
      color: '#22C55E',
      icon: 'Book',
      concepts: [
        { term: "أَصْحَابَ الْجَنَّةِ", meaning: "Companions of the garden", explanation: "Wealthy garden owners who excluded poor", verseRef: "68:17" },
        { term: "لَيَصْرِمُنَّهَا مُصْبِحِينَ", meaning: "To harvest at morning", explanation: "Planned to pick fruit before poor arrived", verseRef: "68:17" },
        { term: "وَلَا يَسْتَثْنُونَ", meaning: "Without saying 'In sha Allah'", explanation: "Failed to say 'If Allah wills'", verseRef: "68:18" },
        { term: "طَائِفٌ مِّن رَّبِّكَ", meaning: "A visitor from your Lord", explanation: "Night calamity destroyed garden", verseRef: "68:19" },
        { term: "فَأَصْبَحَتْ كَالصَّرِيمِ", meaning: "Became like one harvested", explanation: "Garden became black, burnt", verseRef: "68:20" }
      ]
    },

    gardenOwnersRemorse: {
      name: "The Garden Owners' Remorse",
      nameArabic: "ندم أصحاب الجنة",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "لَا يَدْخُلَنَّهَا... مِّسْكِينٌ", meaning: "No poor person will enter", explanation: "Their selfish intention", verseRef: "68:24" },
        { term: "إِنَّا لَضَالُّونَ", meaning: "Indeed we are lost", explanation: "First thought - wrong place", verseRef: "68:26" },
        { term: "بَلْ نَحْنُ مَحْرُومُونَ", meaning: "Rather, we are deprived", explanation: "Realization of their loss", verseRef: "68:27" },
        { term: "لَوْلَا تُسَبِّحُونَ", meaning: "Why do you not glorify Allah?", explanation: "The moderate one's reminder", verseRef: "68:28" },
        { term: "سُبْحَانَ رَبِّنَا", meaning: "Glory be to our Lord", explanation: "Their repentance", verseRef: "68:29" },
        { term: "إِنَّا كُنَّا ظَالِمِينَ", meaning: "Indeed we were wrongdoers", explanation: "Admission of wrong", verseRef: "68:29" }
      ]
    },

    muslimsVsCriminals: {
      name: "Muslims vs Criminals",
      nameArabic: "المسلمون مقابل المجرمين",
      color: '#10B981',
      icon: 'Scale',
      concepts: [
        { term: "جَنَّاتِ النَّعِيمِ", meaning: "Gardens of Pleasure", explanation: "Reward for the righteous", verseRef: "68:34" },
        { term: "أَفَنَجْعَلُ الْمُسْلِمِينَ كَالْمُجْرِمِينَ", meaning: "Will We treat Muslims like criminals?", explanation: "Rhetorical - justice demands difference", verseRef: "68:35" },
        { term: "مَا لَكُمْ كَيْفَ تَحْكُمُونَ", meaning: "What is wrong with you? How do you judge?", explanation: "Challenging false logic", verseRef: "68:36" }
      ]
    },

    rhetoricalQuestions: {
      name: "Rhetorical Questions",
      nameArabic: "الأسئلة البلاغية",
      color: '#06B6D4',
      icon: 'MessageCircle',
      concepts: [
        { term: "أَمْ لَكُمْ كِتَابٌ فِيهِ تَدْرُسُونَ", meaning: "Do you have a book you study?", explanation: "No scriptural basis for their claims", verseRef: "68:37" },
        { term: "أَمْ لَكُمْ أَيْمَانٌ عَلَيْنَا", meaning: "Do you have oaths from Us?", explanation: "No divine guarantee for their desires", verseRef: "68:39" },
        { term: "أَمْ لَهُمْ شُرَكَاءُ", meaning: "Do they have partners?", explanation: "No partners can help them", verseRef: "68:41" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "يَوْمَ يُكْشَفُ عَن سَاقٍ", meaning: "Day the shin is exposed", explanation: "Metaphor for severe difficulty", verseRef: "68:42" },
        { term: "يُدْعَوْنَ إِلَى السُّجُودِ فَلَا يَسْتَطِيعُونَ", meaning: "Called to prostrate but cannot", explanation: "Unable to bow as they refused in life", verseRef: "68:42" },
        { term: "خَاشِعَةً أَبْصَارُهُمْ", meaning: "Their eyes humbled", explanation: "Downcast in shame", verseRef: "68:43" },
        { term: "تَرْهَقُهُمْ ذِلَّةٌ", meaning: "Humiliation covers them", explanation: "Overwhelmed by disgrace", verseRef: "68:43" }
      ]
    },

    divineStrategy: {
      name: "Divine Strategy",
      nameArabic: "الاستدراج الإلهي",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "سَنَسْتَدْرِجُهُم", meaning: "We will progressively lead them", explanation: "Gradual approach to punishment", verseRef: "68:44" },
        { term: "مِّنْ حَيْثُ لَا يَعْلَمُونَ", meaning: "From where they don't know", explanation: "Unaware of their downfall", verseRef: "68:44" },
        { term: "وَأُمْلِي لَهُمْ", meaning: "I give them respite", explanation: "Time is given before punishment", verseRef: "68:45" },
        { term: "إِنَّ كَيْدِي مَتِينٌ", meaning: "My plan is firm", explanation: "Allah's strategy is unbreakable", verseRef: "68:45" }
      ]
    },

    prophetYunus: {
      name: "Reference to Prophet Yunus",
      nameArabic: "ذكر سيدنا يونس",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "صَاحِبِ الْحُوتِ", meaning: "Companion of the fish", explanation: "Prophet Yunus (Jonah)", verseRef: "68:48" },
        { term: "إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ", meaning: "When he called while distressed", explanation: "Called to Allah from fish's belly", verseRef: "68:48" },
        { term: "تَدَارَكَهُ نِعْمَةٌ مِّن رَّبِّهِ", meaning: "Favor from Lord overtook him", explanation: "Allah's mercy saved him", verseRef: "68:49" },
        { term: "فَاجْتَبَاهُ رَبُّهُ", meaning: "His Lord chose him", explanation: "Became among the righteous", verseRef: "68:50" }
      ]
    },

    evilEye: {
      name: "The Evil Eye",
      nameArabic: "العين الحاسدة",
      color: '#EC4899',
      icon: 'Shield',
      concepts: [
        { term: "لَيُزْلِقُونَكَ بِأَبْصَارِهِمْ", meaning: "They would make you slip with their eyes", explanation: "Evil eye of envy and hatred", verseRef: "68:51" },
        { term: "إِنَّهُ لَمَجْنُونٌ", meaning: "He is surely mad", explanation: "Accusation of madness repeated", verseRef: "68:51" },
        { term: "ذِكْرٌ لِّلْعَالَمِينَ", meaning: "Reminder for all worlds", explanation: "Quran is universal guidance", verseRef: "68:52" }
      ]
    }
  },

  relationships: [
    { from: "بمجنون", to: "خلق عظيم", type: "contrast", description: "Accusation refuted by praising his character" },
    { from: "أصحاب الجنة", to: "أهل مكة", type: "parallel", description: "Garden owners' arrogance mirrors Meccan disbelievers" },
    { from: "ولا يستثنون", to: "سبحان ربنا", type: "progression", description: "From forgetting Allah to glorifying Him" },
    { from: "المسلمين كالمجرمين", to: "جنات النعيم", type: "contrast", description: "Different outcomes for different groups" },
    { from: "صاحب الحوت", to: "فاصبر لحكم ربك", type: "lesson", description: "Yunus' impatience - lesson for Prophet Muhammad" },
    { from: "لمجنون (v.2)", to: "لمجنون (v.51)", type: "bookend", description: "Same accusation at start and end, both refuted" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Oath & Defense", verses: "68:1-7", description: "Oath by pen, Prophet not mad, exalted character" },
      { stage: 2, theme: "Evil Character Traits", verses: "68:8-16", description: "Nine negative traits to avoid" },
      { stage: 3, theme: "Garden Owners Story", verses: "68:17-33", description: "Parable of those who excluded the poor" },
      { stage: 4, theme: "Muslim vs Criminal", verses: "68:34-41", description: "Rhetorical questions challenging false logic" },
      { stage: 5, theme: "Day of Judgment", verses: "68:42-47", description: "Unable to prostrate, divine strategy" },
      { stage: 6, theme: "Patience & Conclusion", verses: "68:48-52", description: "Yunus reference, evil eye, universal message" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Value of knowledge", how: "The pen is honored - seek and spread knowledge", verse: "68:1" },
      { principle: "Noble character", how: "Develop beautiful manners like Prophet Muhammad", verse: "68:4" },
      { principle: "Avoid evil speech", how: "Don't swear excessively, don't gossip, don't slander", verse: "68:10-11" },
      { principle: "Share wealth with poor", how: "Don't hoard wealth or exclude the needy", verse: "68:17-25" },
      { principle: "Say 'In sha Allah'", how: "Always acknowledge Allah's will in plans", verse: "68:18" },
      { principle: "Repent quickly", how: "Like garden owners - admit wrong, seek forgiveness", verse: "68:29" },
      { principle: "Patience in adversity", how: "Don't abandon mission like Yunus initially did", verse: "68:48" }
    ]
  },

  uniqueInsight: {
    title: "The Nine Evil Traits Portrait",
    insight: "Verses 10-13 paint a comprehensive portrait of a despicable person using nine characteristics: (1) حَلَّاف - excessive swearer, (2) مَهِين - despicable, (3) هَمَّاز - slanderer, (4) مَشَّاء بِنَمِيم - spreader of gossip, (5) مَنَّاع لِلْخَيْر - blocker of good, (6) مُعْتَد - transgressor, (7) أَثِيم - sinful, (8) عُتُل - harsh/cruel, (9) زَنِيم - ignoble outcast. These are contrasted with Prophet Muhammad's 'خُلُق عَظِيم' (exalted character) in verse 4. The surah teaches that wealth and children (verse 14) mean nothing if accompanied by these traits. The structure is deliberate: one positive trait vs. nine negative traits emphasizes that one good character outweighs many bad ones - quality over quantity in morality."
  },

  historicalContext: {
    note: "This surah was revealed early in Mecca when disbelievers called the Prophet 'majnūn' (possessed/mad) for claiming prophethood. The 'companion of the fish' reference to Prophet Yunus (Jonah) reminds Prophet Muhammad to be patient unlike Yunus who left his people in frustration. The 'garden owners' story is believed to refer to a garden in Yemen whose owners plotted to harvest before dawn to avoid giving to the poor, but Allah destroyed it overnight. The phrase 'yukshafu ʿan sāq' (shin exposed) is an Arabic idiom for severe difficulty, not literal."
  },

  linguisticFeatures: {
    features: [
      { feature: "حَلَّاف", example: "Excessive swearer", effect: "faʿʿāl pattern - intensive" },
      { feature: "هَمَّاز", example: "Habitual slanderer", effect: "faʿʿāl pattern - intensive" },
      { feature: "مَشَّاء", example: "Habitual walker (with gossip)", effect: "faʿʿāl pattern - intensive" },
      { feature: "مَنَّاع", example: "Constant preventer", effect: "faʿʿāl pattern - intensive" },
      { feature: "سَنَسْتَدْرِجُهُم", example: "We will gradually lead them", effect: "Form X - seeking to lead gradually" },
      { feature: "خُلُق", example: "Character/manners", effect: "Distinguished from خَلْق (creation)" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "68:1", topic: "The Pen", note: "Writing as foundation of civilization and knowledge preservation" },
      { verse: "68:51", topic: "Evil eye", note: "Psychosomatic effects of intense negative attention - envy's harm" }
    ]
  }
};

export default ONTOLOGY;
