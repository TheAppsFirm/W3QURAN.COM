/**
 * Surah At-Taghabun (The Mutual Disillusion) - Surah 64
 * Quranic Arabic Treebank Data with Morphological Analysis
 * 18 Ayahs - Medinan Surah
 */

export const TREEBANK_DATA = {
  surahId: 64,
  surahName: "At-Taghabun",
  surahNameArabic: "التغابن",
  totalAyahs: 18,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    words: [
      { arabic: "يُسَبِّحُ", transliteration: "yusabbiḥu", meaning: { en: "Glorifies", ur: "تسبیح کرتی ہے", ar: "يُمَجِّدُ" }, root: "س-ب-ح", pos: "V", posLabel: "V", form: "II", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "predicate" } },
      { arabic: "لِلَّهِ", transliteration: "lillāhi", meaning: { en: "to Allah", ur: "اللہ کی", ar: "للهِ" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, root: "س-م-و", pos: "N", posLabel: "N", case: "GEN", number: "P", gender: "F", grammar: { role: "obj_prep" } },
      { arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and whatever", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "coord_subject" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, root: "أ-ر-ض", pos: "N", posLabel: "N", case: "GEN", gender: "F", grammar: { role: "obj_prep" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to Him belongs", ur: "اسی کی ہے", ar: "له" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "الْمُلْكُ", transliteration: "l-mulku", meaning: { en: "the dominion", ur: "بادشاہی", ar: "الملك" }, root: "م-ل-ك", pos: "N", posLabel: "N", case: "NOM", gender: "M", grammar: { role: "subject" } },
      { arabic: "وَلَهُ", transliteration: "wa-lahu", meaning: { en: "and to Him belongs", ur: "اور اسی کی ہے", ar: "وله" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "coord_predicate" } },
      { arabic: "الْحَمْدُ", transliteration: "l-ḥamdu", meaning: { en: "all praise", ur: "تعریف", ar: "الحمد" }, root: "ح-م-د", pos: "N", posLabel: "N", case: "NOM", gender: "M", grammar: { role: "subject" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "coord_subject" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "spec" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز", ar: "شيء" }, root: "ش-ي-أ", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "All-Powerful", ur: "قادر", ar: "قدير" }, root: "ق-د-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 9, to: 11, label: 'عطف' },
      { from: 12, to: 17, label: 'مبتدأ + خبر' },
      { from: 11, to: 13, label: 'عطف' },
      { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
      { from: 16, to: 17, label: 'موصوف + صفت' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "هُوَ الَّذِي خَلَقَكُمْ فَمِنكُمْ كَافِرٌ وَمِنكُم مُّؤْمِنٌ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی", ar: "هو" }, pos: "PRON", posLabel: "PRON", person: "3", gender: "M", number: "S", grammar: { role: "subject" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", gender: "M", grammar: { role: "relative" } },
      { arabic: "خَلَقَكُمْ", transliteration: "khalaqakum", meaning: { en: "created you", ur: "تمہیں پیدا کیا", ar: "خلقكم" }, root: "خ-ل-ق", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "فَمِنكُمْ", transliteration: "fa-minkum", meaning: { en: "then among you", ur: "پھر تم میں سے", ar: "فمنكم" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "كَافِرٌ", transliteration: "kāfirun", meaning: { en: "disbeliever", ur: "کافر", ar: "كافر" }, root: "ك-ف-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "وَمِنكُم", transliteration: "wa-minkum", meaning: { en: "and among you", ur: "اور تم میں سے", ar: "ومنكم" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "coord_predicate" } },
      { arabic: "مُّؤْمِنٌ", transliteration: "muʾminun", meaning: { en: "believer", ur: "مومن", ar: "مؤمن" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو کچھ", ar: "بما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, root: "ع-م-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "بَصِيرٌ", transliteration: "baṣīrun", meaning: { en: "All-Seeing", ur: "دیکھنے والا", ar: "بصير" }, root: "ب-ص-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 4, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 4, to: 6, label: 'عطف' },
      { from: 7, to: 11, label: 'مبتدأ + خبر' },
      { from: 8, to: 11, label: 'مبتدأ + خبر' },
      { from: 9, to: 10, label: 'موصول + صلة' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ ۖ وَإِلَيْهِ الْمَصِيرُ",
    words: [
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "He created", ur: "اس نے پیدا کیا", ar: "خلق" }, root: "خ-ل-ق", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں کو", ar: "السماوات" }, root: "س-م-و", pos: "N", posLabel: "N", case: "ACC", number: "P", gender: "F", grammar: { role: "object" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wa-l-arḍa", meaning: { en: "and the earth", ur: "اور زمین کو", ar: "والأرض" }, root: "أ-ر-ض", pos: "N", posLabel: "N", case: "ACC", gender: "F", grammar: { role: "coord_object" } },
      { arabic: "بِالْحَقِّ", transliteration: "bi-l-ḥaqqi", meaning: { en: "in truth", ur: "سچائی سے", ar: "بالحق" }, root: "ح-ق-ق", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "adverbial" } },
      { arabic: "وَصَوَّرَكُمْ", transliteration: "wa-ṣawwarakum", meaning: { en: "and He formed you", ur: "اور تمہاری شکلیں بنائیں", ar: "وصوركم" }, root: "ص-و-ر", pos: "V", posLabel: "V", form: "II", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "coord_verb" } },
      { arabic: "فَأَحْسَنَ", transliteration: "fa-aḥsana", meaning: { en: "and made excellent", ur: "پھر اچھی بنائیں", ar: "فأحسن" }, root: "ح-س-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result_verb" } },
      { arabic: "صُوَرَكُمْ", transliteration: "ṣuwarakum", meaning: { en: "your forms", ur: "تمہاری صورتیں", ar: "صوركم" }, root: "ص-و-ر", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to Him", ur: "اور اسی کی طرف", ar: "وإليه" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "الْمَصِيرُ", transliteration: "l-maṣīru", meaning: { en: "is the destination", ur: "لوٹنا ہے", ar: "المصير" }, root: "ص-ي-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 5, to: 7, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "يَعْلَمُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَيَعْلَمُ مَا تُسِرُّونَ وَمَا تُعْلِنُونَ ۚ وَاللَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
    words: [
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", meaning: { en: "He knows", ur: "وہ جانتا ہے", ar: "يعلم" }, root: "ع-ل-م", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں ہے", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, root: "س-م-و", pos: "N", posLabel: "N", case: "GEN", number: "P", gender: "F", grammar: { role: "obj_prep" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wa-l-arḍi", meaning: { en: "and the earth", ur: "اور زمین", ar: "والأرض" }, root: "أ-ر-ض", pos: "N", posLabel: "N", case: "GEN", gender: "F", grammar: { role: "coord_obj_prep" } },
      { arabic: "وَيَعْلَمُ", transliteration: "wa-yaʿlamu", meaning: { en: "and He knows", ur: "اور وہ جانتا ہے", ar: "ويعلم" }, root: "ع-ل-م", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "coord_verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "تُسِرُّونَ", transliteration: "tusirrūna", meaning: { en: "you conceal", ur: "تم چھپاتے ہو", ar: "تسرون" }, root: "س-ر-ر", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and what", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "coord_object" } },
      { arabic: "تُعْلِنُونَ", transliteration: "tuʿlinūna", meaning: { en: "you reveal", ur: "تم ظاہر کرتے ہو", ar: "تعلنون" }, root: "ع-ل-ن", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "is All-Knowing", ur: "جاننے والا ہے", ar: "عليم" }, root: "ع-ل-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "بِذَاتِ", transliteration: "bi-dhāti", meaning: { en: "of what is within", ur: "سینوں کے", ar: "بذات" }, pos: "PREP+N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "الصُّدُورِ", transliteration: "l-ṣudūri", meaning: { en: "the breasts", ur: "اندر کا", ar: "الصدور" }, root: "ص-د-ر", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "mudaf_ilayh" } }
    ],
    structure: {
      relationships: [
      { from: 7, to: 8, label: 'موصول + صلة' },
      { from: 10, to: 11, label: 'فعل + فاعل' },
      { from: 11, to: 12, label: 'موصوف + صفت' },
      { from: 11, to: 12, label: 'مبتدأ + خبر' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "أَلَمْ يَأْتِكُمْ نَبَأُ الَّذِينَ كَفَرُوا مِن قَبْلُ فَذَاقُوا وَبَالَ أَمْرِهِمْ وَلَهُمْ عَذَابٌ أَلِيمٌ",
    words: [
      { arabic: "أَلَمْ", transliteration: "alam", meaning: { en: "Has not", ur: "کیا نہیں", ar: "ألم" }, pos: "INTG+NEG", posLabel: "INTG+NEG", grammar: { role: "interrogative" } },
      { arabic: "يَأْتِكُمْ", transliteration: "yaʾtikum", meaning: { en: "come to you", ur: "تمہارے پاس آئی", ar: "يأتكم" }, root: "أ-ت-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "نَبَأُ", transliteration: "nabaʾu", meaning: { en: "the news", ur: "خبر", ar: "نبأ" }, root: "ن-ب-أ", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "of those who", ur: "ان لوگوں کی جو", ar: "الذين" }, pos: "REL", number: "P", grammar: { role: "mudaf_ilayh" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کافر ہوئے", ar: "كفروا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "پہلے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "سے", ar: "قبل" }, root: "ق-ب-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "adverb" } },
      { arabic: "فَذَاقُوا", transliteration: "fa-dhāqū", meaning: { en: "so they tasted", ur: "پھر انہوں نے چکھا", ar: "فذاقوا" }, root: "ذ-و-ق", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "result_verb" } },
      { arabic: "وَبَالَ", transliteration: "wabāla", meaning: { en: "the consequence", ur: "وبال", ar: "وبال" }, root: "و-ب-ل", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "أَمْرِهِمْ", transliteration: "amrihim", meaning: { en: "of their affair", ur: "اپنے کام کا", ar: "أمرهم" }, root: "أ-م-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَلَهُمْ", transliteration: "wa-lahum", meaning: { en: "and for them", ur: "اور ان کے لیے", ar: "ولهم" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "is a punishment", ur: "عذاب ہے", ar: "عذاب" }, root: "ع-ذ-ب", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", meaning: { en: "painful", ur: "دردناک", ar: "أليم" }, root: "أ-ل-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'موصول + صلة' },
      { from: 8, to: 9, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
      { from: 12, to: 13, label: 'موصوف + صفت' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "ذَٰلِكَ بِأَنَّهُ كَانَت تَّأْتِيهِمْ رُسُلُهُم بِالْبَيِّنَاتِ فَقَالُوا أَبَشَرٌ يَهْدُونَنَا فَكَفَرُوا وَتَوَلَّوا ۚ وَّاسْتَغْنَى اللَّهُ ۚ وَاللَّهُ غَنِيٌّ حَمِيدٌ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "بِأَنَّهُ", transliteration: "bi-annahu", meaning: { en: "was because", ur: "اس لیے کہ", ar: "بأنه" }, pos: "PREP+ACC", posLabel: "PREP+ACC", grammar: { role: "causal" } },
      { arabic: "كَانَت", transliteration: "kānat", meaning: { en: "used to", ur: "آتے تھے", ar: "كانت" }, root: "ك-و-ن", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "aux_verb" } },
      { arabic: "تَّأْتِيهِمْ", transliteration: "taʾtīhim", meaning: { en: "come to them", ur: "ان کے پاس", ar: "تأتيهم" }, root: "أ-ت-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "verb" } },
      { arabic: "رُسُلُهُم", transliteration: "rusuluhum", meaning: { en: "their messengers", ur: "ان کے رسول", ar: "رسلهم" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "بِالْبَيِّنَاتِ", transliteration: "bi-l-bayyināti", meaning: { en: "with clear proofs", ur: "واضح دلائل لے کر", ar: "بالبينات" }, root: "ب-ي-ن", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "prep_phrase" } },
      { arabic: "فَقَالُوا", transliteration: "fa-qālū", meaning: { en: "but they said", ur: "تو انہوں نے کہا", ar: "فقالوا" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "result_verb" } },
      { arabic: "أَبَشَرٌ", transliteration: "a-basharun", meaning: { en: "shall a human", ur: "کیا انسان", ar: "أبشر" }, root: "ب-ش-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "يَهْدُونَنَا", transliteration: "yahdūnanā", meaning: { en: "guide us", ur: "ہماری رہنمائی کرے گا", ar: "يهدوننا" }, root: "ه-د-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "فَكَفَرُوا", transliteration: "fa-kafarū", meaning: { en: "so they disbelieved", ur: "پس انہوں نے انکار کیا", ar: "فكفروا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "result_verb" } },
      { arabic: "وَتَوَلَّوا", transliteration: "wa-tawallaw", meaning: { en: "and turned away", ur: "اور منہ موڑ لیا", ar: "وتولوا" }, root: "و-ل-ي", pos: "V", posLabel: "V", form: "V", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "coord_verb" } },
      { arabic: "وَّاسْتَغْنَى", transliteration: "wa-staghnā", meaning: { en: "and Allah dispensed", ur: "اور بے پرواہ ہوا", ar: "واستغنى" }, root: "غ-ن-ي", pos: "V", posLabel: "V", form: "X", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "coord_verb" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "غَنِيٌّ", transliteration: "ghaniyyun", meaning: { en: "is Self-Sufficient", ur: "بے نیاز ہے", ar: "غني" }, root: "غ-ن-ي", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "حَمِيدٌ", transliteration: "ḥamīdun", meaning: { en: "Praiseworthy", ur: "قابل تعریف", ar: "حميد" }, root: "ح-م-د", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'فعل + فاعل' },
      { from: 7, to: 8, label: 'فعل + فاعل' },
      { from: 12, to: 13, label: 'فعل + فاعل' },
      { from: 13, to: 15, label: 'مبتدأ + خبر' },
      { from: 14, to: 15, label: 'موصوف + صفت' },
      { from: 14, to: 15, label: 'مبتدأ + خبر' },
      { from: 14, to: 16, label: 'مبتدأ + خبر' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "زَعَمَ الَّذِينَ كَفَرُوا أَن لَّن يُبْعَثُوا ۚ قُلْ بَلَىٰ وَرَبِّي لَتُبْعَثُنَّ ثُمَّ لَتُنَبَّؤُنَّ بِمَا عَمِلْتُمْ ۚ وَذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ",
    words: [
      { arabic: "زَعَمَ", transliteration: "zaʿama", meaning: { en: "Claim", ur: "خیال کرتے ہیں", ar: "زعم" }, root: "ز-ع-م", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", number: "P", grammar: { role: "subject" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کافر ہیں", ar: "كفروا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "ACC", posLabel: "ACC", grammar: { role: "complementizer" } },
      { arabic: "لَّن", transliteration: "lan", meaning: { en: "never", ur: "ہرگز نہیں", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يُبْعَثُوا", transliteration: "yubʿathū", meaning: { en: "will they be resurrected", ur: "وہ اٹھائے جائیں گے", ar: "يبعثوا" }, root: "ب-ع-ث", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", voice: "PASS", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دیجیے", ar: "قل" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "command" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes", ur: "ہاں", ar: "بلى" }, pos: "INTJ", posLabel: "INTJ", grammar: { role: "response" } },
      { arabic: "وَرَبِّي", transliteration: "wa-rabbī", meaning: { en: "by my Lord", ur: "میرے رب کی قسم", ar: "وربي" }, root: "ر-ب-ب", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "oath" } },
      { arabic: "لَتُبْعَثُنَّ", transliteration: "la-tubʿathunna", meaning: { en: "surely you will be resurrected", ur: "ضرور اٹھائے جاؤ گے", ar: "لتبعثن" }, root: "ب-ع-ث", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "PASS", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequence" } },
      { arabic: "لَتُنَبَّؤُنَّ", transliteration: "la-tunabbaʾunna", meaning: { en: "surely you will be informed", ur: "ضرور خبر دی جائے گی", ar: "لتنبؤن" }, root: "ن-ب-أ", pos: "V", posLabel: "V", form: "II", aspect: "IMPF", mood: "IND", voice: "PASS", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو کچھ", ar: "بما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "عَمِلْتُمْ", transliteration: "ʿamiltum", meaning: { en: "you did", ur: "تم نے کیا", ar: "عملتم" }, root: "ع-م-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "وَذَٰلِكَ", transliteration: "wa-dhālika", meaning: { en: "and that", ur: "اور یہ", ar: "وذلك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { role: "subject" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "for", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "يَسِيرٌ", transliteration: "yasīrun", meaning: { en: "is easy", ur: "آسان ہے", ar: "يسير" }, root: "ي-س-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 13, to: 14, label: 'موصول + صلة' },
      { from: 17, to: 18, label: 'موصوف + صفت' },
      { from: 15, to: 18, label: 'مبتدأ + خبر' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "فَآمِنُوا بِاللَّهِ وَرَسُولِهِ وَالنُّورِ الَّذِي أَنزَلْنَا ۚ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
    words: [
      { arabic: "فَآمِنُوا", transliteration: "fa-āminū", meaning: { en: "So believe", ur: "پس ایمان لاؤ", ar: "فآمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "command" } },
      { arabic: "بِاللَّهِ", transliteration: "bi-llāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "وَرَسُولِهِ", transliteration: "wa-rasūlihi", meaning: { en: "and His Messenger", ur: "اور اس کے رسول", ar: "ورسوله" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "coord_obj_prep" } },
      { arabic: "وَالنُّورِ", transliteration: "wa-l-nūri", meaning: { en: "and the Light", ur: "اور نور", ar: "والنور" }, root: "ن-و-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "coord_obj_prep" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "which", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", gender: "M", grammar: { role: "relative" } },
      { arabic: "أَنزَلْنَا", transliteration: "anzalnā", meaning: { en: "We have sent down", ur: "ہم نے نازل کیا", ar: "أنزلنا" }, root: "ن-ز-ل", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "1", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو کچھ", ar: "بما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, root: "ع-م-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "خَبِيرٌ", transliteration: "khabīrun", meaning: { en: "is All-Aware", ur: "خبردار ہے", ar: "خبير" }, root: "خ-ب-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 10, label: 'مبتدأ + خبر' },
      { from: 8, to: 9, label: 'موصول + صلة' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "يَوْمَ يَجْمَعُكُمْ لِيَوْمِ الْجَمْعِ ۖ ذَٰلِكَ يَوْمُ التَّغَابُنِ ۗ وَمَن يُؤْمِن بِاللَّهِ وَيَعْمَلْ صَالِحًا يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ وَيُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۚ ذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, root: "ي-و-م", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "adverb" } },
      { arabic: "يَجْمَعُكُمْ", transliteration: "yajmaʿukum", meaning: { en: "He will gather you", ur: "تمہیں جمع کرے گا", ar: "يجمعكم" }, root: "ج-م-ع", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "لِيَوْمِ", transliteration: "li-yawmi", meaning: { en: "for the Day", ur: "جمع کے دن کے لیے", ar: "ليوم" }, root: "ي-و-م", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "الْجَمْعِ", transliteration: "l-jamʿi", meaning: { en: "of Gathering", ur: "جمع ہونے کے", ar: "الجمع" }, root: "ج-م-ع", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "يَوْمُ", transliteration: "yawmu", meaning: { en: "is the Day", ur: "دن ہے", ar: "يوم" }, root: "ي-و-م", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "التَّغَابُنِ", transliteration: "l-taghābuni", meaning: { en: "of Mutual Disillusion", ur: "دھوکا کھانے کا", ar: "التغابن" }, root: "غ-ب-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conditional" } },
      { arabic: "يُؤْمِن", transliteration: "yuʾmin", meaning: { en: "believes", ur: "ایمان لائے", ar: "يؤمن" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "condition" } },
      { arabic: "بِاللَّهِ", transliteration: "bi-llāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "وَيَعْمَلْ", transliteration: "wa-yaʿmal", meaning: { en: "and does", ur: "اور عمل کرے", ar: "ويعمل" }, root: "ع-م-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "coord_condition" } },
      { arabic: "صَالِحًا", transliteration: "ṣāliḥan", meaning: { en: "righteousness", ur: "نیک", ar: "صالحا" }, root: "ص-ل-ح", pos: "ADJ", posLabel: "ADJ", case: "ACC", grammar: { role: "object" } },
      { arabic: "يُكَفِّرْ", transliteration: "yukaffir", meaning: { en: "He will remove", ur: "مٹا دے گا", ar: "يكفر" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "II", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result" } },
      { arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "from him", ur: "اس سے", ar: "عنه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "سَيِّئَاتِهِ", transliteration: "sayyiʾātihi", meaning: { en: "his misdeeds", ur: "اس کے گناہ", ar: "سيئاته" }, root: "س-و-أ", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "وَيُدْخِلْهُ", transliteration: "wa-yudkhilhu", meaning: { en: "and admit him", ur: "اور داخل کرے گا", ar: "ويدخله" }, root: "د-خ-ل", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "coord_result" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "Gardens", ur: "باغات میں", ar: "جنات" }, root: "ج-ن-ن", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "تَجْرِي", transliteration: "tajrī", meaning: { en: "flow", ur: "بہتی ہیں", ar: "تجري" }, root: "ج-ر-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَحْتِهَا", transliteration: "taḥtihā", meaning: { en: "beneath them", ur: "ان کے نیچے", ar: "تحتها" }, pos: "N+PRON", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "الْأَنْهَارُ", transliteration: "l-anhāru", meaning: { en: "the rivers", ur: "نہریں", ar: "الأنهار" }, root: "ن-ه-ر", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "خَالِدِينَ", transliteration: "khālidīna", meaning: { en: "abiding", ur: "ہمیشہ رہیں گے", ar: "خالدين" }, root: "خ-ل-د", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "hal" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "ان میں", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "أَبَدًا", transliteration: "abadan", meaning: { en: "forever", ur: "ہمیشہ", ar: "أبدا" }, root: "أ-ب-د", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "adverb" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "الْفَوْزُ", transliteration: "l-fawzu", meaning: { en: "is the success", ur: "کامیابی ہے", ar: "الفوز" }, root: "ف-و-ز", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "الْعَظِيمُ", transliteration: "l-ʿaẓīmu", meaning: { en: "supreme", ur: "بڑی", ar: "العظيم" }, root: "ع-ظ-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 5, to: 6, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 13, to: 15, label: 'فعل + مفعول به' },
      { from: 16, to: 17, label: 'فعل + مفعول به' },
      { from: 21, to: 26, label: 'مبتدأ + خبر' },
      { from: 21, to: 22, label: 'حال' },
      { from: 25, to: 26, label: 'مبتدأ + خبر' },
      { from: 26, to: 27, label: 'موصوف + صفت' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَالَّذِينَ كَفَرُوا وَكَذَّبُوا بِآيَاتِنَا أُولَٰئِكَ أَصْحَابُ النَّارِ خَالِدِينَ فِيهَا ۖ وَبِئْسَ الْمَصِيرُ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "wa-lladhīna", meaning: { en: "And those who", ur: "اور جنہوں نے", ar: "والذين" }, pos: "CONJ+REL", number: "P", grammar: { role: "subject" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا", ar: "كفروا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "وَكَذَّبُوا", transliteration: "wa-kadhdhabū", meaning: { en: "and denied", ur: "اور جھٹلایا", ar: "وكذبوا" }, root: "ك-ذ-ب", pos: "V", posLabel: "V", form: "II", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "coord_verb" } },
      { arabic: "بِآيَاتِنَا", transliteration: "bi-āyātinā", meaning: { en: "Our verses", ur: "ہماری آیات کو", ar: "بآياتنا" }, root: "أ-ي-ي", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "prep_phrase" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "those", ur: "یہ لوگ", ar: "أولئك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "are companions", ur: "اہل ہیں", ar: "أصحاب" }, root: "ص-ح-ب", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "predicate" } },
      { arabic: "النَّارِ", transliteration: "l-nāri", meaning: { en: "of the Fire", ur: "آگ کے", ar: "النار" }, root: "ن-و-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "خَالِدِينَ", transliteration: "khālidīna", meaning: { en: "abiding", ur: "ہمیشہ رہیں گے", ar: "خالدين" }, root: "خ-ل-د", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "hal" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "وَبِئْسَ", transliteration: "wa-biʾsa", meaning: { en: "and wretched is", ur: "اور کیا برا", ar: "وبئس" }, root: "ب-أ-س", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", grammar: { role: "exclamation" } },
      { arabic: "الْمَصِيرُ", transliteration: "l-maṣīru", meaning: { en: "the destination", ur: "ٹھکانہ ہے", ar: "المصير" }, root: "ص-ي-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } }
    ],
    structure: {
      relationships: [
      { from: 5, to: 6, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 7, to: 8, label: 'حال' },
      { from: 10, to: 11, label: 'فعل + فاعل' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "مَا أَصَابَ مِن مُّصِيبَةٍ إِلَّا بِإِذْنِ اللَّهِ ۗ وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ ۚ وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "No", ur: "کوئی نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "أَصَابَ", transliteration: "aṣāba", meaning: { en: "strikes", ur: "پہنچتی", ar: "أصاب" }, root: "ص-و-ب", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "extra" } },
      { arabic: "مُّصِيبَةٍ", transliteration: "muṣībatin", meaning: { en: "disaster", ur: "مصیبت", ar: "مصيبة" }, root: "ص-و-ب", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "بِإِذْنِ", transliteration: "bi-idhni", meaning: { en: "by permission", ur: "اجازت سے", ar: "بإذن" }, root: "أ-ذ-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کی", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conditional" } },
      { arabic: "يُؤْمِن", transliteration: "yuʾmin", meaning: { en: "believes", ur: "ایمان لائے", ar: "يؤمن" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "condition" } },
      { arabic: "بِاللَّهِ", transliteration: "bi-llāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "يَهْدِ", transliteration: "yahdi", meaning: { en: "He guides", ur: "ہدایت دیتا ہے", ar: "يهد" }, root: "ه-د-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result" } },
      { arabic: "قَلْبَهُ", transliteration: "qalbahu", meaning: { en: "his heart", ur: "اس کے دل کو", ar: "قلبه" }, root: "ق-ل-ب", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "بِكُلِّ", transliteration: "bi-kulli", meaning: { en: "of every", ur: "ہر", ar: "بكل" }, pos: "PREP+N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز کو", ar: "شيء" }, root: "ش-ي-أ", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "is All-Knowing", ur: "جاننے والا ہے", ar: "عليم" }, root: "ع-ل-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 11, to: 12, label: 'فعل + مفعول به' },
      { from: 13, to: 16, label: 'مبتدأ + خبر' },
      { from: 15, to: 16, label: 'موصوف + صفت' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "وَأَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ ۚ فَإِن تَوَلَّيْتُمْ فَإِنَّمَا عَلَىٰ رَسُولِنَا الْبَلَاغُ الْمُبِينُ",
    words: [
      { arabic: "وَأَطِيعُوا", transliteration: "wa-aṭīʿū", meaning: { en: "And obey", ur: "اور اطاعت کرو", ar: "وأطيعوا" }, root: "ط-و-ع", pos: "V", posLabel: "V", form: "IV", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "command" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَأَطِيعُوا", transliteration: "wa-aṭīʿū", meaning: { en: "and obey", ur: "اور اطاعت کرو", ar: "وأطيعوا" }, root: "ط-و-ع", pos: "V", posLabel: "V", form: "IV", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "coord_command" } },
      { arabic: "الرَّسُولَ", transliteration: "l-rasūla", meaning: { en: "the Messenger", ur: "رسول کی", ar: "الرسول" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "فَإِن", transliteration: "fa-in", meaning: { en: "but if", ur: "پس اگر", ar: "فإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "conditional" } },
      { arabic: "تَوَلَّيْتُمْ", transliteration: "tawallaytum", meaning: { en: "you turn away", ur: "تم منہ موڑ لو", ar: "توليتم" }, root: "و-ل-ي", pos: "V", posLabel: "V", form: "V", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "condition" } },
      { arabic: "فَإِنَّمَا", transliteration: "fa-innamā", meaning: { en: "then only", ur: "تو بس", ar: "فإنما" }, pos: "CONJ+RES", posLabel: "CONJ+RES", grammar: { role: "result" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَسُولِنَا", transliteration: "rasūlinā", meaning: { en: "Our Messenger", ur: "ہمارے رسول", ar: "رسولنا" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "الْبَلَاغُ", transliteration: "l-balāghu", meaning: { en: "is the clear conveyance", ur: "پہنچانا ہے", ar: "البلاغ" }, root: "ب-ل-غ", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "الْمُبِينُ", transliteration: "l-mubīnu", meaning: { en: "clear", ur: "واضح", ar: "المبين" }, root: "ب-ي-ن", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۚ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
    words: [
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "there is no", ur: "کوئی نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "إِلَٰهَ", transliteration: "ilāha", meaning: { en: "deity", ur: "معبود", ar: "إله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "Him", ur: "اس کے", ar: "هو" }, pos: "PRON", posLabel: "PRON", person: "3", gender: "M", number: "S", grammar: { role: "substitute" } },
      { arabic: "وَعَلَى", transliteration: "wa-ʿalā", meaning: { en: "And upon", ur: "اور", ar: "وعلى" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ پر", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "فَلْيَتَوَكَّلِ", transliteration: "fa-l-yatawakkal", meaning: { en: "let rely", ur: "بھروسہ رکھیں", ar: "فليتوكل" }, root: "و-ك-ل", pos: "V", posLabel: "V", form: "V", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "command" } },
      { arabic: "الْمُؤْمِنُونَ", transliteration: "l-muʾminūna", meaning: { en: "the believers", ur: "ایمان والے", ar: "المؤمنون" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } }
    ],
    structure: {
      relationships: [
      { from: 8, to: 9, label: 'فعل + فاعل' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّ مِنْ أَزْوَاجِكُمْ وَأَوْلَادِكُمْ عَدُوًّا لَّكُمْ فَاحْذَرُوهُمْ ۚ وَإِن تَعْفُوا وَتَصْفَحُوا وَتَغْفِرُوا فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", number: "P", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { role: "emphasis" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "among", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَزْوَاجِكُمْ", transliteration: "azwājikum", meaning: { en: "your spouses", ur: "تمہاری بیویاں", ar: "أزواجكم" }, root: "ز-و-ج", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "obj_prep" } },
      { arabic: "وَأَوْلَادِكُمْ", transliteration: "wa-awlādikum", meaning: { en: "and your children", ur: "اور تمہاری اولاد", ar: "وأولادكم" }, root: "و-ل-د", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "coord_obj_prep" } },
      { arabic: "عَدُوًّا", transliteration: "ʿaduwwan", meaning: { en: "an enemy", ur: "دشمن ہیں", ar: "عدوا" }, root: "ع-د-و", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "predicate" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "فَاحْذَرُوهُمْ", transliteration: "fa-ḥdharūhum", meaning: { en: "so beware of them", ur: "پس ان سے بچو", ar: "فاحذروهم" }, root: "ح-ذ-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "command" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "but if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "conditional" } },
      { arabic: "تَعْفُوا", transliteration: "taʿfū", meaning: { en: "you pardon", ur: "تم معاف کرو", ar: "تعفوا" }, root: "ع-ف-و", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "condition" } },
      { arabic: "وَتَصْفَحُوا", transliteration: "wa-taṣfaḥū", meaning: { en: "and overlook", ur: "اور درگزر کرو", ar: "وتصفحوا" }, root: "ص-ف-ح", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "coord_condition" } },
      { arabic: "وَتَغْفِرُوا", transliteration: "wa-taghfirū", meaning: { en: "and forgive", ur: "اور بخش دو", ar: "وتغفروا" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "coord_condition" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "then indeed", ur: "تو بیشک", ar: "فإن" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammar: { role: "result" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "subject_acc" } },
      { arabic: "غَفُورٌ", transliteration: "ghafūrun", meaning: { en: "is Forgiving", ur: "بخشنے والا ہے", ar: "غفور" }, root: "غ-ف-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", meaning: { en: "Merciful", ur: "رحم کرنے والا", ar: "رحيم" }, root: "ر-ح-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 17, to: 18, label: 'موصوف + صفت' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "إِنَّمَا أَمْوَالُكُمْ وَأَوْلَادُكُمْ فِتْنَةٌ ۚ وَاللَّهُ عِندَهُ أَجْرٌ عَظِيمٌ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Indeed", ur: "بس", ar: "إنما" }, pos: "RES", posLabel: "RES", grammar: { role: "restriction" } },
      { arabic: "أَمْوَالُكُمْ", transliteration: "amwālukum", meaning: { en: "your wealth", ur: "تمہارا مال", ar: "أموالكم" }, root: "م-و-ل", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "وَأَوْلَادُكُمْ", transliteration: "wa-awlādukum", meaning: { en: "and your children", ur: "اور تمہاری اولاد", ar: "وأولادكم" }, root: "و-ل-د", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "coord_subject" } },
      { arabic: "فِتْنَةٌ", transliteration: "fitnatun", meaning: { en: "are a trial", ur: "آزمائش ہے", ar: "فتنة" }, root: "ف-ت-ن", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "عِندَهُ", transliteration: "ʿindahu", meaning: { en: "with Him", ur: "اس کے پاس", ar: "عنده" }, pos: "N+PRON", case: "GEN", grammar: { role: "predicate" } },
      { arabic: "أَجْرٌ", transliteration: "ajrun", meaning: { en: "is a reward", ur: "اجر ہے", ar: "أجر" }, root: "أ-ج-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "عَظِيمٌ", transliteration: "ʿaẓīmun", meaning: { en: "great", ur: "عظیم", ar: "عظيم" }, root: "ع-ظ-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'مبتدأ + خبر' },
      { from: 5, to: 6, label: 'مبتدأ + خبر' },
      { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ وَاسْمَعُوا وَأَطِيعُوا وَأَنفِقُوا خَيْرًا لِّأَنفُسِكُمْ ۗ وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
    words: [
      { arabic: "فَاتَّقُوا", transliteration: "fa-ttaqū", meaning: { en: "So fear", ur: "پس ڈرو", ar: "فاتقوا" }, root: "و-ق-ي", pos: "V", posLabel: "V", form: "VIII", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "command" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "as much as", ur: "جتنا", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "adverb" } },
      { arabic: "اسْتَطَعْتُمْ", transliteration: "istaṭaʿtum", meaning: { en: "you are able", ur: "تم سے ہو سکے", ar: "استطعتم" }, root: "ط-و-ع", pos: "V", posLabel: "V", form: "X", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "وَاسْمَعُوا", transliteration: "wa-smaʿū", meaning: { en: "and listen", ur: "اور سنو", ar: "واسمعوا" }, root: "س-م-ع", pos: "V", posLabel: "V", form: "I", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "coord_command" } },
      { arabic: "وَأَطِيعُوا", transliteration: "wa-aṭīʿū", meaning: { en: "and obey", ur: "اور اطاعت کرو", ar: "وأطيعوا" }, root: "ط-و-ع", pos: "V", posLabel: "V", form: "IV", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "coord_command" } },
      { arabic: "وَأَنفِقُوا", transliteration: "wa-anfiqū", meaning: { en: "and spend", ur: "اور خرچ کرو", ar: "وأنفقوا" }, root: "ن-ف-ق", pos: "V", posLabel: "V", form: "IV", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "coord_command" } },
      { arabic: "خَيْرًا", transliteration: "khayran", meaning: { en: "for good", ur: "بھلائی", ar: "خيرا" }, root: "خ-ي-ر", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "لِّأَنفُسِكُمْ", transliteration: "li-anfusikum", meaning: { en: "for yourselves", ur: "اپنے لیے", ar: "لأنفسكم" }, root: "ن-ف-س", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "prep_phrase" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conditional" } },
      { arabic: "يُوقَ", transliteration: "yūqa", meaning: { en: "is protected", ur: "بچایا جائے", ar: "يوق" }, root: "و-ق-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "PASS", person: "3", gender: "M", number: "S", grammar: { role: "condition" } },
      { arabic: "شُحَّ", transliteration: "shuḥḥa", meaning: { en: "from stinginess", ur: "بخل سے", ar: "شح" }, root: "ش-ح-ح", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "نَفْسِهِ", transliteration: "nafsihi", meaning: { en: "of himself", ur: "اپنے نفس کے", ar: "نفسه" }, root: "ن-ف-س", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "فَأُولَٰئِكَ", transliteration: "fa-ulāʾika", meaning: { en: "then those", ur: "تو وہی لوگ", ar: "فأولئك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { role: "result" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", person: "3", gender: "M", number: "P", grammar: { role: "subject" } },
      { arabic: "الْمُفْلِحُونَ", transliteration: "l-mufliḥūna", meaning: { en: "the successful", ur: "کامیاب ہیں", ar: "المفلحون" }, root: "ف-ل-ح", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 6, to: 8, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'فعل + مفعول به' },
      { from: 11, to: 12, label: 'فعل + مفعول به' },
      { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
      { from: 15, to: 16, label: 'مبتدأ + خبر' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "إِن تُقْرِضُوا اللَّهَ قَرْضًا حَسَنًا يُضَاعِفْهُ لَكُمْ وَيَغْفِرْ لَكُمْ ۚ وَاللَّهُ شَكُورٌ حَلِيمٌ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "تُقْرِضُوا", transliteration: "tuqriḍū", meaning: { en: "you loan", ur: "تم قرض دو", ar: "تقرضوا" }, root: "ق-ر-ض", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "condition" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "to Allah", ur: "اللہ کو", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "قَرْضًا", transliteration: "qarḍan", meaning: { en: "a loan", ur: "قرض", ar: "قرضا" }, root: "ق-ر-ض", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "حَسَنًا", transliteration: "ḥasanan", meaning: { en: "goodly", ur: "اچھا", ar: "حسنا" }, root: "ح-س-ن", pos: "ADJ", posLabel: "ADJ", case: "ACC", grammar: { role: "adjective" } },
      { arabic: "يُضَاعِفْهُ", transliteration: "yuḍāʿifhu", meaning: { en: "He will multiply it", ur: "بڑھا دے گا", ar: "يضاعفه" }, root: "ض-ع-ف", pos: "V", posLabel: "V", form: "III", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "وَيَغْفِرْ", transliteration: "wa-yaghfir", meaning: { en: "and forgive", ur: "اور معاف کرے گا", ar: "ويغفر" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "coord_result" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "you", ur: "تمہیں", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "شَكُورٌ", transliteration: "shakūrun", meaning: { en: "is Most Appreciative", ur: "شکر کرنے والا ہے", ar: "شكور" }, root: "ش-ك-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "حَلِيمٌ", transliteration: "ḥalīmun", meaning: { en: "Forbearing", ur: "بردبار", ar: "حليم" }, root: "ح-ل-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'موصوف + صفت' },
      { from: 10, to: 11, label: 'موصوف + صفت' },
      { from: 10, to: 11, label: 'مبتدأ + خبر' },
      { from: 10, to: 12, label: 'مبتدأ + خبر' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْعَزِيزُ الْحَكِيمُ",
    words: [
      { arabic: "عَالِمُ", transliteration: "ʿālimu", meaning: { en: "Knower", ur: "جاننے والا", ar: "عالم" }, root: "ع-ل-م", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "الْغَيْبِ", transliteration: "l-ghaybi", meaning: { en: "of the unseen", ur: "غیب کا", ar: "الغيب" }, root: "غ-ي-ب", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَالشَّهَادَةِ", transliteration: "wa-l-shahādati", meaning: { en: "and the witnessed", ur: "اور حاضر کا", ar: "والشهادة" }, root: "ش-ه-د", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "coord_mudaf_ilayh" } },
      { arabic: "الْعَزِيزُ", transliteration: "l-ʿazīzu", meaning: { en: "the Almighty", ur: "غالب", ar: "العزيز" }, root: "ع-ز-ز", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "الْحَكِيمُ", transliteration: "l-ḥakīmu", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, root: "ح-ك-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
      { from: 1, to: 4, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'موصوف + صفت' },
      { from: 1, to: 5, label: 'مبتدأ + خبر' }
      ]
    }
  }
};

export default TREEBANK_DATA;
