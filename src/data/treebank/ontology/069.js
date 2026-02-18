/**
 * Surah Al-Haqqah (69) - Ontology of Quranic Concepts
 * The Inevitable Reality
 * Theme: Day of Judgment, destroyed nations, record books, Quran's divine origin
 */

export const ONTOLOGY = {
  surahId: 69,
  surahName: "Al-Haqqah",
  surahNameArabic: "الحاقة",
  revelationType: "Makki",
  totalAyahs: 52,

  categories: {
    namesOfJudgmentDay: {
      name: "Names of Judgment Day",
      nameArabic: "أسماء يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "الْحَاقَّةُ", meaning: "The Inevitable Reality", explanation: "That which must come true", verseRef: "69:1-3" },
        { term: "الْقَارِعَةِ", meaning: "The Striking Calamity", explanation: "Strikes hearts with terror", verseRef: "69:4" },
        { term: "الْوَاقِعَةُ", meaning: "The Occurrence", explanation: "That which occurs", verseRef: "69:15" }
      ]
    },

    destroyedNations: {
      name: "Destroyed Nations",
      nameArabic: "الأمم المهلكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ثَمُودُ", meaning: "Thamud", explanation: "Prophet Salih's people", verseRef: "69:4-5" },
        { term: "بِالطَّاغِيَةِ", meaning: "Overwhelming blast", explanation: "Destroyed by thunderous sound", verseRef: "69:5" },
        { term: "عَادٌ", meaning: "'Ad", explanation: "Prophet Hud's people", verseRef: "69:6-8" },
        { term: "بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ", meaning: "Screaming violent wind", explanation: "Destroyed by fierce wind", verseRef: "69:6" },
        { term: "سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا", meaning: "Seven nights and eight days", explanation: "Duration of destruction", verseRef: "69:7" },
        { term: "أَعْجَازُ نَخْلٍ خَاوِيَةٍ", meaning: "Hollow palm trunks", explanation: "Bodies like fallen trees", verseRef: "69:7" },
        { term: "فِرْعَوْنُ وَمَن قَبْلَهُ", meaning: "Pharaoh and those before", explanation: "Egyptian tyrant and predecessors", verseRef: "69:9" },
        { term: "الْمُؤْتَفِكَاتُ", meaning: "Overturned cities", explanation: "Cities of Lot's people", verseRef: "69:9" }
      ]
    },

    noahsFlood: {
      name: "Noah's Flood",
      nameArabic: "طوفان نوح",
      color: '#06B6D4',
      icon: 'Book',
      concepts: [
        { term: "لَمَّا طَغَى الْمَاءُ", meaning: "When water overflowed", explanation: "The Great Flood", verseRef: "69:11" },
        { term: "حَمَلْنَاكُمْ فِي الْجَارِيَةِ", meaning: "Carried you in the ship", explanation: "Ancestors saved on Ark", verseRef: "69:11" },
        { term: "تَذْكِرَةً", meaning: "A reminder", explanation: "Ark as lesson for humanity", verseRef: "69:12" },
        { term: "أُذُنٌ وَاعِيَةٌ", meaning: "Conscious ear", explanation: "Those who truly listen", verseRef: "69:12" }
      ]
    },

    cosmicEvents: {
      name: "Cosmic Events",
      nameArabic: "الأحداث الكونية",
      color: '#8B5CF6',
      icon: 'Globe',
      concepts: [
        { term: "نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَةٌ", meaning: "Horn blown with single blast", explanation: "One blow initiates resurrection", verseRef: "69:13" },
        { term: "حُمِلَتِ الْأَرْضُ وَالْجِبَالُ", meaning: "Earth and mountains lifted", explanation: "Cosmic upheaval", verseRef: "69:14" },
        { term: "فَدُكَّتَا دَكَّةً وَاحِدَةً", meaning: "Crushed with single blow", explanation: "Complete destruction", verseRef: "69:14" },
        { term: "وَانشَقَّتِ السَّمَاءُ فَهِيَ يَوْمَئِذٍ وَاهِيَةٌ", meaning: "Heaven splits, fragile that Day", explanation: "Sky breaks apart", verseRef: "69:16" },
        { term: "وَالْمَلَكُ عَلَىٰ أَرْجَائِهَا", meaning: "Angels at its edges", explanation: "Angels positioned around", verseRef: "69:17" },
        { term: "يَحْمِلُ عَرْشَ رَبِّكَ فَوْقَهُمْ ثَمَانِيَةٌ", meaning: "Eight carry Lord's Throne", explanation: "Eight angels bear Throne", verseRef: "69:17" }
      ]
    },

    accountAndExhibition: {
      name: "Account and Exhibition",
      nameArabic: "العرض والحساب",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "يَوْمَئِذٍ تُعْرَضُونَ", meaning: "That Day you will be exhibited", explanation: "All presented for judgment", verseRef: "69:18" },
        { term: "لَا تَخْفَىٰ مِنكُمْ خَافِيَةٌ", meaning: "No secret hidden", explanation: "Complete exposure", verseRef: "69:18" }
      ]
    },

    rightHandRecipients: {
      name: "Recipients of Right Hand",
      nameArabic: "أصحاب اليمين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "أُوتِيَ كِتَابَهُ بِيَمِينِهِ", meaning: "Given record in right hand", explanation: "Success indicator", verseRef: "69:19" },
        { term: "هَاؤُمُ اقْرَءُوا كِتَابِيَهْ", meaning: "Here, read my record!", explanation: "Joyful invitation", verseRef: "69:19" },
        { term: "ظَنَنتُ أَنِّي مُلَاقٍ حِسَابِيَهْ", meaning: "I knew I'd meet my account", explanation: "Belief in accountability", verseRef: "69:20" },
        { term: "عِيشَةٍ رَّاضِيَةٍ", meaning: "Pleasant life", explanation: "Satisfying existence", verseRef: "69:21" },
        { term: "جَنَّةٍ عَالِيَةٍ", meaning: "Elevated Garden", explanation: "High Paradise", verseRef: "69:22" },
        { term: "قُطُوفُهَا دَانِيَةٌ", meaning: "Fruits hanging near", explanation: "Easy access to fruits", verseRef: "69:23" }
      ]
    },

    leftHandRecipients: {
      name: "Recipients of Left Hand",
      nameArabic: "أصحاب الشمال",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أُوتِيَ كِتَابَهُ بِشِمَالِهِ", meaning: "Given record in left hand", explanation: "Failure indicator", verseRef: "69:25" },
        { term: "يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ", meaning: "I wish I hadn't received my record", explanation: "Regret over accountability", verseRef: "69:25" },
        { term: "وَلَمْ أَدْرِ مَا حِسَابِيَهْ", meaning: "I hadn't known my account", explanation: "Wish for ignorance", verseRef: "69:26" },
        { term: "يَا لَيْتَهَا كَانَتِ الْقَاضِيَةَ", meaning: "I wish it had been the end", explanation: "Wish death was final", verseRef: "69:27" },
        { term: "مَا أَغْنَىٰ عَنِّي مَالِيَهْ", meaning: "My wealth availed me nothing", explanation: "Useless riches", verseRef: "69:28" },
        { term: "هَلَكَ عَنِّي سُلْطَانِيَهْ", meaning: "Gone from me is my authority", explanation: "Lost power", verseRef: "69:29" }
      ]
    },

    hellPunishment: {
      name: "Hell's Punishment",
      nameArabic: "عذاب جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "خُذُوهُ فَغُلُّوهُ", meaning: "Seize him and shackle him", explanation: "Command to angels", verseRef: "69:30" },
        { term: "ثُمَّ الْجَحِيمَ صَلُّوهُ", meaning: "Then burn him in Hell", explanation: "Into Hellfire", verseRef: "69:31" },
        { term: "سِلْسِلَةٍ ذَرْعُهَا سَبْعُونَ ذِرَاعًا", meaning: "Chain of seventy cubits", explanation: "70 arm-lengths long", verseRef: "69:32" },
        { term: "لَا يُؤْمِنُ بِاللَّهِ الْعَظِيمِ", meaning: "Didn't believe in Allah", explanation: "Reason 1: Disbelief", verseRef: "69:33" },
        { term: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ", meaning: "Didn't encourage feeding poor", explanation: "Reason 2: Neglected poor", verseRef: "69:34" },
        { term: "غِسْلِين", meaning: "Foul pus/discharge", explanation: "Hell's only food", verseRef: "69:36" }
      ]
    },

    quransDivineOrigin: {
      name: "Quran's Divine Origin",
      nameArabic: "مصدر القرآن الإلهي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قَوْلُ رَسُولٍ كَرِيمٍ", meaning: "Word of noble Messenger", explanation: "Conveyed by Prophet ﷺ", verseRef: "69:40" },
        { term: "وَمَا هُوَ بِقَوْلِ شَاعِرٍ", meaning: "Not word of a poet", explanation: "Rejects poetry claim", verseRef: "69:41" },
        { term: "وَلَا بِقَوْلِ كَاهِنٍ", meaning: "Not word of a soothsayer", explanation: "Rejects divination claim", verseRef: "69:42" },
        { term: "تَنزِيلٌ مِّن رَّبِّ الْعَالَمِينَ", meaning: "Revelation from Lord of worlds", explanation: "Divine source confirmed", verseRef: "69:43" }
      ]
    },

    propheticAuthority: {
      name: "Prophetic Authority",
      nameArabic: "سلطة النبوة",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ", meaning: "If he fabricated sayings", explanation: "Hypothetical forgery", verseRef: "69:44" },
        { term: "لَأَخَذْنَا مِنْهُ بِالْيَمِينِ", meaning: "We would seize him by right hand", explanation: "Divine intervention", verseRef: "69:45" },
        { term: "لَقَطَعْنَا مِنْهُ الْوَتِينَ", meaning: "We would cut his aorta", explanation: "Instant death", verseRef: "69:46" },
        { term: "فَمَا مِنكُم مِّنْ أَحَدٍ عَنْهُ حَاجِزِينَ", meaning: "None could prevent Us", explanation: "No protection from Allah", verseRef: "69:47" }
      ]
    },

    quranAsCertainty: {
      name: "Quran as Certainty",
      nameArabic: "القرآن يقين",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "تَذْكِرَةٌ لِّلْمُتَّقِينَ", meaning: "Reminder for righteous", explanation: "Benefits the God-fearing", verseRef: "69:48" },
        { term: "مِنكُم مُّكَذِّبِينَ", meaning: "Among you deniers", explanation: "Allah knows rejectors", verseRef: "69:49" },
        { term: "لَحَسْرَةٌ عَلَى الْكَافِرِينَ", meaning: "Regret for disbelievers", explanation: "Quran will be their regret", verseRef: "69:50" },
        { term: "لَحَقُّ الْيَقِينِ", meaning: "The truth of certainty", explanation: "Absolute truth", verseRef: "69:51" }
      ]
    }
  },

  relationships: [
    { from: "الحاقة", to: "القارعة/الواقعة", type: "synonymy", description: "Different names for Day of Judgment" },
    { from: "ثمود", to: "الطاغية", type: "causation", description: "Thamud destroyed by overwhelming blast" },
    { from: "عاد", to: "ريح صرصر عاتية", type: "causation", description: "'Ad destroyed by screaming violent wind" },
    { from: "كتابه بيمينه", to: "عيشة راضية", type: "consequence", description: "Right hand record → pleasant life" },
    { from: "كتابه بشماله", to: "خذوه فغلوه", type: "consequence", description: "Left hand record → seized and shackled" },
    { from: "قول رسول كريم", to: "تنزيل من رب العالمين", type: "identity", description: "Noble Messenger's word = Divine revelation" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Inevitable", verses: "69:1-3", description: "Triple emphasis on al-Haqqah's reality" },
      { stage: 2, theme: "Past Destructions", verses: "69:4-12", description: "Thamud, 'Ad, Pharaoh, overturned cities, flood" },
      { stage: 3, theme: "Cosmic Events", verses: "69:13-18", description: "Horn blown, earth crushed, sky splits, exhibition" },
      { stage: 4, theme: "Right Hand Success", verses: "69:19-24", description: "Joyful record reading, Paradise" },
      { stage: 5, theme: "Left Hand Failure", verses: "69:25-37", description: "Regretful record, chains, Hell, pus" },
      { stage: 6, theme: "Quran's Truth", verses: "69:38-52", description: "Not poetry or divination; divine revelation; certainty" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Learn from destroyed nations", how: "They denied; we must accept truth", verse: "69:4-10" },
      { principle: "Have conscious ears", how: "Be an أذن واعية - truly listen to Quran", verse: "69:12" },
      { principle: "Believe in accountability", how: "Say like believers: ظننت أني ملاق حسابيه", verse: "69:20" },
      { principle: "Wealth won't help", how: "What good is money on Judgment Day?", verse: "69:28" },
      { principle: "Feed the poor", how: "Failure to encourage feeding is punished", verse: "69:34" },
      { principle: "Quran is certainty", how: "Not poetry or speculation - حق اليقين", verse: "69:51" }
    ]
  },

  uniqueInsight: {
    title: "The Three Levels of Certainty",
    insight: "Verse 51's 'حَقُّ الْيَقِينِ' (truth of certainty) represents the highest level of certainty in Islamic epistemology. Scholars identify three levels: (1) عِلْمُ الْيَقِين (knowledge of certainty) - like knowing fire burns from being told; (2) عَيْنُ الْيَقِين (eye of certainty) - like seeing fire; (3) حَقُّ الْيَقِين (truth of certainty) - like being burned by fire, experiencing reality directly. The Quran is described as حق اليقين because for those with insight, its truth is experienced reality, not mere information. This occurs in Surah Al-Waqi'ah too (56:95), framing the Quran's certainty at the highest possible level."
  },

  historicalContext: {
    note: "Revealed in Makkah when the Quraysh were dismissing the Quran as poetry or soothsaying. The surah powerfully refutes this by showing the Quran's consistency, its alignment with previous revelations' messages, and the severe consequences if the Prophet ﷺ had fabricated even one word. The هاء at the end of words (كِتَابِيَهْ، حِسَابِيَهْ، مَالِيَهْ، سُلْطَانِيَهْ) is a pause marker (هاء السكت) that adds solemnity."
  },

  linguisticFeatures: {
    features: [
      { feature: "الْحَاقَّة", example: "Active participle", effect: "That which makes truth manifest/inevitable" },
      { feature: "Triple opening", example: "الحاقة، ما الحاقة، وما أدراك", effect: "Rhetorical escalation of awe" },
      { feature: "صَرْصَر", example: "Intensified form", effect: "Reduplicated root = intense cold/sound" },
      { feature: "هاء السكت", example: "كتابيهْ، حسابيهْ", effect: "Pause marker adding solemnity" },
      { feature: "الْوَتِين", example: "Aorta", effect: "Rare anatomical term for life-artery" },
      { feature: "غِسْلِين", example: "Wound discharge", effect: "Uniquely graphic Hell-food description" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "69:46", topic: "Anatomy", note: "الْوَتِين (aorta) - cutting it causes instant death; anatomical precision" },
      { verse: "69:7", topic: "Duration", note: "7 nights + 8 days = scientific precision in describing 'Ad's destruction" }
    ]
  }
};

export default ONTOLOGY;
