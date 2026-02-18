/**
 * Surah 'Abasa (80) - Ontology of Quranic Concepts
 * He Frowned
 * Theme: Prophet's correction, Quran's honor, human creation, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 80,
  surahName: "'Abasa",
  surahNameArabic: "عبس",
  revelationType: "Makki",
  totalAyahs: 42,

  categories: {
    divineCorrection: {
      name: "Divine Correction of Prophet",
      nameArabic: "التعديل الإلهي",
      color: '#8B5CF6',
      icon: 'MessageCircle',
      concepts: [
        { term: "عَبَسَ وَتَوَلَّىٰ", meaning: "He frowned and turned away", explanation: "Third person (gentle) - Prophet turned from blind man", verseRef: "80:1" },
        { term: "أَن جَاءَهُ الْأَعْمَىٰ", meaning: "Because the blind man came", explanation: "Abdullah ibn Umm Maktum seeking guidance", verseRef: "80:2" },
        { term: "لَعَلَّهُ يَزَّكَّىٰ", meaning: "Perhaps he would purify", explanation: "Blind man might achieve more than chiefs", verseRef: "80:3" }
      ]
    },

    sincerityVsStatus: {
      name: "Sincerity vs Social Status",
      nameArabic: "الإخلاص مقابل المكانة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "مَنِ اسْتَغْنَىٰ", meaning: "He who considers himself self-sufficient", explanation: "Arrogant chiefs who feel no need for guidance", verseRef: "80:5" },
        { term: "تَصَدَّىٰ", meaning: "You give attention", explanation: "Prophet's attention to wealthy leaders", verseRef: "80:6" },
        { term: "مَن جَاءَكَ يَسْعَىٰ وَهُوَ يَخْشَىٰ", meaning: "Who comes striving, fearing Allah", explanation: "Blind man's effort despite disability", verseRef: "80:8-9" },
        { term: "عَنْهُ تَلَهَّىٰ", meaning: "From him you were distracted", explanation: "Prophet's distraction from sincere seeker", verseRef: "80:10" }
      ]
    },

    quranHonor: {
      name: "Quran's Honor",
      nameArabic: "مكانة القرآن",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "إِنَّهَا تَذْكِرَةٌ", meaning: "It is a reminder", explanation: "Quran is reminder for all", verseRef: "80:11" },
        { term: "صُحُفٍ مُّكَرَّمَةٍ مَّرْفُوعَةٍ مُّطَهَّرَةٍ", meaning: "Honored, exalted, purified scriptures", explanation: "Three descriptions of Quran's status", verseRef: "80:13-14" },
        { term: "بِأَيْدِي سَفَرَةٍ كِرَامٍ بَرَرَةٍ", meaning: "In hands of noble, dutiful scribes", explanation: "Angels who carry and copy revelation", verseRef: "80:15-16" }
      ]
    },

    humanIngratitude: {
      name: "Human Ingratitude",
      nameArabic: "كفران الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ", meaning: "Destroyed is man, how ungrateful!", explanation: "Curse formula - dismay at ingratitude", verseRef: "80:17" },
        { term: "لَمَّا يَقْضِ مَا أَمَرَهُ", meaning: "Never fulfilled what commanded", explanation: "Despite all favors, obligations unfulfilled", verseRef: "80:23" }
      ]
    },

    creationStages: {
      name: "Human Creation Stages",
      nameArabic: "مراحل خلق الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "مِن نُّطْفَةٍ خَلَقَهُ", meaning: "From a drop created him", explanation: "Humble origin - sperm drop", verseRef: "80:19" },
        { term: "فَقَدَّرَهُ", meaning: "Then determined him", explanation: "Measured and proportioned", verseRef: "80:19" },
        { term: "السَّبِيلَ يَسَّرَهُ", meaning: "Made the way easy", explanation: "Birth canal or guidance path", verseRef: "80:20" },
        { term: "أَمَاتَهُ فَأَقْبَرَهُ", meaning: "Caused death, then burial", explanation: "Death and dignified burial", verseRef: "80:21" },
        { term: "أَنشَرَهُ", meaning: "Will resurrect him", explanation: "Resurrection when Allah wills", verseRef: "80:22" }
      ]
    },

    provisionSigns: {
      name: "Signs in Provision",
      nameArabic: "آيات في الرزق",
      color: '#22C55E',
      icon: 'Sun',
      concepts: [
        { term: "صَبَبْنَا الْمَاءَ صَبًّا", meaning: "Poured water pouring", explanation: "Rain - cognate accusative emphasis", verseRef: "80:25" },
        { term: "شَقَقْنَا الْأَرْضَ شَقًّا", meaning: "Split earth splitting", explanation: "Earth opened for growth", verseRef: "80:26" },
        { term: "حَبًّا وَعِنَبًا وَقَضْبًا وَزَيْتُونًا وَنَخْلًا", meaning: "Grain, grapes, herbs, olives, palms", explanation: "Variety of crops from one earth", verseRef: "80:27-29" },
        { term: "مَّتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ", meaning: "Provision for you and cattle", explanation: "Both humans and animals provided for", verseRef: "80:32" }
      ]
    },

    judgmentDay: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "الصَّاخَّةُ", meaning: "The Deafening Blast", explanation: "Trumpet so loud it deafens", verseRef: "80:33" },
        { term: "يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ وَأُمِّهِ وَأَبِيهِ", meaning: "Man flees from family", explanation: "Terror makes closest bonds meaningless", verseRef: "80:34-35" },
        { term: "شَأْنٌ يُغْنِيهِ", meaning: "Concern sufficient for him", explanation: "Each person consumed by own worry", verseRef: "80:37" }
      ]
    },

    twoFaces: {
      name: "Two Types of Faces",
      nameArabic: "نوعان من الوجوه",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "وُجُوهٌ... مُّسْفِرَةٌ ضَاحِكَةٌ مُّسْتَبْشِرَةٌ", meaning: "Bright, laughing, rejoicing faces", explanation: "Believers receive good news", verseRef: "80:38-39" },
        { term: "وُجُوهٌ... غَبَرَةٌ تَرْهَقُهَا قَتَرَةٌ", meaning: "Dust-covered, blackened faces", explanation: "Despair covers disbelievers", verseRef: "80:40-41" },
        { term: "الْكَفَرَةُ الْفَجَرَةُ", meaning: "Disbelievers, wicked", explanation: "Double description: kufr in belief + fujur in action", verseRef: "80:42" }
      ]
    }
  },

  relationships: [
    { from: "الأعمى يسعى يخشى", to: "من استغنى", type: "contrast", description: "Sincere seeker vs arrogant rejecter" },
    { from: "تذكرة", to: "صحف مكرمة", type: "identity", description: "Quran is honored reminder" },
    { from: "من نطفة", to: "أنشره", type: "sequence", description: "Life cycle: creation → death → resurrection" },
    { from: "صببنا الماء", to: "متاعا لكم", type: "purpose", description: "All provision for human/animal benefit" },
    { from: "الصاخة", to: "يفر من أخيه", type: "consequence", description: "Blast causes family flight" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Correction", verses: "80:1-10", description: "Prophet corrected for prioritizing chiefs over sincere seeker" },
      { stage: 2, theme: "Quran's Status", verses: "80:11-16", description: "Reminder in honored, pure scriptures with noble angels" },
      { stage: 3, theme: "Human Ingratitude", verses: "80:17-23", description: "Man ungrateful despite creation and favor" },
      { stage: 4, theme: "Provision Signs", verses: "80:24-32", description: "Food from rain to earth to crops for all" },
      { stage: 5, theme: "Judgment Day", verses: "80:33-42", description: "Blast, flight from family, two types of faces" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Value sincerity over status", how: "Prioritize those seeking truth over those with worldly rank", verse: "80:1-10" },
      { principle: "Accept correction gracefully", how: "Even the Prophet was corrected - we should be more accepting", verse: "80:1-10" },
      { principle: "Remember your origins", how: "From a drop - stay humble despite achievements", verse: "80:19" },
      { principle: "Recognize provision", how: "Every bite of food is Allah's provision - be grateful", verse: "80:24-32" },
      { principle: "Prepare for that Day", how: "When family won't help, only deeds matter", verse: "80:34-37" }
    ]
  },

  uniqueInsight: {
    title: "The Blind Man Who Saw Better",
    insight: "This surah permanently records a divine correction of Prophet Muhammad ﷺ. While speaking to Quraysh chiefs, a blind man (Abdullah ibn Umm Maktum) interrupted seeking guidance. The Prophet frowned - not out of contempt but from wanting to complete da'wah to influential leaders. Yet Allah corrected this: 'Perhaps HE would purify himself' (v3). The blind man, who couldn't see the Prophet's expression, saw the truth more clearly than sighted leaders who turned away. Islam's value system is established: sincerity trumps social status. The Prophet ﷺ later honored Ibn Umm Maktum, leaving him in charge of Madinah during campaigns."
  },

  historicalContext: {
    note: "Revealed about Abdullah ibn Umm Maktum, a blind companion who interrupted the Prophet's discussion with Quraysh leaders. The Prophet wanted to finish his da'wah to influential Meccans, but Allah corrected this prioritization, establishing Islam's egalitarian principle."
  },

  linguisticFeatures: {
    features: [
      { feature: "Third person عَبَسَ", example: "He frowned (not 'you frowned')", effect: "Gentle correction, not harsh rebuke" },
      { feature: "Cognate accusative", example: "صَبَبْنَا... صَبًّا, شَقَقْنَا... شَقًّا", effect: "Emphasis on abundance" },
      { feature: "Rhyming adjectives", example: "مُكَرَّمَةٍ، مَّرْفُوعَةٍ، مُّطَهَّرَةٍ", effect: "Building honor of scriptures" }
    ]
  }
};

export default ONTOLOGY;
