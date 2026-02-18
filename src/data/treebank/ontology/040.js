/**
 * Surah Ghafir (40) - Ontology of Quranic Concepts
 * Also known as Al-Mu'min (The Believer)
 * Theme: Divine forgiveness, Moses vs Pharaoh, the secret believer's speech, cosmic signs
 */

export const ONTOLOGY = {
  surahId: 40,
  surahName: "Ghafir",
  alternativeName: "Al-Mu'min",
  surahNameArabic: "غافر",
  alternativeNameArabic: "المؤمن",
  revelationType: "Makki",
  totalAyahs: 85,

  categories: {
    divineNames: {
      name: "Divine Names of Forgiveness",
      nameArabic: "أسماء الله للمغفرة",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "غَافِرِ الذَّنبِ", meaning: "Forgiver of sin", explanation: "Allah forgives sins completely", verseRef: "40:3" },
        { term: "قَابِلِ التَّوْبِ", meaning: "Acceptor of repentance", explanation: "Allah accepts sincere repentance", verseRef: "40:3" },
        { term: "شَدِيدِ الْعِقَابِ", meaning: "Severe in punishment", explanation: "Balance - forgiveness with justice", verseRef: "40:3" },
        { term: "ذِي الطَّوْلِ", meaning: "Owner of abundance", explanation: "Allah's bounty is limitless", verseRef: "40:3" },
        { term: "الْعَزِيزُ الْعَلِيمُ", meaning: "The Mighty, the Knowing", explanation: "Power combined with knowledge", verseRef: "40:2" },
        { term: "الْعَلِيُّ الْكَبِيرُ", meaning: "The Most High, the Grand", explanation: "Supreme elevation and greatness", verseRef: "40:12" },
        { term: "سَرِيعُ الْحِسَابِ", meaning: "Swift in account", explanation: "Quick reckoning on Judgment Day", verseRef: "40:17" },
        { term: "الْغَفَّارُ", meaning: "The Oft-Forgiving", explanation: "Intensive form - perpetual forgiveness", verseRef: "40:42" }
      ]
    },

    musaPharaohHaman: {
      name: "Moses, Pharaoh and Haman",
      nameArabic: "موسى وفرعون وهامان",
      color: "#3B82F6",
      icon: "Shield",
      concepts: [
        { term: "مُوسَىٰ بِآيَاتِنَا وَسُلْطَانٍ مُّبِينٍ", meaning: "Moses with Our signs and clear authority", explanation: "Moses sent with divine proofs", verseRef: "40:23" },
        { term: "فِرْعَوْنَ وَهَامَانَ وَقَارُونَ", meaning: "Pharaoh, Haman and Qarun", explanation: "Trinity of arrogance - ruler, minister, wealthy", verseRef: "40:24" },
        { term: "سَاحِرٌ كَذَّابٌ", meaning: "Magician, liar", explanation: "Their accusation against Moses", verseRef: "40:24" },
        { term: "اقْتُلُوا أَبْنَاءَ الَّذِينَ آمَنُوا", meaning: "Kill sons of those who believe", explanation: "Pharaoh's genocide policy", verseRef: "40:25" },
        { term: "ذَرُونِي أَقْتُلْ مُوسَىٰ", meaning: "Let me kill Moses", explanation: "Pharaoh's direct threat", verseRef: "40:26" },
        { term: "ابْنِ لِي صَرْحًا", meaning: "Build me a tower", explanation: "Pharaoh's arrogance - tower to heavens", verseRef: "40:36" },
        { term: "أَنَا رَبُّكُمُ الْأَعْلَىٰ", meaning: "I am your most high lord", explanation: "Pharaoh's claim to divinity", verseRef: "40:26" },
        { term: "فَوَقَاهُ اللَّهُ سَيِّئَاتِ مَا مَكَرُوا", meaning: "Allah protected him from evils of their plot", explanation: "Divine protection for Moses", verseRef: "40:45" },
        { term: "أَغْرَقْنَا آلَ فِرْعَوْنَ", meaning: "We drowned people of Pharaoh", explanation: "Final punishment", verseRef: "40:45" }
      ]
    },

    believerFromPharaohsFamily: {
      name: "The Believing Man from Pharaoh's Family",
      nameArabic: "مؤمن آل فرعون",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "رَجُلٌ مُّؤْمِنٌ مِّنْ آلِ فِرْعَوْنَ يَكْتُمُ إِيمَانَهُ", meaning: "A believing man from Pharaoh's family who concealed his faith", explanation: "Secret believer in hostile environment", verseRef: "40:28" },
        { term: "أَتَقْتُلُونَ رَجُلًا أَن يَقُولَ رَبِّيَ اللَّهُ", meaning: "Would you kill a man for saying My Lord is Allah?", explanation: "His courageous defense of Moses", verseRef: "40:28" },
        { term: "إِن يَكُ كَاذِبًا فَعَلَيْهِ كَذِبُهُ", meaning: "If he is a liar, upon him is his lie", explanation: "Logical argument - no loss to you", verseRef: "40:28" },
        { term: "وَإِن يَكُ صَادِقًا", meaning: "And if he is truthful", explanation: "Warning of consequences if Moses is true", verseRef: "40:28" },
        { term: "يَا قَوْمِ لَكُمُ الْمُلْكُ الْيَوْمَ", meaning: "O my people, sovereignty is yours today", explanation: "Reminder of temporary power", verseRef: "40:29" },
        { term: "مِثْلَ يَوْمِ الْأَحْزَابِ", meaning: "Like the day of the confederates", explanation: "Warning from history - previous destroyed nations", verseRef: "40:30" },
        { term: "مِثْلَ دَأْبِ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ", meaning: "Like the way of Noah's people, Aad, Thamud", explanation: "Historical examples of destruction", verseRef: "40:31" },
        { term: "يَا قَوْمِ إِنِّي أَخَافُ عَلَيْكُمْ يَوْمَ التَّنَادِ", meaning: "O my people, I fear for you Day of Calling", explanation: "Warning about Judgment Day", verseRef: "40:32" },
        { term: "يَوْمَ تُوَلُّونَ مُدْبِرِينَ", meaning: "Day you will turn back fleeing", explanation: "No escape on that Day", verseRef: "40:33" },
        { term: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِنْ هَادٍ", meaning: "Whom Allah sends astray has no guide", explanation: "Divine guidance is essential", verseRef: "40:33" },
        { term: "يَا قَوْمِ اتَّبِعُونِ أَهْدِكُمْ سَبِيلَ الرَّشَادِ", meaning: "O my people, follow me, I will guide you to the right path", explanation: "His invitation to guidance", verseRef: "40:38" },
        { term: "إِنَّمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا مَتَاعٌ", meaning: "This worldly life is only enjoyment", explanation: "Temporary nature of worldly life", verseRef: "40:39" },
        { term: "وَإِنَّ الْآخِرَةَ هِيَ دَارُ الْقَرَارِ", meaning: "And the Hereafter is the home of permanence", explanation: "Eternal abode is what matters", verseRef: "40:39" },
        { term: "أُفَوِّضُ أَمْرِي إِلَى اللَّهِ", meaning: "I entrust my affair to Allah", explanation: "Complete trust in Allah", verseRef: "40:44" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs",
      nameArabic: "الآيات الكونية",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "اللَّهُ الَّذِي جَعَلَ لَكُمُ اللَّيْلَ لِتَسْكُنُوا فِيهِ", meaning: "Allah who made for you the night to rest in", explanation: "Night for rest", verseRef: "40:61" },
        { term: "وَالنَّهَارَ مُبْصِرًا", meaning: "And the day for seeing", explanation: "Day for activity and vision", verseRef: "40:61" },
        { term: "اللَّهُ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ قَرَارًا", meaning: "Allah who made for you the earth a place of settlement", explanation: "Earth as stable dwelling", verseRef: "40:64" },
        { term: "وَالسَّمَاءَ بِنَاءً", meaning: "And the heaven a canopy", explanation: "Sky as protective structure", verseRef: "40:64" },
        { term: "وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ", meaning: "And formed you and perfected your forms", explanation: "Human creation in best form", verseRef: "40:64" },
        { term: "وَرَزَقَكُم مِّنَ الطَّيِّبَاتِ", meaning: "And provided you with good things", explanation: "Provision of pure sustenance", verseRef: "40:64" },
        { term: "خَلَقَكُم مِّن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ", meaning: "Created you from dust, then from a sperm-drop", explanation: "Stages of human creation", verseRef: "40:67" },
        { term: "ثُمَّ مِنْ عَلَقَةٍ", meaning: "Then from a clinging clot", explanation: "Embryonic development", verseRef: "40:67" },
        { term: "ثُمَّ يُخْرِجُكُمْ طِفْلًا", meaning: "Then He brings you out as a child", explanation: "Birth as infant", verseRef: "40:67" },
        { term: "ثُمَّ لِتَبْلُغُوا أَشُدَّكُمْ", meaning: "Then to reach maturity", explanation: "Growth to full strength", verseRef: "40:67" },
        { term: "ثُمَّ لِتَكُونُوا شُيُوخًا", meaning: "Then to become elders", explanation: "Old age stage", verseRef: "40:67" }
      ]
    },

    prayerOfAngels: {
      name: "Prayer of the Angels",
      nameArabic: "دعاء الملائكة",
      color: "#8B5CF6",
      icon: "Star",
      concepts: [
        { term: "الَّذِينَ يَحْمِلُونَ الْعَرْشَ وَمَنْ حَوْلَهُ", meaning: "Those who carry the Throne and those around it", explanation: "Angels bearing Allah's Throne", verseRef: "40:7" },
        { term: "يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ", meaning: "Glorify with praise of their Lord", explanation: "Constant worship of angels", verseRef: "40:7" },
        { term: "وَيُؤْمِنُونَ بِهِ", meaning: "And believe in Him", explanation: "Angels' faith in Allah", verseRef: "40:7" },
        { term: "وَيَسْتَغْفِرُونَ لِلَّذِينَ آمَنُوا", meaning: "And seek forgiveness for those who believe", explanation: "Angels intercede for believers", verseRef: "40:7" },
        { term: "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا", meaning: "Our Lord, You encompass all things in mercy and knowledge", explanation: "Recognition of Allah's mercy and knowledge", verseRef: "40:7" },
        { term: "فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ", meaning: "Forgive those who repent and follow Your way", explanation: "Prayer for repentant believers", verseRef: "40:7" },
        { term: "وَقِهِمْ عَذَابَ الْجَحِيمِ", meaning: "And protect them from punishment of Hellfire", explanation: "Prayer for protection", verseRef: "40:7" },
        { term: "وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ", meaning: "And admit them to Gardens of Eden", explanation: "Prayer for Paradise entry", verseRef: "40:8" },
        { term: "وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ", meaning: "And whoever was righteous of their fathers, spouses, offspring", explanation: "Family reunion in Paradise", verseRef: "40:8" },
        { term: "وَقِهِمُ السَّيِّئَاتِ", meaning: "And protect them from evil deeds", explanation: "Protection from consequences of sins", verseRef: "40:9" }
      ]
    },

    argumentsWithDisbelievers: {
      name: "Arguments with Disbelievers",
      nameArabic: "محاجة الكافرين",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "مَا يُجَادِلُ فِي آيَاتِ اللَّهِ إِلَّا الَّذِينَ كَفَرُوا", meaning: "None dispute about signs of Allah except disbelievers", explanation: "Disputation is sign of disbelief", verseRef: "40:4" },
        { term: "فَلَا يَغْرُرْكَ تَقَلُّبُهُمْ فِي الْبِلَادِ", meaning: "Let not their movement in land deceive you", explanation: "Worldly success is not approval", verseRef: "40:4" },
        { term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَالْأَحْزَابُ", meaning: "Denied before them people of Noah and confederates", explanation: "Pattern of rejection", verseRef: "40:5" },
        { term: "لِيُدْحِضُوا بِهِ الْحَقَّ", meaning: "To invalidate thereby the truth", explanation: "False arguments against truth", verseRef: "40:5" },
        { term: "إِذْ تُدْعَوْنَ إِلَى الْإِيمَانِ فَتَكْفُرُونَ", meaning: "When you were invited to faith, you disbelieved", explanation: "Rejection of invitation to faith", verseRef: "40:10" }
      ]
    },

    judgmentDay: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "يَوْمَ التَّلَاقِ", meaning: "Day of Meeting", explanation: "All creatures meet Allah", verseRef: "40:15" },
        { term: "يَوْمَ هُم بَارِزُونَ", meaning: "Day they come forth", explanation: "Nothing hidden from Allah", verseRef: "40:16" },
        { term: "لَا يَخْفَىٰ عَلَى اللَّهِ مِنْهُمْ شَيْءٌ", meaning: "Nothing of them is hidden from Allah", explanation: "Complete exposure before Allah", verseRef: "40:16" },
        { term: "لِّمَنِ الْمُلْكُ الْيَوْمَ", meaning: "To whom belongs dominion today?", explanation: "Question on Judgment Day", verseRef: "40:16" },
        { term: "لِلَّهِ الْوَاحِدِ الْقَهَّارِ", meaning: "To Allah, the One, the Prevailing", explanation: "Answer - only Allah", verseRef: "40:16" },
        { term: "الْيَوْمَ تُجْزَىٰ كُلُّ نَفْسٍ بِمَا كَسَبَتْ", meaning: "Today every soul is recompensed for what it earned", explanation: "Perfect justice", verseRef: "40:17" },
        { term: "لَا ظُلْمَ الْيَوْمَ", meaning: "No injustice today", explanation: "Absolute fairness", verseRef: "40:17" },
        { term: "يَوْمَ الْآزِفَةِ", meaning: "Day of the Approaching", explanation: "Imminent arrival", verseRef: "40:18" },
        { term: "إِذِ الْقُلُوبُ لَدَى الْحَنَاجِرِ كَاظِمِينَ", meaning: "When hearts are at throats, suppressing", explanation: "Extreme terror on that Day", verseRef: "40:18" }
      ]
    },

    supplicationAndResponse: {
      name: "Supplication and Response",
      nameArabic: "الدعاء والاستجابة",
      color: "#8B5CF6",
      icon: "MessageCircle",
      concepts: [
        { term: "ادْعُونِي أَسْتَجِبْ لَكُمْ", meaning: "Call upon Me, I will respond to you", explanation: "Divine promise to answer prayers", verseRef: "40:60" },
        { term: "إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي", meaning: "Those who are too proud for My worship", explanation: "Pride prevents prayer", verseRef: "40:60" },
        { term: "سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ", meaning: "Will enter Hell humiliated", explanation: "Humiliation for the arrogant", verseRef: "40:60" }
      ]
    },

    propheticConsolation: {
      name: "Consolation to the Prophet",
      nameArabic: "تسلية النبي",
      color: "#3B82F6",
      icon: "Heart",
      concepts: [
        { term: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: "Be patient, indeed Allah's promise is truth", explanation: "Command to patience", verseRef: "40:55" },
        { term: "وَاسْتَغْفِرْ لِذَنبِكَ", meaning: "And seek forgiveness for your sin", explanation: "Importance of seeking forgiveness", verseRef: "40:55" },
        { term: "وَسَبِّحْ بِحَمْدِ رَبِّكَ بِالْعَشِيِّ وَالْإِبْكَارِ", meaning: "And glorify with praise of your Lord evening and morning", explanation: "Regular worship", verseRef: "40:55" },
        { term: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: "Be patient, indeed Allah's promise is truth", explanation: "Repeated emphasis on patience", verseRef: "40:77" },
        { term: "وَلَقَدْ أَرْسَلْنَا رُسُلًا مِّن قَبْلِكَ", meaning: "We sent messengers before you", explanation: "Pattern of messengership", verseRef: "40:78" }
      ]
    },

    fateOfArrogant: {
      name: "Fate of the Arrogant",
      nameArabic: "عاقبة المستكبرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَدْخِلُوا آلَ فِرْعَوْنَ أَشَدَّ الْعَذَابِ", meaning: "Admit Pharaoh's people to severest punishment", explanation: "Pharaoh's eternal punishment", verseRef: "40:46" },
        { term: "النَّارُ يُعْرَضُونَ عَلَيْهَا غُدُوًّا وَعَشِيًّا", meaning: "Fire, they are exposed to it morning and evening", explanation: "Punishment in grave", verseRef: "40:46" },
        { term: "إِذْ يَتَحَاجُّونَ فِي النَّارِ", meaning: "When they dispute in the Fire", explanation: "Arguing in Hell", verseRef: "40:47" },
        { term: "يَقُولُ الضُّعَفَاءُ لِلَّذِينَ اسْتَكْبَرُوا", meaning: "The weak say to the arrogant", explanation: "Followers blame leaders", verseRef: "40:47" },
        { term: "ادْعُوا رَبَّكُمْ يُخَفِّفْ عَنَّا يَوْمًا مِّنَ الْعَذَابِ", meaning: "Call your Lord to lighten punishment for a day", explanation: "Desperate plea for relief", verseRef: "40:49" }
      ]
    }
  },

  relationships: [
    { from: "غافر الذنب", to: "قابل التوب", type: "complementary", description: "Forgiveness and acceptance of repentance go together" },
    { from: "شديد العقاب", to: "ذي الطول", type: "balance", description: "Justice balanced with bounty" },
    { from: "مؤمن آل فرعون", to: "يكتم إيمانه", type: "circumstance", description: "Faith concealed due to danger" },
    { from: "فرعون", to: "هامان وقارون", type: "alliance", description: "Trinity of arrogance" },
    { from: "ادعوني", to: "أستجب لكم", type: "promise", description: "Divine guarantee to answer prayers" },
    { from: "يحملون العرش", to: "يستغفرون للذين آمنوا", type: "intercession", description: "Angels pray for believers" },
    { from: "الحياة الدنيا متاع", to: "الآخرة دار القرار", type: "contrast", description: "Temporary world vs permanent hereafter" },
    { from: "أفوض أمري إلى الله", to: "فوقاه الله", type: "result", description: "Trust in Allah leads to protection" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Names of Forgiveness", verses: "40:1-3", description: "Ha-Mim, revelation, and Allah's forgiving nature" },
      { stage: 2, theme: "Disputation of Disbelievers", verses: "40:4-6", description: "Only disbelievers dispute Allah's signs" },
      { stage: 3, theme: "Angels' Prayer for Believers", verses: "40:7-9", description: "Throne-bearers intercede for believers" },
      { stage: 4, theme: "Dialogue on Judgment Day", verses: "40:10-22", description: "Disbelievers' admission and regret" },
      { stage: 5, theme: "Moses vs Pharaoh", verses: "40:23-27", description: "Moses sent to Pharaoh, Haman, Qarun" },
      { stage: 6, theme: "The Secret Believer's Speech", verses: "40:28-45", description: "Man from Pharaoh's family gives advice" },
      { stage: 7, theme: "Pharaoh's Punishment", verses: "40:46-52", description: "Fire morning and evening, disputes in Hell" },
      { stage: 8, theme: "Consolation to Prophet", verses: "40:53-56", description: "Patience, previous messengers" },
      { stage: 9, theme: "Creation and Cosmic Signs", verses: "40:57-68", description: "Creation of heavens, earth, humans" },
      { stage: 10, theme: "Those Who Deny Signs", verses: "40:69-85", description: "Punishment of deniers, final victory" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Seek forgiveness", how: "Allah is Ghafir al-Dhanb - always return to Him", verse: "40:3" },
      { principle: "Don't be deceived by worldly success", how: "Disbelievers' prosperity is temporary", verse: "40:4" },
      { principle: "Angels pray for you", how: "Be worthy of angelic intercession through faith", verse: "40:7-9" },
      { principle: "Stand for truth even alone", how: "Like the believing man from Pharaoh's family", verse: "40:28" },
      { principle: "Use wisdom in difficult situations", how: "Sometimes conceal, sometimes speak", verse: "40:28" },
      { principle: "Remember this life is temporary", how: "Focus on the permanent Hereafter", verse: "40:39" },
      { principle: "Entrust affairs to Allah", how: "Say: I entrust my affair to Allah", verse: "40:44" },
      { principle: "Call upon Allah", how: "He promises to respond - just ask", verse: "40:60" },
      { principle: "Be patient", how: "Allah's promise is true, victory comes", verse: "40:77" }
    ]
  },

  linguisticFeatures: {
    hamimSurahs: "Part of the Ha-Mim series (40-46), united by opening letters",
    rhetoricalQuestions: "Multiple rhetorical questions challenging disbelievers",
    directSpeech: "Extended speech by the believing man (40:28-44)",
    divineNames: "Concentration of forgiveness-related names",
    historicalNarratives: "Moses-Pharaoh story with unique details"
  }
};

export default ONTOLOGY;
