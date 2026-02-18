/**
 * Surah Ad-Dukhan (44) - Ontology of Quranic Concepts
 * The Smoke - 59 Ayahs, Makki
 * Theme: Laylat al-Qadr, the smoke sign, Pharaoh's destruction, tree of Zaqqum, Paradise rewards
 */

export const ONTOLOGY = {
  surahId: 44,
  surahName: "Ad-Dukhan",
  surahNameArabic: "الدخان",
  revelationType: "Makki",
  totalAyahs: 59,

  categories: {
    laylatAlQadr: {
      name: "The Blessed Night (Laylat al-Qadr)",
      nameArabic: "ليلة القدر",
      color: "#8B5CF6",
      concepts: [
        { term: "حم", meaning: "Ha-Mim", explanation: "Disconnected letters - part of the Ha-Mim series (40-46)", verseRef: "44:1" },
        { term: "وَالْكِتَابِ الْمُبِينِ", meaning: "By the clear Book", explanation: "Oath by the Quran emphasizing its clarity", verseRef: "44:2" },
        { term: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ", meaning: "Indeed, We sent it down during a blessed night", explanation: "Revelation of Quran on Laylat al-Qadr", verseRef: "44:3" },
        { term: "إِنَّا كُنَّا مُنذِرِينَ", meaning: "Indeed, We were to warn", explanation: "Purpose of revelation - to warn mankind", verseRef: "44:3" },
        { term: "فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ", meaning: "On that night every wise affair is determined", explanation: "Decrees for the year are decided", verseRef: "44:4" },
        { term: "أَمْرًا مِّنْ عِندِنَا", meaning: "A command from Us", explanation: "Divine origin of all decrees", verseRef: "44:5" },
        { term: "رَحْمَةً مِّن رَّبِّكَ", meaning: "As mercy from your Lord", explanation: "Revelation as divine mercy", verseRef: "44:6" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: "Indeed, He is the Hearing, the Knowing", explanation: "Allah's attributes of hearing and knowledge", verseRef: "44:6" }
      ]
    },

    divineCreatorship: {
      name: "Divine Lordship and Creation",
      nameArabic: "الربوبية والخلق",
      color: "#10B981",
      concepts: [
        { term: "رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا", meaning: "Lord of the heavens and earth and what is between them", explanation: "Allah's sovereignty over all creation", verseRef: "44:7" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: "There is no deity except Him", explanation: "Declaration of Tawhid - absolute monotheism", verseRef: "44:8" },
        { term: "يُحْيِي وَيُمِيتُ", meaning: "He gives life and causes death", explanation: "Allah controls life and death", verseRef: "44:8" },
        { term: "رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ", meaning: "Your Lord and the Lord of your forefathers", explanation: "Lordship spans all generations", verseRef: "44:8" }
      ]
    },

    theSmoke: {
      name: "The Smoke (Ad-Dukhan)",
      nameArabic: "الدخان",
      color: "#6B7280",
      concepts: [
        { term: "بَلْ هُمْ فِي شَكٍّ يَلْعَبُونَ", meaning: "But they are in doubt, amusing themselves", explanation: "Disbelievers' heedless attitude", verseRef: "44:9" },
        { term: "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُّبِينٍ", meaning: "Then watch for the Day when the sky brings visible smoke", explanation: "Prophecy of the smoke - a major sign", verseRef: "44:10" },
        { term: "يَغْشَى النَّاسَ", meaning: "Covering the people", explanation: "Smoke will envelop humanity", verseRef: "44:11" },
        { term: "هَٰذَا عَذَابٌ أَلِيمٌ", meaning: "This is a painful punishment", explanation: "Nature of the smoke punishment", verseRef: "44:11" },
        { term: "رَّبَّنَا اكْشِفْ عَنَّا الْعَذَابَ إِنَّا مُؤْمِنُونَ", meaning: "Our Lord, remove from us the torment; indeed, we are believers", explanation: "People's desperate plea during the smoke", verseRef: "44:12" },
        { term: "أَنَّىٰ لَهُمُ الذِّكْرَىٰ", meaning: "How will they be reminded?", explanation: "Rhetorical - too late for remembrance", verseRef: "44:13" },
        { term: "وَقَدْ جَاءَهُمْ رَسُولٌ مُّبِينٌ", meaning: "When a clear messenger had already come to them", explanation: "They already received clear guidance", verseRef: "44:13" },
        { term: "ثُمَّ تَوَلَّوْا عَنْهُ وَقَالُوا مُعَلَّمٌ مَّجْنُونٌ", meaning: "Then they turned away and said: Taught [by others], a madman", explanation: "Their rejection and insults", verseRef: "44:14" },
        { term: "إِنَّا كَاشِفُو الْعَذَابِ قَلِيلًا", meaning: "Indeed, We will remove the punishment a little", explanation: "Temporary respite granted", verseRef: "44:15" },
        { term: "إِنَّكُمْ عَائِدُونَ", meaning: "Indeed, you will return [to disbelief]", explanation: "Prophecy of their relapse", verseRef: "44:15" }
      ]
    },

    greatSeizure: {
      name: "The Great Seizure (Al-Batshah Al-Kubra)",
      nameArabic: "البطشة الكبرى",
      color: "#EF4444",
      concepts: [
        { term: "يَوْمَ نَبْطِشُ الْبَطْشَةَ الْكُبْرَىٰ", meaning: "The Day We will strike with the greatest assault", explanation: "Reference to Badr or Day of Judgment", verseRef: "44:16" },
        { term: "إِنَّا مُنتَقِمُونَ", meaning: "Indeed, We will take retribution", explanation: "Divine vengeance upon deniers", verseRef: "44:16" }
      ]
    },

    pharaohStory: {
      name: "Pharaoh and the Children of Israel",
      nameArabic: "فرعون وبنو إسرائيل",
      color: "#F59E0B",
      concepts: [
        { term: "وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ فِرْعَوْنَ", meaning: "And We had tried before them the people of Pharaoh", explanation: "Historical example - Pharaoh's people tested", verseRef: "44:17" },
        { term: "وَجَاءَهُمْ رَسُولٌ كَرِيمٌ", meaning: "And there came to them a noble messenger", explanation: "Prophet Musa sent to them", verseRef: "44:17" },
        { term: "أَنْ أَدُّوا إِلَيَّ عِبَادَ اللَّهِ", meaning: "Send with me the servants of Allah", explanation: "Musa's demand to free Israelites", verseRef: "44:18" },
        { term: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: "Indeed, I am to you a trustworthy messenger", explanation: "Musa's credentials", verseRef: "44:18" },
        { term: "وَأَن لَّا تَعْلُوا عَلَى اللَّهِ", meaning: "And do not be haughty with Allah", explanation: "Warning against arrogance before Allah", verseRef: "44:19" },
        { term: "إِنِّي آتِيكُم بِسُلْطَانٍ مُّبِينٍ", meaning: "Indeed, I come to you with clear authority", explanation: "Musa's miracles as proof", verseRef: "44:19" },
        { term: "وَإِنِّي عُذْتُ بِرَبِّي وَرَبِّكُمْ أَن تَرْجُمُونِ", meaning: "And indeed, I have sought refuge in my Lord and your Lord, lest you stone me", explanation: "Musa seeking divine protection", verseRef: "44:20" },
        { term: "وَإِن لَّمْ تُؤْمِنُوا لِي فَاعْتَزِلُونِ", meaning: "But if you do not believe me, then leave me alone", explanation: "Final ultimatum to Pharaoh", verseRef: "44:21" },
        { term: "فَدَعَا رَبَّهُ أَنَّ هَٰؤُلَاءِ قَوْمٌ مُّجْرِمُونَ", meaning: "So he called upon his Lord: These are a criminal people", explanation: "Musa's prayer against Pharaoh's people", verseRef: "44:22" }
      ]
    },

    exodusAndDestruction: {
      name: "The Exodus and Pharaoh's Destruction",
      nameArabic: "الخروج وهلاك فرعون",
      color: "#3B82F6",
      concepts: [
        { term: "فَأَسْرِ بِعِبَادِي لَيْلًا", meaning: "Set out with My servants by night", explanation: "Command to lead Israelites at night", verseRef: "44:23" },
        { term: "إِنَّكُم مُّتَّبَعُونَ", meaning: "Indeed, you will be pursued", explanation: "Warning that Pharaoh will follow", verseRef: "44:23" },
        { term: "وَاتْرُكِ الْبَحْرَ رَهْوًا", meaning: "And leave the sea parted", explanation: "Miracle of the parted sea", verseRef: "44:24" },
        { term: "إِنَّهُمْ جُندٌ مُّغْرَقُونَ", meaning: "Indeed, they are an army to be drowned", explanation: "Prophecy of Pharaoh's army drowning", verseRef: "44:24" },
        { term: "كَمْ تَرَكُوا مِن جَنَّاتٍ وَعُيُونٍ", meaning: "How much they left of gardens and springs", explanation: "Material wealth abandoned", verseRef: "44:25" },
        { term: "وَزُرُوعٍ وَمَقَامٍ كَرِيمٍ", meaning: "And crops and noble residences", explanation: "Their luxurious dwellings left behind", verseRef: "44:26" },
        { term: "وَنَعْمَةٍ كَانُوا فِيهَا فَاكِهِينَ", meaning: "And comfort in which they were enjoying themselves", explanation: "Pleasures they indulged in", verseRef: "44:27" },
        { term: "كَذَٰلِكَ ۖ وَأَوْرَثْنَاهَا قَوْمًا آخَرِينَ", meaning: "Thus. And We caused another people to inherit them", explanation: "Transfer of wealth to Israelites", verseRef: "44:28" },
        { term: "فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ", meaning: "And the heaven and earth wept not for them", explanation: "No cosmic mourning for the wicked", verseRef: "44:29" },
        { term: "وَمَا كَانُوا مُنظَرِينَ", meaning: "Nor were they given respite", explanation: "No delay in their punishment", verseRef: "44:29" }
      ]
    },

    israelitesSaved: {
      name: "Children of Israel Saved",
      nameArabic: "نجاة بني إسرائيل",
      color: "#10B981",
      concepts: [
        { term: "وَلَقَدْ نَجَّيْنَا بَنِي إِسْرَائِيلَ مِنَ الْعَذَابِ الْمُهِينِ", meaning: "And We certainly saved the Children of Israel from the humiliating torment", explanation: "Divine rescue from oppression", verseRef: "44:30" },
        { term: "مِن فِرْعَوْنَ ۚ إِنَّهُ كَانَ عَالِيًا مِّنَ الْمُسْرِفِينَ", meaning: "From Pharaoh. Indeed, he was a haughty one among the transgressors", explanation: "Pharaoh's arrogance highlighted", verseRef: "44:31" },
        { term: "وَلَقَدِ اخْتَرْنَاهُمْ عَلَىٰ عِلْمٍ عَلَى الْعَالَمِينَ", meaning: "And We chose them, with knowledge, over [all] the worlds", explanation: "Israelites chosen in their time", verseRef: "44:32" },
        { term: "وَآتَيْنَاهُم مِّنَ الْآيَاتِ مَا فِيهِ بَلَاءٌ مُّبِينٌ", meaning: "And We gave them signs in which was a clear trial", explanation: "Miracles that tested their faith", verseRef: "44:33" }
      ]
    },

    denialOfResurrection: {
      name: "Denial of Resurrection",
      nameArabic: "إنكار البعث",
      color: "#6366F1",
      concepts: [
        { term: "إِنَّ هَٰؤُلَاءِ لَيَقُولُونَ", meaning: "Indeed, these [disbelievers] say", explanation: "Introducing Quraysh's denial", verseRef: "44:34" },
        { term: "إِنْ هِيَ إِلَّا مَوْتَتُنَا الْأُولَىٰ", meaning: "There is not but our first death", explanation: "Denial of life after death", verseRef: "44:35" },
        { term: "وَمَا نَحْنُ بِمُنشَرِينَ", meaning: "And we will not be resurrected", explanation: "Explicit denial of resurrection", verseRef: "44:35" },
        { term: "فَأْتُوا بِآبَائِنَا إِن كُنتُمْ صَادِقِينَ", meaning: "Then bring [back] our forefathers, if you are truthful", explanation: "Their mocking challenge", verseRef: "44:36" },
        { term: "أَهُمْ خَيْرٌ أَمْ قَوْمُ تُبَّعٍ", meaning: "Are they better or the people of Tubba'?", explanation: "Comparison to destroyed Himyarite kingdom", verseRef: "44:37" },
        { term: "وَالَّذِينَ مِن قَبْلِهِمْ ۚ أَهْلَكْنَاهُمْ", meaning: "And those before them? We destroyed them", explanation: "Pattern of destruction", verseRef: "44:37" },
        { term: "إِنَّهُمْ كَانُوا مُجْرِمِينَ", meaning: "Indeed, they were criminals", explanation: "Reason for their destruction", verseRef: "44:37" }
      ]
    },

    purposefulCreation: {
      name: "Purposeful Creation",
      nameArabic: "الخلق بالحق",
      color: "#14B8A6",
      concepts: [
        { term: "وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ", meaning: "And We did not create the heavens and earth and what is between them in play", explanation: "Creation has serious purpose", verseRef: "44:38" },
        { term: "مَا خَلَقْنَاهُمَا إِلَّا بِالْحَقِّ", meaning: "We did not create them except in truth", explanation: "Creation founded on truth and justice", verseRef: "44:39" },
        { term: "وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ", meaning: "But most of them do not know", explanation: "Most people ignorant of this truth", verseRef: "44:39" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم الفصل",
      color: "#EC4899",
      concepts: [
        { term: "إِنَّ يَوْمَ الْفَصْلِ مِيقَاتُهُمْ أَجْمَعِينَ", meaning: "Indeed, the Day of Judgment is their appointment - all of them", explanation: "Universal gathering for judgment", verseRef: "44:40" },
        { term: "يَوْمَ لَا يُغْنِي مَوْلًى عَن مَّوْلًى شَيْئًا", meaning: "The Day when no relation will avail a relative at all", explanation: "No intercession without permission", verseRef: "44:41" },
        { term: "وَلَا هُمْ يُنصَرُونَ", meaning: "Nor will they be helped", explanation: "No external help available", verseRef: "44:41" },
        { term: "إِلَّا مَن رَّحِمَ اللَّهُ", meaning: "Except those on whom Allah has mercy", explanation: "Only Allah's mercy saves", verseRef: "44:42" },
        { term: "إِنَّهُ هُوَ الْعَزِيزُ الرَّحِيمُ", meaning: "Indeed, He is the Exalted in Might, the Merciful", explanation: "Power combined with mercy", verseRef: "44:42" }
      ]
    },

    treeOfZaqqum: {
      name: "The Tree of Zaqqum",
      nameArabic: "شجرة الزقوم",
      color: "#7C3AED",
      concepts: [
        { term: "إِنَّ شَجَرَتَ الزَّقُّومِ", meaning: "Indeed, the tree of Zaqqum", explanation: "Tree in Hell described", verseRef: "44:43" },
        { term: "طَعَامُ الْأَثِيمِ", meaning: "Is food for the sinful", explanation: "Forced sustenance of sinners", verseRef: "44:44" },
        { term: "كَالْمُهْلِ يَغْلِي فِي الْبُطُونِ", meaning: "Like murky oil, boiling in the bellies", explanation: "Tormenting effect in stomachs", verseRef: "44:45" },
        { term: "كَغَلْيِ الْحَمِيمِ", meaning: "Like the boiling of scalding water", explanation: "Intensity of the torment", verseRef: "44:46" },
        { term: "خُذُوهُ فَاعْتِلُوهُ إِلَىٰ سَوَاءِ الْجَحِيمِ", meaning: "Seize him and drag him into the midst of the Hellfire", explanation: "Command to angels of punishment", verseRef: "44:47" },
        { term: "ثُمَّ صُبُّوا فَوْقَ رَأْسِهِ مِنْ عَذَابِ الْحَمِيمِ", meaning: "Then pour over his head the torment of scalding water", explanation: "Boiling water poured on sinners", verseRef: "44:48" },
        { term: "ذُقْ إِنَّكَ أَنتَ الْعَزِيزُ الْكَرِيمُ", meaning: "Taste! Indeed, you are the honored, the noble", explanation: "Ironic mockery of their worldly pride", verseRef: "44:49" },
        { term: "إِنَّ هَٰذَا مَا كُنتُم بِهِ تَمْتَرُونَ", meaning: "Indeed, this is what you used to dispute", explanation: "Confirmation of what they denied", verseRef: "44:50" }
      ]
    },

    paradiseRewards: {
      name: "Paradise and Its Rewards",
      nameArabic: "الجنة ونعيمها",
      color: "#22C55E",
      concepts: [
        { term: "إِنَّ الْمُتَّقِينَ فِي مَقَامٍ أَمِينٍ", meaning: "Indeed, the righteous will be in a secure place", explanation: "Paradise as place of security", verseRef: "44:51" },
        { term: "فِي جَنَّاتٍ وَعُيُونٍ", meaning: "In gardens and springs", explanation: "Gardens with flowing springs", verseRef: "44:52" },
        { term: "يَلْبَسُونَ مِن سُندُسٍ وَإِسْتَبْرَقٍ", meaning: "Wearing [garments of] fine silk and brocade", explanation: "Luxurious clothing in Paradise", verseRef: "44:53" },
        { term: "مُّتَقَابِلِينَ", meaning: "Facing one another", explanation: "Companions enjoying each other's company", verseRef: "44:53" },
        { term: "كَذَٰلِكَ وَزَوَّجْنَاهُم بِحُورٍ عِينٍ", meaning: "Thus. And We will marry them to fair women with large eyes", explanation: "Pure companions in Paradise (Hur al-'In)", verseRef: "44:54" },
        { term: "يَدْعُونَ فِيهَا بِكُلِّ فَاكِهَةٍ آمِنِينَ", meaning: "They will call therein for every [kind of] fruit, safe and secure", explanation: "All fruits available without fear", verseRef: "44:55" },
        { term: "لَا يَذُوقُونَ فِيهَا الْمَوْتَ إِلَّا الْمَوْتَةَ الْأُولَىٰ", meaning: "They will not taste death therein except the first death", explanation: "No death in Paradise - eternal life", verseRef: "44:56" },
        { term: "وَوَقَاهُمْ عَذَابَ الْجَحِيمِ", meaning: "And He will have protected them from the punishment of Hellfire", explanation: "Saved from Hell", verseRef: "44:56" },
        { term: "فَضْلًا مِّن رَّبِّكَ", meaning: "As bounty from your Lord", explanation: "All rewards are Allah's favor", verseRef: "44:57" },
        { term: "ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ", meaning: "That is the great attainment", explanation: "Ultimate success", verseRef: "44:57" }
      ]
    },

    quranAndProphet: {
      name: "Quran Made Easy and Prophetic Mission",
      nameArabic: "تيسير القرآن ومهمة النبي",
      color: "#F97316",
      concepts: [
        { term: "فَإِنَّمَا يَسَّرْنَاهُ بِلِسَانِكَ", meaning: "Indeed, We have made it easy in your tongue", explanation: "Quran revealed in Arabic for accessibility", verseRef: "44:58" },
        { term: "لَعَلَّهُمْ يَتَذَكَّرُونَ", meaning: "That they might be reminded", explanation: "Purpose - remembrance and reflection", verseRef: "44:58" },
        { term: "فَارْتَقِبْ إِنَّهُم مُّرْتَقِبُونَ", meaning: "So watch; indeed, they are watching", explanation: "Mutual waiting - truth will prevail", verseRef: "44:59" }
      ]
    }
  },

  relationships: [
    { from: "ليلة مباركة", to: "يفرق كل أمر حكيم", type: "occasion", description: "On the blessed night, all affairs are decreed" },
    { from: "الدخان", to: "عذاب أليم", type: "nature", description: "The smoke is a painful punishment" },
    { from: "رسول كريم", to: "فرعون", type: "confrontation", description: "Musa confronted Pharaoh with truth" },
    { from: "اترك البحر رهوا", to: "جند مغرقون", type: "result", description: "Parted sea led to drowning of Pharaoh's army" },
    { from: "شجرة الزقوم", to: "طعام الأثيم", type: "purpose", description: "Zaqqum is the food of sinners" },
    { from: "المتقين", to: "مقام أمين", type: "reward", description: "The righteous earn secure Paradise" },
    { from: "فوز عظيم", to: "فضل من ربك", type: "source", description: "Great success comes from Allah's bounty" },
    { from: "إنكار البعث", to: "يوم الفصل", type: "reality", description: "What they deny will certainly occur" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Blessed Night", verses: "44:1-9", description: "Ha-Mim, oath by Quran, Laylat al-Qadr, Tawhid" },
      { stage: 2, theme: "The Smoke Sign", verses: "44:10-16", description: "Warning of smoke, people's plea, temporary respite, great seizure" },
      { stage: 3, theme: "Pharaoh's Story", verses: "44:17-33", description: "Musa sent, demand to free Israelites, exodus, drowning, inheritance" },
      { stage: 4, theme: "Denial of Resurrection", verses: "44:34-39", description: "Quraysh deny afterlife, Tubba' mentioned, purposeful creation" },
      { stage: 5, theme: "Day of Judgment", verses: "44:40-42", description: "Day of Separation, no intercession except by Allah's mercy" },
      { stage: 6, theme: "Punishment of Sinners", verses: "44:43-50", description: "Tree of Zaqqum, boiling drink, mockery of their pride" },
      { stage: 7, theme: "Rewards of Paradise", verses: "44:51-57", description: "Gardens, springs, silk, companions, fruits, eternal life" },
      { stage: 8, theme: "Closing Exhortation", verses: "44:58-59", description: "Quran made easy, command to watch" }
    ]
  },

  keyTerms: {
    dukhan: {
      arabic: "الدخان",
      transliteration: "ad-dukhān",
      meaning: "The Smoke",
      significance: "A major eschatological sign, either referring to a severe famine during Prophet's time or a future sign before Day of Judgment",
      verseRef: "44:10"
    },
    laylatMubarakah: {
      arabic: "ليلة مباركة",
      transliteration: "laylat mubārakah",
      meaning: "A blessed night",
      significance: "Identified as Laylat al-Qadr when Quran was revealed and decrees are determined",
      verseRef: "44:3"
    },
    zaqqum: {
      arabic: "الزقوم",
      transliteration: "az-zaqqūm",
      meaning: "Tree of Zaqqum",
      significance: "A tree in Hell with bitter fruit that torments its eaters",
      verseRef: "44:43"
    },
    batshah: {
      arabic: "البطشة الكبرى",
      transliteration: "al-baṭshah al-kubrā",
      meaning: "The Greatest Assault/Seizure",
      significance: "Either the Battle of Badr or the final Day of Judgment",
      verseRef: "44:16"
    },
    yawmAlFasl: {
      arabic: "يوم الفصل",
      transliteration: "yawm al-faṣl",
      meaning: "Day of Separation/Decision",
      significance: "Day when truth is separated from falsehood, believers from disbelievers",
      verseRef: "44:40"
    }
  },

  practicalApplication: {
    applications: [
      { principle: "Value Laylat al-Qadr", how: "Seek the blessed night in Ramadan with worship and supplication", verse: "44:3-4" },
      { principle: "Reflect on creation's purpose", how: "Universe is not play - there is accountability", verse: "44:38-39" },
      { principle: "Learn from Pharaoh", how: "Arrogance leads to destruction despite worldly power", verse: "44:31" },
      { principle: "Material wealth is temporary", how: "Pharaoh's gardens and palaces meant nothing at death", verse: "44:25-28" },
      { principle: "Be among the Muttaqin", how: "Taqwa leads to eternal security and reward", verse: "44:51-56" },
      { principle: "Heed warnings before it's too late", how: "Don't wait until punishment to believe", verse: "44:12-15" },
      { principle: "Trust in ultimate justice", how: "Day of Separation will reveal all truth", verse: "44:40" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "حم", pattern: "Huruf Muqatta'at", effect: "Part of the Ha-Mim series, creating unity among surahs 40-46" },
      { feature: "يُفْرَقُ", pattern: "Passive voice", effect: "Emphasizes divine action without specifying agent" },
      { feature: "ذُقْ", pattern: "Imperative singular", effect: "Personalized address heightening impact of judgment" },
      { feature: "أَنَّىٰ", pattern: "Rhetorical question", effect: "Emphasizes impossibility of late remembrance" },
      { feature: "كَالْمُهْلِ", pattern: "Simile", effect: "Vivid imagery of Zaqqum's torment" }
    ],
    hamimConnection: "Surah 44 is part of the seven 'Ha-Mim' surahs (40-46), all beginning with these letters and sharing themes of revelation, warning, and the fate of nations."
  },

  historicalContext: {
    note: "Ad-Dukhan was revealed in Makkah during a period of intense opposition to the Prophet. The Quraysh denied resurrection, mocked the message, and persecuted believers. The surah warns them through the story of Pharaoh's destruction and prophecies the 'smoke' sign. Some scholars interpret the smoke as the severe famine that afflicted Makkah, during which people saw smoke-like mirages due to extreme hunger, and the 'great seizure' as the Battle of Badr. Others view both as eschatological signs yet to occur."
  },

  uniqueInsight: {
    title: "The Night of Decree and the Day of Separation",
    insight: "Ad-Dukhan uniquely connects two pivotal moments: Laylat al-Qadr (when Quran was revealed and decrees are determined) and Yawm al-Fasl (when all decrees manifest). This creates a theological bridge between divine knowledge and divine judgment. What Allah decrees on the blessed night will be fully realized on the Day of Separation. The surah moves from the mercy of revelation to the reality of recompense, with Pharaoh's story serving as a historical proof that those who reject guidance face certain destruction. The contrast between the tree of Zaqqum and the gardens of Paradise demonstrates the two ultimate destinations awaiting humanity."
  }
};

export default ONTOLOGY;
