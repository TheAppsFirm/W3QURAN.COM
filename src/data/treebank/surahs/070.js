/**
 * Surah Al-Ma'arij (70) - Quranic Arabic Treebank
 * The Ascending Stairways
 * 44 Ayahs - Makki
 * Theme: Day of Judgment, human impatience, qualities of successful believers
 */

export const TREEBANK_DATA = {
  surahId: 70,
  surahName: "Al-Ma'arij",
  surahNameArabic: "المعارج",
  totalAyahs: 44,

  1: {
    ayahNumber: 1,
    text: "سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ",
    words: [
      { arabic: "سَأَلَ", transliteration: "saʾala", root: "س أ ل", meaning: { en: "Asked", ur: "پوچھا", ar: "سأل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "سَائِلٌ", transliteration: "sāʾilun", root: "س أ ل", meaning: { en: "a questioner", ur: "ایک پوچھنے والے نے", ar: "سائل" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "بِعَذَابٍ", transliteration: "bi-ʿadhābin", root: "ع ذ ب", meaning: { en: "about a punishment", ur: "عذاب کے بارے میں", ar: "بعذاب" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "وَاقِعٍ", transliteration: "wāqiʿin", root: "و ق ع", meaning: { en: "to occur", ur: "واقع ہونے والے", ar: "واقع" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "لِّلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ",
    words: [
      { arabic: "لِّلْكَافِرِينَ", transliteration: "li-al-kāfirīna", root: "ك ف ر", meaning: { en: "For the disbelievers", ur: "کافروں کے لیے", ar: "للكافرين" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } },
      { arabic: "لَيْسَ", transliteration: "laysa", root: "ل ي س", meaning: { en: "there is not", ur: "نہیں ہے", ar: "ليس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُ", transliteration: "lahu", root: null, meaning: { en: "for it", ur: "اس کا", ar: "له" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "دَافِعٌ", transliteration: "dāfiʿun", root: "د ف ع", meaning: { en: "any preventer", ur: "ٹالنے والا", ar: "دافع" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "مِّنَ اللَّهِ ذِي الْمَعَارِجِ",
    words: [
      { arabic: "مِّنَ", transliteration: "mina", root: null, meaning: { en: "From", ur: "کی طرف سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "ذِي", transliteration: "dhī", root: null, meaning: { en: "Owner of", ur: "والا", ar: "ذي" }, pos: "N", posLabel: "N", grammar: { role: "adjective" } },
      { arabic: "الْمَعَارِجِ", transliteration: "al-maʿāriji", root: "ع ر ج", meaning: { en: "the ascending stairways", ur: "بلند درجوں", ar: "المعارج" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ إِلَيْهِ فِي يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ",
    words: [
      { arabic: "تَعْرُجُ", transliteration: "taʿruju", root: "ع ر ج", meaning: { en: "Ascend", ur: "چڑھتے ہیں", ar: "تعرج" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "الْمَلَائِكَةُ", transliteration: "al-malāʾikatu", root: "م ل ك", meaning: { en: "the angels", ur: "فرشتے", ar: "الملائكة" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "وَالرُّوحُ", transliteration: "wa-al-rūḥu", root: "ر و ح", meaning: { en: "and the Spirit", ur: "اور روح (جبریل)", ar: "والروح" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", root: null, meaning: { en: "to Him", ur: "اس کی طرف", ar: "إليه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمٍ", transliteration: "yawmin", root: "ي و م", meaning: { en: "a Day", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كان" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مِقْدَارُهُ", transliteration: "miqdāruhu", root: "ق د ر", meaning: { en: "its extent", ur: "اس کی مقدار", ar: "مقداره" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "خَمْسِينَ", transliteration: "khamsīna", root: "خ م س", meaning: { en: "fifty", ur: "پچاس", ar: "خمسين" }, pos: "NUM", posLabel: "NUM", grammar: { role: "predicate" } },
      { arabic: "أَلْفَ", transliteration: "alfa", root: "أ ل ف", meaning: { en: "thousand", ur: "ہزار", ar: "ألف" }, pos: "NUM", posLabel: "NUM", grammar: { role: "specification" } },
      { arabic: "سَنَةٍ", transliteration: "sanatin", root: "س ن ه", meaning: { en: "years", ur: "سال", ar: "سنة" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "فَاصْبِرْ صَبْرًا جَمِيلًا",
    words: [
      { arabic: "فَاصْبِرْ", transliteration: "fa-ṣbir", root: "ص ب ر", meaning: { en: "So be patient", ur: "پس صبر کرو", ar: "فاصبر" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "صَبْرًا", transliteration: "ṣabran", root: "ص ب ر", meaning: { en: "with patience", ur: "صبر", ar: "صبراً" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" } },
      { arabic: "جَمِيلًا", transliteration: "jamīlan", root: "ج م ل", meaning: { en: "beautiful", ur: "خوبصورت", ar: "جميلاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "إِنَّهُمْ يَرَوْنَهُ بَعِيدًا",
    words: [
      { arabic: "إِنَّهُمْ", transliteration: "innahum", root: null, meaning: { en: "Indeed they", ur: "بیشک وہ", ar: "إنهم" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "يَرَوْنَهُ", transliteration: "yarawnahuʾ", root: "ر أ ي", meaning: { en: "see it", ur: "اسے دیکھتے ہیں", ar: "يرونه" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "بَعِيدًا", transliteration: "baʿīdan", root: "ب ع د", meaning: { en: "far off", ur: "دور", ar: "بعيداً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَنَرَاهُ قَرِيبًا",
    words: [
      { arabic: "وَنَرَاهُ", transliteration: "wa-narāhu", root: "ر أ ي", meaning: { en: "But We see it", ur: "اور ہم دیکھتے ہیں", ar: "ونراه" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "قَرِيبًا", transliteration: "qarīban", root: "ق ر ب", meaning: { en: "near", ur: "قریب", ar: "قريباً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "يَوْمَ تَكُونُ السَّمَاءُ كَالْمُهْلِ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "تَكُونُ", transliteration: "takūnu", root: "ك و ن", meaning: { en: "will be", ur: "ہو جائے گا", ar: "تكون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "السَّمَاءُ", transliteration: "al-samāʾu", root: "س م و", meaning: { en: "the sky", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "كَالْمُهْلِ", transliteration: "ka-al-muhli", root: "م ه ل", meaning: { en: "like murky oil", ur: "پگھلی ہوئی دھات کی طرح", ar: "كالمهل" }, pos: "N", posLabel: "N", grammar: { role: "predicate", definite: true } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ",
    words: [
      { arabic: "وَتَكُونُ", transliteration: "wa-takūnu", root: "ك و ن", meaning: { en: "And will be", ur: "اور ہو جائیں گے", ar: "وتكون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "الْجِبَالُ", transliteration: "al-jibālu", root: "ج ب ل", meaning: { en: "the mountains", ur: "پہاڑ", ar: "الجبال" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "كَالْعِهْنِ", transliteration: "ka-al-ʿihni", root: "ع ه ن", meaning: { en: "like wool", ur: "رنگین اون کی طرح", ar: "كالعهن" }, pos: "N", posLabel: "N", grammar: { role: "predicate", definite: true } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَلَا يَسْأَلُ حَمِيمٌ حَمِيمًا",
    words: [
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَسْأَلُ", transliteration: "yasʾalu", root: "س أ ل", meaning: { en: "will ask", ur: "پوچھے گا", ar: "يسأل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "حَمِيمٌ", transliteration: "ḥamīmun", root: "ح م م", meaning: { en: "a close friend", ur: "دوست", ar: "حميم" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "حَمِيمًا", transliteration: "ḥamīman", root: "ح م م", meaning: { en: "a close friend", ur: "دوست سے", ar: "حميماً" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "يُبَصَّرُونَهُمْ ۚ يَوَدُّ الْمُجْرِمُ لَوْ يَفْتَدِي مِنْ عَذَابِ يَوْمِئِذٍ بِبَنِيهِ",
    words: [
      { arabic: "يُبَصَّرُونَهُمْ", transliteration: "yubaṣṣarūnahum", root: "ب ص ر", meaning: { en: "They will be shown each other", ur: "ایک دوسرے کو دکھائے جائیں گے", ar: "يبصرونهم" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" }, features: { form: "II" } },
      { arabic: "يَوَدُّ", transliteration: "yawaddu", root: "و د د", meaning: { en: "would wish", ur: "چاہے گا", ar: "يود" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "الْمُجْرِمُ", transliteration: "al-mujrimu", root: "ج ر م", meaning: { en: "the criminal", ur: "مجرم", ar: "المجرم" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true }, features: { form: "IV" } },
      { arabic: "لَوْ", transliteration: "law", root: null, meaning: { en: "if", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "يَفْتَدِي", transliteration: "yaftadī", root: "ف د ي", meaning: { en: "he could ransom", ur: "چھڑا لے", ar: "يفتدي" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "VIII" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَذَابِ", transliteration: "ʿadhābi", root: "ع ذ ب", meaning: { en: "punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "يَوْمِئِذٍ", transliteration: "yawmiʾidhin", root: "ي و م", meaning: { en: "of that Day", ur: "اس دن کے", ar: "يومئذ" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "بِبَنِيهِ", transliteration: "bi-banīhi", root: "ب ن ي", meaning: { en: "with his children", ur: "اپنے بیٹوں کے بدلے", ar: "ببنيه" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "وَصَاحِبَتِهِ وَأَخِيهِ",
    words: [
      { arabic: "وَصَاحِبَتِهِ", transliteration: "wa-ṣāḥibatihi", root: "ص ح ب", meaning: { en: "And his wife", ur: "اور اپنی بیوی", ar: "وصاحبته" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "وَأَخِيهِ", transliteration: "wa-akhīhi", root: "أ خ و", meaning: { en: "and his brother", ur: "اور اپنے بھائی", ar: "وأخيه" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ]
  },

  13: {
    ayahNumber: 13,
    text: "وَفَصِيلَتِهِ الَّتِي تُؤْوِيهِ",
    words: [
      { arabic: "وَفَصِيلَتِهِ", transliteration: "wa-faṣīlatihi", root: "ف ص ل", meaning: { en: "And his tribe", ur: "اور اپنے خاندان", ar: "وفصيلته" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "الَّتِي", transliteration: "allatī", root: null, meaning: { en: "which", ur: "جو", ar: "التي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تُؤْوِيهِ", transliteration: "tuʾwīhi", root: "أ و ي", meaning: { en: "sheltered him", ur: "اسے پناہ دیتا تھا", ar: "تؤويه" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } }
    ]
  },

  14: {
    ayahNumber: 14,
    text: "وَمَن فِي الْأَرْضِ جَمِيعًا ثُمَّ يُنجِيهِ",
    words: [
      { arabic: "وَمَن", transliteration: "wa-man", root: null, meaning: { en: "And whoever is", ur: "اور جو کوئی بھی", ar: "ومن" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "on", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "جَمِيعًا", transliteration: "jamīʿan", root: "ج م ع", meaning: { en: "all together", ur: "سب کو", ar: "جميعاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" } },
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "يُنجِيهِ", transliteration: "yunjīhi", root: "ن ج و", meaning: { en: "it could save him", ur: "اسے بچا لے", ar: "ينجيه" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } }
    ]
  },

  15: {
    ayahNumber: 15,
    text: "كَلَّا ۖ إِنَّهَا لَظَىٰ",
    words: [
      { arabic: "كَلَّا", transliteration: "kallā", root: null, meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كلا" }, pos: "PART", posLabel: "PART", grammar: { role: "rejection" } },
      { arabic: "إِنَّهَا", transliteration: "innahā", root: null, meaning: { en: "Indeed it is", ur: "بیشک وہ", ar: "إنها" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَظَىٰ", transliteration: "laẓā", root: "ل ظ ي", meaning: { en: "Laza (Blazing Fire)", ur: "بھڑکتی ہوئی آگ", ar: "لظى" }, pos: "N", posLabel: "N", grammar: { role: "predicate", proper_noun: true } }
    ]
  },

  16: {
    ayahNumber: 16,
    text: "نَزَّاعَةً لِّلشَّوَىٰ",
    words: [
      { arabic: "نَزَّاعَةً", transliteration: "nazzāʿatan", root: "ن ز ع", meaning: { en: "Remover", ur: "اکھاڑ دینے والی", ar: "نزاعة" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" }, features: { pattern: "faʿʿālah", intensive: true } },
      { arabic: "لِّلشَّوَىٰ", transliteration: "li-al-shawā", root: "ش و ي", meaning: { en: "of scalps", ur: "کھوپڑی کی کھال کی", ar: "للشوى" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  17: {
    ayahNumber: 17,
    text: "تَدْعُو مَنْ أَدْبَرَ وَتَوَلَّىٰ",
    words: [
      { arabic: "تَدْعُو", transliteration: "tadʿū", root: "د ع و", meaning: { en: "It invites", ur: "بلاتی ہے", ar: "تدعو" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "مَنْ", transliteration: "man", root: null, meaning: { en: "him who", ur: "جس نے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "أَدْبَرَ", transliteration: "adbara", root: "د ب ر", meaning: { en: "turned back", ur: "پیٹھ پھیری", ar: "أدبر" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "وَتَوَلَّىٰ", transliteration: "wa-tawallā", root: "و ل ي", meaning: { en: "and turned away", ur: "اور منہ موڑا", ar: "وتولى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "V" } }
    ]
  },

  18: {
    ayahNumber: 18,
    text: "وَجَمَعَ فَأَوْعَىٰ",
    words: [
      { arabic: "وَجَمَعَ", transliteration: "wa-jamaʿa", root: "ج م ع", meaning: { en: "And collected", ur: "اور جمع کیا", ar: "وجمع" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "فَأَوْعَىٰ", transliteration: "fa-awʿā", root: "و ع ي", meaning: { en: "and hoarded", ur: "اور جوڑ کر رکھا", ar: "فأوعى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } }
    ]
  },

  19: {
    ayahNumber: 19,
    text: "إِنَّ الْإِنسَانَ خُلِقَ هَلُوعًا",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "الْإِنسَانَ", transliteration: "al-insāna", root: "أ ن س", meaning: { en: "man", ur: "انسان", ar: "الإنسان" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna", definite: true } },
      { arabic: "خُلِقَ", transliteration: "khuliqa", root: "خ ل ق", meaning: { en: "was created", ur: "پیدا کیا گیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" } },
      { arabic: "هَلُوعًا", transliteration: "halūʿan", root: "ه ل ع", meaning: { en: "anxious/impatient", ur: "بے صبر", ar: "هلوعاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" }, features: { pattern: "faʿūl", intensive: true } }
    ]
  },

  20: {
    ayahNumber: 20,
    text: "إِذَا مَسَّهُ الشَّرُّ جَزُوعًا",
    words: [
      { arabic: "إِذَا", transliteration: "idhā", root: null, meaning: { en: "When", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "مَسَّهُ", transliteration: "massahu", root: "م س س", meaning: { en: "evil touches him", ur: "اسے چھوئے", ar: "مسه" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الشَّرُّ", transliteration: "al-sharru", root: "ش ر ر", meaning: { en: "evil", ur: "تکلیف", ar: "الشر" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "جَزُوعًا", transliteration: "jazūʿan", root: "ج ز ع", meaning: { en: "he is distressed", ur: "گھبرا جاتا ہے", ar: "جزوعاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" }, features: { pattern: "faʿūl", intensive: true } }
    ]
  },

  21: {
    ayahNumber: 21,
    text: "وَإِذَا مَسَّهُ الْخَيْرُ مَنُوعًا",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", root: null, meaning: { en: "And when", ur: "اور جب", ar: "وإذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "مَسَّهُ", transliteration: "massahu", root: "م س س", meaning: { en: "good touches him", ur: "اسے پہنچے", ar: "مسه" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الْخَيْرُ", transliteration: "al-khayru", root: "خ ي ر", meaning: { en: "good", ur: "بھلائی", ar: "الخير" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "مَنُوعًا", transliteration: "manūʿan", root: "م ن ع", meaning: { en: "withholding", ur: "بخیل", ar: "منوعاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" }, features: { pattern: "faʿūl", intensive: true } }
    ]
  },

  22: {
    ayahNumber: 22,
    text: "إِلَّا الْمُصَلِّينَ",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "Except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "الْمُصَلِّينَ", transliteration: "al-muṣallīna", root: "ص ل و", meaning: { en: "those who pray", ur: "نماز پڑھنے والوں کے", ar: "المصلين" }, pos: "N", posLabel: "N", grammar: { role: "exception", definite: true }, features: { form: "II participle" } }
    ]
  },

  23: {
    ayahNumber: 23,
    text: "الَّذِينَ هُمْ عَلَىٰ صَلَاتِهِمْ دَائِمُونَ",
    words: [
      { arabic: "الَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "Those who", ur: "وہ جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "هُمْ", transliteration: "hum", root: null, meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "in", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صَلَاتِهِمْ", transliteration: "ṣalātihim", root: "ص ل و", meaning: { en: "their prayer", ur: "اپنی نماز", ar: "صلاتهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "دَائِمُونَ", transliteration: "dāʾimūna", root: "د و م", meaning: { en: "constant", ur: "قائم رہتے ہیں", ar: "دائمون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  24: {
    ayahNumber: 24,
    text: "وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "And those", ur: "اور جو", ar: "والذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَمْوَالِهِمْ", transliteration: "amwālihim", root: "م و ل", meaning: { en: "their wealth", ur: "ان کے مالوں", ar: "أموالهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "حَقٌّ", transliteration: "ḥaqqun", root: "ح ق ق", meaning: { en: "is a right", ur: "حق ہے", ar: "حق" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "مَّعْلُومٌ", transliteration: "maʿlūmun", root: "ع ل م", meaning: { en: "known/assigned", ur: "معین", ar: "معلوم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  25: {
    ayahNumber: 25,
    text: "لِّلسَّائِلِ وَالْمَحْرُومِ",
    words: [
      { arabic: "لِّلسَّائِلِ", transliteration: "li-al-sāʾili", root: "س أ ل", meaning: { en: "For the beggar", ur: "مانگنے والے کے لیے", ar: "للسائل" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } },
      { arabic: "وَالْمَحْرُومِ", transliteration: "wa-al-maḥrūmi", root: "ح ر م", meaning: { en: "and the deprived", ur: "اور محروم کے لیے", ar: "والمحروم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } }
    ]
  },

  26: {
    ayahNumber: 26,
    text: "وَالَّذِينَ يُصَدِّقُونَ بِيَوْمِ الدِّينِ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "And those who", ur: "اور جو", ar: "والذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُصَدِّقُونَ", transliteration: "yuṣaddiqūna", root: "ص د ق", meaning: { en: "believe in", ur: "تصدیق کرتے ہیں", ar: "يصدقون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "II" } },
      { arabic: "بِيَوْمِ", transliteration: "bi-yawmi", root: "ي و م", meaning: { en: "the Day", ur: "دن پر", ar: "بيوم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "الدِّينِ", transliteration: "al-dīni", root: "د ي ن", meaning: { en: "of Judgment", ur: "قیامت کے", ar: "الدين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  27: {
    ayahNumber: 27,
    text: "وَالَّذِينَ هُم مِّنْ عَذَابِ رَبِّهِم مُّشْفِقُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "And those who", ur: "اور جو", ar: "والذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "هُم", transliteration: "hum", root: null, meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مِّنْ", transliteration: "min", root: null, meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَذَابِ", transliteration: "ʿadhābi", root: "ع ذ ب", meaning: { en: "punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "رَبِّهِم", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "of their Lord", ur: "اپنے رب کے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مُّشْفِقُونَ", transliteration: "mushfiqūna", root: "ش ف ق", meaning: { en: "fearful", ur: "ڈرتے ہیں", ar: "مشفقون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { form: "IV participle" } }
    ]
  },

  28: {
    ayahNumber: 28,
    text: "إِنَّ عَذَابَ رَبِّهِمْ غَيْرُ مَأْمُونٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", root: null, meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", root: "ع ذ ب", meaning: { en: "punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "subject of inna" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "of their Lord", ur: "ان کے رب کا", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", root: "غ ي ر", meaning: { en: "is not", ur: "نہیں ہے", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "مَأْمُونٍ", transliteration: "maʾmūnin", root: "أ م ن", meaning: { en: "to be felt secure from", ur: "امن والا", ar: "مأمون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "genitive" } }
    ]
  },

  29: {
    ayahNumber: 29,
    text: "وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "And those who", ur: "اور جو", ar: "والذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "هُمْ", transliteration: "hum", root: null, meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لِفُرُوجِهِمْ", transliteration: "li-furūjihim", root: "ف ر ج", meaning: { en: "their private parts", ur: "اپنی شرمگاہوں کی", ar: "لفروجهم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "حَافِظُونَ", transliteration: "ḥāfiẓūna", root: "ح ف ظ", meaning: { en: "are guarding", ur: "حفاظت کرتے ہیں", ar: "حافظون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  30: {
    ayahNumber: 30,
    text: "إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "Except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "with", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَزْوَاجِهِمْ", transliteration: "azwājihim", root: "ز و ج", meaning: { en: "their wives", ur: "اپنی بیویوں", ar: "أزواجهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "أَوْ", transliteration: "aw", root: null, meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunctive" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "مَلَكَتْ", transliteration: "malakat", root: "م ل ك", meaning: { en: "possess", ur: "مالک ہوں", ar: "ملكت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَيْمَانُهُمْ", transliteration: "aymānuhum", root: "ي م ن", meaning: { en: "their right hands", ur: "ان کے دائیں ہاتھ", ar: "أيمانهم" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "فَإِنَّهُمْ", transliteration: "fa-innahum", root: null, meaning: { en: "for indeed they are", ur: "تو وہ ہیں", ar: "فإنهم" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", root: "غ ي ر", meaning: { en: "not", ur: "نہیں", ar: "غير" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "مَلُومِينَ", transliteration: "malūmīna", root: "ل و م", meaning: { en: "to be blamed", ur: "ملامت کیے جائیں گے", ar: "ملومين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "genitive" } }
    ]
  },

  31: {
    ayahNumber: 31,
    text: "فَمَنِ ابْتَغَىٰ وَرَاءَ ذَٰلِكَ فَأُولَـٰئِكَ هُمُ الْعَادُونَ",
    words: [
      { arabic: "فَمَنِ", transliteration: "fa-mani", root: null, meaning: { en: "But whoever", ur: "پس جو", ar: "فمن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "ابْتَغَىٰ", transliteration: "ibtaghā", root: "ب غ ي", meaning: { en: "seeks", ur: "چاہے", ar: "ابتغى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "VIII" } },
      { arabic: "وَرَاءَ", transliteration: "warāʾa", root: null, meaning: { en: "beyond", ur: "علاوہ", ar: "وراء" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "that", ur: "اس کے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "فَأُولَـٰئِكَ", transliteration: "fa-ulāʾika", root: null, meaning: { en: "then those", ur: "تو وہ لوگ", ar: "فأولئك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "هُمُ", transliteration: "humu", root: null, meaning: { en: "they are", ur: "وہ ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "الْعَادُونَ", transliteration: "al-ʿādūna", root: "ع د و", meaning: { en: "the transgressors", ur: "حد سے گزرنے والے", ar: "العادون" }, pos: "N", posLabel: "N", grammar: { role: "predicate", definite: true } }
    ]
  },

  32: {
    ayahNumber: 32,
    text: "وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "And those who", ur: "اور جو", ar: "والذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "هُمْ", transliteration: "hum", root: null, meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لِأَمَانَاتِهِمْ", transliteration: "li-amānātihim", root: "أ م ن", meaning: { en: "to their trusts", ur: "اپنی امانتوں کی", ar: "لأماناتهم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "وَعَهْدِهِمْ", transliteration: "wa-ʿahdihim", root: "ع ه د", meaning: { en: "and their promise", ur: "اور اپنے عہد کی", ar: "وعهدهم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "رَاعُونَ", transliteration: "rāʿūna", root: "ر ع ي", meaning: { en: "are attentive", ur: "رعایت کرتے ہیں", ar: "راعون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  33: {
    ayahNumber: 33,
    text: "وَالَّذِينَ هُم بِشَهَادَاتِهِمْ قَائِمُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "And those who", ur: "اور جو", ar: "والذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "هُم", transliteration: "hum", root: null, meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِشَهَادَاتِهِمْ", transliteration: "bi-shahādātihim", root: "ش ه د", meaning: { en: "in their testimonies", ur: "اپنی گواہیوں پر", ar: "بشهاداتهم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "قَائِمُونَ", transliteration: "qāʾimūna", root: "ق و م", meaning: { en: "upright", ur: "قائم رہتے ہیں", ar: "قائمون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  34: {
    ayahNumber: 34,
    text: "وَالَّذِينَ هُمْ عَلَىٰ صَلَاتِهِمْ يُحَافِظُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", root: null, meaning: { en: "And those who", ur: "اور جو", ar: "والذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "هُمْ", transliteration: "hum", root: null, meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "over", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صَلَاتِهِمْ", transliteration: "ṣalātihim", root: "ص ل و", meaning: { en: "their prayer", ur: "اپنی نمازوں کی", ar: "صلاتهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "يُحَافِظُونَ", transliteration: "yuḥāfiẓūna", root: "ح ف ظ", meaning: { en: "carefully maintain", ur: "محافظت کرتے ہیں", ar: "يحافظون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "III" } }
    ]
  },

  35: {
    ayahNumber: 35,
    text: "أُولَـٰئِكَ فِي جَنَّاتٍ مُّكْرَمُونَ",
    words: [
      { arabic: "أُولَـٰئِكَ", transliteration: "ulāʾika", root: null, meaning: { en: "Those", ur: "یہ لوگ", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", root: "ج ن ن", meaning: { en: "Gardens", ur: "جنتوں", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مُّكْرَمُونَ", transliteration: "mukramūna", root: "ك ر م", meaning: { en: "honored", ur: "عزت والے", ar: "مكرمون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" }, features: { form: "IV passive participle" } }
    ]
  },

  36: {
    ayahNumber: 36,
    text: "فَمَالِ الَّذِينَ كَفَرُوا قِبَلَكَ مُهْطِعِينَ",
    words: [
      { arabic: "فَمَالِ", transliteration: "fa-māli", root: null, meaning: { en: "So what is", ur: "پس کیا ہے", ar: "فمال" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", root: null, meaning: { en: "those who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieved", ur: "کفر کیا", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "قِبَلَكَ", transliteration: "qibalaka", root: "ق ب ل", meaning: { en: "before you", ur: "تیری طرف", ar: "قبلك" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مُهْطِعِينَ", transliteration: "muhṭiʿīna", root: "ه ط ع", meaning: { en: "hastening", ur: "دوڑتے ہوئے", ar: "مهطعين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" }, features: { form: "IV participle" } }
    ]
  },

  37: {
    ayahNumber: 37,
    text: "عَنِ الْيَمِينِ وَعَنِ الشِّمَالِ عِزِينَ",
    words: [
      { arabic: "عَنِ", transliteration: "ʿani", root: null, meaning: { en: "on", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْيَمِينِ", transliteration: "al-yamīni", root: "ي م ن", meaning: { en: "the right", ur: "دائیں", ar: "اليمين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "وَعَنِ", transliteration: "wa-ʿani", root: null, meaning: { en: "and on", ur: "اور سے", ar: "وعن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الشِّمَالِ", transliteration: "al-shimāli", root: "ش م ل", meaning: { en: "the left", ur: "بائیں", ar: "الشمال" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "عِزِينَ", transliteration: "ʿizīna", root: "ع ز و", meaning: { en: "in groups", ur: "ٹولیوں میں", ar: "عزين" }, pos: "N", posLabel: "N", grammar: { role: "ḥāl" } }
    ]
  },

  38: {
    ayahNumber: 38,
    text: "أَيَطْمَعُ كُلُّ امْرِئٍ مِّنْهُمْ أَن يُدْخَلَ جَنَّةَ نَعِيمٍ",
    words: [
      { arabic: "أَيَطْمَعُ", transliteration: "a-yaṭmaʿu", root: "ط م ع", meaning: { en: "Does aspire", ur: "کیا لالچ کرتا ہے", ar: "أيطمع" }, pos: "V", posLabel: "V", grammar: { role: "interrogative verb", tense: "imperfect" } },
      { arabic: "كُلُّ", transliteration: "kullu", root: null, meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "امْرِئٍ", transliteration: "imriʾin", root: "م ر أ", meaning: { en: "person", ur: "آدمی", ar: "امرئ" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "مِّنْهُمْ", transliteration: "minhum", root: null, meaning: { en: "of them", ur: "ان میں سے", ar: "منهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "to", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "يُدْخَلَ", transliteration: "yudkhala", root: "د خ ل", meaning: { en: "be admitted", ur: "داخل کیا جائے", ar: "يدخل" }, pos: "V", posLabel: "V", grammar: { role: "passive", mood: "subjunctive" } },
      { arabic: "جَنَّةَ", transliteration: "jannata", root: "ج ن ن", meaning: { en: "Garden", ur: "جنت", ar: "جنة" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "نَعِيمٍ", transliteration: "naʿīmin", root: "ن ع م", meaning: { en: "of Bliss", ur: "نعمتوں والی", ar: "نعيم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } }
    ]
  },

  39: {
    ayahNumber: 39,
    text: "كَلَّا ۖ إِنَّا خَلَقْنَاهُم مِّمَّا يَعْلَمُونَ",
    words: [
      { arabic: "كَلَّا", transliteration: "kallā", root: null, meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كلا" }, pos: "PART", posLabel: "PART", grammar: { role: "rejection" } },
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "خَلَقْنَاهُم", transliteration: "khalaqnāhum", root: "خ ل ق", meaning: { en: "created them", ur: "انہیں پیدا کیا", ar: "خلقناهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", root: null, meaning: { en: "from what", ur: "اس سے جو", ar: "مما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", root: "ع ل م", meaning: { en: "they know", ur: "وہ جانتے ہیں", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } }
    ]
  },

  40: {
    ayahNumber: 40,
    text: "فَلَا أُقْسِمُ بِرَبِّ الْمَشَارِقِ وَالْمَغَارِبِ إِنَّا لَقَادِرُونَ",
    words: [
      { arabic: "فَلَا", transliteration: "fa-lā", root: null, meaning: { en: "So I swear", ur: "پس میں قسم کھاتا ہوں", ar: "فلا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic oath" } },
      { arabic: "أُقْسِمُ", transliteration: "uqsimu", root: "ق س م", meaning: { en: "I swear", ur: "قسم کھاتا ہوں", ar: "أقسم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "بِرَبِّ", transliteration: "bi-rabbi", root: "ر ب ب", meaning: { en: "by the Lord", ur: "رب کی", ar: "برب" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "الْمَشَارِقِ", transliteration: "al-mashāriqi", root: "ش ر ق", meaning: { en: "of the Easts", ur: "مشرقوں کے", ar: "المشارق" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "وَالْمَغَارِبِ", transliteration: "wa-al-maghāribi", root: "غ ر ب", meaning: { en: "and the Wests", ur: "اور مغربوں کے", ar: "والمغارب" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "Indeed We", ur: "بیشک ہم", ar: "إنا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَقَادِرُونَ", transliteration: "la-qādirūna", root: "ق د ر", meaning: { en: "are able", ur: "قادر ہیں", ar: "لقادرون" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  41: {
    ayahNumber: 41,
    text: "عَلَىٰ أَن نُّبَدِّلَ خَيْرًا مِّنْهُمْ وَمَا نَحْنُ بِمَسْبُوقِينَ",
    words: [
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "to", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَن", transliteration: "an", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "نُّبَدِّلَ", transliteration: "nubaddila", root: "ب د ل", meaning: { en: "We replace", ur: "ہم بدل دیں", ar: "نبدل" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" }, features: { form: "II" } },
      { arabic: "خَيْرًا", transliteration: "khayran", root: "خ ي ر", meaning: { en: "better", ur: "بہتر لوگوں سے", ar: "خيراً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "object" } },
      { arabic: "مِّنْهُمْ", transliteration: "minhum", root: null, meaning: { en: "than them", ur: "ان سے", ar: "منهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَمَا", transliteration: "wa-mā", root: null, meaning: { en: "and not", ur: "اور نہیں", ar: "وما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", root: null, meaning: { en: "We are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِمَسْبُوقِينَ", transliteration: "bi-masbūqīna", root: "س ب ق", meaning: { en: "to be outdone", ur: "عاجز کیے جانے والے", ar: "بمسبوقين" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  42: {
    ayahNumber: 42,
    text: "فَذَرْهُمْ يَخُوضُوا وَيَلْعَبُوا حَتَّىٰ يُلَاقُوا يَوْمَهُمُ الَّذِي يُوعَدُونَ",
    words: [
      { arabic: "فَذَرْهُمْ", transliteration: "fa-dharhum", root: "و ذ ر", meaning: { en: "So leave them", ur: "پس انہیں چھوڑ دو", ar: "فذرهم" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "يَخُوضُوا", transliteration: "yakhūḍū", root: "خ و ض", meaning: { en: "to converse vainly", ur: "باتیں بناتے رہیں", ar: "يخوضوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "وَيَلْعَبُوا", transliteration: "wa-yalʿabū", root: "ل ع ب", meaning: { en: "and amuse themselves", ur: "اور کھیلتے رہیں", ar: "ويلعبوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", root: null, meaning: { en: "until", ur: "یہاں تک کہ", ar: "حتى" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "purpose" } },
      { arabic: "يُلَاقُوا", transliteration: "yulāqū", root: "ل ق ي", meaning: { en: "they meet", ur: "وہ ملیں", ar: "يلاقوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" }, features: { form: "III" } },
      { arabic: "يَوْمَهُمُ", transliteration: "yawmahumu", root: "ي و م", meaning: { en: "their Day", ur: "اپنے دن کو", ar: "يومهم" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "الَّذِي", transliteration: "alladhī", root: null, meaning: { en: "which", ur: "جس کا", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُوعَدُونَ", transliteration: "yūʿadūna", root: "و ع د", meaning: { en: "they are promised", ur: "ان سے وعدہ کیا جاتا ہے", ar: "يوعدون" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" } }
    ]
  },

  43: {
    ayahNumber: 43,
    text: "يَوْمَ يَخْرُجُونَ مِنَ الْأَجْدَاثِ سِرَاعًا كَأَنَّهُمْ إِلَىٰ نُصُبٍ يُوفِضُونَ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "يَخْرُجُونَ", transliteration: "yakhrujūna", root: "خ ر ج", meaning: { en: "they will emerge", ur: "وہ نکلیں گے", ar: "يخرجون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "مِنَ", transliteration: "mina", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَجْدَاثِ", transliteration: "al-ajdāthi", root: "ج د ث", meaning: { en: "the graves", ur: "قبروں", ar: "الأجداث" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "سِرَاعًا", transliteration: "sirāʿan", root: "س ر ع", meaning: { en: "hastening", ur: "تیزی سے", ar: "سراعاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" } },
      { arabic: "كَأَنَّهُمْ", transliteration: "kaʾannahum", root: null, meaning: { en: "as if they", ur: "گویا وہ", ar: "كأنهم" }, pos: "PART", posLabel: "PART", grammar: { role: "simile" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", root: null, meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نُصُبٍ", transliteration: "nuṣubin", root: "ن ص ب", meaning: { en: "an idol/goal", ur: "نشان", ar: "نصب" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "يُوفِضُونَ", transliteration: "yūfiḍūna", root: "و ف ض", meaning: { en: "they hasten", ur: "دوڑ رہے ہیں", ar: "يوفضون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } }
    ]
  },

  44: {
    ayahNumber: 44,
    text: "خَاشِعَةً أَبْصَارُهُمْ تَرْهَقُهُمْ ذِلَّةٌ ۚ ذَٰلِكَ الْيَوْمُ الَّذِي كَانُوا يُوعَدُونَ",
    words: [
      { arabic: "خَاشِعَةً", transliteration: "khāshiʿatan", root: "خ ش ع", meaning: { en: "Humbled", ur: "جھکی ہوئی", ar: "خاشعة" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" } },
      { arabic: "أَبْصَارُهُمْ", transliteration: "abṣāruhum", root: "ب ص ر", meaning: { en: "their eyes", ur: "ان کی نگاہیں", ar: "أبصارهم" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "تَرْهَقُهُمْ", transliteration: "tarhaquhum", root: "ر ه ق", meaning: { en: "covering them", ur: "ان پر چھائی ہوئی", ar: "ترهقهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "ذِلَّةٌ", transliteration: "dhillatun", root: "ذ ل ل", meaning: { en: "humiliation", ur: "ذلت", ar: "ذلة" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", root: null, meaning: { en: "That is", ur: "یہ ہے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "الْيَوْمُ", transliteration: "al-yawmu", root: "ي و م", meaning: { en: "the Day", ur: "وہ دن", ar: "اليوم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", definite: true } },
      { arabic: "الَّذِي", transliteration: "alladhī", root: null, meaning: { en: "which", ur: "جس کا", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَانُوا", transliteration: "kānū", root: "ك و ن", meaning: { en: "they were", ur: "ان سے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "يُوعَدُونَ", transliteration: "yūʿadūna", root: "و ع د", meaning: { en: "being promised", ur: "وعدہ کیا جاتا تھا", ar: "يوعدون" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" } }
    ]
  }
};

export default TREEBANK_DATA;
