/**
 * Surah Muhammad - Surah 47
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 47,
  surahName: "Muhammad",
  surahNameArabic: "محمد",
  totalAyahs: 38,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "الَّذِينَ كَفَرُوا وَصَدُّوا عَن سَبِيلِ اللَّهِ أَضَلَّ أَعْمَالَهُمْ",
    words: [
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "وَصَدُّوا", transliteration: "waṣaddū", meaning: { en: "and hindered", ur: "اور روکا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-د-د" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَضَلَّ", transliteration: "aḍalla", meaning: { en: "He rendered astray", ur: "اس نے ضائع کر دیے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ض-ل-ل" } },
      { arabic: "أَعْمَالَهُمْ", transliteration: "aʿmālahum", meaning: { en: "their deeds", ur: "ان کے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural", root: "ع-م-ل" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَآمَنُوا بِمَا نُزِّلَ عَلَىٰ مُحَمَّدٍ وَهُوَ الْحَقُّ مِن رَّبِّهِمْ كَفَّرَ عَنْهُمْ سَيِّئَاتِهِمْ وَأَصْلَحَ بَالَهُمْ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَعَمِلُوا", transliteration: "waʿamilū", meaning: { en: "and did", ur: "اور کیے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "الصَّالِحَاتِ", transliteration: "al-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک اعمال" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ص-ل-ح" } },
      { arabic: "وَآمَنُوا", transliteration: "waʾāmanū", meaning: { en: "and believed", ur: "اور ایمان لائے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "in what", ur: "اس پر جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "نُزِّلَ", transliteration: "nuzzila", meaning: { en: "was revealed", ur: "اتارا گیا" }, pos: "V", posLabel: "V", grammar: { form: "II", voice: "passive", root: "ن-ز-ل" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "recipient" } },
      { arabic: "مُحَمَّدٍ", transliteration: "muḥammadin", meaning: { en: "Muhammad", ur: "محمد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and it is", ur: "اور یہ ہے" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الْحَقُّ", transliteration: "al-ḥaqqu", meaning: { en: "the truth", ur: "حق" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "رَّبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "ان کے رب" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "كَفَّرَ", transliteration: "kaffara", meaning: { en: "He removed", ur: "اس نے دور کیے" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ف-ر" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "from them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "سَيِّئَاتِهِمْ", transliteration: "sayyiʾātihim", meaning: { en: "their misdeeds", ur: "ان کے گناہ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَأَصْلَحَ", transliteration: "waʾaṣlaḥa", meaning: { en: "and amended", ur: "اور درست کیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ل-ح" } },
      { arabic: "بَالَهُمْ", transliteration: "bālahum", meaning: { en: "their condition", ur: "ان کا حال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "ذَٰلِكَ بِأَنَّ الَّذِينَ كَفَرُوا اتَّبَعُوا الْبَاطِلَ وَأَنَّ الَّذِينَ آمَنُوا اتَّبَعُوا الْحَقَّ مِن رَّبِّهِمْ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ اس لیے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "بِأَنَّ", transliteration: "biʾanna", meaning: { en: "because", ur: "کیونکہ" }, pos: "P+CONJ", posLabel: "P+CONJ", grammar: { type: "causal" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "اتَّبَعُوا", transliteration: "ittabaʿū", meaning: { en: "followed", ur: "پیروی کی" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "الْبَاطِلَ", transliteration: "al-bāṭila", meaning: { en: "falsehood", ur: "باطل کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَأَنَّ", transliteration: "waʾanna", meaning: { en: "and that", ur: "اور کیونکہ" }, pos: "CONJ+CONJ", posLabel: "CONJ+CONJ", grammar: { type: "causal" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "اتَّبَعُوا", transliteration: "ittabaʿū", meaning: { en: "followed", ur: "پیروی کی" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "الْحَقَّ", transliteration: "al-ḥaqqa", meaning: { en: "the truth", ur: "حق کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "رَّبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "ان کے رب" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "فَإِذَا لَقِيتُمُ الَّذِينَ كَفَرُوا فَضَرْبَ الرِّقَابِ حَتَّىٰ إِذَا أَثْخَنتُمُوهُمْ فَشُدُّوا الْوَثَاقَ",
    words: [
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "So when", ur: "پس جب" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "temporal" } },
      { arabic: "لَقِيتُمُ", transliteration: "laqītumu", meaning: { en: "you meet", ur: "تم ملو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ل-ق-ي" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان سے جو" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "فَضَرْبَ", transliteration: "faḍarba", meaning: { en: "then strike", ur: "تو مارو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ض-ر-ب" } },
      { arabic: "الرِّقَابِ", transliteration: "al-riqābi", meaning: { en: "the necks", ur: "گردنیں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "یہاں تک کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "purpose" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "أَثْخَنتُمُوهُمْ", transliteration: "athkhantumūhum", meaning: { en: "you have inflicted a slaughter", ur: "تم ان کو اچھی طرح کچل دو" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ث-خ-ن" } },
      { arabic: "فَشُدُّوا", transliteration: "fashuddū", meaning: { en: "then bind", ur: "تو مضبوط باندھو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ش-د-د", mood: "imperative" } },
      { arabic: "الْوَثَاقَ", transliteration: "al-wathāqa", meaning: { en: "the bonds", ur: "بندھن" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "ذَٰلِكَ وَلَوْ يَشَاءُ اللَّهُ لَانتَصَرَ مِنْهُمْ وَلَٰكِن لِّيَبْلُوَ بَعْضَكُم بِبَعْضٍ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہ ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "and if", ur: "اور اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "hypothetical" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "had willed", ur: "چاہتا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لَانتَصَرَ", transliteration: "la-intaṣara", meaning: { en: "He could have taken vengeance", ur: "تو خود بدلہ لے لیتا" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "VIII", root: "ن-ص-ر" } },
      { arabic: "مِنْهُمْ", transliteration: "minhum", meaning: { en: "from them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "adversative" } },
      { arabic: "لِّيَبْلُوَ", transliteration: "liyabluwa", meaning: { en: "to test", ur: "تاکہ آزمائے" }, pos: "P+V", posLabel: "P+V", grammar: { form: "I", root: "ب-ل-و", mood: "subjunctive" } },
      { arabic: "بَعْضَكُم", transliteration: "baʿḍakum", meaning: { en: "some of you", ur: "تم میں سے بعض کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "بِبَعْضٍ", transliteration: "bibaʿḍin", meaning: { en: "with others", ur: "بعض سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَالَّذِينَ قُتِلُوا فِي سَبِيلِ اللَّهِ فَلَن يُضِلَّ أَعْمَالَهُمْ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "قُتِلُوا", transliteration: "qutilū", meaning: { en: "are killed", ur: "مارے گئے" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ق-ت-ل" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَلَن", transliteration: "falan", meaning: { en: "never", ur: "تو ہرگز نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "emphatic negative" } },
      { arabic: "يُضِلَّ", transliteration: "yuḍilla", meaning: { en: "He will waste", ur: "ضائع کرے گا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ض-ل-ل", mood: "subjunctive" } },
      { arabic: "أَعْمَالَهُمْ", transliteration: "aʿmālahum", meaning: { en: "their deeds", ur: "ان کے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "سَيَهْدِيهِمْ وَيُصْلِحُ بَالَهُمْ",
    words: [
      { arabic: "سَيَهْدِيهِمْ", transliteration: "sayahdīhim", meaning: { en: "He will guide them", ur: "وہ ان کو ہدایت دے گا" }, pos: "FUT+V+PRON", posLabel: "FUT+V+PRON", grammar: { form: "I", root: "ه-د-ي" } },
      { arabic: "وَيُصْلِحُ", transliteration: "wayuṣliḥu", meaning: { en: "and amend", ur: "اور سنوارے گا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ل-ح" } },
      { arabic: "بَالَهُمْ", transliteration: "bālahum", meaning: { en: "their condition", ur: "ان کا حال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "وَيُدْخِلُهُمُ الْجَنَّةَ عَرَّفَهَا لَهُمْ",
    words: [
      { arabic: "وَيُدْخِلُهُمُ", transliteration: "wayudkhiluhumu", meaning: { en: "And He will admit them", ur: "اور وہ داخل کرے گا انہیں" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "د-خ-ل" } },
      { arabic: "الْجَنَّةَ", transliteration: "al-jannata", meaning: { en: "Paradise", ur: "جنت میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "عَرَّفَهَا", transliteration: "ʿarrafahā", meaning: { en: "which He has made known", ur: "جو اس نے بتائی" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ع-ر-ف" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "ان کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے ہو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "تَنصُرُوا", transliteration: "tanṣurū", meaning: { en: "you help", ur: "تم مدد کرو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ص-ر", mood: "jussive" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "يَنصُرْكُمْ", transliteration: "yanṣurkum", meaning: { en: "He will help you", ur: "وہ تمہاری مدد کرے گا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ن-ص-ر", mood: "jussive" } },
      { arabic: "وَيُثَبِّتْ", transliteration: "wayuthabbit", meaning: { en: "and make firm", ur: "اور جمائے گا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ث-ب-ت", mood: "jussive" } },
      { arabic: "أَقْدَامَكُمْ", transliteration: "aqdāmakum", meaning: { en: "your feet", ur: "تمہارے قدم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "وَالَّذِينَ كَفَرُوا فَتَعْسًا لَّهُمْ وَأَضَلَّ أَعْمَالَهُمْ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "فَتَعْسًا", transliteration: "fataʿsan", meaning: { en: "so destruction", ur: "تو ہلاکت ہے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ت-ع-س" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "وَأَضَلَّ", transliteration: "waʾaḍalla", meaning: { en: "and He has rendered astray", ur: "اور اس نے ضائع کیے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ض-ل-ل" } },
      { arabic: "أَعْمَالَهُمْ", transliteration: "aʿmālahum", meaning: { en: "their deeds", ur: "ان کے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ]
  }
};

export default TREEBANK_DATA;
