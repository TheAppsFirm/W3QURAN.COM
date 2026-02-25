/**
 * Surah Al-Mutaffifin (83) - Quranic Arabic Treebank
 * The Defrauders
 * Total Ayahs: 36
 * Theme: Cheaters in trade, Sijjin vs Illiyyun, righteous triumph
 */

export const TREEBANK_DATA = {
  surahId: 83,
  surahName: "Al-Mutaffifin",
  surahNameArabic: "المطففين",
  totalAyahs: 36,
  revelationType: "Makki",
  theme: "Warning to cheaters; contrasting records of wicked and righteous",

  1: {
    ayahNumber: 1,
    arabic: "وَيْلٌ لِّلْمُطَفِّفِينَ",
    words: [
      { position: 1, arabic: "وَيْلٌ", transliteration: "waylun", root: "و ي ل", meaning: { en: "Woe", ur: "ہلاکت ہے", ar: "هَلاكٌ" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { linguisticMiracle: "Opening curse - wayl = valley in Hell or destruction" } },
      { position: 2, arabic: "لِّلْمُطَفِّفِينَ", transliteration: "lil-muṭaffifīna", root: "ط ف ف", meaning: { en: "to the defrauders", ur: "ناپ تول میں کمی کرنے والوں کے لیے", ar: "للمُنقِصينَ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", features: { pattern: "مُفَعِّل" }, advanced: { rootFamily: ["طَفّ", "تطفيف"], linguisticMiracle: "Tatfif = giving less than due in measure/weight" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ",
    words: [
      { position: 1, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 2, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "temporal" },
      { position: 3, arabic: "اكْتَالُوا", transliteration: "iktālū", root: "ك ي ل", meaning: { en: "they take measure", ur: "ناپ لیں", ar: "أَخَذوا بالكَيل" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VIII" } },
      { position: 4, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "النَّاسِ", transliteration: "al-nāsi", meaning: { en: "people", ur: "لوگوں", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "يَسْتَوْفُونَ", transliteration: "yastawfūna", root: "و ف ي", meaning: { en: "they take in full", ur: "پورا لیتے ہیں", ar: "يَأخُذونَ كامِلاً" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "X" }, advanced: { linguisticMiracle: "Form X - demanding full measure for themselves" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' },
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "temporal" },
      { position: 2, arabic: "كَالُوهُمْ", transliteration: "kālūhum", root: "ك ي ل", meaning: { en: "they measure to them", ur: "انہیں ناپ کر دیں", ar: "كالوا لَهُم" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 3, arabic: "أَو", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أَو" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "disjunction" },
      { position: 4, arabic: "وَّزَنُوهُمْ", transliteration: "wazanūhum", root: "و ز ن", meaning: { en: "weigh to them", ur: "تولیں", ar: "وَزَنوا لَهُم" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 5, arabic: "يُخْسِرُونَ", transliteration: "yukhsirūna", root: "خ س ر", meaning: { en: "they give less", ur: "کم دیتے ہیں", ar: "يُنقِصونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" }, advanced: { linguisticMiracle: "Form IV causative - they cause others to lose" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ",
    words: [
      { position: 1, arabic: "أَلَا", transliteration: "alā", meaning: { en: "Do not", ur: "کیا نہیں", ar: "أَلا" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative + negation" },
      { position: 2, arabic: "يَظُنُّ", transliteration: "yaẓunnu", root: "ظ ن ن", meaning: { en: "think", ur: "سمجھتے", ar: "يَعتَقِدُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "أُولَٰئِكَ", transliteration: "ulā'ika", meaning: { en: "those", ur: "یہ لوگ", ar: "أُولئِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 4, arabic: "أَنَّهُم", transliteration: "annahum", meaning: { en: "that they", ur: "کہ وہ", ar: "أَنَّهُم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "subject of clause" },
      { position: 5, arabic: "مَّبْعُوثُونَ", transliteration: "mabʿūthūna", root: "ب ع ث", meaning: { en: "will be resurrected", ur: "اٹھائے جائیں گے", ar: "سَيُقامونَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "مَفْعُول" }, advanced: { linguisticMiracle: "Their cheating shows they don't expect resurrection" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 3, to: 5, label: 'مبتدأ + خبر' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "لِيَوْمٍ عَظِيمٍ",
    words: [
      { position: 1, arabic: "لِيَوْمٍ", transliteration: "li-yawmin", meaning: { en: "For a Day", ur: "ایک دن کے لیے", ar: "لِيَومٍ" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 2, arabic: "عَظِيمٍ", transliteration: "ʿaẓīmin", root: "ع ظ م", meaning: { en: "great/tremendous", ur: "بڑے", ar: "هائِل" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb of time" },
      { position: 2, arabic: "يَقُومُ", transliteration: "yaqūmu", root: "ق و م", meaning: { en: "will stand", ur: "کھڑے ہوں گے", ar: "يَقِفُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "النَّاسُ", transliteration: "al-nāsu", meaning: { en: "mankind", ur: "لوگ", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "لِرَبِّ", transliteration: "li-rabbi", meaning: { en: "before the Lord", ur: "رب کے سامنے", ar: "أَمامَ رَبِّ" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "الْعَالَمِينَ", transliteration: "al-ʿālamīna", root: "ع ل م", meaning: { en: "of the worlds", ur: "جہانوں کے", ar: "الكَونِ" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + فاعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "حَقًّا" }, pos: "RET", posLabel: "RET", grammarRole: "retraction/emphasis" },
      { position: 2, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 3, arabic: "كِتَابَ", transliteration: "kitāba", root: "ك ت ب", meaning: { en: "record", ur: "نامہ", ar: "سِجِلّ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "الْفُجَّارِ", transliteration: "al-fujjāri", root: "ف ج ر", meaning: { en: "of the wicked", ur: "فاجروں کا", ar: "الفاسِقينَ" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 5, arabic: "لَفِي", transliteration: "lafī", meaning: { en: "is surely in", ur: "یقیناً ہے", ar: "لَموجودٌ في" }, pos: "EMPH+PREP", posLabel: "EMPH+PREP", grammarRole: "emphasis + preposition" },
      { position: 6, arabic: "سِجِّينٍ", transliteration: "sijjīnin", root: "س ج ن", meaning: { en: "Sijjin", ur: "سجین میں", ar: "سِجن" }, pos: "PN", posLabel: "PN", grammarRole: "prepositional phrase", advanced: { rootFamily: ["سِجن", "سَجين", "سِجّين"], linguisticMiracle: "From سِجن (prison) - record in lowest prison" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'توکید' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "وَمَا أَدْرَاكَ مَا سِجِّينٌ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INT", posLabel: "CONJ+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "أَدْرَاكَ", transliteration: "adrāka", root: "د ر ي", meaning: { en: "can make you know", ur: "تجھے سمجھائے", ar: "أَعلَمَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا ہے", ar: "ما" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 4, arabic: "سِجِّينٌ", transliteration: "sijjīnun", meaning: { en: "Sijjin", ur: "سجین", ar: "سِجّين" }, pos: "PN", posLabel: "PN", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "كِتَابٌ مَّرْقُومٌ",
    words: [
      { position: 1, arabic: "كِتَابٌ", transliteration: "kitābun", meaning: { en: "A record", ur: "کتاب ہے", ar: "سِجِلٌّ" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 2, arabic: "مَّرْقُومٌ", transliteration: "marqūmun", root: "ر ق م", meaning: { en: "inscribed", ur: "لکھی ہوئی", ar: "مَكتوبٌ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مَفْعُول" }, advanced: { linguisticMiracle: "Permanently inscribed - cannot be erased" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
    words: [
      { position: 1, arabic: "وَيْلٌ", transliteration: "waylun", meaning: { en: "Woe", ur: "ہلاکت ہے", ar: "هَلاكٌ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: { en: "that Day", ur: "اس دن", ar: "في ذلِكَ اليَوم" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 3, arabic: "لِّلْمُكَذِّبِينَ", transliteration: "lil-mukadhdhibīna", root: "ك ذ ب", meaning: { en: "to the deniers", ur: "جھٹلانے والوں کے لیے", ar: "للجاحِدينَ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" }
    ],
    structure: {
      relationships: [],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ",
    words: [
      { position: 1, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 2, arabic: "يُكَذِّبُونَ", transliteration: "yukadhdhibūna", root: "ك ذ ب", meaning: { en: "deny", ur: "جھٹلاتے ہیں", ar: "يَجحَدونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II" } },
      { position: 3, arabic: "بِيَوْمِ", transliteration: "bi-yawmi", meaning: { en: "the Day", ur: "دن کو", ar: "بِيَوم" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "الدِّينِ", transliteration: "al-dīni", root: "د ي ن", meaning: { en: "of Judgment", ur: "جزا کے", ar: "الحِساب" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And none", ur: "اور نہیں", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "يُكَذِّبُ", transliteration: "yukadhdhibu", meaning: { en: "denies", ur: "جھٹلاتا", ar: "يَجحَدُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "it", ur: "اسے", ar: "بِهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "سِوى" }, pos: "EXCEPT", posLabel: "EXCEPT", grammarRole: "exception" },
      { position: 5, arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "ہر", ar: "كُلّ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 6, arabic: "مُعْتَدٍ", transliteration: "muʿtadin", root: "ع د و", meaning: { en: "transgressor", ur: "حد سے گزرنے والا", ar: "ظالِم" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مُفْتَعِل" } },
      { position: 7, arabic: "أَثِيمٍ", transliteration: "athīmin", root: "أ ث م", meaning: { en: "sinful", ur: "گنہگار", ar: "خاطِئ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 5, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "إِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا قَالَ أَسَاطِيرُ الْأَوَّلِينَ",
    words: [
      { position: 1, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "temporal" },
      { position: 2, arabic: "تُتْلَىٰ", transliteration: "tutlā", root: "ت ل و", meaning: { en: "are recited", ur: "پڑھی جاتی ہیں", ar: "تُقرَأُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 3, arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "to him", ur: "اس پر", ar: "عليهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "آيَاتُنَا", transliteration: "āyātunā", root: "أ ي ي", meaning: { en: "Our verses", ur: "ہماری آیتیں", ar: "آياتُنا" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject" },
      { position: 5, arabic: "قَالَ", transliteration: "qāla", meaning: { en: "he says", ur: "کہتا ہے", ar: "قالَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 6, arabic: "أَسَاطِيرُ", transliteration: "asāṭīru", root: "س ط ر", meaning: { en: "Legends", ur: "کہانیاں ہیں", ar: "خُرافات" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 7, arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīna", meaning: { en: "of the ancients", ur: "اگلوں کی", ar: "القُدَماء" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Dismissing revelation as myths - mark of transgressor" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 2, to: 4, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 4, to: 6, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "كَلَّا ۖ بَلْ ۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا يَكْسِبُونَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "حَقًّا" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 2, arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بَل" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 3, arabic: "رَانَ", transliteration: "rāna", root: "ر ي ن", meaning: { en: "has covered", ur: "چھا گیا ہے", ar: "غَطّى" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { rootFamily: ["رَين", "رَان"], linguisticMiracle: "Ran = rust/covering. Sins coat the heart" } },
      { position: 4, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "قُلُوبِهِم", transliteration: "qulūbihim", root: "ق ل ب", meaning: { en: "their hearts", ur: "ان کے دلوں", ar: "قُلوبِهِم" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "subject" },
      { position: 7, arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ کرتے تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 8, arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", root: "ك س ب", meaning: { en: "earn", ur: "کماتے تھے", ar: "يَعمَلونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 6, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 6, to: 7, label: 'موصول + صلة' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "كَلَّا إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍ لَّمَحْجُوبُونَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "حَقًّا" }, pos: "RET", posLabel: "RET", grammarRole: "emphasis" },
      { position: 2, arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed they", ur: "بے شک وہ", ar: "إِنَّهُم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 3, arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عَن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "رَّبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "اپنے رب", ar: "مالِكِهِم" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: { en: "that Day", ur: "اس دن", ar: "في ذلِكَ اليَوم" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 6, arabic: "لَّمَحْجُوبُونَ", transliteration: "lamaḥjūbūna", root: "ح ج ب", meaning: { en: "surely veiled", ur: "یقیناً محروم ہیں", ar: "مَمنوعونَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "مَفْعُول" }, advanced: { linguisticMiracle: "Veiled from Allah's vision - worst punishment" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },

  16: {
    ayahNumber: 16,
    arabic: "ثُمَّ إِنَّهُمْ لَصَالُو الْجَحِيمِ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "indeed they", ur: "بے شک وہ", ar: "إِنَّهُم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 3, arabic: "لَصَالُو", transliteration: "laṣālū", root: "ص ل ي", meaning: { en: "will burn in", ur: "ضرور داخل ہوں گے", ar: "لَداخِلو" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" },
      { position: 4, arabic: "الْجَحِيمِ", transliteration: "al-jaḥīmi", root: "ج ح م", meaning: { en: "the Hellfire", ur: "دوزخ میں", ar: "النار" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ],
    structure: {
      relationships: [],
    },
  },

  17: {
    ayahNumber: 17,
    arabic: "ثُمَّ يُقَالُ هَٰذَا الَّذِي كُنتُم بِهِ تُكَذِّبُونَ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "يُقَالُ", transliteration: "yuqālu", root: "ق و ل", meaning: { en: "it will be said", ur: "کہا جائے گا", ar: "يُقالُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 3, arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 4, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "that which", ur: "جس کو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 5, arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم کرتے تھے", ar: "كُنتُم" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb" },
      { position: 6, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "in it", ur: "اسے", ar: "بِهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 7, arabic: "تُكَذِّبُونَ", transliteration: "tukadhdhibūna", meaning: { en: "deny", ur: "جھٹلاتے تھے", ar: "تَجحَدونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'موصول + صلة' },
      { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },

  18: {
    ayahNumber: 18,
    arabic: "كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No indeed!", ur: "ہرگز نہیں", ar: "حَقًّا" }, pos: "RET", posLabel: "RET", grammarRole: "transition" },
      { position: 2, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 3, arabic: "كِتَابَ", transliteration: "kitāba", meaning: { en: "record", ur: "نامہ", ar: "سِجِلّ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "الْأَبْرَارِ", transliteration: "al-abrāri", root: "ب ر ر", meaning: { en: "of the righteous", ur: "نیکوں کا", ar: "الصالِحينَ" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 5, arabic: "لَفِي", transliteration: "lafī", meaning: { en: "is surely in", ur: "یقیناً ہے", ar: "لَموجودٌ في" }, pos: "EMPH+PREP", posLabel: "EMPH+PREP", grammarRole: "emphasis + preposition" },
      { position: 6, arabic: "عِلِّيِّينَ", transliteration: "ʿilliyyīna", root: "ع ل و", meaning: { en: "Illiyyun", ur: "علیین میں", ar: "أَعلى مَكان" }, pos: "PN", posLabel: "PN", grammarRole: "prepositional phrase", advanced: { rootFamily: ["عُلُوّ", "عَلِيّ", "عِلِّيّين"], linguisticMiracle: "From عُلُوّ (height) - highest place in heaven" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'توکید' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  19: {
    ayahNumber: 19,
    arabic: "وَمَا أَدْرَاكَ مَا عِلِّيُّونَ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INT", posLabel: "CONJ+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "أَدْرَاكَ", transliteration: "adrāka", meaning: { en: "can make you know", ur: "تجھے سمجھائے", ar: "أَعلَمَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا ہے", ar: "ما" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 4, arabic: "عِلِّيُّونَ", transliteration: "ʿilliyyūna", meaning: { en: "Illiyyun", ur: "علیین", ar: "عِلِّيّونَ" }, pos: "PN", posLabel: "PN", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "كِتَابٌ مَّرْقُومٌ",
    words: [
      { position: 1, arabic: "كِتَابٌ", transliteration: "kitābun", meaning: { en: "A record", ur: "کتاب ہے", ar: "سِجِلٌّ" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 2, arabic: "مَّرْقُومٌ", transliteration: "marqūmun", meaning: { en: "inscribed", ur: "لکھی ہوئی", ar: "مَكتوبٌ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  21: {
    ayahNumber: 21,
    arabic: "يَشْهَدُهُ الْمُقَرَّبُونَ",
    words: [
      { position: 1, arabic: "يَشْهَدُهُ", transliteration: "yashhaduhu", root: "ش ه د", meaning: { en: "Witnessed by", ur: "اسے دیکھتے ہیں", ar: "يُشاهِدُهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 2, arabic: "الْمُقَرَّبُونَ", transliteration: "al-muqarrabūna", root: "ق ر ب", meaning: { en: "those brought near", ur: "مقرب فرشتے", ar: "المُقَرَّبونَ" }, pos: "N", posLabel: "N", grammarRole: "subject", features: { pattern: "مُفَعَّل" }, advanced: { linguisticMiracle: "Angels closest to Allah witness this record" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },

  22: {
    ayahNumber: 22,
    arabic: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الْأَبْرَارَ", transliteration: "al-abrāra", meaning: { en: "the righteous", ur: "نیک لوگ", ar: "الصالِحونَ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "لَفِي", transliteration: "lafī", meaning: { en: "will surely be in", ur: "یقیناً ہیں", ar: "لَموجودونَ في" }, pos: "EMPH+PREP", posLabel: "EMPH+PREP", grammarRole: "emphasis + preposition" },
      { position: 4, arabic: "نَعِيمٍ", transliteration: "naʿīmin", root: "ن ع م", meaning: { en: "bliss", ur: "نعمتوں میں", ar: "سَعادَة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' }
      ],
    },
  },

  23: {
    ayahNumber: 23,
    arabic: "عَلَى الْأَرَائِكِ يَنظُرُونَ",
    words: [
      { position: 1, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "On", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "الْأَرَائِكِ", transliteration: "al-arā'iki", root: "أ ر ك", meaning: { en: "couches", ur: "تختوں", ar: "الأَسِرَّة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", root: "ن ظ ر", meaning: { en: "observing", ur: "دیکھتے ہیں", ar: "يُشاهِدونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },

  24: {
    ayahNumber: 24,
    arabic: "تَعْرِفُ فِي وُجُوهِهِمْ نَضْرَةَ النَّعِيمِ",
    words: [
      { position: 1, arabic: "تَعْرِفُ", transliteration: "taʿrifu", root: "ع ر ف", meaning: { en: "You recognize", ur: "تو پہچانے گا", ar: "تُدرِكُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "وُجُوهِهِمْ", transliteration: "wujūhihim", root: "و ج ه", meaning: { en: "their faces", ur: "ان کے چہروں", ar: "وُجوهِهِم" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "نَضْرَةَ", transliteration: "naḍrata", root: "ن ض ر", meaning: { en: "radiance", ur: "تازگی", ar: "إشراقَ" }, pos: "N", posLabel: "N", grammarRole: "object", advanced: { rootFamily: ["نَضرة", "ناضِر", "نَضير"], linguisticMiracle: "Faces glowing with freshness of blessing" } },
      { position: 5, arabic: "النَّعِيمِ", transliteration: "al-naʿīmi", meaning: { en: "of bliss", ur: "نعمت کی", ar: "السَعادَة" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  25: {
    ayahNumber: 25,
    arabic: "يُسْقَوْنَ مِن رَّحِيقٍ مَّخْتُومٍ",
    words: [
      { position: 1, arabic: "يُسْقَوْنَ", transliteration: "yusqawna", root: "س ق ي", meaning: { en: "They are given to drink", ur: "پلائی جائے گی", ar: "يُقَدَّمُ لَهُم" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "رَّحِيقٍ", transliteration: "raḥīqin", root: "ر ح ق", meaning: { en: "pure wine", ur: "شراب خالص", ar: "خَمر صافٍ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Rahiq = finest, purest wine - no intoxication/hangover" } },
      { position: 4, arabic: "مَّخْتُومٍ", transliteration: "makhtūmin", root: "خ ت م", meaning: { en: "sealed", ur: "مہر بند", ar: "مُغَلَّق" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مَفْعُول" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  26: {
    ayahNumber: 26,
    arabic: "خِتَامُهُ مِسْكٌ ۚ وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ",
    words: [
      { position: 1, arabic: "خِتَامُهُ", transliteration: "khitāmuhu", root: "خ ت م", meaning: { en: "Its seal", ur: "اس کی مہر", ar: "خَتمُهُ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject" },
      { position: 2, arabic: "مِسْكٌ", transliteration: "miskun", meaning: { en: "musk", ur: "مشک ہے", ar: "مِسك" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 3, arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And for", ur: "اور اس میں", ar: "وَفي" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اسی کے لیے", ar: "ذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "demonstrative" },
      { position: 5, arabic: "فَلْيَتَنَافَسِ", transliteration: "falyatanāfasi", root: "ن ف س", meaning: { en: "let compete", ur: "چاہیے کہ رغبت کریں", ar: "فَليَتَسابَق" }, pos: "V", posLabel: "V", grammarRole: "jussive", features: { form: "VI", mood: "jussive" } },
      { position: 6, arabic: "الْمُتَنَافِسُونَ", transliteration: "al-mutanāfisūna", root: "ن ف س", meaning: { en: "the competitors", ur: "رغبت کرنے والے", ar: "المُتَسابِقونَ" }, pos: "N", posLabel: "N", grammarRole: "subject", features: { pattern: "مُتَفَاعِل" }, advanced: { linguisticMiracle: "Competition should be for akhirah, not dunya" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },

  27: {
    ayahNumber: 27,
    arabic: "وَمِزَاجُهُ مِن تَسْنِيمٍ",
    words: [
      { position: 1, arabic: "وَمِزَاجُهُ", transliteration: "wa-mizājuhu", root: "م ز ج", meaning: { en: "And its mixture", ur: "اور اس کی آمیزش", ar: "وَخَلطُهُ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject" },
      { position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "is from", ur: "سے ہے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "تَسْنِيمٍ", transliteration: "tasnīmin", root: "س ن م", meaning: { en: "Tasnim", ur: "تسنیم", ar: "نَبع عالٍ" }, pos: "PN", posLabel: "PN", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "From سَنَم (hump/peak) - highest spring in Paradise" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  28: {
    ayahNumber: 28,
    arabic: "عَيْنًا يَشْرَبُ بِهَا الْمُقَرَّبُونَ",
    words: [
      { position: 1, arabic: "عَيْنًا", transliteration: "ʿaynan", root: "ع ي ن", meaning: { en: "A spring", ur: "چشمہ ہے", ar: "يَنبوعاً" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "يَشْرَبُ", transliteration: "yashrabu", root: "ش ر ب", meaning: { en: "drink", ur: "پیتے ہیں", ar: "يَستَقي" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "بِهَا", transliteration: "bihā", meaning: { en: "from it", ur: "اس سے", ar: "مِنها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "الْمُقَرَّبُونَ", transliteration: "al-muqarrabūna", meaning: { en: "those brought near", ur: "مقرب لوگ", ar: "المُقَرَّبونَ" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  29: {
    ayahNumber: 29,
    arabic: "إِنَّ الَّذِينَ أَجْرَمُوا كَانُوا مِنَ الَّذِينَ آمَنُوا يَضْحَكُونَ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "أَجْرَمُوا", transliteration: "ajramū", root: "ج ر م", meaning: { en: "committed crimes", ur: "جرم کیا", ar: "ارتَكَبوا الإثمَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 4, arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "used to", ur: "وہ کرتے تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 5, arabic: "مِنَ", transliteration: "mina", meaning: { en: "at", ur: "پر", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 6, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 7, arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "صَدَّقوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 8, arabic: "يَضْحَكُونَ", transliteration: "yaḍḥakūna", root: "ض ح ك", meaning: { en: "laugh", ur: "ہنستے تھے", ar: "يَسخَرونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 5, to: 6, label: 'جار + مجرور' },
      { from: 6, to: 7, label: 'موصول + صلة' }
      ],
    },
  },

  30: {
    ayahNumber: 30,
    arabic: "وَإِذَا مَرُّوا بِهِمْ يَتَغَامَزُونَ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "temporal" },
      { position: 2, arabic: "مَرُّوا", transliteration: "marrū", root: "م ر ر", meaning: { en: "they passed", ur: "گزرتے", ar: "مَشَوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "بِهِمْ", transliteration: "bihim", meaning: { en: "by them", ur: "ان کے پاس سے", ar: "بِهِم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "يَتَغَامَزُونَ", transliteration: "yatagāmazūna", root: "غ م ز", meaning: { en: "they wink mockingly", ur: "آنکھیں مارتے", ar: "يَتَلامَزونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VI" }, advanced: { linguisticMiracle: "Form VI - mutual mocking gestures" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  31: {
    ayahNumber: 31,
    arabic: "وَإِذَا انقَلَبُوا إِلَىٰ أَهْلِهِمُ انقَلَبُوا فَكِهِينَ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "temporal" },
      { position: 2, arabic: "انقَلَبُوا", transliteration: "inqalabū", root: "ق ل ب", meaning: { en: "they returned", ur: "لوٹتے", ar: "رَجَعوا" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VII" } },
      { position: 3, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "أَهْلِهِمُ", transliteration: "ahlihimu", meaning: { en: "their people", ur: "اپنے گھر والوں", ar: "أَسَرِهِم" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "انقَلَبُوا", transliteration: "inqalabū", meaning: { en: "returned", ur: "لوٹتے تھے", ar: "رَجَعوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 6, arabic: "فَكِهِينَ", transliteration: "fakihīna", root: "ف ك ه", meaning: { en: "jesting", ur: "مزے لیتے ہوئے", ar: "مُتَمَتِّعينَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "adverb of state", advanced: { linguisticMiracle: "Returned home entertained by mocking believers" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  32: {
    ayahNumber: 32,
    arabic: "وَإِذَا رَأَوْهُمْ قَالُوا إِنَّ هَٰؤُلَاءِ لَضَالُّونَ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "temporal" },
      { position: 2, arabic: "رَأَوْهُمْ", transliteration: "ra'awhum", root: "ر أ ي", meaning: { en: "they saw them", ur: "انہیں دیکھتے", ar: "شاهَدوهُم" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 3, arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "they said", ur: "کہتے تھے", ar: "قالوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 5, arabic: "هَٰؤُلَاءِ", transliteration: "hā'ulā'i", meaning: { en: "these", ur: "یہ لوگ", ar: "هؤلاء" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 6, arabic: "لَضَالُّونَ", transliteration: "laḍāllūna", root: "ض ل ل", meaning: { en: "are surely astray", ur: "یقیناً گمراہ ہیں", ar: "لَتائِهونَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 2, to: 5, label: 'فعل + فاعل' },
      { from: 3, to: 5, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'توکید' },
      { from: 5, to: 6, label: 'مبتدأ + خبر' }
      ],
    },
  },

  33: {
    ayahNumber: 33,
    arabic: "وَمَا أُرْسِلُوا عَلَيْهِمْ حَافِظِينَ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "But not", ur: "اور نہیں", ar: "ولَم" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "أُرْسِلُوا", transliteration: "ursilū", root: "ر س ل", meaning: { en: "were they sent", ur: "بھیجے گئے تھے", ar: "بُعِثوا" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 3, arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "ان پر", ar: "عليهِم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "حَافِظِينَ", transliteration: "ḥāfiẓīna", root: "ح ف ظ", meaning: { en: "as guardians", ur: "نگہبان", ar: "رُقَباء" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "adverb of state", advanced: { linguisticMiracle: "Criminals weren't appointed to judge believers" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  34: {
    ayahNumber: 34,
    arabic: "فَالْيَوْمَ الَّذِينَ آمَنُوا مِنَ الْكُفَّارِ يَضْحَكُونَ",
    words: [
      { position: 1, arabic: "فَالْيَوْمَ", transliteration: "fal-yawma", meaning: { en: "So Today", ur: "پس آج", ar: "فَاليَومَ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "adverb" },
      { position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "صَدَّقوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "مِنَ", transliteration: "mina", meaning: { en: "at", ur: "پر", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "الْكُفَّارِ", transliteration: "al-kuffāri", meaning: { en: "the disbelievers", ur: "کافروں", ar: "الجاحِدينَ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "يَضْحَكُونَ", transliteration: "yaḍḥakūna", meaning: { en: "will laugh", ur: "ہنسیں گے", ar: "يَسخَرونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Tables turned - believers laugh at their mockers" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  35: {
    ayahNumber: 35,
    arabic: "عَلَى الْأَرَائِكِ يَنظُرُونَ",
    words: [
      { position: 1, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "On", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "الْأَرَائِكِ", transliteration: "al-arā'iki", meaning: { en: "couches", ur: "تختوں", ar: "الأَسِرَّة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "observing", ur: "دیکھتے ہیں", ar: "يُشاهِدونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },

  36: {
    ayahNumber: 36,
    arabic: "هَلْ ثُوِّبَ الْكُفَّارُ مَا كَانُوا يَفْعَلُونَ",
    words: [
      { position: 1, arabic: "هَلْ", transliteration: "hal", meaning: { en: "Have", ur: "کیا", ar: "هَل" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 2, arabic: "ثُوِّبَ", transliteration: "thuwwiba", root: "ث و ب", meaning: { en: "been rewarded", ur: "بدلہ دیا گیا", ar: "جوزِيَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" }, advanced: { linguisticMiracle: "Rhetorical - disbelievers got exactly what they earned" } },
      { position: 3, arabic: "الْكُفَّارُ", transliteration: "al-kuffāru", meaning: { en: "the disbelievers", ur: "کافروں کو", ar: "الجاحِدونَ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "مَا", transliteration: "mā", meaning: { en: "for what", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 5, arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ کرتے تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 6, arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", meaning: { en: "do", ur: "کرتے تھے", ar: "يَعمَلونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'موصول + صلة' }
      ],
    },
  }
};

export default TREEBANK_DATA;
