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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};

export default TREEBANK_DATA;
