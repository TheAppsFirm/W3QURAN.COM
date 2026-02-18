/**
 * Surah Ar-Rahman (The Most Merciful) - Surah 55
 * Quranic Arabic Treebank Data
 *
 * This is one of the most beloved surahs in the Quran, known for its beautiful
 * refrain "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ" (So which of the favors of your Lord would you deny?)
 */

export const TREEBANK_DATA = {
  surahId: 55,
  surahName: "Ar-Rahman",
  surahNameArabic: "الرحمن",
  totalAyahs: 78,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "الرَّحْمَٰنُ",
    words: [
      { arabic: "الرَّحْمَٰنُ", transliteration: "al-raḥmānu", meaning: { en: "The Most Merciful", ur: "رحمٰن", ar: "الرحمن" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ح-م", pattern: "faʿlān", type: "divine-name" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "عَلَّمَ الْقُرْآنَ",
    words: [
      { arabic: "عَلَّمَ", transliteration: "ʿallama", meaning: { en: "Taught", ur: "سکھایا", ar: "علّم" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ع-ل-م" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "خَلَقَ الْإِنسَانَ",
    words: [
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "Created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الْإِنسَانَ", transliteration: "al-insāna", meaning: { en: "man", ur: "انسان کو", ar: "الإنسان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ن-س" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "عَلَّمَهُ الْبَيَانَ",
    words: [
      { arabic: "عَلَّمَهُ", transliteration: "ʿallamahu", meaning: { en: "Taught him", ur: "اسے سکھایا", ar: "علمه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ع-ل-م" } },
      { arabic: "الْبَيَانَ", transliteration: "al-bayāna", meaning: { en: "eloquence", ur: "بیان", ar: "البيان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ي-ن" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
    words: [
      { arabic: "الشَّمْسُ", transliteration: "al-shamsu", meaning: { en: "The sun", ur: "سورج", ar: "الشمس" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ش-م-س" } },
      { arabic: "وَالْقَمَرُ", transliteration: "wal-qamaru", meaning: { en: "and the moon", ur: "اور چاند", ar: "والقمر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ق-م-ر" } },
      { arabic: "بِحُسْبَانٍ", transliteration: "biḥusbānin", meaning: { en: "by precise calculation", ur: "حساب سے ہیں", ar: "بحساب" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-س-ب" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ",
    words: [
      { arabic: "وَالنَّجْمُ", transliteration: "wan-najmu", meaning: { en: "And the stars", ur: "اور تارے", ar: "والنجم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ن-ج-م" } },
      { arabic: "وَالشَّجَرُ", transliteration: "wash-shajaru", meaning: { en: "and the trees", ur: "اور درخت", ar: "والشجر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ش-ج-ر" } },
      { arabic: "يَسْجُدَانِ", transliteration: "yasjudāni", meaning: { en: "prostrate", ur: "سجدہ کرتے ہیں", ar: "يسجدان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-ج-د", number: "dual" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ",
    words: [
      { arabic: "وَالسَّمَاءَ", transliteration: "was-samāʾa", meaning: { en: "And the heaven", ur: "اور آسمان کو", ar: "والسماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "رَفَعَهَا", transliteration: "rafaʿahā", meaning: { en: "He raised", ur: "بلند کیا", ar: "رفعها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ر-ف-ع" } },
      { arabic: "وَوَضَعَ", transliteration: "wawaḍaʿa", meaning: { en: "and established", ur: "اور قائم کیا", ar: "ووضع" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "و-ض-ع" } },
      { arabic: "الْمِيزَانَ", transliteration: "al-mīzāna", meaning: { en: "the balance", ur: "ترازو", ar: "الميزان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ز-ن" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "أَلَّا تَطْغَوْا فِي الْمِيزَانِ",
    words: [
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "That not", ur: "کہ نہ", ar: "أن لا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تَطْغَوْا", transliteration: "taṭghaw", meaning: { en: "you transgress", ur: "تم حد سے بڑھو", ar: "تطغوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ط-غ-ي", mood: "subjunctive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْمِيزَانِ", transliteration: "al-mīzāni", meaning: { en: "the balance", ur: "ترازو", ar: "الميزان" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ز-ن" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ",
    words: [
      { arabic: "وَأَقِيمُوا", transliteration: "wa-aqīmū", meaning: { en: "And establish", ur: "اور قائم رکھو", ar: "وأقيموا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ق-و-م", mood: "imperative" } },
      { arabic: "الْوَزْنَ", transliteration: "al-wazna", meaning: { en: "weight", ur: "تول", ar: "الوزن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ز-ن" } },
      { arabic: "بِالْقِسْطِ", transliteration: "bil-qisṭi", meaning: { en: "with justice", ur: "انصاف سے", ar: "بالعدل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ق-س-ط" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تُخْسِرُوا", transliteration: "tukhsirū", meaning: { en: "make deficient", ur: "گھٹاؤ", ar: "تنقصوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "خ-س-ر", mood: "jussive" } },
      { arabic: "الْمِيزَانَ", transliteration: "al-mīzāna", meaning: { en: "the balance", ur: "ترازو میں", ar: "الميزان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ز-ن" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ",
    words: [
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "And the earth", ur: "اور زمین کو", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَضَعَهَا", transliteration: "waḍaʿahā", meaning: { en: "He laid", ur: "بچھایا", ar: "وضعها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "و-ض-ع" } },
      { arabic: "لِلْأَنَامِ", transliteration: "lil-anāmi", meaning: { en: "for the creatures", ur: "مخلوقات کے لیے", ar: "للخلق" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ن-م" } }
    ]
  }
};

export default TREEBANK_DATA;
