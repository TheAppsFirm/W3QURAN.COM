/**
 * Surah Az-Zumar (39) - Ontology of Quranic Concepts
 * The Groups (The Throngs) - 75 Ayahs, Makkan
 * Theme: Sincerity in worship, the two groups (believers vs disbelievers),
 * intercession denied for polytheists, Allah's boundless mercy (39:53)
 */

export const ONTOLOGY = {
  surahId: 39,
  surahName: "Az-Zumar",
  surahNameArabic: "الزمر",
  meaning: "The Groups / The Throngs",
  revelationType: "Makki",
  totalAyahs: 75,

  categories: {
    sincerityInWorship: {
      name: "Sincerity in Worship (Ikhlas)",
      nameArabic: "الإخلاص في العبادة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَاعْبُدِ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ", meaning: "So worship Allah, sincere to Him in religion", explanation: "Core command - worship must be purely for Allah", verseRef: "39:2" },
        { term: "أَلَا لِلَّهِ الدِّينُ الْخَالِصُ", meaning: "Unquestionably, for Allah is the pure religion", explanation: "Sincere worship belongs exclusively to Allah", verseRef: "39:3" },
        { term: "قُلِ اللَّهَ أَعْبُدُ مُخْلِصًا لَّهُ دِينِي", meaning: "Say: Allah I worship, sincere to Him in my religion", explanation: "Prophet's declaration of pure monotheism", verseRef: "39:14" },
        { term: "قُلْ إِنِّي أُمِرْتُ أَنْ أَعْبُدَ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ", meaning: "Say: I am commanded to worship Allah with sincere devotion", explanation: "Divine command establishes ikhlas", verseRef: "39:11" },
        { term: "وَأُمِرْتُ لِأَنْ أَكُونَ أَوَّلَ الْمُسْلِمِينَ", meaning: "And I am commanded to be the first of Muslims", explanation: "Prophet leads by example in submission", verseRef: "39:12" },
        { term: "فَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ", meaning: "So call upon Him, sincere to Him in religion", explanation: "Supplication must also be sincere", verseRef: "39:14" }
      ]
    },

    falsehoodOfPolytheism: {
      name: "Refutation of Polytheism",
      nameArabic: "بطلان الشرك",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ", meaning: "Those who take protectors besides Him", explanation: "Description of polytheists", verseRef: "39:3" },
        { term: "مَا نَعْبُدُهُمْ إِلَّا لِيُقَرِّبُونَا إِلَى اللَّهِ زُلْفَىٰ", meaning: "We only worship them to bring us nearer to Allah", explanation: "False justification of idol worship", verseRef: "39:3" },
        { term: "إِنَّ اللَّهَ يَحْكُمُ بَيْنَهُمْ فِي مَا هُمْ فِيهِ يَخْتَلِفُونَ", meaning: "Allah will judge between them in what they differ", explanation: "Final judgment on theological disputes", verseRef: "39:3" },
        { term: "إِنَّ اللَّهَ لَا يَهْدِي مَنْ هُوَ كَاذِبٌ كَفَّارٌ", meaning: "Allah does not guide one who is a liar and disbeliever", explanation: "Guidance withdrawn from persistent liars", verseRef: "39:3" },
        { term: "لَّوْ أَرَادَ اللَّهُ أَن يَتَّخِذَ وَلَدًا", meaning: "If Allah had intended to take a son", explanation: "Refutation of those claiming Allah has offspring", verseRef: "39:4" },
        { term: "لَّاصْطَفَىٰ مِمَّا يَخْلُقُ مَا يَشَاءُ", meaning: "He would have chosen from what He creates", explanation: "Allah is transcendent above need for children", verseRef: "39:4" },
        { term: "سُبْحَانَهُ هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ", meaning: "Exalted is He; He is Allah, the One, the Prevailing", explanation: "Allah's absolute oneness", verseRef: "39:4" }
      ]
    },

    intercessionDenied: {
      name: "Intercession Denied for Polytheists",
      nameArabic: "رد الشفاعة للمشركين",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "أَمِ اتَّخَذُوا مِن دُونِ اللَّهِ شُفَعَاءَ", meaning: "Or have they taken intercessors besides Allah?", explanation: "Challenge to idol worship as intercession", verseRef: "39:43" },
        { term: "أَوَلَوْ كَانُوا لَا يَمْلِكُونَ شَيْئًا وَلَا يَعْقِلُونَ", meaning: "Even though they possess nothing nor do they reason?", explanation: "Idols are powerless and senseless", verseRef: "39:43" },
        { term: "قُل لِّلَّهِ الشَّفَاعَةُ جَمِيعًا", meaning: "Say: To Allah belongs intercession entirely", explanation: "All intercession is Allah's prerogative", verseRef: "39:44" },
        { term: "لَّهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "To Him belongs dominion of heavens and earth", explanation: "Allah alone controls all realms", verseRef: "39:44" },
        { term: "وَإِذَا ذُكِرَ اللَّهُ وَحْدَهُ اشْمَأَزَّتْ قُلُوبُ الَّذِينَ لَا يُؤْمِنُونَ", meaning: "When Allah alone is mentioned, hearts of disbelievers shrink with aversion", explanation: "Polytheists reject pure monotheism", verseRef: "39:45" },
        { term: "وَإِذَا ذُكِرَ الَّذِينَ مِن دُونِهِ إِذَا هُمْ يَسْتَبْشِرُونَ", meaning: "But when those besides Him are mentioned, they rejoice", explanation: "They prefer their false gods", verseRef: "39:45" }
      ]
    },

    divineMercy: {
      name: "Allah's Boundless Mercy",
      nameArabic: "سعة رحمة الله",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ", meaning: "Say: O My servants who have transgressed against themselves", explanation: "Addressing sinners with compassion", verseRef: "39:53" },
        { term: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", meaning: "Do not despair of the mercy of Allah", explanation: "Prohibition of losing hope in Allah", verseRef: "39:53" },
        { term: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", meaning: "Indeed, Allah forgives all sins", explanation: "No sin is too great for Allah's forgiveness", verseRef: "39:53" },
        { term: "إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ", meaning: "Indeed, He is the Forgiving, the Merciful", explanation: "Divine names affirming mercy", verseRef: "39:53" },
        { term: "وَأَنِيبُوا إِلَىٰ رَبِّكُمْ وَأَسْلِمُوا لَهُ", meaning: "And return to your Lord and submit to Him", explanation: "Path to receiving mercy - repentance and submission", verseRef: "39:54" },
        { term: "مِن قَبْلِ أَن يَأْتِيَكُمُ الْعَذَابُ ثُمَّ لَا تُنصَرُونَ", meaning: "Before punishment comes and you will not be helped", explanation: "Urgency of repentance", verseRef: "39:54" },
        { term: "وَاتَّبِعُوا أَحْسَنَ مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ", meaning: "Follow the best of what is revealed to you from your Lord", explanation: "Guidance to salvation", verseRef: "39:55" }
      ]
    },

    cosmicSigns: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ", meaning: "He created the heavens and earth in truth", explanation: "Purposeful creation", verseRef: "39:5" },
        { term: "يُكَوِّرُ اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ النَّهَارَ عَلَى اللَّيْلِ", meaning: "He wraps the night over the day and wraps the day over the night", explanation: "Alternation of day and night - spherical motion", verseRef: "39:5" },
        { term: "وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ", meaning: "And He subjected the sun and moon", explanation: "Celestial bodies under divine control", verseRef: "39:5" },
        { term: "كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى", meaning: "Each running for a specified term", explanation: "Precise cosmic order", verseRef: "39:5" },
        { term: "أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: "Sent down from the sky water", explanation: "Rain as divine provision", verseRef: "39:21" },
        { term: "فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ", meaning: "And made it flow as springs in the earth", explanation: "Water cycle described", verseRef: "39:21" },
        { term: "ثُمَّ يُخْرِجُ بِهِ زَرْعًا مُّخْتَلِفًا أَلْوَانُهُ", meaning: "Then produces crops of varying colors", explanation: "Diversity in vegetation", verseRef: "39:21" },
        { term: "ثُمَّ يَهِيجُ فَتَرَاهُ مُصْفَرًّا", meaning: "Then it withers and you see it turn yellow", explanation: "Life cycle of plants", verseRef: "39:21" }
      ]
    },

    humanCreation: {
      name: "Human Creation and Nature",
      nameArabic: "خلق الإنسان وطبيعته",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ", meaning: "He created you from a single soul", explanation: "Unity of human origin - Adam", verseRef: "39:6" },
        { term: "ثُمَّ جَعَلَ مِنْهَا زَوْجَهَا", meaning: "Then made from it its mate", explanation: "Creation of Hawwa (Eve)", verseRef: "39:6" },
        { term: "وَأَنزَلَ لَكُم مِّنَ الْأَنْعَامِ ثَمَانِيَةَ أَزْوَاجٍ", meaning: "And sent down for you eight pairs of livestock", explanation: "Provision of animals", verseRef: "39:6" },
        { term: "يَخْلُقُكُمْ فِي بُطُونِ أُمَّهَاتِكُمْ", meaning: "He creates you in the wombs of your mothers", explanation: "Human development in utero", verseRef: "39:6" },
        { term: "خَلْقًا مِّن بَعْدِ خَلْقٍ", meaning: "Creation after creation", explanation: "Stages of fetal development", verseRef: "39:6" },
        { term: "فِي ظُلُمَاتٍ ثَلَاثٍ", meaning: "In three darknesses", explanation: "Womb layers - possibly membrane, uterine wall, abdomen", verseRef: "39:6" },
        { term: "وَإِذَا مَسَّ الْإِنسَانَ ضُرٌّ دَعَا رَبَّهُ مُنِيبًا إِلَيْهِ", meaning: "When hardship touches man, he calls his Lord, turning to Him", explanation: "Human nature - turning to Allah in difficulty", verseRef: "39:8" },
        { term: "ثُمَّ إِذَا خَوَّلَهُ نِعْمَةً مِّنْهُ نَسِيَ مَا كَانَ يَدْعُو إِلَيْهِ", meaning: "Then when He grants him a favor, he forgets what he called for", explanation: "Ingratitude when comfort returns", verseRef: "39:8" }
      ]
    },

    quranDescription: {
      name: "Description of the Quran",
      nameArabic: "وصف القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ", meaning: "Revelation of the Book from Allah, the Mighty, the Wise", explanation: "Divine source of the Quran", verseRef: "39:1" },
        { term: "اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ", meaning: "Allah has sent down the best statement", explanation: "Quran is the finest speech", verseRef: "39:23" },
        { term: "كِتَابًا مُّتَشَابِهًا مَّثَانِيَ", meaning: "A consistent Book, repeating", explanation: "Internal consistency and reinforcement", verseRef: "39:23" },
        { term: "تَقْشَعِرُّ مِنْهُ جُلُودُ الَّذِينَ يَخْشَوْنَ رَبَّهُمْ", meaning: "The skins of those who fear their Lord shiver from it", explanation: "Physical response to Quran's power", verseRef: "39:23" },
        { term: "ثُمَّ تَلِينُ جُلُودُهُمْ وَقُلُوبُهُمْ إِلَىٰ ذِكْرِ اللَّهِ", meaning: "Then their skins and hearts soften to remembrance of Allah", explanation: "Quran softens hearts after initial awe", verseRef: "39:23" },
        { term: "ذَٰلِكَ هُدَى اللَّهِ يَهْدِي بِهِ مَن يَشَاءُ", meaning: "That is Allah's guidance, He guides whom He wills", explanation: "Guidance through the Quran", verseRef: "39:23" },
        { term: "وَلَقَدْ ضَرَبْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ مِن كُلِّ مَثَلٍ", meaning: "We have presented for people in this Quran every example", explanation: "Comprehensive guidance through parables", verseRef: "39:27" },
        { term: "قُرْآنًا عَرَبِيًّا غَيْرَ ذِي عِوَجٍ", meaning: "An Arabic Quran without any crookedness", explanation: "Clear, straight, and Arabic", verseRef: "39:28" }
      ]
    },

    twoGroups: {
      name: "The Two Groups (Zumar)",
      nameArabic: "الزمران",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "وَسِيقَ الَّذِينَ كَفَرُوا إِلَىٰ جَهَنَّمَ زُمَرًا", meaning: "Those who disbelieved will be driven to Hell in groups", explanation: "Disbelievers gathered in throngs to Hell", verseRef: "39:71" },
        { term: "حَتَّىٰ إِذَا جَاءُوهَا فُتِحَتْ أَبْوَابُهَا", meaning: "Until when they reach it, its gates are opened", explanation: "Gates of Hell opened for them", verseRef: "39:71" },
        { term: "أَلَمْ يَأْتِكُمْ رُسُلٌ مِّنكُمْ", meaning: "Did there not come to you messengers from among you?", explanation: "Rhetorical question - no excuse", verseRef: "39:71" },
        { term: "بَلَىٰ وَلَٰكِنْ حَقَّتْ كَلِمَةُ الْعَذَابِ عَلَى الْكَافِرِينَ", meaning: "Yes, but the word of punishment was justified upon disbelievers", explanation: "Their confession comes too late", verseRef: "39:71" },
        { term: "وَسِيقَ الَّذِينَ اتَّقَوْا رَبَّهُمْ إِلَى الْجَنَّةِ زُمَرًا", meaning: "Those who feared their Lord will be led to Paradise in groups", explanation: "Believers gathered in throngs to Paradise", verseRef: "39:73" },
        { term: "حَتَّىٰ إِذَا جَاءُوهَا وَفُتِحَتْ أَبْوَابُهَا", meaning: "Until when they reach it and its gates have been opened", explanation: "Gates already opened in welcome - note the difference", verseRef: "39:73" },
        { term: "سَلَامٌ عَلَيْكُمْ طِبْتُمْ فَادْخُلُوهَا خَالِدِينَ", meaning: "Peace be upon you; you have become pure, so enter it eternally", explanation: "Angelic welcome to Paradise", verseRef: "39:73" }
      ]
    },

    judgmentDayScenes: {
      name: "Judgment Day Scenes",
      nameArabic: "مشاهد يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "وَنُفِخَ فِي الصُّورِ فَصَعِقَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ", meaning: "The Trumpet will be blown and all in heavens and earth will fall dead", explanation: "First trumpet - universal death", verseRef: "39:68" },
        { term: "ثُمَّ نُفِخَ فِيهِ أُخْرَىٰ فَإِذَا هُمْ قِيَامٌ يَنظُرُونَ", meaning: "Then it will be blown again and they will be standing, looking", explanation: "Second trumpet - resurrection", verseRef: "39:68" },
        { term: "وَأَشْرَقَتِ الْأَرْضُ بِنُورِ رَبِّهَا", meaning: "And the earth will shine with the light of its Lord", explanation: "Divine light illuminates Judgment", verseRef: "39:69" },
        { term: "وَوُضِعَ الْكِتَابُ", meaning: "And the record will be placed", explanation: "Books of deeds opened", verseRef: "39:69" },
        { term: "وَجِيءَ بِالنَّبِيِّينَ وَالشُّهَدَاءِ", meaning: "And the prophets and witnesses brought", explanation: "Prophets testify on that Day", verseRef: "39:69" },
        { term: "وَقُضِيَ بَيْنَهُم بِالْحَقِّ", meaning: "And it will be judged between them in truth", explanation: "Perfect justice administered", verseRef: "39:69" },
        { term: "وَهُمْ لَا يُظْلَمُونَ", meaning: "And they will not be wronged", explanation: "No injustice on Judgment Day", verseRef: "39:69" },
        { term: "وَوُفِّيَتْ كُلُّ نَفْسٍ مَّا عَمِلَتْ", meaning: "Every soul will be fully compensated for what it did", explanation: "Perfect recompense", verseRef: "39:70" }
      ]
    },

    sleepAndDeath: {
      name: "Sleep as Death's Brother",
      nameArabic: "النوم أخو الموت",
      color: "#8B5CF6",
      icon: "Moon",
      concepts: [
        { term: "اللَّهُ يَتَوَفَّى الْأَنفُسَ حِينَ مَوْتِهَا", meaning: "Allah takes the souls at the time of their death", explanation: "Allah takes souls at death", verseRef: "39:42" },
        { term: "وَالَّتِي لَمْ تَمُتْ فِي مَنَامِهَا", meaning: "And those that do not die during their sleep", explanation: "Sleep is a minor death", verseRef: "39:42" },
        { term: "فَيُمْسِكُ الَّتِي قَضَىٰ عَلَيْهَا الْمَوْتَ", meaning: "He keeps those for which He has decreed death", explanation: "Some souls don't return from sleep", verseRef: "39:42" },
        { term: "وَيُرْسِلُ الْأُخْرَىٰ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: "And releases the others for a specified term", explanation: "Others awakened until appointed time", verseRef: "39:42" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ", meaning: "Indeed in that are signs for people who reflect", explanation: "Sleep-death parallel invites reflection", verseRef: "39:42" }
      ]
    },

    regretOfSinners: {
      name: "Regret of Sinners",
      nameArabic: "ندم المذنبين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَن تَقُولَ نَفْسٌ يَا حَسْرَتَىٰ عَلَىٰ مَا فَرَّطتُ فِي جَنبِ اللَّهِ", meaning: "Lest a soul should say: Alas for what I neglected regarding Allah", explanation: "Deep regret for neglecting duties to Allah", verseRef: "39:56" },
        { term: "وَإِن كُنتُ لَمِنَ السَّاخِرِينَ", meaning: "And I was among the mockers", explanation: "Admitting they mocked the truth", verseRef: "39:56" },
        { term: "أَوْ تَقُولَ لَوْ أَنَّ اللَّهَ هَدَانِي لَكُنتُ مِنَ الْمُتَّقِينَ", meaning: "Or say: If only Allah had guided me, I would be among the righteous", explanation: "False excuse - blaming Allah for misguidance", verseRef: "39:57" },
        { term: "أَوْ تَقُولَ حِينَ تَرَى الْعَذَابَ لَوْ أَنَّ لِي كَرَّةً", meaning: "Or say when seeing punishment: If only I could return", explanation: "Wishing for second chance", verseRef: "39:58" },
        { term: "فَأَكُونَ مِنَ الْمُحْسِنِينَ", meaning: "So I could be among the doers of good", explanation: "Promise to do good if returned", verseRef: "39:58" },
        { term: "بَلَىٰ قَدْ جَاءَتْكَ آيَاتِي فَكَذَّبْتَ بِهَا", meaning: "Yes, My signs came to you, but you denied them", explanation: "Allah's response - guidance was available", verseRef: "39:59" },
        { term: "وَاسْتَكْبَرْتَ وَكُنتَ مِنَ الْكَافِرِينَ", meaning: "And were arrogant and became among the disbelievers", explanation: "Arrogance led to disbelief", verseRef: "39:59" }
      ]
    },

    believerVsDisbeliever: {
      name: "Believer vs Disbeliever",
      nameArabic: "المؤمن والكافر",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "أَمَّنْ هُوَ قَانِتٌ آنَاءَ اللَّيْلِ سَاجِدًا وَقَائِمًا", meaning: "Is one who is devoutly obedient during the night, prostrating and standing", explanation: "Night worshipper in devotion", verseRef: "39:9" },
        { term: "يَحْذَرُ الْآخِرَةَ وَيَرْجُو رَحْمَةَ رَبِّهِ", meaning: "Fearing the Hereafter and hoping for mercy of his Lord", explanation: "Balance of fear and hope", verseRef: "39:9" },
        { term: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ", meaning: "Say: Are those who know equal to those who do not know?", explanation: "Knowledge distinguishes people", verseRef: "39:9" },
        { term: "إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ", meaning: "Only those of understanding will remember", explanation: "Reminder benefits the wise", verseRef: "39:9" },
        { term: "ضَرَبَ اللَّهُ مَثَلًا رَّجُلًا فِيهِ شُرَكَاءُ مُتَشَاكِسُونَ", meaning: "Allah presents a parable: a man with quarreling partners", explanation: "Polytheism like having conflicting masters", verseRef: "39:29" },
        { term: "وَرَجُلًا سَلَمًا لِّرَجُلٍ", meaning: "And a man devoted to one man", explanation: "Monotheism like serving one master", verseRef: "39:29" },
        { term: "هَلْ يَسْتَوِيَانِ مَثَلًا", meaning: "Are they equal in comparison?", explanation: "Obvious difference between the two", verseRef: "39:29" }
      ]
    },

    divineAttributes: {
      name: "Divine Names and Attributes",
      nameArabic: "أسماء الله وصفاته",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "الْعَزِيزِ الْحَكِيمِ", meaning: "The Mighty, the Wise", explanation: "Power combined with wisdom", verseRef: "39:1" },
        { term: "الْوَاحِدُ الْقَهَّارُ", meaning: "The One, the Prevailing", explanation: "Absolute oneness and dominance", verseRef: "39:4" },
        { term: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ", meaning: "Knower of the unseen and witnessed", explanation: "Complete knowledge of hidden and manifest", verseRef: "39:46" },
        { term: "الْكَبِيرُ الْمُتَعَالِ", meaning: "The Grand, the Exalted", explanation: "Supreme greatness and transcendence", verseRef: "39:67" },
        { term: "الْغَفُورُ الرَّحِيمُ", meaning: "The Forgiving, the Merciful", explanation: "Divine forgiveness and mercy", verseRef: "39:53" },
        { term: "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ", meaning: "That is Allah, your Lord", explanation: "Affirmation of lordship", verseRef: "39:6" },
        { term: "لَهُ الْمُلْكُ", meaning: "To Him belongs dominion", explanation: "Absolute sovereignty", verseRef: "39:6" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: "There is no deity except Him", explanation: "Declaration of monotheism", verseRef: "39:6" }
      ]
    },

    paradiseDescription: {
      name: "Paradise Description",
      nameArabic: "وصف الجنة",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "لِلَّذِينَ أَحْسَنُوا فِي هَٰذِهِ الدُّنْيَا حَسَنَةٌ", meaning: "For those who do good in this world is good", explanation: "Reward begins in this life", verseRef: "39:10" },
        { term: "وَأَرْضُ اللَّهِ وَاسِعَةٌ", meaning: "And Allah's earth is spacious", explanation: "Emigration for religion is possible", verseRef: "39:10" },
        { term: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ", meaning: "The patient will be given their reward without account", explanation: "Unlimited reward for patience", verseRef: "39:10" },
        { term: "لَهُم مِّن فَوْقِهِمْ ظُلَلٌ مِّنَ النَّارِ وَمِن تَحْتِهِمْ ظُلَلٌ", meaning: "They will have canopies of fire above and below them", explanation: "Hell description - fire above and below", verseRef: "39:16" },
        { term: "لَٰكِنِ الَّذِينَ اتَّقَوْا رَبَّهُمْ لَهُمْ غُرَفٌ مِّن فَوْقِهَا غُرَفٌ مَّبْنِيَّةٌ", meaning: "But those who feared their Lord - for them are chambers, above which are chambers built", explanation: "Paradise has elevated chambers", verseRef: "39:20" },
        { term: "تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: "Beneath which rivers flow", explanation: "Rivers flowing beneath Paradise dwellings", verseRef: "39:20" },
        { term: "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي صَدَقَنَا وَعْدَهُ", meaning: "And they will say: Praise to Allah who fulfilled His promise to us", explanation: "Gratitude upon entering Paradise", verseRef: "39:74" },
        { term: "وَأَوْرَثَنَا الْأَرْضَ نَتَبَوَّأُ مِنَ الْجَنَّةِ حَيْثُ نَشَاءُ", meaning: "And made us inherit the land to settle in Paradise wherever we will", explanation: "Freedom to choose any place in Paradise", verseRef: "39:74" },
        { term: "فَنِعْمَ أَجْرُ الْعَامِلِينَ", meaning: "Excellent is the reward of workers", explanation: "Paradise earned through righteous deeds", verseRef: "39:74" }
      ]
    },

    angelsAndThrone: {
      name: "Angels and the Throne",
      nameArabic: "الملائكة والعرش",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَتَرَى الْمَلَائِكَةَ حَافِّينَ مِنْ حَوْلِ الْعَرْشِ", meaning: "And you will see the angels surrounding the Throne", explanation: "Angels encircle Allah's Throne", verseRef: "39:75" },
        { term: "يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ", meaning: "Glorifying with praise of their Lord", explanation: "Perpetual angelic worship", verseRef: "39:75" },
        { term: "وَقُضِيَ بَيْنَهُم بِالْحَقِّ", meaning: "And it will be judged between them in truth", explanation: "Final judgment completed", verseRef: "39:75" },
        { term: "وَقِيلَ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: "And it will be said: Praise to Allah, Lord of the worlds", explanation: "Ultimate conclusion - all praise to Allah", verseRef: "39:75" }
      ]
    },

    warningToDisbelievers: {
      name: "Warning to Disbelievers",
      nameArabic: "تحذير الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قُلْ إِنِّي أَخَافُ إِنْ عَصَيْتُ رَبِّي عَذَابَ يَوْمٍ عَظِيمٍ", meaning: "Say: I fear if I disobey my Lord punishment of a tremendous Day", explanation: "Even the Prophet warns of disobedience", verseRef: "39:13" },
        { term: "قُلْ أَفَغَيْرَ اللَّهِ تَأْمُرُونِّي أَعْبُدُ أَيُّهَا الْجَاهِلُونَ", meaning: "Say: Is it other than Allah you order me to worship, O ignorant ones?", explanation: "Rejecting command to worship idols", verseRef: "39:64" },
        { term: "لَئِنْ أَشْرَكْتَ لَيَحْبَطَنَّ عَمَلُكَ", meaning: "If you associate others, your deeds will be nullified", explanation: "Shirk nullifies all good deeds", verseRef: "39:65" },
        { term: "وَلَتَكُونَنَّ مِنَ الْخَاسِرِينَ", meaning: "And you will surely be among the losers", explanation: "Shirk leads to total loss", verseRef: "39:65" },
        { term: "بَلِ اللَّهَ فَاعْبُدْ وَكُن مِّنَ الشَّاكِرِينَ", meaning: "Rather, worship Allah and be among the grateful", explanation: "True worship with gratitude", verseRef: "39:66" }
      ]
    }
  },

  relationships: [
    { from: "مخلصاً له الدين", to: "ألا لله الدين الخالص", type: "command-principle", description: "Command to sincerity reflects Allah's exclusive right to pure worship" },
    { from: "ليقربونا إلى الله زلفى", to: "لله الشفاعة جميعاً", type: "refutation", description: "False claim of idol intercession vs Allah's sole control of intercession" },
    { from: "لا تقنطوا من رحمة الله", to: "يغفر الذنوب جميعاً", type: "promise-fulfillment", description: "Prohibition of despair backed by divine forgiveness" },
    { from: "أسرفوا على أنفسهم", to: "أنيبوا إلى ربكم", type: "problem-solution", description: "From transgression to repentance" },
    { from: "يتوفى الأنفس حين موتها", to: "في منامها", type: "analogy", description: "Death and sleep both involve soul-taking" },
    { from: "سيق الذين كفروا زمراً", to: "سيق الذين اتقوا زمراً", type: "contrast", description: "Both groups driven in throngs - to different destinations" },
    { from: "فتحت أبوابها", to: "وفتحت أبوابها", type: "subtle-difference", description: "Hell gates open when they arrive; Paradise gates already open in welcome (waw difference)" },
    { from: "تقشعر منه جلود", to: "تلين جلودهم وقلوبهم", type: "sequence", description: "Quran causes fear then softens hearts" },
    { from: "رجلاً فيه شركاء متشاكسون", to: "رجلاً سلماً لرجل", type: "parable", description: "Polytheism vs monotheism illustrated" },
    { from: "يوم القيامة", to: "الحمد لله رب العالمين", type: "culmination", description: "Judgment Day ends with universal praise to Allah" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Revelation and Sincerity", verses: "39:1-6", description: "Quran's authority, pure worship, refutation of polytheism" },
      { stage: 2, theme: "Human Nature and Gratitude", verses: "39:7-9", description: "Human ingratitude vs devoted worshipper" },
      { stage: 3, theme: "Reward for the Righteous", verses: "39:10-16", description: "Patience, emigration, warning against shirk" },
      { stage: 4, theme: "Good News for Servants", verses: "39:17-20", description: "Avoiding taghut, chambers of Paradise" },
      { stage: 5, theme: "Signs in Nature and Quran", verses: "39:21-26", description: "Water cycle, Quran's effect, hardened hearts" },
      { stage: 6, theme: "Quran's Examples", verses: "39:27-31", description: "Parables, Arabic Quran, Prophet's mortality" },
      { stage: 7, theme: "Lies Against Allah", verses: "39:32-40", description: "Worst liars, Allah sufficient, guidance and misguidance" },
      { stage: 8, theme: "Soul-Taking and Intercession", verses: "39:41-48", description: "Sleep-death parallel, false intercessors, single God vs many" },
      { stage: 9, theme: "Boundless Mercy", verses: "39:49-58", description: "Human inconsistency, FAMOUS VERSE 39:53, urgency of repentance" },
      { stage: 10, theme: "Regret and Lies", verses: "39:59-63", description: "Faces blackened, Allah's complete control" },
      { stage: 11, theme: "Pure Worship Command", verses: "39:64-66", description: "Rejection of shirk, worship Allah alone" },
      { stage: 12, theme: "Divine Majesty", verses: "39:67-70", description: "Earth in His grip, trumpets blown, perfect justice" },
      { stage: 13, theme: "The Two Groups", verses: "39:71-75", description: "Hell group, Paradise group, final praise to Allah" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Worship with complete sincerity", how: "Examine intentions - are you worshipping for Allah alone or for show?", verse: "39:2-3" },
      { principle: "Never despair of Allah's mercy", how: "No matter how many sins, turn to Allah in repentance - He forgives all", verse: "39:53" },
      { principle: "Repent before it's too late", how: "Return to Allah and submit before punishment arrives", verse: "39:54-55" },
      { principle: "Balance fear and hope", how: "Fear the Hereafter while hoping for Allah's mercy", verse: "39:9" },
      { principle: "Knowledge distinguishes people", how: "Seek knowledge - those who know are not like those who don't", verse: "39:9" },
      { principle: "Be patient for unlimited reward", how: "The patient receive their reward without measure", verse: "39:10" },
      { principle: "Let the Quran affect your heart", how: "When reciting, let your skin shiver in awe, then soften to Allah's remembrance", verse: "39:23" },
      { principle: "Reflect on sleep", how: "Every sleep is a minor death - be grateful for each awakening", verse: "39:42" },
      { principle: "Don't make excuses", how: "Signs have come - arrogance and denial are your own choice", verse: "39:59" },
      { principle: "Choose one Master", how: "Serving Allah alone is simpler than serving conflicting idols", verse: "39:29" }
    ]
  },

  mostHopefulVerse: {
    verse: 53,
    arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ",
    translation: "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, He is the Forgiving, the Merciful.",
    significance: "Scholars call this the most hopeful verse in the Quran. It addresses sinners with the intimate 'My servants' (Ya Ibadi), prohibits despair, promises forgiveness of ALL sins, and confirms with two divine names of mercy. This verse gives hope to every sinner who turns back to Allah.",
    context: "Revealed when some companions thought their pre-Islamic sins were too great to be forgiven. This verse assures that no sin is beyond Allah's forgiveness for those who repent."
  },

  uniqueFeatures: {
    zumarConcept: "The surah's name comes from 'zumar' (groups/throngs) describing how both believers and disbelievers will be driven in groups to their destinations on Judgment Day - a powerful image of collective fate.",
    gatesOfParadise: "Note the subtle difference in 39:71 vs 39:73. For Hell: 'until they reach it, its gates are opened' (futihaat). For Paradise: 'until they reach it AND its gates have been opened' (wa futihaat with waw). Paradise gates are already open in anticipation and welcome!",
    sleepDeathConnection: "Verse 39:42 presents a profound connection between sleep and death - both involve Allah taking souls. Some return (sleep), some don't (death). This should make us reflect on each awakening as a new life.",
    quranEffect: "The physical response to Quran described in 39:23 (skin shivers then softens) is unique - showing the Quran's tangible impact on believers who truly engage with it."
  },

  linguisticFeatures: {
    features: [
      { feature: "يُكَوِّرُ", example: "Wraps", effect: "Form II verb suggesting spherical wrapping - night wrapped over day on a sphere" },
      { feature: "مُتَشَابِهًا مَّثَانِيَ", example: "Consistent, repeating", effect: "Two qualities of Quran - internal consistency and reinforcing repetition" },
      { feature: "تَقْشَعِرُّ", example: "Shiver/goosebumps", effect: "Intensified form IV - strong physical reaction to Quran" },
      { feature: "زُمَرًا", example: "In groups/throngs", effect: "Plural of zumrah - large organized groups, giving the surah its name" },
      { feature: "أَسْرَفُوا", example: "Transgressed/exceeded", effect: "Israf - going beyond limits, used compassionately before the hope of forgiveness" },
      { feature: "لَا تَقْنَطُوا", example: "Do not despair", effect: "Qunut - deep, despairing loss of hope - strictly prohibited" },
      { feature: "حَافِّينَ", example: "Surrounding", effect: "Active participle - angels continuously encircling the Throne" }
    ]
  },

  historicalContext: {
    period: "Late Makkan period, when persecution was intense and some Muslims considered emigration",
    themes: "The emphasis on sincerity (ikhlas) and rejection of intercession through idols directly confronted Meccan polytheism. The call to emigrate (39:10) prepared Muslims for the eventual Hijrah.",
    occasion: "Verse 39:53 was revealed for Muslims who had committed grave sins before Islam and feared they could never be forgiven. It provided immense hope and became one of the most beloved verses."
  },

  connectionToPrevious: {
    note: "Surah 39 (Az-Zumar) follows Surah 38 (Sad), which discussed prophets and their trials. Az-Zumar shifts focus to the fundamental distinction between sincere worship and polytheism, and the ultimate separation of humanity into two groups - those destined for Paradise and those for Hell."
  }
};

export default ONTOLOGY;
