/**
 * Surah Al-Mumtahina (The Woman to be Examined) - Surah 60
 * Quranic Arabic Treebank Data - 13 Ayahs - Medinan Surah
 */

export const TREEBANK_DATA = {
  surahId: 60,
  surahName: "Al-Mumtahina",
  surahNameArabic: "الممتحنة",
  totalAyahs: 13,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ تُلْقُونَ إِلَيْهِم بِالْمَوَدَّةِ وَقَدْ كَفَرُوا بِمَا جَاءَكُم مِّنَ الْحَقِّ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَتَّخِذُوا", transliteration: "tattakhidhū", meaning: { en: "take", ur: "بناؤ", ar: "تتخذوا" }, root: "أ-خ-ذ", pos: "V", posLabel: "V", form: "VIII", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "عَدُوِّي", transliteration: "ʿaduwwī", meaning: { en: "My enemy", ur: "میرے دشمن", ar: "عدوي" }, root: "ع-د-و", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَعَدُوَّكُمْ", transliteration: "wa-ʿaduwwakum", meaning: { en: "and your enemy", ur: "اور تمہارے دشمن", ar: "وعدوكم" }, root: "ع-د-و", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "coord_object" } },
      { arabic: "أَوْلِيَاءَ", transliteration: "awliyāʾa", meaning: { en: "as allies", ur: "دوست", ar: "أولياء" }, root: "و-ل-ي", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "second_object" } },
      { arabic: "تُلْقُونَ", transliteration: "tulqūna", meaning: { en: "extending", ur: "ڈالتے ہو", ar: "تلقون" }, root: "ل-ق-ي", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", grammar: { role: "hal" } },
      { arabic: "إِلَيْهِم", transliteration: "ilayhim", meaning: { en: "to them", ur: "ان کی طرف", ar: "إليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "بِالْمَوَدَّةِ", transliteration: "bi-l-mawaddati", meaning: { en: "affection", ur: "محبت", ar: "بالمودة" }, root: "و-د-د", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "وَقَدْ", transliteration: "wa-qad", meaning: { en: "while", ur: "حالانکہ", ar: "وقد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammar: { role: "concessive" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "they have disbelieved", ur: "انہوں نے کفر کیا", ar: "كفروا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "in what", ur: "جو", ar: "بما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "جَاءَكُم", transliteration: "jāʾakum", meaning: { en: "has come to you", ur: "تمہارے پاس آئی", ar: "جاءكم" }, root: "ج-ي-أ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْحَقِّ", transliteration: "l-ḥaqqi", meaning: { en: "the truth", ur: "حق", ar: "الحق" }, root: "ح-ق-ق", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'حال' },
      { from: 15, to: 16, label: 'موصول + صلة' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "إِن يَثْقَفُوكُمْ يَكُونُوا لَكُمْ أَعْدَاءً وَيَبْسُطُوا إِلَيْكُمْ أَيْدِيَهُمْ وَأَلْسِنَتَهُم بِالسُّوءِ وَوَدُّوا لَوْ تَكْفُرُونَ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "يَثْقَفُوكُمْ", transliteration: "yathqafūkum", meaning: { en: "they gain dominance over you", ur: "وہ تم پر قابو پائیں", ar: "يثقفوكم" }, root: "ث-ق-ف", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "condition" } },
      { arabic: "يَكُونُوا", transliteration: "yakūnū", meaning: { en: "they would be", ur: "وہ ہو جائیں", ar: "يكونوا" }, root: "ك-و-ن", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "result" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "to you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "أَعْدَاءً", transliteration: "aʿdāʾan", meaning: { en: "enemies", ur: "دشمن", ar: "أعداء" }, root: "ع-د-و", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "predicate" } },
      { arabic: "وَيَبْسُطُوا", transliteration: "wa-yabsuṭū", meaning: { en: "and extend", ur: "اور پھیلائیں", ar: "ويبسطوا" }, root: "ب-س-ط", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "coord_result" } },
      { arabic: "إِلَيْكُمْ", transliteration: "ilaykum", meaning: { en: "toward you", ur: "تمہاری طرف", ar: "إليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "أَيْدِيَهُمْ", transliteration: "aydiyahum", meaning: { en: "their hands", ur: "اپنے ہاتھ", ar: "أيديهم" }, root: "ي-د-ي", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَأَلْسِنَتَهُم", transliteration: "wa-alsinatahum", meaning: { en: "and their tongues", ur: "اور زبانیں", ar: "وألسنتهم" }, root: "ل-س-ن", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "coord_object" } },
      { arabic: "بِالسُّوءِ", transliteration: "bi-l-sūʾi", meaning: { en: "with harm", ur: "برائی سے", ar: "بالسوء" }, root: "س-و-أ", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "وَوَدُّوا", transliteration: "wa-waddū", meaning: { en: "and they wish", ur: "اور وہ چاہتے ہیں", ar: "وودوا" }, root: "و-د-د", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "if", ur: "کاش", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { role: "wish" } },
      { arabic: "تَكْفُرُونَ", transliteration: "takfurūna", meaning: { en: "you would disbelieve", ur: "تم کفر کرو", ar: "تكفرون" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 8, label: 'فعل + مفعول به' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "لَن تَنفَعَكُمْ أَرْحَامُكُمْ وَلَا أَوْلَادُكُمْ ۚ يَوْمَ الْقِيَامَةِ يَفْصِلُ بَيْنَكُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    words: [
      { arabic: "لَن", transliteration: "lan", meaning: { en: "Never", ur: "ہرگز نہیں", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic_negative" } },
      { arabic: "تَنفَعَكُمْ", transliteration: "tanfaʿakum", meaning: { en: "will benefit you", ur: "تمہیں فائدہ دیں گے", ar: "تنفعكم" }, root: "ن-ف-ع", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", grammar: { role: "verb" } },
      { arabic: "أَرْحَامُكُمْ", transliteration: "arḥāmukum", meaning: { en: "your relatives", ur: "تمہارے رشتے", ar: "أرحامكم" }, root: "ر-ح-م", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_negative" } },
      { arabic: "أَوْلَادُكُمْ", transliteration: "awlādukum", meaning: { en: "your children", ur: "تمہاری اولاد", ar: "أولادكم" }, root: "و-ل-د", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "coord_subject" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "on the Day", ur: "دن", ar: "يوم" }, root: "ي-و-م", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "adverb" } },
      { arabic: "الْقِيَامَةِ", transliteration: "l-qiyāmati", meaning: { en: "of Resurrection", ur: "قیامت کے", ar: "القيامة" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "يَفْصِلُ", transliteration: "yafṣilu", meaning: { en: "He will judge", ur: "فیصلہ کرے گا", ar: "يفصل" }, root: "ف-ص-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", grammar: { role: "verb" } },
      { arabic: "بَيْنَكُمْ", transliteration: "baynakum", meaning: { en: "between you", ur: "تمہارے درمیان", ar: "بينكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "adverb" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو", ar: "بما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, root: "ع-م-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", grammar: { role: "relative_verb" } },
      { arabic: "بَصِيرٌ", transliteration: "baṣīrun", meaning: { en: "is Seeing", ur: "دیکھنے والا ہے", ar: "بصير" }, root: "ب-ص-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 10, to: 13, label: 'مبتدأ + خبر' },
      { from: 11, to: 12, label: 'موصول + صلة' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "قَدْ كَانَتْ لَكُمْ أُسْوَةٌ حَسَنَةٌ فِي إِبْرَاهِيمَ وَالَّذِينَ مَعَهُ إِذْ قَالُوا لِقَوْمِهِمْ إِنَّا بُرَآءُ مِنكُمْ وَمِمَّا تَعْبُدُونَ مِن دُونِ اللَّهِ كَفَرْنَا بِكُمْ وَبَدَا بَيْنَنَا وَبَيْنَكُمُ الْعَدَاوَةُ وَالْبَغْضَاءُ أَبَدًا حَتَّىٰ تُؤْمِنُوا بِاللَّهِ وَحْدَهُ",
    words: [
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "Certainly", ur: "یقیناً", ar: "قد" }, pos: "CERT", posLabel: "CERT", grammar: { role: "emphasis" } },
      { arabic: "كَانَتْ", transliteration: "kānat", meaning: { en: "there was", ur: "تھا", ar: "كانت" }, root: "ك-و-ن", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "أُسْوَةٌ", transliteration: "uswatun", meaning: { en: "an excellent example", ur: "نمونہ", ar: "أسوة" }, root: "أ-س-و", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "حَسَنَةٌ", transliteration: "ḥasanatun", meaning: { en: "good", ur: "اچھا", ar: "حسنة" }, root: "ح-س-ن", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِبْرَاهِيمَ", transliteration: "Ibrāhīma", meaning: { en: "Abraham", ur: "ابراہیم", ar: "إبراهيم" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "وَالَّذِينَ", transliteration: "wa-lladhīna", meaning: { en: "and those", ur: "اور جو", ar: "والذين" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "coord_obj_prep" } },
      { arabic: "مَعَهُ", transliteration: "maʿahu", meaning: { en: "with him", ur: "اس کے ساتھ", ar: "معه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "adverb" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "ADV", posLabel: "ADV", grammar: { role: "temporal" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "they said", ur: "انہوں نے کہا", ar: "قالوا" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "لِقَوْمِهِمْ", transliteration: "li-qawmihim", meaning: { en: "to their people", ur: "اپنی قوم سے", ar: "لقومهم" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed we", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { role: "emphasis" } },
      { arabic: "بُرَآءُ", transliteration: "buraʾāʾu", meaning: { en: "are disassociated", ur: "بیزار ہیں", ar: "برآء" }, root: "ب-ر-أ", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "from you", ur: "تم سے", ar: "منكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "وَمِمَّا", transliteration: "wa-mimmā", meaning: { en: "and from what", ur: "اور جس سے", ar: "ومما" }, pos: "CONJ+PREP+REL", posLabel: "CONJ+PREP+REL", grammar: { role: "coord_prep_phrase" } },
      { arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", meaning: { en: "you worship", ur: "تم عبادت کرتے ہو", ar: "تعبدون" }, root: "ع-ب-د", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", grammar: { role: "relative_verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "کے سوا", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "سوا", ar: "دون" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "كَفَرْنَا", transliteration: "kafarnā", meaning: { en: "We deny", ur: "ہم انکار کرتے ہیں", ar: "كفرنا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "بِكُمْ", transliteration: "bikum", meaning: { en: "you", ur: "تم سے", ar: "بكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "وَبَدَا", transliteration: "wa-badā", meaning: { en: "and has appeared", ur: "اور ظاہر ہو گئی", ar: "وبدا" }, root: "ب-د-و", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "بَيْنَنَا", transliteration: "baynanā", meaning: { en: "between us", ur: "ہمارے درمیان", ar: "بيننا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "adverb" } },
      { arabic: "وَبَيْنَكُمُ", transliteration: "wa-baynakumu", meaning: { en: "and between you", ur: "اور تمہارے درمیان", ar: "وبينكم" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { role: "coord_adverb" } },
      { arabic: "الْعَدَاوَةُ", transliteration: "l-ʿadāwatu", meaning: { en: "enmity", ur: "دشمنی", ar: "العداوة" }, root: "ع-د-و", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "وَالْبَغْضَاءُ", transliteration: "wa-l-baghḍāʾu", meaning: { en: "and hatred", ur: "اور نفرت", ar: "والبغضاء" }, root: "ب-غ-ض", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "coord_subject" } },
      { arabic: "أَبَدًا", transliteration: "abadan", meaning: { en: "forever", ur: "ہمیشہ", ar: "أبدا" }, root: "أ-ب-د", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "adverb" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "جب تک", ar: "حتى" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "purpose" } },
      { arabic: "تُؤْمِنُوا", transliteration: "tuʾminū", meaning: { en: "you believe", ur: "تم ایمان لاؤ", ar: "تؤمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "SUBJ", grammar: { role: "verb" } },
      { arabic: "بِاللَّهِ", transliteration: "bi-llāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "وَحْدَهُ", transliteration: "waḥdahu", meaning: { en: "alone", ur: "اکیلے", ar: "وحده" }, root: "و-ح-د", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "hal" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'موصوف + صفت' },
      { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
      { from: 24, to: 25, label: 'عطف' },
      { from: 31, to: 32, label: 'حال' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
    words: [
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "اے ہمارے رب", ar: "ربنا" }, root: "ر-ب-ب", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "vocative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَجْعَلْنَا", transliteration: "tajʿalnā", meaning: { en: "make us", ur: "ہمیں بنا", ar: "تجعلنا" }, root: "ج-ع-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "فِتْنَةً", transliteration: "fitnatan", meaning: { en: "a trial", ur: "فتنہ", ar: "فتنة" }, root: "ف-ت-ن", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "لِّلَّذِينَ", transliteration: "li-lladhīna", meaning: { en: "for those who", ur: "ان کے لیے جو", ar: "للذين" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieve", ur: "کافر ہیں", ar: "كفروا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "وَاغْفِرْ", transliteration: "wa-ghfir", meaning: { en: "and forgive", ur: "اور بخش دے", ar: "واغفر" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPV", grammar: { role: "command" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "us", ur: "ہمیں", ar: "لنا" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "our Lord", ur: "اے ہمارے رب", ar: "ربنا" }, root: "ر-ب-ب", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "vocative" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "indeed You", ur: "بیشک تو", ar: "إنك" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { role: "emphasis" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "You are", ur: "تو ہی ہے", ar: "أنت" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "الْعَزِيزُ", transliteration: "l-ʿazīzu", meaning: { en: "the Almighty", ur: "غالب", ar: "العزيز" }, root: "ع-ز-ز", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "الْحَكِيمُ", transliteration: "l-ḥakīmu", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, root: "ح-ك-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 11, to: 12, label: 'مبتدأ + خبر' },
      { from: 11, to: 13, label: 'مبتدأ + خبر' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "لَقَدْ كَانَ لَكُمْ فِيهِمْ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ ۚ وَمَن يَتَوَلَّ فَإِنَّ اللَّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
    words: [
      { arabic: "لَقَدْ", transliteration: "la-qad", meaning: { en: "Certainly", ur: "یقیناً", ar: "لقد" }, pos: "EMPH+CERT", posLabel: "EMPH+CERT", grammar: { role: "emphasis" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "there was", ur: "تھا", ar: "كان" }, root: "ك-و-ن", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "فِيهِمْ", transliteration: "fīhim", meaning: { en: "in them", ur: "ان میں", ar: "فيهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "أُسْوَةٌ", transliteration: "uswatun", meaning: { en: "an example", ur: "نمونہ", ar: "أسوة" }, root: "أ-س-و", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "حَسَنَةٌ", transliteration: "ḥasanatun", meaning: { en: "good", ur: "اچھا", ar: "حسنة" }, root: "ح-س-ن", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } },
      { arabic: "لِّمَن", transliteration: "li-man", meaning: { en: "for whoever", ur: "جو کوئی", ar: "لمن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "ہو", ar: "كان" }, root: "ك-و-ن", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "يَرْجُو", transliteration: "yarjū", meaning: { en: "hoping for", ur: "امید رکھتا ہے", ar: "يرجو" }, root: "ر-ج-و", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", grammar: { role: "verb" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَالْيَوْمَ", transliteration: "wa-l-yawma", meaning: { en: "and the Day", ur: "اور دن", ar: "واليوم" }, root: "ي-و-م", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "coord_object" } },
      { arabic: "الْآخِرَ", transliteration: "l-ākhira", meaning: { en: "the Last", ur: "آخرت کے", ar: "الآخر" }, root: "أ-خ-ر", pos: "ADJ", posLabel: "ADJ", case: "ACC", grammar: { role: "adjective" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conditional" } },
      { arabic: "يَتَوَلَّ", transliteration: "yatawalla", meaning: { en: "turns away", ur: "پھر جائے", ar: "يتول" }, root: "و-ل-ي", pos: "V", posLabel: "V", form: "V", aspect: "IMPF", mood: "JUS", grammar: { role: "condition" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "then indeed", ur: "تو بیشک", ar: "فإن" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammar: { role: "result" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "subject_acc" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "الْغَنِيُّ", transliteration: "l-ghaniyyu", meaning: { en: "the Self-Sufficient", ur: "بے نیاز", ar: "الغني" }, root: "غ-ن-ي", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "الْحَمِيدُ", transliteration: "l-ḥamīdu", meaning: { en: "the Praiseworthy", ur: "قابل تعریف", ar: "الحميد" }, root: "ح-م-د", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 5, to: 6, label: 'موصوف + صفت' },
      { from: 7, to: 8, label: 'موصول + صلة' },
      { from: 8, to: 10, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'فعل + مفعول به' },
      { from: 11, to: 12, label: 'موصوف + صفت' },
      { from: 17, to: 18, label: 'مبتدأ + خبر' },
      { from: 17, to: 19, label: 'مبتدأ + خبر' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "عَسَى اللَّهُ أَن يَجْعَلَ بَيْنَكُمْ وَبَيْنَ الَّذِينَ عَادَيْتُم مِّنْهُم مَّوَدَّةً ۚ وَاللَّهُ قَدِيرٌ ۚ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
    words: [
      { arabic: "عَسَى", transliteration: "ʿasā", meaning: { en: "Perhaps", ur: "شاید", ar: "عسى" }, pos: "V", posLabel: "V", grammar: { role: "hope" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "SUB", posLabel: "SUB", grammar: { role: "subjunctive" } },
      { arabic: "يَجْعَلَ", transliteration: "yajʿala", meaning: { en: "He will put", ur: "ڈال دے", ar: "يجعل" }, root: "ج-ع-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", grammar: { role: "verb" } },
      { arabic: "بَيْنَكُمْ", transliteration: "baynakum", meaning: { en: "between you", ur: "تمہارے درمیان", ar: "بينكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "adverb" } },
      { arabic: "وَبَيْنَ", transliteration: "wa-bayna", meaning: { en: "and between", ur: "اور درمیان", ar: "وبين" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "coord_adverb" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whom", ur: "جن سے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "mudaf_ilayh" } },
      { arabic: "عَادَيْتُم", transliteration: "ʿādaytum", meaning: { en: "you have treated as enemies", ur: "تم نے دشمنی کی", ar: "عاديتم" }, root: "ع-د-و", pos: "V", posLabel: "V", form: "III", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "مِّنْهُم", transliteration: "minhum", meaning: { en: "among them", ur: "ان میں سے", ar: "منهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "مَّوَدَّةً", transliteration: "mawaddatan", meaning: { en: "affection", ur: "محبت", ar: "مودة" }, root: "و-د-د", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "is Capable", ur: "قادر ہے", ar: "قدير" }, root: "ق-د-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "غَفُورٌ", transliteration: "ghafūrun", meaning: { en: "is Forgiving", ur: "بخشنے والا", ar: "غفور" }, root: "غ-ف-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", meaning: { en: "Merciful", ur: "رحم کرنے والا", ar: "رحيم" }, root: "ر-ح-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 2, to: 6, label: 'عطف' },
      { from: 7, to: 8, label: 'موصول + صلة' },
      { from: 8, to: 10, label: 'فعل + مفعول به' },
      { from: 11, to: 12, label: 'موصوف + صفت' },
      { from: 11, to: 12, label: 'مبتدأ + خبر' },
      { from: 13, to: 14, label: 'موصوف + صفت' },
      { from: 13, to: 14, label: 'مبتدأ + خبر' },
      { from: 13, to: 15, label: 'مبتدأ + خبر' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ",
    words: [
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يَنْهَاكُمُ", transliteration: "yanhākumu", meaning: { en: "does forbid you", ur: "منع کرتا", ar: "ينهاكم" }, root: "ن-ه-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", grammar: { role: "verb" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "obj_prep" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "did not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يُقَاتِلُوكُمْ", transliteration: "yuqātilūkum", meaning: { en: "fight you", ur: "تم سے لڑے", ar: "يقاتلوكم" }, root: "ق-ت-ل", pos: "V", posLabel: "V", form: "III", aspect: "IMPF", mood: "JUS", grammar: { role: "relative_verb" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "for", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الدِّينِ", transliteration: "l-dīni", meaning: { en: "religion", ur: "دین", ar: "الدين" }, root: "د-ي-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "وَلَمْ", transliteration: "wa-lam", meaning: { en: "and did not", ur: "اور نہیں", ar: "ولم" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_negative" } },
      { arabic: "يُخْرِجُوكُم", transliteration: "yukhrijūkum", meaning: { en: "expel you", ur: "تمہیں نکالا", ar: "يخرجوكم" }, root: "خ-ر-ج", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دِيَارِكُمْ", transliteration: "diyārikum", meaning: { en: "your homes", ur: "تمہارے گھروں", ar: "دياركم" }, root: "د-و-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "SUB", posLabel: "SUB", grammar: { role: "subjunctive" } },
      { arabic: "تَبَرُّوهُمْ", transliteration: "tabarrūhum", meaning: { en: "you deal kindly with them", ur: "ان سے نیکی کرو", ar: "تبروهم" }, root: "ب-ر-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", grammar: { role: "verb" } },
      { arabic: "وَتُقْسِطُوا", transliteration: "wa-tuqsiṭū", meaning: { en: "and act justly toward them", ur: "اور انصاف کرو", ar: "وتقسطوا" }, root: "ق-س-ط", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "SUBJ", grammar: { role: "coord_verb" } },
      { arabic: "إِلَيْهِمْ", transliteration: "ilayhim", meaning: { en: "toward them", ur: "ان کے ساتھ", ar: "إليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "subject_acc" } },
      { arabic: "يُحِبُّ", transliteration: "yuḥibbu", meaning: { en: "loves", ur: "پسند کرتا ہے", ar: "يحب" }, root: "ح-ب-ب", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", grammar: { role: "predicate" } },
      { arabic: "الْمُقْسِطِينَ", transliteration: "l-muqsiṭīna", meaning: { en: "those who act justly", ur: "انصاف کرنے والوں کو", ar: "المقسطين" }, root: "ق-س-ط", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 6, to: 7, label: 'نفی + فعل' },
      { from: 10, to: 11, label: 'نفی + فعل' },
      { from: 20, to: 21, label: 'فعل + مفعول به' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "إِنَّمَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ قَاتَلُوكُمْ فِي الدِّينِ وَأَخْرَجُوكُم مِّن دِيَارِكُمْ وَظَاهَرُوا عَلَىٰ إِخْرَاجِكُمْ أَن تَوَلَّوْهُمْ ۚ وَمَن يَتَوَلَّهُمْ فَأُولَٰئِكَ هُمُ الظَّالِمُونَ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "بس", ar: "إنما" }, pos: "RES", posLabel: "RES", grammar: { role: "restriction" } },
      { arabic: "يَنْهَاكُمُ", transliteration: "yanhākumu", meaning: { en: "does forbid you", ur: "منع کرتا ہے", ar: "ينهاكم" }, root: "ن-ه-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", grammar: { role: "verb" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "regarding", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "obj_prep" } },
      { arabic: "قَاتَلُوكُمْ", transliteration: "qātalūkum", meaning: { en: "fought you", ur: "تم سے لڑے", ar: "قاتلوكم" }, root: "ق-ت-ل", pos: "V", posLabel: "V", form: "III", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "for", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الدِّينِ", transliteration: "l-dīni", meaning: { en: "religion", ur: "دین", ar: "الدين" }, root: "د-ي-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "وَأَخْرَجُوكُم", transliteration: "wa-akhrajūkum", meaning: { en: "and expelled you", ur: "اور تمہیں نکالا", ar: "وأخرجوكم" }, root: "خ-ر-ج", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", grammar: { role: "coord_verb" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دِيَارِكُمْ", transliteration: "diyārikum", meaning: { en: "your homes", ur: "تمہارے گھروں", ar: "دياركم" }, root: "د-و-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "وَظَاهَرُوا", transliteration: "wa-ẓāharū", meaning: { en: "and supported", ur: "اور مدد کی", ar: "وظاهروا" }, root: "ظ-ه-ر", pos: "V", posLabel: "V", form: "III", aspect: "PERF", grammar: { role: "coord_verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "for", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِخْرَاجِكُمْ", transliteration: "ikhrājikum", meaning: { en: "your expulsion", ur: "تمہیں نکالنے", ar: "إخراجكم" }, root: "خ-ر-ج", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "SUB", posLabel: "SUB", grammar: { role: "subjunctive" } },
      { arabic: "تَوَلَّوْهُمْ", transliteration: "tawallawhum", meaning: { en: "you make them allies", ur: "تم ان سے دوستی کرو", ar: "تولوهم" }, root: "و-ل-ي", pos: "V", posLabel: "V", form: "V", aspect: "IMPF", mood: "SUBJ", grammar: { role: "verb" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conditional" } },
      { arabic: "يَتَوَلَّهُمْ", transliteration: "yatawallahum", meaning: { en: "makes them allies", ur: "ان سے دوستی کرے", ar: "يتولهم" }, root: "و-ل-ي", pos: "V", posLabel: "V", form: "V", aspect: "IMPF", mood: "JUS", grammar: { role: "condition" } },
      { arabic: "فَأُولَٰئِكَ", transliteration: "fa-ulāʾika", meaning: { en: "then those", ur: "تو یہی لوگ", ar: "فأولئك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { role: "result" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "الظَّالِمُونَ", transliteration: "l-ẓālimūna", meaning: { en: "the wrongdoers", ur: "ظالم", ar: "الظالمون" }, root: "ظ-ل-م", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 20, to: 21, label: 'مبتدأ + خبر' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا جَاءَكُمُ الْمُؤْمِنَاتُ مُهَاجِرَاتٍ فَامْتَحِنُوهُنَّ ۖ اللَّهُ أَعْلَمُ بِإِيمَانِهِنَّ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "جَاءَكُمُ", transliteration: "jāʾakumu", meaning: { en: "come to you", ur: "تمہارے پاس آئیں", ar: "جاءكم" }, root: "ج-ي-أ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "الْمُؤْمِنَاتُ", transliteration: "l-muʾminātu", meaning: { en: "the believing women", ur: "مومن عورتیں", ar: "المؤمنات" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "NOM", number: "P", gender: "F", grammar: { role: "subject" } },
      { arabic: "مُهَاجِرَاتٍ", transliteration: "muhājirātin", meaning: { en: "as emigrants", ur: "ہجرت کر کے", ar: "مهاجرات" }, root: "ه-ج-ر", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "hal" } },
      { arabic: "فَامْتَحِنُوهُنَّ", transliteration: "fa-mtaḥinūhunna", meaning: { en: "then examine them", ur: "تو ان کا امتحان لو", ar: "فامتحنوهن" }, root: "م-ح-ن", pos: "V", posLabel: "V", form: "VIII", aspect: "IMPV", grammar: { role: "command" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "أَعْلَمُ", transliteration: "aʿlamu", meaning: { en: "is most knowing", ur: "زیادہ جاننے والا ہے", ar: "أعلم" }, root: "ع-ل-م", pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } },
      { arabic: "بِإِيمَانِهِنَّ", transliteration: "bi-īmānihinna", meaning: { en: "of their faith", ur: "ان کے ایمان کو", ar: "بإيمانهن" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 11, label: 'مبتدأ + خبر' },
      { from: 7, to: 8, label: 'حال' },
      { from: 9, to: 10, label: 'فعل + فاعل' },
      { from: 10, to: 11, label: 'موصوف + صفت' },
      { from: 10, to: 11, label: 'مبتدأ + خبر' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "وَإِن فَاتَكُمْ شَيْءٌ مِّنْ أَزْوَاجِكُمْ إِلَى الْكُفَّارِ فَعَاقَبْتُمْ فَآتُوا الَّذِينَ ذَهَبَتْ أَزْوَاجُهُم مِّثْلَ مَا أَنفَقُوا ۚ وَاتَّقُوا اللَّهَ الَّذِي أَنتُم بِهِ مُؤْمِنُونَ",
    words: [
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "conditional" } },
      { arabic: "فَاتَكُمْ", transliteration: "fātakum", meaning: { en: "any leave you", ur: "تم سے نکل جائے", ar: "فاتكم" }, root: "ف-و-ت", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "condition" } },
      { arabic: "شَيْءٌ", transliteration: "shayʾun", meaning: { en: "something", ur: "کچھ", ar: "شيء" }, root: "ش-ي-أ", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَزْوَاجِكُمْ", transliteration: "azwājikum", meaning: { en: "your wives", ur: "تمہاری بیویاں", ar: "أزواجكم" }, root: "ز-و-ج", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْكُفَّارِ", transliteration: "l-kuffāri", meaning: { en: "the disbelievers", ur: "کافروں", ar: "الكفار" }, root: "ك-ف-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "فَعَاقَبْتُمْ", transliteration: "fa-ʿāqabtum", meaning: { en: "and your turn comes", ur: "پھر تمہاری باری آئے", ar: "فعاقبتم" }, root: "ع-ق-ب", pos: "V", posLabel: "V", form: "III", aspect: "PERF", grammar: { role: "result" } },
      { arabic: "فَآتُوا", transliteration: "fa-ātū", meaning: { en: "then give", ur: "تو دے دو", ar: "فآتوا" }, root: "أ-ت-ي", pos: "V", posLabel: "V", form: "IV", aspect: "IMPV", grammar: { role: "command" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whose", ur: "جن کی", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "ذَهَبَتْ", transliteration: "dhahabat", meaning: { en: "have gone", ur: "چلی گئیں", ar: "ذهبت" }, root: "ذ-ه-ب", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "أَزْوَاجُهُم", transliteration: "azwājuhum", meaning: { en: "their wives", ur: "ان کی بیویاں", ar: "أزواجهم" }, root: "ز-و-ج", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "مِّثْلَ", transliteration: "mithla", meaning: { en: "the like", ur: "جیسا", ar: "مثل" }, root: "م-ث-ل", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "of what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "mudaf_ilayh" } },
      { arabic: "أَنفَقُوا", transliteration: "anfaqū", meaning: { en: "they had spent", ur: "انہوں نے خرچ کیا", ar: "أنفقوا" }, root: "ن-ف-ق", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "وَاتَّقُوا", transliteration: "wa-ttaqū", meaning: { en: "And fear", ur: "اور ڈرو", ar: "واتقوا" }, root: "و-ق-ي", pos: "V", posLabel: "V", form: "VIII", aspect: "IMPV", grammar: { role: "command" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "in Whom", ur: "جس پر", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "أَنتُم", transliteration: "antum", meaning: { en: "you", ur: "تم", ar: "أنتم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "in Him", ur: "اس پر", ar: "به" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "مُؤْمِنُونَ", transliteration: "muʾminūna", meaning: { en: "are believers", ur: "ایمان رکھتے ہو", ar: "مؤمنون" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 10, to: 11, label: 'موصول + صلة' },
      { from: 11, to: 12, label: 'فعل + فاعل' },
      { from: 11, to: 13, label: 'فعل + مفعول به' },
      { from: 14, to: 15, label: 'موصول + صلة' },
      { from: 15, to: 17, label: 'فعل + مفعول به' },
      { from: 16, to: 17, label: 'فعل + مفعول به' },
      { from: 19, to: 21, label: 'مبتدأ + خبر' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "يَا أَيُّهَا النَّبِيُّ إِذَا جَاءَكَ الْمُؤْمِنَاتُ يُبَايِعْنَكَ عَلَىٰ أَن لَّا يُشْرِكْنَ بِاللَّهِ شَيْئًا وَلَا يَسْرِقْنَ وَلَا يَزْنِينَ وَلَا يَقْتُلْنَ أَوْلَادَهُنَّ وَلَا يَأْتِينَ بِبُهْتَانٍ يَفْتَرِينَهُ بَيْنَ أَيْدِيهِنَّ وَأَرْجُلِهِنَّ وَلَا يَعْصِينَكَ فِي مَعْرُوفٍ ۙ فَبَايِعْهُنَّ وَاسْتَغْفِرْ لَهُنَّ اللَّهَ ۖ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "النَّبِيُّ", transliteration: "l-nabiyyu", meaning: { en: "Prophet", ur: "نبی", ar: "النبي" }, root: "ن-ب-أ", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "vocative" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "جَاءَكَ", transliteration: "jāʾaka", meaning: { en: "come to you", ur: "آئیں", ar: "جاءك" }, root: "ج-ي-أ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "الْمُؤْمِنَاتُ", transliteration: "l-muʾminātu", meaning: { en: "the believing women", ur: "مومن عورتیں", ar: "المؤمنات" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "يُبَايِعْنَكَ", transliteration: "yubāyiʿnaka", meaning: { en: "to pledge allegiance to you", ur: "تم سے بیعت کریں", ar: "يبايعنك" }, root: "ب-ي-ع", pos: "V", posLabel: "V", form: "III", aspect: "IMPF", grammar: { role: "hal" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "that", ur: "کہ", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "SUB", posLabel: "SUB", grammar: { role: "subjunctive" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يُشْرِكْنَ", transliteration: "yushrikna", meaning: { en: "they will associate", ur: "شرک کریں گی", ar: "يشركن" }, root: "ش-ر-ك", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "بِاللَّهِ", transliteration: "bi-llāhi", meaning: { en: "with Allah", ur: "اللہ کے ساتھ", ar: "بالله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "anything", ur: "کوئی چیز", ar: "شيئا" }, root: "ش-ي-أ", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and not", ur: "نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_negative" } },
      { arabic: "يَسْرِقْنَ", transliteration: "yasriqna", meaning: { en: "they will steal", ur: "چوری کریں گی", ar: "يسرقن" }, root: "س-ر-ق", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and not", ur: "نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_negative" } },
      { arabic: "يَزْنِينَ", transliteration: "yaznīna", meaning: { en: "they will commit adultery", ur: "زنا کریں گی", ar: "يزنين" }, root: "ز-ن-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and not", ur: "نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_negative" } },
      { arabic: "يَقْتُلْنَ", transliteration: "yaqtulna", meaning: { en: "they will kill", ur: "قتل کریں گی", ar: "يقتلن" }, root: "ق-ت-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "أَوْلَادَهُنَّ", transliteration: "awlādahunna", meaning: { en: "their children", ur: "اپنی اولاد", ar: "أولادهن" }, root: "و-ل-د", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and not", ur: "نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_negative" } },
      { arabic: "يَأْتِينَ", transliteration: "yaʾtīna", meaning: { en: "they will bring", ur: "لائیں گی", ar: "يأتين" }, root: "أ-ت-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "بِبُهْتَانٍ", transliteration: "bi-buhtānin", meaning: { en: "with slander", ur: "بہتان", ar: "ببهتان" }, root: "ب-ه-ت", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "يَفْتَرِينَهُ", transliteration: "yaftarīnahu", meaning: { en: "they invent", ur: "وہ گھڑیں", ar: "يفترينه" }, root: "ف-ر-ي", pos: "V", posLabel: "V", form: "VIII", aspect: "IMPF", grammar: { role: "adjective_clause" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "between", ur: "درمیان", ar: "بين" }, pos: "N", posLabel: "N", case: "ACC", grammar: { role: "adverb" } },
      { arabic: "أَيْدِيهِنَّ", transliteration: "aydīhinna", meaning: { en: "their hands", ur: "اپنے ہاتھوں", ar: "أيديهن" }, root: "ي-د-ي", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَأَرْجُلِهِنَّ", transliteration: "wa-arjulihinna", meaning: { en: "and feet", ur: "اور پاؤں", ar: "وأرجلهن" }, root: "ر-ج-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "coord_mudaf_ilayh" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and not", ur: "نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_negative" } },
      { arabic: "يَعْصِينَكَ", transliteration: "yaʿṣīnaka", meaning: { en: "they will disobey you", ur: "تمہاری نافرمانی کریں گی", ar: "يعصينك" }, root: "ع-ص-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَعْرُوفٍ", transliteration: "maʿrūfin", meaning: { en: "what is right", ur: "نیکی", ar: "معروف" }, root: "ع-ر-ف", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "فَبَايِعْهُنَّ", transliteration: "fa-bāyiʿhunna", meaning: { en: "then accept their pledge", ur: "تو ان سے بیعت لو", ar: "فبايعهن" }, root: "ب-ي-ع", pos: "V", posLabel: "V", form: "III", aspect: "IMPV", grammar: { role: "command" } },
      { arabic: "وَاسْتَغْفِرْ", transliteration: "wa-staghfir", meaning: { en: "and ask forgiveness", ur: "اور مغفرت مانگو", ar: "واستغفر" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "X", aspect: "IMPV", grammar: { role: "coord_command" } },
      { arabic: "لَهُنَّ", transliteration: "lahunna", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهن" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "from Allah", ur: "اللہ سے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "subject_acc" } },
      { arabic: "غَفُورٌ", transliteration: "ghafūrun", meaning: { en: "is Forgiving", ur: "بخشنے والا", ar: "غفور" }, root: "غ-ف-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", meaning: { en: "Merciful", ur: "رحم کرنے والا", ar: "رحيم" }, root: "ر-ح-م", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 5, to: 6, label: 'فعل + فاعل' },
      { from: 6, to: 7, label: 'حال' },
      { from: 10, to: 11, label: 'نفی + فعل' },
      { from: 11, to: 13, label: 'فعل + مفعول به' },
      { from: 14, to: 15, label: 'نفی + فعل' },
      { from: 16, to: 17, label: 'نفی + فعل' },
      { from: 18, to: 19, label: 'نفی + فعل' },
      { from: 19, to: 20, label: 'فعل + مفعول به' },
      { from: 21, to: 22, label: 'نفی + فعل' },
      { from: 25, to: 26, label: 'مضاف + مضاف إليه' },
      { from: 28, to: 29, label: 'نفی + فعل' },
      { from: 32, to: 35, label: 'فعل + مفعول به' },
      { from: 33, to: 35, label: 'فعل + مفعول به' },
      { from: 37, to: 38, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَوَلَّوْا قَوْمًا غَضِبَ اللَّهُ عَلَيْهِمْ قَدْ يَئِسُوا مِنَ الْآخِرَةِ كَمَا يَئِسَ الْكُفَّارُ مِنْ أَصْحَابِ الْقُبُورِ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", grammar: { role: "relative_verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَتَوَلَّوْا", transliteration: "tatawallaw", meaning: { en: "make allies", ur: "دوستی کرو", ar: "تتولوا" }, root: "و-ل-ي", pos: "V", posLabel: "V", form: "V", aspect: "IMPF", mood: "JUS", grammar: { role: "verb" } },
      { arabic: "قَوْمًا", transliteration: "qawman", meaning: { en: "a people", ur: "قوم سے", ar: "قوما" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "غَضِبَ", transliteration: "ghaḍiba", meaning: { en: "is angry", ur: "ناراض ہوا", ar: "غضب" }, root: "غ-ض-ب", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "adjective_clause" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "with them", ur: "ان پر", ar: "عليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "certainly", ur: "یقیناً", ar: "قد" }, pos: "CERT", posLabel: "CERT", grammar: { role: "emphasis" } },
      { arabic: "يَئِسُوا", transliteration: "yaʾisū", meaning: { en: "they have despaired", ur: "وہ مایوس ہو گئے", ar: "يئسوا" }, root: "ي-أ-س", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْآخِرَةِ", transliteration: "l-ākhirati", meaning: { en: "the Hereafter", ur: "آخرت", ar: "الآخرة" }, root: "أ-خ-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "just as", ur: "جیسے", ar: "كما" }, pos: "COMP", posLabel: "COMP", grammar: { role: "comparison" } },
      { arabic: "يَئِسَ", transliteration: "yaʾisa", meaning: { en: "have despaired", ur: "مایوس ہو گئے", ar: "يئس" }, root: "ي-أ-س", pos: "V", posLabel: "V", form: "I", aspect: "PERF", grammar: { role: "verb" } },
      { arabic: "الْكُفَّارُ", transliteration: "l-kuffāru", meaning: { en: "the disbelievers", ur: "کافر", ar: "الكفار" }, root: "ك-ف-ر", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَصْحَابِ", transliteration: "aṣḥābi", meaning: { en: "the companions", ur: "اہل", ar: "أصحاب" }, root: "ص-ح-ب", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "الْقُبُورِ", transliteration: "l-qubūri", meaning: { en: "of the graves", ur: "قبروں کے", ar: "القبور" }, root: "ق-ب-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 8, to: 9, label: 'فعل + فاعل' },
      { from: 16, to: 17, label: 'فعل + فاعل' },
      { from: 19, to: 20, label: 'مضاف + مضاف إليه' }
      ]
    }
  }
};

export default TREEBANK_DATA;
