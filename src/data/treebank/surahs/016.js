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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 4, to: 5, label: 'فعل + فاعل' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 4, to: 5, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'موصول + صلة' }, { from: 9, to: 10, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 3, to: 4, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 3, to: 4, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 6, to: 7, label: 'فعل + فاعل' }, { from: 8, to: 9, label: 'موصوف + صفت' }, { from: 11, to: 12, label: 'جار + مجرور' }, { from: 13, to: 14, label: 'موصوف + صفت' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 6, to: 7, label: 'نفی + فعل' }, { from: 7, to: 8, label: 'فعل + فاعل' }, { from: 9, to: 10, label: 'فعل + فاعل' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'فعل + فاعل' }, { from: 10, to: 11, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'فعل + فاعل' }, { from: 4, to: 5, label: 'موصوف + صفت' }, { from: 8, to: 9, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 6, to: 7, label: 'موصوف + صفت' }, { from: 17, to: 18, label: 'جار + مجرور' }, { from: 18, to: 19, label: 'موصوف + صفت' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 6, to: 7, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 4, to: 5, label: 'موصول + صلة' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'موصول + صلة' }, { from: 4, to: 5, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'موصول + صلة' }, { from: 2, to: 3, label: 'فعل + فاعل' }, { from: 4, to: 5, label: 'فعل + فاعل' }, { from: 5, to: 6, label: 'موصوف + صفت' }, { from: 7, to: 8, label: 'فعل + فاعل' }, { from: 10, to: 11, label: 'فعل + فاعل' }, { from: 14, to: 15, label: 'جار + مجرور' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'نفی + فعل' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 5, to: 6, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'جار + مجرور' }, { from: 11, to: 12, label: 'موصوف + صفت' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 6, to: 7, label: 'فعل + فاعل' }, { from: 10, to: 11, label: 'فعل + فاعل' }, { from: 16, to: 17, label: 'موصول + صلة' }],
    },
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
    ],
    structure: {
      relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }, { from: 6, to: 7, label: 'موصوف + صفت' }],
    },
  },
  6: {
    ayahNumber: 6,
    text: "وَلَكُمْ فِيهَا جَمَالٌ حِينَ تُرِيحُونَ وَحِينَ تَسْرَحُونَ",
    words: [
      { arabic: "وَلَكُمْ", transliteration: "walakum", meaning: { en: "And for you", ur: "اور کے لیے تم", ar: "ولكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "in them", ur: "میں انہیں", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "جَمَالٌ", transliteration: "jamālun", meaning: { en: "(is) beauty", ur: "ہے beauty", ar: "جمال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حِينَ", transliteration: "ḥīna", meaning: { en: "when", ur: "when", ar: "حين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُرِيحُونَ", transliteration: "turīḥūna", meaning: { en: "you bring them in", ur: "تم bring انہیں میں", ar: "تريحون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَحِينَ", transliteration: "waḥīna", meaning: { en: "and when", ur: "اور when", ar: "وحين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَسْرَحُونَ", transliteration: "tasraḥūna", meaning: { en: "you take them out", ur: "تم take انہیں out", ar: "تسرحون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'فعل + فاعل' }
        ],
    }
  },
  7: {
    ayahNumber: 7,
    text: "وَتَحْمِلُ أَثْقَالَكُمْ إِلَىٰ بَلَدٍۢ لَّمْ تَكُونُوا۟ بَـٰلِغِيهِ إِلَّا بِشِقِّ ٱلْأَنفُسِ ۚ إِنَّ رَبَّكُمْ لَرَءُوفٌۭ رَّحِيمٌۭ",
    words: [
      { arabic: "وَتَحْمِلُ", transliteration: "wataḥmilu", meaning: { en: "And they carry", ur: "اور وہ لوگ carry", ar: "وتحمل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَثْقَالَكُمْ", transliteration: "athqālakum", root: "ق و ل", meaning: { en: "your loads", ur: "تمہارا loads", ar: "أثقالكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَلَدٍۢ", transliteration: "baladin", meaning: { en: "a land", ur: "a سرزمین", ar: "بلد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَكُونُوا۟", transliteration: "takūnū", meaning: { en: "you could", ur: "تم could", ar: "تكونوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَـٰلِغِيهِ", transliteration: "bālighīhi", meaning: { en: "reach it", ur: "reach یہ", ar: "بلغيه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِشِقِّ", transliteration: "bishiqqi", meaning: { en: "with great trouble", ur: "کے ساتھ بڑا trouble", ar: "بشق" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَنفُسِ ۚ", transliteration: "l-anfusi", root: "ن ف س", meaning: { en: "(to) yourselves", ur: "طرف yourselves", ar: "لأنفس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكُمْ", transliteration: "rabbakum", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَرَءُوفٌۭ", transliteration: "laraūfun", meaning: { en: "surely is Most Kind", ur: "یقیناً ہے Most Kind", ar: "لرءوف" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "Most Merciful", ur: "نہایت مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'موصوف + صفت' }
        ],
    }
  },
  8: {
    ayahNumber: 8,
    text: "وَٱلْخَيْلَ وَٱلْبِغَالَ وَٱلْحَمِيرَ لِتَرْكَبُوهَا وَزِينَةًۭ ۚ وَيَخْلُقُ مَا لَا تَعْلَمُونَ",
    words: [
      { arabic: "وَٱلْخَيْلَ", transliteration: "wal-khayla", meaning: { en: "And horses", ur: "اور horses", ar: "ولخيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْبِغَالَ", transliteration: "wal-bighāla", meaning: { en: "and mules", ur: "اور mules", ar: "ولبغال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْحَمِيرَ", transliteration: "wal-ḥamīra", meaning: { en: "and donkeys", ur: "اور donkeys", ar: "ولحمير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتَرْكَبُوهَا", transliteration: "litarkabūhā", meaning: { en: "for you to ride them", ur: "کے لیے تم طرف ride انہیں", ar: "لتركبوها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَزِينَةًۭ ۚ", transliteration: "wazīnatan", meaning: { en: "and (as) adornment", ur: "اور as adornment", ar: "وزينة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَخْلُقُ", transliteration: "wayakhluqu", root: "خ ل ق", meaning: { en: "And He creates", ur: "اور وہ پیدا کرتا ہے", ar: "ويخلق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "you know", ur: "تم جانتے ہو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'نفی + فعل' }
        ],
    }
  },
  9: {
    ayahNumber: 9,
    text: "وَعَلَى ٱللَّهِ قَصْدُ ٱلسَّبِيلِ وَمِنْهَا جَآئِرٌۭ ۚ وَلَوْ شَآءَ لَهَدَىٰكُمْ أَجْمَعِينَ",
    words: [
      { arabic: "وَعَلَى", transliteration: "waʿalā", meaning: { en: "And upon", ur: "اور upon", ar: "وعلى" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَصْدُ", transliteration: "qaṣdu", meaning: { en: "(is) the direction", ur: "ہے the direction", ar: "قصد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّبِيلِ", transliteration: "l-sabīli", meaning: { en: "(of) the way", ur: "of the راستہ", ar: "لسبيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِنْهَا", transliteration: "wamin'hā", meaning: { en: "and among them", ur: "اور among انہیں", ar: "ومنها" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "جَآئِرٌۭ ۚ", transliteration: "jāirun", meaning: { en: "(are) crooked", ur: "ہیں crooked", ar: "جائر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if", ar: "ولو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَآءَ", transliteration: "shāa", meaning: { en: "He willed", ur: "وہ willed", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهَدَىٰكُمْ", transliteration: "lahadākum", meaning: { en: "surely He would have guided you", ur: "یقیناً وہ would have guided تم", ar: "لهدىكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", meaning: { en: "all", ur: "all", ar: "أجمعين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 8, to: 9, label: 'فعل + فاعل' }
        ],
    }
  },
  11: {
    ayahNumber: 11,
    text: "يُنۢبِتُ لَكُم بِهِ ٱلزَّرْعَ وَٱلزَّيْتُونَ وَٱلنَّخِيلَ وَٱلْأَعْنَـٰبَ وَمِن كُلِّ ٱلثَّمَرَٰتِ ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ لِّقَوْمٍۢ يَتَفَكَّرُونَ",
    words: [
      { arabic: "يُنۢبِتُ", transliteration: "yunbitu", meaning: { en: "He causes to grow", ur: "وہ causes طرف grow", ar: "ينبت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "with it", ur: "کے ساتھ یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلزَّرْعَ", transliteration: "l-zarʿa", meaning: { en: "the crops", ur: "the crops", ar: "لزرع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلزَّيْتُونَ", transliteration: "wal-zaytūna", meaning: { en: "and the olives", ur: "اور the olives", ar: "ولزيتون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلنَّخِيلَ", transliteration: "wal-nakhīla", meaning: { en: "and the date-palms", ur: "اور the date-palms", ar: "ولنخيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَعْنَـٰبَ", transliteration: "wal-aʿnāba", meaning: { en: "and the grapes", ur: "اور the grapes", ar: "ولأعنب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِن", transliteration: "wamin", meaning: { en: "and of", ur: "اور of", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every kind", ur: "every kind", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلثَّمَرَٰتِ ۗ", transliteration: "l-thamarāti", meaning: { en: "(of) fruits", ur: "پھل", ar: "لثمرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَةًۭ", transliteration: "laāyatan", meaning: { en: "surely (is) a sign", ur: "یقیناً ہے a نشانی", ar: "لاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", root: "ق و م", meaning: { en: "for a people", ur: "کے لیے a لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَفَكَّرُونَ", transliteration: "yatafakkarūna", meaning: { en: "who reflect", ur: "جو reflect", ar: "يتفكرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'جار + مجرور' }
        ],
    }
  },
  12: {
    ayahNumber: 12,
    text: "وَسَخَّرَ لَكُمُ ٱلَّيْلَ وَٱلنَّهَارَ وَٱلشَّمْسَ وَٱلْقَمَرَ ۖ وَٱلنُّجُومُ مُسَخَّرَٰتٌۢ بِأَمْرِهِۦٓ ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَعْقِلُونَ",
    words: [
      { arabic: "وَسَخَّرَ", transliteration: "wasakhara", meaning: { en: "And He has subjected", ur: "اور وہ has subjected", ar: "وسخر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّيْلَ", transliteration: "al-layla", meaning: { en: "the night", ur: "the رات", ar: "ليل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَٱلنَّهَارَ", transliteration: "wal-nahāra", meaning: { en: "and the day", ur: "اور the دن", ar: "ولنهار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلشَّمْسَ", transliteration: "wal-shamsa", meaning: { en: "and the sun", ur: "اور the sun", ar: "ولشمس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْقَمَرَ ۖ", transliteration: "wal-qamara", meaning: { en: "and the moon", ur: "اور the moon", ar: "ولقمر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلنُّجُومُ", transliteration: "wal-nujūmu", meaning: { en: "and the stars", ur: "اور the stars", ar: "ولنجوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُسَخَّرَٰتٌۢ", transliteration: "musakharātun", meaning: { en: "(are) subjected", ur: "ہیں subjected", ar: "مسخرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِأَمْرِهِۦٓ ۗ", transliteration: "bi-amrihi", meaning: { en: "by His command", ur: "by His command", ar: "بأمره" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", meaning: { en: "surely (are) signs", ur: "یقیناً ہیں نشانیاں", ar: "لايت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", root: "ق و م", meaning: { en: "for a people", ur: "کے لیے a لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", meaning: { en: "who use reason", ur: "جو use reason", ar: "يعقلون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' }
        ],
    }
  },
  13: {
    ayahNumber: 13,
    text: "وَمَا ذَرَأَ لَكُمْ فِى ٱلْأَرْضِ مُخْتَلِفًا أَلْوَٰنُهُۥٓ ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ لِّقَوْمٍۢ يَذَّكَّرُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And whatever", ur: "اور whatever", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَرَأَ", transliteration: "dhara-a", meaning: { en: "He multiplied", ur: "وہ multiplied", ar: "ذرأ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُخْتَلِفًا", transliteration: "mukh'talifan", meaning: { en: "(of) varying", ur: "of varying", ar: "مختلفا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلْوَٰنُهُۥٓ ۗ", transliteration: "alwānuhu", meaning: { en: "colors", ur: "colors", ar: "ألونه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَةًۭ", transliteration: "laāyatan", meaning: { en: "surely (is) a sign", ur: "یقیناً ہے a نشانی", ar: "لاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", root: "ق و م", meaning: { en: "for a people", ur: "کے لیے a لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَذَّكَّرُونَ", transliteration: "yadhakkarūna", meaning: { en: "who remember", ur: "جو remember", ar: "يذكرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    }
  },
  15: {
    ayahNumber: 15,
    text: "وَأَلْقَىٰ فِى ٱلْأَرْضِ رَوَٰسِىَ أَن تَمِيدَ بِكُمْ وَأَنْهَـٰرًۭا وَسُبُلًۭا لَّعَلَّكُمْ تَهْتَدُونَ",
    words: [
      { arabic: "وَأَلْقَىٰ", transliteration: "wa-alqā", meaning: { en: "And He has cast", ur: "اور وہ has cast", ar: "وألقى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَوَٰسِىَ", transliteration: "rawāsiya", meaning: { en: "firm mountains", ur: "firm پہاڑ", ar: "روسى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "lest", ur: "lest", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَمِيدَ", transliteration: "tamīda", meaning: { en: "it should shake", ur: "یہ should shake", ar: "تميد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِكُمْ", transliteration: "bikum", meaning: { en: "with you", ur: "کے ساتھ تم", ar: "بكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَأَنْهَـٰرًۭا", transliteration: "wa-anhāran", meaning: { en: "and rivers", ur: "اور نہریں", ar: "وأنهرا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَسُبُلًۭا", transliteration: "wasubulan", meaning: { en: "and roads", ur: "اور roads", ar: "وسبلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "so that you may", ur: "so کہ/وہ تم may", ar: "لعلكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَهْتَدُونَ", transliteration: "tahtadūna", meaning: { en: "be guided", ur: "be guided", ar: "تهتدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' }
        ],
    }
  },
  16: {
    ayahNumber: 16,
    text: "وَعَلَـٰمَـٰتٍۢ ۚ وَبِٱلنَّجْمِ هُمْ يَهْتَدُونَ",
    words: [
      { arabic: "وَعَلَـٰمَـٰتٍۢ ۚ", transliteration: "waʿalāmātin", meaning: { en: "And landmarks", ur: "اور landmarks", ar: "وعلمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبِٱلنَّجْمِ", transliteration: "wabil-najmi", meaning: { en: "And by the stars", ur: "اور by the stars", ar: "وبلنجم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يَهْتَدُونَ", transliteration: "yahtadūna", meaning: { en: "guide themselves", ur: "guide themselves", ar: "يهتدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
        ],
    }
  },
  18: {
    ayahNumber: 18,
    text: "وَإِن تَعُدُّوا۟ نِعْمَةَ ٱللَّهِ لَا تُحْصُوهَآ ۗ إِنَّ ٱللَّهَ لَغَفُورٌۭ رَّحِيمٌۭ",
    words: [
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور if", ar: "وإن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعُدُّوا۟", transliteration: "taʿuddū", meaning: { en: "you should count", ur: "تم should count", ar: "تعدوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نِعْمَةَ", transliteration: "niʿ'mata", meaning: { en: "the Favors of Allah", ur: "the Favors of اللہ", ar: "نعمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "the Favors of Allah", ur: "the Favors of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تُحْصُوهَآ ۗ", transliteration: "tuḥ'ṣūhā", meaning: { en: "you could enumerate them", ur: "تم could enumerate انہیں", ar: "تحصوها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَغَفُورٌۭ", transliteration: "laghafūrun", root: "غ ف ر", meaning: { en: "(is) Oft-Forgiving", ur: "بہت بخشنے والا", ar: "لغفور" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "Most Merciful", ur: "نہایت مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
          { from: 5, to: 6, label: 'نفی + فعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'موصوف + صفت' }
        ],
    }
  },
  19: {
    ayahNumber: 19,
    text: "وَٱللَّهُ يَعْلَمُ مَا تُسِرُّونَ وَمَا تُعْلِنُونَ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "knows", ur: "جانتا ہے", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تُسِرُّونَ", transliteration: "tusirrūna", meaning: { en: "you conceal", ur: "تم conceal", ar: "تسرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور کیا/جو", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُعْلِنُونَ", transliteration: "tuʿ'linūna", meaning: { en: "you reveal", ur: "تم reveal", ar: "تعلنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'موصول + صلة' },
          { from: 4, to: 5, label: 'فعل + فاعل' }
        ],
    }
  },
  20: {
    ayahNumber: 20,
    text: "وَٱلَّذِينَ يَدْعُونَ مِن دُونِ ٱللَّهِ لَا يَخْلُقُونَ شَيْـًۭٔا وَهُمْ يُخْلَقُونَ",
    words: [
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "And those whom", ur: "اور those whom", ar: "ولذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدْعُونَ", transliteration: "yadʿūna", meaning: { en: "they invoke", ur: "وہ لوگ invoke", ar: "يدعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "besides", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "besides", ar: "دون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَخْلُقُونَ", transliteration: "yakhluqūna", meaning: { en: "they create", ur: "وہ لوگ پیدا کرنا", ar: "يخلقون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شَيْـًۭٔا", transliteration: "shayan", meaning: { en: "anything", ur: "anything", ar: "شيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "but (are) themselves", ur: "لیکن ہیں themselves", ar: "وهم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يُخْلَقُونَ", transliteration: "yukh'laqūna", meaning: { en: "created", ur: "پیدا کیا", ar: "يخلقون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'نفی + فعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' }
        ],
    }
  },
  21: {
    ayahNumber: 21,
    text: "أَمْوَٰتٌ غَيْرُ أَحْيَآءٍۢ ۖ وَمَا يَشْعُرُونَ أَيَّانَ يُبْعَثُونَ",
    words: [
      { arabic: "أَمْوَٰتٌ", transliteration: "amwātun", meaning: { en: "(They are) dead", ur: "وہ لوگ ہیں dead", ar: "أموت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", meaning: { en: "not alive", ur: "نہیں alive", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَحْيَآءٍۢ ۖ", transliteration: "aḥyāin", meaning: { en: "not alive", ur: "نہیں alive", ar: "أحياء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", meaning: { en: "they perceive", ur: "وہ لوگ perceive", ar: "يشعرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَيَّانَ", transliteration: "ayyāna", meaning: { en: "when", ur: "when", ar: "أيان" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُبْعَثُونَ", transliteration: "yub'ʿathūna", meaning: { en: "they will be resurrected", ur: "وہ لوگ گا/گے be resurrected", ar: "يبعثون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'فعل + فاعل' }
        ],
    }
  },
  22: {
    ayahNumber: 22,
    text: "إِلَـٰهُكُمْ إِلَـٰهٌۭ وَٰحِدٌۭ ۚ فَٱلَّذِينَ لَا يُؤْمِنُونَ بِٱلْـَٔاخِرَةِ قُلُوبُهُم مُّنكِرَةٌۭ وَهُم مُّسْتَكْبِرُونَ",
    words: [
      { arabic: "إِلَـٰهُكُمْ", transliteration: "ilāhukum", meaning: { en: "Your god", ur: "تمہارا god", ar: "إلهكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهٌۭ", transliteration: "ilāhun", root: "أ ل ه", meaning: { en: "(is) God", ur: "ہے God", ar: "إله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدٌۭ ۚ", transliteration: "wāḥidun", meaning: { en: "One", ur: "One", ar: "وحد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱلَّذِينَ", transliteration: "fa-alladhīna", meaning: { en: "But those who", ur: "لیکن those جو", ar: "فلذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", root: "أ خ ر", meaning: { en: "in the Hereafter", ur: "میں the Hereafter", ar: "بلاخرة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قُلُوبُهُم", transliteration: "qulūbuhum", root: "ق و ل", meaning: { en: "their hearts", ur: "their دل", ar: "قلوبهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّنكِرَةٌۭ", transliteration: "munkiratun", meaning: { en: "refuse", ur: "refuse", ar: "منكرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُم", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ لوگ", ar: "وهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّسْتَكْبِرُونَ", transliteration: "mus'takbirūna", meaning: { en: "(are) arrogant", ur: "ہیں arrogant", ar: "مستكبرون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'نفی + فعل' },
          { from: 7, to: 8, label: 'جار + مجرور' }
        ],
    }
  },
  23: {
    ayahNumber: 23,
    text: "لَا جَرَمَ أَنَّ ٱللَّهَ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ ۚ إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْتَكْبِرِينَ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "No doubt", ur: "خبردار", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "جَرَمَ", transliteration: "jarama", meaning: { en: "No doubt", ur: "خبردار", ar: "جرم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "knows", ur: "جانتا ہے", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُسِرُّونَ", transliteration: "yusirrūna", meaning: { en: "they conceal", ur: "وہ لوگ conceal", ar: "يسرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور کیا/جو", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُعْلِنُونَ ۚ", transliteration: "yuʿ'linūna", meaning: { en: "they reveal", ur: "وہ لوگ reveal", ar: "يعلنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "Indeed, وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(does) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُحِبُّ", transliteration: "yuḥibbu", meaning: { en: "love", ur: "love", ar: "يحب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمُسْتَكْبِرِينَ", transliteration: "l-mus'takbirīna", meaning: { en: "the arrogant ones", ur: "the arrogant ones", ar: "لمستكبرين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'موصول + صلة' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'نفی + فعل' },
          { from: 12, to: 13, label: 'فعل + فاعل' }
        ],
    }
  },
  24: {
    ayahNumber: 24,
    text: "وَإِذَا قِيلَ لَهُم مَّاذَآ أَنزَلَ رَبُّكُمْ ۙ قَالُوٓا۟ أَسَـٰطِيرُ ٱلْأَوَّلِينَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when", ar: "وإذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قِيلَ", transliteration: "qīla", root: "ق و ل", meaning: { en: "it is said", ur: "یہ ہے کہا", ar: "قيل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "to them", ur: "طرف انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مَّاذَآ", transliteration: "mādhā", meaning: { en: "What", ur: "کیا/جو", ar: "ماذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", root: "ن ز ل", meaning: { en: "has your Lord sent down", ur: "has تمہارا رب بھیجا down", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبُّكُمْ ۙ", transliteration: "rabbukum", meaning: { en: "has your Lord sent down", ur: "has تمہارا رب بھیجا down", ar: "ربكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَالُوٓا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They say", ur: "وہ لوگ کہو", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَسَـٰطِيرُ", transliteration: "asāṭīru", meaning: { en: "Tales", ur: "Tales", ar: "أسطير" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", meaning: { en: "(of) the ancient", ur: "of the ancient", ar: "لأولين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' }
        ],
    }
  },
  25: {
    ayahNumber: 25,
    text: "لِيَحْمِلُوٓا۟ أَوْزَارَهُمْ كَامِلَةًۭ يَوْمَ ٱلْقِيَـٰمَةِ ۙ وَمِنْ أَوْزَارِ ٱلَّذِينَ يُضِلُّونَهُم بِغَيْرِ عِلْمٍ ۗ أَلَا سَآءَ مَا يَزِرُونَ",
    words: [
      { arabic: "لِيَحْمِلُوٓا۟", transliteration: "liyaḥmilū", meaning: { en: "That they may bear", ur: "کہ/وہ وہ لوگ may bear", ar: "ليحملوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَوْزَارَهُمْ", transliteration: "awzārahum", meaning: { en: "their own burdens", ur: "their own burdens", ar: "أوزارهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَامِلَةًۭ", transliteration: "kāmilatan", meaning: { en: "(in) full", ur: "میں full", ar: "كاملة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "on (the) Day", ur: "پر the دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقِيَـٰمَةِ ۙ", transliteration: "l-qiyāmati", meaning: { en: "(of) the Resurrection", ur: "of the Resurrection", ar: "لقيمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "and of", ur: "اور of", ar: "ومن" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "أَوْزَارِ", transliteration: "awzāri", meaning: { en: "the burdens", ur: "the burdens", ar: "أوزار" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(of) those whom", ur: "of those whom", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُضِلُّونَهُم", transliteration: "yuḍillūnahum", meaning: { en: "they misled [them]", ur: "وہ لوگ misled [them]", ar: "يضلونهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "without", ar: "بغير" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِلْمٍ ۗ", transliteration: "ʿil'min", meaning: { en: "knowledge", ur: "knowledge", ar: "علم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَا", transliteration: "alā", meaning: { en: "Unquestionably", ur: "Unquestionably", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سَآءَ", transliteration: "sāa", meaning: { en: "evil", ur: "برا", ar: "ساء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(is) what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَزِرُونَ", transliteration: "yazirūna", meaning: { en: "they will bear", ur: "وہ لوگ گا/گے bear", ar: "يزرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'موصول + صلة' }
        ],
    }
  },
  26: {
    ayahNumber: 26,
    text: "قَدْ مَكَرَ ٱلَّذِينَ مِن قَبْلِهِمْ فَأَتَى ٱللَّهُ بُنْيَـٰنَهُم مِّنَ ٱلْقَوَاعِدِ فَخَرَّ عَلَيْهِمُ ٱلسَّقْفُ مِن فَوْقِهِمْ وَأَتَىٰهُمُ ٱلْعَذَابُ مِنْ حَيْثُ لَا يَشْعُرُونَ",
    words: [
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "Verily", ur: "Verily", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "مَكَرَ", transliteration: "makara", meaning: { en: "plotted", ur: "plotted", ar: "مكر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "(were) before them", ur: "تھے before انہیں", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِهِمْ", transliteration: "qablihim", meaning: { en: "(were) before them", ur: "تھے before انہیں", ar: "قبلهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَتَى", transliteration: "fa-atā", meaning: { en: "but Allah came", ur: "لیکن اللہ آیا", ar: "فأتى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "but Allah came", ur: "لیکن اللہ آیا", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بُنْيَـٰنَهُم", transliteration: "bun'yānahum", meaning: { en: "(at) their building", ur: "at their building", ar: "بنينهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقَوَاعِدِ", transliteration: "l-qawāʿidi", meaning: { en: "the foundations", ur: "the foundations", ar: "لقواعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَخَرَّ", transliteration: "fakharra", meaning: { en: "so fell", ur: "so fell", ar: "فخر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "upon them", ur: "upon انہیں", ar: "عليهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلسَّقْفُ", transliteration: "l-saqfu", meaning: { en: "the roof", ur: "the roof", ar: "لسقف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَوْقِهِمْ", transliteration: "fawqihim", meaning: { en: "above them", ur: "above انہیں", ar: "فوقهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَتَىٰهُمُ", transliteration: "wa-atāhumu", meaning: { en: "and came to them", ur: "اور آیا طرف انہیں", ar: "وأتىهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعَذَابُ", transliteration: "l-ʿadhābu", root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب", ar: "لعذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حَيْثُ", transliteration: "ḥaythu", meaning: { en: "where", ur: "where", ar: "حيث" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "they (did) not perceive", ur: "وہ لوگ کیا نہیں perceive", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", meaning: { en: "they (did) not perceive", ur: "وہ لوگ کیا نہیں perceive", ar: "يشعرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'جار + مجرور' },
          { from: 18, to: 19, label: 'جار + مجرور' },
          { from: 20, to: 21, label: 'نفی + فعل' }
        ],
    }
  },
  27: {
    ayahNumber: 27,
    text: "ثُمَّ يَوْمَ ٱلْقِيَـٰمَةِ يُخْزِيهِمْ وَيَقُولُ أَيْنَ شُرَكَآءِىَ ٱلَّذِينَ كُنتُمْ تُشَـٰٓقُّونَ فِيهِمْ ۚ قَالَ ٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ إِنَّ ٱلْخِزْىَ ٱلْيَوْمَ وَٱلسُّوٓءَ عَلَى ٱلْكَـٰفِرِينَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(on) the Day", ur: "پر the دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", meaning: { en: "(of) the Resurrection", ur: "of the Resurrection", ar: "لقيمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُخْزِيهِمْ", transliteration: "yukh'zīhim", meaning: { en: "He will disgrace them", ur: "وہ گا/گے disgrace انہیں", ar: "يخزيهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَيَقُولُ", transliteration: "wayaqūlu", root: "ق و ل", meaning: { en: "and say", ur: "اور کہو", ar: "ويقول" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيْنَ", transliteration: "ayna", meaning: { en: "Where", ur: "Where", ar: "أين" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "شُرَكَآءِىَ", transliteration: "shurakāiya", meaning: { en: "(are) My partners", ur: "ہیں My partners", ar: "شركاءى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those (for) whom", ur: "those کے لیے whom", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used (to)", ur: "تم used طرف", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تُشَـٰٓقُّونَ", transliteration: "tushāqqūna", meaning: { en: "oppose", ur: "oppose", ar: "تشقون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِمْ ۚ", transliteration: "fīhim", meaning: { en: "[in them]", ur: "[in them]", ar: "فيهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "Will say", ur: "گا/گے کہو", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أُوتُوا۟", transliteration: "ūtū", meaning: { en: "were given", ur: "تھے given", ar: "أوتوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعِلْمَ", transliteration: "l-ʿil'ma", meaning: { en: "the knowledge", ur: "the knowledge", ar: "لعلم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْخِزْىَ", transliteration: "l-khiz'ya", meaning: { en: "the disgrace", ur: "the disgrace", ar: "لخزى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", root: "ي و م", meaning: { en: "this Day", ur: "یہ دن", ar: "ليوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلسُّوٓءَ", transliteration: "wal-sūa", meaning: { en: "and evil", ur: "اور برا", ar: "ولسوء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "(are) upon", ur: "ہیں upon", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "the کافروں", ar: "لكفرين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 13, to: 14, label: 'فعل + فاعل' },
          { from: 16, to: 17, label: 'فعل + فاعل' },
          { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
          { from: 18, to: 19, label: 'موصوف + صفت' },
          { from: 20, to: 21, label: 'جار + مجرور' }
        ],
    }
  },
  28: {
    ayahNumber: 28,
    text: "ٱلَّذِينَ تَتَوَفَّىٰهُمُ ٱلْمَلَـٰٓئِكَةُ ظَالِمِىٓ أَنفُسِهِمْ ۖ فَأَلْقَوُا۟ ٱلسَّلَمَ مَا كُنَّا نَعْمَلُ مِن سُوٓءٍۭ ۚ بَلَىٰٓ إِنَّ ٱللَّهَ عَلِيمٌۢ بِمَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those whom ", ur: "Those whom", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَتَوَفَّىٰهُمُ", transliteration: "tatawaffāhumu", meaning: { en: "take them in death", ur: "take انہیں میں death", ar: "تتوفىهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", meaning: { en: "the Angels", ur: "the Angels", ar: "لملئكة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَالِمِىٓ", transliteration: "ẓālimī", meaning: { en: "(while) wronging", ur: "while wronging", ar: "ظالمى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنفُسِهِمْ ۖ", transliteration: "anfusihim", root: "ن ف س", meaning: { en: "themselves", ur: "themselves", ar: "أنفسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَأَلْقَوُا۟", transliteration: "fa-alqawū", meaning: { en: "then they would offer", ur: "پھر وہ لوگ would offer", ar: "فألقوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّلَمَ", transliteration: "l-salama", meaning: { en: "the submission", ur: "the submission", ar: "لسلم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "we were", ur: "ہم تھے", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَعْمَلُ", transliteration: "naʿmalu", meaning: { en: "doing", ur: "doing", ar: "نعمل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سُوٓءٍۭ ۚ", transliteration: "sūin", meaning: { en: "evil", ur: "برا", ar: "سوء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "بَلَىٰٓ", transliteration: "balā", meaning: { en: "Nay", ur: "Nay", ar: "بلى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلِيمٌۢ", transliteration: "ʿalīmun", meaning: { en: "(is) All-Knower", ur: "ہے All-Knower", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "of کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used (to)", ur: "تم used طرف", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'نفی + فعل' },
          { from: 14, to: 15, label: 'فعل + فاعل' },
          { from: 15, to: 16, label: 'موصوف + صفت' }
        ],
    }
  },
  29: {
    ayahNumber: 29,
    text: "فَٱدْخُلُوٓا۟ أَبْوَٰبَ جَهَنَّمَ خَـٰلِدِينَ فِيهَا ۖ فَلَبِئْسَ مَثْوَى ٱلْمُتَكَبِّرِينَ",
    words: [
      { arabic: "فَٱدْخُلُوٓا۟", transliteration: "fa-ud'khulū", meaning: { en: "So enter", ur: "So enter", ar: "فدخلوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَبْوَٰبَ", transliteration: "abwāba", meaning: { en: "(the) gates", ur: "the gates", ar: "أبوب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "(of) Hell", ur: "of Hell", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", root: "د ي ن", meaning: { en: "(to) abide forever", ur: "طرف abide forever", ar: "خلدين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا ۖ", transliteration: "fīhā", meaning: { en: "in it", ur: "میں یہ", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَلَبِئْسَ", transliteration: "falabi'sa", meaning: { en: "Surely, wretched", ur: "Surely, wretched", ar: "فلبئس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَثْوَى", transliteration: "mathwā", meaning: { en: "(is the) abode", ur: "ہے the abode", ar: "مثوى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُتَكَبِّرِينَ", transliteration: "l-mutakabirīna", meaning: { en: "(of) the arrogant", ur: "of the arrogant", ar: "لمتكبرين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    }
  },
  30: {
    ayahNumber: 30,
    text: "۞ وَقِيلَ لِلَّذِينَ ٱتَّقَوْا۟ مَاذَآ أَنزَلَ رَبُّكُمْ ۚ قَالُوا۟ خَيْرًۭا ۗ لِّلَّذِينَ أَحْسَنُوا۟ فِى هَـٰذِهِ ٱلدُّنْيَا حَسَنَةٌۭ ۚ وَلَدَارُ ٱلْـَٔاخِرَةِ خَيْرٌۭ ۚ وَلَنِعْمَ دَارُ ٱلْمُتَّقِينَ",
    words: [
      { arabic: "۞ وَقِيلَ", transliteration: "waqīla", root: "ق و ل", meaning: { en: "And it will be said", ur: "اور یہ گا/گے be کہا", ar: "۞ وقيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "طرف those جو", ar: "للذين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱتَّقَوْا۟", transliteration: "ittaqaw", meaning: { en: "fear Allah", ur: "ڈرو اللہ", ar: "تقوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "مَاذَآ", transliteration: "mādhā", meaning: { en: "What", ur: "کیا/جو", ar: "ماذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", root: "ن ز ل", meaning: { en: "has your Lord sent down", ur: "has تمہارا رب بھیجا down", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبُّكُمْ ۚ", transliteration: "rabbukum", meaning: { en: "has your Lord sent down", ur: "has تمہارا رب بھیجا down", ar: "ربكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They will say", ur: "وہ لوگ گا/گے کہو", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَيْرًۭا ۗ", transliteration: "khayran", root: "خ ي ر", meaning: { en: "Good", ur: "اچھا", ar: "خيرا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "For those who", ur: "کے لیے those جو", ar: "للذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَحْسَنُوا۟", transliteration: "aḥsanū", root: "ح س ن", meaning: { en: "do good", ur: "کرتے ہو اچھا", ar: "أحسنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَـٰذِهِ", transliteration: "hādhihi", meaning: { en: "this", ur: "یہ", ar: "هذه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "world", ur: "world", ar: "لدنيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَسَنَةٌۭ ۚ", transliteration: "ḥasanatun", root: "ح س ن", meaning: { en: "(is) a good", ur: "ہے a اچھا", ar: "حسنة" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَلَدَارُ", transliteration: "waladāru", meaning: { en: "and the home", ur: "اور the گھر", ar: "ولدار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "of the Hereafter", ur: "of the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَيْرٌۭ ۚ", transliteration: "khayrun", root: "خ ي ر", meaning: { en: "(is) better", ur: "ہے better", ar: "خير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَنِعْمَ", transliteration: "walaniʿ'ma", meaning: { en: "And surely excellent", ur: "اور یقیناً excellent", ar: "ولنعم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "دَارُ", transliteration: "dāru", meaning: { en: "(is) the home", ur: "ہے the گھر", ar: "دار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", meaning: { en: "(of) the righteous", ur: "of the righteous", ar: "لمتقين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'جار + مجرور' },
          { from: 13, to: 14, label: 'موصوف + صفت' },
          { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
          { from: 18, to: 19, label: 'فعل + فاعل' }
        ],
    }
  },
  31: {
    ayahNumber: 31,
    text: "جَنَّـٰتُ عَدْنٍۢ يَدْخُلُونَهَا تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ ۖ لَهُمْ فِيهَا مَا يَشَآءُونَ ۚ كَذَٰلِكَ يَجْزِى ٱللَّهُ ٱلْمُتَّقِينَ",
    words: [
      { arabic: "جَنَّـٰتُ", transliteration: "jannātu", root: "ج ن ن", meaning: { en: "Gardens", ur: "Gardens", ar: "جنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَدْنٍۢ", transliteration: "ʿadnin", meaning: { en: "(of) Eden ", ur: "of Eden", ar: "عدن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدْخُلُونَهَا", transliteration: "yadkhulūnahā", meaning: { en: "which they will enter", ur: "جو وہ لوگ گا/گے enter", ar: "يدخلونها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَجْرِى", transliteration: "tajrī", meaning: { en: "flows", ur: "flows", ar: "تجرى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَحْتِهَا", transliteration: "taḥtihā", meaning: { en: "underneath them", ur: "underneath انہیں", ar: "تحتها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَنْهَـٰرُ ۖ", transliteration: "l-anhāru", meaning: { en: "the rivers", ur: "the نہریں", ar: "لأنهر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "For them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(will be) whatever", ur: "گا/گے be whatever", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَشَآءُونَ ۚ", transliteration: "yashāūna", meaning: { en: "they wish", ur: "وہ لوگ wish", ar: "يشاءون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus", ar: "كذلك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَجْزِى", transliteration: "yajzī", meaning: { en: "Allah rewards", ur: "اللہ rewards", ar: "يجزى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah rewards", ur: "اللہ rewards", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", meaning: { en: "the righteous", ur: "the righteous", ar: "لمتقين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'موصول + صلة' },
          { from: 13, to: 14, label: 'فعل + فاعل' }
        ],
    }
  },
  32: {
    ayahNumber: 32,
    text: "ٱلَّذِينَ تَتَوَفَّىٰهُمُ ٱلْمَلَـٰٓئِكَةُ طَيِّبِينَ ۙ يَقُولُونَ سَلَـٰمٌ عَلَيْكُمُ ٱدْخُلُوا۟ ٱلْجَنَّةَ بِمَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those whom", ur: "Those whom", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَتَوَفَّىٰهُمُ", transliteration: "tatawaffāhumu", meaning: { en: "take them in death", ur: "take انہیں میں death", ar: "تتوفىهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", meaning: { en: "the Angels", ur: "the Angels", ar: "لملئكة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "طَيِّبِينَ ۙ", transliteration: "ṭayyibīna", root: "ط ي ب", meaning: { en: "(when they are) pure", ur: "when وہ لوگ ہیں pure", ar: "طيبين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "saying", ur: "saying", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سَلَـٰمٌ", transliteration: "salāmun", root: "س ل م", meaning: { en: "Peace", ur: "Peace", ar: "سلم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُمُ", transliteration: "ʿalaykumu", meaning: { en: "(be) upon you", ur: "be upon تم", ar: "عليكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱدْخُلُوا۟", transliteration: "ud'khulū", meaning: { en: "Enter", ur: "Enter", ar: "دخلوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", meaning: { en: "Paradise", ur: "جنت", ar: "لجنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "کے لیے کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used (to)", ur: "تم used طرف", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' }
        ],
    }
  },
  33: {
    ayahNumber: 33,
    text: "هَلْ يَنظُرُونَ إِلَّآ أَن تَأْتِيَهُمُ ٱلْمَلَـٰٓئِكَةُ أَوْ يَأْتِىَ أَمْرُ رَبِّكَ ۚ كَذَٰلِكَ فَعَلَ ٱلَّذِينَ مِن قَبْلِهِمْ ۚ وَمَا ظَلَمَهُمُ ٱللَّهُ وَلَـٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ",
    words: [
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Do", ur: "کرتے ہو", ar: "هل" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "they wait", ur: "وہ لوگ wait", ar: "ينظرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّآ", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَأْتِيَهُمُ", transliteration: "tatiyahumu", meaning: { en: "(should) come to them", ur: "should آؤ طرف انہیں", ar: "تأتيهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", meaning: { en: "the Angels", ur: "the Angels", ar: "لملئكة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَأْتِىَ", transliteration: "yatiya", meaning: { en: "(should) come", ur: "آؤ", ar: "يأتى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُ", transliteration: "amru", meaning: { en: "(the) Command", ur: "the Command", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّكَ ۚ", transliteration: "rabbika", meaning: { en: "(of) your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus", ar: "كذلك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَعَلَ", transliteration: "faʿala", meaning: { en: "did", ur: "کیا", ar: "فعل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "(were) before them", ur: "تھے before انہیں", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِهِمْ ۚ", transliteration: "qablihim", meaning: { en: "(were) before them", ur: "تھے before انہیں", ar: "قبلهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَلَمَهُمُ", transliteration: "ẓalamahumu", root: "ظ ل م", meaning: { en: "wronged them", ur: "wronged انہیں", ar: "ظلمهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوٓا۟", transliteration: "kānū", meaning: { en: "they were", ur: "وہ لوگ تھے", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", root: "ن ف س", meaning: { en: "themselves", ur: "themselves", ar: "أنفسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَظْلِمُونَ", transliteration: "yaẓlimūna", root: "ظ ل م", meaning: { en: "wronging", ur: "wronging", ar: "يظلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'جار + مجرور' },
          { from: 17, to: 18, label: 'فعل + فاعل' }
        ],
    }
  },
  34: {
    ayahNumber: 34,
    text: "فَأَصَابَهُمْ سَيِّـَٔاتُ مَا عَمِلُوا۟ وَحَاقَ بِهِم مَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ",
    words: [
      { arabic: "فَأَصَابَهُمْ", transliteration: "fa-aṣābahum", meaning: { en: "Then struck them", ur: "پھر struck انہیں", ar: "فأصابهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَيِّـَٔاتُ", transliteration: "sayyiātu", meaning: { en: "(the) evil (results)", ur: "the برا results", ar: "سيات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(of) what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "عَمِلُوا۟", transliteration: "ʿamilū", meaning: { en: "they did", ur: "وہ لوگ کیا", ar: "عملوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَحَاقَ", transliteration: "waḥāqa", meaning: { en: "and surrounded", ur: "اور surrounded", ar: "وحاق" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِم", transliteration: "bihim", meaning: { en: "them", ur: "انہیں", ar: "بهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "[of it]", ur: "[of it]", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَسْتَهْزِءُونَ", transliteration: "yastahziūna", meaning: { en: "mock", ur: "mock", ar: "يستهزءون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'موصول + صلة' },
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    }
  },
  35: {
    ayahNumber: 35,
    text: "وَقَالَ ٱلَّذِينَ أَشْرَكُوا۟ لَوْ شَآءَ ٱللَّهُ مَا عَبَدْنَا مِن دُونِهِۦ مِن شَىْءٍۢ نَّحْنُ وَلَآ ءَابَآؤُنَا وَلَا حَرَّمْنَا مِن دُونِهِۦ مِن شَىْءٍۢ ۚ كَذَٰلِكَ فَعَلَ ٱلَّذِينَ مِن قَبْلِهِمْ ۚ فَهَلْ عَلَى ٱلرُّسُلِ إِلَّا ٱلْبَلَـٰغُ ٱلْمُبِينُ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", root: "ق و ل", meaning: { en: "And said", ur: "اور کہا", ar: "وقال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَشْرَكُوا۟", transliteration: "ashrakū", meaning: { en: "associate partners (with Allah)", ur: "associate partners کے ساتھ اللہ", ar: "أشركوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If", ur: "If", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "شَآءَ", transliteration: "shāa", meaning: { en: "Allah (had) willed", ur: "اللہ had willed", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah (had) willed", ur: "اللہ had willed", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "عَبَدْنَا", transliteration: "ʿabadnā", root: "د ن و", meaning: { en: "we (would) have worshipped", ur: "ہم would have worshipped", ar: "عبدنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "other than Him", ur: "other than اس", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِهِۦ", transliteration: "dūnihi", meaning: { en: "other than Him", ur: "other than اس", ar: "دونه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "thing", ur: "thing", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّحْنُ", transliteration: "naḥnu", meaning: { en: "we", ur: "ہم", ar: "نحن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَآ", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَابَآؤُنَا", transliteration: "ābāunā", meaning: { en: "our forefathers", ur: "our forefathers", ar: "ءاباؤنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "حَرَّمْنَا", transliteration: "ḥarramnā", meaning: { en: "we (would) have forbidden", ur: "ہم would have forbidden", ar: "حرمنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "other than Him", ur: "other than اس", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِهِۦ", transliteration: "dūnihi", meaning: { en: "other than Him", ur: "other than اس", ar: "دونه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "anything", ur: "anything", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَىْءٍۢ ۚ", transliteration: "shayin", meaning: { en: "anything", ur: "anything", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus", ar: "كذلك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَعَلَ", transliteration: "faʿala", meaning: { en: "did", ur: "کیا", ar: "فعل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "(were) before them", ur: "تھے before انہیں", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِهِمْ ۚ", transliteration: "qablihim", meaning: { en: "(were) before them", ur: "تھے before انہیں", ar: "قبلهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "Then is (there)", ur: "پھر ہے there", ar: "فهل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلرُّسُلِ", transliteration: "l-rusuli", root: "ر س ل", meaning: { en: "the messengers", ur: "the رسول", ar: "لرسل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْبَلَـٰغُ", transliteration: "l-balāghu", meaning: { en: "the conveyance", ur: "the conveyance", ar: "لبلغ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُبِينُ", transliteration: "l-mubīnu", meaning: { en: "clear", ur: "واضح", ar: "لمبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 7, to: 8, label: 'نفی + فعل' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'جار + مجرور' },
          { from: 13, to: 14, label: 'فعل + فاعل' },
          { from: 16, to: 17, label: 'نفی + فعل' },
          { from: 18, to: 19, label: 'جار + مجرور' },
          { from: 20, to: 21, label: 'جار + مجرور' },
          { from: 22, to: 23, label: 'جار + مجرور' }
        ],
    }
  },
  36: {
    ayahNumber: 36,
    text: "وَلَقَدْ بَعَثْنَا فِى كُلِّ أُمَّةٍۢ رَّسُولًا أَنِ ٱعْبُدُوا۟ ٱللَّهَ وَٱجْتَنِبُوا۟ ٱلطَّـٰغُوتَ ۖ فَمِنْهُم مَّنْ هَدَى ٱللَّهُ وَمِنْهُم مَّنْ حَقَّتْ عَلَيْهِ ٱلضَّلَـٰلَةُ ۚ فَسِيرُوا۟ فِى ٱلْأَرْضِ فَٱنظُرُوا۟ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُكَذِّبِينَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "بَعَثْنَا", transliteration: "baʿathnā", meaning: { en: "We sent", ur: "ہم بھیجا", ar: "بعثنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "into", ur: "into", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", meaning: { en: "nation", ur: "nation", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّسُولًا", transliteration: "rasūlan", root: "ر س ل", meaning: { en: "a Messenger", ur: "a رسول", ar: "رسولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنِ", transliteration: "ani", meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱعْبُدُوا۟", transliteration: "uʿ'budū", meaning: { en: "Worship", ur: "عبادت کرو", ar: "عبدوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱجْتَنِبُوا۟", transliteration: "wa-ij'tanibū", meaning: { en: "and avoid", ur: "اور avoid", ar: "وجتنبوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلطَّـٰغُوتَ ۖ", transliteration: "l-ṭāghūta", meaning: { en: "the false deities", ur: "the false deities", ar: "لطغوت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمِنْهُم", transliteration: "famin'hum", meaning: { en: "Then among them", ur: "پھر among انہیں", ar: "فمنهم" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "مَّنْ", transliteration: "man", meaning: { en: "(were some) whom", ur: "تھے some whom", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَدَى", transliteration: "hadā", meaning: { en: "Allah guided", ur: "اللہ guided", ar: "هدى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah guided", ur: "اللہ guided", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمِنْهُم", transliteration: "wamin'hum", meaning: { en: "and among them", ur: "اور among انہیں", ar: "ومنهم" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "مَّنْ", transliteration: "man", meaning: { en: "(were) some", ur: "تھے some", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَقَّتْ", transliteration: "ḥaqqat", root: "ح ق ق", meaning: { en: "was justified", ur: "تھا justified", ar: "حقت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "on them", ur: "پر انہیں", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلضَّلَـٰلَةُ ۚ", transliteration: "l-ḍalālatu", meaning: { en: "the straying", ur: "the straying", ar: "لضللة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَسِيرُوا۟", transliteration: "fasīrū", meaning: { en: "So travel", ur: "So travel", ar: "فسيروا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱنظُرُوا۟", transliteration: "fa-unẓurū", meaning: { en: "and see", ur: "اور دیکھتے ہو", ar: "فنظروا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "how", ar: "كيف" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", meaning: { en: "the end", ur: "the end", ar: "عقبة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُكَذِّبِينَ", transliteration: "l-mukadhibīna", meaning: { en: "(of) the deniers", ur: "of the deniers", ar: "لمكذبين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 19, to: 20, label: 'جار + مجرور' },
          { from: 22, to: 23, label: 'جار + مجرور' },
          { from: 26, to: 27, label: 'جار + مجرور' }
        ],
    }
  },
  37: {
    ayahNumber: 37,
    text: "إِن تَحْرِصْ عَلَىٰ هُدَىٰهُمْ فَإِنَّ ٱللَّهَ لَا يَهْدِى مَن يُضِلُّ ۖ وَمَا لَهُم مِّن نَّـٰصِرِينَ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "If", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "تَحْرِصْ", transliteration: "taḥriṣ", meaning: { en: "you desire", ur: "تم desire", ar: "تحرص" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "[for]", ur: "[for]", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هُدَىٰهُمْ", transliteration: "hudāhum", root: "ه د ي", meaning: { en: "their guidance", ur: "their guidance", ar: "هدىهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "then indeed", ur: "پھر بے شک", ar: "فإن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(will) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَهْدِى", transliteration: "yahdī", root: "ه د ي", meaning: { en: "guide", ur: "guide", ar: "يهدى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "whom", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُضِلُّ ۖ", transliteration: "yuḍillu", meaning: { en: "He lets go astray", ur: "وہ lets go astray", ar: "يضل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not (are)", ur: "اور نہیں ہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّـٰصِرِينَ", transliteration: "nāṣirīna", meaning: { en: "helpers", ur: "helpers", ar: "نصرين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'نفی + فعل' },
          { from: 9, to: 10, label: 'موصول + صلة' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'جار + مجرور' }
        ],
    }
  },
  38: {
    ayahNumber: 38,
    text: "وَأَقْسَمُوا۟ بِٱللَّهِ جَهْدَ أَيْمَـٰنِهِمْ ۙ لَا يَبْعَثُ ٱللَّهُ مَن يَمُوتُ ۚ بَلَىٰ وَعْدًا عَلَيْهِ حَقًّۭا وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
    words: [
      { arabic: "وَأَقْسَمُوا۟", transliteration: "wa-aqsamū", meaning: { en: "And they swear", ur: "اور وہ لوگ swear", ar: "وأقسموا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱللَّهِ", transliteration: "bil-lahi", root: "أ ل ه", meaning: { en: "by Allah", ur: "by اللہ", ar: "بلله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "جَهْدَ", transliteration: "jahda", meaning: { en: "strongest", ur: "strongest", ar: "جهد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيْمَـٰنِهِمْ ۙ", transliteration: "aymānihim", meaning: { en: "(of) their oaths", ur: "of their oaths", ar: "أيمنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Allah will not resurrect", ur: "اللہ گا/گے نہیں resurrect", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَبْعَثُ", transliteration: "yabʿathu", meaning: { en: "Allah will not resurrect", ur: "اللہ گا/گے نہیں resurrect", ar: "يبعث" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah will not resurrect", ur: "اللہ گا/گے نہیں resurrect", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "(one) who", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَمُوتُ ۚ", transliteration: "yamūtu", root: "م و ت", meaning: { en: "dies", ur: "dies", ar: "يموت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Nay", ur: "Nay", ar: "بلى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعْدًا", transliteration: "waʿdan", meaning: { en: "(it is) a promise", ur: "یہ ہے a promise", ar: "وعدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "upon Him", ur: "upon اس", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "حَقًّۭا", transliteration: "ḥaqqan", root: "ح ق ق", meaning: { en: "(in) truth", ur: "حق", ar: "حقا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "most", ur: "most", ar: "أكثر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "(of) the mankind", ur: "of the mankind", ar: "لناس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جانتے ہو", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'نفی + فعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'موصول + صلة' },
          { from: 9, to: 10, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 15, to: 16, label: 'فعل + فاعل' },
          { from: 17, to: 18, label: 'نفی + فعل' }
        ],
    }
  },
  39: {
    ayahNumber: 39,
    text: "لِيُبَيِّنَ لَهُمُ ٱلَّذِى يَخْتَلِفُونَ فِيهِ وَلِيَعْلَمَ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّهُمْ كَانُوا۟ كَـٰذِبِينَ",
    words: [
      { arabic: "لِيُبَيِّنَ", transliteration: "liyubayyina", meaning: { en: "That He will make clear", ur: "کہ/وہ وہ گا/گے بناتے ہو واضح", ar: "ليبين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "to them", ur: "طرف انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "that", ur: "کہ/وہ", ar: "لذى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَخْتَلِفُونَ", transliteration: "yakhtalifūna", meaning: { en: "they differ", ur: "وہ لوگ differ", ar: "يختلفون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "wherein", ur: "wherein", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلِيَعْلَمَ", transliteration: "waliyaʿlama", meaning: { en: "and that may know", ur: "اور کہ/وہ may جانتے ہو", ar: "وليعلم" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَفَرُوٓا۟", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved", ar: "كفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنَّهُمْ", transliteration: "annahum", meaning: { en: "that they", ur: "کہ/وہ وہ لوگ", ar: "أنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "were", ur: "تھے", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَـٰذِبِينَ", transliteration: "kādhibīna", meaning: { en: "liars", ur: "liars", ar: "كذبين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
        relationships: [
        ],
    }
  },
  40: {
    ayahNumber: 40,
    text: "إِنَّمَا قَوْلُنَا لِشَىْءٍ إِذَآ أَرَدْنَـٰهُ أَن نَّقُولَ لَهُۥ كُن فَيَكُونُ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْلُنَا", transliteration: "qawlunā", meaning: { en: "Our Word", ur: "Our Word", ar: "قولنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِشَىْءٍ", transliteration: "lishayin", meaning: { en: "to a thing", ur: "طرف a thing", ar: "لشىء" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِذَآ", transliteration: "idhā", meaning: { en: "when", ur: "when", ar: "إذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَدْنَـٰهُ", transliteration: "aradnāhu", root: "د ن و", meaning: { en: "We intend it", ur: "ہم intend یہ", ar: "أردنه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "(is) that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَّقُولَ", transliteration: "naqūla", meaning: { en: "We say", ur: "ہم کہو", ar: "نقول" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "to it", ur: "طرف یہ", ar: "له" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "كُن", transliteration: "kun", meaning: { en: "Be", ur: "Be", ar: "كن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيَكُونُ", transliteration: "fayakūnu", meaning: { en: "and it is", ur: "اور یہ ہے", ar: "فيكون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    }
  },
  41: {
    ayahNumber: 41,
    text: "وَٱلَّذِينَ هَاجَرُوا۟ فِى ٱللَّهِ مِنۢ بَعْدِ مَا ظُلِمُوا۟ لَنُبَوِّئَنَّهُمْ فِى ٱلدُّنْيَا حَسَنَةًۭ ۖ وَلَأَجْرُ ٱلْـَٔاخِرَةِ أَكْبَرُ ۚ لَوْ كَانُوا۟ يَعْلَمُونَ",
    words: [
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "And those who", ur: "اور those جو", ar: "ولذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَاجَرُوا۟", transliteration: "hājarū", meaning: { en: "emigrated", ur: "emigrated", ar: "هاجروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in (the way)", ur: "میں the راستہ", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "after", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "[what]", ur: "[what]", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "ظُلِمُوا۟", transliteration: "ẓulimū", meaning: { en: "they were wronged", ur: "وہ لوگ تھے wronged", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَنُبَوِّئَنَّهُمْ", transliteration: "lanubawwi-annahum", meaning: { en: "surely We will give them position", ur: "یقیناً ہم گا/گے دو انہیں position", ar: "لنبوئنهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "the world", ur: "the world", ar: "لدنيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَسَنَةًۭ ۖ", transliteration: "ḥasanatan", root: "ح س ن", meaning: { en: "good", ur: "اچھا", ar: "حسنة" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "وَلَأَجْرُ", transliteration: "wala-ajru", meaning: { en: "but surely the reward", ur: "لیکن یقیناً the reward", ar: "ولأجر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "(of) the Hereafter", ur: "of the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكْبَرُ ۚ", transliteration: "akbaru", root: "ك ب ر", meaning: { en: "(is) greater", ur: "ہے greater", ar: "أكبر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "if", ur: "if", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they", ur: "وہ لوگ", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جانتے ہو", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'موصول + صلة' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 12, to: 13, label: 'فعل + فاعل' }
        ],
    }
  },
  42: {
    ayahNumber: 42,
    text: "ٱلَّذِينَ صَبَرُوا۟ وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَبَرُوا۟", transliteration: "ṣabarū", meaning: { en: "(are) patient", ur: "ہیں patient", ar: "صبروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعَلَىٰ", transliteration: "waʿalā", meaning: { en: "and on", ur: "اور پر", ar: "وعلى" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَوَكَّلُونَ", transliteration: "yatawakkalūna", meaning: { en: "they put their trust", ur: "وہ لوگ put their trust", ar: "يتوكلون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
        ],
    }
  },
  43: {
    ayahNumber: 43,
    text: "وَمَآ أَرْسَلْنَا مِن قَبْلِكَ إِلَّا رِجَالًۭا نُّوحِىٓ إِلَيْهِمْ ۚ فَسْـَٔلُوٓا۟ أَهْلَ ٱلذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ",
    words: [
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before you", ur: "before تم", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِكَ", transliteration: "qablika", meaning: { en: "before you", ur: "before تم", ar: "قبلك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رِجَالًۭا", transliteration: "rijālan", meaning: { en: "men", ur: "مرد", ar: "رجالا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُّوحِىٓ", transliteration: "nūḥī", meaning: { en: "We revealed", ur: "ہم revealed", ar: "نوحى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِمْ ۚ", transliteration: "ilayhim", meaning: { en: "to them", ur: "طرف انہیں", ar: "إليهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فَسْـَٔلُوٓا۟", transliteration: "fasalū", meaning: { en: "so ask", ur: "so ask", ar: "فسلوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَهْلَ", transliteration: "ahla", meaning: { en: "(the) people", ur: "لوگ", ar: "أهل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلذِّكْرِ", transliteration: "l-dhik'ri", meaning: { en: "(of) the Reminder", ur: "of the Reminder", ar: "لذكر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you", ur: "تم", ar: "كنتم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "know", ur: "جانتے ہو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 14, to: 15, label: 'نفی + فعل' }
        ],
    }
  },
  44: {
    ayahNumber: 44,
    text: "بِٱلْبَيِّنَـٰتِ وَٱلزُّبُرِ ۗ وَأَنزَلْنَآ إِلَيْكَ ٱلذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ وَلَعَلَّهُمْ يَتَفَكَّرُونَ",
    words: [
      { arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", meaning: { en: "With the clear proofs", ur: "کے ساتھ the واضح proofs", ar: "بلبينت" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَٱلزُّبُرِ ۗ", transliteration: "wal-zuburi", meaning: { en: "and the Books", ur: "اور the Books", ar: "ولزبر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنزَلْنَآ", transliteration: "wa-anzalnā", meaning: { en: "And We sent down", ur: "اور ہم بھیجا down", ar: "وأنزلنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "طرف تم", ar: "إليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلذِّكْرَ", transliteration: "l-dhik'ra", meaning: { en: "the Remembrance", ur: "the Remembrance", ar: "لذكر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتُبَيِّنَ", transliteration: "litubayyina", meaning: { en: "that you may make clear", ur: "کہ/وہ تم may بناتے ہو واضح", ar: "لتبين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لِلنَّاسِ", transliteration: "lilnnāsi", meaning: { en: "to the mankind", ur: "طرف the mankind", ar: "للناس" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "نُزِّلَ", transliteration: "nuzzila", meaning: { en: "has been sent down", ur: "has been بھیجا down", ar: "نزل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِمْ", transliteration: "ilayhim", meaning: { en: "to them", ur: "طرف انہیں", ar: "إليهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَلَعَلَّهُمْ", transliteration: "walaʿallahum", meaning: { en: "and that they may", ur: "اور کہ/وہ وہ لوگ may", ar: "ولعلهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَفَكَّرُونَ", transliteration: "yatafakkarūna", meaning: { en: "reflect", ur: "reflect", ar: "يتفكرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'جار + مجرور' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'موصول + صلة' },
          { from: 10, to: 11, label: 'جار + مجرور' }
        ],
    }
  },
  45: {
    ayahNumber: 45,
    text: "أَفَأَمِنَ ٱلَّذِينَ مَكَرُوا۟ ٱلسَّيِّـَٔاتِ أَن يَخْسِفَ ٱللَّهُ بِهِمُ ٱلْأَرْضَ أَوْ يَأْتِيَهُمُ ٱلْعَذَابُ مِنْ حَيْثُ لَا يَشْعُرُونَ",
    words: [
      { arabic: "أَفَأَمِنَ", transliteration: "afa-amina", meaning: { en: "Do then feel secure", ur: "کرتے ہو پھر feel secure", ar: "أفأمن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَكَرُوا۟", transliteration: "makarū", meaning: { en: "plotted", ur: "plotted", ar: "مكروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّيِّـَٔاتِ", transliteration: "l-sayiāti", meaning: { en: "the evil deeds", ur: "the برا deeds", ar: "لسيات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَخْسِفَ", transliteration: "yakhsifa", meaning: { en: "Allah will cave", ur: "اللہ گا/گے cave", ar: "يخسف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah will cave", ur: "اللہ گا/گے cave", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِمُ", transliteration: "bihimu", meaning: { en: "with them", ur: "کے ساتھ انہیں", ar: "بهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَأْتِيَهُمُ", transliteration: "yatiyahumu", meaning: { en: "will come to them", ur: "گا/گے آؤ طرف انہیں", ar: "يأتيهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعَذَابُ", transliteration: "l-ʿadhābu", root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب", ar: "لعذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حَيْثُ", transliteration: "ḥaythu", meaning: { en: "where", ur: "where", ar: "حيث" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", meaning: { en: "they perceive", ur: "وہ لوگ perceive", ar: "يشعرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 13, to: 14, label: 'جار + مجرور' },
          { from: 15, to: 16, label: 'نفی + فعل' }
        ],
    }
  },
  46: {
    ayahNumber: 46,
    text: "أَوْ يَأْخُذَهُمْ فِى تَقَلُّبِهِمْ فَمَا هُم بِمُعْجِزِينَ",
    words: [
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "Or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَأْخُذَهُمْ", transliteration: "yakhudhahum", meaning: { en: "that He may seize them", ur: "کہ/وہ وہ may seize انہیں", ar: "يأخذهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَقَلُّبِهِمْ", transliteration: "taqallubihim", meaning: { en: "their going to and fro", ur: "their going طرف اور fro", ar: "تقلبهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "then not", ur: "پھر نہیں", ar: "فما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ", ar: "هم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمُعْجِزِينَ", transliteration: "bimuʿ'jizīna", meaning: { en: "will be able to escape", ur: "گا/گے be able طرف escape", ar: "بمعجزين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' }
        ],
    }
  },
  47: {
    ayahNumber: 47,
    text: "أَوْ يَأْخُذَهُمْ عَلَىٰ تَخَوُّفٍۢ فَإِنَّ رَبَّكُمْ لَرَءُوفٌۭ رَّحِيمٌ",
    words: [
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "Or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَأْخُذَهُمْ", transliteration: "yakhudhahum", meaning: { en: "that He may seize them", ur: "کہ/وہ وہ may seize انہیں", ar: "يأخذهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "with", ur: "کے ساتھ", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَخَوُّفٍۢ", transliteration: "takhawwufin", meaning: { en: "a gradual wasting", ur: "a gradual wasting", ar: "تخوف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "But indeed", ur: "لیکن بے شک", ar: "فإن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكُمْ", transliteration: "rabbakum", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَرَءُوفٌۭ", transliteration: "laraūfun", meaning: { en: "(is) surely Full of Kindness", ur: "ہے یقیناً Full of Kindness", ar: "لرءوف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "Most Merciful", ur: "نہایت مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
          { from: 7, to: 8, label: 'موصوف + صفت' }
        ],
    }
  },
  48: {
    ayahNumber: 48,
    text: "أَوَلَمْ يَرَوْا۟ إِلَىٰ مَا خَلَقَ ٱللَّهُ مِن شَىْءٍۢ يَتَفَيَّؤُا۟ ظِلَـٰلُهُۥ عَنِ ٱلْيَمِينِ وَٱلشَّمَآئِلِ سُجَّدًۭا لِّلَّهِ وَهُمْ دَٰخِرُونَ",
    words: [
      { arabic: "أَوَلَمْ", transliteration: "awalam", meaning: { en: "Have not", ur: "Have نہیں", ar: "أولم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَرَوْا۟", transliteration: "yaraw", meaning: { en: "they seen", ur: "وہ لوگ seen", ar: "يروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "[towards]", ur: "[towards]", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "Allah has created", ur: "اللہ has پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah has created", ur: "اللہ has پیدا کیا", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "a thing", ur: "a thing", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَفَيَّؤُا۟", transliteration: "yatafayya-u", meaning: { en: "Incline", ur: "Incline", ar: "يتفيؤا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ظِلَـٰلُهُۥ", transliteration: "ẓilāluhu", meaning: { en: "their shadows", ur: "their shadows", ar: "ظلله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "to", ur: "طرف", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْيَمِينِ", transliteration: "l-yamīni", meaning: { en: "the right", ur: "the صحیح", ar: "ليمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلشَّمَآئِلِ", transliteration: "wal-shamāili", meaning: { en: "and to the left", ur: "اور طرف the left", ar: "ولشمائل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سُجَّدًۭا", transliteration: "sujjadan", meaning: { en: "prostrating", ur: "prostrating", ar: "سجدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلَّهِ", transliteration: "lillahi", root: "أ ل ه", meaning: { en: "to Allah", ur: "طرف اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "while they", ur: "while وہ لوگ", ar: "وهم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "دَٰخِرُونَ", transliteration: "dākhirūna", root: "أ خ ر", meaning: { en: "(are) humble", ur: "ہیں humble", ar: "دخرون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'موصول + صلة' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'جار + مجرور' }
        ],
    }
  },
  49: {
    ayahNumber: 49,
    text: "وَلِلَّهِ يَسْجُدُ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ مِن دَآبَّةٍۢ وَٱلْمَلَـٰٓئِكَةُ وَهُمْ لَا يَسْتَكْبِرُونَ",
    words: [
      { arabic: "وَلِلَّهِ", transliteration: "walillahi", meaning: { en: "And to Allah", ur: "اور طرف اللہ", ar: "ولله" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "يَسْجُدُ", transliteration: "yasjudu", meaning: { en: "prostrate", ur: "prostrate", ar: "يسجد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "whatever", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں", ar: "لسموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور whatever", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دَآبَّةٍۢ", transliteration: "dābbatin", meaning: { en: "moving creatures", ur: "moving creatures", ar: "دابة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْمَلَـٰٓئِكَةُ", transliteration: "wal-malāikatu", meaning: { en: "and the Angels", ur: "اور the Angels", ar: "ولملئكة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ لوگ", ar: "وهم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(are) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَسْتَكْبِرُونَ", transliteration: "yastakbirūna", meaning: { en: "arrogant", ur: "arrogant", ar: "يستكبرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 13, to: 14, label: 'نفی + فعل' }
        ],
    }
  },
  50: {
    ayahNumber: 50,
    text: "يَخَافُونَ رَبَّهُم مِّن فَوْقِهِمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ ۩",
    words: [
      { arabic: "يَخَافُونَ", transliteration: "yakhāfūna", meaning: { en: "They fear", ur: "وہ لوگ ڈرو", ar: "يخافون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّهُم", transliteration: "rabbahum", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "above them", ur: "above انہیں", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَوْقِهِمْ", transliteration: "fawqihim", meaning: { en: "above them", ur: "above انہیں", ar: "فوقهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَفْعَلُونَ", transliteration: "wayafʿalūna", meaning: { en: "and they do", ur: "اور وہ لوگ کرتے ہو", ar: "ويفعلون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُؤْمَرُونَ ۩", transliteration: "yu'marūna", meaning: { en: "they are commanded", ur: "وہ لوگ ہیں commanded", ar: "يؤمرون ۩" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'موصول + صلة' }
        ],
    }
  },
  51: {
    ayahNumber: 51,
    text: "۞ وَقَالَ ٱللَّهُ لَا تَتَّخِذُوٓا۟ إِلَـٰهَيْنِ ٱثْنَيْنِ ۖ إِنَّمَا هُوَ إِلَـٰهٌۭ وَٰحِدٌۭ ۖ فَإِيَّـٰىَ فَٱرْهَبُونِ",
    words: [
      { arabic: "۞ وَقَالَ", transliteration: "waqāla", root: "ق و ل", meaning: { en: "And Allah has said", ur: "اور اللہ has کہا", ar: "۞ وقال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "And Allah has said", ur: "اور اللہ has کہا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(Do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَتَّخِذُوٓا۟", transliteration: "tattakhidhū", meaning: { en: "take", ur: "take", ar: "تتخذوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَـٰهَيْنِ", transliteration: "ilāhayni", meaning: { en: "[two] gods", ur: "[two] gods", ar: "إلهين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱثْنَيْنِ ۖ", transliteration: "ith'nayni", meaning: { en: "two", ur: "two", ar: "ثنين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "only", ur: "only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَـٰهٌۭ", transliteration: "ilāhun", root: "أ ل ه", meaning: { en: "(is) God", ur: "ہے God", ar: "إله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدٌۭ ۖ", transliteration: "wāḥidun", meaning: { en: "One", ur: "One", ar: "وحد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِيَّـٰىَ", transliteration: "fa-iyyāya", meaning: { en: "so Me Alone", ur: "so Me Alone", ar: "فإيى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱرْهَبُونِ", transliteration: "fa-ir'habūni", meaning: { en: "you fear [Me]", ur: "تم ڈرو [Me]", ar: "فرهبون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'نفی + فعل' },
          { from: 4, to: 5, label: 'فعل + فاعل' }
        ],
    }
  },
  52: {
    ayahNumber: 52,
    text: "وَلَهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَلَهُ ٱلدِّينُ وَاصِبًا ۚ أَفَغَيْرَ ٱللَّهِ تَتَّقُونَ",
    words: [
      { arabic: "وَلَهُۥ", transliteration: "walahu", meaning: { en: "And to Him (belongs)", ur: "اور طرف اس belongs", ar: "وله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "whatever", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں", ar: "لسموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور the زمین", ar: "ولأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَهُ", transliteration: "walahu", meaning: { en: "and to Him", ur: "اور طرف اس", ar: "وله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدِّينُ", transliteration: "l-dīnu", root: "د ي ن", meaning: { en: "(is due) the worship", ur: "ہے due the عبادت کرو", ar: "لدين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَاصِبًا ۚ", transliteration: "wāṣiban", meaning: { en: "constantly", ur: "constantly", ar: "واصبا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَغَيْرَ", transliteration: "afaghayra", meaning: { en: "Then is it other (than)", ur: "پھر ہے یہ other than", ar: "أفغير" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَتَّقُونَ", transliteration: "tattaqūna", meaning: { en: "you fear", ur: "تم ڈرو", ar: "تتقون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'فعل + فاعل' }
        ],
    }
  },
  53: {
    ayahNumber: 53,
    text: "وَمَا بِكُم مِّن نِّعْمَةٍۢ فَمِنَ ٱللَّهِ ۖ ثُمَّ إِذَا مَسَّكُمُ ٱلضُّرُّ فَإِلَيْهِ تَجْـَٔرُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And whatever", ur: "اور whatever", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِكُم", transliteration: "bikum", meaning: { en: "you have", ur: "تم have", ar: "بكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نِّعْمَةٍۢ", transliteration: "niʿ'matin", meaning: { en: "favor", ur: "favor", ar: "نعمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمِنَ", transliteration: "famina", meaning: { en: "(is) from", ur: "سے", ar: "فمن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "when", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "مَسَّكُمُ", transliteration: "massakumu", meaning: { en: "touches you", ur: "touches تم", ar: "مسكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلضُّرُّ", transliteration: "l-ḍuru", meaning: { en: "the adversity", ur: "the adversity", ar: "لضر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِلَيْهِ", transliteration: "fa-ilayhi", meaning: { en: "then to Him", ur: "پھر طرف اس", ar: "فإليه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَجْـَٔرُونَ", transliteration: "tajarūna", meaning: { en: "you cry for help", ur: "تم cry کے لیے help", ar: "تجرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'فعل + فاعل' }
        ],
    }
  },
  54: {
    ayahNumber: 54,
    text: "ثُمَّ إِذَا كَشَفَ ٱلضُّرَّ عَنكُمْ إِذَا فَرِيقٌۭ مِّنكُم بِرَبِّهِمْ يُشْرِكُونَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "when", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كَشَفَ", transliteration: "kashafa", meaning: { en: "He removes", ur: "وہ removes", ar: "كشف" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلضُّرَّ", transliteration: "l-ḍura", meaning: { en: "the adversity", ur: "the adversity", ar: "لضر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنكُمْ", transliteration: "ʿankum", meaning: { en: "from you", ur: "سے تم", ar: "عنكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "behold", ur: "behold", ar: "إذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَرِيقٌۭ", transliteration: "farīqun", meaning: { en: "A group", ur: "A group", ar: "فريق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنكُم", transliteration: "minkum", meaning: { en: "of you", ur: "of تم", ar: "منكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِرَبِّهِمْ", transliteration: "birabbihim", meaning: { en: "with their Lord", ur: "کے ساتھ their رب", ar: "بربهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يُشْرِكُونَ", transliteration: "yush'rikūna", meaning: { en: "associate others", ur: "associate others", ar: "يشركون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
        ],
    }
  },
  55: {
    ayahNumber: 55,
    text: "لِيَكْفُرُوا۟ بِمَآ ءَاتَيْنَـٰهُمْ ۚ فَتَمَتَّعُوا۟ ۖ فَسَوْفَ تَعْلَمُونَ",
    words: [
      { arabic: "لِيَكْفُرُوا۟", transliteration: "liyakfurū", meaning: { en: "So as to deny", ur: "So as طرف deny", ar: "ليكفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِمَآ", transliteration: "bimā", meaning: { en: "that which", ur: "کہ/وہ جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ءَاتَيْنَـٰهُمْ ۚ", transliteration: "ātaynāhum", meaning: { en: "We have given them", ur: "ہم have given انہیں", ar: "ءاتينهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَتَمَتَّعُوا۟ ۖ", transliteration: "fatamattaʿū", meaning: { en: "Then enjoy yourselves", ur: "پھر enjoy yourselves", ar: "فتمتعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَسَوْفَ", transliteration: "fasawfa", meaning: { en: "soon", ur: "soon", ar: "فسوف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "you will know", ur: "تم گا/گے جانتے ہو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' }
        ],
    }
  },
  56: {
    ayahNumber: 56,
    text: "وَيَجْعَلُونَ لِمَا لَا يَعْلَمُونَ نَصِيبًۭا مِّمَّا رَزَقْنَـٰهُمْ ۗ تَٱللَّهِ لَتُسْـَٔلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ",
    words: [
      { arabic: "وَيَجْعَلُونَ", transliteration: "wayajʿalūna", meaning: { en: "And they assign", ur: "اور وہ لوگ assign", ar: "ويجعلون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِمَا", transliteration: "limā", meaning: { en: "to what", ur: "طرف کیا/جو", ar: "لما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "they know ", ur: "وہ لوگ جانتے ہو", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَصِيبًۭا", transliteration: "naṣīban", meaning: { en: "a portion", ur: "a portion", ar: "نصيبا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "of what", ur: "of کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَزَقْنَـٰهُمْ ۗ", transliteration: "razaqnāhum", meaning: { en: "We have provided them", ur: "ہم have provided انہیں", ar: "رزقنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَٱللَّهِ", transliteration: "tal-lahi", meaning: { en: "By Allah", ur: "By اللہ", ar: "تلله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَتُسْـَٔلُنَّ", transliteration: "latus'alunna", meaning: { en: "surely you will be asked", ur: "یقیناً تم گا/گے be asked", ar: "لتسلن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "about what", ur: "about کیا/جو", ar: "عما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used (to)", ur: "تم used طرف", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَفْتَرُونَ", transliteration: "taftarūna", meaning: { en: "invent", ur: "invent", ar: "تفترون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'نفی + فعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'فعل + فاعل' }
        ],
    }
  },
  57: {
    ayahNumber: 57,
    text: "وَيَجْعَلُونَ لِلَّهِ ٱلْبَنَـٰتِ سُبْحَـٰنَهُۥ ۙ وَلَهُم مَّا يَشْتَهُونَ",
    words: [
      { arabic: "وَيَجْعَلُونَ", transliteration: "wayajʿalūna", meaning: { en: "And they assign", ur: "اور وہ لوگ assign", ar: "ويجعلون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", root: "أ ل ه", meaning: { en: "to Allah", ur: "طرف اللہ", ar: "لله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْبَنَـٰتِ", transliteration: "l-banāti", meaning: { en: "daughters", ur: "daughters", ar: "لبنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سُبْحَـٰنَهُۥ ۙ", transliteration: "sub'ḥānahu", meaning: { en: "Glory be to Him", ur: "Glory be طرف اس", ar: "سبحنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَهُم", transliteration: "walahum", meaning: { en: "And for them", ur: "اور کے لیے انہیں", ar: "ولهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "(is) what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَشْتَهُونَ", transliteration: "yashtahūna", meaning: { en: "they desire", ur: "وہ لوگ desire", ar: "يشتهون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' }
        ],
    }
  },
  58: {
    ayahNumber: 58,
    text: "وَإِذَا بُشِّرَ أَحَدُهُم بِٱلْأُنثَىٰ ظَلَّ وَجْهُهُۥ مُسْوَدًّۭا وَهُوَ كَظِيمٌۭ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when", ar: "وإذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بُشِّرَ", transliteration: "bushira", meaning: { en: "is given good news", ur: "ہے given اچھا news", ar: "بشر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَحَدُهُم", transliteration: "aḥaduhum", meaning: { en: "(to) one of them", ur: "طرف one of انہیں", ar: "أحدهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْأُنثَىٰ", transliteration: "bil-unthā", meaning: { en: "of a female", ur: "of a female", ar: "بلأنثى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ظَلَّ", transliteration: "ẓalla", meaning: { en: "turns", ur: "turns", ar: "ظل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "وَجْهُهُۥ", transliteration: "wajhuhu", meaning: { en: "his face", ur: "his face", ar: "وجهه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُسْوَدًّۭا", transliteration: "mus'waddan", meaning: { en: "dark", ur: "dark", ar: "مسودا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and he", ur: "اور وہ", ar: "وهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "كَظِيمٌۭ", transliteration: "kaẓīmun", meaning: { en: "suppresses grief", ur: "suppresses grief", ar: "كظيم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'فعل + فاعل' }
        ],
    }
  },
  59: {
    ayahNumber: 59,
    text: "يَتَوَٰرَىٰ مِنَ ٱلْقَوْمِ مِن سُوٓءِ مَا بُشِّرَ بِهِۦٓ ۚ أَيُمْسِكُهُۥ عَلَىٰ هُونٍ أَمْ يَدُسُّهُۥ فِى ٱلتُّرَابِ ۗ أَلَا سَآءَ مَا يَحْكُمُونَ",
    words: [
      { arabic: "يَتَوَٰرَىٰ", transliteration: "yatawārā", meaning: { en: "He hides himself", ur: "وہ hides himself", ar: "يتورى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", root: "ق و م", meaning: { en: "the people", ur: "the لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "(because) of", ur: "because of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سُوٓءِ", transliteration: "sūi", meaning: { en: "the evil", ur: "the برا", ar: "سوء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "of what", ur: "of کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "بُشِّرَ", transliteration: "bushira", meaning: { en: "he has been given good news", ur: "وہ has been given اچھا news", ar: "بشر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦٓ ۚ", transliteration: "bihi", meaning: { en: "about", ur: "about", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَيُمْسِكُهُۥ", transliteration: "ayum'sikuhu", meaning: { en: "Should he keep it", ur: "Should وہ keep یہ", ar: "أيمسكه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "in", ur: "میں", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هُونٍ", transliteration: "hūnin", meaning: { en: "humiliation", ur: "humiliation", ar: "هون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَدُسُّهُۥ", transliteration: "yadussuhu", meaning: { en: "bury it", ur: "bury یہ", ar: "يدسه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلتُّرَابِ ۗ", transliteration: "l-turābi", meaning: { en: "the dust", ur: "the dust", ar: "لتراب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَا", transliteration: "alā", meaning: { en: "Unquestionably", ur: "Unquestionably", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سَآءَ", transliteration: "sāa", meaning: { en: "evil", ur: "برا", ar: "ساء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(is) what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَحْكُمُونَ", transliteration: "yaḥkumūna", meaning: { en: "they decide", ur: "وہ لوگ decide", ar: "يحكمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'موصول + صلة' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'جار + مجرور' },
          { from: 18, to: 19, label: 'موصول + صلة' }
        ],
    }
  },
  60: {
    ayahNumber: 60,
    text: "لِلَّذِينَ لَا يُؤْمِنُونَ بِٱلْـَٔاخِرَةِ مَثَلُ ٱلسَّوْءِ ۖ وَلِلَّهِ ٱلْمَثَلُ ٱلْأَعْلَىٰ ۚ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
    words: [
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "For those who", ur: "کے لیے those جو", ar: "للذين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", root: "أ خ ر", meaning: { en: "in the Hereafter", ur: "میں the Hereafter", ar: "بلاخرة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَثَلُ", transliteration: "mathalu", meaning: { en: "(is) a similitude", ur: "ہے a similitude", ar: "مثل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّوْءِ ۖ", transliteration: "l-sawi", meaning: { en: "(of) the evil", ur: "of the برا", ar: "لسوء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَلِلَّهِ", transliteration: "walillahi", meaning: { en: "and for Allah", ur: "اور کے لیے اللہ", ar: "ولله" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "ٱلْمَثَلُ", transliteration: "l-mathalu", meaning: { en: "(is) the similitude", ur: "ہے the similitude", ar: "لمثل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَعْلَىٰ ۚ", transliteration: "l-aʿlā", meaning: { en: "the Highest", ur: "the Highest", ar: "لأعلى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He", ur: "اور وہ", ar: "وهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", meaning: { en: "(is) the All-Mighty", ur: "ہے the All-Mighty", ar: "لعزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْحَكِيمُ", transliteration: "l-ḥakīmu", root: "ح ك م", meaning: { en: "All-Wise", ur: "حکمت والا", ar: "لحكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'نفی + فعل' },
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'موصوف + صفت' }
        ],
    }
  },
  61: {
    ayahNumber: 61,
    text: "وَلَوْ يُؤَاخِذُ ٱللَّهُ ٱلنَّاسَ بِظُلْمِهِم مَّا تَرَكَ عَلَيْهَا مِن دَآبَّةٍۢ وَلَـٰكِن يُؤَخِّرُهُمْ إِلَىٰٓ أَجَلٍۢ مُّسَمًّۭى ۖ فَإِذَا جَآءَ أَجَلُهُمْ لَا يَسْتَـْٔخِرُونَ سَاعَةًۭ ۖ وَلَا يَسْتَقْدِمُونَ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if", ar: "ولو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُؤَاخِذُ", transliteration: "yuākhidhu", meaning: { en: "Allah were to seize", ur: "اللہ تھے طرف seize", ar: "يؤاخذ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah were to seize", ur: "اللہ تھے طرف seize", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", meaning: { en: "the mankind", ur: "the mankind", ar: "لناس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِظُلْمِهِم", transliteration: "biẓul'mihim", meaning: { en: "for their wrongdoing", ur: "کے لیے their wrongdoing", ar: "بظلمهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَرَكَ", transliteration: "taraka", meaning: { en: "He (would) have left", ur: "وہ would have left", ar: "ترك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "upon it", ur: "upon یہ", ar: "عليها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دَآبَّةٍۢ", transliteration: "dābbatin", meaning: { en: "moving creature", ur: "moving creature", ar: "دابة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُؤَخِّرُهُمْ", transliteration: "yu-akhiruhum", meaning: { en: "He defers them", ur: "وہ defers انہیں", ar: "يؤخرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰٓ", transliteration: "ilā", meaning: { en: "for", ur: "کے لیے", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَجَلٍۢ", transliteration: "ajalin", meaning: { en: "a term", ur: "a term", ar: "أجل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُّسَمًّۭى ۖ", transliteration: "musamman", meaning: { en: "appointed", ur: "appointed", ar: "مسمى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "Then when", ur: "پھر when", ar: "فإذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", meaning: { en: "comes", ur: "آتا ہے", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "أَجَلُهُمْ", transliteration: "ajaluhum", meaning: { en: "their terms", ur: "their terms", ar: "أجلهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَسْتَـْٔخِرُونَ", transliteration: "yastakhirūna", meaning: { en: "they (will) remain behind", ur: "وہ لوگ گا/گے remain behind", ar: "يستخرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سَاعَةًۭ ۖ", transliteration: "sāʿatan", meaning: { en: "an hour", ur: "an hour", ar: "ساعة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "يَسْتَقْدِمُونَ", transliteration: "yastaqdimūna", meaning: { en: "they can advance (it)", ur: "وہ لوگ can advance یہ", ar: "يستقدمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'فعل + فاعل' },
          { from: 19, to: 20, label: 'نفی + فعل' },
          { from: 20, to: 21, label: 'فعل + فاعل' },
          { from: 22, to: 23, label: 'نفی + فعل' }
        ],
    }
  },
  62: {
    ayahNumber: 62,
    text: "وَيَجْعَلُونَ لِلَّهِ مَا يَكْرَهُونَ وَتَصِفُ أَلْسِنَتُهُمُ ٱلْكَذِبَ أَنَّ لَهُمُ ٱلْحُسْنَىٰ ۖ لَا جَرَمَ أَنَّ لَهُمُ ٱلنَّارَ وَأَنَّهُم مُّفْرَطُونَ",
    words: [
      { arabic: "وَيَجْعَلُونَ", transliteration: "wayajʿalūna", meaning: { en: "And they assign", ur: "اور وہ لوگ assign", ar: "ويجعلون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", root: "أ ل ه", meaning: { en: "to Allah", ur: "طرف اللہ", ar: "لله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَكْرَهُونَ", transliteration: "yakrahūna", meaning: { en: "they dislike", ur: "وہ لوگ dislike", ar: "يكرهون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَتَصِفُ", transliteration: "wataṣifu", meaning: { en: "and assert", ur: "اور assert", ar: "وتصف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلْسِنَتُهُمُ", transliteration: "alsinatuhumu", meaning: { en: "their tongues", ur: "their tongues", ar: "ألسنتهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْكَذِبَ", transliteration: "l-kadhiba", meaning: { en: "the lie", ur: "the lie", ar: "لكذب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلْحُسْنَىٰ ۖ", transliteration: "l-ḥus'nā", meaning: { en: "(is) the best", ur: "ہے the best", ar: "لحسنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "No", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "جَرَمَ", transliteration: "jarama", meaning: { en: "doubt", ur: "doubt", ar: "جرم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلنَّارَ", transliteration: "l-nāra", root: "ن و ر", meaning: { en: "(is) the Fire", ur: "آگ", ar: "لنار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنَّهُم", transliteration: "wa-annahum", meaning: { en: "and that they", ur: "اور کہ/وہ وہ لوگ", ar: "وأنهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّفْرَطُونَ", transliteration: "muf'raṭūna", meaning: { en: "(will) be abandoned", ur: "گا/گے be abandoned", ar: "مفرطون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'موصول + صلة' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'جار + مجرور' }
        ],
    }
  },
  63: {
    ayahNumber: 63,
    text: "تَٱللَّهِ لَقَدْ أَرْسَلْنَآ إِلَىٰٓ أُمَمٍۢ مِّن قَبْلِكَ فَزَيَّنَ لَهُمُ ٱلشَّيْطَـٰنُ أَعْمَـٰلَهُمْ فَهُوَ وَلِيُّهُمُ ٱلْيَوْمَ وَلَهُمْ عَذَابٌ أَلِيمٌۭ",
    words: [
      { arabic: "تَٱللَّهِ", transliteration: "tal-lahi", meaning: { en: "By Allah", ur: "By اللہ", ar: "تلله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَقَدْ", transliteration: "laqad", meaning: { en: "certainly", ur: "یقیناً", ar: "لقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "أَرْسَلْنَآ", transliteration: "arsalnā", meaning: { en: "We have sent", ur: "ہم have بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰٓ", transliteration: "ilā", meaning: { en: "to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أُمَمٍۢ", transliteration: "umamin", meaning: { en: "nations", ur: "nations", ar: "أمم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before you", ur: "before تم", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلِكَ", transliteration: "qablika", meaning: { en: "before you", ur: "before تم", ar: "قبلك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَزَيَّنَ", transliteration: "fazayyana", meaning: { en: "but made fair-seeming", ur: "لیکن بنایا fair-seeming", ar: "فزين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "to them", ur: "طرف انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", meaning: { en: "the Shaitaan", ur: "the Shaitaan", ar: "لشيطن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْمَـٰلَهُمْ", transliteration: "aʿmālahum", meaning: { en: "their deeds", ur: "their deeds", ar: "أعملهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَهُوَ", transliteration: "fahuwa", meaning: { en: "So he", ur: "So وہ", ar: "فهو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلِيُّهُمُ", transliteration: "waliyyuhumu", meaning: { en: "(is) their ally", ur: "ہے their ally", ar: "وليهم" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", root: "ي و م", meaning: { en: "today", ur: "today", ar: "ليوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور کے لیے انہیں", ar: "ولهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "(is) a punishment", ur: "ہے a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلِيمٌۭ", transliteration: "alīmun", meaning: { en: "painful", ur: "painful", ar: "أليم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'فعل + فاعل' }
        ],
    }
  },
  64: {
    ayahNumber: 64,
    text: "وَمَآ أَنزَلْنَا عَلَيْكَ ٱلْكِتَـٰبَ إِلَّا لِتُبَيِّنَ لَهُمُ ٱلَّذِى ٱخْتَلَفُوا۟ فِيهِ ۙ وَهُدًۭى وَرَحْمَةًۭ لِّقَوْمٍۢ يُؤْمِنُونَ",
    words: [
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنزَلْنَا", transliteration: "anzalnā", meaning: { en: "We revealed", ur: "ہم revealed", ar: "أنزلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "to you", ur: "طرف تم", ar: "عليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", root: "ك ت ب", meaning: { en: "the Book", ur: "the کتاب", ar: "لكتب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتُبَيِّنَ", transliteration: "litubayyina", meaning: { en: "that you make clear", ur: "کہ/وہ تم بناتے ہو واضح", ar: "لتبين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "to them", ur: "طرف انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "that which", ur: "کہ/وہ جو", ar: "لذى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱخْتَلَفُوا۟", transliteration: "ikh'talafū", meaning: { en: "they differed", ur: "وہ لوگ differed", ar: "ختلفوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِ ۙ", transliteration: "fīhi", meaning: { en: "in it", ur: "میں یہ", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَهُدًۭى", transliteration: "wahudan", meaning: { en: "and (as) a guidance", ur: "اور as a guidance", ar: "وهدى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَحْمَةًۭ", transliteration: "waraḥmatan", root: "ر ح م", meaning: { en: "and mercy", ur: "اور رحمت", ar: "ورحمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", root: "ق و م", meaning: { en: "for a people", ur: "کے لیے a لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "who believe", ur: "جو ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'جار + مجرور' }
        ],
    }
  },
  65: {
    ayahNumber: 65,
    text: "وَٱللَّهُ أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَحْيَا بِهِ ٱلْأَرْضَ بَعْدَ مَوْتِهَآ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ لِّقَوْمٍۢ يَسْمَعُونَ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", root: "ن ز ل", meaning: { en: "has sent down", ur: "has بھیجا down", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", meaning: { en: "the sky", ur: "the sky", ar: "لسماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآءًۭ", transliteration: "māan", meaning: { en: "water", ur: "پانی", ar: "ماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَحْيَا", transliteration: "fa-aḥyā", meaning: { en: "then gives life", ur: "پھر دیتا ہے life", ar: "فأحيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "by it", ur: "by یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", root: "أ ر ض", meaning: { en: "(to) the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَوْتِهَآ ۚ", transliteration: "mawtihā", root: "م و ت", meaning: { en: "its death", ur: "its death", ar: "موتها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَةًۭ", transliteration: "laāyatan", meaning: { en: "(is) surely a Sign", ur: "ہے یقیناً a نشانی", ar: "لاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", root: "ق و م", meaning: { en: "for a people", ur: "کے لیے a لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", meaning: { en: "who listen", ur: "جو listen", ar: "يسمعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
        ],
    }
  },
  67: {
    ayahNumber: 67,
    text: "وَمِن ثَمَرَٰتِ ٱلنَّخِيلِ وَٱلْأَعْنَـٰبِ تَتَّخِذُونَ مِنْهُ سَكَرًۭا وَرِزْقًا حَسَنًا ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ لِّقَوْمٍۢ يَعْقِلُونَ",
    words: [
      { arabic: "وَمِن", transliteration: "wamin", meaning: { en: "And from", ur: "اور سے", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثَمَرَٰتِ", transliteration: "thamarāti", meaning: { en: "fruits", ur: "پھل", ar: "ثمرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّخِيلِ", transliteration: "l-nakhīli", meaning: { en: "the date-palm", ur: "the date-palm", ar: "لنخيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَعْنَـٰبِ", transliteration: "wal-aʿnābi", meaning: { en: "and the grapes", ur: "اور the grapes", ar: "ولأعنب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَتَّخِذُونَ", transliteration: "tattakhidhūna", meaning: { en: "you take", ur: "تم take", ar: "تتخذون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُ", transliteration: "min'hu", meaning: { en: "from it", ur: "سے یہ", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَكَرًۭا", transliteration: "sakaran", meaning: { en: "intoxicant", ur: "intoxicant", ar: "سكرا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرِزْقًا", transliteration: "wariz'qan", meaning: { en: "and a provision", ur: "اور a رزق", ar: "ورزقا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَسَنًا ۗ", transliteration: "ḥasanan", root: "ح س ن", meaning: { en: "good", ur: "اچھا", ar: "حسنا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَةًۭ", transliteration: "laāyatan", meaning: { en: "(is) surely a Sign", ur: "ہے یقیناً a نشانی", ar: "لاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", root: "ق و م", meaning: { en: "for a people", ur: "کے لیے a لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", meaning: { en: "who use reason", ur: "جو use reason", ar: "يعقلون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    }
  },
  70: {
    ayahNumber: 70,
    text: "وَٱللَّهُ خَلَقَكُمْ ثُمَّ يَتَوَفَّىٰكُمْ ۚ وَمِنكُم مَّن يُرَدُّ إِلَىٰٓ أَرْذَلِ ٱلْعُمُرِ لِكَىْ لَا يَعْلَمَ بَعْدَ عِلْمٍۢ شَيْـًٔا ۚ إِنَّ ٱللَّهَ عَلِيمٌۭ قَدِيرٌۭ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقَكُمْ", transliteration: "khalaqakum", root: "خ ل ق", meaning: { en: "created you", ur: "پیدا کیا تم", ar: "خلقكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَوَفَّىٰكُمْ ۚ", transliteration: "yatawaffākum", meaning: { en: "will cause you to die", ur: "گا/گے cause تم طرف die", ar: "يتوفىكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمِنكُم", transliteration: "waminkum", meaning: { en: "And among you", ur: "اور among تم", ar: "ومنكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "(is one) who", ur: "جو", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُرَدُّ", transliteration: "yuraddu", meaning: { en: "is sent back", ur: "ہے بھیجا back", ar: "يرد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰٓ", transliteration: "ilā", meaning: { en: "to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَرْذَلِ", transliteration: "ardhali", meaning: { en: "the worst", ur: "the worst", ar: "أرذل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعُمُرِ", transliteration: "l-ʿumuri", meaning: { en: "(of) the age", ur: "of the age", ar: "لعمر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِكَىْ", transliteration: "likay", meaning: { en: "so that", ur: "so کہ/وہ", ar: "لكى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمَ", transliteration: "yaʿlama", meaning: { en: "he will know", ur: "وہ گا/گے جانتے ہو", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِلْمٍۢ", transliteration: "ʿil'min", meaning: { en: "knowledge", ur: "knowledge", ar: "علم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَيْـًٔا ۚ", transliteration: "shayan", meaning: { en: "a thing", ur: "a thing", ar: "شيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", meaning: { en: "(is) All-Knowing", ur: "سب جاننے والا", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "قَدِيرٌۭ", transliteration: "qadīrun", root: "ق د ر", meaning: { en: "All-Powerful", ur: "قدرت والا", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'نفی + فعل' },
          { from: 13, to: 14, label: 'فعل + فاعل' },
          { from: 17, to: 18, label: 'فعل + فاعل' },
          { from: 18, to: 19, label: 'موصوف + صفت' }
        ],
    }
  },
  71: {
    ayahNumber: 71,
    text: "وَٱللَّهُ فَضَّلَ بَعْضَكُمْ عَلَىٰ بَعْضٍۢ فِى ٱلرِّزْقِ ۚ فَمَا ٱلَّذِينَ فُضِّلُوا۟ بِرَآدِّى رِزْقِهِمْ عَلَىٰ مَا مَلَكَتْ أَيْمَـٰنُهُمْ فَهُمْ فِيهِ سَوَآءٌ ۚ أَفَبِنِعْمَةِ ٱللَّهِ يَجْحَدُونَ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَضَّلَ", transliteration: "faḍḍala", root: "ف ض ل", meaning: { en: "has favored", ur: "has favored", ar: "فضل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضَكُمْ", transliteration: "baʿḍakum", meaning: { en: "some of you", ur: "some of تم", ar: "بعضكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "over", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْضٍۢ", transliteration: "baʿḍin", meaning: { en: "others", ur: "others", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلرِّزْقِ ۚ", transliteration: "l-riz'qi", meaning: { en: "[the] provision", ur: "[the] رزق", ar: "لرزق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "But not", ur: "لیکن نہیں", ar: "فما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فُضِّلُوا۟", transliteration: "fuḍḍilū", meaning: { en: "were favored", ur: "تھے favored", ar: "فضلوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِرَآدِّى", transliteration: "birāddī", meaning: { en: "would hand over", ur: "would ہاتھ over", ar: "برادى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رِزْقِهِمْ", transliteration: "riz'qihim", meaning: { en: "their provision", ur: "their رزق", ar: "رزقهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "طرف", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whom", ur: "whom", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "مَلَكَتْ", transliteration: "malakat", meaning: { en: "possess", ur: "possess", ar: "ملكت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيْمَـٰنُهُمْ", transliteration: "aymānuhum", meaning: { en: "their right hands", ur: "their صحیح ہاتھ", ar: "أيمنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَهُمْ", transliteration: "fahum", meaning: { en: "so (that) they", ur: "so کہ/وہ وہ لوگ", ar: "فهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "(are) in it", ur: "ہیں میں یہ", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَوَآءٌ ۚ", transliteration: "sawāon", meaning: { en: "equal", ur: "equal", ar: "سواء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَبِنِعْمَةِ", transliteration: "afabiniʿ'mati", meaning: { en: "Then is it the Favor", ur: "پھر ہے یہ the Favor", ar: "أفبنعمة" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "of Allah", ur: "of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَجْحَدُونَ", transliteration: "yajḥadūna", meaning: { en: "they reject", ur: "وہ لوگ reject", ar: "يجحدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'جار + مجرور' },
          { from: 16, to: 17, label: 'فعل + فاعل' },
          { from: 18, to: 19, label: 'جار + مجرور' },
          { from: 20, to: 21, label: 'فعل + فاعل' }
        ],
    }
  },
  72: {
    ayahNumber: 72,
    text: "وَٱللَّهُ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا وَجَعَلَ لَكُم مِّنْ أَزْوَٰجِكُم بَنِينَ وَحَفَدَةًۭ وَرَزَقَكُم مِّنَ ٱلطَّيِّبَـٰتِ ۚ أَفَبِٱلْبَـٰطِلِ يُؤْمِنُونَ وَبِنِعْمَتِ ٱللَّهِ هُمْ يَكْفُرُونَ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", root: "ج ع ل", meaning: { en: "(has) made", ur: "بنایا", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنفُسِكُمْ", transliteration: "anfusikum", root: "ن ف س", meaning: { en: "yourselves", ur: "yourselves", ar: "أنفسكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَزْوَٰجًۭا", transliteration: "azwājan", meaning: { en: "spouses", ur: "spouses", ar: "أزوجا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", root: "ج ع ل", meaning: { en: "and has made", ur: "اور has بنایا", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَزْوَٰجِكُم", transliteration: "azwājikum", meaning: { en: "your spouses", ur: "تمہارا spouses", ar: "أزوجكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَنِينَ", transliteration: "banīna", meaning: { en: "sons", ur: "بیٹے", ar: "بنين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَحَفَدَةًۭ", transliteration: "waḥafadatan", meaning: { en: "and grandsons", ur: "اور grandsons", ar: "وحفدة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَزَقَكُم", transliteration: "warazaqakum", root: "ر ز ق", meaning: { en: "and has provided for you", ur: "اور has provided کے لیے تم", ar: "ورزقكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلطَّيِّبَـٰتِ ۚ", transliteration: "l-ṭayibāti", meaning: { en: "the good things", ur: "the اچھا things", ar: "لطيبت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَبِٱلْبَـٰطِلِ", transliteration: "afabil-bāṭili", meaning: { en: "Then in falsehood do", ur: "پھر میں falsehood کرتے ہو", ar: "أفبلبطل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "they believe", ur: "وہ لوگ ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَبِنِعْمَتِ", transliteration: "wabiniʿ'mati", meaning: { en: "and the Favor", ur: "اور the Favor", ar: "وبنعمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "of Allah", ur: "of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يَكْفُرُونَ", transliteration: "yakfurūna", root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve", ar: "يكفرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 17, to: 18, label: 'فعل + فاعل' },
          { from: 18, to: 19, label: 'مضاف + مضاف إليه' }
        ],
    }
  },
  73: {
    ayahNumber: 73,
    text: "وَيَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَمْلِكُ لَهُمْ رِزْقًۭا مِّنَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ شَيْـًۭٔا وَلَا يَسْتَطِيعُونَ",
    words: [
      { arabic: "وَيَعْبُدُونَ", transliteration: "wayaʿbudūna", root: "ع ب د", meaning: { en: "And they worship", ur: "اور وہ لوگ عبادت کرو", ar: "ويعبدون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "other than", ur: "other than", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "other than", ur: "other than", ar: "دون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "which", ur: "جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَمْلِكُ", transliteration: "yamliku", meaning: { en: "possesses", ur: "possesses", ar: "يملك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "رِزْقًۭا", transliteration: "riz'qan", meaning: { en: "any provision", ur: "any رزق", ar: "رزقا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں", ar: "لسموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور the زمین", ar: "ولأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَيْـًۭٔا", transliteration: "shayan", meaning: { en: "[anything]", ur: "[anything]", ar: "شيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", meaning: { en: "they are able", ur: "وہ لوگ ہیں able", ar: "يستطيعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'نفی + فعل' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'نفی + فعل' }
        ],
    }
  },
  74: {
    ayahNumber: 74,
    text: "فَلَا تَضْرِبُوا۟ لِلَّهِ ٱلْأَمْثَالَ ۚ إِنَّ ٱللَّهَ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
    words: [
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "So (do) not", ur: "So کرتے ہو نہیں", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَضْرِبُوا۟", transliteration: "taḍribū", meaning: { en: "put forth", ur: "put forth", ar: "تضربوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", root: "أ ل ه", meaning: { en: "for Allah", ur: "کے لیے اللہ", ar: "لله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَمْثَالَ ۚ", transliteration: "l-amthāla", meaning: { en: "the similitude", ur: "the similitude", ar: "لأمثال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "knows", ur: "جانتا ہے", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَنتُمْ", transliteration: "wa-antum", meaning: { en: "and you", ur: "اور تم", ar: "وأنتم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "know", ur: "جانتے ہو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'نفی + فعل' }
        ],
    }
  },
  75: {
    ayahNumber: 75,
    text: "۞ ضَرَبَ ٱللَّهُ مَثَلًا عَبْدًۭا مَّمْلُوكًۭا لَّا يَقْدِرُ عَلَىٰ شَىْءٍۢ وَمَن رَّزَقْنَـٰهُ مِنَّا رِزْقًا حَسَنًۭا فَهُوَ يُنفِقُ مِنْهُ سِرًّۭا وَجَهْرًا ۖ هَلْ يَسْتَوُۥنَ ۚ ٱلْحَمْدُ لِلَّهِ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ",
    words: [
      { arabic: "۞ ضَرَبَ", transliteration: "ḍaraba", meaning: { en: "Allah sets forth", ur: "اللہ sets forth", ar: "۞ ضرب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah sets forth", ur: "اللہ sets forth", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَثَلًا", transliteration: "mathalan", meaning: { en: "the example", ur: "the example", ar: "مثلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَبْدًۭا", transliteration: "ʿabdan", meaning: { en: "(of) a slave", ur: "of a slave", ar: "عبدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّمْلُوكًۭا", transliteration: "mamlūkan", meaning: { en: "(who is) owned", ur: "جو ہے owned", ar: "مملوكا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقْدِرُ", transliteration: "yaqdiru", meaning: { en: "he has power", ur: "وہ has power", ar: "يقدر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "anything", ur: "anything", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "and (one) whom", ur: "اور one whom", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّزَقْنَـٰهُ", transliteration: "razaqnāhu", meaning: { en: "We provided him", ur: "ہم provided اسے", ar: "رزقنه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَّا", transliteration: "minnā", meaning: { en: "from Us", ur: "سے Us", ar: "منا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رِزْقًا", transliteration: "riz'qan", meaning: { en: "a provision", ur: "a رزق", ar: "رزقا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَسَنًۭا", transliteration: "ḥasanan", root: "ح س ن", meaning: { en: "good", ur: "اچھا", ar: "حسنا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "فَهُوَ", transliteration: "fahuwa", meaning: { en: "so he", ur: "so وہ", ar: "فهو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُنفِقُ", transliteration: "yunfiqu", meaning: { en: "spends", ur: "spends", ar: "ينفق" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُ", transliteration: "min'hu", meaning: { en: "from it", ur: "سے یہ", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سِرًّۭا", transliteration: "sirran", meaning: { en: "secretly", ur: "secretly", ar: "سرا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَهْرًا ۖ", transliteration: "wajahran", meaning: { en: "and publicly", ur: "اور publicly", ar: "وجهرا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Can", ur: "Can", ar: "هل" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "يَسْتَوُۥنَ ۚ", transliteration: "yastawūna", meaning: { en: "they be equal", ur: "وہ لوگ be equal", ar: "يستون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَمْدُ", transliteration: "l-ḥamdu", root: "ح م د", meaning: { en: "All praise", ur: "All praise", ar: "لحمد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّهِ ۚ", transliteration: "lillahi", meaning: { en: "(is) for Allah", ur: "ہے کے لیے اللہ", ar: "لله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay", ar: "بل" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَكْثَرُهُمْ", transliteration: "aktharuhum", meaning: { en: "but most of them", ur: "لیکن most of انہیں", ar: "أكثرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جانتے ہو", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'فعل + فاعل' },
          { from: 17, to: 18, label: 'جار + مجرور' },
          { from: 21, to: 22, label: 'فعل + فاعل' },
          { from: 26, to: 27, label: 'نفی + فعل' }
        ],
    }
  },
  76: {
    ayahNumber: 76,
    text: "وَضَرَبَ ٱللَّهُ مَثَلًۭا رَّجُلَيْنِ أَحَدُهُمَآ أَبْكَمُ لَا يَقْدِرُ عَلَىٰ شَىْءٍۢ وَهُوَ كَلٌّ عَلَىٰ مَوْلَىٰهُ أَيْنَمَا يُوَجِّههُّ لَا يَأْتِ بِخَيْرٍ ۖ هَلْ يَسْتَوِى هُوَ وَمَن يَأْمُرُ بِٱلْعَدْلِ ۙ وَهُوَ عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    words: [
      { arabic: "وَضَرَبَ", transliteration: "waḍaraba", meaning: { en: "And Allah sets forth", ur: "اور اللہ sets forth", ar: "وضرب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "And Allah sets forth", ur: "اور اللہ sets forth", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَثَلًۭا", transliteration: "mathalan", meaning: { en: "an example", ur: "an example", ar: "مثلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّجُلَيْنِ", transliteration: "rajulayni", meaning: { en: "(of) two men", ur: "of two مرد", ar: "رجلين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَحَدُهُمَآ", transliteration: "aḥaduhumā", meaning: { en: "one of them", ur: "one of انہیں", ar: "أحدهما" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَبْكَمُ", transliteration: "abkamu", meaning: { en: "(is) dumb", ur: "ہے dumb", ar: "أبكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَقْدِرُ", transliteration: "yaqdiru", meaning: { en: "he has power", ur: "وہ has power", ar: "يقدر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "anything", ur: "anything", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "while he", ur: "while وہ", ar: "وهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "كَلٌّ", transliteration: "kallun", meaning: { en: "(is) a burden", ur: "ہے a burden", ar: "كل" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَوْلَىٰهُ", transliteration: "mawlāhu", meaning: { en: "his master", ur: "his master", ar: "مولىه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيْنَمَا", transliteration: "aynamā", meaning: { en: "Wherever", ur: "Wherever", ar: "أينما" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُوَجِّههُّ", transliteration: "yuwajjihhu", meaning: { en: "he directs him", ur: "وہ directs اسے", ar: "يوجهه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَأْتِ", transliteration: "yati", meaning: { en: "he comes", ur: "وہ آتا ہے", ar: "يأت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِخَيْرٍ ۖ", transliteration: "bikhayrin", root: "خ ي ر", meaning: { en: "with any good", ur: "کے ساتھ any اچھا", ar: "بخير" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Is", ur: "ہے", ar: "هل" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "يَسْتَوِى", transliteration: "yastawī", meaning: { en: "equal", ur: "equal", ar: "يستوى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "and (the one) who", ur: "اور the one جو", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْمُرُ", transliteration: "yamuru", meaning: { en: "commands", ur: "commands", ar: "يأمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْعَدْلِ ۙ", transliteration: "bil-ʿadli", meaning: { en: "[of] justice", ur: "[of] justice", ar: "بلعدل" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and he", ur: "اور وہ", ar: "وهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "(is) on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صِرَٰطٍۢ", transliteration: "ṣirāṭin", root: "ص ر ط", meaning: { en: "a path", ur: "a راستہ", ar: "صرط" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّسْتَقِيمٍۢ", transliteration: "mus'taqīmin", meaning: { en: "straight", ur: "سیدھا", ar: "مستقيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 7, to: 8, label: 'نفی + فعل' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 13, to: 14, label: 'جار + مجرور' },
          { from: 17, to: 18, label: 'نفی + فعل' },
          { from: 27, to: 28, label: 'جار + مجرور' },
          { from: 28, to: 29, label: 'موصوف + صفت' }
        ],
    }
  },
  77: {
    ayahNumber: 77,
    text: "وَلِلَّهِ غَيْبُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَمَآ أَمْرُ ٱلسَّاعَةِ إِلَّا كَلَمْحِ ٱلْبَصَرِ أَوْ هُوَ أَقْرَبُ ۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ",
    words: [
      { arabic: "وَلِلَّهِ", transliteration: "walillahi", meaning: { en: "And to Allah (belongs)", ur: "اور طرف اللہ belongs", ar: "ولله" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "غَيْبُ", transliteration: "ghaybu", meaning: { en: "(the) unseen", ur: "the unseen", ar: "غيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", root: "س م و", meaning: { en: "(of) the heavens", ur: "آسمانوں", ar: "لسموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ ۚ", transliteration: "wal-arḍi", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور the زمین", ar: "ولأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْرُ", transliteration: "amru", meaning: { en: "(is the) matter", ur: "ہے the matter", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّاعَةِ", transliteration: "l-sāʿati", meaning: { en: "(of) the Hour", ur: "of the Hour", ar: "لساعة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَلَمْحِ", transliteration: "kalamḥi", meaning: { en: "as a twinkling", ur: "as a twinkling", ar: "كلمح" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْبَصَرِ", transliteration: "l-baṣari", meaning: { en: "(of) the eye", ur: "of the آنکھ", ar: "لبصر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it", ur: "یہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "أَقْرَبُ ۚ", transliteration: "aqrabu", meaning: { en: "(is) nearer", ur: "ہے nearer", ar: "أقرب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "thing", ur: "thing", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدِيرٌۭ", transliteration: "qadīrun", root: "ق د ر", meaning: { en: "(is) All-Powerful", ur: "قدرت والا", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'فعل + فاعل' },
          { from: 16, to: 17, label: 'جار + مجرور' },
          { from: 18, to: 19, label: 'موصوف + صفت' }
        ],
    }
  },
  79: {
    ayahNumber: 79,
    text: "أَلَمْ يَرَوْا۟ إِلَى ٱلطَّيْرِ مُسَخَّرَٰتٍۢ فِى جَوِّ ٱلسَّمَآءِ مَا يُمْسِكُهُنَّ إِلَّا ٱللَّهُ ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يُؤْمِنُونَ",
    words: [
      { arabic: "أَلَمْ", transliteration: "alam", meaning: { en: "Do not", ur: "کرتے ہو نہیں", ar: "ألم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَرَوْا۟", transliteration: "yaraw", meaning: { en: "they see", ur: "وہ لوگ دیکھتے ہو", ar: "يروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "towards", ur: "towards", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلطَّيْرِ", transliteration: "l-ṭayri", meaning: { en: "the birds", ur: "the birds", ar: "لطير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُسَخَّرَٰتٍۢ", transliteration: "musakharātin", meaning: { en: "controlled", ur: "controlled", ar: "مسخرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "جَوِّ", transliteration: "jawwi", meaning: { en: "the midst", ur: "the midst", ar: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", meaning: { en: "(of) the sky", ur: "of the sky", ar: "لسماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "None", ur: "None", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُمْسِكُهُنَّ", transliteration: "yum'sikuhunna", meaning: { en: "holds them up", ur: "holds انہیں up", ar: "يمسكهن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ ۗ", transliteration: "l-lahu", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", meaning: { en: "(are) Signs", ur: "نشانیاں", ar: "لايت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", root: "ق و م", meaning: { en: "for a people", ur: "کے لیے a لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "who believe", ur: "جو ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'نفی + فعل' },
          { from: 10, to: 11, label: 'فعل + فاعل' }
        ],
    }
  },
  80: {
    ayahNumber: 80,
    text: "وَٱللَّهُ جَعَلَ لَكُم مِّنۢ بُيُوتِكُمْ سَكَنًۭا وَجَعَلَ لَكُم مِّن جُلُودِ ٱلْأَنْعَـٰمِ بُيُوتًۭا تَسْتَخِفُّونَهَا يَوْمَ ظَعْنِكُمْ وَيَوْمَ إِقَامَتِكُمْ ۙ وَمِنْ أَصْوَافِهَا وَأَوْبَارِهَا وَأَشْعَارِهَآ أَثَـٰثًۭا وَمَتَـٰعًا إِلَىٰ حِينٍۢ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", root: "ج ع ل", meaning: { en: "(has) made", ur: "بنایا", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنۢ", transliteration: "min", meaning: { en: "[from]", ur: "[from]", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بُيُوتِكُمْ", transliteration: "buyūtikum", meaning: { en: "your homes", ur: "تمہارا گھر", ar: "بيوتكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَكَنًۭا", transliteration: "sakanan", meaning: { en: "a resting place", ur: "a resting place", ar: "سكنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", root: "ج ع ل", meaning: { en: "and made", ur: "اور بنایا", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جُلُودِ", transliteration: "julūdi", meaning: { en: "the hides", ur: "the hides", ar: "جلود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَنْعَـٰمِ", transliteration: "l-anʿāmi", meaning: { en: "(of) the cattle", ur: "of the مویشی", ar: "لأنعم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بُيُوتًۭا", transliteration: "buyūtan", meaning: { en: "tents", ur: "tents", ar: "بيوتا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَسْتَخِفُّونَهَا", transliteration: "tastakhiffūnahā", meaning: { en: "which you find light", ur: "جو تم find light", ar: "تستخفونها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(on) the day", ur: "پر the دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَعْنِكُمْ", transliteration: "ẓaʿnikum", meaning: { en: "(of) your travel", ur: "of تمہارا travel", ar: "ظعنكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَوْمَ", transliteration: "wayawma", root: "ي و م", meaning: { en: "and the day", ur: "اور the دن", ar: "ويوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِقَامَتِكُمْ ۙ", transliteration: "iqāmatikum", meaning: { en: "(of) your encampment", ur: "of تمہارا encampment", ar: "إقامتكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "and from", ur: "اور سے", ar: "ومن" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "أَصْوَافِهَا", transliteration: "aṣwāfihā", meaning: { en: "their wool", ur: "their wool", ar: "أصوافها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَوْبَارِهَا", transliteration: "wa-awbārihā", meaning: { en: "and their fur", ur: "اور their fur", ar: "وأوبارها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَشْعَارِهَآ", transliteration: "wa-ashʿārihā", meaning: { en: "and their hair", ur: "اور their hair", ar: "وأشعارها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَثَـٰثًۭا", transliteration: "athāthan", meaning: { en: "(is) furnishing", ur: "ہے furnishing", ar: "أثثا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَتَـٰعًا", transliteration: "wamatāʿan", meaning: { en: "and a provision", ur: "اور a رزق", ar: "ومتعا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "for", ur: "کے لیے", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حِينٍۢ", transliteration: "ḥīnin", meaning: { en: "a time", ur: "a time", ar: "حين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 13, to: 14, label: 'فعل + فاعل' },
          { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
          { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
          { from: 19, to: 20, label: 'فعل + فاعل' },
          { from: 20, to: 21, label: 'مضاف + مضاف إليه' }
        ],
    }
  },
  81: {
    ayahNumber: 81,
    text: "وَٱللَّهُ جَعَلَ لَكُم مِّمَّا خَلَقَ ظِلَـٰلًۭا وَجَعَلَ لَكُم مِّنَ ٱلْجِبَالِ أَكْنَـٰنًۭا وَجَعَلَ لَكُمْ سَرَٰبِيلَ تَقِيكُمُ ٱلْحَرَّ وَسَرَٰبِيلَ تَقِيكُم بَأْسَكُمْ ۚ كَذَٰلِكَ يُتِمُّ نِعْمَتَهُۥ عَلَيْكُمْ لَعَلَّكُمْ تُسْلِمُونَ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", root: "ج ع ل", meaning: { en: "(has) made", ur: "بنایا", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from what", ur: "سے کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "He created", ur: "وہ پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ظِلَـٰلًۭا", transliteration: "ẓilālan", meaning: { en: "shades", ur: "shades", ar: "ظللا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", root: "ج ع ل", meaning: { en: "and (has) made", ur: "اور has بنایا", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْجِبَالِ", transliteration: "l-jibāli", meaning: { en: "the mountains", ur: "the پہاڑ", ar: "لجبال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكْنَـٰنًۭا", transliteration: "aknānan", meaning: { en: "shelters", ur: "shelters", ar: "أكننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", root: "ج ع ل", meaning: { en: "and (has) made", ur: "اور has بنایا", ar: "وجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "سَرَٰبِيلَ", transliteration: "sarābīla", meaning: { en: "garments", ur: "garments", ar: "سربيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَقِيكُمُ", transliteration: "taqīkumu", meaning: { en: "to protect you", ur: "طرف protect تم", ar: "تقيكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَرَّ", transliteration: "l-ḥara", meaning: { en: "(from) the heat", ur: "سے the heat", ar: "لحر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَسَرَٰبِيلَ", transliteration: "wasarābīla", meaning: { en: "and garments", ur: "اور garments", ar: "وسربيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَقِيكُم", transliteration: "taqīkum", meaning: { en: "to protect you", ur: "طرف protect تم", ar: "تقيكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَأْسَكُمْ ۚ", transliteration: "basakum", meaning: { en: "from your (mutual) violence", ur: "سے تمہارا mutual violence", ar: "بأسكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus", ar: "كذلك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يُتِمُّ", transliteration: "yutimmu", meaning: { en: "He completes", ur: "وہ completes", ar: "يتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نِعْمَتَهُۥ", transliteration: "niʿ'matahu", meaning: { en: "His Favor", ur: "His Favor", ar: "نعمته" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "upon you", ur: "upon تم", ar: "عليكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "so that you may", ur: "so کہ/وہ تم may", ar: "لعلكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُسْلِمُونَ", transliteration: "tus'limūna", meaning: { en: "submit", ur: "submit", ar: "تسلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 13, to: 14, label: 'جار + مجرور' },
          { from: 15, to: 16, label: 'فعل + فاعل' },
          { from: 18, to: 19, label: 'فعل + فاعل' },
          { from: 21, to: 22, label: 'فعل + فاعل' },
          { from: 23, to: 24, label: 'جار + مجرور' }
        ],
    }
  },
  82: {
    ayahNumber: 82,
    text: "فَإِن تَوَلَّوْا۟ فَإِنَّمَا عَلَيْكَ ٱلْبَلَـٰغُ ٱلْمُبِينُ",
    words: [
      { arabic: "فَإِن", transliteration: "fa-in", meaning: { en: "Then, if", ur: "Then, if", ar: "فإن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَوَلَّوْا۟", transliteration: "tawallaw", meaning: { en: "they turn away", ur: "وہ لوگ turn away", ar: "تولوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَإِنَّمَا", transliteration: "fa-innamā", meaning: { en: "then only", ur: "پھر only", ar: "فإنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "upon you", ur: "upon تم", ar: "عليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْبَلَـٰغُ", transliteration: "l-balāghu", meaning: { en: "(is) the conveyance", ur: "ہے the conveyance", ar: "لبلغ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُبِينُ", transliteration: "l-mubīnu", meaning: { en: "the clear", ur: "the واضح", ar: "لمبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'موصوف + صفت' }
        ],
    }
  },
  83: {
    ayahNumber: 83,
    text: "يَعْرِفُونَ نِعْمَتَ ٱللَّهِ ثُمَّ يُنكِرُونَهَا وَأَكْثَرُهُمُ ٱلْكَـٰفِرُونَ",
    words: [
      { arabic: "يَعْرِفُونَ", transliteration: "yaʿrifūna", meaning: { en: "They recognize", ur: "وہ لوگ recognize", ar: "يعرفون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نِعْمَتَ", transliteration: "niʿ'mata", meaning: { en: "(the) Favor", ur: "the Favor", ar: "نعمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُنكِرُونَهَا", transliteration: "yunkirūnahā", meaning: { en: "they deny it", ur: "وہ لوگ deny یہ", ar: "ينكرونها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَكْثَرُهُمُ", transliteration: "wa-aktharuhumu", meaning: { en: "And most of them", ur: "اور most of انہیں", ar: "وأكثرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْكَـٰفِرُونَ", transliteration: "l-kāfirūna", meaning: { en: "(are) the disbelievers", ur: "ہیں the کافروں", ar: "لكفرون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    }
  },
  84: {
    ayahNumber: 84,
    text: "وَيَوْمَ نَبْعَثُ مِن كُلِّ أُمَّةٍۢ شَهِيدًۭا ثُمَّ لَا يُؤْذَنُ لِلَّذِينَ كَفَرُوا۟ وَلَا هُمْ يُسْتَعْتَبُونَ",
    words: [
      { arabic: "وَيَوْمَ", transliteration: "wayawma", root: "ي و م", meaning: { en: "And the Day", ur: "اور the دن", ar: "ويوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَبْعَثُ", transliteration: "nabʿathu", meaning: { en: "We will resurrect", ur: "ہم گا/گے resurrect", ar: "نبعث" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", meaning: { en: "nation", ur: "nation", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَهِيدًۭا", transliteration: "shahīdan", meaning: { en: "a witness", ur: "a witness", ar: "شهيدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْذَنُ", transliteration: "yu'dhanu", meaning: { en: "will be permitted", ur: "گا/گے be permitted", ar: "يؤذن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "طرف those جو", ar: "للذين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved", ar: "كفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يُسْتَعْتَبُونَ", transliteration: "yus'taʿtabūna", meaning: { en: "will be asked to make amends", ur: "گا/گے be asked طرف بناتے ہو amends", ar: "يستعتبون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'نفی + فعل' }
        ],
    }
  },
  85: {
    ayahNumber: 85,
    text: "وَإِذَا رَءَا ٱلَّذِينَ ظَلَمُوا۟ ٱلْعَذَابَ فَلَا يُخَفَّفُ عَنْهُمْ وَلَا هُمْ يُنظَرُونَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when", ar: "وإذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَءَا", transliteration: "raā", meaning: { en: "(will) see", ur: "دیکھتے ہو", ar: "رءا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", meaning: { en: "wronged", ur: "wronged", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب", ar: "لعذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "then not", ur: "پھر نہیں", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "يُخَفَّفُ", transliteration: "yukhaffafu", meaning: { en: "it will be lightened", ur: "یہ گا/گے be lightened", ar: "يخفف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "for them", ur: "کے لیے انہیں", ar: "عنهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يُنظَرُونَ", transliteration: "yunẓarūna", meaning: { en: "will be given respite", ur: "گا/گے be given respite", ar: "ينظرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'نفی + فعل' }
        ],
    }
  },
  86: {
    ayahNumber: 86,
    text: "وَإِذَا رَءَا ٱلَّذِينَ أَشْرَكُوا۟ شُرَكَآءَهُمْ قَالُوا۟ رَبَّنَا هَـٰٓؤُلَآءِ شُرَكَآؤُنَا ٱلَّذِينَ كُنَّا نَدْعُوا۟ مِن دُونِكَ ۖ فَأَلْقَوْا۟ إِلَيْهِمُ ٱلْقَوْلَ إِنَّكُمْ لَكَـٰذِبُونَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when", ar: "وإذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَءَا", transliteration: "raā", meaning: { en: "(will) see", ur: "دیکھتے ہو", ar: "رءا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَشْرَكُوا۟", transliteration: "ashrakū", meaning: { en: "associated partners with Allah", ur: "associated partners کے ساتھ اللہ", ar: "أشركوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شُرَكَآءَهُمْ", transliteration: "shurakāahum", meaning: { en: "their partners", ur: "their partners", ar: "شركاءهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They will say", ur: "وہ لوگ گا/گے کہو", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", root: "ر ب ب", meaning: { en: "Our Lord", ur: "ہمارا رب", ar: "ربنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", meaning: { en: "these", ur: "یہ", ar: "هؤلاء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شُرَكَآؤُنَا", transliteration: "shurakāunā", meaning: { en: "(are) our partners", ur: "ہیں our partners", ar: "شركاؤنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whom", ur: "those whom", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "we used to", ur: "ہم used طرف", ar: "كنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَدْعُوا۟", transliteration: "nadʿū", meaning: { en: "invoke", ur: "invoke", ar: "ندعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides You", ur: "besides تم", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِكَ ۖ", transliteration: "dūnika", meaning: { en: "besides You", ur: "besides تم", ar: "دونك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَأَلْقَوْا۟", transliteration: "fa-alqaw", meaning: { en: "But they (will) throw back", ur: "لیکن وہ لوگ گا/گے throw back", ar: "فألقوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَيْهِمُ", transliteration: "ilayhimu", meaning: { en: "at them", ur: "at انہیں", ar: "إليهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلْقَوْلَ", transliteration: "l-qawla", meaning: { en: "(their) word", ur: "their word", ar: "لقول" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّكُمْ", transliteration: "innakum", meaning: { en: "Indeed, you", ur: "Indeed, تم", ar: "إنكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكَـٰذِبُونَ", transliteration: "lakādhibūna", meaning: { en: "(are) surely liars", ur: "ہیں یقیناً liars", ar: "لكذبون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 14, to: 15, label: 'فعل + فاعل' },
          { from: 16, to: 17, label: 'جار + مجرور' }
        ],
    }
  },
  87: {
    ayahNumber: 87,
    text: "وَأَلْقَوْا۟ إِلَى ٱللَّهِ يَوْمَئِذٍ ٱلسَّلَمَ ۖ وَضَلَّ عَنْهُم مَّا كَانُوا۟ يَفْتَرُونَ",
    words: [
      { arabic: "وَأَلْقَوْا۟", transliteration: "wa-alqaw", meaning: { en: "And they (will) offer", ur: "اور وہ لوگ گا/گے offer", ar: "وألقوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَئِذٍ", transliteration: "yawma-idhin", root: "ي و م", meaning: { en: "(on) that Day", ur: "پر کہ/وہ دن", ar: "يومئذ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّلَمَ ۖ", transliteration: "l-salama", meaning: { en: "the submission", ur: "the submission", ar: "لسلم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَضَلَّ", transliteration: "waḍalla", meaning: { en: "and (is) lost", ur: "اور ہے lost", ar: "وضل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنْهُم", transliteration: "ʿanhum", meaning: { en: "from them", ur: "سے انہیں", ar: "عنهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", meaning: { en: "invent", ur: "invent", ar: "يفترون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' }
        ],
    }
  },
  88: {
    ayahNumber: 88,
    text: "ٱلَّذِينَ كَفَرُوا۟ وَصَدُّوا۟ عَن سَبِيلِ ٱللَّهِ زِدْنَـٰهُمْ عَذَابًۭا فَوْقَ ٱلْعَذَابِ بِمَا كَانُوا۟ يُفْسِدُونَ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "And those who", ur: "اور those جو", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved", ar: "كفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَصَدُّوا۟", transliteration: "waṣaddū", meaning: { en: "and hindered", ur: "اور hindered", ar: "وصدوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "(the) way", ur: "راستہ", ar: "سبيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "زِدْنَـٰهُمْ", transliteration: "zid'nāhum", meaning: { en: "We will increase them", ur: "ہم گا/گے increase انہیں", ar: "زدنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَذَابًۭا", transliteration: "ʿadhāban", root: "ع ذ ب", meaning: { en: "(in) punishment", ur: "عذاب", ar: "عذابا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَوْقَ", transliteration: "fawqa", meaning: { en: "over", ur: "over", ar: "فوق" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", root: "ع ذ ب", meaning: { en: "punishment", ur: "عذاب", ar: "لعذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "because", ur: "because", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يُفْسِدُونَ", transliteration: "yuf'sidūna", meaning: { en: "spread corruption", ur: "spread corruption", ar: "يفسدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'جار + مجرور' }
        ],
    }
  },
  89: {
    ayahNumber: 89,
    text: "وَيَوْمَ نَبْعَثُ فِى كُلِّ أُمَّةٍۢ شَهِيدًا عَلَيْهِم مِّنْ أَنفُسِهِمْ ۖ وَجِئْنَا بِكَ شَهِيدًا عَلَىٰ هَـٰٓؤُلَآءِ ۚ وَنَزَّلْنَا عَلَيْكَ ٱلْكِتَـٰبَ تِبْيَـٰنًۭا لِّكُلِّ شَىْءٍۢ وَهُدًۭى وَرَحْمَةًۭ وَبُشْرَىٰ لِلْمُسْلِمِينَ",
    words: [
      { arabic: "وَيَوْمَ", transliteration: "wayawma", root: "ي و م", meaning: { en: "And the Day", ur: "اور the دن", ar: "ويوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَبْعَثُ", transliteration: "nabʿathu", meaning: { en: "We will resurrect", ur: "ہم گا/گے resurrect", ar: "نبعث" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "among", ur: "among", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", meaning: { en: "nation", ur: "nation", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَهِيدًا", transliteration: "shahīdan", meaning: { en: "a witness", ur: "a witness", ar: "شهيدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "over انہیں", ar: "عليهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنفُسِهِمْ ۖ", transliteration: "anfusihim", root: "ن ف س", meaning: { en: "themselves", ur: "themselves", ar: "أنفسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَجِئْنَا", transliteration: "waji'nā", meaning: { en: "And We (will) bring", ur: "اور ہم گا/گے bring", ar: "وجئنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِكَ", transliteration: "bika", meaning: { en: "you", ur: "تم", ar: "بك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَهِيدًا", transliteration: "shahīdan", meaning: { en: "(as) a witness", ur: "as a witness", ar: "شهيدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "over", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَـٰٓؤُلَآءِ ۚ", transliteration: "hāulāi", meaning: { en: "these", ur: "یہ", ar: "هؤلاء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَنَزَّلْنَا", transliteration: "wanazzalnā", meaning: { en: "And We sent down", ur: "اور ہم بھیجا down", ar: "ونزلنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "to you", ur: "طرف تم", ar: "عليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", root: "ك ت ب", meaning: { en: "the Book", ur: "the کتاب", ar: "لكتب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تِبْيَـٰنًۭا", transliteration: "tib'yānan", meaning: { en: "(as) a clarification", ur: "as a clarification", ar: "تبينا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّكُلِّ", transliteration: "likulli", meaning: { en: "of every", ur: "of every", ar: "لكل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "thing", ur: "thing", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُدًۭى", transliteration: "wahudan", meaning: { en: "and a guidance", ur: "اور a guidance", ar: "وهدى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَحْمَةًۭ", transliteration: "waraḥmatan", root: "ر ح م", meaning: { en: "and mercy", ur: "اور رحمت", ar: "ورحمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبُشْرَىٰ", transliteration: "wabush'rā", meaning: { en: "and glad tidings", ur: "اور glad tidings", ar: "وبشرى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلْمُسْلِمِينَ", transliteration: "lil'mus'limīna", meaning: { en: "for the Muslims", ur: "کے لیے the Muslims", ar: "للمسلمين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'جار + مجرور' },
          { from: 13, to: 14, label: 'جار + مجرور' },
          { from: 16, to: 17, label: 'فعل + فاعل' },
          { from: 18, to: 19, label: 'مضاف + مضاف إليه' }
        ],
    }
  },
  92: {
    ayahNumber: 92,
    text: "وَلَا تَكُونُوا۟ كَٱلَّتِى نَقَضَتْ غَزْلَهَا مِنۢ بَعْدِ قُوَّةٍ أَنكَـٰثًۭا تَتَّخِذُونَ أَيْمَـٰنَكُمْ دَخَلًۢا بَيْنَكُمْ أَن تَكُونَ أُمَّةٌ هِىَ أَرْبَىٰ مِنْ أُمَّةٍ ۚ إِنَّمَا يَبْلُوكُمُ ٱللَّهُ بِهِۦ ۚ وَلَيُبَيِّنَنَّ لَكُمْ يَوْمَ ٱلْقِيَـٰمَةِ مَا كُنتُمْ فِيهِ تَخْتَلِفُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَكُونُوا۟", transliteration: "takūnū", meaning: { en: "be", ur: "be", ar: "تكونوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَٱلَّتِى", transliteration: "ka-allatī", meaning: { en: "like her who", ur: "like her جو", ar: "كلتى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نَقَضَتْ", transliteration: "naqaḍat", meaning: { en: "untwists", ur: "untwists", ar: "نقضت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "غَزْلَهَا", transliteration: "ghazlahā", meaning: { en: "her spun yarn", ur: "her spun yarn", ar: "غزلها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "after", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُوَّةٍ", transliteration: "quwwatin", meaning: { en: "strength", ur: "strength", ar: "قوة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنكَـٰثًۭا", transliteration: "ankāthan", meaning: { en: "(into) untwisted strands", ur: "into untwisted strands", ar: "أنكثا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَتَّخِذُونَ", transliteration: "tattakhidhūna", meaning: { en: "you take", ur: "تم take", ar: "تتخذون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَيْمَـٰنَكُمْ", transliteration: "aymānakum", meaning: { en: "your oaths", ur: "تمہارا oaths", ar: "أيمنكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "دَخَلًۢا", transliteration: "dakhalan", meaning: { en: "(as) a deception", ur: "as a deception", ar: "دخلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنَكُمْ", transliteration: "baynakum", meaning: { en: "between you", ur: "between تم", ar: "بينكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "because", ur: "because", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَكُونَ", transliteration: "takūna", meaning: { en: "is", ur: "ہے", ar: "تكون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أُمَّةٌ", transliteration: "ummatun", meaning: { en: "a community", ur: "a community", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هِىَ", transliteration: "hiya", meaning: { en: "[it]", ur: "[it]", ar: "هى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرْبَىٰ", transliteration: "arbā", meaning: { en: "more numerous", ur: "more numerous", ar: "أربى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "than", ur: "than", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أُمَّةٍ ۚ", transliteration: "ummatin", meaning: { en: "(another) community", ur: "another community", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَبْلُوكُمُ", transliteration: "yablūkumu", meaning: { en: "Allah tests you", ur: "اللہ tests تم", ar: "يبلوكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah tests you", ur: "اللہ tests تم", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ ۚ", transliteration: "bihi", meaning: { en: "by it", ur: "by یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلَيُبَيِّنَنَّ", transliteration: "walayubayyinanna", meaning: { en: "And He will make clear", ur: "اور وہ گا/گے بناتے ہو واضح", ar: "وليبينن" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "to you", ur: "طرف تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(on) the Day", ur: "پر the دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", meaning: { en: "(of) the Resurrection", ur: "of the Resurrection", ar: "لقيمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used (to)", ur: "تم used طرف", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "میں یہ", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَخْتَلِفُونَ", transliteration: "takhtalifūna", meaning: { en: "differ", ur: "differ", ar: "تختلفون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'فعل + فاعل' },
          { from: 15, to: 16, label: 'فعل + فاعل' },
          { from: 19, to: 20, label: 'جار + مجرور' },
          { from: 26, to: 27, label: 'جار + مجرور' },
          { from: 29, to: 30, label: 'موصول + صلة' }
        ],
    }
  },
  93: {
    ayahNumber: 93,
    text: "وَلَوْ شَآءَ ٱللَّهُ لَجَعَلَكُمْ أُمَّةًۭ وَٰحِدَةًۭ وَلَـٰكِن يُضِلُّ مَن يَشَآءُ وَيَهْدِى مَن يَشَآءُ ۚ وَلَتُسْـَٔلُنَّ عَمَّا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if", ar: "ولو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَآءَ", transliteration: "shāa", meaning: { en: "Allah (had) willed", ur: "اللہ had willed", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah (had) willed", ur: "اللہ had willed", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَجَعَلَكُمْ", transliteration: "lajaʿalakum", root: "ج ع ل", meaning: { en: "surely He (could) have made you", ur: "یقیناً وہ could have بنایا تم", ar: "لجعلكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةًۭ", transliteration: "ummatan", meaning: { en: "a nation", ur: "a nation", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدَةًۭ", transliteration: "wāḥidatan", meaning: { en: "one", ur: "one", ar: "وحدة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُضِلُّ", transliteration: "yuḍillu", meaning: { en: "He lets go astray", ur: "وہ lets go astray", ar: "يضل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "whom", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَشَآءُ", transliteration: "yashāu", meaning: { en: "He wills", ur: "وہ wills", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَيَهْدِى", transliteration: "wayahdī", root: "ه د ي", meaning: { en: "and guides", ur: "اور guides", ar: "ويهدى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "whom", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَشَآءُ ۚ", transliteration: "yashāu", meaning: { en: "He wills", ur: "وہ wills", ar: "يشاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَتُسْـَٔلُنَّ", transliteration: "walatus'alunna", meaning: { en: "And surely you will be questioned", ur: "اور یقیناً تم گا/گے be questioned", ar: "ولتسلن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "about what", ur: "about کیا/جو", ar: "عما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used (to)", ur: "تم used طرف", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'موصول + صلة' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'موصول + صلة' },
          { from: 14, to: 15, label: 'فعل + فاعل' }
        ],
    }
  },
  94: {
    ayahNumber: 94,
    text: "وَلَا تَتَّخِذُوٓا۟ أَيْمَـٰنَكُمْ دَخَلًۢا بَيْنَكُمْ فَتَزِلَّ قَدَمٌۢ بَعْدَ ثُبُوتِهَا وَتَذُوقُوا۟ ٱلسُّوٓءَ بِمَا صَدَدتُّمْ عَن سَبِيلِ ٱللَّهِ ۖ وَلَكُمْ عَذَابٌ عَظِيمٌۭ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَتَّخِذُوٓا۟", transliteration: "tattakhidhū", meaning: { en: "take", ur: "take", ar: "تتخذوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَيْمَـٰنَكُمْ", transliteration: "aymānakum", meaning: { en: "your oaths", ur: "تمہارا oaths", ar: "أيمنكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "دَخَلًۢا", transliteration: "dakhalan", meaning: { en: "(as) a deception", ur: "as a deception", ar: "دخلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنَكُمْ", transliteration: "baynakum", meaning: { en: "between you", ur: "between تم", ar: "بينكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَتَزِلَّ", transliteration: "fatazilla", meaning: { en: "lest, should slip", ur: "lest, should slip", ar: "فتزل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدَمٌۢ", transliteration: "qadamun", meaning: { en: "a foot", ur: "a foot", ar: "قدم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُبُوتِهَا", transliteration: "thubūtihā", meaning: { en: "it is firmly planted", ur: "یہ ہے firmly planted", ar: "ثبوتها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَتَذُوقُوا۟", transliteration: "watadhūqū", meaning: { en: "and you would taste", ur: "اور تم would taste", ar: "وتذوقوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسُّوٓءَ", transliteration: "l-sūa", meaning: { en: "the evil", ur: "the برا", ar: "لسوء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "کے لیے کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صَدَدتُّمْ", transliteration: "ṣadadttum", meaning: { en: "you hindered", ur: "تم hindered", ar: "صددتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "(the) way", ur: "راستہ", ar: "سبيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَكُمْ", transliteration: "walakum", meaning: { en: "and for you", ur: "اور کے لیے تم", ar: "ولكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "(is) a punishment", ur: "ہے a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَظِيمٌۭ", transliteration: "ʿaẓīmun", root: "ع ظ م", meaning: { en: "great", ur: "بڑا", ar: "عظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'جار + مجرور' },
          { from: 18, to: 19, label: 'موصوف + صفت' }
        ],
    }
  },
  95: {
    ayahNumber: 95,
    text: "وَلَا تَشْتَرُوا۟ بِعَهْدِ ٱللَّهِ ثَمَنًۭا قَلِيلًا ۚ إِنَّمَا عِندَ ٱللَّهِ هُوَ خَيْرٌۭ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَشْتَرُوا۟", transliteration: "tashtarū", meaning: { en: "exchange", ur: "exchange", ar: "تشتروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِعَهْدِ", transliteration: "biʿahdi", meaning: { en: "the covenant", ur: "the covenant", ar: "بعهد" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثَمَنًۭا", transliteration: "thamanan", meaning: { en: "(for) a price", ur: "کے لیے a price", ar: "ثمنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَلِيلًا ۚ", transliteration: "qalīlan", meaning: { en: "little", ur: "little", ar: "قليلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Indeed, what", ur: "Indeed, کیا/جو", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "(is) with", ur: "کے ساتھ", ar: "عند" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it", ur: "یہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "خَيْرٌۭ", transliteration: "khayrun", root: "خ ي ر", meaning: { en: "(is) better", ur: "ہے better", ar: "خير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you were (to)", ur: "تم تھے طرف", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "know", ur: "جانتے ہو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    }
  },
  96: {
    ayahNumber: 96,
    text: "مَا عِندَكُمْ يَنفَدُ ۖ وَمَا عِندَ ٱللَّهِ بَاقٍۢ ۗ وَلَنَجْزِيَنَّ ٱلَّذِينَ صَبَرُوٓا۟ أَجْرَهُم بِأَحْسَنِ مَا كَانُوا۟ يَعْمَلُونَ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Whatever", ur: "Whatever", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "عِندَكُمْ", transliteration: "ʿindakum", meaning: { en: "(is) with you", ur: "ہے کے ساتھ تم", ar: "عندكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَنفَدُ ۖ", transliteration: "yanfadu", meaning: { en: "will be exhausted", ur: "گا/گے be exhausted", ar: "ينفد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور whatever", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "(is) with", ur: "کے ساتھ", ar: "عند" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَاقٍۢ ۗ", transliteration: "bāqin", meaning: { en: "(will) be remaining", ur: "گا/گے be remaining", ar: "باق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَنَجْزِيَنَّ", transliteration: "walanajziyanna", meaning: { en: "And surely We will pay", ur: "اور یقیناً ہم گا/گے pay", ar: "ولنجزين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَبَرُوٓا۟", transliteration: "ṣabarū", meaning: { en: "(are) patient", ur: "ہیں patient", ar: "صبروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَجْرَهُم", transliteration: "ajrahum", meaning: { en: "their reward", ur: "their reward", ar: "أجرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِأَحْسَنِ", transliteration: "bi-aḥsani", root: "ح س ن", meaning: { en: "to (the) best", ur: "طرف the best", ar: "بأحسن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(of) what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "کرتے ہو", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' }
        ],
    }
  },
  97: {
    ayahNumber: 97,
    text: "مَنْ عَمِلَ صَـٰلِحًۭا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌۭ فَلَنُحْيِيَنَّهُۥ حَيَوٰةًۭ طَيِّبَةًۭ ۖ وَلَنَجْزِيَنَّهُمْ أَجْرَهُم بِأَحْسَنِ مَا كَانُوا۟ يَعْمَلُونَ",
    words: [
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "Whoever", ur: "Whoever", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمِلَ", transliteration: "ʿamila", meaning: { en: "does", ur: "کرتا ہے", ar: "عمل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", meaning: { en: "righteous deeds", ur: "righteous deeds", ar: "صلحا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "whether", ur: "whether", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَكَرٍ", transliteration: "dhakarin", meaning: { en: "male", ur: "male", ar: "ذكر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أُنثَىٰ", transliteration: "unthā", meaning: { en: "female", ur: "female", ar: "أنثى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "while he", ur: "while وہ", ar: "وهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مُؤْمِنٌۭ", transliteration: "mu'minun", meaning: { en: "(is) a believer", ur: "ہے a believer", ar: "مؤمن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلَنُحْيِيَنَّهُۥ", transliteration: "falanuḥ'yiyannahu", meaning: { en: "then surely We will give him life", ur: "پھر یقیناً ہم گا/گے دو اسے life", ar: "فلنحيينه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَيَوٰةًۭ", transliteration: "ḥayatan", meaning: { en: "a life", ur: "a life", ar: "حيوة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "طَيِّبَةًۭ ۖ", transliteration: "ṭayyibatan", root: "ط ي ب", meaning: { en: "good", ur: "اچھا", ar: "طيبة" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "وَلَنَجْزِيَنَّهُمْ", transliteration: "walanajziyannahum", meaning: { en: "and We will pay them", ur: "اور ہم گا/گے pay انہیں", ar: "ولنجزينهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْرَهُم", transliteration: "ajrahum", meaning: { en: "their reward", ur: "their reward", ar: "أجرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِأَحْسَنِ", transliteration: "bi-aḥsani", root: "ح س ن", meaning: { en: "to (the) best", ur: "طرف the best", ar: "بأحسن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "of what", ur: "of کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "کرتے ہو", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 12, to: 13, label: 'فعل + فاعل' }
        ],
    }
  },
  98: {
    ayahNumber: 98,
    text: "فَإِذَا قَرَأْتَ ٱلْقُرْءَانَ فَٱسْتَعِذْ بِٱللَّهِ مِنَ ٱلشَّيْطَـٰنِ ٱلرَّجِيمِ",
    words: [
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "So when", ur: "So when", ar: "فإذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَرَأْتَ", transliteration: "qarata", meaning: { en: "you recite", ur: "تم recite", ar: "قرأت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقُرْءَانَ", transliteration: "l-qur'āna", meaning: { en: "the Quran", ur: "the Quran", ar: "لقرءان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱسْتَعِذْ", transliteration: "fa-is'taʿidh", meaning: { en: "seek refuge", ur: "seek refuge", ar: "فستعذ" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "بِٱللَّهِ", transliteration: "bil-lahi", root: "أ ل ه", meaning: { en: "in Allah", ur: "میں اللہ", ar: "بلله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلشَّيْطَـٰنِ", transliteration: "l-shayṭāni", meaning: { en: "the Shaitaan", ur: "the Shaitaan", ar: "لشيطن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّجِيمِ", transliteration: "l-rajīmi", meaning: { en: "the accursed", ur: "the accursed", ar: "لرجيم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    }
  },
  99: {
    ayahNumber: 99,
    text: "إِنَّهُۥ لَيْسَ لَهُۥ سُلْطَـٰنٌ عَلَى ٱلَّذِينَ ءَامَنُوا۟ وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
    words: [
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed he", ur: "بے شک وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "not", ur: "نہیں", ar: "ليس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "کے لیے اسے", ar: "له" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "سُلْطَـٰنٌ", transliteration: "sul'ṭānun", meaning: { en: "(is) any authority", ur: "ہے any authority", ar: "سلطن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "ءامنوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَلَىٰ", transliteration: "waʿalā", meaning: { en: "and upon", ur: "اور upon", ar: "وعلى" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَوَكَّلُونَ", transliteration: "yatawakkalūna", meaning: { en: "they put their trust", ur: "وہ لوگ put their trust", ar: "يتوكلون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    }
  },
  100: {
    ayahNumber: 100,
    text: "إِنَّمَا سُلْطَـٰنُهُۥ عَلَى ٱلَّذِينَ يَتَوَلَّوْنَهُۥ وَٱلَّذِينَ هُم بِهِۦ مُشْرِكُونَ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سُلْطَـٰنُهُۥ", transliteration: "sul'ṭānuhu", meaning: { en: "his authority", ur: "his authority", ar: "سلطنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "(is) over", ur: "ہے over", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَتَوَلَّوْنَهُۥ", transliteration: "yatawallawnahu", meaning: { en: "take him as an ally", ur: "take اسے as an ally", ar: "يتولونه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "and those who", ur: "اور those جو", ar: "ولذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "[they]", ur: "[they]", ar: "هم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with Him", ur: "کے ساتھ اس", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مُشْرِكُونَ", transliteration: "mush'rikūna", meaning: { en: "associate partners", ur: "associate partners", ar: "مشركون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    }
  },
  101: {
    ayahNumber: 101,
    text: "وَإِذَا بَدَّلْنَآ ءَايَةًۭ مَّكَانَ ءَايَةٍۢ ۙ وَٱللَّهُ أَعْلَمُ بِمَا يُنَزِّلُ قَالُوٓا۟ إِنَّمَآ أَنتَ مُفْتَرٍۭ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when", ar: "وإذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَدَّلْنَآ", transliteration: "baddalnā", meaning: { en: "We substitute", ur: "ہم substitute", ar: "بدلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَةًۭ", transliteration: "āyatan", meaning: { en: "a Verse", ur: "a آیت", ar: "ءاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّكَانَ", transliteration: "makāna", meaning: { en: "(in) place", ur: "میں place", ar: "مكان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَةٍۢ ۙ", transliteration: "āyatin", meaning: { en: "(of) a Verse", ur: "of a آیت", ar: "ءاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "and Allah ", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", meaning: { en: "(is) most knowing", ur: "ہے most knowing", ar: "أعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "of کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يُنَزِّلُ", transliteration: "yunazzilu", root: "ن ز ل", meaning: { en: "He sends down", ur: "وہ بھیجتا ہے down", ar: "ينزل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَالُوٓا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّمَآ", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "you", ur: "تم", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مُفْتَرٍۭ ۚ", transliteration: "muf'tarin", meaning: { en: "(are) an inventor", ur: "ہیں an inventor", ar: "مفتر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay", ar: "بل" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَكْثَرُهُمْ", transliteration: "aktharuhum", meaning: { en: "most of them", ur: "most of انہیں", ar: "أكثرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جانتے ہو", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 16, to: 17, label: 'نفی + فعل' }
        ],
    }
  },
  102: {
    ayahNumber: 102,
    text: "قُلْ نَزَّلَهُۥ رُوحُ ٱلْقُدُسِ مِن رَّبِّكَ بِٱلْحَقِّ لِيُثَبِّتَ ٱلَّذِينَ ءَامَنُوا۟ وَهُدًۭى وَبُشْرَىٰ لِلْمُسْلِمِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "نَزَّلَهُۥ", transliteration: "nazzalahu", root: "ن ز ل", meaning: { en: "Has brought it down", ur: "Has brought یہ down", ar: "نزله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رُوحُ", transliteration: "rūḥu", meaning: { en: "the Holy Spirit", ur: "the Holy Spirit", ar: "روح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقُدُسِ", transliteration: "l-qudusi", meaning: { en: "the Holy Spirit", ur: "the Holy Spirit", ar: "لقدس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں حق", ar: "بلحق" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لِيُثَبِّتَ", transliteration: "liyuthabbita", meaning: { en: "to make firm", ur: "طرف بناتے ہو firm", ar: "ليثبت" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "ءامنوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُدًۭى", transliteration: "wahudan", meaning: { en: "and (as) a guidance", ur: "اور as a guidance", ar: "وهدى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبُشْرَىٰ", transliteration: "wabush'rā", meaning: { en: "and glad tidings", ur: "اور glad tidings", ar: "وبشرى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلْمُسْلِمِينَ", transliteration: "lil'mus'limīna", meaning: { en: "to the Muslims", ur: "طرف the Muslims", ar: "للمسلمين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'فعل + فاعل' }
        ],
    }
  },
  103: {
    ayahNumber: 103,
    text: "وَلَقَدْ نَعْلَمُ أَنَّهُمْ يَقُولُونَ إِنَّمَا يُعَلِّمُهُۥ بَشَرٌۭ ۗ لِّسَانُ ٱلَّذِى يُلْحِدُونَ إِلَيْهِ أَعْجَمِىٌّۭ وَهَـٰذَا لِسَانٌ عَرَبِىٌّۭ مُّبِينٌ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "نَعْلَمُ", transliteration: "naʿlamu", meaning: { en: "We know", ur: "ہم جانتے ہو", ar: "نعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنَّهُمْ", transliteration: "annahum", meaning: { en: "that they", ur: "کہ/وہ وہ لوگ", ar: "أنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "say", ur: "کہو", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُعَلِّمُهُۥ", transliteration: "yuʿallimuhu", meaning: { en: "teaches him", ur: "teaches اسے", ar: "يعلمه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَشَرٌۭ ۗ", transliteration: "basharun", meaning: { en: "a human being", ur: "a human being", ar: "بشر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّسَانُ", transliteration: "lisānu", meaning: { en: "(The) tongue", ur: "The tongue", ar: "لسان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(of) the one", ur: "of the one", ar: "لذى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُلْحِدُونَ", transliteration: "yul'ḥidūna", meaning: { en: "they refer", ur: "وہ لوگ refer", ar: "يلحدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "to him", ur: "طرف اسے", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَعْجَمِىٌّۭ", transliteration: "aʿjamiyyun", meaning: { en: "(is) foreign", ur: "ہے foreign", ar: "أعجمى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهَـٰذَا", transliteration: "wahādhā", meaning: { en: "while this", ur: "while یہ", ar: "وهذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِسَانٌ", transliteration: "lisānun", meaning: { en: "(is) a language", ur: "ہے a language", ar: "لسان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَرَبِىٌّۭ", transliteration: "ʿarabiyyun", meaning: { en: "Arabic", ur: "Arabic", ar: "عربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'فعل + فاعل' },
          { from: 14, to: 15, label: 'جار + مجرور' },
          { from: 15, to: 16, label: 'موصوف + صفت' }
        ],
    }
  },
  104: {
    ayahNumber: 104,
    text: "إِنَّ ٱلَّذِينَ لَا يُؤْمِنُونَ بِـَٔايَـٰتِ ٱللَّهِ لَا يَهْدِيهِمُ ٱللَّهُ وَلَهُمْ عَذَابٌ أَلِيمٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", meaning: { en: "in the Verses", ur: "میں the آیات", ar: "بايت" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَهْدِيهِمُ", transliteration: "yahdīhimu", root: "ه د ي", meaning: { en: "Allah will guide them", ur: "اللہ گا/گے guide انہیں", ar: "يهديهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah will guide them", ur: "اللہ گا/گے guide انہیں", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور کے لیے انہیں", ar: "ولهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "(is) a punishment", ur: "ہے a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", meaning: { en: "painful", ur: "painful", ar: "أليم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'نفی + فعل' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'نفی + فعل' },
          { from: 9, to: 10, label: 'فعل + فاعل' }
        ],
    }
  },
  105: {
    ayahNumber: 105,
    text: "إِنَّمَا يَفْتَرِى ٱلْكَذِبَ ٱلَّذِينَ لَا يُؤْمِنُونَ بِـَٔايَـٰتِ ٱللَّهِ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْكَـٰذِبُونَ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَفْتَرِى", transliteration: "yaftarī", meaning: { en: "they invent", ur: "وہ لوگ invent", ar: "يفترى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْكَذِبَ", transliteration: "l-kadhiba", meaning: { en: "the falsehood", ur: "the falsehood", ar: "لكذب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", meaning: { en: "in the Verses", ur: "میں the آیات", ar: "بايت" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأُو۟لَـٰٓئِكَ", transliteration: "wa-ulāika", meaning: { en: "and those ", ur: "اور those", ar: "وأولئك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they", ur: "وہ لوگ", ar: "هم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰذِبُونَ", transliteration: "l-kādhibūna", meaning: { en: "(are) the liars", ur: "ہیں the liars", ar: "لكذبون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'نفی + فعل' },
          { from: 7, to: 8, label: 'جار + مجرور' }
        ],
    }
  },
  106: {
    ayahNumber: 106,
    text: "مَن كَفَرَ بِٱللَّهِ مِنۢ بَعْدِ إِيمَـٰنِهِۦٓ إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُۥ مُطْمَئِنٌّۢ بِٱلْإِيمَـٰنِ وَلَـٰكِن مَّن شَرَحَ بِٱلْكُفْرِ صَدْرًۭا فَعَلَيْهِمْ غَضَبٌۭ مِّنَ ٱللَّهِ وَلَهُمْ عَذَابٌ عَظِيمٌۭ",
    words: [
      { arabic: "مَن", transliteration: "man", meaning: { en: "Whoever", ur: "Whoever", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَفَرَ", transliteration: "kafara", root: "ك ف ر", meaning: { en: "disbelieves", ur: "disbelieves", ar: "كفر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِٱللَّهِ", transliteration: "bil-lahi", root: "أ ل ه", meaning: { en: "in Allah", ur: "میں اللہ", ar: "بلله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "after", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِيمَـٰنِهِۦٓ", transliteration: "īmānihi", root: "أ م ن", meaning: { en: "his belief", ur: "his belief", ar: "إيمنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "(one) who", ur: "جو", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُكْرِهَ", transliteration: "uk'riha", meaning: { en: "is forced", ur: "ہے forced", ar: "أكره" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَقَلْبُهُۥ", transliteration: "waqalbuhu", meaning: { en: "while his heart", ur: "while his دل", ar: "وقلبه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُطْمَئِنٌّۢ", transliteration: "muṭ'ma-innun", meaning: { en: "(is) content", ur: "ہے content", ar: "مطمئن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْإِيمَـٰنِ", transliteration: "bil-īmāni", root: "أ م ن", meaning: { en: "with the faith", ur: "کے ساتھ the faith", ar: "بلإيمن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلَـٰكِن", transliteration: "walākin", meaning: { en: "But", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "(one) who", ur: "جو", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَرَحَ", transliteration: "sharaḥa", meaning: { en: "opens", ur: "opens", ar: "شرح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْكُفْرِ", transliteration: "bil-kuf'ri", meaning: { en: "to disbelief", ur: "طرف disbelief", ar: "بلكفر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صَدْرًۭا", transliteration: "ṣadran", meaning: { en: "(his) breast", ur: "his breast", ar: "صدرا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَعَلَيْهِمْ", transliteration: "faʿalayhim", meaning: { en: "then upon them", ur: "پھر upon انہیں", ar: "فعليهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَضَبٌۭ", transliteration: "ghaḍabun", meaning: { en: "(is) a wrath", ur: "ہے a wrath", ar: "غضب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور کے لیے انہیں", ar: "ولهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "(is) a punishment", ur: "ہے a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَظِيمٌۭ", transliteration: "ʿaẓīmun", root: "ع ظ م", meaning: { en: "great", ur: "بڑا", ar: "عظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
          { from: 9, to: 10, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 16, to: 17, label: 'جار + مجرور' },
          { from: 23, to: 24, label: 'موصوف + صفت' }
        ],
    }
  },
  107: {
    ayahNumber: 107,
    text: "ذَٰلِكَ بِأَنَّهُمُ ٱسْتَحَبُّوا۟ ٱلْحَيَوٰةَ ٱلدُّنْيَا عَلَى ٱلْـَٔاخِرَةِ وَأَنَّ ٱللَّهَ لَا يَهْدِى ٱلْقَوْمَ ٱلْكَـٰفِرِينَ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That (is)", ur: "کہ/وہ ہے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "بِأَنَّهُمُ", transliteration: "bi-annahumu", meaning: { en: "because", ur: "because", ar: "بأنهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱسْتَحَبُّوا۟", transliteration: "is'taḥabbū", meaning: { en: "they preferred", ur: "وہ لوگ preferred", ar: "ستحبوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَيَوٰةَ", transliteration: "l-ḥayata", meaning: { en: "the life", ur: "the life", ar: "لحيوة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "of the world", ar: "لدنيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "over", ur: "over", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنَّ", transliteration: "wa-anna", meaning: { en: "and that", ur: "اور کہ/وہ", ar: "وأن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(does) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَهْدِى", transliteration: "yahdī", root: "ه د ي", meaning: { en: "guide", ur: "guide", ar: "يهدى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقَوْمَ", transliteration: "l-qawma", root: "ق و م", meaning: { en: "the people", ur: "the لوگ", ar: "لقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "the کافروں", ar: "لكفرين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'نفی + فعل' },
          { from: 11, to: 12, label: 'فعل + فاعل' }
        ],
    }
  },
  108: {
    ayahNumber: 108,
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ طَبَعَ ٱللَّهُ عَلَىٰ قُلُوبِهِمْ وَسَمْعِهِمْ وَأَبْصَـٰرِهِمْ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْغَـٰفِلُونَ",
    words: [
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", meaning: { en: "Those", ur: "Those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(are) the ones ", ur: "ہیں the ones", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "طَبَعَ", transliteration: "ṭabaʿa", meaning: { en: "Allah has set a seal", ur: "اللہ has set a seal", ar: "طبع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah has set a seal", ur: "اللہ has set a seal", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "over", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", root: "ق و ل", meaning: { en: "their hearts", ur: "their دل", ar: "قلوبهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَسَمْعِهِمْ", transliteration: "wasamʿihim", root: "س م ع", meaning: { en: "and their hearing", ur: "اور their hearing", ar: "وسمعهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَبْصَـٰرِهِمْ ۖ", transliteration: "wa-abṣārihim", root: "ب ص ر", meaning: { en: "and their sight", ur: "اور their sight", ar: "وأبصرهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأُو۟لَـٰٓئِكَ", transliteration: "wa-ulāika", meaning: { en: "And those ", ur: "اور those", ar: "وأولئك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ لوگ ہیں", ar: "هم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْغَـٰفِلُونَ", transliteration: "l-ghāfilūna", meaning: { en: "the heedless", ur: "the heedless", ar: "لغفلون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
          { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
          { from: 10, to: 11, label: 'فعل + فاعل' }
        ],
    }
  },
  109: {
    ayahNumber: 109,
    text: "لَا جَرَمَ أَنَّهُمْ فِى ٱلْـَٔاخِرَةِ هُمُ ٱلْخَـٰسِرُونَ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "No", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "جَرَمَ", transliteration: "jarama", meaning: { en: "doubt", ur: "doubt", ar: "جرم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّهُمْ", transliteration: "annahum", meaning: { en: "that they", ur: "کہ/وہ وہ لوگ", ar: "أنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "[they]", ur: "[they]", ar: "هم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْخَـٰسِرُونَ", transliteration: "l-khāsirūna", meaning: { en: "(are) the losers", ur: "ہیں the losers", ar: "لخسرون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    }
  },
  110: {
    ayahNumber: 110,
    text: "ثُمَّ إِنَّ رَبَّكَ لِلَّذِينَ هَاجَرُوا۟ مِنۢ بَعْدِ مَا فُتِنُوا۟ ثُمَّ جَـٰهَدُوا۟ وَصَبَرُوٓا۟ إِنَّ رَبَّكَ مِنۢ بَعْدِهَا لَغَفُورٌۭ رَّحِيمٌۭ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "طرف those جو", ar: "للذين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَاجَرُوا۟", transliteration: "hājarū", meaning: { en: "emigrated", ur: "emigrated", ar: "هاجروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "after", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "فُتِنُوا۟", transliteration: "futinū", meaning: { en: "they had been put to trials", ur: "وہ لوگ had been put طرف trials", ar: "فتنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَـٰهَدُوا۟", transliteration: "jāhadū", meaning: { en: "strove hard", ur: "strove hard", ar: "جهدوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَصَبَرُوٓا۟", transliteration: "waṣabarū", meaning: { en: "and were patient", ur: "اور تھے patient", ar: "وصبروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after it", ur: "after یہ", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِهَا", transliteration: "baʿdihā", meaning: { en: "after it", ur: "after یہ", ar: "بعدها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَغَفُورٌۭ", transliteration: "laghafūrun", root: "غ ف ر", meaning: { en: "surely is Oft-Forgiving", ur: "یقیناً ہے بہت بخشنے والا", ar: "لغفور" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "Most Merciful", ur: "نہایت مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'موصول + صلة' },
          { from: 9, to: 10, label: 'فعل + فاعل' },
          { from: 13, to: 14, label: 'فعل + فاعل' },
          { from: 15, to: 16, label: 'جار + مجرور' },
          { from: 16, to: 17, label: 'موصوف + صفت' }
        ],
    }
  },
  111: {
    ayahNumber: 111,
    text: "۞ يَوْمَ تَأْتِى كُلُّ نَفْسٍۢ تُجَـٰدِلُ عَن نَّفْسِهَا وَتُوَفَّىٰ كُلُّ نَفْسٍۢ مَّا عَمِلَتْ وَهُمْ لَا يُظْلَمُونَ",
    words: [
      { arabic: "۞ يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(On) the Day", ur: "پر the دن", ar: "۞ يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَأْتِى", transliteration: "tatī", meaning: { en: "(when) will come", ur: "when گا/گے آؤ", ar: "تأتى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَفْسٍۢ", transliteration: "nafsin", root: "ن ف س", meaning: { en: "soul", ur: "جان", ar: "نفس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تُجَـٰدِلُ", transliteration: "tujādilu", meaning: { en: "pleading", ur: "pleading", ar: "تجدل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "for", ur: "کے لیے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نَّفْسِهَا", transliteration: "nafsihā", root: "ن ف س", meaning: { en: "itself", ur: "itself", ar: "نفسها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَتُوَفَّىٰ", transliteration: "watuwaffā", meaning: { en: "and will be paid in full", ur: "اور گا/گے be paid میں full", ar: "وتوفى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَفْسٍۢ", transliteration: "nafsin", root: "ن ف س", meaning: { en: "soul", ur: "جان", ar: "نفس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمِلَتْ", transliteration: "ʿamilat", meaning: { en: "it did", ur: "یہ کیا", ar: "عملت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ لوگ", ar: "وهم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(will) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", meaning: { en: "be wronged", ur: "be wronged", ar: "يظلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 14, to: 15, label: 'نفی + فعل' }
        ],
    }
  },
  112: {
    ayahNumber: 112,
    text: "وَضَرَبَ ٱللَّهُ مَثَلًۭا قَرْيَةًۭ كَانَتْ ءَامِنَةًۭ مُّطْمَئِنَّةًۭ يَأْتِيهَا رِزْقُهَا رَغَدًۭا مِّن كُلِّ مَكَانٍۢ فَكَفَرَتْ بِأَنْعُمِ ٱللَّهِ فَأَذَٰقَهَا ٱللَّهُ لِبَاسَ ٱلْجُوعِ وَٱلْخَوْفِ بِمَا كَانُوا۟ يَصْنَعُونَ",
    words: [
      { arabic: "وَضَرَبَ", transliteration: "waḍaraba", meaning: { en: "And Allah sets forth", ur: "اور اللہ sets forth", ar: "وضرب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "And Allah sets forth", ur: "اور اللہ sets forth", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَثَلًۭا", transliteration: "mathalan", meaning: { en: "a similitude", ur: "a similitude", ar: "مثلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَرْيَةًۭ", transliteration: "qaryatan", meaning: { en: "(of) a town", ur: "of a town", ar: "قرية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَتْ", transliteration: "kānat", meaning: { en: "(that) was", ur: "تھا", ar: "كانت" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ءَامِنَةًۭ", transliteration: "āminatan", meaning: { en: "secure", ur: "secure", ar: "ءامنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّطْمَئِنَّةًۭ", transliteration: "muṭ'ma-innatan", meaning: { en: "and content", ur: "اور content", ar: "مطمئنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْتِيهَا", transliteration: "yatīhā", meaning: { en: "coming to it", ur: "coming طرف یہ", ar: "يأتيها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رِزْقُهَا", transliteration: "riz'quhā", meaning: { en: "its provision", ur: "its رزق", ar: "رزقها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَغَدًۭا", transliteration: "raghadan", meaning: { en: "(in) abundance", ur: "میں abundance", ar: "رغدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَكَانٍۢ", transliteration: "makānin", meaning: { en: "place", ur: "place", ar: "مكان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَكَفَرَتْ", transliteration: "fakafarat", root: "ك ف ر", meaning: { en: "but it denied", ur: "لیکن یہ denied", ar: "فكفرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِأَنْعُمِ", transliteration: "bi-anʿumi", meaning: { en: "(the) Favors of Allah", ur: "the Favors of اللہ", ar: "بأنعم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(the) Favors of Allah", ur: "the Favors of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَذَٰقَهَا", transliteration: "fa-adhāqahā", meaning: { en: "so Allah made it taste", ur: "so اللہ بنایا یہ taste", ar: "فأذقها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "so Allah made it taste", ur: "so اللہ بنایا یہ taste", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِبَاسَ", transliteration: "libāsa", meaning: { en: "(the) garb", ur: "the garb", ar: "لباس" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْجُوعِ", transliteration: "l-jūʿi", meaning: { en: "(of) the hunger", ur: "of the hunger", ar: "لجوع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْخَوْفِ", transliteration: "wal-khawfi", meaning: { en: "and the fear", ur: "اور the ڈرو", ar: "ولخوف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "کے لیے کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَصْنَعُونَ", transliteration: "yaṣnaʿūna", meaning: { en: "do", ur: "کرتے ہو", ar: "يصنعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 15, to: 16, label: 'جار + مجرور' },
          { from: 19, to: 20, label: 'جار + مجرور' }
        ],
    }
  },
  113: {
    ayahNumber: 113,
    text: "وَلَقَدْ جَآءَهُمْ رَسُولٌۭ مِّنْهُمْ فَكَذَّبُوهُ فَأَخَذَهُمُ ٱلْعَذَابُ وَهُمْ ظَـٰلِمُونَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "جَآءَهُمْ", transliteration: "jāahum", meaning: { en: "came to them", ur: "آیا طرف انہیں", ar: "جاءهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَسُولٌۭ", transliteration: "rasūlun", root: "ر س ل", meaning: { en: "a Messenger", ur: "a رسول", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُمْ", transliteration: "min'hum", meaning: { en: "from among them", ur: "سے among انہیں", ar: "منهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَكَذَّبُوهُ", transliteration: "fakadhabūhu", meaning: { en: "but they denied him", ur: "لیکن وہ لوگ denied اسے", ar: "فكذبوه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَخَذَهُمُ", transliteration: "fa-akhadhahumu", meaning: { en: "so seized them", ur: "so seized انہیں", ar: "فأخذهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعَذَابُ", transliteration: "l-ʿadhābu", root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب", ar: "لعذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "while they", ur: "while وہ لوگ", ar: "وهم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ظَـٰلِمُونَ", transliteration: "ẓālimūna", meaning: { en: "(were) wrongdoers", ur: "تھے wrongdoers", ar: "ظلمون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
        ],
    }
  },
  114: {
    ayahNumber: 114,
    text: "فَكُلُوا۟ مِمَّا رَزَقَكُمُ ٱللَّهُ حَلَـٰلًۭا طَيِّبًۭا وَٱشْكُرُوا۟ نِعْمَتَ ٱللَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",
    words: [
      { arabic: "فَكُلُوا۟", transliteration: "fakulū", meaning: { en: "So eat", ur: "So eat", ar: "فكلوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِمَّا", transliteration: "mimmā", meaning: { en: "of what", ur: "of کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَزَقَكُمُ", transliteration: "razaqakumu", root: "ر ز ق", meaning: { en: "Allah has provided you ", ur: "اللہ has provided تم", ar: "رزقكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah has provided you ", ur: "اللہ has provided تم", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "حَلَـٰلًۭا", transliteration: "ḥalālan", root: "ح ل ل", meaning: { en: "lawful", ur: "lawful", ar: "حللا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "طَيِّبًۭا", transliteration: "ṭayyiban", root: "ط ي ب", meaning: { en: "and good", ur: "اور اچھا", ar: "طيبا" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَٱشْكُرُوا۟", transliteration: "wa-ush'kurū", meaning: { en: "And be grateful", ur: "اور be grateful", ar: "وشكروا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نِعْمَتَ", transliteration: "niʿ'mata", meaning: { en: "(for the) Favor", ur: "کے لیے the Favor", ar: "نعمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "[you]", ur: "[you]", ar: "كنتم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِيَّاهُ", transliteration: "iyyāhu", meaning: { en: "Him Alone", ur: "اس Alone", ar: "إياه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", meaning: { en: "you worship", ur: "تم عبادت کرو", ar: "تعبدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'موصوف + صفت' }
        ],
    }
  },
  115: {
    ayahNumber: 115,
    text: "إِنَّمَا حَرَّمَ عَلَيْكُمُ ٱلْمَيْتَةَ وَٱلدَّمَ وَلَحْمَ ٱلْخِنزِيرِ وَمَآ أُهِلَّ لِغَيْرِ ٱللَّهِ بِهِۦ ۖ فَمَنِ ٱضْطُرَّ غَيْرَ بَاغٍۢ وَلَا عَادٍۢ فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَرَّمَ", transliteration: "ḥarrama", meaning: { en: "He has forbidden", ur: "وہ has forbidden", ar: "حرم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكُمُ", transliteration: "ʿalaykumu", meaning: { en: "to you", ur: "طرف تم", ar: "عليكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمَيْتَةَ", transliteration: "l-maytata", meaning: { en: "the dead animal", ur: "the dead جانور", ar: "لميتة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلدَّمَ", transliteration: "wal-dama", meaning: { en: "and the blood", ur: "اور the blood", ar: "ولدم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَحْمَ", transliteration: "walaḥma", meaning: { en: "and the flesh", ur: "اور the flesh", ar: "ولحم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْخِنزِيرِ", transliteration: "l-khinzīri", meaning: { en: "(of) the swine", ur: "of the swine", ar: "لخنزير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "and what", ur: "اور کیا/جو", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُهِلَّ", transliteration: "uhilla", meaning: { en: "has been dedicated", ur: "has been dedicated", ar: "أهل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِغَيْرِ", transliteration: "lighayri", meaning: { en: "to other (than)", ur: "طرف other than", ar: "لغير" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِهِۦ ۖ", transliteration: "bihi", meaning: { en: "[with it]", ur: "[with it]", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَمَنِ", transliteration: "famani", meaning: { en: "But (if) one", ur: "لیکن if one", ar: "فمن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱضْطُرَّ", transliteration: "uḍ'ṭurra", meaning: { en: "(is) forced ", ur: "ہے forced", ar: "ضطر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", meaning: { en: "without (being)", ur: "without being", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَاغٍۢ", transliteration: "bāghin", meaning: { en: "disobedient", ur: "disobedient", ar: "باغ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "عَادٍۢ", transliteration: "ʿādin", meaning: { en: "a transgressor ", ur: "a transgressor", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "then indeed", ur: "پھر بے شک", ar: "فإن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَفُورٌۭ", transliteration: "ghafūrun", root: "غ ف ر", meaning: { en: "(is) Oft-Forgiving", ur: "بہت بخشنے والا", ar: "غفور" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "Most Merciful", ur: "نہایت مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 19, to: 20, label: 'فعل + فاعل' },
          { from: 20, to: 21, label: 'موصوف + صفت' }
        ],
    }
  },
  116: {
    ayahNumber: 116,
    text: "وَلَا تَقُولُوا۟ لِمَا تَصِفُ أَلْسِنَتُكُمُ ٱلْكَذِبَ هَـٰذَا حَلَـٰلٌۭ وَهَـٰذَا حَرَامٌۭ لِّتَفْتَرُوا۟ عَلَى ٱللَّهِ ٱلْكَذِبَ ۚ إِنَّ ٱلَّذِينَ يَفْتَرُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ لَا يُفْلِحُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَقُولُوا۟", transliteration: "taqūlū", meaning: { en: "say", ur: "کہو", ar: "تقولوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِمَا", transliteration: "limā", meaning: { en: "for that which", ur: "کے لیے کہ/وہ جو", ar: "لما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَصِفُ", transliteration: "taṣifu", meaning: { en: "assert", ur: "assert", ar: "تصف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَلْسِنَتُكُمُ", transliteration: "alsinatukumu", meaning: { en: "your tongues", ur: "تمہارا tongues", ar: "ألسنتكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْكَذِبَ", transliteration: "l-kadhiba", meaning: { en: "the lie", ur: "the lie", ar: "لكذب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "یہ", ar: "هذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَلَـٰلٌۭ", transliteration: "ḥalālun", root: "ح ل ل", meaning: { en: "(is) lawful", ur: "ہے lawful", ar: "حلل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهَـٰذَا", transliteration: "wahādhā", meaning: { en: "and this", ur: "اور یہ", ar: "وهذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَرَامٌۭ", transliteration: "ḥarāmun", root: "ح ر م", meaning: { en: "(is) forbidden", ur: "ہے forbidden", ar: "حرام" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّتَفْتَرُوا۟", transliteration: "litaftarū", meaning: { en: "so that you invent", ur: "so کہ/وہ تم invent", ar: "لتفتروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "about", ur: "about", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَذِبَ ۚ", transliteration: "l-kadhiba", meaning: { en: "the lie", ur: "the lie", ar: "لكذب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", meaning: { en: "invent", ur: "invent", ar: "يفترون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "about", ur: "about", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَذِبَ", transliteration: "l-kadhiba", meaning: { en: "the lie", ur: "the lie", ar: "لكذب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "they will not succeed", ur: "وہ لوگ گا/گے نہیں succeed", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُفْلِحُونَ", transliteration: "yuf'liḥūna", meaning: { en: "they will not succeed", ur: "وہ لوگ گا/گے نہیں succeed", ar: "يفلحون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 18, to: 19, label: 'جار + مجرور' },
          { from: 21, to: 22, label: 'نفی + فعل' }
        ],
    }
  },
  117: {
    ayahNumber: 117,
    text: "مَتَـٰعٌۭ قَلِيلٌۭ وَلَهُمْ عَذَابٌ أَلِيمٌۭ",
    words: [
      { arabic: "مَتَـٰعٌۭ", transliteration: "matāʿun", meaning: { en: "An enjoyment", ur: "An enjoyment", ar: "متع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَلِيلٌۭ", transliteration: "qalīlun", meaning: { en: "little", ur: "little", ar: "قليل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور کے لیے انہیں", ar: "ولهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "(is) a punishment", ur: "ہے a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلِيمٌۭ", transliteration: "alīmun", meaning: { en: "painful", ur: "painful", ar: "أليم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
        ],
    }
  },
  118: {
    ayahNumber: 118,
    text: "وَعَلَى ٱلَّذِينَ هَادُوا۟ حَرَّمْنَا مَا قَصَصْنَا عَلَيْكَ مِن قَبْلُ ۖ وَمَا ظَلَمْنَـٰهُمْ وَلَـٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ",
    words: [
      { arabic: "وَعَلَى", transliteration: "waʿalā", meaning: { en: "And to", ur: "اور طرف", ar: "وعلى" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَادُوا۟", transliteration: "hādū", meaning: { en: "are Jews", ur: "ہیں Jews", ar: "هادوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَرَّمْنَا", transliteration: "ḥarramnā", meaning: { en: "We have forbidden", ur: "ہم have forbidden", ar: "حرمنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "قَصَصْنَا", transliteration: "qaṣaṣnā", meaning: { en: "We related", ur: "ہم related", ar: "قصصنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "to you", ur: "طرف تم", ar: "عليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "before", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ ۖ", transliteration: "qablu", meaning: { en: "before", ur: "before", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَلَمْنَـٰهُمْ", transliteration: "ẓalamnāhum", meaning: { en: "We wronged them", ur: "ہم wronged انہیں", ar: "ظلمنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَـٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوٓا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", root: "ن ف س", meaning: { en: "themselves", ur: "themselves", ar: "أنفسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَظْلِمُونَ", transliteration: "yaẓlimūna", root: "ظ ل م", meaning: { en: "wrong", ur: "wrong", ar: "يظلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'موصول + صلة' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'فعل + فاعل' }
        ],
    }
  },
  119: {
    ayahNumber: 119,
    text: "ثُمَّ إِنَّ رَبَّكَ لِلَّذِينَ عَمِلُوا۟ ٱلسُّوٓءَ بِجَهَـٰلَةٍۢ ثُمَّ تَابُوا۟ مِنۢ بَعْدِ ذَٰلِكَ وَأَصْلَحُوٓا۟ إِنَّ رَبَّكَ مِنۢ بَعْدِهَا لَغَفُورٌۭ رَّحِيمٌ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "طرف those جو", ar: "للذين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَمِلُوا۟", transliteration: "ʿamilū", meaning: { en: "did", ur: "کیا", ar: "عملوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسُّوٓءَ", transliteration: "l-sūa", meaning: { en: "evil", ur: "برا", ar: "لسوء" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "بِجَهَـٰلَةٍۢ", transliteration: "bijahālatin", meaning: { en: "in ignorance", ur: "میں ignorance", ar: "بجهلة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَابُوا۟", transliteration: "tābū", meaning: { en: "repented", ur: "repented", ar: "تابوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "after", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "وَأَصْلَحُوٓا۟", transliteration: "wa-aṣlaḥū", meaning: { en: "and corrected themselves ", ur: "اور corrected themselves", ar: "وأصلحوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after that", ur: "after کہ/وہ", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِهَا", transliteration: "baʿdihā", meaning: { en: "after that", ur: "after کہ/وہ", ar: "بعدها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَغَفُورٌۭ", transliteration: "laghafūrun", root: "غ ف ر", meaning: { en: "(is) surely Oft-Forgiving", ur: "ہے یقیناً بہت بخشنے والا", ar: "لغفور" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "Most Merciful", ur: "نہایت مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'موصوف + صفت' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'فعل + فاعل' },
          { from: 16, to: 17, label: 'جار + مجرور' },
          { from: 17, to: 18, label: 'موصوف + صفت' }
        ],
    }
  },
  122: {
    ayahNumber: 122,
    text: "وَءَاتَيْنَـٰهُ فِى ٱلدُّنْيَا حَسَنَةًۭ ۖ وَإِنَّهُۥ فِى ٱلْـَٔاخِرَةِ لَمِنَ ٱلصَّـٰلِحِينَ",
    words: [
      { arabic: "وَءَاتَيْنَـٰهُ", transliteration: "waātaynāhu", meaning: { en: "And We gave him", ur: "اور ہم دیا اسے", ar: "وءاتينه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "the world", ur: "the world", ar: "لدنيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَسَنَةًۭ ۖ", transliteration: "ḥasanatan", root: "ح س ن", meaning: { en: "good", ur: "اچھا", ar: "حسنة" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", meaning: { en: "and indeed, he", ur: "اور indeed, وہ", ar: "وإنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمِنَ", transliteration: "lamina", meaning: { en: "(he) will surely (be) among", ur: "وہ گا/گے یقیناً be among", ar: "لمن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلصَّـٰلِحِينَ", transliteration: "l-ṣāliḥīna", meaning: { en: "the righteous", ur: "the righteous", ar: "لصلحين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    }
  },
  123: {
    ayahNumber: 123,
    text: "ثُمَّ أَوْحَيْنَآ إِلَيْكَ أَنِ ٱتَّبِعْ مِلَّةَ إِبْرَٰهِيمَ حَنِيفًۭا ۖ وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْحَيْنَآ", transliteration: "awḥaynā", meaning: { en: "We revealed", ur: "ہم revealed", ar: "أوحينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "طرف تم", ar: "إليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنِ", transliteration: "ani", meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱتَّبِعْ", transliteration: "ittabiʿ", meaning: { en: "You follow", ur: "تم follow", ar: "تبع" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِلَّةَ", transliteration: "millata", meaning: { en: "(the) religion", ur: "the religion", ar: "ملة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", meaning: { en: "(of) Ibrahim", ur: "of Ibrahim", ar: "إبرهيم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَنِيفًۭا ۖ", transliteration: "ḥanīfan", meaning: { en: "upright", ur: "upright", ar: "حنيفا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "he was", ur: "وہ تھا", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْمُشْرِكِينَ", transliteration: "l-mush'rikīna", meaning: { en: "the polytheists", ur: "the polytheists", ar: "لمشركين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'جار + مجرور' }
        ],
    }
  },
  124: {
    ayahNumber: 124,
    text: "إِنَّمَا جُعِلَ ٱلسَّبْتُ عَلَى ٱلَّذِينَ ٱخْتَلَفُوا۟ فِيهِ ۚ وَإِنَّ رَبَّكَ لَيَحْكُمُ بَيْنَهُمْ يَوْمَ ٱلْقِيَـٰمَةِ فِيمَا كَانُوا۟ فِيهِ يَخْتَلِفُونَ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جُعِلَ", transliteration: "juʿila", meaning: { en: "was appointed", ur: "تھا appointed", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّبْتُ", transliteration: "l-sabtu", meaning: { en: "the Sabbath", ur: "the Sabbath", ar: "لسبت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "for", ur: "کے لیے", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱخْتَلَفُوا۟", transliteration: "ikh'talafū", meaning: { en: "differed", ur: "differed", ar: "ختلفوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِ ۚ", transliteration: "fīhi", meaning: { en: "in it", ur: "میں یہ", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بے شک", ar: "وإن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَحْكُمُ", transliteration: "layaḥkumu", meaning: { en: "will surely judge", ur: "گا/گے یقیناً judge", ar: "ليحكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "between them", ur: "between انہیں", ar: "بينهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(on) the Day", ur: "پر the دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", meaning: { en: "(of) the Resurrection", ur: "of the Resurrection", ar: "لقيمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيمَا", transliteration: "fīmā", meaning: { en: "in what", ur: "میں کیا/جو", ar: "فيما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "[in it]", ur: "[in it]", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَخْتَلِفُونَ", transliteration: "yakhtalifūna", meaning: { en: "differ", ur: "differ", ar: "يختلفون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'جار + مجرور' }
        ],
    }
  },
  126: {
    ayahNumber: 126,
    text: "وَإِنْ عَاقَبْتُمْ فَعَاقِبُوا۟ بِمِثْلِ مَا عُوقِبْتُم بِهِۦ ۖ وَلَئِن صَبَرْتُمْ لَهُوَ خَيْرٌۭ لِّلصَّـٰبِرِينَ",
    words: [
      { arabic: "وَإِنْ", transliteration: "wa-in", meaning: { en: "And if", ur: "اور if", ar: "وإن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَاقَبْتُمْ", transliteration: "ʿāqabtum", meaning: { en: "you retaliate", ur: "تم retaliate", ar: "عاقبتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَعَاقِبُوا۟", transliteration: "faʿāqibū", meaning: { en: "then retaliate", ur: "پھر retaliate", ar: "فعاقبوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمِثْلِ", transliteration: "bimith'li", meaning: { en: "with the like", ur: "کے ساتھ the like", ar: "بمثل" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "of what", ur: "of کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "عُوقِبْتُم", transliteration: "ʿūqib'tum", meaning: { en: "you were afflicted", ur: "تم تھے afflicted", ar: "عوقبتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ ۖ", transliteration: "bihi", meaning: { en: "with [it]", ur: "کے ساتھ [it]", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلَئِن", transliteration: "wala-in", meaning: { en: "But if", ur: "لیکن if", ar: "ولئن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَبَرْتُمْ", transliteration: "ṣabartum", meaning: { en: "you are patient", ur: "تم ہیں patient", ar: "صبرتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُوَ", transliteration: "lahuwa", meaning: { en: "surely (it) is", ur: "یقیناً یہ ہے", ar: "لهو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "خَيْرٌۭ", transliteration: "khayrun", root: "خ ي ر", meaning: { en: "better", ur: "better", ar: "خير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلصَّـٰبِرِينَ", transliteration: "lilṣṣābirīna", root: "ص ب ر", meaning: { en: "for those who are patient", ur: "کے لیے those جو ہیں patient", ar: "للصبرين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'موصول + صلة' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'جار + مجرور' }
        ],
    }
  },
};

export default TREEBANK_DATA;
