/**
 * Surah Al-An'am (6) - Ontology of Quranic Concepts
 * The Cattle / The Livestock
 *
 * Theme: Foundational Makkan surah on pure monotheism (Tawheed)
 * Major Topics: Divine sovereignty, Ibrahim's journey to truth, polytheism refutation,
 *               Prophet's mission, cattle and food laws, signs of Allah
 *
 * Revelation: Makki (revealed all at once according to Ibn Abbas)
 * Verses: 165
 * Virtue: Contains greatest verse of divine attributes (6:59)
 */

export const ONTOLOGY = {
  surahId: 6,
  surahName: "Al-An'am",
  surahNameArabic: "الأنعام",
  revelationType: "Makki",
  totalAyahs: 165,

  categories: {
    divineCreation: {
      name: "Divine Creation & Sovereignty",
      nameArabic: "الخلق والسيادة الإلهية",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: "Praise to Allah who created heavens and earth", explanation: "Opening declaration of Allah as Creator", verseRef: "6:1" },
        { term: "وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ", meaning: "And made darkness and light", explanation: "Allah created both - no dualism", verseRef: "6:1" },
        { term: "خَلَقَكُم مِّن طِينٍ", meaning: "Created you from clay", explanation: "Human origin from earth", verseRef: "6:2" },
        { term: "ثُمَّ قَضَىٰ أَجَلًا", meaning: "Then decreed a term", explanation: "Life spans are predetermined", verseRef: "6:2" },
        { term: "وَهُوَ اللَّهُ فِي السَّمَاوَاتِ وَفِي الْأَرْضِ", meaning: "He is Allah in the heavens and earth", explanation: "Allah's presence encompasses all", verseRef: "6:3" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameArabic: "علم الله الكامل",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "يَعْلَمُ سِرَّكُمْ وَجَهْرَكُمْ", meaning: "Knows your secret and public", explanation: "Nothing hidden from Allah", verseRef: "6:3" },
        { term: "وَعِندَهُ مَفَاتِحُ الْغَيْبِ", meaning: "With Him are keys of unseen", explanation: "Five unseen matters only Allah knows", verseRef: "6:59" },
        { term: "لَا يَعْلَمُهَا إِلَّا هُوَ", meaning: "None knows them except Him", explanation: "Exclusive divine knowledge", verseRef: "6:59" },
        { term: "وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ", meaning: "Knows what is in land and sea", explanation: "Complete knowledge of all creation", verseRef: "6:59" },
        { term: "وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا", meaning: "No leaf falls but He knows it", explanation: "Awareness of every detail in universe", verseRef: "6:59" },
        { term: "وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ", meaning: "No grain in darkness of earth", explanation: "Even seeds underground are known", verseRef: "6:59" },
        { term: "فِي كِتَابٍ مُّبِينٍ", meaning: "In a clear record", explanation: "All recorded in Lawh al-Mahfuz", verseRef: "6:59" }
      ]
    },

    ibrahimJourney: {
      name: "Ibrahim's Search for Truth",
      nameArabic: "رحلة إبراهيم للحق",
      color: '#10B981',
      icon: 'Compass',
      concepts: [
        { term: "وَكَذَٰلِكَ نُرِي إِبْرَاهِيمَ مَلَكُوتَ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Thus We showed Ibrahim the dominion of heavens and earth", explanation: "Allah guided Ibrahim through reflection", verseRef: "6:75" },
        { term: "فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا", meaning: "When night covered him, he saw a star", explanation: "First celestial observation", verseRef: "6:76" },
        { term: "قَالَ هَٰذَا رَبِّي", meaning: "He said: This is my Lord", explanation: "Methodology of elimination to find truth", verseRef: "6:76" },
        { term: "فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ", meaning: "When it set, he said: I love not those that set", explanation: "True God cannot disappear", verseRef: "6:76" },
        { term: "فَلَمَّا رَأَى الْقَمَرَ بَازِغًا", meaning: "When he saw moon rising", explanation: "Second celestial test", verseRef: "6:77" },
        { term: "فَلَمَّا رَأَى الشَّمْسَ بَازِغَةً", meaning: "When he saw sun rising", explanation: "Third and greatest celestial test", verseRef: "6:78" },
        { term: "هَٰذَا أَكْبَرُ", meaning: "This is greater", explanation: "Sun seems most powerful", verseRef: "6:78" },
        { term: "إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: "I have turned my face to He who created heavens and earth", explanation: "Conclusion: worship Creator, not creation", verseRef: "6:79" },
        { term: "حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ", meaning: "Inclining to truth, not of polytheists", explanation: "True monotheism declared", verseRef: "6:79" }
      ]
    },

    propheticLineage: {
      name: "Chain of Prophets",
      nameArabic: "سلسلة الأنبياء",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "وَتِلْكَ حُجَّتُنَا آتَيْنَاهَا إِبْرَاهِيمَ", meaning: "That was Our argument We gave Ibrahim", explanation: "Ibrahim's logical proof from Allah", verseRef: "6:83" },
        { term: "وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ", meaning: "We gave him Ishaq and Yaqub", explanation: "Blessed descendants", verseRef: "6:84" },
        { term: "وَنُوحًا هَدَيْنَا مِن قَبْلُ", meaning: "And Nuh We guided before", explanation: "Earlier prophet in lineage", verseRef: "6:84" },
        { term: "وَدَاوُودَ وَسُلَيْمَانَ وَأَيُّوبَ وَيُوسُفَ وَمُوسَىٰ وَهَارُونَ", meaning: "And Dawud, Sulayman, Ayyub, Yusuf, Musa, Harun", explanation: "Great prophets of Bani Israel", verseRef: "6:84" },
        { term: "وَزَكَرِيَّا وَيَحْيَىٰ وَعِيسَىٰ وَإِلْيَاسَ", meaning: "And Zakariyya, Yahya, Isa, Ilyas", explanation: "Later prophets", verseRef: "6:85" },
        { term: "وَإِسْمَاعِيلَ وَالْيَسَعَ وَيُونُسَ وَلُوطًا", meaning: "And Ismail, Al-Yasa, Yunus, Lut", explanation: "Additional prophets mentioned", verseRef: "6:86" },
        { term: "أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ فَبِهُدَاهُمُ اقْتَدِهْ", meaning: "Those are whom Allah guided, so follow their guidance", explanation: "Command to follow prophets' way", verseRef: "6:90" }
      ]
    },

    polytheismRefutation: {
      name: "Refutation of Polytheism",
      nameArabic: "تفنيد الشرك",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ", meaning: "Yet those who disbelieve equate others with their Lord", explanation: "Core error of polytheism", verseRef: "6:1" },
        { term: "وَجَعَلُوا لِلَّهِ شُرَكَاءَ الْجِنَّ", meaning: "They made jinn partners with Allah", explanation: "Worship of jinn exposed", verseRef: "6:100" },
        { term: "وَخَرَقُوا لَهُ بَنِينَ وَبَنَاتٍ بِغَيْرِ عِلْمٍ", meaning: "They fabricated sons and daughters for Him without knowledge", explanation: "False claims of divine offspring", verseRef: "6:100" },
        { term: "سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يَصِفُونَ", meaning: "Exalted is He above what they describe", explanation: "Allah is transcendent above false attributes", verseRef: "6:100" },
        { term: "بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Originator of heavens and earth", explanation: "Allah creates without prior model", verseRef: "6:101" },
        { term: "أَنَّىٰ يَكُونُ لَهُ وَلَدٌ", meaning: "How could He have a son?", explanation: "Logical refutation of divine offspring", verseRef: "6:101" },
        { term: "إِنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ لَيُسَمُّونَ الْمَلَائِكَةَ تَسْمِيَةَ الْأُنثَىٰ", meaning: "Those who do not believe in Hereafter name angels female names", explanation: "Arabs called angels daughters of Allah", verseRef: "6:8-9" },
        { term: "قُلْ أَغَيْرَ اللَّهِ أَتَّخِذُ وَلِيًّا", meaning: "Say: Shall I take other than Allah as protector?", explanation: "Rhetorical rejection of false gods", verseRef: "6:14" }
      ]
    },

    signsCosmic: {
      name: "Cosmic Signs of Allah",
      nameArabic: "الآيات الكونية",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "فَالِقُ الْإِصْبَاحِ", meaning: "Cleaver of daybreak", explanation: "Allah splits the dawn daily", verseRef: "6:96" },
        { term: "وَجَعَلَ اللَّيْلَ سَكَنًا", meaning: "Made night for rest", explanation: "Night for peace and sleep", verseRef: "6:96" },
        { term: "وَالشَّمْسَ وَالْقَمَرَ حُسْبَانًا", meaning: "Sun and moon for calculation", explanation: "Celestial timepieces", verseRef: "6:96" },
        { term: "وَهُوَ الَّذِي جَعَلَ لَكُمُ النُّجُومَ لِتَهْتَدُوا بِهَا", meaning: "He made stars for your guidance", explanation: "Stars as navigation aids", verseRef: "6:97" },
        { term: "فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ", meaning: "In darknesses of land and sea", explanation: "Guidance in all terrains", verseRef: "6:97" },
        { term: "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: "He sent down water from sky", explanation: "Rain as divine provision", verseRef: "6:99" },
        { term: "فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ", meaning: "We brought forth vegetation of all kinds", explanation: "Plant diversity from water", verseRef: "6:99" }
      ]
    },

    signsPlants: {
      name: "Agricultural Signs",
      nameArabic: "آيات الزراعة",
      color: '#10B981',
      icon: 'Globe',
      concepts: [
        { term: "حَدَائِقَ ذَاتَ بَهْجَةٍ", meaning: "Gardens of delight", explanation: "Beautiful gardens as signs", verseRef: "6:99" },
        { term: "وَمِنَ النَّخْلِ مِن طَلْعِهَا قِنْوَانٌ دَانِيَةٌ", meaning: "From date-palm, clusters hanging low", explanation: "Accessible fruit provision", verseRef: "6:99" },
        { term: "وَجَنَّاتٍ مِّنْ أَعْنَابٍ", meaning: "Gardens of grapes", explanation: "Vineyards as blessing", verseRef: "6:99" },
        { term: "وَالزَّيْتُونَ وَالرُّمَّانَ مُشْتَبِهًا وَغَيْرَ مُتَشَابِهٍ", meaning: "Olives and pomegranates, similar yet different", explanation: "Diversity in creation", verseRef: "6:99" },
        { term: "انظُرُوا إِلَىٰ ثَمَرِهِ إِذَا أَثْمَرَ وَيَنْعِهِ", meaning: "Look at its fruit when it yields and ripens", explanation: "Observe growth cycle", verseRef: "6:99" },
        { term: "إِنَّ فِي ذَٰلِكُمْ لَآيَاتٍ لِّقَوْمٍ يُؤْمِنُونَ", meaning: "In that are signs for believing people", explanation: "Signs require faith to perceive", verseRef: "6:99" }
      ]
    },

    cattleLaws: {
      name: "Cattle and Food Laws",
      nameArabic: "أحكام الأنعام والطعام",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "وَمِنَ الْأَنْعَامِ حَمُولَةً وَفَرْشًا", meaning: "From cattle, carriers and bedding", explanation: "Uses of livestock - transport and wool/leather", verseRef: "6:142" },
        { term: "ثَمَانِيَةَ أَزْوَاجٍ", meaning: "Eight pairs", explanation: "Four types, male and female each", verseRef: "6:143" },
        { term: "مِّنَ الضَّأْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ", meaning: "Of sheep two and of goats two", explanation: "First pair of cattle", verseRef: "6:143" },
        { term: "وَمِنَ الْإِبِلِ اثْنَيْنِ وَمِنَ الْبَقَرِ اثْنَيْنِ", meaning: "Of camels two and of cattle two", explanation: "Second pair of livestock", verseRef: "6:144" },
        { term: "قُل لَّا أَجِدُ فِي مَا أُوحِيَ إِلَيَّ مُحَرَّمًا", meaning: "Say: I find not forbidden in revelation", explanation: "Limiting prohibitions to revelation", verseRef: "6:145" },
        { term: "إِلَّا أَن يَكُونَ مَيْتَةً", meaning: "Except dead animal", explanation: "Carrion prohibited", verseRef: "6:145" },
        { term: "أَوْ دَمًا مَّسْفُوحًا", meaning: "Or blood poured forth", explanation: "Flowing blood prohibited", verseRef: "6:145" },
        { term: "أَوْ لَحْمَ خِنزِيرٍ", meaning: "Or flesh of swine", explanation: "Pork prohibited", verseRef: "6:145" },
        { term: "أَوْ فِسْقًا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ", meaning: "Or profanity dedicated to other than Allah", explanation: "Idolatrous slaughter prohibited", verseRef: "6:145" }
      ]
    },

    paganPractices: {
      name: "Pagan Practices Refuted",
      nameArabic: "العادات الجاهلية المردودة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَالُوا هَٰذِهِ أَنْعَامٌ وَحَرْثٌ حِجْرٌ", meaning: "They say: These cattle and crops are forbidden", explanation: "Arabs' self-made food taboos", verseRef: "6:138" },
        { term: "لَّا يَطْعَمُهَا إِلَّا مَن نَّشَاءُ", meaning: "None may eat except whom we will", explanation: "Arbitrary restrictions", verseRef: "6:138" },
        { term: "وَأَنْعَامٌ حُرِّمَتْ ظُهُورُهَا", meaning: "Cattle whose backs are forbidden", explanation: "Made-up prohibition on riding", verseRef: "6:138" },
        { term: "وَأَنْعَامٌ لَّا يَذْكُرُونَ اسْمَ اللَّهِ عَلَيْهَا", meaning: "Cattle over which they mention not Allah's name", explanation: "Slaughter for idols", verseRef: "6:138" },
        { term: "افْتِرَاءً عَلَيْهِ", meaning: "Inventing lies against Him", explanation: "False attribution to Allah", verseRef: "6:138" },
        { term: "مَا فِي بُطُونِ هَٰذِهِ الْأَنْعَامِ خَالِصَةٌ لِّذُكُورِنَا", meaning: "What is in bellies of these cattle for our males only", explanation: "Gender discrimination in food", verseRef: "6:139" },
        { term: "وَمُحَرَّمٌ عَلَىٰ أَزْوَاجِنَا", meaning: "Forbidden to our wives", explanation: "Women excluded from certain foods", verseRef: "6:139" },
        { term: "قَدْ خَسِرَ الَّذِينَ قَتَلُوا أَوْلَادَهُمْ سَفَهًا", meaning: "Lost are those who killed their children foolishly", explanation: "Infanticide condemned", verseRef: "6:140" }
      ]
    },

    prophetMission: {
      name: "Prophet's Mission",
      nameArabic: "رسالة النبي",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "قُلْ إِنَّنِي هَدَانِي رَبِّي إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: "Say: My Lord has guided me to straight path", explanation: "Prophet's guidance from Allah", verseRef: "6:161" },
        { term: "دِينًا قِيَمًا مِّلَّةَ إِبْرَاهِيمَ حَنِيفًا", meaning: "Upright religion, way of Ibrahim, inclining to truth", explanation: "Continuity with Ibrahim's faith", verseRef: "6:161" },
        { term: "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ", meaning: "Say: My prayer, sacrifice, life and death are for Allah", explanation: "Complete dedication to Allah", verseRef: "6:162" },
        { term: "رَبِّ الْعَالَمِينَ", meaning: "Lord of all worlds", explanation: "Universal lordship", verseRef: "6:162" },
        { term: "لَا شَرِيكَ لَهُ", meaning: "No partner has He", explanation: "Core monotheistic declaration", verseRef: "6:163" },
        { term: "وَبِذَٰلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ", meaning: "With this I was commanded, and I am first of Muslims", explanation: "Prophet leads in submission", verseRef: "6:163" }
      ]
    },

    accountability: {
      name: "Individual Accountability",
      nameArabic: "المسؤولية الفردية",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "قُلْ أَغَيْرَ اللَّهِ أَبْغِي رَبًّا", meaning: "Say: Shall I seek other than Allah as Lord?", explanation: "No lord besides Allah", verseRef: "6:164" },
        { term: "وَهُوَ رَبُّ كُلِّ شَيْءٍ", meaning: "While He is Lord of all things", explanation: "Universal sovereignty", verseRef: "6:164" },
        { term: "وَلَا تَكْسِبُ كُلُّ نَفْسٍ إِلَّا عَلَيْهَا", meaning: "Every soul earns only for itself", explanation: "Individual responsibility for deeds", verseRef: "6:164" },
        { term: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ", meaning: "No bearer of burden bears another's burden", explanation: "No vicarious punishment", verseRef: "6:164" },
        { term: "ثُمَّ إِلَىٰ رَبِّكُم مَّرْجِعُكُمْ", meaning: "Then to your Lord is your return", explanation: "Final return to Allah", verseRef: "6:164" },
        { term: "فَيُنَبِّئُكُم بِمَا كُنتُمْ فِيهِ تَخْتَلِفُونَ", meaning: "He will inform you of what you differed in", explanation: "Disputes resolved on Judgment Day", verseRef: "6:164" }
      ]
    },

    humanSuccession: {
      name: "Human Succession on Earth",
      nameArabic: "خلافة الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "وَهُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ الْأَرْضِ", meaning: "He made you successors on earth", explanation: "Humans as stewards", verseRef: "6:165" },
        { term: "وَرَفَعَ بَعْضَكُمْ فَوْقَ بَعْضٍ دَرَجَاتٍ", meaning: "Raised some of you above others in degrees", explanation: "Variation in provision is test", verseRef: "6:165" },
        { term: "لِّيَبْلُوَكُمْ فِي مَا آتَاكُمْ", meaning: "To test you in what He gave you", explanation: "Wealth and status are tests", verseRef: "6:165" },
        { term: "إِنَّ رَبَّكَ سَرِيعُ الْعِقَابِ", meaning: "Your Lord is swift in punishment", explanation: "Warning of consequences", verseRef: "6:165" },
        { term: "وَإِنَّهُ لَغَفُورٌ رَّحِيمٌ", meaning: "And He is Forgiving, Merciful", explanation: "Balance of justice and mercy", verseRef: "6:165" }
      ]
    },

    deathAngels: {
      name: "Death and Angels",
      nameArabic: "الموت والملائكة",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَيُرْسِلُ عَلَيْكُمْ حَفَظَةً", meaning: "He is Dominant over His servants and sends guardian angels", explanation: "Angels record deeds", verseRef: "6:61" },
        { term: "حَتَّىٰ إِذَا جَاءَ أَحَدَكُمُ الْمَوْتُ تَوَفَّتْهُ رُسُلُنَا", meaning: "Until when death comes, Our messengers take him", explanation: "Angels collect souls at death", verseRef: "6:61" },
        { term: "وَهُمْ لَا يُفَرِّطُونَ", meaning: "And they do not fail", explanation: "Angels fulfill duties perfectly", verseRef: "6:61" },
        { term: "ثُمَّ رُدُّوا إِلَى اللَّهِ مَوْلَاهُمُ الْحَقِّ", meaning: "Then returned to Allah, their true Master", explanation: "Return to Allah after death", verseRef: "6:62" }
      ]
    },

    quranRevelation: {
      name: "Quran Revelation",
      nameArabic: "نزول القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَهَٰذَا كِتَابٌ أَنزَلْنَاهُ مُبَارَكٌ", meaning: "This is a Book We revealed, blessed", explanation: "Quran's divine origin and blessing", verseRef: "6:92" },
        { term: "مُّصَدِّقُ الَّذِي بَيْنَ يَدَيْهِ", meaning: "Confirming what came before it", explanation: "Quran confirms previous scriptures", verseRef: "6:92" },
        { term: "وَلِتُنذِرَ أُمَّ الْقُرَىٰ وَمَنْ حَوْلَهَا", meaning: "To warn mother of cities and those around", explanation: "Makkah as center, message to all", verseRef: "6:92" },
        { term: "وَالَّذِينَ يُؤْمِنُونَ بِالْآخِرَةِ يُؤْمِنُونَ بِهِ", meaning: "Those who believe in Hereafter believe in it", explanation: "Faith in Quran linked to afterlife belief", verseRef: "6:92" },
        { term: "وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا", meaning: "Who is more unjust than one who invents lies about Allah", explanation: "Fabricating against Allah is worst", verseRef: "6:93" },
        { term: "أَوْ قَالَ أُوحِيَ إِلَيَّ وَلَمْ يُوحَ إِلَيْهِ شَيْءٌ", meaning: "Or says 'Revelation came to me' when nothing was revealed", explanation: "False prophets condemned", verseRef: "6:93" }
      ]
    },

    previousNations: {
      name: "Previous Nations' Fate",
      nameArabic: "مصير الأمم السابقة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ", meaning: "Do they not see how many generations We destroyed before?", explanation: "Historical warning", verseRef: "6:6" },
        { term: "مَّكَّنَّاهُمْ فِي الْأَرْضِ مَا لَمْ نُمَكِّن لَّكُمْ", meaning: "Established them in earth as We have not for you", explanation: "Past nations had more power", verseRef: "6:6" },
        { term: "وَأَرْسَلْنَا السَّمَاءَ عَلَيْهِم مِّدْرَارًا", meaning: "Sent sky upon them pouring rain", explanation: "Abundant provision given", verseRef: "6:6" },
        { term: "فَأَهْلَكْنَاهُم بِذُنُوبِهِمْ", meaning: "Destroyed them for their sins", explanation: "Sin leads to destruction", verseRef: "6:6" },
        { term: "وَأَنشَأْنَا مِن بَعْدِهِمْ قَرْنًا آخَرِينَ", meaning: "Raised after them another generation", explanation: "Allah replaces nations", verseRef: "6:6" }
      ]
    },

    disbelieversExcuses: {
      name: "Disbelievers' Excuses",
      nameArabic: "أعذار الكافرين",
      color: '#EC4899',
      icon: 'MessageCircle',
      concepts: [
        { term: "وَلَوْ نَزَّلْنَا عَلَيْكَ كِتَابًا فِي قِرْطَاسٍ فَلَمَسُوهُ بِأَيْدِيهِمْ", meaning: "Even if We sent a book on paper and they touched it", explanation: "Physical proof would be denied", verseRef: "6:7" },
        { term: "لَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ", meaning: "Disbelievers would say: This is only clear magic", explanation: "Any miracle called magic", verseRef: "6:7" },
        { term: "وَقَالُوا لَوْلَا أُنزِلَ عَلَيْهِ مَلَكٌ", meaning: "They say: Why was an angel not sent down?", explanation: "Demanding visible angels", verseRef: "6:8" },
        { term: "وَلَوْ أَنزَلْنَا مَلَكًا لَّقُضِيَ الْأَمْرُ", meaning: "If We sent an angel, matter would be decided", explanation: "Angel appearance = immediate judgment", verseRef: "6:8" },
        { term: "وَلَوْ جَعَلْنَاهُ مَلَكًا لَّجَعَلْنَاهُ رَجُلًا", meaning: "If We made him angel, We would have made him a man", explanation: "Angels would appear human anyway", verseRef: "6:9" }
      ]
    },

    guidanceMisguidance: {
      name: "Guidance and Misguidance",
      nameArabic: "الهداية والضلال",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "مَن يَشَإِ اللَّهُ يُضْلِلْهُ وَمَن يَشَأْ يَجْعَلْهُ عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: "Whom Allah wills He leaves astray, whom He wills He places on straight path", explanation: "Divine will in guidance", verseRef: "6:39" },
        { term: "فَمَن يُرِدِ اللَّهُ أَن يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ", meaning: "Whom Allah wants to guide, He expands his chest to Islam", explanation: "Heart opened for faith", verseRef: "6:125" },
        { term: "وَمَن يُرِدْ أَن يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا", meaning: "Whom He wants to misguide, He makes his chest tight, constricted", explanation: "Heart closed to truth", verseRef: "6:125" },
        { term: "كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ", meaning: "As though climbing into the sky", explanation: "Difficulty breathing metaphor", verseRef: "6:125" },
        { term: "كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ", meaning: "Thus Allah places defilement on those who do not believe", explanation: "Disbelief brings spiritual corruption", verseRef: "6:125" }
      ]
    },

    commandments: {
      name: "Core Commandments",
      color: '#22C55E',
      icon: 'Shield',
      nameArabic: "الوصايا الأساسية",
      concepts: [
        { term: "قُلْ تَعَالَوْا أَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ", meaning: "Say: Come, I recite what your Lord has forbidden", explanation: "Introduction to divine commands", verseRef: "6:151" },
        { term: "أَلَّا تُشْرِكُوا بِهِ شَيْئًا", meaning: "Associate nothing with Him", explanation: "First command: no shirk", verseRef: "6:151" },
        { term: "وَبِالْوَالِدَيْنِ إِحْسَانًا", meaning: "And to parents, good treatment", explanation: "Kindness to parents", verseRef: "6:151" },
        { term: "وَلَا تَقْتُلُوا أَوْلَادَكُم مِّنْ إِمْلَاقٍ", meaning: "Do not kill your children from poverty", explanation: "No infanticide", verseRef: "6:151" },
        { term: "نَّحْنُ نَرْزُقُكُمْ وَإِيَّاهُمْ", meaning: "We provide for you and them", explanation: "Allah provides for all", verseRef: "6:151" },
        { term: "وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ", meaning: "Do not approach immoralities - open or secret", explanation: "Avoid all indecency", verseRef: "6:151" },
        { term: "وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ", meaning: "Do not kill soul Allah made sacred except by right", explanation: "Sanctity of life", verseRef: "6:151" },
        { term: "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ", meaning: "Do not approach orphan's wealth except in best manner", explanation: "Protect orphan's property", verseRef: "6:152" },
        { term: "وَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ بِالْقِسْطِ", meaning: "Give full measure and weight with justice", explanation: "Fair business dealings", verseRef: "6:152" },
        { term: "وَإِذَا قُلْتُمْ فَاعْدِلُوا", meaning: "When you speak, be just", explanation: "Truthful speech always", verseRef: "6:152" },
        { term: "وَبِعَهْدِ اللَّهِ أَوْفُوا", meaning: "Fulfill the covenant of Allah", explanation: "Keep promises to Allah", verseRef: "6:152" },
        { term: "وَأَنَّ هَٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ", meaning: "This is My straight path, so follow it", explanation: "Follow this way only", verseRef: "6:153" },
        { term: "وَلَا تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ عَن سَبِيلِهِ", meaning: "Do not follow other paths, they will separate you from His path", explanation: "Unity on straight path", verseRef: "6:153" }
      ]
    }
  },

  relationships: [
    { from: "خلق السماوات والأرض", to: "جعل الظلمات والنور", type: "enumeration", description: "Creation includes opposites" },
    { from: "كوكب", to: "قمر", type: "progression", description: "Ibrahim's logical ascent" },
    { from: "قمر", to: "شمس", type: "progression", description: "Ibrahim's journey continues" },
    { from: "شمس", to: "فاطر السماوات", type: "conclusion", description: "Ibrahim reaches Creator" },
    { from: "مفاتح الغيب", to: "ورقة تسقط", type: "expansion", description: "From cosmic to minute details" },
    { from: "ثمانية أزواج", to: "ضأن/معز/إبل/بقر", type: "enumeration", description: "Eight pairs specified" },
    { from: "لا تشركوا", to: "صراط مستقيم", type: "cause-effect", description: "Monotheism leads to straight path" },
    { from: "افتراء على الله", to: "خسران", type: "consequence", description: "False claims bring loss" },
    { from: "خلائف الأرض", to: "ليبلوكم", type: "purpose", description: "Succession is a test" },
    { from: "هداية الله", to: "شرح الصدر", type: "manifestation", description: "Guidance opens hearts" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Creation & Attributes", verses: "6:1-18", description: "Opening praise, Allah's creation, refutation of polytheism" },
      { stage: 2, theme: "Warning & Previous Nations", verses: "6:19-49", description: "Consequences of denial, fate of past nations" },
      { stage: 3, theme: "Divine Knowledge & Power", verses: "6:50-73", description: "Allah's complete knowledge, keys of unseen, protection" },
      { stage: 4, theme: "Ibrahim's Journey", verses: "6:74-90", description: "Search for truth through stars/moon/sun to Creator" },
      { stage: 5, theme: "Quran & False Claims", verses: "6:91-117", description: "Quran's status, false prophets, cosmic signs" },
      { stage: 6, theme: "Guidance & Misguidance", verses: "6:118-135", description: "Open vs closed hearts, patience commanded" },
      { stage: 7, theme: "Pagan Practices", verses: "6:136-147", description: "False food taboos, cattle superstitions refuted" },
      { stage: 8, theme: "Core Commandments", verses: "6:148-154", description: "Ten commandments equivalent, straight path" },
      { stage: 9, theme: "Final Instructions", verses: "6:155-165", description: "Follow Quran, Prophet's dedication, human succession" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Pure Monotheism", how: "Never associate anything with Allah in worship, supplication, or reliance", verse: "6:151, 6:163" },
      { principle: "Reflect Like Ibrahim", how: "Use logic and observation to strengthen faith, reject blind following", verse: "6:76-79" },
      { principle: "Knowledge of Unseen", how: "Trust Allah knows all, even falling leaves - nothing is insignificant to Him", verse: "6:59" },
      { principle: "Complete Dedication", how: "Prayer, sacrifice, life, and death - all for Allah alone", verse: "6:162" },
      { principle: "Individual Accountability", how: "No one bears another's burden - focus on your own deeds", verse: "6:164" },
      { principle: "Following Commands", how: "Adhere to the commandments - parents, life sanctity, justice, promises", verse: "6:151-153" },
      { principle: "Reject Superstition", how: "Food laws come from revelation, not traditions or superstitions", verse: "6:138-145" },
      { principle: "Observation of Signs", how: "Look at fruits ripening, stars guiding, rain falling - see Allah's signs", verse: "6:97-99" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Tawheed's Foundation",
    insight: "Surah Al-An'am is unique among Makkan surahs - Ibn Abbas reported it was revealed all at once, accompanied by 70,000 angels glorifying Allah. This comprehensive surah establishes the intellectual, logical, and spiritual foundations of monotheism. Ibrahim's journey from star to moon to sun to Creator (6:76-79) provides the timeless methodology for discovering truth through rational reflection. The 'Keys of the Unseen' verse (6:59) is considered one of the greatest verses about Allah's knowledge. The surah's name 'Al-An'am' (Cattle) refers to the extensive refutation of pre-Islamic Arab superstitions about livestock, demonstrating that true religion liberates from man-made taboos. The final verses (6:151-153) present Islam's core commandments - comparable to the Ten Commandments - showing Islam's ethical continuity with previous revelations. The surah concludes with the profound declaration that life, death, prayer, and sacrifice are all for Allah alone (6:162-163)."
  },

  historicalContext: {
    note: "Al-An'am was revealed in Makkah during a critical phase when the Prophet ﷺ faced intense opposition. The surah addresses the Arab polytheists' core beliefs, systematically dismantling idol worship, angel worship, and superstitious practices. The cattle-related discussions (6:136-145) specifically target the complex food taboo system Arabs had invented, including the bahira (she-camel with split ear), sa'iba (she-camel let loose), wasila (newborn female kept if male born with it), and ham (stallion freed after producing offspring). These practices combined religious superstition with gender discrimination and were all declared false inventions against Allah."
  },

  linguisticFeatures: {
    features: [
      { feature: "فَالِقُ", example: "Cleaver (of daybreak)", effect: "Intensive form - Allah actively splits the dawn daily" },
      { feature: "مَفَاتِح الْغَيْبِ", example: "Keys of unseen", effect: "Plural of مفتاح - multiple domains of hidden knowledge" },
      { feature: "حَنِيفًا", example: "Inclining to truth", effect: "Root ح ن ف - turning away from falsehood toward truth" },
      { feature: "كَأَنَّمَا يَصَّعَّدُ", example: "As if climbing up", effect: "Form V - intensive, struggling to ascend" },
      { feature: "خَلَائِف", example: "Successors", effect: "Plural of خليفة - multiple generations as stewards" },
      { feature: "طِبَاقًا", example: "In layers", effect: "From طبق - matching, layered" }
    ]
  },

  namesOfAllahInSurah: {
    names: [
      { name: "الله", transliteration: "Allah", meaning: "The One True God", verse: "6:1" },
      { name: "رب العالمين", transliteration: "Rabb al-'Alamin", meaning: "Lord of All Worlds", verse: "6:162" },
      { name: "القاهر", transliteration: "Al-Qahir", meaning: "The Dominant", verse: "6:61" },
      { name: "اللطيف الخبير", transliteration: "Al-Latif Al-Khabir", meaning: "The Subtle, The All-Aware", verse: "6:103" },
      { name: "فاطر السماوات والأرض", transliteration: "Fatir as-Samawat wal-Ard", meaning: "Originator of Heavens and Earth", verse: "6:79" },
      { name: "بديع السماوات والأرض", transliteration: "Badi' as-Samawat wal-Ard", meaning: "Originator (without model)", verse: "6:101" },
      { name: "الغفور الرحيم", transliteration: "Al-Ghafur Ar-Rahim", meaning: "The Forgiving, The Merciful", verse: "6:165" },
      { name: "سريع العقاب", transliteration: "Sari' al-'Iqab", meaning: "Swift in Punishment", verse: "6:165" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "6:59", topic: "Divine Knowledge", note: "Awareness of every falling leaf - ecosystem interconnectedness" },
      { verse: "6:96", topic: "Sun and Moon for Calculation", note: "Lunar and solar cycles for timekeeping" },
      { verse: "6:97", topic: "Star Navigation", note: "Stars as guidance in darkness - historical and modern navigation" },
      { verse: "6:99", topic: "Botanical Diversity", note: "From one water, diverse plants emerge - genetic variation" },
      { verse: "6:125", topic: "Altitude and Breathing", note: "Chest constriction when ascending - relates to atmospheric pressure" }
    ]
  }
};

export default ONTOLOGY;
