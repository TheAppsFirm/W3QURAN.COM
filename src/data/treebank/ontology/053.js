/**
 * Surah An-Najm (The Star) - Surah 53
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 53,
  surahName: "An-Najm",
  surahNameArabic: "النجم",
  totalAyahs: 62,
  revelationType: "Makkan",
  mainTheme: "The Prophet's Mi'raj Vision, Refutation of False Idols, Individual Accountability",

  categories: {
    starOath: {
      name: "The Star Oath",
      nameAr: "القسم بالنجم",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "An-Najm", arabic: "النجم", meaning: "The Star when it descends", explanation: "Divine oath by the setting/descending star", ayahs: [1] },
        { term: "Companion Not Astray", arabic: "ما ضل صاحبكم", meaning: "Your companion has not strayed", explanation: "Defense of Prophet Muhammad's truthfulness", ayahs: [2] },
        { term: "Not Speaking from Desire", arabic: "وما ينطق عن الهوى", meaning: "Nor does he speak from desire", explanation: "The Prophet's words are divinely guided", ayahs: [3] },
        { term: "Revelation Revealed", arabic: "وحي يوحى", meaning: "It is only revelation revealed", explanation: "The Quran is pure divine revelation", ayahs: [4] }
      ]
    },

    angelicTeacher: {
      name: "The Angelic Teacher",
      nameAr: "المعلم الملائكي",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Shadid al-Quwa", arabic: "شديد القوى", meaning: "One mighty in power", explanation: "Jibreel described by his tremendous strength", ayahs: [5] },
        { term: "Dhu Mirrah", arabic: "ذو مرة", meaning: "Possessor of soundness/vigor", explanation: "Jibreel's perfection and uprightness", ayahs: [6] },
        { term: "Istawa", arabic: "استوى", meaning: "He rose/appeared on the horizon", explanation: "Jibreel appeared in his original form", ayahs: [6, 7] },
        { term: "Bi al-Ufuq al-A'la", arabic: "بالأفق الأعلى", meaning: "On the highest horizon", explanation: "First sighting of Jibreel in his true form", ayahs: [7] },
        { term: "Tadalla", arabic: "ثم دنا فتدلى", meaning: "Then he drew near and descended", explanation: "Jibreel approached the Prophet", ayahs: [8] },
        { term: "Qaba Qawsayn", arabic: "قاب قوسين", meaning: "Distance of two bow lengths", explanation: "Extreme closeness - idiom for very near", ayahs: [9] }
      ]
    },

    mirajVision: {
      name: "The Mi'raj Vision",
      nameAr: "رؤية المعراج",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Divine Revelation", arabic: "فأوحى إلى عبده ما أوحى", meaning: "So He revealed to His servant what He revealed", explanation: "Sacred communication during Mi'raj", ayahs: [10] },
        { term: "Heart Did Not Lie", arabic: "ما كذب الفؤاد ما رأى", meaning: "The heart did not lie about what it saw", explanation: "Prophet's vision was true and real", ayahs: [11] },
        { term: "Will You Dispute?", arabic: "أفتمارونه على ما يرى", meaning: "Will you dispute with him over what he saw?", explanation: "Challenge to those denying the vision", ayahs: [12] },
        { term: "Second Sighting", arabic: "نزلة أخرى", meaning: "Another descent/meeting", explanation: "The second encounter during Mi'raj", ayahs: [13] },
        { term: "Sidrat al-Muntaha", arabic: "سدرة المنتهى", meaning: "The Lote Tree of the Utmost Boundary", explanation: "The furthest limit beyond which none can pass", ayahs: [14] },
        { term: "Jannat al-Ma'wa", arabic: "جنة المأوى", meaning: "The Garden of Refuge", explanation: "Paradise near the Lote Tree", ayahs: [15] },
        { term: "Covering of the Lote Tree", arabic: "إذ يغشى السدرة ما يغشى", meaning: "When there covered the Lote Tree that which covered it", explanation: "Indescribable divine light/angels covering the tree", ayahs: [16] },
        { term: "Eye Did Not Deviate", arabic: "ما زاغ البصر وما طغى", meaning: "The sight did not deviate nor transgress", explanation: "Prophet's composure during the divine encounter", ayahs: [17] },
        { term: "Greatest Signs", arabic: "الآيات الكبرى", meaning: "The greatest of signs", explanation: "What the Prophet witnessed of Allah's creation", ayahs: [18] }
      ]
    },

    falseIdolsRefuted: {
      name: "False Idols Refuted",
      nameAr: "إبطال الأصنام",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Al-Lat", arabic: "اللات", meaning: "The idol Lat", explanation: "Chief goddess worshipped in Ta'if", ayahs: [19] },
        { term: "Al-Uzza", arabic: "العزى", meaning: "The idol Uzza", explanation: "Goddess worshipped by Quraysh", ayahs: [19] },
        { term: "Manat", arabic: "مناة", meaning: "The idol Manat", explanation: "Goddess of fate worshipped in Medina area", ayahs: [20] },
        { term: "Male vs Female", arabic: "الذكر والأنثى", meaning: "Male offspring vs female", explanation: "Hypocrisy: Arabs preferred sons but gave Allah 'daughters'", ayahs: [21] },
        { term: "Unfair Division", arabic: "قسمة ضيزى", meaning: "An unfair division", explanation: "Assigning unwanted female offspring to Allah", ayahs: [22] },
        { term: "Empty Names", arabic: "أسماء سميتموها", meaning: "Names you and your fathers named", explanation: "Idols are just human inventions with no divine authority", ayahs: [23] },
        { term: "Following Conjecture", arabic: "الظن وما تهوى الأنفس", meaning: "Following assumption and desires", explanation: "Idol worship based on guesswork and whims", ayahs: [23] }
      ]
    },

    divineAuthority: {
      name: "Divine Authority",
      nameAr: "السلطان الإلهي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "To Allah Belongs", arabic: "لله ما في السماوات والأرض", meaning: "To Allah belongs what is in heavens and earth", explanation: "Complete divine ownership", ayahs: [31] },
        { term: "Rewards Good", arabic: "يجزي الذين أساءوا... ويجزي الذين أحسنوا", meaning: "He will recompense evil-doers and good-doers", explanation: "Divine justice in reward and punishment", ayahs: [31] },
        { term: "Avoiding Major Sins", arabic: "يجتنبون كبائر الإثم", meaning: "Those who avoid major sins", explanation: "Condition for Allah's forgiveness", ayahs: [32] },
        { term: "Wide Forgiveness", arabic: "واسع المغفرة", meaning: "Vast in forgiveness", explanation: "Allah's mercy encompasses all", ayahs: [32] },
        { term: "Allah Knows Best", arabic: "هو أعلم بكم", meaning: "He is most knowing of you", explanation: "Allah knew you from creation in womb", ayahs: [32] }
      ]
    },

    intercessionDenied: {
      name: "False Intercession Denied",
      nameAr: "إبطال الشفاعة الباطلة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Angels Cannot Help", arabic: "لا تغني شفاعتهم شيئا", meaning: "Their intercession avails nothing", explanation: "Angels cannot intercede without Allah's permission", ayahs: [26] },
        { term: "Naming Angels Female", arabic: "يسمون الملائكة تسمية الأنثى", meaning: "They name the angels female names", explanation: "Polytheists falsely claimed angels were Allah's daughters", ayahs: [27] },
        { term: "No Knowledge", arabic: "ما لهم به من علم", meaning: "They have no knowledge of it", explanation: "Claims about angels based on ignorance", ayahs: [28] },
        { term: "Following Conjecture", arabic: "الظن لا يغني من الحق", meaning: "Assumption avails nothing against truth", explanation: "Guesswork cannot establish religious truth", ayahs: [28] }
      ]
    },

    individualAccountability: {
      name: "Individual Accountability",
      nameAr: "المسؤولية الفردية",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Turn Away from Heedless", arabic: "فأعرض عمن تولى عن ذكرنا", meaning: "Turn away from whoever turns from Our remembrance", explanation: "Leave those who reject truth", ayahs: [29] },
        { term: "Only Worldly Life", arabic: "إلا الحياة الدنيا", meaning: "They only desire worldly life", explanation: "Materialistic mindset of deniers", ayahs: [29, 30] },
        { term: "Extent of Knowledge", arabic: "ذلك مبلغهم من العلم", meaning: "That is their extent of knowledge", explanation: "Limited to worldly affairs only", ayahs: [30] },
        { term: "No Bearer Bears Another's", arabic: "ألا تزر وازرة وزر أخرى", meaning: "No bearer bears another's burden", explanation: "Each person responsible only for their own sins", ayahs: [38] },
        { term: "Only What You Strive For", arabic: "ليس للإنسان إلا ما سعى", meaning: "Man gets only what he strives for", explanation: "Reward based on personal effort", ayahs: [39] },
        { term: "Effort Will Be Seen", arabic: "وأن سعيه سوف يرى", meaning: "And his effort will be seen", explanation: "All deeds will be shown on Judgment Day", ayahs: [40] },
        { term: "Full Recompense", arabic: "ثم يجزاه الجزاء الأوفى", meaning: "Then he will be given the fullest recompense", explanation: "Complete justice in reward", ayahs: [41] }
      ]
    },

    scrollsOfIbrahim: {
      name: "Scrolls of Ibrahim and Musa",
      nameAr: "صحف إبراهيم وموسى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Scriptures of Ibrahim", arabic: "صحف إبراهيم", meaning: "The Scrolls of Ibrahim", explanation: "Earlier revelation to Prophet Ibrahim", ayahs: [36, 37] },
        { term: "Scriptures of Musa", arabic: "صحف موسى الذي وفى", meaning: "Scrolls of Musa who fulfilled", explanation: "Musa completed his mission and covenant", ayahs: [36, 37] },
        { term: "No Bearer Bears Another", arabic: "ألا تزر وازرة وزر أخرى", meaning: "That no bearer of burdens will bear another's burden", explanation: "Universal principle from earlier scriptures", ayahs: [38] },
        { term: "Final Destination Allah", arabic: "وأن إلى ربك المنتهى", meaning: "And to your Lord is the final destination", explanation: "All return to Allah", ayahs: [42] }
      ]
    },

    divineCreation: {
      name: "Divine Creation and Power",
      nameAr: "الخلق والقدرة الإلهية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Laughter and Weeping", arabic: "أضحك وأبكى", meaning: "He causes laughter and weeping", explanation: "Allah controls human emotions", ayahs: [43] },
        { term: "Death and Life", arabic: "أمات وأحيا", meaning: "He causes death and gives life", explanation: "Complete power over existence", ayahs: [44] },
        { term: "Male and Female Pairs", arabic: "الزوجين الذكر والأنثى", meaning: "He created the two mates, male and female", explanation: "Allah created gender from a single drop", ayahs: [45] },
        { term: "From a Drop", arabic: "من نطفة إذا تمنى", meaning: "From a sperm drop when emitted", explanation: "Human creation from seminal fluid", ayahs: [46] },
        { term: "Second Creation", arabic: "النشأة الأخرى", meaning: "The other creation (resurrection)", explanation: "Allah will recreate for Judgment", ayahs: [47] },
        { term: "Enriches and Satisfies", arabic: "أغنى وأقنى", meaning: "He enriches and contents", explanation: "Allah provides wealth and contentment", ayahs: [48] },
        { term: "Lord of Sirius", arabic: "رب الشعرى", meaning: "Lord of Sirius (the star)", explanation: "Allah owns even the star they worshipped", ayahs: [49] }
      ]
    },

    destroyedNations: {
      name: "Destroyed Nations",
      nameAr: "الأمم المهلكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Aad Destroyed", arabic: "عادا الأولى", meaning: "The former Aad", explanation: "Ancient people destroyed for rejecting Hud", ayahs: [50] },
        { term: "Thamud Spared None", arabic: "وثمود فما أبقى", meaning: "And Thamud - He spared none", explanation: "Complete destruction for rejecting Salih", ayahs: [51] },
        { term: "People of Nuh", arabic: "قوم نوح", meaning: "People of Noah", explanation: "Destroyed by flood for rejecting Nuh", ayahs: [52] },
        { term: "Overturned Cities", arabic: "والمؤتفكة أهوى", meaning: "The overturned cities He hurled down", explanation: "Cities of Lut's people destroyed", ayahs: [53] },
        { term: "What Covered Them", arabic: "فغشاها ما غشى", meaning: "And covered them with what covered", explanation: "Stones and destruction upon Lut's people", ayahs: [54] }
      ]
    },

    warningAndClosing: {
      name: "Final Warning",
      nameAr: "التحذير الختامي",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Which Favor Doubted?", arabic: "فبأي آلاء ربك تتمارى", meaning: "Then which of your Lord's favors do you doubt?", explanation: "Challenge similar to Ar-Rahman", ayahs: [55] },
        { term: "Warner from Ancient Warners", arabic: "هذا نذير من النذر الأولى", meaning: "This is a warner of the former warners", explanation: "Prophet in the chain of messengers", ayahs: [56] },
        { term: "Approaching Hour", arabic: "أزفت الآزفة", meaning: "The Approaching Day has approached", explanation: "Day of Judgment draws near", ayahs: [57] },
        { term: "No Remover But Allah", arabic: "ليس لها من دون الله كاشفة", meaning: "None besides Allah can avert it", explanation: "Only Allah controls the Hour", ayahs: [58] },
        { term: "Wonder at This Discourse?", arabic: "أفمن هذا الحديث تعجبون", meaning: "Do you wonder at this statement?", explanation: "Rebuke for those who mock the Quran", ayahs: [59] },
        { term: "Laugh Instead of Weep", arabic: "وتضحكون ولا تبكون", meaning: "And you laugh and do not weep", explanation: "Inappropriate response to divine warning", ayahs: [60, 61] },
        { term: "Prostrate to Allah", arabic: "فاسجدوا لله واعبدوا", meaning: "So prostrate to Allah and worship", explanation: "Command ending with sajdah tilawah", ayahs: [62] }
      ]
    }
  },

  relationships: [
    { from: "Star Oath", to: "Prophet's Truthfulness", type: "evidence", description: "Star descent parallels revelation descent, validating the Prophet" },
    { from: "Jibreel's Form", to: "Mi'raj Vision", type: "connection", description: "Same angel who appeared twice during the night journey" },
    { from: "Sidrat al-Muntaha", to: "Divine Boundary", type: "symbol", description: "Represents limit of creation, boundary to divine presence" },
    { from: "False Idols", to: "Empty Names", type: "refutation", description: "Lat, Uzza, Manat are human inventions with no authority" },
    { from: "Angel Worship", to: "Conjecture", type: "basis", description: "Claims about angels based on ignorance, not knowledge" },
    { from: "Individual Burden", to: "Scrolls of Ibrahim", type: "source", description: "Accountability principle from earliest scriptures" },
    { from: "Personal Effort", to: "Full Recompense", type: "consequence", description: "What you strive for determines what you receive" },
    { from: "Divine Creation", to: "Resurrection Proof", type: "evidence", description: "He who creates from a drop can recreate" },
    { from: "Destroyed Nations", to: "Warning to Quraysh", type: "parallel", description: "Same fate awaits those who reject this messenger" },
    { from: "Sirius Worship", to: "Divine Ownership", type: "refutation", description: "Even the star they worship belongs to Allah" }
  ],

  thematicFlow: {
    title: "From Divine Vision to Individual Reckoning",
    stages: [
      { name: "The Star Oath", ayahs: [1, 2, 3, 4], description: "Oath by star, validating Prophet's truthfulness" },
      { name: "Angelic Teacher", ayahs: [5, 6, 7, 8, 9, 10], description: "Jibreel teaching the Prophet" },
      { name: "Mi'raj Vision", ayahs: [11, 12, 13, 14, 15, 16, 17, 18], description: "The Prophet's ascension and what he witnessed" },
      { name: "Idols Refuted", ayahs: [19, 20, 21, 22, 23], description: "Lat, Uzza, Manat are empty names" },
      { name: "False Intercession", ayahs: [24, 25, 26, 27, 28], description: "Angels cannot help without Allah's permission" },
      { name: "Turn from Heedless", ayahs: [29, 30], description: "Leave those who desire only worldly life" },
      { name: "Divine Justice", ayahs: [31, 32], description: "Allah rewards good and evil accordingly" },
      { name: "Self-Purification Warning", ayahs: [33, 34, 35], description: "Don't claim self-purity; Allah knows best" },
      { name: "Scrolls Teaching", ayahs: [36, 37, 38, 39, 40, 41, 42], description: "Individual accountability from Ibrahim and Musa" },
      { name: "Divine Power", ayahs: [43, 44, 45, 46, 47, 48, 49], description: "Allah's control over all aspects of existence" },
      { name: "Destroyed Nations", ayahs: [50, 51, 52, 53, 54, 55], description: "Aad, Thamud, Nuh's people, Lut's cities" },
      { name: "Final Warning", ayahs: [56, 57, 58, 59, 60, 61, 62], description: "Hour approaches, prostrate and worship" }
    ]
  },

  uniqueInsight: {
    title: "Qaba Qawsayn - The Ultimate Nearness (قَابَ قَوْسَيْنِ أَوْ أَدْنَى)",
    insight: "Verse 9 describes Jibreel (or according to some, the Prophet approaching Allah) as being 'at a distance of two bow lengths or nearer.' This Arabic idiom (قَابَ قَوْسَيْنِ) expresses extreme closeness—when two archers stand back-to-back, their bows span a very small distance. The phrase 'or nearer' (أَوْ أَدْنَى) pushes beyond measurable distance into the ineffable. This moment during Mi'raj represents the closest any created being has approached the divine presence. The surah places this intimate divine encounter in stark contrast with the pathetic idols—Lat, Uzza, Manat—which are 'nothing but names' (v.23). The message: while your Prophet witnessed the highest horizons and greatest signs, you worship stones that cannot even hear. The first sajdah tilawah (prostration of recitation) ever performed was when this surah was revealed—even the Quraysh prostrated upon hearing it, overwhelmed by its power.",
    arabicTerm: "فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ",
    rootMeaning: "ق-و-س (bow) and د-ن-و (nearness) - intimacy beyond measurement",
    keyAyah: 9
  },

  historicalContext: {
    revelationPeriod: "Middle Makkan period",
    occasion: "Revealed after the Mi'raj (Night Journey) to affirm the Prophet's vision. When recited publicly, its power was so overwhelming that both believers and disbelievers prostrated at its conclusion—the first collective sajdah in Islam. The Quraysh later claimed they were 'bewitched' to excuse their prostration.",
    note: "This is the first surah to have a sajdah tilawah (verse 62). The idol names mentioned—Lat, Uzza, and Manat—were the chief goddesses of pre-Islamic Arabia. The Arabs claimed these were Allah's 'daughters' while preferring sons themselves. The surah demolishes this hypocrisy while establishing the principle that no one bears another's sins—a revolutionary concept against the Arab tribal mentality where family honor and shame were collective."
  },

  linguisticFeatures: {
    features: [
      { name: "Star Oath", description: "وَالنَّجْمِ إِذَا هَوَىٰ", example: "Cosmic oath establishing divine source", ayah: 1 },
      { name: "Vision Verbs", description: "رَأَىٰ / زَاغَ / طَغَىٰ", example: "Precise description of Prophet's controlled observation", ayahs: [11, 17, 18] },
      { name: "Idiomatic Distance", description: "قَابَ قَوْسَيْنِ", example: "Two bow-lengths expressing extreme closeness", ayah: 9 },
      { name: "Rhetorical Questions", description: "أَفَرَأَيْتُمُ / أَفَمِنْ هَـٰذَا", example: "Challenge to reflect on idols and revelation", ayahs: [19, 59] },
      { name: "Paired Opposites", description: "أَضْحَكَ وَأَبْكَىٰ / أَمَاتَ وَأَحْيَا", example: "Allah's complete control over contrasts", ayahs: [43, 44] },
      { name: "Sajdah Command", description: "فَاسْجُدُوا لِلَّهِ وَاعْبُدُوا", example: "Imperative ending requiring prostration", ayah: 62 }
    ]
  },

  theologicalConcepts: {
    concepts: [
      { concept: "Wahy (Revelation)", description: "The Quran is not human speech but divine revelation (v.4)", significance: "Establishes Quran's divine origin" },
      { concept: "Isra and Mi'raj", description: "Prophet's night journey to heavens and vision of greatest signs", significance: "Affirms Prophet's special status" },
      { concept: "Tawhid", description: "Refutation of all partners ascribed to Allah—idols, angels as daughters", significance: "Pure monotheism" },
      { concept: "Individual Accountability", description: "No soul bears another's burden (v.38)", significance: "Personal responsibility in Islam" },
      { concept: "Resurrection", description: "Allah who creates once will create again (v.47)", significance: "Proof of afterlife" }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 17, name: "Al-Isra", relationship: "Both describe aspects of the Night Journey", type: "thematic_parallel" },
      { surah: 81, name: "At-Takwir", relationship: "Both mention Jibreel on the horizon (81:23)", type: "thematic_parallel" },
      { surah: 55, name: "Ar-Rahman", relationship: "Similar question 'which favor do you doubt?' (53:55)", type: "linguistic_parallel" },
      { surah: 54, name: "Al-Qamar", relationship: "Both mention destroyed nations; sequential surahs", type: "sequential_relationship" },
      { surah: 86, name: "At-Tariq", relationship: "Both use star oaths to introduce cosmic themes", type: "thematic_parallel" },
      { surah: 87, name: "Al-A'la", relationship: "Both mention scrolls of Ibrahim (87:19)", type: "thematic_parallel" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Trust the Prophet", how: "He spoke only revelation, not desire", verse: "53:3-4" },
      { principle: "Reject false intermediaries", how: "No idol or angel can intercede without Allah's will", verse: "53:26" },
      { principle: "Bear your own burden", how: "Focus on personal accountability, not others' sins", verse: "53:38" },
      { principle: "Strive for your reward", how: "Only your effort counts; others' deeds won't help you", verse: "53:39" },
      { principle: "Weep, don't laugh", how: "Take divine warnings seriously", verse: "53:60-61" },
      { principle: "Prostrate and worship", how: "Humble yourself before Allah alone", verse: "53:62" }
    ]
  }
};

export default ONTOLOGY;
