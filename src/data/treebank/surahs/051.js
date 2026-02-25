/**
 * Surah Adh-Dhariyat (The Winnowing Winds) - Surah 51
 * Quranic Arabic Treebank Data
 */

export const TREEBANK_DATA = {
  surahId: 51,
  surahName: "Adh-Dhariyat",
  surahNameArabic: "الذاريات",
  totalAyahs: 60,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "وَالذَّارِيَاتِ ذَرْوًا",
    words: [
      { arabic: "وَالذَّارِيَاتِ", transliteration: "wadh-dhāriyāti", meaning: { en: "By those scattering", ur: "قسم ہے بکھیرنے والی ہواؤں کی", ar: "والرياح المفرقات" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural", root: "ذ-ر-و", type: "oath" } },
      { arabic: "ذَرْوًا", transliteration: "dharwan", meaning: { en: "scattering", ur: "بکھیرنا", ar: "تفريقا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "فَالْحَامِلَاتِ وِقْرًا",
    words: [
      { arabic: "فَالْحَامِلَاتِ", transliteration: "fal-ḥāmilāti", meaning: { en: "And those carrying", ur: "پھر بوجھ اٹھانے والے بادلوں کی", ar: "السحب الحاملات" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "genitive", number: "plural", root: "ح-م-ل", gender: "feminine" } },
      { arabic: "وِقْرًا", transliteration: "wiqran", meaning: { en: "a load", ur: "بوجھ", ar: "ثقلا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "object" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "فَالْجَارِيَاتِ يُسْرًا",
    words: [
      { arabic: "فَالْجَارِيَاتِ", transliteration: "fal-jāriyāti", meaning: { en: "And those sailing", ur: "پھر آسانی سے چلنے والی کشتیوں کی", ar: "السفن الجاريات" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "genitive", number: "plural", root: "ج-ر-ي", gender: "feminine" } },
      { arabic: "يُسْرًا", transliteration: "yusran", meaning: { en: "with ease", ur: "آسانی سے", ar: "سهولة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "manner" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "فَالْمُقَسِّمَاتِ أَمْرًا",
    words: [
      { arabic: "فَالْمُقَسِّمَاتِ", transliteration: "fal-muqassimāti", meaning: { en: "And those distributing", ur: "پھر کام تقسیم کرنے والے فرشتوں کی", ar: "الملائكة المقسمات" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "genitive", number: "plural", root: "ق-س-م", form: "II", gender: "feminine" } },
      { arabic: "أَمْرًا", transliteration: "amran", meaning: { en: "a command", ur: "حکم", ar: "أمرا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "object" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "إِنَّمَا تُوعَدُونَ لَصَادِقٌ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Indeed, what", ur: "بیشک جو", ar: "إن ما" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis-restriction" } },
      { arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", meaning: { en: "you are promised", ur: "تم سے وعدہ کیا جاتا ہے", ar: "توعدون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ع-د", person: "2nd", number: "plural" } },
      { arabic: "لَصَادِقٌ", transliteration: "laṣādiqun", meaning: { en: "is certainly true", ur: "یقیناً سچا ہے", ar: "لحق" }, pos: "PART+ADJ", posLabel: "PART+ADJ", grammar: { case: "nominative", root: "ص-د-ق", lam: "emphasis" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَإِنَّ الدِّينَ لَوَاقِعٌ",
    words: [
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک", ar: "وإن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "الدِّينَ", transliteration: "al-dīna", meaning: { en: "the recompense", ur: "جزا", ar: "الجزاء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "د-ي-ن" } },
      { arabic: "لَوَاقِعٌ", transliteration: "lawāqiʿun", meaning: { en: "will surely occur", ur: "یقیناً واقع ہونے والی ہے", ar: "لكائن" }, pos: "PART+AP", posLabel: "PART+AP", grammar: { case: "nominative", root: "و-ق-ع", lam: "emphasis" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَالسَّمَاءِ ذَاتِ الْحُبُكِ",
    words: [
      { arabic: "وَالسَّمَاءِ", transliteration: "was-samāʾi", meaning: { en: "By the heaven", ur: "قسم ہے آسمان کی", ar: "والسماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", type: "oath" } },
      { arabic: "ذَاتِ", transliteration: "dhāti", meaning: { en: "full of", ur: "والے", ar: "ذات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", gender: "feminine" } },
      { arabic: "الْحُبُكِ", transliteration: "al-ḥubuki", meaning: { en: "pathways", ur: "راستے", ar: "الطرق" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ح-ب-ك" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "إِنَّكُمْ لَفِي قَوْلٍ مُّخْتَلِفٍ",
    words: [
      { arabic: "إِنَّكُمْ", transliteration: "innakum", meaning: { en: "Indeed, you", ur: "بیشک تم", ar: "إنكم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis", person: "2nd", number: "plural" } },
      { arabic: "لَفِي", transliteration: "lafī", meaning: { en: "are surely in", ur: "یقیناً میں ہو", ar: "لفي" }, pos: "PART+P", posLabel: "PART+P", grammar: { lam: "emphasis" } },
      { arabic: "قَوْلٍ", transliteration: "qawlin", meaning: { en: "speech", ur: "بات", ar: "قول" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-ل" } },
      { arabic: "مُّخْتَلِفٍ", transliteration: "mukhtalifin", meaning: { en: "differing", ur: "مختلف", ar: "متضارب" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "خ-ل-ف", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "يُؤْفَكُ عَنْهُ مَنْ أُفِكَ",
    words: [
      { arabic: "يُؤْفَكُ", transliteration: "yuʾfaku", meaning: { en: "Is deluded", ur: "پھیرا جاتا ہے", ar: "يصرف" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "أ-ف-ك" } },
      { arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "away from it", ur: "اس سے", ar: "عنه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "separation" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "whoever", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أُفِكَ", transliteration: "ufika", meaning: { en: "was deluded", ur: "پھیرا گیا", ar: "صرف" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "أ-ف-ك" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "قُتِلَ الْخَرَّاصُونَ",
    words: [
      { arabic: "قُتِلَ", transliteration: "qutila", meaning: { en: "Cursed be", ur: "مارے گئے", ar: "لعن" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ق-ت-ل", type: "invocation" } },
      { arabic: "الْخَرَّاصُونَ", transliteration: "al-kharrāṣūna", meaning: { en: "the liars", ur: "جھوٹ باندھنے والے", ar: "الكذابون" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "خ-ر-ص" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "الَّذِينَ هُمْ فِي غَمْرَةٍ سَاهُونَ",
    words: [
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { type: "relative", number: "plural" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "غَمْرَةٍ", transliteration: "ghamratin", meaning: { en: "an overwhelming", ur: "غفلت", ar: "جهالة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-م-ر" } },
      { arabic: "سَاهُونَ", transliteration: "sāhūna", meaning: { en: "heedless", ur: "غافل ہیں", ar: "غافلون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "س-ه-و" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 2, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "يَسْأَلُونَ أَيَّانَ يَوْمُ الدِّينِ",
    words: [
      { arabic: "يَسْأَلُونَ", transliteration: "yasʾalūna", meaning: { en: "They ask", ur: "وہ پوچھتے ہیں", ar: "يسألون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-أ-ل", person: "3rd", number: "plural" } },
      { arabic: "أَيَّانَ", transliteration: "ayyāna", meaning: { en: "when", ur: "کب", ar: "متى" }, pos: "PART", posLabel: "PART", grammar: { type: "interrogative-time" } },
      { arabic: "يَوْمُ", transliteration: "yawmu", meaning: { en: "is the Day", ur: "دن ہے", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ي-و-م" } },
      { arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "of Recompense", ur: "جزا کا", ar: "الجزاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "د-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "يَوْمَ هُمْ عَلَى النَّارِ يُفْتَنُونَ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ي-و-م", type: "adverbial" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "the Fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ر" } },
      { arabic: "يُفْتَنُونَ", transliteration: "yuftanūna", meaning: { en: "will be tormented", ur: "جلائے جائیں گے", ar: "يعذبون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ف-ت-ن", person: "3rd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 2, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "ذُوقُوا فِتْنَتَكُمْ هَـٰذَا الَّذِي كُنتُم بِهِ تَسْتَعْجِلُونَ",
    words: [
      { arabic: "ذُوقُوا", transliteration: "dhūqū", meaning: { en: "Taste", ur: "چکھو", ar: "ذوقوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ذ-و-ق", mood: "imperative" } },
      { arabic: "فِتْنَتَكُمْ", transliteration: "fitnatakum", meaning: { en: "your trial", ur: "اپنے عذاب کو", ar: "عذابكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ف-ت-ن" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "that which", ur: "وہ جس کی", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم تھے", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "for it", ur: "اس کی", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "cause" } },
      { arabic: "تَسْتَعْجِلُونَ", transliteration: "tastaʿjilūna", meaning: { en: "you hasten", ur: "جلدی مچاتے تھے", ar: "تستعجلون" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ع-ج-ل", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 7, label: 'موصول + صلة' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَعُيُونٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "الْمُتَّقِينَ", transliteration: "al-muttaqīna", meaning: { en: "the righteous", ur: "متقی لوگ", ar: "المتقون" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "و-ق-ي", form: "VIII" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "gardens", ur: "باغوں", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ج-ن-ن" } },
      { arabic: "وَعُيُونٍ", transliteration: "waʿuyūnin", meaning: { en: "and springs", ur: "اور چشموں", ar: "وعيون" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural", root: "ع-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "آخِذِينَ مَا آتَاهُمْ رَبُّهُمْ إِنَّهُمْ كَانُوا قَبْلَ ذَٰلِكَ مُحْسِنِينَ",
    words: [
      { arabic: "آخِذِينَ", transliteration: "ākhidhīna", meaning: { en: "Receiving", ur: "لیتے ہوئے", ar: "آخذين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "أ-خ-ذ", type: "ḥāl" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "آتَاهُمْ", transliteration: "ātāhum", meaning: { en: "has given them", ur: "انہیں دیا", ar: "أعطاهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "رَبُّهُمْ", transliteration: "rabbuhum", meaning: { en: "their Lord", ur: "ان کے رب نے", ar: "ربهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک وہ", ar: "إنهم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were", ur: "تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "قَبْلَ", transliteration: "qabla", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "adverbial" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس سے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "مُحْسِنِينَ", transliteration: "muḥsinīna", meaning: { en: "doers of good", ur: "نیکی کرنے والے", ar: "محسنين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ح-س-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 9, label: 'كان + خبر' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "كَانُوا قَلِيلًا مِّنَ اللَّيْلِ مَا يَهْجَعُونَ",
    words: [
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "They used to", ur: "وہ تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "قَلِيلًا", transliteration: "qalīlan", meaning: { en: "little", ur: "تھوڑا", ar: "قليلا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ق-ل-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "اللَّيْلِ", transliteration: "al-layli", meaning: { en: "the night", ur: "رات", ar: "الليل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-ي-ل" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَهْجَعُونَ", transliteration: "yahjaʿūna", meaning: { en: "they sleep", ur: "سوتے تھے", ar: "ينامون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ه-ج-ع", person: "3rd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصول + صلة' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ",
    words: [
      { arabic: "وَبِالْأَسْحَارِ", transliteration: "wabil-asḥāri", meaning: { en: "And in the pre-dawn hours", ur: "اور سحر کے وقت", ar: "وبالأسحار" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive", number: "plural", root: "س-ح-ر" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "يَسْتَغْفِرُونَ", transliteration: "yastaghfirūna", meaning: { en: "would ask forgiveness", ur: "استغفار کرتے تھے", ar: "يستغفرون" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "غ-ف-ر", person: "3rd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَفِي أَمْوَالِهِمْ حَقٌّ لِّلسَّائِلِ وَالْمَحْرُومِ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "location" } },
      { arabic: "أَمْوَالِهِمْ", transliteration: "amwālihim", meaning: { en: "their wealth", ur: "ان کے مالوں", ar: "أموالهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural", root: "م-و-ل" } },
      { arabic: "حَقٌّ", transliteration: "ḥaqqun", meaning: { en: "a right", ur: "حق ہے", ar: "حق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-ق-ق" } },
      { arabic: "لِّلسَّائِلِ", transliteration: "lis-sāʾili", meaning: { en: "for the beggar", ur: "مانگنے والے کا", ar: "للسائل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-أ-ل" } },
      { arabic: "وَالْمَحْرُومِ", transliteration: "wal-maḥrūmi", meaning: { en: "and the deprived", ur: "اور محروم کا", ar: "والمحروم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ح-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں ہیں", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "location" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "آيَاتٌ", transliteration: "āyātun", meaning: { en: "are signs", ur: "نشانیاں", ar: "آيات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "أ-ي-ي" } },
      { arabic: "لِّلْمُوقِنِينَ", transliteration: "lil-mūqinīna", meaning: { en: "for those who are certain", ur: "یقین رکھنے والوں کے لیے", ar: "للموقنين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural", root: "ي-ق-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "وَفِي أَنفُسِكُمْ أَفَلَا تُبْصِرُونَ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "location" } },
      { arabic: "أَنفُسِكُمْ", transliteration: "anfusikum", meaning: { en: "yourselves", ur: "تمہاری جانوں", ar: "أنفسكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural", root: "ن-ف-س" } },
      { arabic: "أَفَلَا", transliteration: "afalā", meaning: { en: "Then do you not", ur: "تو کیا نہیں", ar: "أفلا" }, pos: "PART+CONJ+NEG", posLabel: "PART+CONJ+NEG", grammar: { type: "interrogative-rhetorical" } },
      { arabic: "تُبْصِرُونَ", transliteration: "tubṣirūna", meaning: { en: "see", ur: "دیکھتے", ar: "تبصرون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ب-ص-ر", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'استفهام + فعل' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں ہے", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "location" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "رِزْقُكُمْ", transliteration: "rizqukum", meaning: { en: "is your provision", ur: "تمہارا رزق", ar: "رزقكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ر-ز-ق" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", meaning: { en: "you are promised", ur: "تم سے وعدہ کیا جاتا ہے", ar: "توعدون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ع-د", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصول + صلة' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "فَوَرَبِّ السَّمَاءِ وَالْأَرْضِ إِنَّهُ لَحَقٌّ مِّثْلَ مَا أَنَّكُمْ تَنطِقُونَ",
    words: [
      { arabic: "فَوَرَبِّ", transliteration: "fawarabbi", meaning: { en: "Then by the Lord of", ur: "پس رب کی قسم", ar: "فورب" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "oath", root: "ر-ب-ب" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کے", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "indeed, it is", ur: "بیشک یہ", ar: "إنه" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "لَحَقٌّ", transliteration: "laḥaqqun", meaning: { en: "surely true", ur: "یقیناً سچ ہے", ar: "لحق" }, pos: "PART+N", posLabel: "PART+N", grammar: { case: "nominative", root: "ح-ق-ق", lam: "emphasis" } },
      { arabic: "مِّثْلَ", transliteration: "mithla", meaning: { en: "just as", ur: "اسی طرح", ar: "مثل" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-ث-ل" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَنَّكُمْ", transliteration: "annakum", meaning: { en: "that you", ur: "کہ تم", ar: "أنكم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "تَنطِقُونَ", transliteration: "tanṭiqūna", meaning: { en: "speak", ur: "بولتے ہو", ar: "تنطقون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ط-ق", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 4, to: 5, label: 'توکید' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "هَلْ أَتَاكَ حَدِيثُ ضَيْفِ إِبْرَاهِيمَ الْمُكْرَمِينَ",
    words: [
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Has", ur: "کیا", ar: "هل" }, pos: "PART", posLabel: "PART", grammar: { type: "interrogative" } },
      { arabic: "أَتَاكَ", transliteration: "atāka", meaning: { en: "reached you", ur: "تمہیں پہنچی", ar: "أتاك" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "أ-ت-ي" } },
      { arabic: "حَدِيثُ", transliteration: "ḥadīthu", meaning: { en: "the story of", ur: "خبر", ar: "حديث" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-د-ث" } },
      { arabic: "ضَيْفِ", transliteration: "ḍayfi", meaning: { en: "the guests of", ur: "مہمانوں کی", ar: "ضيف" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ض-ي-ف" } },
      { arabic: "إِبْرَاهِيمَ", transliteration: "ibrāhīma", meaning: { en: "Abraham", ur: "ابراہیم", ar: "إبراهيم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "الْمُكْرَمِينَ", transliteration: "al-mukramīna", meaning: { en: "the honored", ur: "عزت والوں کی", ar: "المكرمين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "ك-ر-م", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "إِذْ دَخَلُوا عَلَيْهِ فَقَالُوا سَلَامًا قَالَ سَلَامٌ قَوْمٌ مُّنكَرُونَ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب", ar: "إذ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "دَخَلُوا", transliteration: "dakhalū", meaning: { en: "they entered", ur: "وہ داخل ہوئے", ar: "دخلوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-خ-ل", person: "3rd", number: "plural" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "upon him", ur: "ان کے پاس", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "فَقَالُوا", transliteration: "faqālū", meaning: { en: "and said", ur: "تو کہا", ar: "فقالوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "سَلَامًا", transliteration: "salāman", meaning: { en: "Peace", ur: "سلام", ar: "سلاما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ل-م" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "اس نے کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "سَلَامٌ", transliteration: "salāmun", meaning: { en: "Peace", ur: "سلام", ar: "سلام" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ل-م" } },
      { arabic: "قَوْمٌ", transliteration: "qawmun", meaning: { en: "people", ur: "لوگ", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-م" } },
      { arabic: "مُّنكَرُونَ", transliteration: "munkarūna", meaning: { en: "unknown", ur: "اجنبی", ar: "غرباء" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ن-ك-ر", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'ظرف + فعل' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "فَرَاغَ إِلَىٰ أَهْلِهِ فَجَاءَ بِعِجْلٍ سَمِينٍ",
    words: [
      { arabic: "فَرَاغَ", transliteration: "farāgha", meaning: { en: "Then he went", ur: "پھر چپکے سے گیا", ar: "فذهب" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ر-و-غ" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "أَهْلِهِ", transliteration: "ahlihi", meaning: { en: "his family", ur: "اپنے گھر والوں", ar: "أهله" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "أ-ه-ل" } },
      { arabic: "فَجَاءَ", transliteration: "fajāʾa", meaning: { en: "and came", ur: "پھر لایا", ar: "فجاء" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "بِعِجْلٍ", transliteration: "biʿijlin", meaning: { en: "with a calf", ur: "ایک بچھڑا", ar: "بعجل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ع-ج-ل" } },
      { arabic: "سَمِينٍ", transliteration: "samīnin", meaning: { en: "fat/roasted", ur: "موٹا تازہ", ar: "سمين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "س-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "فَقَرَّبَهُ إِلَيْهِمْ قَالَ أَلَا تَأْكُلُونَ",
    words: [
      { arabic: "فَقَرَّبَهُ", transliteration: "faqarrabahu", meaning: { en: "And he placed it", ur: "پھر اسے قریب کیا", ar: "فقربه" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ق-ر-ب" } },
      { arabic: "إِلَيْهِمْ", transliteration: "ilayhim", meaning: { en: "near them", ur: "ان کے سامنے", ar: "إليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "أَلَا", transliteration: "alā", meaning: { en: "Will you not", ur: "کیا نہیں", ar: "ألا" }, pos: "PART+NEG", posLabel: "PART+NEG", grammar: { type: "interrogative-negative" } },
      { arabic: "تَأْكُلُونَ", transliteration: "taʾkulūna", meaning: { en: "eat", ur: "کھاتے", ar: "تأكلون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ك-ل", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'استفهام + فعل' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "فَأَوْجَسَ مِنْهُمْ خِيفَةً قَالُوا لَا تَخَفْ وَبَشَّرُوهُ بِغُلَامٍ عَلِيمٍ",
    words: [
      { arabic: "فَأَوْجَسَ", transliteration: "faawjasa", meaning: { en: "Then he felt", ur: "تو دل میں ڈر محسوس کیا", ar: "فأحس" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "و-ج-س" } },
      { arabic: "مِنْهُمْ", transliteration: "minhum", meaning: { en: "from them", ur: "ان سے", ar: "منهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "خِيفَةً", transliteration: "khīfatan", meaning: { en: "a fear", ur: "خوف", ar: "خوفا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "خ-و-ف" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَخَفْ", transliteration: "takhaf", meaning: { en: "fear", ur: "ڈرو", ar: "تخف" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-و-ف", mood: "jussive" } },
      { arabic: "وَبَشَّرُوهُ", transliteration: "wabashsharūhu", meaning: { en: "And they gave him good tidings", ur: "اور اسے خوشخبری دی", ar: "وبشروه" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ب-ش-ر" } },
      { arabic: "بِغُلَامٍ", transliteration: "bighulāmin", meaning: { en: "of a boy", ur: "ایک لڑکے کی", ar: "بغلام" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "غ-ل-م" } },
      { arabic: "عَلِيمٍ", transliteration: "ʿalīmin", meaning: { en: "learned", ur: "علم والے", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'نهی + فعل' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "فَأَقْبَلَتِ امْرَأَتُهُ فِي صَرَّةٍ فَصَكَّتْ وَجْهَهَا وَقَالَتْ عَجُوزٌ عَقِيمٌ",
    words: [
      { arabic: "فَأَقْبَلَتِ", transliteration: "faaqbalati", meaning: { en: "Then came forward", ur: "تو آئی", ar: "فأقبلت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ق-ب-ل", gender: "feminine" } },
      { arabic: "امْرَأَتُهُ", transliteration: "imraʾatuhu", meaning: { en: "his wife", ur: "اس کی بیوی", ar: "امرأته" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "م-ر-أ" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "manner" } },
      { arabic: "صَرَّةٍ", transliteration: "ṣarratin", meaning: { en: "a cry", ur: "چیخ", ar: "صيحة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-ر-ر" } },
      { arabic: "فَصَكَّتْ", transliteration: "faṣakkat", meaning: { en: "and struck", ur: "پھر مارا", ar: "فضربت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-ك-ك", gender: "feminine" } },
      { arabic: "وَجْهَهَا", transliteration: "wajhahā", meaning: { en: "her face", ur: "اپنا چہرہ", ar: "وجهها" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "و-ج-ه" } },
      { arabic: "وَقَالَتْ", transliteration: "waqālat", meaning: { en: "and said", ur: "اور بولی", ar: "وقالت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل", gender: "feminine" } },
      { arabic: "عَجُوزٌ", transliteration: "ʿajūzun", meaning: { en: "An old barren woman", ur: "بوڑھی عورت", ar: "عجوز" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ج-ز" } },
      { arabic: "عَقِيمٌ", transliteration: "ʿaqīmun", meaning: { en: "barren", ur: "بانجھ", ar: "عقيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ق-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "قَالُوا كَذَٰلِكِ قَالَ رَبُّكِ إِنَّهُ هُوَ الْحَكِيمُ الْعَلِيمُ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "كَذَٰلِكِ", transliteration: "kadhāliki", meaning: { en: "Thus", ur: "ایسا ہی ہے", ar: "كذلك" }, pos: "P+DEM", posLabel: "P+DEM", grammar: { type: "demonstrative" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "has said", ur: "فرمایا ہے", ar: "قال" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "رَبُّكِ", transliteration: "rabbuki", meaning: { en: "your Lord", ur: "تیرے رب نے", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "بیشک وہ", ar: "إنه" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "separation" } },
      { arabic: "الْحَكِيمُ", transliteration: "al-ḥakīmu", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-ك-م" } },
      { arabic: "الْعَلِيمُ", transliteration: "al-ʿalīmu", meaning: { en: "the Knowing", ur: "علم والا", ar: "العليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 7, label: 'توکید' },
        { from: 7, to: 8, label: 'عطف' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "قَالَ فَمَا خَطْبُكُمْ أَيُّهَا الْمُرْسَلُونَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "ابراہیم نے کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "Then what is", ur: "تو کیا ہے", ar: "فما" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "interrogative" } },
      { arabic: "خَطْبُكُمْ", transliteration: "khaṭbukum", meaning: { en: "your mission", ur: "تمہارا کام", ar: "شأنكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "خ-ط-ب" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "O", ur: "اے", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "الْمُرْسَلُونَ", transliteration: "al-mursalūna", meaning: { en: "messengers", ur: "بھیجے ہوئے", ar: "المرسلون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ر-س-ل", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'استفهام + مبتدأ' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "قَالُوا إِنَّا أُرْسِلْنَا إِلَىٰ قَوْمٍ مُّجْرِمِينَ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک ہم", ar: "إنا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "أُرْسِلْنَا", transliteration: "ursilnā", meaning: { en: "have been sent", ur: "بھیجے گئے ہیں", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "ر-س-ل" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "قَوْمٍ", transliteration: "qawmin", meaning: { en: "a people", ur: "ایک قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-م" } },
      { arabic: "مُّجْرِمِينَ", transliteration: "mujrimīna", meaning: { en: "criminal", ur: "مجرم", ar: "مذنبين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "ج-ر-م", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "لِنُرْسِلَ عَلَيْهِمْ حِجَارَةً مِّن طِينٍ",
    words: [
      { arabic: "لِنُرْسِلَ", transliteration: "linursila", meaning: { en: "That we may send", ur: "تاکہ ہم بھیجیں", ar: "لنرسل" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", root: "ر-س-ل", mood: "subjunctive" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "حِجَارَةً", transliteration: "ḥijāratan", meaning: { en: "stones", ur: "پتھر", ar: "حجارة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ح-ج-ر" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "material" } },
      { arabic: "طِينٍ", transliteration: "ṭīnin", meaning: { en: "clay", ur: "مٹی کے", ar: "طين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ط-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "مُّسَوَّمَةً عِندَ رَبِّكَ لِلْمُسْرِفِينَ",
    words: [
      { arabic: "مُّسَوَّمَةً", transliteration: "musawwamatan", meaning: { en: "Marked", ur: "نشان لگی ہوئی", ar: "معلمة" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "س-و-م", form: "II", type: "ḥāl" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "with", ur: "کے پاس", ar: "عند" }, pos: "N", posLabel: "N", grammar: { type: "adverbial", case: "accusative" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "تیرے رب", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "لِلْمُسْرِفِينَ", transliteration: "lil-musrifīna", meaning: { en: "for the transgressors", ur: "حد سے گزرنے والوں کے لیے", ar: "للمسرفين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural", root: "س-ر-ف", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "فَأَخْرَجْنَا مَن كَانَ فِيهَا مِنَ الْمُؤْمِنِينَ",
    words: [
      { arabic: "فَأَخْرَجْنَا", transliteration: "faakhrajnā", meaning: { en: "So We brought out", ur: "پھر ہم نے نکالا", ar: "فأخرجنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "خ-ر-ج" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whoever", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "the believers", ur: "مومنوں", ar: "المؤمنين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "أ-م-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "فَمَا وَجَدْنَا فِيهَا غَيْرَ بَيْتٍ مِّنَ الْمُسْلِمِينَ",
    words: [
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "But not", ur: "تو نہیں", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "وَجَدْنَا", transliteration: "wajadnā", meaning: { en: "We found", ur: "ہم نے پایا", ar: "وجدنا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ج-د" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", meaning: { en: "other than", ur: "سوائے", ar: "غير" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "غ-ي-ر" } },
      { arabic: "بَيْتٍ", transliteration: "baytin", meaning: { en: "a house", ur: "ایک گھر", ar: "بيت" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ب-ي-ت" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْمُسْلِمِينَ", transliteration: "al-muslimīna", meaning: { en: "the Muslims", ur: "مسلمانوں", ar: "المسلمين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "س-ل-م", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "وَتَرَكْنَا فِيهَا آيَةً لِّلَّذِينَ يَخَافُونَ الْعَذَابَ الْأَلِيمَ",
    words: [
      { arabic: "وَتَرَكْنَا", transliteration: "wataraknā", meaning: { en: "And We left", ur: "اور ہم نے چھوڑی", ar: "وتركنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ت-ر-ك" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "آيَةً", transliteration: "āyatan", meaning: { en: "a sign", ur: "ایک نشانی", ar: "آية" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ي-ي" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان لوگوں کے لیے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَخَافُونَ", transliteration: "yakhāfūna", meaning: { en: "fear", ur: "ڈرتے ہیں", ar: "يخافون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-و-ف", person: "3rd", number: "plural" } },
      { arabic: "الْعَذَابَ", transliteration: "al-ʿadhāba", meaning: { en: "the punishment", ur: "عذاب سے", ar: "العذاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "الْأَلِيمَ", transliteration: "al-alīma", meaning: { en: "painful", ur: "دردناک", ar: "الأليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "أ-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "وَفِي مُوسَىٰ إِذْ أَرْسَلْنَاهُ إِلَىٰ فِرْعَوْنَ بِسُلْطَانٍ مُّبِينٍ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں بھی", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "location" } },
      { arabic: "مُوسَىٰ", transliteration: "mūsā", meaning: { en: "Moses", ur: "موسیٰ", ar: "موسى" }, pos: "N", posLabel: "N", grammar: { type: "proper-noun" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "أَرْسَلْنَاهُ", transliteration: "arsalnāhu", meaning: { en: "We sent him", ur: "ہم نے اسے بھیجا", ar: "أرسلناه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: { en: "Pharaoh", ur: "فرعون", ar: "فرعون" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "بِسُلْطَانٍ", transliteration: "bisulṭānin", meaning: { en: "with authority", ur: "دلیل کے ساتھ", ar: "بسلطان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-ل-ط" } },
      { arabic: "مُّبِينٍ", transliteration: "mubīnin", meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ي-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "فَتَوَلَّىٰ بِرُكْنِهِ وَقَالَ سَاحِرٌ أَوْ مَجْنُونٌ",
    words: [
      { arabic: "فَتَوَلَّىٰ", transliteration: "fatawallā", meaning: { en: "But he turned away", ur: "تو اس نے منہ پھیرا", ar: "فأعرض" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "V", root: "و-ل-ي" } },
      { arabic: "بِرُكْنِهِ", transliteration: "biruknihi", meaning: { en: "with his supporters", ur: "اپنے لشکر سمیت", ar: "بجنوده" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ر-ك-ن" } },
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "and said", ur: "اور کہا", ar: "وقال" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "سَاحِرٌ", transliteration: "sāḥirun", meaning: { en: "A magician", ur: "جادوگر", ar: "ساحر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ح-ر" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "مَجْنُونٌ", transliteration: "majnūnun", meaning: { en: "a madman", ur: "دیوانہ", ar: "مجنون" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ج-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 6, label: 'عطف' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "فَأَخَذْنَاهُ وَجُنُودَهُ فَنَبَذْنَاهُمْ فِي الْيَمِّ وَهُوَ مُلِيمٌ",
    words: [
      { arabic: "فَأَخَذْنَاهُ", transliteration: "faakhadhnāhu", meaning: { en: "So We seized him", ur: "تو ہم نے اسے پکڑا", ar: "فأخذناه" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "أ-خ-ذ" } },
      { arabic: "وَجُنُودَهُ", transliteration: "wajunūdahu", meaning: { en: "and his soldiers", ur: "اور اس کے لشکروں کو", ar: "وجنوده" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "accusative", root: "ج-ن-د" } },
      { arabic: "فَنَبَذْنَاهُمْ", transliteration: "fanabadhnāhum", meaning: { en: "and We threw them", ur: "پھر ہم نے انہیں پھینکا", ar: "فألقيناهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ن-ب-ذ" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "الْيَمِّ", transliteration: "al-yammi", meaning: { en: "the sea", ur: "سمندر", ar: "البحر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-م" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "while he was", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "ḥāl" } },
      { arabic: "مُلِيمٌ", transliteration: "mulīmun", meaning: { en: "blameworthy", ur: "ملامت زدہ", ar: "ملوم" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ل-و-م", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "وَفِي عَادٍ إِذْ أَرْسَلْنَا عَلَيْهِمُ الرِّيحَ الْعَقِيمَ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "location" } },
      { arabic: "عَادٍ", transliteration: "ʿādin", meaning: { en: "Aad", ur: "عاد", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم نے بھیجی", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "الرِّيحَ", transliteration: "al-rīḥa", meaning: { en: "the wind", ur: "ہوا", ar: "الريح" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-و-ح" } },
      { arabic: "الْعَقِيمَ", transliteration: "al-ʿaqīma", meaning: { en: "the barren", ur: "بانجھ", ar: "العقيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ع-ق-م" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 6, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "مَا تَذَرُ مِن شَيْءٍ أَتَتْ عَلَيْهِ إِلَّا جَعَلَتْهُ كَالرَّمِيمِ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "تَذَرُ", transliteration: "tadharu", meaning: { en: "it left", ur: "چھوڑتی", ar: "تترك" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ذ-ر" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "a thing", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-ي-أ" } },
      { arabic: "أَتَتْ", transliteration: "atat", meaning: { en: "it came", ur: "آئی", ar: "أتت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ت-ي", gender: "feminine" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "upon it", ur: "اس پر", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "جَعَلَتْهُ", transliteration: "jaʿalathu", meaning: { en: "it made it", ur: "اسے بنا دیا", ar: "جعلته" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ع-ل", gender: "feminine" } },
      { arabic: "كَالرَّمِيمِ", transliteration: "kal-ramīmi", meaning: { en: "like ashes", ur: "بوسیدہ کی طرح", ar: "كالهالك" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ر-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "وَفِي ثَمُودَ إِذْ قِيلَ لَهُمْ تَمَتَّعُوا حَتَّىٰ حِينٍ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "location" } },
      { arabic: "ثَمُودَ", transliteration: "thamūda", meaning: { en: "Thamud", ur: "ثمود", ar: "ثمود" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "قِيلَ", transliteration: "qīla", meaning: { en: "it was said", ur: "کہا گیا", ar: "قيل" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ق-و-ل" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "ان سے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "تَمَتَّعُوا", transliteration: "tamattaʿū", meaning: { en: "Enjoy yourselves", ur: "فائدہ اٹھا لو", ar: "تمتعوا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "م-ت-ع", mood: "imperative" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "for", ur: "تک", ar: "حتى" }, pos: "P", posLabel: "P", grammar: { role: "limit" } },
      { arabic: "حِينٍ", transliteration: "ḥīnin", meaning: { en: "a time", ur: "ایک وقت", ar: "حين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "فَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ فَأَخَذَتْهُمُ الصَّاعِقَةُ وَهُمْ يَنظُرُونَ",
    words: [
      { arabic: "فَعَتَوْا", transliteration: "faʿataw", meaning: { en: "But they were insolent", ur: "تو انہوں نے سرکشی کی", ar: "فاستكبروا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ت-و" } },
      { arabic: "عَنْ", transliteration: "ʿan", meaning: { en: "toward", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "opposition" } },
      { arabic: "أَمْرِ", transliteration: "amri", meaning: { en: "the command of", ur: "حکم", ar: "أمر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-م-ر" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "اپنے رب کے", ar: "ربهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "فَأَخَذَتْهُمُ", transliteration: "faakhadhathumu", meaning: { en: "so seized them", ur: "تو انہیں پکڑ لیا", ar: "فأخذتهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "أ-خ-ذ", gender: "feminine" } },
      { arabic: "الصَّاعِقَةُ", transliteration: "al-ṣāʿiqatu", meaning: { en: "the thunderbolt", ur: "بجلی کی کڑک نے", ar: "الصاعقة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ص-ع-ق" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "while they", ur: "اور وہ", ar: "وهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "ḥāl" } },
      { arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "were looking on", ur: "دیکھ رہے تھے", ar: "ينظرون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ظ-ر", person: "3rd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "فَمَا اسْتَطَاعُوا مِن قِيَامٍ وَمَا كَانُوا مُنتَصِرِينَ",
    words: [
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "And not", ur: "تو نہ", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "اسْتَطَاعُوا", transliteration: "istaṭāʿū", meaning: { en: "they were able", ur: "وہ کرسکے", ar: "استطاعوا" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ط-و-ع" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "to", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "قِيَامٍ", transliteration: "qiyāmin", meaning: { en: "stand up", ur: "کھڑا ہونا", ar: "قيام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-م" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہ", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were they", ur: "وہ تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "مُنتَصِرِينَ", transliteration: "muntaṣirīna", meaning: { en: "assisted", ur: "بدلہ لینے والے", ar: "ممتنعين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ن-ص-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'كان + خبر' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "وَقَوْمَ نُوحٍ مِّن قَبْلُ إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ",
    words: [
      { arabic: "وَقَوْمَ", transliteration: "waqawma", meaning: { en: "And the people of", ur: "اور قوم", ar: "وقوم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ق-و-م" } },
      { arabic: "نُوحٍ", transliteration: "nūḥin", meaning: { en: "Noah", ur: "نوح", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { type: "adverbial" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک وہ", ar: "إنهم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were", ur: "تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "قَوْمًا", transliteration: "qawman", meaning: { en: "a people", ur: "قوم", ar: "قوما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-م" } },
      { arabic: "فَاسِقِينَ", transliteration: "fāsiqīna", meaning: { en: "defiantly disobedient", ur: "نافرمان", ar: "فاسقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ف-س-ق" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'كان + خبر' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ",
    words: [
      { arabic: "وَالسَّمَاءَ", transliteration: "was-samāʾa", meaning: { en: "And the heaven", ur: "اور آسمان کو", ar: "والسماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "س-م-و" } },
      { arabic: "بَنَيْنَاهَا", transliteration: "banaynāhā", meaning: { en: "We constructed it", ur: "ہم نے بنایا", ar: "بنيناها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ب-ن-ي" } },
      { arabic: "بِأَيْدٍ", transliteration: "bi-aydin", meaning: { en: "with strength", ur: "قوت سے", ar: "بقوة" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ي-د" } },
      { arabic: "وَإِنَّا", transliteration: "wa-innā", meaning: { en: "And indeed, We", ur: "اور بیشک ہم", ar: "وإنا" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "لَمُوسِعُونَ", transliteration: "lamūsiʿūna", meaning: { en: "are surely expanding it", ur: "یقیناً وسعت دینے والے ہیں", ar: "لموسعون" }, pos: "PART+AP", posLabel: "PART+AP", grammar: { case: "nominative", number: "plural", root: "و-س-ع", form: "IV", lam: "emphasis" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مفعول به + فعل' },
        { from: 4, to: 5, label: 'توکید' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "وَالْأَرْضَ فَرَشْنَاهَا فَنِعْمَ الْمَاهِدُونَ",
    words: [
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "And the earth", ur: "اور زمین کو", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "أ-ر-ض" } },
      { arabic: "فَرَشْنَاهَا", transliteration: "farashnāhā", meaning: { en: "We have spread it", ur: "ہم نے بچھایا", ar: "فرشناها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ف-ر-ش" } },
      { arabic: "فَنِعْمَ", transliteration: "faniʿma", meaning: { en: "How excellent is", ur: "تو کیا خوب", ar: "فنعم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "praise", root: "ن-ع-م" } },
      { arabic: "الْمَاهِدُونَ", transliteration: "al-māhidūna", meaning: { en: "the one who spreads", ur: "بچھانے والے ہیں", ar: "الماهدون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "م-ه-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مفعول به + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ",
    words: [
      { arabic: "وَمِن", transliteration: "wamin", meaning: { en: "And of", ur: "اور ہر", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "partitive" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ك-ل-ل" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-ي-أ" } },
      { arabic: "خَلَقْنَا", transliteration: "khalaqnā", meaning: { en: "We created", ur: "ہم نے پیدا کیا", ar: "خلقنا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "زَوْجَيْنِ", transliteration: "zawjayni", meaning: { en: "two mates", ur: "دو جوڑے", ar: "زوجين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "dual", root: "ز-و-ج" } },
      { arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that you may", ur: "تاکہ تم", ar: "لعلكم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "hope" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", meaning: { en: "remember", ur: "یاد رکھو", ar: "تتذكرون" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ذ-ك-ر", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ]
    }
  },

  50: {
    ayahNumber: 50,
    text: "فَفِرُّوا إِلَى اللَّهِ إِنِّي لَكُم مِّنْهُ نَذِيرٌ مُّبِينٌ",
    words: [
      { arabic: "فَفِرُّوا", transliteration: "fafirrū", meaning: { en: "So flee", ur: "تو بھاگو", ar: "ففروا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ف-ر-ر", mood: "imperative" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "إِنِّي", transliteration: "innī", meaning: { en: "Indeed, I am", ur: "بیشک میں ہوں", ar: "إني" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefit" } },
      { arabic: "مِّنْهُ", transliteration: "minhu", meaning: { en: "from Him", ur: "اس کی طرف سے", ar: "منه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīrun", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ذ-ر" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ي-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  51: {
    ayahNumber: 51,
    text: "وَلَا تَجْعَلُوا مَعَ اللَّهِ إِلَٰهًا آخَرَ إِنِّي لَكُم مِّنْهُ نَذِيرٌ مُّبِينٌ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And do not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَجْعَلُوا", transliteration: "tajʿalū", meaning: { en: "make", ur: "بناؤ", ar: "تجعلوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل", mood: "jussive" } },
      { arabic: "مَعَ", transliteration: "maʿa", meaning: { en: "with", ur: "ساتھ", ar: "مع" }, pos: "P", posLabel: "P", grammar: { role: "accompaniment" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "إِلَٰهًا", transliteration: "ilāhan", meaning: { en: "another deity", ur: "کوئی اور معبود", ar: "إلها" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ل-ه" } },
      { arabic: "آخَرَ", transliteration: "ākhara", meaning: { en: "another", ur: "اور", ar: "آخر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "أ-خ-ر" } },
      { arabic: "إِنِّي", transliteration: "innī", meaning: { en: "Indeed, I am", ur: "بیشک میں ہوں", ar: "إني" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefit" } },
      { arabic: "مِّنْهُ", transliteration: "minhu", meaning: { en: "from Him", ur: "اس کی طرف سے", ar: "منه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīrun", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ذ-ر" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ي-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نهی + فعل' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
  },

  52: {
    ayahNumber: 52,
    text: "كَذَٰلِكَ مَا أَتَى الَّذِينَ مِن قَبْلِهِم مِّن رَّسُولٍ إِلَّا قَالُوا سَاحِرٌ أَوْ مَجْنُونٌ",
    words: [
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Similarly", ur: "اسی طرح", ar: "كذلك" }, pos: "P+DEM", posLabel: "P+DEM", grammar: { type: "demonstrative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "أَتَى", transliteration: "atā", meaning: { en: "came", ur: "آیا", ar: "أتى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ت-ي" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who were", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِهِم", transliteration: "qablihim", meaning: { en: "before them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "رَّسُولٍ", transliteration: "rasūlin", meaning: { en: "messenger", ur: "رسول", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-س-ل" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "they said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "سَاحِرٌ", transliteration: "sāḥirun", meaning: { en: "A magician", ur: "جادوگر", ar: "ساحر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ح-ر" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "مَجْنُونٌ", transliteration: "majnūnun", meaning: { en: "a madman", ur: "دیوانہ", ar: "مجنون" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ج-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 13, label: 'عطف' }
      ]
    }
  },

  53: {
    ayahNumber: 53,
    text: "أَتَوَاصَوْا بِهِ بَلْ هُمْ قَوْمٌ طَاغُونَ",
    words: [
      { arabic: "أَتَوَاصَوْا", transliteration: "atawāṣaw", meaning: { en: "Did they enjoin each other", ur: "کیا انہوں نے وصیت کی", ar: "أتواصوا" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "VI", root: "و-ص-ي", type: "interrogative" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "to it", ur: "اس بات کی", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "cause" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بل" }, pos: "PART", posLabel: "PART", grammar: { type: "correction" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they are", ur: "وہ ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "قَوْمٌ", transliteration: "qawmun", meaning: { en: "a people", ur: "قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-م" } },
      { arabic: "طَاغُونَ", transliteration: "ṭāghūna", meaning: { en: "transgressing", ur: "سرکش", ar: "طغاة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ط-غ-ي" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مبتدأ + خبر' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  54: {
    ayahNumber: 54,
    text: "فَتَوَلَّ عَنْهُمْ فَمَا أَنتَ بِمَلُومٍ",
    words: [
      { arabic: "فَتَوَلَّ", transliteration: "fatawalla", meaning: { en: "So turn away", ur: "تو منہ پھیر لو", ar: "فأعرض" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "V", root: "و-ل-ي", mood: "imperative" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "from them", ur: "ان سے", ar: "عنهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "separation" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "for not", ur: "تو نہیں", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "are you", ur: "تم ہو", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd" } },
      { arabic: "بِمَلُومٍ", transliteration: "bimalūmin", meaning: { en: "to be blamed", ur: "ملامت کیے جانے والے", ar: "بملوم" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", root: "ل-و-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + مبتدأ' }
      ]
    }
  },

  55: {
    ayahNumber: 55,
    text: "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
    words: [
      { arabic: "وَذَكِّرْ", transliteration: "wadhakkir", meaning: { en: "And remind", ur: "اور نصیحت کرو", ar: "وذكر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ذ-ك-ر", mood: "imperative" } },
      { arabic: "فَإِنَّ", transliteration: "fainna", meaning: { en: "for indeed", ur: "کیونکہ بیشک", ar: "فإن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "الذِّكْرَىٰ", transliteration: "al-dhikrā", meaning: { en: "the reminder", ur: "نصیحت", ar: "الذكرى" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ذ-ك-ر" } },
      { arabic: "تَنفَعُ", transliteration: "tanfaʿu", meaning: { en: "benefits", ur: "فائدہ دیتی ہے", ar: "تنفع" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ف-ع" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "the believers", ur: "مومنوں کو", ar: "المؤمنين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "أ-م-ن", form: "IV" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'توکید' },
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ]
    }
  },

  56: {
    ayahNumber: 56,
    text: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "خَلَقْتُ", transliteration: "khalaqtu", meaning: { en: "I created", ur: "میں نے پیدا کیا", ar: "خلقت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق", person: "1st" } },
      { arabic: "الْجِنَّ", transliteration: "al-jinna", meaning: { en: "the jinn", ur: "جنوں کو", ar: "الجن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ن-ن" } },
      { arabic: "وَالْإِنسَ", transliteration: "wal-insa", meaning: { en: "and mankind", ur: "اور انسانوں کو", ar: "والإنس" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "أ-ن-س" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "لِيَعْبُدُونِ", transliteration: "liyaʿbudūni", meaning: { en: "to worship Me", ur: "تاکہ میری عبادت کریں", ar: "ليعبدون" }, pos: "P+V", posLabel: "P+V", grammar: { form: "I", root: "ع-ب-د", mood: "subjunctive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  57: {
    ayahNumber: 57,
    text: "مَا أُرِيدُ مِنْهُم مِّن رِّزْقٍ وَمَا أُرِيدُ أَن يُطْعِمُونِ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "أُرِيدُ", transliteration: "urīdu", meaning: { en: "I want", ur: "میں چاہتا ہوں", ar: "أريد" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-و-د", person: "1st" } },
      { arabic: "مِنْهُم", transliteration: "minhum", meaning: { en: "from them", ur: "ان سے", ar: "منهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "رِّزْقٍ", transliteration: "rizqin", meaning: { en: "provision", ur: "رزق", ar: "رزق" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ز-ق" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہ", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أُرِيدُ", transliteration: "urīdu", meaning: { en: "I want", ur: "میں چاہتا ہوں", ar: "أريد" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-و-د", person: "1st" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive-particle" } },
      { arabic: "يُطْعِمُونِ", transliteration: "yuṭʿimūni", meaning: { en: "they feed Me", ur: "وہ مجھے کھلائیں", ar: "يطعمون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ط-ع-م", person: "3rd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مصدر مؤول' }
      ]
    }
  },

  58: {
    ayahNumber: 58,
    text: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ل-ه" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "separation" } },
      { arabic: "الرَّزَّاقُ", transliteration: "al-razzāqu", meaning: { en: "the Provider", ur: "بہت رزق دینے والا", ar: "الرزاق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ز-ق" } },
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "Owner of", ur: "والا", ar: "ذو" }, pos: "N", posLabel: "N", grammar: { case: "nominative", type: "possessor" } },
      { arabic: "الْقُوَّةِ", transliteration: "al-quwwati", meaning: { en: "Power", ur: "طاقت", ar: "القوة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-ي" } },
      { arabic: "الْمَتِينُ", transliteration: "al-matīnu", meaning: { en: "the Firm", ur: "مضبوط", ar: "المتين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "م-ت-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  59: {
    ayahNumber: 59,
    text: "فَإِنَّ لِلَّذِينَ ظَلَمُوا ذَنُوبًا مِّثْلَ ذَنُوبِ أَصْحَابِهِمْ فَلَا يَسْتَعْجِلُونِ",
    words: [
      { arabic: "فَإِنَّ", transliteration: "fainna", meaning: { en: "And indeed", ur: "تو بیشک", ar: "فإن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان لوگوں کے لیے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "ظَلَمُوا", transliteration: "ẓalamū", meaning: { en: "have wronged", ur: "ظلم کیا", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ظ-ل-م" } },
      { arabic: "ذَنُوبًا", transliteration: "dhanūban", meaning: { en: "a portion", ur: "حصہ", ar: "نصيبا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ذ-ن-ب" } },
      { arabic: "مِّثْلَ", transliteration: "mithla", meaning: { en: "like", ur: "جیسا", ar: "مثل" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-ث-ل" } },
      { arabic: "ذَنُوبِ", transliteration: "dhanūbi", meaning: { en: "the portion of", ur: "حصے", ar: "نصيب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ذ-ن-ب" } },
      { arabic: "أَصْحَابِهِمْ", transliteration: "aṣḥābihim", meaning: { en: "their companions", ur: "ان کے ساتھیوں کے", ar: "أصحابهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ص-ح-ب" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "so let them not", ur: "تو نہ", ar: "فلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "يَسْتَعْجِلُونِ", transliteration: "yastaʿjilūni", meaning: { en: "hasten Me", ur: "مجھ سے جلدی مچائیں", ar: "يستعجلون" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ع-ج-ل", person: "3rd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  60: {
    ayahNumber: 60,
    text: "فَوَيْلٌ لِّلَّذِينَ كَفَرُوا مِن يَوْمِهِمُ الَّذِي يُوعَدُونَ",
    words: [
      { arabic: "فَوَيْلٌ", transliteration: "fawaylun", meaning: { en: "So woe", ur: "تو تباہی ہے", ar: "فويل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "و-ي-ل" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "ان لوگوں کے لیے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "يَوْمِهِمُ", transliteration: "yawmihimu", meaning: { en: "their Day", ur: "ان کے دن", ar: "يومهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ي-و-م" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "which", ur: "جس کا", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يُوعَدُونَ", transliteration: "yūʿadūna", meaning: { en: "they are promised", ur: "ان سے وعدہ کیا جاتا ہے", ar: "يوعدون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ع-د", person: "3rd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'موصول + صلة' }
      ]
    }
  }
};

export default TREEBANK_DATA;
