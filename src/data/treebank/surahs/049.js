/**
 * Surah Al-Hujurat (The Chambers) - Surah 49
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 49,
  surahName: "Al-Hujurat",
  surahNameArabic: "الحجرات",
  totalAyahs: 18,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُقَدِّمُوا بَيْنَ يَدَيِ اللَّهِ وَرَسُولِهِ وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ سَمِيعٌ عَلِيمٌ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے ہو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "مت" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibition" } },
      { arabic: "تُقَدِّمُوا", transliteration: "tuqaddimū", meaning: { en: "put forward", ur: "آگے بڑھو" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ق-د-م", mood: "jussive" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "سامنے" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "يَدَيِ", transliteration: "yaday", meaning: { en: "hands", ur: "ہاتھوں کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "dual" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَرَسُولِهِ", transliteration: "warasūlihi", meaning: { en: "and His Messenger", ur: "اور اس کے رسول کے" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَاتَّقُوا", transliteration: "wattaqū", meaning: { en: "and fear", ur: "اور ڈرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "و-ق-ي", mood: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "سَمِيعٌ", transliteration: "samīʿun", meaning: { en: "All-Hearing", ur: "سننے والا ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "All-Knowing", ur: "جاننے والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + مفعول به' },
        { from: 6, to: 11, label: 'عطف' },
        { from: 15, to: 16, label: 'موصوف + صفت' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَرْفَعُوا أَصْوَاتَكُمْ فَوْقَ صَوْتِ النَّبِيِّ وَلَا تَجْهَرُوا لَهُ بِالْقَوْلِ كَجَهْرِ بَعْضِكُمْ لِبَعْضٍ أَن تَحْبَطَ أَعْمَالُكُمْ وَأَنتُمْ لَا تَشْعُرُونَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے ہو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "مت" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibition" } },
      { arabic: "تَرْفَعُوا", transliteration: "tarfaʿū", meaning: { en: "raise", ur: "بلند کرو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-ف-ع", mood: "jussive" } },
      { arabic: "أَصْوَاتَكُمْ", transliteration: "aṣwātakum", meaning: { en: "your voices", ur: "اپنی آوازیں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "فَوْقَ", transliteration: "fawqa", meaning: { en: "above", ur: "سے اونچی" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "صَوْتِ", transliteration: "ṣawti", meaning: { en: "the voice", ur: "آواز" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "النَّبِيِّ", transliteration: "al-nabiyyi", meaning: { en: "of the Prophet", ur: "نبی کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تَجْهَرُوا", transliteration: "tajharū", meaning: { en: "be loud", ur: "اونچی آواز سے بولو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ه-ر", mood: "jussive" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to him", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "بِالْقَوْلِ", transliteration: "bil-qawli", meaning: { en: "in speech", ur: "بات میں" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "كَجَهْرِ", transliteration: "kajahri", meaning: { en: "like the loudness", ur: "جیسے بلند کرتے ہو" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ج-ه-ر" } },
      { arabic: "بَعْضِكُمْ", transliteration: "baʿḍikum", meaning: { en: "of some of you", ur: "آپس میں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "لِبَعْضٍ", transliteration: "libaʿḍin", meaning: { en: "to some", ur: "ایک دوسرے سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "lest", ur: "کہیں" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "تَحْبَطَ", transliteration: "taḥbaṭa", meaning: { en: "become worthless", ur: "برباد ہو جائیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ح-ب-ط", mood: "subjunctive" } },
      { arabic: "أَعْمَالُكُمْ", transliteration: "aʿmālukum", meaning: { en: "your deeds", ur: "تمہارے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", number: "plural" } },
      { arabic: "وَأَنتُمْ", transliteration: "waʾantum", meaning: { en: "while you", ur: "اور تم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "circumstantial" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "تَشْعُرُونَ", transliteration: "tashʿurūna", meaning: { en: "perceive", ur: "جانتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ع-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'نفی + فعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'نفی + فعل' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "إِنَّ الَّذِينَ يَغُضُّونَ أَصْوَاتَهُمْ عِندَ رَسُولِ اللَّهِ أُولَٰئِكَ الَّذِينَ امْتَحَنَ اللَّهُ قُلُوبَهُمْ لِلتَّقْوَىٰ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "يَغُضُّونَ", transliteration: "yaghuḍḍūna", meaning: { en: "lower", ur: "نیچی کرتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ض-ض" } },
      { arabic: "أَصْوَاتَهُمْ", transliteration: "aṣwātahum", meaning: { en: "their voices", ur: "اپنی آوازیں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "before", ur: "کے پاس" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "رَسُولِ", transliteration: "rasūli", meaning: { en: "the Messenger", ur: "رسول" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "those are", ur: "یہی وہ ہیں" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", number: "plural" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "the ones who", ur: "جن کے" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "امْتَحَنَ", transliteration: "imtaḥana", meaning: { en: "has tested", ur: "آزما لیے" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "م-ح-ن" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "قُلُوبَهُمْ", transliteration: "qulūbahum", meaning: { en: "their hearts", ur: "دل" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "لِلتَّقْوَىٰ", transliteration: "lil-taqwā", meaning: { en: "for righteousness", ur: "تقوٰی کے لیے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "و-ق-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 10, to: 12, label: 'فعل + مفعول به' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "إِنَّ الَّذِينَ يُنَادُونَكَ مِن وَرَاءِ الْحُجُرَاتِ أَكْثَرُهُمْ لَا يَعْقِلُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "يُنَادُونَكَ", transliteration: "yunādūnaka", meaning: { en: "call you", ur: "تمہیں پکارتے ہیں" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "III", root: "ن-د-و" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "وَرَاءِ", transliteration: "warāʾi", meaning: { en: "behind", ur: "باہر" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْحُجُرَاتِ", transliteration: "al-ḥujurāti", meaning: { en: "the chambers", ur: "حجروں کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "أَكْثَرُهُمْ", transliteration: "aktharuhum", meaning: { en: "most of them", ur: "ان میں سے اکثر" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", meaning: { en: "use reason", ur: "سمجھتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ق-ل" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'نفی + فعل' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَلَوْ أَنَّهُمْ صَبَرُوا حَتَّىٰ تَخْرُجَ إِلَيْهِمْ لَكَانَ خَيْرًا لَّهُمْ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "hypothetical" } },
      { arabic: "أَنَّهُمْ", transliteration: "annahum", meaning: { en: "that they", ur: "یہ لوگ" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subordinating" } },
      { arabic: "صَبَرُوا", transliteration: "ṣabarū", meaning: { en: "had been patient", ur: "صبر کرتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ب-ر" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "یہاں تک کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "purpose" } },
      { arabic: "تَخْرُجَ", transliteration: "takhruja", meaning: { en: "you came out", ur: "تم نکلتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ر-ج", mood: "subjunctive" } },
      { arabic: "إِلَيْهِمْ", transliteration: "ilayhim", meaning: { en: "to them", ur: "ان کی طرف" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "لَكَانَ", transliteration: "lakāna", meaning: { en: "it would have been", ur: "تو ضرور" }, pos: "PART+V", posLabel: "PART+V", grammar: { type: "kāna" } },
      { arabic: "خَيْرًا", transliteration: "khayran", meaning: { en: "better", ur: "بہتر ہوتا" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefactive" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "غَفُورٌ", transliteration: "ghafūrun", meaning: { en: "Forgiving", ur: "بخشنے والا ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", meaning: { en: "Merciful", ur: "مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے ہو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "جَاءَكُمْ", transliteration: "jāʾakum", meaning: { en: "comes to you", ur: "تمہارے پاس آئے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "فَاسِقٌ", transliteration: "fāsiqun", meaning: { en: "a wicked person", ur: "کوئی فاسق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ف-س-ق" } },
      { arabic: "بِنَبَإٍ", transliteration: "binabāʾin", meaning: { en: "with news", ur: "کوئی خبر لے کر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "فَتَبَيَّنُوا", transliteration: "fatabayyinū", meaning: { en: "then verify", ur: "تو تحقیق کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "V", root: "ب-ي-ن", mood: "imperative" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "lest", ur: "کہیں" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "تُصِيبُوا", transliteration: "tuṣībū", meaning: { en: "you harm", ur: "تم پہنچا دو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ص-و-ب", mood: "subjunctive" } },
      { arabic: "قَوْمًا", transliteration: "qawman", meaning: { en: "a people", ur: "کسی قوم کو تکلیف" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِجَهَالَةٍ", transliteration: "bijahālatin", meaning: { en: "in ignorance", ur: "نادانی میں" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ج-ه-ل" } },
      { arabic: "فَتُصْبِحُوا", transliteration: "fatuṣbiḥū", meaning: { en: "and you become", ur: "پھر ہو جاؤ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ب-ح", mood: "subjunctive" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فَعَلْتُمْ", transliteration: "faʿaltum", meaning: { en: "you have done", ur: "تم نے کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ع-ل" } },
      { arabic: "نَادِمِينَ", transliteration: "nādimīna", meaning: { en: "regretful", ur: "پچھتانے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ن-د-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 4, to: 9, label: 'عطف' },
        { from: 11, to: 12, label: 'فعل + مفعول به' },
        { from: 11, to: 14, label: 'عطف' },
        { from: 16, to: 17, label: 'موصول + صلة' },
        { from: 17, to: 18, label: 'فعل + مفعول به' },
        { from: 17, to: 18, label: 'حال' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَاعْلَمُوا أَنَّ فِيكُمْ رَسُولَ اللَّهِ لَوْ يُطِيعُكُمْ فِي كَثِيرٍ مِّنَ الْأَمْرِ لَعَنِتُّمْ",
    words: [
      { arabic: "وَاعْلَمُوا", transliteration: "waʿlamū", meaning: { en: "And know", ur: "اور جان لو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ل-م", mood: "imperative" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "فِيكُمْ", transliteration: "fīkum", meaning: { en: "among you", ur: "تم میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "رَسُولَ", transliteration: "rasūla", meaning: { en: "is the Messenger", ur: "رسول ہیں" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "hypothetical" } },
      { arabic: "يُطِيعُكُمْ", transliteration: "yuṭīʿukum", meaning: { en: "he were to obey you", ur: "وہ تمہاری مان لیں" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ط-و-ع" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "كَثِيرٍ", transliteration: "kathīrin", meaning: { en: "much", ur: "بہت سے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْأَمْرِ", transliteration: "al-amri", meaning: { en: "the matter", ur: "معاملات" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لَعَنِتُّمْ", transliteration: "laʿanittum", meaning: { en: "you would be in difficulty", ur: "تو تم مشکل میں پڑ جاتے" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "I", root: "ع-ن-ت" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "وَلَٰكِنَّ اللَّهَ حَبَّبَ إِلَيْكُمُ الْإِيمَانَ وَزَيَّنَهُ فِي قُلُوبِكُمْ وَكَرَّهَ إِلَيْكُمُ الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ",
    words: [
      { arabic: "وَلَٰكِنَّ", transliteration: "walākinna", meaning: { en: "But", ur: "لیکن" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "adversative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "حَبَّبَ", transliteration: "ḥabbaba", meaning: { en: "has endeared", ur: "محبوب بنا دیا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ح-ب-ب" } },
      { arabic: "إِلَيْكُمُ", transliteration: "ilaykumu", meaning: { en: "to you", ur: "تمہارے نزدیک" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "الْإِيمَانَ", transliteration: "al-īmāna", meaning: { en: "the faith", ur: "ایمان کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-م-ن" } },
      { arabic: "وَزَيَّنَهُ", transliteration: "wazayyanahu", meaning: { en: "and beautified it", ur: "اور اسے سجا دیا" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ز-ي-ن" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِكُمْ", transliteration: "qulūbikum", meaning: { en: "your hearts", ur: "تمہارے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَكَرَّهَ", transliteration: "wakarraha", meaning: { en: "and made hateful", ur: "اور ناگوار بنا دیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ك-ر-ه" } },
      { arabic: "إِلَيْكُمُ", transliteration: "ilaykumu", meaning: { en: "to you", ur: "تمہارے نزدیک" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "الْكُفْرَ", transliteration: "al-kufra", meaning: { en: "disbelief", ur: "کفر کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ف-ر" } },
      { arabic: "وَالْفُسُوقَ", transliteration: "wal-fusūqa", meaning: { en: "and defiance", ur: "اور نافرمانی کو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ف-س-ق" } },
      { arabic: "وَالْعِصْيَانَ", transliteration: "wal-ʿiṣyāna", meaning: { en: "and disobedience", ur: "اور گناہ کو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ع-ص-ي" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'عطف' },
        { from: 12, to: 13, label: 'عطف' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "وَإِن طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا",
    words: [
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "طَائِفَتَانِ", transliteration: "ṭāʾifatāni", meaning: { en: "two factions", ur: "دو گروہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "dual" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "the believers", ur: "مومنوں کے" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural" } },
      { arabic: "اقْتَتَلُوا", transliteration: "iqtatalū", meaning: { en: "fight each other", ur: "آپس میں لڑ پڑیں" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ق-ت-ل" } },
      { arabic: "فَأَصْلِحُوا", transliteration: "faʾaṣliḥū", meaning: { en: "then make peace", ur: "تو صلح کرا دو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ل-ح", mood: "imperative" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "between them", ur: "ان دونوں کے درمیان" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'عطف' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Indeed", ur: "بس" }, pos: "PART", posLabel: "PART", grammar: { type: "restrictive" } },
      { arabic: "الْمُؤْمِنُونَ", transliteration: "al-muʾminūna", meaning: { en: "the believers", ur: "مومن" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural" } },
      { arabic: "إِخْوَةٌ", transliteration: "ikhwatun", meaning: { en: "are brothers", ur: "بھائی بھائی ہیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "فَأَصْلِحُوا", transliteration: "faʾaṣliḥū", meaning: { en: "so make peace", ur: "تو صلح کرا دو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ل-ح", mood: "imperative" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "between", ur: "درمیان" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "أَخَوَيْكُمْ", transliteration: "akhawaykum", meaning: { en: "your brothers", ur: "اپنے دو بھائیوں کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "dual" } },
      { arabic: "وَاتَّقُوا", transliteration: "wattaqū", meaning: { en: "and fear", ur: "اور ڈرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "و-ق-ي", mood: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that you may", ur: "تاکہ تم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "expectation" } },
      { arabic: "تُرْحَمُونَ", transliteration: "turḥamūna", meaning: { en: "receive mercy", ur: "رحم کیے جاؤ" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ر-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 4, to: 7, label: 'عطف' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ وَلَا نِسَاءٌ مِّن نِّسَاءٍ عَسَىٰ أَن يَكُنَّ خَيْرًا مِّنْهُنَّ وَلَا تَلْمِزُوا أَنفُسَكُمْ وَلَا تَنَابَزُوا بِالْأَلْقَابِ بِئْسَ الِاسْمُ الْفُسُوقُ بَعْدَ الْإِيمَانِ وَمَن لَّمْ يَتُبْ فَأُولَٰئِكَ هُمُ الظَّالِمُونَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے ہو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not let", ur: "نہ" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibition" } },
      { arabic: "يَسْخَرْ", transliteration: "yaskhar", meaning: { en: "ridicule", ur: "مذاق اڑائے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-خ-ر", mood: "jussive" } },
      { arabic: "قَوْمٌ", transliteration: "qawmun", meaning: { en: "a people", ur: "کوئی قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "قَوْمٍ", transliteration: "qawmin", meaning: { en: "another people", ur: "دوسری قوم کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَسَىٰ", transliteration: "ʿasā", meaning: { en: "perhaps", ur: "شاید" }, pos: "V", posLabel: "V", grammar: { type: "hope" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "يَكُونُوا", transliteration: "yakūnū", meaning: { en: "they may be", ur: "وہ ہوں" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", mood: "subjunctive" } },
      { arabic: "خَيْرًا", transliteration: "khayran", meaning: { en: "better", ur: "بہتر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مِّنْهُمْ", transliteration: "minhum", meaning: { en: "than them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "comparison" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not let", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "نِسَاءٌ", transliteration: "nisāʾun", meaning: { en: "women", ur: "عورتیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "نِّسَاءٍ", transliteration: "nisāʾin", meaning: { en: "other women", ur: "دوسری عورتوں کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "عَسَىٰ", transliteration: "ʿasā", meaning: { en: "perhaps", ur: "شاید" }, pos: "V", posLabel: "V", grammar: { type: "hope" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "يَكُنَّ", transliteration: "yakunna", meaning: { en: "they may be", ur: "وہ ہوں" }, pos: "V", posLabel: "V", grammar: { root: "ك-و-ن", mood: "subjunctive", gender: "feminine" } },
      { arabic: "خَيْرًا", transliteration: "khayran", meaning: { en: "better", ur: "بہتر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مِّنْهُنَّ", transliteration: "minhunna", meaning: { en: "than them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "comparison", gender: "feminine" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تَلْمِزُوا", transliteration: "talmizū", meaning: { en: "insult", ur: "عیب لگاؤ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ل-م-ز", mood: "jussive" } },
      { arabic: "أَنفُسَكُمْ", transliteration: "anfusakum", meaning: { en: "yourselves", ur: "اپنے آپ کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تَنَابَزُوا", transliteration: "tanābazū", meaning: { en: "call each other by nicknames", ur: "ایک دوسرے کو برے نام سے پکارو" }, pos: "V", posLabel: "V", grammar: { form: "VI", root: "ن-ب-ز", mood: "jussive" } },
      { arabic: "بِالْأَلْقَابِ", transliteration: "bil-alqābi", meaning: { en: "by offensive nicknames", ur: "برے لقبوں سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "بِئْسَ", transliteration: "biʾsa", meaning: { en: "wretched is", ur: "بہت برا ہے" }, pos: "V", posLabel: "V", grammar: { type: "dispraise" } },
      { arabic: "الِاسْمُ", transliteration: "al-ismu", meaning: { en: "the name", ur: "نام" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْفُسُوقُ", transliteration: "al-fusūqu", meaning: { en: "defiance", ur: "فسق" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ف-س-ق" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "temporal" } },
      { arabic: "الْإِيمَانِ", transliteration: "al-īmāni", meaning: { en: "the faith", ur: "ایمان کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-م-ن" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "conditional" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "does not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive negation" } },
      { arabic: "يَتُبْ", transliteration: "yatub", meaning: { en: "repent", ur: "توبہ کرے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ت-و-ب", mood: "jussive" } },
      { arabic: "فَأُولَٰئِكَ", transliteration: "faʾulāʾika", meaning: { en: "then those", ur: "تو وہی لوگ" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { type: "demonstrative", number: "plural" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { type: "separating" } },
      { arabic: "الظَّالِمُونَ", transliteration: "al-ẓālimūna", meaning: { en: "the wrongdoers", ur: "ظالم ہیں" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ظ-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 24, to: 25, label: 'نفی + فعل' },
        { from: 25, to: 26, label: 'فعل + مفعول به' },
        { from: 27, to: 28, label: 'نفی + فعل' },
        { from: 33, to: 34, label: 'مضاف + مضاف إليه' },
        { from: 36, to: 37, label: 'نفی + فعل' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ تَوَّابٌ رَّحِيمٌ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے ہو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "اجْتَنِبُوا", transliteration: "ijtanibū", meaning: { en: "avoid", ur: "بچو" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ج-ن-ب", mood: "imperative" } },
      { arabic: "كَثِيرًا", transliteration: "kathīran", meaning: { en: "much", ur: "بہت سے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الظَّنِّ", transliteration: "al-ẓanni", meaning: { en: "assumption", ur: "گمان" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ظ-ن-ن" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "بَعْضَ", transliteration: "baʿḍa", meaning: { en: "some", ur: "بعض" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الظَّنِّ", transliteration: "al-ẓanni", meaning: { en: "of assumption", ur: "گمان" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ظ-ن-ن" } },
      { arabic: "إِثْمٌ", transliteration: "ithmun", meaning: { en: "is sin", ur: "گناہ ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تَجَسَّسُوا", transliteration: "tajassasū", meaning: { en: "spy", ur: "ٹوہ لگاؤ" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ج-س-س", mood: "jussive" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "يَغْتَب", transliteration: "yaghtab", meaning: { en: "backbite", ur: "غیبت کرے" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "غ-ي-ب", mood: "jussive" } },
      { arabic: "بَّعْضُكُم", transliteration: "baʿḍukum", meaning: { en: "some of you", ur: "تم میں سے کوئی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative" } },
      { arabic: "بَعْضًا", transliteration: "baʿḍan", meaning: { en: "another", ur: "دوسرے کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "أَيُحِبُّ", transliteration: "ayuḥibbu", meaning: { en: "Would like", ur: "کیا پسند کرے گا" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "IV", root: "ح-ب-ب", type: "interrogative" } },
      { arabic: "أَحَدُكُمْ", transliteration: "aḥadukum", meaning: { en: "one of you", ur: "تم میں سے کوئی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "to", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "يَأْكُلَ", transliteration: "yaʾkula", meaning: { en: "eat", ur: "کھائے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ك-ل", mood: "subjunctive" } },
      { arabic: "لَحْمَ", transliteration: "laḥma", meaning: { en: "the flesh", ur: "گوشت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ل-ح-م" } },
      { arabic: "أَخِيهِ", transliteration: "akhīhi", meaning: { en: "of his brother", ur: "اپنے بھائی کا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "مَيْتًا", transliteration: "maytan", meaning: { en: "dead", ur: "مردہ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "م-و-ت" } },
      { arabic: "فَكَرِهْتُمُوهُ", transliteration: "fakarihtumūhu", meaning: { en: "you would detest it", ur: "تم اسے ناپسند کرو گے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ك-ر-ه" } },
      { arabic: "وَاتَّقُوا", transliteration: "wattaqū", meaning: { en: "and fear", ur: "اور ڈرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "و-ق-ي", mood: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "تَوَّابٌ", transliteration: "tawwābun", meaning: { en: "Accepting of repentance", ur: "بہت توبہ قبول کرنے والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ت-و-ب" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", meaning: { en: "Merciful", ur: "مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ر-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 15, to: 16, label: 'نفی + فعل' },
        { from: 22, to: 23, label: 'فعل + مفعول به' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'فعل + مفعول به' },
        { from: 31, to: 32, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "النَّاسُ", transliteration: "al-nāsu", meaning: { en: "mankind", ur: "لوگو" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم نے" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphatic" } },
      { arabic: "خَلَقْنَاكُم", transliteration: "khalaqnākum", meaning: { en: "created you", ur: "تمہیں پیدا کیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "ذَكَرٍ", transliteration: "dhakarin", meaning: { en: "a male", ur: "ایک مرد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَأُنثَىٰ", transliteration: "waʾunthā", meaning: { en: "and a female", ur: "اور ایک عورت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَجَعَلْنَاكُمْ", transliteration: "wajaʿalnākum", meaning: { en: "and made you", ur: "اور بنایا تمہیں" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "شُعُوبًا", transliteration: "shuʿūban", meaning: { en: "peoples", ur: "قومیں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَقَبَائِلَ", transliteration: "waqabāʾila", meaning: { en: "and tribes", ur: "اور قبیلے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "لِتَعَارَفُوا", transliteration: "litaʿārafū", meaning: { en: "that you may know one another", ur: "تاکہ ایک دوسرے کو پہچانو" }, pos: "P+V", posLabel: "P+V", grammar: { form: "VI", root: "ع-ر-ف", mood: "subjunctive" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "أَكْرَمَكُمْ", transliteration: "akramakum", meaning: { en: "the most noble of you", ur: "تم میں سب سے زیادہ عزت والا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "in the sight of", ur: "کے نزدیک" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَتْقَاكُمْ", transliteration: "atqākum", meaning: { en: "the most righteous of you", ur: "تم میں سب سے زیادہ متقی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "و-ق-ي" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "All-Knowing", ur: "جاننے والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "خَبِيرٌ", transliteration: "khabīrun", meaning: { en: "All-Aware", ur: "خبر رکھنے والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'عطف' },
        { from: 10, to: 11, label: 'عطف' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'موصوف + صفت' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "قَالَتِ الْأَعْرَابُ آمَنَّا قُل لَّمْ تُؤْمِنُوا وَلَٰكِن قُولُوا أَسْلَمْنَا وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ وَإِن تُطِيعُوا اللَّهَ وَرَسُولَهُ لَا يَلِتْكُم مِّنْ أَعْمَالِكُمْ شَيْئًا إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
    words: [
      { arabic: "قَالَتِ", transliteration: "qālati", meaning: { en: "Said", ur: "کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الْأَعْرَابُ", transliteration: "al-aʿrābu", meaning: { en: "the bedouins", ur: "دیہاتی عربوں نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "آمَنَّا", transliteration: "āmannā", meaning: { en: "We believed", ur: "ہم ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "قُل", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive negation" } },
      { arabic: "تُؤْمِنُوا", transliteration: "tuʾminū", meaning: { en: "you have believed", ur: "تم ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن", mood: "jussive" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "بلکہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "adversative" } },
      { arabic: "قُولُوا", transliteration: "qūlū", meaning: { en: "say", ur: "کہو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "أَسْلَمْنَا", transliteration: "aslamnā", meaning: { en: "we have submitted", ur: "ہم نے اسلام قبول کیا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "س-ل-م" } },
      { arabic: "وَلَمَّا", transliteration: "walammā", meaning: { en: "and not yet", ur: "اور ابھی نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "temporal negation" } },
      { arabic: "يَدْخُلِ", transliteration: "yadkhuli", meaning: { en: "has entered", ur: "داخل ہوا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-خ-ل", mood: "jussive" } },
      { arabic: "الْإِيمَانُ", transliteration: "al-īmānu", meaning: { en: "faith", ur: "ایمان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-م-ن" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِكُمْ", transliteration: "qulūbikum", meaning: { en: "your hearts", ur: "تمہارے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "تُطِيعُوا", transliteration: "tuṭīʿū", meaning: { en: "you obey", ur: "تم اطاعت کرو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ط-و-ع", mood: "jussive" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَرَسُولَهُ", transliteration: "warasūlahu", meaning: { en: "and His Messenger", ur: "اور اس کے رسول کی" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "accusative" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَلِتْكُم", transliteration: "yalitkum", meaning: { en: "He will deprive you", ur: "کم کرے گا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ل-ي-ت", mood: "jussive" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "أَعْمَالِكُمْ", transliteration: "aʿmālikum", meaning: { en: "your deeds", ur: "تمہارے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "anything", ur: "کچھ بھی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "غَفُورٌ", transliteration: "ghafūrun", meaning: { en: "Forgiving", ur: "بخشنے والا ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīmun", meaning: { en: "Merciful", ur: "مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + مفعول به' },
        { from: 19, to: 20, label: 'نفی + فعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'موصوف + صفت' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ آمَنُوا بِاللَّهِ وَرَسُولِهِ ثُمَّ لَمْ يَرْتَابُوا وَجَاهَدُوا بِأَمْوَالِهِمْ وَأَنفُسِهِمْ فِي سَبِيلِ اللَّهِ أُولَٰئِكَ هُمُ الصَّادِقُونَ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "بس" }, pos: "PART", posLabel: "PART", grammar: { type: "restrictive" } },
      { arabic: "الْمُؤْمِنُونَ", transliteration: "al-muʾminūna", meaning: { en: "the believers", ur: "مومن وہ ہیں" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "in Allah", ur: "اللہ پر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَرَسُولِهِ", transliteration: "warasūlihi", meaning: { en: "and His Messenger", ur: "اور اس کے رسول پر" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "genitive" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "did not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive negation" } },
      { arabic: "يَرْتَابُوا", transliteration: "yartābū", meaning: { en: "doubt", ur: "شک کیا" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ر-ي-ب", mood: "jussive" } },
      { arabic: "وَجَاهَدُوا", transliteration: "wajāhadū", meaning: { en: "and strove", ur: "اور جہاد کیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "III", root: "ج-ه-د" } },
      { arabic: "بِأَمْوَالِهِمْ", transliteration: "biʾamwālihim", meaning: { en: "with their wealth", ur: "اپنے مالوں سے" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَأَنفُسِهِمْ", transliteration: "waʾanfusihim", meaning: { en: "and their lives", ur: "اور اپنی جانوں سے" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "those are", ur: "یہی لوگ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", number: "plural" } },
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "they are", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { type: "separating" } },
      { arabic: "الصَّادِقُونَ", transliteration: "al-ṣādiqūna", meaning: { en: "the truthful", ur: "سچے ہیں" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ص-د-ق" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'عطف' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "قُلْ أَتُعَلِّمُونَ اللَّهَ بِدِينِكُمْ وَاللَّهُ يَعْلَمُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "أَتُعَلِّمُونَ", transliteration: "atuʿallimūna", meaning: { en: "Would you inform", ur: "کیا تم سکھاتے ہو" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "II", root: "ع-ل-م", type: "interrogative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِدِينِكُمْ", transliteration: "bidīnikum", meaning: { en: "about your religion", ur: "اپنے دین کے بارے میں" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "while Allah", ur: "حالانکہ اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", meaning: { en: "knows", ur: "جانتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "بِكُلِّ", transliteration: "bikulli", meaning: { en: "of every", ur: "ہر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "All-Knowing", ur: "جاننے والا ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "يَمُنُّونَ عَلَيْكَ أَنْ أَسْلَمُوا قُل لَّا تَمُنُّوا عَلَيَّ إِسْلَامَكُم بَلِ اللَّهُ يَمُنُّ عَلَيْكُمْ أَنْ هَدَاكُمْ لِلْإِيمَانِ إِن كُنتُمْ صَادِقِينَ",
    words: [
      { arabic: "يَمُنُّونَ", transliteration: "yamunnūna", meaning: { en: "They consider it a favor", ur: "یہ احسان جتاتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-ن-ن" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "to you", ur: "تم پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "recipient" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "أَسْلَمُوا", transliteration: "aslamū", meaning: { en: "they have accepted Islam", ur: "وہ مسلمان ہوئے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "س-ل-م" } },
      { arabic: "قُل", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "do not", ur: "مت" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibition" } },
      { arabic: "تَمُنُّوا", transliteration: "tamunnū", meaning: { en: "consider it a favor", ur: "احسان جتاؤ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-ن-ن", mood: "jussive" } },
      { arabic: "عَلَيَّ", transliteration: "ʿalayya", meaning: { en: "upon me", ur: "مجھ پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "recipient" } },
      { arabic: "إِسْلَامَكُم", transliteration: "islāmakum", meaning: { en: "your Islam", ur: "اپنا اسلام" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "س-ل-م" } },
      { arabic: "بَلِ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ" }, pos: "PART", posLabel: "PART", grammar: { type: "correction" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "يَمُنُّ", transliteration: "yamunnu", meaning: { en: "confers favor", ur: "احسان کرتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-ن-ن" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "upon you", ur: "تم پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "recipient" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "هَدَاكُمْ", transliteration: "hadākum", meaning: { en: "He guided you", ur: "اس نے تمہیں ہدایت دی" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ه-د-ي" } },
      { arabic: "لِلْإِيمَانِ", transliteration: "lil-īmāni", meaning: { en: "to the faith", ur: "ایمان کی طرف" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-م-ن" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you are", ur: "تم ہو" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "صَادِقِينَ", transliteration: "ṣādiqīna", meaning: { en: "truthful", ur: "سچے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ص-د-ق" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'مبتدأ + خبر' },
        { from: 14, to: 15, label: 'عطف' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "إِنَّ اللَّهَ يَعْلَمُ غَيْبَ السَّمَاوَاتِ وَالْأَرْضِ وَاللَّهُ بَصِيرٌ بِمَا تَعْمَلُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", meaning: { en: "knows", ur: "جانتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "غَيْبَ", transliteration: "ghayba", meaning: { en: "the unseen", ur: "غیب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "غ-ي-ب" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "بَصِيرٌ", transliteration: "baṣīrun", meaning: { en: "All-Seeing", ur: "دیکھنے والا ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'عطف' },
        { from: 9, to: 10, label: 'موصول + صلة' }
      ]
    }
  }
};

export default TREEBANK_DATA;
