/**
 * Surah 'Abasa (80) - Quranic Arabic Treebank
 * He Frowned
 * Total Ayahs: 42
 * Theme: Prophet's correction, Quran's honor, human creation, Day of Judgment
 */

export const TREEBANK_DATA = {
  surahId: 80,
  surahName: "'Abasa",
  surahNameArabic: "عبس",
  totalAyahs: 42,
  revelationType: "Makki",
  theme: "Divine correction of Prophet, value of sincerity, creation signs, Judgment Day",

  1: {
    ayahNumber: 1,
    arabic: "عَبَسَ وَتَوَلَّىٰ",
    words: [
      { position: 1, arabic: "عَبَسَ", transliteration: "ʿabasa", root: "ع ب س", meaning: { en: "He frowned", ur: "اس نے تیوری چڑھائی", ar: "قَطَّبَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { rootFamily: ["عَبوس", "عَبَس"], linguisticMiracle: "Third person - gentle, not direct 'you frowned'" } },
      { position: 2, arabic: "وَتَوَلَّىٰ", transliteration: "wa-tawallā", root: "و ل ي", meaning: { en: "and turned away", ur: "اور منہ پھیر لیا", ar: "وَأَعرَضَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" } }
    ]
  },

  2: {
    ayahNumber: 2,
    arabic: "أَن جَاءَهُ الْأَعْمَىٰ",
    words: [
      { position: 1, arabic: "أَن", transliteration: "an", meaning: { en: "Because", ur: "کہ", ar: "لِأَنَّ" }, pos: "SUB", posLabel: "SUB", grammarRole: "subordinating" },
      { position: 2, arabic: "جَاءَهُ", transliteration: "jā'ahu", root: "ج ي أ", meaning: { en: "came to him", ur: "آیا اس کے پاس", ar: "أَتاهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 3, arabic: "الْأَعْمَىٰ", transliteration: "al-aʿmā", root: "ع م ي", meaning: { en: "the blind man", ur: "نابینا", ar: "الكَفيف" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { linguisticMiracle: "Abdullah ibn Umm Maktum - came seeking guidance" } }
    ]
  },

  3: {
    ayahNumber: 3,
    arabic: "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INT", posLabel: "CONJ+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "يُدْرِيكَ", transliteration: "yudrīka", root: "د ر ي", meaning: { en: "could make you know", ur: "تجھے خبر کرے", ar: "يُعلِمُكَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 3, arabic: "لَعَلَّهُ", transliteration: "laʿallahu", meaning: { en: "perhaps he", ur: "شاید وہ", ar: "لَعَلَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 4, arabic: "يَزَّكَّىٰ", transliteration: "yazzakkā", root: "ز ك و", meaning: { en: "might be purified", ur: "پاک ہو جائے", ar: "يَتَطَهَّرَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" }, advanced: { linguisticMiracle: "The blind man might achieve more purification than the chiefs" } }
    ]
  },

  4: {
    ayahNumber: 4,
    arabic: "أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ",
    words: [
      { position: 1, arabic: "أَوْ", transliteration: "aw", meaning: { en: "Or", ur: "یا", ar: "أَو" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "disjunction" },
      { position: 2, arabic: "يَذَّكَّرُ", transliteration: "yadhdhakkaru", root: "ذ ك ر", meaning: { en: "he might remember", ur: "نصیحت پکڑے", ar: "يَتَّعِظَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" } },
      { position: 3, arabic: "فَتَنفَعَهُ", transliteration: "fatanfaʿahu", root: "ن ف ع", meaning: { en: "so benefits him", ur: "تو فائدہ دے", ar: "فَتُفيدَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 4, arabic: "الذِّكْرَىٰ", transliteration: "al-dhikrā", root: "ذ ك ر", meaning: { en: "the reminder", ur: "نصیحت", ar: "المَوعِظَة" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ]
  },

  5: {
    ayahNumber: 5,
    arabic: "أَمَّا مَنِ اسْتَغْنَىٰ",
    words: [
      { position: 1, arabic: "أَمَّا", transliteration: "ammā", meaning: { en: "As for", ur: "جہاں تک", ar: "أَمّا" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 2, arabic: "مَنِ", transliteration: "mani", meaning: { en: "he who", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "اسْتَغْنَىٰ", transliteration: "istaghnā", root: "غ ن ي", meaning: { en: "considers himself self-sufficient", ur: "بے پرواہ ہوا", ar: "استَكبَرَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "X" }, advanced: { linguisticMiracle: "Form X - claiming to have no need (the arrogant)" } }
    ]
  },

  6: {
    ayahNumber: 6,
    arabic: "فَأَنتَ لَهُ تَصَدَّىٰ",
    words: [
      { position: 1, arabic: "فَأَنتَ", transliteration: "fa-anta", meaning: { en: "To him you", ur: "تو تو اسے", ar: "فَأَنتَ" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammarRole: "subject" },
      { position: 2, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "give attention", ur: "اس کی طرف", ar: "إليهِ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "تَصَدَّىٰ", transliteration: "taṣaddā", root: "ص د ي", meaning: { en: "give attention", ur: "توجہ کرتا ہے", ar: "تَلتَفِتُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" } }
    ]
  },

  7: {
    ayahNumber: 7,
    arabic: "وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں ہے", ar: "ولَيسَ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "upon you", ur: "تجھ پر", ar: "عليكَ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "أَلَّا", transliteration: "allā", meaning: { en: "if not", ur: "اگر نہ", ar: "إن لَم" }, pos: "SUB+NEG", posLabel: "SUB+NEG", grammarRole: "subordinating" },
      { position: 4, arabic: "يَزَّكَّىٰ", transliteration: "yazzakkā", meaning: { en: "he be purified", ur: "وہ پاک ہو", ar: "يَتَطَهَّرَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Prophet isn't responsible if arrogant don't purify" } }
    ]
  },

  8: {
    ayahNumber: 8,
    arabic: "وَأَمَّا مَن جَاءَكَ يَسْعَىٰ",
    words: [
      { position: 1, arabic: "وَأَمَّا", transliteration: "wa-ammā", meaning: { en: "But as for", ur: "اور جہاں تک", ar: "وَأَمّا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "مَن", transliteration: "man", meaning: { en: "he who", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "جَاءَكَ", transliteration: "jā'aka", meaning: { en: "came to you", ur: "تیرے پاس آیا", ar: "أَتاكَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 4, arabic: "يَسْعَىٰ", transliteration: "yasʿā", root: "س ع ي", meaning: { en: "striving", ur: "دوڑتا ہوا", ar: "مُجتَهِداً" }, pos: "V", posLabel: "V", grammarRole: "adverb of state", advanced: { linguisticMiracle: "Despite blindness, he strove to reach the Prophet" } }
    ]
  },

  9: {
    ayahNumber: 9,
    arabic: "وَهُوَ يَخْشَىٰ",
    words: [
      { position: 1, arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "While he", ur: "اور وہ", ar: "وَهُوَ" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammarRole: "subject" },
      { position: 2, arabic: "يَخْشَىٰ", transliteration: "yakhshā", root: "خ ش ي", meaning: { en: "fears (Allah)", ur: "ڈرتا ہے", ar: "يَخافُ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Khashyah - reverential fear mixed with awe" } }
    ]
  },

  10: {
    ayahNumber: 10,
    arabic: "فَأَنتَ عَنْهُ تَلَهَّىٰ",
    words: [
      { position: 1, arabic: "فَأَنتَ", transliteration: "fa-anta", meaning: { en: "From him you", ur: "تو تو اس سے", ar: "فَأَنتَ" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammarRole: "subject" },
      { position: 2, arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "are distracted", ur: "غافل ہو گیا", ar: "عَنهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "تَلَهَّىٰ", transliteration: "talahhā", root: "ل ه و", meaning: { en: "are distracted", ur: "بے پروا ہو گیا", ar: "تَشتَغِلُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" } }
    ]
  },

  11: {
    ayahNumber: 11,
    arabic: "كَلَّا إِنَّهَا تَذْكِرَةٌ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "حَقًّا" }, pos: "RET", posLabel: "RET", grammarRole: "transition" },
      { position: 2, arabic: "إِنَّهَا", transliteration: "innahā", meaning: { en: "Indeed it", ur: "بے شک یہ", ar: "إِنَّها" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 3, arabic: "تَذْكِرَةٌ", transliteration: "tadhkiratun", root: "ذ ك ر", meaning: { en: "is a reminder", ur: "نصیحت ہے", ar: "مَوعِظَة" }, pos: "N", posLabel: "N", grammarRole: "predicate", features: { pattern: "تَفْعِلَة" } }
    ]
  },

  12: {
    ayahNumber: 12,
    arabic: "فَمَن شَاءَ ذَكَرَهُ",
    words: [
      { position: 1, arabic: "فَمَن", transliteration: "faman", meaning: { en: "So whoever", ur: "پس جو چاہے", ar: "فَمَن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "relative" },
      { position: 2, arabic: "شَاءَ", transliteration: "shā'a", meaning: { en: "wills", ur: "چاہے", ar: "أَرادَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "ذَكَرَهُ", transliteration: "dhakarahu", root: "ذ ك ر", meaning: { en: "may remember it", ur: "اسے یاد کرے", ar: "حَفِظَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" }
    ]
  },

  13: {
    ayahNumber: 13,
    arabic: "فِي صُحُفٍ مُّكَرَّمَةٍ",
    words: [
      { position: 1, arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "صُحُفٍ", transliteration: "ṣuḥufin", root: "ص ح ف", meaning: { en: "scriptures", ur: "صحیفوں", ar: "كُتُب" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "مُّكَرَّمَةٍ", transliteration: "mukarramatin", root: "ك ر م", meaning: { en: "honored", ur: "عزت والے", ar: "مُعَظَّمَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مُفَعَّلَة" } }
    ]
  },

  14: {
    ayahNumber: 14,
    arabic: "مَّرْفُوعَةٍ مُّطَهَّرَةٍ",
    words: [
      { position: 1, arabic: "مَّرْفُوعَةٍ", transliteration: "marfūʿatin", root: "ر ف ع", meaning: { en: "Exalted", ur: "بلند مرتبہ", ar: "عالِيَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 2, arabic: "مُّطَهَّرَةٍ", transliteration: "muṭahharatin", root: "ط ه ر", meaning: { en: "purified", ur: "پاکیزہ", ar: "نَقِيَّة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  15: {
    ayahNumber: 15,
    arabic: "بِأَيْدِي سَفَرَةٍ",
    words: [
      { position: 1, arabic: "بِأَيْدِي", transliteration: "bi-aydī", meaning: { en: "In the hands", ur: "ہاتھوں میں", ar: "بِأَيدي" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 2, arabic: "سَفَرَةٍ", transliteration: "safaratin", root: "س ف ر", meaning: { en: "of scribes", ur: "لکھنے والے فرشتوں", ar: "كَتَبَة" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Safarah = scribes (angels) who copy revelation" } }
    ]
  },

  16: {
    ayahNumber: 16,
    arabic: "كِرَامٍ بَرَرَةٍ",
    words: [
      { position: 1, arabic: "كِرَامٍ", transliteration: "kirāmin", root: "ك ر م", meaning: { en: "Noble", ur: "معزز", ar: "شُرَفاء" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 2, arabic: "بَرَرَةٍ", transliteration: "bararatin", root: "ب ر ر", meaning: { en: "dutiful", ur: "فرمانبردار", ar: "صالِحينَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Angels both noble and obedient to Allah" } }
    ]
  },

  17: {
    ayahNumber: 17,
    arabic: "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ",
    words: [
      { position: 1, arabic: "قُتِلَ", transliteration: "qutila", root: "ق ت ل", meaning: { en: "Destroyed is", ur: "مارا جائے", ar: "لُعِنَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" }, advanced: { linguisticMiracle: "Curse formula - expressing dismay at ingratitude" } },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "al-insānu", meaning: { en: "man", ur: "انسان", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "how", ur: "کیسا", ar: "ما" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 4, arabic: "أَكْفَرَهُ", transliteration: "akfarahu", root: "ك ف ر", meaning: { en: "ungrateful he is", ur: "بڑا ناشکرا ہے", ar: "شَديدُ الكُفر" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } }
    ]
  },

  18: {
    ayahNumber: 18,
    arabic: "مِنْ أَيِّ شَيْءٍ خَلَقَهُ",
    words: [
      { position: 1, arabic: "مِنْ", transliteration: "min", meaning: { en: "From", ur: "کس", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "أَيِّ", transliteration: "ayyi", meaning: { en: "what", ur: "کس", ar: "أَيِّ" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 3, arabic: "شَيْءٍ", transliteration: "shay'in", meaning: { en: "thing", ur: "چیز سے", ar: "شَيء" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "خَلَقَهُ", transliteration: "khalaqahu", meaning: { en: "He created him", ur: "اسے پیدا کیا", ar: "أَوجَدَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" }
    ]
  },

  19: {
    ayahNumber: 19,
    arabic: "مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ",
    words: [
      { position: 1, arabic: "مِن", transliteration: "min", meaning: { en: "From", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "نُّطْفَةٍ", transliteration: "nuṭfatin", root: "ن ط ف", meaning: { en: "a drop", ur: "ایک بوند", ar: "قَطرَة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "خَلَقَهُ", transliteration: "khalaqahu", meaning: { en: "created him", ur: "اسے پیدا کیا", ar: "أَوجَدَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 4, arabic: "فَقَدَّرَهُ", transliteration: "faqaddarahu", root: "ق د ر", meaning: { en: "then determined him", ur: "پھر اندازہ ٹھہرایا", ar: "فَحَدَّدَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "II" } }
    ]
  },

  20: {
    ayahNumber: 20,
    arabic: "ثُمَّ السَّبِيلَ يَسَّرَهُ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "السَّبِيلَ", transliteration: "al-sabīla", root: "س ب ل", meaning: { en: "the way", ur: "راستہ", ar: "الطَّريقَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "يَسَّرَهُ", transliteration: "yassarahu", root: "ي س ر", meaning: { en: "made easy for him", ur: "آسان کیا", ar: "سَهَّلَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "II" }, advanced: { linguisticMiracle: "Birth canal opened, or path of guidance shown" } }
    ]
  },

  21: {
    ayahNumber: 21,
    arabic: "ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "أَمَاتَهُ", transliteration: "amātahu", root: "م و ت", meaning: { en: "caused his death", ur: "اسے مارا", ar: "قَتَلَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "IV" } },
      { position: 3, arabic: "فَأَقْبَرَهُ", transliteration: "fa-aqbarahu", root: "ق ب ر", meaning: { en: "then buried him", ur: "پھر اسے دفنایا", ar: "فَدَفَنَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "IV" }, advanced: { linguisticMiracle: "Form IV causative - Allah causes burial (through others)" } }
    ]
  },

  22: {
    ayahNumber: 22,
    arabic: "ثُمَّ إِذَا شَاءَ أَنشَرَهُ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "temporal" },
      { position: 3, arabic: "شَاءَ", transliteration: "shā'a", meaning: { en: "He wills", ur: "چاہے", ar: "أَرادَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "أَنشَرَهُ", transliteration: "ansharahu", root: "ن ش ر", meaning: { en: "will resurrect him", ur: "اسے اٹھائے گا", ar: "أَحياهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "IV" } }
    ]
  },

  23: {
    ayahNumber: 23,
    arabic: "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "حَقًّا" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 2, arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "never has", ur: "نہیں", ar: "لَم" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 3, arabic: "يَقْضِ", transliteration: "yaqḍi", root: "ق ض ي", meaning: { en: "he fulfilled", ur: "پورا کیا", ar: "أَدّى" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 5, arabic: "أَمَرَهُ", transliteration: "amarahu", meaning: { en: "He commanded him", ur: "اسے حکم دیا", ar: "أَوصاهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", advanced: { linguisticMiracle: "Man hasn't fulfilled his obligations despite all favors" } }
    ]
  },

  24: {
    ayahNumber: 24,
    arabic: "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ",
    words: [
      { position: 1, arabic: "فَلْيَنظُرِ", transliteration: "falyanẓuri", root: "ن ظ ر", meaning: { en: "So let man observe", ur: "پس انسان دیکھے", ar: "فَليَتَأَمَّل" }, pos: "V", posLabel: "V", grammarRole: "jussive" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "al-insānu", meaning: { en: "man", ur: "انسان", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "at", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "طَعَامِهِ", transliteration: "ṭaʿāmihi", root: "ط ع م", meaning: { en: "his food", ur: "اپنے کھانے", ar: "غِذائِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" }
    ]
  },

  25: {
    ayahNumber: 25,
    arabic: "أَنَّا صَبَبْنَا الْمَاءَ صَبًّا",
    words: [
      { position: 1, arabic: "أَنَّا", transliteration: "annā", meaning: { en: "That We", ur: "کہ ہم نے", ar: "إِنَّنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "صَبَبْنَا", transliteration: "ṣababnā", root: "ص ب ب", meaning: { en: "poured", ur: "انڈیلا", ar: "أَنزَلنا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "الْمَاءَ", transliteration: "al-mā'a", meaning: { en: "water", ur: "پانی", ar: "المَطَرَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "صَبًّا", transliteration: "ṣabban", meaning: { en: "pouring", ur: "خوب انڈیلا", ar: "كَثيراً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ]
  },

  26: {
    ayahNumber: 26,
    arabic: "ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "شَقَقْنَا", transliteration: "shaqaqnā", root: "ش ق ق", meaning: { en: "We split", ur: "ہم نے چیرا", ar: "فَتَحنا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "الْأَرْضَ", transliteration: "al-arḍa", meaning: { en: "the earth", ur: "زمین کو", ar: "التُّربَةَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "شَقًّا", transliteration: "shaqqan", meaning: { en: "splitting", ur: "خوب چیرا", ar: "شَقًّا" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ]
  },

  27: {
    ayahNumber: 27,
    arabic: "فَأَنبَتْنَا فِيهَا حَبًّا",
    words: [
      { position: 1, arabic: "فَأَنبَتْنَا", transliteration: "fa-anbatnā", root: "ن ب ت", meaning: { en: "And caused to grow", ur: "پھر ہم نے اگایا", ar: "فَأَخرَجنا" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 2, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "حَبًّا", transliteration: "ḥabban", root: "ح ب ب", meaning: { en: "grain", ur: "اناج", ar: "حُبوباً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ]
  },

  28: {
    ayahNumber: 28,
    arabic: "وَعِنَبًا وَقَضْبًا",
    words: [
      { position: 1, arabic: "وَعِنَبًا", transliteration: "wa-ʿinaban", root: "ع ن ب", meaning: { en: "And grapes", ur: "اور انگور", ar: "وَكَرماً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "وَقَضْبًا", transliteration: "wa-qaḍban", root: "ق ض ب", meaning: { en: "and herbage", ur: "اور ترکاری", ar: "وَخَضراوات" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ]
  },

  29: {
    ayahNumber: 29,
    arabic: "وَزَيْتُونًا وَنَخْلًا",
    words: [
      { position: 1, arabic: "وَزَيْتُونًا", transliteration: "wa-zaytūnan", root: "ز ي ت", meaning: { en: "And olive trees", ur: "اور زیتون", ar: "وَشَجَرَ الزَّيتون" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "وَنَخْلًا", transliteration: "wa-nakhlan", root: "ن خ ل", meaning: { en: "and date palms", ur: "اور کھجور", ar: "وَنَخيلاً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ]
  },

  30: {
    ayahNumber: 30,
    arabic: "وَحَدَائِقَ غُلْبًا",
    words: [
      { position: 1, arabic: "وَحَدَائِقَ", transliteration: "wa-ḥadā'iqa", root: "ح د ق", meaning: { en: "And gardens", ur: "اور باغ", ar: "وَبَساتينَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "غُلْبًا", transliteration: "ghulban", root: "غ ل ب", meaning: { en: "dense", ur: "گھنے", ar: "كَثيفَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  31: {
    ayahNumber: 31,
    arabic: "وَفَاكِهَةً وَأَبًّا",
    words: [
      { position: 1, arabic: "وَفَاكِهَةً", transliteration: "wa-fākihatan", root: "ف ك ه", meaning: { en: "And fruit", ur: "اور میوے", ar: "وَثِماراً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "وَأَبًّا", transliteration: "wa-abban", root: "أ ب ب", meaning: { en: "and pasture", ur: "اور چارہ", ar: "وَمَرعى" }, pos: "N", posLabel: "N", grammarRole: "object", advanced: { linguisticMiracle: "Abb = fodder/grass for animals - provision for livestock too" } }
    ]
  },

  32: {
    ayahNumber: 32,
    arabic: "مَّتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ",
    words: [
      { position: 1, arabic: "مَّتَاعًا", transliteration: "matāʿan", root: "م ت ع", meaning: { en: "As provision", ur: "فائدہ", ar: "مَنفَعَةً" }, pos: "N", posLabel: "N", grammarRole: "adverb of purpose" },
      { position: 2, arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لَكُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "وَلِأَنْعَامِكُمْ", transliteration: "wa-li-anʿāmikum", root: "ن ع م", meaning: { en: "and for your cattle", ur: "اور تمہارے جانوروں کے لیے", ar: "وَلِمَواشيكُم" }, pos: "PREP+N+PRON", posLabel: "PREP+N+PRON", grammarRole: "prepositional phrase" }
    ]
  },

  33: {
    ayahNumber: 33,
    arabic: "فَإِذَا جَاءَتِ الصَّاخَّةُ",
    words: [
      { position: 1, arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "So when", ur: "پھر جب", ar: "فَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "جَاءَتِ", transliteration: "jā'ati", meaning: { en: "comes", ur: "آئے", ar: "أَتَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "الصَّاخَّةُ", transliteration: "al-ṣākhkhatu", root: "ص خ خ", meaning: { en: "the Deafening Blast", ur: "کان پھاڑ دینے والی", ar: "القارِعَة" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { rootFamily: ["صَخّ", "صاخَّة"], linguisticMiracle: "Trumpet blast so loud it deafens - Judgment Day" } }
    ]
  },

  34: {
    ayahNumber: 34,
    arabic: "يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb of time" },
      { position: 2, arabic: "يَفِرُّ", transliteration: "yafirru", root: "ف ر ر", meaning: { en: "will flee", ur: "بھاگے گا", ar: "يَهرُبُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "الْمَرْءُ", transliteration: "al-mar'u", meaning: { en: "a man", ur: "انسان", ar: "الإنسان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "أَخِيهِ", transliteration: "akhīhi", root: "أ خ و", meaning: { en: "his brother", ur: "اپنے بھائی", ar: "أَخيهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" }
    ]
  },

  35: {
    ayahNumber: 35,
    arabic: "وَأُمِّهِ وَأَبِيهِ",
    words: [
      { position: 1, arabic: "وَأُمِّهِ", transliteration: "wa-ummihi", root: "أ م م", meaning: { en: "And his mother", ur: "اور اپنی ماں", ar: "وَوالِدَتِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 2, arabic: "وَأَبِيهِ", transliteration: "wa-abīhi", root: "أ ب و", meaning: { en: "and his father", ur: "اور اپنے باپ سے", ar: "وَوالِدِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" }
    ]
  },

  36: {
    ayahNumber: 36,
    arabic: "وَصَاحِبَتِهِ وَبَنِيهِ",
    words: [
      { position: 1, arabic: "وَصَاحِبَتِهِ", transliteration: "wa-ṣāḥibatihi", root: "ص ح ب", meaning: { en: "And his spouse", ur: "اور اپنی بیوی", ar: "وَزَوجَتِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 2, arabic: "وَبَنِيهِ", transliteration: "wa-banīhi", root: "ب ن ي", meaning: { en: "and his children", ur: "اور اپنے بچوں سے", ar: "وَأَولادِهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Flees from closest relatives - each person's terror" } }
    ]
  },

  37: {
    ayahNumber: 37,
    arabic: "لِكُلِّ امْرِئٍ مِّنْهُمْ يَوْمَئِذٍ شَأْنٌ يُغْنِيهِ",
    words: [
      { position: 1, arabic: "لِكُلِّ", transliteration: "li-kulli", meaning: { en: "For every", ur: "ہر", ar: "لِكُلِّ" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 2, arabic: "امْرِئٍ", transliteration: "imri'in", meaning: { en: "person", ur: "آدمی کے لیے", ar: "إنسان" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 3, arabic: "مِّنْهُمْ", transliteration: "minhum", meaning: { en: "among them", ur: "ان میں سے", ar: "مِنهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: { en: "that Day", ur: "اس دن", ar: "في ذلِكَ اليَوم" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 5, arabic: "شَأْنٌ", transliteration: "sha'nun", root: "ش أ ن", meaning: { en: "a matter", ur: "فکر ہوگی", ar: "أَمرٌ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 6, arabic: "يُغْنِيهِ", transliteration: "yughnīhi", root: "غ ن ي", meaning: { en: "that suffices him", ur: "جو اسے کافی ہے", ar: "يَشغَلُهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "IV" }, advanced: { linguisticMiracle: "Each person's own concern is enough to occupy them" } }
    ]
  },

  38: {
    ayahNumber: 38,
    arabic: "وُجُوهٌ يَوْمَئِذٍ مُّسْفِرَةٌ",
    words: [
      { position: 1, arabic: "وُجُوهٌ", transliteration: "wujūhun", root: "و ج ه", meaning: { en: "Faces", ur: "کچھ چہرے", ar: "وُجوهٌ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: { en: "that Day", ur: "اس دن", ar: "في ذلِكَ اليَوم" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 3, arabic: "مُّسْفِرَةٌ", transliteration: "musfiratun", root: "س ف ر", meaning: { en: "bright", ur: "چمکتے ہوئے", ar: "مُشرِقَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "مُفْعِلَة" } }
    ]
  },

  39: {
    ayahNumber: 39,
    arabic: "ضَاحِكَةٌ مُّسْتَبْشِرَةٌ",
    words: [
      { position: 1, arabic: "ضَاحِكَةٌ", transliteration: "ḍāḥikatun", root: "ض ح ك", meaning: { en: "Laughing", ur: "ہنستے ہوئے", ar: "فَرِحَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" },
      { position: 2, arabic: "مُّسْتَبْشِرَةٌ", transliteration: "mustabshiratun", root: "ب ش ر", meaning: { en: "rejoicing", ur: "خوش", ar: "مَسرورَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { form: "X" }, advanced: { linguisticMiracle: "Seeking good news - they receive it" } }
    ]
  },

  40: {
    ayahNumber: 40,
    arabic: "وَوُجُوهٌ يَوْمَئِذٍ عَلَيْهَا غَبَرَةٌ",
    words: [
      { position: 1, arabic: "وَوُجُوهٌ", transliteration: "wa-wujūhun", meaning: { en: "And faces", ur: "اور کچھ چہروں", ar: "وَوُجوهٌ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "subject" },
      { position: 2, arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: { en: "that Day", ur: "اس دن", ar: "في ذلِكَ اليَوم" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 3, arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "upon them", ur: "ان پر ہوگی", ar: "عليها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "غَبَرَةٌ", transliteration: "ghabaratun", root: "غ ب ر", meaning: { en: "dust", ur: "غبار", ar: "تُراب" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ]
  },

  41: {
    ayahNumber: 41,
    arabic: "تَرْهَقُهَا قَتَرَةٌ",
    words: [
      { position: 1, arabic: "تَرْهَقُهَا", transliteration: "tarhaquhā", root: "ر ه ق", meaning: { en: "Covering them", ur: "چھا جائے گی", ar: "تَغشاها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 2, arabic: "قَتَرَةٌ", transliteration: "qataratun", root: "ق ت ر", meaning: { en: "blackness", ur: "سیاہی", ar: "سَواد" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { linguisticMiracle: "Dust covered by darkness - total despair" } }
    ]
  },

  42: {
    ayahNumber: 42,
    arabic: "أُولَٰئِكَ هُمُ الْكَفَرَةُ الْفَجَرَةُ",
    words: [
      { position: 1, arabic: "أُولَٰئِكَ", transliteration: "ulā'ika", meaning: { en: "Those", ur: "یہی لوگ", ar: "أُولئِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 2, arabic: "هُمُ", transliteration: "humu", meaning: { en: "are", ur: "ہیں", ar: "هُم" }, pos: "PRON", posLabel: "PRON", grammarRole: "copula" },
      { position: 3, arabic: "الْكَفَرَةُ", transliteration: "al-kafaratu", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافر", ar: "الجاحِدونَ" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "الْفَجَرَةُ", transliteration: "al-fajaratu", root: "ف ج ر", meaning: { en: "the wicked", ur: "فاجر", ar: "الفاسِقونَ" }, pos: "N", posLabel: "N", grammarRole: "predicate", advanced: { linguisticMiracle: "Double description: kufr in belief + fujur in action" } }
    ]
  }
};

export default TREEBANK_DATA;
