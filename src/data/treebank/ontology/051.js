/**
 * Surah Adh-Dhariyat (The Scattering Winds) - Surah 51
 * Ontology of Quranic Concepts and Relationships
 * 60 Ayahs - Makkan
 * Major themes: The Scattering Winds, Creation's Purpose (Worship), Ibrahim's Guests, Destroyed Nations
 */

export const ONTOLOGY = {
  surahId: 51,
  surahName: "Adh-Dhariyat",
  surahNameArabic: "الذاريات",
  totalAyahs: 60,
  revelationType: "Makkan",
  mainTheme: "Divine Signs in Nature and History Confirming Resurrection and Judgment",

  categories: {
    cosmicOaths: {
      name: "The Cosmic Oaths",
      nameAr: "القسم بالمخلوقات",
      color: "#8B5CF6",
      concepts: [
        { term: "Adh-Dhariyat", arabic: "وَالذَّارِيَاتِ ذَرْوًا", meaning: "By the winds scattering [dust]", ayahs: [1] },
        { term: "Al-Hamilat", arabic: "فَالْحَامِلَاتِ وِقْرًا", meaning: "And [clouds] carrying a load [of rain]", ayahs: [2] },
        { term: "Al-Jariyat", arabic: "فَالْجَارِيَاتِ يُسْرًا", meaning: "And [ships] sailing with ease", ayahs: [3] },
        { term: "Al-Muqassimat", arabic: "فَالْمُقَسِّمَاتِ أَمْرًا", meaning: "And [angels] distributing affairs", ayahs: [4] }
      ]
    },

    promiseOfJudgment: {
      name: "Promise of Judgment",
      nameAr: "وعد يوم الدين",
      color: "#EF4444",
      concepts: [
        { term: "True Promise", arabic: "إِنَّمَا تُوعَدُونَ لَصَادِقٌ", meaning: "Indeed, what you are promised is true", ayahs: [5] },
        { term: "Day of Recompense", arabic: "وَإِنَّ الدِّينَ لَوَاقِعٌ", meaning: "And indeed, the recompense will occur", ayahs: [6] },
        { term: "Day of Sorting", arabic: "يَوْمَ هُمْ عَلَى النَّارِ يُفْتَنُونَ", meaning: "Day they are tried over the Fire", ayahs: [13] },
        { term: "Taste Affliction", arabic: "ذُوقُوا فِتْنَتَكُمْ", meaning: "Taste your affliction", ayahs: [14] }
      ]
    },

    signsInCosmos: {
      name: "Signs in the Cosmos",
      nameAr: "آيات في السماء",
      color: "#3B82F6",
      concepts: [
        { term: "Woven Sky", arabic: "وَالسَّمَاءِ ذَاتِ الْحُبُكِ", meaning: "By the sky containing pathways", ayahs: [7] },
        { term: "Conflicting Sayings", arabic: "إِنَّكُمْ لَفِي قَوْلٍ مُّخْتَلِفٍ", meaning: "Indeed, you are in differing speech", ayahs: [8] },
        { term: "Deluded Away", arabic: "يُؤْفَكُ عَنْهُ مَنْ أُفِكَ", meaning: "Deluded from Quran is he who is deluded", ayahs: [9] }
      ]
    },

    liarsDestroyed: {
      name: "The Liars Destroyed",
      nameAr: "هلاك الكاذبين",
      color: "#F59E0B",
      concepts: [
        { term: "Al-Kharrasun", arabic: "قُتِلَ الْخَرَّاصُونَ", meaning: "Destroyed are the liars/speculators", ayahs: [10] },
        { term: "Heedless Ones", arabic: "الَّذِينَ هُمْ فِي غَمْرَةٍ سَاهُونَ", meaning: "Those in flood [of ignorance], heedless", ayahs: [11] },
        { term: "Questioning Day", arabic: "يَسْأَلُونَ أَيَّانَ يَوْمُ الدِّينِ", meaning: "They ask, When is the Day of Recompense?", ayahs: [12] }
      ]
    },

    righteousRewards: {
      name: "Rewards of the Righteous",
      nameAr: "جزاء المتقين",
      color: "#10B981",
      concepts: [
        { term: "Gardens and Springs", arabic: "فِي جَنَّاتٍ وَعُيُونٍ", meaning: "In gardens and springs", ayahs: [15] },
        { term: "Receiving Gifts", arabic: "آخِذِينَ مَا آتَاهُمْ رَبُّهُمْ", meaning: "Receiving what their Lord has given them", ayahs: [16] },
        { term: "Muhsinun Before", arabic: "إِنَّهُمْ كَانُوا قَبْلَ ذَٰلِكَ مُحْسِنِينَ", meaning: "They were doers of good before that", ayahs: [16] },
        { term: "Little Sleep", arabic: "كَانُوا قَلِيلًا مِّنَ اللَّيْلِ مَا يَهْجَعُونَ", meaning: "They used to sleep little at night", ayahs: [17] },
        { term: "Seeking Forgiveness", arabic: "وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ", meaning: "And in early dawn they sought forgiveness", ayahs: [18] },
        { term: "Sharing Wealth", arabic: "وَفِي أَمْوَالِهِمْ حَقٌّ لِّلسَّائِلِ وَالْمَحْرُومِ", meaning: "And in their wealth was a right for the beggar and deprived", ayahs: [19] }
      ]
    },

    signsOnEarth: {
      name: "Signs on Earth and Within",
      nameAr: "آيات في الأرض والأنفس",
      color: "#6366F1",
      concepts: [
        { term: "Signs on Earth", arabic: "وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ", meaning: "On earth are signs for the certain", ayahs: [20] },
        { term: "Signs in Yourselves", arabic: "وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ", meaning: "And in yourselves. Do you not see?", ayahs: [21] },
        { term: "Provision in Sky", arabic: "وَفِي السَّمَاءِ رِزْقُكُمْ", meaning: "And in the sky is your provision", ayahs: [22] },
        { term: "Promise True", arabic: "إِنَّهُ لَحَقٌّ مِّثْلَ مَا أَنَّكُمْ تَنطِقُونَ", meaning: "It is truth, just as you speak", ayahs: [23] }
      ]
    },

    ibrahimGuests: {
      name: "Ibrahim's Honored Guests",
      nameAr: "ضيف إبراهيم المكرمين",
      color: "#EC4899",
      concepts: [
        { term: "Honored Guests", arabic: "ضَيْفِ إِبْرَاهِيمَ الْمُكْرَمِينَ", meaning: "Honored guests of Ibrahim", ayahs: [24] },
        { term: "Greeting Peace", arabic: "قَالُوا سَلَامًا ۖ قَالَ سَلَامٌ", meaning: "They said Peace; he said Peace", ayahs: [25] },
        { term: "Unknown People", arabic: "قَوْمٌ مُّنكَرُونَ", meaning: "Unrecognized people", ayahs: [25] },
        { term: "Roasted Calf", arabic: "فَجَاءَ بِعِجْلٍ حَنِيذٍ", meaning: "He brought a roasted calf", ayahs: [26] },
        { term: "Not Eating", arabic: "أَلَا تَأْكُلُونَ", meaning: "Will you not eat?", ayahs: [27] },
        { term: "Fear in Heart", arabic: "فَأَوْجَسَ مِنْهُمْ خِيفَةً", meaning: "He felt fear of them", ayahs: [28] },
        { term: "Do Not Fear", arabic: "لَا تَخَفْ", meaning: "Do not fear", ayahs: [28] },
        { term: "Glad Tidings", arabic: "وَبَشَّرُوهُ بِغُلَامٍ عَلِيمٍ", meaning: "They gave him good tidings of a learned boy", ayahs: [28] },
        { term: "Wife's Reaction", arabic: "فَأَقْبَلَتِ امْرَأَتُهُ فِي صَرَّةٍ", meaning: "His wife came forward with a cry", ayahs: [29] },
        { term: "Struck Her Face", arabic: "فَصَكَّتْ وَجْهَهَا", meaning: "She struck her face [in amazement]", ayahs: [29] },
        { term: "Barren Old Woman", arabic: "عَجُوزٌ عَقِيمٌ", meaning: "A barren old woman", ayahs: [29] },
        { term: "Allah's Decree", arabic: "كَذَٰلِكِ قَالَ رَبُّكِ", meaning: "Thus said your Lord", ayahs: [30] }
      ]
    },

    missionToLut: {
      name: "Mission to Lut's People",
      nameAr: "إرسال إلى قوم لوط",
      color: "#F43F5E",
      concepts: [
        { term: "Angels' Mission", arabic: "قَالَ فَمَا خَطْبُكُمْ أَيُّهَا الْمُرْسَلُونَ", meaning: "What is your mission, O messengers?", ayahs: [31] },
        { term: "Sinful People", arabic: "إِلَىٰ قَوْمٍ مُّجْرِمِينَ", meaning: "To a sinful people", ayahs: [32] },
        { term: "Stones of Clay", arabic: "حِجَارَةً مِّن طِينٍ", meaning: "Stones of clay", ayahs: [33] },
        { term: "Marked by Lord", arabic: "مُّسَوَّمَةً عِندَ رَبِّكَ", meaning: "Marked by your Lord", ayahs: [34] },
        { term: "For Transgressors", arabic: "لِلْمُسْرِفِينَ", meaning: "For the transgressors", ayahs: [34] },
        { term: "Believers Evacuated", arabic: "فَأَخْرَجْنَا مَن كَانَ فِيهَا مِنَ الْمُؤْمِنِينَ", meaning: "We brought out whoever was there of believers", ayahs: [35] },
        { term: "Only One House", arabic: "فَمَا وَجَدْنَا فِيهَا غَيْرَ بَيْتٍ مِّنَ الْمُسْلِمِينَ", meaning: "We found only one house of Muslims", ayahs: [36] },
        { term: "Sign Left", arabic: "وَتَرَكْنَا فِيهَا آيَةً", meaning: "And We left therein a sign", ayahs: [37] }
      ]
    },

    storyOfMusa: {
      name: "Story of Musa",
      nameAr: "قصة موسى",
      color: "#14B8A6",
      concepts: [
        { term: "Sent to Pharaoh", arabic: "إِذْ أَرْسَلْنَاهُ إِلَىٰ فِرْعَوْنَ", meaning: "When We sent him to Pharaoh", ayahs: [38] },
        { term: "Clear Authority", arabic: "بِسُلْطَانٍ مُّبِينٍ", meaning: "With clear authority", ayahs: [38] },
        { term: "Pharaoh Turned Away", arabic: "فَتَوَلَّىٰ بِرُكْنِهِ", meaning: "He turned away with his supporters", ayahs: [39] },
        { term: "Called Sorcerer", arabic: "سَاحِرٌ أَوْ مَجْنُونٌ", meaning: "A sorcerer or a madman", ayahs: [39] },
        { term: "Seized and Cast", arabic: "فَأَخَذْنَاهُ وَجُنُودَهُ فَنَبَذْنَاهُمْ فِي الْيَمِّ", meaning: "So We seized him and his soldiers and cast them into the sea", ayahs: [40] },
        { term: "Blameworthy State", arabic: "وَهُوَ مُلِيمٌ", meaning: "While he was blameworthy", ayahs: [40] }
      ]
    },

    storyOfAad: {
      name: "Story of 'Aad",
      nameAr: "قصة عاد",
      color: "#F59E0B",
      concepts: [
        { term: "Barren Wind", arabic: "الرِّيحَ الْعَقِيمَ", meaning: "The barren wind", ayahs: [41] },
        { term: "Left Nothing", arabic: "مَا تَذَرُ مِن شَيْءٍ", meaning: "It left nothing", ayahs: [42] },
        { term: "Decayed Ruins", arabic: "إِلَّا جَعَلَتْهُ كَالرَّمِيمِ", meaning: "Except made it like disintegrated ruins", ayahs: [42] }
      ]
    },

    storyOfThamud: {
      name: "Story of Thamud",
      nameAr: "قصة ثمود",
      color: "#A855F7",
      concepts: [
        { term: "Enjoy Yourselves", arabic: "تَمَتَّعُوا حَتَّىٰ حِينٍ", meaning: "Enjoy yourselves for a while", ayahs: [43] },
        { term: "Defied Command", arabic: "فَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ", meaning: "They were insolent toward command of their Lord", ayahs: [44] },
        { term: "Thunderbolt Struck", arabic: "فَأَخَذَتْهُمُ الصَّاعِقَةُ", meaning: "So the thunderbolt seized them", ayahs: [44] },
        { term: "Could Not Stand", arabic: "فَمَا اسْتَطَاعُوا مِن قِيَامٍ", meaning: "They could not stand", ayahs: [45] },
        { term: "No Help", arabic: "وَمَا كَانُوا مُنتَصِرِينَ", meaning: "And they had no helpers", ayahs: [45] }
      ]
    },

    storyOfNuh: {
      name: "Story of Nuh",
      nameAr: "قصة نوح",
      color: "#3B82F6",
      concepts: [
        { term: "People of Nuh Before", arabic: "وَقَوْمَ نُوحٍ مِّن قَبْلُ", meaning: "And the people of Nuh before", ayahs: [46] },
        { term: "Defiantly Disobedient", arabic: "إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ", meaning: "They were a defiantly disobedient people", ayahs: [46] }
      ]
    },

    creationSigns: {
      name: "Signs in Creation",
      nameAr: "آيات في الخلق",
      color: "#22C55E",
      concepts: [
        { term: "Built Sky with Strength", arabic: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ", meaning: "And the sky We constructed with strength", ayahs: [47] },
        { term: "We Are Expanding", arabic: "وَإِنَّا لَمُوسِعُونَ", meaning: "And indeed, We are [its] expanders", ayahs: [47] },
        { term: "Spread Earth", arabic: "وَالْأَرْضَ فَرَشْنَاهَا", meaning: "And the earth We have spread out", ayahs: [48] },
        { term: "Excellent Spreaders", arabic: "فَنِعْمَ الْمَاهِدُونَ", meaning: "How excellent is the preparer", ayahs: [48] },
        { term: "Created Pairs", arabic: "وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ", meaning: "And of all things We created two pairs", ayahs: [49] },
        { term: "That You Remember", arabic: "لَعَلَّكُمْ تَذَكَّرُونَ", meaning: "That perhaps you may remember", ayahs: [49] }
      ]
    },

    purposeOfCreation: {
      name: "Purpose of Creation",
      nameAr: "الحكمة من الخلق",
      color: "#EF4444",
      concepts: [
        { term: "Flee to Allah", arabic: "فَفِرُّوا إِلَى اللَّهِ", meaning: "So flee to Allah", ayahs: [50] },
        { term: "Clear Warner", arabic: "إِنِّي لَكُم مِّنْهُ نَذِيرٌ مُّبِينٌ", meaning: "Indeed, I am to you from Him a clear warner", ayahs: [50, 51] },
        { term: "No Other God", arabic: "وَلَا تَجْعَلُوا مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: "And do not make with Allah another deity", ayahs: [51] },
        { term: "Created for Worship", arabic: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ", meaning: "I did not create jinn and mankind except to worship Me", ayahs: [56] },
        { term: "No Provision Wanted", arabic: "مَا أُرِيدُ مِنْهُم مِّن رِّزْقٍ", meaning: "I do not want from them any provision", ayahs: [57] },
        { term: "No Food Wanted", arabic: "وَمَا أُرِيدُ أَن يُطْعِمُونِ", meaning: "Nor do I want them to feed Me", ayahs: [57] },
        { term: "Allah is Provider", arabic: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ", meaning: "Indeed, Allah is the Provider", ayahs: [58] },
        { term: "Firm Strength", arabic: "ذُو الْقُوَّةِ الْمَتِينُ", meaning: "Owner of firm strength", ayahs: [58] }
      ]
    },

    warningToDisbelievers: {
      name: "Warning to Disbelievers",
      nameAr: "تحذير المكذبين",
      color: "#F43F5E",
      concepts: [
        { term: "Share of Punishment", arabic: "فَإِنَّ لِلَّذِينَ ظَلَمُوا ذَنُوبًا", meaning: "Those who wronged have a share [of punishment]", ayahs: [59] },
        { term: "Like Their Companions", arabic: "مِّثْلَ ذَنُوبِ أَصْحَابِهِمْ", meaning: "Like the share of their companions", ayahs: [59] },
        { term: "Do Not Hasten", arabic: "فَلَا يَسْتَعْجِلُونِ", meaning: "So let them not impatiently urge Me", ayahs: [59] },
        { term: "Woe to Them", arabic: "فَوَيْلٌ لِّلَّذِينَ كَفَرُوا", meaning: "Woe to those who disbelieve", ayahs: [60] },
        { term: "Promised Day", arabic: "مِن يَوْمِهِمُ الَّذِي يُوعَدُونَ", meaning: "From their Day which they are promised", ayahs: [60] }
      ]
    }
  },

  relationships: [
    { from: "Cosmic Oaths", to: "Judgment Promise", type: "proof", description: "Natural phenomena testify to certain resurrection" },
    { from: "Signs on Earth/Self", to: "Certainty of Faith", type: "evidence", description: "Creation signs lead to conviction" },
    { from: "Ibrahim's Guests", to: "Promise of Ishaq", type: "glad_tidings", description: "Angels brought news of son despite old age" },
    { from: "Ibrahim's Guests", to: "Lut's Destruction", type: "dual_mission", description: "Same angels brought good news and destruction" },
    { from: "Destroyed Nations", to: "Warning to Quraysh", type: "parallel", description: "Past punishments warn present deniers" },
    { from: "Created for Worship", to: "Flee to Allah", type: "purpose", description: "Knowing purpose leads to action" },
    { from: "Expanding Universe", to: "Divine Power", type: "evidence", description: "Cosmic expansion proves Allah's ability" },
    { from: "Created Pairs", to: "Divine Wisdom", type: "demonstration", description: "Pairs in creation show deliberate design" }
  ],

  thematicFlow: {
    title: "From Cosmic Signs to Life's Purpose",
    stages: [
      { name: "Cosmic Oaths", ayahs: [1, 2, 3, 4, 5, 6], description: "Winds, clouds, ships, angels testify to Judgment" },
      { name: "Sky Pathways", ayahs: [7, 8, 9], description: "Woven sky, conflicting speech" },
      { name: "Liars' Fate", ayahs: [10, 11, 12, 13, 14], description: "Speculators destroyed, tried over Fire" },
      { name: "Righteous Rewards", ayahs: [15, 16, 17, 18, 19], description: "Gardens, night prayer, charity" },
      { name: "Signs Everywhere", ayahs: [20, 21, 22, 23], description: "On earth, in yourselves, in sky" },
      { name: "Ibrahim's Story", ayahs: [24, 25, 26, 27, 28, 29, 30], description: "Honored guests, good news of son" },
      { name: "Mission to Lut", ayahs: [31, 32, 33, 34, 35, 36, 37], description: "Stones for sinful people" },
      { name: "Musa and Pharaoh", ayahs: [38, 39, 40], description: "Clear authority, drowned in sea" },
      { name: "'Aad's Destruction", ayahs: [41, 42], description: "Barren wind left nothing" },
      { name: "Thamud's End", ayahs: [43, 44, 45], description: "Thunderbolt while watching" },
      { name: "Nuh's People", ayahs: [46], description: "Defiantly disobedient" },
      { name: "Creation Miracles", ayahs: [47, 48, 49], description: "Expanding sky, spread earth, pairs" },
      { name: "Core Message", ayahs: [50, 51, 52, 53, 54, 55, 56, 57, 58], description: "Flee to Allah, worship alone" },
      { name: "Final Warning", ayahs: [59, 60], description: "Share of punishment awaits" }
    ]
  },

  uniqueInsight: {
    title: "The Purpose of Existence (وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ)",
    insight: "Verse 56 is one of the most profound statements in the Quran about human purpose: 'I did not create jinn and mankind except to worship Me.' This verse, placed after multiple stories of destroyed nations and signs in creation, answers the fundamental question: Why do we exist? The answer is not that Allah needs worship (verses 57-58 clarify He needs nothing), but that worship (ibadah) is our path to fulfillment, our way of connecting with the Divine. The verb 'ya'budun' encompasses all acts of devotion, obedience, and love. The positioning after cosmic signs and historical warnings shows that recognizing Allah through His signs naturally leads to worship, while rejecting those signs leads to the fate of previous nations.",
    arabicTerm: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
    rootMeaning: "ع-ب-د (to worship/serve) - defines the relationship between creation and Creator",
    keyAyah: 56
  },

  historicalContext: {
    revelationPeriod: "Makkan period",
    occasion: "Revealed to establish the reality of resurrection through cosmic and historical evidence, and to clarify the purpose of human existence. The surah addresses Quraysh who denied the afterlife despite clear signs all around them.",
    note: "The surah uniquely combines four types of evidence: cosmic phenomena (winds, clouds, sky), earthly signs (creation, pairs), self-reflection (signs within), and historical precedent (destroyed nations). Verse 47 'We are expanding it' (موسعون) is remarkably relevant to modern cosmology's discovery of the expanding universe."
  },

  linguisticFeatures: {
    features: [
      { name: "Opening Oaths", description: "وَالذَّارِيَاتِ... فَالْحَامِلَاتِ... فَالْجَارِيَاتِ... فَالْمُقَسِّمَاتِ", example: "Four connected oaths building momentum", ayah: 1 },
      { name: "Rhetorical Question", description: "أَفَلَا تُبْصِرُونَ", example: "Do you not see?", ayah: 21 },
      { name: "Command to Flee", description: "فَفِرُّوا إِلَى اللَّهِ", example: "Flee to Allah - urgency of return", ayah: 50 },
      { name: "Exclusion Particle", description: "إِلَّا لِيَعْبُدُونِ", example: "'Except to worship' - sole purpose", ayah: 56 },
      { name: "Divine Names", description: "الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ", example: "The Provider, Owner of Firm Strength", ayah: 58 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 52, name: "At-Tur", relationship: "Both open with cosmic oaths, continue resurrection theme", type: "sequential_pair" },
      { surah: 50, name: "Qaf", relationship: "Both focus on resurrection and Day of Judgment", type: "thematic_parallel" },
      { surah: 11, name: "Hud", relationship: "Both detail stories of Nuh, 'Aad, Thamud, Lut", type: "story_parallel" },
      { surah: 15, name: "Al-Hijr", relationship: "Both mention Ibrahim's guests and Lut's people", type: "story_parallel" },
      { surah: 37, name: "As-Saffat", relationship: "Both mention Ibrahim's glad tidings of a son", type: "story_parallel" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Night Worship", how: "Pray tahajjud like the righteous who slept little (v.17)", verse: "51:17" },
      { principle: "Pre-Dawn Seeking", how: "Make istighfar in the early dawn hours (v.18)", verse: "51:18" },
      { principle: "Charity", how: "Recognize others' rights in your wealth (v.19)", verse: "51:19" },
      { principle: "Observe Signs", how: "Look at earth and yourself for evidence of Allah (v.20-21)", verse: "51:20-21" },
      { principle: "Know Your Purpose", how: "Live for worship in all its forms (v.56)", verse: "51:56" },
      { principle: "Flee to Allah", how: "Make Allah your refuge from all troubles (v.50)", verse: "51:50" }
    ]
  }
};

export default ONTOLOGY;
