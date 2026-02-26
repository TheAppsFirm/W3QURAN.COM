/**
 * Surah Al-Qalam (68) - The Pen
 * Quranic Arabic Treebank Data
 * 52 ayahs - Makki surah
 */

export const TREEBANK_DATA = {
  surahId: 68,
  surahName: "Al-Qalam",
  surahNameArabic: "القلم",
  totalAyahs: 52,

  1: {
    ayahNumber: 1,
    text: "ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ",
    words: [
      { arabic: "ن", transliteration: "nūn", root: "ن", meaning: { en: "Nun", ur: "نون", ar: "نون" }, pos: "LETTER", posLabel: "LETTER", grammar: { role: "muqatta'at" } },
      { arabic: "وَالْقَلَمِ", transliteration: "wal-qalami", root: "ق ل م", meaning: { en: "By the pen", ur: "قلم کی قسم", ar: "والقلم" }, pos: "N", posLabel: "N", grammar: { role: "oath", case: "genitive", definite: true } },
      { arabic: "وَمَا", transliteration: "wa-mā", root: "م ا", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conjunction" } },
      { arabic: "يَسْطُرُونَ", transliteration: "yasṭurūn", root: "س ط ر", meaning: { en: "they inscribe", ur: "وہ لکھتے ہیں", ar: "يكتبون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "you are", ur: "تو", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { person: 2, gender: "m", number: "sg" } },
      { arabic: "بِنِعْمَةِ", transliteration: "bi-niʿmati", root: "ن ع م", meaning: { en: "by the favor", ur: "فضل سے", ar: "بنعمة" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "genitive" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "of your Lord", ur: "تیرے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "possessive", case: "genitive" } },
      { arabic: "بِمَجْنُونٍ", transliteration: "bi-majnūn", root: "ج ن ن", meaning: { en: "a madman", ur: "دیوانہ", ar: "مجنون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "genitive", indefinite: true } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ",
    words: [
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بے شک", ar: "وإن" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { role: "emphasis" } },
      { arabic: "لَكَ", transliteration: "laka", meaning: { en: "for you", ur: "تیرے لیے", ar: "لك" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "لَأَجْرًا", transliteration: "la-ajran", root: "أ ج ر", meaning: { en: "surely a reward", ur: "یقیناً اجر", ar: "لأجراً" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative", indefinite: true } },
      { arabic: "غَيْرَ", transliteration: "ghayra", meaning: { en: "without", ur: "بغیر", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "مَمْنُونٍ", transliteration: "mamnūn", root: "م ن ن", meaning: { en: "interruption", ur: "انقطاع", ar: "انقطاع" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" }, features: { participle: "passive" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
    words: [
      { arabic: "وَإِنَّكَ", transliteration: "wa-innaka", meaning: { en: "And indeed you", ur: "اور بے شک تو", ar: "وإنك" }, pos: "CONJ+EMPH+PRON", posLabel: "CONJ+EMPH+PRON", grammar: { role: "subject_inna" } },
      { arabic: "لَعَلَىٰ", transliteration: "la-ʿalā", meaning: { en: "surely are upon", ur: "یقیناً پر ہے", ar: "لعلى" }, pos: "EMPH+PREP", posLabel: "EMPH+PREP", grammar: { role: "predicate" } },
      { arabic: "خُلُقٍ", transliteration: "khuluqin", root: "خ ل ق", meaning: { en: "character", ur: "اخلاق", ar: "خلق" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", indefinite: true } },
      { arabic: "عَظِيمٍ", transliteration: "ʿaẓīm", root: "ع ظ م", meaning: { en: "exalted", ur: "عظیم", ar: "عظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "فَسَتُبْصِرُ وَيُبْصِرُونَ",
    words: [
      { arabic: "فَسَتُبْصِرُ", transliteration: "fa-sa-tubṣiru", root: "ب ص ر", meaning: { en: "So you will see", ur: "تو جلد دیکھ لے گا", ar: "فستبصر" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", tense: "future", form: "IV" } },
      { arabic: "وَيُبْصِرُونَ", transliteration: "wa-yubṣirūn", root: "ب ص ر", meaning: { en: "and they will see", ur: "اور وہ دیکھ لیں گے", ar: "ويبصرون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "future", form: "IV" } }
    ],
    structure: {
      relationships: [],
    },
  },

  6: {
    ayahNumber: 6,
    text: "بِأَييِّكُمُ الْمَفْتُونُ",
    words: [
      { arabic: "بِأَييِّكُمُ", transliteration: "bi-ayyikumu", meaning: { en: "which of you", ur: "تم میں سے کون", ar: "بأيكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "interrogative" } },
      { arabic: "الْمَفْتُونُ", transliteration: "al-maftūn", root: "ف ت ن", meaning: { en: "is the afflicted", ur: "فتنے میں ہے", ar: "المفتون" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true }, features: { participle: "passive" } }
    ],
    structure: {
      relationships: [],
    },
  },

  7: {
    ayahNumber: 7,
    text: "إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", root: "ع ل م", meaning: { en: "most knowing", ur: "خوب جاننے والا", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", degree: "superlative" } },
      { arabic: "بِمَن", transliteration: "bi-man", meaning: { en: "of who", ur: "جو", ar: "بمن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "ضَلَّ", transliteration: "ḍalla", root: "ض ل ل", meaning: { en: "strayed", ur: "گمراہ ہوا", ar: "ضل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِهِ", transliteration: "sabīlihi", root: "س ب ل", meaning: { en: "His way", ur: "اس کے راستے", ar: "سبيله" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", root: "ع ل م", meaning: { en: "most knowing", ur: "خوب جاننے والا", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", degree: "superlative" } },
      { arabic: "بِالْمُهْتَدِينَ", transliteration: "bil-muhtadīn", root: "ه د ي", meaning: { en: "of the guided", ur: "ہدایت یافتہ لوگوں کو", ar: "بالمهتدين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true }, features: { participle: "active", form: "VIII" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مبتدأ + خبر' },
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 7, to: 8, label: 'جار + مجرور' },
      { from: 3, to: 9, label: 'عطف' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "فَلَا تُطِعِ الْمُكَذِّبِينَ",
    words: [
      { arabic: "فَلَا", transliteration: "fa-lā", meaning: { en: "So do not", ur: "پس مت", ar: "فلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "prohibition" } },
      { arabic: "تُطِعِ", transliteration: "tuṭiʿ", root: "ط و ع", meaning: { en: "obey", ur: "اطاعت کر", ar: "تطع" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "jussive", form: "IV" } },
      { arabic: "الْمُكَذِّبِينَ", transliteration: "al-mukadhdhibīn", root: "ك ذ ب", meaning: { en: "the deniers", ur: "جھٹلانے والوں کی", ar: "المكذبين" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true }, features: { participle: "active", form: "II" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "وَدُّوا لَوْ تُدْهِنُ فَيُدْهِنُونَ",
    words: [
      { arabic: "وَدُّوا", transliteration: "waddū", root: "و د د", meaning: { en: "They wish", ur: "وہ چاہتے ہیں", ar: "ودوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "if", ur: "کاش", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "تُدْهِنُ", transliteration: "tudhinu", root: "د ه ن", meaning: { en: "you would compromise", ur: "تو نرم پڑ جائے", ar: "تدهن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "IV" } },
      { arabic: "فَيُدْهِنُونَ", transliteration: "fa-yudhinūn", root: "د ه ن", meaning: { en: "so they would compromise", ur: "تو وہ بھی نرم پڑ جائیں", ar: "فيدهنون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "IV" } }
    ],
    structure: {
      relationships: [],
    },
  },

  10: {
    ayahNumber: 10,
    text: "وَلَا تُطِعْ كُلَّ حَلَّافٍ مَّهِينٍ",
    words: [
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "And do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "prohibition" } },
      { arabic: "تُطِعْ", transliteration: "tuṭiʿ", root: "ط و ع", meaning: { en: "obey", ur: "اطاعت کر", ar: "تطع" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "jussive", form: "IV" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "حَلَّافٍ", transliteration: "ḥallāf", root: "ح ل ف", meaning: { en: "excessive swearer", ur: "بہت قسمیں کھانے والے", ar: "حلاف" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" }, features: { intensive: true } },
      { arabic: "مَّهِينٍ", transliteration: "mahīn", root: "م ه ن", meaning: { en: "despicable", ur: "ذلیل", ar: "مهين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "هَمَّازٍ مَّشَّاءٍ بِنَمِيمٍ",
    words: [
      { arabic: "هَمَّازٍ", transliteration: "hammāz", root: "ه م ز", meaning: { en: "Slanderer", ur: "طعنہ دینے والا", ar: "همّاز" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { intensive: true } },
      { arabic: "مَّشَّاءٍ", transliteration: "mashshāʾ", root: "م ش ي", meaning: { en: "spreader", ur: "چلنے والا", ar: "مشّاء" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { intensive: true } },
      { arabic: "بِنَمِيمٍ", transliteration: "bi-namīm", root: "ن م م", meaning: { en: "of malicious gossip", ur: "چغل خوری میں", ar: "بنميم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } }
    ],
    structure: {
      relationships: [],
    },
  },

  12: {
    ayahNumber: 12,
    text: "مَّنَّاعٍ لِّلْخَيْرِ مُعْتَدٍ أَثِيمٍ",
    words: [
      { arabic: "مَّنَّاعٍ", transliteration: "mannāʿ", root: "م ن ع", meaning: { en: "Preventer", ur: "روکنے والا", ar: "منّاع" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { intensive: true } },
      { arabic: "لِّلْخَيْرِ", transliteration: "lil-khayr", root: "خ ي ر", meaning: { en: "of good", ur: "بھلائی سے", ar: "للخير" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "مُعْتَدٍ", transliteration: "muʿtad", root: "ع د و", meaning: { en: "aggressor", ur: "زیادتی کرنے والا", ar: "معتد" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active", form: "VIII" } },
      { arabic: "أَثِيمٍ", transliteration: "athīm", root: "أ ث م", meaning: { en: "sinful", ur: "گنہگار", ar: "أثيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "عُتُلٍّ بَعْدَ ذَٰلِكَ زَنِيمٍ",
    words: [
      { arabic: "عُتُلٍّ", transliteration: "ʿutull", root: "ع ت ل", meaning: { en: "Cruel", ur: "سخت مزاج", ar: "عتل" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "ADV", posLabel: "ADV", grammar: { role: "adverb", case: "accusative" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس کے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "زَنِيمٍ", transliteration: "zanīm", root: "ز ن م", meaning: { en: "an outcast", ur: "بدنام", ar: "زنيم" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" } }
    ],
    structure: {
      relationships: [],
    },
  },

  14: {
    ayahNumber: 14,
    text: "أَن كَانَ ذَا مَالٍ وَبَنِينَ",
    words: [
      { arabic: "أَن", transliteration: "an", meaning: { en: "Because", ur: "کیونکہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "causal" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "he is", ur: "وہ ہے", ar: "كان" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "ذَا", transliteration: "dhā", meaning: { en: "possessor of", ur: "والا", ar: "ذا" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" } },
      { arabic: "مَالٍ", transliteration: "māl", root: "م و ل", meaning: { en: "wealth", ur: "مال", ar: "مال" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَبَنِينَ", transliteration: "wa-banīn", root: "ب ن و", meaning: { en: "and children", ur: "اور بیٹے", ar: "وبنين" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "genitive" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "إِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا قَالَ أَسَاطِيرُ الْأَوَّلِينَ",
    words: [
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "تُتْلَىٰ", transliteration: "tutlā", root: "ت ل و", meaning: { en: "are recited", ur: "پڑھی جاتی ہیں", ar: "تتلى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", voice: "passive", form: "I" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "to him", ur: "اس پر", ar: "عليه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "آيَاتُنَا", transliteration: "āyātunā", root: "أ ي ي", meaning: { en: "Our verses", ur: "ہماری آیات", ar: "آياتنا" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "he says", ur: "وہ کہتا ہے", ar: "قال" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "أَسَاطِيرُ", transliteration: "asāṭīr", root: "س ط ر", meaning: { en: "Legends", ur: "کہانیاں", ar: "أساطير" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīn", root: "أ و ل", meaning: { en: "of the former peoples", ur: "اگلوں کی", ar: "الأولين" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 6, label: 'مبتدأ + خبر' },
      { from: 5, to: 6, label: 'فعل + فاعل' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "سَنَسِمُهُ عَلَى الْخُرْطُومِ",
    words: [
      { arabic: "سَنَسِمُهُ", transliteration: "sa-nasimuhu", root: "و س م", meaning: { en: "We will brand him", ur: "ہم داغ دیں گے اسے", ar: "سنسمه" }, pos: "V", posLabel: "V", grammar: { person: 1, gender: "m", number: "pl", tense: "future", form: "I" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْخُرْطُومِ", transliteration: "al-khurṭūm", root: "خ ر ط م", meaning: { en: "the snout", ur: "ناک", ar: "الخرطوم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "إِنَّا بَلَوْنَاهُمْ كَمَا بَلَوْنَا أَصْحَابَ الْجَنَّةِ إِذْ أَقْسَمُوا لَيَصْرِمُنَّهَا مُصْبِحِينَ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed We", ur: "بے شک ہم نے", ar: "إنا" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "بَلَوْنَاهُمْ", transliteration: "balawnāhum", root: "ب ل و", meaning: { en: "have tested them", ur: "انہیں آزمایا", ar: "بلوناهم" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "I" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "as", ur: "جیسے", ar: "كما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "comparison" } },
      { arabic: "بَلَوْنَا", transliteration: "balawnā", root: "ب ل و", meaning: { en: "We tested", ur: "ہم نے آزمایا", ar: "بلونا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "I" } },
      { arabic: "أَصْحَابَ", transliteration: "aṣḥāba", root: "ص ح ب", meaning: { en: "the companions", ur: "والوں کو", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "الْجَنَّةِ", transliteration: "al-jannah", root: "ج ن ن", meaning: { en: "of the garden", ur: "باغ کے", ar: "الجنة" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "ADV", posLabel: "ADV", grammar: { role: "temporal" } },
      { arabic: "أَقْسَمُوا", transliteration: "aqsamū", root: "ق س م", meaning: { en: "they swore", ur: "انہوں نے قسم کھائی", ar: "أقسموا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "IV" } },
      { arabic: "لَيَصْرِمُنَّهَا", transliteration: "la-yaṣrimunnahā", root: "ص ر م", meaning: { en: "they would cut it", ur: "وہ ضرور اسے توڑ لیں گے", ar: "ليصرمنها" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "emphatic", form: "I" } },
      { arabic: "مُصْبِحِينَ", transliteration: "muṣbiḥīn", root: "ص ب ح", meaning: { en: "at morning", ur: "صبح ہوتے", ar: "مصبحين" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative" }, features: { participle: "active", form: "IV" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "وَلَا يَسْتَثْنُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "And not", ur: "اور نہیں", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "negation" } },
      { arabic: "يَسْتَثْنُونَ", transliteration: "yastathnūn", root: "ث ن ي", meaning: { en: "making exception", ur: "استثنا کرتے", ar: "يستثنون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "X" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "فَطَافَ عَلَيْهَا طَائِفٌ مِّن رَّبِّكَ وَهُمْ نَائِمُونَ",
    words: [
      { arabic: "فَطَافَ", transliteration: "fa-ṭāfa", root: "ط و ف", meaning: { en: "So there passed", ur: "تو چکر لگایا", ar: "فطاف" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "over it", ur: "اس پر", ar: "عليها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "طَائِفٌ", transliteration: "ṭāʾif", root: "ط و ف", meaning: { en: "a visitor", ur: "آفت", ar: "طائف" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" }, features: { participle: "active" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرے رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَهُمْ", transliteration: "wa-hum", meaning: { en: "while they", ur: "اور وہ", ar: "وهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "نَائِمُونَ", transliteration: "nāʾimūn", root: "ن و م", meaning: { en: "were asleep", ur: "سوئے ہوئے تھے", ar: "نائمون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 7, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 2, to: 6, label: 'عطف' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "فَأَصْبَحَتْ كَالصَّرِيمِ",
    words: [
      { arabic: "فَأَصْبَحَتْ", transliteration: "fa-aṣbaḥat", root: "ص ب ح", meaning: { en: "So it became", ur: "تو ہو گیا", ar: "فأصبحت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "كَالصَّرِيمِ", transliteration: "kaṣ-ṣarīm", root: "ص ر م", meaning: { en: "like one harvested", ur: "کٹی ہوئی کی طرح", ar: "كالصريم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "genitive", definite: true } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
  },

  21: {
    ayahNumber: 21,
    text: "فَتَنَادَوْا مُصْبِحِينَ",
    words: [
      { arabic: "فَتَنَادَوْا", transliteration: "fa-tanādaw", root: "ن د و", meaning: { en: "So they called one another", ur: "تو انہوں نے پکارا", ar: "فتنادوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "VI" } },
      { arabic: "مُصْبِحِينَ", transliteration: "muṣbiḥīn", root: "ص ب ح", meaning: { en: "at morning", ur: "صبح ہوتے", ar: "مصبحين" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative" }, features: { participle: "active", form: "IV" } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
  },

  22: {
    ayahNumber: 22,
    text: "أَنِ اغْدُوا عَلَىٰ حَرْثِكُمْ إِن كُنتُمْ صَارِمِينَ",
    words: [
      { arabic: "أَنِ", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "اغْدُوا", transliteration: "ighdū", root: "غ د و", meaning: { en: "Go early", ur: "صبح جلدی جاؤ", ar: "اغدوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "I" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حَرْثِكُمْ", transliteration: "ḥarthikum", root: "ح ر ث", meaning: { en: "your crop", ur: "اپنی کھیتی", ar: "حرثكم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", root: "ك و ن", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect" } },
      { arabic: "صَارِمِينَ", transliteration: "ṣārimīn", root: "ص ر م", meaning: { en: "to harvest", ur: "توڑنے والے", ar: "صارمين" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "accusative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "فَانطَلَقُوا وَهُمْ يَتَخَافَتُونَ",
    words: [
      { arabic: "فَانطَلَقُوا", transliteration: "fa-nṭalaqū", root: "ط ل ق", meaning: { en: "So they set out", ur: "تو وہ چل پڑے", ar: "فانطلقوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "VII" } },
      { arabic: "وَهُمْ", transliteration: "wa-hum", meaning: { en: "while they", ur: "اور وہ", ar: "وهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "يَتَخَافَتُونَ", transliteration: "yatakhāfatūn", root: "خ ف ت", meaning: { en: "were whispering", ur: "آہستہ بات کرتے", ar: "يتخافتون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "VI" } }
    ],
    structure: {
      relationships: [],
    },
  },

  24: {
    ayahNumber: 24,
    text: "أَن لَّا يَدْخُلَنَّهَا الْيَوْمَ عَلَيْكُم مِّسْكِينٌ",
    words: [
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "no", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَدْخُلَنَّهَا", transliteration: "yadkhulannāhā", root: "د خ ل", meaning: { en: "will enter it", ur: "داخل ہو اس میں", ar: "يدخلنها" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "emphatic", form: "I" } },
      { arabic: "الْيَوْمَ", transliteration: "al-yawma", root: "ي و م", meaning: { en: "today", ur: "آج", ar: "اليوم" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative", definite: true } },
      { arabic: "عَلَيْكُم", transliteration: "ʿalaykum", meaning: { en: "upon you", ur: "تم پر", ar: "عليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّسْكِينٌ", transliteration: "miskīn", root: "س ك ن", meaning: { en: "any poor person", ur: "کوئی مسکین", ar: "مسكين" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", indefinite: true } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'نفی + فعل' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "وَغَدَوْا عَلَىٰ حَرْدٍ قَادِرِينَ",
    words: [
      { arabic: "وَغَدَوْا", transliteration: "wa-ghadaw", root: "غ د و", meaning: { en: "And they went early", ur: "اور وہ صبح گئے", ar: "وغدوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حَرْدٍ", transliteration: "ḥard", root: "ح ر د", meaning: { en: "exclusion", ur: "ارادے پر", ar: "حرد" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "قَادِرِينَ", transliteration: "qādirīn", root: "ق د ر", meaning: { en: "assuming power", ur: "قادر سمجھتے ہوئے", ar: "قادرين" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'حال' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "فَلَمَّا رَأَوْهَا قَالُوا إِنَّا لَضَالُّونَ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "fa-lammā", meaning: { en: "But when", ur: "پھر جب", ar: "فلما" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "رَأَوْهَا", transliteration: "raʾawhā", root: "ر أ ي", meaning: { en: "they saw it", ur: "انہوں نے اسے دیکھا", ar: "رأوها" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "they said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed we", ur: "بے شک ہم", ar: "إنا" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "لَضَالُّونَ", transliteration: "la-ḍāllūn", root: "ض ل ل", meaning: { en: "surely are lost", ur: "یقیناً بھٹکے ہوئے ہیں", ar: "لضالون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
  },

  27: {
    ayahNumber: 27,
    text: "بَلْ نَحْنُ مَحْرُومُونَ",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بل" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "adversative" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "we", ur: "ہم", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: 1, number: "pl" } },
      { arabic: "مَحْرُومُونَ", transliteration: "maḥrūmūn", root: "ح ر م", meaning: { en: "are deprived", ur: "محروم ہیں", ar: "محرومون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "passive" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "قَالَ أَوْسَطُهُمْ أَلَمْ أَقُل لَّكُمْ لَوْلَا تُسَبِّحُونَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "Said", ur: "کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "أَوْسَطُهُمْ", transliteration: "awsaṭuhum", root: "و س ط", meaning: { en: "the most moderate of them", ur: "ان میں سے سب سے بہتر", ar: "أوسطهم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", degree: "superlative" } },
      { arabic: "أَلَمْ", transliteration: "a-lam", meaning: { en: "Did I not", ur: "کیا میں نے نہیں", ar: "ألم" }, pos: "INTERROG+NEG", posLabel: "INTERROG+NEG", grammar: { role: "interrogative" } },
      { arabic: "أَقُل", transliteration: "aqul", root: "ق و ل", meaning: { en: "say", ur: "کہا تھا", ar: "أقل" }, pos: "V", posLabel: "V", grammar: { person: 1, gender: "m", number: "sg", mood: "jussive", form: "I" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "to you", ur: "تم سے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "لَوْلَا", transliteration: "lawlā", meaning: { en: "why do you not", ur: "کیوں نہیں", ar: "لولا" }, pos: "COND", posLabel: "COND", grammar: { role: "exhortation" } },
      { arabic: "تُسَبِّحُونَ", transliteration: "tusabbiḥūn", root: "س ب ح", meaning: { en: "glorify Allah", ur: "تسبیح کرتے", ar: "تسبحون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "II" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'نفی + فعل' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "قَالُوا سُبْحَانَ رَبِّنَا إِنَّا كُنَّا ظَالِمِينَ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "سُبْحَانَ", transliteration: "subḥāna", root: "س ب ح", meaning: { en: "Glory be to", ur: "پاک ہے", ar: "سبحان" }, pos: "N", posLabel: "N", grammar: { role: "exclamation", case: "accusative" } },
      { arabic: "رَبِّنَا", transliteration: "rabbinā", root: "ر ب ب", meaning: { en: "our Lord", ur: "ہمارا رب", ar: "ربنا" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "indeed we", ur: "بے شک ہم", ar: "إنا" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "كُنَّا", transliteration: "kunnā", root: "ك و ن", meaning: { en: "were", ur: "تھے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect" } },
      { arabic: "ظَالِمِينَ", transliteration: "ẓālimīn", root: "ظ ل م", meaning: { en: "wrongdoers", ur: "ظالم", ar: "ظالمين" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "فَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَلَاوَمُونَ",
    words: [
      { arabic: "فَأَقْبَلَ", transliteration: "fa-aqbala", root: "ق ب ل", meaning: { en: "So they turned", ur: "تو متوجہ ہوئے", ar: "فأقبل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", meaning: { en: "some of them", ur: "ان میں سے بعض", ar: "بعضهم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْضٍ", transliteration: "baʿḍ", meaning: { en: "others", ur: "بعض", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "يَتَلَاوَمُونَ", transliteration: "yatalāwamūn", root: "ل و م", meaning: { en: "blaming one another", ur: "ایک دوسرے کو ملامت کرتے", ar: "يتلاومون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "VI" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "قَالُوا يَا وَيْلَنَا إِنَّا كُنَّا طَاغِينَ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "وَيْلَنَا", transliteration: "waylanā", root: "و ي ل", meaning: { en: "woe to us", ur: "ہماری ہلاکت", ar: "ويلنا" }, pos: "N", posLabel: "N", grammar: { role: "exclamation", case: "accusative" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "indeed we", ur: "بے شک ہم", ar: "إنا" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "كُنَّا", transliteration: "kunnā", root: "ك و ن", meaning: { en: "were", ur: "تھے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect" } },
      { arabic: "طَاغِينَ", transliteration: "ṭāghīn", root: "ط غ و", meaning: { en: "transgressors", ur: "سرکش", ar: "طاغين" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "عَسَىٰ رَبُّنَا أَن يُبْدِلَنَا خَيْرًا مِّنْهَا إِنَّا إِلَىٰ رَبِّنَا رَاغِبُونَ",
    words: [
      { arabic: "عَسَىٰ", transliteration: "ʿasā", meaning: { en: "Perhaps", ur: "شاید", ar: "عسى" }, pos: "V", posLabel: "V", grammar: { role: "hope" } },
      { arabic: "رَبُّنَا", transliteration: "rabbunā", root: "ر ب ب", meaning: { en: "our Lord", ur: "ہمارا رب", ar: "ربنا" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يُبْدِلَنَا", transliteration: "yubdilanā", root: "ب د ل", meaning: { en: "will give us in exchange", ur: "ہمیں بدلے میں دے", ar: "يبدلنا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "IV" } },
      { arabic: "خَيْرًا", transliteration: "khayran", root: "خ ي ر", meaning: { en: "better", ur: "بہتر", ar: "خيراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "مِّنْهَا", transliteration: "minhā", meaning: { en: "than it", ur: "اس سے", ar: "منها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "comparison" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "indeed we", ur: "بے شک ہم", ar: "إنا" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّنَا", transliteration: "rabbinā", root: "ر ب ب", meaning: { en: "our Lord", ur: "اپنے رب", ar: "ربنا" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "رَاغِبُونَ", transliteration: "rāghibūn", root: "ر غ ب", meaning: { en: "are hopeful", ur: "رغبت رکھنے والے ہیں", ar: "راغبون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 8, to: 9, label: 'جار + مجرور' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "كَذَٰلِكَ الْعَذَابُ ۖ وَلَعَذَابُ الْآخِرَةِ أَكْبَرُ ۚ لَوْ كَانُوا يَعْلَمُونَ",
    words: [
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Such is", ur: "ایسا ہے", ar: "كذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "predicate" } },
      { arabic: "الْعَذَابُ", transliteration: "al-ʿadhāb", root: "ع ذ ب", meaning: { en: "the punishment", ur: "عذاب", ar: "العذاب" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "وَلَعَذَابُ", transliteration: "wa-la-ʿadhābu", root: "ع ذ ب", meaning: { en: "and surely punishment", ur: "اور یقیناً عذاب", ar: "ولعذاب" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "الْآخِرَةِ", transliteration: "al-ākhirah", root: "أ خ ر", meaning: { en: "of the Hereafter", ur: "آخرت کا", ar: "الآخرة" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "أَكْبَرُ", transliteration: "akbar", root: "ك ب ر", meaning: { en: "is greater", ur: "بڑا ہے", ar: "أكبر" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", degree: "superlative" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "if", ur: "کاش", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كَانُوا", transliteration: "kānū", root: "ك و ن", meaning: { en: "they", ur: "وہ ہوتے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūn", root: "ع ل م", meaning: { en: "knew", ur: "جانتے", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 3, to: 5, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "إِنَّ لِلْمُتَّقِينَ عِندَ رَبِّهِمْ جَنَّاتِ النَّعِيمِ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "لِلْمُتَّقِينَ", transliteration: "lil-muttaqīn", root: "و ق ي", meaning: { en: "for the righteous", ur: "پرہیزگاروں کے لیے", ar: "للمتقين" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "genitive", definite: true }, features: { participle: "active", form: "VIII" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "with", ur: "پاس", ar: "عند" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کے رب کے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "جَنَّاتِ", transliteration: "jannāt", root: "ج ن ن", meaning: { en: "Gardens", ur: "جنتیں", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "النَّعِيمِ", transliteration: "an-naʿīm", root: "ن ع م", meaning: { en: "of Pleasure", ur: "نعمت والی", ar: "النعيم" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "أَفَنَجْعَلُ الْمُسْلِمِينَ كَالْمُجْرِمِينَ",
    words: [
      { arabic: "أَفَنَجْعَلُ", transliteration: "a-fa-najʿalu", root: "ج ع ل", meaning: { en: "Then will We treat", ur: "کیا ہم بنا دیں", ar: "أفنجعل" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", mood: "indicative", form: "I" } },
      { arabic: "الْمُسْلِمِينَ", transliteration: "al-muslimīn", root: "س ل م", meaning: { en: "the Muslims", ur: "مسلمانوں کو", ar: "المسلمين" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true }, features: { participle: "active", form: "IV" } },
      { arabic: "كَالْمُجْرِمِينَ", transliteration: "kal-mujrimīn", root: "ج ر م", meaning: { en: "like the criminals", ur: "مجرموں کی طرح", ar: "كالمجرمين" }, pos: "N", posLabel: "N", grammar: { role: "comparison", case: "genitive", definite: true }, features: { participle: "active", form: "IV" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "مَا لَكُمْ كَيْفَ تَحْكُمُونَ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا", ar: "ما" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "is with you", ur: "تمہیں ہے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "کیسے", ar: "كيف" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "تَحْكُمُونَ", transliteration: "taḥkumūn", root: "ح ك م", meaning: { en: "do you judge", ur: "تم فیصلہ کرتے ہو", ar: "تحكمون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ],
    structure: {
      relationships: [],
    },
  },

  37: {
    ayahNumber: 37,
    text: "أَمْ لَكُمْ كِتَابٌ فِيهِ تَدْرُسُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "do you have", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "كِتَابٌ", transliteration: "kitāb", root: "ك ت ب", meaning: { en: "a book", ur: "کتاب", ar: "كتاب" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", indefinite: true } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in which", ur: "اس میں", ar: "فيه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تَدْرُسُونَ", transliteration: "tadrusūn", root: "د ر س", meaning: { en: "you study", ur: "تم پڑھتے ہو", ar: "تدرسون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ],
    structure: {
      relationships: [],
    },
  },

  38: {
    ayahNumber: 38,
    text: "إِنَّ لَكُمْ فِيهِ لَمَا تَخَيَّرُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "that indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "اس میں", ar: "فيه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "لَمَا", transliteration: "la-mā", meaning: { en: "surely what", ur: "یقیناً جو", ar: "لما" }, pos: "EMPH+REL", posLabel: "EMPH+REL", grammar: { role: "subject_inna" } },
      { arabic: "تَخَيَّرُونَ", transliteration: "takhayyarūn", root: "خ ي ر", meaning: { en: "you choose", ur: "تم پسند کرتے ہو", ar: "تخيرون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "V" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'موصول + صلة' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "أَمْ لَكُمْ أَيْمَانٌ عَلَيْنَا بَالِغَةٌ إِلَىٰ يَوْمِ الْقِيَامَةِ ۙ إِنَّ لَكُمْ لَمَا تَحْكُمُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "do you have", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "أَيْمَانٌ", transliteration: "aymān", root: "ي م ن", meaning: { en: "oaths", ur: "قسمیں", ar: "أيمان" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", indefinite: true } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", meaning: { en: "binding on Us", ur: "ہم پر", ar: "علينا" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "بَالِغَةٌ", transliteration: "bālighah", root: "ب ل غ", meaning: { en: "extending", ur: "پہنچنے والی", ar: "بالغة" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "nominative" }, features: { participle: "active" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "until", ur: "تک", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", root: "ي و م", meaning: { en: "the Day", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "الْقِيَامَةِ", transliteration: "al-qiyāmah", root: "ق و م", meaning: { en: "of Resurrection", ur: "قیامت کے", ar: "القيامة" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "that indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "لَمَا", transliteration: "la-mā", meaning: { en: "is what", ur: "جو", ar: "لما" }, pos: "EMPH+REL", posLabel: "EMPH+REL", grammar: { role: "subject_inna" } },
      { arabic: "تَحْكُمُونَ", transliteration: "taḥkumūn", root: "ح ك م", meaning: { en: "you rule", ur: "تم فیصلہ کرتے ہو", ar: "تحكمون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'جار + مجرور' },
      { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
      { from: 5, to: 10, label: 'مبتدأ + خبر' },
      { from: 11, to: 12, label: 'موصول + صلة' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "سَلْهُمْ أَيُّهُم بِذَٰلِكَ زَعِيمٌ",
    words: [
      { arabic: "سَلْهُمْ", transliteration: "salhum", root: "س أ ل", meaning: { en: "Ask them", ur: "ان سے پوچھ", ar: "سلهم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "أَيُّهُم", transliteration: "ayyuhum", meaning: { en: "which of them", ur: "ان میں سے کون", ar: "أيهم" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "بِذَٰلِكَ", transliteration: "bi-dhālika", meaning: { en: "for that", ur: "اس کا", ar: "بذلك" }, pos: "PREP+DEM", posLabel: "PREP+DEM", grammar: { role: "preposition" } },
      { arabic: "زَعِيمٌ", transliteration: "zaʿīm", root: "ز ع م", meaning: { en: "is responsible", ur: "ذمہ دار", ar: "زعيم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", indefinite: true } }
    ],
    structure: {
      relationships: [],
    },
  },

  41: {
    ayahNumber: 41,
    text: "أَمْ لَهُمْ شُرَكَاءُ فَلْيَأْتُوا بِشُرَكَائِهِمْ إِن كَانُوا صَادِقِينَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "do they have", ur: "ان کے لیے", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "شُرَكَاءُ", transliteration: "shurakāʾ", root: "ش ر ك", meaning: { en: "partners", ur: "شریک", ar: "شركاء" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "فَلْيَأْتُوا", transliteration: "fa-l-yaʾtū", root: "أ ت ي", meaning: { en: "then let them bring", ur: "تو وہ لائیں", ar: "فليأتوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "jussive", form: "I" } },
      { arabic: "بِشُرَكَائِهِمْ", transliteration: "bi-shurakāʾihim", root: "ش ر ك", meaning: { en: "their partners", ur: "اپنے شریکوں کو", ar: "بشركائهم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كَانُوا", transliteration: "kānū", root: "ك و ن", meaning: { en: "they are", ur: "وہ ہیں", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect" } },
      { arabic: "صَادِقِينَ", transliteration: "ṣādiqīn", root: "ص د ق", meaning: { en: "truthful", ur: "سچے", ar: "صادقين" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 7, to: 8, label: 'فعل + مفعول به' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "يَوْمَ يُكْشَفُ عَن سَاقٍ وَيُدْعَوْنَ إِلَى السُّجُودِ فَلَا يَسْتَطِيعُونَ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative" } },
      { arabic: "يُكْشَفُ", transliteration: "yukshafu", root: "ك ش ف", meaning: { en: "will be exposed", ur: "کھولی جائے گی", ar: "يكشف" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", voice: "passive", form: "I" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "about", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَاقٍ", transliteration: "sāq", root: "س و ق", meaning: { en: "shin", ur: "پنڈلی", ar: "ساق" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَيُدْعَوْنَ", transliteration: "wa-yudʿawna", root: "د ع و", meaning: { en: "and they are invited", ur: "اور بلائے جائیں گے", ar: "ويدعون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", voice: "passive", form: "I" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السُّجُودِ", transliteration: "as-sujūd", root: "س ج د", meaning: { en: "prostration", ur: "سجدے", ar: "السجود" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "فَلَا", transliteration: "fa-lā", meaning: { en: "but not", ur: "مگر نہیں", ar: "فلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "negation" } },
      { arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūn", root: "ط و ع", meaning: { en: "they will be able", ur: "وہ کر سکیں گے", ar: "يستطيعون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "X" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 6, to: 7, label: 'جار + مجرور' },
      { from: 8, to: 9, label: 'نفی + فعل' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "خَاشِعَةً أَبْصَارُهُمْ تَرْهَقُهُمْ ذِلَّةٌ ۖ وَقَدْ كَانُوا يُدْعَوْنَ إِلَى السُّجُودِ وَهُمْ سَالِمُونَ",
    words: [
      { arabic: "خَاشِعَةً", transliteration: "khāshiʿah", root: "خ ش ع", meaning: { en: "Humbled", ur: "جھکی ہوئی", ar: "خاشعة" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" }, features: { participle: "active" } },
      { arabic: "أَبْصَارُهُمْ", transliteration: "abṣāruhum", root: "ب ص ر", meaning: { en: "their eyes", ur: "ان کی آنکھیں", ar: "أبصارهم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "تَرْهَقُهُمْ", transliteration: "tarhaquhum", root: "ر ه ق", meaning: { en: "will cover them", ur: "ڈھانپے گی انہیں", ar: "ترهقهم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "ذِلَّةٌ", transliteration: "dhillah", root: "ذ ل ل", meaning: { en: "humiliation", ur: "ذلت", ar: "ذلة" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", indefinite: true } },
      { arabic: "وَقَدْ", transliteration: "wa-qad", meaning: { en: "and certainly", ur: "اور یقیناً", ar: "وقد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammar: { role: "emphasis" } },
      { arabic: "كَانُوا", transliteration: "kānū", root: "ك و ن", meaning: { en: "they were", ur: "وہ تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect" } },
      { arabic: "يُدْعَوْنَ", transliteration: "yudʿawna", root: "د ع و", meaning: { en: "invited", ur: "بلائے جاتے تھے", ar: "يدعون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", voice: "passive", form: "I" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السُّجُودِ", transliteration: "as-sujūd", root: "س ج د", meaning: { en: "prostration", ur: "سجدے", ar: "السجود" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَهُمْ", transliteration: "wa-hum", meaning: { en: "while they", ur: "اور وہ", ar: "وهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "سَالِمُونَ", transliteration: "sālimūn", root: "س ل م", meaning: { en: "were sound", ur: "صحیح سلامت تھے", ar: "سالمون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + فاعل' },
      { from: 8, to: 9, label: 'جار + مجرور' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "فَذَرْنِي وَمَن يُكَذِّبُ بِهَٰذَا الْحَدِيثِ ۖ سَنَسْتَدْرِجُهُم مِّنْ حَيْثُ لَا يَعْلَمُونَ",
    words: [
      { arabic: "فَذَرْنِي", transliteration: "fa-dharnī", root: "و ذ ر", meaning: { en: "So leave Me", ur: "تو مجھے چھوڑ دو", ar: "فذرني" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "and whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conjunction" } },
      { arabic: "يُكَذِّبُ", transliteration: "yukadhdhibu", root: "ك ذ ب", meaning: { en: "denies", ur: "جھٹلاتا ہے", ar: "يكذب" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "II" } },
      { arabic: "بِهَٰذَا", transliteration: "bi-hādhā", meaning: { en: "this", ur: "اس", ar: "بهذا" }, pos: "PREP+DEM", posLabel: "PREP+DEM", grammar: { role: "preposition" } },
      { arabic: "الْحَدِيثِ", transliteration: "al-ḥadīth", root: "ح د ث", meaning: { en: "statement", ur: "کلام", ar: "الحديث" }, pos: "N", posLabel: "N", grammar: { role: "apposition", case: "genitive", definite: true } },
      { arabic: "سَنَسْتَدْرِجُهُم", transliteration: "sa-nastadrijuhum", root: "د ر ج", meaning: { en: "We will progressively lead them", ur: "ہم انہیں آہستہ آہستہ پکڑیں گے", ar: "سنستدرجهم" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "future", form: "X" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حَيْثُ", transliteration: "ḥaythu", meaning: { en: "where", ur: "جہاں سے", ar: "حيث" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūn", root: "ع ل م", meaning: { en: "they know", ur: "وہ جانتے", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ],
    structure: {
      relationships: [
      { from: 9, to: 10, label: 'نفی + فعل' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "وَأُمْلِي لَهُمْ ۚ إِنَّ كَيْدِي مَتِينٌ",
    words: [
      { arabic: "وَأُمْلِي", transliteration: "wa-umlī", root: "م ل و", meaning: { en: "And I will give them respite", ur: "اور میں انہیں مہلت دوں گا", ar: "وأملي" }, pos: "V", posLabel: "V", grammar: { person: 1, gender: "m", number: "sg", mood: "indicative", form: "IV" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "انہیں", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "كَيْدِي", transliteration: "kaydī", root: "ك ي د", meaning: { en: "My plan", ur: "میری تدبیر", ar: "كيدي" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "مَتِينٌ", transliteration: "matīn", root: "م ت ن", meaning: { en: "is firm", ur: "مضبوط ہے", ar: "متين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "أَمْ تَسْأَلُهُمْ أَجْرًا فَهُم مِّن مَّغْرَمٍ مُّثْقَلُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "تَسْأَلُهُمْ", transliteration: "tasʾaluhum", root: "س أ ل", meaning: { en: "do you ask them", ur: "کیا تو ان سے مانگتا ہے", ar: "تسألهم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "أَجْرًا", transliteration: "ajran", root: "أ ج ر", meaning: { en: "a payment", ur: "اجرت", ar: "أجراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", indefinite: true } },
      { arabic: "فَهُم", transliteration: "fa-hum", meaning: { en: "so they", ur: "تو وہ", ar: "فهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّغْرَمٍ", transliteration: "maghram", root: "غ ر م", meaning: { en: "debt", ur: "قرض کے", ar: "مغرم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "مُّثْقَلُونَ", transliteration: "muthqalūn", root: "ث ق ل", meaning: { en: "are burdened", ur: "بوجھ میں ہیں", ar: "مثقلون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "passive", form: "IV" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "أَمْ عِندَهُمُ الْغَيْبُ فَهُمْ يَكْتُبُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "عِندَهُمُ", transliteration: "ʿindahumu", meaning: { en: "with them is", ur: "ان کے پاس ہے", ar: "عندهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "الْغَيْبُ", transliteration: "al-ghayb", root: "غ ي ب", meaning: { en: "the unseen", ur: "غیب", ar: "الغيب" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "فَهُمْ", transliteration: "fa-hum", meaning: { en: "so they", ur: "تو وہ", ar: "فهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "يَكْتُبُونَ", transliteration: "yaktubūn", root: "ك ت ب", meaning: { en: "write", ur: "لکھتے ہیں", ar: "يكتبون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'عطف' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تَكُن كَصَاحِبِ الْحُوتِ إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ",
    words: [
      { arabic: "فَاصْبِرْ", transliteration: "fa-ṣbir", root: "ص ب ر", meaning: { en: "So be patient", ur: "پس صبر کر", ar: "فاصبر" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "لِحُكْمِ", transliteration: "li-ḥukmi", root: "ح ك م", meaning: { en: "for the decision", ur: "حکم کے لیے", ar: "لحكم" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "of your Lord", ur: "اپنے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "prohibition" } },
      { arabic: "تَكُن", transliteration: "takun", root: "ك و ن", meaning: { en: "be", ur: "ہو", ar: "تكن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "jussive" } },
      { arabic: "كَصَاحِبِ", transliteration: "ka-ṣāḥibi", root: "ص ح ب", meaning: { en: "like the companion", ur: "والے کی طرح", ar: "كصاحب" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "genitive" } },
      { arabic: "الْحُوتِ", transliteration: "al-ḥūt", root: "ح و ت", meaning: { en: "of the fish", ur: "مچھلی کے", ar: "الحوت" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "ADV", posLabel: "ADV", grammar: { role: "temporal" } },
      { arabic: "نَادَىٰ", transliteration: "nādā", root: "ن د و", meaning: { en: "he called out", ur: "اس نے پکارا", ar: "نادى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "III" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "while he", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "مَكْظُومٌ", transliteration: "makẓūm", root: "ك ظ م", meaning: { en: "was distressed", ur: "غم سے بھرا ہوا تھا", ar: "مكظوم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "passive" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "لَّوْلَا أَن تَدَارَكَهُ نِعْمَةٌ مِّن رَّبِّهِ لَنُبِذَ بِالْعَرَاءِ وَهُوَ مَذْمُومٌ",
    words: [
      { arabic: "لَّوْلَا", transliteration: "lawlā", meaning: { en: "Had not", ur: "اگر نہ ہوتی", ar: "لولا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "تَدَارَكَهُ", transliteration: "tadārakahu", root: "د ر ك", meaning: { en: "overtook him", ur: "اس کو پالی", ar: "تداركه" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "VI" } },
      { arabic: "نِعْمَةٌ", transliteration: "niʿmah", root: "ن ع م", meaning: { en: "a favor", ur: "نعمت", ar: "نعمة" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", indefinite: true } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّهِ", transliteration: "rabbihi", root: "ر ب ب", meaning: { en: "his Lord", ur: "اس کے رب", ar: "ربه" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "لَنُبِذَ", transliteration: "la-nubidha", root: "ن ب ذ", meaning: { en: "he would have been cast", ur: "ضرور پھینک دیا جاتا", ar: "لنبذ" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", voice: "passive", form: "I" } },
      { arabic: "بِالْعَرَاءِ", transliteration: "bil-ʿarāʾ", root: "ع ر و", meaning: { en: "on the shore", ur: "کھلے میدان میں", ar: "بالعراء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "while he", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "مَذْمُومٌ", transliteration: "madhmūm", root: "ذ م م", meaning: { en: "was blamed", ur: "ملامت کیا ہوا ہوتا", ar: "مذموم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "passive" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + فاعل' },
      { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  50: {
    ayahNumber: 50,
    text: "فَاجْتَبَاهُ رَبُّهُ فَجَعَلَهُ مِنَ الصَّالِحِينَ",
    words: [
      { arabic: "فَاجْتَبَاهُ", transliteration: "fa-jtabāhu", root: "ج ب ي", meaning: { en: "So chose him", ur: "تو اسے چن لیا", ar: "فاجتباه" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "VIII" } },
      { arabic: "رَبُّهُ", transliteration: "rabbuhu", root: "ر ب ب", meaning: { en: "his Lord", ur: "اس کے رب نے", ar: "ربه" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "فَجَعَلَهُ", transliteration: "fa-jaʿalahu", root: "ج ع ل", meaning: { en: "and made him", ur: "اور بنا دیا اسے", ar: "فجعله" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الصَّالِحِينَ", transliteration: "aṣ-ṣāliḥīn", root: "ص ل ح", meaning: { en: "the righteous", ur: "نیک لوگوں میں", ar: "الصالحين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true }, features: { participle: "active" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'جار + مجرور' }
      ]
    }
  },

  51: {
    ayahNumber: 51,
    text: "وَإِن يَكَادُ الَّذِينَ كَفَرُوا لَيُزْلِقُونَكَ بِأَبْصَارِهِمْ لَمَّا سَمِعُوا الذِّكْرَ وَيَقُولُونَ إِنَّهُ لَمَجْنُونٌ",
    words: [
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And indeed", ur: "اور بے شک", ar: "وإن" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { role: "emphasis" } },
      { arabic: "يَكَادُ", transliteration: "yakādu", root: "ك و د", meaning: { en: "almost", ur: "قریب ہے", ar: "يكاد" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "لَيُزْلِقُونَكَ", transliteration: "la-yuzliqūnaka", root: "ز ل ق", meaning: { en: "would make you slip", ur: "تجھے پھسلا دیں", ar: "ليزلقونك" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "IV" } },
      { arabic: "بِأَبْصَارِهِمْ", transliteration: "bi-abṣārihim", root: "ب ص ر", meaning: { en: "with their eyes", ur: "اپنی آنکھوں سے", ar: "بأبصارهم" }, pos: "N", posLabel: "N", grammar: { role: "instrument", case: "genitive" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "جب", ar: "لما" }, pos: "ADV", posLabel: "ADV", grammar: { role: "temporal" } },
      { arabic: "سَمِعُوا", transliteration: "samiʿū", root: "س م ع", meaning: { en: "they hear", ur: "وہ سنتے ہیں", ar: "سمعوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "الذِّكْرَ", transliteration: "adh-dhikra", root: "ذ ك ر", meaning: { en: "the Reminder", ur: "ذکر", ar: "الذكر" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَيَقُولُونَ", transliteration: "wa-yaqūlūn", root: "ق و ل", meaning: { en: "and they say", ur: "اور وہ کہتے ہیں", ar: "ويقولون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "indeed he", ur: "بے شک وہ", ar: "إنه" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "لَمَجْنُونٌ", transliteration: "la-majnūn", root: "ج ن ن", meaning: { en: "is surely mad", ur: "یقیناً دیوانہ ہے", ar: "لمجنون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "passive" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 8, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  52: {
    ayahNumber: 52,
    text: "وَمَا هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ",
    words: [
      { arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "negation" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it is", ur: "یہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { role: "exception" } },
      { arabic: "ذِكْرٌ", transliteration: "dhikr", root: "ذ ك ر", meaning: { en: "a reminder", ur: "نصیحت", ar: "ذكر" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", indefinite: true } },
      { arabic: "لِّلْعَالَمِينَ", transliteration: "lil-ʿālamīn", root: "ع ل م", meaning: { en: "to the worlds", ur: "تمام جہانوں کے لیے", ar: "للعالمين" }, pos: "N", posLabel: "N", grammar: { role: "beneficiary", case: "genitive", definite: true } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  }
};

export default TREEBANK_DATA;
