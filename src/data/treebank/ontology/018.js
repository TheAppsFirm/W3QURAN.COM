/**
 * Surah Al-Kahf (18) - Ontology of Quranic Concepts
 * The Cave - 110 Ayahs
 * Theme: Four stories of trials - faith, wealth, knowledge, and power
 *
 * This surah contains four major narratives:
 * 1. Companions of the Cave (Ashab al-Kahf) - Trial of Faith
 * 2. Owner of Two Gardens - Trial of Wealth
 * 3. Musa and Khidr - Trial of Knowledge
 * 4. Dhul-Qarnayn - Trial of Power
 *
 * Special Virtue: Protection from Dajjal when recited on Fridays
 */

export const ONTOLOGY = {
  surahId: 18,
  surahName: "Al-Kahf",
  surahNameArabic: "الكهف",
  revelationType: "Makki",
  totalAyahs: 110,

  categories: {
    // INTRODUCTION (1-8)
    quranPraise: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Praise of the Quran",
      nameArabic: "الثناء على القرآن",
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ", meaning: "Praise to Allah who revealed", explanation: "Opening with gratitude for revelation", verseRef: "18:1" },
        { term: "كِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا", meaning: "The Book with no crookedness", explanation: "Quran is straight, without deviation", verseRef: "18:1" },
        { term: "قَيِّمًا", meaning: "Upright/Establisher", explanation: "Establishes truth and guides", verseRef: "18:2" },
        { term: "لِّيُنذِرَ بَأْسًا شَدِيدًا", meaning: "To warn of severe punishment", explanation: "Quran as warner", verseRef: "18:2" },
        { term: "وَيُبَشِّرَ الْمُؤْمِنِينَ", meaning: "And give good news to believers", explanation: "Quran as bearer of glad tidings", verseRef: "18:2" }
      ]
    },

    // STORY 1: COMPANIONS OF THE CAVE (9-26)
    companionsOfCave: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Companions of the Cave (Ashab al-Kahf)",
      nameArabic: "أصحاب الكهف - فتنة الدين",
      themeType: "Trial of Faith",
      concepts: [
        { term: "فِتْيَةٌ آمَنُوا بِرَبِّهِمْ", meaning: "Young men who believed in their Lord", explanation: "Youth with strong faith", verseRef: "18:13" },
        { term: "وَزِدْنَاهُمْ هُدًى", meaning: "And We increased them in guidance", explanation: "Allah increases guidance for the guided", verseRef: "18:13" },
        { term: "رَبَطْنَا عَلَىٰ قُلُوبِهِمْ", meaning: "We bound their hearts", explanation: "Allah strengthened their hearts", verseRef: "18:14" },
        { term: "رَبُّنَا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Our Lord is Lord of heavens and earth", explanation: "Declaration of pure Tawheed", verseRef: "18:14" },
        { term: "لَن نَّدْعُوَ مِن دُونِهِ إِلَٰهًا", meaning: "We will never invoke besides Him any deity", explanation: "Rejection of false gods", verseRef: "18:14" },
        { term: "فَأْوُوا إِلَى الْكَهْفِ", meaning: "Retreat to the cave", explanation: "Strategic withdrawal to protect faith", verseRef: "18:16" },
        { term: "يَنشُرْ لَكُمْ رَبُّكُم مِّن رَّحْمَتِهِ", meaning: "Your Lord will spread His mercy", explanation: "Trust in Allah's mercy", verseRef: "18:16" }
      ]
    },

    caveDescription: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Miraculous Sleep",
      nameArabic: "النوم المعجز",
      concepts: [
        { term: "ضَرَبْنَا عَلَىٰ آذَانِهِمْ", meaning: "We cast upon their ears", explanation: "Supernatural deep sleep", verseRef: "18:11" },
        { term: "سِنِينَ عَدَدًا", meaning: "For a number of years", explanation: "Long miraculous slumber", verseRef: "18:11" },
        { term: "لَبِثُوا ثَلَاثَ مِائَةٍ سِنِينَ وَازْدَادُوا تِسْعًا", meaning: "They stayed 300 years, plus 9", explanation: "309 years - solar vs lunar calculation", verseRef: "18:25" },
        { term: "تَزَاوَرُ عَن كَهْفِهِمْ", meaning: "Inclines away from their cave", explanation: "Sun diverted to preserve them", verseRef: "18:17" },
        { term: "ذَاتَ الْيَمِينِ... ذَاتَ الشِّمَالِ", meaning: "To the right... to the left", explanation: "Divine protection from sun", verseRef: "18:17" },
        { term: "وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ", meaning: "Their dog stretching its forelegs", explanation: "Even their companion dog was preserved", verseRef: "18:18" },
        { term: "نُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ", meaning: "We turned them right and left", explanation: "Allah preserved their bodies from decay", verseRef: "18:18" }
      ]
    },

    caveLessons: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Lessons from the Cave",
      nameArabic: "دروس الكهف",
      concepts: [
        { term: "وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا", meaning: "Never say 'I will do this tomorrow'", explanation: "Do not speak of future without Allah", verseRef: "18:23" },
        { term: "إِلَّا أَن يَشَاءَ اللَّهُ", meaning: "Except [with] 'If Allah wills'", explanation: "Always say Insha'Allah for future plans", verseRef: "18:24" },
        { term: "وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ", meaning: "Remember your Lord when you forget", explanation: "Turn to Allah when forgetful", verseRef: "18:24" },
        { term: "سَيَقُولُونَ ثَلَاثَةٌ رَّابِعُهُمْ كَلْبُهُمْ", meaning: "They will say 'three, fourth is their dog'", explanation: "Speculation about their number", verseRef: "18:22" },
        { term: "قُل رَّبِّي أَعْلَمُ بِعِدَّتِهِمْ", meaning: "Say: My Lord knows best their number", explanation: "Only Allah knows hidden matters", verseRef: "18:22" }
      ]
    },

    // STORY 2: TWO GARDENS (32-44)
    twoGardens: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Parable of Two Gardens",
      nameArabic: "مثل الجنتين - فتنة المال",
      themeType: "Trial of Wealth",
      concepts: [
        { term: "جَنَّتَيْنِ مِنْ أَعْنَابٍ", meaning: "Two gardens of grapevines", explanation: "Abundant worldly blessings", verseRef: "18:32" },
        { term: "وَحَفَفْنَاهُمَا بِنَخْلٍ", meaning: "Bordered with palm trees", explanation: "Complete and beautiful gardens", verseRef: "18:32" },
        { term: "وَفَجَّرْنَا خِلَالَهُمَا نَهَرًا", meaning: "We caused a river between them", explanation: "Water - source of life", verseRef: "18:33" },
        { term: "أَنَا أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا", meaning: "I am greater than you in wealth and mightier in men", explanation: "Arrogance from wealth", verseRef: "18:34" },
        { term: "مَا أَظُنُّ أَن تَبِيدَ هَٰذِهِ أَبَدًا", meaning: "I do not think this will ever perish", explanation: "False sense of permanence", verseRef: "18:35" },
        { term: "وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً", meaning: "I do not think the Hour is coming", explanation: "Denial of Day of Judgment", verseRef: "18:36" }
      ]
    },

    believerResponse: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "The Believer's Response",
      nameArabic: "رد المؤمن",
      concepts: [
        { term: "أَكَفَرْتَ بِالَّذِي خَلَقَكَ مِن تُرَابٍ", meaning: "Have you disbelieved in He who created you from dust?", explanation: "Reminder of humble origin", verseRef: "18:37" },
        { term: "لَّٰكِنَّا هُوَ اللَّهُ رَبِّي", meaning: "But as for me, He is Allah, my Lord", explanation: "Strong declaration of faith", verseRef: "18:38" },
        { term: "وَلَا أُشْرِكُ بِرَبِّي أَحَدًا", meaning: "And I do not associate anyone with my Lord", explanation: "Pure Tawheed", verseRef: "18:38" },
        { term: "مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ", meaning: "What Allah willed! No power except with Allah", explanation: "Acknowledgment of divine will and power", verseRef: "18:39" },
        { term: "فَعَسَىٰ رَبِّي أَن يُؤْتِيَنِ خَيْرًا", meaning: "Perhaps my Lord will give me better", explanation: "Hope in Allah's provision", verseRef: "18:40" }
      ]
    },

    gardensDestruction: {
      color: '#10B981',
      icon: 'Book',
      name: "Destruction of the Gardens",
      nameArabic: "هلاك الجنتين",
      concepts: [
        { term: "وَأُحِيطَ بِثَمَرِهِ", meaning: "His fruits were encompassed [by ruin]", explanation: "Complete destruction", verseRef: "18:42" },
        { term: "فَأَصْبَحَ يُقَلِّبُ كَفَّيْهِ", meaning: "He began turning his hands", explanation: "Gesture of regret", verseRef: "18:42" },
        { term: "يَا لَيْتَنِي لَمْ أُشْرِكْ بِرَبِّي أَحَدًا", meaning: "I wish I had not associated anyone with my Lord", explanation: "Regret came too late", verseRef: "18:42" },
        { term: "هُنَالِكَ الْوَلَايَةُ لِلَّهِ الْحَقِّ", meaning: "There authority belongs to Allah, the Truth", explanation: "True protection is from Allah", verseRef: "18:44" }
      ]
    },

    worldlyLifeParable: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Parable of Worldly Life",
      nameArabic: "مثل الحياة الدنيا",
      concepts: [
        { term: "إِنَّمَا مَثَلُ الْحَيَاةِ الدُّنْيَا", meaning: "The example of worldly life", explanation: "Temporary nature illustrated", verseRef: "18:45" },
        { term: "كَمَاءٍ أَنزَلْنَاهُ مِنَ السَّمَاءِ", meaning: "Like water We send down from sky", explanation: "Rain analogy", verseRef: "18:45" },
        { term: "فَاخْتَلَطَ بِهِ نَبَاتُ الْأَرْضِ", meaning: "Vegetation grows with it", explanation: "Life flourishes temporarily", verseRef: "18:45" },
        { term: "فَأَصْبَحَ هَشِيمًا تَذْرُوهُ الرِّيَاحُ", meaning: "It becomes dry debris, scattered by winds", explanation: "All worldly things perish", verseRef: "18:45" },
        { term: "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا", meaning: "Wealth and children are adornment of worldly life", explanation: "Temporary attractions", verseRef: "18:46" },
        { term: "وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ", meaning: "But lasting good deeds are better", explanation: "Eternal deeds outweigh temporal wealth", verseRef: "18:46" }
      ]
    },

    // STORY 3: MUSA AND KHIDR (60-82)
    musaJourney: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Musa's Journey to Knowledge",
      nameArabic: "رحلة موسى للعلم - فتنة العلم",
      themeType: "Trial of Knowledge",
      concepts: [
        { term: "لَا أَبْرَحُ حَتَّىٰ أَبْلُغَ مَجْمَعَ الْبَحْرَيْنِ", meaning: "I will not cease until I reach the junction of two seas", explanation: "Determination to seek knowledge", verseRef: "18:60" },
        { term: "أَوْ أَمْضِيَ حُقُبًا", meaning: "Or I will continue for ages", explanation: "Willingness to journey long", verseRef: "18:60" },
        { term: "اتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ عَجَبًا", meaning: "It took its course into the sea amazingly", explanation: "Sign of the meeting place", verseRef: "18:63" },
        { term: "ذَٰلِكَ مَا كُنَّا نَبْغِ", meaning: "That is what we were seeking", explanation: "Finding the destination", verseRef: "18:64" },
        { term: "فَارْتَدَّا عَلَىٰ آثَارِهِمَا قَصَصًا", meaning: "They returned, retracing their footsteps", explanation: "Going back to find Khidr", verseRef: "18:64" }
      ]
    },

    khidrMeeting: {
      color: '#EF4444',
      icon: 'Users',
      name: "Meeting Khidr",
      nameArabic: "لقاء الخضر",
      concepts: [
        { term: "عَبْدًا مِّنْ عِبَادِنَا", meaning: "A servant from among Our servants", explanation: "Khidr - Allah's special servant", verseRef: "18:65" },
        { term: "آتَيْنَاهُ رَحْمَةً مِّنْ عِندِنَا", meaning: "We gave him mercy from Us", explanation: "Divine blessing upon Khidr", verseRef: "18:65" },
        { term: "وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا", meaning: "Taught him knowledge from Our presence", explanation: "Ladunni (divine) knowledge", verseRef: "18:65" },
        { term: "هَلْ أَتَّبِعُكَ عَلَىٰ أَن تُعَلِّمَنِ", meaning: "May I follow you that you teach me", explanation: "Musa's humble request", verseRef: "18:66" },
        { term: "إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا", meaning: "You will never be able to have patience with me", explanation: "Warning about difficult lessons", verseRef: "18:67" },
        { term: "وَكَيْفَ تَصْبِرُ عَلَىٰ مَا لَمْ تُحِطْ بِهِ خُبْرًا", meaning: "How can you be patient about what you do not encompass in knowledge?", explanation: "Human limitation in understanding divine wisdom", verseRef: "18:68" }
      ]
    },

    threeIncidents: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Three Incidents",
      nameArabic: "الحوادث الثلاث",
      concepts: [
        { term: "خَرَقَهَا", meaning: "He made a hole in it", explanation: "First incident - damaging the ship", verseRef: "18:71" },
        { term: "أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا", meaning: "Have you torn it to drown its people?", explanation: "Musa's objection", verseRef: "18:71" },
        { term: "فَقَتَلَهُ", meaning: "So he killed him", explanation: "Second incident - killing the boy", verseRef: "18:74" },
        { term: "أَقَتَلْتَ نَفْسًا زَكِيَّةً", meaning: "Have you killed a pure soul?", explanation: "Musa's greater objection", verseRef: "18:74" },
        { term: "جِدَارًا يُرِيدُ أَن يَنقَضَّ فَأَقَامَهُ", meaning: "A wall about to collapse, so he restored it", explanation: "Third incident - fixing the wall", verseRef: "18:77" },
        { term: "لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا", meaning: "If you wished, you could have taken payment", explanation: "Musa suggests charging for service", verseRef: "18:77" },
        { term: "هَٰذَا فِرَاقُ بَيْنِي وَبَيْنِكَ", meaning: "This is the parting between me and you", explanation: "End of companionship", verseRef: "18:78" }
      ]
    },

    khidrExplanations: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Khidr's Explanations",
      nameArabic: "تفسير الخضر",
      concepts: [
        { term: "أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ", meaning: "As for the ship, it belonged to poor people", explanation: "Ship damage to save from tyrannical king", verseRef: "18:79" },
        { term: "وَكَانَ وَرَاءَهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا", meaning: "Behind them was a king seizing every [good] ship", explanation: "Hidden threat avoided", verseRef: "18:79" },
        { term: "أَبَوَاهُ مُؤْمِنَيْنِ", meaning: "His parents were believers", explanation: "Parents would be tested by ungrateful son", verseRef: "18:80" },
        { term: "فَخَشِينَا أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا", meaning: "We feared he would burden them with transgression and disbelief", explanation: "Son would cause parents to go astray", verseRef: "18:80" },
        { term: "فَأَرَدْنَا أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا", meaning: "We intended that their Lord substitute better", explanation: "Allah's better replacement", verseRef: "18:81" },
        { term: "وَكَانَ أَبُوهُمَا صَالِحًا", meaning: "Their father had been righteous", explanation: "Grandfather's righteousness protected grandsons' treasure", verseRef: "18:82" },
        { term: "وَمَا فَعَلْتُهُ عَنْ أَمْرِي", meaning: "I did not do it of my own accord", explanation: "All actions by Allah's command", verseRef: "18:82" }
      ]
    },

    // STORY 4: DHUL-QARNAYN (83-98)
    dhulQarnaynIntro: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Dhul-Qarnayn's Authority",
      nameArabic: "ذو القرنين - فتنة السلطة",
      themeType: "Trial of Power",
      concepts: [
        { term: "مَكَّنَّا لَهُ فِي الْأَرْضِ", meaning: "We established him in the earth", explanation: "Allah granted him authority", verseRef: "18:84" },
        { term: "وَآتَيْنَاهُ مِن كُلِّ شَيْءٍ سَبَبًا", meaning: "We gave him means to everything", explanation: "Resources and capabilities", verseRef: "18:84" },
        { term: "فَأَتْبَعَ سَبَبًا", meaning: "So he followed a way", explanation: "Used resources purposefully", verseRef: "18:85" }
      ]
    },

    threeJourneys: {
      color: '#EC4899',
      icon: 'Globe',
      name: "The Three Journeys",
      nameArabic: "الرحلات الثلاث",
      concepts: [
        { term: "مَغْرِبَ الشَّمْسِ", meaning: "Setting of the sun", explanation: "First journey - to the west", verseRef: "18:86" },
        { term: "وَجَدَهَا تَغْرُبُ فِي عَيْنٍ حَمِئَةٍ", meaning: "Found it setting in a muddy spring", explanation: "Western ocean appearance", verseRef: "18:86" },
        { term: "مَطْلِعَ الشَّمْسِ", meaning: "Rising of the sun", explanation: "Second journey - to the east", verseRef: "18:90" },
        { term: "لَمْ نَجْعَل لَّهُم مِّن دُونِهَا سِتْرًا", meaning: "We made no veil for them against it", explanation: "Exposed people without shelter", verseRef: "18:90" },
        { term: "بَيْنَ السَّدَّيْنِ", meaning: "Between two mountains", explanation: "Third journey - to the barrier", verseRef: "18:93" }
      ]
    },

    yajoojMajooj: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Yajuj and Majuj (Gog and Magog)",
      nameArabic: "يأجوج ومأجوج",
      concepts: [
        { term: "يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ فِي الْأَرْضِ", meaning: "Gog and Magog are corrupters in the land", explanation: "Destructive nations", verseRef: "18:94" },
        { term: "نَجْعَلُ لَكَ خَرْجًا", meaning: "May we assign for you an expenditure", explanation: "People offer payment for protection", verseRef: "18:94" },
        { term: "مَا مَكَّنِّي فِيهِ رَبِّي خَيْرٌ", meaning: "What my Lord has established me in is better", explanation: "Dhul-Qarnayn refuses payment", verseRef: "18:95" },
        { term: "فَأَعِينُونِي بِقُوَّةٍ", meaning: "Aid me with strength", explanation: "Requests labor, not wealth", verseRef: "18:95" },
        { term: "آتُونِي زُبَرَ الْحَدِيدِ", meaning: "Bring me blocks of iron", explanation: "Iron construction materials", verseRef: "18:96" },
        { term: "أُفْرِغْ عَلَيْهِ قِطْرًا", meaning: "Pour over it molten copper", explanation: "Barrier construction technique", verseRef: "18:96" }
      ]
    },

    barrierSuccess: {
      color: '#10B981',
      icon: 'Book',
      name: "The Barrier's Success",
      nameArabic: "نجاح السد",
      concepts: [
        { term: "فَمَا اسْطَاعُوا أَن يَظْهَرُوهُ", meaning: "They could not scale it", explanation: "Barrier too high to climb", verseRef: "18:97" },
        { term: "وَمَا اسْتَطَاعُوا لَهُ نَقْبًا", meaning: "Nor could they penetrate it", explanation: "Barrier too strong to pierce", verseRef: "18:97" },
        { term: "هَٰذَا رَحْمَةٌ مِّن رَّبِّي", meaning: "This is a mercy from my Lord", explanation: "Dhul-Qarnayn's attribution to Allah", verseRef: "18:98" },
        { term: "فَإِذَا جَاءَ وَعْدُ رَبِّي جَعَلَهُ دَكَّاءَ", meaning: "When the promise of my Lord comes, He will make it level", explanation: "Barrier will fall before Day of Judgment", verseRef: "18:98" },
        { term: "وَكَانَ وَعْدُ رَبِّي حَقًّا", meaning: "And the promise of my Lord is truth", explanation: "Certainty of Allah's promise", verseRef: "18:98" }
      ]
    },

    // DAY OF JUDGMENT (99-110)
    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍ يَمُوجُ فِي بَعْضٍ", meaning: "We will leave them surging over each other", explanation: "Chaos when barrier breaks", verseRef: "18:99" },
        { term: "وَنُفِخَ فِي الصُّورِ فَجَمَعْنَاهُمْ جَمْعًا", meaning: "The trumpet is blown and We gather them all", explanation: "Resurrection gathering", verseRef: "18:99" },
        { term: "وَعَرَضْنَا جَهَنَّمَ يَوْمَئِذٍ لِّلْكَافِرِينَ عَرْضًا", meaning: "We present Hell to disbelievers on display", explanation: "Hell made visible", verseRef: "18:100" },
        { term: "أَفَحَسِبَ الَّذِينَ كَفَرُوا أَن يَتَّخِذُوا عِبَادِي", meaning: "Did those who disbelieve think they could take My servants", explanation: "False worship exposed", verseRef: "18:102" },
        { term: "الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا", meaning: "Those whose effort is lost in worldly life", explanation: "Wasted efforts of disbelievers", verseRef: "18:104" },
        { term: "يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا", meaning: "They think they are doing good", explanation: "Self-deception in misguidance", verseRef: "18:104" }
      ]
    },

    // CLOSING MESSAGE (105-110)
    closingMessage: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Final Message",
      nameArabic: "الخاتمة",
      concepts: [
        { term: "فَلَا نُقِيمُ لَهُمْ يَوْمَ الْقِيَامَةِ وَزْنًا", meaning: "We will not assign them any weight on Day of Resurrection", explanation: "Worthless deeds of disbelievers", verseRef: "18:105" },
        { term: "جَزَاؤُهُمْ جَهَنَّمُ", meaning: "Their recompense is Hell", explanation: "Consequence of disbelief", verseRef: "18:106" },
        { term: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", meaning: "Those who believe and do righteous deeds", explanation: "Believers rewarded", verseRef: "18:107" },
        { term: "جَنَّاتُ الْفِرْدَوْسِ نُزُلًا", meaning: "Gardens of Paradise as lodging", explanation: "Highest level of Paradise", verseRef: "18:107" },
        { term: "خَالِدِينَ فِيهَا لَا يَبْغُونَ عَنْهَا حِوَلًا", meaning: "Abiding eternally, never desiring transfer", explanation: "Complete satisfaction in Paradise", verseRef: "18:108" },
        { term: "قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي", meaning: "Say: If the sea were ink for the words of my Lord", explanation: "Allah's knowledge is infinite", verseRef: "18:109" },
        { term: "لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي", meaning: "The sea would be exhausted before the words of my Lord", explanation: "Ocean cannot contain divine wisdom", verseRef: "18:109" },
        { term: "إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ", meaning: "I am only a man like you, to whom it is revealed", explanation: "Prophet's humility", verseRef: "18:110" },
        { term: "إِنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ", meaning: "Your God is only One God", explanation: "Core message of Tawheed", verseRef: "18:110" },
        { term: "فَمَن كَانَ يَرْجُو لِقَاءَ رَبِّهِ", meaning: "Whoever hopes to meet his Lord", explanation: "Hope in the afterlife", verseRef: "18:110" },
        { term: "فَلْيَعْمَلْ عَمَلًا صَالِحًا", meaning: "Let him do righteous work", explanation: "Action required for hope", verseRef: "18:110" },
        { term: "وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا", meaning: "And not associate anyone in the worship of his Lord", explanation: "Closing with Tawheed", verseRef: "18:110" }
      ]
    }
  },

  relationships: [
    // Story 1 Connections
    { from: "فتية آمنوا", to: "زدناهم هدى", type: "cause-effect", description: "Faith leads to increased guidance" },
    { from: "ربطنا على قلوبهم", to: "فأووا إلى الكهف", type: "enabler", description: "Strong hearts enabled brave action" },
    { from: "أهل الكهف", to: "إلا أن يشاء الله", type: "lesson", description: "Cave story teaches Insha'Allah" },

    // Story 2 Connections
    { from: "أنا أكثر منك مالاً", to: "وأحيط بثمره", type: "cause-effect", description: "Arrogance leads to destruction" },
    { from: "ما شاء الله", to: "البقيات الصالحات", type: "contrast", description: "True acknowledgment vs worldly focus" },
    { from: "كماء أنزلناه", to: "هشيماً تذروه الرياح", type: "transformation", description: "Worldly life's temporary nature" },

    // Story 3 Connections
    { from: "علمناه من لدنا علماً", to: "لن تستطيع معي صبراً", type: "warning", description: "Divine knowledge hard for humans to grasp" },
    { from: "خرقها", to: "ملك يأخذ كل سفينة غصباً", type: "wisdom", description: "Damage prevented greater loss" },
    { from: "قتله", to: "يرهقهما طغياناً", type: "wisdom", description: "Death prevented parents' spiritual ruin" },
    { from: "أقامه", to: "كان أبوهما صالحاً", type: "wisdom", description: "Wall protected orphans' treasure" },

    // Story 4 Connections
    { from: "مكنا له في الأرض", to: "ما مكني فيه ربي خير", type: "humility", description: "Power attributed to Allah" },
    { from: "هذا رحمة من ربي", to: "جعله دكاء", type: "temporality", description: "Even great works are temporary" },

    // Cross-Story Connections
    { from: "فتنة الدين", to: "فتنة المال", type: "parallel", description: "Faith trial vs wealth trial" },
    { from: "فتنة العلم", to: "فتنة السلطة", type: "parallel", description: "Knowledge trial vs power trial" },
    { from: "أهل الكهف", to: "ذو القرنين", type: "contrast", description: "Powerless youth vs powerful king - both succeeded" },
    { from: "صاحب الجنتين", to: "ذو القرنين", type: "contrast", description: "Wealth corrupted one, power humbled the other" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction", verses: "18:1-8", description: "Praise of Quran and its purpose" },
      { stage: 2, theme: "Companions of Cave", verses: "18:9-26", description: "Trial of faith - youth flee for religion" },
      { stage: 3, theme: "Two Gardens", verses: "18:32-44", description: "Trial of wealth - arrogance leads to ruin" },
      { stage: 4, theme: "Nature of Life", verses: "18:45-49", description: "Worldly life compared to vegetation" },
      { stage: 5, theme: "Musa and Khidr", verses: "18:60-82", description: "Trial of knowledge - patience with divine wisdom" },
      { stage: 6, theme: "Dhul-Qarnayn", verses: "18:83-98", description: "Trial of power - righteous use of authority" },
      { stage: 7, theme: "Day of Judgment", verses: "18:99-106", description: "Ultimate accountability" },
      { stage: 8, theme: "Closing", verses: "18:107-110", description: "Paradise for believers, core message of Tawheed" }
    ]
  },

  fourTrials: {
    title: "The Four Trials (Fitan)",
    titleArabic: "الفتن الأربعة",
    description: "Each story in Al-Kahf addresses a major trial humans face, with guidance on how to overcome it",
    trials: [
      {
        trial: "Trial of Faith (Fitnah ad-Din)",
        trialArabic: "فتنة الدين",
        story: "Companions of the Cave",
        storyArabic: "أصحاب الكهف",
        verses: "18:9-26",
        challenge: "Pressure to abandon faith",
        solution: "Seek refuge, trust in Allah, maintain companions of faith",
        keyPhrase: "فَأْوُوا إِلَى الْكَهْفِ",
        protection: "First 10 and last 10 verses protect from Dajjal's trial of faith"
      },
      {
        trial: "Trial of Wealth (Fitnah al-Mal)",
        trialArabic: "فتنة المال",
        story: "Owner of Two Gardens",
        storyArabic: "صاحب الجنتين",
        verses: "18:32-44",
        challenge: "Wealth leading to arrogance and forgetfulness",
        solution: "Say 'Ma sha Allah la quwwata illa billah', remember Allah is true provider",
        keyPhrase: "مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ",
        protection: "Remembering all blessings are from Allah protects from Dajjal's material temptations"
      },
      {
        trial: "Trial of Knowledge (Fitnah al-Ilm)",
        trialArabic: "فتنة العلم",
        story: "Musa and Khidr",
        storyArabic: "موسى والخضر",
        verses: "18:60-82",
        challenge: "Pride in knowledge, inability to accept what we don't understand",
        solution: "Humility, patience, recognition that Allah's wisdom surpasses ours",
        keyPhrase: "وَكَيْفَ تَصْبِرُ عَلَىٰ مَا لَمْ تُحِطْ بِهِ خُبْرًا",
        protection: "Humility before divine wisdom protects from Dajjal's false knowledge"
      },
      {
        trial: "Trial of Power (Fitnah as-Sultan)",
        trialArabic: "فتنة السلطة",
        story: "Dhul-Qarnayn",
        storyArabic: "ذو القرنين",
        verses: "18:83-98",
        challenge: "Power leading to oppression and self-glorification",
        solution: "Use power for good, attribute success to Allah, serve people",
        keyPhrase: "هَٰذَا رَحْمَةٌ مِّن رَّبِّي",
        protection: "Attributing power to Allah protects from Dajjal's claim of divinity"
      }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Say Insha'Allah for future plans", how: "Never speak of tomorrow without Allah's will", verse: "18:23-24" },
      { principle: "Say Ma sha Allah for blessings", how: "Acknowledge Allah's role in all good", verse: "18:39" },
      { principle: "Recite first/last 10 verses", how: "Protection from Dajjal's trials", verse: "18:1-10, 101-110" },
      { principle: "Seek good company", how: "Companions affect faith like Cave dwellers", verse: "18:28" },
      { principle: "Don't be deceived by wealth", how: "Remember parable of two gardens", verse: "18:45-46" },
      { principle: "Accept divine wisdom", how: "What seems bad may be good - like Khidr's actions", verse: "18:82" },
      { principle: "Use power righteously", how: "Dhul-Qarnayn served, didn't exploit", verse: "18:95" },
      { principle: "Focus on eternal deeds", how: "Al-Baqiyat as-Salihat outlast wealth", verse: "18:46" }
    ]
  },

  uniqueInsight: {
    title: "Friday Recitation and Protection from Dajjal",
    titleArabic: "قراءة يوم الجمعة والحماية من الدجال",
    insight: "The Prophet Muhammad (peace be upon him) said: 'Whoever recites Surah Al-Kahf on Friday, Allah will illuminate him with light between the two Fridays' (Al-Hakim). In another narration: 'Whoever memorizes ten verses from the beginning of Surah Al-Kahf will be protected from the trial of the Dajjal (Antichrist)' (Muslim). The connection is profound: Dajjal represents the ultimate manifestation of all four trials - he will test faith (claiming divinity), offer wealth (controlling resources), claim special knowledge (false miracles), and wield power (global control). Al-Kahf provides the antidote to each: the youth's uncompromising faith, recognition that wealth is from Allah, patience with divine wisdom beyond human understanding, and attribution of all success to Allah. The Friday recitation creates a weekly spiritual fortification, a 'light between two Fridays' that protects the believer's heart from the deceptions of false messiahs and worldly temptations. The surah teaches that trials - whether persecution, prosperity, perplexity, or power - are all opportunities to turn to Allah."
  },

  historicalContext: {
    note: "Surah Al-Kahf was revealed in Makkah when the Quraysh, at the suggestion of the Jews of Medina, asked the Prophet (peace be upon him) three questions: about the young men who disappeared, about a great traveler, and about the soul. The surah answers the first two questions (Companions of Cave and Dhul-Qarnayn) while the third is answered briefly in Surah Al-Isra. The Prophet waited 15 days for revelation without saying 'Insha'Allah,' and the surah itself corrects this with verses 23-24. The stories were meant to test the Prophet's prophethood, but they became timeless lessons for all believers facing trials of faith, wealth, knowledge, and power."
  },

  linguisticFeatures: {
    features: [
      { feature: "الكهف", example: "The Cave", effect: "Cave symbolizes refuge, protection, spiritual retreat" },
      { feature: "تَزَاوَرُ", example: "Inclines away (Form VI)", effect: "Intensive form - sun actively moves away to protect them" },
      { feature: "رَقِيمٍ", example: "Inscription", effect: "Mysterious word - their story inscribed/recorded" },
      { feature: "عِوَجًا قَيِّمًا", example: "Crookedness/Upright", effect: "Perfect contrast describing Quran" },
      { feature: "حُقُبًا", example: "Ages/Eras", effect: "Indefinite long period - Musa's determination" },
      { feature: "لَدُنِّي", example: "From Our presence", effect: "Special divine knowledge - Ladunni ilm" },
      { feature: "سَدَّيْنِ", example: "Two barriers", effect: "Dual form emphasizing the gap between mountains" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "18:25", topic: "309 years", note: "300 solar years = 309 lunar years - mathematical precision" },
      { verse: "18:17-18", topic: "Sleep preservation", note: "Sun avoidance and turning prevents bedsores and decay" },
      { verse: "18:47", topic: "Mountains leveled", note: "Geological upheaval of Day of Judgment" },
      { verse: "18:96", topic: "Iron-copper barrier", note: "Ancient metallurgical technique - iron core, copper coating" },
      { verse: "18:109", topic: "Ocean as ink", note: "Illustrates infinity of divine knowledge" }
    ]
  },

  connectionToDajjal: {
    title: "How Al-Kahf Protects from Dajjal",
    titleArabic: "كيف تحمي الكهف من الدجال",
    connections: [
      { dajjalTrait: "Claims divinity", surahResponse: "Youth declared 'Our Lord is Lord of heavens and earth'", verse: "18:14" },
      { dajjalTrait: "Controls food/water", surahResponse: "Garden owner learned all provision is from Allah", verse: "18:40" },
      { dajjalTrait: "Performs false miracles", surahResponse: "Khidr's story shows true miracles serve hidden wisdom", verse: "18:82" },
      { dajjalTrait: "Rules the earth", surahResponse: "Dhul-Qarnayn had authority but attributed it to Allah", verse: "18:98" },
      { dajjalTrait: "Deceives with falsehood", surahResponse: "First verses declare Quran has no crookedness", verse: "18:1-2" },
      { dajjalTrait: "Tests faith of believers", surahResponse: "Cave youth prioritized faith over comfort", verse: "18:16" }
    ]
  }
};

export default ONTOLOGY;
