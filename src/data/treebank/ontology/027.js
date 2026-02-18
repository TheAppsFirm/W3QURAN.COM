/**
 * Surah An-Naml (27) - Ontology of Quranic Concepts
 * The Ant
 * Theme: Prophets and their communities, divine signs, wisdom and knowledge, Sulayman's kingdom
 */

export const ONTOLOGY = {
  surahId: 27,
  surahName: "An-Naml",
  surahNameArabic: "النمل",
  revelationType: "Makki",
  totalAyahs: 93,

  categories: {
    quranIntroduction: {
      name: "Quran Introduction",
      nameArabic: "مقدمة القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "طس", meaning: "Ta Sin (disconnected letters)", explanation: "Mysterious letters opening the surah", verseRef: "27:1" },
        { term: "تِلْكَ آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ", meaning: "These are verses of the Quran and a clear Book", explanation: "Dual description emphasizing clarity", verseRef: "27:1" },
        { term: "هُدًى وَبُشْرَىٰ لِلْمُؤْمِنِينَ", meaning: "Guidance and glad tidings for believers", explanation: "Quran's dual function for the faithful", verseRef: "27:2" }
      ]
    },

    believersQualities: {
      name: "Qualities of Believers",
      nameArabic: "صفات المؤمنين",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "يُقِيمُونَ الصَّلَاةَ", meaning: "Establish prayer", explanation: "First pillar mentioned", verseRef: "27:3" },
        { term: "يُؤْتُونَ الزَّكَاةَ", meaning: "Give zakah", explanation: "Financial worship obligation", verseRef: "27:3" },
        { term: "يُوقِنُونَ بِالْآخِرَةِ", meaning: "Certain of the Hereafter", explanation: "Firm faith in afterlife", verseRef: "27:3" }
      ]
    },

    disbelieversState: {
      name: "State of Disbelievers",
      nameArabic: "حال الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "زَيَّنَّا لَهُمْ أَعْمَالَهُمْ", meaning: "We made their deeds pleasing to them", explanation: "Self-deception in misguidance", verseRef: "27:4" },
        { term: "فَهُمْ يَعْمَهُونَ", meaning: "So they wander blindly", explanation: "Spiritual blindness leads to confusion", verseRef: "27:4" },
        { term: "أُولَٰئِكَ الَّذِينَ لَهُمْ سُوءُ الْعَذَابِ", meaning: "Those who will have worst punishment", explanation: "Consequence of denying afterlife", verseRef: "27:5" }
      ]
    },

    musaStory: {
      name: "Story of Musa",
      nameArabic: "قصة موسى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "إِنِّي آنَسْتُ نَارًا", meaning: "Indeed I perceive a fire", explanation: "Musa's first encounter with divine light", verseRef: "27:7" },
        { term: "نُودِيَ أَن بُورِكَ مَن فِي النَّارِ", meaning: "Blessed is whoever is at the fire", explanation: "Divine blessing at the burning bush", verseRef: "27:8" },
        { term: "يَا مُوسَىٰ إِنَّهُ أَنَا اللَّهُ الْعَزِيزُ الْحَكِيمُ", meaning: "O Musa, indeed it is I - Allah, the Mighty, the Wise", explanation: "Allah's self-introduction to Musa", verseRef: "27:9" },
        { term: "أَلْقِ عَصَاكَ", meaning: "Throw your staff", explanation: "First miracle commanded", verseRef: "27:10" },
        { term: "وَأَدْخِلْ يَدَكَ فِي جَيْبِكَ", meaning: "Put your hand in your pocket", explanation: "Second miracle of the white hand", verseRef: "27:12" },
        { term: "فِي تِسْعِ آيَاتٍ إِلَىٰ فِرْعَوْنَ", meaning: "Among nine signs to Pharaoh", explanation: "Nine miracles for Pharaoh's people", verseRef: "27:12" },
        { term: "هَٰذَا سِحْرٌ مُّبِينٌ", meaning: "This is obvious magic", explanation: "Pharaoh's dismissive response", verseRef: "27:13" },
        { term: "جَحَدُوا بِهَا وَاسْتَيْقَنَتْهَا أَنفُسُهُمْ", meaning: "They rejected while certain of them", explanation: "Denial despite inner conviction", verseRef: "27:14" }
      ]
    },

    sulaymanKingdom: {
      name: "Kingdom of Sulayman",
      nameArabic: "ملك سليمان",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا دَاوُودَ وَسُلَيْمَانَ عِلْمًا", meaning: "We gave Dawud and Sulayman knowledge", explanation: "Divine knowledge granted to both", verseRef: "27:15" },
        { term: "الْحَمْدُ لِلَّهِ الَّذِي فَضَّلَنَا", meaning: "Praise to Allah who favored us", explanation: "Gratitude for being preferred over many", verseRef: "27:15" },
        { term: "وَوَرِثَ سُلَيْمَانُ دَاوُودَ", meaning: "Sulayman inherited Dawud", explanation: "Inheritance of prophethood and kingdom", verseRef: "27:16" },
        { term: "عُلِّمْنَا مَنطِقَ الطَّيْرِ", meaning: "We were taught the language of birds", explanation: "Unique gift of understanding bird speech", verseRef: "27:16" },
        { term: "أُوتِينَا مِن كُلِّ شَيْءٍ", meaning: "We were given of all things", explanation: "Comprehensive divine provision", verseRef: "27:16" }
      ]
    },

    sulaymanArmy: {
      name: "Sulayman's Army",
      nameArabic: "جنود سليمان",
      color: "#F59E0B",
      icon: "Shield",
      concepts: [
        { term: "حُشِرَ لِسُلَيْمَانَ جُنُودُهُ", meaning: "Gathered for Sulayman were his soldiers", explanation: "Marshalling of vast forces", verseRef: "27:17" },
        { term: "مِنَ الْجِنِّ وَالْإِنسِ وَالطَّيْرِ", meaning: "Of jinn, humans, and birds", explanation: "Three types of soldiers", verseRef: "27:17" },
        { term: "فَهُمْ يُوزَعُونَ", meaning: "They were marshaled in rows", explanation: "Military organization and discipline", verseRef: "27:17" }
      ]
    },

    valleyOfAnts: {
      name: "Valley of the Ants",
      nameArabic: "وادي النمل",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَادِ النَّمْلِ", meaning: "Valley of the Ants", explanation: "Geographic location named after ants", verseRef: "27:18" },
        { term: "يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ", meaning: "O ants, enter your dwellings", explanation: "Ant's warning to her colony", verseRef: "27:18" },
        { term: "لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ", meaning: "Lest Sulayman and his soldiers crush you", explanation: "Ant's concern for community survival", verseRef: "27:18" },
        { term: "وَهُمْ لَا يَشْعُرُونَ", meaning: "While they perceive not", explanation: "Acknowledging they would not intentionally harm", verseRef: "27:18" },
        { term: "فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا", meaning: "He smiled laughing at her words", explanation: "Sulayman's gentle amusement", verseRef: "27:19" }
      ]
    },

    sulaymanPrayer: {
      name: "Sulayman's Prayer",
      nameArabic: "دعاء سليمان",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ", meaning: "My Lord, enable me to be grateful for Your favor", explanation: "Prayer for gratitude", verseRef: "27:19" },
        { term: "الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ", meaning: "Which You have bestowed upon me and my parents", explanation: "Including parents in gratitude", verseRef: "27:19" },
        { term: "وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ", meaning: "And to do righteousness pleasing to You", explanation: "Prayer for pleasing deeds", verseRef: "27:19" },
        { term: "وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ", meaning: "Admit me by Your mercy among Your righteous servants", explanation: "Prayer for righteous companionship", verseRef: "27:19" }
      ]
    },

    hudhudStory: {
      name: "Story of the Hoopoe",
      nameArabic: "قصة الهدهد",
      color: "#22C55E",
      icon: "MessageCircle",
      concepts: [
        { term: "وَتَفَقَّدَ الطَّيْرَ", meaning: "He inspected the birds", explanation: "Sulayman's attention to detail", verseRef: "27:20" },
        { term: "مَا لِيَ لَا أَرَى الْهُدْهُدَ", meaning: "Why do I not see the hoopoe?", explanation: "Noticing absence of one bird", verseRef: "27:20" },
        { term: "لَأُعَذِّبَنَّهُ عَذَابًا شَدِيدًا أَوْ لَأَذْبَحَنَّهُ", meaning: "I will punish him severely or slaughter him", explanation: "Accountability for absence without excuse", verseRef: "27:21" },
        { term: "أَوْ لَيَأْتِيَنِّي بِسُلْطَانٍ مُّبِينٍ", meaning: "Unless he brings me clear evidence", explanation: "Opportunity for justification", verseRef: "27:21" },
        { term: "أَحَطتُ بِمَا لَمْ تُحِطْ بِهِ", meaning: "I learned what you have not learned", explanation: "Hoopoe's surprising knowledge", verseRef: "27:22" },
        { term: "جِئْتُكَ مِن سَبَإٍ بِنَبَإٍ يَقِينٍ", meaning: "I have come to you from Sheba with certain news", explanation: "Important intelligence from Yemen", verseRef: "27:22" }
      ]
    },

    queenOfSheba: {
      name: "Queen of Sheba",
      nameArabic: "ملكة سبأ",
      color: "#EC4899",
      icon: "Crown",
      concepts: [
        { term: "إِنِّي وَجَدتُّ امْرَأَةً تَمْلِكُهُمْ", meaning: "I found a woman ruling them", explanation: "Female ruler discovered", verseRef: "27:23" },
        { term: "وَأُوتِيَتْ مِن كُلِّ شَيْءٍ", meaning: "And she has been given of all things", explanation: "Her wealth and power described", verseRef: "27:23" },
        { term: "وَلَهَا عَرْشٌ عَظِيمٌ", meaning: "And she has a magnificent throne", explanation: "Symbol of her royal authority", verseRef: "27:23" },
        { term: "وَجَدتُّهَا وَقَوْمَهَا يَسْجُدُونَ لِلشَّمْسِ", meaning: "I found her and her people prostrating to the sun", explanation: "Sun worship in Sheba", verseRef: "27:24" },
        { term: "زَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ", meaning: "Satan made their deeds pleasing to them", explanation: "Satanic beautification of idolatry", verseRef: "27:24" }
      ]
    },

    sulaymanLetter: {
      name: "Sulayman's Letter",
      nameArabic: "كتاب سليمان",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "اذْهَب بِّكِتَابِي هَٰذَا فَأَلْقِهْ إِلَيْهِمْ", meaning: "Take this letter of mine and deliver it to them", explanation: "Diplomatic mission assigned", verseRef: "27:28" },
        { term: "إِنَّهُ مِن سُلَيْمَانَ", meaning: "Indeed, it is from Sulayman", explanation: "Royal identification", verseRef: "27:30" },
        { term: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", meaning: "In the name of Allah, the Most Merciful", explanation: "Bismillah in the letter", verseRef: "27:30" },
        { term: "أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ", meaning: "Do not be arrogant and come to me in submission", explanation: "Call to Islam and humility", verseRef: "27:31" }
      ]
    },

    shebaConsultation: {
      name: "Sheba's Consultation",
      nameArabic: "مشاورة ملكة سبأ",
      color: "#8B5CF6",
      icon: "Users",
      concepts: [
        { term: "قَالَتْ يَا أَيُّهَا الْمَلَأُ أَفْتُونِي فِي أَمْرِي", meaning: "She said: O chiefs, advise me in my affair", explanation: "Queen seeks counsel", verseRef: "27:32" },
        { term: "مَا كُنتُ قَاطِعَةً أَمْرًا حَتَّىٰ تَشْهَدُونِ", meaning: "I would not decide until you witness", explanation: "Consultative leadership style", verseRef: "27:32" },
        { term: "نَحْنُ أُولُو قُوَّةٍ وَأُولُو بَأْسٍ شَدِيدٍ", meaning: "We are of great strength and military might", explanation: "Chiefs boast of military power", verseRef: "27:33" },
        { term: "وَالْأَمْرُ إِلَيْكِ فَانظُرِي مَاذَا تَأْمُرِينَ", meaning: "The command is yours, so see what you will command", explanation: "Deferring to queen's judgment", verseRef: "27:33" },
        { term: "إِنَّ الْمُلُوكَ إِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا", meaning: "Indeed kings, when they enter a city, ruin it", explanation: "Queen's wisdom about conquering kings", verseRef: "27:34" },
        { term: "وَإِنِّي مُرْسِلَةٌ إِلَيْهِم بِهَدِيَّةٍ", meaning: "And I will send them a gift", explanation: "Diplomatic approach chosen", verseRef: "27:35" }
      ]
    },

    sulaymanRejectsGift: {
      name: "Sulayman Rejects Gift",
      nameArabic: "رفض سليمان للهدية",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "أَتُمِدُّونَنِ بِمَالٍ", meaning: "Would you provide me with wealth?", explanation: "Rejection of material bribery", verseRef: "27:36" },
        { term: "فَمَا آتَانِيَ اللَّهُ خَيْرٌ مِّمَّا آتَاكُم", meaning: "What Allah has given me is better than what He gave you", explanation: "Divine gifts exceed worldly wealth", verseRef: "27:36" },
        { term: "بَلْ أَنتُم بِهَدِيَّتِكُمْ تَفْرَحُونَ", meaning: "Rather you rejoice in your gift", explanation: "Worldly people value material things", verseRef: "27:36" },
        { term: "ارْجِعْ إِلَيْهِمْ فَلَنَأْتِيَنَّهُم بِجُنُودٍ", meaning: "Return to them, for we will come with soldiers", explanation: "Warning of military response", verseRef: "27:37" }
      ]
    },

    throneTransport: {
      name: "Transport of the Throne",
      nameArabic: "نقل العرش",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "أَيُّكُمْ يَأْتِينِي بِعَرْشِهَا", meaning: "Which of you will bring me her throne?", explanation: "Challenge issued to court", verseRef: "27:38" },
        { term: "قَالَ عِفْرِيتٌ مِّنَ الْجِنِّ", meaning: "A powerful one of the jinn said", explanation: "Jinn offers to bring throne", verseRef: "27:39" },
        { term: "أَنَا آتِيكَ بِهِ قَبْلَ أَن تَقُومَ مِن مَّقَامِكَ", meaning: "I will bring it before you rise from your place", explanation: "Jinn's offer of speed", verseRef: "27:39" },
        { term: "قَالَ الَّذِي عِندَهُ عِلْمٌ مِّنَ الْكِتَابِ", meaning: "Said one who had knowledge from the Book", explanation: "One with special knowledge", verseRef: "27:40" },
        { term: "أَنَا آتِيكَ بِهِ قَبْلَ أَن يَرْتَدَّ إِلَيْكَ طَرْفُكَ", meaning: "I will bring it before your glance returns", explanation: "Instantaneous transport", verseRef: "27:40" },
        { term: "هَٰذَا مِن فَضْلِ رَبِّي", meaning: "This is from my Lord's favor", explanation: "Sulayman attributes miracle to Allah", verseRef: "27:40" },
        { term: "لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ", meaning: "To test me whether I will be grateful or ungrateful", explanation: "Recognizing blessings as tests", verseRef: "27:40" }
      ]
    },

    queenArrival: {
      name: "Queen's Arrival",
      nameArabic: "وصول الملكة",
      color: "#EC4899",
      icon: "Eye",
      concepts: [
        { term: "نَكِّرُوا لَهَا عَرْشَهَا", meaning: "Disguise her throne", explanation: "Test of her intelligence", verseRef: "27:41" },
        { term: "نَنظُرْ أَتَهْتَدِي أَمْ تَكُونُ مِنَ الَّذِينَ لَا يَهْتَدُونَ", meaning: "We will see if she will be guided or of those who are not guided", explanation: "Observing her discernment", verseRef: "27:41" },
        { term: "أَهَٰكَذَا عَرْشُكِ", meaning: "Is your throne like this?", explanation: "Question about her throne", verseRef: "27:42" },
        { term: "كَأَنَّهُ هُوَ", meaning: "It is as if it were", explanation: "Queen's perceptive response", verseRef: "27:42" },
        { term: "قِيلَ لَهَا ادْخُلِي الصَّرْحَ", meaning: "She was told, Enter the palace", explanation: "Invitation to crystal palace", verseRef: "27:44" },
        { term: "حَسِبَتْهُ لُجَّةً وَكَشَفَتْ عَن سَاقَيْهَا", meaning: "She thought it was water and uncovered her shins", explanation: "Glass floor illusion", verseRef: "27:44" },
        { term: "إِنَّهُ صَرْحٌ مُّمَرَّدٌ مِّن قَوَارِيرَ", meaning: "It is a palace smoothed of glass", explanation: "Explanation of the floor", verseRef: "27:44" }
      ]
    },

    queenSubmission: {
      name: "Queen's Submission",
      nameArabic: "إسلام الملكة",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي", meaning: "My Lord, I have wronged myself", explanation: "Queen's confession", verseRef: "27:44" },
        { term: "وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: "I submit with Sulayman to Allah, Lord of the worlds", explanation: "Queen accepts Islam", verseRef: "27:44" }
      ]
    },

    salihStory: {
      name: "Story of Salih",
      nameArabic: "قصة صالح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "أَرْسَلْنَا إِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا", meaning: "We sent to Thamud their brother Salih", explanation: "Prophet sent to his own people", verseRef: "27:45" },
        { term: "أَنِ اعْبُدُوا اللَّهَ", meaning: "That worship Allah", explanation: "Core prophetic message", verseRef: "27:45" },
        { term: "فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ", meaning: "Suddenly they were two parties conflicting", explanation: "Division among people", verseRef: "27:45" },
        { term: "لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ", meaning: "Why do you hasten evil before good?", explanation: "People demanding punishment", verseRef: "27:46" },
        { term: "قَالُوا اطَّيَّرْنَا بِكَ وَبِمَن مَّعَكَ", meaning: "They said: We consider you and your followers bad omens", explanation: "Blaming prophets for misfortune", verseRef: "27:47" },
        { term: "طَائِرُكُمْ عِندَ اللَّهِ", meaning: "Your omen is with Allah", explanation: "Fate is with Allah, not omens", verseRef: "27:47" }
      ]
    },

    thamudDestruction: {
      name: "Destruction of Thamud",
      nameArabic: "هلاك ثمود",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رَهْطٍ", meaning: "There were in the city nine family heads", explanation: "Corrupt leaders plotting", verseRef: "27:48" },
        { term: "يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ", meaning: "Who corrupted the land and did not reform", explanation: "Spreading corruption", verseRef: "27:48" },
        { term: "تَقَاسَمُوا بِاللَّهِ لَنُبَيِّتَنَّهُ وَأَهْلَهُ", meaning: "They swore by Allah to attack him and his family by night", explanation: "Assassination plot", verseRef: "27:49" },
        { term: "وَمَكَرُوا مَكْرًا وَمَكَرْنَا مَكْرًا", meaning: "They planned a plan and We planned a plan", explanation: "Divine counter-plan", verseRef: "27:50" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ مَكْرِهِمْ", meaning: "See how was the outcome of their plan", explanation: "Lesson from their fate", verseRef: "27:51" },
        { term: "أَنَّا دَمَّرْنَاهُمْ وَقَوْمَهُمْ أَجْمَعِينَ", meaning: "We destroyed them and their people all together", explanation: "Complete annihilation", verseRef: "27:51" },
        { term: "فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا", meaning: "Those are their houses desolate because they wronged", explanation: "Empty ruins as evidence", verseRef: "27:52" }
      ]
    },

    lutStory: {
      name: "Story of Lut",
      nameArabic: "قصة لوط",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ", meaning: "And Lut when he said to his people", explanation: "Lut's mission to his people", verseRef: "27:54" },
        { term: "أَتَأْتُونَ الْفَاحِشَةَ وَأَنتُمْ تُبْصِرُونَ", meaning: "Do you commit immorality while you see?", explanation: "Condemning open sin", verseRef: "27:54" },
        { term: "أَئِنَّكُمْ لَتَأْتُونَ الرِّجَالَ شَهْوَةً مِّن دُونِ النِّسَاءِ", meaning: "Do you approach men lustfully instead of women?", explanation: "Condemning the specific sin", verseRef: "27:55" },
        { term: "بَلْ أَنتُمْ قَوْمٌ تَجْهَلُونَ", meaning: "Rather you are ignorant people", explanation: "Ignorance of divine law", verseRef: "27:55" },
        { term: "أَخْرِجُوا آلَ لُوطٍ مِّن قَرْيَتِكُمْ", meaning: "Expel the family of Lut from your city", explanation: "Persecution for being pure", verseRef: "27:56" },
        { term: "إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ", meaning: "They are people who keep themselves pure", explanation: "Purity seen as offense", verseRef: "27:56" },
        { term: "فَأَنجَيْنَاهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ", meaning: "We saved him and his family except his wife", explanation: "Exception of disbelieving wife", verseRef: "27:57" },
        { term: "قَدَّرْنَاهَا مِنَ الْغَابِرِينَ", meaning: "We destined her among those who remained", explanation: "Wife's fate with the sinners", verseRef: "27:57" },
        { term: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا", meaning: "And We rained upon them a rain", explanation: "Rain of destruction", verseRef: "27:58" },
        { term: "فَسَاءَ مَطَرُ الْمُنذَرِينَ", meaning: "Evil was the rain of those warned", explanation: "Punishment after warning", verseRef: "27:58" }
      ]
    },

    praiseAndGratitude: {
      name: "Praise and Gratitude",
      nameArabic: "الحمد والشكر",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "قُلِ الْحَمْدُ لِلَّهِ وَسَلَامٌ عَلَىٰ عِبَادِهِ", meaning: "Say: Praise to Allah and peace upon His servants", explanation: "Opening formula of gratitude", verseRef: "27:59" },
        { term: "الَّذِينَ اصْطَفَىٰ", meaning: "Whom He has chosen", explanation: "Peace upon the chosen ones", verseRef: "27:59" },
        { term: "آللَّهُ خَيْرٌ أَمَّا يُشْرِكُونَ", meaning: "Is Allah better or what they associate?", explanation: "Rhetorical comparison", verseRef: "27:59" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَمَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: "Who created the heavens and earth", explanation: "First creative sign", verseRef: "27:60" },
        { term: "وَأَنزَلَ لَكُم مِّنَ السَّمَاءِ مَاءً", meaning: "And sent down for you water from the sky", explanation: "Rain blessing", verseRef: "27:60" },
        { term: "فَأَنبَتْنَا بِهِ حَدَائِقَ ذَاتَ بَهْجَةٍ", meaning: "By which We caused to grow gardens of delight", explanation: "Gardens from rain", verseRef: "27:60" },
        { term: "أَإِلَٰهٌ مَّعَ اللَّهِ", meaning: "Is there a deity with Allah?", explanation: "Refutation of polytheism", verseRef: "27:60" },
        { term: "أَمَّن جَعَلَ الْأَرْضَ قَرَارًا", meaning: "Who made the earth stable", explanation: "Earth's stability", verseRef: "27:61" },
        { term: "وَجَعَلَ خِلَالَهَا أَنْهَارًا", meaning: "And made through it rivers", explanation: "Rivers blessing", verseRef: "27:61" },
        { term: "وَجَعَلَ لَهَا رَوَاسِيَ", meaning: "And placed for it mountains", explanation: "Mountains as anchors", verseRef: "27:61" },
        { term: "وَجَعَلَ بَيْنَ الْبَحْرَيْنِ حَاجِزًا", meaning: "And placed between the two seas a barrier", explanation: "Separation of salt and fresh water", verseRef: "27:61" }
      ]
    },

    divineResponseToSupplication: {
      name: "Divine Response",
      nameArabic: "الاستجابة الإلهية",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ", meaning: "Who responds to the distressed when he calls", explanation: "Allah answers the desperate", verseRef: "27:62" },
        { term: "وَيَكْشِفُ السُّوءَ", meaning: "And removes the affliction", explanation: "Removal of hardship", verseRef: "27:62" },
        { term: "وَيَجْعَلُكُمْ خُلَفَاءَ الْأَرْضِ", meaning: "And makes you successors on earth", explanation: "Human stewardship", verseRef: "27:62" },
        { term: "قَلِيلًا مَّا تَذَكَّرُونَ", meaning: "Little do you remember", explanation: "Heedlessness despite blessings", verseRef: "27:62" }
      ]
    },

    guidanceInDarkness: {
      name: "Guidance in Darkness",
      nameArabic: "الهداية في الظلمات",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "أَمَّن يَهْدِيكُمْ فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ", meaning: "Who guides you in the darkness of land and sea", explanation: "Divine guidance for travelers", verseRef: "27:63" },
        { term: "وَمَن يُرْسِلُ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ", meaning: "Who sends winds as glad tidings before His mercy", explanation: "Winds heralding rain", verseRef: "27:63" }
      ]
    },

    creationAndResurrection: {
      name: "Creation and Resurrection",
      nameArabic: "الخلق والبعث",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "أَمَّن يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ", meaning: "Who originates creation and then repeats it", explanation: "Initial creation proves resurrection", verseRef: "27:64" },
        { term: "وَمَن يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: "Who provides you from heaven and earth", explanation: "Provision from above and below", verseRef: "27:64" },
        { term: "قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ", meaning: "Say: Bring your proof if you are truthful", explanation: "Challenge to polytheists", verseRef: "27:64" }
      ]
    },

    unseenKnowledge: {
      name: "Knowledge of the Unseen",
      nameArabic: "علم الغيب",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "قُل لَّا يَعْلَمُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ الْغَيْبَ إِلَّا اللَّهُ", meaning: "Say: None in heavens and earth knows the unseen except Allah", explanation: "Exclusive divine knowledge", verseRef: "27:65" },
        { term: "وَمَا يَشْعُرُونَ أَيَّانَ يُبْعَثُونَ", meaning: "They do not know when they will be resurrected", explanation: "Time of resurrection unknown", verseRef: "27:65" },
        { term: "بَلِ ادَّارَكَ عِلْمُهُمْ فِي الْآخِرَةِ", meaning: "Rather their knowledge fails regarding the Hereafter", explanation: "Human knowledge limited", verseRef: "27:66" },
        { term: "بَلْ هُمْ فِي شَكٍّ مِّنْهَا", meaning: "Rather they are in doubt about it", explanation: "Doubt about afterlife", verseRef: "27:66" },
        { term: "بَلْ هُم مِّنْهَا عَمُونَ", meaning: "Rather they are blind to it", explanation: "Spiritual blindness", verseRef: "27:66" }
      ]
    },

    disbelieversDoubts: {
      name: "Disbelievers' Doubts",
      nameArabic: "شكوك الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَإِذَا كُنَّا تُرَابًا وَآبَاؤُنَا", meaning: "When we become dust and our fathers too", explanation: "Doubting bodily resurrection", verseRef: "27:67" },
        { term: "أَإِنَّا لَمُخْرَجُونَ", meaning: "Will we be brought out?", explanation: "Skepticism about being raised", verseRef: "27:67" },
        { term: "لَقَدْ وُعِدْنَا هَٰذَا نَحْنُ وَآبَاؤُنَا", meaning: "We and our fathers were promised this", explanation: "Dismissing as old tales", verseRef: "27:68" },
        { term: "إِنْ هَٰذَا إِلَّا أَسَاطِيرُ الْأَوَّلِينَ", meaning: "This is nothing but legends of the ancients", explanation: "Calling revelation mythology", verseRef: "27:68" }
      ]
    },

    travelAndReflect: {
      name: "Travel and Reflect",
      nameArabic: "السير والتأمل",
      color: "#06B6D4",
      icon: "Compass",
      concepts: [
        { term: "قُلْ سِيرُوا فِي الْأَرْضِ", meaning: "Say: Travel through the earth", explanation: "Command to learn from history", verseRef: "27:69" },
        { term: "فَانظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُجْرِمِينَ", meaning: "See how was the end of the criminals", explanation: "Learn from destroyed nations", verseRef: "27:69" },
        { term: "وَلَا تَحْزَنْ عَلَيْهِمْ", meaning: "Do not grieve over them", explanation: "Consolation to the Prophet", verseRef: "27:70" },
        { term: "وَلَا تَكُن فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ", meaning: "Do not be distressed by what they plot", explanation: "Reassurance against plotting", verseRef: "27:70" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "وَيَوْمَ يُنفَخُ فِي الصُّورِ", meaning: "And the Day the Horn is blown", explanation: "Trumpet signaling resurrection", verseRef: "27:87" },
        { term: "فَفَزِعَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ", meaning: "All in heavens and earth will be terrified", explanation: "Universal terror on that Day", verseRef: "27:87" },
        { term: "إِلَّا مَن شَاءَ اللَّهُ", meaning: "Except whom Allah wills", explanation: "Some exempted from terror", verseRef: "27:87" },
        { term: "وَكُلٌّ أَتَوْهُ دَاخِرِينَ", meaning: "All will come to Him humbled", explanation: "Universal humility before Allah", verseRef: "27:87" },
        { term: "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً", meaning: "You see the mountains thinking them solid", explanation: "Mountains appear stationary", verseRef: "27:88" },
        { term: "وَهِيَ تَمُرُّ مَرَّ السَّحَابِ", meaning: "While they pass like clouds", explanation: "Mountains moving like clouds", verseRef: "27:88" },
        { term: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ", meaning: "Work of Allah who perfected all things", explanation: "Divine perfection in all creation", verseRef: "27:88" }
      ]
    },

    goodAndEvil: {
      name: "Recompense of Good and Evil",
      nameArabic: "جزاء الخير والشر",
      color: "#8B5CF6",
      icon: "Scale",
      concepts: [
        { term: "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ خَيْرٌ مِّنْهَا", meaning: "Whoever comes with a good deed will have better", explanation: "Good deeds multiplied", verseRef: "27:89" },
        { term: "وَهُم مِّن فَزَعٍ يَوْمَئِذٍ آمِنُونَ", meaning: "And they are safe from terror that Day", explanation: "Security for the righteous", verseRef: "27:89" },
        { term: "وَمَن جَاءَ بِالسَّيِّئَةِ فَكُبَّتْ وُجُوهُهُمْ فِي النَّارِ", meaning: "Whoever comes with evil, their faces cast into Fire", explanation: "Punishment for evildoers", verseRef: "27:90" },
        { term: "هَلْ تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ", meaning: "Are you recompensed except for what you used to do?", explanation: "Fair recompense", verseRef: "27:90" }
      ]
    },

    prophetMission: {
      name: "Prophet's Mission",
      nameArabic: "مهمة النبي",
      color: "#10B981",
      icon: "Book",
      concepts: [
        { term: "إِنَّمَا أُمِرْتُ أَنْ أَعْبُدَ رَبَّ هَٰذِهِ الْبَلْدَةِ", meaning: "I am commanded to worship the Lord of this city", explanation: "Prophet's primary duty", verseRef: "27:91" },
        { term: "الَّذِي حَرَّمَهَا", meaning: "Who made it sacred", explanation: "Makkah's sanctity", verseRef: "27:91" },
        { term: "وَلَهُ كُلُّ شَيْءٍ", meaning: "To Him belongs all things", explanation: "Allah's absolute ownership", verseRef: "27:91" },
        { term: "وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُسْلِمِينَ", meaning: "And I am commanded to be of those who submit", explanation: "Prophet among the Muslims", verseRef: "27:91" },
        { term: "وَأَنْ أَتْلُوَ الْقُرْآنَ", meaning: "And to recite the Quran", explanation: "Recitation as mission", verseRef: "27:92" },
        { term: "فَمَنِ اهْتَدَىٰ فَإِنَّمَا يَهْتَدِي لِنَفْسِهِ", meaning: "Whoever is guided is guided for himself", explanation: "Personal responsibility for guidance", verseRef: "27:92" },
        { term: "وَمَن ضَلَّ فَقُلْ إِنَّمَا أَنَا مِنَ الْمُنذِرِينَ", meaning: "Whoever strays, say: I am only a warner", explanation: "Prophet's role as warner only", verseRef: "27:92" }
      ]
    },

    closingPraise: {
      name: "Closing Praise",
      nameArabic: "الختام بالحمد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَقُلِ الْحَمْدُ لِلَّهِ", meaning: "And say: Praise to Allah", explanation: "Closing with gratitude", verseRef: "27:93" },
        { term: "سَيُرِيكُمْ آيَاتِهِ فَتَعْرِفُونَهَا", meaning: "He will show you His signs and you will recognize them", explanation: "Promise of recognizable signs", verseRef: "27:93" },
        { term: "وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ", meaning: "Your Lord is not unaware of what you do", explanation: "Divine awareness of all actions", verseRef: "27:93" }
      ]
    }
  },

  relationships: [
    { from: "علم داود وسليمان", to: "الحمد لله", type: "response", description: "Knowledge leads to gratitude" },
    { from: "منطق الطير", to: "النملة", type: "application", description: "Understanding languages enabled hearing the ant" },
    { from: "قول النملة", to: "دعاء سليمان", type: "response", description: "Ant's words inspired prayer for gratitude" },
    { from: "عرش بلقيس", to: "نقل العرش", type: "test", description: "Her throne brought to test her intelligence" },
    { from: "الصرح الممرد", to: "إسلام بلقيس", type: "result", description: "Glass palace led to her submission" },
    { from: "مكر ثمود", to: "دمارهم", type: "consequence", description: "Their plotting led to destruction" },
    { from: "فاحشة قوم لوط", to: "المطر", type: "punishment", description: "Their sin brought destructive rain" },
    { from: "آيات الخلق", to: "لا إله مع الله", type: "proof", description: "Creation signs prove monotheism" },
    { from: "الحسنة", to: "آمنون", type: "reward", description: "Good deeds bring security" },
    { from: "السيئة", to: "النار", type: "punishment", description: "Evil deeds lead to Fire" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran and Faith", verses: "27:1-6", description: "Introduction to Quran, believers vs disbelievers" },
      { stage: 2, theme: "Musa's Signs", verses: "27:7-14", description: "Musa receives prophethood and miracles" },
      { stage: 3, theme: "Sulayman's Kingdom", verses: "27:15-19", description: "Divine gifts, language of birds, the ant" },
      { stage: 4, theme: "The Hoopoe Mission", verses: "27:20-28", description: "Discovery of Sheba, letter sent" },
      { stage: 5, theme: "Queen of Sheba", verses: "27:29-44", description: "Consultation, throne, palace, submission" },
      { stage: 6, theme: "Salih and Thamud", verses: "27:45-53", description: "Warning, plotting, destruction" },
      { stage: 7, theme: "Lut and His People", verses: "27:54-58", description: "Sin, expulsion, punishment" },
      { stage: 8, theme: "Signs of Allah", verses: "27:59-66", description: "Creation proofs, Allah alone answers" },
      { stage: 9, theme: "Resurrection Doubt", verses: "27:67-75", description: "Disbelievers' skepticism answered" },
      { stage: 10, theme: "Quran's Role", verses: "27:76-82", description: "Guidance for Bani Isra'il, signs emerge" },
      { stage: 11, theme: "Day of Judgment", verses: "27:83-90", description: "Gathering, Horn, recompense" },
      { stage: 12, theme: "Prophet's Mission", verses: "27:91-93", description: "Worship, recite, warn, praise" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Be grateful for blessings", how: "Like Sulayman, ask Allah to enable gratitude", verse: "27:19" },
      { principle: "Consult before decisions", how: "Like Queen of Sheba, seek advice from trusted advisors", verse: "27:32" },
      { principle: "Value wisdom over wealth", how: "Sulayman rejected gifts, valued faith over gold", verse: "27:36" },
      { principle: "Recognize tests in blessings", how: "Every gift is a test of gratitude or ingratitude", verse: "27:40" },
      { principle: "Be accountable", how: "Even a bird must justify absence - maintain discipline", verse: "27:21" },
      { principle: "Reflect on destroyed nations", how: "Travel and learn from the ruins of past civilizations", verse: "27:69" },
      { principle: "Trust Allah's knowledge", how: "Only Allah knows the unseen - don't pretend certainty", verse: "27:65" },
      { principle: "Do good for yourself", how: "Guidance and misguidance affect only the individual", verse: "27:92" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Communication Across Species",
    insight: "Surah An-Naml is unique in containing the speech of three non-human entities: the ant warning her colony (27:18), the hoopoe reporting intelligence (27:22-26), and the jinn offering service (27:39). This highlights that all of Allah's creation can communicate, worship, and serve divine purposes. The surah's central figure, Sulayman, was granted the gift of understanding this communication - showing that true wisdom includes humility to learn from all of Allah's creatures. The ant's awareness of Sulayman's righteousness ('while they perceive not' - acknowledging he wouldn't harm intentionally) and her concern for community welfare exemplifies leadership qualities. Meanwhile, the Queen of Sheba's journey from sun worship to Islam models the transformation possible when hearts open to truth. The surah teaches that knowledge ('ilm) and wisdom (hikmah) are the true measures of superiority, not power or wealth."
  },

  historicalContext: {
    note: "This Makki surah was revealed when the Quraysh were challenging the Prophet with demands for miracles. The surah responds by presenting the stories of prophets who received clear signs yet were still rejected. The story of Sulayman and Sheba was known to the Arabs through Jewish and Christian sources, but the Quran presents unique details like the ant's speech and the glass palace. The mention of 'nine family heads' corrupting Thamud (27:48) may reference tribal leadership structures familiar to the Arabs. The surah's emphasis on Allah's exclusive knowledge of the unseen (27:65) counters soothsayers and fortune-tellers prevalent in pre-Islamic Arabia."
  },

  linguisticFeatures: {
    features: [
      { feature: "طس", example: "Disconnected letters", effect: "Creates attention and mystery at opening" },
      { feature: "النَّمْل", example: "The Ant", effect: "Surah named after a humble creature - emphasizing all creation matters" },
      { feature: "تَبَسَّمَ ضَاحِكًا", example: "Smiled laughing", effect: "Two words for joy - ta-bassama (smile) and dahik (laugh) - complete joy" },
      { feature: "عِفْرِيت", example: "Powerful jinn", effect: "Specific Arabic term for a strong, cunning jinn" },
      { feature: "صَرْح مُّمَرَّد مِّن قَوَارِيرَ", example: "Palace smoothed of glass", effect: "Alliteration in 'm' sounds creates flowing description" },
      { feature: "أَإِلَٰهٌ مَّعَ اللَّهِ", example: "Is there a deity with Allah?", effect: "Repeated rhetorical question (5 times) building logical argument" },
      { feature: "تَمُرُّ مَرَّ السَّحَابِ", example: "Pass like the passing of clouds", effect: "Cognate accusative for emphasis on movement" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "27:18", topic: "Ant communication", note: "Modern science confirms ants communicate through pheromones and sounds" },
      { verse: "27:61", topic: "Barrier between seas", note: "Fresh and salt water meet but don't mix completely - halocline phenomenon" },
      { verse: "27:88", topic: "Mountains moving", note: "Earth's tectonic plates cause slow mountain movement - apparent stability, actual motion" },
      { verse: "27:60", topic: "Gardens from rain", note: "Water cycle described - rain produces vegetation" },
      { verse: "27:63", topic: "Guidance by stars", note: "Ancient navigation relied on celestial bodies - still used today" }
    ]
  },

  prophetStories: {
    musa: {
      name: "Musa (Moses)",
      nameArabic: "موسى",
      verseRange: "27:7-14",
      keyPoints: [
        "Sees fire during journey with family",
        "Receives call from Allah at the burning bush",
        "Given two miracles: staff becomes snake, hand becomes white",
        "Sent to Pharaoh with nine signs",
        "Pharaoh dismisses signs as magic",
        "They denied despite inner certainty"
      ]
    },
    sulayman: {
      name: "Sulayman (Solomon)",
      nameArabic: "سليمان",
      verseRange: "27:15-44",
      keyPoints: [
        "Inherited prophethood from Dawud",
        "Given knowledge, language of birds, control over jinn",
        "Commanded vast army of jinn, humans, and birds",
        "Understood the ant's warning",
        "Prayed for ability to be grateful",
        "Tested the Queen of Sheba's intelligence",
        "Demonstrated power through throne transport and glass palace"
      ]
    },
    salih: {
      name: "Salih",
      nameArabic: "صالح",
      verseRange: "27:45-53",
      keyPoints: [
        "Sent to Thamud",
        "People split into two factions",
        "Called them to avoid hastening punishment",
        "Nine corrupt leaders plotted against him",
        "Allah destroyed them and their people",
        "Houses left desolate as warning"
      ]
    },
    lut: {
      name: "Lut (Lot)",
      nameArabic: "لوط",
      verseRange: "27:54-58",
      keyPoints: [
        "Confronted his people's open immorality",
        "People sought to expel him for purity",
        "Saved with family except wife",
        "City destroyed by rain of stones"
      ]
    }
  },

  keyFigures: {
    queenOfSheba: {
      name: "Queen of Sheba (Bilqis)",
      nameArabic: "ملكة سبأ (بلقيس)",
      verseRange: "27:23-44",
      characteristics: [
        "Ruled a mighty kingdom",
        "Had a magnificent throne",
        "Practiced consultative leadership",
        "Showed diplomatic wisdom",
        "Recognized truth when presented",
        "Submitted to Allah with Sulayman"
      ]
    },
    hoopoe: {
      name: "The Hoopoe",
      nameArabic: "الهدهد",
      verseRange: "27:20-28",
      role: "Scout and messenger who discovered Sheba and delivered Sulayman's letter"
    },
    ant: {
      name: "The Ant",
      nameArabic: "النملة",
      verseRange: "27:18",
      role: "Leader who warned her colony of approaching army, showing community awareness"
    }
  }
};

export default ONTOLOGY;
