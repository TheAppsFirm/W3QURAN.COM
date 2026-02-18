/**
 * Surah Al-Mutaffifin (83) - Ontology of Quranic Concepts
 * The Defrauders
 * Theme: Cheaters in trade, Sijjin vs Illiyyun, righteous triumph
 */

export const ONTOLOGY = {
  surahId: 83,
  surahName: "Al-Mutaffifin",
  surahNameArabic: "المطففين",
  revelationType: "Makki",
  totalAyahs: 36,

  categories: {
    commercialFraud: {
      name: "Fraud in Commerce",
      nameArabic: "الغش في التجارة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَيْلٌ لِّلْمُطَفِّفِينَ", meaning: "Woe to defrauders", explanation: "Tatfif = giving less than due in measure", verseRef: "83:1" },
        { term: "اكْتَالُوا... يَسْتَوْفُونَ", meaning: "Take measure in full", explanation: "Demand complete amount for themselves", verseRef: "83:2" },
        { term: "كَالُوهُمْ... يُخْسِرُونَ", meaning: "Give less", explanation: "Cause others to lose in weights/measures", verseRef: "83:3" }
      ]
    },

    resurrectionAwareness: {
      name: "Resurrection Awareness",
      nameArabic: "الوعي بالبعث",
      color: '#3B82F6',
      icon: 'Eye',
      concepts: [
        { term: "أَلَا يَظُنُّ... مَّبْعُوثُونَ", meaning: "Don't they think they'll be raised?", explanation: "Cheating shows disbelief in accountability", verseRef: "83:4" },
        { term: "يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ", meaning: "Day people stand before Lord of worlds", explanation: "Universal standing for judgment", verseRef: "83:6" }
      ]
    },

    sijjin: {
      name: "Sijjin - Record of Wicked",
      nameArabic: "سجين",
      color: '#EF4444',
      icon: 'Book',
      concepts: [
        { term: "كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ", meaning: "Wicked's record in Sijjin", explanation: "From سِجن (prison) - lowest place", verseRef: "83:7" },
        { term: "كِتَابٌ مَّرْقُومٌ", meaning: "Inscribed record", explanation: "Permanently written - cannot be erased", verseRef: "83:9" }
      ]
    },

    characterOfWicked: {
      name: "Traits of the Wicked",
      nameArabic: "صفات الفجار",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "مُعْتَدٍ أَثِيمٍ", meaning: "Transgressor, sinful", explanation: "Only such people deny Judgment Day", verseRef: "83:12" },
        { term: "أَسَاطِيرُ الْأَوَّلِينَ", meaning: "Legends of ancients", explanation: "Dismisses revelation as myths", verseRef: "83:13" },
        { term: "رَانَ عَلَىٰ قُلُوبِهِم", meaning: "Rust covered hearts", explanation: "Sins accumulated like rust", verseRef: "83:14" },
        { term: "لَّمَحْجُوبُونَ", meaning: "Veiled from their Lord", explanation: "Worst punishment - separation from Allah", verseRef: "83:15" }
      ]
    },

    illiyyun: {
      name: "Illiyyun - Record of Righteous",
      nameArabic: "عليين",
      color: '#10B981',
      icon: 'Book',
      concepts: [
        { term: "كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ", meaning: "Righteous's record in Illiyyun", explanation: "From عُلُوّ (height) - highest place", verseRef: "83:18" },
        { term: "يَشْهَدُهُ الْمُقَرَّبُونَ", meaning: "Witnessed by those near", explanation: "Angels closest to Allah witness it", verseRef: "83:21" }
      ]
    },

    paradiseBliss: {
      name: "Paradise Delights",
      nameArabic: "نعيم الجنة",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "الْأَبْرَارَ لَفِي نَعِيمٍ", meaning: "Righteous in bliss", explanation: "Surrounded by blessings", verseRef: "83:22" },
        { term: "عَلَى الْأَرَائِكِ يَنظُرُونَ", meaning: "On couches observing", explanation: "Relaxed, watching Paradise delights", verseRef: "83:23" },
        { term: "نَضْرَةَ النَّعِيمِ", meaning: "Radiance of bliss", explanation: "Faces glowing with blessing", verseRef: "83:24" },
        { term: "رَّحِيقٍ مَّخْتُومٍ خِتَامُهُ مِسْكٌ", meaning: "Sealed wine, seal is musk", explanation: "Purest drink, fragrant seal", verseRef: "83:25-26" },
        { term: "تَسْنِيمٍ", meaning: "Tasnim spring", explanation: "Highest spring in Paradise", verseRef: "83:27" }
      ]
    },

    mockeryReversed: {
      name: "Tables Turned",
      nameArabic: "انقلاب السخرية",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "الَّذِينَ أَجْرَمُوا... يَضْحَكُونَ", meaning: "Criminals laughed at believers", explanation: "Mocked faith in dunya", verseRef: "83:29" },
        { term: "يَتَغَامَزُونَ", meaning: "Winked mockingly", explanation: "Mutual mocking gestures", verseRef: "83:30" },
        { term: "فَالْيَوْمَ الَّذِينَ آمَنُوا... يَضْحَكُونَ", meaning: "Today believers laugh", explanation: "Complete reversal - justice served", verseRef: "83:34" },
        { term: "هَلْ ثُوِّبَ الْكُفَّارُ", meaning: "Have disbelievers been repaid?", explanation: "Rhetorical - perfect recompense", verseRef: "83:36" }
      ]
    }
  },

  relationships: [
    { from: "مطففين", to: "لا يظنون مبعوثون", type: "causation", description: "Cheating stems from denying resurrection" },
    { from: "سجين", to: "عليين", type: "antithesis", description: "Lowest vs highest - opposite records" },
    { from: "ران على قلوبهم", to: "محجوبون", type: "consequence", description: "Heart-rust leads to veil from Allah" },
    { from: "يضحكون (v29)", to: "يضحكون (v34)", type: "reversal", description: "Who laughs changes on Judgment Day" },
    { from: "فليتنافس المتنافسون", to: "رحيق/تسنيم", type: "motivation", description: "These rewards worth competing for" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Warning to Cheaters", verses: "83:1-6", description: "Woe to defrauders who deny resurrection" },
      { stage: 2, theme: "Sijjin - Wicked's Record", verses: "83:7-17", description: "Record in lowest place, hearts rusted" },
      { stage: 3, theme: "Illiyyun - Righteous Record", verses: "83:18-21", description: "Record in highest place, witnessed by angels" },
      { stage: 4, theme: "Paradise Delights", verses: "83:22-28", description: "Bliss, couches, radiance, pure wine, Tasnim" },
      { stage: 5, theme: "Mockery Reversed", verses: "83:29-36", description: "Mockers mocked - believers laugh last" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Honest dealings", how: "Give full measure; resurrection is real", verse: "83:1-3" },
      { principle: "Guard your heart", how: "Sins accumulate like rust - keep heart clean", verse: "83:14" },
      { principle: "Compete for akhirah", how: "Race for Paradise rewards, not dunya", verse: "83:26" },
      { principle: "Endure mockery", how: "Believers get last laugh - patience pays", verse: "83:34" },
      { principle: "Don't be guardian over others", how: "Focus on your deeds, not judging others", verse: "83:33" }
    ]
  },

  uniqueInsight: {
    title: "From Tatfif to Ran - Spiritual Corrosion",
    insight: "The surah begins with a minor sin - tatfif (slight cheating in weights). But Allah connects this to denying resurrection (v4), which is connected to dismissing revelation as myths (v13), which is caused by 'ran' - rust on hearts (v14). The progression: small dishonesty → no fear of accountability → rejecting truth → spiritual corrosion → veiled from Allah (v15). The surah warns: tatfif isn't just commercial fraud - it's the beginning of spiritual death. Each small compromise adds rust to the heart until it can no longer recognize truth."
  },

  linguisticFeatures: {
    features: [
      { feature: "Form X يَسْتَوْفُونَ", example: "Demanding full for themselves", effect: "Intensified demand" },
      { feature: "Sijjin from سِجن", example: "Prison-record", effect: "Confined in lowest place" },
      { feature: "Form VI يَتَغَامَزُونَ", example: "Mutual mocking", effect: "Reciprocal action among mockers" }
    ]
  },

  comparisonTable: {
    title: "Sijjin vs Illiyyun",
    headers: ["Aspect", "Wicked (Sijjin)", "Righteous (Illiyyun)"],
    rows: [
      { aspect: "Location", wicked: "سِجِّين (lowest)", righteous: "عِلِّيِّين (highest)" },
      { aspect: "Record", wicked: "كِتَابٌ مَّرْقُومٌ", righteous: "كِتَابٌ مَّرْقُومٌ" },
      { aspect: "Witnesses", wicked: "N/A", righteous: "المُقَرَّبُونَ (angels)" },
      { aspect: "State", wicked: "مَحْجُوبُونَ (veiled)", righteous: "نَعِيمٍ (bliss)" },
      { aspect: "Final Scene", wicked: "Laughed at", righteous: "Laughing" }
    ]
  }
};

export default ONTOLOGY;
