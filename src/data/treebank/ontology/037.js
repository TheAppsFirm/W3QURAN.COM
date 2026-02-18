/**
 * Surah As-Saffat (37) - Ontology of Quranic Concepts
 * Those Ranged in Rows
 *
 * Theme: Angels ranged in rows glorifying Allah, refutation of polytheism,
 * stories of prophets (Nuh, Ibrahim, Musa, Harun, Ilyas, Lut, Yunus),
 * Ibrahim's sacrifice, Day of Judgment, rewards and punishments
 *
 * Revelation: Makki
 * Total Ayahs: 182
 */

export const ONTOLOGY = {
  surahId: 37,
  surahName: "As-Saffat",
  surahNameArabic: "الصافات",
  revelationType: "Makki",
  totalAyahs: 182,

  categories: {
    angelsInRows: {
      name: "Angels Ranged in Rows",
      nameArabic: "الصافات صفاً",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَالصَّافَّاتِ صَفًّا", meaning: "By those ranged in rows", explanation: "Angels standing in perfect rows before Allah", verseRef: "37:1" },
        { term: "فَالزَّاجِرَاتِ زَجْرًا", meaning: "And those who drive [the clouds]", explanation: "Angels driving clouds or repelling evil", verseRef: "37:2" },
        { term: "فَالتَّالِيَاتِ ذِكْرًا", meaning: "And those who recite the message", explanation: "Angels reciting and conveying revelation", verseRef: "37:3" },
        { term: "إِنَّ إِلَٰهَكُمْ لَوَاحِدٌ", meaning: "Indeed, your God is One", explanation: "Core conclusion from angelic testimony", verseRef: "37:4" },
        { term: "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Lord of the heavens and the earth", explanation: "Allah's dominion over all creation", verseRef: "37:5" },
        { term: "وَرَبُّ الْمَشَارِقِ", meaning: "And Lord of the easts", explanation: "Lord of every sunrise point throughout the year", verseRef: "37:5" }
      ]
    },

    protectionOfHeavens: {
      name: "Protection of the Heavens",
      nameArabic: "حراسة السماء",
      color: "#06B6D4",
      icon: "Shield",
      concepts: [
        { term: "إِنَّا زَيَّنَّا السَّمَاءَ الدُّنْيَا بِزِينَةٍ الْكَوَاكِبِ", meaning: "We have adorned the nearest heaven with stars", explanation: "Stars as beautification of the sky", verseRef: "37:6" },
        { term: "وَحِفْظًا مِّن كُلِّ شَيْطَانٍ مَّارِدٍ", meaning: "And as protection against every rebellious devil", explanation: "Stars protect against eavesdropping devils", verseRef: "37:7" },
        { term: "لَّا يَسَّمَّعُونَ إِلَى الْمَلَإِ الْأَعْلَىٰ", meaning: "They cannot listen to the exalted assembly", explanation: "Devils barred from hearing angelic conversations", verseRef: "37:8" },
        { term: "وَيُقْذَفُونَ مِن كُلِّ جَانِبٍ", meaning: "They are pelted from every side", explanation: "Devils attacked from all directions", verseRef: "37:8" },
        { term: "دُحُورًا", meaning: "Repelled", explanation: "Driven away forcefully", verseRef: "37:9" },
        { term: "وَلَهُمْ عَذَابٌ وَاصِبٌ", meaning: "And for them is a constant punishment", explanation: "Perpetual punishment awaits", verseRef: "37:9" },
        { term: "إِلَّا مَنْ خَطِفَ الْخَطْفَةَ", meaning: "Except one who snatches [some words]", explanation: "Devil who steals a fragment of revelation", verseRef: "37:10" },
        { term: "فَأَتْبَعَهُ شِهَابٌ ثَاقِبٌ", meaning: "Then a piercing flame pursues him", explanation: "Shooting star chases the eavesdropping devil", verseRef: "37:10" }
      ]
    },

    creationArgument: {
      name: "Argument from Creation",
      nameArabic: "دليل الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "فَاسْتَفْتِهِمْ أَهُمْ أَشَدُّ خَلْقًا", meaning: "Ask them: Are they more difficult to create", explanation: "Challenge to reflect on human creation", verseRef: "37:11" },
        { term: "أَم مَّنْ خَلَقْنَا", meaning: "Or those We created?", explanation: "Comparison to heavens, earth, angels", verseRef: "37:11" },
        { term: "إِنَّا خَلَقْنَاهُم مِّن طِينٍ لَّازِبٍ", meaning: "We created them from sticky clay", explanation: "Human origin from clay", verseRef: "37:11" },
        { term: "بَلْ عَجِبْتَ وَيَسْخَرُونَ", meaning: "You wonder while they mock", explanation: "Prophet amazed at their denial, they mock in return", verseRef: "37:12" },
        { term: "وَإِذَا ذُكِّرُوا لَا يَذْكُرُونَ", meaning: "When reminded, they do not remember", explanation: "Heedless despite reminders", verseRef: "37:13" },
        { term: "وَإِذَا رَأَوْا آيَةً يَسْتَسْخِرُونَ", meaning: "When they see a sign, they ridicule", explanation: "Mock even clear signs", verseRef: "37:14" }
      ]
    },

    disbelieversOnJudgmentDay: {
      name: "Disbelievers on Judgment Day",
      nameArabic: "الكافرون يوم القيامة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ", meaning: "Woe that Day to the deniers", explanation: "Destruction for those who denied truth", verseRef: "37:21" },
        { term: "هَٰذَا يَوْمُ الْفَصْلِ", meaning: "This is the Day of Separation", explanation: "Day when truth is separated from falsehood", verseRef: "37:21" },
        { term: "الَّذِي كُنتُم بِهِ تُكَذِّبُونَ", meaning: "Which you used to deny", explanation: "Confronted with what they rejected", verseRef: "37:21" },
        { term: "احْشُرُوا الَّذِينَ ظَلَمُوا وَأَزْوَاجَهُمْ", meaning: "Gather those who wronged and their kinds", explanation: "Wrongdoers gathered with their like", verseRef: "37:22" },
        { term: "وَمَا كَانُوا يَعْبُدُونَ", meaning: "And what they used to worship", explanation: "Idols gathered with idol worshippers", verseRef: "37:22" },
        { term: "مِن دُونِ اللَّهِ", meaning: "Besides Allah", explanation: "All false gods assembled", verseRef: "37:22" },
        { term: "فَاهْدُوهُمْ إِلَىٰ صِرَاطِ الْجَحِيمِ", meaning: "And guide them to the path of Hellfire", explanation: "Sarcastically 'guided' to Hell", verseRef: "37:23" }
      ]
    },

    questioningInHell: {
      name: "Questioning in Hell",
      nameArabic: "السؤال في النار",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "وَقِفُوهُمْ إِنَّهُم مَّسْئُولُونَ", meaning: "Stop them; indeed, they are to be questioned", explanation: "Held accountable for their deeds", verseRef: "37:24" },
        { term: "مَا لَكُمْ لَا تَنَاصَرُونَ", meaning: "What is wrong with you that you do not help each other?", explanation: "Mocking their helplessness", verseRef: "37:25" },
        { term: "بَلْ هُمُ الْيَوْمَ مُسْتَسْلِمُونَ", meaning: "But they, that Day, are surrendering", explanation: "Completely subdued on Judgment Day", verseRef: "37:26" },
        { term: "وَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَسَاءَلُونَ", meaning: "They will turn to one another, questioning each other", explanation: "Mutual blame begins", verseRef: "37:27" },
        { term: "إِنَّكُمْ كُنتُمْ تَأْتُونَنَا عَنِ الْيَمِينِ", meaning: "You used to come to us from the right", explanation: "Followers blame leaders for misleading from position of trust", verseRef: "37:28" },
        { term: "بَلْ لَّمْ تَكُونُوا مُؤْمِنِينَ", meaning: "Rather, you were not believers", explanation: "Leaders blame followers for their own disbelief", verseRef: "37:29" }
      ]
    },

    followersAndLeaders: {
      name: "Followers Blame Leaders",
      nameArabic: "المتبوعون والتابعون",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "وَمَا كَانَ لَنَا عَلَيْكُم مِّن سُلْطَانٍ", meaning: "We had no authority over you", explanation: "Leaders deny coercing followers", verseRef: "37:30" },
        { term: "بَلْ كُنتُمْ قَوْمًا طَاغِينَ", meaning: "Rather, you were a transgressing people", explanation: "Both sides were transgressors", verseRef: "37:30" },
        { term: "فَحَقَّ عَلَيْنَا قَوْلُ رَبِّنَا", meaning: "So the word of our Lord has come into effect upon us", explanation: "Divine decree fulfilled", verseRef: "37:31" },
        { term: "إِنَّا لَذَائِقُونَ", meaning: "Indeed, we are to taste [punishment]", explanation: "Both will suffer together", verseRef: "37:31" },
        { term: "فَأَغْوَيْنَاكُمْ إِنَّا كُنَّا غَاوِينَ", meaning: "So we led you astray; indeed, we were astray", explanation: "Misguided leading the misguided", verseRef: "37:32" },
        { term: "فَإِنَّهُمْ يَوْمَئِذٍ فِي الْعَذَابِ مُشْتَرِكُونَ", meaning: "So indeed they, that Day, will be sharing in the punishment", explanation: "Shared guilt, shared punishment", verseRef: "37:33" }
      ]
    },

    punishmentForArrogance: {
      name: "Punishment for Arrogance",
      nameArabic: "عقاب المستكبرين",
      color: "#EF4444",
      icon: "Crown",
      concepts: [
        { term: "إِنَّهُمْ كَانُوا إِذَا قِيلَ لَهُمْ لَا إِلَٰهَ إِلَّا اللَّهُ يَسْتَكْبِرُونَ", meaning: "When it was said to them: La ilaha illallah, they were arrogant", explanation: "Rejected Tawheed out of pride", verseRef: "37:35" },
        { term: "وَيَقُولُونَ أَئِنَّا لَتَارِكُو آلِهَتِنَا لِشَاعِرٍ مَّجْنُونٍ", meaning: "And saying: Should we leave our gods for a mad poet?", explanation: "Called Prophet a mad poet", verseRef: "37:36" },
        { term: "بَلْ جَاءَ بِالْحَقِّ وَصَدَّقَ الْمُرْسَلِينَ", meaning: "Rather, he brought the truth and confirmed the messengers", explanation: "Prophet brought truth, confirmed previous prophets", verseRef: "37:37" },
        { term: "إِنَّكُمْ لَذَائِقُو الْعَذَابِ الْأَلِيمِ", meaning: "Indeed, you will taste the painful punishment", explanation: "Painful punishment guaranteed", verseRef: "37:38" }
      ]
    },

    rewardsForBelievers: {
      name: "Rewards for Believers",
      nameArabic: "جزاء المؤمنين",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: "Except the chosen servants of Allah", explanation: "Sincere servants exempted from punishment", verseRef: "37:40" },
        { term: "أُولَٰئِكَ لَهُمْ رِزْقٌ مَّعْلُومٌ", meaning: "Those will have a provision determined", explanation: "Known sustenance in Paradise", verseRef: "37:41" },
        { term: "فَوَاكِهُ وَهُم مُّكْرَمُونَ", meaning: "Fruits, and they will be honored", explanation: "Fruits and honor await believers", verseRef: "37:42" },
        { term: "فِي جَنَّاتِ النَّعِيمِ", meaning: "In gardens of pleasure", explanation: "Gardens of bliss", verseRef: "37:43" },
        { term: "عَلَىٰ سُرُرٍ مُّتَقَابِلِينَ", meaning: "On thrones facing one another", explanation: "Seated facing each other in fellowship", verseRef: "37:44" },
        { term: "يُطَافُ عَلَيْهِم بِكَأْسٍ مِّن مَّعِينٍ", meaning: "There is circulated among them a cup from a flowing spring", explanation: "Served pure drink from springs", verseRef: "37:45" },
        { term: "بَيْضَاءَ لَذَّةٍ لِّلشَّارِبِينَ", meaning: "White, delicious to the drinkers", explanation: "Pure white drink, delightful", verseRef: "37:46" },
        { term: "لَا فِيهَا غَوْلٌ وَلَا هُمْ عَنْهَا يُنزَفُونَ", meaning: "No bad effect is there in it, nor will they be intoxicated", explanation: "No headache or loss of senses", verseRef: "37:47" },
        { term: "وَعِندَهُمْ قَاصِرَاتُ الطَّرْفِ عِينٌ", meaning: "With them will be those limiting their glances with large eyes", explanation: "Modest companions with beautiful eyes", verseRef: "37:48" },
        { term: "كَأَنَّهُنَّ بَيْضٌ مَّكْنُونٌ", meaning: "As if they were eggs, well-protected", explanation: "Pure like protected pearls", verseRef: "37:49" }
      ]
    },

    conversationInParadise: {
      name: "Conversation in Paradise",
      nameArabic: "حديث أهل الجنة",
      color: "#10B981",
      icon: "MessageCircle",
      concepts: [
        { term: "فَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَسَاءَلُونَ", meaning: "They will approach one another, inquiring", explanation: "Believers conversing in Paradise", verseRef: "37:50" },
        { term: "قَالَ قَائِلٌ مِّنْهُمْ إِنِّي كَانَ لِي قَرِينٌ", meaning: "A speaker among them will say: I had a companion", explanation: "Remembering a skeptical friend", verseRef: "37:51" },
        { term: "يَقُولُ أَإِنَّكَ لَمِنَ الْمُصَدِّقِينَ", meaning: "Who would say: Are you among those who believe?", explanation: "The companion mocked belief in resurrection", verseRef: "37:52" },
        { term: "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا وَعِظَامًا أَإِنَّا لَمَدِينُونَ", meaning: "When we have died and become dust and bones, will we be judged?", explanation: "Skeptic denied resurrection", verseRef: "37:53" },
        { term: "قَالَ هَلْ أَنتُم مُّطَّلِعُونَ", meaning: "He will say: Would you look?", explanation: "Believer asks to see former companion", verseRef: "37:54" },
        { term: "فَاطَّلَعَ فَرَآهُ فِي سَوَاءِ الْجَحِيمِ", meaning: "He will look and see him in the midst of Hellfire", explanation: "Sees skeptic in center of Hell", verseRef: "37:55" },
        { term: "قَالَ تَاللَّهِ إِن كِدتَّ لَتُرْدِينِ", meaning: "He will say: By Allah, you almost ruined me", explanation: "Almost led astray by skeptic friend", verseRef: "37:56" },
        { term: "وَلَوْلَا نِعْمَةُ رَبِّي لَكُنتُ مِنَ الْمُحْضَرِينَ", meaning: "If not for the favor of my Lord, I would have been brought [to Hell]", explanation: "Gratitude for Allah's guidance", verseRef: "37:57" }
      ]
    },

    eternalParadise: {
      name: "Eternity in Paradise",
      nameArabic: "الخلود في الجنة",
      color: "#10B981",
      icon: "Star",
      concepts: [
        { term: "أَفَمَا نَحْنُ بِمَيِّتِينَ", meaning: "Are we not to die?", explanation: "Believers realize eternal life", verseRef: "37:58" },
        { term: "إِلَّا مَوْتَتَنَا الْأُولَىٰ وَمَا نَحْنُ بِمُعَذَّبِينَ", meaning: "Except for our first death, and we will not be punished", explanation: "Only one death, no punishment ever", verseRef: "37:59" },
        { term: "إِنَّ هَٰذَا لَهُوَ الْفَوْزُ الْعَظِيمُ", meaning: "Indeed, this is the great attainment", explanation: "Ultimate success and victory", verseRef: "37:60" },
        { term: "لِمِثْلِ هَٰذَا فَلْيَعْمَلِ الْعَامِلُونَ", meaning: "For the like of this let the workers work", explanation: "This reward is worth striving for", verseRef: "37:61" }
      ]
    },

    treeOfZaqqum: {
      name: "Tree of Zaqqum",
      nameArabic: "شجرة الزقوم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَذَٰلِكَ خَيْرٌ نُّزُلًا أَمْ شَجَرَةُ الزَّقُّومِ", meaning: "Is that [Paradise] a better accommodation or the tree of Zaqqum?", explanation: "Contrast Paradise with Hell", verseRef: "37:62" },
        { term: "إِنَّا جَعَلْنَاهَا فِتْنَةً لِّلظَّالِمِينَ", meaning: "We have made it a trial for the wrongdoers", explanation: "Disbelievers mocked this concept", verseRef: "37:63" },
        { term: "إِنَّهَا شَجَرَةٌ تَخْرُجُ فِي أَصْلِ الْجَحِيمِ", meaning: "It is a tree emerging from the bottom of Hellfire", explanation: "Grows from depths of Hell", verseRef: "37:64" },
        { term: "طَلْعُهَا كَأَنَّهُ رُءُوسُ الشَّيَاطِينِ", meaning: "Its emerging fruit as if it was heads of devils", explanation: "Fruit resembles devil heads - hideous", verseRef: "37:65" },
        { term: "فَإِنَّهُمْ لَآكِلُونَ مِنْهَا فَمَالِئُونَ مِنْهَا الْبُطُونَ", meaning: "They will eat from it and fill their bellies", explanation: "Forced to eat until stuffed", verseRef: "37:66" },
        { term: "ثُمَّ إِنَّ لَهُمْ عَلَيْهَا لَشَوْبًا مِّنْ حَمِيمٍ", meaning: "Then they will have a scalding drink", explanation: "Boiling water to wash down Zaqqum", verseRef: "37:67" },
        { term: "ثُمَّ إِنَّ مَرْجِعَهُمْ لَإِلَى الْجَحِيمِ", meaning: "Then their return is to Hellfire", explanation: "Cycle of punishment continues", verseRef: "37:68" }
      ]
    },

    blindFollowing: {
      name: "Blind Following of Ancestors",
      nameArabic: "تقليد الآباء",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "إِنَّهُمْ أَلْفَوْا آبَاءَهُمْ ضَالِّينَ", meaning: "Indeed, they found their fathers astray", explanation: "Inherited misguidance from ancestors", verseRef: "37:69" },
        { term: "فَهُمْ عَلَىٰ آثَارِهِمْ يُهْرَعُونَ", meaning: "So they hastened in their footsteps", explanation: "Rushed to follow in their error", verseRef: "37:70" },
        { term: "وَلَقَدْ ضَلَّ قَبْلَهُمْ أَكْثَرُ الْأَوَّلِينَ", meaning: "Before them, most of the ancients went astray", explanation: "History of mass misguidance", verseRef: "37:71" },
        { term: "وَلَقَدْ أَرْسَلْنَا فِيهِم مُّنذِرِينَ", meaning: "We had sent among them warners", explanation: "Despite prophets, they strayed", verseRef: "37:72" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُنذَرِينَ", meaning: "See how was the end of those who were warned", explanation: "Warned but rejected - destruction", verseRef: "37:73" }
      ]
    },

    prophetNuh: {
      name: "Prophet Nuh",
      nameArabic: "النبي نوح",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَلَقَدْ نَادَانَا نُوحٌ", meaning: "And Nuh called upon Us", explanation: "Nuh's supplication to Allah", verseRef: "37:75" },
        { term: "فَلَنِعْمَ الْمُجِيبُونَ", meaning: "How excellent are We in responding", explanation: "Allah is the best responder to prayers", verseRef: "37:75" },
        { term: "وَنَجَّيْنَاهُ وَأَهْلَهُ مِنَ الْكَرْبِ الْعَظِيمِ", meaning: "We saved him and his family from the great distress", explanation: "Rescued from the flood", verseRef: "37:76" },
        { term: "وَجَعَلْنَا ذُرِّيَّتَهُ هُمُ الْبَاقِينَ", meaning: "We made his descendants the survivors", explanation: "All humanity descends from Nuh", verseRef: "37:77" },
        { term: "وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ", meaning: "And We left for him [favorable mention] among later generations", explanation: "Honored legacy preserved", verseRef: "37:78" },
        { term: "سَلَامٌ عَلَىٰ نُوحٍ فِي الْعَالَمِينَ", meaning: "Peace upon Nuh among the worlds", explanation: "Divine peace upon Nuh", verseRef: "37:79" },
        { term: "إِنَّهُ مِنْ عِبَادِنَا الْمُؤْمِنِينَ", meaning: "Indeed, he was of Our believing servants", explanation: "Praised as sincere believer", verseRef: "37:81" },
        { term: "ثُمَّ أَغْرَقْنَا الْآخَرِينَ", meaning: "Then We drowned the others", explanation: "Disbelievers destroyed by flood", verseRef: "37:82" }
      ]
    },

    prophetIbrahimSeeking: {
      name: "Ibrahim Seeks Truth",
      nameArabic: "إبراهيم يبحث عن الحق",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "وَإِنَّ مِن شِيعَتِهِ لَإِبْرَاهِيمَ", meaning: "And indeed, among his followers was Ibrahim", explanation: "Ibrahim followed Nuh's path", verseRef: "37:83" },
        { term: "إِذْ جَاءَ رَبَّهُ بِقَلْبٍ سَلِيمٍ", meaning: "When he came to his Lord with a sound heart", explanation: "Ibrahim's pure, sincere heart", verseRef: "37:84" },
        { term: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَاذَا تَعْبُدُونَ", meaning: "When he said to his father and people: What do you worship?", explanation: "Questioning idol worship", verseRef: "37:85" },
        { term: "أَئِفْكًا آلِهَةً دُونَ اللَّهِ تُرِيدُونَ", meaning: "Is it falsehood, gods other than Allah, you desire?", explanation: "Exposing false gods as lies", verseRef: "37:86" },
        { term: "فَمَا ظَنُّكُم بِرَبِّ الْعَالَمِينَ", meaning: "What then is your thought about the Lord of the worlds?", explanation: "Challenging them to consider true Lord", verseRef: "37:87" }
      ]
    },

    ibrahimAndStars: {
      name: "Ibrahim's Stratagem",
      nameArabic: "حيلة إبراهيم",
      color: "#3B82F6",
      icon: "Zap",
      concepts: [
        { term: "فَنَظَرَ نَظْرَةً فِي النُّجُومِ", meaning: "He cast a look at the stars", explanation: "Looked up at stars deliberately", verseRef: "37:88" },
        { term: "فَقَالَ إِنِّي سَقِيمٌ", meaning: "And said: Indeed, I am ill", explanation: "Excuse to avoid idol festival", verseRef: "37:89" },
        { term: "فَتَوَلَّوْا عَنْهُ مُدْبِرِينَ", meaning: "So they turned away from him, departing", explanation: "People left for their festival", verseRef: "37:90" },
        { term: "فَرَاغَ إِلَىٰ آلِهَتِهِمْ", meaning: "He turned to their gods", explanation: "Approached the idols alone", verseRef: "37:91" },
        { term: "فَقَالَ أَلَا تَأْكُلُونَ", meaning: "And said: Do you not eat?", explanation: "Mocking the idols - offered food before them", verseRef: "37:91" },
        { term: "مَا لَكُمْ لَا تَنطِقُونَ", meaning: "What is wrong with you that you do not speak?", explanation: "Challenging their silence", verseRef: "37:92" },
        { term: "فَرَاغَ عَلَيْهِمْ ضَرْبًا بِالْيَمِينِ", meaning: "He turned on them, striking with his right hand", explanation: "Smashed idols with powerful right hand", verseRef: "37:93" },
        { term: "فَأَقْبَلُوا إِلَيْهِ يَزِفُّونَ", meaning: "They came toward him, hastening", explanation: "People rushed back angrily", verseRef: "37:94" },
        { term: "قَالَ أَتَعْبُدُونَ مَا تَنْحِتُونَ", meaning: "He said: Do you worship what you carve?", explanation: "Exposing absurdity - worshipping own carvings", verseRef: "37:95" },
        { term: "وَاللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ", meaning: "While Allah created you and what you make", explanation: "Allah created you AND your handiwork", verseRef: "37:96" }
      ]
    },

    ibrahimInFire: {
      name: "Ibrahim in the Fire",
      nameArabic: "إبراهيم في النار",
      color: "#F59E0B",
      icon: "Shield",
      concepts: [
        { term: "قَالُوا ابْنُوا لَهُ بُنْيَانًا فَأَلْقُوهُ فِي الْجَحِيمِ", meaning: "They said: Build for him a structure and throw him into the fire", explanation: "Plotted to burn Ibrahim alive", verseRef: "37:97" },
        { term: "فَأَرَادُوا بِهِ كَيْدًا فَجَعَلْنَاهُمُ الْأَسْفَلِينَ", meaning: "They intended a plan against him, but We made them the lowest", explanation: "Their plot backfired - they were humiliated", verseRef: "37:98" }
      ]
    },

    ibrahimsSacrifice: {
      name: "Ibrahim's Great Sacrifice",
      nameArabic: "ذبح إبراهيم العظيم",
      color: "#F59E0B",
      icon: "Heart",
      concepts: [
        { term: "وَقَالَ إِنِّي ذَاهِبٌ إِلَىٰ رَبِّي سَيَهْدِينِ", meaning: "He said: I am going to my Lord; He will guide me", explanation: "Ibrahim emigrates for Allah's sake", verseRef: "37:99" },
        { term: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ", meaning: "My Lord, grant me [a child] from among the righteous", explanation: "Dua for righteous offspring", verseRef: "37:100" },
        { term: "فَبَشَّرْنَاهُ بِغُلَامٍ حَلِيمٍ", meaning: "So We gave him good tidings of a forbearing boy", explanation: "Glad tidings of patient son (Ismail)", verseRef: "37:101" },
        { term: "فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ", meaning: "When he reached with him [the age of] exertion", explanation: "Son grew old enough to work alongside him", verseRef: "37:102" },
        { term: "قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ", meaning: "He said: O my son, I have seen in a dream that I sacrifice you", explanation: "Ibrahim shares divine vision of sacrifice", verseRef: "37:102" },
        { term: "فَانظُرْ مَاذَا تَرَىٰ", meaning: "So see what you think", explanation: "Consulting son, not forcing", verseRef: "37:102" },
        { term: "قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ", meaning: "He said: O my father, do as you are commanded", explanation: "Son's willing submission to Allah's will", verseRef: "37:102" },
        { term: "سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ", meaning: "You will find me, if Allah wills, of the patient", explanation: "Son pledges patience with Allah's help", verseRef: "37:102" },
        { term: "فَلَمَّا أَسْلَمَا", meaning: "When they both submitted", explanation: "Both father and son submitted to Allah", verseRef: "37:103" },
        { term: "وَتَلَّهُ لِلْجَبِينِ", meaning: "And he put him down upon his forehead", explanation: "Laid son face-down for sacrifice", verseRef: "37:103" },
        { term: "وَنَادَيْنَاهُ أَن يَا إِبْرَاهِيمُ", meaning: "We called to him: O Ibrahim!", explanation: "Divine intervention at critical moment", verseRef: "37:104" },
        { term: "قَدْ صَدَّقْتَ الرُّؤْيَا", meaning: "You have fulfilled the vision", explanation: "Test passed - intention accepted", verseRef: "37:105" },
        { term: "إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ", meaning: "Indeed, We thus reward the doers of good", explanation: "Reward for those who do excellent", verseRef: "37:105" },
        { term: "إِنَّ هَٰذَا لَهُوَ الْبَلَاءُ الْمُبِينُ", meaning: "Indeed, this was the clear trial", explanation: "Ultimate test of faith", verseRef: "37:106" },
        { term: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ", meaning: "And We ransomed him with a great sacrifice", explanation: "Ram provided as substitute - origin of Eid sacrifice", verseRef: "37:107" },
        { term: "وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ", meaning: "And We left for him [favorable mention] among later generations", explanation: "Ibrahim's legacy honored forever", verseRef: "37:108" },
        { term: "سَلَامٌ عَلَىٰ إِبْرَاهِيمَ", meaning: "Peace upon Ibrahim", explanation: "Divine peace upon Ibrahim", verseRef: "37:109" },
        { term: "وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ", meaning: "We gave him good tidings of Ishaq, a prophet from the righteous", explanation: "Additional blessing - another prophet son", verseRef: "37:112" },
        { term: "وَبَارَكْنَا عَلَيْهِ وَعَلَىٰ إِسْحَاقَ", meaning: "We blessed him and Ishaq", explanation: "Blessings on father and son", verseRef: "37:113" }
      ]
    },

    prophetMusaHarun: {
      name: "Prophets Musa and Harun",
      nameArabic: "النبيان موسى وهارون",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَلَقَدْ مَنَنَّا عَلَىٰ مُوسَىٰ وَهَارُونَ", meaning: "And We bestowed favor upon Musa and Harun", explanation: "Special grace upon both brothers", verseRef: "37:114" },
        { term: "وَنَجَّيْنَاهُمَا وَقَوْمَهُمَا مِنَ الْكَرْبِ الْعَظِيمِ", meaning: "We saved them and their people from the great distress", explanation: "Saved from Pharaoh's oppression", verseRef: "37:115" },
        { term: "وَنَصَرْنَاهُمْ فَكَانُوا هُمُ الْغَالِبِينَ", meaning: "We supported them so they were the predominant", explanation: "Divine support led to victory", verseRef: "37:116" },
        { term: "وَآتَيْنَاهُمَا الْكِتَابَ الْمُسْتَبِينَ", meaning: "We gave them the clear Scripture", explanation: "Given the Torah", verseRef: "37:117" },
        { term: "وَهَدَيْنَاهُمَا الصِّرَاطَ الْمُسْتَقِيمَ", meaning: "We guided them to the straight path", explanation: "Guided to right way", verseRef: "37:118" },
        { term: "وَتَرَكْنَا عَلَيْهِمَا فِي الْآخِرِينَ", meaning: "We left for them [favorable mention] among later generations", explanation: "Legacy honored", verseRef: "37:119" },
        { term: "سَلَامٌ عَلَىٰ مُوسَىٰ وَهَارُونَ", meaning: "Peace upon Musa and Harun", explanation: "Divine peace upon both", verseRef: "37:120" },
        { term: "إِنَّهُمَا مِنْ عِبَادِنَا الْمُؤْمِنِينَ", meaning: "Indeed, they were of Our believing servants", explanation: "Praised as sincere believers", verseRef: "37:122" }
      ]
    },

    prophetIlyas: {
      name: "Prophet Ilyas (Elijah)",
      nameArabic: "النبي إلياس",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ", meaning: "And indeed, Ilyas was among the messengers", explanation: "Ilyas confirmed as prophet", verseRef: "37:123" },
        { term: "إِذْ قَالَ لِقَوْمِهِ أَلَا تَتَّقُونَ", meaning: "When he said to his people: Will you not fear Allah?", explanation: "Calling people to taqwa", verseRef: "37:124" },
        { term: "أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ", meaning: "Do you call upon Ba'l and leave the best of creators?", explanation: "Rebuking worship of Ba'l idol", verseRef: "37:125" },
        { term: "اللَّهَ رَبَّكُمْ وَرَبَّ آبَائِكُمُ الْأَوَّلِينَ", meaning: "Allah, your Lord and the Lord of your forefathers", explanation: "Reminding them of one true Lord", verseRef: "37:126" },
        { term: "فَكَذَّبُوهُ فَإِنَّهُمْ لَمُحْضَرُونَ", meaning: "But they denied him, so they will be brought [for punishment]", explanation: "Rejection leads to punishment", verseRef: "37:127" },
        { term: "إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: "Except the chosen servants of Allah", explanation: "Sincere believers exempted", verseRef: "37:128" },
        { term: "وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ", meaning: "We left for him [favorable mention] among later generations", explanation: "Ilyas's legacy honored", verseRef: "37:129" },
        { term: "سَلَامٌ عَلَىٰ إِلْ يَاسِينَ", meaning: "Peace upon Ilyas", explanation: "Divine peace upon Ilyas", verseRef: "37:130" }
      ]
    },

    prophetLut: {
      name: "Prophet Lut",
      nameArabic: "النبي لوط",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ لُوطًا لَّمِنَ الْمُرْسَلِينَ", meaning: "And indeed, Lut was among the messengers", explanation: "Lut confirmed as prophet", verseRef: "37:133" },
        { term: "إِذْ نَجَّيْنَاهُ وَأَهْلَهُ أَجْمَعِينَ", meaning: "When We saved him and his family, all", explanation: "Family rescued from destruction", verseRef: "37:134" },
        { term: "إِلَّا عَجُوزًا فِي الْغَابِرِينَ", meaning: "Except an old woman among those who remained behind", explanation: "His wife was among the destroyed", verseRef: "37:135" },
        { term: "ثُمَّ دَمَّرْنَا الْآخَرِينَ", meaning: "Then We destroyed the others", explanation: "Complete destruction of his people", verseRef: "37:136" },
        { term: "وَإِنَّكُمْ لَتَمُرُّونَ عَلَيْهِم مُّصْبِحِينَ", meaning: "And indeed, you pass by them in the morning", explanation: "Ruins visible in morning travel", verseRef: "37:137" },
        { term: "وَبِاللَّيْلِ أَفَلَا تَعْقِلُونَ", meaning: "And at night. Will you not use reason?", explanation: "Signs visible day and night - reflect!", verseRef: "37:138" }
      ]
    },

    prophetYunus: {
      name: "Prophet Yunus",
      nameArabic: "النبي يونس",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ يُونُسَ لَمِنَ الْمُرْسَلِينَ", meaning: "And indeed, Yunus was among the messengers", explanation: "Yunus confirmed as prophet", verseRef: "37:139" },
        { term: "إِذْ أَبَقَ إِلَى الْفُلْكِ الْمَشْحُونِ", meaning: "When he ran away to the laden ship", explanation: "Fled on a fully-loaded ship", verseRef: "37:140" },
        { term: "فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ", meaning: "He drew lots and was among the losers", explanation: "Lost the lot and was thrown overboard", verseRef: "37:141" },
        { term: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ", meaning: "Then the fish swallowed him, while he was blameworthy", explanation: "Swallowed by whale while at fault", verseRef: "37:142" },
        { term: "فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ", meaning: "Had he not been of those who glorify Allah", explanation: "His habit of glorifying Allah saved him", verseRef: "37:143" },
        { term: "لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ", meaning: "He would have remained in its belly until Day of Resurrection", explanation: "Would have stayed until Judgment Day", verseRef: "37:144" },
        { term: "فَنَبَذْنَاهُ بِالْعَرَاءِ وَهُوَ سَقِيمٌ", meaning: "We cast him onto the open shore while he was ill", explanation: "Ejected onto barren shore, weakened", verseRef: "37:145" },
        { term: "وَأَنبَتْنَا عَلَيْهِ شَجَرَةً مِّن يَقْطِينٍ", meaning: "And We grew over him a gourd plant", explanation: "Gourd vine for shade and nourishment", verseRef: "37:146" },
        { term: "وَأَرْسَلْنَاهُ إِلَىٰ مِائَةِ أَلْفٍ أَوْ يَزِيدُونَ", meaning: "We sent him to a hundred thousand or more", explanation: "Sent to over 100,000 people", verseRef: "37:147" },
        { term: "فَآمَنُوا فَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ", meaning: "They believed, so We gave them enjoyment for a time", explanation: "His people believed - rare success! Punishment averted", verseRef: "37:148" }
      ]
    },

    refutingAngelsAsDaughters: {
      name: "Refuting Angels as Daughters",
      nameArabic: "رد دعوى الملائكة بنات",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَاسْتَفْتِهِمْ أَلِرَبِّكَ الْبَنَاتُ وَلَهُمُ الْبَنُونَ", meaning: "Ask them: Does your Lord have daughters while they have sons?", explanation: "Exposing hypocrisy - they dislike daughters but ascribe them to Allah", verseRef: "37:149" },
        { term: "أَمْ خَلَقْنَا الْمَلَائِكَةَ إِنَاثًا وَهُمْ شَاهِدُونَ", meaning: "Or did We create the angels as females while they were witnesses?", explanation: "Were they present at angels' creation?", verseRef: "37:150" },
        { term: "أَلَا إِنَّهُم مِّنْ إِفْكِهِمْ لَيَقُولُونَ", meaning: "Unquestionably, it is out of their falsehood that they say", explanation: "Their claim is pure fabrication", verseRef: "37:151" },
        { term: "وَلَدَ اللَّهُ وَإِنَّهُمْ لَكَاذِبُونَ", meaning: "Allah has begotten, and indeed, they are liars", explanation: "Claiming Allah has offspring is a lie", verseRef: "37:152" },
        { term: "أَصْطَفَى الْبَنَاتِ عَلَى الْبَنِينَ", meaning: "Has He chosen daughters over sons?", explanation: "Absurd - they prefer sons but say Allah prefers daughters?", verseRef: "37:153" },
        { term: "مَا لَكُمْ كَيْفَ تَحْكُمُونَ", meaning: "What is wrong with you? How do you judge?", explanation: "Rebuking their illogical judgment", verseRef: "37:154" },
        { term: "أَفَلَا تَذَكَّرُونَ", meaning: "Will you not be reminded?", explanation: "Call to reflect and remember", verseRef: "37:155" }
      ]
    },

    falseRelationshipWithJinn: {
      name: "False Relationship with Jinn",
      nameArabic: "الكذب في علاقة الجن",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَجَعَلُوا بَيْنَهُ وَبَيْنَ الْجِنَّةِ نَسَبًا", meaning: "And they have claimed between Him and the jinn a lineage", explanation: "Falsely claimed kinship between Allah and jinn", verseRef: "37:158" },
        { term: "وَلَقَدْ عَلِمَتِ الْجِنَّةُ إِنَّهُمْ لَمُحْضَرُونَ", meaning: "The jinn have already known that they will be brought [for judgment]", explanation: "Even jinn know they will be judged", verseRef: "37:158" },
        { term: "سُبْحَانَ اللَّهِ عَمَّا يَصِفُونَ", meaning: "Exalted is Allah above what they describe", explanation: "Allah is far above their false claims", verseRef: "37:159" },
        { term: "إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: "Except the chosen servants of Allah", explanation: "Sincere servants know the truth", verseRef: "37:160" }
      ]
    },

    disbelieversAndIdols: {
      name: "Disbelievers Cannot Mislead",
      nameArabic: "الكافرون لا يضلون",
      color: "#10B981",
      icon: "Shield",
      concepts: [
        { term: "فَإِنَّكُمْ وَمَا تَعْبُدُونَ", meaning: "So indeed, you and whatever you worship", explanation: "Addressing idolaters and their gods", verseRef: "37:161" },
        { term: "مَا أَنتُمْ عَلَيْهِ بِفَاتِنِينَ", meaning: "You cannot tempt [anyone] away from Him", explanation: "Cannot mislead anyone destined for truth", verseRef: "37:162" },
        { term: "إِلَّا مَنْ هُوَ صَالِ الْجَحِيمِ", meaning: "Except he who is to burn in Hellfire", explanation: "Only those destined for Hell are misled", verseRef: "37:163" }
      ]
    },

    angelsGlorifyingAllah: {
      name: "Angels Glorifying Allah",
      nameArabic: "تسبيح الملائكة",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَمَا مِنَّا إِلَّا لَهُ مَقَامٌ مَّعْلُومٌ", meaning: "There is not among us except that for him is a known position", explanation: "Angels have designated ranks and positions", verseRef: "37:164" },
        { term: "وَإِنَّا لَنَحْنُ الصَّافُّونَ", meaning: "And indeed, we are those who line up", explanation: "Angels arranged in rows for worship", verseRef: "37:165" },
        { term: "وَإِنَّا لَنَحْنُ الْمُسَبِّحُونَ", meaning: "And indeed, we are those who glorify", explanation: "Angels constantly glorify Allah", verseRef: "37:166" }
      ]
    },

    disbelieversDenial: {
      name: "Disbelievers' Denial and Regret",
      nameArabic: "إنكار الكافرين وندمهم",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَإِن كَانُوا لَيَقُولُونَ", meaning: "And indeed, they used to say", explanation: "Disbelievers claimed...", verseRef: "37:167" },
        { term: "لَوْ أَنَّ عِندَنَا ذِكْرًا مِّنَ الْأَوَّلِينَ", meaning: "If we had a message from the former peoples", explanation: "Claimed they would believe if given a scripture", verseRef: "37:168" },
        { term: "لَكُنَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: "We would have been the chosen servants of Allah", explanation: "Falsely claimed they would be sincere", verseRef: "37:169" },
        { term: "فَكَفَرُوا بِهِ", meaning: "But they disbelieved in it", explanation: "When Quran came, they rejected it", verseRef: "37:170" },
        { term: "فَسَوْفَ يَعْلَمُونَ", meaning: "They will come to know", explanation: "Warning of coming consequences", verseRef: "37:170" }
      ]
    },

    divinePromise: {
      name: "Divine Promise of Victory",
      nameArabic: "الوعد الإلهي بالنصر",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَلَقَدْ سَبَقَتْ كَلِمَتُنَا لِعِبَادِنَا الْمُرْسَلِينَ", meaning: "Our word has preceded for Our servants, the messengers", explanation: "Promise already decreed for prophets", verseRef: "37:171" },
        { term: "إِنَّهُمْ لَهُمُ الْمَنصُورُونَ", meaning: "Indeed, they will be those given victory", explanation: "Prophets will ultimately be victorious", verseRef: "37:172" },
        { term: "وَإِنَّ جُندَنَا لَهُمُ الْغَالِبُونَ", meaning: "And indeed, Our soldiers will be those who overcome", explanation: "Allah's army will prevail", verseRef: "37:173" },
        { term: "فَتَوَلَّ عَنْهُمْ حَتَّىٰ حِينٍ", meaning: "So turn away from them for a time", explanation: "Prophet told to be patient temporarily", verseRef: "37:174" },
        { term: "وَأَبْصِرْهُمْ فَسَوْفَ يُبْصِرُونَ", meaning: "And watch them, for they are going to see", explanation: "Prophet will witness their fate", verseRef: "37:175" }
      ]
    },

    closingGlorification: {
      name: "Closing Glorification",
      nameArabic: "التسبيح الختامي",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "أَفَبِعَذَابِنَا يَسْتَعْجِلُونَ", meaning: "Do they wish to hasten Our punishment?", explanation: "Fools who mock and rush toward punishment", verseRef: "37:176" },
        { term: "فَإِذَا نَزَلَ بِسَاحَتِهِمْ فَسَاءَ صَبَاحُ الْمُنذَرِينَ", meaning: "When it descends in their territory, evil is the morning of those warned", explanation: "Terrible morning awaits those who were warned", verseRef: "37:177" },
        { term: "وَتَوَلَّ عَنْهُمْ حَتَّىٰ حِينٍ", meaning: "Turn away from them for a time", explanation: "Repeated counsel for patience", verseRef: "37:178" },
        { term: "وَأَبْصِرْ فَسَوْفَ يُبْصِرُونَ", meaning: "And watch, for they are going to see", explanation: "Prophet will witness their end", verseRef: "37:179" },
        { term: "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ", meaning: "Exalted is your Lord, the Lord of might, above what they describe", explanation: "Allah transcends all false descriptions", verseRef: "37:180" },
        { term: "وَسَلَامٌ عَلَى الْمُرْسَلِينَ", meaning: "And peace upon the messengers", explanation: "Peace upon all prophets", verseRef: "37:181" },
        { term: "وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: "And praise to Allah, Lord of the worlds", explanation: "Surah closes with praise of Allah", verseRef: "37:182" }
      ]
    }
  },

  relationships: [
    { from: "الصافات صفاً", to: "إن إلهكم لواحد", type: "testimony", description: "Angels ranged in rows testify to Allah's Oneness" },
    { from: "شهاب ثاقب", to: "يسمعون الملأ الأعلى", type: "protection", description: "Shooting stars prevent devils from eavesdropping" },
    { from: "طين لازب", to: "أهم أشد خلقاً", type: "humility", description: "Humans from clay - not harder to create than heavens" },
    { from: "ألفوا آباءهم ضالين", to: "يهرعون", type: "blind-following", description: "Hastening to follow misguided ancestors" },
    { from: "أرى في المنام أني أذبحك", to: "افعل ما تؤمر", type: "submission", description: "Father's vision met with son's willing submission" },
    { from: "فديناه بذبح عظيم", to: "صدقت الرؤيا", type: "divine-intervention", description: "Test passed, ram substituted - origin of Qurbani" },
    { from: "كان من المسبحين", to: "نبذناه بالعراء", type: "salvation", description: "Yunus's habit of glorification led to rescue" },
    { from: "فآمنوا", to: "فمتعناهم", type: "acceptance", description: "Yunus's people believed - rare prophetic success" },
    { from: "لربك البنات ولهم البنون", to: "كيف تحكمون", type: "logical-refutation", description: "Exposing hypocrisy of ascribing daughters to Allah" },
    { from: "إنهم لهم المنصورون", to: "جندنا لهم الغالبون", type: "divine-promise", description: "Prophets and their followers will ultimately prevail" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Angels in Rows", verses: "37:1-10", description: "Opening oaths - angels testifying to Tawheed, protection of heavens" },
      { stage: 2, theme: "Creation Argument", verses: "37:11-21", description: "Humans from clay, disbelievers mock despite signs" },
      { stage: 3, theme: "Judgment Day Scenes", verses: "37:22-39", description: "Gathering wrongdoers, questioning, mutual blame, punishment for arrogance" },
      { stage: 4, theme: "Paradise Description", verses: "37:40-61", description: "Rewards for believers: gardens, drinks, companions, eternal bliss" },
      { stage: 5, theme: "Hell Description", verses: "37:62-68", description: "Tree of Zaqqum, boiling drink, cycle of punishment" },
      { stage: 6, theme: "Blind Following", verses: "37:69-74", description: "Following misguided ancestors, warners sent but rejected" },
      { stage: 7, theme: "Prophet Nuh", verses: "37:75-82", description: "Nuh's prayer answered, saved from flood, disbelievers drowned" },
      { stage: 8, theme: "Prophet Ibrahim - Part 1", verses: "37:83-98", description: "Sound heart, questioning idols, smashing them, thrown in fire" },
      { stage: 9, theme: "Ibrahim's Sacrifice", verses: "37:99-113", description: "Dua for son, vision of sacrifice, test passed, ram substituted, Ishaq promised" },
      { stage: 10, theme: "Prophets Musa and Harun", verses: "37:114-122", description: "Saved from distress, given Torah, guided, honored" },
      { stage: 11, theme: "Prophet Ilyas", verses: "37:123-132", description: "Called to taqwa, condemned Ba'l worship, rejected but honored" },
      { stage: 12, theme: "Prophet Lut", verses: "37:133-138", description: "Family saved, wife remained, people destroyed, ruins as signs" },
      { stage: 13, theme: "Prophet Yunus", verses: "37:139-148", description: "Fled, swallowed by whale, glorified Allah, saved, people believed" },
      { stage: 14, theme: "Refuting False Claims", verses: "37:149-166", description: "Angels not daughters, no kinship with jinn, angels' worship" },
      { stage: 15, theme: "Promise of Victory", verses: "37:167-179", description: "Disbelievers' false claims, divine promise to prophets" },
      { stage: 16, theme: "Closing Glorification", verses: "37:180-182", description: "Exalting Allah, peace on messengers, praise to Lord of worlds" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Submit to divine will", how: "Like Ibrahim and Ismail - trust and obey Allah's commands even when difficult", verse: "37:102-103" },
      { principle: "Question blind traditions", how: "Like Ibrahim questioned idol worship - verify inherited beliefs", verse: "37:85-87" },
      { principle: "Maintain dhikr habitually", how: "Yunus was saved because he was من المسبحين - always glorifying", verse: "37:143-144" },
      { principle: "Be patient in trials", how: "All prophets faced rejection but Allah honored them", verse: "37:171-173" },
      { principle: "Choose companions wisely", how: "The believer in Paradise almost led astray by skeptic friend", verse: "37:51-57" },
      { principle: "Avoid blind following", how: "Don't rush after misguided ancestors - verify with reason", verse: "37:69-70" },
      { principle: "Remember end results", how: "Ruins of Lut's people visible - signs for reflection", verse: "37:137-138" },
      { principle: "Trust Allah's promises", how: "Victory decreed for believers - persevere through hardship", verse: "37:172-173" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Divine Order and Prophetic Sacrifice",
    insight: "As-Saffat opens with angels ranged in perfect rows (صَافَّاتٍ), establishing cosmic order and divine hierarchy. This imagery of orderly submission frames the entire surah's message: true success comes through submitting to Allah's order. The most powerful illustration is Ibrahim's sacrifice - when both father and son فَلَمَّا أَسْلَمَا (both submitted), the trial was passed. The surah mentions six prophets with the distinctive phrase 'سَلَامٌ عَلَىٰ' (peace upon): Nuh, Ibrahim, Musa, Harun, Ilyas - honoring those who submitted despite trials. Uniquely, Yunus's people are the only nation mentioned in the Quran that believed collectively and were spared punishment (37:148). The surah also refutes polytheistic beliefs about angels being Allah's daughters and jinn having kinship with Allah, emphasizing pure Tawheed. It closes with the most comprehensive ending formula in the Quran: glorifying Allah (37:180), sending peace upon all messengers (37:181), and praising the Lord of the worlds (37:182)."
  },

  historicalContext: {
    note: "This Makkan surah addresses the polytheistic beliefs of Quraysh who considered angels to be Allah's daughters (a claim they found acceptable while despising daughters for themselves), and who claimed kinship between Allah and jinn. The surah was revealed during a period of intense persecution, offering comfort through prophet stories - all faced rejection but were ultimately honored. Ibrahim's sacrifice narrative here is the most detailed in the Quran and forms the basis of Eid al-Adha traditions. The debate over whether the sacrificed son was Ismail or Ishaq is noted by scholars, with the majority view being Ismail based on the context (Ishaq is announced separately in verse 112)."
  },

  linguisticFeatures: {
    features: [
      { feature: "وَالصَّافَّاتِ صَفًّا", example: "Cognate accusative", effect: "Intensifies meaning - those who truly stand in rows" },
      { feature: "فَالزَّاجِرَاتِ / فَالتَّالِيَاتِ", example: "Triple oath structure", effect: "Builds to conclusion of Tawheed" },
      { feature: "سَلَامٌ عَلَىٰ", example: "Repeated 6 times", effect: "Unique honoring formula for prophets" },
      { feature: "حَلِيم", example: "Describing Ismail", effect: "Foreshadows patience during sacrifice" },
      { feature: "قَلْبٍ سَلِيم", example: "Sound/pure heart", effect: "Key to Ibrahim's success - spiritual purity" },
      { feature: "الْبَلَاءُ الْمُبِينُ", example: "Clear trial", effect: "Emphasizes test was obvious and great" },
      { feature: "مِنَ الْمُسَبِّحِينَ", example: "Habitual pattern", effect: "Those who constantly glorify - saved Yunus" },
      { feature: "يَقْطِين", example: "Gourd/squash plant", effect: "Only plant specifically named in Quran for healing" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "37:6-7", topic: "Astronomy", note: "Stars as adornment and protection - dual function in creation" },
      { verse: "37:10", topic: "Meteors", note: "شِهَابٌ ثَاقِب (piercing flame) - describes shooting stars" },
      { verse: "37:11", topic: "Human origin", note: "طِينٍ لَّازِب (sticky clay) - human creation from clay minerals" },
      { verse: "37:146", topic: "Medicinal plants", note: "Gourd plant (يَقْطِين) for recovery - known for healing properties" }
    ]
  },

  prophetsMentioned: {
    list: [
      { name: "Nuh", verses: "37:75-82", role: "Prayed, saved from flood, honored with 'Salam'" },
      { name: "Ibrahim", verses: "37:83-113", role: "Sound heart, broke idols, survived fire, sacrifice test" },
      { name: "Ismail", verses: "37:101-107", role: "Forbearing son, willing to be sacrificed, patient" },
      { name: "Ishaq", verses: "37:112-113", role: "Prophet promised as additional blessing to Ibrahim" },
      { name: "Musa", verses: "37:114-122", role: "Given Torah, saved people from Pharaoh" },
      { name: "Harun", verses: "37:114-122", role: "Prophet alongside Musa, shared mission" },
      { name: "Ilyas (Elijah)", verses: "37:123-132", role: "Called to taqwa, condemned Ba'l worship" },
      { name: "Lut", verses: "37:133-138", role: "Saved with family, people destroyed as warning" },
      { name: "Yunus", verses: "37:139-148", role: "Fled, swallowed by whale, saved by dhikr, people believed" }
    ]
  },

  keyVerses: {
    verses: [
      { verse: "37:4", theme: "Tawheed", text: "Indeed, your God is One" },
      { verse: "37:84", theme: "Pure Heart", text: "When he came to his Lord with a sound heart" },
      { verse: "37:102", theme: "Submission", text: "Do as you are commanded; you will find me patient" },
      { verse: "37:107", theme: "Ransom", text: "We ransomed him with a great sacrifice" },
      { verse: "37:143-144", theme: "Salvation through Dhikr", text: "Had he not been of those who glorify Allah..." },
      { verse: "37:148", theme: "Prophetic Success", text: "They believed, so We gave them enjoyment" },
      { verse: "37:172-173", theme: "Divine Promise", text: "Indeed, they will be victorious; Our soldiers will overcome" },
      { verse: "37:180-182", theme: "Closing Formula", text: "Exalted is your Lord... Peace upon messengers... Praise to Lord of worlds" }
    ]
  },

  famousDuas: {
    duas: [
      {
        arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
        transliteration: "Rabbi hab li minas-salihin",
        meaning: "My Lord, grant me [a child] from among the righteous",
        context: "Ibrahim's dua for righteous offspring",
        verse: "37:100",
        benefit: "Supplication for righteous children"
      },
      {
        arabic: "إِنِّي ذَاهِبٌ إِلَىٰ رَبِّي سَيَهْدِينِ",
        transliteration: "Inni dhahibun ila Rabbi sayahdin",
        meaning: "Indeed, I am going to my Lord; He will guide me",
        context: "Ibrahim's trust in Allah during migration",
        verse: "37:99",
        benefit: "Expression of trust during life changes"
      }
    ]
  }
};

export default ONTOLOGY;
