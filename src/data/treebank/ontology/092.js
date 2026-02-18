/**
 * Surah Al-Layl (92) - Ontology of Quranic Concepts
 * The Night
 * Theme: Two paths diverge - the generous believer vs the miserly denier
 */

export const ONTOLOGY = {
  surahId: 92,
  surahName: "Al-Layl",
  surahNameArabic: "الليل",
  revelationType: "Makki",
  totalAyahs: 21,

  categories: {
    cosmicOaths: {
      name: "The Cosmic Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Moon',
      description: "Divine oaths by natural phenomena representing human spiritual states",
      concepts: [
        {
          term: "اللَّيْلِ إِذَا يَغْشَىٰ",
          transliteration: "Al-Layli idhaa yaghshaa",
          meaning: "The night when it covers",
          explanation: "Night covering represents the state of those who cover/reject truth. The darkness of spiritual blindness, miserliness, and denial.",
          verseRef: "92:1"
        },
        {
          term: "النَّهَارِ إِذَا تَجَلَّىٰ",
          transliteration: "An-Nahaari idhaa tajallaa",
          meaning: "The day when it appears/manifests",
          explanation: "Day manifesting represents clarity, truth, and those who live in spiritual light. Tajallaa (manifestation) - truth unveiled.",
          verseRef: "92:2"
        },
        {
          term: "مَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ",
          transliteration: "Maa khalaqa adh-dhakara wal-unthaa",
          meaning: "He who created male and female",
          explanation: "The Creator of complementary pairs: night/day, male/female, and similarly, two spiritual paths. Divine design includes diversity and choice.",
          verseRef: "92:3"
        }
      ]
    },

    diverseEfforts: {
      name: "The Diverse Human Efforts",
      nameArabic: "السعي المختلف",
      color: '#06B6D4',
      icon: 'Users',
      description: "The central thesis - human striving leads in different directions",
      concepts: [
        {
          term: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
          transliteration: "Inna sa'yakum la-shattaa",
          meaning: "Indeed, your efforts are diverse",
          explanation: "The key thesis after oaths: human efforts diverge fundamentally. Sa'y (striving) goes in opposite directions based on choices. Not all paths lead to the same destination.",
          verseRef: "92:4"
        }
      ]
    },

    pathOfGenerosity: {
      name: "The Path of Generosity",
      nameArabic: "طريق العطاء",
      color: '#10B981',
      icon: 'Heart',
      description: "Three qualities that lead to ease",
      concepts: [
        {
          term: "أَعْطَىٰ",
          transliteration: "A'taa",
          meaning: "He who gives",
          explanation: "First quality: generosity without limits. The verb is absolute (no object specified) - giving of wealth, time, self, knowledge, everything. Opposite of holding back.",
          verseRef: "92:5"
        },
        {
          term: "اتَّقَىٰ",
          transliteration: "Ittaqaa",
          meaning: "And fears Allah / is God-conscious",
          explanation: "Second quality: taqwa - protecting oneself through consciousness of Allah. Internal compass that guides external behavior.",
          verseRef: "92:5"
        },
        {
          term: "صَدَّقَ بِالْحُسْنَىٰ",
          transliteration: "Saddaqa bil-Husnaa",
          meaning: "And believes in the best",
          explanation: "Third quality: believing in al-Husnaa - the best reward, La ilaha illa Allah, Paradise, or all good from Allah. Faith driving action.",
          verseRef: "92:6"
        },
        {
          term: "فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ",
          transliteration: "Fa-sa-nuyassiruhu lil-Yusraa",
          meaning: "We will ease him toward ease",
          explanation: "Divine promise: those who give find giving easier. Ease compounds - good deeds become habitual, leading to eternal ease. Root يسر used twice for emphasis.",
          verseRef: "92:7"
        }
      ]
    },

    pathOfMiserliness: {
      name: "The Path of Miserliness",
      nameArabic: "طريق البخل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "Three qualities that lead to difficulty",
      concepts: [
        {
          term: "بَخِلَ",
          transliteration: "Bakhila",
          meaning: "He who withholds/is stingy",
          explanation: "First negative quality: withholding what should be given. Opposite of a'taa. Bukhl (miserliness) is not just with money but with kindness, help, and compassion.",
          verseRef: "92:8"
        },
        {
          term: "اسْتَغْنَىٰ",
          transliteration: "Istaghnaa",
          meaning: "And considers himself self-sufficient",
          explanation: "Second negative quality: feeling independent of Allah and others. Form X indicates self-perception - considering oneself needless of guidance. The height of arrogance.",
          verseRef: "92:8"
        },
        {
          term: "كَذَّبَ بِالْحُسْنَىٰ",
          transliteration: "Kadhdhaba bil-Husnaa",
          meaning: "And denies the best",
          explanation: "Third negative quality: actively calling truth a lie. Not passive disbelief but active rejection. Form II intensifies - deliberately choosing to deny.",
          verseRef: "92:9"
        },
        {
          term: "فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ",
          transliteration: "Fa-sa-nuyassiruhu lil-'Usraa",
          meaning: "We will ease him toward difficulty",
          explanation: "Devastating irony: 'eased' toward hardship. Sin becomes easy, leading to permanent difficulty. The path of miserliness seems easy initially but leads to eternal hardship.",
          verseRef: "92:10"
        }
      ]
    },

    consequencesOfChoice: {
      name: "Consequences of Spiritual Choices",
      nameArabic: "عواقب الاختيار الروحي",
      color: '#F59E0B',
      icon: 'Scale',
      description: "What happens to accumulated wealth and the divine response",
      concepts: [
        {
          term: "وَمَا يُغْنِي عَنْهُ مَالُهُ إِذَا تَرَدَّىٰ",
          transliteration: "Wa maa yughnee 'anhu maaluhu idhaa taraddaa",
          meaning: "His wealth will not avail him when he falls",
          explanation: "Poetic justice: He claimed to be ghaniy (rich/independent), but his maal (wealth) won't bring any ghinaa (benefit) when he taraddaa (falls into destruction). Wordplay emphasizes the futility.",
          verseRef: "92:11"
        },
        {
          term: "إِنَّ عَلَيْنَا لَلْهُدَىٰ",
          transliteration: "Inna 'alaynaa lal-Hudaa",
          meaning: "Indeed, upon Us is guidance",
          explanation: "Allah's responsibility is to show the path clearly. Both paths have been explained. Human responsibility is to choose. Guidance has been given; excuse has been removed.",
          verseRef: "92:12"
        },
        {
          term: "وَإِنَّ لَنَا لَلْآخِرَةَ وَالْأُولَىٰ",
          transliteration: "Wa inna lanaa lal-Aakhirata wal-Oolaa",
          meaning: "And to Us belongs the Hereafter and the first",
          explanation: "Allah owns both worlds completely. The miser's wealth is actually Allah's, temporarily loaned. Both worlds belong to Allah, so seeking His pleasure is the wisest investment.",
          verseRef: "92:13"
        }
      ]
    },

    fireAndWarning: {
      name: "The Blazing Fire",
      nameArabic: "النار المتلظية",
      color: '#EF4444',
      icon: 'Zap',
      description: "Warning about the fire and who enters it",
      concepts: [
        {
          term: "نَارًا تَلَظَّىٰ",
          transliteration: "Naaran taladhdhaa",
          meaning: "A fire blazing intensely",
          explanation: "The Fire described with onomatopoeia - taladhdhaa sounds like crackling flames. Indefinite 'naaran' emphasizes its indescribability. Continuous present tense = always burning.",
          verseRef: "92:14"
        },
        {
          term: "الْأَشْقَى",
          transliteration: "Al-Ashqaa",
          meaning: "The most wretched",
          explanation: "Superlative form - the worst possible outcome. The ashqaa is defined by two actions: kadhdhaba (denied) and tawalla (turned away). Ultimate spiritual failure.",
          verseRef: "92:15"
        },
        {
          term: "كَذَّبَ وَتَوَلَّىٰ",
          transliteration: "Kadhdhaba wa Tawallaa",
          meaning: "Denied and turned away",
          explanation: "Double rejection: verbal (kadhdhaba - calling truth a lie) and physical (tawalla - turning one's back). Complete rejection in word and deed.",
          verseRef: "92:16"
        }
      ]
    },

    theRighteous: {
      name: "The Most Righteous",
      nameArabic: "الأتقى",
      color: '#10B981',
      icon: 'Sparkles',
      description: "Description of the one saved from the Fire",
      concepts: [
        {
          term: "الْأَتْقَى",
          transliteration: "Al-Atqaa",
          meaning: "The most righteous/God-conscious",
          explanation: "Perfect antithesis to al-ashqaa. Superlative of muttaqi. Will be 'janaba' (kept to the side) from the Fire - actively protected by Allah.",
          verseRef: "92:17"
        },
        {
          term: "يُؤْتِي مَالَهُ يَتَزَكَّىٰ",
          transliteration: "Yu'tee maalahu yatazakkaa",
          meaning: "Gives his wealth to purify himself",
          explanation: "Continuous giving (present tense) for purification (tazakkaa). Same root as zakah - giving purifies AND grows. Not transaction but transformation.",
          verseRef: "92:18"
        },
        {
          term: "وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ",
          transliteration: "Wa maa li-ahadin 'indahu min ni'matin tujzaa",
          meaning: "No one has any favor upon him to be repaid",
          explanation: "Pure intention: he gives not to repay debts or earn favors. No worldly motive. His giving is unconditional, purely for Allah.",
          verseRef: "92:19"
        },
        {
          term: "إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ",
          transliteration: "Illa ibtighaa'a wajhi Rabbihi al-A'laa",
          meaning: "Only seeking the face of his Lord, Most High",
          explanation: "The highest motive: seeking Allah's wajh (pleasure/countenance). Not Paradise, not reward, but Allah Himself. Ibtighaa' (Form VIII) indicates earnest, devoted pursuit.",
          verseRef: "92:20"
        },
        {
          term: "وَلَسَوْفَ يَرْضَىٰ",
          transliteration: "Wa la-sawfa yardaa",
          meaning: "And he will surely be satisfied",
          explanation: "Triple-emphatic future promise. He sought Allah's pleasure (wajh), he will receive satisfaction (ridaa). Perfect circle: sought wajh, receives ridaa. Complete fulfillment.",
          verseRef: "92:21"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الليل يغشى",
      to: "النهار تجلى",
      type: "contrast",
      description: "Night covering vs Day manifesting",
      explanation: "Cosmic opposites representing spiritual states: darkness of denial vs light of faith"
    },
    {
      from: "أعطى",
      to: "بخل",
      type: "antithesis",
      description: "Giving vs Withholding",
      explanation: "First quality of each path - fundamental choice between generosity and miserliness"
    },
    {
      from: "اتقى",
      to: "استغنى",
      type: "antithesis",
      description: "God-consciousness vs Self-sufficiency",
      explanation: "Second quality: humility before Allah vs arrogance of independence"
    },
    {
      from: "صدق بالحسنى",
      to: "كذب بالحسنى",
      type: "antithesis",
      description: "Believed in the best vs Denied the best",
      explanation: "Third quality: faith vs rejection of truth"
    },
    {
      from: "اليسرى",
      to: "العسرى",
      type: "antithesis",
      description: "Path of ease vs Path of difficulty",
      explanation: "Outcomes: ease leading to more ease vs hardship leading to more hardship"
    },
    {
      from: "الأشقى",
      to: "الأتقى",
      type: "antithesis",
      description: "Most wretched vs Most righteous",
      explanation: "Ultimate spiritual outcomes: worst of creation vs best of creation"
    },
    {
      from: "يتزكى",
      to: "يرضى",
      type: "causation",
      description: "Purification leads to satisfaction",
      explanation: "Giving for purification leads to eternal satisfaction from Allah"
    },
    {
      from: "وجه ربه",
      to: "يرضى",
      type: "reciprocity",
      description: "Seeking Allah's pleasure brings satisfaction",
      explanation: "Seeking Allah's wajh results in receiving ridaa - divine reciprocity"
    }
  ],

  thematicFlow: {
    title: "Two Paths, Two Destinations",
    titleArabic: "طريقان ومصيران",
    stages: [
      {
        stage: 1,
        theme: "The Cosmic Oaths",
        verses: "92:1-3",
        description: "Night and day represent two states; male and female represent divine design of pairs"
      },
      {
        stage: 2,
        theme: "The Central Thesis",
        verses: "92:4",
        description: "Human efforts diverge - not all paths lead to the same destination"
      },
      {
        stage: 3,
        theme: "The Path of Generosity",
        verses: "92:5-7",
        description: "Giving + Taqwa + Belief = Ease upon ease"
      },
      {
        stage: 4,
        theme: "The Path of Miserliness",
        verses: "92:8-11",
        description: "Withholding + Arrogance + Denial = Hardship, wealth useless at the fall"
      },
      {
        stage: 5,
        theme: "Divine Ownership and Warning",
        verses: "92:12-16",
        description: "Allah owns both worlds, warns of Fire for the most wretched"
      },
      {
        stage: 6,
        theme: "Portrait of the Righteous",
        verses: "92:17-21",
        description: "The atqaa gives purely for Allah's pleasure and will be satisfied"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 93,
        name: "Ad-Duha",
        relation: "Thematic pair - both address paths to success",
        sharedTheme: "Divine guidance, giving, and satisfaction"
      },
      {
        surah: 94,
        name: "Ash-Sharh",
        relation: "With hardship comes ease",
        sharedTheme: "Ease (yusraa) concept appears in both"
      },
      {
        surah: 103,
        name: "Al-Asr",
        relation: "Two paths theme",
        sharedTheme: "Faith and righteous deeds save from loss"
      },
      {
        surah: 89,
        name: "Al-Fajr",
        verses: "15-20",
        relation: "Wealth and stinginess",
        sharedTheme: "Man's relationship with wealth and giving"
      },
      {
        surah: 107,
        name: "Al-Ma'un",
        relation: "Those who deny religion",
        sharedTheme: "Characteristics of deniers: prevent small kindnesses"
      }
    ]
  },

  hadith: [
    {
      arabic: "يدُ اللهِ مَلْأى لا يَغِيضُها نَفَقَة",
      english: "Allah's Hand is full; spending does not decrease it",
      source: "Bukhari & Muslim",
      relevance: "Giving doesn't deplete - connects to yatazakkaa (purification through giving)"
    },
    {
      arabic: "مَا نَقَصَتْ صَدَقَةٌ مِن مَال",
      english: "Charity does not decrease wealth",
      source: "Muslim",
      relevance: "The one who gives is eased to more ease; giving increases, not decreases"
    },
    {
      arabic: "اتَّقِ اللهَ حَيثُما كُنتَ",
      english: "Fear Allah wherever you are",
      source: "Tirmidhi",
      relevance: "Taqwa in all circumstances - the quality of al-atqaa"
    }
  ],

  practicalApplication: {
    title: "Living by Al-Layl",
    applications: [
      {
        principle: "Choose giving over withholding",
        how: "When you feel the urge to hold back (time, money, help), remember: a'taa leads to yusraa",
        verse: "92:5-7"
      },
      {
        principle: "Maintain God-consciousness",
        how: "Before major decisions, ask: Am I acting with taqwa or istighnaa (false independence)?",
        verse: "92:5, 92:8"
      },
      {
        principle: "Believe in the good outcome",
        how: "Trust that al-Husnaa is true - good awaits those who do good",
        verse: "92:6"
      },
      {
        principle: "Check your motives",
        how: "Give without expecting worldly return - seek only Allah's wajh",
        verse: "92:19-20"
      },
      {
        principle: "Know that ease compounds",
        how: "Start giving today; it becomes easier. Start withholding; generosity becomes harder",
        verse: "92:7, 92:10"
      },
      {
        principle: "Remember wealth is temporary",
        how: "Your wealth won't help at the moment of death (taraddaa). Invest it now in what lasts",
        verse: "92:11"
      }
    ]
  },

  uniqueInsight: {
    title: "The Economics of Spiritual Investment",
    insight: "Surah Al-Layl presents a profound economic principle: spending leads to increase, while hoarding leads to loss. The word 'yusra' (ease) is used twice in verse 7 - 'We will ease him toward ease' - creating a compounding effect. Conversely, the ironic 'We will ease him toward difficulty' shows how the path of miserliness, while seeming easier initially, leads to ever-increasing hardship. The surah ends with the ultimate transaction: the atqaa gives his wealth seeking only Allah's wajh (pleasure), and receives radaa (satisfaction). He traded temporary wealth for eternal satisfaction - the best possible investment. Notice the contrast with the miser: he kept his wealth but lost everything when he 'fell' (taraddaa). The one who gave everything will be completely satisfied; the one who kept everything will find his wealth useless.",
    modernRelevance: "In an age of accumulation and FOMO, this surah teaches that true security comes not from hoarding but from giving. The ease that comes from generosity is both spiritual (peace of heart) and practical (relationships, barakah). The miser may appear successful temporarily, but his path leads to 'usraa - difficulty in this life (anxiety about losing wealth) and the next."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Perfect Antithesis Structure",
        examples: "أعطى/بخل، اتقى/استغنى، صدق/كذب، يسرى/عسرى، الأشقى/الأتقى",
        effect: "Every positive quality has its perfect negative counterpart - binary clarity"
      },
      {
        feature: "Onomatopoeia",
        example: "تَلَظَّىٰ (taladhdhaa)",
        effect: "The word sounds like crackling fire - auditory imagery"
      },
      {
        feature: "Ironic Parallelism",
        example: "سَنُيَسِّرُهُ لِلْيُسْرَىٰ vs سَنُيَسِّرُهُ لِلْعُسْرَىٰ",
        effect: "Same verb structure, opposite destinations - devastating irony"
      },
      {
        feature: "Root Wordplay (غني)",
        example: "استغنى (considered himself rich) → يغني (will his wealth avail)",
        effect: "His claimed independence won't actually help him"
      },
      {
        feature: "Circular Completion",
        example: "Sought وجه (Allah's face) → Receives رضى (satisfaction)",
        effect: "Seeking leads to receiving - divine reciprocity"
      }
    ]
  },

  comparisonTable: {
    title: "The Two Paths Compared",
    headers: ["Aspect", "Path of Generosity", "Path of Miserliness"],
    rows: [
      {
        aspect: "First Quality",
        generosity: "أَعْطَىٰ (gives)",
        miserliness: "بَخِلَ (withholds)"
      },
      {
        aspect: "Second Quality",
        generosity: "اتَّقَىٰ (fears Allah)",
        miserliness: "اسْتَغْنَىٰ (considers self-sufficient)"
      },
      {
        aspect: "Third Quality",
        generosity: "صَدَّقَ بِالْحُسْنَىٰ (believes in best)",
        miserliness: "كَذَّبَ بِالْحُسْنَىٰ (denies the best)"
      },
      {
        aspect: "Result",
        generosity: "نُيَسِّرُهُ لِلْيُسْرَىٰ (eased to ease)",
        miserliness: "نُيَسِّرُهُ لِلْعُسْرَىٰ (eased to hardship)"
      },
      {
        aspect: "Description",
        generosity: "الْأَتْقَى (most righteous)",
        miserliness: "الْأَشْقَى (most wretched)"
      },
      {
        aspect: "Action Pattern",
        generosity: "يُؤْتِي مَالَهُ يَتَزَكَّىٰ (gives to purify)",
        miserliness: "كَذَّبَ وَتَوَلَّىٰ (denied and turned away)"
      },
      {
        aspect: "Motive",
        generosity: "ابْتِغَاءَ وَجْهِ رَبِّهِ (seeking Allah's pleasure)",
        miserliness: "None mentioned (worldly)"
      },
      {
        aspect: "Final Outcome",
        generosity: "يَرْضَىٰ (will be satisfied)",
        miserliness: "نَارًا تَلَظَّىٰ (blazing fire)"
      }
    ]
  },

  tripleEmphasis: {
    title: "Triple Emphatic Promise",
    verse: "وَلَسَوْفَ يَرْضَىٰ (92:21)",
    elements: [
      {
        element: "وَ (wa)",
        function: "Connective emphasis"
      },
      {
        element: "لَ (lam)",
        function: "Emphatic particle (لام التوكيد)"
      },
      {
        element: "سَوْفَ (sawfa)",
        function: "Future certainty particle"
      }
    ],
    meaning: "The strongest possible emphasis on a future promise in Arabic - absolute certainty that the righteous will be satisfied"
  }
};

export default ONTOLOGY;
