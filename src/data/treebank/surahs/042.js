/**
 * Surah Ash-Shura (The Consultation) - Surah 42
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 42,
  surahName: "Ash-Shura",
  surahNameArabic: "الشورى",
  totalAyahs: 53,
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
    text: "عسق",
    words: [
      { arabic: "عسق", transliteration: "ʿayn sīn qāf", meaning: { en: "Ayn Seen Qaf", ur: "عٓسٓق", ar: "عسق" }, pos: "INIT", posLabel: "INIT", grammar: { type: "muqatta'at", note: "disconnected letters" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "كَذَٰلِكَ يُوحِي إِلَيْكَ وَإِلَى الَّذِينَ مِن قَبْلِكَ اللَّهُ الْعَزِيزُ الْحَكِيمُ",
    words: [
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "اسی طرح", ar: "كذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "يُوحِي", transliteration: "yūḥī", meaning: { en: "reveals", ur: "وحی کرتا ہے", ar: "يوحي" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ح-ي" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "وَإِلَى", transliteration: "wa-ilā", meaning: { en: "and to", ur: "اور طرف", ar: "وإلى" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "direction" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان کی جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "were", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "قَبْلِكَ", transliteration: "qablika", meaning: { en: "before you", ur: "تم سے پہلے", ar: "قبلك" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīzu", meaning: { en: "the Almighty", ur: "غالب", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ز-ز" } },
      { arabic: "الْحَكِيمُ", transliteration: "al-ḥakīmu", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-ك-م" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    words: [
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "To Him belongs", ur: "اسی کا ہے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الْعَلِيُّ", transliteration: "al-ʿaliyyu", meaning: { en: "the Most High", ur: "بلند", ar: "العلي" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-و" } },
      { arabic: "الْعَظِيمُ", transliteration: "al-ʿaẓīmu", meaning: { en: "the Most Great", ur: "بڑی عظمت والا", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ظ-م" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "تَكَادُ السَّمَاوَاتُ يَتَفَطَّرْنَ مِن فَوْقِهِنَّ وَالْمَلَائِكَةُ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ وَيَسْتَغْفِرُونَ لِمَن فِي الْأَرْضِ أَلَا إِنَّ اللَّهَ هُوَ الْغَفُورُ الرَّحِيمُ",
    words: [
      { arabic: "تَكَادُ", transliteration: "takādu", meaning: { en: "Almost", ur: "قریب ہے", ar: "تكاد" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-د" } },
      { arabic: "السَّمَاوَاتُ", transliteration: "al-samāwātu", meaning: { en: "the heavens", ur: "آسمان", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "يَتَفَطَّرْنَ", transliteration: "yatafaṭṭarna", meaning: { en: "break apart", ur: "پھٹ پڑیں", ar: "يتفطرن" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ف-ط-ر" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "فَوْقِهِنَّ", transliteration: "fawqihinna", meaning: { en: "above them", ur: "ان کے اوپر سے", ar: "فوقهن" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالْمَلَائِكَةُ", transliteration: "wal-malāʾikatu", meaning: { en: "and the angels", ur: "اور فرشتے", ar: "والملائكة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "يُسَبِّحُونَ", transliteration: "yusabbiḥūna", meaning: { en: "glorify", ur: "تسبیح کرتے ہیں", ar: "يسبحون" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "س-ب-ح" } },
      { arabic: "بِحَمْدِ", transliteration: "biḥamdi", meaning: { en: "with praise", ur: "حمد کے ساتھ", ar: "بحمد" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-م-د" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "of their Lord", ur: "اپنے رب کی", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَيَسْتَغْفِرُونَ", transliteration: "wayastaghfirūna", meaning: { en: "and ask forgiveness", ur: "اور مغفرت مانگتے ہیں", ar: "ويستغفرون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "غ-ف-ر" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "for those", ur: "ان کیلئے جو", ar: "لمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "on", ur: "میں ہیں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَلَا", transliteration: "alā", meaning: { en: "Unquestionably", ur: "سن لو", ar: "ألا" }, pos: "INCP", posLabel: "INCP", grammar: { type: "inceptive" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْغَفُورُ", transliteration: "al-ghafūru", meaning: { en: "the Forgiving", ur: "بخشنے والا", ar: "الغفور" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "غ-ف-ر" } },
      { arabic: "الرَّحِيمُ", transliteration: "al-raḥīmu", meaning: { en: "the Merciful", ur: "مہربان", ar: "الرحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ر-ح-م" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ اللَّهُ حَفِيظٌ عَلَيْهِمْ وَمَا أَنتَ عَلَيْهِم بِوَكِيلٍ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جن لوگوں نے", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "اتَّخَذُوا", transliteration: "ittakhadhū", meaning: { en: "take", ur: "بنا لیے", ar: "اتخذوا" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "أ-خ-ذ" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "کے سوا", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِهِ", transliteration: "dūnihi", meaning: { en: "Him", ur: "اس", ar: "دونه" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَوْلِيَاءَ", transliteration: "awliyāʾa", meaning: { en: "protectors", ur: "دوست", ar: "أولياء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "و-ل-ي" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "حَفِيظٌ", transliteration: "ḥafīẓun", meaning: { en: "is Guardian", ur: "نگران ہے", ar: "حفيظ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-ف-ظ" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "you are", ur: "تم", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd" } },
      { arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "بِوَكِيلٍ", transliteration: "biwakīlin", meaning: { en: "a manager", ur: "ذمہ دار", ar: "بوكيل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "و-ك-ل" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَكَذَٰلِكَ أَوْحَيْنَا إِلَيْكَ قُرْآنًا عَرَبِيًّا لِّتُنذِرَ أُمَّ الْقُرَىٰ وَمَنْ حَوْلَهَا وَتُنذِرَ يَوْمَ الْجَمْعِ لَا رَيْبَ فِيهِ فَرِيقٌ فِي الْجَنَّةِ وَفَرِيقٌ فِي السَّعِيرِ",
    words: [
      { arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", meaning: { en: "And thus", ur: "اور اسی طرح", ar: "وكذلك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { type: "demonstrative" } },
      { arabic: "أَوْحَيْنَا", transliteration: "awḥaynā", meaning: { en: "We revealed", ur: "ہم نے وحی کی", ar: "أوحينا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ح-ي" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "قُرْآنًا", transliteration: "qurʾānan", meaning: { en: "a Quran", ur: "قرآن", ar: "قرآنا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } },
      { arabic: "عَرَبِيًّا", transliteration: "ʿarabiyyan", meaning: { en: "Arabic", ur: "عربی", ar: "عربيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "لِّتُنذِرَ", transliteration: "litundhira", meaning: { en: "that you may warn", ur: "تاکہ تم ڈراؤ", ar: "لتنذر" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", mood: "subjunctive", root: "ن-ذ-ر" } },
      { arabic: "أُمَّ", transliteration: "umma", meaning: { en: "the Mother", ur: "اماں", ar: "أم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الْقُرَىٰ", transliteration: "al-qurā", meaning: { en: "of Cities", ur: "بستیوں کی (مکہ)", ar: "القرى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَمَنْ", transliteration: "waman", meaning: { en: "and whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "حَوْلَهَا", transliteration: "ḥawlahā", meaning: { en: "is around it", ur: "اس کے اردگرد", ar: "حولها" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَتُنذِرَ", transliteration: "watundhira", meaning: { en: "and warn", ur: "اور ڈراؤ", ar: "وتنذر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", mood: "subjunctive", root: "ن-ذ-ر" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "of the Day", ur: "دن سے", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الْجَمْعِ", transliteration: "al-jamʿi", meaning: { en: "of Assembly", ur: "جمع ہونے کے", ar: "الجمع" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-م-ع" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "no", ur: "کوئی نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "رَيْبَ", transliteration: "rayba", meaning: { en: "doubt", ur: "شک", ar: "ريب" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "فَرِيقٌ", transliteration: "farīqun", meaning: { en: "A group", ur: "ایک گروہ", ar: "فريق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ف-ر-ق" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "will be in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْجَنَّةِ", transliteration: "al-jannati", meaning: { en: "Paradise", ur: "جنت", ar: "الجنة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ن-ن" } },
      { arabic: "وَفَرِيقٌ", transliteration: "wafarīqun", meaning: { en: "and a group", ur: "اور ایک گروہ", ar: "وفريق" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ف-ر-ق" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّعِيرِ", transliteration: "al-saʿīri", meaning: { en: "the Blaze", ur: "دوزخ", ar: "السعير" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-ع-ر" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "وَلَوْ شَاءَ اللَّهُ لَجَعَلَهُمْ أُمَّةً وَاحِدَةً وَلَٰكِن يُدْخِلُ مَن يَشَاءُ فِي رَحْمَتِهِ وَالظَّالِمُونَ مَا لَهُم مِّن وَلِيٍّ وَلَا نَصِيرٍ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور اگر", ar: "ولو" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "شَاءَ", transliteration: "shāʾa", meaning: { en: "had willed", ur: "چاہتا", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لَجَعَلَهُمْ", transliteration: "lajaʿalahum", meaning: { en: "He would have made them", ur: "تو انہیں بنا دیتا", ar: "لجعلهم" }, pos: "EMPH+V", posLabel: "EMPH+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "أُمَّةً", transliteration: "ummatan", meaning: { en: "a community", ur: "ایک امت", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-م-م" } },
      { arabic: "وَاحِدَةً", transliteration: "wāḥidatan", meaning: { en: "one", ur: "ایک", ar: "واحدة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "adversative" } },
      { arabic: "يُدْخِلُ", transliteration: "yudkhilu", meaning: { en: "He admits", ur: "داخل کرتا ہے", ar: "يدخل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "د-خ-ل" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "جسے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "رَحْمَتِهِ", transliteration: "raḥmatihi", meaning: { en: "His mercy", ur: "اپنی رحمت", ar: "رحمته" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ح-م" } },
      { arabic: "وَالظَّالِمُونَ", transliteration: "wal-ẓālimūna", meaning: { en: "and the wrongdoers", ur: "اور ظالموں کیلئے", ar: "والظالمون" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", number: "plural", root: "ظ-ل-م" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "ان کیلئے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "وَلِيٍّ", transliteration: "waliyyin", meaning: { en: "protector", ur: "دوست", ar: "ولي" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ل-ي" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ ہی", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "نَصِيرٍ", transliteration: "naṣīrin", meaning: { en: "helper", ur: "مددگار", ar: "نصير" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ص-ر" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "أَمِ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ فَاللَّهُ هُوَ الْوَلِيُّ وَهُوَ يُحْيِي الْمَوْتَىٰ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    words: [
      { arabic: "أَمِ", transliteration: "ami", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "اتَّخَذُوا", transliteration: "ittakhadhū", meaning: { en: "have they taken", ur: "انہوں نے بنا لیے", ar: "اتخذوا" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "أ-خ-ذ" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "کے سوا", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِهِ", transliteration: "dūnihi", meaning: { en: "Him", ur: "اس", ar: "دونه" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَوْلِيَاءَ", transliteration: "awliyāʾa", meaning: { en: "protectors", ur: "کارساز", ar: "أولياء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "و-ل-ي" } },
      { arabic: "فَاللَّهُ", transliteration: "faAllāhu", meaning: { en: "but Allah", ur: "تو اللہ ہی", ar: "فالله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الْوَلِيُّ", transliteration: "al-waliyyu", meaning: { en: "the Protector", ur: "کارساز", ar: "الولي" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ل-ي" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He", ur: "اور وہی", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "يُحْيِي", transliteration: "yuḥyī", meaning: { en: "gives life", ur: "زندہ کرتا ہے", ar: "يحيي" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "الْمَوْتَىٰ", transliteration: "al-mawtā", meaning: { en: "to the dead", ur: "مردوں کو", ar: "الموتى" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-و-ت" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "Capable", ur: "قادر", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ق-د-ر" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَمَا اخْتَلَفْتُمْ فِيهِ مِن شَيْءٍ فَحُكْمُهُ إِلَى اللَّهِ ذَٰلِكُمُ اللَّهُ رَبِّي عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And whatever", ur: "اور جس چیز میں", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "اخْتَلَفْتُمْ", transliteration: "ikhtalaflum", meaning: { en: "you differ", ur: "تم اختلاف کرو", ar: "اختلفتم" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "خ-ل-ف" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "over it", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "کچھ بھی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "anything", ur: "بات", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَحُكْمُهُ", transliteration: "faḥukmuhu", meaning: { en: "then its judgment", ur: "تو اس کا فیصلہ", ar: "فحكمه" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ح-ك-م" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "is with", ur: "کی طرف ہے", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "ذَٰلِكُمُ", transliteration: "dhālikumu", meaning: { en: "That", ur: "یہی تو", ar: "ذلكم" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "is Allah", ur: "اللہ ہے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "رَبِّي", transliteration: "rabbī", meaning: { en: "my Lord", ur: "میرا رب", ar: "ربي" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "upon Him", ur: "اسی پر", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "تَوَكَّلْتُ", transliteration: "tawakkaltu", meaning: { en: "I put my trust", ur: "میں نے بھروسہ کیا", ar: "توكلت" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "و-ك-ل" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to Him", ur: "اور اسی کی طرف", ar: "وإليه" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "direction" } },
      { arabic: "أُنِيبُ", transliteration: "unību", meaning: { en: "I turn", ur: "میں رجوع کرتا ہوں", ar: "أنيب" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-و-ب" } }
    ]
  }
};

export default TREEBANK_DATA;
