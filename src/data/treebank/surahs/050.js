/**
 * Surah Qaf - Surah 50
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 50,
  surahName: "Qaf",
  surahNameArabic: "ق",
  totalAyahs: 45,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "ق وَالْقُرْآنِ الْمَجِيدِ",
    words: [
      { arabic: "ق", transliteration: "qāf", meaning: { en: "Qaf", ur: "قاف" }, pos: "INIT", posLabel: "INIT", grammar: { type: "muqattaʿat", note: "disconnected letter" } },
      { arabic: "وَالْقُرْآنِ", transliteration: "wal-qurʾāni", meaning: { en: "By the Quran", ur: "قرآن کی قسم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", role: "oath" } },
      { arabic: "الْمَجِيدِ", transliteration: "al-majīdi", meaning: { en: "the Glorious", ur: "بزرگی والے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "م-ج-د" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "بَلْ عَجِبُوا أَن جَاءَهُم مُّنذِرٌ مِّنْهُمْ فَقَالَ الْكَافِرُونَ هَٰذَا شَيْءٌ عَجِيبٌ",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "But", ur: "بلکہ" }, pos: "PART", posLabel: "PART", grammar: { type: "retraction" } },
      { arabic: "عَجِبُوا", transliteration: "ʿajibū", meaning: { en: "they wonder", ur: "یہ تعجب کرتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ج-ب" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "جَاءَهُم", transliteration: "jāʾahum", meaning: { en: "has come to them", ur: "ان کے پاس آیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "مُّنذِرٌ", transliteration: "mundhirun", meaning: { en: "a warner", ur: "ڈرانے والا" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ن-ذ-ر" } },
      { arabic: "مِّنْهُمْ", transliteration: "minhum", meaning: { en: "from among them", ur: "انہی میں سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "partitive" } },
      { arabic: "فَقَالَ", transliteration: "faqāla", meaning: { en: "so say", ur: "تو کہتے ہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الْكَافِرُونَ", transliteration: "al-kāfirūna", meaning: { en: "the disbelievers", ur: "کافر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "شَيْءٌ", transliteration: "shayʾun", meaning: { en: "a thing", ur: "بات" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَجِيبٌ", transliteration: "ʿajībun", meaning: { en: "strange", ur: "عجیب ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ج-ب" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا ذَٰلِكَ رَجْعٌ بَعِيدٌ",
    words: [
      { arabic: "أَإِذَا", transliteration: "a-idhā", meaning: { en: "When", ur: "کیا جب" }, pos: "INTG+COND", posLabel: "INTG+COND", grammar: { type: "interrogative-temporal" } },
      { arabic: "مِتْنَا", transliteration: "mitnā", meaning: { en: "we have died", ur: "ہم مر جائیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-و-ت" } },
      { arabic: "وَكُنَّا", transliteration: "wakunnā", meaning: { en: "and become", ur: "اور ہو جائیں گے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "تُرَابًا", transliteration: "turāban", meaning: { en: "dust", ur: "مٹی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "رَجْعٌ", transliteration: "rajʿun", meaning: { en: "is a return", ur: "لوٹنا" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ج-ع" } },
      { arabic: "بَعِيدٌ", transliteration: "baʿīdun", meaning: { en: "remote", ur: "بعید ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "قَدْ عَلِمْنَا مَا تَنقُصُ الْأَرْضُ مِنْهُمْ وَعِندَنَا كِتَابٌ حَفِيظٌ",
    words: [
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "Certainly", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "عَلِمْنَا", transliteration: "ʿalimnā", meaning: { en: "We know", ur: "ہم جانتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م", person: "1st", number: "plural" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَنقُصُ", transliteration: "tanquṣu", meaning: { en: "diminishes", ur: "کم کرتی ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ق-ص" } },
      { arabic: "الْأَرْضُ", transliteration: "al-arḍu", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مِنْهُمْ", transliteration: "minhum", meaning: { en: "of them", ur: "ان میں سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "partitive" } },
      { arabic: "وَعِندَنَا", transliteration: "waʿindanā", meaning: { en: "and with Us", ur: "اور ہمارے پاس" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { role: "possession" } },
      { arabic: "كِتَابٌ", transliteration: "kitābun", meaning: { en: "is a record", ur: "کتاب ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "حَفِيظٌ", transliteration: "ḥafīẓun", meaning: { en: "that preserves", ur: "محفوظ کرنے والی" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-ف-ظ" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "بَلْ كَذَّبُوا بِالْحَقِّ لَمَّا جَاءَهُمْ فَهُمْ فِي أَمْرٍ مَّرِيجٍ",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "But", ur: "بلکہ" }, pos: "PART", posLabel: "PART", grammar: { type: "retraction" } },
      { arabic: "كَذَّبُوا", transliteration: "kadhdhabū", meaning: { en: "they denied", ur: "انہوں نے جھٹلایا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "the truth", ur: "حق کو" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "جَاءَهُمْ", transliteration: "jāʾahum", meaning: { en: "it came to them", ur: "ان کے پاس آیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "فَهُمْ", transliteration: "fahum", meaning: { en: "so they", ur: "تو وہ ہیں" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "resultative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "أَمْرٍ", transliteration: "amrin", meaning: { en: "a matter", ur: "معاملے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَّرِيجٍ", transliteration: "marījin", meaning: { en: "confused", ur: "پراگندہ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "م-ر-ج" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "أَفَلَمْ يَنظُرُوا إِلَى السَّمَاءِ فَوْقَهُمْ كَيْفَ بَنَيْنَاهَا وَزَيَّنَّاهَا وَمَا لَهَا مِن فُرُوجٍ",
    words: [
      { arabic: "أَفَلَمْ", transliteration: "afalam", meaning: { en: "Have they not", ur: "کیا نہیں" }, pos: "INTG+CONJ+NEG", posLabel: "INTG+CONJ+NEG", grammar: { type: "rhetorical" } },
      { arabic: "يَنظُرُوا", transliteration: "yanẓurū", meaning: { en: "looked", ur: "دیکھا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ظ-ر", mood: "jussive" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "at", ur: "کی طرف" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "the heaven", ur: "آسمان" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَوْقَهُمْ", transliteration: "fawqahum", meaning: { en: "above them", ur: "اپنے اوپر" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "کیسے" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "بَنَيْنَاهَا", transliteration: "banaynāhā", meaning: { en: "We built it", ur: "ہم نے بنایا اسے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ب-ن-ي" } },
      { arabic: "وَزَيَّنَّاهَا", transliteration: "wazayyannāhā", meaning: { en: "and adorned it", ur: "اور سجایا اسے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ز-ي-ن" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں ہے" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "لَهَا", transliteration: "lahā", meaning: { en: "for it", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "فُرُوجٍ", transliteration: "furūjin", meaning: { en: "rifts", ur: "درز" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَالْأَرْضَ مَدَدْنَاهَا وَأَلْقَيْنَا فِيهَا رَوَاسِيَ وَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ بَهِيجٍ",
    words: [
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "And the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "مَدَدْنَاهَا", transliteration: "madadnāhā", meaning: { en: "We spread it", ur: "ہم نے پھیلایا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "م-د-د" } },
      { arabic: "وَأَلْقَيْنَا", transliteration: "waʾalqaynā", meaning: { en: "and cast", ur: "اور ڈال دیے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ل-ق-ي" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "رَوَاسِيَ", transliteration: "rawāsiya", meaning: { en: "firmly set mountains", ur: "پہاڑ" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَأَنبَتْنَا", transliteration: "waʾanbatnā", meaning: { en: "and caused to grow", ur: "اور اگایا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ن-ب-ت" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "زَوْجٍ", transliteration: "zawjin", meaning: { en: "kind", ur: "قسم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "بَهِيجٍ", transliteration: "bahījin", meaning: { en: "beautiful", ur: "خوشنما" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ه-ج" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "تَبْصِرَةً وَذِكْرَىٰ لِكُلِّ عَبْدٍ مُّنِيبٍ",
    words: [
      { arabic: "تَبْصِرَةً", transliteration: "tabṣiratan", meaning: { en: "As insight", ur: "بصیرت دینے کے لیے" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ص-ر" } },
      { arabic: "وَذِكْرَىٰ", transliteration: "wadhikrā", meaning: { en: "and a reminder", ur: "اور یاد دہانی" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ذ-ك-ر" } },
      { arabic: "لِكُلِّ", transliteration: "likulli", meaning: { en: "for every", ur: "ہر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "عَبْدٍ", transliteration: "ʿabdin", meaning: { en: "servant", ur: "بندے کے لیے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مُّنِيبٍ", transliteration: "munībin", meaning: { en: "who turns", ur: "رجوع کرنے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ن-و-ب" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "وَنَزَّلْنَا مِنَ السَّمَاءِ مَاءً مُّبَارَكًا فَأَنبَتْنَا بِهِ جَنَّاتٍ وَحَبَّ الْحَصِيدِ",
    words: [
      { arabic: "وَنَزَّلْنَا", transliteration: "wanazzalnā", meaning: { en: "And We sent down", ur: "اور ہم نے اتارا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ن-ز-ل" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "the heaven", ur: "آسمان" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَاءً", transliteration: "māʾan", meaning: { en: "water", ur: "پانی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مُّبَارَكًا", transliteration: "mubārakan", meaning: { en: "blessed", ur: "برکت والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ب-ر-ك" } },
      { arabic: "فَأَنبَتْنَا", transliteration: "faʾanbatnā", meaning: { en: "and caused to grow", ur: "پھر ہم نے اگائے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ن-ب-ت" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "thereby", ur: "اس سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "gardens", ur: "باغات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَحَبَّ", transliteration: "waḥabba", meaning: { en: "and grain", ur: "اور اناج" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "الْحَصِيدِ", transliteration: "al-ḥaṣīdi", meaning: { en: "to be harvested", ur: "کاٹنے والا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ص-د" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَالنَّخْلَ بَاسِقَاتٍ لَّهَا طَلْعٌ نَّضِيدٌ",
    words: [
      { arabic: "وَالنَّخْلَ", transliteration: "wal-nakhla", meaning: { en: "And tall palm trees", ur: "اور کھجور کے درخت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "بَاسِقَاتٍ", transliteration: "bāsiqātin", meaning: { en: "towering", ur: "اونچے اونچے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ب-س-ق" } },
      { arabic: "لَّهَا", transliteration: "lahā", meaning: { en: "having", ur: "جن کے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "طَلْعٌ", transliteration: "ṭalʿun", meaning: { en: "fruit arranged", ur: "خوشے ہیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "نَّضِيدٌ", transliteration: "naḍīdun", meaning: { en: "in layers", ur: "تہ بہ تہ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ن-ض-د" } }
    ]
  }
};

export default TREEBANK_DATA;
