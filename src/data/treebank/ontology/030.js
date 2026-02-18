/**
 * Surah Ar-Rum (30) - Ontology of Quranic Concepts
 * The Romans / The Byzantines
 * Theme: Prophecy of Roman victory, signs in creation, resurrection, divine wisdom
 */

export const ONTOLOGY = {
  surahId: 30,
  surahName: "Ar-Rum",
  surahNameArabic: "الروم",
  revelationType: "Makki",
  totalAyahs: 60,

  categories: {
    prophecyOfRomans: {
      name: "Prophecy of Roman Victory",
      nameArabic: "نبوءة انتصار الروم",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "غُلِبَتِ الرُّومُ", meaning: "The Romans have been defeated", explanation: "Byzantines defeated by Persians at the time of revelation", verseRef: "30:2" },
        { term: "فِي أَدْنَى الْأَرْضِ", meaning: "In the nearest land", explanation: "Area around Dead Sea - lowest point on earth", verseRef: "30:3" },
        { term: "سَيَغْلِبُونَ", meaning: "They will overcome", explanation: "Prophecy that Romans will win within a few years", verseRef: "30:3" },
        { term: "فِي بِضْعِ سِنِينَ", meaning: "Within three to nine years", explanation: "Specific timeframe of prophecy fulfillment", verseRef: "30:4" },
        { term: "يَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ", meaning: "On that day believers will rejoice", explanation: "Muslims happy as Romans (People of Book) defeat fire-worshipping Persians", verseRef: "30:4" },
        { term: "بِنَصْرِ اللَّهِ", meaning: "With the victory of Allah", explanation: "All victory comes from Allah", verseRef: "30:5" }
      ]
    },

    divinePromise: {
      name: "Divine Promise",
      nameArabic: "وعد الله",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَعْدَ اللَّهِ", meaning: "Promise of Allah", explanation: "Allah's promises never fail", verseRef: "30:6" },
        { term: "لَا يُخْلِفُ اللَّهُ وَعْدَهُ", meaning: "Allah does not fail in His promise", explanation: "Certainty of divine decree", verseRef: "30:6" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: "But most people do not know", explanation: "Majority lack true understanding", verseRef: "30:6" }
      ]
    },

    heedlessness: {
      name: "Heedlessness of Creation",
      nameArabic: "الغفلة عن الخلق",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "يَعْلَمُونَ ظَاهِرًا مِّنَ الْحَيَاةِ الدُّنْيَا", meaning: "They know the apparent of worldly life", explanation: "Know surface but miss deeper meaning", verseRef: "30:7" },
        { term: "وَهُمْ عَنِ الْآخِرَةِ هُمْ غَافِلُونَ", meaning: "About the Hereafter they are unaware", explanation: "Negligent of eternal reality", verseRef: "30:7" },
        { term: "أَوَلَمْ يَتَفَكَّرُوا فِي أَنفُسِهِمْ", meaning: "Have they not reflected within themselves", explanation: "Call to introspection", verseRef: "30:8" }
      ]
    },

    creationPurpose: {
      name: "Purpose of Creation",
      nameArabic: "الحكمة من الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "مَا خَلَقَ اللَّهُ... إِلَّا بِالْحَقِّ", meaning: "Allah created... only with truth", explanation: "Creation has purpose, not random", verseRef: "30:8" },
        { term: "وَأَجَلٍ مُّسَمًّى", meaning: "And an appointed term", explanation: "Everything has its time", verseRef: "30:8" },
        { term: "لِقَاءِ رَبِّهِمْ لَكَافِرُونَ", meaning: "Meeting with their Lord they disbelieve", explanation: "Deniers of resurrection", verseRef: "30:8" }
      ]
    },

    historicalLessons: {
      name: "Lessons from History",
      nameArabic: "العبر من التاريخ",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ", meaning: "Have they not traveled through the earth", explanation: "Travel to see fate of past nations", verseRef: "30:9" },
        { term: "كَانُوا أَشَدَّ مِنْهُمْ قُوَّةً", meaning: "They were greater than them in strength", explanation: "Past nations were mightier yet perished", verseRef: "30:9" },
        { term: "وَأَثَارُوا الْأَرْضَ وَعَمَرُوهَا", meaning: "They plowed the earth and built it up", explanation: "Advanced civilizations destroyed", verseRef: "30:9" },
        { term: "فَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ", meaning: "Allah did not wrong them", explanation: "They wronged themselves", verseRef: "30:9" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "تَقُومُ السَّاعَةُ", meaning: "The Hour will be established", explanation: "Certainty of Judgment Day", verseRef: "30:12" },
        { term: "يُبْلِسُ الْمُجْرِمُونَ", meaning: "The criminals will despair", explanation: "Hopelessness of disbelievers", verseRef: "30:12" },
        { term: "وَلَمْ يَكُن لَّهُم مِّن شُرَكَائِهِمْ شُفَعَاءُ", meaning: "No intercessors from their partners", explanation: "False gods cannot help", verseRef: "30:13" },
        { term: "يَوْمَ تَقُومُ السَّاعَةُ يَوْمَئِذٍ يَتَفَرَّقُونَ", meaning: "Day the Hour arrives - that Day they will separate", explanation: "Believers separated from disbelievers", verseRef: "30:14" },
        { term: "فِي رَوْضَةٍ يُحْبَرُونَ", meaning: "In a garden they will be delighted", explanation: "Paradise for believers", verseRef: "30:15" },
        { term: "فِي الْعَذَابِ مُحْضَرُونَ", meaning: "In punishment they will be brought", explanation: "Hell for disbelievers", verseRef: "30:16" }
      ]
    },

    glorificationTimes: {
      name: "Times of Glorification",
      nameArabic: "أوقات التسبيح",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "سُبْحَانَ اللَّهِ حِينَ تُمْسُونَ", meaning: "Glory to Allah in evening", explanation: "Maghrib and Isha prayers", verseRef: "30:17" },
        { term: "وَحِينَ تُصْبِحُونَ", meaning: "And in the morning", explanation: "Fajr prayer", verseRef: "30:17" },
        { term: "وَعَشِيًّا وَحِينَ تُظْهِرُونَ", meaning: "Afternoon and noon", explanation: "Asr and Dhuhr prayers", verseRef: "30:18" },
        { term: "الْحَمْدُ فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Praise in heavens and earth", explanation: "Universal praise belongs to Allah", verseRef: "30:18" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ", meaning: "He brings living from dead", explanation: "Life from lifeless matter", verseRef: "30:19" },
        { term: "وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ", meaning: "And brings dead from living", explanation: "Cycle of life and death", verseRef: "30:19" },
        { term: "وَيُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: "Revives earth after its death", explanation: "Earth comes alive after rain", verseRef: "30:19" },
        { term: "وَكَذَٰلِكَ تُخْرَجُونَ", meaning: "And thus you will be brought out", explanation: "Resurrection like earth's revival", verseRef: "30:19" }
      ]
    },

    humanCreation: {
      name: "Human Creation",
      nameArabic: "خلق الإنسان",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "خَلَقَكُم مِّن تُرَابٍ", meaning: "Created you from dust", explanation: "Adam's origin from earth", verseRef: "30:20" },
        { term: "ثُمَّ إِذَا أَنتُم بَشَرٌ تَنتَشِرُونَ", meaning: "Then you are human beings dispersing", explanation: "From dust to spread across earth", verseRef: "30:20" }
      ]
    },

    signOfMarriage: {
      name: "Sign of Marriage",
      nameArabic: "آية الزواج",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        { term: "خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا", meaning: "Created for you from yourselves mates", explanation: "Spouses from same human species", verseRef: "30:21" },
        { term: "لِّتَسْكُنُوا إِلَيْهَا", meaning: "That you may find tranquility in them", explanation: "Marriage brings peace and rest", verseRef: "30:21" },
        { term: "مَّوَدَّةً وَرَحْمَةً", meaning: "Love and mercy", explanation: "Two pillars of marriage", verseRef: "30:21" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ", meaning: "Indeed in that are signs", explanation: "Marriage is sign of divine wisdom", verseRef: "30:21" }
      ]
    },

    signsOfDiversity: {
      name: "Signs of Diversity",
      nameArabic: "آيات التنوع",
      color: "#8B5CF6",
      icon: "Users",
      concepts: [
        { term: "خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Creation of heavens and earth", explanation: "Vastness of cosmic creation", verseRef: "30:22" },
        { term: "اخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ", meaning: "Diversity of your languages and colors", explanation: "Human diversity is divine sign", verseRef: "30:22" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّلْعَالِمِينَ", meaning: "Signs for those of knowledge", explanation: "Scholars recognize these signs", verseRef: "30:22" }
      ]
    },

    signsOfSleep: {
      name: "Signs of Sleep",
      nameArabic: "آية النوم",
      color: "#22C55E",
      icon: "Moon",
      concepts: [
        { term: "مَنَامُكُم بِاللَّيْلِ وَالنَّهَارِ", meaning: "Your sleep by night and day", explanation: "Rest is divine gift", verseRef: "30:23" },
        { term: "وَابْتِغَاؤُكُم مِّن فَضْلِهِ", meaning: "And your seeking from His bounty", explanation: "Work to earn livelihood", verseRef: "30:23" }
      ]
    },

    signsOfLightning: {
      name: "Signs of Lightning and Rain",
      nameArabic: "آيات البرق والمطر",
      color: "#06B6D4",
      icon: "Zap",
      concepts: [
        { term: "يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا", meaning: "Shows you lightning as fear and hope", explanation: "Fear of storm, hope for rain", verseRef: "30:24" },
        { term: "وَيُنَزِّلُ مِنَ السَّمَاءِ مَاءً", meaning: "And sends down rain from sky", explanation: "Water cycle controlled by Allah", verseRef: "30:24" },
        { term: "فَيُحْيِي بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: "Gives life to earth after its death", explanation: "Rain revives barren land", verseRef: "30:24" }
      ]
    },

    cosmicStability: {
      name: "Cosmic Stability",
      nameArabic: "استقرار الكون",
      color: "#3B82F6",
      icon: "Globe",
      concepts: [
        { term: "أَن تَقُومَ السَّمَاءُ وَالْأَرْضُ بِأَمْرِهِ", meaning: "Heaven and earth stand by His command", explanation: "Universe held by divine order", verseRef: "30:25" },
        { term: "ثُمَّ إِذَا دَعَاكُمْ دَعْوَةً مِّنَ الْأَرْضِ", meaning: "Then when He calls you from earth", explanation: "Single call for resurrection", verseRef: "30:25" },
        { term: "إِذَا أَنتُمْ تَخْرُجُونَ", meaning: "You will come out", explanation: "Emerging from graves", verseRef: "30:25" }
      ]
    },

    divineOwnership: {
      name: "Divine Ownership",
      nameArabic: "الملكية الإلهية",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَلَهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: "To Him belongs whoever is in heavens and earth", explanation: "All creation belongs to Allah", verseRef: "30:26" },
        { term: "كُلٌّ لَّهُ قَانِتُونَ", meaning: "All are devoutly obedient to Him", explanation: "Universal submission to Allah", verseRef: "30:26" },
        { term: "يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ", meaning: "He originates creation then repeats it", explanation: "Creation and recreation easy for Allah", verseRef: "30:27" },
        { term: "وَهُوَ أَهْوَنُ عَلَيْهِ", meaning: "And that is easy for Him", explanation: "Recreation easier than first creation", verseRef: "30:27" },
        { term: "الْمَثَلُ الْأَعْلَىٰ", meaning: "The highest description", explanation: "Most exalted attributes for Allah", verseRef: "30:27" }
      ]
    },

    monotheism: {
      name: "Pure Monotheism",
      nameArabic: "التوحيد الخالص",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "ضَرَبَ لَكُم مَّثَلًا مِّنْ أَنفُسِكُمْ", meaning: "He presents an example from yourselves", explanation: "Analogy about equal partners", verseRef: "30:28" },
        { term: "هَل لَّكُم مِّن مَّا مَلَكَتْ أَيْمَانُكُم مِّن شُرَكَاءَ", meaning: "Do you have among your slaves any partners", explanation: "You don't share with slaves, why give Allah partners?", verseRef: "30:28" },
        { term: "فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا", meaning: "Direct your face toward religion inclining to truth", explanation: "Focus on pure monotheism", verseRef: "30:30" },
        { term: "فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا", meaning: "The fitrah of Allah upon which He created mankind", explanation: "Natural disposition toward monotheism", verseRef: "30:30" },
        { term: "لَا تَبْدِيلَ لِخَلْقِ اللَّهِ", meaning: "No change in the creation of Allah", explanation: "Fitrah cannot be permanently altered", verseRef: "30:30" },
        { term: "ذَٰلِكَ الدِّينُ الْقَيِّمُ", meaning: "That is the correct religion", explanation: "Islam is the straight religion", verseRef: "30:30" }
      ]
    },

    turningToAllah: {
      name: "Turning to Allah",
      nameArabic: "الإنابة إلى الله",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "مُنِيبِينَ إِلَيْهِ", meaning: "Turning in repentance to Him", explanation: "Constant return to Allah", verseRef: "30:31" },
        { term: "وَاتَّقُوهُ", meaning: "And fear Him", explanation: "God-consciousness in actions", verseRef: "30:31" },
        { term: "وَأَقِيمُوا الصَّلَاةَ", meaning: "And establish prayer", explanation: "Prayer as pillar of faith", verseRef: "30:31" },
        { term: "وَلَا تَكُونُوا مِنَ الْمُشْرِكِينَ", meaning: "And do not be of the polytheists", explanation: "Warning against shirk", verseRef: "30:31" }
      ]
    },

    divisionInReligion: {
      name: "Division in Religion",
      nameArabic: "التفرق في الدين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "مِنَ الَّذِينَ فَرَّقُوا دِينَهُمْ", meaning: "Of those who divided their religion", explanation: "Sectarianism condemned", verseRef: "30:32" },
        { term: "وَكَانُوا شِيَعًا", meaning: "And became sects", explanation: "Breaking into factions", verseRef: "30:32" },
        { term: "كُلُّ حِزْبٍ بِمَا لَدَيْهِمْ فَرِحُونَ", meaning: "Every party rejoicing in what they have", explanation: "Each group thinks they're right", verseRef: "30:32" }
      ]
    },

    humanNature: {
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      color: "#EC4899",
      icon: "Users",
      concepts: [
        { term: "وَإِذَا مَسَّ النَّاسَ ضُرٌّ دَعَوْا رَبَّهُم", meaning: "When affliction touches people they call their Lord", explanation: "Humans turn to Allah in hardship", verseRef: "30:33" },
        { term: "مُّنِيبِينَ إِلَيْهِ", meaning: "Turning to Him in repentance", explanation: "Sincere during difficulty", verseRef: "30:33" },
        { term: "ثُمَّ إِذَا أَذَاقَهُم مِّنْهُ رَحْمَةً", meaning: "Then when He lets them taste mercy", explanation: "When relief comes", verseRef: "30:33" },
        { term: "إِذَا فَرِيقٌ مِّنْهُم بِرَبِّهِمْ يُشْرِكُونَ", meaning: "A party of them associate partners with their Lord", explanation: "Ingratitude after blessing", verseRef: "30:33" },
        { term: "الْإِنسَانُ كَفُورٌ", meaning: "Man is ungrateful", explanation: "Tendency toward ingratitude", verseRef: "30:34" }
      ]
    },

    rightsAndGiving: {
      name: "Rights and Giving",
      nameArabic: "الحقوق والإنفاق",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "فَآتِ ذَا الْقُرْبَىٰ حَقَّهُ", meaning: "So give the relative his right", explanation: "Rights of kinship", verseRef: "30:38" },
        { term: "وَالْمِسْكِينَ", meaning: "And the needy", explanation: "Rights of the poor", verseRef: "30:38" },
        { term: "وَابْنَ السَّبِيلِ", meaning: "And the traveler", explanation: "Rights of wayfarers", verseRef: "30:38" },
        { term: "ذَٰلِكَ خَيْرٌ لِّلَّذِينَ يُرِيدُونَ وَجْهَ اللَّهِ", meaning: "That is better for those who desire Allah's face", explanation: "Give for Allah's sake alone", verseRef: "30:38" }
      ]
    },

    ribaVsZakat: {
      name: "Riba vs Zakat",
      nameArabic: "الربا مقابل الزكاة",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        { term: "وَمَا آتَيْتُم مِّن رِّبًا", meaning: "And what you give for interest", explanation: "Money lent for increase", verseRef: "30:39" },
        { term: "لِّيَرْبُوَ فِي أَمْوَالِ النَّاسِ", meaning: "To increase within the wealth of people", explanation: "Riba exploits others", verseRef: "30:39" },
        { term: "فَلَا يَرْبُو عِندَ اللَّهِ", meaning: "Does not increase with Allah", explanation: "No blessing in interest", verseRef: "30:39" },
        { term: "وَمَا آتَيْتُم مِّن زَكَاةٍ", meaning: "But what you give in zakah", explanation: "Purifying charity", verseRef: "30:39" },
        { term: "تُرِيدُونَ وَجْهَ اللَّهِ", meaning: "Desiring the face of Allah", explanation: "Sincere intention in giving", verseRef: "30:39" },
        { term: "فَأُولَٰئِكَ هُمُ الْمُضْعِفُونَ", meaning: "Those are the multipliers", explanation: "Zakat brings multiplied reward", verseRef: "30:39" }
      ]
    },

    divineProvision: {
      name: "Divine Provision",
      nameArabic: "الرزق الإلهي",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "اللَّهُ الَّذِي خَلَقَكُمْ ثُمَّ رَزَقَكُمْ", meaning: "Allah created you then provided for you", explanation: "Creator is Provider", verseRef: "30:40" },
        { term: "ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ", meaning: "Then causes death then gives life", explanation: "Complete cycle of existence", verseRef: "30:40" },
        { term: "هَلْ مِن شُرَكَائِكُم مَّن يَفْعَلُ مِن ذَٰلِكُم مِّن شَيْءٍ", meaning: "Can any of your partners do any of that?", explanation: "Idols cannot create or provide", verseRef: "30:40" }
      ]
    },

    corruptionOnEarth: {
      name: "Corruption on Earth",
      nameArabic: "الفساد في الأرض",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ", meaning: "Corruption appeared in land and sea", explanation: "Environmental and moral corruption", verseRef: "30:41" },
        { term: "بِمَا كَسَبَتْ أَيْدِي النَّاسِ", meaning: "Because of what people's hands have earned", explanation: "Humans cause corruption", verseRef: "30:41" },
        { term: "لِيُذِيقَهُم بَعْضَ الَّذِي عَمِلُوا", meaning: "To let them taste part of what they did", explanation: "Consequences of actions", verseRef: "30:41" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: "Perhaps they will return", explanation: "Hardship as means to repentance", verseRef: "30:41" }
      ]
    },

    windSigns: {
      name: "Signs in Wind and Rain",
      nameArabic: "آيات الرياح والمطر",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ", meaning: "Allah sends the winds", explanation: "Wind controlled by Allah", verseRef: "30:46" },
        { term: "فَتُثِيرُ سَحَابًا", meaning: "And they stir up clouds", explanation: "Winds gather clouds", verseRef: "30:46" },
        { term: "فَيَبْسُطُهُ فِي السَّمَاءِ كَيْفَ يَشَاءُ", meaning: "He spreads it in sky as He wills", explanation: "Allah shapes the clouds", verseRef: "30:48" },
        { term: "وَيَجْعَلُهُ كِسَفًا", meaning: "And makes it fragments", explanation: "Breaking clouds into pieces", verseRef: "30:48" },
        { term: "فَتَرَى الْوَدْقَ يَخْرُجُ مِنْ خِلَالِهِ", meaning: "You see rain emerge from within it", explanation: "Rain from within clouds", verseRef: "30:48" },
        { term: "وَمِنْ آيَاتِهِ أَن يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ", meaning: "And of His signs is that He sends winds as good tidings", explanation: "Winds bring news of rain", verseRef: "30:46" }
      ]
    },

    resurrectionProof: {
      name: "Proof of Resurrection",
      nameArabic: "دليل البعث",
      color: "#8B5CF6",
      icon: "Sun",
      concepts: [
        { term: "فَانظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ", meaning: "Look at the effects of Allah's mercy", explanation: "Rain's effect on earth", verseRef: "30:50" },
        { term: "كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: "How He gives life to earth after its death", explanation: "Dead earth revived by rain", verseRef: "30:50" },
        { term: "إِنَّ ذَٰلِكَ لَمُحْيِي الْمَوْتَىٰ", meaning: "Indeed that One gives life to the dead", explanation: "Same power will resurrect humans", verseRef: "30:50" },
        { term: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: "And He is over all things competent", explanation: "Unlimited divine power", verseRef: "30:50" }
      ]
    },

    hardnessOfHeart: {
      name: "Hardness of Heart",
      nameArabic: "قسوة القلوب",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلَئِنْ أَرْسَلْنَا رِيحًا فَرَأَوْهُ مُصْفَرًّا", meaning: "If We send wind and they see crops yellow", explanation: "Wind can destroy crops", verseRef: "30:51" },
        { term: "لَّظَلُّوا مِن بَعْدِهِ يَكْفُرُونَ", meaning: "They would continue disbelieving", explanation: "Nothing changes stubborn hearts", verseRef: "30:51" },
        { term: "فَإِنَّكَ لَا تُسْمِعُ الْمَوْتَىٰ", meaning: "You cannot make the dead hear", explanation: "Spiritually dead cannot hear truth", verseRef: "30:52" },
        { term: "وَلَا تُسْمِعُ الصُّمَّ الدُّعَاءَ", meaning: "Nor make the deaf hear the call", explanation: "Those who refuse to listen", verseRef: "30:52" },
        { term: "وَمَا أَنتَ بِهَادِ الْعُمْيِ عَن ضَلَالَتِهِمْ", meaning: "Nor can you guide the blind from their misguidance", explanation: "Cannot force guidance", verseRef: "30:53" }
      ]
    },

    stagesOfLife: {
      name: "Stages of Human Life",
      nameArabic: "مراحل حياة الإنسان",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "اللَّهُ الَّذِي خَلَقَكُم مِّن ضَعْفٍ", meaning: "Allah created you from weakness", explanation: "Beginning as helpless infant", verseRef: "30:54" },
        { term: "ثُمَّ جَعَلَ مِن بَعْدِ ضَعْفٍ قُوَّةً", meaning: "Then made after weakness strength", explanation: "Growing to youth and strength", verseRef: "30:54" },
        { term: "ثُمَّ جَعَلَ مِن بَعْدِ قُوَّةٍ ضَعْفًا وَشَيْبَةً", meaning: "Then after strength weakness and white hair", explanation: "Decline into old age", verseRef: "30:54" },
        { term: "يَخْلُقُ مَا يَشَاءُ", meaning: "He creates what He wills", explanation: "Allah determines each person's span", verseRef: "30:54" }
      ]
    },

    oathsOfDisbelievers: {
      name: "Oaths of Disbelievers",
      nameArabic: "أيمان الكافرين",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ", meaning: "Day Hour arrives, criminals will swear", explanation: "Disbelievers swear falsely on Judgment Day", verseRef: "30:55" },
        { term: "مَا لَبِثُوا غَيْرَ سَاعَةٍ", meaning: "They remained not but an hour", explanation: "Life seemed so brief", verseRef: "30:55" },
        { term: "كَذَٰلِكَ كَانُوا يُؤْفَكُونَ", meaning: "Thus were they deluded", explanation: "Always turning from truth", verseRef: "30:55" },
        { term: "وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَالْإِيمَانَ", meaning: "But those given knowledge and faith will say", explanation: "Believers correct them", verseRef: "30:56" },
        { term: "لَقَدْ لَبِثْتُمْ فِي كِتَابِ اللَّهِ إِلَىٰ يَوْمِ الْبَعْثِ", meaning: "You remained in Allah's decree until Day of Resurrection", explanation: "Full duration was recorded", verseRef: "30:56" }
      ]
    },

    finalExhortation: {
      name: "Final Exhortation",
      nameArabic: "الموعظة الأخيرة",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "فَيَوْمَئِذٍ لَّا يَنفَعُ الَّذِينَ ظَلَمُوا مَعْذِرَتُهُمْ", meaning: "That Day, the excuse of wrongdoers will not benefit them", explanation: "No excuses accepted then", verseRef: "30:57" },
        { term: "وَلَا هُمْ يُسْتَعْتَبُونَ", meaning: "Nor will they be asked to appease", explanation: "No chance to make amends", verseRef: "30:57" },
        { term: "وَلَقَدْ ضَرَبْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ مِن كُلِّ مَثَلٍ", meaning: "We presented for people in this Quran every example", explanation: "Complete guidance given", verseRef: "30:58" },
        { term: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: "So be patient - Allah's promise is truth", explanation: "Command for patience", verseRef: "30:60" },
        { term: "وَلَا يَسْتَخِفَّنَّكَ الَّذِينَ لَا يُوقِنُونَ", meaning: "And let not those who have no certainty unsettle you", explanation: "Don't be swayed by doubters", verseRef: "30:60" }
      ]
    }
  },

  relationships: [
    { from: "غُلِبَتِ الرُّومُ", to: "سَيَغْلِبُونَ", type: "prophecy", description: "Defeat followed by promised victory" },
    { from: "فِطْرَتَ اللَّهِ", to: "الدِّينُ الْقَيِّمُ", type: "equivalence", description: "Natural disposition equals true religion" },
    { from: "يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا", to: "لَمُحْيِي الْمَوْتَىٰ", type: "analogy", description: "Earth revival proves human resurrection" },
    { from: "الرِّبا", to: "الزَّكَاة", type: "contrast", description: "Interest vs purifying charity" },
    { from: "مَّوَدَّةً", to: "رَحْمَةً", type: "complement", description: "Love and mercy together in marriage" },
    { from: "ضُرٌّ", to: "رَحْمَةً", type: "transition", description: "Hardship makes them remember, ease makes them forget" },
    { from: "ظَهَرَ الْفَسَادُ", to: "بِمَا كَسَبَتْ أَيْدِي النَّاسِ", type: "causation", description: "Human actions cause corruption" },
    { from: "ضَعْفٍ", to: "قُوَّةً", to2: "ضَعْفًا وَشَيْبَةً", type: "progression", description: "Cycle of human life stages" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Roman Prophecy", verses: "30:1-7", description: "Prophecy of Roman victory and divine promise" },
      { stage: 2, theme: "Historical Reflection", verses: "30:8-10", description: "Lessons from destroyed nations" },
      { stage: 3, theme: "Judgment Day", verses: "30:11-16", description: "Description of resurrection and separation" },
      { stage: 4, theme: "Glorification Times", verses: "30:17-19", description: "Times of prayer and praise" },
      { stage: 5, theme: "Signs in Creation", verses: "30:20-27", description: "Human creation, marriage, diversity, cosmic signs" },
      { stage: 6, theme: "Pure Monotheism", verses: "30:28-32", description: "Fitrah and warning against polytheism" },
      { stage: 7, theme: "Human Weakness", verses: "30:33-40", description: "Ingratitude, rights, riba vs zakat" },
      { stage: 8, theme: "Corruption", verses: "30:41-45", description: "Corruption from human hands, call to return" },
      { stage: 9, theme: "Wind and Rain", verses: "30:46-50", description: "Signs of mercy in rain" },
      { stage: 10, theme: "Hard Hearts", verses: "30:51-54", description: "Stubborn disbelievers and life stages" },
      { stage: 11, theme: "Final Accounting", verses: "30:55-60", description: "Day of Judgment and call for patience" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Trust divine promises", how: "Allah's word never fails - have confidence in His decree", verse: "30:6" },
      { principle: "Maintain natural state", how: "Don't let society corrupt your fitrah toward monotheism", verse: "30:30" },
      { principle: "Build loving marriages", how: "Cultivate mawaddah (love) and rahmah (mercy) with spouse", verse: "30:21" },
      { principle: "Appreciate diversity", how: "See different languages and colors as divine signs, not divisions", verse: "30:22" },
      { principle: "Give to relatives", how: "Fulfill rights of kinship, poor, and travelers", verse: "30:38" },
      { principle: "Avoid riba", how: "Interest brings no blessing; zakat multiplies reward", verse: "30:39" },
      { principle: "Reflect on nature", how: "See rain reviving earth as proof of resurrection", verse: "30:50" },
      { principle: "Be grateful in ease", how: "Don't forget Allah when comfortable - remember Him always", verse: "30:33-34" },
      { principle: "Stay patient", how: "Don't be swayed by those who lack certainty", verse: "30:60" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Verified Prophecy",
    insight: "Surah Ar-Rum opens with one of the Quran's most specific and verifiable prophecies. When revealed around 615 CE, the Byzantines (Romans) had just suffered a devastating defeat to the Sassanid Persians near the Dead Sea - which the Quran notes is 'the lowest land' (أَدْنَى الْأَرْضِ), geographically accurate as the Dead Sea region is the lowest point on earth. The prophecy stated Romans would be victorious 'within a few years' (بِضْعِ سِنِينَ - 3-9 years in Arabic). In 622 CE, Emperor Heraclius launched his counter-offensive, and by 627 CE the Byzantines achieved complete victory at the Battle of Nineveh. The surah then pivots to the greater theme: just as Allah's promise about the Romans was fulfilled, so too will His promise of resurrection be fulfilled. The signs in creation - marriage, diversity, rain reviving dead earth - all point to the same truth: Allah's power over creation and His promise of resurrection are equally certain."
  },

  historicalContext: {
    note: "This Makki surah was revealed around 615 CE during a period of regional upheaval. The Sassanid Persian Empire had defeated the Byzantine Romans, capturing Jerusalem in 614 CE. Arab pagans mocked Muslims, as they favored the fire-worshipping Persians over the Christian Romans (People of the Book). This surah not only prophesied Roman victory but connected it to the certainty of resurrection - if you doubt the latter, remember how precisely the former was fulfilled. The surah's name 'Ar-Rum' (The Romans) emphasizes this unique historical prophecy."
  },

  linguisticFeatures: {
    features: [
      { feature: "بِضْعِ", example: "Three to nine", effect: "Specific Arabic term for number between 3-9" },
      { feature: "أَدْنَى", example: "Nearest/lowest", effect: "Double meaning - geographically lowest and militarily nearest" },
      { feature: "فِطْرَتَ اللَّهِ", example: "Allah's fitrah", effect: "Natural disposition - origin of theological term" },
      { feature: "مَّوَدَّةً وَرَحْمَةً", example: "Love and mercy", effect: "Two distinct Arabic concepts for marital bond" },
      { feature: "الْفَسَادُ", example: "Corruption", effect: "Encompasses moral, social, and environmental corruption" },
      { feature: "مُضْعِفُونَ", example: "Multipliers", effect: "Active participle - those who multiply their rewards" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "30:3", topic: "Lowest land", note: "Dead Sea area is indeed lowest point on earth's surface" },
      { verse: "30:22", topic: "Diversity", note: "Human genetic diversity in colors and languages reflects common origin" },
      { verse: "30:24", topic: "Lightning", note: "Water cycle and electrical discharge in clouds described" },
      { verse: "30:41", topic: "Corruption", note: "Environmental degradation from human activity - ecological principle" },
      { verse: "30:48", topic: "Cloud formation", note: "Process of cloud formation and rain production accurately depicted" },
      { verse: "30:54", topic: "Life stages", note: "Biological progression from infancy through youth to old age" }
    ]
  }
};

export default ONTOLOGY;
