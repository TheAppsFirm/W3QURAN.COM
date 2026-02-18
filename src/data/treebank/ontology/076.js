/**
 * Surah Al-Insan (76) - Ontology of Quranic Concepts
 * Man / Time (Ad-Dahr)
 * Theme: Human creation, free will, righteous deeds, detailed Paradise descriptions
 */

export const ONTOLOGY = {
  surahId: 76,
  surahName: "Al-Insan",
  surahNameArabic: "الإنسان",
  revelationType: "Madani",
  totalAyahs: 31,

  categories: {
    humanOrigins: {
      name: "Human Origins and Purpose",
      nameArabic: "أصل الإنسان وغايته",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "حِينٌ مِّنَ الدَّهْرِ لَمْ يَكُن شَيْئًا مَّذْكُورًا", meaning: "Period when man was nothing mentioned", explanation: "Time before human existence", verseRef: "76:1" },
        { term: "نُّطْفَةٍ أَمْشَاجٍ", meaning: "Drop of mixed fluid", explanation: "Sperm + egg combined", verseRef: "76:2" },
        { term: "نَّبْتَلِيهِ", meaning: "We test him", explanation: "Life's purpose is trial", verseRef: "76:2" },
        { term: "سَمِيعًا بَصِيرًا", meaning: "Hearing, seeing", explanation: "Given faculties to perceive truth", verseRef: "76:2" }
      ]
    },

    freeWill: {
      name: "Free Will and Choice",
      nameArabic: "الإرادة الحرة والاختيار",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "هَدَيْنَاهُ السَّبِيلَ", meaning: "We guided him to the way", explanation: "Path shown clearly", verseRef: "76:3" },
        { term: "إِمَّا شَاكِرًا وَإِمَّا كَفُورًا", meaning: "Either grateful or ungrateful", explanation: "Human chooses which to be", verseRef: "76:3" }
      ]
    },

    disbelieversDestiny: {
      name: "Destiny of Disbelievers",
      nameArabic: "مصير الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "سَلَاسِلَ", meaning: "Chains", explanation: "Bound for punishment", verseRef: "76:4" },
        { term: "أَغْلَالًا", meaning: "Shackles", explanation: "Neck collars constraining", verseRef: "76:4" },
        { term: "سَعِيرًا", meaning: "Blazing fire", explanation: "Intense burning", verseRef: "76:4" }
      ]
    },

    paradiseDrinks: {
      name: "Drinks of Paradise",
      nameArabic: "مشروبات الجنة",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "كَأْسٍ... مِزَاجُهَا كَافُورًا", meaning: "Cup mixed with camphor", explanation: "Cool, fragrant drink", verseRef: "76:5" },
        { term: "عَيْنًا يَشْرَبُ بِهَا عِبَادُ اللَّهِ", meaning: "Spring from which servants drink", explanation: "Exclusive spring for righteous", verseRef: "76:6" },
        { term: "يُفَجِّرُونَهَا تَفْجِيرًا", meaning: "Making it gush forth", explanation: "Springs flow wherever they wish", verseRef: "76:6" },
        { term: "مِزَاجُهَا زَنجَبِيلًا", meaning: "Mixture of ginger", explanation: "Warming, fragrant drink", verseRef: "76:17" },
        { term: "عَيْنًا... سَلْسَبِيلًا", meaning: "Spring named Salsabil", explanation: "Sweet, smooth-flowing spring", verseRef: "76:18" },
        { term: "شَرَابًا طَهُورًا", meaning: "Purifying drink", explanation: "Allah Himself gives them to drink", verseRef: "76:21" }
      ]
    },

    righteousCharacter: {
      name: "Character of the Righteous",
      nameArabic: "صفات الأبرار",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "يُوفُونَ بِالنَّذْرِ", meaning: "They fulfill vows", explanation: "Keep promises to Allah", verseRef: "76:7" },
        { term: "يَخَافُونَ يَوْمًا... مُسْتَطِيرًا", meaning: "Fear a Day of widespread evil", explanation: "Conscious of Judgment", verseRef: "76:7" },
        { term: "يُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ", meaning: "Give food despite love of it", explanation: "Sacrifice what they desire", verseRef: "76:8" },
        { term: "مِسْكِينًا وَيَتِيمًا وَأَسِيرًا", meaning: "Poor, orphan, captive", explanation: "Three categories of needy", verseRef: "76:8" }
      ]
    },

    ikhlas: {
      name: "Sincerity (Ikhlas)",
      nameArabic: "الإخلاص",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ", meaning: "We feed you only for Allah's Face", explanation: "Pure intention - no worldly motive", verseRef: "76:9" },
        { term: "لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا", meaning: "No reward or thanks from you", explanation: "Seeking nothing from creation", verseRef: "76:9" },
        { term: "نَخَافُ مِن رَّبِّنَا يَوْمًا عَبُوسًا قَمْطَرِيرًا", meaning: "We fear a harsh, distressful Day", explanation: "Motivation is fear of Allah", verseRef: "76:10" }
      ]
    },

    divineProtection: {
      name: "Divine Protection and Reward",
      nameArabic: "الحماية والجزاء الإلهي",
      color: '#06B6D4',
      icon: 'Shield',
      concepts: [
        { term: "فَوَقَاهُمُ اللَّهُ شَرَّ ذَٰلِكَ الْيَوْمِ", meaning: "Allah protected them from Day's evil", explanation: "Their fear was not in vain", verseRef: "76:11" },
        { term: "وَلَقَّاهُمْ نَضْرَةً وَسُرُورًا", meaning: "Granted them radiance and joy", explanation: "Inner light and happiness", verseRef: "76:11" },
        { term: "جَزَاهُم بِمَا صَبَرُوا جَنَّةً وَحَرِيرًا", meaning: "Rewarded for patience with Paradise and silk", explanation: "Sabr key to Paradise", verseRef: "76:12" }
      ]
    },

    paradiseDetails: {
      name: "Details of Paradise",
      nameArabic: "تفاصيل الجنة",
      color: '#10B981',
      icon: 'Crown',
      concepts: [
        { term: "مُّتَّكِئِينَ... عَلَى الْأَرَائِكِ", meaning: "Reclining on couches", explanation: "Comfort and rest", verseRef: "76:13" },
        { term: "لَا يَرَوْنَ فِيهَا شَمْسًا وَلَا زَمْهَرِيرًا", meaning: "No sun or bitter cold", explanation: "Perfect climate", verseRef: "76:13" },
        { term: "دَانِيَةً عَلَيْهِمْ ظِلَالُهَا", meaning: "Shade near above them", explanation: "Trees bend to shade", verseRef: "76:14" },
        { term: "ذُلِّلَتْ قُطُوفُهَا تَذْلِيلًا", meaning: "Fruits made easy to reach", explanation: "Clusters bend down", verseRef: "76:14" },
        { term: "آنِيَةٍ مِّن فِضَّةٍ", meaning: "Vessels of silver", explanation: "Silver utensils", verseRef: "76:15" },
        { term: "قَوَارِيرَا مِن فِضَّةٍ", meaning: "Crystal-clear silver", explanation: "Unique material: silver's beauty, crystal's clarity", verseRef: "76:15-16" },
        { term: "وِلْدَانٌ مُّخَلَّدُونَ", meaning: "Immortal young boys", explanation: "Eternal servants", verseRef: "76:19" },
        { term: "لُؤْلُؤًا مَّنثُورًا", meaning: "Scattered pearls", explanation: "Beautiful like scattered gems", verseRef: "76:19" },
        { term: "نَعِيمًا وَمُلْكًا كَبِيرًا", meaning: "Bliss and great kingdom", explanation: "Endless enjoyment, vast domain", verseRef: "76:20" },
        { term: "ثِيَابُ سُندُسٍ خُضْرٌ وَإِسْتَبْرَقٌ", meaning: "Green silk and brocade", explanation: "Finest garments", verseRef: "76:21" },
        { term: "أَسَاوِرَ مِن فِضَّةٍ", meaning: "Silver bracelets", explanation: "Adorned with jewelry", verseRef: "76:21" }
      ]
    },

    quranAndPatience: {
      name: "Quran and Patience",
      nameArabic: "القرآن والصبر",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "نَحْنُ نَزَّلْنَا عَلَيْكَ الْقُرْآنَ تَنزِيلًا", meaning: "We sent down Quran gradually", explanation: "Divine revelation emphasized", verseRef: "76:23" },
        { term: "فَاصْبِرْ لِحُكْمِ رَبِّكَ", meaning: "Be patient for Lord's decision", explanation: "Patience commanded", verseRef: "76:24" },
        { term: "وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا", meaning: "Don't obey sinner or disbeliever", explanation: "Resist pressure to compromise", verseRef: "76:24" }
      ]
    },

    worship: {
      name: "Worship Commands",
      nameArabic: "أوامر العبادة",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "اذْكُرِ اسْمَ رَبِّكَ بُكْرَةً وَأَصِيلًا", meaning: "Remember Lord morning and evening", explanation: "Constant dhikr", verseRef: "76:25" },
        { term: "مِنَ اللَّيْلِ فَاسْجُدْ لَهُ", meaning: "At night prostrate to Him", explanation: "Tahajjud prayer", verseRef: "76:26" },
        { term: "سَبِّحْهُ لَيْلًا طَوِيلًا", meaning: "Glorify Him long night", explanation: "Extended night worship", verseRef: "76:26" }
      ]
    },

    worldlyVsEternal: {
      name: "Worldly vs Eternal",
      nameArabic: "الدنيا مقابل الآخرة",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "يُحِبُّونَ الْعَاجِلَةَ", meaning: "They love the immediate", explanation: "Attached to dunya", verseRef: "76:27" },
        { term: "يَذَرُونَ وَرَاءَهُمْ يَوْمًا ثَقِيلًا", meaning: "Leave behind a heavy Day", explanation: "Ignore coming judgment", verseRef: "76:27" }
      ]
    },

    divineWill: {
      name: "Divine Will",
      nameArabic: "المشيئة الإلهية",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "مَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ سَبِيلًا", meaning: "Whoever wills may take path to Lord", explanation: "Choice offered", verseRef: "76:29" },
        { term: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ", meaning: "You cannot will except Allah wills", explanation: "Human will under divine will", verseRef: "76:30" },
        { term: "يُدْخِلُ مَن يَشَاءُ فِي رَحْمَتِهِ", meaning: "He admits whom He wills into mercy", explanation: "Allah chooses who enters Paradise", verseRef: "76:31" }
      ]
    }
  },

  relationships: [
    { from: "نطفة أمشاج", to: "سميعا بصيرا", type: "transformation", description: "Mixed fluid → hearing, seeing being" },
    { from: "إما شاكرا وإما كفورا", to: "سلاسل/جنة", type: "consequence", description: "Choice of gratitude/ingratitude determines destination" },
    { from: "لوجه الله", to: "نضرة وسرورا", type: "causation", description: "Sincerity in giving → radiance and joy" },
    { from: "بما صبروا", to: "جنة وحريرا", type: "reward", description: "Patience rewarded with Paradise and silk" },
    { from: "كافورا/زنجبيلا/سلسبيلا/طهورا", to: "مشروبات الجنة", type: "collection", description: "Four Paradise drinks mentioned" },
    { from: "تشاءون", to: "يشاء الله", type: "hierarchy", description: "Human will subordinate to divine will" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Human Origin", verses: "76:1-3", description: "From nothing → mixed fluid → choice given" },
      { stage: 2, theme: "Two Destinies", verses: "76:4", description: "Disbelievers: chains, shackles, fire" },
      { stage: 3, theme: "Righteous Character", verses: "76:5-10", description: "Vows, feeding needy, pure intention, fear" },
      { stage: 4, theme: "Divine Reward", verses: "76:11-22", description: "Protection, radiance, Paradise details" },
      { stage: 5, theme: "Prophet's Commands", verses: "76:23-26", description: "Patience, no compromise, worship" },
      { stage: 6, theme: "Final Warning", verses: "76:27-31", description: "Worldly love, divine will, mercy/punishment" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Remember your origins", how: "You were nothing - stay humble", verse: "76:1" },
      { principle: "Make the choice", how: "Grateful or ungrateful - decide now", verse: "76:3" },
      { principle: "Give selflessly", how: "Feed others despite your own need, expect nothing back", verse: "76:8-9" },
      { principle: "Fear that Day", how: "Let fear of Judgment guide your actions", verse: "76:10" },
      { principle: "Be patient", how: "Don't compromise faith for anyone", verse: "76:24" },
      { principle: "Worship at night", how: "Tahajjud connects you to Allah", verse: "76:26" }
    ]
  },

  uniqueInsight: {
    title: "The Selfless Giving Model",
    insight: "Verses 8-9 present the ultimate model of sadaqah: giving 'food they love' (عَلَىٰ حُبِّهِ) to poor, orphan, and captive, while explicitly stating 'We feed you only for Allah's Face, wanting no reward or thanks' (لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا). This is ikhlas distilled to its purest form. The inclusion of 'captive' (أَسِيرًا) is remarkable - feeding even enemies of war. The result? Allah protects them from that Day's evil and grants them 'radiance and joy' (نَضْرَةً وَسُرُورًا) - inner light shows on faces. The surah links this directly to patience: 'جَزَاهُم بِمَا صَبَرُوا' - rewarded for their patience in giving despite their own need."
  },

  linguisticFeatures: {
    features: [
      { feature: "أَمْشَاج", example: "Mixed fluids", effect: "Scientific accuracy - sperm + egg mixture" },
      { feature: "قَمْطَرِيرًا", example: "Intensely distressful", effect: "Rare word emphasizing Day's severity" },
      { feature: "سَلْسَبِيل", example: "Smooth-flowing", effect: "Onomatopoeia - sounds like flowing water" },
      { feature: "قَوَارِيرَا مِن فِضَّةٍ", example: "Crystal of silver", effect: "Oxymoron - unique Paradise material" },
      { feature: "نَضْرَة", example: "Radiance", effect: "Inner light visible on face" }
    ]
  },

  historicalContext: {
    note: "Some scholars say this surah was revealed about Ali, Fatimah, and Hasan/Husain who gave away their iftar food for three consecutive days to a needy person, orphan, and captive. Whether historical or illustrative, it establishes the ultimate standard of charity."
  },

  scientificReferences: {
    notes: [
      { verse: "76:2", topic: "Human conception", note: "نُطْفَة أَمْشَاج - mixed fluid refers to sperm meeting egg, both contributing genetic material" }
    ]
  }
};

export default ONTOLOGY;
