/**
 * Surah Luqman (31) - Ontology of Quranic Concepts
 * The Wise
 * Theme: Wisdom of Luqman, parental advice, gratitude to Allah, signs of creation
 * Revelation: Makki (except verses 27-29 which are Madani)
 */

export const ONTOLOGY = {
  surahId: 31,
  surahName: "Luqman",
  surahNameArabic: "لقمان",
  revelationType: "Makki",
  totalAyahs: 34,

  categories: {
    quranAndGuidance: {
      name: "The Quran as Guidance",
      nameArabic: "القرآن هدى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "الْكِتَابِ الْحَكِيمِ", meaning: "The Wise Book", explanation: "Quran described as 'Hakeem' - full of wisdom, every verse purposeful", verseRef: "31:2" },
        { term: "هُدًى وَرَحْمَةً", meaning: "Guidance and mercy", explanation: "Two purposes of Quran: to guide and to be a mercy for believers", verseRef: "31:3" },
        { term: "الْمُحْسِنِينَ", meaning: "The doers of good", explanation: "Muhsineen - those who worship as if seeing Allah", verseRef: "31:3" },
        { term: "يُقِيمُونَ الصَّلَاةَ", meaning: "Establish prayer", explanation: "First pillar of practice after faith", verseRef: "31:4" },
        { term: "يُؤْتُونَ الزَّكَاةَ", meaning: "Give zakat", explanation: "Purification of wealth, social responsibility", verseRef: "31:4" },
        { term: "بِالْآخِرَةِ هُمْ يُوقِنُونَ", meaning: "Certain of the Hereafter", explanation: "Yaqeen (certainty) - highest level of faith", verseRef: "31:4" }
      ]
    },

    misguidence: {
      name: "Those Who Mislead",
      nameArabic: "المضلون",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَهْوَ الْحَدِيثِ", meaning: "Idle talk/amusement", explanation: "Distracting entertainment that leads away from Allah's path. Can include music, stories, or speech that diverts from truth", verseRef: "31:6" },
        { term: "لِيُضِلَّ عَن سَبِيلِ اللَّهِ", meaning: "To mislead from Allah's way", explanation: "Purpose of lahw - distraction from guidance", verseRef: "31:6" },
        { term: "يَتَّخِذَهَا هُزُوًا", meaning: "Takes it in mockery", explanation: "Ridiculing divine guidance - a grave sin", verseRef: "31:6" },
        { term: "عَذَابٌ مُّهِينٌ", meaning: "Humiliating punishment", explanation: "Those who mock will face humiliation - matching their crime", verseRef: "31:6" },
        { term: "وَقْرًا", meaning: "Deafness/heaviness", explanation: "Spiritual deafness - unable to hear truth even when presented", verseRef: "31:7" },
        { term: "مُسْتَكْبِرًا", meaning: "Arrogantly", explanation: "Istikbaar - the barrier that prevents accepting truth", verseRef: "31:7" }
      ]
    },

    luqmanWisdom: {
      name: "The Wisdom of Luqman",
      nameArabic: "حكمة لقمان",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الْحِكْمَةَ", meaning: "Wisdom (Hikmah)", explanation: "Allah granted Luqman wisdom - understanding truth and acting upon it correctly", verseRef: "31:12" },
        { term: "أَنِ اشْكُرْ لِلَّهِ", meaning: "Be grateful to Allah", explanation: "First lesson of wisdom: gratitude. Shukr is the essence of all worship", verseRef: "31:12" },
        { term: "مَن يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ", meaning: "Whoever is grateful is grateful for himself", explanation: "Gratitude benefits the grateful one, not Allah", verseRef: "31:12" },
        { term: "وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ حَمِيدٌ", meaning: "Whoever disbelieves - Allah is Free of need, Praiseworthy", explanation: "Ingratitude harms only the ingrate; Allah needs nothing", verseRef: "31:12" }
      ]
    },

    luqmanAdvice: {
      name: "Luqman's Advice to His Son",
      nameArabic: "وصايا لقمان لابنه",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "يَا بُنَيَّ", meaning: "O my dear son", explanation: "Diminutive form showing love and tenderness. Advice given with affection, not harshness", verseRef: "31:13" },
        { term: "لَا تُشْرِكْ بِاللَّهِ", meaning: "Do not associate partners with Allah", explanation: "FIRST advice: Tawheed. Foundation of all wisdom", verseRef: "31:13" },
        { term: "إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ", meaning: "Shirk is great wrongdoing", explanation: "Zulm azeem - greatest injustice to oneself and to Allah's right", verseRef: "31:13" },
        { term: "أَقِمِ الصَّلَاةَ", meaning: "Establish prayer", explanation: "Connection with Allah - the pillar of faith", verseRef: "31:17" },
        { term: "وَأْمُرْ بِالْمَعْرُوفِ", meaning: "Command good", explanation: "Social responsibility - not passive Islam", verseRef: "31:17" },
        { term: "وَانْهَ عَنِ الْمُنكَرِ", meaning: "Forbid evil", explanation: "Active resistance against wrong", verseRef: "31:17" },
        { term: "وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ", meaning: "Be patient with what befalls you", explanation: "Patience (sabr) when facing difficulties from doing good", verseRef: "31:17" },
        { term: "إِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ", meaning: "That is of the matters requiring determination", explanation: "These require 'azm - firm resolve, not for the weak-willed", verseRef: "31:17" }
      ]
    },

    characterGuidance: {
      name: "Character and Conduct",
      nameArabic: "الأخلاق والسلوك",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "لَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ", meaning: "Do not turn your cheek away from people", explanation: "Saa'ir - turning face away in contempt. Sign of arrogance", verseRef: "31:18" },
        { term: "لَا تَمْشِ فِي الْأَرْضِ مَرَحًا", meaning: "Do not walk on earth arrogantly", explanation: "Marah - strutting with pride, showing off", verseRef: "31:18" },
        { term: "إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ", meaning: "Allah does not love the self-conceited boaster", explanation: "Mukhtal = conceited in self; Fakhoor = boastful to others", verseRef: "31:18" },
        { term: "وَاقْصِدْ فِي مَشْيِكَ", meaning: "Be moderate in your walking", explanation: "Moderation in pace - neither rushing nor dragging", verseRef: "31:19" },
        { term: "وَاغْضُضْ مِن صَوْتِكَ", meaning: "Lower your voice", explanation: "Ghadh - reduce. Not shouting unnecessarily", verseRef: "31:19" },
        { term: "إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ", meaning: "The most unpleasant of sounds is the braying of donkeys", explanation: "Harsh comparison to deter loud, unnecessary speech", verseRef: "31:19" }
      ]
    },

    parentalRights: {
      name: "Rights of Parents",
      nameArabic: "حقوق الوالدين",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        { term: "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ", meaning: "We have enjoined upon man regarding his parents", explanation: "Divine commandment - parental rights come from Allah", verseRef: "31:14" },
        { term: "حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ", meaning: "His mother carried him in weakness upon weakness", explanation: "Describing pregnancy hardships - wahn = weakness, frailty", verseRef: "31:14" },
        { term: "وَفِصَالُهُ فِي عَامَيْنِ", meaning: "And his weaning in two years", explanation: "Two years of breastfeeding - further sacrifice of mother", verseRef: "31:14" },
        { term: "اشْكُرْ لِي وَلِوَالِدَيْكَ", meaning: "Be grateful to Me and to your parents", explanation: "Gratitude to parents linked directly with gratitude to Allah", verseRef: "31:14" },
        { term: "إِلَيَّ الْمَصِيرُ", meaning: "To Me is the destination", explanation: "Ultimately all return to Allah for accounting", verseRef: "31:14" }
      ]
    },

    limitsOfObedience: {
      name: "Limits of Parental Obedience",
      nameArabic: "حدود طاعة الوالدين",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "جَاهَدَاكَ", meaning: "They strive against you", explanation: "Jihad here = pressure, persistent effort to make you do wrong", verseRef: "31:15" },
        { term: "لِتُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ", meaning: "To associate with Me that of which you have no knowledge", explanation: "Shirk - the one thing that breaks obedience to parents", verseRef: "31:15" },
        { term: "فَلَا تُطِعْهُمَا", meaning: "Do not obey them", explanation: "Clear limit: no obedience in disobedience to Allah", verseRef: "31:15" },
        { term: "وَصَاحِبْهُمَا فِي الدُّنْيَا مَعْرُوفًا", meaning: "Accompany them in this world with kindness", explanation: "Even if they're non-believers, treat them with ihsan (excellence)", verseRef: "31:15" },
        { term: "وَاتَّبِعْ سَبِيلَ مَنْ أَنَابَ إِلَيَّ", meaning: "Follow the path of those who turn to Me", explanation: "In religion, follow the guided ones, not misguided parents", verseRef: "31:15" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Infinite Knowledge",
      nameArabic: "علم الله المطلق",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ", meaning: "Weight of a mustard seed", explanation: "Smallest imaginable thing - nothing escapes Allah's knowledge", verseRef: "31:16" },
        { term: "فِي صَخْرَةٍ", meaning: "Within a rock", explanation: "Hidden in solid stone - still known to Allah", verseRef: "31:16" },
        { term: "أَوْ فِي السَّمَاوَاتِ أَوْ فِي الْأَرْضِ", meaning: "Or in the heavens or in the earth", explanation: "Anywhere in creation - nothing is hidden", verseRef: "31:16" },
        { term: "يَأْتِ بِهَا اللَّهُ", meaning: "Allah will bring it forth", explanation: "Nothing lost, all will be accounted for", verseRef: "31:16" },
        { term: "إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ", meaning: "Allah is Subtle, All-Aware", explanation: "Lateef = subtle, reaches finest details; Khabeer = fully informed", verseRef: "31:16" }
      ]
    },

    signsOfCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا", meaning: "Created heavens without pillars you can see", explanation: "Sky held up without visible support - divine power", verseRef: "31:10" },
        { term: "وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ", meaning: "Cast into earth firmly set mountains", explanation: "Mountains as pegs stabilizing the earth", verseRef: "31:10" },
        { term: "وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ", meaning: "Dispersed therein every creature", explanation: "Biodiversity - animals spread across earth", verseRef: "31:10" },
        { term: "وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً", meaning: "We sent down water from sky", explanation: "Rain - source of all life on earth", verseRef: "31:10" },
        { term: "فَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ", meaning: "Caused to grow every noble pair", explanation: "Plant diversity - zawj kareem = honorable pair/species", verseRef: "31:10" },
        { term: "سَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: "Subjected to you what is in heavens and earth", explanation: "All creation serves humanity - great blessing requiring gratitude", verseRef: "31:20" }
      ]
    },

    falseWorshipRefuted: {
      name: "Refutation of False Worship",
      nameArabic: "إبطال عبادة غير الله",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "هَٰذَا خَلْقُ اللَّهِ", meaning: "This is the creation of Allah", explanation: "Challenge: show what others have created", verseRef: "31:11" },
        { term: "فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِن دُونِهِ", meaning: "Show me what those besides Him created", explanation: "Rhetorical challenge - false gods created nothing", verseRef: "31:11" },
        { term: "بَلِ الظَّالِمُونَ فِي ضَلَالٍ مُّبِينٍ", meaning: "Rather, the wrongdoers are in clear error", explanation: "Those who worship others are clearly misguided", verseRef: "31:11" },
        { term: "وَمَن يُسْلِمْ وَجْهَهُ إِلَى اللَّهِ", meaning: "Whoever submits his face to Allah", explanation: "Islam = submission. Face = whole being, direction", verseRef: "31:22" },
        { term: "وَهُوَ مُحْسِنٌ", meaning: "While being a doer of good", explanation: "Submission + excellence = complete faith", verseRef: "31:22" },
        { term: "فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ", meaning: "Has grasped the most trustworthy handhold", explanation: "Urwah wuthqa - firm handhold that never breaks (Tawheed + good deeds)", verseRef: "31:22" }
      ]
    },

    disbelieversState: {
      name: "State of Disbelievers",
      nameArabic: "حال الكافرين",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَمَن كَفَرَ فَلَا يَحْزُنكَ كُفْرُهُ", meaning: "Whoever disbelieves - let not his disbelief grieve you", explanation: "Comfort to Prophet - their disbelief is their loss", verseRef: "31:23" },
        { term: "إِلَيْنَا مَرْجِعُهُمْ", meaning: "To Us is their return", explanation: "All will return to Allah for judgment", verseRef: "31:23" },
        { term: "فَنُنَبِّئُهُم بِمَا عَمِلُوا", meaning: "Then We will inform them of what they did", explanation: "Full disclosure of deeds on Judgment Day", verseRef: "31:23" },
        { term: "نُمَتِّعُهُمْ قَلِيلًا", meaning: "We grant them enjoyment for a little", explanation: "Worldly pleasures are temporary", verseRef: "31:24" },
        { term: "ثُمَّ نَضْطَرُّهُمْ إِلَىٰ عَذَابٍ غَلِيظٍ", meaning: "Then We will force them into a harsh punishment", explanation: "Nadhtarru = forced, compelled. No escape", verseRef: "31:24" }
      ]
    },

    allahsExclusiveKnowledge: {
      name: "Knowledge Only Allah Possesses",
      nameArabic: "علم الغيب",
      color: "#8B5CF6",
      icon: "Star",
      concepts: [
        { term: "إِنَّ اللَّهَ عِندَهُ عِلْمُ السَّاعَةِ", meaning: "Indeed, Allah has knowledge of the Hour", explanation: "When Judgment Day comes - only Allah knows", verseRef: "31:34" },
        { term: "وَيُنَزِّلُ الْغَيْثَ", meaning: "He sends down the rain", explanation: "Exact timing and location of rain", verseRef: "31:34" },
        { term: "وَيَعْلَمُ مَا فِي الْأَرْحَامِ", meaning: "Knows what is in the wombs", explanation: "Not just gender but destiny, character, lifespan", verseRef: "31:34" },
        { term: "وَمَا تَدْرِي نَفْسٌ مَّاذَا تَكْسِبُ غَدًا", meaning: "No soul knows what it will earn tomorrow", explanation: "Future deeds and provisions unknown to creation", verseRef: "31:34" },
        { term: "وَمَا تَدْرِي نَفْسٌ بِأَيِّ أَرْضٍ تَمُوتُ", meaning: "No soul knows in what land it will die", explanation: "Place and time of death - exclusive divine knowledge", verseRef: "31:34" },
        { term: "إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ", meaning: "Allah is All-Knowing, All-Aware", explanation: "Comprehensive divine knowledge of all things", verseRef: "31:34" }
      ]
    }
  },

  relationships: [
    { from: "الحكمة", to: "اشكر لله", type: "foundation", description: "First fruit of wisdom is gratitude to Allah" },
    { from: "لا تشرك بالله", to: "ظلم عظيم", type: "consequence", description: "Shirk is the greatest injustice" },
    { from: "وصايا لقمان", to: "عزم الأمور", type: "requirement", description: "His advice requires firm determination" },
    { from: "اشكر لي", to: "ولوالديك", type: "sequence", description: "Gratitude to Allah then to parents" },
    { from: "لا تصعر خدك", to: "لا تمش مرحا", type: "parallel", description: "Both relate to humility in behavior" },
    { from: "اقصد في مشيك", to: "اغضض من صوتك", type: "parallel", description: "Moderation in walking and speaking" },
    { from: "مثقال حبة", to: "لطيف خبير", type: "explanation", description: "Allah's subtle awareness explains His knowledge of the smallest things" },
    { from: "العروة الوثقى", to: "محسن", type: "condition", description: "Grasping firm handhold requires being a doer of good" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Wise Quran", verses: "31:1-5", description: "Quran as guidance for the muhsineen who believe and act" },
      { stage: 2, theme: "Misguidance Warning", verses: "31:6-7", description: "Those who trade guidance for idle amusement" },
      { stage: 3, theme: "Promise to Believers", verses: "31:8-9", description: "Gardens of pleasure for the righteous" },
      { stage: 4, theme: "Signs in Creation", verses: "31:10-11", description: "Heavens, mountains, creatures - Allah's creation vs. false gods" },
      { stage: 5, theme: "Luqman's Wisdom", verses: "31:12-13", description: "Gratitude and Tawheed - foundation of wisdom" },
      { stage: 6, theme: "Parental Rights", verses: "31:14-15", description: "Mother's sacrifice, gratitude to parents, limits of obedience" },
      { stage: 7, theme: "Allah's Knowledge", verses: "31:16", description: "Nothing hidden from Allah - mustard seed parable" },
      { stage: 8, theme: "Practical Guidance", verses: "31:17-19", description: "Prayer, enjoining good, patience, humility, moderation" },
      { stage: 9, theme: "Allah's Blessings", verses: "31:20-21", description: "Creation subjected to humanity, yet many argue without knowledge" },
      { stage: 10, theme: "Firm Handhold", verses: "31:22-24", description: "True submission vs. disbelievers' temporary enjoyment" },
      { stage: 11, theme: "Creation Testifies", verses: "31:25-30", description: "All acknowledge Allah as Creator, yet worship others" },
      { stage: 12, theme: "Five Keys of Unseen", verses: "31:31-34", description: "Ships as signs, fear of Judgment, exclusive divine knowledge" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Foundation: Tawheed", how: "Begin all teaching with the oneness of Allah - it's Luqman's first advice", verse: "31:13" },
      { principle: "Gratitude first", how: "Before asking for more, thank Allah for what you have", verse: "31:12" },
      { principle: "Gentle parenting", how: "Use 'Ya Bunayya' - address children with love, not harshness", verse: "31:13" },
      { principle: "Honor parents always", how: "Even if they're non-Muslim, treat them with kindness in worldly matters", verse: "31:15" },
      { principle: "Accountability awareness", how: "Remember: even a mustard seed's weight of deed is recorded", verse: "31:16" },
      { principle: "Establish prayer", how: "Make salah the pillar of your daily routine", verse: "31:17" },
      { principle: "Active faith", how: "Command good and forbid evil - Islam is not passive", verse: "31:17" },
      { principle: "Practice patience", how: "Expect trials when doing good, and bear them with sabr", verse: "31:17" },
      { principle: "Check arrogance", how: "Monitor your walk, your tone, your facial expressions for pride", verse: "31:18-19" },
      { principle: "Moderate voice", how: "Speak softly - loud unnecessary speech is compared to donkeys", verse: "31:19" },
      { principle: "Accept unknowns", how: "Don't worry about tomorrow or death - trust Allah's plan", verse: "31:34" }
    ]
  },

  uniqueInsight: {
    title: "The Comprehensive Parental Manual",
    insight: "Surah Luqman is unique in presenting a complete methodology for raising righteous children through the advice of a wise father. Notice the structure: Luqman begins with Tawheed (creed), moves to parent-child relations (ethics), then to prayer and social responsibility (action), and finally to character refinement (conduct). This covers 'aqeedah, mu'amalat, 'ibadah, and akhlaq - the four pillars of Islamic education. Most remarkably, his advice uses three types of reasoning: theological (shirk is wrong because Allah alone deserves worship), logical (Allah knows even a mustard seed, so nothing is hidden), and social (loud voice is ugly like a donkey). A wise parent addresses heart, mind, and behavior. The diminutive 'Ya Bunayya' (O my dear son) appears repeatedly, modeling that wisdom is transmitted through love, not force."
  },

  linguisticFeatures: {
    features: [
      { feature: "يَا بُنَيَّ (diminutive)", example: "O my dear little son", effect: "Shows deep parental love and tenderness" },
      { feature: "وَهْنًا عَلَىٰ وَهْنٍ (repetition)", example: "Weakness upon weakness", effect: "Emphasizes cumulative exhaustion of pregnancy" },
      { feature: "مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ (imagery)", example: "Weight of a mustard seed", effect: "Smallest imaginable thing - nothing escapes Allah" },
      { feature: "لَصَوْتُ الْحَمِيرِ (comparison)", example: "Like voice of donkeys", effect: "Harsh imagery to deter loud, unnecessary speech" },
      { feature: "الْعُرْوَةِ الْوُثْقَىٰ (metaphor)", example: "The firmest handhold", effect: "Faith as something to grip tightly, unbreakable" },
      { feature: "Contrast: مُخْتَال فَخُور", example: "Self-conceited, boastful", effect: "Internal pride (mukhtal) vs. external showing off (fakhoor)" }
    ]
  },

  keyTerms: [
    { term: "الْحِكْمَة", transliteration: "Al-Hikmah", meaning: "Wisdom - putting knowledge into correct action" },
    { term: "يَا بُنَيَّ", transliteration: "Ya Bunayya", meaning: "O my dear son - tender address" },
    { term: "الشِّرْك", transliteration: "Ash-Shirk", meaning: "Associating partners with Allah" },
    { term: "وَهْن", transliteration: "Wahn", meaning: "Weakness, frailty (describing pregnancy)" },
    { term: "لَطِيف", transliteration: "Lateef", meaning: "Subtle - reaches finest details" },
    { term: "خَبِير", transliteration: "Khabeer", meaning: "All-Aware - fully informed" },
    { term: "مُخْتَال", transliteration: "Mukhtal", meaning: "Self-conceited, internally proud" },
    { term: "فَخُور", transliteration: "Fakhoor", meaning: "Boastful, showing off to others" },
    { term: "الْعُرْوَة الْوُثْقَى", transliteration: "Al-'Urwat al-Wuthqa", meaning: "The firmest handhold" },
    { term: "لَهْو الْحَدِيث", transliteration: "Lahw al-Hadith", meaning: "Idle/distracting talk or entertainment" }
  ]
};

export default ONTOLOGY;
