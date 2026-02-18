/**
 * Surah Ar-Rahman (The Most Merciful) - Surah 55
 * Ontology of Quranic Concepts and Relationships
 *
 * Theme: Allah's infinite mercy manifested through countless blessings
 * Unique Feature: 31 repetitions of "Which favors will you deny?"
 * Known as: "The Bride of the Quran" (Arus al-Quran)
 */

export const ONTOLOGY = {
  surahId: 55,
  surahName: "Ar-Rahman",
  surahNameArabic: "الرحمن",
  totalAyahs: 78,
  revelationType: "Medinan",
  mainTheme: "Divine Mercy Manifested Through Countless Blessings",

  uniquePoeticStructure: {
    refrain: {
      arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      transliteration: "Fabi-ayyi ala'i Rabbikuma tukazziban",
      meaning: "So which of the favors of your Lord will you deny?",
      totalRepetitions: 31,
      ayahsWithRefrain: [13, 16, 18, 21, 23, 25, 28, 30, 32, 34, 36, 38, 40, 42, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77],
      rhetoricalPurpose: "Each repetition challenges jinn and humans to acknowledge blessings; the dual form 'kuma' addresses both species together",
      linguisticNote: "The word آلَاء (ala') is plural of إلى (ily) meaning favors/blessings - a rare plural form emphasizing abundance"
    },
    dualAddress: {
      arabic: "يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ",
      meaning: "O assembly of jinn and mankind",
      note: "Entire surah addresses both jinn and humans together, unique in the Quran"
    },
    structure: {
      description: "The surah has a tripartite structure: (1) Blessings in creation, (2) Day of Judgment scenes, (3) Rewards in Paradise",
      pattern: "Blessings enumerated → Refrain challenges denial → More blessings → Refrain repeats"
    }
  },

  categories: {
    divineAttribute: {
      name: "The Most Merciful (Ar-Rahman)",
      nameAr: "صفة الرحمن",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Ar-Rahman", arabic: "الرَّحْمَٰنُ", meaning: "The Most Merciful", explanation: "Opens the surah - Allah's mercy is the source of all blessings", ayahs: [1] },
        { term: "Rabbikuma", arabic: "رَبِّكُمَا", meaning: "Your Lord (dual)", explanation: "Lord of both jinn and mankind", ayahs: [13, 16, 18, 21, 23, 25, 28, 30, 32, 34] }
      ]
    },

    teachingQuran: {
      name: "Teaching of the Quran",
      nameAr: "تعليم القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Taught the Quran", arabic: "عَلَّمَ الْقُرْآنَ", meaning: "He taught the Quran", explanation: "First blessing mentioned - divine revelation", ayahs: [2] },
        { term: "Created mankind", arabic: "خَلَقَ الْإِنسَانَ", meaning: "He created mankind", explanation: "Human creation as blessing", ayahs: [3] },
        { term: "Taught expression", arabic: "عَلَّمَهُ الْبَيَانَ", meaning: "Taught him clear expression", explanation: "Gift of speech and communication", ayahs: [4] }
      ]
    },

    cosmicOrder: {
      name: "Cosmic Order and Balance",
      nameAr: "النظام الكوني والميزان",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Sun and Moon", arabic: "الشَّمْسُ وَالْقَمَرُ", meaning: "The sun and moon", explanation: "Celestial bodies run by calculation (bi-husban)", ayahs: [5] },
        { term: "By calculation", arabic: "بِحُسْبَانٍ", meaning: "By precise calculation", explanation: "Perfect divine mathematics governing universe", ayahs: [5] },
        { term: "Stars and trees", arabic: "النَّجْمُ وَالشَّجَرُ", meaning: "The stars (plants) and trees", explanation: "Both prostrate to Allah - najm can mean stars or stemless plants", ayahs: [6] },
        { term: "The sky He raised", arabic: "وَالسَّمَاءَ رَفَعَهَا", meaning: "And the heaven He raised", explanation: "Sky elevated as canopy", ayahs: [7] },
        { term: "The balance", arabic: "الْمِيزَانَ", meaning: "The balance/scale", explanation: "Divine justice established in creation", ayahs: [7, 8, 9] }
      ]
    },

    justiceAndBalance: {
      name: "Justice and Balance",
      nameAr: "العدل والميزان",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "He established balance", arabic: "وَوَضَعَ الْمِيزَانَ", meaning: "And He established the balance", explanation: "Justice as fundamental law", ayahs: [7] },
        { term: "Do not transgress", arabic: "أَلَّا تَطْغَوْا فِي الْمِيزَانِ", meaning: "That you not transgress the balance", explanation: "Command to maintain justice", ayahs: [8] },
        { term: "Establish weight justly", arabic: "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ", meaning: "Establish weight in justice", explanation: "Practical application of divine balance", ayahs: [9] },
        { term: "Do not make short", arabic: "وَلَا تُخْسِرُوا الْمِيزَانَ", meaning: "And do not make deficient the balance", explanation: "Warning against cheating in measures", ayahs: [9] }
      ]
    },

    earthlyBlessings: {
      name: "Blessings of the Earth",
      nameAr: "نعم الأرض",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "Earth laid for creatures", arabic: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ", meaning: "And the earth He laid for creatures", explanation: "Earth prepared for all living beings", ayahs: [10] },
        { term: "Fruits and palms", arabic: "فِيهَا فَاكِهَةٌ وَالنَّخْلُ", meaning: "In it are fruit and palm trees", explanation: "Sustenance provisions", ayahs: [11] },
        { term: "Date palms with sheaths", arabic: "ذَاتُ الْأَكْمَامِ", meaning: "Having sheaths", explanation: "Protective covering for dates", ayahs: [11] },
        { term: "Grain with husks", arabic: "وَالْحَبُّ ذُو الْعَصْفِ", meaning: "And grain having husks", explanation: "Staple food provision", ayahs: [12] },
        { term: "Fragrant plants", arabic: "وَالرَّيْحَانُ", meaning: "And sweet-scented plants", explanation: "Aromatic herbs as blessing", ayahs: [12] }
      ]
    },

    creationOfBeings: {
      name: "Creation of Jinn and Humans",
      nameAr: "خلق الجن والإنس",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Created man from clay", arabic: "خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ", meaning: "He created man from clay like pottery", explanation: "Human origin from dried clay", ayahs: [14] },
        { term: "Like pottery", arabic: "كَالْفَخَّارِ", meaning: "Like baked pottery", explanation: "Sounding clay when struck", ayahs: [14] },
        { term: "Created jinn from fire", arabic: "وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ", meaning: "And created jinn from smokeless flame", explanation: "Jinn origin from fire", ayahs: [15] },
        { term: "Smokeless flame", arabic: "مَّارِجٍ مِّن نَّارٍ", meaning: "A smokeless flame of fire", explanation: "Pure, penetrating fire", ayahs: [15] }
      ]
    },

    divineAuthority: {
      name: "Divine Authority Over All",
      nameAr: "ربوبية الله",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Lord of two Easts", arabic: "رَبُّ الْمَشْرِقَيْنِ", meaning: "Lord of the two Easts", explanation: "Summer and winter sunrise points", ayahs: [17] },
        { term: "Lord of two Wests", arabic: "وَرَبُّ الْمَغْرِبَيْنِ", meaning: "Lord of the two Wests", explanation: "Summer and winter sunset points", ayahs: [17] }
      ]
    },

    twoSeas: {
      name: "The Two Seas",
      nameAr: "البحران",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Released two seas", arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ", meaning: "He released the two seas meeting", explanation: "Salt and fresh water meeting", ayahs: [19] },
        { term: "Barrier between them", arabic: "بَيْنَهُمَا بَرْزَخٌ", meaning: "Between them is a barrier", explanation: "Natural separation maintained", ayahs: [20] },
        { term: "Neither transgresses", arabic: "لَّا يَبْغِيَانِ", meaning: "They do not transgress", explanation: "Each stays in its bounds", ayahs: [20] },
        { term: "Pearls and coral", arabic: "اللُّؤْلُؤُ وَالْمَرْجَانُ", meaning: "Pearls and coral", explanation: "Treasures from the seas", ayahs: [22] },
        { term: "Ships like mountains", arabic: "الْجَوَارِ الْمُنشَآتُ", meaning: "Ships elevated in the sea", explanation: "Sailing vessels as blessings", ayahs: [24] },
        { term: "Like mountains", arabic: "كَالْأَعْلَامِ", meaning: "Like mountains/landmarks", explanation: "Ships towering on water", ayahs: [24] }
      ]
    },

    mortality: {
      name: "Mortality and Divine Permanence",
      nameAr: "الفناء والبقاء",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "All upon earth perishes", arabic: "كُلُّ مَنْ عَلَيْهَا فَانٍ", meaning: "Everyone upon earth will perish", explanation: "Universal mortality", ayahs: [26] },
        { term: "Face of your Lord remains", arabic: "وَيَبْقَىٰ وَجْهُ رَبِّكَ", meaning: "And there will remain the Face of your Lord", explanation: "Only Allah is eternal", ayahs: [27] },
        { term: "Owner of Majesty and Honor", arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ", meaning: "Owner of Majesty and Honor", explanation: "Divine attributes of grandeur", ayahs: [27, 78] }
      ]
    },

    dependenceOnAllah: {
      name: "Creation's Dependence",
      nameAr: "افتقار المخلوقات",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "All ask Him", arabic: "يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Whoever is in heavens and earth asks Him", explanation: "Universal dependence on Allah", ayahs: [29] },
        { term: "Every day He is bringing about", arabic: "كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ", meaning: "Every day He is upon some affair", explanation: "Continuous divine activity", ayahs: [29] }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameAr: "يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "We will attend to you", arabic: "سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ", meaning: "We will attend to you, O two burdens", explanation: "Allah will judge jinn and humans", ayahs: [31] },
        { term: "Two burdens (Thaqalan)", arabic: "الثَّقَلَانِ", meaning: "The two weighty ones", explanation: "Jinn and humans - weighty in importance", ayahs: [31] },
        { term: "If you can pass beyond", arabic: "إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا", meaning: "If you are able to pass beyond", explanation: "Challenge to escape Allah's domain", ayahs: [33] },
        { term: "Regions of heavens and earth", arabic: "مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "From the regions of heavens and earth", explanation: "No escape possible", ayahs: [33] },
        { term: "Only with authority", arabic: "لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ", meaning: "You cannot pass except by authority", explanation: "Divine permission required", ayahs: [33] },
        { term: "Flame of fire and smoke", arabic: "شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ", meaning: "Flame of fire and smoke", explanation: "Sent upon those who try to escape", ayahs: [35] },
        { term: "Sky splits open", arabic: "فَإِذَا انشَقَّتِ السَّمَاءُ", meaning: "When the heaven splits open", explanation: "Cosmic destruction at end times", ayahs: [37] },
        { term: "Like rose-colored oil", arabic: "فَكَانَتْ وَرْدَةً كَالدِّهَانِ", meaning: "Becoming rose-colored like oil", explanation: "Sky transforms in color", ayahs: [37] }
      ]
    },

    sinnersOnJudgment: {
      name: "Criminals on Judgment Day",
      nameAr: "المجرمون يوم القيامة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Criminals known by marks", arabic: "يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ", meaning: "Criminals will be known by their marks", explanation: "No hiding identity", ayahs: [41] },
        { term: "Seized by forelocks and feet", arabic: "فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ", meaning: "Seized by forelocks and feet", explanation: "Dragged to punishment", ayahs: [41] },
        { term: "This is Hell denied", arabic: "هَٰذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ", meaning: "This is Hell which criminals denied", explanation: "Confrontation with denied reality", ayahs: [43] },
        { term: "Between it and boiling water", arabic: "يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ آنٍ", meaning: "They will circulate between it and scalding water", explanation: "Alternating torments", ayahs: [44] }
      ]
    },

    twoGardensFirst: {
      name: "Two Gardens (First Pair)",
      nameAr: "الجنتان الأولى",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Two gardens", arabic: "جَنَّتَانِ", meaning: "Two gardens", explanation: "For those who feared standing before their Lord", ayahs: [46] },
        { term: "Who feared his Lord's standing", arabic: "لِمَنْ خَافَ مَقَامَ رَبِّهِ", meaning: "For whoever feared the standing before his Lord", explanation: "Qualification for entry", ayahs: [46] },
        { term: "Both of spreading branches", arabic: "ذَوَاتَا أَفْنَانٍ", meaning: "Having spreading branches", explanation: "Lush vegetation", ayahs: [48] },
        { term: "Two flowing springs", arabic: "فِيهِمَا عَيْنَانِ تَجْرِيَانِ", meaning: "In both are two flowing springs", explanation: "Ever-flowing water", ayahs: [50] },
        { term: "Every fruit in pairs", arabic: "فِيهِمَا مِن كُلِّ فَاكِهَةٍ زَوْجَانِ", meaning: "In both of every fruit are two kinds", explanation: "Variety and abundance", ayahs: [52] },
        { term: "Reclining on brocade linings", arabic: "مُتَّكِئِينَ عَلَىٰ فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ", meaning: "Reclining on beds whose linings are of brocade", explanation: "Luxurious furnishing", ayahs: [54] },
        { term: "Fruits hanging near", arabic: "وَجَنَى الْجَنَّتَيْنِ دَانٍ", meaning: "And the fruit of both gardens hanging near", explanation: "Easy access to fruits", ayahs: [54] }
      ]
    },

    companionsOfParadise: {
      name: "Companions in Paradise",
      nameAr: "حور الجنة",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Modest of glance", arabic: "قَاصِرَاتُ الطَّرْفِ", meaning: "Limiting/restraining their glances", explanation: "Modest companions", ayahs: [56, 72] },
        { term: "Untouched before", arabic: "لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ", meaning: "Untouched by man or jinn before", explanation: "Pure companions", ayahs: [56, 74] },
        { term: "Like rubies and coral", arabic: "كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ", meaning: "As if they were rubies and coral", explanation: "Beautiful and precious", ayahs: [58] },
        { term: "Good and beautiful", arabic: "حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ", meaning: "Fair ones reserved in pavilions", explanation: "Hur in pavilions", ayahs: [72] }
      ]
    },

    twoGardensSecond: {
      name: "Two Gardens (Second Pair)",
      nameAr: "الجنتان الأخرى",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Besides these two", arabic: "وَمِن دُونِهِمَا جَنَّتَانِ", meaning: "And besides them are two gardens", explanation: "Additional pair of gardens", ayahs: [62] },
        { term: "Dark green", arabic: "مُدْهَامَّتَانِ", meaning: "Dark green in color", explanation: "Intensely green gardens", ayahs: [64] },
        { term: "Two gushing springs", arabic: "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ", meaning: "In both are two gushing springs", explanation: "Abundant water", ayahs: [66] },
        { term: "Fruit, palms, pomegranates", arabic: "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ", meaning: "In both are fruit, palm trees, and pomegranates", explanation: "Specific fruits mentioned", ayahs: [68] },
        { term: "Good and beautiful", arabic: "فِيهِنَّ خَيْرَاتٌ حِسَانٌ", meaning: "In them are good and beautiful ones", explanation: "Companions of excellence", ayahs: [70] },
        { term: "Reclining on green cushions", arabic: "مُتَّكِئِينَ عَلَىٰ رَفْرَفٍ خُضْرٍ", meaning: "Reclining on green cushions", explanation: "Comfortable seating", ayahs: [76] },
        { term: "Fine carpets", arabic: "وَعَبْقَرِيٍّ حِسَانٍ", meaning: "And fine beautiful carpets", explanation: "Luxurious flooring", ayahs: [76] }
      ]
    },

    rewardOfGoodness: {
      name: "Reward Principle",
      nameAr: "جزاء الإحسان",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Reward for good is good", arabic: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانِ", meaning: "Is the reward for good anything but good?", explanation: "Fundamental principle of divine justice", ayahs: [60] }
      ]
    },

    closingGlory: {
      name: "Closing Glory",
      nameAr: "الختام المجيد",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Blessed is the name", arabic: "تَبَارَكَ اسْمُ رَبِّكَ", meaning: "Blessed is the name of your Lord", explanation: "Final praise", ayahs: [78] },
        { term: "Owner of Majesty and Honor", arabic: "ذِي الْجَلَالِ وَالْإِكْرَامِ", meaning: "Owner of Majesty and Honor", explanation: "Divine attributes closing the surah", ayahs: [78] }
      ]
    }
  },

  refrainPattern: {
    description: "The 31 repetitions of the refrain 'Which favors will you deny?' create a powerful rhetorical rhythm",
    pattern: [
      { section: "Creation blessings (1-12)", refrainAfter: 13, count: "1st" },
      { section: "Human and jinn creation (14-15)", refrainAfter: 16, count: "2nd" },
      { section: "Two Easts and Wests (17)", refrainAfter: 18, count: "3rd" },
      { section: "Two seas (19-20)", refrainAfter: 21, count: "4th" },
      { section: "Pearls and coral (22)", refrainAfter: 23, count: "5th" },
      { section: "Ships (24)", refrainAfter: 25, count: "6th" },
      { section: "Mortality and permanence (26-27)", refrainAfter: 28, count: "7th" },
      { section: "All ask Him (29)", refrainAfter: 30, count: "8th" },
      { section: "Judgment announced (31)", refrainAfter: 32, count: "9th" },
      { section: "Cannot escape (33)", refrainAfter: 34, count: "10th" },
      { section: "Flame sent (35)", refrainAfter: 36, count: "11th" },
      { section: "Sky splits (37)", refrainAfter: 38, count: "12th" },
      { section: "No questioning about sins (39)", refrainAfter: 40, count: "13th" },
      { section: "Criminals seized (41)", refrainAfter: 42, count: "14th" },
      { section: "Hell shown (43-44)", refrainAfter: 45, count: "15th" },
      { section: "Two gardens announced (46)", refrainAfter: 47, count: "16th" },
      { section: "Gardens' branches (48)", refrainAfter: 49, count: "17th" },
      { section: "Two springs (50)", refrainAfter: 51, count: "18th" },
      { section: "Every fruit in pairs (52)", refrainAfter: 53, count: "19th" },
      { section: "Reclining, fruits near (54)", refrainAfter: 55, count: "20th" },
      { section: "Modest companions (56)", refrainAfter: 57, count: "21st" },
      { section: "Like rubies and coral (58)", refrainAfter: 59, count: "22nd" },
      { section: "Reward for good (60)", refrainAfter: 61, count: "23rd" },
      { section: "Two more gardens (62)", refrainAfter: 63, count: "24th" },
      { section: "Dark green (64)", refrainAfter: 65, count: "25th" },
      { section: "Two gushing springs (66)", refrainAfter: 67, count: "26th" },
      { section: "Fruits detailed (68)", refrainAfter: 69, count: "27th" },
      { section: "Good and beautiful (70)", refrainAfter: 71, count: "28th" },
      { section: "Hur in pavilions (72)", refrainAfter: 73, count: "29th" },
      { section: "Untouched companions (74)", refrainAfter: 75, count: "30th" },
      { section: "Green cushions, carpets (76)", refrainAfter: 77, count: "31st" }
    ]
  },

  relationships: [
    { from: "Ar-Rahman", to: "Teaching Quran", type: "manifestation", description: "Mercy manifests first in revelation" },
    { from: "Teaching Quran", to: "Creating Human", type: "sequence", description: "Knowledge before mentioning creation" },
    { from: "Balance (Mizan)", to: "Justice Command", type: "divine_law", description: "Cosmic balance demands human justice" },
    { from: "Clay Creation", to: "Fire Creation", type: "contrast", description: "Human from clay, jinn from fire" },
    { from: "Two Seas", to: "Barrier Between", type: "divine_separation", description: "Allah maintains natural boundaries" },
    { from: "All Perishes", to: "Face of Lord Remains", type: "contrast", description: "Creation temporary, Creator eternal" },
    { from: "Feared His Lord", to: "Two Gardens", type: "reward", description: "Fear leads to Paradise" },
    { from: "Ihsan (Good)", to: "Ihsan (Reward)", type: "principle", description: "Good deeds receive good reward" },
    { from: "First Two Gardens", to: "Second Two Gardens", type: "additional", description: "More rewards upon rewards" },
    { from: "Each Blessing", to: "Refrain Challenge", type: "rhetorical", description: "Blessing followed by challenge to deny" }
  ],

  thematicFlow: {
    title: "From Divine Mercy to Eternal Rewards",
    stages: [
      { name: "Divine Mercy Proclaimed", ayahs: [1, 2, 3, 4], description: "Ar-Rahman, Quran, human, speech" },
      { name: "Cosmic Order", ayahs: [5, 6, 7, 8, 9], description: "Sun, moon, stars, trees, balance" },
      { name: "Earthly Provisions", ayahs: [10, 11, 12, 13], description: "Earth, fruits, grains, herbs" },
      { name: "Creation of Two Kinds", ayahs: [14, 15, 16], description: "Humans from clay, jinn from fire" },
      { name: "Divine Lordship", ayahs: [17, 18], description: "Lord of two Easts and Wests" },
      { name: "The Two Seas", ayahs: [19, 20, 21, 22, 23, 24, 25], description: "Seas, barrier, pearls, ships" },
      { name: "Mortality vs Eternity", ayahs: [26, 27, 28, 29, 30], description: "All perish, Allah remains" },
      { name: "Judgment Announced", ayahs: [31, 32, 33, 34, 35, 36], description: "Two burdens judged, no escape" },
      { name: "Cosmic Destruction", ayahs: [37, 38, 39, 40], description: "Sky splits, no questioning" },
      { name: "Criminals' Fate", ayahs: [41, 42, 43, 44, 45], description: "Seized, Hell, boiling water" },
      { name: "First Paradise Pair", ayahs: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], description: "Two gardens for those who feared" },
      { name: "Second Paradise Pair", ayahs: [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77], description: "Two more gardens, dark green" },
      { name: "Divine Glory Closing", ayahs: [78], description: "Blessed is the Name of your Lord" }
    ]
  },

  uniqueInsight: {
    title: "The Bride of the Quran (عَرُوسُ الْقُرْآن)",
    insight: "Surah Ar-Rahman is called 'The Bride of the Quran' because of its exceptional beauty, rhythm, and adornment of meanings. The Prophet (peace be upon him) recited it to the jinn, and when he reached each refrain 'Which favors will you deny?', the jinn responded 'None of Your favors do we deny, our Lord!' This surah uniquely addresses both jinn and humans together 31 times, creating a courtroom-like atmosphere where every blessing is presented as evidence, and the audience is challenged to deny. The dual form in Arabic (tukazziban - you two deny) is grammatically significant, addressing jinn and humans as a pair throughout. The progression from worldly blessings to Judgment Day to Paradise creates a complete arc of divine mercy - from earthly sustenance to eternal reward.",
    arabicTerm: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    rootMeaning: "أ-ل-و (ala') means favor/blessing; the form آلَاء is a plural of paucity used for great multitudes, suggesting countless uncountable blessings",
    keyAyah: 13
  },

  historicalContext: {
    revelationPeriod: "Medinan (majority view), some say Makkan",
    occasion: "Revealed to enumerate Allah's countless blessings to both jinn and humans, establishing the proof against those who deny. The Prophet (peace be upon him) recited it publicly in Makkah to both humans and jinn, demonstrating its universal address.",
    note: "This is the only surah that begins with a divine name (Ar-Rahman) rather than letters or praise. The name Ar-Rahman was so significant that some Makkans initially rejected it, not recognizing this attribute of Allah. The surah systematically builds the case for gratitude by listing blessing after blessing, then challenging denial after each."
  },

  linguisticFeatures: {
    features: [
      { name: "Unique Opening", description: "الرَّحْمَٰنُ", example: "Begins with divine name alone", ayah: 1 },
      { name: "Dual Form Throughout", description: "تُكَذِّبَانِ", example: "Addresses two groups (jinn and humans)", pattern: "31 times" },
      { name: "Refrain Structure", description: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", example: "Repeated 31 times", pattern: "After each blessing or theme" },
      { name: "Phonetic Beauty", description: "Rhyming endings in -an", example: "الرَّحْمَٰنُ - الْقُرْآنَ - الْإِنسَانَ - الْبَيَانَ", ayahs: [1, 2, 3, 4] },
      { name: "Parallel Structure", description: "Pairs throughout", example: "Two seas, two gardens, two springs, two kinds of fruit", pattern: "Duality theme" },
      { name: "Rhetorical Question", description: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانِ", example: "Is reward for good but good?", ayah: 60 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 56, name: "Al-Waqi'ah", relationship: "Both describe Paradise in vivid detail", type: "thematic_parallel" },
      { surah: 1, name: "Al-Fatiha", relationship: "Ar-Rahman is divine name from opening surah", type: "name_connection" },
      { surah: 76, name: "Al-Insan", relationship: "Both describe Paradise rewards elaborately", type: "thematic_parallel" },
      { surah: 54, name: "Al-Qamar", relationship: "Preceding surah; contrasts with stories of punishment", type: "sequential_relationship" },
      { surah: 67, name: "Al-Mulk", relationship: "Both challenge to find flaws in creation", type: "thematic_parallel" },
      { surah: 25, name: "Al-Furqan", relationship: "Also emphasizes Ar-Rahman's attributes", type: "thematic_parallel" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Recognize blessings", how: "Pause at each refrain and count your blessings", verse: "55:13" },
      { principle: "Fear standing before Allah", how: "This is the key to attaining Paradise gardens", verse: "55:46" },
      { principle: "Maintain justice (balance)", how: "Be fair in all dealings, do not cheat", verse: "55:8-9" },
      { principle: "Remember mortality", how: "All perish except Allah - don't attach to dunya", verse: "55:26-27" },
      { principle: "Good deserves good", how: "Do ihsan (excellence) and expect ihsan in return", verse: "55:60" },
      { principle: "Both species accountable", how: "Jinn and humans alike will be judged", verse: "55:31" }
    ]
  },

  virtue: {
    hadith: "The Prophet (peace be upon him) said: 'Everything has a bride, and the bride of the Quran is Surah Ar-Rahman.' (Bayhaqi)",
    narration: "Ali (may Allah be pleased with him) reported that when the Prophet recited this surah to the Companions, they remained silent. He said: 'The jinn responded better than you! Whenever I recited the refrain, they said: Nothing of Your favors do we deny, our Lord!'",
    recommendedRecitation: "Recite with reflection on each blessing mentioned, responding to each refrain with gratitude"
  }
};

export default ONTOLOGY;
