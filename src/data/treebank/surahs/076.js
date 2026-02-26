/**
 * Surah Al-Insan (76) - Man / Time
 * Also known as Ad-Dahr
 * Quranic Arabic Treebank - Word-by-Word Morphological Analysis
 * 31 Ayahs - Madani (some say Makki)
 */

export const TREEBANK_DATA = {
  surahId: 76,
  surahName: "Al-Insan",
  surahNameArabic: "الإنسان",
  totalAyahs: 31,
  revelationType: "Madani",
  theme: "Human creation, free will, Paradise descriptions, patience and gratitude",

  1: {
    ayahNumber: 1,
    arabic: "هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ لَمْ يَكُن شَيْئًا مَّذْكُورًا",
    words: [
      { position: 1, arabic: "هَلْ", transliteration: "hal", meaning: { en: "Has there", ur: "کیا", ar: "هَل" }, pos: "INTERROG", posLabel: "INTERROG", grammarRole: "question" },
      { position: 2, arabic: "أَتَىٰ", transliteration: "ʾatā", root: "أ ت ي", meaning: { en: "come", ur: "آیا", ar: "أَتى" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "عَلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "الْإِنسَانِ", transliteration: "l-ʾinsāni", root: "أ ن س", meaning: { en: "man", ur: "انسان", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "object", surahTitle: true },
      { position: 5, arabic: "حِينٌ", transliteration: "ḥīnun", root: "ح ي ن", meaning: { en: "a period", ur: "ایک وقت", ar: "حِين" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 6, arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 7, arabic: "الدَّهْرِ", transliteration: "l-dahri", root: "د ه ر", meaning: { en: "time", ur: "زمانے", ar: "الدَّهر" }, pos: "N", posLabel: "N", grammarRole: "genitive", altName: "Ad-Dahr" },
      { position: 8, arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لَم" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 9, arabic: "يَكُن", transliteration: "yakun", root: "ك و ن", meaning: { en: "he was", ur: "تھا", ar: "يَكُن" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 10, arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "a thing", ur: "کوئی چیز", ar: "شَيئاً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 11, arabic: "مَّذْكُورًا", transliteration: "madhkūran", root: "ذ ك ر", meaning: { en: "mentioned", ur: "قابل ذکر", ar: "مَذكُوراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 2, to: 5, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 10, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'جار + مجرور' },
      { from: 8, to: 9, label: 'نفی + فعل' },
      { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "إِنَّا خَلَقْنَا الْإِنسَانَ مِن نُّطْفَةٍ أَمْشَاجٍ نَّبْتَلِيهِ فَجَعَلْنَاهُ سَمِيعًا بَصِيرًا",
    words: [
      { position: 1, arabic: "إِنَّا", transliteration: "ʾinnā", meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إِنّا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "خَلَقْنَا", transliteration: "khalaqnā", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا", ar: "خَلَقنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "الْإِنسَانَ", transliteration: "l-ʾinsāna", meaning: { en: "man", ur: "انسان کو", ar: "الإِنسان" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "نُّطْفَةٍ", transliteration: "nuṭfatin", root: "ن ط ف", meaning: { en: "a drop", ur: "نطفے", ar: "نُطفَة" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 6, arabic: "أَمْشَاجٍ", transliteration: "ʾamshājin", root: "م ش ج", meaning: { en: "mixed", ur: "ملے جلے", ar: "أَمشاج" }, pos: "N", posLabel: "N", grammarRole: "attribute", scientific: "mixed sperm+egg" },
      { position: 7, arabic: "نَّبْتَلِيهِ", transliteration: "nabtalīhi", root: "ب ل و", meaning: { en: "We test him", ur: "ہم آزماتے ہیں", ar: "نَبتَلِيهِ" }, pos: "V", posLabel: "V", grammarRole: "purpose", form: "VIII" },
      { position: 8, arabic: "فَجَعَلْنَاهُ", transliteration: "fa-jaʿalnāhu", root: "ج ع ل", meaning: { en: "so We made him", ur: "پس ہم نے بنایا", ar: "فَجَعَلناهُ" }, pos: "V", posLabel: "V", grammarRole: "consequence" },
      { position: 9, arabic: "سَمِيعًا", transliteration: "samīʿan", root: "س م ع", meaning: { en: "hearing", ur: "سننے والا", ar: "سَمِيعاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "complement" },
      { position: 10, arabic: "بَصِيرًا", transliteration: "baṣīran", root: "ب ص ر", meaning: { en: "seeing", ur: "دیکھنے والا", ar: "بَصِيراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "complement" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "إِنَّا هَدَيْنَاهُ السَّبِيلَ إِمَّا شَاكِرًا وَإِمَّا كَفُورًا",
    words: [
      { position: 1, arabic: "إِنَّا", transliteration: "ʾinnā", meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إِنّا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "هَدَيْنَاهُ", transliteration: "hadaynāhu", root: "ه د ي", meaning: { en: "guided him", ur: "اسے راستہ دکھایا", ar: "هَدَيناهُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "السَّبِيلَ", transliteration: "l-sabīla", root: "س ب ل", meaning: { en: "the way", ur: "راستہ", ar: "السَّبِيل" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "إِمَّا", transliteration: "ʾimmā", meaning: { en: "either", ur: "یا", ar: "إِمّا" }, pos: "PART", posLabel: "PART", grammarRole: "alternative" },
      { position: 5, arabic: "شَاكِرًا", transliteration: "shākiran", root: "ش ك ر", meaning: { en: "grateful", ur: "شکر گزار", ar: "شاكِراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "circumstantial" },
      { position: 6, arabic: "وَإِمَّا", transliteration: "wa-ʾimmā", meaning: { en: "or", ur: "یا", ar: "وإِمّا" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammarRole: "alternative" },
      { position: 7, arabic: "كَفُورًا", transliteration: "kafūran", root: "ك ف ر", meaning: { en: "ungrateful", ur: "ناشکرا", ar: "كَفُوراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "circumstantial", freeWill: true }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 2, to: 5, label: 'حال' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "إِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَلَاسِلَ وَأَغْلَالًا وَسَعِيرًا",
    words: [
      { position: 1, arabic: "إِنَّا", transliteration: "ʾinnā", meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إِنّا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "أَعْتَدْنَا", transliteration: "ʾaʿtadnā", root: "ع ت د", meaning: { en: "have prepared", ur: "تیار کر رکھی ہیں", ar: "أَعتَدنا" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "لِلْكَافِرِينَ", transliteration: "lil-kāfirīna", root: "ك ف ر", meaning: { en: "for the disbelievers", ur: "کافروں کے لیے", ar: "لِلكافِرِينَ" }, pos: "N", posLabel: "N", grammarRole: "benefactive" },
      { position: 4, arabic: "سَلَاسِلَ", transliteration: "salāsila", root: "س ل س ل", meaning: { en: "chains", ur: "زنجیریں", ar: "سَلاسِل" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "وَأَغْلَالًا", transliteration: "wa-ʾaghlālan", root: "غ ل ل", meaning: { en: "and shackles", ur: "اور طوق", ar: "وأَغلالاً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 6, arabic: "وَسَعِيرًا", transliteration: "wa-saʿīran", root: "س ع ر", meaning: { en: "and a blaze", ur: "اور دہکتی آگ", ar: "وسَعِيراً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 2, to: 5, label: 'فعل + مفعول به' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "إِنَّ الْأَبْرَارَ يَشْرَبُونَ مِن كَأْسٍ كَانَ مِزَاجُهَا كَافُورًا",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "الْأَبْرَارَ", transliteration: "l-ʾabrāra", root: "ب ر ر", meaning: { en: "the righteous", ur: "نیک لوگ", ar: "الأَبرار" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "يَشْرَبُونَ", transliteration: "yashrabūna", root: "ش ر ب", meaning: { en: "will drink", ur: "پئیں گے", ar: "يَشرَبُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 4, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "كَأْسٍ", transliteration: "kaʾsin", root: "ك أ س", meaning: { en: "a cup", ur: "جام", ar: "كَأس" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 6, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 7, arabic: "مِزَاجُهَا", transliteration: "mizājuhā", root: "م ز ج", meaning: { en: "its mixture", ur: "اس کی آمیزش", ar: "مِزاجُها" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 8, arabic: "كَافُورًا", transliteration: "kāfūran", root: "ك ف ر", meaning: { en: "camphor", ur: "کافور", ar: "كافُوراً" }, pos: "N", posLabel: "N", grammarRole: "predicate", paradiseDrink: true }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 8, label: 'مبتدأ + خبر' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "عَيْنًا يَشْرَبُ بِهَا عِبَادُ اللَّهِ يُفَجِّرُونَهَا تَفْجِيرًا",
    words: [
      { position: 1, arabic: "عَيْنًا", transliteration: "ʿaynan", root: "ع ي ن", meaning: { en: "A spring", ur: "چشمہ", ar: "عَيناً" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "يَشْرَبُ", transliteration: "yashrabu", root: "ش ر ب", meaning: { en: "drink", ur: "پیتے ہیں", ar: "يَشرَبُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "بِهَا", transliteration: "bihā", meaning: { en: "from it", ur: "اس سے", ar: "بِها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "source" },
      { position: 4, arabic: "عِبَادُ", transliteration: "ʿibādu", root: "ع ب د", meaning: { en: "servants of", ur: "بندے", ar: "عِباد" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 5, arabic: "اللَّهِ", transliteration: "l-lāhi", meaning: { en: "Allah", ur: "اللہ کے", ar: "اللَّه" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 6, arabic: "يُفَجِّرُونَهَا", transliteration: "yufajjirūnahā", root: "ف ج ر", meaning: { en: "making it gush forth", ur: "جہاں چاہیں بہاتے ہیں", ar: "يُفَجِّرُونَها" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 7, arabic: "تَفْجِيرًا", transliteration: "tafjīran", root: "ف ج ر", meaning: { en: "abundantly", ur: "خوب", ar: "تَفجِيراً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + فاعل' },
      { from: 4, to: 6, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "يُوفُونَ بِالنَّذْرِ وَيَخَافُونَ يَوْمًا كَانَ شَرُّهُ مُسْتَطِيرًا",
    words: [
      { position: 1, arabic: "يُوفُونَ", transliteration: "yūfūna", root: "و ف ي", meaning: { en: "They fulfill", ur: "وہ پورا کرتے ہیں", ar: "يُوفُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 2, arabic: "بِالنَّذْرِ", transliteration: "bil-nadhri", root: "ن ذ ر", meaning: { en: "their vows", ur: "نذر کو", ar: "بِالنَّذر" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "وَيَخَافُونَ", transliteration: "wa-yakhāfūna", root: "خ و ف", meaning: { en: "and they fear", ur: "اور ڈرتے ہیں", ar: "ويَخافُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 4, arabic: "يَوْمًا", transliteration: "yawman", root: "ي و م", meaning: { en: "a Day", ur: "ایک دن سے", ar: "يَوماً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 6, arabic: "شَرُّهُ", transliteration: "sharruhu", root: "ش ر ر", meaning: { en: "its evil", ur: "اس کا شر", ar: "شَرُّهُ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 7, arabic: "مُسْتَطِيرًا", transliteration: "mustaṭīran", root: "ط ي ر", meaning: { en: "widespread", ur: "پھیلا ہوا", ar: "مُستَطِيراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", form: "X" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 6, label: 'فعل + فاعل' },
      { from: 5, to: 6, label: 'فعل + فاعل' },
      { from: 6, to: 7, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا",
    words: [
      { position: 1, arabic: "وَيُطْعِمُونَ", transliteration: "wa-yuṭʿimūna", root: "ط ع م", meaning: { en: "And they give food", ur: "اور وہ کھلاتے ہیں", ar: "ويُطعِمُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 2, arabic: "الطَّعَامَ", transliteration: "l-ṭaʿāma", root: "ط ع م", meaning: { en: "food", ur: "کھانا", ar: "الطَّعام" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "in spite of", ur: "باوجود", ar: "عَلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "concessive" },
      { position: 4, arabic: "حُبِّهِ", transliteration: "ḥubbihi", root: "ح ب ب", meaning: { en: "their love of it", ur: "اس کی محبت کے", ar: "حُبِّهِ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "مِسْكِينًا", transliteration: "miskīnan", root: "س ك ن", meaning: { en: "to the needy", ur: "مسکین کو", ar: "مِسكِيناً" }, pos: "N", posLabel: "N", grammarRole: "indirect object" },
      { position: 6, arabic: "وَيَتِيمًا", transliteration: "wa-yatīman", root: "ي ت م", meaning: { en: "and orphan", ur: "اور یتیم کو", ar: "ويَتِيماً" }, pos: "N", posLabel: "N", grammarRole: "indirect object" },
      { position: 7, arabic: "وَأَسِيرًا", transliteration: "wa-ʾasīran", root: "أ س ر", meaning: { en: "and captive", ur: "اور قیدی کو", ar: "وأَسِيراً" }, pos: "N", posLabel: "N", grammarRole: "indirect object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا",
    words: [
      { position: 1, arabic: "إِنَّمَا", transliteration: "ʾinnamā", meaning: { en: "We only", ur: "ہم صرف", ar: "إِنَّما" }, pos: "PART", posLabel: "PART", grammarRole: "restriction" },
      { position: 2, arabic: "نُطْعِمُكُمْ", transliteration: "nuṭʿimukum", root: "ط ع م", meaning: { en: "feed you", ur: "تمہیں کھلاتے ہیں", ar: "نُطعِمُكُم" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 3, arabic: "لِوَجْهِ", transliteration: "li-wajhi", root: "و ج ه", meaning: { en: "for the Face of", ur: "کی رضا کے لیے", ar: "لِوَجهِ" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "purpose" },
      { position: 4, arabic: "اللَّهِ", transliteration: "l-lāhi", meaning: { en: "Allah", ur: "اللہ", ar: "اللَّه" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 6, arabic: "نُرِيدُ", transliteration: "nurīdu", root: "ر و د", meaning: { en: "we desire", ur: "ہم چاہتے", ar: "نُرِيدُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 7, arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "from you", ur: "تم سے", ar: "مِنكُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "source" },
      { position: 8, arabic: "جَزَاءً", transliteration: "jazāʾan", root: "ج ز ي", meaning: { en: "reward", ur: "بدلہ", ar: "جَزاءً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 9, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 10, arabic: "شُكُورًا", transliteration: "shukūran", root: "ش ك ر", meaning: { en: "thanks", ur: "شکریہ", ar: "شُكُوراً" }, pos: "N", posLabel: "N", grammarRole: "object", ikhlas: true }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 8, label: 'فعل + مفعول به' }
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "إِنَّا نَخَافُ مِن رَّبِّنَا يَوْمًا عَبُوسًا قَمْطَرِيرًا",
    words: [
      { position: 1, arabic: "إِنَّا", transliteration: "ʾinnā", meaning: { en: "Indeed we", ur: "بیشک ہم", ar: "إِنّا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "نَخَافُ", transliteration: "nakhāfu", root: "خ و ف", meaning: { en: "fear", ur: "ڈرتے ہیں", ar: "نَخافُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "رَّبِّنَا", transliteration: "rabbinā", root: "ر ب ب", meaning: { en: "our Lord", ur: "ہمارے رب", ar: "رَبِّنا" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "يَوْمًا", transliteration: "yawman", root: "ي و م", meaning: { en: "a Day", ur: "ایک دن", ar: "يَوماً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 6, arabic: "عَبُوسًا", transliteration: "ʿabūsan", root: "ع ب س", meaning: { en: "harsh", ur: "ترش رو", ar: "عَبُوساً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 7, arabic: "قَمْطَرِيرًا", transliteration: "qamṭarīran", root: "ق م ط ر", meaning: { en: "distressful", ur: "بہت سخت", ar: "قَمطَرِيراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "فَوَقَاهُمُ اللَّهُ شَرَّ ذَٰلِكَ الْيَوْمِ وَلَقَّاهُمْ نَضْرَةً وَسُرُورًا",
    words: [
      { position: 1, arabic: "فَوَقَاهُمُ", transliteration: "fa-waqāhumu", root: "و ق ي", meaning: { en: "So Allah protected them", ur: "پس اللہ نے انہیں بچایا", ar: "فَوَقاهُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "اللَّهُ", transliteration: "l-lāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "اللَّه" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "شَرَّ", transliteration: "sharra", root: "ش ر ر", meaning: { en: "from evil of", ur: "شر سے", ar: "شَرَّ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس", ar: "ذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "demonstrative" },
      { position: 5, arabic: "الْيَوْمِ", transliteration: "l-yawmi", root: "ي و م", meaning: { en: "Day", ur: "دن کے", ar: "اليَوم" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 6, arabic: "وَلَقَّاهُمْ", transliteration: "wa-laqqāhum", root: "ل ق ي", meaning: { en: "and granted them", ur: "اور عطا کی", ar: "ولَقّاهُم" }, pos: "V", posLabel: "V", grammarRole: "consequence", form: "II" },
      { position: 7, arabic: "نَضْرَةً", transliteration: "naḍratan", root: "ن ض ر", meaning: { en: "radiance", ur: "تازگی", ar: "نَضرَةً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 8, arabic: "وَسُرُورًا", transliteration: "wa-surūran", root: "س ر ر", meaning: { en: "and joy", ur: "اور خوشی", ar: "وسُرُوراً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 6, to: 8, label: 'فعل + مفعول به' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "وَجَزَاهُم بِمَا صَبَرُوا جَنَّةً وَحَرِيرًا",
    words: [
      { position: 1, arabic: "وَجَزَاهُم", transliteration: "wa-jazāhum", root: "ج ز ي", meaning: { en: "And rewarded them", ur: "اور بدلہ دیا", ar: "وجَزاهُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "بِمَا", transliteration: "bi-mā", meaning: { en: "for", ur: "اس کا", ar: "بِما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "cause" },
      { position: 3, arabic: "صَبَرُوا", transliteration: "ṣabarū", root: "ص ب ر", meaning: { en: "they were patient", ur: "انہوں نے صبر کیا", ar: "صَبَرُوا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 4, arabic: "جَنَّةً", transliteration: "jannatan", root: "ج ن ن", meaning: { en: "Paradise", ur: "جنت", ar: "جَنَّةً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "وَحَرِيرًا", transliteration: "wa-ḥarīran", root: "ح ر ر", meaning: { en: "and silk", ur: "اور ریشم", ar: "وحَرِيراً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 5, label: 'فعل + مفعول به' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "مُّتَّكِئِينَ فِيهَا عَلَى الْأَرَائِكِ ۖ لَا يَرَوْنَ فِيهَا شَمْسًا وَلَا زَمْهَرِيرًا",
    words: [
      { position: 1, arabic: "مُّتَّكِئِينَ", transliteration: "muttakiʾīna", root: "و ك أ", meaning: { en: "Reclining", ur: "تکیے لگائے", ar: "مُتَّكِئِينَ" }, pos: "N", posLabel: "N", grammarRole: "circumstantial", form: "VIII" },
      { position: 2, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فِيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 3, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "عَلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "الْأَرَائِكِ", transliteration: "l-ʾarāʾiki", root: "أ ر ك", meaning: { en: "couches", ur: "مسندوں", ar: "الأَرائِك" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 5, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 6, arabic: "يَرَوْنَ", transliteration: "yarawna", root: "ر أ ي", meaning: { en: "they will see", ur: "دیکھیں گے", ar: "يَرَونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 7, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "وہاں", ar: "فِيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 8, arabic: "شَمْسًا", transliteration: "shamsan", root: "ش م س", meaning: { en: "sun", ur: "دھوپ", ar: "شَمساً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 9, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 10, arabic: "زَمْهَرِيرًا", transliteration: "zamharīran", root: "ز م ه ر", meaning: { en: "bitter cold", ur: "سردی", ar: "زَمهَرِيراً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 6, to: 8, label: 'فعل + مفعول به' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "وَدَانِيَةً عَلَيْهِمْ ظِلَالُهَا وَذُلِّلَتْ قُطُوفُهَا تَذْلِيلًا",
    words: [
      { position: 1, arabic: "وَدَانِيَةً", transliteration: "wa-dāniyatan", root: "د ن و", meaning: { en: "And near", ur: "اور قریب ہیں", ar: "ودانِيَةً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "circumstantial" },
      { position: 2, arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "above them", ur: "ان پر", ar: "عَلَيهِم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 3, arabic: "ظِلَالُهَا", transliteration: "ẓilāluhā", root: "ظ ل ل", meaning: { en: "its shades", ur: "اس کے سائے", ar: "ظِلالُها" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "وَذُلِّلَتْ", transliteration: "wa-dhullilat", root: "ذ ل ل", meaning: { en: "and made lowly", ur: "اور جھکا دیے گئے", ar: "وذُلِّلَت" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II", voice: "passive" },
      { position: 5, arabic: "قُطُوفُهَا", transliteration: "quṭūfuhā", root: "ق ط ف", meaning: { en: "its clusters", ur: "اس کے میوے", ar: "قُطُوفُها" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 6, arabic: "تَذْلِيلًا", transliteration: "tadhlīlan", root: "ذ ل ل", meaning: { en: "completely", ur: "پوری طرح", ar: "تَذلِيلاً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "وَيُطَافُ عَلَيْهِم بِآنِيَةٍ مِّن فِضَّةٍ وَأَكْوَابٍ كَانَتْ قَوَارِيرَا",
    words: [
      { position: 1, arabic: "وَيُطَافُ", transliteration: "wa-yuṭāfu", root: "ط و ف", meaning: { en: "And circulated", ur: "اور پھرایا جائے گا", ar: "ويُطافُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 2, arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "among them", ur: "ان پر", ar: "عَلَيهِم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "benefactive" },
      { position: 3, arabic: "بِآنِيَةٍ", transliteration: "bi-ʾāniyatin", root: "أ ن ي", meaning: { en: "with vessels", ur: "برتنوں میں", ar: "بِآنِيَة" }, pos: "N", posLabel: "N", grammarRole: "instrument" },
      { position: 4, arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "فِضَّةٍ", transliteration: "fiḍḍatin", root: "ف ض ض", meaning: { en: "silver", ur: "چاندی", ar: "فِضَّة" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 6, arabic: "وَأَكْوَابٍ", transliteration: "wa-ʾakwābin", root: "ك و ب", meaning: { en: "and cups", ur: "اور پیالوں میں", ar: "وأَكواب" }, pos: "N", posLabel: "N", grammarRole: "conjunction" },
      { position: 7, arabic: "كَانَتْ", transliteration: "kānat", root: "ك و ن", meaning: { en: "were", ur: "جو ہیں", ar: "كانَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 8, arabic: "قَوَارِيرَا", transliteration: "qawārīrā", root: "ق ر ر", meaning: { en: "crystal clear", ur: "بلور", ar: "قَوارِيرَ" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 5, to: 7, label: 'عطف' }
      ],
    },
  },

  16: {
    ayahNumber: 16,
    arabic: "قَوَارِيرَ مِن فِضَّةٍ قَدَّرُوهَا تَقْدِيرًا",
    words: [
      { position: 1, arabic: "قَوَارِيرَ", transliteration: "qawārīra", root: "ق ر ر", meaning: { en: "Crystal-clear", ur: "بلور", ar: "قَوارِيرَ" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "فِضَّةٍ", transliteration: "fiḍḍatin", root: "ف ض ض", meaning: { en: "silver", ur: "چاندی", ar: "فِضَّة" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 4, arabic: "قَدَّرُوهَا", transliteration: "qaddarūhā", root: "ق د ر", meaning: { en: "they determined", ur: "انہوں نے اندازہ کیا", ar: "قَدَّرُوها" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 5, arabic: "تَقْدِيرًا", transliteration: "taqdīran", root: "ق د ر", meaning: { en: "precisely", ur: "درست اندازے سے", ar: "تَقدِيراً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  17: {
    ayahNumber: 17,
    arabic: "وَيُسْقَوْنَ فِيهَا كَأْسًا كَانَ مِزَاجُهَا زَنجَبِيلًا",
    words: [
      { position: 1, arabic: "وَيُسْقَوْنَ", transliteration: "wa-yusqawna", root: "س ق ي", meaning: { en: "And they will be given to drink", ur: "اور پلائے جائیں گے", ar: "ويُسقَونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 2, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "وہاں", ar: "فِيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 3, arabic: "كَأْسًا", transliteration: "kaʾsan", root: "ك أ س", meaning: { en: "a cup", ur: "جام", ar: "كَأساً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 4, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 5, arabic: "مِزَاجُهَا", transliteration: "mizājuhā", root: "م ز ج", meaning: { en: "its mixture", ur: "اس کی آمیزش", ar: "مِزاجُها" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 6, arabic: "زَنجَبِيلًا", transliteration: "zanjabīlan", root: "ز ن ج ب ل", meaning: { en: "ginger", ur: "ادرک", ar: "زَنجَبِيلاً" }, pos: "N", posLabel: "N", grammarRole: "predicate", paradiseDrink: true }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'فعل + فاعل' },
      { from: 5, to: 6, label: 'مبتدأ + خبر' }
      ],
    },
  },

  18: {
    ayahNumber: 18,
    arabic: "عَيْنًا فِيهَا تُسَمَّىٰ سَلْسَبِيلًا",
    words: [
      { position: 1, arabic: "عَيْنًا", transliteration: "ʿaynan", root: "ع ي ن", meaning: { en: "A spring", ur: "چشمہ", ar: "عَيناً" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "وہاں", ar: "فِيها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "locative" },
      { position: 3, arabic: "تُسَمَّىٰ", transliteration: "tusammā", root: "س م و", meaning: { en: "named", ur: "کہلاتا ہے", ar: "تُسَمّى" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive", form: "II" },
      { position: 4, arabic: "سَلْسَبِيلًا", transliteration: "salsabīlan", root: "س ل س ب ل", meaning: { en: "Salsabil", ur: "سلسبیل", ar: "سَلسَبِيلاً" }, pos: "N", posLabel: "N", grammarRole: "predicate", paradiseSpring: true }
    ],
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
  },

  19: {
    ayahNumber: 19,
    arabic: "وَيَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُّخَلَّدُونَ إِذَا رَأَيْتَهُمْ حَسِبْتَهُمْ لُؤْلُؤًا مَّنثُورًا",
    words: [
      { position: 1, arabic: "وَيَطُوفُ", transliteration: "wa-yaṭūfu", root: "ط و ف", meaning: { en: "And circulate", ur: "اور پھریں گے", ar: "ويَطُوفُ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 2, arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "among them", ur: "ان پر", ar: "عَلَيهِم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "benefactive" },
      { position: 3, arabic: "وِلْدَانٌ", transliteration: "wildānun", root: "و ل د", meaning: { en: "young boys", ur: "لڑکے", ar: "وِلدان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "مُّخَلَّدُونَ", transliteration: "mukhalladūna", root: "خ ل د", meaning: { en: "immortal", ur: "ہمیشہ رہنے والے", ar: "مُخَلَّدُونَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", form: "II" },
      { position: 5, arabic: "إِذَا", transliteration: "ʾidhā", meaning: { en: "when", ur: "جب", ar: "إِذا" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 6, arabic: "رَأَيْتَهُمْ", transliteration: "raʾaytahum", root: "ر أ ي", meaning: { en: "you see them", ur: "تم دیکھو", ar: "رَأَيتَهُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 7, arabic: "حَسِبْتَهُمْ", transliteration: "ḥasibtahum", root: "ح س ب", meaning: { en: "you would think them", ur: "تم سمجھو", ar: "حَسِبتَهُم" }, pos: "V", posLabel: "V", grammarRole: "apodosis" },
      { position: 8, arabic: "لُؤْلُؤًا", transliteration: "luʾluʾan", root: "ل ؤ ل ؤ", meaning: { en: "pearls", ur: "موتی", ar: "لُؤلُؤاً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 9, arabic: "مَّنثُورًا", transliteration: "manthūran", root: "ن ث ر", meaning: { en: "scattered", ur: "بکھرے ہوئے", ar: "مَنثُوراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + فاعل' },
      { from: 3, to: 6, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'موصوف + صفت' },
      { from: 5, to: 6, label: 'شرط + فعل' },
      { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "وَإِذَا رَأَيْتَ ثَمَّ رَأَيْتَ نَعِيمًا وَمُلْكًا كَبِيرًا",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-ʾidhā", meaning: { en: "And when", ur: "اور جب", ar: "وإِذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "رَأَيْتَ", transliteration: "raʾayta", root: "ر أ ي", meaning: { en: "you look", ur: "تم دیکھو", ar: "رَأَيتَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "ثَمَّ", transliteration: "thamma", meaning: { en: "there", ur: "وہاں", ar: "ثَمَّ" }, pos: "ADV", posLabel: "ADV", grammarRole: "locative" },
      { position: 4, arabic: "رَأَيْتَ", transliteration: "raʾayta", root: "ر أ ي", meaning: { en: "you will see", ur: "تم دیکھو گے", ar: "رَأَيتَ" }, pos: "V", posLabel: "V", grammarRole: "apodosis" },
      { position: 5, arabic: "نَعِيمًا", transliteration: "naʿīman", root: "ن ع م", meaning: { en: "bliss", ur: "نعمت", ar: "نَعِيماً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 6, arabic: "وَمُلْكًا", transliteration: "wa-mulkan", root: "م ل ك", meaning: { en: "and a kingdom", ur: "اور سلطنت", ar: "ومُلكاً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 7, arabic: "كَبِيرًا", transliteration: "kabīran", root: "ك ب ر", meaning: { en: "great", ur: "بڑی", ar: "كَبِيراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 2, to: 5, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 4, to: 6, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },

  21: {
    ayahNumber: 21,
    arabic: "عَالِيَهُمْ ثِيَابُ سُندُسٍ خُضْرٌ وَإِسْتَبْرَقٌ ۖ وَحُلُّوا أَسَاوِرَ مِن فِضَّةٍ وَسَقَاهُمْ رَبُّهُمْ شَرَابًا طَهُورًا",
    words: [
      { position: 1, arabic: "عَالِيَهُمْ", transliteration: "ʿāliyahum", root: "ع ل و", meaning: { en: "Upon them", ur: "ان کے اوپر", ar: "عالِيَهُم" }, pos: "N", posLabel: "N", grammarRole: "locative" },
      { position: 2, arabic: "ثِيَابُ", transliteration: "thiyābu", root: "ث و ب", meaning: { en: "garments", ur: "کپڑے", ar: "ثِياب" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "سُندُسٍ", transliteration: "sundusin", meaning: { en: "of fine silk", ur: "باریک ریشم کے", ar: "سُندُس" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 4, arabic: "خُضْرٌ", transliteration: "khuḍrun", root: "خ ض ر", meaning: { en: "green", ur: "سبز", ar: "خُضر" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 5, arabic: "وَإِسْتَبْرَقٌ", transliteration: "wa-ʾistabraqun", meaning: { en: "and brocade", ur: "اور دیبا", ar: "وإِستَبرَق" }, pos: "N", posLabel: "N", grammarRole: "conjunction" },
      { position: 6, arabic: "وَحُلُّوا", transliteration: "wa-ḥullū", root: "ح ل ي", meaning: { en: "and adorned with", ur: "اور پہنائے گئے", ar: "وحُلُّوا" }, pos: "V", posLabel: "V", grammarRole: "predicate", voice: "passive" },
      { position: 7, arabic: "أَسَاوِرَ", transliteration: "ʾasāwira", root: "س و ر", meaning: { en: "bracelets", ur: "کنگن", ar: "أَساوِرَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 8, arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 9, arabic: "فِضَّةٍ", transliteration: "fiḍḍatin", root: "ف ض ض", meaning: { en: "silver", ur: "چاندی", ar: "فِضَّة" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 10, arabic: "وَسَقَاهُمْ", transliteration: "wa-saqāhum", root: "س ق ي", meaning: { en: "and their Lord gave them to drink", ur: "اور ان کے رب نے پلایا", ar: "وسَقاهُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 11, arabic: "رَبُّهُمْ", transliteration: "rabbuhum", root: "ر ب ب", meaning: { en: "their Lord", ur: "ان کا رب", ar: "رَبُّهُم" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 12, arabic: "شَرَابًا", transliteration: "sharāban", root: "ش ر ب", meaning: { en: "a drink", ur: "پینا", ar: "شَراباً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 13, arabic: "طَهُورًا", transliteration: "ṭahūran", root: "ط ه ر", meaning: { en: "purifying", ur: "پاک", ar: "طَهُوراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", divineDrink: true }
    ],
    structure: {
      relationships: [
      { from: 2, to: 6, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 3, to: 4, label: 'موصوف + صفت' },
      { from: 4, to: 6, label: 'عطف' },
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 8, to: 9, label: 'جار + مجرور' },
      { from: 10, to: 11, label: 'فعل + فاعل' },
      { from: 10, to: 12, label: 'فعل + مفعول به' },
      { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },

  22: {
    ayahNumber: 22,
    arabic: "إِنَّ هَـٰذَا كَانَ لَكُمْ جَزَاءً وَكَانَ سَعْيُكُم مَّشْكُورًا",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 3, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارا", ar: "لَكُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "benefactive" },
      { position: 5, arabic: "جَزَاءً", transliteration: "jazāʾan", root: "ج ز ي", meaning: { en: "reward", ur: "بدلہ", ar: "جَزاءً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 6, arabic: "وَكَانَ", transliteration: "wa-kāna", root: "ك و ن", meaning: { en: "and is", ur: "اور ہے", ar: "وكانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 7, arabic: "سَعْيُكُم", transliteration: "saʿyukum", root: "س ع ي", meaning: { en: "your effort", ur: "تمہاری کوشش", ar: "سَعيُكُم" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 8, arabic: "مَّشْكُورًا", transliteration: "mashkūran", root: "ش ك ر", meaning: { en: "appreciated", ur: "مقبول", ar: "مَشكُوراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 5, label: 'مبتدأ + خبر' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 8, label: 'مبتدأ + خبر' },
      { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },

  23: {
    ayahNumber: 23,
    arabic: "إِنَّا نَحْنُ نَزَّلْنَا عَلَيْكَ الْقُرْآنَ تَنزِيلًا",
    words: [
      { position: 1, arabic: "إِنَّا", transliteration: "ʾinnā", meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إِنّا" }, pos: "PART+PRON", posLabel: "PART+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم", ar: "نَحنُ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject", emphasis: "pronoun for emphasis" },
      { position: 3, arabic: "نَزَّلْنَا", transliteration: "nazzalnā", root: "ن ز ل", meaning: { en: "sent down", ur: "اتارا", ar: "نَزَّلنا" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "II" },
      { position: 4, arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "upon you", ur: "تم پر", ar: "عَلَيكَ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "benefactive" },
      { position: 5, arabic: "الْقُرْآنَ", transliteration: "l-qurʾāna", root: "ق ر أ", meaning: { en: "the Quran", ur: "قرآن", ar: "القُرآن" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 6, arabic: "تَنزِيلًا", transliteration: "tanzīlan", root: "ن ز ل", meaning: { en: "gradually", ur: "اتارنا", ar: "تَنزِيلاً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 3, to: 5, label: 'فعل + مفعول به' }
      ],
    },
  },

  24: {
    ayahNumber: 24,
    arabic: "فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا",
    words: [
      { position: 1, arabic: "فَاصْبِرْ", transliteration: "fa-ṣbir", root: "ص ب ر", meaning: { en: "So be patient", ur: "پس صبر کرو", ar: "فَاصبِر" }, pos: "V", posLabel: "V", grammarRole: "command", mood: "IMP" },
      { position: 2, arabic: "لِحُكْمِ", transliteration: "li-ḥukmi", root: "ح ك م", meaning: { en: "for the decision of", ur: "حکم کے لیے", ar: "لِحُكم" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "purpose" },
      { position: 3, arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "اپنے رب کے", ar: "رَبِّكَ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 4, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "and do not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "prohibition" },
      { position: 5, arabic: "تُطِعْ", transliteration: "tuṭiʿ", root: "ط و ع", meaning: { en: "obey", ur: "اطاعت کرو", ar: "تُطِع" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 6, arabic: "مِنْهُمْ", transliteration: "minhum", meaning: { en: "among them", ur: "ان میں سے", ar: "مِنهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "partitive" },
      { position: 7, arabic: "آثِمًا", transliteration: "ʾāthiman", root: "أ ث م", meaning: { en: "sinner", ur: "گنہگار", ar: "آثِماً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 8, arabic: "أَوْ", transliteration: "ʾaw", meaning: { en: "or", ur: "یا", ar: "أَو" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "disjunction" },
      { position: 9, arabic: "كَفُورًا", transliteration: "kafūran", root: "ك ف ر", meaning: { en: "ungrateful", ur: "ناشکرا", ar: "كَفُوراً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 5, to: 7, label: 'فعل + مفعول به' }
      ],
    },
  },

  25: {
    ayahNumber: 25,
    arabic: "وَاذْكُرِ اسْمَ رَبِّكَ بُكْرَةً وَأَصِيلًا",
    words: [
      { position: 1, arabic: "وَاذْكُرِ", transliteration: "wa-dhkur", root: "ذ ك ر", meaning: { en: "And remember", ur: "اور یاد کرو", ar: "واذكُر" }, pos: "V", posLabel: "V", grammarRole: "command", mood: "IMP" },
      { position: 2, arabic: "اسْمَ", transliteration: "isma", root: "س م و", meaning: { en: "the name of", ur: "نام", ar: "اسم" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "اپنے رب کا", ar: "رَبِّكَ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 4, arabic: "بُكْرَةً", transliteration: "bukratan", root: "ب ك ر", meaning: { en: "morning", ur: "صبح", ar: "بُكرَةً" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 5, arabic: "وَأَصِيلًا", transliteration: "wa-ʾaṣīlan", root: "أ ص ل", meaning: { en: "and evening", ur: "اور شام", ar: "وأَصِيلاً" }, pos: "N", posLabel: "N", grammarRole: "temporal" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  26: {
    ayahNumber: 26,
    arabic: "وَمِنَ اللَّيْلِ فَاسْجُدْ لَهُ وَسَبِّحْهُ لَيْلًا طَوِيلًا",
    words: [
      { position: 1, arabic: "وَمِنَ", transliteration: "wa-mina", meaning: { en: "And during", ur: "اور", ar: "ومِن" }, pos: "CONJ+PREP", posLabel: "CONJ+PREP", grammarRole: "temporal" },
      { position: 2, arabic: "اللَّيْلِ", transliteration: "l-layli", root: "ل ي ل", meaning: { en: "the night", ur: "رات کو", ar: "اللَّيل" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 3, arabic: "فَاسْجُدْ", transliteration: "fa-sjud", root: "س ج د", meaning: { en: "prostrate", ur: "سجدہ کرو", ar: "فَاسجُد" }, pos: "V", posLabel: "V", grammarRole: "command", mood: "IMP" },
      { position: 4, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to Him", ur: "اس کو", ar: "لَهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "indirect object" },
      { position: 5, arabic: "وَسَبِّحْهُ", transliteration: "wa-sabbiḥhu", root: "س ب ح", meaning: { en: "and glorify Him", ur: "اور تسبیح کرو", ar: "وسَبِّحهُ" }, pos: "V", posLabel: "V", grammarRole: "command", form: "II" },
      { position: 6, arabic: "لَيْلًا", transliteration: "laylan", root: "ل ي ل", meaning: { en: "night", ur: "رات", ar: "لَيلاً" }, pos: "N", posLabel: "N", grammarRole: "temporal" },
      { position: 7, arabic: "طَوِيلًا", transliteration: "ṭawīlan", root: "ط و ل", meaning: { en: "long", ur: "لمبی", ar: "طَوِيلاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },

  27: {
    ayahNumber: 27,
    arabic: "إِنَّ هَـٰؤُلَاءِ يُحِبُّونَ الْعَاجِلَةَ وَيَذَرُونَ وَرَاءَهُمْ يَوْمًا ثَقِيلًا",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "هَـٰؤُلَاءِ", transliteration: "hāʾulāʾi", meaning: { en: "these", ur: "یہ لوگ", ar: "هؤلاء" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 3, arabic: "يُحِبُّونَ", transliteration: "yuḥibbūna", root: "ح ب ب", meaning: { en: "love", ur: "محبت کرتے ہیں", ar: "يُحِبُّونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 4, arabic: "الْعَاجِلَةَ", transliteration: "l-ʿājilata", root: "ع ج ل", meaning: { en: "the immediate", ur: "جلدی والی (دنیا)", ar: "العاجِلَة" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "وَيَذَرُونَ", transliteration: "wa-yadharūna", root: "و ذ ر", meaning: { en: "and leave behind", ur: "اور چھوڑ دیتے ہیں", ar: "ويَذَرُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 6, arabic: "وَرَاءَهُمْ", transliteration: "warāʾahum", meaning: { en: "behind them", ur: "اپنے پیچھے", ar: "وَراءَهُم" }, pos: "N", posLabel: "N", grammarRole: "locative" },
      { position: 7, arabic: "يَوْمًا", transliteration: "yawman", root: "ي و م", meaning: { en: "a Day", ur: "ایک دن", ar: "يَوماً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 8, arabic: "ثَقِيلًا", transliteration: "thaqīlan", root: "ث ق ل", meaning: { en: "heavy", ur: "بھاری", ar: "ثَقِيلاً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 5, to: 7, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },

  28: {
    ayahNumber: 28,
    arabic: "نَّحْنُ خَلَقْنَاهُمْ وَشَدَدْنَا أَسْرَهُمْ ۖ وَإِذَا شِئْنَا بَدَّلْنَا أَمْثَالَهُمْ تَبْدِيلًا",
    words: [
      { position: 1, arabic: "نَّحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم", ar: "نَحنُ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 2, arabic: "خَلَقْنَاهُمْ", transliteration: "khalaqnāhum", root: "خ ل ق", meaning: { en: "created them", ur: "انہیں پیدا کیا", ar: "خَلَقناهُم" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "وَشَدَدْنَا", transliteration: "wa-shadadnā", root: "ش د د", meaning: { en: "and strengthened", ur: "اور مضبوط کیا", ar: "وشَدَدنا" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 4, arabic: "أَسْرَهُمْ", transliteration: "ʾasrahum", root: "أ س ر", meaning: { en: "their forms", ur: "ان کی بناوٹ", ar: "أَسرَهُم" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "وَإِذَا", transliteration: "wa-ʾidhā", meaning: { en: "and when", ur: "اور جب", ar: "وإِذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 6, arabic: "شِئْنَا", transliteration: "shiʾnā", root: "ش ي أ", meaning: { en: "We will", ur: "ہم چاہیں", ar: "شِئنا" }, pos: "V", posLabel: "V", grammarRole: "protasis" },
      { position: 7, arabic: "بَدَّلْنَا", transliteration: "baddalnā", root: "ب د ل", meaning: { en: "We replace", ur: "ہم بدل دیں", ar: "بَدَّلنا" }, pos: "V", posLabel: "V", grammarRole: "apodosis", form: "II" },
      { position: 8, arabic: "أَمْثَالَهُمْ", transliteration: "ʾamthālahum", root: "م ث ل", meaning: { en: "their likes", ur: "ان جیسوں کو", ar: "أَمثالَهُم" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 9, arabic: "تَبْدِيلًا", transliteration: "tabdīlan", root: "ب د ل", meaning: { en: "completely", ur: "بالکل", ar: "تَبدِيلاً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مبتدأ + خبر' },
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 5, to: 6, label: 'شرط + فعل' },
      { from: 6, to: 8, label: 'فعل + مفعول به' },
      { from: 6, to: 7, label: 'شرط + فعل' },
      { from: 7, to: 8, label: 'فعل + مفعول به' }
      ],
    },
  },

  29: {
    ayahNumber: 29,
    arabic: "إِنَّ هَـٰذِهِ تَذْكِرَةٌ ۖ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ سَبِيلًا",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 2, arabic: "هَـٰذِهِ", transliteration: "hādhihi", meaning: { en: "this", ur: "یہ", ar: "هذِهِ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 3, arabic: "تَذْكِرَةٌ", transliteration: "tadhkiratun", root: "ذ ك ر", meaning: { en: "is a reminder", ur: "یاد دہانی ہے", ar: "تَذكِرَة" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "فَمَن", transliteration: "fa-man", meaning: { en: "So whoever", ur: "پس جو", ar: "فَمَن" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammarRole: "conditional" },
      { position: 5, arabic: "شَاءَ", transliteration: "shāʾa", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "شاءَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 6, arabic: "اتَّخَذَ", transliteration: "ittakhadha", root: "أ خ ذ", meaning: { en: "may take", ur: "اختیار کرے", ar: "اتَّخَذَ" }, pos: "V", posLabel: "V", grammarRole: "apodosis", form: "VIII" },
      { position: 7, arabic: "إِلَىٰ", transliteration: "ʾilā", meaning: { en: "to", ur: "کی طرف", ar: "إِلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 8, arabic: "رَبِّهِ", transliteration: "rabbihi", root: "ر ب ب", meaning: { en: "his Lord", ur: "اپنے رب", ar: "رَبِّهِ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 9, arabic: "سَبِيلًا", transliteration: "sabīlan", root: "س ب ل", meaning: { en: "a way", ur: "راستہ", ar: "سَبِيلاً" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'شرط + فعل' },
      { from: 6, to: 9, label: 'فعل + مفعول به' },
      { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },

  30: {
    ayahNumber: 30,
    arabic: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ ۚ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "تَشَاءُونَ", transliteration: "tashāʾūna", root: "ش ي أ", meaning: { en: "you will", ur: "تم چاہتے", ar: "تَشاءُونَ" }, pos: "V", posLabel: "V", grammarRole: "predicate" },
      { position: 3, arabic: "إِلَّا", transliteration: "ʾillā", meaning: { en: "except", ur: "مگر", ar: "إِلّا" }, pos: "PART", posLabel: "PART", grammarRole: "exception" },
      { position: 4, arabic: "أَن", transliteration: "ʾan", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "PART", posLabel: "PART", grammarRole: "subordination" },
      { position: 5, arabic: "يَشَاءَ", transliteration: "yashāʾa", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "يَشاءَ" }, pos: "V", posLabel: "V", grammarRole: "subjunctive" },
      { position: 6, arabic: "اللَّهُ", transliteration: "l-lāhu", meaning: { en: "Allah", ur: "اللہ", ar: "اللَّه" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 7, arabic: "إِنَّ", transliteration: "ʾinna", meaning: { en: "Indeed", ur: "بیشک", ar: "إِنَّ" }, pos: "PART", posLabel: "PART", grammarRole: "emphasis" },
      { position: 8, arabic: "اللَّهَ", transliteration: "l-lāha", meaning: { en: "Allah", ur: "اللہ", ar: "اللَّه" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 9, arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "is", ur: "ہے", ar: "كانَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 10, arabic: "عَلِيمًا", transliteration: "ʿalīman", root: "ع ل م", meaning: { en: "All-Knowing", ur: "جاننے والا", ar: "عَلِيماً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", divine: true },
      { position: 11, arabic: "حَكِيمًا", transliteration: "ḥakīman", root: "ح ك م", meaning: { en: "All-Wise", ur: "حکمت والا", ar: "حَكِيماً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", divine: true }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 5, to: 6, label: 'فعل + فاعل' },
      { from: 5, to: 8, label: 'فعل + فاعل' },
      { from: 6, to: 10, label: 'مبتدأ + خبر' },
      { from: 7, to: 8, label: 'توکید' },
      { from: 8, to: 10, label: 'مبتدأ + خبر' }
      ],
    },
  },

  31: {
    ayahNumber: 31,
    arabic: "يُدْخِلُ مَن يَشَاءُ فِي رَحْمَتِهِ ۚ وَالظَّالِمِينَ أَعَدَّ لَهُمْ عَذَابًا أَلِيمًا",
    words: [
      { position: 1, arabic: "يُدْخِلُ", transliteration: "yudkhilu", root: "د خ ل", meaning: { en: "He admits", ur: "وہ داخل کرتا ہے", ar: "يُدخِلُ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 2, arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "جسے", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 3, arabic: "يَشَاءُ", transliteration: "yashāʾu", root: "ش ي أ", meaning: { en: "He wills", ur: "وہ چاہے", ar: "يَشاءُ" }, pos: "V", posLabel: "V", grammarRole: "relative clause" },
      { position: 4, arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں", ar: "فِي" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "رَحْمَتِهِ", transliteration: "raḥmatihi", root: "ر ح م", meaning: { en: "His mercy", ur: "اپنی رحمت", ar: "رَحمَتِهِ" }, pos: "N", posLabel: "N", grammarRole: "genitive" },
      { position: 6, arabic: "وَالظَّالِمِينَ", transliteration: "wal-ẓālimīna", root: "ظ ل م", meaning: { en: "And for the wrongdoers", ur: "اور ظالموں کے لیے", ar: "والظّالِمِينَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 7, arabic: "أَعَدَّ", transliteration: "ʾaʿadda", root: "ع د د", meaning: { en: "He has prepared", ur: "اس نے تیار کر رکھا ہے", ar: "أَعَدَّ" }, pos: "V", posLabel: "V", grammarRole: "predicate", form: "IV" },
      { position: 8, arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لَهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "benefactive" },
      { position: 9, arabic: "عَذَابًا", transliteration: "ʿadhāban", root: "ع ذ ب", meaning: { en: "a punishment", ur: "عذاب", ar: "عَذاباً" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 10, arabic: "أَلِيمًا", transliteration: "ʾalīman", root: "أ ل م", meaning: { en: "painful", ur: "دردناک", ar: "أَلِيماً" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 3, to: 6, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 7, to: 9, label: 'فعل + مفعول به' },
      { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  }
};

export default TREEBANK_DATA;
