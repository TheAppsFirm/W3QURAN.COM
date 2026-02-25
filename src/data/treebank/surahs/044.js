/**
 * Surah Ad-Dukhan (The Smoke) - Surah 44
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 44,
  surahName: "Ad-Dukhan",
  surahNameArabic: "الدخان",
  totalAyahs: 59,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "حم",
    words: [
      { arabic: "حم", transliteration: "ḥā mīm", meaning: { en: "Ha Meem", ur: "حٰم", ar: "حم" }, pos: "INIT", posLabel: "INIT", grammar: { type: "muqatta'at", note: "disconnected letters" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "وَالْكِتَابِ الْمُبِينِ",
    words: [
      { arabic: "وَالْكِتَابِ", transliteration: "wal-kitābi", meaning: { en: "By the clear Book", ur: "قسم ہے واضح کتاب کی", ar: "والكتاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ك-ت-ب" } },
      { arabic: "الْمُبِينِ", transliteration: "al-mubīni", meaning: { en: "the clear", ur: "روشن", ar: "المبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "أَنزَلْنَاهُ", transliteration: "anzalnāhu", meaning: { en: "sent it down", ur: "اسے نازل کیا", ar: "أنزلناه" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "لَيْلَةٍ", transliteration: "laylatin", meaning: { en: "a night", ur: "ایک رات", ar: "ليلة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مُّبَارَكَةٍ", transliteration: "mubārakatin", meaning: { en: "blessed", ur: "برکت والی", ar: "مباركة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ر-ك" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "indeed We", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "are", ur: "ہیں", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مُنذِرِينَ", transliteration: "mundhirīna", meaning: { en: "warners", ur: "ڈرانے والے", ar: "منذرين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'حال' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ",
    words: [
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "Therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "يُفْرَقُ", transliteration: "yufraqu", meaning: { en: "is made distinct", ur: "جدا کیا جاتا ہے", ar: "يفرق" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ف-ر-ق" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "أَمْرٍ", transliteration: "amrin", meaning: { en: "matter", ur: "معاملہ", ar: "أمر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-م-ر" } },
      { arabic: "حَكِيمٍ", transliteration: "ḥakīmin", meaning: { en: "wise", ur: "حکمت والا", ar: "حكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ح-ك-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "أَمْرًا مِّنْ عِندِنَا إِنَّا كُنَّا مُرْسِلِينَ",
    words: [
      { arabic: "أَمْرًا", transliteration: "amran", meaning: { en: "A command", ur: "حکم", ar: "أمرا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-م-ر" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "عِندِنَا", transliteration: "ʿindinā", meaning: { en: "Us", ur: "ہماری", ar: "عندنا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed We", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "are", ur: "ہیں", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مُرْسِلِينَ", transliteration: "mursilīna", meaning: { en: "senders of Messengers", ur: "بھیجنے والے", ar: "مرسلين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ر-س-ل" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'حال' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "رَحْمَةً مِّن رَّبِّكَ إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ",
    words: [
      { arabic: "رَحْمَةً", transliteration: "raḥmatan", meaning: { en: "As mercy", ur: "رحمت کے طور پر", ar: "رحمة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-ح-م" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "رَّبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "تیرے رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He", ur: "بیشک وہ", ar: "إنه" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "السَّمِيعُ", transliteration: "al-samīʿu", meaning: { en: "the All-Hearing", ur: "سننے والا", ar: "السميع" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "س-م-ع" } },
      { arabic: "الْعَلِيمُ", transliteration: "al-ʿalīmu", meaning: { en: "the All-Knowing", ur: "جاننے والا", ar: "العليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا إِن كُنتُم مُّوقِنِينَ",
    words: [
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "Lord", ur: "رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں کا", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "is between them", ur: "ان کے درمیان ہے", ar: "بينهما" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مُّوقِنِينَ", transliteration: "mūqinīna", meaning: { en: "certain", ur: "یقین رکھنے والے", ar: "موقنين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ي-ق-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'حال' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "لَا إِلَٰهَ إِلَّا هُوَ يُحْيِي وَيُمِيتُ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "There is no", ur: "کوئی نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "lā nafiya lil-jins" } },
      { arabic: "إِلَٰهَ", transliteration: "ilāha", meaning: { en: "god", ur: "معبود", ar: "إله" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ل-ه" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { type: "exception" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "Him", ur: "اس کے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "يُحْيِي", transliteration: "yuḥyī", meaning: { en: "He gives life", ur: "زندہ کرتا ہے", ar: "يحيي" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "وَيُمِيتُ", transliteration: "wayumītu", meaning: { en: "and causes death", ur: "اور مارتا ہے", ar: "ويميت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "م-و-ت" } },
      { arabic: "رَبُّكُمْ", transliteration: "rabbukum", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "وَرَبُّ", transliteration: "warabbu", meaning: { en: "and the Lord", ur: "اور رب ہے", ar: "ورب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "آبَائِكُمُ", transliteration: "ābāʾikumu", meaning: { en: "of your forefathers", ur: "تمہارے باپ دادا کا", ar: "آبائكم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīna", meaning: { en: "the former", ur: "اگلوں کا", ar: "الأولين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'عطف' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "بَلْ هُمْ فِي شَكٍّ يَلْعَبُونَ",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "But", ur: "بلکہ", ar: "بل" }, pos: "RET", posLabel: "RET", grammar: { type: "retraction" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they are", ur: "وہ ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "شَكٍّ", transliteration: "shakkin", meaning: { en: "doubt", ur: "شک", ar: "شك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-ك-ك" } },
      { arabic: "يَلْعَبُونَ", transliteration: "yalʿabūna", meaning: { en: "playing", ur: "کھیلتے ہیں", ar: "يلعبون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ل-ع-ب" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُّبِينٍ",
    words: [
      { arabic: "فَارْتَقِبْ", transliteration: "fartaqib", meaning: { en: "Then watch", ur: "پس انتظار کرو", ar: "فارتقب" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", mood: "imperative", root: "ر-ق-ب" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "for the Day", ur: "اس دن کا جب", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "تَأْتِي", transliteration: "taʾtī", meaning: { en: "will bring", ur: "لائے گا", ar: "تأتي" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ت-ي" } },
      { arabic: "السَّمَاءُ", transliteration: "al-samāʾu", meaning: { en: "the sky", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "بِدُخَانٍ", transliteration: "bidukhānin", meaning: { en: "with visible smoke", ur: "واضح دھواں", ar: "بدخان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "د-خ-ن" } },
      { arabic: "مُّبِينٍ", transliteration: "mubīnin", meaning: { en: "clear", ur: "صاف", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "يَغْشَى النَّاسَ هَٰذَا عَذَابٌ أَلِيمٌ",
    words: [
      { arabic: "يَغْشَى", transliteration: "yaghshā", meaning: { en: "Covering", ur: "ڈھانپ لے گا", ar: "يغشى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ش-ي" } },
      { arabic: "النَّاسَ", transliteration: "al-nāsa", meaning: { en: "the people", ur: "لوگوں کو", ar: "الناس" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-و-س" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "a punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", meaning: { en: "painful", ur: "دردناک", ar: "أليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "أ-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "رَّبَّنَا اكْشِفْ عَنَّا الْعَذَابَ إِنَّا مُؤْمِنُونَ",
    words: [
      { arabic: "رَّبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "اے ہمارے رب", ar: "ربنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ب-ب" } },
      { arabic: "اكْشِفْ", transliteration: "ikshif", meaning: { en: "remove", ur: "دور کر", ar: "اكشف" }, pos: "V", posLabel: "V", grammar: { mood: "imperative", root: "ك-ش-ف" } },
      { arabic: "عَنَّا", transliteration: "ʿannā", meaning: { en: "from us", ur: "ہم سے", ar: "عنا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "الْعَذَابَ", transliteration: "al-ʿadhāba", meaning: { en: "the punishment", ur: "عذاب", ar: "العذاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "indeed we are", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "مُؤْمِنُونَ", transliteration: "mu'minūna", meaning: { en: "believers", ur: "ایمان والے", ar: "مؤمنون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "أ-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'اسم إن + خبر إن' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "أَنَّىٰ لَهُمُ الذِّكْرَىٰ وَقَدْ جَاءَهُمْ رَسُولٌ مُّبِينٌ",
    words: [
      { arabic: "أَنَّىٰ", transliteration: "annā", meaning: { en: "How can there be", ur: "کہاں سے", ar: "أنى" }, pos: "INT", posLabel: "INT", grammar: { type: "interrogative" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "الذِّكْرَىٰ", transliteration: "al-dhikrā", meaning: { en: "the reminder", ur: "نصیحت", ar: "الذكرى" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ذ-ك-ر" } },
      { arabic: "وَقَدْ", transliteration: "waqad", meaning: { en: "and already", ur: "اور یقیناً", ar: "وقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "جَاءَهُمْ", transliteration: "jā'ahum", meaning: { en: "came to them", ur: "ان کے پاس آیا", ar: "جاءهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "رَسُولٌ", transliteration: "rasūlun", meaning: { en: "a messenger", ur: "رسول", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-س-ل" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "ثُمَّ تَوَلَّوْا عَنْهُ وَقَالُوا مُعَلَّمٌ مَّجْنُونٌ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "conjunction" } },
      { arabic: "تَوَلَّوْا", transliteration: "tawallaw", meaning: { en: "they turned away", ur: "وہ پھر گئے", ar: "تولوا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "و-ل-ي" } },
      { arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "from him", ur: "اس سے", ar: "عنه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَقَالُوا", transliteration: "waqālū", meaning: { en: "and said", ur: "اور کہا", ar: "وقالوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "مُعَلَّمٌ", transliteration: "muʿallamun", meaning: { en: "One taught", ur: "سکھایا ہوا", ar: "معلم" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ع-ل-م" } },
      { arabic: "مَّجْنُونٌ", transliteration: "majnūnun", meaning: { en: "a madman", ur: "دیوانہ", ar: "مجنون" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ج-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "إِنَّا كَاشِفُو الْعَذَابِ قَلِيلًا إِنَّكُمْ عَائِدُونَ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed We will", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "كَاشِفُو", transliteration: "kāshifū", meaning: { en: "will remove", ur: "ہٹانے والے ہیں", ar: "كاشفو" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ك-ش-ف" } },
      { arabic: "الْعَذَابِ", transliteration: "al-ʿadhābi", meaning: { en: "the punishment", ur: "عذاب", ar: "العذاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ذ-ب" } },
      { arabic: "قَلِيلًا", transliteration: "qalīlan", meaning: { en: "a little", ur: "تھوڑا سا", ar: "قليلا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ق-ل-ل" } },
      { arabic: "إِنَّكُمْ", transliteration: "innakum", meaning: { en: "indeed you will", ur: "بیشک تم", ar: "إنكم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "عَائِدُونَ", transliteration: "ʿā'idūna", meaning: { en: "return (to disbelief)", ur: "لوٹنے والے ہو", ar: "عائدون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ع-و-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'اسم إن + خبر إن' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "يَوْمَ نَبْطِشُ الْبَطْشَةَ الْكُبْرَىٰ إِنَّا مُنتَقِمُونَ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "نَبْطِشُ", transliteration: "nabtishu", meaning: { en: "We will seize", ur: "ہم پکڑیں گے", ar: "نبطش" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-ط-ش" } },
      { arabic: "الْبَطْشَةَ", transliteration: "al-batshata", meaning: { en: "the great seizing", ur: "بڑی پکڑ", ar: "البطشة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ط-ش" } },
      { arabic: "الْكُبْرَىٰ", transliteration: "al-kubrā", meaning: { en: "the greatest", ur: "سب سے بڑی", ar: "الكبرى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ك-ب-ر" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "indeed We", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "مُنتَقِمُونَ", transliteration: "muntaqimūna", meaning: { en: "will take retribution", ur: "بدلہ لینے والے", ar: "منتقمون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ن-ق-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول مطلق' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'اسم إن + خبر إن' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ فِرْعَوْنَ وَجَاءَهُمْ رَسُولٌ كَرِيمٌ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "فَتَنَّا", transliteration: "fatannā", meaning: { en: "We tested", ur: "ہم نے آزمایا", ar: "فتنا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ت-ن" } },
      { arabic: "قَبْلَهُمْ", transliteration: "qablahum", meaning: { en: "before them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "قَوْمَ", transliteration: "qawma", meaning: { en: "the people of", ur: "قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-م" } },
      { arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: { en: "Pharaoh", ur: "فرعون", ar: "فرعون" }, pos: "PN", posLabel: "PN", grammar: { case: "genitive" } },
      { arabic: "وَجَاءَهُمْ", transliteration: "wajā'ahum", meaning: { en: "and there came to them", ur: "اور ان کے پاس آیا", ar: "وجاءهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "رَسُولٌ", transliteration: "rasūlun", meaning: { en: "a messenger", ur: "رسول", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-س-ل" } },
      { arabic: "كَرِيمٌ", transliteration: "karīmun", meaning: { en: "noble", ur: "بزرگ", ar: "كريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ك-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "أَنْ أَدُّوا إِلَيَّ عِبَادَ اللَّهِ إِنِّي لَكُمْ رَسُولٌ أَمِينٌ",
    words: [
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "That", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive" } },
      { arabic: "أَدُّوا", transliteration: "addū", meaning: { en: "deliver/give", ur: "حوالے کرو", ar: "أدوا" }, pos: "V", posLabel: "V", grammar: { form: "I", mood: "imperative", root: "أ-د-ي" } },
      { arabic: "إِلَيَّ", transliteration: "ilayya", meaning: { en: "to me", ur: "میرے حوالے", ar: "إلي" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "عِبَادَ", transliteration: "ʿibāda", meaning: { en: "the servants of", ur: "بندوں کو", ar: "عباد" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ب-د" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "PN", posLabel: "PN", grammar: { case: "genitive" } },
      { arabic: "إِنِّي", transliteration: "innī", meaning: { en: "indeed I am", ur: "بیشک میں", ar: "إني" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "to you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "رَسُولٌ", transliteration: "rasūlun", meaning: { en: "a messenger", ur: "رسول", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-س-ل" } },
      { arabic: "أَمِينٌ", transliteration: "amīnun", meaning: { en: "trustworthy", ur: "امانتدار", ar: "أمين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "أ-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَأَن لَّا تَعْلُوا عَلَى اللَّهِ إِنِّي آتِيكُم بِسُلْطَانٍ مُّبِينٍ",
    words: [
      { arabic: "وَأَن", transliteration: "wa'an", meaning: { en: "And that", ur: "اور یہ کہ", ar: "وأن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "conjunction" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "do not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibition" } },
      { arabic: "تَعْلُوا", transliteration: "taʿlū", meaning: { en: "be haughty", ur: "تکبر کرو", ar: "تعلوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-و" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "against", ur: "کے خلاف", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "PN", posLabel: "PN", grammar: { case: "genitive" } },
      { arabic: "إِنِّي", transliteration: "innī", meaning: { en: "indeed I", ur: "بیشک میں", ar: "إني" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "آتِيكُم", transliteration: "ātīkum", meaning: { en: "bring you", ur: "لاتا ہوں تمہارے پاس", ar: "آتيكم" }, pos: "AP+PRON", posLabel: "AP+PRON", grammar: { root: "أ-ت-ي" } },
      { arabic: "بِسُلْطَانٍ", transliteration: "bisulṭānin", meaning: { en: "with an authority", ur: "دلیل کے ساتھ", ar: "بسلطان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-ل-ط" } },
      { arabic: "مُّبِينٍ", transliteration: "mubīnin", meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نهي + فعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَإِنِّي عُذْتُ بِرَبِّي وَرَبِّكُمْ أَن تَرْجُمُونِ",
    words: [
      { arabic: "وَإِنِّي", transliteration: "wa'innī", meaning: { en: "And indeed I", ur: "اور بیشک میں", ar: "وإني" }, pos: "CONJ+ACC+PRON", posLabel: "CONJ+ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "عُذْتُ", transliteration: "ʿudhtu", meaning: { en: "seek refuge", ur: "پناہ لیتا ہوں", ar: "عذت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-و-ذ" } },
      { arabic: "بِرَبِّي", transliteration: "birabbī", meaning: { en: "in my Lord", ur: "اپنے رب کی", ar: "بربي" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "وَرَبِّكُمْ", transliteration: "warabbikum", meaning: { en: "and your Lord", ur: "اور تمہارے رب", ar: "وربكم" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "اس سے کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive" } },
      { arabic: "تَرْجُمُونِ", transliteration: "tarjumūni", meaning: { en: "you stone me", ur: "تم مجھے سنگسار کرو", ar: "ترجمون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-ج-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'حرف مصدری + فعل' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "وَإِن لَّمْ تُؤْمِنُوا لِي فَاعْتَزِلُونِ",
    words: [
      { arabic: "وَإِن", transliteration: "wa'in", meaning: { en: "And if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive" } },
      { arabic: "تُؤْمِنُوا", transliteration: "tu'minū", meaning: { en: "you believe", ur: "تم ایمان لاؤ", ar: "تؤمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "لِي", transliteration: "lī", meaning: { en: "in me", ur: "مجھ پر", ar: "لي" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "فَاعْتَزِلُونِ", transliteration: "fa'tazilūni", meaning: { en: "then leave me alone", ur: "تو مجھ سے الگ رہو", ar: "فاعتزلون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", mood: "imperative", root: "ع-ز-ل" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "فَدَعَا رَبَّهُ أَنَّ هَٰؤُلَاءِ قَوْمٌ مُّجْرِمُونَ",
    words: [
      { arabic: "فَدَعَا", transliteration: "fadaʿā", meaning: { en: "Then he called", ur: "پس اس نے پکارا", ar: "فدعا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "رَبَّهُ", transliteration: "rabbahu", meaning: { en: "his Lord", ur: "اپنے رب کو", ar: "ربه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ب-ب" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "هَٰؤُلَاءِ", transliteration: "hā'ulā'i", meaning: { en: "these", ur: "یہ لوگ", ar: "هؤلاء" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "قَوْمٌ", transliteration: "qawmun", meaning: { en: "a people", ur: "قوم ہیں", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-م" } },
      { arabic: "مُّجْرِمُونَ", transliteration: "mujrimūna", meaning: { en: "criminal", ur: "مجرم", ar: "مجرمون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ج-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "فَأَسْرِ بِعِبَادِي لَيْلًا إِنَّكُم مُّتَّبَعُونَ",
    words: [
      { arabic: "فَأَسْرِ", transliteration: "fa'asri", meaning: { en: "Then set out", ur: "پس چلا لے جا", ar: "فأسر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", mood: "imperative", root: "س-ر-ي" } },
      { arabic: "بِعِبَادِي", transliteration: "biʿibādī", meaning: { en: "with My servants", ur: "میرے بندوں کو", ar: "بعبادي" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ع-ب-د" } },
      { arabic: "لَيْلًا", transliteration: "laylan", meaning: { en: "by night", ur: "رات کو", ar: "ليلا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِنَّكُم", transliteration: "innakum", meaning: { en: "indeed you will be", ur: "بیشک تم", ar: "إنكم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "مُّتَّبَعُونَ", transliteration: "muttabaʿūna", meaning: { en: "followed", ur: "تعاقب کیے جاؤ گے", ar: "متبعون" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", number: "plural", root: "ت-ب-ع" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'اسم إن + خبر إن' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "وَاتْرُكِ الْبَحْرَ رَهْوًا إِنَّهُمْ جُندٌ مُّغْرَقُونَ",
    words: [
      { arabic: "وَاتْرُكِ", transliteration: "watruki", meaning: { en: "And leave", ur: "اور چھوڑ دے", ar: "واترك" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { mood: "imperative", root: "ت-ر-ك" } },
      { arabic: "الْبَحْرَ", transliteration: "al-baḥra", meaning: { en: "the sea", ur: "سمندر کو", ar: "البحر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ح-ر" } },
      { arabic: "رَهْوًا", transliteration: "rahwan", meaning: { en: "still/parted", ur: "کھلا ہوا", ar: "رهوا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "indeed they are", ur: "بیشک وہ", ar: "إنهم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "جُندٌ", transliteration: "jundun", meaning: { en: "a host", ur: "لشکر ہیں", ar: "جند" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ن-د" } },
      { arabic: "مُّغْرَقُونَ", transliteration: "mughraqūna", meaning: { en: "to be drowned", ur: "ڈبوئے جانے والے", ar: "مغرقون" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", number: "plural", root: "غ-ر-ق" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "كَمْ تَرَكُوا مِن جَنَّاتٍ وَعُيُونٍ",
    words: [
      { arabic: "كَمْ", transliteration: "kam", meaning: { en: "How many", ur: "کتنے", ar: "كم" }, pos: "INT", posLabel: "INT", grammar: { type: "exclamatory" } },
      { arabic: "تَرَكُوا", transliteration: "tarakū", meaning: { en: "they left behind", ur: "انہوں نے چھوڑے", ar: "تركوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ت-ر-ك" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "کتنے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "gardens", ur: "باغات", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ج-ن-ن" } },
      { arabic: "وَعُيُونٍ", transliteration: "waʿuyūnin", meaning: { en: "and springs", ur: "اور چشمے", ar: "وعيون" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural", root: "ع-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "وَزُرُوعٍ وَمَقَامٍ كَرِيمٍ",
    words: [
      { arabic: "وَزُرُوعٍ", transliteration: "wazurūʿin", meaning: { en: "And crops", ur: "اور کھیتیاں", ar: "وزروع" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ز-ر-ع" } },
      { arabic: "وَمَقَامٍ", transliteration: "wamaqāmin", meaning: { en: "and a noble position", ur: "اور عالی شان مقام", ar: "ومقام" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ق-و-م" } },
      { arabic: "كَرِيمٍ", transliteration: "karīmin", meaning: { en: "noble", ur: "عالی شان", ar: "كريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ك-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "وَنَعْمَةٍ كَانُوا فِيهَا فَاكِهِينَ",
    words: [
      { arabic: "وَنَعْمَةٍ", transliteration: "wanaʿmatin", meaning: { en: "And comfort", ur: "اور نعمت", ar: "ونعمة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ع-م" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they were", ur: "وہ تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "فَاكِهِينَ", transliteration: "fākihīna", meaning: { en: "enjoying", ur: "لطف اندوز", ar: "فاكهين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ف-ك-ه" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل ناقص + خبر' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "كَذَٰلِكَ وَأَوْرَثْنَاهَا قَوْمًا آخَرِينَ",
    words: [
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "اسی طرح", ar: "كذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "وَأَوْرَثْنَاهَا", transliteration: "wa'awrathnāhā", meaning: { en: "and We caused to inherit it", ur: "اور ہم نے وراثت میں دیا", ar: "وأورثناها" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "و-ر-ث" } },
      { arabic: "قَوْمًا", transliteration: "qawman", meaning: { en: "to another people", ur: "ایک اور قوم کو", ar: "قوما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-م" } },
      { arabic: "آخَرِينَ", transliteration: "ākharīna", meaning: { en: "other", ur: "دوسری", ar: "آخرين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ وَمَا كَانُوا مُنظَرِينَ",
    words: [
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "And not", ur: "تو نہ", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "بَكَتْ", transliteration: "bakat", meaning: { en: "wept", ur: "روئے", ar: "بكت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-ك-ي" } },
      { arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "for them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "السَّمَاءُ", transliteration: "al-samā'u", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَالْأَرْضُ", transliteration: "wal-arḍu", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہ", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were they", ur: "وہ تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مُنظَرِينَ", transliteration: "munẓarīna", meaning: { en: "given respite", ur: "مہلت دیے جانے والے", ar: "منظرين" }, pos: "PP", posLabel: "PP", grammar: { case: "accusative", number: "plural", root: "ن-ظ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'عطف' },
        { from: 7, to: 8, label: 'فعل ناقص + خبر' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "وَلَقَدْ نَجَّيْنَا بَنِي إِسْرَائِيلَ مِنَ الْعَذَابِ الْمُهِينِ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "نَجَّيْنَا", transliteration: "najjaynā", meaning: { en: "We saved", ur: "ہم نے بچایا", ar: "نجينا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ن-ج-و" } },
      { arabic: "بَنِي", transliteration: "banī", meaning: { en: "the Children of", ur: "بنی", ar: "بني" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ن-ي" } },
      { arabic: "إِسْرَائِيلَ", transliteration: "isrā'īla", meaning: { en: "Israel", ur: "اسرائیل", ar: "إسرائيل" }, pos: "PN", posLabel: "PN", grammar: { case: "genitive" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الْعَذَابِ", transliteration: "al-ʿadhābi", meaning: { en: "the punishment", ur: "عذاب", ar: "العذاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ذ-ب" } },
      { arabic: "الْمُهِينِ", transliteration: "al-muhīni", meaning: { en: "the humiliating", ur: "ذلیل کرنے والے", ar: "المهين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ه-و-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "مِن فِرْعَوْنَ إِنَّهُ كَانَ عَالِيًا مِّنَ الْمُسْرِفِينَ",
    words: [
      { arabic: "مِن", transliteration: "min", meaning: { en: "From", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: { en: "Pharaoh", ur: "فرعون", ar: "فرعون" }, pos: "PN", posLabel: "PN", grammar: { case: "genitive" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "indeed he", ur: "بیشک وہ", ar: "إنه" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "عَالِيًا", transliteration: "ʿāliyan", meaning: { en: "haughty", ur: "سرکش", ar: "عاليا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ع-ل-و" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "among", ur: "میں سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْمُسْرِفِينَ", transliteration: "al-musrifīna", meaning: { en: "the transgressors", ur: "حد سے گزرنے والوں", ar: "المسرفين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "س-ر-ف" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل ناقص + خبر' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "وَلَقَدِ اخْتَرْنَاهُمْ عَلَىٰ عِلْمٍ عَلَى الْعَالَمِينَ",
    words: [
      { arabic: "وَلَقَدِ", transliteration: "walaqadi", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "اخْتَرْنَاهُمْ", transliteration: "ikhtarnāhum", meaning: { en: "We chose them", ur: "ہم نے انہیں چنا", ar: "اخترناهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "VIII", root: "خ-ي-ر" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "with", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "عِلْمٍ", transliteration: "ʿilmin", meaning: { en: "knowledge", ur: "علم", ar: "علم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ل-م" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْعَالَمِينَ", transliteration: "al-ʿālamīna", meaning: { en: "the worlds/peoples", ur: "تمام جہانوں", ar: "العالمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "وَآتَيْنَاهُم مِّنَ الْآيَاتِ مَا فِيهِ بَلَاءٌ مُّبِينٌ",
    words: [
      { arabic: "وَآتَيْنَاهُم", transliteration: "wa'ātaynāhum", meaning: { en: "And We gave them", ur: "اور ہم نے انہیں دیا", ar: "وآتيناهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْآيَاتِ", transliteration: "al-āyāti", meaning: { en: "the signs", ur: "نشانیوں", ar: "الآيات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "أ-ي-ي" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "that which", ur: "جس میں", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in which was", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "بَلَاءٌ", transliteration: "balā'un", meaning: { en: "a trial", ur: "آزمائش", ar: "بلاء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-ل-و" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "clear", ur: "کھلی", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "إِنَّ هَٰؤُلَاءِ لَيَقُولُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "هَٰؤُلَاءِ", transliteration: "hā'ulā'i", meaning: { en: "these people", ur: "یہ لوگ", ar: "هؤلاء" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "لَيَقُولُونَ", transliteration: "layaqūlūna", meaning: { en: "are saying", ur: "کہتے ہیں", ar: "ليقولون" }, pos: "EMPH+V", posLabel: "EMPH+V", grammar: { form: "I", root: "ق-و-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'حرف + اسم إن' },
        { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "إِنْ هِيَ إِلَّا مَوْتَتُنَا الْأُولَىٰ وَمَا نَحْنُ بِمُنشَرِينَ",
    words: [
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں", ar: "إن" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "هِيَ", transliteration: "hiya", meaning: { en: "it is", ur: "یہ ہے", ar: "هي" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", gender: "feminine" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { type: "exception" } },
      { arabic: "مَوْتَتُنَا", transliteration: "mawtatunā", meaning: { en: "our death", ur: "ہماری موت", ar: "موتتنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "م-و-ت" } },
      { arabic: "الْأُولَىٰ", transliteration: "al-ūlā", meaning: { en: "the first", ur: "پہلی", ar: "الأولى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "we are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st", number: "plural" } },
      { arabic: "بِمُنشَرِينَ", transliteration: "bimunsharīna", meaning: { en: "to be resurrected", ur: "دوبارہ اٹھائے جانے والے", ar: "بمنشرين" }, pos: "P+PP", posLabel: "P+PP", grammar: { case: "genitive", number: "plural", root: "ن-ش-ر" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "فَأْتُوا بِآبَائِنَا إِن كُنتُمْ صَادِقِينَ",
    words: [
      { arabic: "فَأْتُوا", transliteration: "fa'tū", meaning: { en: "Then bring", ur: "تو لے آؤ", ar: "فأتوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { mood: "imperative", root: "أ-ت-ي" } },
      { arabic: "بِآبَائِنَا", transliteration: "bi'ābā'inā", meaning: { en: "our forefathers", ur: "ہمارے باپ دادا کو", ar: "بآبائنا" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "أ-ب-و" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "صَادِقِينَ", transliteration: "ṣādiqīna", meaning: { en: "truthful", ur: "سچے", ar: "صادقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ص-د-ق" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل ناقص + خبر' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "أَهُمْ خَيْرٌ أَمْ قَوْمُ تُبَّعٍ وَالَّذِينَ مِن قَبْلِهِمْ أَهْلَكْنَاهُمْ إِنَّهُمْ كَانُوا مُجْرِمِينَ",
    words: [
      { arabic: "أَهُمْ", transliteration: "ahum", meaning: { en: "Are they", ur: "کیا یہ", ar: "أهم" }, pos: "INT+PRON", posLabel: "INT+PRON", grammar: { type: "interrogative" } },
      { arabic: "خَيْرٌ", transliteration: "khayrun", meaning: { en: "better", ur: "بہتر ہیں", ar: "خير" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "خ-ي-ر" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunction" } },
      { arabic: "قَوْمُ", transliteration: "qawmu", meaning: { en: "people of", ur: "قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-م" } },
      { arabic: "تُبَّعٍ", transliteration: "tubbaʿin", meaning: { en: "Tubba", ur: "تبع", ar: "تبع" }, pos: "PN", posLabel: "PN", grammar: { case: "genitive" } },
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "and those", ur: "اور وہ جو", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِهِمْ", transliteration: "qablihim", meaning: { en: "before them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "أَهْلَكْنَاهُمْ", transliteration: "ahlaknāhum", meaning: { en: "We destroyed them", ur: "ہم نے انہیں ہلاک کیا", ar: "أهلكناهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ه-ل-ك" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "indeed they", ur: "بیشک وہ", ar: "إنهم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were", ur: "تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مُجْرِمِينَ", transliteration: "mujrimīna", meaning: { en: "criminals", ur: "مجرم", ar: "مجرمين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ج-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل ناقص + خبر' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "خَلَقْنَا", transliteration: "khalaqnā", meaning: { en: "We created", ur: "ہم نے بنایا", ar: "خلقنا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what is", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "between them", ur: "ان کے درمیان ہے", ar: "بينهما" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "لَاعِبِينَ", transliteration: "lāʿibīna", meaning: { en: "in play", ur: "کھیل کے طور پر", ar: "لاعبين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ل-ع-ب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "مَا خَلَقْنَاهُمَا إِلَّا بِالْحَقِّ وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "خَلَقْنَاهُمَا", transliteration: "khalaqnāhumā", meaning: { en: "We created them both", ur: "ہم نے ان دونوں کو بنایا", ar: "خلقناهما" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { type: "exception" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "in truth", ur: "حق کے ساتھ", ar: "بالحق" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-ق-ق" } },
      { arabic: "وَلَٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "adversative" } },
      { arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", meaning: { en: "most of them", ur: "ان میں اکثر", ar: "أكثرهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جانتے", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "إِنَّ يَوْمَ الْفَصْلِ مِيقَاتُهُمْ أَجْمَعِينَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "the Day of", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الْفَصْلِ", transliteration: "al-faṣli", meaning: { en: "Judgement", ur: "فیصلے کا", ar: "الفصل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ف-ص-ل" } },
      { arabic: "مِيقَاتُهُمْ", transliteration: "mīqātuhum", meaning: { en: "their appointed time", ur: "ان کا وعدہ", ar: "ميقاتهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "و-ق-ت" } },
      { arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", meaning: { en: "all of them", ur: "سب کا", ar: "أجمعين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ج-م-ع" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'توکید' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "يَوْمَ لَا يُغْنِي مَوْلًى عَن مَّوْلًى شَيْئًا وَلَا هُمْ يُنصَرُونَ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يُغْنِي", transliteration: "yughnī", meaning: { en: "will avail", ur: "فائدہ دے گا", ar: "يغني" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "غ-ن-ي" } },
      { arabic: "مَوْلًى", transliteration: "mawlan", meaning: { en: "a relative/ally", ur: "دوست", ar: "مولى" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ل-ي" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "مَّوْلًى", transliteration: "mawlan", meaning: { en: "a relative/ally", ur: "دوست کو", ar: "مولى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ل-ي" } },
      { arabic: "شَيْئًا", transliteration: "shay'an", meaning: { en: "anything", ur: "کچھ بھی", ar: "شيئا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negation" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "يُنصَرُونَ", transliteration: "yunṣarūna", meaning: { en: "will be helped", ur: "مدد کیے جائیں گے", ar: "ينصرون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ن-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "إِلَّا مَن رَّحِمَ اللَّهُ إِنَّهُ هُوَ الْعَزِيزُ الرَّحِيمُ",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "Except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { type: "exception" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "جس پر", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "رَّحِمَ", transliteration: "raḥima", meaning: { en: "has mercy", ur: "رحم کرے", ar: "رحم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-ح-م" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "PN", posLabel: "PN", grammar: { case: "nominative" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "indeed He", ur: "بیشک وہ", ar: "إنه" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīzu", meaning: { en: "the Exalted in Might", ur: "غالب", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ز-ز" } },
      { arabic: "الرَّحِيمُ", transliteration: "al-raḥīmu", meaning: { en: "the Merciful", ur: "رحم والا", ar: "الرحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ر-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "إِنَّ شَجَرَتَ الزَّقُّومِ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "شَجَرَتَ", transliteration: "shajarata", meaning: { en: "the tree of", ur: "درخت", ar: "شجرت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ش-ج-ر" } },
      { arabic: "الزَّقُّومِ", transliteration: "al-zaqqūmi", meaning: { en: "Zaqqum", ur: "زقوم", ar: "الزقوم" }, pos: "PN", posLabel: "PN", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "طَعَامُ الْأَثِيمِ",
    words: [
      { arabic: "طَعَامُ", transliteration: "ṭaʿāmu", meaning: { en: "Food of", ur: "کھانا ہے", ar: "طعام" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ط-ع-م" } },
      { arabic: "الْأَثِيمِ", transliteration: "al-athīmi", meaning: { en: "the sinful", ur: "گنہگار کا", ar: "الأثيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-ث-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "كَالْمُهْلِ يَغْلِي فِي الْبُطُونِ",
    words: [
      { arabic: "كَالْمُهْلِ", transliteration: "kal-muhli", meaning: { en: "Like murky oil", ur: "تیل کی تلچھٹ کی طرح", ar: "كالمهل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "م-ه-ل" } },
      { arabic: "يَغْلِي", transliteration: "yaghlī", meaning: { en: "it boils", ur: "کھولتا ہے", ar: "يغلي" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ل-ي" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "الْبُطُونِ", transliteration: "al-buṭūni", meaning: { en: "the bellies", ur: "پیٹوں", ar: "البطون" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ب-ط-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "كَغَلْيِ الْحَمِيمِ",
    words: [
      { arabic: "كَغَلْيِ", transliteration: "kaghalyi", meaning: { en: "Like the boiling", ur: "کھولتے پانی کے جوش کی طرح", ar: "كغلي" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "غ-ل-ي" } },
      { arabic: "الْحَمِيمِ", transliteration: "al-ḥamīmi", meaning: { en: "of scalding water", ur: "کھولتے پانی", ar: "الحميم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "خُذُوهُ فَاعْتِلُوهُ إِلَىٰ سَوَاءِ الْجَحِيمِ",
    words: [
      { arabic: "خُذُوهُ", transliteration: "khudhūhu", meaning: { en: "Seize him", ur: "اسے پکڑو", ar: "خذوه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { mood: "imperative", root: "أ-خ-ذ" } },
      { arabic: "فَاعْتِلُوهُ", transliteration: "fa'tilūhu", meaning: { en: "and drag him", ur: "اور گھسیٹ کر لے جاؤ", ar: "فاعتلوه" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "VIII", mood: "imperative", root: "ع-ت-ل" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "into", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "سَوَاءِ", transliteration: "sawā'i", meaning: { en: "the midst of", ur: "بیچ", ar: "سواء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-و-ي" } },
      { arabic: "الْجَحِيمِ", transliteration: "al-jaḥīmi", meaning: { en: "the Hellfire", ur: "دوزخ", ar: "الجحيم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "ثُمَّ صُبُّوا فَوْقَ رَأْسِهِ مِنْ عَذَابِ الْحَمِيمِ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "conjunction" } },
      { arabic: "صُبُّوا", transliteration: "ṣubbū", meaning: { en: "pour", ur: "انڈیلو", ar: "صبوا" }, pos: "V", posLabel: "V", grammar: { mood: "imperative", root: "ص-ب-ب" } },
      { arabic: "فَوْقَ", transliteration: "fawqa", meaning: { en: "over", ur: "اوپر", ar: "فوق" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "رَأْسِهِ", transliteration: "ra'sihi", meaning: { en: "his head", ur: "اس کے سر", ar: "رأسه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-أ-س" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "عَذَابِ", transliteration: "ʿadhābi", meaning: { en: "the torment of", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ذ-ب" } },
      { arabic: "الْحَمِيمِ", transliteration: "al-ḥamīmi", meaning: { en: "the scalding water", ur: "کھولتے پانی کا", ar: "الحميم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-م-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "ذُقْ إِنَّكَ أَنتَ الْعَزِيزُ الْكَرِيمُ",
    words: [
      { arabic: "ذُقْ", transliteration: "dhuq", meaning: { en: "Taste!", ur: "چکھ", ar: "ذق" }, pos: "V", posLabel: "V", grammar: { mood: "imperative", root: "ذ-و-ق" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "Indeed you are", ur: "بیشک تو ہے", ar: "إنك" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "you", ur: "تو", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīzu", meaning: { en: "the honored", ur: "عزت والا", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ز-ز" } },
      { arabic: "الْكَرِيمُ", transliteration: "al-karīmu", meaning: { en: "the noble", ur: "بزرگ", ar: "الكريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ك-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'اسم إن + خبر إن' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  50: {
    ayahNumber: 50,
    text: "إِنَّ هَٰذَا مَا كُنتُم بِهِ تَمْتَرُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this is", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "وہ جس میں", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم تھے", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "about it", ur: "اس میں", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "تَمْتَرُونَ", transliteration: "tamtarūna", meaning: { en: "dispute", ur: "شک کرتے تھے", ar: "تمترون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "م-ر-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'حرف + اسم إن' }
      ]
    }
  },

  51: {
    ayahNumber: 51,
    text: "إِنَّ الْمُتَّقِينَ فِي مَقَامٍ أَمِينٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "الْمُتَّقِينَ", transliteration: "al-muttaqīna", meaning: { en: "the righteous", ur: "متقی لوگ", ar: "المتقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "و-ق-ي" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں ہیں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "مَقَامٍ", transliteration: "maqāmin", meaning: { en: "a station", ur: "مقام", ar: "مقام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-م" } },
      { arabic: "أَمِينٍ", transliteration: "amīnin", meaning: { en: "secure", ur: "امن والے", ar: "أمين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  52: {
    ayahNumber: 52,
    text: "فِي جَنَّاتٍ وَعُيُونٍ",
    words: [
      { arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "gardens", ur: "باغات", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ج-ن-ن" } },
      { arabic: "وَعُيُونٍ", transliteration: "waʿuyūnin", meaning: { en: "and springs", ur: "اور چشمے", ar: "وعيون" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural", root: "ع-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  53: {
    ayahNumber: 53,
    text: "يَلْبَسُونَ مِن سُندُسٍ وَإِسْتَبْرَقٍ مُّتَقَابِلِينَ",
    words: [
      { arabic: "يَلْبَسُونَ", transliteration: "yalbasūna", meaning: { en: "They will wear", ur: "وہ پہنیں گے", ar: "يلبسون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ل-ب-س" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "سُندُسٍ", transliteration: "sundusin", meaning: { en: "fine silk", ur: "باریک ریشم", ar: "سندس" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَإِسْتَبْرَقٍ", transliteration: "wa'istabraqin", meaning: { en: "and brocade", ur: "اور دبیز ریشم", ar: "وإستبرق" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "مُّتَقَابِلِينَ", transliteration: "mutaqābilīna", meaning: { en: "facing each other", ur: "آمنے سامنے", ar: "متقابلين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ق-ب-ل" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  54: {
    ayahNumber: 54,
    text: "كَذَٰلِكَ وَزَوَّجْنَاهُم بِحُورٍ عِينٍ",
    words: [
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "اسی طرح", ar: "كذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "وَزَوَّجْنَاهُم", transliteration: "wazawwajnāhum", meaning: { en: "and We will marry them", ur: "اور ہم ان کا جوڑا بنائیں گے", ar: "وزوجناهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ز-و-ج" } },
      { arabic: "بِحُورٍ", transliteration: "biḥūrin", meaning: { en: "to fair ones", ur: "حوروں کے ساتھ", ar: "بحور" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-و-ر" } },
      { arabic: "عِينٍ", transliteration: "ʿīnin", meaning: { en: "with large beautiful eyes", ur: "بڑی آنکھوں والیاں", ar: "عين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  55: {
    ayahNumber: 55,
    text: "يَدْعُونَ فِيهَا بِكُلِّ فَاكِهَةٍ آمِنِينَ",
    words: [
      { arabic: "يَدْعُونَ", transliteration: "yadʿūna", meaning: { en: "They will call", ur: "وہ منگوائیں گے", ar: "يدعون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "بِكُلِّ", transliteration: "bikulli", meaning: { en: "for every kind of", ur: "ہر قسم کا", ar: "بكل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "فَاكِهَةٍ", transliteration: "fākihatin", meaning: { en: "fruit", ur: "پھل", ar: "فاكهة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ف-ك-ه" } },
      { arabic: "آمِنِينَ", transliteration: "āminīna", meaning: { en: "secure", ur: "امن میں", ar: "آمنين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "أ-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  56: {
    ayahNumber: 56,
    text: "لَا يَذُوقُونَ فِيهَا الْمَوْتَ إِلَّا الْمَوْتَةَ الْأُولَىٰ وَوَقَاهُمْ عَذَابَ الْجَحِيمِ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يَذُوقُونَ", transliteration: "yadhūqūna", meaning: { en: "will they taste", ur: "وہ چکھیں گے", ar: "يذوقون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ذ-و-ق" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "الْمَوْتَ", transliteration: "al-mawta", meaning: { en: "death", ur: "موت", ar: "الموت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-و-ت" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { type: "exception" } },
      { arabic: "الْمَوْتَةَ", transliteration: "al-mawtata", meaning: { en: "the death", ur: "موت", ar: "الموتة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-و-ت" } },
      { arabic: "الْأُولَىٰ", transliteration: "al-ūlā", meaning: { en: "the first", ur: "پہلی", ar: "الأولى" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "وَوَقَاهُمْ", transliteration: "wawaqāhum", meaning: { en: "and He will protect them", ur: "اور اللہ نے بچایا انہیں", ar: "ووقاهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "و-ق-ي" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", meaning: { en: "the punishment of", ur: "عذاب سے", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "الْجَحِيمِ", transliteration: "al-jaḥīmi", meaning: { en: "the Hellfire", ur: "دوزخ کے", ar: "الجحيم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  57: {
    ayahNumber: 57,
    text: "فَضْلًا مِّن رَّبِّكَ ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
    words: [
      { arabic: "فَضْلًا", transliteration: "faḍlan", meaning: { en: "As a bounty", ur: "فضل سے", ar: "فضلا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ف-ض-ل" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "رَّبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "تیرے رب", ar: "ربك" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْفَوْزُ", transliteration: "al-fawzu", meaning: { en: "the achievement", ur: "کامیابی", ar: "الفوز" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ف-و-ز" } },
      { arabic: "الْعَظِيمُ", transliteration: "al-ʿaẓīmu", meaning: { en: "the great", ur: "بڑی", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ظ-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 6, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  58: {
    ayahNumber: 58,
    text: "فَإِنَّمَا يَسَّرْنَاهُ بِلِسَانِكَ لَعَلَّهُمْ يَتَذَكَّرُونَ",
    words: [
      { arabic: "فَإِنَّمَا", transliteration: "fa'innamā", meaning: { en: "And indeed We", ur: "پس بیشک", ar: "فإنما" }, pos: "CONJ+RES", posLabel: "CONJ+RES", grammar: { type: "restriction" } },
      { arabic: "يَسَّرْنَاهُ", transliteration: "yassarnāhu", meaning: { en: "have made it easy", ur: "ہم نے آسان کیا اسے", ar: "يسرناه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ي-س-ر" } },
      { arabic: "بِلِسَانِكَ", transliteration: "bilisānika", meaning: { en: "in your language", ur: "تمہاری زبان میں", ar: "بلسانك" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ل-س-ن" } },
      { arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", meaning: { en: "so that they may", ur: "تاکہ وہ", ar: "لعلهم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "purpose" } },
      { arabic: "يَتَذَكَّرُونَ", transliteration: "yatadhakkarūna", meaning: { en: "be reminded", ur: "نصیحت حاصل کریں", ar: "يتذكرون" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ذ-ك-ر" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'ترجی + فعل' }
      ]
    }
  },

  59: {
    ayahNumber: 59,
    text: "فَارْتَقِبْ إِنَّهُم مُّرْتَقِبُونَ",
    words: [
      { arabic: "فَارْتَقِبْ", transliteration: "fartaqib", meaning: { en: "So wait", ur: "پس انتظار کرو", ar: "فارتقب" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", mood: "imperative", root: "ر-ق-ب" } },
      { arabic: "إِنَّهُم", transliteration: "innahum", meaning: { en: "indeed they", ur: "بیشک وہ بھی", ar: "إنهم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "مُّرْتَقِبُونَ", transliteration: "murtaqibūna", meaning: { en: "are waiting", ur: "انتظار کرنے والے ہیں", ar: "مرتقبون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ر-ق-ب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'اسم إن + خبر إن' }
      ]
    }
  }
};

export default TREEBANK_DATA;
