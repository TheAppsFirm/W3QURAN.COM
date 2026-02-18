/**
 * Surah Ash-Shu'ara (26) - Ontology of Quranic Concepts
 * The Poets
 * Theme: The Poets, Prophet stories (Musa, Ibrahim, Nuh, Hud, Salih, Lut, Shu'ayb) with repeated refrain, revelation and poets contrast
 */

export const ONTOLOGY = {
  surahId: 26,
  surahName: "Ash-Shu'ara",
  surahNameArabic: "الشعراء",
  revelationType: "Makki",
  totalAyahs: 227,

  categories: {
    quranIntroduction: {
      name: "Introduction to the Quran",
      nameArabic: "مقدمة القرآن",
      color: "#F59E0B",
      icon: "Book",
      concepts: [
        { term: "طسم", meaning: "Ta Sin Mim (disconnected letters)", explanation: "Mysterious letters opening the surah", verseRef: "26:1" },
        { term: "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ", meaning: "These are verses of the clear Book", explanation: "Quran's clarity emphasized", verseRef: "26:2" },
        { term: "لَعَلَّكَ بَاخِعٌ نَّفْسَكَ", meaning: "Perhaps you would destroy yourself", explanation: "Prophet's intense concern for people", verseRef: "26:3" },
        { term: "أَلَّا يَكُونُوا مُؤْمِنِينَ", meaning: "That they will not be believers", explanation: "Grief over disbelief", verseRef: "26:3" },
        { term: "إِن نَّشَأْ نُنَزِّلْ عَلَيْهِم مِّنَ السَّمَاءِ آيَةً", meaning: "If We willed, We could send a sign from heaven", explanation: "Allah's power to compel belief", verseRef: "26:4" },
        { term: "فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ", meaning: "Their necks would remain humbled to it", explanation: "Overwhelming sign would compel submission", verseRef: "26:4" }
      ]
    },

    prophetMuhammadComfort: {
      name: "Comfort to Prophet Muhammad",
      nameArabic: "تسلية النبي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَمَا يَأْتِيهِم مِّن ذِكْرٍ مِّنَ الرَّحْمَٰنِ مُحْدَثٍ إِلَّا كَانُوا عَنْهُ مُعْرِضِينَ", meaning: "No new reminder comes to them from the Most Merciful but they turn away", explanation: "Pattern of rejection", verseRef: "26:5" },
        { term: "فَقَدْ كَذَّبُوا", meaning: "They have denied", explanation: "Confirmation of denial", verseRef: "26:6" },
        { term: "فَسَيَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: "News of what they used to mock will come to them", explanation: "Warning of consequences", verseRef: "26:6" },
        { term: "أَوَلَمْ يَرَوْا إِلَى الْأَرْضِ كَمْ أَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ", meaning: "Have they not seen the earth - how much noble growth We caused", explanation: "Signs in vegetation", verseRef: "26:7" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً", meaning: "Indeed in that is a sign", explanation: "Nature as evidence", verseRef: "26:8" },
        { term: "وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ", meaning: "But most of them were not believers", explanation: "Majority reject despite signs", verseRef: "26:8" }
      ]
    },

    divineRefrain: {
      name: "The Repeated Refrain",
      nameArabic: "اللازمة المتكررة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ", meaning: "And indeed, your Lord - He is the Exalted in Might, the Merciful", explanation: "Central refrain after each story - combines power and mercy", verseRef: "26:9,68,104,122,140,159,175,191" },
        { term: "الْعَزِيز", meaning: "The Exalted in Might", explanation: "Power to punish deniers", verseRef: "throughout" },
        { term: "الرَّحِيم", meaning: "The Merciful", explanation: "Mercy to save believers", verseRef: "throughout" }
      ]
    },

    musaStoryPart1: {
      name: "Story of Musa - Divine Call",
      nameArabic: "قصة موسى - النداء الإلهي",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَإِذْ نَادَىٰ رَبُّكَ مُوسَىٰ", meaning: "When your Lord called Musa", explanation: "Divine calling begins narrative", verseRef: "26:10" },
        { term: "أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ", meaning: "Go to the wrongdoing people", explanation: "Mission to oppressors", verseRef: "26:10" },
        { term: "قَوْمَ فِرْعَوْنَ أَلَا يَتَّقُونَ", meaning: "The people of Pharaoh - will they not fear Allah?", explanation: "Call to God-consciousness", verseRef: "26:11" },
        { term: "قَالَ رَبِّ إِنِّي أَخَافُ أَن يُكَذِّبُونِ", meaning: "He said: My Lord, I fear they will deny me", explanation: "Musa's concern about rejection", verseRef: "26:12" },
        { term: "وَيَضِيقُ صَدْرِي", meaning: "And my breast will tighten", explanation: "Anxiety about the mission", verseRef: "26:13" },
        { term: "وَلَا يَنطَلِقُ لِسَانِي", meaning: "And my tongue will not be fluent", explanation: "Speech difficulty", verseRef: "26:13" },
        { term: "فَأَرْسِلْ إِلَىٰ هَارُونَ", meaning: "So send for Harun", explanation: "Request for help", verseRef: "26:13" },
        { term: "وَلَهُمْ عَلَيَّ ذَنبٌ فَأَخَافُ أَن يَقْتُلُونِ", meaning: "They have a charge against me, I fear they will kill me", explanation: "Past incident with Egyptian", verseRef: "26:14" }
      ]
    },

    musaStoryPart2: {
      name: "Story of Musa - Divine Assurance",
      nameArabic: "قصة موسى - الطمأنينة الإلهية",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "كَلَّا فَاذْهَبَا بِآيَاتِنَا", meaning: "No! Go both of you with Our signs", explanation: "Allah dismisses fears", verseRef: "26:15" },
        { term: "إِنَّا مَعَكُم مُّسْتَمِعُونَ", meaning: "Indeed We are with you, listening", explanation: "Divine companionship promised", verseRef: "26:15" },
        { term: "فَأْتِيَا فِرْعَوْنَ فَقُولَا إِنَّا رَسُولُ رَبِّ الْعَالَمِينَ", meaning: "Go to Pharaoh and say: We are messengers of the Lord of the worlds", explanation: "Mission statement", verseRef: "26:16" },
        { term: "أَنْ أَرْسِلْ مَعَنَا بَنِي إِسْرَائِيلَ", meaning: "Send with us the Children of Israel", explanation: "Demand for release", verseRef: "26:17" }
      ]
    },

    musaStoryPart3: {
      name: "Story of Musa - Confronting Pharaoh",
      nameArabic: "قصة موسى - مواجهة فرعون",
      color: "#EF4444",
      icon: "Zap",
      concepts: [
        { term: "قَالَ أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا", meaning: "Did we not raise you among us as a child?", explanation: "Pharaoh's reminder of upbringing", verseRef: "26:18" },
        { term: "وَلَبِثْتَ فِينَا مِنْ عُمُرِكَ سِنِينَ", meaning: "And you remained among us years of your life", explanation: "Years spent in palace", verseRef: "26:19" },
        { term: "وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ", meaning: "And you did your deed which you did", explanation: "Reference to killing Egyptian", verseRef: "26:20" },
        { term: "وَأَنتَ مِنَ الْكَافِرِينَ", meaning: "And you were ungrateful", explanation: "Pharaoh's accusation", verseRef: "26:19" },
        { term: "قَالَ فَعَلْتُهَا إِذًا وَأَنَا مِنَ الضَّالِّينَ", meaning: "I did it then when I was astray", explanation: "Musa's acknowledgment before guidance", verseRef: "26:20" },
        { term: "فَفَرَرْتُ مِنكُمْ لَمَّا خِفْتُكُمْ", meaning: "So I fled from you when I feared you", explanation: "Flight to Madyan", verseRef: "26:21" },
        { term: "فَوَهَبَ لِي رَبِّي حُكْمًا", meaning: "Then my Lord granted me wisdom", explanation: "Divine gift of prophethood", verseRef: "26:21" },
        { term: "وَجَعَلَنِي مِنَ الْمُرْسَلِينَ", meaning: "And made me one of the messengers", explanation: "Prophet status", verseRef: "26:21" }
      ]
    },

    musaStoryPart4: {
      name: "Story of Musa - Rebutting Pharaoh",
      nameArabic: "قصة موسى - رد موسى على فرعون",
      color: "#3B82F6",
      icon: "MessageCircle",
      concepts: [
        { term: "وَتِلْكَ نِعْمَةٌ تَمُنُّهَا عَلَيَّ أَنْ عَبَّدتَّ بَنِي إِسْرَائِيلَ", meaning: "And is this a favor you remind me of - that you enslaved Israel?", explanation: "Musa exposes the irony", verseRef: "26:22" },
        { term: "قَالَ فِرْعَوْنُ وَمَا رَبُّ الْعَالَمِينَ", meaning: "Pharaoh said: And what is the Lord of the worlds?", explanation: "Pharaoh's challenge", verseRef: "26:23" },
        { term: "قَالَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا", meaning: "He said: Lord of heavens and earth and what is between", explanation: "Musa's description of Allah", verseRef: "26:24" },
        { term: "إِن كُنتُم مُّوقِنِينَ", meaning: "If you are certain", explanation: "Challenge to reflect", verseRef: "26:24" },
        { term: "قَالَ لِمَنْ حَوْلَهُ أَلَا تَسْتَمِعُونَ", meaning: "He said to those around: Do you not hear?", explanation: "Pharaoh mocks Musa", verseRef: "26:25" },
        { term: "قَالَ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ", meaning: "He said: Your Lord and Lord of your forefathers", explanation: "Musa expands definition", verseRef: "26:26" },
        { term: "قَالَ إِنَّ رَسُولَكُمُ الَّذِي أُرْسِلَ إِلَيْكُمْ لَمَجْنُونٌ", meaning: "He said: Your messenger sent to you is mad", explanation: "Pharaoh's insult", verseRef: "26:27" },
        { term: "قَالَ رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ وَمَا بَيْنَهُمَا", meaning: "He said: Lord of East and West and what is between", explanation: "Musa's third description", verseRef: "26:28" },
        { term: "إِن كُنتُمْ تَعْقِلُونَ", meaning: "If you use reason", explanation: "Appeal to intellect", verseRef: "26:28" }
      ]
    },

    musaStoryPart5: {
      name: "Story of Musa - Signs and Magicians",
      nameArabic: "قصة موسى - الآيات والسحرة",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "قَالَ لَئِنِ اتَّخَذْتَ إِلَٰهًا غَيْرِي لَأَجْعَلَنَّكَ مِنَ الْمَسْجُونِينَ", meaning: "He said: If you take a god other than me, I will imprison you", explanation: "Pharaoh's threat", verseRef: "26:29" },
        { term: "قَالَ أَوَلَوْ جِئْتُكَ بِشَيْءٍ مُّبِينٍ", meaning: "He said: Even if I brought you clear proof?", explanation: "Musa offers evidence", verseRef: "26:30" },
        { term: "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُّبِينٌ", meaning: "So he threw his staff and it became a clear serpent", explanation: "First miracle", verseRef: "26:32" },
        { term: "وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ", meaning: "He drew out his hand and it was white for beholders", explanation: "Second miracle", verseRef: "26:33" },
        { term: "قَالَ لِلْمَلَإِ حَوْلَهُ إِنَّ هَٰذَا لَسَاحِرٌ عَلِيمٌ", meaning: "He said to the eminent ones: This is a learned magician", explanation: "Pharaoh's dismissal as magic", verseRef: "26:34" },
        { term: "يُرِيدُ أَن يُخْرِجَكُم مِّنْ أَرْضِكُم بِسِحْرِهِ", meaning: "He wants to drive you out of your land by his magic", explanation: "Political accusation", verseRef: "26:35" },
        { term: "قَالُوا أَرْجِهْ وَأَخَاهُ وَابْعَثْ فِي الْمَدَائِنِ حَاشِرِينَ", meaning: "They said: Postpone him and his brother and send gatherers to the cities", explanation: "Plan to summon magicians", verseRef: "26:36" },
        { term: "يَأْتُوكَ بِكُلِّ سَحَّارٍ عَلِيمٍ", meaning: "To bring every skilled magician", explanation: "Gathering magicians", verseRef: "26:37" }
      ]
    },

    musaStoryPart6: {
      name: "Story of Musa - The Contest",
      nameArabic: "قصة موسى - المباراة",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "فَجُمِعَ السَّحَرَةُ لِمِيقَاتِ يَوْمٍ مَّعْلُومٍ", meaning: "So the magicians were assembled for appointment of a known day", explanation: "Public contest arranged", verseRef: "26:38" },
        { term: "وَقِيلَ لِلنَّاسِ هَلْ أَنتُم مُّجْتَمِعُونَ", meaning: "And it was said to people: Will you assemble?", explanation: "Public gathering called", verseRef: "26:39" },
        { term: "لَعَلَّنَا نَتَّبِعُ السَّحَرَةَ إِن كَانُوا هُمُ الْغَالِبِينَ", meaning: "Perhaps we will follow the magicians if they prevail", explanation: "Stakes of the contest", verseRef: "26:40" },
        { term: "قَالُوا لِفِرْعَوْنَ أَئِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ الْغَالِبِينَ", meaning: "They said to Pharaoh: Is there a reward if we prevail?", explanation: "Magicians bargain", verseRef: "26:41" },
        { term: "قَالَ نَعَمْ وَإِنَّكُمْ إِذًا لَّمِنَ الْمُقَرَّبِينَ", meaning: "He said: Yes, and you will be among those near me", explanation: "Promise of status", verseRef: "26:42" },
        { term: "قَالَ لَهُم مُّوسَىٰ أَلْقُوا مَا أَنتُم مُّلْقُونَ", meaning: "Musa said: Throw what you will throw", explanation: "Musa's confidence", verseRef: "26:43" },
        { term: "فَأَلْقَوْا حِبَالَهُمْ وَعِصِيَّهُمْ", meaning: "So they threw their ropes and staffs", explanation: "Magicians' trick", verseRef: "26:44" },
        { term: "وَقَالُوا بِعِزَّةِ فِرْعَوْنَ إِنَّا لَنَحْنُ الْغَالِبُونَ", meaning: "And said: By Pharaoh's might, we will prevail", explanation: "Swearing by Pharaoh", verseRef: "26:44" },
        { term: "فَأَلْقَىٰ مُوسَىٰ عَصَاهُ فَإِذَا هِيَ تَلْقَفُ مَا يَأْفِكُونَ", meaning: "Then Musa threw his staff and it swallowed what they faked", explanation: "Truth devours falsehood", verseRef: "26:45" }
      ]
    },

    musaStoryPart7: {
      name: "Story of Musa - Magicians' Submission",
      nameArabic: "قصة موسى - إسلام السحرة",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "فَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ", meaning: "So the magicians fell in prostration", explanation: "Immediate submission to truth", verseRef: "26:46" },
        { term: "قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ", meaning: "They said: We believe in the Lord of the worlds", explanation: "Declaration of faith", verseRef: "26:47" },
        { term: "رَبِّ مُوسَىٰ وَهَارُونَ", meaning: "Lord of Musa and Harun", explanation: "Specifying their belief", verseRef: "26:48" },
        { term: "قَالَ آمَنتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ", meaning: "He said: You believed before I gave permission", explanation: "Pharaoh's outrage", verseRef: "26:49" },
        { term: "إِنَّهُ لَكَبِيرُكُمُ الَّذِي عَلَّمَكُمُ السِّحْرَ", meaning: "He is your chief who taught you magic", explanation: "Pharaoh's conspiracy theory", verseRef: "26:49" },
        { term: "فَلَسَوْفَ تَعْلَمُونَ", meaning: "So you will know", explanation: "Pharaoh's ominous warning", verseRef: "26:49" },
        { term: "لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَافٍ", meaning: "I will cut your hands and feet on opposite sides", explanation: "Torture threat", verseRef: "26:50" },
        { term: "وَلَأُصَلِّبَنَّكُمْ أَجْمَعِينَ", meaning: "And I will crucify you all", explanation: "Death threat", verseRef: "26:50" }
      ]
    },

    musaStoryPart8: {
      name: "Story of Musa - Magicians' Firmness",
      nameArabic: "قصة موسى - ثبات السحرة",
      color: "#10B981",
      icon: "Shield",
      concepts: [
        { term: "قَالُوا لَا ضَيْرَ", meaning: "They said: No harm", explanation: "Fearless response", verseRef: "26:50" },
        { term: "إِنَّا إِلَىٰ رَبِّنَا مُنقَلِبُونَ", meaning: "Indeed to our Lord we will return", explanation: "Trust in afterlife", verseRef: "26:50" },
        { term: "إِنَّا نَطْمَعُ أَن يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا", meaning: "We hope our Lord forgives our sins", explanation: "Hope for forgiveness", verseRef: "26:51" },
        { term: "أَن كُنَّا أَوَّلَ الْمُؤْمِنِينَ", meaning: "Since we are the first believers", explanation: "Pride in being first to believe", verseRef: "26:51" }
      ]
    },

    musaStoryPart9: {
      name: "Story of Musa - Exodus",
      nameArabic: "قصة موسى - الخروج",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ أَسْرِ بِعِبَادِي", meaning: "We revealed to Musa: Travel by night with My servants", explanation: "Command to leave Egypt", verseRef: "26:52" },
        { term: "إِنَّكُم مُّتَّبَعُونَ", meaning: "You will be pursued", explanation: "Warning of pursuit", verseRef: "26:52" },
        { term: "فَأَرْسَلَ فِرْعَوْنُ فِي الْمَدَائِنِ حَاشِرِينَ", meaning: "So Pharaoh sent gatherers to the cities", explanation: "Pharaoh mobilizes army", verseRef: "26:53" },
        { term: "إِنَّ هَٰؤُلَاءِ لَشِرْذِمَةٌ قَلِيلُونَ", meaning: "Indeed these are a small band", explanation: "Pharaoh's dismissal", verseRef: "26:54" },
        { term: "وَإِنَّهُمْ لَنَا لَغَائِظُونَ", meaning: "And they have enraged us", explanation: "Pharaoh's anger", verseRef: "26:55" },
        { term: "وَإِنَّا لَجَمِيعٌ حَاذِرُونَ", meaning: "And we are all cautious", explanation: "Military preparation", verseRef: "26:56" },
        { term: "فَأَخْرَجْنَاهُم مِّن جَنَّاتٍ وَعُيُونٍ", meaning: "So We removed them from gardens and springs", explanation: "Egypt's loss of Pharaoh's people", verseRef: "26:57" },
        { term: "وَكُنُوزٍ وَمَقَامٍ كَرِيمٍ", meaning: "And treasures and noble position", explanation: "Worldly loss", verseRef: "26:58" },
        { term: "كَذَٰلِكَ وَأَوْرَثْنَاهَا بَنِي إِسْرَائِيلَ", meaning: "Thus, and We made Israel inherit it", explanation: "Transfer of inheritance", verseRef: "26:59" }
      ]
    },

    musaStoryPart10: {
      name: "Story of Musa - Sea Crossing",
      nameArabic: "قصة موسى - عبور البحر",
      color: "#06B6D4",
      icon: "Sparkles",
      concepts: [
        { term: "فَأَتْبَعُوهُم مُّشْرِقِينَ", meaning: "So they pursued them at sunrise", explanation: "Chase at dawn", verseRef: "26:60" },
        { term: "فَلَمَّا تَرَاءَى الْجَمْعَانِ", meaning: "When the two groups saw each other", explanation: "Confrontation moment", verseRef: "26:61" },
        { term: "قَالَ أَصْحَابُ مُوسَىٰ إِنَّا لَمُدْرَكُونَ", meaning: "Companions of Musa said: We will be overtaken", explanation: "Moment of fear", verseRef: "26:61" },
        { term: "قَالَ كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ", meaning: "He said: No! My Lord is with me, He will guide me", explanation: "Musa's absolute trust", verseRef: "26:62" },
        { term: "فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِب بِّعَصَاكَ الْبَحْرَ", meaning: "We revealed to Musa: Strike the sea with your staff", explanation: "Command to part sea", verseRef: "26:63" },
        { term: "فَانفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ", meaning: "So it parted, each part like a great mountain", explanation: "Sea splits into towering walls", verseRef: "26:63" },
        { term: "وَأَزْلَفْنَا ثَمَّ الْآخَرِينَ", meaning: "And We brought near the others there", explanation: "Pharaoh's army approaches", verseRef: "26:64" },
        { term: "وَأَنجَيْنَا مُوسَىٰ وَمَن مَّعَهُ أَجْمَعِينَ", meaning: "And We saved Musa and all those with him", explanation: "Believers saved", verseRef: "26:65" },
        { term: "ثُمَّ أَغْرَقْنَا الْآخَرِينَ", meaning: "Then We drowned the others", explanation: "Pharaoh's army destroyed", verseRef: "26:66" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ", meaning: "In that is a sign, but most were not believers", explanation: "Lesson and reality", verseRef: "26:67" }
      ]
    },

    ibrahimStory: {
      name: "Story of Ibrahim",
      nameArabic: "قصة إبراهيم",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَاتْلُ عَلَيْهِمْ نَبَأَ إِبْرَاهِيمَ", meaning: "Recite to them the story of Ibrahim", explanation: "Command to narrate", verseRef: "26:69" },
        { term: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَا تَعْبُدُونَ", meaning: "When he said to his father and people: What do you worship?", explanation: "Opening challenge", verseRef: "26:70" },
        { term: "قَالُوا نَعْبُدُ أَصْنَامًا فَنَظَلُّ لَهَا عَاكِفِينَ", meaning: "They said: We worship idols and remain devoted to them", explanation: "Confession of idolatry", verseRef: "26:71" },
        { term: "قَالَ هَلْ يَسْمَعُونَكُمْ إِذْ تَدْعُونَ", meaning: "He said: Do they hear you when you call?", explanation: "First logical question", verseRef: "26:72" },
        { term: "أَوْ يَنفَعُونَكُمْ أَوْ يَضُرُّونَ", meaning: "Or do they benefit or harm you?", explanation: "Second logical question", verseRef: "26:73" },
        { term: "قَالُوا بَلْ وَجَدْنَا آبَاءَنَا كَذَٰلِكَ يَفْعَلُونَ", meaning: "They said: We found our fathers doing so", explanation: "Appeal to tradition", verseRef: "26:74" },
        { term: "قَالَ أَفَرَأَيْتُم مَّا كُنتُمْ تَعْبُدُونَ", meaning: "He said: Have you considered what you worship?", explanation: "Ibrahim challenges tradition", verseRef: "26:75" },
        { term: "أَنتُمْ وَآبَاؤُكُمُ الْأَقْدَمُونَ", meaning: "You and your ancient forefathers?", explanation: "Questioning generations", verseRef: "26:76" },
        { term: "فَإِنَّهُمْ عَدُوٌّ لِّي إِلَّا رَبَّ الْعَالَمِينَ", meaning: "They are enemies to me, except the Lord of the worlds", explanation: "Rejection of false gods", verseRef: "26:77" }
      ]
    },

    ibrahimPraise: {
      name: "Ibrahim's Praise of Allah",
      nameArabic: "ثناء إبراهيم على الله",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ", meaning: "Who created me, and He guides me", explanation: "Creator and Guide", verseRef: "26:78" },
        { term: "وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ", meaning: "Who feeds me and gives me drink", explanation: "Provider of sustenance", verseRef: "26:79" },
        { term: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", meaning: "When I am ill, He heals me", explanation: "Healer - illness attributed to self, healing to Allah", verseRef: "26:80" },
        { term: "وَالَّذِي يُمِيتُنِي ثُمَّ يُحْيِينِ", meaning: "Who will cause me to die and then bring me back", explanation: "Lord of death and resurrection", verseRef: "26:81" },
        { term: "وَالَّذِي أَطْمَعُ أَن يَغْفِرَ لِي خَطِيئَتِي يَوْمَ الدِّينِ", meaning: "Who I hope will forgive my sins on Judgment Day", explanation: "Forgiver on Day of Judgment", verseRef: "26:82" }
      ]
    },

    ibrahimDua: {
      name: "Ibrahim's Supplication",
      nameArabic: "دعاء إبراهيم",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ", meaning: "My Lord, grant me wisdom and join me with the righteous", explanation: "Prayer for wisdom and company", verseRef: "26:83" },
        { term: "وَاجْعَل لِّي لِسَانَ صِدْقٍ فِي الْآخِرِينَ", meaning: "And grant me a truthful mention among later generations", explanation: "Prayer for lasting good reputation", verseRef: "26:84" },
        { term: "وَاجْعَلْنِي مِن وَرَثَةِ جَنَّةِ النَّعِيمِ", meaning: "Make me among the inheritors of Paradise", explanation: "Prayer for Paradise", verseRef: "26:85" },
        { term: "وَاغْفِرْ لِأَبِي إِنَّهُ كَانَ مِنَ الضَّالِّينَ", meaning: "And forgive my father, he was among the astray", explanation: "Prayer for father - before prohibition", verseRef: "26:86" },
        { term: "وَلَا تُخْزِنِي يَوْمَ يُبْعَثُونَ", meaning: "Do not disgrace me on the Day they are resurrected", explanation: "Prayer for dignity on Judgment Day", verseRef: "26:87" },
        { term: "يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ", meaning: "Day when neither wealth nor children will benefit", explanation: "Description of Judgment Day", verseRef: "26:88" },
        { term: "إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ", meaning: "Except one who comes to Allah with a sound heart", explanation: "The only thing that benefits - pure heart", verseRef: "26:89" }
      ]
    },

    paradiseAndHell: {
      name: "Paradise and Hell",
      nameArabic: "الجنة والنار",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "وَأُزْلِفَتِ الْجَنَّةُ لِلْمُتَّقِينَ", meaning: "Paradise will be brought near the God-fearing", explanation: "Paradise approaches the pious", verseRef: "26:90" },
        { term: "وَبُرِّزَتِ الْجَحِيمُ لِلْغَاوِينَ", meaning: "Hellfire will be displayed for the deviators", explanation: "Hell exposed to sinners", verseRef: "26:91" },
        { term: "وَقِيلَ لَهُمْ أَيْنَ مَا كُنتُمْ تَعْبُدُونَ", meaning: "They will be asked: Where are those you worshipped?", explanation: "Question about false gods", verseRef: "26:92" },
        { term: "مِن دُونِ اللَّهِ هَلْ يَنصُرُونَكُمْ أَوْ يَنتَصِرُونَ", meaning: "Besides Allah? Can they help you or themselves?", explanation: "Helplessness of idols", verseRef: "26:93" },
        { term: "فَكُبْكِبُوا فِيهَا هُمْ وَالْغَاوُونَ", meaning: "They will be thrown into it, they and the deviators", explanation: "Idols and worshippers together in Hell", verseRef: "26:94" },
        { term: "وَجُنُودُ إِبْلِيسَ أَجْمَعُونَ", meaning: "And the soldiers of Iblis, all of them", explanation: "Shaytan's army also punished", verseRef: "26:95" }
      ]
    },

    hellDialogue: {
      name: "Dialogue in Hell",
      nameArabic: "حوار في جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قَالُوا وَهُمْ فِيهَا يَخْتَصِمُونَ", meaning: "They will say while disputing therein", explanation: "Arguments in Hell", verseRef: "26:96" },
        { term: "تَاللَّهِ إِن كُنَّا لَفِي ضَلَالٍ مُّبِينٍ", meaning: "By Allah, we were in clear error", explanation: "Confession too late", verseRef: "26:97" },
        { term: "إِذْ نُسَوِّيكُم بِرَبِّ الْعَالَمِينَ", meaning: "When we equated you with Lord of the worlds", explanation: "Sin of equating idols with Allah", verseRef: "26:98" },
        { term: "وَمَا أَضَلَّنَا إِلَّا الْمُجْرِمُونَ", meaning: "Only the criminals led us astray", explanation: "Blaming their leaders", verseRef: "26:99" },
        { term: "فَمَا لَنَا مِن شَافِعِينَ", meaning: "So we have no intercessors", explanation: "No one to intercede", verseRef: "26:100" },
        { term: "وَلَا صَدِيقٍ حَمِيمٍ", meaning: "Nor a close friend", explanation: "No true friends", verseRef: "26:101" },
        { term: "فَلَوْ أَنَّ لَنَا كَرَّةً فَنَكُونَ مِنَ الْمُؤْمِنِينَ", meaning: "If only we could return and be believers", explanation: "Futile wish for return", verseRef: "26:102" }
      ]
    },

    nuhStory: {
      name: "Story of Nuh",
      nameArabic: "قصة نوح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "كَذَّبَتْ قَوْمُ نُوحٍ الْمُرْسَلِينَ", meaning: "The people of Nuh denied the messengers", explanation: "Denial of all messengers by denying one", verseRef: "26:105" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ نُوحٌ أَلَا تَتَّقُونَ", meaning: "When their brother Nuh said: Will you not fear Allah?", explanation: "Nuh from among them", verseRef: "26:106" },
        { term: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: "I am a trustworthy messenger to you", explanation: "Trustworthiness claim", verseRef: "26:107" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: "So fear Allah and obey me", explanation: "Two commands", verseRef: "26:108" },
        { term: "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ", meaning: "I ask no payment from you", explanation: "No worldly motive", verseRef: "26:109" },
        { term: "إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ", meaning: "My reward is only from the Lord of the worlds", explanation: "Seeking Allah's reward only", verseRef: "26:109" },
        { term: "قَالُوا أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ", meaning: "They said: Shall we believe you when the lowest follow you?", explanation: "Rejection based on followers' status", verseRef: "26:111" },
        { term: "قَالَ وَمَا عِلْمِي بِمَا كَانُوا يَعْمَلُونَ", meaning: "He said: What knowledge do I have of what they did?", explanation: "Nuh doesn't judge backgrounds", verseRef: "26:112" },
        { term: "إِنْ حِسَابُهُمْ إِلَّا عَلَىٰ رَبِّي", meaning: "Their account is only with my Lord", explanation: "Allah judges, not prophet", verseRef: "26:113" },
        { term: "وَمَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ", meaning: "And I will not drive away the believers", explanation: "Refusing to reject poor believers", verseRef: "26:114" },
        { term: "إِنْ أَنَا إِلَّا نَذِيرٌ مُّبِينٌ", meaning: "I am only a clear warner", explanation: "Role defined", verseRef: "26:115" },
        { term: "قَالُوا لَئِن لَّمْ تَنتَهِ يَا نُوحُ لَتَكُونَنَّ مِنَ الْمَرْجُومِينَ", meaning: "They said: If you don't stop, Nuh, you will be stoned", explanation: "Death threat", verseRef: "26:116" },
        { term: "قَالَ رَبِّ إِنَّ قَوْمِي كَذَّبُونِ", meaning: "He said: My Lord, my people have denied me", explanation: "Nuh's complaint to Allah", verseRef: "26:117" },
        { term: "فَافْتَحْ بَيْنِي وَبَيْنَهُمْ فَتْحًا", meaning: "So judge between me and them decisively", explanation: "Request for judgment", verseRef: "26:118" },
        { term: "وَنَجِّنِي وَمَن مَّعِيَ مِنَ الْمُؤْمِنِينَ", meaning: "And save me and the believers with me", explanation: "Prayer for salvation", verseRef: "26:118" },
        { term: "فَأَنجَيْنَاهُ وَمَن مَّعَهُ فِي الْفُلْكِ الْمَشْحُونِ", meaning: "So We saved him and those with him in the laden ship", explanation: "Salvation in the Ark", verseRef: "26:119" },
        { term: "ثُمَّ أَغْرَقْنَا بَعْدُ الْبَاقِينَ", meaning: "Then We drowned the rest", explanation: "Flood destroys deniers", verseRef: "26:120" }
      ]
    },

    hudStory: {
      name: "Story of Hud",
      nameArabic: "قصة هود",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "كَذَّبَتْ عَادٌ الْمُرْسَلِينَ", meaning: "'Ad denied the messengers", explanation: "Denial pattern continues", verseRef: "26:123" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ هُودٌ أَلَا تَتَّقُونَ", meaning: "When their brother Hud said: Will you not fear Allah?", explanation: "Hud from among them", verseRef: "26:124" },
        { term: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: "I am a trustworthy messenger to you", explanation: "Same claim as Nuh", verseRef: "26:125" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: "So fear Allah and obey me", explanation: "Same commands", verseRef: "26:126" },
        { term: "أَتَبْنُونَ بِكُلِّ رِيعٍ آيَةً تَعْبَثُونَ", meaning: "Do you build on every elevation a sign for amusement?", explanation: "Criticism of vanity projects", verseRef: "26:128" },
        { term: "وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ", meaning: "And take for yourselves palaces hoping to live forever?", explanation: "Criticism of false immortality hopes", verseRef: "26:129" },
        { term: "وَإِذَا بَطَشْتُم بَطَشْتُمْ جَبَّارِينَ", meaning: "When you strike, you strike as tyrants", explanation: "Criticism of oppression", verseRef: "26:130" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: "So fear Allah and obey me", explanation: "Repeated call", verseRef: "26:131" },
        { term: "وَاتَّقُوا الَّذِي أَمَدَّكُم بِمَا تَعْلَمُونَ", meaning: "Fear Him who provided you with what you know", explanation: "Reminder of blessings", verseRef: "26:132" },
        { term: "أَمَدَّكُم بِأَنْعَامٍ وَبَنِينَ", meaning: "Provided you with livestock and children", explanation: "Specific blessings", verseRef: "26:133" },
        { term: "وَجَنَّاتٍ وَعُيُونٍ", meaning: "And gardens and springs", explanation: "More blessings", verseRef: "26:134" },
        { term: "إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: "I fear for you punishment of a great Day", explanation: "Warning of Judgment", verseRef: "26:135" },
        { term: "قَالُوا سَوَاءٌ عَلَيْنَا أَوَعَظْتَ أَمْ لَمْ تَكُن مِّنَ الْوَاعِظِينَ", meaning: "They said: Same to us whether you advise or not", explanation: "Complete indifference", verseRef: "26:136" },
        { term: "إِنْ هَٰذَا إِلَّا خُلُقُ الْأَوَّلِينَ", meaning: "This is nothing but custom of the ancients", explanation: "Dismissing as old tales", verseRef: "26:137" },
        { term: "وَمَا نَحْنُ بِمُعَذَّبِينَ", meaning: "And we will not be punished", explanation: "Denial of punishment", verseRef: "26:138" },
        { term: "فَكَذَّبُوهُ فَأَهْلَكْنَاهُمْ", meaning: "So they denied him and We destroyed them", explanation: "Consequence of denial", verseRef: "26:139" }
      ]
    },

    salihStory: {
      name: "Story of Salih",
      nameArabic: "قصة صالح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "كَذَّبَتْ ثَمُودُ الْمُرْسَلِينَ", meaning: "Thamud denied the messengers", explanation: "Another nation denies", verseRef: "26:141" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ صَالِحٌ أَلَا تَتَّقُونَ", meaning: "When their brother Salih said: Will you not fear Allah?", explanation: "Salih from among them", verseRef: "26:142" },
        { term: "أَتُتْرَكُونَ فِي مَا هَاهُنَا آمِنِينَ", meaning: "Will you be left secure in what is here?", explanation: "Challenge to their security", verseRef: "26:146" },
        { term: "فِي جَنَّاتٍ وَعُيُونٍ", meaning: "In gardens and springs", explanation: "Their comfortable life", verseRef: "26:147" },
        { term: "وَزُرُوعٍ وَنَخْلٍ طَلْعُهَا هَضِيمٌ", meaning: "And crops and date-palms with soft fruit", explanation: "Agricultural blessings", verseRef: "26:148" },
        { term: "وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا فَارِهِينَ", meaning: "You carve from mountains homes skillfully", explanation: "Architectural achievements", verseRef: "26:149" },
        { term: "وَلَا تُطِيعُوا أَمْرَ الْمُسْرِفِينَ", meaning: "Do not obey the command of the transgressors", explanation: "Warning against corrupt leaders", verseRef: "26:151" },
        { term: "الَّذِينَ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ", meaning: "Who cause corruption and do not reform", explanation: "Description of transgressors", verseRef: "26:152" },
        { term: "قَالُوا إِنَّمَا أَنتَ مِنَ الْمُسَحَّرِينَ", meaning: "They said: You are but of the bewitched", explanation: "Accusation of being enchanted", verseRef: "26:153" },
        { term: "مَا أَنتَ إِلَّا بَشَرٌ مِّثْلُنَا", meaning: "You are only a human like us", explanation: "Rejection based on humanity", verseRef: "26:154" },
        { term: "فَأْتِ بِآيَةٍ إِن كُنتَ مِنَ الصَّادِقِينَ", meaning: "So bring a sign if you are truthful", explanation: "Demand for proof", verseRef: "26:154" },
        { term: "قَالَ هَٰذِهِ نَاقَةٌ لَّهَا شِرْبٌ وَلَكُمْ شِرْبُ يَوْمٍ مَّعْلُومٍ", meaning: "He said: This is a she-camel; she has a drink and you a drink on an appointed day", explanation: "Miraculous she-camel", verseRef: "26:155" },
        { term: "وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابُ يَوْمٍ عَظِيمٍ", meaning: "Do not touch her with harm lest punishment of a great day seize you", explanation: "Warning about harming camel", verseRef: "26:156" },
        { term: "فَعَقَرُوهَا فَأَصْبَحُوا نَادِمِينَ", meaning: "But they hamstrung her and became regretful", explanation: "They killed it and regretted", verseRef: "26:157" },
        { term: "فَأَخَذَهُمُ الْعَذَابُ", meaning: "So the punishment seized them", explanation: "Divine punishment came", verseRef: "26:158" }
      ]
    },

    lutStory: {
      name: "Story of Lut",
      nameArabic: "قصة لوط",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "كَذَّبَتْ قَوْمُ لُوطٍ الْمُرْسَلِينَ", meaning: "The people of Lut denied the messengers", explanation: "Pattern of denial", verseRef: "26:160" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ لُوطٌ أَلَا تَتَّقُونَ", meaning: "When their brother Lut said: Will you not fear Allah?", explanation: "Lut's call to his people", verseRef: "26:161" },
        { term: "أَتَأْتُونَ الذُّكْرَانَ مِنَ الْعَالَمِينَ", meaning: "Do you approach males of the worlds?", explanation: "Condemning their sin", verseRef: "26:165" },
        { term: "وَتَذَرُونَ مَا خَلَقَ لَكُمْ رَبُّكُم مِّنْ أَزْوَاجِكُم", meaning: "And leave what your Lord created for you of your wives", explanation: "Abandoning natural way", verseRef: "26:166" },
        { term: "بَلْ أَنتُمْ قَوْمٌ عَادُونَ", meaning: "Rather, you are a transgressing people", explanation: "Judgment on them", verseRef: "26:166" },
        { term: "قَالُوا لَئِن لَّمْ تَنتَهِ يَا لُوطُ لَتَكُونَنَّ مِنَ الْمُخْرَجِينَ", meaning: "They said: If you don't stop, Lut, you will be expelled", explanation: "Threat of expulsion", verseRef: "26:167" },
        { term: "قَالَ إِنِّي لِعَمَلِكُم مِّنَ الْقَالِينَ", meaning: "He said: I am of those who detest your deed", explanation: "Lut's disgust with their sin", verseRef: "26:168" },
        { term: "رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ", meaning: "My Lord, save me and my family from what they do", explanation: "Lut's prayer for salvation", verseRef: "26:169" },
        { term: "فَنَجَّيْنَاهُ وَأَهْلَهُ أَجْمَعِينَ", meaning: "So We saved him and his family, all", explanation: "Family saved", verseRef: "26:170" },
        { term: "إِلَّا عَجُوزًا فِي الْغَابِرِينَ", meaning: "Except an old woman among those who remained", explanation: "His wife stayed behind", verseRef: "26:171" },
        { term: "ثُمَّ دَمَّرْنَا الْآخَرِينَ", meaning: "Then We destroyed the others", explanation: "Destruction of sinners", verseRef: "26:172" },
        { term: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا", meaning: "And We rained upon them a rain", explanation: "Rain of stones", verseRef: "26:173" },
        { term: "فَسَاءَ مَطَرُ الْمُنذَرِينَ", meaning: "Evil was the rain of those warned", explanation: "Terrible punishment", verseRef: "26:173" }
      ]
    },

    shuaybStory: {
      name: "Story of Shu'ayb",
      nameArabic: "قصة شعيب",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        { term: "كَذَّبَ أَصْحَابُ الْأَيْكَةِ الْمُرْسَلِينَ", meaning: "The companions of the thicket denied the messengers", explanation: "People of the woods/Midian", verseRef: "26:176" },
        { term: "إِذْ قَالَ لَهُمْ شُعَيْبٌ أَلَا تَتَّقُونَ", meaning: "When Shu'ayb said to them: Will you not fear Allah?", explanation: "Shu'ayb's call", verseRef: "26:177" },
        { term: "أَوْفُوا الْكَيْلَ وَلَا تَكُونُوا مِنَ الْمُخْسِرِينَ", meaning: "Give full measure and do not be of those who cause loss", explanation: "Economic justice command", verseRef: "26:181" },
        { term: "وَزِنُوا بِالْقِسْطَاسِ الْمُسْتَقِيمِ", meaning: "And weigh with a straight balance", explanation: "Fair weighing", verseRef: "26:182" },
        { term: "وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ", meaning: "Do not deprive people of their due", explanation: "Rights of others", verseRef: "26:183" },
        { term: "وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ", meaning: "Do not commit abuse on earth, spreading corruption", explanation: "Against corruption", verseRef: "26:183" },
        { term: "وَاتَّقُوا الَّذِي خَلَقَكُمْ وَالْجِبِلَّةَ الْأَوَّلِينَ", meaning: "Fear Him who created you and former generations", explanation: "Fear the Creator", verseRef: "26:184" },
        { term: "قَالُوا إِنَّمَا أَنتَ مِنَ الْمُسَحَّرِينَ", meaning: "They said: You are but of the bewitched", explanation: "Same accusation as to Salih", verseRef: "26:185" },
        { term: "وَمَا أَنتَ إِلَّا بَشَرٌ مِّثْلُنَا", meaning: "You are only a human like us", explanation: "Rejection of human messenger", verseRef: "26:186" },
        { term: "وَإِن نَّظُنُّكَ لَمِنَ الْكَاذِبِينَ", meaning: "We think you are of the liars", explanation: "Accusation of lying", verseRef: "26:186" },
        { term: "فَأَسْقِطْ عَلَيْنَا كِسَفًا مِّنَ السَّمَاءِ", meaning: "So drop upon us fragments from the sky", explanation: "Mocking challenge", verseRef: "26:187" },
        { term: "إِن كُنتَ مِنَ الصَّادِقِينَ", meaning: "If you are truthful", explanation: "Demanding proof", verseRef: "26:187" },
        { term: "قَالَ رَبِّي أَعْلَمُ بِمَا تَعْمَلُونَ", meaning: "He said: My Lord knows best what you do", explanation: "Shu'ayb's response", verseRef: "26:188" },
        { term: "فَكَذَّبُوهُ فَأَخَذَهُمْ عَذَابُ يَوْمِ الظُّلَّةِ", meaning: "So they denied him and punishment of the Day of Shadow seized them", explanation: "Punishment by shadow/cloud of fire", verseRef: "26:189" },
        { term: "إِنَّهُ كَانَ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: "It was punishment of a great day", explanation: "Severity of their end", verseRef: "26:189" }
      ]
    },

    quranRevelation: {
      name: "Quran's Revelation",
      nameArabic: "نزول القرآن",
      color: "#F59E0B",
      icon: "Book",
      concepts: [
        { term: "وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ", meaning: "Indeed, it is revelation from the Lord of the worlds", explanation: "Divine source affirmed", verseRef: "26:192" },
        { term: "نَزَلَ بِهِ الرُّوحُ الْأَمِينُ", meaning: "The Trustworthy Spirit brought it down", explanation: "Jibril as bearer", verseRef: "26:193" },
        { term: "عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ", meaning: "Upon your heart so you may be a warner", explanation: "Revealed to Prophet's heart", verseRef: "26:194" },
        { term: "بِلِسَانٍ عَرَبِيٍّ مُّبِينٍ", meaning: "In clear Arabic tongue", explanation: "Language of revelation", verseRef: "26:195" },
        { term: "وَإِنَّهُ لَفِي زُبُرِ الْأَوَّلِينَ", meaning: "And it is in the scriptures of former peoples", explanation: "Mentioned in previous books", verseRef: "26:196" },
        { term: "أَوَلَمْ يَكُن لَّهُمْ آيَةً أَن يَعْلَمَهُ عُلَمَاءُ بَنِي إِسْرَائِيلَ", meaning: "Was it not a sign that scholars of Israel knew it?", explanation: "Jewish scholars recognize it", verseRef: "26:197" }
      ]
    },

    nonArabMessenger: {
      name: "Hypothetical Non-Arab Messenger",
      nameArabic: "لو كان المرسل أعجمياً",
      color: "#8B5CF6",
      icon: "MessageCircle",
      concepts: [
        { term: "وَلَوْ نَزَّلْنَاهُ عَلَىٰ بَعْضِ الْأَعْجَمِينَ", meaning: "If We had revealed it to a non-Arab", explanation: "Hypothetical scenario", verseRef: "26:198" },
        { term: "فَقَرَأَهُ عَلَيْهِم مَّا كَانُوا بِهِ مُؤْمِنِينَ", meaning: "And he recited it to them, they would not believe", explanation: "They would still reject", verseRef: "26:199" },
        { term: "كَذَٰلِكَ سَلَكْنَاهُ فِي قُلُوبِ الْمُجْرِمِينَ", meaning: "Thus We inserted disbelief in hearts of criminals", explanation: "Denial rooted in heart", verseRef: "26:200" },
        { term: "لَا يُؤْمِنُونَ بِهِ حَتَّىٰ يَرَوُا الْعَذَابَ الْأَلِيمَ", meaning: "They will not believe until they see painful punishment", explanation: "Belief only when too late", verseRef: "26:201" },
        { term: "فَيَأْتِيَهُم بَغْتَةً وَهُمْ لَا يَشْعُرُونَ", meaning: "It will come suddenly while they perceive not", explanation: "Punishment comes unexpectedly", verseRef: "26:202" }
      ]
    },

    warningAndDestruction: {
      name: "Warning and Destruction",
      nameArabic: "الإنذار والإهلاك",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَيَقُولُوا هَلْ نَحْنُ مُنظَرُونَ", meaning: "They will say: Can we be reprieved?", explanation: "Desperate plea for delay", verseRef: "26:203" },
        { term: "أَفَبِعَذَابِنَا يَسْتَعْجِلُونَ", meaning: "Do they wish to hasten Our punishment?", explanation: "Mocking those who challenge", verseRef: "26:204" },
        { term: "أَفَرَأَيْتَ إِن مَّتَّعْنَاهُمْ سِنِينَ", meaning: "Have you considered if We give them enjoyment for years", explanation: "Even long life won't help", verseRef: "26:205" },
        { term: "ثُمَّ جَاءَهُم مَّا كَانُوا يُوعَدُونَ", meaning: "Then what they were promised comes to them", explanation: "Promise fulfilled eventually", verseRef: "26:206" },
        { term: "مَا أَغْنَىٰ عَنْهُم مَّا كَانُوا يُمَتَّعُونَ", meaning: "What will avail them what they enjoyed?", explanation: "Enjoyment won't save them", verseRef: "26:207" },
        { term: "وَمَا أَهْلَكْنَا مِن قَرْيَةٍ إِلَّا لَهَا مُنذِرُونَ", meaning: "We did not destroy any city except it had warners", explanation: "No destruction without warning", verseRef: "26:208" },
        { term: "ذِكْرَىٰ وَمَا كُنَّا ظَالِمِينَ", meaning: "As a reminder, and We were not unjust", explanation: "Divine justice in punishment", verseRef: "26:209" }
      ]
    },

    quranNotFromDevils: {
      name: "Quran Not from Devils",
      nameArabic: "ليس القرآن من الشياطين",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "وَمَا تَنَزَّلَتْ بِهِ الشَّيَاطِينُ", meaning: "Devils did not bring it down", explanation: "Refuting accusation", verseRef: "26:210" },
        { term: "وَمَا يَنبَغِي لَهُمْ وَمَا يَسْتَطِيعُونَ", meaning: "It is not befitting for them, nor could they", explanation: "Devils incapable", verseRef: "26:211" },
        { term: "إِنَّهُمْ عَنِ السَّمْعِ لَمَعْزُولُونَ", meaning: "They are barred from hearing", explanation: "Devils cannot access revelation", verseRef: "26:212" }
      ]
    },

    warningAgainstIdolatry: {
      name: "Warning Against Idolatry",
      nameArabic: "التحذير من الشرك",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَلَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: "Do not call with Allah another god", explanation: "Warning against polytheism", verseRef: "26:213" },
        { term: "فَتَكُونَ مِنَ الْمُعَذَّبِينَ", meaning: "Lest you be among the punished", explanation: "Consequence of shirk", verseRef: "26:213" },
        { term: "وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ", meaning: "Warn your closest kindred", explanation: "Start with family", verseRef: "26:214" },
        { term: "وَاخْفِضْ جَنَاحَكَ لِمَنِ اتَّبَعَكَ مِنَ الْمُؤْمِنِينَ", meaning: "Lower your wing to believers who follow you", explanation: "Be humble with followers", verseRef: "26:215" },
        { term: "فَإِنْ عَصَوْكَ فَقُلْ إِنِّي بَرِيءٌ مِّمَّا تَعْمَلُونَ", meaning: "If they disobey, say: I am free of what you do", explanation: "Disassociation from sin", verseRef: "26:216" },
        { term: "وَتَوَكَّلْ عَلَى الْعَزِيزِ الرَّحِيمِ", meaning: "And rely on the Mighty, the Merciful", explanation: "Trust in Allah", verseRef: "26:217" },
        { term: "الَّذِي يَرَاكَ حِينَ تَقُومُ", meaning: "Who sees you when you stand", explanation: "Allah sees your prayer", verseRef: "26:218" },
        { term: "وَتَقَلُّبَكَ فِي السَّاجِدِينَ", meaning: "And your movement among those who prostrate", explanation: "Allah sees all worship", verseRef: "26:219" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: "Indeed He is the Hearing, the Knowing", explanation: "Divine attributes", verseRef: "26:220" }
      ]
    },

    poetsContrast: {
      name: "The Poets - Final Section",
      nameArabic: "الشعراء - الخاتمة",
      color: "#EC4899",
      icon: "MessageCircle",
      concepts: [
        { term: "هَلْ أُنَبِّئُكُمْ عَلَىٰ مَن تَنَزَّلُ الشَّيَاطِينُ", meaning: "Shall I tell you upon whom devils descend?", explanation: "Rhetorical question", verseRef: "26:221" },
        { term: "تَنَزَّلُ عَلَىٰ كُلِّ أَفَّاكٍ أَثِيمٍ", meaning: "They descend upon every sinful liar", explanation: "Devils inspire liars", verseRef: "26:222" },
        { term: "يُلْقُونَ السَّمْعَ وَأَكْثَرُهُمْ كَاذِبُونَ", meaning: "They pass on what they hear, and most are liars", explanation: "Soothsayers lie", verseRef: "26:223" },
        { term: "وَالشُّعَرَاءُ يَتَّبِعُهُمُ الْغَاوُونَ", meaning: "As for the poets, the deviators follow them", explanation: "Misguided follow poets", verseRef: "26:224" },
        { term: "أَلَمْ تَرَ أَنَّهُمْ فِي كُلِّ وَادٍ يَهِيمُونَ", meaning: "Do you not see that they wander in every valley?", explanation: "Poets' aimless wandering in fantasy", verseRef: "26:225" },
        { term: "وَأَنَّهُمْ يَقُولُونَ مَا لَا يَفْعَلُونَ", meaning: "And they say what they do not do", explanation: "Poetry often insincere", verseRef: "26:226" }
      ]
    },

    exceptedPoets: {
      name: "Excepted Righteous Poets",
      nameArabic: "استثناء الشعراء الصالحين",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "إِلَّا الَّذِينَ آمَنُوا", meaning: "Except those who believe", explanation: "Believing poets excepted", verseRef: "26:227" },
        { term: "وَعَمِلُوا الصَّالِحَاتِ", meaning: "And do righteous deeds", explanation: "Righteous action required", verseRef: "26:227" },
        { term: "وَذَكَرُوا اللَّهَ كَثِيرًا", meaning: "And remember Allah often", explanation: "Frequent remembrance", verseRef: "26:227" },
        { term: "وَانتَصَرُوا مِن بَعْدِ مَا ظُلِمُوا", meaning: "And defend themselves after being wronged", explanation: "Defending Islam through poetry", verseRef: "26:227" },
        { term: "وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنقَلَبٍ يَنقَلِبُونَ", meaning: "Those who wrong will know what return they will have", explanation: "Warning to oppressors", verseRef: "26:227" }
      ]
    }
  },

  relationships: [
    { from: "طسم", to: "آيات الكتاب المبين", type: "connection", description: "Opening letters lead to describing clear Book" },
    { from: "إن نشأ ننزل آية", to: "فظلت أعناقهم خاضعين", type: "causation", description: "Overwhelming sign would compel submission" },
    { from: "كل قصة نبي", to: "وإن ربك لهو العزيز الرحيم", type: "conclusion", description: "Each story ends with same refrain" },
    { from: "إني لكم رسول أمين", to: "كل الأنبياء", type: "pattern", description: "All prophets claim trustworthiness" },
    { from: "فاتقوا الله وأطيعون", to: "كل الأنبياء", type: "pattern", description: "All prophets give same command" },
    { from: "وما أسألكم عليه من أجر", to: "كل الأنبياء", type: "pattern", description: "All prophets seek no reward" },
    { from: "كذبوه", to: "فأهلكناهم/فأخذهم العذاب", type: "consequence", description: "Denial leads to destruction" },
    { from: "السحرة", to: "آمنا برب العالمين", type: "transformation", description: "Magicians become believers" },
    { from: "الشعراء", to: "إلا الذين آمنوا", type: "exception", description: "Righteous poets excepted" },
    { from: "نزل به الروح الأمين", to: "على قلبك", type: "destination", description: "Jibril brings to Prophet's heart" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction", verses: "26:1-9", description: "Quran's clarity, Prophet's concern, divine signs, first refrain" },
      { stage: 2, theme: "Story of Musa - Part 1", verses: "26:10-51", description: "Divine call, confronting Pharaoh, signs, magicians convert" },
      { stage: 3, theme: "Story of Musa - Part 2", verses: "26:52-68", description: "Exodus, sea crossing, Pharaoh drowns, second refrain" },
      { stage: 4, theme: "Story of Ibrahim", verses: "26:69-104", description: "Challenging idolatry, praising Allah, dua, Paradise/Hell, third refrain" },
      { stage: 5, theme: "Story of Nuh", verses: "26:105-122", description: "Call to people, rejection by elite, flood, fourth refrain" },
      { stage: 6, theme: "Story of Hud", verses: "26:123-140", description: "Warning to 'Ad, their arrogance, destruction, fifth refrain" },
      { stage: 7, theme: "Story of Salih", verses: "26:141-159", description: "Thamud's blessings, she-camel, hamstringing, sixth refrain" },
      { stage: 8, theme: "Story of Lut", verses: "26:160-175", description: "Confronting immorality, family saved, destruction, seventh refrain" },
      { stage: 9, theme: "Story of Shu'ayb", verses: "26:176-191", description: "Economic justice, Day of Shadow punishment, eighth refrain" },
      { stage: 10, theme: "Quran's Divine Origin", verses: "26:192-209", description: "Revelation from Allah via Jibril, Arabic language, previous scriptures" },
      { stage: 11, theme: "Refutation and Warning", verses: "26:210-220", description: "Not from devils, warning against shirk, trust in Allah" },
      { stage: 12, theme: "The Poets", verses: "26:221-227", description: "Devils inspire liars, poets and their followers, except righteous" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Don't grieve excessively over disbelief", how: "Prophet warned not to destroy himself with grief - do your duty, leave results to Allah", verse: "26:3" },
      { principle: "Allah is with sincere messengers", how: "When facing challenges, remember 'My Lord is with me, He will guide me'", verse: "26:62" },
      { principle: "Prophets seek no worldly reward", how: "True dawah is selfless - 'My reward is only from the Lord of the worlds'", verse: "26:109,127,145,164,180" },
      { principle: "Don't reject based on followers' status", how: "Nuh refused to judge or reject believers based on social class", verse: "26:111-114" },
      { principle: "Fear Allah who gave all blessings", how: "Hud reminded of livestock, children, gardens - be grateful", verse: "26:132-134" },
      { principle: "Give full measure and weight", how: "Shu'ayb's core message - economic honesty essential", verse: "26:181-183" },
      { principle: "Start warning with family", how: "Warn your closest kindred first", verse: "26:214" },
      { principle: "Be humble with followers", how: "Lower your wing to believers - gentle leadership", verse: "26:215" },
      { principle: "Poetry can be righteous", how: "If combined with faith, good deeds, remembrance, and defending truth", verse: "26:227" }
    ]
  },

  uniqueInsight: {
    title: "The Structural Genius of the Repeated Refrain",
    insight: "Surah Ash-Shu'ara presents seven prophet narratives (Musa, Ibrahim, Nuh, Hud, Salih, Lut, Shu'ayb), each concluding with the identical refrain: 'And indeed, your Lord - He is the Exalted in Might, the Merciful' (وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ). This refrain appears 8 times total (including after the introduction). The pairing of 'Al-Aziz' (Mighty) and 'Al-Rahim' (Merciful) is profound: after each story of destruction, Allah reminds that He is both powerful enough to destroy deniers AND merciful enough to save believers. The repetition creates a rhythmic structure unique in the Quran, almost like a chorus in a song, reinforcing that all prophetic missions share the same message, face similar rejection, and receive the same divine protection. The surah's name 'The Poets' comes from its ending, creating a contrast: false poets wander aimlessly saying what they don't do, while prophets deliver consistent, truthful messages backed by divine authority."
  },

  historicalContext: {
    note: "This Makkan surah was revealed during intense persecution when the Quraysh accused Prophet Muhammad of being a poet or soothsayer. The surah systematically refutes this by distinguishing divine revelation from poetic inspiration. The detailed stories of prophets facing similar accusations and their ultimate vindication served to comfort the Prophet and early Muslims. The magicians' instant conversion upon seeing truth, despite facing crucifixion, was especially relevant - showing that true recognition of truth can happen instantly and that worldly threats cannot shake genuine faith. The emphasis on prophets being 'brothers' to their people (أخوهم) shows messengers are not outsiders but arise from within communities, paralleling Muhammad's situation with Quraysh."
  },

  linguisticFeatures: {
    features: [
      { feature: "طسم", example: "Ta Sin Mim", effect: "Mysterious opening letters shared with 27 and 28" },
      { feature: "بَاخِعٌ نَّفْسَكَ", example: "Destroying yourself", effect: "Rare word bakhiʿ - extreme grief metaphor" },
      { feature: "الطَّوْدِ الْعَظِيمِ", example: "Great towering mountain", effect: "Vivid description of parted sea walls" },
      { feature: "أَفَّاكٍ أَثِيمٍ", example: "Sinful liar", effect: "Intensified adjectives for those devils inspire" },
      { feature: "يَهِيمُونَ", example: "They wander aimlessly", effect: "Root h-y-m suggests lost in desert/love - poetic wandering" },
      { feature: "فِي كُلِّ وَادٍ", example: "In every valley", effect: "Metaphor for every topic/fantasy - poets explore all themes" },
      { feature: "اخْفِضْ جَنَاحَكَ", example: "Lower your wing", effect: "Bird metaphor for humility - tender leadership" },
      { feature: "الظُّلَّةِ", example: "The Shadow", effect: "Unique punishment name - cloud of fire over them" }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Musa", arabic: "موسى", verses: "26:10-68", details: "Most detailed - divine call, Pharaoh confrontation, magicians, exodus, sea crossing" },
      { name: "Ibrahim", arabic: "إبراهيم", verses: "26:69-104", details: "Challenging idolatry, describing Allah's attributes, comprehensive dua" },
      { name: "Nuh", arabic: "نوح", verses: "26:105-122", details: "Call to people, elite rejection, death threat, flood" },
      { name: "Hud", arabic: "هود", verses: "26:123-140", details: "Warning 'Ad about vanity, tyranny; their indifference, destruction" },
      { name: "Salih", arabic: "صالح", verses: "26:141-159", details: "Thamud's blessings, she-camel miracle, hamstringing, punishment" },
      { name: "Lut", arabic: "لوط", verses: "26:160-175", details: "Confronting immorality, threat of expulsion, family saved except wife" },
      { name: "Shu'ayb", arabic: "شعيب", verses: "26:176-191", details: "To people of Aykah (thicket), economic justice, Day of Shadow" }
    ]
  },

  destroyedNations: {
    nations: [
      { name: "Pharaoh's people", punishment: "أَغْرَقْنَا - Drowned in sea", verse: "26:66", cause: "Enslaving Israel, claiming divinity" },
      { name: "People of Nuh", punishment: "أَغْرَقْنَا الْبَاقِينَ - Drowned the rest", verse: "26:120", cause: "Centuries of rejection, class discrimination" },
      { name: "'Ad (Hud's people)", punishment: "فَأَهْلَكْنَاهُمْ - We destroyed them", verse: "26:139", cause: "Arrogance, vanity projects, tyranny" },
      { name: "Thamud (Salih's people)", punishment: "فَأَخَذَهُمُ الْعَذَابُ - Punishment seized them", verse: "26:158", cause: "Killing the she-camel despite warning" },
      { name: "People of Lut", punishment: "أَمْطَرْنَا عَلَيْهِم مَّطَرًا - Rained upon them", verse: "26:173", cause: "Unprecedented immorality" },
      { name: "People of Aykah (Shu'ayb)", punishment: "عَذَابُ يَوْمِ الظُّلَّةِ - Day of Shadow", verse: "26:189", cause: "Cheating in weights, corruption" }
    ]
  },

  refrainAnalysis: {
    refrain: "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
    translation: "And indeed, your Lord - He is the Exalted in Might, the Merciful",
    occurrences: [
      { verse: "26:9", after: "Introduction and nature signs" },
      { verse: "26:68", after: "Musa story - sea crossing" },
      { verse: "26:104", after: "Ibrahim story - Paradise/Hell" },
      { verse: "26:122", after: "Nuh story - flood" },
      { verse: "26:140", after: "Hud story - 'Ad destruction" },
      { verse: "26:159", after: "Salih story - Thamud punishment" },
      { verse: "26:175", after: "Lut story - rain of stones" },
      { verse: "26:191", after: "Shu'ayb story - Day of Shadow" }
    ],
    significance: "The dual names combine Allah's power to punish (Al-Aziz) with His mercy to save (Al-Rahim), showing both aspects manifest in every prophetic narrative"
  },

  prophetFormula: {
    title: "Common Formula in All Prophet Stories",
    elements: [
      { element: "كَذَّبَتْ قَوْمُ ... الْمُرْسَلِينَ", meaning: "The people of X denied the messengers", note: "Denial of one = denial of all" },
      { element: "إِذْ قَالَ لَهُمْ أَخُوهُمْ", meaning: "When their brother said to them", note: "Prophet from among them" },
      { element: "أَلَا تَتَّقُونَ", meaning: "Will you not fear Allah?", note: "Call to taqwa" },
      { element: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: "I am a trustworthy messenger", note: "Trustworthiness claim" },
      { element: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: "Fear Allah and obey me", note: "Two essential commands" },
      { element: "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ", meaning: "I ask no reward from you", note: "Selfless mission" },
      { element: "إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ", meaning: "My reward is only from Lord of worlds", note: "Seeking divine reward" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "26:7", topic: "Botany", note: "Pairs (zawj) in plants - male and female parts in vegetation" },
      { verse: "26:63", topic: "Hydrodynamics", note: "Sea parting into towering walls - water behaving against nature" },
      { verse: "26:78-80", topic: "Medicine", note: "Ibrahim attributes illness to self, healing to Allah - recognizing divine healing" }
    ]
  },

  qalbSalim: {
    title: "Al-Qalb Al-Salim - The Sound Heart",
    verse: "26:89",
    arabic: "إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ",
    meaning: "Except one who comes to Allah with a sound heart",
    significance: "This verse establishes that on Judgment Day, neither wealth nor children will benefit anyone - only a 'sound heart' (qalb salim). Scholars define this as a heart free from shirk, hypocrisy, envy, hatred, and attachment to dunya. Ibrahim prays for this state, showing even prophets seek spiritual purity. This concept became foundational in Islamic spirituality - the ultimate goal is not external worship alone but inner purification."
  }
};

export default ONTOLOGY;
