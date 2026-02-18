/**
 * Surah Aal Imran (The Family of Imran) - Surah 3
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 3,
  surahName: "Aal Imran",
  surahNameArabic: "آل عمران",
  totalAyahs: 200,
  revelationType: "Medinan",
  mainTheme: "Family of Imran, Truth of Jesus and Mary, Battle of Uhud, and Steadfastness in Faith",

  categories: {
    divineUnity: {
      name: "Divine Unity and Attributes",
      nameAr: "التوحيد وصفات الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Hayy Al-Qayyum", arabic: "الحي القيوم", meaning: "The Ever-Living, Self-Sustaining", ayahs: [2] },
        { term: "La ilaha illa Huwa", arabic: "لا إله إلا هو", meaning: "There is no god but He", ayahs: [2, 6, 18] },
        { term: "Musawwir fil-Arham", arabic: "يصوركم في الأرحام", meaning: "He forms you in the wombs", ayahs: [6] },
        { term: "Ulul-Albab", arabic: "أولو الألباب", meaning: "People of understanding", ayahs: [7, 190] },
        { term: "Allah Witnesses", arabic: "شهد الله", meaning: "Allah testifies to His unity", ayahs: [18] }
      ]
    },
    familyOfImran: {
      name: "Family of Imran",
      nameAr: "آل عمران",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Imran's Wife", arabic: "امرأة عمران", meaning: "Mother of Maryam, her vow", ayahs: [35, 36] },
        { term: "Maryam (Mary)", arabic: "مريم", meaning: "Chosen and purified above all women", ayahs: [36, 37, 42, 43, 44, 45] },
        { term: "Zakariyya", arabic: "زكريا", meaning: "Guardian of Maryam, father of Yahya", ayahs: [37, 38, 39, 40, 41] },
        { term: "Yahya (John)", arabic: "يحيى", meaning: "Noble, chaste, prophet", ayahs: [39] },
        { term: "Miraculous Provision", arabic: "الرزق العجيب", meaning: "Food coming to Maryam in the mihrab", ayahs: [37] }
      ]
    },
    isaIbnMaryam: {
      name: "Jesus Son of Mary",
      nameAr: "عيسى ابن مريم",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "Al-Masih Isa", arabic: "المسيح عيسى", meaning: "The Messiah Jesus, son of Mary", ayahs: [45] },
        { term: "Kalimatullah", arabic: "كلمة منه", meaning: "A word from Allah", ayahs: [45] },
        { term: "Wajih", arabic: "وجيها", meaning: "Distinguished in this world and Hereafter", ayahs: [45] },
        { term: "Speaking in Cradle", arabic: "يكلم الناس في المهد", meaning: "Speaking in the cradle", ayahs: [46] },
        { term: "Kun Fayakun", arabic: "كن فيكون", meaning: "Be, and it is - creation of Jesus", ayahs: [47, 59] },
        { term: "Like Adam", arabic: "كمثل آدم", meaning: "Jesus's creation like Adam's", ayahs: [59] },
        { term: "Miracles of Jesus", arabic: "معجزات عيسى", meaning: "Birds from clay, healing, raising dead", ayahs: [49] },
        { term: "Al-Hawariyyun", arabic: "الحواريون", meaning: "The disciples of Jesus", ayahs: [52] },
        { term: "Raised to Allah", arabic: "رافعك إلي", meaning: "Allah raised Jesus to Himself", ayahs: [55] }
      ]
    },
    muhkamMutashabih: {
      name: "Clear and Allegorical Verses",
      nameAr: "المحكم والمتشابه",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Ayat Muhkamat", arabic: "آيات محكمات", meaning: "Clear, precise verses - mother of the Book", ayahs: [7] },
        { term: "Ayat Mutashabihat", arabic: "آيات متشابهات", meaning: "Allegorical, ambiguous verses", ayahs: [7] },
        { term: "Seeking Fitna", arabic: "ابتغاء الفتنة", meaning: "Those who follow ambiguous seeking discord", ayahs: [7] },
        { term: "Rasikhuun fil-Ilm", arabic: "الراسخون في العلم", meaning: "Firmly grounded in knowledge", ayahs: [7] }
      ]
    },
    battleOfUhud: {
      name: "Battle of Uhud",
      nameAr: "غزوة أحد",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Victory at Badr", arabic: "نصر ببدر", meaning: "Previous victory when weak", ayahs: [123] },
        { term: "Two Armies Met", arabic: "التقى الجمعان", meaning: "When two armies met at Uhud", ayahs: [121, 122, 155, 166] },
        { term: "Archer Disobedience", arabic: "عصيتم من بعد ما أراكم", meaning: "Disobeyed after seeing victory", ayahs: [152] },
        { term: "Prophet Wounded", arabic: "جرح الرسول", meaning: "Prophet was injured in battle", ayahs: [144] },
        { term: "Rumors of Death", arabic: "شائعة الموت", meaning: "Rumor that Prophet had died", ayahs: [144] },
        { term: "Testing Believers", arabic: "ابتلاء المؤمنين", meaning: "Allah tests believers through trials", ayahs: [140, 141, 142, 154] },
        { term: "Shaytan's Slip", arabic: "استزلهم الشيطان", meaning: "Satan caused them to slip", ayahs: [155] },
        { term: "Seventy Martyrs", arabic: "الشهداء", meaning: "Martyrs are alive with their Lord", ayahs: [169, 170, 171] }
      ]
    },
    steadfastnessAndPatience: {
      name: "Steadfastness and Patience",
      nameAr: "الصبر والثبات",
      color: '#06B6D4',
      icon: 'Heart',
      concepts: [
        { term: "Sabr", arabic: "الصبر", meaning: "Patience in adversity", ayahs: [120, 125, 186, 200] },
        { term: "Musabirah", arabic: "المصابرة", meaning: "Mutual encouragement in patience", ayahs: [200] },
        { term: "Ribat", arabic: "الرباط", meaning: "Guarding the frontiers", ayahs: [200] },
        { term: "Tawakkul", arabic: "التوكل", meaning: "Trust in Allah", ayahs: [122, 159, 160] },
        { term: "Hasbunallah", arabic: "حسبنا الله", meaning: "Allah is sufficient for us", ayahs: [173, 174] },
        { term: "La Tahzanuu", arabic: "لا تحزنوا", meaning: "Do not grieve or despair", ayahs: [139, 153, 176] }
      ]
    },
    peopleOfTheBook: {
      name: "People of the Book",
      nameAr: "أهل الكتاب",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "Ahl al-Kitab", arabic: "أهل الكتاب", meaning: "Jews and Christians", ayahs: [64, 65, 69, 70, 71, 72, 75, 98, 99, 110, 113, 199] },
        { term: "Common Word", arabic: "كلمة سواء", meaning: "Call to common terms of worship", ayahs: [64] },
        { term: "Ibrahim's Religion", arabic: "ملة إبراهيم", meaning: "Abraham was neither Jew nor Christian", ayahs: [65, 67, 68, 95] },
        { term: "Distortion", arabic: "التحريف", meaning: "They twist scripture with tongues", ayahs: [78] },
        { term: "Righteous Among Them", arabic: "أمة قائمة", meaning: "Among them an upright community", ayahs: [113, 114, 115, 199] }
      ]
    },
    hypocrisyAndDisbelief: {
      name: "Hypocrisy and Disbelief",
      nameAr: "النفاق والكفر",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Munafiqun Signs", arabic: "علامات النفاق", meaning: "Characteristics of hypocrites", ayahs: [119, 120, 156, 167, 168] },
        { term: "Stayed Behind", arabic: "قعدوا", meaning: "Hypocrites who refused to fight", ayahs: [167, 168] },
        { term: "Biting Fingers", arabic: "عضوا عليكم الأنامل", meaning: "They bite fingers in rage at believers", ayahs: [119] },
        { term: "Kufr Punishment", arabic: "عذاب الكافرين", meaning: "Severe punishment for disbelievers", ayahs: [4, 10, 21, 56, 88, 91, 106, 116, 131, 176, 177, 178] }
      ]
    },
    trueFaith: {
      name: "True Faith and Its Signs",
      nameAr: "الإيمان الصادق وعلاماته",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Islam as Din", arabic: "الإسلام الدين", meaning: "True religion with Allah is Islam", ayahs: [19, 85] },
        { term: "Love of Allah", arabic: "حب الله", meaning: "If you love Allah, follow the Prophet", ayahs: [31] },
        { term: "Birr", arabic: "البر", meaning: "Righteousness - spending what you love", ayahs: [92] },
        { term: "Taqwa", arabic: "التقوى", meaning: "God-consciousness, true piety", ayahs: [102, 123, 130, 131, 133, 179, 198, 200] },
        { term: "Dhikr", arabic: "الذكر", meaning: "Remembrance of Allah", ayahs: [41, 135, 191] },
        { term: "Istighfar", arabic: "الاستغفار", meaning: "Seeking forgiveness", ayahs: [135, 147] }
      ]
    },
    worldlyAttachments: {
      name: "Worldly Attachments",
      nameAr: "الزخرف الدنيوي",
      color: '#EC4899',
      icon: 'Eye',
      concepts: [
        { term: "Zuyyina", arabic: "زين للناس", meaning: "Beautified for people - desires", ayahs: [14] },
        { term: "Women, Children", arabic: "النساء والبنين", meaning: "Love of women and children", ayahs: [14] },
        { term: "Gold and Silver", arabic: "الذهب والفضة", meaning: "Hoarded treasures", ayahs: [14] },
        { term: "Horses and Cattle", arabic: "الخيل والأنعام", meaning: "Fine horses and livestock", ayahs: [14] },
        { term: "Better Than This", arabic: "خير من ذلك", meaning: "What is with Allah is better", ayahs: [15, 198] }
      ]
    },
    divineWisdom: {
      name: "Divine Wisdom and Signs",
      nameAr: "الحكمة الإلهية والآيات",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "Creation Signs", arabic: "آيات في الخلق", meaning: "Signs in heavens and earth", ayahs: [190] },
        { term: "Night and Day", arabic: "اختلاف الليل والنهار", meaning: "Alternation of night and day", ayahs: [190] },
        { term: "Remembering While Standing", arabic: "يذكرون الله قياما", meaning: "Remember Allah in all positions", ayahs: [191] },
        { term: "Not Created in Vain", arabic: "ما خلقت هذا باطلا", meaning: "You created not this in vain", ayahs: [191] }
      ]
    },
    delegationOfNajran: {
      name: "Delegation of Najran",
      nameAr: "وفد نجران",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "Mubahala", arabic: "المباهلة", meaning: "Mutual cursing/invocation challenge", ayahs: [61] },
        { term: "Our Sons Your Sons", arabic: "أبناءنا وأبناءكم", meaning: "Bring our children and yours", ayahs: [61] },
        { term: "Lanat Allah", arabic: "لعنة الله", meaning: "Curse of Allah on liars", ayahs: [61] },
        { term: "True Narrative", arabic: "القصص الحق", meaning: "This is the true story of Jesus", ayahs: [62] }
      ]
    },
    victory: {
      name: "Victory and Defeat",
      nameAr: "النصر والهزيمة",
      color: '#22C55E',
      icon: 'Zap',
      concepts: [
        { term: "Nasr min Allah", arabic: "نصر من عند الله", meaning: "Victory is only from Allah", ayahs: [126, 160] },
        { term: "Angels Descending", arabic: "الملائكة منزلين", meaning: "Reinforcing angels", ayahs: [124, 125] },
        { term: "Alternating Days", arabic: "تلك الأيام نداولها", meaning: "Days of victory rotate among people", ayahs: [140] },
        { term: "Wisdom in Defeat", arabic: "حكمة في الهزيمة", meaning: "Testing and purification through defeat", ayahs: [140, 141, 142, 152, 154, 165, 166] }
      ]
    },
    ribaPrahibition: {
      name: "Usury Prohibition",
      nameAr: "تحريم الربا",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Riba Multiplied", arabic: "الربا أضعافا مضاعفة", meaning: "Do not consume usury doubled", ayahs: [130] },
        { term: "Fear Allah Regarding Riba", arabic: "اتقوا الله في الربا", meaning: "Fear Allah and avoid usury", ayahs: [130] },
        { term: "Fire Prepared", arabic: "النار أعدت", meaning: "Fire prepared for those who persist", ayahs: [131] }
      ]
    },
    prophetMuhammad: {
      name: "Prophet Muhammad",
      nameAr: "النبي محمد",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "Muhammad is a Messenger", arabic: "ما محمد إلا رسول", meaning: "Muhammad is only a messenger", ayahs: [144] },
        { term: "Messengers Before Him", arabic: "قد خلت من قبله الرسل", meaning: "Messengers passed before him", ayahs: [144] },
        { term: "If He Dies", arabic: "أفإن مات", meaning: "Will you turn back if he dies?", ayahs: [144] },
        { term: "Gentle Character", arabic: "لنت لهم", meaning: "By mercy you were gentle with them", ayahs: [159] },
        { term: "Shura", arabic: "شاورهم في الأمر", meaning: "Consult them in affairs", ayahs: [159] }
      ]
    }
  },

  relationships: [
    { from: "Family of Imran", to: "Jesus and Mary", type: "lineage", description: "Maryam from the blessed family, mother of Isa" },
    { from: "Kun Fayakun", to: "Adam and Jesus", type: "parallel", description: "Both created by Allah's command without father" },
    { from: "Mubahala", to: "Christian Delegation", type: "challenge", description: "Challenge to invoke curse on liars about Jesus" },
    { from: "Battle of Uhud", to: "Archer Disobedience", type: "cause", description: "Leaving posts caused military reversal" },
    { from: "Sabr and Musabirah", to: "Ultimate Success", type: "condition", description: "Patience and steadfastness lead to victory" },
    { from: "Testing Believers", to: "Purification", type: "purpose", description: "Trials purify hearts and distinguish true believers" },
    { from: "Muhkamat", to: "Mutashabihat", type: "distinction", description: "Clear verses are foundation, ambiguous require interpretation" },
    { from: "People of Book", to: "Common Word", type: "invitation", description: "Invitation to worship Allah alone" },
    { from: "Worldly Desires", to: "What is With Allah", type: "comparison", description: "Eternal rewards surpass temporary pleasures" },
    { from: "Muhammad's Death", to: "Faith Continuity", type: "principle", description: "Islam continues regardless of Prophet's mortal life" },
    { from: "Riba", to: "Divine Anger", type: "prohibition", description: "Usury brings divine punishment" },
    { from: "Hasbunallah", to: "Increased Faith", type: "result", description: "Trust in Allah strengthens faith in adversity" }
  ],

  thematicFlow: {
    title: "From Divine Truth to Community Resilience",
    stages: [
      { name: "Divine Unity", ayahs: [1, 2, 3, 4, 5, 6], description: "Alif Lam Mim, Allah is Al-Hayy Al-Qayyum" },
      { name: "Clear and Ambiguous Verses", ayahs: [7, 8, 9], description: "Muhkamat and Mutashabihat, supplication" },
      { name: "Worldly Attachments", ayahs: [10, 11, 12, 13, 14, 15, 16, 17], description: "Disbelievers' fate, worldly desires vs. Paradise" },
      { name: "Islam as True Religion", ayahs: [18, 19, 20, 21, 22, 23, 24, 25], description: "Allah witnesses, Islam is the religion" },
      { name: "Divine Sovereignty", ayahs: [26, 27, 28, 29, 30, 31, 32], description: "Allah gives dominion, follow Prophet" },
      { name: "Chosen Families", ayahs: [33, 34], description: "Adam, Nuh, Ibrahim, Imran" },
      { name: "Maryam's Birth and Upbringing", ayahs: [35, 36, 37, 38, 39, 40, 41], description: "Dedication of Maryam, Zakariyya's prayer" },
      { name: "Maryam Chosen", ayahs: [42, 43, 44], description: "Angels announce Maryam's selection" },
      { name: "Annunciation of Jesus", ayahs: [45, 46, 47, 48, 49, 50, 51], description: "Jesus's birth, miracles, mission" },
      { name: "Disciples and Ascension", ayahs: [52, 53, 54, 55, 56, 57, 58], description: "Hawariyyun, plot against Jesus, raised up" },
      { name: "Jesus Like Adam", ayahs: [59, 60, 61, 62, 63], description: "Kun fayakun, Mubahala challenge" },
      { name: "Call to Common Ground", ayahs: [64, 65, 66, 67, 68, 69, 70, 71], description: "People of Book invited, Ibrahim's true faith" },
      { name: "People of Book's Deception", ayahs: [72, 73, 74, 75, 76, 77, 78, 79, 80], description: "Plotting, distortion, false claims" },
      { name: "Covenant of Prophets", ayahs: [81, 82, 83, 84, 85], description: "All prophets confirm Muhammad, Islam" },
      { name: "Apostasy Warning", ayahs: [86, 87, 88, 89, 90, 91], description: "No forgiveness for persistent disbelief" },
      { name: "True Righteousness", ayahs: [92, 93, 94, 95, 96, 97], description: "Spend what you love, Ibrahim's way" },
      { name: "Ahlul Kitab's Division", ayahs: [98, 99, 100, 101], description: "Some disbelieve, hold to Allah's rope" },
      { name: "Brotherhood and Unity", ayahs: [102, 103, 104, 105, 106, 107, 108, 109, 110], description: "Hold together, best nation" },
      { name: "Promise to Believers", ayahs: [111, 112, 113, 114, 115], description: "Enemies cannot harm, righteous among Ahlul Kitab" },
      { name: "Wealth and Deeds", ayahs: [116, 117, 118, 119, 120], description: "Disbelievers' wealth useless, avoid hypocrites" },
      { name: "Battle Preparations", ayahs: [121, 122, 123, 124, 125, 126, 127, 128, 129], description: "Positioning troops, angels promised" },
      { name: "Riba Prohibition", ayahs: [130, 131, 132], description: "Avoid usury, obey Allah and Messenger" },
      { name: "Paradise and Forgiveness", ayahs: [133, 134, 135, 136], description: "Race to Paradise, characteristics of pious" },
      { name: "Historical Lessons", ayahs: [137, 138, 139, 140, 141, 142, 143], description: "Patterns of nations, do not weaken" },
      { name: "Death and Martyrdom", ayahs: [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158], description: "Muhammad mortal, steadfast fighters" },
      { name: "Prophet's Character", ayahs: [159, 160, 161, 162, 163, 164], description: "Gentleness, consultation, trust" },
      { name: "Uhud Analysis", ayahs: [165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175], description: "What happened, martyrs alive, Hasbunallah" },
      { name: "Disbelievers' Fate", ayahs: [176, 177, 178, 179, 180], description: "No harm to Allah, miserliness condemned" },
      { name: "Response to Mockery", ayahs: [181, 182, 183, 184, 185, 186, 187, 188, 189], description: "Rejectors recorded, everyone tastes death" },
      { name: "Signs in Creation", ayahs: [190, 191, 192, 193, 194], description: "Contemplating heavens and earth" },
      { name: "Response to Supplication", ayahs: [195, 196, 197, 198], description: "Allah accepts prayers, rewards emigrants" },
      { name: "Righteous Ahlul Kitab", ayahs: [199], description: "Some truly believe" },
      { name: "Final Exhortation", ayahs: [200], description: "Be patient, excel in patience, guard frontiers" }
    ]
  },

  uniqueInsight: {
    title: "Muhammad is Only a Messenger (وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ)",
    insight: "Verse 144 addresses a critical moment during Uhud when rumors spread that Prophet Muhammad had been killed, causing some companions to lose hope and flee. The verse asks pointedly: 'If he dies or is killed, will you turn back on your heels?' This established a foundational principle: Islam is not personality-worship. The faith transcends any individual, even the Prophet himself. Abu Bakr quoted this very verse after the Prophet's death to steady the companions, telling Umar: 'Whoever worshipped Muhammad, know that Muhammad has died. And whoever worships Allah, know that Allah is Ever-Living and does not die.' This verse eternally protects Islam from the collapse that befalls movements built around charismatic individuals. The Prophet is honored and followed, but the religion belongs to Allah alone.",
    arabicTerm: "وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ",
    rootMeaning: "ر-س-ل (to send) - emphasizing prophets are sent messengers, not divine",
    keyAyah: 144
  },

  historicalContext: {
    revelationPeriod: "Medinan period, largely after Battle of Uhud (3 AH/625 CE)",
    occasion: "Multiple occasions: (1) Delegation of Najran Christians came to debate about Jesus, leading to Mubahala verses. (2) Battle of Uhud where Muslims suffered setback after initial victory, when archers abandoned posts. (3) Ongoing engagement with Medinan Jewish tribes. The surah addresses Christian theology regarding Jesus, Jewish claims, and provides detailed post-battle analysis of Uhud.",
    note: "This surah and Al-Baqarah are called 'Al-Zahrawain' (the two lights) and will come as clouds or flocks of birds interceding for their reciters on Judgment Day. The last ten verses (190-200) are particularly praised by the Prophet who wept upon reading them and said: 'Woe to whoever reads these and does not contemplate them.'"
  },

  linguisticFeatures: {
    features: [
      { name: "Muqatta'at Opening", description: "الم - Alif Lam Mim", example: "Mysterious letters beginning the surah", ayah: 1 },
      { name: "Kun Fayakun", description: "كن فيكون", example: "Divine creative command for Jesus", ayah: 47 },
      { name: "Rhetorical Question", description: "أَفَإِن مَّاتَ أَوْ قُتِلَ", example: "If he dies or is killed, will you turn back?", ayah: 144 },
      { name: "Call Formula", description: "قُلْ يَا أَهْلَ الْكِتَابِ", example: "Direct address to People of Book", ayahs: [64, 65, 98, 99] },
      { name: "Triple Imperative Ending", description: "اصْبِرُوا وَصَابِرُوا وَرَابِطُوا", example: "Be patient, excel in patience, guard", ayah: 200 },
      { name: "Ulu al-Albab Formula", description: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ", example: "Signs for people of understanding", ayahs: [7, 190] }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 2, name: "Al-Baqarah", relationship: "Both are 'Zahrawain', both address Ahlul Kitab extensively", type: "paired_surahs" },
      { surah: 4, name: "An-Nisa", relationship: "Both discuss Jesus, women's rights, and battle regulations", type: "thematic_continuation" },
      { surah: 5, name: "Al-Ma'idah", relationship: "Both address Christian beliefs about Jesus", type: "thematic_parallel" },
      { surah: 19, name: "Maryam", relationship: "Both narrate stories of Zakariyya, Maryam, and Jesus", type: "thematic_parallel" },
      { surah: 8, name: "Al-Anfal", relationship: "Battle of Badr context compared with Uhud here", type: "battle_narratives" },
      { surah: 33, name: "Al-Ahzab", relationship: "Both discuss battles and hypocrites' behavior", type: "thematic_parallel" },
      { surah: 57, name: "Al-Hadid", relationship: "Both discuss Jesus and previous scripture", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
