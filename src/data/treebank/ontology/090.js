/**
 * Surah Al-Balad (90) - Ontology of Quranic Concepts
 * The City
 * Theme: Human struggle, the steep path of good deeds, two paths to success or failure
 */

export const ONTOLOGY = {
  surahId: 90,
  surahName: "Al-Balad",
  surahNameArabic: "البلد",
  revelationType: "Makki",
  totalAyahs: 20,

  categories: {
    sacredOaths: {
      name: "The Sacred Oaths",
      nameArabic: "القسم المقدس",
      color: '#8B5CF6',
      icon: 'Star',
      description: "Allah swears by the city (Makkah), the Prophet's presence in it, and parenthood",
      concepts: [
        {
          term: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ",
          transliteration: "Laa Uqsimu bi-haadhal-Balad",
          meaning: "I do swear by this city",
          explanation: "Emphatic oath by Makkah, the sacred city. 'Laa uqsimu' is not negation but emphatic affirmation - 'I DO swear'. The city's sanctity is the basis of the oath.",
          verseRef: "90:1"
        },
        {
          term: "وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ",
          transliteration: "Wa-anta hillun bi-haadhal-Balad",
          meaning: "And you are free of restriction in this city",
          explanation: "The Prophet ﷺ is 'hill' - his enemies have made his blood permissible (persecution), OR prophecy of conquest when fighting becomes permitted. His presence elevates the city's honor.",
          verseRef: "90:2"
        },
        {
          term: "وَوَالِدٍ وَمَا وَلَدَ",
          transliteration: "Wa-waalidin wa maa walad",
          meaning: "And by the father and what he begot",
          explanation: "Oath by parent-child relationship - Adam and humanity, Ibrahim and his descendants, or universally any parent and child. Foundation of human continuity.",
          verseRef: "90:3"
        }
      ]
    },

    humanNature: {
      name: "Human Nature and Struggle",
      nameArabic: "طبيعة الإنسان وكفاحه",
      color: '#06B6D4',
      icon: 'Users',
      description: "The fundamental reality of human existence: created in struggle",
      concepts: [
        {
          term: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ",
          transliteration: "Laqad khalaqnal-Insaana fee kabad",
          meaning: "We have certainly created man in hardship/struggle",
          explanation: "The central thesis after the oaths. Kabad = hardship, struggle, toil. Life IS struggle - from birth's pain to death's journey. This is not punishment but design.",
          verseRef: "90:4"
        },
        {
          term: "كَبَد",
          transliteration: "Kabad",
          meaning: "Hardship/struggle (also: liver)",
          explanation: "Unique word meaning hardship. Also means 'liver' - the organ of endurance, constantly working. Life is lived 'in the liver' of struggle. Rare Quranic term emphasizing the depth of this truth.",
          verseRef: "90:4"
        }
      ]
    },

    humanArrogance: {
      name: "Human Arrogance",
      nameArabic: "غرور الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "The false assumptions of the arrogant person",
      concepts: [
        {
          term: "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",
          transliteration: "A-yahsabu an lan yaqdira 'alayhi ahad",
          meaning: "Does he think no one can overcome him?",
          explanation: "Rhetorical question exposing human delusion. The wealthy, powerful person thinks he's invincible. But Allah has ultimate power.",
          verseRef: "90:5"
        },
        {
          term: "أَهْلَكْتُ مَالًا لُّبَدًا",
          transliteration: "Ahlaktu maalan lubada",
          meaning: "I have spent wealth in abundance",
          explanation: "Boastful claim. 'Ahlaktu' (I destroyed) for spending shows wasteful attitude. 'Lubadan' = heaps of wealth. Boasting about quantity, not quality of spending.",
          verseRef: "90:6"
        },
        {
          term: "أَيَحْسَبُ أَن لَّمْ يَرَهُ أَحَدٌ",
          transliteration: "A-yahsabu an lam yarahu ahad",
          meaning: "Does he think no one has seen him?",
          explanation: "Second rhetorical question. Does he think Allah doesn't see his spending? His motives? Whether it was for good or show? Allah sees all.",
          verseRef: "90:7"
        }
      ]
    },

    divineBlessings: {
      name: "Divine Blessings and Guidance",
      nameArabic: "النعم الإلهية والهداية",
      color: '#F59E0B',
      icon: 'Sparkles',
      description: "The gifts Allah gave humanity: senses and guidance between two paths",
      concepts: [
        {
          term: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ",
          transliteration: "Alam naj'al lahu 'aynayn",
          meaning: "Have We not made for him two eyes",
          explanation: "First blessing: sight - to see physical and spiritual truth. Eyes to recognize right from wrong, beauty from ugliness.",
          verseRef: "90:8"
        },
        {
          term: "وَلِسَانًا وَشَفَتَيْنِ",
          transliteration: "Wa-lisaanan wa shafatayn",
          meaning: "And a tongue and two lips",
          explanation: "Second blessing: speech - to articulate truth, communicate, praise Allah, advise others. Tools for expressing what the eyes see.",
          verseRef: "90:9"
        },
        {
          term: "وَهَدَيْنَاهُ النَّجْدَيْنِ",
          transliteration: "Wa-hadaynaahun-najdayn",
          meaning: "And shown him the two ways",
          explanation: "Third blessing: moral guidance. Najd = elevated clear path. Two najds: path of good and path of evil. Allah showed both clearly - choice is ours.",
          verseRef: "90:10"
        }
      ]
    },

    steepPath: {
      name: "The Steep Path ('Aqabah)",
      nameArabic: "العقبة",
      color: '#3B82F6',
      icon: 'Compass',
      description: "The difficult but rewarding path of righteousness",
      concepts: [
        {
          term: "فَلَا اقْتَحَمَ الْعَقَبَةَ",
          transliteration: "Fa-laq-tahamal-'aqabah",
          meaning: "But he has not attempted the steep path",
          explanation: "Central metaphor. 'Aqabah = steep mountain pass, difficult to climb. Despite blessings, he didn't take the challenging path of righteousness. Iqtahama = to plunge in with effort.",
          verseRef: "90:11"
        },
        {
          term: "فَكُّ رَقَبَةٍ",
          transliteration: "Fakku raqabah",
          meaning: "Freeing a slave",
          explanation: "First component of 'aqabah: liberation. Fakk = untying bonds. Raqabah = neck (idiom for slave). Freeing others from bondage - physical and metaphorical.",
          verseRef: "90:13"
        },
        {
          term: "إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ",
          transliteration: "It'aamun fee yawmin dhee masghabah",
          meaning: "Feeding on a day of severe hunger",
          explanation: "Second component: feeding the hungry. Specifically during masghabah (severe hunger/famine). Helping when it's hardest and most needed.",
          verseRef: "90:14"
        },
        {
          term: "يَتِيمًا ذَا مَقْرَبَةٍ",
          transliteration: "Yateeman dhaa maqrabah",
          meaning: "An orphan of near relationship",
          explanation: "Who to feed: relative orphans first. Double responsibility - blood relation plus vulnerability. Prioritizing those with rightful claims.",
          verseRef: "90:15"
        },
        {
          term: "مِسْكِينًا ذَا مَتْرَبَةٍ",
          transliteration: "Miskeenan dhaa matrabah",
          meaning: "A poor person lying in dust",
          explanation: "Also feed: the destitute poor. Matrabah = covered in dust from lying on ground. Extreme poverty, homeless, utterly destitute.",
          verseRef: "90:16"
        }
      ]
    },

    spiritualCommunity: {
      name: "The Spiritual Community",
      nameArabic: "المجتمع الروحي",
      color: '#10B981',
      icon: 'Heart',
      description: "Beyond individual deeds: faith and mutual encouragement",
      concepts: [
        {
          term: "ثُمَّ كَانَ مِنَ الَّذِينَ آمَنُوا",
          transliteration: "Thumma kaana minal-ladheena aamanoo",
          meaning: "Then he was of those who believed",
          explanation: "Deeds must be coupled with faith. 'Thumma' (then/moreover) indicates this is essential addition. Without iman, deeds don't complete the 'aqabah.",
          verseRef: "90:17"
        },
        {
          term: "تَوَاصَوْا بِالصَّبْرِ",
          transliteration: "Tawaasau bis-sabr",
          meaning: "Advised each other to patience",
          explanation: "First mutual advice: patience. Form VI = reciprocal - they advise EACH OTHER. Community of mutual strengthening. Sabr for the 'aqabah's difficulty.",
          verseRef: "90:17"
        },
        {
          term: "تَوَاصَوْا بِالْمَرْحَمَةِ",
          transliteration: "Tawaasau bil-marhamah",
          meaning: "Advised each other to mercy",
          explanation: "Second mutual advice: mercy/compassion. Balance of sabr (strength) and marhamah (tenderness). Internal resilience + external compassion.",
          verseRef: "90:17"
        }
      ]
    },

    twoDestinies: {
      name: "The Two Destinies",
      nameArabic: "المصيران",
      color: '#EC4899',
      icon: 'Scale',
      description: "Ultimate outcomes for the two groups",
      concepts: [
        {
          term: "أَصْحَابُ الْمَيْمَنَةِ",
          transliteration: "As-haabul-Maymanah",
          meaning: "Companions of the right",
          explanation: "Those who took the 'aqabah. Maymanah = right side, also blessing/good fortune. Same root as Yemen (blessed land). The successful, blessed group.",
          verseRef: "90:18"
        },
        {
          term: "أَصْحَابُ الْمَشْأَمَةِ",
          transliteration: "As-haabul-Mash'amah",
          meaning: "Companions of the left",
          explanation: "Those who disbelieved in Allah's signs. Mash'amah = left side, ill-fortune. Same root as Shaam (direction left from Hijaz). The cursed, unsuccessful group.",
          verseRef: "90:19"
        },
        {
          term: "نَارٌ مُّؤْصَدَةٌ",
          transliteration: "Naarun Mu'sadah",
          meaning: "Fire sealed over them",
          explanation: "Final fate of the left. The Fire is mu'sadah = locked, sealed, no exit. Permanent, inescapable confinement. Terrifying conclusion.",
          verseRef: "90:20"
        }
      ]
    }
  },

  relationships: [
    {
      from: "البلد",
      to: "حل",
      type: "elevation",
      description: "City honored by Prophet's presence",
      explanation: "The city is sworn by because the Prophet ﷺ is in it - his presence elevates its status"
    },
    {
      from: "كبد",
      to: "العقبة",
      type: "parallel",
      description: "Life is struggle, 'aqabah is struggle",
      explanation: "Since life is inherently difficult (kabad), the steep path ('aqabah) aligns with human nature"
    },
    {
      from: "عينين، لسان، شفتين",
      to: "النجدين",
      type: "progression",
      description: "Tools lead to choice",
      explanation: "Eyes to see, tongue to speak, then guidance to both paths - equipped for the choice"
    },
    {
      from: "فك رقبة",
      to: "إطعام",
      type: "components",
      description: "Two forms of liberation",
      explanation: "Freeing slaves liberates bodies, feeding hungry liberates from desperation - both are 'aqabah"
    },
    {
      from: "صبر",
      to: "مرحمة",
      type: "balance",
      description: "Internal strength + external compassion",
      explanation: "Mutual advice includes both: sabr (resilience within) and marhamah (mercy toward others)"
    },
    {
      from: "الميمنة",
      to: "المشأمة",
      type: "antithesis",
      description: "Right (blessed) vs Left (cursed)",
      explanation: "Perfect opposites: those who took 'aqabah vs those who refused"
    }
  ],

  thematicFlow: {
    title: "From Struggle to Choice to Destiny",
    titleArabic: "من الكفاح إلى الاختيار إلى المصير",
    stages: [
      {
        stage: 1,
        theme: "Sacred Oaths",
        verses: "90:1-3",
        description: "Allah swears by Makkah, the Prophet's presence, and parenthood"
      },
      {
        stage: 2,
        theme: "Human Nature",
        verses: "90:4",
        description: "Central truth: humans are created in struggle (kabad)"
      },
      {
        stage: 3,
        theme: "Human Arrogance",
        verses: "90:5-7",
        description: "The arrogant person thinks he's invincible and unseen"
      },
      {
        stage: 4,
        theme: "Divine Gifts",
        verses: "90:8-10",
        description: "Eyes, tongue, lips, and guidance to two paths"
      },
      {
        stage: 5,
        theme: "The Steep Path",
        verses: "90:11-16",
        description: "The 'aqabah: freeing slaves, feeding hungry orphans and poor"
      },
      {
        stage: 6,
        theme: "Spiritual Community",
        verses: "90:17",
        description: "Faith + mutual encouragement to patience and mercy"
      },
      {
        stage: 7,
        theme: "Two Destinies",
        verses: "90:18-20",
        description: "Companions of right (blessed) vs left (sealed in Fire)"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 91,
        name: "Ash-Shams",
        relation: "Soul purification theme",
        sharedTheme: "Success through purification vs failure through corruption"
      },
      {
        surah: 92,
        name: "Al-Layl",
        relation: "Two paths theme",
        sharedTheme: "Giving vs withholding, ease vs hardship"
      },
      {
        surah: 103,
        name: "Al-Asr",
        relation: "Mutual advice",
        sharedTheme: "Tawaasi bil-haqq wa bil-sabr - advising to truth and patience"
      },
      {
        surah: 107,
        name: "Al-Ma'un",
        relation: "Feeding the poor",
        sharedTheme: "Those who don't encourage feeding the miskeen"
      },
      {
        surah: 56,
        name: "Al-Waqi'ah",
        verses: "8-9, 27-40, 41-56",
        relation: "Companions of right and left",
        sharedTheme: "As-habul-maymanah vs as-habul-mash'amah"
      }
    ]
  },

  hadith: [
    {
      arabic: "مَا مِنْكُمْ أَحَدٌ إِلَّا سَيُكَلِّمُهُ رَبُّهُ لَيْسَ بَيْنَهُ وَبَيْنَهُ تُرْجُمَانٌ",
      english: "There is none among you but his Lord will speak to him without an interpreter",
      source: "Bukhari",
      relevance: "Allah sees all - answers the question 'does he think no one sees him?'"
    },
    {
      arabic: "مَنْ أَعْتَقَ رَقَبَةً مُسْلِمَةً أَعْتَقَ اللَّهُ بِكُلِّ عُضْوٍ مِنْهَا عُضْوًا مِنْهُ مِنَ النَّارِ",
      english: "Whoever frees a Muslim slave, Allah will free from Fire a limb for every limb of that slave",
      source: "Bukhari & Muslim",
      relevance: "Reward for 'fakku raqabah' - freeing a slave"
    },
    {
      arabic: "لَيْسَ الْمُؤْمِنُ بِالَّذِي يَشْبَعُ وَجَارُهُ جَائِعٌ إِلَى جَنْبِهِ",
      english: "A believer is not one who eats while his neighbor is hungry beside him",
      source: "Authenticated by Al-Albani",
      relevance: "Feeding the hungry - component of 'aqabah"
    }
  ],

  practicalApplication: {
    title: "Living by Al-Balad",
    applications: [
      {
        principle: "Accept that life is struggle",
        how: "Don't expect ease; expect kabad. Struggle is not punishment but design. This mindset transforms how you face challenges",
        verse: "90:4"
      },
      {
        principle: "Remember Allah sees all",
        how: "Before spending or acting, remember: 'Allah sees me.' This transforms your spending from show to sincerity",
        verse: "90:7"
      },
      {
        principle: "Use your gifts for guidance",
        how: "Eyes, tongue, lips - use them to see truth, speak truth, and choose the right path",
        verse: "90:8-10"
      },
      {
        principle: "Take the steep path",
        how: "The 'aqabah is hard but rewarding. Free people from bondage, feed the hungry - actively do difficult good",
        verse: "90:11-16"
      },
      {
        principle: "Prioritize vulnerable relatives",
        how: "Orphan relatives have double claim - blood and need. Check on vulnerable family members first",
        verse: "90:15"
      },
      {
        principle: "Help the utterly destitute",
        how: "Miskeen dhaa matrabah - those covered in dust. Seek out the most desperate, not just convenient charity",
        verse: "90:16"
      },
      {
        principle: "Build community of mutual support",
        how: "Tawaasau - advise each other. Don't journey alone. Encourage others to patience and mercy",
        verse: "90:17"
      }
    ]
  },

  uniqueInsight: {
    title: "The 'Aqabah Formula for Success",
    insight: "This surah provides a comprehensive formula for success. First, it establishes the reality: life is kabad (struggle). Since struggle is inherent, the question isn't whether to struggle but WHAT to struggle for. The arrogant person wastes his struggle on accumulation and show. The wise person channels struggle toward the 'aqabah. The 'aqabah has three dimensions: (1) LIBERATION - freeing others from bondage (physical, financial, social), (2) SUSTENANCE - feeding the hungry during hardship, prioritizing orphan relatives and the utterly destitute, (3) COMMUNITY - being among believers who mutually encourage patience (for the difficulty) and mercy (for others). Notice 'aqabah literally means steep pass - it's supposed to be hard. The surah doesn't promise the path will be easy, only that it leads to being 'as-habul-maymanah' (people of blessing). The alternative is 'as-habul-mash'amah' with Fire 'mu'sadah' (sealed over them). The seal imagery is terrifying - not just Fire, but Fire with no exit, permanently locked.",
    modernRelevance: "In a world obsessed with ease and shortcuts, this surah reminds us that meaningful achievement requires struggle. The 'aqabah today might be: standing up for the oppressed (modern slavery exists), feeding food banks during economic hardship, supporting refugee orphans, helping homeless neighbors. The mutual encouragement to sabr and marhamah is essentially a support group - community that reinforces values."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Emphatic 'Laa Uqsimu'",
        example: "لَا أُقْسِمُ (Laa Uqsimu)",
        effect: "Paradoxical: 'no' + 'I swear' = emphatic oath. Strongest form of swearing"
      },
      {
        feature: "Unique Word Kabad",
        example: "كَبَد (kabad)",
        effect: "Appears only here. Means both 'hardship' and 'liver' - organ of endurance"
      },
      {
        feature: "Iqtahama - Reflexive Effort",
        example: "اقْتَحَمَ (iqtahama)",
        effect: "Form VIII = self-initiated plunging. The 'aqabah requires active, voluntary effort"
      },
      {
        feature: "Unique Masghabah and Matrabah",
        example: "مَسْغَبَة (masghabah), مَتْرَبَة (matrabah)",
        effect: "Both unique to this surah. Vivid poverty imagery: severe hunger, dust-covered"
      },
      {
        feature: "Tawaasau - Reciprocal Form",
        example: "تَوَاصَوْا (tawaasau)",
        effect: "Form VI = mutual action. Not one-way preaching but community support"
      },
      {
        feature: "Maymanah / Mash'amah Contrast",
        example: "الْمَيْمَنَة vs الْمَشْأَمَة",
        effect: "Right/blessing vs Left/curse - same pattern, opposite destinies"
      }
    ]
  },

  comparisonTable: {
    title: "The Two Groups Compared",
    headers: ["Aspect", "Companions of Right", "Companions of Left"],
    rows: [
      {
        aspect: "Title",
        right: "أَصْحَابُ الْمَيْمَنَةِ",
        left: "أَصْحَابُ الْمَشْأَمَةِ"
      },
      {
        aspect: "Meaning",
        right: "People of blessing/right",
        left: "People of ill-fortune/left"
      },
      {
        aspect: "Choice",
        right: "Took the 'aqabah (steep path)",
        left: "Refused the 'aqabah"
      },
      {
        aspect: "Actions",
        right: "Freed slaves, fed hungry",
        left: "Boasted about spending"
      },
      {
        aspect: "Faith",
        right: "Among the believers",
        left: "Disbelieved in signs"
      },
      {
        aspect: "Community",
        right: "Advised patience and mercy",
        left: "No mutual support mentioned"
      },
      {
        aspect: "Destiny",
        right: "Implied: Paradise",
        left: "نَارٌ مُّؤْصَدَةٌ (sealed Fire)"
      }
    ]
  },

  aqabahComponents: {
    title: "Components of the Steep Path",
    components: [
      {
        component: "فَكُّ رَقَبَةٍ",
        action: "Freeing a slave/neck",
        modern: "Fighting human trafficking, paying off debts, freeing people from bondage"
      },
      {
        component: "إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ",
        action: "Feeding during severe hunger",
        modern: "Food banks during crises, helping during famine, disaster relief"
      },
      {
        component: "يَتِيمًا ذَا مَقْرَبَةٍ",
        action: "Feeding orphan relatives",
        modern: "Caring for orphaned nieces/nephews, extended family support"
      },
      {
        component: "مِسْكِينًا ذَا مَتْرَبَةٍ",
        action: "Feeding the utterly destitute",
        modern: "Helping homeless, refugees, those with nothing"
      },
      {
        component: "كَانَ مِنَ الَّذِينَ آمَنُوا",
        action: "Being among believers",
        modern: "Faith community, masjid attendance, Islamic companionship"
      },
      {
        component: "تَوَاصَوْا بِالصَّبْرِ",
        action: "Mutual encouragement to patience",
        modern: "Support groups, mentorship, community counseling"
      },
      {
        component: "تَوَاصَوْا بِالْمَرْحَمَةِ",
        action: "Mutual encouragement to mercy",
        modern: "Compassion training, mercy-based activism, kindness campaigns"
      }
    ]
  }
};

export default ONTOLOGY;
