/**
 * Surah Al-Infitar (82) - Ontology of Quranic Concepts
 * The Cleaving
 * Theme: Cosmic collapse, man's ingratitude, deeds recorded, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 82,
  surahName: "Al-Infitar",
  surahNameArabic: "الانفطار",
  revelationType: "Makki",
  totalAyahs: 19,

  categories: {
    cosmicCollapse: {
      name: "Cosmic Collapse",
      nameArabic: "انهيار الكون",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءُ انفَطَرَتْ", meaning: "Sky is cleft", explanation: "Form VII - sky splits from within", verseRef: "82:1" },
        { term: "الْكَوَاكِبُ انتَثَرَتْ", meaning: "Stars scattered", explanation: "Like pearls from broken necklace", verseRef: "82:2" },
        { term: "الْبِحَارُ فُجِّرَتْ", meaning: "Seas burst forth", explanation: "Barriers removed, all water merges", verseRef: "82:3" },
        { term: "الْقُبُورُ بُعْثِرَتْ", meaning: "Graves overturned", explanation: "Dead emerge - resurrection begins", verseRef: "82:4" }
      ]
    },

    soulKnowledge: {
      name: "Soul's Knowledge",
      nameArabic: "علم النفس",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ", meaning: "Soul knows what it sent forth and held back", explanation: "Complete awareness of all deeds - good sent ahead, opportunities missed", verseRef: "82:5" }
      ]
    },

    humanIngratitude: {
      name: "Human Ingratitude",
      nameArabic: "جحود الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ", meaning: "What deceived you about your Generous Lord?", explanation: "Allah's generosity should inspire gratitude, not heedlessness", verseRef: "82:6" },
        { term: "خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ", meaning: "Created, proportioned, balanced you", explanation: "Three stages of perfect design", verseRef: "82:7" },
        { term: "فِي أَيِّ صُورَةٍ... رَكَّبَكَ", meaning: "In whatever form He assembled you", explanation: "Allah chose your specific form from infinite options", verseRef: "82:8" }
      ]
    },

    denialOfRecompense: {
      name: "Denial of Recompense",
      nameArabic: "تكذيب الدين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "تُكَذِّبُونَ بِالدِّينِ", meaning: "You deny the Recompense", explanation: "Din here = Judgment Day, not religion", verseRef: "82:9" }
      ]
    },

    nobleScribes: {
      name: "The Recording Angels",
      nameArabic: "الكرام الكاتبين",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "عَلَيْكُمْ لَحَافِظِينَ", meaning: "Over you are guardians", explanation: "Angels constantly watching", verseRef: "82:10" },
        { term: "كِرَامًا كَاتِبِينَ", meaning: "Noble, recording", explanation: "Honorable scribes, not mere clerks", verseRef: "82:11" },
        { term: "يَعْلَمُونَ مَا تَفْعَلُونَ", meaning: "They know what you do", explanation: "Nothing hidden from recording angels", verseRef: "82:12" }
      ]
    },

    twoDestinies: {
      name: "Two Final Destinations",
      nameArabic: "المصيران",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "الْأَبْرَارَ لَفِي نَعِيمٍ", meaning: "Righteous in bliss", explanation: "Paradise for the pious", verseRef: "82:13" },
        { term: "الْفُجَّارَ لَفِي جَحِيمٍ", meaning: "Wicked in Hellfire", explanation: "Permanent punishment", verseRef: "82:14" },
        { term: "مَا هُمْ عَنْهَا بِغَائِبِينَ", meaning: "Never absent from it", explanation: "No escape, no vacation from Fire", verseRef: "82:16" }
      ]
    },

    dayOfRecompense: {
      name: "Day of Recompense",
      nameArabic: "يوم الدين",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ", meaning: "What can make you know what is Day of Recompense?", explanation: "Beyond human comprehension", verseRef: "82:17-18" },
        { term: "لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا", meaning: "No soul helps another soul", explanation: "No intercession without permission", verseRef: "82:19" },
        { term: "وَالْأَمْرُ يَوْمَئِذٍ لِّلَّهِ", meaning: "Command that Day belongs to Allah", explanation: "Absolute divine sovereignty", verseRef: "82:19" }
      ]
    }
  },

  relationships: [
    { from: "انفطرت/انتثرت/فجرت/بعثرت", to: "علمت نفس", type: "trigger", description: "Cosmic collapse reveals soul's deeds" },
    { from: "الكريم", to: "غرك", type: "contrast", description: "Generosity met with deception/ingratitude" },
    { from: "خلق/سوى/عدل", to: "تكذبون", type: "irony", description: "Perfect creation yet you deny Creator" },
    { from: "كرام كاتبين", to: "يعلمون", type: "function", description: "Angels record everything" },
    { from: "أبرار", to: "فجار", type: "antithesis", description: "Righteous vs wicked - opposite outcomes" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Collapse", verses: "82:1-4", description: "Sky, stars, seas, graves - all transformed" },
      { stage: 2, theme: "Soul's Awareness", verses: "82:5", description: "Every soul knows its deeds" },
      { stage: 3, theme: "Human Ingratitude", verses: "82:6-9", description: "Why deceived about Generous Lord?" },
      { stage: 4, theme: "Recording Angels", verses: "82:10-12", description: "Noble scribes know all" },
      { stage: 5, theme: "Two Destinies", verses: "82:13-16", description: "Bliss vs Hellfire" },
      { stage: 6, theme: "Allah's Sovereignty", verses: "82:17-19", description: "Day when all command is Allah's" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Remember your creation", how: "You were designed perfectly - show gratitude", verse: "82:7-8" },
      { principle: "Don't be deceived", how: "Allah's patience isn't permission to sin", verse: "82:6" },
      { principle: "You're being watched", how: "Noble angels record everything", verse: "82:10-12" },
      { principle: "Send ahead good deeds", how: "What you 'send forth' will greet you", verse: "82:5" },
      { principle: "No one can help that Day", how: "Prepare yourself - no intercession guaranteed", verse: "82:19" }
    ]
  },

  uniqueInsight: {
    title: "The Question That Shakes: مَا غَرَّكَ",
    insight: "Verse 6 asks one of the Quran's most penetrating questions: 'What deceived you concerning your Generous Lord?' The word غَرَّ (gharr) means to be fooled, tricked, deluded. Allah mentions His كَرَم (generosity) specifically - the very quality that allows time for repentance becomes the excuse for ingratitude. It's as if Allah asks: 'I gave you time, health, provision, forgiveness - and you took this generosity as permission to forget Me?' The question remains unanswered because there IS no valid answer. Nothing justifies being deceived about Al-Karim."
  },

  linguisticFeatures: {
    features: [
      { feature: "Form VII انفطرت", example: "Internal splitting", effect: "Sky breaks from within" },
      { feature: "Repeated مَا أَدْرَاكَ", example: "Verses 17-18", effect: "Doubled for emphasis - incomprehensible" },
      { feature: "كِرَامًا كَاتِبِينَ", example: "Noble + recording", effect: "Angels are honorable, not mere recorders" }
    ]
  },

  comparisonWithSimilar: {
    note: "Compare with Surah 81 (At-Takwir) which also describes cosmic collapse. Al-Infitar focuses more on human accountability and recording angels."
  }
};

export default ONTOLOGY;
