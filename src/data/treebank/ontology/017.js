/**
 * Surah Al-Isra (17) - Ontology of Quranic Concepts
 * The Night Journey / Bani Israel
 * Theme: Night Journey (Isra), Divine Commandments, Children of Israel, Quran's Excellence
 * 111 Ayahs - Makki Surah (except verses 26, 32, 33, 57, and 73-80 which are Madani)
 */

export const ONTOLOGY = {
  surahId: 17,
  surahName: "Al-Isra",
  surahNameArabic: "الإسراء",
  alternateName: "Bani Israel",
  alternateNameArabic: "بني إسرائيل",
  revelationType: "Makki",
  totalAyahs: 111,

  categories: {
    nightJourney: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Night Journey (Al-Isra)",
      nameArabic: "الإسراء",
      nameUrdu: "معراج کا سفر",
      concepts: [
        { term: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ", meaning: "Exalted is He who took His Servant by night", explanation: "The miraculous night journey from Makkah to Jerusalem", verseRef: "17:1" },
        { term: "مِنَ الْمَسْجِدِ الْحَرَامِ", meaning: "From al-Masjid al-Haram", explanation: "Starting point: the Sacred Mosque in Makkah", verseRef: "17:1" },
        { term: "إِلَى الْمَسْجِدِ الْأَقْصَى", meaning: "To al-Masjid al-Aqsa", explanation: "Destination: the Farthest Mosque in Jerusalem", verseRef: "17:1" },
        { term: "الَّذِي بَارَكْنَا حَوْلَهُ", meaning: "Whose surroundings We have blessed", explanation: "Holy Land blessed by Allah", verseRef: "17:1" },
        { term: "لِنُرِيَهُ مِنْ آيَاتِنَا", meaning: "To show him of Our signs", explanation: "Purpose: to show divine signs to the Prophet", verseRef: "17:1" }
      ]
    },

    baniIsrael: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Children of Israel",
      nameArabic: "بني إسرائيل",
      nameUrdu: "بنی اسرائیل",
      concepts: [
        { term: "وَآتَيْنَا مُوسَى الْكِتَابَ", meaning: "And We gave Moses the Scripture", explanation: "Torah given to Moses as guidance", verseRef: "17:2" },
        { term: "وَجَعَلْنَاهُ هُدًى لِّبَنِي إِسْرَائِيلَ", meaning: "And made it guidance for Bani Israel", explanation: "Scripture as guidance for the Israelites", verseRef: "17:2" },
        { term: "لَتُفْسِدُنَّ فِي الْأَرْضِ مَرَّتَيْنِ", meaning: "You will surely cause corruption twice", explanation: "Prophecy of two corruptions", verseRef: "17:4" },
        { term: "فَإِذَا جَاءَ وَعْدُ أُولَاهُمَا", meaning: "When the first promise came", explanation: "First punishment for transgression", verseRef: "17:5" },
        { term: "ثُمَّ رَدَدْنَا لَكُمُ الْكَرَّةَ عَلَيْهِمْ", meaning: "Then We gave you return over them", explanation: "Restoration after repentance", verseRef: "17:6" },
        { term: "فَإِذَا جَاءَ وَعْدُ الْآخِرَةِ", meaning: "When the final promise comes", explanation: "Second punishment prophesied", verseRef: "17:7" }
      ]
    },

    divineCommandments: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Commandments",
      nameArabic: "الوصايا الإلهية",
      nameUrdu: "الٰہی احکامات",
      concepts: [
        { term: "أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ", meaning: "Worship none but Him", explanation: "First commandment: Tawheed", verseRef: "17:23" },
        { term: "وَبِالْوَالِدَيْنِ إِحْسَانًا", meaning: "And to parents, good treatment", explanation: "Second commandment: honor parents", verseRef: "17:23" },
        { term: "فَلَا تَقُل لَّهُمَا أُفٍّ", meaning: "Say not to them 'uff'", explanation: "Even slight disrespect forbidden", verseRef: "17:23" },
        { term: "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ", meaning: "Lower to them the wing of humility", explanation: "Be humble with parents", verseRef: "17:24" },
        { term: "وَآتِ ذَا الْقُرْبَىٰ حَقَّهُ", meaning: "Give relatives their right", explanation: "Rights of kinship", verseRef: "17:26" },
        { term: "وَالْمِسْكِينَ وَابْنَ السَّبِيلِ", meaning: "And the needy and traveler", explanation: "Care for the poor", verseRef: "17:26" },
        { term: "وَلَا تُبَذِّرْ تَبْذِيرًا", meaning: "And do not spend wastefully", explanation: "Prohibition of extravagance", verseRef: "17:26" },
        { term: "إِنَّ الْمُبَذِّرِينَ كَانُوا إِخْوَانَ الشَّيَاطِينِ", meaning: "Spendthrifts are brothers of devils", explanation: "Severity of waste", verseRef: "17:27" },
        { term: "وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً", meaning: "Do not make your hand chained to your neck", explanation: "Neither miserly", verseRef: "17:29" },
        { term: "وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ", meaning: "Nor extend it completely", explanation: "Nor overly generous", verseRef: "17:29" },
        { term: "وَلَا تَقْتُلُوا أَوْلَادَكُمْ خَشْيَةَ إِمْلَاقٍ", meaning: "Do not kill your children fearing poverty", explanation: "Prohibition of infanticide", verseRef: "17:31" },
        { term: "وَلَا تَقْرَبُوا الزِّنَا", meaning: "Do not approach unlawful sexual intercourse", explanation: "Prohibition of zina", verseRef: "17:32" },
        { term: "وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ", meaning: "Do not kill the soul Allah has forbidden", explanation: "Sanctity of life", verseRef: "17:33" },
        { term: "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ", meaning: "Do not approach orphan's property", explanation: "Protect orphan's wealth", verseRef: "17:34" },
        { term: "وَأَوْفُوا بِالْعَهْدِ", meaning: "And fulfill the covenant", explanation: "Keep promises", verseRef: "17:34" },
        { term: "وَأَوْفُوا الْكَيْلَ", meaning: "And give full measure", explanation: "Fair business dealings", verseRef: "17:35" },
        { term: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ", meaning: "Do not pursue what you have no knowledge of", explanation: "Avoid speculation", verseRef: "17:36" },
        { term: "وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا", meaning: "Do not walk on earth exultantly", explanation: "Against arrogance", verseRef: "17:37" }
      ]
    },

    quranExcellence: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Excellence of Quran",
      nameArabic: "فضل القرآن",
      nameUrdu: "قرآن کی فضیلت",
      concepts: [
        { term: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ", meaning: "This Quran guides to that which is most suitable", explanation: "Quran as perfect guidance", verseRef: "17:9" },
        { term: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ", meaning: "We send down of the Quran that which is healing and mercy", explanation: "Quran as spiritual healing", verseRef: "17:82" },
        { term: "قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ", meaning: "Say: If mankind and jinn gathered", explanation: "Challenge of inimitability", verseRef: "17:88" },
        { term: "لَا يَأْتُونَ بِمِثْلِهِ", meaning: "They could not produce the like of it", explanation: "Quran's linguistic miracle", verseRef: "17:88" },
        { term: "وَلَوْ كَانَ بَعْضُهُمْ لِبَعْضٍ ظَهِيرًا", meaning: "Even if they supported each other", explanation: "Even with cooperation, impossible", verseRef: "17:88" },
        { term: "وَلَقَدْ صَرَّفْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ", meaning: "We have certainly diversified for people in this Quran", explanation: "Various examples in Quran", verseRef: "17:89" },
        { term: "وَبِالْحَقِّ أَنزَلْنَاهُ وَبِالْحَقِّ نَزَلَ", meaning: "With truth We sent it down, and with truth it descended", explanation: "Quran revealed in truth", verseRef: "17:105" }
      ]
    },

    tawheedAndShirk: {
      color: '#EF4444',
      icon: 'Users',
      name: "Monotheism vs Polytheism",
      nameArabic: "التوحيد والشرك",
      nameUrdu: "توحید اور شرک",
      concepts: [
        { term: "لَا تَجْعَلْ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: "Do not make another deity with Allah", explanation: "Warning against shirk", verseRef: "17:22" },
        { term: "فَتَقْعُدَ مَذْمُومًا مَّخْذُولًا", meaning: "Lest you sit blamed and forsaken", explanation: "Consequence of shirk", verseRef: "17:22" },
        { term: "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم", meaning: "Say: Invoke those you claimed", explanation: "False gods cannot help", verseRef: "17:56" },
        { term: "لَا يَمْلِكُونَ كَشْفَ الضُّرِّ عَنكُمْ", meaning: "They possess not removal of adversity from you", explanation: "Idols are powerless", verseRef: "17:56" },
        { term: "أُولَٰئِكَ الَّذِينَ يَدْعُونَ يَبْتَغُونَ إِلَىٰ رَبِّهِمُ الْوَسِيلَةَ", meaning: "Those whom they invoke seek means to their Lord", explanation: "Even the invoked seek Allah", verseRef: "17:57" },
        { term: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ", meaning: "And to Allah belong the most beautiful names", explanation: "Allah's beautiful names", verseRef: "17:110" }
      ]
    },

    humanNature: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      nameUrdu: "انسانی فطرت",
      concepts: [
        { term: "وَكَانَ الْإِنسَانُ عَجُولًا", meaning: "And man is ever hasty", explanation: "Human impatience", verseRef: "17:11" },
        { term: "يَدْعُ الْإِنسَانُ بِالشَّرِّ دُعَاءَهُ بِالْخَيْرِ", meaning: "Man supplicates for evil as he supplicates for good", explanation: "Hasty in desires", verseRef: "17:11" },
        { term: "وَإِذَا أَنْعَمْنَا عَلَى الْإِنسَانِ أَعْرَضَ", meaning: "When We bestow favor on man, he turns away", explanation: "Ingratitude in ease", verseRef: "17:83" },
        { term: "وَإِذَا مَسَّهُ الشَّرُّ كَانَ يَئُوسًا", meaning: "When evil touches him, he is despairing", explanation: "Despair in hardship", verseRef: "17:83" },
        { term: "وَخُلِقَ الْإِنسَانُ ضَعِيفًا", meaning: "And mankind was created weak", explanation: "Human weakness", verseRef: "17:67" },
        { term: "إِنَّ الْإِنسَانَ كَانَ كَفُورًا", meaning: "Indeed mankind is ungrateful", explanation: "Human ingratitude", verseRef: "17:67" }
      ]
    },

    soulAndSpirit: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Soul and Spirit",
      nameArabic: "الروح والنفس",
      nameUrdu: "روح اور نفس",
      concepts: [
        { term: "وَيَسْأَلُونَكَ عَنِ الرُّوحِ", meaning: "And they ask you about the spirit", explanation: "Question about the soul", verseRef: "17:85" },
        { term: "قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي", meaning: "Say: The spirit is of the affair of my Lord", explanation: "Spirit is from divine command", verseRef: "17:85" },
        { term: "وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا", meaning: "And you have not been given of knowledge except a little", explanation: "Limitation of human knowledge", verseRef: "17:85" },
        { term: "كُلُّ نَفْسٍ بِمَا كَسَبَتْ رَهِينَةٌ", meaning: "Every soul is hostage to what it has earned", explanation: "Soul's accountability", verseRef: "17:13-14" }
      ]
    },

    prophethood: {
      color: '#EF4444',
      icon: 'Users',
      name: "Prophethood",
      nameArabic: "النبوة",
      nameUrdu: "نبوت",
      concepts: [
        { term: "وَمَا أَرْسَلْنَاكَ إِلَّا مُبَشِّرًا وَنَذِيرًا", meaning: "We sent you only as a bringer of good tidings and a warner", explanation: "Prophet's mission", verseRef: "17:105" },
        { term: "وَمَا مَنَعَ النَّاسَ أَن يُؤْمِنُوا", meaning: "And what prevented people from believing", explanation: "Obstacle to belief", verseRef: "17:94" },
        { term: "أَبَعَثَ اللَّهُ بَشَرًا رَّسُولًا", meaning: "Has Allah sent a human messenger?", explanation: "Doubt about human messenger", verseRef: "17:94" },
        { term: "قُل لَّوْ كَانَ فِي الْأَرْضِ مَلَائِكَةٌ", meaning: "Say: If there were angels on earth", explanation: "Why human messengers", verseRef: "17:95" },
        { term: "وَلَقَدْ آتَيْنَا مُوسَىٰ تِسْعَ آيَاتٍ", meaning: "We gave Moses nine signs", explanation: "Signs given to Moses", verseRef: "17:101" }
      ]
    },

    prayerAndRemembrance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Prayer and Remembrance",
      nameArabic: "الصلاة والذكر",
      nameUrdu: "نماز اور ذکر",
      concepts: [
        { term: "أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ", meaning: "Establish prayer at decline of sun", explanation: "Prayer times ordained", verseRef: "17:78" },
        { term: "إِلَىٰ غَسَقِ اللَّيْلِ", meaning: "Until the darkness of night", explanation: "Prayer until night", verseRef: "17:78" },
        { term: "وَقُرْآنَ الْفَجْرِ", meaning: "And the Quran of dawn", explanation: "Fajr prayer's importance", verseRef: "17:78" },
        { term: "إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا", meaning: "Indeed the Quran of dawn is witnessed", explanation: "Angels witness Fajr", verseRef: "17:78" },
        { term: "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً", meaning: "And from night pray with it as additional", explanation: "Tahajjud prayer", verseRef: "17:79" },
        { term: "عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا", meaning: "Perhaps your Lord will raise you to a praised station", explanation: "Maqam Mahmud - station of intercession", verseRef: "17:79" }
      ]
    },

    resurrection: {
      color: '#EF4444',
      icon: 'Users',
      name: "Resurrection",
      nameArabic: "البعث والنشور",
      nameUrdu: "قیامت اور حشر",
      concepts: [
        { term: "قَالُوا أَإِذَا كُنَّا عِظَامًا وَرُفَاتًا", meaning: "They say: When we are bones and crumbled particles", explanation: "Disbelievers' doubt", verseRef: "17:49" },
        { term: "أَإِنَّا لَمَبْعُوثُونَ خَلْقًا جَدِيدًا", meaning: "Will we be resurrected as new creation?", explanation: "Question about resurrection", verseRef: "17:49" },
        { term: "قُلْ كُونُوا حِجَارَةً أَوْ حَدِيدًا", meaning: "Say: Be stones or iron", explanation: "Allah can resurrect anything", verseRef: "17:50" },
        { term: "أَوْ خَلْقًا مِّمَّا يَكْبُرُ فِي صُدُورِكُمْ", meaning: "Or any creation greater in your minds", explanation: "Whatever you imagine", verseRef: "17:51" },
        { term: "فَسَيُنْغِضُونَ إِلَيْكَ رُءُوسَهُمْ", meaning: "They will shake their heads at you", explanation: "Mockers questioning when", verseRef: "17:51" },
        { term: "يَوْمَ يَدْعُوكُمْ فَتَسْتَجِيبُونَ بِحَمْدِهِ", meaning: "Day He calls you and you respond with His praise", explanation: "All will answer His call", verseRef: "17:52" },
        { term: "وَتَظُنُّونَ إِن لَّبِثْتُمْ إِلَّا قَلِيلًا", meaning: "And think you remained but a little", explanation: "Life seems short then", verseRef: "17:52" }
      ]
    },

    shaytanAndEvil: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Satan and Evil",
      nameArabic: "الشيطان والشر",
      nameUrdu: "شیطان اور شر",
      concepts: [
        { term: "إِنَّ الشَّيْطَانَ كَانَ لِلْإِنسَانِ عَدُوًّا مُّبِينًا", meaning: "Indeed Satan is to man a clear enemy", explanation: "Satan's enmity declared", verseRef: "17:53" },
        { term: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ", meaning: "When We said to angels: Prostrate to Adam", explanation: "Command to prostrate", verseRef: "17:61" },
        { term: "إِلَّا إِبْلِيسَ قَالَ أَأَسْجُدُ لِمَنْ خَلَقْتَ طِينًا", meaning: "Except Iblis who said: Shall I prostrate to one created from clay?", explanation: "Iblis's arrogance", verseRef: "17:61" },
        { term: "لَأَحْتَنِكَنَّ ذُرِّيَّتَهُ إِلَّا قَلِيلًا", meaning: "I will surely mislead his descendants except few", explanation: "Satan's threat", verseRef: "17:62" },
        { term: "وَاسْتَفْزِزْ مَنِ اسْتَطَعْتَ مِنْهُم بِصَوْتِكَ", meaning: "And incite whoever you can with your voice", explanation: "Satan's methods", verseRef: "17:64" },
        { term: "وَأَجْلِبْ عَلَيْهِم بِخَيْلِكَ وَرَجِلِكَ", meaning: "And assault them with your cavalry and infantry", explanation: "Satan's forces", verseRef: "17:64" },
        { term: "وَشَارِكْهُمْ فِي الْأَمْوَالِ وَالْأَوْلَادِ", meaning: "And share with them in wealth and children", explanation: "Satan's influence in life", verseRef: "17:64" },
        { term: "وَعِدْهُمْ ۚ وَمَا يَعِدُهُمُ الشَّيْطَانُ إِلَّا غُرُورًا", meaning: "And promise them - but Satan promises only delusion", explanation: "False promises", verseRef: "17:64" },
        { term: "إِنَّ عِبَادِي لَيْسَ لَكَ عَلَيْهِمْ سُلْطَانٌ", meaning: "Indeed My servants - you have no authority over them", explanation: "Believers protected", verseRef: "17:65" }
      ]
    },

    divineWisdom: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Wisdom",
      nameArabic: "الحكمة الإلهية",
      nameUrdu: "الٰہی حکمت",
      concepts: [
        { term: "ذَٰلِكَ مِمَّا أَوْحَىٰ إِلَيْكَ رَبُّكَ مِنَ الْحِكْمَةِ", meaning: "That is from what your Lord has revealed of wisdom", explanation: "Wisdom in commandments", verseRef: "17:39" },
        { term: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ", meaning: "And We honored the children of Adam", explanation: "Human dignity", verseRef: "17:70" },
        { term: "وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ", meaning: "And carried them on land and sea", explanation: "Divine provision for travel", verseRef: "17:70" },
        { term: "وَرَزَقْنَاهُم مِّنَ الطَّيِّبَاتِ", meaning: "And provided them from good things", explanation: "Pure sustenance", verseRef: "17:70" },
        { term: "وَفَضَّلْنَاهُمْ عَلَىٰ كَثِيرٍ مِّمَّنْ خَلَقْنَا تَفْضِيلًا", meaning: "And preferred them over much of creation", explanation: "Human superiority over creation", verseRef: "17:70" }
      ]
    },

    accountability: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Individual Accountability",
      nameArabic: "المسؤولية الفردية",
      nameUrdu: "انفرادی جوابدہی",
      concepts: [
        { term: "وَكُلَّ إِنسَانٍ أَلْزَمْنَاهُ طَائِرَهُ فِي عُنُقِهِ", meaning: "Every person We bound their fate to their neck", explanation: "Deeds attached to each", verseRef: "17:13" },
        { term: "وَنُخْرِجُ لَهُ يَوْمَ الْقِيَامَةِ كِتَابًا", meaning: "And We will produce for him on Day of Resurrection a record", explanation: "Record of deeds", verseRef: "17:13" },
        { term: "اقْرَأْ كِتَابَكَ كَفَىٰ بِنَفْسِكَ الْيَوْمَ عَلَيْكَ حَسِيبًا", meaning: "Read your record - sufficient is yourself as accountant", explanation: "Self-accounting on Judgment Day", verseRef: "17:14" },
        { term: "مَّنِ اهْتَدَىٰ فَإِنَّمَا يَهْتَدِي لِنَفْسِهِ", meaning: "Whoever is guided is only guided for himself", explanation: "Benefits of guidance for self", verseRef: "17:15" },
        { term: "وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيْهَا", meaning: "And whoever strays only strays against himself", explanation: "Harm of misguidance to self", verseRef: "17:15" },
        { term: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ", meaning: "No bearer of burden will bear burden of another", explanation: "Individual responsibility", verseRef: "17:15" },
        { term: "وَمَا كُنَّا مُعَذِّبِينَ حَتَّىٰ نَبْعَثَ رَسُولًا", meaning: "We would not punish until We send a messenger", explanation: "Justice requires warning first", verseRef: "17:15" }
      ]
    },

    signsOfAllah: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Signs of Allah",
      nameArabic: "آيات الله",
      nameUrdu: "اللہ کی نشانیاں",
      concepts: [
        { term: "وَجَعَلْنَا اللَّيْلَ وَالنَّهَارَ آيَتَيْنِ", meaning: "And We made night and day two signs", explanation: "Day and night as signs", verseRef: "17:12" },
        { term: "فَمَحَوْنَا آيَةَ اللَّيْلِ", meaning: "So We erased the sign of night", explanation: "Night made dark", verseRef: "17:12" },
        { term: "وَجَعَلْنَا آيَةَ النَّهَارِ مُبْصِرَةً", meaning: "And made sign of day visible", explanation: "Day made bright", verseRef: "17:12" },
        { term: "لِتَبْتَغُوا فَضْلًا مِّن رَّبِّكُمْ", meaning: "That you may seek bounty from your Lord", explanation: "Day for livelihood", verseRef: "17:12" },
        { term: "وَلِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ", meaning: "And that you may know number of years and calculation", explanation: "Calculation of time", verseRef: "17:12" },
        { term: "رَّبُّكُمُ الَّذِي يُزْجِي لَكُمُ الْفُلْكَ فِي الْبَحْرِ", meaning: "Your Lord who drives for you ships through the sea", explanation: "Ships as divine blessing", verseRef: "17:66" }
      ]
    },

    duaAndSupplication: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Supplication",
      nameArabic: "الدعاء",
      nameUrdu: "دعا",
      concepts: [
        { term: "وَقُل رَّبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ", meaning: "Say: My Lord, cause me to enter a sound entrance", explanation: "Prayer for guidance", verseRef: "17:80" },
        { term: "وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ", meaning: "And bring me out a sound exit", explanation: "Prayer for protection", verseRef: "17:80" },
        { term: "وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا", meaning: "And grant me from You a supporting authority", explanation: "Prayer for help", verseRef: "17:80" },
        { term: "وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ", meaning: "Say: Truth has come and falsehood has perished", explanation: "Declaration of truth's victory", verseRef: "17:81" },
        { term: "إِنَّ الْبَاطِلَ كَانَ زَهُوقًا", meaning: "Indeed falsehood is ever bound to perish", explanation: "Falsehood destined to fail", verseRef: "17:81" },
        { term: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", meaning: "My Lord, have mercy on them as they raised me when small", explanation: "Dua for parents", verseRef: "17:24" }
      ]
    }
  },

  relationships: [
    { from: "الإسراء", to: "المسجد الأقصى", type: "journey", description: "Night Journey to Jerusalem" },
    { from: "موسى والكتاب", to: "بني إسرائيل", type: "guidance", description: "Scripture given for guidance" },
    { from: "التوحيد", to: "بر الوالدين", type: "sequence", description: "Commandments begin with Tawheed then parents" },
    { from: "الشيطان", to: "الإنسان", type: "enmity", description: "Satan declared enemy of mankind" },
    { from: "القرآن", to: "الشفاء والرحمة", type: "function", description: "Quran as healing and mercy" },
    { from: "الصلاة", to: "قرآن الفجر", type: "includes", description: "Fajr prayer specifically mentioned" },
    { from: "الحكمة", to: "الوصايا", type: "source", description: "Commandments derived from wisdom" },
    { from: "التهجد", to: "المقام المحمود", type: "leads_to", description: "Night prayer leads to praised station" },
    { from: "الروح", to: "أمر ربي", type: "origin", description: "Spirit from divine command" },
    { from: "كرامة بني آدم", to: "التفضيل", type: "result", description: "Human honor leads to preference" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Night Journey", verses: "17:1", description: "Miraculous Isra to Jerusalem" },
      { stage: 2, theme: "Bani Israel History", verses: "17:2-8", description: "Moses, Scripture, and two corruptions" },
      { stage: 3, theme: "Quran's Guidance", verses: "17:9-12", description: "Quran guides to best path" },
      { stage: 4, theme: "Accountability", verses: "17:13-15", description: "Individual responsibility and records" },
      { stage: 5, theme: "Divine Destruction", verses: "17:16-21", description: "Warning to transgressors" },
      { stage: 6, theme: "Divine Commandments", verses: "17:22-39", description: "Comprehensive ethical code" },
      { stage: 7, theme: "Tawheed Arguments", verses: "17:40-48", description: "Refutation of polytheism" },
      { stage: 8, theme: "Resurrection Proofs", verses: "17:49-52", description: "Evidence for raising the dead" },
      { stage: 9, theme: "Good Speech", verses: "17:53-55", description: "Guidance on speaking" },
      { stage: 10, theme: "False Gods", verses: "17:56-57", description: "Powerlessness of idols" },
      { stage: 11, theme: "Destruction of Nations", verses: "17:58-60", description: "Past nations destroyed" },
      { stage: 12, theme: "Iblis Story", verses: "17:61-65", description: "Satan's arrogance and threat" },
      { stage: 13, theme: "Divine Blessings", verses: "17:66-70", description: "Sea travel and human honor" },
      { stage: 14, theme: "Day of Judgment", verses: "17:71-72", description: "Every nation called by its record" },
      { stage: 15, theme: "Prophet's Trial", verses: "17:73-77", description: "Attempts to mislead Prophet" },
      { stage: 16, theme: "Prayer Times", verses: "17:78-79", description: "Prescribed prayers and Tahajjud" },
      { stage: 17, theme: "Truth Arrives", verses: "17:80-81", description: "Victory of truth over falsehood" },
      { stage: 18, theme: "Quran as Healing", verses: "17:82-84", description: "Spiritual medicine" },
      { stage: 19, theme: "Spirit Question", verses: "17:85", description: "Limited human knowledge" },
      { stage: 20, theme: "Quran's Miracle", verses: "17:86-89", description: "Inimitability challenge" },
      { stage: 21, theme: "Demands for Signs", verses: "17:90-93", description: "Polytheists' demands" },
      { stage: 22, theme: "Human Messengers", verses: "17:94-96", description: "Why human prophets" },
      { stage: 23, theme: "Guidance and Misguidance", verses: "17:97", description: "Allah guides whom He wills" },
      { stage: 24, theme: "Moses and Pharaoh", verses: "17:101-104", description: "Nine signs to Pharaoh" },
      { stage: 25, theme: "Quran's Truth", verses: "17:105-109", description: "Revealed in truth, scholars weep" },
      { stage: 26, theme: "Beautiful Names", verses: "17:110-111", description: "Allah's names, final praise" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Honor parents absolutely", how: "Never say 'uff', speak gently, lower wing of humility", verse: "17:23-24" },
      { principle: "Balance in spending", how: "Neither miserly nor extravagant - moderate approach", verse: "17:29" },
      { principle: "Protect life", how: "Do not kill children or anyone unjustly", verse: "17:31,33" },
      { principle: "Guard chastity", how: "Do not even approach zina - avoid situations", verse: "17:32" },
      { principle: "Fulfill covenants", how: "Keep all promises and commitments", verse: "17:34" },
      { principle: "Fair dealings", how: "Give full measure and weight", verse: "17:35" },
      { principle: "Verify before acting", how: "Do not follow what you have no knowledge of", verse: "17:36" },
      { principle: "Humble walk", how: "Do not walk arrogantly on earth", verse: "17:37" },
      { principle: "Establish prayers", how: "Pray from Dhuhr to Isha, especially Fajr", verse: "17:78" },
      { principle: "Pray Tahajjud", how: "Extra night prayer for elevated status", verse: "17:79" },
      { principle: "Make dua for parents", how: "Rabbi irhamhuma kama rabbayani saghira", verse: "17:24" },
      { principle: "Speak beautifully", how: "Tell servants to speak best words", verse: "17:53" }
    ]
  },

  uniqueInsight: {
    title: "The Night Journey and Divine Constitution",
    insight: "Surah Al-Isra opens with the miraculous Night Journey (Isra) and connects it to the giving of Scripture to Moses, establishing a profound link between revelation and divine journeys. The surah then presents what scholars call the 'Islamic Constitution' - a comprehensive ethical code in verses 22-39 that parallels the Ten Commandments but with deeper elaboration. Beginning with Tawheed and ending with humility, these commandments cover worship, family, economics, life, and social conduct. The placement after the Night Journey narrative suggests these commandments were given or confirmed during this miraculous event. The surah also contains the famous verse about the Quran's inimitability (17:88), the question about the spirit (17:85), and the establishment of prayer times (17:78-79). The alternation between Makki and Madani verses reflects its comprehensive nature - combining faith foundations with practical legislation."
  },

  historicalContext: {
    note: "Surah Al-Isra was revealed late in the Makkan period, shortly before the Hijra. The Night Journey (Isra and Mi'raj) occurred about a year before migration to Madinah, during a period of intense persecution. The surah's alternate name 'Bani Israel' reflects its significant discussion of Jewish history and the Torah. The comprehensive commandments in this surah may have been revealed to prepare the Muslim community for establishing a society in Madinah. Some verses (26, 32, 33, 57, 73-80) were revealed in Madinah, indicating the surah was completed over time."
  },

  linguisticFeatures: {
    features: [
      { feature: "سُبْحَانَ", example: "Opening word", effect: "Glorification - only surah to open with this" },
      { feature: "أَسْرَىٰ", example: "Form IV verb", effect: "Causative - Allah caused the journey" },
      { feature: "أُفٍّ", example: "Expression of annoyance", effect: "Smallest sound of displeasure forbidden to parents" },
      { feature: "طَائِرَهُ", example: "Bird metaphor for fate", effect: "Arab expression for destiny attached to neck" },
      { feature: "مَقَامًا مَّحْمُودًا", example: "Station of praise", effect: "Passive participle - praised by all creation" },
      { feature: "يَنقُضُّونَ", example: "Emphatic form", effect: "Quick, repeated shaking of heads" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "17:1", topic: "Night Journey", note: "Fastest travel - instantaneous or near-light-speed transportation" },
      { verse: "17:12", topic: "Day and Night", note: "Cosmic signs for timekeeping and calculation" },
      { verse: "17:44", topic: "Universal praise", note: "Everything glorifies Allah - could relate to vibrations/energy" },
      { verse: "17:66", topic: "Ships at sea", note: "Buoyancy and navigation as divine blessings" },
      { verse: "17:70", topic: "Land and sea travel", note: "Human ability to traverse all terrains" },
      { verse: "17:85", topic: "The Spirit", note: "Limits of human scientific knowledge acknowledged" }
    ]
  },

  crossReferences: [
    { surah: 53, verses: "1-18", topic: "Mi'raj details", description: "Surah An-Najm describes the ascension" },
    { surah: 7, verses: "103-156", topic: "Moses story", description: "Extended narrative of Moses and Pharaoh" },
    { surah: 2, verses: "83", topic: "Similar commandments", description: "Covenant with Bani Israel" },
    { surah: 6, verses: "151-153", topic: "Parallel commandments", description: "Similar ethical injunctions" },
    { surah: 31, verses: "13-19", topic: "Luqman's advice", description: "Similar wisdom teachings" },
    { surah: 25, verses: "63-77", topic: "Servants of Rahman", description: "Qualities of righteous servants" }
  ],

  virtueHadith: {
    hadith: "The Prophet (peace be upon him) would not sleep until he recited Surah Al-Isra and Surah Az-Zumar every night (Tirmidhi). The Prophet also said about Surah Al-Isra: 'These are among the first surahs revealed, and they are the core of my recitation.' This surah contains the famous verse establishing the five daily prayers and the Night Journey narrative."
  }
};

export default ONTOLOGY;
