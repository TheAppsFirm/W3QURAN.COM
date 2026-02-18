/**
 * Surah Al-Jathiyah (The Kneeling) - Surah 45
 * Ontology of Quranic Concepts and Relationships
 * Theme: Signs in creation, warning against following desires, favors upon Bani Israel, Day of Judgment kneeling
 */

export const ONTOLOGY = {
  surahId: 45,
  surahName: "Al-Jathiyah",
  surahNameArabic: "الجاثية",
  totalAyahs: 37,
  revelationType: "Makkan",
  mainTheme: "Signs of Allah in Creation and the Day When All Nations Kneel Before Him",

  categories: {
    signsInCreation: {
      name: "Signs of Allah in Creation",
      nameAr: "آيات الله في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Ayat fi al-Samawat", arabic: "آيَاتٌ فِي السَّمَاوَاتِ", meaning: "Signs in the heavens", ayahs: [3] },
        { term: "Ayat fi al-Ard", arabic: "وَالْأَرْضِ", meaning: "Signs in the earth", ayahs: [3] },
        { term: "Ayat li al-Mu'minin", arabic: "آيَاتٌ لِّلْمُؤْمِنِينَ", meaning: "Signs for the believers", ayahs: [3] },
        { term: "Khalqikum", arabic: "خَلْقِكُمْ", meaning: "Your creation", ayahs: [4] },
        { term: "Dabbah", arabic: "دَابَّةٍ", meaning: "Creatures He disperses", ayahs: [4] },
        { term: "Ikhtilaf al-Layl", arabic: "اخْتِلَافِ اللَّيْلِ وَالنَّهَارِ", meaning: "Alternation of night and day", ayahs: [5] },
        { term: "Rizq min al-Sama", arabic: "رِزْقٍ مِّنَ السَّمَاءِ", meaning: "Provision from the sky (rain)", ayahs: [5] },
        { term: "Ihya al-Ard", arabic: "فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: "Reviving earth after its death", ayahs: [5] },
        { term: "Tasrif al-Riyah", arabic: "تَصْرِيفِ الرِّيَاحِ", meaning: "Directing of the winds", ayahs: [5] }
      ]
    },

    subjugationBlessings: {
      name: "Subjugation of Creation",
      nameAr: "تسخير الكون",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "Sakhkhara ma fi al-Samawat", arabic: "سَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ", meaning: "Subjected what is in the heavens", ayahs: [13] },
        { term: "Sakhkhara ma fi al-Ard", arabic: "وَمَا فِي الْأَرْضِ", meaning: "And what is in the earth", ayahs: [13] },
        { term: "Jami'an Minhu", arabic: "جَمِيعًا مِّنْهُ", meaning: "All from Him", ayahs: [13] },
        { term: "Sakhkhara lakum al-Bahr", arabic: "سَخَّرَ لَكُمُ الْبَحْرَ", meaning: "Subjected the sea for you", ayahs: [12] },
        { term: "Fulk Tajri Fihi", arabic: "لِتَجْرِيَ الْفُلْكُ فِيهِ", meaning: "Ships sail through it", ayahs: [12] },
        { term: "Tabtaghu min Fadlihi", arabic: "وَلِتَبْتَغُوا مِن فَضْلِهِ", meaning: "To seek from His bounty", ayahs: [12] }
      ]
    },

    rejectionOfSigns: {
      name: "Rejection of Divine Signs",
      nameAr: "إنكار الآيات",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Bi Ayyi Hadith", arabic: "فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ", meaning: "In what message after Allah and His signs will they believe?", ayahs: [6] },
        { term: "Affak Athim", arabic: "أَفَّاكٍ أَثِيمٍ", meaning: "Every sinful liar", ayahs: [7] },
        { term: "Yusirru Mustakbiran", arabic: "يُصِرُّ مُسْتَكْبِرًا", meaning: "Persists arrogantly", ayahs: [8] },
        { term: "Ka'an Lam Yasma'ha", arabic: "كَأَن لَّمْ يَسْمَعْهَا", meaning: "As if he had not heard them", ayahs: [8] },
        { term: "Waqran fi Udhunayhi", arabic: "وَقْرًا فِي أُذُنَيْهِ", meaning: "Deafness in his ears", ayahs: [8] },
        { term: "Ittikhādh Ayat Huzuwan", arabic: "اتَّخَذَهَا هُزُوًا", meaning: "Takes them (signs) in ridicule", ayahs: [9, 35] }
      ]
    },

    followingDesires: {
      name: "Following Desires and Whims",
      nameAr: "اتباع الهوى",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Ittakhadha Ilahahu Hawahu", arabic: "اتَّخَذَ إِلَٰهَهُ هَوَاهُ", meaning: "Takes his desire as his god", ayahs: [23] },
        { term: "Adallahu Allah", arabic: "وَأَضَلَّهُ اللَّهُ عَلَىٰ عِلْمٍ", meaning: "Allah left him astray knowingly", ayahs: [23] },
        { term: "Khatama 'ala Sam'ihi", arabic: "وَخَتَمَ عَلَىٰ سَمْعِهِ", meaning: "Sealed his hearing", ayahs: [23] },
        { term: "Khatama 'ala Qalbihi", arabic: "وَقَلْبِهِ", meaning: "Sealed his heart", ayahs: [23] },
        { term: "Ghishawah 'ala Basarihi", arabic: "وَجَعَلَ عَلَىٰ بَصَرِهِ غِشَاوَةً", meaning: "Placed over his sight a veil", ayahs: [23] },
        { term: "Man Yahdihi", arabic: "فَمَن يَهْدِيهِ مِن بَعْدِ اللَّهِ", meaning: "Who will guide him after Allah?", ayahs: [23] }
      ]
    },

    denialOfHereafter: {
      name: "Denial of the Hereafter",
      nameAr: "إنكار الآخرة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Ma Hiya Illa Hayatuna", arabic: "مَا هِيَ إِلَّا حَيَاتُنَا الدُّنْيَا", meaning: "There is nothing but our worldly life", ayahs: [24] },
        { term: "Namut wa Nahya", arabic: "نَمُوتُ وَنَحْيَا", meaning: "We die and we live", ayahs: [24] },
        { term: "Ma Yuhlikuna illa al-Dahr", arabic: "وَمَا يُهْلِكُنَا إِلَّا الدَّهْرُ", meaning: "Nothing destroys us except time", ayahs: [24] },
        { term: "Ma Lahum Bi Dhālika Min 'Ilm", arabic: "وَمَا لَهُم بِذَٰلِكَ مِنْ عِلْمٍ", meaning: "They have no knowledge of that", ayahs: [24] },
        { term: "In Hum Illa Yadhunnun", arabic: "إِنْ هُمْ إِلَّا يَظُنُّونَ", meaning: "They only assume", ayahs: [24] },
        { term: "I'tuna bi Aba'ina", arabic: "ائْتُوا بِآبَائِنَا", meaning: "Bring back our forefathers", ayahs: [25] }
      ]
    },

    baniIsraelFavors: {
      name: "Favors Upon Bani Israel",
      nameAr: "نعم الله على بني إسرائيل",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Atayna Bani Isra'il al-Kitab", arabic: "آتَيْنَا بَنِي إِسْرَائِيلَ الْكِتَابَ", meaning: "We gave Bani Israel the Scripture", ayahs: [16] },
        { term: "Al-Hukm", arabic: "وَالْحُكْمَ", meaning: "And authority/judgment", ayahs: [16] },
        { term: "Al-Nubuwwah", arabic: "وَالنُّبُوَّةَ", meaning: "And prophethood", ayahs: [16] },
        { term: "Al-Tayyibat", arabic: "وَرَزَقْنَاهُم مِّنَ الطَّيِّبَاتِ", meaning: "Provided them with good things", ayahs: [16] },
        { term: "Faddalnahum 'ala al-'Alamin", arabic: "وَفَضَّلْنَاهُمْ عَلَى الْعَالَمِينَ", meaning: "Preferred them over the worlds", ayahs: [16] },
        { term: "Bayyinat min al-Amr", arabic: "بَيِّنَاتٍ مِّنَ الْأَمْرِ", meaning: "Clear proofs of the matter", ayahs: [17] }
      ]
    },

    baniIsraelDivision: {
      name: "Division Among Bani Israel",
      nameAr: "اختلاف بني إسرائيل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Ikhtalafū min Ba'di Ma Ja'ahum", arabic: "فَمَا اخْتَلَفُوا إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ", meaning: "They differed only after knowledge came", ayahs: [17] },
        { term: "Baghyan Baynahum", arabic: "بَغْيًا بَيْنَهُمْ", meaning: "Out of jealousy between themselves", ayahs: [17] },
        { term: "Yaqdi Baynahum", arabic: "إِنَّ رَبَّكَ يَقْضِي بَيْنَهُمْ يَوْمَ الْقِيَامَةِ", meaning: "Your Lord will judge between them on Judgment Day", ayahs: [17] }
      ]
    },

    shariahAndGuidance: {
      name: "Shariah and Divine Guidance",
      nameAr: "الشريعة والهداية",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Ja'alnaka 'ala Shari'ah", arabic: "جَعَلْنَاكَ عَلَىٰ شَرِيعَةٍ مِّنَ الْأَمْرِ", meaning: "We placed you upon a Shariah", ayahs: [18] },
        { term: "Fattabi'ha", arabic: "فَاتَّبِعْهَا", meaning: "So follow it", ayahs: [18] },
        { term: "La Tattabi' Ahwa'", arabic: "وَلَا تَتَّبِعْ أَهْوَاءَ الَّذِينَ لَا يَعْلَمُونَ", meaning: "Do not follow desires of those who do not know", ayahs: [18] },
        { term: "Lan Yughnu 'anka", arabic: "إِنَّهُمْ لَن يُغْنُوا عَنكَ مِنَ اللَّهِ شَيْئًا", meaning: "They will not avail you against Allah", ayahs: [19] },
        { term: "Ba'duhum Awliya' Ba'd", arabic: "وَالظَّالِمُونَ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ", meaning: "The wrongdoers are allies of one another", ayahs: [19] },
        { term: "Allah Waliyy al-Muttaqin", arabic: "وَاللَّهُ وَلِيُّ الْمُتَّقِينَ", meaning: "Allah is protector of the righteous", ayahs: [19] }
      ]
    },

    quranAsGuidance: {
      name: "The Quran as Guidance",
      nameAr: "القرآن هدى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Basa'ir li al-Nas", arabic: "هَٰذَا بَصَائِرُ لِلنَّاسِ", meaning: "This is insight for mankind", ayahs: [20] },
        { term: "Hudan", arabic: "وَهُدًى", meaning: "And guidance", ayahs: [20] },
        { term: "Rahmah", arabic: "وَرَحْمَةٌ", meaning: "And mercy", ayahs: [20] },
        { term: "Li Qawmin Yuqinun", arabic: "لِّقَوْمٍ يُوقِنُونَ", meaning: "For people who have certainty", ayahs: [20] }
      ]
    },

    theKneeling: {
      name: "The Kneeling - Day of Judgment",
      nameAr: "الجثو يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Kull Ummah Jathiyah", arabic: "وَتَرَىٰ كُلَّ أُمَّةٍ جَاثِيَةً", meaning: "You will see every nation kneeling", ayahs: [28] },
        { term: "Tud'a ila Kitabiha", arabic: "كُلُّ أُمَّةٍ تُدْعَىٰ إِلَىٰ كِتَابِهَا", meaning: "Each nation called to its record", ayahs: [28] },
        { term: "Tujzawna ma Kuntum Ta'malun", arabic: "الْيَوْمَ تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ", meaning: "Today you are recompensed for what you used to do", ayahs: [28] },
        { term: "Kitabuna Yantiq", arabic: "هَٰذَا كِتَابُنَا يَنطِقُ عَلَيْكُم بِالْحَقِّ", meaning: "This Our record speaks against you with truth", ayahs: [29] },
        { term: "Nastansikhu ma Kuntum Ta'malun", arabic: "إِنَّا كُنَّا نَسْتَنسِخُ مَا كُنتُمْ تَعْمَلُونَ", meaning: "We were having transcribed what you used to do", ayahs: [29] }
      ]
    },

    fateOfBelievers: {
      name: "Fate of the Believers",
      nameAr: "مصير المؤمنين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Fa Yudkhiluhum fi Rahmatihi", arabic: "فَيُدْخِلُهُمْ رَبُّهُمْ فِي رَحْمَتِهِ", meaning: "Their Lord will admit them into His mercy", ayahs: [30] },
        { term: "Dhalika al-Fawz al-Mubin", arabic: "ذَٰلِكَ هُوَ الْفَوْزُ الْمُبِينُ", meaning: "That is the clear success", ayahs: [30] }
      ]
    },

    fateOfDisbelievers: {
      name: "Fate of the Disbelievers",
      nameAr: "مصير الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Alam Tukun Ayati Tutla", arabic: "أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ", meaning: "Were not My verses recited to you?", ayahs: [31] },
        { term: "Istakbartum", arabic: "فَاسْتَكْبَرْتُمْ", meaning: "But you were arrogant", ayahs: [31] },
        { term: "Qawman Mujrimin", arabic: "وَكُنتُمْ قَوْمًا مُّجْرِمِينَ", meaning: "You were a criminal people", ayahs: [31] },
        { term: "Wa'd Allah Haqq", arabic: "وَأَنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: "The promise of Allah is truth", ayahs: [32] },
        { term: "Wa al-Sa'ah La Rayba Fiha", arabic: "وَالسَّاعَةُ لَا رَيْبَ فِيهَا", meaning: "The Hour is coming without doubt", ayahs: [32] },
        { term: "Qultum Ma Nadri", arabic: "قُلْتُم مَّا نَدْرِي مَا السَّاعَةُ", meaning: "You said: We do not know what the Hour is", ayahs: [32] },
        { term: "In Nadhunnu illa Dhanna", arabic: "إِن نَّظُنُّ إِلَّا ظَنًّا", meaning: "We assume only assumption", ayahs: [32] },
        { term: "Bada Lahum Sayyi'at", arabic: "وَبَدَا لَهُمْ سَيِّئَاتُ مَا عَمِلُوا", meaning: "Appeared to them the evils of what they did", ayahs: [33] },
        { term: "Haqa bihim ma Kanu Yastahzi'un", arabic: "وَحَاقَ بِهِم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: "Surrounded them what they used to ridicule", ayahs: [33] }
      ]
    },

    divineAbandonment: {
      name: "Divine Abandonment",
      nameAr: "الترك الإلهي",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Fa al-Yawm Nunsikum", arabic: "فَالْيَوْمَ نُنسَاكُمْ", meaning: "So today We forget you", ayahs: [34] },
        { term: "Kama Nasitum Liqa'", arabic: "كَمَا نَسِيتُمْ لِقَاءَ يَوْمِكُمْ هَٰذَا", meaning: "As you forgot the meeting of this Day", ayahs: [34] },
        { term: "Ma'wakum al-Nar", arabic: "وَمَأْوَاكُمُ النَّارُ", meaning: "Your refuge is the Fire", ayahs: [34] },
        { term: "Ma Lakum min Nasirin", arabic: "وَمَا لَكُم مِّن نَّاصِرِينَ", meaning: "You have no helpers", ayahs: [34] },
        { term: "Dhalika bi Annakum Ittakhadhtum", arabic: "ذَٰلِكُم بِأَنَّكُمُ اتَّخَذْتُمْ", meaning: "That is because you took", ayahs: [35] },
        { term: "Ayatillahi Huzuwa", arabic: "آيَاتِ اللَّهِ هُزُوًا", meaning: "Signs of Allah in ridicule", ayahs: [35] },
        { term: "Gharratkum al-Hayat al-Dunya", arabic: "وَغَرَّتْكُمُ الْحَيَاةُ الدُّنْيَا", meaning: "The worldly life deceived you", ayahs: [35] }
      ]
    },

    divineMajesty: {
      name: "Divine Majesty and Sovereignty",
      nameAr: "عظمة الله وملكه",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Fa Lillah al-Hamd", arabic: "فَلِلَّهِ الْحَمْدُ", meaning: "So to Allah belongs all praise", ayahs: [36] },
        { term: "Rabb al-Samawat", arabic: "رَبِّ السَّمَاوَاتِ", meaning: "Lord of the heavens", ayahs: [36] },
        { term: "Rabb al-Ard", arabic: "وَرَبِّ الْأَرْضِ", meaning: "Lord of the earth", ayahs: [36] },
        { term: "Rabb al-'Alamin", arabic: "رَبِّ الْعَالَمِينَ", meaning: "Lord of all worlds", ayahs: [36] },
        { term: "Lahu al-Kibriya'", arabic: "وَلَهُ الْكِبْرِيَاءُ فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: "His is the grandeur in heavens and earth", ayahs: [37] },
        { term: "Al-'Aziz al-Hakim", arabic: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: "And He is the Mighty, the Wise", ayahs: [37] }
      ]
    }
  },

  relationships: [
    { from: "Signs in Creation", to: "Belief", type: "evidence", description: "Creation signs prove divine existence" },
    { from: "Following Desires", to: "Misguidance", type: "consequence", description: "Making desire one's god leads to being sealed" },
    { from: "Denial of Hereafter", to: "Kneeling on Judgment Day", type: "irony", description: "Those who denied will kneel humiliated" },
    { from: "Bani Israel Favors", to: "Division After Knowledge", type: "warning", description: "Even blessed nations can fall through jealousy" },
    { from: "Quran as Guidance", to: "Shariah", type: "manifestation", description: "The Shariah is the practical guidance" },
    { from: "Record of Deeds", to: "Perfect Justice", type: "guarantee", description: "Allah records everything for just recompense" },
    { from: "Ridiculing Signs", to: "Being Forgotten", type: "reciprocity", description: "As they forgot Allah, He forgets them" },
    { from: "Worldly Deception", to: "Eternal Loss", type: "consequence", description: "Being deceived by dunya leads to loss of akhirah" }
  ],

  thematicFlow: {
    title: "From Creation Signs to Kneeling in Judgment",
    stages: [
      { name: "Revelation Source", ayahs: [1, 2], description: "Ha-Mim, revelation from the Mighty, Wise" },
      { name: "Signs in Creation", ayahs: [3, 4, 5], description: "Signs in heavens, earth, creatures, night/day, rain, winds" },
      { name: "Rejection Warning", ayahs: [6, 7, 8, 9, 10, 11], description: "Those who reject signs despite evidence" },
      { name: "Sea Subjugation", ayahs: [12, 13, 14, 15], description: "Sea and all creation subjected for mankind" },
      { name: "Bani Israel Story", ayahs: [16, 17], description: "Scripture, wisdom, prophethood given, then they divided" },
      { name: "Shariah for Muhammad", ayahs: [18, 19, 20], description: "Follow the Shariah, not the ignorant" },
      { name: "Equality Warning", ayahs: [21], description: "Evil-doers not equal to believers" },
      { name: "Perfect Creation", ayahs: [22], description: "Creation with truth for recompense" },
      { name: "Desire as God", ayahs: [23], description: "Taking desire as deity, sealed faculties" },
      { name: "Materialist Denial", ayahs: [24, 25, 26], description: "Denial of afterlife, only time kills" },
      { name: "Allah's Sovereignty", ayahs: [27], description: "Dominion of heavens and earth" },
      { name: "The Kneeling Scene", ayahs: [28, 29], description: "Every nation kneeling, record speaks" },
      { name: "Believers' Success", ayahs: [30], description: "Admitted into mercy, clear triumph" },
      { name: "Disbelievers' Questioning", ayahs: [31, 32, 33], description: "Signs recited but rejected, doubted the Hour" },
      { name: "Divine Abandonment", ayahs: [34, 35], description: "Forgotten as they forgot, worldly deception" },
      { name: "Closing Praise", ayahs: [36, 37], description: "All praise to Lord of worlds, His grandeur" }
    ]
  },

  uniqueInsight: {
    title: "The One Who Takes His Desire as His God (اتَّخَذَ إِلَٰهَهُ هَوَاهُ)",
    insight: "Verse 23 presents one of the Quran's most powerful psychological analyses: 'Have you seen the one who takes his own desire as his god?' This is not idol worship in the traditional sense, but a deeper form of shirk - making one's passions and whims the ultimate arbiter of truth. Allah describes the consequence: He leaves such a person astray 'upon knowledge' (ala 'ilm), meaning despite having access to truth. The sealing of hearing, heart, and sight represents the natural consequence of consistently choosing desire over guidance. The rhetorical question 'who will guide him after Allah?' emphasizes that once divine guidance is rejected, no other source can suffice.",
    arabicTerm: "أَفَرَأَيْتَ مَنِ اتَّخَذَ إِلَٰهَهُ هَوَاهُ وَأَضَلَّهُ اللَّهُ عَلَىٰ عِلْمٍ",
    rootMeaning: "ه-و-ى (hawa) - desire, passion, to fall, to love; making hawa one's ilah means following passion as one's supreme authority",
    keyAyah: 23
  },

  historicalContext: {
    revelationPeriod: "Makkan period",
    occasion: "Revealed during the later Makkan period when the Quraysh were intensifying their denial of resurrection and the afterlife. The surah addresses their materialistic worldview ('nothing kills us except time') and their mockery of divine signs.",
    note: "This surah is part of the Ha-Mim series (40-46), known as the 'Hawamim' surahs. The name 'Al-Jathiyah' (The Kneeling) comes from verse 28's vivid image of every nation kneeling before Allah on Judgment Day. It also contains the important word 'Shari'ah' (verse 18), establishing that Muhammad was given a specific divine law to follow."
  },

  linguisticFeatures: {
    features: [
      { name: "Ha-Mim Opening", description: "حم", example: "Part of the Hawamim series", ayah: 1 },
      { name: "Rhetorical Question", description: "أَفَرَأَيْتَ", example: "Have you seen the one who...", ayah: 23 },
      { name: "Shari'ah Term", description: "شَرِيعَةٍ مِّنَ الْأَمْرِ", example: "First explicit use of Shari'ah for divine law", ayah: 18 },
      { name: "Jathi Imagery", description: "كُلَّ أُمَّةٍ جَاثِيَةً", example: "Every nation kneeling - powerful visual", ayah: 28 },
      { name: "Record Speaking", description: "كِتَابُنَا يَنطِقُ", example: "Our record speaks with truth", ayah: 29 },
      { name: "Reciprocal Justice", description: "نُنسَاكُمْ كَمَا نَسِيتُمْ", example: "We forget you as you forgot", ayah: 34 },
      { name: "Closing Doxology", description: "فَلِلَّهِ الْحَمْدُ", example: "All praise belongs to Allah", ayah: 36 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 44, name: "Ad-Dukhan", relationship: "Previous Ha-Mim surah, both warn of Day of Judgment", type: "sequential_ha_mim" },
      { surah: 46, name: "Al-Ahqaf", relationship: "Following Ha-Mim surah, continues themes of revelation and warning", type: "sequential_ha_mim" },
      { surah: 40, name: "Ghafir", relationship: "First of Ha-Mim series, shares themes of signs and divine names", type: "thematic_parallel" },
      { surah: 6, name: "Al-An'am", relationship: "Both extensively discuss signs in creation", type: "thematic_parallel" },
      { surah: 17, name: "Al-Isra", relationship: "Both discuss Bani Israel and their scripture", type: "thematic_parallel" },
      { surah: 25, name: "Al-Furqan", relationship: "Both warn against following those without knowledge", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
