/**
 * Surah An-Nahl (16) - The Bee
 * Quranic Arabic Treebank Data
 * 128 ayahs - Makki surah
 * Theme: Divine blessings enumeration, signs in nature, justice and kindness
 */

export const TREEBANK_DATA = {
  surahId: 16,
  surahName: "An-Nahl",
  surahNameArabic: "النحل",
  totalAyahs: 128,

  1: {
    ayahNumber: 1,
    text: "أَتَىٰ أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ ۚ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ",
    words: [
      { arabic: "أَتَىٰ", transliteration: "atā", root: "أ ت ي", meaning: { en: "Is coming", ur: "آ گیا", ar: "أتى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "أَمْرُ", transliteration: "amru", root: "أ م ر", meaning: { en: "The command", ur: "حکم", ar: "أمر" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "فَلَا", transliteration: "fa-lā", meaning: { en: "so do not", ur: "تو مت", ar: "فلا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "prohibition" } },
      { arabic: "تَسْتَعْجِلُوهُ", transliteration: "tastaʿjilūhu", root: "ع ج ل", meaning: { en: "hasten it", ur: "جلدی کرو اس میں", ar: "تستعجلوه" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "jussive", form: "X" } },
      { arabic: "سُبْحَانَهُ", transliteration: "subḥānahu", root: "س ب ح", meaning: { en: "Exalted is He", ur: "پاک ہے وہ", ar: "سبحانه" }, pos: "N", posLabel: "N", grammar: { role: "exclamation", case: "accusative" } },
      { arabic: "وَتَعَالَىٰ", transliteration: "wa-taʿālā", root: "ع ل و", meaning: { en: "and high above", ur: "اور بلند ہے", ar: "وتعالى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "VI" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "above what", ur: "اس سے جو", ar: "عما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "يُشْرِكُونَ", transliteration: "yushrikūna", root: "ش ر ك", meaning: { en: "they associate", ur: "شریک کرتے ہیں", ar: "يشركون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "IV" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "يُنَزِّلُ الْمَلَائِكَةَ بِالرُّوحِ مِنْ أَمْرِهِ عَلَىٰ مَن يَشَاءُ مِنْ عِبَادِهِ أَنْ أَنذِرُوا أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاتَّقُونِ",
    words: [
      { arabic: "يُنَزِّلُ", transliteration: "yunazzilu", root: "ن ز ل", meaning: { en: "He sends down", ur: "وہ اتارتا ہے", ar: "ينزل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "II" } },
      { arabic: "الْمَلَائِكَةَ", transliteration: "al-malāʾikata", root: "م ل ك", meaning: { en: "the angels", ur: "فرشتوں کو", ar: "الملائكة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "بِالرُّوحِ", transliteration: "bir-rūḥi", root: "ر و ح", meaning: { en: "with the spirit/revelation", ur: "روح کے ساتھ", ar: "بالروح" }, pos: "N", posLabel: "N", grammar: { role: "instrument", case: "genitive", definite: true } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "by", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَمْرِهِ", transliteration: "amrihi", root: "أ م ر", meaning: { en: "His command", ur: "اس کے حکم", ar: "أمره" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "جس کو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", root: "ش ي أ", meaning: { en: "He wills", ur: "وہ چاہتا ہے", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِبَادِهِ", transliteration: "ʿibādihi", root: "ع ب د", meaning: { en: "His servants", ur: "اپنے بندوں", ar: "عباده" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَنذِرُوا", transliteration: "andhirū", root: "ن ذ ر", meaning: { en: "warn", ur: "ڈراؤ", ar: "أنذروا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "أَنَّهُ", transliteration: "annahu", meaning: { en: "that", ur: "کہ", ar: "أنه" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "no", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "إِلَٰهَ", transliteration: "ilāha", root: "أ ل ه", meaning: { en: "deity", ur: "معبود", ar: "إله" }, pos: "N", posLabel: "N", grammar: { role: "subject_la", case: "accusative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { role: "exception" } },
      { arabic: "أَنَا", transliteration: "anā", meaning: { en: "I", ur: "میں", ar: "أنا" }, pos: "PRON", posLabel: "PRON", grammar: { person: 1, number: "sg" } },
      { arabic: "فَاتَّقُونِ", transliteration: "fa-ttaqūni", root: "و ق ي", meaning: { en: "so fear Me", ur: "تو مجھ سے ڈرو", ar: "فاتقون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "VIII" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۚ تَعَالَىٰ عَمَّا يُشْرِكُونَ",
    words: [
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "He created", ur: "اس نے پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "as-samāwāti", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں کو", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین کو", ar: "والأرض" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", root: "ح ق ق", meaning: { en: "in truth", ur: "حق کے ساتھ", ar: "بالحق" }, pos: "N", posLabel: "N", grammar: { role: "manner", case: "genitive", definite: true } },
      { arabic: "تَعَالَىٰ", transliteration: "taʿālā", root: "ع ل و", meaning: { en: "Exalted is He", ur: "بلند ہے وہ", ar: "تعالى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "VI" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "above what", ur: "اس سے جو", ar: "عما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "يُشْرِكُونَ", transliteration: "yushrikūna", root: "ش ر ك", meaning: { en: "they associate", ur: "شریک کرتے ہیں", ar: "يشركون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "IV" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "خَلَقَ الْإِنسَانَ مِن نُّطْفَةٍ فَإِذَا هُوَ خَصِيمٌ مُّبِينٌ",
    words: [
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "He created", ur: "اس نے پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "الْإِنسَانَ", transliteration: "al-insāna", root: "أ ن س", meaning: { en: "man", ur: "انسان کو", ar: "الإنسان" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نُّطْفَةٍ", transliteration: "nuṭfatin", root: "ن ط ف", meaning: { en: "a sperm-drop", ur: "نطفہ", ar: "نطفة" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", indefinite: true } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "then behold", ur: "پھر اچانک", ar: "فإذا" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "sudden" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "خَصِيمٌ", transliteration: "khaṣīmun", root: "خ ص م", meaning: { en: "an adversary", ur: "جھگڑالو", ar: "خصيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", root: "ب ي ن", meaning: { en: "clear", ur: "کھلا", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "nominative" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "وَالْأَنْعَامَ خَلَقَهَا ۗ لَكُمْ فِيهَا دِفْءٌ وَمَنَافِعُ وَمِنْهَا تَأْكُلُونَ",
    words: [
      { arabic: "وَالْأَنْعَامَ", transliteration: "wal-anʿāma", root: "ن ع م", meaning: { en: "And the livestock", ur: "اور مویشی", ar: "والأنعام" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "خَلَقَهَا", transliteration: "khalaqahā", root: "خ ل ق", meaning: { en: "He created them", ur: "اس نے انہیں پیدا کیا", ar: "خلقها" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "beneficiary" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "in them", ur: "ان میں", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "دِفْءٌ", transliteration: "difʾun", root: "د ف أ", meaning: { en: "warmth", ur: "گرمی", ar: "دفء" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "وَمَنَافِعُ", transliteration: "wa-manāfiʿu", root: "ن ف ع", meaning: { en: "and benefits", ur: "اور فائدے", ar: "ومنافع" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "وَمِنْهَا", transliteration: "wa-minhā", meaning: { en: "and from them", ur: "اور ان میں سے", ar: "ومنها" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تَأْكُلُونَ", transliteration: "taʾkulūna", root: "أ ك ل", meaning: { en: "you eat", ur: "تم کھاتے ہو", ar: "تأكلون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  68: {
    ayahNumber: 68,
    text: "وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ",
    words: [
      { arabic: "وَأَوْحَىٰ", transliteration: "wa-awḥā", root: "و ح ي", meaning: { en: "And inspired", ur: "اور وحی کی", ar: "وأوحى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرے رب نے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "النَّحْلِ", transliteration: "an-naḥli", root: "ن ح ل", meaning: { en: "the bee", ur: "شہد کی مکھی", ar: "النحل" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "أَنِ", transliteration: "ani", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "اتَّخِذِي", transliteration: "ittakhidhī", root: "أ خ ذ", meaning: { en: "take/make", ur: "بنا لے", ar: "اتخذي" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "f", number: "sg", mood: "imperative", form: "VIII" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْجِبَالِ", transliteration: "al-jibāli", root: "ج ب ل", meaning: { en: "the mountains", ur: "پہاڑوں", ar: "الجبال" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "بُيُوتًا", transliteration: "buyūtan", root: "ب ي ت", meaning: { en: "homes", ur: "گھر", ar: "بيوتاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", indefinite: true } },
      { arabic: "وَمِنَ", transliteration: "wa-mina", meaning: { en: "and from", ur: "اور سے", ar: "ومن" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "preposition" } },
      { arabic: "الشَّجَرِ", transliteration: "ash-shajari", root: "ش ج ر", meaning: { en: "the trees", ur: "درختوں", ar: "الشجر" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَمِمَّا", transliteration: "wa-mimmā", meaning: { en: "and from what", ur: "اور جو کچھ", ar: "ومما" }, pos: "CONJ+PREP+REL", posLabel: "CONJ+PREP+REL", grammar: { role: "preposition" } },
      { arabic: "يَعْرِشُونَ", transliteration: "yaʿrishūna", root: "ع ر ش", meaning: { en: "they construct", ur: "وہ بناتے ہیں", ar: "يعرشون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  69: {
    ayahNumber: 69,
    text: "ثُمَّ كُلِي مِن كُلِّ الثَّمَرَاتِ فَاسْلُكِي سُبُلَ رَبِّكِ ذُلُلًا ۚ يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِّلنَّاسِ ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِّقَوْمٍ يَتَفَكَّرُونَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "كُلِي", transliteration: "kulī", root: "أ ك ل", meaning: { en: "eat", ur: "کھا", ar: "كلي" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "f", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "all", ur: "سب", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "الثَّمَرَاتِ", transliteration: "ath-thamarāti", root: "ث م ر", meaning: { en: "the fruits", ur: "پھلوں", ar: "الثمرات" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "فَاسْلُكِي", transliteration: "fa-slukī", root: "س ل ك", meaning: { en: "then follow", ur: "پھر چل", ar: "فاسلكي" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "f", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "سُبُلَ", transliteration: "subula", root: "س ب ل", meaning: { en: "the paths", ur: "راستے", ar: "سبل" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "رَبِّكِ", transliteration: "rabbiki", root: "ر ب ب", meaning: { en: "of your Lord", ur: "اپنے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "ذُلُلًا", transliteration: "dhululan", root: "ذ ل ل", meaning: { en: "made easy", ur: "آسان کیے ہوئے", ar: "ذللاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "hal", case: "accusative" } },
      { arabic: "يَخْرُجُ", transliteration: "yakhruju", root: "خ ر ج", meaning: { en: "emerges", ur: "نکلتا ہے", ar: "يخرج" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بُطُونِهَا", transliteration: "buṭūnihā", root: "ب ط ن", meaning: { en: "their bellies", ur: "ان کے پیٹوں", ar: "بطونها" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "شَرَابٌ", transliteration: "sharābun", root: "ش ر ب", meaning: { en: "a drink", ur: "پینے کی چیز", ar: "شراب" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مُّخْتَلِفٌ", transliteration: "mukhtalifun", root: "خ ل ف", meaning: { en: "varying", ur: "مختلف", ar: "مختلف" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "nominative" } },
      { arabic: "أَلْوَانُهُ", transliteration: "alwānuhu", root: "ل و ن", meaning: { en: "its colors", ur: "اس کے رنگ", ar: "ألوانه" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "اس میں", ar: "فيه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "شِفَاءٌ", transliteration: "shifāʾun", root: "ش ف ي", meaning: { en: "healing", ur: "شفا", ar: "شفاء" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "لِّلنَّاسِ", transliteration: "lin-nāsi", root: "ن و س", meaning: { en: "for people", ur: "لوگوں کے لیے", ar: "للناس" }, pos: "N", posLabel: "N", grammar: { role: "beneficiary", case: "genitive", definite: true } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس میں", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "object_preposition" } },
      { arabic: "لَآيَةً", transliteration: "la-āyatan", root: "أ ي ي", meaning: { en: "surely a sign", ur: "یقیناً نشانی ہے", ar: "لآية" }, pos: "N", posLabel: "N", grammar: { role: "predicate_inna", case: "accusative" } },
      { arabic: "لِّقَوْمٍ", transliteration: "li-qawmin", root: "ق و م", meaning: { en: "for people", ur: "لوگوں کے لیے", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "beneficiary", case: "genitive" } },
      { arabic: "يَتَفَكَّرُونَ", transliteration: "yatafakkarūna", root: "ف ك ر", meaning: { en: "who reflect", ur: "جو غور کرتے ہیں", ar: "يتفكرون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "V" } }
    ]
  },

  78: {
    ayahNumber: 78,
    text: "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۙ لَعَلَّكُمْ تَشْكُرُونَ",
    words: [
      { arabic: "وَاللَّهُ", transliteration: "wa-Allāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "أَخْرَجَكُم", transliteration: "akhrajakum", root: "خ ر ج", meaning: { en: "brought you out", ur: "تمہیں نکالا", ar: "أخرجكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بُطُونِ", transliteration: "buṭūni", root: "ب ط ن", meaning: { en: "wombs", ur: "پیٹوں", ar: "بطون" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "أُمَّهَاتِكُمْ", transliteration: "ummahātikum", root: "أ م م", meaning: { en: "your mothers", ur: "تمہاری ماؤں کے", ar: "أمهاتكم" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "you knew", ur: "تم جانتے تھے", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "anything", ur: "کچھ بھی", ar: "شيئاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَجَعَلَ", transliteration: "wa-jaʿala", root: "ج ع ل", meaning: { en: "and made", ur: "اور بنایا", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "beneficiary" } },
      { arabic: "السَّمْعَ", transliteration: "as-samʿa", root: "س م ع", meaning: { en: "hearing", ur: "سننا", ar: "السمع" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَالْأَبْصَارَ", transliteration: "wal-abṣāra", root: "ب ص ر", meaning: { en: "and sight", ur: "اور بصارت", ar: "والأبصار" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَالْأَفْئِدَةَ", transliteration: "wal-afʾidata", root: "ف أ د", meaning: { en: "and hearts", ur: "اور دل", ar: "والأفئدة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that perhaps you", ur: "تاکہ تم", ar: "لعلكم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "purpose" } },
      { arabic: "تَشْكُرُونَ", transliteration: "tashkurūna", root: "ش ك ر", meaning: { en: "will be grateful", ur: "شکر کرو", ar: "تشكرون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  90: {
    ayahNumber: 90,
    text: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَالْبَغْيِ ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "يَأْمُرُ", transliteration: "yaʾmuru", root: "أ م ر", meaning: { en: "commands", ur: "حکم دیتا ہے", ar: "يأمر" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "بِالْعَدْلِ", transliteration: "bil-ʿadli", root: "ع د ل", meaning: { en: "justice", ur: "انصاف کا", ar: "بالعدل" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَالْإِحْسَانِ", transliteration: "wal-iḥsāni", root: "ح س ن", meaning: { en: "and excellence", ur: "اور احسان کا", ar: "والإحسان" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَإِيتَاءِ", transliteration: "wa-ītāʾi", root: "أ ت ي", meaning: { en: "and giving", ur: "اور دینے کا", ar: "وإيتاء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "ذِي", transliteration: "dhī", meaning: { en: "to possessors of", ur: "والے کو", ar: "ذي" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "الْقُرْبَىٰ", transliteration: "al-qurbā", root: "ق ر ب", meaning: { en: "kinship", ur: "قرابت", ar: "القربى" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "وَيَنْهَىٰ", transliteration: "wa-yanhā", root: "ن ه ي", meaning: { en: "and forbids", ur: "اور روکتا ہے", ar: "وينهى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْفَحْشَاءِ", transliteration: "al-faḥshāʾi", root: "ف ح ش", meaning: { en: "immorality", ur: "بے حیائی", ar: "الفحشاء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَالْمُنكَرِ", transliteration: "wal-munkari", root: "ن ك ر", meaning: { en: "and wrongdoing", ur: "اور برائی", ar: "والمنكر" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "وَالْبَغْيِ", transliteration: "wal-baghyi", root: "ب غ ي", meaning: { en: "and oppression", ur: "اور ظلم", ar: "والبغي" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "يَعِظُكُمْ", transliteration: "yaʿiẓukum", root: "و ع ظ", meaning: { en: "He admonishes you", ur: "تمہیں نصیحت کرتا ہے", ar: "يعظكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that you may", ur: "تاکہ تم", ar: "لعلكم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "purpose" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", root: "ذ ك ر", meaning: { en: "remember", ur: "یاد کرو", ar: "تذكرون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "V" } }
    ]
  },

  120: {
    ayahNumber: 120,
    text: "إِنَّ إِبْرَاهِيمَ كَانَ أُمَّةً قَانِتًا لِّلَّهِ حَنِيفًا وَلَمْ يَكُ مِنَ الْمُشْرِكِينَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "إِبْرَاهِيمَ", transliteration: "Ibrāhīma", meaning: { en: "Ibrahim", ur: "ابراہیم", ar: "إبراهيم" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect" } },
      { arabic: "أُمَّةً", transliteration: "ummatan", root: "أ م م", meaning: { en: "a nation", ur: "ایک امت", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" } },
      { arabic: "قَانِتًا", transliteration: "qānitan", root: "ق ن ت", meaning: { en: "devoutly obedient", ur: "اطاعت گزار", ar: "قانتاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "لِّلَّهِ", transliteration: "lillāhi", meaning: { en: "to Allah", ur: "اللہ کا", ar: "لله" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "حَنِيفًا", transliteration: "ḥanīfan", root: "ح ن ف", meaning: { en: "inclining to truth", ur: "حق پر قائم", ar: "حنيفاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "وَلَمْ", transliteration: "wa-lam", meaning: { en: "and was not", ur: "اور نہیں تھا", ar: "ولم" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "negation" } },
      { arabic: "يَكُ", transliteration: "yaku", root: "ك و ن", meaning: { en: "he was", ur: "وہ تھا", ar: "يك" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْمُشْرِكِينَ", transliteration: "al-mushrikīna", root: "ش ر ك", meaning: { en: "the polytheists", ur: "مشرکوں", ar: "المشركين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } }
    ]
  },

  125: {
    ayahNumber: 125,
    text: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ ۚ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ ۖ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
    words: [
      { arabic: "ادْعُ", transliteration: "udʿu", root: "د ع و", meaning: { en: "Invite", ur: "بلاؤ", ar: "ادع" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", root: "س ب ل", meaning: { en: "the way", ur: "راستے", ar: "سبيل" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "of your Lord", ur: "اپنے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "بِالْحِكْمَةِ", transliteration: "bil-ḥikmati", root: "ح ك م", meaning: { en: "with wisdom", ur: "حکمت کے ساتھ", ar: "بالحكمة" }, pos: "N", posLabel: "N", grammar: { role: "manner", case: "genitive", definite: true } },
      { arabic: "وَالْمَوْعِظَةِ", transliteration: "wal-mawʿiẓati", root: "و ع ظ", meaning: { en: "and good instruction", ur: "اور اچھی نصیحت", ar: "والموعظة" }, pos: "N", posLabel: "N", grammar: { role: "manner", case: "genitive", definite: true } },
      { arabic: "الْحَسَنَةِ", transliteration: "al-ḥasanati", root: "ح س ن", meaning: { en: "the good", ur: "بھلی", ar: "الحسنة" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive", definite: true } },
      { arabic: "وَجَادِلْهُم", transliteration: "wa-jādilhum", root: "ج د ل", meaning: { en: "and argue with them", ur: "اور ان سے بحث کرو", ar: "وجادلهم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "III" } },
      { arabic: "بِالَّتِي", transliteration: "billatī", meaning: { en: "in that which", ur: "اس طریقے سے جو", ar: "بالتي" }, pos: "REL", posLabel: "REL", grammar: { role: "manner" } },
      { arabic: "هِيَ", transliteration: "hiya", meaning: { en: "it is", ur: "وہ ہے", ar: "هي" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "f" } },
      { arabic: "أَحْسَنُ", transliteration: "aḥsanu", root: "ح س ن", meaning: { en: "best", ur: "بہترین", ar: "أحسن" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", degree: "superlative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "emphasis" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", root: "ع ل م", meaning: { en: "most knowing", ur: "زیادہ جاننے والا ہے", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate_inna", degree: "superlative" } },
      { arabic: "بِمَن", transliteration: "bi-man", meaning: { en: "of who", ur: "اس کا جو", ar: "بمن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "ضَلَّ", transliteration: "ḍalla", root: "ض ل ل", meaning: { en: "strayed", ur: "بھٹکا", ar: "ضل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِهِ", transliteration: "sabīlihi", root: "س ب ل", meaning: { en: "His path", ur: "اس کے راستے", ar: "سبيله" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", root: "ع ل م", meaning: { en: "most knowing", ur: "زیادہ جاننے والا ہے", ar: "أعلم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", degree: "superlative" } },
      { arabic: "بِالْمُهْتَدِينَ", transliteration: "bil-muhtadīna", root: "ه د ي", meaning: { en: "of the guided", ur: "ہدایت پانے والوں کا", ar: "بالمهتدين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } }
    ]
  },

  127: {
    ayahNumber: 127,
    text: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ ۚ وَلَا تَحْزَنْ عَلَيْهِمْ وَلَا تَكُ فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ",
    words: [
      { arabic: "وَاصْبِرْ", transliteration: "wa-ṣbir", root: "ص ب ر", meaning: { en: "And be patient", ur: "اور صبر کرو", ar: "واصبر" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and not", ur: "اور نہیں ہے", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "negation" } },
      { arabic: "صَبْرُكَ", transliteration: "ṣabruka", root: "ص ب ر", meaning: { en: "your patience", ur: "تمہارا صبر", ar: "صبرك" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { role: "exception" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "through Allah", ur: "اللہ کی مدد سے", ar: "بالله" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "prohibition" } },
      { arabic: "تَحْزَنْ", transliteration: "taḥzan", root: "ح ز ن", meaning: { en: "grieve", ur: "غم کرو", ar: "تحزن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "jussive", form: "I" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "ان پر", ar: "عليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "prohibition" } },
      { arabic: "تَكُ", transliteration: "taku", root: "ك و ن", meaning: { en: "be", ur: "رہو", ar: "تك" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "jussive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَيْقٍ", transliteration: "ḍayqin", root: "ض ي ق", meaning: { en: "distress", ur: "تنگی", ar: "ضيق" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from what", ur: "اس سے جو", ar: "مما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "يَمْكُرُونَ", transliteration: "yamkurūna", root: "م ك ر", meaning: { en: "they plot", ur: "وہ مکر کرتے ہیں", ar: "يمكرون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  128: {
    ayahNumber: 128,
    text: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "مَعَ", transliteration: "maʿa", meaning: { en: "is with", ur: "ساتھ ہے", ar: "مع" }, pos: "PREP", posLabel: "PREP", grammar: { role: "predicate_inna" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "object_preposition" } },
      { arabic: "اتَّقَوا", transliteration: "ittaqaw", root: "و ق ي", meaning: { en: "fear Allah", ur: "تقویٰ اختیار کرتے ہیں", ar: "اتقوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "VIII" } },
      { arabic: "وَّالَّذِينَ", transliteration: "walladhīna", meaning: { en: "and those who", ur: "اور جو لوگ", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conjunction" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m", number: "pl" } },
      { arabic: "مُّحْسِنُونَ", transliteration: "muḥsinūna", root: "ح س ن", meaning: { en: "doers of good", ur: "نیکو کار ہیں", ar: "محسنون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } }
    ]
  },

  // Additional key verses with treebank data

  10: {
    ayahNumber: 10,
    text: "هُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً ۖ لَّكُم مِّنْهُ شَرَابٌ وَمِنْهُ شَجَرٌ فِيهِ تُسِيمُونَ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "predicate" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", root: "ن ز ل", meaning: { en: "sent down", ur: "اتارا", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السَّمَاءِ", transliteration: "as-samāʾi", root: "س م و", meaning: { en: "the sky", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "مَاءً", transliteration: "māʾan", meaning: { en: "water", ur: "پانی", ar: "ماء" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "لَّكُم", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "beneficiary" } },
      { arabic: "مِّنْهُ", transliteration: "minhu", meaning: { en: "from it", ur: "اس میں سے", ar: "منه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "شَرَابٌ", transliteration: "sharābun", root: "ش ر ب", meaning: { en: "drink", ur: "پینے کو", ar: "شراب" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "وَمِنْهُ", transliteration: "wa-minhu", meaning: { en: "and from it", ur: "اور اس سے", ar: "ومنه" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "شَجَرٌ", transliteration: "shajarun", root: "ش ج ر", meaning: { en: "vegetation", ur: "درخت", ar: "شجر" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in which", ur: "اس میں", ar: "فيه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تُسِيمُونَ", transliteration: "tusīmūna", root: "س و م", meaning: { en: "you pasture", ur: "تم چراتے ہو", ar: "تسيمون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "IV" } }
    ]
  },

  14: {
    ayahNumber: 14,
    text: "وَهُوَ الَّذِي سَخَّرَ الْبَحْرَ لِتَأْكُلُوا مِنْهُ لَحْمًا طَرِيًّا وَتَسْتَخْرِجُوا مِنْهُ حِلْيَةً تَلْبَسُونَهَا وَتَرَى الْفُلْكَ مَوَاخِرَ فِيهِ وَلِتَبْتَغُوا مِن فَضْلِهِ وَلَعَلَّكُمْ تَشْكُرُونَ",
    words: [
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "And He is", ur: "اور وہ ہے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "predicate" } },
      { arabic: "سَخَّرَ", transliteration: "sakhkhara", root: "س خ ر", meaning: { en: "subjected", ur: "مسخر کیا", ar: "سخر" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "الْبَحْرَ", transliteration: "al-baḥra", root: "ب ح ر", meaning: { en: "the sea", ur: "سمندر کو", ar: "البحر" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "لِتَأْكُلُوا", transliteration: "li-taʾkulū", root: "أ ك ل", meaning: { en: "that you may eat", ur: "تاکہ تم کھاؤ", ar: "لتأكلوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "subjunctive", form: "I" } },
      { arabic: "مِنْهُ", transliteration: "minhu", meaning: { en: "from it", ur: "اس میں سے", ar: "منه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "لَحْمًا", transliteration: "laḥman", root: "ل ح م", meaning: { en: "meat", ur: "گوشت", ar: "لحماً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "طَرِيًّا", transliteration: "ṭariyyan", root: "ط ر و", meaning: { en: "fresh", ur: "تازہ", ar: "طرياً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "وَتَسْتَخْرِجُوا", transliteration: "wa-tastakhrijū", root: "خ ر ج", meaning: { en: "and extract", ur: "اور نکالو", ar: "وتستخرجوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "subjunctive", form: "X" } },
      { arabic: "مِنْهُ", transliteration: "minhu", meaning: { en: "from it", ur: "اس میں سے", ar: "منه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "حِلْيَةً", transliteration: "ḥilyatan", root: "ح ل ي", meaning: { en: "ornament", ur: "زیور", ar: "حلية" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "تَلْبَسُونَهَا", transliteration: "talbasūnahā", root: "ل ب س", meaning: { en: "you wear", ur: "تم پہنتے ہو", ar: "تلبسونها" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "وَتَرَى", transliteration: "wa-tarā", root: "ر أ ي", meaning: { en: "and you see", ur: "اور تم دیکھتے ہو", ar: "وترى" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "الْفُلْكَ", transliteration: "al-fulka", root: "ف ل ك", meaning: { en: "the ships", ur: "کشتیاں", ar: "الفلك" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "مَوَاخِرَ", transliteration: "mawākhira", root: "م خ ر", meaning: { en: "plowing through", ur: "چیرتی ہوئی", ar: "مواخر" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "اس میں", ar: "فيه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَلِتَبْتَغُوا", transliteration: "wa-li-tabtaghū", root: "ب غ ي", meaning: { en: "and that you may seek", ur: "اور تاکہ تم تلاش کرو", ar: "ولتبتغوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "subjunctive", form: "VIII" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَضْلِهِ", transliteration: "faḍlihi", root: "ف ض ل", meaning: { en: "His bounty", ur: "اس کے فضل", ar: "فضله" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَلَعَلَّكُمْ", transliteration: "wa-laʿallakum", meaning: { en: "and that you may", ur: "اور تاکہ تم", ar: "ولعلكم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "purpose" } },
      { arabic: "تَشْكُرُونَ", transliteration: "tashkurūna", root: "ش ك ر", meaning: { en: "be grateful", ur: "شکر کرو", ar: "تشكرون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  17: {
    ayahNumber: 17,
    text: "أَفَمَن يَخْلُقُ كَمَن لَّا يَخْلُقُ ۗ أَفَلَا تَذَكَّرُونَ",
    words: [
      { arabic: "أَفَمَن", transliteration: "a-fa-man", meaning: { en: "Is then He who creates", ur: "کیا جو پیدا کرتا ہے", ar: "أفمن" }, pos: "INTERROG+CONJ+REL", posLabel: "INTERROG+CONJ+REL", grammar: { role: "subject" } },
      { arabic: "يَخْلُقُ", transliteration: "yakhluqu", root: "خ ل ق", meaning: { en: "creates", ur: "پیدا کرتا ہے", ar: "يخلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "كَمَن", transliteration: "ka-man", meaning: { en: "like who", ur: "اس کی طرح جو", ar: "كمن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "comparison" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "does not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَخْلُقُ", transliteration: "yakhluqu", root: "خ ل ق", meaning: { en: "create", ur: "پیدا کرتا", ar: "يخلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "أَفَلَا", transliteration: "a-fa-lā", meaning: { en: "Will you not then", ur: "کیا تم نہیں", ar: "أفلا" }, pos: "INTERROG+CONJ+NEG", posLabel: "INTERROG+CONJ+NEG", grammar: { role: "rhetorical" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", root: "ذ ك ر", meaning: { en: "remember", ur: "یاد کرتے", ar: "تذكرون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "V" } }
    ]
  },

  66: {
    ayahNumber: 66,
    text: "وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ نُّسْقِيكُم مِّمَّا فِي بُطُونِهِ مِن بَيْنِ فَرْثٍ وَدَمٍ لَّبَنًا خَالِصًا سَائِغًا لِّلشَّارِبِينَ",
    words: [
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بے شک", ar: "وإن" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { role: "emphasis" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَنْعَامِ", transliteration: "al-anʿāmi", root: "ن ع م", meaning: { en: "the livestock", ur: "مویشیوں", ar: "الأنعام" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "لَعِبْرَةً", transliteration: "la-ʿibratan", root: "ع ب ر", meaning: { en: "surely a lesson", ur: "یقیناً نشانی", ar: "لعبرة" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "نُّسْقِيكُم", transliteration: "nusqīkum", root: "س ق ي", meaning: { en: "We give you to drink", ur: "ہم تمہیں پلاتے ہیں", ar: "نسقيكم" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", mood: "indicative", form: "IV" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from what", ur: "جو کچھ", ar: "مما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بُطُونِهِ", transliteration: "buṭūnihi", root: "ب ط ن", meaning: { en: "its bellies", ur: "ان کے پیٹوں", ar: "بطونه" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَيْنِ", transliteration: "bayni", meaning: { en: "between", ur: "درمیان", ar: "بين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "فَرْثٍ", transliteration: "farthin", root: "ف ر ث", meaning: { en: "digested food", ur: "گوبر", ar: "فرث" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَدَمٍ", transliteration: "wa-damin", root: "د م م", meaning: { en: "and blood", ur: "اور خون", ar: "ودم" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "لَّبَنًا", transliteration: "labanan", root: "ل ب ن", meaning: { en: "milk", ur: "دودھ", ar: "لبناً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "خَالِصًا", transliteration: "khāliṣan", root: "خ ل ص", meaning: { en: "pure", ur: "خالص", ar: "خالصاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "سَائِغًا", transliteration: "sāʾighan", root: "س و غ", meaning: { en: "palatable", ur: "خوشگوار", ar: "سائغاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "لِّلشَّارِبِينَ", transliteration: "lish-shāribīna", root: "ش ر ب", meaning: { en: "for the drinkers", ur: "پینے والوں کے لیے", ar: "للشاربين" }, pos: "N", posLabel: "N", grammar: { role: "beneficiary", case: "genitive", definite: true } }
    ]
  },

  91: {
    ayahNumber: 91,
    text: "وَأَوْفُوا بِعَهْدِ اللَّهِ إِذَا عَاهَدتُّمْ وَلَا تَنقُضُوا الْأَيْمَانَ بَعْدَ تَوْكِيدِهَا وَقَدْ جَعَلْتُمُ اللَّهَ عَلَيْكُمْ كَفِيلًا ۚ إِنَّ اللَّهَ يَعْلَمُ مَا تَفْعَلُونَ",
    words: [
      { arabic: "وَأَوْفُوا", transliteration: "wa-awfū", root: "و ف ي", meaning: { en: "And fulfill", ur: "اور پورا کرو", ar: "وأوفوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "بِعَهْدِ", transliteration: "bi-ʿahdi", root: "ع ه د", meaning: { en: "the covenant", ur: "عہد کو", ar: "بعهد" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "عَاهَدتُّمْ", transliteration: "ʿāhadtum", root: "ع ه د", meaning: { en: "you make covenant", ur: "تم عہد کرو", ar: "عاهدتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "III" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and do not", ur: "اور مت", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "prohibition" } },
      { arabic: "تَنقُضُوا", transliteration: "tanquḍū", root: "ن ق ض", meaning: { en: "break", ur: "توڑو", ar: "تنقضوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "jussive", form: "I" } },
      { arabic: "الْأَيْمَانَ", transliteration: "al-aymāna", root: "ي م ن", meaning: { en: "oaths", ur: "قسموں کو", ar: "الأيمان" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "temporal", case: "accusative" } },
      { arabic: "تَوْكِيدِهَا", transliteration: "tawkīdihā", root: "و ك د", meaning: { en: "confirming them", ur: "ان کو پکا کرنے کے", ar: "توكيدها" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَقَدْ", transliteration: "wa-qad", meaning: { en: "and indeed", ur: "حالانکہ", ar: "وقد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammar: { role: "emphasis" } },
      { arabic: "جَعَلْتُمُ", transliteration: "jaʿaltumu", root: "ج ع ل", meaning: { en: "you have made", ur: "تم نے بنایا", ar: "جعلتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کو", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "over you", ur: "اپنے اوپر", ar: "عليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "كَفِيلًا", transliteration: "kafīlan", root: "ك ف ل", meaning: { en: "a guarantor", ur: "ضامن", ar: "كفيلاً" }, pos: "N", posLabel: "N", grammar: { role: "object_complement", case: "accusative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "knows", ur: "جانتا ہے", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَفْعَلُونَ", transliteration: "tafʿalūna", root: "ف ع ل", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تفعلون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  121: {
    ayahNumber: 121,
    text: "شَاكِرًا لِّأَنْعُمِهِ ۚ اجْتَبَاهُ وَهَدَاهُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
    words: [
      { arabic: "شَاكِرًا", transliteration: "shākiran", root: "ش ك ر", meaning: { en: "Grateful", ur: "شکر گزار", ar: "شاكراً" }, pos: "N", posLabel: "N", grammar: { role: "hal", case: "accusative" }, features: { participle: "active" } },
      { arabic: "لِّأَنْعُمِهِ", transliteration: "li-anʿumihi", root: "ن ع م", meaning: { en: "for His favors", ur: "اس کی نعمتوں پر", ar: "لأنعمه" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "اجْتَبَاهُ", transliteration: "ijtabāhu", root: "ج ب ي", meaning: { en: "He chose him", ur: "اس نے چن لیا اسے", ar: "اجتباه" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "VIII" } },
      { arabic: "وَهَدَاهُ", transliteration: "wa-hadāhu", root: "ه د ي", meaning: { en: "and guided him", ur: "اور ہدایت دی اسے", ar: "وهداه" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صِرَاطٍ", transliteration: "ṣirāṭin", root: "ص ر ط", meaning: { en: "a path", ur: "راستے", ar: "صراط" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "مُّسْتَقِيمٍ", transliteration: "mustaqīmin", root: "ق و م", meaning: { en: "straight", ur: "سیدھے", ar: "مستقيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "genitive" } }
    ]
  }
};

export default TREEBANK_DATA;
