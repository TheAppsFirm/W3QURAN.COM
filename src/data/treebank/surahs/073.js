/**
 * Surah Al-Muzzammil (73) - Quranic Arabic Treebank
 * The Enshrouded One
 * 20 Ayahs - Makki (except last ayah which is Madani)
 * Theme: Night prayer (Tahajjud), gradual revelation, patience with deniers
 */

export const TREEBANK_DATA = {
  surahId: 73,
  surahName: "Al-Muzzammil",
  surahNameArabic: "المزمل",
  totalAyahs: 20,

  1: {
    ayahNumber: 1,
    text: "يَا أَيُّهَا الْمُزَّمِّلُ",
    words: [
      {
        arabic: "يَا",
        transliteration: "yā",
        root: null,
        meaning: { en: "O", ur: "اے", ar: "حرف نداء" },
        pos: "VOC",
        posLabel: "VOC",
        grammar: { role: "vocative particle" }
      },
      {
        arabic: "أَيُّهَا",
        transliteration: "ayyuhā",
        root: null,
        meaning: { en: "you", ur: "اے", ar: "أداة نداء" },
        pos: "PRON",
        posLabel: "PRON",
        grammar: { role: "vocative address", person: "2nd", number: "singular" }
      },
      {
        arabic: "الْمُزَّمِّلُ",
        transliteration: "al-muzzammil",
        root: "ز م ل",
        meaning: { en: "the one wrapped", ur: "کملی لپیٹنے والے", ar: "المتلفف في ثيابه" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "vocative noun", case: "nominative", definite: true },
        features: { form: "V", participle: "active", meaning: "one who wraps himself" }
      }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "قُمِ اللَّيْلَ إِلَّا قَلِيلًا",
    words: [
      {
        arabic: "قُمِ",
        transliteration: "qum-i",
        root: "ق و م",
        meaning: { en: "Stand", ur: "کھڑے ہو", ar: "قف" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "I", root: "قوم" }
      },
      {
        arabic: "اللَّيْلَ",
        transliteration: "al-layla",
        root: "ل ي ل",
        meaning: { en: "the night", ur: "رات کو", ar: "الليل" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "adverbial accusative", case: "accusative", definite: true }
      },
      {
        arabic: "إِلَّا",
        transliteration: "illā",
        root: null,
        meaning: { en: "except", ur: "سوائے", ar: "استثناء" },
        pos: "EXC",
        posLabel: "EXC",
        grammar: { role: "exception particle" }
      },
      {
        arabic: "قَلِيلًا",
        transliteration: "qalīlan",
        root: "ق ل ل",
        meaning: { en: "a little", ur: "تھوڑی", ar: "قليلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "exception", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا",
    words: [
      {
        arabic: "نِّصْفَهُ",
        transliteration: "niṣfahu",
        root: "ن ص ف",
        meaning: { en: "Half of it", ur: "اس کا آدھا", ar: "نصفه" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "apposition", case: "accusative" },
        pronoun: { attached: "ه", refers_to: "night" }
      },
      {
        arabic: "أَوِ",
        transliteration: "aw-i",
        root: null,
        meaning: { en: "or", ur: "یا", ar: "أو" },
        pos: "CONJ",
        posLabel: "CONJ",
        grammar: { role: "disjunctive conjunction" }
      },
      {
        arabic: "انقُصْ",
        transliteration: "unquṣ",
        root: "ن ق ص",
        meaning: { en: "reduce", ur: "کم کرو", ar: "أنقص" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "I", root: "نقص" }
      },
      {
        arabic: "مِنْهُ",
        transliteration: "minhu",
        root: null,
        meaning: { en: "from it", ur: "اس سے", ar: "منه" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ه", refers_to: "half" }
      },
      {
        arabic: "قَلِيلًا",
        transliteration: "qalīlan",
        root: "ق ل ل",
        meaning: { en: "a little", ur: "تھوڑا", ar: "قليلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adverbial accusative", case: "accusative" }
      }
    ],
    structure: {
      relationships: [],
    },
  },

  4: {
    ayahNumber: 4,
    text: "أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
    words: [
      {
        arabic: "أَوْ",
        transliteration: "aw",
        root: null,
        meaning: { en: "Or", ur: "یا", ar: "أو" },
        pos: "CONJ",
        posLabel: "CONJ",
        grammar: { role: "disjunctive conjunction" }
      },
      {
        arabic: "زِدْ",
        transliteration: "zid",
        root: "ز ي د",
        meaning: { en: "increase", ur: "بڑھاؤ", ar: "زد" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "I", root: "زيد" }
      },
      {
        arabic: "عَلَيْهِ",
        transliteration: "ʿalayhi",
        root: null,
        meaning: { en: "upon it", ur: "اس پر", ar: "عليه" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ه", refers_to: "half" }
      },
      {
        arabic: "وَرَتِّلِ",
        transliteration: "wa-rattil-i",
        root: "ر ت ل",
        meaning: { en: "and recite", ur: "اور پڑھو", ar: "واقرأ" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "II", root: "رتل", meaning: "recite slowly and clearly" }
      },
      {
        arabic: "الْقُرْآنَ",
        transliteration: "al-qurʾāna",
        root: "ق ر أ",
        meaning: { en: "the Quran", ur: "قرآن کو", ar: "القرآن" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative", definite: true }
      },
      {
        arabic: "تَرْتِيلًا",
        transliteration: "tartīlan",
        root: "ر ت ل",
        meaning: { en: "with measured recitation", ur: "ٹھہر ٹھہر کر", ar: "ترتيلاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "cognate accusative", case: "accusative" },
        features: { form: "II verbal noun", emphasis: "intensive" }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'عطف' },
      { from: 4, to: 5, label: 'فعل + مفعول به' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا",
    words: [
      {
        arabic: "إِنَّا",
        transliteration: "innā",
        root: null,
        meaning: { en: "Indeed, We", ur: "بیشک ہم", ar: "إننا" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle + subject" },
        pronoun: { attached: "نا", refers_to: "Allah", type: "majestic plural" }
      },
      {
        arabic: "سَنُلْقِي",
        transliteration: "sanulqī",
        root: "ل ق ي",
        meaning: { en: "will cast upon", ur: "ڈالیں گے", ar: "سنلقي" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "1st", number: "plural", tense: "future" },
        features: { form: "IV", root: "لقي", prefix: "س" }
      },
      {
        arabic: "عَلَيْكَ",
        transliteration: "ʿalayka",
        root: null,
        meaning: { en: "upon you", ur: "تم پر", ar: "عليك" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ك", refers_to: "Prophet" }
      },
      {
        arabic: "قَوْلًا",
        transliteration: "qawlan",
        root: "ق و ل",
        meaning: { en: "a word", ur: "بات", ar: "قولاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      },
      {
        arabic: "ثَقِيلًا",
        transliteration: "thaqīlan",
        root: "ث ق ل",
        meaning: { en: "weighty", ur: "بھاری", ar: "ثقيلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adjective", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "إِنَّ نَاشِئَةَ اللَّيْلِ هِيَ أَشَدُّ وَطْئًا وَأَقْوَمُ قِيلًا",
    words: [
      {
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        meaning: { en: "Indeed", ur: "بیشک", ar: "إن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle" }
      },
      {
        arabic: "نَاشِئَةَ",
        transliteration: "nāshiʾata",
        root: "ن ش أ",
        meaning: { en: "the arising", ur: "اٹھنا", ar: "ناشئة" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of inna", case: "accusative" },
        features: { participle: "active feminine", meaning: "night prayer/arising at night" }
      },
      {
        arabic: "اللَّيْلِ",
        transliteration: "al-layli",
        root: "ل ي ل",
        meaning: { en: "of the night", ur: "رات کی", ar: "الليل" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive", definite: true }
      },
      {
        arabic: "هِيَ",
        transliteration: "hiya",
        root: null,
        meaning: { en: "it is", ur: "وہ", ar: "هي" },
        pos: "PRON",
        posLabel: "PRON",
        grammar: { role: "subject", person: "3rd", gender: "feminine", number: "singular" }
      },
      {
        arabic: "أَشَدُّ",
        transliteration: "ashaddu",
        root: "ش د د",
        meaning: { en: "more intense", ur: "زیادہ موافق", ar: "أشد" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "predicate", case: "nominative" },
        features: { degree: "elative/comparative" }
      },
      {
        arabic: "وَطْئًا",
        transliteration: "waṭʾan",
        root: "و ط أ",
        meaning: { en: "in impression", ur: "دل پر اثر میں", ar: "وطئاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "specification accusative", case: "accusative" }
      },
      {
        arabic: "وَأَقْوَمُ",
        transliteration: "wa-aqwamu",
        root: "ق و م",
        meaning: { en: "and more suitable", ur: "اور زیادہ درست", ar: "وأقوم" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "predicate", case: "nominative" },
        features: { degree: "elative/comparative" }
      },
      {
        arabic: "قِيلًا",
        transliteration: "qīlan",
        root: "ق و ل",
        meaning: { en: "for speech", ur: "بات میں", ar: "قيلاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "specification accusative", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 4, to: 5, label: 'مبتدأ + خبر' },
      { from: 4, to: 7, label: 'مبتدأ + خبر' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "إِنَّ لَكَ فِي النَّهَارِ سَبْحًا طَوِيلًا",
    words: [
      {
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        meaning: { en: "Indeed", ur: "بیشک", ar: "إن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle" }
      },
      {
        arabic: "لَكَ",
        transliteration: "laka",
        root: null,
        meaning: { en: "for you", ur: "تمہارے لیے", ar: "لك" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ك", refers_to: "Prophet" }
      },
      {
        arabic: "فِي",
        transliteration: "fī",
        root: null,
        meaning: { en: "in", ur: "میں", ar: "في" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "النَّهَارِ",
        transliteration: "al-nahāri",
        root: "ن ه ر",
        meaning: { en: "the day", ur: "دن میں", ar: "النهار" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive", definite: true }
      },
      {
        arabic: "سَبْحًا",
        transliteration: "sabḥan",
        root: "س ب ح",
        meaning: { en: "occupation", ur: "مشغولیت", ar: "سبحاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of inna (delayed)", case: "accusative" }
      },
      {
        arabic: "طَوِيلًا",
        transliteration: "ṭawīlan",
        root: "ط و ل",
        meaning: { en: "long", ur: "لمبی", ar: "طويلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adjective", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا",
    words: [
      {
        arabic: "وَاذْكُرِ",
        transliteration: "wa-udhkur-i",
        root: "ذ ك ر",
        meaning: { en: "And remember", ur: "اور یاد کرو", ar: "واذكر" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "I", root: "ذكر" }
      },
      {
        arabic: "اسْمَ",
        transliteration: "isma",
        root: "س م و",
        meaning: { en: "the name", ur: "نام", ar: "اسم" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      },
      {
        arabic: "رَبِّكَ",
        transliteration: "rabbika",
        root: "ر ب ب",
        meaning: { en: "of your Lord", ur: "اپنے رب کا", ar: "ربك" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive" },
        pronoun: { attached: "ك", refers_to: "Prophet" }
      },
      {
        arabic: "وَتَبَتَّلْ",
        transliteration: "wa-tabattal",
        root: "ب ت ل",
        meaning: { en: "and devote yourself", ur: "اور منقطع ہو جاؤ", ar: "وتبتل" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "V", root: "بتل", meaning: "devote completely, detach from worldly" }
      },
      {
        arabic: "إِلَيْهِ",
        transliteration: "ilayhi",
        root: null,
        meaning: { en: "to Him", ur: "اس کی طرف", ar: "إليه" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ه", refers_to: "Allah" }
      },
      {
        arabic: "تَبْتِيلًا",
        transliteration: "tabtīlan",
        root: "ب ت ل",
        meaning: { en: "with complete devotion", ur: "پوری طرح منقطع ہو کر", ar: "تبتيلاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "cognate accusative", case: "accusative" },
        features: { form: "II verbal noun", emphasis: "intensive" }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 4, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "رَّبُّ الْمَشْرِقِ وَالْمَغْرِبِ لَا إِلَـٰهَ إِلَّا هُوَ فَاتَّخِذْهُ وَكِيلًا",
    words: [
      {
        arabic: "رَّبُّ",
        transliteration: "rabbu",
        root: "ر ب ب",
        meaning: { en: "Lord", ur: "رب", ar: "رب" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative" }
      },
      {
        arabic: "الْمَشْرِقِ",
        transliteration: "al-mashriqi",
        root: "ش ر ق",
        meaning: { en: "of the East", ur: "مشرق کا", ar: "المشرق" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive", definite: true }
      },
      {
        arabic: "وَالْمَغْرِبِ",
        transliteration: "wa-al-maghribi",
        root: "غ ر ب",
        meaning: { en: "and the West", ur: "اور مغرب کا", ar: "والمغرب" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive", definite: true }
      },
      {
        arabic: "لَا",
        transliteration: "lā",
        root: null,
        meaning: { en: "No", ur: "نہیں", ar: "لا" },
        pos: "NEG",
        posLabel: "NEG",
        grammar: { role: "negation particle" }
      },
      {
        arabic: "إِلَـٰهَ",
        transliteration: "ilāha",
        root: "أ ل ه",
        meaning: { en: "deity", ur: "معبود", ar: "إله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "noun of negation", case: "accusative" }
      },
      {
        arabic: "إِلَّا",
        transliteration: "illā",
        root: null,
        meaning: { en: "except", ur: "سوائے", ar: "إلا" },
        pos: "EXC",
        posLabel: "EXC",
        grammar: { role: "exception particle" }
      },
      {
        arabic: "هُوَ",
        transliteration: "huwa",
        root: null,
        meaning: { en: "Him", ur: "اس کے", ar: "هو" },
        pos: "PRON",
        posLabel: "PRON",
        grammar: { role: "exception", person: "3rd", gender: "masculine", number: "singular" }
      },
      {
        arabic: "فَاتَّخِذْهُ",
        transliteration: "fa-ttakhidhhu",
        root: "أ خ ذ",
        meaning: { en: "so take Him", ur: "پس اسے بناؤ", ar: "فاتخذه" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "VIII", root: "أخذ", meaning: "take/adopt" },
        pronoun: { attached: "ه", refers_to: "Allah" }
      },
      {
        arabic: "وَكِيلًا",
        transliteration: "wakīlan",
        root: "و ك ل",
        meaning: { en: "as Disposer of affairs", ur: "کارساز", ar: "وكيلاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "second object (mafʿūl bihi thānī)", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 8, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَاصْبِرْ عَلَىٰ مَا يَقُولُونَ وَاهْجُرْهُمْ هَجْرًا جَمِيلًا",
    words: [
      {
        arabic: "وَاصْبِرْ",
        transliteration: "wa-ṣbir",
        root: "ص ب ر",
        meaning: { en: "And be patient", ur: "اور صبر کرو", ar: "واصبر" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "I", root: "صبر" }
      },
      {
        arabic: "عَلَىٰ",
        transliteration: "ʿalā",
        root: null,
        meaning: { en: "over", ur: "پر", ar: "على" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "مَا",
        transliteration: "mā",
        root: null,
        meaning: { en: "what", ur: "جو", ar: "ما" },
        pos: "REL",
        posLabel: "REL",
        grammar: { role: "relative pronoun" }
      },
      {
        arabic: "يَقُولُونَ",
        transliteration: "yaqūlūna",
        root: "ق و ل",
        meaning: { en: "they say", ur: "وہ کہتے ہیں", ar: "يقولون" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", number: "plural", tense: "imperfect", mood: "indicative" },
        features: { form: "I", root: "قول" }
      },
      {
        arabic: "وَاهْجُرْهُمْ",
        transliteration: "wa-hjurhum",
        root: "ه ج ر",
        meaning: { en: "and avoid them", ur: "اور ان سے الگ ہو جاؤ", ar: "واهجرهم" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "I", root: "هجر" },
        pronoun: { attached: "هم", refers_to: "disbelievers" }
      },
      {
        arabic: "هَجْرًا",
        transliteration: "hajran",
        root: "ه ج ر",
        meaning: { en: "an avoidance", ur: "قطع تعلق", ar: "هجراً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "cognate accusative", case: "accusative" }
      },
      {
        arabic: "جَمِيلًا",
        transliteration: "jamīlan",
        root: "ج م ل",
        meaning: { en: "gracious", ur: "اچھا", ar: "جميلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adjective", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 4, to: 6, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "وَذَرْنِي وَالْمُكَذِّبِينَ أُولِي النَّعْمَةِ وَمَهِّلْهُمْ قَلِيلًا",
    words: [
      {
        arabic: "وَذَرْنِي",
        transliteration: "wa-dharnī",
        root: "و ذ ر",
        meaning: { en: "And leave Me", ur: "اور مجھے چھوڑ دو", ar: "وذرني" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "I", root: "وذر" },
        pronoun: { attached: "ني", refers_to: "Allah" }
      },
      {
        arabic: "وَالْمُكَذِّبِينَ",
        transliteration: "wa-al-mukadhdhibīna",
        root: "ك ذ ب",
        meaning: { en: "and the deniers", ur: "اور جھٹلانے والوں کو", ar: "والمكذبين" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative", definite: true },
        features: { form: "II", participle: "active plural" }
      },
      {
        arabic: "أُولِي",
        transliteration: "ulī",
        root: null,
        meaning: { en: "possessors of", ur: "والے", ar: "أولي" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "adjective", case: "accusative" }
      },
      {
        arabic: "النَّعْمَةِ",
        transliteration: "al-naʿmati",
        root: "ن ع م",
        meaning: { en: "the affluence", ur: "نعمت کے", ar: "النعمة" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive", definite: true }
      },
      {
        arabic: "وَمَهِّلْهُمْ",
        transliteration: "wa-mahhilhum",
        root: "م ه ل",
        meaning: { en: "and grant them respite", ur: "اور انہیں مہلت دو", ar: "ومهلهم" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "singular", mood: "imperative" },
        features: { form: "II", root: "مهل" },
        pronoun: { attached: "هم", refers_to: "deniers" }
      },
      {
        arabic: "قَلِيلًا",
        transliteration: "qalīlan",
        root: "ق ل ل",
        meaning: { en: "a little", ur: "تھوڑی", ar: "قليلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adverbial accusative", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "إِنَّ لَدَيْنَا أَنكَالًا وَجَحِيمًا",
    words: [
      {
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        meaning: { en: "Indeed", ur: "بیشک", ar: "إن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle" }
      },
      {
        arabic: "لَدَيْنَا",
        transliteration: "ladaynā",
        root: null,
        meaning: { en: "with Us", ur: "ہمارے پاس", ar: "لدينا" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "نا", refers_to: "Allah", type: "majestic plural" }
      },
      {
        arabic: "أَنكَالًا",
        transliteration: "ankālan",
        root: "ن ك ل",
        meaning: { en: "shackles", ur: "بیڑیاں", ar: "أنكالاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of inna (delayed)", case: "accusative" }
      },
      {
        arabic: "وَجَحِيمًا",
        transliteration: "wa-jaḥīman",
        root: "ج ح م",
        meaning: { en: "and blazing fire", ur: "اور جہنم", ar: "وجحيماً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "conjunction + noun", case: "accusative" }
      }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }],
    },
  },

  13: {
    ayahNumber: 13,
    text: "وَطَعَامًا ذَا غُصَّةٍ وَعَذَابًا أَلِيمًا",
    words: [
      {
        arabic: "وَطَعَامًا",
        transliteration: "wa-ṭaʿāman",
        root: "ط ع م",
        meaning: { en: "And food", ur: "اور کھانا", ar: "وطعاماً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "conjunction + noun", case: "accusative" }
      },
      {
        arabic: "ذَا",
        transliteration: "dhā",
        root: null,
        meaning: { en: "that has", ur: "والا", ar: "ذا" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "adjective", case: "accusative" }
      },
      {
        arabic: "غُصَّةٍ",
        transliteration: "ghuṣṣatin",
        root: "غ ص ص",
        meaning: { en: "choking", ur: "گلے میں پھنسنے والا", ar: "غصة" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive" }
      },
      {
        arabic: "وَعَذَابًا",
        transliteration: "wa-ʿadhāban",
        root: "ع ذ ب",
        meaning: { en: "and punishment", ur: "اور عذاب", ar: "وعذاباً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "conjunction + noun", case: "accusative" }
      },
      {
        arabic: "أَلِيمًا",
        transliteration: "alīman",
        root: "أ ل م",
        meaning: { en: "painful", ur: "دردناک", ar: "أليماً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adjective", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "يَوْمَ تَرْجُفُ الْأَرْضُ وَالْجِبَالُ وَكَانَتِ الْجِبَالُ كَثِيبًا مَّهِيلًا",
    words: [
      {
        arabic: "يَوْمَ",
        transliteration: "yawma",
        root: "ي و م",
        meaning: { en: "On the Day", ur: "جس دن", ar: "يوم" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "adverbial accusative", case: "accusative" }
      },
      {
        arabic: "تَرْجُفُ",
        transliteration: "tarjufu",
        root: "ر ج ف",
        meaning: { en: "will shake", ur: "لرزے گی", ar: "ترجف" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "feminine", number: "singular", tense: "imperfect" },
        features: { form: "I", root: "رجف" }
      },
      {
        arabic: "الْأَرْضُ",
        transliteration: "al-arḍu",
        root: "أ ر ض",
        meaning: { en: "the earth", ur: "زمین", ar: "الأرض" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative", definite: true }
      },
      {
        arabic: "وَالْجِبَالُ",
        transliteration: "wa-al-jibālu",
        root: "ج ب ل",
        meaning: { en: "and the mountains", ur: "اور پہاڑ", ar: "والجبال" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative", definite: true }
      },
      {
        arabic: "وَكَانَتِ",
        transliteration: "wa-kānati",
        root: "ك و ن",
        meaning: { en: "and will become", ur: "اور ہو جائیں گے", ar: "وكانت" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "feminine", number: "singular", tense: "perfect" },
        features: { form: "I", root: "كون" }
      },
      {
        arabic: "الْجِبَالُ",
        transliteration: "al-jibālu",
        root: "ج ب ل",
        meaning: { en: "the mountains", ur: "پہاڑ", ar: "الجبال" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of kāna", case: "nominative", definite: true }
      },
      {
        arabic: "كَثِيبًا",
        transliteration: "kathīban",
        root: "ك ث ب",
        meaning: { en: "a heap of sand", ur: "ریت کا ٹیلہ", ar: "كثيباً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "predicate of kāna", case: "accusative" }
      },
      {
        arabic: "مَّهِيلًا",
        transliteration: "mahīlan",
        root: "ه ي ل",
        meaning: { en: "pouring down", ur: "بہتا ہوا", ar: "مهيلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adjective", case: "accusative" },
        features: { pattern: "faʿīl", meaning: "poured/flowing" }
      }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 5, to: 6, label: 'فعل + فاعل' },
      { from: 5, to: 7, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "إِنَّا أَرْسَلْنَا إِلَيْكُمْ رَسُولًا شَاهِدًا عَلَيْكُمْ كَمَا أَرْسَلْنَا إِلَىٰ فِرْعَوْنَ رَسُولًا",
    words: [
      {
        arabic: "إِنَّا",
        transliteration: "innā",
        root: null,
        meaning: { en: "Indeed, We", ur: "بیشک ہم نے", ar: "إننا" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle + subject" },
        pronoun: { attached: "نا", refers_to: "Allah", type: "majestic plural" }
      },
      {
        arabic: "أَرْسَلْنَا",
        transliteration: "arsalnā",
        root: "ر س ل",
        meaning: { en: "have sent", ur: "بھیجا", ar: "أرسلنا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "1st", number: "plural", tense: "perfect" },
        features: { form: "IV", root: "رسل" }
      },
      {
        arabic: "إِلَيْكُمْ",
        transliteration: "ilaykum",
        root: null,
        meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليكم" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "كم", refers_to: "mankind" }
      },
      {
        arabic: "رَسُولًا",
        transliteration: "rasūlan",
        root: "ر س ل",
        meaning: { en: "a Messenger", ur: "رسول", ar: "رسولاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      },
      {
        arabic: "شَاهِدًا",
        transliteration: "shāhidan",
        root: "ش ه د",
        meaning: { en: "as a witness", ur: "گواہ", ar: "شاهداً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "adjective/ḥāl", case: "accusative" },
        features: { participle: "active" }
      },
      {
        arabic: "عَلَيْكُمْ",
        transliteration: "ʿalaykum",
        root: null,
        meaning: { en: "over you", ur: "تم پر", ar: "عليكم" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "كم", refers_to: "mankind" }
      },
      {
        arabic: "كَمَا",
        transliteration: "kamā",
        root: null,
        meaning: { en: "just as", ur: "جیسے", ar: "كما" },
        pos: "CONJ",
        posLabel: "CONJ",
        grammar: { role: "comparative particle" }
      },
      {
        arabic: "أَرْسَلْنَا",
        transliteration: "arsalnā",
        root: "ر س ل",
        meaning: { en: "We sent", ur: "ہم نے بھیجا", ar: "أرسلنا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "1st", number: "plural", tense: "perfect" },
        features: { form: "IV", root: "رسل" }
      },
      {
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        root: null,
        meaning: { en: "to", ur: "کی طرف", ar: "إلى" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "فِرْعَوْنَ",
        transliteration: "firʿawna",
        root: null,
        meaning: { en: "Pharaoh", ur: "فرعون", ar: "فرعون" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive" },
        features: { proper_noun: true, foreign_origin: true }
      },
      {
        arabic: "رَسُولًا",
        transliteration: "rasūlan",
        root: "ر س ل",
        meaning: { en: "a Messenger", ur: "رسول", ar: "رسولاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 8, to: 11, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'جار + مجرور' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "فَعَصَىٰ فِرْعَوْنُ الرَّسُولَ فَأَخَذْنَاهُ أَخْذًا وَبِيلًا",
    words: [
      {
        arabic: "فَعَصَىٰ",
        transliteration: "fa-ʿaṣā",
        root: "ع ص ي",
        meaning: { en: "But disobeyed", ur: "تو نافرمانی کی", ar: "فعصى" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "I", root: "عصي" }
      },
      {
        arabic: "فِرْعَوْنُ",
        transliteration: "firʿawnu",
        root: null,
        meaning: { en: "Pharaoh", ur: "فرعون نے", ar: "فرعون" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative" },
        features: { proper_noun: true }
      },
      {
        arabic: "الرَّسُولَ",
        transliteration: "al-rasūla",
        root: "ر س ل",
        meaning: { en: "the Messenger", ur: "رسول کی", ar: "الرسول" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative", definite: true }
      },
      {
        arabic: "فَأَخَذْنَاهُ",
        transliteration: "fa-akhadhnāhu",
        root: "أ خ ذ",
        meaning: { en: "so We seized him", ur: "تو ہم نے اسے پکڑا", ar: "فأخذناه" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "1st", number: "plural", tense: "perfect" },
        features: { form: "I", root: "أخذ" },
        pronoun: { attached: "ه", refers_to: "Pharaoh" }
      },
      {
        arabic: "أَخْذًا",
        transliteration: "akhdhan",
        root: "أ خ ذ",
        meaning: { en: "a seizing", ur: "پکڑ", ar: "أخذاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "cognate accusative", case: "accusative" }
      },
      {
        arabic: "وَبِيلًا",
        transliteration: "wabīlan",
        root: "و ب ل",
        meaning: { en: "severe", ur: "سخت", ar: "وبيلاً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adjective", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "فَكَيْفَ تَتَّقُونَ إِن كَفَرْتُمْ يَوْمًا يَجْعَلُ الْوِلْدَانَ شِيبًا",
    words: [
      {
        arabic: "فَكَيْفَ",
        transliteration: "fa-kayfa",
        root: null,
        meaning: { en: "Then how", ur: "تو کیسے", ar: "فكيف" },
        pos: "INTER",
        posLabel: "INTER",
        grammar: { role: "interrogative particle" }
      },
      {
        arabic: "تَتَّقُونَ",
        transliteration: "tattaqūna",
        root: "و ق ي",
        meaning: { en: "will you protect yourselves", ur: "بچو گے", ar: "تتقون" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "2nd", number: "plural", tense: "imperfect", mood: "indicative" },
        features: { form: "VIII", root: "وقي" }
      },
      {
        arabic: "إِن",
        transliteration: "in",
        root: null,
        meaning: { en: "if", ur: "اگر", ar: "إن" },
        pos: "COND",
        posLabel: "COND",
        grammar: { role: "conditional particle" }
      },
      {
        arabic: "كَفَرْتُمْ",
        transliteration: "kafartum",
        root: "ك ف ر",
        meaning: { en: "you disbelieve", ur: "تم کفر کرو", ar: "كفرتم" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "2nd", number: "plural", tense: "perfect" },
        features: { form: "I", root: "كفر" }
      },
      {
        arabic: "يَوْمًا",
        transliteration: "yawman",
        root: "ي و م",
        meaning: { en: "a Day", ur: "ایسے دن سے", ar: "يوماً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      },
      {
        arabic: "يَجْعَلُ",
        transliteration: "yajʿalu",
        root: "ج ع ل",
        meaning: { en: "that will make", ur: "جو کر دے گا", ar: "يجعل" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "imperfect" },
        features: { form: "I", root: "جعل" }
      },
      {
        arabic: "الْوِلْدَانَ",
        transliteration: "al-wildāna",
        root: "و ل د",
        meaning: { en: "the children", ur: "بچوں کو", ar: "الولدان" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "first object", case: "accusative", definite: true }
      },
      {
        arabic: "شِيبًا",
        transliteration: "shīban",
        root: "ش ي ب",
        meaning: { en: "grey-haired", ur: "بوڑھے", ar: "شيباً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "second object", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "السَّمَاءُ مُنفَطِرٌ بِهِ ۚ كَانَ وَعْدُهُ مَفْعُولًا",
    words: [
      {
        arabic: "السَّمَاءُ",
        transliteration: "al-samāʾu",
        root: "س م و",
        meaning: { en: "The heaven", ur: "آسمان", ar: "السماء" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative", definite: true }
      },
      {
        arabic: "مُنفَطِرٌ",
        transliteration: "munfaṭirun",
        root: "ف ط ر",
        meaning: { en: "will split apart", ur: "پھٹ جائے گا", ar: "منفطر" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "predicate", case: "nominative" },
        features: { form: "VII", participle: "active" }
      },
      {
        arabic: "بِهِ",
        transliteration: "bihi",
        root: null,
        meaning: { en: "by it", ur: "اس سے", ar: "به" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ه", refers_to: "Day/its terror" }
      },
      {
        arabic: "كَانَ",
        transliteration: "kāna",
        root: "ك و ن",
        meaning: { en: "Is", ur: "ہے", ar: "كان" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "I", root: "كون" }
      },
      {
        arabic: "وَعْدُهُ",
        transliteration: "waʿduhu",
        root: "و ع د",
        meaning: { en: "His promise", ur: "اس کا وعدہ", ar: "وعده" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of kāna", case: "nominative" },
        pronoun: { attached: "ه", refers_to: "Allah" }
      },
      {
        arabic: "مَفْعُولًا",
        transliteration: "mafʿūlan",
        root: "ف ع ل",
        meaning: { en: "fulfilled", ur: "ہو کر رہنے والا", ar: "مفعولاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "predicate of kāna", case: "accusative" },
        features: { participle: "passive" }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'فعل + فاعل' },
      { from: 4, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "إِنَّ هَـٰذِهِ تَذْكِرَةٌ ۖ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ سَبِيلًا",
    words: [
      {
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        meaning: { en: "Indeed", ur: "بیشک", ar: "إن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle" }
      },
      {
        arabic: "هَـٰذِهِ",
        transliteration: "hādhihi",
        root: null,
        meaning: { en: "this", ur: "یہ", ar: "هذه" },
        pos: "DEM",
        posLabel: "DEM",
        grammar: { role: "demonstrative pronoun", gender: "feminine" }
      },
      {
        arabic: "تَذْكِرَةٌ",
        transliteration: "tadhkiratun",
        root: "ذ ك ر",
        meaning: { en: "is a reminder", ur: "نصیحت ہے", ar: "تذكرة" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "predicate of inna", case: "nominative" },
        features: { form: "II verbal noun" }
      },
      {
        arabic: "فَمَن",
        transliteration: "fa-man",
        root: null,
        meaning: { en: "so whoever", ur: "پس جو چاہے", ar: "فمن" },
        pos: "COND",
        posLabel: "COND",
        grammar: { role: "conditional relative pronoun" }
      },
      {
        arabic: "شَاءَ",
        transliteration: "shāʾa",
        root: "ش ي أ",
        meaning: { en: "wills", ur: "چاہے", ar: "شاء" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "I", root: "شيأ" }
      },
      {
        arabic: "اتَّخَذَ",
        transliteration: "ittakhadha",
        root: "أ خ ذ",
        meaning: { en: "takes", ur: "بنا لے", ar: "اتخذ" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "VIII", root: "أخذ" }
      },
      {
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        root: null,
        meaning: { en: "to", ur: "کی طرف", ar: "إلى" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "رَبِّهِ",
        transliteration: "rabbihi",
        root: "ر ب ب",
        meaning: { en: "his Lord", ur: "اپنے رب", ar: "ربه" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive" },
        pronoun: { attached: "ه", refers_to: "whoever" }
      },
      {
        arabic: "سَبِيلًا",
        transliteration: "sabīlan",
        root: "س ب ل",
        meaning: { en: "a way", ur: "راستہ", ar: "سبيلاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      }
    ],
    structure: {
      relationships: [
      { from: 5, to: 9, label: 'فعل + مفعول به' },
      { from: 6, to: 9, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'جار + مجرور' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "إِنَّ رَبَّكَ يَعْلَمُ أَنَّكَ تَقُومُ أَدْنَىٰ مِن ثُلُثَيِ اللَّيْلِ وَنِصْفَهُ وَثُلُثَهُ وَطَائِفَةٌ مِّنَ الَّذِينَ مَعَكَ ۚ وَاللَّهُ يُقَدِّرُ اللَّيْلَ وَالنَّهَارَ ۚ عَلِمَ أَن لَّن تُحْصُوهُ فَتَابَ عَلَيْكُمْ ۖ فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ ۚ عَلِمَ أَن سَيَكُونُ مِنكُم مَّرْضَىٰ وَآخَرُونَ يَضْرِبُونَ فِي الْأَرْضِ يَبْتَغُونَ مِن فَضْلِ اللَّهِ وَآخَرُونَ يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ ۖ فَاقْرَءُوا مَا تَيَسَّرَ مِنْهُ ۚ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَأَقْرِضُوا اللَّهَ قَرْضًا حَسَنًا ۚ وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا ۚ وَاسْتَغْفِرُوا اللَّهَ ۖ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
    words: [
      {
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        meaning: { en: "Indeed", ur: "بیشک", ar: "إن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle" }
      },
      {
        arabic: "رَبَّكَ",
        transliteration: "rabbaka",
        root: "ر ب ب",
        meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of inna", case: "accusative" },
        pronoun: { attached: "ك", refers_to: "Prophet" }
      },
      {
        arabic: "يَعْلَمُ",
        transliteration: "yaʿlamu",
        root: "ع ل م",
        meaning: { en: "knows", ur: "جانتا ہے", ar: "يعلم" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "imperfect" },
        features: { form: "I", root: "علم" }
      },
      {
        arabic: "أَنَّكَ",
        transliteration: "annaka",
        root: null,
        meaning: { en: "that you", ur: "کہ تم", ar: "أنك" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "subordinating conjunction" },
        pronoun: { attached: "ك", refers_to: "Prophet" }
      },
      {
        arabic: "تَقُومُ",
        transliteration: "taqūmu",
        root: "ق و م",
        meaning: { en: "stand", ur: "کھڑے ہوتے ہو", ar: "تقوم" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "2nd", gender: "masculine", number: "singular", tense: "imperfect" },
        features: { form: "I", root: "قوم" }
      },
      {
        arabic: "أَدْنَىٰ",
        transliteration: "adnā",
        root: "د ن و",
        meaning: { en: "less than", ur: "کم", ar: "أدنى" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adverbial", case: "accusative" },
        features: { degree: "elative" }
      },
      {
        arabic: "مِن",
        transliteration: "min",
        root: null,
        meaning: { en: "than", ur: "سے", ar: "من" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "ثُلُثَيِ",
        transliteration: "thuluthay-i",
        root: "ث ل ث",
        meaning: { en: "two-thirds", ur: "دو تہائی", ar: "ثلثي" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive" }
      },
      {
        arabic: "اللَّيْلِ",
        transliteration: "al-layli",
        root: "ل ي ل",
        meaning: { en: "of the night", ur: "رات کے", ar: "الليل" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive", definite: true }
      },
      {
        arabic: "وَنِصْفَهُ",
        transliteration: "wa-niṣfahu",
        root: "ن ص ف",
        meaning: { en: "and half of it", ur: "اور اس کا آدھا", ar: "ونصفه" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "conjunction + noun", case: "accusative" },
        pronoun: { attached: "ه", refers_to: "night" }
      },
      {
        arabic: "وَثُلُثَهُ",
        transliteration: "wa-thuluthahu",
        root: "ث ل ث",
        meaning: { en: "and a third of it", ur: "اور اس کا تہائی", ar: "وثلثه" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "conjunction + noun", case: "accusative" },
        pronoun: { attached: "ه", refers_to: "night" }
      },
      {
        arabic: "وَطَائِفَةٌ",
        transliteration: "wa-ṭāʾifatun",
        root: "ط و ف",
        meaning: { en: "and a group", ur: "اور ایک گروہ", ar: "وطائفة" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative" }
      },
      {
        arabic: "مِّنَ",
        transliteration: "mina",
        root: null,
        meaning: { en: "of", ur: "میں سے", ar: "من" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "الَّذِينَ",
        transliteration: "alladhīna",
        root: null,
        meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" },
        pos: "REL",
        posLabel: "REL",
        grammar: { role: "relative pronoun", number: "plural" }
      },
      {
        arabic: "مَعَكَ",
        transliteration: "maʿaka",
        root: null,
        meaning: { en: "are with you", ur: "تمہارے ساتھ ہیں", ar: "معك" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ك", refers_to: "Prophet" }
      },
      {
        arabic: "وَاللَّهُ",
        transliteration: "wa-Allāhu",
        root: "أ ل ه",
        meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative" }
      },
      {
        arabic: "يُقَدِّرُ",
        transliteration: "yuqaddiru",
        root: "ق د ر",
        meaning: { en: "determines", ur: "اندازہ لگاتا ہے", ar: "يقدر" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "imperfect" },
        features: { form: "II", root: "قدر" }
      },
      {
        arabic: "اللَّيْلَ",
        transliteration: "al-layla",
        root: "ل ي ل",
        meaning: { en: "the night", ur: "رات کو", ar: "الليل" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative", definite: true }
      },
      {
        arabic: "وَالنَّهَارَ",
        transliteration: "wa-al-nahāra",
        root: "ن ه ر",
        meaning: { en: "and the day", ur: "اور دن کو", ar: "والنهار" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative", definite: true }
      },
      {
        arabic: "عَلِمَ",
        transliteration: "ʿalima",
        root: "ع ل م",
        meaning: { en: "He knew", ur: "اس نے جانا", ar: "علم" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "I", root: "علم" }
      },
      {
        arabic: "أَن",
        transliteration: "an",
        root: null,
        meaning: { en: "that", ur: "کہ", ar: "أن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "subordinating conjunction" }
      },
      {
        arabic: "لَّن",
        transliteration: "lan",
        root: null,
        meaning: { en: "never", ur: "ہرگز نہیں", ar: "لن" },
        pos: "NEG",
        posLabel: "NEG",
        grammar: { role: "emphatic negation particle" }
      },
      {
        arabic: "تُحْصُوهُ",
        transliteration: "tuḥṣūhu",
        root: "ح ص ي",
        meaning: { en: "you count it", ur: "تم اس کا حساب کر سکو", ar: "تحصوه" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "2nd", number: "plural", tense: "imperfect", mood: "subjunctive" },
        features: { form: "IV", root: "حصي" },
        pronoun: { attached: "ه", refers_to: "time/night" }
      },
      {
        arabic: "فَتَابَ",
        transliteration: "fa-tāba",
        root: "ت و ب",
        meaning: { en: "so He has turned", ur: "پس اس نے توجہ فرمائی", ar: "فتاب" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "I", root: "توب" }
      },
      {
        arabic: "عَلَيْكُمْ",
        transliteration: "ʿalaykum",
        root: null,
        meaning: { en: "to you", ur: "تم پر", ar: "عليكم" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "كم", refers_to: "believers" }
      },
      {
        arabic: "فَاقْرَءُوا",
        transliteration: "fa-qraʾū",
        root: "ق ر أ",
        meaning: { en: "so recite", ur: "پس پڑھو", ar: "فاقرءوا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "plural", mood: "imperative" },
        features: { form: "I", root: "قرأ" }
      },
      {
        arabic: "مَا",
        transliteration: "mā",
        root: null,
        meaning: { en: "what", ur: "جو", ar: "ما" },
        pos: "REL",
        posLabel: "REL",
        grammar: { role: "relative pronoun" }
      },
      {
        arabic: "تَيَسَّرَ",
        transliteration: "tayassara",
        root: "ي س ر",
        meaning: { en: "is easy", ur: "آسان ہو", ar: "تيسر" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "V", root: "يسر" }
      },
      {
        arabic: "مِنَ",
        transliteration: "mina",
        root: null,
        meaning: { en: "of", ur: "میں سے", ar: "من" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "الْقُرْآنِ",
        transliteration: "al-qurʾāni",
        root: "ق ر أ",
        meaning: { en: "the Quran", ur: "قرآن", ar: "القرآن" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive", definite: true }
      },
      {
        arabic: "عَلِمَ",
        transliteration: "ʿalima",
        root: "ع ل م",
        meaning: { en: "He knew", ur: "وہ جانتا ہے", ar: "علم" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "I", root: "علم" }
      },
      {
        arabic: "أَن",
        transliteration: "an",
        root: null,
        meaning: { en: "that", ur: "کہ", ar: "أن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "subordinating conjunction" }
      },
      {
        arabic: "سَيَكُونُ",
        transliteration: "sayakūnu",
        root: "ك و ن",
        meaning: { en: "there will be", ur: "ہوں گے", ar: "سيكون" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "future" },
        features: { form: "I", root: "كون", prefix: "س" }
      },
      {
        arabic: "مِنكُم",
        transliteration: "minkum",
        root: null,
        meaning: { en: "among you", ur: "تم میں سے", ar: "منكم" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "كم", refers_to: "believers" }
      },
      {
        arabic: "مَّرْضَىٰ",
        transliteration: "marḍā",
        root: "م ر ض",
        meaning: { en: "sick", ur: "بیمار", ar: "مرضى" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of yakūnu", case: "nominative" }
      },
      {
        arabic: "وَآخَرُونَ",
        transliteration: "wa-ākharūna",
        root: "أ خ ر",
        meaning: { en: "and others", ur: "اور دوسرے", ar: "وآخرون" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative" }
      },
      {
        arabic: "يَضْرِبُونَ",
        transliteration: "yaḍribūna",
        root: "ض ر ب",
        meaning: { en: "traveling", ur: "سفر کرتے ہیں", ar: "يضربون" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", number: "plural", tense: "imperfect", mood: "indicative" },
        features: { form: "I", root: "ضرب", idiom: "ضرب في الأرض = travel" }
      },
      {
        arabic: "فِي",
        transliteration: "fī",
        root: null,
        meaning: { en: "in", ur: "میں", ar: "في" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "الْأَرْضِ",
        transliteration: "al-arḍi",
        root: "أ ر ض",
        meaning: { en: "the land", ur: "زمین", ar: "الأرض" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive", definite: true }
      },
      {
        arabic: "يَبْتَغُونَ",
        transliteration: "yabtaghūna",
        root: "ب غ ي",
        meaning: { en: "seeking", ur: "تلاش کرتے ہیں", ar: "يبتغون" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", number: "plural", tense: "imperfect", mood: "indicative" },
        features: { form: "VIII", root: "بغي" }
      },
      {
        arabic: "مِن",
        transliteration: "min",
        root: null,
        meaning: { en: "of", ur: "سے", ar: "من" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "فَضْلِ",
        transliteration: "faḍli",
        root: "ف ض ل",
        meaning: { en: "the bounty", ur: "فضل", ar: "فضل" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive" }
      },
      {
        arabic: "اللَّهِ",
        transliteration: "Allāhi",
        root: "أ ل ه",
        meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive" }
      },
      {
        arabic: "وَآخَرُونَ",
        transliteration: "wa-ākharūna",
        root: "أ خ ر",
        meaning: { en: "and others", ur: "اور دوسرے", ar: "وآخرون" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject", case: "nominative" }
      },
      {
        arabic: "يُقَاتِلُونَ",
        transliteration: "yuqātilūna",
        root: "ق ت ل",
        meaning: { en: "fight", ur: "جہاد کرتے ہیں", ar: "يقاتلون" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", number: "plural", tense: "imperfect", mood: "indicative" },
        features: { form: "III", root: "قتل" }
      },
      {
        arabic: "فِي",
        transliteration: "fī",
        root: null,
        meaning: { en: "in", ur: "میں", ar: "في" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "سَبِيلِ",
        transliteration: "sabīli",
        root: "س ب ل",
        meaning: { en: "the way", ur: "راستے", ar: "سبيل" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive" }
      },
      {
        arabic: "اللَّهِ",
        transliteration: "Allāhi",
        root: "أ ل ه",
        meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "genitive", case: "genitive" }
      },
      {
        arabic: "فَاقْرَءُوا",
        transliteration: "fa-qraʾū",
        root: "ق ر أ",
        meaning: { en: "so recite", ur: "پس پڑھو", ar: "فاقرءوا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "plural", mood: "imperative" },
        features: { form: "I", root: "قرأ" }
      },
      {
        arabic: "مَا",
        transliteration: "mā",
        root: null,
        meaning: { en: "what", ur: "جو", ar: "ما" },
        pos: "REL",
        posLabel: "REL",
        grammar: { role: "relative pronoun" }
      },
      {
        arabic: "تَيَسَّرَ",
        transliteration: "tayassara",
        root: "ي س ر",
        meaning: { en: "is easy", ur: "آسان ہو", ar: "تيسر" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "3rd", gender: "masculine", number: "singular", tense: "perfect" },
        features: { form: "V", root: "يسر" }
      },
      {
        arabic: "مِنْهُ",
        transliteration: "minhu",
        root: null,
        meaning: { en: "of it", ur: "اس میں سے", ar: "منه" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "prepositional phrase" },
        pronoun: { attached: "ه", refers_to: "Quran" }
      },
      {
        arabic: "وَأَقِيمُوا",
        transliteration: "wa-aqīmū",
        root: "ق و م",
        meaning: { en: "and establish", ur: "اور قائم کرو", ar: "وأقيموا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "plural", mood: "imperative" },
        features: { form: "IV", root: "قوم" }
      },
      {
        arabic: "الصَّلَاةَ",
        transliteration: "al-ṣalāta",
        root: "ص ل و",
        meaning: { en: "the prayer", ur: "نماز", ar: "الصلاة" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative", definite: true }
      },
      {
        arabic: "وَآتُوا",
        transliteration: "wa-ātū",
        root: "أ ت ي",
        meaning: { en: "and give", ur: "اور دو", ar: "وآتوا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "plural", mood: "imperative" },
        features: { form: "IV", root: "أتي" }
      },
      {
        arabic: "الزَّكَاةَ",
        transliteration: "al-zakāta",
        root: "ز ك و",
        meaning: { en: "the zakah", ur: "زکوٰة", ar: "الزكاة" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative", definite: true }
      },
      {
        arabic: "وَأَقْرِضُوا",
        transliteration: "wa-aqriḍū",
        root: "ق ر ض",
        meaning: { en: "and loan", ur: "اور قرض دو", ar: "وأقرضوا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "plural", mood: "imperative" },
        features: { form: "IV", root: "قرض" }
      },
      {
        arabic: "اللَّهَ",
        transliteration: "Allāha",
        root: "أ ل ه",
        meaning: { en: "Allah", ur: "اللہ کو", ar: "الله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      },
      {
        arabic: "قَرْضًا",
        transliteration: "qarḍan",
        root: "ق ر ض",
        meaning: { en: "a loan", ur: "قرض", ar: "قرضاً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "cognate accusative", case: "accusative" }
      },
      {
        arabic: "حَسَنًا",
        transliteration: "ḥasanan",
        root: "ح س ن",
        meaning: { en: "goodly", ur: "اچھا", ar: "حسناً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "adjective", case: "accusative" }
      },
      {
        arabic: "وَمَا",
        transliteration: "wa-mā",
        root: null,
        meaning: { en: "And whatever", ur: "اور جو کچھ", ar: "وما" },
        pos: "REL",
        posLabel: "REL",
        grammar: { role: "relative pronoun" }
      },
      {
        arabic: "تُقَدِّمُوا",
        transliteration: "tuqaddimū",
        root: "ق د م",
        meaning: { en: "you send forth", ur: "تم آگے بھیجو", ar: "تقدموا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "2nd", number: "plural", tense: "imperfect", mood: "jussive" },
        features: { form: "II", root: "قدم" }
      },
      {
        arabic: "لِأَنفُسِكُم",
        transliteration: "li-anfusikum",
        root: "ن ف س",
        meaning: { en: "for yourselves", ur: "اپنے لیے", ar: "لأنفسكم" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "prepositional phrase", case: "genitive" },
        pronoun: { attached: "كم", refers_to: "believers" }
      },
      {
        arabic: "مِّنْ",
        transliteration: "min",
        root: null,
        meaning: { en: "of", ur: "سے", ar: "من" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "خَيْرٍ",
        transliteration: "khayrin",
        root: "خ ي ر",
        meaning: { en: "good", ur: "بھلائی", ar: "خير" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive" }
      },
      {
        arabic: "تَجِدُوهُ",
        transliteration: "tajidūhu",
        root: "و ج د",
        meaning: { en: "you will find it", ur: "اسے پاؤ گے", ar: "تجدوه" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "verb", person: "2nd", number: "plural", tense: "imperfect", mood: "jussive" },
        features: { form: "I", root: "وجد" },
        pronoun: { attached: "ه", refers_to: "good" }
      },
      {
        arabic: "عِندَ",
        transliteration: "ʿinda",
        root: null,
        meaning: { en: "with", ur: "کے پاس", ar: "عند" },
        pos: "PREP",
        posLabel: "PREP",
        grammar: { role: "preposition" }
      },
      {
        arabic: "اللَّهِ",
        transliteration: "Allāhi",
        root: "أ ل ه",
        meaning: { en: "Allah", ur: "اللہ", ar: "الله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "object of preposition", case: "genitive" }
      },
      {
        arabic: "هُوَ",
        transliteration: "huwa",
        root: null,
        meaning: { en: "It is", ur: "وہ", ar: "هو" },
        pos: "PRON",
        posLabel: "PRON",
        grammar: { role: "emphatic pronoun", person: "3rd", gender: "masculine", number: "singular" }
      },
      {
        arabic: "خَيْرًا",
        transliteration: "khayran",
        root: "خ ي ر",
        meaning: { en: "better", ur: "بہتر", ar: "خيراً" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "predicate", case: "accusative" }
      },
      {
        arabic: "وَأَعْظَمَ",
        transliteration: "wa-aʿẓama",
        root: "ع ظ م",
        meaning: { en: "and greater", ur: "اور عظیم تر", ar: "وأعظم" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "predicate", case: "accusative" },
        features: { degree: "elative" }
      },
      {
        arabic: "أَجْرًا",
        transliteration: "ajran",
        root: "أ ج ر",
        meaning: { en: "in reward", ur: "اجر میں", ar: "أجراً" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "specification accusative", case: "accusative" }
      },
      {
        arabic: "وَاسْتَغْفِرُوا",
        transliteration: "wa-staghfirū",
        root: "غ ف ر",
        meaning: { en: "And seek forgiveness", ur: "اور مغفرت مانگو", ar: "واستغفروا" },
        pos: "V",
        posLabel: "V",
        grammar: { role: "imperative", person: "2nd", number: "plural", mood: "imperative" },
        features: { form: "X", root: "غفر" }
      },
      {
        arabic: "اللَّهَ",
        transliteration: "Allāha",
        root: "أ ل ه",
        meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "direct object", case: "accusative" }
      },
      {
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        meaning: { en: "Indeed", ur: "بیشک", ar: "إن" },
        pos: "PART",
        posLabel: "PART",
        grammar: { role: "emphatic particle" }
      },
      {
        arabic: "اللَّهَ",
        transliteration: "Allāha",
        root: "أ ل ه",
        meaning: { en: "Allah", ur: "اللہ", ar: "الله" },
        pos: "N",
        posLabel: "N",
        grammar: { role: "subject of inna", case: "accusative" }
      },
      {
        arabic: "غَفُورٌ",
        transliteration: "ghafūrun",
        root: "غ ف ر",
        meaning: { en: "is Forgiving", ur: "بخشنے والا ہے", ar: "غفور" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "predicate", case: "nominative" },
        features: { pattern: "faʿūl", intensive: true }
      },
      {
        arabic: "رَّحِيمٌ",
        transliteration: "raḥīmun",
        root: "ر ح م",
        meaning: { en: "Merciful", ur: "رحم والا", ar: "رحيم" },
        pos: "ADJ",
        posLabel: "ADJ",
        grammar: { role: "predicate", case: "nominative" },
        features: { pattern: "faʿīl", intensive: true }
      }
    ],
    structure: {
      relationships: [
      { from: 7, to: 8, label: 'جار + مجرور' },
      { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
      { from: 17, to: 18, label: 'فعل + مفعول به' },
      { from: 22, to: 23, label: 'نفی + فعل' },
      { from: 27, to: 28, label: 'موصول + صلة' },
      { from: 29, to: 30, label: 'جار + مجرور' },
      { from: 38, to: 39, label: 'جار + مجرور' },
      { from: 41, to: 42, label: 'جار + مجرور' },
      { from: 42, to: 43, label: 'مضاف + مضاف إليه' },
      { from: 46, to: 47, label: 'جار + مجرور' },
      { from: 47, to: 48, label: 'مضاف + مضاف إليه' },
      { from: 50, to: 51, label: 'موصول + صلة' },
      { from: 53, to: 54, label: 'فعل + مفعول به' },
      { from: 55, to: 56, label: 'فعل + مفعول به' },
      { from: 57, to: 58, label: 'فعل + مفعول به' },
      { from: 59, to: 60, label: 'موصوف + صفت' },
      { from: 61, to: 62, label: 'موصول + صلة' },
      { from: 64, to: 65, label: 'جار + مجرور' },
      { from: 67, to: 68, label: 'جار + مجرور' },
      { from: 69, to: 70, label: 'مبتدأ + خبر' },
      { from: 73, to: 74, label: 'فعل + مفعول به' }
      ]
    }
  }
};

export default TREEBANK_DATA;
