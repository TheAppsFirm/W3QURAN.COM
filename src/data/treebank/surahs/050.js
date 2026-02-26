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
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 2, to: 7, label: 'عطف' },
        { from: 9, to: 10, label: 'مبتدأ + خبر' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 5, to: 6, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 1, to: 6, label: 'عطف' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'عطف' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "رِّزْقًا لِّلْعِبَادِ وَأَحْيَيْنَا بِهِ بَلْدَةً مَّيْتًا كَذَٰلِكَ الْخُرُوجُ",
    words: [
      { arabic: "رِّزْقًا", transliteration: "rizqan", meaning: { en: "As provision", ur: "رزق" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-ز-ق" } },
      { arabic: "لِّلْعِبَادِ", transliteration: "lil-ʿibādi", meaning: { en: "for the servants", ur: "بندوں کے لیے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَأَحْيَيْنَا", transliteration: "waʾaḥyaynā", meaning: { en: "and We gave life", ur: "اور ہم نے زندہ کیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "thereby", ur: "اس سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "بَلْدَةً", transliteration: "baldatan", meaning: { en: "to a dead land", ur: "مردہ زمین کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ل-د" } },
      { arabic: "مَّيْتًا", transliteration: "maytan", meaning: { en: "dead", ur: "مردہ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "م-و-ت" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "اسی طرح" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الْخُرُوجُ", transliteration: "al-khurūju", meaning: { en: "is the resurrection", ur: "نکلنا ہوگا" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "خ-ر-ج" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَأَصْحَابُ الرَّسِّ وَثَمُودُ",
    words: [
      { arabic: "كَذَّبَتْ", transliteration: "kadhdhabat", meaning: { en: "Denied", ur: "جھٹلایا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب" } },
      { arabic: "قَبْلَهُمْ", transliteration: "qablahum", meaning: { en: "before them", ur: "ان سے پہلے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "temporal" } },
      { arabic: "قَوْمُ", transliteration: "qawmu", meaning: { en: "the people of", ur: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "نُوحٍ", transliteration: "nūḥin", meaning: { en: "Noah", ur: "نوح کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَأَصْحَابُ", transliteration: "waʾaṣḥābu", meaning: { en: "and the companions of", ur: "اور اصحاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "الرَّسِّ", transliteration: "al-rassi", meaning: { en: "the well", ur: "الرس" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَثَمُودُ", transliteration: "wathamūdu", meaning: { en: "and Thamud", ur: "اور ثمود نے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَعَادٌ وَفِرْعَوْنُ وَإِخْوَانُ لُوطٍ",
    words: [
      { arabic: "وَعَادٌ", transliteration: "waʿādun", meaning: { en: "And Aad", ur: "اور عاد نے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "وَفِرْعَوْنُ", transliteration: "wafirʿawnu", meaning: { en: "and Pharaoh", ur: "اور فرعون" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "وَإِخْوَانُ", transliteration: "waʾikhwānu", meaning: { en: "and the brothers of", ur: "اور بھائیوں نے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "لُوطٍ", transliteration: "lūṭin", meaning: { en: "Lot", ur: "لوط کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "وَأَصْحَابُ الْأَيْكَةِ وَقَوْمُ تُبَّعٍ كُلٌّ كَذَّبَ الرُّسُلَ فَحَقَّ وَعِيدِ",
    words: [
      { arabic: "وَأَصْحَابُ", transliteration: "waʾaṣḥābu", meaning: { en: "And the companions of", ur: "اور اصحاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "الْأَيْكَةِ", transliteration: "al-aykati", meaning: { en: "the thicket", ur: "ایکہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَقَوْمُ", transliteration: "waqawmu", meaning: { en: "and the people of", ur: "اور قوم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "تُبَّعٍ", transliteration: "tubbaʿin", meaning: { en: "Tubba", ur: "تبع کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "كُلٌّ", transliteration: "kullun", meaning: { en: "All", ur: "سب نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "كَذَّبَ", transliteration: "kadhdhaba", meaning: { en: "denied", ur: "جھٹلایا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب" } },
      { arabic: "الرُّسُلَ", transliteration: "al-rusula", meaning: { en: "the messengers", ur: "رسولوں کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "فَحَقَّ", transliteration: "faḥaqqa", meaning: { en: "so was justified", ur: "تو ثابت ہوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ح-ق-ق" } },
      { arabic: "وَعِيدِ", transliteration: "waʿīdi", meaning: { en: "My threat", ur: "میرا وعدہ عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ع-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "أَفَعَيِينَا بِالْخَلْقِ الْأَوَّلِ بَلْ هُمْ فِي لَبْسٍ مِّنْ خَلْقٍ جَدِيدٍ",
    words: [
      { arabic: "أَفَعَيِينَا", transliteration: "afaʿayīnā", meaning: { en: "Were We then wearied", ur: "کیا ہم تھک گئے" }, pos: "INTG+CONJ+V", posLabel: "INTG+CONJ+V", grammar: { form: "I", root: "ع-ي-ي" } },
      { arabic: "بِالْخَلْقِ", transliteration: "bil-khalqi", meaning: { en: "by the first creation", ur: "پہلی تخلیق سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الْأَوَّلِ", transliteration: "al-awwali", meaning: { en: "the first", ur: "پہلی" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "بلکہ" }, pos: "PART", posLabel: "PART", grammar: { type: "retraction" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they are", ur: "وہ ہیں" }, pos: "PRON", posLabel: "PRON", grammar: { type: "subject" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "لَبْسٍ", transliteration: "labsin", meaning: { en: "confusion", ur: "شک" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-ب-س" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "about", ur: "بارے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "خَلْقٍ", transliteration: "khalqin", meaning: { en: "a creation", ur: "تخلیق" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "جَدِيدٍ", transliteration: "jadīdin", meaning: { en: "new", ur: "نئی" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بے شک" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "خَلَقْنَا", transliteration: "khalaqnā", meaning: { en: "We created", ur: "ہم نے پیدا کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الْإِنسَانَ", transliteration: "al-insāna", meaning: { en: "man", ur: "انسان کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَنَعْلَمُ", transliteration: "wanaʿlamu", meaning: { en: "and We know", ur: "اور ہم جانتے ہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تُوَسْوِسُ", transliteration: "tuwaswisu", meaning: { en: "whispers", ur: "وسوسہ ڈالتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-س-و-س" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "to him", ur: "اس کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "نَفْسُهُ", transliteration: "nafsuhu", meaning: { en: "his soul", ur: "اس کا نفس" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative" } },
      { arabic: "وَنَحْنُ", transliteration: "wanaḥnu", meaning: { en: "and We are", ur: "اور ہم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "أَقْرَبُ", transliteration: "aqrabu", meaning: { en: "nearer", ur: "زیادہ قریب ہیں" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ق-ر-ب" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "to him", ur: "اس سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "than", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "comparison" } },
      { arabic: "حَبْلِ", transliteration: "ḥabli", meaning: { en: "the vein", ur: "رگ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْوَرِيدِ", transliteration: "al-warīdi", meaning: { en: "jugular", ur: "گلے کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ر-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 6, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مبتدأ + خبر' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "إِذْ يَتَلَقَّى الْمُتَلَقِّيَانِ عَنِ الْيَمِينِ وَعَنِ الشِّمَالِ قَعِيدٌ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "يَتَلَقَّى", transliteration: "yatalaqqā", meaning: { en: "receive", ur: "ضبط کرتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ل-ق-ي" } },
      { arabic: "الْمُتَلَقِّيَانِ", transliteration: "al-mutalaqiyāni", meaning: { en: "the two receivers", ur: "دو لکھنے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "dual", root: "ل-ق-ي" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "on", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "position" } },
      { arabic: "الْيَمِينِ", transliteration: "al-yamīni", meaning: { en: "the right", ur: "دائیں" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَعَنِ", transliteration: "waʿani", meaning: { en: "and on", ur: "اور سے" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "position" } },
      { arabic: "الشِّمَالِ", transliteration: "al-shimāli", meaning: { en: "the left", ur: "بائیں" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قَعِيدٌ", transliteration: "qaʿīdun", meaning: { en: "a companion seated", ur: "بیٹھا ہوا ہے" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ق-ع-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ",
    words: [
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يَلْفِظُ", transliteration: "yalfiẓu", meaning: { en: "he utters", ur: "بولتا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ل-ف-ظ" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "قَوْلٍ", transliteration: "qawlin", meaning: { en: "word", ur: "بات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-ل" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "لَدَيْهِ", transliteration: "ladayhi", meaning: { en: "with him is", ur: "اس کے پاس" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "رَقِيبٌ", transliteration: "raqībun", meaning: { en: "an observer", ur: "نگران ہے" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ر-ق-ب" } },
      { arabic: "عَتِيدٌ", transliteration: "ʿatīdun", meaning: { en: "prepared", ur: "تیار" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ت-د" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَجَاءَتْ سَكْرَةُ الْمَوْتِ بِالْحَقِّ ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ",
    words: [
      { arabic: "وَجَاءَتْ", transliteration: "wajāʾat", meaning: { en: "And will come", ur: "اور آ گئی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "سَكْرَةُ", transliteration: "sakratu", meaning: { en: "the intoxication", ur: "بےہوشی" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ك-ر" } },
      { arabic: "الْمَوْتِ", transliteration: "al-mawti", meaning: { en: "of death", ur: "موت کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-و-ت" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "in truth", ur: "حق کے ساتھ" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ ہے وہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "which", ur: "جس سے" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "كُنتَ", transliteration: "kunta", meaning: { en: "you were", ur: "تو تھا" }, pos: "V", posLabel: "V", grammar: { type: "kāna", root: "ك-و-ن" } },
      { arabic: "مِنْهُ", transliteration: "minhu", meaning: { en: "from it", ur: "اس سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "separation" } },
      { arabic: "تَحِيدُ", transliteration: "taḥīdu", meaning: { en: "fleeing", ur: "بھاگتا تھا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ح-ي-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'موصول + صلة' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَنُفِخَ فِي الصُّورِ ذَٰلِكَ يَوْمُ الْوَعِيدِ",
    words: [
      { arabic: "وَنُفِخَ", transliteration: "wanufikha", meaning: { en: "And the Horn will be blown", ur: "اور صور پھونکا جائے گا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", voice: "passive", root: "ن-ف-خ" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "instrument" } },
      { arabic: "الصُّورِ", transliteration: "al-ṣūri", meaning: { en: "the Horn", ur: "صور" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "يَوْمُ", transliteration: "yawmu", meaning: { en: "the Day", ur: "دن" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْوَعِيدِ", transliteration: "al-waʿīdi", meaning: { en: "of the Threat", ur: "وعدہ عذاب کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "و-ع-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "وَجَاءَتْ كُلُّ نَفْسٍ مَّعَهَا سَائِقٌ وَشَهِيدٌ",
    words: [
      { arabic: "وَجَاءَتْ", transliteration: "wajāʾat", meaning: { en: "And every soul will come", ur: "اور آئے گی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "نَفْسٍ", transliteration: "nafsin", meaning: { en: "soul", ur: "جان" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَّعَهَا", transliteration: "maʿahā", meaning: { en: "with it", ur: "اس کے ساتھ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "accompaniment" } },
      { arabic: "سَائِقٌ", transliteration: "sāʾiqun", meaning: { en: "a driver", ur: "ہانکنے والا" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "س-و-ق" } },
      { arabic: "وَشَهِيدٌ", transliteration: "washahīdun", meaning: { en: "and a witness", ur: "اور گواہ" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", root: "ش-ه-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'عطف' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "لَّقَدْ كُنتَ فِي غَفْلَةٍ مِّنْ هَٰذَا فَكَشَفْنَا عَنكَ غِطَاءَكَ فَبَصَرُكَ الْيَوْمَ حَدِيدٌ",
    words: [
      { arabic: "لَّقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "بے شک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "كُنتَ", transliteration: "kunta", meaning: { en: "you were", ur: "تو تھا" }, pos: "V", posLabel: "V", grammar: { type: "kāna", root: "ك-و-ن" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "غَفْلَةٍ", transliteration: "ghaflatin", meaning: { en: "heedlessness", ur: "غفلت" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-ف-ل" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "اس" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "فَكَشَفْنَا", transliteration: "fakashafnā", meaning: { en: "So We removed", ur: "تو ہم نے ہٹا دیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-ش-ف" } },
      { arabic: "عَنكَ", transliteration: "ʿanka", meaning: { en: "from you", ur: "تجھ سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "separation" } },
      { arabic: "غِطَاءَكَ", transliteration: "ghiṭāʾaka", meaning: { en: "your cover", ur: "تیرا پردہ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "فَبَصَرُكَ", transliteration: "fabaṣaruka", meaning: { en: "so your sight", ur: "تو تیری نظر" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "nominative" } },
      { arabic: "الْيَوْمَ", transliteration: "al-yawma", meaning: { en: "today", ur: "آج" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "حَدِيدٌ", transliteration: "ḥadīdun", meaning: { en: "is sharp", ur: "تیز ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-د-د" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 9, label: 'فعل + مفعول به' },
        { from: 10, to: 12, label: 'مبتدأ + خبر' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "وَقَالَ قَرِينُهُ هَٰذَا مَا لَدَيَّ عَتِيدٌ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And his companion will say", ur: "اور اس کا ساتھی کہے گا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "قَرِينُهُ", transliteration: "qarīnuhu", meaning: { en: "his companion", ur: "اس کا ساتھی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ق-ر-ن" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "لَدَيَّ", transliteration: "ladayya", meaning: { en: "is with me", ur: "میرے پاس" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "عَتِيدٌ", transliteration: "ʿatīdun", meaning: { en: "prepared", ur: "تیار ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ت-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مبتدأ + خبر' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "أَلْقِيَا فِي جَهَنَّمَ كُلَّ كَفَّارٍ عَنِيدٍ",
    words: [
      { arabic: "أَلْقِيَا", transliteration: "alqiyā", meaning: { en: "Throw", ur: "ڈال دو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ل-ق-ي", mood: "imperative", number: "dual" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "Hell", ur: "جہنم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "كَفَّارٍ", transliteration: "kaffārin", meaning: { en: "obstinate disbeliever", ur: "بڑے کافر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ك-ف-ر" } },
      { arabic: "عَنِيدٍ", transliteration: "ʿanīdin", meaning: { en: "stubborn", ur: "ہٹ دھرم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ن-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "مَّنَّاعٍ لِّلْخَيْرِ مُعْتَدٍ مُّرِيبٍ",
    words: [
      { arabic: "مَّنَّاعٍ", transliteration: "mannāʿin", meaning: { en: "Preventer", ur: "روکنے والا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ن-ع" } },
      { arabic: "لِّلْخَيْرِ", transliteration: "lil-khayri", meaning: { en: "of good", ur: "بھلائی سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "مُعْتَدٍ", transliteration: "muʿtadin", meaning: { en: "transgressor", ur: "حد سے گزرنے والا" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ع-د-و" } },
      { arabic: "مُّرِيبٍ", transliteration: "murībin", meaning: { en: "doubter", ur: "شک کرنے والا" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ر-ي-ب" } }
    ],
    structure: { relationships: [] }
  },

  26: {
    ayahNumber: 26,
    text: "الَّذِي جَعَلَ مَعَ اللَّهِ إِلَٰهًا آخَرَ فَأَلْقِيَاهُ فِي الْعَذَابِ الشَّدِيدِ",
    words: [
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جس نے" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "made", ur: "بنایا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "مَعَ", transliteration: "maʿa", meaning: { en: "with", ur: "ساتھ" }, pos: "P", posLabel: "P", grammar: { role: "accompaniment" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "إِلَٰهًا", transliteration: "ilāhan", meaning: { en: "another deity", ur: "دوسرا معبود" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "آخَرَ", transliteration: "ākhara", meaning: { en: "another", ur: "اور" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "فَأَلْقِيَاهُ", transliteration: "faʾalqiyāhu", meaning: { en: "so throw him", ur: "تو ڈال دو اسے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "ل-ق-ي", mood: "imperative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الْعَذَابِ", transliteration: "al-ʿadhābi", meaning: { en: "the punishment", ur: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الشَّدِيدِ", transliteration: "al-shadīdi", meaning: { en: "the severe", ur: "سخت" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ش-د-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 5, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "قَالَ قَرِينُهُ رَبَّنَا مَا أَطْغَيْتُهُ وَلَٰكِن كَانَ فِي ضَلَالٍ بَعِيدٍ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "His companion will say", ur: "اس کا ساتھی کہے گا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "قَرِينُهُ", transliteration: "qarīnuhu", meaning: { en: "his companion", ur: "اس کا ساتھی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ق-ر-ن" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "اے ہمارے رب" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "I did not", ur: "میں نے نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "أَطْغَيْتُهُ", transliteration: "aṭghaytuhu", meaning: { en: "make him transgress", ur: "اسے سرکش بنایا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ط-غ-ي" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "adversative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "he was", ur: "وہ تھا" }, pos: "V", posLabel: "V", grammar: { type: "kāna", root: "ك-و-ن" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "ضَلَالٍ", transliteration: "ḍalālin", meaning: { en: "an error", ur: "گمراہی" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ض-ل-ل" } },
      { arabic: "بَعِيدٍ", transliteration: "baʿīdin", meaning: { en: "extreme", ur: "دور" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "قَالَ لَا تَخْتَصِمُوا لَدَيَّ وَقَدْ قَدَّمْتُ إِلَيْكُم بِالْوَعِيدِ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He will say", ur: "فرمائے گا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Do not", ur: "مت" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibition" } },
      { arabic: "تَخْتَصِمُوا", transliteration: "takhtaṣimū", meaning: { en: "dispute", ur: "جھگڑو" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "خ-ص-م", mood: "jussive" } },
      { arabic: "لَدَيَّ", transliteration: "ladayya", meaning: { en: "before Me", ur: "میرے سامنے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "وَقَدْ", transliteration: "waqad", meaning: { en: "while I had", ur: "حالانکہ" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "قَدَّمْتُ", transliteration: "qaddamtu", meaning: { en: "already presented", ur: "پہلے ہی بھیج چکا ہوں" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ق-د-م" } },
      { arabic: "إِلَيْكُم", transliteration: "ilaykum", meaning: { en: "to you", ur: "تمہیں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "بِالْوَعِيدِ", transliteration: "bil-waʿīdi", meaning: { en: "the warning", ur: "وعدہ عذاب" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "و-ع-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "مَا يُبَدَّلُ الْقَوْلُ لَدَيَّ وَمَا أَنَا بِظَلَّامٍ لِّلْعَبِيدِ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negation" } },
      { arabic: "يُبَدَّلُ", transliteration: "yubaddalu", meaning: { en: "is changed", ur: "بدلی جاتی" }, pos: "V", posLabel: "V", grammar: { form: "II", voice: "passive", root: "ب-د-ل" } },
      { arabic: "الْقَوْلُ", transliteration: "al-qawlu", meaning: { en: "the word", ur: "بات" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-ل" } },
      { arabic: "لَدَيَّ", transliteration: "ladayya", meaning: { en: "with Me", ur: "میرے یہاں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and I am not", ur: "اور نہیں ہوں میں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَنَا", transliteration: "anā", meaning: { en: "I", ur: "میں" }, pos: "PRON", posLabel: "PRON", grammar: { type: "subject" } },
      { arabic: "بِظَلَّامٍ", transliteration: "biẓallāmin", meaning: { en: "unjust", ur: "ظلم کرنے والا" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ظ-ل-م" } },
      { arabic: "لِّلْعَبِيدِ", transliteration: "lil-ʿabīdi", meaning: { en: "to the servants", ur: "بندوں پر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "يَوْمَ نَقُولُ لِجَهَنَّمَ هَلِ امْتَلَأْتِ وَتَقُولُ هَلْ مِن مَّزِيدٍ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "نَقُولُ", transliteration: "naqūlu", meaning: { en: "We will say", ur: "ہم کہیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لِجَهَنَّمَ", transliteration: "lijahannama", meaning: { en: "to Hell", ur: "جہنم سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "هَلِ", transliteration: "hali", meaning: { en: "Have you", ur: "کیا تو" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "امْتَلَأْتِ", transliteration: "imtalaʾti", meaning: { en: "been filled", ur: "بھر گئی" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "م-ل-أ" } },
      { arabic: "وَتَقُولُ", transliteration: "wataqūlu", meaning: { en: "and it will say", ur: "اور وہ کہے گی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Is there", ur: "کیا ہے" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کچھ" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مَّزِيدٍ", transliteration: "mazīdin", meaning: { en: "more", ur: "مزید" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ز-ي-د" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "وَأُزْلِفَتِ الْجَنَّةُ لِلْمُتَّقِينَ غَيْرَ بَعِيدٍ",
    words: [
      { arabic: "وَأُزْلِفَتِ", transliteration: "waʾuzlifati", meaning: { en: "And Paradise will be brought near", ur: "اور قریب کر دی جائے گی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", voice: "passive", root: "ز-ل-ف" } },
      { arabic: "الْجَنَّةُ", transliteration: "al-jannatu", meaning: { en: "Paradise", ur: "جنت" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لِلْمُتَّقِينَ", transliteration: "lil-muttaqīna", meaning: { en: "to the righteous", ur: "پرہیزگاروں کے لیے" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural", root: "و-ق-ي" } },
      { arabic: "غَيْرَ", transliteration: "ghayra", meaning: { en: "not", ur: "نہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بَعِيدٍ", transliteration: "baʿīdin", meaning: { en: "far off", ur: "دور" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "هَٰذَا مَا تُوعَدُونَ لِكُلِّ أَوَّابٍ حَفِيظٍ",
    words: [
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", meaning: { en: "you were promised", ur: "تم سے وعدہ کیا جاتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ع-د" } },
      { arabic: "لِكُلِّ", transliteration: "likulli", meaning: { en: "for every", ur: "ہر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "أَوَّابٍ", transliteration: "awwābin", meaning: { en: "one who returns", ur: "رجوع کرنے والے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-و-ب" } },
      { arabic: "حَفِيظٍ", transliteration: "ḥafīẓin", meaning: { en: "keeper", ur: "محفوظ رکھنے والے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ح-ف-ظ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "مَّنْ خَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ وَجَاءَ بِقَلْبٍ مُّنِيبٍ",
    words: [
      { arabic: "مَّنْ", transliteration: "man", meaning: { en: "Who", ur: "جس نے" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "خَشِيَ", transliteration: "khashiya", meaning: { en: "feared", ur: "ڈرا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ش-ي" } },
      { arabic: "الرَّحْمَٰنَ", transliteration: "al-raḥmāna", meaning: { en: "the Most Merciful", ur: "رحمان سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِالْغَيْبِ", transliteration: "bil-ghaybi", meaning: { en: "unseen", ur: "بن دیکھے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَجَاءَ", transliteration: "wajāʾa", meaning: { en: "and came", ur: "اور لایا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "بِقَلْبٍ", transliteration: "biqalbin", meaning: { en: "with a heart", ur: "دل کے ساتھ" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "مُّنِيبٍ", transliteration: "munībin", meaning: { en: "repentant", ur: "رجوع کرنے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ن-و-ب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "ادْخُلُوهَا بِسَلَامٍ ذَٰلِكَ يَوْمُ الْخُلُودِ",
    words: [
      { arabic: "ادْخُلُوهَا", transliteration: "udkhulūhā", meaning: { en: "Enter it", ur: "داخل ہو جاؤ اس میں" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "د-خ-ل", mood: "imperative" } },
      { arabic: "بِسَلَامٍ", transliteration: "bisalāmin", meaning: { en: "in peace", ur: "سلامتی سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "يَوْمُ", transliteration: "yawmu", meaning: { en: "the Day", ur: "دن" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْخُلُودِ", transliteration: "al-khulūdi", meaning: { en: "of Eternity", ur: "ہمیشگی کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ل-د" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "لَهُم مَّا يَشَاءُونَ فِيهَا وَلَدَيْنَا مَزِيدٌ",
    words: [
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "For them", ur: "ان کے لیے ہے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "whatever", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُونَ", transliteration: "yashāʾūna", meaning: { en: "they wish", ur: "وہ چاہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "وَلَدَيْنَا", transliteration: "waladaynā", meaning: { en: "and with Us", ur: "اور ہمارے پاس" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { role: "possession" } },
      { arabic: "مَزِيدٌ", transliteration: "mazīdun", meaning: { en: "is more", ur: "مزید ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ز-ي-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "وَكَمْ أَهْلَكْنَا قَبْلَهُم مِّن قَرْنٍ هُمْ أَشَدُّ مِنْهُم بَطْشًا فَنَقَّبُوا فِي الْبِلَادِ هَلْ مِن مَّحِيصٍ",
    words: [
      { arabic: "وَكَمْ", transliteration: "wakam", meaning: { en: "And how many", ur: "اور کتنی" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { type: "numerical" } },
      { arabic: "أَهْلَكْنَا", transliteration: "ahlaknā", meaning: { en: "We destroyed", ur: "ہم نے ہلاک کیا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ه-ل-ك" } },
      { arabic: "قَبْلَهُم", transliteration: "qablahum", meaning: { en: "before them", ur: "ان سے پہلے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "temporal" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "قَرْنٍ", transliteration: "qarnin", meaning: { en: "a generation", ur: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "who were", ur: "جو تھے" }, pos: "PRON", posLabel: "PRON", grammar: { type: "subject" } },
      { arabic: "أَشَدُّ", transliteration: "ashaddu", meaning: { en: "greater", ur: "زیادہ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ش-د-د" } },
      { arabic: "مِنْهُم", transliteration: "minhum", meaning: { en: "than them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "comparison" } },
      { arabic: "بَطْشًا", transliteration: "baṭshan", meaning: { en: "in striking power", ur: "طاقت میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ط-ش" } },
      { arabic: "فَنَقَّبُوا", transliteration: "fanaqqabū", meaning: { en: "and they had explored", ur: "تو پھرے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ن-ق-ب" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "through", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الْبِلَادِ", transliteration: "al-bilādi", meaning: { en: "the lands", ur: "ملکوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Is there", ur: "کیا ہے" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مَّحِيصٍ", transliteration: "maḥīṣin", meaning: { en: "place of escape", ur: "بچاؤ کی جگہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ي-ص" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُ قَلْبٌ أَوْ أَلْقَى السَّمْعَ وَهُوَ شَهِيدٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک" }, pos: "EMPH", posLabel: "EMPH", grammar: { type: "emphasis" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "لَذِكْرَىٰ", transliteration: "ladhikrā", meaning: { en: "is a reminder", ur: "نصیحت ہے" }, pos: "PART+N", posLabel: "PART+N", grammar: { case: "accusative", root: "ذ-ك-ر" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "for whoever", ur: "اس کے لیے جس" }, pos: "P+REL", posLabel: "P+REL", grammar: { role: "dative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "has", ur: "رکھتا ہو" }, pos: "V", posLabel: "V", grammar: { type: "kāna", root: "ك-و-ن" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "قَلْبٌ", transliteration: "qalbun", meaning: { en: "a heart", ur: "دل ہو" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "أَلْقَى", transliteration: "alqā", meaning: { en: "he gave", ur: "لگائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ل-ق-ي" } },
      { arabic: "السَّمْعَ", transliteration: "al-samʿa", meaning: { en: "attention", ur: "کان" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "while he is", ur: "اور وہ ہو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "circumstantial" } },
      { arabic: "شَهِيدٌ", transliteration: "shahīdun", meaning: { en: "a witness", ur: "حاضر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ش-ه-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + مفعول به' },
        { from: 12, to: 13, label: 'مبتدأ + خبر' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ وَمَا مَسَّنَا مِن لُّغُوبٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بے شک" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "خَلَقْنَا", transliteration: "khalaqnā", meaning: { en: "We created", ur: "ہم نے پیدا کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور جو کچھ" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "between them", ur: "ان کے درمیان ہے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "سِتَّةِ", transliteration: "sittati", meaning: { en: "six", ur: "چھ" }, pos: "NUM", posLabel: "NUM", grammar: { case: "genitive" } },
      { arabic: "أَيَّامٍ", transliteration: "ayyāmin", meaning: { en: "days", ur: "دنوں میں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "مَسَّنَا", transliteration: "massanā", meaning: { en: "touched Us", ur: "ہمیں لگی" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-س-س" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "لُّغُوبٍ", transliteration: "lughūbin", meaning: { en: "fatigue", ur: "تھکاوٹ" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-غ-ب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "فَاصْبِرْ عَلَىٰ مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ الْغُرُوبِ",
    words: [
      { arabic: "فَاصْبِرْ", transliteration: "faṣbir", meaning: { en: "So be patient", ur: "پس صبر کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-ب-ر", mood: "imperative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "cause" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "they say", ur: "یہ کہتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "وَسَبِّحْ", transliteration: "wasabbiḥ", meaning: { en: "and exalt", ur: "اور تسبیح کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "س-ب-ح", mood: "imperative" } },
      { arabic: "بِحَمْدِ", transliteration: "biḥamdi", meaning: { en: "with praise", ur: "حمد کے ساتھ" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-م-د" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "اپنے رب کی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "قَبْلَ", transliteration: "qabla", meaning: { en: "before", ur: "سے پہلے" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "طُلُوعِ", transliteration: "ṭulūʿi", meaning: { en: "the rising", ur: "نکلنے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ط-ل-ع" } },
      { arabic: "الشَّمْسِ", transliteration: "al-shamsi", meaning: { en: "of the sun", ur: "سورج کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَقَبْلَ", transliteration: "waqabla", meaning: { en: "and before", ur: "اور پہلے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "الْغُرُوبِ", transliteration: "al-ghurūbi", meaning: { en: "sunset", ur: "غروب سے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "غ-ر-ب" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "وَمِنَ اللَّيْلِ فَسَبِّحْهُ وَأَدْبَارَ السُّجُودِ",
    words: [
      { arabic: "وَمِنَ", transliteration: "wamina", meaning: { en: "And in part of", ur: "اور رات کے" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "temporal" } },
      { arabic: "اللَّيْلِ", transliteration: "al-layli", meaning: { en: "the night", ur: "رات" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَسَبِّحْهُ", transliteration: "fasabbiḥhu", meaning: { en: "exalt Him", ur: "تسبیح کرو اس کی" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "س-ب-ح", mood: "imperative" } },
      { arabic: "وَأَدْبَارَ", transliteration: "waʾadbāra", meaning: { en: "and after", ur: "اور بعد" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "السُّجُودِ", transliteration: "al-sujūdi", meaning: { en: "the prostrations", ur: "سجدوں کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-ج-د" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "وَاسْتَمِعْ يَوْمَ يُنَادِ الْمُنَادِ مِن مَّكَانٍ قَرِيبٍ",
    words: [
      { arabic: "وَاسْتَمِعْ", transliteration: "wastamiʿ", meaning: { en: "And listen", ur: "اور سنو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "س-م-ع", mood: "imperative" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "the Day", ur: "جس دن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "يُنَادِ", transliteration: "yunādi", meaning: { en: "will call", ur: "پکارے گا" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ن-د-و" } },
      { arabic: "الْمُنَادِ", transliteration: "al-munādi", meaning: { en: "the caller", ur: "پکارنے والا" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ن-د-و" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "مَّكَانٍ", transliteration: "makānin", meaning: { en: "a place", ur: "جگہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قَرِيبٍ", transliteration: "qarībin", meaning: { en: "near", ur: "قریب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ق-ر-ب" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "يَوْمَ يَسْمَعُونَ الصَّيْحَةَ بِالْحَقِّ ذَٰلِكَ يَوْمُ الْخُرُوجِ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", meaning: { en: "they will hear", ur: "سنیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-م-ع" } },
      { arabic: "الصَّيْحَةَ", transliteration: "al-ṣayḥata", meaning: { en: "the blast", ur: "چیخ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "in truth", ur: "حق کے ساتھ" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "وہ ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "يَوْمُ", transliteration: "yawmu", meaning: { en: "the Day", ur: "دن" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْخُرُوجِ", transliteration: "al-khurūji", meaning: { en: "of Emergence", ur: "نکلنے کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ر-ج" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "إِنَّا نَحْنُ نُحْيِي وَنُمِيتُ وَإِلَيْنَا الْمَصِيرُ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed We", ur: "بے شک ہم ہی" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { type: "emphasis" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "emphasis" } },
      { arabic: "نُحْيِي", transliteration: "nuḥyī", meaning: { en: "give life", ur: "زندہ کرتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "وَنُمِيتُ", transliteration: "wanumītu", meaning: { en: "and cause death", ur: "اور مارتے ہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "م-و-ت" } },
      { arabic: "وَإِلَيْنَا", transliteration: "wailaynā", meaning: { en: "and to Us is", ur: "اور ہماری طرف" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "direction" } },
      { arabic: "الْمَصِيرُ", transliteration: "al-maṣīru", meaning: { en: "the destination", ur: "لوٹنا ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ص-ي-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "يَوْمَ تَشَقَّقُ الْأَرْضُ عَنْهُمْ سِرَاعًا ذَٰلِكَ حَشْرٌ عَلَيْنَا يَسِيرٌ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "تَشَقَّقُ", transliteration: "tashaqqaqu", meaning: { en: "will split open", ur: "پھٹ جائے گی" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ش-ق-ق" } },
      { arabic: "الْأَرْضُ", transliteration: "al-arḍu", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "away from them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "separation" } },
      { arabic: "سِرَاعًا", transliteration: "sirāʿan", meaning: { en: "rapidly", ur: "جلدی جلدی" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ر-ع" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "حَشْرٌ", transliteration: "ḥashrun", meaning: { en: "is a gathering", ur: "جمع کرنا ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-ش-ر" } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", meaning: { en: "for Us", ur: "ہمارے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "affected" } },
      { arabic: "يَسِيرٌ", transliteration: "yasīrun", meaning: { en: "easy", ur: "آسان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ي-س-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ وَمَا أَنتَ عَلَيْهِم بِجَبَّارٍ فَذَكِّرْ بِالْقُرْآنِ مَن يَخَافُ وَعِيدِ",
    words: [
      { arabic: "نَّحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "subject" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", meaning: { en: "are most knowing", ur: "خوب جانتے ہیں" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "they say", ur: "یہ کہتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and you are not", ur: "اور نہیں ہو تم" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "subject" } },
      { arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "ان پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "authority" } },
      { arabic: "بِجَبَّارٍ", transliteration: "bijabbārin", meaning: { en: "a compeller", ur: "جبر کرنے والے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ج-ب-ر" } },
      { arabic: "فَذَكِّرْ", transliteration: "fadhakkir", meaning: { en: "But remind", ur: "پس نصیحت کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ذ-ك-ر", mood: "imperative" } },
      { arabic: "بِالْقُرْآنِ", transliteration: "bil-qurʾāni", meaning: { en: "with the Quran", ur: "قرآن سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whoever", ur: "اس کو جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَخَافُ", transliteration: "yakhāfu", meaning: { en: "fears", ur: "ڈرتا ہو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-و-ف" } },
      { arabic: "وَعِيدِ", transliteration: "waʿīdi", meaning: { en: "My threat", ur: "میری وعید سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ع-د" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'فعل + مفعول به' }
      ]
    }
  }
};

export default TREEBANK_DATA;
