/**
 * Surah Al-Fatiha (The Opening) - Surah 1
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 1,
  surahName: "Al-Fatiha",
  surahNameArabic: "الفاتحة",
  totalAyahs: 7,
  revelationType: "Makkan",
  mainTheme: "The Perfect Prayer and Essence of the Quran",

  categories: {
    divinePraise: {
      name: "Divine Praise and Gratitude",
      nameAr: "الحمد والثناء",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Hamd", arabic: "الحمد", meaning: "All praise belongs to Allah - comprehensive gratitude", ayahs: [2] },
        { term: "Rabb al-Alamin", arabic: "رب العالمين", meaning: "Lord of all worlds - universal sovereignty", ayahs: [2] },
        { term: "Universal Lordship", arabic: "الربوبية العامة", meaning: "Allah's nurturing and sustaining all creation", ayahs: [2] }
      ]
    },
    divineAttributes: {
      name: "Divine Attributes",
      nameAr: "صفات الله",
      color: '#8B5CF6',
      icon: 'Crown',
      concepts: [
        { term: "Ar-Rahman", arabic: "الرحمن", meaning: "The Most Gracious - infinite mercy for all creation", ayahs: [1, 3] },
        { term: "Ar-Raheem", arabic: "الرحيم", meaning: "The Most Merciful - special mercy for believers", ayahs: [1, 3] },
        { term: "Malik Yawm ad-Din", arabic: "مالك يوم الدين", meaning: "Master of the Day of Judgment", ayahs: [4] },
        { term: "Yawm ad-Din", arabic: "يوم الدين", meaning: "Day of Recompense - when all accounts are settled", ayahs: [4] }
      ]
    },
    worshipAndSeeking: {
      name: "Worship and Seeking Help",
      nameAr: "العبادة والاستعانة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Ibadah", arabic: "العبادة", meaning: "Exclusive worship devoted to Allah alone", ayahs: [5] },
        { term: "Istianah", arabic: "الاستعانة", meaning: "Seeking help only from Allah", ayahs: [5] },
        { term: "Iyyaka", arabic: "إياك", meaning: "You alone - exclusive dedication (grammatical emphasis)", ayahs: [5] },
        { term: "Direct Address", arabic: "المخاطبة", meaning: "Shift from third to second person - intimate connection", ayahs: [5] }
      ]
    },
    guidanceAndPath: {
      name: "Guidance and the Straight Path",
      nameAr: "الهداية والصراط المستقيم",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Hidayah", arabic: "الهداية", meaning: "Divine guidance to truth", ayahs: [6] },
        { term: "Sirat al-Mustaqim", arabic: "الصراط المستقيم", meaning: "The Straight Path - direct route to Allah", ayahs: [6] },
        { term: "Ihdina", arabic: "اهدنا", meaning: "Guide us - continuous supplication for guidance", ayahs: [6] }
      ]
    },
    threeGroupsOfPeople: {
      name: "Three Groups of People",
      nameAr: "الفئات الثلاث من الناس",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "Al-Mun'am Alayhim", arabic: "المنعم عليهم", meaning: "Those blessed - prophets, truthful, martyrs, righteous", ayahs: [7] },
        { term: "Al-Maghdub Alayhim", arabic: "المغضوب عليهم", meaning: "Those who earned wrath - knew truth but rejected it", ayahs: [7] },
        { term: "Ad-Dallin", arabic: "الضالين", meaning: "Those astray - deviated from truth through ignorance", ayahs: [7] },
        { term: "Knowledge vs Action", arabic: "العلم والعمل", meaning: "Wrath for rejecting known truth; straying for ignorance", ayahs: [7] }
      ]
    },
    prayerStructure: {
      name: "Structure of Perfect Prayer",
      nameAr: "بنية الدعاء الكامل",
      color: '#EC4899',
      icon: 'Book',
      concepts: [
        { term: "Praise First", arabic: "التقديم بالحمد", meaning: "Beginning supplication with praise of Allah", ayahs: [2, 3, 4] },
        { term: "Covenant of Worship", arabic: "عهد العبودية", meaning: "Declaration of exclusive worship before asking", ayahs: [5] },
        { term: "Supplication", arabic: "الدعاء", meaning: "Requesting guidance after establishing relationship", ayahs: [6, 7] },
        { term: "Collective Prayer", arabic: "صيغة الجمع", meaning: "We - praying as community, not just individual", ayahs: [5, 6, 7] }
      ]
    }
  },

  relationships: [
    { from: "Ar-Rahman", to: "Ar-Raheem", type: "complementary", description: "Rahman is vast mercy, Raheem is deep mercy; together they encompass all" },
    { from: "Al-Hamd", to: "Rabb al-Alamin", type: "causation", description: "Praise is due because He is Lord of all worlds" },
    { from: "Malik Yawm ad-Din", to: "Ibadah", type: "motivation", description: "Awareness of Judgment Day motivates sincere worship" },
    { from: "Ibadah", to: "Istianah", type: "prerequisite", description: "True worship requires seeking help only from Allah" },
    { from: "Istianah", to: "Hidayah", type: "consequence", description: "Seeking Allah's help leads to receiving guidance" },
    { from: "Sirat al-Mustaqim", to: "Mun'am Alayhim", type: "definition", description: "The Straight Path is the way of those blessed by Allah" },
    { from: "Maghdub Alayhim", to: "Dallin", type: "contrast", description: "Two types of deviation: willful rejection vs ignorant straying" },
    { from: "Praise", to: "Supplication", type: "order", description: "Proper prayer begins with praise before making requests" }
  ],

  thematicFlow: {
    title: "From Divine Praise to Human Supplication",
    stages: [
      { name: "Basmala", ayahs: [1], description: "Beginning with Allah's name and mercy attributes" },
      { name: "Universal Praise", ayahs: [2], description: "All praise to the Lord of all worlds" },
      { name: "Mercy Attributes", ayahs: [3], description: "Emphasizing Allah's infinite mercy" },
      { name: "Judgment Day", ayahs: [4], description: "Master of the Day of Recompense - accountability" },
      { name: "Declaration of Servitude", ayahs: [5], description: "You alone we worship and seek help from" },
      { name: "Request for Guidance", ayahs: [6], description: "Guide us to the Straight Path" },
      { name: "Clarification of Path", ayahs: [7], description: "Path of blessed, not those in error" }
    ]
  },

  uniqueInsight: {
    title: "Umm al-Quran (Mother of the Quran)",
    insight: "Al-Fatiha is called 'Umm al-Quran' (Mother of the Quran) and 'Al-Sab' al-Mathani' (The Seven Oft-Repeated) because it contains the essence of the entire Quran in just seven verses. It encapsulates three core pillars: Tawhid (Divine Unity - verses 1-4), Ibadah (Worship - verse 5), and guidance through following the righteous and avoiding error (verses 6-7). Every concept in the Quran is either elaboration of praise (Hamd), explanation of mercy (Rahmah), description of the Day of Judgment, clarification of worship, or guidance to the Straight Path. Muslims recite this surah at least 17 times daily in the five obligatory prayers - making it the most recited passage in human history. The Prophet (peace be upon him) said: 'No prayer is valid without the Fatiha.' A hadith qudsi states Allah divided Al-Fatiha into two halves - one for Him (verses 1-4) and one for His servant (verses 5-7) - with the promise: 'My servant will have what he asks for.' This divine conversation makes every prayer an intimate dialogue between the servant and the Lord.",
    arabicTerm: "أم القرآن والسبع المثاني",
    rootMeaning: "ف-ت-ح (to open) - The Opening that unlocks the treasures of the Quran",
    keyAyah: 5
  },

  historicalContext: {
    revelationPeriod: "Early Makkan period, one of the first complete surahs revealed",
    occasion: "Revealed as the perfect form of prayer and supplication, teaching the early Muslims how to approach and communicate with Allah. Some scholars consider it the first complete surah revealed, though individual verses like Iqra (96:1-5) came earlier.",
    note: "Al-Fatiha is the only surah whose recitation is obligatory in every unit (rakat) of prayer. Its revelation marks the establishment of the formal prayer structure in Islam. The surah is also used for ruqyah (spiritual healing) and is recited at the opening of significant events."
  },

  linguisticFeatures: {
    features: [
      { name: "Basmala Integration", description: "بِسْمِ اللَّهِ - Beginning formula", example: "Establishes mercy as the frame for all action", ayah: 1 },
      { name: "Definite Article Al", description: "الحمد - THE praise (not just praise)", example: "All praise of all kinds at all times", ayah: 2 },
      { name: "Object Fronting (Taqdeem)", description: "إِيَّاكَ نَعْبُدُ - You alone we worship", example: "Fronting the object for exclusivity emphasis", ayah: 5 },
      { name: "Person Shift (Iltifat)", description: "Third person to second person", example: "From 'Rabb' (He) to 'Iyyaka' (You) - intimacy", ayah: 5 },
      { name: "Plural of Inclusion", description: "نَعْبُدُ، نَسْتَعِينُ، اهْدِنَا", example: "We - communal worship, not individualistic", ayah: 5 }
    ]
  },

  prayerSignificance: {
    dailyRecitation: {
      fajr: 4,
      dhuhr: 8,
      asr: 8,
      maghrib: 6,
      isha: 9,
      total: "17+ times minimum (more with sunnah prayers)",
      note: "Most recited words in the world - billions of daily recitations globally"
    },
    hadithReferences: [
      { text: "No prayer is valid without recitation of the Opening of the Book", source: "Bukhari and Muslim" },
      { text: "I have divided the prayer between Myself and My servant into two halves", source: "Muslim - Hadith Qudsi" },
      { text: "It is Umm al-Quran, Umm al-Kitab, and Al-Sab' al-Mathani", source: "Tirmidhi" }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 2, name: "Al-Baqarah", relationship: "Al-Baqarah begins with 'This is the Book with guidance' - answering Al-Fatiha's prayer for guidance", type: "direct_answer" },
      { surah: 3, name: "Aal Imran", relationship: "Details the 'blessed path' through prophetic stories", type: "thematic_expansion" },
      { surah: 15, name: "Al-Hijr", relationship: "Mentions 'Al-Sab' al-Mathani' (15:87) referring to Al-Fatiha", type: "direct_reference" },
      { surah: 17, name: "Al-Isra", relationship: "Night Journey where prayer was prescribed - Al-Fatiha integral", type: "historical_connection" },
      { surah: 112, name: "Al-Ikhlas", relationship: "Both focus on Tawhid; Ikhlas expands on 'Alhamdulillah' concept", type: "thematic_parallel" },
      { surah: 113, name: "Al-Falaq", relationship: "Protection prayers complement guidance prayer", type: "complementary" },
      { surah: 114, name: "An-Nas", relationship: "Seeking refuge from evil complements seeking guidance", type: "complementary" }
    ]
  },

  namesOfSurah: {
    names: [
      { name: "Al-Fatiha", arabic: "الفاتحة", meaning: "The Opening - opens the Quran and prayer" },
      { name: "Umm al-Quran", arabic: "أم القرآن", meaning: "Mother of the Quran - contains its essence" },
      { name: "Umm al-Kitab", arabic: "أم الكتاب", meaning: "Mother of the Book" },
      { name: "Al-Sab' al-Mathani", arabic: "السبع المثاني", meaning: "The Seven Oft-Repeated" },
      { name: "Al-Hamd", arabic: "الحمد", meaning: "The Praise" },
      { name: "As-Salah", arabic: "الصلاة", meaning: "The Prayer - it IS the prayer" },
      { name: "Ash-Shifa", arabic: "الشفاء", meaning: "The Cure - spiritual healing" },
      { name: "Ar-Ruqyah", arabic: "الرقية", meaning: "The Remedy - used for spiritual protection" },
      { name: "Al-Kafiyah", arabic: "الكافية", meaning: "The Sufficient - sufficient for worship" },
      { name: "Al-Asas", arabic: "الأساس", meaning: "The Foundation - foundation of the Quran" }
    ]
  }
};

export default ONTOLOGY;
