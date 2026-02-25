/**
 * Surah Al-Waqi'ah (The Inevitable) - Surah 56
 * Quranic Arabic Treebank Data
 */

export const TREEBANK_DATA = {
  surahId: 56,
  surahName: "Al-Waqi'ah",
  surahNameArabic: "الواقعة",
  totalAyahs: 96,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "إِذَا وَقَعَتِ الْوَاقِعَةُ",
    words: [
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "إذا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal-conditional" } },
      { arabic: "وَقَعَتِ", transliteration: "waqaʿati", meaning: { en: "occurs", ur: "واقع ہوگی", ar: "وقعت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ق-ع", gender: "feminine" } },
      { arabic: "الْوَاقِعَةُ", transliteration: "al-wāqiʿatu", meaning: { en: "the Occurrence", ur: "واقعہ (قیامت)", ar: "الواقعة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "و-ق-ع", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ",
    words: [
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "There is not", ur: "نہیں ہے", ar: "ليس" }, pos: "V", posLabel: "V", grammar: { type: "negation-verb" } },
      { arabic: "لِوَقْعَتِهَا", transliteration: "liwaqʿatihā", meaning: { en: "for its occurrence", ur: "اس کے واقع ہونے میں", ar: "لوقوعها" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "و-ق-ع" } },
      { arabic: "كَاذِبَةٌ", transliteration: "kādhibatun", meaning: { en: "denial", ur: "جھٹلانے والا", ar: "تكذيب" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ك-ذ-ب", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + فاعل' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "خَافِضَةٌ رَّافِعَةٌ",
    words: [
      { arabic: "خَافِضَةٌ", transliteration: "khāfiḍatun", meaning: { en: "Bringing down", ur: "نیچے گرانے والی", ar: "مذلة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "خ-ف-ض", gender: "feminine" } },
      { arabic: "رَّافِعَةٌ", transliteration: "rāfiʿatun", meaning: { en: "raising up", ur: "بلند کرنے والی", ar: "رافعة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ر-ف-ع", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "إِذَا رُجَّتِ الْأَرْضُ رَجًّا",
    words: [
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "إذا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "رُجَّتِ", transliteration: "rujjati", meaning: { en: "is shaken", ur: "ہلائی جائے گی", ar: "زلزلت" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ر-ج-ج", gender: "feminine" } },
      { arabic: "الْأَرْضُ", transliteration: "al-arḍu", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "رَجًّا", transliteration: "rajjan", meaning: { en: "with a shaking", ur: "بہت زور سے", ar: "زلزالا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun", root: "ر-ج-ج" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَبُسَّتِ الْجِبَالُ بَسًّا",
    words: [
      { arabic: "وَبُسَّتِ", transliteration: "wabussati", meaning: { en: "And are crumbled", ur: "اور ریزہ ریزہ ہوں گے", ar: "وفتتت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", voice: "passive", root: "ب-س-س", gender: "feminine" } },
      { arabic: "الْجِبَالُ", transliteration: "al-jibālu", meaning: { en: "the mountains", ur: "پہاڑ", ar: "الجبال" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "بَسًّا", transliteration: "bassan", meaning: { en: "with a crumbling", ur: "اچھی طرح", ar: "فتا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun", root: "ب-س-س" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "فَكَانَتْ هَبَاءً مُّنبَثًّا",
    words: [
      { arabic: "فَكَانَتْ", transliteration: "fakānat", meaning: { en: "And become", ur: "پھر ہوجائیں گے", ar: "فصارت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna", root: "ك-و-ن", gender: "feminine" } },
      { arabic: "هَبَاءً", transliteration: "habāʾan", meaning: { en: "dust", ur: "غبار", ar: "غبارا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مُّنبَثًّا", transliteration: "munbaththan", meaning: { en: "dispersing", ur: "پراگندہ", ar: "منتشرا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ب-ث-ث", form: "VII" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 1, to: 3, label: 'حال' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَكُنتُمْ أَزْوَاجًا ثَلَاثَةً",
    words: [
      { arabic: "وَكُنتُمْ", transliteration: "wakuntum", meaning: { en: "And you become", ur: "اور تم ہوجاؤ گے", ar: "وصرتم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna", root: "ك-و-ن", person: "2nd", number: "plural" } },
      { arabic: "أَزْوَاجًا", transliteration: "azwājan", meaning: { en: "kinds", ur: "قسمیں", ar: "أصنافا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ز-و-ج" } },
      { arabic: "ثَلَاثَةً", transliteration: "thalāthatan", meaning: { en: "three", ur: "تین", ar: "ثلاثة" }, pos: "NUM", posLabel: "NUM", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "فَأَصْحَابُ الْمَيْمَنَةِ مَا أَصْحَابُ الْمَيْمَنَةِ",
    words: [
      { arabic: "فَأَصْحَابُ", transliteration: "fa-aṣḥābu", meaning: { en: "Then the companions", ur: "پھر دائیں والے", ar: "فأصحاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", number: "plural", root: "ص-ح-ب" } },
      { arabic: "الْمَيْمَنَةِ", transliteration: "al-maymanati", meaning: { en: "of the right", ur: "دائیں طرف کے", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-ن" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا ہیں", ar: "ما" }, pos: "INTG", posLabel: "INTG", grammar: { type: "exclamatory" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "the companions", ur: "ساتھی", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ص-ح-ب" } },
      { arabic: "الْمَيْمَنَةِ", transliteration: "al-maymanati", meaning: { en: "of the right", ur: "دائیں طرف والے", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "وَأَصْحَابُ الْمَشْأَمَةِ مَا أَصْحَابُ الْمَشْأَمَةِ",
    words: [
      { arabic: "وَأَصْحَابُ", transliteration: "wa-aṣḥābu", meaning: { en: "And the companions", ur: "اور بائیں والے", ar: "وأصحاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", number: "plural", root: "ص-ح-ب" } },
      { arabic: "الْمَشْأَمَةِ", transliteration: "al-mashʾamati", meaning: { en: "of the left", ur: "بائیں طرف کے", ar: "الشمال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-أ-م" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا ہیں", ar: "ما" }, pos: "INTG", posLabel: "INTG", grammar: { type: "exclamatory" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "the companions", ur: "ساتھی", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ص-ح-ب" } },
      { arabic: "الْمَشْأَمَةِ", transliteration: "al-mashʾamati", meaning: { en: "of the left", ur: "بائیں طرف والے", ar: "الشمال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-أ-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَالسَّابِقُونَ السَّابِقُونَ",
    words: [
      { arabic: "وَالسَّابِقُونَ", transliteration: "was-sābiqūna", meaning: { en: "And the forerunners", ur: "اور سبقت لے جانے والے", ar: "والسابقون" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", number: "plural", root: "س-ب-ق" } },
      { arabic: "السَّابِقُونَ", transliteration: "al-sābiqūna", meaning: { en: "the forerunners", ur: "سبقت والے", ar: "السابقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "س-ب-ق", type: "emphasis" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "أُولَٰئِكَ الْمُقَرَّبُونَ",
    words: [
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "Those", ur: "یہی لوگ", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", number: "plural" } },
      { arabic: "الْمُقَرَّبُونَ", transliteration: "al-muqarrabūna", meaning: { en: "the ones brought near", ur: "مقرب لوگ", ar: "المقربون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ق-ر-ب", form: "II", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "فِي جَنَّاتِ النَّعِيمِ",
    words: [
      { arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "جَنَّاتِ", transliteration: "jannāti", meaning: { en: "Gardens", ur: "باغات", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ن-ن", number: "plural" } },
      { arabic: "النَّعِيمِ", transliteration: "al-naʿīmi", meaning: { en: "of Pleasure", ur: "نعمتوں کے", ar: "النعيم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ع-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "ثُلَّةٌ مِّنَ الْأَوَّلِينَ",
    words: [
      { arabic: "ثُلَّةٌ", transliteration: "thullatun", meaning: { en: "A large company", ur: "ایک بڑی جماعت", ar: "جماعة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ث-ل-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīna", meaning: { en: "the former peoples", ur: "پہلے لوگوں", ar: "الأولين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "وَقَلِيلٌ مِّنَ الْآخِرِينَ",
    words: [
      { arabic: "وَقَلِيلٌ", transliteration: "waqalīlun", meaning: { en: "And a few", ur: "اور تھوڑے", ar: "وقليل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ق-ل-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْآخِرِينَ", transliteration: "al-ākhirīna", meaning: { en: "the later peoples", ur: "بعد کے لوگوں", ar: "الآخرين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-خ-ر", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'عطف' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "عَلَىٰ سُرُرٍ مَّوْضُونَةٍ",
    words: [
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "On", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "سُرُرٍ", transliteration: "sururin", meaning: { en: "thrones", ur: "تختوں", ar: "أسرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-ر-ر", number: "plural" } },
      { arabic: "مَّوْضُونَةٍ", transliteration: "mawḍūnatin", meaning: { en: "woven [with ornament]", ur: "جڑے ہوئے", ar: "منسوجة" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "و-ض-ن", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفة' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "مُّتَّكِئِينَ عَلَيْهَا مُتَقَابِلِينَ",
    words: [
      { arabic: "مُّتَّكِئِينَ", transliteration: "muttakiʾīna", meaning: { en: "Reclining", ur: "تکیے لگائے", ar: "متكئين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "و-ك-أ", form: "VIII", number: "plural" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "on them", ur: "ان پر", ar: "عليها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "مُتَقَابِلِينَ", transliteration: "mutaqābilīna", meaning: { en: "facing each other", ur: "آمنے سامنے", ar: "متقابلين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ق-ب-ل", form: "VI", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'حال + حال' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "يَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُّخَلَّدُونَ",
    words: [
      { arabic: "يَطُوفُ", transliteration: "yaṭūfu", meaning: { en: "Will circulate", ur: "پھریں گے", ar: "يطوف" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ط-و-ف", person: "3rd" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "among them", ur: "ان کے درمیان", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "وِلْدَانٌ", transliteration: "wildānun", meaning: { en: "boys", ur: "لڑکے", ar: "غلمان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ل-د", number: "plural" } },
      { arabic: "مُّخَلَّدُونَ", transliteration: "mukhalladūna", meaning: { en: "eternal", ur: "ہمیشہ رہنے والے", ar: "خالدون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "خ-ل-د", form: "II", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'موصوف + صفة' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "بِأَكْوَابٍ وَأَبَارِيقَ وَكَأْسٍ مِّن مَّعِينٍ",
    words: [
      { arabic: "بِأَكْوَابٍ", transliteration: "bi-akwābin", meaning: { en: "With vessels", ur: "آبخوروں سے", ar: "بأكواب" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ك-و-ب", number: "plural" } },
      { arabic: "وَأَبَارِيقَ", transliteration: "wa-abārīqa", meaning: { en: "and pitchers", ur: "اور صراحیوں", ar: "وأباريق" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَكَأْسٍ", transliteration: "wa-kaʾsin", meaning: { en: "and a cup", ur: "اور جام", ar: "وكأس" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ك-أ-س" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "مَّعِينٍ", transliteration: "maʿīnin", meaning: { en: "a flowing spring", ur: "بہتے چشمے", ar: "عين جارية" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ع-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' },
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "لَّا يُصَدَّعُونَ عَنْهَا وَلَا يُنزِفُونَ",
    words: [
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "Not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يُصَدَّعُونَ", transliteration: "yuṣaddaʿūna", meaning: { en: "they will get headache", ur: "سر درد ہوگا", ar: "يصدعون" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "ص-د-ع", form: "II", number: "plural" } },
      { arabic: "عَنْهَا", transliteration: "ʿanhā", meaning: { en: "from it", ur: "اس سے", ar: "عنها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "يُنزِفُونَ", transliteration: "yunzifūna", meaning: { en: "they will be intoxicated", ur: "بدمست ہوں گے", ar: "يسكرون" }, pos: "V", posLabel: "V", grammar: { root: "ن-ز-ف", form: "IV", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'نفی + فعل' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَفَاكِهَةٍ مِّمَّا يَتَخَيَّرُونَ",
    words: [
      { arabic: "وَفَاكِهَةٍ", transliteration: "wafākihatin", meaning: { en: "And fruit", ur: "اور پھل", ar: "وفاكهة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ف-ك-ه" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from whatever", ur: "جو کچھ", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "preposition+relative" } },
      { arabic: "يَتَخَيَّرُونَ", transliteration: "yatakhayyarūna", meaning: { en: "they select", ur: "وہ پسند کریں", ar: "يختارون" }, pos: "V", posLabel: "V", grammar: { root: "خ-ي-ر", form: "V", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'عطف' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "وَلَحْمِ طَيْرٍ مِّمَّا يَشْتَهُونَ",
    words: [
      { arabic: "وَلَحْمِ", transliteration: "walaḥmi", meaning: { en: "And meat", ur: "اور پرندوں کا گوشت", ar: "ولحم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ل-ح-م" } },
      { arabic: "طَيْرٍ", transliteration: "ṭayrin", meaning: { en: "of fowl", ur: "پرندوں کا", ar: "طير" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ط-ي-ر" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from whatever", ur: "جو کچھ", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "preposition+relative" } },
      { arabic: "يَشْتَهُونَ", transliteration: "yashtahūna", meaning: { en: "they desire", ur: "وہ چاہیں", ar: "يشتهون" }, pos: "V", posLabel: "V", grammar: { root: "ش-ه-و", form: "VIII", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "وَحُورٌ عِينٌ",
    words: [
      { arabic: "وَحُورٌ", transliteration: "waḥūrun", meaning: { en: "And fair women", ur: "اور حوریں", ar: "وحور" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ح-و-ر", number: "plural" } },
      { arabic: "عِينٌ", transliteration: "ʿīnun", meaning: { en: "with large eyes", ur: "بڑی آنکھوں والی", ar: "واسعات العيون" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ي-ن", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفة' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "كَأَمْثَالِ اللُّؤْلُؤِ الْمَكْنُونِ",
    words: [
      { arabic: "كَأَمْثَالِ", transliteration: "ka-amthāli", meaning: { en: "Like the likeness", ur: "جیسے", ar: "كأمثال" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "اللُّؤْلُؤِ", transliteration: "al-luʾluʾi", meaning: { en: "of pearls", ur: "موتیوں کی", ar: "اللؤلؤ" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-ؤ-ل" } },
      { arabic: "الْمَكْنُونِ", transliteration: "al-maknūni", meaning: { en: "well-protected", ur: "چھپے ہوئے", ar: "المحفوظ" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ك-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'موصوف + صفة' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "جَزَاءً بِمَا كَانُوا يَعْمَلُونَ",
    words: [
      { arabic: "جَزَاءً", transliteration: "jazāʾan", meaning: { en: "Reward", ur: "بدلے میں", ar: "جزاء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ز-ي", type: "mafool-li-ajlih" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "اس کا جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "preposition+relative" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ کیا کرتے تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna", number: "plural" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "عمل کرتے تھے", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { root: "ع-م-ل", form: "I", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'كان + خبر' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا تَأْثِيمًا",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", meaning: { en: "they will hear", ur: "وہ سنیں گے", ar: "يسمعون" }, pos: "V", posLabel: "V", grammar: { root: "س-م-ع", form: "I", number: "plural" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "لَغْوًا", transliteration: "laghwan", meaning: { en: "ill speech", ur: "بیہودہ بات", ar: "لغوا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ل-غ-و" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "تَأْثِيمًا", transliteration: "taʾthīman", meaning: { en: "commission of sin", ur: "گناہ کی بات", ar: "تأثيما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ث-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "إِلَّا قِيلًا سَلَامًا سَلَامًا",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "Only", ur: "سوائے", ar: "إلا" }, pos: "RES", posLabel: "RES", grammar: { type: "exception" } },
      { arabic: "قِيلًا", transliteration: "qīlan", meaning: { en: "a saying", ur: "کہنا", ar: "قولا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-ل" } },
      { arabic: "سَلَامًا", transliteration: "salāman", meaning: { en: "Peace", ur: "سلام", ar: "سلاما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ل-م" } },
      { arabic: "سَلَامًا", transliteration: "salāman", meaning: { en: "peace", ur: "سلام", ar: "سلاما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ل-م", type: "emphasis" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'استثناء' },
        { from: 3, to: 4, label: 'توکید' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "وَأَصْحَابُ الْيَمِينِ مَا أَصْحَابُ الْيَمِينِ",
    words: [
      { arabic: "وَأَصْحَابُ", transliteration: "wa-aṣḥābu", meaning: { en: "And the companions", ur: "اور دائیں والے", ar: "وأصحاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ص-ح-ب", number: "plural" } },
      { arabic: "الْيَمِينِ", transliteration: "al-yamīni", meaning: { en: "of the right", ur: "دائیں ہاتھ کے", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-ن" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا ہیں", ar: "ما" }, pos: "INTG", posLabel: "INTG", grammar: { type: "exclamatory" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "the companions", ur: "ساتھی", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ص-ح-ب", number: "plural" } },
      { arabic: "الْيَمِينِ", transliteration: "al-yamīni", meaning: { en: "of the right", ur: "دائیں ہاتھ والے", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "فِي سِدْرٍ مَّخْضُودٍ",
    words: [
      { arabic: "فِي", transliteration: "fī", meaning: { en: "Among", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "سِدْرٍ", transliteration: "sidrin", meaning: { en: "lote trees", ur: "بیری کے درخت", ar: "سدر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-د-ر" } },
      { arabic: "مَّخْضُودٍ", transliteration: "makhḍūdin", meaning: { en: "with thorns removed", ur: "بے کانٹے", ar: "منزوع الشوك" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "خ-ض-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفة' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "وَطَلْحٍ مَّنضُودٍ",
    words: [
      { arabic: "وَطَلْحٍ", transliteration: "waṭalḥin", meaning: { en: "And banana trees", ur: "اور کیلے کے درخت", ar: "وطلح" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ط-ل-ح" } },
      { arabic: "مَّنضُودٍ", transliteration: "manḍūdin", meaning: { en: "layered [with fruit]", ur: "تہہ بہ تہہ", ar: "متراكم" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ن-ض-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفة' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "وَظِلٍّ مَّمْدُودٍ",
    words: [
      { arabic: "وَظِلٍّ", transliteration: "waẓillin", meaning: { en: "And shade", ur: "اور سایہ", ar: "وظل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ظ-ل-ل" } },
      { arabic: "مَّمْدُودٍ", transliteration: "mamdūdin", meaning: { en: "extended", ur: "لمبا", ar: "ممتد" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "م-د-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفة' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "وَمَاءٍ مَّسْكُوبٍ",
    words: [
      { arabic: "وَمَاءٍ", transliteration: "wamāʾin", meaning: { en: "And water", ur: "اور پانی", ar: "وماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "م-و-ه" } },
      { arabic: "مَّسْكُوبٍ", transliteration: "maskūbin", meaning: { en: "poured forth", ur: "بہتا ہوا", ar: "متدفق" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "س-ك-ب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفة' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "وَفَاكِهَةٍ كَثِيرَةٍ",
    words: [
      { arabic: "وَفَاكِهَةٍ", transliteration: "wafākihatin", meaning: { en: "And fruit", ur: "اور بہت سے پھل", ar: "وفاكهة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ف-ك-ه" } },
      { arabic: "كَثِيرَةٍ", transliteration: "kathīratin", meaning: { en: "abundant", ur: "بہت زیادہ", ar: "كثيرة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ك-ث-ر", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفة' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "لَّا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ",
    words: [
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "Neither", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "مَقْطُوعَةٍ", transliteration: "maqṭūʿatin", meaning: { en: "limited", ur: "ختم ہونے والے", ar: "منقطعة" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ق-ط-ع", gender: "feminine" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "مَمْنُوعَةٍ", transliteration: "mamnūʿatin", meaning: { en: "forbidden", ur: "ممنوع", ar: "ممنوعة" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "م-ن-ع", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + صفة' },
        { from: 3, to: 4, label: 'نفی + صفة' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "وَفُرُشٍ مَّرْفُوعَةٍ",
    words: [
      { arabic: "وَفُرُشٍ", transliteration: "wafurushin", meaning: { en: "And [on] beds", ur: "اور بستروں پر", ar: "وفرش" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ف-ر-ش", number: "plural" } },
      { arabic: "مَّرْفُوعَةٍ", transliteration: "marfūʿatin", meaning: { en: "raised high", ur: "اونچے", ar: "مرتفعة" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ر-ف-ع", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفة' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "إِنَّا أَنشَأْنَاهُنَّ إِنشَاءً",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بے شک ہم نے", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "inna+pronoun" } },
      { arabic: "أَنشَأْنَاهُنَّ", transliteration: "anshaʾnāhunna", meaning: { en: "have produced them", ur: "ان کو بنایا ہے", ar: "أنشأناهن" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "ن-ش-أ", form: "IV", person: "1st" } },
      { arabic: "إِنشَاءً", transliteration: "inshāʾan", meaning: { en: "in a [new] creation", ur: "نئی پیدائش", ar: "إنشاء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ش-أ", type: "verbal-noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'إنّ + خبر' },
        { from: 2, to: 3, label: 'مفعول مطلق' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "فَجَعَلْنَاهُنَّ أَبْكَارًا",
    words: [
      { arabic: "فَجَعَلْنَاهُنَّ", transliteration: "fajaʿalnāhunna", meaning: { en: "And made them", ur: "پھر ان کو بنایا", ar: "فجعلناهن" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { root: "ج-ع-ل", person: "1st" } },
      { arabic: "أَبْكَارًا", transliteration: "abkāran", meaning: { en: "virgins", ur: "کنواریاں", ar: "أبكارا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ك-ر", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "عُرُبًا أَتْرَابًا",
    words: [
      { arabic: "عُرُبًا", transliteration: "ʿuruban", meaning: { en: "Devoted", ur: "پیار کرنے والیاں", ar: "عروبات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ر-ب", number: "plural" } },
      { arabic: "أَتْرَابًا", transliteration: "atrāban", meaning: { en: "of equal age", ur: "ہم عمر", ar: "متساويات في السن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ت-ر-ب", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'حال + حال' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "لِّأَصْحَابِ الْيَمِينِ",
    words: [
      { arabic: "لِّأَصْحَابِ", transliteration: "li-aṣḥābi", meaning: { en: "For the companions", ur: "دائیں والوں کے لیے", ar: "لأصحاب" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ص-ح-ب", number: "plural" } },
      { arabic: "الْيَمِينِ", transliteration: "al-yamīni", meaning: { en: "of the right", ur: "دائیں ہاتھ کے", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "ثُلَّةٌ مِّنَ الْأَوَّلِينَ",
    words: [
      { arabic: "ثُلَّةٌ", transliteration: "thullatun", meaning: { en: "A company", ur: "ایک بڑی جماعت", ar: "جماعة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ث-ل-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīna", meaning: { en: "the former peoples", ur: "پہلے لوگوں", ar: "الأولين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "وَثُلَّةٌ مِّنَ الْآخِرِينَ",
    words: [
      { arabic: "وَثُلَّةٌ", transliteration: "wathullatun", meaning: { en: "And a company", ur: "اور ایک جماعت", ar: "وجماعة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ث-ل-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْآخِرِينَ", transliteration: "al-ākhirīna", meaning: { en: "the later peoples", ur: "بعد کے لوگوں", ar: "الآخرين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-خ-ر", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'عطف' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "وَأَصْحَابُ الشِّمَالِ مَا أَصْحَابُ الشِّمَالِ",
    words: [
      { arabic: "وَأَصْحَابُ", transliteration: "wa-aṣḥābu", meaning: { en: "And the companions", ur: "اور بائیں والے", ar: "وأصحاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ص-ح-ب", number: "plural" } },
      { arabic: "الشِّمَالِ", transliteration: "al-shimāli", meaning: { en: "of the left", ur: "بائیں ہاتھ کے", ar: "الشمال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-م-ل" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا ہیں", ar: "ما" }, pos: "INTG", posLabel: "INTG", grammar: { type: "exclamatory" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "the companions", ur: "ساتھی", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ص-ح-ب", number: "plural" } },
      { arabic: "الشِّمَالِ", transliteration: "al-shimāli", meaning: { en: "of the left", ur: "بائیں ہاتھ والے", ar: "الشمال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-م-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "فِي سَمُومٍ وَحَمِيمٍ",
    words: [
      { arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "سَمُومٍ", transliteration: "samūmin", meaning: { en: "scorching fire", ur: "لو (گرم ہوا)", ar: "ريح حارة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-م" } },
      { arabic: "وَحَمِيمٍ", transliteration: "waḥamīmin", meaning: { en: "and scalding water", ur: "اور کھولتا پانی", ar: "وماء ساخن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ح-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "وَظِلٍّ مِّن يَحْمُومٍ",
    words: [
      { arabic: "وَظِلٍّ", transliteration: "waẓillin", meaning: { en: "And a shade", ur: "اور سایہ", ar: "وظل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ظ-ل-ل" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "يَحْمُومٍ", transliteration: "yaḥmūmin", meaning: { en: "black smoke", ur: "سیاہ دھواں", ar: "دخان أسود" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'عطف' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "لَّا بَارِدٍ وَلَا كَرِيمٍ",
    words: [
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "Neither", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "بَارِدٍ", transliteration: "bāridin", meaning: { en: "cool", ur: "ٹھنڈا", ar: "بارد" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ب-ر-د" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "كَرِيمٍ", transliteration: "karīmin", meaning: { en: "noble/pleasant", ur: "عمدہ", ar: "كريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ك-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + صفة' },
        { from: 3, to: 4, label: 'نفی + صفة' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "إِنَّهُمْ كَانُوا قَبْلَ ذَٰلِكَ مُتْرَفِينَ",
    words: [
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بے شک وہ", ar: "إنهم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "inna+pronoun" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were", ur: "تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna", number: "plural" } },
      { arabic: "قَبْلَ", transliteration: "qabla", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "T", posLabel: "T", grammar: { case: "accusative", type: "adverb" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس سے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "مُتْرَفِينَ", transliteration: "mutrafīna", meaning: { en: "indulging in affluence", ur: "عیش میں مگن", ar: "منعمين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ت-ر-ف", form: "IV", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 5, label: 'كان + خبر' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "وَكَانُوا يُصِرُّونَ عَلَى الْحِنثِ الْعَظِيمِ",
    words: [
      { arabic: "وَكَانُوا", transliteration: "wakānū", meaning: { en: "And they used to", ur: "اور وہ کرتے تھے", ar: "وكانوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "ك-و-ن", type: "kāna", number: "plural" } },
      { arabic: "يُصِرُّونَ", transliteration: "yuṣirrūna", meaning: { en: "persist", ur: "اصرار کرتے تھے", ar: "يصرون" }, pos: "V", posLabel: "V", grammar: { root: "ص-ر-ر", form: "IV", number: "plural" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْحِنثِ", transliteration: "al-ḥinthi", meaning: { en: "the sin", ur: "بڑے گناہ", ar: "الإثم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ن-ث" } },
      { arabic: "الْعَظِيمِ", transliteration: "al-ʿaẓīmi", meaning: { en: "the great", ur: "بڑے", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ظ-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'كان + خبر' },
        { from: 4, to: 5, label: 'موصوف + صفة' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "وَكَانُوا يَقُولُونَ أَئِذَا مِتْنَا وَكُنَّا تُرَابًا وَعِظَامًا أَإِنَّا لَمَبْعُوثُونَ",
    words: [
      { arabic: "وَكَانُوا", transliteration: "wakānū", meaning: { en: "And they used to", ur: "اور وہ کہتے تھے", ar: "وكانوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "say", ur: "کہتے", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { root: "ق-و-ل", number: "plural" } },
      { arabic: "أَئِذَا", transliteration: "a-idhā", meaning: { en: "When", ur: "کیا جب", ar: "أإذا" }, pos: "INTG+T", posLabel: "INTG+T", grammar: { type: "interrogative+temporal" } },
      { arabic: "مِتْنَا", transliteration: "mitnā", meaning: { en: "we have died", ur: "ہم مر جائیں", ar: "متنا" }, pos: "V", posLabel: "V", grammar: { root: "م-و-ت", person: "1st", number: "plural" } },
      { arabic: "وَكُنَّا", transliteration: "wakunnā", meaning: { en: "and become", ur: "اور ہو جائیں", ar: "وكنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "تُرَابًا", transliteration: "turāban", meaning: { en: "dust", ur: "مٹی", ar: "ترابا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ت-ر-ب" } },
      { arabic: "وَعِظَامًا", transliteration: "waʿiẓāman", meaning: { en: "and bones", ur: "اور ہڈیاں", ar: "وعظاما" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ع-ظ-م", number: "plural" } },
      { arabic: "أَإِنَّا", transliteration: "a-innā", meaning: { en: "will we indeed", ur: "کیا ہم", ar: "أإنا" }, pos: "INTG+ACC+PRON", posLabel: "INTG+ACC+PRON", grammar: { type: "interrogative+inna" } },
      { arabic: "لَمَبْعُوثُونَ", transliteration: "lamabʿūthūna", meaning: { en: "be resurrected", ur: "اٹھائے جائیں گے", ar: "لمبعوثون" }, pos: "EMPH+AP", posLabel: "EMPH+AP", grammar: { case: "nominative", root: "ب-ع-ث", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'كان + خبر' },
        { from: 5, to: 6, label: 'كان + خبر' },
        { from: 8, to: 9, label: 'إنّ + خبر' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "أَوَآبَاؤُنَا الْأَوَّلُونَ",
    words: [
      { arabic: "أَوَآبَاؤُنَا", transliteration: "awa-ābāʾunā", meaning: { en: "And our forefathers", ur: "اور ہمارے باپ دادا", ar: "أو آباؤنا" }, pos: "INTG+CONJ+N+PRON", posLabel: "INTG+CONJ+N+PRON", grammar: { case: "nominative", root: "أ-ب-و", number: "plural" } },
      { arabic: "الْأَوَّلُونَ", transliteration: "al-awwalūna", meaning: { en: "the former ones", ur: "پہلے لوگ بھی", ar: "الأولون" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفة' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "قُلْ إِنَّ الْأَوَّلِينَ وَالْآخِرِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { root: "ق-و-ل", mood: "imperative", person: "2nd" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "inna" } },
      { arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīna", meaning: { en: "the former peoples", ur: "پہلے لوگ", ar: "الأولين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْآخِرِينَ", transliteration: "wal-ākhirīna", meaning: { en: "and the later peoples", ur: "اور بعد والے", ar: "والآخرين" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "أ-خ-ر", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'إنّ + اسم' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  50: {
    ayahNumber: 50,
    text: "لَمَجْمُوعُونَ إِلَىٰ مِيقَاتِ يَوْمٍ مَّعْلُومٍ",
    words: [
      { arabic: "لَمَجْمُوعُونَ", transliteration: "lamajmūʿūna", meaning: { en: "will surely be gathered", ur: "ضرور جمع کیے جائیں گے", ar: "لمجموعون" }, pos: "EMPH+AP", posLabel: "EMPH+AP", grammar: { case: "nominative", root: "ج-م-ع", number: "plural" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "for", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "مِيقَاتِ", transliteration: "mīqāti", meaning: { en: "the appointment", ur: "وقت مقررہ", ar: "ميقات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ق-ت" } },
      { arabic: "يَوْمٍ", transliteration: "yawmin", meaning: { en: "of a Day", ur: "دن کے", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-و-م" } },
      { arabic: "مَّعْلُومٍ", transliteration: "maʿlūmin", meaning: { en: "well-known", ur: "معلوم", ar: "معلوم" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'موصوف + صفة' }
      ]
    }
  },

  51: {
    ayahNumber: 51,
    text: "ثُمَّ إِنَّكُمْ أَيُّهَا الضَّالُّونَ الْمُكَذِّبُونَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "إِنَّكُمْ", transliteration: "innakum", meaning: { en: "indeed you", ur: "بے شک تم", ar: "إنكم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "inna+pronoun", person: "2nd" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "O", ur: "اے", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "الضَّالُّونَ", transliteration: "al-ḍāllūna", meaning: { en: "the erring ones", ur: "گمراہ لوگو", ar: "الضالون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ض-ل-ل", number: "plural" } },
      { arabic: "الْمُكَذِّبُونَ", transliteration: "al-mukadhdhibūna", meaning: { en: "the deniers", ur: "جھٹلانے والو", ar: "المكذبون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ك-ذ-ب", form: "II", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'إنّ + اسم' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  52: {
    ayahNumber: 52,
    text: "لَآكِلُونَ مِن شَجَرٍ مِّن زَقُّومٍ",
    words: [
      { arabic: "لَآكِلُونَ", transliteration: "la-ākilūna", meaning: { en: "will surely eat", ur: "ضرور کھاؤ گے", ar: "لآكلون" }, pos: "EMPH+AP", posLabel: "EMPH+AP", grammar: { case: "nominative", root: "أ-ك-ل", number: "plural" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "شَجَرٍ", transliteration: "shajarin", meaning: { en: "a tree", ur: "درخت", ar: "شجر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-ج-ر" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "یعنی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition-explanatory" } },
      { arabic: "زَقُّومٍ", transliteration: "zaqqūmin", meaning: { en: "zaqqum", ur: "زقوم", ar: "زقوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ز-ق-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  53: {
    ayahNumber: 53,
    text: "فَمَالِئُونَ مِنْهَا الْبُطُونَ",
    words: [
      { arabic: "فَمَالِئُونَ", transliteration: "famāliʾūna", meaning: { en: "And filling", ur: "پھر بھرو گے", ar: "فمالئون" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", root: "م-ل-أ", number: "plural" } },
      { arabic: "مِنْهَا", transliteration: "minhā", meaning: { en: "from it", ur: "اس سے", ar: "منها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "الْبُطُونَ", transliteration: "al-buṭūna", meaning: { en: "the bellies", ur: "پیٹ", ar: "البطون" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ط-ن", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  54: {
    ayahNumber: 54,
    text: "فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ",
    words: [
      { arabic: "فَشَارِبُونَ", transliteration: "fashāribūna", meaning: { en: "And drinking", ur: "پھر پیو گے", ar: "فشاربون" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", root: "ش-ر-ب", number: "plural" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "on top of it", ur: "اس کے اوپر", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْحَمِيمِ", transliteration: "al-ḥamīmi", meaning: { en: "scalding water", ur: "کھولتا ہوا پانی", ar: "الماء الحار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  55: {
    ayahNumber: 55,
    text: "فَشَارِبُونَ شُرْبَ الْهِيمِ",
    words: [
      { arabic: "فَشَارِبُونَ", transliteration: "fashāribūna", meaning: { en: "And drinking", ur: "پھر پیو گے", ar: "فشاربون" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", root: "ش-ر-ب", number: "plural" } },
      { arabic: "شُرْبَ", transliteration: "shurba", meaning: { en: "the drinking", ur: "پینا جیسے", ar: "شرب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ش-ر-ب", type: "verbal-noun" } },
      { arabic: "الْهِيمِ", transliteration: "al-hīmi", meaning: { en: "of thirsty camels", ur: "پیاسے اونٹ", ar: "الإبل العطاش" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ه-ي-م", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  56: {
    ayahNumber: 56,
    text: "هَٰذَا نُزُلُهُمْ يَوْمَ الدِّينِ",
    words: [
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "نُزُلُهُمْ", transliteration: "nuzuluhum", meaning: { en: "their accommodation", ur: "ان کی مہمانی", ar: "نزلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ن-ز-ل" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "on the Day", ur: "کے دن", ar: "يوم" }, pos: "T", posLabel: "T", grammar: { case: "accusative", root: "ي-و-م" } },
      { arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "of Judgement", ur: "جزا کے", ar: "الجزاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "د-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  57: {
    ayahNumber: 57,
    text: "نَحْنُ خَلَقْنَاكُمْ فَلَوْلَا تُصَدِّقُونَ",
    words: [
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم نے", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st", number: "plural" } },
      { arabic: "خَلَقْنَاكُمْ", transliteration: "khalaqnākum", meaning: { en: "created you", ur: "تمہیں پیدا کیا", ar: "خلقناكم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "خ-ل-ق", person: "1st" } },
      { arabic: "فَلَوْلَا", transliteration: "falawlā", meaning: { en: "so why do you not", ur: "تو کیوں نہیں", ar: "فلولا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "exhortation" } },
      { arabic: "تُصَدِّقُونَ", transliteration: "tuṣaddiqūna", meaning: { en: "believe?", ur: "تصدیق کرتے؟", ar: "تصدقون" }, pos: "V", posLabel: "V", grammar: { root: "ص-د-ق", form: "II", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'تحضيض + فعل' }
      ]
    }
  },

  58: {
    ayahNumber: 58,
    text: "أَفَرَأَيْتُم مَّا تُمْنُونَ",
    words: [
      { arabic: "أَفَرَأَيْتُم", transliteration: "afaraʾaytum", meaning: { en: "Have you seen", ur: "بھلا بتاؤ تو", ar: "أفرأيتم" }, pos: "INTG+CONJ+V", posLabel: "INTG+CONJ+V", grammar: { root: "ر-أ-ي", person: "2nd", number: "plural" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تُمْنُونَ", transliteration: "tumnūna", meaning: { en: "you emit", ur: "تم ٹپکاتے ہو", ar: "تمنون" }, pos: "V", posLabel: "V", grammar: { root: "م-ن-ي", form: "IV", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  59: {
    ayahNumber: 59,
    text: "أَأَنتُمْ تَخْلُقُونَهُ أَمْ نَحْنُ الْخَالِقُونَ",
    words: [
      { arabic: "أَأَنتُمْ", transliteration: "a-antum", meaning: { en: "Is it you who", ur: "کیا تم", ar: "أأنتم" }, pos: "INTG+PRON", posLabel: "INTG+PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "تَخْلُقُونَهُ", transliteration: "takhluqūnahu", meaning: { en: "create it", ur: "اسے پیدا کرتے ہو", ar: "تخلقونه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "خ-ل-ق", person: "2nd", number: "plural" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st", number: "plural" } },
      { arabic: "الْخَالِقُونَ", transliteration: "al-khāliqūna", meaning: { en: "the Creators", ur: "پیدا کرنے والے", ar: "الخالقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "خ-ل-ق", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  60: {
    ayahNumber: 60,
    text: "نَحْنُ قَدَّرْنَا بَيْنَكُمُ الْمَوْتَ وَمَا نَحْنُ بِمَسْبُوقِينَ",
    words: [
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم نے", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st", number: "plural" } },
      { arabic: "قَدَّرْنَا", transliteration: "qaddarnā", meaning: { en: "have decreed", ur: "مقرر کیا ہے", ar: "قدرنا" }, pos: "V", posLabel: "V", grammar: { root: "ق-د-ر", form: "II", person: "1st" } },
      { arabic: "بَيْنَكُمُ", transliteration: "baynakumu", meaning: { en: "among you", ur: "تمہارے درمیان", ar: "بينكم" }, pos: "T+PRON", posLabel: "T+PRON", grammar: { type: "adverb" } },
      { arabic: "الْمَوْتَ", transliteration: "al-mawta", meaning: { en: "death", ur: "موت", ar: "الموت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-و-ت" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st" } },
      { arabic: "بِمَسْبُوقِينَ", transliteration: "bimasbūqīna", meaning: { en: "to be outdone", ur: "عاجز", ar: "بمغلوبين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", root: "س-ب-ق", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  61: {
    ayahNumber: 61,
    text: "عَلَىٰ أَن نُّبَدِّلَ أَمْثَالَكُمْ وَنُنشِئَكُمْ فِي مَا لَا تَعْلَمُونَ",
    words: [
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "In", ur: "اس پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "SUB", posLabel: "SUB", grammar: { type: "subjunctive-particle" } },
      { arabic: "نُّبَدِّلَ", transliteration: "nubaddila", meaning: { en: "We replace", ur: "ہم بدل دیں", ar: "نبدل" }, pos: "V", posLabel: "V", grammar: { root: "ب-د-ل", form: "II", person: "1st", mood: "subjunctive" } },
      { arabic: "أَمْثَالَكُمْ", transliteration: "amthālakum", meaning: { en: "your likes", ur: "تم جیسوں کو", ar: "أمثالكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "م-ث-ل", number: "plural" } },
      { arabic: "وَنُنشِئَكُمْ", transliteration: "wanunshiʾakum", meaning: { en: "and produce you", ur: "اور تمہیں بنائیں", ar: "وننشئكم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { root: "ن-ش-أ", form: "IV", mood: "subjunctive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", meaning: { en: "you know", ur: "تم جانتے", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { root: "ع-ل-م", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'نفی + فعل' }
      ]
    }
  },

  62: {
    ayahNumber: 62,
    text: "وَلَقَدْ عَلِمْتُمُ النَّشْأَةَ الْأُولَىٰ فَلَوْلَا تَذَكَّرُونَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And you have already", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+EMPH+CERT", posLabel: "CONJ+EMPH+CERT", grammar: { type: "emphasis" } },
      { arabic: "عَلِمْتُمُ", transliteration: "ʿalimtumu", meaning: { en: "known", ur: "تم جان چکے ہو", ar: "علمتم" }, pos: "V", posLabel: "V", grammar: { root: "ع-ل-م", person: "2nd", number: "plural" } },
      { arabic: "النَّشْأَةَ", transliteration: "al-nashʾata", meaning: { en: "the creation", ur: "پیدائش", ar: "النشأة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ش-أ" } },
      { arabic: "الْأُولَىٰ", transliteration: "al-ūlā", meaning: { en: "the first", ur: "پہلی", ar: "الأولى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", gender: "feminine" } },
      { arabic: "فَلَوْلَا", transliteration: "falawlā", meaning: { en: "so why do you not", ur: "تو کیوں نہیں", ar: "فلولا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "exhortation" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", meaning: { en: "remember?", ur: "یاد کرتے؟", ar: "تتذكرون" }, pos: "V", posLabel: "V", grammar: { root: "ذ-ك-ر", form: "V", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفة' },
        { from: 5, to: 6, label: 'تحضيض + فعل' }
      ]
    }
  },

  63: {
    ayahNumber: 63,
    text: "أَفَرَأَيْتُم مَّا تَحْرُثُونَ",
    words: [
      { arabic: "أَفَرَأَيْتُم", transliteration: "afaraʾaytum", meaning: { en: "Have you seen", ur: "بھلا بتاؤ", ar: "أفرأيتم" }, pos: "INTG+CONJ+V", posLabel: "INTG+CONJ+V", grammar: { root: "ر-أ-ي", person: "2nd" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَحْرُثُونَ", transliteration: "taḥruthūna", meaning: { en: "you sow", ur: "تم بوتے ہو", ar: "تزرعون" }, pos: "V", posLabel: "V", grammar: { root: "ح-ر-ث", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  64: {
    ayahNumber: 64,
    text: "أَأَنتُمْ تَزْرَعُونَهُ أَمْ نَحْنُ الزَّارِعُونَ",
    words: [
      { arabic: "أَأَنتُمْ", transliteration: "a-antum", meaning: { en: "Is it you who", ur: "کیا تم", ar: "أأنتم" }, pos: "INTG+PRON", posLabel: "INTG+PRON", grammar: { person: "2nd" } },
      { arabic: "تَزْرَعُونَهُ", transliteration: "tazraʿūnahu", meaning: { en: "make it grow", ur: "اسے اگاتے ہو", ar: "تزرعونه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "ز-ر-ع", person: "2nd", number: "plural" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st" } },
      { arabic: "الزَّارِعُونَ", transliteration: "al-zāriʿūna", meaning: { en: "the ones who make it grow", ur: "اگانے والے", ar: "الزارعون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ز-ر-ع", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  65: {
    ayahNumber: 65,
    text: "لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا فَظَلْتُمْ تَفَكَّهُونَ",
    words: [
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "نَشَاءُ", transliteration: "nashāʾu", meaning: { en: "We willed", ur: "ہم چاہیں", ar: "نشاء" }, pos: "V", posLabel: "V", grammar: { root: "ش-ي-أ", person: "1st" } },
      { arabic: "لَجَعَلْنَاهُ", transliteration: "lajaʿalnāhu", meaning: { en: "We could make it", ur: "تو اسے بنا دیں", ar: "لجعلناه" }, pos: "EMPH+V+PRON", posLabel: "EMPH+V+PRON", grammar: { root: "ج-ع-ل", person: "1st" } },
      { arabic: "حُطَامًا", transliteration: "ḥuṭāman", meaning: { en: "debris", ur: "چورا چورا", ar: "حطاما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-ط-م" } },
      { arabic: "فَظَلْتُمْ", transliteration: "faẓaltum", meaning: { en: "and you would remain", ur: "پھر تم رہو", ar: "فظلتم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "ظ-ل-ل", person: "2nd" } },
      { arabic: "تَفَكَّهُونَ", transliteration: "tafakkahūna", meaning: { en: "wondering", ur: "افسوس کرتے", ar: "تتعجبون" }, pos: "V", posLabel: "V", grammar: { root: "ف-ك-ه", form: "V", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'شرط + جواب' },
        { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  66: {
    ayahNumber: 66,
    text: "إِنَّا لَمُغْرَمُونَ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بے شک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "inna+pronoun" } },
      { arabic: "لَمُغْرَمُونَ", transliteration: "lamughramūna", meaning: { en: "are in debt/loss", ur: "نقصان میں ہیں", ar: "لخاسرون" }, pos: "EMPH+AP", posLabel: "EMPH+AP", grammar: { case: "nominative", root: "غ-ر-م", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'إنّ + خبر' }
      ]
    }
  },

  67: {
    ayahNumber: 67,
    text: "بَلْ نَحْنُ مَحْرُومُونَ",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بل" }, pos: "RET", posLabel: "RET", grammar: { type: "retraction" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "we are", ur: "ہم", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st" } },
      { arabic: "مَحْرُومُونَ", transliteration: "maḥrūmūna", meaning: { en: "deprived", ur: "محروم ہیں", ar: "محرومون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ح-ر-م", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  68: {
    ayahNumber: 68,
    text: "أَفَرَأَيْتُمُ الْمَاءَ الَّذِي تَشْرَبُونَ",
    words: [
      { arabic: "أَفَرَأَيْتُمُ", transliteration: "afaraʾaytumu", meaning: { en: "Have you seen", ur: "بھلا بتاؤ", ar: "أفرأيتم" }, pos: "INTG+CONJ+V", posLabel: "INTG+CONJ+V", grammar: { root: "ر-أ-ي", person: "2nd" } },
      { arabic: "الْمَاءَ", transliteration: "al-māʾa", meaning: { en: "the water", ur: "پانی", ar: "الماء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-و-ه" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "which", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative", gender: "masculine" } },
      { arabic: "تَشْرَبُونَ", transliteration: "tashrabūna", meaning: { en: "you drink", ur: "تم پیتے ہو", ar: "تشربون" }, pos: "V", posLabel: "V", grammar: { root: "ش-ر-ب", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصوف + صفة' }
      ]
    }
  },

  69: {
    ayahNumber: 69,
    text: "أَأَنتُمْ أَنزَلْتُمُوهُ مِنَ الْمُزْنِ أَمْ نَحْنُ الْمُنزِلُونَ",
    words: [
      { arabic: "أَأَنتُمْ", transliteration: "a-antum", meaning: { en: "Is it you who", ur: "کیا تم", ar: "أأنتم" }, pos: "INTG+PRON", posLabel: "INTG+PRON", grammar: { person: "2nd" } },
      { arabic: "أَنزَلْتُمُوهُ", transliteration: "anzaltumūhu", meaning: { en: "sent it down", ur: "اسے اتارتے ہو", ar: "أنزلتموه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "ن-ز-ل", form: "IV", person: "2nd" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْمُزْنِ", transliteration: "al-muzni", meaning: { en: "the clouds", ur: "بادلوں", ar: "السحاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ز-ن" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st" } },
      { arabic: "الْمُنزِلُونَ", transliteration: "al-munzilūna", meaning: { en: "the ones who send it down", ur: "اتارنے والے", ar: "المنزلون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ن-ز-ل", form: "IV", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' }
      ]
    }
  },

  70: {
    ayahNumber: 70,
    text: "لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا فَلَوْلَا تَشْكُرُونَ",
    words: [
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "نَشَاءُ", transliteration: "nashāʾu", meaning: { en: "We willed", ur: "ہم چاہیں", ar: "نشاء" }, pos: "V", posLabel: "V", grammar: { root: "ش-ي-أ", person: "1st" } },
      { arabic: "جَعَلْنَاهُ", transliteration: "jaʿalnāhu", meaning: { en: "We could make it", ur: "ہم اسے بنا دیں", ar: "جعلناه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "ج-ع-ل", person: "1st" } },
      { arabic: "أُجَاجًا", transliteration: "ujājan", meaning: { en: "bitter", ur: "کھاری", ar: "مالحا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ج-ج" } },
      { arabic: "فَلَوْلَا", transliteration: "falawlā", meaning: { en: "so why do you not", ur: "تو کیوں نہیں", ar: "فلولا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "exhortation" } },
      { arabic: "تَشْكُرُونَ", transliteration: "tashkurūna", meaning: { en: "give thanks?", ur: "شکر کرتے؟", ar: "تشكرون" }, pos: "V", posLabel: "V", grammar: { root: "ش-ك-ر", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'شرط + جواب' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'تحضيض + فعل' }
      ]
    }
  },

  71: {
    ayahNumber: 71,
    text: "أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ",
    words: [
      { arabic: "أَفَرَأَيْتُمُ", transliteration: "afaraʾaytumu", meaning: { en: "Have you seen", ur: "بھلا بتاؤ", ar: "أفرأيتم" }, pos: "INTG+CONJ+V", posLabel: "INTG+CONJ+V", grammar: { root: "ر-أ-ي", person: "2nd" } },
      { arabic: "النَّارَ", transliteration: "al-nāra", meaning: { en: "the fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-و-ر" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "which", ur: "جو", ar: "التي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative", gender: "feminine" } },
      { arabic: "تُورُونَ", transliteration: "tūrūna", meaning: { en: "you ignite", ur: "تم سلگاتے ہو", ar: "توقدون" }, pos: "V", posLabel: "V", grammar: { root: "و-ر-ي", form: "IV", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصوف + صفة' }
      ]
    }
  },

  72: {
    ayahNumber: 72,
    text: "أَأَنتُمْ أَنشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنشِئُونَ",
    words: [
      { arabic: "أَأَنتُمْ", transliteration: "a-antum", meaning: { en: "Is it you who", ur: "کیا تم نے", ar: "أأنتم" }, pos: "INTG+PRON", posLabel: "INTG+PRON", grammar: { person: "2nd" } },
      { arabic: "أَنشَأْتُمْ", transliteration: "anshaʾtum", meaning: { en: "produced", ur: "پیدا کیا", ar: "أنشأتم" }, pos: "V", posLabel: "V", grammar: { root: "ن-ش-أ", form: "IV", person: "2nd" } },
      { arabic: "شَجَرَتَهَا", transliteration: "shajaratahā", meaning: { en: "its tree", ur: "اس کا درخت", ar: "شجرتها" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ش-ج-ر" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st" } },
      { arabic: "الْمُنشِئُونَ", transliteration: "al-munshiʾūna", meaning: { en: "the producers", ur: "پیدا کرنے والے", ar: "المنشئون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ن-ش-أ", form: "IV", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'مبتدأ + خبر' }
      ]
    }
  },

  73: {
    ayahNumber: 73,
    text: "نَحْنُ جَعَلْنَاهَا تَذْكِرَةً وَمَتَاعًا لِّلْمُقْوِينَ",
    words: [
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم نے", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st" } },
      { arabic: "جَعَلْنَاهَا", transliteration: "jaʿalnāhā", meaning: { en: "have made it", ur: "اسے بنایا", ar: "جعلناها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "ج-ع-ل", person: "1st" } },
      { arabic: "تَذْكِرَةً", transliteration: "tadhkiratan", meaning: { en: "a reminder", ur: "نصیحت", ar: "تذكرة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ذ-ك-ر" } },
      { arabic: "وَمَتَاعًا", transliteration: "wamatāʿan", meaning: { en: "and provision", ur: "اور فائدہ", ar: "ومتاعا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "م-ت-ع" } },
      { arabic: "لِّلْمُقْوِينَ", transliteration: "lil-muqwīna", meaning: { en: "for the travelers", ur: "مسافروں کے لیے", ar: "للمسافرين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", root: "ق-و-ي", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  74: {
    ayahNumber: 74,
    text: "فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ",
    words: [
      { arabic: "فَسَبِّحْ", transliteration: "fasabbiḥ", meaning: { en: "So exalt", ur: "پس پاکیزگی بیان کرو", ar: "فسبح" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "س-ب-ح", form: "II", mood: "imperative" } },
      { arabic: "بِاسْمِ", transliteration: "bi-ismi", meaning: { en: "the name of", ur: "نام کے ساتھ", ar: "باسم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "رَبِّكَ", transliteration: "Rabbika", meaning: { en: "your Lord", ur: "اپنے رب کے", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "الْعَظِيمِ", transliteration: "al-ʿaẓīmi", meaning: { en: "the Most Great", ur: "بزرگ", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ظ-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'موصوف + صفة' }
      ]
    }
  },

  75: {
    ayahNumber: 75,
    text: "فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ",
    words: [
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "Then I swear", ur: "پھر قسم ہے", ar: "فلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "oath-emphasis" } },
      { arabic: "أُقْسِمُ", transliteration: "uqsimu", meaning: { en: "I swear", ur: "میں قسم کھاتا ہوں", ar: "أقسم" }, pos: "V", posLabel: "V", grammar: { root: "ق-س-م", form: "IV", person: "1st" } },
      { arabic: "بِمَوَاقِعِ", transliteration: "bimawāqiʿi", meaning: { en: "by the positions", ur: "جگہوں کی", ar: "بمواقع" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "و-ق-ع", number: "plural" } },
      { arabic: "النُّجُومِ", transliteration: "al-nujūmi", meaning: { en: "of the stars", ur: "ستاروں کی", ar: "النجوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ج-م", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  76: {
    ayahNumber: 76,
    text: "وَإِنَّهُ لَقَسَمٌ لَّوْ تَعْلَمُونَ عَظِيمٌ",
    words: [
      { arabic: "وَإِنَّهُ", transliteration: "wa-innahu", meaning: { en: "And indeed, it is", ur: "اور بے شک یہ", ar: "وإنه" }, pos: "CONJ+ACC+PRON", posLabel: "CONJ+ACC+PRON", grammar: { type: "inna" } },
      { arabic: "لَقَسَمٌ", transliteration: "laqasamun", meaning: { en: "surely an oath", ur: "ضرور قسم ہے", ar: "لقسم" }, pos: "EMPH+N", posLabel: "EMPH+N", grammar: { case: "nominative", root: "ق-س-م" } },
      { arabic: "لَّوْ", transliteration: "law", meaning: { en: "if", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", meaning: { en: "you knew", ur: "تم جانو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { root: "ع-ل-م", person: "2nd", number: "plural" } },
      { arabic: "عَظِيمٌ", transliteration: "ʿaẓīmun", meaning: { en: "great", ur: "بڑی", ar: "عظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ظ-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'إنّ + خبر' },
        { from: 2, to: 5, label: 'موصوف + صفة' }
      ]
    }
  },

  77: {
    ayahNumber: 77,
    text: "إِنَّهُ لَقُرْآنٌ كَرِيمٌ",
    words: [
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed, it is", ur: "بے شک یہ", ar: "إنه" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "inna" } },
      { arabic: "لَقُرْآنٌ", transliteration: "laqurʾānun", meaning: { en: "surely a noble Quran", ur: "یقیناً قرآن ہے", ar: "لقرآن" }, pos: "EMPH+N", posLabel: "EMPH+N", grammar: { case: "nominative", root: "ق-ر-أ" } },
      { arabic: "كَرِيمٌ", transliteration: "karīmun", meaning: { en: "noble", ur: "عزت والا", ar: "كريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ك-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'إنّ + خبر' },
        { from: 2, to: 3, label: 'موصوف + صفة' }
      ]
    }
  },

  78: {
    ayahNumber: 78,
    text: "فِي كِتَابٍ مَّكْنُونٍ",
    words: [
      { arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "كِتَابٍ", transliteration: "kitābin", meaning: { en: "a Register", ur: "کتاب", ar: "كتاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ك-ت-ب" } },
      { arabic: "مَّكْنُونٍ", transliteration: "maknūnin", meaning: { en: "well-protected", ur: "محفوظ", ar: "مصون" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ك-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفة' }
      ]
    }
  },

  79: {
    ayahNumber: 79,
    text: "لَّا يَمَسُّهُ إِلَّا الْمُطَهَّرُونَ",
    words: [
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "None", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يَمَسُّهُ", transliteration: "yamassuhū", meaning: { en: "touch it", ur: "اسے چھوتا ہے", ar: "يمسه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "م-س-س", person: "3rd" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "RES", posLabel: "RES", grammar: { type: "exception" } },
      { arabic: "الْمُطَهَّرُونَ", transliteration: "al-muṭahharūna", meaning: { en: "the purified", ur: "پاک لوگ", ar: "المطهرون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ط-ه-ر", form: "II", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'استثناء + فاعل' }
      ]
    }
  },

  80: {
    ayahNumber: 80,
    text: "تَنزِيلٌ مِّن رَّبِّ الْعَالَمِينَ",
    words: [
      { arabic: "تَنزِيلٌ", transliteration: "tanzīlun", meaning: { en: "A revelation", ur: "نازل کردہ", ar: "تنزيل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ز-ل" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "رَّبِّ", transliteration: "Rabbi", meaning: { en: "the Lord", ur: "رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "الْعَالَمِينَ", transliteration: "al-ʿālamīna", meaning: { en: "of the worlds", ur: "جہانوں کے", ar: "العالمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ل-م", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  81: {
    ayahNumber: 81,
    text: "أَفَبِهَٰذَا الْحَدِيثِ أَنتُم مُّدْهِنُونَ",
    words: [
      { arabic: "أَفَبِهَٰذَا", transliteration: "afabihādhā", meaning: { en: "Then is it to this", ur: "کیا تم اس", ar: "أفبهذا" }, pos: "INTG+CONJ+P+DEM", posLabel: "INTG+CONJ+P+DEM", grammar: { type: "interrogative" } },
      { arabic: "الْحَدِيثِ", transliteration: "al-ḥadīthi", meaning: { en: "statement", ur: "بات سے", ar: "الحديث" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-د-ث" } },
      { arabic: "أَنتُم", transliteration: "antum", meaning: { en: "you", ur: "تم", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "مُّدْهِنُونَ", transliteration: "mudhinūna", meaning: { en: "indifferent?", ur: "انکار کرتے ہو؟", ar: "مستهزئون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "د-ه-ن", form: "IV", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مبتدأ + خبر' }
      ]
    }
  },

  82: {
    ayahNumber: 82,
    text: "وَتَجْعَلُونَ رِزْقَكُمْ أَنَّكُمْ تُكَذِّبُونَ",
    words: [
      { arabic: "وَتَجْعَلُونَ", transliteration: "watajaʿlūna", meaning: { en: "And you make", ur: "اور تم بناتے ہو", ar: "وتجعلون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "ج-ع-ل", person: "2nd", number: "plural" } },
      { arabic: "رِزْقَكُمْ", transliteration: "rizqakum", meaning: { en: "your provision [of gratitude]", ur: "اپنا حصہ", ar: "شكركم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ز-ق" } },
      { arabic: "أَنَّكُمْ", transliteration: "annakum", meaning: { en: "that you", ur: "یہ کہ تم", ar: "أنكم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "inna" } },
      { arabic: "تُكَذِّبُونَ", transliteration: "tukadhdhibūna", meaning: { en: "deny [the provision]?", ur: "جھٹلاتے ہو؟", ar: "تكذبون" }, pos: "V", posLabel: "V", grammar: { root: "ك-ذ-ب", form: "II", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'إنّ + خبر' }
      ]
    }
  },

  83: {
    ayahNumber: 83,
    text: "فَلَوْلَا إِذَا بَلَغَتِ الْحُلْقُومَ",
    words: [
      { arabic: "فَلَوْلَا", transliteration: "falawlā", meaning: { en: "Then why not", ur: "پھر کیوں نہیں", ar: "فلولا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "exhortation" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "T", posLabel: "T", grammar: { type: "temporal" } },
      { arabic: "بَلَغَتِ", transliteration: "balaghati", meaning: { en: "it reaches", ur: "پہنچ جائے", ar: "بلغت" }, pos: "V", posLabel: "V", grammar: { root: "ب-ل-غ", gender: "feminine" } },
      { arabic: "الْحُلْقُومَ", transliteration: "al-ḥulqūma", meaning: { en: "the throat", ur: "حلق تک", ar: "الحلقوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-ل-ق" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  84: {
    ayahNumber: 84,
    text: "وَأَنتُمْ حِينَئِذٍ تَنظُرُونَ",
    words: [
      { arabic: "وَأَنتُمْ", transliteration: "wa-antum", meaning: { en: "And you", ur: "اور تم", ar: "وأنتم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "حِينَئِذٍ", transliteration: "ḥīnaʾidhin", meaning: { en: "at that time", ur: "اس وقت", ar: "حينئذ" }, pos: "T", posLabel: "T", grammar: { type: "adverb" } },
      { arabic: "تَنظُرُونَ", transliteration: "tanẓurūna", meaning: { en: "are watching", ur: "دیکھ رہے ہو", ar: "تنظرون" }, pos: "V", posLabel: "V", grammar: { root: "ن-ظ-ر", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  85: {
    ayahNumber: 85,
    text: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنكُمْ وَلَٰكِن لَّا تُبْصِرُونَ",
    words: [
      { arabic: "وَنَحْنُ", transliteration: "wanaḥnu", meaning: { en: "And We", ur: "اور ہم", ar: "ونحن" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "1st" } },
      { arabic: "أَقْرَبُ", transliteration: "aqrabu", meaning: { en: "are nearer", ur: "زیادہ قریب ہیں", ar: "أقرب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-ر-ب", type: "comparative" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "to him", ur: "اس سے", ar: "إليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "than you", ur: "تم سے", ar: "منكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "adversative" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "تُبْصِرُونَ", transliteration: "tubṣirūna", meaning: { en: "you see", ur: "تم دیکھتے", ar: "تبصرون" }, pos: "V", posLabel: "V", grammar: { root: "ب-ص-ر", form: "IV", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'نفی + فعل' }
      ]
    }
  },

  86: {
    ayahNumber: 86,
    text: "فَلَوْلَا إِن كُنتُمْ غَيْرَ مَدِينِينَ",
    words: [
      { arabic: "فَلَوْلَا", transliteration: "falawlā", meaning: { en: "Then why do you not", ur: "پھر کیوں نہیں", ar: "فلولا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "exhortation" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna", person: "2nd" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", meaning: { en: "not", ur: "نہیں", ar: "غير" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مَدِينِينَ", transliteration: "madīnīna", meaning: { en: "to be recompensed", ur: "جزا پانے والے", ar: "مجزيين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "د-ي-ن", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'كان + خبر' }
      ]
    }
  },

  87: {
    ayahNumber: 87,
    text: "تَرْجِعُونَهَا إِن كُنتُمْ صَادِقِينَ",
    words: [
      { arabic: "تَرْجِعُونَهَا", transliteration: "tarjiʿūnahā", meaning: { en: "you return it [the soul]", ur: "اسے لوٹا دو", ar: "ترجعونها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { root: "ر-ج-ع", person: "2nd", number: "plural" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna", person: "2nd" } },
      { arabic: "صَادِقِينَ", transliteration: "ṣādiqīna", meaning: { en: "truthful", ur: "سچے", ar: "صادقين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ص-د-ق", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'كان + خبر' }
      ]
    }
  },

  88: {
    ayahNumber: 88,
    text: "فَأَمَّا إِن كَانَ مِنَ الْمُقَرَّبِينَ",
    words: [
      { arabic: "فَأَمَّا", transliteration: "fa-ammā", meaning: { en: "Then as for", ur: "پس اگر", ar: "فأما" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional-detail" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "he is", ur: "وہ ہو", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْمُقَرَّبِينَ", transliteration: "al-muqarrabīna", meaning: { en: "those brought near", ur: "مقرب لوگوں", ar: "المقربين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ق-ر-ب", form: "II", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 5, label: 'كان + خبر' }
      ]
    }
  },

  89: {
    ayahNumber: 89,
    text: "فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ",
    words: [
      { arabic: "فَرَوْحٌ", transliteration: "farawḥun", meaning: { en: "Then comfort", ur: "تو آرام", ar: "فراحة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ر-و-ح" } },
      { arabic: "وَرَيْحَانٌ", transliteration: "warayḥānun", meaning: { en: "and bounty", ur: "اور خوشبو", ar: "وريحان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ر-و-ح" } },
      { arabic: "وَجَنَّتُ", transliteration: "wajannatu", meaning: { en: "and a Garden", ur: "اور جنت", ar: "وجنة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ج-ن-ن" } },
      { arabic: "نَعِيمٍ", transliteration: "naʿīmin", meaning: { en: "of Pleasure", ur: "نعمتوں کی", ar: "نعيم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ع-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  90: {
    ayahNumber: 90,
    text: "وَأَمَّا إِن كَانَ مِنْ أَصْحَابِ الْيَمِينِ",
    words: [
      { arabic: "وَأَمَّا", transliteration: "wa-ammā", meaning: { en: "And as for", ur: "اور اگر", ar: "وأما" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional-detail" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "he is", ur: "وہ ہو", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "أَصْحَابِ", transliteration: "aṣḥābi", meaning: { en: "the companions", ur: "ساتھیوں", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-ح-ب", number: "plural" } },
      { arabic: "الْيَمِينِ", transliteration: "al-yamīni", meaning: { en: "of the right", ur: "دائیں ہاتھ کے", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  91: {
    ayahNumber: 91,
    text: "فَسَلَامٌ لَّكَ مِنْ أَصْحَابِ الْيَمِينِ",
    words: [
      { arabic: "فَسَلَامٌ", transliteration: "fasalāmun", meaning: { en: "Then peace", ur: "تو سلام ہے", ar: "فسلام" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "س-ل-م" } },
      { arabic: "لَّكَ", transliteration: "laka", meaning: { en: "for you", ur: "تیرے لیے", ar: "لك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { type: "preposition+pronoun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "أَصْحَابِ", transliteration: "aṣḥābi", meaning: { en: "the companions", ur: "ساتھیوں", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-ح-ب", number: "plural" } },
      { arabic: "الْيَمِينِ", transliteration: "al-yamīni", meaning: { en: "of the right", ur: "دائیں ہاتھ کے", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  92: {
    ayahNumber: 92,
    text: "وَأَمَّا إِن كَانَ مِنَ الْمُكَذِّبِينَ الضَّالِّينَ",
    words: [
      { arabic: "وَأَمَّا", transliteration: "wa-ammā", meaning: { en: "But as for", ur: "اور اگر", ar: "وأما" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional-detail" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "he is", ur: "وہ ہو", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "الْمُكَذِّبِينَ", transliteration: "al-mukadhdhibīna", meaning: { en: "the deniers", ur: "جھٹلانے والوں", ar: "المكذبين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ك-ذ-ب", form: "II", number: "plural" } },
      { arabic: "الضَّالِّينَ", transliteration: "al-ḍāllīna", meaning: { en: "the erring", ur: "گمراہوں", ar: "الضالين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ض-ل-ل", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'عطف' }
      ]
    }
  },

  93: {
    ayahNumber: 93,
    text: "فَنُزُلٌ مِّنْ حَمِيمٍ",
    words: [
      { arabic: "فَنُزُلٌ", transliteration: "fanuzulun", meaning: { en: "Then an accommodation", ur: "تو مہمانی ہے", ar: "فنزل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ن-ز-ل" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "preposition" } },
      { arabic: "حَمِيمٍ", transliteration: "ḥamīmin", meaning: { en: "scalding water", ur: "کھولتے پانی", ar: "ماء حار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  94: {
    ayahNumber: 94,
    text: "وَتَصْلِيَةُ جَحِيمٍ",
    words: [
      { arabic: "وَتَصْلِيَةُ", transliteration: "wataṣliyatu", meaning: { en: "And burning in", ur: "اور جہنم میں داخلہ", ar: "وتصلية" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ص-ل-ي" } },
      { arabic: "جَحِيمٍ", transliteration: "jaḥīmin", meaning: { en: "Hellfire", ur: "دوزخ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  95: {
    ayahNumber: 95,
    text: "إِنَّ هَٰذَا لَهُوَ حَقُّ الْيَقِينِ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "inna" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "لَهُوَ", transliteration: "lahuwa", meaning: { en: "surely it is", ur: "یقیناً یہی", ar: "لهو" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { type: "emphasis+pronoun" } },
      { arabic: "حَقُّ", transliteration: "ḥaqqu", meaning: { en: "the truth", ur: "بالکل سچ", ar: "حق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-ق-ق" } },
      { arabic: "الْيَقِينِ", transliteration: "al-yaqīni", meaning: { en: "of certainty", ur: "یقین", ar: "اليقين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-ق-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'إنّ + اسم' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  96: {
    ayahNumber: 96,
    text: "فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ",
    words: [
      { arabic: "فَسَبِّحْ", transliteration: "fasabbiḥ", meaning: { en: "So exalt", ur: "پس پاکیزگی بیان کرو", ar: "فسبح" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "س-ب-ح", form: "II", mood: "imperative" } },
      { arabic: "بِاسْمِ", transliteration: "bi-ismi", meaning: { en: "the name of", ur: "نام کے ساتھ", ar: "باسم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "رَبِّكَ", transliteration: "Rabbika", meaning: { en: "your Lord", ur: "اپنے رب کے", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "الْعَظِيمِ", transliteration: "al-ʿaẓīmi", meaning: { en: "the Most Great", ur: "بزرگ", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ظ-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'موصوف + صفة' }
      ]
    }
  }
};

export default TREEBANK_DATA;
