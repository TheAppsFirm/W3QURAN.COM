/**
 * Surah Ibrahim (14) - Ontology of Quranic Concepts
 * Prophet Ibrahim / Abraham - 52 Ayahs, Makki
 *
 * Major Themes:
 * - Guidance through revelation vs misguidance
 * - Stories of past prophets (Musa, Ibrahim)
 * - The parable of good word vs evil word
 * - Ibrahim's prayer for Makkah and his descendants
 * - Allah's blessings and ingratitude of disbelievers
 * - Day of Judgment warnings
 */

export const ONTOLOGY = {
  surahId: 14,
  surahName: "Ibrahim",
  surahNameArabic: "إبراهيم",
  revelationType: "Makki",
  totalAyahs: 52,

  categories: {
    revelationGuidance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Revelation as Guidance",
      nameArabic: "الهداية بالوحي",
      concepts: [
        { term: "كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ", meaning: "A Book We revealed to you", explanation: "Quran's purpose is to guide humanity", verseRef: "14:1" },
        { term: "لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ", meaning: "To bring people from darkness to light", explanation: "Core metaphor: disbelief is darkness, faith is light", verseRef: "14:1" },
        { term: "صِرَاطِ الْعَزِيزِ الْحَمِيدِ", meaning: "Path of the Mighty, the Praiseworthy", explanation: "The straight path belongs to Allah", verseRef: "14:1" },
        { term: "وَمَا أَرْسَلْنَا مِن رَّسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ", meaning: "We sent no messenger except in his people's tongue", explanation: "Wisdom of revelation in native language", verseRef: "14:4" }
      ]
    },

    divineAuthority: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Divine Authority",
      nameArabic: "السلطان الإلهي",
      concepts: [
        { term: "اللَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: "Allah, to whom belongs all in heavens and earth", explanation: "Absolute divine ownership", verseRef: "14:2" },
        { term: "يُضِلُّ اللَّهُ مَن يَشَاءُ وَيَهْدِي مَن يَشَاءُ", meaning: "Allah lets stray whom He wills and guides whom He wills", explanation: "Divine will in guidance/misguidance", verseRef: "14:4" },
        { term: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: "And He is the Mighty, the Wise", explanation: "Power combined with wisdom", verseRef: "14:4" }
      ]
    },

    propheticMission: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Prophetic Mission",
      nameArabic: "رسالة الأنبياء",
      concepts: [
        { term: "أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا", meaning: "We sent Musa with Our signs", explanation: "Musa's mission to Pharaoh's people", verseRef: "14:5" },
        { term: "أَخْرِجْ قَوْمَكَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ", meaning: "Bring your people from darkness to light", explanation: "Same mission as Muhammad", verseRef: "14:5" },
        { term: "وَذَكِّرْهُم بِأَيَّامِ اللَّهِ", meaning: "Remind them of the days of Allah", explanation: "Historical lessons as reminders", verseRef: "14:5" },
        { term: "جَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ", meaning: "Their messengers came with clear proofs", explanation: "Every nation received clear guidance", verseRef: "14:9" }
      ]
    },

    disbelieversTactics: {
      color: '#EF4444',
      icon: 'Users',
      name: "Tactics of Disbelievers",
      nameArabic: "مكر الكافرين",
      concepts: [
        { term: "الَّذِينَ يَسْتَحِبُّونَ الْحَيَاةَ الدُّنْيَا عَلَى الْآخِرَةِ", meaning: "Those who prefer worldly life over Hereafter", explanation: "Root cause: prioritizing this world", verseRef: "14:3" },
        { term: "وَيَصُدُّونَ عَن سَبِيلِ اللَّهِ وَيَبْغُونَهَا عِوَجًا", meaning: "Barring from Allah's path and seeking to make it crooked", explanation: "Active opposition to guidance", verseRef: "14:3" },
        { term: "فَرَدُّوا أَيْدِيَهُمْ فِي أَفْوَاهِهِمْ", meaning: "They put their hands over their mouths", explanation: "Gesture of rejection/mockery", verseRef: "14:9" },
        { term: "إِنَّا كَفَرْنَا بِمَا أُرْسِلْتُم بِهِ", meaning: "We disbelieve in what you were sent with", explanation: "Open declaration of rejection", verseRef: "14:9" }
      ]
    },

    propheticResponse: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Prophetic Response",
      nameArabic: "رد الأنبياء",
      concepts: [
        { term: "أَفِي اللَّهِ شَكٌّ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Is there doubt about Allah, Creator of heavens and earth?", explanation: "Rhetorical question affirming Allah's existence", verseRef: "14:10" },
        { term: "يَدْعُوكُمْ لِيَغْفِرَ لَكُم مِّن ذُنُوبِكُمْ", meaning: "He calls you to forgive your sins", explanation: "Divine call is for mercy not punishment", verseRef: "14:10" },
        { term: "إِنْ نَحْنُ إِلَّا بَشَرٌ مِّثْلُكُمْ", meaning: "We are only humans like you", explanation: "Prophets' humanity acknowledged", verseRef: "14:11" },
        { term: "وَلَٰكِنَّ اللَّهَ يَمُنُّ عَلَىٰ مَن يَشَاءُ", meaning: "But Allah bestows favor on whom He wills", explanation: "Prophethood is divine selection", verseRef: "14:11" }
      ]
    },

    patienceAndTrust: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Patience and Trust in Allah",
      nameArabic: "الصبر والتوكل",
      concepts: [
        { term: "وَلَنَصْبِرَنَّ عَلَىٰ مَا آذَيْتُمُونَا", meaning: "We will surely be patient over your harm", explanation: "Prophetic commitment to patience", verseRef: "14:12" },
        { term: "وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُتَوَكِّلُونَ", meaning: "And upon Allah let those who trust put their trust", explanation: "Tawakkul as foundation of faith", verseRef: "14:12" },
        { term: "لَنُخْرِجَنَّكُم مِّنْ أَرْضِنَا", meaning: "We will surely expel you from our land", explanation: "Threat of exile by disbelievers", verseRef: "14:13" },
        { term: "وَأَوْحَىٰ إِلَيْهِمْ رَبُّهُمْ لَنُهْلِكَنَّ الظَّالِمِينَ", meaning: "Their Lord inspired them: We will destroy wrongdoers", explanation: "Divine promise to protect believers", verseRef: "14:13" }
      ]
    },

    destroyedNations: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Destroyed Nations",
      nameArabic: "الأمم الهالكة",
      concepts: [
        { term: "أَلَمْ يَأْتِكُمْ نَبَأُ الَّذِينَ مِن قَبْلِكُمْ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ", meaning: "Has not the news reached you of those before you - people of Nuh, Aad, Thamud", explanation: "Historical precedents of destruction", verseRef: "14:9" },
        { term: "وَمَكَرُوا مَكْرَهُمْ وَعِندَ اللَّهِ مَكْرُهُمْ", meaning: "They planned their plan, but with Allah is their plan", explanation: "Allah sees all plots", verseRef: "14:46" },
        { term: "وَإِن كَانَ مَكْرُهُمْ لِتَزُولَ مِنْهُ الْجِبَالُ", meaning: "Even if their plan was to move mountains", explanation: "No plot can defeat Allah", verseRef: "14:46" }
      ]
    },

    goodWordParable: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Parable of the Good Word",
      nameArabic: "مثل الكلمة الطيبة",
      concepts: [
        { term: "كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ", meaning: "A good word like a good tree", explanation: "La ilaha illallah compared to tree", verseRef: "14:24" },
        { term: "أَصْلُهَا ثَابِتٌ", meaning: "Its root firm", explanation: "Faith firmly rooted in heart", verseRef: "14:24" },
        { term: "وَفَرْعُهَا فِي السَّمَاءِ", meaning: "Its branches in the sky", explanation: "Good deeds rising to heavens", verseRef: "14:24" },
        { term: "تُؤْتِي أُكُلَهَا كُلَّ حِينٍ بِإِذْنِ رَبِّهَا", meaning: "Producing fruit all the time by permission of its Lord", explanation: "Continuous benefits of faith", verseRef: "14:25" },
        { term: "وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ", meaning: "And Allah presents examples for people", explanation: "Purpose of Quranic parables", verseRef: "14:25" }
      ]
    },

    evilWordParable: {
      color: '#EF4444',
      icon: 'Users',
      name: "Parable of the Evil Word",
      nameArabic: "مثل الكلمة الخبيثة",
      concepts: [
        { term: "كَلِمَةٍ خَبِيثَةٍ كَشَجَرَةٍ خَبِيثَةٍ", meaning: "An evil word like an evil tree", explanation: "Kufr/shirk compared to rotten tree", verseRef: "14:26" },
        { term: "اجْتُثَّتْ مِن فَوْقِ الْأَرْضِ", meaning: "Uprooted from above the earth", explanation: "No firm foundation", verseRef: "14:26" },
        { term: "مَا لَهَا مِن قَرَارٍ", meaning: "Having no stability", explanation: "Falsehood has no permanence", verseRef: "14:26" }
      ]
    },

    firmWord: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "The Firm Word",
      nameArabic: "القول الثابت",
      concepts: [
        { term: "يُثَبِّتُ اللَّهُ الَّذِينَ آمَنُوا بِالْقَوْلِ الثَّابِتِ", meaning: "Allah keeps firm those who believe with the firm word", explanation: "Faith provides stability", verseRef: "14:27" },
        { term: "فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ", meaning: "In worldly life and in the Hereafter", explanation: "Firmness in both worlds", verseRef: "14:27" },
        { term: "وَيُضِلُّ اللَّهُ الظَّالِمِينَ", meaning: "And Allah lets the wrongdoers stray", explanation: "Justice in misguidance", verseRef: "14:27" }
      ]
    },

    allahsBlessings: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Allah's Blessings",
      nameArabic: "نعم الله",
      concepts: [
        { term: "وَسَخَّرَ لَكُمُ الْفُلْكَ لِتَجْرِيَ فِي الْبَحْرِ بِأَمْرِهِ", meaning: "Subjected to you ships to sail through the sea by His command", explanation: "Sea travel as divine gift", verseRef: "14:32" },
        { term: "وَسَخَّرَ لَكُمُ الْأَنْهَارَ", meaning: "And subjected to you the rivers", explanation: "Fresh water systems", verseRef: "14:32" },
        { term: "وَسَخَّرَ لَكُمُ الشَّمْسَ وَالْقَمَرَ دَائِبَيْنِ", meaning: "And subjected sun and moon continuously", explanation: "Cosmic order for humanity", verseRef: "14:33" },
        { term: "وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ", meaning: "And subjected night and day", explanation: "Time cycles for benefit", verseRef: "14:33" },
        { term: "وَآتَاكُم مِّن كُلِّ مَا سَأَلْتُمُوهُ", meaning: "And gave you from all you asked Him", explanation: "Allah provides even unasked", verseRef: "14:34" },
        { term: "وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا", meaning: "And if you count Allah's blessings you cannot enumerate them", explanation: "Blessings are countless", verseRef: "14:34" }
      ]
    },

    humanIngratitude: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Human Ingratitude",
      nameArabic: "كفران النعم",
      concepts: [
        { term: "إِنَّ الْإِنسَانَ لَظَلُومٌ كَفَّارٌ", meaning: "Indeed mankind is most unjust, ungrateful", explanation: "Human tendency toward ingratitude", verseRef: "14:34" },
        { term: "أَلَمْ تَرَ إِلَى الَّذِينَ بَدَّلُوا نِعْمَتَ اللَّهِ كُفْرًا", meaning: "Have you not seen those who exchanged Allah's blessing for disbelief", explanation: "Trading faith for kufr", verseRef: "14:28" },
        { term: "وَأَحَلُّوا قَوْمَهُمْ دَارَ الْبَوَارِ", meaning: "And settled their people in the home of ruin", explanation: "Leaders leading to destruction", verseRef: "14:28" }
      ]
    },

    ibrahimPrayerMakkah: {
      color: '#EF4444',
      icon: 'Users',
      name: "Ibrahim's Prayer for Makkah",
      nameArabic: "دعاء إبراهيم لمكة",
      concepts: [
        { term: "رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا", meaning: "My Lord, make this city secure", explanation: "Prayer for Makkah's safety", verseRef: "14:35" },
        { term: "وَاجْنُبْنِي وَبَنِيَّ أَن نَّعْبُدَ الْأَصْنَامَ", meaning: "And keep me and my sons from worshipping idols", explanation: "Fear of shirk even for prophets", verseRef: "14:35" },
        { term: "رَبِّ إِنَّهُنَّ أَضْلَلْنَ كَثِيرًا مِّنَ النَّاسِ", meaning: "My Lord, they have led astray many people", explanation: "Idols as source of misguidance", verseRef: "14:36" },
        { term: "فَمَن تَبِعَنِي فَإِنَّهُ مِنِّي", meaning: "Whoever follows me is of me", explanation: "True brotherhood through faith", verseRef: "14:36" }
      ]
    },

    ibrahimFamilyMakkah: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Ibrahim's Family in Makkah",
      nameArabic: "ذرية إبراهيم في مكة",
      concepts: [
        { term: "رَّبَّنَا إِنِّي أَسْكَنتُ مِن ذُرِّيَّتِي بِوَادٍ غَيْرِ ذِي زَرْعٍ", meaning: "Our Lord, I have settled some of my descendants in an uncultivated valley", explanation: "Settling Ismail and Hajar in barren Makkah", verseRef: "14:37" },
        { term: "عِندَ بَيْتِكَ الْمُحَرَّمِ", meaning: "Near Your sacred House", explanation: "Location near the Kaaba", verseRef: "14:37" },
        { term: "رَبَّنَا لِيُقِيمُوا الصَّلَاةَ", meaning: "Our Lord, that they may establish prayer", explanation: "Purpose: worship establishment", verseRef: "14:37" },
        { term: "فَاجْعَلْ أَفْئِدَةً مِّنَ النَّاسِ تَهْوِي إِلَيْهِمْ", meaning: "So make hearts of people incline toward them", explanation: "Prayer for pilgrims to Makkah", verseRef: "14:37" },
        { term: "وَارْزُقْهُم مِّنَ الثَّمَرَاتِ", meaning: "And provide them with fruits", explanation: "Prayer for provision in desert", verseRef: "14:37" }
      ]
    },

    ibrahimGratitude: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Ibrahim's Gratitude",
      nameArabic: "شكر إبراهيم",
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ", meaning: "Praise to Allah who granted me in old age Ismail and Ishaq", explanation: "Gratitude for children in old age", verseRef: "14:39" },
        { term: "إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ", meaning: "Indeed my Lord is Hearer of supplication", explanation: "Confidence in answered prayers", verseRef: "14:39" }
      ]
    },

    ibrahimPrayerFamily: {
      color: '#10B981',
      icon: 'Book',
      name: "Ibrahim's Prayer for Family",
      nameArabic: "دعاء إبراهيم لأهله",
      concepts: [
        { term: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي", meaning: "My Lord, make me establisher of prayer and from my descendants", explanation: "Prayer for generations of worshippers", verseRef: "14:40" },
        { term: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ", meaning: "Our Lord, and accept my supplication", explanation: "Humble request for acceptance", verseRef: "14:40" },
        { term: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ", meaning: "Our Lord, forgive me and my parents and the believers", explanation: "Comprehensive prayer for forgiveness", verseRef: "14:41" },
        { term: "يَوْمَ يَقُومُ الْحِسَابُ", meaning: "The Day the account is established", explanation: "Awareness of accountability", verseRef: "14:41" }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ", meaning: "Never think Allah is unaware of what wrongdoers do", explanation: "Divine observation of all deeds", verseRef: "14:42" },
        { term: "إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ الْأَبْصَارُ", meaning: "He only delays them for a Day eyes will stare in horror", explanation: "Delay is not neglect", verseRef: "14:42" },
        { term: "مُهْطِعِينَ مُقْنِعِي رُءُوسِهِمْ", meaning: "Racing ahead, heads raised", explanation: "Terror causes heads to freeze upward", verseRef: "14:43" },
        { term: "لَا يَرْتَدُّ إِلَيْهِمْ طَرْفُهُمْ", meaning: "Their gaze does not return to them", explanation: "Frozen stare of horror", verseRef: "14:43" },
        { term: "وَأَفْئِدَتُهُمْ هَوَاءٌ", meaning: "And their hearts are empty", explanation: "Hearts void from terror", verseRef: "14:43" }
      ]
    },

    regretOfDisbelievers: {
      color: '#EF4444',
      icon: 'Users',
      name: "Regret of Disbelievers",
      nameArabic: "ندم الكافرين",
      concepts: [
        { term: "رَبَّنَا أَخِّرْنَا إِلَىٰ أَجَلٍ قَرِيبٍ", meaning: "Our Lord, delay us for a brief term", explanation: "Too-late request for time", verseRef: "14:44" },
        { term: "نُّجِبْ دَعْوَتَكَ وَنَتَّبِعِ الرُّسُلَ", meaning: "We will answer Your call and follow the messengers", explanation: "Promise they cannot keep", verseRef: "14:44" },
        { term: "أَوَلَمْ تَكُونُوا أَقْسَمْتُم مِّن قَبْلُ مَا لَكُم مِّن زَوَالٍ", meaning: "Had you not sworn before that you would never decline?", explanation: "Reminder of their arrogance", verseRef: "14:44" }
      ]
    },

    satanDisowns: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Satan Disowns Followers",
      nameArabic: "تبرؤ الشيطان",
      concepts: [
        { term: "وَقَالَ الشَّيْطَانُ لَمَّا قُضِيَ الْأَمْرُ", meaning: "And Satan will say when the matter is concluded", explanation: "Satan's speech on Judgment Day", verseRef: "14:22" },
        { term: "إِنَّ اللَّهَ وَعَدَكُمْ وَعْدَ الْحَقِّ وَوَعَدتُّكُمْ فَأَخْلَفْتُكُمْ", meaning: "Allah promised you truth, I promised and betrayed you", explanation: "Satan admits his deception", verseRef: "14:22" },
        { term: "وَمَا كَانَ لِيَ عَلَيْكُم مِّن سُلْطَانٍ إِلَّا أَن دَعَوْتُكُمْ فَاسْتَجَبْتُمْ لِي", meaning: "I had no authority over you except that I called you and you responded", explanation: "Satan had no power, only suggestions", verseRef: "14:22" },
        { term: "فَلَا تَلُومُونِي وَلُومُوا أَنفُسَكُم", meaning: "So blame not me but blame yourselves", explanation: "Personal responsibility emphasized", verseRef: "14:22" },
        { term: "إِنِّي كَفَرْتُ بِمَا أَشْرَكْتُمُونِ مِن قَبْلُ", meaning: "Indeed I deny your previous association of me", explanation: "Satan rejects being worshipped", verseRef: "14:22" }
      ]
    },

    paradiseDescription: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      concepts: [
        { term: "وَأُدْخِلَ الَّذِينَ آمَنُوا... جَنَّاتٍ", meaning: "And those who believed will be admitted to gardens", explanation: "Entry of believers to Paradise", verseRef: "14:23" },
        { term: "تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: "Beneath which rivers flow", explanation: "Rivers of Paradise", verseRef: "14:23" },
        { term: "خَالِدِينَ فِيهَا بِإِذْنِ رَبِّهِمْ", meaning: "Abiding therein by permission of their Lord", explanation: "Eternal residence", verseRef: "14:23" },
        { term: "تَحِيَّتُهُمْ فِيهَا سَلَامٌ", meaning: "Their greeting therein is 'Peace'", explanation: "Greeting in Paradise", verseRef: "14:23" }
      ]
    },

    cosmicTransformation: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Cosmic Transformation",
      nameArabic: "تبدل الكون",
      concepts: [
        { term: "يَوْمَ تُبَدَّلُ الْأَرْضُ غَيْرَ الْأَرْضِ وَالسَّمَاوَاتُ", meaning: "The Day earth will be replaced by another earth and the heavens", explanation: "Complete cosmic recreation", verseRef: "14:48" },
        { term: "وَبَرَزُوا لِلَّهِ الْوَاحِدِ الْقَهَّارِ", meaning: "And they will come forth before Allah, the One, the Prevailing", explanation: "Standing before Allah", verseRef: "14:48" },
        { term: "وَتَرَى الْمُجْرِمِينَ يَوْمَئِذٍ مُّقَرَّنِينَ فِي الْأَصْفَادِ", meaning: "You will see criminals that Day bound together in shackles", explanation: "Criminals chained together", verseRef: "14:49" },
        { term: "سَرَابِيلُهُم مِّن قَطِرَانٍ", meaning: "Their garments of tar", explanation: "Clothing of burning pitch", verseRef: "14:50" },
        { term: "وَتَغْشَىٰ وُجُوهَهُمُ النَّارُ", meaning: "And fire will cover their faces", explanation: "Faces engulfed in flames", verseRef: "14:50" }
      ]
    },

    warningToPeople: {
      color: '#10B981',
      icon: 'Book',
      name: "Warning to People",
      nameArabic: "البلاغ والإنذار",
      concepts: [
        { term: "هَٰذَا بَلَاغٌ لِّلنَّاسِ", meaning: "This is notification for the people", explanation: "Quran as clear message", verseRef: "14:52" },
        { term: "وَلِيُنذَرُوا بِهِ", meaning: "That they may be warned thereby", explanation: "Purpose: warning humanity", verseRef: "14:52" },
        { term: "وَلِيَعْلَمُوا أَنَّمَا هُوَ إِلَٰهٌ وَاحِدٌ", meaning: "And that they may know He is but one God", explanation: "Core message: Tawheed", verseRef: "14:52" },
        { term: "وَلِيَذَّكَّرَ أُولُو الْأَلْبَابِ", meaning: "And that those of understanding may remember", explanation: "Reminder for the intelligent", verseRef: "14:52" }
      ]
    }
  },

  relationships: [
    { from: "كلمة طيبة", to: "شجرة طيبة", type: "parable", description: "Good word compared to good tree - faith has strong roots" },
    { from: "كلمة خبيثة", to: "شجرة خبيثة", type: "parable", description: "Evil word compared to uprooted tree - kufr has no foundation" },
    { from: "الظلمات", to: "النور", type: "contrast", description: "Darkness (disbelief) vs Light (faith) - central metaphor" },
    { from: "دعاء إبراهيم", to: "مكة", type: "fulfillment", description: "Ibrahim's prayers answered - Makkah became center of Islam" },
    { from: "نعم الله", to: "كفران الإنسان", type: "irony", description: "Countless blessings met with ingratitude" },
    { from: "وعد الشيطان", to: "وعد الله", type: "contrast", description: "Satan's false promises vs Allah's true promise" },
    { from: "تبديل الأرض", to: "يوم القيامة", type: "sequence", description: "Cosmic transformation at resurrection" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Revelation as Guidance", verses: "14:1-4", description: "Quran brings from darkness to light" },
      { stage: 2, theme: "Musa's Mission", verses: "14:5-8", description: "Reminder of days of Allah" },
      { stage: 3, theme: "Previous Nations", verses: "14:9-18", description: "Rejection and destruction patterns" },
      { stage: 4, theme: "Satan's Disowning", verses: "14:19-23", description: "Satan admits deception, Paradise described" },
      { stage: 5, theme: "Good and Evil Word Parables", verses: "14:24-27", description: "Tree metaphors for faith and kufr" },
      { stage: 6, theme: "Exchanging Blessings for Kufr", verses: "14:28-31", description: "Consequences of ingratitude" },
      { stage: 7, theme: "Allah's Countless Blessings", verses: "14:32-34", description: "Cosmic and earthly gifts" },
      { stage: 8, theme: "Ibrahim's Prayers", verses: "14:35-41", description: "Prayers for Makkah, family, ummah" },
      { stage: 9, theme: "Warning of Judgment", verses: "14:42-52", description: "Delay is not neglect, final reckoning" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Move from darkness to light", how: "Seek knowledge, practice Islam sincerely", verse: "14:1" },
      { principle: "Trust in Allah during hardship", how: "When harmed for faith, rely on Allah alone", verse: "14:12" },
      { principle: "Cultivate the 'good word'", how: "Strengthen tawheed, produce good deeds constantly", verse: "14:24-25" },
      { principle: "Count and appreciate blessings", how: "Daily gratitude practice, avoid complaining", verse: "14:34" },
      { principle: "Fear idolatry in all forms", how: "Even Ibrahim feared shirk - be vigilant", verse: "14:35" },
      { principle: "Pray for family's guidance", how: "Make dua for children to establish prayer", verse: "14:40" },
      { principle: "Take personal responsibility", how: "Don't blame Satan - you chose to follow", verse: "14:22" },
      { principle: "Remember this is notification", how: "Share the message, warn with wisdom", verse: "14:52" }
    ]
  },

  uniqueInsight: {
    title: "The Tale of Two Trees",
    insight: "Surah Ibrahim presents one of the Quran's most powerful parables: the comparison of the 'good word' (La ilaha illallah) to a good tree with firm roots and branches reaching the sky, versus the 'evil word' (kufr/shirk) as an uprooted tree with no stability. This parable teaches that faith produces continuous fruits (good deeds), while disbelief has no foundation and cannot sustain. The surah is named after Ibrahim specifically because it contains his famous prayers for Makkah and his descendants - prayers that were answered when Prophet Muhammad emerged from his lineage and transformed that barren valley into the spiritual center of the world. Ibrahim's fear of shirk even for himself (v.35) teaches us that no one is immune from spiritual danger, requiring constant vigilance."
  },

  historicalContext: {
    note: "This Makki surah addresses the Prophet Muhammad and early Muslims during persecution in Makkah. The references to Ibrahim settling his family in an 'uncultivated valley' near the Sacred House would have resonated deeply with Makkan listeners who knew they were descendants of Ismail. The threat of exile mentioned (v.13) reflects the actual persecution faced by early Muslims. The name 'Ibrahim' connects this surah to the Abrahamic legacy that both the Prophet and the Quraysh claimed - yet the surah distinguishes true followers of Ibrahim (monotheists) from those who had corrupted his legacy with idol worship."
  },

  linguisticFeatures: {
    features: [
      { feature: "الظُّلُمَاتِ/النُّورِ", example: "Darkness/Light", effect: "Plural for darkness (many types), singular for light (one truth)" },
      { feature: "كَلِمَةً طَيِّبَةً", example: "Good word", effect: "Indefinite for vastness - encompasses all good" },
      { feature: "أَصْلُهَا ثَابِتٌ", example: "Root firm", effect: "Passive participle - established permanently" },
      { feature: "لَظَلُومٌ كَفَّارٌ", example: "Very unjust, very ungrateful", effect: "Intensive forms (فَعُول and فَعَّار) emphasizing human tendency" },
      { feature: "تَشْخَصُ فِيهِ الْأَبْصَارُ", example: "Eyes stare", effect: "Visual imagery of terror" },
      { feature: "وَأَفْئِدَتُهُمْ هَوَاءٌ", example: "Hearts are empty", effect: "Metaphor - hearts become void from fear" }
    ]
  },

  ibrahimPrayers: {
    note: "The surah contains seven distinct prayers of Ibrahim, making it a masterclass in supplication: (1) Safety for Makkah, (2) Protection from idolatry, (3) Followers to join him, (4) Hearts to incline to Makkah, (5) Provision for family, (6) Establishment of prayer, (7) Forgiveness. Each prayer shows his priorities: security, monotheism, community, spiritual attraction, material needs, worship, and mercy."
  },

  scientificReferences: {
    notes: [
      { verse: "14:24", topic: "Tree root systems", note: "Deep roots provide stability - faith needs deep conviction" },
      { verse: "14:32", topic: "Ship navigation", note: "Early recognition of maritime travel as blessing" },
      { verse: "14:33", topic: "Sun and moon cycles", note: "Continuous (دَائِبَيْنِ) - unceasing celestial motion" },
      { verse: "14:34", topic: "Uncountable blessings", note: "Modern science reveals countless bodily processes, cells, etc." },
      { verse: "14:48", topic: "Cosmic transformation", note: "Universe will be recreated - modern cosmology confirms universe had beginning" }
    ]
  }
};

export default ONTOLOGY;
