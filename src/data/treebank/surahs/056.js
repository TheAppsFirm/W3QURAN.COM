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
    ]
  },

  2: {
    ayahNumber: 2,
    text: "لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ",
    words: [
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "There is not", ur: "نہیں ہے", ar: "ليس" }, pos: "V", posLabel: "V", grammar: { type: "negation-verb" } },
      { arabic: "لِوَقْعَتِهَا", transliteration: "liwaqʿatihā", meaning: { en: "for its occurrence", ur: "اس کے واقع ہونے میں", ar: "لوقوعها" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "و-ق-ع" } },
      { arabic: "كَاذِبَةٌ", transliteration: "kādhibatun", meaning: { en: "denial", ur: "جھٹلانے والا", ar: "تكذيب" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ك-ذ-ب", gender: "feminine" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "خَافِضَةٌ رَّافِعَةٌ",
    words: [
      { arabic: "خَافِضَةٌ", transliteration: "khāfiḍatun", meaning: { en: "Bringing down", ur: "نیچے گرانے والی", ar: "مذلة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "خ-ف-ض", gender: "feminine" } },
      { arabic: "رَّافِعَةٌ", transliteration: "rāfiʿatun", meaning: { en: "raising up", ur: "بلند کرنے والی", ar: "رافعة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ر-ف-ع", gender: "feminine" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "إِذَا رُجَّتِ الْأَرْضُ رَجًّا",
    words: [
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "إذا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "رُجَّتِ", transliteration: "rujjati", meaning: { en: "is shaken", ur: "ہلائی جائے گی", ar: "زلزلت" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ر-ج-ج", gender: "feminine" } },
      { arabic: "الْأَرْضُ", transliteration: "al-arḍu", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "رَجًّا", transliteration: "rajjan", meaning: { en: "with a shaking", ur: "بہت زور سے", ar: "زلزالا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun", root: "ر-ج-ج" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "وَبُسَّتِ الْجِبَالُ بَسًّا",
    words: [
      { arabic: "وَبُسَّتِ", transliteration: "wabussati", meaning: { en: "And are crumbled", ur: "اور ریزہ ریزہ ہوں گے", ar: "وفتتت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", voice: "passive", root: "ب-س-س", gender: "feminine" } },
      { arabic: "الْجِبَالُ", transliteration: "al-jibālu", meaning: { en: "the mountains", ur: "پہاڑ", ar: "الجبال" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "بَسًّا", transliteration: "bassan", meaning: { en: "with a crumbling", ur: "اچھی طرح", ar: "فتا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "verbal-noun", root: "ب-س-س" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "فَكَانَتْ هَبَاءً مُّنبَثًّا",
    words: [
      { arabic: "فَكَانَتْ", transliteration: "fakānat", meaning: { en: "And become", ur: "پھر ہوجائیں گے", ar: "فصارت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna", root: "ك-و-ن", gender: "feminine" } },
      { arabic: "هَبَاءً", transliteration: "habāʾan", meaning: { en: "dust", ur: "غبار", ar: "غبارا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مُّنبَثًّا", transliteration: "munbaththan", meaning: { en: "dispersing", ur: "پراگندہ", ar: "منتشرا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ب-ث-ث", form: "VII" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَكُنتُمْ أَزْوَاجًا ثَلَاثَةً",
    words: [
      { arabic: "وَكُنتُمْ", transliteration: "wakuntum", meaning: { en: "And you become", ur: "اور تم ہوجاؤ گے", ar: "وصرتم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna", root: "ك-و-ن", person: "2nd", number: "plural" } },
      { arabic: "أَزْوَاجًا", transliteration: "azwājan", meaning: { en: "kinds", ur: "قسمیں", ar: "أصنافا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ز-و-ج" } },
      { arabic: "ثَلَاثَةً", transliteration: "thalāthatan", meaning: { en: "three", ur: "تین", ar: "ثلاثة" }, pos: "NUM", posLabel: "NUM", grammar: { case: "accusative" } }
    ]
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
    ]
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
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَالسَّابِقُونَ السَّابِقُونَ",
    words: [
      { arabic: "وَالسَّابِقُونَ", transliteration: "was-sābiqūna", meaning: { en: "And the forerunners", ur: "اور سبقت لے جانے والے", ar: "والسابقون" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", number: "plural", root: "س-ب-ق" } },
      { arabic: "السَّابِقُونَ", transliteration: "al-sābiqūna", meaning: { en: "the forerunners", ur: "سبقت والے", ar: "السابقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "س-ب-ق", type: "emphasis" } }
    ]
  }
};

export default TREEBANK_DATA;
