/**
 * Surah Al-Mu'minun (23) - Ontology of Quranic Concepts
 * The Believers - 118 Ayahs, Makki
 *
 * Theme: Characteristics of successful believers, human creation stages,
 *        stories of prophets, Day of Judgment, and ultimate success criteria
 *
 * Named after the believers (al-mu'minun) mentioned in the opening verse.
 * Opens with "Successful indeed are the believers" - defining true success.
 */

export const ONTOLOGY = {
  surahId: 23,
  surahName: "Al-Mu'minun",
  surahNameArabic: "المؤمنون",
  revelationType: "Makki",
  totalAyahs: 118,

  categories: {
    believersQualities: {
      name: "Qualities of Successful Believers",
      nameArabic: "صفات المؤمنين الفائزين",
      color: "#22C55E",
      icon: "Star",
      concepts: [
        { term: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ", meaning: "Successful indeed are the believers", explanation: "Falah = comprehensive success (spiritual, worldly, eternal). Past tense (aflaha) indicates certainty - their success is guaranteed", verseRef: "23:1" },
        { term: "خَاشِعُونَ فِي صَلَاتِهِمْ", meaning: "Humble in their prayers", explanation: "Khushu' = heart focus + body stillness. Not just praying, but being fully present with Allah", verseRef: "23:2" },
        { term: "عَنِ اللَّغْوِ مُعْرِضُونَ", meaning: "Turning away from vain talk", explanation: "Laghw = useless speech, gossip, anything without benefit. True believers avoid wasting time", verseRef: "23:3" },
        { term: "لِلزَّكَاةِ فَاعِلُونَ", meaning: "Actively giving zakah", explanation: "Fa'ilun = doers, not just givers. Active purification through charity", verseRef: "23:4" },
        { term: "لِفُرُوجِهِمْ حَافِظُونَ", meaning: "Guarding their private parts", explanation: "Sexual purity - except with spouses. Protecting chastity is a sign of faith", verseRef: "23:5-6" },
        { term: "لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ", meaning: "Faithful to trusts and promises", explanation: "Amanah = trusts (responsibilities). 'Ahd = covenants. Believers honor both", verseRef: "23:8" },
        { term: "عَلَىٰ صَلَوَاتِهِمْ يُحَافِظُونَ", meaning: "Guarding their prayers", explanation: "Not just praying but GUARDING prayers - timing, quality, consistency", verseRef: "23:9" },
        { term: "هُمُ الْوَارِثُونَ", meaning: "They are the inheritors", explanation: "Inheritors of Firdaus - highest level of Paradise. Ultimate inheritance", verseRef: "23:10-11" }
      ]
    },

    humanCreation: {
      name: "Stages of Human Creation",
      nameArabic: "مراحل خلق الإنسان",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "سُلَالَةٍ مِّن طِينٍ", meaning: "Extract of clay", explanation: "Sulalah = essence, extract. Human origin from earth's elements", verseRef: "23:12" },
        { term: "نُطْفَةً فِي قَرَارٍ مَّكِينٍ", meaning: "Drop in a secure lodging", explanation: "Nutfah = tiny drop (sperm). Qarar makeen = womb as secure dwelling", verseRef: "23:13" },
        { term: "عَلَقَةً", meaning: "Clinging clot", explanation: "'Alaqah = clot that clings. Embryonic stage attached to uterine wall", verseRef: "23:14" },
        { term: "مُضْغَةً", meaning: "Chewed substance", explanation: "Mudghah = like chewed meat. Embryo at 4 weeks resembles this", verseRef: "23:14" },
        { term: "عِظَامًا", meaning: "Bones", explanation: "Skeleton formation - structural framework develops", verseRef: "23:14" },
        { term: "لَحْمًا", meaning: "Flesh", explanation: "Muscles covering bones. Lahm wraps around 'izam", verseRef: "23:14" },
        { term: "خَلْقًا آخَرَ", meaning: "Another creation", explanation: "Soul breathed in - transformation from biological to spiritual being", verseRef: "23:14" },
        { term: "فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ", meaning: "Blessed is Allah, best of creators", explanation: "Exclamation of awe at divine creative power. Ahsan = most excellent", verseRef: "23:14" }
      ]
    },

    deathAndResurrection: {
      name: "Death and Resurrection",
      nameArabic: "الموت والبعث",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "ثُمَّ إِنَّكُم بَعْدَ ذَٰلِكَ لَمَيِّتُونَ", meaning: "Then after that you will die", explanation: "Certainty of death - every soul will taste it", verseRef: "23:15" },
        { term: "ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ تُبْعَثُونَ", meaning: "Then on Day of Resurrection you will be raised", explanation: "Resurrection guaranteed - same power that created can recreate", verseRef: "23:16" },
        { term: "سَبْعَ طَرَائِقَ", meaning: "Seven pathways/heavens", explanation: "Seven heavens above - cosmic architecture showing Allah's power", verseRef: "23:17" }
      ]
    },

    naturalSigns: {
      name: "Signs in Nature",
      nameArabic: "الآيات في الطبيعة",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "مَاءً بِقَدَرٍ", meaning: "Water in measure", explanation: "Rain sent in precise amounts - not too much, not too little", verseRef: "23:18" },
        { term: "جَنَّاتٍ مِّن نَّخِيلٍ وَأَعْنَابٍ", meaning: "Gardens of palms and grapes", explanation: "Date palms and vineyards - staple crops showing divine provision", verseRef: "23:19" },
        { term: "شَجَرَةً تَخْرُجُ مِن طُورِ سَيْنَاءَ", meaning: "Tree from Mount Sinai", explanation: "Olive tree - produces oil for eating and anointing. Blessed tree", verseRef: "23:20" },
        { term: "الْأَنْعَامِ لَعِبْرَةً", meaning: "Cattle - a lesson", explanation: "Livestock provide milk, meat, transport - signs for reflection", verseRef: "23:21" },
        { term: "الْفُلْكِ وَالْأَنْعَامِ تُرْكَبُونَ", meaning: "Ships and animals you ride", explanation: "Transportation by sea and land - divine facilitation of travel", verseRef: "23:22" }
      ]
    },

    prophetNuh: {
      name: "Story of Prophet Nuh (Noah)",
      nameArabic: "قصة نوح عليه السلام",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "نُوحًا إِلَىٰ قَوْمِهِ", meaning: "Nuh to his people", explanation: "950 years of patient da'wah to his nation", verseRef: "23:23" },
        { term: "مَا هَٰذَا إِلَّا بَشَرٌ مِّثْلُكُمْ", meaning: "This is only a human like you", explanation: "Common rejection - prophets dismissed as mere mortals", verseRef: "23:24" },
        { term: "يُرِيدُ أَن يَتَفَضَّلَ عَلَيْكُمْ", meaning: "He wants superiority over you", explanation: "Accusation of ulterior motives - classic disbeliever argument", verseRef: "23:24" },
        { term: "بِهِ جِنَّةٌ", meaning: "Possessed by jinn", explanation: "Calling prophets insane - another common dismissal", verseRef: "23:25" },
        { term: "اصْنَعِ الْفُلْكَ بِأَعْيُنِنَا", meaning: "Build the ark under Our eyes", explanation: "Divine instruction to build, with Allah's supervision and protection", verseRef: "23:27" },
        { term: "فَإِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ", meaning: "When Our command comes and oven overflows", explanation: "Sign of flood's beginning - water from earth and sky", verseRef: "23:27" },
        { term: "مُنزَلًا مُّبَارَكًا", meaning: "Blessed landing place", explanation: "Safe arrival after flood - new beginning for humanity", verseRef: "23:29" }
      ]
    },

    otherProphets: {
      name: "Stories of Other Prophets",
      nameArabic: "قصص الأنبياء الآخرين",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "قَرْنًا آخَرِينَ", meaning: "Another generation", explanation: "After Nuh's people, new nations tested", verseRef: "23:31" },
        { term: "رَسُولًا مِّنْهُمْ", meaning: "A messenger from among them", explanation: "Each nation received messenger from their own - relatable, understandable", verseRef: "23:32" },
        { term: "مُتْرَفُوهَا", meaning: "Their affluent ones", explanation: "Wealthy elite typically lead rejection - arrogance of privilege", verseRef: "23:33" },
        { term: "مُوسَىٰ وَهَارُونَ", meaning: "Musa and Harun", explanation: "Brothers sent together to Pharaoh - support in prophethood", verseRef: "23:45" },
        { term: "سُلْطَانٍ مُّبِينٍ", meaning: "Clear authority", explanation: "Given miracles as clear proofs - undeniable evidence", verseRef: "23:45" },
        { term: "فَاسْتَكْبَرُوا", meaning: "But they were arrogant", explanation: "Istikbar = arrogance. Root of all rejection is pride", verseRef: "23:46" },
        { term: "عِيسَى ابْنَ مَرْيَمَ", meaning: "Isa son of Maryam", explanation: "Jesus identified by his mother - miraculous birth affirmed", verseRef: "23:50" },
        { term: "آيَةً", meaning: "A sign", explanation: "'Isa and Maryam themselves are signs of Allah's power", verseRef: "23:50" },
        { term: "رَبْوَةٍ ذَاتِ قَرَارٍ وَمَعِينٍ", meaning: "Elevated land with water", explanation: "High ground with springs - where Maryam was sheltered", verseRef: "23:50" }
      ]
    },

    unityOfMessage: {
      name: "Unity of Prophetic Message",
      nameArabic: "وحدة رسالة الأنبياء",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "إِنَّ هَٰذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً", meaning: "This nation of yours is one nation", explanation: "All believers throughout history form ONE ummah", verseRef: "23:52" },
        { term: "وَأَنَا رَبُّكُمْ فَاتَّقُونِ", meaning: "And I am your Lord, so fear Me", explanation: "One God, one message, one community of believers", verseRef: "23:52" },
        { term: "فَتَقَطَّعُوا أَمْرَهُم بَيْنَهُمْ زُبُرًا", meaning: "They divided their affair into sects", explanation: "Tragedy of sectarianism - breaking the unity Allah commanded", verseRef: "23:53" },
        { term: "كُلُّ حِزْبٍ بِمَا لَدَيْهِمْ فَرِحُونَ", meaning: "Each group rejoicing in what it has", explanation: "Each sect proud of their version - blind to unity", verseRef: "23:53" }
      ]
    },

    wealthAndChildren: {
      name: "Tests of Wealth and Children",
      nameArabic: "فتنة المال والولد",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "نُمِدُّهُم بِهِ مِن مَّالٍ وَبَنِينَ", meaning: "We extend to them wealth and children", explanation: "Wealth and children given as test - not necessarily blessing", verseRef: "23:55" },
        { term: "نُسَارِعُ لَهُمْ فِي الْخَيْرَاتِ", meaning: "We hasten good things to them?", explanation: "Rhetorical - material abundance doesn't mean divine approval", verseRef: "23:56" },
        { term: "بَل لَّا يَشْعُرُونَ", meaning: "But they perceive not", explanation: "Unaware they're being tested - istidraj (gradual destruction)", verseRef: "23:56" }
      ]
    },

    trueBelieverQualities: {
      name: "Qualities That Earn Paradise",
      nameArabic: "صفات أهل الجنة",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "مِنْ خَشْيَةِ رَبِّهِم مُّشْفِقُونَ", meaning: "Fearful of their Lord with awe", explanation: "Mushfiqun = reverential fear mixed with love, not terror", verseRef: "23:57" },
        { term: "بِآيَاتِ رَبِّهِمْ يُؤْمِنُونَ", meaning: "Believe in their Lord's signs", explanation: "Faith in divine signs - Quran, creation, messengers", verseRef: "23:58" },
        { term: "بِرَبِّهِمْ لَا يُشْرِكُونَ", meaning: "Associate none with their Lord", explanation: "Pure tawheed - no partners, no intermediaries in worship", verseRef: "23:59" },
        { term: "يُؤْتُونَ مَا آتَوا وَّقُلُوبُهُمْ وَجِلَةٌ", meaning: "Give what they give while hearts are fearful", explanation: "Give charity yet fear it won't be accepted - highest sincerity", verseRef: "23:60" },
        { term: "أُولَٰئِكَ يُسَارِعُونَ فِي الْخَيْرَاتِ", meaning: "They hasten to good deeds", explanation: "Racing to do good - not delayed or reluctant", verseRef: "23:61" }
      ]
    },

    divineJustice: {
      name: "Divine Justice and Accountability",
      nameArabic: "العدل الإلهي والحساب",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَا", meaning: "We burden no soul beyond its capacity", explanation: "Divine mercy in obligations - only what one can bear", verseRef: "23:62" },
        { term: "كِتَابٌ يَنطِقُ بِالْحَقِّ", meaning: "A record that speaks truth", explanation: "Book of deeds - records everything accurately, nothing hidden", verseRef: "23:62" },
        { term: "وَهُمْ لَا يُظْلَمُونَ", meaning: "And they will not be wronged", explanation: "Perfect justice - no one treated unfairly", verseRef: "23:62" }
      ]
    },

    disbelieversState: {
      name: "State of the Heedless",
      nameArabic: "حال الغافلين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قُلُوبُهُمْ فِي غَمْرَةٍ", meaning: "Hearts in heedlessness", explanation: "Ghamrah = drowning/covering. Hearts submerged in negligence", verseRef: "23:63" },
        { term: "أَعْمَالٌ مِّن دُونِ ذَٰلِكَ", meaning: "Deeds other than that", explanation: "Busy with worldly actions, missing what truly matters", verseRef: "23:63" },
        { term: "إِذَا أَخَذْنَا مُتْرَفِيهِم بِالْعَذَابِ", meaning: "When We seize their affluent with punishment", explanation: "The wealthy finally face consequences - no escape", verseRef: "23:64" },
        { term: "يَجْأَرُونَ", meaning: "They cry out", explanation: "Screaming in panic - when punishment arrives", verseRef: "23:64" },
        { term: "لَا تَجْأَرُوا الْيَوْمَ", meaning: "Do not cry out today", explanation: "Too late for screams - time for action has passed", verseRef: "23:65" },
        { term: "قَدْ كَانَتْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ", meaning: "My verses were recited to you", explanation: "They had the message - rejection was their choice", verseRef: "23:66" },
        { term: "فَكُنتُمْ عَلَىٰ أَعْقَابِكُمْ تَنكِصُونَ", meaning: "You turned back on your heels", explanation: "Tankisun = turning away backwards. Retreat from truth", verseRef: "23:66" }
      ]
    },

    prophetRejection: {
      name: "Why They Rejected the Prophet",
      nameArabic: "أسباب رفض النبي",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "أَفَلَمْ يَدَّبَّرُوا الْقَوْلَ", meaning: "Have they not pondered the Word?", explanation: "Tadabbur = deep reflection. They refused to think deeply", verseRef: "23:68" },
        { term: "أَمْ جَاءَهُم مَّا لَمْ يَأْتِ آبَاءَهُمُ الْأَوَّلِينَ", meaning: "Or came to them what didn't come to their forefathers?", explanation: "Message is the same - continuation of prophethood", verseRef: "23:68" },
        { term: "أَمْ لَمْ يَعْرِفُوا رَسُولَهُمْ", meaning: "Or do they not recognize their messenger?", explanation: "They knew Muhammad's character - Al-Amin (trustworthy)", verseRef: "23:69" },
        { term: "أَمْ يَقُولُونَ بِهِ جِنَّةٌ", meaning: "Or do they say he's possessed?", explanation: "Insanity accusation - desperate denial of obvious truth", verseRef: "23:70" },
        { term: "بَلْ جَاءَهُم بِالْحَقِّ", meaning: "Rather, he brought them the truth", explanation: "Simple reality - he brought truth they couldn't accept", verseRef: "23:70" },
        { term: "وَأَكْثَرُهُمْ لِلْحَقِّ كَارِهُونَ", meaning: "And most of them hate the truth", explanation: "Karahiyyah = hatred. Truth threatens their lifestyle", verseRef: "23:70" }
      ]
    },

    ifTruthFollowedDesires: {
      name: "If Truth Followed Desires",
      nameArabic: "لو اتبع الحق أهواءهم",
      color: "#8B5CF6",
      icon: "Eye",
      concepts: [
        { term: "لَوِ اتَّبَعَ الْحَقُّ أَهْوَاءَهُمْ", meaning: "If truth followed their desires", explanation: "Hypothetical - what if reality bent to whims?", verseRef: "23:71" },
        { term: "لَفَسَدَتِ السَّمَاوَاتُ وَالْأَرْضُ", meaning: "Heavens and earth would corrupt", explanation: "Cosmic chaos - universe requires objective truth, not subjective desires", verseRef: "23:71" },
        { term: "بَلْ أَتَيْنَاهُم بِذِكْرِهِمْ", meaning: "Rather We brought them their reminder", explanation: "Dhikr = reminder, honor, mention. Quran elevates them", verseRef: "23:71" },
        { term: "فَهُمْ عَن ذِكْرِهِم مُّعْرِضُونَ", meaning: "But from their reminder they turn away", explanation: "Rejecting their own honor and elevation", verseRef: "23:71" }
      ]
    },

    prophetsAskNothing: {
      name: "Prophet Asks No Reward",
      nameArabic: "النبي لا يطلب أجراً",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "أَمْ تَسْأَلُهُمْ خَرْجًا", meaning: "Or do you ask them for payment?", explanation: "Rhetorical - Prophet seeks no worldly reward", verseRef: "23:72" },
        { term: "فَخَرَاجُ رَبِّكَ خَيْرٌ", meaning: "The reward of your Lord is better", explanation: "Divine reward surpasses any worldly payment", verseRef: "23:72" },
        { term: "وَهُوَ خَيْرُ الرَّازِقِينَ", meaning: "And He is best of providers", explanation: "Allah's provision > any human payment", verseRef: "23:72" },
        { term: "صِرَاطٍ مُّسْتَقِيمٍ", meaning: "Straight path", explanation: "The path Prophet calls to - direct route to Allah", verseRef: "23:73" }
      ]
    },

    arrogantDisbelievers: {
      name: "The Arrogant Rejectors",
      nameArabic: "المستكبرون الرافضون",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَا يُؤْمِنُونَ بِالْآخِرَةِ", meaning: "Don't believe in Hereafter", explanation: "Root problem - denying accountability emboldens sin", verseRef: "23:74" },
        { term: "عَنِ الصِّرَاطِ لَنَاكِبُونَ", meaning: "From the path, deviating", explanation: "Nakib = one who turns aside. Straying from guidance", verseRef: "23:74" },
        { term: "لَوْ رَحِمْنَاهُمْ وَكَشَفْنَا مَا بِهِم مِّن ضُرٍّ", meaning: "If We showed mercy and removed their hardship", explanation: "Even if difficulty removed, they wouldn't change", verseRef: "23:75" },
        { term: "لَّلَجُّوا فِي طُغْيَانِهِمْ يَعْمَهُونَ", meaning: "They'd persist in transgression, wandering blindly", explanation: "Tughyan = transgression. 'Amah = blindness. Persistent rebellion", verseRef: "23:75" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameArabic: "الصفات الإلهية",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ", meaning: "Knower of unseen and witnessed", explanation: "Allah knows hidden and apparent - complete knowledge", verseRef: "23:92" },
        { term: "فَتَعَالَىٰ عَمَّا يُشْرِكُونَ", meaning: "Exalted above what they associate", explanation: "Allah transcends all partners/comparisons", verseRef: "23:92" },
        { term: "رَبُّ الْعَرْشِ الْكَرِيمِ", meaning: "Lord of the noble Throne", explanation: "Sovereignty over all creation - Al-'Arsh represents authority", verseRef: "23:116" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: "There is no god but He", explanation: "Core declaration of tawheed - absolute oneness", verseRef: "23:116" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment Scenes",
      nameArabic: "مشاهد يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "حَتَّىٰ إِذَا جَاءَ أَحَدَهُمُ الْمَوْتُ", meaning: "Until when death comes to one of them", explanation: "Moment of death - too late for repentance", verseRef: "23:99" },
        { term: "رَبِّ ارْجِعُونِ", meaning: "My Lord, send me back", explanation: "Desperate plea to return - second chance requested", verseRef: "23:99" },
        { term: "لَعَلِّي أَعْمَلُ صَالِحًا", meaning: "Perhaps I may do good", explanation: "Promise to do good if returned - but too late", verseRef: "23:100" },
        { term: "كَلَّا", meaning: "No!", explanation: "Emphatic denial - no return, no second chance", verseRef: "23:100" },
        { term: "بَرْزَخٌ", meaning: "Barrier (Barzakh)", explanation: "Barrier between death and resurrection - no crossing back", verseRef: "23:100" },
        { term: "فَإِذَا نُفِخَ فِي الصُّورِ", meaning: "When blown in the Trumpet", explanation: "Resurrection begins - all will rise", verseRef: "23:101" },
        { term: "فَلَا أَنسَابَ بَيْنَهُمْ", meaning: "No relationships between them", explanation: "Lineage won't matter - only deeds count", verseRef: "23:101" },
        { term: "وَلَا يَتَسَاءَلُونَ", meaning: "Nor will they ask about each other", explanation: "Too consumed with own fate to inquire about others", verseRef: "23:101" },
        { term: "مَن ثَقُلَتْ مَوَازِينُهُ", meaning: "Whose scales are heavy", explanation: "Good deeds outweigh bad - success", verseRef: "23:102" },
        { term: "فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ", meaning: "Those are the successful", explanation: "True falah - eternal success, Paradise", verseRef: "23:102" },
        { term: "مَنْ خَفَّتْ مَوَازِينُهُ", meaning: "Whose scales are light", explanation: "Bad deeds outweigh good - failure", verseRef: "23:103" },
        { term: "خَسِرُوا أَنفُسَهُمْ", meaning: "Lost their souls", explanation: "Ultimate loss - losing oneself to Hell", verseRef: "23:103" },
        { term: "فِي جَهَنَّمَ خَالِدُونَ", meaning: "In Hell forever", explanation: "Eternal punishment - no exit", verseRef: "23:103" }
      ]
    },

    hellDescriptions: {
      name: "Descriptions of Hell",
      nameArabic: "وصف جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "تَلْفَحُ وُجُوهَهُمُ النَّارُ", meaning: "Fire will sear their faces", explanation: "Talfahh = scorching heat. Faces directly burned", verseRef: "23:104" },
        { term: "وَهُمْ فِيهَا كَالِحُونَ", meaning: "And they will be grimacing", explanation: "Kalih = grim expression from severe pain", verseRef: "23:104" },
        { term: "أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ", meaning: "Were My verses not recited to you?", explanation: "Divine questioning - they had the message", verseRef: "23:105" },
        { term: "فَكُنتُم بِهَا تُكَذِّبُونَ", meaning: "But you denied them", explanation: "Their denial led to this outcome", verseRef: "23:105" },
        { term: "رَبَّنَا غَلَبَتْ عَلَيْنَا شِقْوَتُنَا", meaning: "Our Lord, our wretchedness overcame us", explanation: "Admission of being overwhelmed by misfortune/desires", verseRef: "23:106" },
        { term: "وَكُنَّا قَوْمًا ضَالِّينَ", meaning: "And we were a people astray", explanation: "Finally acknowledging they were lost", verseRef: "23:106" },
        { term: "رَبَّنَا أَخْرِجْنَا مِنْهَا", meaning: "Our Lord, remove us from it", explanation: "Plea for escape - but response is harsh", verseRef: "23:107" },
        { term: "اخْسَئُوا فِيهَا وَلَا تُكَلِّمُونِ", meaning: "Remain despised and don't speak to Me", explanation: "Ikhsa'u = be humiliated like dogs. Silenced forever", verseRef: "23:108" }
      ]
    },

    mockersOfBelievers: {
      name: "Those Who Mocked Believers",
      nameArabic: "الذين سخروا من المؤمنين",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "كُنتُمْ مِنْهُمْ تَضْحَكُونَ", meaning: "You used to laugh at them", explanation: "Mockers in this world become mocked eternally", verseRef: "23:110" },
        { term: "حَتَّىٰ أَنسَوْكُمْ ذِكْرِي", meaning: "Until they made you forget My remembrance", explanation: "Mocking believers distracted from remembering Allah", verseRef: "23:110" },
        { term: "إِنِّي جَزَيْتُهُمُ الْيَوْمَ بِمَا صَبَرُوا", meaning: "I have rewarded them today for their patience", explanation: "Patient believers finally vindicated", verseRef: "23:111" },
        { term: "أَنَّهُمْ هُمُ الْفَائِزُونَ", meaning: "They are the successful ones", explanation: "Ultimate winners - those who were mocked", verseRef: "23:111" }
      ]
    },

    timeInWorld: {
      name: "Time in the World",
      nameArabic: "الزمن في الدنيا",
      color: "#8B5CF6",
      icon: "Moon",
      concepts: [
        { term: "كَمْ لَبِثْتُمْ فِي الْأَرْضِ", meaning: "How long did you stay on earth?", explanation: "Question to those in Hell about worldly duration", verseRef: "23:112" },
        { term: "يَوْمًا أَوْ بَعْضَ يَوْمٍ", meaning: "A day or part of a day", explanation: "Worldly life feels like moments compared to eternity", verseRef: "23:113" },
        { term: "فَاسْأَلِ الْعَادِّينَ", meaning: "Ask those who count", explanation: "Ask the angels who keep records", verseRef: "23:113" },
        { term: "إِن لَّبِثْتُمْ إِلَّا قَلِيلًا", meaning: "You stayed only a little", explanation: "Brief worldly stay - eternal consequences", verseRef: "23:114" },
        { term: "لَّوْ أَنَّكُمْ كُنتُمْ تَعْلَمُونَ", meaning: "If only you had known", explanation: "Regret for not realizing brevity of life", verseRef: "23:114" }
      ]
    },

    purposeOfCreation: {
      name: "Purpose of Creation",
      nameArabic: "الحكمة من الخلق",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا", meaning: "Did you think We created you uselessly?", explanation: "'Abath = purposeless play. Life has meaning", verseRef: "23:115" },
        { term: "وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ", meaning: "And that you would not be returned to Us?", explanation: "Return to Allah is certain - accountability awaits", verseRef: "23:115" },
        { term: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ", meaning: "Exalted is Allah, the True King", explanation: "Al-Malik Al-Haqq - the Only Real Sovereign", verseRef: "23:116" }
      ]
    },

    closingDua: {
      name: "The Closing Supplication",
      nameArabic: "الدعاء الختامي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَّبِّ اغْفِرْ وَارْحَمْ", meaning: "My Lord, forgive and have mercy", explanation: "Seeking both forgiveness and mercy - complete protection", verseRef: "23:118" },
        { term: "وَأَنتَ خَيْرُ الرَّاحِمِينَ", meaning: "And You are the best of those who show mercy", explanation: "Ending on hope - Allah's mercy is the greatest", verseRef: "23:118" }
      ]
    }
  },

  relationships: [
    { from: "قد أفلح المؤمنون", to: "هم الوارثون", type: "result", description: "Believer qualities lead to inheriting Firdaus" },
    { from: "سلالة من طين", to: "خلقاً آخر", type: "progression", description: "From clay to ensouled being - stages of creation" },
    { from: "نوح", to: "موسى وهارون", type: "sequence", description: "Pattern of prophethood - same message, same rejection" },
    { from: "أفلم يدبروا القول", to: "أكثرهم للحق كارهون", type: "causation", description: "Lack of reflection leads to hating truth" },
    { from: "من ثقلت موازينه", to: "المفلحون", type: "equivalence", description: "Heavy scales = success" },
    { from: "من خفت موازينه", to: "في جهنم خالدون", type: "consequence", description: "Light scales = eternal Hell" },
    { from: "تضحكون", to: "جزيتهم بما صبروا", type: "reversal", description: "Mockers punished, mocked believers rewarded" },
    { from: "خلقناكم عبثاً", to: "إلينا لا ترجعون", type: "correction", description: "Purpose requires accountability" },
    { from: "لا إله إلا هو", to: "خير الراحمين", type: "completion", description: "From tawheed declaration to seeking mercy" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Qualities of Believers", verses: "23:1-11", description: "Seven qualities leading to Paradise - the successful ones" },
      { stage: 2, theme: "Human Creation", verses: "23:12-16", description: "From clay to death - stages of human existence" },
      { stage: 3, theme: "Signs in Creation", verses: "23:17-22", description: "Heavens, rain, plants, animals - evidence of Creator" },
      { stage: 4, theme: "Prophet Nuh", verses: "23:23-30", description: "Nuh's da'wah, rejection, ark, flood, salvation" },
      { stage: 5, theme: "Pattern of Rejection", verses: "23:31-44", description: "Other nations following same pattern of denial" },
      { stage: 6, theme: "Musa and Harun", verses: "23:45-49", description: "Brothers sent to Pharaoh - arrogance of elite" },
      { stage: 7, theme: "Isa and Maryam", verses: "23:50-52", description: "Sign and shelter - unity of ummah" },
      { stage: 8, theme: "Sectarianism Condemned", verses: "23:53-56", description: "Division into sects - each proud of their way" },
      { stage: 9, theme: "True Believers Described", verses: "23:57-61", description: "Those who fear, believe, race to good" },
      { stage: 10, theme: "Divine Justice", verses: "23:62-67", description: "No burden beyond capacity, heedless hearts" },
      { stage: 11, theme: "Reasons for Rejection", verses: "23:68-77", description: "Why they reject - arrogance, not reflection" },
      { stage: 12, theme: "Prophet's Innocence", verses: "23:78-92", description: "Prophet asks no reward, calls to straight path" },
      { stage: 13, theme: "Death and Barzakh", verses: "23:99-100", description: "Moment of death, plea to return, barrier" },
      { stage: 14, theme: "Resurrection Scenes", verses: "23:101-111", description: "Scales, success, failure, Hell, mocking reversed" },
      { stage: 15, theme: "Purpose and Prayer", verses: "23:112-118", description: "Brief life, purposeful creation, closing dua" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Develop khushu'", how: "Focus completely in salah - minimize distractions, understand what you recite", verse: "23:2" },
      { principle: "Avoid laghw", how: "Guard your tongue and time from useless talk, social media scrolling", verse: "23:3" },
      { principle: "Be fa'il for zakah", how: "Don't just give charity passively - actively seek opportunities to purify wealth", verse: "23:4" },
      { principle: "Guard trusts", how: "Honor every responsibility - work commitments, secrets, borrowed items", verse: "23:8" },
      { principle: "Reflect on creation", how: "Study embryology as confirmation of Quranic accuracy", verse: "23:12-14" },
      { principle: "Learn from history", how: "Study destroyed nations - same patterns of arrogance repeat", verse: "23:23-44" },
      { principle: "Avoid sectarianism", how: "Focus on uniting ummah, not dividing into proud groups", verse: "23:52-53" },
      { principle: "Give with fear", how: "Even after charity, worry about acceptance - avoid pride", verse: "23:60" },
      { principle: "Race to good", how: "Don't delay good deeds - compete in khayr", verse: "23:61" },
      { principle: "Reflect deeply", how: "Practice tadabbur - don't skim the Quran, ponder each verse", verse: "23:68" },
      { principle: "Remember life's brevity", how: "Life is a day or less - invest for eternity", verse: "23:112-114" },
      { principle: "Know your purpose", how: "You weren't created without purpose - live intentionally", verse: "23:115" },
      { principle: "End with hope", how: "After all warnings, seek Allah's mercy - He is khayr ar-rahimeen", verse: "23:118" }
    ]
  },

  uniqueInsight: {
    title: "From Falah to Falah: The Circle of Success",
    insight: "Surah Al-Mu'minun opens with 'Qad aflaha al-mu'minun' (Successful indeed are the believers) and returns to 'fa ula'ika hum al-muflihun' (those are the successful) at verse 102. This creates a deliberate ring structure. The surah defines success at the start (seven qualities in verses 1-11), then takes the reader through history (prophets rejected), human psychology (why people reject truth), cosmic signs (creation's evidence), and finally judgment scenes - before declaring again who truly succeeds. The point: true success isn't wealth, children, or worldly status (explicitly refuted in verses 55-56). True success is heavy scales on Judgment Day, which come from living the seven qualities. The wealthy elite (mutrafeehum) who rejected prophets thought they were successful - but real falah belongs to those they mocked."
  },

  linguisticFeatures: {
    features: [
      { feature: "Opening with qad + past tense", example: "قَدْ أَفْلَحَ", effect: "Certainty - their success is already guaranteed" },
      { feature: "Active participle pattern", example: "خَاشِعُونَ، فَاعِلُونَ، حَافِظُونَ، رَاعُونَ", effect: "Continuous action - not one-time but constant traits" },
      { feature: "Rhetorical questions", example: "أَفَلَمْ يَدَّبَّرُوا، أَمْ لَمْ يَعْرِفُوا", effect: "Forces reflection - makes rejection seem unreasonable" },
      { feature: "Kalla - strong negation", example: "كَلَّا", effect: "Emphatic rejection of their plea to return" },
      { feature: "Imperative command at end", example: "اخْسَئُوا", effect: "Harsh dismissal - silenced like dogs" },
      { feature: "Superlative ending", example: "خَيْرُ الرَّاحِمِينَ", effect: "Hope after all warnings - Allah's mercy is supreme" }
    ]
  }
};

export default ONTOLOGY;
