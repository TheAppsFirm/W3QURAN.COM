/**
 * Surah Al-Jinn (72) - Ontology of Quranic Concepts
 * The Jinn
 * Theme: Jinn hearing Quran, monotheism, unseen knowledge, prophethood
 */

export const ONTOLOGY = {
  surahId: 72,
  surahName: "Al-Jinn",
  surahNameArabic: "الجن",
  revelationType: "Makki",
  totalAyahs: 28,

  categories: {
    jinnHearingQuran: {
      name: "Jinn Hearing the Quran",
      nameArabic: "استماع الجن للقرآن",
      color: '#8B5CF6',
      icon: 'Book',
      concepts: [
        { term: "اسْتَمَعَ نَفَرٌ مِّنَ الْجِنِّ", meaning: "A group of jinn listened", explanation: "Jinn encountered Quran recitation", verseRef: "72:1" },
        { term: "قُرْآنًا عَجَبًا", meaning: "An amazing Quran", explanation: "Jinn amazed by Quran's beauty", verseRef: "72:1" },
        { term: "يَهْدِي إِلَى الرُّشْدِ", meaning: "Guides to right way", explanation: "Quran's guidance recognized", verseRef: "72:2" },
        { term: "فَآمَنَّا بِهِ", meaning: "So we believed in it", explanation: "Jinn accepted Islam", verseRef: "72:2" }
      ]
    },

    tawheedOfJinn: {
      name: "Jinn's Monotheism",
      nameArabic: "توحيد الجن",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "لَن نُّشْرِكَ بِرَبِّنَا أَحَدًا", meaning: "Never associate anyone with our Lord", explanation: "Jinn reject shirk", verseRef: "72:2" },
        { term: "تَعَالَىٰ جَدُّ رَبِّنَا", meaning: "Exalted is majesty of our Lord", explanation: "Acknowledging Allah's greatness", verseRef: "72:3" },
        { term: "مَا اتَّخَذَ صَاحِبَةً وَلَا وَلَدًا", meaning: "He took no wife nor child", explanation: "Rejecting Christian/pagan beliefs", verseRef: "72:3" }
      ]
    },

    jinnFoolishOnes: {
      name: "The Foolish Among Jinn",
      nameArabic: "سفهاء الجن",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "سَفِيهُنَا", meaning: "Our foolish one", explanation: "Iblis and rebellious jinn", verseRef: "72:4" },
        { term: "شَطَطًا", meaning: "Excessive lies about Allah", explanation: "Claims of partners/children", verseRef: "72:4" },
        { term: "ظَنَنَّا أَن لَّن تَقُولَ الْإِنسُ وَالْجِنُّ عَلَى اللَّهِ كَذِبًا", meaning: "Thought none would lie about Allah", explanation: "Jinn were naive about falsehood", verseRef: "72:5" }
      ]
    },

    humanJinnInteraction: {
      name: "Human-Jinn Relations",
      nameArabic: "علاقة الإنس والجن",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "يَعُوذُونَ بِرِجَالٍ مِّنَ الْجِنِّ", meaning: "Sought refuge with jinn men", explanation: "Pre-Islamic practice of seeking jinn protection", verseRef: "72:6" },
        { term: "فَزَادُوهُمْ رَهَقًا", meaning: "They increased them in burden", explanation: "Jinn exploitation made humans worse", verseRef: "72:6" },
        { term: "ظَنُّوا... أَن لَّن يَبْعَثَ اللَّهُ أَحَدًا", meaning: "Thought Allah wouldn't send anyone", explanation: "Both denied resurrection/prophecy", verseRef: "72:7" }
      ]
    },

    heavensGuarded: {
      name: "Heavens Now Guarded",
      nameArabic: "حراسة السماء",
      color: '#06B6D4',
      icon: 'Shield',
      concepts: [
        { term: "لَمَسْنَا السَّمَاءَ", meaning: "We sought the heaven", explanation: "Jinn used to eavesdrop", verseRef: "72:8" },
        { term: "مُلِئَتْ حَرَسًا شَدِيدًا وَشُهُبًا", meaning: "Filled with severe guards and flames", explanation: "After Prophet ﷺ, heavens guarded", verseRef: "72:8" },
        { term: "مَقَاعِدَ لِلسَّمْعِ", meaning: "Seats for listening", explanation: "Jinn formerly had listening posts", verseRef: "72:9" },
        { term: "شِهَابًا رَّصَدًا", meaning: "Burning flame lying in wait", explanation: "Shooting stars chase eavesdroppers", verseRef: "72:9" }
      ]
    },

    jinnDiversity: {
      name: "Diversity Among Jinn",
      nameArabic: "تنوع الجن",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "مِنَّا الصَّالِحُونَ", meaning: "Among us are righteous", explanation: "Good jinn exist", verseRef: "72:11" },
        { term: "دُونَ ذَٰلِكَ", meaning: "Others below that", explanation: "And sinful jinn exist", verseRef: "72:11" },
        { term: "طَرَائِقَ قِدَدًا", meaning: "Different paths/sects", explanation: "Jinn have varied beliefs like humans", verseRef: "72:11" },
        { term: "الْمُسْلِمُونَ", meaning: "Muslims (among jinn)", explanation: "Some jinn are Muslim", verseRef: "72:14" },
        { term: "الْقَاسِطُونَ", meaning: "The unjust", explanation: "Some jinn are unjust", verseRef: "72:14-15" }
      ]
    },

    jinnSubmission: {
      name: "Jinn's Submission",
      nameArabic: "استسلام الجن",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "لَّن نُّعْجِزَ اللَّهَ فِي الْأَرْضِ", meaning: "We cannot escape Allah on earth", explanation: "Jinn acknowledge Allah's power", verseRef: "72:12" },
        { term: "وَلَن نُّعْجِزَهُ هَرَبًا", meaning: "Nor escape Him by fleeing", explanation: "No escape from Allah", verseRef: "72:12" },
        { term: "لَمَّا سَمِعْنَا الْهُدَىٰ آمَنَّا بِهِ", meaning: "When we heard guidance, we believed", explanation: "Immediate acceptance", verseRef: "72:13" }
      ]
    },

    mosquesForAllah: {
      name: "Mosques for Allah Alone",
      nameArabic: "المساجد لله",
      color: '#F59E0B',
      icon: 'Globe',
      concepts: [
        { term: "الْمَسَاجِدَ لِلَّهِ", meaning: "Mosques are for Allah", explanation: "Places of worship dedicated to Allah alone", verseRef: "72:18" },
        { term: "فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا", meaning: "Don't invoke anyone with Allah", explanation: "Pure monotheism in worship", verseRef: "72:18" }
      ]
    },

    prophetsCrowded: {
      name: "Crowds Around Prophet",
      nameArabic: "ازدحام حول النبي",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "لَمَّا قَامَ عَبْدُ اللَّهِ يَدْعُوهُ", meaning: "When servant of Allah stood invoking Him", explanation: "Prophet ﷺ praying", verseRef: "72:19" },
        { term: "كَادُوا يَكُونُونَ عَلَيْهِ لِبَدًا", meaning: "They almost crowded upon him", explanation: "Jinn flocked to hear him", verseRef: "72:19" }
      ]
    },

    prophetsLimitations: {
      name: "Prophet's Limitations",
      nameArabic: "حدود النبي",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "إِنَّمَا أَدْعُو رَبِّي", meaning: "I only invoke my Lord", explanation: "Prophet is just a worshipper", verseRef: "72:20" },
        { term: "لَا أَمْلِكُ لَكُمْ ضَرًّا وَلَا رَشَدًا", meaning: "I don't possess harm or guidance for you", explanation: "Prophet has no divine powers", verseRef: "72:21" },
        { term: "لَن يُجِيرَنِي مِنَ اللَّهِ أَحَدٌ", meaning: "None can protect me from Allah", explanation: "Prophet is a servant", verseRef: "72:22" },
        { term: "إِلَّا بَلَاغًا مِّنَ اللَّهِ", meaning: "Except notification from Allah", explanation: "Prophet's role is conveying message", verseRef: "72:23" }
      ]
    },

    unseenKnowledge: {
      name: "Knowledge of Unseen",
      nameArabic: "علم الغيب",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "عَالِمُ الْغَيْبِ", meaning: "Knower of the unseen", explanation: "Only Allah knows the ghayb", verseRef: "72:26" },
        { term: "فَلَا يُظْهِرُ عَلَىٰ غَيْبِهِ أَحَدًا", meaning: "He reveals His unseen to none", explanation: "Ghayb is Allah's exclusive domain", verseRef: "72:26" },
        { term: "إِلَّا مَنِ ارْتَضَىٰ مِن رَّسُولٍ", meaning: "Except a messenger He approves", explanation: "Prophets receive limited revelation", verseRef: "72:27" },
        { term: "رَصَدًا", meaning: "Observers (angels)", explanation: "Angels guard prophets receiving revelation", verseRef: "72:27" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameArabic: "إحاطة علم الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "أَبْلَغُوا رِسَالَاتِ رَبِّهِمْ", meaning: "They conveyed messages of their Lord", explanation: "Prophets fulfill mission", verseRef: "72:28" },
        { term: "وَأَحَاطَ بِمَا لَدَيْهِمْ", meaning: "He encompasses what is with them", explanation: "Allah's knowledge surrounds all", verseRef: "72:28" },
        { term: "وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا", meaning: "Has counted everything in number", explanation: "Nothing escapes Allah's count", verseRef: "72:28" }
      ]
    }
  },

  relationships: [
    { from: "قرآناً عجباً", to: "فآمنا به", type: "causation", description: "Amazing Quran → belief" },
    { from: "يعوذون برجال من الجن", to: "فزادوهم رهقاً", type: "consequence", description: "Seeking jinn protection → increased burden" },
    { from: "مقاعد للسمع", to: "شهاباً رصداً", type: "change", description: "Old listening posts → now guarded by flames" },
    { from: "منا الصالحون", to: "القاسطون", type: "contrast", description: "Righteous jinn vs. unjust jinn" },
    { from: "عالم الغيب", to: "إلا من ارتضى من رسول", type: "exception", description: "Only Allah knows ghayb, except what revealed to prophets" },
    { from: "المساجد لله", to: "فلا تدعوا مع الله أحداً", type: "implication", description: "Mosques for Allah → pure monotheism in worship" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Jinn Encounter Quran", verses: "72:1-2", description: "Group of jinn hear and believe in Quran" },
      { stage: 2, theme: "Jinn's Tawheed", verses: "72:3-7", description: "Jinn affirm monotheism, reject past errors" },
      { stage: 3, theme: "Heavens Guarded", verses: "72:8-10", description: "Eavesdropping stopped, heavens now protected" },
      { stage: 4, theme: "Jinn Diversity", verses: "72:11-15", description: "Righteous and unjust among jinn" },
      { stage: 5, theme: "Divine Blessing/Test", verses: "72:16-17", description: "Steadfastness brings provision; turning away brings punishment" },
      { stage: 6, theme: "Pure Worship", verses: "72:18-19", description: "Mosques for Allah; crowds around Prophet" },
      { stage: 7, theme: "Prophet's Role", verses: "72:20-25", description: "Prophet is servant, conveyor; no power of his own" },
      { stage: 8, theme: "Divine Knowledge", verses: "72:26-28", description: "Only Allah knows ghayb; prophets protected to convey" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Quran impresses even jinn", how: "Its beauty transcends species - recite with confidence", verse: "72:1" },
      { principle: "Reject seeking jinn help", how: "Don't use amulets, fortune-tellers, or jinn contact", verse: "72:6" },
      { principle: "Jinn have free will like us", how: "They face same choices - good/evil, belief/disbelief", verse: "72:11" },
      { principle: "Mosques for Allah alone", how: "No saint-worship, grave-worship in mosques", verse: "72:18" },
      { principle: "Prophet had limitations", how: "Don't attribute divine powers to any human", verse: "72:21" },
      { principle: "Ghayb belongs to Allah", how: "Don't seek fortune-telling; only Allah knows future", verse: "72:26" }
    ]
  },

  uniqueInsight: {
    title: "The Jinn's Naivety",
    insight: "Verse 5 reveals something remarkable: 'وَأَنَّا ظَنَنَّا أَن لَّن تَقُولَ الْإِنسُ وَالْجِنُّ عَلَى اللَّهِ كَذِبًا' - the jinn assumed that no one (human or jinn) would lie about Allah. They were shocked to discover that the 'foolish among them' (Iblis and followers) had been making false claims about Allah having a wife or son. This shows that deception about God wasn't instinctive to jinn - they had to learn it could happen. It also shows that even supernatural beings can be deceived and led astray. The jinn's journey from assumption to realization to faith mirrors the human experience of growing in discernment."
  },

  historicalContext: {
    note: "Revealed after the Prophet's trip to Ta'if when he was rejected and attacked. On his return, a group of jinn from Nusaybin (or Yemen) heard his recitation at Nakhlah valley. They returned to their people as warners. This incident is also referenced in 46:29-32. The surah establishes that Islam is for both worlds - ins (humans) and jinn."
  },

  linguisticFeatures: {
    features: [
      { feature: "نَفَر", example: "Group (3-10 individuals)", effect: "Specific number range term" },
      { feature: "جَدّ", example: "Majesty/greatness", effect: "Unusual term for Allah's attribute" },
      { feature: "شَطَط", example: "Excessive/outrageous", effect: "Beyond normal limits" },
      { feature: "رَهَق", example: "Burden/oppression", effect: "Being overwhelmed" },
      { feature: "لِبَد", example: "Crowds pressing", effect: "Vivid image of dense gathering" },
      { feature: "مُلْتَحَد", example: "Place of refuge", effect: "Form VIII - place of turning/leaning" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "72:8-9", topic: "Shooting stars", note: "شُهُب (meteors/shooting stars) described as guarding heavens - visible phenomena given spiritual significance" }
    ]
  }
};

export default ONTOLOGY;
