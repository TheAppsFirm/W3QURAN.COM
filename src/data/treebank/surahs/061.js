/**
 * Surah As-Saff (The Ranks) - Surah 61
 * Quranic Arabic Treebank Data with Morphological Analysis
 * 14 Ayahs - Medinan Surah
 */

export const TREEBANK_DATA = {
  surahId: 61,
  surahName: "As-Saff",
  surahNameArabic: "الصف",
  totalAyahs: 14,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
    words: [
      { arabic: "سَبَّحَ", transliteration: "sabbaḥa", meaning: { en: "Glorifies", ur: "پاکیزگی بیان کرتا ہے", ar: "سَبَّحَ" }, root: "س-ب-ح", pos: "V", posLabel: "V", form: "II", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "لِلَّهِ", transliteration: "lillāhi", meaning: { en: "to Allah", ur: "اللہ کی", ar: "للهِ" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں", ar: "السماوات" }, root: "س-م-و", pos: "N", posLabel: "N", case: "GEN", number: "P", gender: "F", grammar: { role: "obj_prep" } },
      { arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and whatever", ur: "اور جو کچھ", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "coord_subject" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, root: "أ-ر-ض", pos: "N", posLabel: "N", case: "GEN", gender: "F", grammar: { role: "obj_prep" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "subject" } },
      { arabic: "الْعَزِيزُ", transliteration: "l-ʿazīzu", meaning: { en: "is the Almighty", ur: "غالب ہے", ar: "العزيز" }, root: "ع-ز-ز", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "الْحَكِيمُ", transliteration: "l-ḥakīmu", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, root: "ح-ك-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 9, to: 10, label: 'مبتدأ + خبر' },
      { from: 9, to: 11, label: 'مبتدأ + خبر' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", number: "P", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "لِمَ", transliteration: "lima", meaning: { en: "why", ur: "کیوں", ar: "لم" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "تَقُولُونَ", transliteration: "taqūlūna", meaning: { en: "do you say", ur: "تم کہتے ہو", ar: "تقولون" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "تَفْعَلُونَ", transliteration: "tafʿalūna", meaning: { en: "you do", ur: "تم کرتے", ar: "تفعلون" }, root: "ف-ع-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 8, to: 9, label: 'نفی + فعل' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "كَبُرَ مَقْتًا عِندَ اللَّهِ أَن تَقُولُوا مَا لَا تَفْعَلُونَ",
    words: [
      { arabic: "كَبُرَ", transliteration: "kabura", meaning: { en: "Greatly hateful", ur: "بڑی بات ہے", ar: "كبر" }, root: "ك-ب-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "exclamation" } },
      { arabic: "مَقْتًا", transliteration: "maqtan", meaning: { en: "hateful", ur: "ناپسندیدہ", ar: "مقتا" }, root: "م-ق-ت", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "spec" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "in the sight of", ur: "نزدیک", ar: "عند" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "adverb" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "SUB", posLabel: "SUB", grammar: { role: "subjunctive" } },
      { arabic: "تَقُولُوا", transliteration: "taqūlū", meaning: { en: "you say", ur: "تم کہو", ar: "تقولوا" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "تَفْعَلُونَ", transliteration: "tafʿalūna", meaning: { en: "you do", ur: "تم کرتے", ar: "تفعلون" }, root: "ف-ع-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 8, to: 9, label: 'نفی + فعل' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "subject_acc" } },
      { arabic: "يُحِبُّ", transliteration: "yuḥibbu", meaning: { en: "loves", ur: "پسند کرتا ہے", ar: "يحب" }, root: "ح-ب-ب", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "predicate" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان کو جو", ar: "الذين" }, pos: "REL", posLabel: "REL", number: "P", grammar: { role: "object" } },
      { arabic: "يُقَاتِلُونَ", transliteration: "yuqātilūna", meaning: { en: "fight", ur: "لڑتے ہیں", ar: "يقاتلون" }, root: "ق-ت-ل", pos: "V", posLabel: "V", form: "III", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِهِ", transliteration: "sabīlihi", meaning: { en: "His cause", ur: "اس کی راہ", ar: "سبيله" }, root: "س-ب-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "صَفًّا", transliteration: "ṣaffan", meaning: { en: "in a row", ur: "صف بندی میں", ar: "صفا" }, root: "ص-ف-ف", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "hal" } },
      { arabic: "كَأَنَّهُم", transliteration: "ka-annahum", meaning: { en: "as if they were", ur: "گویا وہ", ar: "كأنهم" }, pos: "COMP+PRON", posLabel: "COMP+PRON", grammar: { role: "simile" } },
      { arabic: "بُنْيَانٌ", transliteration: "bunyānun", meaning: { en: "a structure", ur: "عمارت ہیں", ar: "بنيان" }, root: "ب-ن-ي", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "مَّرْصُوصٌ", transliteration: "marṣūṣun", meaning: { en: "joined firmly", ur: "سیسہ پلائی ہوئی", ar: "مرصوص" }, root: "ر-ص-ص", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'موصول + صلة' },
      { from: 7, to: 8, label: 'حال' },
      { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ يَا قَوْمِ لِمَ تُؤْذُونَنِي وَقَد تَّعْلَمُونَ أَنِّي رَسُولُ اللَّهِ إِلَيْكُمْ ۖ فَلَمَّا زَاغُوا أَزَاغَ اللَّهُ قُلُوبَهُمْ ۚ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ",
    words: [
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "And when", ur: "اور جب", ar: "وإذ" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "said", ur: "کہا", ar: "قال" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "مُوسَىٰ", transliteration: "Mūsā", meaning: { en: "Moses", ur: "موسیٰ نے", ar: "موسى" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "لِقَوْمِهِ", transliteration: "li-qawmihi", meaning: { en: "to his people", ur: "اپنی قوم سے", ar: "لقومه" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", meaning: { en: "my people", ur: "میری قوم", ar: "قوم" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "VOC", grammar: { role: "vocative" } },
      { arabic: "لِمَ", transliteration: "lima", meaning: { en: "why", ur: "کیوں", ar: "لم" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "تُؤْذُونَنِي", transliteration: "tuʾdhūnanī", meaning: { en: "do you hurt me", ur: "تم مجھے ایذا دیتے ہو", ar: "تؤذونني" }, root: "أ-ذ-ي", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "وَقَد", transliteration: "wa-qad", meaning: { en: "while already", ur: "حالانکہ", ar: "وقد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammar: { role: "concessive" } },
      { arabic: "تَّعْلَمُونَ", transliteration: "taʿlamūna", meaning: { en: "you know", ur: "تم جانتے ہو", ar: "تعلمون" }, root: "ع-ل-م", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "أَنِّي", transliteration: "annī", meaning: { en: "that I am", ur: "کہ میں ہوں", ar: "أني" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { role: "complement" } },
      { arabic: "رَسُولُ", transliteration: "rasūlu", meaning: { en: "the Messenger", ur: "رسول", ar: "رسول" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "إِلَيْكُمْ", transliteration: "ilaykum", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "فَلَمَّا", transliteration: "fa-lammā", meaning: { en: "so when", ur: "پھر جب", ar: "فلما" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "زَاغُوا", transliteration: "zāghū", meaning: { en: "they deviated", ur: "وہ ٹیڑھے ہوئے", ar: "زاغوا" }, root: "ز-ي-غ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "أَزَاغَ", transliteration: "azāgha", meaning: { en: "Allah made deviate", ur: "ٹیڑھا کر دیا", ar: "أزاغ" }, root: "ز-ي-غ", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result_verb" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "قُلُوبَهُمْ", transliteration: "qulūbahum", meaning: { en: "their hearts", ur: "ان کے دل", ar: "قلوبهم" }, root: "ق-ل-ب", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "does not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يَهْدِي", transliteration: "yahdī", meaning: { en: "guide", ur: "ہدایت دیتا", ar: "يهدي" }, root: "ه-د-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الْقَوْمَ", transliteration: "l-qawma", meaning: { en: "the people", ur: "قوم کو", ar: "القوم" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "الْفَاسِقِينَ", transliteration: "l-fāsiqīna", meaning: { en: "the defiantly disobedient", ur: "نافرمان", ar: "الفاسقين" }, root: "ف-س-ق", pos: "ADJ", posLabel: "ADJ", case: "ACC", number: "P", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
      { from: 16, to: 19, label: 'فعل + مفعول به' },
      { from: 17, to: 18, label: 'فعل + فاعل' },
      { from: 17, to: 19, label: 'فعل + مفعول به' },
      { from: 21, to: 22, label: 'نفی + فعل' },
      { from: 22, to: 23, label: 'فعل + مفعول به' },
      { from: 23, to: 24, label: 'موصوف + صفت' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَا بَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُم مُّصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ ۖ فَلَمَّا جَاءَهُم بِالْبَيِّنَاتِ قَالُوا هَٰذَا سِحْرٌ مُّبِينٌ",
    words: [
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "And when", ur: "اور جب", ar: "وإذ" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "said", ur: "کہا", ar: "قال" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "عِيسَى", transliteration: "ʿĪsā", meaning: { en: "Jesus", ur: "عیسیٰ نے", ar: "عيسى" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "ابْنُ", transliteration: "ibnu", meaning: { en: "son", ur: "بیٹے", ar: "ابن" }, root: "ب-ن-ي", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "apposition" } },
      { arabic: "مَرْيَمَ", transliteration: "Maryama", meaning: { en: "of Mary", ur: "مریم کے", ar: "مريم" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "بَنِي", transliteration: "banī", meaning: { en: "Children", ur: "بنی", ar: "بني" }, root: "ب-ن-ي", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "vocative" } },
      { arabic: "إِسْرَائِيلَ", transliteration: "Isrāʾīla", meaning: { en: "of Israel", ur: "اسرائیل", ar: "إسرائيل" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "إِنِّي", transliteration: "innī", meaning: { en: "indeed I am", ur: "بیشک میں ہوں", ar: "إني" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { role: "emphasis" } },
      { arabic: "رَسُولُ", transliteration: "rasūlu", meaning: { en: "a Messenger", ur: "رسول", ar: "رسول" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "إِلَيْكُم", transliteration: "ilaykum", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "مُّصَدِّقًا", transliteration: "muṣaddiqan", meaning: { en: "confirming", ur: "تصدیق کرنے والا", ar: "مصدقا" }, root: "ص-د-ق", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "hal" } },
      { arabic: "لِّمَا", transliteration: "li-mā", meaning: { en: "what", ur: "جو", ar: "لما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "پہلے", ar: "بين" }, pos: "N", posLabel: "N", case: "ACC", grammar: { role: "adverb" } },
      { arabic: "يَدَيَّ", transliteration: "yadayya", meaning: { en: "me", ur: "میرے", ar: "يدي" }, root: "ي-د-ي", pos: "N", posLabel: "N", case: "GEN", number: "D", grammar: { role: "mudaf_ilayh" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "التَّوْرَاةِ", transliteration: "l-tawrāti", meaning: { en: "the Torah", ur: "تورات", ar: "التوراة" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "وَمُبَشِّرًا", transliteration: "wa-mubashshiran", meaning: { en: "and bringing good tidings", ur: "اور بشارت دینے والا", ar: "ومبشرا" }, root: "ب-ش-ر", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "coord_hal" } },
      { arabic: "بِرَسُولٍ", transliteration: "bi-rasūlin", meaning: { en: "of a Messenger", ur: "ایک رسول کی", ar: "برسول" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "يَأْتِي", transliteration: "yaʾtī", meaning: { en: "to come", ur: "آنے والے", ar: "يأتي" }, root: "أ-ت-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "adjective_clause" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "بعد", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْدِي", transliteration: "baʿdī", meaning: { en: "me", ur: "میرے", ar: "بعدي" }, root: "ب-ع-د", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "اسْمُهُ", transliteration: "ismuhu", meaning: { en: "his name", ur: "جس کا نام", ar: "اسمه" }, root: "س-م-و", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "أَحْمَدُ", transliteration: "Aḥmadu", meaning: { en: "is Ahmad", ur: "احمد ہے", ar: "أحمد" }, root: "ح-م-د", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "فَلَمَّا", transliteration: "fa-lammā", meaning: { en: "but when", ur: "پھر جب", ar: "فلما" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "جَاءَهُم", transliteration: "jāʾahum", meaning: { en: "he came to them", ur: "وہ آیا ان کے پاس", ar: "جاءهم" }, root: "ج-ي-أ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "بِالْبَيِّنَاتِ", transliteration: "bi-l-bayyināti", meaning: { en: "with clear proofs", ur: "واضح دلائل لے کر", ar: "بالبينات" }, root: "ب-ي-ن", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "prep_phrase" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "they said", ur: "انہوں نے کہا", ar: "قالوا" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "result_verb" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "سِحْرٌ", transliteration: "siḥrun", meaning: { en: "magic", ur: "جادو ہے", ar: "سحر" }, root: "س-ح-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "obvious", ur: "واضح", ar: "مبين" }, root: "ب-ي-ن", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
      { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
      { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
      { from: 11, to: 13, label: 'حال' },
      { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
      { from: 24, to: 25, label: 'مبتدأ + خبر' },
      { from: 30, to: 31, label: 'مبتدأ + خبر' },
      { from: 31, to: 32, label: 'موصوف + صفت' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ الْكَذِبَ وَهُوَ يُدْعَىٰ إِلَى الْإِسْلَامِ ۚ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ",
    words: [
      { arabic: "وَمَنْ", transliteration: "wa-man", meaning: { en: "And who", ur: "اور کون", ar: "ومن" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { role: "interrogative" } },
      { arabic: "أَظْلَمُ", transliteration: "aẓlamu", meaning: { en: "is more unjust", ur: "زیادہ ظالم ہے", ar: "أظلم" }, root: "ظ-ل-م", pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } },
      { arabic: "مِمَّنِ", transliteration: "mimman", meaning: { en: "than one who", ur: "اس سے جو", ar: "ممن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "comparison" } },
      { arabic: "افْتَرَىٰ", transliteration: "iftarā", meaning: { en: "invents", ur: "گھڑے", ar: "افترى" }, root: "ف-ر-ي", pos: "V", posLabel: "V", form: "VIII", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "relative_verb" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "about", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "الْكَذِبَ", transliteration: "l-kadhiba", meaning: { en: "a lie", ur: "جھوٹ", ar: "الكذب" }, root: "ك-ذ-ب", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "while he", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "hal" } },
      { arabic: "يُدْعَىٰ", transliteration: "yudʿā", meaning: { en: "is being invited", ur: "بلایا جا رہا ہے", ar: "يدعى" }, root: "د-ع-و", pos: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "PASS", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْإِسْلَامِ", transliteration: "l-Islāmi", meaning: { en: "Islam", ur: "اسلام", ar: "الإسلام" }, root: "س-ل-م", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "does not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يَهْدِي", transliteration: "yahdī", meaning: { en: "guide", ur: "ہدایت دیتا", ar: "يهدي" }, root: "ه-د-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الْقَوْمَ", transliteration: "l-qawma", meaning: { en: "the people", ur: "قوم کو", ar: "القوم" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "الظَّالِمِينَ", transliteration: "l-ẓālimīna", meaning: { en: "the wrongdoing", ur: "ظالم", ar: "الظالمين" }, root: "ظ-ل-م", pos: "ADJ", posLabel: "ADJ", case: "ACC", number: "P", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 4, to: 7, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'حال' },
      { from: 13, to: 14, label: 'نفی + فعل' },
      { from: 14, to: 15, label: 'فعل + مفعول به' },
      { from: 15, to: 16, label: 'موصوف + صفت' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ وَلَوْ كَرِهَ الْكَافِرُونَ",
    words: [
      { arabic: "يُرِيدُونَ", transliteration: "yurīdūna", meaning: { en: "They want", ur: "وہ چاہتے ہیں", ar: "يريدون" }, root: "ر-و-د", pos: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "لِيُطْفِئُوا", transliteration: "li-yuṭfiʾū", meaning: { en: "to extinguish", ur: "بجھانا", ar: "ليطفئوا" }, root: "ط-ف-أ", pos: "V", form: "IV", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "purpose" } },
      { arabic: "نُورَ", transliteration: "nūra", meaning: { en: "the light", ur: "نور", ar: "نور" }, root: "ن-و-ر", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "بِأَفْوَاهِهِمْ", transliteration: "bi-afwāhihim", meaning: { en: "with their mouths", ur: "اپنے منہ سے", ar: "بأفواههم" }, root: "ف-و-ه", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "prep_phrase" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "but Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "مُتِمُّ", transliteration: "mutimmu", meaning: { en: "will perfect", ur: "پورا کرنے والا ہے", ar: "متم" }, root: "ت-م-م", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "نُورِهِ", transliteration: "nūrihi", meaning: { en: "His light", ur: "اپنا نور", ar: "نوره" }, root: "ن-و-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "object" } },
      { arabic: "وَلَوْ", transliteration: "wa-law", meaning: { en: "even if", ur: "اگرچہ", ar: "ولو" }, pos: "CONJ+COND", grammar: { role: "concessive" } },
      { arabic: "كَرِهَ", transliteration: "kariha", meaning: { en: "dislike", ur: "ناپسند کریں", ar: "كره" }, root: "ك-ر-ه", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الْكَافِرُونَ", transliteration: "l-kāfirūna", meaning: { en: "the disbelievers", ur: "کافر", ar: "الكافرون" }, root: "ك-ف-ر", pos: "N", case: "NOM", number: "P", grammar: { role: "subject" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 6, to: 7, label: 'مبتدأ + خبر' },
      { from: 10, to: 11, label: 'فعل + فاعل' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُونَ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی ہے", ar: "هو" }, pos: "PRON", person: "3", gender: "M", number: "S", grammar: { role: "subject" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے", ar: "الذي" }, pos: "REL", gender: "M", grammar: { role: "relative" } },
      { arabic: "أَرْسَلَ", transliteration: "arsala", meaning: { en: "sent", ur: "بھیجا", ar: "أرسل" }, root: "ر-س-ل", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "رَسُولَهُ", transliteration: "rasūlahu", meaning: { en: "His Messenger", ur: "اپنا رسول", ar: "رسوله" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "بِالْهُدَىٰ", transliteration: "bi-l-hudā", meaning: { en: "with guidance", ur: "ہدایت لے کر", ar: "بالهدى" }, root: "ه-د-ي", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "وَدِينِ", transliteration: "wa-dīni", meaning: { en: "and the religion", ur: "اور دین", ar: "ودين" }, root: "د-ي-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "coord_prep_phrase" } },
      { arabic: "الْحَقِّ", transliteration: "l-ḥaqqi", meaning: { en: "of truth", ur: "حق", ar: "الحق" }, root: "ح-ق-ق", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "لِيُظْهِرَهُ", transliteration: "li-yuẓhirahu", meaning: { en: "to manifest it", ur: "غالب کرنے کے لیے", ar: "ليظهره" }, root: "ظ-ه-ر", pos: "V", form: "IV", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "purpose" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الدِّينِ", transliteration: "l-dīni", meaning: { en: "all religions", ur: "سب دینوں", ar: "الدين" }, root: "د-ي-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "كُلِّهِ", transliteration: "kullihi", meaning: { en: "all of it", ur: "سب", ar: "كله" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "emphasis" } },
      { arabic: "وَلَوْ", transliteration: "wa-law", meaning: { en: "even if", ur: "اگرچہ", ar: "ولو" }, pos: "CONJ+COND", grammar: { role: "concessive" } },
      { arabic: "كَرِهَ", transliteration: "kariha", meaning: { en: "dislike", ur: "ناپسند کریں", ar: "كره" }, root: "ك-ر-ه", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الْمُشْرِكُونَ", transliteration: "l-mushrikūna", meaning: { en: "the polytheists", ur: "مشرک", ar: "المشركون" }, root: "ش-ر-ك", pos: "N", case: "NOM", number: "P", grammar: { role: "subject" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 13, to: 14, label: 'فعل + فاعل' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا هَلْ أَدُلُّكُمْ عَلَىٰ تِجَارَةٍ تُنجِيكُم مِّنْ عَذَابٍ أَلِيمٍ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", number: "P", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Shall", ur: "کیا", ar: "هل" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "أَدُلُّكُمْ", transliteration: "adullukum", meaning: { en: "I guide you", ur: "میں تمہیں بتاؤں", ar: "أدلكم" }, root: "د-ل-ل", pos: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "1", number: "S", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "کی طرف", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تِجَارَةٍ", transliteration: "tijāratin", meaning: { en: "a transaction", ur: "ایک تجارت", ar: "تجارة" }, root: "ت-ج-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "تُنجِيكُم", transliteration: "tunjīkum", meaning: { en: "that will save you", ur: "جو تمہیں بچائے", ar: "تنجيكم" }, root: "ن-ج-و", pos: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "adjective_clause" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَذَابٍ", transliteration: "ʿadhābin", meaning: { en: "a punishment", ur: "عذاب", ar: "عذاب" }, root: "ع-ذ-ب", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "أَلِيمٍ", transliteration: "alīmin", meaning: { en: "painful", ur: "دردناک", ar: "أليم" }, root: "أ-ل-م", pos: "ADJ", case: "GEN", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 11, to: 12, label: 'موصوف + صفت' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "تُؤْمِنُونَ بِاللَّهِ وَرَسُولِهِ وَتُجَاهِدُونَ فِي سَبِيلِ اللَّهِ بِأَمْوَالِكُمْ وَأَنفُسِكُمْ ۚ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
    words: [
      { arabic: "تُؤْمِنُونَ", transliteration: "tuʾminūna", meaning: { en: "You believe", ur: "تم ایمان لاؤ", ar: "تؤمنون" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "بِاللَّهِ", transliteration: "bi-llāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "وَرَسُولِهِ", transliteration: "wa-rasūlihi", meaning: { en: "and His Messenger", ur: "اور اس کے رسول پر", ar: "ورسوله" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "coord_prep_phrase" } },
      { arabic: "وَتُجَاهِدُونَ", transliteration: "wa-tujāhidūna", meaning: { en: "and strive", ur: "اور جہاد کرو", ar: "وتجاهدون" }, root: "ج-ه-د", pos: "V", form: "III", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "coord_verb" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the cause", ur: "راستے", ar: "سبيل" }, root: "س-ب-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "بِأَمْوَالِكُمْ", transliteration: "bi-amwālikum", meaning: { en: "with your wealth", ur: "اپنے مالوں سے", ar: "بأموالكم" }, root: "م-و-ل", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "prep_phrase" } },
      { arabic: "وَأَنفُسِكُمْ", transliteration: "wa-anfusikum", meaning: { en: "and your lives", ur: "اور جانوں سے", ar: "وأنفسكم" }, root: "ن-ف-س", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "coord_prep_phrase" } },
      { arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", meaning: { en: "That", ur: "یہ", ar: "ذلكم" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "خَيْرٌ", transliteration: "khayrun", meaning: { en: "is better", ur: "بہتر ہے", ar: "خير" }, root: "خ-ي-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", grammar: { role: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you", ur: "تم", ar: "كنتم" }, root: "ك-و-ن", pos: "V", form: "I", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "condition" } },
      { arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", meaning: { en: "knew", ur: "جانتے", ar: "تعلمون" }, root: "ع-ل-م", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 10, to: 11, label: 'مبتدأ + خبر' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "يَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَيُدْخِلْكُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ وَمَسَاكِنَ طَيِّبَةً فِي جَنَّاتِ عَدْنٍ ۚ ذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
    words: [
      { arabic: "يَغْفِرْ", transliteration: "yaghfir", meaning: { en: "He will forgive", ur: "وہ معاف کرے گا", ar: "يغفر" }, root: "غ-ف-ر", pos: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "ذُنُوبَكُمْ", transliteration: "dhunūbakum", meaning: { en: "your sins", ur: "گناہ", ar: "ذنوبكم" }, root: "ذ-ن-ب", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "وَيُدْخِلْكُمْ", transliteration: "wa-yudkhilkum", meaning: { en: "and admit you", ur: "اور داخل کرے گا", ar: "ويدخلكم" }, root: "د-خ-ل", pos: "V", form: "IV", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "coord_result" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "Gardens", ur: "باغوں میں", ar: "جنات" }, root: "ج-ن-ن", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "تَجْرِي", transliteration: "tajrī", meaning: { en: "flow", ur: "بہتی ہیں", ar: "تجري" }, root: "ج-ر-ي", pos: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَحْتِهَا", transliteration: "taḥtihā", meaning: { en: "beneath them", ur: "ان کے نیچے", ar: "تحتها" }, pos: "N+PRON", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "الْأَنْهَارُ", transliteration: "l-anhāru", meaning: { en: "rivers", ur: "نہریں", ar: "الأنهار" }, root: "ن-ه-ر", pos: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "وَمَسَاكِنَ", transliteration: "wa-masākina", meaning: { en: "and pleasant dwellings", ur: "اور پاکیزہ مکانات", ar: "ومساكن" }, root: "س-ك-ن", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "coord_object" } },
      { arabic: "طَيِّبَةً", transliteration: "ṭayyibatan", meaning: { en: "good", ur: "اچھے", ar: "طيبة" }, root: "ط-ي-ب", pos: "ADJ", case: "ACC", grammar: { role: "adjective" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "جَنَّاتِ", transliteration: "jannāti", meaning: { en: "Gardens", ur: "باغات", ar: "جنات" }, root: "ج-ن-ن", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "obj_prep" } },
      { arabic: "عَدْنٍ", transliteration: "ʿAdnin", meaning: { en: "of Eden", ur: "ہمیشگی کے", ar: "عدن" }, root: "ع-د-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "الْفَوْزُ", transliteration: "l-fawzu", meaning: { en: "is the success", ur: "کامیابی ہے", ar: "الفوز" }, root: "ف-و-ز", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "الْعَظِيمُ", transliteration: "l-ʿaẓīmu", meaning: { en: "supreme", ur: "بڑی", ar: "العظيم" }, root: "ع-ظ-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 10, to: 11, label: 'موصوف + صفت' },
      { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
      { from: 15, to: 16, label: 'مبتدأ + خبر' },
      { from: 16, to: 17, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَأُخْرَىٰ تُحِبُّونَهَا ۖ نَصْرٌ مِّنَ اللَّهِ وَفَتْحٌ قَرِيبٌ ۗ وَبَشِّرِ الْمُؤْمِنِينَ",
    words: [
      { arabic: "وَأُخْرَىٰ", transliteration: "wa-ukhrā", meaning: { en: "And another", ur: "اور ایک اور", ar: "وأخرى" }, root: "أ-خ-ر", pos: "ADJ", case: "NOM", gender: "F", grammar: { role: "subject" } },
      { arabic: "تُحِبُّونَهَا", transliteration: "tuḥibbūnahā", meaning: { en: "which you love", ur: "جو تمہیں پسند ہے", ar: "تحبونها" }, root: "ح-ب-ب", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "adjective_clause" } },
      { arabic: "نَصْرٌ", transliteration: "naṣrun", meaning: { en: "victory", ur: "مدد", ar: "نصر" }, root: "ن-ص-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "apposition" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "وَفَتْحٌ", transliteration: "wa-fatḥun", meaning: { en: "and a conquest", ur: "اور فتح", ar: "وفتح" }, root: "ف-ت-ح", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "coord_apposition" } },
      { arabic: "قَرِيبٌ", transliteration: "qarībun", meaning: { en: "near", ur: "جلد", ar: "قريب" }, root: "ق-ر-ب", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } },
      { arabic: "وَبَشِّرِ", transliteration: "wa-bashshir", meaning: { en: "And give good tidings", ur: "اور خوشخبری دیجیے", ar: "وبشر" }, root: "ب-ش-ر", pos: "V", form: "II", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "command" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "l-muʾminīna", meaning: { en: "to the believers", ur: "ایمان والوں کو", ar: "المؤمنين" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'موصوف + صفت' },
      { from: 8, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا أَنصَارَ اللَّهِ كَمَا قَالَ عِيسَى ابْنُ مَرْيَمَ لِلْحَوَارِيِّينَ مَنْ أَنصَارِي إِلَى اللَّهِ ۖ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ ۖ فَآمَنَت طَّائِفَةٌ مِّن بَنِي إِسْرَائِيلَ وَكَفَرَت طَّائِفَةٌ ۖ فَأَيَّدْنَا الَّذِينَ آمَنُوا عَلَىٰ عَدُوِّهِمْ فَأَصْبَحُوا ظَاهِرِينَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", number: "P", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "كُونُوا", transliteration: "kūnū", meaning: { en: "be", ur: "بن جاؤ", ar: "كونوا" }, root: "ك-و-ن", pos: "V", form: "I", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "command" } },
      { arabic: "أَنصَارَ", transliteration: "anṣāra", meaning: { en: "supporters", ur: "مددگار", ar: "أنصار" }, root: "ن-ص-ر", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "predicate" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "as", ur: "جیسا", ar: "كما" }, pos: "COMP", grammar: { role: "comparison" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "said", ur: "کہا", ar: "قال" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "عِيسَى", transliteration: "ʿĪsā", meaning: { en: "Jesus", ur: "عیسیٰ نے", ar: "عيسى" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "ابْنُ", transliteration: "ibnu", meaning: { en: "son", ur: "بیٹے", ar: "ابن" }, root: "ب-ن-ي", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "apposition" } },
      { arabic: "مَرْيَمَ", transliteration: "Maryama", meaning: { en: "of Mary", ur: "مریم کے", ar: "مريم" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "لِلْحَوَارِيِّينَ", transliteration: "li-l-ḥawāriyyīna", meaning: { en: "to the disciples", ur: "حواریوں سے", ar: "للحواريين" }, root: "ح-و-ر", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "prep_phrase" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "Who", ur: "کون", ar: "من" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "أَنصَارِي", transliteration: "anṣārī", meaning: { en: "are my supporters", ur: "میرے مددگار ہیں", ar: "أنصاري" }, root: "ن-ص-ر", pos: "N", case: "NOM", number: "P", grammar: { role: "predicate" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "for", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "Said", ur: "کہا", ar: "قال" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الْحَوَارِيُّونَ", transliteration: "l-ḥawāriyyūna", meaning: { en: "the disciples", ur: "حواریوں نے", ar: "الحواريون" }, root: "ح-و-ر", pos: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", person: "1", number: "P", grammar: { role: "subject" } },
      { arabic: "أَنصَارُ", transliteration: "anṣāru", meaning: { en: "are the supporters", ur: "مددگار", ar: "أنصار" }, root: "ن-ص-ر", pos: "N", case: "NOM", number: "P", grammar: { role: "predicate" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "فَآمَنَت", transliteration: "fa-āmanat", meaning: { en: "So believed", ur: "پس ایمان لائے", ar: "فآمنت" }, root: "أ-م-ن", pos: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "result_verb" } },
      { arabic: "طَّائِفَةٌ", transliteration: "ṭāʾifatun", meaning: { en: "a group", ur: "ایک گروہ", ar: "طائفة" }, root: "ط-و-ف", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَنِي", transliteration: "banī", meaning: { en: "Children", ur: "بنی", ar: "بني" }, root: "ب-ن-ي", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "obj_prep" } },
      { arabic: "إِسْرَائِيلَ", transliteration: "Isrāʾīla", meaning: { en: "of Israel", ur: "اسرائیل", ar: "إسرائيل" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَكَفَرَت", transliteration: "wa-kafarat", meaning: { en: "and disbelieved", ur: "اور کفر کیا", ar: "وكفرت" }, root: "ك-ف-ر", pos: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "coord_verb" } },
      { arabic: "طَّائِفَةٌ", transliteration: "ṭāʾifatun", meaning: { en: "a group", ur: "ایک گروہ نے", ar: "طائفة" }, root: "ط-و-ف", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "فَأَيَّدْنَا", transliteration: "fa-ayyadnā", meaning: { en: "So We supported", ur: "پھر ہم نے مدد کی", ar: "فأيدنا" }, root: "أ-ي-د", pos: "V", form: "II", aspect: "PERF", voice: "ACT", person: "1", number: "P", grammar: { role: "result_verb" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کی جو", ar: "الذين" }, pos: "REL", posLabel: "REL", number: "P", grammar: { role: "object" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "against", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَدُوِّهِمْ", transliteration: "ʿaduwwihim", meaning: { en: "their enemy", ur: "ان کے دشمن", ar: "عدوهم" }, root: "ع-د-و", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "فَأَصْبَحُوا", transliteration: "fa-aṣbaḥū", meaning: { en: "and they became", ur: "پھر وہ ہو گئے", ar: "فأصبحوا" }, root: "ص-ب-ح", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "result_verb" } },
      { arabic: "ظَاهِرِينَ", transliteration: "ẓāhirīna", meaning: { en: "dominant", ur: "غالب", ar: "ظاهرين" }, root: "ظ-ه-ر", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 9, to: 10, label: 'فعل + فاعل' },
      { from: 10, to: 15, label: 'مبتدأ + خبر' },
      { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
      { from: 18, to: 19, label: 'فعل + فاعل' },
      { from: 19, to: 21, label: 'مبتدأ + خبر' },
      { from: 20, to: 21, label: 'مبتدأ + خبر' },
      { from: 21, to: 22, label: 'مضاف + مضاف إليه' },
      { from: 23, to: 24, label: 'فعل + فاعل' },
      { from: 26, to: 27, label: 'مضاف + مضاف إليه' },
      { from: 28, to: 29, label: 'فعل + فاعل' },
      { from: 31, to: 32, label: 'موصول + صلة' }
      ]
    }
  }
};

export default TREEBANK_DATA;
