/**
 * Surah Al-Anbiya (21) - Ontology of Quranic Concepts
 * The Prophets
 *
 * Theme: The prophets' mission of Tawheed, Ibrahim's confrontation with idolatry,
 * stories of 16+ prophets, Day of Judgment, and Allah's mercy to believers
 *
 * Revelation: Makki
 * Total Ayahs: 112
 */

export const ONTOLOGY = {
  surahId: 21,
  surahName: "Al-Anbiya",
  surahNameArabic: "الأنبياء",
  revelationType: "Makki",
  totalAyahs: 112,

  categories: {
    approachingJudgment: {
      name: "Approaching Judgment",
      nameArabic: "اقتراب الحساب",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ", meaning: "Draws near for mankind their reckoning", explanation: "Surah opens with warning - accountability is imminent", verseRef: "21:1" },
        { term: "وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ", meaning: "While they are in heedlessness turning away", explanation: "People ignore the coming judgment", verseRef: "21:1" },
        { term: "إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ", meaning: "They listen to it while they are at play", explanation: "Divine message treated as entertainment", verseRef: "21:2" },
        { term: "لَاهِيَةً قُلُوبُهُمْ", meaning: "Their hearts distracted", explanation: "Hearts occupied with worldly pursuits", verseRef: "21:3" }
      ]
    },

    disbelieversClaims: {
      name: "Claims of Disbelievers",
      nameArabic: "ادعاءات الكافرين",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "هَلْ هَٰذَا إِلَّا بَشَرٌ مِّثْلُكُمْ", meaning: "Is this except a human like you?", explanation: "Mocking that a human cannot be a prophet", verseRef: "21:3" },
        { term: "أَضْغَاثُ أَحْلَامٍ", meaning: "Confused dreams", explanation: "Accusation that Quran is confused imagination", verseRef: "21:5" },
        { term: "بَلِ افْتَرَاهُ", meaning: "Rather, he invented it", explanation: "Accusation that Prophet fabricated message", verseRef: "21:5" },
        { term: "بَلْ هُوَ شَاعِرٌ", meaning: "Rather, he is a poet", explanation: "Dismissing prophecy as poetry", verseRef: "21:5" },
        { term: "فَلْيَأْتِنَا بِآيَةٍ", meaning: "Let him bring us a sign", explanation: "Demanding miracles despite clear guidance", verseRef: "21:5" }
      ]
    },

    prophetsWereHuman: {
      name: "Prophets Were Human",
      nameArabic: "الأنبياء بشر",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "وَمَا أَرْسَلْنَا قَبْلَكَ إِلَّا رِجَالًا نُّوحِي إِلَيْهِمْ", meaning: "We sent not before you except men to whom We revealed", explanation: "All prophets were human men with revelation", verseRef: "21:7" },
        { term: "وَمَا جَعَلْنَاهُمْ جَسَدًا لَّا يَأْكُلُونَ الطَّعَامَ", meaning: "We did not make them bodies that ate no food", explanation: "Prophets ate, drank, lived as humans", verseRef: "21:8" },
        { term: "وَمَا كَانُوا خَالِدِينَ", meaning: "Nor were they immortal", explanation: "All prophets eventually died", verseRef: "21:8" }
      ]
    },

    tawheedDeclaration: {
      name: "Declaration of Tawheed",
      nameArabic: "إعلان التوحيد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ", meaning: "We sent no messenger before you except We revealed to him: There is no deity except Me, so worship Me", explanation: "Core message of ALL prophets was Tawheed", verseRef: "21:25" },
        { term: "لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا", meaning: "Had there been gods besides Allah, both would have been ruined", explanation: "Multiple gods would cause chaos - logical proof of Tawheed", verseRef: "21:22" },
        { term: "فَسُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ عَمَّا يَصِفُونَ", meaning: "Exalted is Allah, Lord of the Throne, above what they describe", explanation: "Allah is far above their false attributions", verseRef: "21:22" },
        { term: "لَا يُسْأَلُ عَمَّا يَفْعَلُ وَهُمْ يُسْأَلُونَ", meaning: "He is not questioned about what He does, but they will be questioned", explanation: "Allah's supreme authority - He judges, not judged", verseRef: "21:23" }
      ]
    },

    ibrahimStory: {
      name: "Ibrahim's Story - Breaking Idols",
      nameArabic: "قصة إبراهيم - تحطيم الأصنام",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا إِبْرَاهِيمَ رُشْدَهُ", meaning: "We gave Ibrahim his right guidance", explanation: "Ibrahim received divine guidance from youth", verseRef: "21:51" },
        { term: "مَا هَٰذِهِ التَّمَاثِيلُ الَّتِي أَنتُمْ لَهَا عَاكِفُونَ", meaning: "What are these statues to which you are devoted?", explanation: "Ibrahim questions idol worship", verseRef: "21:52" },
        { term: "وَجَدْنَا آبَاءَنَا لَهَا عَابِدِينَ", meaning: "We found our fathers worshipping them", explanation: "Blind following of ancestors", verseRef: "21:53" },
        { term: "لَقَدْ كُنتُمْ أَنتُمْ وَآبَاؤُكُمْ فِي ضَلَالٍ مُّبِينٍ", meaning: "You and your fathers were in clear error", explanation: "Ibrahim boldly corrects both generations", verseRef: "21:54" },
        { term: "تَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُم", meaning: "By Allah, I will surely plan against your idols", explanation: "Ibrahim's oath to destroy idols", verseRef: "21:57" },
        { term: "فَجَعَلَهُمْ جُذَاذًا إِلَّا كَبِيرًا لَّهُمْ", meaning: "He broke them into fragments, except the largest", explanation: "Smashed all idols except the big one", verseRef: "21:58" },
        { term: "بَلْ فَعَلَهُ كَبِيرُهُمْ هَٰذَا فَاسْأَلُوهُمْ إِن كَانُوا يَنطِقُونَ", meaning: "Rather, this - the largest of them - did it, so ask them, if they can speak", explanation: "Ibrahim's brilliant logical trap", verseRef: "21:63" },
        { term: "فَرَجَعُوا إِلَىٰ أَنفُسِهِمْ فَقَالُوا إِنَّكُمْ أَنتُمُ الظَّالِمُونَ", meaning: "They returned to themselves and said, 'Indeed, you are the wrongdoers'", explanation: "Momentary realization of their error", verseRef: "21:64" },
        { term: "ثُمَّ نُكِسُوا عَلَىٰ رُءُوسِهِمْ", meaning: "Then they reversed themselves", explanation: "Reverted to stubbornness after realizing truth", verseRef: "21:65" }
      ]
    },

    ibrahimInFire: {
      name: "Ibrahim Thrown in Fire",
      nameArabic: "إلقاء إبراهيم في النار",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "حَرِّقُوهُ وَانصُرُوا آلِهَتَكُمْ", meaning: "Burn him and support your gods", explanation: "Command to execute Ibrahim for insulting idols", verseRef: "21:68" },
        { term: "قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ", meaning: "We said, 'O fire, be coolness and safety upon Ibrahim'", explanation: "Allah commands fire to become cool - miracle", verseRef: "21:69" },
        { term: "وَأَرَادُوا بِهِ كَيْدًا فَجَعَلْنَاهُمُ الْأَخْسَرِينَ", meaning: "They intended for him harm, but We made them the losers", explanation: "Their plot backfired completely", verseRef: "21:70" },
        { term: "وَنَجَّيْنَاهُ وَلُوطًا إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا", meaning: "We saved him and Lut to the land We blessed", explanation: "Migration to blessed land (Palestine/Sham)", verseRef: "21:71" },
        { term: "وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ نَافِلَةً", meaning: "We gave him Ishaq and Yaqub as an addition", explanation: "Blessed with son and grandson", verseRef: "21:72" }
      ]
    },

    prophetLut: {
      name: "Prophet Lut",
      nameArabic: "النبي لوط",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلُوطًا آتَيْنَاهُ حُكْمًا وَعِلْمًا", meaning: "And to Lut We gave judgment and knowledge", explanation: "Lut received wisdom and prophethood", verseRef: "21:74" },
        { term: "وَنَجَّيْنَاهُ مِنَ الْقَرْيَةِ الَّتِي كَانَت تَّعْمَلُ الْخَبَائِثَ", meaning: "We saved him from the city practicing wickedness", explanation: "Lut rescued from corrupt Sodom", verseRef: "21:74" },
        { term: "إِنَّهُمْ كَانُوا قَوْمَ سَوْءٍ فَاسِقِينَ", meaning: "Indeed, they were a people of evil, defiantly disobedient", explanation: "Description of Lut's corrupt people", verseRef: "21:74" }
      ]
    },

    prophetNuh: {
      name: "Prophet Nuh",
      nameArabic: "النبي نوح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَنُوحًا إِذْ نَادَىٰ مِن قَبْلُ فَاسْتَجَبْنَا لَهُ", meaning: "And Nuh, when he called before, so We responded to him", explanation: "Allah answered Nuh's supplication", verseRef: "21:76" },
        { term: "فَنَجَّيْنَاهُ وَأَهْلَهُ مِنَ الْكَرْبِ الْعَظِيمِ", meaning: "We saved him and his family from great distress", explanation: "Nuh and believers saved from the flood", verseRef: "21:76" },
        { term: "وَنَصَرْنَاهُ مِنَ الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِنَا", meaning: "We aided him against the people who denied Our signs", explanation: "Divine victory over disbelievers", verseRef: "21:77" },
        { term: "إِنَّهُمْ كَانُوا قَوْمَ سَوْءٍ فَأَغْرَقْنَاهُمْ أَجْمَعِينَ", meaning: "Indeed, they were an evil people, so We drowned them all", explanation: "Complete destruction of Nuh's rejecters", verseRef: "21:77" }
      ]
    },

    prophetsDavidSolomon: {
      name: "Prophets Dawud and Sulayman",
      nameArabic: "النبيان داود وسليمان",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَدَاوُودَ وَسُلَيْمَانَ إِذْ يَحْكُمَانِ فِي الْحَرْثِ", meaning: "And Dawud and Sulayman, when they judged concerning the field", explanation: "Father and son both given prophethood and wisdom", verseRef: "21:78" },
        { term: "فَفَهَّمْنَاهَا سُلَيْمَانَ", meaning: "We gave understanding of it to Sulayman", explanation: "Sulayman given special insight in the case", verseRef: "21:79" },
        { term: "وَكُلًّا آتَيْنَا حُكْمًا وَعِلْمًا", meaning: "And to each We gave judgment and knowledge", explanation: "Both were wise, though Sulayman excelled in this case", verseRef: "21:79" },
        { term: "وَسَخَّرْنَا مَعَ دَاوُودَ الْجِبَالَ يُسَبِّحْنَ وَالطَّيْرَ", meaning: "We subjected with Dawud the mountains glorifying, and birds", explanation: "Mountains and birds praised Allah with Dawud", verseRef: "21:79" },
        { term: "وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَّكُمْ", meaning: "We taught him the making of armor for you", explanation: "Dawud taught armor-making for protection", verseRef: "21:80" },
        { term: "وَلِسُلَيْمَانَ الرِّيحَ عَاصِفَةً", meaning: "And to Sulayman [We subjected] the wind, blowing forcefully", explanation: "Wind served Sulayman for travel", verseRef: "21:81" },
        { term: "وَمِنَ الشَّيَاطِينِ مَن يَغُوصُونَ لَهُ", meaning: "And of the devils were those who dived for him", explanation: "Jinn worked under Sulayman's command", verseRef: "21:82" }
      ]
    },

    prophetAyyub: {
      name: "Prophet Ayyub (Job)",
      nameArabic: "النبي أيوب",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ", meaning: "And Ayyub, when he called to his Lord, 'Indeed, adversity has touched me'", explanation: "Ayyub's humble supplication during illness", verseRef: "21:83" },
        { term: "وَأَنتَ أَرْحَمُ الرَّاحِمِينَ", meaning: "And You are the most merciful of the merciful", explanation: "Acknowledging Allah's supreme mercy", verseRef: "21:83" },
        { term: "فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِن ضُرٍّ", meaning: "So We responded to him and removed what afflicted him", explanation: "Allah healed Ayyub after his patience", verseRef: "21:84" },
        { term: "وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ", meaning: "We gave him his family and the like with them", explanation: "Restored family and doubled blessings", verseRef: "21:84" },
        { term: "رَحْمَةً مِّنْ عِندِنَا وَذِكْرَىٰ لِلْعَابِدِينَ", meaning: "As mercy from Us and a reminder for worshippers", explanation: "His story is lesson for all who worship", verseRef: "21:84" }
      ]
    },

    prophetsIsmailIdrisZulKifl: {
      name: "Prophets Ismail, Idris, Dhul-Kifl",
      nameArabic: "الأنبياء إسماعيل وإدريس وذو الكفل",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ كُلٌّ مِّنَ الصَّابِرِينَ", meaning: "And Ismail and Idris and Dhul-Kifl - all were of the patient", explanation: "Three prophets praised for patience", verseRef: "21:85" },
        { term: "وَأَدْخَلْنَاهُمْ فِي رَحْمَتِنَا", meaning: "We admitted them into Our mercy", explanation: "Allah's special mercy for them", verseRef: "21:86" },
        { term: "إِنَّهُم مِّنَ الصَّالِحِينَ", meaning: "Indeed, they were of the righteous", explanation: "Counted among the righteous", verseRef: "21:86" }
      ]
    },

    prophetYunus: {
      name: "Prophet Yunus (Dhun-Nun)",
      nameArabic: "النبي يونس (ذو النون)",
      color: "#06B6D4",
      icon: "Heart",
      concepts: [
        { term: "وَذَا النُّونِ إِذ ذَّهَبَ مُغَاضِبًا", meaning: "And Dhun-Nun (Yunus), when he went off in anger", explanation: "Yunus left his people before permission", verseRef: "21:87" },
        { term: "فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ", meaning: "And thought We would not decree upon him", explanation: "Thought Allah would not restrict him", verseRef: "21:87" },
        { term: "فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", meaning: "He called out in the darknesses: There is no deity except You; exalted are You. Indeed, I was of the wrongdoers", explanation: "Famous dua of Yunus from whale's belly - Tawheed + repentance", verseRef: "21:87" },
        { term: "فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ", meaning: "So We responded to him and saved him from distress", explanation: "Allah answered and rescued from whale", verseRef: "21:88" },
        { term: "وَكَذَٰلِكَ نُنجِي الْمُؤْمِنِينَ", meaning: "And thus do We save the believers", explanation: "Promise - Allah saves all sincere believers", verseRef: "21:88" }
      ]
    },

    prophetZakariyyaYahya: {
      name: "Prophets Zakariyya and Yahya",
      nameArabic: "النبيان زكريا ويحيى",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَزَكَرِيَّا إِذْ نَادَىٰ رَبَّهُ رَبِّ لَا تَذَرْنِي فَرْدًا", meaning: "And Zakariyya, when he called to his Lord: My Lord, leave me not alone", explanation: "Zakariyya's desperate prayer for child", verseRef: "21:89" },
        { term: "وَأَنتَ خَيْرُ الْوَارِثِينَ", meaning: "And You are the best of inheritors", explanation: "Acknowledging Allah even if no heir given", verseRef: "21:89" },
        { term: "فَاسْتَجَبْنَا لَهُ وَوَهَبْنَا لَهُ يَحْيَىٰ", meaning: "So We responded to him, and We gave him Yahya", explanation: "Granted son Yahya despite old age", verseRef: "21:90" },
        { term: "وَأَصْلَحْنَا لَهُ زَوْجَهُ", meaning: "And We amended his wife for him", explanation: "Wife made able to conceive", verseRef: "21:90" },
        { term: "إِنَّهُمْ كَانُوا يُسَارِعُونَ فِي الْخَيْرَاتِ", meaning: "Indeed, they used to hasten to good deeds", explanation: "Quality of prophets - racing to do good", verseRef: "21:90" },
        { term: "وَيَدْعُونَنَا رَغَبًا وَرَهَبًا", meaning: "And called upon Us in hope and fear", explanation: "Balanced worship - hope and fear together", verseRef: "21:90" },
        { term: "وَكَانُوا لَنَا خَاشِعِينَ", meaning: "And were to Us humbly submissive", explanation: "Humility before Allah", verseRef: "21:90" }
      ]
    },

    prophetMaryamIsa: {
      name: "Maryam and Prophet Isa",
      nameArabic: "مريم والنبي عيسى",
      color: "#EC4899",
      icon: "Sparkles",
      concepts: [
        { term: "وَالَّتِي أَحْصَنَتْ فَرْجَهَا", meaning: "And she who guarded her chastity", explanation: "Maryam's purity praised", verseRef: "21:91" },
        { term: "فَنَفَخْنَا فِيهَا مِن رُّوحِنَا", meaning: "So We breathed into her of Our spirit", explanation: "Miraculous conception through divine spirit", verseRef: "21:91" },
        { term: "وَجَعَلْنَاهَا وَابْنَهَا آيَةً لِّلْعَالَمِينَ", meaning: "We made her and her son a sign for the worlds", explanation: "Maryam and Isa as signs of Allah's power", verseRef: "21:91" }
      ]
    },

    oneUmmah: {
      name: "One Ummah - Unity of Message",
      nameArabic: "أمة واحدة",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "إِنَّ هَٰذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً", meaning: "Indeed this, your religion, is one religion", explanation: "All prophets brought same message of Tawheed", verseRef: "21:92" },
        { term: "وَأَنَا رَبُّكُمْ فَاعْبُدُونِ", meaning: "And I am your Lord, so worship Me", explanation: "One Lord, one command: worship Him alone", verseRef: "21:92" },
        { term: "وَتَقَطَّعُوا أَمْرَهُم بَيْنَهُمْ", meaning: "But they divided their affair among themselves", explanation: "People split into sects despite one message", verseRef: "21:93" },
        { term: "كُلٌّ إِلَيْنَا رَاجِعُونَ", meaning: "All will return to Us", explanation: "Despite divisions, all return to Allah", verseRef: "21:93" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "يَوْمَ نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ لِلْكُتُبِ", meaning: "The Day We will fold the heaven like folding a scroll", explanation: "Sky rolled up like a scroll - describing Judgment Day", verseRef: "21:104" },
        { term: "كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُّعِيدُهُ", meaning: "As We began the first creation, We will repeat it", explanation: "Recreation as easy as first creation", verseRef: "21:104" },
        { term: "وَعْدًا عَلَيْنَا إِنَّا كُنَّا فَاعِلِينَ", meaning: "A promise binding upon Us. Indeed, We will do it", explanation: "Divine promise - resurrection will occur", verseRef: "21:104" },
        { term: "وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ", meaning: "We will set up the scales of justice for Day of Resurrection", explanation: "Perfect scales - no injustice on that Day", verseRef: "21:47" },
        { term: "فَلَا تُظْلَمُ نَفْسٌ شَيْئًا", meaning: "No soul will be treated unjustly at all", explanation: "Complete justice guaranteed", verseRef: "21:47" },
        { term: "وَإِن كَانَ مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ", meaning: "Even if it be weight of a mustard seed", explanation: "Smallest deeds will be weighed", verseRef: "21:47" }
      ]
    },

    yajoojMajooj: {
      name: "Yajuj and Majuj (Gog and Magog)",
      nameArabic: "يأجوج ومأجوج",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "حَتَّىٰ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ", meaning: "Until when Yajuj and Majuj have been opened", explanation: "End times sign - barrier will be opened", verseRef: "21:96" },
        { term: "وَهُم مِّن كُلِّ حَدَبٍ يَنسِلُونَ", meaning: "And they, from every elevation, descend", explanation: "They will rush from every direction", verseRef: "21:96" },
        { term: "وَاقْتَرَبَ الْوَعْدُ الْحَقُّ", meaning: "And the true promise has approached", explanation: "Sign that Judgment Day is near", verseRef: "21:97" }
      ]
    },

    idolsAndWorshippers: {
      name: "Idols and Their Worshippers",
      nameArabic: "الأصنام وعابدوها",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "إِنَّكُمْ وَمَا تَعْبُدُونَ مِن دُونِ اللَّهِ حَصَبُ جَهَنَّمَ", meaning: "Indeed, you and what you worship besides Allah are the firewood of Hell", explanation: "Both idols and idolaters fuel for Hellfire", verseRef: "21:98" },
        { term: "أَنتُمْ لَهَا وَارِدُونَ", meaning: "You are going to enter it", explanation: "Certainty of entering Hell", verseRef: "21:98" },
        { term: "لَوْ كَانَ هَٰؤُلَاءِ آلِهَةً مَّا وَرَدُوهَا", meaning: "If these had been gods, they would not have come to it", explanation: "False gods cannot even save themselves", verseRef: "21:99" },
        { term: "وَكُلٌّ فِيهَا خَالِدُونَ", meaning: "And all of them therein will abide eternally", explanation: "Eternal punishment for idol worshippers", verseRef: "21:99" }
      ]
    },

    believersReward: {
      name: "Reward for Believers",
      nameArabic: "جزاء المؤمنين",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "إِنَّ الَّذِينَ سَبَقَتْ لَهُم مِّنَّا الْحُسْنَىٰ", meaning: "Indeed, those for whom the best from Us has preceded", explanation: "Believers who have Allah's decree of good", verseRef: "21:101" },
        { term: "أُولَٰئِكَ عَنْهَا مُبْعَدُونَ", meaning: "They will be far removed from it", explanation: "Kept far from Hell's sound and heat", verseRef: "21:101" },
        { term: "لَا يَسْمَعُونَ حَسِيسَهَا", meaning: "They will not hear its sound", explanation: "Will not even hear Hell's noise", verseRef: "21:102" },
        { term: "وَهُمْ فِي مَا اشْتَهَتْ أَنفُسُهُمْ خَالِدُونَ", meaning: "And they will be in what their souls desired, abiding eternally", explanation: "Every desire fulfilled in Paradise", verseRef: "21:102" },
        { term: "لَا يَحْزُنُهُمُ الْفَزَعُ الْأَكْبَرُ", meaning: "The greatest terror will not grieve them", explanation: "Protected from all horrors of Judgment Day", verseRef: "21:103" },
        { term: "وَتَتَلَقَّاهُمُ الْمَلَائِكَةُ هَٰذَا يَوْمُكُمُ الَّذِي كُنتُمْ تُوعَدُونَ", meaning: "And the angels will meet them: This is your Day which you were promised", explanation: "Angels welcome believers to Paradise", verseRef: "21:103" }
      ]
    },

    inheritanceOfEarth: {
      name: "Inheritance of the Earth",
      nameArabic: "وراثة الأرض",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَلَقَدْ كَتَبْنَا فِي الزَّبُورِ مِن بَعْدِ الذِّكْرِ", meaning: "We have written in the Zabur (Psalms) after the Reminder", explanation: "Promise recorded in previous scriptures", verseRef: "21:105" },
        { term: "أَنَّ الْأَرْضَ يَرِثُهَا عِبَادِيَ الصَّالِحُونَ", meaning: "The earth will be inherited by My righteous servants", explanation: "Promise that righteous will ultimately prevail", verseRef: "21:105" },
        { term: "إِنَّ فِي هَٰذَا لَبَلَاغًا لِّقَوْمٍ عَابِدِينَ", meaning: "Indeed, in this is notification for a worshipping people", explanation: "Sufficient message for those who worship", verseRef: "21:106" }
      ]
    },

    prophetMuhammadMercy: {
      name: "Prophet Muhammad - Mercy to Worlds",
      nameArabic: "النبي محمد رحمة للعالمين",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ", meaning: "We have not sent you except as a mercy to the worlds", explanation: "Prophet Muhammad sent as mercy to all creation, not just humans", verseRef: "21:107" },
        { term: "إِنَّمَا يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ", meaning: "It is only revealed to me that your god is one God", explanation: "Core revelation: One God", verseRef: "21:108" },
        { term: "فَهَلْ أَنتُم مُّسْلِمُونَ", meaning: "So will you submit [to Him]?", explanation: "Final invitation to Islam (submission)", verseRef: "21:108" }
      ]
    },

    finalSupplication: {
      name: "Final Supplication",
      nameArabic: "الدعاء الختامي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ احْكُم بِالْحَقِّ", meaning: "My Lord, judge between us in truth", explanation: "Prophet asks Allah to judge with truth", verseRef: "21:112" },
        { term: "وَرَبُّنَا الرَّحْمَٰنُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ", meaning: "And our Lord is the Most Merciful, the one whose help is sought against what you describe", explanation: "Surah ends with Ar-Rahman and seeking help against false claims", verseRef: "21:112" }
      ]
    }
  },

  relationships: [
    { from: "اقترب للناس حسابهم", to: "غفلة", type: "contrast", description: "Accountability near yet people heedless" },
    { from: "لا إله إلا أنا", to: "الأنبياء", type: "core", description: "All prophets brought same Tawheed message" },
    { from: "لو كان فيهما آلهة", to: "لفسدتا", type: "logical-proof", description: "Multiple gods would cause cosmic chaos" },
    { from: "يا نار كوني برداً وسلاماً", to: "إبراهيم", type: "miracle", description: "Fire obeyed Allah and cooled for Ibrahim" },
    { from: "أصنام", to: "حصب جهنم", type: "consequence", description: "Idols become fuel for Hell with worshippers" },
    { from: "يأجوج ومأجوج", to: "الوعد الحق", type: "sign", description: "Their release signals approaching Judgment" },
    { from: "رحمة للعالمين", to: "إله واحد", type: "purpose", description: "Mercy sent to establish Tawheed" },
    { from: "لا إله إلا أنت", to: "نجّيناه من الغمّ", type: "result", description: "Yunus's dua of Tawheed led to rescue" },
    { from: "الموازين القسط", to: "مثقال حبة", type: "precision", description: "Scales so precise they weigh mustard seeds" },
    { from: "أمتكم أمة واحدة", to: "تقطّعوا", type: "tragedy", description: "One Ummah divided by people" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Warning of Judgment", verses: "21:1-10", description: "Opening warning - accountability approaches, people heedless" },
      { stage: 2, theme: "Destroyed Nations", verses: "21:11-20", description: "Reminder of nations destroyed for rejection" },
      { stage: 3, theme: "Proofs of Tawheed", verses: "21:21-33", description: "Logical arguments for one God, creation signs" },
      { stage: 4, theme: "All Prophets Human", verses: "21:34-47", description: "Prophets mortal, scales of justice" },
      { stage: 5, theme: "Ibrahim's Story", verses: "21:51-73", description: "Breaking idols, thrown in fire, saved" },
      { stage: 6, theme: "Lut and Nuh", verses: "21:74-77", description: "Saved from corrupt peoples and flood" },
      { stage: 7, theme: "Dawud and Sulayman", verses: "21:78-82", description: "Wisdom, control over nature and jinn" },
      { stage: 8, theme: "Ayyub's Patience", verses: "21:83-84", description: "Model of patience, prayer answered" },
      { stage: 9, theme: "Ismail, Idris, Dhul-Kifl", verses: "21:85-86", description: "Praised for patience and righteousness" },
      { stage: 10, theme: "Yunus's Repentance", verses: "21:87-88", description: "Famous dua from darkness, saved from whale" },
      { stage: 11, theme: "Zakariyya and Yahya", verses: "21:89-90", description: "Prayer for child answered" },
      { stage: 12, theme: "Maryam and Isa", verses: "21:91", description: "Miracle of virgin birth" },
      { stage: 13, theme: "One Ummah", verses: "21:92-95", description: "Unity of prophetic message" },
      { stage: 14, theme: "End Times Signs", verses: "21:96-100", description: "Yajuj Majuj, idols in Hell" },
      { stage: 15, theme: "Paradise Awaits Believers", verses: "21:101-106", description: "Believers protected, inherit earth" },
      { stage: 16, theme: "Conclusion", verses: "21:107-112", description: "Prophet as mercy, final dua" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Urgency of accountability", how: "Live as if judgment is tomorrow", verse: "21:1" },
      { principle: "Question blind following", how: "Ibrahim questioned ancestors - verify your beliefs", verse: "21:53-54" },
      { principle: "Trust Allah in trials", how: "Fire became cool for Ibrahim - Allah protects", verse: "21:69" },
      { principle: "Patience in suffering", how: "Ayyub's patience rewarded - endure difficulties", verse: "21:83-84" },
      { principle: "Repent immediately", how: "Yunus's dua - admit wrongdoing, declare Tawheed", verse: "21:87" },
      { principle: "Race to do good", how: "Prophets hastened to good deeds - don't delay", verse: "21:90" },
      { principle: "Balance hope and fear", how: "Call upon Allah with hope (reward) and fear (punishment)", verse: "21:90" },
      { principle: "Unity of believers", how: "One Ummah - avoid sectarianism", verse: "21:92" },
      { principle: "Every deed matters", how: "Even mustard seed weight is recorded", verse: "21:47" },
      { principle: "Spread mercy", how: "Prophet was mercy - embody mercy in dealings", verse: "21:107" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Prophets",
    insight: "Al-Anbiya is unique in mentioning 18 prophets by name: Ibrahim, Lut, Nuh, Dawud, Sulayman, Ayyub, Ismail, Ishaq, Yaqub, Musa, Harun, Ismail, Idris, Dhul-Kifl, Yunus, Zakariyya, Yahya, and Isa (plus Maryam). The surah emphasizes that ALL prophets brought the same message of Tawheed (21:25) and were human beings who ate food and died (21:8). Ibrahim's story (breaking idols, surviving fire) takes center stage as the archetypal confrontation with polytheism. The surah also contains one of the most powerful duas: 'La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimin' (21:87) - the supplication of Yunus that the Prophet said whoever recites it in distress will be answered. The surah opens with approaching judgment (21:1) and ends with seeking Allah's judgment (21:112), forming a perfect frame."
  },

  historicalContext: {
    note: "This Makkan surah addresses the Quraysh's objections to prophethood: Why a human messenger? Where are the miracles? The surah responds by citing all previous prophets as human, their miracles as historical facts, and Tawheed as the unchanged core message. The detailed Ibrahim narrative directly countered Quraysh pride in their Abrahamic lineage while worshipping idols - showing Ibrahim himself destroyed idols. The mention of inheriting the earth (21:105) gave hope to persecuted Makkan Muslims that they would ultimately prevail."
  },

  linguisticFeatures: {
    features: [
      { feature: "اقْتَرَبَ", example: "Form VIII verb", effect: "Intensive - drawing very near, not just approaching" },
      { feature: "جُذَاذًا", example: "Fragments/pieces", effect: "Intensive plural - thoroughly smashed" },
      { feature: "لَأَكِيدَنَّ", example: "Emphatic nun + qasam", effect: "Triple emphasis on Ibrahim's oath" },
      { feature: "نُكِسُوا عَلَىٰ رُءُوسِهِمْ", example: "Turned upside down on heads", effect: "Idiom for complete reversal/confusion" },
      { feature: "ذَا النُّونِ", example: "The one of the fish", effect: "Epithet for Yunus - famous association" },
      { feature: "الظُّلُمَاتِ", example: "The darknesses (plural)", effect: "Triple darkness: night, sea, whale" },
      { feature: "أُمَّتُكُمْ أُمَّةً وَاحِدَةً", example: "Repetition with hal accusative", effect: "Emphatic - your nation truly one nation" },
      { feature: "كَطَيِّ السِّجِلِّ", example: "Like rolling a scroll", effect: "Vivid imagery of sky being rolled up" }
    ]
  },

  famousDuas: {
    duas: [
      {
        arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimin",
        meaning: "There is no deity except You; exalted are You. Indeed, I was of the wrongdoers",
        context: "Dua of Yunus from whale's belly",
        verse: "21:87",
        benefit: "Prophet said whoever recites it in distress will be answered"
      },
      {
        arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
        transliteration: "Rabbi la tadherni fardan wa Anta khayrul-warithin",
        meaning: "My Lord, do not leave me alone, and You are the best of inheritors",
        context: "Dua of Zakariyya for a child",
        verse: "21:89",
        benefit: "Dua for offspring while accepting Allah's will"
      },
      {
        arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        transliteration: "Anni massaniya-ddurru wa Anta arham-ur-rahimin",
        meaning: "Indeed, adversity has touched me, and You are the most merciful of the merciful",
        context: "Dua of Ayyub during illness",
        verse: "21:83",
        benefit: "Model of humble supplication in hardship"
      }
    ]
  },

  prophetsMentioned: {
    list: [
      { name: "Ibrahim", verses: "21:51-73", role: "Central figure - broke idols, survived fire" },
      { name: "Lut", verses: "21:71, 74-75", role: "Saved from wicked city" },
      { name: "Nuh", verses: "21:76-77", role: "Saved from flood, people drowned" },
      { name: "Dawud", verses: "21:78-80", role: "Given wisdom, mountains glorified with him" },
      { name: "Sulayman", verses: "21:78-82", role: "Given special understanding, controlled wind and jinn" },
      { name: "Ayyub", verses: "21:83-84", role: "Model of patience in suffering" },
      { name: "Ismail", verses: "21:85", role: "Praised for patience" },
      { name: "Ishaq", verses: "21:72", role: "Gift to Ibrahim" },
      { name: "Yaqub", verses: "21:72", role: "Additional gift to Ibrahim" },
      { name: "Idris", verses: "21:85", role: "Praised for patience" },
      { name: "Dhul-Kifl", verses: "21:85", role: "Praised for patience" },
      { name: "Yunus (Dhun-Nun)", verses: "21:87-88", role: "Repented in whale, saved" },
      { name: "Zakariyya", verses: "21:89-90", role: "Prayed for child, given Yahya" },
      { name: "Yahya", verses: "21:90", role: "Gift to Zakariyya" },
      { name: "Maryam", verses: "21:91", role: "Guarded chastity, bore Isa" },
      { name: "Isa", verses: "21:91", role: "Sign along with his mother" },
      { name: "Musa", verses: "21:48", role: "Given Furqan (criterion)" },
      { name: "Harun", verses: "21:48", role: "Given Furqan with Musa" }
    ]
  },

  keyVerses: {
    verses: [
      { verse: "21:25", theme: "Core Message", text: "All messengers sent with same message: La ilaha illa Ana" },
      { verse: "21:22", theme: "Logical Proof", text: "Multiple gods would cause cosmic corruption" },
      { verse: "21:69", theme: "Miracle", text: "Fire commanded to be cool and safe for Ibrahim" },
      { verse: "21:87", theme: "Famous Dua", text: "Yunus's supplication from darknesses" },
      { verse: "21:92", theme: "Unity", text: "Your Ummah is one Ummah" },
      { verse: "21:107", theme: "Prophet's Role", text: "Sent only as mercy to the worlds" },
      { verse: "21:47", theme: "Justice", text: "Scales of justice - even mustard seed weighed" },
      { verse: "21:104", theme: "Day of Judgment", text: "Sky folded like scroll" }
    ]
  }
};

export default ONTOLOGY;
