/**
 * Surah Al-Inshiqaq (84) - Ontology of Quranic Concepts
 * The Splitting
 * Theme: Sky splits, earth flattened, records given, stages of existence
 */

export const ONTOLOGY = {
  surahId: 84,
  surahName: "Al-Inshiqaq",
  surahNameArabic: "الانشقاق",
  revelationType: "Makki",
  totalAyahs: 25,

  categories: {
    cosmicUpheaval: {
      name: "Cosmic Transformation",
      nameArabic: "التحول الكوني",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءُ انشَقَّتْ", meaning: "Sky splits apart", explanation: "Form VII - internal breaking, sky rips from within", verseRef: "84:1" },
        { term: "وَأَذِنَتْ لِرَبِّهَا", meaning: "Listens to its Lord", explanation: "Sky instantly obeys Allah's command", verseRef: "84:2" },
        { term: "الْأَرْضُ مُدَّتْ", meaning: "Earth stretched flat", explanation: "Mountains removed, valleys filled - level plain", verseRef: "84:3" },
        { term: "وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ", meaning: "Casts out and empties", explanation: "Earth disgorges dead, treasures - nothing hidden", verseRef: "84:4" }
      ]
    },

    humanJourney: {
      name: "Human Toiling",
      nameArabic: "كدح الإنسان",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا", meaning: "Toiling toward your Lord", explanation: "Life is hard labor, inevitable meeting with Allah", verseRef: "84:6" },
        { term: "فَمُلَاقِيهِ", meaning: "Then meeting Him", explanation: "No escape from the encounter - question is: how?", verseRef: "84:6" }
      ]
    },

    twoRecords: {
      name: "Two Groups Receiving Records",
      nameArabic: "فريقان والكتاب",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "كِتَابَهُ بِيَمِينِهِ", meaning: "Record in right hand", explanation: "Right hand = honor, success, blessing", verseRef: "84:7" },
        { term: "حِسَابًا يَسِيرًا", meaning: "Easy reckoning", explanation: "Quick presentation, no harsh interrogation", verseRef: "84:8" },
        { term: "يَنقَلِبُ... مَسْرُورًا", meaning: "Returns joyful", explanation: "Reunited with family in Paradise, overjoyed", verseRef: "84:9" },
        { term: "كِتَابَهُ وَرَاءَ ظَهْرِهِ", meaning: "Record behind back", explanation: "Shame, trying to hide exposed sins", verseRef: "84:10" },
        { term: "يَدْعُو ثُبُورًا", meaning: "Cries for destruction", explanation: "Wishes for annihilation - prefers non-existence", verseRef: "84:11" }
      ]
    },

    causeOfDoom: {
      name: "Cause of Their Doom",
      nameArabic: "سبب الهلاك",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "كَانَ فِي أَهْلِهِ مَسْرُورًا", meaning: "Was joyful among family", explanation: "Wrong joy - heedless pleasure in dunya", verseRef: "84:13" },
        { term: "ظَنَّ أَن لَّن يَحُورَ", meaning: "Thought he'd never return", explanation: "Denied resurrection - fatal miscalculation", verseRef: "84:14" },
        { term: "بَلَىٰ", meaning: "Yes indeed!", explanation: "Emphatic affirmation after negation", verseRef: "84:15" }
      ]
    },

    twilightOaths: {
      name: "Twilight Oaths",
      nameArabic: "قسم الغروب",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "بِالشَّفَقِ", meaning: "By the twilight", explanation: "Afterglow at sunset - transition time", verseRef: "84:16" },
        { term: "وَاللَّيْلِ وَمَا وَسَقَ", meaning: "Night and what it gathers", explanation: "Night envelops creatures to rest", verseRef: "84:17" },
        { term: "وَالْقَمَرِ إِذَا اتَّسَقَ", meaning: "Moon when full", explanation: "Moon reaches completion - cycles of change", verseRef: "84:18" }
      ]
    },

    stagesOfExistence: {
      name: "Life Stages",
      nameArabic: "أطوار الحياة",
      color: '#22C55E',
      icon: 'Compass',
      concepts: [
        { term: "لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ", meaning: "Stage after stage", explanation: "Womb → birth → childhood → youth → old age → death → barzakh → resurrection", verseRef: "84:19" }
      ]
    },

    rejecters: {
      name: "The Deniers",
      nameArabic: "المكذبون",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَا يُؤْمِنُونَ", meaning: "They don't believe", explanation: "Despite all signs, refuse to believe", verseRef: "84:20" },
        { term: "لَا يَسْجُدُونَ", meaning: "They don't prostrate", explanation: "Quran recited but no submission - arrogance", verseRef: "84:21" },
        { term: "يُكَذِّبُونَ", meaning: "They deny", explanation: "Active denial, not mere ignorance", verseRef: "84:22" }
      ]
    },

    finalDestinies: {
      name: "Final Outcomes",
      nameArabic: "المصير النهائي",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "بَشِّرْهُم بِعَذَابٍ أَلِيمٍ", meaning: "Give them 'tidings' of painful punishment", explanation: "Sarcastic بَشّر - usually positive word", verseRef: "84:24" },
        { term: "أَجْرٌ غَيْرُ مَمْنُونٍ", meaning: "Reward without end", explanation: "Believers: endless reward, no termination", verseRef: "84:25" }
      ]
    }
  },

  relationships: [
    { from: "انشقت", to: "أذنت لربها", type: "consequence", description: "Sky splits because it obeys" },
    { from: "كادح", to: "ملاقيه", type: "destination", description: "Toiling leads to meeting" },
    { from: "يمين", to: "وراء ظهر", type: "antithesis", description: "Right hand vs behind back" },
    { from: "مسرورا (v9)", to: "مسرورا (v13)", type: "contrast", description: "True joy vs false joy" },
    { from: "شفق/ليل/قمر", to: "طبقا عن طبق", type: "parallel", description: "Natural cycles mirror life stages" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Events", verses: "84:1-5", description: "Sky splits, earth flattens, both obey" },
      { stage: 2, theme: "Human Toiling", verses: "84:6", description: "Life is struggle toward Allah" },
      { stage: 3, theme: "Two Outcomes", verses: "84:7-15", description: "Right hand joy vs behind back doom" },
      { stage: 4, theme: "Nature's Oath", verses: "84:16-18", description: "Twilight, night, moon witness" },
      { stage: 5, theme: "Life Stages", verses: "84:19", description: "Moving through existence's levels" },
      { stage: 6, theme: "Deniers & Believers", verses: "84:20-25", description: "Denial punished, faith rewarded" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Life is toil", how: "Accept struggle as part of journey to Allah", verse: "84:6" },
      { principle: "Meeting is certain", how: "Prepare for the inevitable encounter", verse: "84:6" },
      { principle: "Record matters", how: "Build a record worthy of the right hand", verse: "84:7-9" },
      { principle: "Heedless joy is dangerous", how: "Joy disconnected from akhirah leads to doom", verse: "84:13-14" },
      { principle: "Prostrate to Quran", how: "Humble yourself when truth is recited", verse: "84:21" }
    ]
  },

  uniqueInsight: {
    title: "Two Kinds of Masrur (Joyful)",
    insight: "The surah uses 'masrūran' (joyful) twice with opposite meanings. In verse 9, the believer 'returns to his family joyful' - true joy in Paradise reunion. In verse 13, the disbeliever 'was among his family joyful' - false joy from heedlessness. Same word, opposite outcomes. The difference? Verse 14 explains: 'He thought he'd never return.' The disbeliever's joy was based on denial of meeting Allah. The believer's joy is the fruit of preparation for that meeting. The surah asks: which masrūr are you building toward?"
  },

  sajdahVerse: {
    verse: 21,
    note: "Prostration verse (sajdah tilawah) - marked with ۩. Reciter and listener should prostrate."
  },

  linguisticFeatures: {
    features: [
      { feature: "Form VII انشقّت", example: "Internal breaking", effect: "Sky splits from within, not by external force" },
      { feature: "Energetic nun", example: "لَتَرْكَبُنَّ", effect: "Emphatic certainty - you WILL move through stages" },
      { feature: "Sarcastic بَشِّر", example: "Give them 'good news' of punishment", effect: "Ironic reversal of joyful term" }
    ]
  }
};

export default ONTOLOGY;
