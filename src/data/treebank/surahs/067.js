/**
 * Surah Al-Mulk (67) - The Sovereignty
 * Quranic Arabic Treebank Data
 * 30 ayahs - Makki surah
 */

export const TREEBANK_DATA = {
  surahId: 67,
  surahName: "Al-Mulk",
  surahNameArabic: "الملك",
  totalAyahs: 30,

  1: {
    ayahNumber: 1,
    text: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    words: [
      { arabic: "تَبَارَكَ", transliteration: "tabāraka", root: "ب ر ك", meaning: { en: "Blessed is", ur: "بابرکت ہے", ar: "تبارك" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "VI" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "He Who", ur: "وہ جس", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "بِيَدِهِ", transliteration: "bi-yadihi", root: "ي د ي", meaning: { en: "in Whose Hand", ur: "کے ہاتھ میں ہے", ar: "بيده" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "genitive" } },
      { arabic: "الْمُلْكُ", transliteration: "al-mulk", root: "م ل ك", meaning: { en: "the dominion", ur: "بادشاہت", ar: "الملك" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "all", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾ", meaning: { en: "things", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīr", root: "ق د ر", meaning: { en: "Able", ur: "قادر", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ",
    words: [
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "الْمَوْتَ", transliteration: "al-mawt", root: "م و ت", meaning: { en: "death", ur: "موت کو", ar: "الموت" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَالْحَيَاةَ", transliteration: "wal-ḥayāh", root: "ح ي ي", meaning: { en: "and life", ur: "اور زندگی کو", ar: "والحياة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "لِيَبْلُوَكُمْ", transliteration: "li-yabluwakum", root: "ب ل و", meaning: { en: "to test you", ur: "تاکہ تمہیں آزمائے", ar: "ليبلوكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "I" } },
      { arabic: "أَيُّكُمْ", transliteration: "ayyukum", meaning: { en: "which of you", ur: "تم میں کون", ar: "أيكم" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "subject" } },
      { arabic: "أَحْسَنُ", transliteration: "aḥsanu", root: "ح س ن", meaning: { en: "is best", ur: "بہترین ہے", ar: "أحسن" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", degree: "superlative" } },
      { arabic: "عَمَلًا", transliteration: "ʿamalan", root: "ع م ل", meaning: { en: "in deed", ur: "عمل میں", ar: "عملاً" }, pos: "N", posLabel: "N", grammar: { role: "tamyiz", case: "accusative" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīz", root: "ع ز ز", meaning: { en: "the Mighty", ur: "غالب", ar: "العزيز" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } },
      { arabic: "الْغَفُورُ", transliteration: "al-ghafūr", root: "غ ف ر", meaning: { en: "the Forgiving", ur: "بخشنے والا", ar: "الغفور" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
    words: [
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "سَبْعَ", transliteration: "sabʿa", meaning: { en: "seven", ur: "سات", ar: "سبع" }, pos: "NUM", posLabel: "NUM", grammar: { role: "object", case: "accusative" } },
      { arabic: "سَمَاوَاتٍ", transliteration: "samāwāt", root: "س م و", meaning: { en: "heavens", ur: "آسمان", ar: "سماوات" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "طِبَاقًا", transliteration: "ṭibāqan", root: "ط ب ق", meaning: { en: "in layers", ur: "تہ بہ تہ", ar: "طباقاً" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَرَىٰ", transliteration: "tarā", root: "ر أ ي", meaning: { en: "you see", ur: "تو دیکھتا", ar: "ترى" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خَلْقِ", transliteration: "khalqi", root: "خ ل ق", meaning: { en: "creation", ur: "تخلیق", ar: "خلق" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "الرَّحْمَٰنِ", transliteration: "ar-raḥmān", root: "ر ح م", meaning: { en: "of the Most Merciful", ur: "رحمن کی", ar: "الرحمن" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَفَاوُتٍ", transliteration: "tafāwut", root: "ف و ت", meaning: { en: "inconsistency", ur: "فرق", ar: "تفاوت" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "فَارْجِعِ", transliteration: "fa-rjiʿ", root: "ر ج ع", meaning: { en: "so return", ur: "تو پھر لوٹا", ar: "فارجع" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "الْبَصَرَ", transliteration: "al-baṣar", root: "ب ص ر", meaning: { en: "your vision", ur: "نظر کو", ar: "البصر" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "do", ur: "کیا", ar: "هل" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "تَرَىٰ", transliteration: "tarā", root: "ر أ ي", meaning: { en: "you see", ur: "تو دیکھتا ہے", ar: "ترى" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فُطُورٍ", transliteration: "fuṭūr", root: "ف ط ر", meaning: { en: "flaw", ur: "شگاف", ar: "فطور" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "ارْجِعِ", transliteration: "irjiʿ", root: "ر ج ع", meaning: { en: "return", ur: "لوٹا", ar: "ارجع" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "الْبَصَرَ", transliteration: "al-baṣar", root: "ب ص ر", meaning: { en: "your vision", ur: "نظر کو", ar: "البصر" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "كَرَّتَيْنِ", transliteration: "karratayni", root: "ك ر ر", meaning: { en: "twice", ur: "دوبارہ", ar: "كرتين" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative", number: "dual" } },
      { arabic: "يَنقَلِبْ", transliteration: "yanqalib", root: "ق ل ب", meaning: { en: "will return", ur: "لوٹ آئے گی", ar: "ينقلب" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "VII" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تیری طرف", ar: "إليك" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "الْبَصَرُ", transliteration: "al-baṣar", root: "ب ص ر", meaning: { en: "the vision", ur: "نظر", ar: "البصر" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "خَاسِئًا", transliteration: "khāsiʾan", root: "خ س أ", meaning: { en: "humbled", ur: "ذلیل", ar: "خاسئاً" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" }, features: { participle: "active" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and it", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "حَسِيرٌ", transliteration: "ḥasīr", root: "ح س ر", meaning: { en: "fatigued", ur: "تھکی ہوئی", ar: "حسير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "wa-laqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammar: { role: "emphasis" } },
      { arabic: "زَيَّنَّا", transliteration: "zayyannā", root: "ز ي ن", meaning: { en: "We adorned", ur: "ہم نے مزین کیا", ar: "زينا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "II" } },
      { arabic: "السَّمَاءَ", transliteration: "as-samāʾ", root: "س م و", meaning: { en: "the heaven", ur: "آسمان کو", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "الدُّنْيَا", transliteration: "ad-dunyā", meaning: { en: "nearest", ur: "قریبی", ar: "الدنيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative", definite: true } },
      { arabic: "بِمَصَابِيحَ", transliteration: "bi-maṣābīḥ", root: "ص ب ح", meaning: { en: "with lamps", ur: "چراغوں سے", ar: "بمصابيح" }, pos: "N", posLabel: "N", grammar: { role: "instrument", case: "genitive" } },
      { arabic: "وَجَعَلْنَاهَا", transliteration: "wa-jaʿalnāhā", root: "ج ع ل", meaning: { en: "and made them", ur: "اور بنایا انہیں", ar: "وجعلناها" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "I" } },
      { arabic: "رُجُومًا", transliteration: "rujūman", root: "ر ج م", meaning: { en: "missiles", ur: "مارنے کا ذریعہ", ar: "رجوماً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "لِّلشَّيَاطِينِ", transliteration: "lish-shayāṭīn", root: "ش ط ن", meaning: { en: "for the devils", ur: "شیطانوں کے لیے", ar: "للشياطين" }, pos: "N", posLabel: "N", grammar: { role: "beneficiary", case: "genitive", definite: true } },
      { arabic: "وَأَعْتَدْنَا", transliteration: "wa-aʿtadnā", root: "ع ت د", meaning: { en: "and We prepared", ur: "اور ہم نے تیار کیا", ar: "وأعتدنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "IV" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", root: "ع ذ ب", meaning: { en: "punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "السَّعِيرِ", transliteration: "as-saʿīr", root: "س ع ر", meaning: { en: "of the Blaze", ur: "دوزخ کا", ar: "السعير" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ الْمَصِيرُ",
    words: [
      { arabic: "وَلِلَّذِينَ", transliteration: "wa-lilladhīna", meaning: { en: "And for those who", ur: "اور ان کے لیے جو", ar: "وللذين" }, pos: "CONJ+PREP+REL", posLabel: "CONJ+PREP+REL", grammar: { role: "predicate" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "بِرَبِّهِمْ", transliteration: "bi-rabbihim", root: "ر ب ب", meaning: { en: "in their Lord", ur: "اپنے رب کے ساتھ", ar: "بربهم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "عَذَابُ", transliteration: "ʿadhābu", root: "ع ذ ب", meaning: { en: "is punishment", ur: "عذاب ہے", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannam", meaning: { en: "of Hell", ur: "جہنم کا", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَبِئْسَ", transliteration: "wa-biʾsa", root: "ب أ س", meaning: { en: "and wretched", ur: "اور برا ہے", ar: "وبئس" }, pos: "V", posLabel: "V", grammar: { role: "exclamation" } },
      { arabic: "الْمَصِيرُ", transliteration: "al-maṣīr", root: "ص ي ر", meaning: { en: "is the destination", ur: "ٹھکانا", ar: "المصير" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ",
    words: [
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "أُلْقُوا", transliteration: "ulqū", root: "ل ق ي", meaning: { en: "they are thrown", ur: "ڈالے جائیں گے", ar: "ألقوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", voice: "passive", form: "IV" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "into it", ur: "اس میں", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "سَمِعُوا", transliteration: "samiʿū", root: "س م ع", meaning: { en: "they will hear", ur: "وہ سنیں گے", ar: "سمعوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "لَهَا", transliteration: "lahā", meaning: { en: "from it", ur: "اس کی", ar: "لها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "شَهِيقًا", transliteration: "shahīqan", root: "ش ه ق", meaning: { en: "an inhaling", ur: "چیخ", ar: "شهيقاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَهِيَ", transliteration: "wa-hiya", meaning: { en: "while it", ur: "اور وہ", ar: "وهي" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "تَفُورُ", transliteration: "tafūr", root: "ف و ر", meaning: { en: "boils up", ur: "کھولتی ہے", ar: "تفور" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", mood: "indicative", form: "I" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ ۖ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ",
    words: [
      { arabic: "تَكَادُ", transliteration: "takādu", root: "ك و د", meaning: { en: "It almost", ur: "قریب ہے", ar: "تكاد" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "تَمَيَّزُ", transliteration: "tamayyazu", root: "م ي ز", meaning: { en: "bursts", ur: "پھٹ جائے", ar: "تميز" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", mood: "indicative", form: "V" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْغَيْظِ", transliteration: "al-ghayẓ", root: "غ ي ظ", meaning: { en: "rage", ur: "غصے", ar: "الغيظ" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "كُلَّمَا", transliteration: "kullamā", meaning: { en: "Every time", ur: "جب بھی", ar: "كلما" }, pos: "ADV", posLabel: "ADV", grammar: { role: "temporal" } },
      { arabic: "أُلْقِيَ", transliteration: "ulqiya", root: "ل ق ي", meaning: { en: "is thrown", ur: "ڈالا جاتا ہے", ar: "ألقي" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", voice: "passive", form: "IV" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "into it", ur: "اس میں", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "فَوْجٌ", transliteration: "fawj", meaning: { en: "a company", ur: "ایک گروہ", ar: "فوج" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", indefinite: true } },
      { arabic: "سَأَلَهُمْ", transliteration: "saʾalahum", root: "س أ ل", meaning: { en: "asks them", ur: "ان سے پوچھتے ہیں", ar: "سألهم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "خَزَنَتُهَا", transliteration: "khazanatuhā", root: "خ ز ن", meaning: { en: "its keepers", ur: "اس کے داروغہ", ar: "خزنتها" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "أَلَمْ", transliteration: "a-lam", meaning: { en: "Did not", ur: "کیا نہیں", ar: "ألم" }, pos: "INTERROG+NEG", posLabel: "INTERROG+NEG", grammar: { role: "interrogative" } },
      { arabic: "يَأْتِكُمْ", transliteration: "yaʾtikum", root: "أ ت ي", meaning: { en: "come to you", ur: "تمہارے پاس آیا", ar: "يأتكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "I" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīr", root: "ن ذ ر", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", indefinite: true } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They will say", ur: "وہ کہیں گے", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes", ur: "ہاں", ar: "بلى" }, pos: "INTJ", posLabel: "INTJ", grammar: { role: "affirmation" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "indeed", ur: "یقیناً", ar: "قد" }, pos: "CERT", posLabel: "CERT", grammar: { role: "emphasis" } },
      { arabic: "جَاءَنَا", transliteration: "jāʾanā", root: "ج ي أ", meaning: { en: "came to us", ur: "آیا ہمارے پاس", ar: "جاءنا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīr", root: "ن ذ ر", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "فَكَذَّبْنَا", transliteration: "fa-kadhdhabnā", root: "ك ذ ب", meaning: { en: "but we denied", ur: "تو ہم نے جھٹلایا", ar: "فكذبنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "II" } },
      { arabic: "وَقُلْنَا", transliteration: "wa-qulnā", root: "ق و ل", meaning: { en: "and said", ur: "اور کہا", ar: "وقلنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "I" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "نَزَّلَ", transliteration: "nazzala", root: "ن ز ل", meaning: { en: "sent down", ur: "اتارا", ar: "نزل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "کچھ", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾ", meaning: { en: "anything", ur: "بھی", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "not", ur: "نہیں", ar: "إن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you are", ur: "تم", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { person: 2, gender: "m", number: "pl" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { role: "exception" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَلَالٍ", transliteration: "ḍalāl", root: "ض ل ل", meaning: { en: "error", ur: "گمراہی", ar: "ضلال" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "كَبِيرٍ", transliteration: "kabīr", root: "ك ب ر", meaning: { en: "great", ur: "بڑی", ar: "كبير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
    words: [
      { arabic: "وَقَالُوا", transliteration: "wa-qālū", root: "ق و ل", meaning: { en: "And they say", ur: "اور کہیں گے", ar: "وقالوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If only", ur: "کاش", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنَّا", transliteration: "kunnā", root: "ك و ن", meaning: { en: "we had been", ur: "ہم ہوتے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect" } },
      { arabic: "نَسْمَعُ", transliteration: "nasmaʿu", root: "س م ع", meaning: { en: "listening", ur: "سنتے", ar: "نسمع" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", mood: "indicative", form: "I" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "نَعْقِلُ", transliteration: "naʿqilu", root: "ع ق ل", meaning: { en: "reasoning", ur: "سمجھتے", ar: "نعقل" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", mood: "indicative", form: "I" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہ", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "كُنَّا", transliteration: "kunnā", root: "ك و ن", meaning: { en: "we would be", ur: "ہم ہوتے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "among", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَصْحَابِ", transliteration: "aṣḥābi", root: "ص ح ب", meaning: { en: "companions", ur: "لوگوں", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "السَّعِيرِ", transliteration: "as-saʿīr", root: "س ع ر", meaning: { en: "of the Blaze", ur: "دوزخ کے", ar: "السعير" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "فَاعْتَرَفُوا بِذَنبِهِمْ فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ",
    words: [
      { arabic: "فَاعْتَرَفُوا", transliteration: "fa-ʿtarafū", root: "ع ر ف", meaning: { en: "So they will admit", ur: "تو وہ اقرار کریں گے", ar: "فاعترفوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "VIII" } },
      { arabic: "بِذَنبِهِمْ", transliteration: "bi-dhanbihim", root: "ذ ن ب", meaning: { en: "their sin", ur: "اپنے گناہ کا", ar: "بذنبهم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "فَسُحْقًا", transliteration: "fa-suḥqan", root: "س ح ق", meaning: { en: "so away", ur: "تو دور ہو", ar: "فسحقاً" }, pos: "N", posLabel: "N", grammar: { role: "exclamation", case: "accusative" } },
      { arabic: "لِّأَصْحَابِ", transliteration: "li-aṣḥābi", root: "ص ح ب", meaning: { en: "with companions", ur: "دوزخیوں کو", ar: "لأصحاب" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "السَّعِيرِ", transliteration: "as-saʿīr", root: "س ع ر", meaning: { en: "of the Blaze", ur: "دوزخ کے", ar: "السعير" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "subject_inna" } },
      { arabic: "يَخْشَوْنَ", transliteration: "yakhshawna", root: "خ ش ي", meaning: { en: "fear", ur: "ڈرتے ہیں", ar: "يخشون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "رَبَّهُم", transliteration: "rabbahum", root: "ر ب ب", meaning: { en: "their Lord", ur: "اپنے رب سے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "بِالْغَيْبِ", transliteration: "bil-ghayb", root: "غ ي ب", meaning: { en: "in the unseen", ur: "بن دیکھے", ar: "بالغيب" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "genitive", definite: true } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "مَّغْفِرَةٌ", transliteration: "maghfirah", root: "غ ف ر", meaning: { en: "forgiveness", ur: "معافی", ar: "مغفرة" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "وَأَجْرٌ", transliteration: "wa-ajr", root: "أ ج ر", meaning: { en: "and reward", ur: "اور اجر", ar: "وأجر" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "كَبِيرٌ", transliteration: "kabīr", root: "ك ب ر", meaning: { en: "great", ur: "بڑا", ar: "كبير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "nominative" } }
    ]
  },

  13: {
    ayahNumber: 13,
    text: "وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ ۖ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
    words: [
      { arabic: "وَأَسِرُّوا", transliteration: "wa-asirrū", root: "س ر ر", meaning: { en: "And conceal", ur: "اور چھپاؤ", ar: "وأسروا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "قَوْلَكُمْ", transliteration: "qawlakum", root: "ق و ل", meaning: { en: "your speech", ur: "اپنی بات کو", ar: "قولكم" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "أَوِ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "اجْهَرُوا", transliteration: "ijharū", root: "ج ه ر", meaning: { en: "publicize", ur: "ظاہر کرو", ar: "اجهروا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "I" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "it", ur: "اسے", ar: "به" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "indeed He", ur: "بے شک وہ", ar: "إنه" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīm", root: "ع ل م", meaning: { en: "is Knowing", ur: "جاننے والا ہے", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "بِذَاتِ", transliteration: "bi-dhāti", meaning: { en: "of that within", ur: "والی کا", ar: "بذات" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "الصُّدُورِ", transliteration: "aṣ-ṣudūr", root: "ص د ر", meaning: { en: "the breasts", ur: "سینوں کے اندر", ar: "الصدور" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } }
    ]
  },

  14: {
    ayahNumber: 14,
    text: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
    words: [
      { arabic: "أَلَا", transliteration: "a-lā", meaning: { en: "Does not", ur: "کیا نہیں", ar: "ألا" }, pos: "INTERROG+NEG", posLabel: "INTERROG+NEG", grammar: { role: "rhetorical" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "know", ur: "جانتا", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "He Who", ur: "جس نے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "اللَّطِيفُ", transliteration: "al-laṭīf", root: "ل ط ف", meaning: { en: "the Subtle", ur: "باریک بین", ar: "اللطيف" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } },
      { arabic: "الْخَبِيرُ", transliteration: "al-khabīr", root: "خ ب ر", meaning: { en: "the Aware", ur: "باخبر", ar: "الخبير" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } }
    ]
  },

  15: {
    ayahNumber: 15,
    text: "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ ۖ وَإِلَيْهِ النُّشُورُ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "predicate" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", root: "ج ع ل", meaning: { en: "made", ur: "بنایا", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "beneficiary" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍ", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین کو", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "ذَلُولًا", transliteration: "dhalūlan", root: "ذ ل ل", meaning: { en: "tame", ur: "مطیع", ar: "ذلولاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "object_complement", case: "accusative" } },
      { arabic: "فَامْشُوا", transliteration: "fa-mshū", root: "م ش ي", meaning: { en: "so walk", ur: "تو چلو", ar: "فامشوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "I" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَنَاكِبِهَا", transliteration: "manākibihā", root: "ن ك ب", meaning: { en: "its paths", ur: "اس کے کناروں میں", ar: "مناكبها" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَكُلُوا", transliteration: "wa-kulū", root: "أ ك ل", meaning: { en: "and eat", ur: "اور کھاؤ", ar: "وكلوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "I" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رِّزْقِهِ", transliteration: "rizqihi", root: "ر ز ق", meaning: { en: "His provision", ur: "اس کے رزق", ar: "رزقه" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to Him", ur: "اور اسی کی طرف", ar: "وإليه" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "النُّشُورُ", transliteration: "an-nushūr", root: "ن ش ر", meaning: { en: "is the resurrection", ur: "اٹھنا ہے", ar: "النشور" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } }
    ]
  },

  16: {
    ayahNumber: 16,
    text: "أَأَمِنتُم مَّن فِي السَّمَاءِ أَن يَخْسِفَ بِكُمُ الْأَرْضَ فَإِذَا هِيَ تَمُورُ",
    words: [
      { arabic: "أَأَمِنتُم", transliteration: "a-amintum", root: "أ م ن", meaning: { en: "Do you feel secure", ur: "کیا تم بے خوف ہو", ar: "أأمنتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "that He Who", ur: "اس سے جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں ہے", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السَّمَاءِ", transliteration: "as-samāʾ", root: "س م و", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَخْسِفَ", transliteration: "yakhsifa", root: "خ س ف", meaning: { en: "He would make swallow", ur: "دھنسا دے", ar: "يخسف" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "I" } },
      { arabic: "بِكُمُ", transliteration: "bikumu", meaning: { en: "you", ur: "تمہیں", ar: "بكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍ", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین میں", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "and suddenly", ur: "پھر اچانک", ar: "فإذا" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "sudden" } },
      { arabic: "هِيَ", transliteration: "hiya", meaning: { en: "it", ur: "وہ", ar: "هي" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "f" } },
      { arabic: "تَمُورُ", transliteration: "tamūr", root: "م و ر", meaning: { en: "sways", ur: "ہلنے لگے", ar: "تمور" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", mood: "indicative", form: "I" } }
    ]
  },

  17: {
    ayahNumber: 17,
    text: "أَمْ أَمِنتُم مَّن فِي السَّمَاءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "أَمِنتُم", transliteration: "amintum", root: "أ م ن", meaning: { en: "do you feel secure", ur: "تم بے خوف ہو", ar: "أمنتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "that He Who", ur: "اس سے جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں ہے", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السَّمَاءِ", transliteration: "as-samāʾ", root: "س م و", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يُرْسِلَ", transliteration: "yursila", root: "ر س ل", meaning: { en: "would send", ur: "بھیج دے", ar: "يرسل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "IV" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "upon you", ur: "تم پر", ar: "عليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "حَاصِبًا", transliteration: "ḥāṣiban", root: "ح ص ب", meaning: { en: "a storm of stones", ur: "پتھراؤ", ar: "حاصباً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" }, features: { participle: "active" } },
      { arabic: "فَسَتَعْلَمُونَ", transliteration: "fa-sa-taʿlamūn", root: "ع ل م", meaning: { en: "then you will know", ur: "تو جان لو گے", ar: "فستعلمون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "future", form: "I" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "کیسی ہے", ar: "كيف" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "نَذِيرِ", transliteration: "nadhīr", root: "ن ذ ر", meaning: { en: "is My warning", ur: "میری تنبیہ", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } }
    ]
  },

  18: {
    ayahNumber: 18,
    text: "وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "wa-laqad", meaning: { en: "And already", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammar: { role: "emphasis" } },
      { arabic: "كَذَّبَ", transliteration: "kadhdhaba", root: "ك ذ ب", meaning: { en: "denied", ur: "جھٹلایا", ar: "كذب" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those", ur: "ان لوگوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِهِمْ", transliteration: "qablihim", meaning: { en: "them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "فَكَيْفَ", transliteration: "fa-kayfa", meaning: { en: "and how", ur: "تو کیسا ہوا", ar: "فكيف" }, pos: "CONJ+INTERROG", posLabel: "CONJ+INTERROG", grammar: { role: "rhetorical" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect" } },
      { arabic: "نَكِيرِ", transliteration: "nakīr", root: "ن ك ر", meaning: { en: "My rejection", ur: "میرا انکار", ar: "نكير" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "nominative" } }
    ]
  },

  19: {
    ayahNumber: 19,
    text: "أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ ۚ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ",
    words: [
      { arabic: "أَوَلَمْ", transliteration: "a-wa-lam", meaning: { en: "Do they not", ur: "کیا نہیں", ar: "أولم" }, pos: "INTERROG+CONJ+NEG", posLabel: "INTERROG+CONJ+NEG", grammar: { role: "rhetorical" } },
      { arabic: "يَرَوْا", transliteration: "yaraw", root: "ر أ ي", meaning: { en: "see", ur: "دیکھتے", ar: "يروا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "jussive", form: "I" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "at", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الطَّيْرِ", transliteration: "aṭ-ṭayr", root: "ط ي ر", meaning: { en: "the birds", ur: "پرندوں کو", ar: "الطير" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "فَوْقَهُمْ", transliteration: "fawqahum", meaning: { en: "above them", ur: "ان کے اوپر", ar: "فوقهم" }, pos: "ADV", posLabel: "ADV", grammar: { role: "adverbial" } },
      { arabic: "صَافَّاتٍ", transliteration: "ṣāffāt", root: "ص ف ف", meaning: { en: "spreading wings", ur: "پر پھیلائے ہوئے", ar: "صافات" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "genitive" }, features: { participle: "active" } },
      { arabic: "وَيَقْبِضْنَ", transliteration: "wa-yaqbiḍna", root: "ق ب ض", meaning: { en: "and folding", ur: "اور سمیٹتے ہوئے", ar: "ويقبضن" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "none", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُمْسِكُهُنَّ", transliteration: "yumsikuhunna", root: "م س ك", meaning: { en: "holds them", ur: "تھامتا ان کو", ar: "يمسكهن" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "IV" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { role: "exception" } },
      { arabic: "الرَّحْمَٰنُ", transliteration: "ar-raḥmān", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمن کے", ar: "الرحمن" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "indeed He", ur: "بے شک وہ", ar: "إنه" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "بِكُلِّ", transliteration: "bi-kulli", meaning: { en: "of all", ur: "ہر", ar: "بكل" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾ", meaning: { en: "things", ur: "چیز کو", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "بَصِيرٌ", transliteration: "baṣīr", root: "ب ص ر", meaning: { en: "is Seeing", ur: "دیکھنے والا ہے", ar: "بصير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } }
    ]
  },

  20: {
    ayahNumber: 20,
    text: "أَمَّنْ هَٰذَا الَّذِي هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ الرَّحْمَٰنِ ۚ إِنِ الْكَافِرُونَ إِلَّا فِي غُرُورٍ",
    words: [
      { arabic: "أَمَّنْ", transliteration: "amman", meaning: { en: "Or who is", ur: "کون ہے", ar: "أمن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "interrogative" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { role: "predicate" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "جُندٌ", transliteration: "jund", meaning: { en: "army", ur: "لشکر", ar: "جند" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارا", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "beneficiary" } },
      { arabic: "يَنصُرُكُم", transliteration: "yanṣurukum", root: "ن ص ر", meaning: { en: "to help you", ur: "مدد کرے تمہاری", ar: "ينصركم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "other than", ur: "کے علاوہ", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "سوا", ar: "دون" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "الرَّحْمَٰنِ", transliteration: "ar-raḥmān", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمن کے", ar: "الرحمن" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "إِنِ", transliteration: "in", meaning: { en: "not", ur: "نہیں ہیں", ar: "إن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "الْكَافِرُونَ", transliteration: "al-kāfirūn", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافر", ar: "الكافرون" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true }, features: { participle: "active" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { role: "exception" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "غُرُورٍ", transliteration: "ghurūr", root: "غ ر ر", meaning: { en: "delusion", ur: "دھوکے", ar: "غرور" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } }
    ]
  },

  21: {
    ayahNumber: 21,
    text: "أَمَّنْ هَٰذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ ۚ بَل لَّجُّوا فِي عُتُوٍّ وَنُفُورٍ",
    words: [
      { arabic: "أَمَّنْ", transliteration: "amman", meaning: { en: "Or who is", ur: "کون ہے", ar: "أمن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "interrogative" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَرْزُقُكُمْ", transliteration: "yarzuqukum", root: "ر ز ق", meaning: { en: "could provide for you", ur: "تمہیں رزق دے", ar: "يرزقكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "أَمْسَكَ", transliteration: "amsaka", root: "م س ك", meaning: { en: "He withheld", ur: "وہ روک لے", ar: "أمسك" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "رِزْقَهُ", transliteration: "rizqahu", root: "ر ز ق", meaning: { en: "His provision", ur: "اپنا رزق", ar: "رزقه" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "بَل", transliteration: "bal", meaning: { en: "But", ur: "بلکہ", ar: "بل" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "adversative" } },
      { arabic: "لَّجُّوا", transliteration: "lajjū", root: "ل ج ج", meaning: { en: "they persist", ur: "وہ اڑے ہوئے ہیں", ar: "لجوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عُتُوٍّ", transliteration: "ʿutuww", root: "ع ت و", meaning: { en: "insolence", ur: "سرکشی", ar: "عتو" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَنُفُورٍ", transliteration: "wa-nufūr", root: "ن ف ر", meaning: { en: "and aversion", ur: "اور نفرت", ar: "ونفور" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "genitive" } }
    ]
  },

  22: {
    ayahNumber: 22,
    text: "أَفَمَن يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ أَهْدَىٰ أَمَّن يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
    words: [
      { arabic: "أَفَمَن", transliteration: "a-fa-man", meaning: { en: "Is one who", ur: "کیا جو", ar: "أفمن" }, pos: "INTERROG+CONJ+REL", posLabel: "INTERROG+CONJ+REL", grammar: { role: "subject" } },
      { arabic: "يَمْشِي", transliteration: "yamshī", root: "م ش ي", meaning: { en: "walks", ur: "چلتا ہے", ar: "يمشي" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "مُكِبًّا", transliteration: "mukibban", root: "ك ب ب", meaning: { en: "fallen on his face", ur: "منہ کے بل گرا ہوا", ar: "مكباً" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" }, features: { participle: "active", form: "IV" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَجْهِهِ", transliteration: "wajhihi", root: "و ج ه", meaning: { en: "his face", ur: "اپنے چہرے", ar: "وجهه" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "أَهْدَىٰ", transliteration: "ahdā", root: "ه د ي", meaning: { en: "better guided", ur: "زیادہ ہدایت پر", ar: "أهدى" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", degree: "comparative" } },
      { arabic: "أَمَّن", transliteration: "amman", meaning: { en: "or one who", ur: "یا جو", ar: "أمن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "comparison" } },
      { arabic: "يَمْشِي", transliteration: "yamshī", root: "م ش ي", meaning: { en: "walks", ur: "چلتا ہے", ar: "يمشي" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "سَوِيًّا", transliteration: "sawiyyan", root: "س و ي", meaning: { en: "upright", ur: "سیدھا", ar: "سوياً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "hal", case: "accusative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صِرَاطٍ", transliteration: "ṣirāṭ", root: "ص ر ط", meaning: { en: "a path", ur: "راستے", ar: "صراط" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "مُّسْتَقِيمٍ", transliteration: "mustaqīm", root: "ق و م", meaning: { en: "straight", ur: "سیدھے", ar: "مستقيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active", form: "X" } }
    ]
  },

  23: {
    ayahNumber: 23,
    text: "قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۖ قَلِيلًا مَّا تَشْكُرُونَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "predicate" } },
      { arabic: "أَنشَأَكُمْ", transliteration: "anshaʾakum", root: "ن ش أ", meaning: { en: "produced you", ur: "تمہیں پیدا کیا", ar: "أنشأكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "وَجَعَلَ", transliteration: "wa-jaʿala", root: "ج ع ل", meaning: { en: "and made", ur: "اور بنائی", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "beneficiary" } },
      { arabic: "السَّمْعَ", transliteration: "as-samʿ", root: "س م ع", meaning: { en: "hearing", ur: "کان", ar: "السمع" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَالْأَبْصَارَ", transliteration: "wal-abṣār", root: "ب ص ر", meaning: { en: "and vision", ur: "اور آنکھیں", ar: "والأبصار" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَالْأَفْئِدَةَ", transliteration: "wal-afʾidah", root: "ف أ د", meaning: { en: "and hearts", ur: "اور دل", ar: "والأفئدة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "قَلِيلًا", transliteration: "qalīlan", root: "ق ل ل", meaning: { en: "little", ur: "تھوڑا", ar: "قليلاً" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَشْكُرُونَ", transliteration: "tashkurūn", root: "ش ك ر", meaning: { en: "you are grateful", ur: "تم شکر کرتے ہو", ar: "تشكرون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  24: {
    ayahNumber: 24,
    text: "قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "predicate" } },
      { arabic: "ذَرَأَكُمْ", transliteration: "dharaʾakum", root: "ذ ر أ", meaning: { en: "dispersed you", ur: "تمہیں پھیلایا", ar: "ذرأكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍ", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to Him", ur: "اور اسی کے پاس", ar: "وإليه" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تُحْشَرُونَ", transliteration: "tuḥsharūn", root: "ح ش ر", meaning: { en: "you will be gathered", ur: "تم اکٹھے کیے جاؤ گے", ar: "تحشرون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", voice: "passive", form: "I" } }
    ]
  },

  25: {
    ayahNumber: 25,
    text: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ",
    words: [
      { arabic: "وَيَقُولُونَ", transliteration: "wa-yaqūlūn", root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ کہتے ہیں", ar: "ويقولون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "مَتَىٰ", transliteration: "matā", meaning: { en: "when", ur: "کب", ar: "متى" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "is this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "الْوَعْدُ", transliteration: "al-waʿd", root: "و ع د", meaning: { en: "promise", ur: "وعدہ", ar: "الوعد" }, pos: "N", posLabel: "N", grammar: { role: "apposition", case: "nominative", definite: true } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", root: "ك و ن", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect" } },
      { arabic: "صَادِقِينَ", transliteration: "ṣādiqīn", root: "ص د ق", meaning: { en: "truthful", ur: "سچے", ar: "صادقين" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" }, features: { participle: "active" } }
    ]
  },

  26: {
    ayahNumber: 26,
    text: "قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "بس", ar: "إنما" }, pos: "RESTRICT", posLabel: "RESTRICT", grammar: { role: "restriction" } },
      { arabic: "الْعِلْمُ", transliteration: "al-ʿilm", root: "ع ل م", meaning: { en: "the knowledge", ur: "علم", ar: "العلم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "is with", ur: "پاس ہے", ar: "عند" }, pos: "PREP", posLabel: "PREP", grammar: { role: "predicate" } },
      { arabic: "اللَّهِ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَإِنَّمَا", transliteration: "wa-innamā", meaning: { en: "and only", ur: "اور بس", ar: "وإنما" }, pos: "CONJ+RESTRICT", posLabel: "CONJ+RESTRICT", grammar: { role: "restriction" } },
      { arabic: "أَنَا", transliteration: "anā", meaning: { en: "I am", ur: "میں ہوں", ar: "أنا" }, pos: "PRON", posLabel: "PRON", grammar: { person: 1, number: "sg" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīr", root: "ن ذ ر", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīn", root: "ب ي ن", meaning: { en: "clear", ur: "کھلا", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "nominative" }, features: { participle: "active", form: "IV" } }
    ]
  },

  27: {
    ayahNumber: 27,
    text: "فَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَٰذَا الَّذِي كُنتُم بِهِ تَدَّعُونَ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "fa-lammā", meaning: { en: "But when", ur: "پھر جب", ar: "فلما" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "رَأَوْهُ", transliteration: "raʾawhu", root: "ر أ ي", meaning: { en: "they see it", ur: "وہ اسے دیکھیں گے", ar: "رأوه" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "زُلْفَةً", transliteration: "zulfah", root: "ز ل ف", meaning: { en: "approaching", ur: "قریب", ar: "زلفة" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" } },
      { arabic: "سِيئَتْ", transliteration: "sīʾat", root: "س و أ", meaning: { en: "will be distressed", ur: "بگڑ جائیں گے", ar: "سيئت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", voice: "passive", form: "I" } },
      { arabic: "وُجُوهُ", transliteration: "wujūhu", root: "و ج ه", meaning: { en: "the faces", ur: "چہرے", ar: "وجوه" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "of those who", ur: "ان کے جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "mudaf_ilayh" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "وَقِيلَ", transliteration: "wa-qīla", root: "ق و ل", meaning: { en: "and it will be said", ur: "اور کہا جائے گا", ar: "وقيل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", voice: "passive", form: "I" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "what", ur: "جس", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "predicate" } },
      { arabic: "كُنتُم", transliteration: "kuntum", root: "ك و ن", meaning: { en: "you were", ur: "تم تھے", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "for it", ur: "اس کے بارے میں", ar: "به" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تَدَّعُونَ", transliteration: "taddaʿūn", root: "د ع و", meaning: { en: "claiming", ur: "بلایا کرتے تھے", ar: "تدعون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "VIII" } }
    ]
  },

  28: {
    ayahNumber: 28,
    text: "قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "أَرَأَيْتُمْ", transliteration: "a-raʾaytum", root: "ر أ ي", meaning: { en: "Have you considered", ur: "تم نے دیکھا", ar: "أرأيتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "أَهْلَكَنِيَ", transliteration: "ahlakaniya", root: "ه ل ك", meaning: { en: "destroys me", ur: "ہلاک کر دے مجھے", ar: "أهلكني" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "and those", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conjunction" } },
      { arabic: "مَّعِيَ", transliteration: "maʿiya", meaning: { en: "with me", ur: "میرے ساتھ ہیں", ar: "معي" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "رَحِمَنَا", transliteration: "raḥimanā", root: "ر ح م", meaning: { en: "He has mercy on us", ur: "ہم پر رحم کرے", ar: "رحمنا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "فَمَن", transliteration: "fa-man", meaning: { en: "then who", ur: "تو کون", ar: "فمن" }, pos: "CONJ+INTERROG", posLabel: "CONJ+INTERROG", grammar: { role: "rhetorical" } },
      { arabic: "يُجِيرُ", transliteration: "yujīru", root: "ج ي ر", meaning: { en: "can protect", ur: "بچائے گا", ar: "يجير" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "IV" } },
      { arabic: "الْكَافِرِينَ", transliteration: "al-kāfirīn", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافروں کو", ar: "الكافرين" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true }, features: { participle: "active" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَذَابٍ", transliteration: "ʿadhāb", root: "ع ذ ب", meaning: { en: "a punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "أَلِيمٍ", transliteration: "alīm", root: "أ ل م", meaning: { en: "painful", ur: "دردناک", ar: "أليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } }
    ]
  },

  29: {
    ayahNumber: 29,
    text: "قُلْ هُوَ الرَّحْمَٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا ۖ فَسَتَعْلَمُونَ مَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "الرَّحْمَٰنُ", transliteration: "ar-raḥmān", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمن", ar: "الرحمن" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } },
      { arabic: "آمَنَّا", transliteration: "āmannā", root: "أ م ن", meaning: { en: "we have believed", ur: "ہم ایمان لائے", ar: "آمنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "IV" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "in Him", ur: "اس پر", ar: "به" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَعَلَيْهِ", transliteration: "wa-ʿalayhi", meaning: { en: "and upon Him", ur: "اور اسی پر", ar: "وعليه" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تَوَكَّلْنَا", transliteration: "tawakkalnā", root: "و ك ل", meaning: { en: "we have relied", ur: "ہم نے بھروسہ کیا", ar: "توكلنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "V" } },
      { arabic: "فَسَتَعْلَمُونَ", transliteration: "fa-sa-taʿlamūn", root: "ع ل م", meaning: { en: "then you will know", ur: "تو جلد جان لو گے", ar: "فستعلمون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "future", form: "I" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "who", ur: "کون", ar: "من" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "subject" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "is", ur: "ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَلَالٍ", transliteration: "ḍalāl", root: "ض ل ل", meaning: { en: "error", ur: "گمراہی", ar: "ضلال" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "مُّبِينٍ", transliteration: "mubīn", root: "ب ي ن", meaning: { en: "clear", ur: "کھلی", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active", form: "IV" } }
    ]
  },

  30: {
    ayahNumber: 30,
    text: "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "أَرَأَيْتُمْ", transliteration: "a-raʾaytum", root: "ر أ ي", meaning: { en: "Have you considered", ur: "بتاؤ", ar: "أرأيتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "أَصْبَحَ", transliteration: "aṣbaḥa", root: "ص ب ح", meaning: { en: "becomes", ur: "ہو جائے", ar: "أصبح" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "مَاؤُكُمْ", transliteration: "māʾukum", root: "م و ه", meaning: { en: "your water", ur: "تمہارا پانی", ar: "ماؤكم" }, pos: "N", posLabel: "N", grammar: { role: "subject_kana", case: "nominative" } },
      { arabic: "غَوْرًا", transliteration: "ghawran", root: "غ و ر", meaning: { en: "sunken", ur: "زمین میں دھنس جائے", ar: "غوراً" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" } },
      { arabic: "فَمَن", transliteration: "fa-man", meaning: { en: "then who", ur: "تو کون", ar: "فمن" }, pos: "CONJ+INTERROG", posLabel: "CONJ+INTERROG", grammar: { role: "rhetorical" } },
      { arabic: "يَأْتِيكُم", transliteration: "yaʾtīkum", root: "أ ت ي", meaning: { en: "could bring you", ur: "لا کر دے تمہیں", ar: "يأتيكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "بِمَاءٍ", transliteration: "bi-māʾ", root: "م و ه", meaning: { en: "water", ur: "پانی", ar: "بماء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "مَّعِينٍ", transliteration: "maʿīn", root: "ع ي ن", meaning: { en: "flowing", ur: "بہتا ہوا", ar: "معين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } }
    ]
  }
};

export default TREEBANK_DATA;
