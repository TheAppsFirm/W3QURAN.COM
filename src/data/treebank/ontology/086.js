/**
 * Surah At-Tariq (86) - Ontology of Quranic Concepts
 * The Night Comer / The Piercing Star
 * Theme: Cosmic oath, human creation, Quran's decisive word
 */

export const ONTOLOGY = {
  surahId: 86,
  surahName: "At-Tariq",
  surahNameArabic: "الطارق",
  revelationType: "Makki",
  totalAyahs: 17,

  categories: {
    cosmicOaths: {
      name: "The Cosmic Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "السَّمَاءِ وَالطَّارِقِ", meaning: "Sky and night-comer", explanation: "Sky swears by its visitor - the piercing star", verseRef: "86:1" },
        { term: "النَّجْمُ الثَّاقِبُ", meaning: "Piercing star", explanation: "Star that pierces darkness with light. Could be pulsars discovered in modern astronomy", verseRef: "86:3" }
      ]
    },

    divineWatch: {
      name: "Divine Guardianship",
      nameArabic: "الحفظ الإلهي",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "كُلُّ نَفْسٍ... حَافِظٌ", meaning: "Every soul has guardian", explanation: "Angels record every deed - nothing hidden from Allah", verseRef: "86:4" }
      ]
    },

    humanCreation: {
      name: "Human Origin",
      nameArabic: "خلق الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "مَاءٍ دَافِقٍ", meaning: "Ejected fluid", explanation: "Scientific description: forceful emission of reproductive fluid", verseRef: "86:6" },
        { term: "بَيْنِ الصُّلْبِ وَالتَّرَائِبِ", meaning: "Between backbone and ribs", explanation: "Embryological origin region of reproductive system", verseRef: "86:7" },
        { term: "عَلَىٰ رَجْعِهِ لَقَادِرٌ", meaning: "Able to return him", explanation: "Resurrection proof: He who created can recreate", verseRef: "86:8" }
      ]
    },

    judgmentDay: {
      name: "Day of Secrets",
      nameArabic: "يوم السرائر",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "تُبْلَى السَّرَائِرُ", meaning: "Secrets examined", explanation: "Hidden intentions exposed - no secrets survive Judgment", verseRef: "86:9" },
        { term: "مِن قُوَّةٍ وَلَا نَاصِرٍ", meaning: "No strength or helper", explanation: "Complete helplessness - no power or ally can save", verseRef: "86:10" }
      ]
    },

    naturalOaths: {
      name: "Sky and Earth Testimony",
      nameArabic: "شهادة السماء والأرض",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "السَّمَاءِ ذَاتِ الرَّجْعِ", meaning: "Sky of return", explanation: "Rain cycle: water returns from sky repeatedly", verseRef: "86:11" },
        { term: "الْأَرْضِ ذَاتِ الصَّدْعِ", meaning: "Earth of splitting", explanation: "Ground splits for plant growth - germination", verseRef: "86:12" }
      ]
    },

    quranNature: {
      name: "Nature of Quran",
      nameArabic: "طبيعة القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قَوْلٌ فَصْلٌ", meaning: "Decisive word", explanation: "Quran separates truth from falsehood conclusively", verseRef: "86:13" },
        { term: "وَمَا هُوَ بِالْهَزْلِ", meaning: "Not amusement", explanation: "Quran is serious divine communication, not entertainment", verseRef: "86:14" }
      ]
    },

    divineCounter: {
      name: "Allah's Counter-Plan",
      nameArabic: "كيد الله",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "يَكِيدُونَ كَيْدًا", meaning: "They plot a plot", explanation: "Enemies of truth scheme against revelation", verseRef: "86:15" },
        { term: "وَأَكِيدُ كَيْدًا", meaning: "I plan a plan", explanation: "Allah's perfect counter - human schemes fail", verseRef: "86:16" },
        { term: "أَمْهِلْهُمْ رُوَيْدًا", meaning: "Allow them respite briefly", explanation: "Just a little time - their end approaches", verseRef: "86:17" }
      ]
    }
  },

  relationships: [
    { from: "النجم الثاقب", to: "حافظ", type: "parallel", description: "Star watches from sky, angels watch souls" },
    { from: "ماء دافق", to: "رجعه", type: "implication", description: "Creation proves resurrection capability" },
    { from: "السرائر", to: "لا قوة ولا ناصر", type: "consequence", description: "Exposed secrets leave no defense" },
    { from: "الرجع", to: "الصدع", type: "parallel", description: "Sky returns rain, earth splits for growth" },
    { from: "كيدهم", to: "كيدي", type: "contrast", description: "Their plotting vs Allah's planning" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Oath", verses: "86:1-3", description: "Sky and piercing star witness" },
      { stage: 2, theme: "Soul Watched", verses: "86:4", description: "Every soul has guardian" },
      { stage: 3, theme: "Human Creation", verses: "86:5-8", description: "Created from fluid, can be resurrected" },
      { stage: 4, theme: "Judgment Reality", verses: "86:9-10", description: "Secrets exposed, no help" },
      { stage: 5, theme: "Natural Testimony", verses: "86:11-12", description: "Sky returns rain, earth splits" },
      { stage: 6, theme: "Quran's Authority", verses: "86:13-14", description: "Decisive, not amusement" },
      { stage: 7, theme: "Divine Victory", verses: "86:15-17", description: "Their plots fail, give respite briefly" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "You're being watched", how: "Angels record everything - live consciously", verse: "86:4" },
      { principle: "Reflect on origins", how: "Your humble beginning should humble you now", verse: "86:5-7" },
      { principle: "No hidden sins", how: "Secrets will be exposed - purify intentions now", verse: "86:9" },
      { principle: "Take Quran seriously", how: "Not entertainment - life-changing guidance", verse: "86:13-14" },
      { principle: "Trust Allah's plan", how: "Enemies plot but Allah's plan prevails", verse: "86:15-17" }
    ]
  },

  uniqueInsight: {
    title: "The Night Visitor and the Hidden Guardian",
    insight: "Surah At-Tariq opens with a mysterious 'night visitor' - a piercing star that appears when darkness falls. This cosmic visitor parallels the حافظ (guardian) over every soul. Just as the star pierces darkness to witness the night, the guardian angel witnesses what humans hide in the darkness of their souls. The surah's message: whether in cosmic expanse or intimate secrecy, nothing escapes observation. The star's 'piercing' (ثاقب) mirrors how secrets will be 'examined' (تُبلى) on Judgment Day - both involve penetrating what seems hidden."
  },

  scientificReferences: {
    notes: [
      { verse: "86:3", topic: "Piercing star", note: "May refer to pulsars - stars emitting piercing radiation beams" },
      { verse: "86:6-7", topic: "Embryology", note: "Describes reproductive fluid and embryological origin region" },
      { verse: "86:11", topic: "Water cycle", note: "Sky 'returns' (raj') rain - cyclical nature of precipitation" },
      { verse: "86:12", topic: "Plant growth", note: "Earth 'splits' (ṣad') for germination" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "Cognate accusative", example: "يَكِيدُونَ كَيْدًا / أَكِيدُ كَيْدًا", effect: "Emphasis on plotting" },
      { feature: "Diminutive رُوَيدًا", example: "From رَود", effect: "Just a little - belittles their remaining time" },
      { feature: "Active participle فَاعِل", example: "طارق، ثاقب، حافظ، دافق", effect: "Ongoing active states" }
    ]
  }
};

export default ONTOLOGY;
