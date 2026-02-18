/**
 * Surah Al-Hashr (The Gathering) - Surah 59
 * Quranic Arabic Treebank Data
 * Word-by-word morphological analysis with multilingual meanings
 */

export const TREEBANK_DATA = {
  surahId: 59,
  surahName: "Al-Hashr",
  surahNameArabic: "الحشر",
  totalAyahs: 24,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
    words: [
      { arabic: "سَبَّحَ", transliteration: "sabbaḥa", meaning: { en: "Glorifies", ur: "پاکی بیان کی", ar: "نزّه" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "س-ب-ح", tense: "perfect" } },
      { arabic: "لِلَّهِ", transliteration: "lillāhi", meaning: { en: "to Allah", ur: "اللہ کی", ar: "لله" }, pos: "P+N", posLabel: "P+N", grammar: { role: "object", case: "genitive" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīzu", meaning: { en: "the All-Mighty", ur: "غالب", ar: "القوي الغالب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", definite: true } },
      { arabic: "الْحَكِيمُ", transliteration: "al-ḥakīmu", meaning: { en: "the All-Wise", ur: "حکمت والا", ar: "ذو الحكمة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", definite: true } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "هُوَ الَّذِي أَخْرَجَ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ مِن دِيَارِهِمْ لِأَوَّلِ الْحَشْرِ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", gender: "masculine" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "أَخْرَجَ", transliteration: "akhraja", meaning: { en: "expelled", ur: "نکالا", ar: "أخرج" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "خ-ر-ج", tense: "perfect" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا", ar: "جحدوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر", tense: "perfect", number: "plural" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أَهْلِ", transliteration: "ahli", meaning: { en: "the People", ur: "اہل", ar: "أهل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْكِتَابِ", transliteration: "al-kitābi", meaning: { en: "of the Book", ur: "کتاب", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", definite: true } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "دِيَارِهِمْ", transliteration: "diyārihim", meaning: { en: "their homes", ur: "اپنے گھروں", ar: "منازلهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", pronoun: "3mp" } },
      { arabic: "لِأَوَّلِ", transliteration: "li-awwali", meaning: { en: "at the first", ur: "پہلے", ar: "لأول" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الْحَشْرِ", transliteration: "al-ḥashri", meaning: { en: "gathering", ur: "جلاوطنی کے", ar: "الإخراج" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ش-ر" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "وَلَوْلَا أَن كَتَبَ اللَّهُ عَلَيْهِمُ الْجَلَاءَ لَعَذَّبَهُمْ فِي الدُّنْيَا وَلَهُمْ فِي الْآخِرَةِ عَذَابُ النَّارِ",
    words: [
      { arabic: "وَلَوْلَا", transliteration: "walawlā", meaning: { en: "And had not", ur: "اور اگر نہ ہوتا", ar: "ولولا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "كَتَبَ", transliteration: "kataba", meaning: { en: "decreed", ur: "لکھ دیا", ar: "قدّر" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ت-ب", tense: "perfect" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", role: "subject" } },
      { arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "for them", ur: "ان کے لیے", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "الْجَلَاءَ", transliteration: "al-jalāʾa", meaning: { en: "exile", ur: "جلاوطنی", ar: "الخروج" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ل-و" } },
      { arabic: "لَعَذَّبَهُمْ", transliteration: "la-ʿadhdhabahum", meaning: { en: "He would have punished them", ur: "ضرور عذاب دیتا", ar: "لعذبهم" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ع-ذ-ب", emphatic: true } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "this world", ur: "دنیا", ar: "الدنيا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور ان کے لیے", ar: "ولهم" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "predicate" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْآخِرَةِ", transliteration: "al-ākhirati", meaning: { en: "the Hereafter", ur: "آخرت", ar: "الآخرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَذَابُ", transliteration: "ʿadhābu", meaning: { en: "punishment", ur: "عذاب", ar: "عقاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "of the Fire", ur: "آگ کا", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "ذَٰلِكَ بِأَنَّهُمْ شَاقُّوا اللَّهَ وَرَسُولَهُ وَمَن يُشَاقِّ اللَّهَ فَإِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ اس لیے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", distance: "far" } },
      { arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", meaning: { en: "because they", ur: "کیونکہ انہوں نے", ar: "لأنهم" }, pos: "P+CONJ", posLabel: "P+CONJ", grammar: { type: "causal" } },
      { arabic: "شَاقُّوا", transliteration: "shāqqū", meaning: { en: "opposed", ur: "مخالفت کی", ar: "عادوا" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ش-ق-ق", tense: "perfect" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "object" } },
      { arabic: "وَرَسُولَهُ", transliteration: "warasūlahu", meaning: { en: "and His Messenger", ur: "اور اس کے رسول کی", ar: "ورسوله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "and whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "conditional" } },
      { arabic: "يُشَاقِّ", transliteration: "yushāqqi", meaning: { en: "opposes", ur: "مخالفت کرے", ar: "يعادي" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ش-ق-ق", tense: "imperfect", mood: "jussive" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "then indeed", ur: "تو بیشک", ar: "فإن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "شَدِيدُ", transliteration: "shadīdu", meaning: { en: "is severe", ur: "سخت ہے", ar: "قوي" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "الْعِقَابِ", transliteration: "al-ʿiqābi", meaning: { en: "in punishment", ur: "عذاب دینے میں", ar: "العقوبة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ق-ب" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "مَا قَطَعْتُم مِّن لِّينَةٍ أَوْ تَرَكْتُمُوهَا قَائِمَةً عَلَىٰ أُصُولِهَا فَبِإِذْنِ اللَّهِ وَلِيُخْزِيَ الْفَاسِقِينَ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "قَطَعْتُم", transliteration: "qaṭaʿtum", meaning: { en: "you cut down", ur: "تم نے کاٹا", ar: "قطعتم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-ط-ع", tense: "perfect", person: "2mp" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "لِّينَةٍ", transliteration: "līnatin", meaning: { en: "palm trees", ur: "کھجور کے درخت", ar: "نخلة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-ي-ن" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "تَرَكْتُمُوهَا", transliteration: "taraktumūhā", meaning: { en: "you left it", ur: "چھوڑ دیا", ar: "تركتموها" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ت-ر-ك", tense: "perfect", person: "2mp" } },
      { arabic: "قَائِمَةً", transliteration: "qāʾimatan", meaning: { en: "standing", ur: "کھڑا", ar: "قائمة" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ق-و-م" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أُصُولِهَا", transliteration: "uṣūlihā", meaning: { en: "its roots", ur: "اس کی جڑوں", ar: "جذورها" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ص-ل" } },
      { arabic: "فَبِإِذْنِ", transliteration: "fabi-idhni", meaning: { en: "then by permission", ur: "تو اللہ کے حکم سے", ar: "فبإذن" }, pos: "P+N", posLabel: "P+N", grammar: { role: "causal" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلِيُخْزِيَ", transliteration: "waliyukhziya", meaning: { en: "and to disgrace", ur: "اور رسوا کرے", ar: "وليذل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "خ-ز-ي", mood: "subjunctive" } },
      { arabic: "الْفَاسِقِينَ", transliteration: "al-fāsiqīna", meaning: { en: "the rebellious", ur: "فاسقوں کو", ar: "الخارجين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَمَا أَفَاءَ اللَّهُ عَلَىٰ رَسُولِهِ مِنْهُمْ فَمَا أَوْجَفْتُمْ عَلَيْهِ مِنْ خَيْلٍ وَلَا رِكَابٍ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "أَفَاءَ", transliteration: "afāʾa", meaning: { en: "restored", ur: "واپس دلایا", ar: "رد" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ف-ي-أ", tense: "perfect" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", role: "subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "کو", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "رَسُولِهِ", transliteration: "rasūlihi", meaning: { en: "His Messenger", ur: "اپنے رسول", ar: "رسوله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِنْهُمْ", transliteration: "minhum", meaning: { en: "from them", ur: "ان سے", ar: "منهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "you did not", ur: "تو تم نے نہیں", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَوْجَفْتُمْ", transliteration: "awjaftum", meaning: { en: "spur", ur: "دوڑایا", ar: "أسرعتم" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ج-ف", tense: "perfect" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "for it", ur: "اس کے لیے", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "خَيْلٍ", transliteration: "khaylin", meaning: { en: "horses", ur: "گھوڑے", ar: "خيل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ي-ل" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "رِكَابٍ", transliteration: "rikābin", meaning: { en: "camels", ur: "اونٹ", ar: "إبل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ك-ب" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "مَّا أَفَاءَ اللَّهُ عَلَىٰ رَسُولِهِ مِنْ أَهْلِ الْقُرَىٰ فَلِلَّهِ وَلِلرَّسُولِ وَلِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَابْنِ السَّبِيلِ",
    words: [
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "What", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَفَاءَ", transliteration: "afāʾa", meaning: { en: "Allah restored", ur: "واپس دلایا", ar: "رد" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ف-ي-أ" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "کو", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "رَسُولِهِ", transliteration: "rasūlihi", meaning: { en: "His Messenger", ur: "اپنے رسول", ar: "رسوله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "أَهْلِ", transliteration: "ahli", meaning: { en: "people", ur: "اہل", ar: "أهل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْقُرَىٰ", transliteration: "al-qurā", meaning: { en: "of the towns", ur: "بستیوں کے", ar: "القرى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "فَلِلَّهِ", transliteration: "falillāhi", meaning: { en: "it is for Allah", ur: "تو اللہ کے لیے", ar: "فلله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَلِلرَّسُولِ", transliteration: "walilrasūli", meaning: { en: "and for the Messenger", ur: "اور رسول کے لیے", ar: "وللرسول" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } },
      { arabic: "وَلِذِي", transliteration: "walidhī", meaning: { en: "and for relatives", ur: "اور قریب کے لیے", ar: "ولذي" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } },
      { arabic: "الْقُرْبَىٰ", transliteration: "al-qurbā", meaning: { en: "near relatives", ur: "رشتہ داروں", ar: "القرابة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالْيَتَامَىٰ", transliteration: "wal-yatāmā", meaning: { en: "and orphans", ur: "اور یتیموں", ar: "الأيتام" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْمَسَاكِينِ", transliteration: "wal-masākīni", meaning: { en: "and the needy", ur: "اور مسکینوں", ar: "الفقراء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَابْنِ", transliteration: "wabni", meaning: { en: "and the son", ur: "اور", ar: "وابن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "السَّبِيلِ", transliteration: "al-sabīli", meaning: { en: "of the road (traveler)", ur: "مسافر کے لیے", ar: "الطريق" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "لِلْفُقَرَاءِ الْمُهَاجِرِينَ الَّذِينَ أُخْرِجُوا مِن دِيَارِهِمْ وَأَمْوَالِهِمْ يَبْتَغُونَ فَضْلًا مِّنَ اللَّهِ وَرِضْوَانًا وَيَنصُرُونَ اللَّهَ وَرَسُولَهُ أُولَٰئِكَ هُمُ الصَّادِقُونَ",
    words: [
      { arabic: "لِلْفُقَرَاءِ", transliteration: "lilfuqarāʾi", meaning: { en: "For the poor", ur: "فقیروں کے لیے", ar: "للفقراء" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "الْمُهَاجِرِينَ", transliteration: "al-muhājirīna", meaning: { en: "emigrants", ur: "مہاجرین", ar: "المهاجرين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "ه-ج-ر" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "أُخْرِجُوا", transliteration: "ukhrijū", meaning: { en: "were expelled", ur: "نکالے گئے", ar: "طردوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "خ-ر-ج", voice: "passive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "دِيَارِهِمْ", transliteration: "diyārihim", meaning: { en: "their homes", ur: "اپنے گھروں", ar: "منازلهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَأَمْوَالِهِمْ", transliteration: "wa-amwālihim", meaning: { en: "and their properties", ur: "اور مالوں سے", ar: "وأموالهم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "يَبْتَغُونَ", transliteration: "yabtaghūna", meaning: { en: "seeking", ur: "تلاش کرتے ہیں", ar: "يطلبون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ب-غ-ي", tense: "imperfect" } },
      { arabic: "فَضْلًا", transliteration: "faḍlan", meaning: { en: "bounty", ur: "فضل", ar: "رحمة" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَرِضْوَانًا", transliteration: "wariḍwānan", meaning: { en: "and pleasure", ur: "اور رضا", ar: "ومرضاة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ر-ض-ي" } },
      { arabic: "وَيَنصُرُونَ", transliteration: "wayanṣurūna", meaning: { en: "and they help", ur: "اور مدد کرتے ہیں", ar: "وينصرون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ن-ص-ر" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَرَسُولَهُ", transliteration: "warasūlahu", meaning: { en: "and His Messenger", ur: "اور اس کے رسول کی", ar: "ورسوله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "those", ur: "یہی لوگ", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", distance: "far" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "الصَّادِقُونَ", transliteration: "al-ṣādiqūna", meaning: { en: "the truthful", ur: "سچے", ar: "الصادقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ص-د-ق" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "تَبَوَّءُوا", transliteration: "tabawwaʾū", meaning: { en: "settled in", ur: "آباد تھے", ar: "سكنوا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ب-و-أ", tense: "perfect" } },
      { arabic: "الدَّارَ", transliteration: "al-dāra", meaning: { en: "the home (Madinah)", ur: "اس گھر میں", ar: "الدار" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَالْإِيمَانَ", transliteration: "wal-īmāna", meaning: { en: "and faith", ur: "اور ایمان میں", ar: "والإيمان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے پہلے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِهِمْ", transliteration: "qablihim", meaning: { en: "them", ur: "ان", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "temporal" } },
      { arabic: "يُحِبُّونَ", transliteration: "yuḥibbūna", meaning: { en: "love", ur: "محبت کرتے ہیں", ar: "يحبون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ب-ب", tense: "imperfect" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "those who", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "هَاجَرَ", transliteration: "hājara", meaning: { en: "emigrated", ur: "ہجرت کر کے آئے", ar: "هاجر" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ه-ج-ر" } },
      { arabic: "إِلَيْهِمْ", transliteration: "ilayhim", meaning: { en: "to them", ur: "ان کے پاس", ar: "إليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہیں", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "يَجِدُونَ", transliteration: "yajidūna", meaning: { en: "find", ur: "پاتے", ar: "يجدون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ج-د" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "صُدُورِهِمْ", transliteration: "ṣudūrihim", meaning: { en: "their breasts", ur: "اپنے دلوں", ar: "قلوبهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-د-ر" } },
      { arabic: "حَاجَةً", transliteration: "ḥājatan", meaning: { en: "any need", ur: "کوئی حاجت", ar: "حاجة" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "for what", ur: "جو کچھ", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "أُوتُوا", transliteration: "ūtū", meaning: { en: "they were given", ur: "دیا گیا", ar: "أعطوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive" } },
      { arabic: "وَيُؤْثِرُونَ", transliteration: "wayuʾthirūna", meaning: { en: "and they prefer", ur: "اور ترجیح دیتے ہیں", ar: "ويفضلون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "أ-ث-ر" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", meaning: { en: "themselves", ur: "اپنے آپ", ar: "أنفسهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "even if", ur: "چاہے", ar: "ولو" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "concessive" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "there was", ur: "ہو", ar: "كان" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "بِهِمْ", transliteration: "bihim", meaning: { en: "with them", ur: "انہیں", ar: "بهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "خَصَاصَةٌ", transliteration: "khaṣāṣatun", meaning: { en: "poverty/need", ur: "تنگدستی", ar: "حاجة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "خ-ص-ص" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَالَّذِينَ جَاءُوا مِن بَعْدِهِمْ يَقُولُونَ رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "جَاءُوا", transliteration: "jāʾū", meaning: { en: "came", ur: "آئے", ar: "جاءوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ي-أ", tense: "perfect" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "بعد", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِهِمْ", transliteration: "baʿdihim", meaning: { en: "them", ur: "ان کے", ar: "بعدهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "temporal" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "say", ur: "کہتے ہیں", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "اے ہمارے رب", ar: "ربنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "vocative" } },
      { arabic: "اغْفِرْ", transliteration: "ighfir", meaning: { en: "forgive", ur: "بخش دے", ar: "اغفر" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ف-ر", mood: "imperative" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "us", ur: "ہمیں", ar: "لنا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "وَلِإِخْوَانِنَا", transliteration: "wali-ikhwāninā", meaning: { en: "and our brothers", ur: "اور ہمارے بھائیوں کو", ar: "ولإخواننا" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "سَبَقُونَا", transliteration: "sabaqūnā", meaning: { en: "preceded us", ur: "ہم سے آگے", ar: "سبقونا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-ب-ق" } },
      { arabic: "بِالْإِيمَانِ", transliteration: "bil-īmāni", meaning: { en: "in faith", ur: "ایمان میں", ar: "بالإيمان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَجْعَلْ", transliteration: "tajʿal", meaning: { en: "put", ur: "رکھ", ar: "تجعل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل", mood: "jussive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "قُلُوبِنَا", transliteration: "qulūbinā", meaning: { en: "our hearts", ur: "ہمارے دلوں", ar: "قلوبنا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "غِلًّا", transliteration: "ghillan", meaning: { en: "resentment", ur: "کینہ", ar: "حقدا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "غ-ل-ل" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان کے لیے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "اے ہمارے رب", ar: "ربنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "vocative" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "indeed You are", ur: "بیشک تو", ar: "إنك" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "رَءُوفٌ", transliteration: "raʾūfun", meaning: { en: "Kind", ur: "شفیق", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", meaning: { en: "Merciful", ur: "مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "أَلَمْ تَرَ إِلَى الَّذِينَ نَافَقُوا يَقُولُونَ لِإِخْوَانِهِمُ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ لَئِنْ أُخْرِجْتُمْ لَنَخْرُجَنَّ مَعَكُمْ",
    words: [
      { arabic: "أَلَمْ", transliteration: "alam", meaning: { en: "Have you not", ur: "کیا تو نے نہیں", ar: "ألم" }, pos: "INTG+NEG", posLabel: "INTG+NEG", grammar: { type: "rhetorical" } },
      { arabic: "تَرَ", transliteration: "tara", meaning: { en: "seen", ur: "دیکھا", ar: "ترى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي", mood: "jussive" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کو جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "نَافَقُوا", transliteration: "nāfaqū", meaning: { en: "acted hypocritically", ur: "منافقت کی", ar: "نافقوا" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ن-ف-ق" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "they say", ur: "کہتے ہیں", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لِإِخْوَانِهِمُ", transliteration: "li-ikhwānihimu", meaning: { en: "to their brothers", ur: "اپنے بھائیوں سے", ar: "لإخوانهم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کافر ہیں", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "أَهْلِ", transliteration: "ahli", meaning: { en: "People", ur: "اہل", ar: "أهل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْكِتَابِ", transliteration: "al-kitābi", meaning: { en: "of the Book", ur: "کتاب", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لَئِنْ", transliteration: "la-in", meaning: { en: "if indeed", ur: "اگر", ar: "لئن" }, pos: "PART+COND", posLabel: "PART+COND", grammar: { type: "conditional" } },
      { arabic: "أُخْرِجْتُمْ", transliteration: "ukhrijtum", meaning: { en: "you are expelled", ur: "تم نکالے گئے", ar: "طردتم" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive" } },
      { arabic: "لَنَخْرُجَنَّ", transliteration: "lanakhrujanna", meaning: { en: "we will surely go out", ur: "ہم ضرور نکلیں گے", ar: "لنخرجن" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ر-ج", emphatic: true } },
      { arabic: "مَعَكُمْ", transliteration: "maʿakum", meaning: { en: "with you", ur: "تمہارے ساتھ", ar: "معكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "accompaniment" } }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "لَئِن قُوتِلُوا لَا يَنصُرُونَهُمْ وَلَئِن نَّصَرُوهُمْ لَيُوَلُّنَّ الْأَدْبَارَ ثُمَّ لَا يُنصَرُونَ",
    words: [
      { arabic: "لَئِن", transliteration: "la-in", meaning: { en: "And if", ur: "اور اگر", ar: "لئن" }, pos: "PART+COND", posLabel: "PART+COND", grammar: { type: "conditional" } },
      { arabic: "قُوتِلُوا", transliteration: "qūtilū", meaning: { en: "they are fought", ur: "ان سے لڑا گیا", ar: "قوتلوا" }, pos: "V", posLabel: "V", grammar: { form: "III", voice: "passive", root: "ق-ت-ل" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "they will not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَنصُرُونَهُمْ", transliteration: "yanṣurūnahum", meaning: { en: "help them", ur: "ان کی مدد کریں گے", ar: "ينصرونهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ص-ر" } },
      { arabic: "وَلَئِن", transliteration: "wala-in", meaning: { en: "and if", ur: "اور اگر", ar: "ولئن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "نَّصَرُوهُمْ", transliteration: "naṣarūhum", meaning: { en: "they help them", ur: "انہوں نے مدد کی", ar: "نصروهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ص-ر" } },
      { arabic: "لَيُوَلُّنَّ", transliteration: "layuwallunna", meaning: { en: "they will surely turn", ur: "ضرور پھیر دیں گے", ar: "ليولن" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "و-ل-ي", emphatic: true } },
      { arabic: "الْأَدْبَارَ", transliteration: "al-adbāra", meaning: { en: "their backs", ur: "پیٹھ", ar: "الظهور" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُنصَرُونَ", transliteration: "yunṣarūna", meaning: { en: "they will be helped", ur: "مدد کیے جائیں گے", ar: "ينصرون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ن-ص-ر" } }
    ]
  },

  13: {
    ayahNumber: 13,
    text: "لَأَنتُمْ أَشَدُّ رَهْبَةً فِي صُدُورِهِم مِّنَ اللَّهِ ذَٰلِكَ بِأَنَّهُمْ قَوْمٌ لَّا يَفْقَهُونَ",
    words: [
      { arabic: "لَأَنتُمْ", transliteration: "la-antum", meaning: { en: "Certainly you", ur: "یقیناً تم", ar: "لأنتم" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "أَشَدُّ", transliteration: "ashaddu", meaning: { en: "more fearful", ur: "زیادہ ڈراؤنے ہو", ar: "أشد" }, pos: "ADJ", posLabel: "ADJ", grammar: { degree: "elative", root: "ش-د-د" } },
      { arabic: "رَهْبَةً", transliteration: "rahbatan", meaning: { en: "in fear", ur: "ڈر میں", ar: "خوفا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-ه-ب" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "صُدُورِهِم", transliteration: "ṣudūrihim", meaning: { en: "their hearts", ur: "ان کے دلوں", ar: "قلوبهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-د-ر" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "than", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "comparison" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ اس لیے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", meaning: { en: "because they are", ur: "کیونکہ وہ", ar: "لأنهم" }, pos: "P+CONJ", posLabel: "P+CONJ", grammar: { type: "causal" } },
      { arabic: "قَوْمٌ", transliteration: "qawmun", meaning: { en: "a people", ur: "لوگ ہیں", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "who do not", ur: "جو نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَفْقَهُونَ", transliteration: "yafqahūna", meaning: { en: "understand", ur: "سمجھتے", ar: "يفهمون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ق-ه" } }
    ]
  },

  14: {
    ayahNumber: 14,
    text: "لَا يُقَاتِلُونَكُمْ جَمِيعًا إِلَّا فِي قُرًى مُّحَصَّنَةٍ أَوْ مِن وَرَاءِ جُدُرٍ بَأْسُهُم بَيْنَهُمْ شَدِيدٌ تَحْسَبُهُمْ جَمِيعًا وَقُلُوبُهُمْ شَتَّىٰ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "They will not", ur: "وہ نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُقَاتِلُونَكُمْ", transliteration: "yuqātilūnakum", meaning: { en: "fight you", ur: "تم سے لڑیں گے", ar: "يقاتلونكم" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ق-ت-ل" } },
      { arabic: "جَمِيعًا", transliteration: "jamīʿan", meaning: { en: "all together", ur: "سب مل کر", ar: "جميعا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "قُرًى", transliteration: "quran", meaning: { en: "towns", ur: "بستیوں", ar: "قرى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "مُّحَصَّنَةٍ", transliteration: "muḥaṣṣanatin", meaning: { en: "fortified", ur: "قلعہ بند", ar: "محصنة" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ح-ص-ن" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "وَرَاءِ", transliteration: "warāʾi", meaning: { en: "behind", ur: "پیچھے", ar: "خلف" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "جُدُرٍ", transliteration: "judurin", meaning: { en: "walls", ur: "دیواروں کے", ar: "جدران" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "بَأْسُهُم", transliteration: "baʾsuhum", meaning: { en: "their violence", ur: "ان کی لڑائی", ar: "قتالهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-أ-س" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "among themselves", ur: "آپس میں", ar: "بينهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "location" } },
      { arabic: "شَدِيدٌ", transliteration: "shadīdun", meaning: { en: "is severe", ur: "سخت ہے", ar: "شديد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "تَحْسَبُهُمْ", transliteration: "taḥsabuhum", meaning: { en: "you think them", ur: "تو انہیں سمجھتا ہے", ar: "تظنهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ح-س-ب" } },
      { arabic: "جَمِيعًا", transliteration: "jamīʿan", meaning: { en: "united", ur: "متحد", ar: "متحدين" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَقُلُوبُهُمْ", transliteration: "waqulūbuhum", meaning: { en: "but their hearts", ur: "لیکن ان کے دل", ar: "وقلوبهم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "شَتَّىٰ", transliteration: "shattā", meaning: { en: "are divided", ur: "الگ الگ ہیں", ar: "متفرقة" }, pos: "ADJ", posLabel: "ADJ", grammar: { number: "plural" } }
    ]
  },

  15: {
    ayahNumber: 15,
    text: "كَمَثَلِ الَّذِينَ مِن قَبْلِهِمْ قَرِيبًا ذَاقُوا وَبَالَ أَمْرِهِمْ وَلَهُمْ عَذَابٌ أَلِيمٌ",
    words: [
      { arabic: "كَمَثَلِ", transliteration: "kamathali", meaning: { en: "Like the example", ur: "مثال کی طرح", ar: "كمثل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "of those who", ur: "ان لوگوں کی", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے پہلے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِهِمْ", transliteration: "qablihim", meaning: { en: "them", ur: "ان", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "temporal" } },
      { arabic: "قَرِيبًا", transliteration: "qarīban", meaning: { en: "recently", ur: "تھوڑی دیر پہلے", ar: "قريبا" }, pos: "ADV", posLabel: "ADV", grammar: { type: "temporal" } },
      { arabic: "ذَاقُوا", transliteration: "dhāqū", meaning: { en: "they tasted", ur: "انہوں نے چکھا", ar: "ذاقوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ذ-و-ق" } },
      { arabic: "وَبَالَ", transliteration: "wabāla", meaning: { en: "the consequence", ur: "برا انجام", ar: "عاقبة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ب-ل" } },
      { arabic: "أَمْرِهِمْ", transliteration: "amrihim", meaning: { en: "of their affair", ur: "اپنے معاملے کا", ar: "أمرهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور ان کے لیے ہے", ar: "ولهم" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "predicate" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "a punishment", ur: "عذاب", ar: "عقاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", meaning: { en: "painful", ur: "دردناک", ar: "مؤلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ]
  },

  16: {
    ayahNumber: 16,
    text: "كَمَثَلِ الشَّيْطَانِ إِذْ قَالَ لِلْإِنسَانِ اكْفُرْ فَلَمَّا كَفَرَ قَالَ إِنِّي بَرِيءٌ مِّنكَ إِنِّي أَخَافُ اللَّهَ رَبَّ الْعَالَمِينَ",
    words: [
      { arabic: "كَمَثَلِ", transliteration: "kamathali", meaning: { en: "Like the example", ur: "مثال کی طرح", ar: "كمثل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الشَّيْطَانِ", transliteration: "al-shayṭāni", meaning: { en: "of Satan", ur: "شیطان کی", ar: "الشيطان" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "temporal" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "he said", ur: "اس نے کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لِلْإِنسَانِ", transliteration: "lil-insāni", meaning: { en: "to man", ur: "انسان سے", ar: "للإنسان" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "اكْفُرْ", transliteration: "ukfur", meaning: { en: "Disbelieve", ur: "کفر کر", ar: "اكفر" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر", mood: "imperative" } },
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "but when", ur: "پھر جب", ar: "فلما" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "temporal" } },
      { arabic: "كَفَرَ", transliteration: "kafara", meaning: { en: "he disbelieved", ur: "اس نے کفر کیا", ar: "كفر" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "he said", ur: "اس نے کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "إِنِّي", transliteration: "innī", meaning: { en: "Indeed I", ur: "بیشک میں", ar: "إني" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "بَرِيءٌ", transliteration: "barīʾun", meaning: { en: "am dissociated", ur: "بری ہوں", ar: "بريء" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ر-أ" } },
      { arabic: "مِّنكَ", transliteration: "minka", meaning: { en: "from you", ur: "تجھ سے", ar: "منك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "إِنِّي", transliteration: "innī", meaning: { en: "indeed I", ur: "بیشک میں", ar: "إني" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "أَخَافُ", transliteration: "akhāfu", meaning: { en: "fear", ur: "ڈرتا ہوں", ar: "أخاف" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-و-ف" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "رَبَّ", transliteration: "rabba", meaning: { en: "Lord", ur: "رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الْعَالَمِينَ", transliteration: "al-ʿālamīna", meaning: { en: "of the worlds", ur: "جہانوں کے", ar: "العالمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } }
    ]
  },

  17: {
    ayahNumber: 17,
    text: "فَكَانَ عَاقِبَتَهُمَا أَنَّهُمَا فِي النَّارِ خَالِدَيْنِ فِيهَا وَذَٰلِكَ جَزَاءُ الظَّالِمِينَ",
    words: [
      { arabic: "فَكَانَ", transliteration: "fakāna", meaning: { en: "So was", ur: "پس ہوا", ar: "فكان" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "عَاقِبَتَهُمَا", transliteration: "ʿāqibatahumā", meaning: { en: "their end", ur: "ان دونوں کا انجام", ar: "نهايتهما" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ق-ب" } },
      { arabic: "أَنَّهُمَا", transliteration: "annahumā", meaning: { en: "that they both", ur: "کہ وہ دونوں", ar: "أنهما" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "explanation" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "the Fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "خَالِدَيْنِ", transliteration: "khālidayni", meaning: { en: "abiding eternally", ur: "ہمیشہ رہنے والے", ar: "مخلدين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "dual", root: "خ-ل-د" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "وَذَٰلِكَ", transliteration: "wadhālika", meaning: { en: "and that", ur: "اور یہی", ar: "وذلك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { type: "demonstrative" } },
      { arabic: "جَزَاءُ", transliteration: "jazāʾu", meaning: { en: "is the recompense", ur: "بدلہ ہے", ar: "جزاء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ز-ي" } },
      { arabic: "الظَّالِمِينَ", transliteration: "al-ẓālimīna", meaning: { en: "of the wrongdoers", ur: "ظالموں کا", ar: "الظالمين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural" } }
    ]
  },

  18: {
    ayahNumber: 18,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "اے", ar: "أيها" }, pos: "PRON", posLabel: "PRON", grammar: { type: "address" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "اتَّقُوا", transliteration: "ittaqū", meaning: { en: "fear", ur: "ڈرو", ar: "اتقوا" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "و-ق-ي", mood: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَلْتَنظُرْ", transliteration: "waltanẓur", meaning: { en: "and let consider", ur: "اور دیکھے", ar: "ولتنظر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ن-ظ-ر", mood: "jussive" } },
      { arabic: "نَفْسٌ", transliteration: "nafsun", meaning: { en: "every soul", ur: "ہر جان", ar: "نفس" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "قَدَّمَتْ", transliteration: "qaddamat", meaning: { en: "it has sent forth", ur: "اس نے آگے بھیجا", ar: "قدمت" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ق-د-م" } },
      { arabic: "لِغَدٍ", transliteration: "lighadin", meaning: { en: "for tomorrow", ur: "کل کے لیے", ar: "لغد" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَاتَّقُوا", transliteration: "wattaqū", meaning: { en: "and fear", ur: "اور ڈرو", ar: "واتقوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "و-ق-ي" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "خَبِيرٌ", transliteration: "khabīrun", meaning: { en: "is Aware", ur: "باخبر ہے", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو کچھ", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ]
  },

  19: {
    ayahNumber: 19,
    text: "وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنسَاهُمْ أَنفُسَهُمْ أُولَٰئِكَ هُمُ الْفَاسِقُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَكُونُوا", transliteration: "takūnū", meaning: { en: "be", ur: "ہونا", ar: "تكونوا" }, pos: "V", posLabel: "V", grammar: { type: "kāna", mood: "jussive" } },
      { arabic: "كَالَّذِينَ", transliteration: "kalladhīna", meaning: { en: "like those who", ur: "ان لوگوں کی طرح جو", ar: "كالذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { number: "plural" } },
      { arabic: "نَسُوا", transliteration: "nasū", meaning: { en: "forgot", ur: "بھول گئے", ar: "نسوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-س-ي" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کو", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فَأَنسَاهُمْ", transliteration: "fa-ansāhum", meaning: { en: "so He made them forget", ur: "تو اس نے انہیں بھلا دیا", ar: "فأنساهم" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-س-ي" } },
      { arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", meaning: { en: "themselves", ur: "اپنے آپ کو", ar: "أنفسهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "those", ur: "یہی لوگ", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْفَاسِقُونَ", transliteration: "al-fāsiqūna", meaning: { en: "the defiantly disobedient", ur: "نافرمان", ar: "الفاسقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural" } }
    ]
  },

  20: {
    ayahNumber: 20,
    text: "لَا يَسْتَوِي أَصْحَابُ النَّارِ وَأَصْحَابُ الْجَنَّةِ أَصْحَابُ الْجَنَّةِ هُمُ الْفَائِزُونَ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَسْتَوِي", transliteration: "yastawī", meaning: { en: "are equal", ur: "برابر ہیں", ar: "يستوي" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "س-و-ي" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "the companions", ur: "والے", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "of the Fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَأَصْحَابُ", transliteration: "wa-aṣḥābu", meaning: { en: "and companions", ur: "اور والے", ar: "وأصحاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "الْجَنَّةِ", transliteration: "al-jannati", meaning: { en: "of Paradise", ur: "جنت", ar: "الجنة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "The companions", ur: "والے", ar: "أصحاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْجَنَّةِ", transliteration: "al-jannati", meaning: { en: "of Paradise", ur: "جنت", ar: "الجنة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہی ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْفَائِزُونَ", transliteration: "al-fāʾizūna", meaning: { en: "the successful", ur: "کامیاب", ar: "الفائزون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ف-و-ز" } }
    ]
  },

  21: {
    ayahNumber: 21,
    text: "لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ",
    words: [
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { type: "hypothetical" } },
      { arabic: "أَنزَلْنَا", transliteration: "anzalnā", meaning: { en: "We had sent down", ur: "ہم نازل کرتے", ar: "أنزلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-Qurʾāna", meaning: { en: "Quran", ur: "قرآن", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "جَبَلٍ", transliteration: "jabalin", meaning: { en: "a mountain", ur: "پہاڑ", ar: "جبل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لَّرَأَيْتَهُ", transliteration: "la-raʾaytahu", meaning: { en: "you would have seen it", ur: "تو دیکھتا", ar: "لرأيته" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي", emphatic: true } },
      { arabic: "خَاشِعًا", transliteration: "khāshiʿan", meaning: { en: "humbled", ur: "جھکا ہوا", ar: "متواضعا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "خ-ش-ع" } },
      { arabic: "مُّتَصَدِّعًا", transliteration: "mutaṣaddiʿan", meaning: { en: "breaking apart", ur: "پھٹتا ہوا", ar: "متشققا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ص-د-ع" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "causal" } },
      { arabic: "خَشْيَةِ", transliteration: "khashyati", meaning: { en: "fear", ur: "ڈر", ar: "خوف" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ش-ي" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ]
  },

  22: {
    ayahNumber: 22,
    text: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ ہے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One", ur: "جس کے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "there is no", ur: "کوئی نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "absolute negation" } },
      { arabic: "إِلَٰهَ", transliteration: "ilāha", meaning: { en: "deity", ur: "معبود", ar: "إله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوا", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "Him", ur: "اس کے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "عَالِمُ", transliteration: "ʿālimu", meaning: { en: "Knower", ur: "جاننے والا", ar: "عالم" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ع-ل-م" } },
      { arabic: "الْغَيْبِ", transliteration: "al-ghaybi", meaning: { en: "of the unseen", ur: "غیب کا", ar: "الغيب" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالشَّهَادَةِ", transliteration: "wal-shahādati", meaning: { en: "and the witnessed", ur: "اور حاضر کا", ar: "والشهادة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الرَّحْمَٰنُ", transliteration: "al-Raḥmānu", meaning: { en: "the Most Merciful", ur: "رحمان", ar: "الرحمن" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "الرَّحِيمُ", transliteration: "al-Raḥīmu", meaning: { en: "the Especially Merciful", ur: "رحیم", ar: "الرحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ]
  },

  23: {
    ayahNumber: 23,
    text: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ ہے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "other than Whom", ur: "جس کے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "there is no", ur: "کوئی نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "absolute negation" } },
      { arabic: "إِلَٰهَ", transliteration: "ilāha", meaning: { en: "deity", ur: "معبود", ar: "إله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوا", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "Him", ur: "اس کے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْمَلِكُ", transliteration: "al-Maliku", meaning: { en: "the King", ur: "بادشاہ", ar: "الملك" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْقُدُّوسُ", transliteration: "al-Quddūsu", meaning: { en: "the Pure", ur: "پاک", ar: "القدوس" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "السَّلَامُ", transliteration: "al-Salāmu", meaning: { en: "the Perfection", ur: "سلامتی والا", ar: "السلام" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْمُؤْمِنُ", transliteration: "al-Muʾminu", meaning: { en: "the Granter of Security", ur: "امن دینے والا", ar: "المؤمن" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative" } },
      { arabic: "الْمُهَيْمِنُ", transliteration: "al-Muhayminu", meaning: { en: "the Controller", ur: "نگہبان", ar: "المهيمن" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿAzīzu", meaning: { en: "the Almighty", ur: "غالب", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "الْجَبَّارُ", transliteration: "al-Jabbāru", meaning: { en: "the Compeller", ur: "زبردست", ar: "الجبار" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "الْمُتَكَبِّرُ", transliteration: "al-Mutakabbiru", meaning: { en: "the Superior", ur: "بڑائی والا", ar: "المتكبر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ك-ب-ر" } },
      { arabic: "سُبْحَانَ", transliteration: "subḥāna", meaning: { en: "Glory be", ur: "پاک ہے", ar: "سبحان" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "to Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "above what", ur: "اس سے جو", ar: "عما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يُشْرِكُونَ", transliteration: "yushrikūna", meaning: { en: "they associate", ur: "وہ شریک ٹھہراتے ہیں", ar: "يشركون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ش-ر-ك" } }
    ]
  },

  24: {
    ayahNumber: 24,
    text: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ ہے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْخَالِقُ", transliteration: "al-Khāliqu", meaning: { en: "the Creator", ur: "پیدا کرنے والا", ar: "الخالق" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "خ-ل-ق" } },
      { arabic: "الْبَارِئُ", transliteration: "al-Bāriʾu", meaning: { en: "the Producer", ur: "بنانے والا", ar: "البارئ" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ب-ر-أ" } },
      { arabic: "الْمُصَوِّرُ", transliteration: "al-Muṣawwiru", meaning: { en: "the Fashioner", ur: "صورت بنانے والا", ar: "المصور" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ص-و-ر" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "To Him belong", ur: "اس کے لیے ہیں", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "الْأَسْمَاءُ", transliteration: "al-asmāʾu", meaning: { en: "the names", ur: "نام", ar: "الأسماء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "الْحُسْنَىٰ", transliteration: "al-ḥusnā", meaning: { en: "the most beautiful", ur: "اچھے", ar: "الحسنى" }, pos: "ADJ", posLabel: "ADJ", grammar: { degree: "elative" } },
      { arabic: "يُسَبِّحُ", transliteration: "yusabbiḥu", meaning: { en: "Glorifies", ur: "پاکی بیان کرتی ہے", ar: "يسبح" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "س-ب-ح" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "Him", ur: "اس کی", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿAzīzu", meaning: { en: "the Almighty", ur: "غالب", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "الْحَكِيمُ", transliteration: "al-Ḥakīmu", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ]
  }
};

export default TREEBANK_DATA;
