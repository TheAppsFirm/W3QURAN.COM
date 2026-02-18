/**
 * Surah An-Nazi'at (79) - Ontology of Quranic Concepts
 * Those Who Pull Out
 * Theme: Angels, resurrection, Pharaoh's story, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 79,
  surahName: "An-Nazi'at",
  surahNameArabic: "النازعات",
  revelationType: "Makki",
  totalAyahs: 46,

  categories: {
    angelicOaths: {
      name: "Oaths by Angels",
      nameArabic: "القسم بالملائكة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "النَّازِعَاتِ غَرْقًا", meaning: "Those who extract violently", explanation: "Angels pulling disbelievers' souls forcefully", verseRef: "79:1" },
        { term: "النَّاشِطَاتِ نَشْطًا", meaning: "Those who release gently", explanation: "Angels taking believers' souls easily", verseRef: "79:2" },
        { term: "السَّابِحَاتِ سَبْحًا", meaning: "Those who glide", explanation: "Angels swimming through heavens", verseRef: "79:3" },
        { term: "السَّابِقَاتِ سَبْقًا", meaning: "Those who race", explanation: "Angels racing to execute commands", verseRef: "79:4" },
        { term: "الْمُدَبِّرَاتِ أَمْرًا", meaning: "Those who arrange affairs", explanation: "Angels managing cosmic operations", verseRef: "79:5" }
      ]
    },

    twoBlasts: {
      name: "The Two Trumpet Blasts",
      nameArabic: "النفختان",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "الرَّاجِفَةُ", meaning: "The quaking one", explanation: "First blast - earth shakes, all die", verseRef: "79:6" },
        { term: "الرَّادِفَةُ", meaning: "The subsequent one", explanation: "Second blast - resurrection follows", verseRef: "79:7" },
        { term: "قُلُوبٌ... وَاجِفَةٌ", meaning: "Hearts trembling", explanation: "Terror fills hearts on that Day", verseRef: "79:8" },
        { term: "أَبْصَارُهَا خَاشِعَةٌ", meaning: "Eyes humbled", explanation: "Lowered in fear and shame", verseRef: "79:9" }
      ]
    },

    deniersMockery: {
      name: "Deniers' Mockery",
      nameArabic: "سخرية المنكرين",
      color: '#EC4899',
      icon: 'MessageCircle',
      concepts: [
        { term: "لَمَرْدُودُونَ فِي الْحَافِرَةِ", meaning: "Returned to former state", explanation: "Deniers question resurrection", verseRef: "79:10" },
        { term: "عِظَامًا نَّخِرَةً", meaning: "Decayed bones", explanation: "How can crumbled bones return?", verseRef: "79:11" },
        { term: "كَرَّةٌ خَاسِرَةٌ", meaning: "Losing return", explanation: "Sarcastic dismissal of resurrection", verseRef: "79:12" }
      ]
    },

    resurrectionEase: {
      name: "Resurrection's Ease",
      nameArabic: "سهولة البعث",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "زَجْرَةٌ وَاحِدَةٌ", meaning: "Single shout", explanation: "Just one blast resurrects all - easy for Allah", verseRef: "79:13" },
        { term: "بِالسَّاهِرَةِ", meaning: "On earth's surface", explanation: "Suddenly standing on open ground", verseRef: "79:14" }
      ]
    },

    musaPharaoh: {
      name: "Musa and Pharaoh",
      nameArabic: "موسى وفرعون",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "بِالْوَادِ الْمُقَدَّسِ طُوًى", meaning: "Sacred valley of Tuwa", explanation: "Where Allah called Musa", verseRef: "79:16" },
        { term: "اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ", meaning: "Go to Pharaoh, he transgressed", explanation: "Mission to the tyrant", verseRef: "79:17" },
        { term: "هَل لَّكَ... تَزَكَّىٰ", meaning: "Would you purify yourself?", explanation: "Gentle invitation to guidance", verseRef: "79:18" },
        { term: "الْآيَةَ الْكُبْرَىٰ", meaning: "The greatest Sign", explanation: "Staff/hand - miraculous proofs", verseRef: "79:20" },
        { term: "أَنَا رَبُّكُمُ الْأَعْلَىٰ", meaning: "I am your supreme lord", explanation: "Pharaoh's ultimate blasphemy", verseRef: "79:24" },
        { term: "نَكَالَ الْآخِرَةِ وَالْأُولَىٰ", meaning: "Punishment of both worlds", explanation: "Drowning + hellfire", verseRef: "79:25" }
      ]
    },

    creationSigns: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ", meaning: "Are you harder to create or the sky?", explanation: "Sky's creation proves resurrection's ease", verseRef: "79:27" },
        { term: "رَفَعَ سَمْكَهَا فَسَوَّاهَا", meaning: "Raised its ceiling, proportioned it", explanation: "Sky's construction", verseRef: "79:28" },
        { term: "أَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا", meaning: "Darkened night, brought forth day", explanation: "Night/day cycle", verseRef: "79:29" },
        { term: "الْأَرْضَ... دَحَاهَا", meaning: "Earth He spread", explanation: "Earth spread (egg-like shape)", verseRef: "79:30" },
        { term: "الْجِبَالَ أَرْسَاهَا", meaning: "Mountains He anchored", explanation: "Mountains as stabilizers", verseRef: "79:32" }
      ]
    },

    overwhelmingDay: {
      name: "The Overwhelming Day",
      nameArabic: "الطامة الكبرى",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "الطَّامَّةُ الْكُبْرَىٰ", meaning: "The great Overwhelming", explanation: "Judgment Day overwhelming all", verseRef: "79:34" },
        { term: "يَتَذَكَّرُ الْإِنسَانُ مَا سَعَىٰ", meaning: "Man remembers his striving", explanation: "All efforts recalled", verseRef: "79:35" },
        { term: "بُرِّزَتِ الْجَحِيمُ", meaning: "Hell is displayed", explanation: "Hell made visible to all", verseRef: "79:36" }
      ]
    },

    twoDestinies: {
      name: "Two Destinies",
      nameArabic: "المصيران",
      color: '#10B981',
      icon: 'Scale',
      concepts: [
        { term: "مَن طَغَىٰ وَآثَرَ الْحَيَاةَ الدُّنْيَا", meaning: "Who transgressed and preferred dunya", explanation: "Transgressor's choice", verseRef: "79:37-38" },
        { term: "الْجَحِيمَ هِيَ الْمَأْوَىٰ", meaning: "Hell is the refuge", explanation: "Transgressor's destination", verseRef: "79:39" },
        { term: "خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ", meaning: "Feared standing before Lord, forbade soul from desires", explanation: "Key to salvation - controlling nafs", verseRef: "79:40" },
        { term: "الْجَنَّةَ هِيَ الْمَأْوَىٰ", meaning: "Paradise is the refuge", explanation: "Believer's destination", verseRef: "79:41" }
      ]
    },

    hourKnowledge: {
      name: "Knowledge of the Hour",
      nameArabic: "علم الساعة",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "يَسْأَلُونَكَ عَنِ السَّاعَةِ", meaning: "They ask about the Hour", explanation: "People questioning timing", verseRef: "79:42" },
        { term: "إِلَىٰ رَبِّكَ مُنتَهَاهَا", meaning: "To your Lord is its knowledge", explanation: "Only Allah knows timing", verseRef: "79:44" },
        { term: "مُنذِرُ مَن يَخْشَاهَا", meaning: "Warner to who fears it", explanation: "Prophet's role is warning", verseRef: "79:45" },
        { term: "لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً أَوْ ضُحَاهَا", meaning: "Stayed only an evening or morning", explanation: "Life feels incredibly short", verseRef: "79:46" }
      ]
    }
  },

  relationships: [
    { from: "النازعات/الناشطات", to: "الراجفة/الرادفة", type: "function", description: "Angels extract souls, then blasts resurrect" },
    { from: "فرعون طغى", to: "من طغى", type: "parallel", description: "Pharaoh's transgression mirrors all transgressors" },
    { from: "السماء بناها", to: "أشد خلقا", type: "proof", description: "Sky's creation proves resurrection's ease" },
    { from: "نهى النفس عن الهوى", to: "الجنة هي المأوى", type: "causation", description: "Controlling desires leads to Paradise" },
    { from: "الساعة", to: "عشية أو ضحاها", type: "perspective", description: "Life seems like hours when Hour comes" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Angelic Oaths", verses: "79:1-5", description: "Five types of angels sworn by" },
      { stage: 2, theme: "Two Blasts", verses: "79:6-14", description: "Quaking and resurrection" },
      { stage: 3, theme: "Musa & Pharaoh", verses: "79:15-26", description: "Warning through history" },
      { stage: 4, theme: "Creation Signs", verses: "79:27-33", description: "Sky, earth, mountains as proof" },
      { stage: 5, theme: "Two Destinies", verses: "79:34-41", description: "Transgressors vs those who fear" },
      { stage: 6, theme: "Hour's Mystery", verses: "79:42-46", description: "Only Allah knows; life feels short" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Accept gentle warnings", how: "Don't be like Pharaoh who rejected gentle invitation", verse: "79:18-19" },
      { principle: "Control your nafs", how: "Forbid soul from hawā (desires) - key to Paradise", verse: "79:40" },
      { principle: "Fear standing before Allah", how: "Imagine the maqām (standing) and let it guide behavior", verse: "79:40" },
      { principle: "Don't prefer dunya", how: "Those who chose worldly life over akhirah lost both", verse: "79:38" },
      { principle: "Life is short", how: "Will feel like evening/morning - don't waste it", verse: "79:46" }
    ]
  },

  uniqueInsight: {
    title: "The Key Formula: Khawf + Nahy al-Nafs",
    insight: "Verse 40 provides the surah's central formula for salvation: 'feared standing before his Lord AND forbade the soul from desires.' Both elements are essential - fear (khawf) without action is incomplete; restraining desires (nahy al-nafs ʿan al-hawā) is the action. This contrasts with verse 38's transgressors who 'preferred worldly life' - they followed hawā instead of forbidding it. The surah presents Pharaoh as the ultimate example: given gentle invitation to purify (tazakkā - v18), shown the greatest sign (v20), yet he chose transgression (ṭughyān) and preferred his desires. The same choice faces everyone."
  },

  linguisticFeatures: {
    features: [
      { feature: "Five feminine plurals فَاعِلات", example: "النازعات، الناشطات، السابحات، السابقات، المدبرات", effect: "Powerful rhythmic opening" },
      { feature: "Rare أَغْطَشَ", example: "Darkened", effect: "Unusual word for making night dark" },
      { feature: "دَحَاهَا", example: "Spread it", effect: "Egg-like spreading of earth" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "79:30", topic: "Earth's shape", note: "دَحَاهَا - dahw is spreading in egg/oval shape" },
      { verse: "79:32", topic: "Mountains", note: "أَرْسَاهَا - anchoring like pegs stabilizing earth" }
    ]
  }
};

export default ONTOLOGY;
