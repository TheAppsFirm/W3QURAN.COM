/**
 * Surah Al-Ahqaf (46) - Ontology of Quranic Concepts
 * The Sand Dunes
 * Theme: Quran confirmation, kindness to parents, Jinn listening to Quran, 'Ad destruction at Al-Ahqaf
 */

export const ONTOLOGY = {
  surahId: 46,
  surahName: "Al-Ahqaf",
  surahNameArabic: "الأحقاف",
  revelationType: "Makki",
  totalAyahs: 35,

  categories: {
    quranConfirmation: {
      name: "Quran's Divine Origin",
      nameArabic: "التأكيد على القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم", meaning: "Ha Mim", explanation: "Disconnected letters opening the surah", verseRef: "46:1" },
        { term: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ", meaning: "Revelation of the Book from Allah, the Mighty, the Wise", explanation: "Divine source of Quran", verseRef: "46:2" },
        { term: "مَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا إِلَّا بِالْحَقِّ", meaning: "We created heavens and earth and what is between them only in truth", explanation: "Creation has purpose", verseRef: "46:3" },
        { term: "وَأَجَلٍ مُّسَمًّى", meaning: "And for a specified term", explanation: "Everything has appointed time", verseRef: "46:3" },
        { term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", meaning: "Confirming what came before it", explanation: "Quran confirms previous scriptures", verseRef: "46:12" },
        { term: "لِسَانًا عَرَبِيًّا", meaning: "In Arabic tongue", explanation: "Quran revealed in Arabic", verseRef: "46:12" },
        { term: "لِّيُنذِرَ الَّذِينَ ظَلَمُوا", meaning: "To warn those who do wrong", explanation: "Warning function of Quran", verseRef: "46:12" },
        { term: "وَبُشْرَىٰ لِلْمُحْسِنِينَ", meaning: "And glad tidings for doers of good", explanation: "Good news for righteous", verseRef: "46:12" }
      ]
    },

    idolCritique: {
      name: "Critique of Idol Worship",
      nameArabic: "نقد عبادة الأصنام",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ", meaning: "Show me what they created of the earth", explanation: "Challenge to prove idols' power", verseRef: "46:4" },
        { term: "أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ", meaning: "Or do they have a share in the heavens?", explanation: "Idols have no cosmic role", verseRef: "46:4" },
        { term: "ائْتُونِي بِكِتَابٍ مِّن قَبْلِ هَـٰذَا", meaning: "Bring me a book before this", explanation: "Demand for scriptural evidence", verseRef: "46:4" },
        { term: "أَوْ أَثَارَةٍ مِّنْ عِلْمٍ", meaning: "Or a remnant of knowledge", explanation: "Any trace of valid proof", verseRef: "46:4" },
        { term: "وَمَنْ أَضَلُّ مِمَّن يَدْعُو مِن دُونِ اللَّهِ", meaning: "Who is more astray than one who invokes besides Allah", explanation: "Extreme misguidance of idol worship", verseRef: "46:5" },
        { term: "مَن لَّا يَسْتَجِيبُ لَهُ إِلَىٰ يَوْمِ الْقِيَامَةِ", meaning: "Those who will not respond to him until Day of Judgment", explanation: "Idols cannot answer prayers", verseRef: "46:5" },
        { term: "وَهُمْ عَن دُعَائِهِمْ غَافِلُونَ", meaning: "And they are heedless of their prayers", explanation: "Idols are oblivious", verseRef: "46:5" },
        { term: "وَإِذَا حُشِرَ النَّاسُ كَانُوا لَهُمْ أَعْدَاءً", meaning: "When people are gathered, they will be enemies to them", explanation: "Idols become enemies on Judgment Day", verseRef: "46:6" },
        { term: "وَكَانُوا بِعِبَادَتِهِمْ كَافِرِينَ", meaning: "And will deny their worship", explanation: "Idols reject their worshippers", verseRef: "46:6" }
      ]
    },

    quranRejection: {
      name: "Rejection of Quran",
      nameArabic: "رفض القرآن",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "قَالَ الَّذِينَ كَفَرُوا لِلْحَقِّ لَمَّا جَاءَهُمْ هَـٰذَا سِحْرٌ مُّبِينٌ", meaning: "Those who disbelieved said when truth came: This is clear magic", explanation: "Dismissing Quran as magic", verseRef: "46:7" },
        { term: "أَمْ يَقُولُونَ افْتَرَاهُ", meaning: "Or do they say he invented it?", explanation: "Accusation of fabrication", verseRef: "46:8" },
        { term: "قُلْ إِنِ افْتَرَيْتُهُ فَلَا تَمْلِكُونَ لِي مِنَ اللَّهِ شَيْئًا", meaning: "Say: If I invented it, you cannot protect me from Allah", explanation: "Prophet's defense", verseRef: "46:8" },
        { term: "هُوَ أَعْلَمُ بِمَا تُفِيضُونَ فِيهِ", meaning: "He knows best what you engage in", explanation: "Allah knows their mockery", verseRef: "46:8" },
        { term: "كَفَىٰ بِهِ شَهِيدًا بَيْنِي وَبَيْنَكُمْ", meaning: "Sufficient is He as witness between me and you", explanation: "Allah as ultimate witness", verseRef: "46:8" }
      ]
    },

    prophetDefense: {
      name: "Prophet's Defense",
      nameArabic: "دفاع النبي",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "قُلْ مَا كُنتُ بِدْعًا مِّنَ الرُّسُلِ", meaning: "Say: I am not something unprecedented among messengers", explanation: "Prophet follows prophetic tradition", verseRef: "46:9" },
        { term: "وَمَا أَدْرِي مَا يُفْعَلُ بِي وَلَا بِكُمْ", meaning: "I know not what will be done with me or you", explanation: "Prophet has no knowledge of unseen", verseRef: "46:9" },
        { term: "إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰ إِلَيَّ", meaning: "I only follow what is revealed to me", explanation: "Prophet obeys revelation", verseRef: "46:9" },
        { term: "وَمَا أَنَا إِلَّا نَذِيرٌ مُّبِينٌ", meaning: "I am only a clear warner", explanation: "Prophet's role defined", verseRef: "46:9" }
      ]
    },

    witnessFromIsrael: {
      name: "Witness from Children of Israel",
      nameArabic: "شاهد من بني إسرائيل",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قُلْ أَرَأَيْتُمْ إِن كَانَ مِنْ عِندِ اللَّهِ وَكَفَرْتُم بِهِ", meaning: "Say: Have you considered if it is from Allah and you disbelieved?", explanation: "What if Quran is truly divine?", verseRef: "46:10" },
        { term: "وَشَهِدَ شَاهِدٌ مِّن بَنِي إِسْرَائِيلَ عَلَىٰ مِثْلِهِ", meaning: "And a witness from Children of Israel testified to its like", explanation: "Jewish witness confirms Quran matches Torah", verseRef: "46:10" },
        { term: "فَآمَنَ وَاسْتَكْبَرْتُمْ", meaning: "So he believed while you were arrogant", explanation: "Contrast: humble believer vs arrogant rejectors", verseRef: "46:10" },
        { term: "إِنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ", meaning: "Allah does not guide wrongdoing people", explanation: "Guidance withheld from oppressors", verseRef: "46:10" }
      ]
    },

    disbelieversExcuses: {
      name: "Disbelievers' Excuses",
      nameArabic: "حجج الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا لَوْ كَانَ خَيْرًا مَّا سَبَقُونَا إِلَيْهِ", meaning: "Disbelievers said of believers: If it were good, they wouldn't have preceded us to it", explanation: "Arrogant dismissal based on social status", verseRef: "46:11" },
        { term: "وَإِذْ لَمْ يَهْتَدُوا بِهِ", meaning: "And when they are not guided by it", explanation: "Their own rejection proves nothing", verseRef: "46:11" },
        { term: "فَسَيَقُولُونَ هَـٰذَا إِفْكٌ قَدِيمٌ", meaning: "They will say: This is an ancient lie", explanation: "Dismissing truth as old falsehood", verseRef: "46:11" }
      ]
    },

    mosesBook: {
      name: "Book of Moses",
      nameArabic: "كتاب موسى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَمِن قَبْلِهِ كِتَابُ مُوسَىٰ إِمَامًا وَرَحْمَةً", meaning: "And before it was the Book of Moses, a guide and mercy", explanation: "Torah as preceding guidance", verseRef: "46:12" },
        { term: "وَهَـٰذَا كِتَابٌ مُّصَدِّقٌ", meaning: "And this is a confirming Book", explanation: "Quran confirms Torah", verseRef: "46:12" }
      ]
    },

    steadfastBelievers: {
      name: "Steadfast Believers",
      nameArabic: "المؤمنون الصابرون",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا", meaning: "Those who said 'Our Lord is Allah' then stood firm", explanation: "Declaration followed by consistency", verseRef: "46:13" },
        { term: "فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", meaning: "No fear upon them, nor will they grieve", explanation: "Security for the steadfast", verseRef: "46:13" },
        { term: "أُولَـٰئِكَ أَصْحَابُ الْجَنَّةِ خَالِدِينَ فِيهَا", meaning: "Those are companions of Paradise, abiding eternally", explanation: "Eternal Paradise for believers", verseRef: "46:14" },
        { term: "جَزَاءً بِمَا كَانُوا يَعْمَلُونَ", meaning: "As reward for what they used to do", explanation: "Actions determine reward", verseRef: "46:14" }
      ]
    },

    kindnessToParents: {
      name: "Kindness to Parents",
      nameArabic: "الإحسان إلى الوالدين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ إِحْسَانًا", meaning: "We have enjoined upon man kindness to his parents", explanation: "Divine command for parental kindness", verseRef: "46:15" },
        { term: "حَمَلَتْهُ أُمُّهُ كُرْهًا وَوَضَعَتْهُ كُرْهًا", meaning: "His mother carried him with hardship and delivered him with hardship", explanation: "Mother's physical sacrifice", verseRef: "46:15" },
        { term: "وَحَمْلُهُ وَفِصَالُهُ ثَلَاثُونَ شَهْرًا", meaning: "Carrying him and weaning him is thirty months", explanation: "Period of pregnancy and nursing", verseRef: "46:15" },
        { term: "حَتَّىٰ إِذَا بَلَغَ أَشُدَّهُ وَبَلَغَ أَرْبَعِينَ سَنَةً", meaning: "Until he reaches maturity and reaches forty years", explanation: "Age of full maturity", verseRef: "46:15" },
        { term: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ", meaning: "My Lord, enable me to be grateful for Your favor", explanation: "Prayer for gratitude", verseRef: "46:15" },
        { term: "الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ", meaning: "Which You bestowed upon me and my parents", explanation: "Gratitude for blessings to self and parents", verseRef: "46:15" },
        { term: "وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ", meaning: "And that I may do righteousness pleasing to You", explanation: "Prayer for good deeds", verseRef: "46:15" },
        { term: "وَأَصْلِحْ لِي فِي ذُرِّيَّتِي", meaning: "And make righteous for me my offspring", explanation: "Prayer for righteous children", verseRef: "46:15" },
        { term: "إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ", meaning: "I have repented to You, and I am of the Muslims", explanation: "Declaration of repentance and submission", verseRef: "46:15" }
      ]
    },

    acceptedBelievers: {
      name: "Believers Whose Deeds Are Accepted",
      nameArabic: "المقبولون من المؤمنين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "أُولَـٰئِكَ الَّذِينَ نَتَقَبَّلُ عَنْهُمْ أَحْسَنَ مَا عَمِلُوا", meaning: "Those from whom We accept the best of what they did", explanation: "Best deeds accepted", verseRef: "46:16" },
        { term: "وَنَتَجَاوَزُ عَن سَيِّئَاتِهِمْ", meaning: "And We overlook their misdeeds", explanation: "Sins forgiven", verseRef: "46:16" },
        { term: "فِي أَصْحَابِ الْجَنَّةِ", meaning: "Among companions of Paradise", explanation: "Their destination", verseRef: "46:16" },
        { term: "وَعْدَ الصِّدْقِ الَّذِي كَانُوا يُوعَدُونَ", meaning: "The promise of truth which they were promised", explanation: "Fulfillment of divine promise", verseRef: "46:16" }
      ]
    },

    disobedientChild: {
      name: "Disobedient Child",
      nameArabic: "الولد العاق",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَالَّذِي قَالَ لِوَالِدَيْهِ أُفٍّ لَّكُمَا", meaning: "And the one who says to his parents: Uff to you both", explanation: "Expression of disrespect", verseRef: "46:17" },
        { term: "أَتَعِدَانِنِي أَنْ أُخْرَجَ وَقَدْ خَلَتِ الْقُرُونُ مِن قَبْلِي", meaning: "Do you promise me I'll be brought forth when generations passed before me?", explanation: "Denying resurrection", verseRef: "46:17" },
        { term: "وَهُمَا يَسْتَغِيثَانِ اللَّهَ", meaning: "While they both implore Allah", explanation: "Parents seeking Allah's help", verseRef: "46:17" },
        { term: "وَيْلَكَ آمِنْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: "Woe to you! Believe! Indeed Allah's promise is true", explanation: "Parents' plea for child's faith", verseRef: "46:17" },
        { term: "فَيَقُولُ مَا هَـٰذَا إِلَّا أَسَاطِيرُ الْأَوَّلِينَ", meaning: "But he says: This is nothing but legends of the ancients", explanation: "Dismissing faith as mythology", verseRef: "46:17" },
        { term: "أُولَـٰئِكَ الَّذِينَ حَقَّ عَلَيْهِمُ الْقَوْلُ", meaning: "Those upon whom the decree has come due", explanation: "Punishment decreed for them", verseRef: "46:18" },
        { term: "فِي أُمَمٍ قَدْ خَلَتْ مِن قَبْلِهِم مِّنَ الْجِنِّ وَالْإِنسِ", meaning: "Among nations of jinn and humans that passed before", explanation: "Joining previous condemned nations", verseRef: "46:18" },
        { term: "إِنَّهُمْ كَانُوا خَاسِرِينَ", meaning: "Indeed, they were losers", explanation: "Ultimate loss", verseRef: "46:18" }
      ]
    },

    ranksByDeeds: {
      name: "Ranks According to Deeds",
      nameArabic: "الدرجات بالأعمال",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "وَلِكُلٍّ دَرَجَاتٌ مِّمَّا عَمِلُوا", meaning: "For all there are ranks from what they did", explanation: "Deeds determine levels", verseRef: "46:19" },
        { term: "وَلِيُوَفِّيَهُمْ أَعْمَالَهُمْ وَهُمْ لَا يُظْلَمُونَ", meaning: "That He may fully compensate them, and they will not be wronged", explanation: "Perfect justice in recompense", verseRef: "46:19" }
      ]
    },

    disbelieversExposed: {
      name: "Disbelievers Exposed on Judgment Day",
      nameArabic: "فضح الكافرين يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَيَوْمَ يُعْرَضُ الَّذِينَ كَفَرُوا عَلَى النَّارِ", meaning: "Day when disbelievers are exposed to the Fire", explanation: "Confrontation with Hell", verseRef: "46:20" },
        { term: "أَذْهَبْتُمْ طَيِّبَاتِكُمْ فِي حَيَاتِكُمُ الدُّنْيَا", meaning: "You exhausted your pleasures in your worldly life", explanation: "Consumed all good in dunya", verseRef: "46:20" },
        { term: "وَاسْتَمْتَعْتُم بِهَا", meaning: "And you enjoyed them", explanation: "Temporary enjoyment", verseRef: "46:20" },
        { term: "فَالْيَوْمَ تُجْزَوْنَ عَذَابَ الْهُونِ", meaning: "So today you are recompensed with humiliating punishment", explanation: "Punishment of disgrace", verseRef: "46:20" },
        { term: "بِمَا كُنتُمْ تَسْتَكْبِرُونَ فِي الْأَرْضِ بِغَيْرِ الْحَقِّ", meaning: "Because you were arrogant in the earth without right", explanation: "Arrogance as cause", verseRef: "46:20" },
        { term: "وَبِمَا كُنتُمْ تَفْسُقُونَ", meaning: "And because you used to defiantly disobey", explanation: "Defiance as cause", verseRef: "46:20" }
      ]
    },

    adDestruction: {
      name: "Destruction of 'Ad at Al-Ahqaf",
      nameArabic: "هلاك عاد في الأحقاف",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَاذْكُرْ أَخَا عَادٍ إِذْ أَنذَرَ قَوْمَهُ بِالْأَحْقَافِ", meaning: "Mention the brother of 'Ad when he warned his people at Al-Ahqaf", explanation: "Hud's warning at the Sand Dunes", verseRef: "46:21" },
        { term: "الْأَحْقَافِ", meaning: "Al-Ahqaf (Sand Dunes)", explanation: "Region of curved sand dunes where 'Ad lived", verseRef: "46:21" },
        { term: "وَقَدْ خَلَتِ النُّذُرُ مِن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ", meaning: "And warners had passed before and after him", explanation: "Many messengers sent", verseRef: "46:21" },
        { term: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ", meaning: "Worship none but Allah", explanation: "Core message of Hud", verseRef: "46:21" },
        { term: "إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: "I fear for you punishment of a tremendous Day", explanation: "Warning of catastrophe", verseRef: "46:21" }
      ]
    },

    adResponse: {
      name: "'Ad's Response to Hud",
      nameArabic: "رد عاد على هود",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "قَالُوا أَجِئْتَنَا لِتَأْفِكَنَا عَنْ آلِهَتِنَا", meaning: "They said: Have you come to turn us away from our gods?", explanation: "'Ad's accusation", verseRef: "46:22" },
        { term: "فَأْتِنَا بِمَا تَعِدُنَا إِن كُنتَ مِنَ الصَّادِقِينَ", meaning: "Bring us what you promise if you are truthful", explanation: "Demanding punishment", verseRef: "46:22" },
        { term: "قَالَ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ", meaning: "He said: Knowledge is only with Allah", explanation: "Timing known only to Allah", verseRef: "46:23" },
        { term: "وَأُبَلِّغُكُم مَّا أُرْسِلْتُ بِهِ", meaning: "I only convey what I was sent with", explanation: "Prophet's role: delivering message", verseRef: "46:23" },
        { term: "وَلَـٰكِنِّي أَرَاكُمْ قَوْمًا تَجْهَلُونَ", meaning: "But I see you are ignorant people", explanation: "Diagnosis of their condition", verseRef: "46:23" }
      ]
    },

    theDestructiveWind: {
      name: "The Destructive Wind",
      nameArabic: "الريح المدمرة",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "فَلَمَّا رَأَوْهُ عَارِضًا مُّسْتَقْبِلَ أَوْدِيَتِهِمْ", meaning: "When they saw it as a cloud approaching their valleys", explanation: "Cloud seeming to bring rain", verseRef: "46:24" },
        { term: "قَالُوا هَـٰذَا عَارِضٌ مُّمْطِرُنَا", meaning: "They said: This is a cloud bringing us rain", explanation: "Misinterpreting the sign", verseRef: "46:24" },
        { term: "بَلْ هُوَ مَا اسْتَعْجَلْتُم بِهِ", meaning: "Rather, it is what you hastened", explanation: "The punishment they demanded", verseRef: "46:24" },
        { term: "رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ", meaning: "A wind containing painful punishment", explanation: "Nature of the destruction", verseRef: "46:24" },
        { term: "تُدَمِّرُ كُلَّ شَيْءٍ بِأَمْرِ رَبِّهَا", meaning: "Destroying everything by command of its Lord", explanation: "Total destruction by divine order", verseRef: "46:25" },
        { term: "فَأَصْبَحُوا لَا يُرَىٰ إِلَّا مَسَاكِنُهُمْ", meaning: "They became such that nothing was seen except their dwellings", explanation: "Only ruins remained", verseRef: "46:25" },
        { term: "كَذَٰلِكَ نَجْزِي الْقَوْمَ الْمُجْرِمِينَ", meaning: "Thus do We recompense the criminal people", explanation: "Pattern of divine punishment", verseRef: "46:25" }
      ]
    },

    adPower: {
      name: "'Ad's Power Was Useless",
      nameArabic: "عجز قوة عاد",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَلَقَدْ مَكَّنَّاهُمْ فِيمَا إِن مَّكَّنَّاكُمْ فِيهِ", meaning: "We had established them in what We have not established you", explanation: "'Ad had more power than Quraysh", verseRef: "46:26" },
        { term: "وَجَعَلْنَا لَهُمْ سَمْعًا وَأَبْصَارًا وَأَفْئِدَةً", meaning: "We made for them hearing, sight, and hearts", explanation: "Given full faculties", verseRef: "46:26" },
        { term: "فَمَا أَغْنَىٰ عَنْهُمْ سَمْعُهُمْ وَلَا أَبْصَارُهُمْ وَلَا أَفْئِدَتُهُم مِّن شَيْءٍ", meaning: "Their hearing, sight, and hearts availed them nothing", explanation: "Faculties useless when rejecting truth", verseRef: "46:26" },
        { term: "إِذْ كَانُوا يَجْحَدُونَ بِآيَاتِ اللَّهِ", meaning: "Since they used to deny Allah's signs", explanation: "Cause of their downfall", verseRef: "46:26" },
        { term: "وَحَاقَ بِهِم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: "And they were enveloped by what they used to ridicule", explanation: "Mocked punishment became reality", verseRef: "46:26" }
      ]
    },

    surroundingDestruction: {
      name: "Surrounding Nations Destroyed",
      nameArabic: "إهلاك الأمم المجاورة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَلَقَدْ أَهْلَكْنَا مَا حَوْلَكُم مِّنَ الْقُرَىٰ", meaning: "We have destroyed towns around you", explanation: "Surrounding nations destroyed", verseRef: "46:27" },
        { term: "وَصَرَّفْنَا الْآيَاتِ لَعَلَّهُمْ يَرْجِعُونَ", meaning: "We diversified the signs so they might return", explanation: "Signs given to prompt repentance", verseRef: "46:27" },
        { term: "فَلَوْلَا نَصَرَهُمُ الَّذِينَ اتَّخَذُوا مِن دُونِ اللَّهِ قُرْبَانًا آلِهَةً", meaning: "Why did those they took as gods besides Allah not help them?", explanation: "False gods failed them", verseRef: "46:28" },
        { term: "بَلْ ضَلُّوا عَنْهُمْ", meaning: "Rather, they vanished from them", explanation: "Idols disappeared", verseRef: "46:28" },
        { term: "وَذَٰلِكَ إِفْكُهُمْ وَمَا كَانُوا يَفْتَرُونَ", meaning: "That was their lie and what they used to invent", explanation: "Their false beliefs exposed", verseRef: "46:28" }
      ]
    },

    jinnListeningToQuran: {
      name: "Jinn Listening to the Quran",
      nameArabic: "استماع الجن للقرآن",
      color: '#F59E0B',
      icon: 'Sparkles',
      concepts: [
        { term: "وَإِذْ صَرَفْنَا إِلَيْكَ نَفَرًا مِّنَ الْجِنِّ يَسْتَمِعُونَ الْقُرْآنَ", meaning: "When We directed to you a group of jinn listening to the Quran", explanation: "Jinn delegation sent to hear Quran", verseRef: "46:29" },
        { term: "فَلَمَّا حَضَرُوهُ قَالُوا أَنصِتُوا", meaning: "When they attended it, they said: Listen quietly", explanation: "Jinn's reverence for Quran", verseRef: "46:29" },
        { term: "فَلَمَّا قُضِيَ وَلَّوْا إِلَىٰ قَوْمِهِم مُّنذِرِينَ", meaning: "When it was concluded, they returned to their people as warners", explanation: "Jinn became preachers", verseRef: "46:29" }
      ]
    },

    jinnAnnouncement: {
      name: "Jinn's Announcement to Their People",
      nameArabic: "إعلان الجن لقومهم",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "قَالُوا يَا قَوْمَنَا إِنَّا سَمِعْنَا كِتَابًا أُنزِلَ مِن بَعْدِ مُوسَىٰ", meaning: "They said: O our people, we heard a Book revealed after Moses", explanation: "Jinn recognize Quran's place in scripture", verseRef: "46:30" },
        { term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", meaning: "Confirming what came before it", explanation: "Quran confirms previous revelation", verseRef: "46:30" },
        { term: "يَهْدِي إِلَى الْحَقِّ وَإِلَىٰ طَرِيقٍ مُّسْتَقِيمٍ", meaning: "Guiding to truth and to a straight path", explanation: "Quran's guidance recognized", verseRef: "46:30" },
        { term: "يَا قَوْمَنَا أَجِيبُوا دَاعِيَ اللَّهِ", meaning: "O our people, respond to the caller of Allah", explanation: "Call to follow Prophet", verseRef: "46:31" },
        { term: "وَآمِنُوا بِهِ", meaning: "And believe in him", explanation: "Call to faith", verseRef: "46:31" },
        { term: "يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ", meaning: "He will forgive you your sins", explanation: "Promise of forgiveness", verseRef: "46:31" },
        { term: "وَيُجِرْكُم مِّنْ عَذَابٍ أَلِيمٍ", meaning: "And protect you from a painful punishment", explanation: "Promise of protection", verseRef: "46:31" }
      ]
    },

    jinnWarning: {
      name: "Jinn's Warning",
      nameArabic: "تحذير الجن",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَن لَّا يُجِبْ دَاعِيَ اللَّهِ فَلَيْسَ بِمُعْجِزٍ فِي الْأَرْضِ", meaning: "Whoever does not respond to Allah's caller cannot escape on earth", explanation: "No escape from Allah", verseRef: "46:32" },
        { term: "وَلَيْسَ لَهُ مِن دُونِهِ أَوْلِيَاءُ", meaning: "And he has no protectors besides Him", explanation: "No protection outside Allah", verseRef: "46:32" },
        { term: "أُولَـٰئِكَ فِي ضَلَالٍ مُّبِينٍ", meaning: "Those are in clear error", explanation: "State of rejectors", verseRef: "46:32" }
      ]
    },

    resurrectionProof: {
      name: "Proof of Resurrection",
      nameArabic: "إثبات البعث",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَلَمْ يَعْيَ بِخَلْقِهِنَّ", meaning: "Do they not see that Allah who created heavens and earth was not wearied by their creation", explanation: "Creator not tired by first creation", verseRef: "46:33" },
        { term: "بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ", meaning: "Is capable of giving life to the dead", explanation: "Resurrection within His power", verseRef: "46:33" },
        { term: "بَلَىٰ إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: "Yes, He is over all things competent", explanation: "Absolute divine power", verseRef: "46:33" }
      ]
    },

    judgmentDay: {
      name: "Judgment Day",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَيَوْمَ يُعْرَضُ الَّذِينَ كَفَرُوا عَلَى النَّارِ", meaning: "Day when disbelievers are exposed to the Fire", explanation: "Confrontation with reality", verseRef: "46:34" },
        { term: "أَلَيْسَ هَـٰذَا بِالْحَقِّ", meaning: "Is this not the truth?", explanation: "Question to deniers", verseRef: "46:34" },
        { term: "قَالُوا بَلَىٰ وَرَبِّنَا", meaning: "They will say: Yes, by our Lord", explanation: "Forced admission", verseRef: "46:34" },
        { term: "قَالَ فَذُوقُوا الْعَذَابَ بِمَا كُنتُمْ تَكْفُرُونَ", meaning: "He will say: Then taste the punishment for what you used to deny", explanation: "Punishment for denial", verseRef: "46:34" }
      ]
    },

    prophetPatience: {
      name: "Command for Prophet's Patience",
      nameArabic: "الأمر بالصبر",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ", meaning: "Be patient as were the resolute messengers", explanation: "Patience like great prophets", verseRef: "46:35" },
        { term: "أُولُو الْعَزْمِ", meaning: "Ulu al-'Azm (Those of Determination)", explanation: "Top tier prophets who showed extraordinary patience", verseRef: "46:35" },
        { term: "وَلَا تَسْتَعْجِل لَّهُمْ", meaning: "And do not be impatient for them", explanation: "Don't rush punishment on disbelievers", verseRef: "46:35" },
        { term: "كَأَنَّهُمْ يَوْمَ يَرَوْنَ مَا يُوعَدُونَ لَمْ يَلْبَثُوا إِلَّا سَاعَةً مِّن نَّهَارٍ", meaning: "On Day they see what they're promised, it will be as if they stayed but an hour of a day", explanation: "Worldly life feels momentary", verseRef: "46:35" },
        { term: "بَلَاغٌ", meaning: "A notification/delivery", explanation: "Clear message delivered", verseRef: "46:35" },
        { term: "فَهَلْ يُهْلَكُ إِلَّا الْقَوْمُ الْفَاسِقُونَ", meaning: "Will any be destroyed except the defiantly disobedient?", explanation: "Only the rebellious face destruction", verseRef: "46:35" }
      ]
    }
  },

  relationships: [
    { from: "تنزيل الكتاب من الله", to: "مصدقاً لما بين يديه", type: "characteristic", description: "Divine revelation confirms previous scriptures" },
    { from: "حملته أمه كرهاً", to: "ووصينا الإنسان بوالديه إحساناً", type: "causation", description: "Mother's sacrifice demands gratitude" },
    { from: "قالوا ربنا الله ثم استقاموا", to: "فلا خوف عليهم", type: "consequence", description: "Faith + steadfastness = security" },
    { from: "أذهبتم طيباتكم في حياتكم الدنيا", to: "فاليوم تجزون عذاب الهون", type: "consequence", description: "Worldly indulgence leads to humiliation" },
    { from: "فأتنا بما تعدنا", to: "ريح فيها عذاب أليم", type: "response", description: "'Ad's demand answered with destructive wind" },
    { from: "نفراً من الجن يستمعون القرآن", to: "ولوا إلى قومهم منذرين", type: "progression", description: "Jinn heard, believed, then preached" },
    { from: "ما أغنى عنهم سمعهم ولا أبصارهم", to: "يجحدون بآيات الله", type: "causation", description: "Denying signs made faculties useless" },
    { from: "أولو العزم من الرسل", to: "فاصبر كما صبروا", type: "exemplar", description: "Past prophets' patience as model" },
    { from: "قالوا هذا عارض ممطرنا", to: "بل هو ما استعجلتم به", type: "irony", description: "Expected blessing was actually punishment" },
    { from: "الذي قال لوالديه أف لكما", to: "حق عليهم القول", type: "consequence", description: "Parental disrespect leads to divine decree" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Revelation", verses: "46:1-6", description: "Quran's divine origin, critique of idol worship" },
      { stage: 2, theme: "Rejection and Defense", verses: "46:7-12", description: "Accusations against Quran, Prophet's defense, confirmation of previous scriptures" },
      { stage: 3, theme: "Steadfast Believers", verses: "46:13-14", description: "Reward for those who declare faith and remain firm" },
      { stage: 4, theme: "Kindness to Parents", verses: "46:15-16", description: "Divine command, mother's sacrifice, model supplication" },
      { stage: 5, theme: "Disobedient Child", verses: "46:17-18", description: "Contrast: ungrateful child denying resurrection" },
      { stage: 6, theme: "Judgment Day Scenes", verses: "46:19-20", description: "Ranks by deeds, disbelievers confronted" },
      { stage: 7, theme: "Story of 'Ad", verses: "46:21-26", description: "Hud at Al-Ahqaf, people's rejection, destructive wind" },
      { stage: 8, theme: "Lessons from Destruction", verses: "46:27-28", description: "Surrounding towns destroyed, false gods failed" },
      { stage: 9, theme: "Jinn Hear Quran", verses: "46:29-32", description: "Jinn delegation listens, believes, warns their people" },
      { stage: 10, theme: "Proof and Patience", verses: "46:33-35", description: "Resurrection proof, Judgment scene, patience command" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Quran confirms earlier scriptures", how: "Study connections between Quran, Torah, and Gospel", verse: "46:12" },
      { principle: "Be kind to parents", how: "Recognize mother's physical sacrifice; serve parents especially at 40+", verse: "46:15" },
      { principle: "Pray for gratitude, good deeds, and righteous offspring", how: "Use verse 15's supplication regularly", verse: "46:15" },
      { principle: "Faith requires steadfastness", how: "Declaration alone isn't enough; consistency matters", verse: "46:13" },
      { principle: "Don't exhaust pleasures in this life", how: "Balance worldly enjoyment with preparation for hereafter", verse: "46:20" },
      { principle: "Power and faculties are useless if rejecting truth", how: "'Ad had more than us yet perished; use abilities for truth", verse: "46:26" },
      { principle: "Quran impresses even jinn", how: "Recognize Quran's transcendent nature; recite with awareness", verse: "46:29" },
      { principle: "Respond to Allah's caller", how: "When truth comes, accept it; there's no escape from Allah", verse: "46:31-32" },
      { principle: "Be patient like Ulu al-'Azm", how: "Emulate Nuh, Ibrahim, Musa, Isa, Muhammad in patience", verse: "46:35" },
      { principle: "This life is but an hour", how: "On Judgment Day, all of dunya feels momentary", verse: "46:35" }
    ]
  },

  uniqueInsight: {
    title: "The Jinn's Model Da'wah",
    insight: "Verses 29-32 present the jinn as model preachers. Their methodology is instructive: (1) They listened attentively: 'أَنصِتُوا' - they commanded each other to listen quietly, showing reverence. (2) They understood the message's place: 'كِتَابًا أُنزِلَ مِن بَعْدِ مُوسَىٰ' - they positioned it in prophetic history, not as something alien. (3) They explained benefits: guidance to truth, forgiveness, protection. (4) They warned of consequences: no escape, no protectors. This is remarkable because jinn are often depicted as mischievous, yet here they become earnest warners. They didn't need years of study - one sitting was enough. Their immediate transformation into callers to truth challenges human hesitation in sharing faith. If jinn, after one encounter with Quran, became 'mundhirin' (warners), what excuse do humans have who recite it daily?"
  },

  historicalContext: {
    note: "Al-Ahqaf was revealed late in the Makkan period, possibly around the same time as the Prophet's trip to Ta'if. The jinn incident (verses 29-32) occurred when the Prophet ﷺ was returning from Ta'if, dejected after being rejected. While he prayed at Nakhlah, a group of jinn from Nusaybin (some say Yemen) heard his recitation and believed. This served as consolation: if Quraysh reject, jinn accept. The surah's name 'Al-Ahqaf' refers to the sand dune region where 'Ad lived (likely the Empty Quarter/Rub' al-Khali). The mention of a Jewish witness (verse 10) likely refers to Abdullah ibn Salam or others who recognized Quranic teachings matching Torah prophecies. The emphasis on parental kindness (verse 15) contrasts with stories of children being harsh to parents who accepted Islam."
  },

  linguisticFeatures: {
    features: [
      { feature: "الأَحْقَاف", example: "Al-Ahqaf (Sand Dunes)", effect: "Plural of حِقف - curved/crescent-shaped sand dune" },
      { feature: "كُرْهًا", example: "With hardship", effect: "كُره (with damma) = hardship/difficulty vs. كَره (with fatha) = hatred" },
      { feature: "أُفٍّ", example: "Uff (expression of annoyance)", effect: "Onomatopoeia of disgust; smallest form of disrespect to parents forbidden" },
      { feature: "عَارِضًا", example: "Cloud", effect: "From عَرَض - something appearing on horizon; used for rain clouds" },
      { feature: "أُولُو الْعَزْمِ", example: "Those of Determination", effect: "Technical term for top five prophets who showed extraordinary resolve" },
      { feature: "نَفَرًا", example: "A group (3-10)", effect: "Specific term for small delegation of jinn" },
      { feature: "بَلَاغٌ", example: "A notification/proclamation", effect: "From بَلَغَ - to reach/deliver; Quran reaches its purpose" },
      { feature: "تُدَمِّرُ", example: "Destroys", effect: "Form II intensive - complete destruction" }
    ]
  },

  uluAlAzm: {
    title: "The Five Resolute Prophets",
    prophets: [
      { name: "Nuh (Noah)", arabic: "نوح", trial: "950 years of preaching with minimal followers; own son drowned" },
      { name: "Ibrahim (Abraham)", arabic: "إبراهيم", trial: "Thrown in fire; commanded to sacrifice son; left family in desert" },
      { name: "Musa (Moses)", arabic: "موسى", trial: "Confronted Pharaoh; led rebellious nation; 40 years in wilderness" },
      { name: "Isa (Jesus)", arabic: "عيسى", trial: "Rejected by his people; faced crucifixion attempt; followers distorted message" },
      { name: "Muhammad", arabic: "محمد", trial: "13 years persecution; boycott; exile; loss of loved ones; battles" }
    ],
    note: "Verse 35 commands the Prophet to be patient like them, placing him in their company and confirming he faces similar trials."
  },

  adCivilization: {
    description: "The people of 'Ad were an ancient Arabian tribe descended from 'Ad ibn Aws ibn Iram. They were known for:",
    characteristics: [
      "Massive physical stature and strength",
      "Advanced architecture and construction",
      "Idol worship despite having a messenger",
      "Location in Al-Ahqaf (modern-day Oman/Yemen border region, possibly Rub' al-Khali)",
      "Destroyed by a violent wind that lasted 7 nights and 8 days"
    ],
    quranicMentions: "Also mentioned in 7:65-72, 11:50-60, 26:123-140, 41:15-16, 51:41-42, 54:18-21, 69:6-8, 89:6-8"
  },

  scientificReferences: {
    notes: [
      { verse: "46:15", topic: "Pregnancy and Nursing", note: "30 months total for carrying and weaning - combined with 24 months nursing (31:14), implies minimum 6 months pregnancy for viability, aligning with modern neonatology" },
      { verse: "46:24-25", topic: "Meteorology", note: "Description of devastating wind that appeared as rain cloud - sandstorms in Arabian desert can appear as dark clouds approaching valleys" },
      { verse: "46:33", topic: "Creation", note: "'Did not tire' (لَمْ يَعْيَ) - creation ex nihilo requires no exertion from the infinite Creator; used as proof for resurrection" }
    ]
  },

  crossReferences: {
    references: [
      { topic: "Jinn hearing Quran", thisVerse: "46:29-32", relatedSurah: "Surah Al-Jinn (72)", note: "Full surah dedicated to this incident with jinn's perspective" },
      { topic: "Mother's sacrifice", thisVerse: "46:15", relatedVerse: "31:14", note: "Luqman also mentions 30 months + 2 years weaning" },
      { topic: "'Ad destruction", thisVerse: "46:21-26", relatedSurah: "Surah Hud (11:50-60)", note: "More details on Hud's dialogue with 'Ad" },
      { topic: "Ulu al-'Azm", thisVerse: "46:35", relatedVerse: "33:7", note: "Covenant with five prophets mentioned" },
      { topic: "Witness from Israel", thisVerse: "46:10", relatedVerse: "26:197", note: "Scholars of Israel recognized Quran's truth" }
    ]
  }
};

export default ONTOLOGY;
