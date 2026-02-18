/**
 * Surah Al-Mujadila (The Pleading Woman) - Surah 58
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 58,
  surahName: "Al-Mujadila",
  surahNameArabic: "المجادلة",
  totalAyahs: 22,
  revelationType: "Medinan",
  mainTheme: "Social Regulations, Zihar Laws, and Loyalty to Allah Over Family",

  categories: {
    ziharLaw: {
      name: "Zihar (False Divorce) Legislation",
      nameAr: "أحكام الظهار",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Allah Heard Her Complaint", arabic: "سمع الله قولها", meaning: "Allah heard the woman pleading about her husband", ayahs: [1] },
        { term: "Zihar Declaration", arabic: "الظهار", meaning: "Declaring wife like mother's back", ayahs: [2] },
        { term: "Wives Are Not Mothers", arabic: "ما هن أمهاتهم", meaning: "Wives cannot become like mothers by statement", ayahs: [2] },
        { term: "Munkar Statement", arabic: "قول منكر وزور", meaning: "Zihar is false and evil speech", ayahs: [2] }
      ]
    },
    ziharExpiation: {
      name: "Expiation for Zihar",
      nameAr: "كفارة الظهار",
      color: '#8B5CF6',
      icon: 'Scale',
      concepts: [
        { term: "Freeing a Slave", arabic: "تحرير رقبة", meaning: "First option: free a slave before touching", ayahs: [3] },
        { term: "Two Months Fasting", arabic: "صيام شهرين", meaning: "Second option: fast two consecutive months", ayahs: [4] },
        { term: "Feeding Sixty Poor", arabic: "إطعام ستين مسكينا", meaning: "Third option: feed sixty needy people", ayahs: [4] },
        { term: "Before Intimacy", arabic: "قبل أن يتماسا", meaning: "Expiation must precede resuming relations", ayahs: [3, 4] }
      ]
    },
    divineOmniscience: {
      name: "Allah's Complete Knowledge",
      nameAr: "علم الله الشامل",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "Fourth of Three", arabic: "رابع ثلاثة", meaning: "In any three's conversation, He is the fourth", ayahs: [7] },
        { term: "Fifth of Five", arabic: "خامس خمسة", meaning: "In any five's conversation, He is the sixth", ayahs: [7] },
        { term: "Closer Than Close", arabic: "أدنى من ذلك ولا أكثر", meaning: "Present in every gathering, small or large", ayahs: [7] },
        { term: "Allah Hears and Sees", arabic: "سميع بصير", meaning: "Allah hears all and sees all", ayahs: [1] }
      ]
    },
    secretConversations: {
      name: "Regulations on Private Conversations",
      nameAr: "آداب النجوى",
      color: '#06B6D4',
      icon: 'MessageCircle',
      concepts: [
        { term: "Forbidden Private Talk", arabic: "النجوى المحرمة", meaning: "Secret talk in sin and aggression", ayahs: [8, 9] },
        { term: "Permitted Private Talk", arabic: "النجوى المباحة", meaning: "Secret talk in righteousness and piety", ayahs: [9] },
        { term: "Satan's Whispering", arabic: "نجوى الشيطان", meaning: "Secret talk from Satan to grieve believers", ayahs: [10] },
        { term: "Tawakkul Response", arabic: "التوكل على الله", meaning: "Reliance on Allah against Satan's plots", ayahs: [10] }
      ]
    },
    assemblyEtiquette: {
      name: "Assembly Etiquette",
      nameAr: "آداب المجالس",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Making Room", arabic: "التفسح في المجالس", meaning: "Spreading out when asked in assemblies", ayahs: [11] },
        { term: "Rising When Asked", arabic: "النشوز عند الطلب", meaning: "Rising up when requested to disperse", ayahs: [11] },
        { term: "Allah Makes Room", arabic: "يفسح الله لكم", meaning: "Allah expands for those who make room", ayahs: [11] },
        { term: "Elevation of Knowledge", arabic: "رفع أهل العلم", meaning: "Allah raises those with knowledge in degrees", ayahs: [11] }
      ]
    },
    charityBeforeConsultation: {
      name: "Charity Before Private Consultation",
      nameAr: "الصدقة قبل النجوى",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Sadaqah Before Najwa", arabic: "صدقة قبل النجوى", meaning: "Giving charity before private talk with Prophet", ayahs: [12] },
        { term: "Abrogation of Ruling", arabic: "نسخ الحكم", meaning: "Ruling eased when people hesitated", ayahs: [13] },
        { term: "Prayer and Zakah", arabic: "الصلاة والزكاة", meaning: "Return to basic obligations after abrogation", ayahs: [13] }
      ]
    },
    hypocritesExposed: {
      name: "Hypocrites' False Allegiances",
      nameAr: "فضح المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Allying with Cursed People", arabic: "موالاة المغضوب عليهم", meaning: "Befriending those under Allah's wrath", ayahs: [14] },
        { term: "False Oaths", arabic: "الأيمان الكاذبة", meaning: "Swearing falsely while knowing", ayahs: [14, 18] },
        { term: "Oaths as Shields", arabic: "اتخاذ الأيمان جنة", meaning: "Using false oaths as protection", ayahs: [16] },
        { term: "Neither Group", arabic: "ما هم منكم ولا منهم", meaning: "Belonging to neither believers nor disbelievers", ayahs: [14] }
      ]
    },
    twoParties: {
      name: "Two Opposing Parties",
      nameAr: "الحزبان المتقابلان",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Satan's Party", arabic: "حزب الشيطان", meaning: "Those overcome by Satan, forgetting Allah", ayahs: [19] },
        { term: "Allah's Party", arabic: "حزب الله", meaning: "Those who love Allah over family", ayahs: [22] },
        { term: "Losers", arabic: "الخاسرون", meaning: "Satan's party are the true losers", ayahs: [19] },
        { term: "Successful", arabic: "المفلحون", meaning: "Allah's party are the successful", ayahs: [22] }
      ]
    },
    loyaltyToAllah: {
      name: "Loyalty to Allah Over Family",
      nameAr: "الولاء لله فوق القرابة",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "No Affection for Opponents", arabic: "عدم موادة المحادين", meaning: "Not loving those who oppose Allah", ayahs: [22] },
        { term: "Even If Family", arabic: "ولو كانوا آباءهم", meaning: "Even if they are fathers, sons, brothers, clan", ayahs: [22] },
        { term: "Faith Written in Hearts", arabic: "كتب في قلوبهم الإيمان", meaning: "Allah inscribes faith in believers' hearts", ayahs: [22] },
        { term: "Spirit from Allah", arabic: "أيدهم بروح منه", meaning: "Allah supports them with a spirit from Him", ayahs: [22] }
      ]
    }
  },

  relationships: [
    { from: "Woman's Plea", to: "Divine Response", type: "answered_prayer", description: "Allah heard and revealed zihar laws" },
    { from: "Zihar Statement", to: "Expiation", type: "remedy", description: "False statement requires atonement" },
    { from: "Expiation Levels", to: "Ability", type: "gradation", description: "Three levels based on financial ability" },
    { from: "Divine Omniscience", to: "Private Conversations", type: "warning", description: "Allah is present in all gatherings" },
    { from: "Making Room", to: "Divine Expansion", type: "reciprocity", description: "Allah expands for those who accommodate others" },
    { from: "Knowledge Seekers", to: "Elevated Ranks", type: "reward", description: "People of knowledge raised in degrees" },
    { from: "False Oaths", to: "Shield Against Truth", type: "misuse", description: "Hypocrites misuse oaths for protection" },
    { from: "Satan's Domination", to: "Forgetting Allah", type: "consequence", description: "Satan makes them forget divine remembrance" },
    { from: "Family Ties", to: "Faith Loyalty", type: "subordination", description: "Love for Allah supersedes family love" }
  ],

  thematicFlow: {
    title: "From Personal Plea to Universal Principle",
    stages: [
      { name: "Woman's Complaint Heard", ayahs: [1], description: "Allah hears Khawla's plea about zihar" },
      { name: "Zihar Condemned", ayahs: [2], description: "Zihar declared false and evil speech" },
      { name: "Expiation Levels", ayahs: [3, 4], description: "Three-tiered expiation: slave, fasting, feeding" },
      { name: "Divine Limits", ayahs: [5], description: "These are Allah's boundaries" },
      { name: "Opposition Condemned", ayahs: [6], description: "Those opposing Allah will be humiliated" },
      { name: "Divine Omniscience", ayahs: [7], description: "Allah present in every private gathering" },
      { name: "Secret Talk Rules", ayahs: [8, 9, 10], description: "Forbidden and permitted private conversations" },
      { name: "Assembly Etiquette", ayahs: [11], description: "Making room and rising when asked" },
      { name: "Charity Before Consultation", ayahs: [12, 13], description: "Sadaqah requirement and its easing" },
      { name: "Hypocrites Exposed", ayahs: [14, 15, 16, 17, 18], description: "False alliances and oaths" },
      { name: "Two Parties", ayahs: [19, 20, 21], description: "Satan's party vs Allah's decree of victory" },
      { name: "Faith Over Family", ayahs: [22], description: "True believers don't love Allah's enemies" }
    ]
  },

  practicalApplication: {
    title: "Living the Lessons of Al-Mujadila",
    applications: [
      {
        context: "Marital Disputes",
        teaching: "Never equate wife to mother in anger; it's a grave sin requiring expiation",
        ayah: 2
      },
      {
        context: "Awareness of Allah",
        teaching: "Remember Allah is present in every private conversation",
        ayah: 7
      },
      {
        context: "Private Conversations",
        teaching: "Use privacy for good counsel, not sin, aggression, or disobedience",
        ayah: 9
      },
      {
        context: "In Gatherings",
        teaching: "Make room for others; Allah will make room for you",
        ayah: 11
      },
      {
        context: "Knowledge Seeking",
        teaching: "Those with knowledge are elevated in rank by Allah",
        ayah: 11
      },
      {
        context: "Against False Oaths",
        teaching: "Never use oaths as shields for wrongdoing",
        ayah: 16
      },
      {
        context: "Loyalty Priorities",
        teaching: "Love for Allah must supersede even family ties",
        ayah: 22
      }
    ]
  },

  uniqueInsight: {
    title: "Divine Presence in Every Gathering (مَا يَكُونُ مِن نَّجْوَىٰ ثَلَاثَةٍ إِلَّا هُوَ رَابِعُهُمْ)",
    insight: "Verse 7 presents one of the Quran's most powerful statements about divine omniscience: in any private conversation of three, Allah is the fourth; in any gathering of five, He is the sixth. This isn't about numerical presence but about complete awareness. The verse systematically covers all possible group sizes ('nor less than that nor more') and notes that Allah will inform them of their discussions on Judgment Day. This awareness serves as both a warning (against evil scheming) and a comfort (Allah witnesses injustice against the oppressed). The woman Khawla came to complain about her husband, and Aisha said she could barely hear parts of her conversation with the Prophet from the same room—yet Allah heard it all from above the seven heavens. This surah begins and ends with divine knowledge: hearing one woman's whispered plea (v.1) and knowing who truly loves Him over their own families (v.22).",
    arabicTerm: "مَا يَكُونُ مِن نَّجْوَىٰ ثَلَاثَةٍ إِلَّا هُوَ رَابِعُهُمْ",
    rootMeaning: "ن-ج-و (to whisper secretly) - Allah is present in all private counsel",
    keyAyah: 7
  },

  historicalContext: {
    revelationPeriod: "Medinan period, around 5-6 AH",
    occasion: "Khawla bint Tha'laba came to the Prophet complaining about her husband Aws ibn al-Samit, who had declared zihar (saying 'you are to me like my mother's back'). This pre-Islamic formula was used to abandon wives without formally divorcing them. She pleaded for justice, and Allah revealed this surah starting with 'Indeed, Allah has heard...'",
    note: "The surah's name 'Al-Mujadila' (The Pleading Woman) immortalizes Khawla's complaint—a woman's voice reaching the heavens. The zihar laws abolished a cruel pre-Islamic practice. The abrogated charity-before-consultation ruling (v.12-13) shows how Allah eases rulings based on the ummah's capacity. 'Umar noted that Ali ibn Abi Talib was the only one who acted on v.12 before its abrogation."
  },

  linguisticFeatures: {
    features: [
      { name: "Opening Formula", description: "قَدْ سَمِعَ - emphatic 'Indeed Allah has heard'", example: "Past tense indicating certainty", ayah: 1 },
      { name: "Numerical Progression", description: "Three→fourth, five→sixth pattern", example: "Systematic coverage of all group sizes", ayah: 7 },
      { name: "Dual Party Contrast", description: "حِزْبُ الشَّيْطَانِ vs حِزْبُ اللَّهِ", example: "Clear binary between losers and successful", ayahs: [19, 22] },
      { name: "Family Listing", description: "Fathers, sons, brothers, kindred", example: "Comprehensive family relations subordinated to faith", ayah: 22 },
      { name: "Attention Particle", description: "أَلَا إِنَّ - 'Unquestionably indeed'", example: "Strong warning formula", ayahs: [18, 19] }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Psychology of Privacy",
        observation: "The surah's warning that Allah is present in private conversations addresses the psychological tendency to behave differently when unobserved",
        ayah: 7
      },
      {
        topic: "Social Dynamics",
        observation: "Making room in gatherings (v.11) reflects understanding that physical space affects social relationships and dignity",
        ayah: 11
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 65, name: "At-Talaq", relationship: "Both address marriage regulations and women's rights", type: "thematic_parallel" },
      { surah: 33, name: "Al-Ahzab", relationship: "Both address zihar (v.4 of Al-Ahzab)", type: "thematic_parallel" },
      { surah: 63, name: "Al-Munafiqun", relationship: "Both expose hypocrites' false oaths", type: "thematic_parallel" },
      { surah: 59, name: "Al-Hashr", relationship: "Following surah, both address loyalty boundaries", type: "sequential_relationship" },
      { surah: 9, name: "At-Tawbah", relationship: "Both discuss loyalty to Allah over family", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
