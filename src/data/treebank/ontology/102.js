/**
 * Surah At-Takathur (102) - Ontology of Quranic Concepts
 * The Competition
 * Theme: Warning against competition for worldly increase
 */

export const ONTOLOGY = {
  surahId: 102,
  surahName: "At-Takathur",
  surahNameArabic: "التكاثر",
  revelationType: "Makki",
  totalAyahs: 8,

  categories: {
    worldlyDistraction: {
      name: "Worldly Distraction",
      nameArabic: "الإلهاء بالدنيا",
      color: '#F59E0B',
      icon: 'AlertTriangle',
      description: "How competition for more distracts from the Hereafter",
      concepts: [
        {
          term: "التَّكَاثُر",
          transliteration: "At-Takaathur",
          meaning: "Competition for increase / Mutual rivalry",
          explanation: "Form VI (تَفَاعُل) shows mutual/reciprocal action - competing WITH EACH OTHER for more: wealth, children, status, possessions.",
          verseRef: "102:1"
        },
        {
          term: "أَلْهَى",
          transliteration: "Alhaa",
          meaning: "Diverted / Distracted",
          explanation: "Form IV causative - the competition CAUSED distraction from remembering Allah and preparing for death.",
          verseRef: "102:1"
        }
      ]
    },

    deathReality: {
      name: "Reality of Death",
      nameArabic: "حقيقة الموت",
      color: '#EF4444',
      icon: 'Moon',
      description: "Death ends all competition",
      concepts: [
        {
          term: "زُرْتُمُ المَقَابِر",
          transliteration: "Zurtum al-Maqaabir",
          meaning: "You visited the graveyards",
          explanation: "Powerful euphemism - 'visiting' graves = dying. Those who competed are now visited (as corpses) in the graveyard.",
          verseRef: "102:2"
        }
      ]
    },

    levelsOfCertainty: {
      name: "Three Levels of Certainty",
      nameArabic: "مراتب اليقين",
      color: '#3B82F6',
      icon: 'Eye',
      description: "The Islamic epistemology of certainty",
      concepts: [
        {
          term: "عِلْمَ اليَقِين",
          transliteration: "'Ilm al-Yaqeen",
          meaning: "Knowledge of Certainty",
          explanation: "First level: Certainty through information/evidence. Like being told fire burns.",
          verseRef: "102:5"
        },
        {
          term: "عَيْنَ اليَقِين",
          transliteration: "'Ayn al-Yaqeen",
          meaning: "Eye of Certainty",
          explanation: "Second level: Certainty through direct observation. Like seeing the fire yourself.",
          verseRef: "102:7"
        },
        {
          term: "حَقَّ اليَقِين",
          transliteration: "Haqq al-Yaqeen",
          meaning: "Reality of Certainty",
          explanation: "Third level (mentioned in 56:95, 69:51): Direct experience. Like being burned by the fire. This level is implied as what happens after seeing Hell.",
          verseRef: "Referenced in 56:95"
        }
      ]
    },

    accountability: {
      name: "Accountability for Blessings",
      nameArabic: "المسؤولية عن النعم",
      color: '#8B5CF6',
      icon: 'Scale',
      description: "Being questioned about every blessing",
      concepts: [
        {
          term: "لَتُسْأَلُنَّ عَنِ النَّعِيم",
          transliteration: "La-Tus'alunna 'an an-Na'eem",
          meaning: "You will surely be asked about blessings",
          explanation: "Every blessing - health, wealth, time, cold water, shade - will be accounted for: Did you earn it lawfully? Did you thank Allah? Did you use it properly?",
          verseRef: "102:8"
        }
      ]
    }
  },

  relationships: [
    {
      from: "التَّكَاثُر",
      to: "الإلهاء",
      type: "causation",
      description: "Competition CAUSES distraction",
      explanation: "The rat race for more keeps people from focusing on what matters"
    },
    {
      from: "الإلهاء",
      to: "المَقَابِر",
      type: "consequence",
      description: "Distraction continues until death",
      explanation: "People only 'wake up' when they die - but then it's too late"
    },
    {
      from: "عِلْم اليَقِين",
      to: "عَيْن اليَقِين",
      type: "progression",
      description: "From intellectual certainty to visual certainty",
      explanation: "What they should have believed, they will now see"
    },
    {
      from: "النَّعِيم",
      to: "التَّكَاثُر",
      type: "irony",
      description: "What they competed for, they'll be questioned about",
      explanation: "The very blessings they sought to multiply become the subject of interrogation"
    }
  ],

  thematicFlow: {
    title: "From Distraction to Accountability",
    titleArabic: "من الإلهاء إلى المساءلة",
    description: "The surah traces the path from worldly competition to divine questioning",
    stages: [
      {
        stage: 1,
        theme: "The Distraction",
        verses: "102:1-2",
        description: "Competition diverts you until death"
      },
      {
        stage: 2,
        theme: "The Warning",
        verses: "102:3-4",
        description: "Repeated warning: You WILL know"
      },
      {
        stage: 3,
        theme: "The Conditional",
        verses: "102:5",
        description: "If only you had certain knowledge..."
      },
      {
        stage: 4,
        theme: "The Vision",
        verses: "102:6-7",
        description: "You will definitely see Hell"
      },
      {
        stage: 5,
        theme: "The Questioning",
        verses: "102:8",
        description: "You will be asked about every blessing"
      }
    ]
  },

  rhetoricalDevices: {
    title: "Rhetorical Features",
    devices: [
      {
        name: "Repetition for emphasis",
        arabic: "التكرار للتأكيد",
        example: "كَلَّا سَوْفَ تَعْلَمُونَ (repeated twice)",
        effect: "Drives home the certainty of future realization"
      },
      {
        name: "Euphemism",
        arabic: "الكناية",
        example: "زُرْتُمُ المَقَابِر (visited graveyards)",
        effect: "Softens 'death' while adding irony - visitors become residents"
      },
      {
        name: "Triple emphasis on verbs",
        arabic: "التوكيد الثلاثي",
        example: "لَتَرَوُنَّ، لَتَرَوُنَّهَا، لَتُسْأَلُنَّ",
        effect: "لَ + نون التوكيد = strongest possible emphasis"
      },
      {
        name: "Progression of certainty",
        arabic: "تدرج اليقين",
        example: "عِلْمَ اليَقِين → عَيْنَ اليَقِين",
        effect: "Shows escalation from intellectual to experiential certainty"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 104,
        name: "Al-Humazah",
        relation: "Both criticize wealth obsession",
        sharedTheme: "Condemnation of materialism"
      },
      {
        surah: 100,
        name: "Al-'Adiyat",
        relation: "Both mention human love of wealth (إِنَّهُ لِحُبِّ الخَيْرِ لَشَدِيد)",
        sharedTheme: "Human attachment to worldly goods"
      },
      {
        surah: 89,
        name: "Al-Fajr",
        relation: "Describes those who say 'My Lord honored me' based on wealth",
        sharedTheme: "False sense of divine favor from wealth"
      },
      {
        surah: 56,
        name: "Al-Waqi'ah",
        verse: 95,
        relation: "Mentions حَقَّ اليَقِين (reality of certainty)",
        sharedTheme: "Levels of certainty"
      }
    ]
  },

  hadith: [
    {
      arabic: "لو كان لابن آدم واديان من مال لابتغى ثالثاً",
      english: "If the son of Adam had two valleys of wealth, he would seek a third",
      source: "Sahih Bukhari & Muslim",
      relevance: "Explains the insatiable nature of التَّكَاثُر"
    },
    {
      arabic: "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ والفَرَاغُ",
      english: "Two blessings many people waste: health and free time",
      source: "Sahih Bukhari",
      relevance: "Examples of النَّعِيم we'll be asked about"
    },
    {
      arabic: "أَوَّلُ مَا يُسْأَلُ عَنْهُ العَبْدُ يَوْمَ القِيَامَةِ مِنَ النَّعِيمِ: شُرْبَةٌ مِنْ مَاءٍ بَارِدٍ",
      english: "The first blessing the servant will be asked about on Judgment Day is a drink of cold water",
      source: "At-Tirmidhi",
      relevance: "Even simple pleasures count as النَّعِيم"
    }
  ],

  practicalApplication: {
    title: "Avoiding the Takathur Trap",
    questions: [
      {
        aspect: "Competition",
        question: "Am I competing to have more than others, or seeking what's sufficient?",
        remedy: "Focus on sufficiency (كَفَاف) not competition"
      },
      {
        aspect: "Distraction",
        question: "How much of my time is spent on worldly pursuit vs. afterlife preparation?",
        remedy: "Daily accounting of time usage"
      },
      {
        aspect: "Death awareness",
        question: "When did I last visit a graveyard to remember death?",
        remedy: "Regular graveyard visits as the Prophet ﷺ recommended"
      },
      {
        aspect: "Gratitude",
        question: "Do I thank Allah for basic blessings: cold water, shade, health?",
        remedy: "Daily gratitude practice for simple blessings"
      }
    ]
  },

  uniqueInsight: {
    title: "The Graveyard Test",
    insight: "The surah presents an ironic test of priority: People spend their entire lives competing for 'more' - more money, more children, more status - only to end up in graves where none of it matters. The Arabic word زُرْتُمُ (you visited) is particularly pointed: in life, we 'visit' graves briefly; in death, we become permanent residents. Those who competed in counting blessings will now have their blessings counted against them (لَتُسْأَلُنَّ عَنِ النَّعِيم).",
    modernRelevance: "In an age of social media comparison, lifestyle inflation, and 'keeping up with the Joneses', this surah's warning is urgent: the competition never ends until death, and then the real accounting begins."
  },

  comparisonTable: {
    title: "Levels of Certainty",
    headers: ["Level", "Arabic", "Meaning", "Analogy"],
    rows: [
      {
        level: "1",
        arabic: "عِلْمَ اليَقِين",
        meaning: "Knowledge Certainty",
        analogy: "Being told fire burns (information)"
      },
      {
        level: "2",
        arabic: "عَيْنَ اليَقِين",
        meaning: "Visual Certainty",
        analogy: "Seeing the fire yourself (observation)"
      },
      {
        level: "3",
        arabic: "حَقَّ اليَقِين",
        meaning: "Reality Certainty",
        analogy: "Being burned by the fire (experience)"
      }
    ]
  },

  linguisticGems: [
    {
      observation: "Form VI for mutual action",
      explanation: "تَكَاثُر (Form VI: تَفَاعُل) means competing WITH each other - not just wanting more, but wanting more than others"
    },
    {
      observation: "Three كَلَّا particles",
      explanation: "Three times the emphatic rejection appears (v.3, 4, 5) - progressive wake-up calls"
    },
    {
      observation: "Short surah, long message",
      explanation: "Only 28 words deliver a complete worldview: from distraction to death to vision to accountability"
    }
  ]
};

export default ONTOLOGY;
