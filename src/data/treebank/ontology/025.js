/**
 * Surah Al-Furqan (25) - Ontology of Quranic Concepts
 * The Criterion / The Standard
 * Theme: The Quran as criterion, qualities of true servants ('Ibad ar-Rahman), rejection of deniers
 */

export const ONTOLOGY = {
  surahId: 25,
  surahName: "Al-Furqan",
  surahNameArabic: "الفرقان",
  revelationType: "Makki",
  totalAyahs: 77,

  categories: {
    theFurqan: {
      name: "Al-Furqan (The Criterion)",
      nameArabic: "الفرقان",
      color: "#F59E0B",
      icon: "Book",
      concepts: [
        { term: "تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ", meaning: "Blessed is He who sent down the Criterion", explanation: "The Quran as the ultimate distinction between truth and falsehood", verseRef: "25:1" },
        { term: "عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا", meaning: "Upon His servant to be a warner to the worlds", explanation: "Prophet as universal warner through Quran", verseRef: "25:1" },
        { term: "أَسَاطِيرُ الْأَوَّلِينَ اكْتَتَبَهَا", meaning: "Legends of the former peoples he had written", explanation: "Accusation against Quran rejected", verseRef: "25:5" },
        { term: "قُلْ أَنزَلَهُ الَّذِي يَعْلَمُ السِّرَّ", meaning: "Say: Sent down by He who knows the secret", explanation: "Divine origin of Quran confirmed", verseRef: "25:6" }
      ]
    },

    deniersObjections: {
      name: "Objections of Deniers",
      nameArabic: "اعتراضات المنكرين",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "مَا لِهَٰذَا الرَّسُولِ يَأْكُلُ الطَّعَامَ", meaning: "What is this messenger who eats food?", explanation: "They expected non-human messenger", verseRef: "25:7" },
        { term: "لَوْلَا أُنزِلَ إِلَيْهِ مَلَكٌ", meaning: "Why was not an angel sent down to him?", explanation: "Demand for angelic messenger", verseRef: "25:7" },
        { term: "أَوْ يُلْقَىٰ إِلَيْهِ كَنزٌ", meaning: "Or there is dropped to him a treasure", explanation: "Material expectations from prophet", verseRef: "25:8" },
        { term: "أَوْ تَكُونُ لَهُ جَنَّةٌ يَأْكُلُ مِنْهَا", meaning: "Or he has a garden from which he eats", explanation: "Worldly prosperity as proof demand", verseRef: "25:8" },
        { term: "إِنْ هَٰذَا إِلَّا رَجُلٌ مَّسْحُورٌ", meaning: "This is not but a man affected by magic", explanation: "Accusation of being bewitched", verseRef: "25:8" },
        { term: "لَوْلَا نُزِّلَ عَلَيْهِ الْقُرْآنُ جُمْلَةً وَاحِدَةً", meaning: "Why was not the Quran revealed all at once?", explanation: "Questioning gradual revelation", verseRef: "25:32" }
      ]
    },

    divineResponses: {
      name: "Divine Responses",
      nameArabic: "الردود الإلهية",
      color: "#8B5CF6",
      icon: "Zap",
      concepts: [
        { term: "انظُرْ كَيْفَ ضَرَبُوا لَكَ الْأَمْثَالَ", meaning: "Look how they strike parables for you", explanation: "Their confused reasoning exposed", verseRef: "25:9" },
        { term: "فَضَلُّوا فَلَا يَسْتَطِيعُونَ سَبِيلًا", meaning: "And have strayed, unable to find a way", explanation: "Their misguidance confirmed", verseRef: "25:9" },
        { term: "كَذَٰلِكَ لِنُثَبِّتَ بِهِ فُؤَادَكَ", meaning: "Thus to strengthen your heart thereby", explanation: "Gradual revelation for support", verseRef: "25:32" },
        { term: "وَرَتَّلْنَاهُ تَرْتِيلًا", meaning: "And We have recited it distinctly", explanation: "Perfect arrangement of Quran", verseRef: "25:32" }
      ]
    },

    previousNations: {
      name: "Stories of Previous Nations",
      nameArabic: "قصص الأمم السابقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قَوْمَ نُوحٍ لَّمَّا كَذَّبُوا الرُّسُلَ", meaning: "People of Noah when they denied messengers", explanation: "First example of destruction", verseRef: "25:37" },
        { term: "وَعَادًا وَثَمُودَ", meaning: "And Aad and Thamud", explanation: "Arab peoples destroyed", verseRef: "25:38" },
        { term: "وَأَصْحَابَ الرَّسِّ", meaning: "And companions of the well", explanation: "Ancient people destroyed", verseRef: "25:38" },
        { term: "وَقُرُونًا بَيْنَ ذَٰلِكَ كَثِيرًا", meaning: "And many generations between", explanation: "Countless examples", verseRef: "25:38" },
        { term: "قَوْمُ مُّوسَىٰ", meaning: "People of Moses", explanation: "Pharaoh's destruction", verseRef: "25:35-36" },
        { term: "قَوْمَ لُوطٍ", meaning: "People of Lot", explanation: "Cities overturned", verseRef: "25:40" }
      ]
    },

    signsOfAllah: {
      name: "Signs in Creation",
      nameArabic: "الآيات الكونية",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "مَدَّ الظِّلَّ", meaning: "Extends the shadow", explanation: "Shadow as sign of Allah", verseRef: "25:45" },
        { term: "جَعَلَ الشَّمْسَ عَلَيْهِ دَلِيلًا", meaning: "Made the sun for it an indication", explanation: "Sun-shadow relationship", verseRef: "25:45" },
        { term: "جَعَلَ لَكُمُ اللَّيْلَ لِبَاسًا", meaning: "Made night for you as clothing", explanation: "Night covers like garment", verseRef: "25:47" },
        { term: "وَالنَّوْمَ سُبَاتًا", meaning: "And sleep as rest", explanation: "Sleep for recovery", verseRef: "25:47" },
        { term: "وَجَعَلَ النَّهَارَ نُشُورًا", meaning: "And made the day a resurrection", explanation: "Daily awakening like resurrection", verseRef: "25:47" },
        { term: "أَرْسَلَ الرِّيَاحَ بُشْرًا", meaning: "Sends winds as glad tidings", explanation: "Winds bring rain news", verseRef: "25:48" },
        { term: "وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا", meaning: "And We sent down pure water from sky", explanation: "Rain as purifying water", verseRef: "25:48" },
        { term: "لِّنُحْيِيَ بِهِ بَلْدَةً مَّيْتًا", meaning: "To give life to a dead land", explanation: "Water revives dead earth", verseRef: "25:49" },
        { term: "وَهُوَ الَّذِي مَرَجَ الْبَحْرَيْنِ", meaning: "He released the two seas", explanation: "Two seas that don't mix", verseRef: "25:53" },
        { term: "بَيْنَهُمَا بَرْزَخٌ", meaning: "Between them a barrier", explanation: "Natural barrier between seas", verseRef: "25:53" },
        { term: "خَلَقَ مِنَ الْمَاءِ بَشَرًا", meaning: "Created from water a human", explanation: "Human origin from water", verseRef: "25:54" },
        { term: "وَهُوَ الَّذِي خَلَقَ اللَّيْلَ وَالنَّهَارَ", meaning: "He who created night and day", explanation: "Alternation of time", verseRef: "25:62" }
      ]
    },

    ibadArRahman: {
      name: "Servants of the Most Merciful",
      nameArabic: "عباد الرحمن",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "عِبَادُ الرَّحْمَٰنِ", meaning: "Servants of the Most Merciful", explanation: "Honored title for believers", verseRef: "25:63" },
        { term: "يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا", meaning: "Walk upon earth gently/humbly", explanation: "First quality: humble walking", verseRef: "25:63" },
        { term: "إِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا", meaning: "When addressed by ignorant, say peace", explanation: "Responding to provocation with peace", verseRef: "25:63" },
        { term: "يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا", meaning: "Spend night prostrating and standing", explanation: "Night prayer devotion", verseRef: "25:64" },
        { term: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ", meaning: "Our Lord, avert from us punishment of Hell", explanation: "Fear of Hell despite righteousness", verseRef: "25:65" },
        { term: "إِنَّ عَذَابَهَا كَانَ غَرَامًا", meaning: "Indeed its punishment is inseparable", explanation: "Hell's punishment is permanent", verseRef: "25:65" },
        { term: "إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا", meaning: "When they spend, neither extravagant nor stingy", explanation: "Balanced spending", verseRef: "25:67" },
        { term: "وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًا", meaning: "And is between that moderate", explanation: "Middle path in spending", verseRef: "25:67" },
        { term: "لَا يَدْعُونَ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: "Do not invoke with Allah another deity", explanation: "Pure monotheism", verseRef: "25:68" },
        { term: "وَلَا يَقْتُلُونَ النَّفْسَ", meaning: "Nor kill the soul", explanation: "Prohibition of murder", verseRef: "25:68" },
        { term: "وَلَا يَزْنُونَ", meaning: "Nor commit unlawful intercourse", explanation: "Sexual morality", verseRef: "25:68" },
        { term: "وَلَا يَشْهَدُونَ الزُّورَ", meaning: "Do not witness falsehood", explanation: "Avoid false testimony", verseRef: "25:72" },
        { term: "مَرُّوا بِاللَّغْوِ مَرُّوا كِرَامًا", meaning: "Pass by ill speech with dignity", explanation: "Dignified avoidance of vain talk", verseRef: "25:72" },
        { term: "لَمْ يَخِرُّوا عَلَيْهَا صُمًّا وَعُمْيَانًا", meaning: "Do not fall upon them deaf and blind", explanation: "Mindful reception of guidance", verseRef: "25:73" },
        { term: "هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ", meaning: "Grant us from spouses and offspring comfort of eyes", explanation: "Prayer for righteous family", verseRef: "25:74" },
        { term: "وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", meaning: "Make us leaders for the righteous", explanation: "Aspiration for spiritual leadership", verseRef: "25:74" }
      ]
    },

    repentance: {
      name: "Repentance and Forgiveness",
      nameArabic: "التوبة والمغفرة",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "إِلَّا مَن تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا", meaning: "Except those who repent, believe, do good", explanation: "Three conditions for forgiveness", verseRef: "25:70" },
        { term: "يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ", meaning: "Allah will replace their sins with good deeds", explanation: "Transformation of sins to good deeds", verseRef: "25:70" },
        { term: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا", meaning: "And Allah is Forgiving and Merciful", explanation: "Divine mercy emphasized", verseRef: "25:70" },
        { term: "وَمَن تَابَ وَعَمِلَ صَالِحًا فَإِنَّهُ يَتُوبُ إِلَى اللَّهِ مَتَابًا", meaning: "Whoever repents and does good, returns to Allah completely", explanation: "Complete return through repentance", verseRef: "25:71" }
      ]
    },

    rewardOfServants: {
      name: "Reward of True Servants",
      nameArabic: "جزاء العباد الصالحين",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "يُجْزَوْنَ الْغُرْفَةَ بِمَا صَبَرُوا", meaning: "Will be rewarded with chambers for patience", explanation: "Elevated chambers in Paradise", verseRef: "25:75" },
        { term: "وَيُلَقَّوْنَ فِيهَا تَحِيَّةً وَسَلَامًا", meaning: "Received with greeting and peace", explanation: "Welcome in Paradise", verseRef: "25:75" },
        { term: "خَالِدِينَ فِيهَا", meaning: "Abiding therein eternally", explanation: "Eternal Paradise", verseRef: "25:76" },
        { term: "حَسُنَتْ مُسْتَقَرًّا وَمُقَامًا", meaning: "Good is the settlement and residence", explanation: "Best abode forever", verseRef: "25:76" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameArabic: "الصفات الإلهية",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "To whom belongs dominion of heavens and earth", explanation: "Absolute sovereignty", verseRef: "25:2" },
        { term: "وَلَمْ يَتَّخِذْ وَلَدًا", meaning: "And has not taken a son", explanation: "Rejection of divine offspring", verseRef: "25:2" },
        { term: "وَلَمْ يَكُن لَّهُ شَرِيكٌ فِي الْمُلْكِ", meaning: "And has no partner in dominion", explanation: "No partners in sovereignty", verseRef: "25:2" },
        { term: "وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا", meaning: "Created everything and determined it precisely", explanation: "Perfect divine planning", verseRef: "25:2" },
        { term: "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ", meaning: "Rely upon the Living who does not die", explanation: "Allah's eternal existence", verseRef: "25:58" },
        { term: "وَسَبِّحْ بِحَمْدِهِ", meaning: "And exalt with His praise", explanation: "Continuous glorification", verseRef: "25:58" },
        { term: "وَكَفَىٰ بِهِ بِذُنُوبِ عِبَادِهِ خَبِيرًا", meaning: "Sufficient is He as Aware of sins", explanation: "Complete knowledge of sins", verseRef: "25:58" },
        { term: "الرَّحْمَٰنُ فَاسْأَلْ بِهِ خَبِيرًا", meaning: "The Most Merciful, ask about Him one informed", explanation: "Rahman - key divine name", verseRef: "25:59" }
      ]
    },

    judgmentDay: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "يَوْمَ يَرَوْنَ الْمَلَائِكَةَ", meaning: "The day they see the angels", explanation: "No good news for criminals", verseRef: "25:22" },
        { term: "لَا بُشْرَىٰ يَوْمَئِذٍ لِّلْمُجْرِمِينَ", meaning: "No good tidings that day for criminals", explanation: "Terror for evildoers", verseRef: "25:22" },
        { term: "وَيَقُولُونَ حِجْرًا مَّحْجُورًا", meaning: "And they will say: prevented by a barrier", explanation: "Angels block criminals", verseRef: "25:22" },
        { term: "وَقَدِمْنَا إِلَىٰ مَا عَمِلُوا مِنْ عَمَلٍ", meaning: "And We will approach their deeds", explanation: "Examination of deeds", verseRef: "25:23" },
        { term: "فَجَعَلْنَاهُ هَبَاءً مَّنثُورًا", meaning: "And make them scattered dust", explanation: "Deeds without faith worthless", verseRef: "25:23" },
        { term: "وَيَوْمَ يَعَضُّ الظَّالِمُ عَلَىٰ يَدَيْهِ", meaning: "Day the wrongdoer will bite his hands", explanation: "Extreme regret of wrongdoers", verseRef: "25:27" },
        { term: "يَا لَيْتَنِي اتَّخَذْتُ مَعَ الرَّسُولِ سَبِيلًا", meaning: "If only I had taken path with Messenger", explanation: "Wishing they followed Prophet", verseRef: "25:27" }
      ]
    },

    badCompanionship: {
      name: "Warning Against Bad Company",
      nameArabic: "التحذير من جليس السوء",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "يَا وَيْلَتَىٰ لَيْتَنِي لَمْ أَتَّخِذْ فُلَانًا خَلِيلًا", meaning: "Woe to me! Would I had not taken so-and-so as friend", explanation: "Regret over bad friendships", verseRef: "25:28" },
        { term: "لَّقَدْ أَضَلَّنِي عَنِ الذِّكْرِ بَعْدَ إِذْ جَاءَنِي", meaning: "He led me astray from remembrance after it came", explanation: "Bad friends cause misguidance", verseRef: "25:29" },
        { term: "وَكَانَ الشَّيْطَانُ لِلْإِنسَانِ خَذُولًا", meaning: "And Satan is to man a deserter", explanation: "Satan abandons his followers", verseRef: "25:29" }
      ]
    },

    prophetComplaint: {
      name: "Prophet's Complaint",
      nameArabic: "شكوى الرسول",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "يَا رَبِّ إِنَّ قَوْمِي اتَّخَذُوا هَٰذَا الْقُرْآنَ مَهْجُورًا", meaning: "O Lord, my people have taken this Quran as abandoned", explanation: "Ignoring/deserting the Quran", verseRef: "25:30" },
        { term: "كَذَٰلِكَ جَعَلْنَا لِكُلِّ نَبِيٍّ عَدُوًّا مِّنَ الْمُجْرِمِينَ", meaning: "Thus We made for every prophet an enemy from criminals", explanation: "All prophets faced opposition", verseRef: "25:31" },
        { term: "وَكَفَىٰ بِرَبِّكَ هَادِيًا وَنَصِيرًا", meaning: "Sufficient is your Lord as guide and helper", explanation: "Allah suffices as support", verseRef: "25:31" }
      ]
    }
  },

  relationships: [
    { from: "الفرقان", to: "نذيراً للعالمين", type: "purpose", description: "Criterion sent to warn all worlds" },
    { from: "اعتراضات المنكرين", to: "الردود الإلهية", type: "response", description: "Every objection has divine answer" },
    { from: "قصص الأمم السابقة", to: "يوم القيامة", type: "warning", description: "Past destruction foretells judgment" },
    { from: "عباد الرحمن", to: "الغرفة", type: "reward", description: "Qualities lead to elevated chambers" },
    { from: "التوبة", to: "تبديل السيئات حسنات", type: "transformation", description: "Repentance transforms sins to good" },
    { from: "الشرك والقتل والزنا", to: "العذاب", type: "consequence", description: "Major sins lead to punishment" },
    { from: "يمشون هوناً", to: "سلاماً", type: "character", description: "Humble walking connects to peaceful speech" },
    { from: "الليل والنهار", to: "الماء", type: "signs", description: "All natural phenomena are signs" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction of Furqan", verses: "25:1-9", description: "Quran revealed, deniers' objections" },
      { stage: 2, theme: "Blessings Rejected", verses: "25:10-20", description: "What could have been; their excuses" },
      { stage: 3, theme: "Day of Judgment", verses: "25:21-31", description: "Terror for criminals, Prophet's complaint" },
      { stage: 4, theme: "Gradual Revelation", verses: "25:32-34", description: "Wisdom of Quran's gradual descent" },
      { stage: 5, theme: "Previous Nations", verses: "25:35-44", description: "Moses, Noah, Aad, Thamud, Lot" },
      { stage: 6, theme: "Signs in Nature", verses: "25:45-62", description: "Shadow, night, water, seas, creation" },
      { stage: 7, theme: "Ibad ar-Rahman", verses: "25:63-77", description: "Qualities of true servants and their reward" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Walk humbly", how: "No arrogance in gait, gentle presence", verse: "25:63" },
      { principle: "Respond to ignorance with peace", how: "Don't engage in arguments, say salam", verse: "25:63" },
      { principle: "Establish night prayers", how: "Spend portion of night in worship", verse: "25:64" },
      { principle: "Balance in spending", how: "Neither extravagant nor miserly", verse: "25:67" },
      { principle: "Avoid major sins", how: "No shirk, murder, or adultery", verse: "25:68" },
      { principle: "Avoid false witness", how: "Never testify falsely", verse: "25:72" },
      { principle: "Receive guidance mindfully", how: "Don't be deaf and blind to revelation", verse: "25:73" },
      { principle: "Pray for righteous family", how: "Make dua for spouse and children", verse: "25:74" },
      { principle: "Repent sincerely", how: "Turn back with belief and good deeds", verse: "25:70-71" },
      { principle: "Choose companions wisely", how: "Friends can lead astray or guide", verse: "25:28-29" }
    ]
  },

  uniqueInsight: {
    title: "The Portrait of Perfect Believers",
    insight: "Surah Al-Furqan concludes with one of the most comprehensive portraits of ideal believers in the Quran. The 'Ibad ar-Rahman' (Servants of the Most Merciful) passage (25:63-77) describes 12 distinct qualities that define true believers: (1) Humble walking, (2) Peaceful response to ignorance, (3) Night worship, (4) Fear of Hell, (5) Balanced spending, (6) Avoiding shirk, (7) Not killing, (8) Not committing adultery, (9) Avoiding false witness, (10) Dignified response to vain talk, (11) Mindful reception of guidance, (12) Prayer for righteous family. This is the only place in Quran where believers are given the honorific title 'Ibad ar-Rahman' (servants of THE MOST MERCIFUL specifically), connecting their mercy-like qualities to the Divine Name. The surah begins with Al-Furqan (criterion) distinguishing truth from falsehood, and ends with these servants as the living embodiment of that distinction."
  },

  historicalContext: {
    note: "This Makkan surah addresses the core objections Quraysh raised against the Prophet and the Quran. The accusations that he was bewitched (v.8), that the Quran was copied legends (v.5), and that a human messenger was inappropriate (v.7) were common Makkan attacks. The detailed mention of previous nations' destruction served as warning to Quraysh who knew these stories. The final passage on 'Ibad ar-Rahman' presented the alternative: instead of mockery, these qualities would lead to Paradise. The title 'Al-Furqan' (The Criterion) emphasizes the Quran's role in distinguishing truth from falsehood - a central Makkan theme when monotheism was being distinguished from polytheism."
  },

  linguisticFeatures: {
    features: [
      { feature: "الْفُرْقَانَ", example: "The Criterion", effect: "From ف ر ق - to distinguish/separate; intensive form" },
      { feature: "تَبَارَكَ", example: "Blessed is", effect: "Form VI - intensive blessing, same opening as Surah 67" },
      { feature: "هَوْنًا", example: "Gently/humbly", effect: "Describes manner of walking - with ease and humility" },
      { feature: "سُجَّدًا وَقِيَامًا", example: "Prostrating and standing", effect: "Two postures representing complete prayer" },
      { feature: "قَوَامًا", example: "Moderate/balanced", effect: "From قوم - standing upright, justly balanced" },
      { feature: "الْغُرْفَةَ", example: "The chambers", effect: "Elevated rooms in Paradise - from غرف (upper room)" },
      { feature: "مَهْجُورًا", example: "Abandoned", effect: "From هجر - to abandon; passive participle - the Quran left alone" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "25:45-46", topic: "Shadow extension", note: "Shadow's lengthening and shortening tied to sun's angle - observable science" },
      { verse: "25:47", topic: "Night as covering", note: "Darkness described as garment - night provides cover and rest" },
      { verse: "25:48", topic: "Wind and rain", note: "Winds carrying clouds before rain - meteorological accuracy" },
      { verse: "25:53", topic: "Two seas with barrier", note: "Fresh and salt water meeting with barrier (halocline) - oceanographic phenomenon" },
      { verse: "25:54", topic: "Human origin from water", note: "Water as basis of life - biological accuracy" },
      { verse: "25:59", topic: "Six-day creation", note: "Creation in six periods - cosmological reference" }
    ]
  }
};

export default ONTOLOGY;
