/**
 * Surah Hud (11) - Ontology of Quranic Concepts
 * Hud
 * Theme: Prophet Hud and 'Ad, prophets' stories (Nuh, Salih, Ibrahim, Lut, Shu'ayb, Musa), steadfastness, punishment of deniers
 */

export const ONTOLOGY = {
  surahId: 11,
  surahName: "Hud",
  surahNameArabic: "هود",
  revelationType: "Makki",
  totalAyahs: 123,

  categories: {
    quranNature: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Nature of the Quran",
      nameArabic: "طبيعة القرآن",
      concepts: [
        { term: "كِتَابٌ أُحْكِمَتْ آيَاتُهُ", meaning: "A Book whose verses are perfected", explanation: "Precision of Quran", verseRef: "11:1" },
        { term: "ثُمَّ فُصِّلَتْ", meaning: "Then explained in detail", explanation: "Detailed guidance", verseRef: "11:1" },
        { term: "مِن لَّدُنْ حَكِيمٍ خَبِيرٍ", meaning: "From One Wise and Acquainted", explanation: "Divine source", verseRef: "11:1" },
        { term: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ", meaning: "That you worship none but Allah", explanation: "Central message", verseRef: "11:2" }
      ]
    },

    istighfarBlessings: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Benefits of Istighfar",
      nameArabic: "فوائد الاستغفار",
      concepts: [
        { term: "اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ", meaning: "Seek forgiveness then repent to Him", explanation: "Two-step process", verseRef: "11:3" },
        { term: "يُمَتِّعْكُم مَّتَاعًا حَسَنًا", meaning: "He will let you enjoy good provision", explanation: "Worldly benefit", verseRef: "11:3" },
        { term: "يُؤْتِ كُلَّ ذِي فَضْلٍ فَضْلَهُ", meaning: "Give every doer of favor his favor", explanation: "Reward for good", verseRef: "11:3" },
        { term: "يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا", meaning: "Send rain upon you in abundance", explanation: "Rain blessing", verseRef: "11:52" },
        { term: "وَيَزِدْكُمْ قُوَّةً إِلَىٰ قُوَّتِكُمْ", meaning: "Increase you in strength", explanation: "Physical blessing", verseRef: "11:52" }
      ]
    },

    nuhStory: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Story of Nuh",
      nameArabic: "قصة نوح",
      concepts: [
        { term: "أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: "We sent Nuh to his people", explanation: "Mission begins", verseRef: "11:25" },
        { term: "إِنِّي لَكُمْ نَذِيرٌ مُّبِينٌ", meaning: "Indeed I am a clear warner", explanation: "Nuh's role", verseRef: "11:25" },
        { term: "وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا", meaning: "Construct the ship under Our observation", explanation: "Building the Ark", verseRef: "11:37" },
        { term: "احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ", meaning: "Load therein two of every kind", explanation: "Boarding the Ark", verseRef: "11:40" },
        { term: "بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا", meaning: "In the name of Allah is its course and anchorage", explanation: "Faith during journey", verseRef: "11:41" },
        { term: "يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ", meaning: "O Nuh, he is not of your family", explanation: "About his disbelieving son", verseRef: "11:46" },
        { term: "اسْتَوَتْ عَلَى الْجُودِيِّ", meaning: "It rested on Mount Judi", explanation: "Ark's final resting place", verseRef: "11:44" }
      ]
    },

    hudAndAd: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Hud and the People of 'Ad",
      nameArabic: "هود وقوم عاد",
      concepts: [
        { term: "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا", meaning: "And to 'Ad their brother Hud", explanation: "Prophet from among them", verseRef: "11:50" },
        { term: "يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ", meaning: "O my people, worship Allah, you have no god but Him", explanation: "Core message", verseRef: "11:50" },
        { term: "إِنْ أَنتُمْ إِلَّا مُفْتَرُونَ", meaning: "You are only fabricators", explanation: "'Ad's accusation", verseRef: "11:50" },
        { term: "إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم", meaning: "I place my trust in Allah, my Lord and your Lord", explanation: "Hud's tawakkul", verseRef: "11:56" },
        { term: "مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا", meaning: "There is no creature but He holds its forelock", explanation: "Allah's complete control", verseRef: "11:56" },
        { term: "أَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا", meaning: "We sent upon them a screaming wind", explanation: "Punishment of 'Ad", verseRef: "11:58 (ref 41:16)" },
        { term: "أَلَا إِنَّ عَادًا كَفَرُوا رَبَّهُمْ", meaning: "Unquestionably, 'Ad denied their Lord", explanation: "Cause of destruction", verseRef: "11:60" },
        { term: "أَلَا بُعْدًا لِّعَادٍ قَوْمِ هُودٍ", meaning: "Away with 'Ad, the people of Hud", explanation: "Final destruction", verseRef: "11:60" }
      ]
    },

    salihAndThamud: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Salih and the People of Thamud",
      nameArabic: "صالح وقوم ثمود",
      concepts: [
        { term: "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا", meaning: "And to Thamud their brother Salih", explanation: "Prophet from among them", verseRef: "11:61" },
        { term: "هُوَ أَنشَأَكُم مِّنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا", meaning: "He produced you from earth and settled you in it", explanation: "Reminder of origins", verseRef: "11:61" },
        { term: "هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً", meaning: "This is the she-camel of Allah as a sign", explanation: "The miraculous camel", verseRef: "11:64" },
        { term: "فَعَقَرُوهَا", meaning: "But they hamstrung her", explanation: "Thamud's crime", verseRef: "11:65" },
        { term: "تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ", meaning: "Enjoy yourselves in your homes for three days", explanation: "Warning before punishment", verseRef: "11:65" },
        { term: "أَخَذَتْهُمُ الصَّيْحَةُ", meaning: "The shriek seized them", explanation: "Punishment", verseRef: "11:67" },
        { term: "كَأَن لَّمْ يَغْنَوْا فِيهَا", meaning: "As if they had never prospered therein", explanation: "Complete destruction", verseRef: "11:68" }
      ]
    },

    ibrahimStory: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Story of Ibrahim",
      nameArabic: "قصة إبراهيم",
      concepts: [
        { term: "جَاءَتْ رُسُلُنَا إِبْرَاهِيمَ بِالْبُشْرَىٰ", meaning: "Our messengers came to Ibrahim with good tidings", explanation: "Angels' visit", verseRef: "11:69" },
        { term: "قَالُوا سَلَامًا ۖ قَالَ سَلَامٌ", meaning: "They said 'Peace', he said 'Peace'", explanation: "Greeting exchange", verseRef: "11:69" },
        { term: "فَجَاءَ بِعِجْلٍ حَنِيذٍ", meaning: "He brought a roasted calf", explanation: "Ibrahim's hospitality", verseRef: "11:69" },
        { term: "فَلَمَّا رَأَىٰ أَيْدِيَهُمْ لَا تَصِلُ إِلَيْهِ نَكِرَهُمْ", meaning: "When he saw their hands not reaching for it, he mistrusted them", explanation: "Sensing something unusual", verseRef: "11:70" },
        { term: "لَا تَخَفْ إِنَّا أُرْسِلْنَا إِلَىٰ قَوْمِ لُوطٍ", meaning: "Fear not, we are sent to the people of Lut", explanation: "Angels' mission revealed", verseRef: "11:70" },
        { term: "فَبَشَّرْنَاهَا بِإِسْحَاقَ", meaning: "So We gave her good tidings of Ishaq", explanation: "Promise of a son", verseRef: "11:71" },
        { term: "وَمِن وَرَاءِ إِسْحَاقَ يَعْقُوبَ", meaning: "And after Ishaq, Ya'qub", explanation: "Promise of grandson", verseRef: "11:71" },
        { term: "يُجَادِلُنَا فِي قَوْمِ لُوطٍ", meaning: "He argued with Us concerning the people of Lut", explanation: "Ibrahim's compassion", verseRef: "11:74" },
        { term: "إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ أَوَّاهٌ مُّنِيبٌ", meaning: "Indeed Ibrahim was forbearing, grieving, and returning", explanation: "Ibrahim's qualities", verseRef: "11:75" }
      ]
    },

    lutStory: {
      color: '#EF4444',
      icon: 'Users',
      name: "Story of Lut",
      nameArabic: "قصة لوط",
      concepts: [
        { term: "وَلَمَّا جَاءَتْ رُسُلُنَا لُوطًا سِيءَ بِهِمْ", meaning: "When Our messengers came to Lut, he was distressed", explanation: "Lut's concern", verseRef: "11:77" },
        { term: "وَضَاقَ بِهِمْ ذَرْعًا", meaning: "He was in great difficulty", explanation: "His anxiety", verseRef: "11:77" },
        { term: "هَٰؤُلَاءِ بَنَاتِي هُنَّ أَطْهَرُ لَكُمْ", meaning: "These are my daughters, they are purer for you", explanation: "Offering lawful marriage", verseRef: "11:78" },
        { term: "لَوْ أَنَّ لِي بِكُمْ قُوَّةً", meaning: "If only I had power against you", explanation: "Lut's frustration", verseRef: "11:80" },
        { term: "أَوْ آوِي إِلَىٰ رُكْنٍ شَدِيدٍ", meaning: "Or could take refuge in a strong support", explanation: "Seeking help", verseRef: "11:80" },
        { term: "إِنَّا رُسُلُ رَبِّكَ لَن يَصِلُوا إِلَيْكَ", meaning: "We are messengers of your Lord, they will not reach you", explanation: "Angels reveal identity", verseRef: "11:81" },
        { term: "فَأَسْرِ بِأَهْلِكَ بِقِطْعٍ مِّنَ اللَّيْلِ", meaning: "Travel with your family in part of the night", explanation: "Command to leave", verseRef: "11:81" },
        { term: "جَعَلْنَا عَالِيَهَا سَافِلَهَا", meaning: "We made its highest part its lowest", explanation: "City overturned", verseRef: "11:82" },
        { term: "وَأَمْطَرْنَا عَلَيْهَا حِجَارَةً مِّن سِجِّيلٍ", meaning: "And rained upon them stones of baked clay", explanation: "Punishment", verseRef: "11:82" }
      ]
    },

    shuaybAndMadyan: {
      color: '#10B981',
      icon: 'Book',
      name: "Shu'ayb and the People of Madyan",
      nameArabic: "شعيب وقوم مدين",
      concepts: [
        { term: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا", meaning: "And to Madyan their brother Shu'ayb", explanation: "Prophet from among them", verseRef: "11:84" },
        { term: "اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ", meaning: "Worship Allah, you have no god but Him", explanation: "Core message", verseRef: "11:84" },
        { term: "وَلَا تَنقُصُوا الْمِكْيَالَ وَالْمِيزَانَ", meaning: "Do not decrease the measure and weight", explanation: "Economic justice", verseRef: "11:84" },
        { term: "وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ", meaning: "Give full measure and weight in justice", explanation: "Fair dealings", verseRef: "11:85" },
        { term: "وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ", meaning: "Do not deprive people of their due", explanation: "Rights of others", verseRef: "11:85" },
        { term: "وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ", meaning: "Do not commit abuse on earth, spreading corruption", explanation: "Against corruption", verseRef: "11:85" },
        { term: "بَقِيَّتُ اللَّهِ خَيْرٌ لَّكُمْ", meaning: "What remains from Allah is better for you", explanation: "Lawful provision better", verseRef: "11:86" },
        { term: "أَخَذَتْهُمُ الرَّجْفَةُ", meaning: "The earthquake seized them", explanation: "Punishment of Madyan", verseRef: "11:94" }
      ]
    },

    musaAndFiraun: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Musa and Fir'aun",
      nameArabic: "موسى وفرعون",
      concepts: [
        { term: "أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا وَسُلْطَانٍ مُّبِينٍ", meaning: "We sent Musa with Our signs and clear authority", explanation: "Musa's mission", verseRef: "11:96" },
        { term: "إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ", meaning: "To Fir'aun and his establishment", explanation: "Target audience", verseRef: "11:97" },
        { term: "فَاتَّبَعُوا أَمْرَ فِرْعَوْنَ", meaning: "But they followed the command of Fir'aun", explanation: "Blind following", verseRef: "11:97" },
        { term: "وَمَا أَمْرُ فِرْعَوْنَ بِرَشِيدٍ", meaning: "And the command of Fir'aun was not right", explanation: "Fir'aun's misguidance", verseRef: "11:97" },
        { term: "يَقْدُمُ قَوْمَهُ يَوْمَ الْقِيَامَةِ", meaning: "He will precede his people on Day of Resurrection", explanation: "Leading to Hell", verseRef: "11:98" },
        { term: "فَأَوْرَدَهُمُ النَّارَ", meaning: "And he will lead them to the Fire", explanation: "Consequence of following", verseRef: "11:98" },
        { term: "وَبِئْسَ الْوِرْدُ الْمَوْرُودُ", meaning: "Wretched is the destination to which they are led", explanation: "Hellfire described", verseRef: "11:98" }
      ]
    },

    steadfastnessCommand: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Command to Be Steadfast",
      nameArabic: "الأمر بالاستقامة",
      concepts: [
        { term: "فَاسْتَقِمْ كَمَا أُمِرْتَ", meaning: "So remain steadfast as you have been commanded", explanation: "Central command", verseRef: "11:112" },
        { term: "وَمَن تَابَ مَعَكَ", meaning: "And those who turn in repentance with you", explanation: "Applies to believers too", verseRef: "11:112" },
        { term: "وَلَا تَطْغَوْا", meaning: "And do not transgress", explanation: "Warning against excess", verseRef: "11:112" },
        { term: "إِنَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ", meaning: "Indeed He sees what you do", explanation: "Allah is watching", verseRef: "11:112" },
        { term: "وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا", meaning: "Do not incline toward wrongdoers", explanation: "Avoid supporting oppressors", verseRef: "11:113" },
        { term: "فَتَمَسَّكُمُ النَّارُ", meaning: "Lest the Fire touch you", explanation: "Consequence of inclining", verseRef: "11:113" }
      ]
    },

    prayerAndPatience: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Prayer and Patience",
      nameArabic: "الصلاة والصبر",
      concepts: [
        { term: "وَأَقِمِ الصَّلَاةَ طَرَفَيِ النَّهَارِ", meaning: "Establish prayer at both ends of the day", explanation: "Prayer times", verseRef: "11:114" },
        { term: "وَزُلَفًا مِّنَ اللَّيْلِ", meaning: "And at the approach of night", explanation: "Night prayer", verseRef: "11:114" },
        { term: "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ", meaning: "Good deeds remove bad deeds", explanation: "Good erases bad", verseRef: "11:114" },
        { term: "ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ", meaning: "That is a reminder for those who remember", explanation: "For the mindful", verseRef: "11:114" },
        { term: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", meaning: "And be patient, for Allah does not waste the reward of doers of good", explanation: "Patience rewarded", verseRef: "11:115" }
      ]
    },

    lessonsFromHistory: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Lessons from History",
      nameArabic: "عبر من التاريخ",
      concepts: [
        { term: "وَكُلًّا نَّقُصُّ عَلَيْكَ مِنْ أَنبَاءِ الرُّسُلِ", meaning: "All We relate to you of the stories of the messengers", explanation: "Purpose of stories", verseRef: "11:120" },
        { term: "مَا نُثَبِّتُ بِهِ فُؤَادَكَ", meaning: "That by which We make firm your heart", explanation: "Strengthening the Prophet", verseRef: "11:120" },
        { term: "وَجَاءَكَ فِي هَٰذِهِ الْحَقُّ", meaning: "And there has come to you in this the truth", explanation: "Truth in stories", verseRef: "11:120" },
        { term: "وَمَوْعِظَةٌ وَذِكْرَىٰ لِلْمُؤْمِنِينَ", meaning: "And an exhortation and reminder for the believers", explanation: "Benefit for believers", verseRef: "11:120" },
        { term: "وَقُل لِّلَّذِينَ لَا يُؤْمِنُونَ اعْمَلُوا عَلَىٰ مَكَانَتِكُمْ", meaning: "Say to those who disbelieve: Work according to your position", explanation: "Challenge to disbelievers", verseRef: "11:121" },
        { term: "إِنَّا عَامِلُونَ", meaning: "Indeed we are working", explanation: "Believers' resolve", verseRef: "11:121" },
        { term: "وَانتَظِرُوا إِنَّا مُنتَظِرُونَ", meaning: "And wait, indeed we are waiting", explanation: "Waiting for judgment", verseRef: "11:122" }
      ]
    },

    allahsKnowledge: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Allah's Complete Knowledge",
      nameArabic: "علم الله الكامل",
      concepts: [
        { term: "وَلِلَّهِ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "To Allah belongs the unseen of heavens and earth", explanation: "Allah knows all", verseRef: "11:123" },
        { term: "وَإِلَيْهِ يُرْجَعُ الْأَمْرُ كُلُّهُ", meaning: "And to Him is returned all matter", explanation: "All returns to Allah", verseRef: "11:123" },
        { term: "فَاعْبُدْهُ وَتَوَكَّلْ عَلَيْهِ", meaning: "So worship Him and rely upon Him", explanation: "Worship and trust", verseRef: "11:123" },
        { term: "وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ", meaning: "Your Lord is not unaware of what you do", explanation: "Allah sees everything", verseRef: "11:123" }
      ]
    },

    punishmentPatterns: {
      color: '#EF4444',
      icon: 'Users',
      name: "Patterns of Punishment",
      nameArabic: "أنماط العذاب",
      concepts: [
        { term: "الطوفان", meaning: "The Flood", explanation: "Nuh's people drowned", verseRef: "11:42-44" },
        { term: "الريح الصرصر", meaning: "Screaming wind", explanation: "'Ad destroyed by wind", verseRef: "11:58" },
        { term: "الصيحة", meaning: "The Shriek", explanation: "Thamud's destruction", verseRef: "11:67" },
        { term: "حجارة من سجيل", meaning: "Stones of baked clay", explanation: "People of Lut", verseRef: "11:82" },
        { term: "الرجفة", meaning: "The earthquake", explanation: "Madyan's destruction", verseRef: "11:94" },
        { term: "الإغراق", meaning: "Drowning", explanation: "Fir'aun and his army", verseRef: "implied" }
      ]
    },

    divineJustice: {
      color: '#10B981',
      icon: 'Book',
      name: "Divine Justice",
      nameArabic: "العدل الإلهي",
      concepts: [
        { term: "وَمَا ظَلَمْنَاهُمْ وَلَٰكِن ظَلَمُوا أَنفُسَهُمْ", meaning: "We did not wrong them, but they wronged themselves", explanation: "Self-inflicted doom", verseRef: "11:101" },
        { term: "وَكَذَٰلِكَ أَخْذُ رَبِّكَ إِذَا أَخَذَ الْقُرَىٰ", meaning: "Such is the seizure of your Lord when He seizes cities", explanation: "Pattern of punishment", verseRef: "11:102" },
        { term: "وَهِيَ ظَالِمَةٌ", meaning: "While they are committing wrong", explanation: "Timing of punishment", verseRef: "11:102" },
        { term: "إِنَّ أَخْذَهُ أَلِيمٌ شَدِيدٌ", meaning: "Indeed His seizure is painful and severe", explanation: "Severity of punishment", verseRef: "11:102" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً لِّمَنْ خَافَ عَذَابَ الْآخِرَةِ", meaning: "In that is a sign for those who fear punishment of Hereafter", explanation: "Lesson for believers", verseRef: "11:103" }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "ذَٰلِكَ يَوْمٌ مَّجْمُوعٌ لَّهُ النَّاسُ", meaning: "That is a Day for which people will be gathered", explanation: "Universal gathering", verseRef: "11:103" },
        { term: "وَذَٰلِكَ يَوْمٌ مَّشْهُودٌ", meaning: "And that is a Day witnessed", explanation: "All will witness", verseRef: "11:103" },
        { term: "وَمَا نُؤَخِّرُهُ إِلَّا لِأَجَلٍ مَّعْدُودٍ", meaning: "We only delay it for a limited term", explanation: "Appointed time", verseRef: "11:104" },
        { term: "يَوْمَ يَأْتِ لَا تَكَلَّمُ نَفْسٌ إِلَّا بِإِذْنِهِ", meaning: "Day it comes no soul will speak except by His permission", explanation: "Only Allah permits speech", verseRef: "11:105" },
        { term: "فَمِنْهُمْ شَقِيٌّ وَسَعِيدٌ", meaning: "Of them some will be wretched and some happy", explanation: "Two groups", verseRef: "11:105" }
      ]
    },

    hellAndParadise: {
      color: '#10B981',
      icon: 'Book',
      name: "Hell and Paradise",
      nameArabic: "النار والجنة",
      concepts: [
        { term: "فَأَمَّا الَّذِينَ شَقُوا فَفِي النَّارِ", meaning: "As for those who were wretched, in the Fire", explanation: "Wretched in Hell", verseRef: "11:106" },
        { term: "لَهُمْ فِيهَا زَفِيرٌ وَشَهِيقٌ", meaning: "For them therein is wailing and gasping", explanation: "Sounds of Hell", verseRef: "11:106" },
        { term: "خَالِدِينَ فِيهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ", meaning: "Abiding therein as long as heavens and earth endure", explanation: "Eternal stay", verseRef: "11:107" },
        { term: "وَأَمَّا الَّذِينَ سُعِدُوا فَفِي الْجَنَّةِ", meaning: "And as for those who were prosperous, in Paradise", explanation: "Prosperous in Paradise", verseRef: "11:108" },
        { term: "خَالِدِينَ فِيهَا", meaning: "Abiding therein", explanation: "Eternal Paradise", verseRef: "11:108" },
        { term: "عَطَاءً غَيْرَ مَجْذُوذٍ", meaning: "A gift uninterrupted", explanation: "Unending blessing", verseRef: "11:108" }
      ]
    }
  },

  relationships: [
    { from: "استغفروا ربكم", to: "يمتعكم متاعاً حسناً", type: "causation", description: "Istighfar → good provision" },
    { from: "فاستقم كما أمرت", to: "إنه بما تعملون بصير", type: "motivation", description: "Steadfastness → Allah sees" },
    { from: "الحسنات", to: "السيئات", type: "causation", description: "Good deeds remove bad deeds" },
    { from: "قصص الرسل", to: "نثبت به فؤادك", type: "purpose", description: "Stories → strengthen heart" },
    { from: "كفروا", to: "أخذتهم", type: "consequence", description: "Denial → destruction" },
    { from: "فاعبده", to: "وتوكل عليه", type: "parallel", description: "Worship and trust together" },
    { from: "هود", to: "عاد", type: "prophet-to-people", description: "Prophet to his people" },
    { from: "صالح", to: "ثمود", type: "prophet-to-people", description: "Prophet to his people" },
    { from: "شعيب", to: "مدين", type: "prophet-to-people", description: "Prophet to his people" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Nature & Tawhid", verses: "11:1-24", description: "Book's perfection, worship Allah alone, istighfar benefits" },
      { stage: 2, theme: "Story of Nuh", verses: "11:25-49", description: "950 years of dawah, Ark, flood, disbelieving son" },
      { stage: 3, theme: "Hud and 'Ad", verses: "11:50-60", description: "Call to worship, tawakkul, destruction by wind" },
      { stage: 4, theme: "Salih and Thamud", verses: "11:61-68", description: "She-camel sign, hamstringing, shriek destruction" },
      { stage: 5, theme: "Ibrahim and Angels", verses: "11:69-76", description: "Angels' visit, good news of Ishaq, intercession for Lut's people" },
      { stage: 6, theme: "Lut and His People", verses: "11:77-83", description: "Angels' protection, city overturned, stones of clay" },
      { stage: 7, theme: "Shu'ayb and Madyan", verses: "11:84-95", description: "Economic justice, fair dealings, earthquake" },
      { stage: 8, theme: "Musa and Fir'aun", verses: "11:96-99", description: "Signs and authority, Fir'aun's misguidance" },
      { stage: 9, theme: "Lessons & Justice", verses: "11:100-111", description: "Divine justice, Day of Judgment, Hell and Paradise" },
      { stage: 10, theme: "Steadfastness & Trust", verses: "11:112-123", description: "Istiqamah command, prayer, patience, trust in Allah" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Seek forgiveness regularly", how: "Istighfar brings worldly and spiritual blessings", verse: "11:3, 52" },
      { principle: "Be steadfast", how: "Remain firm on truth despite challenges", verse: "11:112" },
      { principle: "Good deeds erase sins", how: "Establish prayer, it removes bad deeds", verse: "11:114" },
      { principle: "Trust Allah completely", how: "Place trust while fulfilling responsibilities", verse: "11:56, 123" },
      { principle: "Be just in dealings", how: "Give full measure and weight in business", verse: "11:84-85" },
      { principle: "Don't support wrongdoers", how: "Even slight inclination toward oppressors is harmful", verse: "11:113" },
      { principle: "Learn from history", how: "Past nations' stories are lessons, not entertainment", verse: "11:120" }
    ]
  },

  uniqueInsight: {
    title: "The Verse That Aged the Prophet",
    insight: "The Prophet (peace be upon him) said: 'Surah Hud and its sisters have made my hair grey.' When asked why, he pointed to verse 112: 'So remain steadfast as you have been commanded.' This verse encapsulates the weight of prophethood - not just calling to Islam, but maintaining perfect istiqamah (steadfastness) without any deviation. The command 'fastaqim' (be steadfast) is so comprehensive that it covers belief, action, intention, and perseverance. It demands consistency in following the straight path in all circumstances - prosperity and adversity, ease and hardship. This is why the scholars say this single verse contains the entire religion."
  },

  historicalContext: {
    note: "Surah Hud was revealed in Makkah during a very difficult period. The Prophet had just experienced the 'Year of Sorrow' - losing both Khadijah and Abu Talib. The persecution of Muslims intensified. This surah came as consolation, showing him that all prophets faced rejection and hardship, yet they remained steadfast. The detailed stories of Nuh's 950 years of dawah, Hud's unwavering trust, and other prophets facing death threats - all paralleled the Prophet's own experience. The surah's name 'Hud' is significant: Hud was an Arab prophet sent to Arab people ('Ad), just as Muhammad was an Arab prophet to Arabs."
  },

  linguisticFeatures: {
    features: [
      { feature: "أُحْكِمَتْ", example: "Made precise/perfected", effect: "Passive form IV - divine perfection" },
      { feature: "فُصِّلَتْ", example: "Explained in detail", effect: "Passive form II - intensive detailing" },
      { feature: "مِدْرَارًا", example: "Abundantly flowing", effect: "mifʿāl pattern - intensive continuous" },
      { feature: "صَرْصَر", example: "Screaming/howling", effect: "Onomatopoeia - sound of violent wind" },
      { feature: "حَلِيم أَوَّاه مُنِيب", example: "Forbearing, grieving, returning", effect: "Three faʿīl patterns describing Ibrahim" },
      { feature: "زَفِير وَشَهِيق", example: "Wailing and gasping", effect: "Sound imagery of Hellfire" },
      { feature: "فَاسْتَقِمْ", example: "So be steadfast", effect: "Form X imperative - seek steadfastness" }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Nuh", arabicName: "نوح", verses: "25-49", duration: "950 years of dawah" },
      { name: "Hud", arabicName: "هود", verses: "50-60", people: "'Ad" },
      { name: "Salih", arabicName: "صالح", verses: "61-68", people: "Thamud" },
      { name: "Ibrahim", arabicName: "إبراهيم", verses: "69-76", event: "Angels' visit" },
      { name: "Lut", arabicName: "لوط", verses: "77-83", event: "City destruction" },
      { name: "Shu'ayb", arabicName: "شعيب", verses: "84-95", people: "Madyan" },
      { name: "Musa", arabicName: "موسى", verses: "96-99", opponent: "Fir'aun" }
    ]
  },

  destroyedNations: {
    nations: [
      { name: "People of Nuh", punishment: "Flood (Tufan)", cause: "Centuries of rejection" },
      { name: "'Ad", punishment: "Screaming wind for 7 nights, 8 days", cause: "Arrogance, idol worship" },
      { name: "Thamud", punishment: "The Shriek (Sayhah)", cause: "Killing the she-camel" },
      { name: "People of Lut", punishment: "City overturned, stones of clay", cause: "Fahishah (immorality)" },
      { name: "Madyan", punishment: "Earthquake (Rajfah)", cause: "Cheating in trade" },
      { name: "Fir'aun's people", punishment: "Drowning, eternal Fire", cause: "Claiming divinity, oppression" }
    ]
  }
};

export default ONTOLOGY;
