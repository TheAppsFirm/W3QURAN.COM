/**
 * Surah Al-Qasas (28) - Ontology of Quranic Concepts
 * The Stories
 *
 * Theme: The story of Musa (Moses), Qarun's arrogance, and reassurance to the Prophet Muhammad
 * Revelation: Makki (except verses 52-55, 85 which are Madani)
 * Total Ayahs: 88
 */

export const ONTOLOGY = {
  surahId: 28,
  surahName: "Al-Qasas",
  surahNameArabic: "القصص",
  revelationType: "Makki",
  totalAyahs: 88,

  categories: {
    musaEarlyLife: {
      name: "Musa's Early Life",
      nameArabic: "طفولة موسى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "طسم", meaning: "Ta Sin Mim", explanation: "Disconnected letters (Muqatta'at) - mysteries known to Allah", verseRef: "28:1" },
        { term: "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ", meaning: "These are verses of the clear Book", explanation: "Affirmation of Quran's clarity", verseRef: "28:2" },
        { term: "فِرْعَوْنَ عَلَا فِي الْأَرْضِ", meaning: "Pharaoh exalted himself in the land", explanation: "Pharaoh's tyranny and arrogance", verseRef: "28:4" },
        { term: "يَسْتَضْعِفُ طَائِفَةً", meaning: "Oppressing a group", explanation: "Systematic persecution of Bani Israel", verseRef: "28:4" },
        { term: "يُذَبِّحُ أَبْنَاءَهُمْ", meaning: "Slaughtering their sons", explanation: "Male infanticide to weaken Israelites", verseRef: "28:4" },
        { term: "وَنُرِيدُ أَن نَّمُنَّ", meaning: "And We wanted to bestow favor", explanation: "Allah's plan to empower the oppressed", verseRef: "28:5" },
        { term: "نَجْعَلَهُمْ أَئِمَّةً", meaning: "Make them leaders", explanation: "Oppressed become leaders - divine reversal", verseRef: "28:5" },
        { term: "وَنَجْعَلَهُمُ الْوَارِثِينَ", meaning: "Make them inheritors", explanation: "Bani Israel inherit the land", verseRef: "28:5" }
      ]
    },

    musaPreservation: {
      name: "Divine Protection of Baby Musa",
      nameArabic: "حفظ موسى الرضيع",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "أَوْحَيْنَا إِلَىٰ أُمِّ مُوسَىٰ", meaning: "We inspired Musa's mother", explanation: "Divine guidance through inspiration", verseRef: "28:7" },
        { term: "أَرْضِعِيهِ", meaning: "Nurse him", explanation: "First command - natural care", verseRef: "28:7" },
        { term: "فَأَلْقِيهِ فِي الْيَمِّ", meaning: "Cast him in the river", explanation: "Counter-intuitive command requiring faith", verseRef: "28:7" },
        { term: "إِنَّا رَادُّوهُ إِلَيْكِ", meaning: "We will return him to you", explanation: "Allah's promise of reunion", verseRef: "28:7" },
        { term: "وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ", meaning: "And make him of the messengers", explanation: "Prophecy of prophethood", verseRef: "28:7" },
        { term: "فَالْتَقَطَهُ آلُ فِرْعَوْنَ", meaning: "Family of Pharaoh picked him up", explanation: "Irony: enemy raises liberator", verseRef: "28:8" },
        { term: "لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا", meaning: "To be an enemy and grief to them", explanation: "Divine irony in Pharaoh's house", verseRef: "28:8" },
        { term: "وَحَرَّمْنَا عَلَيْهِ الْمَرَاضِعَ", meaning: "We forbade wet nurses for him", explanation: "Baby refused all except his mother", verseRef: "28:12" },
        { term: "فَرَدَدْنَاهُ إِلَىٰ أُمِّهِ", meaning: "So We returned him to his mother", explanation: "Promise fulfilled - reunion", verseRef: "28:13" }
      ]
    },

    musaStrength: {
      name: "Musa Reaches Maturity",
      nameArabic: "بلوغ موسى رشده",
      color: "#10B981",
      icon: "Zap",
      concepts: [
        { term: "وَلَمَّا بَلَغَ أَشُدَّهُ", meaning: "When he reached full strength", explanation: "Physical and mental maturity", verseRef: "28:14" },
        { term: "آتَيْنَاهُ حُكْمًا وَعِلْمًا", meaning: "We gave him wisdom and knowledge", explanation: "Divine preparation for prophethood", verseRef: "28:14" },
        { term: "وَكَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ", meaning: "Thus We reward the doers of good", explanation: "Musa's reward for righteousness", verseRef: "28:14" },
        { term: "هَٰذَا مِن شِيعَتِهِ وَهَٰذَا مِنْ عَدُوِّهِ", meaning: "This from his faction, that from his enemy", explanation: "Conflict between Israelite and Egyptian", verseRef: "28:15" },
        { term: "فَوَكَزَهُ مُوسَىٰ فَقَضَىٰ عَلَيْهِ", meaning: "Musa struck him and killed him", explanation: "Unintentional killing - one punch", verseRef: "28:15" },
        { term: "هَٰذَا مِنْ عَمَلِ الشَّيْطَانِ", meaning: "This is from Satan's work", explanation: "Musa's immediate repentance", verseRef: "28:15" },
        { term: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي", meaning: "My Lord, I wronged myself, forgive me", explanation: "Musa's sincere repentance", verseRef: "28:16" },
        { term: "فَغَفَرَ لَهُ", meaning: "So He forgave him", explanation: "Allah's immediate forgiveness", verseRef: "28:16" }
      ]
    },

    musaFlightMadyan: {
      name: "Flight to Madyan",
      nameArabic: "فرار موسى إلى مدين",
      color: "#06B6D4",
      icon: "Compass",
      concepts: [
        { term: "فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ", meaning: "He left, fearful, watchful", explanation: "Musa flees Egypt in fear", verseRef: "28:21" },
        { term: "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ", meaning: "Lord, save me from the wrongdoing people", explanation: "Prayer for deliverance", verseRef: "28:21" },
        { term: "وَلَمَّا تَوَجَّهَ تِلْقَاءَ مَدْيَنَ", meaning: "When he directed toward Madyan", explanation: "Journey to Midian without a guide", verseRef: "28:22" },
        { term: "عَسَىٰ رَبِّي أَن يَهْدِيَنِي سَوَاءَ السَّبِيلِ", meaning: "Perhaps my Lord will guide me to right way", explanation: "Trust in Allah's guidance", verseRef: "28:22" },
        { term: "أُمَّةً مِّنَ النَّاسِ يَسْقُونَ", meaning: "A group of people watering", explanation: "Scene at the well of Madyan", verseRef: "28:23" },
        { term: "امْرَأَتَيْنِ تَذُودَانِ", meaning: "Two women holding back", explanation: "Shu'ayb's daughters waiting", verseRef: "28:23" },
        { term: "لَا نَسْقِي حَتَّىٰ يُصْدِرَ الرِّعَاءُ", meaning: "We cannot water until shepherds leave", explanation: "Women's modest behavior", verseRef: "28:24" },
        { term: "وَأَبُونَا شَيْخٌ كَبِيرٌ", meaning: "And our father is an old man", explanation: "Reason they tend sheep themselves", verseRef: "28:24" }
      ]
    },

    musaService: {
      name: "Musa's Service and Marriage",
      nameArabic: "خدمة موسى وزواجه",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "فَسَقَىٰ لَهُمَا", meaning: "So he watered for them", explanation: "Musa's immediate help", verseRef: "28:24" },
        { term: "تَوَلَّىٰ إِلَى الظِّلِّ", meaning: "Withdrew to the shade", explanation: "Retreat without expecting reward", verseRef: "28:24" },
        { term: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", meaning: "My Lord, I am in need of whatever good You send", explanation: "Beautiful prayer of need", verseRef: "28:24" },
        { term: "فَجَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى اسْتِحْيَاءٍ", meaning: "One of them came walking shyly", explanation: "Modest approach with job offer", verseRef: "28:25" },
        { term: "إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ", meaning: "Best to hire is strong and trustworthy", explanation: "Qualities for employment", verseRef: "28:26" },
        { term: "أُنكِحَكَ إِحْدَى ابْنَتَيَّ", meaning: "I wish to marry you to one of my daughters", explanation: "Shu'ayb's marriage proposal", verseRef: "28:27" },
        { term: "أَن تَأْجُرَنِي ثَمَانِيَ حِجَجٍ", meaning: "That you serve me eight years", explanation: "Mahr as years of service", verseRef: "28:27" },
        { term: "ذَٰلِكَ بَيْنِي وَبَيْنَكَ", meaning: "That is between me and you", explanation: "Mutual agreement on terms", verseRef: "28:28" }
      ]
    },

    musaProphethood: {
      name: "Call to Prophethood",
      nameArabic: "نداء النبوة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَلَمَّا قَضَىٰ مُوسَى الْأَجَلَ", meaning: "When Musa completed the term", explanation: "Fulfilled his employment contract", verseRef: "28:29" },
        { term: "آنَسَ مِن جَانِبِ الطُّورِ نَارًا", meaning: "He perceived a fire from Mount Tur", explanation: "First sign - fire on the mountain", verseRef: "28:29" },
        { term: "نُودِيَ مِن شَاطِئِ الْوَادِ الْأَيْمَنِ", meaning: "He was called from right side of valley", explanation: "Allah's call to Musa", verseRef: "28:30" },
        { term: "فِي الْبُقْعَةِ الْمُبَارَكَةِ", meaning: "In the blessed spot", explanation: "Sacred ground of revelation", verseRef: "28:30" },
        { term: "مِنَ الشَّجَرَةِ", meaning: "From the tree", explanation: "Allah spoke from the tree", verseRef: "28:30" },
        { term: "إِنِّي أَنَا اللَّهُ رَبُّ الْعَالَمِينَ", meaning: "Indeed I am Allah, Lord of the worlds", explanation: "Divine self-identification", verseRef: "28:30" },
        { term: "أَلْقِ عَصَاكَ", meaning: "Throw down your staff", explanation: "First miracle - staff becomes serpent", verseRef: "28:31" },
        { term: "وَاضْمُمْ يَدَكَ إِلَىٰ جَنَاحِكَ", meaning: "Draw your hand to your side", explanation: "Second miracle - glowing hand", verseRef: "28:32" }
      ]
    },

    musaHarun: {
      name: "Musa and Harun's Mission",
      nameArabic: "رسالة موسى وهارون",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "قَتَلْتُ مِنْهُمْ نَفْسًا", meaning: "I killed a person among them", explanation: "Musa's fear of retribution", verseRef: "28:33" },
        { term: "أَخِي هَارُونُ هُوَ أَفْصَحُ مِنِّي لِسَانًا", meaning: "My brother Harun is more eloquent", explanation: "Request for Harun as support", verseRef: "28:34" },
        { term: "سَنَشُدُّ عَضُدَكَ بِأَخِيكَ", meaning: "We will strengthen you through your brother", explanation: "Allah grants request", verseRef: "28:35" },
        { term: "وَنَجْعَلُ لَكُمَا سُلْطَانًا", meaning: "And give you both authority", explanation: "Divine authority against Pharaoh", verseRef: "28:35" },
        { term: "فَلَا يَصِلُونَ إِلَيْكُمَا", meaning: "They cannot reach you", explanation: "Promise of protection", verseRef: "28:35" },
        { term: "أَنتُمَا وَمَنِ اتَّبَعَكُمَا الْغَالِبُونَ", meaning: "You and followers will be victorious", explanation: "Promise of ultimate victory", verseRef: "28:35" }
      ]
    },

    pharaohArrogance: {
      name: "Pharaoh's Arrogance and Defiance",
      nameArabic: "تكبر فرعون وعناده",
      color: "#EF4444",
      icon: "Crown",
      concepts: [
        { term: "فَلَمَّا جَاءَهُم مُّوسَىٰ بِآيَاتِنَا", meaning: "When Musa came with Our signs", explanation: "Miraculous proofs presented", verseRef: "28:36" },
        { term: "مَا هَٰذَا إِلَّا سِحْرٌ مُّفْتَرًى", meaning: "This is only invented magic", explanation: "Pharaoh's dismissal as magic", verseRef: "28:36" },
        { term: "وَقَالَ فِرْعَوْنُ... أَنَا رَبُّكُمُ الْأَعْلَىٰ", meaning: "Pharaoh said... I am your highest lord", explanation: "Ultimate arrogance - claiming divinity", verseRef: "28:38" },
        { term: "يَا هَامَانُ ابْنِ لِي صَرْحًا", meaning: "O Haman, build me a tower", explanation: "Attempt to reach heavens", verseRef: "28:38" },
        { term: "لَّعَلِّي أَطَّلِعُ إِلَىٰ إِلَٰهِ مُوسَىٰ", meaning: "That I may look at Musa's God", explanation: "Mockery of Allah", verseRef: "28:38" },
        { term: "وَاسْتَكْبَرَ هُوَ وَجُنُودُهُ فِي الْأَرْضِ", meaning: "He and his soldiers were arrogant", explanation: "Collective arrogance", verseRef: "28:39" },
        { term: "بِغَيْرِ الْحَقِّ", meaning: "Without right", explanation: "Unjustified pride", verseRef: "28:39" },
        { term: "وَظَنُّوا أَنَّهُمْ إِلَيْنَا لَا يُرْجَعُونَ", meaning: "They thought they would not return to Us", explanation: "Denial of accountability", verseRef: "28:39" }
      ]
    },

    pharaohDestruction: {
      name: "Destruction of Pharaoh",
      nameArabic: "هلاك فرعون",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَأَخَذْنَاهُ وَجُنُودَهُ", meaning: "So We seized him and his soldiers", explanation: "Divine retribution", verseRef: "28:40" },
        { term: "فَنَبَذْنَاهُمْ فِي الْيَمِّ", meaning: "And threw them into the sea", explanation: "Drowning in the Red Sea", verseRef: "28:40" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ الظَّالِمِينَ", meaning: "See how was the end of wrongdoers", explanation: "Moral lesson from their fate", verseRef: "28:40" },
        { term: "وَجَعَلْنَاهُمْ أَئِمَّةً يَدْعُونَ إِلَى النَّارِ", meaning: "We made them leaders inviting to Fire", explanation: "They lead others to Hell", verseRef: "28:41" },
        { term: "وَيَوْمَ الْقِيَامَةِ لَا يُنصَرُونَ", meaning: "On Resurrection Day they won't be helped", explanation: "No help in afterlife", verseRef: "28:41" },
        { term: "وَأَتْبَعْنَاهُمْ فِي هَٰذِهِ الدُّنْيَا لَعْنَةً", meaning: "We made curse follow them in this world", explanation: "Cursed in both worlds", verseRef: "28:42" },
        { term: "وَيَوْمَ الْقِيَامَةِ هُم مِّنَ الْمَقْبُوحِينَ", meaning: "On Resurrection they'll be of the despised", explanation: "Eternal disgrace", verseRef: "28:42" }
      ]
    },

    bookOfMusa: {
      name: "Book Given to Musa",
      nameArabic: "كتاب موسى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ", meaning: "We gave Musa the Book", explanation: "Torah given to Musa", verseRef: "28:43" },
        { term: "مِن بَعْدِ مَا أَهْلَكْنَا الْقُرُونَ الْأُولَىٰ", meaning: "After We destroyed former generations", explanation: "Torah came after punishments", verseRef: "28:43" },
        { term: "بَصَائِرَ لِلنَّاسِ", meaning: "As insights for people", explanation: "Book provides clear vision", verseRef: "28:43" },
        { term: "وَهُدًى وَرَحْمَةً", meaning: "And guidance and mercy", explanation: "Purpose of divine scripture", verseRef: "28:43" },
        { term: "لَعَلَّهُمْ يَتَذَكَّرُونَ", meaning: "That they might remember", explanation: "Goal is reflection", verseRef: "28:43" }
      ]
    },

    prophetConfirmation: {
      name: "Confirmation of Prophet Muhammad",
      nameArabic: "تأكيد نبوة محمد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَمَا كُنتَ بِجَانِبِ الْغَرْبِيِّ", meaning: "You were not at the western side", explanation: "Prophet not present at Musa's events", verseRef: "28:44" },
        { term: "إِذْ قَضَيْنَا إِلَىٰ مُوسَى الْأَمْرَ", meaning: "When We decreed to Musa the command", explanation: "Prophet learned only through revelation", verseRef: "28:44" },
        { term: "وَمَا كُنتَ مِنَ الشَّاهِدِينَ", meaning: "You were not among the witnesses", explanation: "Proof of Quran's divine origin", verseRef: "28:44" },
        { term: "وَلَٰكِنَّا أَنشَأْنَا قُرُونًا", meaning: "But We produced generations", explanation: "Long time passed since Musa", verseRef: "28:45" },
        { term: "وَمَا كُنتَ ثَاوِيًا فِي أَهْلِ مَدْيَنَ", meaning: "You were not dwelling among people of Madyan", explanation: "Prophet never visited Midian", verseRef: "28:45" },
        { term: "وَمَا كُنتَ بِجَانِبِ الطُّورِ", meaning: "You were not at side of Mount", explanation: "Prophet not at Mount Sinai", verseRef: "28:46" },
        { term: "وَلَٰكِن رَّحْمَةً مِّن رَّبِّكَ", meaning: "But as mercy from your Lord", explanation: "Revelation is divine mercy", verseRef: "28:46" }
      ]
    },

    disbelieversExcuses: {
      name: "Excuses of Disbelievers",
      nameArabic: "معاذير الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَوْلَا أُرْسِلَ إِلَيْنَا رَسُولٌ", meaning: "Why wasn't a messenger sent to us?", explanation: "Quraysh's previous excuse", verseRef: "28:47" },
        { term: "فَلَمَّا جَاءَهُمُ الْحَقُّ مِنْ عِندِنَا", meaning: "But when truth came from Us", explanation: "They rejected anyway", verseRef: "28:48" },
        { term: "لَوْلَا أُوتِيَ مِثْلَ مَا أُوتِيَ مُوسَىٰ", meaning: "Why wasn't he given like Musa was given?", explanation: "Demanding more miracles", verseRef: "28:48" },
        { term: "سِحْرَانِ تَظَاهَرَا", meaning: "Two magics supporting each other", explanation: "Dismissing both Torah and Quran", verseRef: "28:48" },
        { term: "إِنَّا بِكُلٍّ كَافِرُونَ", meaning: "Indeed, we disbelieve in all", explanation: "Rejection of all scripture", verseRef: "28:48" },
        { term: "قُلْ فَأْتُوا بِكِتَابٍ مِّنْ عِندِ اللَّهِ", meaning: "Say: Bring a book from Allah", explanation: "Challenge to produce better guidance", verseRef: "28:49" },
        { term: "فَإِن لَّمْ يَسْتَجِيبُوا لَكَ", meaning: "If they don't respond to you", explanation: "Their silence proves them wrong", verseRef: "28:50" },
        { term: "فَاعْلَمْ أَنَّمَا يَتَّبِعُونَ أَهْوَاءَهُمْ", meaning: "Know they only follow desires", explanation: "Rejection stems from desires, not reason", verseRef: "28:50" }
      ]
    },

    peopleOfBook: {
      name: "People of Earlier Scripture",
      nameArabic: "أهل الكتاب",
      color: "#10B981",
      icon: "Book",
      concepts: [
        { term: "الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ مِن قَبْلِهِ", meaning: "Those We gave scripture before it", explanation: "Sincere People of the Book", verseRef: "28:52" },
        { term: "هُم بِهِ يُؤْمِنُونَ", meaning: "They believe in it", explanation: "They recognize truth in Quran", verseRef: "28:52" },
        { term: "إِنَّا كُنَّا مِن قَبْلِهِ مُسْلِمِينَ", meaning: "Indeed, we were Muslims before it", explanation: "Submission to Allah predates Quran", verseRef: "28:53" },
        { term: "أُولَٰئِكَ يُؤْتَوْنَ أَجْرَهُم مَّرَّتَيْنِ", meaning: "Those will be given reward twice", explanation: "Double reward for believing both", verseRef: "28:54" },
        { term: "بِمَا صَبَرُوا", meaning: "Because they were patient", explanation: "Reward for patience", verseRef: "28:54" },
        { term: "وَيَدْرَءُونَ بِالْحَسَنَةِ السَّيِّئَةَ", meaning: "They repel evil with good", explanation: "Noble character trait", verseRef: "28:54" },
        { term: "وَإِذَا سَمِعُوا اللَّغْوَ أَعْرَضُوا عَنْهُ", meaning: "When they hear vain talk, they turn away", explanation: "Avoiding futile arguments", verseRef: "28:55" },
        { term: "لَنَا أَعْمَالُنَا وَلَكُمْ أَعْمَالُكُمْ", meaning: "For us our deeds, for you yours", explanation: "Each accountable for themselves", verseRef: "28:55" }
      ]
    },

    guidanceFromAllah: {
      name: "Guidance is from Allah Alone",
      nameArabic: "الهداية من الله",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ", meaning: "You cannot guide whom you love", explanation: "Prophet cannot give guidance", verseRef: "28:56" },
        { term: "وَلَٰكِنَّ اللَّهَ يَهْدِي مَن يَشَاءُ", meaning: "But Allah guides whom He wills", explanation: "Guidance is Allah's prerogative", verseRef: "28:56" },
        { term: "وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ", meaning: "He knows best the guided", explanation: "Allah knows sincere hearts", verseRef: "28:56" },
        { term: "إِن نَّتَّبِعِ الْهُدَىٰ مَعَكَ نُتَخَطَّفْ مِنْ أَرْضِنَا", meaning: "If we follow guidance, we'll be snatched from land", explanation: "Fear-based excuse for rejecting Islam", verseRef: "28:57" },
        { term: "أَوَلَمْ نُمَكِّن لَّهُمْ حَرَمًا آمِنًا", meaning: "Have We not established for them a sacred sanctuary?", explanation: "Allah already gave them security in Makkah", verseRef: "28:57" },
        { term: "يُجْبَىٰ إِلَيْهِ ثَمَرَاتُ كُلِّ شَيْءٍ", meaning: "To which fruits of everything are brought", explanation: "Makkah's prosperity from Allah", verseRef: "28:57" }
      ]
    },

    destroyedCities: {
      name: "Destroyed Civilizations",
      nameArabic: "القرى المهلكة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَكَمْ أَهْلَكْنَا مِن قَرْيَةٍ", meaning: "How many cities We destroyed", explanation: "Historical warning", verseRef: "28:58" },
        { term: "بَطِرَتْ مَعِيشَتَهَا", meaning: "Insolent in their livelihood", explanation: "Arrogance from prosperity", verseRef: "28:58" },
        { term: "فَتِلْكَ مَسَاكِنُهُمْ لَمْ تُسْكَن مِّن بَعْدِهِمْ", meaning: "Those are their dwellings, uninhabited after them", explanation: "Ruins as evidence", verseRef: "28:58" },
        { term: "إِلَّا قَلِيلًا", meaning: "Except a little", explanation: "Few survivors or ruins remain", verseRef: "28:58" },
        { term: "وَكُنَّا نَحْنُ الْوَارِثِينَ", meaning: "And We were the inheritors", explanation: "Allah inherits all", verseRef: "28:58" },
        { term: "وَمَا كَانَ رَبُّكَ مُهْلِكَ الْقُرَىٰ", meaning: "Your Lord would not destroy cities", explanation: "Allah is just", verseRef: "28:59" },
        { term: "حَتَّىٰ يَبْعَثَ فِي أُمِّهَا رَسُولًا", meaning: "Until He sends in their midst a messenger", explanation: "Warning always precedes punishment", verseRef: "28:59" }
      ]
    },

    worldlyVsEternal: {
      name: "Worldly vs. Eternal Life",
      nameArabic: "الدنيا والآخرة",
      color: "#8B5CF6",
      icon: "Scale",
      concepts: [
        { term: "وَمَا أُوتِيتُم مِّن شَيْءٍ", meaning: "Whatever you have been given", explanation: "Worldly possessions are temporary", verseRef: "28:60" },
        { term: "فَمَتَاعُ الْحَيَاةِ الدُّنْيَا وَزِينَتُهَا", meaning: "Is enjoyment of worldly life and its adornment", explanation: "This world is temporary pleasure", verseRef: "28:60" },
        { term: "وَمَا عِندَ اللَّهِ خَيْرٌ وَأَبْقَىٰ", meaning: "What is with Allah is better and more lasting", explanation: "Eternal rewards superior", verseRef: "28:60" },
        { term: "أَفَلَا تَعْقِلُونَ", meaning: "Will you not reason?", explanation: "Call to rational thinking", verseRef: "28:60" },
        { term: "أَفَمَن وَعَدْنَاهُ وَعْدًا حَسَنًا", meaning: "Is one whom We promised good promise", explanation: "Believer vs. disbeliever comparison", verseRef: "28:61" },
        { term: "فَهُوَ لَاقِيهِ", meaning: "He will meet it", explanation: "Promise will be fulfilled", verseRef: "28:61" },
        { term: "كَمَن مَّتَّعْنَاهُ مَتَاعَ الْحَيَاةِ الدُّنْيَا", meaning: "Like one given worldly enjoyment", explanation: "Worldly person's comparison", verseRef: "28:61" },
        { term: "ثُمَّ هُوَ يَوْمَ الْقِيَامَةِ مِنَ الْمُحْضَرِينَ", meaning: "Then on Resurrection is among those presented", explanation: "Brought for judgment", verseRef: "28:61" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment Scenes",
      nameArabic: "مشاهد يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "وَيَوْمَ يُنَادِيهِمْ", meaning: "The Day He will call them", explanation: "Allah's questioning on Judgment Day", verseRef: "28:62" },
        { term: "أَيْنَ شُرَكَائِيَ", meaning: "Where are My partners?", explanation: "Challenge to polytheists", verseRef: "28:62" },
        { term: "الَّذِينَ كُنتُمْ تَزْعُمُونَ", meaning: "Those you used to claim", explanation: "False gods they worshipped", verseRef: "28:62" },
        { term: "قَالَ الَّذِينَ حَقَّ عَلَيْهِمُ الْقَوْلُ", meaning: "Those against whom word has come true say", explanation: "Leaders of misguidance speak", verseRef: "28:63" },
        { term: "هَٰؤُلَاءِ الَّذِينَ أَغْوَيْنَا", meaning: "These are those we led astray", explanation: "Admitting they misled others", verseRef: "28:63" },
        { term: "أَغْوَيْنَاهُمْ كَمَا غَوَيْنَا", meaning: "We led them astray as we went astray", explanation: "Shared misguidance", verseRef: "28:63" },
        { term: "تَبَرَّأْنَا إِلَيْكَ", meaning: "We disassociate ourselves before You", explanation: "Disclaiming followers", verseRef: "28:63" },
        { term: "مَا كَانُوا إِيَّانَا يَعْبُدُونَ", meaning: "It was not us they worshipped", explanation: "False gods reject worshippers", verseRef: "28:63" }
      ]
    },

    qarunStory: {
      name: "Story of Qarun (Korah)",
      nameArabic: "قصة قارون",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "إِنَّ قَارُونَ كَانَ مِن قَوْمِ مُوسَىٰ", meaning: "Qarun was from people of Musa", explanation: "Israelite who became corrupt", verseRef: "28:76" },
        { term: "فَبَغَىٰ عَلَيْهِمْ", meaning: "But he oppressed them", explanation: "Tyranny against his own people", verseRef: "28:76" },
        { term: "وَآتَيْنَاهُ مِنَ الْكُنُوزِ", meaning: "We gave him treasures", explanation: "Immense wealth from Allah", verseRef: "28:76" },
        { term: "مَا إِنَّ مَفَاتِحَهُ لَتَنُوءُ بِالْعُصْبَةِ", meaning: "Keys would burden a strong group", explanation: "So much wealth, keys alone were heavy", verseRef: "28:76" },
        { term: "أُولِي الْقُوَّةِ", meaning: "Those of strength", explanation: "Strong men struggled with keys", verseRef: "28:76" },
        { term: "لَا تَفْرَحْ", meaning: "Do not exult", explanation: "Warning against arrogant joy", verseRef: "28:76" },
        { term: "إِنَّ اللَّهَ لَا يُحِبُّ الْفَرِحِينَ", meaning: "Allah does not love the exultant", explanation: "Arrogant celebration is disliked", verseRef: "28:76" }
      ]
    },

    qarunArrogance: {
      name: "Qarun's Arrogance and Downfall",
      nameArabic: "تكبر قارون وسقوطه",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ", meaning: "Seek through what Allah gave you the Hereafter", explanation: "Use wealth for eternal benefit", verseRef: "28:77" },
        { term: "وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا", meaning: "And do not forget your share of the world", explanation: "Balance worldly and spiritual", verseRef: "28:77" },
        { term: "وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ", meaning: "Do good as Allah has done good to you", explanation: "Gratitude through charity", verseRef: "28:77" },
        { term: "وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ", meaning: "And do not seek corruption in the land", explanation: "Prohibition of spreading evil", verseRef: "28:77" },
        { term: "قَالَ إِنَّمَا أُوتِيتُهُ عَلَىٰ عِلْمٍ عِندِي", meaning: "He said: I was given it for knowledge I have", explanation: "Qarun's arrogant response", verseRef: "28:78" },
        { term: "أَوَلَمْ يَعْلَمْ أَنَّ اللَّهَ قَدْ أَهْلَكَ مِن قَبْلِهِ", meaning: "Did he not know Allah destroyed before him", explanation: "Reminder of past destructions", verseRef: "28:78" },
        { term: "مِنَ الْقُرُونِ مَنْ هُوَ أَشَدُّ مِنْهُ قُوَّةً", meaning: "Generations stronger than him", explanation: "Others more powerful were destroyed", verseRef: "28:78" },
        { term: "وَأَكْثَرُ جَمْعًا", meaning: "And greater in accumulation", explanation: "Others had more wealth", verseRef: "28:78" }
      ]
    },

    qarunDisplay: {
      name: "Qarun's Display and Destruction",
      nameArabic: "عرض قارون وهلاكه",
      color: "#EC4899",
      icon: "Eye",
      concepts: [
        { term: "فَخَرَجَ عَلَىٰ قَوْمِهِ فِي زِينَتِهِ", meaning: "He came out to his people in his finery", explanation: "Ostentatious display of wealth", verseRef: "28:79" },
        { term: "قَالَ الَّذِينَ يُرِيدُونَ الْحَيَاةَ الدُّنْيَا", meaning: "Those who desired worldly life said", explanation: "Worldly people envied him", verseRef: "28:79" },
        { term: "يَا لَيْتَ لَنَا مِثْلَ مَا أُوتِيَ قَارُونُ", meaning: "If only we had like what Qarun was given", explanation: "Envy of material wealth", verseRef: "28:79" },
        { term: "إِنَّهُ لَذُو حَظٍّ عَظِيمٍ", meaning: "Indeed, he is owner of great fortune", explanation: "Worldly measure of success", verseRef: "28:79" },
        { term: "وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ", meaning: "Those given knowledge said", explanation: "Wise people's response", verseRef: "28:80" },
        { term: "وَيْلَكُمْ ثَوَابُ اللَّهِ خَيْرٌ", meaning: "Woe to you! Allah's reward is better", explanation: "Eternal rewards superior to worldly", verseRef: "28:80" },
        { term: "لِّمَنْ آمَنَ وَعَمِلَ صَالِحًا", meaning: "For those who believe and do good", explanation: "Condition for divine reward", verseRef: "28:80" },
        { term: "وَلَا يُلَقَّاهَا إِلَّا الصَّابِرُونَ", meaning: "Only the patient attain it", explanation: "Patience needed for true understanding", verseRef: "28:80" }
      ]
    },

    qarunDestruction: {
      name: "Qarun Swallowed by Earth",
      nameArabic: "ابتلاع الأرض لقارون",
      color: "#EF4444",
      icon: "Globe",
      concepts: [
        { term: "فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ", meaning: "We caused earth to swallow him and his home", explanation: "Divine punishment - earth opened", verseRef: "28:81" },
        { term: "فَمَا كَانَ لَهُ مِن فِئَةٍ يَنصُرُونَهُ", meaning: "No group could help him", explanation: "Wealth bought no protection", verseRef: "28:81" },
        { term: "مِن دُونِ اللَّهِ", meaning: "Against Allah", explanation: "None can oppose Allah", verseRef: "28:81" },
        { term: "وَمَا كَانَ مِنَ الْمُنتَصِرِينَ", meaning: "He was not of those who help themselves", explanation: "Helpless despite wealth", verseRef: "28:81" },
        { term: "وَأَصْبَحَ الَّذِينَ تَمَنَّوْا مَكَانَهُ", meaning: "Those who wished for his position yesterday", explanation: "Enviers' change of heart", verseRef: "28:82" },
        { term: "بِالْأَمْسِ يَقُولُونَ وَيْكَأَنَّ اللَّهَ", meaning: "Saying: Alas! It is Allah who", explanation: "Realization of divine control", verseRef: "28:82" },
        { term: "يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ", meaning: "Extends provision to whom He wills", explanation: "Allah controls sustenance", verseRef: "28:82" },
        { term: "وَيَقْدِرُ", meaning: "And restricts", explanation: "Allah also restricts provision", verseRef: "28:82" },
        { term: "لَوْلَا أَن مَّنَّ اللَّهُ عَلَيْنَا لَخَسَفَ بِنَا", meaning: "Had Allah not favored us, He would have swallowed us", explanation: "Grateful for being spared", verseRef: "28:82" }
      ]
    },

    hereafterReward: {
      name: "The Hereafter's True Success",
      nameArabic: "الفوز الحقيقي في الآخرة",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "تِلْكَ الدَّارُ الْآخِرَةُ", meaning: "That home of the Hereafter", explanation: "Focus on eternal life", verseRef: "28:83" },
        { term: "نَجْعَلُهَا لِلَّذِينَ لَا يُرِيدُونَ عُلُوًّا فِي الْأَرْضِ", meaning: "We assign to those who desire no superiority on earth", explanation: "Humility leads to Paradise", verseRef: "28:83" },
        { term: "وَلَا فَسَادًا", meaning: "Nor corruption", explanation: "Avoiding evil on earth", verseRef: "28:83" },
        { term: "وَالْعَاقِبَةُ لِلْمُتَّقِينَ", meaning: "And the outcome is for the righteous", explanation: "Final victory for God-conscious", verseRef: "28:83" },
        { term: "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ خَيْرٌ مِّنْهَا", meaning: "Whoever brings a good deed will have better", explanation: "Good deeds multiplied", verseRef: "28:84" },
        { term: "وَمَن جَاءَ بِالسَّيِّئَةِ", meaning: "Whoever brings an evil deed", explanation: "Evil deeds punished fairly", verseRef: "28:84" },
        { term: "فَلَا يُجْزَى الَّذِينَ عَمِلُوا السَّيِّئَاتِ إِلَّا مَا كَانُوا يَعْمَلُونَ", meaning: "They will only be recompensed for what they did", explanation: "Fair, proportional punishment", verseRef: "28:84" }
      ]
    },

    promiseToMuhammad: {
      name: "Allah's Promise to the Prophet",
      nameArabic: "وعد الله للنبي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "إِنَّ الَّذِي فَرَضَ عَلَيْكَ الْقُرْآنَ", meaning: "He who obligated upon you the Quran", explanation: "Allah who gave the Quran", verseRef: "28:85" },
        { term: "لَرَادُّكَ إِلَىٰ مَعَادٍ", meaning: "Will surely return you to a place of return", explanation: "Promise of return to Makkah / or meeting Allah", verseRef: "28:85" },
        { term: "قُل رَّبِّي أَعْلَمُ", meaning: "Say: My Lord knows best", explanation: "Allah knows who is guided", verseRef: "28:85" },
        { term: "مَن جَاءَ بِالْهُدَىٰ", meaning: "Who has come with guidance", explanation: "Prophet brought true guidance", verseRef: "28:85" },
        { term: "وَمَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ", meaning: "And who is in clear error", explanation: "Disbelievers in obvious misguidance", verseRef: "28:85" },
        { term: "وَمَا كُنتَ تَرْجُو أَن يُلْقَىٰ إِلَيْكَ الْكِتَابُ", meaning: "You did not expect the Book would be sent to you", explanation: "Prophethood unexpected by Muhammad", verseRef: "28:86" },
        { term: "إِلَّا رَحْمَةً مِّن رَّبِّكَ", meaning: "Except as mercy from your Lord", explanation: "Quran is divine mercy", verseRef: "28:86" },
        { term: "فَلَا تَكُونَنَّ ظَهِيرًا لِّلْكَافِرِينَ", meaning: "So never be a supporter of the disbelievers", explanation: "Command to oppose disbelief", verseRef: "28:86" }
      ]
    },

    finalMessage: {
      name: "Final Message and Tawheed",
      nameArabic: "الرسالة الختامية والتوحيد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَلَا يَصُدُّنَّكَ عَنْ آيَاتِ اللَّهِ", meaning: "Let them not turn you from Allah's verses", explanation: "Stay firm on truth", verseRef: "28:87" },
        { term: "بَعْدَ إِذْ أُنزِلَتْ إِلَيْكَ", meaning: "After they were revealed to you", explanation: "Quran already received", verseRef: "28:87" },
        { term: "وَادْعُ إِلَىٰ رَبِّكَ", meaning: "And invite to your Lord", explanation: "Continue calling to Allah", verseRef: "28:87" },
        { term: "وَلَا تَكُونَنَّ مِنَ الْمُشْرِكِينَ", meaning: "And never be of those who associate partners", explanation: "Absolute prohibition of shirk", verseRef: "28:87" },
        { term: "وَلَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: "Do not invoke with Allah another deity", explanation: "Pure monotheism commanded", verseRef: "28:88" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: "There is no deity except Him", explanation: "Declaration of Tawheed", verseRef: "28:88" },
        { term: "كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ", meaning: "Everything will perish except His Face", explanation: "Only Allah is eternal", verseRef: "28:88" },
        { term: "لَهُ الْحُكْمُ", meaning: "To Him belongs judgment", explanation: "Allah is the ultimate Judge", verseRef: "28:88" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: "And to Him you will be returned", explanation: "All return to Allah for judgment", verseRef: "28:88" }
      ]
    }
  },

  relationships: [
    { from: "فرعون علا في الأرض", to: "قارون... فبغى عليهم", type: "parallel", description: "Pharaoh and Qarun - both arrogant tyrants, similar fates" },
    { from: "يذبح أبناءهم", to: "نجعلهم أئمة", type: "reversal", description: "From infanticide to leadership - Allah's plan overturns oppression" },
    { from: "فألقيه في اليم", to: "فنبذناهم في اليم", type: "irony", description: "Baby Musa cast in river, Pharaoh drowned in sea" },
    { from: "إنما أوتيته على علم", to: "فخسفنا به وبداره الأرض", type: "consequence", description: "Qarun's arrogance led to his swallowing by earth" },
    { from: "رب إني لما أنزلت إلي من خير فقير", to: "فخرج على قومه في زينته", type: "contrast", description: "Musa's humble prayer vs. Qarun's arrogant display" },
    { from: "كل شيء هالك إلا وجهه", to: "فمتاع الحياة الدنيا", type: "hierarchy", description: "Only Allah's face remains - world is temporary" },
    { from: "إنك لا تهدي من أحببت", to: "ولكن الله يهدي من يشاء", type: "clarification", description: "Prophet cannot give guidance; only Allah guides" },
    { from: "نريد أن نمن على الذين استضعفوا", to: "والعاقبة للمتقين", type: "theme", description: "Allah favors the oppressed righteous in the end" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Pharaoh's Tyranny", verses: "28:1-6", description: "Opening: Pharaoh's arrogance, oppression of Bani Israel, Allah's plan to elevate them" },
      { stage: 2, theme: "Baby Musa's Preservation", verses: "28:7-13", description: "Divine protection: mother's inspiration, river, Pharaoh's house, return to mother" },
      { stage: 3, theme: "Musa's Youth and Flight", verses: "28:14-21", description: "Maturity, unintentional killing, fear, and escape from Egypt" },
      { stage: 4, theme: "Journey to Madyan", verses: "28:22-28", description: "Travel, helping at well, marriage to Shu'ayb's daughter, years of service" },
      { stage: 5, theme: "Prophethood at Mount Tur", verses: "28:29-35", description: "Fire, divine call, miracles (staff, hand), mission with Harun" },
      { stage: 6, theme: "Confrontation with Pharaoh", verses: "28:36-42", description: "Pharaoh's arrogance, tower of Haman, drowning in the sea" },
      { stage: 7, theme: "Torah and Prophet's Confirmation", verses: "28:43-50", description: "Book given to Musa, proof of Muhammad's prophethood, disbelievers' excuses" },
      { stage: 8, theme: "Sincere People of Book", verses: "28:51-55", description: "Those who believed in both scriptures receive double reward" },
      { stage: 9, theme: "Guidance from Allah", verses: "28:56-61", description: "Only Allah guides, worldly vs. eternal comparison" },
      { stage: 10, theme: "Judgment Day Scenes", verses: "28:62-75", description: "Questioning about partners, idol's denial, regret of disbelievers" },
      { stage: 11, theme: "Story of Qarun", verses: "28:76-82", description: "Qarun's wealth, arrogance, display, and destruction by earth" },
      { stage: 12, theme: "True Success and Conclusion", verses: "28:83-88", description: "Hereafter for humble, promise to Prophet, Tawheed declaration" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Trust Allah's plan", how: "Musa's mother cast him in river - impossible command led to his return", verse: "28:7-13" },
      { principle: "Repent immediately", how: "Musa repented instantly after sin - don't delay seeking forgiveness", verse: "28:15-16" },
      { principle: "Help others selflessly", how: "Musa helped women at well expecting nothing - then prayed to Allah for provision", verse: "28:24" },
      { principle: "Be strong and trustworthy", how: "Best employee qualities: strength and trust - develop both", verse: "28:26" },
      { principle: "Balance world and hereafter", how: "Seek hereafter with Allah's blessings, but don't forget worldly share", verse: "28:77" },
      { principle: "Never attribute blessings to yourself", how: "Qarun said 'I earned this by my knowledge' - he was swallowed by earth", verse: "28:78-81" },
      { principle: "Don't envy the wealthy", how: "Those who envied Qarun praised Allah when he was destroyed", verse: "28:79-82" },
      { principle: "Seek humility, not superiority", how: "Hereafter is for those who don't want superiority or corruption", verse: "28:83" },
      { principle: "Everything perishes except Allah", how: "Worldly attachments are futile - only Allah's face remains", verse: "28:88" }
    ]
  },

  uniqueInsight: {
    title: "The Parallel Downfall of Pharaoh and Qarun",
    insight: "Surah Al-Qasas presents two powerful parallel narratives: Pharaoh (external oppressor) and Qarun (internal oppressor from Bani Israel). Both were given immense power - Pharaoh political, Qarun financial. Both 'exalted themselves' (علا/بغى). Both dismissed divine signs. Both were destroyed spectacularly - Pharaoh by water (drowned in sea), Qarun by earth (swallowed by ground). The message: Arrogance leads to destruction regardless of who you are or what type of power you possess. Most remarkably, the surah shows people ENVYING Qarun before his destruction, then praising Allah after it. This warns us that what we envy in others may be their path to ruin. The surah concludes with 'كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ' (Everything perishes except His Face) - after showing us two of history's wealthiest and most powerful figures utterly destroyed, the reminder that EVERYTHING passes except Allah becomes devastatingly clear."
  },

  linguisticFeatures: {
    features: [
      { feature: "طسم opening", example: "Verse 1", effect: "Mysterious letters drawing attention to the divine source" },
      { feature: "Ring composition", example: "يم (sea) appears for both baby Musa (rescue) and Pharaoh (death)", effect: "Same element, opposite outcomes" },
      { feature: "فرعون repetition", example: "14 times in surah", effect: "Emphasis on his tyranny as central warning" },
      { feature: "Dua patterns", example: "رب إني ظلمت نفسي (28:16), رب إني لما أنزلت (28:24)", effect: "Musa's prayers as model supplications" },
      { feature: "كل شيء هالك إلا وجهه", example: "28:88", effect: "Powerful concluding statement of divine permanence vs. worldly transience" },
      { feature: "Contrast pairs", example: "استضعف/نمكن, خائف/آمن", effect: "Divine reversal of conditions" }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Musa (Moses)", role: "Central figure - his complete life story from birth to prophethood", verses: "28:3-43" },
      { name: "Harun (Aaron)", role: "Musa's brother and assistant in mission to Pharaoh", verses: "28:34-35" },
      { name: "Shu'ayb", role: "Implied - the old man of Madyan whose daughter Musa married", verses: "28:23-28" },
      { name: "Muhammad", role: "Addressed directly - confirmation of prophethood, promise of return", verses: "28:44-46, 85-88" }
    ]
  },

  historicalFigures: {
    figures: [
      { name: "Pharaoh (Fir'awn)", description: "Tyrant king of Egypt who persecuted Bani Israel", fate: "Drowned in the sea with his army" },
      { name: "Haman", description: "Pharaoh's minister who built the tower", fate: "Drowned with Pharaoh" },
      { name: "Qarun (Korah)", description: "Wealthy Israelite who became arrogant", fate: "Swallowed by the earth with his house" },
      { name: "Musa's mother", description: "Inspired by Allah to save her son", outcome: "Reunited with her son, peace of heart" },
      { name: "Musa's sister", description: "Followed the basket, suggested a nurse", outcome: "Helped reunite family" },
      { name: "Pharaoh's wife (Asiya)", description: "Found baby Musa, loved him, asked to spare him", verse: "28:9" }
    ]
  },

  keyDuas: {
    prayers: [
      { arabic: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي", transliteration: "Rabbi inni dhalamtu nafsi faghfir li", meaning: "My Lord, I have wronged myself, so forgive me", context: "Musa's repentance after killing", verse: "28:16" },
      { arabic: "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ", transliteration: "Rabbi najjini min al-qawm adh-dhalimin", meaning: "My Lord, save me from the wrongdoing people", context: "Musa's prayer when fleeing", verse: "28:21" },
      { arabic: "عَسَىٰ رَبِّي أَن يَهْدِيَنِي سَوَاءَ السَّبِيلِ", transliteration: "Asa rabbi an yahdiyanis sawaas-sabil", meaning: "Perhaps my Lord will guide me to the right way", context: "Musa's hope while journeying to Madyan", verse: "28:22" },
      { arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqir", meaning: "My Lord, I am in need of whatever good You send me", context: "Musa's beautiful prayer of need", verse: "28:24" }
    ]
  }
};

export default ONTOLOGY;
