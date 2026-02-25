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
        { term: "حم", meaning: { en: "Ha Mim", ur: "حم" }, explanation: { en: "Mysterious letters - one of seven Ha-Mim surahs (40-46)", ur: "Mysterious letters - one of seven Ha-Mim surahs (40-46)" }, verseRef: "41:1" },
        { term: "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ", meaning: { en: "A revelation from the Most Merciful", ur: "رحمن رحیم کی طرف سے نازل کردہ" }, explanation: { en: "Source of Quran is Allah's mercy", ur: "Source of Quran is Allah's mercy" }, verseRef: "41:2" },
        { term: "كِتَابٌ فُصِّلَتْ آيَاتُهُ", meaning: { en: "A Book whose verses are detailed", ur: "ایک کتاب جس کی آیتیں تفصیل سے بیان کی گئیں" }, explanation: { en: "Fussilat - clearly explained and distinctly set forth", ur: "Fussilat - clearly explained and distinctly set forth" }, verseRef: "41:3" },
        { term: "قُرْآنًا عَرَبِيًّا", meaning: { en: "An Arabic Quran", ur: "عربی قرآن" }, explanation: { en: "Revealed in Arabic for people who understand", ur: "Revealed in Arabic for people who understand" }, verseRef: "41:3" },
        { term: "لِّقَوْمٍ يَعْلَمُونَ", meaning: { en: "For a people who know", ur: "ان لوگوں کے لیے جو جانتے ہیں" }, explanation: { en: "Addressed to those who use knowledge", ur: "Addressed to those who use knowledge" }, verseRef: "41:3" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: { en: "Giver of good tidings and warner", ur: "خوشخبری دینے والا اور ڈرانے والا" }, explanation: { en: "Quran's dual function - hope and warning", ur: "Quran's dual function - hope and warning" }, verseRef: "41:4" },
        { term: "هُدًى وَشِفَاءٌ", meaning: { en: "Guidance and healing", ur: "ہدایت اور شفاء" }, explanation: { en: "Quran heals hearts and guides to truth", ur: "Quran heals hearts and guides to truth" }, verseRef: "41:44" },
        { term: "لِّلَّذِينَ آمَنُوا", meaning: { en: "For those who believe", ur: "For those who believe" }, explanation: { en: "Believers receive guidance and healing", ur: "Believers receive guidance and healing" }, verseRef: "41:44" },
        { term: "وَقْرٌ", meaning: { en: "Deafness", ur: "Deafness" }, explanation: { en: "For disbelievers, it is deafness in their ears", ur: "For disbelievers, it is deafness in their ears" }, verseRef: "41:44" },
        { term: "عَمًى", meaning: { en: "Blindness", ur: "Blindness" }, explanation: { en: "And upon them is blindness to truth", ur: "And upon them is blindness to truth" }, verseRef: "41:44" }
      ]
    },

    creationInSixDays: {
      name: "Creation in Six Days",
      nameArabic: "الخلق في ستة أيام",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "خَلَقَ الْأَرْضَ فِي يَوْمَيْنِ", meaning: { en: "Created the earth in two days", ur: "زمین کو دو دنوں میں پیدا کیا" }, explanation: { en: "First stage of creation", ur: "First stage of creation" }, verseRef: "41:9" },
        { term: "رَبُّ الْعَالَمِينَ", meaning: { en: "Lord of the worlds", ur: "تمام جہانوں کا رب" }, explanation: { en: "Creator of everything that exists", ur: "Creator of everything that exists" }, verseRef: "41:9" },
        { term: "وَجَعَلَ فِيهَا رَوَاسِيَ", meaning: { en: "And placed therein firmly set mountains", ur: "And placed therein firmly set mountains" }, explanation: { en: "Mountains for stability", ur: "Mountains for stability" }, verseRef: "41:10" },
        { term: "وَبَارَكَ فِيهَا", meaning: { en: "And blessed it", ur: "And blessed it" }, explanation: { en: "Earth is blessed with provisions", ur: "Earth is blessed with provisions" }, verseRef: "41:10" },
        { term: "وَقَدَّرَ فِيهَا أَقْوَاتَهَا", meaning: { en: "And determined therein its sustenance", ur: "And determined therein its sustenance" }, explanation: { en: "Provision precisely measured", ur: "Provision precisely measured" }, verseRef: "41:10" },
        { term: "فِي أَرْبَعَةِ أَيَّامٍ", meaning: { en: "In four days", ur: "In four days" }, explanation: { en: "Total for earth's formation with provisions", ur: "Total for earth's formation with provisions" }, verseRef: "41:10" },
        { term: "سَوَاءً لِّلسَّائِلِينَ", meaning: { en: "Equal for those who ask", ur: "Equal for those who ask" }, explanation: { en: "Sustenance available to all who seek", ur: "Sustenance available to all who seek" }, verseRef: "41:10" },
        { term: "ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ", meaning: { en: "Then He directed to the heaven while it was smoke", ur: "پھر آسمان کی طرف متوجہ ہوا جبکہ وہ دھواں تھا" }, explanation: { en: "Heavens were initially gaseous", ur: "Heavens were initially gaseous" }, verseRef: "41:11" },
        { term: "ائْتِيَا طَوْعًا أَوْ كَرْهًا", meaning: { en: "Come willingly or unwillingly", ur: "آؤ خوشی سے یا مجبوری سے" }, explanation: { en: "Allah's command to heaven and earth", ur: "Allah's command to heaven and earth" }, verseRef: "41:11" },
        { term: "قَالَتَا أَتَيْنَا طَائِعِينَ", meaning: { en: "They said: We come willingly", ur: "انہوں نے کہا: ہم خوشی سے آتے ہیں" }, explanation: { en: "Creation submits to Allah", ur: "Creation submits to Allah" }, verseRef: "41:11" },
        { term: "فَقَضَاهُنَّ سَبْعَ سَمَاوَاتٍ فِي يَوْمَيْنِ", meaning: { en: "He completed them as seven heavens in two days", ur: "He completed them as seven heavens in two days" }, explanation: { en: "Heavens formed in two days", ur: "Heavens formed in two days" }, verseRef: "41:12" },
        { term: "وَأَوْحَىٰ فِي كُلِّ سَمَاءٍ أَمْرَهَا", meaning: { en: "And inspired in each heaven its command", ur: "And inspired in each heaven its command" }, explanation: { en: "Each heaven given its function", ur: "Each heaven given its function" }, verseRef: "41:12" },
        { term: "وَزَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ", meaning: { en: "And We adorned the nearest heaven with lamps", ur: "And We adorned the nearest heaven with lamps" }, explanation: { en: "Stars as decoration and protection", ur: "Stars as decoration and protection" }, verseRef: "41:12" },
        { term: "وَحِفْظًا", meaning: { en: "And as protection", ur: "And as protection" }, explanation: { en: "Stars protect from devils", ur: "Stars protect from devils" }, verseRef: "41:12" }
      ]
    },

    warningsFromHistory: {
      name: "Warnings from Previous Nations",
      nameArabic: "عبر من الأمم السابقة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَإِنْ أَعْرَضُوا فَقُلْ أَنذَرْتُكُمْ صَاعِقَةً", meaning: { en: "If they turn away, say: I warn you of a thunderbolt", ur: "If they turn away, say: I warn you of a thunderbolt" }, explanation: { en: "Warning of sudden punishment", ur: "Warning of sudden punishment" }, verseRef: "41:13" },
        { term: "مِّثْلَ صَاعِقَةِ عَادٍ وَثَمُودَ", meaning: { en: "Like the thunderbolt of Aad and Thamud", ur: "Like the thunderbolt of Aad and Thamud" }, explanation: { en: "Historical examples of destruction", ur: "تباہی کی تاریخی مثالیں" }, verseRef: "41:13" },
        { term: "إِذْ جَاءَتْهُمُ الرُّسُلُ مِن بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ", meaning: { en: "When messengers came to them from before and after", ur: "When messengers came to them from before and after" }, explanation: { en: "Continuous prophetic mission", ur: "Continuous prophetic mission" }, verseRef: "41:14" },
        { term: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ", meaning: { en: "Worship none but Allah", ur: "Worship none but Allah" }, explanation: { en: "Core message of all prophets", ur: "Core message of all prophets" }, verseRef: "41:14" },
        { term: "لَوْ شَاءَ رَبُّنَا لَأَنزَلَ مَلَائِكَةً", meaning: { en: "If our Lord had willed, He would have sent angels", ur: "If our Lord had willed, He would have sent angels" }, explanation: { en: "Their excuse for rejecting human messengers", ur: "Their excuse for rejecting human messengers" }, verseRef: "41:14" },
        { term: "فَإِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", meaning: { en: "Indeed we are disbelievers in what you were sent with", ur: "Indeed we are disbelievers in what you were sent with" }, explanation: { en: "Outright rejection", ur: "Outright rejection" }, verseRef: "41:14" }
      ]
    },

    aadAndThamud: {
      name: "Story of Aad and Thamud",
      nameArabic: "قصة عاد وثمود",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ", meaning: { en: "As for Aad, they were arrogant in the land", ur: "As for Aad, they were arrogant in the land" }, explanation: { en: "Aad's pride and tyranny", ur: "Aad's pride and tyranny" }, verseRef: "41:15" },
        { term: "بِغَيْرِ الْحَقِّ", meaning: { en: "Without right", ur: "Without right" }, explanation: { en: "Unjustified arrogance", ur: "Unjustified arrogance" }, verseRef: "41:15" },
        { term: "مَنْ أَشَدُّ مِنَّا قُوَّةً", meaning: { en: "Who is mightier than us in strength?", ur: "Who is mightier than us in strength?" }, explanation: { en: "Boasting of physical power", ur: "Boasting of physical power" }, verseRef: "41:15" },
        { term: "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً", meaning: { en: "Did they not see that Allah who created them is mightier than them?", ur: "Did they not see that Allah who created them is mightier than them?" }, explanation: { en: "Allah's power exceeds all creation", ur: "Allah's power exceeds all creation" }, verseRef: "41:15" },
        { term: "رِيحًا صَرْصَرًا فِي أَيَّامٍ نَّحِسَاتٍ", meaning: { en: "A screaming wind on days of misfortune", ur: "A screaming wind on days of misfortune" }, explanation: { en: "Wind that destroyed Aad", ur: "Wind that destroyed Aad" }, verseRef: "41:16" },
        { term: "لِّنُذِيقَهُمْ عَذَابَ الْخِزْيِ", meaning: { en: "To make them taste the punishment of disgrace", ur: "To make them taste the punishment of disgrace" }, explanation: { en: "Humiliation in this world", ur: "Humiliation in this world" }, verseRef: "41:16" },
        { term: "وَلَعَذَابُ الْآخِرَةِ أَخْزَىٰ", meaning: { en: "And the punishment of the Hereafter is more disgracing", ur: "And the punishment of the Hereafter is more disgracing" }, explanation: { en: "Greater disgrace awaits", ur: "Greater disgrace awaits" }, verseRef: "41:16" },
        { term: "وَأَمَّا ثَمُودُ فَهَدَيْنَاهُمْ", meaning: { en: "And as for Thamud, We guided them", ur: "And as for Thamud, We guided them" }, explanation: { en: "Thamud received clear guidance", ur: "Thamud received clear guidance" }, verseRef: "41:17" },
        { term: "فَاسْتَحَبُّوا الْعَمَىٰ عَلَى الْهُدَىٰ", meaning: { en: "But they preferred blindness over guidance", ur: "But they preferred blindness over guidance" }, explanation: { en: "Chose misguidance deliberately", ur: "Chose misguidance deliberately" }, verseRef: "41:17" },
        { term: "فَأَخَذَتْهُمْ صَاعِقَةُ الْعَذَابِ الْهُونِ", meaning: { en: "So the thunderbolt of humiliating punishment seized them", ur: "So the thunderbolt of humiliating punishment seized them" }, explanation: { en: "Sudden destruction", ur: "Sudden destruction" }, verseRef: "41:17" }
      ]
    },

    bodyPartsTestifying: {
      name: "Body Parts Testifying on Judgment Day",
      nameArabic: "شهادة الأعضاء يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَيَوْمَ يُحْشَرُ أَعْدَاءُ اللَّهِ إِلَى النَّارِ", meaning: { en: "And the day the enemies of Allah are gathered to the Fire", ur: "And the day the enemies of Allah are gathered to the Fire" }, explanation: { en: "Enemies of Allah assembled for punishment", ur: "Enemies of Allah assembled for punishment" }, verseRef: "41:19" },
        { term: "فَهُمْ يُوزَعُونَ", meaning: { en: "They will be driven in groups", ur: "They will be driven in groups" }, explanation: { en: "Organized march to Hell", ur: "Organized march to Hell" }, verseRef: "41:19" },
        { term: "حَتَّىٰ إِذَا مَا جَاءُوهَا", meaning: { en: "Until when they reach it", ur: "Until when they reach it" }, explanation: { en: "Arriving at Hellfire", ur: "Arriving at Hellfire" }, verseRef: "41:20" },
        { term: "شَهِدَ عَلَيْهِمْ سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُم", meaning: { en: "Their hearing, sight, and skins will testify against them", ur: "Their hearing, sight, and skins will testify against them" }, explanation: { en: "Body parts become witnesses", ur: "Body parts become witnesses" }, verseRef: "41:20" },
        { term: "بِمَا كَانُوا يَعْمَلُونَ", meaning: { en: "About what they used to do", ur: "About what they used to do" }, explanation: { en: "Every deed recorded by the body", ur: "Every deed recorded by the body" }, verseRef: "41:20" },
        { term: "وَقَالُوا لِجُلُودِهِمْ لِمَ شَهِدتُّمْ عَلَيْنَا", meaning: { en: "They will say to their skins: Why did you testify against us?", ur: "They will say to their skins: Why did you testify against us?" }, explanation: { en: "Questioning their own bodies", ur: "Questioning their own bodies" }, verseRef: "41:21" },
        { term: "قَالُوا أَنطَقَنَا اللَّهُ الَّذِي أَنطَقَ كُلَّ شَيْءٍ", meaning: { en: "They will say: Allah made us speak, who makes all things speak", ur: "They will say: Allah made us speak, who makes all things speak" }, explanation: { en: "Allah gives speech to all things", ur: "Allah gives speech to all things" }, verseRef: "41:21" },
        { term: "وَهُوَ خَلَقَكُمْ أَوَّلَ مَرَّةٍ", meaning: { en: "And He created you the first time", ur: "And He created you the first time" }, explanation: { en: "The Creator controls all", ur: "The Creator controls all" }, verseRef: "41:21" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: { en: "And to Him you are returned", ur: "And to Him you are returned" }, explanation: { en: "Ultimate return to Allah", ur: "Ultimate return to Allah" }, verseRef: "41:21" },
        { term: "وَمَا كُنتُمْ تَسْتَتِرُونَ أَن يَشْهَدَ عَلَيْكُمْ سَمْعُكُمْ وَلَا أَبْصَارُكُمْ", meaning: { en: "You did not hide yourselves from the testimony of your hearing and sight", ur: "You did not hide yourselves from the testimony of your hearing and sight" }, explanation: { en: "Could not hide from own body parts", ur: "Could not hide from own body parts" }, verseRef: "41:22" },
        { term: "وَلَا جُلُودُكُمْ", meaning: { en: "Nor your skins", ur: "Nor your skins" }, explanation: { en: "Skin as a witness", ur: "Skin as a witness" }, verseRef: "41:22" },
        { term: "وَلَٰكِن ظَنَنتُمْ أَنَّ اللَّهَ لَا يَعْلَمُ كَثِيرًا مِّمَّا تَعْمَلُونَ", meaning: { en: "But you thought Allah did not know much of what you do", ur: "But you thought Allah did not know much of what you do" }, explanation: { en: "False assumption of divine ignorance", ur: "False assumption of divine ignorance" }, verseRef: "41:22" }
      ]
    },

    evilCompanions: {
      name: "Evil Companions (Qareen)",
      nameArabic: "القرين السوء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَيَّضْنَا لَهُمْ قُرَنَاءَ", meaning: { en: "And We appointed for them companions", ur: "And We appointed for them companions" }, explanation: { en: "Shaytan companions assigned to disbelievers", ur: "Shaytan companions assigned to disbelievers" }, verseRef: "41:25" },
        { term: "فَزَيَّنُوا لَهُم مَّا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", meaning: { en: "Who made attractive to them what is before and behind them", ur: "Who made attractive to them what is before and behind them" }, explanation: { en: "Beautifying sins past and future", ur: "Beautifying sins past and future" }, verseRef: "41:25" },
        { term: "وَحَقَّ عَلَيْهِمُ الْقَوْلُ", meaning: { en: "And the word became justified against them", ur: "And the word became justified against them" }, explanation: { en: "Decree of punishment confirmed", ur: "Decree of punishment confirmed" }, verseRef: "41:25" },
        { term: "فِي أُمَمٍ قَدْ خَلَتْ مِن قَبْلِهِم", meaning: { en: "Among nations that passed before them", ur: "Among nations that passed before them" }, explanation: { en: "Joined previous destroyed nations", ur: "Joined previous destroyed nations" }, verseRef: "41:25" },
        { term: "مِّنَ الْجِنِّ وَالْإِنسِ", meaning: { en: "Of jinn and mankind", ur: "Of jinn and mankind" }, explanation: { en: "Both species share this fate", ur: "Both species share this fate" }, verseRef: "41:25" },
        { term: "إِنَّهُمْ كَانُوا خَاسِرِينَ", meaning: { en: "Indeed they were losers", ur: "Indeed they were losers" }, explanation: { en: "Ultimate loss despite worldly gains", ur: "Ultimate loss despite worldly gains" }, verseRef: "41:25" }
      ]
    },

    disbelieversPlots: {
      name: "Plots Against the Quran",
      nameArabic: "مكر الكافرين بالقرآن",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لَا تَسْمَعُوا لِهَٰذَا الْقُرْآنِ", meaning: { en: "Disbelievers said: Do not listen to this Quran", ur: "Disbelievers said: Do not listen to this Quran" }, explanation: { en: "Plot to prevent Quran from spreading", ur: "Plot to prevent Quran from spreading" }, verseRef: "41:26" },
        { term: "وَالْغَوْا فِيهِ", meaning: { en: "And make noise during it", ur: "And make noise during it" }, explanation: { en: "Drowning out recitation with noise", ur: "Drowning out recitation with noise" }, verseRef: "41:26" },
        { term: "لَعَلَّكُمْ تَغْلِبُونَ", meaning: { en: "Perhaps you will overcome", ur: "Perhaps you will overcome" }, explanation: { en: "Hoping to defeat Islam through disruption", ur: "Hoping to defeat Islam through disruption" }, verseRef: "41:26" },
        { term: "فَلَنُذِيقَنَّ الَّذِينَ كَفَرُوا عَذَابًا شَدِيدًا", meaning: { en: "So We will surely make disbelievers taste severe punishment", ur: "So We will surely make disbelievers taste severe punishment" }, explanation: { en: "Response to their plotting", ur: "Response to their plotting" }, verseRef: "41:27" },
        { term: "وَلَنَجْزِيَنَّهُمْ أَسْوَأَ الَّذِي كَانُوا يَعْمَلُونَ", meaning: { en: "And We will recompense them for the worst of what they did", ur: "And We will recompense them for the worst of what they did" }, explanation: { en: "Punishment matching worst deeds", ur: "Punishment matching worst deeds" }, verseRef: "41:27" },
        { term: "جَزَاءُ أَعْدَاءِ اللَّهِ النَّارُ", meaning: { en: "That is the recompense of Allah's enemies - the Fire", ur: "That is the recompense of Allah's enemies - the Fire" }, explanation: { en: "Eternal Fire for enemies of Allah", ur: "Eternal Fire for enemies of Allah" }, verseRef: "41:28" },
        { term: "لَهُمْ فِيهَا دَارُ الْخُلْدِ", meaning: { en: "For them therein is the home of eternity", ur: "For them therein is the home of eternity" }, explanation: { en: "Permanent dwelling in Hell", ur: "Permanent dwelling in Hell" }, verseRef: "41:28" },
        { term: "جَزَاءً بِمَا كَانُوا بِآيَاتِنَا يَجْحَدُونَ", meaning: { en: "As recompense for rejecting Our signs", ur: "As recompense for rejecting Our signs" }, explanation: { en: "Denial of signs leads to punishment", ur: "Denial of signs leads to punishment" }, verseRef: "41:28" }
      ]
    },

    repellingEvilWithGood: {
      name: "Repelling Evil with Good",
      nameArabic: "دفع السيئة بالحسنة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ", meaning: { en: "Good and evil are not equal", ur: "نیکی اور بدی برابر نہیں" }, explanation: { en: "Fundamental inequality between good and evil", ur: "Fundamental inequality between good and evil" }, verseRef: "41:34" },
        { term: "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ", meaning: { en: "Repel with that which is better", ur: "برائی کو بہتر طریقے سے دفع کرو" }, explanation: { en: "Respond to evil with the best conduct", ur: "Respond to evil with the best conduct" }, verseRef: "41:34" },
        { term: "فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ", meaning: { en: "Then the one between you and him is enmity", ur: "Then the one between you and him is enmity" }, explanation: { en: "Transforming enemies", ur: "Transforming enemies" }, verseRef: "41:34" },
        { term: "كَأَنَّهُ وَلِيٌّ حَمِيمٌ", meaning: { en: "Becomes as though a devoted friend", ur: "Becomes as though a devoted friend" }, explanation: { en: "Enemy transformed into close friend", ur: "Enemy transformed into close friend" }, verseRef: "41:34" },
        { term: "وَمَا يُلَقَّاهَا إِلَّا الَّذِينَ صَبَرُوا", meaning: { en: "And none is granted it except those who are patient", ur: "And none is granted it except those who are patient" }, explanation: { en: "This quality requires patience", ur: "This quality requires patience" }, verseRef: "41:35" },
        { term: "وَمَا يُلَقَّاهَا إِلَّا ذُو حَظٍّ عَظِيمٍ", meaning: { en: "And none is granted it except one of great fortune", ur: "And none is granted it except one of great fortune" }, explanation: { en: "Sign of immense spiritual fortune", ur: "Sign of immense spiritual fortune" }, verseRef: "41:35" }
      ]
    },

    seekingRefuge: {
      name: "Seeking Refuge from Shaytan",
      nameArabic: "الاستعاذة من الشيطان",
      color: '#8B5CF6',
      icon: 'Shield',
      concepts: [
        { term: "وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ", meaning: { en: "And if an evil suggestion from Shaytan provokes you", ur: "And if an evil suggestion from Shaytan provokes you" }, explanation: { en: "Shaytan's whispers are real", ur: "Shaytan's whispers are real" }, verseRef: "41:36" },
        { term: "فَاسْتَعِذْ بِاللَّهِ", meaning: { en: "Then seek refuge in Allah", ur: "Then seek refuge in Allah" }, explanation: { en: "Command to seek divine protection", ur: "Command to seek divine protection" }, verseRef: "41:36" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: { en: "Indeed He is the All-Hearing, All-Knowing", ur: "Indeed He is the All-Hearing, All-Knowing" }, explanation: { en: "Allah hears and knows all", ur: "Allah hears and knows all" }, verseRef: "41:36" }
      ]
    },

    signsOfAllah: {
      name: "Signs of Allah in Creation",
      nameArabic: "آيات الله في الخلق",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ", meaning: { en: "And among His signs are the night and day", ur: "And among His signs are the night and day" }, explanation: { en: "Day and night as divine signs", ur: "Day and night as divine signs" }, verseRef: "41:37" },
        { term: "وَالشَّمْسُ وَالْقَمَرُ", meaning: { en: "And the sun and moon", ur: "And the sun and moon" }, explanation: { en: "Celestial bodies as signs", ur: "Celestial bodies as signs" }, verseRef: "41:37" },
        { term: "لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ", meaning: { en: "Do not prostrate to the sun or moon", ur: "Do not prostrate to the sun or moon" }, explanation: { en: "Worship Creator, not creation", ur: "Worship Creator, not creation" }, verseRef: "41:37" },
        { term: "وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ", meaning: { en: "But prostrate to Allah who created them", ur: "But prostrate to Allah who created them" }, explanation: { en: "Prostration for Allah alone", ur: "Prostration for Allah alone" }, verseRef: "41:37" },
        { term: "وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً", meaning: { en: "And among His signs is that you see the earth barren", ur: "And among His signs is that you see the earth barren" }, explanation: { en: "Dead earth as a sign", ur: "Dead earth as a sign" }, verseRef: "41:39" },
        { term: "فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ وَرَبَتْ", meaning: { en: "When We send water upon it, it stirs and grows", ur: "When We send water upon it, it stirs and grows" }, explanation: { en: "Revival of earth through rain", ur: "Revival of earth through rain" }, verseRef: "41:39" },
        { term: "إِنَّ الَّذِي أَحْيَاهَا لَمُحْيِي الْمَوْتَىٰ", meaning: { en: "Indeed He who revives it is the Reviver of the dead", ur: "Indeed He who revives it is the Reviver of the dead" }, explanation: { en: "Proof of resurrection", ur: "Proof of resurrection" }, verseRef: "41:39" },
        { term: "إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "Indeed He is over all things capable", ur: "Indeed He is over all things capable" }, explanation: { en: "Allah's unlimited power", ur: "Allah's unlimited power" }, verseRef: "41:39" }
      ]
    },

    believersAndAngels: {
      name: "Angels and the Believers",
      nameArabic: "الملائكة والمؤمنون",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا", meaning: { en: "Those who say Our Lord is Allah and remain steadfast", ur: "جو کہتے ہیں ہمارا رب اللہ ہے پھر ثابت قدم رہتے ہیں" }, explanation: { en: "Declaration with persistence", ur: "Declaration with persistence" }, verseRef: "41:30" },
        { term: "تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ", meaning: { en: "The angels descend upon them", ur: "ان پر فرشتے اترتے ہیں" }, explanation: { en: "Angels come to believers", ur: "Angels come to believers" }, verseRef: "41:30" },
        { term: "أَلَّا تَخَافُوا وَلَا تَحْزَنُوا", meaning: { en: "Fear not nor grieve", ur: "نہ ڈرو اور نہ غمگین ہو" }, explanation: { en: "Angels bring reassurance", ur: "Angels bring reassurance" }, verseRef: "41:30" },
        { term: "وَأَبْشِرُوا بِالْجَنَّةِ الَّتِي كُنتُمْ تُوعَدُونَ", meaning: { en: "And receive good tidings of Paradise promised to you", ur: "And receive good tidings of Paradise promised to you" }, explanation: { en: "Glad tidings of Paradise", ur: "Glad tidings of Paradise" }, verseRef: "41:30" },
        { term: "نَحْنُ أَوْلِيَاؤُكُمْ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ", meaning: { en: "We are your allies in worldly life and Hereafter", ur: "We are your allies in worldly life and Hereafter" }, explanation: { en: "Angels as protectors", ur: "Angels as protectors" }, verseRef: "41:31" },
        { term: "وَلَكُمْ فِيهَا مَا تَشْتَهِي أَنفُسُكُمْ", meaning: { en: "And you will have therein whatever your souls desire", ur: "And you will have therein whatever your souls desire" }, explanation: { en: "All desires fulfilled in Paradise", ur: "All desires fulfilled in Paradise" }, verseRef: "41:31" },
        { term: "وَلَكُمْ فِيهَا مَا تَدَّعُونَ", meaning: { en: "And you will have therein whatever you request", ur: "And you will have therein whatever you request" }, explanation: { en: "Every request granted", ur: "Every request granted" }, verseRef: "41:31" },
        { term: "نُزُلًا مِّنْ غَفُورٍ رَّحِيمٍ", meaning: { en: "Accommodation from a Forgiving and Merciful", ur: "Accommodation from a Forgiving and Merciful" }, explanation: { en: "Hospitality from Allah", ur: "Hospitality from Allah" }, verseRef: "41:32" }
      ]
    },

    bestSpeech: {
      name: "The Best Speech",
      nameArabic: "أحسن القول",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَنْ أَحْسَنُ قَوْلًا", meaning: { en: "And who is better in speech", ur: "And who is better in speech" }, explanation: { en: "Rhetorical question about best speech", ur: "Rhetorical question about best speech" }, verseRef: "41:33" },
        { term: "مِّمَّن دَعَا إِلَى اللَّهِ", meaning: { en: "Than one who calls to Allah", ur: "Than one who calls to Allah" }, explanation: { en: "Calling people to Allah", ur: "Calling people to Allah" }, verseRef: "41:33" },
        { term: "وَعَمِلَ صَالِحًا", meaning: { en: "And does righteous deeds", ur: "And does righteous deeds" }, explanation: { en: "Backing words with action", ur: "Backing words with action" }, verseRef: "41:33" },
        { term: "وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ", meaning: { en: "And says: I am of the Muslims", ur: "And says: I am of the Muslims" }, explanation: { en: "Proud declaration of faith", ur: "Proud declaration of faith" }, verseRef: "41:33" }
      ]
    },

    deviatingFromSigns: {
      name: "Those Who Deviate from Signs",
      nameArabic: "الذين يلحدون في آياتنا",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "إِنَّ الَّذِينَ يُلْحِدُونَ فِي آيَاتِنَا", meaning: { en: "Those who deviate concerning Our signs", ur: "Those who deviate concerning Our signs" }, explanation: { en: "Distorting divine signs", ur: "Distorting divine signs" }, verseRef: "41:40" },
        { term: "لَا يَخْفَوْنَ عَلَيْنَا", meaning: { en: "Are not concealed from Us", ur: "Are not concealed from Us" }, explanation: { en: "Allah knows all deviators", ur: "Allah knows all deviators" }, verseRef: "41:40" },
        { term: "أَفَمَن يُلْقَىٰ فِي النَّارِ خَيْرٌ", meaning: { en: "Is one cast into Fire better", ur: "Is one cast into Fire better" }, explanation: { en: "Comparison of outcomes", ur: "Comparison of outcomes" }, verseRef: "41:40" },
        { term: "أَم مَّن يَأْتِي آمِنًا يَوْمَ الْقِيَامَةِ", meaning: { en: "Or one who comes secure on Day of Resurrection", ur: "Or one who comes secure on Day of Resurrection" }, explanation: { en: "Security on Judgment Day", ur: "Security on Judgment Day" }, verseRef: "41:40" },
        { term: "اعْمَلُوا مَا شِئْتُمْ", meaning: { en: "Do what you will", ur: "Do what you will" }, explanation: { en: "Freedom to choose, but consequences follow", ur: "Freedom to choose, but consequences follow" }, verseRef: "41:40" },
        { term: "إِنَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ", meaning: { en: "Indeed He sees what you do", ur: "Indeed He sees what you do" }, explanation: { en: "Allah sees all actions", ur: "Allah sees all actions" }, verseRef: "41:40" }
      ]
    },

    quranIndestructible: {
      name: "Protection of the Quran",
      nameArabic: "حفظ القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "إِنَّ الَّذِينَ كَفَرُوا بِالذِّكْرِ لَمَّا جَاءَهُمْ", meaning: { en: "Those who disbelieve in the message when it comes", ur: "Those who disbelieve in the message when it comes" }, explanation: { en: "Rejection despite its arrival", ur: "Rejection despite its arrival" }, verseRef: "41:41" },
        { term: "وَإِنَّهُ لَكِتَابٌ عَزِيزٌ", meaning: { en: "And indeed it is a mighty Book", ur: "And indeed it is a mighty Book" }, explanation: { en: "Quran's invincible nature", ur: "Quran's invincible nature" }, verseRef: "41:41" },
        { term: "لَّا يَأْتِيهِ الْبَاطِلُ مِن بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِ", meaning: { en: "Falsehood cannot approach it from before or behind", ur: "Falsehood cannot approach it from before or behind" }, explanation: { en: "Protected from all corruption", ur: "Protected from all corruption" }, verseRef: "41:42" },
        { term: "تَنزِيلٌ مِّنْ حَكِيمٍ حَمِيدٍ", meaning: { en: "A revelation from One Wise and Praiseworthy", ur: "A revelation from One Wise and Praiseworthy" }, explanation: { en: "Source guarantees perfection", ur: "Source guarantees perfection" }, verseRef: "41:42" }
      ]
    },

    consolationToProphet: {
      name: "Consolation to the Prophet",
      nameArabic: "تسلية النبي",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "مَّا يُقَالُ لَكَ إِلَّا مَا قَدْ قِيلَ لِلرُّسُلِ مِن قَبْلِكَ", meaning: { en: "Nothing is said to you except what was said to messengers before", ur: "Nothing is said to you except what was said to messengers before" }, explanation: { en: "Same treatment as previous prophets", ur: "Same treatment as previous prophets" }, verseRef: "41:43" },
        { term: "إِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ", meaning: { en: "Indeed your Lord is possessor of forgiveness", ur: "Indeed your Lord is possessor of forgiveness" }, explanation: { en: "Allah's abundant forgiveness", ur: "Allah's abundant forgiveness" }, verseRef: "41:43" },
        { term: "وَذُو عِقَابٍ أَلِيمٍ", meaning: { en: "And possessor of painful punishment", ur: "And possessor of painful punishment" }, explanation: { en: "Balance of mercy and justice", ur: "Balance of mercy and justice" }, verseRef: "41:43" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Complete Knowledge",
      nameArabic: "علم الله الشامل",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "إِلَيْهِ يُرَدُّ عِلْمُ السَّاعَةِ", meaning: { en: "To Him is referred knowledge of the Hour", ur: "To Him is referred knowledge of the Hour" }, explanation: { en: "Only Allah knows when Day of Judgment", ur: "Only Allah knows when Day of Judgment" }, verseRef: "41:47" },
        { term: "وَمَا تَخْرُجُ مِن ثَمَرَاتٍ مِّنْ أَكْمَامِهَا", meaning: { en: "No fruit emerges from its covering", ur: "No fruit emerges from its covering" }, explanation: { en: "Allah knows all growth", ur: "Allah knows all growth" }, verseRef: "41:47" },
        { term: "وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِ", meaning: { en: "No female conceives or delivers except with His knowledge", ur: "No female conceives or delivers except with His knowledge" }, explanation: { en: "All reproduction known to Allah", ur: "All reproduction known to Allah" }, verseRef: "41:47" },
        { term: "وَيَوْمَ يُنَادِيهِمْ أَيْنَ شُرَكَائِي", meaning: { en: "And the day He calls them: Where are My partners?", ur: "And the day He calls them: Where are My partners?" }, explanation: { en: "Challenge on Judgment Day", ur: "Challenge on Judgment Day" }, verseRef: "41:47" },
        { term: "قَالُوا آذَنَّاكَ مَا مِنَّا مِن شَهِيدٍ", meaning: { en: "They will say: We inform You, none of us is witness", ur: "They will say: We inform You, none of us is witness" }, explanation: { en: "False gods cannot testify", ur: "False gods cannot testify" }, verseRef: "41:47" },
        { term: "وَضَلَّ عَنْهُم مَّا كَانُوا يَدْعُونَ مِن قَبْلُ", meaning: { en: "And lost from them is what they used to invoke before", ur: "And lost from them is what they used to invoke before" }, explanation: { en: "False deities disappear", ur: "False deities disappear" }, verseRef: "41:48" }
      ]
    },

    humanNature: {
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "لَّا يَسْأَمُ الْإِنسَانُ مِن دُعَاءِ الْخَيْرِ", meaning: { en: "Man does not tire of asking for good", ur: "Man does not tire of asking for good" }, explanation: { en: "Endless desire for good things", ur: "Endless desire for good things" }, verseRef: "41:49" },
        { term: "وَإِن مَّسَّهُ الشَّرُّ فَيَئُوسٌ قَنُوطٌ", meaning: { en: "But if evil touches him, he is despairing", ur: "But if evil touches him, he is despairing" }, explanation: { en: "Quick to despair in hardship", ur: "Quick to despair in hardship" }, verseRef: "41:49" },
        { term: "وَلَئِنْ أَذَقْنَاهُ رَحْمَةً مِّنَّا مِن بَعْدِ ضَرَّاءَ مَسَّتْهُ", meaning: { en: "If We let him taste mercy after hardship", ur: "If We let him taste mercy after hardship" }, explanation: { en: "Response to relief after difficulty", ur: "Response to relief after difficulty" }, verseRef: "41:50" },
        { term: "لَيَقُولَنَّ هَٰذَا لِي", meaning: { en: "He will surely say: This is due to me", ur: "He will surely say: This is due to me" }, explanation: { en: "Taking credit for blessings", ur: "Taking credit for blessings" }, verseRef: "41:50" },
        { term: "وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً", meaning: { en: "And I do not think the Hour will occur", ur: "And I do not think the Hour will occur" }, explanation: { en: "Denying Judgment Day", ur: "Denying Judgment Day" }, verseRef: "41:50" },
        { term: "وَلَئِن رُّجِعْتُ إِلَىٰ رَبِّي إِنَّ لِي عِندَهُ لَلْحُسْنَىٰ", meaning: { en: "And if I am returned to my Lord, I will have best with Him", ur: "And if I am returned to my Lord, I will have best with Him" }, explanation: { en: "False confidence about Hereafter", ur: "False confidence about Hereafter" }, verseRef: "41:50" }
      ]
    },

    signsInSelvesAndHorizons: {
      name: "Signs in Horizons and Selves",
      nameArabic: "الآيات في الآفاق والأنفس",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ", meaning: { en: "We will show them Our signs in the horizons", ur: "ہم انہیں آفاق میں اپنی نشانیاں دکھائیں گے" }, explanation: { en: "External signs in the universe", ur: "External signs in the universe" }, verseRef: "41:53" },
        { term: "وَفِي أَنفُسِهِمْ", meaning: { en: "And in themselves", ur: "اور خود ان کے اندر" }, explanation: { en: "Internal signs within humans", ur: "Internal signs within humans" }, verseRef: "41:53" },
        { term: "حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ", meaning: { en: "Until it becomes clear to them that it is the truth", ur: "Until it becomes clear to them that it is the truth" }, explanation: { en: "Truth becomes undeniable", ur: "Truth becomes undeniable" }, verseRef: "41:53" },
        { term: "أَوَلَمْ يَكْفِ بِرَبِّكَ أَنَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ", meaning: { en: "Is it not sufficient that your Lord is Witness over all things?", ur: "Is it not sufficient that your Lord is Witness over all things?" }, explanation: { en: "Allah witnesses everything", ur: "Allah witnesses everything" }, verseRef: "41:53" },
        { term: "أَلَا إِنَّهُمْ فِي مِرْيَةٍ مِّن لِّقَاءِ رَبِّهِمْ", meaning: { en: "Unquestionably they are in doubt about meeting their Lord", ur: "Unquestionably they are in doubt about meeting their Lord" }, explanation: { en: "Root cause is doubting the meeting", ur: "Root cause is doubting the meeting" }, verseRef: "41:54" },
        { term: "أَلَا إِنَّهُ بِكُلِّ شَيْءٍ مُّحِيطٌ", meaning: { en: "Unquestionably He encompasses all things", ur: "Unquestionably He encompasses all things" }, explanation: { en: "Allah's all-encompassing knowledge and power", ur: "Allah's all-encompassing knowledge and power" }, verseRef: "41:54" }
      ]
    }
  },

  relationships: [
    { from: "كتاب فصلت آياته", to: "قرآنا عربيا", type: "description", description: { en: "Clear Book revealed in Arabic", ur: "عربی میں نازل واضح کتاب" } },
    { from: "بشيرا", to: "نذيرا", type: "complementary", description: { en: "Good news and warning together", ur: "خوشخبری اور تنبیہ ساتھ ساتھ" } },
    { from: "هدى", to: "شفاء", type: "function", description: { en: "Quran guides and heals believers", ur: "قرآن مومنین کی رہنمائی اور شفاء کرتا ہے" } },
    { from: "سمعهم وأبصارهم وجلودهم", to: "شهد عليهم", type: "testimony", description: { en: "Body parts become witnesses against sinners", ur: "جسم کے اعضاء گنہگاروں کے خلاف گواہی دیتے ہیں" } },
    { from: "الحسنة", to: "السيئة", type: "contrast", description: { en: "Good and evil are fundamentally unequal", ur: "نیکی اور بدی بنیادی طور پر غیر مساوی ہیں" } },
    { from: "ادفع بالتي هي أحسن", to: "كأنه ولي حميم", type: "transformation", description: { en: "Responding with good transforms enemies to friends", ur: "نیکی سے جواب دشمنوں کو دوستوں میں بدل دیتا ہے" } },
    { from: "ربنا الله", to: "استقاموا", type: "requirement", description: { en: "Declaration must be followed by steadfastness", ur: "اعلان کے بعد استقامت ضروری ہے" } },
    { from: "استحبوا العمى", to: "صاعقة العذاب", type: "consequence", description: { en: "Choosing blindness leads to thunderbolt punishment", ur: "اندھا پن چننا بجلی کی سزا کی طرف لے جاتا ہے" } },
    { from: "آيات في الآفاق", to: "آيات في أنفسهم", type: "parallel", description: { en: "Signs external and internal both point to truth", ur: "بیرونی اور اندرونی نشانیاں دونوں حق کی طرف اشارہ کرتی ہیں" } },
    { from: "لا يأتيه الباطل", to: "تنزيل من حكيم حميد", type: "protection", description: { en: "Divine source ensures Quran's protection", ur: "الٰہی ماخذ قرآن کی حفاظت کو یقینی بناتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Ha Mim and Quran Description", verses: "41:1-5", description: { en: "Opening letters, Quran as detailed revelation in Arabic", ur: "Opening letters, Quran as detailed revelation in Arabic" } },
      { stage: 2, theme: "Rejection of the Message", verses: "41:6-8", description: { en: "Prophet is human, disbelievers turn away", ur: "Prophet is human, disbelievers turn away" } },
      { stage: 3, theme: "Creation in Six Days", verses: "41:9-12", description: { en: "Earth and heavens created with provisions and order", ur: "Earth and heavens created with provisions and order" } },
      { stage: 4, theme: "Warning from Aad and Thamud", verses: "41:13-18", description: { en: "Historical examples of arrogance and destruction", ur: "Historical examples of arrogance and destruction" } },
      { stage: 5, theme: "Body Parts Testifying", verses: "41:19-25", description: { en: "Hearing, sight, and skin witness against sinners", ur: "Hearing, sight, and skin witness against sinners" } },
      { stage: 6, theme: "Plots Against Quran", verses: "41:26-29", description: { en: "Disbelievers' strategy to drown out recitation", ur: "Disbelievers' strategy to drown out recitation" } },
      { stage: 7, theme: "Angels with Believers", verses: "41:30-32", description: { en: "Steadfast believers receive angelic support", ur: "Steadfast believers receive angelic support" } },
      { stage: 8, theme: "Best Speech and Conduct", verses: "41:33-36", description: { en: "Calling to Allah, repelling evil with good", ur: "Calling to Allah, repelling evil with good" } },
      { stage: 9, theme: "Signs of Allah", verses: "41:37-39", description: { en: "Cosmic signs and resurrection proof", ur: "Cosmic signs and resurrection proof" } },
      { stage: 10, theme: "Quran's Protection", verses: "41:40-44", description: { en: "Quran invincible, guidance and healing for believers", ur: "Quran invincible, guidance and healing for believers" } },
      { stage: 11, theme: "Human Nature", verses: "41:45-50", description: { en: "Man's ingratitude and false assumptions", ur: "Man's ingratitude and false assumptions" } },
      { stage: 12, theme: "Signs in Horizons and Selves", verses: "41:51-54", description: { en: "External and internal signs prove truth", ur: "External and internal signs prove truth" } }
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
    title: { en: "Fussilat - The Detailed Explanation and Transformation", ur: "Fussilat - The Detailed Explanation and Transformation" },
    insight: { en: "Surah Fussilat (meaning 'Detailed' or 'Clearly Explained') is the second of the Ha-Mim series and contains one of the most powerful psychological insights in the Quran. The teaching in verse 34 - 'Repel evil with that which is better, and the one between you and him is enmity will become like a devoted friend' - is not mere idealism but a profound understanding of human psychology. When met with unexpected kindness, the aggressor's neural patterns are disrupted; their prepared hostility has nowhere to go. The verse continues that this quality is only granted to 'those who are patient' and 'one of great fortune' - recognizing that overcoming the instinct for retaliation requires spiritual maturity. The surah's unique concept of body parts testifying (41:20-22) presents a terrifying scene where hearing, sight, and skin become witnesses. The sinners' question - 'Why did you testify against us?' - and the response - 'Allah who makes all things speak made us speak' - illustrates that nothing in creation can hide from Allah. Modern science's understanding of how our bodies record our actions (epigenetics, cellular memory) gives new appreciation to this imagery.", ur: "Surah Fussilat (meaning 'Detailed' or 'Clearly Explained') is the second of the Ha-Mim series and contains one of the most powerful psychological insights in the Quran. The teaching in verse 34 - 'Repel evil with that which is better, and the one between you and him is enmity will become like a devoted friend' - is not mere idealism but a profound understanding of human psychology. When met with unexpected kindness, the aggressor's neural patterns are disrupted; their prepared hostility has nowhere to go. The verse continues that this quality is only granted to 'those who are patient' and 'one of great fortune' - recognizing that overcoming the instinct for retaliation requires spiritual maturity. The surah's unique concept of body parts testifying (41:20-22) presents a terrifying scene where hearing, sight, and skin become witnesses. The sinners' question - 'Why did you testify against us?' - and the response - 'Allah who makes all things speak made us speak' - illustrates that nothing in creation can hide from Allah. Modern science's understanding of how our bodies record our actions (epigenetics, cellular memory) gives new appreciation to this imagery." }
  },

  historicalContext: {
    note: { en: "This Makki surah was revealed during intense opposition to the Prophet in Mecca. The instruction to 'repel evil with good' (41:34) was particularly relevant as Muslims faced daily persecution. The reference to disbelievers making noise during Quran recitation (41:26) describes actual tactics used by the Quraysh to prevent people from hearing the message. The opening 'Ha Mim' connects this to a series of seven surahs (40-46) all beginning with these letters, revealed during the middle Makkan period. The surah's name 'Fussilat' (Detailed) refers to verse 3 where the Quran is described as having its verses 'clearly explained' - a response to accusations that it was unclear or incomprehensible.", ur: "This Makki surah was revealed during intense opposition to the Prophet in Mecca. The instruction to 'repel evil with good' (41:34) was particularly relevant as Muslims faced daily persecution. The reference to disbelievers making noise during Quran recitation (41:26) describes actual tactics used by the Quraysh to prevent people from hearing the message. The opening 'Ha Mim' connects this to a series of seven surahs (40-46) all beginning with these letters, revealed during the middle Makkan period. The surah's name 'Fussilat' (Detailed) refers to verse 3 where the Quran is described as having its verses 'clearly explained' - a response to accusations that it was unclear or incomprehensible." }
  },

  linguisticFeatures: {
    features: [
      { feature: "حم", example: { en: "Ha Mim", ur: "Ha Mim" }, effect: { en: "Mysterious letters that captivate attention and establish Quranic uniqueness", ur: "Mysterious letters that captivate attention and establish Quranic uniqueness" } },
      { feature: "فُصِّلَتْ", example: { en: "Detailed/Explained", ur: "Detailed/Explained" }, effect: { en: "Passive intensive form - thoroughly and completely explained", ur: "Passive intensive form - thoroughly and completely explained" } },
      { feature: "صَرْصَرًا", example: { en: "Screaming wind", ur: "Screaming wind" }, effect: { en: "Onomatopoeia - the sound of the destructive wind that destroyed Aad", ur: "Onomatopoeia - the sound of the destructive wind that destroyed Aad" } },
      { feature: "أَتَيْنَا طَائِعِينَ", example: { en: "We come willingly", ur: "We come willingly" }, effect: { en: "Creation speaking - personification showing universal submission", ur: "Creation speaking - personification showing universal submission" } },
      { feature: "وَلِيٌّ حَمِيمٌ", example: { en: "Devoted friend", ur: "Devoted friend" }, effect: { en: "Hamim means warm/intimate - beyond ordinary friendship", ur: "Hamim means warm/intimate - beyond ordinary friendship" } },
      { feature: "الْآفَاقِ", example: { en: "Horizons", ur: "Horizons" }, effect: { en: "Plural of ufuq - vast cosmic horizons containing signs", ur: "Plural of ufuq - vast cosmic horizons containing signs" } }
    ]
  },

  sajdahVerse: {
    verse: 37,
    text: "وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ وَالشَّمْسُ وَالْقَمَرُ ۚ لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",
    translation: { en: "And among His signs are the night and day and the sun and moon. Do not prostrate to the sun or moon, but prostrate to Allah who created them, if it is Him you worship", ur: "And among His signs are the night and day and the sun and moon. Do not prostrate to the sun or moon, but prostrate to Allah who created them, if it is Him you worship" },
    note: { en: "This is a verse of sajdah (prostration). The command is clear - worship the Creator, not the creation. This corrects the practice of ancient peoples who worshipped celestial bodies.", ur: "This is a verse of sajdah (prostration). The command is clear - worship the Creator, not the creation. This corrects the practice of ancient peoples who worshipped celestial bodies." }
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
      { verse: "41:11", topic: "Cosmic smoke", note: { en: "Heavens described as 'smoke' (dukhan) - matches modern understanding of early universe as hot gas/plasma", ur: "Heavens described as 'smoke' (dukhan) - matches modern understanding of early universe as hot gas/plasma" } },
      { verse: "41:9-12", topic: "Creation timeline", note: { en: "Six days/periods for creation - stages not instantaneous, consistent with cosmic evolution", ur: "Six days/periods for creation - stages not instantaneous, consistent with cosmic evolution" } },
      { verse: "41:53", topic: "Signs in horizons and selves", note: { en: "External cosmos and internal human biology both reveal divine design", ur: "External cosmos and internal human biology both reveal divine design" } },
      { verse: "41:39", topic: "Earth revival", note: { en: "Dead earth reviving with water - water cycle and plant germination as resurrection proof", ur: "Dead earth reviving with water - water cycle and plant germination as resurrection proof" } },
      { verse: "41:21", topic: "Body recording", note: { en: "Concept that body records actions - modern research on cellular memory and epigenetics", ur: "Concept that body records actions - modern research on cellular memory and epigenetics" } }
    ]
  }
};

export default ONTOLOGY;
