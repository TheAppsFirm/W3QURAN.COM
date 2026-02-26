/**
 * Surah Al-Munafiqun (The Hypocrites) - Surah 63
 * Quranic Arabic Treebank Data with Morphological Analysis
 * 11 Ayahs - Medinan Surah
 */

export const TREEBANK_DATA = {
  surahId: 63,
  surahName: "Al-Munafiqun",
  surahNameArabic: "المنافقون",
  totalAyahs: 11,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "إِذَا جَاءَكَ الْمُنَافِقُونَ قَالُوا نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ ۗ وَاللَّهُ يَعْلَمُ إِنَّكَ لَرَسُولُهُ وَاللَّهُ يَشْهَدُ إِنَّ الْمُنَافِقِينَ لَكَاذِبُونَ",
    words: [
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "جَاءَكَ", transliteration: "jāʾaka", meaning: { en: "come to you", ur: "تمہارے پاس آئیں", ar: "جاءك" }, root: "ج-ي-أ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الْمُنَافِقُونَ", transliteration: "l-munāfiqūna", meaning: { en: "the hypocrites", ur: "منافق", ar: "المنافقون" }, root: "ن-ف-ق", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "they say", ur: "کہتے ہیں", ar: "قالوا" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "نَشْهَدُ", transliteration: "nashhadu", meaning: { en: "We bear witness", ur: "ہم گواہی دیتے ہیں", ar: "نشهد" }, root: "ش-ه-د", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "1", number: "P", grammar: { role: "verb" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "that indeed you", ur: "بیشک تم", ar: "إنك" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { role: "complement" } },
      { arabic: "لَرَسُولُ", transliteration: "la-rasūlu", meaning: { en: "surely are the Messenger", ur: "یقیناً رسول ہو", ar: "لرسول" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", meaning: { en: "knows", ur: "جانتا ہے", ar: "يعلم" }, root: "ع-ل-م", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "that indeed you", ur: "بیشک تم", ar: "إنك" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { role: "complement" } },
      { arabic: "لَرَسُولُهُ", transliteration: "la-rasūluhu", meaning: { en: "are surely His Messenger", ur: "اس کے رسول ہو", ar: "لرسوله" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "يَشْهَدُ", transliteration: "yashhadu", meaning: { en: "bears witness", ur: "گواہی دیتا ہے", ar: "يشهد" }, root: "ش-ه-د", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "that indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { role: "emphasis" } },
      { arabic: "الْمُنَافِقِينَ", transliteration: "l-munāfiqīna", meaning: { en: "the hypocrites", ur: "منافق", ar: "المنافقين" }, root: "ن-ف-ق", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "subject_acc" } },
      { arabic: "لَكَاذِبُونَ", transliteration: "la-kādhibūna", meaning: { en: "are surely liars", ur: "یقیناً جھوٹے ہیں", ar: "لكاذبون" }, root: "ك-ذ-ب", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 3, to: 7, label: 'مبتدأ + خبر' },
      { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
      { from: 9, to: 12, label: 'مبتدأ + خبر' },
      { from: 13, to: 17, label: 'مبتدأ + خبر' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "اتَّخَذُوا أَيْمَانَهُمْ جُنَّةً فَصَدُّوا عَن سَبِيلِ اللَّهِ ۚ إِنَّهُمْ سَاءَ مَا كَانُوا يَعْمَلُونَ",
    words: [
      { arabic: "اتَّخَذُوا", transliteration: "ittakhadhū", meaning: { en: "They have taken", ur: "انہوں نے بنا لی ہے", ar: "اتخذوا" }, root: "أ-خ-ذ", pos: "V", posLabel: "V", form: "VIII", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "أَيْمَانَهُمْ", transliteration: "aymānahum", meaning: { en: "their oaths", ur: "اپنی قسموں کو", ar: "أيمانهم" }, root: "ي-م-ن", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "جُنَّةً", transliteration: "junnatan", meaning: { en: "as a shield", ur: "ڈھال", ar: "جنة" }, root: "ج-ن-ن", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "second_object" } },
      { arabic: "فَصَدُّوا", transliteration: "fa-ṣaddū", meaning: { en: "and they turned away", ur: "پھر روکا", ar: "فصدوا" }, root: "ص-د-د", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "result_verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے", ar: "سبيل" }, root: "س-ب-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed they", ur: "بیشک ان کے", ar: "إنهم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { role: "emphasis" } },
      { arabic: "سَاءَ", transliteration: "sāʾa", meaning: { en: "evil is", ur: "برا ہے", ar: "ساء" }, root: "س-و-أ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", grammar: { role: "exclamation" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ کرتے تھے", ar: "كانوا" }, root: "ك-و-ن", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "aux_verb" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "کام", ar: "يعملون" }, root: "ع-م-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      { from: 10, to: 11, label: 'موصول + صلة' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "ذَٰلِكَ بِأَنَّهُمْ آمَنُوا ثُمَّ كَفَرُوا فَطُبِعَ عَلَىٰ قُلُوبِهِمْ فَهُمْ لَا يَفْقَهُونَ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", meaning: { en: "is because they", ur: "اس لیے کہ انہوں نے", ar: "بأنهم" }, pos: "PREP+ACC", posLabel: "PREP+ACC", grammar: { role: "causal" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequence" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا", ar: "كفروا" }, root: "ك-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "فَطُبِعَ", transliteration: "fa-ṭubiʿa", meaning: { en: "so a seal was set", ur: "پس مہر لگا دی گئی", ar: "فطبع" }, root: "ط-ب-ع", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "PASS", person: "3", gender: "M", number: "S", grammar: { role: "result_verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", meaning: { en: "their hearts", ur: "ان کے دلوں", ar: "قلوبهم" }, root: "ق-ل-ب", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "obj_prep" } },
      { arabic: "فَهُمْ", transliteration: "fa-hum", meaning: { en: "so they", ur: "پس وہ", ar: "فهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "result" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يَفْقَهُونَ", transliteration: "yafqahūna", meaning: { en: "understand", ur: "سمجھتے", ar: "يفقهون" }, root: "ف-ق-ه", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
      { from: 10, to: 11, label: 'نفی + فعل' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "وَإِذَا رَأَيْتَهُمْ تُعْجِبُكَ أَجْسَامُهُمْ ۖ وَإِن يَقُولُوا تَسْمَعْ لِقَوْلِهِمْ ۖ كَأَنَّهُمْ خُشُبٌ مُّسَنَّدَةٌ ۖ يَحْسَبُونَ كُلَّ صَيْحَةٍ عَلَيْهِمْ ۚ هُمُ الْعَدُوُّ فَاحْذَرْهُمْ ۚ قَاتَلَهُمُ اللَّهُ ۖ أَنَّىٰ يُؤْفَكُونَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وإذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "temporal" } },
      { arabic: "رَأَيْتَهُمْ", transliteration: "raʾaytahum", meaning: { en: "you see them", ur: "تم انہیں دیکھو", ar: "رأيتهم" }, root: "ر-أ-ي", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "تُعْجِبُكَ", transliteration: "tuʿjibuka", meaning: { en: "please you", ur: "تمہیں بھلے لگیں", ar: "تعجبك" }, root: "ع-ج-ب", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "verb" } },
      { arabic: "أَجْسَامُهُمْ", transliteration: "ajsāmuhum", meaning: { en: "their forms", ur: "ان کے جسم", ar: "أجسامهم" }, root: "ج-س-م", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "and if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "conditional" } },
      { arabic: "يَقُولُوا", transliteration: "yaqūlū", meaning: { en: "they speak", ur: "وہ بولیں", ar: "يقولوا" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "condition" } },
      { arabic: "تَسْمَعْ", transliteration: "tasmaʿ", meaning: { en: "you listen", ur: "تم سنو", ar: "تسمع" }, root: "س-م-ع", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "result" } },
      { arabic: "لِقَوْلِهِمْ", transliteration: "li-qawlihim", meaning: { en: "to their speech", ur: "ان کی باتیں", ar: "لقولهم" }, root: "ق-و-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "prep_phrase" } },
      { arabic: "كَأَنَّهُمْ", transliteration: "ka-annahum", meaning: { en: "as if they were", ur: "گویا وہ", ar: "كأنهم" }, pos: "COMP+PRON", posLabel: "COMP+PRON", grammar: { role: "simile" } },
      { arabic: "خُشُبٌ", transliteration: "khushubun", meaning: { en: "pieces of wood", ur: "لکڑیاں ہیں", ar: "خشب" }, root: "خ-ش-ب", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "predicate" } },
      { arabic: "مُّسَنَّدَةٌ", transliteration: "musannadatun", meaning: { en: "propped up", ur: "ٹیک لگائی ہوئی", ar: "مسندة" }, root: "س-ن-د", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "adjective" } },
      { arabic: "يَحْسَبُونَ", transliteration: "yaḥsabūna", meaning: { en: "They think", ur: "وہ سمجھتے ہیں", ar: "يحسبون" }, root: "ح-س-ب", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "صَيْحَةٍ", transliteration: "ṣayḥatin", meaning: { en: "shout", ur: "پکار", ar: "صيحة" }, root: "ص-ي-ح", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "is against them", ur: "ان کے خلاف ہے", ar: "عليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "predicate" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "They", ur: "وہی", ar: "هم" }, pos: "PRON", posLabel: "PRON", person: "3", gender: "M", number: "P", grammar: { role: "subject" } },
      { arabic: "الْعَدُوُّ", transliteration: "l-ʿaduwwu", meaning: { en: "are the enemy", ur: "دشمن ہیں", ar: "العدو" }, root: "ع-د-و", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "فَاحْذَرْهُمْ", transliteration: "fa-ḥdharhum", meaning: { en: "so beware of them", ur: "پس ان سے بچو", ar: "فاحذرهم" }, root: "ح-ذ-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "command" } },
      { arabic: "قَاتَلَهُمُ", transliteration: "qātalahumu", meaning: { en: "May Allah destroy", ur: "اللہ ان کو مارے", ar: "قاتلهم" }, root: "ق-ت-ل", pos: "V", posLabel: "V", form: "III", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "invocation" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "أَنَّىٰ", transliteration: "annā", meaning: { en: "How", ur: "کہاں", ar: "أنى" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "يُؤْفَكُونَ", transliteration: "yuʾfakūna", meaning: { en: "are they deluded", ur: "وہ بہکائے جاتے ہیں", ar: "يؤفكون" }, root: "أ-ف-ك", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "PASS", person: "3", gender: "M", number: "P", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'فعل + فاعل' },
      { from: 10, to: 11, label: 'موصوف + صفت' },
      { from: 12, to: 13, label: 'فعل + مفعول به' },
      { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
      { from: 16, to: 17, label: 'مبتدأ + خبر' },
      { from: 19, to: 20, label: 'فعل + فاعل' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَإِذَا قِيلَ لَهُمْ تَعَالَوْا يَسْتَغْفِرْ لَكُمْ رَسُولُ اللَّهِ لَوَّوْا رُءُوسَهُمْ وَرَأَيْتَهُمْ يَصُدُّونَ وَهُم مُّسْتَكْبِرُونَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وإذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "temporal" } },
      { arabic: "قِيلَ", transliteration: "qīla", meaning: { en: "it is said", ur: "کہا جائے", ar: "قيل" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "PASS", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "ان سے", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "تَعَالَوْا", transliteration: "taʿālaw", meaning: { en: "Come", ur: "آؤ", ar: "تعالوا" }, root: "ع-ل-و", pos: "V", posLabel: "V", form: "VI", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "command" } },
      { arabic: "يَسْتَغْفِرْ", transliteration: "yastaghfir", meaning: { en: "will ask forgiveness", ur: "استغفار کریں", ar: "يستغفر" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "X", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "purpose" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "رَسُولُ", transliteration: "rasūlu", meaning: { en: "the Messenger", ur: "رسول", ar: "رسول" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "لَوَّوْا", transliteration: "lawwaw", meaning: { en: "they turned aside", ur: "انہوں نے موڑ لیے", ar: "لووا" }, root: "ل-و-ي", pos: "V", posLabel: "V", form: "II", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "رُءُوسَهُمْ", transliteration: "ruʾūsahum", meaning: { en: "their heads", ur: "اپنے سر", ar: "رءوسهم" }, root: "ر-أ-س", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "object" } },
      { arabic: "وَرَأَيْتَهُمْ", transliteration: "wa-raʾaytahum", meaning: { en: "and you saw them", ur: "اور تم نے دیکھا انہیں", ar: "ورأيتهم" }, root: "ر-أ-ي", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "coord_verb" } },
      { arabic: "يَصُدُّونَ", transliteration: "yaṣuddūna", meaning: { en: "turning away", ur: "پھرتے ہیں", ar: "يصدون" }, root: "ص-د-د", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "hal" } },
      { arabic: "وَهُم", transliteration: "wa-hum", meaning: { en: "while they", ur: "اور وہ", ar: "وهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "hal" } },
      { arabic: "مُّسْتَكْبِرُونَ", transliteration: "mustakbirūna", meaning: { en: "are arrogant", ur: "تکبر کرتے ہیں", ar: "مستكبرون" }, root: "ك-ب-ر", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
      { from: 9, to: 10, label: 'فعل + مفعول به' },
      { from: 11, to: 12, label: 'حال' },
      { from: 12, to: 13, label: 'حال' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "سَوَاءٌ عَلَيْهِمْ أَسْتَغْفَرْتَ لَهُمْ أَمْ لَمْ تَسْتَغْفِرْ لَهُمْ لَن يَغْفِرَ اللَّهُ لَهُمْ ۚ إِنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ",
    words: [
      { arabic: "سَوَاءٌ", transliteration: "sawāʾun", meaning: { en: "It is the same", ur: "برابر ہے", ar: "سواء" }, root: "س-و-ي", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "for them", ur: "ان پر", ar: "عليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "أَسْتَغْفَرْتَ", transliteration: "astaghfarta", meaning: { en: "whether you ask forgiveness", ur: "چاہے تم استغفار کرو", ar: "أستغفرت" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "X", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "condition" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "alternative" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہ", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "تَسْتَغْفِرْ", transliteration: "tastaghfir", meaning: { en: "you ask forgiveness", ur: "تم استغفار کرو", ar: "تستغفر" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "X", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "لَن", transliteration: "lan", meaning: { en: "never", ur: "ہرگز نہیں", ar: "لن" }, pos: "NEG", posLabel: "NEG", grammar: { role: "emphatic_negative" } },
      { arabic: "يَغْفِرَ", transliteration: "yaghfira", meaning: { en: "will forgive", ur: "بخشے گا", ar: "يغفر" }, root: "غ-ف-ر", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "them", ur: "انہیں", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "subject_acc" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "does not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يَهْدِي", transliteration: "yahdī", meaning: { en: "guide", ur: "ہدایت دیتا", ar: "يهدي" }, root: "ه-د-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "الْقَوْمَ", transliteration: "l-qawma", meaning: { en: "the people", ur: "قوم کو", ar: "القوم" }, root: "ق-و-م", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "الْفَاسِقِينَ", transliteration: "l-fāsiqīna", meaning: { en: "defiantly disobedient", ur: "نافرمان", ar: "الفاسقين" }, root: "ف-س-ق", pos: "ADJ", posLabel: "ADJ", case: "ACC", number: "P", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'نفی + فعل' },
      { from: 9, to: 10, label: 'نفی + فعل' },
      { from: 10, to: 11, label: 'فعل + فاعل' },
      { from: 15, to: 16, label: 'نفی + فعل' },
      { from: 16, to: 17, label: 'فعل + مفعول به' },
      { from: 17, to: 18, label: 'موصوف + صفت' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "هُمُ الَّذِينَ يَقُولُونَ لَا تُنفِقُوا عَلَىٰ مَنْ عِندَ رَسُولِ اللَّهِ حَتَّىٰ يَنفَضُّوا ۗ وَلِلَّهِ خَزَائِنُ السَّمَاوَاتِ وَالْأَرْضِ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَفْقَهُونَ",
    words: [
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "They", ur: "یہی وہ ہیں", ar: "هم" }, pos: "PRON", posLabel: "PRON", person: "3", gender: "M", number: "P", grammar: { role: "subject" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", number: "P", grammar: { role: "relative" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "say", ur: "کہتے ہیں", ar: "يقولون" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تُنفِقُوا", transliteration: "tunfiqū", meaning: { en: "spend", ur: "خرچ کرو", ar: "تنفقوا" }, root: "ن-ف-ق", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "those who", ur: "ان لوگوں", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "obj_prep" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "are with", ur: "پاس ہیں", ar: "عند" }, pos: "N", posLabel: "N", case: "GEN", grammar: { role: "adverb" } },
      { arabic: "رَسُولِ", transliteration: "rasūli", meaning: { en: "the Messenger", ur: "رسول کے", ar: "رسول" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "تاکہ", ar: "حتى" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "purpose" } },
      { arabic: "يَنفَضُّوا", transliteration: "yanfaḍḍū", meaning: { en: "they disband", ur: "وہ بکھر جائیں", ar: "ينفضوا" }, root: "ن-ف-ض", pos: "V", posLabel: "V", form: "VII", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "وَلِلَّهِ", transliteration: "wa-lillāhi", meaning: { en: "And to Allah belong", ur: "اور اللہ کے ہیں", ar: "ولله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "predicate" } },
      { arabic: "خَزَائِنُ", transliteration: "khazāʾinu", meaning: { en: "the treasures", ur: "خزانے", ar: "خزائن" }, root: "خ-ز-ن", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "l-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں کے", ar: "السماوات" }, root: "س-م-و", pos: "N", posLabel: "N", case: "GEN", number: "P", gender: "F", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wa-l-arḍi", meaning: { en: "and the earth", ur: "اور زمین کے", ar: "والأرض" }, root: "أ-ر-ض", pos: "N", posLabel: "N", case: "GEN", gender: "F", grammar: { role: "coord_mudaf_ilayh" } },
      { arabic: "وَلَٰكِنَّ", transliteration: "wa-lākinna", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammar: { role: "adversative" } },
      { arabic: "الْمُنَافِقِينَ", transliteration: "l-munāfiqīna", meaning: { en: "the hypocrites", ur: "منافق", ar: "المنافقين" }, root: "ن-ف-ق", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "subject_acc" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يَفْقَهُونَ", transliteration: "yafqahūna", meaning: { en: "understand", ur: "سمجھتے", ar: "يفقهون" }, root: "ف-ق-ه", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
      { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
      { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
      { from: 19, to: 20, label: 'نفی + فعل' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "يَقُولُونَ لَئِن رَّجَعْنَا إِلَى الْمَدِينَةِ لَيُخْرِجَنَّ الْأَعَزُّ مِنْهَا الْأَذَلَّ ۚ وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَعْلَمُونَ",
    words: [
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "They say", ur: "وہ کہتے ہیں", ar: "يقولون" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "verb" } },
      { arabic: "لَئِن", transliteration: "la-in", meaning: { en: "Surely if", ur: "اگر", ar: "لئن" }, pos: "EMPH+COND", posLabel: "EMPH+COND", grammar: { role: "conditional" } },
      { arabic: "رَّجَعْنَا", transliteration: "rajaʿnā", meaning: { en: "we return", ur: "ہم لوٹیں", ar: "رجعنا" }, root: "ر-ج-ع", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "1", number: "P", grammar: { role: "condition" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْمَدِينَةِ", transliteration: "l-madīnati", meaning: { en: "Al-Madinah", ur: "مدینہ", ar: "المدينة" }, root: "م-د-ن", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "لَيُخْرِجَنَّ", transliteration: "la-yukhrijanna", meaning: { en: "surely will expel", ur: "ضرور نکال دے گا", ar: "ليخرجن" }, root: "خ-ر-ج", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result" } },
      { arabic: "الْأَعَزُّ", transliteration: "l-aʿazzu", meaning: { en: "the more honored", ur: "عزت والا", ar: "الأعز" }, root: "ع-ز-ز", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "subject" } },
      { arabic: "مِنْهَا", transliteration: "minhā", meaning: { en: "from it", ur: "اس سے", ar: "منها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "prep_phrase" } },
      { arabic: "الْأَذَلَّ", transliteration: "l-adhalla", meaning: { en: "the more humble", ur: "ذلیل کو", ar: "الأذل" }, root: "ذ-ل-ل", pos: "ADJ", posLabel: "ADJ", case: "ACC", grammar: { role: "object" } },
      { arabic: "وَلِلَّهِ", transliteration: "wa-lillāhi", meaning: { en: "And to Allah belongs", ur: "اور اللہ کی ہے", ar: "ولله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "predicate" } },
      { arabic: "الْعِزَّةُ", transliteration: "l-ʿizzatu", meaning: { en: "all honor", ur: "عزت", ar: "العزة" }, root: "ع-ز-ز", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "وَلِرَسُولِهِ", transliteration: "wa-li-rasūlihi", meaning: { en: "and to His Messenger", ur: "اور اس کے رسول کی", ar: "ولرسوله" }, root: "ر-س-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "coord_predicate" } },
      { arabic: "وَلِلْمُؤْمِنِينَ", transliteration: "wa-li-l-muʾminīna", meaning: { en: "and to the believers", ur: "اور مومنوں کی", ar: "وللمؤمنين" }, root: "أ-م-ن", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "coord_predicate" } },
      { arabic: "وَلَٰكِنَّ", transliteration: "wa-lākinna", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammar: { role: "adversative" } },
      { arabic: "الْمُنَافِقِينَ", transliteration: "l-munāfiqīna", meaning: { en: "the hypocrites", ur: "منافق", ar: "المنافقين" }, root: "ن-ف-ق", pos: "N", posLabel: "N", case: "ACC", number: "P", grammar: { role: "subject_acc" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negative" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جانتے", ar: "يعلمون" }, root: "ع-ل-م", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 7, to: 10, label: 'مبتدأ + خبر' },
      { from: 16, to: 17, label: 'نفی + فعل' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُلْهِكُمْ أَمْوَالُكُمْ وَلَا أَوْلَادُكُمْ عَن ذِكْرِ اللَّهِ ۚ وَمَن يَفْعَلْ ذَٰلِكَ فَأُولَٰئِكَ هُمُ الْخَاسِرُونَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "لوگو", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو", ar: "الذين" }, pos: "REL", posLabel: "REL", number: "P", grammar: { role: "relative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, root: "أ-م-ن", pos: "V", posLabel: "V", form: "IV", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "let not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تُلْهِكُمْ", transliteration: "tulhikum", meaning: { en: "distract you", ur: "تمہیں غافل کرے", ar: "تلهكم" }, root: "ل-ه-و", pos: "V", posLabel: "V", form: "IV", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "F", number: "S", grammar: { role: "verb" } },
      { arabic: "أَمْوَالُكُمْ", transliteration: "amwālukum", meaning: { en: "your wealth", ur: "تمہارا مال", ar: "أموالكم" }, root: "م-و-ل", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "subject" } },
      { arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "coord_prohibition" } },
      { arabic: "أَوْلَادُكُمْ", transliteration: "awlādukum", meaning: { en: "your children", ur: "تمہاری اولاد", ar: "أولادكم" }, root: "و-ل-د", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "coord_subject" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذِكْرِ", transliteration: "dhikri", meaning: { en: "the remembrance", ur: "یاد", ar: "ذكر" }, root: "ذ-ك-ر", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کی", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "mudaf_ilayh" } },
      { arabic: "وَمَن", transliteration: "wa-man", meaning: { en: "And whoever", ur: "اور جو", ar: "ومن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { role: "conditional" } },
      { arabic: "يَفْعَلْ", transliteration: "yafʿal", meaning: { en: "does", ur: "کرے", ar: "يفعل" }, root: "ف-ع-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "condition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "یہ", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "object" } },
      { arabic: "فَأُولَٰئِكَ", transliteration: "fa-ulāʾika", meaning: { en: "then those", ur: "تو یہی", ar: "فأولئك" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { role: "result" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", person: "3", gender: "M", number: "P", grammar: { role: "subject" } },
      { arabic: "الْخَاسِرُونَ", transliteration: "l-khāsirūna", meaning: { en: "the losers", ur: "نقصان اٹھانے والے", ar: "الخاسرون" }, root: "خ-س-ر", pos: "N", posLabel: "N", case: "NOM", number: "P", grammar: { role: "predicate" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
      { from: 15, to: 18, label: 'مبتدأ + خبر' },
      { from: 17, to: 18, label: 'مبتدأ + خبر' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَأَنفِقُوا مِن مَّا رَزَقْنَاكُم مِّن قَبْلِ أَن يَأْتِيَ أَحَدَكُمُ الْمَوْتُ فَيَقُولَ رَبِّ لَوْلَا أَخَّرْتَنِي إِلَىٰ أَجَلٍ قَرِيبٍ فَأَصَّدَّقَ وَأَكُن مِّنَ الصَّالِحِينَ",
    words: [
      { arabic: "وَأَنفِقُوا", transliteration: "wa-anfiqū", meaning: { en: "And spend", ur: "اور خرچ کرو", ar: "وأنفقوا" }, root: "ن-ف-ق", pos: "V", posLabel: "V", form: "IV", aspect: "IMPV", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "command" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "obj_prep" } },
      { arabic: "رَزَقْنَاكُم", transliteration: "razaqnākum", meaning: { en: "We have provided you", ur: "ہم نے تمہیں دیا", ar: "رزقناكم" }, root: "ر-ز-ق", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "1", number: "P", grammar: { role: "relative_verb" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before", ur: "پہلے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِ", transliteration: "qabli", meaning: { en: "before", ur: "سے", ar: "قبل" }, root: "ق-ب-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "SUB", posLabel: "SUB", grammar: { role: "subjunctive" } },
      { arabic: "يَأْتِيَ", transliteration: "yaʾtiya", meaning: { en: "comes", ur: "آئے", ar: "يأتي" }, root: "أ-ت-ي", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "أَحَدَكُمُ", transliteration: "aḥadakumu", meaning: { en: "to one of you", ur: "تم میں سے کسی کو", ar: "أحدكم" }, pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "الْمَوْتُ", transliteration: "l-mawtu", meaning: { en: "death", ur: "موت", ar: "الموت" }, root: "م-و-ت", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "فَيَقُولَ", transliteration: "fa-yaqūla", meaning: { en: "and he says", ur: "پھر کہے", ar: "فيقول" }, root: "ق-و-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "result_verb" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "My Lord", ur: "اے میرے رب", ar: "رب" }, root: "ر-ب-ب", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "vocative" } },
      { arabic: "لَوْلَا", transliteration: "lawlā", meaning: { en: "if only", ur: "کاش", ar: "لولا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "أَخَّرْتَنِي", transliteration: "akhkhartanī", meaning: { en: "You delayed me", ur: "تو مجھے مہلت دیتا", ar: "أخرتني" }, root: "أ-خ-ر", pos: "V", posLabel: "V", form: "II", aspect: "PERF", voice: "ACT", person: "2", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "for", ur: "تک", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَجَلٍ", transliteration: "ajalin", meaning: { en: "a term", ur: "مدت", ar: "أجل" }, root: "أ-ج-ل", pos: "N", posLabel: "N", case: "GEN", grammar: { role: "obj_prep" } },
      { arabic: "قَرِيبٍ", transliteration: "qarībin", meaning: { en: "near", ur: "قریب", ar: "قريب" }, root: "ق-ر-ب", pos: "ADJ", posLabel: "ADJ", case: "GEN", grammar: { role: "adjective" } },
      { arabic: "فَأَصَّدَّقَ", transliteration: "fa-aṣṣaddaqa", meaning: { en: "then I would give charity", ur: "تاکہ میں صدقہ کروں", ar: "فأصدق" }, root: "ص-د-ق", pos: "V", posLabel: "V", form: "V", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "1", number: "S", grammar: { role: "purpose" } },
      { arabic: "وَأَكُن", transliteration: "wa-akun", meaning: { en: "and be", ur: "اور ہو جاؤں", ar: "وأكن" }, root: "ك-و-ن", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "JUS", voice: "ACT", person: "1", number: "S", grammar: { role: "coord_purpose" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "among", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الصَّالِحِينَ", transliteration: "l-ṣāliḥīna", meaning: { en: "the righteous", ur: "نیک لوگوں", ar: "الصالحين" }, root: "ص-ل-ح", pos: "N", posLabel: "N", case: "GEN", number: "P", grammar: { role: "obj_prep" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 8, to: 9, label: 'فعل + مفعول به' },
      { from: 16, to: 17, label: 'موصوف + صفت' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "وَلَن يُؤَخِّرَ اللَّهُ نَفْسًا إِذَا جَاءَ أَجَلُهَا ۚ وَاللَّهُ خَبِيرٌ بِمَا تَعْمَلُونَ",
    words: [
      { arabic: "وَلَن", transliteration: "wa-lan", meaning: { en: "But never", ur: "اور ہرگز نہیں", ar: "ولن" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { role: "emphatic_negative" } },
      { arabic: "يُؤَخِّرَ", transliteration: "yuʾakhkhira", meaning: { en: "will delay", ur: "مہلت دے گا", ar: "يؤخر" }, root: "أ-خ-ر", pos: "V", posLabel: "V", form: "II", aspect: "IMPF", mood: "SUBJ", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "نَفْسًا", transliteration: "nafsan", meaning: { en: "a soul", ur: "کسی جان کو", ar: "نفسا" }, root: "ن-ف-س", pos: "N", posLabel: "N", case: "ACC", grammar: { role: "object" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "جَاءَ", transliteration: "jāʾa", meaning: { en: "comes", ur: "آ جائے", ar: "جاء" }, root: "ج-ي-أ", pos: "V", posLabel: "V", form: "I", aspect: "PERF", voice: "ACT", person: "3", gender: "M", number: "S", grammar: { role: "verb" } },
      { arabic: "أَجَلُهَا", transliteration: "ajaluhā", meaning: { en: "its term", ur: "اس کا وقت", ar: "أجلها" }, root: "أ-ج-ل", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-llāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, root: "أ-ل-ه", pos: "N", posLabel: "N", case: "NOM", grammar: { role: "subject" } },
      { arabic: "خَبِيرٌ", transliteration: "khabīrun", meaning: { en: "is All-Aware", ur: "خبردار ہے", ar: "خبير" }, root: "خ-ب-ر", pos: "ADJ", posLabel: "ADJ", case: "NOM", grammar: { role: "predicate" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو", ar: "بما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "prep_phrase" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, root: "ع-م-ل", pos: "V", posLabel: "V", form: "I", aspect: "IMPF", mood: "IND", voice: "ACT", person: "2", gender: "M", number: "P", grammar: { role: "relative_verb" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 9, label: 'مبتدأ + خبر' },
      { from: 8, to: 9, label: 'موصوف + صفت' },
      { from: 8, to: 9, label: 'مبتدأ + خبر' },
      { from: 10, to: 11, label: 'موصول + صلة' }
      ]
    }
  }
};

export default TREEBANK_DATA;
