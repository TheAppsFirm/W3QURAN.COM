/**
 * Surah Ya-Sin (36) - Ontology of Quranic Concepts
 * Ya-Sin - 83 Ayahs, Makkan
 * Theme: Heart of the Quran, prophethood, resurrection, creation signs, divine power
 *
 * Special Status: Known as "The Heart of the Quran" (Qalb al-Quran)
 * Virtues:
 * - "Everything has a heart, and the heart of the Quran is Ya-Sin" (Tirmidhi)
 * - Recommended to recite for the dying and deceased
 * - "Whoever recites Ya-Sin seeking Allah's pleasure, his past sins will be forgiven"
 * - Contains powerful proofs of resurrection and divine power
 */

export const ONTOLOGY = {
  surahId: 36,
  surahName: "Ya-Sin",
  surahNameArabic: "يس",
  revelationType: "Makki",
  totalAyahs: 83,

  categories: {
    // OPENING OATH AND PROPHETHOOD (1-12)
    openingOath: {
      name: "Opening Oath and Prophethood",
      nameArabic: "القسم والرسالة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "يس", meaning: "Ya-Sin", explanation: "Huruf Muqatta'at - mysterious letters opening the surah; some say it means 'O human being'", verseRef: "36:1" },
        { term: "وَالْقُرْآنِ الْحَكِيمِ", meaning: "By the Wise Quran", explanation: "Oath by the Quran - full of wisdom and judgment", verseRef: "36:2" },
        { term: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ", meaning: "Indeed you are among the messengers", explanation: "Confirmation of Prophet Muhammad's messengership", verseRef: "36:3" },
        { term: "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: "On a straight path", explanation: "The path of guidance and truth", verseRef: "36:4" },
        { term: "تَنزِيلَ الْعَزِيزِ الرَّحِيمِ", meaning: "Revelation of the Mighty, the Merciful", explanation: "Quran sent down by Allah - both powerful and merciful", verseRef: "36:5" },
        { term: "لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ", meaning: "To warn a people whose forefathers were not warned", explanation: "Arabs had no prophet since Ismail - now they have guidance", verseRef: "36:6" },
        { term: "فَهُمْ غَافِلُونَ", meaning: "So they are heedless", explanation: "State of the pre-Islamic Arabs - unaware of divine truth", verseRef: "36:6" }
      ]
    },

    sealedHearts: {
      name: "The Sealed Hearts",
      nameArabic: "القلوب المختومة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ", meaning: "The word has proved true against most of them", explanation: "Divine decree upon persistent disbelievers", verseRef: "36:7" },
        { term: "أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ", meaning: "Shackles up to their chins", explanation: "Imagery of those imprisoned by their own disbelief", verseRef: "36:8" },
        { term: "فَهُم مُّقْمَحُونَ", meaning: "So their heads are raised up", explanation: "Forced upward - cannot look at guidance", verseRef: "36:8" },
        { term: "سَدًّا مِّن بَيْنِ أَيْدِيهِمْ وَسَدًّا مِنْ خَلْفِهِمْ", meaning: "A barrier before them and a barrier behind them", explanation: "Barriers preventing them from seeing truth", verseRef: "36:9" },
        { term: "فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ", meaning: "So We have covered them, so they do not see", explanation: "Allah's veiling of those who persistently reject", verseRef: "36:9" },
        { term: "وَسَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ", meaning: "Equal to them whether you warn them or not", explanation: "Warning does not benefit those whose hearts are sealed", verseRef: "36:10" }
      ]
    },

    whoCanBeWarned: {
      name: "Those Who Benefit from Warning",
      nameArabic: "من ينتفع بالإنذار",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ", meaning: "You can only warn one who follows the reminder", explanation: "Warning benefits those with open hearts", verseRef: "36:11" },
        { term: "وَخَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ", meaning: "And fears the Most Merciful in the unseen", explanation: "Fear of Allah even when unseen - true faith", verseRef: "36:11" },
        { term: "فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ", meaning: "So give him good tidings of forgiveness and noble reward", explanation: "Promise for believers who heed warning", verseRef: "36:11" },
        { term: "إِنَّا نَحْنُ نُحْيِي الْمَوْتَىٰ", meaning: "Indeed, it is We who bring the dead to life", explanation: "Allah's power over life and death", verseRef: "36:12" },
        { term: "وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ", meaning: "We record what they put forth and their traces", explanation: "Every deed and its effects are recorded", verseRef: "36:12" },
        { term: "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ", meaning: "And everything We have enumerated in a clear register", explanation: "The Preserved Tablet - Lawh al-Mahfuz", verseRef: "36:12" }
      ]
    },

    // STORY OF THE MESSENGERS TO THE TOWN (13-32)
    messengersToTown: {
      name: "The Messengers to the Town",
      nameArabic: "الرسل إلى القرية",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "وَاضْرِبْ لَهُم مَّثَلًا أَصْحَابَ الْقَرْيَةِ", meaning: "Present to them an example of the companions of the city", explanation: "Story of Antioch (traditionally) as a parable", verseRef: "36:13" },
        { term: "إِذْ جَاءَهَا الْمُرْسَلُونَ", meaning: "When the messengers came to it", explanation: "Messengers sent to guide the town", verseRef: "36:13" },
        { term: "إِذْ أَرْسَلْنَا إِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوهُمَا", meaning: "When We sent to them two, and they denied them", explanation: "First two messengers were rejected", verseRef: "36:14" },
        { term: "فَعَزَّزْنَا بِثَالِثٍ", meaning: "So We strengthened them with a third", explanation: "Allah sent reinforcement", verseRef: "36:14" },
        { term: "إِنَّا إِلَيْكُم مُّرْسَلُونَ", meaning: "Indeed, we are messengers to you", explanation: "Clear declaration of divine mission", verseRef: "36:14" }
      ]
    },

    townPeopleRejection: {
      name: "The Town People's Rejection",
      nameArabic: "رفض أهل القرية",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "مَا أَنتُمْ إِلَّا بَشَرٌ مِّثْلُنَا", meaning: "You are only human beings like us", explanation: "Common objection - prophets are just men", verseRef: "36:15" },
        { term: "وَمَا أَنزَلَ الرَّحْمَٰنُ مِن شَيْءٍ", meaning: "And the Most Merciful has not revealed anything", explanation: "Denial of divine revelation", verseRef: "36:15" },
        { term: "إِنْ أَنتُمْ إِلَّا تَكْذِبُونَ", meaning: "You are only lying", explanation: "Accusing messengers of falsehood", verseRef: "36:15" },
        { term: "رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ", meaning: "Our Lord knows that we are messengers to you", explanation: "Messengers appeal to Allah as witness", verseRef: "36:16" },
        { term: "وَمَا عَلَيْنَا إِلَّا الْبَلَاغُ الْمُبِينُ", meaning: "And upon us is only clear notification", explanation: "Messenger's duty is only to convey", verseRef: "36:17" },
        { term: "إِنَّا تَطَيَّرْنَا بِكُمْ", meaning: "Indeed, we consider you a bad omen", explanation: "Superstitious rejection of messengers", verseRef: "36:18" },
        { term: "لَئِن لَّمْ تَنتَهُوا لَنَرْجُمَنَّكُمْ", meaning: "If you do not desist, we will stone you", explanation: "Threat of violence against messengers", verseRef: "36:18" },
        { term: "طَائِرُكُم مَّعَكُمْ", meaning: "Your omen is with yourselves", explanation: "Their misfortune is their own doing", verseRef: "36:19" }
      ]
    },

    believerFromEdgeOfTown: {
      name: "The Believer from the Edge of Town",
      nameArabic: "المؤمن من أقصى المدينة",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ يَسْعَىٰ", meaning: "And there came from the farthest end of the city a man, running", explanation: "Habib an-Najjar - passionate believer rushing to help", verseRef: "36:20" },
        { term: "يَا قَوْمِ اتَّبِعُوا الْمُرْسَلِينَ", meaning: "O my people, follow the messengers", explanation: "His call to his people", verseRef: "36:20" },
        { term: "اتَّبِعُوا مَن لَّا يَسْأَلُكُمْ أَجْرًا", meaning: "Follow those who do not ask of you any payment", explanation: "Messengers seek no worldly gain", verseRef: "36:21" },
        { term: "وَهُم مُّهْتَدُونَ", meaning: "And they are guided", explanation: "Confirmation of messengers' guidance", verseRef: "36:21" },
        { term: "وَمَا لِيَ لَا أَعْبُدُ الَّذِي فَطَرَنِي", meaning: "And why should I not worship He who created me", explanation: "Logical argument for monotheism", verseRef: "36:22" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: "And to whom you will be returned", explanation: "Reminder of return to Allah", verseRef: "36:22" },
        { term: "أَأَتَّخِذُ مِن دُونِهِ آلِهَةً", meaning: "Should I take gods besides Him?", explanation: "Rejection of polytheism", verseRef: "36:23" },
        { term: "إِنِّي آمَنتُ بِرَبِّكُمْ فَاسْمَعُونِ", meaning: "Indeed, I have believed in your Lord, so listen to me", explanation: "His bold declaration of faith", verseRef: "36:25" }
      ]
    },

    martyrdomAndReward: {
      name: "Martyrdom and Heavenly Reward",
      nameArabic: "الشهادة والجزاء",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "قِيلَ ادْخُلِ الْجَنَّةَ", meaning: "It was said: Enter Paradise", explanation: "Immediate entry to Paradise after martyrdom", verseRef: "36:26" },
        { term: "قَالَ يَا لَيْتَ قَوْمِي يَعْلَمُونَ", meaning: "He said: I wish my people could know", explanation: "Concern for his people even in Paradise", verseRef: "36:26" },
        { term: "بِمَا غَفَرَ لِي رَبِّي", meaning: "For what my Lord has forgiven me", explanation: "Joy at divine forgiveness", verseRef: "36:27" },
        { term: "وَجَعَلَنِي مِنَ الْمُكْرَمِينَ", meaning: "And made me of the honored ones", explanation: "High rank among Allah's honored servants", verseRef: "36:27" }
      ]
    },

    destructionOfTown: {
      name: "Destruction of the Town",
      nameArabic: "هلاك القرية",
      color: "#EF4444",
      icon: "Zap",
      concepts: [
        { term: "وَمَا أَنزَلْنَا عَلَىٰ قَوْمِهِ مِن بَعْدِهِ مِن جُندٍ مِّنَ السَّمَاءِ", meaning: "We did not send down upon his people after him any soldiers from heaven", explanation: "No heavenly army needed", verseRef: "36:28" },
        { term: "وَمَا كُنَّا مُنزِلِينَ", meaning: "Nor would We have done so", explanation: "Allah's punishment is simple", verseRef: "36:28" },
        { term: "إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً", meaning: "It was only one shout", explanation: "Single blast destroyed them", verseRef: "36:29" },
        { term: "فَإِذَا هُمْ خَامِدُونَ", meaning: "And immediately they were extinguished", explanation: "Swift divine punishment", verseRef: "36:29" },
        { term: "يَا حَسْرَةً عَلَى الْعِبَادِ", meaning: "O regret over the servants", explanation: "Allah's sorrow at human rejection", verseRef: "36:30" },
        { term: "مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: "No messenger came to them except they ridiculed him", explanation: "Pattern of mockery throughout history", verseRef: "36:30" }
      ]
    },

    // SIGNS OF RESURRECTION (33-44)
    signsInEarth: {
      name: "Signs in the Earth",
      nameArabic: "الآيات في الأرض",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ", meaning: "And a sign for them is the dead earth", explanation: "Dead land revival as proof of resurrection", verseRef: "36:33" },
        { term: "أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا", meaning: "We have brought it to life and brought forth from it grain", explanation: "Life from death - divine power demonstrated", verseRef: "36:33" },
        { term: "فَمِنْهُ يَأْكُلُونَ", meaning: "So from it they eat", explanation: "Sustenance from revived earth", verseRef: "36:33" },
        { term: "وَجَعَلْنَا فِيهَا جَنَّاتٍ مِّن نَّخِيلٍ وَأَعْنَابٍ", meaning: "And We placed therein gardens of palms and grapevines", explanation: "Orchards as divine blessing", verseRef: "36:34" },
        { term: "وَفَجَّرْنَا فِيهَا مِنَ الْعُيُونِ", meaning: "And caused springs to gush forth therein", explanation: "Water springs as life source", verseRef: "36:34" },
        { term: "لِيَأْكُلُوا مِن ثَمَرِهِ", meaning: "That they may eat of His fruit", explanation: "Divine provision for humanity", verseRef: "36:35" },
        { term: "وَمَا عَمِلَتْهُ أَيْدِيهِمْ", meaning: "And their hands have not produced it", explanation: "Human effort did not create the fruit itself", verseRef: "36:35" },
        { term: "أَفَلَا يَشْكُرُونَ", meaning: "So will they not be grateful?", explanation: "Call to gratitude for divine provision", verseRef: "36:35" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation - Pairs",
      nameArabic: "الآيات في الخلق - الأزواج",
      color: "#06B6D4",
      icon: "Sparkles",
      concepts: [
        { term: "سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا", meaning: "Exalted is He who created all pairs", explanation: "Everything created in pairs - divine design", verseRef: "36:36" },
        { term: "مِمَّا تُنبِتُ الْأَرْضُ", meaning: "From what the earth grows", explanation: "Male and female in plants", verseRef: "36:36" },
        { term: "وَمِنْ أَنفُسِهِمْ", meaning: "And of themselves", explanation: "Human male and female", verseRef: "36:36" },
        { term: "وَمِمَّا لَا يَعْلَمُونَ", meaning: "And from that which they do not know", explanation: "Pairs beyond human knowledge - subatomic, spiritual", verseRef: "36:36" }
      ]
    },

    signsInNightAndDay: {
      name: "Signs in Night and Day",
      nameArabic: "آية الليل والنهار",
      color: "#06B6D4",
      icon: "Moon",
      concepts: [
        { term: "وَآيَةٌ لَّهُمُ اللَّيْلُ نَسْلَخُ مِنْهُ النَّهَارَ", meaning: "And a sign for them is the night - We remove from it daylight", explanation: "Night-day cycle as divine sign", verseRef: "36:37" },
        { term: "فَإِذَا هُم مُّظْلِمُونَ", meaning: "And then they are in darkness", explanation: "Transition to darkness", verseRef: "36:37" },
        { term: "وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَّهَا", meaning: "And the sun runs to a resting place for it", explanation: "Sun's ordained course through space", verseRef: "36:38" },
        { term: "ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ", meaning: "That is the determination of the Mighty, the Knowing", explanation: "Precise divine calculation", verseRef: "36:38" }
      ]
    },

    signsInMoon: {
      name: "Signs in the Moon",
      nameArabic: "آية القمر",
      color: "#06B6D4",
      icon: "Moon",
      concepts: [
        { term: "وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ", meaning: "And the moon - We have determined for it phases", explanation: "Lunar phases as divine system", verseRef: "36:39" },
        { term: "حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ", meaning: "Until it returns like the old date stalk", explanation: "Crescent moon resembles dried palm branch", verseRef: "36:39" },
        { term: "لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ", meaning: "The sun is not allowed to reach the moon", explanation: "Distinct orbits - cannot overtake", verseRef: "36:40" },
        { term: "وَلَا اللَّيْلُ سَابِقُ النَّهَارِ", meaning: "Nor does the night outstrip the day", explanation: "Perfect cosmic balance", verseRef: "36:40" },
        { term: "وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ", meaning: "Each in an orbit is swimming", explanation: "Celestial bodies in their orbits", verseRef: "36:40" }
      ]
    },

    signsInShips: {
      name: "Signs in Ships",
      nameArabic: "آية السفن",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "وَآيَةٌ لَّهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُونِ", meaning: "A sign for them is that We carried their descendants in the laden ship", explanation: "Noah's Ark - salvation through divine guidance", verseRef: "36:41" },
        { term: "وَخَلَقْنَا لَهُم مِّن مِّثْلِهِ مَا يَرْكَبُونَ", meaning: "And We created for them from the likes of it that which they ride", explanation: "All vessels derived from Ark's design", verseRef: "36:42" },
        { term: "وَإِن نَّشَأْ نُغْرِقْهُمْ", meaning: "And if We should will, We could drown them", explanation: "Human safety depends on Allah's will", verseRef: "36:43" },
        { term: "فَلَا صَرِيخَ لَهُمْ", meaning: "And there would be no cry for help", explanation: "No savior besides Allah", verseRef: "36:43" },
        { term: "وَلَا هُمْ يُنقَذُونَ", meaning: "Nor would they be rescued", explanation: "Only divine mercy saves", verseRef: "36:43" },
        { term: "إِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا إِلَىٰ حِينٍ", meaning: "Except as a mercy from Us and provision for a time", explanation: "Life is mercy - temporary provision", verseRef: "36:44" }
      ]
    },

    // WARNING TO DISBELIEVERS (45-54)
    warningIgnored: {
      name: "Warnings Ignored",
      nameArabic: "الإنذار المرفوض",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِذَا قِيلَ لَهُمُ اتَّقُوا مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ", meaning: "When it is said to them: Fear what is before you and behind you", explanation: "Warning about past and future consequences", verseRef: "36:45" },
        { term: "لَعَلَّكُمْ تُرْحَمُونَ", meaning: "That you may receive mercy", explanation: "Purpose of warning - to attain mercy", verseRef: "36:45" },
        { term: "وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ", meaning: "No sign comes to them from the signs of their Lord", explanation: "Signs continuously presented", verseRef: "36:46" },
        { term: "إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ", meaning: "Except that they turn away from it", explanation: "Persistent rejection of all signs", verseRef: "36:46" },
        { term: "أَنفِقُوا مِمَّا رَزَقَكُمُ اللَّهُ", meaning: "Spend from what Allah has provided you", explanation: "Command to spend in charity", verseRef: "36:47" },
        { term: "أَنُطْعِمُ مَن لَّوْ يَشَاءُ اللَّهُ أَطْعَمَهُ", meaning: "Should we feed those whom, if Allah willed, He would have fed?", explanation: "False argument against charity - misunderstanding divine will", verseRef: "36:47" }
      ]
    },

    mockingResurrection: {
      name: "Mockers of Resurrection",
      nameArabic: "المستهزئون بالبعث",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ", meaning: "And they say: When is this promise, if you are truthful?", explanation: "Mocking question about Day of Judgment", verseRef: "36:48" },
        { term: "مَا يَنظُرُونَ إِلَّا صَيْحَةً وَاحِدَةً", meaning: "They await only a single blast", explanation: "Sudden coming of the Hour", verseRef: "36:49" },
        { term: "تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ", meaning: "Which will seize them while they are disputing", explanation: "Caught unaware in daily arguments", verseRef: "36:49" },
        { term: "فَلَا يَسْتَطِيعُونَ تَوْصِيَةً", meaning: "They will not be able to make a will", explanation: "No time for final instructions", verseRef: "36:50" },
        { term: "وَلَا إِلَىٰ أَهْلِهِمْ يَرْجِعُونَ", meaning: "Nor to their families return", explanation: "Sudden separation from loved ones", verseRef: "36:50" }
      ]
    },

    // RESURRECTION SCENES (51-65)
    trumpetBlown: {
      name: "The Trumpet and Rising",
      nameArabic: "النفخ في الصور",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "وَنُفِخَ فِي الصُّورِ", meaning: "And the trumpet will be blown", explanation: "Signal for resurrection", verseRef: "36:51" },
        { term: "فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ", meaning: "And at once from the graves to their Lord they will hasten", explanation: "Rising from graves toward Allah", verseRef: "36:51" },
        { term: "قَالُوا يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا", meaning: "They will say: O woe to us! Who has raised us from our sleeping place?", explanation: "Disbelievers' shock at resurrection", verseRef: "36:52" },
        { term: "هَٰذَا مَا وَعَدَ الرَّحْمَٰنُ", meaning: "This is what the Most Merciful had promised", explanation: "Confirmation of divine promise", verseRef: "36:52" },
        { term: "وَصَدَقَ الْمُرْسَلُونَ", meaning: "And the messengers spoke truth", explanation: "Messengers vindicated", verseRef: "36:52" }
      ]
    },

    swiftJudgment: {
      name: "The Swift Judgment",
      nameArabic: "الحساب السريع",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً", meaning: "It will be only one blast", explanation: "Single sound for all to gather", verseRef: "36:53" },
        { term: "فَإِذَا هُمْ جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ", meaning: "And at once they are all brought present before Us", explanation: "Instantaneous gathering before Allah", verseRef: "36:53" },
        { term: "فَالْيَوْمَ لَا تُظْلَمُ نَفْسٌ شَيْئًا", meaning: "So today no soul will be wronged at all", explanation: "Perfect justice on Judgment Day", verseRef: "36:54" },
        { term: "وَلَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ", meaning: "And you will not be recompensed except for what you used to do", explanation: "Exact reward for deeds", verseRef: "36:54" }
      ]
    },

    paradiseDelights: {
      name: "Delights of Paradise",
      nameArabic: "نعيم الجنة",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "إِنَّ أَصْحَابَ الْجَنَّةِ الْيَوْمَ فِي شُغُلٍ فَاكِهُونَ", meaning: "Indeed the companions of Paradise today are in occupation, rejoicing", explanation: "Believers busy with delight in Paradise", verseRef: "36:55" },
        { term: "هُمْ وَأَزْوَاجُهُمْ فِي ظِلَالٍ عَلَى الْأَرَائِكِ مُتَّكِئُونَ", meaning: "They and their spouses - in shade, reclining on adorned couches", explanation: "Restful luxury with spouses", verseRef: "36:56" },
        { term: "لَهُمْ فِيهَا فَاكِهَةٌ", meaning: "For them therein is fruit", explanation: "Abundant fruits", verseRef: "36:57" },
        { term: "وَلَهُم مَّا يَدَّعُونَ", meaning: "And for them is whatever they request", explanation: "Every wish fulfilled", verseRef: "36:57" },
        { term: "سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ", meaning: "Peace - a word from a Merciful Lord", explanation: "Allah Himself greets them with Salam", verseRef: "36:58" }
      ]
    },

    separationOfSinners: {
      name: "Separation of the Sinners",
      nameArabic: "تمييز المجرمين",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "وَامْتَازُوا الْيَوْمَ أَيُّهَا الْمُجْرِمُونَ", meaning: "And be separate today, O criminals", explanation: "Command to separate sinners from believers", verseRef: "36:59" },
        { term: "أَلَمْ أَعْهَدْ إِلَيْكُمْ يَا بَنِي آدَمَ", meaning: "Did I not enjoin upon you, O children of Adam", explanation: "Allah reminds of the covenant", verseRef: "36:60" },
        { term: "أَن لَّا تَعْبُدُوا الشَّيْطَانَ", meaning: "That you not worship Satan", explanation: "Command to reject Satan", verseRef: "36:60" },
        { term: "إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ", meaning: "Indeed, he is to you a clear enemy", explanation: "Satan's enmity made clear", verseRef: "36:60" },
        { term: "وَأَنِ اعْبُدُونِي", meaning: "And that you worship Me", explanation: "Worship Allah alone", verseRef: "36:61" },
        { term: "هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ", meaning: "This is a straight path", explanation: "Monotheism is the straight path", verseRef: "36:61" },
        { term: "وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّا كَثِيرًا", meaning: "And he had led astray from you a great multitude", explanation: "Satan misled many generations", verseRef: "36:62" },
        { term: "أَفَلَمْ تَكُونُوا تَعْقِلُونَ", meaning: "Did you not use reason?", explanation: "Rebuke for not using intellect", verseRef: "36:62" }
      ]
    },

    hellfireDescription: {
      name: "Description of Hellfire",
      nameArabic: "وصف جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "هَٰذِهِ جَهَنَّمُ الَّتِي كُنتُمْ تُوعَدُونَ", meaning: "This is the Hellfire which you were promised", explanation: "Confrontation with Hell", verseRef: "36:63" },
        { term: "اصْلَوْهَا الْيَوْمَ بِمَا كُنتُمْ تَكْفُرُونَ", meaning: "Enter it today for what you used to deny", explanation: "Entry as consequence of denial", verseRef: "36:64" },
        { term: "الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ", meaning: "Today We seal their mouths", explanation: "Mouths sealed - cannot speak lies", verseRef: "36:65" },
        { term: "وَتُكَلِّمُنَا أَيْدِيهِمْ", meaning: "And their hands will speak to Us", explanation: "Hands testify to deeds", verseRef: "36:65" },
        { term: "وَتَشْهَدُ أَرْجُلُهُم", meaning: "And their feet will testify", explanation: "Feet witness where they walked", verseRef: "36:65" },
        { term: "بِمَا كَانُوا يَكْسِبُونَ", meaning: "About what they used to earn", explanation: "Body parts witness all deeds", verseRef: "36:65" }
      ]
    },

    // DIVINE POWER PROOFS (66-76)
    divineAbilities: {
      name: "Divine Abilities",
      nameArabic: "القدرة الإلهية",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَلَوْ نَشَاءُ لَطَمَسْنَا عَلَىٰ أَعْيُنِهِمْ", meaning: "If We willed, We could have obliterated their eyes", explanation: "Allah could blind them", verseRef: "36:66" },
        { term: "فَاسْتَبَقُوا الصِّرَاطَ فَأَنَّىٰ يُبْصِرُونَ", meaning: "Then they would race to the path, but how could they see?", explanation: "Without guidance, cannot find the way", verseRef: "36:66" },
        { term: "وَلَوْ نَشَاءُ لَمَسَخْنَاهُمْ عَلَىٰ مَكَانَتِهِمْ", meaning: "If We willed, We could have transformed them in their places", explanation: "Allah could disfigure them", verseRef: "36:67" },
        { term: "فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ", meaning: "So they would not be able to proceed, nor return", explanation: "Complete paralysis if Allah willed", verseRef: "36:67" }
      ]
    },

    agingAsSign: {
      name: "Aging as a Sign",
      nameArabic: "آية الشيخوخة",
      color: "#06B6D4",
      icon: "Eye",
      concepts: [
        { term: "وَمَن نُّعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِ", meaning: "And whoever We grant long life - We reverse him in creation", explanation: "Old age reverses physical abilities", verseRef: "36:68" },
        { term: "أَفَلَا يَعْقِلُونَ", meaning: "Will they not use reason?", explanation: "Call to reflect on life cycle", verseRef: "36:68" }
      ]
    },

    quranNotPoetry: {
      name: "The Quran is Not Poetry",
      nameArabic: "القرآن ليس شعرا",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَمَا عَلَّمْنَاهُ الشِّعْرَ", meaning: "We did not teach him poetry", explanation: "Prophet was not a poet", verseRef: "36:69" },
        { term: "وَمَا يَنبَغِي لَهُ", meaning: "Nor is it befitting for him", explanation: "Poetry unfitting for prophecy", verseRef: "36:69" },
        { term: "إِنْ هُوَ إِلَّا ذِكْرٌ وَقُرْآنٌ مُّبِينٌ", meaning: "It is only a reminder and a clear Quran", explanation: "Quran is divine reminder, not human composition", verseRef: "36:69" },
        { term: "لِّيُنذِرَ مَن كَانَ حَيًّا", meaning: "To warn whoever is alive", explanation: "Warning for the spiritually alive", verseRef: "36:70" },
        { term: "وَيَحِقَّ الْقَوْلُ عَلَى الْكَافِرِينَ", meaning: "And justify the word against the disbelievers", explanation: "Establishing proof against deniers", verseRef: "36:70" }
      ]
    },

    signsInLivestock: {
      name: "Signs in Livestock",
      nameArabic: "آية الأنعام",
      color: "#10B981",
      icon: "Globe",
      concepts: [
        { term: "أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُم مِّمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا", meaning: "Do they not see that We created for them from what Our hands made - livestock", explanation: "Cattle as divine creation for humans", verseRef: "36:71" },
        { term: "فَهُمْ لَهَا مَالِكُونَ", meaning: "And they are their owners", explanation: "Human dominion over animals", verseRef: "36:71" },
        { term: "وَذَلَّلْنَاهَا لَهُمْ", meaning: "And We have tamed them for them", explanation: "Animals made submissive to humans", verseRef: "36:72" },
        { term: "فَمِنْهَا رَكُوبُهُمْ", meaning: "So some of them they ride", explanation: "Transportation blessing", verseRef: "36:72" },
        { term: "وَمِنْهَا يَأْكُلُونَ", meaning: "And some of them they eat", explanation: "Food blessing", verseRef: "36:72" },
        { term: "وَلَهُمْ فِيهَا مَنَافِعُ وَمَشَارِبُ", meaning: "And for them therein are benefits and drinks", explanation: "Milk and other uses", verseRef: "36:73" },
        { term: "أَفَلَا يَشْكُرُونَ", meaning: "So will they not be grateful?", explanation: "Call to gratitude for animal blessings", verseRef: "36:73" }
      ]
    },

    falseGods: {
      name: "Futility of False Gods",
      nameArabic: "بطلان الآلهة الباطلة",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "وَاتَّخَذُوا مِن دُونِ اللَّهِ آلِهَةً", meaning: "But they have taken besides Allah gods", explanation: "Polytheism - taking other gods", verseRef: "36:74" },
        { term: "لَعَلَّهُمْ يُنصَرُونَ", meaning: "That perhaps they would be helped", explanation: "False hope in false gods", verseRef: "36:74" },
        { term: "لَا يَسْتَطِيعُونَ نَصْرَهُمْ", meaning: "They are not able to help them", explanation: "False gods are powerless", verseRef: "36:75" },
        { term: "وَهُمْ لَهُمْ جُندٌ مُّحْضَرُونَ", meaning: "And they will be soldiers brought forward", explanation: "Idols become evidence against worshippers", verseRef: "36:75" },
        { term: "فَلَا يَحْزُنكَ قَوْلُهُمْ", meaning: "So let not their speech grieve you", explanation: "Comfort to the Prophet", verseRef: "36:76" },
        { term: "إِنَّا نَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ", meaning: "Indeed, We know what they conceal and what they declare", explanation: "Allah knows all secrets", verseRef: "36:76" }
      ]
    },

    // CLOSING ARGUMENT - RESURRECTION PROOF (77-83)
    humanCreation: {
      name: "Human Creation Proof",
      nameArabic: "دليل خلق الإنسان",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "أَوَلَمْ يَرَ الْإِنسَانُ أَنَّا خَلَقْنَاهُ مِن نُّطْفَةٍ", meaning: "Does man not see that We created him from a sperm-drop", explanation: "Humble origin of humans", verseRef: "36:77" },
        { term: "فَإِذَا هُوَ خَصِيمٌ مُّبِينٌ", meaning: "Then at once he is a clear adversary", explanation: "Despite humble origin, he argues", verseRef: "36:77" },
        { term: "وَضَرَبَ لَنَا مَثَلًا", meaning: "And he presents an example for Us", explanation: "Man makes arguments against Allah", verseRef: "36:78" },
        { term: "وَنَسِيَ خَلْقَهُ", meaning: "And forgets his own creation", explanation: "Forgets he was created from nothing", verseRef: "36:78" },
        { term: "قَالَ مَن يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ", meaning: "He says: Who will give life to bones while they are disintegrated?", explanation: "Skeptic's question about resurrection", verseRef: "36:78" }
      ]
    },

    divineResponse: {
      name: "Divine Response to Skeptics",
      nameArabic: "الرد الإلهي على المنكرين",
      color: "#F59E0B",
      icon: "MessageCircle",
      concepts: [
        { term: "قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ", meaning: "Say: He who produced them the first time will give them life", explanation: "First creation proves ability for second", verseRef: "36:79" },
        { term: "وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ", meaning: "And He is of all creation Knowing", explanation: "Allah knows every creation", verseRef: "36:79" },
        { term: "الَّذِي جَعَلَ لَكُم مِّنَ الشَّجَرِ الْأَخْضَرِ نَارًا", meaning: "He who made for you from the green tree fire", explanation: "Opposite elements from same source", verseRef: "36:80" },
        { term: "فَإِذَا أَنتُم مِّنْهُ تُوقِدُونَ", meaning: "And then from it you ignite", explanation: "Fire from green wood - divine power", verseRef: "36:80" }
      ]
    },

    ultimateProof: {
      name: "Ultimate Proof of Divine Power",
      nameArabic: "البرهان النهائي للقدرة الإلهية",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "أَوَلَيْسَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: "Is not He who created the heavens and earth", explanation: "Creator of cosmos can recreate humans", verseRef: "36:81" },
        { term: "بِقَادِرٍ عَلَىٰ أَن يَخْلُقَ مِثْلَهُم", meaning: "Able to create the likes of them?", explanation: "Rhetorical - of course He can", verseRef: "36:81" },
        { term: "بَلَىٰ", meaning: "Yes indeed", explanation: "Emphatic affirmation", verseRef: "36:81" },
        { term: "وَهُوَ الْخَلَّاقُ الْعَلِيمُ", meaning: "And He is the Knowing Creator", explanation: "Perpetual Creator with complete knowledge", verseRef: "36:81" },
        { term: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا", meaning: "His command is only when He intends a thing", explanation: "Divine will is immediate", verseRef: "36:82" },
        { term: "أَن يَقُولَ لَهُ كُن فَيَكُونُ", meaning: "That He says to it 'Be' and it is", explanation: "Kun Fayakun - creation by command", verseRef: "36:82" },
        { term: "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ", meaning: "Exalted is He in whose hand is the realm of all things", explanation: "Complete divine sovereignty", verseRef: "36:83" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: "And to Him you will be returned", explanation: "Final return to Allah - closing message", verseRef: "36:83" }
      ]
    }
  },

  relationships: [
    // Prophethood connections
    { from: "والقرآن الحكيم", to: "إنك لمن المرسلين", type: "oath-proof", description: "Quran testifies to Prophet's messengership" },
    { from: "لتنذر قوماً", to: "فهم غافلون", type: "purpose", description: "Warning to awaken the heedless" },
    { from: "من اتبع الذكر", to: "بمغفرة وأجر كريم", type: "reward", description: "Following reminder leads to forgiveness" },

    // Town story connections
    { from: "أصحاب القرية", to: "ما أنتم إلا بشر", type: "pattern", description: "Same rejection faced by Prophet" },
    { from: "جاء من أقصى المدينة رجل", to: "ادخل الجنة", type: "martyrdom", description: "Running for truth leads to Paradise" },
    { from: "صيحة واحدة", to: "خامدون", type: "swift-justice", description: "Single blast brings swift destruction" },

    // Signs connections
    { from: "الأرض الميتة", to: "أحييناها", type: "proof", description: "Dead earth revival proves resurrection" },
    { from: "خلق الأزواج كلها", to: "سبحان", type: "glorification", description: "Pairs in creation inspire glorification" },
    { from: "الشمس تجري", to: "القمر قدرناه منازل", type: "system", description: "Celestial bodies in precise system" },
    { from: "الفلك المشحون", to: "إلا رحمة منا", type: "dependence", description: "All safety depends on divine mercy" },

    // Resurrection connections
    { from: "نفخ في الصور", to: "من الأجداث ينسلون", type: "sequence", description: "Trumpet leads to rising from graves" },
    { from: "أصحاب الجنة", to: "سلام قولاً", type: "reward", description: "Paradise dwellers receive Allah's greeting" },
    { from: "لا تعبدوا الشيطان", to: "اعبدوني", type: "command", description: "Reject Satan, worship Allah" },

    // Final proof connections
    { from: "خلقناه من نطفة", to: "من يحيي العظام", type: "irony", description: "Sperm-drop doubts resurrection" },
    { from: "أنشأها أول مرة", to: "بقادر على أن يخلق مثلهم", type: "logic", description: "First creation proves ability for recreation" },
    { from: "كن", to: "فيكون", type: "divine-power", description: "Creation by single command" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Prophethood Affirmed", verses: "36:1-12", description: "Oath by Quran, Prophet's mission, sealed hearts vs. receptive souls" },
      { stage: 2, theme: "Story of the Messengers", verses: "36:13-19", description: "Three messengers sent to a town, people reject them" },
      { stage: 3, theme: "The Believing Man", verses: "36:20-27", description: "Man from edge of town, his faith, martyrdom, and Paradise entry" },
      { stage: 4, theme: "Town's Destruction", verses: "36:28-32", description: "Single blast destroys town, historical pattern of rejection" },
      { stage: 5, theme: "Signs in Creation", verses: "36:33-44", description: "Dead earth, pairs, sun/moon, ships as divine signs" },
      { stage: 6, theme: "Warnings Rejected", verses: "36:45-50", description: "Signs ignored, charity refused, resurrection mocked" },
      { stage: 7, theme: "Resurrection Scenes", verses: "36:51-58", description: "Trumpet, rising from graves, Paradise delights" },
      { stage: 8, theme: "Sinners Separated", verses: "36:59-68", description: "Criminals separated, body parts testify, aging sign" },
      { stage: 9, theme: "Quran's Nature", verses: "36:69-76", description: "Not poetry, livestock blessings, false gods futile" },
      { stage: 10, theme: "Ultimate Proof", verses: "36:77-83", description: "Bones argument, Kun Fayakun, return to Allah" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Recite for the dying", how: "Read Ya-Sin for those approaching death - eases the soul's departure", verse: "Hadith tradition" },
      { principle: "Fear Allah privately", how: "Fear Allah in the unseen - this is true faith", verse: "36:11" },
      { principle: "Stand for truth boldly", how: "Like the man from the edge of town - speak truth even alone", verse: "36:20-25" },
      { principle: "Follow sincere messengers", how: "Follow those who ask no payment and are guided", verse: "36:21" },
      { principle: "Reflect on creation", how: "See dead earth, sun, moon, ships as signs of Allah", verse: "36:33-44" },
      { principle: "Be grateful for livestock", how: "Recognize animals as divine blessing for transport, food, drink", verse: "36:71-73" },
      { principle: "Remember humble origin", how: "You came from a sperm-drop - do not argue against your Creator", verse: "36:77-78" },
      { principle: "Trust in 'Kun Fayakun'", how: "Allah says 'Be' and it is - trust His power over all things", verse: "36:82" }
    ]
  },

  uniqueInsight: {
    title: "The Heart of the Quran",
    titleArabic: "قلب القرآن",
    insight: "The Prophet Muhammad (peace be upon him) called Surah Ya-Sin 'the heart of the Quran' (Tirmidhi). Just as the heart pumps life throughout the body, Ya-Sin pumps the central themes of the Quran - Tawheed, prophethood, and resurrection - into the believer's consciousness. The surah is recommended to be recited for the dying because it addresses the soul directly, affirming resurrection with powerful proofs: the dead earth brought to life (36:33), the story of the martyred believer immediately entering Paradise (36:26), and the ultimate truth that He who created the first time will recreate (36:79). The closing verses contain one of the Quran's most powerful declarations: 'His command when He intends a thing is only that He says to it Be! and it is' (36:82). This 'Kun Fayakun' (Be and it is) encapsulates divine omnipotence - Allah needs no process, no time, no cause; His will alone suffices. Reading Ya-Sin for the dying reminds the departing soul that the God who first created them from nothing has absolute power to resurrect them, and that Paradise awaits those who believed. The surah ends as it began - with the return to Allah, forming a complete circle of divine truth."
  },

  virtueAndMerit: {
    title: "Virtues of Surah Ya-Sin",
    titleArabic: "فضائل سورة يس",
    virtues: [
      {
        virtue: "Heart of the Quran",
        hadith: "Everything has a heart, and the heart of the Quran is Ya-Sin. Whoever recites Ya-Sin, Allah records for him the recitation of the Quran ten times.",
        source: "Tirmidhi (partially weak chain)",
        benefit: "Concentrated essence of Quranic message"
      },
      {
        virtue: "Recitation for the Dying",
        hadith: "Recite Ya-Sin over your dying ones.",
        source: "Abu Dawud, Ibn Majah",
        benefit: "Eases the soul's departure, provides comfort"
      },
      {
        virtue: "Forgiveness of Sins",
        hadith: "Whoever recites Ya-Sin at night seeking Allah's pleasure, his sins will be forgiven.",
        source: "Various narrations",
        benefit: "Night recitation brings forgiveness"
      },
      {
        virtue: "Fulfillment of Needs",
        hadith: "Whoever recites Ya-Sin in the morning, his needs will be fulfilled.",
        source: "Darimi (weak chain)",
        benefit: "Morning recitation for daily needs"
      }
    ],
    note: "While some hadith about Ya-Sin's virtues have weak chains, scholars agree on its immense spiritual value based on its content alone. Its themes of resurrection, divine power, and the fate of believers and disbelievers make it profoundly impactful for reflection."
  },

  recitationForDying: {
    title: "Ya-Sin and the Departing Soul",
    titleArabic: "يس وروح المحتضر",
    practice: "It is a Sunnah to recite Surah Ya-Sin for those who are dying",
    wisdom: [
      "Reminds the dying of resurrection and meeting Allah (36:51-52)",
      "Describes Paradise's delights as immediate comfort (36:55-58)",
      "Contains Allah's greeting of 'Salam' to believers (36:58)",
      "Affirms that body parts will testify - encourages final repentance (36:65)",
      "The 'Kun Fayakun' assures Allah's power to resurrect (36:82)",
      "Opens with prophethood affirmation - strengthening faith at the end",
      "The believing man enters Paradise immediately - hope for the dying (36:26)"
    ],
    etiquette: [
      "Recite calmly and clearly near the dying person",
      "Can be recited completely or partially based on time",
      "Encourage the dying to say La ilaha illallah",
      "Face the dying person toward the Qiblah if possible",
      "Continue remembrance of Allah and Quran recitation"
    ]
  },

  historicalContext: {
    note: "Surah Ya-Sin was revealed in Makkah during the intense persecution of early Muslims. The story of the messengers sent to the town (traditionally identified as Antioch) and the believing man who was martyred served as encouragement for the Prophet and his companions facing similar opposition. The Quraysh mocked resurrection just as the townspeople mocked the messengers, making the detailed resurrection proofs highly relevant. The surah's powerful affirmation of prophethood ('Indeed you are among the messengers' 36:3) directly countered those who denied Muhammad's mission. The closing argument from creation to recreation (36:77-82) employs the same logic later used with Ubayy ibn Khalaf, who brought decayed bones to the Prophet asking 'Who will give life to bones when they are disintegrated?' - Allah revealed the answer: 'He who produced them the first time.'"
  },

  linguisticFeatures: {
    features: [
      { feature: "يس", example: "Huruf Muqatta'at", effect: "Mysterious letters capturing attention - possibly meaning 'O Human'" },
      { feature: "مُّقْمَحُونَ", example: "Heads forced upward", effect: "Vivid imagery of those shackled by disbelief" },
      { feature: "يَسْعَىٰ", example: "Running/striving", effect: "The believing man's urgency to reach his people" },
      { feature: "صَيْحَةً وَاحِدَةً", example: "Single shout", effect: "Emphasizes swiftness of divine punishment" },
      { feature: "يَنسِلُونَ", example: "Hasten forth", effect: "Quick emergence from graves - like insects from the ground" },
      { feature: "مَّرْقَدِنَا", example: "Our sleeping place", effect: "Death described as sleep - resurrection as awakening" },
      { feature: "الْعُرْجُونِ الْقَدِيمِ", example: "Old date stalk", effect: "Crescent moon curved like dried palm branch - precise imagery" },
      { feature: "كُن فَيَكُونُ", example: "Be and it is", effect: "Ultimate expression of divine power - no process needed" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "36:36", topic: "Pairs in creation", note: "Everything in pairs - atoms have positive/negative charges, male/female in living things, matter/antimatter" },
      { verse: "36:38", topic: "Sun's course", note: "Sun travels through space toward a destination (Vega region) - 'mustaqarr' as destination point" },
      { verse: "36:39", topic: "Moon phases", note: "28 lunar stations (manazil) - precise lunar calendar system" },
      { verse: "36:40", topic: "Celestial orbits", note: "Each celestial body in its orbit (falak) - modern orbital mechanics" },
      { verse: "36:77", topic: "Human from sperm", note: "Nutfah (sperm-drop) - human origin from microscopic cell" },
      { verse: "36:80", topic: "Fire from green tree", note: "Photosynthesis stores energy in wood - released as fire; also Markh and Afar trees used by Arabs to produce fire" }
    ]
  },

  connectionToDeathAndResurrection: {
    title: "Why Ya-Sin for the Dying",
    titleArabic: "لماذا يس للمحتضر",
    connections: [
      { theme: "Soul's journey affirmed", verse: "36:12", explanation: "Allah gives life and records all deeds - soul's record complete" },
      { theme: "Immediate Paradise entry", verse: "36:26", explanation: "Believer told 'Enter Paradise' - hope for immediate reward" },
      { theme: "Single blast awareness", verse: "36:29, 49, 53", explanation: "Death comes suddenly - be prepared" },
      { theme: "Rising described", verse: "36:51-52", explanation: "Detailed resurrection scene - knowing what comes next" },
      { theme: "Allah's greeting", verse: "36:58", explanation: "Believers receive 'Salam' from Allah - ultimate honor" },
      { theme: "Body parts witness", verse: "36:65", explanation: "Encourages final repentance - hands and feet will testify" },
      { theme: "Recreation assured", verse: "36:79", explanation: "He who created first time will recreate - certainty of resurrection" },
      { theme: "Kun Fayakun", verse: "36:82", explanation: "Allah's power is absolute - resurrection is easy for Him" }
    ]
  }
};

export default ONTOLOGY;
