/**
 * Surah An-Najm (The Star) - Surah 53
 * Quranic Arabic Treebank Data
 */

export const TREEBANK_DATA = {
  surahId: 53,
  surahName: "An-Najm",
  surahNameArabic: "النجم",
  totalAyahs: 62,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "وَالنَّجْمِ إِذَا هَوَىٰ",
    words: [
      { arabic: "وَالنَّجْمِ", transliteration: "wan-najmi", meaning: { en: "By the star", ur: "قسم ہے ستارے کی", ar: "والنجم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", type: "oath", root: "ن-ج-م" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "هَوَىٰ", transliteration: "hawā", meaning: { en: "it goes down", ur: "ڈوبتا ہے", ar: "سقط" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ه-و-ي" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "مَا ضَلَّ صَاحِبُكُمْ وَمَا غَوَىٰ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "ضَلَّ", transliteration: "ḍalla", meaning: { en: "has strayed", ur: "گمراہ ہوا", ar: "ضل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ض-ل-ل" } },
      { arabic: "صَاحِبُكُمْ", transliteration: "ṣāḥibukum", meaning: { en: "your companion", ur: "تمہارا ساتھی", ar: "صاحبكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ص-ح-ب" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہ", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "غَوَىٰ", transliteration: "ghawā", meaning: { en: "has he erred", ur: "وہ بہکا", ar: "غوى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-و-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "يَنطِقُ", transliteration: "yanṭiqu", meaning: { en: "does he speak", ur: "بولتا ہے", ar: "يتكلم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ط-ق" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الْهَوَىٰ", transliteration: "al-hawā", meaning: { en: "desire", ur: "خواہش", ar: "الهوى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ه-و-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ",
    words: [
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں ہے", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it is", ur: "یہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", gender: "masculine" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "وَحْيٌ", transliteration: "waḥyun", meaning: { en: "revelation", ur: "وحی", ar: "وحي" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ح-ي" } },
      { arabic: "يُوحَىٰ", transliteration: "yūḥā", meaning: { en: "revealed", ur: "بھیجی جاتی ہے", ar: "يوحى" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ح-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "عَلَّمَهُ شَدِيدُ الْقُوَىٰ",
    words: [
      { arabic: "عَلَّمَهُ", transliteration: "ʿallamahu", meaning: { en: "Taught him", ur: "اسے سکھایا", ar: "علمه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ع-ل-م" } },
      { arabic: "شَدِيدُ", transliteration: "shadīdu", meaning: { en: "one intense", ur: "زبردست", ar: "شديد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ش-د-د" } },
      { arabic: "الْقُوَىٰ", transliteration: "al-quwā", meaning: { en: "in strength", ur: "طاقتوں والا", ar: "القوى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ق-و-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "ذُو مِرَّةٍ فَاسْتَوَىٰ",
    words: [
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "One of", ur: "والا", ar: "ذو" }, pos: "N", posLabel: "N", grammar: { case: "nominative", type: "possessor" } },
      { arabic: "مِرَّةٍ", transliteration: "mirratin", meaning: { en: "soundness", ur: "طاقت", ar: "قوة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ر-ر" } },
      { arabic: "فَاسْتَوَىٰ", transliteration: "fastawā", meaning: { en: "and he appeared", ur: "پھر سیدھا کھڑا ہوا", ar: "فاستقام" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "س-و-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَهُوَ بِالْأُفُقِ الْأَعْلَىٰ",
    words: [
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "While he was", ur: "اور وہ تھا", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "بِالْأُفُقِ", transliteration: "bil-ufuqi", meaning: { en: "at the horizon", ur: "کنارے میں", ar: "بالأفق" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ف-ق" } },
      { arabic: "الْأَعْلَىٰ", transliteration: "al-aʿlā", meaning: { en: "the highest", ur: "اونچے", ar: "الأعلى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ل-و", form: "superlative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "ثُمَّ دَنَا فَتَدَلَّىٰ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "دَنَا", transliteration: "danā", meaning: { en: "he approached", ur: "قریب آیا", ar: "اقترب" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ن-و" } },
      { arabic: "فَتَدَلَّىٰ", transliteration: "fatadallā", meaning: { en: "and he descended", ur: "پھر لٹکا", ar: "فنزل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "V", root: "د-ل-و" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ",
    words: [
      { arabic: "فَكَانَ", transliteration: "fakāna", meaning: { en: "And was", ur: "تو ہوگیا", ar: "فكان" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna", root: "ك-و-ن" } },
      { arabic: "قَابَ", transliteration: "qāba", meaning: { en: "a distance of", ur: "فاصلے پر", ar: "قدر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-ب" } },
      { arabic: "قَوْسَيْنِ", transliteration: "qawsayni", meaning: { en: "two bow lengths", ur: "دو کمانوں کا", ar: "قوسين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "dual", root: "ق-و-س" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "أَدْنَىٰ", transliteration: "adnā", meaning: { en: "nearer", ur: "اس سے بھی قریب", ar: "أقرب" }, pos: "ADJ", posLabel: "ADJ", grammar: { form: "comparative", root: "د-ن-و" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "فَأَوْحَىٰ إِلَىٰ عَبْدِهِ مَا أَوْحَىٰ",
    words: [
      { arabic: "فَأَوْحَىٰ", transliteration: "faawḥā", meaning: { en: "And He revealed", ur: "پھر اس نے وحی کی", ar: "فأوحى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "و-ح-ي" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "عَبْدِهِ", transliteration: "ʿabdihi", meaning: { en: "His servant", ur: "اپنے بندے", ar: "عبده" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ع-ب-د" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَوْحَىٰ", transliteration: "awḥā", meaning: { en: "He revealed", ur: "وحی کی", ar: "أوحى" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ح-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصول + صلة' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "مَا كَذَبَ الْفُؤَادُ مَا رَأَىٰ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "كَذَبَ", transliteration: "kadhaba", meaning: { en: "did deny", ur: "جھوٹ کہا", ar: "كذب" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ذ-ب" } },
      { arabic: "الْفُؤَادُ", transliteration: "al-fuʾādu", meaning: { en: "the heart", ur: "دل نے", ar: "القلب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ف-أ-د" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "رَأَىٰ", transliteration: "raʾā", meaning: { en: "he saw", ur: "دیکھا", ar: "رأى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصول + صلة' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "أَفَتُمَارُونَهُ عَلَىٰ مَا يَرَىٰ",
    words: [
      { arabic: "أَفَتُمَارُونَهُ", transliteration: "afatumārūnahu", meaning: { en: "So will you dispute with him", ur: "کیا تم اس سے جھگڑتے ہو", ar: "أفتجادلونه" }, pos: "PART+CONJ+V+PRON", posLabel: "PART+CONJ+V+PRON", grammar: { form: "III", root: "م-ر-ي", type: "interrogative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "cause" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَرَىٰ", transliteration: "yarā", meaning: { en: "he sees", ur: "وہ دیکھتا ہے", ar: "يرى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَلَقَدْ رَآهُ نَزْلَةً أُخْرَىٰ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "رَآهُ", transliteration: "raʾāhu", meaning: { en: "he saw him", ur: "اس نے اسے دیکھا", ar: "رآه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "نَزْلَةً", transliteration: "nazlatan", meaning: { en: "a descent", ur: "ایک اور دفعہ اترتے", ar: "نزلة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ز-ل", type: "adverbial" } },
      { arabic: "أُخْرَىٰ", transliteration: "ukhrā", meaning: { en: "another", ur: "اور", ar: "أخرى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "أ-خ-ر", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "عِندَ سِدْرَةِ الْمُنتَهَىٰ",
    words: [
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "Near", ur: "کے پاس", ar: "عند" }, pos: "N", posLabel: "N", grammar: { type: "adverbial", case: "accusative" } },
      { arabic: "سِدْرَةِ", transliteration: "sidrati", meaning: { en: "the Lote Tree", ur: "بیری کے درخت", ar: "سدرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-د-ر" } },
      { arabic: "الْمُنتَهَىٰ", transliteration: "al-muntahā", meaning: { en: "of the Utmost Boundary", ur: "آخری حد", ar: "المنتهى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ه-ي", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "عِندَهَا جَنَّةُ الْمَأْوَىٰ",
    words: [
      { arabic: "عِندَهَا", transliteration: "ʿindahā", meaning: { en: "Near it", ur: "اس کے پاس", ar: "عندها" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { type: "adverbial" } },
      { arabic: "جَنَّةُ", transliteration: "jannatu", meaning: { en: "is the Garden of", ur: "جنت ہے", ar: "جنة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ن-ن" } },
      { arabic: "الْمَأْوَىٰ", transliteration: "al-maʾwā", meaning: { en: "Refuge", ur: "ٹھکانے کی", ar: "المأوى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-و-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "إِذْ يَغْشَى السِّدْرَةَ مَا يَغْشَىٰ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب", ar: "إذ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "يَغْشَى", transliteration: "yaghshā", meaning: { en: "covered", ur: "چھا رہا تھا", ar: "يغطي" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ش-ي" } },
      { arabic: "السِّدْرَةَ", transliteration: "al-sidrata", meaning: { en: "the Lote Tree", ur: "بیری کے درخت کو", ar: "السدرة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-د-ر" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "that which", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَغْشَىٰ", transliteration: "yaghshā", meaning: { en: "covered it", ur: "چھایا", ar: "يغطي" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ش-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصول + صلة' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "مَا زَاغَ الْبَصَرُ وَمَا طَغَىٰ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "زَاغَ", transliteration: "zāgha", meaning: { en: "did swerve", ur: "ٹیڑھی ہوئی", ar: "مال" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ز-ي-غ" } },
      { arabic: "الْبَصَرُ", transliteration: "al-baṣaru", meaning: { en: "the sight", ur: "نگاہ", ar: "البصر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-ص-ر" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہ", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "طَغَىٰ", transliteration: "ṭaghā", meaning: { en: "did it transgress", ur: "حد سے بڑھی", ar: "طغى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ط-غ-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ",
    words: [
      { arabic: "لَقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "یقیناً", ar: "لقد" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "رَأَىٰ", transliteration: "raʾā", meaning: { en: "he saw", ur: "اس نے دیکھیں", ar: "رأى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "آيَاتِ", transliteration: "āyāti", meaning: { en: "the Signs", ur: "نشانیاں", ar: "آيات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "أ-ي-ي" } },
      { arabic: "رَبِّهِ", transliteration: "rabbihi", meaning: { en: "of his Lord", ur: "اپنے رب کی", ar: "ربه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "الْكُبْرَىٰ", transliteration: "al-kubrā", meaning: { en: "the greatest", ur: "بڑی بڑی", ar: "الكبرى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ك-ب-ر", form: "superlative" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "أَفَرَأَيْتُمُ اللَّاتَ وَالْعُزَّىٰ",
    words: [
      { arabic: "أَفَرَأَيْتُمُ", transliteration: "afaraʾaytumu", meaning: { en: "So have you considered", ur: "کیا تم نے دیکھا", ar: "أفرأيتم" }, pos: "PART+CONJ+V", posLabel: "PART+CONJ+V", grammar: { form: "I", root: "ر-أ-ي", type: "interrogative" } },
      { arabic: "اللَّاتَ", transliteration: "al-lāta", meaning: { en: "al-Lat", ur: "لات کو", ar: "اللات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "proper-noun" } },
      { arabic: "وَالْعُزَّىٰ", transliteration: "wal-ʿuzzā", meaning: { en: "and al-Uzza", ur: "اور عزیٰ کو", ar: "والعزى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", type: "proper-noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَمَنَاةَ الثَّالِثَةَ الْأُخْرَىٰ",
    words: [
      { arabic: "وَمَنَاةَ", transliteration: "wamanāta", meaning: { en: "And Manat", ur: "اور مناۃ کو", ar: "ومناة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", type: "proper-noun" } },
      { arabic: "الثَّالِثَةَ", transliteration: "al-thālithata", meaning: { en: "the third", ur: "تیسری", ar: "الثالثة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ث-ل-ث", gender: "feminine" } },
      { arabic: "الْأُخْرَىٰ", transliteration: "al-ukhrā", meaning: { en: "the other", ur: "اور والی", ar: "الأخرى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "أ-خ-ر", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' },
        { from: 1, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "أَلَكُمُ الذَّكَرُ وَلَهُ الْأُنثَىٰ",
    words: [
      { arabic: "أَلَكُمُ", transliteration: "alakumu", meaning: { en: "Is for you", ur: "کیا تمہارے لیے", ar: "ألكم" }, pos: "PART+P+PRON", posLabel: "PART+P+PRON", grammar: { type: "interrogative" } },
      { arabic: "الذَّكَرُ", transliteration: "al-dhakaru", meaning: { en: "the male", ur: "نر ہے", ar: "الذكر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ذ-ك-ر" } },
      { arabic: "وَلَهُ", transliteration: "walahu", meaning: { en: "and for Him", ur: "اور اس کے لیے", ar: "وله" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "possession" } },
      { arabic: "الْأُنثَىٰ", transliteration: "al-unthā", meaning: { en: "the female", ur: "مادہ", ar: "الأنثى" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ن-ث" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'استفهام + مبتدأ' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "تِلْكَ إِذًا قِسْمَةٌ ضِيزَىٰ",
    words: [
      { arabic: "تِلْكَ", transliteration: "tilka", meaning: { en: "That", ur: "یہ تو", ar: "تلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", gender: "feminine" } },
      { arabic: "إِذًا", transliteration: "idhan", meaning: { en: "then", ur: "تب تو", ar: "إذا" }, pos: "PART", posLabel: "PART", grammar: { type: "result" } },
      { arabic: "قِسْمَةٌ", transliteration: "qismatun", meaning: { en: "a division", ur: "تقسیم ہوئی", ar: "قسمة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-س-م" } },
      { arabic: "ضِيزَىٰ", transliteration: "ḍīzā", meaning: { en: "unjust", ur: "ناانصافی والی", ar: "جائرة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ض-ي-ز" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "إِنْ هِيَ إِلَّا أَسْمَاءٌ سَمَّيْتُمُوهَا أَنتُمْ وَآبَاؤُكُم مَّا أَنزَلَ اللَّهُ بِهَا مِن سُلْطَانٍ",
    words: [
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں ہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "هِيَ", transliteration: "hiya", meaning: { en: "they are", ur: "یہ", ar: "هي" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", gender: "feminine" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "أَسْمَاءٌ", transliteration: "asmāʾun", meaning: { en: "names", ur: "نام", ar: "أسماء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "س-م-و" } },
      { arabic: "سَمَّيْتُمُوهَا", transliteration: "sammaytumūhā", meaning: { en: "you have named them", ur: "تم نے رکھ لیے ہیں", ar: "سميتموها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "س-م-و" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you", ur: "تم نے", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "وَآبَاؤُكُم", transliteration: "waʾābāʾukum", meaning: { en: "and your forefathers", ur: "اور تمہارے باپ دادا نے", ar: "وآباؤكم" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "nominative", root: "أ-ب-و" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", meaning: { en: "has sent down", ur: "اتاری", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ل-ه" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "for them", ur: "ان کے لیے", ar: "بها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "cause" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "سُلْطَانٍ", transliteration: "sulṭānin", meaning: { en: "authority", ur: "دلیل", ar: "سلطان" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-ل-ط" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'مبتدأ + خبر' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "إِن يَتَّبِعُونَ إِلَّا الظَّنَّ وَمَا تَهْوَى الْأَنفُسُ وَلَقَدْ جَاءَهُم مِّن رَّبِّهِمُ الْهُدَىٰ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَتَّبِعُونَ", transliteration: "yattabiʿūna", meaning: { en: "they follow", ur: "وہ پیروی کرتے", ar: "يتبعون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "الظَّنَّ", transliteration: "al-ẓanna", meaning: { en: "assumption", ur: "گمان کی", ar: "الظن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ظ-ن-ن" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "تَهْوَى", transliteration: "tahwā", meaning: { en: "desire", ur: "چاہتے ہیں", ar: "تهوى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ه-و-ي" } },
      { arabic: "الْأَنفُسُ", transliteration: "al-anfusu", meaning: { en: "the souls", ur: "نفس", ar: "الأنفس" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ن-ف-س" } },
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "جَاءَهُم", transliteration: "jāʾahum", meaning: { en: "has come to them", ur: "ان کے پاس آئی", ar: "جاءهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "رَّبِّهِمُ", transliteration: "rabbihimu", meaning: { en: "their Lord", ur: "ان کے رب", ar: "ربهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "الْهُدَىٰ", transliteration: "al-hudā", meaning: { en: "the guidance", ur: "ہدایت", ar: "الهدى" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ه-د-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "أَمْ لِلْإِنسَانِ مَا تَمَنَّىٰ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لِلْإِنسَانِ", transliteration: "lil-insāni", meaning: { en: "for man is", ur: "انسان کے لیے ہے", ar: "للإنسان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ن-س" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَمَنَّىٰ", transliteration: "tamannā", meaning: { en: "he wishes", ur: "وہ تمنا کرتا ہے", ar: "تمنى" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "م-ن-ي" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "فَلِلَّهِ الْآخِرَةُ وَالْأُولَىٰ",
    words: [
      { arabic: "فَلِلَّهِ", transliteration: "falillāhi", meaning: { en: "Then to Allah belongs", ur: "تو اللہ ہی کے لیے ہے", ar: "فلله" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "الْآخِرَةُ", transliteration: "al-ākhiratu", meaning: { en: "the Hereafter", ur: "آخرت", ar: "الآخرة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-خ-ر" } },
      { arabic: "وَالْأُولَىٰ", transliteration: "wal-ūlā", meaning: { en: "and the first life", ur: "اور دنیا", ar: "والأولى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "و-ل-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "وَكَم مِّن مَّلَكٍ فِي السَّمَاوَاتِ لَا تُغْنِي شَفَاعَتُهُمْ شَيْئًا إِلَّا مِن بَعْدِ أَن يَأْذَنَ اللَّهُ لِمَن يَشَاءُ وَيَرْضَىٰ",
    words: [
      { arabic: "وَكَم", transliteration: "wakam", meaning: { en: "And how many", ur: "اور کتنے ہی", ar: "وكم" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "abundance" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مَّلَكٍ", transliteration: "malakin", meaning: { en: "an angel", ur: "فرشتے", ar: "ملك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ل-ك" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں ہیں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "س-م-و" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "تُغْنِي", transliteration: "tughnī", meaning: { en: "will avail", ur: "فائدہ دیتی", ar: "تنفع" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "غ-ن-ي" } },
      { arabic: "شَفَاعَتُهُمْ", transliteration: "shafāʿatuhum", meaning: { en: "their intercession", ur: "ان کی سفارش", ar: "شفاعتهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ش-ف-ع" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "at all", ur: "کچھ بھی", ar: "شيئا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ش-ي-أ" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "کے بعد", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ب-ع-د" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive-particle" } },
      { arabic: "يَأْذَنَ", transliteration: "yaʾdhana", meaning: { en: "permits", ur: "اجازت دے", ar: "يأذن" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ذ-ن", mood: "subjunctive" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ل-ه" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "for whom", ur: "جس کے لیے", ar: "لمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "وَيَرْضَىٰ", transliteration: "wayarḍā", meaning: { en: "and approves", ur: "اور پسند کرتا ہے", ar: "ويرضى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ر-ض-ي" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصول + صلة' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "إِنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ لَيُسَمُّونَ الْمَلَائِكَةَ تَسْمِيَةَ الْأُنثَىٰ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { type: "relative", number: "plural" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yuʾminūna", meaning: { en: "believe", ur: "ایمان لاتے", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "بِالْآخِرَةِ", transliteration: "bil-ākhirati", meaning: { en: "in the Hereafter", ur: "آخرت پر", ar: "بالآخرة" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-خ-ر" } },
      { arabic: "لَيُسَمُّونَ", transliteration: "layusammūna", meaning: { en: "surely name", ur: "یقیناً نام رکھتے ہیں", ar: "ليسمون" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "II", root: "س-م-و", lam: "emphasis" } },
      { arabic: "الْمَلَائِكَةَ", transliteration: "al-malāʾikata", meaning: { en: "the angels", ur: "فرشتوں کے", ar: "الملائكة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "م-ل-ك" } },
      { arabic: "تَسْمِيَةَ", transliteration: "tasmiyata", meaning: { en: "the naming of", ur: "نام", ar: "تسمية" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-م-و", type: "mafool-mutlaq" } },
      { arabic: "الْأُنثَىٰ", transliteration: "al-unthā", meaning: { en: "the female", ur: "مادہ", ar: "الأنثى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ن-ث" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "فَأَعْرِضْ عَن مَّن تَوَلَّىٰ عَن ذِكْرِنَا وَلَمْ يُرِدْ إِلَّا الْحَيَاةَ الدُّنْيَا",
    words: [
      { arabic: "فَأَعْرِضْ", transliteration: "fa-aʿriḍ", meaning: { en: "So turn away", ur: "تو اعراض کرو", ar: "فأعرض" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ع-ر-ض", mood: "imperative" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "whoever", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَوَلَّىٰ", transliteration: "tawallā", meaning: { en: "turns away", ur: "منہ پھیرے", ar: "تولى" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "و-ل-ي" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "ذِكْرِنَا", transliteration: "dhikrinā", meaning: { en: "Our remembrance", ur: "ہماری یاد", ar: "ذكرنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ذ-ك-ر" } },
      { arabic: "وَلَمْ", transliteration: "walam", meaning: { en: "and did not", ur: "اور نہیں", ar: "ولم" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "jussive-negative" } },
      { arabic: "يُرِدْ", transliteration: "yurid", meaning: { en: "desire", ur: "چاہتا", ar: "يرد" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-و-د", mood: "jussive" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "الْحَيَاةَ", transliteration: "al-ḥayāta", meaning: { en: "the life", ur: "زندگی", ar: "الحياة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-ي-ي" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of this world", ur: "دنیا کی", ar: "الدنيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "د-ن-و" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "ذَٰلِكَ مَبْلَغُهُم مِّنَ الْعِلْمِ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ وَهُوَ أَعْلَمُ بِمَنِ اهْتَدَىٰ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہی ہے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "مَبْلَغُهُم", transliteration: "mablaghuhum", meaning: { en: "their extent", ur: "ان کے علم کی حد", ar: "غاية علمهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ب-ل-غ" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْعِلْمِ", transliteration: "al-ʿilmi", meaning: { en: "knowledge", ur: "علم", ar: "العلم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ل-م" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", meaning: { en: "your Lord", ur: "تیرا رب", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ب-ب" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "separation" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", meaning: { en: "most knowing", ur: "خوب جانتا ہے", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م", form: "comparative" } },
      { arabic: "بِمَن", transliteration: "biman", meaning: { en: "of who", ur: "اس کو جو", ar: "بمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "ضَلَّ", transliteration: "ḍalla", meaning: { en: "strayed", ur: "گمراہ ہوا", ar: "ضل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ض-ل-ل" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "سَبِيلِهِ", transliteration: "sabīlihi", meaning: { en: "His way", ur: "اس کے راستے", ar: "سبيله" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "س-ب-ل" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", meaning: { en: "most knowing", ur: "خوب جانتا ہے", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م", form: "comparative" } },
      { arabic: "بِمَنِ", transliteration: "bimani", meaning: { en: "of who", ur: "اس کو جو", ar: "بمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "اهْتَدَىٰ", transliteration: "ihtadā", meaning: { en: "is guided", ur: "ہدایت پایا", ar: "اهتدى" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ه-د-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 15, to: 16, label: 'موصول + صلة' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "وَلِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ لِيَجْزِيَ الَّذِينَ أَسَاءُوا بِمَا عَمِلُوا وَيَجْزِيَ الَّذِينَ أَحْسَنُوا بِالْحُسْنَى",
    words: [
      { arabic: "وَلِلَّهِ", transliteration: "walillāhi", meaning: { en: "And to Allah belongs", ur: "اور اللہ ہی کا ہے", ar: "ولله" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever is", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "س-م-و" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever is", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "لِيَجْزِيَ", transliteration: "liyajziya", meaning: { en: "that He may recompense", ur: "تاکہ وہ بدلہ دے", ar: "ليجزي" }, pos: "P+V", posLabel: "P+V", grammar: { form: "I", root: "ج-ز-ي", mood: "subjunctive" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کو جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَسَاءُوا", transliteration: "asāʾū", meaning: { en: "do evil", ur: "برائی کی", ar: "أساءوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "س-و-أ" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "ان کے اعمال کا", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "عَمِلُوا", transliteration: "ʿamilū", meaning: { en: "they have done", ur: "انہوں نے کیا", ar: "عملوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "وَيَجْزِيَ", transliteration: "wayajziya", meaning: { en: "and recompense", ur: "اور بدلہ دے", ar: "ويجزي" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ز-ي", mood: "subjunctive" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کو جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَحْسَنُوا", transliteration: "aḥsanū", meaning: { en: "do good", ur: "نیکی کی", ar: "أحسنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-س-ن" } },
      { arabic: "بِالْحُسْنَى", transliteration: "bil-ḥusnā", meaning: { en: "with the best", ur: "اچھے بدلے سے", ar: "بالحسنى" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-س-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 14, to: 15, label: 'موصول + صلة' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "الَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ إِلَّا اللَّمَمَ إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ",
    words: [
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَجْتَنِبُونَ", transliteration: "yajtanibūna", meaning: { en: "avoid", ur: "بچتے ہیں", ar: "يجتنبون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ج-ن-ب" } },
      { arabic: "كَبَائِرَ", transliteration: "kabāʾira", meaning: { en: "the major sins", ur: "بڑے گناہوں سے", ar: "كبائر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ك-ب-ر" } },
      { arabic: "الْإِثْمِ", transliteration: "al-ithmi", meaning: { en: "of sin", ur: "گناہ کے", ar: "الإثم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ث-م" } },
      { arabic: "وَالْفَوَاحِشَ", transliteration: "wal-fawāḥisha", meaning: { en: "and immoralities", ur: "اور بے حیائیوں سے", ar: "والفواحش" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", number: "plural", root: "ف-ح-ش" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "اللَّمَمَ", transliteration: "al-lamama", meaning: { en: "minor offenses", ur: "چھوٹی غلطیوں کے", ar: "الصغائر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ل-م-م" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", meaning: { en: "your Lord", ur: "تیرا رب", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ب-ب" } },
      { arabic: "وَاسِعُ", transliteration: "wāsiʿu", meaning: { en: "is vast in", ur: "وسیع ہے", ar: "واسع" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "و-س-ع" } },
      { arabic: "الْمَغْفِرَةِ", transliteration: "al-maghfirati", meaning: { en: "forgiveness", ur: "مغفرت میں", ar: "المغفرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-ف-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "هُوَ أَعْلَمُ بِكُمْ إِذْ أَنشَأَكُم مِّنَ الْأَرْضِ وَإِذْ أَنتُمْ أَجِنَّةٌ فِي بُطُونِ أُمَّهَاتِكُمْ فَلَا تُزَكُّوا أَنفُسَكُمْ هُوَ أَعْلَمُ بِمَنِ اتَّقَىٰ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", meaning: { en: "most knowing", ur: "خوب جانتا ہے", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { root: "ع-ل-م", form: "comparative" } },
      { arabic: "بِكُمْ", transliteration: "bikum", meaning: { en: "of you", ur: "تمہیں", ar: "بكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "أَنشَأَكُم", transliteration: "anshaʾakum", meaning: { en: "He produced you", ur: "تمہیں پیدا کیا", ar: "أنشأكم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ن-ش-أ" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "and when", ur: "اور جب", ar: "وإذ" }, pos: "CONJ+CONJ", posLabel: "CONJ+CONJ", grammar: { type: "temporal" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you were", ur: "تم تھے", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "أَجِنَّةٌ", transliteration: "ajinnatun", meaning: { en: "fetuses", ur: "ماں کے پیٹ میں", ar: "أجنة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ج-ن-ن" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "بُطُونِ", transliteration: "buṭūni", meaning: { en: "the wombs of", ur: "پیٹوں", ar: "بطون" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ب-ط-ن" } },
      { arabic: "أُمَّهَاتِكُمْ", transliteration: "ummahātikum", meaning: { en: "your mothers", ur: "تمہاری ماؤں کے", ar: "أمهاتكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural", root: "أ-م-م" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "So do not", ur: "تو نہ", ar: "فلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تُزَكُّوا", transliteration: "tuzakkū", meaning: { en: "claim purity for", ur: "پاکیزگی بیان کرو", ar: "تزكوا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ز-ك-و", mood: "jussive" } },
      { arabic: "أَنفُسَكُمْ", transliteration: "anfusakum", meaning: { en: "yourselves", ur: "اپنے آپ کی", ar: "أنفسكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ن-ف-س" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", meaning: { en: "most knowing", ur: "خوب جانتا ہے", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { root: "ع-ل-م", form: "comparative" } },
      { arabic: "بِمَنِ", transliteration: "bimani", meaning: { en: "of who", ur: "اس کو جو", ar: "بمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "اتَّقَىٰ", transliteration: "ittaqā", meaning: { en: "fears Him", ur: "تقویٰ اختیار کیا", ar: "اتقى" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "و-ق-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'موصول + صلة' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "أَفَرَأَيْتَ الَّذِي تَوَلَّىٰ",
    words: [
      { arabic: "أَفَرَأَيْتَ", transliteration: "afaraʾayta", meaning: { en: "Have you seen the one", ur: "کیا تم نے اسے دیکھا", ar: "أفرأيت" }, pos: "PART+CONJ+V", posLabel: "PART+CONJ+V", grammar: { form: "I", root: "ر-أ-ي", type: "interrogative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَوَلَّىٰ", transliteration: "tawallā", meaning: { en: "turned away", ur: "منہ موڑا", ar: "أعرض" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "و-ل-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "وَأَعْطَىٰ قَلِيلًا وَأَكْدَىٰ",
    words: [
      { arabic: "وَأَعْطَىٰ", transliteration: "wa-aʿṭā", meaning: { en: "And gave", ur: "اور دیا", ar: "وأعطى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ع-ط-و" } },
      { arabic: "قَلِيلًا", transliteration: "qalīlan", meaning: { en: "a little", ur: "تھوڑا", ar: "قليلا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ق-ل-ل" } },
      { arabic: "وَأَكْدَىٰ", transliteration: "wa-akdā", meaning: { en: "and then stopped", ur: "اور بند کر دیا", ar: "وقطع" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ك-د-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "أَعِندَهُ عِلْمُ الْغَيْبِ فَهُوَ يَرَىٰ",
    words: [
      { arabic: "أَعِندَهُ", transliteration: "aʿindahu", meaning: { en: "Has he", ur: "کیا اس کے پاس ہے", ar: "أعنده" }, pos: "PART+N+PRON", posLabel: "PART+N+PRON", grammar: { type: "interrogative" } },
      { arabic: "عِلْمُ", transliteration: "ʿilmu", meaning: { en: "knowledge of", ur: "علم", ar: "علم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ل-م" } },
      { arabic: "الْغَيْبِ", transliteration: "al-ghaybi", meaning: { en: "the unseen", ur: "غیب کا", ar: "الغيب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-ي-ب" } },
      { arabic: "فَهُوَ", transliteration: "fahuwa", meaning: { en: "so he", ur: "تو وہ", ar: "فهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "يَرَىٰ", transliteration: "yarā", meaning: { en: "sees", ur: "دیکھتا ہے", ar: "يرى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "أَمْ لَمْ يُنَبَّأْ بِمَا فِي صُحُفِ مُوسَىٰ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "has he not been", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive-negative" } },
      { arabic: "يُنَبَّأْ", transliteration: "yunabbaʾ", meaning: { en: "informed", ur: "بتایا گیا", ar: "يخبر" }, pos: "V", posLabel: "V", grammar: { form: "II", voice: "passive", root: "ن-ب-أ" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "اس بات کی جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "was in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "صُحُفِ", transliteration: "ṣuḥufi", meaning: { en: "the scriptures of", ur: "صحیفوں", ar: "صحف" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ص-ح-ف" } },
      { arabic: "مُوسَىٰ", transliteration: "mūsā", meaning: { en: "Moses", ur: "موسیٰ کے", ar: "موسى" }, pos: "N", posLabel: "N", grammar: { type: "proper-noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "وَإِبْرَاهِيمَ الَّذِي وَفَّىٰ",
    words: [
      { arabic: "وَإِبْرَاهِيمَ", transliteration: "wa-ibrāhīma", meaning: { en: "And Abraham", ur: "اور ابراہیم کے", ar: "وإبراهيم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "وَفَّىٰ", transliteration: "waffā", meaning: { en: "fulfilled", ur: "پورا کیا", ar: "وفى" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "و-ف-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "أَلَّا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ",
    words: [
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "That not", ur: "کہ نہیں", ar: "أن لا" }, pos: "PART+NEG", posLabel: "PART+NEG", grammar: { type: "negative" } },
      { arabic: "تَزِرُ", transliteration: "taziru", meaning: { en: "shall bear", ur: "اٹھائے گا", ar: "تحمل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ز-ر" } },
      { arabic: "وَازِرَةٌ", transliteration: "wāziratun", meaning: { en: "a bearer", ur: "بوجھ اٹھانے والا", ar: "حاملة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "و-ز-ر" } },
      { arabic: "وِزْرَ", transliteration: "wizra", meaning: { en: "the burden of", ur: "بوجھ", ar: "وزر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ز-ر" } },
      { arabic: "أُخْرَىٰ", transliteration: "ukhrā", meaning: { en: "another", ur: "دوسرے کا", ar: "أخرى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-خ-ر", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ",
    words: [
      { arabic: "وَأَن", transliteration: "wa-an", meaning: { en: "And that", ur: "اور یہ کہ", ar: "وأن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "subjunctive-particle" } },
      { arabic: "لَّيْسَ", transliteration: "laysa", meaning: { en: "there is not", ur: "نہیں ہے", ar: "ليس" }, pos: "V", posLabel: "V", grammar: { root: "ل-ي-س", type: "negation" } },
      { arabic: "لِلْإِنسَانِ", transliteration: "lil-insāni", meaning: { en: "for man", ur: "انسان کے لیے", ar: "للإنسان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ن-س" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوا", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "سَعَىٰ", transliteration: "saʿā", meaning: { en: "he strove for", ur: "اس نے کوشش کی", ar: "سعى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-ع-ي" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصول + صلة' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ",
    words: [
      { arabic: "وَأَنَّ", transliteration: "wa-anna", meaning: { en: "And that", ur: "اور یہ کہ", ar: "وأن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "سَعْيَهُ", transliteration: "saʿyahu", meaning: { en: "his effort", ur: "اس کی کوشش", ar: "سعيه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "س-ع-ي" } },
      { arabic: "سَوْفَ", transliteration: "sawfa", meaning: { en: "will be", ur: "عنقریب", ar: "سوف" }, pos: "PART", posLabel: "PART", grammar: { type: "future" } },
      { arabic: "يُرَىٰ", transliteration: "yurā", meaning: { en: "shown", ur: "دکھایا جائے گا", ar: "يرى" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ر-أ-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "ثُمَّ يُجْزَاهُ الْجَزَاءَ الْأَوْفَىٰ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "يُجْزَاهُ", transliteration: "yujzāhu", meaning: { en: "he will be recompensed", ur: "اسے بدلہ دیا جائے گا", ar: "يجزاه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", voice: "passive", root: "ج-ز-ي" } },
      { arabic: "الْجَزَاءَ", transliteration: "al-jazāʾa", meaning: { en: "the recompense", ur: "بدلہ", ar: "الجزاء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ز-ي" } },
      { arabic: "الْأَوْفَىٰ", transliteration: "al-awfā", meaning: { en: "the fullest", ur: "پورا پورا", ar: "الأوفى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "و-ف-ي", form: "superlative" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "وَأَنَّ إِلَىٰ رَبِّكَ الْمُنتَهَىٰ",
    words: [
      { arabic: "وَأَنَّ", transliteration: "wa-anna", meaning: { en: "And that", ur: "اور یہ کہ", ar: "وأن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "تیرے رب", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "الْمُنتَهَىٰ", transliteration: "al-muntahā", meaning: { en: "is the finality", ur: "آخری حد ہے", ar: "المنتهى" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ه-ي", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "وَأَنَّهُ هُوَ أَضْحَكَ وَأَبْكَىٰ",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", meaning: { en: "And that it is He who", ur: "اور بیشک وہی", ar: "وأنه" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ ہے جس نے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "separation" } },
      { arabic: "أَضْحَكَ", transliteration: "aḍḥaka", meaning: { en: "causes laughter", ur: "ہنسایا", ar: "أضحك" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ض-ح-ك" } },
      { arabic: "وَأَبْكَىٰ", transliteration: "wa-abkā", meaning: { en: "and causes weeping", ur: "اور رلایا", ar: "وأبكى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ب-ك-ي" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "وَأَنَّهُ خَلَقَ الزَّوْجَيْنِ الذَّكَرَ وَالْأُنثَىٰ",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", meaning: { en: "And that He", ur: "اور یہ کہ اسی نے", ar: "وأنه" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الزَّوْجَيْنِ", transliteration: "al-zawjayni", meaning: { en: "the two mates", ur: "دو قسمیں", ar: "الزوجين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "dual", root: "ز-و-ج" } },
      { arabic: "الذَّكَرَ", transliteration: "al-dhakara", meaning: { en: "the male", ur: "نر", ar: "الذكر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ذ-ك-ر", type: "badal" } },
      { arabic: "وَالْأُنثَىٰ", transliteration: "wal-unthā", meaning: { en: "and the female", ur: "اور مادہ", ar: "والأنثى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "أ-ن-ث" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "مِن نُّطْفَةٍ إِذَا تُمْنَىٰ",
    words: [
      { arabic: "مِن", transliteration: "min", meaning: { en: "From", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "نُّطْفَةٍ", transliteration: "nuṭfatin", meaning: { en: "a sperm-drop", ur: "نطفے", ar: "نطفة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ط-ف" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "تُمْنَىٰ", transliteration: "tumnā", meaning: { en: "it is emitted", ur: "ٹپکایا جاتا ہے", ar: "تصب" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "م-ن-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "وَأَنَّ عَلَيْهِ النَّشْأَةَ الْأُخْرَىٰ",
    words: [
      { arabic: "وَأَنَّ", transliteration: "wa-anna", meaning: { en: "And that", ur: "اور یہ کہ", ar: "وأن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "upon Him", ur: "اسی کے ذمے ہے", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "obligation" } },
      { arabic: "النَّشْأَةَ", transliteration: "al-nashʾata", meaning: { en: "the next creation", ur: "دوبارہ پیدا کرنا", ar: "النشأة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ش-أ" } },
      { arabic: "الْأُخْرَىٰ", transliteration: "al-ukhrā", meaning: { en: "the other", ur: "دوسری", ar: "الأخرى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "أ-خ-ر", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "وَأَنَّهُ هُوَ أَغْنَىٰ وَأَقْنَىٰ",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", meaning: { en: "And that it is He who", ur: "اور بیشک وہی ہے", ar: "وأنه" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "جس نے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "separation" } },
      { arabic: "أَغْنَىٰ", transliteration: "aghnā", meaning: { en: "enriches", ur: "غنی کیا", ar: "أغنى" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "غ-ن-ي" } },
      { arabic: "وَأَقْنَىٰ", transliteration: "wa-aqnā", meaning: { en: "and satisfies", ur: "اور خوشحال کیا", ar: "وأقنى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ق-ن-ي" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "وَأَنَّهُ هُوَ رَبُّ الشِّعْرَىٰ",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", meaning: { en: "And that it is He who", ur: "اور بیشک وہی ہے", ar: "وأنه" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "separation" } },
      { arabic: "رَبُّ", transliteration: "rabbu", meaning: { en: "the Lord of", ur: "رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "الشِّعْرَىٰ", transliteration: "al-shiʿrā", meaning: { en: "Sirius", ur: "شعریٰ ستارے کا", ar: "الشعرى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  50: {
    ayahNumber: 50,
    text: "وَأَنَّهُ أَهْلَكَ عَادًا الْأُولَىٰ",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", meaning: { en: "And that He", ur: "اور اسی نے", ar: "وأنه" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "أَهْلَكَ", transliteration: "ahlaka", meaning: { en: "destroyed", ur: "ہلاک کیا", ar: "أهلك" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ه-ل-ك" } },
      { arabic: "عَادًا", transliteration: "ʿādan", meaning: { en: "Aad", ur: "عاد کو", ar: "عادا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "proper-noun" } },
      { arabic: "الْأُولَىٰ", transliteration: "al-ūlā", meaning: { en: "the former", ur: "پہلی", ar: "الأولى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "و-ل-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  51: {
    ayahNumber: 51,
    text: "وَثَمُودَ فَمَا أَبْقَىٰ",
    words: [
      { arabic: "وَثَمُودَ", transliteration: "wathamūda", meaning: { en: "And Thamud", ur: "اور ثمود کو", ar: "وثمود" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", type: "proper-noun" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "and He did not", ur: "تو نہ", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَبْقَىٰ", transliteration: "abqā", meaning: { en: "spare", ur: "چھوڑا", ar: "أبقى" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ب-ق-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' }
      ]
    }
  },

  52: {
    ayahNumber: 52,
    text: "وَقَوْمَ نُوحٍ مِّن قَبْلُ إِنَّهُمْ كَانُوا هُمْ أَظْلَمَ وَأَطْغَىٰ",
    words: [
      { arabic: "وَقَوْمَ", transliteration: "waqawma", meaning: { en: "And the people of", ur: "اور قوم", ar: "وقوم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ق-و-م" } },
      { arabic: "نُوحٍ", transliteration: "nūḥin", meaning: { en: "Noah", ur: "نوح", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { type: "adverbial" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک وہ", ar: "إنهم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were", ur: "تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", type: "kāna" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "emphasis" } },
      { arabic: "أَظْلَمَ", transliteration: "aẓlama", meaning: { en: "more wrongful", ur: "زیادہ ظالم", ar: "أظلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { root: "ظ-ل-م", form: "comparative" } },
      { arabic: "وَأَطْغَىٰ", transliteration: "wa-aṭghā", meaning: { en: "and more rebellious", ur: "اور زیادہ سرکش", ar: "وأطغى" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { root: "ط-غ-ي", form: "comparative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 8, label: 'كان + خبر' }
      ]
    }
  },

  53: {
    ayahNumber: 53,
    text: "وَالْمُؤْتَفِكَةَ أَهْوَىٰ",
    words: [
      { arabic: "وَالْمُؤْتَفِكَةَ", transliteration: "wal-muʾtafikata", meaning: { en: "And the overturned cities", ur: "اور الٹی ہوئی بستیوں کو", ar: "والمؤتفكة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "أ-ف-ك", form: "VIII" } },
      { arabic: "أَهْوَىٰ", transliteration: "ahwā", meaning: { en: "He hurled down", ur: "گرا دیا", ar: "أسقط" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ه-و-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 1, label: 'فعل + مفعول به' }
      ]
    }
  },

  54: {
    ayahNumber: 54,
    text: "فَغَشَّاهَا مَا غَشَّىٰ",
    words: [
      { arabic: "فَغَشَّاهَا", transliteration: "faghashshāhā", meaning: { en: "So He covered them", ur: "پھر ان پر چھایا", ar: "فغطاها" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "غ-ش-ي" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "that which", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "غَشَّىٰ", transliteration: "ghashshā", meaning: { en: "covered", ur: "چھایا", ar: "غطى" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "غ-ش-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' }
      ]
    }
  },

  55: {
    ayahNumber: 55,
    text: "فَبِأَيِّ آلَاءِ رَبِّكَ تَتَمَارَىٰ",
    words: [
      { arabic: "فَبِأَيِّ", transliteration: "fabi-ayyi", meaning: { en: "Then which of", ur: "تو تیرے رب کی کون سی", ar: "فبأي" }, pos: "CONJ+P+PART", posLabel: "CONJ+P+PART", grammar: { type: "interrogative" } },
      { arabic: "آلَاءِ", transliteration: "ālāʾi", meaning: { en: "the favors of", ur: "نعمتوں میں", ar: "نعم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "أ-ل-و" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "تیرے رب", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "تَتَمَارَىٰ", transliteration: "tatamārā", meaning: { en: "do you doubt", ur: "تو شک کرتا ہے", ar: "تشك" }, pos: "V", posLabel: "V", grammar: { form: "VI", root: "م-ر-ي", person: "2nd" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  56: {
    ayahNumber: 56,
    text: "هَـٰذَا نَذِيرٌ مِّنَ النُّذُرِ الْأُولَىٰ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīrun", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ذ-ر" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "النُّذُرِ", transliteration: "al-nudhuri", meaning: { en: "the warners", ur: "ڈرانے والوں", ar: "المنذرين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ن-ذ-ر" } },
      { arabic: "الْأُولَىٰ", transliteration: "al-ūlā", meaning: { en: "of old", ur: "پہلے", ar: "الأولى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "و-ل-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  57: {
    ayahNumber: 57,
    text: "أَزِفَتِ الْآزِفَةُ",
    words: [
      { arabic: "أَزِفَتِ", transliteration: "azifati", meaning: { en: "Has approached", ur: "قریب آ پہنچی", ar: "اقتربت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ز-ف", gender: "feminine" } },
      { arabic: "الْآزِفَةُ", transliteration: "al-āzifatu", meaning: { en: "the Approaching Hour", ur: "قریب آنے والی قیامت", ar: "القيامة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ز-ف" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  58: {
    ayahNumber: 58,
    text: "لَيْسَ لَهَا مِن دُونِ اللَّهِ كَاشِفَةٌ",
    words: [
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "There is not", ur: "نہیں ہے", ar: "ليس" }, pos: "V", posLabel: "V", grammar: { root: "ل-ي-س", type: "negation" } },
      { arabic: "لَهَا", transliteration: "lahā", meaning: { en: "for it", ur: "اس کے لیے", ar: "لها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "سوا", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "کے سوا", ar: "دون" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "كَاشِفَةٌ", transliteration: "kāshifatun", meaning: { en: "a remover", ur: "ٹالنے والا", ar: "مانعة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ك-ش-ف", gender: "feminine" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  59: {
    ayahNumber: 59,
    text: "أَفَمِنْ هَـٰذَا الْحَدِيثِ تَعْجَبُونَ",
    words: [
      { arabic: "أَفَمِنْ", transliteration: "afamin", meaning: { en: "Then at this", ur: "تو کیا اس", ar: "أفمن" }, pos: "PART+CONJ+P", posLabel: "PART+CONJ+P", grammar: { type: "interrogative" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "اس", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الْحَدِيثِ", transliteration: "al-ḥadīthi", meaning: { en: "statement", ur: "بات سے", ar: "الحديث" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-د-ث" } },
      { arabic: "تَعْجَبُونَ", transliteration: "taʿjabūna", meaning: { en: "you wonder", ur: "تم تعجب کرتے ہو", ar: "تعجبون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ج-ب", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  60: {
    ayahNumber: 60,
    text: "وَتَضْحَكُونَ وَلَا تَبْكُونَ",
    words: [
      { arabic: "وَتَضْحَكُونَ", transliteration: "wataḍḥakūna", meaning: { en: "And you laugh", ur: "اور تم ہنستے ہو", ar: "وتضحكون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ض-ح-ك", person: "2nd", number: "plural" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہیں", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "تَبْكُونَ", transliteration: "tabkūna", meaning: { en: "weep", ur: "روتے", ar: "تبكون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-ك-ي", person: "2nd", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' }
      ]
    }
  },

  61: {
    ayahNumber: 61,
    text: "وَأَنتُمْ سَامِدُونَ",
    words: [
      { arabic: "وَأَنتُمْ", transliteration: "wa-antum", meaning: { en: "While you", ur: "اور تم", ar: "وأنتم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "2nd", number: "plural", type: "ḥāl" } },
      { arabic: "سَامِدُونَ", transliteration: "sāmidūna", meaning: { en: "are heedlessly playing", ur: "غافل ہو", ar: "لاهون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "س-م-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' }
      ]
    }
  },

  62: {
    ayahNumber: 62,
    text: "فَاسْجُدُوا لِلَّهِ وَاعْبُدُوا",
    words: [
      { arabic: "فَاسْجُدُوا", transliteration: "fasjudū", meaning: { en: "So prostrate", ur: "تو سجدہ کرو", ar: "فاسجدوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "س-ج-د", mood: "imperative" } },
      { arabic: "لِلَّهِ", transliteration: "lillāhi", meaning: { en: "to Allah", ur: "اللہ کے لیے", ar: "لله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "وَاعْبُدُوا", transliteration: "waʿbudū", meaning: { en: "and worship", ur: "اور عبادت کرو", ar: "واعبدوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ب-د", mood: "imperative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + جار ومجرور' }
      ]
    }
  }
};

export default TREEBANK_DATA;
