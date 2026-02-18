/**
 * Surah Al-Ma'arij (70) - Ontology of Quranic Concepts
 * The Ascending Stairways
 * Theme: Day of Judgment, human nature, qualities of successful believers
 */

export const ONTOLOGY = {
  surahId: 70,
  surahName: "Al-Ma'arij",
  surahNameArabic: "المعارج",
  revelationType: "Makki",
  totalAyahs: 44,

  categories: {
    inevitablePunishment: {
      name: "Inevitable Punishment",
      nameArabic: "العذاب الواقع",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ", meaning: "A questioner asked about punishment to occur", explanation: "Al-Nadr ibn al-Harith mockingly asked for punishment", verseRef: "70:1" },
        { term: "لِلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ", meaning: "For disbelievers, none can prevent it", explanation: "No one can stop divine punishment", verseRef: "70:2" },
        { term: "ذِي الْمَعَارِجِ", meaning: "Owner of ascending stairways", explanation: "Allah's high stations where angels ascend", verseRef: "70:3" }
      ]
    },

    angelicAscent: {
      name: "Angelic Ascent",
      nameArabic: "صعود الملائكة",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ", meaning: "Angels and Spirit ascend", explanation: "Jibreel and angels ascend to Allah", verseRef: "70:4" },
        { term: "خَمْسِينَ أَلْفَ سَنَةٍ", meaning: "Fifty thousand years", explanation: "Length of Day of Judgment for disbelievers", verseRef: "70:4" }
      ]
    },

    beautifulPatience: {
      name: "Beautiful Patience",
      nameArabic: "الصبر الجميل",
      color: '#3B82F6',
      icon: 'Heart',
      concepts: [
        { term: "فَاصْبِرْ صَبْرًا جَمِيلًا", meaning: "Be patient with beautiful patience", explanation: "Patience without complaint", verseRef: "70:5" },
        { term: "يَرَوْنَهُ بَعِيدًا... وَنَرَاهُ قَرِيبًا", meaning: "They see it far; We see it near", explanation: "Different perspectives on Day of Judgment", verseRef: "70:6-7" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment Scenes",
      nameArabic: "مشاهد القيامة",
      color: '#F59E0B',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءُ كَالْمُهْلِ", meaning: "Sky like murky oil", explanation: "Sky changes color/texture", verseRef: "70:8" },
        { term: "الْجِبَالُ كَالْعِهْنِ", meaning: "Mountains like wool", explanation: "Mountains become colored wool", verseRef: "70:9" },
        { term: "وَلَا يَسْأَلُ حَمِيمٌ حَمِيمًا", meaning: "No friend asks about friend", explanation: "Even close friends preoccupied", verseRef: "70:10" }
      ]
    },

    desperateRansom: {
      name: "Desperate Ransom Offers",
      nameArabic: "محاولات الفداء اليائسة",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "يَوَدُّ الْمُجْرِمُ لَوْ يَفْتَدِي", meaning: "Criminal wishes to ransom himself", explanation: "Desperate to escape punishment", verseRef: "70:11" },
        { term: "بِبَنِيهِ", meaning: "With his children", explanation: "Would sacrifice his own children", verseRef: "70:11" },
        { term: "وَصَاحِبَتِهِ وَأَخِيهِ", meaning: "His wife and brother", explanation: "Would sacrifice spouse and siblings", verseRef: "70:12" },
        { term: "وَفَصِيلَتِهِ", meaning: "His tribe", explanation: "Would sacrifice entire clan", verseRef: "70:13" },
        { term: "وَمَن فِي الْأَرْضِ جَمِيعًا", meaning: "Everyone on earth", explanation: "Would sacrifice all humanity", verseRef: "70:14" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "لَظَىٰ", meaning: "Laza (blazing fire)", explanation: "Name for Hellfire", verseRef: "70:15" },
        { term: "نَزَّاعَةً لِّلشَّوَىٰ", meaning: "Remover of scalps", explanation: "Burns off skin from head", verseRef: "70:16" },
        { term: "تَدْعُو مَنْ أَدْبَرَ وَتَوَلَّىٰ", meaning: "Calls those who turned back", explanation: "Hell summons the rejecters", verseRef: "70:17" },
        { term: "وَجَمَعَ فَأَوْعَىٰ", meaning: "Collected and hoarded", explanation: "Hoarded wealth, didn't spend", verseRef: "70:18" }
      ]
    },

    humanNature: {
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "خُلِقَ هَلُوعًا", meaning: "Created anxious/impatient", explanation: "Human's inherent impatience", verseRef: "70:19" },
        { term: "إِذَا مَسَّهُ الشَّرُّ جَزُوعًا", meaning: "When evil touches, distressed", explanation: "Panic in hardship", verseRef: "70:20" },
        { term: "إِذَا مَسَّهُ الْخَيْرُ مَنُوعًا", meaning: "When good touches, withholding", explanation: "Stingy in prosperity", verseRef: "70:21" }
      ]
    },

    exceptionsFromHumanWeakness: {
      name: "Exceptions to Human Weakness",
      nameArabic: "المستثنون من الضعف البشري",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "إِلَّا الْمُصَلِّينَ", meaning: "Except those who pray", explanation: "Prayer overcomes impatience", verseRef: "70:22" },
        { term: "عَلَىٰ صَلَاتِهِمْ دَائِمُونَ", meaning: "Constant in their prayer", explanation: "Consistent prayer", verseRef: "70:23" },
        { term: "حَقٌّ مَّعْلُومٌ", meaning: "Known right", explanation: "Give assigned portion (zakah)", verseRef: "70:24" },
        { term: "لِلسَّائِلِ وَالْمَحْرُومِ", meaning: "For beggar and deprived", explanation: "Charity to those who ask and don't", verseRef: "70:25" },
        { term: "يُصَدِّقُونَ بِيَوْمِ الدِّينِ", meaning: "Believe in Day of Judgment", explanation: "Affirm accountability", verseRef: "70:26" },
        { term: "مِنْ عَذَابِ رَبِّهِم مُّشْفِقُونَ", meaning: "Fear punishment of Lord", explanation: "Not feel secure from punishment", verseRef: "70:27" },
        { term: "لِفُرُوجِهِمْ حَافِظُونَ", meaning: "Guard their private parts", explanation: "Chastity", verseRef: "70:29" },
        { term: "لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ", meaning: "Fulfill trusts and promises", explanation: "Trustworthiness", verseRef: "70:32" },
        { term: "بِشَهَادَاتِهِمْ قَائِمُونَ", meaning: "Stand firm in testimony", explanation: "Honest witnessing", verseRef: "70:33" },
        { term: "عَلَىٰ صَلَاتِهِمْ يُحَافِظُونَ", meaning: "Carefully maintain prayer", explanation: "Guard prayer times", verseRef: "70:34" }
      ]
    },

    disbelieversRushing: {
      name: "Disbelievers' Mockery",
      nameArabic: "استهزاء الكافرين",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "قِبَلَكَ مُهْطِعِينَ", meaning: "Hastening toward you", explanation: "Running to mock Prophet", verseRef: "70:36" },
        { term: "عِزِينَ", meaning: "In groups", explanation: "Crowding from all sides", verseRef: "70:37" },
        { term: "أَيَطْمَعُ... أَن يُدْخَلَ جَنَّةَ نَعِيمٍ", meaning: "Does each aspire to enter Paradise?", explanation: "Rhetorical question - without faith, no Paradise", verseRef: "70:38" }
      ]
    },

    divineOath: {
      name: "Divine Oath",
      nameArabic: "القسم الإلهي",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "بِرَبِّ الْمَشَارِقِ وَالْمَغَارِبِ", meaning: "By Lord of Easts and Wests", explanation: "Plural - multiple sunrise/sunset points", verseRef: "70:40" },
        { term: "لَقَادِرُونَ عَلَىٰ أَن نُّبَدِّلَ خَيْرًا مِّنْهُمْ", meaning: "Able to replace with better", explanation: "Allah can replace rejectors", verseRef: "70:40-41" }
      ]
    },

    finalScene: {
      name: "Final Scene",
      nameArabic: "المشهد الأخير",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "يَخْرُجُونَ مِنَ الْأَجْدَاثِ سِرَاعًا", meaning: "Emerge from graves hastening", explanation: "Quick resurrection", verseRef: "70:43" },
        { term: "كَأَنَّهُمْ إِلَىٰ نُصُبٍ يُوفِضُونَ", meaning: "As if racing to an idol", explanation: "Rushing like they used to rush to idols", verseRef: "70:43" },
        { term: "خَاشِعَةً أَبْصَارُهُمْ", meaning: "Eyes humbled", explanation: "Eyes cast down in shame", verseRef: "70:44" },
        { term: "تَرْهَقُهُمْ ذِلَّةٌ", meaning: "Humiliation covering them", explanation: "Overwhelmed with disgrace", verseRef: "70:44" }
      ]
    }
  },

  relationships: [
    { from: "هلوعاً... جزوعاً... منوعاً", to: "إلا المصلين", type: "exception", description: "Prayer overcomes human weakness" },
    { from: "يرونه بعيداً", to: "نراه قريباً", type: "contrast", description: "Human vs divine perspective on Day of Judgment" },
    { from: "دائمون على صلاتهم", to: "يحافظون على صلاتهم", type: "bookend", description: "Prayer begins and ends the righteous qualities" },
    { from: "جمع فأوعى", to: "للسائل والمحروم", type: "contrast", description: "Hoarding vs giving to needy" },
    { from: "المشارق والمغارب", to: "مسبوقين", type: "power", description: "Lord of all directions is never outrun" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Inevitable Punishment", verses: "70:1-7", description: "Questioner mocks; punishment certain; be patient" },
      { stage: 2, theme: "Day of Judgment", verses: "70:8-14", description: "Sky/mountains change; desperate ransom offers" },
      { stage: 3, theme: "Hell Description", verses: "70:15-18", description: "Laza burns scalps; calls those who hoarded" },
      { stage: 4, theme: "Human Nature", verses: "70:19-21", description: "Man impatient in hardship, stingy in ease" },
      { stage: 5, theme: "Exceptions", verses: "70:22-35", description: "Eleven qualities of successful believers" },
      { stage: 6, theme: "Disbelievers' Fate", verses: "70:36-44", description: "Mockery futile; resurrection; humiliation" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Beautiful patience", how: "Endure without complaining; don't seek sympathy", verse: "70:5" },
      { principle: "Constant prayer", how: "Pray consistently, not just in crisis", verse: "70:23" },
      { principle: "Give to those who don't ask", how: "Seek out the deprived who don't beg", verse: "70:25" },
      { principle: "Fear Allah's punishment", how: "Never feel secure from accountability", verse: "70:27-28" },
      { principle: "Guard chastity", how: "Protect yourself except with spouse", verse: "70:29-30" },
      { principle: "Fulfill trusts", how: "Keep promises and return what's entrusted", verse: "70:32" },
      { principle: "Honest testimony", how: "Never lie in witnessing even if costly", verse: "70:33" }
    ]
  },

  uniqueInsight: {
    title: "The Eleven Qualities Formula",
    insight: "Verses 22-35 provide a comprehensive checklist of 11 qualities that exempt believers from human weakness (halūʿ): (1) Constant in prayer, (2) Give known right to poor, (3) Help beggars, (4) Help deprived, (5) Believe in Day of Judgment, (6) Fear Allah's punishment, (7) Guard chastity, (8) Fulfill trusts, (9) Keep promises, (10) Stand firm in testimony, (11) Carefully maintain prayer. Notice prayer bookends the list (verses 23 and 34). The first and last quality is salah - showing its central importance. The list moves from worship → charity → belief → morality → testimony → prayer again. This structure shows that Islamic righteousness integrates worship, social responsibility, belief, and ethics as an inseparable whole."
  },

  historicalContext: {
    note: "Verse 1 refers to al-Nadr ibn al-Harith who mockingly demanded: 'O Allah, if this is the truth from You, rain down stones on us or bring painful punishment' (8:32). The surah responds that such punishment will indeed come - but only at Allah's appointed time. The term 'maʿārij' (ascending stairways) refers to the high stations of Allah to which angels ascend."
  },

  linguisticFeatures: {
    features: [
      { feature: "هَلُوع", example: "Intensively anxious", effect: "faʿūl pattern - intensive quality" },
      { feature: "جَزُوع", example: "Intensively distressed", effect: "faʿūl pattern - excessive panic" },
      { feature: "مَنُوع", example: "Intensively withholding", effect: "faʿūl pattern - extreme stinginess" },
      { feature: "نَزَّاعَة", example: "Intensive remover", effect: "faʿʿālah pattern - continuous action" },
      { feature: "عِزِين", example: "Groups (plural of عِزَة)", effect: "Scattered factions" },
      { feature: "المَعَارِج", example: "Places of ascent", effect: "Plural of مِعْرَج - stairways" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "70:4", topic: "Relativity of time", note: "50,000 years for Day of Judgment - different time experience" },
      { verse: "70:40", topic: "Multiple sunrises", note: "المشارق والمغارب (plural) - sun rises/sets at different points throughout year" }
    ]
  }
};

export default ONTOLOGY;
