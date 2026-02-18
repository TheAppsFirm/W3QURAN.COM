/**
 * Surah Al-Hajj (22) - Ontology of Quranic Concepts
 * The Pilgrimage
 * Theme: Hajj pilgrimage, Day of Judgment earthquake, sacrifice, permission to fight, signs of Allah
 */

export const ONTOLOGY = {
  surahId: 22,
  surahName: "Al-Hajj",
  surahNameArabic: "الحج",
  revelationType: "Madani",
  totalAyahs: 78,

  categories: {
    dayOfJudgmentEarthquake: {
      name: "The Earthquake of the Hour",
      nameArabic: "زلزلة الساعة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ", meaning: "Earthquake of the Hour - a tremendous thing", explanation: "Opening warning: cosmic upheaval beyond imagination", verseRef: "22:1" },
        { term: "يَوْمَ تَرَوْنَهَا تَذْهَلُ كُلُّ مُرْضِعَةٍ", meaning: "Day you see it, every nursing mother will forget", explanation: "Horror so intense mothers abandon infants", verseRef: "22:2" },
        { term: "وَتَضَعُ كُلُّ ذَاتِ حَمْلٍ حَمْلَهَا", meaning: "Every pregnant one will miscarry", explanation: "Physical manifestation of terror", verseRef: "22:2" },
        { term: "وَتَرَى النَّاسَ سُكَارَىٰ", meaning: "You will see people intoxicated", explanation: "Staggering in confusion though not drunk", verseRef: "22:2" },
        { term: "وَلَـٰكِنَّ عَذَابَ اللَّهِ شَدِيدٌ", meaning: "But Allah's punishment is severe", explanation: "The real intoxication is terror, not wine", verseRef: "22:2" }
      ]
    },

    creationProofs: {
      name: "Proofs of Resurrection",
      nameArabic: "براهين البعث",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقْنَاكُم مِّن تُرَابٍ", meaning: "We created you from dust", explanation: "First creation stage - ultimate origin", verseRef: "22:5" },
        { term: "ثُمَّ مِن نُّطْفَةٍ", meaning: "Then from a sperm-drop", explanation: "Beginning of individual human creation", verseRef: "22:5" },
        { term: "ثُمَّ مِنْ عَلَقَةٍ", meaning: "Then from a clinging clot", explanation: "Embryonic development stage", verseRef: "22:5" },
        { term: "ثُمَّ مِن مُّضْغَةٍ", meaning: "Then from a lump of flesh", explanation: "Formed and unformed stages", verseRef: "22:5" },
        { term: "وَنُقِرُّ فِي الْأَرْحَامِ مَا نَشَاءُ", meaning: "We settle in wombs whom We will", explanation: "Divine selection of who lives", verseRef: "22:5" },
        { term: "ثُمَّ نُخْرِجُكُمْ طِفْلًا", meaning: "Then bring you out as a child", explanation: "Birth - emergence from hidden creation", verseRef: "22:5" },
        { term: "لِتَبْلُغُوا أَشُدَّكُمْ", meaning: "That you may reach maturity", explanation: "Purpose of growth - reaching full strength", verseRef: "22:5" },
        { term: "وَمِنكُم مَّن يُرَدُّ إِلَىٰ أَرْذَلِ الْعُمُرِ", meaning: "Some returned to decrepit old age", explanation: "Cycle back to helplessness", verseRef: "22:5" }
      ]
    },

    earthRevivalSign: {
      name: "Earth Revival as Resurrection Sign",
      nameArabic: "إحياء الأرض دليل البعث",
      color: "#22C55E",
      icon: "Sun",
      concepts: [
        { term: "وَتَرَى الْأَرْضَ هَامِدَةً", meaning: "You see the earth barren", explanation: "Dead, lifeless, hopeless appearance", verseRef: "22:5" },
        { term: "فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ", meaning: "When We send water, it stirs", explanation: "Immediate response to rain", verseRef: "22:5" },
        { term: "وَرَبَتْ", meaning: "And swells", explanation: "Earth grows, expands with life", verseRef: "22:5" },
        { term: "وَأَنبَتَتْ مِن كُلِّ زَوْجٍ بَهِيجٍ", meaning: "Produces every lovely pair", explanation: "Diversity and beauty emerge from death", verseRef: "22:5" },
        { term: "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ", meaning: "That is because Allah is the Truth", explanation: "Earth revival proves Allah's reality", verseRef: "22:6" },
        { term: "وَأَنَّهُ يُحْيِي الْمَوْتَىٰ", meaning: "And He gives life to the dead", explanation: "Same power that revives earth will resurrect humans", verseRef: "22:6" }
      ]
    },

    typesOfWorshippers: {
      name: "Types of Worshippers",
      nameArabic: "أصناف العابدين",
      color: "#F59E0B",
      icon: "Users",
      concepts: [
        { term: "مَن يَعْبُدُ اللَّهَ عَلَىٰ حَرْفٍ", meaning: "Who worships Allah on an edge", explanation: "Conditional faith - worship contingent on results", verseRef: "22:11" },
        { term: "فَإِنْ أَصَابَهُ خَيْرٌ اطْمَأَنَّ بِهِ", meaning: "If good befalls, satisfied", explanation: "Content only when things go well", verseRef: "22:11" },
        { term: "وَإِنْ أَصَابَتْهُ فِتْنَةٌ انقَلَبَ عَلَىٰ وَجْهِهِ", meaning: "If trial strikes, turns on his face", explanation: "Apostasy at first difficulty", verseRef: "22:11" },
        { term: "خَسِرَ الدُّنْيَا وَالْآخِرَةَ", meaning: "Lost the world and Hereafter", explanation: "Double loss - neither realm gained", verseRef: "22:11" },
        { term: "ذَٰلِكَ هُوَ الْخُسْرَانُ الْمُبِينُ", meaning: "That is the clear loss", explanation: "Ultimate bankruptcy - total failure", verseRef: "22:11" }
      ]
    },

    divineProtection: {
      name: "Divine Protection of Believers",
      nameArabic: "حماية الله للمؤمنين",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "إِنَّ اللَّهَ يُدَافِعُ عَنِ الَّذِينَ آمَنُوا", meaning: "Allah defends those who believe", explanation: "Active divine protection for believers", verseRef: "22:38" },
        { term: "إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ خَوَّانٍ كَفُورٍ", meaning: "Allah loves not any treacherous ingrate", explanation: "Betrayal and ingratitude earn divine displeasure", verseRef: "22:38" }
      ]
    },

    permissionToFight: {
      name: "Permission for Self-Defense",
      nameArabic: "الإذن بالقتال",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "أُذِنَ لِلَّذِينَ يُقَاتَلُونَ", meaning: "Permission granted to those fought against", explanation: "First verse permitting armed defense", verseRef: "22:39" },
        { term: "بِأَنَّهُمْ ظُلِمُوا", meaning: "Because they were wronged", explanation: "Defensive fighting due to oppression", verseRef: "22:39" },
        { term: "وَإِنَّ اللَّهَ عَلَىٰ نَصْرِهِمْ لَقَدِيرٌ", meaning: "Allah is able to help them", explanation: "Divine capability to grant victory", verseRef: "22:39" },
        { term: "الَّذِينَ أُخْرِجُوا مِن دِيَارِهِم بِغَيْرِ حَقٍّ", meaning: "Those expelled from homes unjustly", explanation: "Expulsion justifies defense", verseRef: "22:40" },
        { term: "إِلَّا أَن يَقُولُوا رَبُّنَا اللَّهُ", meaning: "Only because they say 'Our Lord is Allah'", explanation: "Persecuted solely for monotheism", verseRef: "22:40" }
      ]
    },

    protectionOfWorship: {
      name: "Protection of All Places of Worship",
      nameArabic: "حماية دور العبادة",
      color: "#10B981",
      icon: "Shield",
      concepts: [
        { term: "لَّهُدِّمَتْ صَوَامِعُ", meaning: "Monasteries would be demolished", explanation: "Christian monasteries protected", verseRef: "22:40" },
        { term: "وَبِيَعٌ", meaning: "And churches", explanation: "Christian churches protected", verseRef: "22:40" },
        { term: "وَصَلَوَاتٌ", meaning: "And synagogues", explanation: "Jewish places of worship protected", verseRef: "22:40" },
        { term: "وَمَسَاجِدُ يُذْكَرُ فِيهَا اسْمُ اللَّهِ كَثِيرًا", meaning: "And mosques where Allah's name much mentioned", explanation: "All worship places where God is invoked", verseRef: "22:40" },
        { term: "وَلَيَنصُرَنَّ اللَّهُ مَن يَنصُرُهُ", meaning: "Allah will help those who help Him", explanation: "Divine aid for those who support His cause", verseRef: "22:40" }
      ]
    },

    hajjPilgrimage: {
      name: "Hajj - The Pilgrimage",
      nameArabic: "مناسك الحج",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ", meaning: "Proclaim Hajj to mankind", explanation: "Ibrahim's call echoes eternally", verseRef: "22:27" },
        { term: "يَأْتُوكَ رِجَالًا", meaning: "They will come on foot", explanation: "Pilgrims arriving by walking", verseRef: "22:27" },
        { term: "وَعَلَىٰ كُلِّ ضَامِرٍ", meaning: "And on every lean camel", explanation: "Arriving on travel-worn mounts", verseRef: "22:27" },
        { term: "يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ", meaning: "Coming from every distant pass", explanation: "Pilgrims from all corners of earth", verseRef: "22:27" },
        { term: "لِّيَشْهَدُوا مَنَافِعَ لَهُمْ", meaning: "To witness benefits for them", explanation: "Spiritual and worldly benefits of Hajj", verseRef: "22:28" },
        { term: "وَيَذْكُرُوا اسْمَ اللَّهِ فِي أَيَّامٍ مَّعْلُومَاتٍ", meaning: "Mention Allah's name on known days", explanation: "Days of Dhul Hijjah - counted, appointed", verseRef: "22:28" }
      ]
    },

    sacrifice: {
      name: "Sacrifice and Its Reality",
      nameArabic: "الأضحية وحقيقتها",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "عَلَىٰ مَا رَزَقَهُم مِّن بَهِيمَةِ الْأَنْعَامِ", meaning: "Over what He provided of livestock", explanation: "Gratitude shown through sacrifice", verseRef: "22:28" },
        { term: "فَكُلُوا مِنْهَا وَأَطْعِمُوا الْبَائِسَ الْفَقِيرَ", meaning: "Eat from them and feed the miserable poor", explanation: "Sacrifice benefits both donor and needy", verseRef: "22:28" },
        { term: "لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا", meaning: "Their meat and blood reach not Allah", explanation: "Physical sacrifice is not the goal", verseRef: "22:37" },
        { term: "وَلَـٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ", meaning: "But taqwa from you reaches Him", explanation: "Piety, not meat, is what Allah accepts", verseRef: "22:37" },
        { term: "كَذَٰلِكَ سَخَّرَهَا لَكُمْ لِتُكَبِّرُوا اللَّهَ", meaning: "Thus He subjected them that you may glorify Allah", explanation: "Animals made serviceable for divine praise", verseRef: "22:37" }
      ]
    },

    sacredHouse: {
      name: "The Sacred House (Kaaba)",
      nameArabic: "البيت الحرام",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَإِذْ بَوَّأْنَا لِإِبْرَاهِيمَ مَكَانَ الْبَيْتِ", meaning: "When We designated for Ibrahim the House's place", explanation: "Divine selection of Kaaba's location", verseRef: "22:26" },
        { term: "أَن لَّا تُشْرِكْ بِي شَيْئًا", meaning: "Do not associate anything with Me", explanation: "Tawhid - foundation of the House", verseRef: "22:26" },
        { term: "وَطَهِّرْ بَيْتِيَ لِلطَّائِفِينَ", meaning: "Purify My House for those circling", explanation: "Tawaf requires pure sanctuary", verseRef: "22:26" },
        { term: "وَالْقَائِمِينَ", meaning: "And those standing", explanation: "Standing in prayer at Kaaba", verseRef: "22:26" },
        { term: "وَالرُّكَّعِ السُّجُودِ", meaning: "And those bowing, prostrating", explanation: "Complete prayer at sacred site", verseRef: "22:26" },
        { term: "ثُمَّ لْيَقْضُوا تَفَثَهُمْ", meaning: "Then let them end their unkemptness", explanation: "Completing Hajj rituals - grooming after ihram", verseRef: "22:29" },
        { term: "وَلْيُوفُوا نُذُورَهُمْ", meaning: "Fulfill their vows", explanation: "Completing pledged obligations", verseRef: "22:29" },
        { term: "وَلْيَطَّوَّفُوا بِالْبَيْتِ الْعَتِيقِ", meaning: "Circle the Ancient House", explanation: "Tawaf of Kaaba - the ancient sanctuary", verseRef: "22:29" }
      ]
    },

    sacredSymbols: {
      name: "Sacred Symbols of Allah",
      nameArabic: "شعائر الله",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "ذَٰلِكَ وَمَن يُعَظِّمْ شَعَائِرَ اللَّهِ", meaning: "Whoever honors Allah's symbols", explanation: "Respecting sacred rites and places", verseRef: "22:32" },
        { term: "فَإِنَّهَا مِن تَقْوَى الْقُلُوبِ", meaning: "It is from piety of hearts", explanation: "External honor reflects internal taqwa", verseRef: "22:32" },
        { term: "لَكُمْ فِيهَا مَنَافِعُ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: "In them benefits until appointed time", explanation: "Use of animals until sacrifice time", verseRef: "22:33" },
        { term: "ثُمَّ مَحِلُّهَا إِلَى الْبَيْتِ الْعَتِيقِ", meaning: "Then their place is at Ancient House", explanation: "Sacrificial animals destined for Kaaba", verseRef: "22:33" },
        { term: "وَالْبُدْنَ جَعَلْنَاهَا لَكُم مِّن شَعَائِرِ اللَّهِ", meaning: "Sacrificial camels - Allah's symbols for you", explanation: "Camels as sacred offerings", verseRef: "22:36" },
        { term: "لَكُمْ فِيهَا خَيْرٌ", meaning: "In them is good for you", explanation: "Benefits in the sacrificial system", verseRef: "22:36" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameArabic: "علم الله الشامل",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "أَلَمْ تَعْلَمْ أَنَّ اللَّهَ يَعْلَمُ مَا فِي السَّمَاءِ وَالْأَرْضِ", meaning: "Do you not know Allah knows what is in heaven and earth", explanation: "Total divine awareness", verseRef: "22:70" },
        { term: "إِنَّ ذَٰلِكَ فِي كِتَابٍ", meaning: "That is in a Record", explanation: "All recorded in Preserved Tablet", verseRef: "22:70" },
        { term: "إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ", meaning: "That is easy for Allah", explanation: "Comprehensive knowledge requires no effort", verseRef: "22:70" }
      ]
    },

    falseDeitiesWeakness: {
      name: "Weakness of False Deities",
      nameArabic: "ضعف الآلهة الباطلة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ", meaning: "O people, example is presented - listen!", explanation: "Attention demanded for crucial parable", verseRef: "22:73" },
        { term: "إِنَّ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ لَن يَخْلُقُوا ذُبَابًا", meaning: "Those you invoke besides Allah cannot create a fly", explanation: "Idols cannot create smallest creature", verseRef: "22:73" },
        { term: "وَلَوِ اجْتَمَعُوا لَهُ", meaning: "Even if they gathered for it", explanation: "Combined effort still fails", verseRef: "22:73" },
        { term: "وَإِن يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَّا يَسْتَنقِذُوهُ مِنْهُ", meaning: "If fly takes something, cannot retrieve it", explanation: "Cannot even defend against a fly", verseRef: "22:73" },
        { term: "ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ", meaning: "Weak are pursuer and pursued", explanation: "Both worshipper and idol are helpless", verseRef: "22:73" },
        { term: "مَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ", meaning: "They did not estimate Allah's true worth", explanation: "Failure to appreciate divine greatness", verseRef: "22:74" }
      ]
    },

    divineMessengers: {
      name: "Divine Messengers and Angels",
      nameArabic: "الرسل والملائكة",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "اللَّهُ يَصْطَفِي مِنَ الْمَلَائِكَةِ رُسُلًا وَمِنَ النَّاسِ", meaning: "Allah chooses messengers from angels and people", explanation: "Selection of prophets - both angelic and human", verseRef: "22:75" },
        { term: "إِنَّ اللَّهَ سَمِيعٌ بَصِيرٌ", meaning: "Allah is Hearing, Seeing", explanation: "Divine perception of all things", verseRef: "22:75" }
      ]
    },

    ummatulWasat: {
      name: "The Muslim Ummah",
      nameArabic: "الأمة المسلمة",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "هُوَ اجْتَبَاكُمْ", meaning: "He has chosen you", explanation: "Divine selection of Muslim community", verseRef: "22:78" },
        { term: "وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ", meaning: "He placed no hardship in religion", explanation: "Islam made easy, not burdensome", verseRef: "22:78" },
        { term: "مِّلَّةَ أَبِيكُمْ إِبْرَاهِيمَ", meaning: "Religion of your father Ibrahim", explanation: "Continuity with Abrahamic tradition", verseRef: "22:78" },
        { term: "هُوَ سَمَّاكُمُ الْمُسْلِمِينَ مِن قَبْلُ", meaning: "He named you Muslims before", explanation: "Muslim identity from Ibrahim's time", verseRef: "22:78" },
        { term: "وَفِي هَـٰذَا لِيَكُونَ الرَّسُولُ شَهِيدًا عَلَيْكُمْ", meaning: "That Messenger be witness over you", explanation: "Prophet testifies for the Ummah", verseRef: "22:78" },
        { term: "وَتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ", meaning: "And you be witnesses over mankind", explanation: "Ummah's responsibility to witness to humanity", verseRef: "22:78" }
      ]
    },

    previousNationsPunishment: {
      name: "Punishment of Previous Nations",
      nameArabic: "عذاب الأمم السابقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَكَأَيِّن مِّن قَرْيَةٍ أَمْلَيْتُ لَهَا", meaning: "How many cities I gave respite", explanation: "Divine patience precedes punishment", verseRef: "22:48" },
        { term: "وَهِيَ ظَالِمَةٌ ثُمَّ أَخَذْتُهَا", meaning: "While unjust, then seized them", explanation: "Eventually justice is executed", verseRef: "22:48" },
        { term: "فَكَيْفَ كَانَ نَكِيرِ", meaning: "How was My punishment", explanation: "Rhetorical: consider their fate", verseRef: "22:44" },
        { term: "فَأَهْلَكْنَاهُمْ", meaning: "So We destroyed them", explanation: "Divine destruction of oppressors", verseRef: "22:48" },
        { term: "قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ", meaning: "People of Nuh, Aad, Thamud", explanation: "Examples of destroyed nations", verseRef: "22:42" },
        { term: "وَقَوْمِ إِبْرَاهِيمَ وَقَوْمِ لُوطٍ", meaning: "People of Ibrahim and Lut", explanation: "More destroyed communities", verseRef: "22:43" },
        { term: "وَأَصْحَابِ مَدْيَنَ", meaning: "Companions of Madyan", explanation: "Shuayb's people destroyed", verseRef: "22:44" }
      ]
    },

    shaitanDeception: {
      name: "Satan's Deception",
      nameArabic: "إضلال الشيطان",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَمَن يَتَّبِعْ خُطُوَاتِ الشَّيْطَانِ", meaning: "Whoever follows Satan's footsteps", explanation: "Gradual path to misguidance", verseRef: "22:52" },
        { term: "فَإِنَّهُ يَأْمُرُ بِالْفَحْشَاءِ وَالْمُنكَرِ", meaning: "He commands immorality and wrong", explanation: "Satan's consistent agenda", verseRef: "22:52" },
        { term: "إِذَا تَمَنَّىٰ أَلْقَى الشَّيْطَانُ فِي أُمْنِيَّتِهِ", meaning: "When he recited, Satan cast into his recitation", explanation: "Satan attempts to corrupt revelation", verseRef: "22:52" },
        { term: "فَيَنسَخُ اللَّهُ مَا يُلْقِي الشَّيْطَانُ", meaning: "Allah abolishes what Satan casts", explanation: "Divine protection of revelation", verseRef: "22:52" },
        { term: "ثُمَّ يُحْكِمُ اللَّهُ آيَاتِهِ", meaning: "Then Allah perfects His verses", explanation: "Quran protected from corruption", verseRef: "22:52" }
      ]
    },

    finalGuidance: {
      name: "Final Guidance",
      nameArabic: "الهداية الأخيرة",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا", meaning: "O believers, bow and prostrate", explanation: "Call to physical worship", verseRef: "22:77" },
        { term: "وَاعْبُدُوا رَبَّكُمْ", meaning: "And worship your Lord", explanation: "Comprehensive devotion", verseRef: "22:77" },
        { term: "وَافْعَلُوا الْخَيْرَ", meaning: "And do good", explanation: "Righteous actions commanded", verseRef: "22:77" },
        { term: "لَعَلَّكُمْ تُفْلِحُونَ", meaning: "That you may succeed", explanation: "Success through worship and good deeds", verseRef: "22:77" },
        { term: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ", meaning: "Strive in Allah's cause as due", explanation: "True jihad - complete striving", verseRef: "22:78" },
        { term: "فَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ", meaning: "Establish prayer, give zakah", explanation: "Twin pillars of practice", verseRef: "22:78" },
        { term: "وَاعْتَصِمُوا بِاللَّهِ هُوَ مَوْلَاكُمْ", meaning: "Hold fast to Allah - He is your Protector", explanation: "Divine protection through attachment", verseRef: "22:78" },
        { term: "فَنِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ", meaning: "Excellent Protector, excellent Helper", explanation: "Perfect guardian and supporter", verseRef: "22:78" }
      ]
    }
  },

  relationships: [
    { from: "زلزلة الساعة", to: "يحيي الموتى", type: "consequence", description: "Earthquake precedes resurrection" },
    { from: "خلقناكم من تراب", to: "إحياء الأرض", type: "analogy", description: "Human creation mirrors earth revival" },
    { from: "يعبد الله على حرف", to: "خسر الدنيا والآخرة", type: "causation", description: "Conditional faith leads to total loss" },
    { from: "أذن للذين يقاتلون", to: "بأنهم ظلموا", type: "justification", description: "Fighting permitted due to oppression" },
    { from: "شعائر الله", to: "تقوى القلوب", type: "identity", description: "Honoring symbols = heart's piety" },
    { from: "لن ينال الله لحومها", to: "التقوى منكم", type: "contrast", description: "Physical sacrifice vs spiritual essence" },
    { from: "لن يخلقوا ذبابا", to: "ما قدروا الله حق قدره", type: "consequence", description: "Idols' weakness proves misunderstanding of Allah" },
    { from: "هو اجتباكم", to: "تكونوا شهداء على الناس", type: "purpose", description: "Selection for witnessing to humanity" },
    { from: "ملة إبراهيم", to: "سماكم المسلمين", type: "continuity", description: "Muslim identity continues from Ibrahim" },
    { from: "أقيموا الصلاة", to: "واعتصموا بالله", type: "means", description: "Prayer leads to holding fast to Allah" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Day of Judgment Terror", verses: "22:1-2", description: "Earthquake of the Hour - nursing mothers forget, all stagger" },
      { stage: 2, theme: "Argumentative Doubter", verses: "22:3-10", description: "Those who argue without knowledge vs clear truth" },
      { stage: 3, theme: "Edge-Worshipper", verses: "22:11-14", description: "Conditional faith - satisfied with good, apostates at trial" },
      { stage: 4, theme: "Resurrection Proofs", verses: "22:5-7", description: "Human creation stages and earth revival as evidence" },
      { stage: 5, theme: "True Religions", verses: "22:17", description: "Believers, Jews, Sabians, Christians, Magians, Polytheists" },
      { stage: 6, theme: "Universal Submission", verses: "22:18", description: "All creation prostrates to Allah" },
      { stage: 7, theme: "Two Groups", verses: "22:19-24", description: "Believers vs disbelievers - Paradise vs boiling water" },
      { stage: 8, theme: "Sacred House", verses: "22:25-29", description: "Ibrahim's Kaaba - purification, Hajj proclamation, rituals" },
      { stage: 9, theme: "Sacred Symbols", verses: "22:30-37", description: "Honor sha'a'ir, sacrifice reality - taqwa reaches Allah" },
      { stage: 10, theme: "Divine Defense", verses: "22:38-41", description: "Allah defends believers, permission to fight granted" },
      { stage: 11, theme: "Historical Warnings", verses: "22:42-48", description: "Destroyed nations - Nuh, Aad, Thamud, Lut, Madyan" },
      { stage: 12, theme: "Satan's Interference", verses: "22:52-57", description: "Satan casts doubts but Allah perfects His verses" },
      { stage: 13, theme: "Divine Power", verses: "22:61-66", description: "Night/day, creation, provision - all controlled by Allah" },
      { stage: 14, theme: "Fly Parable", verses: "22:73-76", description: "Idols cannot create fly or retrieve from it - ultimate weakness" },
      { stage: 15, theme: "Final Commands", verses: "22:77-78", description: "Bow, prostrate, worship, do good, strive, hold to Allah" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Prepare for the Hour", how: "Visualize Day of Judgment's terror to strengthen taqwa", verse: "22:1-2" },
      { principle: "Avoid edge-worship", how: "Test your faith - do you worship only when things go well?", verse: "22:11" },
      { principle: "See resurrection in nature", how: "Watch barren earth revive with rain - same power resurrects you", verse: "22:5-6" },
      { principle: "Honor sacred symbols", how: "Respect all signs of Allah - rituals, places, times", verse: "22:32" },
      { principle: "Understand sacrifice", how: "Your taqwa reaches Allah, not the meat - intention over action", verse: "22:37" },
      { principle: "Protect all worship", how: "Defend freedom of worship - monasteries, churches, synagogues, mosques", verse: "22:40" },
      { principle: "Witness to humanity", how: "You are chosen to be examples - live accordingly", verse: "22:78" },
      { principle: "Hold fast to Allah", how: "He is your Mawla (protector) and Nasir (helper) - rely on Him", verse: "22:78" }
    ]
  },

  uniqueInsight: {
    title: "The Fly Parable - Ultimate Proof of Tawhid",
    insight: "Verse 22:73 delivers one of the Quran's most devastating arguments against polytheism: 'Those you invoke besides Allah cannot create a fly, even if they gathered for it. And if the fly snatched something from them, they could not recover it.' This is profound: (1) The fly is among the smallest, most insignificant creatures - yet false gods cannot create even this. (2) Worse, they cannot even DEFEND against a fly! If a fly takes something, they're helpless. (3) The worshipper (seeker) and the idol (sought) are both 'weak' - both helpless before a fly. The rhetorical genius: Allah doesn't compare idols to Himself (unfair comparison) but to a FLY - and they lose. This demolishes idol-worship through simple logic anyone can understand. The next verse (22:74) concludes: 'They did not estimate Allah with His true estimation' - those who worship idols have no concept of true divine power."
  },

  linguisticFeatures: {
    features: [
      { feature: "زَلْزَلَة reduplication", example: "زَلْزَلَة الساعة", effect: "Sound mimics shaking - phonetic imagery" },
      { feature: "Conditional structure", example: "إِنْ أَصَابَهُ خَيْرٌ... وَإِنْ أَصَابَتْهُ فِتْنَةٌ", effect: "Exposes fragile, conditional faith" },
      { feature: "Rhetorical question", example: "أَلَمْ تَرَ", effect: "Invites reflection on obvious truth" },
      { feature: "ضَعُفَ symmetry", example: "ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ", effect: "Both worshipper and idol equally helpless" },
      { feature: "Double superlative", example: "نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ", effect: "Allah praised as excellent protector AND helper" }
    ]
  },

  historicalContext: {
    notes: [
      { topic: "First permission to fight", verse: "22:39", note: "This is widely considered the first verse permitting armed self-defense for Muslims who were persecuted in Makkah" },
      { topic: "Mixed revelation", verse: "22:52", note: "Some scholars consider Al-Hajj to contain both Makki and Madani verses, making it unique" },
      { topic: "Protection of worship", verse: "22:40", note: "This verse establishes that fighting is permitted to protect ALL places of worship - not just Islamic ones" },
      { topic: "Ibrahim's call", verse: "22:27", note: "The call to Hajj made by Ibrahim continues to be answered by millions annually" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "22:5", topic: "Embryonic development", note: "Stages mentioned (nutfah, 'alaqah, mudghah) align with modern embryology" },
      { verse: "22:73", topic: "Fly biology", note: "A fly's ability to dissolve and absorb food externally is referenced - once taken, cannot be retrieved" }
    ]
  }
};

export default ONTOLOGY;
