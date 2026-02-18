/**
 * Surah An-Nahl (16) - Ontology of Quranic Concepts
 * The Bee - 128 Ayahs, Makki
 * Theme: Divine blessings enumeration, signs in nature, justice and kindness, gratitude
 */

export const ONTOLOGY = {
  surahId: 16,
  surahName: "An-Nahl",
  surahNameArabic: "النحل",
  revelationType: "Makki",
  totalAyahs: 128,

  categories: {
    divineDecree: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Decree & Command",
      nameArabic: "أمر الله",
      concepts: [
        { term: "أَتَىٰ أَمْرُ اللَّهِ", meaning: "The command of Allah is coming", explanation: "Opening declaration - Day of Judgment is certain", verseRef: "16:1" },
        { term: "فَلَا تَسْتَعْجِلُوهُ", meaning: "So do not hasten it", explanation: "Warning against demanding punishment prematurely", verseRef: "16:1" },
        { term: "سُبْحَانَهُ وَتَعَالَىٰ", meaning: "Exalted is He and high above", explanation: "Allah transcends all partners", verseRef: "16:1" }
      ]
    },

    propheticRevelation: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Revelation & Prophets",
      nameArabic: "الوحي والرسل",
      concepts: [
        { term: "يُنَزِّلُ الْمَلَائِكَةَ بِالرُّوحِ", meaning: "He sends down angels with the spirit/revelation", explanation: "Divine method of guidance through angels", verseRef: "16:2" },
        { term: "أَنْ أَنذِرُوا", meaning: "Warn that", explanation: "Core prophetic mission - warning of monotheism", verseRef: "16:2" },
        { term: "لَا إِلَٰهَ إِلَّا أَنَا فَاتَّقُونِ", meaning: "There is no deity except Me, so fear Me", explanation: "Central message of all prophets", verseRef: "16:2" },
        { term: "وَمَا أَرْسَلْنَا مِن قَبْلِكَ", meaning: "And We did not send before you", explanation: "All previous messengers taught same message", verseRef: "16:43" },
        { term: "فَاسْأَلُوا أَهْلَ الذِّكْرِ", meaning: "So ask people of knowledge", explanation: "Seeking knowledge from experts", verseRef: "16:43" }
      ]
    },

    creationSigns: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Signs in Creation",
      nameArabic: "آيات الخلق",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ", meaning: "Created heavens and earth in truth", explanation: "Creation has purpose and truth", verseRef: "16:3" },
        { term: "خَلَقَ الْإِنسَانَ مِن نُّطْفَةٍ", meaning: "Created man from a drop", explanation: "Human origin from humble beginning", verseRef: "16:4" },
        { term: "وَالْأَنْعَامَ خَلَقَهَا", meaning: "And the livestock He created", explanation: "Animals as blessing - warmth, benefits, food", verseRef: "16:5" },
        { term: "وَالْخَيْلَ وَالْبِغَالَ وَالْحَمِيرَ", meaning: "And horses, mules, and donkeys", explanation: "Transportation and adornment", verseRef: "16:8" },
        { term: "وَيَخْلُقُ مَا لَا تَعْلَمُونَ", meaning: "And He creates what you do not know", explanation: "Future inventions and unknown creations", verseRef: "16:8" }
      ]
    },

    waterBlessing: {
      color: '#F59E0B',
      icon: 'Star',
      name: "The Blessing of Water",
      nameArabic: "نعمة الماء",
      concepts: [
        { term: "هُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: "He who sent down water from sky", explanation: "Rain as divine provision", verseRef: "16:10" },
        { term: "لَّكُم مِّنْهُ شَرَابٌ", meaning: "From it is drink for you", explanation: "Water for drinking", verseRef: "16:10" },
        { term: "وَمِنْهُ شَجَرٌ", meaning: "And from it is foliage", explanation: "Vegetation for animals", verseRef: "16:10" },
        { term: "يُنبِتُ لَكُم بِهِ الزَّرْعَ", meaning: "He causes to grow crops for you", explanation: "Agriculture dependent on rain", verseRef: "16:11" },
        { term: "وَالزَّيْتُونَ وَالنَّخِيلَ وَالْأَعْنَابَ", meaning: "Olives, palms, and grapes", explanation: "Variety of fruits as blessing", verseRef: "16:11" }
      ]
    },

    cosmicSigns: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Cosmic Signs",
      nameArabic: "الآيات الكونية",
      concepts: [
        { term: "وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ", meaning: "He subjected for you night and day", explanation: "Celestial system in service", verseRef: "16:12" },
        { term: "وَالشَّمْسَ وَالْقَمَرَ", meaning: "And the sun and moon", explanation: "Celestial bodies in divine service", verseRef: "16:12" },
        { term: "وَالنُّجُومُ مُسَخَّرَاتٌ بِأَمْرِهِ", meaning: "Stars subjected by His command", explanation: "Stars for guidance", verseRef: "16:12" },
        { term: "وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ", meaning: "He cast into earth mountains", explanation: "Mountains as stabilizers", verseRef: "16:15" },
        { term: "وَعَلَامَاتٍ ۚ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ", meaning: "And landmarks, by stars they guide themselves", explanation: "Navigation signs", verseRef: "16:16" }
      ]
    },

    seaBlessing: {
      color: '#EF4444',
      icon: 'Users',
      name: "Blessings of the Sea",
      nameArabic: "نعم البحر",
      concepts: [
        { term: "وَهُوَ الَّذِي سَخَّرَ الْبَحْرَ", meaning: "He who subjected the sea", explanation: "Sea in service of humans", verseRef: "16:14" },
        { term: "لِتَأْكُلُوا مِنْهُ لَحْمًا طَرِيًّا", meaning: "That you may eat fresh meat", explanation: "Seafood as provision", verseRef: "16:14" },
        { term: "وَتَسْتَخْرِجُوا مِنْهُ حِلْيَةً", meaning: "Extract ornaments from it", explanation: "Pearls and coral", verseRef: "16:14" },
        { term: "وَتَرَى الْفُلْكَ مَوَاخِرَ فِيهِ", meaning: "See ships sailing through it", explanation: "Maritime transport", verseRef: "16:14" },
        { term: "وَلِتَبْتَغُوا مِن فَضْلِهِ", meaning: "That you may seek His bounty", explanation: "Trade through seas", verseRef: "16:14" }
      ]
    },

    theBee: {
      color: '#EC4899',
      icon: 'Globe',
      name: "The Bee - Central Theme",
      nameArabic: "النحل",
      concepts: [
        { term: "وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ", meaning: "Your Lord inspired the bee", explanation: "Divine instinct given to bees", verseRef: "16:68" },
        { term: "أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا", meaning: "Make homes in mountains", explanation: "Bee habitats - mountains, trees, structures", verseRef: "16:68" },
        { term: "وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ", meaning: "And in trees and in what they construct", explanation: "Various dwelling places", verseRef: "16:68" },
        { term: "ثُمَّ كُلِي مِن كُلِّ الثَّمَرَاتِ", meaning: "Then eat from all fruits", explanation: "Bee collecting nectar", verseRef: "16:69" },
        { term: "فَاسْلُكِي سُبُلَ رَبِّكِ ذُلُلًا", meaning: "Follow paths of your Lord made easy", explanation: "Divine guidance in bee behavior", verseRef: "16:69" },
        { term: "يَخْرُجُ مِن بُطُونِهَا شَرَابٌ", meaning: "Emerges from its bellies a drink", explanation: "Honey production", verseRef: "16:69" },
        { term: "مُّخْتَلِفٌ أَلْوَانُهُ", meaning: "Varying in colors", explanation: "Different types of honey", verseRef: "16:69" },
        { term: "فِيهِ شِفَاءٌ لِّلنَّاسِ", meaning: "In it is healing for people", explanation: "Medicinal properties of honey", verseRef: "16:69" }
      ]
    },

    humanBlessings: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Human Faculties & Life",
      nameArabic: "نعم الإنسان",
      concepts: [
        { term: "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ", meaning: "Allah brought you from mothers' wombs", explanation: "Birth knowing nothing", verseRef: "16:78" },
        { term: "لَا تَعْلَمُونَ شَيْئًا", meaning: "Knowing nothing", explanation: "Initial state of ignorance", verseRef: "16:78" },
        { term: "وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ", meaning: "Made for you hearing, vision, and hearts", explanation: "Three faculties for learning", verseRef: "16:78" },
        { term: "لَعَلَّكُمْ تَشْكُرُونَ", meaning: "That perhaps you will be grateful", explanation: "Faculties should lead to gratitude", verseRef: "16:78" }
      ]
    },

    homeShelter: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Homes & Shelter",
      nameArabic: "البيوت والسكن",
      concepts: [
        { term: "وَاللَّهُ جَعَلَ لَكُم مِّن بُيُوتِكُمْ سَكَنًا", meaning: "Allah made your homes a place of rest", explanation: "Peace in homes", verseRef: "16:80" },
        { term: "وَجَعَلَ لَكُم مِّن جُلُودِ الْأَنْعَامِ بُيُوتًا", meaning: "Made for you from animal skins houses", explanation: "Tents from leather - portable", verseRef: "16:80" },
        { term: "تَسْتَخِفُّونَهَا يَوْمَ ظَعْنِكُمْ", meaning: "Light for travel day", explanation: "Easy to carry during travel", verseRef: "16:80" },
        { term: "وَيَوْمَ إِقَامَتِكُمْ", meaning: "And day of residence", explanation: "Suitable for settlement too", verseRef: "16:80" },
        { term: "وَمِنْ أَصْوَافِهَا وَأَوْبَارِهَا وَأَشْعَارِهَا", meaning: "From wool, fur, and hair", explanation: "Materials for furnishing", verseRef: "16:80" },
        { term: "أَثَاثًا وَمَتَاعًا إِلَىٰ حِينٍ", meaning: "Furnishing and enjoyment for a time", explanation: "Temporary worldly provisions", verseRef: "16:80" }
      ]
    },

    shadesProtection: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Shades & Protection",
      nameArabic: "الظلال والحماية",
      concepts: [
        { term: "وَاللَّهُ جَعَلَ لَكُم مِّمَّا خَلَقَ ظِلَالًا", meaning: "Allah made shade from what He created", explanation: "Natural shade - trees, mountains", verseRef: "16:81" },
        { term: "وَجَعَلَ لَكُم مِّنَ الْجِبَالِ أَكْنَانًا", meaning: "Made shelters in mountains", explanation: "Caves and mountain refuges", verseRef: "16:81" },
        { term: "وَجَعَلَ لَكُمْ سَرَابِيلَ تَقِيكُمُ الْحَرَّ", meaning: "Made garments to protect from heat", explanation: "Clothing as protection", verseRef: "16:81" },
        { term: "وَسَرَابِيلَ تَقِيكُم بَأْسَكُمْ", meaning: "And armor to protect in battle", explanation: "Protective gear for war", verseRef: "16:81" }
      ]
    },

    tawheedRefutation: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Refutation of Polytheism",
      nameArabic: "إبطال الشرك",
      concepts: [
        { term: "أَفَمَن يَخْلُقُ كَمَن لَّا يَخْلُقُ", meaning: "Is He who creates like one who does not?", explanation: "Creator vs created - cannot be equal", verseRef: "16:17" },
        { term: "وَالَّذِينَ يَدْعُونَ مِن دُونِ اللَّهِ لَا يَخْلُقُونَ شَيْئًا", meaning: "Those they invoke besides Allah create nothing", explanation: "False gods are powerless", verseRef: "16:20" },
        { term: "وَهُمْ يُخْلَقُونَ", meaning: "And they themselves are created", explanation: "Idols are created things", verseRef: "16:20" },
        { term: "أَمْوَاتٌ غَيْرُ أَحْيَاءٍ", meaning: "Dead, not alive", explanation: "False gods are lifeless", verseRef: "16:21" },
        { term: "وَمَا يَشْعُرُونَ أَيَّانَ يُبْعَثُونَ", meaning: "They perceive not when they will be resurrected", explanation: "Idols have no knowledge", verseRef: "16:21" }
      ]
    },

    disbelieverTraits: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Traits of Disbelievers",
      nameArabic: "صفات الكافرين",
      concepts: [
        { term: "إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ", meaning: "Your God is one God", explanation: "Core declaration of monotheism", verseRef: "16:22" },
        { term: "لَا يُؤْمِنُونَ بِالْآخِرَةِ قُلُوبُهُم مُّنكِرَةٌ", meaning: "Those who disbelieve in Hereafter, their hearts reject", explanation: "Denial comes from heart", verseRef: "16:22" },
        { term: "وَهُم مُّسْتَكْبِرُونَ", meaning: "And they are arrogant", explanation: "Pride prevents acceptance", verseRef: "16:22" },
        { term: "لَا جَرَمَ أَنَّ اللَّهَ يَعْلَمُ", meaning: "Assuredly Allah knows", explanation: "Nothing hidden from Allah", verseRef: "16:23" },
        { term: "إِنَّهُ لَا يُحِبُّ الْمُسْتَكْبِرِينَ", meaning: "He does not love the arrogant", explanation: "Arrogance brings divine displeasure", verseRef: "16:23" }
      ]
    },

    justiceKindness: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Justice & Excellence",
      nameArabic: "العدل والإحسان",
      concepts: [
        { term: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ", meaning: "Allah commands justice", explanation: "Divine command for fairness", verseRef: "16:90" },
        { term: "وَالْإِحْسَانِ", meaning: "And excellence/goodness", explanation: "Going beyond mere justice to beauty", verseRef: "16:90" },
        { term: "وَإِيتَاءِ ذِي الْقُرْبَىٰ", meaning: "And giving to relatives", explanation: "Maintaining family ties", verseRef: "16:90" },
        { term: "وَيَنْهَىٰ عَنِ الْفَحْشَاءِ", meaning: "And forbids immorality", explanation: "Prohibition of indecency", verseRef: "16:90" },
        { term: "وَالْمُنكَرِ", meaning: "And wrongdoing", explanation: "Prohibition of all evil", verseRef: "16:90" },
        { term: "وَالْبَغْيِ", meaning: "And oppression", explanation: "Prohibition of transgression", verseRef: "16:90" },
        { term: "يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ", meaning: "He admonishes you that you may remember", explanation: "Purpose of divine guidance", verseRef: "16:90" }
      ]
    },

    covenantFulfillment: {
      color: '#10B981',
      icon: 'Book',
      name: "Covenants & Oaths",
      nameArabic: "العهود والأيمان",
      concepts: [
        { term: "وَأَوْفُوا بِعَهْدِ اللَّهِ إِذَا عَاهَدتُّمْ", meaning: "Fulfill covenant of Allah when you make covenant", explanation: "Keeping promises made to Allah", verseRef: "16:91" },
        { term: "وَلَا تَنقُضُوا الْأَيْمَانَ بَعْدَ تَوْكِيدِهَا", meaning: "Do not break oaths after confirming them", explanation: "Sanctity of confirmed oaths", verseRef: "16:91" },
        { term: "وَقَدْ جَعَلْتُمُ اللَّهَ عَلَيْكُمْ كَفِيلًا", meaning: "You have made Allah your guarantor", explanation: "Allah witnesses oaths", verseRef: "16:91" },
        { term: "وَلَا تَكُونُوا كَالَّتِي نَقَضَتْ غَزْلَهَا", meaning: "Do not be like she who untwists her thread", explanation: "Parable of breaking agreements", verseRef: "16:92" }
      ]
    },

    quranGuidance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Quran as Guidance",
      nameArabic: "القرآن هدى",
      concepts: [
        { term: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", meaning: "We sent down the Book explaining all things", explanation: "Comprehensive guidance", verseRef: "16:89" },
        { term: "وَهُدًى وَرَحْمَةً", meaning: "And guidance and mercy", explanation: "Quran is guidance and mercy", verseRef: "16:89" },
        { term: "وَبُشْرَىٰ لِلْمُسْلِمِينَ", meaning: "And good news for Muslims", explanation: "Glad tidings for believers", verseRef: "16:89" },
        { term: "فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ", meaning: "When you recite Quran, seek refuge in Allah", explanation: "Protection before recitation", verseRef: "16:98" },
        { term: "مِنَ الشَّيْطَانِ الرَّجِيمِ", meaning: "From Satan, the expelled", explanation: "Seeking protection from Satan", verseRef: "16:98" }
      ]
    },

    ibrahimModel: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Ibrahim as Model",
      nameArabic: "إبراهيم أسوة",
      concepts: [
        { term: "إِنَّ إِبْرَاهِيمَ كَانَ أُمَّةً", meaning: "Indeed Ibrahim was a nation", explanation: "One man = entire community in virtue", verseRef: "16:120" },
        { term: "قَانِتًا لِّلَّهِ حَنِيفًا", meaning: "Devoutly obedient to Allah, inclining to truth", explanation: "Total devotion and monotheism", verseRef: "16:120" },
        { term: "وَلَمْ يَكُ مِنَ الْمُشْرِكِينَ", meaning: "And was not of the polytheists", explanation: "Pure monotheism", verseRef: "16:120" },
        { term: "شَاكِرًا لِّأَنْعُمِهِ", meaning: "Grateful for His blessings", explanation: "Gratitude as trait of Ibrahim", verseRef: "16:121" },
        { term: "اجْتَبَاهُ وَهَدَاهُ", meaning: "He chose him and guided him", explanation: "Divine selection and guidance", verseRef: "16:121" },
        { term: "إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: "To a straight path", explanation: "Guided to right way", verseRef: "16:121" }
      ]
    },

    patience: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Patience & Perseverance",
      nameArabic: "الصبر",
      concepts: [
        { term: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", meaning: "Be patient, and your patience is only through Allah", explanation: "Patience enabled by Allah", verseRef: "16:127" },
        { term: "وَلَا تَحْزَنْ عَلَيْهِمْ", meaning: "Do not grieve over them", explanation: "No sorrow for disbelievers", verseRef: "16:127" },
        { term: "وَلَا تَكُ فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ", meaning: "Do not be in distress from their plotting", explanation: "No anxiety from enemy schemes", verseRef: "16:127" },
        { term: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا", meaning: "Indeed Allah is with those who fear Him", explanation: "Divine support for righteous", verseRef: "16:128" },
        { term: "وَّالَّذِينَ هُم مُّحْسِنُونَ", meaning: "And those who do good", explanation: "Allah with the doers of good", verseRef: "16:128" }
      ]
    },

    dawahWisdom: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Wisdom in Calling to Allah",
      nameArabic: "الحكمة في الدعوة",
      concepts: [
        { term: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ", meaning: "Invite to way of your Lord with wisdom", explanation: "Use wisdom in dawah", verseRef: "16:125" },
        { term: "وَالْمَوْعِظَةِ الْحَسَنَةِ", meaning: "And good instruction", explanation: "Beautiful preaching", verseRef: "16:125" },
        { term: "وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ", meaning: "And argue with them in best way", explanation: "Best manner of debate", verseRef: "16:125" },
        { term: "إِنَّ رَبَّكَ هُوَ أَعْلَمُ", meaning: "Indeed your Lord knows best", explanation: "Allah knows who is guided", verseRef: "16:125" },
        { term: "بِمَن ضَلَّ عَن سَبِيلِهِ", meaning: "Who strays from His path", explanation: "Knowledge of the misguided", verseRef: "16:125" },
        { term: "وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ", meaning: "And He knows best who is guided", explanation: "Knowledge of the guided", verseRef: "16:125" }
      ]
    },

    provisionsGratitude: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Provisions & Gratitude",
      nameArabic: "الرزق والشكر",
      concepts: [
        { term: "وَاللَّهُ فَضَّلَ بَعْضَكُمْ عَلَىٰ بَعْضٍ فِي الرِّزْقِ", meaning: "Allah favored some over others in provision", explanation: "Inequality in provision is test", verseRef: "16:71" },
        { term: "فَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا", meaning: "Eat from what Allah provided you, lawful and good", explanation: "Eat halal provisions", verseRef: "16:114" },
        { term: "وَاشْكُرُوا نِعْمَتَ اللَّهِ", meaning: "And be grateful for blessing of Allah", explanation: "Gratitude for blessings", verseRef: "16:114" },
        { term: "إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ", meaning: "If it is Him you worship", explanation: "Gratitude connected to worship", verseRef: "16:114" }
      ]
    },

    idolsParable: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Parables Against Idols",
      nameArabic: "أمثال ضد الأصنام",
      concepts: [
        { term: "ضَرَبَ اللَّهُ مَثَلًا عَبْدًا مَّمْلُوكًا", meaning: "Allah presents parable of an owned slave", explanation: "Slave vs free man - idol vs Allah", verseRef: "16:75" },
        { term: "لَّا يَقْدِرُ عَلَىٰ شَيْءٍ", meaning: "Unable to do anything", explanation: "Powerless slave = powerless idol", verseRef: "16:75" },
        { term: "وَمَن رَّزَقْنَاهُ مِنَّا رِزْقًا حَسَنًا", meaning: "And one We provided good provision", explanation: "Free man = Allah who provides", verseRef: "16:75" },
        { term: "هَلْ يَسْتَوُونَ", meaning: "Are they equal?", explanation: "Rhetorical - clearly not equal", verseRef: "16:75" },
        { term: "وَضَرَبَ اللَّهُ مَثَلًا رَّجُلَيْنِ", meaning: "Allah presents parable of two men", explanation: "Mute man vs just commander", verseRef: "16:76" }
      ]
    },

    resurrectionsure: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Certainty of Resurrection",
      nameArabic: "يقين البعث",
      concepts: [
        { term: "وَأَقْسَمُوا بِاللَّهِ جَهْدَ أَيْمَانِهِمْ", meaning: "They swear by Allah their strongest oaths", explanation: "Disbelievers deny resurrection", verseRef: "16:38" },
        { term: "لَا يَبْعَثُ اللَّهُ مَن يَمُوتُ", meaning: "Allah will not resurrect who dies", explanation: "False claim denied", verseRef: "16:38" },
        { term: "بَلَىٰ وَعْدًا عَلَيْهِ حَقًّا", meaning: "Yes, a true promise binding on Him", explanation: "Resurrection is true promise", verseRef: "16:38" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: "But most people do not know", explanation: "Ignorance of most", verseRef: "16:38" },
        { term: "لِيُبَيِّنَ لَهُمُ الَّذِي يَخْتَلِفُونَ فِيهِ", meaning: "To make clear what they differed about", explanation: "Clarification on Judgment Day", verseRef: "16:39" }
      ]
    },

    makkahSanctity: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Makkah as Sanctuary",
      nameArabic: "مكة حرم آمن",
      concepts: [
        { term: "وَضَرَبَ اللَّهُ مَثَلًا قَرْيَةً كَانَتْ آمِنَةً", meaning: "Allah presents parable of a city that was secure", explanation: "Secure city - Makkah parable", verseRef: "16:112" },
        { term: "مُّطْمَئِنَّةً يَأْتِيهَا رِزْقُهَا رَغَدًا", meaning: "At ease, provision coming abundantly", explanation: "Abundant provision", verseRef: "16:112" },
        { term: "مِّن كُلِّ مَكَانٍ", meaning: "From every place", explanation: "Provision from all directions", verseRef: "16:112" },
        { term: "فَكَفَرَتْ بِأَنْعُمِ اللَّهِ", meaning: "But it denied blessings of Allah", explanation: "Ingratitude brings punishment", verseRef: "16:112" },
        { term: "فَأَذَاقَهَا اللَّهُ لِبَاسَ الْجُوعِ وَالْخَوْفِ", meaning: "Allah made it taste garment of hunger and fear", explanation: "Punishment through hunger/fear", verseRef: "16:112" }
      ]
    }
  },

  relationships: [
    { from: "أمر الله", to: "لا تستعجلوه", type: "warning", description: "Judgment certain but timing is Allah's" },
    { from: "الملائكة بالروح", to: "لا إله إلا أنا", type: "purpose", description: "Angels bring revelation to teach Tawheed" },
    { from: "أوحى إلى النحل", to: "شفاء للناس", type: "result", description: "Divine guidance to bee produces healing honey" },
    { from: "بالحكمة", to: "والموعظة الحسنة", type: "progression", description: "Wisdom leads to good preaching" },
    { from: "العدل", to: "الإحسان", type: "progression", description: "Justice is baseline, excellence goes beyond" },
    { from: "السمع والأبصار والأفئدة", to: "لعلكم تشكرون", type: "purpose", description: "Faculties given for gratitude" },
    { from: "إبراهيم أمة", to: "شاكراً", type: "trait", description: "Ibrahim's defining quality was gratitude" },
    { from: "واصبر", to: "إن الله مع الذين اتقوا", type: "reward", description: "Patience brings Allah's company" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Decree", verses: "16:1-2", description: "Opening warning - command of Allah coming" },
      { stage: 2, theme: "Creation Signs", verses: "16:3-18", description: "Enumeration of blessings in creation" },
      { stage: 3, theme: "Refuting Polytheism", verses: "16:19-29", description: "False gods are powerless and lifeless" },
      { stage: 4, theme: "Two Destinations", verses: "16:30-34", description: "Paradise for righteous, Hell for arrogant" },
      { stage: 5, theme: "Resurrection Certain", verses: "16:35-40", description: "Allah will resurrect - true promise" },
      { stage: 6, theme: "Prophet Stories", verses: "16:41-50", description: "Emigrants for Allah, prophets as men" },
      { stage: 7, theme: "No Partners", verses: "16:51-60", description: "Two gods? False daughters? All rejected" },
      { stage: 8, theme: "The Bee", verses: "16:66-69", description: "Central passage - miracle of bee and honey" },
      { stage: 9, theme: "Human Blessings", verses: "16:70-83", description: "Life stages, homes, faculties, provisions" },
      { stage: 10, theme: "Witnesses & Book", verses: "16:84-89", description: "Each community has witness, Quran explains all" },
      { stage: 11, theme: "Justice Commanded", verses: "16:90-97", description: "Famous verse on justice, kindness, kinship" },
      { stage: 12, theme: "Satan's Weakness", verses: "16:98-100", description: "Seek refuge, Satan has no power over believers" },
      { stage: 13, theme: "Quran's Purpose", verses: "16:101-111", description: "Quran guidance, not fabricated, patience" },
      { stage: 14, theme: "Secure City", verses: "16:112-119", description: "Makkah parable, eat halal, exceptions" },
      { stage: 15, theme: "Ibrahim's Model", verses: "16:120-124", description: "Ibrahim as ummah, grateful, guided" },
      { stage: 16, theme: "Dawah & Patience", verses: "16:125-128", description: "Wise calling, patience, Allah with righteous" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Count blessings", how: "List provisions in your life - water, food, shelter, senses", verse: "16:10-18" },
      { principle: "Use wisdom in calling", how: "Adjust approach based on audience", verse: "16:125" },
      { principle: "Practice justice AND excellence", how: "Don't just be fair, go above and beyond in goodness", verse: "16:90" },
      { principle: "Maintain family ties", how: "Give to relatives, don't cut off kinship", verse: "16:90" },
      { principle: "Fulfill oaths", how: "Don't break promises made with Allah as witness", verse: "16:91" },
      { principle: "Be grateful like Ibrahim", how: "Thank Allah for specific blessings daily", verse: "16:121" },
      { principle: "Seek refuge before Quran", how: "Say 'A'udhu billahi...' before reciting", verse: "16:98" },
      { principle: "Be patient through Allah", how: "Know patience is enabled by Allah, not self-will", verse: "16:127" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Blessings (An-Ni'am)",
    insight: "Surah An-Nahl is also called 'Surah An-Ni'am' (The Blessings) because it enumerates more blessings than any other surah. The structure moves from cosmic blessings (heavens, earth, water) to animal blessings (livestock, bees) to human blessings (birth, faculties, homes) - all building to the climax at verse 90: the command for justice (adl), excellence (ihsan), and kinship. The bee passage (68-69) is central - showing divine guidance operating even in insects. The word 'wahy' (revelation) is used for both prophets and bees, connecting natural instinct to divine guidance. The surah begins with warning (amr Allah coming) and ends with comfort (Allah is with the patient and good-doers) - a complete emotional arc."
  },

  historicalContext: {
    note: "Revealed in late Makkan period when persecution intensified. The extensive enumeration of blessings served to remind Quraysh of Allah's favors despite their opposition. The reference to emigrants (16:41) shows some companions had already fled to Abyssinia. The command to debate in best manner (16:125) and be patient (16:127) reflects the non-violent resistance phase. Verse 106 about forced apostasy was revealed about Ammar ibn Yasir whose parents were killed for refusing to renounce Islam - the verse permits verbal denial under torture if heart remains firm."
  },

  linguisticFeatures: {
    features: [
      { feature: "أُمَّةً", example: "Ibrahim was an ummah (nation)", effect: "One man embodying nation's worth" },
      { feature: "شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ", example: "Drink varying in colors", effect: "Scientific observation - honey varieties" },
      { feature: "تِبْيَانًا لِّكُلِّ شَيْءٍ", example: "Explanation of all things", effect: "Comprehensive nature of Quran" },
      { feature: "لِبَاسَ الْجُوعِ", example: "Garment of hunger", effect: "Metaphor - hunger so complete it wraps like clothing" },
      { feature: "ظِلَالًا", example: "Shades", effect: "Multiple types of shade - natural and constructed" },
      { feature: "حَنِيفًا", example: "Inclining to truth", effect: "Ibrahim's pure monotheism" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "16:4", topic: "Human embryology", note: "Creation from nutfah (drop) - sperm" },
      { verse: "16:66", topic: "Milk production", note: "Milk from between digestion and blood - accurate physiology" },
      { verse: "16:68-69", topic: "Bee behavior", note: "Female bees work (feminine verbs used), paths made easy, healing in honey" },
      { verse: "16:79", topic: "Bird flight", note: "Nothing holds them except Allah - aerodynamics" },
      { verse: "16:15", topic: "Mountains", note: "Mountains as stakes/pegs - tectonic stabilization" }
    ]
  }
};

export default ONTOLOGY;
