/**
 * Surah Saba (34) - Ontology of Quranic Concepts
 * Sheba
 *
 * Theme: The story of Sheba, Prophets Dawud and Sulayman, the flood of Arim,
 * gratitude versus ingratitude, and the consequences of denying blessings
 *
 * Revelation: Makki
 * Total Ayahs: 54
 */

export const ONTOLOGY = {
  surahId: 34,
  surahName: "Saba",
  surahNameArabic: "سبأ",
  revelationType: "Makki",
  totalAyahs: 54,

  categories: {
    openingPraise: {
      name: "Opening Praise",
      nameArabic: "الافتتاح بالحمد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: "All praise to Allah, to whom belongs whatever is in heavens and earth", explanation: "Surah opens with absolute praise acknowledging Allah's ownership", verseRef: "34:1" },
        { term: "وَلَهُ الْحَمْدُ فِي الْآخِرَةِ", meaning: "And to Him is praise in the Hereafter", explanation: "Praise belongs to Allah in both worlds", verseRef: "34:1" },
        { term: "وَهُوَ الْحَكِيمُ الْخَبِيرُ", meaning: "He is the Wise, the All-Aware", explanation: "Divine wisdom and comprehensive knowledge", verseRef: "34:1" }
      ]
    },

    divineKnowledge: {
      name: "Divine Knowledge",
      nameArabic: "العلم الإلهي",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا", meaning: "He knows what penetrates the earth and what emerges from it", explanation: "Knowledge of all that enters and exits earth", verseRef: "34:2" },
        { term: "وَمَا يَنزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا", meaning: "And what descends from heaven and what ascends therein", explanation: "Knowledge of celestial movements", verseRef: "34:2" },
        { term: "وَهُوَ الرَّحِيمُ الْغَفُورُ", meaning: "He is the Merciful, the Forgiving", explanation: "Despite complete knowledge, He is merciful and forgiving", verseRef: "34:2" },
        { term: "عَالِمِ الْغَيْبِ", meaning: "Knower of the unseen", explanation: "Allah alone knows the hidden realms", verseRef: "34:3" },
        { term: "لَا يَعْزُبُ عَنْهُ مِثْقَالُ ذَرَّةٍ", meaning: "Not absent from Him is an atom's weight", explanation: "Nothing escapes Allah's knowledge, however small", verseRef: "34:3" }
      ]
    },

    hourDeniers: {
      name: "Deniers of the Hour",
      nameArabic: "المكذبون بالساعة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لَا تَأْتِينَا السَّاعَةُ", meaning: "Those who disbelieve say: The Hour will not come to us", explanation: "Disbelievers deny the Day of Judgment", verseRef: "34:3" },
        { term: "قُلْ بَلَىٰ وَرَبِّي لَتَأْتِيَنَّكُمْ", meaning: "Say: Yes, by my Lord, it will surely come to you", explanation: "Prophet commanded to affirm with oath", verseRef: "34:3" },
        { term: "لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", meaning: "To reward those who believe and do righteous deeds", explanation: "Hour's purpose: reward the believers", verseRef: "34:4" },
        { term: "أُولَٰئِكَ لَهُم مَّغْفِرَةٌ وَرِزْقٌ كَرِيمٌ", meaning: "Those will have forgiveness and noble provision", explanation: "Believers promised forgiveness and generous reward", verseRef: "34:4" },
        { term: "وَالَّذِينَ سَعَوْا فِي آيَاتِنَا مُعَاجِزِينَ", meaning: "Those who strive against Our verses to cause failure", explanation: "Opponents try to defeat the message", verseRef: "34:5" },
        { term: "أُولَٰئِكَ لَهُمْ عَذَابٌ مِّن رِّجْزٍ أَلِيمٌ", meaning: "Those will have a punishment of painful affliction", explanation: "Severe punishment for opponents", verseRef: "34:5" }
      ]
    },

    witnessOfKnowledge: {
      name: "Witness of Those with Knowledge",
      nameArabic: "شهادة أهل العلم",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَيَرَى الَّذِينَ أُوتُوا الْعِلْمَ الَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ هُوَ الْحَقَّ", meaning: "Those given knowledge see what is revealed to you is the truth", explanation: "Learned people recognize Quran's truth", verseRef: "34:6" },
        { term: "وَيَهْدِي إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ", meaning: "And guides to the path of the Mighty, the Praiseworthy", explanation: "Quran leads to Allah's path", verseRef: "34:6" }
      ]
    },

    mockeryOfResurrection: {
      name: "Mockery of Resurrection",
      nameArabic: "السخرية من البعث",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا هَلْ نَدُلُّكُمْ عَلَىٰ رَجُلٍ يُنَبِّئُكُمْ", meaning: "The disbelievers said: Shall we direct you to a man who informs you", explanation: "Mockingly pointing to the Prophet", verseRef: "34:7" },
        { term: "إِذَا مُزِّقْتُمْ كُلَّ مُمَزَّقٍ إِنَّكُمْ لَفِي خَلْقٍ جَدِيدٍ", meaning: "When you are torn apart completely, you will be in a new creation", explanation: "Mocking the concept of resurrection after decomposition", verseRef: "34:7" },
        { term: "أَفْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَم بِهِ جِنَّةٌ", meaning: "Has he invented about Allah a lie or is there in him madness?", explanation: "Accusing Prophet of lying or insanity", verseRef: "34:8" },
        { term: "بَلِ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ فِي الْعَذَابِ وَالضَّلَالِ الْبَعِيدِ", meaning: "Rather, those who disbelieve in the Hereafter are in punishment and extreme error", explanation: "They are actually the misguided ones", verseRef: "34:8" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَفَلَمْ يَرَوْا إِلَىٰ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: "Do they not see what is before them and behind them of sky and earth?", explanation: "Heaven and earth surround them as evidence", verseRef: "34:9" },
        { term: "إِن نَّشَأْ نَخْسِفْ بِهِمُ الْأَرْضَ", meaning: "If We willed, We could cause the earth to swallow them", explanation: "Allah's power to punish through earth", verseRef: "34:9" },
        { term: "أَوْ نُسْقِطْ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاءِ", meaning: "Or let fall upon them fragments from the sky", explanation: "Allah's power to punish from above", verseRef: "34:9" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً لِّكُلِّ عَبْدٍ مُّنِيبٍ", meaning: "Indeed in that is a sign for every servant turning back", explanation: "Signs benefit the repentant", verseRef: "34:9" }
      ]
    },

    dawudBlessings: {
      name: "Blessings upon Dawud",
      nameArabic: "نعم داود",
      color: "#8B5CF6",
      icon: "Crown",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا", meaning: "We certainly gave Dawud from Us bounty", explanation: "Divine favor bestowed on Dawud", verseRef: "34:10" },
        { term: "يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ", meaning: "O mountains, repeat with him [praises], and birds", explanation: "Mountains and birds commanded to praise with Dawud", verseRef: "34:10" },
        { term: "وَأَلَنَّا لَهُ الْحَدِيدَ", meaning: "And We made iron pliable for him", explanation: "Iron became soft for Dawud to shape", verseRef: "34:10" },
        { term: "أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ", meaning: "Make full coats of mail and calculate the links", explanation: "Command to craft armor with precise measurements", verseRef: "34:11" },
        { term: "وَاعْمَلُوا صَالِحًا إِنِّي بِمَا تَعْمَلُونَ بَصِيرٌ", meaning: "And work righteousness. Indeed I am seeing what you do", explanation: "Command paired with reminder of divine observation", verseRef: "34:11" }
      ]
    },

    sulaymanBlessings: {
      name: "Blessings upon Sulayman",
      nameArabic: "نعم سليمان",
      color: "#8B5CF6",
      icon: "Crown",
      concepts: [
        { term: "وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ", meaning: "And to Sulayman the wind - its morning journey was a month, and its afternoon a month", explanation: "Wind traveled month's distance in morning and evening", verseRef: "34:12" },
        { term: "وَأَسَلْنَا لَهُ عَيْنَ الْقِطْرِ", meaning: "And We made flow for him a spring of copper", explanation: "Molten copper flowed like water for Sulayman", verseRef: "34:12" },
        { term: "وَمِنَ الْجِنِّ مَن يَعْمَلُ بَيْنَ يَدَيْهِ بِإِذْنِ رَبِّهِ", meaning: "And among the jinn were those who worked before him by permission of his Lord", explanation: "Jinn served Sulayman by Allah's permission", verseRef: "34:12" },
        { term: "وَمَن يَزِغْ مِنْهُمْ عَنْ أَمْرِنَا نُذِقْهُ مِنْ عَذَابِ السَّعِيرِ", meaning: "Whoever deviates among them from Our command - We will make him taste the punishment of the Blaze", explanation: "Disobedient jinn face severe punishment", verseRef: "34:12" }
      ]
    },

    jinnWorks: {
      name: "Works of the Jinn",
      nameArabic: "أعمال الجن",
      color: "#8B5CF6",
      icon: "Zap",
      concepts: [
        { term: "يَعْمَلُونَ لَهُ مَا يَشَاءُ مِن مَّحَارِيبَ وَتَمَاثِيلَ", meaning: "They made for him what he willed of elevated chambers and statues", explanation: "Jinn constructed palaces and sculptures", verseRef: "34:13" },
        { term: "وَجِفَانٍ كَالْجَوَابِ", meaning: "And bowls like reservoirs", explanation: "Massive basins like pools", verseRef: "34:13" },
        { term: "وَقُدُورٍ رَّاسِيَاتٍ", meaning: "And firmly set cooking pots", explanation: "Huge immovable cauldrons", verseRef: "34:13" },
        { term: "اعْمَلُوا آلَ دَاوُودَ شُكْرًا", meaning: "Work, O family of Dawud, in gratitude", explanation: "Command to work as expression of gratitude", verseRef: "34:13" },
        { term: "وَقَلِيلٌ مِّنْ عِبَادِيَ الشَّكُورُ", meaning: "And few of My servants are grateful", explanation: "True gratitude is rare among servants", verseRef: "34:13" }
      ]
    },

    sulaymanDeath: {
      name: "Death of Sulayman",
      nameArabic: "موت سليمان",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "فَلَمَّا قَضَيْنَا عَلَيْهِ الْمَوْتَ", meaning: "When We decreed for him death", explanation: "Allah decreed Sulayman's death", verseRef: "34:14" },
        { term: "مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ", meaning: "Nothing indicated his death except a creature of earth eating his staff", explanation: "Only the termite eating his staff revealed his death", verseRef: "34:14" },
        { term: "فَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ", meaning: "When he fell, the jinn clearly realized", explanation: "His falling revealed the truth to jinn", verseRef: "34:14" },
        { term: "أَن لَّوْ كَانُوا يَعْلَمُونَ الْغَيْبَ مَا لَبِثُوا فِي الْعَذَابِ الْمُهِينِ", meaning: "That if they had known the unseen, they would not have remained in humiliating punishment", explanation: "Jinn proved ignorant of unseen - they don't know the ghayb", verseRef: "34:14" }
      ]
    },

    shebaBlessing: {
      name: "Blessing of Sheba",
      nameArabic: "نعمة سبأ",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "لَقَدْ كَانَ لِسَبَإٍ فِي مَسْكَنِهِمْ آيَةٌ", meaning: "There was for Sheba in their dwelling place a sign", explanation: "Saba (Sheba) had clear signs in their land", verseRef: "34:15" },
        { term: "جَنَّتَانِ عَن يَمِينٍ وَشِمَالٍ", meaning: "Two gardens on the right and left", explanation: "Gardens flanking their valley", verseRef: "34:15" },
        { term: "كُلُوا مِن رِّزْقِ رَبِّكُمْ وَاشْكُرُوا لَهُ", meaning: "Eat from the provision of your Lord and be grateful to Him", explanation: "Command to enjoy blessings with gratitude", verseRef: "34:15" },
        { term: "بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ", meaning: "A good land and a forgiving Lord", explanation: "Two blessings: good land and forgiving Lord", verseRef: "34:15" }
      ]
    },

    shebaIngratitude: {
      name: "Ingratitude of Sheba",
      nameArabic: "كفران سبأ",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَأَعْرَضُوا", meaning: "But they turned away", explanation: "Saba rejected the blessings", verseRef: "34:16" },
        { term: "فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ الْعَرِمِ", meaning: "So We sent upon them the flood of the dam", explanation: "Dam burst - sayl al-arim as punishment", verseRef: "34:16" },
        { term: "وَبَدَّلْنَاهُم بِجَنَّتَيْهِمْ جَنَّتَيْنِ ذَوَاتَيْ أُكُلٍ خَمْطٍ", meaning: "We replaced their two gardens with gardens of bitter fruit", explanation: "Lush gardens replaced with bitter produce", verseRef: "34:16" },
        { term: "وَأَثْلٍ وَشَيْءٍ مِّن سِدْرٍ قَلِيلٍ", meaning: "And tamarisks and a few lote trees", explanation: "Gardens reduced to thorny shrubs", verseRef: "34:16" },
        { term: "ذَٰلِكَ جَزَيْنَاهُم بِمَا كَفَرُوا", meaning: "That We repaid them because they disbelieved", explanation: "Punishment matched their ingratitude", verseRef: "34:17" },
        { term: "وَهَلْ نُجَازِي إِلَّا الْكَفُورَ", meaning: "And do We punish except the ungrateful?", explanation: "Such punishment reserved for the ungrateful", verseRef: "34:17" }
      ]
    },

    blessedJourney: {
      name: "Blessed Journey",
      nameArabic: "الرحلة المباركة",
      color: "#10B981",
      icon: "Compass",
      concepts: [
        { term: "وَجَعَلْنَا بَيْنَهُمْ وَبَيْنَ الْقُرَى الَّتِي بَارَكْنَا فِيهَا قُرًى ظَاهِرَةً", meaning: "We placed between them and the cities We blessed visible cities", explanation: "Towns linked for safe travel", verseRef: "34:18" },
        { term: "وَقَدَّرْنَا فِيهَا السَّيْرَ", meaning: "And We determined therein the journey", explanation: "Travel distances were measured", verseRef: "34:18" },
        { term: "سِيرُوا فِيهَا لَيَالِيَ وَأَيَّامًا آمِنِينَ", meaning: "Travel through them by night or day in safety", explanation: "Guaranteed safe travel day and night", verseRef: "34:18" }
      ]
    },

    desireForHardship: {
      name: "Desire for Hardship",
      nameArabic: "طلب المشقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَقَالُوا رَبَّنَا بَاعِدْ بَيْنَ أَسْفَارِنَا", meaning: "They said: Our Lord, lengthen the distance between our journeys", explanation: "Ungratefully asked for harder travel", verseRef: "34:19" },
        { term: "وَظَلَمُوا أَنفُسَهُمْ", meaning: "And they wronged themselves", explanation: "Self-harm through ingratitude", verseRef: "34:19" },
        { term: "فَجَعَلْنَاهُمْ أَحَادِيثَ", meaning: "So We made them tales", explanation: "Became mere stories for others", verseRef: "34:19" },
        { term: "وَمَزَّقْنَاهُمْ كُلَّ مُمَزَّقٍ", meaning: "And We dispersed them in complete dispersion", explanation: "Totally scattered as a people", verseRef: "34:19" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ", meaning: "Indeed in that are signs for every patient, grateful person", explanation: "Lesson for those with patience and gratitude", verseRef: "34:19" }
      ]
    },

    iblisInfluence: {
      name: "Influence of Iblis",
      nameArabic: "تأثير إبليس",
      color: "#EF4444",
      icon: "Zap",
      concepts: [
        { term: "وَلَقَدْ صَدَّقَ عَلَيْهِمْ إِبْلِيسُ ظَنَّهُ", meaning: "And Iblis confirmed his assumption about them", explanation: "Iblis's suspicion about humans proved correct", verseRef: "34:20" },
        { term: "فَاتَّبَعُوهُ إِلَّا فَرِيقًا مِّنَ الْمُؤْمِنِينَ", meaning: "So they followed him except a party of believers", explanation: "Most followed Satan, few resisted", verseRef: "34:20" },
        { term: "وَمَا كَانَ لَهُ عَلَيْهِم مِّن سُلْطَانٍ", meaning: "He had over them no authority", explanation: "Satan has no power to force obedience", verseRef: "34:21" },
        { term: "إِلَّا لِنَعْلَمَ مَن يُؤْمِنُ بِالْآخِرَةِ مِمَّنْ هُوَ مِنْهَا فِي شَكٍّ", meaning: "Except to distinguish who believes in Hereafter from who is in doubt", explanation: "Test to reveal true believers", verseRef: "34:21" },
        { term: "وَرَبُّكَ عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ", meaning: "And your Lord is Guardian over all things", explanation: "Allah preserves and records everything", verseRef: "34:21" }
      ]
    },

    falseIntercessors: {
      name: "False Intercessors",
      nameArabic: "الشفعاء الباطلون",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم مِّن دُونِ اللَّهِ", meaning: "Say: Invoke those you claim besides Allah", explanation: "Challenge to call upon false gods", verseRef: "34:22" },
        { term: "لَا يَمْلِكُونَ مِثْقَالَ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ", meaning: "They do not possess an atom's weight in heavens or earth", explanation: "False gods own nothing", verseRef: "34:22" },
        { term: "وَمَا لَهُمْ فِيهِمَا مِن شِرْكٍ وَمَا لَهُ مِنْهُم مِّن ظَهِيرٍ", meaning: "They have no share in them, nor has He from them any helper", explanation: "No partnership, no assistance from them", verseRef: "34:22" },
        { term: "وَلَا تَنفَعُ الشَّفَاعَةُ عِندَهُ إِلَّا لِمَنْ أَذِنَ لَهُ", meaning: "Intercession does not benefit with Him except for whom He permits", explanation: "Intercession only by Allah's permission", verseRef: "34:23" }
      ]
    },

    providerQuestion: {
      name: "Who is the Provider?",
      nameArabic: "من الرزاق؟",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "قُلْ مَن يَرْزُقُكُم مِّنَ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Say: Who provides for you from heavens and earth?", explanation: "Question about the true Provider", verseRef: "34:24" },
        { term: "قُلِ اللَّهُ", meaning: "Say: Allah", explanation: "Clear answer - Allah alone provides", verseRef: "34:24" },
        { term: "وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَىٰ هُدًى أَوْ فِي ضَلَالٍ مُّبِينٍ", meaning: "Indeed, we or you are either upon guidance or in clear error", explanation: "One group is right, one is wrong", verseRef: "34:24" },
        { term: "قُل لَّا تُسْأَلُونَ عَمَّا أَجْرَمْنَا وَلَا نُسْأَلُ عَمَّا تَعْمَلُونَ", meaning: "Say: You will not be asked about our sins, nor will we be asked about what you do", explanation: "Each is responsible for own deeds", verseRef: "34:25" }
      ]
    },

    dayOfGathering: {
      name: "Day of Gathering",
      nameArabic: "يوم الجمع",
      color: "#F59E0B",
      icon: "Sun",
      concepts: [
        { term: "قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا", meaning: "Say: Our Lord will bring us together", explanation: "Allah will gather all for judgment", verseRef: "34:26" },
        { term: "ثُمَّ يَفْتَحُ بَيْنَنَا بِالْحَقِّ", meaning: "Then He will judge between us in truth", explanation: "Final judgment will be just", verseRef: "34:26" },
        { term: "وَهُوَ الْفَتَّاحُ الْعَلِيمُ", meaning: "He is the Judge, the All-Knowing", explanation: "Allah opens judgment with complete knowledge", verseRef: "34:26" }
      ]
    },

    partnerChallenge: {
      name: "Challenge About Partners",
      nameArabic: "تحدي الشركاء",
      color: "#3B82F6",
      icon: "Shield",
      concepts: [
        { term: "قُلْ أَرُونِيَ الَّذِينَ أَلْحَقْتُم بِهِ شُرَكَاءَ", meaning: "Say: Show me those you have attached to Him as partners", explanation: "Demand to produce the supposed partners", verseRef: "34:27" },
        { term: "كَلَّا بَلْ هُوَ اللَّهُ الْعَزِيزُ الْحَكِيمُ", meaning: "No! But He is Allah, the Mighty, the Wise", explanation: "Rejection - Allah alone is worthy", verseRef: "34:27" }
      ]
    },

    prophetUniversalMission: {
      name: "Prophet's Universal Mission",
      nameArabic: "رسالة النبي العالمية",
      color: "#F59E0B",
      icon: "Globe",
      concepts: [
        { term: "وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِّلنَّاسِ", meaning: "We have not sent you except comprehensively to all mankind", explanation: "Prophet's mission is universal", verseRef: "34:28" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: "As a bringer of good tidings and a warner", explanation: "Dual role: good news and warning", verseRef: "34:28" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: "But most of the people do not know", explanation: "Majority remain ignorant", verseRef: "34:28" }
      ]
    },

    promiseImpatience: {
      name: "Impatience for Promise",
      nameArabic: "الاستعجال بالوعد",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ", meaning: "They say: When is this promise, if you are truthful?", explanation: "Mockers demand to know the date", verseRef: "34:29" },
        { term: "قُل لَّكُم مِّيعَادُ يَوْمٍ لَّا تَسْتَأْخِرُونَ عَنْهُ سَاعَةً وَلَا تَسْتَقْدِمُونَ", meaning: "Say: For you is an appointment of a Day you cannot delay by an hour nor advance", explanation: "Fixed time - cannot be changed", verseRef: "34:30" }
      ]
    },

    quranRejection: {
      name: "Rejection of Quran",
      nameArabic: "رفض القرآن",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لَن نُّؤْمِنَ بِهَٰذَا الْقُرْآنِ وَلَا بِالَّذِي بَيْنَ يَدَيْهِ", meaning: "Those who disbelieve say: We will never believe in this Quran or what was before it", explanation: "Complete rejection of all revelation", verseRef: "34:31" },
        { term: "وَلَوْ تَرَىٰ إِذِ الظَّالِمُونَ مَوْقُوفُونَ عِندَ رَبِّهِمْ", meaning: "If you could see when the wrongdoers are made to stand before their Lord", explanation: "Scene of Day of Judgment", verseRef: "34:31" },
        { term: "يَرْجِعُ بَعْضُهُمْ إِلَىٰ بَعْضٍ الْقَوْلَ", meaning: "Returning word to one another", explanation: "Mutual accusations among disbelievers", verseRef: "34:31" }
      ]
    },

    mutualBlame: {
      name: "Mutual Blame",
      nameArabic: "التلاوم",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "يَقُولُ الَّذِينَ اسْتُضْعِفُوا لِلَّذِينَ اسْتَكْبَرُوا لَوْلَا أَنتُمْ لَكُنَّا مُؤْمِنِينَ", meaning: "Those oppressed will say to the arrogant: If not for you, we would have been believers", explanation: "Followers blame leaders", verseRef: "34:31" },
        { term: "قَالَ الَّذِينَ اسْتَكْبَرُوا لِلَّذِينَ اسْتُضْعِفُوا أَنَحْنُ صَدَدْنَاكُمْ عَنِ الْهُدَىٰ", meaning: "The arrogant say to the oppressed: Did we avert you from guidance?", explanation: "Leaders deflect blame", verseRef: "34:32" },
        { term: "بَعْدَ إِذْ جَاءَكُم بَلْ كُنتُم مُّجْرِمِينَ", meaning: "After it had come to you? Rather, you were criminals", explanation: "Each chose their own crime", verseRef: "34:32" },
        { term: "وَقَالَ الَّذِينَ اسْتُضْعِفُوا لِلَّذِينَ اسْتَكْبَرُوا بَلْ مَكْرُ اللَّيْلِ وَالنَّهَارِ", meaning: "The oppressed say to the arrogant: Rather, your conspiracy by night and day", explanation: "Followers accuse leaders of constant plotting", verseRef: "34:33" },
        { term: "إِذْ تَأْمُرُونَنَا أَن نَّكْفُرَ بِاللَّهِ وَنَجْعَلَ لَهُ أَندَادًا", meaning: "When you commanded us to disbelieve in Allah and set up equals to Him", explanation: "Leaders ordered polytheism", verseRef: "34:33" },
        { term: "وَأَسَرُّوا النَّدَامَةَ لَمَّا رَأَوُا الْعَذَابَ", meaning: "They will conceal regret when they see the punishment", explanation: "Hidden regret upon seeing doom", verseRef: "34:33" },
        { term: "وَجَعَلْنَا الْأَغْلَالَ فِي أَعْنَاقِ الَّذِينَ كَفَرُوا", meaning: "We will put shackles on the necks of those who disbelieved", explanation: "Punishment includes chains", verseRef: "34:33" }
      ]
    },

    affluenceAndArrogance: {
      name: "Affluence and Arrogance",
      color: "#EF4444",
      icon: "Crown",
      nameArabic: "الثراء والكبر",
      concepts: [
        { term: "وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِّن نَّذِيرٍ إِلَّا قَالَ مُتْرَفُوهَا إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", meaning: "We did not send to a city any warner except its affluent said: We disbelieve in what you were sent with", explanation: "Wealthy always first to reject", verseRef: "34:34" },
        { term: "وَقَالُوا نَحْنُ أَكْثَرُ أَمْوَالًا وَأَوْلَادًا وَمَا نَحْنُ بِمُعَذَّبِينَ", meaning: "They said: We have more wealth and children, and we will not be punished", explanation: "Wealth mistaken for divine favor", verseRef: "34:35" }
      ]
    },

    provisionAndConstriction: {
      name: "Provision and Constriction",
      nameArabic: "الرزق والتقتير",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "قُلْ إِنَّ رَبِّي يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ", meaning: "Say: Indeed, my Lord extends provision for whom He wills and restricts", explanation: "Allah controls provision freely", verseRef: "34:36" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: "But most people do not know", explanation: "People misunderstand wealth as blessing", verseRef: "34:36" },
        { term: "وَمَا أَمْوَالُكُمْ وَلَا أَوْلَادُكُم بِالَّتِي تُقَرِّبُكُمْ عِندَنَا زُلْفَىٰ", meaning: "It is not your wealth or children that bring you near to Us", explanation: "Wealth and children don't guarantee closeness to Allah", verseRef: "34:37" },
        { term: "إِلَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا", meaning: "Except one who believes and does righteousness", explanation: "Faith and deeds bring closeness", verseRef: "34:37" },
        { term: "فَأُولَٰئِكَ لَهُمْ جَزَاءُ الضِّعْفِ بِمَا عَمِلُوا", meaning: "Those will have the double reward for what they did", explanation: "Righteous receive multiplied reward", verseRef: "34:37" },
        { term: "وَهُمْ فِي الْغُرُفَاتِ آمِنُونَ", meaning: "And they will be safe in lofty chambers", explanation: "Security in elevated Paradise chambers", verseRef: "34:37" }
      ]
    },

    striversAgainstSigns: {
      name: "Strivers Against Signs",
      nameArabic: "الساعون في الآيات",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ يَسْعَوْنَ فِي آيَاتِنَا مُعَاجِزِينَ", meaning: "Those who strive against Our verses to cause failure", explanation: "Active opposition to divine signs", verseRef: "34:38" },
        { term: "أُولَٰئِكَ فِي الْعَذَابِ مُحْضَرُونَ", meaning: "Those will be brought into the punishment", explanation: "Guaranteed presence in punishment", verseRef: "34:38" }
      ]
    },

    spendingAndReplacement: {
      name: "Spending and Replacement",
      nameArabic: "الإنفاق والخلف",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "قُلْ إِنَّ رَبِّي يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ لَهُ", meaning: "Say: My Lord extends provision for whom He wills of His servants and restricts for him", explanation: "Provision varies by divine will", verseRef: "34:39" },
        { term: "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ", meaning: "Whatever you spend, He will replace it", explanation: "Allah replaces what is spent", verseRef: "34:39" },
        { term: "وَهُوَ خَيْرُ الرَّازِقِينَ", meaning: "And He is the best of providers", explanation: "Allah is the supreme Provider", verseRef: "34:39" }
      ]
    },

    angelsDisowning: {
      name: "Angels Disowning",
      nameArabic: "تبرؤ الملائكة",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَيَوْمَ يَحْشُرُهُمْ جَمِيعًا ثُمَّ يَقُولُ لِلْمَلَائِكَةِ أَهَٰؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ", meaning: "On the Day He gathers them all, He will say to angels: Did these worship you?", explanation: "Allah questions angels about worship", verseRef: "34:40" },
        { term: "قَالُوا سُبْحَانَكَ أَنتَ وَلِيُّنَا مِن دُونِهِم", meaning: "They will say: Exalted are You! You are our Protector, not them", explanation: "Angels declare loyalty only to Allah", verseRef: "34:41" },
        { term: "بَلْ كَانُوا يَعْبُدُونَ الْجِنَّ", meaning: "Rather, they used to worship the jinn", explanation: "True object of worship was jinn", verseRef: "34:41" },
        { term: "أَكْثَرُهُم بِهِم مُّؤْمِنُونَ", meaning: "Most of them were believers in them", explanation: "Most followed jinn, not angels", verseRef: "34:41" }
      ]
    },

    noPowerExceptAllah: {
      name: "No Power Except Allah",
      nameArabic: "لا قوة إلا بالله",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَالْيَوْمَ لَا يَمْلِكُ بَعْضُكُمْ لِبَعْضٍ نَّفْعًا وَلَا ضَرًّا", meaning: "Today none of you holds benefit or harm for another", explanation: "No mutual help on Judgment Day", verseRef: "34:42" },
        { term: "وَنَقُولُ لِلَّذِينَ ظَلَمُوا ذُوقُوا عَذَابَ النَّارِ الَّتِي كُنتُم بِهَا تُكَذِّبُونَ", meaning: "We will say to those who wronged: Taste the punishment of Fire you used to deny", explanation: "Commanded to taste denied punishment", verseRef: "34:42" }
      ]
    },

    clearSignsRejected: {
      name: "Clear Signs Rejected",
      nameArabic: "رفض الآيات البينات",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا بَيِّنَاتٍ قَالُوا مَا هَٰذَا إِلَّا رَجُلٌ يُرِيدُ أَن يَصُدَّكُمْ عَمَّا كَانَ يَعْبُدُ آبَاؤُكُمْ", meaning: "When Our clear verses are recited to them, they say: This is only a man who wants to avert you from what your fathers worshipped", explanation: "Accusing Prophet of disrupting tradition", verseRef: "34:43" },
        { term: "وَقَالُوا مَا هَٰذَا إِلَّا إِفْكٌ مُّفْتَرًى", meaning: "They say: This is nothing but invented falsehood", explanation: "Calling Quran fabricated lies", verseRef: "34:43" },
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لِلْحَقِّ لَمَّا جَاءَهُمْ إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ", meaning: "Those who disbelieve say of the truth when it came to them: This is only obvious magic", explanation: "Truth dismissed as magic", verseRef: "34:43" }
      ]
    },

    noScriptureBeforeQuran: {
      name: "No Scripture Before Quran",
      nameArabic: "لا كتاب قبل القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَمَا آتَيْنَاهُم مِّن كُتُبٍ يَدْرُسُونَهَا", meaning: "We had not given them books to study", explanation: "Arabs had no previous scripture", verseRef: "34:44" },
        { term: "وَمَا أَرْسَلْنَا إِلَيْهِمْ قَبْلَكَ مِن نَّذِيرٍ", meaning: "Nor sent to them before you any warner", explanation: "No prophet before Muhammad to Arabs", verseRef: "34:44" },
        { term: "وَكَذَّبَ الَّذِينَ مِن قَبْلِهِمْ", meaning: "Those before them denied", explanation: "Previous nations also denied", verseRef: "34:45" },
        { term: "وَمَا بَلَغُوا مِعْشَارَ مَا آتَيْنَاهُمْ", meaning: "And they did not attain a tenth of what We gave them", explanation: "Previous nations had more yet still denied", verseRef: "34:45" },
        { term: "فَكَذَّبُوا رُسُلِي فَكَيْفَ كَانَ نَكِيرِ", meaning: "But they denied My messengers, so how was My reproach?", explanation: "Reminder of punishment for denial", verseRef: "34:45" }
      ]
    },

    prophetAdvice: {
      name: "Prophet's Advice",
      nameArabic: "نصيحة النبي",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "قُلْ إِنَّمَا أَعِظُكُم بِوَاحِدَةٍ", meaning: "Say: I advise you with one thing", explanation: "Single piece of counsel", verseRef: "34:46" },
        { term: "أَن تَقُومُوا لِلَّهِ مَثْنَىٰ وَفُرَادَىٰ ثُمَّ تَتَفَكَّرُوا", meaning: "That you stand for Allah in pairs or alone, then reflect", explanation: "Sincere reflection alone or in pairs", verseRef: "34:46" },
        { term: "مَا بِصَاحِبِكُم مِّن جِنَّةٍ", meaning: "There is no madness in your companion", explanation: "Prophet is not insane", verseRef: "34:46" },
        { term: "إِنْ هُوَ إِلَّا نَذِيرٌ لَّكُم بَيْنَ يَدَيْ عَذَابٍ شَدِيدٍ", meaning: "He is only a warner to you before a severe punishment", explanation: "Warning before inevitable punishment", verseRef: "34:46" }
      ]
    },

    prophetSeekingnNoReward: {
      name: "Prophet Seeks No Reward",
      nameArabic: "النبي لا يطلب أجراً",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "قُلْ مَا سَأَلْتُكُم مِّنْ أَجْرٍ فَهُوَ لَكُمْ", meaning: "Say: Whatever reward I asked of you - it is yours", explanation: "Prophet seeks no worldly reward", verseRef: "34:47" },
        { term: "إِنْ أَجْرِيَ إِلَّا عَلَى اللَّهِ", meaning: "My reward is only from Allah", explanation: "Reward comes from Allah alone", verseRef: "34:47" },
        { term: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ", meaning: "And He is Witness over all things", explanation: "Allah witnesses Prophet's sincerity", verseRef: "34:47" }
      ]
    },

    truthHasCome: {
      name: "Truth Has Come",
      nameArabic: "جاء الحق",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "قُلْ إِنَّ رَبِّي يَقْذِفُ بِالْحَقِّ", meaning: "Say: Indeed, my Lord hurls the truth", explanation: "Allah casts truth powerfully", verseRef: "34:48" },
        { term: "عَلَّامُ الْغُيُوبِ", meaning: "Knower of the unseen", explanation: "Allah knows all hidden things", verseRef: "34:48" },
        { term: "قُلْ جَاءَ الْحَقُّ", meaning: "Say: The truth has come", explanation: "Declaration of truth's arrival", verseRef: "34:49" },
        { term: "وَمَا يُبْدِئُ الْبَاطِلُ وَمَا يُعِيدُ", meaning: "Falsehood cannot originate or restore", explanation: "Falsehood has no creative power", verseRef: "34:49" }
      ]
    },

    prophetGuidance: {
      name: "Prophet's Guidance",
      nameArabic: "هداية النبي",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "قُلْ إِن ضَلَلْتُ فَإِنَّمَا أَضِلُّ عَلَىٰ نَفْسِي", meaning: "Say: If I err, I err only against myself", explanation: "Misguidance harms only oneself", verseRef: "34:50" },
        { term: "وَإِنِ اهْتَدَيْتُ فَبِمَا يُوحِي إِلَيَّ رَبِّي", meaning: "And if I am guided, it is by what my Lord reveals to me", explanation: "Guidance comes through revelation", verseRef: "34:50" },
        { term: "إِنَّهُ سَمِيعٌ قَرِيبٌ", meaning: "Indeed, He is Hearing and near", explanation: "Allah hears all and is close", verseRef: "34:50" }
      ]
    },

    terrorOnJudgmentDay: {
      name: "Terror on Judgment Day",
      nameArabic: "الفزع يوم القيامة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلَوْ تَرَىٰ إِذْ فَزِعُوا فَلَا فَوْتَ", meaning: "If you could see when they are terrified but there is no escape", explanation: "No escape from terror on that Day", verseRef: "34:51" },
        { term: "وَأُخِذُوا مِن مَّكَانٍ قَرِيبٍ", meaning: "And they were seized from a nearby place", explanation: "Caught from close proximity", verseRef: "34:51" },
        { term: "وَقَالُوا آمَنَّا بِهِ", meaning: "And they will say: We believe in it", explanation: "Too-late declaration of faith", verseRef: "34:52" },
        { term: "وَأَنَّىٰ لَهُمُ التَّنَاوُشُ مِن مَّكَانٍ بَعِيدٍ", meaning: "But how can they reach faith from a distant place?", explanation: "Faith from afar impossible at that point", verseRef: "34:52" }
      ]
    },

    previousDisbelief: {
      name: "Previous Disbelief",
      nameArabic: "الكفر السابق",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَدْ كَفَرُوا بِهِ مِن قَبْلُ", meaning: "They disbelieved in it before", explanation: "Their prior rejection recorded", verseRef: "34:53" },
        { term: "وَيَقْذِفُونَ بِالْغَيْبِ مِن مَّكَانٍ بَعِيدٍ", meaning: "They hurl accusations about unseen from far away", explanation: "Random accusations without knowledge", verseRef: "34:53" },
        { term: "وَحِيلَ بَيْنَهُمْ وَبَيْنَ مَا يَشْتَهُونَ", meaning: "A barrier will be placed between them and what they desire", explanation: "Denied their desires permanently", verseRef: "34:54" },
        { term: "كَمَا فُعِلَ بِأَشْيَاعِهِم مِّن قَبْلُ", meaning: "As was done with their kind before", explanation: "Same fate as previous deniers", verseRef: "34:54" },
        { term: "إِنَّهُمْ كَانُوا فِي شَكٍّ مُّرِيبٍ", meaning: "Indeed, they were in disquieting doubt", explanation: "Doubt that created restlessness", verseRef: "34:54" }
      ]
    }
  },

  relationships: [
    { from: "الحمد لله", to: "العلم الإلهي", type: "foundation", description: "Praise based on Allah's comprehensive knowledge" },
    { from: "داود", to: "سليمان", type: "succession", description: "Father and son both blessed with kingdoms" },
    { from: "نعم سبأ", to: "كفران سبأ", type: "contrast", description: "Blessings met with ingratitude" },
    { from: "جنتان", to: "سيل العرم", type: "consequence", description: "Gardens destroyed by dam flood as punishment" },
    { from: "الشكر", to: "الكفور", type: "contrast", description: "Grateful few versus ungrateful many" },
    { from: "موت سليمان", to: "علم الغيب", type: "proof", description: "Jinn's ignorance proves they don't know unseen" },
    { from: "باعد بين أسفارنا", to: "أحاديث", type: "consequence", description: "Asking for hardship led to becoming mere tales" },
    { from: "إبليس ظنّه", to: "اتبعوه", type: "confirmation", description: "Satan's assumption about human weakness confirmed" },
    { from: "الشركاء", to: "لا يملكون ذرة", type: "refutation", description: "Partners own nothing - no power" },
    { from: "أموال وأولاد", to: "لا تقربكم زلفى", type: "correction", description: "Wealth and children don't bring closeness to Allah" },
    { from: "الملائكة", to: "تبرؤ", type: "disowning", description: "Angels will disown those who claimed to worship them" },
    { from: "جاء الحق", to: "الباطل", type: "negation", description: "Truth's arrival means falsehood has no power" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening Praise and Divine Knowledge", verses: "34:1-6", description: "Praise to Allah, His comprehensive knowledge, Hour affirmed" },
      { stage: 2, theme: "Mockery of Resurrection", verses: "34:7-9", description: "Disbelievers mock resurrection, signs surround them" },
      { stage: 3, theme: "Dawud's Blessings", verses: "34:10-11", description: "Mountains praise, iron softened, armor crafted" },
      { stage: 4, theme: "Sulayman's Kingdom", verses: "34:12-14", description: "Wind, copper, jinn works, death reveals jinn's ignorance" },
      { stage: 5, theme: "Sheba's Blessing and Ingratitude", verses: "34:15-17", description: "Two gardens, dam flood punishment for ingratitude" },
      { stage: 6, theme: "Safe Travel Rejected", verses: "34:18-19", description: "Blessed towns, asked for hardship, became scattered tales" },
      { stage: 7, theme: "Satan's Success", verses: "34:20-21", description: "Iblis's assumption confirmed, most followed him" },
      { stage: 8, theme: "False Gods Refuted", verses: "34:22-27", description: "Partners own nothing, intercession by permission only" },
      { stage: 9, theme: "Universal Message", verses: "34:28-30", description: "Prophet sent to all mankind, appointed time fixed" },
      { stage: 10, theme: "Mutual Blame", verses: "34:31-33", description: "Leaders and followers blame each other" },
      { stage: 11, theme: "Wealth Misconception", verses: "34:34-39", description: "Affluent reject, provision is from Allah alone" },
      { stage: 12, theme: "Angels Disown", verses: "34:40-42", description: "Angels deny being worshipped, jinn were worshipped" },
      { stage: 13, theme: "Rejecting Clear Signs", verses: "34:43-45", description: "Quran called magic and lies, despite no prior scripture" },
      { stage: 14, theme: "Prophet's Sincere Call", verses: "34:46-50", description: "Advice to reflect, Prophet seeks no reward, truth declared" },
      { stage: 15, theme: "Terror and Too-Late Faith", verses: "34:51-54", description: "No escape, late belief rejected, doubt leads to barrier" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Gratitude preserves blessings", how: "Like Sheba, ingratitude leads to loss - express thanks daily", verse: "34:15-17" },
      { principle: "Work righteousness with blessings", how: "Dawud and Sulayman worked despite gifts - use blessings productively", verse: "34:11, 13" },
      { principle: "Don't ask for hardship", how: "Sheba asked for longer journeys - appreciate ease", verse: "34:19" },
      { principle: "Jinn don't know unseen", how: "They couldn't tell Sulayman died - don't seek knowledge from them", verse: "34:14" },
      { principle: "Wealth doesn't indicate favor", how: "Rich often reject truth first - don't equate wealth with guidance", verse: "34:34-35" },
      { principle: "Reflect sincerely", how: "Stand alone or in pairs and think - sincere reflection leads to truth", verse: "34:46" },
      { principle: "Spending is replaced", how: "Whatever spent, Allah replaces - be generous", verse: "34:39" },
      { principle: "Satan has no power", how: "He only suggests - resist and you're protected", verse: "34:21" },
      { principle: "False leaders won't help", how: "Mutual blame on Judgment Day - choose righteous companions", verse: "34:31-33" },
      { principle: "Too-late faith rejected", how: "Believe now - faith at death or judgment is not accepted", verse: "34:52" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Gratitude and its Consequences",
    insight: "Surah Saba presents a masterclass on gratitude versus ingratitude through three powerful narratives: Dawud who was commanded 'Work in gratitude' (34:13), Sulayman whose death exposed jinn's lack of unseen knowledge, and the people of Sheba whose 'two gardens' became 'bitter fruit' after they rejected blessings. The surah's central message - 'few of My servants are grateful' (34:13) - explains why wealthy nations fall while patient, grateful individuals succeed. The people of Sheba committed a bizarre form of ingratitude: asking for longer, harder journeys when Allah had blessed them with safe, connected routes. This highlights how humans sometimes reject ease and seek difficulty as a form of arrogance. The mutual blame scene (34:31-33) between leaders and followers serves as a warning: on Judgment Day, no one will accept responsibility for leading or following into disbelief. The surah ends with the powerful image of those trying to reach faith from 'a distant place' (34:52) - too late, after a lifetime of rejection."
  },

  historicalContext: {
    note: "This Makkan surah addresses the Quraysh's specific objections: that resurrection is impossible (34:7), that Muhammad is either lying or mad (34:8), and that their wealth proves divine favor (34:35). The story of Sheba (Saba) was known to Arabs as the ancient Yemeni civilization whose dam collapse around 6th century CE caused their dispersion - a living memory for the audience. The mention of Dawud's armor-making (34:10-11) may relate to Arabia's awareness of sophisticated metalwork from the north. The challenge to invoke false gods (34:22) directly confronted Quraysh's idols with the logical proof that they 'own not even an atom's weight.' The surah's message of Allah extending and restricting provision (34:36, 39) addressed the Quraysh's commercial mindset, reframing wealth as a test rather than a sign of blessing."
  },

  linguisticFeatures: {
    features: [
      { feature: "الحمد لله", example: "Opening praise", effect: "One of four surahs opening with Alhamdulillah (1, 6, 18, 34, 35)" },
      { feature: "سيل العرم", example: "Flood of the dam", effect: "Specific historical reference using 'arim (dam/embankment)" },
      { feature: "أوِّبي", example: "Repeat/return praises", effect: "Rare verb form commanding mountains to echo Dawud's praise" },
      { feature: "مُمَزَّق", example: "Torn apart", effect: "Intensive form - completely fragmented" },
      { feature: "الفتّاح", example: "The Judge/Opener", effect: "Intensive form - the One who opens judgment definitively" },
      { feature: "كافّة", example: "Comprehensively", effect: "Emphasizes universality of Prophet's mission" },
      { feature: "التناوش", example: "Reaching/grasping", effect: "Rare word - trying to grasp faith from impossible distance" },
      { feature: "مريب", example: "Disquieting", effect: "Doubt that causes restlessness and anxiety" }
    ]
  },

  prophetsMentioned: {
    dawud: {
      name: "Dawud (David)",
      nameArabic: "داود",
      verseRange: "34:10-11",
      blessings: [
        "Divine bounty (fadl)",
        "Mountains echoed his praise",
        "Birds joined his glorification",
        "Iron made pliable/soft",
        "Taught armor crafting"
      ]
    },
    sulayman: {
      name: "Sulayman (Solomon)",
      nameArabic: "سليمان",
      verseRange: "34:12-14",
      blessings: [
        "Wind traveled a month's distance morning and evening",
        "Spring of molten copper",
        "Jinn served by Allah's permission",
        "Palaces, statues, basins, cauldrons built"
      ],
      death: "Died leaning on staff, jinn unaware until termite ate staff - proving they don't know unseen"
    }
  },

  shebaStory: {
    name: "People of Sheba (Saba)",
    nameArabic: "سبأ",
    location: "Yemen (Ma'rib)",
    blessings: [
      "Two gardens on right and left",
      "Good land (baldatun tayyibah)",
      "Connected safe travel routes",
      "Visible towns for journey stages"
    ],
    sins: [
      "Turned away from gratitude",
      "Asked for longer distances (harder journeys)"
    ],
    punishment: [
      "Flood of the dam (sayl al-arim)",
      "Gardens replaced with bitter fruit",
      "Tamarisks and few lote trees",
      "Complete dispersion as a people",
      "Became mere tales (ahadith)"
    ],
    lesson: "Signs for every patient, grateful person (34:19)"
  },

  keyFigures: {
    iblis: {
      name: "Iblis (Satan)",
      nameArabic: "إبليس",
      verseRange: "34:20-21",
      role: "His assumption about human weakness was confirmed - most followed him except believers",
      keyPoint: "Has no authority/power (sultan) over anyone - only suggests, cannot force"
    },
    angels: {
      name: "The Angels",
      nameArabic: "الملائكة",
      verseRange: "34:40-41",
      role: "Will disown those who claimed to worship them, declaring they only worship Allah",
      keyPoint: "Reveal that people actually worshipped jinn, not angels"
    },
    affluent: {
      name: "The Affluent (Mutrafun)",
      nameArabic: "المترفون",
      verseRange: "34:34-35",
      role: "In every city, the wealthy were first to reject the message",
      keyPoint: "Mistakenly believed wealth and children meant exemption from punishment"
    }
  },

  keyVerses: {
    verses: [
      { verse: "34:13", theme: "Gratitude", text: "Work, O family of Dawud, in gratitude. And few of My servants are grateful" },
      { verse: "34:14", theme: "Jinn's Ignorance", text: "If they had known the unseen, they would not have remained in humiliating punishment" },
      { verse: "34:15", theme: "Sheba's Blessing", text: "A good land and a forgiving Lord" },
      { verse: "34:19", theme: "Patience and Gratitude", text: "Signs for every patient, grateful person" },
      { verse: "34:21", theme: "Satan's Limit", text: "He had over them no authority except to distinguish believers from doubters" },
      { verse: "34:28", theme: "Universal Message", text: "We have not sent you except comprehensively to all mankind" },
      { verse: "34:37", theme: "True Closeness", text: "It is not your wealth or children that bring you near to Us" },
      { verse: "34:39", theme: "Replacement", text: "Whatever you spend, He will replace it" },
      { verse: "34:46", theme: "Sincere Reflection", text: "Stand for Allah in pairs or alone, then reflect" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "34:10", topic: "Iron softening", note: "Iron requires high temperatures to become pliable - miracle granted to Dawud" },
      { verse: "34:12", topic: "Molten copper", note: "Copper melting point is 1,085°C - flowing spring implies extraordinary metallurgical capability" },
      { verse: "34:14", topic: "Wood-eating insects", note: "Termites consume wood slowly - Sulayman remained standing until staff weakened enough to collapse" },
      { verse: "34:16", topic: "Dam collapse", note: "Historical Ma'rib Dam collapse documented - massive irrigation system failure" },
      { verse: "34:18", topic: "Measured journeys", note: "Connected way-stations (visible towns) for safe travel - ancient trade infrastructure" }
    ]
  }
};

export default ONTOLOGY;
