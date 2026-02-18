/**
 * Surah Az-Zalzalah (99) - Ontology of Quranic Concepts
 * The Earthquake
 * Theme: The final earthquake and perfect atomic-level justice
 */

export const ONTOLOGY = {
  surahId: 99,
  surahName: "Az-Zalzalah",
  surahNameArabic: "الزلزلة",
  revelationType: "Madani (some say Makki)",
  totalAyahs: 8,

  categories: {
    cosmicEvent: {
      name: "The Final Earthquake",
      nameArabic: "الزلزلة الكبرى",
      color: '#EF4444',
      icon: 'Globe',
      description: "The earth-shattering event marking the end",
      concepts: [
        {
          term: "زُلْزِلَت زِلْزَالَهَا",
          transliteration: "Zulzilat zilzaalahaa",
          meaning: "Shaken with ITS earthquake",
          explanation: "Cognate accusative emphasizes this is THE earthquake - earth's destined, final tremor. Not any earthquake, but the one it was created for.",
          verseRef: "99:1"
        },
        {
          term: "أَخْرَجَت أَثْقَالَهَا",
          transliteration: "Akhrajat athqaalahaa",
          meaning: "Expels its burdens",
          explanation: "Earth releases: dead bodies (resurrection), hidden treasures, recorded events. Everything concealed is brought forth.",
          verseRef: "99:2"
        }
      ]
    },

    earthAsWitness: {
      name: "Earth as Divine Witness",
      nameArabic: "الأرض شاهدة",
      color: '#06B6D4',
      icon: 'Eye',
      description: "The earth testifies about all that occurred on it",
      concepts: [
        {
          term: "تُحَدِّثُ أَخْبَارَهَا",
          transliteration: "Tuhaddith akhbaarahaa",
          meaning: "It will report its news",
          explanation: "Form II intensive - earth narrates in detail every event that occurred on it. Every sin, every good deed, every secret - earth witnessed and will testify.",
          verseRef: "99:4"
        },
        {
          term: "بِأَنَّ رَبَّك أَوْحَى لَهَا",
          transliteration: "Bi-anna Rabbaka awhaa lahaa",
          meaning: "Because your Lord commanded it",
          explanation: "Earth speaks by divine command - Allah instructs His creation to testify. Even inanimate objects obey.",
          verseRef: "99:5"
        }
      ]
    },

    humanScattering: {
      name: "Human Classification",
      nameArabic: "تصنيف البشر",
      color: '#8B5CF6',
      icon: 'Users',
      description: "People emerge separated by their deeds",
      concepts: [
        {
          term: "يَصْدُرُ النَّاسُ أَشْتَاتًا",
          transliteration: "Yasdur an-naas ashtaatan",
          meaning: "People proceed in scattered groups",
          explanation: "Humanity exits graves separated - not by race or wealth, but by deeds. Different destinations based on different records.",
          verseRef: "99:6"
        },
        {
          term: "لِيُرَوْا أَعْمَالَهُم",
          transliteration: "Li-yuraw a'maalahum",
          meaning: "To be shown their deeds",
          explanation: "Purpose: everyone sees their own record - nothing hidden, nothing forgotten.",
          verseRef: "99:6"
        }
      ]
    },

    atomicJustice: {
      name: "Atomic-Level Accountability",
      nameArabic: "حساب مثقال الذرة",
      color: '#F59E0B',
      icon: 'Scale',
      description: "Perfect justice down to the smallest deed",
      concepts: [
        {
          term: "مِثْقَال ذَرَّة خَيْرًا",
          transliteration: "Mithqaal dharrah khayran",
          meaning: "Atom's weight of good",
          explanation: "Even the tiniest good deed is recorded and rewarded. No kindness is too small to matter.",
          verseRef: "99:7"
        },
        {
          term: "مِثْقَال ذَرَّة شَرًّا",
          transliteration: "Mithqaal dharrah sharran",
          meaning: "Atom's weight of evil",
          explanation: "Even the smallest sin is recorded. No wrong escapes accountability.",
          verseRef: "99:8"
        },
        {
          term: "يَرَهُ",
          transliteration: "Yarahu",
          meaning: "Will see it",
          explanation: "The person SEES their deed - transformed into reward or punishment, the deed is witnessed.",
          verseRef: "99:7-8"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الزلزلة",
      to: "أثقال",
      type: "causation",
      description: "Earthquake causes burdens to emerge",
      explanation: "The shaking forces earth to release everything hidden"
    },
    {
      from: "أخبارها",
      to: "أوحى لها",
      type: "enablement",
      description: "Divine command enables earth's testimony",
      explanation: "Earth speaks because Allah commanded it"
    },
    {
      from: "أشتاتا",
      to: "ليروا أعمالهم",
      type: "purpose",
      description: "Separation is for showing deeds",
      explanation: "Groups form based on what will be shown"
    },
    {
      from: "مثقال ذرة خير",
      to: "مثقال ذرة شر",
      type: "parallel",
      description: "Perfect symmetry of justice",
      explanation: "Same standard for good and evil - complete fairness"
    }
  ],

  thematicFlow: {
    title: "From Earthquake to Accountability",
    titleArabic: "من الزلزلة إلى الحساب",
    description: "The surah moves from cosmic event to individual reckoning",
    stages: [
      {
        stage: 1,
        theme: "The Event",
        verses: "99:1-2",
        description: "Earth shakes and expels its burdens"
      },
      {
        stage: 2,
        theme: "Human Reaction",
        verses: "99:3",
        description: "Human confusion at the event"
      },
      {
        stage: 3,
        theme: "Earth's Testimony",
        verses: "99:4-5",
        description: "Earth reports by divine command"
      },
      {
        stage: 4,
        theme: "Human Separation",
        verses: "99:6",
        description: "People emerge in groups to see deeds"
      },
      {
        stage: 5,
        theme: "Perfect Justice",
        verses: "99:7-8",
        description: "Atomic-level accountability"
      }
    ]
  },

  theAtomVerses: {
    title: "The Atom Verses (7-8)",
    significance: "Among the most memorized and quoted verses in the Quran",
    details: [
      {
        aspect: "Universal Principle",
        description: "Establishes that NO deed is insignificant - every action matters"
      },
      {
        aspect: "Perfect Symmetry",
        description: "Identical structure for good and evil shows equal, fair treatment"
      },
      {
        aspect: "ذَرَّة (Atom)",
        description: "Smallest conceivable particle - now understood as 'atom' in Arabic"
      },
      {
        aspect: "يَرَهُ (Will See It)",
        description: "Active seeing - the person witnesses their deed in transformed form"
      }
    ],
    modernRelevance: "In an age of 'small sins don't matter', these verses remind that everything counts"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 81,
        name: "At-Takwir",
        relation: "Detailed cosmic signs of Judgment Day",
        sharedTheme: "End times description"
      },
      {
        surah: 82,
        name: "Al-Infitar",
        relation: "Sky splits, seas burst, graves overturned",
        sharedTheme: "Cosmic destruction"
      },
      {
        surah: 101,
        name: "Al-Qari'ah",
        relation: "Another name for Judgment Day, also mentions scales",
        sharedTheme: "Day of Judgment"
      },
      {
        surah: 21,
        name: "Al-Anbiya",
        verse: 47,
        relation: "'We place scales of justice for the Day of Resurrection'",
        sharedTheme: "Scales and atomic justice"
      }
    ]
  },

  hadith: [
    {
      arabic: "إن هذه الآية أجمع آية للخير والشر: فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
      english: "This verse is the most comprehensive regarding good and evil",
      source: "Various Tafseer",
      relevance: "Shows the foundational importance of verses 7-8"
    },
    {
      arabic: "اتقوا النار ولو بشق تمرة",
      english: "Fear the Fire even if with half a date (given in charity)",
      source: "Sahih Bukhari & Muslim",
      relevance: "Illustrates that even tiny good deeds matter"
    },
    {
      arabic: "لا تحقرن من المعروف شيئاً",
      english: "Do not belittle any good deed",
      source: "Sahih Muslim",
      relevance: "Direct application of verse 7"
    }
  ],

  practicalApplication: {
    title: "Living by the Atom Verses",
    applications: [
      {
        principle: "No good is too small",
        example: "A smile, a kind word, picking up litter",
        verse: "99:7"
      },
      {
        principle: "No sin is 'minor'",
        example: "A glance, a whisper, a small lie",
        verse: "99:8"
      },
      {
        principle: "Earth records everything",
        example: "Be mindful of actions even when alone",
        verse: "99:4"
      },
      {
        principle: "Deeds will be seen",
        example: "Act as if you'll watch a replay of your life",
        verse: "99:6"
      }
    ]
  },

  uniqueInsight: {
    title: "The Earth's Memory",
    insight: "This surah reveals that the earth is not merely passive ground - it's a divine recording device. Every footstep toward sin or prayer, every secret meeting, every hidden act of kindness or cruelty - earth remembers. And on Judgment Day, by Allah's command, it will testify. The most private sins and the most hidden charities will be announced by the very ground they occurred upon. This transforms how we understand privacy and accountability.",
    modernRelevance: "In an age of surveillance and digital footprints, this surah anticipated that nothing is truly private. But unlike human surveillance, divine recording is perfect, just, and for ultimate accountability."
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        feature: "Onomatopoeia",
        example: "زُلْزِلَت - sounds like shaking",
        effect: "You hear the earthquake in the word"
      },
      {
        feature: "Cognate Accusative",
        example: "زُلْزِلَت زِلْزَالَهَا",
        effect: "Emphasizes THE earthquake - earth's destined end"
      },
      {
        feature: "Perfect Parallelism",
        example: "Verses 7 and 8 mirror exactly except خَيْر/شَرّ",
        effect: "Visual and auditory balance = perfect justice"
      },
      {
        feature: "Feminine Earth",
        example: "All pronouns referring to earth are feminine",
        effect: "Earth portrayed as responsive, obedient creation"
      }
    ]
  },

  comparisonTable: {
    title: "What Emerges from Earth",
    headers: ["Item", "Interpretation", "Verse"],
    rows: [
      {
        item: "أَثْقَالَهَا (burdens)",
        interpretation: "Dead bodies for resurrection",
        verse: "99:2"
      },
      {
        item: "أَثْقَالَهَا",
        interpretation: "Hidden treasures people hoarded",
        verse: "99:2"
      },
      {
        item: "أَخْبَارَهَا (news)",
        interpretation: "All recorded events",
        verse: "99:4"
      },
      {
        item: "أَعْمَالَهُم (deeds)",
        interpretation: "Individual actions shown",
        verse: "99:6"
      },
      {
        item: "مِثْقَال ذَرَّة",
        interpretation: "Smallest particle of deed",
        verse: "99:7-8"
      }
    ]
  }
};

export default ONTOLOGY;
