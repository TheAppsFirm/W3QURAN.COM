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
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "عسق",
    words: [
      { arabic: "عسق", transliteration: "ʿayn sīn qāf", meaning: { en: "Ayn Seen Qaf", ur: "عٓسٓق", ar: "عسق" }, pos: "INIT", posLabel: "INIT", grammar: { type: "muqatta'at", note: "disconnected letters" } }
    ],
    structure: {
      relationships: [],
    },
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
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 2, to: 6, label: 'عطف' },
        { from: 7, to: 10, label: 'عطف' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'توکید' },
        { from: 17, to: 18, label: 'مبتدأ + خبر' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + مفعول به' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 17, to: 20, label: 'عطف' },
        { from: 21, to: 22, label: 'جار + مجرور' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' },
        { from: 10, to: 11, label: 'فعل + مفعول به' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مبتدأ + خبر' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا وَمِنَ الْأَنْعَامِ أَزْوَاجًا يَذْرَؤُكُمْ فِيهِ لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ",
    words: [
      { arabic: "فَاطِرُ", transliteration: "fāṭiru", meaning: { en: "Creator", ur: "پیدا کرنے والا", ar: "فاطر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ف-ط-ر" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں کا", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کا", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "He made", ur: "اس نے بنائے", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "origin" } },
      { arabic: "أَنفُسِكُمْ", transliteration: "anfusikum", meaning: { en: "yourselves", ur: "تم میں سے", ar: "أنفسكم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ف-س" } },
      { arabic: "أَزْوَاجًا", transliteration: "azwājan", meaning: { en: "mates", ur: "جوڑے", ar: "أزواجا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ز-و-ج" } },
      { arabic: "وَمِنَ", transliteration: "wamina", meaning: { en: "and among", ur: "اور سے", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "origin" } },
      { arabic: "الْأَنْعَامِ", transliteration: "al-anʿāmi", meaning: { en: "the cattle", ur: "مویشیوں میں", ar: "الأنعام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ع-م" } },
      { arabic: "أَزْوَاجًا", transliteration: "azwājan", meaning: { en: "mates", ur: "جوڑے", ar: "أزواجا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ز-و-ج" } },
      { arabic: "يَذْرَؤُكُمْ", transliteration: "yadhraʾukum", meaning: { en: "He multiplies you", ur: "تمہیں پھیلاتا ہے", ar: "يذرؤكم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ذ-ر-أ" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "thereby", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "means" } },
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "There is nothing", ur: "نہیں ہے", ar: "ليس" }, pos: "V", posLabel: "V", grammar: { type: "negative verb" } },
      { arabic: "كَمِثْلِهِ", transliteration: "kamithlihi", meaning: { en: "like unto Him", ur: "اس جیسی", ar: "كمثله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٌ", transliteration: "shayʾun", meaning: { en: "anything", ur: "کوئی چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "السَّمِيعُ", transliteration: "al-samīʿu", meaning: { en: "the All-Hearing", ur: "سب سننے والا", ar: "السميع" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "س-م-ع" } },
      { arabic: "الْبَصِيرُ", transliteration: "al-baṣīru", meaning: { en: "the All-Seeing", ur: "سب دیکھنے والا", ar: "البصير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "لَهُ مَقَالِيدُ السَّمَاوَاتِ وَالْأَرْضِ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ إِنَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
    words: [
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "To Him belong", ur: "اسی کی ہیں", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مَقَالِيدُ", transliteration: "maqālīdu", meaning: { en: "the keys", ur: "کنجیاں", ar: "مقاليد" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کی", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "يَبْسُطُ", transliteration: "yabsuṭu", meaning: { en: "He extends", ur: "وہ کشادہ کرتا ہے", ar: "يبسط" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-س-ط" } },
      { arabic: "الرِّزْقَ", transliteration: "al-rizqa", meaning: { en: "provision", ur: "رزق", ar: "الرزق" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-ز-ق" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "for whom", ur: "جس کے لیے", ar: "لمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "وَيَقْدِرُ", transliteration: "wayaqdiru", meaning: { en: "and restricts", ur: "اور تنگ کرتا ہے", ar: "ويقدر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-د-ر" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He is", ur: "بیشک وہ", ar: "إنه" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "بِكُلِّ", transliteration: "bikulli", meaning: { en: "of all", ur: "ہر", ar: "بكل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "things", ur: "چیز کا", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "Knowing", ur: "جاننے والا ہے", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "شَرَعَ لَكُم مِّنَ الدِّينِ مَا وَصَّىٰ بِهِ نُوحًا وَالَّذِي أَوْحَيْنَا إِلَيْكَ وَمَا وَصَّيْنَا بِهِ إِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ أَنْ أَقِيمُوا الدِّينَ وَلَا تَتَفَرَّقُوا فِيهِ",
    words: [
      { arabic: "شَرَعَ", transliteration: "sharaʿa", meaning: { en: "He ordained", ur: "اس نے مقرر کیا", ar: "شرع" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ر-ع" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "the religion", ur: "دین", ar: "الدين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "د-ي-ن" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "that which", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "وَصَّىٰ", transliteration: "waṣṣā", meaning: { en: "He enjoined", ur: "تاکید کی تھی", ar: "وصى" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "و-ص-ي" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "upon", ur: "اس کی", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "نُوحًا", transliteration: "nūḥan", meaning: { en: "Noah", ur: "نوح کو", ar: "نوحا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "proper noun" } },
      { arabic: "وَالَّذِي", transliteration: "walladhī", meaning: { en: "and that which", ur: "اور جو", ar: "والذي" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "أَوْحَيْنَا", transliteration: "awḥaynā", meaning: { en: "We revealed", ur: "ہم نے وحی کی", ar: "أوحينا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ح-ي" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "وَصَّيْنَا", transliteration: "waṣṣaynā", meaning: { en: "We enjoined", ur: "ہم نے تاکید کی", ar: "وصينا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "و-ص-ي" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "upon", ur: "اس کی", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "إِبْرَاهِيمَ", transliteration: "Ibrāhīma", meaning: { en: "Abraham", ur: "ابراہیم کو", ar: "إبراهيم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", type: "proper noun" } },
      { arabic: "وَمُوسَىٰ", transliteration: "waMūsā", meaning: { en: "and Moses", ur: "اور موسیٰ", ar: "وموسى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { type: "proper noun" } },
      { arabic: "وَعِيسَىٰ", transliteration: "waʿĪsā", meaning: { en: "and Jesus", ur: "اور عیسیٰ کو", ar: "وعيسى" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { type: "proper noun" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive" } },
      { arabic: "أَقِيمُوا", transliteration: "aqīmū", meaning: { en: "establish", ur: "قائم کرو", ar: "أقيموا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ق-و-م", mood: "imperative" } },
      { arabic: "الدِّينَ", transliteration: "al-dīna", meaning: { en: "the religion", ur: "دین کو", ar: "الدين" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "د-ي-ن" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَتَفَرَّقُوا", transliteration: "tatafarraqū", meaning: { en: "be divided", ur: "تفرقہ ڈالو", ar: "تتفرقوا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ف-ر-ق" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + مفعول به' },
        { from: 21, to: 22, label: 'نهی + فعل' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "وَمَا تَفَرَّقُوا إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ بَغْيًا بَيْنَهُمْ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "تَفَرَّقُوا", transliteration: "tafarraqū", meaning: { en: "they divided", ur: "وہ تفرقے میں پڑے", ar: "تفرقوا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ف-ر-ق" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "کے بعد", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "اس کے جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "جَاءَهُمُ", transliteration: "jāʾahumu", meaning: { en: "came to them", ur: "ان کے پاس آیا", ar: "جاءهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "الْعِلْمُ", transliteration: "al-ʿilmu", meaning: { en: "the knowledge", ur: "علم", ar: "العلم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ل-م" } },
      { arabic: "بَغْيًا", transliteration: "baghyan", meaning: { en: "out of jealous animosity", ur: "باہمی حسد سے", ar: "بغيا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-غ-ي" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "between them", ur: "آپس میں", ar: "بينهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "فَلِذَٰلِكَ فَادْعُ وَاسْتَقِمْ كَمَا أُمِرْتَ وَلَا تَتَّبِعْ أَهْوَاءَهُمْ",
    words: [
      { arabic: "فَلِذَٰلِكَ", transliteration: "falidhālika", meaning: { en: "So to that", ur: "پس اسی کی طرف", ar: "فلذلك" }, pos: "CONJ+P+DEM", posLabel: "CONJ+P+DEM", grammar: { type: "demonstrative" } },
      { arabic: "فَادْعُ", transliteration: "fadʿu", meaning: { en: "then invite", ur: "تو دعوت دو", ar: "فادع" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "د-ع-و", mood: "imperative" } },
      { arabic: "وَاسْتَقِمْ", transliteration: "wastaqim", meaning: { en: "and stand firm", ur: "اور ثابت قدم رہو", ar: "واستقم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "ق-و-م", mood: "imperative" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "as", ur: "جیسا", ar: "كما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "comparison" } },
      { arabic: "أُمِرْتَ", transliteration: "umirta", meaning: { en: "you have been commanded", ur: "تمہیں حکم دیا گیا", ar: "أمرت" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "أ-م-ر" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَتَّبِعْ", transliteration: "tattabiʿ", meaning: { en: "follow", ur: "پیروی کرو", ar: "تتبع" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "أَهْوَاءَهُمْ", transliteration: "ahwāʾahum", meaning: { en: "their desires", ur: "ان کی خواہشات کی", ar: "أهواءهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ه-و-ي" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نهی + فعل' },
        { from: 7, to: 8, label: 'فعل + مفعول به' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "وَالَّذِينَ يُحَاجُّونَ فِي اللَّهِ مِن بَعْدِ مَا اسْتُجِيبَ لَهُ حُجَّتُهُمْ دَاحِضَةٌ عِندَ رَبِّهِمْ وَعَلَيْهِمْ غَضَبٌ وَلَهُمْ عَذَابٌ شَدِيدٌ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "يُحَاجُّونَ", transliteration: "yuḥājjūna", meaning: { en: "argue", ur: "جھگڑتے ہیں", ar: "يحاجون" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ح-ج-ج" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "concerning", ur: "بارے میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "بعد", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "کے بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "اسْتُجِيبَ", transliteration: "ustujība", meaning: { en: "was responded to", ur: "قبول کیا گیا", ar: "استجيب" }, pos: "V", posLabel: "V", grammar: { voice: "passive", form: "X", root: "ج-و-ب" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to Him", ur: "اسے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "حُجَّتُهُمْ", transliteration: "ḥujjatuhum", meaning: { en: "their argument", ur: "ان کی دلیل", ar: "حجتهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-ج-ج" } },
      { arabic: "دَاحِضَةٌ", transliteration: "dāḥiḍatun", meaning: { en: "is invalid", ur: "باطل ہے", ar: "داحضة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "د-ح-ض" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "with", ur: "پاس", ar: "عند" }, pos: "N", posLabel: "N", grammar: { role: "near" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "اپنے رب کے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "وَعَلَيْهِمْ", transliteration: "waʿalayhim", meaning: { en: "and upon them", ur: "اور ان پر", ar: "وعليهم" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "preposition" } },
      { arabic: "غَضَبٌ", transliteration: "ghaḍabun", meaning: { en: "is wrath", ur: "غضب ہے", ar: "غضب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "غ-ض-ب" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور ان کے لیے", ar: "ولهم" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "possession" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "is a punishment", ur: "عذاب ہے", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "شَدِيدٌ", transliteration: "shadīdun", meaning: { en: "severe", ur: "سخت", ar: "شديد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ش-د-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مبتدأ + خبر' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'موصوف + صفت' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "اللَّهُ الَّذِي أَنزَلَ الْكِتَابَ بِالْحَقِّ وَالْمِيزَانَ",
    words: [
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah is", ur: "اللہ ہے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", meaning: { en: "sent down", ur: "نازل کی", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "الْكِتَابَ", transliteration: "al-kitāba", meaning: { en: "the Book", ur: "کتاب", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ت-ب" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "in truth", ur: "سچائی کے ساتھ", ar: "بالحق" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-ق-ق" } },
      { arabic: "وَالْمِيزَانَ", transliteration: "wal-mīzāna", meaning: { en: "and the balance", ur: "اور میزان", ar: "والميزان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "و-ز-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "وَمَا يُدْرِيكَ لَعَلَّ السَّاعَةَ قَرِيبٌ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور تمہیں کیا خبر", ar: "وما" }, pos: "CONJ+Q", posLabel: "CONJ+Q", grammar: { type: "interrogative" } },
      { arabic: "يُدْرِيكَ", transliteration: "yudrīka", meaning: { en: "would make you perceive", ur: "بتائے", ar: "يدريك" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "د-ر-ي" } },
      { arabic: "لَعَلَّ", transliteration: "laʿalla", meaning: { en: "perhaps", ur: "شاید", ar: "لعل" }, pos: "PART", posLabel: "PART", grammar: { type: "hope" } },
      { arabic: "السَّاعَةَ", transliteration: "al-sāʿata", meaning: { en: "the Hour", ur: "قیامت", ar: "الساعة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-و-ع" } },
      { arabic: "قَرِيبٌ", transliteration: "qarībun", meaning: { en: "is near", ur: "قریب ہو", ar: "قريب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ق-ر-ب" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'اسم لعل' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "يَسْتَعْجِلُ بِهَا الَّذِينَ لَا يُؤْمِنُونَ بِهَا وَالَّذِينَ آمَنُوا مُشْفِقُونَ مِنْهَا وَيَعْلَمُونَ أَنَّهَا الْحَقُّ",
    words: [
      { arabic: "يَسْتَعْجِلُ", transliteration: "yastaʿjilu", meaning: { en: "Impatient for it are", ur: "جلدی مچاتے ہیں", ar: "يستعجل" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ع-ج-ل" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "for it", ur: "اس کی", ar: "بها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "وہ جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yuʾminūna", meaning: { en: "believe", ur: "ایمان لاتے", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "in it", ur: "اس پر", ar: "بها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "and those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "مُشْفِقُونَ", transliteration: "mushfiqūna", meaning: { en: "are fearful", ur: "ڈرتے ہیں", ar: "مشفقون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ش-ف-ق", form: "IV" } },
      { arabic: "مِنْهَا", transliteration: "minhā", meaning: { en: "of it", ur: "اس سے", ar: "منها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَيَعْلَمُونَ", transliteration: "wayaʿlamūna", meaning: { en: "and know", ur: "اور جانتے ہیں", ar: "ويعلمون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "أَنَّهَا", transliteration: "annahā", meaning: { en: "that it is", ur: "کہ وہ", ar: "أنها" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "الْحَقُّ", transliteration: "al-ḥaqqu", meaning: { en: "the truth", ur: "حق ہے", ar: "الحق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-ق-ق" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 7, to: 9, label: 'مبتدأ + خبر' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "مَن كَانَ يُرِيدُ حَرْثَ الْآخِرَةِ نَزِدْ لَهُ فِي حَرْثِهِ وَمَن كَانَ يُرِيدُ حَرْثَ الدُّنْيَا نُؤْتِهِ مِنْهَا وَمَا لَهُ فِي الْآخِرَةِ مِن نَّصِيبٍ",
    words: [
      { arabic: "مَن", transliteration: "man", meaning: { en: "Whoever", ur: "جو", ar: "من" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "should", ur: "ہو", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "يُرِيدُ", transliteration: "yurīdu", meaning: { en: "desires", ur: "چاہتا", ar: "يريد" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-و-د" } },
      { arabic: "حَرْثَ", transliteration: "ḥartha", meaning: { en: "the harvest", ur: "کھیتی", ar: "حرث" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-ر-ث" } },
      { arabic: "الْآخِرَةِ", transliteration: "al-ākhirati", meaning: { en: "of the Hereafter", ur: "آخرت کی", ar: "الآخرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "نَزِدْ", transliteration: "nazid", meaning: { en: "We increase", ur: "ہم بڑھائیں گے", ar: "نزد" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ز-ي-د" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "حَرْثِهِ", transliteration: "ḥarthihi", meaning: { en: "his harvest", ur: "اس کی کھیتی", ar: "حرثه" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ر-ث" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "and whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "should", ur: "ہو", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "يُرِيدُ", transliteration: "yurīdu", meaning: { en: "desires", ur: "چاہتا", ar: "يريد" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-و-د" } },
      { arabic: "حَرْثَ", transliteration: "ḥartha", meaning: { en: "the harvest", ur: "کھیتی", ar: "حرث" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-ر-ث" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of the world", ur: "دنیا کی", ar: "الدنيا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "نُؤْتِهِ", transliteration: "nuʾtihi", meaning: { en: "We give him", ur: "ہم دیں گے اسے", ar: "نؤته" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "مِنْهَا", transliteration: "minhā", meaning: { en: "from it", ur: "اس سے", ar: "منها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "partitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "but not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْآخِرَةِ", transliteration: "al-ākhirati", meaning: { en: "the Hereafter", ur: "آخرت", ar: "الآخرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "extra" } },
      { arabic: "نَّصِيبٍ", transliteration: "naṣībin", meaning: { en: "share", ur: "حصہ", ar: "نصيب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ص-ب" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "أَمْ لَهُمْ شُرَكَاءُ شَرَعُوا لَهُم مِّنَ الدِّينِ مَا لَمْ يَأْذَن بِهِ اللَّهُ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "have they", ur: "ان کے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "شُرَكَاءُ", transliteration: "shurakāʾu", meaning: { en: "partners", ur: "شریک ہیں", ar: "شركاء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ش-ر-ك" } },
      { arabic: "شَرَعُوا", transliteration: "sharaʿū", meaning: { en: "who ordained", ur: "جنہوں نے مقرر کیا", ar: "شرعوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ر-ع" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "the religion", ur: "دین", ar: "الدين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "د-ي-ن" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "that which", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive" } },
      { arabic: "يَأْذَن", transliteration: "yaʾdhan", meaning: { en: "authorize", ur: "اجازت دی", ar: "يأذن" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ذ-ن" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "it", ur: "اس کی", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 12, label: 'فعل + فاعل' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "تَرَى الظَّالِمِينَ مُشْفِقِينَ مِمَّا كَسَبُوا وَهُوَ وَاقِعٌ بِهِمْ",
    words: [
      { arabic: "تَرَى", transliteration: "tarā", meaning: { en: "You will see", ur: "تم دیکھو گے", ar: "ترى" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "الظَّالِمِينَ", transliteration: "al-ẓālimīna", meaning: { en: "the wrongdoers", ur: "ظالموں کو", ar: "الظالمين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ظ-ل-م" } },
      { arabic: "مُشْفِقِينَ", transliteration: "mushfiqīna", meaning: { en: "fearful", ur: "ڈرتے ہوئے", ar: "مشفقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ش-ف-ق", form: "IV" } },
      { arabic: "مِمَّا", transliteration: "mimmā", meaning: { en: "of what", ur: "اس سے جو", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كَسَبُوا", transliteration: "kasabū", meaning: { en: "they earned", ur: "انہوں نے کمایا", ar: "كسبوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-س-ب" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and it is", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "وَاقِعٌ", transliteration: "wāqiʿun", meaning: { en: "falling", ur: "واقع ہونے والا ہے", ar: "واقع" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "و-ق-ع" } },
      { arabic: "بِهِمْ", transliteration: "bihim", meaning: { en: "upon them", ur: "ان پر", ar: "بهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "ذَٰلِكَ الَّذِي يُبَشِّرُ اللَّهُ عِبَادَهُ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ قُل لَّا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا إِلَّا الْمَوَدَّةَ فِي الْقُرْبَىٰ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ ہے وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "which", ur: "جس کی", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "يُبَشِّرُ", transliteration: "yubashshiru", meaning: { en: "gives good tidings", ur: "خوشخبری دیتا ہے", ar: "يبشر" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ب-ش-ر" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عِبَادَهُ", transliteration: "ʿibādahu", meaning: { en: "to His servants", ur: "اپنے بندوں کو", ar: "عباده" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ب-د" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَعَمِلُوا", transliteration: "waʿamilū", meaning: { en: "and did", ur: "اور کیے", ar: "وعملوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "الصَّالِحَاتِ", transliteration: "al-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک عمل", ar: "الصالحات" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ص-ل-ح" } },
      { arabic: "قُل", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "أَسْأَلُكُمْ", transliteration: "asʾalukum", meaning: { en: "I ask you", ur: "میں تم سے مانگتا", ar: "أسألكم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-أ-ل" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "for it", ur: "اس پر", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "أَجْرًا", transliteration: "ajran", meaning: { en: "any payment", ur: "اجر", ar: "أجرا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ج-ر" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "الْمَوَدَّةَ", transliteration: "al-mawaddata", meaning: { en: "the love", ur: "محبت", ar: "المودة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-د-د" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "for", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْقُرْبَىٰ", transliteration: "al-qurbā", meaning: { en: "kinship", ur: "قرابت داری", ar: "القربى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-ر-ب" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 3, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 17, to: 18, label: 'جار + مجرور' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "أَمْ يَقُولُونَ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا فَإِن يَشَإِ اللَّهُ يَخْتِمْ عَلَىٰ قَلْبِكَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "do they say", ur: "یہ کہتے ہیں", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "افْتَرَىٰ", transliteration: "iftarā", meaning: { en: "he invented", ur: "اس نے گھڑ لیا", ar: "افترى" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ف-ر-ي" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "about", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "كَذِبًا", transliteration: "kadhibān", meaning: { en: "a lie", ur: "جھوٹ", ar: "كذبا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ذ-ب" } },
      { arabic: "فَإِن", transliteration: "faʾin", meaning: { en: "But if", ur: "پس اگر", ar: "فإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "يَشَإِ", transliteration: "yashaʾi", meaning: { en: "wills", ur: "چاہے", ar: "يشأ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "يَخْتِمْ", transliteration: "yakhtim", meaning: { en: "He would seal", ur: "مہر لگا دے", ar: "يختم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ت-م" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "قَلْبِكَ", transliteration: "qalbika", meaning: { en: "your heart", ur: "تمہارے دل", ar: "قلبك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-ل-ب" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَعْفُو عَنِ السَّيِّئَاتِ وَيَعْلَمُ مَا تَفْعَلُونَ",
    words: [
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He is", ur: "اور وہی ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One who", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "يَقْبَلُ", transliteration: "yaqbalu", meaning: { en: "accepts", ur: "قبول کرتا ہے", ar: "يقبل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-ب-ل" } },
      { arabic: "التَّوْبَةَ", transliteration: "al-tawbata", meaning: { en: "the repentance", ur: "توبہ", ar: "التوبة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ت-و-ب" } },
      { arabic: "عَنْ", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "عِبَادِهِ", transliteration: "ʿibādihi", meaning: { en: "His servants", ur: "اپنے بندوں", ar: "عباده" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ب-د" } },
      { arabic: "وَيَعْفُو", transliteration: "wayaʿfū", meaning: { en: "and pardons", ur: "اور معاف کرتا ہے", ar: "ويعفو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ف-و" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "the", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّيِّئَاتِ", transliteration: "al-sayyiʾāti", meaning: { en: "misdeeds", ur: "گناہوں", ar: "السيئات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-و-أ" } },
      { arabic: "وَيَعْلَمُ", transliteration: "wayaʿlamu", meaning: { en: "and knows", ur: "اور جانتا ہے", ar: "ويعلم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَفْعَلُونَ", transliteration: "tafʿalūna", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تفعلون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ع-ل" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "وَيَسْتَجِيبُ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَيَزِيدُهُم مِّن فَضْلِهِ",
    words: [
      { arabic: "وَيَسْتَجِيبُ", transliteration: "wayastajību", meaning: { en: "And He responds to", ur: "اور قبول کرتا ہے", ar: "ويستجيب" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "ج-و-ب" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کی جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَعَمِلُوا", transliteration: "waʿamilū", meaning: { en: "and did", ur: "اور کیے", ar: "وعملوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "الصَّالِحَاتِ", transliteration: "al-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک عمل", ar: "الصالحات" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ص-ل-ح" } },
      { arabic: "وَيَزِيدُهُم", transliteration: "wayazīduhum", meaning: { en: "and increases them", ur: "اور زیادہ دیتا ہے", ar: "ويزيدهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ز-ي-د" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "origin" } },
      { arabic: "فَضْلِهِ", transliteration: "faḍlihi", meaning: { en: "His bounty", ur: "اپنے فضل", ar: "فضله" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ف-ض-ل" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "وَلَوْ بَسَطَ اللَّهُ الرِّزْقَ لِعِبَادِهِ لَبَغَوْا فِي الْأَرْضِ وَلَٰكِن يُنَزِّلُ بِقَدَرٍ مَّا يَشَاءُ إِنَّهُ بِعِبَادِهِ خَبِيرٌ بَصِيرٌ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور اگر", ar: "ولو" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "بَسَطَ", transliteration: "basaṭa", meaning: { en: "extended", ur: "کشادہ کر دیتا", ar: "بسط" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-س-ط" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الرِّزْقَ", transliteration: "al-rizqa", meaning: { en: "the provision", ur: "رزق", ar: "الرزق" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-ز-ق" } },
      { arabic: "لِعِبَادِهِ", transliteration: "liʿibādihi", meaning: { en: "for His servants", ur: "اپنے بندوں کے لیے", ar: "لعباده" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ع-ب-د" } },
      { arabic: "لَبَغَوْا", transliteration: "labaghaw", meaning: { en: "they would rebel", ur: "تو وہ سرکشی کرتے", ar: "لبغوا" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "I", root: "ب-غ-ي" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "throughout", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "exceptive" } },
      { arabic: "يُنَزِّلُ", transliteration: "yunazzilu", meaning: { en: "He sends down", ur: "نازل کرتا ہے", ar: "ينزل" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ن-ز-ل" } },
      { arabic: "بِقَدَرٍ", transliteration: "biqadarin", meaning: { en: "in measure", ur: "اندازے سے", ar: "بقدر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ق-د-ر" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He is", ur: "بیشک وہ", ar: "إنه" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "بِعِبَادِهِ", transliteration: "biʿibādihi", meaning: { en: "of His servants", ur: "اپنے بندوں سے", ar: "بعباده" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ع-ب-د" } },
      { arabic: "خَبِيرٌ", transliteration: "khabīrun", meaning: { en: "Acquainted", ur: "باخبر ہے", ar: "خبير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "خ-ب-ر" } },
      { arabic: "بَصِيرٌ", transliteration: "baṣīrun", meaning: { en: "Seeing", ur: "دیکھنے والا", ar: "بصير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "وَهُوَ الَّذِي يُنَزِّلُ الْغَيْثَ مِن بَعْدِ مَا قَنَطُوا وَيَنشُرُ رَحْمَتَهُ وَهُوَ الْوَلِيُّ الْحَمِيدُ",
    words: [
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He is", ur: "اور وہی ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One who", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "يُنَزِّلُ", transliteration: "yunazzilu", meaning: { en: "sends down", ur: "نازل کرتا ہے", ar: "ينزل" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ن-ز-ل" } },
      { arabic: "الْغَيْثَ", transliteration: "al-ghaytha", meaning: { en: "the rain", ur: "بارش", ar: "الغيث" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "غ-ي-ث" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "کے بعد", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(when)", ur: "جب", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "قَنَطُوا", transliteration: "qanaṭū", meaning: { en: "they have despaired", ur: "لوگ مایوس ہو جاتے ہیں", ar: "قنطوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-ن-ط" } },
      { arabic: "وَيَنشُرُ", transliteration: "wayanshuru", meaning: { en: "and spreads", ur: "اور پھیلاتا ہے", ar: "وينشر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ن-ش-ر" } },
      { arabic: "رَحْمَتَهُ", transliteration: "raḥmatahu", meaning: { en: "His mercy", ur: "اپنی رحمت", ar: "رحمته" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-ح-م" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہی", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الْوَلِيُّ", transliteration: "al-waliyyu", meaning: { en: "the Protector", ur: "کارساز ہے", ar: "الولي" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "و-ل-ي" } },
      { arabic: "الْحَمِيدُ", transliteration: "al-ḥamīdu", meaning: { en: "the Praiseworthy", ur: "حمد والا", ar: "الحميد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-م-د" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَثَّ فِيهِمَا مِن دَابَّةٍ وَهُوَ عَلَىٰ جَمْعِهِمْ إِذَا يَشَاءُ قَدِيرٌ",
    words: [
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "And of", ur: "اور اس کی نشانیوں میں سے", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "partitive" } },
      { arabic: "آيَاتِهِ", transliteration: "āyātihi", meaning: { en: "His signs", ur: "اس کی نشانیاں", ar: "آياته" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ي-ي" } },
      { arabic: "خَلْقُ", transliteration: "khalqu", meaning: { en: "is the creation", ur: "پیدا کرنا ہے", ar: "خلق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "خ-ل-ق" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کا", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "بَثَّ", transliteration: "baththa", meaning: { en: "He has dispersed", ur: "پھیلائے", ar: "بث" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-ث-ث" } },
      { arabic: "فِيهِمَا", transliteration: "fīhimā", meaning: { en: "throughout both", ur: "ان دونوں میں", ar: "فيهما" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "دَابَّةٍ", transliteration: "dābbatin", meaning: { en: "creatures", ur: "جاندار", ar: "دابة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "د-ب-ب" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He is", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "جَمْعِهِمْ", transliteration: "jamʿihim", meaning: { en: "gathering them", ur: "ان کو جمع کرنے", ar: "جمعهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-م-ع" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "Competent", ur: "قادر ہے", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ق-د-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ وَيَعْفُو عَن كَثِيرٍ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And whatever", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "أَصَابَكُم", transliteration: "aṣābakum", meaning: { en: "strikes you", ur: "تمہیں پہنچے", ar: "أصابكم" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ص-و-ب" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مُّصِيبَةٍ", transliteration: "muṣībatin", meaning: { en: "disaster", ur: "مصیبت", ar: "مصيبة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-و-ب" } },
      { arabic: "فَبِمَا", transliteration: "fabimā", meaning: { en: "it is because of what", ur: "تو وہ اس سبب سے ہے جو", ar: "فبما" }, pos: "CONJ+P+REL", posLabel: "CONJ+P+REL", grammar: { type: "relative" } },
      { arabic: "كَسَبَتْ", transliteration: "kasabat", meaning: { en: "have earned", ur: "کمائے ہیں", ar: "كسبت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-س-ب" } },
      { arabic: "أَيْدِيكُمْ", transliteration: "aydīkum", meaning: { en: "your hands", ur: "تمہارے ہاتھوں نے", ar: "أيديكم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ي-د-ي" } },
      { arabic: "وَيَعْفُو", transliteration: "wayaʿfū", meaning: { en: "and He pardons", ur: "اور معاف کرتا ہے", ar: "ويعفو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ف-و" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "over", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كَثِيرٍ", transliteration: "kathīrin", meaning: { en: "much", ur: "بہت سا", ar: "كثير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ك-ث-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "وَمَا أَنتُم بِمُعْجِزِينَ فِي الْأَرْضِ وَمَا لَكُم مِّن دُونِ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَنتُم", transliteration: "antum", meaning: { en: "can you", ur: "تم", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "2nd", number: "plural" } },
      { arabic: "بِمُعْجِزِينَ", transliteration: "bimuʿjizīna", meaning: { en: "escape", ur: "عاجز کر سکنے والے", ar: "بمعجزين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", root: "ع-ج-ز", form: "IV" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "on", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں ہے", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "besides", ur: "سوا", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "other than", ur: "سوائے", ar: "دون" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "extra" } },
      { arabic: "وَلِيٍّ", transliteration: "waliyyin", meaning: { en: "protector", ur: "دوست", ar: "ولي" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ل-ي" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "or", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "نَصِيرٍ", transliteration: "naṣīrin", meaning: { en: "helper", ur: "مددگار", ar: "نصير" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "وَمِنْ آيَاتِهِ الْجَوَارِ فِي الْبَحْرِ كَالْأَعْلَامِ",
    words: [
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "And of", ur: "اور اس کی نشانیوں میں سے", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "partitive" } },
      { arabic: "آيَاتِهِ", transliteration: "āyātihi", meaning: { en: "His signs", ur: "اس کی نشانیاں", ar: "آياته" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ي-ي" } },
      { arabic: "الْجَوَارِ", transliteration: "al-jawāri", meaning: { en: "are the ships", ur: "جہاز ہیں", ar: "الجوار" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ج-ر-ي" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْبَحْرِ", transliteration: "al-baḥri", meaning: { en: "the sea", ur: "سمندر", ar: "البحر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ب-ح-ر" } },
      { arabic: "كَالْأَعْلَامِ", transliteration: "kal-aʿlāmi", meaning: { en: "like mountains", ur: "پہاڑوں کی طرح", ar: "كالأعلام" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "إِن يَشَأْ يُسْكِنِ الرِّيحَ فَيَظْلَلْنَ رَوَاكِدَ عَلَىٰ ظَهْرِهِ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "يَشَأْ", transliteration: "yashaʾ", meaning: { en: "He wills", ur: "وہ چاہے", ar: "يشأ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "يُسْكِنِ", transliteration: "yuskini", meaning: { en: "He could still", ur: "تھام لے", ar: "يسكن" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "س-ك-ن" } },
      { arabic: "الرِّيحَ", transliteration: "al-rīḥa", meaning: { en: "the wind", ur: "ہوا کو", ar: "الريح" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-و-ح" } },
      { arabic: "فَيَظْلَلْنَ", transliteration: "fayaẓlalna", meaning: { en: "and they would remain", ur: "تو رہ جائیں", ar: "فيظللن" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ظ-ل-ل" } },
      { arabic: "رَوَاكِدَ", transliteration: "rawākida", meaning: { en: "motionless", ur: "رکی ہوئیں", ar: "رواكد" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ر-ك-د" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "ظَهْرِهِ", transliteration: "ẓahrihi", meaning: { en: "its surface", ur: "اس کی پشت", ar: "ظهره" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ظ-ه-ر" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "لَآيَاتٍ", transliteration: "laʾāyātin", meaning: { en: "are signs", ur: "نشانیاں ہیں", ar: "لآيات" }, pos: "PART+N", posLabel: "PART+N", grammar: { case: "genitive", root: "أ-ي-ي" } },
      { arabic: "لِّكُلِّ", transliteration: "likulli", meaning: { en: "for every", ur: "ہر", ar: "لكل" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "صَبَّارٍ", transliteration: "ṣabbārin", meaning: { en: "patient", ur: "صبر کرنے والے", ar: "صبار" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ص-ب-ر" } },
      { arabic: "شَكُورٍ", transliteration: "shakūrin", meaning: { en: "grateful one", ur: "شکر کرنے والے", ar: "شكور" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ش-ك-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "أَوْ يُوبِقْهُنَّ بِمَا كَسَبُوا وَيَعْفُ عَن كَثِيرٍ",
    words: [
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "Or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يُوبِقْهُنَّ", transliteration: "yūbiqhunna", meaning: { en: "He could destroy them", ur: "ان کو غرق کر دے", ar: "يوبقهن" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ب-ق" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "اس کے سبب جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كَسَبُوا", transliteration: "kasabū", meaning: { en: "they earned", ur: "انہوں نے کمایا", ar: "كسبوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-س-ب" } },
      { arabic: "وَيَعْفُ", transliteration: "wayaʿfu", meaning: { en: "and He pardons", ur: "اور معاف کرے", ar: "ويعف" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ف-و" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "over", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كَثِيرٍ", transliteration: "kathīrin", meaning: { en: "much", ur: "بہت سا", ar: "كثير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ك-ث-ر" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "وَيَعْلَمَ الَّذِينَ يُجَادِلُونَ فِي آيَاتِنَا مَا لَهُم مِّن مَّحِيصٍ",
    words: [
      { arabic: "وَيَعْلَمَ", transliteration: "wayaʿlama", meaning: { en: "And those who dispute know", ur: "اور جان لیں", ar: "ويعلم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "يُجَادِلُونَ", transliteration: "yujādilūna", meaning: { en: "dispute", ur: "جھگڑتے ہیں", ar: "يجادلون" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ج-د-ل" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "concerning", ur: "بارے میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "آيَاتِنَا", transliteration: "āyātinā", meaning: { en: "Our signs", ur: "ہماری آیات کے", ar: "آياتنا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ي-ي" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں ہے", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "extra" } },
      { arabic: "مَّحِيصٍ", transliteration: "maḥīṣin", meaning: { en: "place of escape", ur: "جائے پناہ", ar: "محيص" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ي-ص" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "فَمَا أُوتِيتُم مِّن شَيْءٍ فَمَتَاعُ الْحَيَاةِ الدُّنْيَا وَمَا عِندَ اللَّهِ خَيْرٌ وَأَبْقَىٰ لِلَّذِينَ آمَنُوا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
    words: [
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "So whatever", ur: "پس جو کچھ", ar: "فما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "أُوتِيتُم", transliteration: "ūtītum", meaning: { en: "you have been given", ur: "تمہیں دیا گیا", ar: "أوتيتم" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "أ-ت-ي" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "anything", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَمَتَاعُ", transliteration: "famatāʿu", meaning: { en: "is but enjoyment", ur: "تو فائدہ ہے", ar: "فمتاع" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "م-ت-ع" } },
      { arabic: "الْحَيَاةِ", transliteration: "al-ḥayāti", meaning: { en: "of life", ur: "زندگی کا", ar: "الحياة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ي-ي" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of the world", ur: "دنیوی", ar: "الدنيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "is with", ur: "پاس", ar: "عند" }, pos: "N", posLabel: "N", grammar: { role: "near" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "خَيْرٌ", transliteration: "khayrun", meaning: { en: "is better", ur: "بہتر ہے", ar: "خير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "خ-ي-ر" } },
      { arabic: "وَأَبْقَىٰ", transliteration: "wa-abqā", meaning: { en: "and more enduring", ur: "اور باقی رہنے والا", ar: "وأبقى" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { root: "ب-ق-ي" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان لوگوں کے لیے جو", ar: "للذين" }, pos: "P+REL", posLabel: "P+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَعَلَىٰ", transliteration: "waʿalā", meaning: { en: "and upon", ur: "اور پر", ar: "وعلى" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "اپنے رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "يَتَوَكَّلُونَ", transliteration: "yatawakkalūna", meaning: { en: "they rely", ur: "بھروسہ کرتے ہیں", ar: "يتوكلون" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "و-ك-ل" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 13, to: 14, label: 'موصول + صلة' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "وَالَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "يَجْتَنِبُونَ", transliteration: "yajtanibūna", meaning: { en: "avoid", ur: "بچتے ہیں", ar: "يجتنبون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ج-ن-ب" } },
      { arabic: "كَبَائِرَ", transliteration: "kabāʾira", meaning: { en: "the major sins", ur: "بڑے گناہوں", ar: "كبائر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ب-ر" } },
      { arabic: "الْإِثْمِ", transliteration: "al-ithmi", meaning: { en: "and immoralities", ur: "کے", ar: "الإثم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ث-م" } },
      { arabic: "وَالْفَوَاحِشَ", transliteration: "wal-fawāḥisha", meaning: { en: "and immoralities", ur: "اور بے حیائیوں سے", ar: "والفواحش" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ف-ح-ش" } },
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "and when", ur: "اور جب", ar: "وإذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "temporal" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(emphatic)", ur: "(تاکیدی)", ar: "ما" }, pos: "PART", posLabel: "PART", grammar: { type: "extra" } },
      { arabic: "غَضِبُوا", transliteration: "ghaḍibū", meaning: { en: "they are angry", ur: "غصہ آتا ہے", ar: "غضبوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ض-ب" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "يَغْفِرُونَ", transliteration: "yaghfirūna", meaning: { en: "forgive", ur: "معاف کر دیتے ہیں", ar: "يغفرون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ف-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "اسْتَجَابُوا", transliteration: "istajābū", meaning: { en: "responded", ur: "اطاعت کی", ar: "استجابوا" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ج-و-ب" } },
      { arabic: "لِرَبِّهِمْ", transliteration: "lirabbihim", meaning: { en: "to their Lord", ur: "اپنے رب کی", ar: "لربهم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "وَأَقَامُوا", transliteration: "wa-aqāmū", meaning: { en: "and established", ur: "اور قائم کی", ar: "وأقاموا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ق-و-م" } },
      { arabic: "الصَّلَاةَ", transliteration: "al-ṣalāta", meaning: { en: "prayer", ur: "نماز", ar: "الصلاة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ص-ل-و" } },
      { arabic: "وَأَمْرُهُمْ", transliteration: "wa-amruhum", meaning: { en: "and whose affair", ur: "اور ان کا معاملہ", ar: "وأمرهم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "أ-م-ر" } },
      { arabic: "شُورَىٰ", transliteration: "shūrā", meaning: { en: "is consultation", ur: "مشورے سے ہوتا ہے", ar: "شورى" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ش-و-ر" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "among them", ur: "ان کے درمیان", ar: "بينهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَمِمَّا", transliteration: "wamimmā", meaning: { en: "and from what", ur: "اور جو", ar: "ومما" }, pos: "CONJ+P+REL", posLabel: "CONJ+P+REL", grammar: { type: "relative" } },
      { arabic: "رَزَقْنَاهُمْ", transliteration: "razaqnāhum", meaning: { en: "We have provided them", ur: "ہم نے انہیں دیا", ar: "رزقناهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-ز-ق" } },
      { arabic: "يُنفِقُونَ", transliteration: "yunfiqūna", meaning: { en: "they spend", ur: "خرچ کرتے ہیں", ar: "ينفقون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ف-ق" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "وَالَّذِينَ إِذَا أَصَابَهُمُ الْبَغْيُ هُمْ يَنتَصِرُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "أَصَابَهُمُ", transliteration: "aṣābahumu", meaning: { en: "strikes them", ur: "ان پر پہنچے", ar: "أصابهم" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ص-و-ب" } },
      { arabic: "الْبَغْيُ", transliteration: "al-baghyu", meaning: { en: "oppression", ur: "ظلم", ar: "البغي" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-غ-ي" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "يَنتَصِرُونَ", transliteration: "yantaṣirūna", meaning: { en: "defend themselves", ur: "بدلہ لیتے ہیں", ar: "ينتصرون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ن-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ",
    words: [
      { arabic: "وَجَزَاءُ", transliteration: "wajazāʾu", meaning: { en: "And the retribution for", ur: "اور بدلہ", ar: "وجزاء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ج-ز-ي" } },
      { arabic: "سَيِّئَةٍ", transliteration: "sayyiʾatin", meaning: { en: "an evil act", ur: "برائی کا", ar: "سيئة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-و-أ" } },
      { arabic: "سَيِّئَةٌ", transliteration: "sayyiʾatun", meaning: { en: "is an evil one like it", ur: "برائی ہے", ar: "سيئة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-و-أ" } },
      { arabic: "مِّثْلُهَا", transliteration: "mithluhā", meaning: { en: "like it", ur: "اسی جیسی", ar: "مثلها" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-ث-ل" } },
      { arabic: "فَمَنْ", transliteration: "faman", meaning: { en: "But whoever", ur: "پس جو", ar: "فمن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "عَفَا", transliteration: "ʿafā", meaning: { en: "pardons", ur: "معاف کرے", ar: "عفا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ف-و" } },
      { arabic: "وَأَصْلَحَ", transliteration: "wa-aṣlaḥa", meaning: { en: "and reforms", ur: "اور اصلاح کرے", ar: "وأصلح" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ل-ح" } },
      { arabic: "فَأَجْرُهُ", transliteration: "faʾajruhu", meaning: { en: "his reward is", ur: "تو اس کا اجر", ar: "فأجره" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "أ-ج-ر" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر ہے", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 1, to: 3, label: 'مبتدأ + خبر' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "وَلَمَنِ انتَصَرَ بَعْدَ ظُلْمِهِ فَأُولَٰئِكَ مَا عَلَيْهِم مِّن سَبِيلٍ",
    words: [
      { arabic: "وَلَمَنِ", transliteration: "walamani", meaning: { en: "And whoever", ur: "اور جو", ar: "ولمن" }, pos: "CONJ+PART+REL", posLabel: "CONJ+PART+REL", grammar: { type: "relative" } },
      { arabic: "انتَصَرَ", transliteration: "intaṣara", meaning: { en: "defends himself", ur: "بدلہ لے", ar: "انتصر" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ن-ص-ر" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "ظُلْمِهِ", transliteration: "ẓulmihi", meaning: { en: "having been wronged", ur: "ظلم کے", ar: "ظلمه" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ظ-ل-م" } },
      { arabic: "فَأُولَٰئِكَ", transliteration: "faʾulāʾika", meaning: { en: "those", ur: "تو ایسے لوگوں", ar: "فأولئك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { type: "demonstrative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں ہے", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "extra" } },
      { arabic: "سَبِيلٍ", transliteration: "sabīlin", meaning: { en: "cause for blame", ur: "الزام", ar: "سبيل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-ب-ل" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "إِنَّمَا السَّبِيلُ عَلَى الَّذِينَ يَظْلِمُونَ النَّاسَ وَيَبْغُونَ فِي الْأَرْضِ بِغَيْرِ الْحَقِّ أُولَٰئِكَ لَهُمْ عَذَابٌ أَلِيمٌ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "The cause is only", ur: "الزام تو بس", ar: "إنما" }, pos: "PART", posLabel: "PART", grammar: { type: "restriction" } },
      { arabic: "السَّبِيلُ", transliteration: "al-sabīlu", meaning: { en: "the cause for blame", ur: "راستہ ہے", ar: "السبيل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ب-ل" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "against", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "يَظْلِمُونَ", transliteration: "yaẓlimūna", meaning: { en: "wrong", ur: "ظلم کرتے ہیں", ar: "يظلمون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ظ-ل-م" } },
      { arabic: "النَّاسَ", transliteration: "al-nāsa", meaning: { en: "the people", ur: "لوگوں پر", ar: "الناس" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَيَبْغُونَ", transliteration: "wayabghūna", meaning: { en: "and tyrannize", ur: "اور زیادتی کرتے ہیں", ar: "ويبغون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ب-غ-ي" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "throughout", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the land", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "ناحق", ar: "بغير" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الْحَقِّ", transliteration: "al-ḥaqqi", meaning: { en: "right", ur: "حق کے", ar: "الحق" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ق-ق" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "Those", ur: "یہی لوگ ہیں", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "is a punishment", ur: "عذاب ہے", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", meaning: { en: "painful", ur: "دردناک", ar: "أليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "أ-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ",
    words: [
      { arabic: "وَلَمَن", transliteration: "walaman", meaning: { en: "And whoever", ur: "اور جو", ar: "ولمن" }, pos: "CONJ+PART+REL", posLabel: "CONJ+PART+REL", grammar: { type: "relative" } },
      { arabic: "صَبَرَ", transliteration: "ṣabara", meaning: { en: "is patient", ur: "صبر کرے", ar: "صبر" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ب-ر" } },
      { arabic: "وَغَفَرَ", transliteration: "waghafara", meaning: { en: "and forgives", ur: "اور معاف کرے", ar: "وغفر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "غ-ف-ر" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that is", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "لَمِنْ", transliteration: "lamin", meaning: { en: "surely of", ur: "یقیناً ان باتوں میں سے ہے", ar: "لمن" }, pos: "PART+P", posLabel: "PART+P", grammar: { type: "emphasis" } },
      { arabic: "عَزْمِ", transliteration: "ʿazmi", meaning: { en: "the matters of determination", ur: "ہمت کے", ar: "عزم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ز-م" } },
      { arabic: "الْأُمُورِ", transliteration: "al-umūri", meaning: { en: "the matters", ur: "کاموں میں سے", ar: "الأمور" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-م-ر" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِن وَلِيٍّ مِّن بَعْدِهِ",
    words: [
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And he whom", ur: "اور جسے", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "يُضْلِلِ", transliteration: "yuḍlili", meaning: { en: "lets go astray", ur: "گمراہ کرے", ar: "يضلل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ض-ل-ل" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "then not", ur: "تو نہیں ہے", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "extra" } },
      { arabic: "وَلِيٍّ", transliteration: "waliyyin", meaning: { en: "protector", ur: "دوست", ar: "ولي" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ل-ي" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "after", ur: "بعد", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِهِ", transliteration: "baʿdihi", meaning: { en: "Him", ur: "اس کے", ar: "بعده" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "وَتَرَاهُمْ يُعْرَضُونَ عَلَيْهَا خَاشِعِينَ مِنَ الذُّلِّ يَنظُرُونَ مِن طَرْفٍ خَفِيٍّ",
    words: [
      { arabic: "وَتَرَاهُمْ", transliteration: "watarāhum", meaning: { en: "And you will see them", ur: "اور تم دیکھو گے ان کو", ar: "وتراهم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "يُعْرَضُونَ", transliteration: "yuʿraḍūna", meaning: { en: "exposed", ur: "پیش کیے جائیں گے", ar: "يعرضون" }, pos: "V", posLabel: "V", grammar: { voice: "passive", root: "ع-ر-ض" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "before it", ur: "اس کے سامنے", ar: "عليها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "خَاشِعِينَ", transliteration: "khāshiʿīna", meaning: { en: "humbled", ur: "عاجزی سے", ar: "خاشعين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "خ-ش-ع" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "cause" } },
      { arabic: "الذُّلِّ", transliteration: "al-dhulli", meaning: { en: "humiliation", ur: "ذلت", ar: "الذل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ذ-ل-ل" } },
      { arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "looking", ur: "دیکھ رہے ہوں گے", ar: "ينظرون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ظ-ر" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "origin" } },
      { arabic: "طَرْفٍ", transliteration: "ṭarfin", meaning: { en: "a glance", ur: "نگاہ", ar: "طرف" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ط-ر-ف" } },
      { arabic: "خَفِيٍّ", transliteration: "khafiyyin", meaning: { en: "stealthy", ur: "چوری چھپے", ar: "خفي" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "خ-ف-ي" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "وَقَالَ الَّذِينَ آمَنُوا إِنَّ الْخَاسِرِينَ الَّذِينَ خَسِرُوا أَنفُسَهُمْ وَأَهْلِيهِمْ يَوْمَ الْقِيَامَةِ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And will say", ur: "اور کہیں گے", ar: "وقال" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "وہ جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "الْخَاسِرِينَ", transliteration: "al-khāsirīna", meaning: { en: "the losers are", ur: "نقصان میں ہیں وہ", ar: "الخاسرين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "خ-س-ر" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "خَسِرُوا", transliteration: "khasirū", meaning: { en: "lost", ur: "نقصان میں ڈالا", ar: "خسروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-س-ر" } },
      { arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", meaning: { en: "themselves", ur: "اپنے آپ کو", ar: "أنفسهم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ف-س" } },
      { arabic: "وَأَهْلِيهِمْ", transliteration: "wa-ahlīhim", meaning: { en: "and their families", ur: "اور اپنے گھر والوں کو", ar: "وأهليهم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "أ-ه-ل" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "on the Day of", ur: "قیامت کے دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الْقِيَامَةِ", transliteration: "al-qiyāmati", meaning: { en: "Resurrection", ur: "قیامت", ar: "القيامة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "وَمَا كَانَ لَهُم مِّنْ أَوْلِيَاءَ يَنصُرُونَهُم مِّن دُونِ اللَّهِ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "were there", ur: "تھے", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { type: "extra" } },
      { arabic: "أَوْلِيَاءَ", transliteration: "awliyāʾa", meaning: { en: "allies", ur: "دوست", ar: "أولياء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "و-ل-ي" } },
      { arabic: "يَنصُرُونَهُم", transliteration: "yanṣurūnahum", meaning: { en: "to aid them", ur: "جو ان کی مدد کریں", ar: "ينصرونهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ص-ر" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "besides", ur: "سوائے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "other than", ur: "سوا", ar: "دون" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "فَإِنْ أَعْرَضُوا فَمَا أَرْسَلْنَاكَ عَلَيْهِمْ حَفِيظًا إِنْ عَلَيْكَ إِلَّا الْبَلَاغُ",
    words: [
      { arabic: "فَإِنْ", transliteration: "faʾin", meaning: { en: "But if", ur: "پس اگر", ar: "فإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "أَعْرَضُوا", transliteration: "aʿraḍū", meaning: { en: "they turn away", ur: "وہ منہ پھیر لیں", ar: "أعرضوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ع-ر-ض" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "then not", ur: "تو نہیں", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَرْسَلْنَاكَ", transliteration: "arsalnāka", meaning: { en: "We have sent you", ur: "ہم نے تمہیں بھیجا", ar: "أرسلناك" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "حَفِيظًا", transliteration: "ḥafīẓan", meaning: { en: "as a guardian", ur: "نگران بنا کر", ar: "حفيظا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ح-ف-ظ" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "not", ur: "نہیں", ar: "إن" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "upon you", ur: "تم پر", ar: "عليك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "صرف", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "الْبَلَاغُ", transliteration: "al-balāghu", meaning: { en: "the notification", ur: "پیغام پہنچانا ہے", ar: "البلاغ" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-ل-غ" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 10, label: 'حصر' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "لِّلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ يَخْلُقُ مَا يَشَاءُ يَهَبُ لِمَن يَشَاءُ إِنَاثًا وَيَهَبُ لِمَن يَشَاءُ الذُّكُورَ",
    words: [
      { arabic: "لِّلَّهِ", transliteration: "lillāhi", meaning: { en: "To Allah belongs", ur: "اللہ ہی کی ہے", ar: "لله" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "مُلْكُ", transliteration: "mulku", meaning: { en: "the dominion", ur: "بادشاہی", ar: "ملك" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-ل-ك" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کی", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "يَخْلُقُ", transliteration: "yakhluqu", meaning: { en: "He creates", ur: "پیدا کرتا ہے", ar: "يخلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "يَهَبُ", transliteration: "yahabu", meaning: { en: "He gives", ur: "عطا کرتا ہے", ar: "يهب" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ه-ب" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "to whom", ur: "جسے", ar: "لمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "إِنَاثًا", transliteration: "ināthān", meaning: { en: "female children", ur: "لڑکیاں", ar: "إناثا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَيَهَبُ", transliteration: "wayahabu", meaning: { en: "and gives", ur: "اور عطا کرتا ہے", ar: "ويهب" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "و-ه-ب" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "to whom", ur: "جسے", ar: "لمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "الذُّكُورَ", transliteration: "al-dhukūra", meaning: { en: "male children", ur: "لڑکے", ar: "الذكور" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 11, label: 'فعل + مفعول به' },
        { from: 12, to: 15, label: 'فعل + مفعول به' }
      ]
    }
  },

  50: {
    ayahNumber: 50,
    text: "أَوْ يُزَوِّجُهُمْ ذُكْرَانًا وَإِنَاثًا وَيَجْعَلُ مَن يَشَاءُ عَقِيمًا إِنَّهُ عَلِيمٌ قَدِيرٌ",
    words: [
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "Or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يُزَوِّجُهُمْ", transliteration: "yuzawwijuhum", meaning: { en: "He makes them both", ur: "ملا دیتا ہے", ar: "يزوجهم" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ز-و-ج" } },
      { arabic: "ذُكْرَانًا", transliteration: "dhukrānan", meaning: { en: "males", ur: "لڑکے", ar: "ذكرانا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَإِنَاثًا", transliteration: "wa-ināthān", meaning: { en: "and females", ur: "اور لڑکیاں", ar: "وإناثا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَيَجْعَلُ", transliteration: "wayajʿalu", meaning: { en: "and He renders", ur: "اور بنا دیتا ہے", ar: "ويجعل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "جسے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "عَقِيمًا", transliteration: "ʿaqīman", meaning: { en: "barren", ur: "بانجھ", ar: "عقيما" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ع-ق-م" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He is", ur: "بیشک وہ", ar: "إنه" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphasis" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "Knowing", ur: "جاننے والا", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "Competent", ur: "قادر ہے", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ق-د-ر" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 8, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
  },

  51: {
    ayahNumber: 51,
    text: "وَمَا كَانَ لِبَشَرٍ أَن يُكَلِّمَهُ اللَّهُ إِلَّا وَحْيًا أَوْ مِن وَرَاءِ حِجَابٍ أَوْ يُرْسِلَ رَسُولًا فَيُوحِيَ بِإِذْنِهِ مَا يَشَاءُ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And it is not", ur: "اور نہیں ہو سکتا", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "for", ur: "کہ", ar: "كان" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "لِبَشَرٍ", transliteration: "libasharin", meaning: { en: "a human being", ur: "کسی بشر سے", ar: "لبشر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ب-ش-ر" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive" } },
      { arabic: "يُكَلِّمَهُ", transliteration: "yukallimahu", meaning: { en: "should speak to him", ur: "اس سے بات کرے", ar: "يكلمه" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ل-م" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "وَحْيًا", transliteration: "waḥyan", meaning: { en: "by revelation", ur: "وحی کے ذریعے", ar: "وحيا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ح-ي" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "origin" } },
      { arabic: "وَرَاءِ", transliteration: "warāʾi", meaning: { en: "behind", ur: "پیچھے", ar: "وراء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "حِجَابٍ", transliteration: "ḥijābin", meaning: { en: "a partition", ur: "پردے کے", ar: "حجاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ج-ب" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يُرْسِلَ", transliteration: "yursila", meaning: { en: "He sends", ur: "بھیجے", ar: "يرسل" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "رَسُولًا", transliteration: "rasūlan", meaning: { en: "a messenger", ur: "ایک فرشتہ", ar: "رسولا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-س-ل" } },
      { arabic: "فَيُوحِيَ", transliteration: "fayūḥiya", meaning: { en: "to reveal", ur: "پھر وحی کرے", ar: "فيوحي" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "و-ح-ي" } },
      { arabic: "بِإِذْنِهِ", transliteration: "biʾidhnihi", meaning: { en: "by His permission", ur: "اس کی اجازت سے", ar: "بإذنه" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-ذ-ن" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'فعل + مفعول به' }
      ]
    }
  },

  52: {
    ayahNumber: 52,
    text: "وَكَذَٰلِكَ أَوْحَيْنَا إِلَيْكَ رُوحًا مِّنْ أَمْرِنَا مَا كُنتَ تَدْرِي مَا الْكِتَابُ وَلَا الْإِيمَانُ وَلَٰكِن جَعَلْنَاهُ نُورًا نَّهْدِي بِهِ مَن نَّشَاءُ مِنْ عِبَادِنَا",
    words: [
      { arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", meaning: { en: "And thus", ur: "اور اسی طرح", ar: "وكذلك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { type: "demonstrative" } },
      { arabic: "أَوْحَيْنَا", transliteration: "awḥaynā", meaning: { en: "We revealed", ur: "ہم نے وحی کی", ar: "أوحينا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "و-ح-ي" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليك" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "رُوحًا", transliteration: "rūḥan", meaning: { en: "a spirit", ur: "ایک روح", ar: "روحا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-و-ح" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "أَمْرِنَا", transliteration: "amrinā", meaning: { en: "Our command", ur: "ہمارے حکم", ar: "أمرنا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-م-ر" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "كُنتَ", transliteration: "kunta", meaning: { en: "did you", ur: "تم", ar: "كنت" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن" } },
      { arabic: "تَدْرِي", transliteration: "tadrī", meaning: { en: "know", ur: "جانتے تھے", ar: "تدري" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ر-ي" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا", ar: "ما" }, pos: "Q", posLabel: "Q", grammar: { type: "interrogative" } },
      { arabic: "الْكِتَابُ", transliteration: "al-kitābu", meaning: { en: "is the Book", ur: "کتاب ہے", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ك-ت-ب" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "or", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "الْإِيمَانُ", transliteration: "al-īmānu", meaning: { en: "the faith", ur: "ایمان", ar: "الإيمان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-م-ن" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "But", ur: "لیکن", ar: "ولكن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "exceptive" } },
      { arabic: "جَعَلْنَاهُ", transliteration: "jaʿalnāhu", meaning: { en: "We have made it", ur: "ہم نے بنایا اسے", ar: "جعلناه" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "نُورًا", transliteration: "nūran", meaning: { en: "a light", ur: "نور", ar: "نورا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-و-ر" } },
      { arabic: "نَّهْدِي", transliteration: "nahdī", meaning: { en: "by which We guide", ur: "ہدایت دیتے ہیں", ar: "نهدي" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ه-د-ي" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "with it", ur: "اس سے", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "جسے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "نَّشَاءُ", transliteration: "nashāʾu", meaning: { en: "We will", ur: "ہم چاہتے ہیں", ar: "نشاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "عِبَادِنَا", transliteration: "ʿibādinā", meaning: { en: "Our servants", ur: "ہمارے بندوں میں", ar: "عبادنا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ب-د" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' }
      ]
    }
  },

  53: {
    ayahNumber: 53,
    text: "صِرَاطِ اللَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ أَلَا إِلَى اللَّهِ تَصِيرُ الْأُمُورُ",
    words: [
      { arabic: "صِرَاطِ", transliteration: "ṣirāṭi", meaning: { en: "The path", ur: "راستے کی طرف", ar: "صراط" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-ر-ط" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "to whom belongs", ur: "جس کا ہے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to Him", ur: "اسی کا ہے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَلَا", transliteration: "alā", meaning: { en: "Unquestionably", ur: "خبردار", ar: "ألا" }, pos: "INCP", posLabel: "INCP", grammar: { type: "inceptive" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "تَصِيرُ", transliteration: "taṣīru", meaning: { en: "will return", ur: "لوٹتے ہیں", ar: "تصير" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ي-ر" } },
      { arabic: "الْأُمُورُ", transliteration: "al-umūru", meaning: { en: "all matters", ur: "سب معاملات", ar: "الأمور" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "أ-م-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ]
    }
  }
};

export default TREEBANK_DATA;
