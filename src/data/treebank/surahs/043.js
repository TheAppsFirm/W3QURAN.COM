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
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "وَالْكِتَابِ الْمُبِينِ",
    words: [
      { arabic: "وَالْكِتَابِ", transliteration: "wal-kitābi", meaning: { en: "By the clear Book", ur: "قسم ہے کتاب کی", ar: "والكتاب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ك-ت-ب" } },
      { arabic: "الْمُبِينِ", transliteration: "al-mubīni", meaning: { en: "the clear", ur: "واضح", ar: "المبين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 6, to: 8, label: 'حال' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 1, to: 5, label: 'عطف' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 6, label: 'عطف' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "وَٱلَّذِى نَزَّلَ مِنَ ٱلسَّمَآءِ مَآءًۢ بِقَدَرٍۢ فَأَنشَرْنَا بِهِۦ بَلْدَةًۭ مَّيْتًۭا ۚ كَذَٰلِكَ تُخْرَجُونَ",
    words: [
      { arabic: "وَٱلَّذِى", transliteration: "wa-alladhī", meaning: { en: "And the One Who", ur: "اور the One جو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَزَّلَ", transliteration: "nazzala", meaning: { en: "sends down", ur: "sends down" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", meaning: { en: "the sky", ur: "the sky" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآءًۢ", transliteration: "māan", meaning: { en: "water", ur: "پانی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِقَدَرٍۢ", transliteration: "biqadarin", meaning: { en: "in (due) measure", ur: "میں (due) measure" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فَأَنشَرْنَا", transliteration: "fa-ansharnā", meaning: { en: "then We revive", ur: "پھر ہم revive" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with it", ur: "ساتھ it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "بَلْدَةًۭ", transliteration: "baldatan", meaning: { en: "a land", ur: "a land" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّيْتًۭا ۚ", transliteration: "maytan", meaning: { en: "dead", ur: "dead" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "thus", ur: "thus" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُخْرَجُونَ", transliteration: "tukh'rajūna", meaning: { en: "you will be brought forth", ur: "تم will be brought forth" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  12: {
    ayahNumber: 12,
    text: "وَٱلَّذِى خَلَقَ ٱلْأَزْوَٰجَ كُلَّهَا وَجَعَلَ لَكُم مِّنَ ٱلْفُلْكِ وَٱلْأَنْعَـٰمِ مَا تَرْكَبُونَ",
    words: [
      { arabic: "وَٱلَّذِى", transliteration: "wa-alladhī", meaning: { en: "And the One Who", ur: "اور the One جو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "created", ur: "پیدا کیا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَزْوَٰجَ", transliteration: "l-azwāja", meaning: { en: "the pairs", ur: "the pairs" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلَّهَا", transliteration: "kullahā", meaning: { en: "all of them", ur: "سب of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", meaning: { en: "and made", ur: "اور made" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "[of]", ur: "[of]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْفُلْكِ", transliteration: "l-ful'ki", meaning: { en: "the ships", ur: "the ships" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَنْعَـٰمِ", transliteration: "wal-anʿāmi", meaning: { en: "and the cattle", ur: "اور the cattle" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَرْكَبُونَ", transliteration: "tarkabūna", meaning: { en: "you ride", ur: "تم ride" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'موصول + صلة' }
      ],
    },
  },
  13: {
    ayahNumber: 13,
    text: "لِتَسْتَوُۥا۟ عَلَىٰ ظُهُورِهِۦ ثُمَّ تَذْكُرُوا۟ نِعْمَةَ رَبِّكُمْ إِذَا ٱسْتَوَيْتُمْ عَلَيْهِ وَتَقُولُوا۟ سُبْحَـٰنَ ٱلَّذِى سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُۥ مُقْرِنِينَ",
    words: [
      { arabic: "لِتَسْتَوُۥا۟", transliteration: "litastawū", meaning: { en: "That you may sit firmly", ur: "وہ تم may sit firmly" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ظُهُورِهِۦ", transliteration: "ẓuhūrihi", meaning: { en: "their backs", ur: "their backs" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَذْكُرُوا۟", transliteration: "tadhkurū", meaning: { en: "remember", ur: "remember" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نِعْمَةَ", transliteration: "niʿ'mata", meaning: { en: "(the) favor", ur: "(the) favor" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّكُمْ", transliteration: "rabbikum", meaning: { en: "(of) your Lord", ur: "(of) your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتَوَيْتُمْ", transliteration: "is'tawaytum", meaning: { en: "you sit firmly", ur: "تم sit firmly" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "on them", ur: "پر them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَتَقُولُوا۟", transliteration: "wataqūlū", meaning: { en: "and say", ur: "اور کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "سُبْحَـٰنَ", transliteration: "sub'ḥāna", meaning: { en: "Glory be (to)", ur: "Glory be (کو)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "the One Who", ur: "the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَخَّرَ", transliteration: "sakhara", meaning: { en: "(has) subjected", ur: "(has) subjected" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "to us", ur: "کو us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "we were", ur: "ہم were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "of it", ur: "of it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُقْرِنِينَ", transliteration: "muq'rinīna", meaning: { en: "capable", ur: "capable" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'موصوف + صفت' }
      ],
    },
  },
  14: {
    ayahNumber: 14,
    text: "وَإِنَّآ إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
    words: [
      { arabic: "وَإِنَّآ", transliteration: "wa-innā", meaning: { en: "And indeed, we", ur: "اور بیشک, ہم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّنَا", transliteration: "rabbinā", meaning: { en: "our Lord", ur: "our رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمُنقَلِبُونَ", transliteration: "lamunqalibūna", meaning: { en: "will surely return", ur: "will یقیناً return" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  15: {
    ayahNumber: 15,
    text: "وَجَعَلُوا۟ لَهُۥ مِنْ عِبَادِهِۦ جُزْءًا ۚ إِنَّ ٱلْإِنسَـٰنَ لَكَفُورٌۭ مُّبِينٌ",
    words: [
      { arabic: "وَجَعَلُوا۟", transliteration: "wajaʿalū", meaning: { en: "But they attribute", ur: "لیکن وہ لوگ attribute" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "to Him", ur: "کو Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِبَادِهِۦ", transliteration: "ʿibādihi", meaning: { en: "His slaves", ur: "His slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جُزْءًا ۚ", transliteration: "juz'an", meaning: { en: "a portion", ur: "a portion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْإِنسَـٰنَ", transliteration: "l-insāna", meaning: { en: "man", ur: "man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكَفُورٌۭ", transliteration: "lakafūrun", meaning: { en: "surely (is) clearly ungrateful", ur: "یقیناً (is) clearly ungrateful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "surely (is) clearly ungrateful", ur: "یقیناً (is) clearly ungrateful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  16: {
    ayahNumber: 16,
    text: "أَمِ ٱتَّخَذَ مِمَّا يَخْلُقُ بَنَاتٍۢ وَأَصْفَىٰكُم بِٱلْبَنِينَ",
    words: [
      { arabic: "أَمِ", transliteration: "ami", meaning: { en: "Or", ur: "یا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", meaning: { en: "has He taken", ur: "has وہ taken" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِمَّا", transliteration: "mimmā", meaning: { en: "of what", ur: "of کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَخْلُقُ", transliteration: "yakhluqu", meaning: { en: "He has created", ur: "وہ has پیدا کیا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَنَاتٍۢ", transliteration: "banātin", meaning: { en: "daughters", ur: "daughters" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَصْفَىٰكُم", transliteration: "wa-aṣfākum", meaning: { en: "and He has chosen (for) you", ur: "اور وہ has chosen (for) تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِٱلْبَنِينَ", transliteration: "bil-banīna", meaning: { en: "sons", ur: "sons" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  17: {
    ayahNumber: 17,
    text: "وَإِذَا بُشِّرَ أَحَدُهُم بِمَا ضَرَبَ لِلرَّحْمَـٰنِ مَثَلًۭا ظَلَّ وَجْهُهُۥ مُسْوَدًّۭا وَهُوَ كَظِيمٌ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بُشِّرَ", transliteration: "bushira", meaning: { en: "is given good news", ur: "is given اچھا news" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَحَدُهُم", transliteration: "aḥaduhum", meaning: { en: "(to) one of them", ur: "(کو) one of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "of کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ضَرَبَ", transliteration: "ḍaraba", meaning: { en: "he sets up", ur: "وہ sets up" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلرَّحْمَـٰنِ", transliteration: "lilrraḥmāni", meaning: { en: "for the Most Gracious", ur: "for the بڑا مہربان" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَثَلًۭا", transliteration: "mathalan", meaning: { en: "(as) a likeness", ur: "(as) a likeness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَلَّ", transliteration: "ẓalla", meaning: { en: "becomes", ur: "becomes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجْهُهُۥ", transliteration: "wajhuhu", meaning: { en: "his face", ur: "his face" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُسْوَدًّۭا", transliteration: "mus'waddan", meaning: { en: "dark", ur: "dark" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and he", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَظِيمٌ", transliteration: "kaẓīmun", meaning: { en: "(is) filled with grief", ur: "(is) filled ساتھ grief" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  18: {
    ayahNumber: 18,
    text: "أَوَمَن يُنَشَّؤُا۟ فِى ٱلْحِلْيَةِ وَهُوَ فِى ٱلْخِصَامِ غَيْرُ مُبِينٍۢ",
    words: [
      { arabic: "أَوَمَن", transliteration: "awaman", meaning: { en: "Then (is one) who", ur: "پھر (is one) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُنَشَّؤُا۟", transliteration: "yunasha-u", meaning: { en: "is brought up", ur: "is brought up" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْحِلْيَةِ", transliteration: "l-ḥil'yati", meaning: { en: "ornaments", ur: "ornaments" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and he", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْخِصَامِ", transliteration: "l-khiṣāmi", meaning: { en: "the dispute", ur: "the dispute" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", meaning: { en: "(is) not", ur: "(is) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُبِينٍۢ", transliteration: "mubīnin", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  19: {
    ayahNumber: 19,
    text: "وَجَعَلُوا۟ ٱلْمَلَـٰٓئِكَةَ ٱلَّذِينَ هُمْ عِبَـٰدُ ٱلرَّحْمَـٰنِ إِنَـٰثًا ۚ أَشَهِدُوا۟ خَلْقَهُمْ ۚ سَتُكْتَبُ شَهَـٰدَتُهُمْ وَيُسْـَٔلُونَ",
    words: [
      { arabic: "وَجَعَلُوا۟", transliteration: "wajaʿalū", meaning: { en: "And they made", ur: "اور وہ لوگ made" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْمَلَـٰٓئِكَةَ", transliteration: "l-malāikata", meaning: { en: "the Angels", ur: "the Angels" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "themselves", ur: "themselves" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عِبَـٰدُ", transliteration: "ʿibādu", meaning: { en: "(are) slaves", ur: "(are) slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", meaning: { en: "(of) the Most Gracious", ur: "(of) the بڑا مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "إِنَـٰثًا ۚ", transliteration: "ināthan", meaning: { en: "females", ur: "females" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَشَهِدُوا۟", transliteration: "ashahidū", meaning: { en: "Did they witness", ur: "Did وہ لوگ witness" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَلْقَهُمْ ۚ", transliteration: "khalqahum", meaning: { en: "their creation", ur: "their تخلیق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَتُكْتَبُ", transliteration: "satuk'tabu", meaning: { en: "Will be recorded", ur: "Will be recorded" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شَهَـٰدَتُهُمْ", transliteration: "shahādatuhum", meaning: { en: "their testimony", ur: "their testimony" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيُسْـَٔلُونَ", transliteration: "wayus'alūna", meaning: { en: "and they will be questioned", ur: "اور وہ لوگ will be questioned" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  20: {
    ayahNumber: 20,
    text: "وَقَالُوا۟ لَوْ شَآءَ ٱلرَّحْمَـٰنُ مَا عَبَدْنَـٰهُم ۗ مَّا لَهُم بِذَٰلِكَ مِنْ عِلْمٍ ۖ إِنْ هُمْ إِلَّا يَخْرُصُونَ",
    words: [
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If", ur: "If" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَآءَ", transliteration: "shāa", meaning: { en: "had willed", ur: "had willed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "we would not have worshipped them", ur: "ہم would نہیں have worshipped them" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "عَبَدْنَـٰهُم ۗ", transliteration: "ʿabadnāhum", meaning: { en: "we would not have worshipped them", ur: "ہم would نہیں have worshipped them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "they have", ur: "وہ لوگ have" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِذَٰلِكَ", transliteration: "bidhālika", meaning: { en: "about that", ur: "about وہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِلْمٍ ۖ", transliteration: "ʿil'min", meaning: { en: "knowledge", ur: "knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Nothing", ur: "Nothing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they (do)", ur: "وہ لوگ (do)" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَخْرُصُونَ", transliteration: "yakhruṣūna", meaning: { en: "lie", ur: "lie" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  21: {
    ayahNumber: 21,
    text: "أَمْ ءَاتَيْنَـٰهُمْ كِتَـٰبًۭا مِّن قَبْلِهِۦ فَهُم بِهِۦ مُسْتَمْسِكُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "ءَاتَيْنَـٰهُمْ", transliteration: "ātaynāhum", meaning: { en: "have We given them", ur: "have ہم given them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كِتَـٰبًۭا", transliteration: "kitāban", meaning: { en: "a book", ur: "a کتاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before it", ur: "پہلے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلِهِۦ", transliteration: "qablihi", meaning: { en: "before it", ur: "پہلے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَهُم", transliteration: "fahum", meaning: { en: "so they", ur: "so وہ لوگ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "to it", ur: "کو it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مُسْتَمْسِكُونَ", transliteration: "mus'tamsikūna", meaning: { en: "(are) holding fast", ur: "(are) holding fast" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  22: {
    ayahNumber: 22,
    text: "بَلْ قَالُوٓا۟ إِنَّا وَجَدْنَآ ءَابَآءَنَا عَلَىٰٓ أُمَّةٍۢ وَإِنَّا عَلَىٰٓ ءَاثَـٰرِهِم مُّهْتَدُونَ",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "قَالُوٓا۟", transliteration: "qālū", meaning: { en: "they say", ur: "وہ لوگ کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَدْنَآ", transliteration: "wajadnā", meaning: { en: "[we] found", ur: "[ہم] found" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَابَآءَنَا", transliteration: "ābāanā", meaning: { en: "our forefathers", ur: "our forefathers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰٓ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", meaning: { en: "a religion", ur: "a religion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّا", transliteration: "wa-innā", meaning: { en: "and indeed, we", ur: "اور بیشک, ہم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَىٰٓ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَاثَـٰرِهِم", transliteration: "āthārihim", meaning: { en: "their footsteps", ur: "their footsteps" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّهْتَدُونَ", transliteration: "muh'tadūna", meaning: { en: "(are) guided", ur: "(are) guided" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  23: {
    ayahNumber: 23,
    text: "وَكَذَٰلِكَ مَآ أَرْسَلْنَا مِن قَبْلِكَ فِى قَرْيَةٍۢ مِّن نَّذِيرٍ إِلَّا قَالَ مُتْرَفُوهَآ إِنَّا وَجَدْنَآ ءَابَآءَنَا عَلَىٰٓ أُمَّةٍۢ وَإِنَّا عَلَىٰٓ ءَاثَـٰرِهِم مُّقْتَدُونَ",
    words: [
      { arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", meaning: { en: "And thus", ur: "اور thus" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَآ", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before you", ur: "پہلے تم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِكَ", transliteration: "qablika", meaning: { en: "before you", ur: "پہلے تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَرْيَةٍۢ", transliteration: "qaryatin", meaning: { en: "a town", ur: "a town" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّذِيرٍ", transliteration: "nadhīrin", meaning: { en: "warner", ur: "warner" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "said", ur: "کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُتْرَفُوهَآ", transliteration: "mut'rafūhā", meaning: { en: "(the) wealthy ones of it", ur: "(the) wealthy ones of it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَدْنَآ", transliteration: "wajadnā", meaning: { en: "[we] found", ur: "[ہم] found" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَابَآءَنَا", transliteration: "ābāanā", meaning: { en: "our forefathers", ur: "our forefathers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰٓ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةٍۢ", transliteration: "ummatin", meaning: { en: "a religion", ur: "a religion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّا", transliteration: "wa-innā", meaning: { en: "and indeed, we", ur: "اور بیشک, ہم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَىٰٓ", transliteration: "ʿalā", meaning: { en: "[on]", ur: "[پر]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَاثَـٰرِهِم", transliteration: "āthārihim", meaning: { en: "their footsteps", ur: "their footsteps" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّقْتَدُونَ", transliteration: "muq'tadūna", meaning: { en: "(are) following", ur: "(are) following" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  24: {
    ayahNumber: 24,
    text: "۞ قَـٰلَ أَوَلَوْ جِئْتُكُم بِأَهْدَىٰ مِمَّا وَجَدتُّمْ عَلَيْهِ ءَابَآءَكُمْ ۖ قَالُوٓا۟ إِنَّا بِمَآ أُرْسِلْتُم بِهِۦ كَـٰفِرُونَ",
    words: [
      { arabic: "۞ قَـٰلَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَوَلَوْ", transliteration: "awalaw", meaning: { en: "Even if", ur: "Even if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جِئْتُكُم", transliteration: "ji'tukum", meaning: { en: "I brought you", ur: "میں brought تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِأَهْدَىٰ", transliteration: "bi-ahdā", meaning: { en: "better guidance", ur: "better guidance" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِمَّا", transliteration: "mimmā", meaning: { en: "than what", ur: "than کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَدتُّمْ", transliteration: "wajadttum", meaning: { en: "you found", ur: "تم found" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "on it", ur: "پر it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَابَآءَكُمْ ۖ", transliteration: "ābāakum", meaning: { en: "your forefathers", ur: "your forefathers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوٓا۟", transliteration: "qālū", meaning: { en: "They said", ur: "وہ لوگ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَآ", transliteration: "bimā", meaning: { en: "with what", ur: "ساتھ کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أُرْسِلْتُم", transliteration: "ur'sil'tum", meaning: { en: "you are sent", ur: "تم are sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with [it]", ur: "ساتھ [it]" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَـٰفِرُونَ", transliteration: "kāfirūna", meaning: { en: "(are) disbelievers", ur: "(are) کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  25: {
    ayahNumber: 25,
    text: "فَٱنتَقَمْنَا مِنْهُمْ ۖ فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُكَذِّبِينَ",
    words: [
      { arabic: "فَٱنتَقَمْنَا", transliteration: "fa-intaqamnā", meaning: { en: "So We took retribution", ur: "So ہم took retribution" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مِنْهُمْ ۖ", transliteration: "min'hum", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", meaning: { en: "Then see", ur: "پھر دیکھنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "how" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", meaning: { en: "(the) end", ur: "(the) end" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُكَذِّبِينَ", transliteration: "l-mukadhibīna", meaning: { en: "(of) the deniers", ur: "(of) the deniers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  26: {
    ayahNumber: 26,
    text: "وَإِذْ قَالَ إِبْرَٰهِيمُ لِأَبِيهِ وَقَوْمِهِۦٓ إِنَّنِى بَرَآءٌۭ مِّمَّا تَعْبُدُونَ",
    words: [
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "Ibrahim Said", ur: "Ibrahim کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِبْرَٰهِيمُ", transliteration: "ib'rāhīmu", meaning: { en: "Ibrahim Said", ur: "Ibrahim کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِأَبِيهِ", transliteration: "li-abīhi", meaning: { en: "to his father", ur: "کو his باپ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَقَوْمِهِۦٓ", transliteration: "waqawmihi", meaning: { en: "and his people", ur: "اور his لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِنَّنِى", transliteration: "innanī", meaning: { en: "Indeed, I (am)", ur: "بیشک, میں (am)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَرَآءٌۭ", transliteration: "barāon", meaning: { en: "disassociated", ur: "disassociated" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from what", ur: "سے کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", meaning: { en: "you worship", ur: "تم عبادت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  27: {
    ayahNumber: 27,
    text: "إِلَّا ٱلَّذِى فَطَرَنِى فَإِنَّهُۥ سَيَهْدِينِ",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "Except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "the One Who", ur: "the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَطَرَنِى", transliteration: "faṭaranī", meaning: { en: "created me", ur: "پیدا کیا me" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "فَإِنَّهُۥ", transliteration: "fa-innahu", meaning: { en: "and indeed, He", ur: "اور بیشک, وہ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "سَيَهْدِينِ", transliteration: "sayahdīni", meaning: { en: "will guide me", ur: "will guide me" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  28: {
    ayahNumber: 28,
    text: "وَجَعَلَهَا كَلِمَةًۢ بَاقِيَةًۭ فِى عَقِبِهِۦ لَعَلَّهُمْ يَرْجِعُونَ",
    words: [
      { arabic: "وَجَعَلَهَا", transliteration: "wajaʿalahā", meaning: { en: "And he made it", ur: "اور وہ made it" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَلِمَةًۢ", transliteration: "kalimatan", meaning: { en: "a word", ur: "a word" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَاقِيَةًۭ", transliteration: "bāqiyatan", meaning: { en: "lasting", ur: "lasting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "among", ur: "among" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَقِبِهِۦ", transliteration: "ʿaqibihi", meaning: { en: "his descendents", ur: "his descendents" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", meaning: { en: "return", ur: "return" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  29: {
    ayahNumber: 29,
    text: "بَلْ مَتَّعْتُ هَـٰٓؤُلَآءِ وَءَابَآءَهُمْ حَتَّىٰ جَآءَهُمُ ٱلْحَقُّ وَرَسُولٌۭ مُّبِينٌۭ",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "مَتَّعْتُ", transliteration: "mattaʿtu", meaning: { en: "I gave enjoyment", ur: "میں gave enjoyment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", meaning: { en: "(to) these", ur: "(کو) these" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَءَابَآءَهُمْ", transliteration: "waābāahum", meaning: { en: "and their forefathers", ur: "اور their forefathers" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "until" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَهُمُ", transliteration: "jāahumu", meaning: { en: "came to them", ur: "came کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", meaning: { en: "the truth", ur: "the سچ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَسُولٌۭ", transliteration: "warasūlun", meaning: { en: "and a Messenger", ur: "اور a رسول" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُّبِينٌۭ", transliteration: "mubīnun", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  30: {
    ayahNumber: 30,
    text: "وَلَمَّا جَآءَهُمُ ٱلْحَقُّ قَالُوا۟ هَـٰذَا سِحْرٌۭ وَإِنَّا بِهِۦ كَـٰفِرُونَ",
    words: [
      { arabic: "وَلَمَّا", transliteration: "walammā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "جَآءَهُمُ", transliteration: "jāahumu", meaning: { en: "came to them", ur: "came کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", meaning: { en: "the truth", ur: "the سچ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "they said", ur: "وہ لوگ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سِحْرٌۭ", transliteration: "siḥ'run", meaning: { en: "(is) magic", ur: "(is) magic" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّا", transliteration: "wa-innā", meaning: { en: "and indeed, we", ur: "اور بیشک, ہم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "of it", ur: "of it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَـٰفِرُونَ", transliteration: "kāfirūna", meaning: { en: "(are) disbelievers", ur: "(are) کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  31: {
    ayahNumber: 31,
    text: "وَقَالُوا۟ لَوْلَا نُزِّلَ هَـٰذَا ٱلْقُرْءَانُ عَلَىٰ رَجُلٍۢ مِّنَ ٱلْقَرْيَتَيْنِ عَظِيمٍ",
    words: [
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَوْلَا", transliteration: "lawlā", meaning: { en: "Why not", ur: "Why نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُزِّلَ", transliteration: "nuzzila", meaning: { en: "was sent down", ur: "was sent down" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقُرْءَانُ", transliteration: "l-qur'ānu", meaning: { en: "the Quran", ur: "the Quran" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَجُلٍۢ", transliteration: "rajulin", meaning: { en: "a man", ur: "a man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقَرْيَتَيْنِ", transliteration: "l-qaryatayni", meaning: { en: "the two towns", ur: "the two towns" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَظِيمٍ", transliteration: "ʿaẓīmin", meaning: { en: "great", ur: "great" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  32: {
    ayahNumber: 32,
    text: "أَهُمْ يَقْسِمُونَ رَحْمَتَ رَبِّكَ ۚ نَحْنُ قَسَمْنَا بَيْنَهُم مَّعِيشَتَهُمْ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا ۚ وَرَفَعْنَا بَعْضَهُمْ فَوْقَ بَعْضٍۢ دَرَجَـٰتٍۢ لِّيَتَّخِذَ بَعْضُهُم بَعْضًۭا سُخْرِيًّۭا ۗ وَرَحْمَتُ رَبِّكَ خَيْرٌۭ مِّمَّا يَجْمَعُونَ",
    words: [
      { arabic: "أَهُمْ", transliteration: "ahum", meaning: { en: "Do they", ur: "Do وہ لوگ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَقْسِمُونَ", transliteration: "yaqsimūna", meaning: { en: "distribute", ur: "distribute" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَحْمَتَ", transliteration: "raḥmata", meaning: { en: "(the) Mercy", ur: "(the) رحمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّكَ ۚ", transliteration: "rabbika", meaning: { en: "(of) your Lord", ur: "(of) your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "قَسَمْنَا", transliteration: "qasamnā", meaning: { en: "[We] distribute", ur: "[ہم] distribute" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنَهُم", transliteration: "baynahum", meaning: { en: "among them", ur: "among them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّعِيشَتَهُمْ", transliteration: "maʿīshatahum", meaning: { en: "their livelihood", ur: "their livelihood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", meaning: { en: "the life", ur: "the زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا ۚ", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "(of) the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَفَعْنَا", transliteration: "warafaʿnā", meaning: { en: "and We raise", ur: "اور ہم raise" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَعْضَهُمْ", transliteration: "baʿḍahum", meaning: { en: "some of them", ur: "some of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَوْقَ", transliteration: "fawqa", meaning: { en: "above", ur: "above" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بَعْضٍۢ", transliteration: "baʿḍin", meaning: { en: "others", ur: "others" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَرَجَـٰتٍۢ", transliteration: "darajātin", meaning: { en: "(in) degrees", ur: "(میں) degrees" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّيَتَّخِذَ", transliteration: "liyattakhidha", meaning: { en: "so that may take", ur: "so وہ may take" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْضُهُم", transliteration: "baʿḍuhum", meaning: { en: "some of them", ur: "some of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْضًۭا", transliteration: "baʿḍan", meaning: { en: "others", ur: "others" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سُخْرِيًّۭا ۗ", transliteration: "sukh'riyyan", meaning: { en: "(for) service", ur: "(for) service" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَحْمَتُ", transliteration: "waraḥmatu", meaning: { en: "But (the) Mercy", ur: "لیکن (the) رحمت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "(of) your Lord", ur: "(of) your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَيْرٌۭ", transliteration: "khayrun", meaning: { en: "(is) better", ur: "(is) better" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "than what", ur: "than کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَجْمَعُونَ", transliteration: "yajmaʿūna", meaning: { en: "they accumulate", ur: "وہ لوگ accumulate" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  33: {
    ayahNumber: 33,
    text: "وَلَوْلَآ أَن يَكُونَ ٱلنَّاسُ أُمَّةًۭ وَٰحِدَةًۭ لَّجَعَلْنَا لِمَن يَكْفُرُ بِٱلرَّحْمَـٰنِ لِبُيُوتِهِمْ سُقُفًۭا مِّن فِضَّةٍۢ وَمَعَارِجَ عَلَيْهَا يَظْهَرُونَ",
    words: [
      { arabic: "وَلَوْلَآ", transliteration: "walawlā", meaning: { en: "And if not", ur: "اور if نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَكُونَ", transliteration: "yakūna", meaning: { en: "(would) become", ur: "(would) become" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", meaning: { en: "[the] mankind", ur: "[the] mankind" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُمَّةًۭ", transliteration: "ummatan", meaning: { en: "a community", ur: "a community" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدَةًۭ", transliteration: "wāḥidatan", meaning: { en: "one", ur: "one" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَّجَعَلْنَا", transliteration: "lajaʿalnā", meaning: { en: "We (would have) made", ur: "ہم (would have) made" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "for (one) who", ur: "for (one) جو" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "يَكْفُرُ", transliteration: "yakfuru", meaning: { en: "disbelieves", ur: "disbelieves" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلرَّحْمَـٰنِ", transliteration: "bil-raḥmāni", meaning: { en: "in the Most Gracious", ur: "میں the بڑا مہربان" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لِبُيُوتِهِمْ", transliteration: "libuyūtihim", meaning: { en: "for their houses", ur: "for their houses" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "سُقُفًۭا", transliteration: "suqufan", meaning: { en: "roofs", ur: "roofs" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِضَّةٍۢ", transliteration: "fiḍḍatin", meaning: { en: "silver", ur: "silver" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَعَارِجَ", transliteration: "wamaʿārija", meaning: { en: "and stairways", ur: "اور stairways" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "upon which", ur: "پر جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَظْهَرُونَ", transliteration: "yaẓharūna", meaning: { en: "they mount", ur: "وہ لوگ mount" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  34: {
    ayahNumber: 34,
    text: "وَلِبُيُوتِهِمْ أَبْوَٰبًۭا وَسُرُرًا عَلَيْهَا يَتَّكِـُٔونَ",
    words: [
      { arabic: "وَلِبُيُوتِهِمْ", transliteration: "walibuyūtihim", meaning: { en: "And for their houses", ur: "اور for their houses" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَبْوَٰبًۭا", transliteration: "abwāban", meaning: { en: "doors", ur: "doors" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَسُرُرًا", transliteration: "wasururan", meaning: { en: "and couches", ur: "اور couches" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "upon which", ur: "پر جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَّكِـُٔونَ", transliteration: "yattakiūna", meaning: { en: "they recline", ur: "وہ لوگ recline" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  35: {
    ayahNumber: 35,
    text: "وَزُخْرُفًۭا ۚ وَإِن كُلُّ ذَٰلِكَ لَمَّا مَتَـٰعُ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۚ وَٱلْـَٔاخِرَةُ عِندَ رَبِّكَ لِلْمُتَّقِينَ",
    words: [
      { arabic: "وَزُخْرُفًۭا ۚ", transliteration: "wazukh'rufan", meaning: { en: "And ornaments of gold", ur: "اور ornaments of gold" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And not (is)", ur: "اور نہیں (is)" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَتَـٰعُ", transliteration: "matāʿu", meaning: { en: "an enjoyment", ur: "an enjoyment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", meaning: { en: "(of) the life", ur: "(of) the زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا ۚ", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "(of) the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْـَٔاخِرَةُ", transliteration: "wal-ākhiratu", meaning: { en: "And the Hereafter", ur: "اور the آخرت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "with", ur: "ساتھ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلْمُتَّقِينَ", transliteration: "lil'muttaqīna", meaning: { en: "(is) for the righteous", ur: "(is) for the نیک" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  36: {
    ayahNumber: 36,
    text: "وَمَن يَعْشُ عَن ذِكْرِ ٱلرَّحْمَـٰنِ نُقَيِّضْ لَهُۥ شَيْطَـٰنًۭا فَهُوَ لَهُۥ قَرِينٌۭ",
    words: [
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور whoever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَعْشُ", transliteration: "yaʿshu", meaning: { en: "turns away", ur: "turns away" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذِكْرِ", transliteration: "dhik'ri", meaning: { en: "(the) remembrance", ur: "(the) remembrance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", meaning: { en: "(of) the Most Gracious", ur: "(of) the بڑا مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "نُقَيِّضْ", transliteration: "nuqayyiḍ", meaning: { en: "We appoint", ur: "ہم appoint" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَيْطَـٰنًۭا", transliteration: "shayṭānan", meaning: { en: "a devil", ur: "a devil" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَهُوَ", transliteration: "fahuwa", meaning: { en: "then he", ur: "پھر وہ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "(is) to him", ur: "(is) کو him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَرِينٌۭ", transliteration: "qarīnun", meaning: { en: "a companion", ur: "a companion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  37: {
    ayahNumber: 37,
    text: "وَإِنَّهُمْ لَيَصُدُّونَهُمْ عَنِ ٱلسَّبِيلِ وَيَحْسَبُونَ أَنَّهُم مُّهْتَدُونَ",
    words: [
      { arabic: "وَإِنَّهُمْ", transliteration: "wa-innahum", meaning: { en: "And indeed, they", ur: "اور بیشک, وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَيَصُدُّونَهُمْ", transliteration: "layaṣuddūnahum", meaning: { en: "surely, turn them", ur: "یقیناً, turn them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّبِيلِ", transliteration: "l-sabīli", meaning: { en: "the Path", ur: "the راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَحْسَبُونَ", transliteration: "wayaḥsabūna", meaning: { en: "and they think", ur: "اور وہ لوگ think" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنَّهُم", transliteration: "annahum", meaning: { en: "that they", ur: "وہ وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّهْتَدُونَ", transliteration: "muh'tadūna", meaning: { en: "(are) guided", ur: "(are) guided" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    ayahNumber: 38,
    text: "حَتَّىٰٓ إِذَا جَآءَنَا قَالَ يَـٰلَيْتَ بَيْنِى وَبَيْنَكَ بُعْدَ ٱلْمَشْرِقَيْنِ فَبِئْسَ ٱلْقَرِينُ",
    words: [
      { arabic: "حَتَّىٰٓ", transliteration: "ḥattā", meaning: { en: "Until", ur: "Until" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَنَا", transliteration: "jāanā", meaning: { en: "he comes to Us", ur: "وہ comes کو Us" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "he says", ur: "وہ کہتا ہے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰلَيْتَ", transliteration: "yālayta", meaning: { en: "O would that", ur: "اے would وہ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنِى", transliteration: "baynī", meaning: { en: "between me", ur: "درمیان me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبَيْنَكَ", transliteration: "wabaynaka", meaning: { en: "and between you", ur: "اور درمیان تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بُعْدَ", transliteration: "buʿ'da", meaning: { en: "(were the) distance", ur: "(were the) distance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَشْرِقَيْنِ", transliteration: "l-mashriqayni", meaning: { en: "(of) the East and the West", ur: "(of) the East اور the West" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَبِئْسَ", transliteration: "fabi'sa", meaning: { en: "How wretched is", ur: "How wretched is" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلْقَرِينُ", transliteration: "l-qarīnu", meaning: { en: "the companion", ur: "the companion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  39: {
    ayahNumber: 39,
    text: "وَلَن يَنفَعَكُمُ ٱلْيَوْمَ إِذ ظَّلَمْتُمْ أَنَّكُمْ فِى ٱلْعَذَابِ مُشْتَرِكُونَ",
    words: [
      { arabic: "وَلَن", transliteration: "walan", meaning: { en: "And never", ur: "اور never" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَنفَعَكُمُ", transliteration: "yanfaʿakumu", meaning: { en: "will benefit you", ur: "will benefit تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "the Day", ur: "the دن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذ", transliteration: "idh", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَّلَمْتُمْ", transliteration: "ẓalamtum", meaning: { en: "you have wronged", ur: "تم have wronged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنَّكُمْ", transliteration: "annakum", meaning: { en: "that you", ur: "وہ تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(will be) in", ur: "(will be) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", meaning: { en: "the punishment", ur: "the عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُشْتَرِكُونَ", transliteration: "mush'tarikūna", meaning: { en: "sharing", ur: "sharing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  40: {
    ayahNumber: 40,
    text: "أَفَأَنتَ تُسْمِعُ ٱلصُّمَّ أَوْ تَهْدِى ٱلْعُمْىَ وَمَن كَانَ فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
    words: [
      { arabic: "أَفَأَنتَ", transliteration: "afa-anta", meaning: { en: "Then can you", ur: "پھر can تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُسْمِعُ", transliteration: "tus'miʿu", meaning: { en: "cause to hear", ur: "cause کو سننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلصُّمَّ", transliteration: "l-ṣuma", meaning: { en: "the deaf", ur: "the deaf" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "تَهْدِى", transliteration: "tahdī", meaning: { en: "guide", ur: "guide" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعُمْىَ", transliteration: "l-ʿum'ya", meaning: { en: "the blind", ur: "the blind" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "and (one) who", ur: "اور (one) جو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "is", ur: "is" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", meaning: { en: "an error", ur: "an error" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٍۢ", transliteration: "mubīnin", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  41: {
    ayahNumber: 41,
    text: "فَإِمَّا نَذْهَبَنَّ بِكَ فَإِنَّا مِنْهُم مُّنتَقِمُونَ",
    words: [
      { arabic: "فَإِمَّا", transliteration: "fa-immā", meaning: { en: "And whether", ur: "اور whether" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "نَذْهَبَنَّ", transliteration: "nadhhabanna", meaning: { en: "We take you away", ur: "ہم take تم away" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِكَ", transliteration: "bika", meaning: { en: "We take you away", ur: "ہم take تم away" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فَإِنَّا", transliteration: "fa-innā", meaning: { en: "then indeed, We", ur: "پھر بیشک, ہم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مِنْهُم", transliteration: "min'hum", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّنتَقِمُونَ", transliteration: "muntaqimūna", meaning: { en: "(will) take retribution", ur: "(will) take retribution" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  42: {
    ayahNumber: 42,
    text: "أَوْ نُرِيَنَّكَ ٱلَّذِى وَعَدْنَـٰهُمْ فَإِنَّا عَلَيْهِم مُّقْتَدِرُونَ",
    words: [
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "نُرِيَنَّكَ", transliteration: "nuriyannaka", meaning: { en: "We show you", ur: "ہم show تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "that which", ur: "وہ جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَدْنَـٰهُمْ", transliteration: "waʿadnāhum", meaning: { en: "We have promised them", ur: "ہم have promised them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَإِنَّا", transliteration: "fa-innā", meaning: { en: "then indeed, We", ur: "پھر بیشک, ہم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "اوپر them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّقْتَدِرُونَ", transliteration: "muq'tadirūna", meaning: { en: "have full power", ur: "have full power" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    ayahNumber: 43,
    text: "فَٱسْتَمْسِكْ بِٱلَّذِىٓ أُوحِىَ إِلَيْكَ ۖ إِنَّكَ عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    words: [
      { arabic: "فَٱسْتَمْسِكْ", transliteration: "fa-is'tamsik", meaning: { en: "So hold fast", ur: "So hold fast" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِٱلَّذِىٓ", transliteration: "bi-alladhī", meaning: { en: "to that which", ur: "کو وہ جو" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أُوحِىَ", transliteration: "ūḥiya", meaning: { en: "is revealed", ur: "is revealed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْكَ ۖ", transliteration: "ilayka", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "Indeed, you", ur: "بیشک, تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "(are) on", ur: "(are) پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صِرَٰطٍۢ", transliteration: "ṣirāṭin", meaning: { en: "a Path", ur: "a راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّسْتَقِيمٍۢ", transliteration: "mus'taqīmin", meaning: { en: "Straight", ur: "سیدھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  44: {
    ayahNumber: 44,
    text: "وَإِنَّهُۥ لَذِكْرٌۭ لَّكَ وَلِقَوْمِكَ ۖ وَسَوْفَ تُسْـَٔلُونَ",
    words: [
      { arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", meaning: { en: "And indeed, it", ur: "اور بیشک, it" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَذِكْرٌۭ", transliteration: "ladhik'run", meaning: { en: "(is) surely, a Reminder", ur: "(is) یقیناً, a Reminder" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّكَ", transliteration: "laka", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلِقَوْمِكَ ۖ", transliteration: "waliqawmika", meaning: { en: "and your people", ur: "اور your لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَسَوْفَ", transliteration: "wasawfa", meaning: { en: "and soon", ur: "اور soon" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُسْـَٔلُونَ", transliteration: "tus'alūna", meaning: { en: "you will be questioned", ur: "تم will be questioned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  45: {
    ayahNumber: 45,
    text: "وَسْـَٔلْ مَنْ أَرْسَلْنَا مِن قَبْلِكَ مِن رُّسُلِنَآ أَجَعَلْنَا مِن دُونِ ٱلرَّحْمَـٰنِ ءَالِهَةًۭ يُعْبَدُونَ",
    words: [
      { arabic: "وَسْـَٔلْ", transliteration: "wasal", meaning: { en: "And ask", ur: "اور ask" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "(those) whom", ur: "(those) whom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before you", ur: "پہلے تم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِكَ", transliteration: "qablika", meaning: { en: "before you", ur: "پہلے تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رُّسُلِنَآ", transliteration: "rusulinā", meaning: { en: "Our Messengers", ur: "Our Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجَعَلْنَا", transliteration: "ajaʿalnā", meaning: { en: "did We make", ur: "did ہم make" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "besides" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "besides" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ءَالِهَةًۭ", transliteration: "ālihatan", meaning: { en: "gods", ur: "gods" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُعْبَدُونَ", transliteration: "yuʿ'badūna", meaning: { en: "to be worshipped", ur: "کو be worshipped" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  46: {
    ayahNumber: 46,
    text: "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِـَٔايَـٰتِنَآ إِلَىٰ فِرْعَوْنَ وَمَلَإِي۟هِۦ فَقَالَ إِنِّى رَسُولُ رَبِّ ٱلْعَـٰلَمِينَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُوسَىٰ", transliteration: "mūsā", meaning: { en: "Musa", ur: "Musa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِـَٔايَـٰتِنَآ", transliteration: "biāyātinā", meaning: { en: "with Our Signs", ur: "ساتھ Our نشانیاں" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", meaning: { en: "Firaun", ur: "Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَلَإِي۟هِۦ", transliteration: "wamala-ihi", meaning: { en: "and his chiefs", ur: "اور his chiefs" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَقَالَ", transliteration: "faqāla", meaning: { en: "and he said", ur: "اور وہ کہا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِنِّى", transliteration: "innī", meaning: { en: "Indeed, I am", ur: "بیشک, میں am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَسُولُ", transliteration: "rasūlu", meaning: { en: "a Messenger", ur: "a رسول" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "(of the) Lord", ur: "(of the) رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", meaning: { en: "(of) the worlds", ur: "(of) the worlds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  47: {
    ayahNumber: 47,
    text: "فَلَمَّا جَآءَهُم بِـَٔايَـٰتِنَآ إِذَا هُم مِّنْهَا يَضْحَكُونَ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "But when", ur: "لیکن when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "جَآءَهُم", transliteration: "jāahum", meaning: { en: "he came to them", ur: "وہ came کو them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِـَٔايَـٰتِنَآ", transliteration: "biāyātinā", meaning: { en: "with Our Signs", ur: "ساتھ Our نشانیاں" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "behold", ur: "behold" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "They", ur: "وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهَا", transliteration: "min'hā", meaning: { en: "at them", ur: "at them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَضْحَكُونَ", transliteration: "yaḍḥakūna", meaning: { en: "laughed", ur: "laughed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  48: {
    ayahNumber: 48,
    text: "وَمَا نُرِيهِم مِّنْ ءَايَةٍ إِلَّا هِىَ أَكْبَرُ مِنْ أُخْتِهَا ۖ وَأَخَذْنَـٰهُم بِٱلْعَذَابِ لَعَلَّهُمْ يَرْجِعُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نُرِيهِم", transliteration: "nurīhim", meaning: { en: "We showed them", ur: "ہم showed them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَةٍ", transliteration: "āyatin", meaning: { en: "a Sign", ur: "a نشانی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هِىَ", transliteration: "hiya", meaning: { en: "it", ur: "it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكْبَرُ", transliteration: "akbaru", meaning: { en: "(was) greater", ur: "(was) greater" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "than", ur: "than" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أُخْتِهَا ۖ", transliteration: "ukh'tihā", meaning: { en: "its sister", ur: "its sister" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَخَذْنَـٰهُم", transliteration: "wa-akhadhnāhum", meaning: { en: "and We seized them", ur: "اور ہم seized them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِٱلْعَذَابِ", transliteration: "bil-ʿadhābi", meaning: { en: "with the punishment", ur: "ساتھ the عذاب" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", meaning: { en: "return", ur: "return" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  49: {
    ayahNumber: 49,
    text: "وَقَالُوا۟ يَـٰٓأَيُّهَ ٱلسَّاحِرُ ٱدْعُ لَنَا رَبَّكَ بِمَا عَهِدَ عِندَكَ إِنَّنَا لَمُهْتَدُونَ",
    words: [
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they said", ur: "اور وہ لوگ کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَـٰٓأَيُّهَ", transliteration: "yāayyuha", meaning: { en: "O", ur: "اے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّاحِرُ", transliteration: "l-sāḥiru", meaning: { en: "[the] magician", ur: "[the] magician" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱدْعُ", transliteration: "ud'ʿu", meaning: { en: "Invoke", ur: "Invoke" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "for us", ur: "for us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "by what", ur: "by کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَهِدَ", transliteration: "ʿahida", meaning: { en: "He has made covenant", ur: "وہ has made covenant" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عِندَكَ", transliteration: "ʿindaka", meaning: { en: "with you", ur: "ساتھ تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّنَا", transliteration: "innanā", meaning: { en: "Indeed, we", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمُهْتَدُونَ", transliteration: "lamuh'tadūna", meaning: { en: "(will) surely be guided", ur: "(will) یقیناً be guided" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    ayahNumber: 50,
    text: "فَلَمَّا كَشَفْنَا عَنْهُمُ ٱلْعَذَابَ إِذَا هُمْ يَنكُثُونَ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "But when", ur: "لیکن when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "كَشَفْنَا", transliteration: "kashafnā", meaning: { en: "We removed", ur: "ہم removed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُمُ", transliteration: "ʿanhumu", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", meaning: { en: "the punishment", ur: "the عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "behold", ur: "behold" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "They", ur: "وہ لوگ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يَنكُثُونَ", transliteration: "yankuthūna", meaning: { en: "broke (their word)", ur: "broke (their word)" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  51: {
    ayahNumber: 51,
    text: "وَنَادَىٰ فِرْعَوْنُ فِى قَوْمِهِۦ قَالَ يَـٰقَوْمِ أَلَيْسَ لِى مُلْكُ مِصْرَ وَهَـٰذِهِ ٱلْأَنْهَـٰرُ تَجْرِى مِن تَحْتِىٓ ۖ أَفَلَا تُبْصِرُونَ",
    words: [
      { arabic: "وَنَادَىٰ", transliteration: "wanādā", meaning: { en: "And called out", ur: "اور called out" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", meaning: { en: "Firaun", ur: "Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "among", ur: "among" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَوْمِهِۦ", transliteration: "qawmihi", meaning: { en: "his people", ur: "his لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "he said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", meaning: { en: "O my people", ur: "اے my لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَيْسَ", transliteration: "alaysa", meaning: { en: "Is not", ur: "Is نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِى", transliteration: "lī", meaning: { en: "for me", ur: "for me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مُلْكُ", transliteration: "mul'ku", meaning: { en: "(the) kingdom", ur: "(the) kingdom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِصْرَ", transliteration: "miṣ'ra", meaning: { en: "(of) Egypt", ur: "(of) Egypt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهَـٰذِهِ", transliteration: "wahādhihi", meaning: { en: "and these", ur: "اور these" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْأَنْهَـٰرُ", transliteration: "l-anhāru", meaning: { en: "[the] rivers", ur: "[the] rivers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَجْرِى", transliteration: "tajrī", meaning: { en: "flowing", ur: "flowing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "underneath me", ur: "underneath me" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَحْتِىٓ ۖ", transliteration: "taḥtī", meaning: { en: "underneath me", ur: "underneath me" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَفَلَا", transliteration: "afalā", meaning: { en: "Then do not", ur: "پھر do نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُبْصِرُونَ", transliteration: "tub'ṣirūna", meaning: { en: "you see", ur: "تم دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' }
      ],
    },
  },
  52: {
    ayahNumber: 52,
    text: "أَمْ أَنَا۠ خَيْرٌۭ مِّنْ هَـٰذَا ٱلَّذِى هُوَ مَهِينٌۭ وَلَا يَكَادُ يُبِينُ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَنَا۠", transliteration: "anā", meaning: { en: "am I", ur: "am میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَيْرٌۭ", transliteration: "khayrun", meaning: { en: "better", ur: "better" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "than", ur: "than" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "one who ", ur: "one جو " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مَهِينٌۭ", transliteration: "mahīnun", meaning: { en: "(is) insignificant", ur: "(is) insignificant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and hardly", ur: "اور hardly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَكَادُ", transliteration: "yakādu", meaning: { en: "and hardly", ur: "اور hardly" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُبِينُ", transliteration: "yubīnu", meaning: { en: "clear", ur: "clear" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  53: {
    ayahNumber: 53,
    text: "فَلَوْلَآ أُلْقِىَ عَلَيْهِ أَسْوِرَةٌۭ مِّن ذَهَبٍ أَوْ جَآءَ مَعَهُ ٱلْمَلَـٰٓئِكَةُ مُقْتَرِنِينَ",
    words: [
      { arabic: "فَلَوْلَآ", transliteration: "falawlā", meaning: { en: "Then why not", ur: "پھر why نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أُلْقِىَ", transliteration: "ul'qiya", meaning: { en: "are placed", ur: "are placed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "on him", ur: "پر him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَسْوِرَةٌۭ", transliteration: "aswiratun", meaning: { en: "bracelets", ur: "bracelets" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَهَبٍ", transliteration: "dhahabin", meaning: { en: "gold", ur: "gold" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "جَآءَ", transliteration: "jāa", meaning: { en: "come", ur: "come" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَعَهُ", transliteration: "maʿahu", meaning: { en: "with him", ur: "ساتھ him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", meaning: { en: "the Angels", ur: "the Angels" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُقْتَرِنِينَ", transliteration: "muq'tarinīna", meaning: { en: "accompanying (him)", ur: "accompanying (him)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  54: {
    ayahNumber: 54,
    text: "فَٱسْتَخَفَّ قَوْمَهُۥ فَأَطَاعُوهُ ۚ إِنَّهُمْ كَانُوا۟ قَوْمًۭا فَـٰسِقِينَ",
    words: [
      { arabic: "فَٱسْتَخَفَّ", transliteration: "fa-is'takhaffa", meaning: { en: "So he bluffed", ur: "So وہ bluffed" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "قَوْمَهُۥ", transliteration: "qawmahu", meaning: { en: "his people", ur: "his لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَطَاعُوهُ ۚ", transliteration: "fa-aṭāʿūhu", meaning: { en: "and they obeyed him", ur: "اور وہ لوگ obeyed him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "were", ur: "were" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمًۭا", transliteration: "qawman", meaning: { en: "a people", ur: "a لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَـٰسِقِينَ", transliteration: "fāsiqīna", meaning: { en: "defiantly disobedient", ur: "defiantly disobedient" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  55: {
    ayahNumber: 55,
    text: "فَلَمَّآ ءَاسَفُونَا ٱنتَقَمْنَا مِنْهُمْ فَأَغْرَقْنَـٰهُمْ أَجْمَعِينَ",
    words: [
      { arabic: "فَلَمَّآ", transliteration: "falammā", meaning: { en: "So when", ur: "So when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ءَاسَفُونَا", transliteration: "āsafūnā", meaning: { en: "they angered Us", ur: "وہ لوگ angered Us" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱنتَقَمْنَا", transliteration: "intaqamnā", meaning: { en: "We took retribution", ur: "ہم took retribution" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُمْ", transliteration: "min'hum", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَغْرَقْنَـٰهُمْ", transliteration: "fa-aghraqnāhum", meaning: { en: "and We drowned them", ur: "اور ہم drowned them" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  56: {
    ayahNumber: 56,
    text: "فَجَعَلْنَـٰهُمْ سَلَفًۭا وَمَثَلًۭا لِّلْـَٔاخِرِينَ",
    words: [
      { arabic: "فَجَعَلْنَـٰهُمْ", transliteration: "fajaʿalnāhum", meaning: { en: "And We made them", ur: "اور ہم made them" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "سَلَفًۭا", transliteration: "salafan", meaning: { en: "a precedent", ur: "a precedent" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَثَلًۭا", transliteration: "wamathalan", meaning: { en: "and an example", ur: "اور an example" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِّلْـَٔاخِرِينَ", transliteration: "lil'ākhirīna", meaning: { en: "for the later (generations)", ur: "for the later (generations)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  57: {
    ayahNumber: 57,
    text: "۞ وَلَمَّا ضُرِبَ ٱبْنُ مَرْيَمَ مَثَلًا إِذَا قَوْمُكَ مِنْهُ يَصِدُّونَ",
    words: [
      { arabic: "۞ وَلَمَّا", transliteration: "walammā", meaning: { en: "And when", ur: "اور when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ضُرِبَ", transliteration: "ḍuriba", meaning: { en: "is presented", ur: "is presented" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱبْنُ", transliteration: "ub'nu", meaning: { en: "(the) son", ur: "(the) بیٹا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَرْيَمَ", transliteration: "maryama", meaning: { en: "(of) Maryam", ur: "(of) Maryam" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَثَلًا", transliteration: "mathalan", meaning: { en: "(as) an example", ur: "(as) an example" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "behold", ur: "behold" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمُكَ", transliteration: "qawmuka", meaning: { en: "Your people", ur: "Your لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُ", transliteration: "min'hu", meaning: { en: "about it", ur: "about it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَصِدُّونَ", transliteration: "yaṣiddūna", meaning: { en: "laughed aloud", ur: "laughed aloud" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  58: {
    ayahNumber: 58,
    text: "وَقَالُوٓا۟ ءَأَـٰلِهَتُنَا خَيْرٌ أَمْ هُوَ ۚ مَا ضَرَبُوهُ لَكَ إِلَّا جَدَلًۢا ۚ بَلْ هُمْ قَوْمٌ خَصِمُونَ",
    words: [
      { arabic: "وَقَالُوٓا۟", transliteration: "waqālū", meaning: { en: "And they said", ur: "اور وہ لوگ کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَأَـٰلِهَتُنَا", transliteration: "aālihatunā", meaning: { en: "Are our gods", ur: "Are our gods" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَيْرٌ", transliteration: "khayrun", meaning: { en: "better", ur: "better" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "هُوَ ۚ", transliteration: "huwa", meaning: { en: "he", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "ضَرَبُوهُ", transliteration: "ḍarabūhu", meaning: { en: "they present it", ur: "وہ لوگ present it" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكَ", transliteration: "laka", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَدَلًۢا ۚ", transliteration: "jadalan", meaning: { en: "(for) argument", ur: "(for) argument" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "قَوْمٌ", transliteration: "qawmun", meaning: { en: "(are) a people", ur: "(are) a لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَصِمُونَ", transliteration: "khaṣimūna", meaning: { en: "argumentative", ur: "argumentative" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  59: {
    ayahNumber: 59,
    text: "إِنْ هُوَ إِلَّا عَبْدٌ أَنْعَمْنَا عَلَيْهِ وَجَعَلْنَـٰهُ مَثَلًۭا لِّبَنِىٓ إِسْرَٰٓءِيلَ",
    words: [
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "(was) except", ur: "(was) سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَبْدٌ", transliteration: "ʿabdun", meaning: { en: "a slave", ur: "a slave" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنْعَمْنَا", transliteration: "anʿamnā", meaning: { en: "We bestowed Our favor", ur: "ہم bestowed Our favor" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "on him", ur: "پر him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَعَلْنَـٰهُ", transliteration: "wajaʿalnāhu", meaning: { en: "and We made him", ur: "اور ہم made him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَثَلًۭا", transliteration: "mathalan", meaning: { en: "an example", ur: "an example" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّبَنِىٓ", transliteration: "libanī", meaning: { en: "for (the) Children of Israel", ur: "for (the) اولاد of Israel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", meaning: { en: "for (the) Children of Israel", ur: "for (the) اولاد of Israel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  60: {
    ayahNumber: 60,
    text: "وَلَوْ نَشَآءُ لَجَعَلْنَا مِنكُم مَّلَـٰٓئِكَةًۭ فِى ٱلْأَرْضِ يَخْلُفُونَ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَشَآءُ", transliteration: "nashāu", meaning: { en: "We willed", ur: "ہم willed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَجَعَلْنَا", transliteration: "lajaʿalnā", meaning: { en: "surely We (could have) made", ur: "یقیناً ہم (could have) made" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنكُم", transliteration: "minkum", meaning: { en: "among you", ur: "among تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّلَـٰٓئِكَةًۭ", transliteration: "malāikatan", meaning: { en: "Angels", ur: "Angels" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَخْلُفُونَ", transliteration: "yakhlufūna", meaning: { en: "succeeding", ur: "succeeding" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  61: {
    ayahNumber: 61,
    text: "وَإِنَّهُۥ لَعِلْمٌۭ لِّلسَّاعَةِ فَلَا تَمْتَرُنَّ بِهَا وَٱتَّبِعُونِ ۚ هَـٰذَا صِرَٰطٌۭ مُّسْتَقِيمٌۭ",
    words: [
      { arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", meaning: { en: "And indeed, it", ur: "اور بیشک, it" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَعِلْمٌۭ", transliteration: "laʿil'mun", meaning: { en: "surely (is) a knowledge", ur: "یقیناً (is) a knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلسَّاعَةِ", transliteration: "lilssāʿati", meaning: { en: "of the Hour", ur: "of the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "So (do) not", ur: "So (do) نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "تَمْتَرُنَّ", transliteration: "tamtarunna", meaning: { en: "(be) doubtful", ur: "(be) doubtful" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "about it", ur: "about it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَٱتَّبِعُونِ ۚ", transliteration: "wa-ittabiʿūni", meaning: { en: "and follow Me", ur: "اور follow Me" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صِرَٰطٌۭ", transliteration: "ṣirāṭun", meaning: { en: "(is the) Path", ur: "(is the) راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّسْتَقِيمٌۭ", transliteration: "mus'taqīmun", meaning: { en: "Straight", ur: "سیدھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  62: {
    ayahNumber: 62,
    text: "وَلَا يَصُدَّنَّكُمُ ٱلشَّيْطَـٰنُ ۖ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌۭ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And (let) not", ur: "اور (let) نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَصُدَّنَّكُمُ", transliteration: "yaṣuddannakumu", meaning: { en: "avert you", ur: "avert تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلشَّيْطَـٰنُ ۖ", transliteration: "l-shayṭānu", meaning: { en: "the Shaitaan", ur: "the Shaitaan" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed, he", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "(is) for you", ur: "(is) for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَدُوٌّۭ", transliteration: "ʿaduwwun", meaning: { en: "an enemy", ur: "an enemy" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٌۭ", transliteration: "mubīnun", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  63: {
    ayahNumber: 63,
    text: "وَلَمَّا جَآءَ عِيسَىٰ بِٱلْبَيِّنَـٰتِ قَالَ قَدْ جِئْتُكُم بِٱلْحِكْمَةِ وَلِأُبَيِّنَ لَكُم بَعْضَ ٱلَّذِى تَخْتَلِفُونَ فِيهِ ۖ فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    words: [
      { arabic: "وَلَمَّا", transliteration: "walammā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", meaning: { en: "came", ur: "came" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِيسَىٰ", transliteration: "ʿīsā", meaning: { en: "Isa", ur: "Isa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", meaning: { en: "with clear proofs", ur: "ساتھ clear proofs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "he said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "Verily", ur: "بیشک" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جِئْتُكُم", transliteration: "ji'tukum", meaning: { en: "I have come to you", ur: "میں have come کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْحِكْمَةِ", transliteration: "bil-ḥik'mati", meaning: { en: "with wisdom", ur: "ساتھ wisdom" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلِأُبَيِّنَ", transliteration: "wali-ubayyina", meaning: { en: "and that I make clear", ur: "اور وہ میں make clear" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْضَ", transliteration: "baʿḍa", meaning: { en: "some", ur: "some" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(of) that which", ur: "(of) وہ جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَخْتَلِفُونَ", transliteration: "takhtalifūna", meaning: { en: "you differ", ur: "تم differ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهِ ۖ", transliteration: "fīhi", meaning: { en: "in it", ur: "میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", meaning: { en: "So fear", ur: "So ڈرنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", meaning: { en: "and obey me", ur: "اور obey me" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  64: {
    ayahNumber: 64,
    text: "إِنَّ ٱللَّهَ هُوَ رَبِّى وَرَبُّكُمْ فَٱعْبُدُوهُ ۚ هَـٰذَا صِرَٰطٌۭ مُّسْتَقِيمٌۭ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "رَبِّى", transliteration: "rabbī", meaning: { en: "(is) my Lord", ur: "(is) my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَبُّكُمْ", transliteration: "warabbukum", meaning: { en: "and your Lord", ur: "اور your رب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَٱعْبُدُوهُ ۚ", transliteration: "fa-uʿ'budūhu", meaning: { en: "so worship Him", ur: "so عبادت Him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صِرَٰطٌۭ", transliteration: "ṣirāṭun", meaning: { en: "(is) a Path", ur: "(is) a راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّسْتَقِيمٌۭ", transliteration: "mus'taqīmun", meaning: { en: "Straight", ur: "سیدھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  65: {
    ayahNumber: 65,
    text: "فَٱخْتَلَفَ ٱلْأَحْزَابُ مِنۢ بَيْنِهِمْ ۖ فَوَيْلٌۭ لِّلَّذِينَ ظَلَمُوا۟ مِنْ عَذَابِ يَوْمٍ أَلِيمٍ",
    words: [
      { arabic: "فَٱخْتَلَفَ", transliteration: "fa-ikh'talafa", meaning: { en: "But differed", ur: "لیکن differed" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلْأَحْزَابُ", transliteration: "l-aḥzābu", meaning: { en: "the factions", ur: "the factions" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنِهِمْ ۖ", transliteration: "baynihim", meaning: { en: "among them", ur: "among them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَوَيْلٌۭ", transliteration: "fawaylun", meaning: { en: "so woe", ur: "so woe" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "کو جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", meaning: { en: "wronged", ur: "wronged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَذَابِ", transliteration: "ʿadhābi", meaning: { en: "(the) punishment", ur: "(the) عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمٍ", transliteration: "yawmin", meaning: { en: "(of the) Day", ur: "(of the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَلِيمٍ", transliteration: "alīmin", meaning: { en: "painful", ur: "painful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  66: {
    ayahNumber: 66,
    text: "هَلْ يَنظُرُونَ إِلَّا ٱلسَّاعَةَ أَن تَأْتِيَهُم بَغْتَةًۭ وَهُمْ لَا يَشْعُرُونَ",
    words: [
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Are", ur: "Are" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "they waiting", ur: "وہ لوگ waiting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّاعَةَ", transliteration: "l-sāʿata", meaning: { en: "(for) the Hour", ur: "(for) the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَأْتِيَهُم", transliteration: "tatiyahum", meaning: { en: "it should come on them", ur: "it should come پر them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَغْتَةًۭ", transliteration: "baghtatan", meaning: { en: "suddenly", ur: "suddenly" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "while they", ur: "while وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", meaning: { en: "perceive", ur: "perceive" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'نفی + فعل' }
      ],
    },
  },
  67: {
    ayahNumber: 67,
    text: "ٱلْأَخِلَّآءُ يَوْمَئِذٍۭ بَعْضُهُمْ لِبَعْضٍ عَدُوٌّ إِلَّا ٱلْمُتَّقِينَ",
    words: [
      { arabic: "ٱلْأَخِلَّآءُ", transliteration: "al-akhilāu", meaning: { en: "Friends", ur: "Friends" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَئِذٍۭ", transliteration: "yawma-idhin", meaning: { en: "that Day", ur: "وہ دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", meaning: { en: "some of them", ur: "some of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِبَعْضٍ", transliteration: "libaʿḍin", meaning: { en: "to others", ur: "کو others" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَدُوٌّ", transliteration: "ʿaduwwun", meaning: { en: "(will be) enemies", ur: "(will be) enemies" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", meaning: { en: "the righteous", ur: "the نیک" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  68: {
    ayahNumber: 68,
    text: "يَـٰعِبَادِ لَا خَوْفٌ عَلَيْكُمُ ٱلْيَوْمَ وَلَآ أَنتُمْ تَحْزَنُونَ",
    words: [
      { arabic: "يَـٰعِبَادِ", transliteration: "yāʿibādi", meaning: { en: "O My slaves", ur: "اے My slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "No", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَوْفٌ", transliteration: "khawfun", meaning: { en: "fear", ur: "ڈرنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُمُ", transliteration: "ʿalaykumu", meaning: { en: "on you", ur: "پر تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "this Day", ur: "this دن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَآ", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "تَحْزَنُونَ", transliteration: "taḥzanūna", meaning: { en: "will grieve", ur: "will grieve" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  69: {
    ayahNumber: 69,
    text: "ٱلَّذِينَ ءَامَنُوا۟ بِـَٔايَـٰتِنَا وَكَانُوا۟ مُسْلِمِينَ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", meaning: { en: "in Our Verses", ur: "میں Our Verses" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَكَانُوا۟", transliteration: "wakānū", meaning: { en: "and were", ur: "اور were" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُسْلِمِينَ", transliteration: "mus'limīna", meaning: { en: "submissive", ur: "submissive" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  70: {
    ayahNumber: 70,
    text: "ٱدْخُلُوا۟ ٱلْجَنَّةَ أَنتُمْ وَأَزْوَٰجُكُمْ تُحْبَرُونَ",
    words: [
      { arabic: "ٱدْخُلُوا۟", transliteration: "ud'khulū", meaning: { en: "Enter", ur: "Enter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", meaning: { en: "Paradise", ur: "جنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "وَأَزْوَٰجُكُمْ", transliteration: "wa-azwājukum", meaning: { en: "and your spouses", ur: "اور your spouses" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُحْبَرُونَ", transliteration: "tuḥ'barūna", meaning: { en: "delighted", ur: "delighted" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  71: {
    ayahNumber: 71,
    text: "يُطَافُ عَلَيْهِم بِصِحَافٍۢ مِّن ذَهَبٍۢ وَأَكْوَابٍۢ ۖ وَفِيهَا مَا تَشْتَهِيهِ ٱلْأَنفُسُ وَتَلَذُّ ٱلْأَعْيُنُ ۖ وَأَنتُمْ فِيهَا خَـٰلِدُونَ",
    words: [
      { arabic: "يُطَافُ", transliteration: "yuṭāfu", meaning: { en: "Will be circulated", ur: "Will be circulated" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِصِحَافٍۢ", transliteration: "biṣiḥāfin", meaning: { en: "plates", ur: "plates" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَهَبٍۢ", transliteration: "dhahabin", meaning: { en: "gold", ur: "gold" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَكْوَابٍۢ ۖ", transliteration: "wa-akwābin", meaning: { en: "and cups", ur: "اور cups" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَفِيهَا", transliteration: "wafīhā", meaning: { en: "And therein", ur: "اور اس میں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(is) what", ur: "(is) کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَشْتَهِيهِ", transliteration: "tashtahīhi", meaning: { en: "desires", ur: "desires" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَنفُسُ", transliteration: "l-anfusu", meaning: { en: "the souls", ur: "the souls" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَتَلَذُّ", transliteration: "wataladhu", meaning: { en: "and delights", ur: "اور delights" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْأَعْيُنُ ۖ", transliteration: "l-aʿyunu", meaning: { en: "the eyes", ur: "the eyes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنتُمْ", transliteration: "wa-antum", meaning: { en: "and you", ur: "اور تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", meaning: { en: "will abide forever", ur: "will abide forever" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    ayahNumber: 72,
    text: "وَتِلْكَ ٱلْجَنَّةُ ٱلَّتِىٓ أُورِثْتُمُوهَا بِمَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "وَتِلْكَ", transliteration: "watil'ka", meaning: { en: "And this", ur: "اور this" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْجَنَّةُ", transliteration: "l-janatu", meaning: { en: "(is) the Paradise", ur: "(is) the جنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّتِىٓ", transliteration: "allatī", meaning: { en: "which", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُورِثْتُمُوهَا", transliteration: "ūrith'tumūhā", meaning: { en: "you are made to inherit", ur: "تم are made کو inherit" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "for کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  73: {
    ayahNumber: 73,
    text: "لَكُمْ فِيهَا فَـٰكِهَةٌۭ كَثِيرَةٌۭ مِّنْهَا تَأْكُلُونَ",
    words: [
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "For you", ur: "For تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَـٰكِهَةٌۭ", transliteration: "fākihatun", meaning: { en: "(are) fruits", ur: "(are) fruits" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "كَثِيرَةٌۭ", transliteration: "kathīratun", meaning: { en: "abundant", ur: "abundant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهَا", transliteration: "min'hā", meaning: { en: "from it", ur: "سے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَأْكُلُونَ", transliteration: "takulūna", meaning: { en: "you will eat", ur: "تم will eat" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  74: {
    ayahNumber: 74,
    text: "إِنَّ ٱلْمُجْرِمِينَ فِى عَذَابِ جَهَنَّمَ خَـٰلِدُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", meaning: { en: "the criminals", ur: "the criminals" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(will be) in", ur: "(will be) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَذَابِ", transliteration: "ʿadhābi", meaning: { en: "(the) punishment", ur: "(the) عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "(of) Hell", ur: "(of) جہنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", meaning: { en: "abiding forever", ur: "abiding forever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  75: {
    ayahNumber: 75,
    text: "لَا يُفَتَّرُ عَنْهُمْ وَهُمْ فِيهِ مُبْلِسُونَ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُفَتَّرُ", transliteration: "yufattaru", meaning: { en: "will it subside", ur: "will it subside" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُبْلِسُونَ", transliteration: "mub'lisūna", meaning: { en: "(will) despair", ur: "(will) despair" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  76: {
    ayahNumber: 76,
    text: "وَمَا ظَلَمْنَـٰهُمْ وَلَـٰكِن كَانُوا۟ هُمُ ٱلظَّـٰلِمِينَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ظَلَمْنَـٰهُمْ", transliteration: "ẓalamnāhum", meaning: { en: "We wronged them", ur: "ہم wronged them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَـٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they were", ur: "وہ لوگ were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "themselves", ur: "themselves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", meaning: { en: "wrongdoers", ur: "wrongdoers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  77: {
    ayahNumber: 77,
    text: "وَنَادَوْا۟ يَـٰمَـٰلِكُ لِيَقْضِ عَلَيْنَا رَبُّكَ ۖ قَالَ إِنَّكُم مَّـٰكِثُونَ",
    words: [
      { arabic: "وَنَادَوْا۟", transliteration: "wanādaw", meaning: { en: "And they will call", ur: "اور وہ لوگ will call" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَـٰمَـٰلِكُ", transliteration: "yāmāliku", meaning: { en: "O Malik", ur: "اے Malik" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِيَقْضِ", transliteration: "liyaqḍi", meaning: { en: "Let put an end", ur: "Let put an end" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", meaning: { en: "to us", ur: "کو us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّكَ ۖ", transliteration: "rabbuka", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He (will) say", ur: "وہ (will) کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّكُم", transliteration: "innakum", meaning: { en: "Indeed, you", ur: "بیشک, تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّـٰكِثُونَ", transliteration: "mākithūna", meaning: { en: "(will) remain", ur: "(will) remain" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  78: {
    ayahNumber: 78,
    text: "لَقَدْ جِئْنَـٰكُم بِٱلْحَقِّ وَلَـٰكِنَّ أَكْثَرَكُمْ لِلْحَقِّ كَـٰرِهُونَ",
    words: [
      { arabic: "لَقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "Certainly" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جِئْنَـٰكُم", transliteration: "ji'nākum", meaning: { en: "We have brought you", ur: "ہم have brought تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "the truth", ur: "the سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْثَرَكُمْ", transliteration: "aktharakum", meaning: { en: "most of you", ur: "most of تم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "لِلْحَقِّ", transliteration: "lil'ḥaqqi", meaning: { en: "to the truth", ur: "کو the سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَـٰرِهُونَ", transliteration: "kārihūna", meaning: { en: "(are) averse", ur: "(are) averse" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  79: {
    ayahNumber: 79,
    text: "أَمْ أَبْرَمُوٓا۟ أَمْرًۭا فَإِنَّا مُبْرِمُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَبْرَمُوٓا۟", transliteration: "abramū", meaning: { en: "have they determined", ur: "have وہ لوگ determined" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرًۭا", transliteration: "amran", meaning: { en: "an affair", ur: "an affair" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِنَّا", transliteration: "fa-innā", meaning: { en: "Then indeed, We", ur: "پھر بیشک, ہم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مُبْرِمُونَ", transliteration: "mub'rimūna", meaning: { en: "(are) determined", ur: "(are) determined" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  80: {
    ayahNumber: 80,
    text: "أَمْ يَحْسَبُونَ أَنَّا لَا نَسْمَعُ سِرَّهُمْ وَنَجْوَىٰهُم ۚ بَلَىٰ وَرُسُلُنَا لَدَيْهِمْ يَكْتُبُونَ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يَحْسَبُونَ", transliteration: "yaḥsabūna", meaning: { en: "(do) they think", ur: "(do) وہ لوگ think" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنَّا", transliteration: "annā", meaning: { en: "that We", ur: "وہ ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(can) not", ur: "(can) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "نَسْمَعُ", transliteration: "nasmaʿu", meaning: { en: "hear", ur: "سننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سِرَّهُمْ", transliteration: "sirrahum", meaning: { en: "their secret(s)", ur: "their secret(s)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَنَجْوَىٰهُم ۚ", transliteration: "wanajwāhum", meaning: { en: "and their private counsel(s)", ur: "اور their private counsel(s)" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Nay", ur: "Nay" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرُسُلُنَا", transliteration: "warusulunā", meaning: { en: "and Our Messengers", ur: "اور Our Messengers" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَدَيْهِمْ", transliteration: "ladayhim", meaning: { en: "with them", ur: "ساتھ them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَكْتُبُونَ", transliteration: "yaktubūna", meaning: { en: "are recording", ur: "are recording" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  81: {
    ayahNumber: 81,
    text: "قُلْ إِن كَانَ لِلرَّحْمَـٰنِ وَلَدٌۭ فَأَنَا۠ أَوَّلُ ٱلْعَـٰبِدِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "If" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "had", ur: "had" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلرَّحْمَـٰنِ", transliteration: "lilrraḥmāni", meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلَدٌۭ", transliteration: "waladun", meaning: { en: "a son", ur: "a بیٹا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَأَنَا۠", transliteration: "fa-anā", meaning: { en: "Then, I", ur: "پھر, میں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَوَّلُ", transliteration: "awwalu", meaning: { en: "(would be the) first", ur: "(would be the) first" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعَـٰبِدِينَ", transliteration: "l-ʿābidīna", meaning: { en: "(of) the worshippers", ur: "(of) the worshippers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  82: {
    ayahNumber: 82,
    text: "سُبْحَـٰنَ رَبِّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ رَبِّ ٱلْعَرْشِ عَمَّا يَصِفُونَ",
    words: [
      { arabic: "سُبْحَـٰنَ", transliteration: "sub'ḥāna", meaning: { en: "Glory be", ur: "Glory be" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "(to the) Lord", ur: "(کو the) رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "(of) the heavens", ur: "(of) the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "(the) Lord", ur: "(the) رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَرْشِ", transliteration: "l-ʿarshi", meaning: { en: "(of) the Throne", ur: "(of) the Throne" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "above what", ur: "above کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَصِفُونَ", transliteration: "yaṣifūna", meaning: { en: "they ascribe", ur: "وہ لوگ ascribe" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  83: {
    ayahNumber: 83,
    text: "فَذَرْهُمْ يَخُوضُوا۟ وَيَلْعَبُوا۟ حَتَّىٰ يُلَـٰقُوا۟ يَوْمَهُمُ ٱلَّذِى يُوعَدُونَ",
    words: [
      { arabic: "فَذَرْهُمْ", transliteration: "fadharhum", meaning: { en: "So leave them", ur: "So leave them" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَخُوضُوا۟", transliteration: "yakhūḍū", meaning: { en: "(to) converse vainly", ur: "(کو) converse vainly" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَيَلْعَبُوا۟", transliteration: "wayalʿabū", meaning: { en: "and play", ur: "اور play" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "until" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُلَـٰقُوا۟", transliteration: "yulāqū", meaning: { en: "they meet", ur: "وہ لوگ meet" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَوْمَهُمُ", transliteration: "yawmahumu", meaning: { en: "their Day", ur: "their دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "which", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُوعَدُونَ", transliteration: "yūʿadūna", meaning: { en: "they are promised", ur: "وہ لوگ are promised" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  84: {
    ayahNumber: 84,
    text: "وَهُوَ ٱلَّذِى فِى ٱلسَّمَآءِ إِلَـٰهٌۭ وَفِى ٱلْأَرْضِ إِلَـٰهٌۭ ۚ وَهُوَ ٱلْحَكِيمُ ٱلْعَلِيمُ",
    words: [
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "(is) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", meaning: { en: "the heaven ", ur: "the آسمان " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهٌۭ", transliteration: "ilāhun", meaning: { en: "God", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَفِى", transliteration: "wafī", meaning: { en: "and in", ur: "اور میں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth ", ur: "زمین " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهٌۭ ۚ", transliteration: "ilāhun", meaning: { en: "God", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْحَكِيمُ", transliteration: "l-ḥakīmu", meaning: { en: "(is) the All-Wise", ur: "(is) the حکمت والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", meaning: { en: "the All-Knower", ur: "the سب-Knower" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  85: {
    ayahNumber: 85,
    text: "وَتَبَارَكَ ٱلَّذِى لَهُۥ مُلْكُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَمَا بَيْنَهُمَا وَعِندَهُۥ عِلْمُ ٱلسَّاعَةِ وَإِلَيْهِ تُرْجَعُونَ",
    words: [
      { arabic: "وَتَبَارَكَ", transliteration: "watabāraka", meaning: { en: "And blessed (is)", ur: "اور blessed (is)" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "the One Who ", ur: "the One جو " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "to Whom", ur: "کو Whom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُلْكُ", transliteration: "mul'ku", meaning: { en: "(belongs the) dominion", ur: "(belongs the) dominion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "(of) the heavens", ur: "(of) the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور whatever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "(is) between both of them", ur: "(is) درمیان both of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعِندَهُۥ", transliteration: "waʿindahu", meaning: { en: "and with Him", ur: "اور ساتھ Him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عِلْمُ", transliteration: "ʿil'mu", meaning: { en: "(is the) knowledge", ur: "(is the) knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّاعَةِ", transliteration: "l-sāʿati", meaning: { en: "(of) the Hour", ur: "(of) the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to Him", ur: "اور کو Him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُرْجَعُونَ", transliteration: "tur'jaʿūna", meaning: { en: "you will be returned", ur: "تم will be returned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  86: {
    ayahNumber: 86,
    text: "وَلَا يَمْلِكُ ٱلَّذِينَ يَدْعُونَ مِن دُونِهِ ٱلشَّفَـٰعَةَ إِلَّا مَن شَهِدَ بِٱلْحَقِّ وَهُمْ يَعْلَمُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَمْلِكُ", transliteration: "yamliku", meaning: { en: "have power", ur: "have power" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whom", ur: "those whom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدْعُونَ", transliteration: "yadʿūna", meaning: { en: "they invoke", ur: "وہ لوگ invoke" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides Him", ur: "besides Him" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِهِ", transliteration: "dūnihi", meaning: { en: "besides Him", ur: "besides Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلشَّفَـٰعَةَ", transliteration: "l-shafāʿata", meaning: { en: "(for) the intercession", ur: "(for) the intercession" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "who", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "شَهِدَ", transliteration: "shahida", meaning: { en: "testifies", ur: "testifies" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "to the truth", ur: "کو the سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  87: {
    ayahNumber: 87,
    text: "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَهُمْ لَيَقُولُنَّ ٱللَّهُ ۖ فَأَنَّىٰ يُؤْفَكُونَ",
    words: [
      { arabic: "وَلَئِن", transliteration: "wala-in", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "سَأَلْتَهُم", transliteration: "sa-altahum", meaning: { en: "you ask them", ur: "تم ask them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَّنْ", transliteration: "man", meaning: { en: "who", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقَهُمْ", transliteration: "khalaqahum", meaning: { en: "created them", ur: "پیدا کیا them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَقُولُنَّ", transliteration: "layaqūlunna", meaning: { en: "they will certainly say", ur: "وہ لوگ will certainly کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَنَّىٰ", transliteration: "fa-annā", meaning: { en: "Then how", ur: "پھر how" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يُؤْفَكُونَ", transliteration: "yu'fakūna", meaning: { en: "are they deluded", ur: "are وہ لوگ deluded" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  88: {
    ayahNumber: 88,
    text: "وَقِيلِهِۦ يَـٰرَبِّ إِنَّ هَـٰٓؤُلَآءِ قَوْمٌۭ لَّا يُؤْمِنُونَ",
    words: [
      { arabic: "وَقِيلِهِۦ", transliteration: "waqīlihi", meaning: { en: "And his saying", ur: "اور his saying" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَـٰرَبِّ", transliteration: "yārabbi", meaning: { en: "O my Lord", ur: "اے my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", meaning: { en: "these", ur: "these" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمٌۭ", transliteration: "qawmun", meaning: { en: "(are) a people", ur: "(are) a لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "(who do) not", ur: "(جو do) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    ayahNumber: 89,
    text: "فَٱصْفَحْ عَنْهُمْ وَقُلْ سَلَـٰمٌۭ ۚ فَسَوْفَ يَعْلَمُونَ",
    words: [
      { arabic: "فَٱصْفَحْ", transliteration: "fa-iṣ'faḥ", meaning: { en: "So turn away", ur: "So turn away" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقُلْ", transliteration: "waqul", meaning: { en: "and say", ur: "اور کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "سَلَـٰمٌۭ ۚ", transliteration: "salāmun", meaning: { en: "Peace", ur: "Peace" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَسَوْفَ", transliteration: "fasawfa", meaning: { en: "But soon", ur: "لیکن soon" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "they will know", ur: "وہ لوگ will جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
};

export default TREEBANK_DATA;
