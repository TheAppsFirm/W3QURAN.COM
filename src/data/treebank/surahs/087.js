/**
 * Surah Al-A'la (87) - Quranic Arabic Treebank
 * The Most High
 * Total Ayahs: 19
 * Theme: Glorify Allah, ease of revelation, reminder benefits believers
 */

export const TREEBANK_DATA = {
  surahId: 87,
  surahName: "Al-A'la",
  surahNameArabic: "الأعلى",
  totalAyahs: 19,
  revelationType: "Makki",
  theme: "Glorification of Allah, divine guidance, success through purification",

  1: {
    ayahNumber: 1,
    arabic: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
    words: [
      { position: 1, arabic: "سَبِّحِ", transliteration: "sabbiḥ", root: "س ب ح", meaning: { en: "Glorify", ur: "پاکی بیان کر", ar: "نَزِّهْ" }, pos: "V", posLabel: "V", grammarRole: "imperative", features: { form: "II", mood: "imperative", person: "2", gender: "m", number: "s" }, advanced: { rootFamily: ["تسبيح", "سُبحان", "مُسَبِّح"], linguisticMiracle: "Form II for intensity - complete glorification" } },
      { position: 2, arabic: "اسْمَ", transliteration: "isma", root: "س م و", meaning: { en: "name", ur: "نام", ar: "اسم" }, pos: "N", posLabel: "N", grammarRole: "object", features: { case: "accusative" } },
      { position: 3, arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "of your Lord", ur: "اپنے رب کا", ar: "مالِكِكَ" }, pos: "N", posLabel: "N", grammarRole: "possessive", features: { case: "genitive" } },
      { position: 4, arabic: "الْأَعْلَى", transliteration: "al-aʿlā", root: "ع ل و", meaning: { en: "the Most High", ur: "سب سے بلند", ar: "الأَرفَع" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "أَفْعَل", superlative: true }, advanced: { linguisticMiracle: "Superlative form - nothing is higher than Allah" } }
    ]
  },

  2: {
    ayahNumber: 2,
    arabic: "الَّذِي خَلَقَ فَسَوَّىٰ",
    words: [
      { position: 1, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammarRole: "relative pronoun" },
      { position: 2, arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا", ar: "أَوجَدَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "I", aspect: "perfect", person: "3", gender: "m" } },
      { position: 3, arabic: "فَسَوَّىٰ", transliteration: "fasawwā", root: "س و ي", meaning: { en: "and proportioned", ur: "پھر درست کیا", ar: "فَعَدَّلَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", aspect: "perfect" }, advanced: { linguisticMiracle: "فَ shows immediate sequence - creation and perfection inseparable" } }
    ]
  },

  3: {
    ayahNumber: 3,
    arabic: "وَالَّذِي قَدَّرَ فَهَدَىٰ",
    words: [
      { position: 1, arabic: "وَالَّذِي", transliteration: "wa-alladhī", meaning: { en: "And Who", ur: "اور جس نے", ar: "والذي" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "conjunction + relative" },
      { position: 2, arabic: "قَدَّرَ", transliteration: "qaddara", root: "ق د ر", meaning: { en: "destined/measured", ur: "اندازہ مقرر کیا", ar: "حَدَّدَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", aspect: "perfect" }, advanced: { rootFamily: ["قَدَر", "تقدير", "مُقَدَّر"], linguisticMiracle: "Form II - Allah's precise determination of everything" } },
      { position: 3, arabic: "فَهَدَىٰ", transliteration: "fahadā", root: "ه د ي", meaning: { en: "then guided", ur: "پھر راہ دکھائی", ar: "فَأَرشَدَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "I", aspect: "perfect" } }
    ]
  },

  4: {
    ayahNumber: 4,
    arabic: "وَالَّذِي أَخْرَجَ الْمَرْعَىٰ",
    words: [
      { position: 1, arabic: "وَالَّذِي", transliteration: "wa-alladhī", meaning: { en: "And Who", ur: "اور جس نے", ar: "والذي" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "conjunction + relative" },
      { position: 2, arabic: "أَخْرَجَ", transliteration: "akhraja", root: "خ ر ج", meaning: { en: "brought forth", ur: "نکالی", ar: "أَنبَتَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV", aspect: "perfect" } },
      { position: 3, arabic: "الْمَرْعَىٰ", transliteration: "al-marʿā", root: "ر ع ي", meaning: { en: "the pasture", ur: "چراگاہ", ar: "الكَلَأ" }, pos: "N", posLabel: "N", grammarRole: "object", features: { pattern: "مَفْعَل", case: "accusative" } }
    ]
  },

  5: {
    ayahNumber: 5,
    arabic: "فَجَعَلَهُ غُثَاءً أَحْوَىٰ",
    words: [
      { position: 1, arabic: "فَجَعَلَهُ", transliteration: "fajaʿalahu", root: "ج ع ل", meaning: { en: "Then made it", ur: "پھر اسے بنا دیا", ar: "فَصَيَّرَهُ" }, pos: "V", posLabel: "V", grammarRole: "verb + pronoun" },
      { position: 2, arabic: "غُثَاءً", transliteration: "ghuthā'an", root: "غ ث و", meaning: { en: "debris/stubble", ur: "خشک کوڑا", ar: "هَشيماً" }, pos: "N", posLabel: "N", grammarRole: "object", features: { case: "accusative" } },
      { position: 3, arabic: "أَحْوَىٰ", transliteration: "aḥwā", root: "ح و ي", meaning: { en: "dark/blackened", ur: "سیاہ", ar: "أَسوَدَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "أَفْعَل" }, advanced: { linguisticMiracle: "Cycle of life: green pasture → dry stubble - reminder of mortality" } }
    ]
  },

  6: {
    ayahNumber: 6,
    arabic: "سَنُقْرِئُكَ فَلَا تَنسَىٰ",
    words: [
      { position: 1, arabic: "سَنُقْرِئُكَ", transliteration: "sanuqri'uka", root: "ق ر أ", meaning: { en: "We will make you recite", ur: "ہم تمہیں پڑھائیں گے", ar: "سَنُحَفِّظُكَ" }, pos: "V", posLabel: "V", grammarRole: "verb + pronoun", features: { form: "IV", aspect: "imperfect", future: true }, advanced: { rootFamily: ["قرآن", "قراءة", "قارئ"], linguisticMiracle: "Divine promise - سَ prefix for definite future" } },
      { position: 2, arabic: "فَلَا", transliteration: "falā", meaning: { en: "so not", ur: "پس نہیں", ar: "فَلَن" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "conjunction + negation" },
      { position: 3, arabic: "تَنسَىٰ", transliteration: "tansā", root: "ن س ي", meaning: { en: "you will forget", ur: "تو بھولے گا", ar: "تَذهَلَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "I", aspect: "imperfect", mood: "indicative" } }
    ]
  },

  7: {
    ayahNumber: 7,
    arabic: "إِلَّا مَا شَاءَ اللَّهُ ۚ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَىٰ",
    words: [
      { position: 1, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "سِوى" }, pos: "EXCEPT", posLabel: "EXCEPT", grammarRole: "exception particle" },
      { position: 2, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "شَاءَ", transliteration: "shā'a", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "أَرادَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "PN", posLabel: "PN", grammarRole: "subject" },
      { position: 5, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He", ur: "بے شک وہ", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis + pronoun" },
      { position: 6, arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "knows", ur: "جانتا ہے", ar: "يُدرِكُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 7, arabic: "الْجَهْرَ", transliteration: "al-jahra", root: "ج ه ر", meaning: { en: "the apparent", ur: "ظاہر", ar: "العَلَن" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 8, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "conjunction + relative" },
      { position: 9, arabic: "يَخْفَىٰ", transliteration: "yakhfā", root: "خ ف ي", meaning: { en: "is hidden", ur: "چھپا ہے", ar: "يَستَتِرُ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Allah's knowledge encompasses open and secret" } }
    ]
  },

  8: {
    ayahNumber: 8,
    arabic: "وَنُيَسِّرُكَ لِلْيُسْرَىٰ",
    words: [
      { position: 1, arabic: "وَنُيَسِّرُكَ", transliteration: "wanuyassiruka", root: "ي س ر", meaning: { en: "And We will ease you", ur: "اور ہم تجھے آسان کریں گے", ar: "وَنُسَهِّلُكَ" }, pos: "V", posLabel: "V", grammarRole: "verb + pronoun", features: { form: "II", aspect: "imperfect" }, advanced: { rootFamily: ["يُسر", "تيسير", "ميسور"], linguisticMiracle: "Form II - Allah actively facilitates" } },
      { position: 2, arabic: "لِلْيُسْرَىٰ", transliteration: "lil-yusrā", root: "ي س ر", meaning: { en: "toward the ease", ur: "آسان راستے کی طرف", ar: "للسُّهولَة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", features: { pattern: "فُعْلى" }, advanced: { linguisticMiracle: "Same root repeated - Allah's ease leads to ease" } }
    ]
  },

  9: {
    ayahNumber: 9,
    arabic: "فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ",
    words: [
      { position: 1, arabic: "فَذَكِّرْ", transliteration: "fadhakkir", root: "ذ ك ر", meaning: { en: "So remind", ur: "پس نصیحت کر", ar: "فَعِظ" }, pos: "V", posLabel: "V", grammarRole: "imperative", features: { form: "II", mood: "imperative" }, advanced: { rootFamily: ["ذِكر", "تذكرة", "ذاكر"], linguisticMiracle: "Form II - intensive reminding" } },
      { position: 2, arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إِن" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 3, arabic: "نَّفَعَتِ", transliteration: "nafaʿati", root: "ن ف ع", meaning: { en: "benefits", ur: "فائدہ دے", ar: "أَفادَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "الذِّكْرَىٰ", transliteration: "al-dhikrā", root: "ذ ك ر", meaning: { en: "the reminder", ur: "نصیحت", ar: "المَوعِظَة" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ]
  },

  10: {
    ayahNumber: 10,
    arabic: "سَيَذَّكَّرُ مَن يَخْشَىٰ",
    words: [
      { position: 1, arabic: "سَيَذَّكَّرُ", transliteration: "sayadhdhakkaru", root: "ذ ك ر", meaning: { en: "Will remember", ur: "یاد کرے گا", ar: "سَيَتَّعِظُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V", future: true } },
      { position: 2, arabic: "مَن", transliteration: "man", meaning: { en: "who", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "يَخْشَىٰ", transliteration: "yakhshā", root: "خ ش ي", meaning: { en: "fears (Allah)", ur: "ڈرتا ہے", ar: "يَخافُ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { rootFamily: ["خشية", "خاشع", "خشوع"], linguisticMiracle: "خشية - fear mixed with awe and reverence" } }
    ]
  },

  11: {
    ayahNumber: 11,
    arabic: "وَيَتَجَنَّبُهَا الْأَشْقَى",
    words: [
      { position: 1, arabic: "وَيَتَجَنَّبُهَا", transliteration: "wayatajannabuhā", root: "ج ن ب", meaning: { en: "And will avoid it", ur: "اور اس سے بچے گا", ar: "وَيَبتَعِدُ عَنها" }, pos: "V", posLabel: "V", grammarRole: "verb + pronoun", features: { form: "V", aspect: "imperfect" } },
      { position: 2, arabic: "الْأَشْقَى", transliteration: "al-ashqā", root: "ش ق و", meaning: { en: "the most wretched", ur: "سب سے بدبخت", ar: "أَشَدُّ الأَشقِياء" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "subject", features: { pattern: "أَفْعَل", superlative: true }, advanced: { linguisticMiracle: "Superlative - maximum wretchedness from avoiding truth" } }
    ]
  },

  12: {
    ayahNumber: 12,
    arabic: "الَّذِي يَصْلَى النَّارَ الْكُبْرَىٰ",
    words: [
      { position: 1, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 2, arabic: "يَصْلَى", transliteration: "yaṣlā", root: "ص ل ي", meaning: { en: "will burn in", ur: "داخل ہوگا", ar: "يَدخُلُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "النَّارَ", transliteration: "al-nāra", root: "ن و ر", meaning: { en: "the Fire", ur: "آگ میں", ar: "جَهَنَّمَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "الْكُبْرَىٰ", transliteration: "al-kubrā", root: "ك ب ر", meaning: { en: "the greatest", ur: "سب سے بڑی", ar: "العُظمى" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "فُعْلى" } }
    ]
  },

  13: {
    ayahNumber: 13,
    arabic: "ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "conjunction" },
      { position: 2, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 3, arabic: "يَمُوتُ", transliteration: "yamūtu", root: "م و ت", meaning: { en: "he dies", ur: "مرے گا", ar: "يَهلِكُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "conjunction + negation" },
      { position: 6, arabic: "يَحْيَىٰ", transliteration: "yaḥyā", root: "ح ي ي", meaning: { en: "he lives", ur: "جیے گا", ar: "يَعيشُ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "State between life and death - eternal torment" } }
    ]
  },

  14: {
    ayahNumber: 14,
    arabic: "قَدْ أَفْلَحَ مَن تَزَكَّىٰ",
    words: [
      { position: 1, arabic: "قَدْ", transliteration: "qad", meaning: { en: "Indeed/certainly", ur: "بے شک", ar: "حَقًّا" }, pos: "CERT", posLabel: "CERT", grammarRole: "particle of certainty" },
      { position: 2, arabic: "أَفْلَحَ", transliteration: "aflaḥa", root: "ف ل ح", meaning: { en: "has succeeded", ur: "کامیاب ہوا", ar: "فازَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV", aspect: "perfect" }, advanced: { rootFamily: ["فلاح", "مُفلِح", "فلّاح"], linguisticMiracle: "Same root as 'farmer' - success requires cultivation" } },
      { position: 3, arabic: "مَن", transliteration: "man", meaning: { en: "who", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 4, arabic: "تَزَكَّىٰ", transliteration: "tazakkā", root: "ز ك و", meaning: { en: "purifies himself", ur: "پاک ہوا", ar: "تَطَهَّرَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V", aspect: "perfect" }, advanced: { rootFamily: ["زكاة", "تزكية", "زَكِيّ"], linguisticMiracle: "Form V - reflexive purification of soul" } }
    ]
  },

  15: {
    ayahNumber: 15,
    arabic: "وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّىٰ",
    words: [
      { position: 1, arabic: "وَذَكَرَ", transliteration: "wadhakara", root: "ذ ك ر", meaning: { en: "And remembers", ur: "اور یاد کیا", ar: "وَاستَحضَرَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "اسْمَ", transliteration: "isma", root: "س م و", meaning: { en: "name", ur: "نام", ar: "اسم" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "رَبِّهِ", transliteration: "rabbihi", root: "ر ب ب", meaning: { en: "of his Lord", ur: "اپنے رب کا", ar: "مالِكِهِ" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 4, arabic: "فَصَلَّىٰ", transliteration: "faṣallā", root: "ص ل و", meaning: { en: "and prays", ur: "پھر نماز پڑھی", ar: "فَعَبَدَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", aspect: "perfect" }, advanced: { linguisticMiracle: "فَ shows immediate connection: remembrance → prayer" } }
    ]
  },

  16: {
    ayahNumber: 16,
    arabic: "بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا",
    words: [
      { position: 1, arabic: "بَلْ", transliteration: "bal", meaning: { en: "But/rather", ur: "بلکہ", ar: "لكِن" }, pos: "RET", posLabel: "RET", grammarRole: "particle of retraction" },
      { position: 2, arabic: "تُؤْثِرُونَ", transliteration: "tu'thirūna", root: "أ ث ر", meaning: { en: "you prefer", ur: "تم ترجیح دیتے ہو", ar: "تُفَضِّلونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV", aspect: "imperfect", person: "2", number: "pl" }, advanced: { linguisticMiracle: "Form IV - actively choosing worldly over eternal" } },
      { position: 3, arabic: "الْحَيَاةَ", transliteration: "al-ḥayāta", root: "ح ي ي", meaning: { en: "the life", ur: "زندگی", ar: "العَيش" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "الدُّنْيَا", transliteration: "al-dunyā", root: "د ن و", meaning: { en: "of this world", ur: "دنیا کی", ar: "القَريبَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "دُنيا from دَنِيّ (low/near) - worldly life is 'lower'" } }
    ]
  },

  17: {
    ayahNumber: 17,
    arabic: "وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ",
    words: [
      { position: 1, arabic: "وَالْآخِرَةُ", transliteration: "wal-ākhiratu", root: "أ خ ر", meaning: { en: "And the Hereafter", ur: "اور آخرت", ar: "والآخِرَة" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "خَيْرٌ", transliteration: "khayrun", root: "خ ي ر", meaning: { en: "is better", ur: "بہتر ہے", ar: "أَفضَلُ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { comparative: true } },
      { position: 3, arabic: "وَأَبْقَىٰ", transliteration: "wa-abqā", root: "ب ق ي", meaning: { en: "and more lasting", ur: "اور باقی رہنے والی", ar: "وَأَدوَمُ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "أَفْعَل", comparative: true }, advanced: { linguisticMiracle: "Two comparatives: better in quality AND duration" } }
    ]
  },

  18: {
    ayahNumber: 18,
    arabic: "إِنَّ هَٰذَا لَفِي الصُّحُفِ الْأُولَىٰ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "حَقًّا" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis particle" },
      { position: 2, arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammarRole: "demonstrative" },
      { position: 3, arabic: "لَفِي", transliteration: "lafī", meaning: { en: "surely is in", ur: "ضرور موجود ہے", ar: "لَمَذكورٌ في" }, pos: "EMPH+PREP", posLabel: "EMPH+PREP", grammarRole: "emphasis + preposition" },
      { position: 4, arabic: "الصُّحُفِ", transliteration: "al-ṣuḥufi", root: "ص ح ف", meaning: { en: "the scriptures", ur: "صحیفوں میں", ar: "الكُتُب" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "الْأُولَىٰ", transliteration: "al-ūlā", root: "أ و ل", meaning: { en: "the former", ur: "پہلے", ar: "السابِقَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  19: {
    ayahNumber: 19,
    arabic: "صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ",
    words: [
      { position: 1, arabic: "صُحُفِ", transliteration: "ṣuḥufi", root: "ص ح ف", meaning: { en: "Scriptures", ur: "صحیفوں", ar: "كُتُب" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "إِبْرَاهِيمَ", transliteration: "Ibrāhīma", meaning: { en: "of Ibrahim", ur: "ابراہیم کے", ar: "إبراهيم" }, pos: "PN", posLabel: "PN", grammarRole: "possessive", advanced: { linguisticMiracle: "Connects Quran to Abrahamic tradition" } },
      { position: 3, arabic: "وَمُوسَىٰ", transliteration: "wa-Mūsā", meaning: { en: "and Musa", ur: "اور موسیٰ کے", ar: "وموسى" }, pos: "PN", posLabel: "PN", grammarRole: "possessive" }
    ]
  }
};

export default TREEBANK_DATA;
