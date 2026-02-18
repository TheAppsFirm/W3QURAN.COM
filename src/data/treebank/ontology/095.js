/**
 * Surah At-Tin (95) - Ontology of Quranic Concepts
 * The Fig
 * Theme: Human dignity as best creation, the fall to lowest depths, and divine justice
 */

export const ONTOLOGY = {
  surahId: 95,
  surahName: "At-Tin",
  surahNameArabic: "التين",
  revelationType: "Makki",
  totalAyahs: 8,

  categories: {
    sacredOaths: {
      name: "Divine Oaths by Sacred Places",
      nameArabic: "القسم بالأماكن المقدسة",
      color: '#8B5CF6',
      icon: 'Star',
      description: "Allah swears by blessed fruits and sacred locations",
      concepts: [
        {
          term: "التِّين والزَّيْتُون",
          transliteration: "At-Teen waz-Zaytoon",
          meaning: "The fig and the olive",
          explanation: "Scholars say these represent: (1) The actual blessed fruits (2) The lands where they grow - Damascus/Palestine (3) The mountains where prophets received revelation. Fig and olive together symbolize complete blessing.",
          verseRef: "95:1"
        },
        {
          term: "طُورِ سِينِين",
          transliteration: "Toor Seeneen",
          meaning: "Mount Sinai",
          explanation: "The blessed mountain where Musa received the Torah. 'Seeneen' may mean 'blessed' or 'beautiful' in Syriac. Sacred site of divine communication.",
          verseRef: "95:2"
        },
        {
          term: "البَلَد الأَمِين",
          transliteration: "Al-Balad al-Ameen",
          meaning: "The Secure City (Makkah)",
          explanation: "Makkah - the Haram where the Prophet received the Quran. 'Ameen' (secure) because fighting is prohibited there, and it's a sanctuary for all.",
          verseRef: "95:3"
        }
      ]
    },

    humanCreation: {
      name: "Human Excellence in Creation",
      nameArabic: "كمال خلق الإنسان",
      color: '#F59E0B',
      icon: 'Crown',
      description: "Man created in the most perfect form",
      concepts: [
        {
          term: "أَحْسَن تَقْوِيم",
          transliteration: "Ahsan Taqweem",
          meaning: "The best stature/form",
          explanation: "The superlative ahsan (best) + taqweem (straightening/form) = absolutely best possible form. Includes: upright posture, balanced proportions, intellect, speech, opposable thumbs, soul, and capacity for worship.",
          verseRef: "95:4"
        },
        {
          term: "خَلَقْنَا الإِنسَان",
          transliteration: "Khalaqna al-Insan",
          meaning: "We created mankind",
          explanation: "Royal 'We' emphasizes divine majesty. Al-Insan (with definite article) means all humanity, not just one person. Every human is created with this potential.",
          verseRef: "95:4"
        }
      ]
    },

    humanFall: {
      name: "The Fall to Lowest Depths",
      nameArabic: "الانحدار إلى أسفل سافلين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "How humans can descend from highest to lowest",
      concepts: [
        {
          term: "أَسْفَل سَافِلِين",
          transliteration: "Asfal Saafileen",
          meaning: "The lowest of the low",
          explanation: "Multiple interpretations: (1) Old age and weakness (2) Hellfire (3) Moral degradation through sin (4) Becoming worse than animals by rejecting fitrah. The contrast with 'best form' is stark.",
          verseRef: "95:5"
        },
        {
          term: "رَدَدْنَاهُ",
          transliteration: "Radadnaahu",
          meaning: "We returned him",
          explanation: "Allah allows the return/descent - not forces it. Through choices over time (thumma = then, with gap), humans can fall from their exalted position.",
          verseRef: "95:5"
        }
      ]
    },

    salvation: {
      name: "The Path of Salvation",
      nameArabic: "طريق النجاة",
      color: '#10B981',
      icon: 'Compass',
      description: "How to avoid falling to lowest depths",
      concepts: [
        {
          term: "آمَنُوا وَعَمِلُوا الصَّالِحَات",
          transliteration: "Aamanoo wa 'amilus-Saalihaat",
          meaning: "Believe and do righteous deeds",
          explanation: "The consistent Quranic formula for salvation. Faith (iman) without action is incomplete. Action without faith is directionless. Together they preserve human dignity.",
          verseRef: "95:6"
        },
        {
          term: "أَجْر غَيْر مَمْنُون",
          transliteration: "Ajr ghayr Mamnoon",
          meaning: "Reward uninterrupted",
          explanation: "Mamnoon from manna = cut off. Ghayr mamnoon = never cut off, never diminished, never reminded about (no 'strings attached'). Eternal, pure, unending reward.",
          verseRef: "95:6"
        }
      ]
    },

    divineJustice: {
      name: "The Supreme Judge",
      nameArabic: "أحكم الحاكمين",
      color: '#F59E0B',
      icon: 'Scale',
      description: "Allah as the most just judge",
      concepts: [
        {
          term: "أَحْكَم الحَاكِمِين",
          transliteration: "Ahkam al-Haakimeen",
          meaning: "The most just of judges",
          explanation: "Ahkam combines wisdom (hikmah) and justice (hukm). Allah judges with perfect knowledge, complete fairness, and ultimate wisdom. No appeal needed or possible.",
          verseRef: "95:8"
        },
        {
          term: "الدِّين",
          transliteration: "Ad-Deen",
          meaning: "The Recompense/Judgment",
          explanation: "Here deen means recompense/judgment, not religion. Same word because religion leads to judgment. Yawm ad-Deen = Day when all debts are settled.",
          verseRef: "95:7"
        }
      ]
    }
  },

  relationships: [
    {
      from: "أحسن تقويم",
      to: "أسفل سافلين",
      type: "contrast",
      description: "From best to lowest",
      explanation: "The extreme contrast shows human potential for both heights and depths"
    },
    {
      from: "أسفل سافلين",
      to: "آمنوا وعملوا الصالحات",
      type: "exception",
      description: "Faith and deeds prevent the fall",
      explanation: "The 'illa' (except) shows the way to maintain human dignity"
    },
    {
      from: "التين والزيتون",
      to: "البلد الأمين",
      type: "progression",
      description: "Geographic progression of revelation",
      explanation: "From Levant (Isa) to Sinai (Musa) to Makkah (Muhammad) - history of guidance"
    },
    {
      from: "أحكم الحاكمين",
      to: "الدين",
      type: "authority",
      description: "Supreme Judge for Judgment Day",
      explanation: "Allah's perfect justice ensures fair recompense"
    }
  ],

  thematicFlow: {
    title: "From Sacred Oaths to Divine Justice",
    titleArabic: "من القسم المقدس إلى العدل الإلهي",
    description: "The surah moves from blessed oaths to human nature to accountability",
    stages: [
      {
        stage: 1,
        theme: "Sacred Oaths",
        verses: "95:1-3",
        description: "Three oaths by blessed places linked to prophets"
      },
      {
        stage: 2,
        theme: "Human Excellence",
        verses: "95:4",
        description: "Mankind created in the best form"
      },
      {
        stage: 3,
        theme: "The Fall",
        verses: "95:5",
        description: "Degradation to lowest of low"
      },
      {
        stage: 4,
        theme: "The Exception",
        verses: "95:6",
        description: "Faith and deeds save from falling"
      },
      {
        stage: 5,
        theme: "The Question",
        verses: "95:7",
        description: "What causes denial of Judgment?"
      },
      {
        stage: 6,
        theme: "Divine Justice",
        verses: "95:8",
        description: "Allah as supreme judge - rhetorical conclusion"
      }
    ]
  },

  geographicSymbolism: {
    title: "Three Lands of Revelation",
    description: "The oaths map the geography of prophethood",
    places: [
      {
        symbol: "التين والزيتون",
        location: "Palestine/Damascus",
        prophet: "Isa (Jesus)",
        revelation: "Injil",
        note: "Land of figs and olives"
      },
      {
        symbol: "طور سينين",
        location: "Sinai Peninsula",
        prophet: "Musa (Moses)",
        revelation: "Torah",
        note: "Mountain of divine speech"
      },
      {
        symbol: "البلد الأمين",
        location: "Makkah",
        prophet: "Muhammad ﷺ",
        revelation: "Quran",
        note: "Final, complete revelation"
      }
    ],
    insight: "All three places witness: humans can achieve greatness (prophets) or fall to depths (their opponents)"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 90,
        name: "Al-Balad",
        relation: "Also swears by 'this city' (Makkah)",
        sharedTheme: "Makkah's sanctity"
      },
      {
        surah: 84,
        name: "Al-Inshiqaq",
        verses: "84:6",
        relation: "Humans labor toward their Lord",
        sharedTheme: "Human striving"
      },
      {
        surah: 32,
        name: "As-Sajdah",
        verse: 7,
        relation: "'Who perfected everything He created'",
        sharedTheme: "Perfect creation"
      },
      {
        surah: 17,
        name: "Al-Isra",
        verse: 70,
        relation: "'We have honored the children of Adam'",
        sharedTheme: "Human dignity"
      },
      {
        surah: 91,
        name: "Ash-Shams",
        verses: "91:7-10",
        relation: "Soul's potential for purity or corruption",
        sharedTheme: "Human moral potential"
      }
    ]
  },

  hadith: [
    {
      arabic: "من قرأ والتين والزيتون فليقل: بلى وأنا على ذلك من الشاهدين",
      english: "Whoever reads 'By the fig and the olive' and reaches 'Is not Allah the most just of judges?' should say: 'Yes indeed, and I am among those who testify to that'",
      source: "Tirmidhi, Abu Dawud",
      relevance: "Recommended response at the end of this surah"
    },
    {
      arabic: "إن الله خلق آدم على صورته",
      english: "Allah created Adam in His image (or: in his best form)",
      source: "Bukhari & Muslim",
      relevance: "Relates to 'best stature' - human dignity from divine creation"
    }
  ],

  practicalApplication: {
    title: "Living the Message of At-Tin",
    applications: [
      {
        principle: "Honor your creation",
        how: "Recognize your potential - you're designed for greatness",
        verse: "95:4"
      },
      {
        principle: "Avoid the fall",
        how: "Choices degrade us over time (thumma) - guard against gradual decline",
        verse: "95:5"
      },
      {
        principle: "Faith + Action formula",
        how: "Neither faith without deeds nor deeds without faith suffices",
        verse: "95:6"
      },
      {
        principle: "Expect judgment",
        how: "Live knowing the Supreme Judge sees all",
        verse: "95:8"
      },
      {
        principle: "Respond to the surah",
        how: "Say 'Balaa, wa ana 'ala dhaalika min ash-shaahideen' at the end",
        verse: "95:8"
      }
    ]
  },

  uniqueInsight: {
    title: "The Two Extremes of Human Potential",
    insight: "This surah presents the most dramatic contrast in the Quran regarding human nature. In just 8 verses, Allah describes humans as created in 'the BEST of stature' (ahsan taqweem) yet capable of falling to 'the LOWEST of the low' (asfal saafileen). No other creation has this range. Angels cannot fall; animals cannot rise. Only humans have this terrifying freedom - to become better than angels through worship, or worse than animals through rejection. The fig and olive (blessed foods), Sinai (Torah), and Makkah (Quran) - all witness this truth. And the surah ends not with description but with question: given this reality, why deny judgment? The Supreme Judge awaits.",
    modernRelevance: "In an age that either inflates human ego ('you're perfect as you are') or deflates it ('humans are just animals'), this surah offers the balanced truth: tremendous potential requiring tremendous responsibility."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Four oaths opening",
        effect: "Building emphasis before the main statement"
      },
      {
        feature: "Elative contrast",
        example: "أَحْسَن (best) vs أَسْفَل (lowest)",
        effect: "Grammatical superlatives emphasize extremes"
      },
      {
        feature: "Rhetorical question",
        example: "أَلَيْسَ اللَّهُ بِأَحْكَمِ الحَاكِمِينَ",
        effect: "Negative question expecting positive answer = strong affirmation"
      },
      {
        feature: "Exception particle",
        example: "إِلَّا الَّذِينَ آمَنُوا",
        effect: "Hope after warning - balance of Quranic style"
      }
    ]
  },

  comparisonTable: {
    title: "Best Form vs Lowest Depths",
    headers: ["Best Stature (أحسن تقويم)", "Lowest of Low (أسفل سافلين)"],
    rows: [
      {
        best: "Upright physical form",
        lowest: "Bent with age/disease"
      },
      {
        best: "Sound intellect",
        lowest: "Mental corruption"
      },
      {
        best: "Pure soul (fitrah)",
        lowest: "Corrupted nature"
      },
      {
        best: "Capacity for worship",
        lowest: "Denial of Creator"
      },
      {
        best: "Higher than angels",
        lowest: "Lower than animals"
      },
      {
        best: "Paradise potential",
        lowest: "Hellfire destination"
      }
    ]
  },

  numbersAndPatterns: {
    title: "Structural Patterns",
    patterns: [
      {
        pattern: "4 oaths",
        significance: "Fig, Olive, Sinai, Makkah - comprehensive witness"
      },
      {
        pattern: "8 verses total",
        significance: "Concise yet complete argument"
      },
      {
        pattern: "3 lands",
        significance: "Three major revelation sites"
      },
      {
        pattern: "2 outcomes",
        significance: "Fall or salvation - binary choice"
      }
    ]
  }
};

export default ONTOLOGY;
