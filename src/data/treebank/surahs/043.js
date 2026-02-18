/**
 * Surah Az-Zukhruf (The Ornaments of Gold) - Surah 43
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 43,
  surahName: "Az-Zukhruf",
  surahNameArabic: "الزخرف",
  totalAyahs: 89,
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
    text: "وَالْكِتَابِ الْمُبِينِ",
    words: [
      { arabic: "وَالْكِتَابِ", transliteration: "wal-kitābi", meaning: { en: "By the clear Book", ur: "قسم ہے کتاب کی", ar: "والكتاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ك-ت-ب" } },
      { arabic: "الْمُبِينِ", transliteration: "al-mubīni", meaning: { en: "the clear", ur: "واضح", ar: "المبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ي-ن" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "إِنَّا جَعَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "جَعَلْنَاهُ", transliteration: "jaʿalnāhu", meaning: { en: "made it", ur: "اسے بنایا", ar: "جعلناه" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "قُرْآنًا", transliteration: "qurʾānan", meaning: { en: "a Quran", ur: "قرآن", ar: "قرآنا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } },
      { arabic: "عَرَبِيًّا", transliteration: "ʿarabiyyan", meaning: { en: "Arabic", ur: "عربی", ar: "عربيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "لَّعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that you may", ur: "تاکہ تم", ar: "لعلكم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "expectation particle" } },
      { arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", meaning: { en: "understand", ur: "سمجھو", ar: "تعقلون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ق-ل" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "وَإِنَّهُ فِي أُمِّ الْكِتَابِ لَدَيْنَا لَعَلِيٌّ حَكِيمٌ",
    words: [
      { arabic: "وَإِنَّهُ", transliteration: "wa-innahu", meaning: { en: "And indeed it", ur: "اور بیشک یہ", ar: "وإنه" }, pos: "CONJ+ACC+PRON", posLabel: "CONJ+ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أُمِّ", transliteration: "ummi", meaning: { en: "the Mother", ur: "اصل", ar: "أم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْكِتَابِ", transliteration: "al-kitābi", meaning: { en: "of the Book", ur: "کتاب", ar: "الكتاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ك-ت-ب" } },
      { arabic: "لَدَيْنَا", transliteration: "ladaynā", meaning: { en: "with Us", ur: "ہمارے پاس", ar: "لدينا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "لَعَلِيٌّ", transliteration: "laʿaliyyun", meaning: { en: "surely exalted", ur: "یقیناً بلند ہے", ar: "لعلي" }, pos: "EMPH+ADJ", posLabel: "EMPH+ADJ", grammar: { case: "nominative", root: "ع-ل-و" } },
      { arabic: "حَكِيمٌ", transliteration: "ḥakīmun", meaning: { en: "full of wisdom", ur: "حکمت والا", ar: "حكيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ح-ك-م" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "أَفَنَضْرِبُ عَنكُمُ الذِّكْرَ صَفْحًا أَن كُنتُمْ قَوْمًا مُّسْرِفِينَ",
    words: [
      { arabic: "أَفَنَضْرِبُ", transliteration: "afanaḍribu", meaning: { en: "Should We turn away", ur: "کیا ہم ہٹا لیں", ar: "أفنضرب" }, pos: "INTG+CONJ+V", posLabel: "INTG+CONJ+V", grammar: { form: "I", root: "ض-ر-ب" } },
      { arabic: "عَنكُمُ", transliteration: "ʿankumu", meaning: { en: "from you", ur: "تم سے", ar: "عنكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "الذِّكْرَ", transliteration: "al-dhikra", meaning: { en: "the Reminder", ur: "نصیحت", ar: "الذكر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ذ-ك-ر" } },
      { arabic: "صَفْحًا", transliteration: "ṣafḥan", meaning: { en: "disregarding", ur: "اعراض کرتے ہوئے", ar: "صفحا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ص-ف-ح" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "because", ur: "کیونکہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you are", ur: "تم ہو", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "قَوْمًا", transliteration: "qawman", meaning: { en: "a people", ur: "قوم", ar: "قوما" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مُّسْرِفِينَ", transliteration: "musrifīna", meaning: { en: "transgressing", ur: "حد سے گزرنے والے", ar: "مسرفين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "س-ر-ف" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَكَمْ أَرْسَلْنَا مِن نَّبِيٍّ فِي الْأَوَّلِينَ",
    words: [
      { arabic: "وَكَمْ", transliteration: "wakam", meaning: { en: "And how many", ur: "اور کتنے", ar: "وكم" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم نے بھیجے", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "نَّبِيٍّ", transliteration: "nabiyyin", meaning: { en: "prophet", ur: "نبی", ar: "نبي" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ب-أ" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "among", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīna", meaning: { en: "the former peoples", ur: "اگلوں", ar: "الأولين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", number: "plural" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَمَا يَأْتِيهِم مِّن نَّبِيٍّ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "يَأْتِيهِم", transliteration: "yaʾtīhim", meaning: { en: "came to them", ur: "آیا ان کے پاس", ar: "يأتيهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ت-ي" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "نَّبِيٍّ", transliteration: "nabiyyin", meaning: { en: "prophet", ur: "نبی", ar: "نبي" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ب-أ" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { type: "exception" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they were", ur: "وہ کرتے تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "him", ur: "اس سے", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "يَسْتَهْزِئُونَ", transliteration: "yastahziʾūna", meaning: { en: "mocking", ur: "مذاق اڑاتے", ar: "يستهزئون" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ه-ز-أ" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "فَأَهْلَكْنَا أَشَدَّ مِنْهُم بَطْشًا وَمَضَىٰ مَثَلُ الْأَوَّلِينَ",
    words: [
      { arabic: "فَأَهْلَكْنَا", transliteration: "fa-ahlaknā", meaning: { en: "So We destroyed", ur: "پھر ہم نے ہلاک کر دیا", ar: "فأهلكنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ه-ل-ك" } },
      { arabic: "أَشَدَّ", transliteration: "ashadda", meaning: { en: "stronger", ur: "زیادہ زور آور", ar: "أشد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", elative: true, root: "ش-د-د" } },
      { arabic: "مِنْهُم", transliteration: "minhum", meaning: { en: "than them", ur: "ان سے", ar: "منهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "comparison" } },
      { arabic: "بَطْشًا", transliteration: "baṭshan", meaning: { en: "in power", ur: "طاقت میں", ar: "بطشا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ط-ش" } },
      { arabic: "وَمَضَىٰ", transliteration: "wamaḍā", meaning: { en: "and passed away", ur: "اور گزر گئی", ar: "ومضى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "م-ض-ي" } },
      { arabic: "مَثَلُ", transliteration: "mathalu", meaning: { en: "the example", ur: "مثال", ar: "مثل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-ث-ل" } },
      { arabic: "الْأَوَّلِينَ", transliteration: "al-awwalīna", meaning: { en: "of the former peoples", ur: "اگلوں کی", ar: "الأولين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", number: "plural" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ لَيَقُولُنَّ خَلَقَهُنَّ الْعَزِيزُ الْعَلِيمُ",
    words: [
      { arabic: "وَلَئِن", transliteration: "walaʾin", meaning: { en: "And if", ur: "اور اگر", ar: "ولئن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "سَأَلْتَهُم", transliteration: "saʾaltahum", meaning: { en: "you ask them", ur: "تم ان سے پوچھو", ar: "سألتهم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-أ-ل" } },
      { arabic: "مَّنْ", transliteration: "man", meaning: { en: "Who", ur: "کس نے", ar: "من" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں کو", ar: "السماوات" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین کو", ar: "والأرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "لَيَقُولُنَّ", transliteration: "layaqūlunna", meaning: { en: "they will surely say", ur: "وہ ضرور کہیں گے", ar: "ليقولن" }, pos: "EMPH+V", posLabel: "EMPH+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "خَلَقَهُنَّ", transliteration: "khalaqahunna", meaning: { en: "created them", ur: "انہیں پیدا کیا", ar: "خلقهن" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīzu", meaning: { en: "the Almighty", ur: "غالب نے", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ز-ز" } },
      { arabic: "الْعَلِيمُ", transliteration: "al-ʿalīmu", meaning: { en: "the Knowing", ur: "علم والے نے", ar: "العليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-ل-م" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا وَجَعَلَ لَكُمْ فِيهَا سُبُلًا لَّعَلَّكُمْ تَهْتَدُونَ",
    words: [
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "The One Who", ur: "وہ جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "made", ur: "بنایا", ar: "جعل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍa", meaning: { en: "the earth", ur: "زمین کو", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مَهْدًا", transliteration: "mahdan", meaning: { en: "a bed", ur: "بچھونا", ar: "مهدا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-ه-د" } },
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", meaning: { en: "and made", ur: "اور بنائیں", ar: "وجعل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "سُبُلًا", transliteration: "subulan", meaning: { en: "roads", ur: "راستے", ar: "سبلا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "س-ب-ل" } },
      { arabic: "لَّعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that you may", ur: "تاکہ تم", ar: "لعلكم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "expectation particle" } },
      { arabic: "تَهْتَدُونَ", transliteration: "tahtadūna", meaning: { en: "be guided", ur: "راستہ پاؤ", ar: "تهتدون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ه-د-ي" } }
    ]
  }
};

export default TREEBANK_DATA;
