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
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "عَلَّمَ الْقُرْآنَ",
    words: [
      { arabic: "عَلَّمَ", transliteration: "ʿallama", meaning: { en: "Taught", ur: "سکھایا", ar: "علّم" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ع-ل-م" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "خَلَقَ الْإِنسَانَ",
    words: [
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "Created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الْإِنسَانَ", transliteration: "al-insāna", meaning: { en: "man", ur: "انسان کو", ar: "الإنسان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ن-س" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "عَلَّمَهُ الْبَيَانَ",
    words: [
      { arabic: "عَلَّمَهُ", transliteration: "ʿallamahu", meaning: { en: "Taught him", ur: "اسے سکھایا", ar: "علمه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ع-ل-م" } },
      { arabic: "الْبَيَانَ", transliteration: "al-bayāna", meaning: { en: "eloquence", ur: "بیان", ar: "البيان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
    words: [
      { arabic: "الشَّمْسُ", transliteration: "al-shamsu", meaning: { en: "The sun", ur: "سورج", ar: "الشمس" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ش-م-س" } },
      { arabic: "وَالْقَمَرُ", transliteration: "wal-qamaru", meaning: { en: "and the moon", ur: "اور چاند", ar: "والقمر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ق-م-ر" } },
      { arabic: "بِحُسْبَانٍ", transliteration: "biḥusbānin", meaning: { en: "by precise calculation", ur: "حساب سے ہیں", ar: "بحساب" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-س-ب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ",
    words: [
      { arabic: "وَالنَّجْمُ", transliteration: "wan-najmu", meaning: { en: "And the stars", ur: "اور تارے", ar: "والنجم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ن-ج-م" } },
      { arabic: "وَالشَّجَرُ", transliteration: "wash-shajaru", meaning: { en: "and the trees", ur: "اور درخت", ar: "والشجر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ش-ج-ر" } },
      { arabic: "يَسْجُدَانِ", transliteration: "yasjudāni", meaning: { en: "prostrate", ur: "سجدہ کرتے ہیں", ar: "يسجدان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-ج-د", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ",
    words: [
      { arabic: "وَالسَّمَاءَ", transliteration: "was-samāʾa", meaning: { en: "And the heaven", ur: "اور آسمان کو", ar: "والسماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "رَفَعَهَا", transliteration: "rafaʿahā", meaning: { en: "He raised", ur: "بلند کیا", ar: "رفعها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ر-ف-ع" } },
      { arabic: "وَوَضَعَ", transliteration: "wawaḍaʿa", meaning: { en: "and established", ur: "اور قائم کیا", ar: "ووضع" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "و-ض-ع" } },
      { arabic: "الْمِيزَانَ", transliteration: "al-mīzāna", meaning: { en: "the balance", ur: "ترازو", ar: "الميزان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ز-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "أَلَّا تَطْغَوْا فِي الْمِيزَانِ",
    words: [
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "That not", ur: "کہ نہ", ar: "أن لا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تَطْغَوْا", transliteration: "taṭghaw", meaning: { en: "you transgress", ur: "تم حد سے بڑھو", ar: "تطغوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ط-غ-ي", mood: "subjunctive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْمِيزَانِ", transliteration: "al-mīzāni", meaning: { en: "the balance", ur: "ترازو", ar: "الميزان" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ز-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ",
    words: [
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "And the earth", ur: "اور زمین کو", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَضَعَهَا", transliteration: "waḍaʿahā", meaning: { en: "He laid", ur: "بچھایا", ar: "وضعها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "و-ض-ع" } },
      { arabic: "لِلْأَنَامِ", transliteration: "lil-anāmi", meaning: { en: "for the creatures", ur: "مخلوقات کے لیے", ar: "للخلق" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ن-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ",
    words: [
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "Therein is", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "فَاكِهَةٌ", transliteration: "fākihatun", meaning: { en: "fruit", ur: "پھل", ar: "فاكهة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ف-ك-ه" } },
      { arabic: "وَالنَّخْلُ", transliteration: "wan-nakhlu", meaning: { en: "and palm trees", ur: "اور کھجور کے درخت", ar: "والنخل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ن-خ-ل" } },
      { arabic: "ذَاتُ", transliteration: "dhātu", meaning: { en: "having", ur: "والی", ar: "ذات" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْأَكْمَامِ", transliteration: "al-akmāmi", meaning: { en: "sheaths", ur: "غلاف", ar: "الأكمام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ك-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ",
    words: [
      { arabic: "وَالْحَبُّ", transliteration: "wal-ḥabbu", meaning: { en: "And grain", ur: "اور اناج", ar: "والحب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ح-ب-ب" } },
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "having", ur: "والا", ar: "ذو" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْعَصْفِ", transliteration: "al-ʿaṣfi", meaning: { en: "husks", ur: "بھوسا", ar: "العصف" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ص-ف" } },
      { arabic: "وَالرَّيْحَانُ", transliteration: "war-rayḥānu", meaning: { en: "and scented plants", ur: "اور خوشبودار پھول", ar: "والريحان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ر-و-ح" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 1, to: 4, label: 'عطف' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ",
    words: [
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "He created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الْإِنسَانَ", transliteration: "al-insāna", meaning: { en: "man", ur: "انسان کو", ar: "الإنسان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ن-س" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "صَلْصَالٍ", transliteration: "ṣalṣālin", meaning: { en: "clay", ur: "کھنکھناتی مٹی", ar: "صلصال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-ل-ص-ل" } },
      { arabic: "كَالْفَخَّارِ", transliteration: "kal-fakhkhāri", meaning: { en: "like pottery", ur: "ٹھیکری کی طرح", ar: "كالفخار" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ف-خ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ",
    words: [
      { arabic: "وَخَلَقَ", transliteration: "wa-khalaqa", meaning: { en: "And He created", ur: "اور پیدا کیا", ar: "وخلق" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الْجَانَّ", transliteration: "al-jānna", meaning: { en: "the jinn", ur: "جنات کو", ar: "الجان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ن-ن" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "مَّارِجٍ", transliteration: "mārijin", meaning: { en: "a smokeless flame", ur: "بے دھوئیں کی آگ", ar: "مارج" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ر-ج" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "نَّارٍ", transliteration: "nārin", meaning: { en: "fire", ur: "آگ", ar: "نار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ",
    words: [
      { arabic: "رَبُّ", transliteration: "rabbu", meaning: { en: "Lord", ur: "رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "الْمَشْرِقَيْنِ", transliteration: "al-mashriqayni", meaning: { en: "of the two easts", ur: "دونوں مشرقوں کا", ar: "المشرقين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-ر-ق", number: "dual" } },
      { arabic: "وَرَبُّ", transliteration: "wa-rabbu", meaning: { en: "and Lord", ur: "اور رب", ar: "ورب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "الْمَغْرِبَيْنِ", transliteration: "al-maghribayni", meaning: { en: "of the two wests", ur: "دونوں مغربوں کا", ar: "المغربين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-ر-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ",
    words: [
      { arabic: "مَرَجَ", transliteration: "maraja", meaning: { en: "He released", ur: "اس نے چھوڑ دیا", ar: "مرج" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-ر-ج" } },
      { arabic: "الْبَحْرَيْنِ", transliteration: "al-baḥrayni", meaning: { en: "the two seas", ur: "دو سمندروں کو", ar: "البحرين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ح-ر", number: "dual" } },
      { arabic: "يَلْتَقِيَانِ", transliteration: "yaltaqiyāni", meaning: { en: "meeting", ur: "آپس میں ملتے ہیں", ar: "يلتقيان" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ل-ق-ي", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ",
    words: [
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "Between them", ur: "ان دونوں کے درمیان", ar: "بينهما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "adverb", number: "dual" } },
      { arabic: "بَرْزَخٌ", transliteration: "barzakhun", meaning: { en: "a barrier", ur: "ایک آڑ", ar: "برزخ" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-ر-ز-خ" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يَبْغِيَانِ", transliteration: "yabghiyāni", meaning: { en: "they transgress", ur: "وہ زیادتی کرتے", ar: "يبغيان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-غ-ي", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ",
    words: [
      { arabic: "يَخْرُجُ", transliteration: "yakhruju", meaning: { en: "There come out", ur: "نکلتے ہیں", ar: "يخرج" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ر-ج" } },
      { arabic: "مِنْهُمَا", transliteration: "minhumā", meaning: { en: "from both of them", ur: "ان دونوں سے", ar: "منهما" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { number: "dual" } },
      { arabic: "اللُّؤْلُؤُ", transliteration: "al-luʾluʾu", meaning: { en: "pearls", ur: "موتی", ar: "اللؤلؤ" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ل-ؤ-ل-ؤ" } },
      { arabic: "وَالْمَرْجَانُ", transliteration: "wal-marjānu", meaning: { en: "and coral", ur: "اور مونگا", ar: "والمرجان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "م-ر-ج" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ",
    words: [
      { arabic: "وَلَهُ", transliteration: "wa-lahu", meaning: { en: "And to Him belong", ur: "اور اسی کی ہیں", ar: "وله" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "predicate" } },
      { arabic: "الْجَوَارِ", transliteration: "al-jawāri", meaning: { en: "the ships", ur: "جہاز", ar: "الجوار" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ر-ي" } },
      { arabic: "الْمُنشَآتُ", transliteration: "al-munshaʾātu", meaning: { en: "sailing", ur: "بلند بادبانوں والے", ar: "المنشآت" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ش-أ", type: "passive_participle" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْبَحْرِ", transliteration: "al-baḥri", meaning: { en: "the sea", ur: "سمندر", ar: "البحر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ب-ح-ر" } },
      { arabic: "كَالْأَعْلَامِ", transliteration: "kal-aʿlāmi", meaning: { en: "like mountains", ur: "پہاڑوں کی طرح", ar: "كالأعلام" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "كُلُّ مَنْ عَلَيْهَا فَانٍ",
    words: [
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "Everyone", ur: "ہر ایک", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "who is", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "upon it", ur: "اس پر", ar: "عليها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "predicate" } },
      { arabic: "فَانٍ", transliteration: "fānin", meaning: { en: "will perish", ur: "فنا ہونے والا ہے", ar: "فان" }, pos: "N", posLabel: "N", grammar: { root: "ف-ن-ي", type: "active_participle" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 4, label: 'مبتدأ + خبر' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
    words: [
      { arabic: "وَيَبْقَىٰ", transliteration: "wa-yabqā", meaning: { en: "And there will remain", ur: "اور باقی رہے گی", ar: "ويبقى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ب-ق-ي" } },
      { arabic: "وَجْهُ", transliteration: "wajhu", meaning: { en: "the Face", ur: "ذات", ar: "وجه" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ج-ه" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "تیرے رب کی", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "Owner of", ur: "والا", ar: "ذو" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْجَلَالِ", transliteration: "al-jalāli", meaning: { en: "Majesty", ur: "عظمت", ar: "الجلال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ل-ل" } },
      { arabic: "وَالْإِكْرَامِ", transliteration: "wal-ikrāmi", meaning: { en: "and Honor", ur: "اور بزرگی", ar: "والإكرام" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ك-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'عطف' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ",
    words: [
      { arabic: "يَسْأَلُهُ", transliteration: "yasʾaluhu", meaning: { en: "Ask Him", ur: "اس سے مانگتے ہیں", ar: "يسأله" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "س-أ-ل" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whoever is", ur: "جو بھی ہے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "as-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "Every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "يَوْمٍ", transliteration: "yawmin", meaning: { en: "day", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ي-و-م" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "شَأْنٍ", transliteration: "shaʾnin", meaning: { en: "a matter", ur: "ایک شان", ar: "شأن" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-أ-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'عطف' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ",
    words: [
      { arabic: "سَنَفْرُغُ", transliteration: "sanafrughu", meaning: { en: "We will attend", ur: "ہم فارغ ہوں گے", ar: "سنفرغ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ر-غ", tense: "future" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "to you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "أَيُّهَ", transliteration: "ayyuha", meaning: { en: "O you", ur: "اے", ar: "أيه" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "الثَّقَلَانِ", transliteration: "ath-thaqalāni", meaning: { en: "two beings of weight", ur: "دو بھاری مخلوق", ar: "الثقلان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ث-ق-ل", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نداء + منادی' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا ۚ لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "مَعْشَرَ", transliteration: "maʿshara", meaning: { en: "assembly of", ur: "گروہ", ar: "معشر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ش-ر" } },
      { arabic: "الْجِنِّ", transliteration: "al-jinni", meaning: { en: "jinn", ur: "جنوں", ar: "الجن" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ن-ن" } },
      { arabic: "وَالْإِنسِ", transliteration: "wal-insi", meaning: { en: "and mankind", ur: "اور انسانوں کے", ar: "والإنس" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "أ-ن-س" } },
      { arabic: "إِنِ", transliteration: "ini", meaning: { en: "If", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "اسْتَطَعْتُمْ", transliteration: "istaṭaʿtum", meaning: { en: "you are able", ur: "تم سے ہو سکے", ar: "استطعتم" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ط-و-ع" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "to", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive" } },
      { arabic: "تَنفُذُوا", transliteration: "tanfudhū", meaning: { en: "pass beyond", ur: "نکل جاؤ", ar: "تنفذوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ف-ذ", mood: "subjunctive" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أَقْطَارِ", transliteration: "aqṭāri", meaning: { en: "the regions", ur: "کناروں", ar: "أقطار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-ط-ر" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "as-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں کے", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "فَانفُذُوا", transliteration: "fanfudhū", meaning: { en: "then pass", ur: "تو نکل جاؤ", ar: "فانفذوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ن-ف-ذ", mood: "imperative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "تَنفُذُونَ", transliteration: "tanfudhūna", meaning: { en: "you will pass", ur: "نکل سکتے", ar: "تنفذون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ف-ذ" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "بِسُلْطَانٍ", transliteration: "bisulṭānin", meaning: { en: "with authority", ur: "زور کے ساتھ", ar: "بسلطان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-ل-ط" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نداء + منادی' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'نفی + فعل' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ",
    words: [
      { arabic: "يُرْسَلُ", transliteration: "yursalu", meaning: { en: "There will be sent", ur: "بھیجی جائے گی", ar: "يرسل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل", voice: "passive" } },
      { arabic: "عَلَيْكُمَا", transliteration: "ʿalaykumā", meaning: { en: "upon you", ur: "تم پر", ar: "عليكما" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { number: "dual" } },
      { arabic: "شُوَاظٌ", transliteration: "shuwāẓun", meaning: { en: "a flame", ur: "آگ کا شعلہ", ar: "شواظ" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ش-و-ظ" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "نَّارٍ", transliteration: "nārin", meaning: { en: "fire", ur: "آگ", ar: "نار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ر" } },
      { arabic: "وَنُحَاسٌ", transliteration: "wa-nuḥāsun", meaning: { en: "and smoke", ur: "اور تانبہ", ar: "ونحاس" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ن-ح-س" } },
      { arabic: "فَلَا", transliteration: "fa-lā", meaning: { en: "then not", ur: "پس نہیں", ar: "فلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "تَنتَصِرَانِ", transliteration: "tantaṣirāni", meaning: { en: "you will be helped", ur: "تمہاری مدد ہوگی", ar: "تنتصران" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ن-ص-ر", number: "dual" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 3, to: 6, label: 'عطف' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  37: {
    ayahNumber: 37,
    text: "فَإِذَا انشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً كَالدِّهَانِ",
    words: [
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "And when", ur: "پھر جب", ar: "فإذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "انشَقَّتِ", transliteration: "inshaqqati", meaning: { en: "is split open", ur: "پھٹ جائے گا", ar: "انشقت" }, pos: "V", posLabel: "V", grammar: { form: "VII", root: "ش-ق-ق" } },
      { arabic: "السَّمَاءُ", transliteration: "as-samāʾu", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-م-و" } },
      { arabic: "فَكَانَتْ", transliteration: "fa-kānat", meaning: { en: "and becomes", ur: "پھر ہو جائے", ar: "فكانت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { root: "ك-و-ن" } },
      { arabic: "وَرْدَةً", transliteration: "wardatan", meaning: { en: "rose-colored", ur: "گلاب جیسا", ar: "وردة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ر-د" } },
      { arabic: "كَالدِّهَانِ", transliteration: "kad-dihāni", meaning: { en: "like oil", ur: "تیل کی طرح", ar: "كالدهان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "د-ه-ن" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }, { from: 4, to: 5, label: 'كان + خبر' }] }
  },

  38: {
    ayahNumber: 38,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  39: {
    ayahNumber: 39,
    text: "فَيَوْمَئِذٍ لَّا يُسْأَلُ عَن ذَنبِهِ إِنسٌ وَلَا جَانٌّ",
    words: [
      { arabic: "فَيَوْمَئِذٍ", transliteration: "fa-yawmaʾidhin", meaning: { en: "Then on that Day", ur: "پھر اس دن", ar: "فيومئذ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { root: "ي-و-م" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يُسْأَلُ", transliteration: "yusʾalu", meaning: { en: "will be asked", ur: "پوچھا جائے گا", ar: "يسأل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-أ-ل", voice: "passive" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "about", ur: "بارے میں", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "ذَنبِهِ", transliteration: "dhanbihi", meaning: { en: "his sin", ur: "اس کے گناہ", ar: "ذنبه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ذ-ن-ب" } },
      { arabic: "إِنسٌ", transliteration: "insun", meaning: { en: "any man", ur: "کوئی انسان", ar: "إنس" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ن-س" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "or", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "جَانٌّ", transliteration: "jānnun", meaning: { en: "jinn", ur: "جن", ar: "جان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ن-ن" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'نفی + فعل' }, { from: 4, to: 5, label: 'جار + مجرور' }, { from: 6, to: 8, label: 'عطف' }] }
  },

  40: {
    ayahNumber: 40,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  41: {
    ayahNumber: 41,
    text: "يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ",
    words: [
      { arabic: "يُعْرَفُ", transliteration: "yuʿrafu", meaning: { en: "Will be recognized", ur: "پہچانے جائیں گے", ar: "يعرف" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ر-ف", voice: "passive" } },
      { arabic: "الْمُجْرِمُونَ", transliteration: "al-mujrimūna", meaning: { en: "the criminals", ur: "مجرم", ar: "المجرمون" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ر-م" } },
      { arabic: "بِسِيمَاهُمْ", transliteration: "bisīmāhum", meaning: { en: "by their marks", ur: "اپنی نشانیوں سے", ar: "بسيماهم" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "و-س-م" } },
      { arabic: "فَيُؤْخَذُ", transliteration: "fa-yuʾkhadhu", meaning: { en: "and will be seized", ur: "پھر پکڑے جائیں گے", ar: "فيؤخذ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "أ-خ-ذ", voice: "passive" } },
      { arabic: "بِالنَّوَاصِي", transliteration: "bin-nawāṣī", meaning: { en: "by the forelocks", ur: "پیشانیوں سے", ar: "بالنواصي" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ن-ص-و" } },
      { arabic: "وَالْأَقْدَامِ", transliteration: "wal-aqdāmi", meaning: { en: "and the feet", ur: "اور پاؤں", ar: "والأقدام" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ق-د-م" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 5, to: 6, label: 'عطف' }] }
  },

  42: {
    ayahNumber: 42,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  43: {
    ayahNumber: 43,
    text: "هَٰذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ",
    words: [
      { arabic: "هَٰذِهِ", transliteration: "hādhihi", meaning: { en: "This is", ur: "یہ ہے", ar: "هذه" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "جَهَنَّمُ", transliteration: "jahannamu", meaning: { en: "Hell", ur: "جہنم", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ه-ن-م" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "which", ur: "جس کو", ar: "التي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يُكَذِّبُ", transliteration: "yukadhdhibu", meaning: { en: "deny", ur: "جھٹلاتے ہیں", ar: "يكذب" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "it", ur: "اس کو", ar: "بها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "الْمُجْرِمُونَ", transliteration: "al-mujrimūna", meaning: { en: "the criminals", ur: "مجرم", ar: "المجرمون" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ر-م" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'مبتدأ + خبر' }, { from: 4, to: 6, label: 'فعل + فاعل' }] }
  },

  44: {
    ayahNumber: 44,
    text: "يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ آنٍ",
    words: [
      { arabic: "يَطُوفُونَ", transliteration: "yaṭūfūna", meaning: { en: "They will go around", ur: "وہ چکر لگائیں گے", ar: "يطوفون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ط-و-ف" } },
      { arabic: "بَيْنَهَا", transliteration: "baynahā", meaning: { en: "between it", ur: "اس کے درمیان", ar: "بينها" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "adverb" } },
      { arabic: "وَبَيْنَ", transliteration: "wa-bayna", meaning: { en: "and between", ur: "اور درمیان", ar: "وبين" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "adverb" } },
      { arabic: "حَمِيمٍ", transliteration: "ḥamīmin", meaning: { en: "scalding water", ur: "کھولتے ہوئے پانی", ar: "حميم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-م-م" } },
      { arabic: "آنٍ", transliteration: "ānin", meaning: { en: "boiling", ur: "انتہائی گرم", ar: "آن" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-ن-ي" } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'موصوف + صفت' }] }
  },

  45: {
    ayahNumber: 45,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  46: {
    ayahNumber: 46,
    text: "وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ",
    words: [
      { arabic: "وَلِمَنْ", transliteration: "wa-li-man", meaning: { en: "And for he who", ur: "اور جو شخص", ar: "ولمن" }, pos: "CONJ+P+REL", posLabel: "CONJ+P+REL", grammar: { type: "relative" } },
      { arabic: "خَافَ", transliteration: "khāfa", meaning: { en: "feared", ur: "ڈرتا ہے", ar: "خاف" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-و-ف" } },
      { arabic: "مَقَامَ", transliteration: "maqāma", meaning: { en: "the standing", ur: "مقام سے", ar: "مقام" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-م" } },
      { arabic: "رَبِّهِ", transliteration: "rabbihi", meaning: { en: "of his Lord", ur: "اپنے رب کے", ar: "ربه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "جَنَّتَانِ", transliteration: "jannatāni", meaning: { en: "two gardens", ur: "دو جنتیں", ar: "جنتان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ن-ن", number: "dual" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'فعل + مفعول به' }, { from: 3, to: 4, label: 'مضاف + مضاف إليه' }] }
  },

  47: {
    ayahNumber: 47,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  48: {
    ayahNumber: 48,
    text: "ذَوَاتَا أَفْنَانٍ",
    words: [
      { arabic: "ذَوَاتَا", transliteration: "dhawātā", meaning: { en: "Having", ur: "والی", ar: "ذواتا" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "dual" } },
      { arabic: "أَفْنَانٍ", transliteration: "afnānin", meaning: { en: "spreading branches", ur: "شاخیں", ar: "أفنان" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ف-ن-ن" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'مضاف + مضاف إليه' }] }
  },

  49: {
    ayahNumber: 49,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  50: {
    ayahNumber: 50,
    text: "فِيهِمَا عَيْنَانِ تَجْرِيَانِ",
    words: [
      { arabic: "فِيهِمَا", transliteration: "fīhimā", meaning: { en: "In both of them", ur: "ان دونوں میں", ar: "فيهما" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { number: "dual" } },
      { arabic: "عَيْنَانِ", transliteration: "ʿaynāni", meaning: { en: "two springs", ur: "دو چشمے", ar: "عينان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ي-ن", number: "dual" } },
      { arabic: "تَجْرِيَانِ", transliteration: "tajriyāni", meaning: { en: "flowing", ur: "بہتے ہوئے", ar: "تجريان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ر-ي", number: "dual" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'موصوف + صفت' }] }
  },

  51: {
    ayahNumber: 51,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  52: {
    ayahNumber: 52,
    text: "فِيهِمَا مِن كُلِّ فَاكِهَةٍ زَوْجَانِ",
    words: [
      { arabic: "فِيهِمَا", transliteration: "fīhimā", meaning: { en: "In both of them", ur: "ان دونوں میں", ar: "فيهما" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { number: "dual" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَاكِهَةٍ", transliteration: "fākihatin", meaning: { en: "fruit", ur: "پھل", ar: "فاكهة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ف-ك-ه" } },
      { arabic: "زَوْجَانِ", transliteration: "zawjāni", meaning: { en: "two kinds", ur: "دو قسمیں", ar: "زوجان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ز-و-ج", number: "dual" } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'مضاف + مضاف إليه' }] }
  },

  53: {
    ayahNumber: 53,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  54: {
    ayahNumber: 54,
    text: "مُتَّكِئِينَ عَلَىٰ فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ ۚ وَجَنَى الْجَنَّتَيْنِ دَانٍ",
    words: [
      { arabic: "مُتَّكِئِينَ", transliteration: "muttakiʾīna", meaning: { en: "Reclining", ur: "ٹیک لگائے ہوئے", ar: "متكئين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ك-أ", type: "active_participle" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "فُرُشٍ", transliteration: "furushin", meaning: { en: "beds", ur: "بستروں", ar: "فرش" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ف-ر-ش" } },
      { arabic: "بَطَائِنُهَا", transliteration: "baṭāʾinuhā", meaning: { en: "whose linings are", ur: "جن کے استر", ar: "بطائنها" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ب-ط-ن" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "إِسْتَبْرَقٍ", transliteration: "istabraqin", meaning: { en: "brocade", ur: "دیبائے خاص", ar: "إستبرق" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَجَنَى", transliteration: "wa-janā", meaning: { en: "And the fruit", ur: "اور پھل", ar: "وجنى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { root: "ج-ن-ي" } },
      { arabic: "الْجَنَّتَيْنِ", transliteration: "al-jannatayni", meaning: { en: "of the two gardens", ur: "دونوں جنتوں کے", ar: "الجنتين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ن-ن", number: "dual" } },
      { arabic: "دَانٍ", transliteration: "dānin", meaning: { en: "hanging low", ur: "قریب ہے", ar: "دان" }, pos: "N", posLabel: "N", grammar: { root: "د-ن-و", type: "active_participle" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 5, to: 6, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'مضاف + مضاف إليه' }] }
  },

  55: {
    ayahNumber: 55,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  56: {
    ayahNumber: 56,
    text: "فِيهِنَّ قَاصِرَاتُ الطَّرْفِ لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ",
    words: [
      { arabic: "فِيهِنَّ", transliteration: "fīhinna", meaning: { en: "In them", ur: "ان میں", ar: "فيهن" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "قَاصِرَاتُ", transliteration: "qāṣirātu", meaning: { en: "limiting [their glances]", ur: "نگاہیں نیچی رکھنے والیاں", ar: "قاصرات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-ص-ر", type: "active_participle" } },
      { arabic: "الطَّرْفِ", transliteration: "aṭ-ṭarfi", meaning: { en: "of glances", ur: "نظر کی", ar: "الطرف" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ط-ر-ف" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive" } },
      { arabic: "يَطْمِثْهُنَّ", transliteration: "yaṭmithhunna", meaning: { en: "touched them", ur: "چھوا ہو", ar: "يطمثهن" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ط-م-ث" } },
      { arabic: "إِنسٌ", transliteration: "insun", meaning: { en: "any man", ur: "کوئی انسان", ar: "إنس" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ن-س" } },
      { arabic: "قَبْلَهُمْ", transliteration: "qablahum", meaning: { en: "before them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "adverb" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "or", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "جَانٌّ", transliteration: "jānnun", meaning: { en: "jinn", ur: "جن نے", ar: "جان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ن-ن" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'مضاف + مضاف إليه' }, { from: 4, to: 5, label: 'نفی + فعل' }, { from: 6, to: 9, label: 'عطف' }] }
  },

  57: {
    ayahNumber: 57,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  58: {
    ayahNumber: 58,
    text: "كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ",
    words: [
      { arabic: "كَأَنَّهُنَّ", transliteration: "kaʾannahunna", meaning: { en: "As if they were", ur: "گویا وہ", ar: "كأنهن" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "comparison" } },
      { arabic: "الْيَاقُوتُ", transliteration: "al-yāqūtu", meaning: { en: "rubies", ur: "یاقوت", ar: "الياقوت" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَالْمَرْجَانُ", transliteration: "wal-marjānu", meaning: { en: "and coral", ur: "اور مونگا", ar: "والمرجان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "م-ر-ج" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'عطف' }] }
  },

  59: {
    ayahNumber: 59,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  60: {
    ayahNumber: 60,
    text: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ",
    words: [
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Is", ur: "کیا", ar: "هل" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { type: "interrogative" } },
      { arabic: "جَزَاءُ", transliteration: "jazāʾu", meaning: { en: "the reward", ur: "بدلہ", ar: "جزاء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ز-ي" } },
      { arabic: "الْإِحْسَانِ", transliteration: "al-iḥsāni", meaning: { en: "for good", ur: "نیکی کا", ar: "الإحسان" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-س-ن" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "سوائے", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "الْإِحْسَانُ", transliteration: "al-iḥsānu", meaning: { en: "good", ur: "نیکی", ar: "الإحسان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-س-ن" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  61: {
    ayahNumber: 61,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  62: {
    ayahNumber: 62,
    text: "وَمِن دُونِهِمَا جَنَّتَانِ",
    words: [
      { arabic: "وَمِن", transliteration: "wa-min", meaning: { en: "And below", ur: "اور علاوہ", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "preposition" } },
      { arabic: "دُونِهِمَا", transliteration: "dūnihimā", meaning: { en: "them both", ur: "ان دونوں کے", ar: "دونهما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "dual" } },
      { arabic: "جَنَّتَانِ", transliteration: "jannatāni", meaning: { en: "two gardens", ur: "دو اور جنتیں", ar: "جنتان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ن-ن", number: "dual" } }
    ],
    structure: { relationships: [] }
  },

  63: {
    ayahNumber: 63,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  64: {
    ayahNumber: 64,
    text: "مُدْهَامَّتَانِ",
    words: [
      { arabic: "مُدْهَامَّتَانِ", transliteration: "mudhāmmatāni", meaning: { en: "Dark green", ur: "سیاہی مائل سبز", ar: "مدهامتان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "د-ه-م", number: "dual" } }
    ],
    structure: { relationships: [] }
  },

  65: {
    ayahNumber: 65,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  66: {
    ayahNumber: 66,
    text: "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ",
    words: [
      { arabic: "فِيهِمَا", transliteration: "fīhimā", meaning: { en: "In both of them", ur: "ان دونوں میں", ar: "فيهما" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { number: "dual" } },
      { arabic: "عَيْنَانِ", transliteration: "ʿaynāni", meaning: { en: "two springs", ur: "دو چشمے", ar: "عينان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ي-ن", number: "dual" } },
      { arabic: "نَضَّاخَتَانِ", transliteration: "naḍḍākhatāni", meaning: { en: "gushing", ur: "ابلتے ہوئے", ar: "نضاختان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ن-ض-خ", number: "dual" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'موصوف + صفت' }] }
  },

  67: {
    ayahNumber: 67,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  68: {
    ayahNumber: 68,
    text: "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ",
    words: [
      { arabic: "فِيهِمَا", transliteration: "fīhimā", meaning: { en: "In both of them", ur: "ان دونوں میں", ar: "فيهما" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { number: "dual" } },
      { arabic: "فَاكِهَةٌ", transliteration: "fākihatun", meaning: { en: "fruit", ur: "میوے", ar: "فاكهة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ف-ك-ه" } },
      { arabic: "وَنَخْلٌ", transliteration: "wa-nakhlun", meaning: { en: "and palm trees", ur: "اور کھجوریں", ar: "ونخل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ن-خ-ل" } },
      { arabic: "وَرُمَّانٌ", transliteration: "wa-rummānun", meaning: { en: "and pomegranates", ur: "اور انار", ar: "ورمان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ر-م-ن" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'عطف' }, { from: 3, to: 4, label: 'عطف' }] }
  },

  69: {
    ayahNumber: 69,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  70: {
    ayahNumber: 70,
    text: "فِيهِنَّ خَيْرَاتٌ حِسَانٌ",
    words: [
      { arabic: "فِيهِنَّ", transliteration: "fīhinna", meaning: { en: "In them are", ur: "ان میں", ar: "فيهن" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "خَيْرَاتٌ", transliteration: "khayrātun", meaning: { en: "good ones", ur: "نیک خو", ar: "خيرات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "خ-ي-ر" } },
      { arabic: "حِسَانٌ", transliteration: "ḥisānun", meaning: { en: "beautiful", ur: "خوبصورت", ar: "حسان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-س-ن" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'موصوف + صفت' }] }
  },

  71: {
    ayahNumber: 71,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  72: {
    ayahNumber: 72,
    text: "حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ",
    words: [
      { arabic: "حُورٌ", transliteration: "ḥūrun", meaning: { en: "Fair ones", ur: "حوریں", ar: "حور" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-و-ر" } },
      { arabic: "مَّقْصُورَاتٌ", transliteration: "maqṣūrātun", meaning: { en: "sheltered", ur: "پردے میں رکھی ہوئی", ar: "مقصورات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-ص-ر", type: "passive_participle" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْخِيَامِ", transliteration: "al-khiyāmi", meaning: { en: "pavilions", ur: "خیموں", ar: "الخيام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ي-م" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'موصوف + صفت' }, { from: 3, to: 4, label: 'جار + مجرور' }] }
  },

  73: {
    ayahNumber: 73,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  74: {
    ayahNumber: 74,
    text: "لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ",
    words: [
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "Not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive" } },
      { arabic: "يَطْمِثْهُنَّ", transliteration: "yaṭmithhunna", meaning: { en: "touched them", ur: "چھوا ہو", ar: "يطمثهن" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ط-م-ث" } },
      { arabic: "إِنسٌ", transliteration: "insun", meaning: { en: "any man", ur: "کوئی انسان", ar: "إنس" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ن-س" } },
      { arabic: "قَبْلَهُمْ", transliteration: "qablahum", meaning: { en: "before them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "adverb" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "or", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "جَانٌّ", transliteration: "jānnun", meaning: { en: "jinn", ur: "جن نے", ar: "جان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ن-ن" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'نفی + فعل' }, { from: 3, to: 6, label: 'عطف' }] }
  },

  75: {
    ayahNumber: 75,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  76: {
    ayahNumber: 76,
    text: "مُتَّكِئِينَ عَلَىٰ رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ",
    words: [
      { arabic: "مُتَّكِئِينَ", transliteration: "muttakiʾīna", meaning: { en: "Reclining", ur: "ٹیک لگائے ہوئے", ar: "متكئين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ك-أ", type: "active_participle" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "رَفْرَفٍ", transliteration: "rafrafin", meaning: { en: "cushions", ur: "مسندوں", ar: "رفرف" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ف-ر-ف" } },
      { arabic: "خُضْرٍ", transliteration: "khuḍrin", meaning: { en: "green", ur: "سبز", ar: "خضر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "خ-ض-ر" } },
      { arabic: "وَعَبْقَرِيٍّ", transliteration: "wa-ʿabqariyyin", meaning: { en: "and fine carpets", ur: "اور عمدہ قالینوں", ar: "وعبقري" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "حِسَانٍ", transliteration: "ḥisānin", meaning: { en: "beautiful", ur: "خوبصورت", ar: "حسان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ح-س-ن" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 3, to: 4, label: 'موصوف + صفت' }, { from: 5, to: 6, label: 'موصوف + صفت' }] }
  },

  77: {
    ayahNumber: 77,
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", meaning: { en: "So which of", ur: "پس کس کس", ar: "فبأي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors", ur: "نعمتوں کو", ar: "آلاء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-و" } },
      { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", meaning: { en: "of your Lord", ur: "اپنے رب کی", ar: "ربكما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب", number: "dual" } },
      { arabic: "تُكَذِّبَانِ", transliteration: "tukadhdhibāni", meaning: { en: "would you deny", ur: "تم جھٹلاؤ گے", ar: "تكذبان" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", number: "dual" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }] }
  },

  78: {
    ayahNumber: 78,
    text: "تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ",
    words: [
      { arabic: "تَبَارَكَ", transliteration: "tabāraka", meaning: { en: "Blessed is", ur: "بڑی برکت والا ہے", ar: "تبارك" }, pos: "V", posLabel: "V", grammar: { form: "VI", root: "ب-ر-ك" } },
      { arabic: "اسْمُ", transliteration: "ismu", meaning: { en: "the name", ur: "نام", ar: "اسم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-م-و" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "تیرے رب کا", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "ذِي", transliteration: "dhī", meaning: { en: "Owner of", ur: "والا", ar: "ذي" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْجَلَالِ", transliteration: "al-jalāli", meaning: { en: "Majesty", ur: "عظمت", ar: "الجلال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ل-ل" } },
      { arabic: "وَالْإِكْرَامِ", transliteration: "wal-ikrāmi", meaning: { en: "and Honor", ur: "اور بزرگی", ar: "والإكرام" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ك-ر-م" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }, { from: 4, to: 5, label: 'مضاف + مضاف إليه' }, { from: 5, to: 6, label: 'عطف' }] }
  }
};

export default TREEBANK_DATA;
