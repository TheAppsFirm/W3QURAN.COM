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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَيْلٌ لِّكُلِّ أَفَّاكٍ أَثِيمٍ",
    words: [
      { arabic: "وَيْلٌ", transliteration: "waylun", meaning: { en: "Woe", ur: "ہلاکت ہے", ar: "ويل" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لِّكُلِّ", transliteration: "likulli", meaning: { en: "to every", ur: "ہر ایک کے لیے", ar: "لكل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "أَفَّاكٍ", transliteration: "affākin", meaning: { en: "sinful liar", ur: "جھوٹے", ar: "أفاك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ف-ك" } },
      { arabic: "أَثِيمٍ", transliteration: "athīmin", meaning: { en: "sinner", ur: "گناہگار", ar: "أثيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-ث-م" } }
    ]
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
    ]
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
    ]
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
    ]
  }
};

export default TREEBANK_DATA;
