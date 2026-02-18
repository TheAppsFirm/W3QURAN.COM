/**
 * Surah Fussilat (41) - Ontology of Quranic Concepts
 * Also known as Ha Mim As-Sajdah (Ha Mim The Prostration)
 * Theme: Ha Mim opening, Quran as guidance and healing, creation in 6 days, body parts testifying, repelling evil with good
 * 54 Ayahs, Makkan
 */

export const ONTOLOGY = {
  surahId: 41,
  surahName: "Fussilat",
  alternativeName: "Ha Mim As-Sajdah",
  surahNameArabic: "فصلت",
  alternativeNameArabic: "حم السجدة",
  revelationType: "Makki",
  totalAyahs: 54,

  categories: {
    quranDescription: {
      name: "Description of the Quran",
      nameArabic: "وصف القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم", meaning: "Ha Mim", explanation: "Mysterious letters - one of seven Ha-Mim surahs (40-46)", verseRef: "41:1" },
        { term: "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ", meaning: "A revelation from the Most Merciful", explanation: "Source of Quran is Allah's mercy", verseRef: "41:2" },
        { term: "كِتَابٌ فُصِّلَتْ آيَاتُهُ", meaning: "A Book whose verses are detailed", explanation: "Fussilat - clearly explained and distinctly set forth", verseRef: "41:3" },
        { term: "قُرْآنًا عَرَبِيًّا", meaning: "An Arabic Quran", explanation: "Revealed in Arabic for people who understand", verseRef: "41:3" },
        { term: "لِّقَوْمٍ يَعْلَمُونَ", meaning: "For a people who know", explanation: "Addressed to those who use knowledge", verseRef: "41:3" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: "Giver of good tidings and warner", explanation: "Quran's dual function - hope and warning", verseRef: "41:4" },
        { term: "هُدًى وَشِفَاءٌ", meaning: "Guidance and healing", explanation: "Quran heals hearts and guides to truth", verseRef: "41:44" },
        { term: "لِّلَّذِينَ آمَنُوا", meaning: "For those who believe", explanation: "Believers receive guidance and healing", verseRef: "41:44" },
        { term: "وَقْرٌ", meaning: "Deafness", explanation: "For disbelievers, it is deafness in their ears", verseRef: "41:44" },
        { term: "عَمًى", meaning: "Blindness", explanation: "And upon them is blindness to truth", verseRef: "41:44" }
      ]
    },

    creationInSixDays: {
      name: "Creation in Six Days",
      nameArabic: "الخلق في ستة أيام",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "خَلَقَ الْأَرْضَ فِي يَوْمَيْنِ", meaning: "Created the earth in two days", explanation: "First stage of creation", verseRef: "41:9" },
        { term: "رَبُّ الْعَالَمِينَ", meaning: "Lord of the worlds", explanation: "Creator of everything that exists", verseRef: "41:9" },
        { term: "وَجَعَلَ فِيهَا رَوَاسِيَ", meaning: "And placed therein firmly set mountains", explanation: "Mountains for stability", verseRef: "41:10" },
        { term: "وَبَارَكَ فِيهَا", meaning: "And blessed it", explanation: "Earth is blessed with provisions", verseRef: "41:10" },
        { term: "وَقَدَّرَ فِيهَا أَقْوَاتَهَا", meaning: "And determined therein its sustenance", explanation: "Provision precisely measured", verseRef: "41:10" },
        { term: "فِي أَرْبَعَةِ أَيَّامٍ", meaning: "In four days", explanation: "Total for earth's formation with provisions", verseRef: "41:10" },
        { term: "سَوَاءً لِّلسَّائِلِينَ", meaning: "Equal for those who ask", explanation: "Sustenance available to all who seek", verseRef: "41:10" },
        { term: "ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ", meaning: "Then He directed to the heaven while it was smoke", explanation: "Heavens were initially gaseous", verseRef: "41:11" },
        { term: "ائْتِيَا طَوْعًا أَوْ كَرْهًا", meaning: "Come willingly or unwillingly", explanation: "Allah's command to heaven and earth", verseRef: "41:11" },
        { term: "قَالَتَا أَتَيْنَا طَائِعِينَ", meaning: "They said: We come willingly", explanation: "Creation submits to Allah", verseRef: "41:11" },
        { term: "فَقَضَاهُنَّ سَبْعَ سَمَاوَاتٍ فِي يَوْمَيْنِ", meaning: "He completed them as seven heavens in two days", explanation: "Heavens formed in two days", verseRef: "41:12" },
        { term: "وَأَوْحَىٰ فِي كُلِّ سَمَاءٍ أَمْرَهَا", meaning: "And inspired in each heaven its command", explanation: "Each heaven given its function", verseRef: "41:12" },
        { term: "وَزَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ", meaning: "And We adorned the nearest heaven with lamps", explanation: "Stars as decoration and protection", verseRef: "41:12" },
        { term: "وَحِفْظًا", meaning: "And as protection", explanation: "Stars protect from devils", verseRef: "41:12" }
      ]
    },

    warningsFromHistory: {
      name: "Warnings from Previous Nations",
      nameArabic: "عبر من الأمم السابقة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَإِنْ أَعْرَضُوا فَقُلْ أَنذَرْتُكُمْ صَاعِقَةً", meaning: "If they turn away, say: I warn you of a thunderbolt", explanation: "Warning of sudden punishment", verseRef: "41:13" },
        { term: "مِّثْلَ صَاعِقَةِ عَادٍ وَثَمُودَ", meaning: "Like the thunderbolt of Aad and Thamud", explanation: "Historical examples of destruction", verseRef: "41:13" },
        { term: "إِذْ جَاءَتْهُمُ الرُّسُلُ مِن بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ", meaning: "When messengers came to them from before and after", explanation: "Continuous prophetic mission", verseRef: "41:14" },
        { term: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ", meaning: "Worship none but Allah", explanation: "Core message of all prophets", verseRef: "41:14" },
        { term: "لَوْ شَاءَ رَبُّنَا لَأَنزَلَ مَلَائِكَةً", meaning: "If our Lord had willed, He would have sent angels", explanation: "Their excuse for rejecting human messengers", verseRef: "41:14" },
        { term: "فَإِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", meaning: "Indeed we are disbelievers in what you were sent with", explanation: "Outright rejection", verseRef: "41:14" }
      ]
    },

    aadAndThamud: {
      name: "Story of Aad and Thamud",
      nameArabic: "قصة عاد وثمود",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ", meaning: "As for Aad, they were arrogant in the land", explanation: "Aad's pride and tyranny", verseRef: "41:15" },
        { term: "بِغَيْرِ الْحَقِّ", meaning: "Without right", explanation: "Unjustified arrogance", verseRef: "41:15" },
        { term: "مَنْ أَشَدُّ مِنَّا قُوَّةً", meaning: "Who is mightier than us in strength?", explanation: "Boasting of physical power", verseRef: "41:15" },
        { term: "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً", meaning: "Did they not see that Allah who created them is mightier than them?", explanation: "Allah's power exceeds all creation", verseRef: "41:15" },
        { term: "رِيحًا صَرْصَرًا فِي أَيَّامٍ نَّحِسَاتٍ", meaning: "A screaming wind on days of misfortune", explanation: "Wind that destroyed Aad", verseRef: "41:16" },
        { term: "لِّنُذِيقَهُمْ عَذَابَ الْخِزْيِ", meaning: "To make them taste the punishment of disgrace", explanation: "Humiliation in this world", verseRef: "41:16" },
        { term: "وَلَعَذَابُ الْآخِرَةِ أَخْزَىٰ", meaning: "And the punishment of the Hereafter is more disgracing", explanation: "Greater disgrace awaits", verseRef: "41:16" },
        { term: "وَأَمَّا ثَمُودُ فَهَدَيْنَاهُمْ", meaning: "And as for Thamud, We guided them", explanation: "Thamud received clear guidance", verseRef: "41:17" },
        { term: "فَاسْتَحَبُّوا الْعَمَىٰ عَلَى الْهُدَىٰ", meaning: "But they preferred blindness over guidance", explanation: "Chose misguidance deliberately", verseRef: "41:17" },
        { term: "فَأَخَذَتْهُمْ صَاعِقَةُ الْعَذَابِ الْهُونِ", meaning: "So the thunderbolt of humiliating punishment seized them", explanation: "Sudden destruction", verseRef: "41:17" }
      ]
    },

    bodyPartsTestifying: {
      name: "Body Parts Testifying on Judgment Day",
      nameArabic: "شهادة الأعضاء يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَيَوْمَ يُحْشَرُ أَعْدَاءُ اللَّهِ إِلَى النَّارِ", meaning: "And the day the enemies of Allah are gathered to the Fire", explanation: "Enemies of Allah assembled for punishment", verseRef: "41:19" },
        { term: "فَهُمْ يُوزَعُونَ", meaning: "They will be driven in groups", explanation: "Organized march to Hell", verseRef: "41:19" },
        { term: "حَتَّىٰ إِذَا مَا جَاءُوهَا", meaning: "Until when they reach it", explanation: "Arriving at Hellfire", verseRef: "41:20" },
        { term: "شَهِدَ عَلَيْهِمْ سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُم", meaning: "Their hearing, sight, and skins will testify against them", explanation: "Body parts become witnesses", verseRef: "41:20" },
        { term: "بِمَا كَانُوا يَعْمَلُونَ", meaning: "About what they used to do", explanation: "Every deed recorded by the body", verseRef: "41:20" },
        { term: "وَقَالُوا لِجُلُودِهِمْ لِمَ شَهِدتُّمْ عَلَيْنَا", meaning: "They will say to their skins: Why did you testify against us?", explanation: "Questioning their own bodies", verseRef: "41:21" },
        { term: "قَالُوا أَنطَقَنَا اللَّهُ الَّذِي أَنطَقَ كُلَّ شَيْءٍ", meaning: "They will say: Allah made us speak, who makes all things speak", explanation: "Allah gives speech to all things", verseRef: "41:21" },
        { term: "وَهُوَ خَلَقَكُمْ أَوَّلَ مَرَّةٍ", meaning: "And He created you the first time", explanation: "The Creator controls all", verseRef: "41:21" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: "And to Him you are returned", explanation: "Ultimate return to Allah", verseRef: "41:21" },
        { term: "وَمَا كُنتُمْ تَسْتَتِرُونَ أَن يَشْهَدَ عَلَيْكُمْ سَمْعُكُمْ وَلَا أَبْصَارُكُمْ", meaning: "You did not hide yourselves from the testimony of your hearing and sight", explanation: "Could not hide from own body parts", verseRef: "41:22" },
        { term: "وَلَا جُلُودُكُمْ", meaning: "Nor your skins", explanation: "Skin as a witness", verseRef: "41:22" },
        { term: "وَلَٰكِن ظَنَنتُمْ أَنَّ اللَّهَ لَا يَعْلَمُ كَثِيرًا مِّمَّا تَعْمَلُونَ", meaning: "But you thought Allah did not know much of what you do", explanation: "False assumption of divine ignorance", verseRef: "41:22" }
      ]
    },

    evilCompanions: {
      name: "Evil Companions (Qareen)",
      nameArabic: "القرين السوء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَيَّضْنَا لَهُمْ قُرَنَاءَ", meaning: "And We appointed for them companions", explanation: "Shaytan companions assigned to disbelievers", verseRef: "41:25" },
        { term: "فَزَيَّنُوا لَهُم مَّا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", meaning: "Who made attractive to them what is before and behind them", explanation: "Beautifying sins past and future", verseRef: "41:25" },
        { term: "وَحَقَّ عَلَيْهِمُ الْقَوْلُ", meaning: "And the word became justified against them", explanation: "Decree of punishment confirmed", verseRef: "41:25" },
        { term: "فِي أُمَمٍ قَدْ خَلَتْ مِن قَبْلِهِم", meaning: "Among nations that passed before them", explanation: "Joined previous destroyed nations", verseRef: "41:25" },
        { term: "مِّنَ الْجِنِّ وَالْإِنسِ", meaning: "Of jinn and mankind", explanation: "Both species share this fate", verseRef: "41:25" },
        { term: "إِنَّهُمْ كَانُوا خَاسِرِينَ", meaning: "Indeed they were losers", explanation: "Ultimate loss despite worldly gains", verseRef: "41:25" }
      ]
    },

    disbelieversPlots: {
      name: "Plots Against the Quran",
      nameArabic: "مكر الكافرين بالقرآن",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لَا تَسْمَعُوا لِهَٰذَا الْقُرْآنِ", meaning: "Disbelievers said: Do not listen to this Quran", explanation: "Plot to prevent Quran from spreading", verseRef: "41:26" },
        { term: "وَالْغَوْا فِيهِ", meaning: "And make noise during it", explanation: "Drowning out recitation with noise", verseRef: "41:26" },
        { term: "لَعَلَّكُمْ تَغْلِبُونَ", meaning: "Perhaps you will overcome", explanation: "Hoping to defeat Islam through disruption", verseRef: "41:26" },
        { term: "فَلَنُذِيقَنَّ الَّذِينَ كَفَرُوا عَذَابًا شَدِيدًا", meaning: "So We will surely make disbelievers taste severe punishment", explanation: "Response to their plotting", verseRef: "41:27" },
        { term: "وَلَنَجْزِيَنَّهُمْ أَسْوَأَ الَّذِي كَانُوا يَعْمَلُونَ", meaning: "And We will recompense them for the worst of what they did", explanation: "Punishment matching worst deeds", verseRef: "41:27" },
        { term: "جَزَاءُ أَعْدَاءِ اللَّهِ النَّارُ", meaning: "That is the recompense of Allah's enemies - the Fire", explanation: "Eternal Fire for enemies of Allah", verseRef: "41:28" },
        { term: "لَهُمْ فِيهَا دَارُ الْخُلْدِ", meaning: "For them therein is the home of eternity", explanation: "Permanent dwelling in Hell", verseRef: "41:28" },
        { term: "جَزَاءً بِمَا كَانُوا بِآيَاتِنَا يَجْحَدُونَ", meaning: "As recompense for rejecting Our signs", explanation: "Denial of signs leads to punishment", verseRef: "41:28" }
      ]
    },

    repellingEvilWithGood: {
      name: "Repelling Evil with Good",
      nameArabic: "دفع السيئة بالحسنة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ", meaning: "Good and evil are not equal", explanation: "Fundamental inequality between good and evil", verseRef: "41:34" },
        { term: "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ", meaning: "Repel with that which is better", explanation: "Respond to evil with the best conduct", verseRef: "41:34" },
        { term: "فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ", meaning: "Then the one between you and him is enmity", explanation: "Transforming enemies", verseRef: "41:34" },
        { term: "كَأَنَّهُ وَلِيٌّ حَمِيمٌ", meaning: "Becomes as though a devoted friend", explanation: "Enemy transformed into close friend", verseRef: "41:34" },
        { term: "وَمَا يُلَقَّاهَا إِلَّا الَّذِينَ صَبَرُوا", meaning: "And none is granted it except those who are patient", explanation: "This quality requires patience", verseRef: "41:35" },
        { term: "وَمَا يُلَقَّاهَا إِلَّا ذُو حَظٍّ عَظِيمٍ", meaning: "And none is granted it except one of great fortune", explanation: "Sign of immense spiritual fortune", verseRef: "41:35" }
      ]
    },

    seekingRefuge: {
      name: "Seeking Refuge from Shaytan",
      nameArabic: "الاستعاذة من الشيطان",
      color: '#8B5CF6',
      icon: 'Shield',
      concepts: [
        { term: "وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ", meaning: "And if an evil suggestion from Shaytan provokes you", explanation: "Shaytan's whispers are real", verseRef: "41:36" },
        { term: "فَاسْتَعِذْ بِاللَّهِ", meaning: "Then seek refuge in Allah", explanation: "Command to seek divine protection", verseRef: "41:36" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: "Indeed He is the All-Hearing, All-Knowing", explanation: "Allah hears and knows all", verseRef: "41:36" }
      ]
    },

    signsOfAllah: {
      name: "Signs of Allah in Creation",
      nameArabic: "آيات الله في الخلق",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ", meaning: "And among His signs are the night and day", explanation: "Day and night as divine signs", verseRef: "41:37" },
        { term: "وَالشَّمْسُ وَالْقَمَرُ", meaning: "And the sun and moon", explanation: "Celestial bodies as signs", verseRef: "41:37" },
        { term: "لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ", meaning: "Do not prostrate to the sun or moon", explanation: "Worship Creator, not creation", verseRef: "41:37" },
        { term: "وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ", meaning: "But prostrate to Allah who created them", explanation: "Prostration for Allah alone", verseRef: "41:37" },
        { term: "وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً", meaning: "And among His signs is that you see the earth barren", explanation: "Dead earth as a sign", verseRef: "41:39" },
        { term: "فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ وَرَبَتْ", meaning: "When We send water upon it, it stirs and grows", explanation: "Revival of earth through rain", verseRef: "41:39" },
        { term: "إِنَّ الَّذِي أَحْيَاهَا لَمُحْيِي الْمَوْتَىٰ", meaning: "Indeed He who revives it is the Reviver of the dead", explanation: "Proof of resurrection", verseRef: "41:39" },
        { term: "إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: "Indeed He is over all things capable", explanation: "Allah's unlimited power", verseRef: "41:39" }
      ]
    },

    believersAndAngels: {
      name: "Angels and the Believers",
      nameArabic: "الملائكة والمؤمنون",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا", meaning: "Those who say Our Lord is Allah and remain steadfast", explanation: "Declaration with persistence", verseRef: "41:30" },
        { term: "تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ", meaning: "The angels descend upon them", explanation: "Angels come to believers", verseRef: "41:30" },
        { term: "أَلَّا تَخَافُوا وَلَا تَحْزَنُوا", meaning: "Fear not nor grieve", explanation: "Angels bring reassurance", verseRef: "41:30" },
        { term: "وَأَبْشِرُوا بِالْجَنَّةِ الَّتِي كُنتُمْ تُوعَدُونَ", meaning: "And receive good tidings of Paradise promised to you", explanation: "Glad tidings of Paradise", verseRef: "41:30" },
        { term: "نَحْنُ أَوْلِيَاؤُكُمْ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ", meaning: "We are your allies in worldly life and Hereafter", explanation: "Angels as protectors", verseRef: "41:31" },
        { term: "وَلَكُمْ فِيهَا مَا تَشْتَهِي أَنفُسُكُمْ", meaning: "And you will have therein whatever your souls desire", explanation: "All desires fulfilled in Paradise", verseRef: "41:31" },
        { term: "وَلَكُمْ فِيهَا مَا تَدَّعُونَ", meaning: "And you will have therein whatever you request", explanation: "Every request granted", verseRef: "41:31" },
        { term: "نُزُلًا مِّنْ غَفُورٍ رَّحِيمٍ", meaning: "Accommodation from a Forgiving and Merciful", explanation: "Hospitality from Allah", verseRef: "41:32" }
      ]
    },

    bestSpeech: {
      name: "The Best Speech",
      nameArabic: "أحسن القول",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَنْ أَحْسَنُ قَوْلًا", meaning: "And who is better in speech", explanation: "Rhetorical question about best speech", verseRef: "41:33" },
        { term: "مِّمَّن دَعَا إِلَى اللَّهِ", meaning: "Than one who calls to Allah", explanation: "Calling people to Allah", verseRef: "41:33" },
        { term: "وَعَمِلَ صَالِحًا", meaning: "And does righteous deeds", explanation: "Backing words with action", verseRef: "41:33" },
        { term: "وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ", meaning: "And says: I am of the Muslims", explanation: "Proud declaration of faith", verseRef: "41:33" }
      ]
    },

    deviatingFromSigns: {
      name: "Those Who Deviate from Signs",
      nameArabic: "الذين يلحدون في آياتنا",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "إِنَّ الَّذِينَ يُلْحِدُونَ فِي آيَاتِنَا", meaning: "Those who deviate concerning Our signs", explanation: "Distorting divine signs", verseRef: "41:40" },
        { term: "لَا يَخْفَوْنَ عَلَيْنَا", meaning: "Are not concealed from Us", explanation: "Allah knows all deviators", verseRef: "41:40" },
        { term: "أَفَمَن يُلْقَىٰ فِي النَّارِ خَيْرٌ", meaning: "Is one cast into Fire better", explanation: "Comparison of outcomes", verseRef: "41:40" },
        { term: "أَم مَّن يَأْتِي آمِنًا يَوْمَ الْقِيَامَةِ", meaning: "Or one who comes secure on Day of Resurrection", explanation: "Security on Judgment Day", verseRef: "41:40" },
        { term: "اعْمَلُوا مَا شِئْتُمْ", meaning: "Do what you will", explanation: "Freedom to choose, but consequences follow", verseRef: "41:40" },
        { term: "إِنَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ", meaning: "Indeed He sees what you do", explanation: "Allah sees all actions", verseRef: "41:40" }
      ]
    },

    quranIndestructible: {
      name: "Protection of the Quran",
      nameArabic: "حفظ القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "إِنَّ الَّذِينَ كَفَرُوا بِالذِّكْرِ لَمَّا جَاءَهُمْ", meaning: "Those who disbelieve in the message when it comes", explanation: "Rejection despite its arrival", verseRef: "41:41" },
        { term: "وَإِنَّهُ لَكِتَابٌ عَزِيزٌ", meaning: "And indeed it is a mighty Book", explanation: "Quran's invincible nature", verseRef: "41:41" },
        { term: "لَّا يَأْتِيهِ الْبَاطِلُ مِن بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِ", meaning: "Falsehood cannot approach it from before or behind", explanation: "Protected from all corruption", verseRef: "41:42" },
        { term: "تَنزِيلٌ مِّنْ حَكِيمٍ حَمِيدٍ", meaning: "A revelation from One Wise and Praiseworthy", explanation: "Source guarantees perfection", verseRef: "41:42" }
      ]
    },

    consolationToProphet: {
      name: "Consolation to the Prophet",
      nameArabic: "تسلية النبي",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "مَّا يُقَالُ لَكَ إِلَّا مَا قَدْ قِيلَ لِلرُّسُلِ مِن قَبْلِكَ", meaning: "Nothing is said to you except what was said to messengers before", explanation: "Same treatment as previous prophets", verseRef: "41:43" },
        { term: "إِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ", meaning: "Indeed your Lord is possessor of forgiveness", explanation: "Allah's abundant forgiveness", verseRef: "41:43" },
        { term: "وَذُو عِقَابٍ أَلِيمٍ", meaning: "And possessor of painful punishment", explanation: "Balance of mercy and justice", verseRef: "41:43" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Complete Knowledge",
      nameArabic: "علم الله الشامل",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "إِلَيْهِ يُرَدُّ عِلْمُ السَّاعَةِ", meaning: "To Him is referred knowledge of the Hour", explanation: "Only Allah knows when Day of Judgment", verseRef: "41:47" },
        { term: "وَمَا تَخْرُجُ مِن ثَمَرَاتٍ مِّنْ أَكْمَامِهَا", meaning: "No fruit emerges from its covering", explanation: "Allah knows all growth", verseRef: "41:47" },
        { term: "وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِ", meaning: "No female conceives or delivers except with His knowledge", explanation: "All reproduction known to Allah", verseRef: "41:47" },
        { term: "وَيَوْمَ يُنَادِيهِمْ أَيْنَ شُرَكَائِي", meaning: "And the day He calls them: Where are My partners?", explanation: "Challenge on Judgment Day", verseRef: "41:47" },
        { term: "قَالُوا آذَنَّاكَ مَا مِنَّا مِن شَهِيدٍ", meaning: "They will say: We inform You, none of us is witness", explanation: "False gods cannot testify", verseRef: "41:47" },
        { term: "وَضَلَّ عَنْهُم مَّا كَانُوا يَدْعُونَ مِن قَبْلُ", meaning: "And lost from them is what they used to invoke before", explanation: "False deities disappear", verseRef: "41:48" }
      ]
    },

    humanNature: {
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "لَّا يَسْأَمُ الْإِنسَانُ مِن دُعَاءِ الْخَيْرِ", meaning: "Man does not tire of asking for good", explanation: "Endless desire for good things", verseRef: "41:49" },
        { term: "وَإِن مَّسَّهُ الشَّرُّ فَيَئُوسٌ قَنُوطٌ", meaning: "But if evil touches him, he is despairing", explanation: "Quick to despair in hardship", verseRef: "41:49" },
        { term: "وَلَئِنْ أَذَقْنَاهُ رَحْمَةً مِّنَّا مِن بَعْدِ ضَرَّاءَ مَسَّتْهُ", meaning: "If We let him taste mercy after hardship", explanation: "Response to relief after difficulty", verseRef: "41:50" },
        { term: "لَيَقُولَنَّ هَٰذَا لِي", meaning: "He will surely say: This is due to me", explanation: "Taking credit for blessings", verseRef: "41:50" },
        { term: "وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً", meaning: "And I do not think the Hour will occur", explanation: "Denying Judgment Day", verseRef: "41:50" },
        { term: "وَلَئِن رُّجِعْتُ إِلَىٰ رَبِّي إِنَّ لِي عِندَهُ لَلْحُسْنَىٰ", meaning: "And if I am returned to my Lord, I will have best with Him", explanation: "False confidence about Hereafter", verseRef: "41:50" }
      ]
    },

    signsInSelvesAndHorizons: {
      name: "Signs in Horizons and Selves",
      nameArabic: "الآيات في الآفاق والأنفس",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ", meaning: "We will show them Our signs in the horizons", explanation: "External signs in the universe", verseRef: "41:53" },
        { term: "وَفِي أَنفُسِهِمْ", meaning: "And in themselves", explanation: "Internal signs within humans", verseRef: "41:53" },
        { term: "حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ", meaning: "Until it becomes clear to them that it is the truth", explanation: "Truth becomes undeniable", verseRef: "41:53" },
        { term: "أَوَلَمْ يَكْفِ بِرَبِّكَ أَنَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ", meaning: "Is it not sufficient that your Lord is Witness over all things?", explanation: "Allah witnesses everything", verseRef: "41:53" },
        { term: "أَلَا إِنَّهُمْ فِي مِرْيَةٍ مِّن لِّقَاءِ رَبِّهِمْ", meaning: "Unquestionably they are in doubt about meeting their Lord", explanation: "Root cause is doubting the meeting", verseRef: "41:54" },
        { term: "أَلَا إِنَّهُ بِكُلِّ شَيْءٍ مُّحِيطٌ", meaning: "Unquestionably He encompasses all things", explanation: "Allah's all-encompassing knowledge and power", verseRef: "41:54" }
      ]
    }
  },

  relationships: [
    { from: "كتاب فصلت آياته", to: "قرآنا عربيا", type: "description", description: "Clear Book revealed in Arabic" },
    { from: "بشيرا", to: "نذيرا", type: "complementary", description: "Good news and warning together" },
    { from: "هدى", to: "شفاء", type: "function", description: "Quran guides and heals believers" },
    { from: "سمعهم وأبصارهم وجلودهم", to: "شهد عليهم", type: "testimony", description: "Body parts become witnesses against sinners" },
    { from: "الحسنة", to: "السيئة", type: "contrast", description: "Good and evil are fundamentally unequal" },
    { from: "ادفع بالتي هي أحسن", to: "كأنه ولي حميم", type: "transformation", description: "Responding with good transforms enemies to friends" },
    { from: "ربنا الله", to: "استقاموا", type: "requirement", description: "Declaration must be followed by steadfastness" },
    { from: "استحبوا العمى", to: "صاعقة العذاب", type: "consequence", description: "Choosing blindness leads to thunderbolt punishment" },
    { from: "آيات في الآفاق", to: "آيات في أنفسهم", type: "parallel", description: "Signs external and internal both point to truth" },
    { from: "لا يأتيه الباطل", to: "تنزيل من حكيم حميد", type: "protection", description: "Divine source ensures Quran's protection" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Ha Mim and Quran Description", verses: "41:1-5", description: "Opening letters, Quran as detailed revelation in Arabic" },
      { stage: 2, theme: "Rejection of the Message", verses: "41:6-8", description: "Prophet is human, disbelievers turn away" },
      { stage: 3, theme: "Creation in Six Days", verses: "41:9-12", description: "Earth and heavens created with provisions and order" },
      { stage: 4, theme: "Warning from Aad and Thamud", verses: "41:13-18", description: "Historical examples of arrogance and destruction" },
      { stage: 5, theme: "Body Parts Testifying", verses: "41:19-25", description: "Hearing, sight, and skin witness against sinners" },
      { stage: 6, theme: "Plots Against Quran", verses: "41:26-29", description: "Disbelievers' strategy to drown out recitation" },
      { stage: 7, theme: "Angels with Believers", verses: "41:30-32", description: "Steadfast believers receive angelic support" },
      { stage: 8, theme: "Best Speech and Conduct", verses: "41:33-36", description: "Calling to Allah, repelling evil with good" },
      { stage: 9, theme: "Signs of Allah", verses: "41:37-39", description: "Cosmic signs and resurrection proof" },
      { stage: 10, theme: "Quran's Protection", verses: "41:40-44", description: "Quran invincible, guidance and healing for believers" },
      { stage: 11, theme: "Human Nature", verses: "41:45-50", description: "Man's ingratitude and false assumptions" },
      { stage: 12, theme: "Signs in Horizons and Selves", verses: "41:51-54", description: "External and internal signs prove truth" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Repel evil with good", how: "When someone wrongs you, respond with kindness - this transforms enemies into friends", verse: "41:34" },
      { principle: "Seek refuge from Shaytan", how: "When anger or evil thoughts arise, immediately say: A'udhu billahi min ash-shaytanir rajim", verse: "41:36" },
      { principle: "Declare faith and remain steadfast", how: "Saying 'My Lord is Allah' must be followed by consistent righteous action", verse: "41:30" },
      { principle: "Call others to Allah", how: "The best speech is inviting to Allah while practicing what you preach", verse: "41:33" },
      { principle: "Prostrate to the Creator only", how: "Marvel at creation but worship only the Creator, not sun, moon, or nature", verse: "41:37" },
      { principle: "Remember your body records everything", how: "Your limbs will testify on Judgment Day - be conscious of what you do", verse: "41:20-21" },
      { principle: "Don't despair in hardship", how: "Avoid the human tendency to lose hope when difficulty strikes", verse: "41:49" },
      { principle: "Study signs in horizons and self", how: "Reflect on both external universe and internal human design", verse: "41:53" },
      { principle: "Trust that Quran is healing", how: "Approach Quran as medicine for spiritual ailments, not just information", verse: "41:44" }
    ]
  },

  uniqueInsight: {
    title: "Fussilat - The Detailed Explanation and Transformation",
    insight: "Surah Fussilat (meaning 'Detailed' or 'Clearly Explained') is the second of the Ha-Mim series and contains one of the most powerful psychological insights in the Quran. The teaching in verse 34 - 'Repel evil with that which is better, and the one between you and him is enmity will become like a devoted friend' - is not mere idealism but a profound understanding of human psychology. When met with unexpected kindness, the aggressor's neural patterns are disrupted; their prepared hostility has nowhere to go. The verse continues that this quality is only granted to 'those who are patient' and 'one of great fortune' - recognizing that overcoming the instinct for retaliation requires spiritual maturity. The surah's unique concept of body parts testifying (41:20-22) presents a terrifying scene where hearing, sight, and skin become witnesses. The sinners' question - 'Why did you testify against us?' - and the response - 'Allah who makes all things speak made us speak' - illustrates that nothing in creation can hide from Allah. Modern science's understanding of how our bodies record our actions (epigenetics, cellular memory) gives new appreciation to this imagery."
  },

  historicalContext: {
    note: "This Makki surah was revealed during intense opposition to the Prophet in Mecca. The instruction to 'repel evil with good' (41:34) was particularly relevant as Muslims faced daily persecution. The reference to disbelievers making noise during Quran recitation (41:26) describes actual tactics used by the Quraysh to prevent people from hearing the message. The opening 'Ha Mim' connects this to a series of seven surahs (40-46) all beginning with these letters, revealed during the middle Makkan period. The surah's name 'Fussilat' (Detailed) refers to verse 3 where the Quran is described as having its verses 'clearly explained' - a response to accusations that it was unclear or incomprehensible."
  },

  linguisticFeatures: {
    features: [
      { feature: "حم", example: "Ha Mim", effect: "Mysterious letters that captivate attention and establish Quranic uniqueness" },
      { feature: "فُصِّلَتْ", example: "Detailed/Explained", effect: "Passive intensive form - thoroughly and completely explained" },
      { feature: "صَرْصَرًا", example: "Screaming wind", effect: "Onomatopoeia - the sound of the destructive wind that destroyed Aad" },
      { feature: "أَتَيْنَا طَائِعِينَ", example: "We come willingly", effect: "Creation speaking - personification showing universal submission" },
      { feature: "وَلِيٌّ حَمِيمٌ", example: "Devoted friend", effect: "Hamim means warm/intimate - beyond ordinary friendship" },
      { feature: "الْآفَاقِ", example: "Horizons", effect: "Plural of ufuq - vast cosmic horizons containing signs" }
    ]
  },

  sajdahVerse: {
    verse: 37,
    text: "وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ وَالشَّمْسُ وَالْقَمَرُ ۚ لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",
    translation: "And among His signs are the night and day and the sun and moon. Do not prostrate to the sun or moon, but prostrate to Allah who created them, if it is Him you worship",
    note: "This is a verse of sajdah (prostration). The command is clear - worship the Creator, not the creation. This corrects the practice of ancient peoples who worshipped celestial bodies."
  },

  hamimConnection: {
    position: "Second of seven Ha-Mim surahs",
    series: [40, 41, 42, 43, 44, 45, 46],
    names: ["Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf"],
    commonThemes: [
      "Divine revelation and its defense",
      "Resurrection and accountability",
      "Stories of previous nations",
      "Prophetic consolation",
      "Challenge to disbelievers"
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "41:11", topic: "Cosmic smoke", note: "Heavens described as 'smoke' (dukhan) - matches modern understanding of early universe as hot gas/plasma" },
      { verse: "41:9-12", topic: "Creation timeline", note: "Six days/periods for creation - stages not instantaneous, consistent with cosmic evolution" },
      { verse: "41:53", topic: "Signs in horizons and selves", note: "External cosmos and internal human biology both reveal divine design" },
      { verse: "41:39", topic: "Earth revival", note: "Dead earth reviving with water - water cycle and plant germination as resurrection proof" },
      { verse: "41:21", topic: "Body recording", note: "Concept that body records actions - modern research on cellular memory and epigenetics" }
    ]
  }
};

export default ONTOLOGY;
