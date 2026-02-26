/**
 * Surah Al-Qiyamah (75) - The Resurrection
 * Quranic Arabic Treebank - Word-by-Word Morphological Analysis
 * 40 Ayahs - Makki
 */

export const TREEBANK_DATA = {
  surahId: 75,
  surahName: "Al-Qiyamah",
  surahNameArabic: "القيامة",
  totalAyahs: 40,
  revelationType: "Makki",
  theme: "Day of Judgment oaths, self-reproaching soul, death scene, resurrection proof",

  1: {
    ayahNumber: 1,
    arabic: "لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ",
    words: [
      { position: 1, arabic: "لَا", transliteration: "lā", meaning: { en: "Nay", ur: "نہیں", ar: "لا" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis", note: "emphatic not negation" },
      { position: 2, arabic: "أُقْسِمُ", transliteration: "ʾuqsimu", root: "ق س م", meaning: { en: "I swear", ur: "میں قسم کھاتا ہوں", ar: "أُقسِمُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "بِيَوْمِ", transliteration: "bi-yawmi", root: "ي و م", meaning: { en: "by the Day of", ur: "قیامت کے دن کی", ar: "بِيَوم" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "oath" },
      { position: 4, arabic: "الْقِيَامَةِ", transliteration: "l-qiyāmati", root: "ق و م", meaning: { en: "Resurrection", ur: "قیامت", ar: "القِيامَة" }, pos: "N", posLabel: "N", grammarRole: "genitive", surahTitle: true }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ",
    words: [
      { position: 1, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "And nay", ur: "اور نہیں", ar: "ولا" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammarRole: "emphasis" },
      { position: 2, arabic: "أُقْسِمُ", transliteration: "ʾuqsimu", root: "ق س م", meaning: { en: "I swear", ur: "میں قسم کھاتا ہوں", ar: "أُقسِمُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "بِالنَّفْسِ", transliteration: "bil-nafsi", root: "ن ف س", meaning: { en: "by the soul", ur: "نفس کی", ar: "بِالنَّفس" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "oath" },
      { position: 4, arabic: "اللَّوَّامَةِ", transliteration: "l-lawwāmati", root: "ل و م", meaning: { en: "self-reproaching", ur: "ملامت کرنے والے", ar: "اللَّوّامَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", concept: "conscience" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "أَيَحْسَبُ الْإِنسَانُ أَلَّن نَّجْمَعَ عِظَامَهُ",
    words: [
      { position: 1, arabic: "أَيَحْسَبُ", transliteration: "ʾa-yaḥsabu", root: "ح س ب", meaning: { en: "Does man think", ur: "کیا انسان سمجھتا ہے", ar: "أَيَحسَبُ" }, pos: "INTERROG+V", posLabel: "INTERROG+V", grammarRole: "rhetorical" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "l-ʾinsānu", root: "أ ن س", meaning: { en: "man", ur: "انسان", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "أَلَّن", transliteration: "ʾal-lan", meaning: { en: "that never", ur: "کہ ہرگز نہیں", ar: "أَلَّن" }, pos: "PART+NEG", posLabel: "PART+NEG", grammarRole: "complement" },
      { position: 4, arabic: "نَّجْمَعَ", transliteration: "najmaʿa", root: "ج م ع", meaning: { en: "We will assemble", ur: "ہم جمع کریں گے", ar: "نَجمَعَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive" },
      { position: 5, arabic: "عِظَامَهُ", transliteration: "ʿiẓāmahu", root: "ع ظ م", meaning: { en: "his bones", ur: "اس کی ہڈیاں", ar: "عِظامَهُ" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 4, to: 5, label: 'فعل + مفعول به' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    arabic: "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ",
    words: [
      { position: 1, arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes indeed", ur: "ہاں", ar: "بَلى" }, pos: "PART", posLabel: "PART", grammarRole: "affirmation" },
      { position: 2, arabic: "قَادِرِينَ", transliteration: "qādirīna", root: "ق د ر", meaning: { en: "We are able", ur: "ہم قادر ہیں", ar: "قادِرِينَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" },
      { position: 3, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "پر", ar: "عَلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "أَن", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 5, arabic: "نُّسَوِّيَ", transliteration: "nusawwiya", root: "س و ي", meaning: { en: "We restore", ur: "ہم ٹھیک کر دیں", ar: "نُسَوِّيَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive", form: "II" },
      { position: 6, arabic: "بَنَانَهُ", transliteration: "banānahu", root: "ب ن ن", meaning: { en: "his fingertips", ur: "اس کی انگلیوں کے پور", ar: "بَنانَهُ" }, pos: "N", posLabel: "N", grammarRole: "object", scientific: "unique fingerprints" }
    ],
    structure: {
      relationships: [
      { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    arabic: "بَلْ يُرِيدُ الْإِنسَانُ لِيَفْجُرَ أَمَامَهُ",
    words: [
      { position: 1, arabic: "بَلْ", transliteration: "bal", meaning: { en: "But", ur: "بلکہ", ar: "بَل" }, pos: "PART", posLabel: "PART", grammarRole: "adversative" },
      { position: 2, arabic: "يُرِيدُ", transliteration: "yurīdu", root: "ر و د", meaning: { en: "desires", ur: "چاہتا ہے", ar: "يُرِيدُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "الْإِنسَانُ", transliteration: "l-ʾinsānu", root: "أ ن س", meaning: { en: "man", ur: "انسان", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "لِيَفْجُرَ", transliteration: "li-yafjura", root: "ف ج ر", meaning: { en: "to sin", ur: "گناہ کرے", ar: "لِيَفجُرَ" }, pos: "V", posLabel: "V", grammarRole: "purpose" },
      { position: 5, arabic: "أَمَامَهُ", transliteration: "ʾamāmahu", meaning: { en: "in his future", ur: "آگے", ar: "أَمامَهُ" }, pos: "N", posLabel: "N", grammarRole: "temporal" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    arabic: "يَسْأَلُ أَيَّانَ يَوْمُ الْقِيَامَةِ",
    words: [
      { position: 1, arabic: "يَسْأَلُ", transliteration: "yasʾalu", root: "س أ ل", meaning: { en: "He asks", ur: "وہ پوچھتا ہے", ar: "يَسأَلُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "أَيَّانَ", transliteration: "ʾayyāna", meaning: { en: "When", ur: "کب", ar: "أَيّانَ" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "question" },
      { position: 3, arabic: "يَوْمُ", transliteration: "yawmu", root: "ي و م", meaning: { en: "is the Day of", ur: "ہے قیامت کا دن", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "الْقِيَامَةِ", transliteration: "l-qiyāmati", root: "ق و م", meaning: { en: "Resurrection", ur: "قیامت", ar: "القِيامَة" }, pos: "N", posLabel: "N", grammarRole: "genitive" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    arabic: "فَإِذَا بَرِقَ الْبَصَرُ",
    words: [
      { position: 1, arabic: "فَإِذَا", transliteration: "fa-ʾidhā", meaning: { en: "So when", ur: "پس جب", ar: "فَإِذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "بَرِقَ", transliteration: "bariqa", root: "ب ر ق", meaning: { en: "is dazzled", ur: "چکا چوند ہو جائے", ar: "بَرِقَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "الْبَصَرُ", transliteration: "l-baṣaru", root: "ب ص ر", meaning: { en: "the sight", ur: "آنکھ", ar: "البَصَر" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    arabic: "وَخَسَفَ الْقَمَرُ",
    words: [
      { position: 1, arabic: "وَخَسَفَ", transliteration: "wa-khasafa", root: "خ س ف", meaning: { en: "And is eclipsed", ur: "اور گہن لگ جائے", ar: "وخَسَفَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "الْقَمَرُ", transliteration: "l-qamaru", root: "ق م ر", meaning: { en: "the moon", ur: "چاند", ar: "القَمَر" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    arabic: "وَجُمِعَ الشَّمْسُ وَالْقَمَرُ",
    words: [
      { position: 1, arabic: "وَجُمِعَ", transliteration: "wa-jumiʿa", root: "ج م ع", meaning: { en: "And are joined", ur: "اور جمع کر دیے جائیں", ar: "وجُمِعَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 2, arabic: "الشَّمْسُ", transliteration: "l-shamsu", root: "ش م س", meaning: { en: "the sun", ur: "سورج", ar: "الشَّمس" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "وَالْقَمَرُ", transliteration: "wal-qamaru", root: "ق م ر", meaning: { en: "and moon", ur: "اور چاند", ar: "والقَمَر" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    arabic: "يَقُولُ الْإِنسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ",
    words: [
      { position: 1, arabic: "يَقُولُ", transliteration: "yaqūlu", root: "ق و ل", meaning: { en: "Will say", ur: "کہے گا", ar: "يَقُولُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "l-ʾinsānu", root: "أ ن س", meaning: { en: "man", ur: "انسان", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", root: "ي و م", meaning: { en: "that Day", ur: "اس دن", ar: "يَومَئِذٍ" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 4, arabic: "أَيْنَ", transliteration: "ʾayna", meaning: { en: "Where is", ur: "کہاں ہے", ar: "أَينَ" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "question" },
      { position: 5, arabic: "الْمَفَرُّ", transliteration: "l-mafarru", root: "ف ر ر", meaning: { en: "the escape", ur: "بھاگنے کی جگہ", ar: "المَفَرّ" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    arabic: "كَلَّا لَا وَزَرَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 2, arabic: "لَا", transliteration: "lā", meaning: { en: "No", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 3, arabic: "وَزَرَ", transliteration: "wazara", root: "و ز ر", meaning: { en: "refuge", ur: "پناہ", ar: "وَزَر" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "إِلَىٰ رَبِّكَ يَوْمَئِذٍ الْمُسْتَقَرُّ",
    words: [
      { position: 1, arabic: "إِلَىٰ", transliteration: "ʾilā", meaning: { en: "To", ur: "کی طرف", ar: "إِلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرے رب", ar: "رَبِّكَ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", root: "ي و م", meaning: { en: "that Day", ur: "اس دن", ar: "يَومَئِذٍ" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 4, arabic: "الْمُسْتَقَرُّ", transliteration: "l-mustaqarru", root: "ق ر ر", meaning: { en: "is the place of settlement", ur: "ٹھکانا ہے", ar: "المُستَقَرّ" }, pos: "N", posLabel: "N", grammarRole: "subject", form: "X" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "يُنَبَّأُ الْإِنسَانُ يَوْمَئِذٍ بِمَا قَدَّمَ وَأَخَّرَ",
    words: [
      { position: 1, arabic: "يُنَبَّأُ", transliteration: "yunabbaʾu", root: "ن ب أ", meaning: { en: "Will be informed", ur: "بتایا جائے گا", ar: "يُنَبَّأُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive", form: "II" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "l-ʾinsānu", meaning: { en: "man", ur: "انسان کو", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", meaning: { en: "that Day", ur: "اس دن", ar: "يَومَئِذٍ" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 4, arabic: "بِمَا", transliteration: "bi-mā", meaning: { en: "of what", ur: "جو کچھ", ar: "بِما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "object" },
      { position: 5, arabic: "قَدَّمَ", transliteration: "qaddama", root: "ق د م", meaning: { en: "he sent before", ur: "اس نے آگے بھیجا", ar: "قَدَّمَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 6, arabic: "وَأَخَّرَ", transliteration: "wa-ʾakhkhara", root: "أ خ ر", meaning: { en: "and kept back", ur: "اور پیچھے چھوڑا", ar: "وأَخَّرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 2, to: 5, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'موصول + صلة' },
      { from: 2, to: 6, label: 'مبتدأ + خبر' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    arabic: "بَلِ الْإِنسَانُ عَلَىٰ نَفْسِهِ بَصِيرَةٌ",
    words: [
      { position: 1, arabic: "بَلِ", transliteration: "bali", meaning: { en: "Rather", ur: "بلکہ", ar: "بَل" }, pos: "PART", posLabel: "PART", grammarRole: "adversative" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "l-ʾinsānu", meaning: { en: "man", ur: "انسان", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "against", ur: "پر", ar: "عَلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "نَفْسِهِ", transliteration: "nafsihi", root: "ن ف س", meaning: { en: "himself", ur: "اپنے نفس", ar: "نَفسِهِ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "بَصِيرَةٌ", transliteration: "baṣīratun", root: "ب ص ر", meaning: { en: "is a witness", ur: "گواہ ہے", ar: "بَصِيرَة" }, pos: "N", posLabel: "N", grammarRole: "predicate", concept: "self-awareness" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    arabic: "وَلَوْ أَلْقَىٰ مَعَاذِيرَهُ",
    words: [
      { position: 1, arabic: "وَلَوْ", transliteration: "wa-law", meaning: { en: "Even if", ur: "اگرچہ", ar: "ولَو" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "concessive" },
      { position: 2, arabic: "أَلْقَىٰ", transliteration: "ʾalqā", root: "ل ق ي", meaning: { en: "he presents", ur: "وہ پیش کرے", ar: "أَلقى" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "مَعَاذِيرَهُ", transliteration: "maʿādhīrahu", root: "ع ذ ر", meaning: { en: "his excuses", ur: "اپنے بہانے", ar: "مَعاذِيرَهُ" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    arabic: "لَا تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ",
    words: [
      { position: 1, arabic: "لَا", transliteration: "lā", meaning: { en: "Do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "prohibition" },
      { position: 2, arabic: "تُحَرِّكْ", transliteration: "tuḥarrik", root: "ح ر ك", meaning: { en: "move", ur: "ہلاؤ", ar: "تُحَرِّك" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 3, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "with it", ur: "اس سے", ar: "بِهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "instrument" },
      { position: 4, arabic: "لِسَانَكَ", transliteration: "lisānaka", root: "ل س ن", meaning: { en: "your tongue", ur: "اپنی زبان", ar: "لِسانَكَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "لِتَعْجَلَ", transliteration: "li-taʿjala", root: "ع ج ل", meaning: { en: "to hasten", ur: "جلدی کرنے کے لیے", ar: "لِتَعجَلَ" }, pos: "V", posLabel: "V", grammarRole: "purpose" },
      { position: 6, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "with it", ur: "اس میں", ar: "بِهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    arabic: "إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "عَلَيْنَا", transliteration: "ʿalaynā", meaning: { en: "upon Us is", ur: "ہمارے ذمے ہے", ar: "عَلَينا" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "predicate" },
      { position: 3, arabic: "جَمْعَهُ", transliteration: "jamʿahu", root: "ج م ع", meaning: { en: "its collection", ur: "اس کا جمع کرنا", ar: "جَمعَهُ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "وَقُرْآنَهُ", transliteration: "wa-qurʾānahu", root: "ق ر أ", meaning: { en: "and its recitation", ur: "اور اس کا پڑھنا", ar: "وقُرآنَهُ" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'توکید' }
      ],
    },
  },

  18: {
    ayahNumber: 18,
    arabic: "فَإِذَا قَرَأْنَاهُ فَاتَّبِعْ قُرْآنَهُ",
    words: [
      { position: 1, arabic: "فَإِذَا", transliteration: "fa-ʾidhā", meaning: { en: "So when", ur: "پس جب", ar: "فَإِذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "قَرَأْنَاهُ", transliteration: "qaraʾnāhu", root: "ق ر أ", meaning: { en: "We have recited it", ur: "ہم پڑھیں", ar: "قَرَأناهُ" }, pos: "V", posLabel: "V", grammarRole: "protasis" },
      { position: 3, arabic: "فَاتَّبِعْ", transliteration: "fa-ttabiʿ", root: "ت ب ع", meaning: { en: "then follow", ur: "تو پیروی کرو", ar: "فَاتَّبِع" }, pos: "V", posLabel: "V", grammarRole: "apodosis", form: "VIII" },
      { position: 4, arabic: "قُرْآنَهُ", transliteration: "qurʾānahu", root: "ق ر أ", meaning: { en: "its recitation", ur: "اس کی قرات کی", ar: "قُرآنَهُ" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    arabic: "ثُمَّ إِنَّ عَلَيْنَا بَيَانَهُ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 3, arabic: "عَلَيْنَا", transliteration: "ʿalaynā", meaning: { en: "upon Us is", ur: "ہمارے ذمے ہے", ar: "عَلَينا" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "predicate" },
      { position: 4, arabic: "بَيَانَهُ", transliteration: "bayānahu", root: "ب ي ن", meaning: { en: "its explanation", ur: "اس کا بیان", ar: "بَيانَهُ" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'توکید' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "كَلَّا بَلْ تُحِبُّونَ الْعَاجِلَةَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 2, arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بَل" }, pos: "PART", posLabel: "PART", grammarRole: "adversative" },
      { position: 3, arabic: "تُحِبُّونَ", transliteration: "tuḥibbūna", root: "ح ب ب", meaning: { en: "you love", ur: "تم محبت کرتے ہو", ar: "تُحِبُّونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 4, arabic: "الْعَاجِلَةَ", transliteration: "l-ʿājilata", root: "ع ج ل", meaning: { en: "the immediate", ur: "فوری (دنیا) سے", ar: "العاجِلَة" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    arabic: "وَتَذَرُونَ الْآخِرَةَ",
    words: [
      { position: 1, arabic: "وَتَذَرُونَ", transliteration: "wa-tadharūna", root: "و ذ ر", meaning: { en: "And leave", ur: "اور چھوڑ دیتے ہو", ar: "وتَذَرُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "الْآخِرَةَ", transliteration: "l-ʾākhirata", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "آخرت کو", ar: "الآخِرَة" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    arabic: "وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ",
    words: [
      { position: 1, arabic: "وُجُوهٌ", transliteration: "wujūhun", root: "و ج ه", meaning: { en: "Some faces", ur: "چہرے", ar: "وُجُوه" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", root: "ي و م", meaning: { en: "that Day", ur: "اس دن", ar: "يَومَئِذٍ" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 3, arabic: "نَّاضِرَةٌ", transliteration: "nāḍiratun", root: "ن ض ر", meaning: { en: "will be radiant", ur: "تازہ ہوں گے", ar: "ناضِرَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    arabic: "إِلَىٰ رَبِّهَا نَاظِرَةٌ",
    words: [
      { position: 1, arabic: "إِلَىٰ", transliteration: "ʾilā", meaning: { en: "At", ur: "کی طرف", ar: "إِلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "رَبِّهَا", transliteration: "rabbihā", root: "ر ب ب", meaning: { en: "their Lord", ur: "اپنے رب", ar: "رَبِّها" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "نَاظِرَةٌ", transliteration: "nāẓiratun", root: "ن ظ ر", meaning: { en: "looking", ur: "دیکھتے ہوں گے", ar: "ناظِرَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", visionOfAllah: true }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    arabic: "وَوُجُوهٌ يَوْمَئِذٍ بَاسِرَةٌ",
    words: [
      { position: 1, arabic: "وَوُجُوهٌ", transliteration: "wa-wujūhun", root: "و ج ه", meaning: { en: "And some faces", ur: "اور چہرے", ar: "ووُجُوه" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", meaning: { en: "that Day", ur: "اس دن", ar: "يَومَئِذٍ" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 3, arabic: "بَاسِرَةٌ", transliteration: "bāsiratun", root: "ب س ر", meaning: { en: "will be contorted", ur: "اداس ہوں گے", ar: "باسِرَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    arabic: "تَظُنُّ أَن يُفْعَلَ بِهَا فَاقِرَةٌ",
    words: [
      { position: 1, arabic: "تَظُنُّ", transliteration: "taẓunnu", root: "ظ ن ن", meaning: { en: "Expecting", ur: "گمان کرتے ہوئے", ar: "تَظُنُّ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "أَن", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 3, arabic: "يُفْعَلَ", transliteration: "yufʿala", root: "ف ع ل", meaning: { en: "will be done", ur: "کیا جائے گا", ar: "يُفعَلَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive", voice: "passive" },
      { position: 4, arabic: "بِهَا", transliteration: "bihā", meaning: { en: "to them", ur: "ان کے ساتھ", ar: "بِها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "object" },
      { position: 5, arabic: "فَاقِرَةٌ", transliteration: "fāqiratun", root: "ف ق ر", meaning: { en: "a calamity", ur: "کمر توڑ دینے والی", ar: "فاقِرَة" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },

  26: {
    ayahNumber: 26,
    arabic: "كَلَّا إِذَا بَلَغَتِ التَّرَاقِيَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 2, arabic: "إِذَا", transliteration: "ʾidhā", meaning: { en: "When", ur: "جب", ar: "إِذا" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 3, arabic: "بَلَغَتِ", transliteration: "balaghati", root: "ب ل غ", meaning: { en: "reaches", ur: "پہنچ جائے", ar: "بَلَغَت" }, pos: "V", posLabel: "V", grammarRole: "protasis" },
      { position: 4, arabic: "التَّرَاقِيَ", transliteration: "l-tarāqiya", root: "ت ر ق", meaning: { en: "the collarbones", ur: "ہنسلی تک", ar: "التَّراقِيَ" }, pos: "N", posLabel: "N", grammarRole: "object", deathScene: true }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    arabic: "وَقِيلَ مَنْ ۜ رَاقٍ",
    words: [
      { position: 1, arabic: "وَقِيلَ", transliteration: "wa-qīla", root: "ق و ل", meaning: { en: "And is said", ur: "اور کہا جائے", ar: "وقِيلَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 2, arabic: "مَنْ", transliteration: "man", meaning: { en: "Who", ur: "کون ہے", ar: "مَن" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "question" },
      { position: 3, arabic: "رَاقٍ", transliteration: "rāqin", root: "ر ق ي", meaning: { en: "a healer", ur: "جھاڑنے والا", ar: "راقٍ" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },

  28: {
    ayahNumber: 28,
    arabic: "وَظَنَّ أَنَّهُ الْفِرَاقُ",
    words: [
      { position: 1, arabic: "وَظَنَّ", transliteration: "wa-ẓanna", root: "ظ ن ن", meaning: { en: "And he is certain", ur: "اور یقین ہو جائے", ar: "وظَنَّ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "أَنَّهُ", transliteration: "ʾannahu", meaning: { en: "that it is", ur: "کہ یہ", ar: "أَنَّهُ" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "complement" },
      { position: 3, arabic: "الْفِرَاقُ", transliteration: "l-firāqu", root: "ف ر ق", meaning: { en: "the parting", ur: "جدائی ہے", ar: "الفِراق" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
  },

  29: {
    ayahNumber: 29,
    arabic: "وَالْتَفَّتِ السَّاقُ بِالسَّاقِ",
    words: [
      { position: 1, arabic: "وَالْتَفَّتِ", transliteration: "wal-taffati", root: "ل ف ف", meaning: { en: "And is wound", ur: "اور لپٹ گئی", ar: "والتَفَّت" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "VIII" },
      { position: 2, arabic: "السَّاقُ", transliteration: "l-sāqu", root: "س و ق", meaning: { en: "leg", ur: "پنڈلی", ar: "السّاق" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "بِالسَّاقِ", transliteration: "bil-sāqi", root: "س و ق", meaning: { en: "with leg", ur: "پنڈلی سے", ar: "بِالسّاق" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "adverbial", deathAgony: true }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    arabic: "إِلَىٰ رَبِّكَ يَوْمَئِذٍ الْمَسَاقُ",
    words: [
      { position: 1, arabic: "إِلَىٰ", transliteration: "ʾilā", meaning: { en: "To", ur: "کی طرف", ar: "إِلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرے رب", ar: "رَبِّكَ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", meaning: { en: "that Day", ur: "اس دن", ar: "يَومَئِذٍ" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 4, arabic: "الْمَسَاقُ", transliteration: "l-masāqu", root: "س و ق", meaning: { en: "will be the driving", ur: "لے جانا ہے", ar: "المَساق" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },

  31: {
    ayahNumber: 31,
    arabic: "فَلَا صَدَّقَ وَلَا صَلَّىٰ",
    words: [
      { position: 1, arabic: "فَلَا", transliteration: "fa-lā", meaning: { en: "For he neither", ur: "پس نہ", ar: "فَلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "صَدَّقَ", transliteration: "ṣaddaqa", root: "ص د ق", meaning: { en: "believed", ur: "تصدیق کی", ar: "صَدَّقَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 3, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 4, arabic: "صَلَّىٰ", transliteration: "ṣallā", root: "ص ل ي", meaning: { en: "prayed", ur: "نماز پڑھی", ar: "صَلّى" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'نفی + فعل' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    arabic: "وَلَـٰكِن كَذَّبَ وَتَوَلَّىٰ",
    words: [
      { position: 1, arabic: "وَلَـٰكِن", transliteration: "wa-lākin", meaning: { en: "But", ur: "بلکہ", ar: "ولكِن" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "adversative" },
      { position: 2, arabic: "كَذَّبَ", transliteration: "kadhdhaba", root: "ك ذ ب", meaning: { en: "he denied", ur: "جھٹلایا", ar: "كَذَّبَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 3, arabic: "وَتَوَلَّىٰ", transliteration: "wa-tawallā", root: "و ل ي", meaning: { en: "and turned away", ur: "اور پھر گیا", ar: "وتَوَلّى" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "V" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },

  33: {
    ayahNumber: 33,
    arabic: "ثُمَّ ذَهَبَ إِلَىٰ أَهْلِهِ يَتَمَطَّىٰ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "ذَهَبَ", transliteration: "dhahaba", root: "ذ ه ب", meaning: { en: "he went", ur: "چلا گیا", ar: "ذَهَبَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "إِلَىٰ", transliteration: "ʾilā", meaning: { en: "to", ur: "کی طرف", ar: "إِلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "أَهْلِهِ", transliteration: "ʾahlihi", root: "أ ه ل", meaning: { en: "his people", ur: "اپنے لوگوں", ar: "أَهلِهِ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "يَتَمَطَّىٰ", transliteration: "yatamaṭṭā", root: "م ط ط", meaning: { en: "strutting", ur: "اکڑتا ہوا", ar: "يَتَمَطّى" }, pos: "V", posLabel: "V", grammarRole: "circumstantial", form: "V" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 2, to: 5, label: 'حال' }
      ],
    },
  },

  34: {
    ayahNumber: 34,
    arabic: "أَوْلَىٰ لَكَ فَأَوْلَىٰ",
    words: [
      { position: 1, arabic: "أَوْلَىٰ", transliteration: "ʾawlā", root: "و ل ي", meaning: { en: "Woe", ur: "برا ہو", ar: "أَولى" }, pos: "N", posLabel: "N", grammarRole: "exclamation" },
      { position: 2, arabic: "لَكَ", transliteration: "laka", meaning: { en: "to you", ur: "تیرے لیے", ar: "لَكَ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "indirect object" },
      { position: 3, arabic: "فَأَوْلَىٰ", transliteration: "fa-ʾawlā", meaning: { en: "and woe", ur: "پھر برا ہو", ar: "فَأَولى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "emphasis" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'عطف' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    arabic: "ثُمَّ أَوْلَىٰ لَكَ فَأَوْلَىٰ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "أَوْلَىٰ", transliteration: "ʾawlā", meaning: { en: "woe", ur: "برا ہو", ar: "أَولى" }, pos: "N", posLabel: "N", grammarRole: "exclamation" },
      { position: 3, arabic: "لَكَ", transliteration: "laka", meaning: { en: "to you", ur: "تیرے لیے", ar: "لَكَ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "indirect object" },
      { position: 4, arabic: "فَأَوْلَىٰ", transliteration: "fa-ʾawlā", meaning: { en: "and woe", ur: "پھر برا ہو", ar: "فَأَولى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "emphasis", fourfoldWarning: true }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'عطف' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    arabic: "أَيَحْسَبُ الْإِنسَانُ أَن يُتْرَكَ سُدًى",
    words: [
      { position: 1, arabic: "أَيَحْسَبُ", transliteration: "ʾa-yaḥsabu", root: "ح س ب", meaning: { en: "Does man think", ur: "کیا انسان سمجھتا ہے", ar: "أَيَحسَبُ" }, pos: "INTERROG+V", posLabel: "INTERROG+V", grammarRole: "rhetorical" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "l-ʾinsānu", meaning: { en: "man", ur: "انسان", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "أَن", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 4, arabic: "يُتْرَكَ", transliteration: "yutraka", root: "ت ر ك", meaning: { en: "he will be left", ur: "چھوڑ دیا جائے گا", ar: "يُترَكَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive", voice: "passive" },
      { position: 5, arabic: "سُدًى", transliteration: "sudan", root: "س د ي", meaning: { en: "neglected", ur: "یونہی", ar: "سُدىً" }, pos: "N", posLabel: "N", grammarRole: "adverbial" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    arabic: "أَلَمْ يَكُ نُطْفَةً مِّن مَّنِيٍّ يُمْنَىٰ",
    words: [
      { position: 1, arabic: "أَلَمْ", transliteration: "ʾa-lam", meaning: { en: "Was he not", ur: "کیا وہ نہیں تھا", ar: "أَلَم" }, pos: "INTERROG+NEG", posLabel: "INTERROG+NEG", grammarRole: "rhetorical" },
      { position: 2, arabic: "يَكُ", transliteration: "yaku", root: "ك و ن", meaning: { en: "he was", ur: "تھا", ar: "يَكُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "نُطْفَةً", transliteration: "nuṭfatan", root: "ن ط ف", meaning: { en: "a drop", ur: "ایک قطرہ", ar: "نُطفَةً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "مَّنِيٍّ", transliteration: "maniyyin", root: "م ن ي", meaning: { en: "semen", ur: "منی", ar: "مَنِيّ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 6, arabic: "يُمْنَىٰ", transliteration: "yumnā", root: "م ن ي", meaning: { en: "emitted", ur: "ٹپکائی جاتی ہے", ar: "يُمنى" }, pos: "V", posLabel: "V", grammarRole: "attribute", voice: "passive" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    arabic: "ثُمَّ كَانَ عَلَقَةً فَخَلَقَ فَسَوَّىٰ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "he was", ur: "ہوا", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "عَلَقَةً", transliteration: "ʿalaqatan", root: "ع ل ق", meaning: { en: "a clinging clot", ur: "لوتھڑا", ar: "عَلَقَةً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "فَخَلَقَ", transliteration: "fa-khalaqa", root: "خ ل ق", meaning: { en: "then He created", ur: "پھر بنایا", ar: "فَخَلَقَ" }, pos: "V", posLabel: "V", grammarRole: "sequence" },
      { position: 5, arabic: "فَسَوَّىٰ", transliteration: "fa-sawwā", root: "س و ي", meaning: { en: "and proportioned", ur: "اور ٹھیک کیا", ar: "فَسَوّى" }, pos: "V", posLabel: "V", grammarRole: "sequence", form: "II" }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
  },

  39: {
    ayahNumber: 39,
    arabic: "فَجَعَلَ مِنْهُ الزَّوْجَيْنِ الذَّكَرَ وَالْأُنثَىٰ",
    words: [
      { position: 1, arabic: "فَجَعَلَ", transliteration: "fa-jaʿala", root: "ج ع ل", meaning: { en: "And made", ur: "پھر بنائے", ar: "فَجَعَلَ" }, pos: "V", posLabel: "V", grammarRole: "sequence" },
      { position: 2, arabic: "مِنْهُ", transliteration: "minhu", meaning: { en: "from it", ur: "اس سے", ar: "مِنهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "source" },
      { position: 3, arabic: "الزَّوْجَيْنِ", transliteration: "l-zawjayni", root: "ز و ج", meaning: { en: "the two mates", ur: "دو قسمیں", ar: "الزَّوجَينِ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "الذَّكَرَ", transliteration: "l-dhakara", root: "ذ ك ر", meaning: { en: "the male", ur: "نر", ar: "الذَّكَر" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 5, arabic: "وَالْأُنثَىٰ", transliteration: "wal-ʾunthā", root: "أ ن ث", meaning: { en: "and the female", ur: "اور مادہ", ar: "والأُنثى" }, pos: "N", posLabel: "N", grammarRole: "apposition" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    arabic: "أَلَيْسَ ذَٰلِكَ بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ",
    words: [
      { position: 1, arabic: "أَلَيْسَ", transliteration: "ʾa-laysa", meaning: { en: "Is not", ur: "کیا نہیں", ar: "أَلَيسَ" }, pos: "INTERROG+NEG", posLabel: "INTERROG+NEG", grammarRole: "rhetorical" },
      { position: 2, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that One", ur: "وہ", ar: "ذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 3, arabic: "بِقَادِرٍ", transliteration: "bi-qādirin", root: "ق د ر", meaning: { en: "able", ur: "قادر", ar: "بِقادِر" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" },
      { position: 4, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "پر", ar: "عَلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "أَن", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 6, arabic: "يُحْيِيَ", transliteration: "yuḥyiya", root: "ح ي ي", meaning: { en: "He gives life", ur: "زندہ کر دے", ar: "يُحيِيَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive", form: "IV" },
      { position: 7, arabic: "الْمَوْتَىٰ", transliteration: "l-mawtā", root: "م و ت", meaning: { en: "to the dead", ur: "مردوں کو", ar: "المَوتى" }, pos: "N", posLabel: "N", grammarRole: "object", finalProof: true }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  }
};

export default TREEBANK_DATA;
