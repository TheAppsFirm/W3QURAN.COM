/**
 * Surah Al-Anfal (8) - Ontology of Quranic Concepts
 * The Spoils of War
 * Theme: Spoils of war, Battle of Badr, victory conditions, loyalty to Allah
 * Revelation: Madani (Medinan)
 * Ayahs: 75
 */

export const ONTOLOGY = {
  surahId: 8,
  surahName: "Al-Anfal",
  surahNameArabic: "الأنفال",
  revelationType: "Madani",
  totalAyahs: 75,

  categories: {
    spoilsOfWar: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Spoils of War (Anfal)",
      nameArabic: "الأنفال",
      concepts: [
        { term: "يَسْأَلُونَكَ عَنِ الْأَنفَالِ", meaning: "They ask you about the spoils", explanation: "Opening question about war booty - central theme", verseRef: "8:1" },
        { term: "قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ", meaning: "Say: The spoils are for Allah and the Messenger", explanation: "Divine authority over war gains", verseRef: "8:1" },
        { term: "فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ", meaning: "So fear Allah and amend between yourselves", explanation: "Unity over material gains", verseRef: "8:1" },
        { term: "وَاعْلَمُوا أَنَّمَا غَنِمْتُم مِّن شَيْءٍ", meaning: "And know that whatever spoils you take", explanation: "Distribution rules for war gains", verseRef: "8:41" },
        { term: "فَأَنَّ لِلَّهِ خُمُسَهُ", meaning: "Then indeed for Allah is one-fifth", explanation: "The khums (1/5) principle", verseRef: "8:41" }
      ]
    },

    battleOfBadr: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Battle of Badr",
      nameArabic: "غزوة بدر",
      concepts: [
        { term: "يَوْمَ الْفُرْقَانِ", meaning: "Day of Criterion", explanation: "Badr as the decisive day separating truth from falsehood", verseRef: "8:41" },
        { term: "يَوْمَ الْتَقَى الْجَمْعَانِ", meaning: "Day the two armies met", explanation: "The historic confrontation at Badr", verseRef: "8:41" },
        { term: "إِذْ أَنتُم بِالْعُدْوَةِ الدُّنْيَا", meaning: "When you were on the near side", explanation: "Geographic description of battle positions", verseRef: "8:42" },
        { term: "وَهُم بِالْعُدْوَةِ الْقُصْوَىٰ", meaning: "And they were on the farther side", explanation: "Enemy position - further from Medina", verseRef: "8:42" },
        { term: "وَالرَّكْبُ أَسْفَلَ مِنكُمْ", meaning: "And the caravan was below you", explanation: "Quraysh caravan's position", verseRef: "8:42" },
        { term: "لِّيَهْلِكَ مَنْ هَلَكَ عَن بَيِّنَةٍ", meaning: "So that he who perished would perish upon evidence", explanation: "Battle as clear proof of truth", verseRef: "8:42" }
      ]
    },

    divineSupport: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Support in Battle",
      nameArabic: "النصر الإلهي",
      concepts: [
        { term: "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ", meaning: "When you were calling upon your Lord for help", explanation: "Believers' desperate plea before battle", verseRef: "8:9" },
        { term: "أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ", meaning: "I will reinforce you with a thousand angels", explanation: "Angelic army sent as reinforcement", verseRef: "8:9" },
        { term: "مُرْدِفِينَ", meaning: "Following one another", explanation: "Waves of angels in succession", verseRef: "8:9" },
        { term: "إِذْ يُغَشِّيكُمُ النُّعَاسَ أَمَنَةً مِّنْهُ", meaning: "When He covered you with drowsiness as security from Him", explanation: "Miraculous calm before battle", verseRef: "8:11" },
        { term: "وَيُنَزِّلُ عَلَيْكُم مِّنَ السَّمَاءِ مَاءً", meaning: "And sent down upon you water from sky", explanation: "Rain for purification and firmness", verseRef: "8:11" },
        { term: "وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ", meaning: "You did not throw when you threw, but Allah threw", explanation: "Divine action through Prophet's hand", verseRef: "8:17" },
        { term: "فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ", meaning: "You did not kill them, but Allah killed them", explanation: "Victory attributed solely to Allah", verseRef: "8:17" }
      ]
    },

    trueBelievers: {
      color: '#EF4444',
      icon: 'Users',
      name: "Qualities of True Believers",
      nameArabic: "صفات المؤمنين الحقيقيين",
      concepts: [
        { term: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ", meaning: "The believers are only those who, when Allah is mentioned, their hearts tremble", explanation: "Heart's response to Allah's remembrance", verseRef: "8:2" },
        { term: "وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا", meaning: "And when His verses are recited, it increases them in faith", explanation: "Quran strengthens iman", verseRef: "8:2" },
        { term: "وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ", meaning: "And upon their Lord they rely", explanation: "Tawakkul as core trait", verseRef: "8:2" },
        { term: "الَّذِينَ يُقِيمُونَ الصَّلَاةَ", meaning: "Those who establish prayer", explanation: "Regular prayer obligation", verseRef: "8:3" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: "And from what We have provided them, they spend", explanation: "Charitable spending", verseRef: "8:3" },
        { term: "أُولَٰئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا", meaning: "Those are the true believers", explanation: "Definition of genuine faith", verseRef: "8:4" }
      ]
    },

    obedienceToAllah: {
      color: '#10B981',
      icon: 'Book',
      name: "Obedience to Allah and Messenger",
      nameArabic: "طاعة الله والرسول",
      concepts: [
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَرَسُولَهُ", meaning: "O you who believe, obey Allah and His Messenger", explanation: "Command for dual obedience", verseRef: "8:20" },
        { term: "وَلَا تَوَلَّوْا عَنْهُ وَأَنتُمْ تَسْمَعُونَ", meaning: "And do not turn from him while you hear", explanation: "Warning against turning away", verseRef: "8:20" },
        { term: "وَلَا تَكُونُوا كَالَّذِينَ قَالُوا سَمِعْنَا وَهُمْ لَا يَسْمَعُونَ", meaning: "And be not like those who say 'We hear' but they hear not", explanation: "Warning against superficial compliance", verseRef: "8:21" },
        { term: "اسْتَجِيبُوا لِلَّهِ وَلِلرَّسُولِ إِذَا دَعَاكُمْ لِمَا يُحْيِيكُمْ", meaning: "Respond to Allah and Messenger when he calls you to that which gives you life", explanation: "Islam as source of true life", verseRef: "8:24" },
        { term: "وَاعْلَمُوا أَنَّ اللَّهَ يَحُولُ بَيْنَ الْمَرْءِ وَقَلْبِهِ", meaning: "Know that Allah intervenes between a man and his heart", explanation: "Allah's power over hearts", verseRef: "8:24" }
      ]
    },

    steadfastnessInBattle: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Steadfastness in Battle",
      nameArabic: "الثبات في القتال",
      concepts: [
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمُ الَّذِينَ كَفَرُوا زَحْفًا فَلَا تُوَلُّوهُمُ الْأَدْبَارَ", meaning: "O believers, when you meet the disbelievers advancing, do not turn your backs", explanation: "Prohibition of fleeing battle", verseRef: "8:15" },
        { term: "وَمَن يُوَلِّهِمْ يَوْمَئِذٍ دُبُرَهُ", meaning: "And whoever turns his back that day", explanation: "Consequence of desertion", verseRef: "8:16" },
        { term: "فَقَدْ بَاءَ بِغَضَبٍ مِّنَ اللَّهِ", meaning: "Has certainly returned with anger from Allah", explanation: "Divine wrath for cowardice", verseRef: "8:16" },
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمْ فِئَةً فَاثْبُتُوا", meaning: "O believers, when you meet a force, stand firm", explanation: "Command for battlefield steadfastness", verseRef: "8:45" },
        { term: "وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ", meaning: "And remember Allah much that you may succeed", explanation: "Dhikr as key to victory", verseRef: "8:45" },
        { term: "وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا", meaning: "Obey Allah and His Messenger, and do not dispute lest you fail", explanation: "Unity essential for victory", verseRef: "8:46" }
      ]
    },

    warEthics: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Ethics of Warfare",
      nameArabic: "أخلاقيات الحرب",
      concepts: [
        { term: "وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ", meaning: "And prepare against them what you can of power", explanation: "Military preparation as duty", verseRef: "8:60" },
        { term: "وَمِن رِّبَاطِ الْخَيْلِ", meaning: "And steeds of war", explanation: "Cavalry readiness (modern: defense)", verseRef: "8:60" },
        { term: "تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ", meaning: "To deter the enemy of Allah and your enemy", explanation: "Deterrence through strength", verseRef: "8:60" },
        { term: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا", meaning: "And if they incline to peace, then incline to it", explanation: "Peace preferred over war", verseRef: "8:61" },
        { term: "وَتَوَكَّلْ عَلَى اللَّهِ", meaning: "And rely upon Allah", explanation: "Trust Allah in peace negotiations", verseRef: "8:61" },
        { term: "وَإِن يُرِيدُوا أَن يَخْدَعُوكَ فَإِنَّ حَسْبَكَ اللَّهُ", meaning: "If they intend to deceive you, Allah is sufficient for you", explanation: "Protection from enemy treachery", verseRef: "8:62" }
      ]
    },

    prisonersOfWar: {
      color: '#10B981',
      icon: 'Book',
      name: "Treatment of Prisoners",
      nameArabic: "معاملة الأسرى",
      concepts: [
        { term: "مَا كَانَ لِنَبِيٍّ أَن يَكُونَ لَهُ أَسْرَىٰ حَتَّىٰ يُثْخِنَ فِي الْأَرْضِ", meaning: "It is not for a prophet to have prisoners until he has established dominance", explanation: "Historical context of prisoner policy", verseRef: "8:67" },
        { term: "تُرِيدُونَ عَرَضَ الدُّنْيَا", meaning: "You desire the goods of this world", explanation: "Warning against material motives for ransoming", verseRef: "8:67" },
        { term: "وَاللَّهُ يُرِيدُ الْآخِرَةَ", meaning: "But Allah desires the Hereafter", explanation: "Higher purpose over worldly gain", verseRef: "8:67" },
        { term: "قُل لِّمَن فِي أَيْدِيكُم مِّنَ الْأَسْرَىٰ", meaning: "Say to those prisoners in your hands", explanation: "Address to captives of Badr", verseRef: "8:70" },
        { term: "إِن يَعْلَمِ اللَّهُ فِي قُلُوبِكُمْ خَيْرًا يُؤْتِكُمْ خَيْرًا", meaning: "If Allah knows goodness in your hearts, He will give you better", explanation: "Potential redemption for sincere captives", verseRef: "8:70" }
      ]
    },

    hypocritesAndDisbelievers: {
      color: '#EF4444',
      icon: 'Users',
      name: "Hypocrites and Disbelievers",
      nameArabic: "المنافقون والكافرون",
      concepts: [
        { term: "إِنَّ شَرَّ الدَّوَابِّ عِندَ اللَّهِ الَّذِينَ كَفَرُوا", meaning: "Indeed, the worst of creatures to Allah are those who disbelieve", explanation: "Disbelievers' status before Allah", verseRef: "8:55" },
        { term: "فَهُمْ لَا يُؤْمِنُونَ", meaning: "So they will not believe", explanation: "Persistent rejection of faith", verseRef: "8:55" },
        { term: "الَّذِينَ عَاهَدتَّ مِنْهُمْ ثُمَّ يَنقُضُونَ عَهْدَهُمْ", meaning: "Those with whom you made a treaty but they break it", explanation: "Treaty-breakers", verseRef: "8:56" },
        { term: "وَهُمْ لَا يَتَّقُونَ", meaning: "And they do not fear Allah", explanation: "No taqwa leads to treachery", verseRef: "8:56" },
        { term: "إِنَّ شَرَّ الدَّوَابِّ عِندَ اللَّهِ الصُّمُّ الْبُكْمُ الَّذِينَ لَا يَعْقِلُونَ", meaning: "Worst creatures are the deaf and dumb who do not reason", explanation: "Those who refuse to use intellect", verseRef: "8:22" },
        { term: "وَلَوْ عَلِمَ اللَّهُ فِيهِمْ خَيْرًا لَّأَسْمَعَهُمْ", meaning: "Had Allah known any good in them, He would have made them hear", explanation: "Divine knowledge of hearts", verseRef: "8:23" }
      ]
    },

    loyaltyAndAlliance: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Loyalty and Alliance (Walaa)",
      nameArabic: "الولاء والبراء",
      concepts: [
        { term: "إِنَّ الَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا", meaning: "Those who believed, emigrated, and fought", explanation: "The Muhajirun's sacrifice", verseRef: "8:72" },
        { term: "بِأَمْوَالِهِمْ وَأَنفُسِهِمْ فِي سَبِيلِ اللَّهِ", meaning: "With their wealth and lives in the cause of Allah", explanation: "Complete sacrifice for faith", verseRef: "8:72" },
        { term: "وَالَّذِينَ آوَوا وَّنَصَرُوا", meaning: "And those who gave shelter and aided", explanation: "The Ansar's hospitality", verseRef: "8:72" },
        { term: "أُولَٰئِكَ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ", meaning: "They are allies of one another", explanation: "Brotherhood of believers", verseRef: "8:72" },
        { term: "وَالَّذِينَ كَفَرُوا بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ", meaning: "And those who disbelieve are allies of one another", explanation: "Disbelievers united against truth", verseRef: "8:73" },
        { term: "إِلَّا تَفْعَلُوهُ تَكُن فِتْنَةٌ فِي الْأَرْضِ وَفَسَادٌ كَبِيرٌ", meaning: "If you do not do this, there will be fitnah and great corruption", explanation: "Unity of believers prevents chaos", verseRef: "8:73" }
      ]
    },

    satanAndEvil: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Satan's Deception",
      nameArabic: "خداع الشيطان",
      concepts: [
        { term: "وَإِذْ زَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ", meaning: "And when Satan made their deeds pleasing to them", explanation: "Satan beautifies evil for disbelievers", verseRef: "8:48" },
        { term: "وَقَالَ لَا غَالِبَ لَكُمُ الْيَوْمَ مِنَ النَّاسِ", meaning: "And said: No one can defeat you today", explanation: "Satan's false promise of victory", verseRef: "8:48" },
        { term: "وَإِنِّي جَارٌ لَّكُمْ", meaning: "And I am your protector", explanation: "Satan's deceptive guarantee", verseRef: "8:48" },
        { term: "فَلَمَّا تَرَاءَتِ الْفِئَتَانِ نَكَصَ عَلَىٰ عَقِبَيْهِ", meaning: "But when the two armies sighted each other, he turned on his heels", explanation: "Satan abandons at moment of truth", verseRef: "8:48" },
        { term: "وَقَالَ إِنِّي بَرِيءٌ مِّنكُمْ", meaning: "And said: I am dissociated from you", explanation: "Satan's betrayal revealed", verseRef: "8:48" },
        { term: "إِنِّي أَخَافُ اللَّهَ", meaning: "Indeed, I fear Allah", explanation: "Satan acknowledges Allah's power", verseRef: "8:48" }
      ]
    },

    divineWisdom: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Wisdom and Planning",
      nameArabic: "الحكمة والتدبير الإلهي",
      concepts: [
        { term: "وَلَوْ تَوَاعَدتُّمْ لَاخْتَلَفْتُمْ فِي الْمِيعَادِ", meaning: "If you had made an appointment, you would have missed it", explanation: "Divine orchestration of Badr", verseRef: "8:42" },
        { term: "وَلَٰكِن لِّيَقْضِيَ اللَّهُ أَمْرًا كَانَ مَفْعُولًا", meaning: "But Allah's decree was to be accomplished", explanation: "Battle was divinely destined", verseRef: "8:42" },
        { term: "إِذْ يُرِيكَهُمُ اللَّهُ فِي مَنَامِكَ قَلِيلًا", meaning: "When Allah showed them to you in your dream as few", explanation: "Vision given to Prophet for confidence", verseRef: "8:43" },
        { term: "وَلَوْ أَرَاكَهُمْ كَثِيرًا لَّفَشِلْتُمْ", meaning: "Had He shown them to you as many, you would have lost heart", explanation: "Divine mercy in perception", verseRef: "8:43" },
        { term: "وَإِذْ يُرِيكُمُوهُمْ إِذِ الْتَقَيْتُمْ فِي أَعْيُنِكُمْ قَلِيلًا", meaning: "And when you met, He made them appear few in your eyes", explanation: "Mutual underestimation by design", verseRef: "8:44" },
        { term: "وَيُقَلِّلُكُمْ فِي أَعْيُنِهِمْ", meaning: "And made you appear few in their eyes", explanation: "Both sides emboldened to fight", verseRef: "8:44" }
      ]
    },

    testAndTrial: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Test and Trial",
      nameArabic: "الابتلاء والفتنة",
      concepts: [
        { term: "وَاتَّقُوا فِتْنَةً لَّا تُصِيبَنَّ الَّذِينَ ظَلَمُوا مِنكُمْ خَاصَّةً", meaning: "Fear a trial that will not affect only the wrongdoers", explanation: "Collective trials affect all", verseRef: "8:25" },
        { term: "وَاعْلَمُوا أَنَّ اللَّهَ شَدِيدُ الْعِقَابِ", meaning: "And know that Allah is severe in punishment", explanation: "Warning of consequences", verseRef: "8:25" },
        { term: "وَاذْكُرُوا إِذْ أَنتُمْ قَلِيلٌ مُّسْتَضْعَفُونَ فِي الْأَرْضِ", meaning: "Remember when you were few and oppressed in the land", explanation: "Reminder of humble beginnings in Makkah", verseRef: "8:26" },
        { term: "تَخَافُونَ أَن يَتَخَطَّفَكُمُ النَّاسُ", meaning: "Fearing people would snatch you away", explanation: "Previous state of vulnerability", verseRef: "8:26" },
        { term: "فَآوَاكُمْ وَأَيَّدَكُم بِنَصْرِهِ وَرَزَقَكُم مِّنَ الطَّيِّبَاتِ", meaning: "He sheltered you, supported you with His help, and provided good things", explanation: "Allah's transformation of their condition", verseRef: "8:26" },
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ", meaning: "O believers, do not betray Allah and the Messenger", explanation: "Warning against betraying trust", verseRef: "8:27" }
      ]
    },

    criterionOfTruth: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Criterion (Furqan)",
      nameArabic: "الفرقان",
      concepts: [
        { term: "إِن تَتَّقُوا اللَّهَ يَجْعَل لَّكُمْ فُرْقَانًا", meaning: "If you fear Allah, He will grant you a criterion", explanation: "Taqwa leads to discernment", verseRef: "8:29" },
        { term: "وَيُكَفِّرْ عَنكُمْ سَيِّئَاتِكُمْ", meaning: "And will remove your sins", explanation: "Forgiveness through taqwa", verseRef: "8:29" },
        { term: "وَيَغْفِرْ لَكُمْ", meaning: "And forgive you", explanation: "Complete absolution promised", verseRef: "8:29" },
        { term: "وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ", meaning: "Allah is the possessor of great bounty", explanation: "His generosity is immense", verseRef: "8:29" }
      ]
    },

    refugeInAllah: {
      color: '#10B981',
      icon: 'Book',
      name: "Seeking Refuge in Allah",
      nameArabic: "اللجوء إلى الله",
      concepts: [
        { term: "وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ", meaning: "Allah would not punish them while you are among them", explanation: "Prophet's presence as mercy", verseRef: "8:33" },
        { term: "وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ", meaning: "Nor would Allah punish them while they seek forgiveness", explanation: "Istighfar protects from punishment", verseRef: "8:33" },
        { term: "وَإِن يُرِدْكَ بِخَيْرٍ فَلَا رَادَّ لِفَضْلِهِ", meaning: "If He intends good for you, none can repel His bounty", explanation: "Allah's good cannot be stopped", verseRef: "8:62" }
      ]
    }
  },

  relationships: [
    { from: "الأنفال", to: "فاتقوا الله", type: "resolution", description: "Dispute over spoils resolved through taqwa" },
    { from: "يوم الفرقان", to: "غزوة بدر", type: "identity", description: "Badr is the Day of Criterion" },
    { from: "ألف من الملائكة", to: "النصر", type: "means", description: "Angels as means of victory" },
    { from: "وجلت قلوبهم", to: "المؤمنون حقا", type: "characteristic", description: "Heart-trembling defines true faith" },
    { from: "أطيعوا الله", to: "لا تنازعوا", type: "condition", description: "Obedience prevents disunity" },
    { from: "إعداد القوة", to: "ترهبون العدو", type: "purpose", description: "Preparation deters enemies" },
    { from: "جنحوا للسلم", to: "فاجنح لها", type: "command", description: "Peace overtures must be accepted" },
    { from: "الشيطان", to: "نكص على عقبيه", type: "betrayal", description: "Satan abandons his followers" },
    { from: "المهاجرون", to: "الأنصار", type: "alliance", description: "Emigrants and helpers as allies" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Spoils Question", verses: "8:1-4", description: "Opening question about Anfal resolved through taqwa and true believer qualities" },
      { stage: 2, theme: "Pre-Battle Scene", verses: "8:5-14", description: "Setting out for battle, believers' reluctance, divine support promised" },
      { stage: 3, theme: "Battle Commands", verses: "8:15-19", description: "Rules of engagement - no fleeing, Allah's role in victory" },
      { stage: 4, theme: "Obedience Required", verses: "8:20-28", description: "Commands for obedience, response to Allah's call, avoiding betrayal" },
      { stage: 5, theme: "Criterion Granted", verses: "8:29-40", description: "Furqan through taqwa, Prophet's protection, fighting until no fitnah" },
      { stage: 6, theme: "Badr's Divine Plan", verses: "8:41-44", description: "Distribution rules, Day of Furqan, Allah's orchestration of battle positions" },
      { stage: 7, theme: "Battlefield Conduct", verses: "8:45-49", description: "Stand firm, remember Allah, avoid boasting, Satan's deception revealed" },
      { stage: 8, theme: "Fate of Disbelievers", verses: "8:50-58", description: "Death of disbelievers, treaty-breakers, worst of creatures" },
      { stage: 9, theme: "War Ethics", verses: "8:59-66", description: "Prepare strength for deterrence, accept peace, trust in Allah" },
      { stage: 10, theme: "Prisoners & Loyalty", verses: "8:67-75", description: "Captive policy, Muhajirun-Ansar alliance, believers as one family" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Unity over wealth", how: "Don't let material gains divide the community", verse: "8:1" },
      { principle: "Heart consciousness", how: "When Allah is mentioned, feel your heart respond", verse: "8:2" },
      { principle: "Faith through Quran", how: "Let Quran recitation increase your iman", verse: "8:2" },
      { principle: "Full obedience", how: "Obey Allah and His Messenger without partial compliance", verse: "8:20" },
      { principle: "Respond to life-giving call", how: "Answer Islam's call - it gives true life", verse: "8:24" },
      { principle: "Prepare but trust", how: "Do your best preparation, then rely on Allah", verse: "8:60-61" },
      { principle: "Choose peace", how: "When enemy inclines to peace, accept it", verse: "8:61" },
      { principle: "Stay firm under pressure", how: "Stand firm, remember Allah, avoid disputes", verse: "8:45-46" },
      { principle: "Brotherhood matters", how: "Believers are allies of one another - act accordingly", verse: "8:72" }
    ]
  },

  uniqueInsight: {
    title: "The Anatomy of Victory",
    insight: "Surah Al-Anfal is essentially a divine after-action report of the Battle of Badr. It begins with a dispute (spoils) and ends with unity (Muhajirun-Ansar alliance). The surah reveals that victory comes not through numbers (313 vs 1000) but through divine support, obedience, and steadfastness. Remarkably, it shows both the human element ('You threw') and divine element ('Allah threw') working together (8:17). The surah establishes that military strength is for deterrence (8:60), peace is preferred (8:61), and fighting is only until there is no more fitnah (8:39). Most strikingly, it reveals Satan's role in emboldening the Quraysh then abandoning them (8:48) - a lesson that evil promises never deliver. The term 'Anfal' (spoils/extra bounty) reminds believers that all gains are from Allah, not personal achievement."
  },

  historicalContext: {
    note: "Revealed after the Battle of Badr (2 AH/624 CE), Islam's first major military victory. 313 poorly-equipped Muslims faced about 1000 well-armed Quraysh. The surah addresses the dispute over war spoils that arose after victory, establishes rules of warfare, and records the miraculous events at Badr - angelic support, the rain before battle, the Prophet throwing dust that blinded enemies. It also addresses the ransom of prisoners, including Abbas (the Prophet's uncle). The surah lays the foundation for Islamic international law, including treatment of prisoners and peace treaties."
  },

  linguisticFeatures: {
    features: [
      { feature: "الأنفال", example: "Plural of نَفَل", effect: "Extra bounty beyond expected - emphasizes Allah's generosity" },
      { feature: "وَجِلَتْ قُلُوبُهُمْ", example: "Hearts tremble", effect: "وَجِلَ = fearful trembling, different from خَوْف (fear)" },
      { feature: "مُرْدِفِينَ", example: "Following one another", effect: "Wave after wave of angels - Form IV participle" },
      { feature: "يُثَبِّتَ بِهِ الْأَقْدَامَ", example: "To make firm the feet", effect: "Rain firmed the sandy ground - tactical advantage" },
      { feature: "مَا رَمَيْتَ إِذْ رَمَيْتَ", example: "You did not throw when you threw", effect: "Paradox highlighting divine agency through human action" },
      { feature: "نَكَصَ عَلَىٰ عَقِبَيْهِ", example: "Turned on his heels", effect: "Vivid image of Satan fleeing backward in cowardice" },
      { feature: "الْفُرْقَانِ", example: "The Criterion", effect: "From فَرَقَ (to separate) - distinguishing truth from falsehood" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "8:11", topic: "Rain before battle", note: "Rain firmed the sandy ground for Muslim camp while making Quraysh area muddy" },
      { verse: "8:11", topic: "Sleep as security", note: "Deep restful sleep despite danger - psychological preparation for battle" },
      { verse: "8:43-44", topic: "Perception manipulation", note: "Both armies saw each other as smaller - increasing confidence on both sides" },
      { verse: "8:60", topic: "Deterrence theory", note: "Military preparation for deterrence, not aggression - modern defense principle" }
    ]
  }
};

export default ONTOLOGY;
