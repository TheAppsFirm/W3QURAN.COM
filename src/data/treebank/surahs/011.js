/**
 * Surah Hud (11) - Quranic Arabic Treebank
 * Hud
 * 123 Ayahs - Makki
 * Theme: Prophet Hud and 'Ad, prophets' stories, steadfastness, punishment of deniers
 */

export const TREEBANK_DATA = {
  surahId: 11,
  surahName: "Hud",
  surahNameArabic: "هود",
  totalAyahs: 123,

  1: {
    ayahNumber: 1,
    text: "الر ۚ كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ",
    words: [
      { arabic: "الر", transliteration: "alif-lām-rā", root: null, meaning: { en: "Alif Lam Ra", ur: "الف لام را", ar: "الر" }, pos: "PART", posLabel: "PART", grammar: { role: "muqattaat" } },
      { arabic: "كِتَابٌ", transliteration: "kitābun", root: "ك ت ب", meaning: { en: "A Book", ur: "ایک کتاب", ar: "كتاب" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "أُحْكِمَتْ", transliteration: "uḥkimat", root: "ح ك م", meaning: { en: "are perfected", ur: "پختہ کی گئیں", ar: "أحكمت" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "آيَاتُهُ", transliteration: "āyātuhu", root: "أ ي ي", meaning: { en: "its verses", ur: "اس کی آیات", ar: "آياته" }, pos: "N", posLabel: "N", grammar: { role: "subject of passive" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "فُصِّلَتْ", transliteration: "fuṣṣilat", root: "ف ص ل", meaning: { en: "explained in detail", ur: "تفصیل سے بیان کی گئیں", ar: "فصلت" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "II" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "from", ur: "طرف سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَّدُنْ", transliteration: "ladun", root: null, meaning: { en: "One Who is", ur: "کی جانب سے", ar: "لدن" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "حَكِيمٍ", transliteration: "ḥakīmin", root: "ح ك م", meaning: { en: "Wise", ur: "حکمت والے", ar: "حكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "attribute" } },
      { arabic: "خَبِيرٍ", transliteration: "khabīrin", root: "خ ب ر", meaning: { en: "Acquainted", ur: "باخبر", ar: "خبير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "attribute" } }
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'فعل + فاعل' }, { from: 7, to: 8, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'موصوف + صفت' }],
    },
  },

  2: {
    ayahNumber: 2,
    text: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ ۚ إِنَّنِي لَكُم مِّنْهُ نَذِيرٌ وَبَشِيرٌ",
    words: [
      { arabic: "أَلَّا", transliteration: "allā", root: null, meaning: { en: "That not", ur: "کہ نہیں", ar: "ألا" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "تَعْبُدُوا", transliteration: "taʿbudū", root: "ع ب د", meaning: { en: "you worship", ur: "تم عبادت کرو", ar: "تعبدوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "إِنَّنِي", transliteration: "innanī", root: null, meaning: { en: "Indeed I am", ur: "بیشک میں", ar: "إنني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَكُم", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّنْهُ", transliteration: "minhu", root: null, meaning: { en: "from Him", ur: "اس کی طرف سے", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīrun", root: "ن ذ ر", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "وَبَشِيرٌ", transliteration: "wa-bashīrun", root: "ب ش ر", meaning: { en: "and a bringer of good tidings", ur: "اور خوشخبری دینے والا", ar: "وبشير" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [{ from: 7, to: 8, label: 'جار + مجرور' }],
    },
  },

  3: {
    ayahNumber: 3,
    text: "وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُمَتِّعْكُم مَّتَاعًا حَسَنًا إِلَىٰ أَجَلٍ مُّسَمًّى وَيُؤْتِ كُلَّ ذِي فَضْلٍ فَضْلَهُ",
    words: [
      { arabic: "وَأَنِ", transliteration: "wa-ani", root: null, meaning: { en: "And that", ur: "اور یہ کہ", ar: "وأن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "اسْتَغْفِرُوا", transliteration: "istaghfirū", root: "غ ف ر", meaning: { en: "seek forgiveness", ur: "معافی مانگو", ar: "استغفروا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "X" } },
      { arabic: "رَبَّكُمْ", transliteration: "rabbakum", root: "ر ب ب", meaning: { en: "of your Lord", ur: "اپنے رب سے", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "تُوبُوا", transliteration: "tūbū", root: "ت و ب", meaning: { en: "repent", ur: "توبہ کرو", ar: "توبوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", root: null, meaning: { en: "to Him", ur: "اس کی طرف", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "يُمَتِّعْكُم", transliteration: "yumattiʿkum", root: "م ت ع", meaning: { en: "He will let you enjoy", ur: "وہ تمہیں فائدہ دے گا", ar: "يمتعكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "II" } },
      { arabic: "مَّتَاعًا", transliteration: "matāʿan", root: "م ت ع", meaning: { en: "enjoyment", ur: "فائدہ", ar: "متاعاً" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" } },
      { arabic: "حَسَنًا", transliteration: "ḥasanan", root: "ح س ن", meaning: { en: "good", ur: "اچھا", ar: "حسناً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "until", ur: "تک", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَجَلٍ", transliteration: "ajalin", root: "أ ج ل", meaning: { en: "a term", ur: "وقت", ar: "أجل" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مُّسَمًّى", transliteration: "musamman", root: "س م و", meaning: { en: "appointed", ur: "مقررہ", ar: "مسمى" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" }, features: { form: "II" } },
      { arabic: "وَيُؤْتِ", transliteration: "wa-yuʾti", root: "أ ت ي", meaning: { en: "and will give", ur: "اور دے گا", ar: "ويؤت" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "IV" } },
      { arabic: "كُلَّ", transliteration: "kulla", root: null, meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "ذِي", transliteration: "dhī", root: null, meaning: { en: "possessor of", ur: "والے کو", ar: "ذي" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "فَضْلٍ", transliteration: "faḍlin", root: "ف ض ل", meaning: { en: "favor", ur: "فضل", ar: "فضل" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "فَضْلَهُ", transliteration: "faḍlahu", root: "ف ض ل", meaning: { en: "his favor", ur: "اس کا فضل", ar: "فضله" }, pos: "N", posLabel: "N", grammar: { role: "second object" } }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }, { from: 7, to: 8, label: 'فعل + فاعل' }, { from: 8, to: 9, label: 'موصوف + صفت' }, { from: 10, to: 11, label: 'جار + مجرور' }, { from: 11, to: 12, label: 'موصوف + صفت' }, { from: 13, to: 14, label: 'فعل + فاعل' }],
    },
  },

  25: {
    ayahNumber: 25,
    text: "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ إِنِّي لَكُمْ نَذِيرٌ مُّبِينٌ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "wa-laqad", root: null, meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", root: "ر س ل", meaning: { en: "We sent", ur: "ہم نے بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "نُوحًا", transliteration: "nūḥan", root: null, meaning: { en: "Nuh", ur: "نوح کو", ar: "نوحاً" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْمِهِ", transliteration: "qawmihi", root: "ق و م", meaning: { en: "his people", ur: "اس کی قوم", ar: "قومه" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "Indeed I am", ur: "بیشک میں", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "نَذِيرٌ", transliteration: "nadhīrun", root: "ن ذ ر", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "نذير" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", root: "ب ي ن", meaning: { en: "clear", ur: "کھلا", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" }, features: { form: "IV" } }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }, { from: 4, to: 5, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'موصوف + صفت' }],
    },
  },

  37: {
    ayahNumber: 37,
    text: "وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا ۚ إِنَّهُم مُّغْرَقُونَ",
    words: [
      { arabic: "وَاصْنَعِ", transliteration: "wa-ṣnaʿi", root: "ص ن ع", meaning: { en: "And construct", ur: "اور بناؤ", ar: "واصنع" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "الْفُلْكَ", transliteration: "al-fulka", root: "ف ل ك", meaning: { en: "the ship", ur: "کشتی", ar: "الفلك" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "بِأَعْيُنِنَا", transliteration: "bi-aʿyuninā", root: "ع ي ن", meaning: { en: "under Our observation", ur: "ہماری نگرانی میں", ar: "بأعيننا" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "وَوَحْيِنَا", transliteration: "wa-waḥyinā", root: "و ح ي", meaning: { en: "and Our inspiration", ur: "اور ہماری وحی سے", ar: "ووحينا" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and do not", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تُخَاطِبْنِي", transliteration: "tukhāṭibnī", root: "خ ط ب", meaning: { en: "address Me", ur: "مجھ سے بات کرو", ar: "تخاطبني" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" }, features: { form: "III" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "concerning", ur: "بارے میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "ظَلَمُوا", transliteration: "ẓalamū", root: "ظ ل م", meaning: { en: "wronged", ur: "ظلم کیا", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "إِنَّهُم", transliteration: "innahum", root: null, meaning: { en: "Indeed they", ur: "بیشک وہ", ar: "إنهم" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "مُّغْرَقُونَ", transliteration: "mughraqūna", root: "غ ر ق", meaning: { en: "will be drowned", ur: "ڈبوئے جائیں گے", ar: "مغرقون" }, pos: "N", posLabel: "N", grammar: { role: "predicate" }, features: { form: "IV", passive_participle: true } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 5, to: 6, label: 'نفی + فعل' }, { from: 8, to: 9, label: 'موصول + صلة' }],
    },
  },

  41: {
    ayahNumber: 41,
    text: "وَقَالَ ارْكَبُوا فِيهَا بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا ۚ إِنَّ رَبِّي لَغَفُورٌ رَّحِيمٌ",
    words: [
      { arabic: "وَقَالَ", transliteration: "wa-qāla", root: "ق و ل", meaning: { en: "And he said", ur: "اور کہا", ar: "وقال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "ارْكَبُوا", transliteration: "irkabū", root: "ر ك ب", meaning: { en: "Board", ur: "سوار ہو جاؤ", ar: "اركبوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "in it", ur: "اس میں", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "بِسْمِ", transliteration: "bismi", root: "س م و", meaning: { en: "in the name of", ur: "نام سے", ar: "بسم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مَجْرَاهَا", transliteration: "majrāhā", root: "ج ر ي", meaning: { en: "its course", ur: "اس کا چلنا", ar: "مجراها" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "وَمُرْسَاهَا", transliteration: "wa-mursāhā", root: "ر س و", meaning: { en: "and its anchorage", ur: "اور ٹھہرنا", ar: "ومرساها" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "رَبِّي", transliteration: "rabbī", root: "ر ب ب", meaning: { en: "my Lord", ur: "میرا رب", ar: "ربي" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna" } },
      { arabic: "لَغَفُورٌ", transliteration: "la-ghafūrun", root: "غ ف ر", meaning: { en: "is Forgiving", ur: "یقیناً بخشنے والا", ar: "لغفور" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { pattern: "faʿūl", intensive: true } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "Merciful", ur: "رحم والا", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 9, to: 10, label: 'موصوف + صفت' }],
    },
  },

  50: {
    ayahNumber: 50,
    text: "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ إِنْ أَنتُمْ إِلَّا مُفْتَرُونَ",
    words: [
      { arabic: "وَإِلَىٰ", transliteration: "wa-ilā", root: null, meaning: { en: "And to", ur: "اور طرف", ar: "وإلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَادٍ", transliteration: "ʿādin", root: null, meaning: { en: "'Ad", ur: "عاد", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { role: "genitive", proper_noun: true } },
      { arabic: "أَخَاهُمْ", transliteration: "akhāhum", root: "أ خ و", meaning: { en: "their brother", ur: "ان کے بھائی", ar: "أخاهم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "هُودًا", transliteration: "hūdan", root: null, meaning: { en: "Hud", ur: "ہود کو", ar: "هوداً" }, pos: "N", posLabel: "N", grammar: { role: "apposition", proper_noun: true } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "يَا", transliteration: "yā", root: null, meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "my people", ur: "میری قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "اعْبُدُوا", transliteration: "uʿbudū", root: "ع ب د", meaning: { en: "worship", ur: "عبادت کرو", ar: "اعبدوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَكُم", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّنْ", transliteration: "min", root: null, meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِلَٰهٍ", transliteration: "ilāhin", root: "أ ل ه", meaning: { en: "god", ur: "معبود", ar: "إله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "غَيْرُهُ", transliteration: "ghayruhu", root: "غ ي ر", meaning: { en: "other than Him", ur: "اس کے سوا", ar: "غيره" }, pos: "N", posLabel: "N", grammar: { role: "attribute" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "not", ur: "نہیں", ar: "إن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أَنتُمْ", transliteration: "antum", root: null, meaning: { en: "you", ur: "تم", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "مُفْتَرُونَ", transliteration: "muftarūna", root: "ف ر ي", meaning: { en: "fabricators", ur: "جھوٹ گھڑنے والے", ar: "مفترون" }, pos: "N", posLabel: "N", grammar: { role: "predicate" }, features: { form: "VIII", active_participle: true } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'فعل + فاعل' }, { from: 12, to: 13, label: 'جار + مجرور' }],
    },
  },

  56: {
    ayahNumber: 56,
    text: "إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم ۚ مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا ۚ إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
    words: [
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "Indeed I", ur: "بیشک میں نے", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "تَوَكَّلْتُ", transliteration: "tawakkaltu", root: "و ك ل", meaning: { en: "put my trust", ur: "بھروسہ کیا", ar: "توكلت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "V" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "in", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "رَبِّي", transliteration: "rabbī", root: "ر ب ب", meaning: { en: "my Lord", ur: "میرے رب", ar: "ربي" }, pos: "N", posLabel: "N", grammar: { role: "apposition" } },
      { arabic: "وَرَبِّكُم", transliteration: "wa-rabbikum", root: "ر ب ب", meaning: { en: "and your Lord", ur: "اور تمہارے رب", ar: "وربكم" }, pos: "N", posLabel: "N", grammar: { role: "apposition" } },
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دَابَّةٍ", transliteration: "dābbatin", root: "د ب ب", meaning: { en: "creature", ur: "جانور", ar: "دابة" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "هُوَ", transliteration: "huwa", root: null, meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "آخِذٌ", transliteration: "ākhidhun", root: "أ خ ذ", meaning: { en: "holds", ur: "پکڑنے والا", ar: "آخذ" }, pos: "N", posLabel: "N", grammar: { role: "predicate", active_participle: true } },
      { arabic: "بِنَاصِيَتِهَا", transliteration: "bi-nāṣiyatihā", root: "ن ص ي", meaning: { en: "by its forelock", ur: "اس کی پیشانی سے", ar: "بناصيتها" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "رَبِّي", transliteration: "rabbī", root: "ر ب ب", meaning: { en: "my Lord", ur: "میرا رب", ar: "ربي" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "is on", ur: "پر ہے", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صِرَاطٍ", transliteration: "ṣirāṭin", root: "ص ر ط", meaning: { en: "a path", ur: "راستے", ar: "صراط" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مُّسْتَقِيمٍ", transliteration: "mustaqīmin", root: "ق و م", meaning: { en: "straight", ur: "سیدھے", ar: "مستقيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" }, features: { form: "X" } }
    ],
    structure: {
      relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'جار + مجرور' }, { from: 16, to: 17, label: 'جار + مجرور' }, { from: 17, to: 18, label: 'موصوف + صفت' }],
    },
  },

  61: {
    ayahNumber: 61,
    text: "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ هُوَ أَنشَأَكُم مِّنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا",
    words: [
      { arabic: "وَإِلَىٰ", transliteration: "wa-ilā", root: null, meaning: { en: "And to", ur: "اور طرف", ar: "وإلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ثَمُودَ", transliteration: "thamūda", root: null, meaning: { en: "Thamud", ur: "ثمود", ar: "ثمود" }, pos: "N", posLabel: "N", grammar: { role: "genitive", proper_noun: true } },
      { arabic: "أَخَاهُمْ", transliteration: "akhāhum", root: "أ خ و", meaning: { en: "their brother", ur: "ان کے بھائی", ar: "أخاهم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "صَالِحًا", transliteration: "ṣāliḥan", root: "ص ل ح", meaning: { en: "Salih", ur: "صالح کو", ar: "صالحاً" }, pos: "N", posLabel: "N", grammar: { role: "apposition", proper_noun: true } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "يَا", transliteration: "yā", root: null, meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "my people", ur: "میری قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "اعْبُدُوا", transliteration: "uʿbudū", root: "ع ب د", meaning: { en: "worship", ur: "عبادت کرو", ar: "اعبدوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَكُم", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّنْ", transliteration: "min", root: null, meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِلَٰهٍ", transliteration: "ilāhin", root: "أ ل ه", meaning: { en: "god", ur: "معبود", ar: "إله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "غَيْرُهُ", transliteration: "ghayruhu", root: "غ ي ر", meaning: { en: "other than Him", ur: "اس کے سوا", ar: "غيره" }, pos: "N", posLabel: "N", grammar: { role: "attribute" } },
      { arabic: "هُوَ", transliteration: "huwa", root: null, meaning: { en: "He", ur: "اس نے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "أَنشَأَكُم", transliteration: "anshaʾakum", root: "ن ش أ", meaning: { en: "produced you", ur: "تمہیں پیدا کیا", ar: "أنشأكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "وَاسْتَعْمَرَكُمْ", transliteration: "wa-staʿmarakum", root: "ع م ر", meaning: { en: "and settled you", ur: "اور تمہیں آباد کیا", ar: "واستعمركم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "X" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "in it", ur: "اس میں", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'فعل + فاعل' }, { from: 12, to: 13, label: 'جار + مجرور' }, { from: 17, to: 18, label: 'جار + مجرور' }],
    },
  },

  69: {
    ayahNumber: 69,
    text: "وَلَقَدْ جَاءَتْ رُسُلُنَا إِبْرَاهِيمَ بِالْبُشْرَىٰ قَالُوا سَلَامًا ۖ قَالَ سَلَامٌ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "wa-laqad", root: null, meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "جَاءَتْ", transliteration: "jāʾat", root: "ج ي أ", meaning: { en: "came", ur: "آئے", ar: "جاءت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "رُسُلُنَا", transliteration: "rusulunā", root: "ر س ل", meaning: { en: "Our messengers", ur: "ہمارے فرشتے", ar: "رسلنا" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "إِبْرَاهِيمَ", transliteration: "ibrāhīma", root: null, meaning: { en: "to Ibrahim", ur: "ابراہیم کے پاس", ar: "إبراهيم" }, pos: "N", posLabel: "N", grammar: { role: "object", proper_noun: true } },
      { arabic: "بِالْبُشْرَىٰ", transliteration: "bi-al-bushrā", root: "ب ش ر", meaning: { en: "with good tidings", ur: "خوشخبری لے کر", ar: "بالبشرى" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } },
      { arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "سَلَامًا", transliteration: "salāman", root: "س ل م", meaning: { en: "Peace", ur: "سلام", ar: "سلاماً" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "انہوں نے کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "سَلَامٌ", transliteration: "salāmun", root: "س ل م", meaning: { en: "Peace", ur: "سلام", ar: "سلام" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }, { from: 6, to: 7, label: 'فعل + فاعل' }, { from: 8, to: 9, label: 'فعل + فاعل' }],
    },
  },

  75: {
    ayahNumber: 75,
    text: "إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ أَوَّاهٌ مُّنِيبٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "إِبْرَاهِيمَ", transliteration: "ibrāhīma", root: null, meaning: { en: "Ibrahim", ur: "ابراہیم", ar: "إبراهيم" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna", proper_noun: true } },
      { arabic: "لَحَلِيمٌ", transliteration: "la-ḥalīmun", root: "ح ل م", meaning: { en: "was forbearing", ur: "یقیناً بردبار", ar: "لحليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { pattern: "faʿīl" } },
      { arabic: "أَوَّاهٌ", transliteration: "awwāhun", root: "أ و ه", meaning: { en: "grieving/supplicating", ur: "آہ و زاری کرنے والا", ar: "أواه" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { pattern: "faʿʿāl", intensive: true } },
      { arabic: "مُّنِيبٌ", transliteration: "munībun", root: "ن و ب", meaning: { en: "returning [to Allah]", ur: "رجوع کرنے والا", ar: "منيب" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { form: "IV" } }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'موصوف + صفت' }],
    },
  },

  84: {
    ayahNumber: 84,
    text: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ وَلَا تَنقُصُوا الْمِكْيَالَ وَالْمِيزَانَ",
    words: [
      { arabic: "وَإِلَىٰ", transliteration: "wa-ilā", root: null, meaning: { en: "And to", ur: "اور طرف", ar: "وإلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَدْيَنَ", transliteration: "madyana", root: null, meaning: { en: "Madyan", ur: "مدین", ar: "مدين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", proper_noun: true } },
      { arabic: "أَخَاهُمْ", transliteration: "akhāhum", root: "أ خ و", meaning: { en: "their brother", ur: "ان کے بھائی", ar: "أخاهم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "شُعَيْبًا", transliteration: "shuʿayban", root: null, meaning: { en: "Shu'ayb", ur: "شعیب کو", ar: "شعيباً" }, pos: "N", posLabel: "N", grammar: { role: "apposition", proper_noun: true } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "يَا", transliteration: "yā", root: null, meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "my people", ur: "میری قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "vocative" } },
      { arabic: "اعْبُدُوا", transliteration: "uʿbudū", root: "ع ب د", meaning: { en: "worship", ur: "عبادت کرو", ar: "اعبدوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَكُم", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّنْ", transliteration: "min", root: null, meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِلَٰهٍ", transliteration: "ilāhin", root: "أ ل ه", meaning: { en: "god", ur: "معبود", ar: "إله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "غَيْرُهُ", transliteration: "ghayruhu", root: "غ ي ر", meaning: { en: "other than Him", ur: "اس کے سوا", ar: "غيره" }, pos: "N", posLabel: "N", grammar: { role: "attribute" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and do not", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَنقُصُوا", transliteration: "tanquṣū", root: "ن ق ص", meaning: { en: "decrease", ur: "کم کرو", ar: "تنقصوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "الْمِكْيَالَ", transliteration: "al-mikyāla", root: "ك ي ل", meaning: { en: "the measure", ur: "ناپ", ar: "المكيال" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "وَالْمِيزَانَ", transliteration: "wa-al-mīzāna", root: "و ز ن", meaning: { en: "and the weight", ur: "اور تول", ar: "والميزان" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'فعل + فاعل' }, { from: 12, to: 13, label: 'جار + مجرور' }, { from: 15, to: 16, label: 'نفی + فعل' }, { from: 16, to: 17, label: 'فعل + فاعل' }],
    },
  },

  112: {
    ayahNumber: 112,
    text: "فَاسْتَقِمْ كَمَا أُمِرْتَ وَمَن تَابَ مَعَكَ وَلَا تَطْغَوْا ۚ إِنَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    words: [
      { arabic: "فَاسْتَقِمْ", transliteration: "fa-staqim", root: "ق و م", meaning: { en: "So be steadfast", ur: "پس ثابت قدم رہو", ar: "فاستقم" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "X" } },
      { arabic: "كَمَا", transliteration: "kamā", root: null, meaning: { en: "as", ur: "جیسا", ar: "كما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "comparative" } },
      { arabic: "أُمِرْتَ", transliteration: "umirta", root: "أ م ر", meaning: { en: "you have been commanded", ur: "تمہیں حکم دیا گیا", ar: "أمرت" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" } },
      { arabic: "وَمَن", transliteration: "wa-man", root: null, meaning: { en: "and whoever", ur: "اور جو", ar: "ومن" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَابَ", transliteration: "tāba", root: "ت و ب", meaning: { en: "repented", ur: "توبہ کی", ar: "تاب" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مَعَكَ", transliteration: "maʿaka", root: null, meaning: { en: "with you", ur: "تمہارے ساتھ", ar: "معك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "and do not", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَطْغَوْا", transliteration: "taṭghaw", root: "ط غ ي", meaning: { en: "transgress", ur: "سرکشی کرو", ar: "تطغوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", root: null, meaning: { en: "Indeed He", ur: "بیشک وہ", ar: "إنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "بِمَا", transliteration: "bimā", root: null, meaning: { en: "of what", ur: "جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", root: "ع م ل", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "بَصِيرٌ", transliteration: "baṣīrun", root: "ب ص ر", meaning: { en: "is Seeing", ur: "دیکھنے والا", ar: "بصير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { pattern: "faʿīl" } }
    ],
    structure: {
      relationships: [{ from: 4, to: 5, label: 'موصول + صلة' }, { from: 7, to: 8, label: 'نفی + فعل' }],
    },
  },

  113: {
    ayahNumber: 113,
    text: "وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ وَمَا لَكُم مِّن دُونِ اللَّهِ مِنْ أَوْلِيَاءَ ثُمَّ لَا تُنصَرُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "And do not", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَرْكَنُوا", transliteration: "tarkanū", root: "ر ك ن", meaning: { en: "incline", ur: "جھکو", ar: "تركنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "إِلَى", transliteration: "ilā", root: null, meaning: { en: "toward", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "ظَلَمُوا", transliteration: "ẓalamū", root: "ظ ل م", meaning: { en: "wronged", ur: "ظلم کیا", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "فَتَمَسَّكُمُ", transliteration: "fa-tamassakum", root: "م س س", meaning: { en: "lest touch you", ur: "تو تمہیں پکڑ لے", ar: "فتمسكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "النَّارُ", transliteration: "al-nāru", root: "ن و ر", meaning: { en: "the Fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "وَمَا", transliteration: "wa-mā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَكُم", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "besides", ur: "سوا", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", root: null, meaning: { en: "besides", ur: "غیر", ar: "دون" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَوْلِيَاءَ", transliteration: "awliyāʾa", root: "و ل ي", meaning: { en: "protectors", ur: "مددگار", ar: "أولياء" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تُنصَرُونَ", transliteration: "tunṣarūna", root: "ن ص ر", meaning: { en: "you will be helped", ur: "تم کی مدد نہ ہوگی", ar: "تنصرون" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'نفی + فعل' }, { from: 4, to: 5, label: 'موصول + صلة' }, { from: 6, to: 7, label: 'فعل + فاعل' }, { from: 10, to: 11, label: 'جار + مجرور' }, { from: 13, to: 14, label: 'جار + مجرور' }, { from: 16, to: 17, label: 'نفی + فعل' }],
    },
  },

  114: {
    ayahNumber: 114,
    text: "وَأَقِمِ الصَّلَاةَ طَرَفَيِ النَّهَارِ وَزُلَفًا مِّنَ اللَّيْلِ ۚ إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ ۚ ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ",
    words: [
      { arabic: "وَأَقِمِ", transliteration: "wa-aqimi", root: "ق و م", meaning: { en: "And establish", ur: "اور قائم کرو", ar: "وأقم" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "IV" } },
      { arabic: "الصَّلَاةَ", transliteration: "al-ṣalāta", root: "ص ل و", meaning: { en: "the prayer", ur: "نماز", ar: "الصلاة" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "طَرَفَيِ", transliteration: "ṭarafayi", root: "ط ر ف", meaning: { en: "at the two ends", ur: "دونوں سروں پر", ar: "طرفي" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "النَّهَارِ", transliteration: "al-nahāri", root: "ن ه ر", meaning: { en: "of the day", ur: "دن کے", ar: "النهار" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "وَزُلَفًا", transliteration: "wa-zulafan", root: "ز ل ف", meaning: { en: "and in the first hours", ur: "اور رات کے پہلے پہر", ar: "وزلفاً" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "of", ur: "کے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّيْلِ", transliteration: "al-layli", root: "ل ي ل", meaning: { en: "the night", ur: "رات", ar: "الليل" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "الْحَسَنَاتِ", transliteration: "al-ḥasanāti", root: "ح س ن", meaning: { en: "good deeds", ur: "نیکیاں", ar: "الحسنات" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna", definite: true } },
      { arabic: "يُذْهِبْنَ", transliteration: "yudhhibna", root: "ذ ه ب", meaning: { en: "remove", ur: "مٹا دیتی ہیں", ar: "يذهبن" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "السَّيِّئَاتِ", transliteration: "al-sayyiʾāti", root: "س و أ", meaning: { en: "the evil deeds", ur: "برائیوں کو", ar: "السيئات" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "That", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "ذِكْرَىٰ", transliteration: "dhikrā", root: "ذ ك ر", meaning: { en: "is a reminder", ur: "نصیحت ہے", ar: "ذكرى" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "لِلذَّاكِرِينَ", transliteration: "li-al-dhākirīna", root: "ذ ك ر", meaning: { en: "for those who remember", ur: "یاد کرنے والوں کے لیے", ar: "للذاكرين" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 6, to: 7, label: 'جار + مجرور' }, { from: 10, to: 11, label: 'فعل + فاعل' }],
    },
  },

  115: {
    ayahNumber: 115,
    text: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    words: [
      { arabic: "وَاصْبِرْ", transliteration: "wa-ṣbir", root: "ص ب ر", meaning: { en: "And be patient", ur: "اور صبر کرو", ar: "واصبر" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", root: null, meaning: { en: "for indeed", ur: "بیشک", ar: "فإن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "does not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُضِيعُ", transliteration: "yuḍīʿu", root: "ض ي ع", meaning: { en: "waste", ur: "ضائع کرتا", ar: "يضيع" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "أَجْرَ", transliteration: "ajra", root: "أ ج ر", meaning: { en: "the reward", ur: "اجر", ar: "أجر" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "الْمُحْسِنِينَ", transliteration: "al-muḥsinīna", root: "ح س ن", meaning: { en: "of the doers of good", ur: "نیکی کرنے والوں کا", ar: "المحسنين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true }, features: { form: "IV", active_participle: true } }
    ],
    structure: {
      relationships: [{ from: 4, to: 5, label: 'نفی + فعل' }, { from: 5, to: 6, label: 'فعل + فاعل' }],
    },
  },

  120: {
    ayahNumber: 120,
    text: "وَكُلًّا نَّقُصُّ عَلَيْكَ مِنْ أَنبَاءِ الرُّسُلِ مَا نُثَبِّتُ بِهِ فُؤَادَكَ ۚ وَجَاءَكَ فِي هَٰذِهِ الْحَقُّ وَمَوْعِظَةٌ وَذِكْرَىٰ لِلْمُؤْمِنِينَ",
    words: [
      { arabic: "وَكُلًّا", transliteration: "wa-kullan", root: null, meaning: { en: "And all", ur: "اور سب", ar: "وكلاً" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "نَّقُصُّ", transliteration: "naquṣṣu", root: "ق ص ص", meaning: { en: "We relate", ur: "ہم بیان کرتے ہیں", ar: "نقص" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", root: null, meaning: { en: "to you", ur: "تم پر", ar: "عليك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنبَاءِ", transliteration: "anbāʾi", root: "ن ب أ", meaning: { en: "the news", ur: "خبریں", ar: "أنباء" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "الرُّسُلِ", transliteration: "al-rusuli", root: "ر س ل", meaning: { en: "of the messengers", ur: "رسولوں کی", ar: "الرسل" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "that by which", ur: "جس سے", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "نُثَبِّتُ", transliteration: "nuthabbit", root: "ث ب ت", meaning: { en: "We make firm", ur: "ہم مضبوط کرتے ہیں", ar: "نثبت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "II" } },
      { arabic: "بِهِ", transliteration: "bihi", root: null, meaning: { en: "by it", ur: "اس سے", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فُؤَادَكَ", transliteration: "fuʾādaka", root: "ف أ د", meaning: { en: "your heart", ur: "تمہارا دل", ar: "فؤادك" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَجَاءَكَ", transliteration: "wa-jāʾaka", root: "ج ي أ", meaning: { en: "And has come to you", ur: "اور آیا تمہارے پاس", ar: "وجاءك" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَٰذِهِ", transliteration: "hādhihi", root: null, meaning: { en: "this", ur: "اس", ar: "هذه" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "الْحَقُّ", transliteration: "al-ḥaqqu", root: "ح ق ق", meaning: { en: "the truth", ur: "سچائی", ar: "الحق" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "وَمَوْعِظَةٌ", transliteration: "wa-mawʿiẓatun", root: "و ع ظ", meaning: { en: "and an admonition", ur: "اور نصیحت", ar: "وموعظة" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "وَذِكْرَىٰ", transliteration: "wa-dhikrā", root: "ذ ك ر", meaning: { en: "and a reminder", ur: "اور یاددہانی", ar: "وذكرى" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "لِلْمُؤْمِنِينَ", transliteration: "li-al-muʾminīna", root: "أ م ن", meaning: { en: "for the believers", ur: "مومنوں کے لیے", ar: "للمؤمنين" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true }, features: { form: "IV", active_participle: true } }
    ],
    structure: {
      relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'موصول + صلة' }, { from: 9, to: 10, label: 'جار + مجرور' }],
    },
  },

  123: {
    ayahNumber: 123,
    text: "وَلِلَّهِ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ وَإِلَيْهِ يُرْجَعُ الْأَمْرُ كُلُّهُ فَاعْبُدْهُ وَتَوَكَّلْ عَلَيْهِ ۚ وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ",
    words: [
      { arabic: "وَلِلَّهِ", transliteration: "wa-li-Llāhi", root: "أ ل ه", meaning: { en: "And to Allah", ur: "اور اللہ ہی کے لیے", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "غَيْبُ", transliteration: "ghaybu", root: "غ ي ب", meaning: { en: "belongs the unseen", ur: "غیب ہے", ar: "غيب" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", root: "س م و", meaning: { en: "of the heavens", ur: "آسمانوں کا", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "وَالْأَرْضِ", transliteration: "wa-al-arḍi", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین کا", ar: "والأرض" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", root: null, meaning: { en: "and to Him", ur: "اور اسی کی طرف", ar: "وإليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "يُرْجَعُ", transliteration: "yurjaʿu", root: "ر ج ع", meaning: { en: "will be returned", ur: "لوٹایا جائے گا", ar: "يرجع" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" } },
      { arabic: "الْأَمْرُ", transliteration: "al-amru", root: "أ م ر", meaning: { en: "the matter", ur: "معاملہ", ar: "الأمر" }, pos: "N", posLabel: "N", grammar: { role: "subject of passive", definite: true } },
      { arabic: "كُلُّهُ", transliteration: "kulluhu", root: null, meaning: { en: "all of it", ur: "سارا", ar: "كله" }, pos: "N", posLabel: "N", grammar: { role: "emphasis" } },
      { arabic: "فَاعْبُدْهُ", transliteration: "fa-ʿbudhu", root: "ع ب د", meaning: { en: "so worship Him", ur: "پس اس کی عبادت کرو", ar: "فاعبده" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "وَتَوَكَّلْ", transliteration: "wa-tawakkal", root: "و ك ل", meaning: { en: "and rely", ur: "اور بھروسہ کرو", ar: "وتوكل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "V" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "upon Him", ur: "اس پر", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَمَا", transliteration: "wa-mā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", root: "ر ب ب", meaning: { en: "is your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "بِغَافِلٍ", transliteration: "bi-ghāfilin", root: "غ ف ل", meaning: { en: "unaware", ur: "غافل", ar: "بغافل" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", root: null, meaning: { en: "of what", ur: "جو کچھ", ar: "عما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", root: "ع م ل", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } }
    ],
    structure: {
      relationships: [{ from: 6, to: 7, label: 'فعل + فاعل' }, { from: 13, to: 14, label: 'موصوف + صفت' }],
    },
  },
  4: {
    ayahNumber: 4,
    text: "إِلَى ٱللَّهِ مَرْجِعُكُمْ ۖ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ",
    words: [
      { arabic: "إِلَى", transliteration: "ilā", root: null, meaning: { en: "To", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَرْجِعُكُمْ ۖ", transliteration: "marjiʿukum", root: null, meaning: { en: "(is) your return", ur: "ہے تمہارا لوٹنا", ar: "مرجعكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", root: null, meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "(is) on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", root: null, meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", root: null, meaning: { en: "thing", ur: "thing", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", root: "ق د ر", meaning: { en: "All-Powerful", ur: "قدرت والا", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  5: {
    ayahNumber: 5,
    text: "أَلَآ إِنَّهُمْ يَثْنُونَ صُدُورَهُمْ لِيَسْتَخْفُوا۟ مِنْهُ ۚ أَلَا حِينَ يَسْتَغْشُونَ ثِيَابَهُمْ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ ۚ إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ",
    words: [
      { arabic: "أَلَآ", transliteration: "alā", root: null, meaning: { en: "No doubt", ur: "خبردار", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", root: null, meaning: { en: "They", ur: "وہ لوگ", ar: "إنهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَثْنُونَ", transliteration: "yathnūna", root: null, meaning: { en: "fold up", ur: "fold up", ar: "يثنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صُدُورَهُمْ", transliteration: "ṣudūrahum", root: null, meaning: { en: "their breasts", ur: "their breasts", ar: "صدورهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِيَسْتَخْفُوا۟", transliteration: "liyastakhfū", root: null, meaning: { en: "that they may hide", ur: "کہ/وہ وہ لوگ may hide", ar: "ليستخفوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِنْهُ ۚ", transliteration: "min'hu", root: null, meaning: { en: "from Him", ur: "سے اس", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَلَا", transliteration: "alā", root: null, meaning: { en: "Surely", ur: "یقیناً", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "حِينَ", transliteration: "ḥīna", root: null, meaning: { en: "when", ur: "when", ar: "حين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَسْتَغْشُونَ", transliteration: "yastaghshūna", root: null, meaning: { en: "they cover (themselves)", ur: "وہ لوگ cover themselves", ar: "يستغشون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثِيَابَهُمْ", transliteration: "thiyābahum", root: null, meaning: { en: "(with) their garments", ur: "کے ساتھ their garments", ar: "ثيابهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "He knows", ur: "وہ جانتا ہے", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُسِرُّونَ", transliteration: "yusirrūna", root: null, meaning: { en: "they conceal", ur: "وہ لوگ conceal", ar: "يسرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "and what", ur: "اور کیا/جو", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُعْلِنُونَ ۚ", transliteration: "yuʿ'linūna", root: null, meaning: { en: "they reveal", ur: "وہ لوگ reveal", ar: "يعلنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "Indeed, He", ur: "Indeed, وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلِيمٌۢ", transliteration: "ʿalīmun", root: null, meaning: { en: "(is) All-Knower", ur: "ہے All-Knower", ar: "عليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "بِذَاتِ", transliteration: "bidhāti", root: null, meaning: { en: "of what", ur: "of کیا/جو", ar: "بذات" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلصُّدُورِ", transliteration: "l-ṣudūri", root: null, meaning: { en: "(is in) the breasts", ur: "ہے میں the breasts", ar: "لصدور" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  6: {
    ayahNumber: 6,
    text: "۞ وَمَا مِن دَآبَّةٍۢ فِى ٱلْأَرْضِ إِلَّا عَلَى ٱللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا ۚ كُلٌّۭ فِى كِتَـٰبٍۢ مُّبِينٍۢ",
    words: [
      { arabic: "۞ وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "۞ وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دَآبَّةٍۢ", transliteration: "dābbatin", root: null, meaning: { en: "moving creature", ur: "moving creature", ar: "دابة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "but", ur: "لیکن", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رِزْقُهَا", transliteration: "riz'quhā", root: null, meaning: { en: "(is) its provision", ur: "ہے its رزق", ar: "رزقها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَعْلَمُ", transliteration: "wayaʿlamu", root: "ع ل م", meaning: { en: "And He knows", ur: "اور وہ جانتا ہے", ar: "ويعلم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُسْتَقَرَّهَا", transliteration: "mus'taqarrahā", root: null, meaning: { en: "its dwelling place", ur: "its dwelling place", ar: "مستقرها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمُسْتَوْدَعَهَا ۚ", transliteration: "wamus'tawdaʿahā", root: null, meaning: { en: "and its place of storage", ur: "اور its place of storage", ar: "ومستودعها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلٌّۭ", transliteration: "kullun", root: null, meaning: { en: "All", ur: "All", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "(is) in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كِتَـٰبٍۢ", transliteration: "kitābin", root: "ك ت ب", meaning: { en: "a Record", ur: "a Record", ar: "كتب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٍۢ", transliteration: "mubīnin", root: null, meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'موصوف + صفت' }
      ],
    },
  },
  7: {
    ayahNumber: 7,
    text: "وَهُوَ ٱلَّذِى خَلَقَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ فِى سِتَّةِ أَيَّامٍۢ وَكَانَ عَرْشُهُۥ عَلَى ٱلْمَآءِ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا ۗ وَلَئِن قُلْتَ إِنَّكُم مَّبْعُوثُونَ مِنۢ بَعْدِ ٱلْمَوْتِ لَيَقُولَنَّ ٱلَّذِينَ كَفَرُوٓا۟ إِنْ هَـٰذَآ إِلَّا سِحْرٌۭ مُّبِينٌۭ",
    words: [
      { arabic: "وَهُوَ", transliteration: "wahuwa", root: null, meaning: { en: "And He", ur: "اور وہ", ar: "وهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", root: null, meaning: { en: "(is) the One Who", ur: "ہے the One جو", ar: "لذى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں", ar: "لسموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور the زمین", ar: "ولأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سِتَّةِ", transliteration: "sittati", root: null, meaning: { en: "six", ur: "six", ar: "ستة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيَّامٍۢ", transliteration: "ayyāmin", root: null, meaning: { en: "epochs", ur: "epochs", ar: "أيام" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", root: null, meaning: { en: "and His throne was", ur: "اور His throne تھا", ar: "وكان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَرْشُهُۥ", transliteration: "ʿarshuhu", root: null, meaning: { en: "and His throne was", ur: "اور His throne تھا", ar: "عرشه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْمَآءِ", transliteration: "l-māi", root: null, meaning: { en: "the water", ur: "the پانی", ar: "لماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِيَبْلُوَكُمْ", transliteration: "liyabluwakum", root: null, meaning: { en: "that He might test [you]", ur: "کہ/وہ وہ might test [you]", ar: "ليبلوكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَيُّكُمْ", transliteration: "ayyukum", root: null, meaning: { en: "which of you", ur: "جو of تم", ar: "أيكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَحْسَنُ", transliteration: "aḥsanu", root: "ح س ن", meaning: { en: "(is) best", ur: "ہے best", ar: "أحسن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَمَلًۭا ۗ", transliteration: "ʿamalan", root: null, meaning: { en: "(in) deed", ur: "میں deed", ar: "عملا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَئِن", transliteration: "wala-in", root: null, meaning: { en: "But if", ur: "لیکن if", ar: "ولئن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُلْتَ", transliteration: "qul'ta", root: "ق و ل", meaning: { en: "you say", ur: "تم کہو", ar: "قلت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّكُم", transliteration: "innakum", root: null, meaning: { en: "Indeed, you", ur: "Indeed, تم", ar: "إنكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّبْعُوثُونَ", transliteration: "mabʿūthūna", root: null, meaning: { en: "(will be) resurrected", ur: "گا/گے be resurrected", ar: "مبعوثون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنۢ", transliteration: "min", root: null, meaning: { en: "after", ur: "after", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", root: null, meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَوْتِ", transliteration: "l-mawti", root: "م و ت", meaning: { en: "[the] death", ur: "[the] death", ar: "لموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَقُولَنَّ", transliteration: "layaqūlanna", root: null, meaning: { en: "surely would say", ur: "یقیناً would کہو", ar: "ليقولن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَفَرُوٓا۟", transliteration: "kafarū", root: null, meaning: { en: "disbelieved", ur: "disbelieved", ar: "كفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "This is not", ur: "یہ ہے نہیں", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَآ", transliteration: "hādhā", root: null, meaning: { en: "This is not", ur: "یہ ہے نہیں", ar: "هذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "but", ur: "لیکن", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سِحْرٌۭ", transliteration: "siḥ'run", root: null, meaning: { en: "a magic", ur: "a magic", ar: "سحر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٌۭ", transliteration: "mubīnun", root: null, meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' }
      ],
    },
  },
  8: {
    ayahNumber: 8,
    text: "وَلَئِنْ أَخَّرْنَا عَنْهُمُ ٱلْعَذَابَ إِلَىٰٓ أُمَّةٍۢ مَّعْدُودَةٍۢ لَّيَقُولُنَّ مَا يَحْبِسُهُۥٓ ۗ أَلَا يَوْمَ يَأْتِيهِمْ لَيْسَ مَصْرُوفًا عَنْهُمْ وَحَاقَ بِهِم مَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ",
    words: [
      { arabic: "وَلَئِنْ", transliteration: "wala-in", root: null, meaning: { en: "And if", ur: "اور if", ar: "ولئن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخَّرْنَا", transliteration: "akharnā", root: null, meaning: { en: "We delay", ur: "ہم delay", ar: "أخرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُمُ", transliteration: "ʿanhumu", root: null, meaning: { en: "from them", ur: "سے انہیں", ar: "عنهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب", ar: "لعذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰٓ", transliteration: "ilā", root: null, meaning: { en: "for", ur: "کے لیے", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", root: null, meaning: { en: "a time", ur: "a time", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّعْدُودَةٍۢ", transliteration: "maʿdūdatin", root: null, meaning: { en: "determined", ur: "determined", ar: "معدودة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّيَقُولُنَّ", transliteration: "layaqūlunna", root: "ق و ل", meaning: { en: "they will surely say", ur: "وہ لوگ گا/گے یقیناً کہو", ar: "ليقولن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "What", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَحْبِسُهُۥٓ ۗ", transliteration: "yaḥbisuhu", root: null, meaning: { en: "detains it", ur: "detains یہ", ar: "يحبسه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَلَا", transliteration: "alā", root: null, meaning: { en: "No doubt", ur: "خبردار", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(On) the Day", ur: "پر the دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْتِيهِمْ", transliteration: "yatīhim", root: null, meaning: { en: "it comes to them", ur: "یہ آتا ہے طرف انہیں", ar: "يأتيهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَيْسَ", transliteration: "laysa", root: null, meaning: { en: "not", ur: "نہیں", ar: "ليس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَصْرُوفًا", transliteration: "maṣrūfan", root: null, meaning: { en: "(will be) averted", ur: "گا/گے be averted", ar: "مصروفا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", root: null, meaning: { en: "from them", ur: "سے انہیں", ar: "عنهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَحَاقَ", transliteration: "waḥāqa", root: null, meaning: { en: "and will surround", ur: "اور گا/گے surround", ar: "وحاق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِهِم", transliteration: "bihim", root: null, meaning: { en: "them", ur: "انہیں", ar: "بهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", root: null, meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِهِۦ", transliteration: "bihi", root: null, meaning: { en: "mock at [it]", ur: "mock at [it]", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَسْتَهْزِءُونَ", transliteration: "yastahziūna", root: null, meaning: { en: "mock at [it]", ur: "mock at [it]", ar: "يستهزءون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  9: {
    ayahNumber: 9,
    text: "وَلَئِنْ أَذَقْنَا ٱلْإِنسَـٰنَ مِنَّا رَحْمَةًۭ ثُمَّ نَزَعْنَـٰهَا مِنْهُ إِنَّهُۥ لَيَـُٔوسٌۭ كَفُورٌۭ",
    words: [
      { arabic: "وَلَئِنْ", transliteration: "wala-in", root: null, meaning: { en: "And if", ur: "اور if", ar: "ولئن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَذَقْنَا", transliteration: "adhaqnā", root: null, meaning: { en: "We give man a taste", ur: "ہم دو انسان a taste", ar: "أذقنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْإِنسَـٰنَ", transliteration: "l-insāna", root: null, meaning: { en: "We give man a taste", ur: "ہم دو انسان a taste", ar: "لإنسن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَّا", transliteration: "minnā", root: null, meaning: { en: "(of) Mercy from Us", ur: "of رحمت سے Us", ar: "منا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", root: "ر ح م", meaning: { en: "(of) Mercy from Us", ur: "of رحمت سے Us", ar: "رحمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَزَعْنَـٰهَا", transliteration: "nazaʿnāhā", root: null, meaning: { en: "We withdraw it", ur: "ہم withdraw یہ", ar: "نزعنها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُ", transliteration: "min'hu", root: null, meaning: { en: "from him", ur: "سے اسے", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "indeed, he", ur: "indeed, وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَـُٔوسٌۭ", transliteration: "layaūsun", root: null, meaning: { en: "(is) despairing", ur: "ہے despairing", ar: "ليوس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفُورٌۭ", transliteration: "kafūrun", root: null, meaning: { en: "(and) ungrateful", ur: "اور ungrateful", ar: "كفور" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  10: {
    ayahNumber: 10,
    text: "وَلَئِنْ أَذَقْنَـٰهُ نَعْمَآءَ بَعْدَ ضَرَّآءَ مَسَّتْهُ لَيَقُولَنَّ ذَهَبَ ٱلسَّيِّـَٔاتُ عَنِّىٓ ۚ إِنَّهُۥ لَفَرِحٌۭ فَخُورٌ",
    words: [
      { arabic: "وَلَئِنْ", transliteration: "wala-in", root: null, meaning: { en: "But if", ur: "لیکن if", ar: "ولئن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَذَقْنَـٰهُ", transliteration: "adhaqnāhu", root: null, meaning: { en: "We give him a taste", ur: "ہم دو اسے a taste", ar: "أذقنه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَعْمَآءَ", transliteration: "naʿmāa", root: null, meaning: { en: "(of) favor", ur: "of favor", ar: "نعماء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", root: null, meaning: { en: "after", ur: "after", ar: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ضَرَّآءَ", transliteration: "ḍarrāa", root: null, meaning: { en: "hardship", ur: "hardship", ar: "ضراء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَسَّتْهُ", transliteration: "massathu", root: null, meaning: { en: "(has) touched him", ur: "has touched اسے", ar: "مسته" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَقُولَنَّ", transliteration: "layaqūlanna", root: null, meaning: { en: "surely, he will say", ur: "surely, وہ گا/گے کہو", ar: "ليقولن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَهَبَ", transliteration: "dhahaba", root: null, meaning: { en: "Have gone", ur: "Have gone", ar: "ذهب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّيِّـَٔاتُ", transliteration: "l-sayiātu", root: null, meaning: { en: "the evils", ur: "the evils", ar: "لسيات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنِّىٓ ۚ", transliteration: "ʿannī", root: null, meaning: { en: "from me", ur: "سے me", ar: "عنى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "Indeed, he", ur: "Indeed, وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَفَرِحٌۭ", transliteration: "lafariḥun", root: null, meaning: { en: "(is) exultant", ur: "ہے exultant", ar: "لفرح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَخُورٌ", transliteration: "fakhūrun", root: null, meaning: { en: "(and) boastful", ur: "اور boastful", ar: "فخور" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  11: {
    ayahNumber: 11,
    text: "إِلَّا ٱلَّذِينَ صَبَرُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ أُو۟لَـٰٓئِكَ لَهُم مَّغْفِرَةٌۭ وَأَجْرٌۭ كَبِيرٌۭ",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "Except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَبَرُوا۟", transliteration: "ṣabarū", root: null, meaning: { en: "(are) patient", ur: "ہیں patient", ar: "صبروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", root: null, meaning: { en: "and do", ur: "اور کرتے ہو", ar: "وعملوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", root: null, meaning: { en: "the good deeds", ur: "the اچھا deeds", ar: "لصلحت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", root: null, meaning: { en: "those", ur: "those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُم", transliteration: "lahum", root: null, meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مَّغْفِرَةٌۭ", transliteration: "maghfiratun", root: null, meaning: { en: "(will be) forgiveness", ur: "مغفرت", ar: "مغفرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَجْرٌۭ", transliteration: "wa-ajrun", root: null, meaning: { en: "and a reward", ur: "اور a reward", ar: "وأجر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَبِيرٌۭ", transliteration: "kabīrun", root: "ك ب ر", meaning: { en: "great", ur: "بڑا", ar: "كبير" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  12: {
    ayahNumber: 12,
    text: "فَلَعَلَّكَ تَارِكٌۢ بَعْضَ مَا يُوحَىٰٓ إِلَيْكَ وَضَآئِقٌۢ بِهِۦ صَدْرُكَ أَن يَقُولُوا۟ لَوْلَآ أُنزِلَ عَلَيْهِ كَنزٌ أَوْ جَآءَ مَعَهُۥ مَلَكٌ ۚ إِنَّمَآ أَنتَ نَذِيرٌۭ ۚ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ وَكِيلٌ",
    words: [
      { arabic: "فَلَعَلَّكَ", transliteration: "falaʿallaka", root: null, meaning: { en: "Then possibly you", ur: "پھر possibly تم", ar: "فلعلك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَارِكٌۢ", transliteration: "tārikun", root: null, meaning: { en: "(may) give up", ur: "may دو up", ar: "تارك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْضَ", transliteration: "baʿḍa", root: null, meaning: { en: "a part", ur: "a part", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "(of) what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُوحَىٰٓ", transliteration: "yūḥā", root: null, meaning: { en: "is revealed", ur: "ہے revealed", ar: "يوحى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", root: null, meaning: { en: "to you", ur: "طرف تم", ar: "إليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَضَآئِقٌۢ", transliteration: "waḍāiqun", root: null, meaning: { en: "and straitened", ur: "اور straitened", ar: "وضائق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِهِۦ", transliteration: "bihi", root: null, meaning: { en: "by it", ur: "by یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صَدْرُكَ", transliteration: "ṣadruka", root: null, meaning: { en: "your breast", ur: "تمہارا breast", ar: "صدرك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "because", ur: "because", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَقُولُوا۟", transliteration: "yaqūlū", root: null, meaning: { en: "they say", ur: "وہ لوگ کہو", ar: "يقولوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَوْلَآ", transliteration: "lawlā", root: null, meaning: { en: "Why not", ur: "Why نہیں", ar: "لولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُنزِلَ", transliteration: "unzila", root: null, meaning: { en: "is sent down", ur: "ہے بھیجا down", ar: "أنزل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "for him", ur: "کے لیے اسے", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "كَنزٌ", transliteration: "kanzun", root: null, meaning: { en: "a treasure", ur: "a treasure", ar: "كنز" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَوْ", transliteration: "aw", root: null, meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "has come", ur: "has آؤ", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَعَهُۥ", transliteration: "maʿahu", root: null, meaning: { en: "with him", ur: "کے ساتھ اسے", ar: "معه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَلَكٌ ۚ", transliteration: "malakun", root: null, meaning: { en: "an Angel", ur: "an Angel", ar: "ملك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّمَآ", transliteration: "innamā", root: null, meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتَ", transliteration: "anta", root: null, meaning: { en: "you", ur: "تم", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "نَذِيرٌۭ ۚ", transliteration: "nadhīrun", root: null, meaning: { en: "(are) a warner", ur: "ہیں a warner", ar: "نذير" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", root: "أ ل ه", meaning: { en: "And Allah", ur: "اور اللہ", ar: "ولله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "(is) on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", root: null, meaning: { en: "every", ur: "every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", root: null, meaning: { en: "thing", ur: "thing", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَكِيلٌ", transliteration: "wakīlun", root: "و ك ل", meaning: { en: "a Guardian", ur: "a Guardian", ar: "وكيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  13: {
    ayahNumber: 13,
    text: "أَمْ يَقُولُونَ افْتَرَاهُ ۖ قُلْ فَأْتُوا۟ بِعَشْرِ سُوَرٍۢ مِّثْلِهِۦ مُفْتَرَيَـٰتٍۢ وَٱدْعُوا۟ مَنِ ٱسْتَطَعْتُم مِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَـٰدِقِينَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", root: null, meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", root: null, meaning: { en: "they say", ur: "وہ لوگ کہو", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "افْتَرَاهُ ۖ", transliteration: "if'tarāhu", root: null, meaning: { en: "He has fabricated it", ur: "وہ has fabricated یہ", ar: "افتراه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "فَأْتُوا۟", transliteration: "fatū", root: null, meaning: { en: "Then bring", ur: "پھر bring", ar: "فأتوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِعَشْرِ", transliteration: "biʿashri", root: null, meaning: { en: "ten", ur: "ten", ar: "بعشر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سُوَرٍۢ", transliteration: "suwarin", root: null, meaning: { en: "Surahs", ur: "Surahs", ar: "سور" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّثْلِهِۦ", transliteration: "mith'lihi", root: null, meaning: { en: "like it", ur: "like یہ", ar: "مثله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُفْتَرَيَـٰتٍۢ", transliteration: "muf'tarayātin", root: null, meaning: { en: "fabricated", ur: "fabricated", ar: "مفتريت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱدْعُوا۟", transliteration: "wa-id'ʿū", root: null, meaning: { en: "and call", ur: "اور call", ar: "ودعوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنِ", transliteration: "mani", root: null, meaning: { en: "whoever", ur: "whoever", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتَطَعْتُم", transliteration: "is'taṭaʿtum", root: null, meaning: { en: "you can", ur: "تم can", ar: "ستطعتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "besides Allah", ur: "besides اللہ", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دُونِ", transliteration: "dūni", root: null, meaning: { en: "besides Allah", ur: "besides اللہ", ar: "دون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "besides Allah", ur: "besides اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", root: null, meaning: { en: "you are", ur: "تم ہیں", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", root: null, meaning: { en: "truthful", ur: "truthful", ar: "صدقين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  14: {
    ayahNumber: 14,
    text: "فَإِلَّمْ يَسْتَجِيبُوا۟ لَكُمْ فَٱعْلَمُوٓا۟ أَنَّمَآ أُنزِلَ بِعِلْمِ ٱللَّهِ وَأَن لَّآ إِلَـٰهَ إِلَّا هُوَ ۖ فَهَلْ أَنتُم مُّسْلِمُونَ",
    words: [
      { arabic: "فَإِلَّمْ", transliteration: "fa-illam", root: null, meaning: { en: "Then if not", ur: "پھر if نہیں", ar: "فإلم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَسْتَجِيبُوا۟", transliteration: "yastajībū", root: null, meaning: { en: "they respond", ur: "وہ لوگ respond", ar: "يستجيبوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "to you", ur: "طرف تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فَٱعْلَمُوٓا۟", transliteration: "fa-iʿ'lamū", root: null, meaning: { en: "then know", ur: "پھر جانتے ہو", ar: "فعلموا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّمَآ", transliteration: "annamā", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "أنما" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أُنزِلَ", transliteration: "unzila", root: null, meaning: { en: "it was sent down", ur: "یہ تھا بھیجا down", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِعِلْمِ", transliteration: "biʿil'mi", root: null, meaning: { en: "with the knowledge of Allah", ur: "کے ساتھ the knowledge of اللہ", ar: "بعلم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "with the knowledge of Allah", ur: "کے ساتھ the knowledge of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَن", transliteration: "wa-an", root: null, meaning: { en: "and that", ur: "اور کہ/وہ", ar: "وأن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّآ", transliteration: "lā", root: null, meaning: { en: "(there is) no", ur: "there ہے no", ar: "لا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهَ", transliteration: "ilāha", root: "أ ل ه", meaning: { en: "god", ur: "god", ar: "إله" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ ۖ", transliteration: "huwa", root: null, meaning: { en: "Him", ur: "اس", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "فَهَلْ", transliteration: "fahal", root: null, meaning: { en: "Then, would", ur: "Then, would", ar: "فهل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتُم", transliteration: "antum", root: null, meaning: { en: "you", ur: "تم", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مُّسْلِمُونَ", transliteration: "mus'limūna", root: null, meaning: { en: "(be) Muslims", ur: "be Muslims", ar: "مسلمون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  15: {
    ayahNumber: 15,
    text: "مَن كَانَ يُرِيدُ ٱلْحَيَوٰةَ ٱلدُّنْيَا وَزِينَتَهَا نُوَفِّ إِلَيْهِمْ أَعْمَـٰلَهُمْ فِيهَا وَهُمْ فِيهَا لَا يُبْخَسُونَ",
    words: [
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "Whoever [is]", ur: "Whoever [is]", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَانَ", transliteration: "kāna", root: null, meaning: { en: "Whoever [is]", ur: "Whoever [is]", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يُرِيدُ", transliteration: "yurīdu", root: null, meaning: { en: "desires", ur: "desires", ar: "يريد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَيَوٰةَ", transliteration: "l-ḥayata", root: null, meaning: { en: "the life", ur: "the life", ar: "لحيوة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", root: null, meaning: { en: "(of) the world", ur: "of the world", ar: "لدنيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَزِينَتَهَا", transliteration: "wazīnatahā", root: null, meaning: { en: "and its adornments", ur: "اور its adornments", ar: "وزينتها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُوَفِّ", transliteration: "nuwaffi", root: null, meaning: { en: "We will repay in full", ur: "ہم گا/گے repay میں full", ar: "نوف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِمْ", transliteration: "ilayhim", root: null, meaning: { en: "to them", ur: "طرف انہیں", ar: "إليهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَعْمَـٰلَهُمْ", transliteration: "aʿmālahum", root: null, meaning: { en: "(for) their deeds", ur: "کے لیے their deeds", ar: "أعملهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَهُمْ", transliteration: "wahum", root: null, meaning: { en: "and they", ur: "اور وہ لوگ", ar: "وهم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "in it", ur: "میں یہ", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "will not be lessened", ur: "گا/گے نہیں be lessened", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُبْخَسُونَ", transliteration: "yub'khasūna", root: null, meaning: { en: "will not be lessened", ur: "گا/گے نہیں be lessened", ar: "يبخسون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'نفی + فعل' }
      ],
    },
  },
  16: {
    ayahNumber: 16,
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ لَيْسَ لَهُمْ فِى ٱلْـَٔاخِرَةِ إِلَّا ٱلنَّارُ ۖ وَحَبِطَ مَا صَنَعُوا۟ فِيهَا وَبَـٰطِلٌۭ مَّا كَانُوا۟ يَعْمَلُونَ",
    words: [
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", root: null, meaning: { en: "Those", ur: "Those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "(are) the ones who ", ur: "ہیں the ones جو", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَيْسَ", transliteration: "laysa", root: null, meaning: { en: "(is) not", ur: "نہیں", ar: "ليس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", root: null, meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّارُ ۖ", transliteration: "l-nāru", root: "ن و ر", meaning: { en: "the Fire", ur: "آگ", ar: "لنار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَحَبِطَ", transliteration: "waḥabiṭa", root: null, meaning: { en: "And (has) gone in vain", ur: "اور has gone میں vain", ar: "وحبط" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "صَنَعُوا۟", transliteration: "ṣanaʿū", root: null, meaning: { en: "they did", ur: "وہ لوگ کیا", ar: "صنعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَبَـٰطِلٌۭ", transliteration: "wabāṭilun", root: null, meaning: { en: "and (is) worthless", ur: "اور ہے worthless", ar: "وبطل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", root: null, meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", root: null, meaning: { en: "do", ur: "کرتے ہو", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  17: {
    ayahNumber: 17,
    text: "أَفَمَن كَانَ عَلَىٰ بَيِّنَةٍۢ مِّن رَّبِّهِۦ وَيَتْلُوهُ شَاهِدٌۭ مِّنْهُ وَمِن قَبْلِهِۦ كِتَـٰبُ مُوسَىٰٓ إِمَامًۭا وَرَحْمَةً ۚ أُو۟لَـٰٓئِكَ يُؤْمِنُونَ بِهِۦ ۚ وَمَن يَكْفُرْ بِهِۦ مِنَ ٱلْأَحْزَابِ فَٱلنَّارُ مَوْعِدُهُۥ ۚ فَلَا تَكُ فِى مِرْيَةٍۢ مِّنْهُ ۚ إِنَّهُ ٱلْحَقُّ مِن رَّبِّكَ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يُؤْمِنُونَ",
    words: [
      { arabic: "أَفَمَن", transliteration: "afaman", root: null, meaning: { en: "Then is he who", ur: "پھر ہے وہ جو", ar: "أفمن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَانَ", transliteration: "kāna", root: null, meaning: { en: "is", ur: "ہے", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَيِّنَةٍۢ", transliteration: "bayyinatin", root: null, meaning: { en: "a clear proof", ur: "a واضح proof", ar: "بينة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّبِّهِۦ", transliteration: "rabbihi", root: "ر ب ب", meaning: { en: "his Lord", ur: "اس کا رب", ar: "ربه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَتْلُوهُ", transliteration: "wayatlūhu", root: null, meaning: { en: "and recites it", ur: "اور recites یہ", ar: "ويتلوه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَاهِدٌۭ", transliteration: "shāhidun", root: null, meaning: { en: "a witness", ur: "a witness", ar: "شاهد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُ", transliteration: "min'hu", root: null, meaning: { en: "from Him", ur: "سے اس", ar: "منه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِن", transliteration: "wamin", root: null, meaning: { en: "and before it", ur: "اور before یہ", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلِهِۦ", transliteration: "qablihi", root: null, meaning: { en: "and before it", ur: "اور before یہ", ar: "قبله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كِتَـٰبُ", transliteration: "kitābu", root: "ك ت ب", meaning: { en: "(was) a Book", ur: "تھا a کتاب", ar: "كتب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُوسَىٰٓ", transliteration: "mūsā", root: null, meaning: { en: "(of) Musa", ur: "of Musa", ar: "موسى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِمَامًۭا", transliteration: "imāman", root: null, meaning: { en: "(as) a guide", ur: "as a guide", ar: "إماما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَحْمَةً ۚ", transliteration: "waraḥmatan", root: "ر ح م", meaning: { en: "and (as) mercy", ur: "اور as رحمت", ar: "ورحمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", root: null, meaning: { en: "Those", ur: "Those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", root: null, meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ ۚ", transliteration: "bihi", root: null, meaning: { en: "in it", ur: "میں یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَمَن", transliteration: "waman", root: null, meaning: { en: "But whoever", ur: "لیکن whoever", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَكْفُرْ", transliteration: "yakfur", root: null, meaning: { en: "disbelieves", ur: "disbelieves", ar: "يكفر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", root: null, meaning: { en: "in it", ur: "میں یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "among", ur: "among", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَحْزَابِ", transliteration: "l-aḥzābi", root: null, meaning: { en: "the sects", ur: "the sects", ar: "لأحزاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱلنَّارُ", transliteration: "fal-nāru", root: "ن و ر", meaning: { en: "then the Fire", ur: "پھر the آگ", ar: "فلنار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَوْعِدُهُۥ ۚ", transliteration: "mawʿiduhu", root: null, meaning: { en: "(will be) his promised (meeting) place", ur: "گا/گے be his promised meeting place", ar: "موعده" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلَا", transliteration: "falā", root: null, meaning: { en: "So (do) not", ur: "So کرتے ہو نہیں", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَكُ", transliteration: "taku", root: null, meaning: { en: "be", ur: "be", ar: "تك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِرْيَةٍۢ", transliteration: "mir'yatin", root: null, meaning: { en: "doubt", ur: "doubt", ar: "مرية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُ ۚ", transliteration: "min'hu", root: null, meaning: { en: "about it", ur: "about یہ", ar: "منه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", root: null, meaning: { en: "Indeed, it", ur: "Indeed, یہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", root: null, meaning: { en: "(is) the truth", ur: "حق", ar: "لحق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", root: null, meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", root: null, meaning: { en: "most", ur: "most", ar: "أكثر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", root: null, meaning: { en: "(of) the people", ur: "of the لوگ", ar: "لناس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", root: null, meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' },
        { from: 26, to: 27, label: 'نفی + فعل' },
        { from: 28, to: 29, label: 'جار + مجرور' },
        { from: 33, to: 34, label: 'جار + مجرور' }
      ],
    },
  },
  18: {
    ayahNumber: 18,
    text: "وَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًا ۚ أُو۟لَـٰٓئِكَ يُعْرَضُونَ عَلَىٰ رَبِّهِمْ وَيَقُولُ ٱلْأَشْهَـٰدُ هَـٰٓؤُلَآءِ ٱلَّذِينَ كَذَبُوا۟ عَلَىٰ رَبِّهِمْ ۚ أَلَا لَعْنَةُ ٱللَّهِ عَلَى ٱلظَّـٰلِمِينَ",
    words: [
      { arabic: "وَمَنْ", transliteration: "waman", root: null, meaning: { en: "And who", ur: "اور جو", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَظْلَمُ", transliteration: "aẓlamu", root: null, meaning: { en: "(is) more unjust", ur: "ہے more unjust", ar: "أظلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِمَّنِ", transliteration: "mimmani", root: null, meaning: { en: "than (he) who", ur: "than وہ جو", ar: "ممن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱفْتَرَىٰ", transliteration: "if'tarā", root: null, meaning: { en: "invents", ur: "invents", ar: "فترى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "against", ur: "against", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذِبًا ۚ", transliteration: "kadhiban", root: null, meaning: { en: "a lie", ur: "a lie", ar: "كذبا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", root: null, meaning: { en: "Those", ur: "Those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُعْرَضُونَ", transliteration: "yuʿ'raḍūna", root: null, meaning: { en: "will be presented", ur: "گا/گے be presented", ar: "يعرضون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "before", ur: "before", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَقُولُ", transliteration: "wayaqūlu", root: "ق و ل", meaning: { en: "and will say", ur: "اور گا/گے کہو", ar: "ويقول" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَشْهَـٰدُ", transliteration: "l-ashhādu", root: null, meaning: { en: "the witnesses", ur: "the witnesses", ar: "لأشهد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", root: null, meaning: { en: "These (are)", ur: "یہ ہیں", ar: "هؤلاء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَذَبُوا۟", transliteration: "kadhabū", root: null, meaning: { en: "lied", ur: "lied", ar: "كذبوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "against", ur: "against", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ ۚ", transliteration: "rabbihim", root: null, meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَا", transliteration: "alā", root: null, meaning: { en: "No doubt", ur: "خبردار", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَعْنَةُ", transliteration: "laʿnatu", root: null, meaning: { en: "(The) curse of Allah", ur: "The curse of اللہ", ar: "لعنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(The) curse of Allah", ur: "The curse of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "(is) on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", root: "ظ ل م", meaning: { en: "the wrongdoers", ur: "the wrongdoers", ar: "لظلمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' },
        { from: 22, to: 23, label: 'جار + مجرور' }
      ],
    },
  },
  19: {
    ayahNumber: 19,
    text: "ٱلَّذِينَ يَصُدُّونَ عَن سَبِيلِ ٱللَّهِ وَيَبْغُونَهَا عِوَجًۭا وَهُم بِٱلْـَٔاخِرَةِ هُمْ كَـٰفِرُونَ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "Those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَصُدُّونَ", transliteration: "yaṣuddūna", root: null, meaning: { en: "hinder", ur: "hinder", ar: "يصدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَن", transliteration: "ʿan", root: null, meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", root: null, meaning: { en: "(the) way", ur: "راستہ", ar: "سبيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَبْغُونَهَا", transliteration: "wayabghūnahā", root: null, meaning: { en: "and seek (in) it", ur: "اور seek میں یہ", ar: "ويبغونها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِوَجًۭا", transliteration: "ʿiwajan", root: null, meaning: { en: "crookedness", ur: "crookedness", ar: "عوجا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُم", transliteration: "wahum", root: null, meaning: { en: "while they", ur: "while وہ لوگ", ar: "وهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", root: "أ خ ر", meaning: { en: "in the Hereafter", ur: "میں the Hereafter", ar: "بلاخرة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هُمْ", transliteration: "hum", root: null, meaning: { en: "[they]", ur: "[they]", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "كَـٰفِرُونَ", transliteration: "kāfirūna", root: null, meaning: { en: "(are) disbelievers", ur: "کافروں", ar: "كفرون" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  20: {
    ayahNumber: 20,
    text: "أُو۟لَـٰٓئِكَ لَمْ يَكُونُوا۟ مُعْجِزِينَ فِى ٱلْأَرْضِ وَمَا كَانَ لَهُم مِّن دُونِ ٱللَّهِ مِنْ أَوْلِيَآءَ ۘ يُضَـٰعَفُ لَهُمُ ٱلْعَذَابُ ۚ مَا كَانُوا۟ يَسْتَطِيعُونَ ٱلسَّمْعَ وَمَا كَانُوا۟ يُبْصِرُونَ",
    words: [
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", root: null, meaning: { en: "Those", ur: "Those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَمْ", transliteration: "lam", root: null, meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَكُونُوا۟", transliteration: "yakūnū", root: null, meaning: { en: "will be", ur: "گا/گے be", ar: "يكونوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُعْجِزِينَ", transliteration: "muʿ'jizīna", root: null, meaning: { en: "(able to) escape", ur: "able طرف escape", ar: "معجزين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", root: null, meaning: { en: "is", ur: "ہے", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَهُم", transliteration: "lahum", root: null, meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "besides", ur: "besides", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دُونِ", transliteration: "dūni", root: null, meaning: { en: "besides", ur: "besides", ar: "دون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَوْلِيَآءَ ۘ", transliteration: "awliyāa", root: null, meaning: { en: "protectors", ur: "protectors", ar: "أولياء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُضَـٰعَفُ", transliteration: "yuḍāʿafu", root: null, meaning: { en: "And will be doubled", ur: "اور گا/گے be doubled", ar: "يضعف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", root: null, meaning: { en: "for them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلْعَذَابُ ۚ", transliteration: "l-ʿadhābu", root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب", ar: "لعذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", root: null, meaning: { en: "they were", ur: "وہ لوگ تھے", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", root: null, meaning: { en: "able", ur: "able", ar: "يستطيعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّمْعَ", transliteration: "l-samʿa", root: "س م ع", meaning: { en: "(to) hear", ur: "سنتے ہو", ar: "لسمع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", root: null, meaning: { en: "they used (to)", ur: "وہ لوگ used طرف", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يُبْصِرُونَ", transliteration: "yub'ṣirūna", root: null, meaning: { en: "see", ur: "دیکھتے ہو", ar: "يبصرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  21: {
    ayahNumber: 21,
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ خَسِرُوٓا۟ أَنفُسَهُمْ وَضَلَّ عَنْهُم مَّا كَانُوا۟ يَفْتَرُونَ",
    words: [
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", root: null, meaning: { en: "Those", ur: "Those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "(are) the ones who", ur: "ہیں the ones جو", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَسِرُوٓا۟", transliteration: "khasirū", root: null, meaning: { en: "(have) lost", ur: "have lost", ar: "خسروا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", root: "ن ف س", meaning: { en: "their souls", ur: "their جانیں", ar: "أنفسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَضَلَّ", transliteration: "waḍalla", root: null, meaning: { en: "and lost", ur: "اور lost", ar: "وضل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنْهُم", transliteration: "ʿanhum", root: null, meaning: { en: "from them", ur: "سے انہیں", ar: "عنهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "(is) what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", root: null, meaning: { en: "they used", ur: "وہ لوگ used", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", root: null, meaning: { en: "(to) invent", ur: "طرف invent", ar: "يفترون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  22: {
    ayahNumber: 22,
    text: "لَا جَرَمَ أَنَّهُمْ فِى ٱلْـَٔاخِرَةِ هُمُ ٱلْأَخْسَرُونَ",
    words: [
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "No", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "جَرَمَ", transliteration: "jarama", root: null, meaning: { en: "doubt", ur: "doubt", ar: "جرم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّهُمْ", transliteration: "annahum", root: null, meaning: { en: "that they", ur: "کہ/وہ وہ لوگ", ar: "أنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمُ", transliteration: "humu", root: null, meaning: { en: "[they]", ur: "[they]", ar: "هم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَخْسَرُونَ", transliteration: "l-akhsarūna", root: null, meaning: { en: "(will be) the greatest losers", ur: "گا/گے be the greatest losers", ar: "لأخسرون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  23: {
    ayahNumber: 23,
    text: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَأَخْبَتُوٓا۟ إِلَىٰ رَبِّهِمْ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلْجَنَّةِ ۖ هُمْ فِيهَا خَـٰلِدُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", root: null, meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "ءامنوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", root: null, meaning: { en: "and do", ur: "اور کرتے ہو", ar: "وعملوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", root: null, meaning: { en: "good deeds", ur: "اچھا deeds", ar: "لصلحت" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "وَأَخْبَتُوٓا۟", transliteration: "wa-akhbatū", root: null, meaning: { en: "and humble themselves", ur: "اور humble themselves", ar: "وأخبتوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "before", ur: "before", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", root: null, meaning: { en: "those", ur: "those", ar: "أولئك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", root: null, meaning: { en: "(are the) companions", ur: "ہیں the companions", ar: "أصحب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْجَنَّةِ ۖ", transliteration: "l-janati", root: null, meaning: { en: "(of) Paradise", ur: "جنت", ar: "لجنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ", transliteration: "hum", root: null, meaning: { en: "they", ur: "وہ لوگ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "in it", ur: "میں یہ", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", root: null, meaning: { en: "(will) abide forever", ur: "گا/گے abide forever", ar: "خلدون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  24: {
    ayahNumber: 24,
    text: "۞ مَثَلُ ٱلْفَرِيقَيْنِ كَٱلْأَعْمَىٰ وَٱلْأَصَمِّ وَٱلْبَصِيرِ وَٱلسَّمِيعِ ۚ هَلْ يَسْتَوِيَانِ مَثَلًا ۚ أَفَلَا تَذَكَّرُونَ",
    words: [
      { arabic: "۞ مَثَلُ", transliteration: "mathalu", root: null, meaning: { en: "(The) example", ur: "The example", ar: "۞ مثل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْفَرِيقَيْنِ", transliteration: "l-farīqayni", root: null, meaning: { en: "(of) the two parties", ur: "of the two parties", ar: "لفريقين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَٱلْأَعْمَىٰ", transliteration: "kal-aʿmā", root: null, meaning: { en: "(is) like the blind", ur: "ہے like the blind", ar: "كلأعمى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَٱلْأَصَمِّ", transliteration: "wal-aṣami", root: null, meaning: { en: "and the deaf", ur: "اور the deaf", ar: "ولأصم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْبَصِيرِ", transliteration: "wal-baṣīri", root: "ب ص ر", meaning: { en: "and the seer", ur: "اور the seer", ar: "ولبصير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلسَّمِيعِ ۚ", transliteration: "wal-samīʿi", root: "س م ع", meaning: { en: "and the hearer", ur: "اور the hearer", ar: "ولسميع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَلْ", transliteration: "hal", root: null, meaning: { en: "Are", ur: "ہیں", ar: "هل" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "يَسْتَوِيَانِ", transliteration: "yastawiyāni", root: null, meaning: { en: "they equal", ur: "وہ لوگ equal", ar: "يستويان" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَثَلًا ۚ", transliteration: "mathalan", root: null, meaning: { en: "(in) comparison", ur: "میں comparison", ar: "مثلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَلَا", transliteration: "afalā", root: null, meaning: { en: "Then, will not", ur: "Then, گا/گے نہیں", ar: "أفلا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", root: null, meaning: { en: "you take heed", ur: "تم take heed", ar: "تذكرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  26: {
    ayahNumber: 26,
    text: "أَن لَّا تَعْبُدُوٓا۟ إِلَّا ٱللَّهَ ۖ إِنِّىٓ أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ أَلِيمٍۢ",
    words: [
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "That", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَّا", transliteration: "lā", root: null, meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْبُدُوٓا۟", transliteration: "taʿbudū", root: null, meaning: { en: "worship", ur: "عبادت کرو", ar: "تعبدوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهَ ۖ", transliteration: "l-laha", root: null, meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", root: null, meaning: { en: "Indeed, I", ur: "Indeed, میں", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخَافُ", transliteration: "akhāfu", root: null, meaning: { en: "[I] fear", ur: "[I] ڈرو", ar: "أخاف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", root: null, meaning: { en: "for you", ur: "کے لیے تم", ar: "عليكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", root: "ع ذ ب", meaning: { en: "(the) punishment", ur: "عذاب", ar: "عذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَوْمٍ", transliteration: "yawmin", root: "ي و م", meaning: { en: "(of) a Day", ur: "of a دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلِيمٍۢ", transliteration: "alīmin", root: null, meaning: { en: "painful", ur: "painful", ar: "أليم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  27: {
    ayahNumber: 27,
    text: "فَقَالَ ٱلْمَلَأُ ٱلَّذِينَ كَفَرُوا۟ مِن قَوْمِهِۦ مَا نَرَىٰكَ إِلَّا بَشَرًۭا مِّثْلَنَا وَمَا نَرَىٰكَ ٱتَّبَعَكَ إِلَّا ٱلَّذِينَ هُمْ أَرَاذِلُنَا بَادِىَ ٱلرَّأْىِ وَمَا نَرَىٰ لَكُمْ عَلَيْنَا مِن فَضْلٍۭ بَلْ نَظُنُّكُمْ كَـٰذِبِينَ",
    words: [
      { arabic: "فَقَالَ", transliteration: "faqāla", root: "ق و ل", meaning: { en: "So said", ur: "So کہا", ar: "فقال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", root: null, meaning: { en: "the chiefs", ur: "the chiefs", ar: "لملأ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "(of) those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", root: null, meaning: { en: "disbelieved", ur: "disbelieved", ar: "كفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْمِهِۦ", transliteration: "qawmihi", root: "ق و م", meaning: { en: "his people", ur: "his لوگ", ar: "قومه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "نَرَىٰكَ", transliteration: "narāka", root: null, meaning: { en: "we see you", ur: "ہم دیکھتے ہو تم", ar: "نرىك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "but", ur: "لیکن", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَشَرًۭا", transliteration: "basharan", root: null, meaning: { en: "a man", ur: "a انسان", ar: "بشرا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّثْلَنَا", transliteration: "mith'lanā", root: null, meaning: { en: "like us", ur: "like us", ar: "مثلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَرَىٰكَ", transliteration: "narāka", root: null, meaning: { en: "we see you", ur: "ہم دیکھتے ہو تم", ar: "نرىك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱتَّبَعَكَ", transliteration: "ittabaʿaka", root: null, meaning: { en: "followed [you]", ur: "followed [you]", ar: "تبعك" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُمْ", transliteration: "hum", root: null, meaning: { en: "[they]", ur: "[they]", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "أَرَاذِلُنَا", transliteration: "arādhilunā", root: null, meaning: { en: "(are) the lowest of us", ur: "ہیں the lowest of us", ar: "أراذلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَادِىَ", transliteration: "bādiya", root: null, meaning: { en: "immature in opinion", ur: "immature میں opinion", ar: "بادى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّأْىِ", transliteration: "l-rayi", root: null, meaning: { en: "immature in opinion", ur: "immature میں opinion", ar: "لرأى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَرَىٰ", transliteration: "narā", root: null, meaning: { en: "we see", ur: "ہم دیکھتے ہو", ar: "نرى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "in you", ur: "میں تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", root: null, meaning: { en: "over us", ur: "over us", ar: "علينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَضْلٍۭ", transliteration: "faḍlin", root: "ف ض ل", meaning: { en: "merit", ur: "merit", ar: "فضل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْ", transliteration: "bal", root: null, meaning: { en: "nay", ur: "nay", ar: "بل" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "نَظُنُّكُمْ", transliteration: "naẓunnukum", root: null, meaning: { en: "we think you", ur: "ہم think تم", ar: "نظنكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَـٰذِبِينَ", transliteration: "kādhibīna", root: null, meaning: { en: "(are) liars", ur: "ہیں liars", ar: "كذبين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'جار + مجرور' }
      ],
    },
  },
  28: {
    ayahNumber: 28,
    text: "قَالَ يَـٰقَوْمِ أَرَءَيْتُمْ إِن كُنتُ عَلَىٰ بَيِّنَةٍۢ مِّن رَّبِّى وَءَاتَىٰنِى رَحْمَةًۭ مِّنْ عِندِهِۦ فَعُمِّيَتْ عَلَيْكُمْ أَنُلْزِمُكُمُوهَا وَأَنتُمْ لَهَا كَـٰرِهُونَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ", ar: "يقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَءَيْتُمْ", transliteration: "ara-aytum", root: null, meaning: { en: "Do you see", ur: "کرتے ہو تم دیکھتے ہو", ar: "أرءيتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُ", transliteration: "kuntu", root: null, meaning: { en: "I was", ur: "میں تھا", ar: "كنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَيِّنَةٍۢ", transliteration: "bayyinatin", root: null, meaning: { en: "(the) clear proof", ur: "the واضح proof", ar: "بينة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّبِّى", transliteration: "rabbī", root: null, meaning: { en: "my Lord", ur: "میرا رب", ar: "ربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَءَاتَىٰنِى", transliteration: "waātānī", root: null, meaning: { en: "while He has given me", ur: "while وہ has given me", ar: "وءاتىنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", root: "ر ح م", meaning: { en: "mercy", ur: "رحمت", ar: "رحمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْ", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِندِهِۦ", transliteration: "ʿindihi", root: null, meaning: { en: "Himself", ur: "Himself", ar: "عنده" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَعُمِّيَتْ", transliteration: "faʿummiyat", root: null, meaning: { en: "but (it) has been obscured", ur: "لیکن یہ has been obscured", ar: "فعميت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", root: null, meaning: { en: "from you", ur: "سے تم", ar: "عليكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَنُلْزِمُكُمُوهَا", transliteration: "anul'zimukumūhā", root: null, meaning: { en: "should We compel you (to accept) it", ur: "should ہم compel تم طرف accept یہ", ar: "أنلزمكموها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَنتُمْ", transliteration: "wa-antum", root: null, meaning: { en: "while you (are)", ur: "while تم ہیں", ar: "وأنتم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لَهَا", transliteration: "lahā", root: null, meaning: { en: "averse to it", ur: "averse طرف یہ", ar: "لها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَـٰرِهُونَ", transliteration: "kārihūna", root: null, meaning: { en: "averse to it", ur: "averse طرف یہ", ar: "كرهون" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  29: {
    ayahNumber: 29,
    text: "وَيَـٰقَوْمِ لَآ أَسْـَٔلُكُمْ عَلَيْهِ مَالًا ۖ إِنْ أَجْرِىَ إِلَّا عَلَى ٱللَّهِ ۚ وَمَآ أَنَا۠ بِطَارِدِ ٱلَّذِينَ ءَامَنُوٓا۟ ۚ إِنَّهُم مُّلَـٰقُوا۟ رَبِّهِمْ وَلَـٰكِنِّىٓ أَرَىٰكُمْ قَوْمًۭا تَجْهَلُونَ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", root: "ق و م", meaning: { en: "And O my people", ur: "اور اے my لوگ", ar: "ويقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَآ", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", root: null, meaning: { en: "I ask (of) you", ur: "میں ask of تم", ar: "أسلكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "for it", ur: "کے لیے یہ", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مَالًا ۖ", transliteration: "mālan", root: null, meaning: { en: "any wealth", ur: "any مال", ar: "مالا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "Not", ur: "نہیں", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْرِىَ", transliteration: "ajriya", root: null, meaning: { en: "(is) my reward", ur: "ہے my reward", ar: "أجرى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "from", ur: "سے", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", root: null, meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَا۠", transliteration: "anā", root: null, meaning: { en: "I am", ur: "میں am", ar: "أنا" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِطَارِدِ", transliteration: "biṭāridi", root: null, meaning: { en: "going to drive away", ur: "going طرف drive away", ar: "بطارد" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَامَنُوٓا۟ ۚ", transliteration: "āmanū", root: null, meaning: { en: "believed", ur: "ایمان لائے", ar: "ءامنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّهُم", transliteration: "innahum", root: null, meaning: { en: "Indeed, they", ur: "Indeed, وہ لوگ", ar: "إنهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّلَـٰقُوا۟", transliteration: "mulāqū", root: null, meaning: { en: "(will) be meeting", ur: "گا/گے be meeting", ar: "ملقوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِنِّىٓ", transliteration: "walākinnī", root: null, meaning: { en: "but I", ur: "لیکن میں", ar: "ولكنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَىٰكُمْ", transliteration: "arākum", root: null, meaning: { en: "see you", ur: "دیکھتے ہو تم", ar: "أرىكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَوْمًۭا", transliteration: "qawman", root: "ق و م", meaning: { en: "(are) a people", ur: "ہیں a لوگ", ar: "قوما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَجْهَلُونَ", transliteration: "tajhalūna", root: null, meaning: { en: "ignorant", ur: "ignorant", ar: "تجهلون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  30: {
    ayahNumber: 30,
    text: "وَيَـٰقَوْمِ مَن يَنصُرُنِى مِنَ ٱللَّهِ إِن طَرَدتُّهُمْ ۚ أَفَلَا تَذَكَّرُونَ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", root: "ق و م", meaning: { en: "And O my people", ur: "اور اے my لوگ", ar: "ويقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "Who", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَنصُرُنِى", transliteration: "yanṣurunī", root: "ن ص ر", meaning: { en: "would help me", ur: "would help me", ar: "ينصرنى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "against", ur: "against", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "طَرَدتُّهُمْ ۚ", transliteration: "ṭaradttuhum", root: null, meaning: { en: "I drove them away", ur: "میں drove انہیں away", ar: "طردتهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَلَا", transliteration: "afalā", root: null, meaning: { en: "Then, will not", ur: "Then, گا/گے نہیں", ar: "أفلا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", root: null, meaning: { en: "you take heed", ur: "تم take heed", ar: "تذكرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  31: {
    ayahNumber: 31,
    text: "وَلَآ أَقُولُ لَكُمْ عِندِى خَزَآئِنُ ٱللَّهِ وَلَآ أَعْلَمُ ٱلْغَيْبَ وَلَآ أَقُولُ إِنِّى مَلَكٌۭ وَلَآ أَقُولُ لِلَّذِينَ تَزْدَرِىٓ أَعْيُنُكُمْ لَن يُؤْتِيَهُمُ ٱللَّهُ خَيْرًا ۖ ٱللَّهُ أَعْلَمُ بِمَا فِىٓ أَنفُسِهِمْ  ۖ إِنِّىٓ إِذًۭا لَّمِنَ ٱلظَّـٰلِمِينَ",
    words: [
      { arabic: "وَلَآ", transliteration: "walā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "ولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَقُولُ", transliteration: "aqūlu", root: null, meaning: { en: "I say", ur: "میں کہو", ar: "أقول" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "to you", ur: "طرف تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "عِندِى", transliteration: "ʿindī", root: null, meaning: { en: "(that) with me", ur: "کہ/وہ کے ساتھ me", ar: "عندى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَزَآئِنُ", transliteration: "khazāinu", root: null, meaning: { en: "(are the) treasures", ur: "ہیں the treasures", ar: "خزائن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَآ", transliteration: "walā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", root: null, meaning: { en: "I know", ur: "میں جانتے ہو", ar: "أعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْغَيْبَ", transliteration: "l-ghayba", root: null, meaning: { en: "the unseen", ur: "the unseen", ar: "لغيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَآ", transliteration: "walā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَقُولُ", transliteration: "aqūlu", root: null, meaning: { en: "I say", ur: "میں کہو", ar: "أقول" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنِّى", transliteration: "innī", root: null, meaning: { en: "that I am", ur: "کہ/وہ میں am", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَلَكٌۭ", transliteration: "malakun", root: null, meaning: { en: "an Angel", ur: "an Angel", ar: "ملك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَآ", transliteration: "walā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَقُولُ", transliteration: "aqūlu", root: null, meaning: { en: "I say", ur: "میں کہو", ar: "أقول" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", root: null, meaning: { en: "for those whom", ur: "کے لیے those whom", ar: "للذين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَزْدَرِىٓ", transliteration: "tazdarī", root: null, meaning: { en: "look down upon", ur: "look down upon", ar: "تزدرى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَعْيُنُكُمْ", transliteration: "aʿyunukum", root: null, meaning: { en: "your eyes", ur: "تمہارا آنکھیں", ar: "أعينكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَن", transliteration: "lan", root: null, meaning: { en: "never", ur: "never", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْتِيَهُمُ", transliteration: "yu'tiyahumu", root: null, meaning: { en: "will Allah give them", ur: "گا/گے اللہ دو انہیں", ar: "يؤتيهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "will Allah give them", ur: "گا/گے اللہ دو انہیں", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَيْرًا ۖ", transliteration: "khayran", root: "خ ي ر", meaning: { en: "any good", ur: "any اچھا", ar: "خيرا" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", root: null, meaning: { en: "knows best", ur: "جانتا ہے best", ar: "أعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فِىٓ", transliteration: "fī", root: null, meaning: { en: "(is) in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنفُسِهِمْ  ۖ", transliteration: "anfusihim", root: "ن ف س", meaning: { en: "their souls", ur: "their جانیں", ar: "أنفسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", root: null, meaning: { en: "Indeed, I", ur: "Indeed, میں", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذًۭا", transliteration: "idhan", root: null, meaning: { en: "then", ur: "پھر", ar: "إذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّمِنَ", transliteration: "lamina", root: null, meaning: { en: "(will be) surely of", ur: "گا/گے be یقیناً of", ar: "لمن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", root: "ظ ل م", meaning: { en: "the wrongdoers", ur: "the wrongdoers", ar: "لظلمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'نفی + فعل' },
        { from: 27, to: 28, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    ayahNumber: 32,
    text: "قَالُوا۟ يَـٰنُوحُ قَدْ جَـٰدَلْتَنَا فَأَكْثَرْتَ جِدَٰلَنَا فَأْتِنَا بِمَا تَعِدُنَآ إِن كُنتَ مِنَ ٱلصَّـٰدِقِينَ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰنُوحُ", transliteration: "yānūḥu", root: null, meaning: { en: "O Nuh", ur: "اے Nuh", ar: "ينوح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدْ", transliteration: "qad", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "جَـٰدَلْتَنَا", transliteration: "jādaltanā", root: null, meaning: { en: "you disputed with us", ur: "تم disputed کے ساتھ us", ar: "جدلتنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَأَكْثَرْتَ", transliteration: "fa-aktharta", root: null, meaning: { en: "and you (have been) frequent", ur: "اور تم have been frequent", ar: "فأكثرت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "جِدَٰلَنَا", transliteration: "jidālanā", root: null, meaning: { en: "(in) dispute with us", ur: "میں dispute کے ساتھ us", ar: "جدلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَأْتِنَا", transliteration: "fatinā", root: null, meaning: { en: "So bring us", ur: "So bring us", ar: "فأتنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَعِدُنَآ", transliteration: "taʿidunā", root: null, meaning: { en: "you threaten us (with)", ur: "تم threaten us کے ساتھ", ar: "تعدنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتَ", transliteration: "kunta", root: null, meaning: { en: "you are", ur: "تم ہیں", ar: "كنت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "of", ur: "of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلصَّـٰدِقِينَ", transliteration: "l-ṣādiqīna", root: null, meaning: { en: "the truthful", ur: "the truthful", ar: "لصدقين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  33: {
    ayahNumber: 33,
    text: "قَالَ إِنَّمَا يَأْتِيكُم بِهِ ٱللَّهُ إِن شَآءَ وَمَآ أَنتُم بِمُعْجِزِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", root: null, meaning: { en: "Only", ur: "Only", ar: "إنما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْتِيكُم", transliteration: "yatīkum", root: null, meaning: { en: "will bring it (on) you", ur: "گا/گے bring یہ پر تم", ar: "يأتيكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِ", transliteration: "bihi", root: null, meaning: { en: "will bring it (on) you", ur: "گا/گے bring یہ پر تم", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "شَآءَ", transliteration: "shāa", root: null, meaning: { en: "He wills", ur: "وہ wills", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَآ", transliteration: "wamā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتُم", transliteration: "antum", root: null, meaning: { en: "you (are)", ur: "تم ہیں", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِمُعْجِزِينَ", transliteration: "bimuʿ'jizīna", root: null, meaning: { en: "one who (can) escape (it)", ur: "one جو can escape یہ", ar: "بمعجزين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  34: {
    ayahNumber: 34,
    text: "وَلَا يَنفَعُكُمْ نُصْحِىٓ إِنْ أَرَدتُّ أَنْ أَنصَحَ لَكُمْ إِن كَانَ ٱللَّهُ يُرِيدُ أَن يُغْوِيَكُمْ ۚ هُوَ رَبُّكُمْ وَإِلَيْهِ تُرْجَعُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "And (will) not", ur: "اور گا/گے نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "يَنفَعُكُمْ", transliteration: "yanfaʿukum", root: null, meaning: { en: "benefit you", ur: "benefit تم", ar: "ينفعكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نُصْحِىٓ", transliteration: "nuṣ'ḥī", root: null, meaning: { en: "my advice", ur: "my advice", ar: "نصحى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "(even) if", ur: "even if", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَدتُّ", transliteration: "aradttu", root: null, meaning: { en: "I wish", ur: "میں wish", ar: "أردت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنْ", transliteration: "an", root: null, meaning: { en: "to", ur: "طرف", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنصَحَ", transliteration: "anṣaḥa", root: null, meaning: { en: "[I] advise", ur: "[I] advise", ar: "أنصح" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "[to] you", ur: "[to] تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", root: null, meaning: { en: "it was Allah's", ur: "یہ تھا Allah's", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", root: "أ ل ه", meaning: { en: "it was Allah's", ur: "یہ تھا Allah's", ar: "لله" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُرِيدُ", transliteration: "yurīdu", root: null, meaning: { en: "will", ur: "گا/گے", ar: "يريد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "to", ur: "طرف", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُغْوِيَكُمْ ۚ", transliteration: "yugh'wiyakum", root: null, meaning: { en: "let you go astray", ur: "let تم go astray", ar: "يغويكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُوَ", transliteration: "huwa", root: null, meaning: { en: "He (is)", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "رَبُّكُمْ", transliteration: "rabbukum", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", root: null, meaning: { en: "and to Him", ur: "اور طرف اس", ar: "وإليه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُرْجَعُونَ", transliteration: "tur'jaʿūna", root: null, meaning: { en: "you will be returned", ur: "تم گا/گے be لوٹا", ar: "ترجعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    ayahNumber: 35,
    text: "أَمْ يَقُولُونَ ٱفْتَرَىٰهُ ۖ قُلْ إِنِ ٱفْتَرَيْتُهُۥ فَعَلَىَّ إِجْرَامِى وَأَنَا۠ بَرِىٓءٌۭ مِّمَّا تُجْرِمُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", root: null, meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", root: null, meaning: { en: "(do) they say", ur: "کرتے ہو وہ لوگ کہو", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱفْتَرَىٰهُ ۖ", transliteration: "if'tarāhu", root: null, meaning: { en: "He has invented it", ur: "وہ has invented یہ", ar: "فترىه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِنِ", transliteration: "ini", root: null, meaning: { en: "If", ur: "If", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱفْتَرَيْتُهُۥ", transliteration: "if'taraytuhu", root: null, meaning: { en: "I have invented it", ur: "میں have invented یہ", ar: "فتريته" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَعَلَىَّ", transliteration: "faʿalayya", root: null, meaning: { en: "then on me", ur: "پھر پر me", ar: "فعلى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِجْرَامِى", transliteration: "ij'rāmī", root: null, meaning: { en: "(is) my crime", ur: "ہے my crime", ar: "إجرامى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنَا۠", transliteration: "wa-anā", root: null, meaning: { en: "but I am", ur: "لیکن میں am", ar: "وأنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَرِىٓءٌۭ", transliteration: "barīon", root: null, meaning: { en: "innocent", ur: "innocent", ar: "برىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", root: null, meaning: { en: "of what", ur: "of کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُجْرِمُونَ", transliteration: "tuj'rimūna", root: null, meaning: { en: "crimes you commit", ur: "crimes تم commit", ar: "تجرمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  36: {
    ayahNumber: 36,
    text: "وَأُوحِىَ إِلَىٰ نُوحٍ أَنَّهُۥ لَن يُؤْمِنَ مِن قَوْمِكَ إِلَّا مَن قَدْ ءَامَنَ فَلَا تَبْتَئِسْ بِمَا كَانُوا۟ يَفْعَلُونَ",
    words: [
      { arabic: "وَأُوحِىَ", transliteration: "waūḥiya", root: null, meaning: { en: "And it was revealed", ur: "اور یہ تھا revealed", ar: "وأوحى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نُوحٍ", transliteration: "nūḥin", root: null, meaning: { en: "Nuh", ur: "Nuh", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّهُۥ", transliteration: "annahu", root: null, meaning: { en: "That", ur: "کہ/وہ", ar: "أنه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَن", transliteration: "lan", root: null, meaning: { en: "will never", ur: "گا/گے never", ar: "لن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُؤْمِنَ", transliteration: "yu'mina", root: null, meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْمِكَ", transliteration: "qawmika", root: "ق و م", meaning: { en: "your people", ur: "تمہارا لوگ", ar: "قومك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "(those) who", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "قَدْ", transliteration: "qad", root: null, meaning: { en: "have already", ur: "have already", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "ءَامَنَ", transliteration: "āmana", root: "أ م ن", meaning: { en: "believed", ur: "ایمان لائے", ar: "ءامن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَلَا", transliteration: "falā", root: null, meaning: { en: "So (do) not", ur: "So کرتے ہو نہیں", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَبْتَئِسْ", transliteration: "tabta-is", root: null, meaning: { en: "(be) distressed", ur: "be distressed", ar: "تبتئس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", root: null, meaning: { en: "by what", ur: "by کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", root: null, meaning: { en: "they have been", ur: "وہ لوگ have been", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", root: null, meaning: { en: "doing", ur: "doing", ar: "يفعلون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'نفی + فعل' }
      ],
    },
  },
  38: {
    ayahNumber: 38,
    text: "وَيَصْنَعُ ٱلْفُلْكَ وَكُلَّمَا مَرَّ عَلَيْهِ مَلَأٌۭ مِّن قَوْمِهِۦ سَخِرُوا۟ مِنْهُ ۚ قَالَ إِن تَسْخَرُوا۟ مِنَّا فَإِنَّا نَسْخَرُ مِنكُمْ كَمَا تَسْخَرُونَ",
    words: [
      { arabic: "وَيَصْنَعُ", transliteration: "wayaṣnaʿu", root: null, meaning: { en: "And he was constructing", ur: "اور وہ تھا constructing", ar: "ويصنع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْفُلْكَ", transliteration: "l-ful'ka", root: null, meaning: { en: "the ship", ur: "the ship", ar: "لفلك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَكُلَّمَا", transliteration: "wakullamā", root: null, meaning: { en: "and every time", ur: "اور every time", ar: "وكلما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَرَّ", transliteration: "marra", root: null, meaning: { en: "passed", ur: "passed", ar: "مر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "by him", ur: "by اسے", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مَلَأٌۭ", transliteration: "mala-on", root: null, meaning: { en: "(the) chiefs", ur: "the chiefs", ar: "ملأ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "of", ur: "of", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمِهِۦ", transliteration: "qawmihi", root: "ق و م", meaning: { en: "his people", ur: "his لوگ", ar: "قومه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَخِرُوا۟", transliteration: "sakhirū", root: null, meaning: { en: "they ridiculed", ur: "وہ لوگ ridiculed", ar: "سخروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُ ۚ", transliteration: "min'hu", root: null, meaning: { en: "[of] him", ur: "[of] اسے", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "If", ur: "If", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "تَسْخَرُوا۟", transliteration: "taskharū", root: null, meaning: { en: "you ridicule", ur: "تم ridicule", ar: "تسخروا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَّا", transliteration: "minnā", root: null, meaning: { en: "us", ur: "us", ar: "منا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَإِنَّا", transliteration: "fa-innā", root: null, meaning: { en: "then we", ur: "پھر ہم", ar: "فإنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَسْخَرُ", transliteration: "naskharu", root: null, meaning: { en: "can ridicule", ur: "can ridicule", ar: "نسخر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", root: null, meaning: { en: "you", ur: "تم", ar: "منكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كَمَا", transliteration: "kamā", root: null, meaning: { en: "as", ur: "as", ar: "كما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَسْخَرُونَ", transliteration: "taskharūna", root: null, meaning: { en: "you ridicule", ur: "تم ridicule", ar: "تسخرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
  },
  39: {
    ayahNumber: 39,
    text: "فَسَوْفَ تَعْلَمُونَ مَن يَأْتِيهِ عَذَابٌۭ يُخْزِيهِ وَيَحِلُّ عَلَيْهِ عَذَابٌۭ مُّقِيمٌ",
    words: [
      { arabic: "فَسَوْفَ", transliteration: "fasawfa", root: null, meaning: { en: "And soon", ur: "اور soon", ar: "فسوف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "you will know", ur: "تم گا/گے جانتے ہو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "(on) whom", ur: "پر whom", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَأْتِيهِ", transliteration: "yatīhi", root: null, meaning: { en: "will come", ur: "گا/گے آؤ", ar: "يأتيه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُخْزِيهِ", transliteration: "yukh'zīhi", root: null, meaning: { en: "(that) will disgrace him", ur: "کہ/وہ گا/گے disgrace اسے", ar: "يخزيه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَيَحِلُّ", transliteration: "wayaḥillu", root: null, meaning: { en: "and will descend", ur: "اور گا/گے descend", ar: "ويحل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "on him", ur: "پر اسے", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّقِيمٌ", transliteration: "muqīmun", root: null, meaning: { en: "lasting", ur: "lasting", ar: "مقيم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  40: {
    ayahNumber: 40,
    text: "حَتَّىٰٓ إِذَا جَآءَ أَمْرُنَا وَفَارَ ٱلتَّنُّورُ قُلْنَا ٱحْمِلْ فِيهَا مِن كُلٍّۢ زَوْجَيْنِ ٱثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ ٱلْقَوْلُ وَمَنْ ءَامَنَ ۚ وَمَآ ءَامَنَ مَعَهُۥٓ إِلَّا قَلِيلٌۭ",
    words: [
      { arabic: "حَتَّىٰٓ", transliteration: "ḥattā", root: null, meaning: { en: "Till", ur: "Till", ar: "حتى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", root: null, meaning: { en: "when", ur: "when", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "came", ur: "آیا", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُنَا", transliteration: "amrunā", root: null, meaning: { en: "Our command", ur: "Our command", ar: "أمرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَفَارَ", transliteration: "wafāra", root: null, meaning: { en: "and overflowed", ur: "اور overflowed", ar: "وفار" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلتَّنُّورُ", transliteration: "l-tanūru", root: null, meaning: { en: "the oven", ur: "the oven", ar: "لتنور" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُلْنَا", transliteration: "qul'nā", root: "ق و ل", meaning: { en: "We said", ur: "ہم کہا", ar: "قلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱحْمِلْ", transliteration: "iḥ'mil", root: null, meaning: { en: "Load", ur: "Load", ar: "حمل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "in it", ur: "میں یہ", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "of", ur: "of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلٍّۢ", transliteration: "kullin", root: null, meaning: { en: "every kind", ur: "every kind", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "زَوْجَيْنِ", transliteration: "zawjayni", root: null, meaning: { en: "a pair", ur: "a pair", ar: "زوجين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱثْنَيْنِ", transliteration: "ith'nayni", root: null, meaning: { en: "two", ur: "two", ar: "ثنين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَهْلَكَ", transliteration: "wa-ahlaka", root: null, meaning: { en: "and your family", ur: "اور تمہارا family", ar: "وأهلك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "who", ur: "جو", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "سَبَقَ", transliteration: "sabaqa", root: null, meaning: { en: "has preceded", ur: "has preceded", ar: "سبق" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "against him", ur: "against اسے", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ٱلْقَوْلُ", transliteration: "l-qawlu", root: null, meaning: { en: "the word", ur: "the word", ar: "لقول" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَنْ", transliteration: "waman", root: null, meaning: { en: "and whoever", ur: "اور whoever", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنَ ۚ", transliteration: "āmana", root: "أ م ن", meaning: { en: "believed", ur: "ایمان لائے", ar: "ءامن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَآ", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنَ", transliteration: "āmana", root: "أ م ن", meaning: { en: "believed", ur: "ایمان لائے", ar: "ءامن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَعَهُۥٓ", transliteration: "maʿahu", root: null, meaning: { en: "with him", ur: "کے ساتھ اسے", ar: "معه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَلِيلٌۭ", transliteration: "qalīlun", root: null, meaning: { en: "a few", ur: "a few", ar: "قليل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصول + صلة' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  42: {
    ayahNumber: 42,
    text: "وَهِىَ تَجْرِى بِهِمْ فِى مَوْجٍۢ كَٱلْجِبَالِ وَنَادَىٰ نُوحٌ ٱبْنَهُۥ وَكَانَ فِى مَعْزِلٍۢ يَـٰبُنَىَّ ٱرْكَب مَّعَنَا وَلَا تَكُن مَّعَ ٱلْكَـٰفِرِينَ",
    words: [
      { arabic: "وَهِىَ", transliteration: "wahiya", root: null, meaning: { en: "And it", ur: "اور یہ", ar: "وهى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَجْرِى", transliteration: "tajrī", root: null, meaning: { en: "sailed", ur: "sailed", ar: "تجرى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِمْ", transliteration: "bihim", root: null, meaning: { en: "with them", ur: "کے ساتھ انہیں", ar: "بهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "on", ur: "پر", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَوْجٍۢ", transliteration: "mawjin", root: null, meaning: { en: "the waves", ur: "the waves", ar: "موج" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَٱلْجِبَالِ", transliteration: "kal-jibāli", root: null, meaning: { en: "like mountains", ur: "like پہاڑ", ar: "كلجبال" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَنَادَىٰ", transliteration: "wanādā", root: null, meaning: { en: "and Nuh called out", ur: "اور Nuh called out", ar: "ونادى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُوحٌ", transliteration: "nūḥun", root: null, meaning: { en: "and Nuh called out", ur: "اور Nuh called out", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱبْنَهُۥ", transliteration: "ib'nahu", root: null, meaning: { en: "(to) his son", ur: "طرف his بیٹا", ar: "بنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", root: null, meaning: { en: "and he was", ur: "اور وہ تھا", ar: "وكان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "[in]", ur: "[in]", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَعْزِلٍۢ", transliteration: "maʿzilin", root: null, meaning: { en: "apart", ur: "apart", ar: "معزل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَـٰبُنَىَّ", transliteration: "yābunayya", root: null, meaning: { en: "O my son", ur: "اے my بیٹا", ar: "يبنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱرْكَب", transliteration: "ir'kab", root: null, meaning: { en: "Embark", ur: "Embark", ar: "ركب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّعَنَا", transliteration: "maʿanā", root: null, meaning: { en: "with us", ur: "کے ساتھ us", ar: "معنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَكُن", transliteration: "takun", root: null, meaning: { en: "be", ur: "be", ar: "تكن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَّعَ", transliteration: "maʿa", root: null, meaning: { en: "with", ur: "کے ساتھ", ar: "مع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "the کافروں", ar: "لكفرين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'نفی + فعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    ayahNumber: 43,
    text: "قَالَ سَـَٔاوِىٓ إِلَىٰ جَبَلٍۢ يَعْصِمُنِى مِنَ ٱلْمَآءِ ۚ قَالَ لَا عَاصِمَ ٱلْيَوْمَ مِنْ أَمْرِ ٱللَّهِ إِلَّا مَن رَّحِمَ ۚ وَحَالَ بَيْنَهُمَا ٱلْمَوْجُ فَكَانَ مِنَ ٱلْمُغْرَقِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سَـَٔاوِىٓ", transliteration: "saāwī", root: null, meaning: { en: "I will betake myself", ur: "میں گا/گے betake myself", ar: "ساوى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "جَبَلٍۢ", transliteration: "jabalin", root: null, meaning: { en: "a mountain", ur: "a پہاڑ", ar: "جبل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْصِمُنِى", transliteration: "yaʿṣimunī", root: null, meaning: { en: "(that) will save me", ur: "کہ/وہ گا/گے save me", ar: "يعصمنى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْمَآءِ ۚ", transliteration: "l-māi", root: null, meaning: { en: "the water", ur: "the پانی", ar: "لماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "(There is) no", ur: "There ہے no", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "عَاصِمَ", transliteration: "ʿāṣima", root: null, meaning: { en: "protector", ur: "protector", ar: "عاصم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", root: "ي و م", meaning: { en: "today", ur: "today", ar: "ليوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَمْرِ", transliteration: "amri", root: null, meaning: { en: "the Command of Allah", ur: "the Command of اللہ", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "the Command of Allah", ur: "the Command of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "(on) whom", ur: "پر whom", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "رَّحِمَ ۚ", transliteration: "raḥima", root: null, meaning: { en: "He has mercy", ur: "وہ has رحمت", ar: "رحم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَحَالَ", transliteration: "waḥāla", root: null, meaning: { en: "And came", ur: "اور آیا", ar: "وحال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", root: null, meaning: { en: "(in) between them", ur: "میں between انہیں", ar: "بينهما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْمَوْجُ", transliteration: "l-mawju", root: null, meaning: { en: "the waves", ur: "the waves", ar: "لموج" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَكَانَ", transliteration: "fakāna", root: null, meaning: { en: "so he was", ur: "so وہ تھا", ar: "فكان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "among", ur: "among", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْمُغْرَقِينَ", transliteration: "l-mugh'raqīna", root: null, meaning: { en: "the drowned", ur: "the drowned", ar: "لمغرقين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصول + صلة' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  44: {
    ayahNumber: 44,
    text: "وَقِيلَ يَـٰٓأَرْضُ ٱبْلَعِى مَآءَكِ وَيَـٰسَمَآءُ أَقْلِعِى وَغِيضَ ٱلْمَآءُ وَقُضِىَ ٱلْأَمْرُ وَٱسْتَوَتْ عَلَى ٱلْجُودِىِّ ۖ وَقِيلَ بُعْدًۭا لِّلْقَوْمِ ٱلظَّـٰلِمِينَ",
    words: [
      { arabic: "وَقِيلَ", transliteration: "waqīla", root: "ق و ل", meaning: { en: "And it was said", ur: "اور یہ تھا کہا", ar: "وقيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَـٰٓأَرْضُ", transliteration: "yāarḍu", root: "أ ر ض", meaning: { en: "O earth", ur: "اے زمین", ar: "يأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱبْلَعِى", transliteration: "ib'laʿī", root: null, meaning: { en: "Swallow", ur: "Swallow", ar: "بلعى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآءَكِ", transliteration: "māaki", root: null, meaning: { en: "your water", ur: "تمہارا پانی", ar: "ماءك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَـٰسَمَآءُ", transliteration: "wayāsamāu", root: null, meaning: { en: "and O sky", ur: "اور اے sky", ar: "ويسماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَقْلِعِى", transliteration: "aqliʿī", root: null, meaning: { en: "Withhold", ur: "Withhold", ar: "أقلعى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَغِيضَ", transliteration: "waghīḍa", root: null, meaning: { en: "And subsided", ur: "اور subsided", ar: "وغيض" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمَآءُ", transliteration: "l-māu", root: null, meaning: { en: "the water", ur: "the پانی", ar: "لماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقُضِىَ", transliteration: "waquḍiya", root: null, meaning: { en: "and was fulfilled", ur: "اور تھا fulfilled", ar: "وقضى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَمْرُ", transliteration: "l-amru", root: null, meaning: { en: "the Command", ur: "the Command", ar: "لأمر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱسْتَوَتْ", transliteration: "wa-is'tawat", root: null, meaning: { en: "And it rested", ur: "اور یہ rested", ar: "وستوت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْجُودِىِّ ۖ", transliteration: "l-jūdiyi", root: null, meaning: { en: "the Judi", ur: "the Judi", ar: "لجودى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقِيلَ", transliteration: "waqīla", root: "ق و ل", meaning: { en: "And it was said", ur: "اور یہ تھا کہا", ar: "وقيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بُعْدًۭا", transliteration: "buʿ'dan", root: null, meaning: { en: "Away", ur: "Away", ar: "بعدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلْقَوْمِ", transliteration: "lil'qawmi", root: "ق و م", meaning: { en: "with the people", ur: "کے ساتھ the لوگ", ar: "للقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", root: "ظ ل م", meaning: { en: "the wrongdoers", ur: "the wrongdoers", ar: "لظلمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  45: {
    ayahNumber: 45,
    text: "وَنَادَىٰ نُوحٌۭ رَّبَّهُۥ فَقَالَ رَبِّ إِنَّ ٱبْنِى مِنْ أَهْلِى وَإِنَّ وَعْدَكَ ٱلْحَقُّ وَأَنتَ أَحْكَمُ ٱلْحَـٰكِمِينَ",
    words: [
      { arabic: "وَنَادَىٰ", transliteration: "wanādā", root: null, meaning: { en: "And Nuh called", ur: "اور Nuh called", ar: "ونادى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نُوحٌۭ", transliteration: "nūḥun", root: null, meaning: { en: "And Nuh called", ur: "اور Nuh called", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّبَّهُۥ", transliteration: "rabbahu", root: "ر ب ب", meaning: { en: "(to) his Lord", ur: "اس کا رب", ar: "ربه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَقَالَ", transliteration: "faqāla", root: "ق و ل", meaning: { en: "and said", ur: "اور کہا", ar: "فقال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "O my Lord", ur: "اے my رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱبْنِى", transliteration: "ib'nī", root: null, meaning: { en: "my son", ur: "my بیٹا", ar: "بنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "(is) of", ur: "ہے of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَهْلِى", transliteration: "ahlī", root: null, meaning: { en: "my family", ur: "my family", ar: "أهلى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", root: null, meaning: { en: "and indeed", ur: "اور بے شک", ar: "وإن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعْدَكَ", transliteration: "waʿdaka", root: null, meaning: { en: "Your promise", ur: "تمہارا promise", ar: "وعدك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", root: null, meaning: { en: "(is) true", ur: "سچا", ar: "لحق" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَأَنتَ", transliteration: "wa-anta", root: null, meaning: { en: "and You", ur: "اور تم", ar: "وأنت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَحْكَمُ", transliteration: "aḥkamu", root: null, meaning: { en: "(are) the Most Just", ur: "ہیں the Most Just", ar: "أحكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَـٰكِمِينَ", transliteration: "l-ḥākimīna", root: null, meaning: { en: "(of) the judges", ur: "of the judges", ar: "لحكمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصوف + صفت' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  46: {
    ayahNumber: 46,
    text: "قَالَ يَـٰنُوحُ إِنَّهُۥ لَيْسَ مِنْ أَهْلِكَ ۖ إِنَّهُۥ عَمَلٌ غَيْرُ صَـٰلِحٍۢ ۖ فَلَا تَسْـَٔلْنِ مَا لَيْسَ لَكَ بِهِۦ عِلْمٌ ۖ إِنِّىٓ أَعِظُكَ أَن تَكُونَ مِنَ ٱلْجَـٰهِلِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰنُوحُ", transliteration: "yānūḥu", root: null, meaning: { en: "O Nuh", ur: "اے Nuh", ar: "ينوح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "Indeed, he", ur: "Indeed, وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيْسَ", transliteration: "laysa", root: null, meaning: { en: "(is) not", ur: "نہیں", ar: "ليس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "of", ur: "of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَهْلِكَ ۖ", transliteration: "ahlika", root: null, meaning: { en: "your family", ur: "تمہارا family", ar: "أهلك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "indeed, [he]", ur: "indeed, [he]", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمَلٌ", transliteration: "ʿamalun", root: null, meaning: { en: "(his) deed", ur: "his deed", ar: "عمل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", root: null, meaning: { en: "(is) other than", ur: "ہے other than", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَـٰلِحٍۢ ۖ", transliteration: "ṣāliḥin", root: null, meaning: { en: "righteous", ur: "righteous", ar: "صلح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلَا", transliteration: "falā", root: null, meaning: { en: "so (do) not", ur: "so کرتے ہو نہیں", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَسْـَٔلْنِ", transliteration: "tasalni", root: null, meaning: { en: "ask Me", ur: "ask Me", ar: "تسلن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "(about) what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَيْسَ", transliteration: "laysa", root: null, meaning: { en: "not", ur: "نہیں", ar: "ليس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكَ", transliteration: "laka", root: null, meaning: { en: "you have", ur: "تم have", ar: "لك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", root: null, meaning: { en: "of it", ur: "of یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِلْمٌ ۖ", transliteration: "ʿil'mun", root: null, meaning: { en: "any knowledge", ur: "any knowledge", ar: "علم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", root: null, meaning: { en: "Indeed, I", ur: "Indeed, میں", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعِظُكَ", transliteration: "aʿiẓuka", root: null, meaning: { en: "admonish you", ur: "admonish تم", ar: "أعظك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "lest", ur: "lest", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَكُونَ", transliteration: "takūna", root: null, meaning: { en: "you be", ur: "تم be", ar: "تكون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "among", ur: "among", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْجَـٰهِلِينَ", transliteration: "l-jāhilīna", root: null, meaning: { en: "the ignorant", ur: "the ignorant", ar: "لجهلين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'نفی + فعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'جار + مجرور' }
      ],
    },
  },
  47: {
    ayahNumber: 47,
    text: "قَالَ رَبِّ إِنِّىٓ أَعُوذُ بِكَ أَنْ أَسْـَٔلَكَ مَا لَيْسَ لِى بِهِۦ عِلْمٌۭ ۖ وَإِلَّا تَغْفِرْ لِى وَتَرْحَمْنِىٓ أَكُن مِّنَ ٱلْخَـٰسِرِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "O my Lord", ur: "اے my رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", root: null, meaning: { en: "Indeed, I", ur: "Indeed, میں", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعُوذُ", transliteration: "aʿūdhu", root: null, meaning: { en: "seek refuge", ur: "seek refuge", ar: "أعوذ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِكَ", transliteration: "bika", root: null, meaning: { en: "in You", ur: "میں تم", ar: "بك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنْ", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَسْـَٔلَكَ", transliteration: "asalaka", root: null, meaning: { en: "I (should) ask You", ur: "میں should ask تم", ar: "أسلك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَيْسَ", transliteration: "laysa", root: null, meaning: { en: "not", ur: "نہیں", ar: "ليس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِى", transliteration: "lī", root: null, meaning: { en: "I have", ur: "میں have", ar: "لى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِهِۦ", transliteration: "bihi", root: null, meaning: { en: "of it", ur: "of یہ", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِلْمٌۭ ۖ", transliteration: "ʿil'mun", root: null, meaning: { en: "knowledge", ur: "knowledge", ar: "علم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِلَّا", transliteration: "wa-illā", root: null, meaning: { en: "And unless", ur: "اور unless", ar: "وإلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَغْفِرْ", transliteration: "taghfir", root: null, meaning: { en: "You forgive", ur: "تم معاف کرنا", ar: "تغفر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِى", transliteration: "lī", root: null, meaning: { en: "me", ur: "me", ar: "لى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَتَرْحَمْنِىٓ", transliteration: "watarḥamnī", root: null, meaning: { en: "and You have mercy on me", ur: "اور تم have رحمت پر me", ar: "وترحمنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكُن", transliteration: "akun", root: null, meaning: { en: "I will be", ur: "میں گا/گے be", ar: "أكن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "among", ur: "among", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْخَـٰسِرِينَ", transliteration: "l-khāsirīna", root: null, meaning: { en: "the losers", ur: "the losers", ar: "لخسرين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  48: {
    ayahNumber: 48,
    text: "قِيلَ يَـٰنُوحُ ٱهْبِطْ بِسَلَـٰمٍۢ مِّنَّا وَبَرَكَـٰتٍ عَلَيْكَ وَعَلَىٰٓ أُمَمٍۢ مِّمَّن مَّعَكَ ۚ وَأُمَمٌۭ سَنُمَتِّعُهُمْ ثُمَّ يَمَسُّهُم مِّنَّا عَذَابٌ أَلِيمٌۭ",
    words: [
      { arabic: "قِيلَ", transliteration: "qīla", root: "ق و ل", meaning: { en: "It was said", ur: "یہ تھا کہا", ar: "قيل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰنُوحُ", transliteration: "yānūḥu", root: null, meaning: { en: "O Nuh", ur: "اے Nuh", ar: "ينوح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱهْبِطْ", transliteration: "ih'biṭ", root: null, meaning: { en: "Go down", ur: "Go down", ar: "هبط" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "بِسَلَـٰمٍۢ", transliteration: "bisalāmin", root: "س ل م", meaning: { en: "with peace", ur: "کے ساتھ peace", ar: "بسلم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِّنَّا", transliteration: "minnā", root: null, meaning: { en: "from Us", ur: "سے Us", ar: "منا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَبَرَكَـٰتٍ", transliteration: "wabarakātin", root: null, meaning: { en: "and blessings", ur: "اور blessings", ar: "وبركت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", root: null, meaning: { en: "on you", ur: "پر تم", ar: "عليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعَلَىٰٓ", transliteration: "waʿalā", root: null, meaning: { en: "and on", ur: "اور پر", ar: "وعلى" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "أُمَمٍۢ", transliteration: "umamin", root: null, meaning: { en: "the nations", ur: "the nations", ar: "أمم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّن", transliteration: "mimman", root: null, meaning: { en: "from those", ur: "سے those", ar: "ممن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّعَكَ ۚ", transliteration: "maʿaka", root: null, meaning: { en: "with you", ur: "کے ساتھ تم", ar: "معك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأُمَمٌۭ", transliteration: "wa-umamun", root: null, meaning: { en: "But (to other) nations", ur: "لیکن طرف other nations", ar: "وأمم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَنُمَتِّعُهُمْ", transliteration: "sanumattiʿuhum", root: null, meaning: { en: "We will grant enjoyment", ur: "ہم گا/گے grant enjoyment", ar: "سنمتعهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَمَسُّهُم", transliteration: "yamassuhum", root: null, meaning: { en: "will touch them", ur: "گا/گے touch انہیں", ar: "يمسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَّا", transliteration: "minnā", root: null, meaning: { en: "from Us", ur: "سے Us", ar: "منا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلِيمٌۭ", transliteration: "alīmun", root: null, meaning: { en: "painful", ur: "painful", ar: "أليم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
  49: {
    ayahNumber: 49,
    text: "تِلْكَ مِنْ أَنۢبَآءِ ٱلْغَيْبِ نُوحِيهَآ إِلَيْكَ ۖ مَا كُنتَ تَعْلَمُهَآ أَنتَ وَلَا قَوْمُكَ مِن قَبْلِ هَـٰذَا ۖ فَٱصْبِرْ ۖ إِنَّ ٱلْعَـٰقِبَةَ لِلْمُتَّقِينَ",
    words: [
      { arabic: "تِلْكَ", transliteration: "til'ka", root: null, meaning: { en: "This", ur: "یہ", ar: "تلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "(is) from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنۢبَآءِ", transliteration: "anbāi", root: null, meaning: { en: "the news", ur: "the news", ar: "أنباء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْغَيْبِ", transliteration: "l-ghaybi", root: null, meaning: { en: "(of) the unseen", ur: "of the unseen", ar: "لغيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُوحِيهَآ", transliteration: "nūḥīhā", root: null, meaning: { en: "(which) We reveal", ur: "جو ہم reveal", ar: "نوحيها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَيْكَ ۖ", transliteration: "ilayka", root: null, meaning: { en: "to you", ur: "طرف تم", ar: "إليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "كُنتَ", transliteration: "kunta", root: null, meaning: { en: "you were", ur: "تم تھے", ar: "كنت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْلَمُهَآ", transliteration: "taʿlamuhā", root: null, meaning: { en: "knowing it", ur: "knowing یہ", ar: "تعلمها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنتَ", transliteration: "anta", root: null, meaning: { en: "you", ur: "تم", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "قَوْمُكَ", transliteration: "qawmuka", root: "ق و م", meaning: { en: "your people", ur: "تمہارا لوگ", ar: "قومك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِ", transliteration: "qabli", root: null, meaning: { en: "before", ur: "before", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَا ۖ", transliteration: "hādhā", root: null, meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱصْبِرْ ۖ", transliteration: "fa-iṣ'bir", root: null, meaning: { en: "So be patient", ur: "So be patient", ar: "فصبر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعَـٰقِبَةَ", transliteration: "l-ʿāqibata", root: null, meaning: { en: "the end", ur: "the end", ar: "لعقبة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلْمُتَّقِينَ", transliteration: "lil'muttaqīna", root: null, meaning: { en: "(is) for the God fearing", ur: "ہے کے لیے the God fearing", ar: "للمتقين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  51: {
    ayahNumber: 51,
    text: "يَـٰقَوْمِ لَآ أَسْـَٔلُكُمْ عَلَيْهِ أَجْرًا ۖ إِنْ أَجْرِىَ إِلَّا عَلَى ٱلَّذِى فَطَرَنِىٓ ۚ أَفَلَا تَعْقِلُونَ",
    words: [
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ", ar: "يقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَآ", transliteration: "lā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", root: null, meaning: { en: "I ask you", ur: "میں ask تم", ar: "أسلكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "for it", ur: "کے لیے یہ", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَجْرًا ۖ", transliteration: "ajran", root: null, meaning: { en: "any reward", ur: "any reward", ar: "أجرا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "Not", ur: "نہیں", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْرِىَ", transliteration: "ajriya", root: null, meaning: { en: "(is) my reward", ur: "ہے my reward", ar: "أجرى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "from", ur: "سے", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", root: null, meaning: { en: "the One Who", ur: "the One جو", ar: "لذى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَطَرَنِىٓ ۚ", transliteration: "faṭaranī", root: null, meaning: { en: "created me", ur: "پیدا کیا me", ar: "فطرنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَلَا", transliteration: "afalā", root: null, meaning: { en: "Then will not", ur: "پھر گا/گے نہیں", ar: "أفلا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", root: null, meaning: { en: "you use reason", ur: "تم use reason", ar: "تعقلون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  52: {
    ayahNumber: 52,
    text: "وَيَـٰقَوْمِ ٱسْتَغْفِرُوا۟ رَبَّكُمْ ثُمَّ تُوبُوٓا۟ إِلَيْهِ يُرْسِلِ ٱلسَّمَآءَ عَلَيْكُم مِّدْرَارًۭا وَيَزِدْكُمْ قُوَّةً إِلَىٰ قُوَّتِكُمْ وَلَا تَتَوَلَّوْا۟ مُجْرِمِينَ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", root: "ق و م", meaning: { en: "And O my people", ur: "اور اے my لوگ", ar: "ويقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتَغْفِرُوا۟", transliteration: "is'taghfirū", root: null, meaning: { en: "Ask forgiveness", ur: "Ask مغفرت", ar: "ستغفروا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبَّكُمْ", transliteration: "rabbakum", root: "ر ب ب", meaning: { en: "(of) your Lord", ur: "تمہارا رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُوبُوٓا۟", transliteration: "tūbū", root: "ت و ب", meaning: { en: "turn in repentance", ur: "turn میں repentance", ar: "توبوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", root: null, meaning: { en: "to Him", ur: "طرف اس", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "يُرْسِلِ", transliteration: "yur'sili", root: null, meaning: { en: "He will send", ur: "وہ گا/گے send", ar: "يرسل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّمَآءَ", transliteration: "l-samāa", root: null, meaning: { en: "(from) the sky (rain)", ur: "سے the sky rain", ar: "لسماء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُم", transliteration: "ʿalaykum", root: null, meaning: { en: "upon you", ur: "upon تم", ar: "عليكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّدْرَارًۭا", transliteration: "mid'rāran", root: null, meaning: { en: "(in) abundance", ur: "میں abundance", ar: "مدرارا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَزِدْكُمْ", transliteration: "wayazid'kum", root: null, meaning: { en: "and increase you", ur: "اور increase تم", ar: "ويزدكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُوَّةً", transliteration: "quwwatan", root: null, meaning: { en: "(in) strength", ur: "میں strength", ar: "قوة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "(added) to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قُوَّتِكُمْ", transliteration: "quwwatikum", root: null, meaning: { en: "your strength", ur: "تمہارا strength", ar: "قوتكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "And (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَتَوَلَّوْا۟", transliteration: "tatawallaw", root: null, meaning: { en: "turn away", ur: "turn away", ar: "تتولوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُجْرِمِينَ", transliteration: "muj'rimīna", root: null, meaning: { en: "(as) criminals", ur: "as criminals", ar: "مجرمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'نفی + فعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
  53: {
    ayahNumber: 53,
    text: "قَالُوا۟ يَـٰهُودُ مَا جِئْتَنَا بِبَيِّنَةٍۢ وَمَا نَحْنُ بِتَارِكِىٓ ءَالِهَتِنَا عَن قَوْلِكَ وَمَا نَحْنُ لَكَ بِمُؤْمِنِينَ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰهُودُ", transliteration: "yāhūdu", root: null, meaning: { en: "O Hud", ur: "اے Hud", ar: "يهود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "You have not brought us", ur: "تم have نہیں brought us", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "جِئْتَنَا", transliteration: "ji'tanā", root: null, meaning: { en: "You have not brought us", ur: "تم have نہیں brought us", ar: "جئتنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِبَيِّنَةٍۢ", transliteration: "bibayyinatin", root: null, meaning: { en: "clear proofs", ur: "واضح proofs", ar: "ببينة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", root: null, meaning: { en: "we", ur: "ہم", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِتَارِكِىٓ", transliteration: "bitārikī", root: null, meaning: { en: "(will) leave", ur: "گا/گے leave", ar: "بتاركى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ءَالِهَتِنَا", transliteration: "ālihatinā", root: null, meaning: { en: "our gods", ur: "our gods", ar: "ءالهتنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَن", transliteration: "ʿan", root: null, meaning: { en: "on", ur: "پر", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْلِكَ", transliteration: "qawlika", root: null, meaning: { en: "your saying", ur: "تمہارا saying", ar: "قولك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", root: null, meaning: { en: "we (are)", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لَكَ", transliteration: "laka", root: null, meaning: { en: "in you", ur: "میں تم", ar: "لك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمُؤْمِنِينَ", transliteration: "bimu'minīna", root: null, meaning: { en: "believers", ur: "مومنوں", ar: "بمؤمنين" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    ayahNumber: 54,
    text: "إِن نَّقُولُ إِلَّا ٱعْتَرَىٰكَ بَعْضُ ءَالِهَتِنَا بِسُوٓءٍۢ ۗ قَالَ إِنِّىٓ أُشْهِدُ ٱللَّهَ وَٱشْهَدُوٓا۟ أَنِّى بَرِىٓءٌۭ مِّمَّا تُشْرِكُونَ",
    words: [
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "Not", ur: "نہیں", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّقُولُ", transliteration: "naqūlu", root: null, meaning: { en: "we say", ur: "ہم کہو", ar: "نقول" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except (that)", ur: "سوائے کہ/وہ", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱعْتَرَىٰكَ", transliteration: "iʿ'tarāka", root: null, meaning: { en: "have seized you", ur: "have seized تم", ar: "عترىك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضُ", transliteration: "baʿḍu", root: null, meaning: { en: "some", ur: "some", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَالِهَتِنَا", transliteration: "ālihatinā", root: null, meaning: { en: "(of) our gods", ur: "of our gods", ar: "ءالهتنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِسُوٓءٍۢ ۗ", transliteration: "bisūin", root: null, meaning: { en: "with evil", ur: "کے ساتھ برا", ar: "بسوء" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", root: null, meaning: { en: "Indeed, I", ur: "Indeed, میں", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُشْهِدُ", transliteration: "ush'hidu", root: null, meaning: { en: "[I] call Allah to witness", ur: "[I] call اللہ طرف witness", ar: "أشهد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "[I] call Allah to witness", ur: "[I] call اللہ طرف witness", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱشْهَدُوٓا۟", transliteration: "wa-ish'hadū", root: null, meaning: { en: "and (you) bear witness", ur: "اور تم bear witness", ar: "وشهدوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنِّى", transliteration: "annī", root: null, meaning: { en: "that I am", ur: "کہ/وہ میں am", ar: "أنى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَرِىٓءٌۭ", transliteration: "barīon", root: null, meaning: { en: "innocent", ur: "innocent", ar: "برىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", root: null, meaning: { en: "of what", ur: "of کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُشْرِكُونَ", transliteration: "tush'rikūna", root: null, meaning: { en: "you associate", ur: "تم associate", ar: "تشركون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  55: {
    ayahNumber: 55,
    text: "مِن دُونِهِۦ ۖ فَكِيدُونِى جَمِيعًۭا ثُمَّ لَا تُنظِرُونِ",
    words: [
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "Other than Him", ur: "Other than اس", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِهِۦ ۖ", transliteration: "dūnihi", root: null, meaning: { en: "Other than Him", ur: "Other than اس", ar: "دونه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَكِيدُونِى", transliteration: "fakīdūnī", root: null, meaning: { en: "So plot against me", ur: "So plot against me", ar: "فكيدونى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَمِيعًۭا", transliteration: "jamīʿan", root: null, meaning: { en: "all together", ur: "all together", ar: "جميعا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تُنظِرُونِ", transliteration: "tunẓirūni", root: null, meaning: { en: "give me respite", ur: "دو me respite", ar: "تنظرون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'نفی + فعل' }
      ],
    },
  },
  57: {
    ayahNumber: 57,
    text: "فَإِن تَوَلَّوْا۟ فَقَدْ أَبْلَغْتُكُم مَّآ أُرْسِلْتُ بِهِۦٓ إِلَيْكُمْ ۚ وَيَسْتَخْلِفُ رَبِّى قَوْمًا غَيْرَكُمْ وَلَا تَضُرُّونَهُۥ شَيْـًٔا ۚ إِنَّ رَبِّى عَلَىٰ كُلِّ شَىْءٍ حَفِيظٌۭ",
    words: [
      { arabic: "فَإِن", transliteration: "fa-in", root: null, meaning: { en: "So if", ur: "So if", ar: "فإن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَوَلَّوْا۟", transliteration: "tawallaw", root: null, meaning: { en: "you turn away", ur: "تم turn away", ar: "تولوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَقَدْ", transliteration: "faqad", root: null, meaning: { en: "then verily", ur: "پھر verily", ar: "فقد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَبْلَغْتُكُم", transliteration: "ablaghtukum", root: null, meaning: { en: "I have conveyed to you", ur: "میں have conveyed طرف تم", ar: "أبلغتكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَّآ", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُرْسِلْتُ", transliteration: "ur'sil'tu", root: null, meaning: { en: "I was sent", ur: "میں تھا بھیجا", ar: "أرسلت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦٓ", transliteration: "bihi", root: null, meaning: { en: "with [it]", ur: "کے ساتھ [it]", ar: "به" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِلَيْكُمْ ۚ", transliteration: "ilaykum", root: null, meaning: { en: "to you", ur: "طرف تم", ar: "إليكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَيَسْتَخْلِفُ", transliteration: "wayastakhlifu", root: null, meaning: { en: "And my Lord will give succession", ur: "اور my رب گا/گے دو succession", ar: "ويستخلف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّى", transliteration: "rabbī", root: null, meaning: { en: "And my Lord will give succession", ur: "اور my رب گا/گے دو succession", ar: "ربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمًا", transliteration: "qawman", root: "ق و م", meaning: { en: "(to) a people", ur: "طرف a لوگ", ar: "قوما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَيْرَكُمْ", transliteration: "ghayrakum", root: null, meaning: { en: "other than you", ur: "other than تم", ar: "غيركم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَضُرُّونَهُۥ", transliteration: "taḍurrūnahu", root: null, meaning: { en: "you will harm Him", ur: "تم گا/گے harm اس", ar: "تضرونه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شَيْـًٔا ۚ", transliteration: "shayan", root: null, meaning: { en: "(in) anything", ur: "میں anything", ar: "شيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّى", transliteration: "rabbī", root: null, meaning: { en: "my Lord", ur: "میرا رب", ar: "ربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "(is) on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", root: null, meaning: { en: "all", ur: "all", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍ", transliteration: "shayin", root: null, meaning: { en: "things", ur: "things", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَفِيظٌۭ", transliteration: "ḥafīẓun", root: null, meaning: { en: "a Guardian", ur: "a Guardian", ar: "حفيظ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  58: {
    ayahNumber: 58,
    text: "وَلَمَّا جَآءَ أَمْرُنَا نَجَّيْنَا هُودًۭا وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ بِرَحْمَةٍۢ مِّنَّا وَنَجَّيْنَـٰهُم مِّنْ عَذَابٍ غَلِيظٍۢ",
    words: [
      { arabic: "وَلَمَّا", transliteration: "walammā", root: null, meaning: { en: "And when", ur: "اور when", ar: "ولما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "came", ur: "آیا", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُنَا", transliteration: "amrunā", root: null, meaning: { en: "Our command", ur: "Our command", ar: "أمرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَجَّيْنَا", transliteration: "najjaynā", root: null, meaning: { en: "We saved", ur: "ہم saved", ar: "نجينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُودًۭا", transliteration: "hūdan", root: null, meaning: { en: "Hud", ur: "Hud", ar: "هودا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "and those who", ur: "اور those جو", ar: "ولذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", root: null, meaning: { en: "believed", ur: "ایمان لائے", ar: "ءامنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَعَهُۥ", transliteration: "maʿahu", root: null, meaning: { en: "with him", ur: "کے ساتھ اسے", ar: "معه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِرَحْمَةٍۢ", transliteration: "biraḥmatin", root: "ر ح م", meaning: { en: "by a Mercy", ur: "by a رحمت", ar: "برحمة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِّنَّا", transliteration: "minnā", root: null, meaning: { en: "from Us", ur: "سے Us", ar: "منا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَنَجَّيْنَـٰهُم", transliteration: "wanajjaynāhum", root: null, meaning: { en: "and We saved them", ur: "اور ہم saved انہیں", ar: "ونجينهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْ", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٍ", transliteration: "ʿadhābin", root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَلِيظٍۢ", transliteration: "ghalīẓin", root: null, meaning: { en: "severe", ur: "severe", ar: "غليظ" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  59: {
    ayahNumber: 59,
    text: "وَتِلْكَ عَادٌۭ ۖ جَحَدُوا۟ بِـَٔايَـٰتِ رَبِّهِمْ وَعَصَوْا۟ رُسُلَهُۥ وَٱتَّبَعُوٓا۟ أَمْرَ كُلِّ جَبَّارٍ عَنِيدٍۢ",
    words: [
      { arabic: "وَتِلْكَ", transliteration: "watil'ka", root: null, meaning: { en: "And this", ur: "اور یہ", ar: "وتلك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَادٌۭ ۖ", transliteration: "ʿādun", root: null, meaning: { en: "(was) Aad", ur: "تھا Aad", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَحَدُوا۟", transliteration: "jaḥadū", root: null, meaning: { en: "they rejected", ur: "وہ لوگ rejected", ar: "جحدوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", root: null, meaning: { en: "(the) Signs", ur: "نشانیاں", ar: "بايت" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "(of) their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَصَوْا۟", transliteration: "waʿaṣaw", root: null, meaning: { en: "and disobeyed", ur: "اور disobeyed", ar: "وعصوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رُسُلَهُۥ", transliteration: "rusulahu", root: "ر س ل", meaning: { en: "His Messengers", ur: "His رسول", ar: "رسله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱتَّبَعُوٓا۟", transliteration: "wa-ittabaʿū", root: null, meaning: { en: "and followed", ur: "اور followed", ar: "وتبعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرَ", transliteration: "amra", root: null, meaning: { en: "(the) command", ur: "the command", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُلِّ", transliteration: "kulli", root: null, meaning: { en: "(of) every", ur: "of every", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَبَّارٍ", transliteration: "jabbārin", root: null, meaning: { en: "tyrant", ur: "tyrant", ar: "جبار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنِيدٍۢ", transliteration: "ʿanīdin", root: null, meaning: { en: "obstinate", ur: "obstinate", ar: "عنيد" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  60: {
    ayahNumber: 60,
    text: "وَأُتْبِعُوا۟ فِى هَـٰذِهِ ٱلدُّنْيَا لَعْنَةًۭ وَيَوْمَ ٱلْقِيَـٰمَةِ ۗ أَلَآ إِنَّ عَادًۭا كَفَرُوا۟ رَبَّهُمْ ۗ أَلَا بُعْدًۭا لِّعَادٍۢ قَوْمِ هُودٍۢ",
    words: [
      { arabic: "وَأُتْبِعُوا۟", transliteration: "wa-ut'biʿū", root: null, meaning: { en: "And they were followed", ur: "اور وہ لوگ تھے followed", ar: "وأتبعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَـٰذِهِ", transliteration: "hādhihi", root: null, meaning: { en: "this", ur: "یہ", ar: "هذه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", root: null, meaning: { en: "world", ur: "world", ar: "لدنيا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَعْنَةًۭ", transliteration: "laʿnatan", root: null, meaning: { en: "(with) a curse", ur: "کے ساتھ a curse", ar: "لعنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَوْمَ", transliteration: "wayawma", root: "ي و م", meaning: { en: "and (on the) Day", ur: "اور پر the دن", ar: "ويوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقِيَـٰمَةِ ۗ", transliteration: "l-qiyāmati", root: null, meaning: { en: "(of) the Resurrection", ur: "of the Resurrection", ar: "لقيمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَآ", transliteration: "alā", root: null, meaning: { en: "No doubt", ur: "خبردار", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَادًۭا", transliteration: "ʿādan", root: null, meaning: { en: "Aad", ur: "Aad", ar: "عادا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", root: null, meaning: { en: "disbelieved", ur: "disbelieved", ar: "كفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبَّهُمْ ۗ", transliteration: "rabbahum", root: null, meaning: { en: "their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَا", transliteration: "alā", root: null, meaning: { en: "So", ur: "So", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بُعْدًۭا", transliteration: "buʿ'dan", root: null, meaning: { en: "away", ur: "away", ar: "بعدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّعَادٍۢ", transliteration: "liʿādin", root: null, meaning: { en: "with Aad", ur: "کے ساتھ Aad", ar: "لعاد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "(the) people", ur: "لوگ", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُودٍۢ", transliteration: "hūdin", root: null, meaning: { en: "(of) Hud", ur: "of Hud", ar: "هود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  62: {
    ayahNumber: 62,
    text: "قَالُوا۟ يَـٰصَـٰلِحُ قَدْ كُنتَ فِينَا مَرْجُوًّۭا قَبْلَ هَـٰذَآ ۖ أَتَنْهَىٰنَآ أَن نَّعْبُدَ مَا يَعْبُدُ ءَابَآؤُنَا وَإِنَّنَا لَفِى شَكٍّۢ مِّمَّا تَدْعُونَآ إِلَيْهِ مُرِيبٍۢ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰصَـٰلِحُ", transliteration: "yāṣāliḥu", root: null, meaning: { en: "O Salih", ur: "اے Salih", ar: "يصلح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدْ", transliteration: "qad", root: null, meaning: { en: "Verily", ur: "Verily", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "كُنتَ", transliteration: "kunta", root: null, meaning: { en: "you were", ur: "تم تھے", ar: "كنت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِينَا", transliteration: "fīnā", root: null, meaning: { en: "among us", ur: "among us", ar: "فينا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَرْجُوًّۭا", transliteration: "marjuwwan", root: null, meaning: { en: "the one in whom hope was placed", ur: "the one میں whom hope تھا placed", ar: "مرجوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلَ", transliteration: "qabla", root: null, meaning: { en: "before", ur: "before", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَآ ۖ", transliteration: "hādhā", root: null, meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَتَنْهَىٰنَآ", transliteration: "atanhānā", root: null, meaning: { en: "Do you forbid us", ur: "کرتے ہو تم forbid us", ar: "أتنهىنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَّعْبُدَ", transliteration: "naʿbuda", root: null, meaning: { en: "we worship", ur: "ہم عبادت کرو", ar: "نعبد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَعْبُدُ", transliteration: "yaʿbudu", root: null, meaning: { en: "our forefathers worshipped", ur: "our forefathers worshipped", ar: "يعبد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَابَآؤُنَا", transliteration: "ābāunā", root: null, meaning: { en: "our forefathers worshipped", ur: "our forefathers worshipped", ar: "ءاباؤنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِنَّنَا", transliteration: "wa-innanā", root: null, meaning: { en: "And indeed we", ur: "اور بے شک ہم", ar: "وإننا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَفِى", transliteration: "lafī", root: null, meaning: { en: "surely (are) in", ur: "یقیناً ہیں میں", ar: "لفى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَكٍّۢ", transliteration: "shakkin", root: null, meaning: { en: "doubt", ur: "doubt", ar: "شك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", root: null, meaning: { en: "about what", ur: "about کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَدْعُونَآ", transliteration: "tadʿūnā", root: null, meaning: { en: "you call us", ur: "تم call us", ar: "تدعونا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", root: null, meaning: { en: "to it", ur: "طرف یہ", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مُرِيبٍۢ", transliteration: "murībin", root: null, meaning: { en: "suspicious", ur: "suspicious", ar: "مريب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'موصول + صلة' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  63: {
    ayahNumber: 63,
    text: "قَالَ يَـٰقَوْمِ أَرَءَيْتُمْ إِن كُنتُ عَلَىٰ بَيِّنَةٍۢ مِّن رَّبِّى وَءَاتَىٰنِى مِنْهُ رَحْمَةًۭ فَمَن يَنصُرُنِى مِنَ ٱللَّهِ إِنْ عَصَيْتُهُۥ ۖ فَمَا تَزِيدُونَنِى غَيْرَ تَخْسِيرٍۢ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ", ar: "يقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَءَيْتُمْ", transliteration: "ara-aytum", root: null, meaning: { en: "Do you see", ur: "کرتے ہو تم دیکھتے ہو", ar: "أرءيتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُ", transliteration: "kuntu", root: null, meaning: { en: "I am", ur: "میں am", ar: "كنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَيِّنَةٍۢ", transliteration: "bayyinatin", root: null, meaning: { en: "a clear proof", ur: "a واضح proof", ar: "بينة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّبِّى", transliteration: "rabbī", root: null, meaning: { en: "my Lord", ur: "میرا رب", ar: "ربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَءَاتَىٰنِى", transliteration: "waātānī", root: null, meaning: { en: "and He has given me", ur: "اور وہ has given me", ar: "وءاتىنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُ", transliteration: "min'hu", root: null, meaning: { en: "from Him", ur: "سے اس", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", root: "ر ح م", meaning: { en: "a Mercy", ur: "a رحمت", ar: "رحمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَن", transliteration: "faman", root: null, meaning: { en: "then who", ur: "پھر جو", ar: "فمن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَنصُرُنِى", transliteration: "yanṣurunī", root: "ن ص ر", meaning: { en: "(can) help me", ur: "can help me", ar: "ينصرنى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "against", ur: "against", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَصَيْتُهُۥ ۖ", transliteration: "ʿaṣaytuhu", root: null, meaning: { en: "I (were to) disobey Him", ur: "میں تھے طرف disobey اس", ar: "عصيته" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَا", transliteration: "famā", root: null, meaning: { en: "So not", ur: "So نہیں", ar: "فما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَزِيدُونَنِى", transliteration: "tazīdūnanī", root: null, meaning: { en: "you would increase me", ur: "تم would increase me", ar: "تزيدوننى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", root: null, meaning: { en: "but", ur: "لیکن", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَخْسِيرٍۢ", transliteration: "takhsīrin", root: null, meaning: { en: "(in) loss", ur: "میں loss", ar: "تخسير" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  64: {
    ayahNumber: 64,
    text: "وَيَـٰقَوْمِ هَـٰذِهِۦ نَاقَةُ ٱللَّهِ لَكُمْ ءَايَةًۭ فَذَرُوهَا تَأْكُلْ فِىٓ أَرْضِ ٱللَّهِ وَلَا تَمَسُّوهَا بِسُوٓءٍۢ فَيَأْخُذَكُمْ عَذَابٌۭ قَرِيبٌۭ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", root: "ق و م", meaning: { en: "And O my people", ur: "اور اے my لوگ", ar: "ويقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", root: null, meaning: { en: "This", ur: "یہ", ar: "هذه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَاقَةُ", transliteration: "nāqatu", root: null, meaning: { en: "she-camel", ur: "she-camel", ar: "ناقة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "(is) for you", ur: "ہے کے لیے تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "ءَايَةًۭ", transliteration: "āyatan", root: null, meaning: { en: "a Sign", ur: "a نشانی", ar: "ءاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَذَرُوهَا", transliteration: "fadharūhā", root: null, meaning: { en: "so leave her", ur: "so leave her", ar: "فذروها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَأْكُلْ", transliteration: "takul", root: null, meaning: { en: "to eat", ur: "طرف eat", ar: "تأكل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَرْضِ", transliteration: "arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "أرض" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(of) Allah", ur: "اللہ کا", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَمَسُّوهَا", transliteration: "tamassūhā", root: null, meaning: { en: "touch her", ur: "touch her", ar: "تمسوها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِسُوٓءٍۢ", transliteration: "bisūin", root: null, meaning: { en: "with harm", ur: "کے ساتھ harm", ar: "بسوء" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَيَأْخُذَكُمْ", transliteration: "fayakhudhakum", root: null, meaning: { en: "lest will seize you", ur: "lest گا/گے seize تم", ar: "فيأخذكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَرِيبٌۭ", transliteration: "qarībun", root: null, meaning: { en: "impending", ur: "impending", ar: "قريب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
  },
  65: {
    ayahNumber: 65,
    text: "فَعَقَرُوهَا فَقَالَ تَمَتَّعُوا۟ فِى دَارِكُمْ ثَلَـٰثَةَ أَيَّامٍۢ ۖ ذَٰلِكَ وَعْدٌ غَيْرُ مَكْذُوبٍۢ",
    words: [
      { arabic: "فَعَقَرُوهَا", transliteration: "faʿaqarūhā", root: null, meaning: { en: "But they hamstrung her", ur: "لیکن وہ لوگ hamstrung her", ar: "فعقروها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَقَالَ", transliteration: "faqāla", root: "ق و ل", meaning: { en: "So he said", ur: "So وہ کہا", ar: "فقال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَمَتَّعُوا۟", transliteration: "tamattaʿū", root: null, meaning: { en: "Enjoy (yourselves)", ur: "Enjoy yourselves", ar: "تمتعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دَارِكُمْ", transliteration: "dārikum", root: null, meaning: { en: "your home(s)", ur: "تمہارا گھر", ar: "داركم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثَلَـٰثَةَ", transliteration: "thalāthata", root: null, meaning: { en: "(for) three", ur: "کے لیے three", ar: "ثلثة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيَّامٍۢ ۖ", transliteration: "ayyāmin", root: null, meaning: { en: "days", ur: "days", ar: "أيام" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "That", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "وَعْدٌ", transliteration: "waʿdun", root: null, meaning: { en: "(is) a promise", ur: "ہے a promise", ar: "وعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", root: null, meaning: { en: "not", ur: "نہیں", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَكْذُوبٍۢ", transliteration: "makdhūbin", root: null, meaning: { en: "(to) be belied", ur: "طرف be belied", ar: "مكذوب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  66: {
    ayahNumber: 66,
    text: "فَلَمَّا جَآءَ أَمْرُنَا نَجَّيْنَا صَـٰلِحًۭا وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ بِرَحْمَةٍۢ مِّنَّا وَمِنْ خِزْىِ يَوْمِئِذٍ ۗ إِنَّ رَبَّكَ هُوَ ٱلْقَوِىُّ ٱلْعَزِيزُ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", root: null, meaning: { en: "So when", ur: "So when", ar: "فلما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "came", ur: "آیا", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُنَا", transliteration: "amrunā", root: null, meaning: { en: "Our command", ur: "Our command", ar: "أمرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَجَّيْنَا", transliteration: "najjaynā", root: null, meaning: { en: "We saved", ur: "ہم saved", ar: "نجينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", root: null, meaning: { en: "Salih", ur: "Salih", ar: "صلحا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "and those who", ur: "اور those جو", ar: "ولذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", root: null, meaning: { en: "believed", ur: "ایمان لائے", ar: "ءامنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَعَهُۥ", transliteration: "maʿahu", root: null, meaning: { en: "with him", ur: "کے ساتھ اسے", ar: "معه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِرَحْمَةٍۢ", transliteration: "biraḥmatin", root: "ر ح م", meaning: { en: "by a Mercy", ur: "by a رحمت", ar: "برحمة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِّنَّا", transliteration: "minnā", root: null, meaning: { en: "from Us", ur: "سے Us", ar: "منا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمِنْ", transliteration: "wamin", root: null, meaning: { en: "and from", ur: "اور سے", ar: "ومن" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "خِزْىِ", transliteration: "khiz'yi", root: null, meaning: { en: "(the) disgrace", ur: "the disgrace", ar: "خزى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمِئِذٍ ۗ", transliteration: "yawmi-idhin", root: "ي و م", meaning: { en: "(of) that Day", ur: "of کہ/وہ دن", ar: "يومئذ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", root: null, meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلْقَوِىُّ", transliteration: "l-qawiyu", root: null, meaning: { en: "(is) All-Strong", ur: "ہے All-Strong", ar: "لقوى" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", root: null, meaning: { en: "All-Mighty", ur: "All-Mighty", ar: "لعزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  67: {
    ayahNumber: 67,
    text: "وَأَخَذَ ٱلَّذِينَ ظَلَمُوا۟ ٱلصَّيْحَةُ فَأَصْبَحُوا۟ فِى دِيَـٰرِهِمْ جَـٰثِمِينَ",
    words: [
      { arabic: "وَأَخَذَ", transliteration: "wa-akhadha", root: null, meaning: { en: "And seized", ur: "اور seized", ar: "وأخذ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", root: null, meaning: { en: "wronged", ur: "wronged", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلصَّيْحَةُ", transliteration: "l-ṣayḥatu", root: null, meaning: { en: "the thunderous blast", ur: "the thunderous blast", ar: "لصيحة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَصْبَحُوا۟", transliteration: "fa-aṣbaḥū", root: null, meaning: { en: "then they became", ur: "پھر وہ لوگ became", ar: "فأصبحوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دِيَـٰرِهِمْ", transliteration: "diyārihim", root: null, meaning: { en: "their homes", ur: "their گھر", ar: "ديرهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَـٰثِمِينَ", transliteration: "jāthimīna", root: null, meaning: { en: "fallen prone", ur: "fallen prone", ar: "جثمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  68: {
    ayahNumber: 68,
    text: "كَأَن لَّمْ يَغْنَوْا۟ فِيهَآ ۗ أَلَآ إِنَّ ثَمُودَا۟ كَفَرُوا۟ رَبَّهُمْ ۗ أَلَا بُعْدًۭا لِّثَمُودَ",
    words: [
      { arabic: "كَأَن", transliteration: "ka-an", root: null, meaning: { en: "As if", ur: "As if", ar: "كأن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَّمْ", transliteration: "lam", root: null, meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَغْنَوْا۟", transliteration: "yaghnaw", root: null, meaning: { en: "they (had) prospered", ur: "وہ لوگ had prospered", ar: "يغنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَآ ۗ", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَلَآ", transliteration: "alā", root: null, meaning: { en: "No doubt", ur: "خبردار", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثَمُودَا۟", transliteration: "thamūdā", root: null, meaning: { en: "Thamud", ur: "Thamud", ar: "ثمودا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", root: null, meaning: { en: "disbelieved", ur: "disbelieved", ar: "كفروا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبَّهُمْ ۗ", transliteration: "rabbahum", root: null, meaning: { en: "(in) their Lord", ur: "ان کا رب", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَا", transliteration: "alā", root: null, meaning: { en: "so", ur: "so", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بُعْدًۭا", transliteration: "buʿ'dan", root: null, meaning: { en: "away", ur: "away", ar: "بعدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّثَمُودَ", transliteration: "lithamūda", root: null, meaning: { en: "with Thamud", ur: "کے ساتھ Thamud", ar: "لثمود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    ayahNumber: 70,
    text: "فَلَمَّا رَءَآ أَيْدِيَهُمْ لَا تَصِلُ إِلَيْهِ نَكِرَهُمْ وَأَوْجَسَ مِنْهُمْ خِيفَةًۭ ۚ قَالُوا۟ لَا تَخَفْ إِنَّآ أُرْسِلْنَآ إِلَىٰ قَوْمِ لُوطٍۢ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", root: null, meaning: { en: "But when", ur: "لیکن when", ar: "فلما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَءَآ", transliteration: "raā", root: null, meaning: { en: "he saw", ur: "وہ saw", ar: "رءا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَيْدِيَهُمْ", transliteration: "aydiyahum", root: null, meaning: { en: "their hands", ur: "their ہاتھ", ar: "أيديهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَصِلُ", transliteration: "taṣilu", root: null, meaning: { en: "reaching", ur: "reaching", ar: "تصل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", root: null, meaning: { en: "to it", ur: "طرف یہ", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "نَكِرَهُمْ", transliteration: "nakirahum", root: null, meaning: { en: "he felt unfamiliar of them", ur: "وہ felt unfamiliar of انہیں", ar: "نكرهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَوْجَسَ", transliteration: "wa-awjasa", root: null, meaning: { en: "and felt apprehension", ur: "اور felt apprehension", ar: "وأوجس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُمْ", transliteration: "min'hum", root: null, meaning: { en: "from them", ur: "سے انہیں", ar: "منهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خِيفَةًۭ ۚ", transliteration: "khīfatan", root: null, meaning: { en: "[a fear]", ur: "[a fear]", ar: "خيفة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "(Do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَخَفْ", transliteration: "takhaf", root: null, meaning: { en: "fear", ur: "ڈرو", ar: "تخف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّآ", transliteration: "innā", root: null, meaning: { en: "Indeed, we", ur: "Indeed, ہم", ar: "إنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُرْسِلْنَآ", transliteration: "ur'sil'nā", root: null, meaning: { en: "[we] have been sent", ur: "[we] have been بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "to", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "(the) people", ur: "لوگ", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لُوطٍۢ", transliteration: "lūṭin", root: null, meaning: { en: "(of) Lut", ur: "of Lut", ar: "لوط" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    ayahNumber: 71,
    text: "وَٱمْرَأَتُهُۥ قَآئِمَةٌۭ فَضَحِكَتْ فَبَشَّرْنَـٰهَا بِإِسْحَـٰقَ وَمِن وَرَآءِ إِسْحَـٰقَ يَعْقُوبَ",
    words: [
      { arabic: "وَٱمْرَأَتُهُۥ", transliteration: "wa-im'ra-atuhu", root: null, meaning: { en: "And his wife", ur: "اور his بیوی", ar: "ومرأته" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَآئِمَةٌۭ", transliteration: "qāimatun", root: null, meaning: { en: "(was) standing", ur: "تھا standing", ar: "قائمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَضَحِكَتْ", transliteration: "faḍaḥikat", root: null, meaning: { en: "and she laughed", ur: "اور she laughed", ar: "فضحكت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَبَشَّرْنَـٰهَا", transliteration: "fabasharnāhā", root: null, meaning: { en: "Then We gave her glad tidings", ur: "پھر ہم دیا her glad tidings", ar: "فبشرنها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِإِسْحَـٰقَ", transliteration: "bi-is'ḥāqa", root: null, meaning: { en: "of Isaac", ur: "of Isaac", ar: "بإسحق" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَمِن", transliteration: "wamin", root: null, meaning: { en: "and after", ur: "اور after", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَآءِ", transliteration: "warāi", root: null, meaning: { en: "and after", ur: "اور after", ar: "وراء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِسْحَـٰقَ", transliteration: "is'ḥāqa", root: null, meaning: { en: "Isaac", ur: "Isaac", ar: "إسحق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْقُوبَ", transliteration: "yaʿqūba", root: null, meaning: { en: "(of) Yaqub", ur: "of Yaqub", ar: "يعقوب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  72: {
    ayahNumber: 72,
    text: "قَالَتْ يَـٰوَيْلَتَىٰٓ ءَأَلِدُ وَأَنَا۠ عَجُوزٌۭ وَهَـٰذَا بَعْلِى شَيْخًا ۖ إِنَّ هَـٰذَا لَشَىْءٌ عَجِيبٌۭ",
    words: [
      { arabic: "قَالَتْ", transliteration: "qālat", root: "ق و ل", meaning: { en: "She said", ur: "She کہا", ar: "قالت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰوَيْلَتَىٰٓ", transliteration: "yāwaylatā", root: null, meaning: { en: "Woe to me", ur: "Woe طرف me", ar: "يويلتى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَأَلِدُ", transliteration: "a-alidu", root: null, meaning: { en: "Shall I bear a child", ur: "Shall میں bear a child", ar: "ءألد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَنَا۠", transliteration: "wa-anā", root: null, meaning: { en: "while I am", ur: "while میں am", ar: "وأنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَجُوزٌۭ", transliteration: "ʿajūzun", root: null, meaning: { en: "an old woman", ur: "an پرانا عورت", ar: "عجوز" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهَـٰذَا", transliteration: "wahādhā", root: null, meaning: { en: "and this", ur: "اور یہ", ar: "وهذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْلِى", transliteration: "baʿlī", root: null, meaning: { en: "my husband", ur: "my husband", ar: "بعلى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَيْخًا ۖ", transliteration: "shaykhan", root: null, meaning: { en: "(is) an old man", ur: "ہے an پرانا انسان", ar: "شيخا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", root: null, meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَشَىْءٌ", transliteration: "lashayon", root: null, meaning: { en: "(is) surely a thing", ur: "ہے یقیناً a thing", ar: "لشىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَجِيبٌۭ", transliteration: "ʿajībun", root: null, meaning: { en: "amazing", ur: "amazing", ar: "عجيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  73: {
    ayahNumber: 73,
    text: "قَالُوٓا۟ أَتَعْجَبِينَ مِنْ أَمْرِ ٱللَّهِ ۖ رَحْمَتُ ٱللَّهِ وَبَرَكَـٰتُهُۥ عَلَيْكُمْ أَهْلَ ٱلْبَيْتِ ۚ إِنَّهُۥ حَمِيدٌۭ مَّجِيدٌۭ",
    words: [
      { arabic: "قَالُوٓا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَتَعْجَبِينَ", transliteration: "ataʿjabīna", root: null, meaning: { en: "Are you amazed", ur: "ہیں تم amazed", ar: "أتعجبين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "at", ur: "at", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَمْرِ", transliteration: "amri", root: null, meaning: { en: "(the) decree of Allah", ur: "the decree of اللہ", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", root: null, meaning: { en: "(the) decree of Allah", ur: "the decree of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَحْمَتُ", transliteration: "raḥmatu", root: "ر ح م", meaning: { en: "The Mercy of Allah", ur: "The رحمت of اللہ", ar: "رحمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "The Mercy of Allah", ur: "The رحمت of اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبَرَكَـٰتُهُۥ", transliteration: "wabarakātuhu", root: null, meaning: { en: "and His blessings", ur: "اور His blessings", ar: "وبركته" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", root: null, meaning: { en: "(be) upon you", ur: "be upon تم", ar: "عليكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَهْلَ", transliteration: "ahla", root: null, meaning: { en: "people", ur: "لوگ", ar: "أهل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْبَيْتِ ۚ", transliteration: "l-bayti", root: null, meaning: { en: "(of) the house", ur: "of the گھر", ar: "لبيت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "Indeed, He", ur: "Indeed, وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَمِيدٌۭ", transliteration: "ḥamīdun", root: null, meaning: { en: "(is) All-Praiseworthy", ur: "ہے All-Praiseworthy", ar: "حميد" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَّجِيدٌۭ", transliteration: "majīdun", root: null, meaning: { en: "All-Glorious", ur: "All-Glorious", ar: "مجيد" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  74: {
    ayahNumber: 74,
    text: "فَلَمَّا ذَهَبَ عَنْ إِبْرَٰهِيمَ ٱلرَّوْعُ وَجَآءَتْهُ ٱلْبُشْرَىٰ يُجَـٰدِلُنَا فِى قَوْمِ لُوطٍ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", root: null, meaning: { en: "And when", ur: "اور when", ar: "فلما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَهَبَ", transliteration: "dhahaba", root: null, meaning: { en: "(had) gone away", ur: "had gone away", ar: "ذهب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنْ", transliteration: "ʿan", root: null, meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", root: null, meaning: { en: "Ibrahim", ur: "Ibrahim", ar: "إبرهيم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّوْعُ", transliteration: "l-rawʿu", root: null, meaning: { en: "the fright", ur: "the fright", ar: "لروع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَآءَتْهُ", transliteration: "wajāathu", root: null, meaning: { en: "and had reached him", ur: "اور had reached اسے", ar: "وجاءته" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْبُشْرَىٰ", transliteration: "l-bush'rā", root: null, meaning: { en: "the glad tidings", ur: "the glad tidings", ar: "لبشرى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُجَـٰدِلُنَا", transliteration: "yujādilunā", root: null, meaning: { en: "he argued with Us", ur: "وہ argued کے ساتھ Us", ar: "يجدلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "concerning", ur: "concerning", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "the people", ur: "the لوگ", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لُوطٍ", transliteration: "lūṭin", root: null, meaning: { en: "of Lut", ur: "of Lut", ar: "لوط" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  76: {
    ayahNumber: 76,
    text: "يَـٰٓإِبْرَٰهِيمُ أَعْرِضْ عَنْ هَـٰذَآ ۖ إِنَّهُۥ قَدْ جَآءَ أَمْرُ رَبِّكَ ۖ وَإِنَّهُمْ ءَاتِيهِمْ عَذَابٌ غَيْرُ مَرْدُودٍۢ",
    words: [
      { arabic: "يَـٰٓإِبْرَٰهِيمُ", transliteration: "yāib'rāhīmu", root: null, meaning: { en: "O Ibrahim", ur: "اے Ibrahim", ar: "يإبرهيم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْرِضْ", transliteration: "aʿriḍ", root: null, meaning: { en: "Turn away", ur: "Turn away", ar: "أعرض" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْ", transliteration: "ʿan", root: null, meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَـٰذَآ ۖ", transliteration: "hādhā", root: null, meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "Indeed, it", ur: "Indeed, یہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدْ", transliteration: "qad", root: null, meaning: { en: "certainly", ur: "یقیناً", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "has come", ur: "has آؤ", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُ", transliteration: "amru", root: null, meaning: { en: "(the) Command", ur: "the Command", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّكَ ۖ", transliteration: "rabbika", root: null, meaning: { en: "(of) your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِنَّهُمْ", transliteration: "wa-innahum", root: null, meaning: { en: "and indeed, [they]", ur: "اور indeed, [they]", ar: "وإنهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَاتِيهِمْ", transliteration: "ātīhim", root: null, meaning: { en: "(will) come (for) them", ur: "گا/گے آؤ کے لیے انہیں", ar: "ءاتيهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", root: null, meaning: { en: "(which) cannot", ur: "جو cannot", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَرْدُودٍۢ", transliteration: "mardūdin", root: null, meaning: { en: "(be) repelled", ur: "be repelled", ar: "مردود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  77: {
    ayahNumber: 77,
    text: "وَلَمَّا جَآءَتْ رُسُلُنَا لُوطًۭا سِىٓءَ بِهِمْ وَضَاقَ بِهِمْ ذَرْعًۭا وَقَالَ هَـٰذَا يَوْمٌ عَصِيبٌۭ",
    words: [
      { arabic: "وَلَمَّا", transliteration: "walammā", root: null, meaning: { en: "And when", ur: "اور when", ar: "ولما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَتْ", transliteration: "jāat", root: null, meaning: { en: "came", ur: "آیا", ar: "جاءت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رُسُلُنَا", transliteration: "rusulunā", root: "ر س ل", meaning: { en: "Our messengers", ur: "Our رسول", ar: "رسلنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لُوطًۭا", transliteration: "lūṭan", root: null, meaning: { en: "(to) Lut", ur: "طرف Lut", ar: "لوطا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سِىٓءَ", transliteration: "sīa", root: null, meaning: { en: "he was distressed", ur: "وہ تھا distressed", ar: "سىء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِمْ", transliteration: "bihim", root: null, meaning: { en: "for them", ur: "کے لیے انہیں", ar: "بهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَضَاقَ", transliteration: "waḍāqa", root: null, meaning: { en: "and felt straitened", ur: "اور felt straitened", ar: "وضاق" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِمْ", transliteration: "bihim", root: null, meaning: { en: "for them", ur: "کے لیے انہیں", ar: "بهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَرْعًۭا", transliteration: "dharʿan", root: null, meaning: { en: "(and) uneasy", ur: "اور uneasy", ar: "ذرعا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَالَ", transliteration: "waqāla", root: "ق و ل", meaning: { en: "and said", ur: "اور کہا", ar: "وقال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", root: null, meaning: { en: "This", ur: "یہ", ar: "هذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمٌ", transliteration: "yawmun", root: "ي و م", meaning: { en: "(is) a day", ur: "ہے a دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَصِيبٌۭ", transliteration: "ʿaṣībun", root: null, meaning: { en: "distressful", ur: "distressful", ar: "عصيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  78: {
    ayahNumber: 78,
    text: "وَجَآءَهُۥ قَوْمُهُۥ يُهْرَعُونَ إِلَيْهِ وَمِن قَبْلُ كَانُوا۟ يَعْمَلُونَ ٱلسَّيِّـَٔاتِ ۚ قَالَ يَـٰقَوْمِ هَـٰٓؤُلَآءِ بَنَاتِى هُنَّ أَطْهَرُ لَكُمْ ۖ فَٱتَّقُوا۟ ٱللَّهَ وَلَا تُخْزُونِ فِى ضَيْفِىٓ ۖ أَلَيْسَ مِنكُمْ رَجُلٌۭ رَّشِيدٌۭ",
    words: [
      { arabic: "وَجَآءَهُۥ", transliteration: "wajāahu", root: null, meaning: { en: "And came (to) him", ur: "اور آیا طرف اسے", ar: "وجاءه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمُهُۥ", transliteration: "qawmuhu", root: "ق و م", meaning: { en: "his people", ur: "his لوگ", ar: "قومه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُهْرَعُونَ", transliteration: "yuh'raʿūna", root: null, meaning: { en: "rushing", ur: "rushing", ar: "يهرعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", root: null, meaning: { en: "to him", ur: "طرف اسے", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَمِن", transliteration: "wamin", root: null, meaning: { en: "and before", ur: "اور before", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلُ", transliteration: "qablu", root: null, meaning: { en: "and before", ur: "اور before", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", root: null, meaning: { en: "they (had) been", ur: "وہ لوگ had been", ar: "كانوا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", root: null, meaning: { en: "doing", ur: "doing", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّيِّـَٔاتِ ۚ", transliteration: "l-sayiāti", root: null, meaning: { en: "the evil deeds", ur: "the برا deeds", ar: "لسيات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ", ar: "يقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", root: null, meaning: { en: "These", ur: "یہ", ar: "هؤلاء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَنَاتِى", transliteration: "banātī", root: null, meaning: { en: "(are) my daughters", ur: "ہیں my daughters", ar: "بناتى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُنَّ", transliteration: "hunna", root: null, meaning: { en: "they", ur: "وہ لوگ", ar: "هن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَطْهَرُ", transliteration: "aṭharu", root: null, meaning: { en: "(are) purer", ur: "ہیں purer", ar: "أطهر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ ۖ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", root: null, meaning: { en: "So fear", ur: "So ڈرو", ar: "فتقوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تُخْزُونِ", transliteration: "tukh'zūni", root: null, meaning: { en: "disgrace me", ur: "disgrace me", ar: "تخزون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "concerning", ur: "concerning", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَيْفِىٓ ۖ", transliteration: "ḍayfī", root: null, meaning: { en: "my guests", ur: "my guests", ar: "ضيفى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَيْسَ", transliteration: "alaysa", root: null, meaning: { en: "Is (there) not", ur: "ہے there نہیں", ar: "أليس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", root: null, meaning: { en: "among you", ur: "among تم", ar: "منكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَجُلٌۭ", transliteration: "rajulun", root: null, meaning: { en: "a man", ur: "a انسان", ar: "رجل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّشِيدٌۭ", transliteration: "rashīdun", root: null, meaning: { en: "right-minded", ur: "right-minded", ar: "رشيد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'نفی + فعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  79: {
    ayahNumber: 79,
    text: "قَالُوا۟ لَقَدْ عَلِمْتَ مَا لَنَا فِى بَنَاتِكَ مِنْ حَقٍّۢ وَإِنَّكَ لَتَعْلَمُ مَا نُرِيدُ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَقَدْ", transliteration: "laqad", root: null, meaning: { en: "Verily", ur: "Verily", ar: "لقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "عَلِمْتَ", transliteration: "ʿalim'ta", root: null, meaning: { en: "you know", ur: "تم جانتے ہو", ar: "علمت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "(that) not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَنَا", transliteration: "lanā", root: null, meaning: { en: "we have", ur: "ہم have", ar: "لنا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "concerning", ur: "concerning", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَنَاتِكَ", transliteration: "banātika", root: null, meaning: { en: "your daughters", ur: "تمہارا daughters", ar: "بناتك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حَقٍّۢ", transliteration: "ḥaqqin", root: "ح ق ق", meaning: { en: "right", ur: "صحیح", ar: "حق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّكَ", transliteration: "wa-innaka", root: null, meaning: { en: "And indeed, you", ur: "اور indeed, تم", ar: "وإنك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَتَعْلَمُ", transliteration: "lataʿlamu", root: null, meaning: { en: "surely know", ur: "یقیناً جانتے ہو", ar: "لتعلم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "نُرِيدُ", transliteration: "nurīdu", root: null, meaning: { en: "we want", ur: "ہم want", ar: "نريد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصول + صلة' }
      ],
    },
  },
  80: {
    ayahNumber: 80,
    text: "قَالَ لَوْ أَنَّ لِى بِكُمْ قُوَّةً أَوْ ءَاوِىٓ إِلَىٰ رُكْنٍۢ شَدِيدٍۢ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَوْ", transliteration: "law", root: null, meaning: { en: "If", ur: "If", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "أَنَّ", transliteration: "anna", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِى", transliteration: "lī", root: null, meaning: { en: "I had", ur: "میں had", ar: "لى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِكُمْ", transliteration: "bikum", root: null, meaning: { en: "over you", ur: "over تم", ar: "بكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قُوَّةً", transliteration: "quwwatan", root: null, meaning: { en: "power", ur: "power", ar: "قوة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", root: null, meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "ءَاوِىٓ", transliteration: "āwī", root: null, meaning: { en: "I could take refuge", ur: "میں could take refuge", ar: "ءاوى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "in", ur: "میں", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رُكْنٍۢ", transliteration: "ruk'nin", root: null, meaning: { en: "a support", ur: "a support", ar: "ركن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَدِيدٍۢ", transliteration: "shadīdin", root: null, meaning: { en: "strong", ur: "مضبوط", ar: "شديد" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  81: {
    ayahNumber: 81,
    text: "قَالُوا۟ يَـٰلُوطُ إِنَّا رُسُلُ رَبِّكَ لَن يَصِلُوٓا۟ إِلَيْكَ ۖ فَأَسْرِ بِأَهْلِكَ بِقِطْعٍۢ مِّنَ ٱلَّيْلِ وَلَا يَلْتَفِتْ مِنكُمْ أَحَدٌ إِلَّا ٱمْرَأَتَكَ ۖ إِنَّهُۥ مُصِيبُهَا مَآ أَصَابَهُمْ ۚ إِنَّ مَوْعِدَهُمُ ٱلصُّبْحُ ۚ أَلَيْسَ ٱلصُّبْحُ بِقَرِيبٍۢ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰلُوطُ", transliteration: "yālūṭu", root: null, meaning: { en: "O Lut", ur: "اے Lut", ar: "يلوط" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "Indeed, we", ur: "Indeed, ہم", ar: "إنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رُسُلُ", transliteration: "rusulu", root: "ر س ل", meaning: { en: "(are) messengers", ur: "رسول", ar: "رسل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "(of) your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَن", transliteration: "lan", root: null, meaning: { en: "never", ur: "never", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَصِلُوٓا۟", transliteration: "yaṣilū", root: null, meaning: { en: "they will reach", ur: "وہ لوگ گا/گے reach", ar: "يصلوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْكَ ۖ", transliteration: "ilayka", root: null, meaning: { en: "you", ur: "تم", ar: "إليك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَسْرِ", transliteration: "fa-asri", root: null, meaning: { en: "So travel", ur: "So travel", ar: "فأسر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِأَهْلِكَ", transliteration: "bi-ahlika", root: null, meaning: { en: "with your family", ur: "کے ساتھ تمہارا family", ar: "بأهلك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِقِطْعٍۢ", transliteration: "biqiṭ'ʿin", root: null, meaning: { en: "in a part", ur: "میں a part", ar: "بقطع" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "of", ur: "of", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّيْلِ", transliteration: "al-layli", root: null, meaning: { en: "the night", ur: "the رات", ar: "ليل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and (let) not", ur: "اور let نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "يَلْتَفِتْ", transliteration: "yaltafit", root: null, meaning: { en: "look back", ur: "look back", ar: "يلتفت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", root: null, meaning: { en: "anyone of you", ur: "anyone of تم", ar: "منكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَحَدٌ", transliteration: "aḥadun", root: null, meaning: { en: "anyone of you", ur: "anyone of تم", ar: "أحد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱمْرَأَتَكَ ۖ", transliteration: "im'ra-ataka", root: null, meaning: { en: "your wife", ur: "تمہارا بیوی", ar: "مرأتك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "Indeed, it", ur: "Indeed, یہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُصِيبُهَا", transliteration: "muṣībuhā", root: null, meaning: { en: "will strike her", ur: "گا/گے strike her", ar: "مصيبها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَآ", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَصَابَهُمْ ۚ", transliteration: "aṣābahum", root: null, meaning: { en: "will strike them", ur: "گا/گے strike انہیں", ar: "أصابهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَوْعِدَهُمُ", transliteration: "mawʿidahumu", root: null, meaning: { en: "their appointed time", ur: "their appointed time", ar: "موعدهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلصُّبْحُ ۚ", transliteration: "l-ṣub'ḥu", root: null, meaning: { en: "(is) morning", ur: "ہے morning", ar: "لصبح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَيْسَ", transliteration: "alaysa", root: null, meaning: { en: "Is not", ur: "ہے نہیں", ar: "أليس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلصُّبْحُ", transliteration: "l-ṣub'ḥu", root: null, meaning: { en: "the morning", ur: "the morning", ar: "لصبح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِقَرِيبٍۢ", transliteration: "biqarībin", root: null, meaning: { en: "near", ur: "near", ar: "بقريب" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'نفی + فعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  82: {
    ayahNumber: 82,
    text: "فَلَمَّا جَآءَ أَمْرُنَا جَعَلْنَا عَـٰلِيَهَا سَافِلَهَا وَأَمْطَرْنَا عَلَيْهَا حِجَارَةًۭ مِّن سِجِّيلٍۢ مَّنضُودٍۢ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", root: null, meaning: { en: "So when", ur: "So when", ar: "فلما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "came", ur: "آیا", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُنَا", transliteration: "amrunā", root: null, meaning: { en: "Our Command", ur: "Our Command", ar: "أمرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "جَعَلْنَا", transliteration: "jaʿalnā", root: null, meaning: { en: "We made", ur: "ہم بنایا", ar: "جعلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَـٰلِيَهَا", transliteration: "ʿāliyahā", root: null, meaning: { en: "its upside", ur: "its upside", ar: "عليها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَافِلَهَا", transliteration: "sāfilahā", root: null, meaning: { en: "its downside", ur: "its downside", ar: "سافلها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَمْطَرْنَا", transliteration: "wa-amṭarnā", root: null, meaning: { en: "and We rained", ur: "اور ہم rained", ar: "وأمطرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", root: null, meaning: { en: "upon them", ur: "upon انہیں", ar: "عليها" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "حِجَارَةًۭ", transliteration: "ḥijāratan", root: null, meaning: { en: "stones", ur: "stones", ar: "حجارة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "of", ur: "of", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سِجِّيلٍۢ", transliteration: "sijjīlin", root: null, meaning: { en: "baked clay", ur: "baked clay", ar: "سجيل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّنضُودٍۢ", transliteration: "manḍūdin", root: null, meaning: { en: "(in) layers", ur: "میں layers", ar: "منضود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    ayahNumber: 83,
    text: "مُّسَوَّمَةً عِندَ رَبِّكَ ۖ وَمَا هِىَ مِنَ ٱلظَّـٰلِمِينَ بِبَعِيدٍۢ",
    words: [
      { arabic: "مُّسَوَّمَةً", transliteration: "musawwamatan", root: null, meaning: { en: "Marked", ur: "Marked", ar: "مسومة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِندَ", transliteration: "ʿinda", root: null, meaning: { en: "from", ur: "سے", ar: "عند" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّكَ ۖ", transliteration: "rabbika", root: null, meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هِىَ", transliteration: "hiya", root: null, meaning: { en: "it", ur: "یہ", ar: "هى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "(is) from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", root: "ظ ل م", meaning: { en: "the wrongdoers", ur: "the wrongdoers", ar: "لظلمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِبَعِيدٍۢ", transliteration: "bibaʿīdin", root: null, meaning: { en: "far", ur: "far", ar: "ببعيد" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  85: {
    ayahNumber: 85,
    text: "وَيَـٰقَوْمِ أَوْفُوا۟ ٱلْمِكْيَالَ وَٱلْمِيزَانَ بِٱلْقِسْطِ ۖ وَلَا تَبْخَسُوا۟ ٱلنَّاسَ أَشْيَآءَهُمْ وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", root: "ق و م", meaning: { en: "And O my people", ur: "اور اے my لوگ", ar: "ويقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْفُوا۟", transliteration: "awfū", root: null, meaning: { en: "Give full", ur: "دو full", ar: "أوفوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمِكْيَالَ", transliteration: "l-mik'yāla", root: null, meaning: { en: "measure", ur: "measure", ar: "لمكيال" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْمِيزَانَ", transliteration: "wal-mīzāna", root: null, meaning: { en: "and weight", ur: "اور weight", ar: "ولميزان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْقِسْطِ ۖ", transliteration: "bil-qis'ṭi", root: null, meaning: { en: "in justice", ur: "میں justice", ar: "بلقسط" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَبْخَسُوا۟", transliteration: "tabkhasū", root: null, meaning: { en: "deprive", ur: "deprive", ar: "تبخسوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", root: null, meaning: { en: "the people", ur: "the لوگ", ar: "لناس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَشْيَآءَهُمْ", transliteration: "ashyāahum", root: null, meaning: { en: "(of) their things", ur: "of their things", ar: "أشياءهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "and (do) not", ur: "اور کرتے ہو نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَعْثَوْا۟", transliteration: "taʿthaw", root: null, meaning: { en: "act wickedly", ur: "act wickedly", ar: "تعثوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُفْسِدِينَ", transliteration: "muf'sidīna", root: "د ي ن", meaning: { en: "spreading corruption", ur: "spreading corruption", ar: "مفسدين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  86: {
    ayahNumber: 86,
    text: "بَقِيَّتُ ٱللَّهِ خَيْرٌۭ لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ ۚ وَمَآ أَنَا۠ عَلَيْكُم بِحَفِيظٍۢ",
    words: [
      { arabic: "بَقِيَّتُ", transliteration: "baqiyyatu", root: null, meaning: { en: "(What) remains", ur: "کیا/جو remains", ar: "بقيت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "(from) Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَيْرٌۭ", transliteration: "khayrun", root: "خ ي ر", meaning: { en: "(is) best", ur: "ہے best", ar: "خير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "کے لیے تم", ar: "لكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُم", transliteration: "kuntum", root: null, meaning: { en: "you are", ur: "تم ہیں", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُّؤْمِنِينَ ۚ", transliteration: "mu'minīna", root: null, meaning: { en: "believers", ur: "مومنوں", ar: "مؤمنين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَا۠", transliteration: "anā", root: null, meaning: { en: "I am", ur: "میں am", ar: "أنا" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عَلَيْكُم", transliteration: "ʿalaykum", root: null, meaning: { en: "over you", ur: "over تم", ar: "عليكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِحَفِيظٍۢ", transliteration: "biḥafīẓin", root: null, meaning: { en: "a guardian", ur: "a guardian", ar: "بحفيظ" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  87: {
    ayahNumber: 87,
    text: "قَالُوا۟ يَـٰشُعَيْبُ أَصَلَوٰتُكَ تَأْمُرُكَ أَن نَّتْرُكَ مَا يَعْبُدُ ءَابَآؤُنَآ أَوْ أَن نَّفْعَلَ فِىٓ أَمْوَٰلِنَا مَا نَشَـٰٓؤُا۟ ۖ إِنَّكَ لَأَنتَ ٱلْحَلِيمُ ٱلرَّشِيدُ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰشُعَيْبُ", transliteration: "yāshuʿaybu", root: null, meaning: { en: "O Shuaib", ur: "اے Shuaib", ar: "يشعيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَصَلَوٰتُكَ", transliteration: "aṣalatuka", root: null, meaning: { en: "Does your prayer", ur: "کرتا ہے تمہارا prayer", ar: "أصلوتك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَأْمُرُكَ", transliteration: "tamuruka", root: null, meaning: { en: "command you", ur: "command تم", ar: "تأمرك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَّتْرُكَ", transliteration: "natruka", root: null, meaning: { en: "we leave", ur: "ہم leave", ar: "نترك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَعْبُدُ", transliteration: "yaʿbudu", root: null, meaning: { en: "worship", ur: "عبادت کرو", ar: "يعبد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَابَآؤُنَآ", transliteration: "ābāunā", root: null, meaning: { en: "our forefathers", ur: "our forefathers", ar: "ءاباؤنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", root: null, meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَّفْعَلَ", transliteration: "nafʿala", root: null, meaning: { en: "we do", ur: "ہم کرتے ہو", ar: "نفعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", root: null, meaning: { en: "concerning", ur: "concerning", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَمْوَٰلِنَا", transliteration: "amwālinā", root: null, meaning: { en: "our wealth", ur: "our مال", ar: "أمولنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "نَشَـٰٓؤُا۟ ۖ", transliteration: "nashāu", root: null, meaning: { en: "we will", ur: "ہم گا/گے", ar: "نشؤا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", root: null, meaning: { en: "Indeed you", ur: "بے شک تم", ar: "إنك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَأَنتَ", transliteration: "la-anta", root: null, meaning: { en: "surely you", ur: "یقیناً تم", ar: "لأنت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَلِيمُ", transliteration: "l-ḥalīmu", root: null, meaning: { en: "(are) the forbearing", ur: "ہیں the forbearing", ar: "لحليم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّشِيدُ", transliteration: "l-rashīdu", root: null, meaning: { en: "the right-minded", ur: "the right-minded", ar: "لرشيد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'موصول + صلة' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  88: {
    ayahNumber: 88,
    text: "قَالَ يَـٰقَوْمِ أَرَءَيْتُمْ إِن كُنتُ عَلَىٰ بَيِّنَةٍۢ مِّن رَّبِّى وَرَزَقَنِى مِنْهُ رِزْقًا حَسَنًۭا ۚ وَمَآ أُرِيدُ أَنْ أُخَالِفَكُمْ إِلَىٰ مَآ أَنْهَىٰكُمْ عَنْهُ ۚ إِنْ أُرِيدُ إِلَّا ٱلْإِصْلَـٰحَ مَا ٱسْتَطَعْتُ ۚ وَمَا تَوْفِيقِىٓ إِلَّا بِٱللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ", ar: "يقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَءَيْتُمْ", transliteration: "ara-aytum", root: null, meaning: { en: "Do you see", ur: "کرتے ہو تم دیکھتے ہو", ar: "أرءيتم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِن", transliteration: "in", root: null, meaning: { en: "if", ur: "if", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُ", transliteration: "kuntu", root: null, meaning: { en: "I am", ur: "میں am", ar: "كنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَيِّنَةٍۢ", transliteration: "bayyinatin", root: null, meaning: { en: "a clear evidence", ur: "a واضح evidence", ar: "بينة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّبِّى", transliteration: "rabbī", root: null, meaning: { en: "my Lord", ur: "میرا رب", ar: "ربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَزَقَنِى", transliteration: "warazaqanī", root: "ر ز ق", meaning: { en: "and He has provided me", ur: "اور وہ has provided me", ar: "ورزقنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُ", transliteration: "min'hu", root: null, meaning: { en: "from Himself", ur: "سے Himself", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رِزْقًا", transliteration: "riz'qan", root: null, meaning: { en: "a good provision", ur: "a اچھا رزق", ar: "رزقا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَسَنًۭا ۚ", transliteration: "ḥasanan", root: "ح س ن", meaning: { en: "a good provision", ur: "a اچھا رزق", ar: "حسنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُرِيدُ", transliteration: "urīdu", root: null, meaning: { en: "I intend", ur: "میں intend", ar: "أريد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنْ", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أُخَالِفَكُمْ", transliteration: "ukhālifakum", root: null, meaning: { en: "I differ from you", ur: "میں differ سے تم", ar: "أخالفكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "in", ur: "میں", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَآ", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنْهَىٰكُمْ", transliteration: "anhākum", root: null, meaning: { en: "I forbid you", ur: "میں forbid تم", ar: "أنهىكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُ ۚ", transliteration: "ʿanhu", root: null, meaning: { en: "from it", ur: "سے یہ", ar: "عنه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِنْ", transliteration: "in", root: null, meaning: { en: "Not", ur: "نہیں", ar: "إن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُرِيدُ", transliteration: "urīdu", root: null, meaning: { en: "I intend", ur: "میں intend", ar: "أريد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْإِصْلَـٰحَ", transliteration: "l-iṣ'lāḥa", root: null, meaning: { en: "the reform", ur: "the reform", ar: "لإصلح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "as much as I am able", ur: "as much as میں am able", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتَطَعْتُ ۚ", transliteration: "is'taṭaʿtu", root: null, meaning: { en: "as much as I am able", ur: "as much as میں am able", ar: "ستطعت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَوْفِيقِىٓ", transliteration: "tawfīqī", root: null, meaning: { en: "(is) my success", ur: "ہے my success", ar: "توفيقى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱللَّهِ ۚ", transliteration: "bil-lahi", root: null, meaning: { en: "with Allah", ur: "کے ساتھ اللہ", ar: "بلله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", root: null, meaning: { en: "Upon Him", ur: "Upon اس", ar: "عليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "تَوَكَّلْتُ", transliteration: "tawakkaltu", root: null, meaning: { en: "I trust", ur: "میں trust", ar: "توكلت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", root: null, meaning: { en: "and to Him", ur: "اور طرف اس", ar: "وإليه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُنِيبُ", transliteration: "unību", root: null, meaning: { en: "I turn", ur: "میں turn", ar: "أنيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 29, to: 30, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    ayahNumber: 89,
    text: "وَيَـٰقَوْمِ لَا يَجْرِمَنَّكُمْ شِقَاقِىٓ أَن يُصِيبَكُم مِّثْلُ مَآ أَصَابَ قَوْمَ نُوحٍ أَوْ قَوْمَ هُودٍ أَوْ قَوْمَ صَـٰلِحٍۢ ۚ وَمَا قَوْمُ لُوطٍۢ مِّنكُم بِبَعِيدٍۢ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", root: "ق و م", meaning: { en: "And O my people", ur: "اور اے my لوگ", ar: "ويقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "(Let) not cause you to sin", ur: "Let نہیں cause تم طرف sin", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَجْرِمَنَّكُمْ", transliteration: "yajrimannakum", root: null, meaning: { en: "(Let) not cause you to sin", ur: "Let نہیں cause تم طرف sin", ar: "يجرمنكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شِقَاقِىٓ", transliteration: "shiqāqī", root: null, meaning: { en: "my dissension", ur: "my dissension", ar: "شقاقى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "lest", ur: "lest", ar: "أن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُصِيبَكُم", transliteration: "yuṣībakum", root: null, meaning: { en: "befalls you", ur: "befalls تم", ar: "يصيبكم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّثْلُ", transliteration: "mith'lu", root: null, meaning: { en: "similar", ur: "similar", ar: "مثل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآ", transliteration: "mā", root: null, meaning: { en: "(to) what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَصَابَ", transliteration: "aṣāba", root: null, meaning: { en: "befell", ur: "befell", ar: "أصاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَوْمَ", transliteration: "qawma", root: "ق و م", meaning: { en: "(the) people of Nuh", ur: "the لوگ of Nuh", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُوحٍ", transliteration: "nūḥin", root: null, meaning: { en: "(the) people of Nuh", ur: "the لوگ of Nuh", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", root: null, meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "قَوْمَ", transliteration: "qawma", root: "ق و م", meaning: { en: "(the) people of Hud", ur: "the لوگ of Hud", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُودٍ", transliteration: "hūdin", root: null, meaning: { en: "(the) people of Hud", ur: "the لوگ of Hud", ar: "هود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", root: null, meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "قَوْمَ", transliteration: "qawma", root: "ق و م", meaning: { en: "people of Salih", ur: "لوگ of Salih", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَـٰلِحٍۢ ۚ", transliteration: "ṣāliḥin", root: null, meaning: { en: "people of Salih", ur: "لوگ of Salih", ar: "صلح" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمُ", transliteration: "qawmu", root: "ق و م", meaning: { en: "(are the) people of Lut", ur: "ہیں the لوگ of Lut", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لُوطٍۢ", transliteration: "lūṭin", root: null, meaning: { en: "(are the) people of Lut", ur: "ہیں the لوگ of Lut", ar: "لوط" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنكُم", transliteration: "minkum", root: null, meaning: { en: "from you", ur: "سے تم", ar: "منكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِبَعِيدٍۢ", transliteration: "bibaʿīdin", root: null, meaning: { en: "far off", ur: "far off", ar: "ببعيد" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  90: {
    ayahNumber: 90,
    text: "وَٱسْتَغْفِرُوا۟ رَبَّكُمْ ثُمَّ تُوبُوٓا۟ إِلَيْهِ ۚ إِنَّ رَبِّى رَحِيمٌۭ وَدُودٌۭ",
    words: [
      { arabic: "وَٱسْتَغْفِرُوا۟", transliteration: "wa-is'taghfirū", root: null, meaning: { en: "And ask forgiveness", ur: "اور ask مغفرت", ar: "وستغفروا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبَّكُمْ", transliteration: "rabbakum", root: "ر ب ب", meaning: { en: "(of) your Lord", ur: "تمہارا رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُوبُوٓا۟", transliteration: "tūbū", root: "ت و ب", meaning: { en: "turn in repentance", ur: "turn میں repentance", ar: "توبوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "إِلَيْهِ ۚ", transliteration: "ilayhi", root: null, meaning: { en: "to Him", ur: "طرف اس", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّى", transliteration: "rabbī", root: null, meaning: { en: "my Lord", ur: "میرا رب", ar: "ربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَحِيمٌۭ", transliteration: "raḥīmun", root: "ر ح م", meaning: { en: "(is) Most Merciful", ur: "نہایت مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَدُودٌۭ", transliteration: "wadūdun", root: null, meaning: { en: "Most Loving", ur: "Most Loving", ar: "ودود" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  91: {
    ayahNumber: 91,
    text: "قَالُوا۟ يَـٰشُعَيْبُ مَا نَفْقَهُ كَثِيرًۭا مِّمَّا تَقُولُ وَإِنَّا لَنَرَىٰكَ فِينَا ضَعِيفًۭا ۖ وَلَوْلَا رَهْطُكَ لَرَجَمْنَـٰكَ ۖ وَمَآ أَنتَ عَلَيْنَا بِعَزِيزٍۢ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰشُعَيْبُ", transliteration: "yāshuʿaybu", root: null, meaning: { en: "O Shuaib", ur: "اے Shuaib", ar: "يشعيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "نَفْقَهُ", transliteration: "nafqahu", root: null, meaning: { en: "we understand", ur: "ہم understand", ar: "نفقه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَثِيرًۭا", transliteration: "kathīran", root: null, meaning: { en: "much", ur: "much", ar: "كثيرا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", root: null, meaning: { en: "of what", ur: "of کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَقُولُ", transliteration: "taqūlu", root: null, meaning: { en: "you say", ur: "تم کہو", ar: "تقول" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِنَّا", transliteration: "wa-innā", root: null, meaning: { en: "and indeed, we", ur: "اور indeed, ہم", ar: "وإنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَنَرَىٰكَ", transliteration: "lanarāka", root: null, meaning: { en: "surely [we] see you", ur: "یقیناً [we] دیکھتے ہو تم", ar: "لنرىك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِينَا", transliteration: "fīnā", root: null, meaning: { en: "among us", ur: "among us", ar: "فينا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَعِيفًۭا ۖ", transliteration: "ḍaʿīfan", root: null, meaning: { en: "weak", ur: "weak", ar: "ضعيفا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَوْلَا", transliteration: "walawlā", root: null, meaning: { en: "And if not", ur: "اور if نہیں", ar: "ولولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَهْطُكَ", transliteration: "rahṭuka", root: null, meaning: { en: "for your family", ur: "کے لیے تمہارا family", ar: "رهطك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَرَجَمْنَـٰكَ ۖ", transliteration: "larajamnāka", root: null, meaning: { en: "surely we would have stoned you", ur: "یقیناً ہم would have stoned تم", ar: "لرجمنك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَآ", transliteration: "wamā", root: null, meaning: { en: "and you are not", ur: "اور تم ہیں نہیں", ar: "وما" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنتَ", transliteration: "anta", root: null, meaning: { en: "and you are not", ur: "اور تم ہیں نہیں", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", root: null, meaning: { en: "against us", ur: "against us", ar: "علينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِعَزِيزٍۢ", transliteration: "biʿazīzin", root: null, meaning: { en: "mighty", ur: "زبردست", ar: "بعزيز" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  92: {
    ayahNumber: 92,
    text: "قَالَ يَـٰقَوْمِ أَرَهْطِىٓ أَعَزُّ عَلَيْكُم مِّنَ ٱللَّهِ وَٱتَّخَذْتُمُوهُ وَرَآءَكُمْ ظِهْرِيًّا ۖ إِنَّ رَبِّى بِمَا تَعْمَلُونَ مُحِيطٌۭ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ", ar: "يقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَهْطِىٓ", transliteration: "arahṭī", root: null, meaning: { en: "Is my family", ur: "ہے my family", ar: "أرهطى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَعَزُّ", transliteration: "aʿazzu", root: null, meaning: { en: "mightier", ur: "mightier", ar: "أعز" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكُم", transliteration: "ʿalaykum", root: null, meaning: { en: "on you", ur: "پر تم", ar: "عليكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "than", ur: "than", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱتَّخَذْتُمُوهُ", transliteration: "wa-ittakhadhtumūhu", root: null, meaning: { en: "And you have taken Him", ur: "اور تم have taken اس", ar: "وتخذتموه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَرَآءَكُمْ", transliteration: "warāakum", root: null, meaning: { en: "behind your", ur: "behind تمہارا", ar: "وراءكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظِهْرِيًّا ۖ", transliteration: "ẓih'riyyan", root: null, meaning: { en: "backs", ur: "backs", ar: "ظهريا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّى", transliteration: "rabbī", root: null, meaning: { en: "my Lord", ur: "میرا رب", ar: "ربى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", root: null, meaning: { en: "of what", ur: "of کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", root: null, meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُحِيطٌۭ", transliteration: "muḥīṭun", root: null, meaning: { en: "(is) All-Encompassing", ur: "ہے All-Encompassing", ar: "محيط" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  93: {
    ayahNumber: 93,
    text: "وَيَـٰقَوْمِ ٱعْمَلُوا۟ عَلَىٰ مَكَانَتِكُمْ إِنِّى عَـٰمِلٌۭ ۖ سَوْفَ تَعْلَمُونَ مَن يَأْتِيهِ عَذَابٌۭ يُخْزِيهِ وَمَنْ هُوَ كَـٰذِبٌۭ ۖ وَٱرْتَقِبُوٓا۟ إِنِّى مَعَكُمْ رَقِيبٌۭ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", root: "ق و م", meaning: { en: "And O my people", ur: "اور اے my لوگ", ar: "ويقوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱعْمَلُوا۟", transliteration: "iʿ'malū", root: null, meaning: { en: "Work", ur: "Work", ar: "عملوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "(according) to", ur: "طرف", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَكَانَتِكُمْ", transliteration: "makānatikum", root: null, meaning: { en: "your position", ur: "تمہارا position", ar: "مكانتكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّى", transliteration: "innī", root: null, meaning: { en: "indeed, I am", ur: "indeed, میں am", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَـٰمِلٌۭ ۖ", transliteration: "ʿāmilun", root: null, meaning: { en: "working", ur: "working", ar: "عمل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَوْفَ", transliteration: "sawfa", root: null, meaning: { en: "Soon", ur: "Soon", ar: "سوف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", root: "ع ل م", meaning: { en: "you will know", ur: "تم گا/گے جانتے ہو", ar: "تعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "(on) whom", ur: "پر whom", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَأْتِيهِ", transliteration: "yatīhi", root: null, meaning: { en: "will come", ur: "گا/گے آؤ", ar: "يأتيه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُخْزِيهِ", transliteration: "yukh'zīhi", root: null, meaning: { en: "(that will) disgrace him", ur: "کہ/وہ گا/گے disgrace اسے", ar: "يخزيه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَنْ", transliteration: "waman", root: null, meaning: { en: "and who", ur: "اور جو", ar: "ومن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", root: null, meaning: { en: "[he]", ur: "[he]", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "كَـٰذِبٌۭ ۖ", transliteration: "kādhibun", root: null, meaning: { en: "(is) a liar", ur: "ہے a liar", ar: "كذب" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَٱرْتَقِبُوٓا۟", transliteration: "wa-ir'taqibū", root: null, meaning: { en: "And watch", ur: "اور watch", ar: "ورتقبوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّى", transliteration: "innī", root: null, meaning: { en: "indeed, I am", ur: "indeed, میں am", ar: "إنى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَعَكُمْ", transliteration: "maʿakum", root: null, meaning: { en: "with you", ur: "کے ساتھ تم", ar: "معكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَقِيبٌۭ", transliteration: "raqībun", root: null, meaning: { en: "a watcher", ur: "a watcher", ar: "رقيب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  94: {
    ayahNumber: 94,
    text: "وَلَمَّا جَآءَ أَمْرُنَا نَجَّيْنَا شُعَيْبًۭا وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ بِرَحْمَةٍۢ مِّنَّا وَأَخَذَتِ ٱلَّذِينَ ظَلَمُوا۟ ٱلصَّيْحَةُ فَأَصْبَحُوا۟ فِى دِيَـٰرِهِمْ جَـٰثِمِينَ",
    words: [
      { arabic: "وَلَمَّا", transliteration: "walammā", root: null, meaning: { en: "And when", ur: "اور when", ar: "ولما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "came", ur: "آیا", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُنَا", transliteration: "amrunā", root: null, meaning: { en: "Our Command", ur: "Our Command", ar: "أمرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَجَّيْنَا", transliteration: "najjaynā", root: null, meaning: { en: "We saved", ur: "ہم saved", ar: "نجينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شُعَيْبًۭا", transliteration: "shuʿayban", root: null, meaning: { en: "Shuaib", ur: "Shuaib", ar: "شعيبا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "and those who", ur: "اور those جو", ar: "ولذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", root: null, meaning: { en: "believed", ur: "ایمان لائے", ar: "ءامنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَعَهُۥ", transliteration: "maʿahu", root: null, meaning: { en: "with him", ur: "کے ساتھ اسے", ar: "معه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بِرَحْمَةٍۢ", transliteration: "biraḥmatin", root: "ر ح م", meaning: { en: "by a Mercy", ur: "by a رحمت", ar: "برحمة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِّنَّا", transliteration: "minnā", root: null, meaning: { en: "from Us", ur: "سے Us", ar: "منا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَخَذَتِ", transliteration: "wa-akhadhati", root: null, meaning: { en: "And seized", ur: "اور seized", ar: "وأخذت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", root: null, meaning: { en: "wronged", ur: "wronged", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلصَّيْحَةُ", transliteration: "l-ṣayḥatu", root: null, meaning: { en: "the thunderous blast", ur: "the thunderous blast", ar: "لصيحة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَصْبَحُوا۟", transliteration: "fa-aṣbaḥū", root: null, meaning: { en: "then they became", ur: "پھر وہ لوگ became", ar: "فأصبحوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دِيَـٰرِهِمْ", transliteration: "diyārihim", root: null, meaning: { en: "their homes", ur: "their گھر", ar: "ديرهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَـٰثِمِينَ", transliteration: "jāthimīna", root: null, meaning: { en: "fallen prone", ur: "fallen prone", ar: "جثمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  95: {
    ayahNumber: 95,
    text: "كَأَن لَّمْ يَغْنَوْا۟ فِيهَآ ۗ أَلَا بُعْدًۭا لِّمَدْيَنَ كَمَا بَعِدَتْ ثَمُودُ",
    words: [
      { arabic: "كَأَن", transliteration: "ka-an", root: null, meaning: { en: "As if", ur: "As if", ar: "كأن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "لَّمْ", transliteration: "lam", root: null, meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَغْنَوْا۟", transliteration: "yaghnaw", root: null, meaning: { en: "they (had) prospered", ur: "وہ لوگ had prospered", ar: "يغنوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَآ ۗ", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَلَا", transliteration: "alā", root: null, meaning: { en: "So", ur: "So", ar: "ألا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بُعْدًۭا", transliteration: "buʿ'dan", root: null, meaning: { en: "away", ur: "away", ar: "بعدا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّمَدْيَنَ", transliteration: "limadyana", root: null, meaning: { en: "with Madyan", ur: "کے ساتھ Madyan", ar: "لمدين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَمَا", transliteration: "kamā", root: null, meaning: { en: "as", ur: "as", ar: "كما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعِدَتْ", transliteration: "baʿidat", root: null, meaning: { en: "was taken away", ur: "تھا taken away", ar: "بعدت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثَمُودُ", transliteration: "thamūdu", root: null, meaning: { en: "the Thamud", ur: "the Thamud", ar: "ثمود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  96: {
    ayahNumber: 96,
    text: "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِـَٔايَـٰتِنَا وَسُلْطَـٰنٍۢ مُّبِينٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", root: null, meaning: { en: "And certainly", ur: "اور یقیناً", ar: "ولقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", root: null, meaning: { en: "We sent", ur: "ہم بھیجا", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُوسَىٰ", transliteration: "mūsā", root: null, meaning: { en: "Musa", ur: "Musa", ar: "موسى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", root: null, meaning: { en: "with Our Signs", ur: "کے ساتھ Our نشانیاں", ar: "بايتنا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَسُلْطَـٰنٍۢ", transliteration: "wasul'ṭānin", root: null, meaning: { en: "and an authority", ur: "اور an authority", ar: "وسلطن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٍ", transliteration: "mubīnin", root: null, meaning: { en: "clear", ur: "واضح", ar: "مبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  97: {
    ayahNumber: 97,
    text: "إِلَىٰ فِرْعَوْنَ وَمَلَإِي۟هِۦ فَٱتَّبَعُوٓا۟ أَمْرَ فِرْعَوْنَ ۖ وَمَآ أَمْرُ فِرْعَوْنَ بِرَشِيدٍۢ",
    words: [
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "To", ur: "طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", root: null, meaning: { en: "Firaun", ur: "Firaun", ar: "فرعون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَلَإِي۟هِۦ", transliteration: "wamala-ihi", root: null, meaning: { en: "and his chiefs", ur: "اور his chiefs", ar: "وملإيه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱتَّبَعُوٓا۟", transliteration: "fa-ittabaʿū", root: null, meaning: { en: "but they followed", ur: "لیکن وہ لوگ followed", ar: "فتبعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرَ", transliteration: "amra", root: null, meaning: { en: "(the) command of Firaun", ur: "the command of Firaun", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِرْعَوْنَ ۖ", transliteration: "fir'ʿawna", root: null, meaning: { en: "(the) command of Firaun", ur: "the command of Firaun", ar: "فرعون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْرُ", transliteration: "amru", root: null, meaning: { en: "(the) command of Firaun", ur: "the command of Firaun", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", root: null, meaning: { en: "(the) command of Firaun", ur: "the command of Firaun", ar: "فرعون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِرَشِيدٍۢ", transliteration: "birashīdin", root: null, meaning: { en: "was right", ur: "تھا صحیح", ar: "برشيد" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  98: {
    ayahNumber: 98,
    text: "يَقْدُمُ قَوْمَهُۥ يَوْمَ ٱلْقِيَـٰمَةِ فَأَوْرَدَهُمُ ٱلنَّارَ ۖ وَبِئْسَ ٱلْوِرْدُ ٱلْمَوْرُودُ",
    words: [
      { arabic: "يَقْدُمُ", transliteration: "yaqdumu", root: null, meaning: { en: "He will precede", ur: "وہ گا/گے precede", ar: "يقدم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَوْمَهُۥ", transliteration: "qawmahu", root: "ق و م", meaning: { en: "his people", ur: "his لوگ", ar: "قومه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(on the) Day", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", root: null, meaning: { en: "(of) the Resurrection", ur: "of the Resurrection", ar: "لقيمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَوْرَدَهُمُ", transliteration: "fa-awradahumu", root: null, meaning: { en: "and lead them", ur: "اور lead انہیں", ar: "فأوردهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلنَّارَ ۖ", transliteration: "l-nāra", root: "ن و ر", meaning: { en: "(into) the Fire", ur: "آگ", ar: "لنار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبِئْسَ", transliteration: "wabi'sa", root: null, meaning: { en: "And wretched", ur: "اور wretched", ar: "وبئس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْوِرْدُ", transliteration: "l-wir'du", root: null, meaning: { en: "(is) the place", ur: "ہے the place", ar: "لورد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَوْرُودُ", transliteration: "l-mawrūdu", root: null, meaning: { en: "to which (they are) led", ur: "طرف جو وہ لوگ ہیں led", ar: "لمورود" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  99: {
    ayahNumber: 99,
    text: "وَأُتْبِعُوا۟ فِى هَـٰذِهِۦ لَعْنَةًۭ وَيَوْمَ ٱلْقِيَـٰمَةِ ۚ بِئْسَ ٱلرِّفْدُ ٱلْمَرْفُودُ",
    words: [
      { arabic: "وَأُتْبِعُوا۟", transliteration: "wa-ut'biʿū", root: null, meaning: { en: "And they were followed", ur: "اور وہ لوگ تھے followed", ar: "وأتبعوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", root: null, meaning: { en: "this", ur: "یہ", ar: "هذه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَعْنَةًۭ", transliteration: "laʿnatan", root: null, meaning: { en: "(by) a curse", ur: "by a curse", ar: "لعنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَوْمَ", transliteration: "wayawma", root: "ي و م", meaning: { en: "and (on the) Day", ur: "اور پر the دن", ar: "ويوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقِيَـٰمَةِ ۚ", transliteration: "l-qiyāmati", root: null, meaning: { en: "(of) the Resurrection", ur: "of the Resurrection", ar: "لقيمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِئْسَ", transliteration: "bi'sa", root: null, meaning: { en: "Wretched", ur: "Wretched", ar: "بئس" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلرِّفْدُ", transliteration: "l-rif'du", root: null, meaning: { en: "(is) the gift", ur: "ہے the gift", ar: "لرفد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَرْفُودُ", transliteration: "l-marfūdu", root: null, meaning: { en: "which (will) be given", ur: "جو گا/گے be given", ar: "لمرفود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  100: {
    ayahNumber: 100,
    text: "ذَٰلِكَ مِنْ أَنۢبَآءِ ٱلْقُرَىٰ نَقُصُّهُۥ عَلَيْكَ ۖ مِنْهَا قَآئِمٌۭ وَحَصِيدٌۭ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "That", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "(is) from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَنۢبَآءِ", transliteration: "anbāi", root: null, meaning: { en: "(the) news", ur: "the news", ar: "أنباء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقُرَىٰ", transliteration: "l-qurā", root: null, meaning: { en: "(of) the cities", ur: "of the cities", ar: "لقرى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَقُصُّهُۥ", transliteration: "naquṣṣuhu", root: null, meaning: { en: "(which) We relate", ur: "جو ہم relate", ar: "نقصه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكَ ۖ", transliteration: "ʿalayka", root: null, meaning: { en: "to you", ur: "طرف تم", ar: "عليك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهَا", transliteration: "min'hā", root: null, meaning: { en: "of them", ur: "of انہیں", ar: "منها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَآئِمٌۭ", transliteration: "qāimun", root: null, meaning: { en: "some are standing", ur: "some ہیں standing", ar: "قائم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَحَصِيدٌۭ", transliteration: "waḥaṣīdun", root: null, meaning: { en: "and (some) mown", ur: "اور some mown", ar: "وحصيد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  101: {
    ayahNumber: 101,
    text: "وَمَا ظَلَمْنَـٰهُمْ وَلَـٰكِن ظَلَمُوٓا۟ أَنفُسَهُمْ ۖ فَمَآ أَغْنَتْ عَنْهُمْ ءَالِهَتُهُمُ ٱلَّتِى يَدْعُونَ مِن دُونِ ٱللَّهِ مِن شَىْءٍۢ لَّمَّا جَآءَ أَمْرُ رَبِّكَ ۖ وَمَا زَادُوهُمْ غَيْرَ تَتْبِيبٍۢ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَلَمْنَـٰهُمْ", transliteration: "ẓalamnāhum", root: null, meaning: { en: "We wronged them", ur: "ہم wronged انہیں", ar: "ظلمنهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَـٰكِن", transliteration: "walākin", root: null, meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَلَمُوٓا۟", transliteration: "ẓalamū", root: null, meaning: { en: "they wronged", ur: "وہ لوگ wronged", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنفُسَهُمْ ۖ", transliteration: "anfusahum", root: "ن ف س", meaning: { en: "themselves", ur: "themselves", ar: "أنفسهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَمَآ", transliteration: "famā", root: null, meaning: { en: "So not", ur: "So نہیں", ar: "فما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَغْنَتْ", transliteration: "aghnat", root: null, meaning: { en: "availed", ur: "availed", ar: "أغنت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", root: null, meaning: { en: "them", ur: "انہیں", ar: "عنهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ءَالِهَتُهُمُ", transliteration: "ālihatuhumu", root: null, meaning: { en: "their gods", ur: "their gods", ar: "ءالهتهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّتِى", transliteration: "allatī", root: null, meaning: { en: "which", ur: "جو", ar: "لتى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَدْعُونَ", transliteration: "yadʿūna", root: null, meaning: { en: "they invoked", ur: "وہ لوگ invoked", ar: "يدعون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "other than Allah", ur: "other than اللہ", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", root: null, meaning: { en: "other than Allah", ur: "other than اللہ", ar: "دون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", root: "أ ل ه", meaning: { en: "other than Allah", ur: "other than اللہ", ar: "لله" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "any", ur: "any", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", root: null, meaning: { en: "thing", ur: "thing", ar: "شىء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّمَّا", transliteration: "lammā", root: null, meaning: { en: "when", ur: "when", ar: "لما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", root: null, meaning: { en: "came", ur: "آیا", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرُ", transliteration: "amru", root: null, meaning: { en: "(the) command (of) your Lord", ur: "the command of تمہارا رب", ar: "أمر" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّكَ ۖ", transliteration: "rabbika", root: null, meaning: { en: "(the) command (of) your Lord", ur: "the command of تمہارا رب", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "زَادُوهُمْ", transliteration: "zādūhum", root: null, meaning: { en: "they increased them", ur: "وہ لوگ increased انہیں", ar: "زادوهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", root: null, meaning: { en: "other than", ur: "other than", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَتْبِيبٍۢ", transliteration: "tatbībin", root: null, meaning: { en: "ruin", ur: "ruin", ar: "تتبيب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  102: {
    ayahNumber: 102,
    text: "وَكَذَٰلِكَ أَخْذُ رَبِّكَ إِذَآ أَخَذَ ٱلْقُرَىٰ وَهِىَ ظَـٰلِمَةٌ ۚ إِنَّ أَخْذَهُۥٓ أَلِيمٌۭ شَدِيدٌ",
    words: [
      { arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", root: null, meaning: { en: "And thus", ur: "اور thus", ar: "وكذلك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخْذُ", transliteration: "akhdhu", root: null, meaning: { en: "(is) the seizure (of) your Lord", ur: "ہے the seizure of تمہارا رب", ar: "أخذ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "(is) the seizure (of) your Lord", ur: "ہے the seizure of تمہارا رب", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِذَآ", transliteration: "idhā", root: null, meaning: { en: "when", ur: "when", ar: "إذا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخَذَ", transliteration: "akhadha", root: null, meaning: { en: "He seizes", ur: "وہ seizes", ar: "أخذ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقُرَىٰ", transliteration: "l-qurā", root: null, meaning: { en: "the cities", ur: "the cities", ar: "لقرى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهِىَ", transliteration: "wahiya", root: null, meaning: { en: "while they", ur: "while وہ لوگ", ar: "وهى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَـٰلِمَةٌ ۚ", transliteration: "ẓālimatun", root: null, meaning: { en: "(are) doing wrong", ur: "ہیں doing wrong", ar: "ظلمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَخْذَهُۥٓ", transliteration: "akhdhahu", root: null, meaning: { en: "His seizure", ur: "His seizure", ar: "أخذه" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَلِيمٌۭ", transliteration: "alīmun", root: null, meaning: { en: "(is) painful", ur: "ہے painful", ar: "أليم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شَدِيدٌ", transliteration: "shadīdun", root: null, meaning: { en: "(and) severe", ur: "اور severe", ar: "شديد" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  103: {
    ayahNumber: 103,
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ لِّمَنْ خَافَ عَذَابَ ٱلْـَٔاخِرَةِ ۚ ذَٰلِكَ يَوْمٌۭ مَّجْمُوعٌۭ لَّهُ ٱلنَّاسُ وَذَٰلِكَ يَوْمٌۭ مَّشْهُودٌۭ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "that", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَةًۭ", transliteration: "laāyatan", root: null, meaning: { en: "(is) surely a Sign", ur: "ہے یقیناً a نشانی", ar: "لاية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّمَنْ", transliteration: "liman", root: null, meaning: { en: "for (those) who", ur: "کے لیے those جو", ar: "لمن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَافَ", transliteration: "khāfa", root: null, meaning: { en: "fear", ur: "ڈرو", ar: "خاف" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", root: "ع ذ ب", meaning: { en: "(the) punishment", ur: "عذاب", ar: "عذاب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْـَٔاخِرَةِ ۚ", transliteration: "l-ākhirati", root: "أ خ ر", meaning: { en: "(of) the Hereafter", ur: "of the Hereafter", ar: "لاخرة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "That", ur: "کہ/وہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "يَوْمٌۭ", transliteration: "yawmun", root: "ي و م", meaning: { en: "(is) a Day", ur: "ہے a دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّجْمُوعٌۭ", transliteration: "majmūʿun", root: null, meaning: { en: "(will) be gathered", ur: "گا/گے be gathered", ar: "مجموع" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّهُ", transliteration: "lahu", root: null, meaning: { en: "on it", ur: "پر یہ", ar: "له" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", root: null, meaning: { en: "the mankind", ur: "the mankind", ar: "لناس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَذَٰلِكَ", transliteration: "wadhālika", root: null, meaning: { en: "and that", ur: "اور کہ/وہ", ar: "وذلك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمٌۭ", transliteration: "yawmun", root: "ي و م", meaning: { en: "(is) a Day", ur: "ہے a دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّشْهُودٌۭ", transliteration: "mashhūdun", root: null, meaning: { en: "witnessed", ur: "witnessed", ar: "مشهود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  104: {
    ayahNumber: 104,
    text: "وَمَا نُؤَخِّرُهُۥٓ إِلَّا لِأَجَلٍۢ مَّعْدُودٍۢ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُؤَخِّرُهُۥٓ", transliteration: "nu-akhiruhu", root: null, meaning: { en: "We delay it", ur: "ہم delay یہ", ar: "نؤخره" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِأَجَلٍۢ", transliteration: "li-ajalin", root: null, meaning: { en: "for a term", ur: "کے لیے a term", ar: "لأجل" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّعْدُودٍۢ", transliteration: "maʿdūdin", root: null, meaning: { en: "limited", ur: "limited", ar: "معدود" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  105: {
    ayahNumber: 105,
    text: "يَوْمَ يَأْتِ لَا تَكَلَّمُ نَفْسٌ إِلَّا بِإِذْنِهِۦ ۚ فَمِنْهُمْ شَقِىٌّۭ وَسَعِيدٌۭ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "(The) Day", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْتِ", transliteration: "yati", root: null, meaning: { en: "(it) comes", ur: "آتا ہے", ar: "يأت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَكَلَّمُ", transliteration: "takallamu", root: null, meaning: { en: "will speak", ur: "گا/گے speak", ar: "تكلم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَفْسٌ", transliteration: "nafsun", root: "ن ف س", meaning: { en: "a soul", ur: "a جان", ar: "نفس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِإِذْنِهِۦ ۚ", transliteration: "bi-idh'nihi", root: null, meaning: { en: "by His leave", ur: "by His leave", ar: "بإذنه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَمِنْهُمْ", transliteration: "famin'hum", root: null, meaning: { en: "Then among them", ur: "پھر among انہیں", ar: "فمنهم" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "شَقِىٌّۭ", transliteration: "shaqiyyun", root: null, meaning: { en: "(will be the) wretched", ur: "گا/گے be the wretched", ar: "شقى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَسَعِيدٌۭ", transliteration: "wasaʿīdun", root: null, meaning: { en: "and (the) glad", ur: "اور the glad", ar: "وسعيد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  106: {
    ayahNumber: 106,
    text: "فَأَمَّا ٱلَّذِينَ شَقُوا۟ فَفِى ٱلنَّارِ لَهُمْ فِيهَا زَفِيرٌۭ وَشَهِيقٌ",
    words: [
      { arabic: "فَأَمَّا", transliteration: "fa-ammā", root: null, meaning: { en: "As for", ur: "As کے لیے", ar: "فأما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شَقُوا۟", transliteration: "shaqū", root: null, meaning: { en: "were wretched", ur: "تھے wretched", ar: "شقوا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَفِى", transliteration: "fafī", root: null, meaning: { en: "then (they will be) in", ur: "پھر وہ لوگ گا/گے be میں", ar: "ففى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", root: "ن و ر", meaning: { en: "the Fire", ur: "آگ", ar: "لنار" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", root: null, meaning: { en: "For them", ur: "کے لیے انہیں", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "زَفِيرٌۭ", transliteration: "zafīrun", root: null, meaning: { en: "(is) sighing", ur: "ہے sighing", ar: "زفير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَشَهِيقٌ", transliteration: "washahīqun", root: null, meaning: { en: "and wailing", ur: "اور wailing", ar: "وشهيق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  107: {
    ayahNumber: 107,
    text: "خَـٰلِدِينَ فِيهَا مَا دَامَتِ ٱلسَّمَـٰوَٰتُ وَٱلْأَرْضُ إِلَّا مَا شَآءَ رَبُّكَ ۚ إِنَّ رَبَّكَ فَعَّالٌۭ لِّمَا يُرِيدُ",
    words: [
      { arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", root: "د ي ن", meaning: { en: "(Will be) abiding", ur: "گا/گے be abiding", ar: "خلدين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "as long as remain", ur: "as long as remain", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَامَتِ", transliteration: "dāmati", root: null, meaning: { en: "as long as remain", ur: "as long as remain", ar: "دامت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتُ", transliteration: "l-samāwātu", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں", ar: "لسموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضُ", transliteration: "wal-arḍu", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور the زمین", ar: "ولأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what your Lord wills", ur: "کیا/جو تمہارا رب wills", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "شَآءَ", transliteration: "shāa", root: null, meaning: { en: "what your Lord wills", ur: "کیا/جو تمہارا رب wills", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبُّكَ ۚ", transliteration: "rabbuka", root: null, meaning: { en: "what your Lord wills", ur: "کیا/جو تمہارا رب wills", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَعَّالٌۭ", transliteration: "faʿʿālun", root: null, meaning: { en: "(is) All-Accomplisher", ur: "ہے All-Accomplisher", ar: "فعال" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "لِّمَا", transliteration: "limā", root: null, meaning: { en: "of what", ur: "of کیا/جو", ar: "لما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُرِيدُ", transliteration: "yurīdu", root: null, meaning: { en: "He intends", ur: "وہ intends", ar: "يريد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  108: {
    ayahNumber: 108,
    text: "۞ وَأَمَّا ٱلَّذِينَ سُعِدُوا۟ فَفِى ٱلْجَنَّةِ خَـٰلِدِينَ فِيهَا مَا دَامَتِ ٱلسَّمَـٰوَٰتُ وَٱلْأَرْضُ إِلَّا مَا شَآءَ رَبُّكَ ۖ عَطَآءً غَيْرَ مَجْذُوذٍۢ",
    words: [
      { arabic: "۞ وَأَمَّا", transliteration: "wa-ammā", root: null, meaning: { en: "And as for", ur: "اور as کے لیے", ar: "۞ وأما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سُعِدُوا۟", transliteration: "suʿidū", root: null, meaning: { en: "were glad", ur: "تھے glad", ar: "سعدوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَفِى", transliteration: "fafī", root: null, meaning: { en: "then (they will be) in", ur: "پھر وہ لوگ گا/گے be میں", ar: "ففى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْجَنَّةِ", transliteration: "l-janati", root: null, meaning: { en: "Paradise", ur: "جنت", ar: "لجنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", root: "د ي ن", meaning: { en: "(will be) abiding", ur: "گا/گے be abiding", ar: "خلدين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "therein", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "as long as remains", ur: "as long as remains", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَامَتِ", transliteration: "dāmati", root: null, meaning: { en: "as long as remains", ur: "as long as remains", ar: "دامت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتُ", transliteration: "l-samāwātu", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں", ar: "لسموت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضُ", transliteration: "wal-arḍu", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور the زمین", ar: "ولأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what your Lord wills ", ur: "کیا/جو تمہارا رب wills", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "شَآءَ", transliteration: "shāa", root: null, meaning: { en: "what your Lord wills ", ur: "کیا/جو تمہارا رب wills", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبُّكَ ۖ", transliteration: "rabbuka", root: null, meaning: { en: "what your Lord wills ", ur: "کیا/جو تمہارا رب wills", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَطَآءً", transliteration: "ʿaṭāan", root: null, meaning: { en: "a bestowal", ur: "a bestowal", ar: "عطاء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", root: null, meaning: { en: "not", ur: "نہیں", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَجْذُوذٍۢ", transliteration: "majdhūdhin", root: null, meaning: { en: "interrupted", ur: "interrupted", ar: "مجذوذ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'موصول + صلة' },
        { from: 15, to: 16, label: 'فعل + فاعل' }
      ],
    },
  },
  109: {
    ayahNumber: 109,
    text: "فَلَا تَكُ فِى مِرْيَةٍۢ مِّمَّا يَعْبُدُ هَـٰٓؤُلَآءِ ۚ مَا يَعْبُدُونَ إِلَّا كَمَا يَعْبُدُ ءَابَآؤُهُم مِّن قَبْلُ ۚ وَإِنَّا لَمُوَفُّوهُمْ نَصِيبَهُمْ غَيْرَ مَنقُوصٍۢ",
    words: [
      { arabic: "فَلَا", transliteration: "falā", root: null, meaning: { en: "So (do) not", ur: "So کرتے ہو نہیں", ar: "فلا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَكُ", transliteration: "taku", root: null, meaning: { en: "be", ur: "be", ar: "تك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِرْيَةٍۢ", transliteration: "mir'yatin", root: null, meaning: { en: "doubt", ur: "doubt", ar: "مرية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", root: null, meaning: { en: "as to what", ur: "as طرف کیا/جو", ar: "مما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعْبُدُ", transliteration: "yaʿbudu", root: null, meaning: { en: "worship", ur: "عبادت کرو", ar: "يعبد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰٓؤُلَآءِ ۚ", transliteration: "hāulāi", root: null, meaning: { en: "these (polytheists)", ur: "یہ polytheists", ar: "هؤلاء" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْبُدُونَ", transliteration: "yaʿbudūna", root: "ع ب د", meaning: { en: "they worship", ur: "وہ لوگ عبادت کرو", ar: "يعبدون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَمَا", transliteration: "kamā", root: null, meaning: { en: "as what", ur: "as کیا/جو", ar: "كما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَعْبُدُ", transliteration: "yaʿbudu", root: null, meaning: { en: "worshipped", ur: "worshipped", ar: "يعبد" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَابَآؤُهُم", transliteration: "ābāuhum", root: null, meaning: { en: "their forefathers", ur: "their forefathers", ar: "ءاباؤهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "before", ur: "before", ar: "من" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلُ ۚ", transliteration: "qablu", root: null, meaning: { en: "before", ur: "before", ar: "قبل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّا", transliteration: "wa-innā", root: null, meaning: { en: "And indeed, We", ur: "اور indeed, ہم", ar: "وإنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمُوَفُّوهُمْ", transliteration: "lamuwaffūhum", root: null, meaning: { en: "will surely pay them in full", ur: "گا/گے یقیناً pay انہیں میں full", ar: "لموفوهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَصِيبَهُمْ", transliteration: "naṣībahum", root: null, meaning: { en: "their share", ur: "their share", ar: "نصيبهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", root: null, meaning: { en: "without", ur: "without", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنقُوصٍۢ", transliteration: "manqūṣin", root: null, meaning: { en: "being diminished", ur: "being diminished", ar: "منقوص" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  110: {
    ayahNumber: 110,
    text: "وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْكِتَـٰبَ فَٱخْتُلِفَ فِيهِ ۚ وَلَوْلَا كَلِمَةٌۭ سَبَقَتْ مِن رَّبِّكَ لَقُضِىَ بَيْنَهُمْ ۚ وَإِنَّهُمْ لَفِى شَكٍّۢ مِّنْهُ مُرِيبٍۢ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", root: null, meaning: { en: "And verily", ur: "اور verily", ar: "ولقد" }, pos: "PART", posLabel: "PART", grammar: { role: "emphasis" } },
      { arabic: "ءَاتَيْنَا", transliteration: "ātaynā", root: null, meaning: { en: "We gave", ur: "ہم دیا", ar: "ءاتينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُوسَى", transliteration: "mūsā", root: null, meaning: { en: "Musa", ur: "Musa", ar: "موسى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", root: "ك ت ب", meaning: { en: "the Book", ur: "the کتاب", ar: "لكتب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱخْتُلِفَ", transliteration: "fa-ukh'tulifa", root: null, meaning: { en: "but differences arose", ur: "لیکن differences arose", ar: "فختلف" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِ ۚ", transliteration: "fīhi", root: null, meaning: { en: "therein", ur: "therein", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَلَوْلَا", transliteration: "walawlā", root: null, meaning: { en: "And if not", ur: "اور if نہیں", ar: "ولولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَلِمَةٌۭ", transliteration: "kalimatun", root: null, meaning: { en: "(for) a Word", ur: "کے لیے a Word", ar: "كلمة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبَقَتْ", transliteration: "sabaqat", root: null, meaning: { en: "(that) preceded", ur: "کہ/وہ preceded", ar: "سبقت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَقُضِىَ", transliteration: "laquḍiya", root: null, meaning: { en: "surely would have been judged", ur: "یقیناً would have been judged", ar: "لقضى" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَهُمْ ۚ", transliteration: "baynahum", root: null, meaning: { en: "between them", ur: "between انہیں", ar: "بينهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَإِنَّهُمْ", transliteration: "wa-innahum", root: null, meaning: { en: "And indeed, they", ur: "اور indeed, وہ لوگ", ar: "وإنهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَفِى", transliteration: "lafī", root: null, meaning: { en: "surely (are) in", ur: "یقیناً ہیں میں", ar: "لفى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَكٍّۢ", transliteration: "shakkin", root: null, meaning: { en: "doubt", ur: "doubt", ar: "شك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُ", transliteration: "min'hu", root: null, meaning: { en: "concerning it", ur: "concerning یہ", ar: "منه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُرِيبٍۢ", transliteration: "murībin", root: null, meaning: { en: "suspicious", ur: "suspicious", ar: "مريب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  111: {
    ayahNumber: 111,
    text: "وَإِنَّ كُلًّۭا لَّمَّا لَيُوَفِّيَنَّهُمْ رَبُّكَ أَعْمَـٰلَهُمْ ۚ إِنَّهُۥ بِمَا يَعْمَلُونَ خَبِيرٌۭ",
    words: [
      { arabic: "وَإِنَّ", transliteration: "wa-inna", root: null, meaning: { en: "And indeed", ur: "اور بے شک", ar: "وإن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُلًّۭا", transliteration: "kullan", root: null, meaning: { en: "to each [when]", ur: "طرف each [when]", ar: "كلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّمَّا", transliteration: "lammā", root: null, meaning: { en: "to each [when]", ur: "طرف each [when]", ar: "لما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيُوَفِّيَنَّهُمْ", transliteration: "layuwaffiyannahum", root: null, meaning: { en: "surely will pay them in full", ur: "یقیناً گا/گے pay انہیں میں full", ar: "ليوفينهم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْمَـٰلَهُمْ ۚ", transliteration: "aʿmālahum", root: null, meaning: { en: "their deeds", ur: "their deeds", ar: "أعملهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", root: null, meaning: { en: "Indeed, He", ur: "Indeed, وہ", ar: "إنه" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", root: null, meaning: { en: "of what", ur: "of کیا/جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", root: null, meaning: { en: "they do", ur: "وہ لوگ کرتے ہو", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَبِيرٌۭ", transliteration: "khabīrun", root: null, meaning: { en: "(is) All-Aware", ur: "ہے All-Aware", ar: "خبير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  116: {
    ayahNumber: 116,
    text: "فَلَوْلَا كَانَ مِنَ ٱلْقُرُونِ مِن قَبْلِكُمْ أُو۟لُوا۟ بَقِيَّةٍۢ يَنْهَوْنَ عَنِ ٱلْفَسَادِ فِى ٱلْأَرْضِ إِلَّا قَلِيلًۭا مِّمَّنْ أَنجَيْنَا مِنْهُمْ ۗ وَٱتَّبَعَ ٱلَّذِينَ ظَلَمُوا۟ مَآ أُتْرِفُوا۟ فِيهِ وَكَانُوا۟ مُجْرِمِينَ",
    words: [
      { arabic: "فَلَوْلَا", transliteration: "falawlā", root: null, meaning: { en: "So why not", ur: "So why نہیں", ar: "فلولا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", root: null, meaning: { en: "had been", ur: "had been", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "of", ur: "of", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْقُرُونِ", transliteration: "l-qurūni", root: null, meaning: { en: "the generations", ur: "the generations", ar: "لقرون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", root: null, meaning: { en: "before you", ur: "before تم", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِكُمْ", transliteration: "qablikum", root: null, meaning: { en: "before you", ur: "before تم", ar: "قبلكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُو۟لُوا۟", transliteration: "ulū", root: null, meaning: { en: "those possessing a remnant", ur: "those possessing a remnant", ar: "أولوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَقِيَّةٍۢ", transliteration: "baqiyyatin", root: null, meaning: { en: "those possessing a remnant", ur: "those possessing a remnant", ar: "بقية" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَنْهَوْنَ", transliteration: "yanhawna", root: null, meaning: { en: "forbidding", ur: "forbidding", ar: "ينهون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنِ", transliteration: "ʿani", root: null, meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْفَسَادِ", transliteration: "l-fasādi", root: null, meaning: { en: "the corruption", ur: "the corruption", ar: "لفساد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "فى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "لأرض" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَلِيلًۭا", transliteration: "qalīlan", root: null, meaning: { en: "a few", ur: "a few", ar: "قليلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّنْ", transliteration: "mimman", root: null, meaning: { en: "of those", ur: "of those", ar: "ممن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنجَيْنَا", transliteration: "anjaynā", root: null, meaning: { en: "We saved", ur: "ہم saved", ar: "أنجينا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُمْ ۗ", transliteration: "min'hum", root: null, meaning: { en: "among them", ur: "among انہیں", ar: "منهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَٱتَّبَعَ", transliteration: "wa-ittabaʿa", root: null, meaning: { en: "But followed", ur: "لیکن followed", ar: "وتبع" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جو لوگ", ar: "لذين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", root: null, meaning: { en: "did wrong", ur: "کیا wrong", ar: "ظلموا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَآ", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا/جو", ar: "ما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُتْرِفُوا۟", transliteration: "ut'rifū", root: null, meaning: { en: "luxury they were given", ur: "luxury وہ لوگ تھے given", ar: "أترفوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهِ", transliteration: "fīhi", root: null, meaning: { en: "therein", ur: "therein", ar: "فيه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَكَانُوا۟", transliteration: "wakānū", root: null, meaning: { en: "and they were", ur: "اور وہ لوگ تھے", ar: "وكانوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُجْرِمِينَ", transliteration: "muj'rimīna", root: null, meaning: { en: "criminals", ur: "criminals", ar: "مجرمين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  117: {
    ayahNumber: 117,
    text: "وَمَا كَانَ رَبُّكَ لِيُهْلِكَ ٱلْقُرَىٰ بِظُلْمٍۢ وَأَهْلُهَا مُصْلِحُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", root: null, meaning: { en: "would", ur: "would", ar: "كان" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِيُهْلِكَ", transliteration: "liyuh'lika", root: null, meaning: { en: "destroy", ur: "destroy", ar: "ليهلك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْقُرَىٰ", transliteration: "l-qurā", root: null, meaning: { en: "the cities", ur: "the cities", ar: "لقرى" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِظُلْمٍۢ", transliteration: "biẓul'min", root: null, meaning: { en: "unjustly", ur: "unjustly", ar: "بظلم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَأَهْلُهَا", transliteration: "wa-ahluhā", root: null, meaning: { en: "while its people", ur: "while its لوگ", ar: "وأهلها" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُصْلِحُونَ", transliteration: "muṣ'liḥūna", root: null, meaning: { en: "(were) reformers", ur: "تھے reformers", ar: "مصلحون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  118: {
    ayahNumber: 118,
    text: "وَلَوْ شَآءَ رَبُّكَ لَجَعَلَ ٱلنَّاسَ أُمَّةًۭ وَٰحِدَةًۭ ۖ وَلَا يَزَالُونَ مُخْتَلِفِينَ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", root: null, meaning: { en: "And if", ur: "اور if", ar: "ولو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَآءَ", transliteration: "shāa", root: null, meaning: { en: "your Lord (had) willed", ur: "تمہارا رب had willed", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", root: "ر ب ب", meaning: { en: "your Lord (had) willed", ur: "تمہارا رب had willed", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَجَعَلَ", transliteration: "lajaʿala", root: "ج ع ل", meaning: { en: "surely He (could) have made", ur: "یقیناً وہ could have بنایا", ar: "لجعل" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", root: null, meaning: { en: "the mankind", ur: "the mankind", ar: "لناس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةًۭ", transliteration: "ummatan", root: null, meaning: { en: "one community", ur: "one community", ar: "أمة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدَةًۭ ۖ", transliteration: "wāḥidatan", root: null, meaning: { en: "one community", ur: "one community", ar: "وحدة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", root: null, meaning: { en: "but not", ur: "لیکن نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "يَزَالُونَ", transliteration: "yazālūna", root: null, meaning: { en: "they will cease", ur: "وہ لوگ گا/گے cease", ar: "يزالون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُخْتَلِفِينَ", transliteration: "mukh'talifīna", root: null, meaning: { en: "to differ", ur: "طرف differ", ar: "مختلفين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  119: {
    ayahNumber: 119,
    text: "إِلَّا مَن رَّحِمَ رَبُّكَ ۚ وَلِذَٰلِكَ خَلَقَهُمْ ۗ وَتَمَّتْ كَلِمَةُ رَبِّكَ لَأَمْلَأَنَّ جَهَنَّمَ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ أَجْمَعِينَ",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "Except", ur: "سوائے", ar: "إلا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", root: null, meaning: { en: "(on) whom", ur: "پر whom", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "رَّحِمَ", transliteration: "raḥima", root: null, meaning: { en: "your Lord has bestowed Mercy", ur: "تمہارا رب has bestowed رحمت", ar: "رحم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّكَ ۚ", transliteration: "rabbuka", root: null, meaning: { en: "your Lord has bestowed Mercy", ur: "تمہارا رب has bestowed رحمت", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلِذَٰلِكَ", transliteration: "walidhālika", root: null, meaning: { en: "and for that", ur: "اور کے لیے کہ/وہ", ar: "ولذلك" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "conjunction+preposition" } },
      { arabic: "خَلَقَهُمْ ۗ", transliteration: "khalaqahum", root: "خ ل ق", meaning: { en: "He created them", ur: "وہ پیدا کیا انہیں", ar: "خلقهم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَتَمَّتْ", transliteration: "watammat", root: null, meaning: { en: "And will be fulfilled", ur: "اور گا/گے be fulfilled", ar: "وتمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَلِمَةُ", transliteration: "kalimatu", root: null, meaning: { en: "(the) Word of your Lord", ur: "the Word of تمہارا رب", ar: "كلمة" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "(the) Word of your Lord", ur: "the Word of تمہارا رب", ar: "ربك" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَأَمْلَأَنَّ", transliteration: "la-amla-anna", root: null, meaning: { en: "Surely I will fill", ur: "یقیناً میں گا/گے fill", ar: "لأملأن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", root: null, meaning: { en: "Hell", ur: "Hell", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "with", ur: "کے ساتھ", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْجِنَّةِ", transliteration: "l-jinati", root: null, meaning: { en: "the Jinn", ur: "the Jinn", ar: "لجنة" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلنَّاسِ", transliteration: "wal-nāsi", root: null, meaning: { en: "and the men", ur: "اور the مرد", ar: "ولناس" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", root: null, meaning: { en: "all together", ur: "all together", ar: "أجمعين" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  121: {
    ayahNumber: 121,
    text: "وَقُل لِّلَّذِينَ لَا يُؤْمِنُونَ ٱعْمَلُوا۟ عَلَىٰ مَكَانَتِكُمْ إِنَّا عَـٰمِلُونَ",
    words: [
      { arabic: "وَقُل", transliteration: "waqul", root: "ق و ل", meaning: { en: "And say", ur: "اور کہو", ar: "وقل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", root: null, meaning: { en: "to those who", ur: "طرف those جو", ar: "للذين" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "(do) not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", root: null, meaning: { en: "believe", ur: "ایمان لاتے ہیں", ar: "يؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱعْمَلُوا۟", transliteration: "iʿ'malū", root: null, meaning: { en: "Work", ur: "Work", ar: "عملوا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "(according) to", ur: "طرف", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَكَانَتِكُمْ", transliteration: "makānatikum", root: null, meaning: { en: "your position", ur: "تمہارا position", ar: "مكانتكم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "indeed, we", ur: "indeed, ہم", ar: "إنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَـٰمِلُونَ", transliteration: "ʿāmilūna", root: null, meaning: { en: "(are also) working", ur: "ہیں also working", ar: "عملون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  122: {
    ayahNumber: 122,
    text: "وَٱنتَظِرُوٓا۟ إِنَّا مُنتَظِرُونَ",
    words: [
      { arabic: "وَٱنتَظِرُوٓا۟", transliteration: "wa-intaẓirū", root: null, meaning: { en: "And wait", ur: "اور wait", ar: "ونتظروا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "indeed, we", ur: "indeed, ہم", ar: "إنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُنتَظِرُونَ", transliteration: "muntaẓirūna", root: null, meaning: { en: "(are) ones who wait", ur: "ہیں ones جو wait", ar: "منتظرون" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
      ],
    },
  },
};

export default TREEBANK_DATA;
