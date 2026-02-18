/**
 * Surah Al-A'la (87) - Ontology of Quranic Concepts
 * The Most High
 * Theme: Glorification of Allah, divine guidance, success through purification
 */

export const ONTOLOGY = {
  surahId: 87,
  surahName: "Al-A'la",
  surahNameArabic: "الأعلى",
  revelationType: "Makki",
  totalAyahs: 19,

  categories: {
    glorification: {
      name: "Glorifying the Most High",
      nameArabic: "تسبيح الأعلى",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى", meaning: "Glorify name of your Lord Most High", explanation: "Opening command - tasbih connects to Allah's supreme transcendence", verseRef: "87:1" },
        { term: "الْأَعْلَى", meaning: "The Most High", explanation: "Superlative: nothing above Allah in any sense - rank, power, knowledge", verseRef: "87:1" }
      ]
    },

    divineAttributes: {
      name: "Divine Acts",
      nameArabic: "أفعال الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "خَلَقَ فَسَوَّىٰ", meaning: "Created then proportioned", explanation: "Creation with perfection - not random, precisely designed", verseRef: "87:2" },
        { term: "قَدَّرَ فَهَدَىٰ", meaning: "Destined then guided", explanation: "Determines purpose, then provides guidance to fulfill it", verseRef: "87:3" },
        { term: "أَخْرَجَ الْمَرْعَىٰ", meaning: "Brought forth pasture", explanation: "Sustenance provision - from earth comes life", verseRef: "87:4" },
        { term: "فَجَعَلَهُ غُثَاءً أَحْوَىٰ", meaning: "Made it dry debris", explanation: "Cycle of life: green → dead. Reminder of transience", verseRef: "87:5" }
      ]
    },

    divinePromise: {
      name: "Promise to the Prophet",
      nameArabic: "الوعد للنبي",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "سَنُقْرِئُكَ فَلَا تَنسَىٰ", meaning: "We will make you recite, you won't forget", explanation: "Divine guarantee of Quran preservation in Prophet's heart", verseRef: "87:6" },
        { term: "وَنُيَسِّرُكَ لِلْيُسْرَىٰ", meaning: "We will ease you toward ease", explanation: "Allah's path is facilitated, not burden. Islam = ease", verseRef: "87:8" }
      ]
    },

    theReminder: {
      name: "The Reminder",
      nameArabic: "التذكرة",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ", meaning: "Remind if reminder benefits", explanation: "Prophet's duty is reminding - results are Allah's domain", verseRef: "87:9" },
        { term: "سَيَذَّكَّرُ مَن يَخْشَىٰ", meaning: "Who fears will remember", explanation: "Khashyah (reverential fear) opens heart to reminder", verseRef: "87:10" },
        { term: "وَيَتَجَنَّبُهَا الْأَشْقَى", meaning: "Most wretched avoids it", explanation: "Ultimate wretchedness: running from what saves you", verseRef: "87:11" }
      ]
    },

    twoDestinies: {
      name: "Two Destinies",
      nameArabic: "المصيران",
      color: '#EF4444',
      icon: 'Compass',
      concepts: [
        { term: "النَّارَ الْكُبْرَىٰ", meaning: "The greatest Fire", explanation: "Maximum Fire for maximum rejection", verseRef: "87:12" },
        { term: "لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ", meaning: "Neither dies nor lives", explanation: "State between death and life - no escape either way", verseRef: "87:13" },
        { term: "قَدْ أَفْلَحَ مَن تَزَكَّىٰ", meaning: "Succeeded who purifies", explanation: "Falah (success) through tazkiyah (purification)", verseRef: "87:14" }
      ]
    },

    purificationPath: {
      name: "Path of Success",
      nameArabic: "طريق الفلاح",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "تَزَكَّىٰ", meaning: "Purifies himself", explanation: "Tazkiyah = purifying soul from spiritual diseases", verseRef: "87:14" },
        { term: "وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّىٰ", meaning: "Remembers Lord's name, prays", explanation: "Dhikr leads to salah - remembrance manifests in action", verseRef: "87:15" }
      ]
    },

    worldlyVsEternal: {
      name: "Worldly vs Eternal",
      nameArabic: "الدنيا والآخرة",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا", meaning: "You prefer worldly life", explanation: "Human tendency - choosing immediate over eternal", verseRef: "87:16" },
        { term: "وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ", meaning: "Hereafter better, more lasting", explanation: "Two advantages: superior quality AND eternal duration", verseRef: "87:17" }
      ]
    },

    ancientScriptures: {
      name: "Earlier Scriptures",
      nameArabic: "الصحف الأولى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "الصُّحُفِ الْأُولَىٰ", meaning: "Former scriptures", explanation: "Quran's message echoes all divine revelation", verseRef: "87:18" },
        { term: "صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ", meaning: "Scriptures of Ibrahim and Musa", explanation: "Connects to Abrahamic monotheistic tradition", verseRef: "87:19" }
      ]
    }
  },

  relationships: [
    { from: "سبّح", to: "الأعلى", type: "object", description: "Glorification directed to Most High" },
    { from: "خلق فسوى", to: "قدر فهدى", type: "sequence", description: "Creation → Destiny → Guidance flow" },
    { from: "الذكرى", to: "من يخشى", type: "reception", description: "Reminder received by fearers" },
    { from: "تزكى", to: "أفلح", type: "causation", description: "Purification causes success" },
    { from: "الدنيا", to: "الآخرة", type: "antithesis", description: "Worldly vs eternal - wrong choice" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Glorification Command", verses: "87:1", description: "Glorify the Most High" },
      { stage: 2, theme: "Divine Attributes", verses: "87:2-5", description: "Creator, Designer, Sustainer" },
      { stage: 3, theme: "Prophet's Mission", verses: "87:6-9", description: "Quran preserved, ease granted, reminder commanded" },
      { stage: 4, theme: "Two Responses", verses: "87:10-13", description: "Fearers remember, wretched avoid, Fire awaits" },
      { stage: 5, theme: "Path to Success", verses: "87:14-15", description: "Purification + remembrance + prayer" },
      { stage: 6, theme: "Priority Check", verses: "87:16-17", description: "You prefer dunya, but akhirah is better" },
      { stage: 7, theme: "Ancient Confirmation", verses: "87:18-19", description: "Same message in Ibrahim and Musa's scriptures" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Begin with tasbih", how: "Start prayers, days, deeds with glorifying Allah's transcendence", verse: "87:1" },
      { principle: "Trust Allah's design", how: "He created, proportioned, destined, and guided - trust the plan", verse: "87:2-3" },
      { principle: "Focus on reminding", how: "Your job is to remind; results belong to Allah", verse: "87:9" },
      { principle: "Purify to succeed", how: "Tazkiyah (soul-cleansing) is prerequisite for falah (success)", verse: "87:14" },
      { principle: "Prioritize akhirah", how: "Consciously choose eternal over temporary in decisions", verse: "87:16-17" }
    ]
  },

  uniqueInsight: {
    title: "The Tasbih-Tazkiyah Connection",
    insight: "Surah Al-A'la begins with 'Sabbih' (glorify) and its success condition is 'tazakkā' (purify). These are connected: glorification of Allah externally leads to purification internally. When you truly recognize Allah as 'Al-A'la' (Most High), your soul naturally purifies - pride diminishes, worldly attachments loosen. The surah's progression (glorify → remember → purify → succeed) is a spiritual algorithm. Prophet ﷺ loved this surah in Eid prayers because it encapsulates the entire spiritual journey in 19 verses."
  },

  sunnah: {
    note: "Prophet ﷺ regularly recited Al-A'la in Witr prayer and Eid prayers (paired with Al-Ghashiyah). It's one of the most beloved surahs for night prayers."
  },

  linguisticFeatures: {
    features: [
      { feature: "فَ sequence", example: "خَلَقَ فَسَوَّىٰ، قَدَّرَ فَهَدَىٰ", effect: "Immediate divine action - no gap between creation and perfection" },
      { feature: "Superlative form", example: "الْأَعْلَى، الْأَشْقَى، الْكُبْرَىٰ", effect: "Extremes emphasized: Highest Lord, most wretched, greatest Fire" },
      { feature: "Same root repetition", example: "يُسر → اليُسرى", effect: "Allah eases toward ease - concept doubled" }
    ]
  }
};

export default ONTOLOGY;
