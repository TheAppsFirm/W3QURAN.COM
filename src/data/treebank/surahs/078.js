/**
 * Surah An-Naba' (78) - The News
 * Quranic Arabic Treebank - Word-by-Word Morphological Analysis
 * 40 Ayahs - Makki
 */

export const TREEBANK_DATA = {
  surahId: 78,
  surahName: "An-Naba'",
  surahNameArabic: "النبأ",
  totalAyahs: 40,
  revelationType: "Makki",
  theme: "The Great News of resurrection, creation signs, Day of Judgment, Hell and Paradise",

  1: {
    ayahNumber: 1,
    arabic: "عَمَّ يَتَسَاءَلُونَ",
    words: [
      { position: 1, arabic: "عَمَّ", transliteration: "ʿamma", root: "م ا", meaning: { en: "About what", ur: "کس چیز کے بارے میں", ar: "عَن أَيِّ شَيءٍ" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "question" },
      { position: 2, arabic: "يَتَسَاءَلُونَ", transliteration: "yatasāʾalūna", root: "س أ ل", meaning: { en: "do they ask one another", ur: "وہ آپس میں پوچھتے ہیں", ar: "يَسأَلُ بَعضُهُم بَعضاً" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "VI", aspect: "IMPF" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "عَنِ النَّبَإِ الْعَظِيمِ",
    words: [
      { position: 1, arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "About", ur: "کے بارے میں", ar: "عَن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "النَّبَإِ", transliteration: "l-nabaʾi", root: "ن ب أ", meaning: { en: "the news", ur: "خبر", ar: "الخَبَر" }, pos: "N", posLabel: "N", grammarRole: "genitive", surahTitle: true },
      { position: 3, arabic: "الْعَظِيمِ", transliteration: "l-ʿaẓīmi", root: "ع ظ م", meaning: { en: "the great", ur: "بڑی", ar: "العَظِيم" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
    words: [
      { position: 1, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Which", ur: "جس میں", ar: "الَّذِي" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 2, arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هُم" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "concerning it", ur: "اس میں", ar: "فِيهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "adverbial" },
      { position: 4, arabic: "مُخْتَلِفُونَ", transliteration: "mukhtalifūna", root: "خ ل ف", meaning: { en: "differ", ur: "اختلاف کرتے ہیں", ar: "مُختَلِفُون" }, pos: "N", posLabel: "N", grammarRole: "predicate", form: "VIII" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "كَلَّا سَيَعْلَمُونَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent", emphasis: "strong denial" },
      { position: 2, arabic: "سَيَعْلَمُونَ", transliteration: "sayaʿlamūna", root: "ع ل م", meaning: { en: "they will come to know", ur: "وہ جان لیں گے", ar: "سَيَعلَمُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", aspect: "IMPF", prefix: "س" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "ثُمَّ كَلَّا سَيَعْلَمُونَ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "conjunction" },
      { position: 2, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 3, arabic: "سَيَعْلَمُونَ", transliteration: "sayaʿlamūna", root: "ع ل م", meaning: { en: "they will come to know", ur: "وہ جان لیں گے", ar: "سَيَعلَمُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", emphasis: "repetition for warning" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا",
    words: [
      { position: 1, arabic: "أَلَمْ", transliteration: "ʾa-lam", meaning: { en: "Have We not", ur: "کیا ہم نے نہیں", ar: "أَلَم" }, pos: "INTERROG+NEG", posLabel: "INTERROG+NEG", grammarRole: "rhetorical question" },
      { position: 2, arabic: "نَجْعَلِ", transliteration: "najʿali", root: "ج ع ل", meaning: { en: "made", ur: "بنایا", ar: "نَجعَل" }, pos: "V", posLabel: "V", grammarRole: "predicate", aspect: "JUSS" },
      { position: 3, arabic: "الْأَرْضَ", transliteration: "l-ʾarḍa", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین کو", ar: "الأَرض" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "مِهَادًا", transliteration: "mihādan", root: "م ه د", meaning: { en: "a resting place", ur: "بچھونا", ar: "فِراشاً وَمَهداً" }, pos: "N", posLabel: "N", grammarRole: "complement", creation: true }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "وَالْجِبَالَ أَوْتَادًا",
    words: [
      { position: 1, arabic: "وَالْجِبَالَ", transliteration: "wal-jibāla", root: "ج ب ل", meaning: { en: "And the mountains", ur: "اور پہاڑوں کو", ar: "والجِبال" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "أَوْتَادًا", transliteration: "ʾawtādan", root: "و ت د", meaning: { en: "as stakes", ur: "میخیں", ar: "أَوتاداً" }, pos: "N", posLabel: "N", grammarRole: "complement", scientific: "mountains as stabilizers" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    words: [
      { position: 1, arabic: "وَخَلَقْنَاكُمْ", transliteration: "wa-khalaqnākum", root: "خ ل ق", meaning: { en: "And We created you", ur: "اور ہم نے تمہیں پیدا کیا", ar: "وخَلَقناكُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "أَزْوَاجًا", transliteration: "ʾazwājan", root: "ز و ج", meaning: { en: "in pairs", ur: "جوڑے جوڑے", ar: "أَزواجاً" }, pos: "N", posLabel: "N", grammarRole: "complement" }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا",
    words: [
      { position: 1, arabic: "وَجَعَلْنَا", transliteration: "wa-jaʿalnā", root: "ج ع ل", meaning: { en: "And We made", ur: "اور ہم نے بنایا", ar: "وجَعَلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "نَوْمَكُمْ", transliteration: "nawmakum", root: "ن و م", meaning: { en: "your sleep", ur: "تمہاری نیند کو", ar: "نَومَكُم" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "سُبَاتًا", transliteration: "subātan", root: "س ب ت", meaning: { en: "a rest", ur: "آرام", ar: "سُباتاً" }, pos: "N", posLabel: "N", grammarRole: "complement", meaning_note: "death-like cessation" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا",
    words: [
      { position: 1, arabic: "وَجَعَلْنَا", transliteration: "wa-jaʿalnā", root: "ج ع ل", meaning: { en: "And We made", ur: "اور ہم نے بنایا", ar: "وجَعَلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "اللَّيْلَ", transliteration: "l-layla", root: "ل ي ل", meaning: { en: "the night", ur: "رات کو", ar: "اللَّيل" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "لِبَاسًا", transliteration: "libāsan", root: "ل ب س", meaning: { en: "a covering", ur: "لباس (پردہ)", ar: "لِباساً" }, pos: "N", posLabel: "N", grammarRole: "complement" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "وَجَعَلْنَا النَّهَارَ مَعَاشًا",
    words: [
      { position: 1, arabic: "وَجَعَلْنَا", transliteration: "wa-jaʿalnā", root: "ج ع ل", meaning: { en: "And We made", ur: "اور ہم نے بنایا", ar: "وجَعَلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "النَّهَارَ", transliteration: "l-nahāra", root: "ن ه ر", meaning: { en: "the day", ur: "دن کو", ar: "النَّهار" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "مَعَاشًا", transliteration: "maʿāshan", root: "ع ي ش", meaning: { en: "for livelihood", ur: "معاش (کمائی) کا وقت", ar: "مَعاشاً" }, pos: "N", posLabel: "N", grammarRole: "complement" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا",
    words: [
      { position: 1, arabic: "وَبَنَيْنَا", transliteration: "wa-banaynā", root: "ب ن ي", meaning: { en: "And We built", ur: "اور ہم نے بنائے", ar: "وبَنَينا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "فَوْقَكُمْ", transliteration: "fawqakum", root: "ف و ق", meaning: { en: "above you", ur: "تمہارے اوپر", ar: "فَوقَكُم" }, pos: "N", posLabel: "N", grammarRole: "adverbial" },
      { position: 3, arabic: "سَبْعًا", transliteration: "sabʿan", meaning: { en: "seven", ur: "سات", ar: "سَبعاً" }, pos: "NUM", posLabel: "NUM", grammarRole: "object" },
      { position: 4, arabic: "شِدَادًا", transliteration: "shidādan", root: "ش د د", meaning: { en: "strong (heavens)", ur: "مضبوط (آسمان)", ar: "شِداداً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا",
    words: [
      { position: 1, arabic: "وَجَعَلْنَا", transliteration: "wa-jaʿalnā", root: "ج ع ل", meaning: { en: "And We made", ur: "اور ہم نے بنایا", ar: "وجَعَلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "سِرَاجًا", transliteration: "sirājan", root: "س ر ج", meaning: { en: "a lamp", ur: "چراغ", ar: "سِراجاً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "وَهَّاجًا", transliteration: "wahhājan", root: "و ه ج", meaning: { en: "blazing", ur: "چمکدار", ar: "وَهّاجاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", scientific: "sun as burning lamp" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا",
    words: [
      { position: 1, arabic: "وَأَنزَلْنَا", transliteration: "wa-ʾanzalnā", root: "ن ز ل", meaning: { en: "And We sent down", ur: "اور ہم نے اتارا", ar: "وأَنزَلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 2, arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "الْمُعْصِرَاتِ", transliteration: "l-muʿṣirāti", root: "ع ص ر", meaning: { en: "the rain clouds", ur: "نچوڑنے والے بادلوں", ar: "السَّحاب" }, pos: "N", posLabel: "N", grammarRole: "genitive", form: "IV" },
      { position: 4, arabic: "مَاءً", transliteration: "māʾan", root: "م و ه", meaning: { en: "water", ur: "پانی", ar: "ماءً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "ثَجَّاجًا", transliteration: "thajjājan", root: "ث ج ج", meaning: { en: "pouring abundantly", ur: "موسلادھار", ar: "ثَجّاجاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا",
    words: [
      { position: 1, arabic: "لِّنُخْرِجَ", transliteration: "li-nukhrija", root: "خ ر ج", meaning: { en: "that We may bring forth", ur: "تاکہ ہم نکالیں", ar: "لِنُخرِجَ" }, pos: "V", posLabel: "V", grammarRole: "purpose", form: "IV" },
      { position: 2, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "by it", ur: "اس سے", ar: "بِهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "instrument" },
      { position: 3, arabic: "حَبًّا", transliteration: "ḥabban", root: "ح ب ب", meaning: { en: "grain", ur: "اناج", ar: "حَبّاً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "وَنَبَاتًا", transliteration: "wa-nabātan", root: "ن ب ت", meaning: { en: "and vegetation", ur: "اور سبزی", ar: "ونَباتاً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 1, to: 4, label: 'فعل + مفعول به' }
      ],
    },
  },

  16: {
    ayahNumber: 16,
    arabic: "وَجَنَّاتٍ أَلْفَافًا",
    words: [
      { position: 1, arabic: "وَجَنَّاتٍ", transliteration: "wa-jannātin", root: "ج ن ن", meaning: { en: "and gardens", ur: "اور باغات", ar: "وجَنّات" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "أَلْفَافًا", transliteration: "ʾalfāfan", root: "ل ف ف", meaning: { en: "dense/luxuriant", ur: "گھنے", ar: "أَلفافاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  17: {
    ayahNumber: 17,
    arabic: "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "the Day", ur: "دن", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "الْفَصْلِ", transliteration: "l-faṣli", root: "ف ص ل", meaning: { en: "of Judgment", ur: "فیصلے کا", ar: "الفَصل" }, pos: "N", posLabel: "N", grammarRole: "genitive", dayOfJudgment: true },
      { position: 4, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كان" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 5, arabic: "مِيقَاتًا", transliteration: "mīqātan", root: "و ق ت", meaning: { en: "an appointed time", ur: "مقررہ وقت", ar: "مِيقاتاً" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 5, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  18: {
    ayahNumber: 18,
    arabic: "يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "The Day", ur: "جس دن", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "adverbial" },
      { position: 2, arabic: "يُنفَخُ", transliteration: "yunfakhu", root: "ن ف خ", meaning: { en: "is blown", ur: "پھونکا جائے گا", ar: "يُنفَخ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 3, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فِي" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "الصُّورِ", transliteration: "l-ṣūri", root: "ص و ر", meaning: { en: "the Trumpet", ur: "صور", ar: "الصُّور" }, pos: "N", posLabel: "N", grammarRole: "locative" },
      { position: 5, arabic: "فَتَأْتُونَ", transliteration: "fa-taʾtūna", root: "أ ت ي", meaning: { en: "and you will come", ur: "تو تم آؤ گے", ar: "فَتَأتُونَ" }, pos: "V", posLabel: "V", grammarRole: "consequence" },
      { position: 6, arabic: "أَفْوَاجًا", transliteration: "ʾafwājan", root: "ف و ج", meaning: { en: "in crowds", ur: "گروہ گروہ", ar: "أَفواجاً" }, pos: "N", posLabel: "N", grammarRole: "adverbial" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  19: {
    ayahNumber: 19,
    arabic: "وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا",
    words: [
      { position: 1, arabic: "وَفُتِحَتِ", transliteration: "wa-futiḥati", root: "ف ت ح", meaning: { en: "And is opened", ur: "اور کھول دیا جائے گا", ar: "وفُتِحَت" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 2, arabic: "السَّمَاءُ", transliteration: "l-samāʾu", root: "س م و", meaning: { en: "the sky", ur: "آسمان", ar: "السَّماء" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "فَكَانَتْ", transliteration: "fa-kānat", root: "ك و ن", meaning: { en: "and becomes", ur: "تو ہو جائے گا", ar: "فَكانَت" }, pos: "V", posLabel: "V", grammarRole: "consequence" },
      { position: 4, arabic: "أَبْوَابًا", transliteration: "ʾabwāban", root: "ب و ب", meaning: { en: "gates", ur: "دروازے", ar: "أَبواباً" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا",
    words: [
      { position: 1, arabic: "وَسُيِّرَتِ", transliteration: "wa-suyyirati", root: "س ي ر", meaning: { en: "And are moved", ur: "اور چلائے جائیں گے", ar: "وسُيِّرَت" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive", form: "II" },
      { position: 2, arabic: "الْجِبَالُ", transliteration: "l-jibālu", root: "ج ب ل", meaning: { en: "the mountains", ur: "پہاڑ", ar: "الجِبال" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "فَكَانَتْ", transliteration: "fa-kānat", root: "ك و ن", meaning: { en: "and become", ur: "تو ہو جائیں گے", ar: "فَكانَت" }, pos: "V", posLabel: "V", grammarRole: "consequence" },
      { position: 4, arabic: "سَرَابًا", transliteration: "sarāban", root: "س ر ب", meaning: { en: "a mirage", ur: "سراب", ar: "سَراباً" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  21: {
    ayahNumber: 21,
    arabic: "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "Hell", ur: "جہنم", ar: "جَهَنَّم" }, pos: "N", posLabel: "N", grammarRole: "subject", proper: true },
      { position: 3, arabic: "كَانَتْ", transliteration: "kānat", root: "ك و ن", meaning: { en: "has been", ur: "ہے", ar: "كانَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "مِرْصَادًا", transliteration: "mirṣādan", root: "ر ص د", meaning: { en: "a place of ambush", ur: "گھات کی جگہ", ar: "مِرصاداً" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  22: {
    ayahNumber: 22,
    arabic: "لِّلطَّاغِينَ مَآبًا",
    words: [
      { position: 1, arabic: "لِّلطَّاغِينَ", transliteration: "lil-ṭāghīna", root: "ط غ ي", meaning: { en: "For the transgressors", ur: "سرکشوں کے لیے", ar: "لِلطّاغِينَ" }, pos: "N", posLabel: "N", grammarRole: "purpose" },
      { position: 2, arabic: "مَآبًا", transliteration: "maʾāban", root: "أ و ب", meaning: { en: "a place of return", ur: "ٹھکانا", ar: "مَآباً" }, pos: "N", posLabel: "N", grammarRole: "complement" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },

  23: {
    ayahNumber: 23,
    arabic: "لَّابِثِينَ فِيهَا أَحْقَابًا",
    words: [
      { position: 1, arabic: "لَّابِثِينَ", transliteration: "lābithīna", root: "ل ب ث", meaning: { en: "They will remain", ur: "رہیں گے", ar: "لابِثِينَ" }, pos: "N", posLabel: "N", grammarRole: "circumstantial" },
      { position: 2, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فِيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 3, arabic: "أَحْقَابًا", transliteration: "ʾaḥqāban", root: "ح ق ب", meaning: { en: "for ages", ur: "مدتوں تک", ar: "أَحقاباً" }, pos: "N", posLabel: "N", grammarRole: "temporal", meaning_note: "endless periods" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },

  24: {
    ayahNumber: 24,
    arabic: "لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا",
    words: [
      { position: 1, arabic: "لَّا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 2, arabic: "يَذُوقُونَ", transliteration: "yadhūqūna", root: "ذ و ق", meaning: { en: "will they taste", ur: "چکھیں گے", ar: "يَذُوقُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فِيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 4, arabic: "بَرْدًا", transliteration: "bardan", root: "ب ر د", meaning: { en: "any coolness", ur: "ٹھنڈک", ar: "بَرداً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 6, arabic: "شَرَابًا", transliteration: "sharāban", root: "ش ر ب", meaning: { en: "any drink", ur: "پینے کو", ar: "شَراباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 4, label: 'فعل + مفعول به' }
      ],
    },
  },

  25: {
    ayahNumber: 25,
    arabic: "إِلَّا حَمِيمًا وَغَسَّاقًا",
    words: [
      { position: 1, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "Except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 2, arabic: "حَمِيمًا", transliteration: "ḥamīman", root: "ح م م", meaning: { en: "scalding water", ur: "کھولتا پانی", ar: "حَمِيماً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "وَغَسَّاقًا", transliteration: "wa-ghassāqan", root: "غ س ق", meaning: { en: "and purulence", ur: "اور پیپ", ar: "وغَسّاقاً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },

  26: {
    ayahNumber: 26,
    arabic: "جَزَاءً وِفَاقًا",
    words: [
      { position: 1, arabic: "جَزَاءً", transliteration: "jazāʾan", root: "ج ز ي", meaning: { en: "A recompense", ur: "بدلہ", ar: "جَزاءً" }, pos: "N", posLabel: "N", grammarRole: "circumstantial" },
      { position: 2, arabic: "وِفَاقًا", transliteration: "wifāqan", root: "و ف ق", meaning: { en: "appropriate", ur: "موافق", ar: "وِفاقاً" }, pos: "N", posLabel: "N", grammarRole: "attribute", meaning_note: "matching their deeds" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  27: {
    ayahNumber: 27,
    arabic: "إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا",
    words: [
      { position: 1, arabic: "إِنَّهُمْ", transliteration: "ʾinnahum", meaning: { en: "Indeed they", ur: "بیشک وہ", ar: "إِنَّهُم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "كَانُوا", transliteration: "kānū", root: "ك و ن", meaning: { en: "were", ur: "تھے", ar: "كانُوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 4, arabic: "يَرْجُونَ", transliteration: "yarjūna", root: "ر ج و", meaning: { en: "expecting", ur: "امید رکھتے تھے", ar: "يَرجُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 5, arabic: "حِسَابًا", transliteration: "ḥisāban", root: "ح س ب", meaning: { en: "accountability", ur: "حساب کی", ar: "حِساباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 4, to: 5, label: 'فعل + مفعول به' }
      ],
    },
  },

  28: {
    ayahNumber: 28,
    arabic: "وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا",
    words: [
      { position: 1, arabic: "وَكَذَّبُوا", transliteration: "wa-kadhdhabū", root: "ك ذ ب", meaning: { en: "And they denied", ur: "اور انہوں نے جھٹلایا", ar: "وكَذَّبُوا" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 2, arabic: "بِآيَاتِنَا", transliteration: "bi-ʾāyātinā", root: "أ ي ي", meaning: { en: "Our signs", ur: "ہماری آیات کو", ar: "بِآياتِنا" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "كِذَّابًا", transliteration: "kidhdhāban", root: "ك ذ ب", meaning: { en: "completely", ur: "بالکل", ar: "كِذّاباً" }, pos: "N", posLabel: "N", grammarRole: "adverbial", emphasis: "intensive form" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
  },

  29: {
    ayahNumber: 29,
    arabic: "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا",
    words: [
      { position: 1, arabic: "وَكُلَّ", transliteration: "wa-kulla", meaning: { en: "And everything", ur: "اور ہر چیز", ar: "وكُلَّ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "کو", ar: "شَيء" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "أَحْصَيْنَاهُ", transliteration: "ʾaḥṣaynāhu", root: "ح ص ي", meaning: { en: "We have enumerated", ur: "ہم نے گن رکھا ہے", ar: "أَحصَيناهُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 4, arabic: "كِتَابًا", transliteration: "kitāban", root: "ك ت ب", meaning: { en: "in a record", ur: "لکھ کر", ar: "كِتاباً" }, pos: "N", posLabel: "N", grammarRole: "adverbial" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  30: {
    ayahNumber: 30,
    arabic: "فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا",
    words: [
      { position: 1, arabic: "فَذُوقُوا", transliteration: "fa-dhūqū", root: "ذ و ق", meaning: { en: "So taste", ur: "تو چکھو", ar: "فَذُوقُوا" }, pos: "V", posLabel: "V", grammarRole: "command", mood: "IMP" },
      { position: 2, arabic: "فَلَن", transliteration: "fa-lan", meaning: { en: "for never", ur: "پس ہرگز نہیں", ar: "فَلَن" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 3, arabic: "نَّزِيدَكُمْ", transliteration: "nazīdakum", root: "ز ي د", meaning: { en: "will We increase you", ur: "ہم تمہیں بڑھائیں گے", ar: "نَزِيدَكُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 4, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 5, arabic: "عَذَابًا", transliteration: "ʿadhāban", root: "ع ذ ب", meaning: { en: "in punishment", ur: "عذاب کے", ar: "عَذاباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 5, label: 'فعل + مفعول به' }
      ],
    },
  },

  31: {
    ayahNumber: 31,
    arabic: "إِنَّ لِلْمُتَّقِينَ مَفَازًا",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "لِلْمُتَّقِينَ", transliteration: "lil-muttaqīna", root: "و ق ي", meaning: { en: "for the righteous", ur: "متقیوں کے لیے", ar: "لِلمُتَّقِينَ" }, pos: "N", posLabel: "N", grammarRole: "benefactive", form: "VIII" },
      { position: 3, arabic: "مَفَازًا", transliteration: "mafāzan", root: "ف و ز", meaning: { en: "a place of success", ur: "کامیابی ہے", ar: "مَفازاً" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },

  32: {
    ayahNumber: 32,
    arabic: "حَدَائِقَ وَأَعْنَابًا",
    words: [
      { position: 1, arabic: "حَدَائِقَ", transliteration: "ḥadāʾiqa", root: "ح د ق", meaning: { en: "Gardens", ur: "باغات", ar: "حَدائِقَ" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "وَأَعْنَابًا", transliteration: "wa-ʾaʿnāban", root: "ع ن ب", meaning: { en: "and grapevines", ur: "اور انگور", ar: "وأَعناباً" }, pos: "N", posLabel: "N", grammarRole: "conjunction" }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },

  33: {
    ayahNumber: 33,
    arabic: "وَكَوَاعِبَ أَتْرَابًا",
    words: [
      { position: 1, arabic: "وَكَوَاعِبَ", transliteration: "wa-kawāʿiba", root: "ك ع ب", meaning: { en: "And full-breasted companions", ur: "اور ہم عمر جوان عورتیں", ar: "وكَواعِبَ" }, pos: "N", posLabel: "N", grammarRole: "conjunction" },
      { position: 2, arabic: "أَتْرَابًا", transliteration: "ʾatrāban", root: "ت ر ب", meaning: { en: "of equal age", ur: "ہم عمر", ar: "أَتراباً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  34: {
    ayahNumber: 34,
    arabic: "وَكَأْسًا دِهَاقًا",
    words: [
      { position: 1, arabic: "وَكَأْسًا", transliteration: "wa-kaʾsan", root: "ك أ س", meaning: { en: "And a cup", ur: "اور پیالے", ar: "وكَأساً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "دِهَاقًا", transliteration: "dihāqan", root: "د ه ق", meaning: { en: "full", ur: "لبالب بھرے", ar: "دِهاقاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  35: {
    ayahNumber: 35,
    arabic: "لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا",
    words: [
      { position: 1, arabic: "لَّا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 2, arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", root: "س م ع", meaning: { en: "will they hear", ur: "سنیں گے", ar: "يَسمَعُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فِيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 4, arabic: "لَغْوًا", transliteration: "laghwan", root: "ل غ و", meaning: { en: "idle talk", ur: "لغو بات", ar: "لَغواً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 6, arabic: "كِذَّابًا", transliteration: "kidhdhāban", root: "ك ذ ب", meaning: { en: "denial", ur: "جھوٹ", ar: "كِذّاباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 4, label: 'فعل + مفعول به' }
      ],
    },
  },

  36: {
    ayahNumber: 36,
    arabic: "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا",
    words: [
      { position: 1, arabic: "جَزَاءً", transliteration: "jazāʾan", root: "ج ز ي", meaning: { en: "A reward", ur: "بدلہ", ar: "جَزاءً" }, pos: "N", posLabel: "N", grammarRole: "circumstantial" },
      { position: 2, arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "رَّبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرے رب", ar: "رَبِّكَ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 4, arabic: "عَطَاءً", transliteration: "ʿaṭāʾan", root: "ع ط و", meaning: { en: "a gift", ur: "عطیہ", ar: "عَطاءً" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 5, arabic: "حِسَابًا", transliteration: "ḥisāban", root: "ح س ب", meaning: { en: "sufficient", ur: "کافی", ar: "حِساباً" }, pos: "N", posLabel: "N", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 4, to: 5, label: 'موصوف + صفت' },
      { from: 3, to: 4, label: 'بدل' }
      ],
    },
  },

  37: {
    ayahNumber: 37,
    arabic: "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَـٰنِ ۖ لَا يَمْلِكُونَ مِنْهُ خِطَابًا",
    words: [
      { position: 1, arabic: "رَّبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "Lord", ur: "رب", ar: "رَبِّ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "السَّمَاوَاتِ", transliteration: "l-samāwāti", root: "س م و", meaning: { en: "of the heavens", ur: "آسمانوں کے", ar: "السَّماوات" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "وَالْأَرْضِ", transliteration: "wal-ʾarḍi", root: "أ ر ض", meaning: { en: "and earth", ur: "اور زمین کے", ar: "والأَرض" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 4, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "conjunction" },
      { position: 5, arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "between them", ur: "ان کے درمیان ہے", ar: "بَينَهُما" }, pos: "N", posLabel: "N", grammarRole: "locative" },
      { position: 6, arabic: "الرَّحْمَـٰنِ", transliteration: "l-raḥmāni", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمٰن", ar: "الرَّحمان" }, pos: "N", posLabel: "N", grammarRole: "apposition", divine: true },
      { position: 7, arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 8, arabic: "يَمْلِكُونَ", transliteration: "yamlikūna", root: "م ل ك", meaning: { en: "they possess", ur: "مالک ہیں", ar: "يَملِكُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 9, arabic: "مِنْهُ", transliteration: "minhu", meaning: { en: "from Him", ur: "اس سے", ar: "مِنهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "source" },
      { position: 10, arabic: "خِطَابًا", transliteration: "khiṭāban", root: "خ ط ب", meaning: { en: "any speech", ur: "بات کرنے کا", ar: "خِطاباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 8, label: 'مبتدأ + خبر' },
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
      { from: 3, to: 5, label: 'عطف' },
      { from: 5, to: 6, label: 'بدل' },
      { from: 7, to: 8, label: 'نفی + فعل' },
      { from: 8, to: 10, label: 'فعل + مفعول به' }
      ],
    },
  },

  38: {
    ayahNumber: 38,
    arabic: "يَوْمَ يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا ۖ لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَـٰنُ وَقَالَ صَوَابًا",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "The Day", ur: "جس دن", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 2, arabic: "يَقُومُ", transliteration: "yaqūmu", root: "ق و م", meaning: { en: "will stand", ur: "کھڑے ہوں گے", ar: "يَقُومُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "الرُّوحُ", transliteration: "l-rūḥu", root: "ر و ح", meaning: { en: "the Spirit", ur: "روح (جبریل)", ar: "الرُّوح" }, pos: "N", posLabel: "N", grammarRole: "subject", note: "Jibreel" },
      { position: 4, arabic: "وَالْمَلَائِكَةُ", transliteration: "wal-malāʾikatu", root: "م ل ك", meaning: { en: "and the angels", ur: "اور فرشتے", ar: "والمَلائِكَة" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 5, arabic: "صَفًّا", transliteration: "ṣaffan", root: "ص ف ف", meaning: { en: "in rows", ur: "صف باندھے", ar: "صَفّاً" }, pos: "N", posLabel: "N", grammarRole: "adverbial" },
      { position: 6, arabic: "لَّا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 7, arabic: "يَتَكَلَّمُونَ", transliteration: "yatakallamūna", root: "ك ل م", meaning: { en: "they will speak", ur: "بولیں گے", ar: "يَتَكَلَّمُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "V" },
      { position: 8, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 9, arabic: "مَنْ", transliteration: "man", meaning: { en: "whom", ur: "جسے", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 10, arabic: "أَذِنَ", transliteration: "ʾadhina", root: "أ ذ ن", meaning: { en: "has permitted", ur: "اجازت دی", ar: "أَذِنَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 11, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to him", ur: "اسے", ar: "لَهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "indirect object" },
      { position: 12, arabic: "الرَّحْمَـٰنُ", transliteration: "l-raḥmānu", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمٰن نے", ar: "الرَّحمان" }, pos: "N", posLabel: "N", grammarRole: "subject", divine: true },
      { position: 13, arabic: "وَقَالَ", transliteration: "wa-qāla", root: "ق و ل", meaning: { en: "and speaks", ur: "اور کہے", ar: "وقالَ" }, pos: "V", posLabel: "V", grammarRole: "conjunction" },
      { position: 14, arabic: "صَوَابًا", transliteration: "ṣawāban", root: "ص و ب", meaning: { en: "what is right", ur: "ٹھیک بات", ar: "صَواباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 2, to: 4, label: 'فعل + فاعل' },
      { from: 3, to: 7, label: 'مبتدأ + خبر' },
      { from: 4, to: 7, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'نفی + فعل' },
      { from: 9, to: 10, label: 'موصول + صلة' },
      { from: 10, to: 12, label: 'فعل + فاعل' },
      { from: 13, to: 14, label: 'فعل + مفعول به' },
      { from: 12, to: 14, label: 'عطف' }
      ],
    },
  },

  39: {
    ayahNumber: 39,
    arabic: "ذَٰلِكَ الْيَوْمُ الْحَقُّ ۖ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا",
    words: [
      { position: 1, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ", ar: "ذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 2, arabic: "الْيَوْمُ", transliteration: "l-yawmu", root: "ي و م", meaning: { en: "Day", ur: "دن ہے", ar: "اليَوم" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 3, arabic: "الْحَقُّ", transliteration: "l-ḥaqqu", root: "ح ق ق", meaning: { en: "the True", ur: "سچا", ar: "الحَقّ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 4, arabic: "فَمَن", transliteration: "fa-man", meaning: { en: "So whoever", ur: "پس جو", ar: "فَمَن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "conditional" },
      { position: 5, arabic: "شَاءَ", transliteration: "shāʾa", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "شاءَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 6, arabic: "اتَّخَذَ", transliteration: "ittakhadha", root: "أ خ ذ", meaning: { en: "may take", ur: "بنا لے", ar: "اتَّخَذَ" }, pos: "V", posLabel: "V", grammarRole: "consequence", form: "VIII" },
      { position: 7, arabic: "إِلَىٰ", transliteration: "ʾilā", meaning: { en: "to", ur: "کی طرف", ar: "إِلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 8, arabic: "رَبِّهِ", transliteration: "rabbihi", root: "ر ب ب", meaning: { en: "his Lord", ur: "اپنے رب", ar: "رَبِّهِ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 9, arabic: "مَآبًا", transliteration: "maʾāban", root: "أ و ب", meaning: { en: "a return", ur: "راستہ", ar: "مَآباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'موصوف + صفت' },
      { from: 4, to: 5, label: 'شرط + فعل' },
      { from: 6, to: 9, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },

  40: {
    ayahNumber: 40,
    arabic: "إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا",
    words: [
      { position: 1, arabic: "إِنَّا", transliteration: "ʾinnā", meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إِنّا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "أَنذَرْنَاكُمْ", transliteration: "ʾandharnākum", root: "ن ذ ر", meaning: { en: "have warned you", ur: "تمہیں ڈرایا", ar: "أَنذَرناكُم" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "عَذَابًا", transliteration: "ʿadhāban", root: "ع ذ ب", meaning: { en: "of a punishment", ur: "عذاب سے", ar: "عَذاباً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "قَرِيبًا", transliteration: "qarīban", root: "ق ر ب", meaning: { en: "near", ur: "قریب", ar: "قَرِيباً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 5, arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "the Day", ur: "جس دن", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 6, arabic: "يَنظُرُ", transliteration: "yanẓuru", root: "ن ظ ر", meaning: { en: "will observe", ur: "دیکھے گا", ar: "يَنظُرُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 7, arabic: "الْمَرْءُ", transliteration: "l-marʾu", root: "م ر أ", meaning: { en: "the man", ur: "انسان", ar: "المَرء" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 8, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 9, arabic: "قَدَّمَتْ", transliteration: "qaddamat", root: "ق د م", meaning: { en: "have sent forth", ur: "آگے بھیجا", ar: "قَدَّمَت" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 10, arabic: "يَدَاهُ", transliteration: "yadāhu", root: "ي د ي", meaning: { en: "his hands", ur: "اس کے ہاتھوں نے", ar: "يَداهُ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 11, arabic: "وَيَقُولُ", transliteration: "wa-yaqūlu", root: "ق و ل", meaning: { en: "and will say", ur: "اور کہے گا", ar: "ويَقُولُ" }, pos: "V", posLabel: "V", grammarRole: "conjunction" },
      { position: 12, arabic: "الْكَافِرُ", transliteration: "l-kāfiru", root: "ك ف ر", meaning: { en: "the disbeliever", ur: "کافر", ar: "الكافِر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 13, arabic: "يَا", transliteration: "yā", meaning: { en: "Oh", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammarRole: "vocative" },
      { position: 14, arabic: "لَيْتَنِي", transliteration: "laytanī", meaning: { en: "would that I", ur: "کاش میں", ar: "لَيتَنِي" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "wish" },
      { position: 15, arabic: "كُنتُ", transliteration: "kuntu", root: "ك و ن", meaning: { en: "had been", ur: "ہوتا", ar: "كُنتُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 16, arabic: "تُرَابًا", transliteration: "turāban", root: "ت ر ب", meaning: { en: "dust", ur: "مٹی", ar: "تُراباً" }, pos: "N", posLabel: "N", grammarRole: "predicate", powerful: "disbeliever's ultimate regret" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'موصوف + صفت' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 9, label: 'مبتدأ + خبر' },
      { from: 8, to: 9, label: 'موصول + صلة' },
      { from: 9, to: 10, label: 'فعل + فاعل' },
      { from: 9, to: 12, label: 'فعل + فاعل' },
      { from: 10, to: 16, label: 'مبتدأ + خبر' },
      { from: 11, to: 12, label: 'فعل + فاعل' },
      { from: 10, to: 12, label: 'عطف' },
      { from: 12, to: 16, label: 'مبتدأ + خبر' }
      ],
    },
  }
};

export default TREEBANK_DATA;
