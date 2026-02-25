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
        { term: "حم", meaning: { en: "Ha-Mim", ur: "حم" }, explanation: { en: "Disconnected letters - part of the Ha-Mim series (40-46)", ur: "Disconnected letters - part of the Ha-Mim series (40-46)" }, verseRef: "44:1" },
        { term: "وَالْكِتَابِ الْمُبِينِ", meaning: { en: "By the clear Book", ur: "By the clear Book" }, explanation: { en: "Oath by the Quran emphasizing its clarity", ur: "Oath by the Quran emphasizing its clarity" }, verseRef: "44:2" },
        { term: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ", meaning: { en: "Indeed, We sent it down during a blessed night", ur: "Indeed, We sent it down during a blessed night" }, explanation: { en: "Revelation of Quran on Laylat al-Qadr", ur: "Revelation of Quran on Laylat al-Qadr" }, verseRef: "44:3" },
        { term: "إِنَّا كُنَّا مُنذِرِينَ", meaning: { en: "Indeed, We were to warn", ur: "Indeed, We were to warn" }, explanation: { en: "Purpose of revelation - to warn mankind", ur: "Purpose of revelation - to warn mankind" }, verseRef: "44:3" },
        { term: "فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ", meaning: { en: "On that night every wise affair is determined", ur: "On that night every wise affair is determined" }, explanation: { en: "Decrees for the year are decided", ur: "Decrees for the year are decided" }, verseRef: "44:4" },
        { term: "أَمْرًا مِّنْ عِندِنَا", meaning: { en: "A command from Us", ur: "A command from Us" }, explanation: { en: "Divine origin of all decrees", ur: "Divine origin of all decrees" }, verseRef: "44:5" },
        { term: "رَحْمَةً مِّن رَّبِّكَ", meaning: { en: "As mercy from your Lord", ur: "As mercy from your Lord" }, explanation: { en: "Revelation as divine mercy", ur: "Revelation as divine mercy" }, verseRef: "44:6" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: { en: "Indeed, He is the Hearing, the Knowing", ur: "Indeed, He is the Hearing, the Knowing" }, explanation: { en: "Allah's attributes of hearing and knowledge", ur: "Allah's attributes of hearing and knowledge" }, verseRef: "44:6" }
      ]
    },

    divineCreatorship: {
      name: "Divine Lordship and Creation",
      nameArabic: "الربوبية والخلق",
      color: "#10B981",
      concepts: [
        { term: "رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا", meaning: { en: "Lord of the heavens and earth and what is between them", ur: "Lord of the heavens and earth and what is between them" }, explanation: { en: "Allah's sovereignty over all creation", ur: "Allah's sovereignty over all creation" }, verseRef: "44:7" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: { en: "There is no deity except Him", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Declaration of Tawhid - absolute monotheism", ur: "Declaration of Tawhid - absolute monotheism" }, verseRef: "44:8" },
        { term: "يُحْيِي وَيُمِيتُ", meaning: { en: "He gives life and causes death", ur: "He gives life and causes death" }, explanation: { en: "Allah controls life and death", ur: "Allah controls life and death" }, verseRef: "44:8" },
        { term: "رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ", meaning: { en: "Your Lord and the Lord of your forefathers", ur: "Your Lord and the Lord of your forefathers" }, explanation: { en: "Lordship spans all generations", ur: "Lordship spans all generations" }, verseRef: "44:8" }
      ]
    },

    theSmoke: {
      name: "The Smoke (Ad-Dukhan)",
      nameArabic: "الدخان",
      color: "#6B7280",
      concepts: [
        { term: "بَلْ هُمْ فِي شَكٍّ يَلْعَبُونَ", meaning: { en: "But they are in doubt, amusing themselves", ur: "But they are in doubt, amusing themselves" }, explanation: { en: "Disbelievers' heedless attitude", ur: "Disbelievers' heedless attitude" }, verseRef: "44:9" },
        { term: "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُّبِينٍ", meaning: { en: "Then watch for the Day when the sky brings visible smoke", ur: "Then watch for the Day when the sky brings visible smoke" }, explanation: { en: "Prophecy of the smoke - a major sign", ur: "Prophecy of the smoke - a major sign" }, verseRef: "44:10" },
        { term: "يَغْشَى النَّاسَ", meaning: { en: "Covering the people", ur: "Covering the people" }, explanation: { en: "Smoke will envelop humanity", ur: "Smoke will envelop humanity" }, verseRef: "44:11" },
        { term: "هَٰذَا عَذَابٌ أَلِيمٌ", meaning: { en: "This is a painful punishment", ur: "This is a painful punishment" }, explanation: { en: "Nature of the smoke punishment", ur: "Nature of the smoke punishment" }, verseRef: "44:11" },
        { term: "رَّبَّنَا اكْشِفْ عَنَّا الْعَذَابَ إِنَّا مُؤْمِنُونَ", meaning: { en: "Our Lord, remove from us the torment; indeed, we are believers", ur: "Our Lord, remove from us the torment; indeed, we are believers" }, explanation: { en: "People's desperate plea during the smoke", ur: "People's desperate plea during the smoke" }, verseRef: "44:12" },
        { term: "أَنَّىٰ لَهُمُ الذِّكْرَىٰ", meaning: { en: "How will they be reminded?", ur: "How will they be reminded?" }, explanation: { en: "Rhetorical - too late for remembrance", ur: "Rhetorical - too late for remembrance" }, verseRef: "44:13" },
        { term: "وَقَدْ جَاءَهُمْ رَسُولٌ مُّبِينٌ", meaning: { en: "When a clear messenger had already come to them", ur: "When a clear messenger had already come to them" }, explanation: { en: "They already received clear guidance", ur: "They already received clear guidance" }, verseRef: "44:13" },
        { term: "ثُمَّ تَوَلَّوْا عَنْهُ وَقَالُوا مُعَلَّمٌ مَّجْنُونٌ", meaning: { en: "Then they turned away and said: Taught [by others], a madman", ur: "Then they turned away and said: Taught [by others], a madman" }, explanation: { en: "Their rejection and insults", ur: "Their rejection and insults" }, verseRef: "44:14" },
        { term: "إِنَّا كَاشِفُو الْعَذَابِ قَلِيلًا", meaning: { en: "Indeed, We will remove the punishment a little", ur: "Indeed, We will remove the punishment a little" }, explanation: { en: "Temporary respite granted", ur: "Temporary respite granted" }, verseRef: "44:15" },
        { term: "إِنَّكُمْ عَائِدُونَ", meaning: { en: "Indeed, you will return [to disbelief]", ur: "Indeed, you will return [to disbelief]" }, explanation: { en: "Prophecy of their relapse", ur: "Prophecy of their relapse" }, verseRef: "44:15" }
      ]
    },

    greatSeizure: {
      name: "The Great Seizure (Al-Batshah Al-Kubra)",
      nameArabic: "البطشة الكبرى",
      color: "#EF4444",
      concepts: [
        { term: "يَوْمَ نَبْطِشُ الْبَطْشَةَ الْكُبْرَىٰ", meaning: { en: "The Day We will strike with the greatest assault", ur: "The Day We will strike with the greatest assault" }, explanation: { en: "Reference to Badr or Day of Judgment", ur: "Reference to Badr or Day of Judgment" }, verseRef: "44:16" },
        { term: "إِنَّا مُنتَقِمُونَ", meaning: { en: "Indeed, We will take retribution", ur: "Indeed, We will take retribution" }, explanation: { en: "Divine vengeance upon deniers", ur: "Divine vengeance upon deniers" }, verseRef: "44:16" }
      ]
    },

    pharaohStory: {
      name: "Pharaoh and the Children of Israel",
      nameArabic: "فرعون وبنو إسرائيل",
      color: "#F59E0B",
      concepts: [
        { term: "وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ فِرْعَوْنَ", meaning: { en: "And We had tried before them the people of Pharaoh", ur: "And We had tried before them the people of Pharaoh" }, explanation: { en: "Historical example - Pharaoh's people tested", ur: "Historical example - Pharaoh's people tested" }, verseRef: "44:17" },
        { term: "وَجَاءَهُمْ رَسُولٌ كَرِيمٌ", meaning: { en: "And there came to them a noble messenger", ur: "And there came to them a noble messenger" }, explanation: { en: "Prophet Musa sent to them", ur: "Prophet Musa sent to them" }, verseRef: "44:17" },
        { term: "أَنْ أَدُّوا إِلَيَّ عِبَادَ اللَّهِ", meaning: { en: "Send with me the servants of Allah", ur: "Send with me the servants of Allah" }, explanation: { en: "Musa's demand to free Israelites", ur: "Musa's demand to free Israelites" }, verseRef: "44:18" },
        { term: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: { en: "Indeed, I am to you a trustworthy messenger", ur: "Indeed, I am to you a trustworthy messenger" }, explanation: { en: "Musa's credentials", ur: "Musa's credentials" }, verseRef: "44:18" },
        { term: "وَأَن لَّا تَعْلُوا عَلَى اللَّهِ", meaning: { en: "And do not be haughty with Allah", ur: "And do not be haughty with Allah" }, explanation: { en: "Warning against arrogance before Allah", ur: "Warning against arrogance before Allah" }, verseRef: "44:19" },
        { term: "إِنِّي آتِيكُم بِسُلْطَانٍ مُّبِينٍ", meaning: { en: "Indeed, I come to you with clear authority", ur: "Indeed, I come to you with clear authority" }, explanation: { en: "Musa's miracles as proof", ur: "Musa's miracles as proof" }, verseRef: "44:19" },
        { term: "وَإِنِّي عُذْتُ بِرَبِّي وَرَبِّكُمْ أَن تَرْجُمُونِ", meaning: { en: "And indeed, I have sought refuge in my Lord and your Lord, lest you stone me", ur: "And indeed, I have sought refuge in my Lord and your Lord, lest you stone me" }, explanation: { en: "Musa seeking divine protection", ur: "Musa seeking divine protection" }, verseRef: "44:20" },
        { term: "وَإِن لَّمْ تُؤْمِنُوا لِي فَاعْتَزِلُونِ", meaning: { en: "But if you do not believe me, then leave me alone", ur: "But if you do not believe me, then leave me alone" }, explanation: { en: "Final ultimatum to Pharaoh", ur: "Final ultimatum to Pharaoh" }, verseRef: "44:21" },
        { term: "فَدَعَا رَبَّهُ أَنَّ هَٰؤُلَاءِ قَوْمٌ مُّجْرِمُونَ", meaning: { en: "So he called upon his Lord: These are a criminal people", ur: "So he called upon his Lord: These are a criminal people" }, explanation: { en: "Musa's prayer against Pharaoh's people", ur: "Musa's prayer against Pharaoh's people" }, verseRef: "44:22" }
      ]
    },

    exodusAndDestruction: {
      name: "The Exodus and Pharaoh's Destruction",
      nameArabic: "الخروج وهلاك فرعون",
      color: "#3B82F6",
      concepts: [
        { term: "فَأَسْرِ بِعِبَادِي لَيْلًا", meaning: { en: "Set out with My servants by night", ur: "Set out with My servants by night" }, explanation: { en: "Command to lead Israelites at night", ur: "Command to lead Israelites at night" }, verseRef: "44:23" },
        { term: "إِنَّكُم مُّتَّبَعُونَ", meaning: { en: "Indeed, you will be pursued", ur: "Indeed, you will be pursued" }, explanation: { en: "Warning that Pharaoh will follow", ur: "Warning that Pharaoh will follow" }, verseRef: "44:23" },
        { term: "وَاتْرُكِ الْبَحْرَ رَهْوًا", meaning: { en: "And leave the sea parted", ur: "And leave the sea parted" }, explanation: { en: "Miracle of the parted sea", ur: "Miracle of the parted sea" }, verseRef: "44:24" },
        { term: "إِنَّهُمْ جُندٌ مُّغْرَقُونَ", meaning: { en: "Indeed, they are an army to be drowned", ur: "Indeed, they are an army to be drowned" }, explanation: { en: "Prophecy of Pharaoh's army drowning", ur: "Prophecy of Pharaoh's army drowning" }, verseRef: "44:24" },
        { term: "كَمْ تَرَكُوا مِن جَنَّاتٍ وَعُيُونٍ", meaning: { en: "How much they left of gardens and springs", ur: "How much they left of gardens and springs" }, explanation: { en: "Material wealth abandoned", ur: "Material wealth abandoned" }, verseRef: "44:25" },
        { term: "وَزُرُوعٍ وَمَقَامٍ كَرِيمٍ", meaning: { en: "And crops and noble residences", ur: "And crops and noble residences" }, explanation: { en: "Their luxurious dwellings left behind", ur: "Their luxurious dwellings left behind" }, verseRef: "44:26" },
        { term: "وَنَعْمَةٍ كَانُوا فِيهَا فَاكِهِينَ", meaning: { en: "And comfort in which they were enjoying themselves", ur: "And comfort in which they were enjoying themselves" }, explanation: { en: "Pleasures they indulged in", ur: "Pleasures they indulged in" }, verseRef: "44:27" },
        { term: "كَذَٰلِكَ ۖ وَأَوْرَثْنَاهَا قَوْمًا آخَرِينَ", meaning: { en: "Thus. And We caused another people to inherit them", ur: "Thus. And We caused another people to inherit them" }, explanation: { en: "Transfer of wealth to Israelites", ur: "Transfer of wealth to Israelites" }, verseRef: "44:28" },
        { term: "فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ", meaning: { en: "And the heaven and earth wept not for them", ur: "And the heaven and earth wept not for them" }, explanation: { en: "No cosmic mourning for the wicked", ur: "No cosmic mourning for the wicked" }, verseRef: "44:29" },
        { term: "وَمَا كَانُوا مُنظَرِينَ", meaning: { en: "Nor were they given respite", ur: "Nor were they given respite" }, explanation: { en: "No delay in their punishment", ur: "No delay in their punishment" }, verseRef: "44:29" }
      ]
    },

    israelitesSaved: {
      name: "Children of Israel Saved",
      nameArabic: "نجاة بني إسرائيل",
      color: "#10B981",
      concepts: [
        { term: "وَلَقَدْ نَجَّيْنَا بَنِي إِسْرَائِيلَ مِنَ الْعَذَابِ الْمُهِينِ", meaning: { en: "And We certainly saved the Children of Israel from the humiliating torment", ur: "And We certainly saved the Children of Israel from the humiliating torment" }, explanation: { en: "Divine rescue from oppression", ur: "Divine rescue from oppression" }, verseRef: "44:30" },
        { term: "مِن فِرْعَوْنَ ۚ إِنَّهُ كَانَ عَالِيًا مِّنَ الْمُسْرِفِينَ", meaning: { en: "From Pharaoh. Indeed, he was a haughty one among the transgressors", ur: "From Pharaoh. Indeed, he was a haughty one among the transgressors" }, explanation: { en: "Pharaoh's arrogance highlighted", ur: "Pharaoh's arrogance highlighted" }, verseRef: "44:31" },
        { term: "وَلَقَدِ اخْتَرْنَاهُمْ عَلَىٰ عِلْمٍ عَلَى الْعَالَمِينَ", meaning: { en: "And We chose them, with knowledge, over [all] the worlds", ur: "And We chose them, with knowledge, over [all] the worlds" }, explanation: { en: "Israelites chosen in their time", ur: "Israelites chosen in their time" }, verseRef: "44:32" },
        { term: "وَآتَيْنَاهُم مِّنَ الْآيَاتِ مَا فِيهِ بَلَاءٌ مُّبِينٌ", meaning: { en: "And We gave them signs in which was a clear trial", ur: "And We gave them signs in which was a clear trial" }, explanation: { en: "Miracles that tested their faith", ur: "Miracles that tested their faith" }, verseRef: "44:33" }
      ]
    },

    denialOfResurrection: {
      name: "Denial of Resurrection",
      nameArabic: "إنكار البعث",
      color: "#6366F1",
      concepts: [
        { term: "إِنَّ هَٰؤُلَاءِ لَيَقُولُونَ", meaning: { en: "Indeed, these [disbelievers] say", ur: "Indeed, these [disbelievers] say" }, explanation: { en: "Introducing Quraysh's denial", ur: "Introducing Quraysh's denial" }, verseRef: "44:34" },
        { term: "إِنْ هِيَ إِلَّا مَوْتَتُنَا الْأُولَىٰ", meaning: { en: "There is not but our first death", ur: "There is not but our first death" }, explanation: { en: "Denial of life after death", ur: "Denial of life after death" }, verseRef: "44:35" },
        { term: "وَمَا نَحْنُ بِمُنشَرِينَ", meaning: { en: "And we will not be resurrected", ur: "And we will not be resurrected" }, explanation: { en: "Explicit denial of resurrection", ur: "Explicit denial of resurrection" }, verseRef: "44:35" },
        { term: "فَأْتُوا بِآبَائِنَا إِن كُنتُمْ صَادِقِينَ", meaning: { en: "Then bring [back] our forefathers, if you are truthful", ur: "Then bring [back] our forefathers, if you are truthful" }, explanation: { en: "Their mocking challenge", ur: "Their mocking challenge" }, verseRef: "44:36" },
        { term: "أَهُمْ خَيْرٌ أَمْ قَوْمُ تُبَّعٍ", meaning: { en: "Are they better or the people of Tubba'?", ur: "Are they better or the people of Tubba'?" }, explanation: { en: "Comparison to destroyed Himyarite kingdom", ur: "Comparison to destroyed Himyarite kingdom" }, verseRef: "44:37" },
        { term: "وَالَّذِينَ مِن قَبْلِهِمْ ۚ أَهْلَكْنَاهُمْ", meaning: { en: "And those before them? We destroyed them", ur: "And those before them? We destroyed them" }, explanation: { en: "Pattern of destruction", ur: "Pattern of destruction" }, verseRef: "44:37" },
        { term: "إِنَّهُمْ كَانُوا مُجْرِمِينَ", meaning: { en: "Indeed, they were criminals", ur: "Indeed, they were criminals" }, explanation: { en: "Reason for their destruction", ur: "Reason for their destruction" }, verseRef: "44:37" }
      ]
    },

    purposefulCreation: {
      name: "Purposeful Creation",
      nameArabic: "الخلق بالحق",
      color: "#14B8A6",
      concepts: [
        { term: "وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ", meaning: { en: "And We did not create the heavens and earth and what is between them in play", ur: "And We did not create the heavens and earth and what is between them in play" }, explanation: { en: "Creation has serious purpose", ur: "Creation has serious purpose" }, verseRef: "44:38" },
        { term: "مَا خَلَقْنَاهُمَا إِلَّا بِالْحَقِّ", meaning: { en: "We did not create them except in truth", ur: "We did not create them except in truth" }, explanation: { en: "Creation founded on truth and justice", ur: "Creation founded on truth and justice" }, verseRef: "44:39" },
        { term: "وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ", meaning: { en: "But most of them do not know", ur: "But most of them do not know" }, explanation: { en: "Most people ignorant of this truth", ur: "Most people ignorant of this truth" }, verseRef: "44:39" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم الفصل",
      color: "#EC4899",
      concepts: [
        { term: "إِنَّ يَوْمَ الْفَصْلِ مِيقَاتُهُمْ أَجْمَعِينَ", meaning: { en: "Indeed, the Day of Judgment is their appointment - all of them", ur: "Indeed, the Day of Judgment is their appointment - all of them" }, explanation: { en: "Universal gathering for judgment", ur: "Universal gathering for judgment" }, verseRef: "44:40" },
        { term: "يَوْمَ لَا يُغْنِي مَوْلًى عَن مَّوْلًى شَيْئًا", meaning: { en: "The Day when no relation will avail a relative at all", ur: "The Day when no relation will avail a relative at all" }, explanation: { en: "No intercession without permission", ur: "No intercession without permission" }, verseRef: "44:41" },
        { term: "وَلَا هُمْ يُنصَرُونَ", meaning: { en: "Nor will they be helped", ur: "Nor will they be helped" }, explanation: { en: "No external help available", ur: "No external help available" }, verseRef: "44:41" },
        { term: "إِلَّا مَن رَّحِمَ اللَّهُ", meaning: { en: "Except those on whom Allah has mercy", ur: "Except those on whom Allah has mercy" }, explanation: { en: "Only Allah's mercy saves", ur: "Only Allah's mercy saves" }, verseRef: "44:42" },
        { term: "إِنَّهُ هُوَ الْعَزِيزُ الرَّحِيمُ", meaning: { en: "Indeed, He is the Exalted in Might, the Merciful", ur: "Indeed, He is the Exalted in Might, the Merciful" }, explanation: { en: "Power combined with mercy", ur: "Power combined with mercy" }, verseRef: "44:42" }
      ]
    },

    treeOfZaqqum: {
      name: "The Tree of Zaqqum",
      nameArabic: "شجرة الزقوم",
      color: "#7C3AED",
      concepts: [
        { term: "إِنَّ شَجَرَتَ الزَّقُّومِ", meaning: { en: "Indeed, the tree of Zaqqum", ur: "Indeed, the tree of Zaqqum" }, explanation: { en: "Tree in Hell described", ur: "Tree in Hell described" }, verseRef: "44:43" },
        { term: "طَعَامُ الْأَثِيمِ", meaning: { en: "Is food for the sinful", ur: "Is food for the sinful" }, explanation: { en: "Forced sustenance of sinners", ur: "Forced sustenance of sinners" }, verseRef: "44:44" },
        { term: "كَالْمُهْلِ يَغْلِي فِي الْبُطُونِ", meaning: { en: "Like murky oil, boiling in the bellies", ur: "Like murky oil, boiling in the bellies" }, explanation: { en: "Tormenting effect in stomachs", ur: "Tormenting effect in stomachs" }, verseRef: "44:45" },
        { term: "كَغَلْيِ الْحَمِيمِ", meaning: { en: "Like the boiling of scalding water", ur: "Like the boiling of scalding water" }, explanation: { en: "Intensity of the torment", ur: "Intensity of the torment" }, verseRef: "44:46" },
        { term: "خُذُوهُ فَاعْتِلُوهُ إِلَىٰ سَوَاءِ الْجَحِيمِ", meaning: { en: "Seize him and drag him into the midst of the Hellfire", ur: "Seize him and drag him into the midst of the Hellfire" }, explanation: { en: "Command to angels of punishment", ur: "Command to angels of punishment" }, verseRef: "44:47" },
        { term: "ثُمَّ صُبُّوا فَوْقَ رَأْسِهِ مِنْ عَذَابِ الْحَمِيمِ", meaning: { en: "Then pour over his head the torment of scalding water", ur: "Then pour over his head the torment of scalding water" }, explanation: { en: "Boiling water poured on sinners", ur: "Boiling water poured on sinners" }, verseRef: "44:48" },
        { term: "ذُقْ إِنَّكَ أَنتَ الْعَزِيزُ الْكَرِيمُ", meaning: { en: "Taste! Indeed, you are the honored, the noble", ur: "Taste! Indeed, you are the honored, the noble" }, explanation: { en: "Ironic mockery of their worldly pride", ur: "Ironic mockery of their worldly pride" }, verseRef: "44:49" },
        { term: "إِنَّ هَٰذَا مَا كُنتُم بِهِ تَمْتَرُونَ", meaning: { en: "Indeed, this is what you used to dispute", ur: "Indeed, this is what you used to dispute" }, explanation: { en: "Confirmation of what they denied", ur: "Confirmation of what they denied" }, verseRef: "44:50" }
      ]
    },

    paradiseRewards: {
      name: "Paradise and Its Rewards",
      nameArabic: "الجنة ونعيمها",
      color: "#22C55E",
      concepts: [
        { term: "إِنَّ الْمُتَّقِينَ فِي مَقَامٍ أَمِينٍ", meaning: { en: "Indeed, the righteous will be in a secure place", ur: "Indeed, the righteous will be in a secure place" }, explanation: { en: "Paradise as place of security", ur: "Paradise as place of security" }, verseRef: "44:51" },
        { term: "فِي جَنَّاتٍ وَعُيُونٍ", meaning: { en: "In gardens and springs", ur: "In gardens and springs" }, explanation: { en: "Gardens with flowing springs", ur: "Gardens with flowing springs" }, verseRef: "44:52" },
        { term: "يَلْبَسُونَ مِن سُندُسٍ وَإِسْتَبْرَقٍ", meaning: { en: "Wearing [garments of] fine silk and brocade", ur: "Wearing [garments of] fine silk and brocade" }, explanation: { en: "Luxurious clothing in Paradise", ur: "Luxurious clothing in Paradise" }, verseRef: "44:53" },
        { term: "مُّتَقَابِلِينَ", meaning: { en: "Facing one another", ur: "Facing one another" }, explanation: { en: "Companions enjoying each other's company", ur: "Companions enjoying each other's company" }, verseRef: "44:53" },
        { term: "كَذَٰلِكَ وَزَوَّجْنَاهُم بِحُورٍ عِينٍ", meaning: { en: "Thus. And We will marry them to fair women with large eyes", ur: "Thus. And We will marry them to fair women with large eyes" }, explanation: { en: "Pure companions in Paradise (Hur al-'In)", ur: "Pure companions in Paradise (Hur al-'In)" }, verseRef: "44:54" },
        { term: "يَدْعُونَ فِيهَا بِكُلِّ فَاكِهَةٍ آمِنِينَ", meaning: { en: "They will call therein for every [kind of] fruit, safe and secure", ur: "They will call therein for every [kind of] fruit, safe and secure" }, explanation: { en: "All fruits available without fear", ur: "All fruits available without fear" }, verseRef: "44:55" },
        { term: "لَا يَذُوقُونَ فِيهَا الْمَوْتَ إِلَّا الْمَوْتَةَ الْأُولَىٰ", meaning: { en: "They will not taste death therein except the first death", ur: "They will not taste death therein except the first death" }, explanation: { en: "No death in Paradise - eternal life", ur: "No death in Paradise - eternal life" }, verseRef: "44:56" },
        { term: "وَوَقَاهُمْ عَذَابَ الْجَحِيمِ", meaning: { en: "And He will have protected them from the punishment of Hellfire", ur: "And He will have protected them from the punishment of Hellfire" }, explanation: { en: "Saved from Hell", ur: "Saved from Hell" }, verseRef: "44:56" },
        { term: "فَضْلًا مِّن رَّبِّكَ", meaning: { en: "As bounty from your Lord", ur: "As bounty from your Lord" }, explanation: { en: "All rewards are Allah's favor", ur: "All rewards are Allah's favor" }, verseRef: "44:57" },
        { term: "ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ", meaning: { en: "That is the great attainment", ur: "That is the great attainment" }, explanation: { en: "Ultimate success", ur: "Ultimate success" }, verseRef: "44:57" }
      ]
    },

    quranAndProphet: {
      name: "Quran Made Easy and Prophetic Mission",
      nameArabic: "تيسير القرآن ومهمة النبي",
      color: "#F97316",
      concepts: [
        { term: "فَإِنَّمَا يَسَّرْنَاهُ بِلِسَانِكَ", meaning: { en: "Indeed, We have made it easy in your tongue", ur: "Indeed, We have made it easy in your tongue" }, explanation: { en: "Quran revealed in Arabic for accessibility", ur: "Quran revealed in Arabic for accessibility" }, verseRef: "44:58" },
        { term: "لَعَلَّهُمْ يَتَذَكَّرُونَ", meaning: { en: "That they might be reminded", ur: "That they might be reminded" }, explanation: { en: "Purpose - remembrance and reflection", ur: "Purpose - remembrance and reflection" }, verseRef: "44:58" },
        { term: "فَارْتَقِبْ إِنَّهُم مُّرْتَقِبُونَ", meaning: { en: "So watch; indeed, they are watching", ur: "So watch; indeed, they are watching" }, explanation: { en: "Mutual waiting - truth will prevail", ur: "Mutual waiting - truth will prevail" }, verseRef: "44:59" }
      ]
    }
  },

  relationships: [
    { from: "ليلة مباركة", to: "يفرق كل أمر حكيم", type: "occasion", description: { en: "On the blessed night, all affairs are decreed", ur: "مبارک رات میں تمام معاملات کا فیصلہ ہوتا ہے" } },
    { from: "الدخان", to: "عذاب أليم", type: "nature", description: { en: "The smoke is a painful punishment", ur: "دھواں ایک دردناک عذاب ہے" } },
    { from: "رسول كريم", to: "فرعون", type: "confrontation", description: { en: "Musa confronted Pharaoh with truth", ur: "موسیٰ نے فرعون کو حق سے ٹکرایا" } },
    { from: "اترك البحر رهوا", to: "جند مغرقون", type: "result", description: { en: "Parted sea led to drowning of Pharaoh's army", ur: "سمندر کے پھٹنے سے فرعون کی فوج ڈوب گئی" } },
    { from: "شجرة الزقوم", to: "طعام الأثيم", type: "purpose", description: { en: "Zaqqum is the food of sinners", ur: "زقوم گنہگاروں کا کھانا ہے" } },
    { from: "المتقين", to: "مقام أمين", type: "reward", description: { en: "The righteous earn secure Paradise", ur: "متقین محفوظ جنت حاصل کرتے ہیں" } },
    { from: "فوز عظيم", to: "فضل من ربك", type: "source", description: { en: "Great success comes from Allah's bounty", ur: "عظیم کامیابی اللہ کے فضل سے ہے" } },
    { from: "إنكار البعث", to: "يوم الفصل", type: "reality", description: { en: "What they deny will certainly occur", ur: "جسے وہ جھٹلاتے ہیں وہ ضرور ہو کر رہے گا" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Blessed Night", verses: "44:1-9", description: { en: "Ha-Mim, oath by Quran, Laylat al-Qadr, Tawhid", ur: "Ha-Mim, oath by Quran, Laylat al-Qadr, Tawhid" } },
      { stage: 2, theme: "The Smoke Sign", verses: "44:10-16", description: { en: "Warning of smoke, people's plea, temporary respite, great seizure", ur: "Warning of smoke, people's plea, temporary respite, great seizure" } },
      { stage: 3, theme: "Pharaoh's Story", verses: "44:17-33", description: { en: "Musa sent, demand to free Israelites, exodus, drowning, inheritance", ur: "Musa sent, demand to free Israelites, exodus, drowning, inheritance" } },
      { stage: 4, theme: "Denial of Resurrection", verses: "44:34-39", description: { en: "Quraysh deny afterlife, Tubba' mentioned, purposeful creation", ur: "Quraysh deny afterlife, Tubba' mentioned, purposeful creation" } },
      { stage: 5, theme: "Day of Judgment", verses: "44:40-42", description: { en: "Day of Separation, no intercession except by Allah's mercy", ur: "Day of Separation, no intercession except by Allah's mercy" } },
      { stage: 6, theme: "Punishment of Sinners", verses: "44:43-50", description: { en: "Tree of Zaqqum, boiling drink, mockery of their pride", ur: "Tree of Zaqqum, boiling drink, mockery of their pride" } },
      { stage: 7, theme: "Rewards of Paradise", verses: "44:51-57", description: { en: "Gardens, springs, silk, companions, fruits, eternal life", ur: "Gardens, springs, silk, companions, fruits, eternal life" } },
      { stage: 8, theme: "Closing Exhortation", verses: "44:58-59", description: { en: "Quran made easy, command to watch", ur: "Quran made easy, command to watch" } }
    ]
  },

  keyTerms: {
    dukhan: {
      arabic: "الدخان",
      transliteration: "ad-dukhān",
      meaning: { en: "The Smoke", ur: "The Smoke" },
      significance: { en: "A major eschatological sign, either referring to a severe famine during Prophet's time or a future sign before Day of Judgment", ur: "A major eschatological sign, either referring to a severe famine during Prophet's time or a future sign before Day of Judgment" },
      verseRef: "44:10"
    },
    laylatMubarakah: {
      arabic: "ليلة مباركة",
      transliteration: "laylat mubārakah",
      meaning: { en: "A blessed night", ur: "A blessed night" },
      significance: { en: "Identified as Laylat al-Qadr when Quran was revealed and decrees are determined", ur: "Identified as Laylat al-Qadr when Quran was revealed and decrees are determined" },
      verseRef: "44:3"
    },
    zaqqum: {
      arabic: "الزقوم",
      transliteration: "az-zaqqūm",
      meaning: { en: "Tree of Zaqqum", ur: "Tree of Zaqqum" },
      significance: { en: "A tree in Hell with bitter fruit that torments its eaters", ur: "A tree in Hell with bitter fruit that torments its eaters" },
      verseRef: "44:43"
    },
    batshah: {
      arabic: "البطشة الكبرى",
      transliteration: "al-baṭshah al-kubrā",
      meaning: { en: "The Greatest Assault/Seizure", ur: "The Greatest Assault/Seizure" },
      significance: { en: "Either the Battle of Badr or the final Day of Judgment", ur: "Either the Battle of Badr or the final Day of Judgment" },
      verseRef: "44:16"
    },
    yawmAlFasl: {
      arabic: "يوم الفصل",
      transliteration: "yawm al-faṣl",
      meaning: { en: "Day of Separation/Decision", ur: "Day of Separation/Decision" },
      significance: { en: "Day when truth is separated from falsehood, believers from disbelievers", ur: "Day when truth is separated from falsehood, believers from disbelievers" },
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
      { feature: "حم", pattern: "Huruf Muqatta'at", effect: { en: "Part of the Ha-Mim series, creating unity among surahs 40-46", ur: "Part of the Ha-Mim series, creating unity among surahs 40-46" } },
      { feature: "يُفْرَقُ", pattern: "Passive voice", effect: { en: "Emphasizes divine action without specifying agent", ur: "Emphasizes divine action without specifying agent" } },
      { feature: "ذُقْ", pattern: "Imperative singular", effect: { en: "Personalized address heightening impact of judgment", ur: "Personalized address heightening impact of judgment" } },
      { feature: "أَنَّىٰ", pattern: "Rhetorical question", effect: { en: "Emphasizes impossibility of late remembrance", ur: "Emphasizes impossibility of late remembrance" } },
      { feature: "كَالْمُهْلِ", pattern: "Simile", effect: { en: "Vivid imagery of Zaqqum's torment", ur: "Vivid imagery of Zaqqum's torment" } }
    ],
    hamimConnection: { en: "Surah 44 is part of the seven 'Ha-Mim' surahs (40-46), all beginning with these letters and sharing themes of revelation, warning, and the fate of nations.", ur: "Surah 44 is part of the seven 'Ha-Mim' surahs (40-46), all beginning with these letters and sharing themes of revelation, warning, and the fate of nations." }
  },

  historicalContext: {
    note: { en: "Ad-Dukhan was revealed in Makkah during a period of intense opposition to the Prophet. The Quraysh denied resurrection, mocked the message, and persecuted believers. The surah warns them through the story of Pharaoh's destruction and prophecies the 'smoke' sign. Some scholars interpret the smoke as the severe famine that afflicted Makkah, during which people saw smoke-like mirages due to extreme hunger, and the 'great seizure' as the Battle of Badr. Others view both as eschatological signs yet to occur.", ur: "Ad-Dukhan was revealed in Makkah during a period of intense opposition to the Prophet. The Quraysh denied resurrection, mocked the message, and persecuted believers. The surah warns them through the story of Pharaoh's destruction and prophecies the 'smoke' sign. Some scholars interpret the smoke as the severe famine that afflicted Makkah, during which people saw smoke-like mirages due to extreme hunger, and the 'great seizure' as the Battle of Badr. Others view both as eschatological signs yet to occur." }
  },

  uniqueInsight: {
    title: { en: "The Night of Decree and the Day of Separation", ur: "The Night of Decree and the Day of Separation" },
    insight: { en: "Ad-Dukhan uniquely connects two pivotal moments: Laylat al-Qadr (when Quran was revealed and decrees are determined) and Yawm al-Fasl (when all decrees manifest). This creates a theological bridge between divine knowledge and divine judgment. What Allah decrees on the blessed night will be fully realized on the Day of Separation. The surah moves from the mercy of revelation to the reality of recompense, with Pharaoh's story serving as a historical proof that those who reject guidance face certain destruction. The contrast between the tree of Zaqqum and the gardens of Paradise demonstrates the two ultimate destinations awaiting humanity.", ur: "Ad-Dukhan uniquely connects two pivotal moments: Laylat al-Qadr (when Quran was revealed and decrees are determined) and Yawm al-Fasl (when all decrees manifest). This creates a theological bridge between divine knowledge and divine judgment. What Allah decrees on the blessed night will be fully realized on the Day of Separation. The surah moves from the mercy of revelation to the reality of recompense, with Pharaoh's story serving as a historical proof that those who reject guidance face certain destruction. The contrast between the tree of Zaqqum and the gardens of Paradise demonstrates the two ultimate destinations awaiting humanity." }
  }
};

export default ONTOLOGY;
