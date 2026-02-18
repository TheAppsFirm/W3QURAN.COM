/**
 * Surah Al-Buruj (85) - Ontology of Quranic Concepts
 * The Great Stars / The Constellations
 * Theme: Persecution of believers, People of the Trench, Allah's might
 */

export const ONTOLOGY = {
  surahId: 85,
  surahName: "Al-Buruj",
  surahNameArabic: "البروج",
  revelationType: "Makki",
  totalAyahs: 22,

  categories: {
    cosmicOaths: {
      name: "The Celestial Oath",
      nameArabic: "القسم السماوي",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "السَّمَاءِ ذَاتِ الْبُرُوجِ", meaning: "Sky with constellations", explanation: "Stars as 'towers' or 'mansions' - celestial magnificence", verseRef: "85:1" },
        { term: "الْيَوْمِ الْمَوْعُودِ", meaning: "The Promised Day", explanation: "Day of Judgment - the promise that will be fulfilled", verseRef: "85:2" },
        { term: "شَاهِدٍ وَمَشْهُودٍ", meaning: "Witness and witnessed", explanation: "Friday, Day of Arafah, or the witnessing on Judgment Day", verseRef: "85:3" }
      ]
    },

    peopleOfTrench: {
      name: "People of the Trench",
      nameArabic: "أصحاب الأخدود",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "قُتِلَ أَصْحَابُ الْأُخْدُودِ", meaning: "Destroyed were trench makers", explanation: "Tyrants who burned believers alive - cursed by Allah", verseRef: "85:4" },
        { term: "النَّارِ ذَاتِ الْوَقُودِ", meaning: "Fire full of fuel", explanation: "Massive fire pit prepared for persecution", verseRef: "85:5" },
        { term: "هُمْ عَلَيْهَا قُعُودٌ", meaning: "They sat by it", explanation: "Tyrants watching their crime - cold-blooded cruelty", verseRef: "85:6" },
        { term: "مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ", meaning: "What they did to believers", explanation: "Their crime against believing men and women", verseRef: "85:7" }
      ]
    },

    believersCrime: {
      name: "The 'Crime' of Belief",
      nameArabic: "جريمة الإيمان",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "مَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا", meaning: "Resented only for believing", explanation: "Only 'crime' was iman - ultimate injustice", verseRef: "85:8" },
        { term: "بِاللَّهِ الْعَزِيزِ الْحَمِيدِ", meaning: "In Allah Mighty, Praiseworthy", explanation: "The One worthy of belief - tyrants opposed truth", verseRef: "85:8" }
      ]
    },

    divineJustice: {
      name: "Divine Retribution",
      nameArabic: "العدل الإلهي",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "فَتَنُوا... ثُمَّ لَمْ يَتُوبُوا", meaning: "Persecuted then didn't repent", explanation: "Door of tawbah was open even for them - they refused", verseRef: "85:10" },
        { term: "عَذَابُ جَهَنَّمَ... الْحَرِيقِ", meaning: "Hell's punishment of burning", explanation: "They burned believers; they will burn - poetic justice", verseRef: "85:10" },
        { term: "جَنَّاتٌ تَجْرِي... الْفَوْزُ الْكَبِيرُ", meaning: "Gardens with rivers - great success", explanation: "Believers' ultimate reward despite worldly suffering", verseRef: "85:11" }
      ]
    },

    divineAttributes: {
      name: "Allah's Attributes",
      nameArabic: "صفات الله",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "بَطْشَ رَبِّكَ لَشَدِيدٌ", meaning: "Lord's grip is severe", explanation: "Allah's seizing of tyrants - sudden, powerful", verseRef: "85:12" },
        { term: "يُبْدِئُ وَيُعِيدُ", meaning: "Originates and repeats", explanation: "Creates initially and resurrects - complete power", verseRef: "85:13" },
        { term: "الْغَفُورُ الْوَدُودُ", meaning: "Forgiving, Loving", explanation: "Even after batsh, door of forgiveness remains open", verseRef: "85:14" },
        { term: "ذُو الْعَرْشِ الْمَجِيدُ", meaning: "Owner of Glorious Throne", explanation: "Ultimate sovereignty and honor", verseRef: "85:15" },
        { term: "فَعَّالٌ لِّمَا يُرِيدُ", meaning: "Doer of whatever He wills", explanation: "Continuous, unrestricted divine action", verseRef: "85:16" }
      ]
    },

    historicalWarning: {
      name: "Historical Examples",
      nameArabic: "العبرة التاريخية",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حَدِيثُ الْجُنُودِ", meaning: "Story of the forces", explanation: "Mighty armies of the past - where are they now?", verseRef: "85:17" },
        { term: "فِرْعَوْنَ وَثَمُودَ", meaning: "Pharaoh and Thamud", explanation: "Two great powers destroyed - warning to Quraysh", verseRef: "85:18" }
      ]
    },

    quranPreservation: {
      name: "Preserved Quran",
      nameArabic: "القرآن المحفوظ",
      color: '#3B82F6',
      icon: 'Shield',
      concepts: [
        { term: "قُرْآنٌ مَّجِيدٌ", meaning: "Glorious Quran", explanation: "Despite denial, Quran is honored and glorious", verseRef: "85:21" },
        { term: "لَوْحٍ مَّحْفُوظٍ", meaning: "Preserved Tablet", explanation: "Al-Lawh al-Mahfuz - eternal divine record", verseRef: "85:22" }
      ]
    }
  },

  relationships: [
    { from: "أصحاب الأخدود", to: "عذاب الحريق", type: "consequence", description: "Burned believers; will be burned" },
    { from: "لم يتوبوا", to: "الغفور الودود", type: "contrast", description: "Forgiveness available but refused" },
    { from: "فرعون وثمود", to: "بطش ربك", type: "example", description: "Historical proof of Allah's grip" },
    { from: "في تكذيب", to: "محيط", type: "consequence", description: "Deniers surrounded by Allah" },
    { from: "قرآن مجيد", to: "لوح محفوظ", type: "source", description: "Quran preserved in eternal tablet" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Oath", verses: "85:1-3", description: "Sky, Promised Day, witness" },
      { stage: 2, theme: "People of Trench", verses: "85:4-9", description: "Tyrants burned believers for faith" },
      { stage: 3, theme: "Divine Justice", verses: "85:10-11", description: "Torturers to Hell, believers to Paradise" },
      { stage: 4, theme: "Divine Attributes", verses: "85:12-16", description: "Severe grip, yet Forgiving and Loving" },
      { stage: 5, theme: "Historical Warning", verses: "85:17-20", description: "Pharaoh, Thamud - all encompassed" },
      { stage: 6, theme: "Quran Eternal", verses: "85:21-22", description: "Glorious Quran in Preserved Tablet" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Faith has cost", how: "Believers may suffer but ultimate victory is theirs", verse: "85:4-8" },
      { principle: "Repentance remains open", how: "Even persecutors could repent - door never closes", verse: "85:10" },
      { principle: "Trust Allah's justice", how: "Tyrants' grip is temporary; Allah's grip is final", verse: "85:12" },
      { principle: "Allah is Wadud", how: "Despite severity, Allah actively loves His servants", verse: "85:14" },
      { principle: "Quran is preserved", how: "Trust the Book - it's in the Preserved Tablet forever", verse: "85:22" }
    ]
  },

  uniqueInsight: {
    title: "From Fire to Fire",
    insight: "Surah Al-Buruj presents a powerful inversion: tyrants created a fire (نَارِ ذَاتِ الْوَقُودِ) to destroy believers. But verse 10 announces they face عَذَابُ الْحَرِيقِ - the punishment of burning. The exact tool of their oppression becomes their punishment. Meanwhile, believers who were thrown into fire enter جَنَّاتٌ - gardens with rivers, the opposite of fire. The surah's message: persecution can kill the body but not the soul. The oppressors' fire was temporary; Allah's fire is eternal. What appears as defeat was actually the believers' ultimate victory."
  },

  historicalContext: {
    note: "Refers to the People of the Trench (أصحاب الأخدود) - a king who persecuted believers by burning them alive in a pit. Identified with Dhū Nuwās of Yemen or similar persecutions. Story detailed in Sahih Muslim."
  },

  linguisticFeatures: {
    features: [
      { feature: "فَعّال intensive", example: "فَعَّالٌ لِّمَا يُرِيدُ", effect: "Continuous doing - Allah always acts" },
      { feature: "Passive curse", example: "قُتِلَ", effect: "Divine passive - destroyed by Allah" },
      { feature: "Pairing opposites", example: "شَاهِدٍ وَمَشْهُودٍ", effect: "Active-passive from same root" }
    ]
  }
};

export default ONTOLOGY;
