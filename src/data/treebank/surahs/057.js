/**
 * Surah Al-Hadid (The Iron) - Surah 57
 * Quranic Arabic Treebank Data
 */

export const TREEBANK_DATA = {
  surahId: 57,
  surahName: "Al-Hadid",
  surahNameArabic: "الحديد",
  totalAyahs: 29,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
    words: [
      { arabic: "سَبَّحَ", transliteration: "sabbaḥa", meaning: { en: "Glorifies", ur: "پاکی بیان کی", ar: "نزّه" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "س-ب-ح" } },
      { arabic: "لِلَّهِ", transliteration: "lillāhi", meaning: { en: "Allah", ur: "اللہ کی", ar: "لله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīzu", meaning: { en: "the Almighty", ur: "غالب", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "الْحَكِيمُ", transliteration: "al-ḥakīmu", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ يُحْيِي وَيُمِيتُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    words: [
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "To Him belongs", ur: "اسی کی ہے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مُلْكُ", transliteration: "mulku", meaning: { en: "the dominion", ur: "بادشاہی", ar: "ملك" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کی", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "يُحْيِي", transliteration: "yuḥyī", meaning: { en: "He gives life", ur: "زندہ کرتا ہے", ar: "يحيي" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "وَيُمِيتُ", transliteration: "wayumītu", meaning: { en: "and causes death", ur: "اور مارتا ہے", ar: "ويميت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "م-و-ت" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "Capable", ur: "قادر", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْأَوَّلُ", transliteration: "al-awwalu", meaning: { en: "the First", ur: "پہلا", ar: "الأول" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "وَالْآخِرُ", transliteration: "wal-ākhiru", meaning: { en: "and the Last", ur: "اور آخر", ar: "والآخر" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { case: "nominative" } },
      { arabic: "وَالظَّاهِرُ", transliteration: "wal-ẓāhiru", meaning: { en: "and the Manifest", ur: "اور ظاہر", ar: "والظاهر" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { case: "nominative" } },
      { arabic: "وَالْبَاطِنُ", transliteration: "wal-bāṭinu", meaning: { en: "and the Hidden", ur: "اور باطن", ar: "والباطن" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { case: "nominative" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "بِكُلِّ", transliteration: "bikulli", meaning: { en: "of every", ur: "ہر", ar: "بكل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز کو", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "Knowing", ur: "جاننے والا", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین کو", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "سِتَّةِ", transliteration: "sittati", meaning: { en: "six", ur: "چھ", ar: "ستة" }, pos: "NUM", posLabel: "NUM", grammar: { case: "genitive" } },
      { arabic: "أَيَّامٍ", transliteration: "ayyāmin", meaning: { en: "days", ur: "دنوں", ar: "أيام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "اسْتَوَىٰ", transliteration: "istawā", meaning: { en: "established Himself", ur: "مستوی ہوا", ar: "استوى" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "س-و-ي" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْعَرْشِ", transliteration: "al-ʿarshi", meaning: { en: "the Throne", ur: "عرش", ar: "العرش" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'عطف' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ",
    words: [
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "To Him", ur: "اسی کا ہے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مُلْكُ", transliteration: "mulku", meaning: { en: "the dominion", ur: "ملک", ar: "ملك" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَإِلَى", transliteration: "wa-ilā", meaning: { en: "and to", ur: "اور کی طرف", ar: "وإلى" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "direction" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "تُرْجَعُ", transliteration: "turjaʿu", meaning: { en: "will be returned", ur: "لوٹائے جائیں گے", ar: "ترجع" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ر-ج-ع" } },
      { arabic: "الْأُمُورُ", transliteration: "al-umūru", meaning: { en: "the matters", ur: "سب معاملات", ar: "الأمور" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَهُوَ عَلِيمٌ بِذَاتِ الصُّدُورِ",
    words: [
      { arabic: "يُولِجُ", transliteration: "yūliju", meaning: { en: "He merges", ur: "داخل کرتا ہے", ar: "يدخل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ل-ج" } },
      { arabic: "اللَّيْلَ", transliteration: "al-layla", meaning: { en: "the night", ur: "رات کو", ar: "الليل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "النَّهَارِ", transliteration: "al-nahāri", meaning: { en: "the day", ur: "دن", ar: "النهار" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَيُولِجُ", transliteration: "wayūliju", meaning: { en: "and merges", ur: "اور داخل کرتا ہے", ar: "ويدخل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "و-ل-ج" } },
      { arabic: "النَّهَارَ", transliteration: "al-nahāra", meaning: { en: "the day", ur: "دن کو", ar: "النهار" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "اللَّيْلِ", transliteration: "al-layli", meaning: { en: "the night", ur: "رات", ar: "الليل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "Knowing", ur: "جاننے والا", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "بِذَاتِ", transliteration: "bidhāti", meaning: { en: "of what is in", ur: "سینوں کی", ar: "بذات" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الصُّدُورِ", transliteration: "al-ṣudūri", meaning: { en: "the breasts", ur: "باتوں کو", ar: "الصدور" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 1, to: 5, label: 'عطف' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "آمِنُوا بِاللَّهِ وَرَسُولِهِ وَأَنفِقُوا مِمَّا جَعَلَكُم مُّسْتَخْلَفِينَ فِيهِ",
    words: [
      { arabic: "آمِنُوا", transliteration: "āminū", meaning: { en: "Believe", ur: "ایمان لاؤ", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن", mood: "imperative" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَرَسُولِهِ", transliteration: "warasūlihi", meaning: { en: "and His Messenger", ur: "اور اس کے رسول", ar: "ورسوله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَأَنفِقُوا", transliteration: "wa-anfiqū", meaning: { en: "and spend", ur: "اور خرچ کرو", ar: "وأنفقوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ن-ف-ق", mood: "imperative" } },
      { arabic: "مِمَّا", transliteration: "mimmā", meaning: { en: "from that which", ur: "اس میں سے جو", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "جَعَلَكُم", transliteration: "jaʿalakum", meaning: { en: "He made you", ur: "اس نے تمہیں بنایا", ar: "جعلكم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "مُّسْتَخْلَفِينَ", transliteration: "mustakhlifīna", meaning: { en: "trustees", ur: "خلیفہ", ar: "مستخلفين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "خ-ل-ف" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 4, label: 'عطف' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'حال' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "وَمَا لَكُمْ لَا تُؤْمِنُونَ بِاللَّهِ وَالرَّسُولُ يَدْعُوكُمْ لِتُؤْمِنُوا بِرَبِّكُمْ وَقَدْ أَخَذَ مِيثَاقَكُمْ إِن كُنتُم مُّؤْمِنِينَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "is with you", ur: "تمہیں ہے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "تُؤْمِنُونَ", transliteration: "tuʾminūna", meaning: { en: "you believe", ur: "ایمان لاتے", ar: "تؤمنون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَالرَّسُولُ", transliteration: "wal-rasūlu", meaning: { en: "while the Messenger", ur: "اور رسول", ar: "والرسول" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "يَدْعُوكُمْ", transliteration: "yadʿūkum", meaning: { en: "invites you", ur: "تمہیں بلاتا ہے", ar: "يدعوكم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "لِتُؤْمِنُوا", transliteration: "lituʾminū", meaning: { en: "to believe", ur: "تاکہ ایمان لاؤ", ar: "لتؤمنوا" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", mood: "subjunctive" } },
      { arabic: "بِرَبِّكُمْ", transliteration: "birabbikum", meaning: { en: "in your Lord", ur: "اپنے رب پر", ar: "بربكم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَقَدْ", transliteration: "waqad", meaning: { en: "and certainly", ur: "اور بیشک", ar: "وقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "أَخَذَ", transliteration: "akhadha", meaning: { en: "He has taken", ur: "لے چکا ہے", ar: "أخذ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-خ-ذ" } },
      { arabic: "مِيثَاقَكُمْ", transliteration: "mīthāqakum", meaning: { en: "your covenant", ur: "تمہارا عہد", ar: "ميثاقكم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مُّؤْمِنِينَ", transliteration: "muʾminīna", meaning: { en: "believers", ur: "مومن", ar: "مؤمنين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'فعل + مفعول به' },
        { from: 14, to: 15, label: 'فعل + مفعول به' },
        { from: 14, to: 15, label: 'حال' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "هُوَ الَّذِي يُنَزِّلُ عَلَىٰ عَبْدِهِ آيَاتٍ بَيِّنَاتٍ لِّيُخْرِجَكُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "يُنَزِّلُ", transliteration: "yunazzilu", meaning: { en: "sends down", ur: "اتارتا ہے", ar: "ينزل" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ن-ز-ل" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "عَبْدِهِ", transliteration: "ʿabdihi", meaning: { en: "His servant", ur: "اپنے بندے", ar: "عبده" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "آيَاتٍ", transliteration: "āyātin", meaning: { en: "verses", ur: "آیات", ar: "آيات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "بَيِّنَاتٍ", transliteration: "bayyinātin", meaning: { en: "clear", ur: "واضح", ar: "بينات" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", number: "plural" } },
      { arabic: "لِّيُخْرِجَكُم", transliteration: "liyukhrijakum", meaning: { en: "to bring you out", ur: "تاکہ نکالے تمہیں", ar: "ليخرجكم" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", root: "خ-ر-ج" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الظُّلُمَاتِ", transliteration: "al-ẓulumāti", meaning: { en: "darknesses", ur: "اندھیروں", ar: "الظلمات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "into", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "النُّورِ", transliteration: "al-nūri", meaning: { en: "the light", ur: "روشنی", ar: "النور" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَمَا لَكُمْ أَلَّا تُنفِقُوا فِي سَبِيلِ اللَّهِ وَلِلَّهِ مِيرَاثُ السَّمَاوَاتِ وَالْأَرْضِ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And why", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "with you", ur: "تمہیں", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "that not", ur: "کہ نہیں", ar: "ألا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "تُنفِقُوا", transliteration: "tunfiqū", meaning: { en: "you spend", ur: "خرچ کرتے", ar: "تنفقوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ف-ق" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے", ar: "سبيل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلِلَّهِ", transliteration: "walillāhi", meaning: { en: "And to Allah", ur: "اور اللہ کی ہے", ar: "ولله" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } },
      { arabic: "مِيرَاثُ", transliteration: "mīrāthu", meaning: { en: "the heritage", ur: "میراث", ar: "ميراث" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ر-ث" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'عطف' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ وَلَهُ أَجْرٌ كَرِيمٌ",
    words: [
      { arabic: "مَّن", transliteration: "man", meaning: { en: "Who", ur: "کون ہے", ar: "من" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "ذَا", transliteration: "dhā", meaning: { en: "is this", ur: "جو", ar: "ذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "يُقْرِضُ", transliteration: "yuqriḍu", meaning: { en: "will loan", ur: "قرض دے", ar: "يقرض" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ق-ر-ض" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کو", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "قَرْضًا", transliteration: "qarḍan", meaning: { en: "a loan", ur: "قرض", ar: "قرضا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "حَسَنًا", transliteration: "ḥasanan", meaning: { en: "goodly", ur: "اچھا", ar: "حسنا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "فَيُضَاعِفَهُ", transliteration: "fayuḍāʿifahu", meaning: { en: "so He multiplies it", ur: "تو بڑھا دے", ar: "فيضاعفه" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ض-ع-ف" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "وَلَهُ", transliteration: "walahu", meaning: { en: "and for him", ur: "اور اس کے لیے ہے", ar: "وله" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "predicate" } },
      { arabic: "أَجْرٌ", transliteration: "ajrun", meaning: { en: "a reward", ur: "اجر", ar: "أجر" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "كَرِيمٌ", transliteration: "karīmun", meaning: { en: "noble", ur: "عزت والا", ar: "كريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "يَوْمَ تَرَى الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ يَسْعَىٰ نُورُهُم بَيْنَ أَيْدِيهِمْ وَبِأَيْمَانِهِم",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "On the Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "تَرَى", transliteration: "tarā", meaning: { en: "you will see", ur: "تو دیکھے گا", ar: "ترى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "the believing men", ur: "مومن مردوں کو", ar: "المؤمنين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْمُؤْمِنَاتِ", transliteration: "wal-muʾmināti", meaning: { en: "and believing women", ur: "اور مومن عورتوں کو", ar: "والمؤمنات" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", number: "plural", gender: "feminine" } },
      { arabic: "يَسْعَىٰ", transliteration: "yasʿā", meaning: { en: "proceeding", ur: "دوڑتا ہے", ar: "يسعى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-ع-ي" } },
      { arabic: "نُورُهُم", transliteration: "nūruhum", meaning: { en: "their light", ur: "ان کا نور", ar: "نورهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "سامنے", ar: "بين" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", meaning: { en: "them", ur: "ان کے", ar: "أيديهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَبِأَيْمَانِهِم", transliteration: "wabi-aymānihim", meaning: { en: "and on their right", ur: "اور ان کے دائیں طرف", ar: "وبأيمانهم" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'حال' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "يَوْمَ يَقُولُ الْمُنَافِقُونَ وَالْمُنَافِقَاتُ لِلَّذِينَ آمَنُوا انظُرُونَا نَقْتَبِسْ مِن نُّورِكُمْ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "On the Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "temporal" } },
      { arabic: "يَقُولُ", transliteration: "yaqūlu", meaning: { en: "will say", ur: "کہیں گے", ar: "يقول" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الْمُنَافِقُونَ", transliteration: "al-munāfiqūna", meaning: { en: "the hypocrite men", ur: "منافق مرد", ar: "المنافقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural" } },
      { arabic: "وَالْمُنَافِقَاتُ", transliteration: "wal-munāfiqātu", meaning: { en: "and hypocrite women", ur: "اور منافق عورتیں", ar: "والمنافقات" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", gender: "feminine" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "ان سے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "انظُرُونَا", transliteration: "unẓurūnā", meaning: { en: "Wait for us", ur: "ہمارا انتظار کرو", ar: "انظرونا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ظ-ر", mood: "imperative" } },
      { arabic: "نَقْتَبِسْ", transliteration: "naqtabis", meaning: { en: "we may acquire", ur: "ہم لیں", ar: "نقتبس" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ق-ب-س" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "نُّورِكُمْ", transliteration: "nūrikum", meaning: { en: "your light", ur: "تمہارے نور", ar: "نوركم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "يُنَادُونَهُم أَلَمْ نَكُن مَّعَكُمْ قَالُوا بَلَىٰ وَلَٰكِنَّكُمْ فَتَنتُمْ أَنفُسَكُمْ وَتَرَبَّصْتُمْ وَارْتَبْتُمْ",
    words: [
      { arabic: "يُنَادُونَهُم", transliteration: "yunādūnahum", meaning: { en: "They will call them", ur: "پکاریں گے انہیں", ar: "ينادونهم" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ن-د-و" } },
      { arabic: "أَلَمْ", transliteration: "alam", meaning: { en: "Were we not", ur: "کیا ہم نہیں تھے", ar: "ألم" }, pos: "INTG+NEG", posLabel: "INTG+NEG", grammar: { type: "rhetorical" } },
      { arabic: "نَكُن", transliteration: "nakun", meaning: { en: "we", ur: "ہم", ar: "نكن" }, pos: "V", posLabel: "V", grammar: { type: "kāna", mood: "jussive" } },
      { arabic: "مَّعَكُمْ", transliteration: "maʿakum", meaning: { en: "with you", ur: "تمہارے ساتھ", ar: "معكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "accompaniment" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They will say", ur: "کہیں گے", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes", ur: "ہاں", ar: "بلى" }, pos: "PART", posLabel: "PART", grammar: { type: "affirmation" } },
      { arabic: "وَلَٰكِنَّكُمْ", transliteration: "walākinnakum", meaning: { en: "but you", ur: "لیکن تم نے", ar: "ولكنكم" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "exception" } },
      { arabic: "فَتَنتُمْ", transliteration: "fatantum", meaning: { en: "afflicted", ur: "فتنے میں ڈالا", ar: "فتنتم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ت-ن" } },
      { arabic: "أَنفُسَكُمْ", transliteration: "anfusakum", meaning: { en: "yourselves", ur: "اپنے آپ کو", ar: "أنفسكم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَتَرَبَّصْتُمْ", transliteration: "watarabbaṣtum", meaning: { en: "and awaited", ur: "اور انتظار کیا", ar: "وتربصتم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "V", root: "ر-ب-ص" } },
      { arabic: "وَارْتَبْتُمْ", transliteration: "wartabtum", meaning: { en: "and doubted", ur: "اور شک کیا", ar: "وارتبتم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "ر-ي-ب" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + مفعول به' },
        { from: 8, to: 10, label: 'عطف' },
        { from: 10, to: 11, label: 'عطف' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "فَالْيَوْمَ لَا يُؤْخَذُ مِنكُمْ فِدْيَةٌ وَلَا مِنَ الَّذِينَ كَفَرُوا مَأْوَاكُمُ النَّارُ هِيَ مَوْلَاكُمْ وَبِئْسَ الْمَصِيرُ",
    words: [
      { arabic: "فَالْيَوْمَ", transliteration: "fal-yawma", meaning: { en: "So today", ur: "پس آج", ar: "فاليوم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "temporal" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُؤْخَذُ", transliteration: "yuʾkhadhu", meaning: { en: "will be taken", ur: "لیا جائے گا", ar: "يؤخذ" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "أ-خ-ذ" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "from you", ur: "تم سے", ar: "منكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "فِدْيَةٌ", transliteration: "fidyatun", meaning: { en: "a ransom", ur: "فدیہ", ar: "فدية" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان سے جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "مَأْوَاكُمُ", transliteration: "maʾwākumu", meaning: { en: "Your refuge", ur: "تمہارا ٹھکانہ", ar: "مأواكم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "النَّارُ", transliteration: "al-nāru", meaning: { en: "is the Fire", ur: "آگ ہے", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "هِيَ", transliteration: "hiya", meaning: { en: "it", ur: "وہی", ar: "هي" }, pos: "PRON", posLabel: "PRON", grammar: { gender: "feminine" } },
      { arabic: "مَوْلَاكُمْ", transliteration: "mawlākum", meaning: { en: "your proper place", ur: "تمہارا ٹھکانہ", ar: "مولاكم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَبِئْسَ", transliteration: "wabiʾsa", meaning: { en: "and wretched", ur: "اور برا ہے", ar: "وبئس" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "blame" } },
      { arabic: "الْمَصِيرُ", transliteration: "al-maṣīru", meaning: { en: "the destination", ur: "ٹھکانہ", ar: "المصير" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مبتدأ + خبر' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 9, to: 14, label: 'عطف' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَن تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ وَمَا نَزَلَ مِنَ الْحَقِّ",
    words: [
      { arabic: "أَلَمْ", transliteration: "alam", meaning: { en: "Has not", ur: "کیا نہیں", ar: "ألم" }, pos: "INTG+NEG", posLabel: "INTG+NEG", grammar: { type: "rhetorical" } },
      { arabic: "يَأْنِ", transliteration: "yaʾni", meaning: { en: "the time come", ur: "وقت آیا", ar: "يأن" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ن-ي" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان کے لیے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "تَخْشَعَ", transliteration: "takhshaʿa", meaning: { en: "become humble", ur: "جھک جائیں", ar: "تخشع" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ش-ع", mood: "subjunctive" } },
      { arabic: "قُلُوبُهُمْ", transliteration: "qulūbuhum", meaning: { en: "their hearts", ur: "ان کے دل", ar: "قلوبهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لِذِكْرِ", transliteration: "lidhikri", meaning: { en: "to the remembrance", ur: "ذکر سے", ar: "لذكر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "نَزَلَ", transliteration: "nazala", meaning: { en: "has descended", ur: "اترا ہے", ar: "نزل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ز-ل" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْحَقِّ", transliteration: "al-ḥaqqi", meaning: { en: "the truth", ur: "حق", ar: "الحق" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "اعْلَمُوا أَنَّ اللَّهَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا قَدْ بَيَّنَّا لَكُمُ الْآيَاتِ لَعَلَّكُمْ تَعْقِلُونَ",
    words: [
      { arabic: "اعْلَمُوا", transliteration: "iʿlamū", meaning: { en: "Know", ur: "جان لو", ar: "اعلموا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م", mood: "imperative" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "يُحْيِي", transliteration: "yuḥyī", meaning: { en: "gives life to", ur: "زندہ کرتا ہے", ar: "يحيي" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍa", meaning: { en: "the earth", ur: "زمین کو", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "کے بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "temporal" } },
      { arabic: "مَوْتِهَا", transliteration: "mawtihā", meaning: { en: "its death", ur: "اس کی موت", ar: "موتها" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "Certainly", ur: "بیشک", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "بَيَّنَّا", transliteration: "bayyannā", meaning: { en: "We have made clear", ur: "ہم نے بیان کیا", ar: "بينا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ب-ي-ن" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "to you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "الْآيَاتِ", transliteration: "al-āyāti", meaning: { en: "the signs", ur: "نشانیاں", ar: "الآيات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that you may", ur: "تاکہ تم", ar: "لعلكم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "hope" } },
      { arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", meaning: { en: "understand", ur: "سمجھو", ar: "تعقلون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ق-ل" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ وَأَقْرَضُوا اللَّهَ قَرْضًا حَسَنًا يُضَاعَفُ لَهُمْ وَلَهُمْ أَجْرٌ كَرِيمٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "الْمُصَّدِّقِينَ", transliteration: "al-muṣṣaddiqīna", meaning: { en: "the charitable men", ur: "صدقہ دینے والے مرد", ar: "المصدقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْمُصَّدِّقَاتِ", transliteration: "wal-muṣṣaddiqāti", meaning: { en: "and charitable women", ur: "اور صدقہ دینے والی عورتیں", ar: "والمصدقات" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", gender: "feminine" } },
      { arabic: "وَأَقْرَضُوا", transliteration: "wa-aqraḍū", meaning: { en: "and loan", ur: "اور قرض دیں", ar: "وأقرضوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ق-ر-ض" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کو", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "قَرْضًا", transliteration: "qarḍan", meaning: { en: "a loan", ur: "قرض", ar: "قرضا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "حَسَنًا", transliteration: "ḥasanan", meaning: { en: "goodly", ur: "اچھا", ar: "حسنا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "يُضَاعَفُ", transliteration: "yuḍāʿafu", meaning: { en: "it will be multiplied", ur: "بڑھایا جائے گا", ar: "يضاعف" }, pos: "V", posLabel: "V", grammar: { form: "III", voice: "passive" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور ان کے لیے", ar: "ولهم" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "predicate" } },
      { arabic: "أَجْرٌ", transliteration: "ajrun", meaning: { en: "is a reward", ur: "اجر ہے", ar: "أجر" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "كَرِيمٌ", transliteration: "karīmun", meaning: { en: "noble", ur: "عزت والا", ar: "كريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَالَّذِينَ آمَنُوا بِاللَّهِ وَرُسُلِهِ أُولَٰئِكَ هُمُ الصِّدِّيقُونَ وَالشُّهَدَاءُ عِندَ رَبِّهِمْ لَهُمْ أَجْرُهُمْ وَنُورُهُمْ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَرُسُلِهِ", transliteration: "warusulihi", meaning: { en: "and His messengers", ur: "اور اس کے رسولوں پر", ar: "ورسله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "those", ur: "یہی لوگ", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہی ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الصِّدِّيقُونَ", transliteration: "al-ṣiddīqūna", meaning: { en: "the truthful", ur: "صدیقین", ar: "الصديقون" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "وَالشُّهَدَاءُ", transliteration: "wal-shuhadāʾu", meaning: { en: "and martyrs", ur: "اور شہید", ar: "والشهداء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "with", ur: "کے پاس", ar: "عند" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "ان کے رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "For them", ur: "ان کے لیے ہے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "predicate" } },
      { arabic: "أَجْرُهُمْ", transliteration: "ajruhum", meaning: { en: "is their reward", ur: "ان کا اجر", ar: "أجرهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَنُورُهُمْ", transliteration: "wanūruhum", meaning: { en: "and their light", ur: "اور ان کا نور", ar: "ونورهم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'عطف' },
        { from: 12, to: 13, label: 'عطف' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "اعْلَمُوا أَنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌ بَيْنَكُمْ وَتَكَاثُرٌ فِي الْأَمْوَالِ وَالْأَوْلَادِ",
    words: [
      { arabic: "اعْلَمُوا", transliteration: "iʿlamū", meaning: { en: "Know", ur: "جان لو", ar: "اعلموا" }, pos: "V", posLabel: "V", grammar: { form: "I", mood: "imperative" } },
      { arabic: "أَنَّمَا", transliteration: "annamā", meaning: { en: "that", ur: "کہ", ar: "أنما" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "restriction" } },
      { arabic: "الْحَيَاةُ", transliteration: "al-ḥayātu", meaning: { en: "the life", ur: "زندگی", ar: "الحياة" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of this world", ur: "دنیا", ar: "الدنيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "لَعِبٌ", transliteration: "laʿibun", meaning: { en: "is play", ur: "کھیل ہے", ar: "لعب" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَلَهْوٌ", transliteration: "walahwun", meaning: { en: "and amusement", ur: "اور تماشا", ar: "ولهو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "وَزِينَةٌ", transliteration: "wazīnatun", meaning: { en: "and adornment", ur: "اور زینت", ar: "وزينة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "وَتَفَاخُرٌ", transliteration: "watafākhrun", meaning: { en: "and boasting", ur: "اور فخر", ar: "وتفاخر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ف-خ-ر" } },
      { arabic: "بَيْنَكُمْ", transliteration: "baynakum", meaning: { en: "among you", ur: "آپس میں", ar: "بينكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "location" } },
      { arabic: "وَتَكَاثُرٌ", transliteration: "watakāthurun", meaning: { en: "and competition", ur: "اور زیادتی", ar: "وتكاثر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ك-ث-ر" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَمْوَالِ", transliteration: "al-amwāli", meaning: { en: "wealth", ur: "مال", ar: "الأموال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَوْلَادِ", transliteration: "wal-awlādi", meaning: { en: "and children", ur: "اور اولاد میں", ar: "والأولاد" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'عطف' },
        { from: 6, to: 7, label: 'عطف' },
        { from: 7, to: 8, label: 'عطف' },
        { from: 8, to: 10, label: 'عطف' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'عطف' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "سَابِقُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا كَعَرْضِ السَّمَاءِ وَالْأَرْضِ أُعِدَّتْ لِلَّذِينَ آمَنُوا بِاللَّهِ وَرُسُلِهِ",
    words: [
      { arabic: "سَابِقُوا", transliteration: "sābiqū", meaning: { en: "Race", ur: "دوڑو", ar: "سابقوا" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "س-ب-ق", mood: "imperative" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "toward", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "مَغْفِرَةٍ", transliteration: "maghfiratin", meaning: { en: "forgiveness", ur: "مغفرت", ar: "مغفرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-ف-ر" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "رَّبِّكُمْ", transliteration: "rabbikum", meaning: { en: "your Lord", ur: "تمہارے رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَجَنَّةٍ", transliteration: "wajannatin", meaning: { en: "and a Garden", ur: "اور جنت", ar: "وجنة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "عَرْضُهَا", transliteration: "ʿarḍuhā", meaning: { en: "its width", ur: "جس کی چوڑائی", ar: "عرضها" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "كَعَرْضِ", transliteration: "kaʿarḍi", meaning: { en: "is like width", ur: "جیسی ہے", ar: "كعرض" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "of the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "أُعِدَّتْ", transliteration: "uʿiddat", meaning: { en: "prepared", ur: "تیار کی گئی", ar: "أعدت" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "ع-د-د" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان لوگوں کے لیے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَرُسُلِهِ", transliteration: "warusulihi", meaning: { en: "and His messengers", ur: "اور اس کے رسولوں پر", ar: "ورسله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'عطف' },
        { from: 9, to: 10, label: 'عطف' },
        { from: 10, to: 15, label: 'عطف' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "مَا أَصَابَ مِن مُّصِيبَةٍ فِي الْأَرْضِ وَلَا فِي أَنفُسِكُمْ إِلَّا فِي كِتَابٍ مِّن قَبْلِ أَن نَّبْرَأَهَا",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "No", ur: "کوئی نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "أَصَابَ", transliteration: "aṣāba", meaning: { en: "strikes", ur: "پہنچتی", ar: "أصاب" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ص-و-ب" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "emphasis" } },
      { arabic: "مُّصِيبَةٍ", transliteration: "muṣībatin", meaning: { en: "disaster", ur: "مصیبت", ar: "مصيبة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أَنفُسِكُمْ", transliteration: "anfusikum", meaning: { en: "yourselves", ur: "تمہارے نفسوں", ar: "أنفسكم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كِتَابٍ", transliteration: "kitābin", meaning: { en: "a Book", ur: "کتاب", ar: "كتاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before", ur: "سے پہلے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِ", transliteration: "qabli", meaning: { en: "before", ur: "پہلے", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { role: "temporal" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "نَّبْرَأَهَا", transliteration: "nabraʾahā", meaning: { en: "We created it", ur: "ہم پیدا کریں", ar: "نبرأها" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-ر-أ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ وَلَا تَفْرَحُوا بِمَا آتَاكُمْ وَاللَّهُ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ",
    words: [
      { arabic: "لِّكَيْلَا", transliteration: "likaylā", meaning: { en: "So that not", ur: "تاکہ نہ", ar: "لكيلا" }, pos: "P+CONJ+NEG", posLabel: "P+CONJ+NEG", grammar: { type: "purpose" } },
      { arabic: "تَأْسَوْا", transliteration: "taʾsaw", meaning: { en: "you grieve", ur: "غم کرو", ar: "تأسوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-س-و" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فَاتَكُمْ", transliteration: "fātakum", meaning: { en: "has passed you", ur: "تم سے چوک گیا", ar: "فاتكم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-و-ت" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "تَفْرَحُوا", transliteration: "tafraḥū", meaning: { en: "be exultant", ur: "اتراؤ", ar: "تفرحوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ر-ح" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "at what", ur: "اس پر جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "آتَاكُمْ", transliteration: "ātākum", meaning: { en: "He gave you", ur: "تمہیں ملا", ar: "آتاكم" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "does not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُحِبُّ", transliteration: "yuḥibbu", meaning: { en: "love", ur: "پسند کرتا", ar: "يحب" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ب-ب" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مُخْتَالٍ", transliteration: "mukhtālin", meaning: { en: "self-deluded", ur: "اکڑ باز", ar: "مختال" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "خ-ي-ل" } },
      { arabic: "فَخُورٍ", transliteration: "fakhūrin", meaning: { en: "boastful", ur: "فخر کرنے والا", ar: "فخور" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ف-خ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'فعل + مفعول به' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "الَّذِينَ يَبْخَلُونَ وَيَأْمُرُونَ النَّاسَ بِالْبُخْلِ وَمَن يَتَوَلَّ فَإِنَّ اللَّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
    words: [
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "يَبْخَلُونَ", transliteration: "yabkhalūna", meaning: { en: "are stingy", ur: "بخل کرتے ہیں", ar: "يبخلون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-خ-ل" } },
      { arabic: "وَيَأْمُرُونَ", transliteration: "wayaʾmurūna", meaning: { en: "and order", ur: "اور حکم دیتے ہیں", ar: "ويأمرون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "أ-م-ر" } },
      { arabic: "النَّاسَ", transliteration: "al-nāsa", meaning: { en: "people", ur: "لوگوں کو", ar: "الناس" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِالْبُخْلِ", transliteration: "bil-bukhli", meaning: { en: "to stinginess", ur: "بخل کا", ar: "بالبخل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "conditional" } },
      { arabic: "يَتَوَلَّ", transliteration: "yatawalla", meaning: { en: "turns away", ur: "پھر جائے", ar: "يتول" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "و-ل-ي" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "then indeed", ur: "تو بیشک", ar: "فإن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْغَنِيُّ", transliteration: "al-ghaniyyu", meaning: { en: "the Free of need", ur: "بے نیاز", ar: "الغني" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "الْحَمِيدُ", transliteration: "al-ḥamīdu", meaning: { en: "the Praiseworthy", ur: "قابل حمد", ar: "الحميد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'مبتدأ + خبر' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ النَّاسُ بِالْقِسْطِ وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
    words: [
      { arabic: "لَقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "بیشک", ar: "لقد" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم نے بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "رُسُلَنَا", transliteration: "rusulanā", meaning: { en: "Our messengers", ur: "اپنے رسولوں کو", ar: "رسلنا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِالْبَيِّنَاتِ", transliteration: "bil-bayyināti", meaning: { en: "with clear proofs", ur: "واضح نشانیوں کے ساتھ", ar: "بالبينات" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَأَنزَلْنَا", transliteration: "wa-anzalnā", meaning: { en: "and We sent down", ur: "اور اتارا", ar: "وأنزلنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "مَعَهُمُ", transliteration: "maʿahumu", meaning: { en: "with them", ur: "ان کے ساتھ", ar: "معهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "accompaniment" } },
      { arabic: "الْكِتَابَ", transliteration: "al-kitāba", meaning: { en: "the Book", ur: "کتاب", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَالْمِيزَانَ", transliteration: "wal-mīzāna", meaning: { en: "and the Balance", ur: "اور ترازو", ar: "والميزان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "لِيَقُومَ", transliteration: "liyaqūma", meaning: { en: "that may stand", ur: "تاکہ قائم رہیں", ar: "ليقوم" }, pos: "P+V", posLabel: "P+V", grammar: { form: "I", root: "ق-و-م", mood: "subjunctive" } },
      { arabic: "النَّاسُ", transliteration: "al-nāsu", meaning: { en: "the people", ur: "لوگ", ar: "الناس" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "بِالْقِسْطِ", transliteration: "bil-qisṭi", meaning: { en: "in justice", ur: "انصاف پر", ar: "بالقسط" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَأَنزَلْنَا", transliteration: "wa-anzalnā", meaning: { en: "And We sent down", ur: "اور اتارا", ar: "وأنزلنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV" } },
      { arabic: "الْحَدِيدَ", transliteration: "al-ḥadīda", meaning: { en: "iron", ur: "لوہا", ar: "الحديد" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "اس میں ہے", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "بَأْسٌ", transliteration: "baʾsun", meaning: { en: "great military might", ur: "سخت قوت", ar: "بأس" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "شَدِيدٌ", transliteration: "shadīdun", meaning: { en: "strong", ur: "بڑی", ar: "شديد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "وَمَنَافِعُ", transliteration: "wamanāfiʿu", meaning: { en: "and benefits", ur: "اور فائدے", ar: "ومنافع" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "لِلنَّاسِ", transliteration: "linnāsi", meaning: { en: "for people", ur: "لوگوں کے لیے", ar: "للناس" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 2, to: 5, label: 'عطف' },
        { from: 7, to: 8, label: 'عطف' },
        { from: 12, to: 13, label: 'فعل + مفعول به' },
        { from: 15, to: 16, label: 'موصوف + صفت' },
        { from: 15, to: 17, label: 'عطف' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "وَلَقَدْ أَرْسَلْنَا نُوحًا وَإِبْرَاهِيمَ وَجَعَلْنَا فِي ذُرِّيَّتِهِمَا النُّبُوَّةَ وَالْكِتَابَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم نے بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "نُوحًا", transliteration: "Nūḥan", meaning: { en: "Noah", ur: "نوح کو", ar: "نوحا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَإِبْرَاهِيمَ", transliteration: "wa-Ibrāhīma", meaning: { en: "and Abraham", ur: "اور ابراہیم کو", ar: "وإبراهيم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", meaning: { en: "and We placed", ur: "اور رکھ دی", ar: "وجعلنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "ذُرِّيَّتِهِمَا", transliteration: "dhurriyyatihimā", meaning: { en: "their descendants", ur: "ان دونوں کی اولاد", ar: "ذريتهما" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "dual" } },
      { arabic: "النُّبُوَّةَ", transliteration: "al-nubuwwata", meaning: { en: "prophethood", ur: "نبوت", ar: "النبوة" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَالْكِتَابَ", transliteration: "wal-kitāba", meaning: { en: "and the Book", ur: "اور کتاب", ar: "والكتاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 2, to: 5, label: 'عطف' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'عطف' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "ثُمَّ قَفَّيْنَا عَلَىٰ آثَارِهِم بِرُسُلِنَا وَقَفَّيْنَا بِعِيسَى ابْنِ مَرْيَمَ وَآتَيْنَاهُ الْإِنجِيلَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "قَفَّيْنَا", transliteration: "qaffaynā", meaning: { en: "We sent following", ur: "ہم نے بھیجا", ar: "قفينا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ق-ف-و" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "آثَارِهِم", transliteration: "āthārihim", meaning: { en: "their footsteps", ur: "ان کے نقش قدم", ar: "آثارهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "بِرُسُلِنَا", transliteration: "birusulinā", meaning: { en: "Our messengers", ur: "اپنے رسولوں کو", ar: "برسلنا" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَقَفَّيْنَا", transliteration: "waqaffaynā", meaning: { en: "and We followed", ur: "اور بھیجا", ar: "وقفينا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II" } },
      { arabic: "بِعِيسَى", transliteration: "bi-ʿĪsā", meaning: { en: "with Jesus", ur: "عیسیٰ کو", ar: "بعيسى" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "ابْنِ", transliteration: "ibni", meaning: { en: "son", ur: "بیٹے", ar: "ابن" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَرْيَمَ", transliteration: "Maryama", meaning: { en: "of Mary", ur: "مریم کے", ar: "مريم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَآتَيْنَاهُ", transliteration: "waʾātaynāhu", meaning: { en: "and We gave him", ur: "اور ہم نے دی", ar: "وآتيناه" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "الْإِنجِيلَ", transliteration: "al-Injīla", meaning: { en: "the Gospel", ur: "انجیل", ar: "الإنجيل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 2, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + مفعول به' },
        { from: 6, to: 10, label: 'عطف' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَآمِنُوا بِرَسُولِهِ يُؤْتِكُمْ كِفْلَيْنِ مِن رَّحْمَتِهِ وَيَجْعَل لَّكُمْ نُورًا تَمْشُونَ بِهِ وَيَغْفِرْ لَكُمْ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "اے", ar: "أيها" }, pos: "PRON", posLabel: "PRON", grammar: { type: "address" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV" } },
      { arabic: "اتَّقُوا", transliteration: "ittaqū", meaning: { en: "fear", ur: "ڈرو", ar: "اتقوا" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "و-ق-ي", mood: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَآمِنُوا", transliteration: "waʾāminū", meaning: { en: "and believe", ur: "اور ایمان لاؤ", ar: "وآمنوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", mood: "imperative" } },
      { arabic: "بِرَسُولِهِ", transliteration: "birasūlihi", meaning: { en: "in His Messenger", ur: "اس کے رسول پر", ar: "برسوله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "يُؤْتِكُمْ", transliteration: "yuʾtikum", meaning: { en: "He will give you", ur: "تمہیں دے گا", ar: "يؤتكم" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "كِفْلَيْنِ", transliteration: "kiflayni", meaning: { en: "double portion", ur: "دوہرا حصہ", ar: "كفلين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "dual" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "رَّحْمَتِهِ", transliteration: "raḥmatihi", meaning: { en: "His mercy", ur: "اس کی رحمت", ar: "رحمته" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَيَجْعَل", transliteration: "wayajʿal", meaning: { en: "and make", ur: "اور بنائے گا", ar: "ويجعل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "نُورًا", transliteration: "nūran", meaning: { en: "a light", ur: "نور", ar: "نورا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "تَمْشُونَ", transliteration: "tamshūna", meaning: { en: "you walk", ur: "چلو گے", ar: "تمشون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-ش-ي" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "with it", ur: "اس میں", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "وَيَغْفِرْ", transliteration: "wayaghfir", meaning: { en: "and forgive", ur: "اور معاف کرے گا", ar: "ويغفر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "غ-ف-ر" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "you", ur: "تمہیں", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 5, to: 7, label: 'عطف' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 9, to: 13, label: 'عطف' },
        { from: 16, to: 18, label: 'عطف' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "لِّئَلَّا يَعْلَمَ أَهْلُ الْكِتَابِ أَلَّا يَقْدِرُونَ عَلَىٰ شَيْءٍ مِّن فَضْلِ اللَّهِ وَأَنَّ الْفَضْلَ بِيَدِ اللَّهِ يُؤْتِيهِ مَن يَشَاءُ وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ",
    words: [
      { arabic: "لِّئَلَّا", transliteration: "li-allā", meaning: { en: "So that", ur: "تاکہ", ar: "لئلا" }, pos: "P+CONJ+NEG", posLabel: "P+CONJ+NEG", grammar: { type: "purpose" } },
      { arabic: "يَعْلَمَ", transliteration: "yaʿlama", meaning: { en: "may know", ur: "جان لیں", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "أَهْلُ", transliteration: "ahlu", meaning: { en: "People", ur: "اہل", ar: "أهل" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْكِتَابِ", transliteration: "al-kitābi", meaning: { en: "of the Book", ur: "کتاب", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "that they have no", ur: "کہ نہیں", ar: "ألا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "يَقْدِرُونَ", transliteration: "yaqdirūna", meaning: { en: "power", ur: "قادر ہیں", ar: "يقدرون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-د-ر" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "anything", ur: "کسی چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "فَضْلِ", transliteration: "faḍli", meaning: { en: "bounty", ur: "فضل", ar: "فضل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَأَنَّ", transliteration: "wa-anna", meaning: { en: "and that", ur: "اور یہ کہ", ar: "وأن" }, pos: "CONJ+CONJ", posLabel: "CONJ+CONJ", grammar: { type: "subordinating" } },
      { arabic: "الْفَضْلَ", transliteration: "al-faḍla", meaning: { en: "the bounty", ur: "فضل", ar: "الفضل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِيَدِ", transliteration: "biyadi", meaning: { en: "is in hand", ur: "ہاتھ میں ہے", ar: "بيد" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "يُؤْتِيهِ", transliteration: "yuʾtīhi", meaning: { en: "He gives it", ur: "دیتا ہے", ar: "يؤتيه" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "to whom", ur: "جسے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "is Owner", ur: "والا ہے", ar: "ذو" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْفَضْلِ", transliteration: "al-faḍli", meaning: { en: "of bounty", ur: "فضل", ar: "الفضل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْعَظِيمِ", transliteration: "al-ʿaẓīmi", meaning: { en: "the Great", ur: "بڑے", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'موصول + صلة' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'موصوف + صفت' }
      ]
    }
  }
};

export default TREEBANK_DATA;
