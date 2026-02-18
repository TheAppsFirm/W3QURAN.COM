/**
 * Surah Al-Muddaththir (74) - The Cloaked One
 * Quranic Arabic Treebank - Word-by-Word Morphological Analysis
 * 56 Ayahs - Makki - One of the earliest revelations
 */

export const TREEBANK_DATA = {
  surahId: 74,
  surahName: "Al-Muddaththir",
  surahNameArabic: "المدثر",
  totalAyahs: 56,
  revelationType: "Makki",
  theme: "Early commands to Prophet, warning mission, 'Over it are 19', denial consequences",

  1: {
    ayahNumber: 1,
    arabic: "يَا أَيُّهَا الْمُدَّثِّرُ",
    words: [
      { position: 1, arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammarRole: "vocative" },
      { position: 2, arabic: "أَيُّهَا", transliteration: "ʾayyuhā", meaning: { en: "you", ur: "اے", ar: "أَيُّها" }, pos: "PRON", posLabel: "PRON", grammarRole: "vocative" },
      { position: 3, arabic: "الْمُدَّثِّرُ", transliteration: "l-muddaththiru", root: "د ث ر", meaning: { en: "one wrapped in garments", ur: "کپڑا اوڑھنے والے", ar: "المُدَّثِّر" }, pos: "N", posLabel: "N", grammarRole: "subject", form: "V", surahTitle: true, addressee: "Prophet Muhammad" }
    ]
  },

  2: {
    ayahNumber: 2,
    arabic: "قُمْ فَأَنذِرْ",
    words: [
      { position: 1, arabic: "قُمْ", transliteration: "qum", root: "ق و م", meaning: { en: "Arise", ur: "اٹھو", ar: "قُم" }, pos: "V", posLabel: "V", grammarRole: "command", mood: "IMP" },
      { position: 2, arabic: "فَأَنذِرْ", transliteration: "fa-ʾandhir", root: "ن ذ ر", meaning: { en: "and warn", ur: "اور ڈراؤ", ar: "فَأَنذِر" }, pos: "V", posLabel: "V", grammarRole: "command", form: "IV", mission: "warning" }
    ]
  },

  3: {
    ayahNumber: 3,
    arabic: "وَرَبَّكَ فَكَبِّرْ",
    words: [
      { position: 1, arabic: "وَرَبَّكَ", transliteration: "wa-rabbaka", root: "ر ب ب", meaning: { en: "And your Lord", ur: "اور اپنے رب کی", ar: "ورَبَّكَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "فَكَبِّرْ", transliteration: "fa-kabbir", root: "ك ب ر", meaning: { en: "glorify", ur: "بڑائی بیان کرو", ar: "فَكَبِّر" }, pos: "V", posLabel: "V", grammarRole: "command", form: "II" }
    ]
  },

  4: {
    ayahNumber: 4,
    arabic: "وَثِيَابَكَ فَطَهِّرْ",
    words: [
      { position: 1, arabic: "وَثِيَابَكَ", transliteration: "wa-thiyābaka", root: "ث و ب", meaning: { en: "And your garments", ur: "اور اپنے کپڑے", ar: "وثِيابَكَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "فَطَهِّرْ", transliteration: "fa-ṭahhir", root: "ط ه ر", meaning: { en: "purify", ur: "پاک رکھو", ar: "فَطَهِّر" }, pos: "V", posLabel: "V", grammarRole: "command", form: "II" }
    ]
  },

  5: {
    ayahNumber: 5,
    arabic: "وَالرُّجْزَ فَاهْجُرْ",
    words: [
      { position: 1, arabic: "وَالرُّجْزَ", transliteration: "wal-rujza", root: "ر ج ز", meaning: { en: "And uncleanliness/idols", ur: "اور گندگی/بتوں کو", ar: "والرُّجزَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "فَاهْجُرْ", transliteration: "fa-hjur", root: "ه ج ر", meaning: { en: "avoid", ur: "چھوڑ دو", ar: "فَاهجُر" }, pos: "V", posLabel: "V", grammarRole: "command" }
    ]
  },

  6: {
    ayahNumber: 6,
    arabic: "وَلَا تَمْنُن تَسْتَكْثِرُ",
    words: [
      { position: 1, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "And do not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "prohibition" },
      { position: 2, arabic: "تَمْنُن", transliteration: "tamnun", root: "م ن ن", meaning: { en: "confer favor", ur: "احسان جتاؤ", ar: "تَمنُن" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "تَسْتَكْثِرُ", transliteration: "tastakthiru", root: "ك ث ر", meaning: { en: "expecting more", ur: "زیادہ کی امید میں", ar: "تَستَكثِرُ" }, pos: "V", posLabel: "V", grammarRole: "circumstantial", form: "X" }
    ]
  },

  7: {
    ayahNumber: 7,
    arabic: "وَلِرَبِّكَ فَاصْبِرْ",
    words: [
      { position: 1, arabic: "وَلِرَبِّكَ", transliteration: "wa-li-rabbika", root: "ر ب ب", meaning: { en: "And for your Lord", ur: "اور اپنے رب کے لیے", ar: "ولِرَبِّكَ" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "purpose" },
      { position: 2, arabic: "فَاصْبِرْ", transliteration: "fa-ṣbir", root: "ص ب ر", meaning: { en: "be patient", ur: "صبر کرو", ar: "فَاصبِر" }, pos: "V", posLabel: "V", grammarRole: "command" }
    ]
  },

  8: {
    ayahNumber: 8,
    arabic: "فَإِذَا نُقِرَ فِي النَّاقُورِ",
    words: [
      { position: 1, arabic: "فَإِذَا", transliteration: "fa-ʾidhā", meaning: { en: "Then when", ur: "پس جب", ar: "فَإِذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "نُقِرَ", transliteration: "nuqira", root: "ن ق ر", meaning: { en: "is blown", ur: "پھونکا جائے", ar: "نُقِرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 3, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "فِي" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "النَّاقُورِ", transliteration: "l-nāqūri", root: "ن ق ر", meaning: { en: "the Horn", ur: "صور", ar: "النّاقُور" }, pos: "N", posLabel: "N", grammarRole: "locative" }
    ]
  },

  9: {
    ayahNumber: 9,
    arabic: "فَذَٰلِكَ يَوْمَئِذٍ يَوْمٌ عَسِيرٌ",
    words: [
      { position: 1, arabic: "فَذَٰلِكَ", transliteration: "fa-dhālika", meaning: { en: "Then that", ur: "تو وہ", ar: "فَذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 2, arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", meaning: { en: "that Day", ur: "اس دن", ar: "يَومَئِذٍ" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 3, arabic: "يَوْمٌ", transliteration: "yawmun", root: "ي و م", meaning: { en: "will be a Day", ur: "دن ہے", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "عَسِيرٌ", transliteration: "ʿasīrun", root: "ع س ر", meaning: { en: "difficult", ur: "مشکل", ar: "عَسِير" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  10: {
    ayahNumber: 10,
    arabic: "عَلَى الْكَافِرِينَ غَيْرُ يَسِيرٍ",
    words: [
      { position: 1, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "For", ur: "پر", ar: "عَلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "الْكَافِرِينَ", transliteration: "l-kāfirīna", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافروں", ar: "الكافِرِينَ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "غَيْرُ", transliteration: "ghayru", meaning: { en: "not", ur: "نہیں", ar: "غَير" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "يَسِيرٍ", transliteration: "yasīrin", root: "ي س ر", meaning: { en: "easy", ur: "آسان", ar: "يَسِير" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "genitive" }
    ]
  },

  11: {
    ayahNumber: 11,
    arabic: "ذَرْنِي وَمَنْ خَلَقْتُ وَحِيدًا",
    words: [
      { position: 1, arabic: "ذَرْنِي", transliteration: "dharnī", root: "و ذ ر", meaning: { en: "Leave Me", ur: "مجھے چھوڑ دو", ar: "ذَرنِي" }, pos: "V", posLabel: "V", grammarRole: "command" },
      { position: 2, arabic: "وَمَنْ", transliteration: "wa-man", meaning: { en: "with him whom", ur: "اور جس کو", ar: "ومَن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "object" },
      { position: 3, arabic: "خَلَقْتُ", transliteration: "khalaqtu", root: "خ ل ق", meaning: { en: "I created", ur: "میں نے پیدا کیا", ar: "خَلَقتُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 4, arabic: "وَحِيدًا", transliteration: "waḥīdan", root: "و ح د", meaning: { en: "alone", ur: "اکیلا", ar: "وَحِيداً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "circumstantial" }
    ]
  },

  12: {
    ayahNumber: 12,
    arabic: "وَجَعَلْتُ لَهُ مَالًا مَّمْدُودًا",
    words: [
      { position: 1, arabic: "وَجَعَلْتُ", transliteration: "wa-jaʿaltu", root: "ج ع ل", meaning: { en: "And granted", ur: "اور میں نے دیا", ar: "وجَعَلتُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "him", ur: "اسے", ar: "لَهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "indirect object" },
      { position: 3, arabic: "مَالًا", transliteration: "mālan", root: "م و ل", meaning: { en: "wealth", ur: "مال", ar: "مالاً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "مَّمْدُودًا", transliteration: "mamdūdan", root: "م د د", meaning: { en: "extensive", ur: "فراخ", ar: "مَمدُوداً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  13: {
    ayahNumber: 13,
    arabic: "وَبَنِينَ شُهُودًا",
    words: [
      { position: 1, arabic: "وَبَنِينَ", transliteration: "wa-banīna", root: "ب ن ي", meaning: { en: "And sons", ur: "اور بیٹے", ar: "وبَنِينَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "شُهُودًا", transliteration: "shuhūdan", root: "ش ه د", meaning: { en: "present", ur: "سامنے موجود", ar: "شُهُوداً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  14: {
    ayahNumber: 14,
    arabic: "وَمَهَّدتُّ لَهُ تَمْهِيدًا",
    words: [
      { position: 1, arabic: "وَمَهَّدتُّ", transliteration: "wa-mahhadtu", root: "م ه د", meaning: { en: "And made smooth", ur: "اور ہموار کر دیا", ar: "ومَهَّدتُّ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 2, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "لَهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "benefactive" },
      { position: 3, arabic: "تَمْهِيدًا", transliteration: "tamhīdan", root: "م ه د", meaning: { en: "smoothly", ur: "بالکل", ar: "تَمهِيداً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ]
  },

  15: {
    ayahNumber: 15,
    arabic: "ثُمَّ يَطْمَعُ أَنْ أَزِيدَ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "يَطْمَعُ", transliteration: "yaṭmaʿu", root: "ط م ع", meaning: { en: "he desires", ur: "وہ لالچ کرتا ہے", ar: "يَطمَعُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "أَنْ", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 4, arabic: "أَزِيدَ", transliteration: "ʾazīda", root: "ز ي د", meaning: { en: "I should increase", ur: "میں اور بڑھاؤں", ar: "أَزِيدَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive" }
    ]
  },

  16: {
    ayahNumber: 16,
    arabic: "كَلَّا ۖ إِنَّهُ كَانَ لِآيَاتِنَا عَنِيدًا",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 2, arabic: "إِنَّهُ", transliteration: "ʾinnahu", meaning: { en: "Indeed he", ur: "بیشک وہ", ar: "إِنَّهُ" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 3, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "لِآيَاتِنَا", transliteration: "li-ʾāyātinā", root: "أ ي ي", meaning: { en: "to Our signs", ur: "ہماری آیات کا", ar: "لِآياتِنا" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "object" },
      { position: 5, arabic: "عَنِيدًا", transliteration: "ʿanīdan", root: "ع ن د", meaning: { en: "obstinately opposed", ur: "دشمن", ar: "عَنِيداً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ]
  },

  17: {
    ayahNumber: 17,
    arabic: "سَأُرْهِقُهُ صَعُودًا",
    words: [
      { position: 1, arabic: "سَأُرْهِقُهُ", transliteration: "sa-ʾurhiquhu", root: "ر ه ق", meaning: { en: "I will exhaust him", ur: "میں اسے مشقت میں ڈالوں گا", ar: "سَأُرهِقُهُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 2, arabic: "صَعُودًا", transliteration: "ṣaʿūdan", root: "ص ع د", meaning: { en: "with an arduous climb", ur: "کھڑی چڑھائی", ar: "صَعُوداً" }, pos: "N", posLabel: "N", grammarRole: "adverbial" }
    ]
  },

  18: {
    ayahNumber: 18,
    arabic: "إِنَّهُ فَكَّرَ وَقَدَّرَ",
    words: [
      { position: 1, arabic: "إِنَّهُ", transliteration: "ʾinnahu", meaning: { en: "Indeed he", ur: "بیشک اس نے", ar: "إِنَّهُ" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "فَكَّرَ", transliteration: "fakkara", root: "ف ك ر", meaning: { en: "thought", ur: "سوچا", ar: "فَكَّرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 3, arabic: "وَقَدَّرَ", transliteration: "wa-qaddara", root: "ق د ر", meaning: { en: "and calculated", ur: "اور اندازہ لگایا", ar: "وقَدَّرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" }
    ]
  },

  19: {
    ayahNumber: 19,
    arabic: "فَقُتِلَ كَيْفَ قَدَّرَ",
    words: [
      { position: 1, arabic: "فَقُتِلَ", transliteration: "fa-qutila", root: "ق ت ل", meaning: { en: "So may he be destroyed", ur: "تو مارا گیا", ar: "فَقُتِلَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 2, arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "کیسا", ar: "كَيفَ" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "manner" },
      { position: 3, arabic: "قَدَّرَ", transliteration: "qaddara", root: "ق د ر", meaning: { en: "he calculated", ur: "اس نے اندازہ لگایا", ar: "قَدَّرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" }
    ]
  },

  20: {
    ayahNumber: 20,
    arabic: "ثُمَّ قُتِلَ كَيْفَ قَدَّرَ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "قُتِلَ", transliteration: "qutila", root: "ق ت ل", meaning: { en: "may he be destroyed", ur: "مارا گیا", ar: "قُتِلَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 3, arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "کیسا", ar: "كَيفَ" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "manner" },
      { position: 4, arabic: "قَدَّرَ", transliteration: "qaddara", meaning: { en: "he calculated", ur: "اس نے اندازہ لگایا", ar: "قَدَّرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" }
    ]
  },

  21: {
    ayahNumber: 21,
    arabic: "ثُمَّ نَظَرَ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "نَظَرَ", transliteration: "naẓara", root: "ن ظ ر", meaning: { en: "he looked", ur: "اس نے دیکھا", ar: "نَظَرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" }
    ]
  },

  22: {
    ayahNumber: 22,
    arabic: "ثُمَّ عَبَسَ وَبَسَرَ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "عَبَسَ", transliteration: "ʿabasa", root: "ع ب س", meaning: { en: "he frowned", ur: "منہ بنایا", ar: "عَبَسَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "وَبَسَرَ", transliteration: "wa-basara", root: "ب س ر", meaning: { en: "and scowled", ur: "اور ترش رو ہوا", ar: "وبَسَرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" }
    ]
  },

  23: {
    ayahNumber: 23,
    arabic: "ثُمَّ أَدْبَرَ وَاسْتَكْبَرَ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "أَدْبَرَ", transliteration: "ʾadbara", root: "د ب ر", meaning: { en: "he turned away", ur: "پیٹھ پھیری", ar: "أَدبَرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "وَاسْتَكْبَرَ", transliteration: "wa-stakbara", root: "ك ب ر", meaning: { en: "and was arrogant", ur: "اور تکبر کیا", ar: "واستَكبَرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "X" }
    ]
  },

  24: {
    ayahNumber: 24,
    arabic: "فَقَالَ إِنْ هَـٰذَا إِلَّا سِحْرٌ يُؤْثَرُ",
    words: [
      { position: 1, arabic: "فَقَالَ", transliteration: "fa-qāla", root: "ق و ل", meaning: { en: "Then he said", ur: "پھر کہا", ar: "فَقالَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "إِنْ", transliteration: "ʾin", meaning: { en: "Not", ur: "نہیں ہے", ar: "إِن" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 3, arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 4, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 5, arabic: "سِحْرٌ", transliteration: "siḥrun", root: "س ح ر", meaning: { en: "magic", ur: "جادو", ar: "سِحر" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 6, arabic: "يُؤْثَرُ", transliteration: "yuʾtharu", root: "أ ث ر", meaning: { en: "learned from others", ur: "سیکھا ہوا", ar: "يُؤثَرُ" }, pos: "V", posLabel: "V", grammarRole: "attribute", voice: "passive" }
    ]
  },

  25: {
    ayahNumber: 25,
    arabic: "إِنْ هَـٰذَا إِلَّا قَوْلُ الْبَشَرِ",
    words: [
      { position: 1, arabic: "إِنْ", transliteration: "ʾin", meaning: { en: "Not", ur: "نہیں ہے", ar: "إِن" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 2, arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 3, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 4, arabic: "قَوْلُ", transliteration: "qawlu", root: "ق و ل", meaning: { en: "the speech of", ur: "انسان کا کلام", ar: "قَول" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 5, arabic: "الْبَشَرِ", transliteration: "l-bashari", root: "ب ش ر", meaning: { en: "man", ur: "انسان", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "genitive" }
    ]
  },

  26: {
    ayahNumber: 26,
    arabic: "سَأُصْلِيهِ سَقَرَ",
    words: [
      { position: 1, arabic: "سَأُصْلِيهِ", transliteration: "sa-ʾuṣlīhi", root: "ص ل ي", meaning: { en: "I will burn him", ur: "میں اسے داخل کروں گا", ar: "سَأُصلِيهِ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 2, arabic: "سَقَرَ", transliteration: "saqara", meaning: { en: "in Saqar", ur: "جہنم میں", ar: "سَقَر" }, pos: "N", posLabel: "N", grammarRole: "locative", proper: true, hellName: true }
    ]
  },

  27: {
    ayahNumber: 27,
    arabic: "وَمَا أَدْرَاكَ مَا سَقَرُ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INTERROG", posLabel: "CONJ+INTERROG", grammarRole: "rhetorical" },
      { position: 2, arabic: "أَدْرَاكَ", transliteration: "ʾadrāka", root: "د ر ي", meaning: { en: "can make you know", ur: "تجھے سمجھائے", ar: "أَدراكَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا ہے", ar: "ما" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "subject" },
      { position: 4, arabic: "سَقَرُ", transliteration: "saqaru", meaning: { en: "Saqar", ur: "سقر", ar: "سَقَر" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ]
  },

  28: {
    ayahNumber: 28,
    arabic: "لَا تُبْقِي وَلَا تَذَرُ",
    words: [
      { position: 1, arabic: "لَا", transliteration: "lā", meaning: { en: "It does not", ur: "نہ", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 2, arabic: "تُبْقِي", transliteration: "tubqī", root: "ب ق ي", meaning: { en: "spare", ur: "چھوڑتی ہے", ar: "تُبقِي" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 4, arabic: "تَذَرُ", transliteration: "tadharu", root: "و ذ ر", meaning: { en: "leave", ur: "باقی رکھتی ہے", ar: "تَذَرُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" }
    ]
  },

  29: {
    ayahNumber: 29,
    arabic: "لَوَّاحَةٌ لِّلْبَشَرِ",
    words: [
      { position: 1, arabic: "لَوَّاحَةٌ", transliteration: "lawwāḥatun", root: "ل و ح", meaning: { en: "Scorching", ur: "جھلسا دینے والی", ar: "لَوّاحَة" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 2, arabic: "لِّلْبَشَرِ", transliteration: "lil-bashari", root: "ب ش ر", meaning: { en: "for mankind", ur: "انسانوں کو", ar: "لِلبَشَر" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "benefactive" }
    ]
  },

  30: {
    ayahNumber: 30,
    arabic: "عَلَيْهَا تِسْعَةَ عَشَرَ",
    words: [
      { position: 1, arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "Over it", ur: "اس پر", ar: "عَلَيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 2, arabic: "تِسْعَةَ", transliteration: "tisʿata", meaning: { en: "nineteen", ur: "انیس", ar: "تِسعَةَ" }, pos: "NUM", posLabel: "NUM", grammarRole: "subject" },
      { position: 3, arabic: "عَشَرَ", transliteration: "ʿashara", meaning: { en: "", ur: "", ar: "عَشَرَ" }, pos: "NUM", posLabel: "NUM", grammarRole: "subject", famous: "19 angels over Hell" }
    ]
  },

  31: {
    ayahNumber: 31,
    arabic: "وَمَا جَعَلْنَا أَصْحَابَ النَّارِ إِلَّا مَلَائِكَةً ۙ وَمَا جَعَلْنَا عِدَّتَهُمْ إِلَّا فِتْنَةً لِّلَّذِينَ كَفَرُوا",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And We have not made", ur: "اور ہم نے نہیں بنایا", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "جَعَلْنَا", transliteration: "jaʿalnā", root: "ج ع ل", meaning: { en: "made", ur: "بنایا", ar: "جَعَلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "أَصْحَابَ", transliteration: "ʾaṣḥāba", root: "ص ح ب", meaning: { en: "keepers of", ur: "داروغوں کو", ar: "أَصحابَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "النَّارِ", transliteration: "l-nāri", root: "ن و ر", meaning: { en: "the Fire", ur: "آگ کے", ar: "النّار" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 6, arabic: "مَلَائِكَةً", transliteration: "malāʾikatan", root: "م ل ك", meaning: { en: "angels", ur: "فرشتوں کے", ar: "مَلائِكَةً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 7, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and We have not made", ur: "اور ہم نے نہیں بنایا", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 8, arabic: "جَعَلْنَا", transliteration: "jaʿalnā", meaning: { en: "made", ur: "بنایا", ar: "جَعَلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 9, arabic: "عِدَّتَهُمْ", transliteration: "ʿiddatahum", root: "ع د د", meaning: { en: "their number", ur: "ان کی گنتی", ar: "عِدَّتَهُم" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 10, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 11, arabic: "فِتْنَةً", transliteration: "fitnatan", root: "ف ت ن", meaning: { en: "a trial", ur: "آزمائش", ar: "فِتنَةً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 12, arabic: "لِّلَّذِينَ", transliteration: "lil-ladhīna", meaning: { en: "for those who", ur: "ان کے لیے جو", ar: "لِلَّذِينَ" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "benefactive" },
      { position: 13, arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کافر ہوئے", ar: "كَفَرُوا" }, pos: "V", posLabel: "V", grammarRole: "predicate" }
    ]
  },

  32: {
    ayahNumber: 32,
    arabic: "كَلَّا وَالْقَمَرِ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 2, arabic: "وَالْقَمَرِ", transliteration: "wal-qamari", root: "ق م ر", meaning: { en: "By the moon", ur: "قسم ہے چاند کی", ar: "والقَمَر" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "oath" }
    ]
  },

  33: {
    ayahNumber: 33,
    arabic: "وَاللَّيْلِ إِذْ أَدْبَرَ",
    words: [
      { position: 1, arabic: "وَاللَّيْلِ", transliteration: "wal-layli", root: "ل ي ل", meaning: { en: "And the night", ur: "اور رات کی", ar: "واللَّيل" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "oath" },
      { position: 2, arabic: "إِذْ", transliteration: "ʾidh", meaning: { en: "when", ur: "جب", ar: "إِذ" }, pos: "TEMP", posLabel: "TEMP", grammarRole: "temporal" },
      { position: 3, arabic: "أَدْبَرَ", transliteration: "ʾadbara", root: "د ب ر", meaning: { en: "it departs", ur: "پیٹھ پھیرے", ar: "أَدبَرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" }
    ]
  },

  34: {
    ayahNumber: 34,
    arabic: "وَالصُّبْحِ إِذَا أَسْفَرَ",
    words: [
      { position: 1, arabic: "وَالصُّبْحِ", transliteration: "wal-ṣubḥi", root: "ص ب ح", meaning: { en: "And the dawn", ur: "اور صبح کی", ar: "والصُّبح" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "oath" },
      { position: 2, arabic: "إِذَا", transliteration: "ʾidhā", meaning: { en: "when", ur: "جب", ar: "إِذا" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 3, arabic: "أَسْفَرَ", transliteration: "ʾasfara", root: "س ف ر", meaning: { en: "it brightens", ur: "روشن ہو", ar: "أَسفَرَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" }
    ]
  },

  35: {
    ayahNumber: 35,
    arabic: "إِنَّهَا لَإِحْدَى الْكُبَرِ",
    words: [
      { position: 1, arabic: "إِنَّهَا", transliteration: "ʾinnahā", meaning: { en: "Indeed it", ur: "بیشک یہ", ar: "إِنَّها" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "لَإِحْدَى", transliteration: "la-ʾiḥdā", meaning: { en: "surely is one of", ur: "ایک ہے", ar: "لَإِحدى" }, pos: "PART+NUM", posLabel: "PART+NUM", grammarRole: "predicate" },
      { position: 3, arabic: "الْكُبَرِ", transliteration: "l-kubari", root: "ك ب ر", meaning: { en: "the greatest", ur: "بڑی چیزوں میں سے", ar: "الكُبَر" }, pos: "N", posLabel: "N", grammarRole: "genitive" }
    ]
  },

  36: {
    ayahNumber: 36,
    arabic: "نَذِيرًا لِّلْبَشَرِ",
    words: [
      { position: 1, arabic: "نَذِيرًا", transliteration: "nadhīran", root: "ن ذ ر", meaning: { en: "A warning", ur: "ڈرانے والی", ar: "نَذِيراً" }, pos: "N", posLabel: "N", grammarRole: "circumstantial" },
      { position: 2, arabic: "لِّلْبَشَرِ", transliteration: "lil-bashari", root: "ب ش ر", meaning: { en: "for mankind", ur: "انسانوں کے لیے", ar: "لِلبَشَر" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "benefactive" }
    ]
  },

  37: {
    ayahNumber: 37,
    arabic: "لِمَن شَاءَ مِنكُمْ أَن يَتَقَدَّمَ أَوْ يَتَأَخَّرَ",
    words: [
      { position: 1, arabic: "لِمَن", transliteration: "li-man", meaning: { en: "For whoever", ur: "تم میں سے جو", ar: "لِمَن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "purpose" },
      { position: 2, arabic: "شَاءَ", transliteration: "shāʾa", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "شاءَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "among you", ur: "تم میں سے", ar: "مِنكُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "partitive" },
      { position: 4, arabic: "أَن", transliteration: "ʾan", meaning: { en: "to", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 5, arabic: "يَتَقَدَّمَ", transliteration: "yataqaddama", root: "ق د م", meaning: { en: "advance", ur: "آگے بڑھے", ar: "يَتَقَدَّمَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive", form: "V" },
      { position: 6, arabic: "أَوْ", transliteration: "ʾaw", meaning: { en: "or", ur: "یا", ar: "أَو" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "disjunction" },
      { position: 7, arabic: "يَتَأَخَّرَ", transliteration: "yataʾakhkhara", root: "أ خ ر", meaning: { en: "stay behind", ur: "پیچھے رہے", ar: "يَتَأَخَّرَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive", form: "V" }
    ]
  },

  38: {
    ayahNumber: 38,
    arabic: "كُلُّ نَفْسٍ بِمَا كَسَبَتْ رَهِينَةٌ",
    words: [
      { position: 1, arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "Every", ur: "ہر", ar: "كُلُّ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "نَفْسٍ", transliteration: "nafsin", root: "ن ف س", meaning: { en: "soul", ur: "نفس", ar: "نَفس" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "بِمَا", transliteration: "bi-mā", meaning: { en: "for what", ur: "جو کچھ", ar: "بِما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "cause" },
      { position: 4, arabic: "كَسَبَتْ", transliteration: "kasabat", root: "ك س ب", meaning: { en: "it earned", ur: "اس نے کمایا", ar: "كَسَبَت" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 5, arabic: "رَهِينَةٌ", transliteration: "rahīnatun", root: "ر ه ن", meaning: { en: "is pledged", ur: "گروی ہے", ar: "رَهِينَة" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ]
  },

  39: {
    ayahNumber: 39,
    arabic: "إِلَّا أَصْحَابَ الْيَمِينِ",
    words: [
      { position: 1, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "Except", ur: "سوائے", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 2, arabic: "أَصْحَابَ", transliteration: "ʾaṣḥāba", root: "ص ح ب", meaning: { en: "companions of", ur: "دائیں ہاتھ والوں کے", ar: "أَصحابَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "الْيَمِينِ", transliteration: "l-yamīni", root: "ي م ن", meaning: { en: "the right", ur: "دائیں ہاتھ", ar: "اليَمِين" }, pos: "N", posLabel: "N", grammarRole: "genitive" }
    ]
  },

  40: {
    ayahNumber: 40,
    arabic: "فِي جَنَّاتٍ يَتَسَاءَلُونَ",
    words: [
      { position: 1, arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "فِي" }, pos: "PREP", posLabel: "PREP", grammarRole: "locative" },
      { position: 2, arabic: "جَنَّاتٍ", transliteration: "jannātin", root: "ج ن ن", meaning: { en: "gardens", ur: "جنتوں", ar: "جَنّات" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "يَتَسَاءَلُونَ", transliteration: "yatasāʾalūna", root: "س أ ل", meaning: { en: "they will question", ur: "وہ پوچھیں گے", ar: "يَتَساءَلُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "VI" }
    ]
  },

  41: {
    ayahNumber: 41,
    arabic: "عَنِ الْمُجْرِمِينَ",
    words: [
      { position: 1, arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "About", ur: "کے بارے میں", ar: "عَن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "الْمُجْرِمِينَ", transliteration: "l-mujrimīna", root: "ج ر م", meaning: { en: "the criminals", ur: "مجرموں", ar: "المُجرِمِينَ" }, pos: "N", posLabel: "N", grammarRole: "genitive", form: "IV" }
    ]
  },

  42: {
    ayahNumber: 42,
    arabic: "مَا سَلَكَكُمْ فِي سَقَرَ",
    words: [
      { position: 1, arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا چیز", ar: "ما" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "question" },
      { position: 2, arabic: "سَلَكَكُمْ", transliteration: "salakakum", root: "س ل ك", meaning: { en: "put you", ur: "تمہیں داخل کیا", ar: "سَلَكَكُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں", ar: "فِي" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "سَقَرَ", transliteration: "saqara", meaning: { en: "Saqar", ur: "سقر", ar: "سَقَر" }, pos: "N", posLabel: "N", grammarRole: "locative", proper: true }
    ]
  },

  43: {
    ayahNumber: 43,
    arabic: "قَالُوا لَمْ نَكُ مِنَ الْمُصَلِّينَ",
    words: [
      { position: 1, arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They will say", ur: "وہ کہیں گے", ar: "قالُوا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لَم" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 3, arabic: "نَكُ", transliteration: "naku", root: "ك و ن", meaning: { en: "we were", ur: "ہم تھے", ar: "نَكُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "مِنَ", transliteration: "mina", meaning: { en: "among", ur: "میں سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "الْمُصَلِّينَ", transliteration: "l-muṣallīna", root: "ص ل ي", meaning: { en: "those who prayed", ur: "نماز پڑھنے والوں", ar: "المُصَلِّينَ" }, pos: "N", posLabel: "N", grammarRole: "genitive", form: "II", reason1: true }
    ]
  },

  44: {
    ayahNumber: 44,
    arabic: "وَلَمْ نَكُ نُطْعِمُ الْمِسْكِينَ",
    words: [
      { position: 1, arabic: "وَلَمْ", transliteration: "wa-lam", meaning: { en: "And not", ur: "اور نہیں", ar: "ولَم" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "نَكُ", transliteration: "naku", root: "ك و ن", meaning: { en: "we were", ur: "ہم", ar: "نَكُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "نُطْعِمُ", transliteration: "nuṭʿimu", root: "ط ع م", meaning: { en: "feeding", ur: "کھلاتے تھے", ar: "نُطعِمُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 4, arabic: "الْمِسْكِينَ", transliteration: "l-miskīna", root: "س ك ن", meaning: { en: "the needy", ur: "مسکینوں کو", ar: "المِسكِين" }, pos: "N", posLabel: "N", grammarRole: "object", reason2: true }
    ]
  },

  45: {
    ayahNumber: 45,
    arabic: "وَكُنَّا نَخُوضُ مَعَ الْخَائِضِينَ",
    words: [
      { position: 1, arabic: "وَكُنَّا", transliteration: "wa-kunnā", root: "ك و ن", meaning: { en: "And we used to", ur: "اور ہم", ar: "وكُنّا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "نَخُوضُ", transliteration: "nakhūḍu", root: "خ و ض", meaning: { en: "engage in vain talk", ur: "بیہودہ باتیں کرتے تھے", ar: "نَخُوضُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "مَعَ", transliteration: "maʿa", meaning: { en: "with", ur: "ساتھ", ar: "مَعَ" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "الْخَائِضِينَ", transliteration: "l-khāʾiḍīna", root: "خ و ض", meaning: { en: "those who engaged", ur: "بیہودہ باتیں کرنے والوں", ar: "الخائِضِينَ" }, pos: "N", posLabel: "N", grammarRole: "genitive", reason3: true }
    ]
  },

  46: {
    ayahNumber: 46,
    arabic: "وَكُنَّا نُكَذِّبُ بِيَوْمِ الدِّينِ",
    words: [
      { position: 1, arabic: "وَكُنَّا", transliteration: "wa-kunnā", root: "ك و ن", meaning: { en: "And we used to", ur: "اور ہم", ar: "وكُنّا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "نُكَذِّبُ", transliteration: "nukadhdhibu", root: "ك ذ ب", meaning: { en: "deny", ur: "جھٹلاتے تھے", ar: "نُكَذِّبُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 3, arabic: "بِيَوْمِ", transliteration: "bi-yawmi", root: "ي و م", meaning: { en: "the Day of", ur: "جزا کے دن کو", ar: "بِيَوم" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "object" },
      { position: 4, arabic: "الدِّينِ", transliteration: "l-dīni", root: "د ي ن", meaning: { en: "Judgment", ur: "جزا", ar: "الدِّين" }, pos: "N", posLabel: "N", grammarRole: "genitive", reason4: true }
    ]
  },

  47: {
    ayahNumber: 47,
    arabic: "حَتَّىٰ أَتَانَا الْيَقِينُ",
    words: [
      { position: 1, arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "Until", ur: "یہاں تک کہ", ar: "حَتّى" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "temporal" },
      { position: 2, arabic: "أَتَانَا", transliteration: "ʾatānā", root: "أ ت ي", meaning: { en: "came to us", ur: "ہمیں آ گئی", ar: "أَتانا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "الْيَقِينُ", transliteration: "l-yaqīnu", root: "ي ق ن", meaning: { en: "the certainty", ur: "یقین (موت)", ar: "اليَقِين" }, pos: "N", posLabel: "N", grammarRole: "subject", death: true }
    ]
  },

  48: {
    ayahNumber: 48,
    arabic: "فَمَا تَنفَعُهُمْ شَفَاعَةُ الشَّافِعِينَ",
    words: [
      { position: 1, arabic: "فَمَا", transliteration: "fa-mā", meaning: { en: "So not", ur: "پس کچھ نہیں", ar: "فَما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "تَنفَعُهُمْ", transliteration: "tanfaʿuhum", root: "ن ف ع", meaning: { en: "will benefit them", ur: "فائدہ دے گی انہیں", ar: "تَنفَعُهُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "شَفَاعَةُ", transliteration: "shafāʿatu", root: "ش ف ع", meaning: { en: "intercession of", ur: "سفارش", ar: "شَفاعَة" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "الشَّافِعِينَ", transliteration: "l-shāfiʿīna", root: "ش ف ع", meaning: { en: "the intercessors", ur: "سفارش کرنے والوں کی", ar: "الشّافِعِينَ" }, pos: "N", posLabel: "N", grammarRole: "genitive" }
    ]
  },

  49: {
    ayahNumber: 49,
    arabic: "فَمَا لَهُمْ عَنِ التَّذْكِرَةِ مُعْرِضِينَ",
    words: [
      { position: 1, arabic: "فَمَا", transliteration: "fa-mā", meaning: { en: "So what", ur: "تو کیا ہے", ar: "فَما" }, pos: "CONJ+INTERROG", posLabel: "CONJ+INTERROG", grammarRole: "rhetorical" },
      { position: 2, arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "is with them", ur: "انہیں", ar: "لَهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "possessive" },
      { position: 3, arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے", ar: "عَن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "التَّذْكِرَةِ", transliteration: "l-tadhkirati", root: "ذ ك ر", meaning: { en: "the reminder", ur: "نصیحت", ar: "التَّذكِرَة" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "مُعْرِضِينَ", transliteration: "muʿriḍīna", root: "ع ر ض", meaning: { en: "they turn away", ur: "منہ پھیرنے والے", ar: "مُعرِضِينَ" }, pos: "N", posLabel: "N", grammarRole: "predicate", form: "IV" }
    ]
  },

  50: {
    ayahNumber: 50,
    arabic: "كَأَنَّهُمْ حُمُرٌ مُّسْتَنفِرَةٌ",
    words: [
      { position: 1, arabic: "كَأَنَّهُمْ", transliteration: "kaʾannahum", meaning: { en: "As if they were", ur: "گویا وہ ہیں", ar: "كَأَنَّهُم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "comparison" },
      { position: 2, arabic: "حُمُرٌ", transliteration: "ḥumurun", root: "ح م ر", meaning: { en: "donkeys", ur: "گدھے", ar: "حُمُر" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 3, arabic: "مُّسْتَنفِرَةٌ", transliteration: "mustanfiratun", root: "ن ف ر", meaning: { en: "fleeing", ur: "بھڑکے ہوئے", ar: "مُستَنفِرَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", form: "X" }
    ]
  },

  51: {
    ayahNumber: 51,
    arabic: "فَرَّتْ مِن قَسْوَرَةٍ",
    words: [
      { position: 1, arabic: "فَرَّتْ", transliteration: "farrat", root: "ف ر ر", meaning: { en: "Fleeing", ur: "بھاگتے ہوئے", ar: "فَرَّت" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "قَسْوَرَةٍ", transliteration: "qaswaratin", root: "ق س ر", meaning: { en: "a lion", ur: "شیر", ar: "قَسوَرَة" }, pos: "N", posLabel: "N", grammarRole: "genitive" }
    ]
  },

  52: {
    ayahNumber: 52,
    arabic: "بَلْ يُرِيدُ كُلُّ امْرِئٍ مِّنْهُمْ أَن يُؤْتَىٰ صُحُفًا مُّنَشَّرَةً",
    words: [
      { position: 1, arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بَل" }, pos: "PART", posLabel: "PART", grammarRole: "adversative" },
      { position: 2, arabic: "يُرِيدُ", transliteration: "yurīdu", root: "ر و د", meaning: { en: "desires", ur: "چاہتا ہے", ar: "يُرِيدُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "each", ur: "ہر", ar: "كُلُّ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "امْرِئٍ", transliteration: "imriʾin", root: "م ر أ", meaning: { en: "person", ur: "آدمی", ar: "امرِئ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "مِّنْهُمْ", transliteration: "minhum", meaning: { en: "of them", ur: "ان میں سے", ar: "مِنهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "partitive" },
      { position: 6, arabic: "أَن", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 7, arabic: "يُؤْتَىٰ", transliteration: "yuʾtā", root: "أ ت ي", meaning: { en: "be given", ur: "دی جائیں", ar: "يُؤتى" }, pos: "V", posLabel: "V", grammarRole: "subjunctive", voice: "passive" },
      { position: 8, arabic: "صُحُفًا", transliteration: "ṣuḥufan", root: "ص ح ف", meaning: { en: "scriptures", ur: "صحیفے", ar: "صُحُفاً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 9, arabic: "مُّنَشَّرَةً", transliteration: "munashsharatan", root: "ن ش ر", meaning: { en: "spread open", ur: "کھلے ہوئے", ar: "مُنَشَّرَةً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", form: "II" }
    ]
  },

  53: {
    ayahNumber: 53,
    arabic: "كَلَّا ۖ بَل لَّا يَخَافُونَ الْآخِرَةَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 2, arabic: "بَل", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بَل" }, pos: "PART", posLabel: "PART", grammarRole: "adversative" },
      { position: 3, arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 4, arabic: "يَخَافُونَ", transliteration: "yakhāfūna", root: "خ و ف", meaning: { en: "they fear", ur: "ڈرتے", ar: "يَخافُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 5, arabic: "الْآخِرَةَ", transliteration: "l-ʾākhirata", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "آخرت سے", ar: "الآخِرَة" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ]
  },

  54: {
    ayahNumber: 54,
    arabic: "كَلَّا إِنَّهُ تَذْكِرَةٌ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "كَلّا" }, pos: "PART", posLabel: "PART", grammarRole: "deterrent" },
      { position: 2, arabic: "إِنَّهُ", transliteration: "ʾinnahu", meaning: { en: "Indeed it", ur: "بیشک یہ", ar: "إِنَّهُ" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 3, arabic: "تَذْكِرَةٌ", transliteration: "tadhkiratun", root: "ذ ك ر", meaning: { en: "is a reminder", ur: "نصیحت ہے", ar: "تَذكِرَة" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ]
  },

  55: {
    ayahNumber: 55,
    arabic: "فَمَن شَاءَ ذَكَرَهُ",
    words: [
      { position: 1, arabic: "فَمَن", transliteration: "fa-man", meaning: { en: "So whoever", ur: "پس جو", ar: "فَمَن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "conditional" },
      { position: 2, arabic: "شَاءَ", transliteration: "shāʾa", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "شاءَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "ذَكَرَهُ", transliteration: "dhakarahu", root: "ذ ك ر", meaning: { en: "will remember it", ur: "اسے یاد کرے", ar: "ذَكَرَهُ" }, pos: "V", posLabel: "V", grammarRole: "apodosis" }
    ]
  },

  56: {
    ayahNumber: 56,
    arabic: "وَمَا يَذْكُرُونَ إِلَّا أَن يَشَاءَ اللَّهُ ۚ هُوَ أَهْلُ التَّقْوَىٰ وَأَهْلُ الْمَغْفِرَةِ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "يَذْكُرُونَ", transliteration: "yadhkurūna", root: "ذ ك ر", meaning: { en: "will they remember", ur: "یاد کریں گے", ar: "يَذكُرُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "مگر", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 4, arabic: "أَن", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 5, arabic: "يَشَاءَ", transliteration: "yashāʾa", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "يَشاءَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive" },
      { position: 6, arabic: "اللَّهُ", transliteration: "l-lāhu", meaning: { en: "Allah", ur: "اللہ", ar: "اللَّه" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 7, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هُوَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 8, arabic: "أَهْلُ", transliteration: "ʾahlu", root: "أ ه ل", meaning: { en: "is worthy of", ur: "لائق ہے", ar: "أَهل" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 9, arabic: "التَّقْوَىٰ", transliteration: "l-taqwā", root: "و ق ي", meaning: { en: "being feared", ur: "ڈر کے", ar: "التَّقوى" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 10, arabic: "وَأَهْلُ", transliteration: "wa-ʾahlu", meaning: { en: "and worthy of", ur: "اور لائق ہے", ar: "وأَهل" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 11, arabic: "الْمَغْفِرَةِ", transliteration: "l-maghfirati", root: "غ ف ر", meaning: { en: "forgiving", ur: "معافی کے", ar: "المَغفِرَة" }, pos: "N", posLabel: "N", grammarRole: "genitive", divine: true }
    ]
  }
};

export default TREEBANK_DATA;
