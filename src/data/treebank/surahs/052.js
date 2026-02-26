/**
 * Surah At-Tur (The Mount) - Surah 52
 * Quranic Arabic Treebank Data
 */

export const TREEBANK_DATA = {
  surahId: 52,
  surahName: "At-Tur",
  surahNameArabic: "الطور",
  totalAyahs: 49,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "وَالطُّورِ",
    words: [
      { arabic: "وَالطُّورِ", transliteration: "waṭ-ṭūri", meaning: { en: "By the mount", ur: "قسم ہے طور کی", ar: "والجبل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", type: "oath", root: "ط-و-ر" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "وَكِتَابٍ مَّسْطُورٍ",
    words: [
      { arabic: "وَكِتَابٍ", transliteration: "wakitābin", meaning: { en: "And a Book", ur: "اور کتاب کی", ar: "وكتاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ك-ت-ب" } },
      { arabic: "مَّسْطُورٍ", transliteration: "masṭūrin", meaning: { en: "inscribed", ur: "لکھی ہوئی", ar: "مكتوب" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "س-ط-ر", form: "I" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "فِي رَقٍّ مَّنشُورٍ",
    words: [
      { arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "رَقٍّ", transliteration: "raqqin", meaning: { en: "parchment", ur: "کھلے کاغذ", ar: "جلد" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ق-ق" } },
      { arabic: "مَّنشُورٍ", transliteration: "manshūrin", meaning: { en: "spread open", ur: "کھلے ہوئے", ar: "مبسوط" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "ن-ش-ر", form: "I" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "وَالْبَيْتِ الْمَعْمُورِ",
    words: [
      { arabic: "وَالْبَيْتِ", transliteration: "wal-bayti", meaning: { en: "And the frequented House", ur: "اور آباد گھر کی", ar: "والبيت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ب-ي-ت" } },
      { arabic: "الْمَعْمُورِ", transliteration: "al-maʿmūri", meaning: { en: "frequented", ur: "آباد", ar: "العامر" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "ع-م-ر", form: "I" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَالسَّقْفِ الْمَرْفُوعِ",
    words: [
      { arabic: "وَالسَّقْفِ", transliteration: "was-saqfi", meaning: { en: "And the roof raised high", ur: "اور بلند چھت کی", ar: "والسقف" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "س-ق-ف" } },
      { arabic: "الْمَرْفُوعِ", transliteration: "al-marfūʿi", meaning: { en: "raised high", ur: "بلند", ar: "المرتفع" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "ر-ف-ع", form: "I" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَالْبَحْرِ الْمَسْجُورِ",
    words: [
      { arabic: "وَالْبَحْرِ", transliteration: "wal-baḥri", meaning: { en: "And the sea", ur: "اور بھرے سمندر کی", ar: "والبحر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ب-ح-ر" } },
      { arabic: "الْمَسْجُورِ", transliteration: "al-masjūri", meaning: { en: "filled with fire", ur: "بھڑکایا ہوا", ar: "الموقد" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "س-ج-ر", form: "I" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "إِنَّ عَذَابَ رَبِّكَ لَوَاقِعٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", meaning: { en: "the punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "تیرے رب کا", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "لَوَاقِعٌ", transliteration: "lawāqiʿun", meaning: { en: "will surely occur", ur: "یقیناً واقع ہونے والا ہے", ar: "لكائن" }, pos: "PART+AP", posLabel: "PART+AP", grammar: { case: "nominative", root: "و-ق-ع", lam: "emphasis" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "مَّا لَهُ مِن دَافِعٍ",
    words: [
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں ہے", ar: "ليس" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for it", ur: "اس کا", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "predicate" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "emphatic", type: "extra" } },
      { arabic: "دَافِعٍ", transliteration: "dāfiʿin", meaning: { en: "preventer", ur: "ٹالنے والا", ar: "مانع" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "د-ف-ع" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "يَوْمَ تَمُورُ السَّمَاءُ مَوْرًا",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "On the Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "تَمُورُ", transliteration: "tamūru", meaning: { en: "will sway", ur: "تھرتھرائے گا", ar: "تتحرك" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-و-ر" } },
      { arabic: "السَّمَاءُ", transliteration: "al-samāʾu", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مَوْرًا", transliteration: "mawran", meaning: { en: "with circular motion", ur: "گھومنا", ar: "حركة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 2, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَتَسِيرُ الْجِبَالُ سَيْرًا",
    words: [
      { arabic: "وَتَسِيرُ", transliteration: "watasīru", meaning: { en: "And will move", ur: "اور چلیں گے", ar: "وتسير" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "س-ي-ر" } },
      { arabic: "الْجِبَالُ", transliteration: "al-jibālu", meaning: { en: "the mountains", ur: "پہاڑ", ar: "الجبال" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "سَيْرًا", transliteration: "sayran", meaning: { en: "a movement", ur: "چلنا", ar: "سيرا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun", root: "س-ي-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 1, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "فَوَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
    words: [
      { arabic: "فَوَيْلٌ", transliteration: "fawaylun", meaning: { en: "Then woe", ur: "تو تباہی ہے", ar: "فويل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "و-ي-ل" } },
      { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", meaning: { en: "that Day", ur: "اس دن", ar: "يومئذ" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "temporal" } },
      { arabic: "لِّلْمُكَذِّبِينَ", transliteration: "lil-mukadhdhibīna", meaning: { en: "to the deniers", ur: "جھٹلانے والوں کے لیے", ar: "للمكذبين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", root: "ك-ذ-ب", form: "II" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "الَّذِينَ هُمْ فِي خَوْضٍ يَلْعَبُونَ",
    words: [
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "خَوْضٍ", transliteration: "khawḍin", meaning: { en: "vain discourse", ur: "بیہودہ بات", ar: "خوض" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-و-ض" } },
      { arabic: "يَلْعَبُونَ", transliteration: "yalʿabūna", meaning: { en: "amuse themselves", ur: "کھیل رہے ہیں", ar: "يلعبون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ل-ع-ب" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 1, to: 5, label: 'موصول + صلة' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "يَوْمَ يُدَعُّونَ إِلَىٰ نَارِ جَهَنَّمَ دَعًّا",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "temporal" } },
      { arabic: "يُدَعُّونَ", transliteration: "yudaʿʿūna", meaning: { en: "they will be pushed", ur: "دھکیلے جائیں گے", ar: "يدعون" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "د-ع-ع" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "نَارِ", transliteration: "nāri", meaning: { en: "the Fire", ur: "آگ", ar: "نار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ر" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "of Hell", ur: "جہنم کی", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper noun" } },
      { arabic: "دَعًّا", transliteration: "daʿʿan", meaning: { en: "with a [violent] push", ur: "دھکے سے", ar: "دعا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun", root: "د-ع-ع" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "هَٰذِهِ النَّارُ الَّتِي كُنتُم بِهَا تُكَذِّبُونَ",
    words: [
      { arabic: "هَٰذِهِ", transliteration: "hādhihi", meaning: { en: "This is", ur: "یہ ہے", ar: "هذه" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", gender: "feminine" } },
      { arabic: "النَّارُ", transliteration: "al-nāru", meaning: { en: "the Fire", ur: "وہ آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-و-ر" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "which", ur: "جس کو", ar: "التي" }, pos: "REL", posLabel: "REL", grammar: { gender: "feminine" } },
      { arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "auxiliary" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "of it", ur: "اس کو", ar: "بها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "تُكَذِّبُونَ", transliteration: "tukadhdhibūna", meaning: { en: "deny", ur: "جھٹلاتے تھے", ar: "تكذبون" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 6, label: 'موصول + صلة' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "أَفَسِحْرٌ هَٰذَا أَمْ أَنتُمْ لَا تُبْصِرُونَ",
    words: [
      { arabic: "أَفَسِحْرٌ", transliteration: "afasiḥrun", meaning: { en: "Then is this magic", ur: "تو کیا یہ جادو ہے", ar: "أفسحر" }, pos: "Q+CONJ+N", posLabel: "Q+CONJ+N", grammar: { case: "nominative", root: "س-ح-ر" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you", ur: "تم", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "تُبْصِرُونَ", transliteration: "tubṣirūna", meaning: { en: "see", ur: "دیکھتے ہو", ar: "تبصرون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ب-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 5, to: 6, label: 'نفی + فعل' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "اصْلَوْهَا فَاصْبِرُوا أَوْ لَا تَصْبِرُوا سَوَاءٌ عَلَيْكُمْ إِنَّمَا تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "اصْلَوْهَا", transliteration: "iṣlawhā", meaning: { en: "Burn therein", ur: "اس میں داخل ہو جاؤ", ar: "اصلوها" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ل-ي", mood: "imperative" } },
      { arabic: "فَاصْبِرُوا", transliteration: "fāṣbirū", meaning: { en: "then be patient", ur: "پھر صبر کرو", ar: "فاصبروا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-ب-ر", mood: "imperative" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَصْبِرُوا", transliteration: "taṣbirū", meaning: { en: "be patient", ur: "صبر کرو", ar: "تصبروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ب-ر" } },
      { arabic: "سَوَاءٌ", transliteration: "sawāʾun", meaning: { en: "it is all the same", ur: "برابر ہے", ar: "سواء" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "عليكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "you are only", ur: "بس تم کو", ar: "إنما" }, pos: "PART", posLabel: "PART", grammar: { type: "restriction" } },
      { arabic: "تُجْزَوْنَ", transliteration: "tujzawna", meaning: { en: "being recompensed", ur: "بدلہ دیا جا رہا ہے", ar: "تجزون" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "ج-ز-ي" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "for what", ur: "اس کا جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "کرتے تھے", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نهی + فعل' },
        { from: 8, to: 9, label: 'حصر' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَعِيمٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "الْمُتَّقِينَ", transliteration: "al-muttaqīna", meaning: { en: "the righteous", ur: "پرہیزگار", ar: "المتقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "و-ق-ي", form: "VIII" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "will be in", ur: "میں ہوں گے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "gardens", ur: "باغات", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ج-ن-ن" } },
      { arabic: "وَنَعِيمٍ", transliteration: "wanaʿīmin", meaning: { en: "and pleasure", ur: "اور نعمتوں", ar: "ونعيم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ع-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "فَاكِهِينَ بِمَا آتَاهُمْ رَبُّهُمْ وَوَقَاهُمْ رَبُّهُمْ عَذَابَ الْجَحِيمِ",
    words: [
      { arabic: "فَاكِهِينَ", transliteration: "fākihīna", meaning: { en: "Enjoying", ur: "خوش ہوتے ہوئے", ar: "فاكهين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ف-ك-ه" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "in what", ur: "اس سے جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "آتَاهُمْ", transliteration: "ātāhum", meaning: { en: "has given them", ur: "عطا کیا ان کو", ar: "آتاهم" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "رَبُّهُمْ", transliteration: "rabbuhum", meaning: { en: "their Lord", ur: "ان کے رب نے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "وَوَقَاهُمْ", transliteration: "wawaqāhum", meaning: { en: "and protected them", ur: "اور بچایا ان کو", ar: "ووقاهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "و-ق-ي" } },
      { arabic: "رَبُّهُمْ", transliteration: "rabbuhum", meaning: { en: "their Lord", ur: "ان کے رب نے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", meaning: { en: "the punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "الْجَحِيمِ", transliteration: "al-jaḥīmi", meaning: { en: "of the Hellfire", ur: "جہنم کے", ar: "الجحيم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "كُلُوا وَاشْرَبُوا هَنِيئًا بِمَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "كُلُوا", transliteration: "kulū", meaning: { en: "Eat", ur: "کھاؤ", ar: "كلوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ك-ل", mood: "imperative" } },
      { arabic: "وَاشْرَبُوا", transliteration: "washrabū", meaning: { en: "and drink", ur: "اور پیو", ar: "واشربوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ش-ر-ب", mood: "imperative" } },
      { arabic: "هَنِيئًا", transliteration: "hanīʾan", meaning: { en: "in satisfaction", ur: "مزے سے", ar: "هنيئا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ه-ن-أ" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "اس کے بدلے جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "کرتے تھے", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "مُتَّكِئِينَ عَلَىٰ سُرُرٍ مَّصْفُوفَةٍ وَزَوَّجْنَاهُم بِحُورٍ عِينٍ",
    words: [
      { arabic: "مُتَّكِئِينَ", transliteration: "muttakiʾīna", meaning: { en: "Reclining", ur: "تکیے لگائے ہوئے", ar: "متكئين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "و-ك-أ", form: "VIII" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "سُرُرٍ", transliteration: "sururin", meaning: { en: "thrones", ur: "تختوں", ar: "سرر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "س-ر-ر" } },
      { arabic: "مَّصْفُوفَةٍ", transliteration: "maṣfūfatin", meaning: { en: "lined up", ur: "قطار میں لگے ہوئے", ar: "مصفوفة" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "ص-ف-ف" } },
      { arabic: "وَزَوَّجْنَاهُم", transliteration: "wazawwajnāhum", meaning: { en: "And We will marry them", ur: "اور ہم ان کا جوڑا بنائیں گے", ar: "وزوجناهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ز-و-ج" } },
      { arabic: "بِحُورٍ", transliteration: "biḥūrin", meaning: { en: "with fair ones", ur: "حوروں سے", ar: "بحور" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-و-ر" } },
      { arabic: "عِينٍ", transliteration: "ʿīnin", meaning: { en: "with large eyes", ur: "بڑی آنکھوں والی", ar: "عين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ أَلْحَقْنَا بِهِمْ ذُرِّيَّتَهُمْ وَمَا أَلَتْنَاهُم مِّنْ عَمَلِهِم مِّن شَيْءٍ كُلُّ امْرِئٍ بِمَا كَسَبَ رَهِينٌ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَاتَّبَعَتْهُمْ", transliteration: "wattabaʿathum", meaning: { en: "and whose descendants followed them", ur: "اور ان کی اولاد نے ان کی پیروی کی", ar: "واتبعتهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "ذُرِّيَّتُهُم", transliteration: "dhurriyyatuhum", meaning: { en: "their descendants", ur: "ان کی اولاد", ar: "ذريتهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ذ-ر-ر" } },
      { arabic: "بِإِيمَانٍ", transliteration: "biʾīmānin", meaning: { en: "in faith", ur: "ایمان کے ساتھ", ar: "بإيمان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-م-ن" } },
      { arabic: "أَلْحَقْنَا", transliteration: "alḥaqnā", meaning: { en: "We will join", ur: "ہم ملا دیں گے", ar: "ألحقنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ل-ح-ق" } },
      { arabic: "بِهِمْ", transliteration: "bihim", meaning: { en: "with them", ur: "ان کے ساتھ", ar: "بهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "ذُرِّيَّتَهُمْ", transliteration: "dhurriyyatahum", meaning: { en: "their descendants", ur: "ان کی اولاد کو", ar: "ذريتهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ذ-ر-ر" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَلَتْنَاهُم", transliteration: "alatnāhum", meaning: { en: "We deprived them", ur: "ہم نے ان کو کم کیا", ar: "ألتناهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ل-ت" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "عَمَلِهِم", transliteration: "ʿamalihim", meaning: { en: "their deeds", ur: "ان کے عمل", ar: "عملهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-م-ل" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "extra" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "Every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "امْرِئٍ", transliteration: "imriʾin", meaning: { en: "person", ur: "شخص", ar: "امرئ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "اس کے بدلے جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كَسَبَ", transliteration: "kasaba", meaning: { en: "he earned", ur: "اس نے کمایا", ar: "كسب" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-س-ب" } },
      { arabic: "رَهِينٌ", transliteration: "rahīnun", meaning: { en: "pledged", ur: "گروی ہے", ar: "رهين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ر-ه-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 19, label: 'مبتدأ + خبر' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "وَأَمْدَدْنَاهُم بِفَاكِهَةٍ وَلَحْمٍ مِّمَّا يَشْتَهُونَ",
    words: [
      { arabic: "وَأَمْدَدْنَاهُم", transliteration: "wa-amdadnāhum", meaning: { en: "And We will provide them", ur: "اور ہم ان کو فراہم کریں گے", ar: "وأمددناهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "م-د-د" } },
      { arabic: "بِفَاكِهَةٍ", transliteration: "bifākihatin", meaning: { en: "with fruit", ur: "پھل", ar: "بفاكهة" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ف-ك-ه" } },
      { arabic: "وَلَحْمٍ", transliteration: "walaḥmin", meaning: { en: "and meat", ur: "اور گوشت", ar: "ولحم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ل-ح-م" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from whatever", ur: "جو کچھ", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَشْتَهُونَ", transliteration: "yashtahūna", meaning: { en: "they desire", ur: "وہ چاہیں", ar: "يشتهون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ش-ه-و" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "يَتَنَازَعُونَ فِيهَا كَأْسًا لَّا لَغْوٌ فِيهَا وَلَا تَأْثِيمٌ",
    words: [
      { arabic: "يَتَنَازَعُونَ", transliteration: "yatanāzaʿūna", meaning: { en: "They will exchange", ur: "وہ ایک دوسرے سے لیں گے", ar: "يتنازعون" }, pos: "V", posLabel: "V", grammar: { form: "VI", root: "ن-ز-ع" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "كَأْسًا", transliteration: "kaʾsan", meaning: { en: "a cup", ur: "شراب کا پیالہ", ar: "كأسا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-أ-س" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "no", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "لَغْوٌ", transliteration: "laghwun", meaning: { en: "ill speech", ur: "بیہودہ بات", ar: "لغو" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ل-غ-و" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and no", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "تَأْثِيمٌ", transliteration: "taʾthīmun", meaning: { en: "commission of sin", ur: "گناہ", ar: "تأثيم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ث-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'نفی + مبتدأ' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "وَيَطُوفُ عَلَيْهِمْ غِلْمَانٌ لَّهُمْ كَأَنَّهُمْ لُؤْلُؤٌ مَّكْنُونٌ",
    words: [
      { arabic: "وَيَطُوفُ", transliteration: "wayaṭūfu", meaning: { en: "And will circulate", ur: "اور گھومیں گے", ar: "ويطوف" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ط-و-ف" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "among them", ur: "ان کے درمیان", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "غِلْمَانٌ", transliteration: "ghilmānun", meaning: { en: "boys", ur: "لڑکے", ar: "غلمان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "غ-ل-م" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے خاص", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "كَأَنَّهُمْ", transliteration: "kaʾannahum", meaning: { en: "as if they were", ur: "گویا وہ", ar: "كأنهم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "comparison" } },
      { arabic: "لُؤْلُؤٌ", transliteration: "luʾluʾun", meaning: { en: "pearls", ur: "موتی", ar: "لؤلؤ" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ل-ء-ل" } },
      { arabic: "مَّكْنُونٌ", transliteration: "maknūnun", meaning: { en: "well-protected", ur: "چھپے ہوئے", ar: "مكنون" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ك-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "وَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَسَاءَلُونَ",
    words: [
      { arabic: "وَأَقْبَلَ", transliteration: "wa-aqbala", meaning: { en: "And will approach", ur: "اور متوجہ ہوں گے", ar: "وأقبل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ق-ب-ل" } },
      { arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", meaning: { en: "some of them", ur: "ان میں سے بعض", ar: "بعضهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "کی طرف", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "بَعْضٍ", transliteration: "baʿḍin", meaning: { en: "one another", ur: "بعض", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "يَتَسَاءَلُونَ", transliteration: "yatasāʾalūna", meaning: { en: "questioning each other", ur: "سوال کرتے ہوئے", ar: "يتساءلون" }, pos: "V", posLabel: "V", grammar: { form: "VI", root: "س-أ-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "قَالُوا إِنَّا كُنَّا قَبْلُ فِي أَهْلِنَا مُشْفِقِينَ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ کہیں گے", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک ہم", ar: "إنا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "were", ur: "تھے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { type: "temporal" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "among", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أَهْلِنَا", transliteration: "ahlīnā", meaning: { en: "our families", ur: "اپنے گھر والوں", ar: "أهلنا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ه-ل" } },
      { arabic: "مُشْفِقِينَ", transliteration: "mushfiqīna", meaning: { en: "fearful", ur: "ڈرتے رہتے تھے", ar: "مشفقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ش-ف-ق", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "فَمَنَّ اللَّهُ عَلَيْنَا وَوَقَانَا عَذَابَ السَّمُومِ",
    words: [
      { arabic: "فَمَنَّ", transliteration: "famanna", meaning: { en: "So Allah bestowed favor", ur: "پس اللہ نے احسان کیا", ar: "فمن" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "م-ن-ن" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", meaning: { en: "upon us", ur: "ہم پر", ar: "علينا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَوَقَانَا", transliteration: "wawaqānā", meaning: { en: "and protected us", ur: "اور بچایا ہمیں", ar: "ووقانا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "و-ق-ي" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", meaning: { en: "the punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "السَّمُومِ", transliteration: "al-samūmi", meaning: { en: "of the Scorching Fire", ur: "لُو کے", ar: "السموم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "إِنَّا كُنَّا مِن قَبْلُ نَدْعُوهُ إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک ہم", ar: "إنا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "used to", ur: "تھے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { type: "temporal" } },
      { arabic: "نَدْعُوهُ", transliteration: "nadʿūhu", meaning: { en: "invoke Him", ur: "اسے پکارتے تھے", ar: "ندعوه" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "بیشک وہ", ar: "إنه" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْبَرُّ", transliteration: "al-barru", meaning: { en: "the Beneficent", ur: "نیکی کرنے والا", ar: "البر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ر-ر" } },
      { arabic: "الرَّحِيمُ", transliteration: "al-raḥīmu", meaning: { en: "the Merciful", ur: "مہربان", ar: "الرحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ر-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "فَذَكِّرْ فَمَا أَنتَ بِنِعْمَتِ رَبِّكَ بِكَاهِنٍ وَلَا مَجْنُونٍ",
    words: [
      { arabic: "فَذَكِّرْ", transliteration: "fadhakkir", meaning: { en: "So remind", ur: "پس نصیحت کرتے رہو", ar: "فذكر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ذ-ك-ر", mood: "imperative" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "for not", ur: "کیونکہ نہیں", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "you are", ur: "تم ہو", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd" } },
      { arabic: "بِنِعْمَتِ", transliteration: "biniʿmati", meaning: { en: "by the favor", ur: "اپنے رب کے فضل سے", ar: "بنعمة" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ن-ع-م" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "تیرے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "بِكَاهِنٍ", transliteration: "bikāhinin", meaning: { en: "a soothsayer", ur: "کاہن", ar: "بكاهن" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ك-ه-ن" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "or", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "مَجْنُونٍ", transliteration: "majnūnin", meaning: { en: "a madman", ur: "دیوانے", ar: "مجنون" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "ج-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 8, label: 'عطف' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "أَمْ يَقُولُونَ شَاعِرٌ نَّتَرَبَّصُ بِهِ رَيْبَ الْمَنُونِ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "do they say", ur: "یہ کہتے ہیں", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "شَاعِرٌ", transliteration: "shāʿirun", meaning: { en: "a poet", ur: "یہ شاعر ہے", ar: "شاعر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ش-ع-ر" } },
      { arabic: "نَّتَرَبَّصُ", transliteration: "natarabbaṣu", meaning: { en: "for whom we wait", ur: "ہم انتظار کرتے ہیں", ar: "نتربص" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ر-ب-ص" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "for him", ur: "اس کا", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "رَيْبَ", transliteration: "rayba", meaning: { en: "a misfortune", ur: "حادثات", ar: "ريب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-ي-ب" } },
      { arabic: "الْمَنُونِ", transliteration: "al-manūni", meaning: { en: "of death", ur: "زمانے کے", ar: "المنون" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "قُلْ تَرَبَّصُوا فَإِنِّي مَعَكُم مِّنَ الْمُتَرَبِّصِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "تَرَبَّصُوا", transliteration: "tarabbaṣū", meaning: { en: "Wait", ur: "انتظار کرو", ar: "تربصوا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ر-ب-ص", mood: "imperative" } },
      { arabic: "فَإِنِّي", transliteration: "faʾinnī", meaning: { en: "for indeed I am", ur: "بیشک میں بھی", ar: "فإني" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "مَعَكُم", transliteration: "maʿakum", meaning: { en: "with you", ur: "تمہارے ساتھ", ar: "معكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "accompaniment" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "among", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْمُتَرَبِّصِينَ", transliteration: "al-mutarabbiṣīna", meaning: { en: "those who wait", ur: "انتظار کرنے والوں میں", ar: "المتربصين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ر-ب-ص", form: "V" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "أَمْ تَأْمُرُهُمْ أَحْلَامُهُم بِهَٰذَا أَمْ هُمْ قَوْمٌ طَاغُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "تَأْمُرُهُمْ", transliteration: "taʾmuruhum", meaning: { en: "do command them", ur: "حکم دیتی ہیں انہیں", ar: "تأمرهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-م-ر" } },
      { arabic: "أَحْلَامُهُم", transliteration: "aḥlāmuhum", meaning: { en: "their minds", ur: "ان کی عقلیں", ar: "أحلامهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ح-ل-م" } },
      { arabic: "بِهَٰذَا", transliteration: "bihādhā", meaning: { en: "to this", ur: "اس بات کا", ar: "بهذا" }, pos: "P+DEM", posLabel: "P+DEM", grammar: { type: "demonstrative" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "are they", ur: "یہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "قَوْمٌ", transliteration: "qawmun", meaning: { en: "a people", ur: "قوم ہیں", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-م" } },
      { arabic: "طَاغُونَ", transliteration: "ṭāghūna", meaning: { en: "transgressing", ur: "سرکش", ar: "طاغون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ط-غ-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "أَمْ يَقُولُونَ تَقَوَّلَهُ بَل لَّا يُؤْمِنُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "do they say", ur: "یہ کہتے ہیں", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "تَقَوَّلَهُ", transliteration: "taqawwalahu", meaning: { en: "he invented it", ur: "اس نے خود گھڑ لیا ہے", ar: "تقوله" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ق-و-ل" } },
      { arabic: "بَل", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بل" }, pos: "PART", posLabel: "PART", grammar: { type: "retraction" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yuʾminūna", meaning: { en: "they believe", ur: "ایمان لاتے", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'نفی + فعل' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "فَلْيَأْتُوا بِحَدِيثٍ مِّثْلِهِ إِن كَانُوا صَادِقِينَ",
    words: [
      { arabic: "فَلْيَأْتُوا", transliteration: "falyaʾtū", meaning: { en: "Then let them produce", ur: "تو لے آئیں", ar: "فليأتوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "أ-ت-ي", mood: "jussive" } },
      { arabic: "بِحَدِيثٍ", transliteration: "biḥadīthin", meaning: { en: "a statement", ur: "ایک کلام", ar: "بحديث" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-د-ث" } },
      { arabic: "مِّثْلِهِ", transliteration: "mithlihī", meaning: { en: "like it", ur: "اس جیسا", ar: "مثله" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ث-ل" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they are", ur: "وہ ہیں", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "صَادِقِينَ", transliteration: "ṣādiqīna", meaning: { en: "truthful", ur: "سچے", ar: "صادقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ص-د-ق" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "خُلِقُوا", transliteration: "khuliqū", meaning: { en: "were they created", ur: "یہ پیدا ہوئے ہیں", ar: "خلقوا" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "خ-ل-ق" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "origin" } },
      { arabic: "غَيْرِ", transliteration: "ghayri", meaning: { en: "other than", ur: "بغیر", ar: "غير" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "a thing/creator", ur: "کسی چیز کے", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "are they", ur: "یہ خود", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "الْخَالِقُونَ", transliteration: "al-khāliqūna", meaning: { en: "the creators", ur: "پیدا کرنے والے ہیں", ar: "الخالقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "خ-ل-ق" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "أَمْ خَلَقُوا السَّمَاوَاتِ وَالْأَرْضَ بَل لَّا يُوقِنُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "خَلَقُوا", transliteration: "khalaqū", meaning: { en: "did they create", ur: "انہوں نے پیدا کیا", ar: "خلقوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین کو", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "بَل", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بل" }, pos: "PART", posLabel: "PART", grammar: { type: "retraction" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُوقِنُونَ", transliteration: "yūqinūna", meaning: { en: "they are certain", ur: "یقین رکھتے", ar: "يوقنون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ي-ق-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'نفی + فعل' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "أَمْ عِندَهُمْ خَزَائِنُ رَبِّكَ أَمْ هُمُ الْمُصَيْطِرُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "عِندَهُمْ", transliteration: "ʿindahum", meaning: { en: "with them are", ur: "ان کے پاس ہیں", ar: "عندهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "predicate" } },
      { arabic: "خَزَائِنُ", transliteration: "khazāʾinu", meaning: { en: "the treasuries", ur: "خزانے", ar: "خزائن" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "خ-ز-ن" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "تیرے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "are they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْمُصَيْطِرُونَ", transliteration: "al-muṣayṭirūna", meaning: { en: "the controllers", ur: "حاکم و مختار ہیں", ar: "المصيطرون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "س-ط-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "أَمْ لَهُمْ سُلَّمٌ يَسْتَمِعُونَ فِيهِ فَلْيَأْتِ مُسْتَمِعُهُم بِسُلْطَانٍ مُّبِينٍ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "have they", ur: "ان کے پاس", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "سُلَّمٌ", transliteration: "sullamun", meaning: { en: "a stairway", ur: "سیڑھی ہے", ar: "سلم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ل-م" } },
      { arabic: "يَسْتَمِعُونَ", transliteration: "yastamiʿūna", meaning: { en: "they listen", ur: "اس پر سنتے ہیں", ar: "يستمعون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "س-م-ع" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "فَلْيَأْتِ", transliteration: "falyaʾti", meaning: { en: "Then let bring", ur: "تو لائے", ar: "فليأت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "أ-ت-ي", mood: "jussive" } },
      { arabic: "مُسْتَمِعُهُم", transliteration: "mustamiʿuhum", meaning: { en: "their listener", ur: "ان کا سننے والا", ar: "مستمعهم" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "س-م-ع", form: "VIII" } },
      { arabic: "بِسُلْطَانٍ", transliteration: "bisulṭānin", meaning: { en: "an authority", ur: "کوئی واضح دلیل", ar: "بسلطان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-ل-ط" } },
      { arabic: "مُّبِينٍ", transliteration: "mubīnin", meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ب-ي-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "أَمْ لَهُ الْبَنَاتُ وَلَكُمُ الْبَنُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for Him are", ur: "اس کیلئے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "الْبَنَاتُ", transliteration: "al-banātu", meaning: { en: "daughters", ur: "بیٹیاں ہیں", ar: "البنات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ب-ن-ت" } },
      { arabic: "وَلَكُمُ", transliteration: "walakumu", meaning: { en: "and for you", ur: "اور تمہارے لیے", ar: "ولكم" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "possession" } },
      { arabic: "الْبَنُونَ", transliteration: "al-banūna", meaning: { en: "sons", ur: "بیٹے", ar: "البنون" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ب-ن-و" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "أَمْ تَسْأَلُهُمْ أَجْرًا فَهُم مِّن مَّغْرَمٍ مُّثْقَلُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "تَسْأَلُهُمْ", transliteration: "tasʾaluhum", meaning: { en: "you ask them", ur: "تم ان سے مانگتے ہو", ar: "تسألهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-أ-ل" } },
      { arabic: "أَجْرًا", transliteration: "ajran", meaning: { en: "a payment", ur: "اجرت", ar: "أجرا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ج-ر" } },
      { arabic: "فَهُم", transliteration: "fahum", meaning: { en: "so they", ur: "تو وہ", ar: "فهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "by", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "cause" } },
      { arabic: "مَّغْرَمٍ", transliteration: "maghraMin", meaning: { en: "debt", ur: "تاوان", ar: "مغرم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-ر-م" } },
      { arabic: "مُّثْقَلُونَ", transliteration: "muthqalūna", meaning: { en: "burdened", ur: "بوجھ سے دبے ہوئے ہیں", ar: "مثقلون" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ث-ق-ل", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "أَمْ عِندَهُمُ الْغَيْبُ فَهُمْ يَكْتُبُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "عِندَهُمُ", transliteration: "ʿindahumu", meaning: { en: "have they knowledge of", ur: "ان کے پاس ہے", ar: "عندهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "predicate" } },
      { arabic: "الْغَيْبُ", transliteration: "al-ghaybu", meaning: { en: "the unseen", ur: "غیب کا علم", ar: "الغيب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "غ-ي-ب" } },
      { arabic: "فَهُمْ", transliteration: "fahum", meaning: { en: "so they", ur: "تو وہ", ar: "فهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "يَكْتُبُونَ", transliteration: "yaktubūna", meaning: { en: "write", ur: "لکھتے ہیں", ar: "يكتبون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ت-ب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "أَمْ يُرِيدُونَ كَيْدًا فَالَّذِينَ كَفَرُوا هُمُ الْمَكِيدُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يُرِيدُونَ", transliteration: "yurīdūna", meaning: { en: "do they intend", ur: "یہ چاہتے ہیں", ar: "يريدون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-و-د" } },
      { arabic: "كَيْدًا", transliteration: "kaydan", meaning: { en: "a plan", ur: "فریب", ar: "كيدا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ي-د" } },
      { arabic: "فَالَّذِينَ", transliteration: "falladhīna", meaning: { en: "But those who", ur: "پس جنہوں نے", ar: "فالذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieve", ur: "کفر کیا", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہی ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْمَكِيدُونَ", transliteration: "al-makīdūna", meaning: { en: "the ones being plotted against", ur: "جن پر فریب پڑے گا", ar: "المكيدون" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ك-ي-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "أَمْ لَهُمْ إِلَٰهٌ غَيْرُ اللَّهِ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "have they", ur: "ان کا کوئی", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "إِلَٰهٌ", transliteration: "ilāhun", meaning: { en: "a deity", ur: "معبود ہے", ar: "إله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ل-ه" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", meaning: { en: "other than", ur: "سوائے", ar: "غير" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "سُبْحَانَ", transliteration: "subḥāna", meaning: { en: "Exalted is", ur: "پاک ہے", ar: "سبحان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ب-ح" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "above what", ur: "اس سے جو", ar: "عما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يُشْرِكُونَ", transliteration: "yushrikūna", meaning: { en: "they associate", ur: "شرک کرتے ہیں", ar: "يشركون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ش-ر-ك" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "وَإِن يَرَوْا كِسْفًا مِّنَ السَّمَاءِ سَاقِطًا يَقُولُوا سَحَابٌ مَّرْكُومٌ",
    words: [
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "يَرَوْا", transliteration: "yaraw", meaning: { en: "they were to see", ur: "یہ دیکھیں", ar: "يروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "كِسْفًا", transliteration: "kisfan", meaning: { en: "a fragment", ur: "ٹکڑا", ar: "كسفا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-س-ف" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "origin" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "the sky", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "سَاقِطًا", transliteration: "sāqiṭan", meaning: { en: "falling", ur: "گرتا ہوا", ar: "ساقطا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "س-ق-ط" } },
      { arabic: "يَقُولُوا", transliteration: "yaqūlū", meaning: { en: "they would say", ur: "تو کہیں", ar: "يقولوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "سَحَابٌ", transliteration: "saḥābun", meaning: { en: "clouds", ur: "بادل ہیں", ar: "سحاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ح-ب" } },
      { arabic: "مَّرْكُومٌ", transliteration: "markūmun", meaning: { en: "heaped up", ur: "تہہ بہ تہہ", ar: "مركوم" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ر-ك-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "فَذَرْهُمْ حَتَّىٰ يُلَاقُوا يَوْمَهُمُ الَّذِي فِيهِ يُصْعَقُونَ",
    words: [
      { arabic: "فَذَرْهُمْ", transliteration: "fadharhum", meaning: { en: "So leave them", ur: "تو ان کو چھوڑ دو", ar: "فذرهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "و-ذ-ر", mood: "imperative" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "یہاں تک کہ", ar: "حتى" }, pos: "P", posLabel: "P", grammar: { type: "purposive" } },
      { arabic: "يُلَاقُوا", transliteration: "yulāqū", meaning: { en: "they meet", ur: "سامنا ہو", ar: "يلاقوا" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ل-ق-ي" } },
      { arabic: "يَوْمَهُمُ", transliteration: "yawmahumu", meaning: { en: "their Day", ur: "ان کا وہ دن", ar: "يومهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "in which", ur: "جس میں", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "temporal" } },
      { arabic: "يُصْعَقُونَ", transliteration: "yuṣʿaqūna", meaning: { en: "they will be struck dead", ur: "بے ہوش ہو جائیں گے", ar: "يصعقون" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "ص-ع-ق" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 7, label: 'موصول + صلة' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "يَوْمَ لَا يُغْنِي عَنْهُمْ كَيْدُهُمْ شَيْئًا وَلَا هُمْ يُنصَرُونَ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "temporal" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُغْنِي", transliteration: "yughnī", meaning: { en: "will avail", ur: "فائدہ دے گا", ar: "يغني" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "غ-ن-ي" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "them", ur: "ان کو", ar: "عنهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "كَيْدُهُمْ", transliteration: "kayduhum", meaning: { en: "their plan", ur: "ان کی چال", ar: "كيدهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ك-ي-د" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "anything", ur: "کچھ بھی", ar: "شيئا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ ہی", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "ان کو", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "يُنصَرُونَ", transliteration: "yunṣarūna", meaning: { en: "will be helped", ur: "مدد دی جائے گی", ar: "ينصرون" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "ن-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 5, label: 'فعل + فاعل' },
        { from: 3, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "وَإِنَّ لِلَّذِينَ ظَلَمُوا عَذَابًا دُونَ ذَٰلِكَ وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
    words: [
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک", ar: "وإن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان لوگوں کے لیے جنہوں نے", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { number: "plural" } },
      { arabic: "ظَلَمُوا", transliteration: "ẓalamū", meaning: { en: "wronged", ur: "ظلم کیا", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ظ-ل-م" } },
      { arabic: "عَذَابًا", transliteration: "ʿadhāban", meaning: { en: "a punishment", ur: "ایک عذاب ہے", ar: "عذابا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "دُونَ", transliteration: "dūna", meaning: { en: "before", ur: "اس سے پہلے", ar: "دون" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "وَلَٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "exceptive" } },
      { arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", meaning: { en: "most of them", ur: "ان میں سے اکثر", ar: "أكثرهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جانتے", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'نفی + فعل' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا وَسَبِّحْ بِحَمْدِ رَبِّكَ حِينَ تَقُومُ",
    words: [
      { arabic: "وَاصْبِرْ", transliteration: "waṣbir", meaning: { en: "And be patient", ur: "اور صبر کرو", ar: "واصبر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-ب-ر", mood: "imperative" } },
      { arabic: "لِحُكْمِ", transliteration: "liḥukmi", meaning: { en: "for the decision", ur: "حکم کا", ar: "لحكم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-ك-م" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "اپنے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "فَإِنَّكَ", transliteration: "faʾinnaka", meaning: { en: "for indeed you are", ur: "بیشک تم", ar: "فإنك" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "بِأَعْيُنِنَا", transliteration: "biʾaʿyuninā", meaning: { en: "within Our eyes", ur: "ہماری نگاہوں میں ہو", ar: "بأعيننا" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ع-ي-ن" } },
      { arabic: "وَسَبِّحْ", transliteration: "wasabbiḥ", meaning: { en: "and glorify", ur: "اور تسبیح کرو", ar: "وسبح" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "س-ب-ح", mood: "imperative" } },
      { arabic: "بِحَمْدِ", transliteration: "biḥamdi", meaning: { en: "with praise", ur: "حمد کے ساتھ", ar: "بحمد" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-م-د" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "حِينَ", transliteration: "ḥīna", meaning: { en: "when", ur: "جب", ar: "حين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "temporal" } },
      { arabic: "تَقُومُ", transliteration: "taqūmu", meaning: { en: "you arise", ur: "تم اٹھو", ar: "تقوم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "وَمِنَ اللَّيْلِ فَسَبِّحْهُ وَإِدْبَارَ النُّجُومِ",
    words: [
      { arabic: "وَمِنَ", transliteration: "wamina", meaning: { en: "And in a part of", ur: "اور رات کے", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "temporal" } },
      { arabic: "اللَّيْلِ", transliteration: "al-layli", meaning: { en: "the night", ur: "ایک حصے میں", ar: "الليل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-ي-ل" } },
      { arabic: "فَسَبِّحْهُ", transliteration: "fasabbiḥhu", meaning: { en: "glorify Him", ur: "اس کی تسبیح کرو", ar: "فسبحه" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "س-ب-ح", mood: "imperative" } },
      { arabic: "وَإِدْبَارَ", transliteration: "wa-idbāra", meaning: { en: "and at the setting", ur: "اور پیٹھ پھیرتے وقت", ar: "وإدبار" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "د-ب-ر" } },
      { arabic: "النُّجُومِ", transliteration: "al-nujūmi", meaning: { en: "of the stars", ur: "ستاروں کے", ar: "النجوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ن-ج-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  }
};

export default TREEBANK_DATA;
