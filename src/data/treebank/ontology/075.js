/**
 * Surah Al-Qiyamah (75) - Ontology of Quranic Concepts
 * The Resurrection
 * Theme: Day of Judgment certainty, self-reproaching soul, death scene, resurrection proof
 */

export const ONTOLOGY = {
  surahId: 75,
  surahName: "Al-Qiyamah",
  surahNameArabic: "القيامة",
  revelationType: "Makki",
  totalAyahs: 40,

  categories: {
    divineOaths: {
      name: "Divine Oaths",
      nameArabic: "القسم الإلهي",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ", meaning: "I swear by Day of Resurrection", explanation: "Emphatic oath (لا here is emphasis, not negation)", verseRef: "75:1" },
        { term: "النَّفْسِ اللَّوَّامَةِ", meaning: "Self-reproaching soul", explanation: "Conscience that blames itself for sins", verseRef: "75:2" }
      ]
    },

    resurrectionProof: {
      name: "Proof of Resurrection",
      nameArabic: "برهان البعث",
      color: '#3B82F6',
      icon: 'Globe',
      concepts: [
        { term: "أَلَّن نَّجْمَعَ عِظَامَهُ", meaning: "We cannot assemble his bones?", explanation: "Deniers doubt bodily resurrection", verseRef: "75:3" },
        { term: "قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ", meaning: "Able to restore his fingertips", explanation: "Even unique fingerprints can be recreated", verseRef: "75:4" },
        { term: "أَن يُتْرَكَ سُدًى", meaning: "Left neglected?", explanation: "Man not created purposeless", verseRef: "75:36" },
        { term: "نُطْفَةً... عَلَقَةً... فَخَلَقَ فَسَوَّىٰ", meaning: "Drop → clot → created → proportioned", explanation: "First creation proves ability to recreate", verseRef: "75:37-38" },
        { term: "أَلَيْسَ ذَٰلِكَ بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ", meaning: "Is He not able to give life to the dead?", explanation: "Final rhetorical proof - who created can recreate", verseRef: "75:40" }
      ]
    },

    humanDefiance: {
      name: "Human Defiance",
      nameArabic: "عناد الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "يُرِيدُ لِيَفْجُرَ أَمَامَهُ", meaning: "Desires to sin in his future", explanation: "Denies resurrection to continue sinning", verseRef: "75:5" },
        { term: "أَيَّانَ يَوْمُ الْقِيَامَةِ", meaning: "When is Day of Resurrection?", explanation: "Mocking question", verseRef: "75:6" },
        { term: "تُحِبُّونَ الْعَاجِلَةَ", meaning: "You love the immediate", explanation: "Worldly attachment", verseRef: "75:20" },
        { term: "تَذَرُونَ الْآخِرَةَ", meaning: "Leave the Hereafter", explanation: "Neglecting eternal", verseRef: "75:21" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs of Resurrection",
      nameArabic: "علامات كونية للقيامة",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "بَرِقَ الْبَصَرُ", meaning: "Sight is dazzled", explanation: "Eyes stunned by events", verseRef: "75:7" },
        { term: "خَسَفَ الْقَمَرُ", meaning: "Moon is eclipsed", explanation: "Lunar eclipse at end times", verseRef: "75:8" },
        { term: "جُمِعَ الشَّمْسُ وَالْقَمَرُ", meaning: "Sun and moon joined", explanation: "Both sources of light merge/extinguish", verseRef: "75:9" },
        { term: "أَيْنَ الْمَفَرُّ", meaning: "Where is the escape?", explanation: "Desperate search for refuge", verseRef: "75:10" }
      ]
    },

    noEscape: {
      name: "No Escape",
      nameArabic: "لا مفر",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "كَلَّا لَا وَزَرَ", meaning: "No! No refuge", explanation: "No protection available", verseRef: "75:11" },
        { term: "إِلَىٰ رَبِّكَ... الْمُسْتَقَرُّ", meaning: "To your Lord is the settlement", explanation: "Final destination with Allah", verseRef: "75:12" }
      ]
    },

    selfWitness: {
      name: "Self as Witness",
      nameArabic: "الإنسان شاهد على نفسه",
      color: '#06B6D4',
      icon: 'Eye',
      concepts: [
        { term: "يُنَبَّأُ... بِمَا قَدَّمَ وَأَخَّرَ", meaning: "Informed of what sent forth and left behind", explanation: "All deeds revealed", verseRef: "75:13" },
        { term: "الْإِنسَانُ عَلَىٰ نَفْسِهِ بَصِيرَةٌ", meaning: "Man is witness against himself", explanation: "Self-awareness of one's own sins", verseRef: "75:14" },
        { term: "وَلَوْ أَلْقَىٰ مَعَاذِيرَهُ", meaning: "Even if he presents excuses", explanation: "Excuses won't help - he knows truth", verseRef: "75:15" }
      ]
    },

    quranRevelation: {
      name: "Quran Revelation",
      nameArabic: "نزول القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "لَا تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ", meaning: "Don't move tongue to hasten it", explanation: "Prophet shouldn't rush to memorize", verseRef: "75:16" },
        { term: "إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ", meaning: "Upon Us is its collection and recitation", explanation: "Allah guarantees Quran's preservation", verseRef: "75:17" },
        { term: "فَاتَّبِعْ قُرْآنَهُ", meaning: "Then follow its recitation", explanation: "Listen to Jibreel, then follow", verseRef: "75:18" },
        { term: "عَلَيْنَا بَيَانَهُ", meaning: "Upon Us is its explanation", explanation: "Allah explains its meanings", verseRef: "75:19" }
      ]
    },

    twoFaces: {
      name: "Two Types of Faces",
      nameArabic: "نوعان من الوجوه",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ", meaning: "Some faces that Day radiant", explanation: "Believers' faces glowing", verseRef: "75:22" },
        { term: "إِلَىٰ رَبِّهَا نَاظِرَةٌ", meaning: "Looking at their Lord", explanation: "Believers see Allah - greatest reward", verseRef: "75:23" },
        { term: "وُجُوهٌ... بَاسِرَةٌ", meaning: "Some faces contorted", explanation: "Disbelievers' despair visible", verseRef: "75:24" },
        { term: "فَاقِرَةٌ", meaning: "Back-breaking calamity", explanation: "Expecting punishment", verseRef: "75:25" }
      ]
    },

    deathScene: {
      name: "The Death Scene",
      nameArabic: "مشهد الموت",
      color: '#EC4899',
      icon: 'Heart',
      concepts: [
        { term: "إِذَا بَلَغَتِ التَّرَاقِيَ", meaning: "When it reaches the collarbones", explanation: "Soul rising to throat", verseRef: "75:26" },
        { term: "وَقِيلَ مَنْ رَاقٍ", meaning: "Who is a healer?", explanation: "Desperate search for help", verseRef: "75:27" },
        { term: "وَظَنَّ أَنَّهُ الْفِرَاقُ", meaning: "Certain it is the parting", explanation: "Knowing death has arrived", verseRef: "75:28" },
        { term: "وَالْتَفَّتِ السَّاقُ بِالسَّاقِ", meaning: "Leg wound with leg", explanation: "Death throes - legs intertwined", verseRef: "75:29" },
        { term: "إِلَىٰ رَبِّكَ... الْمَسَاقُ", meaning: "To your Lord is the driving", explanation: "Soul driven to Allah", verseRef: "75:30" }
      ]
    },

    disbelieverProfile: {
      name: "Profile of Disbeliever",
      nameArabic: "صورة الكافر",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَلَا صَدَّقَ وَلَا صَلَّىٰ", meaning: "He neither believed nor prayed", explanation: "No faith, no worship", verseRef: "75:31" },
        { term: "وَلَـٰكِن كَذَّبَ وَتَوَلَّىٰ", meaning: "But he denied and turned away", explanation: "Active rejection", verseRef: "75:32" },
        { term: "ذَهَبَ إِلَىٰ أَهْلِهِ يَتَمَطَّىٰ", meaning: "Went to his people strutting", explanation: "Arrogant swagger", verseRef: "75:33" },
        { term: "أَوْلَىٰ لَكَ فَأَوْلَىٰ", meaning: "Woe to you, and woe", explanation: "Four-fold warning", verseRef: "75:34-35" }
      ]
    }
  },

  relationships: [
    { from: "النفس اللوامة", to: "الإنسان على نفسه بصيرة", type: "identity", description: "Self-reproaching soul = witness against self" },
    { from: "نسوي بنانه", to: "أليس بقادر أن يحيي الموتى", type: "proof", description: "Fingerprint recreation → resurrection ability" },
    { from: "تحبون العاجلة", to: "يريد ليفجر أمامه", type: "consequence", description: "Loving dunya leads to continuous sinning" },
    { from: "بلغت التراقي", to: "إلى ربك المساق", type: "sequence", description: "Death process → driven to Allah" },
    { from: "لا صدق ولا صلى", to: "كذب وتولى", type: "parallel", description: "Neither believed/prayed + denied/turned away" },
    { from: "وجوه ناضرة", to: "وجوه باسرة", type: "contrast", description: "Radiant believers vs. contorted disbelievers" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Double Oath", verses: "75:1-2", description: "Oath by Resurrection and self-reproaching soul" },
      { stage: 2, theme: "Resurrection Proof", verses: "75:3-6", description: "Can reassemble bones, even fingertips; man denies to sin" },
      { stage: 3, theme: "Cosmic Events", verses: "75:7-12", description: "Eyes dazzled, moon eclipsed, sun-moon joined, no escape" },
      { stage: 4, theme: "Self-Witness", verses: "75:13-15", description: "Man is witness against himself despite excuses" },
      { stage: 5, theme: "Quran Preservation", verses: "75:16-19", description: "Allah preserves, collects, explains Quran" },
      { stage: 6, theme: "Two Faces", verses: "75:20-25", description: "Radiant faces see Lord; contorted faces await calamity" },
      { stage: 7, theme: "Death Scene", verses: "75:26-35", description: "Soul reaching throat, death throes, disbeliever's profile" },
      { stage: 8, theme: "Final Proof", verses: "75:36-40", description: "Not created neglected; creation proves resurrection" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Develop lawwamah", how: "Let your soul reproach you when you sin - build conscience", verse: "75:2" },
      { principle: "Believe in accountability", how: "You're a witness against yourself - live knowing this", verse: "75:14" },
      { principle: "Don't love dunya excessively", how: "Love of immediate makes you neglect eternal", verse: "75:20-21" },
      { principle: "Prepare for death", how: "It will come - soul will reach throat - prepare now", verse: "75:26-30" },
      { principle: "Believe AND pray", how: "Both tasdeeq and salah required - not one without other", verse: "75:31" }
    ]
  },

  uniqueInsight: {
    title: "The Fingerprint Miracle",
    insight: "Verse 4's 'بَنَانَهُ' (fingertips) contains remarkable precision. Arabs of 7th century couldn't know that fingerprints are unique to each person - this wasn't scientifically established until 1880s by Henry Faulds. Yet the Quran specifically mentions Allah's ability to recreate even the fingertips - the most individually unique part of human anatomy. Allah doesn't say 'hands' or 'body' but specifically 'banānahu' (his fingertips). The message: even the most minute, unique details will be perfectly recreated in resurrection. This addresses the core doubt of deniers: 'How can scattered bones be reassembled?' Answer: Not only bones, but even unique fingerprints will be restored."
  },

  linguisticFeatures: {
    features: [
      { feature: "لَا emphatic", example: "لَا أُقْسِمُ = I DO swear (not 'I don't swear')", effect: "Intensifies oath" },
      { feature: "بَنَان", example: "Fingertips specifically", effect: "Precision in resurrection claim" },
      { feature: "التَّرَاقِي", example: "Collarbones", effect: "Anatomical precision in death scene" },
      { feature: "Four-fold أَوْلَى", example: "75:34-35", effect: "Intensified warning through repetition" },
      { feature: "بَصِيرَة feminine", example: "Man is بَصِيرَة against himself", effect: "Man as proof/witness (not just seeing)" }
    ]
  },

  theologicalSignificance: {
    visionOfAllah: {
      verse: "75:23",
      text: "إِلَىٰ رَبِّهَا نَاظِرَةٌ",
      significance: "Major proof that believers will see Allah in Paradise - ru'yatullah"
    }
  },

  scientificReferences: {
    notes: [
      { verse: "75:4", topic: "Fingerprints", note: "بَنَان - fingertips are unique to each person; scientific discovery in 1880s" },
      { verse: "75:37-38", topic: "Embryology", note: "نُطْفَة → عَلَقَة - stages of human development accurately described" }
    ]
  }
};

export default ONTOLOGY;
