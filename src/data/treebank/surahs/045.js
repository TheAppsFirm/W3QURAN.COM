/**
 * Surah Al-Jathiyah (The Kneeling) - Surah 45
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 45,
  surahName: "Al-Jathiyah",
  surahNameArabic: "الجاثية",
  totalAyahs: 37,
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
    text: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ",
    words: [
      { arabic: "تَنزِيلُ", transliteration: "tanzīlu", meaning: { en: "The revelation", ur: "اترنا", ar: "تنزيل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ز-ل" } },
      { arabic: "الْكِتَابِ", transliteration: "al-kitābi", meaning: { en: "of the Book", ur: "کتاب کا", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ك-ت-ب" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "is from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْعَزِيزِ", transliteration: "al-ʿazīzi", meaning: { en: "the Almighty", ur: "غالب", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ز-ز" } },
      { arabic: "الْحَكِيمِ", transliteration: "al-ḥakīmi", meaning: { en: "the Wise", ur: "حکمت والے", ar: "الحكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ح-ك-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "إِنَّ فِي السَّمَاوَاتِ وَالْأَرْضِ لَآيَاتٍ لِّلْمُؤْمِنِينَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "لَآيَاتٍ", transliteration: "la-āyātin", meaning: { en: "are surely signs", ur: "یقیناً نشانیاں ہیں", ar: "لآيات" }, pos: "EMPH+N", posLabel: "EMPH+N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "لِّلْمُؤْمِنِينَ", transliteration: "lilmuʾminīna", meaning: { en: "for the believers", ur: "ایمان والوں کے لیے", ar: "للمؤمنين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural", root: "أ-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِن دَابَّةٍ آيَاتٌ لِّقَوْمٍ يُوقِنُونَ",
    words: [
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "And in", ur: "اور میں", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "preposition" } },
      { arabic: "خَلْقِكُمْ", transliteration: "khalqikum", meaning: { en: "your creation", ur: "تمہاری پیدائش", ar: "خلقكم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ل-ق" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "يَبُثُّ", transliteration: "yabuththu", meaning: { en: "He disperses", ur: "پھیلاتا ہے", ar: "يبث" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-ث-ث" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "دَابَّةٍ", transliteration: "dābbatin", meaning: { en: "moving creatures", ur: "جانور", ar: "دابة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "د-ب-ب" } },
      { arabic: "آيَاتٌ", transliteration: "āyātun", meaning: { en: "are signs", ur: "نشانیاں ہیں", ar: "آيات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "لِّقَوْمٍ", transliteration: "liqawmin", meaning: { en: "for a people", ur: "ان لوگوں کے لیے", ar: "لقوم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "يُوقِنُونَ", transliteration: "yūqinūna", meaning: { en: "who are certain", ur: "جو یقین رکھتے ہیں", ar: "يوقنون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ي-ق-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَمَا أَنزَلَ اللَّهُ مِنَ السَّمَاءِ مِن رِّزْقٍ فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا وَتَصْرِيفِ الرِّيَاحِ آيَاتٌ لِّقَوْمٍ يَعْقِلُونَ",
    words: [
      { arabic: "وَاخْتِلَافِ", transliteration: "wakhtilāfi", meaning: { en: "And the alternation", ur: "اور آنے جانے میں", ar: "واختلاف" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "خ-ل-ف" } },
      { arabic: "اللَّيْلِ", transliteration: "al-layli", meaning: { en: "of the night", ur: "رات کے", ar: "الليل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالنَّهَارِ", transliteration: "wal-nahāri", meaning: { en: "and the day", ur: "اور دن", ar: "والنهار" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", meaning: { en: "sends down", ur: "اتارتا ہے", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "the sky", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "رِّزْقٍ", transliteration: "rizqin", meaning: { en: "provision", ur: "رزق", ar: "رزق" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ز-ق" } },
      { arabic: "فَأَحْيَا", transliteration: "fa-aḥyā", meaning: { en: "and gives life", ur: "پھر زندہ کیا", ar: "فأحيا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "thereby", ur: "اس سے", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍa", meaning: { en: "the earth", ur: "زمین کو", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مَوْتِهَا", transliteration: "mawtihā", meaning: { en: "its death", ur: "اس کی موت کے", ar: "موتها" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-و-ت" } },
      { arabic: "وَتَصْرِيفِ", transliteration: "wataṣrīfi", meaning: { en: "and directing", ur: "اور پھیرنے میں", ar: "وتصريف" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ص-ر-ف" } },
      { arabic: "الرِّيَاحِ", transliteration: "al-riyāḥi", meaning: { en: "of the winds", ur: "ہواؤں", ar: "الرياح" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "آيَاتٌ", transliteration: "āyātun", meaning: { en: "are signs", ur: "نشانیاں ہیں", ar: "آيات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "لِّقَوْمٍ", transliteration: "liqawmin", meaning: { en: "for a people", ur: "ان لوگوں کے لیے", ar: "لقوم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", meaning: { en: "who reason", ur: "جو عقل رکھتے ہیں", ar: "يعقلون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ق-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'عطف' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ بِالْحَقِّ فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ",
    words: [
      { arabic: "تِلْكَ", transliteration: "tilka", meaning: { en: "These are", ur: "یہ ہیں", ar: "تلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "آيَاتُ", transliteration: "āyātu", meaning: { en: "the verses", ur: "آیات", ar: "آيات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "نَتْلُوهَا", transliteration: "natlūhā", meaning: { en: "We recite them", ur: "ہم پڑھتے ہیں انہیں", ar: "نتلوها" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ت-ل-و" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "to you", ur: "تم پر", ar: "عليك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "in truth", ur: "سچائی کے ساتھ", ar: "بالحق" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-ق-ق" } },
      { arabic: "فَبِأَيِّ", transliteration: "fabiʾayyi", meaning: { en: "Then in what", ur: "پھر کون سی", ar: "فبأي" }, pos: "CONJ+P+INTG", posLabel: "CONJ+P+INTG", grammar: { type: "interrogative" } },
      { arabic: "حَدِيثٍ", transliteration: "ḥadīthin", meaning: { en: "statement", ur: "بات", ar: "حديث" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-د-ث" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَآيَاتِهِ", transliteration: "wa-āyātihi", meaning: { en: "and His verses", ur: "اور اس کی آیات کے", ar: "وآياته" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yuʾminūna", meaning: { en: "will they believe", ur: "ایمان لائیں گے", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'عطف' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَيْلٌ لِّكُلِّ أَفَّاكٍ أَثِيمٍ",
    words: [
      { arabic: "وَيْلٌ", transliteration: "waylun", meaning: { en: "Woe", ur: "ہلاکت ہے", ar: "ويل" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لِّكُلِّ", transliteration: "likulli", meaning: { en: "to every", ur: "ہر ایک کے لیے", ar: "لكل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "أَفَّاكٍ", transliteration: "affākin", meaning: { en: "sinful liar", ur: "جھوٹے", ar: "أفاك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ف-ك" } },
      { arabic: "أَثِيمٍ", transliteration: "athīmin", meaning: { en: "sinner", ur: "گناہگار", ar: "أثيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-ث-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "يَسْمَعُ آيَاتِ اللَّهِ تُتْلَىٰ عَلَيْهِ ثُمَّ يُصِرُّ مُسْتَكْبِرًا كَأَن لَّمْ يَسْمَعْهَا فَبَشِّرْهُ بِعَذَابٍ أَلِيمٍ",
    words: [
      { arabic: "يَسْمَعُ", transliteration: "yasmaʿu", meaning: { en: "He hears", ur: "سنتا ہے", ar: "يسمع" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-م-ع" } },
      { arabic: "آيَاتِ", transliteration: "āyāti", meaning: { en: "the verses", ur: "آیات کو", ar: "آيات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "تُتْلَىٰ", transliteration: "tutlā", meaning: { en: "being recited", ur: "پڑھی جاتی ہیں", ar: "تتلى" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ت-ل-و" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "to him", ur: "اس پر", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "يُصِرُّ", transliteration: "yuṣirru", meaning: { en: "persists", ur: "اڑا رہتا ہے", ar: "يصر" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ص-ر-ر" } },
      { arabic: "مُسْتَكْبِرًا", transliteration: "mustakbiran", meaning: { en: "arrogantly", ur: "تکبر کرتے ہوئے", ar: "مستكبرا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ك-ب-ر" } },
      { arabic: "كَأَن", transliteration: "kaʾan", meaning: { en: "as if", ur: "گویا", ar: "كأن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "comparative" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَسْمَعْهَا", transliteration: "yasmaʿhā", meaning: { en: "he heard them", ur: "اس نے سنی ہی نہیں", ar: "يسمعها" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-م-ع" } },
      { arabic: "فَبَشِّرْهُ", transliteration: "fabashirhu", meaning: { en: "so give him tidings", ur: "پس اسے خوشخبری دو", ar: "فبشره" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", mood: "imperative", root: "ب-ش-ر" } },
      { arabic: "بِعَذَابٍ", transliteration: "biʿadhābin", meaning: { en: "of a punishment", ur: "عذاب کی", ar: "بعذاب" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ع-ذ-ب" } },
      { arabic: "أَلِيمٍ", transliteration: "alīmin", meaning: { en: "painful", ur: "دردناک", ar: "أليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'حال' },
        { from: 10, to: 11, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'عطف' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "وَإِذَا عَلِمَ مِنْ آيَاتِنَا شَيْئًا اتَّخَذَهَا هُزُوًا أُولَٰئِكَ لَهُمْ عَذَابٌ مُّهِينٌ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وإذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "عَلِمَ", transliteration: "ʿalima", meaning: { en: "he knows", ur: "اسے پتہ چلے", ar: "علم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "آيَاتِنَا", transliteration: "āyātinā", meaning: { en: "Our verses", ur: "ہماری آیات", ar: "آياتنا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "anything", ur: "کوئی بات", ar: "شيئا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "اتَّخَذَهَا", transliteration: "ittakhadhahā", meaning: { en: "he takes them", ur: "انہیں بنا لیتا ہے", ar: "اتخذها" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "أ-خ-ذ" } },
      { arabic: "هُزُوًا", transliteration: "huzuwan", meaning: { en: "in ridicule", ur: "مذاق", ar: "هزوا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ه-ز-أ" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "Those", ur: "یہی لوگ", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", number: "plural" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے ہے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "is a punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "مُّهِينٌ", transliteration: "muhīnun", meaning: { en: "humiliating", ur: "رسوا کرنے والا", ar: "مهين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ه-و-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "مِّن وَرَائِهِمْ جَهَنَّمُ وَلَا يُغْنِي عَنْهُم مَّا كَسَبُوا شَيْئًا وَلَا مَا اتَّخَذُوا مِن دُونِ اللَّهِ أَوْلِيَاءَ وَلَهُمْ عَذَابٌ عَظِيمٌ",
    words: [
      { arabic: "مِّن", transliteration: "min", meaning: { en: "Before", ur: "کے آگے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "وَرَائِهِمْ", transliteration: "warāʾihim", meaning: { en: "them", ur: "ان", ar: "ورائهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "جَهَنَّمُ", transliteration: "jahannamu", meaning: { en: "is Hell", ur: "جہنم ہے", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "يُغْنِي", transliteration: "yughnī", meaning: { en: "will avail", ur: "کام آئے گا", ar: "يغني" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "غ-ن-ي" } },
      { arabic: "عَنْهُم", transliteration: "ʿanhum", meaning: { en: "them", ur: "انہیں", ar: "عنهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "كَسَبُوا", transliteration: "kasabū", meaning: { en: "they earned", ur: "انہوں نے کمایا", ar: "كسبوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-س-ب" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "at all", ur: "کچھ بھی", ar: "شيئا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ ہی", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "اتَّخَذُوا", transliteration: "ittakhadhū", meaning: { en: "they took", ur: "انہوں نے بنا لیے", ar: "اتخذوا" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "أ-خ-ذ" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "کے سوا", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "علاوہ", ar: "دون" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَوْلِيَاءَ", transliteration: "awliyāʾa", meaning: { en: "as protectors", ur: "دوست", ar: "أولياء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "و-ل-ي" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور ان کے لیے ہے", ar: "ولهم" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "possession" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "a punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "عَظِيمٌ", transliteration: "ʿaẓīmun", meaning: { en: "great", ur: "بڑا", ar: "عظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ظ-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'فعل + مفعول به' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "هَـٰذَا هُدًۭى ۖ وَٱلَّذِينَ كَفَرُوا۟ بِـَٔايَـٰتِ رَبِّهِمْ لَهُمْ عَذَابٌۭ مِّن رِّجْزٍ أَلِيمٌ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُدًۭى ۖ", transliteration: "hudan", meaning: { en: "(is) guidance", ur: "(is) guidance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "And those who", ur: "اور جو لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieve", ur: "disbelieve" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", meaning: { en: "in (the) Verses", ur: "میں (the) Verses" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "(of) their Lord", ur: "(of) their رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", meaning: { en: "(is) a punishment", ur: "(is) a عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رِّجْزٍ", transliteration: "rij'zin", meaning: { en: "filth", ur: "filth" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", meaning: { en: "painful", ur: "painful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  12: {
    ayahNumber: 12,
    text: "۞ ٱللَّهُ ٱلَّذِى سَخَّرَ لَكُمُ ٱلْبَحْرَ لِتَجْرِىَ ٱلْفُلْكُ فِيهِ بِأَمْرِهِۦ وَلِتَبْتَغُوا۟ مِن فَضْلِهِۦ وَلَعَلَّكُمْ تَشْكُرُونَ",
    words: [
      { arabic: "۞ ٱللَّهُ", transliteration: "al-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَخَّرَ", transliteration: "sakhara", meaning: { en: "subjected", ur: "subjected" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْبَحْرَ", transliteration: "l-baḥra", meaning: { en: "the sea", ur: "the sea" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتَجْرِىَ", transliteration: "litajriya", meaning: { en: "that may sail", ur: "وہ may sail" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْفُلْكُ", transliteration: "l-ful'ku", meaning: { en: "the ships", ur: "the ships" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِأَمْرِهِۦ", transliteration: "bi-amrihi", meaning: { en: "by His Command", ur: "by His Command" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلِتَبْتَغُوا۟", transliteration: "walitabtaghū", meaning: { en: "and that you may seek", ur: "اور وہ تم may seek" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَضْلِهِۦ", transliteration: "faḍlihi", meaning: { en: "His Bounty", ur: "His Bounty" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَلَعَلَّكُمْ", transliteration: "walaʿallakum", meaning: { en: "and that you may", ur: "اور وہ تم may" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَشْكُرُونَ", transliteration: "tashkurūna", meaning: { en: "give thanks", ur: "give thanks" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  13: {
    ayahNumber: 13,
    text: "وَسَخَّرَ لَكُم مَّا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ جَمِيعًۭا مِّنْهُ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ",
    words: [
      { arabic: "وَسَخَّرَ", transliteration: "wasakhara", meaning: { en: "And He has subjected", ur: "اور وہ has subjected" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "whatever", ur: "whatever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "(is) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور whatever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "(is) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth ", ur: "زمین " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَمِيعًۭا", transliteration: "jamīʿan", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُ ۚ", transliteration: "min'hu", meaning: { en: "from Him", ur: "سے Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", meaning: { en: "surely are Signs", ur: "یقیناً are نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", meaning: { en: "for a people", ur: "for a لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَفَكَّرُونَ", transliteration: "yatafakkarūna", meaning: { en: "who give thought", ur: "جو give thought" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  14: {
    ayahNumber: 14,
    text: "قُل لِّلَّذِينَ ءَامَنُوا۟ يَغْفِرُوا۟ لِلَّذِينَ لَا يَرْجُونَ أَيَّامَ ٱللَّهِ لِيَجْزِىَ قَوْمًۢا بِمَا كَانُوا۟ يَكْسِبُونَ",
    words: [
      { arabic: "قُل", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "کو جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَغْفِرُوا۟", transliteration: "yaghfirū", meaning: { en: "(to) forgive", ur: "(کو) forgive" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَرْجُونَ", transliteration: "yarjūna", meaning: { en: "hope", ur: "hope" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَيَّامَ", transliteration: "ayyāma", meaning: { en: "(for the) days", ur: "(for the) days" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِيَجْزِىَ", transliteration: "liyajziya", meaning: { en: "that He may recompense", ur: "وہ وہ may recompense" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "قَوْمًۢا", transliteration: "qawman", meaning: { en: "a people", ur: "a لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "for کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ لوگ used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", meaning: { en: "earn", ur: "earn" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  15: {
    ayahNumber: 15,
    text: "مَنْ عَمِلَ صَـٰلِحًۭا فَلِنَفْسِهِۦ ۖ وَمَنْ أَسَآءَ فَعَلَيْهَا ۖ ثُمَّ إِلَىٰ رَبِّكُمْ تُرْجَعُونَ",
    words: [
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "Whoever", ur: "Whoever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمِلَ", transliteration: "ʿamila", meaning: { en: "does", ur: "does" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", meaning: { en: "a righteous deed", ur: "a نیک deed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَلِنَفْسِهِۦ ۖ", transliteration: "falinafsihi", meaning: { en: "then it is for his soul", ur: "پھر it is for his روح" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَمَنْ", transliteration: "waman", meaning: { en: "and whoever", ur: "اور whoever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَسَآءَ", transliteration: "asāa", meaning: { en: "does evil", ur: "does برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَعَلَيْهَا ۖ", transliteration: "faʿalayhā", meaning: { en: "then it (is) against it", ur: "پھر it (is) against it" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّكُمْ", transliteration: "rabbikum", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُرْجَعُونَ", transliteration: "tur'jaʿūna", meaning: { en: "you will be returned", ur: "تم will be returned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  16: {
    ayahNumber: 16,
    text: "وَلَقَدْ ءَاتَيْنَا بَنِىٓ إِسْرَٰٓءِيلَ ٱلْكِتَـٰبَ وَٱلْحُكْمَ وَٱلنُّبُوَّةَ وَرَزَقْنَـٰهُم مِّنَ ٱلطَّيِّبَـٰتِ وَفَضَّلْنَـٰهُمْ عَلَى ٱلْعَـٰلَمِينَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَاتَيْنَا", transliteration: "ātaynā", meaning: { en: "We gave", ur: "ہم gave" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَنِىٓ", transliteration: "banī", meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", meaning: { en: "the Book", ur: "the کتاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْحُكْمَ", transliteration: "wal-ḥuk'ma", meaning: { en: "and the wisdom", ur: "اور the wisdom" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَٱلنُّبُوَّةَ", transliteration: "wal-nubuwata", meaning: { en: "and the Prophethood", ur: "اور the Prophethood" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَرَزَقْنَـٰهُم", transliteration: "warazaqnāhum", meaning: { en: "and We provided them", ur: "اور ہم provided them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلطَّيِّبَـٰتِ", transliteration: "l-ṭayibāti", meaning: { en: "the good things", ur: "the اچھا things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَفَضَّلْنَـٰهُمْ", transliteration: "wafaḍḍalnāhum", meaning: { en: "and We preferred them", ur: "اور ہم preferred them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "over", ur: "اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", meaning: { en: "the worlds", ur: "the worlds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  17: {
    ayahNumber: 17,
    text: "وَءَاتَيْنَـٰهُم بَيِّنَـٰتٍۢ مِّنَ ٱلْأَمْرِ ۖ فَمَا ٱخْتَلَفُوٓا۟ إِلَّا مِنۢ بَعْدِ مَا جَآءَهُمُ ٱلْعِلْمُ بَغْيًۢا بَيْنَهُمْ ۚ إِنَّ رَبَّكَ يَقْضِى بَيْنَهُمْ يَوْمَ ٱلْقِيَـٰمَةِ فِيمَا كَانُوا۟ فِيهِ يَخْتَلِفُونَ",
    words: [
      { arabic: "وَءَاتَيْنَـٰهُم", transliteration: "waātaynāhum", meaning: { en: "And We gave them", ur: "اور ہم gave them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَيِّنَـٰتٍۢ", transliteration: "bayyinātin", meaning: { en: "clear proofs", ur: "clear proofs" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَمْرِ ۖ", transliteration: "l-amri", meaning: { en: "the matter", ur: "the matter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱخْتَلَفُوٓا۟", transliteration: "ikh'talafū", meaning: { en: "they differed", ur: "وہ لوگ differed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "[what]", ur: "[کیا]" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "جَآءَهُمُ", transliteration: "jāahumu", meaning: { en: "came to them", ur: "came کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعِلْمُ", transliteration: "l-ʿil'mu", meaning: { en: "the knowledge", ur: "the knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَغْيًۢا", transliteration: "baghyan", meaning: { en: "(out of) envy", ur: "(out of) envy" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنَهُمْ ۚ", transliteration: "baynahum", meaning: { en: "between themselves", ur: "درمیان themselves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقْضِى", transliteration: "yaqḍī", meaning: { en: "will judge", ur: "will judge" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "between them", ur: "درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(on the) Day", ur: "(پر the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيمَا", transliteration: "fīmā", meaning: { en: "about what", ur: "about کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ لوگ used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَخْتَلِفُونَ", transliteration: "yakhtalifūna", meaning: { en: "differ", ur: "differ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  18: {
    ayahNumber: 18,
    text: "ثُمَّ جَعَلْنَـٰكَ عَلَىٰ شَرِيعَةٍۢ مِّنَ ٱلْأَمْرِ فَٱتَّبِعْهَا وَلَا تَتَّبِعْ أَهْوَآءَ ٱلَّذِينَ لَا يَعْلَمُونَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلْنَـٰكَ", transliteration: "jaʿalnāka", meaning: { en: "We put you", ur: "ہم put تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَرِيعَةٍۢ", transliteration: "sharīʿatin", meaning: { en: "an ordained way", ur: "an ordained راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَمْرِ", transliteration: "l-amri", meaning: { en: "the matter", ur: "the matter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱتَّبِعْهَا", transliteration: "fa-ittabiʿ'hā", meaning: { en: "so follow it", ur: "so follow it" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and (do) not", ur: "اور (do) نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَتَّبِعْ", transliteration: "tattabiʿ", meaning: { en: "follow", ur: "follow" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَهْوَآءَ", transliteration: "ahwāa", meaning: { en: "(the) desires", ur: "(the) desires" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(of) those who", ur: "(of) جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'نفی + فعل' }
      ],
    },
  },
  19: {
    ayahNumber: 19,
    text: "إِنَّهُمْ لَن يُغْنُوا۟ عَنكَ مِنَ ٱللَّهِ شَيْـًۭٔا ۚ وَإِنَّ ٱلظَّـٰلِمِينَ بَعْضُهُمْ أَوْلِيَآءُ بَعْضٍۢ ۖ وَٱللَّهُ وَلِىُّ ٱلْمُتَّقِينَ",
    words: [
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَن", transliteration: "lan", meaning: { en: "never", ur: "never" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُغْنُوا۟", transliteration: "yugh'nū", meaning: { en: "will avail", ur: "will avail" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنكَ", transliteration: "ʿanka", meaning: { en: "you", ur: "تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "against", ur: "against" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَيْـًۭٔا ۚ", transliteration: "shayan", meaning: { en: "(in) anything", ur: "(میں) anything" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", meaning: { en: "the wrongdoers", ur: "the wrongdoers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", meaning: { en: "some of them", ur: "some of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْلِيَآءُ", transliteration: "awliyāu", meaning: { en: "(are) allies", ur: "(are) allies" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْضٍۢ ۖ", transliteration: "baʿḍin", meaning: { en: "(of) others", ur: "(of) others" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", meaning: { en: "and Allah", ur: "اور اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَلِىُّ", transliteration: "waliyyu", meaning: { en: "(is the) Protector", ur: "(is the) Protector" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", meaning: { en: "(of) the righteous", ur: "(of) the نیک" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  20: {
    ayahNumber: 20,
    text: "هَـٰذَا بَصَـٰٓئِرُ لِلنَّاسِ وَهُدًۭى وَرَحْمَةٌۭ لِّقَوْمٍۢ يُوقِنُونَ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَصَـٰٓئِرُ", transliteration: "baṣāiru", meaning: { en: "(is) enlightenment", ur: "(is) enlightenment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلنَّاسِ", transliteration: "lilnnāsi", meaning: { en: "for mankind", ur: "for mankind" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَهُدًۭى", transliteration: "wahudan", meaning: { en: "and guidance", ur: "اور guidance" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَرَحْمَةٌۭ", transliteration: "waraḥmatun", meaning: { en: "and mercy", ur: "اور رحمت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", meaning: { en: "for a people", ur: "for a لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُوقِنُونَ", transliteration: "yūqinūna", meaning: { en: "who are certain", ur: "جو are certain" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  21: {
    ayahNumber: 21,
    text: "أَمْ حَسِبَ ٱلَّذِينَ ٱجْتَرَحُوا۟ ٱلسَّيِّـَٔاتِ أَن نَّجْعَلَهُمْ كَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ سَوَآءًۭ مَّحْيَاهُمْ وَمَمَاتُهُمْ ۚ سَآءَ مَا يَحْكُمُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Do", ur: "Do" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "حَسِبَ", transliteration: "ḥasiba", meaning: { en: "think", ur: "think" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱجْتَرَحُوا۟", transliteration: "ij'taraḥū", meaning: { en: "commit", ur: "commit" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّيِّـَٔاتِ", transliteration: "l-sayiāti", meaning: { en: "evil deeds", ur: "برا deeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّجْعَلَهُمْ", transliteration: "najʿalahum", meaning: { en: "We will make them", ur: "ہم will make them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَٱلَّذِينَ", transliteration: "ka-alladhīna", meaning: { en: "like those who", ur: "like جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", meaning: { en: "and did", ur: "اور did" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک deeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَوَآءًۭ", transliteration: "sawāan", meaning: { en: "equal", ur: "equal" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّحْيَاهُمْ", transliteration: "maḥyāhum", meaning: { en: "(in) their life", ur: "(میں) their زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَمَاتُهُمْ ۚ", transliteration: "wamamātuhum", meaning: { en: "and their death", ur: "اور their موت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "سَآءَ", transliteration: "sāa", meaning: { en: "Evil is", ur: "برا is" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَحْكُمُونَ", transliteration: "yaḥkumūna", meaning: { en: "they judge", ur: "وہ لوگ judge" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصول + صلة' }
      ],
    },
  },
  22: {
    ayahNumber: 22,
    text: "وَخَلَقَ ٱللَّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ بِٱلْحَقِّ وَلِتُجْزَىٰ كُلُّ نَفْسٍۭ بِمَا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ",
    words: [
      { arabic: "وَخَلَقَ", transliteration: "wakhalaqa", meaning: { en: "And Allah created", ur: "اور اللہ پیدا کیا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "And Allah created", ur: "اور اللہ پیدا کیا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلِتُجْزَىٰ", transliteration: "walituj'zā", meaning: { en: "and that may be recompensed", ur: "اور وہ may be recompensed" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَفْسٍۭ", transliteration: "nafsin", meaning: { en: "soul", ur: "روح" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "for کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَسَبَتْ", transliteration: "kasabat", meaning: { en: "it has earned", ur: "it has earned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "will not be wronged", ur: "will نہیں be wronged" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", meaning: { en: "will not be wronged", ur: "will نہیں be wronged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'نفی + فعل' }
      ],
    },
  },
  23: {
    ayahNumber: 23,
    text: "أَفَرَءَيْتَ مَنِ ٱتَّخَذَ إِلَـٰهَهُۥ هَوَىٰهُ وَأَضَلَّهُ ٱللَّهُ عَلَىٰ عِلْمٍۢ وَخَتَمَ عَلَىٰ سَمْعِهِۦ وَقَلْبِهِۦ وَجَعَلَ عَلَىٰ بَصَرِهِۦ غِشَـٰوَةًۭ فَمَن يَهْدِيهِ مِنۢ بَعْدِ ٱللَّهِ ۚ أَفَلَا تَذَكَّرُونَ",
    words: [
      { arabic: "أَفَرَءَيْتَ", transliteration: "afara-ayta", meaning: { en: "Have you seen", ur: "Have تم seen" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنِ", transliteration: "mani", meaning: { en: "(he) who", ur: "(وہ) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", meaning: { en: "takes", ur: "takes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهَهُۥ", transliteration: "ilāhahu", meaning: { en: "(as) his god", ur: "(as) his اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَوَىٰهُ", transliteration: "hawāhu", meaning: { en: "his desire", ur: "his desire" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَضَلَّهُ", transliteration: "wa-aḍallahu", meaning: { en: "and Allah lets him go astray", ur: "اور اللہ lets him go astray" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "and Allah lets him go astray", ur: "اور اللہ lets him go astray" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "knowingly", ur: "knowingly" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِلْمٍۢ", transliteration: "ʿil'min", meaning: { en: "knowingly", ur: "knowingly" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَخَتَمَ", transliteration: "wakhatama", meaning: { en: "and He sets a seal", ur: "اور وہ sets a seal" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَمْعِهِۦ", transliteration: "samʿihi", meaning: { en: "his hearing", ur: "his hearing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَقَلْبِهِۦ", transliteration: "waqalbihi", meaning: { en: "and his heart", ur: "اور his دل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", meaning: { en: "and puts", ur: "اور puts" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَصَرِهِۦ", transliteration: "baṣarihi", meaning: { en: "his vision", ur: "his vision" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غِشَـٰوَةًۭ", transliteration: "ghishāwatan", meaning: { en: "a veil", ur: "a veil" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَن", transliteration: "faman", meaning: { en: "Then who", ur: "پھر جو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَهْدِيهِ", transliteration: "yahdīhi", meaning: { en: "will guide him", ur: "will guide him" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَلَا", transliteration: "afalā", meaning: { en: "Then will not", ur: "پھر will نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", meaning: { en: "you receive admonition", ur: "تم receive admonition" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  24: {
    ayahNumber: 24,
    text: "وَقَالُوا۟ مَا هِىَ إِلَّا حَيَاتُنَا ٱلدُّنْيَا نَمُوتُ وَنَحْيَا وَمَا يُهْلِكُنَآ إِلَّا ٱلدَّهْرُ ۚ وَمَا لَهُم بِذَٰلِكَ مِنْ عِلْمٍ ۖ إِنْ هُمْ إِلَّا يَظُنُّونَ",
    words: [
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "هِىَ", transliteration: "hiya", meaning: { en: "it", ur: "it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "(is) but", ur: "(is) لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَيَاتُنَا", transliteration: "ḥayātunā", meaning: { en: "our life", ur: "our زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "(of) the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَمُوتُ", transliteration: "namūtu", meaning: { en: "we die", ur: "ہم die" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَنَحْيَا", transliteration: "wanaḥyā", meaning: { en: "and we live", ur: "اور ہم live" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُهْلِكُنَآ", transliteration: "yuh'likunā", meaning: { en: "destroys us", ur: "destroys us" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدَّهْرُ ۚ", transliteration: "l-dahru", meaning: { en: "the time", ur: "the وقت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِذَٰلِكَ", transliteration: "bidhālika", meaning: { en: "of that", ur: "of وہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِلْمٍ ۖ", transliteration: "ʿil'min", meaning: { en: "knowledge", ur: "knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "(do) but", ur: "(do) لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَظُنُّونَ", transliteration: "yaẓunnūna", meaning: { en: "guess", ur: "guess" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  25: {
    ayahNumber: 25,
    text: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ ءَايَـٰتُنَا بَيِّنَـٰتٍۢ مَّا كَانَ حُجَّتَهُمْ إِلَّآ أَن قَالُوا۟ ٱئْتُوا۟ بِـَٔابَآئِنَآ إِن كُنتُمْ صَـٰدِقِينَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُتْلَىٰ", transliteration: "tut'lā", meaning: { en: "are recited", ur: "are recited" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَـٰتُنَا", transliteration: "āyātunā", meaning: { en: "Our Verses", ur: "Our Verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيِّنَـٰتٍۢ", transliteration: "bayyinātin", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "is", ur: "is" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حُجَّتَهُمْ", transliteration: "ḥujjatahum", meaning: { en: "their argument", ur: "their argument" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّآ", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "they say", ur: "وہ لوگ کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱئْتُوا۟", transliteration: "i'tū", meaning: { en: "Bring", ur: "Bring" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِـَٔابَآئِنَآ", transliteration: "biābāinā", meaning: { en: "our forefathers", ur: "our forefathers" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you are", ur: "تم are" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", meaning: { en: "truthful", ur: "truthful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  26: {
    ayahNumber: 26,
    text: "قُلِ ٱللَّهُ يُحْيِيكُمْ ثُمَّ يُمِيتُكُمْ ثُمَّ يَجْمَعُكُمْ إِلَىٰ يَوْمِ ٱلْقِيَـٰمَةِ لَا رَيْبَ فِيهِ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
    words: [
      { arabic: "قُلِ", transliteration: "quli", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُحْيِيكُمْ", transliteration: "yuḥ'yīkum", meaning: { en: "gives you life", ur: "gives تم زندگی" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُمِيتُكُمْ", transliteration: "yumītukum", meaning: { en: "causes you to die", ur: "causes تم کو die" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَجْمَعُكُمْ", transliteration: "yajmaʿukum", meaning: { en: "He will gather you", ur: "وہ will gather تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: { en: "(the) Day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "no", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَيْبَ", transliteration: "rayba", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "about it", ur: "about it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "But", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "most", ur: "most" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "(of) the people", ur: "(of) the لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'نفی + فعل' }
      ],
    },
  },
  27: {
    ayahNumber: 27,
    text: "وَلِلَّهِ مُلْكُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَيَوْمَ تَقُومُ ٱلسَّاعَةُ يَوْمَئِذٍۢ يَخْسَرُ ٱلْمُبْطِلُونَ",
    words: [
      { arabic: "وَلِلَّهِ", transliteration: "walillahi", meaning: { en: "And for Allah", ur: "اور for اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُلْكُ", transliteration: "mul'ku", meaning: { en: "(is the) dominion", ur: "(is the) dominion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "(of) the heavens", ur: "(of) the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ ۚ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "and (the) Day", ur: "اور (the) دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَقُومُ", transliteration: "taqūmu", meaning: { en: "is established", ur: "is established" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّاعَةُ", transliteration: "l-sāʿatu", meaning: { en: "the Hour", ur: "the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَئِذٍۢ", transliteration: "yawma-idhin", meaning: { en: "that Day", ur: "وہ دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَخْسَرُ", transliteration: "yakhsaru", meaning: { en: "will lose", ur: "will lose" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمُبْطِلُونَ", transliteration: "l-mub'ṭilūna", meaning: { en: "the falsifiers", ur: "the falsifiers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  28: {
    ayahNumber: 28,
    text: "وَتَرَىٰ كُلَّ أُمَّةٍۢ جَاثِيَةًۭ ۚ كُلُّ أُمَّةٍۢ تُدْعَىٰٓ إِلَىٰ كِتَـٰبِهَا ٱلْيَوْمَ تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "وَتَرَىٰ", transliteration: "watarā", meaning: { en: "And you will see", ur: "اور تم will دیکھنا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", meaning: { en: "nation", ur: "nation" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَاثِيَةًۭ ۚ", transliteration: "jāthiyatan", meaning: { en: "kneeling", ur: "kneeling" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "Every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", meaning: { en: "nation", ur: "nation" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُدْعَىٰٓ", transliteration: "tud'ʿā", meaning: { en: "will be called", ur: "will be called" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كِتَـٰبِهَا", transliteration: "kitābihā", meaning: { en: "its record", ur: "its record" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "Today", ur: "Today" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُجْزَوْنَ", transliteration: "tuj'zawna", meaning: { en: "you will be recompensed", ur: "تم will be recompensed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(for) what", ur: "(for) کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'موصول + صلة' }
      ],
    },
  },
  29: {
    ayahNumber: 29,
    text: "هَـٰذَا كِتَـٰبُنَا يَنطِقُ عَلَيْكُم بِٱلْحَقِّ ۚ إِنَّا كُنَّا نَسْتَنسِخُ مَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كِتَـٰبُنَا", transliteration: "kitābunā", meaning: { en: "Our Record", ur: "Our Record" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَنطِقُ", transliteration: "yanṭiqu", meaning: { en: "speaks", ur: "speaks" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكُم", transliteration: "ʿalaykum", meaning: { en: "about you", ur: "about تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْحَقِّ ۚ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "[We] used to", ur: "[ہم] used کو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَسْتَنسِخُ", transliteration: "nastansikhu", meaning: { en: "transcribe", ur: "transcribe" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' }
      ],
    },
  },
  30: {
    ayahNumber: 30,
    text: "فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ فَيُدْخِلُهُمْ رَبُّهُمْ فِى رَحْمَتِهِۦ ۚ ذَٰلِكَ هُوَ ٱلْفَوْزُ ٱلْمُبِينُ",
    words: [
      { arabic: "فَأَمَّا", transliteration: "fa-ammā", meaning: { en: "Then as for", ur: "پھر as for" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", meaning: { en: "and did", ur: "اور did" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", meaning: { en: "[the] righteous deeds", ur: "[the] نیک deeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيُدْخِلُهُمْ", transliteration: "fayud'khiluhum", meaning: { en: "will admit them", ur: "will admit them" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "رَبُّهُمْ", transliteration: "rabbuhum", meaning: { en: "their Lord", ur: "their رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in(to)", ur: "میں(کو)" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَحْمَتِهِۦ ۚ", transliteration: "raḥmatihi", meaning: { en: "His mercy", ur: "His رحمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "[it]", ur: "[it]" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلْفَوْزُ", transliteration: "l-fawzu", meaning: { en: "(is) the success", ur: "(is) the success" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُبِينُ", transliteration: "l-mubīnu", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  31: {
    ayahNumber: 31,
    text: "وَأَمَّا ٱلَّذِينَ كَفَرُوٓا۟ أَفَلَمْ تَكُنْ ءَايَـٰتِى تُتْلَىٰ عَلَيْكُمْ فَٱسْتَكْبَرْتُمْ وَكُنتُمْ قَوْمًۭا مُّجْرِمِينَ",
    words: [
      { arabic: "وَأَمَّا", transliteration: "wa-ammā", meaning: { en: "But as for", ur: "لیکن as for" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوٓا۟", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَفَلَمْ", transliteration: "afalam", meaning: { en: "Then were not", ur: "پھر were نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَكُنْ", transliteration: "takun", meaning: { en: "Then were not", ur: "پھر were نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَـٰتِى", transliteration: "āyātī", meaning: { en: "My Verses", ur: "My Verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُتْلَىٰ", transliteration: "tut'lā", meaning: { en: "recited", ur: "recited" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱسْتَكْبَرْتُمْ", transliteration: "fa-is'takbartum", meaning: { en: "but you were proud", ur: "لیکن تم were proud" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَكُنتُمْ", transliteration: "wakuntum", meaning: { en: "and you became", ur: "اور تم became" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "قَوْمًۭا", transliteration: "qawman", meaning: { en: "a people", ur: "a لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّجْرِمِينَ", transliteration: "muj'rimīna", meaning: { en: "criminals", ur: "criminals" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    ayahNumber: 32,
    text: "وَإِذَا قِيلَ إِنَّ وَعْدَ ٱللَّهِ حَقٌّۭ وَٱلسَّاعَةُ لَا رَيْبَ فِيهَا قُلْتُم مَّا نَدْرِى مَا ٱلسَّاعَةُ إِن نَّظُنُّ إِلَّا ظَنًّۭا وَمَا نَحْنُ بِمُسْتَيْقِنِينَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "قِيلَ", transliteration: "qīla", meaning: { en: "it was said", ur: "it was کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعْدَ", transliteration: "waʿda", meaning: { en: "(the) Promise", ur: "(the) Promise" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَقٌّۭ", transliteration: "ḥaqqun", meaning: { en: "(is) true", ur: "(is) true" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلسَّاعَةُ", transliteration: "wal-sāʿatu", meaning: { en: "and the Hour ", ur: "اور the Hour " }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(there is) no", ur: "(there is) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَيْبَ", transliteration: "rayba", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "about it", ur: "about it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُلْتُم", transliteration: "qul'tum", meaning: { en: "you said", ur: "تم کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَدْرِى", transliteration: "nadrī", meaning: { en: "we know", ur: "ہم جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "ٱلسَّاعَةُ", transliteration: "l-sāʿatu", meaning: { en: "the Hour (is)", ur: "the Hour (is)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّظُنُّ", transliteration: "naẓunnu", meaning: { en: "we think", ur: "ہم think" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَنًّۭا", transliteration: "ẓannan", meaning: { en: "an assumption", ur: "an assumption" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "we", ur: "ہم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِمُسْتَيْقِنِينَ", transliteration: "bimus'tayqinīna", meaning: { en: "(are) convinced", ur: "(are) convinced" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    ayahNumber: 33,
    text: "وَبَدَا لَهُمْ سَيِّـَٔاتُ مَا عَمِلُوا۟ وَحَاقَ بِهِم مَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ",
    words: [
      { arabic: "وَبَدَا", transliteration: "wabadā", meaning: { en: "And (will) appear", ur: "اور (will) appear" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَيِّـَٔاتُ", transliteration: "sayyiātu", meaning: { en: "(the) evil", ur: "(the) برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(of) what", ur: "(of) کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "عَمِلُوا۟", transliteration: "ʿamilū", meaning: { en: "they did", ur: "وہ لوگ did" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَحَاقَ", transliteration: "waḥāqa", meaning: { en: "and (will) envelop", ur: "اور (will) envelop" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِهِم", transliteration: "bihim", meaning: { en: "them", ur: "them" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used", ur: "وہ لوگ used" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "[at it]", ur: "[at it]" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "يَسْتَهْزِءُونَ", transliteration: "yastahziūna", meaning: { en: "(to) mock", ur: "(کو) mock" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  34: {
    ayahNumber: 34,
    text: "وَقِيلَ ٱلْيَوْمَ نَنسَىٰكُمْ كَمَا نَسِيتُمْ لِقَآءَ يَوْمِكُمْ هَـٰذَا وَمَأْوَىٰكُمُ ٱلنَّارُ وَمَا لَكُم مِّن نَّـٰصِرِينَ",
    words: [
      { arabic: "وَقِيلَ", transliteration: "waqīla", meaning: { en: "And it will be said", ur: "اور it will be کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "Today", ur: "Today" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَنسَىٰكُمْ", transliteration: "nansākum", meaning: { en: "We forget you", ur: "ہم forget تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "as", ur: "as" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَسِيتُمْ", transliteration: "nasītum", meaning: { en: "you forgot", ur: "تم forgot" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِقَآءَ", transliteration: "liqāa", meaning: { en: "(the) meeting", ur: "(the) meeting" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "يَوْمِكُمْ", transliteration: "yawmikum", meaning: { en: "(of) this Day of yours", ur: "(of) this دن of yours" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "(of) this Day of yours", ur: "(of) this دن of yours" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَأْوَىٰكُمُ", transliteration: "wamawākumu", meaning: { en: "and your abode", ur: "اور your abode" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلنَّارُ", transliteration: "l-nāru", meaning: { en: "(is) the Fire", ur: "(is) the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّـٰصِرِينَ", transliteration: "nāṣirīna", meaning: { en: "helpers", ur: "helpers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    ayahNumber: 35,
    text: "ذَٰلِكُم بِأَنَّكُمُ ٱتَّخَذْتُمْ ءَايَـٰتِ ٱللَّهِ هُزُوًۭا وَغَرَّتْكُمُ ٱلْحَيَوٰةُ ٱلدُّنْيَا ۚ فَٱلْيَوْمَ لَا يُخْرَجُونَ مِنْهَا وَلَا هُمْ يُسْتَعْتَبُونَ",
    words: [
      { arabic: "ذَٰلِكُم", transliteration: "dhālikum", meaning: { en: "That", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِأَنَّكُمُ", transliteration: "bi-annakumu", meaning: { en: "(is) because you", ur: "(is) because تم" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱتَّخَذْتُمْ", transliteration: "ittakhadhtum", meaning: { en: "took", ur: "took" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَـٰتِ", transliteration: "āyāti", meaning: { en: "(the) Verses", ur: "(the) Verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُزُوًۭا", transliteration: "huzuwan", meaning: { en: "(in) ridicule", ur: "(میں) ridicule" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَغَرَّتْكُمُ", transliteration: "wagharratkumu", meaning: { en: "and deceived you", ur: "اور deceived تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْحَيَوٰةُ", transliteration: "l-ḥayatu", meaning: { en: "the life", ur: "the زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا ۚ", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "(of) the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱلْيَوْمَ", transliteration: "fal-yawma", meaning: { en: "So this Day", ur: "So this دن" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُخْرَجُونَ", transliteration: "yukh'rajūna", meaning: { en: "they will be brought forth", ur: "وہ لوگ will be brought forth" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهَا", transliteration: "min'hā", meaning: { en: "from it", ur: "سے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يُسْتَعْتَبُونَ", transliteration: "yus'taʿtabūna", meaning: { en: "will be asked to appease", ur: "will be asked کو appease" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  36: {
    ayahNumber: 36,
    text: "فَلِلَّهِ ٱلْحَمْدُ رَبِّ ٱلسَّمَـٰوَٰتِ وَرَبِّ ٱلْأَرْضِ رَبِّ ٱلْعَـٰلَمِينَ",
    words: [
      { arabic: "فَلِلَّهِ", transliteration: "falillahi", meaning: { en: "Then for Allah", ur: "پھر for اللہ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلْحَمْدُ", transliteration: "l-ḥamdu", meaning: { en: "(is) all the praise", ur: "(is) سب the praise" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "(the) Lord", ur: "(the) رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "(of) the heavens", ur: "(of) the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَبِّ", transliteration: "warabbi", meaning: { en: "and (the) Lord", ur: "اور (the) رب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "(of) the earth", ur: "(of) زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "(the) lord", ur: "(the) رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", meaning: { en: "(of) the worlds", ur: "(of) the worlds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  37: {
    ayahNumber: 37,
    text: "وَلَهُ ٱلْكِبْرِيَآءُ فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۖ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
    words: [
      { arabic: "وَلَهُ", transliteration: "walahu", meaning: { en: "And for Him", ur: "اور for Him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْكِبْرِيَآءُ", transliteration: "l-kib'riyāu", meaning: { en: "(is) the greatness", ur: "(is) the greatness" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ ۖ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْحَكِيمُ", transliteration: "l-ḥakīmu", meaning: { en: "the All-Wise", ur: "the حکمت والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
};

export default TREEBANK_DATA;
