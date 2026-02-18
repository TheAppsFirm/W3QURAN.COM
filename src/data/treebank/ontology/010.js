/**
 * Surah Yunus (10) - Ontology of Quranic Concepts
 * Jonah
 * Theme: Quran's divine origin, Prophetic stories (Musa, Nuh, Yunus), Tawheed, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 10,
  surahName: "Yunus",
  surahNameArabic: "يونس",
  revelationType: "Makki",
  totalAyahs: 109,

  categories: {
    quranDivineOrigin: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Origin of Quran",
      nameArabic: "المصدر الإلهي للقرآن",
      concepts: [
        { term: "الر تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ", meaning: "Alif Lam Ra - These are verses of the Wise Book", explanation: "Opening declaration of Quran's wisdom", verseRef: "10:1" },
        { term: "أَكَانَ لِلنَّاسِ عَجَبًا أَنْ أَوْحَيْنَا", meaning: "Is it wonder for people that We revealed?", explanation: "Addressing disbelief in revelation", verseRef: "10:2" },
        { term: "يَفْتَرِي", meaning: "He invented it (accusation)", explanation: "Disbelievers' claim", verseRef: "10:37" },
        { term: "مَا كَانَ هَٰذَا الْقُرْآنُ أَن يُفْتَرَىٰ", meaning: "This Quran could not have been invented", explanation: "Defense of Quran's authenticity", verseRef: "10:37" },
        { term: "فَأْتُوا بِسُورَةٍ مِّثْلِهِ", meaning: "Bring a surah like it", explanation: "Challenge to produce similar text", verseRef: "10:38" },
        { term: "بَلْ كَذَّبُوا بِمَا لَمْ يُحِيطُوا بِعِلْمِهِ", meaning: "They denied what they could not encompass in knowledge", explanation: "Root of rejection: lack of understanding", verseRef: "10:39" },
        { term: "نَبَأُ الرُّسُلِ مَا نُثَبِّتُ بِهِ فُؤَادَكَ", meaning: "Stories of messengers to strengthen your heart", explanation: "Purpose of prophetic narratives", verseRef: "10:57" }
      ]
    },

    tawheedSigns: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Signs of Allah's Oneness",
      nameArabic: "آيات التوحيد",
      concepts: [
        { term: "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: "Your Lord is Allah who created heavens and earth", explanation: "Creator of universe", verseRef: "10:3" },
        { term: "فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ", meaning: "In six days, then established on Throne", explanation: "Creation timeline and sovereignty", verseRef: "10:3" },
        { term: "يُدَبِّرُ الْأَمْرَ", meaning: "He arranges all affairs", explanation: "Divine management of universe", verseRef: "10:3" },
        { term: "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً", meaning: "He made the sun a light", explanation: "Sun as source of light", verseRef: "10:5" },
        { term: "وَالْقَمَرَ نُورًا", meaning: "And the moon a reflected light", explanation: "Moon reflects light (scientific accuracy)", verseRef: "10:5" },
        { term: "وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ", meaning: "Determined phases to know years", explanation: "Lunar calendar system", verseRef: "10:5" },
        { term: "إِنَّ فِي اخْتِلَافِ اللَّيْلِ وَالنَّهَارِ", meaning: "In alternation of night and day", explanation: "Day-night cycle as sign", verseRef: "10:6" },
        { term: "هُوَ الَّذِي يُسَيِّرُكُمْ فِي الْبَرِّ وَالْبَحْرِ", meaning: "He enables you to travel on land and sea", explanation: "Divine provision for travel", verseRef: "10:22" }
      ]
    },

    storyMusa: {
      color: '#EF4444',
      icon: 'Users',
      name: "Story of Musa and Pharaoh",
      nameArabic: "قصة موسى وفرعون",
      concepts: [
        { term: "ثُمَّ بَعَثْنَا مِن بَعْدِهِم مُّوسَىٰ وَهَارُونَ", meaning: "Then We sent Musa and Harun after them", explanation: "Mission of Musa and Harun", verseRef: "10:75" },
        { term: "إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ بِآيَاتِنَا", meaning: "To Pharaoh and his chiefs with Our signs", explanation: "Target audience: Pharaoh's court", verseRef: "10:75" },
        { term: "فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُّجْرِمِينَ", meaning: "They were arrogant criminal people", explanation: "Response: arrogance and crime", verseRef: "10:75" },
        { term: "أَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ آبَاءَنَا", meaning: "Have you come to turn us from our fathers' way?", explanation: "Blind following of ancestors", verseRef: "10:78" },
        { term: "السِّحْرُ", meaning: "Magic (accusation)", explanation: "Pharaoh called miracles magic", verseRef: "10:76-77" },
        { term: "فَلَمَّا أَلْقَوْا قَالَ مُوسَىٰ مَا جِئْتُم بِهِ السِّحْرُ", meaning: "When they threw, Musa said: What you brought is magic", explanation: "Musa's response to magicians", verseRef: "10:81" },
        { term: "فَآمَنَ لِمُوسَىٰ إِلَّا ذُرِّيَّةٌ مِّن قَوْمِهِ", meaning: "None believed Musa except offspring of his people", explanation: "Limited believers due to fear", verseRef: "10:83" },
        { term: "وَجَاوَزْنَا بِبَنِي إِسْرَائِيلَ الْبَحْرَ", meaning: "We took Children of Israel across the sea", explanation: "Crossing the Red Sea", verseRef: "10:90" },
        { term: "فَأَتْبَعَهُمْ فِرْعَوْنُ وَجُنُودُهُ بَغْيًا وَعَدْوًا", meaning: "Pharaoh and his soldiers pursued them wrongfully", explanation: "Pharaoh's pursuit", verseRef: "10:90" },
        { term: "آلْآنَ وَقَدْ عَصَيْتَ قَبْلُ", meaning: "Now? While you disobeyed before?", explanation: "Pharaoh's deathbed faith rejected", verseRef: "10:91" },
        { term: "فَالْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ", meaning: "Today We will save your body", explanation: "Pharaoh's body preserved as sign", verseRef: "10:92" },
        { term: "لِتَكُونَ لِمَنْ خَلْفَكَ آيَةً", meaning: "To be a sign for those after you", explanation: "His mummy as historical evidence", verseRef: "10:92" }
      ]
    },

    storyNuh: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Story of Nuh",
      nameArabic: "قصة نوح",
      concepts: [
        { term: "وَاتْلُ عَلَيْهِمْ نَبَأَ نُوحٍ", meaning: "Recite to them the story of Nuh", explanation: "Command to narrate Nuh's story", verseRef: "10:71" },
        { term: "يَا قَوْمِ إِن كَانَ كَبُرَ عَلَيْكُم مَّقَامِي وَتَذْكِيرِي بِآيَاتِ اللَّهِ", meaning: "O my people, if my presence and reminding offends you", explanation: "Nuh addresses hostility", verseRef: "10:71" },
        { term: "فَعَلَى اللَّهِ تَوَكَّلْتُ", meaning: "Upon Allah I rely", explanation: "Tawakkul of Nuh", verseRef: "10:71" },
        { term: "فَأَجْمِعُوا أَمْرَكُمْ وَشُرَكَاءَكُمْ", meaning: "Gather your affair and your partners", explanation: "Challenge to opponents", verseRef: "10:71" },
        { term: "فَكَذَّبُوهُ فَنَجَّيْنَاهُ وَمَن مَّعَهُ فِي الْفُلْكِ", meaning: "They denied him, so We saved him and those with him in the ship", explanation: "Salvation through the Ark", verseRef: "10:73" },
        { term: "وَأَغْرَقْنَا الَّذِينَ كَذَّبُوا بِآيَاتِنَا", meaning: "And We drowned those who denied Our signs", explanation: "Punishment by flood", verseRef: "10:73" }
      ]
    },

    storyYunus: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Story of Yunus",
      nameArabic: "قصة يونس",
      concepts: [
        { term: "فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا إِلَّا قَوْمَ يُونُسَ", meaning: "If only a city had believed and benefited - except people of Yunus", explanation: "Unique case: entire city repented", verseRef: "10:98" },
        { term: "لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ", meaning: "When they believed, We removed disgraceful punishment", explanation: "Collective repentance accepted", verseRef: "10:98" },
        { term: "وَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ", meaning: "And gave them enjoyment for a time", explanation: "Respite granted to believers", verseRef: "10:98" }
      ]
    },

    humanNature: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      concepts: [
        { term: "وَإِذَا مَسَّ الْإِنسَانَ الضُّرُّ دَعَانَا", meaning: "When harm touches man, he calls upon Us", explanation: "Turning to Allah in hardship", verseRef: "10:12" },
        { term: "فَلَمَّا كَشَفْنَا عَنْهُ ضُرَّهُ مَرَّ", meaning: "When We remove his hardship, he passes on", explanation: "Forgetting Allah after relief", verseRef: "10:12" },
        { term: "كَأَن لَّمْ يَدْعُنَا إِلَىٰ ضُرٍّ مَّسَّهُ", meaning: "As if he never called Us for hardship", explanation: "Human ingratitude", verseRef: "10:12" },
        { term: "هُوَ الَّذِي يُسَيِّرُكُمْ فِي الْبَرِّ وَالْبَحْرِ", meaning: "He enables you to travel land and sea", explanation: "Divine provision for journey", verseRef: "10:22" },
        { term: "حَتَّىٰ إِذَا كُنتُمْ فِي الْفُلْكِ وَجَرَيْنَ بِهِم بِرِيحٍ طَيِّبَةٍ", meaning: "Until you are in ships sailing with good wind", explanation: "Smooth sailing initially", verseRef: "10:22" },
        { term: "وَجَاءَتْهَا رِيحٌ عَاصِفٌ", meaning: "Then comes a stormy wind", explanation: "Sudden trial at sea", verseRef: "10:22" },
        { term: "دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ", meaning: "They call Allah with sincere faith", explanation: "Sincerity in crisis", verseRef: "10:22" },
        { term: "فَلَمَّا أَنجَاهُمْ إِذَا هُمْ يَبْغُونَ فِي الْأَرْضِ", meaning: "When He saves them, they transgress on earth", explanation: "Return to sin after salvation", verseRef: "10:23" }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "إِلَيْهِ مَرْجِعُكُمْ جَمِيعًا", meaning: "To Him is your return, all of you", explanation: "Universal return to Allah", verseRef: "10:4" },
        { term: "وَعْدَ اللَّهِ حَقًّا", meaning: "Promise of Allah is true", explanation: "Certainty of resurrection", verseRef: "10:4" },
        { term: "إِنَّهُ يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ", meaning: "He originates creation then repeats it", explanation: "Allah creates and resurrects", verseRef: "10:4" },
        { term: "لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ بِالْقِسْطِ", meaning: "To reward believers with justice", explanation: "Fair recompense for believers", verseRef: "10:4" },
        { term: "وَالَّذِينَ كَفَرُوا لَهُمْ شَرَابٌ مِّنْ حَمِيمٍ", meaning: "Disbelievers will have boiling drink", explanation: "Punishment for disbelief", verseRef: "10:4" },
        { term: "يَوْمَ يَحْشُرُهُمْ كَأَن لَّمْ يَلْبَثُوا إِلَّا سَاعَةً", meaning: "Day He gathers them as if they stayed only an hour", explanation: "Life seems short in retrospect", verseRef: "10:45" },
        { term: "يَتَعَارَفُونَ بَيْنَهُمْ", meaning: "They will recognize each other", explanation: "Recognition on Judgment Day", verseRef: "10:45" },
        { term: "قَدْ خَسِرَ الَّذِينَ كَذَّبُوا بِلِقَاءِ اللَّهِ", meaning: "Lost are those who denied meeting Allah", explanation: "Ultimate loss of deniers", verseRef: "10:45" }
      ]
    },

    guidanceAndMisguidance: {
      color: '#10B981',
      icon: 'Book',
      name: "Guidance and Misguidance",
      nameArabic: "الهداية والضلال",
      concepts: [
        { term: "مَن يَهْدِ اللَّهُ فَهُوَ الْمُهْتَدِي", meaning: "Whoever Allah guides is truly guided", explanation: "Source of true guidance", verseRef: "10:35" },
        { term: "وَمَن يُضْلِلْ فَلَن تَجِدَ لَهُ وَلِيًّا مُّرْشِدًا", meaning: "Whoever He misguides, no guiding friend", explanation: "Misguidance as consequence", verseRef: "10:35" },
        { term: "قُلْ هَلْ مِن شُرَكَائِكُم مَّن يَهْدِي إِلَى الْحَقِّ", meaning: "Say: Can any of your partners guide to truth?", explanation: "Challenge to polytheists", verseRef: "10:35" },
        { term: "أَفَمَن يَهْدِي إِلَى الْحَقِّ أَحَقُّ أَن يُتَّبَعَ", meaning: "Is one who guides to truth more worthy to be followed?", explanation: "Logical argument for following Allah", verseRef: "10:35" },
        { term: "إِلَّا الظَّنَّ وَإِنَّ الظَّنَّ لَا يُغْنِي مِنَ الْحَقِّ شَيْئًا", meaning: "Only assumption, and assumption avails nothing against truth", explanation: "Conjecture vs. certainty", verseRef: "10:36" }
      ]
    },

    propheticConsole: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Consolation to the Prophet",
      nameArabic: "تسلية النبي",
      concepts: [
        { term: "وَلَا يَحْزُنكَ قَوْلُهُمْ", meaning: "Let not their speech grieve you", explanation: "Comfort against mockery", verseRef: "10:65" },
        { term: "إِنَّ الْعِزَّةَ لِلَّهِ جَمِيعًا", meaning: "Indeed, all honor belongs to Allah", explanation: "True source of honor", verseRef: "10:65" },
        { term: "وَإِن كَذَّبُوكَ فَقُل لِّي عَمَلِي وَلَكُمْ عَمَلُكُمْ", meaning: "If they deny you, say: My deeds are mine, yours are yours", explanation: "Separation of accountability", verseRef: "10:41" },
        { term: "أَنتُم بَرِيئُونَ مِمَّا أَعْمَلُ وَأَنَا بَرِيءٌ مِّمَّا تَعْمَلُونَ", meaning: "You are free of what I do, I am free of what you do", explanation: "Individual responsibility", verseRef: "10:41" },
        { term: "فَإِن تَوَلَّوْا فَمَا أَرْسَلْنَاكَ عَلَيْهِمْ حَفِيظًا", meaning: "If they turn away, We did not send you as guardian over them", explanation: "Prophet's role is to convey, not force", verseRef: "10:108" },
        { term: "وَاصْبِرْ حَتَّىٰ يَحْكُمَ اللَّهُ", meaning: "Be patient until Allah judges", explanation: "Command for patience", verseRef: "10:109" }
      ]
    },

    rejectersArguments: {
      color: '#10B981',
      icon: 'Book',
      name: "Arguments of Rejecters",
      nameArabic: "حجج المكذبين",
      concepts: [
        { term: "لَوْلَا أُنزِلَ عَلَيْهِ آيَةٌ مِّن رَّبِّهِ", meaning: "Why is a sign not sent down from his Lord?", explanation: "Demand for miraculous sign", verseRef: "10:20" },
        { term: "ائْتِ بِقُرْآنٍ غَيْرِ هَٰذَا أَوْ بَدِّلْهُ", meaning: "Bring a different Quran or change it", explanation: "Request to alter revelation", verseRef: "10:15" },
        { term: "قُلْ مَا يَكُونُ لِي أَنْ أُبَدِّلَهُ مِن تِلْقَاءِ نَفْسِي", meaning: "Say: I cannot change it of my own accord", explanation: "Prophet cannot modify revelation", verseRef: "10:15" },
        { term: "إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰ إِلَيَّ", meaning: "I only follow what is revealed to me", explanation: "Complete obedience to revelation", verseRef: "10:15" },
        { term: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ", meaning: "When will this promise be, if you are truthful?", explanation: "Mockery of Day of Judgment", verseRef: "10:48" }
      ]
    },

    duaAndWorship: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Supplication and Worship",
      nameArabic: "الدعاء والعبادة",
      concepts: [
        { term: "قُلْ أَرَأَيْتُمْ إِنْ أَتَاكُمْ عَذَابُهُ بَيَاتًا أَوْ نَهَارًا", meaning: "Say: Have you seen if His punishment came by night or day?", explanation: "Sudden punishment warning", verseRef: "10:50" },
        { term: "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا", meaning: "Say: In Allah's bounty and mercy, let them rejoice", explanation: "True source of joy", verseRef: "10:58" },
        { term: "هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ", meaning: "It is better than what they accumulate", explanation: "Faith over worldly wealth", verseRef: "10:58" },
        { term: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", meaning: "Indeed, allies of Allah - no fear upon them nor grief", explanation: "Security for friends of Allah", verseRef: "10:62" },
        { term: "الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ", meaning: "Those who believed and had taqwa", explanation: "Characteristics of Allah's allies", verseRef: "10:63" },
        { term: "لَهُمُ الْبُشْرَىٰ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ", meaning: "For them is good news in this life and the Hereafter", explanation: "Glad tidings for believers", verseRef: "10:64" }
      ]
    },

    falseDeitiesRefuted: {
      color: '#10B981',
      icon: 'Book',
      name: "Refutation of False Deities",
      nameArabic: "إبطال الآلهة الباطلة",
      concepts: [
        { term: "وَيَعْبُدُونَ مِن دُونِ اللَّهِ مَا لَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ", meaning: "They worship besides Allah what neither harms nor benefits", explanation: "Uselessness of idols", verseRef: "10:18" },
        { term: "وَيَقُولُونَ هَٰؤُلَاءِ شُفَعَاؤُنَا عِندَ اللَّهِ", meaning: "They say: These are our intercessors with Allah", explanation: "False intercession belief", verseRef: "10:18" },
        { term: "قُلْ أَتُنَبِّئُونَ اللَّهَ بِمَا لَا يَعْلَمُ", meaning: "Say: Do you inform Allah of what He does not know?", explanation: "Absurdity of their claims", verseRef: "10:18" },
        { term: "قُلْ مَن يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: "Say: Who provides for you from heaven and earth?", explanation: "Challenge: who is the Provider?", verseRef: "10:31" },
        { term: "أَمَّن يَمْلِكُ السَّمْعَ وَالْأَبْصَارَ", meaning: "Or who controls hearing and sight?", explanation: "Allah controls senses", verseRef: "10:31" },
        { term: "وَمَن يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ", meaning: "Who brings the living from the dead?", explanation: "Life from death", verseRef: "10:31" },
        { term: "وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ", meaning: "And brings the dead from the living?", explanation: "Death from life", verseRef: "10:31" },
        { term: "وَمَن يُدَبِّرُ الْأَمْرَ", meaning: "And who arranges every matter?", explanation: "Divine management", verseRef: "10:31" },
        { term: "فَسَيَقُولُونَ اللَّهُ", meaning: "They will say: Allah", explanation: "Even polytheists admit Allah's role", verseRef: "10:31" },
        { term: "فَقُلْ أَفَلَا تَتَّقُونَ", meaning: "Say: Will you not then fear Him?", explanation: "Logical conclusion: fear Allah alone", verseRef: "10:31" }
      ]
    },

    quranAsHealing: {
      color: '#10B981',
      icon: 'Book',
      name: "Quran as Healing",
      nameArabic: "القرآن شفاء",
      concepts: [
        { term: "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ", meaning: "O people, there has come to you advice from your Lord", explanation: "Quran as admonition", verseRef: "10:57" },
        { term: "وَشِفَاءٌ لِّمَا فِي الصُّدُورِ", meaning: "And healing for what is in the chests", explanation: "Spiritual cure", verseRef: "10:57" },
        { term: "وَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ", meaning: "And guidance and mercy for believers", explanation: "Guidance and mercy combined", verseRef: "10:57" }
      ]
    }
  },

  relationships: [
    { from: "قصة نوح", to: "قصة موسى", type: "sequence", description: "Prophets sent in succession - rejection pattern repeats" },
    { from: "قصة موسى", to: "قصة يونس", type: "contrast", description: "Pharaoh's people destroyed vs Yunus's people saved" },
    { from: "آيات التوحيد", to: "إبطال الآلهة", type: "causation", description: "Signs prove Tawheed → false gods refuted" },
    { from: "طبيعة الإنسان", to: "يوم القيامة", type: "warning", description: "Human ingratitude → accountability on Judgment Day" },
    { from: "الشمس ضياء", to: "القمر نوراً", type: "distinction", description: "Sun = source of light (ضياء); Moon = reflected light (نور)" },
    { from: "فرعون", to: "ننجيك ببدنك", type: "consequence", description: "Pharaoh's arrogance → body preserved as lesson" },
    { from: "قوم يونس", to: "كشفنا العذاب", type: "consequence", description: "Collective repentance → punishment lifted" },
    { from: "الدعاء في الضر", to: "البغي بعد النجاة", type: "human_pattern", description: "Sincere prayer in hardship → transgression after relief" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Divine Origin", verses: "10:1-10", description: "Opening with Quran's wisdom and signs of Allah" },
      { stage: 2, theme: "Human Ingratitude", verses: "10:11-23", description: "Human behavior: calling Allah in distress, forgetting after relief" },
      { stage: 3, theme: "Worldly Life Parable", verses: "10:24-30", description: "Life like rain: flourishes then perishes" },
      { stage: 4, theme: "Tawheed Proofs", verses: "10:31-40", description: "Logical arguments for Allah's oneness" },
      { stage: 5, theme: "Quran Challenge", verses: "10:37-40", description: "Challenge to produce a surah like it" },
      { stage: 6, theme: "Day of Judgment", verses: "10:41-56", description: "Accountability, brevity of worldly life" },
      { stage: 7, theme: "Quran as Healing", verses: "10:57-70", description: "Spiritual cure, joy in Allah's bounty, allies of Allah" },
      { stage: 8, theme: "Story of Nuh", verses: "10:71-74", description: "Nuh's message, rejection, flood" },
      { stage: 9, theme: "Story of Musa", verses: "10:75-92", description: "Confrontation with Pharaoh, drowning, body preserved" },
      { stage: 10, theme: "Story of Yunus", verses: "10:98", description: "Unique case: entire city repented and saved" },
      { stage: 11, theme: "Conclusion", verses: "10:99-109", description: "No forced belief, follow revelation, patience" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Trust Allah in adversity", how: "Like Nuh: 'Upon Allah I rely - gather your forces'", verse: "10:71" },
      { principle: "Repentance is always possible", how: "Yunus's people repented at the last moment and were saved", verse: "10:98" },
      { principle: "Don't be like Pharaoh", how: "Deathbed repentance without sincerity was rejected", verse: "10:90-91" },
      { principle: "Be consistent in worship", how: "Don't only call Allah in hardship, forget Him in ease", verse: "10:12" },
      { principle: "Rejoice in faith, not wealth", how: "Allah's bounty and mercy > all worldly accumulation", verse: "10:58" },
      { principle: "No fear for believers", how: "Allies of Allah have no fear nor grief", verse: "10:62" },
      { principle: "Quran heals the heart", how: "Use Quran as spiritual medicine for doubts and diseases", verse: "10:57" },
      { principle: "Patience until Allah's judgment", how: "Prophet commanded to wait for Allah's decree", verse: "10:109" }
    ]
  },

  uniqueInsight: {
    title: "Pharaoh's Body - A Sign for Humanity",
    insight: "Verse 10:92 states that Allah preserved Pharaoh's body 'as a sign for those after you.' This was revealed 1400 years ago when the mummy was buried. In 1898, the mummy believed to be the Pharaoh of Exodus (possibly Merneptah or Ramesses II) was discovered and is now in Cairo's Egyptian Museum. This preservation, predicted in the Quran, serves as historical evidence - his drowned body a testament to divine punishment and a warning against arrogance."
  },

  historicalContext: {
    note: "Surah Yunus was revealed in the late Makkan period when opposition to the Prophet ﷺ was intense. The stories of Nuh, Musa, and Yunus consoled him and warned the Quraysh of similar fates. The name 'Yunus' comes from verse 98, highlighting the unique case where an entire city's repentance was accepted - offering hope to even the most sinful communities."
  },

  linguisticFeatures: {
    features: [
      { feature: "ضِيَاء vs نُور", example: "Sun=ضياء (source), Moon=نور (reflected)", effect: "Scientific precision in word choice" },
      { feature: "الْحَكِيم", example: "Wise Book (verse 1)", effect: "Emphasizes Quran's wisdom, not just knowledge" },
      { feature: "غَفَّار", example: "Ever-Forgiving (not mentioned but implied pattern)", effect: "faʿʿāl pattern - intensive" },
      { feature: "نُنَجِّيكَ بِبَدَنِكَ", example: "Save you with your body", effect: "بَدَن = lifeless body, not جِسْم = living body" },
      { feature: "مَوْعِظَة، شِفَاء، هُدًى، رَحْمَة", example: "Four descriptions of Quran in one verse", effect: "Comprehensive spiritual benefit" },
      { feature: "خَلْفَكَ", example: "After you (for those behind)", effect: "Implies future generations will see Pharaoh" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "10:5", topic: "Astronomy", note: "الشَّمْسَ ضِيَاءً (sun as radiant light) vs القَمَرَ نُورًا (moon as reflected light) - scientifically accurate distinction" },
      { verse: "10:5", topic: "Calendar", note: "مَنَازِل (phases) for calculating years and counting - lunar calendar system" },
      { verse: "10:92", topic: "Archaeology", note: "نُنَجِّيكَ بِبَدَنِكَ - Pharaoh's mummy preserved, discovered in modern era" },
      { verse: "10:3", topic: "Cosmology", note: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ - creation in six periods (يوم can mean era)" }
    ]
  },

  crossReferences: [
    { surah: 7, name: "Al-A'raf", connection: "Detailed story of Musa and Pharaoh", verses: "7:103-137" },
    { surah: 26, name: "Ash-Shu'ara", connection: "Musa's story with more dialogue", verses: "26:10-68" },
    { surah: 37, name: "As-Saffat", connection: "Story of Yunus in the whale", verses: "37:139-148" },
    { surah: 68, name: "Al-Qalam", connection: "Reference to 'companion of the fish' (Yunus)", verses: "68:48-50" },
    { surah: 21, name: "Al-Anbiya", connection: "Yunus's supplication from the whale", verses: "21:87-88" },
    { surah: 71, name: "Nuh", connection: "Entire surah dedicated to Nuh's story", verses: "71:1-28" },
    { surah: 11, name: "Hud", connection: "Stories of multiple prophets including Nuh", verses: "11:25-49" }
  ]
};

export default ONTOLOGY;
