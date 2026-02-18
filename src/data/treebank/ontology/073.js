/**
 * Surah Al-Muzzammil (73) - Ontology of Quranic Concepts
 * The Enshrouded One
 * Theme: Night prayer (Tahajjud), gradual revelation, patience, warning to deniers
 */

export const ONTOLOGY = {
  surahId: 73,
  surahName: "Al-Muzzammil",
  surahNameArabic: "المزمل",
  revelationType: "Makki (except verse 20 - Madani)",
  totalAyahs: 20,

  categories: {
    propheticAddress: {
      name: "Address to the Prophet",
      nameArabic: "خطاب النبي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "يَا أَيُّهَا الْمُزَّمِّلُ", meaning: "O you wrapped in garments", explanation: "Prophet ﷺ covered after receiving revelation", verseRef: "73:1" },
        { term: "قُمِ اللَّيْلَ", meaning: "Stand at night", explanation: "Command for night prayer", verseRef: "73:2" },
        { term: "إِلَّا قَلِيلًا", meaning: "Except a little", explanation: "Some rest is permitted", verseRef: "73:2" }
      ]
    },

    nightPrayerGuidelines: {
      name: "Night Prayer Guidelines",
      nameArabic: "أحكام قيام الليل",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "نِصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا", meaning: "Half or less than half", explanation: "Flexibility in night prayer duration", verseRef: "73:3" },
        { term: "أَوْ زِدْ عَلَيْهِ", meaning: "Or add to it", explanation: "Can pray more than half", verseRef: "73:4" },
        { term: "رَتِّلِ الْقُرْآنَ تَرْتِيلًا", meaning: "Recite Quran slowly and clearly", explanation: "Tarteel - measured, beautiful recitation", verseRef: "73:4" }
      ]
    },

    weightyRevelation: {
      name: "The Weighty Word",
      nameArabic: "القول الثقيل",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قَوْلًا ثَقِيلًا", meaning: "Heavy/weighty word", explanation: "Quran's gravitas and responsibility", verseRef: "73:5" },
        { term: "نَاشِئَةَ اللَّيْلِ", meaning: "Rising at night", explanation: "Night prayer is spiritually potent", verseRef: "73:6" },
        { term: "أَشَدُّ وَطْئًا", meaning: "More intense in impression", explanation: "Night worship leaves deeper impact", verseRef: "73:6" },
        { term: "أَقْوَمُ قِيلًا", meaning: "More suitable for speech", explanation: "Better for Quran recitation/contemplation", verseRef: "73:6" }
      ]
    },

    dayOccupations: {
      name: "Daytime Activities",
      nameArabic: "أشغال النهار",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "سَبْحًا طَوِيلًا", meaning: "Long occupation", explanation: "Day filled with prophetic duties", verseRef: "73:7" },
        { term: "اذْكُرِ اسْمَ رَبِّكَ", meaning: "Remember your Lord's name", explanation: "Constant dhikr", verseRef: "73:8" },
        { term: "تَبَتَّلْ إِلَيْهِ تَبْتِيلًا", meaning: "Devote yourself completely", explanation: "Total devotion to Allah", verseRef: "73:8" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameArabic: "الصفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ", meaning: "Lord of East and West", explanation: "Sovereignty over all", verseRef: "73:9" },
        { term: "لَا إِلَـٰهَ إِلَّا هُوَ", meaning: "No deity except Him", explanation: "Absolute monotheism", verseRef: "73:9" },
        { term: "وَكِيلًا", meaning: "Disposer of affairs", explanation: "Allah manages all matters", verseRef: "73:9" },
        { term: "غَفُورٌ رَّحِيمٌ", meaning: "Forgiving, Merciful", explanation: "Final attributes in surah", verseRef: "73:20" }
      ]
    },

    patienceWithDeniers: {
      name: "Patience with Deniers",
      nameArabic: "الصبر على المكذبين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "اصْبِرْ عَلَىٰ مَا يَقُولُونَ", meaning: "Be patient over what they say", explanation: "Endure their mockery", verseRef: "73:10" },
        { term: "هَجْرًا جَمِيلًا", meaning: "Gracious avoidance", explanation: "Leave them elegantly, not bitterly", verseRef: "73:10" },
        { term: "ذَرْنِي وَالْمُكَذِّبِينَ", meaning: "Leave Me with the deniers", explanation: "Allah will deal with them", verseRef: "73:11" },
        { term: "مَهِّلْهُمْ قَلِيلًا", meaning: "Grant them respite a little", explanation: "Short delay before punishment", verseRef: "73:11" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَنكَالًا", meaning: "Shackles", explanation: "Chains binding criminals", verseRef: "73:12" },
        { term: "جَحِيمًا", meaning: "Blazing fire", explanation: "Intense hellfire", verseRef: "73:12" },
        { term: "طَعَامًا ذَا غُصَّةٍ", meaning: "Choking food", explanation: "Zaqqum - lodges in throat", verseRef: "73:13" },
        { term: "عَذَابًا أَلِيمًا", meaning: "Painful punishment", explanation: "Severe torment", verseRef: "73:13" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "تَرْجُفُ الْأَرْضُ وَالْجِبَالُ", meaning: "Earth and mountains shake", explanation: "Cosmic earthquake", verseRef: "73:14" },
        { term: "كَثِيبًا مَّهِيلًا", meaning: "Heap of sand pouring down", explanation: "Mountains become flowing sand", verseRef: "73:14" },
        { term: "يَجْعَلُ الْوِلْدَانَ شِيبًا", meaning: "Makes children grey-haired", explanation: "Day so severe it ages children", verseRef: "73:17" },
        { term: "السَّمَاءُ مُنفَطِرٌ بِهِ", meaning: "Heaven breaking apart", explanation: "Sky torn asunder", verseRef: "73:18" }
      ]
    },

    pharaohParallel: {
      name: "Pharaoh's Lesson",
      nameArabic: "عبرة فرعون",
      color: '#EC4899',
      icon: 'Book',
      concepts: [
        { term: "أَرْسَلْنَا إِلَيْكُمْ رَسُولًا", meaning: "We sent you a Messenger", explanation: "Prophet sent like Musa was to Pharaoh", verseRef: "73:15" },
        { term: "كَمَا أَرْسَلْنَا إِلَىٰ فِرْعَوْنَ", meaning: "As We sent to Pharaoh", explanation: "Historical parallel", verseRef: "73:15" },
        { term: "فَعَصَىٰ فِرْعَوْنُ الرَّسُولَ", meaning: "Pharaoh disobeyed the Messenger", explanation: "Warning: rejectors will be punished", verseRef: "73:16" },
        { term: "أَخْذًا وَبِيلًا", meaning: "Severe seizing", explanation: "Pharaoh's drowning - severe punishment", verseRef: "73:16" }
      ]
    },

    abrogationOfNightPrayer: {
      name: "Lightening of Night Prayer",
      nameArabic: "تخفيف قيام الليل",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "إِنَّ رَبَّكَ يَعْلَمُ", meaning: "Your Lord knows", explanation: "Allah sees their sincere effort", verseRef: "73:20" },
        { term: "أَدْنَىٰ مِن ثُلُثَيِ اللَّيْلِ", meaning: "Less than two-thirds of the night", explanation: "Prophet's devotion exceeded requirement", verseRef: "73:20" },
        { term: "لَّن تُحْصُوهُ", meaning: "You cannot count it precisely", explanation: "Exact measurement difficult", verseRef: "73:20" },
        { term: "فَتَابَ عَلَيْكُمْ", meaning: "So He turned to you in mercy", explanation: "Obligation lightened to ease", verseRef: "73:20" },
        { term: "فَاقْرَءُوا مَا تَيَسَّرَ", meaning: "Recite what is easy", explanation: "New ruling: recite what's convenient", verseRef: "73:20" }
      ]
    },

    excusesForLightening: {
      name: "Reasons for Concession",
      nameArabic: "أسباب التخفيف",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "مَّرْضَىٰ", meaning: "Sick ones", explanation: "Illness excuses extensive night prayer", verseRef: "73:20" },
        { term: "يَضْرِبُونَ فِي الْأَرْضِ", meaning: "Traveling in the land", explanation: "Traders traveling for livelihood", verseRef: "73:20" },
        { term: "يَبْتَغُونَ مِن فَضْلِ اللَّهِ", meaning: "Seeking Allah's bounty", explanation: "Commerce is permissible", verseRef: "73:20" },
        { term: "يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ", meaning: "Fighting in Allah's way", explanation: "Jihad also excuses", verseRef: "73:20" }
      ]
    },

    finalInjunctions: {
      name: "Final Commands",
      nameArabic: "الأوامر الختامية",
      color: '#10B981',
      icon: 'Compass',
      concepts: [
        { term: "أَقِيمُوا الصَّلَاةَ", meaning: "Establish prayer", explanation: "Regular obligatory prayers", verseRef: "73:20" },
        { term: "آتُوا الزَّكَاةَ", meaning: "Give zakah", explanation: "Obligatory charity", verseRef: "73:20" },
        { term: "أَقْرِضُوا اللَّهَ قَرْضًا حَسَنًا", meaning: "Loan Allah a goodly loan", explanation: "Extra charity beyond zakah", verseRef: "73:20" },
        { term: "وَاسْتَغْفِرُوا اللَّهَ", meaning: "Seek forgiveness from Allah", explanation: "Constant istighfar", verseRef: "73:20" }
      ]
    }
  },

  relationships: [
    { from: "المزمل", to: "المدثر", type: "parallel", description: "Both address Prophet wrapped/covered after revelation" },
    { from: "قم الليل", to: "فاقرءوا ما تيسر", type: "abrogation", description: "Initial night prayer requirement lightened" },
    { from: "ناشئة الليل", to: "سبحاً طويلاً", type: "contrast", description: "Night = worship; Day = worldly duties" },
    { from: "أرسلنا إليكم رسولاً", to: "أرسلنا إلى فرعون", type: "parallel", description: "Prophet to Quraysh = Musa to Pharaoh" },
    { from: "فعصى فرعون", to: "أخذاً وبيلاً", type: "consequence", description: "Disobedience → severe punishment" },
    { from: "قولاً ثقيلاً", to: "رتل القرآن ترتيلاً", type: "causation", description: "Heavy word requires careful recitation" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Night Prayer Command", verses: "73:1-4", description: "Stand at night, half or more, recite slowly" },
      { stage: 2, theme: "Weighty Revelation", verses: "73:5-6", description: "Heavy word; night prayer most impactful" },
      { stage: 3, theme: "Day's Occupation", verses: "73:7-9", description: "Day busy; remember Allah; take Him as Wakīl" },
      { stage: 4, theme: "Patience & Warning", verses: "73:10-14", description: "Be patient; leave deniers; Hell awaits" },
      { stage: 5, theme: "Pharaoh's Parallel", verses: "73:15-16", description: "Quraysh warned like Pharaoh was" },
      { stage: 6, theme: "Day's Terror", verses: "73:17-19", description: "Children age; sky splits; choose your path" },
      { stage: 7, theme: "Lightened Ruling", verses: "73:20", description: "Long Madani verse: recite what's easy; excuses for sick, travelers, fighters; establish prayer, zakah, loan to Allah, istighfar" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Establish tahajjud", how: "Even if small, night prayer connects you to Allah", verse: "73:2-4" },
      { principle: "Recite with tarteel", how: "Slow, measured recitation with contemplation", verse: "73:4" },
      { principle: "Balance worship and work", how: "Night for worship, day for responsibilities", verse: "73:7" },
      { principle: "Complete devotion", how: "Tabattul - detach heart from worldly to focus on Allah", verse: "73:8" },
      { principle: "Gracious avoidance", how: "Leave opponents without bitterness or revenge", verse: "73:10" },
      { principle: "Learn from history", how: "Pharaoh's fate warns all who reject messengers", verse: "73:15-16" },
      { principle: "Recite what's easy", how: "Allah eases obligations based on circumstances", verse: "73:20" }
    ]
  },

  uniqueInsight: {
    title: "The Tarteel Principle",
    insight: "Verse 4's 'رَتِّلِ الْقُرْآنَ تَرْتِيلًا' establishes the fundamental principle of Quranic recitation. Tarteel comes from ratl (رتل) meaning 'arranging teeth evenly' - hence, measured, unhurried recitation where each letter gets its due. This is not about speed or quantity, but quality. When Umm Salamah was asked about the Prophet's recitation, she said he would recite 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' separating each word distinctly. Ali (RA) defined tarteel as 'tajweed of letters and knowledge of stops.' This command came before any tajweed rules existed - Allah first established the principle of careful, beautiful recitation, and the detailed rules developed around it. The cognate accusative 'تَرْتِيلًا' emphasizes: recite with REAL tarteel, not perfunctory reading."
  },

  historicalContext: {
    note: "One of earliest surahs revealed, soon after Al-Muddaththir. Prophet ﷺ was wrapped in garments either from cold or from the weight of revelation. The night prayer was initially obligatory for the Prophet and companions, with verses 1-19 revealed in Makkah. Verse 20, revealed later in Madinah (possibly 15+ years later), lightened this obligation. This represents one of the clearest cases of abrogation (naskh) within a single surah. The Madani verse is remarkably long, covering multiple injunctions, reflecting the developed community's needs."
  },

  linguisticFeatures: {
    features: [
      { feature: "الْمُزَّمِّلُ", example: "Form V participle", effect: "Intensive wrapping - heavily covered" },
      { feature: "تَرْتِيلًا", example: "Cognate accusative", effect: "Emphasis: recite with REAL tarteel" },
      { feature: "تَبَتَّلْ... تَبْتِيلًا", example: "Form V verb + Form II verbal noun", effect: "Mixed forms for intensity - unusual" },
      { feature: "قَوْلًا ثَقِيلًا", example: "Heavy word", effect: "Weighty in obligation and meaning" },
      { feature: "كَثِيبًا مَّهِيلًا", example: "Sand heap pouring", effect: "Vivid image of mountains disintegrating" },
      { feature: "Verse 20 length", example: "Longest verse after Āyat al-Dayn", effect: "Comprehensive concluding legislation" }
    ]
  },

  comparativeAnalysis: {
    muzzammilVsMuddaththir: {
      similarities: [
        "Both address Prophet in wrapped state",
        "Both among earliest revelations",
        "Both command rising for mission"
      ],
      differences: [
        "Muzzammil: Focus on personal spiritual preparation (night prayer)",
        "Muddaththir: Focus on public mission (arise and warn)",
        "Muzzammil: قُمِ اللَّيْلَ (stand at night)",
        "Muddaththir: قُمْ فَأَنذِرْ (arise and warn)"
      ]
    }
  },

  scientificReferences: {
    notes: [
      { verse: "73:6", topic: "Night prayer benefits", note: "ناشئة الليل - rising at night is 'أشد وطئاً' (more impactful); modern sleep science shows early morning hours involve REM sleep and enhanced cognitive/spiritual receptivity" }
    ]
  }
};

export default ONTOLOGY;
