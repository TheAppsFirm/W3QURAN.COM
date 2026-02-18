/**
 * Surah Muhammad (The Prophet Muhammad) - Surah 47
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 47,
  surahName: "Muhammad",
  surahNameArabic: "محمد",
  totalAyahs: 38,
  revelationType: "Medinan",
  mainTheme: "Fighting in Allah's Cause, Exposing Hypocrites, and Paradise's Promise",

  categories: {
    fightingInAllahsCause: {
      name: "Fighting in Allah's Cause",
      nameAr: "القتال في سبيل الله",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Meeting in Battle", arabic: "لقاء الكفار", meaning: "When you meet disbelievers in battle", ayahs: [4], description: "Rules of engagement in warfare" },
        { term: "Strike the Necks", arabic: "ضرب الرقاب", meaning: "Strike at their necks", ayahs: [4], description: "Decisive action in combat" },
        { term: "Taking Captives", arabic: "شد الوثاق", meaning: "Bind firmly after overwhelming them", ayahs: [4], description: "Proper treatment of prisoners" },
        { term: "Ransom or Grace", arabic: "المن أو الفداء", meaning: "Release graciously or for ransom", ayahs: [4], description: "Options for prisoner release" },
        { term: "War Ends", arabic: "تضع الحرب أوزارها", meaning: "Until war lays down its burdens", ayahs: [4], description: "Fighting is not perpetual" },
        { term: "Testing Believers", arabic: "ابتلاء المؤمنين", meaning: "Allah tests through fighting", ayahs: [4], description: "Battle as divine test" },
        { term: "Help Allah's Cause", arabic: "نصر الله", meaning: "If you help Allah, He helps you", ayahs: [7], description: "Reciprocal divine support" },
        { term: "Firm Feet", arabic: "يثبت أقدامكم", meaning: "He will plant your feet firmly", ayahs: [7], description: "Steadfastness in battle" }
      ]
    },
    disbelieversCondemned: {
      name: "Fate of Disbelievers",
      nameAr: "مصير الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Deeds Made Worthless", arabic: "أضل أعمالهم", meaning: "Their deeds are lost", ayahs: [1, 8, 9, 32], description: "Good works nullified by disbelief" },
        { term: "Following Falsehood", arabic: "اتباع الباطل", meaning: "They follow falsehood", ayahs: [3], description: "Adherence to error" },
        { term: "Destruction in Anger", arabic: "الهلاك بالغضب", meaning: "Wretched and deeds gone astray", ayahs: [8], description: "Divine anger upon them" },
        { term: "Hatred of Revelation", arabic: "كراهية ما أنزل الله", meaning: "They hate what Allah revealed", ayahs: [9, 26], description: "Rejection of divine message" },
        { term: "Travel and See", arabic: "السير في الأرض", meaning: "Have they not traveled to see?", ayahs: [10], description: "Lessons from destroyed nations" },
        { term: "No Protector", arabic: "لا مولى لهم", meaning: "Disbelievers have no protector", ayahs: [11], description: "Abandoned by false gods" },
        { term: "Like Cattle", arabic: "كالأنعام", meaning: "They eat and enjoy like cattle", ayahs: [12], description: "Living without purpose" },
        { term: "Angels Striking", arabic: "ضرب الملائكة", meaning: "Angels striking faces and backs", ayahs: [27], description: "Punishment at death" }
      ]
    },
    hypocritesExposed: {
      name: "Hypocrites Exposed",
      nameAr: "كشف المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Disease in Hearts", arabic: "في قلوبهم مرض", meaning: "Those with disease in their hearts", ayahs: [20, 29], description: "Spiritual sickness of hypocrisy" },
        { term: "Afraid of Surah", arabic: "الخوف من السورة", meaning: "Hypocrites fear revealing surah", ayahs: [20], description: "Fear of exposure" },
        { term: "Crooked Looks", arabic: "نظر المغشي عليه", meaning: "Looking like one fainting at death", ayahs: [20], description: "Terror at fighting command" },
        { term: "Better for Them", arabic: "طاعة وقول معروف", meaning: "Obedience and good words better", ayahs: [21], description: "What they should have done" },
        { term: "Spread Corruption", arabic: "الفساد في الأرض", meaning: "If you turn away, you spread corruption", ayahs: [22], description: "Hypocrisy leads to evil" },
        { term: "Sever Kinship", arabic: "تقطيع الأرحام", meaning: "Cut ties of kinship", ayahs: [22], description: "Breaking family bonds" },
        { term: "Sealed Hearts", arabic: "طبع على القلوب", meaning: "Allah sealed their hearts", ayahs: [16], description: "Divine punishment for rejection" },
        { term: "Private Counsel", arabic: "النجوى", meaning: "Secret talks after the Prophet", ayahs: [16], description: "Plotting after guidance given" },
        { term: "Satan's Temptation", arabic: "تسويل الشيطان", meaning: "Satan enticed them", ayahs: [25], description: "Shaytan leading astray" },
        { term: "Extended False Hope", arabic: "أملى لهم", meaning: "Prolonged false hope for them", ayahs: [25], description: "Given rope to hang themselves" },
        { term: "Known by Tone", arabic: "لحن القول", meaning: "Known by their tone of speech", ayahs: [30], description: "Hypocrisy revealed in speech patterns" }
      ]
    },
    paradiseDescription: {
      name: "Paradise Description",
      nameAr: "وصف الجنة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Rivers of Water", arabic: "أنهار من ماء", meaning: "Rivers of water never stale", ayahs: [15], description: "Pure, unchanging water" },
        { term: "Rivers of Milk", arabic: "أنهار من لبن", meaning: "Rivers of milk unchanged in taste", ayahs: [15], description: "Eternal fresh milk" },
        { term: "Rivers of Wine", arabic: "أنهار من خمر", meaning: "Rivers of wine delicious to drink", ayahs: [15], description: "Pure, pleasurable wine" },
        { term: "Rivers of Honey", arabic: "أنهار من عسل", meaning: "Rivers of purified honey", ayahs: [15], description: "Honey perfectly pure" },
        { term: "Every Fruit", arabic: "من كل الثمرات", meaning: "Every kind of fruit", ayahs: [15], description: "Unlimited variety of fruits" },
        { term: "Forgiveness", arabic: "مغفرة من ربهم", meaning: "Forgiveness from their Lord", ayahs: [15], description: "Ultimate divine pardon" },
        { term: "Guided to Path", arabic: "هدى وأصلح بالهم", meaning: "He guided them and improved their state", ayahs: [5], description: "Divine guidance and reform" },
        { term: "Paradise Admitted", arabic: "إدخال الجنة", meaning: "Admitted to Paradise He described", ayahs: [6], description: "Entry to promised garden" }
      ]
    },
    worldlyLifeTest: {
      name: "Worldly Life as Test",
      nameAr: "الدنيا ابتلاء",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Play and Amusement", arabic: "لعب ولهو", meaning: "Worldly life is play and amusement", ayahs: [36], description: "Temporary entertainment" },
        { term: "Faith and Taqwa", arabic: "الإيمان والتقوى", meaning: "If you believe and have taqwa", ayahs: [36], description: "Conditions for reward" },
        { term: "Not Asking Wealth", arabic: "لا يسألكم أموالكم", meaning: "He does not ask your wealth", ayahs: [36], description: "Allah not demanding possessions" },
        { term: "Stinginess Exposed", arabic: "البخل", meaning: "If asked, you would be stingy", ayahs: [37], description: "Human nature revealed" },
        { term: "Grudging Spending", arabic: "من يبخل", meaning: "Whoever is stingy harms himself", ayahs: [38], description: "Self-harm of miserliness" },
        { term: "Allah is Rich", arabic: "الله الغني", meaning: "Allah is Self-Sufficient", ayahs: [38], description: "Allah needs nothing" },
        { term: "You are Poor", arabic: "أنتم الفقراء", meaning: "You are the needy ones", ayahs: [38], description: "Human dependency" },
        { term: "Replaced People", arabic: "يستبدل قوما غيركم", meaning: "He can replace you with others", ayahs: [38], description: "Warning of replacement" }
      ]
    },
    prophetMuhammad: {
      name: "The Prophet Muhammad",
      nameAr: "النبي محمد",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Named Muhammad", arabic: "محمد", meaning: "The Praised One", ayahs: [2], description: "Only surah named after the Prophet" },
        { term: "What Was Revealed", arabic: "ما أنزل على محمد", meaning: "What was revealed to Muhammad", ayahs: [2], description: "Direct naming in revelation" },
        { term: "The Truth", arabic: "الحق من ربهم", meaning: "It is the truth from their Lord", ayahs: [2, 3], description: "Confirmation of revelation" },
        { term: "Obey the Messenger", arabic: "أطيعوا الرسول", meaning: "Obey Allah and the Messenger", ayahs: [33], description: "Command for obedience" },
        { term: "Don't Nullify Deeds", arabic: "لا تبطلوا أعمالكم", meaning: "Do not invalidate your deeds", ayahs: [33], description: "Warning against apostasy" }
      ]
    },
    believersBlessings: {
      name: "Blessings for Believers",
      nameAr: "نعم المؤمنين",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Sins Covered", arabic: "كفر سيئاتهم", meaning: "He will remove their sins", ayahs: [2], description: "Sins forgiven through faith" },
        { term: "State Improved", arabic: "أصلح بالهم", meaning: "He will improve their condition", ayahs: [2], description: "Divine reform of character" },
        { term: "Allah Protector", arabic: "الله مولى المؤمنين", meaning: "Allah is the protector of believers", ayahs: [11], description: "Divine guardianship" },
        { term: "Gardens of Paradise", arabic: "جنات تجري من تحتها الأنهار", meaning: "Gardens with flowing rivers", ayahs: [12], description: "Paradise reward" },
        { term: "Pure Drink", arabic: "شرابا طهورا", meaning: "Given pure drink by their Lord", ayahs: [15], description: "Purifying beverage" }
      ]
    },
    hourAndJudgment: {
      name: "The Hour and Judgment",
      nameAr: "الساعة والحساب",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Hour Approaches", arabic: "هل ينظرون إلا الساعة", meaning: "Are they waiting for the Hour?", ayahs: [18], description: "Sudden arrival expected" },
        { term: "Signs Have Come", arabic: "قد جاء أشراطها", meaning: "Its signs have already come", ayahs: [18], description: "Precursors already present" },
        { term: "Remembrance Useless Then", arabic: "أنى لهم ذكراهم", meaning: "How will remembrance help then?", ayahs: [18], description: "Too late for reflection" },
        { term: "Knowledge with Allah", arabic: "علم الساعة", meaning: "Only Allah knows the Hour", ayahs: [18], description: "Exclusive divine knowledge" },
        { term: "Ask Forgiveness", arabic: "استغفر لذنبك", meaning: "Seek forgiveness for your sin", ayahs: [19], description: "Command to Prophet and all" }
      ]
    }
  },

  relationships: [
    { from: "Disbelief", to: "Lost Deeds", type: "consequence", description: "Disbelief causes all good works to be nullified" },
    { from: "Faith", to: "Sins Covered", type: "consequence", description: "True faith leads to forgiveness of sins" },
    { from: "Helping Allah", to: "Divine Support", type: "reciprocal", description: "Those who help Allah's cause receive His help" },
    { from: "Hypocrisy", to: "Heart Disease", type: "identity", description: "Hypocrisy is described as spiritual disease" },
    { from: "Satan", to: "Hypocrites", type: "alliance", description: "Satan leads hypocrites astray with false hopes" },
    { from: "Four Rivers", to: "Paradise", type: "description", description: "Water, milk, wine, honey describe Paradise" },
    { from: "Worldly Life", to: "Test", type: "purpose", description: "This life is a test through play and distraction" },
    { from: "Stinginess", to: "Self-Harm", type: "consequence", description: "Being stingy only harms oneself" },
    { from: "Allah's Independence", to: "Human Need", type: "contrast", description: "Allah is Rich, humans are poor and needy" },
    { from: "Hour's Signs", to: "Time Running Out", type: "warning", description: "Signs have come; time for repentance is short" },
    { from: "Sealed Hearts", to: "Following Desires", type: "consequence", description: "After clear guidance, hearts sealed for following desires" },
    { from: "Obedience", to: "Preserved Deeds", type: "requirement", description: "Obedience preserves good deeds from nullification" }
  ],

  thematicFlow: {
    title: "From Battle to Paradise Through Faith",
    stages: [
      {
        name: "Contrast of Outcomes",
        ayahs: [1, 2, 3],
        description: "Disbelievers' deeds lost vs believers' sins forgiven; truth vs falsehood"
      },
      {
        name: "Rules of Battle",
        ayahs: [4],
        description: "When meeting enemies: strike, capture, then release or ransom"
      },
      {
        name: "Divine Guidance",
        ayahs: [5, 6, 7],
        description: "Allah guides believers, admits them to Paradise, helps those who help Him"
      },
      {
        name: "Fate of Rejectors",
        ayahs: [8, 9, 10, 11, 12, 13, 14],
        description: "Disbelievers destroyed; travel to see past nations; no protector; like cattle"
      },
      {
        name: "Paradise Description",
        ayahs: [15],
        description: "Four rivers in Paradise: water, milk, wine, honey"
      },
      {
        name: "Hypocrites Unveiled",
        ayahs: [16, 17, 18, 19, 20, 21, 22, 23],
        description: "Sealed hearts, plotting, fearing exposure, corruption and severing kinship"
      },
      {
        name: "Reflection on Quran",
        ayahs: [24],
        description: "Why don't they reflect on the Quran? Hearts are locked"
      },
      {
        name: "Apostates and Satan",
        ayahs: [25, 26, 27, 28],
        description: "Those who turn back, Satan's enticement, secret agreements with enemies"
      },
      {
        name: "Hidden Hatred",
        ayahs: [29, 30, 31],
        description: "Did diseased hearts think Allah wouldn't expose them? Known by speech tone"
      },
      {
        name: "Futility of Opposition",
        ayahs: [32],
        description: "Those opposing can never harm Allah"
      },
      {
        name: "Obedience Command",
        ayahs: [33, 34, 35],
        description: "Obey Allah and Messenger; don't nullify deeds; no begging for peace when winning"
      },
      {
        name: "Worldly Life Reality",
        ayahs: [36, 37, 38],
        description: "Life is play; believe and be conscious; Allah tests wealth; He can replace you"
      }
    ]
  },

  practicalApplication: {
    title: "Living by Surah Muhammad",
    applications: [
      {
        context: "Faith Integrity",
        teaching: "Guard your faith carefully; disbelief nullifies all good deeds",
        ayah: 1
      },
      {
        context: "Trust in Truth",
        teaching: "Follow what is revealed to Muhammad; it is truth from your Lord",
        ayah: 2
      },
      {
        context: "Standing for Justice",
        teaching: "When conflict is unavoidable, act decisively but mercifully",
        ayah: 4
      },
      {
        context: "Mutual Help",
        teaching: "Help Allah's cause and He will help you and make you firm",
        ayah: 7
      },
      {
        context: "Learning from History",
        teaching: "Travel the earth and see the consequences for deniers before you",
        ayah: 10
      },
      {
        context: "Hearts and Quran",
        teaching: "Reflect deeply on the Quran; don't let hearts become locked",
        ayah: 24
      },
      {
        context: "Spiritual Awareness",
        teaching: "Be aware that hidden hatred and hypocrisy will be exposed",
        ayah: 29
      },
      {
        context: "Obedience",
        teaching: "Obey Allah and the Messenger; don't invalidate your deeds through disobedience",
        ayah: 33
      },
      {
        context: "Worldly Perspective",
        teaching: "Remember this life is temporary; invest in faith and consciousness of Allah",
        ayah: 36
      },
      {
        context: "Generosity",
        teaching: "Don't be stingy; stinginess only harms yourself. Allah is self-sufficient",
        ayah: 38
      }
    ]
  },

  uniqueInsight: {
    title: "The Four Rivers of Paradise (أَنْهَارٌ)",
    insight: "This surah contains one of the most vivid descriptions of Paradise in the Quran (verse 15), describing four types of rivers: (1) Rivers of water never becoming stale (مَاءٍ غَيْرِ آسِنٍ), (2) Rivers of milk whose taste never changes (لَبَنٍ لَّمْ يَتَغَيَّرْ طَعْمُهُ), (3) Rivers of wine delicious to drinkers (خَمْرٍ لَّذَّةٍ لِّلشَّارِبِينَ), and (4) Rivers of purified honey (عَسَلٍ مُّصَفًّى). Each represents a fundamental human desire perfected: water for survival, milk for nourishment, wine for pleasure, and honey for sweetness and healing. Unlike worldly versions that spoil, these are eternal and pure. The surah contrasts this with disbelievers who 'eat and enjoy like cattle' (verse 12) - showing that believers have elevated pleasures while disbelievers reduce themselves to base existence. This is also the only surah named after the Prophet Muhammad himself, making the paradise promise personal from him to his followers.",
    arabicTerm: "فِيهَا أَنْهَارٌ مِّن مَّاءٍ غَيْرِ آسِنٍ وَأَنْهَارٌ مِّن لَّبَنٍ لَّمْ يَتَغَيَّرْ طَعْمُهُ وَأَنْهَارٌ مِّنْ خَمْرٍ لَّذَّةٍ لِّلشَّارِبِينَ وَأَنْهَارٌ مِّنْ عَسَلٍ مُّصَفًّى",
    rootMeaning: "ن-ه-ر (to flow) - rivers represent continuous divine blessings",
    keyAyah: 15
  },

  historicalContext: {
    revelationPeriod: "Medinan period, likely after Badr or Hudaybiyyah",
    occasion: "Revealed during a time when Muslims faced military conflict and the community included both sincere believers and hypocrites. The surah addresses the need for steadfastness in battle while warning about internal enemies.",
    note: "This surah is unique in being named directly after the Prophet Muhammad (also called Surah Al-Qital - The Fighting). It is one of only four places in the Quran where the Prophet is mentioned by name (3:144, 33:40, 47:2, 48:29). The surah's placement in the Quran pairs it with Surah Al-Fath (Victory), as both deal with conflict and its outcomes. The verse about 'striking necks' (47:4) established rules of engagement that were revolutionary for their time, including the obligation to release prisoners."
  },

  linguisticFeatures: {
    features: [
      {
        name: "Paired Contrasts",
        description: "الذين كفروا vs الذين آمنوا",
        example: "Opening verses contrast disbelievers and believers in parallel",
        ayahs: [1, 2]
      },
      {
        name: "Emphatic Particles",
        description: "ذَٰلِكَ بِأَنَّ",
        example: "Repeated 'that is because' for causation",
        ayahs: [3, 9, 11]
      },
      {
        name: "Rhetorical Questions",
        description: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ",
        example: "Do they not reflect on the Quran?",
        ayah: 24
      },
      {
        name: "Heart Lock Metaphor",
        description: "أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا",
        example: "Or are there locks upon their hearts?",
        ayah: 24
      },
      {
        name: "Speech Pattern Recognition",
        description: "لَحْنِ الْقَوْلِ",
        example: "Tone/style of speech reveals hidden intentions",
        ayah: 30
      },
      {
        name: "Conditional Promises",
        description: "إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ",
        example: "If you help Allah, He will help you",
        ayah: 7
      },
      {
        name: "Dunya Description",
        description: "لَعِبٌ وَلَهْوٌ",
        example: "Play and amusement - minimizing worldly life",
        ayah: 36
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Psychology of Hypocrisy",
        observation: "The description of hypocrites being recognized by 'tone of speech' (lahn al-qawl) aligns with modern studies showing deception leaves linguistic markers",
        ayah: 30
      },
      {
        topic: "Heart Disease Metaphor",
        observation: "Describing spiritual conditions as 'disease in hearts' parallels psychosomatic understanding of moral-emotional states",
        ayah: 20
      },
      {
        topic: "Water Purity",
        observation: "Paradise water described as 'never becoming stale' (ghayr asin) - water on earth stagnates and breeds bacteria; this describes perfectly pure, living water",
        ayah: 15
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      {
        surah: 8,
        name: "Al-Anfal",
        relationship: "Both address warfare, spoils, and rules of engagement",
        type: "thematic_parallel"
      },
      {
        surah: 48,
        name: "Al-Fath",
        relationship: "Directly following surah, both deal with conflict and victory",
        type: "sequential_relationship"
      },
      {
        surah: 63,
        name: "Al-Munafiqun",
        relationship: "Both expose hypocrites' traits and behaviors",
        type: "thematic_parallel"
      },
      {
        surah: 9,
        name: "At-Tawbah",
        relationship: "Most detailed treatment of hypocrites; similar themes of fighting",
        type: "thematic_parallel"
      },
      {
        surah: 57,
        name: "Al-Hadid",
        relationship: "Both discuss spending in Allah's way and testing believers",
        type: "thematic_parallel"
      },
      {
        surah: 3,
        name: "Aal Imran",
        relationship: "Contains one of the four mentions of Muhammad by name (3:144)",
        type: "name_connection"
      },
      {
        surah: 33,
        name: "Al-Ahzab",
        relationship: "Contains mention of Muhammad by name (33:40) and hypocrites",
        type: "thematic_parallel"
      }
    ]
  }
};

export default ONTOLOGY;
