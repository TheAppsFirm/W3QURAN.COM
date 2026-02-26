/**
 * Surah Nuh (71) - Quranic Arabic Treebank
 * Noah
 * 28 Ayahs - Makki
 * Theme: Prophet Nuh's mission, his people's rejection, the flood
 */

export const TREEBANK_DATA = {
  surahId: 71,
  surahName: "Nuh",
  surahNameArabic: "نوح",
  totalAyahs: 28,

  1: {
    ayahNumber: 1,
    text: "إِنَّا أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ أَنْ أَنذِرْ قَوْمَكَ مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إننا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", root: "ر س ل", meaning: { en: "sent", ur: "بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "نُوحًا", transliteration: "nūḥan", root: null, meaning: { en: "Noah", ur: "نوح کو", ar: "نوحاً" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْمِهِ", transliteration: "qawmihi", root: "ق و م", meaning: { en: "his people", ur: "اپنی قوم", ar: "قومه" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أَنْ", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "أَنذِرْ", transliteration: "andhir", root: "ن ذ ر", meaning: { en: "warn", ur: "ڈراؤ", ar: "أنذر" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "IV" } },
      { arabic: "قَوْمَكَ", transliteration: "qawmaka", root: "ق و م", meaning: { en: "your people", ur: "اپنی قوم کو", ar: "قومك" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "before", ur: "سے پہلے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِ", transliteration: "qabli", root: "ق ب ل", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "يَأْتِيَهُمْ", transliteration: "yaʾtiyahum", root: "أ ت ي", meaning: { en: "comes to them", ur: "ان پر آئے", ar: "يأتيهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", root: "أ ل م", meaning: { en: "painful", ur: "دردناک", ar: "أليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'فعل + مفعول به' },
      { from: 12, to: 13, label: 'فعل + فاعل' },
      { from: 13, to: 14, label: 'موصوف + صفت' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "قَالَ يَا قَوْمِ إِنِّي لَكُمْ نَذِيرٌ مُّبِينٌ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "انہوں نے کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "يَا", transliteration: "yā", root: null, meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "my people", ur: "میری قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "indeed I am", ur: "بیشک میں", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīrun", root: "ن ذ ر", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", root: "ب ي ن", meaning: { en: "clear", ur: "کھلا", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" }, features: { form: "IV" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "أَنِ اعْبُدُوا اللَّهَ وَاتَّقُوهُ وَأَطِيعُونِ",
    words: [
      { arabic: "أَنِ", transliteration: "ani", root: null, meaning: { en: "That", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "اعْبُدُوا", transliteration: "uʿbudū", root: "ع ب د", meaning: { en: "worship", ur: "عبادت کرو", ar: "اعبدوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَاتَّقُوهُ", transliteration: "wa-ttaqūhu", root: "و ق ي", meaning: { en: "and fear Him", ur: "اور اس سے ڈرو", ar: "واتقوه" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "VIII" } },
      { arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", root: "ط و ع", meaning: { en: "and obey me", ur: "اور میری اطاعت کرو", ar: "وأطيعون" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "IV" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ وَيُؤَخِّرْكُمْ إِلَىٰ أَجَلٍ مُّسَمًّى ۚ إِنَّ أَجَلَ اللَّهِ إِذَا جَاءَ لَا يُؤَخَّرُ ۖ لَوْ كُنتُمْ تَعْلَمُونَ",
    words: [
      { arabic: "يَغْفِرْ", transliteration: "yaghfir", root: "غ ف ر", meaning: { en: "He will forgive", ur: "وہ معاف کر دے گا", ar: "يغفر" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "لَكُم", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذُنُوبِكُمْ", transliteration: "dhunūbikum", root: "ذ ن ب", meaning: { en: "your sins", ur: "تمہارے گناہ", ar: "ذنوبكم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَيُؤَخِّرْكُمْ", transliteration: "wa-yuʾakhkhirkum", root: "أ خ ر", meaning: { en: "and grant you respite", ur: "اور تمہیں مہلت دے", ar: "ويؤخركم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "II" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "until", ur: "تک", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَجَلٍ", transliteration: "ajalin", root: "أ ج ل", meaning: { en: "a term", ur: "وقت", ar: "أجل" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مُّسَمًّى", transliteration: "musamman", root: "س م و", meaning: { en: "appointed", ur: "مقررہ", ar: "مسمى" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" }, features: { form: "II" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "أَجَلَ", transliteration: "ajala", root: "أ ج ل", meaning: { en: "the term", ur: "وقت", ar: "أجل" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "إِذَا", transliteration: "idhā", root: null, meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "جَاءَ", transliteration: "jāʾa", root: "ج ي أ", meaning: { en: "comes", ur: "آ جائے", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤَخَّرُ", transliteration: "yuʾakhkharu", root: "أ خ ر", meaning: { en: "it is delayed", ur: "ٹلتا", ar: "يؤخر" }, pos: "V", posLabel: "V", grammar: { role: "passive" }, features: { form: "II" } },
      { arabic: "لَوْ", transliteration: "law", root: null, meaning: { en: "if", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", root: "ك و ن", meaning: { en: "you were", ur: "تم ہوتے", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "to know", ur: "جانتے", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } }
    ],
    structure: {
      relationships: [
      { from: 7, to: 8, label: 'موصوف + صفت' },
      { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
      { from: 14, to: 15, label: 'نفی + فعل' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "قَالَ رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "رَبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "My Lord", ur: "اے میرے رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "indeed I", ur: "بیشک میں نے", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "دَعَوْتُ", transliteration: "daʿawtu", root: "د ع و", meaning: { en: "called", ur: "بلایا", ar: "دعوت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "قَوْمِي", transliteration: "qawmī", root: "ق و م", meaning: { en: "my people", ur: "اپنی قوم کو", ar: "قومي" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "لَيْلًا", transliteration: "laylan", root: "ل ي ل", meaning: { en: "night", ur: "رات کو", ar: "ليلاً" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "وَنَهَارًا", transliteration: "wa-nahāran", root: "ن ه ر", meaning: { en: "and day", ur: "اور دن کو", ar: "ونهاراً" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'فعل + مفعول به' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "فَلَمْ يَزِدْهُمْ دُعَائِي إِلَّا فِرَارًا",
    words: [
      { arabic: "فَلَمْ", transliteration: "fa-lam", root: null, meaning: { en: "but not", ur: "تو نہیں", ar: "فلم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَزِدْهُمْ", transliteration: "yazidhum", root: "ز ي د", meaning: { en: "it increased them", ur: "ان کو بڑھایا", ar: "يزدهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "دُعَائِي", transliteration: "duʿāʾī", root: "د ع و", meaning: { en: "my calling", ur: "میری دعوت نے", ar: "دعائي" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "فِرَارًا", transliteration: "firāran", root: "ف ر ر", meaning: { en: "in flight", ur: "بھاگنے کے", ar: "فراراً" }, pos: "N", posLabel: "N", grammar: { role: "exception" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَإِنِّي كُلَّمَا دَعَوْتُهُمْ لِتَغْفِرَ لَهُمْ جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ وَاسْتَغْشَوْا ثِيَابَهُمْ وَأَصَرُّوا وَاسْتَكْبَرُوا اسْتِكْبَارًا",
    words: [
      { arabic: "وَإِنِّي", transliteration: "wa-innī", root: null, meaning: { en: "And indeed I", ur: "اور بیشک میں", ar: "وإني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "كُلَّمَا", transliteration: "kullamā", root: null, meaning: { en: "whenever", ur: "جب بھی", ar: "كلما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "temporal" } },
      { arabic: "دَعَوْتُهُمْ", transliteration: "daʿawtuhum", root: "د ع و", meaning: { en: "I called them", ur: "میں نے انہیں بلایا", ar: "دعوتهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "لِتَغْفِرَ", transliteration: "li-taghfira", root: "غ ف ر", meaning: { en: "that You may forgive", ur: "تاکہ تو معاف کرے", ar: "لتغفر" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "لَهُمْ", transliteration: "lahum", root: null, meaning: { en: "them", ur: "انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "جَعَلُوا", transliteration: "jaʿalū", root: "ج ع ل", meaning: { en: "they put", ur: "انہوں نے ڈالے", ar: "جعلوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَصَابِعَهُمْ", transliteration: "aṣābiʿahum", root: "ص ب ع", meaning: { en: "their fingers", ur: "اپنی انگلیاں", ar: "أصابعهم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "آذَانِهِمْ", transliteration: "ādhānihim", root: "أ ذ ن", meaning: { en: "their ears", ur: "اپنے کانوں", ar: "آذانهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَاسْتَغْشَوْا", transliteration: "wa-staghshaw", root: "غ ش و", meaning: { en: "and covered themselves", ur: "اور ڈھانک لیے", ar: "واستغشوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "X" } },
      { arabic: "ثِيَابَهُمْ", transliteration: "thiyābahum", root: "ث و ب", meaning: { en: "with their garments", ur: "اپنے کپڑوں سے", ar: "ثيابهم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَأَصَرُّوا", transliteration: "wa-aṣarrū", root: "ص ر ر", meaning: { en: "and persisted", ur: "اور اڑ گئے", ar: "وأصروا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "وَاسْتَكْبَرُوا", transliteration: "wa-stakbarū", root: "ك ب ر", meaning: { en: "and were arrogant", ur: "اور تکبر کیا", ar: "واستكبروا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "X" } },
      { arabic: "اسْتِكْبَارًا", transliteration: "istikbāran", root: "ك ب ر", meaning: { en: "with arrogance", ur: "بڑی تکبر", ar: "استكباراً" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" }, features: { form: "X verbal noun" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 10, to: 11, label: 'فعل + مفعول به' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "ثُمَّ إِنِّي دَعَوْتُهُمْ جِهَارًا",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "indeed I", ur: "بیشک میں نے", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "دَعَوْتُهُمْ", transliteration: "daʿawtuhum", root: "د ع و", meaning: { en: "called them", ur: "انہیں بلایا", ar: "دعوتهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "جِهَارًا", transliteration: "jihāran", root: "ج ه ر", meaning: { en: "publicly", ur: "کھلم کھلا", ar: "جهاراً" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } }
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'فعل + فاعل' }],
    },
  },

  9: {
    ayahNumber: 9,
    text: "ثُمَّ إِنِّي أَعْلَنتُ لَهُمْ وَأَسْرَرْتُ لَهُمْ إِسْرَارًا",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "indeed I", ur: "بیشک میں نے", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "أَعْلَنتُ", transliteration: "aʿlantu", root: "ع ل ن", meaning: { en: "announced", ur: "اعلان کیا", ar: "أعلنت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "لَهُمْ", transliteration: "lahum", root: null, meaning: { en: "to them", ur: "ان کے لیے", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَأَسْرَرْتُ", transliteration: "wa-asrartu", root: "س ر ر", meaning: { en: "and confided", ur: "اور خفیہ کہا", ar: "وأسررت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "لَهُمْ", transliteration: "lahum", root: null, meaning: { en: "to them", ur: "ان سے", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "إِسْرَارًا", transliteration: "isrāran", root: "س ر ر", meaning: { en: "secretly", ur: "خفیہ طور پر", ar: "إسراراً" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" }, features: { form: "IV verbal noun" } }
    ],
    structure: {
      relationships: [{ from: 6, to: 7, label: 'جار + مجرور' }],
    },
  },

  10: {
    ayahNumber: 10,
    text: "فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا",
    words: [
      { arabic: "فَقُلْتُ", transliteration: "fa-qultu", root: "ق و ل", meaning: { en: "So I said", ur: "تو میں نے کہا", ar: "فقلت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "اسْتَغْفِرُوا", transliteration: "istaghfirū", root: "غ ف ر", meaning: { en: "seek forgiveness", ur: "معافی مانگو", ar: "استغفروا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "X" } },
      { arabic: "رَبَّكُمْ", transliteration: "rabbakum", root: "ر ب ب", meaning: { en: "of your Lord", ur: "اپنے رب سے", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", root: null, meaning: { en: "indeed He", ur: "بیشک وہ", ar: "إنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كان" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "غَفَّارًا", transliteration: "ghaffāran", root: "غ ف ر", meaning: { en: "ever Forgiving", ur: "بڑا بخشنے والا", ar: "غفاراً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { pattern: "faʿʿāl", intensive: true } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا",
    words: [
      { arabic: "يُرْسِلِ", transliteration: "yursili", root: "ر س ل", meaning: { en: "He will send", ur: "وہ بھیجے گا", ar: "يرسل" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "IV" } },
      { arabic: "السَّمَاءَ", transliteration: "al-samāʾa", root: "س م و", meaning: { en: "the sky/rain", ur: "آسمان/بارش", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "عَلَيْكُم", transliteration: "ʿalaykum", root: null, meaning: { en: "upon you", ur: "تم پر", ar: "عليكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّدْرَارًا", transliteration: "midrāran", root: "د ر ر", meaning: { en: "abundantly", ur: "کثرت سے", ar: "مدراراً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" }, features: { pattern: "mifʿāl", intensive: true } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا",
    words: [
      { arabic: "وَيُمْدِدْكُم", transliteration: "wa-yumdidkum", root: "م د د", meaning: { en: "and give you increase", ur: "اور تمہیں بڑھائے", ar: "ويمددكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "IV" } },
      { arabic: "بِأَمْوَالٍ", transliteration: "bi-amwālin", root: "م و ل", meaning: { en: "in wealth", ur: "مال میں", ar: "بأموال" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "وَبَنِينَ", transliteration: "wa-banīna", root: "ب ن ي", meaning: { en: "and children", ur: "اور بیٹوں میں", ar: "وبنين" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَيَجْعَل", transliteration: "wa-yajʿal", root: "ج ع ل", meaning: { en: "and make", ur: "اور بنائے", ar: "ويجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", root: "ج ن ن", meaning: { en: "gardens", ur: "باغات", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَيَجْعَل", transliteration: "wa-yajʿal", root: "ج ع ل", meaning: { en: "and make", ur: "اور بنائے", ar: "ويجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَنْهَارًا", transliteration: "anhāran", root: "ن ه ر", meaning: { en: "rivers", ur: "نہریں", ar: "أنهاراً" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 6, label: 'فعل + مفعول به' },
      { from: 7, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "مَّا لَكُمْ لَا تَرْجُونَ لِلَّهِ وَقَارًا",
    words: [
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "What is", ur: "کیا ہے", ar: "ما" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "with you", ur: "تمہیں", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَرْجُونَ", transliteration: "tarjūna", root: "ر ج و", meaning: { en: "you hope/attribute", ur: "تم امید رکھتے", ar: "ترجون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "لِلَّهِ", transliteration: "li-Llāhi", root: "أ ل ه", meaning: { en: "for Allah", ur: "اللہ کی", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "وَقَارًا", transliteration: "waqāran", root: "و ق ر", meaning: { en: "dignity/majesty", ur: "عظمت", ar: "وقاراً" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 4, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "وَقَدْ خَلَقَكُمْ أَطْوَارًا",
    words: [
      { arabic: "وَقَدْ", transliteration: "wa-qad", root: null, meaning: { en: "And certainly", ur: "حالانکہ", ar: "وقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "خَلَقَكُمْ", transliteration: "khalaqakum", root: "خ ل ق", meaning: { en: "He created you", ur: "اس نے تمہیں پیدا کیا", ar: "خلقكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَطْوَارًا", transliteration: "aṭwāran", root: "ط و ر", meaning: { en: "in stages", ur: "مختلف حالتوں میں", ar: "أطواراً" }, pos: "N", posLabel: "N", grammar: { role: "ḥāl" } }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
  },

  15: {
    ayahNumber: 15,
    text: "أَلَمْ تَرَوْا كَيْفَ خَلَقَ اللَّهُ سَبْعَ سَمَاوَاتٍ طِبَاقًا",
    words: [
      { arabic: "أَلَمْ", transliteration: "a-lam", root: null, meaning: { en: "Do you not", ur: "کیا تم نے نہیں", ar: "ألم" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative negative" } },
      { arabic: "تَرَوْا", transliteration: "taraw", root: "ر أ ي", meaning: { en: "see", ur: "دیکھا", ar: "تروا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", root: null, meaning: { en: "how", ur: "کیسے", ar: "كيف" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "بنایا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "سَبْعَ", transliteration: "sabʿa", root: "س ب ع", meaning: { en: "seven", ur: "سات", ar: "سبع" }, pos: "NUM", posLabel: "NUM", grammar: { role: "object" } },
      { arabic: "سَمَاوَاتٍ", transliteration: "samāwātin", root: "س م و", meaning: { en: "heavens", ur: "آسمان", ar: "سماوات" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "طِبَاقًا", transliteration: "ṭibāqan", root: "ط ب ق", meaning: { en: "in layers", ur: "تہ بہ تہ", ar: "طباقاً" }, pos: "N", posLabel: "N", grammar: { role: "ḥāl" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'فعل + فاعل' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "وَجَعَلَ الْقَمَرَ فِيهِنَّ نُورًا وَجَعَلَ الشَّمْسَ سِرَاجًا",
    words: [
      { arabic: "وَجَعَلَ", transliteration: "wa-jaʿala", root: "ج ع ل", meaning: { en: "And made", ur: "اور بنایا", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الْقَمَرَ", transliteration: "al-qamara", root: "ق م ر", meaning: { en: "the moon", ur: "چاند کو", ar: "القمر" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "فِيهِنَّ", transliteration: "fīhinna", root: null, meaning: { en: "therein", ur: "ان میں", ar: "فيهن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "نُورًا", transliteration: "nūran", root: "ن و ر", meaning: { en: "a light", ur: "روشنی", ar: "نوراً" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "وَجَعَلَ", transliteration: "wa-jaʿala", root: "ج ع ل", meaning: { en: "and made", ur: "اور بنایا", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الشَّمْسَ", transliteration: "al-shamsa", root: "ش م س", meaning: { en: "the sun", ur: "سورج کو", ar: "الشمس" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "سِرَاجًا", transliteration: "sirājan", root: "س ر ج", meaning: { en: "a lamp", ur: "چراغ", ar: "سراجاً" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "وَاللَّهُ أَنبَتَكُم مِّنَ الْأَرْضِ نَبَاتًا",
    words: [
      { arabic: "وَاللَّهُ", transliteration: "wa-Allāhu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ نے", ar: "والله" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "أَنبَتَكُم", transliteration: "anbatakum", root: "ن ب ت", meaning: { en: "caused you to grow", ur: "تمہیں اگایا", ar: "أنبتكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "نَبَاتًا", transliteration: "nabātan", root: "ن ب ت", meaning: { en: "a growth", ur: "اگانا", ar: "نباتاً" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" } }
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }],
    },
  },

  18: {
    ayahNumber: 18,
    text: "ثُمَّ يُعِيدُكُمْ فِيهَا وَيُخْرِجُكُمْ إِخْرَاجًا",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "يُعِيدُكُمْ", transliteration: "yuʿīdukum", root: "ع و د", meaning: { en: "He will return you", ur: "تمہیں لوٹائے گا", ar: "يعيدكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "to it", ur: "اس میں", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَيُخْرِجُكُمْ", transliteration: "wa-yukhrijukum", root: "خ ر ج", meaning: { en: "and bring you out", ur: "اور تمہیں نکالے گا", ar: "ويخرجكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "إِخْرَاجًا", transliteration: "ikhrājan", root: "خ ر ج", meaning: { en: "completely", ur: "نکالنا", ar: "إخراجاً" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" }, features: { form: "IV verbal noun" } }
    ],
    structure: {
      relationships: [{ from: 4, to: 5, label: 'فعل + فاعل' }],
    },
  },

  19: {
    ayahNumber: 19,
    text: "وَاللَّهُ جَعَلَ لَكُمُ الْأَرْضَ بِسَاطًا",
    words: [
      { arabic: "وَاللَّهُ", transliteration: "wa-Allāhu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ نے", ar: "والله" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", root: "ج ع ل", meaning: { en: "made", ur: "بنایا", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍa", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین کو", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "بِسَاطًا", transliteration: "bisāṭan", root: "ب س ط", meaning: { en: "an expanse", ur: "فرش", ar: "بساطاً" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 5, label: 'مبتدأ + خبر' },
      { from: 2, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "لِّتَسْلُكُوا مِنْهَا سُبُلًا فِجَاجًا",
    words: [
      { arabic: "لِّتَسْلُكُوا", transliteration: "li-taslukū", root: "س ل ك", meaning: { en: "that you may travel", ur: "تاکہ تم چلو", ar: "لتسلكوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "مِنْهَا", transliteration: "minhā", root: null, meaning: { en: "through it", ur: "اس میں", ar: "منها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "سُبُلًا", transliteration: "subulan", root: "س ب ل", meaning: { en: "paths", ur: "راستے", ar: "سبلاً" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "فِجَاجًا", transliteration: "fijājan", root: "ف ج ج", meaning: { en: "wide", ur: "کشادہ", ar: "فجاجاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "قَالَ نُوحٌ رَّبِّ إِنَّهُمْ عَصَوْنِي وَاتَّبَعُوا مَن لَّمْ يَزِدْهُ مَالُهُ وَوَلَدُهُ إِلَّا خَسَارًا",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "Said", ur: "کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "نُوحٌ", transliteration: "nūḥun", root: null, meaning: { en: "Noah", ur: "نوح نے", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { role: "subject", proper_noun: true } },
      { arabic: "رَّبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "My Lord", ur: "اے میرے رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", root: null, meaning: { en: "indeed they", ur: "بیشک انہوں نے", ar: "إنهم" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "عَصَوْنِي", transliteration: "ʿaṣawnī", root: "ع ص ي", meaning: { en: "disobeyed me", ur: "میری نافرمانی کی", ar: "عصوني" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "وَاتَّبَعُوا", transliteration: "wa-ttabaʿū", root: "ت ب ع", meaning: { en: "and followed", ur: "اور پیروی کی", ar: "واتبعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "VIII" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "those whose", ur: "ان کی جن کو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَّمْ", transliteration: "lam", root: null, meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَزِدْهُ", transliteration: "yazidhu", root: "ز ي د", meaning: { en: "increased him", ur: "بڑھایا اسے", ar: "يزده" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "مَالُهُ", transliteration: "māluhu", root: "م و ل", meaning: { en: "his wealth", ur: "اس کے مال نے", ar: "ماله" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "وَوَلَدُهُ", transliteration: "wa-waladuhu", root: "و ل د", meaning: { en: "and his children", ur: "اور اولاد نے", ar: "وولده" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "خَسَارًا", transliteration: "khasāran", root: "خ س ر", meaning: { en: "loss", ur: "نقصان کے", ar: "خساراً" }, pos: "N", posLabel: "N", grammar: { role: "exception" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 8, to: 9, label: 'نفی + فعل' },
      { from: 9, to: 10, label: 'فعل + فاعل' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "وَمَكَرُوا مَكْرًا كُبَّارًا",
    words: [
      { arabic: "وَمَكَرُوا", transliteration: "wa-makarū", root: "م ك ر", meaning: { en: "And they plotted", ur: "اور انہوں نے مکر کیا", ar: "ومكروا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مَكْرًا", transliteration: "makran", root: "م ك ر", meaning: { en: "a plot", ur: "مکر", ar: "مكراً" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" } },
      { arabic: "كُبَّارًا", transliteration: "kubbāran", root: "ك ب ر", meaning: { en: "immense", ur: "بہت بڑا", ar: "كباراً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" }, features: { pattern: "fuʿʿāl", intensive: true } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "وَقَالُوا لَا تَذَرُنَّ آلِهَتَكُمْ وَلَا تَذَرُنَّ وَدًّا وَلَا سُوَاعًا وَلَا يَغُوثَ وَيَعُوقَ وَنَسْرًا",
    words: [
      { arabic: "وَقَالُوا", transliteration: "wa-qālū", root: "ق و ل", meaning: { en: "And they said", ur: "اور انہوں نے کہا", ar: "وقالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "never", ur: "ہرگز نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَذَرُنَّ", transliteration: "tadharunna", root: "و ذ ر", meaning: { en: "leave", ur: "چھوڑنا", ar: "تذرن" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect", mood: "energetic" } },
      { arabic: "آلِهَتَكُمْ", transliteration: "ālihatakum", root: "أ ل ه", meaning: { en: "your gods", ur: "اپنے معبودوں کو", ar: "آلهتكم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and never", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَذَرُنَّ", transliteration: "tadharunna", root: "و ذ ر", meaning: { en: "leave", ur: "چھوڑنا", ar: "تذرن" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "energetic" } },
      { arabic: "وَدًّا", transliteration: "waddan", root: null, meaning: { en: "Wadd", ur: "وَد کو", ar: "وداً" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true, idol: true } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "nor", ur: "نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "سُوَاعًا", transliteration: "suwāʿan", root: null, meaning: { en: "Suwa", ur: "سُواع کو", ar: "سواعاً" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true, idol: true } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "nor", ur: "نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "يَغُوثَ", transliteration: "yaghūtha", root: null, meaning: { en: "Yaghuth", ur: "یغوث کو", ar: "يغوث" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true, idol: true } },
      { arabic: "وَيَعُوقَ", transliteration: "wa-yaʿūqa", root: null, meaning: { en: "and Ya'uq", ur: "اور یعوق کو", ar: "ويعوق" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true, idol: true } },
      { arabic: "وَنَسْرًا", transliteration: "wa-nasran", root: null, meaning: { en: "and Nasr", ur: "اور نسر کو", ar: "ونسراً" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true, idol: true } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "وَقَدْ أَضَلُّوا كَثِيرًا ۖ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا ضَلَالًا",
    words: [
      { arabic: "وَقَدْ", transliteration: "wa-qad", root: null, meaning: { en: "And already", ur: "اور یقیناً", ar: "وقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "أَضَلُّوا", transliteration: "aḍallū", root: "ض ل ل", meaning: { en: "they have misled", ur: "انہوں نے گمراہ کیا", ar: "أضلوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "كَثِيرًا", transliteration: "kathīran", root: "ك ث ر", meaning: { en: "many", ur: "بہتوں کو", ar: "كثيراً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "object" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and do not", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَزِدِ", transliteration: "tazid", root: "ز ي د", meaning: { en: "increase", ur: "بڑھا", ar: "تزد" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "الظَّالِمِينَ", transliteration: "al-ẓālimīna", root: "ظ ل م", meaning: { en: "the wrongdoers", ur: "ظالموں کو", ar: "الظالمين" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "ضَلَالًا", transliteration: "ḍalālan", root: "ض ل ل", meaning: { en: "in error", ur: "گمراہی کے", ar: "ضلالاً" }, pos: "N", posLabel: "N", grammar: { role: "exception" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "مِّمَّا خَطِيئَاتِهِمْ أُغْرِقُوا فَأُدْخِلُوا نَارًا فَلَمْ يَجِدُوا لَهُم مِّن دُونِ اللَّهِ أَنصَارًا",
    words: [
      { arabic: "مِّمَّا", transliteration: "mimmā", root: null, meaning: { en: "Because of", ur: "کی وجہ سے", ar: "مما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خَطِيئَاتِهِمْ", transliteration: "khaṭīʾātihim", root: "خ ط أ", meaning: { en: "their sins", ur: "ان کے گناہوں", ar: "خطيئاتهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أُغْرِقُوا", transliteration: "ughriqū", root: "غ ر ق", meaning: { en: "they were drowned", ur: "غرق کیے گئے", ar: "أغرقوا" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "فَأُدْخِلُوا", transliteration: "fa-udkhilū", root: "د خ ل", meaning: { en: "and made to enter", ur: "اور داخل کیے گئے", ar: "فأدخلوا" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "نَارًا", transliteration: "nāran", root: "ن و ر", meaning: { en: "a Fire", ur: "آگ میں", ar: "ناراً" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "فَلَمْ", transliteration: "fa-lam", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "فلم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَجِدُوا", transliteration: "yajidū", root: "و ج د", meaning: { en: "they found", ur: "انہوں نے پایا", ar: "يجدوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "لَهُم", transliteration: "lahum", root: null, meaning: { en: "for themselves", ur: "اپنے لیے", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "besides", ur: "سوا", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", root: null, meaning: { en: "besides", ur: "غیر", ar: "دون" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أَنصَارًا", transliteration: "anṣāran", root: "ن ص ر", meaning: { en: "any helpers", ur: "مددگار", ar: "أنصاراً" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 5, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'نفی + فعل' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "وَقَالَ نُوحٌ رَّبِّ لَا تَذَرْ عَلَى الْأَرْضِ مِنَ الْكَافِرِينَ دَيَّارًا",
    words: [
      { arabic: "وَقَالَ", transliteration: "wa-qāla", root: "ق و ل", meaning: { en: "And said", ur: "اور کہا", ar: "وقال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "نُوحٌ", transliteration: "nūḥun", root: null, meaning: { en: "Noah", ur: "نوح نے", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { role: "subject", proper_noun: true } },
      { arabic: "رَّبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "My Lord", ur: "اے میرے رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "do not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَذَرْ", transliteration: "tadhar", root: "و ذ ر", meaning: { en: "leave", ur: "چھوڑ", ar: "تذر" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "of", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْكَافِرِينَ", transliteration: "al-kāfirīna", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافروں میں سے", ar: "الكافرين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "دَيَّارًا", transliteration: "dayyāran", root: "د و ر", meaning: { en: "a single inhabitant", ur: "ایک بھی رہنے والا", ar: "دياراً" }, pos: "N", posLabel: "N", grammar: { role: "object" }, features: { pattern: "fayyāl", meaning: "single dweller" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'نفی + فعل' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "إِنَّكَ إِن تَذَرْهُمْ يُضِلُّوا عِبَادَكَ وَلَا يَلِدُوا إِلَّا فَاجِرًا كَفَّارًا",
    words: [
      { arabic: "إِنَّكَ", transliteration: "innaka", root: null, meaning: { en: "Indeed You", ur: "بیشک اگر تو", ar: "إنك" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "تَذَرْهُمْ", transliteration: "tadharhum", root: "و ذ ر", meaning: { en: "You leave them", ur: "انہیں چھوڑ دے", ar: "تذرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "يُضِلُّوا", transliteration: "yuḍillū", root: "ض ل ل", meaning: { en: "they will mislead", ur: "گمراہ کریں گے", ar: "يضلوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "IV" } },
      { arabic: "عِبَادَكَ", transliteration: "ʿibādaka", root: "ع ب د", meaning: { en: "Your servants", ur: "تیرے بندوں کو", ar: "عبادك" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَلِدُوا", transliteration: "yalidū", root: "و ل د", meaning: { en: "will they give birth", ur: "جنیں گے", ar: "يلدوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "فَاجِرًا", transliteration: "fājiran", root: "ف ج ر", meaning: { en: "a wicked one", ur: "فاجر", ar: "فاجراً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "exception" } },
      { arabic: "كَفَّارًا", transliteration: "kaffāran", root: "ك ف ر", meaning: { en: "disbelieving", ur: "سخت کافر", ar: "كفاراً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" }, features: { pattern: "faʿʿāl", intensive: true } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 5, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'نفی + فعل' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا تَبَارًا",
    words: [
      { arabic: "رَّبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "My Lord", ur: "اے میرے رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "اغْفِرْ", transliteration: "ighfir", root: "غ ف ر", meaning: { en: "forgive", ur: "بخش دے", ar: "اغفر" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "لِي", transliteration: "lī", root: null, meaning: { en: "me", ur: "مجھے", ar: "لي" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَلِوَالِدَيَّ", transliteration: "wa-li-wālidayya", root: "و ل د", meaning: { en: "and my parents", ur: "اور میرے والدین کو", ar: "ولوالدي" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "وَلِمَن", transliteration: "wa-li-man", root: null, meaning: { en: "and whoever", ur: "اور جو", ar: "ولمن" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "دَخَلَ", transliteration: "dakhala", root: "د خ ل", meaning: { en: "entered", ur: "داخل ہوا", ar: "دخل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "بَيْتِيَ", transliteration: "baytiya", root: "ب ي ت", meaning: { en: "my house", ur: "میرے گھر میں", ar: "بيتي" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "مُؤْمِنًا", transliteration: "muʾminan", root: "أ م ن", meaning: { en: "as a believer", ur: "مومن ہو کر", ar: "مؤمناً" }, pos: "N", posLabel: "N", grammar: { role: "ḥāl" }, features: { form: "IV participle" } },
      { arabic: "وَلِلْمُؤْمِنِينَ", transliteration: "wa-li-al-muʾminīna", root: "أ م ن", meaning: { en: "and the believing men", ur: "اور مومن مردوں کو", ar: "وللمؤمنين" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true }, features: { form: "IV participle" } },
      { arabic: "وَالْمُؤْمِنَاتِ", transliteration: "wa-al-muʾmināti", root: "أ م ن", meaning: { en: "and believing women", ur: "اور مومن عورتوں کو", ar: "والمؤمنات" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true }, features: { form: "IV participle" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and do not", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَزِدِ", transliteration: "tazid", root: "ز ي د", meaning: { en: "increase", ur: "بڑھا", ar: "تزد" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "الظَّالِمِينَ", transliteration: "al-ẓālimīna", root: "ظ ل م", meaning: { en: "the wrongdoers", ur: "ظالموں کو", ar: "الظالمين" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "تَبَارًا", transliteration: "tabāran", root: "ت ب ر", meaning: { en: "in destruction", ur: "تباہی کے", ar: "تباراً" }, pos: "N", posLabel: "N", grammar: { role: "exception" } }
    ],
    structure: {
      relationships: [
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 11, to: 12, label: 'نفی + فعل' },
      { from: 12, to: 13, label: 'فعل + مفعول به' }
      ]
    }
  }
};

export default TREEBANK_DATA;
