/**
 * Surah Al-Jinn (72) - Quranic Arabic Treebank
 * The Jinn
 * 28 Ayahs - Makki
 * Theme: Jinn hearing Quran, monotheism, prophethood, unseen knowledge
 */

export const TREEBANK_DATA = {
  surahId: 72,
  surahName: "Al-Jinn",
  surahNameArabic: "الجن",
  totalAyahs: 28,

  1: {
    ayahNumber: 1,
    text: "قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِّنَ الْجِنِّ فَقَالُوا إِنَّا سَمِعْنَا قُرْآنًا عَجَبًا",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative", person: "2nd", number: "singular" } },
      { arabic: "أُوحِيَ", transliteration: "ūḥiya", root: "و ح ي", meaning: { en: "It was revealed", ur: "وحی کی گئی", ar: "أوحي" }, pos: "V", posLabel: "V", grammar: { role: "passive", person: "3rd", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "إِلَيَّ", transliteration: "ilayya", root: null, meaning: { en: "to me", ur: "میری طرف", ar: "إلي" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَنَّهُ", transliteration: "annahu", root: null, meaning: { en: "that", ur: "کہ", ar: "أنه" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "اسْتَمَعَ", transliteration: "istamaʿa", root: "س م ع", meaning: { en: "listened", ur: "سنا", ar: "استمع" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "VIII" } },
      { arabic: "نَفَرٌ", transliteration: "nafarun", root: "ن ف ر", meaning: { en: "a group", ur: "ایک جماعت", ar: "نفر" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "of", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْجِنِّ", transliteration: "al-jinni", root: "ج ن ن", meaning: { en: "the jinn", ur: "جنوں", ar: "الجن" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "فَقَالُوا", transliteration: "fa-qālū", root: "ق و ل", meaning: { en: "and they said", ur: "تو انہوں نے کہا", ar: "فقالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect", number: "plural" } },
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "Indeed we", ur: "بیشک ہم نے", ar: "إنا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "سَمِعْنَا", transliteration: "samiʿnā", root: "س م ع", meaning: { en: "heard", ur: "سنا", ar: "سمعنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect", person: "1st", number: "plural" } },
      { arabic: "قُرْآنًا", transliteration: "qurʾānan", root: "ق ر أ", meaning: { en: "a Quran", ur: "قرآن", ar: "قرآناً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "عَجَبًا", transliteration: "ʿajaban", root: "ع ج ب", meaning: { en: "amazing", ur: "عجیب", ar: "عجباً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 5, to: 6, label: 'فعل + فاعل' },
      { from: 11, to: 12, label: 'فعل + مفعول به' },
      { from: 12, to: 13, label: 'موصوف + صفت' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "يَهْدِي إِلَى الرُّشْدِ فَآمَنَّا بِهِ ۖ وَلَن نُّشْرِكَ بِرَبِّنَا أَحَدًا",
    words: [
      { arabic: "يَهْدِي", transliteration: "yahdī", root: "ه د ي", meaning: { en: "It guides", ur: "رہنمائی کرتا ہے", ar: "يهدي" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "إِلَى", transliteration: "ilā", root: null, meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الرُّشْدِ", transliteration: "al-rushdi", root: "ر ش د", meaning: { en: "the right way", ur: "ہدایت", ar: "الرشد" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "فَآمَنَّا", transliteration: "fa-āmannā", root: "أ م ن", meaning: { en: "so we believed", ur: "تو ہم ایمان لائے", ar: "فآمنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "بِهِ", transliteration: "bihi", root: null, meaning: { en: "in it", ur: "اس پر", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَلَن", transliteration: "wa-lan", root: null, meaning: { en: "and never", ur: "اور ہرگز نہیں", ar: "ولن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic negation" } },
      { arabic: "نُّشْرِكَ", transliteration: "nushrika", root: "ش ر ك", meaning: { en: "will we associate", ur: "ہم شریک ٹھہرائیں گے", ar: "نشرك" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" }, features: { form: "IV" } },
      { arabic: "بِرَبِّنَا", transliteration: "bi-rabbinā", root: "ر ب ب", meaning: { en: "with our Lord", ur: "اپنے رب کے ساتھ", ar: "بربنا" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "أَحَدًا", transliteration: "aḥadan", root: "أ ح د", meaning: { en: "anyone", ur: "کسی کو", ar: "أحداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'نفی + فعل' },
      { from: 7, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "وَأَنَّهُ تَعَالَىٰ جَدُّ رَبِّنَا مَا اتَّخَذَ صَاحِبَةً وَلَا وَلَدًا",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", root: null, meaning: { en: "And that", ur: "اور بیشک", ar: "وأنه" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "تَعَالَىٰ", transliteration: "taʿālā", root: "ع ل و", meaning: { en: "exalted is", ur: "بلند ہے", ar: "تعالى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "VI" } },
      { arabic: "جَدُّ", transliteration: "jaddu", root: "ج د د", meaning: { en: "the majesty", ur: "بڑائی", ar: "جد" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "رَبِّنَا", transliteration: "rabbinā", root: "ر ب ب", meaning: { en: "of our Lord", ur: "ہمارے رب کی", ar: "ربنا" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "اتَّخَذَ", transliteration: "ittakhadha", root: "أ خ ذ", meaning: { en: "has He taken", ur: "اس نے بنایا", ar: "اتخذ" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "VIII" } },
      { arabic: "صَاحِبَةً", transliteration: "ṣāḥibatan", root: "ص ح ب", meaning: { en: "a companion/wife", ur: "بیوی", ar: "صاحبة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "nor", ur: "نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "وَلَدًا", transliteration: "waladan", root: "و ل د", meaning: { en: "a child", ur: "اولاد", ar: "ولداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "وَأَنَّهُ كَانَ يَقُولُ سَفِيهُنَا عَلَى اللَّهِ شَطَطًا",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", root: null, meaning: { en: "And that", ur: "اور بیشک", ar: "وأنه" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "used to", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "يَقُولُ", transliteration: "yaqūlu", root: "ق و ل", meaning: { en: "say", ur: "کہتا", ar: "يقول" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "سَفِيهُنَا", transliteration: "safīhunā", root: "س ف ه", meaning: { en: "our foolish one", ur: "ہمارا بے وقوف", ar: "سفيهنا" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "about", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "شَطَطًا", transliteration: "shaṭaṭan", root: "ش ط ط", meaning: { en: "an excessive lie", ur: "حد سے بڑھی ہوئی بات", ar: "شططاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + فاعل' },
      { from: 3, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَأَنَّا ظَنَنَّا أَن لَّن تَقُولَ الْإِنسُ وَالْجِنُّ عَلَى اللَّهِ كَذِبًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And we thought", ur: "اور ہم نے گمان کیا", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "ظَنَنَّا", transliteration: "ẓanannā", root: "ظ ن ن", meaning: { en: "we thought", ur: "ہم نے سمجھا", ar: "ظننا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "لَّن", transliteration: "lan", root: null, meaning: { en: "never", ur: "ہرگز نہیں", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic negation" } },
      { arabic: "تَقُولَ", transliteration: "taqūla", root: "ق و ل", meaning: { en: "would say", ur: "کہیں گے", ar: "تقول" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "الْإِنسُ", transliteration: "al-insu", root: "أ ن س", meaning: { en: "mankind", ur: "انسان", ar: "الإنس" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "وَالْجِنُّ", transliteration: "wa-al-jinnu", root: "ج ن ن", meaning: { en: "and jinn", ur: "اور جن", ar: "والجن" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "about", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "كَذِبًا", transliteration: "kadhiban", root: "ك ذ ب", meaning: { en: "a lie", ur: "جھوٹ", ar: "كذباً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 5, to: 6, label: 'فعل + فاعل' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَأَنَّهُ كَانَ رِجَالٌ مِّنَ الْإِنسِ يَعُوذُونَ بِرِجَالٍ مِّنَ الْجِنِّ فَزَادُوهُمْ رَهَقًا",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", root: null, meaning: { en: "And that", ur: "اور بیشک", ar: "وأنه" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "there were", ur: "تھے", ar: "كان" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "رِجَالٌ", transliteration: "rijālun", root: "ر ج ل", meaning: { en: "men", ur: "مرد", ar: "رجال" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْإِنسِ", transliteration: "al-insi", root: "أ ن س", meaning: { en: "mankind", ur: "انسانوں", ar: "الإنس" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "يَعُوذُونَ", transliteration: "yaʿūdhūna", root: "ع و ذ", meaning: { en: "seek refuge", ur: "پناہ لیتے تھے", ar: "يعوذون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "بِرِجَالٍ", transliteration: "bi-rijālin", root: "ر ج ل", meaning: { en: "with men", ur: "مردوں کی", ar: "برجال" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْجِنِّ", transliteration: "al-jinni", root: "ج ن ن", meaning: { en: "the jinn", ur: "جنوں", ar: "الجن" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "فَزَادُوهُمْ", transliteration: "fa-zādūhum", root: "ز ي د", meaning: { en: "so they increased them", ur: "تو انہوں نے ان کو بڑھایا", ar: "فزادوهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "رَهَقًا", transliteration: "rahaqan", root: "ر ه ق", meaning: { en: "in burden/fear", ur: "سرکشی میں", ar: "رهقاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 10, to: 11, label: 'فعل + مفعول به' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَأَنَّهُمْ ظَنُّوا كَمَا ظَنَنتُمْ أَن لَّن يَبْعَثَ اللَّهُ أَحَدًا",
    words: [
      { arabic: "وَأَنَّهُمْ", transliteration: "wa-annahum", root: null, meaning: { en: "And that they", ur: "اور بیشک انہوں نے", ar: "وأنهم" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "ظَنُّوا", transliteration: "ẓannū", root: "ظ ن ن", meaning: { en: "thought", ur: "گمان کیا", ar: "ظنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "كَمَا", transliteration: "kamā", root: null, meaning: { en: "as", ur: "جیسے", ar: "كما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "comparison" } },
      { arabic: "ظَنَنتُمْ", transliteration: "ẓanantum", root: "ظ ن ن", meaning: { en: "you thought", ur: "تم نے گمان کیا", ar: "ظننتم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "لَّن", transliteration: "lan", root: null, meaning: { en: "never", ur: "ہرگز نہیں", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic negation" } },
      { arabic: "يَبْعَثَ", transliteration: "yabʿatha", root: "ب ع ث", meaning: { en: "would raise", ur: "اٹھائے گا", ar: "يبعث" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "أَحَدًا", transliteration: "aḥadan", root: "أ ح د", meaning: { en: "anyone", ur: "کسی کو", ar: "أحداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'نفی + فعل' },
      { from: 7, to: 8, label: 'فعل + فاعل' },
      { from: 7, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "وَأَنَّا لَمَسْنَا السَّمَاءَ فَوَجَدْنَاهَا مُلِئَتْ حَرَسًا شَدِيدًا وَشُهُبًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And that we", ur: "اور بیشک ہم نے", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "لَمَسْنَا", transliteration: "lamasnā", root: "ل م س", meaning: { en: "touched/sought", ur: "چھوا/ڈھونڈا", ar: "لمسنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "السَّمَاءَ", transliteration: "al-samāʾa", root: "س م و", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "فَوَجَدْنَاهَا", transliteration: "fa-wajadnāhā", root: "و ج د", meaning: { en: "and found it", ur: "تو ہم نے پایا", ar: "فوجدناها" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مُلِئَتْ", transliteration: "muliʾat", root: "م ل أ", meaning: { en: "filled", ur: "بھری ہوئی", ar: "ملئت" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" } },
      { arabic: "حَرَسًا", transliteration: "ḥarasan", root: "ح ر س", meaning: { en: "with guards", ur: "محافظوں سے", ar: "حرساً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "شَدِيدًا", transliteration: "shadīdan", root: "ش د د", meaning: { en: "severe", ur: "سخت", ar: "شديداً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَشُهُبًا", transliteration: "wa-shuhuban", root: "ش ه ب", meaning: { en: "and burning flames", ur: "اور شعلے", ar: "وشهباً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 6, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "وَأَنَّا كُنَّا نَقْعُدُ مِنْهَا مَقَاعِدَ لِلسَّمْعِ ۖ فَمَن يَسْتَمِعِ الْآنَ يَجِدْ لَهُ شِهَابًا رَّصَدًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And that we", ur: "اور بیشک ہم", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "كُنَّا", transliteration: "kunnā", root: "ك و ن", meaning: { en: "used to", ur: "ہوتے تھے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "نَقْعُدُ", transliteration: "naqʿudu", root: "ق ع د", meaning: { en: "sit", ur: "بیٹھتے تھے", ar: "نقعد" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "مِنْهَا", transliteration: "minhā", root: null, meaning: { en: "in it", ur: "اس میں", ar: "منها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مَقَاعِدَ", transliteration: "maqāʿida", root: "ق ع د", meaning: { en: "seats", ur: "بیٹھکیں", ar: "مقاعد" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "لِلسَّمْعِ", transliteration: "li-al-samʿi", root: "س م ع", meaning: { en: "for listening", ur: "سننے کے لیے", ar: "للسمع" }, pos: "N", posLabel: "N", grammar: { role: "purpose" } },
      { arabic: "فَمَن", transliteration: "fa-man", root: null, meaning: { en: "so whoever", ur: "پس جو", ar: "فمن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "يَسْتَمِعِ", transliteration: "yastamiʿi", root: "س م ع", meaning: { en: "listens", ur: "سنے", ar: "يستمع" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "VIII" } },
      { arabic: "الْآنَ", transliteration: "al-āna", root: null, meaning: { en: "now", ur: "اب", ar: "الآن" }, pos: "ADV", posLabel: "ADV", grammar: { role: "adverb" } },
      { arabic: "يَجِدْ", transliteration: "yajid", root: "و ج د", meaning: { en: "finds", ur: "پاتا ہے", ar: "يجد" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "لَهُ", transliteration: "lahu", root: null, meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "شِهَابًا", transliteration: "shihāban", root: "ش ه ب", meaning: { en: "a flame", ur: "انگارہ", ar: "شهاباً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "رَّصَدًا", transliteration: "raṣadan", root: "ر ص د", meaning: { en: "lying in wait", ur: "گھات میں", ar: "رصداً" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'فعل + مفعول به' },
      { from: 3, to: 5, label: 'فعل + مفعول به' },
      { from: 10, to: 12, label: 'فعل + مفعول به' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَأَنَّا لَا نَدْرِي أَشَرٌّ أُرِيدَ بِمَن فِي الْأَرْضِ أَمْ أَرَادَ بِهِمْ رَبُّهُمْ رَشَدًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And we", ur: "اور ہم", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "نَدْرِي", transliteration: "nadrī", root: "د ر ي", meaning: { en: "know", ur: "جانتے", ar: "ندري" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "أَشَرٌّ", transliteration: "a-sharrun", root: "ش ر ر", meaning: { en: "whether evil", ur: "کیا برائی", ar: "أشر" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "أُرِيدَ", transliteration: "urīda", root: "ر و د", meaning: { en: "is intended", ur: "چاہا گیا ہے", ar: "أريد" }, pos: "V", posLabel: "V", grammar: { role: "passive" }, features: { form: "IV" } },
      { arabic: "بِمَن", transliteration: "bi-man", root: null, meaning: { en: "for those who", ur: "ان کے لیے جو", ar: "بمن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "on", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "أَمْ", transliteration: "am", root: null, meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunctive" } },
      { arabic: "أَرَادَ", transliteration: "arāda", root: "ر و د", meaning: { en: "intends", ur: "ارادہ کیا", ar: "أراد" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "بِهِمْ", transliteration: "bihim", root: null, meaning: { en: "for them", ur: "ان کے ساتھ", ar: "بهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "رَبُّهُمْ", transliteration: "rabbuhum", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "رَشَدًا", transliteration: "rashadan", root: "ر ش د", meaning: { en: "guidance", ur: "ہدایت", ar: "رشداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'فعل + فاعل' },
      { from: 10, to: 13, label: 'فعل + مفعول به' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "وَأَنَّا مِنَّا الصَّالِحُونَ وَمِنَّا دُونَ ذَٰلِكَ ۖ كُنَّا طَرَائِقَ قِدَدًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And among us", ur: "اور ہم میں سے", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "مِنَّا", transliteration: "minnā", root: null, meaning: { en: "among us are", ur: "ہم میں", ar: "منا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "الصَّالِحُونَ", transliteration: "al-ṣāliḥūna", root: "ص ل ح", meaning: { en: "the righteous", ur: "نیک لوگ", ar: "الصالحون" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "وَمِنَّا", transliteration: "wa-minnā", root: null, meaning: { en: "and among us", ur: "اور ہم میں", ar: "ومنا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "دُونَ", transliteration: "dūna", root: null, meaning: { en: "other than", ur: "اس کے سوا", ar: "دون" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "that", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "كُنَّا", transliteration: "kunnā", root: "ك و ن", meaning: { en: "we were", ur: "ہم تھے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "طَرَائِقَ", transliteration: "ṭarāʾiqa", root: "ط ر ق", meaning: { en: "paths/sects", ur: "راستے", ar: "طرائق" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "accusative" } },
      { arabic: "قِدَدًا", transliteration: "qidadan", root: "ق د د", meaning: { en: "different", ur: "مختلف", ar: "قدداً" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 8, label: 'مبتدأ + خبر' },
      { from: 6, to: 8, label: 'مبتدأ + خبر' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "وَأَنَّا ظَنَنَّا أَن لَّن نُّعْجِزَ اللَّهَ فِي الْأَرْضِ وَلَن نُّعْجِزَهُ هَرَبًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And we knew", ur: "اور ہم نے جانا", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "ظَنَنَّا", transliteration: "ẓanannā", root: "ظ ن ن", meaning: { en: "knew", ur: "سمجھا", ar: "ظننا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "لَّن", transliteration: "lan", root: null, meaning: { en: "never", ur: "ہرگز نہیں", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic negation" } },
      { arabic: "نُّعْجِزَ", transliteration: "nuʿjiza", root: "ع ج ز", meaning: { en: "escape", ur: "عاجز کر سکیں گے", ar: "نعجز" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" }, features: { form: "IV" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کو", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "وَلَن", transliteration: "wa-lan", root: null, meaning: { en: "and never", ur: "اور نہ", ar: "ولن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic negation" } },
      { arabic: "نُّعْجِزَهُ", transliteration: "nuʿjizahu", root: "ع ج ز", meaning: { en: "escape Him", ur: "اس کو عاجز کریں", ar: "نعجزه" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" }, features: { form: "IV" } },
      { arabic: "هَرَبًا", transliteration: "haraban", root: "ه ر ب", meaning: { en: "by fleeing", ur: "بھاگ کر", ar: "هرباً" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 5, to: 6, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'نفی + فعل' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَأَنَّا لَمَّا سَمِعْنَا الْهُدَىٰ آمَنَّا بِهِ ۖ فَمَن يُؤْمِن بِرَبِّهِ فَلَا يَخَافُ بَخْسًا وَلَا رَهَقًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And when we", ur: "اور جب ہم نے", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "لَمَّا", transliteration: "lammā", root: null, meaning: { en: "when", ur: "جب", ar: "لما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "temporal" } },
      { arabic: "سَمِعْنَا", transliteration: "samiʿnā", root: "س م ع", meaning: { en: "we heard", ur: "ہم نے سنا", ar: "سمعنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الْهُدَىٰ", transliteration: "al-hudā", root: "ه د ي", meaning: { en: "the guidance", ur: "ہدایت", ar: "الهدى" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "آمَنَّا", transliteration: "āmannā", root: "أ م ن", meaning: { en: "we believed", ur: "ہم ایمان لائے", ar: "آمنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "بِهِ", transliteration: "bihi", root: null, meaning: { en: "in it", ur: "اس پر", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فَمَن", transliteration: "fa-man", root: null, meaning: { en: "so whoever", ur: "پس جو", ar: "فمن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "يُؤْمِن", transliteration: "yuʾmin", root: "أ م ن", meaning: { en: "believes", ur: "ایمان لائے", ar: "يؤمن" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "IV" } },
      { arabic: "بِرَبِّهِ", transliteration: "bi-rabbihi", root: "ر ب ب", meaning: { en: "in his Lord", ur: "اپنے رب پر", ar: "بربه" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "فَلَا", transliteration: "fa-lā", root: null, meaning: { en: "then no", ur: "تو نہ", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَخَافُ", transliteration: "yakhāfu", root: "خ و ف", meaning: { en: "fears", ur: "ڈرے", ar: "يخاف" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "بَخْسًا", transliteration: "bakhsan", root: "ب خ س", meaning: { en: "loss", ur: "کمی", ar: "بخساً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "nor", ur: "نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "رَهَقًا", transliteration: "rahaqan", root: "ر ه ق", meaning: { en: "burden", ur: "ظلم", ar: "رهقاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 10, to: 11, label: 'نفی + فعل' },
      { from: 11, to: 12, label: 'فعل + مفعول به' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "وَأَنَّا مِنَّا الْمُسْلِمُونَ وَمِنَّا الْقَاسِطُونَ ۖ فَمَنْ أَسْلَمَ فَأُولَـٰئِكَ تَحَرَّوْا رَشَدًا",
    words: [
      { arabic: "وَأَنَّا", transliteration: "wa-annā", root: null, meaning: { en: "And among us", ur: "اور ہم میں", ar: "وأنا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "مِنَّا", transliteration: "minnā", root: null, meaning: { en: "among us", ur: "ہم میں سے", ar: "منا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "الْمُسْلِمُونَ", transliteration: "al-muslimūna", root: "س ل م", meaning: { en: "Muslims", ur: "مسلمان", ar: "المسلمون" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true }, features: { form: "IV participle" } },
      { arabic: "وَمِنَّا", transliteration: "wa-minnā", root: null, meaning: { en: "and among us", ur: "اور ہم میں", ar: "ومنا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "الْقَاسِطُونَ", transliteration: "al-qāsiṭūna", root: "ق س ط", meaning: { en: "the unjust", ur: "ظالم", ar: "القاسطون" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "فَمَنْ", transliteration: "fa-man", root: null, meaning: { en: "so whoever", ur: "پس جو", ar: "فمن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "أَسْلَمَ", transliteration: "aslama", root: "س ل م", meaning: { en: "submits", ur: "اسلام لایا", ar: "أسلم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "فَأُولَـٰئِكَ", transliteration: "fa-ulāʾika", root: null, meaning: { en: "then those", ur: "تو وہ لوگ", ar: "فأولئك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "تَحَرَّوْا", transliteration: "taḥarraw", root: "ح ر ي", meaning: { en: "have sought", ur: "انہوں نے تلاش کی", ar: "تحروا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "V" } },
      { arabic: "رَشَدًا", transliteration: "rashadan", root: "ر ش د", meaning: { en: "right course", ur: "ہدایت", ar: "رشداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 9, to: 10, label: 'فعل + مفعول به' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "وَأَمَّا الْقَاسِطُونَ فَكَانُوا لِجَهَنَّمَ حَطَبًا",
    words: [
      { arabic: "وَأَمَّا", transliteration: "wa-ammā", root: null, meaning: { en: "But as for", ur: "اور رہے", ar: "وأما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conditional" } },
      { arabic: "الْقَاسِطُونَ", transliteration: "al-qāsiṭūna", root: "ق س ط", meaning: { en: "the unjust", ur: "ظالم", ar: "القاسطون" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "فَكَانُوا", transliteration: "fa-kānū", root: "ك و ن", meaning: { en: "they will be", ur: "وہ ہوں گے", ar: "فكانوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "لِجَهَنَّمَ", transliteration: "li-jahannama", root: null, meaning: { en: "for Hell", ur: "جہنم کے لیے", ar: "لجهنم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "حَطَبًا", transliteration: "ḥaṭaban", root: "ح ط ب", meaning: { en: "firewood", ur: "ایندھن", ar: "حطباً" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "وَأَن لَّوِ اسْتَقَامُوا عَلَى الطَّرِيقَةِ لَأَسْقَيْنَاهُم مَّاءً غَدَقًا",
    words: [
      { arabic: "وَأَن", transliteration: "wa-an", root: null, meaning: { en: "And if", ur: "اور اگر", ar: "وأن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conditional" } },
      { arabic: "لَّوِ", transliteration: "law-i", root: null, meaning: { en: "had", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "اسْتَقَامُوا", transliteration: "istaqāmū", root: "ق و م", meaning: { en: "remained straight", ur: "سیدھے رہتے", ar: "استقاموا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "X" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الطَّرِيقَةِ", transliteration: "al-ṭarīqati", root: "ط ر ق", meaning: { en: "the path", ur: "راستے", ar: "الطريقة" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "لَأَسْقَيْنَاهُم", transliteration: "la-asqaynāhum", root: "س ق ي", meaning: { en: "We would have given them drink", ur: "ہم انہیں پلاتے", ar: "لأسقيناهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "مَّاءً", transliteration: "māʾan", root: "م و ه", meaning: { en: "water", ur: "پانی", ar: "ماء" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "غَدَقًا", transliteration: "ghadaqan", root: "غ د ق", meaning: { en: "abundant", ur: "بہت زیادہ", ar: "غدقاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "لِّنَفْتِنَهُمْ فِيهِ ۚ وَمَن يُعْرِضْ عَن ذِكْرِ رَبِّهِ يَسْلُكْهُ عَذَابًا صَعَدًا",
    words: [
      { arabic: "لِّنَفْتِنَهُمْ", transliteration: "li-naftinahum", root: "ف ت ن", meaning: { en: "to test them", ur: "تاکہ ہم انہیں آزمائیں", ar: "لنفتنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "فِيهِ", transliteration: "fīhi", root: null, meaning: { en: "thereby", ur: "اس میں", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَمَن", transliteration: "wa-man", root: null, meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "يُعْرِضْ", transliteration: "yuʿriḍ", root: "ع ر ض", meaning: { en: "turns away", ur: "منہ پھیرے", ar: "يعرض" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "IV" } },
      { arabic: "عَن", transliteration: "ʿan", root: null, meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذِكْرِ", transliteration: "dhikri", root: "ذ ك ر", meaning: { en: "remembrance", ur: "یاد", ar: "ذكر" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "رَبِّهِ", transliteration: "rabbihi", root: "ر ب ب", meaning: { en: "of his Lord", ur: "اپنے رب کی", ar: "ربه" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "يَسْلُكْهُ", transliteration: "yaslukhu", root: "س ل ك", meaning: { en: "He will make him enter", ur: "اسے داخل کرے گا", ar: "يسلكه" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "عَذَابًا", transliteration: "ʿadhāban", root: "ع ذ ب", meaning: { en: "a punishment", ur: "عذاب", ar: "عذاباً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "صَعَدًا", transliteration: "ṣaʿadan", root: "ص ع د", meaning: { en: "ever-increasing", ur: "سخت", ar: "صعداً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 8, to: 9, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا",
    words: [
      { arabic: "وَأَنَّ", transliteration: "wa-anna", root: null, meaning: { en: "And that", ur: "اور بیشک", ar: "وأن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "الْمَسَاجِدَ", transliteration: "al-masājida", root: "س ج د", meaning: { en: "the mosques", ur: "مسجدیں", ar: "المساجد" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "لِلَّهِ", transliteration: "li-Llāhi", root: "أ ل ه", meaning: { en: "are for Allah", ur: "اللہ کے لیے ہیں", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "فَلَا", transliteration: "fa-lā", root: null, meaning: { en: "so do not", ur: "پس نہ", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَدْعُوا", transliteration: "tadʿū", root: "د ع و", meaning: { en: "invoke", ur: "پکارو", ar: "تدعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "مَعَ", transliteration: "maʿa", root: null, meaning: { en: "with", ur: "ساتھ", ar: "مع" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أَحَدًا", transliteration: "aḥadan", root: "أ ح د", meaning: { en: "anyone", ur: "کسی کو", ar: "أحداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 5, to: 8, label: 'فعل + مفعول به' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَأَنَّهُ لَمَّا قَامَ عَبْدُ اللَّهِ يَدْعُوهُ كَادُوا يَكُونُونَ عَلَيْهِ لِبَدًا",
    words: [
      { arabic: "وَأَنَّهُ", transliteration: "wa-annahu", root: null, meaning: { en: "And that", ur: "اور جب", ar: "وأنه" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "لَمَّا", transliteration: "lammā", root: null, meaning: { en: "when", ur: "جب", ar: "لما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "temporal" } },
      { arabic: "قَامَ", transliteration: "qāma", root: "ق و م", meaning: { en: "stood", ur: "کھڑے ہوئے", ar: "قام" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "عَبْدُ", transliteration: "ʿabdu", root: "ع ب د", meaning: { en: "servant", ur: "بندہ", ar: "عبد" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "يَدْعُوهُ", transliteration: "yadʿūhu", root: "د ع و", meaning: { en: "calling upon Him", ur: "اسے پکارتے ہوئے", ar: "يدعوه" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "كَادُوا", transliteration: "kādū", root: "ك و د", meaning: { en: "they almost", ur: "قریب تھا", ar: "كادوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "يَكُونُونَ", transliteration: "yakūnūna", root: "ك و ن", meaning: { en: "became", ur: "ہو جائیں", ar: "يكونون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "upon him", ur: "اس پر", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "لِبَدًا", transliteration: "libadan", root: "ل ب د", meaning: { en: "in crowds", ur: "ٹوٹ پڑیں", ar: "لبداً" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "قُلْ إِنَّمَا أَدْعُو رَبِّي وَلَا أُشْرِكُ بِهِ أَحَدًا",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", root: null, meaning: { en: "I only", ur: "میں صرف", ar: "إنما" }, pos: "PART", posLabel: "PART", grammar: { role: "restriction" } },
      { arabic: "أَدْعُو", transliteration: "adʿū", root: "د ع و", meaning: { en: "invoke", ur: "پکارتا ہوں", ar: "أدعو" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "رَبِّي", transliteration: "rabbī", root: "ر ب ب", meaning: { en: "my Lord", ur: "اپنے رب کو", ar: "ربي" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أُشْرِكُ", transliteration: "ushrik", root: "ش ر ك", meaning: { en: "associate", ur: "شریک ٹھہراتا", ar: "أشرك" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "بِهِ", transliteration: "bihi", root: null, meaning: { en: "with Him", ur: "اس کے ساتھ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَحَدًا", transliteration: "aḥadan", root: "أ ح د", meaning: { en: "anyone", ur: "کسی کو", ar: "أحداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 8, label: 'فعل + مفعول به' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "قُلْ إِنِّي لَا أَمْلِكُ لَكُمْ ضَرًّا وَلَا رَشَدًا",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "Indeed I", ur: "بیشک میں", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أَمْلِكُ", transliteration: "amliku", root: "م ل ك", meaning: { en: "possess", ur: "مالک ہوں", ar: "أملك" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ضَرًّا", transliteration: "ḍarran", root: "ض ر ر", meaning: { en: "harm", ur: "نقصان", ar: "ضراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "nor", ur: "نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "رَشَدًا", transliteration: "rashadan", root: "ر ش د", meaning: { en: "right guidance", ur: "ہدایت", ar: "رشداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 4, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "قُلْ إِنِّي لَن يُجِيرَنِي مِنَ اللَّهِ أَحَدٌ وَلَنْ أَجِدَ مِن دُونِهِ مُلْتَحَدًا",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "Indeed I", ur: "بیشک میں", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَن", transliteration: "lan", root: null, meaning: { en: "never", ur: "ہرگز نہیں", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic negation" } },
      { arabic: "يُجِيرَنِي", transliteration: "yujīranī", root: "ج و ر", meaning: { en: "can protect me", ur: "مجھے پناہ دے سکے", ar: "يجيرني" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" }, features: { form: "IV" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أَحَدٌ", transliteration: "aḥadun", root: "أ ح د", meaning: { en: "anyone", ur: "کوئی", ar: "أحد" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "وَلَنْ", transliteration: "wa-lan", root: null, meaning: { en: "and never", ur: "اور ہرگز نہیں", ar: "ولن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic negation" } },
      { arabic: "أَجِدَ", transliteration: "ajida", root: "و ج د", meaning: { en: "will I find", ur: "پاؤں گا", ar: "أجد" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "besides", ur: "سوا", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِهِ", transliteration: "dūnihi", root: null, meaning: { en: "Him", ur: "اس کے", ar: "دونه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مُلْتَحَدًا", transliteration: "multaḥadan", root: "ل ح د", meaning: { en: "a refuge", ur: "پناہ گاہ", ar: "ملتحداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" }, features: { form: "VIII" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 8, to: 9, label: 'نفی + فعل' },
      { from: 9, to: 12, label: 'فعل + مفعول به' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "إِلَّا بَلَاغًا مِّنَ اللَّهِ وَرِسَالَاتِهِ ۚ وَمَن يَعْصِ اللَّهَ وَرَسُولَهُ فَإِنَّ لَهُ نَارَ جَهَنَّمَ خَالِدِينَ فِيهَا أَبَدًا",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "But only", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "بَلَاغًا", transliteration: "balāghan", root: "ب ل غ", meaning: { en: "notification", ur: "پہنچانا", ar: "بلاغاً" }, pos: "N", posLabel: "N", grammar: { role: "exception", case: "accusative" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَرِسَالَاتِهِ", transliteration: "wa-risālātihi", root: "ر س ل", meaning: { en: "and His messages", ur: "اور اس کے پیغامات", ar: "ورسالاته" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَمَن", transliteration: "wa-man", root: null, meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "يَعْصِ", transliteration: "yaʿṣi", root: "ع ص ي", meaning: { en: "disobeys", ur: "نافرمانی کرے", ar: "يعص" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَرَسُولَهُ", transliteration: "wa-rasūlahu", root: "ر س ل", meaning: { en: "and His Messenger", ur: "اور اس کے رسول کی", ar: "ورسوله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", root: null, meaning: { en: "then indeed", ur: "تو بیشک", ar: "فإن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَهُ", transliteration: "lahu", root: null, meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "نَارَ", transliteration: "nāra", root: "ن و ر", meaning: { en: "Fire", ur: "آگ", ar: "نار" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "accusative" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", root: null, meaning: { en: "of Hell", ur: "جہنم کی", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "خَالِدِينَ", transliteration: "khālidīna", root: "خ ل د", meaning: { en: "dwelling", ur: "رہنے والے", ar: "خالدين" }, pos: "N", posLabel: "N", grammar: { role: "ḥāl", case: "accusative" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَبَدًا", transliteration: "abadan", root: "أ ب د", meaning: { en: "forever", ur: "ہمیشہ", ar: "أبداً" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
      { from: 7, to: 8, label: 'فعل + مفعول به' },
      { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "حَتَّىٰ إِذَا رَأَوْا مَا يُوعَدُونَ فَسَيَعْلَمُونَ مَنْ أَضْعَفُ نَاصِرًا وَأَقَلُّ عَدَدًا",
    words: [
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", root: null, meaning: { en: "Until", ur: "یہاں تک کہ", ar: "حتى" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "temporal" } },
      { arabic: "إِذَا", transliteration: "idhā", root: null, meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "رَأَوْا", transliteration: "raʾaw", root: "ر أ ي", meaning: { en: "they see", ur: "وہ دیکھیں گے", ar: "رأوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُوعَدُونَ", transliteration: "yūʿadūna", root: "و ع د", meaning: { en: "they are promised", ur: "وعدہ کیا جاتا ہے", ar: "يوعدون" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" } },
      { arabic: "فَسَيَعْلَمُونَ", transliteration: "fa-sayaʿlamūna", root: "ع ل م", meaning: { en: "then they will know", ur: "تو جان لیں گے", ar: "فسيعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "future" } },
      { arabic: "مَنْ", transliteration: "man", root: null, meaning: { en: "who is", ur: "کون ہے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "أَضْعَفُ", transliteration: "aḍʿafu", root: "ض ع ف", meaning: { en: "weaker", ur: "کمزور", ar: "أضعف" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { degree: "elative" } },
      { arabic: "نَاصِرًا", transliteration: "nāṣiran", root: "ن ص ر", meaning: { en: "in helpers", ur: "مددگار میں", ar: "ناصراً" }, pos: "N", posLabel: "N", grammar: { role: "specification", case: "accusative" } },
      { arabic: "وَأَقَلُّ", transliteration: "wa-aqallu", root: "ق ل ل", meaning: { en: "and fewer", ur: "اور کم", ar: "وأقل" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { degree: "elative" } },
      { arabic: "عَدَدًا", transliteration: "ʿadadan", root: "ع د د", meaning: { en: "in number", ur: "تعداد میں", ar: "عدداً" }, pos: "N", posLabel: "N", grammar: { role: "specification", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'موصول + صلة' },
      { from: 5, to: 9, label: 'فعل + مفعول به' },
      { from: 6, to: 9, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "قُلْ إِنْ أَدْرِي أَقَرِيبٌ مَّا تُوعَدُونَ أَمْ يَجْعَلُ لَهُ رَبِّي أَمَدًا",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "not", ur: "نہیں", ar: "إن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أَدْرِي", transliteration: "adrī", root: "د ر ي", meaning: { en: "I know", ur: "جانتا", ar: "أدري" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "أَقَرِيبٌ", transliteration: "a-qarībun", root: "ق ر ب", meaning: { en: "whether near is", ur: "کیا قریب ہے", ar: "أقريب" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } },
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", root: "و ع د", meaning: { en: "you are promised", ur: "تم سے وعدہ کیا گیا ہے", ar: "توعدون" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" } },
      { arabic: "أَمْ", transliteration: "am", root: null, meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunctive" } },
      { arabic: "يَجْعَلُ", transliteration: "yajʿalu", root: "ج ع ل", meaning: { en: "will appoint", ur: "مقرر کرے گا", ar: "يجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "لَهُ", transliteration: "lahu", root: null, meaning: { en: "for it", ur: "اس کے لیے", ar: "له" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "رَبِّي", transliteration: "rabbī", root: "ر ب ب", meaning: { en: "my Lord", ur: "میرا رب", ar: "ربي" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "أَمَدًا", transliteration: "amadan", root: "أ م د", meaning: { en: "a distant time", ur: "مدت", ar: "أمداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'نفی + فعل' },
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 8, to: 11, label: 'فعل + مفعول به' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "عَالِمُ الْغَيْبِ فَلَا يُظْهِرُ عَلَىٰ غَيْبِهِ أَحَدًا",
    words: [
      { arabic: "عَالِمُ", transliteration: "ʿālimu", root: "ع ل م", meaning: { en: "Knower", ur: "جاننے والا", ar: "عالم" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "الْغَيْبِ", transliteration: "al-ghaybi", root: "غ ي ب", meaning: { en: "of the unseen", ur: "غیب کا", ar: "الغيب" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "فَلَا", transliteration: "fa-lā", root: null, meaning: { en: "and He does not", ur: "پس نہیں", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُظْهِرُ", transliteration: "yuẓhiru", root: "ظ ه ر", meaning: { en: "reveal", ur: "ظاہر کرتا", ar: "يظهر" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "to", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "غَيْبِهِ", transliteration: "ghaybihi", root: "غ ي ب", meaning: { en: "His unseen", ur: "اپنے غیب", ar: "غيبه" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أَحَدًا", transliteration: "aḥadan", root: "أ ح د", meaning: { en: "anyone", ur: "کسی کو", ar: "أحداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 4, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "إِلَّا مَنِ ارْتَضَىٰ مِن رَّسُولٍ فَإِنَّهُ يَسْلُكُ مِن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ رَصَدًا",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "Except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "مَنِ", transliteration: "man-i", root: null, meaning: { en: "whom", ur: "جسے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "ارْتَضَىٰ", transliteration: "irtaḍā", root: "ر ض ي", meaning: { en: "He approves", ur: "پسند فرمائے", ar: "ارتضى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "VIII" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "of", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّسُولٍ", transliteration: "rasūlin", root: "ر س ل", meaning: { en: "a messenger", ur: "رسول", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "فَإِنَّهُ", transliteration: "fa-innahu", root: null, meaning: { en: "then indeed He", ur: "تو بیشک وہ", ar: "فإنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "يَسْلُكُ", transliteration: "yasluku", root: "س ل ك", meaning: { en: "sends", ur: "بھیجتا ہے", ar: "يسلك" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَيْنِ", transliteration: "bayni", root: null, meaning: { en: "before", ur: "آگے", ar: "بين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَدَيْهِ", transliteration: "yadayhi", root: "ي د ي", meaning: { en: "him", ur: "اس کے", ar: "يديه" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَمِنْ", transliteration: "wa-min", root: null, meaning: { en: "and from", ur: "اور", ar: "ومن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خَلْفِهِ", transliteration: "khalfihi", root: "خ ل ف", meaning: { en: "behind him", ur: "پیچھے", ar: "خلفه" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "رَصَدًا", transliteration: "raṣadan", root: "ر ص د", meaning: { en: "observers", ur: "نگہبان", ar: "رصداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "لِّيَعْلَمَ أَن قَدْ أَبْلَغُوا رِسَالَاتِ رَبِّهِمْ وَأَحَاطَ بِمَا لَدَيْهِمْ وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا",
    words: [
      { arabic: "لِّيَعْلَمَ", transliteration: "li-yaʿlama", root: "ع ل م", meaning: { en: "That He may know", ur: "تاکہ وہ جانے", ar: "ليعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "قَدْ", transliteration: "qad", root: null, meaning: { en: "certainly", ur: "یقیناً", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "أَبْلَغُوا", transliteration: "ablaghū", root: "ب ل غ", meaning: { en: "they conveyed", ur: "انہوں نے پہنچا دیے", ar: "أبلغوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "رِسَالَاتِ", transliteration: "risālāti", root: "ر س ل", meaning: { en: "the messages", ur: "پیغامات", ar: "رسالات" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "of their Lord", ur: "اپنے رب کے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَأَحَاطَ", transliteration: "wa-aḥāṭa", root: "ح و ط", meaning: { en: "and He encompasses", ur: "اور اس نے گھیر لیا", ar: "وأحاط" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "بِمَا", transliteration: "bi-mā", root: null, meaning: { en: "what", ur: "جو کچھ", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "لَدَيْهِمْ", transliteration: "ladayhim", root: null, meaning: { en: "is with them", ur: "ان کے پاس ہے", ar: "لديهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَأَحْصَىٰ", transliteration: "wa-aḥṣā", root: "ح ص ي", meaning: { en: "and has counted", ur: "اور گن لیا", ar: "وأحصى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "كُلَّ", transliteration: "kulla", root: null, meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", root: "ش ي أ", meaning: { en: "thing", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "عَدَدًا", transliteration: "ʿadadan", root: "ع د د", meaning: { en: "in number", ur: "گنتی میں", ar: "عدداً" }, pos: "N", posLabel: "N", grammar: { role: "specification", case: "accusative" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
      { from: 10, to: 11, label: 'فعل + مفعول به' },
      { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ]
    }
  }
};

export default TREEBANK_DATA;
