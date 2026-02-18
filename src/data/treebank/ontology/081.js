/**
 * Surah At-Takwir (81) - Ontology of Quranic Concepts
 * The Folding / The Overthrowing
 * Theme: Day of Judgment signs, honoring the Messenger, Quran's authority
 */

export const ONTOLOGY = {
  surahId: 81,
  surahName: "At-Takwir",
  surahNameArabic: "التكوير",
  revelationType: "Makki",
  totalAyahs: 29,

  categories: {
    cosmicSigns: {
      name: "Cosmic Signs of Judgment",
      nameArabic: "علامات القيامة الكونية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "الشَّمْسُ كُوِّرَتْ", meaning: "Sun wrapped up", explanation: "Takwir = folding like turban - light extinguished", verseRef: "81:1" },
        { term: "النُّجُومُ انكَدَرَتْ", meaning: "Stars fall/darken", explanation: "Lose light and fall from orbits", verseRef: "81:2" },
        { term: "الْجِبَالُ سُيِّرَتْ", meaning: "Mountains moved", explanation: "Set in motion, become dust", verseRef: "81:3" },
        { term: "الْعِشَارُ عُطِّلَتْ", meaning: "Pregnant camels neglected", explanation: "Most prized possession abandoned", verseRef: "81:4" },
        { term: "الْوُحُوشُ حُشِرَتْ", meaning: "Wild beasts gathered", explanation: "Animals assembled for justice", verseRef: "81:5" },
        { term: "الْبِحَارُ سُجِّرَتْ", meaning: "Seas set ablaze", explanation: "Oceans ignited or overflowed", verseRef: "81:6" }
      ]
    },

    humanEvents: {
      name: "Human Events on That Day",
      nameArabic: "أحداث البشر يومئذ",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "النُّفُوسُ زُوِّجَتْ", meaning: "Souls paired", explanation: "Reunited with bodies or grouped by type", verseRef: "81:7" },
        { term: "الْمَوْءُودَةُ سُئِلَتْ", meaning: "Buried girl asked", explanation: "Infanticide victim questioned - murderer exposed", verseRef: "81:8-9" },
        { term: "الصُّحُفُ نُشِرَتْ", meaning: "Records spread open", explanation: "Deed scrolls opened for reading", verseRef: "81:10" }
      ]
    },

    finalRealities: {
      name: "Final Realities",
      nameArabic: "الحقائق الأخيرة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "السَّمَاءُ كُشِطَتْ", meaning: "Sky stripped away", explanation: "Like skin peeled off - completely removed", verseRef: "81:11" },
        { term: "الْجَحِيمُ سُعِّرَتْ", meaning: "Hell set ablaze", explanation: "Fire intensified for punishing", verseRef: "81:12" },
        { term: "الْجَنَّةُ أُزْلِفَتْ", meaning: "Paradise brought near", explanation: "Approaches its dwellers - welcoming", verseRef: "81:13" },
        { term: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ", meaning: "Soul knows what it brought", explanation: "Answer to all 12 'when' clauses", verseRef: "81:14" }
      ]
    },

    cosmicOaths: {
      name: "Oaths on Celestial Bodies",
      nameArabic: "القسم بالكواكب",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "الْخُنَّسِ الْجَوَارِ الْكُنَّسِ", meaning: "Retreating, running, disappearing stars", explanation: "Planets in retrograde motion or stars at dawn", verseRef: "81:15-16" },
        { term: "اللَّيْلِ إِذَا عَسْعَسَ", meaning: "Night when it departs/arrives", explanation: "Rare word for night's transition", verseRef: "81:17" },
        { term: "الصُّبْحِ إِذَا تَنَفَّسَ", meaning: "Dawn when it breathes", explanation: "Light 'breathes' into darkness - poetic", verseRef: "81:18" }
      ]
    },

    jibreelDescription: {
      name: "Jibreel's Noble Attributes",
      nameArabic: "صفات جبريل",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "رَسُولٍ كَرِيمٍ", meaning: "Noble messenger", explanation: "Jibreel brings revelation", verseRef: "81:19" },
        { term: "ذِي قُوَّةٍ", meaning: "Possessor of power", explanation: "Strength to execute divine missions", verseRef: "81:20" },
        { term: "عِندَ ذِي الْعَرْشِ مَكِينٍ", meaning: "Established near Throne", explanation: "High rank with Allah", verseRef: "81:20" },
        { term: "مُّطَاعٍ ثَمَّ أَمِينٍ", meaning: "Obeyed there, trustworthy", explanation: "Angels obey him, completely trusted", verseRef: "81:21" }
      ]
    },

    prophetDefense: {
      name: "Defense of the Prophet",
      nameArabic: "الدفاع عن النبي",
      color: '#EC4899',
      icon: 'Shield',
      concepts: [
        { term: "مَا صَاحِبُكُم بِمَجْنُونٍ", meaning: "Your companion is not mad", explanation: "Refutes their accusation of insanity", verseRef: "81:22" },
        { term: "رَآهُ بِالْأُفُقِ الْمُبِينِ", meaning: "Saw him on clear horizon", explanation: "Prophet saw Jibreel in true form", verseRef: "81:23" },
        { term: "مَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ", meaning: "Not stingy with unseen", explanation: "Shares all revelation, hides nothing", verseRef: "81:24" }
      ]
    },

    quranAuthority: {
      name: "Quran's Divine Authority",
      nameArabic: "سلطان القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "مَا هُوَ بِقَوْلِ شَيْطَانٍ", meaning: "Not Satan's word", explanation: "Divine origin, not demonic", verseRef: "81:25" },
        { term: "ذِكْرٌ لِّلْعَالَمِينَ", meaning: "Reminder for all worlds", explanation: "Universal message", verseRef: "81:27" },
        { term: "لِمَن شَاءَ... أَن يَسْتَقِيمَ", meaning: "For whoever wills to go straight", explanation: "Guidance for those seeking truth", verseRef: "81:28" },
        { term: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ", meaning: "You don't will except Allah wills", explanation: "Human will within divine sovereignty", verseRef: "81:29" }
      ]
    }
  },

  relationships: [
    { from: "12 'when' clauses", to: "علمت نفس", type: "answer", description: "Soul's knowledge follows cosmic collapse" },
    { from: "رسول كريم", to: "صاحبكم", type: "transmission", description: "Jibreel to Prophet to people" },
    { from: "المؤودة", to: "بأي ذنب", type: "rhetorical", description: "No answer - exposes injustice" },
    { from: "يستقيم", to: "يشاء الله", type: "dependency", description: "Human will under divine will" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Collapse", verses: "81:1-6", description: "Sun, stars, mountains, animals, seas transformed" },
      { stage: 2, theme: "Human Events", verses: "81:7-10", description: "Souls paired, infanticide questioned, records opened" },
      { stage: 3, theme: "Final Realities", verses: "81:11-14", description: "Sky removed, Hell/Paradise ready, soul knows" },
      { stage: 4, theme: "Cosmic Oaths", verses: "81:15-18", description: "Stars, night, dawn bear witness" },
      { stage: 5, theme: "Jibreel's Honor", verses: "81:19-21", description: "Noble, powerful, trusted messenger" },
      { stage: 6, theme: "Prophet's Defense", verses: "81:22-25", description: "Not mad, saw Jibreel, not Satan's word" },
      { stage: 7, theme: "Quran's Authority", verses: "81:26-29", description: "Where else to go? Reminder for all" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Protect the vulnerable", how: "Remember the maw'udah - don't harm the weak", verse: "81:8-9" },
      { principle: "Trust the Prophet", how: "He's your companion, not mad, shares everything", verse: "81:22-24" },
      { principle: "Quran is pure", how: "Not from Satan - divine source through noble angel", verse: "81:19-25" },
      { principle: "Choose to go straight", how: "Guidance available - will you take it?", verse: "81:28" },
      { principle: "Submit to Allah's will", how: "Your choice operates within His sovereignty", verse: "81:29" }
    ]
  },

  uniqueInsight: {
    title: "The Unanswered Question",
    insight: "Verses 8-9 ask the maw'udah (buried infant girl): 'For what sin was she killed?' The question is rhetorical - she has NO sin. But the real target is the murderer. On Judgment Day, the victim becomes the witness. The innocent girl, who couldn't speak in this life, will testify against those who killed her. This was Islam's first condemnation of female infanticide, elevating a discarded baby girl to a key witness on the Day of Judgment. The question goes unanswered because there IS no answer - the crime was answerless."
  },

  linguisticFeatures: {
    features: [
      { feature: "12 'إذا' clauses", example: "Verses 1-13", effect: "Building tension before answer in v14" },
      { feature: "Rare تَنَفَّسَ", example: "Dawn 'breathes'", effect: "Personification of light emerging" },
      { feature: "صاحبكم", example: "Your companion", effect: "Intimacy - Prophet is one of them" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "81:1", topic: "Sun's end", note: "Modern astronomy: sun will expand then collapse" },
      { verse: "81:15-16", topic: "Planetary motion", note: "May refer to retrograde motion of planets" }
    ]
  }
};

export default ONTOLOGY;
