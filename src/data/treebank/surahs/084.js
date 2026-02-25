/**
 * Surah Al-Inshiqaq (84) - Quranic Arabic Treebank
 * The Splitting
 * Total Ayahs: 25
 * Theme: Sky splits, earth flattened, records given, stages of existence
 */

export const TREEBANK_DATA = {
  surahId: 84,
  surahName: "Al-Inshiqaq",
  surahNameArabic: "الانشقاق",
  totalAyahs: 25,
  revelationType: "Makki",
  theme: "Cosmic upheaval on Judgment Day; two groups receiving records",

  1: {
    ayahNumber: 1,
    arabic: "إِذَا السَّمَاءُ انشَقَّتْ",
    words: [
      { position: 1, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 2, arabic: "السَّمَاءُ", transliteration: "al-samā'u", root: "س م و", meaning: { en: "the sky", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "انشَقَّتْ", transliteration: "inshaqqat", root: "ش ق ق", meaning: { en: "splits apart", ur: "پھٹ جائے گا", ar: "تَفَتَّقَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VII", aspect: "perfect" }, advanced: { rootFamily: ["شَقّ", "انشقاق", "مَشقوق"], linguisticMiracle: "Form VII - internal breaking, sky splits from within" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ",
    words: [
      { position: 1, arabic: "وَأَذِنَتْ", transliteration: "wa-adhinat", root: "أ ذ ن", meaning: { en: "And has listened", ur: "اور کان لگایا", ar: "وَاستَمَعَت" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Sky 'listens' to Allah's command - instant obedience" } },
      { position: 2, arabic: "لِرَبِّهَا", transliteration: "li-rabbihā", meaning: { en: "to its Lord", ur: "اپنے رب کا", ar: "لِمالِكِها" }, pos: "PREP+N+PRON", posLabel: "PREP+N+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "وَحُقَّتْ", transliteration: "wa-ḥuqqat", root: "ح ق ق", meaning: { en: "and was obligated", ur: "اور واجب تھا", ar: "وَوَجَبَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" }, advanced: { linguisticMiracle: "Sky's obedience is its rightful duty" } }
    ],
    structure: {
      relationships: [],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَإِذَا الْأَرْضُ مُدَّتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْأَرْضُ", transliteration: "al-arḍu", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "مُدَّتْ", transliteration: "muddat", root: "م د د", meaning: { en: "is stretched", ur: "پھیلا دی جائے", ar: "بُسِطَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" }, advanced: { linguisticMiracle: "Earth flattened - mountains removed, valleys filled" } }
    ],
    structure: {
      relationships: [],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ",
    words: [
      { position: 1, arabic: "وَأَلْقَتْ", transliteration: "wa-alqat", root: "ل ق ي", meaning: { en: "And has cast out", ur: "اور نکال ڈالے", ar: "وَرَمَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 2, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 3, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "within it", ur: "اس میں ہے", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "وَتَخَلَّتْ", transliteration: "wa-takhallat", root: "خ ل و", meaning: { en: "and relinquished", ur: "اور خالی ہو گئی", ar: "وَفَرَّغَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" }, advanced: { linguisticMiracle: "Earth empties itself of dead, treasures - nothing remains hidden" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ",
    words: [
      { position: 1, arabic: "وَأَذِنَتْ", transliteration: "wa-adhinat", root: "أ ذ ن", meaning: { en: "And has listened", ur: "اور کان لگایا", ar: "وَاستَمَعَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "لِرَبِّهَا", transliteration: "li-rabbihā", meaning: { en: "to its Lord", ur: "اپنے رب کا حکم", ar: "لِمالِكِها" }, pos: "PREP+N+PRON", posLabel: "PREP+N+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "وَحُقَّتْ", transliteration: "wa-ḥuqqat", root: "ح ق ق", meaning: { en: "as it must", ur: "اور واجب تھا", ar: "وَوَجَبَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Repeated for sky (v2) and earth (v5) - cosmic obedience" } }
    ],
    structure: {
      relationships: [],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ",
    words: [
      { position: 1, arabic: "يَا أَيُّهَا", transliteration: "yā ayyuhā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammarRole: "vocative" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "al-insānu", root: "أ ن س", meaning: { en: "mankind", ur: "انسان", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "vocative" },
      { position: 3, arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "indeed you", ur: "بے شک تو", ar: "إِنَّكَ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 4, arabic: "كَادِحٌ", transliteration: "kādiḥun", root: "ك د ح", meaning: { en: "are laboring", ur: "مشقت کر رہا ہے", ar: "ساعٍ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "فَاعِل" }, advanced: { rootFamily: ["كَدح", "كادِح"], linguisticMiracle: "Kadh = toiling until skin is scraped. Life is struggle" } },
      { position: 5, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "toward", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 6, arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "اپنے رب", ar: "مالِكِكَ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 7, arabic: "كَدْحًا", transliteration: "kadḥan", root: "ك د ح", meaning: { en: "with toil", ur: "مشقت کرتے", ar: "سَعياً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" },
      { position: 8, arabic: "فَمُلَاقِيهِ", transliteration: "famulāqīhi", root: "ل ق ي", meaning: { en: "then meeting Him", ur: "پھر اس سے ملنے والا ہے", ar: "فَمُقابِلُهُ" }, pos: "ADJ+PRON", posLabel: "ADJ+PRON", grammarRole: "predicate", features: { pattern: "مُفَاعِل" }, advanced: { linguisticMiracle: "Inevitable meeting - no escape from Allah" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نداء' },
      { from: 5, to: 6, label: 'جار + مجرور' },
      { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ",
    words: [
      { position: 1, arabic: "فَأَمَّا", transliteration: "fa-ammā", meaning: { en: "As for", ur: "پس جس کو", ar: "فَأَمّا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "مَنْ", transliteration: "man", meaning: { en: "whoever", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "أُوتِيَ", transliteration: "ūtiya", root: "أ ت ي", meaning: { en: "is given", ur: "دیا جائے", ar: "أُعطِيَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 4, arabic: "كِتَابَهُ", transliteration: "kitābahu", root: "ك ت ب", meaning: { en: "his record", ur: "اس کا نامہ", ar: "صَحيفَتَهُ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "object" },
      { position: 5, arabic: "بِيَمِينِهِ", transliteration: "bi-yamīnihi", root: "ي م ن", meaning: { en: "in his right hand", ur: "اس کے دائیں ہاتھ میں", ar: "بِيَدِهِ اليُمنى" }, pos: "PREP+N+PRON", posLabel: "PREP+N+PRON", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Right hand = honor and blessing" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 3, to: 4, label: 'فعل + مفعول به' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا",
    words: [
      { position: 1, arabic: "فَسَوْفَ", transliteration: "fasawfa", meaning: { en: "Then he will", ur: "تو جلد", ar: "فَسَيُ" }, pos: "CONJ+FUT", posLabel: "CONJ+FUT", grammarRole: "future particle" },
      { position: 2, arabic: "يُحَاسَبُ", transliteration: "yuḥāsabu", root: "ح س ب", meaning: { en: "be judged", ur: "حساب لیا جائے گا", ar: "يُسأَلُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "III", voice: "passive" } },
      { position: 3, arabic: "حِسَابًا", transliteration: "ḥisāban", root: "ح س ب", meaning: { en: "a reckoning", ur: "حساب", ar: "مُحاسَبَةً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" },
      { position: 4, arabic: "يَسِيرًا", transliteration: "yasīran", root: "ي س ر", meaning: { en: "easy", ur: "آسان", ar: "سَهلاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Easy reckoning = quick presentation, no interrogation" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "وَيَنقَلِبُ إِلَىٰ أَهْلِهِ مَسْرُورًا",
    words: [
      { position: 1, arabic: "وَيَنقَلِبُ", transliteration: "wa-yanqalibu", root: "ق ل ب", meaning: { en: "And will return", ur: "اور لوٹے گا", ar: "وَيَرجِعُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VII" } },
      { position: 2, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "أَهْلِهِ", transliteration: "ahlihi", root: "أ ه ل", meaning: { en: "his people", ur: "اپنے گھر والوں", ar: "أَسرَتِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "مَسْرُورًا", transliteration: "masrūran", root: "س ر ر", meaning: { en: "joyful", ur: "خوش خوش", ar: "فَرِحاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "adverb of state", features: { pattern: "مَفْعُول" }, advanced: { linguisticMiracle: "Returns to family in Paradise with joy" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ",
    words: [
      { position: 1, arabic: "وَأَمَّا", transliteration: "wa-ammā", meaning: { en: "But as for", ur: "اور جس کو", ar: "وَأَمّا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "مَنْ", transliteration: "man", meaning: { en: "whoever", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "أُوتِيَ", transliteration: "ūtiya", root: "أ ت ي", meaning: { en: "is given", ur: "دیا جائے", ar: "أُعطِيَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 4, arabic: "كِتَابَهُ", transliteration: "kitābahu", meaning: { en: "his record", ur: "اس کا نامہ", ar: "صَحيفَتَهُ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "object" },
      { position: 5, arabic: "وَرَاءَ", transliteration: "warā'a", root: "و ر ي", meaning: { en: "behind", ur: "پیچھے", ar: "خَلفَ" }, pos: "N", posLabel: "N", grammarRole: "preposition" },
      { position: 6, arabic: "ظَهْرِهِ", transliteration: "ẓahrihi", root: "ظ ه ر", meaning: { en: "his back", ur: "اس کی پیٹھ کے", ar: "ظَهرِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Behind back = shame, trying to hide sins that are exposed" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 3, to: 4, label: 'فعل + مفعول به' }
      ],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "فَسَوْفَ يَدْعُو ثُبُورًا",
    words: [
      { position: 1, arabic: "فَسَوْفَ", transliteration: "fasawfa", meaning: { en: "He will", ur: "تو جلد", ar: "فَسَيُ" }, pos: "CONJ+FUT", posLabel: "CONJ+FUT", grammarRole: "future particle" },
      { position: 2, arabic: "يَدْعُو", transliteration: "yadʿū", root: "د ع و", meaning: { en: "cry out for", ur: "پکارے گا", ar: "يُنادي" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "ثُبُورًا", transliteration: "thubūran", root: "ث ب ر", meaning: { en: "destruction", ur: "ہلاکت", ar: "هَلاكاً" }, pos: "N", posLabel: "N", grammarRole: "object", advanced: { linguisticMiracle: "Calls for annihilation - wishes he could cease to exist" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "وَيَصْلَىٰ سَعِيرًا",
    words: [
      { position: 1, arabic: "وَيَصْلَىٰ", transliteration: "wa-yaṣlā", root: "ص ل ي", meaning: { en: "And will burn in", ur: "اور داخل ہوگا", ar: "وَيَدخُلُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "سَعِيرًا", transliteration: "saʿīran", root: "س ع ر", meaning: { en: "Blazing Fire", ur: "بھڑکتی آگ میں", ar: "ناراً مُشتَعِلَةً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "إِنَّهُ كَانَ فِي أَهْلِهِ مَسْرُورًا",
    words: [
      { position: 1, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed he", ur: "بے شک وہ", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "كَانَ", transliteration: "kāna", meaning: { en: "had been", ur: "تھا", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "فِي", transliteration: "fī", meaning: { en: "among", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "أَهْلِهِ", transliteration: "ahlihi", meaning: { en: "his people", ur: "اپنے گھر والوں", ar: "أَسرَتِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "مَسْرُورًا", transliteration: "masrūran", meaning: { en: "joyful", ur: "خوش", ar: "فَرِحاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "adverb of state", advanced: { linguisticMiracle: "Joyful in dunya among family - but wrong joy based on heedlessness" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "إِنَّهُ ظَنَّ أَن لَّن يَحُورَ",
    words: [
      { position: 1, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed he", ur: "بے شک اس نے", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "ظَنَّ", transliteration: "ẓanna", root: "ظ ن ن", meaning: { en: "thought", ur: "گمان کیا", ar: "اعتَقَدَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "SUB", posLabel: "SUB", grammarRole: "subordinating" },
      { position: 4, arabic: "لَّن", transliteration: "lan", meaning: { en: "never", ur: "ہرگز نہیں", ar: "لَن" }, pos: "NEG+FUT", posLabel: "NEG+FUT", grammarRole: "emphatic negation" },
      { position: 5, arabic: "يَحُورَ", transliteration: "yaḥūra", root: "ح و ر", meaning: { en: "he would return", ur: "لوٹے گا", ar: "يَرجِعَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "حور = return. He denied resurrection - fatal error" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'نفی + فعل' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "بَلَىٰ إِنَّ رَبَّهُ كَانَ بِهِ بَصِيرًا",
    words: [
      { position: 1, arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes!", ur: "ہاں", ar: "بَلى" }, pos: "AFFIRM", posLabel: "AFFIRM", grammarRole: "affirmation", advanced: { linguisticMiracle: "بَلى = emphatic yes after negation - definitely he will return" } },
      { position: 2, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 3, arabic: "رَبَّهُ", transliteration: "rabbahu", meaning: { en: "his Lord", ur: "اس کا رب", ar: "مالِكَهُ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject" },
      { position: 4, arabic: "كَانَ", transliteration: "kāna", meaning: { en: "has always been", ur: "ہے", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 5, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "of him", ur: "اسے", ar: "بِهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "بَصِيرًا", transliteration: "baṣīran", root: "ب ص ر", meaning: { en: "All-Seeing", ur: "دیکھنے والا", ar: "مُراقِباً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'توکید' },
      { from: 3, to: 6, label: 'مبتدأ + خبر' },
      { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },

  16: {
    ayahNumber: 16,
    arabic: "فَلَا أُقْسِمُ بِالشَّفَقِ",
    words: [
      { position: 1, arabic: "فَلَا", transliteration: "falā", meaning: { en: "So I swear", ur: "پس قسم ہے", ar: "فَأُقسِمُ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "emphatic oath", advanced: { linguisticMiracle: "لا أقسم = I swear (emphatic, not negation)" } },
      { position: 2, arabic: "أُقْسِمُ", transliteration: "uqsimu", root: "ق س م", meaning: { en: "I swear", ur: "میں قسم کھاتا ہوں", ar: "أَحلِفُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 3, arabic: "بِالشَّفَقِ", transliteration: "bil-shafaqi", root: "ش ف ق", meaning: { en: "by the twilight", ur: "سرخی کی", ar: "بالغُروب" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "oath", advanced: { linguisticMiracle: "Shafaq = afterglow, redness after sunset" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  },

  17: {
    ayahNumber: 17,
    arabic: "وَاللَّيْلِ وَمَا وَسَقَ",
    words: [
      { position: 1, arabic: "وَاللَّيْلِ", transliteration: "wal-layli", root: "ل ي ل", meaning: { en: "And the night", ur: "اور رات کی", ar: "والليل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath" },
      { position: 2, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "relative" },
      { position: 3, arabic: "وَسَقَ", transliteration: "wasaqa", root: "و س ق", meaning: { en: "it envelops", ur: "اس نے سمیٹا", ar: "جَمَعَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Night gathers creatures to their nests/homes" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  18: {
    ayahNumber: 18,
    arabic: "وَالْقَمَرِ إِذَا اتَّسَقَ",
    words: [
      { position: 1, arabic: "وَالْقَمَرِ", transliteration: "wal-qamari", root: "ق م ر", meaning: { en: "And the moon", ur: "اور چاند کی", ar: "والقَمَر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath" },
      { position: 2, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "temporal" },
      { position: 3, arabic: "اتَّسَقَ", transliteration: "ittasaqa", root: "و س ق", meaning: { en: "becomes full", ur: "پورا ہو جائے", ar: "اكتَمَلَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VIII" }, advanced: { linguisticMiracle: "Same root as وسق - moon 'gathers' its fullness" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' }
      ],
    },
  },

  19: {
    ayahNumber: 19,
    arabic: "لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ",
    words: [
      { position: 1, arabic: "لَتَرْكَبُنَّ", transliteration: "latarkabunna", root: "ر ك ب", meaning: { en: "You will surely move", ur: "تم ضرور سوار ہوگے", ar: "لَتَنتَقِلُنَّ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { energetic_nun: true }, advanced: { linguisticMiracle: "Emphatic نّ - certain progression through stages" } },
      { position: 2, arabic: "طَبَقًا", transliteration: "ṭabaqan", root: "ط ب ق", meaning: { en: "stage", ur: "مرحلے", ar: "حالاً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "عَن", transliteration: "ʿan", meaning: { en: "after", ur: "کے بعد", ar: "بَعدَ" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "طَبَقٍ", transliteration: "ṭabaqin", meaning: { en: "stage", ur: "مرحلہ", ar: "حال" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Life stages: womb, childhood, youth, old age, death, barzakh, resurrection" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "فَمَا لَهُمْ لَا يُؤْمِنُونَ",
    words: [
      { position: 1, arabic: "فَمَا", transliteration: "famā", meaning: { en: "So what is", ur: "پس کیا ہے", ar: "فَماذا" }, pos: "CONJ+INT", posLabel: "CONJ+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "with them", ur: "انہیں", ar: "لَهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 4, arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", root: "أ م ن", meaning: { en: "they believe", ur: "ایمان لاتے", ar: "يُصَدِّقونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'نفی + فعل' }
      ],
    },
  },

  21: {
    ayahNumber: 21,
    arabic: "وَإِذَا قُرِئَ عَلَيْهِمُ الْقُرْآنُ لَا يَسْجُدُونَ ۩",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "قُرِئَ", transliteration: "quri'a", root: "ق ر أ", meaning: { en: "is recited", ur: "پڑھا جائے", ar: "تُلِيَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 3, arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "to them", ur: "ان پر", ar: "عليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "الْقُرْآنُ", transliteration: "al-qur'ānu", meaning: { en: "the Quran", ur: "قرآن", ar: "الكِتاب" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 5, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 6, arabic: "يَسْجُدُونَ", transliteration: "yasjudūna", root: "س ج د", meaning: { en: "they prostrate", ur: "سجدہ کرتے", ar: "يَخِرّونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Sajdah verse - prostration mark ۩" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 2, to: 4, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'نفی + فعل' }
      ],
    },
  },

  22: {
    ayahNumber: 22,
    arabic: "بَلِ الَّذِينَ كَفَرُوا يُكَذِّبُونَ",
    words: [
      { position: 1, arabic: "بَلِ", transliteration: "bali", meaning: { en: "Rather", ur: "بلکہ", ar: "لكِن" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کفر کیا", ar: "جَحَدوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "يُكَذِّبُونَ", transliteration: "yukadhdhibūna", root: "ك ذ ب", meaning: { en: "deny", ur: "جھٹلاتے ہیں", ar: "يَجحَدونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  23: {
    ayahNumber: 23,
    arabic: "وَاللَّهُ أَعْلَمُ بِمَا يُوعُونَ",
    words: [
      { position: 1, arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, pos: "CONJ+PN", posLabel: "CONJ+PN", grammarRole: "subject" },
      { position: 2, arabic: "أَعْلَمُ", transliteration: "aʿlamu", root: "ع ل م", meaning: { en: "knows best", ur: "خوب جانتا ہے", ar: "أَدرى" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { comparative: true } },
      { position: 3, arabic: "بِمَا", transliteration: "bimā", meaning: { en: "what", ur: "جو کچھ", ar: "بِما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "يُوعُونَ", transliteration: "yūʿūna", root: "و ع ي", meaning: { en: "they harbor", ur: "وہ چھپاتے ہیں", ar: "يُضمِرونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" }, advanced: { linguisticMiracle: "What they conceal in hearts - Allah knows" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مبتدأ + خبر' },
      { from: 1, to: 2, label: 'موصوف + صفت' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  24: {
    ayahNumber: 24,
    arabic: "فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ",
    words: [
      { position: 1, arabic: "فَبَشِّرْهُم", transliteration: "fabashshirhum", root: "ب ش ر", meaning: { en: "So give them tidings", ur: "پس انہیں خوشخبری دے", ar: "فَأَخبِرهُم" }, pos: "V", posLabel: "V", grammarRole: "imperative", features: { form: "II" }, advanced: { linguisticMiracle: "Sarcastic 'good news' - بَشّر usually positive" } },
      { position: 2, arabic: "بِعَذَابٍ", transliteration: "bi-ʿadhābin", meaning: { en: "of a punishment", ur: "عذاب کی", ar: "بِعِقاب" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "أَلِيمٍ", transliteration: "alīmin", root: "أ ل م", meaning: { en: "painful", ur: "دردناک", ar: "مُؤلِم" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  25: {
    ayahNumber: 25,
    arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
    words: [
      { position: 1, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "Except", ur: "سوائے", ar: "سِوى" }, pos: "EXCEPT", posLabel: "EXCEPT", grammarRole: "exception" },
      { position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "صَدَّقوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "وَعَمِلُوا", transliteration: "wa-ʿamilū", meaning: { en: "and do", ur: "اور کیے", ar: "وَفَعَلوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 5, arabic: "الصَّالِحَاتِ", transliteration: "al-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک کام", ar: "الأَعمال الحَسَنة" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 6, arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لَهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "predicate" },
      { position: 7, arabic: "أَجْرٌ", transliteration: "ajrun", root: "أ ج ر", meaning: { en: "reward", ur: "اجر ہے", ar: "ثَواب" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 8, arabic: "غَيْرُ", transliteration: "ghayru", meaning: { en: "without", ur: "بغیر", ar: "بِلا" }, pos: "N", posLabel: "N", grammarRole: "attribute" },
      { position: 9, arabic: "مَمْنُونٍ", transliteration: "mamnūnin", root: "م ن ن", meaning: { en: "end/being cut off", ur: "ختم ہونے والا", ar: "انقِطاع" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مَفْعُول" }, advanced: { linguisticMiracle: "Unending reward - no termination, no reminders of favors" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 3, to: 5, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 4, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 8, label: 'موصوف + صفت' },
      { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  }
};

export default TREEBANK_DATA;
