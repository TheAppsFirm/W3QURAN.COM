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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + مفعول به' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 3, to: 5, label: 'عطف' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + مفعول به' },
        { from: 14, to: 17, label: 'عطف' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'فعل + مفعول به' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + مفعول به' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + مفعول به' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "سَيَهْدِيهِمْ وَيُصْلِحُ بَالَهُمْ",
    words: [
      { arabic: "سَيَهْدِيهِمْ", transliteration: "sayahdīhim", meaning: { en: "He will guide them", ur: "وہ ان کو ہدایت دے گا" }, pos: "FUT+V+PRON", posLabel: "FUT+V+PRON", grammar: { form: "I", root: "ه-د-ي" } },
      { arabic: "وَيُصْلِحُ", transliteration: "wayuṣliḥu", meaning: { en: "and amend", ur: "اور سنوارے گا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ل-ح" } },
      { arabic: "بَالَهُمْ", transliteration: "bālahum", meaning: { en: "their condition", ur: "ان کا حال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "وَيُدْخِلُهُمُ الْجَنَّةَ عَرَّفَهَا لَهُمْ",
    words: [
      { arabic: "وَيُدْخِلُهُمُ", transliteration: "wayudkhiluhumu", meaning: { en: "And He will admit them", ur: "اور وہ داخل کرے گا انہیں" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "د-خ-ل" } },
      { arabic: "الْجَنَّةَ", transliteration: "al-jannata", meaning: { en: "Paradise", ur: "جنت میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "عَرَّفَهَا", transliteration: "ʿarrafahā", meaning: { en: "which He has made known", ur: "جو اس نے بتائی" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ع-ر-ف" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "ان کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 6, to: 9, label: 'عطف' }
      ]
    }
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
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 2, to: 5, label: 'عطف' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "ذَٰلِكَ بِأَنَّ اللَّهَ مَوْلَى الَّذِينَ آمَنُوا وَأَنَّ الْكَافِرِينَ لَا مَوْلَىٰ لَهُمْ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ اس لیے ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "بِأَنَّ", transliteration: "biʾanna", meaning: { en: "because", ur: "کیونکہ" }, pos: "P+CONJ", posLabel: "P+CONJ", grammar: { type: "causal" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مَوْلَى", transliteration: "mawlā", meaning: { en: "is the Protector", ur: "مولا ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ل-ي" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "of those who", ur: "ان لوگوں کا جو" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَأَنَّ", transliteration: "waʾanna", meaning: { en: "and that", ur: "اور کیونکہ" }, pos: "CONJ+CONJ", posLabel: "CONJ+CONJ", grammar: { type: "causal" } },
      { arabic: "الْكَافِرِينَ", transliteration: "al-kāfirīna", meaning: { en: "the disbelievers", ur: "کافروں کا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "no", ur: "کوئی نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "absolute negation" } },
      { arabic: "مَوْلَىٰ", transliteration: "mawlā", meaning: { en: "protector", ur: "مولا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ل-ي" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مبتدأ + خبر' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "إِنَّ اللَّهَ يُدْخِلُ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ وَالَّذِينَ كَفَرُوا يَتَمَتَّعُونَ وَيَأْكُلُونَ كَمَا تَأْكُلُ الْأَنْعَامُ وَالنَّارُ مَثْوًى لَّهُمْ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک" }, pos: "EMPH", posLabel: "EMPH", grammar: { type: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "يُدْخِلُ", transliteration: "yudkhilu", meaning: { en: "will admit", ur: "داخل کرے گا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "د-خ-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کو جو" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَعَمِلُوا", transliteration: "waʿamilū", meaning: { en: "and did", ur: "اور عمل کیے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "الصَّالِحَاتِ", transliteration: "al-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک اعمال" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ص-ل-ح" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "gardens", ur: "باغات میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "تَجْرِي", transliteration: "tajrī", meaning: { en: "flow", ur: "بہتی ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ر-ي" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "تَحْتِهَا", transliteration: "taḥtihā", meaning: { en: "beneath them", ur: "ان کے نیچے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "الْأَنْهَارُ", transliteration: "al-anhāru", meaning: { en: "the rivers", ur: "نہریں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "and those who", ur: "اور جو لوگ" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "يَتَمَتَّعُونَ", transliteration: "yatamattaʿūna", meaning: { en: "enjoy themselves", ur: "فائدہ اٹھاتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "م-ت-ع" } },
      { arabic: "وَيَأْكُلُونَ", transliteration: "wayaʾkulūna", meaning: { en: "and eat", ur: "اور کھاتے ہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "أ-ك-ل" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "as", ur: "جیسے" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "comparison" } },
      { arabic: "تَأْكُلُ", transliteration: "taʾkulu", meaning: { en: "eat", ur: "کھاتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ك-ل" } },
      { arabic: "الْأَنْعَامُ", transliteration: "al-anʿāmu", meaning: { en: "the cattle", ur: "جانور" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "وَالنَّارُ", transliteration: "wal-nāru", meaning: { en: "and the Fire", ur: "اور آگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "مَثْوًى", transliteration: "mathwan", meaning: { en: "is a residence", ur: "ٹھکانا ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ث-و-ي" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 3, to: 8, label: 'فعل + مفعول به' },
        { from: 9, to: 12, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'موصول + صلة' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'مبتدأ + خبر' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَكَأَيِّن مِّن قَرْيَةٍ هِيَ أَشَدُّ قُوَّةً مِّنَ قَرْيَتِكَ الَّتِي أَخْرَجَتْكَ أَهْلَكْنَاهُمْ فَلَا نَاصِرَ لَهُمْ",
    words: [
      { arabic: "وَكَأَيِّن", transliteration: "wakaʾayyin", meaning: { en: "And how many", ur: "اور کتنی" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { type: "numerical" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "a", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "قَرْيَةٍ", transliteration: "qaryatin", meaning: { en: "town", ur: "بستی" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-ر-ي" } },
      { arabic: "هِيَ", transliteration: "hiya", meaning: { en: "it was", ur: "وہ تھی" }, pos: "PRON", posLabel: "PRON", grammar: { type: "subject" } },
      { arabic: "أَشَدُّ", transliteration: "ashaddu", meaning: { en: "greater", ur: "زیادہ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ش-د-د" } },
      { arabic: "قُوَّةً", transliteration: "quwwatan", meaning: { en: "in strength", ur: "طاقت میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-ي" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "than", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "comparison" } },
      { arabic: "قَرْيَتِكَ", transliteration: "qaryatika", meaning: { en: "your town", ur: "تیری بستی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ق-ر-ي" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "which", ur: "جس نے" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَخْرَجَتْكَ", transliteration: "akhrajatka", meaning: { en: "expelled you", ur: "تجھے نکالا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "خ-ر-ج" } },
      { arabic: "أَهْلَكْنَاهُمْ", transliteration: "ahlaknāhum", meaning: { en: "We destroyed them", ur: "ہم نے ہلاک کیا ان کو" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ه-ل-ك" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "and no", ur: "تو کوئی نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "emphatic negative" } },
      { arabic: "نَاصِرَ", transliteration: "nāṣira", meaning: { en: "helper", ur: "مدد کرنے والا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ن-ص-ر" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "أَفَمَن كَانَ عَلَىٰ بَيِّنَةٍ مِّن رَّبِّهِ كَمَن زُيِّنَ لَهُ سُوءُ عَمَلِهِ وَاتَّبَعُوا أَهْوَاءَهُمْ",
    words: [
      { arabic: "أَفَمَن", transliteration: "afaman", meaning: { en: "Is then one who", ur: "کیا وہ جو" }, pos: "INTG+CONJ+REL", posLabel: "INTG+CONJ+REL", grammar: { type: "rhetorical" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "is", ur: "ہے" }, pos: "V", posLabel: "V", grammar: { type: "kāna", root: "ك-و-ن" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "manner" } },
      { arabic: "بَيِّنَةٍ", transliteration: "bayyinatin", meaning: { en: "clear evidence", ur: "واضح دلیل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ب-ي-ن" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "رَّبِّهِ", transliteration: "rabbihi", meaning: { en: "his Lord", ur: "اپنے رب" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "كَمَن", transliteration: "kaman", meaning: { en: "like one", ur: "اس جیسا جس کو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "comparison" } },
      { arabic: "زُيِّنَ", transliteration: "zuyyina", meaning: { en: "has been made attractive", ur: "خوشنما بنایا گیا" }, pos: "V", posLabel: "V", grammar: { form: "II", voice: "passive", root: "ز-ي-ن" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to him", ur: "اس کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "سُوءُ", transliteration: "sūʾu", meaning: { en: "the evil", ur: "برائی" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-و-أ" } },
      { arabic: "عَمَلِهِ", transliteration: "ʿamalihi", meaning: { en: "of his deed", ur: "اس کے عمل کی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ع-م-ل" } },
      { arabic: "وَاتَّبَعُوا", transliteration: "wattabaʿū", meaning: { en: "and they followed", ur: "اور پیروی کی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "أَهْوَاءَهُمْ", transliteration: "ahwāʾahum", meaning: { en: "their desires", ur: "اپنی خواہشات کی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + مفعول به' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "مَّثَلُ الْجَنَّةِ الَّتِي وُعِدَ الْمُتَّقُونَ فِيهَا أَنْهَارٌ مِّن مَّاءٍ غَيْرِ آسِنٍ وَأَنْهَارٌ مِّن لَّبَنٍ لَّمْ يَتَغَيَّرْ طَعْمُهُ وَأَنْهَارٌ مِّنْ خَمْرٍ لَّذَّةٍ لِّلشَّارِبِينَ وَأَنْهَارٌ مِّنْ عَسَلٍ مُّصَفًّى",
    words: [
      { arabic: "مَّثَلُ", transliteration: "mathalu", meaning: { en: "Description", ur: "مثال" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-ث-ل" } },
      { arabic: "الْجَنَّةِ", transliteration: "al-jannati", meaning: { en: "of Paradise", ur: "جنت کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "which", ur: "جس کا" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "وُعِدَ", transliteration: "wuʿida", meaning: { en: "is promised", ur: "وعدہ دیا گیا" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ع-د" } },
      { arabic: "الْمُتَّقُونَ", transliteration: "al-muttaqūna", meaning: { en: "the righteous", ur: "متقیوں سے" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "و-ق-ي" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein are", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "أَنْهَارٌ", transliteration: "anhārun", meaning: { en: "rivers", ur: "نہریں ہیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "کی" }, pos: "P", posLabel: "P", grammar: { role: "description" } },
      { arabic: "مَّاءٍ", transliteration: "māʾin", meaning: { en: "water", ur: "پانی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "غَيْرِ", transliteration: "ghayri", meaning: { en: "not", ur: "بغیر" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "آسِنٍ", transliteration: "āsinin", meaning: { en: "stale", ur: "بدبو" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "أ-س-ن" } },
      { arabic: "وَأَنْهَارٌ", transliteration: "waʾanhārun", meaning: { en: "and rivers", ur: "اور نہریں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "کی" }, pos: "P", posLabel: "P", grammar: { role: "description" } },
      { arabic: "لَّبَنٍ", transliteration: "labanin", meaning: { en: "milk", ur: "دودھ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive negative" } },
      { arabic: "يَتَغَيَّرْ", transliteration: "yataghayyar", meaning: { en: "changed", ur: "بدلا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "غ-ي-ر", mood: "jussive" } },
      { arabic: "طَعْمُهُ", transliteration: "ṭaʿmuhu", meaning: { en: "its taste", ur: "اس کا مزہ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative" } },
      { arabic: "وَأَنْهَارٌ", transliteration: "waʾanhārun", meaning: { en: "and rivers", ur: "اور نہریں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "کی" }, pos: "P", posLabel: "P", grammar: { role: "description" } },
      { arabic: "خَمْرٍ", transliteration: "khamrin", meaning: { en: "wine", ur: "شراب" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لَّذَّةٍ", transliteration: "ladhdhatin", meaning: { en: "delicious", ur: "لذیذ" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-ذ-ذ" } },
      { arabic: "لِّلشَّارِبِينَ", transliteration: "lil-shāribīna", meaning: { en: "for the drinkers", ur: "پینے والوں کے لیے" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَأَنْهَارٌ", transliteration: "waʾanhārun", meaning: { en: "and rivers", ur: "اور نہریں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "کی" }, pos: "P", posLabel: "P", grammar: { role: "description" } },
      { arabic: "عَسَلٍ", transliteration: "ʿasalin", meaning: { en: "honey", ur: "شہد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مُّصَفًّى", transliteration: "muṣaffan", meaning: { en: "purified", ur: "صاف" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ص-ف-و" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "وَمِنْهُم مَّن يَسْتَمِعُ إِلَيْكَ حَتَّىٰ إِذَا خَرَجُوا مِنْ عِندِكَ قَالُوا لِلَّذِينَ أُوتُوا الْعِلْمَ مَاذَا قَالَ آنِفًا",
    words: [
      { arabic: "وَمِنْهُم", transliteration: "waminhum", meaning: { en: "And among them", ur: "اور ان میں سے" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "partitive" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "are those who", ur: "ایسے ہیں جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَسْتَمِعُ", transliteration: "yastamiʿu", meaning: { en: "listen", ur: "سنتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "س-م-ع" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تمہاری بات" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "یہاں تک کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "purpose" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "خَرَجُوا", transliteration: "kharajū", meaning: { en: "they leave", ur: "نکلتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ر-ج" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "عِندِكَ", transliteration: "ʿindika", meaning: { en: "your presence", ur: "تمہارے پاس" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "they say", ur: "وہ کہتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "ان سے جنہیں" }, pos: "P+REL", posLabel: "P+REL", grammar: { role: "dative" } },
      { arabic: "أُوتُوا", transliteration: "ūtū", meaning: { en: "were given", ur: "دیا گیا" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "أ-ت-ي" } },
      { arabic: "الْعِلْمَ", transliteration: "al-ʿilma", meaning: { en: "knowledge", ur: "علم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مَاذَا", transliteration: "mādhā", meaning: { en: "What", ur: "کیا" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "has he said", ur: "کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "آنِفًا", transliteration: "ānifan", meaning: { en: "just now", ur: "ابھی" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ن-ف" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'فعل + مفعول به' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "وَالَّذِينَ اهْتَدَوْا زَادَهُمْ هُدًى وَآتَاهُمْ تَقْوَاهُمْ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جنہوں نے" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "اهْتَدَوْا", transliteration: "ihtadaw", meaning: { en: "are guided", ur: "ہدایت پائی" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ه-د-ي" } },
      { arabic: "زَادَهُمْ", transliteration: "zādahum", meaning: { en: "He increased them", ur: "ان کو اور بڑھایا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ز-ي-د" } },
      { arabic: "هُدًى", transliteration: "hudan", meaning: { en: "in guidance", ur: "ہدایت میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ه-د-ي" } },
      { arabic: "وَآتَاهُمْ", transliteration: "waʾātāhum", meaning: { en: "and gave them", ur: "اور ان کو عطا کیا" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "تَقْوَاهُمْ", transliteration: "taqwāhum", meaning: { en: "their righteousness", ur: "ان کا تقویٰ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "و-ق-ي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "فَهَلْ يَنظُرُونَ إِلَّا السَّاعَةَ أَن تَأْتِيَهُم بَغْتَةً فَقَدْ جَاءَ أَشْرَاطُهَا فَأَنَّىٰ لَهُمْ إِذَا جَاءَتْهُمْ ذِكْرَاهُمْ",
    words: [
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "Then do", ur: "کیا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "rhetorical" } },
      { arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "they await", ur: "یہ انتظار کرتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ظ-ر" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "السَّاعَةَ", transliteration: "al-sāʿata", meaning: { en: "the Hour", ur: "قیامت کے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "تَأْتِيَهُم", transliteration: "taʾtiyahum", meaning: { en: "it should come upon them", ur: "ان پر آئے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "أ-ت-ي", mood: "subjunctive" } },
      { arabic: "بَغْتَةً", transliteration: "baghtatan", meaning: { en: "suddenly", ur: "اچانک" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فَقَدْ", transliteration: "faqad", meaning: { en: "for already", ur: "تو بے شک" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "جَاءَ", transliteration: "jāʾa", meaning: { en: "have come", ur: "آ چکی ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "أَشْرَاطُهَا", transliteration: "ashrāṭuhā", meaning: { en: "its signs", ur: "اس کی نشانیاں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", number: "plural" } },
      { arabic: "فَأَنَّىٰ", transliteration: "faʾannā", meaning: { en: "then how", ur: "تو کہاں سے" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "جَاءَتْهُمْ", transliteration: "jāʾathum", meaning: { en: "it comes to them", ur: "ان کے پاس آئے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "ذِكْرَاهُمْ", transliteration: "dhikrāhum", meaning: { en: "their reminder", ur: "ان کی یاد" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ذ-ك-ر" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاسْتَغْفِرْ لِذَنبِكَ وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
    words: [
      { arabic: "فَاعْلَمْ", transliteration: "faʿlam", meaning: { en: "So know", ur: "پس جان لو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ل-م", mood: "imperative" } },
      { arabic: "أَنَّهُ", transliteration: "annahu", meaning: { en: "that", ur: "کہ" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subordinating" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "there is no", ur: "کوئی نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "absolute negation" } },
      { arabic: "إِلَٰهَ", transliteration: "ilāha", meaning: { en: "deity", ur: "معبود" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَاسْتَغْفِرْ", transliteration: "wastaghfir", meaning: { en: "and ask forgiveness", ur: "اور معافی مانگو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "غ-ف-ر", mood: "imperative" } },
      { arabic: "لِذَنبِكَ", transliteration: "lidhanbika", meaning: { en: "for your sin", ur: "اپنے گناہ کے لیے" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ذ-ن-ب" } },
      { arabic: "وَلِلْمُؤْمِنِينَ", transliteration: "walilmuʾminīna", meaning: { en: "and for the believing men", ur: "اور مومن مردوں کے لیے" }, pos: "CONJ+P+AP", posLabel: "CONJ+P+AP", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْمُؤْمِنَاتِ", transliteration: "wal-muʾmināti", meaning: { en: "and the believing women", ur: "اور مومن عورتوں" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + اسم' },
        { from: 5, to: 6, label: 'استثناء' },
        { from: 1, to: 7, label: 'عطف' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَيَقُولُ الَّذِينَ آمَنُوا لَوْلَا نُزِّلَتْ سُورَةٌ فَإِذَا أُنزِلَتْ سُورَةٌ مُّحْكَمَةٌ وَذُكِرَ فِيهَا الْقِتَالُ رَأَيْتَ الَّذِينَ فِي قُلُوبِهِم مَّرَضٌ يَنظُرُونَ إِلَيْكَ نَظَرَ الْمَغْشِيِّ عَلَيْهِ مِنَ الْمَوْتِ",
    words: [
      { arabic: "وَيَقُولُ", transliteration: "wayaqūlu", meaning: { en: "And say", ur: "اور کہتے ہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "وہ جو" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "لَوْلَا", transliteration: "lawlā", meaning: { en: "Why is not", ur: "کیوں نہیں" }, pos: "PART", posLabel: "PART", grammar: { type: "exhortation" } },
      { arabic: "نُزِّلَتْ", transliteration: "nuzzilat", meaning: { en: "revealed", ur: "اتاری جاتی" }, pos: "V", posLabel: "V", grammar: { form: "II", voice: "passive", root: "ن-ز-ل" } },
      { arabic: "سُورَةٌ", transliteration: "sūratun", meaning: { en: "a surah", ur: "سورت" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "But when", ur: "پھر جب" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "temporal" } },
      { arabic: "أُنزِلَتْ", transliteration: "unzilat", meaning: { en: "is revealed", ur: "اتاری جاتی ہے" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "ن-ز-ل" } },
      { arabic: "سُورَةٌ", transliteration: "sūratun", meaning: { en: "a surah", ur: "سورت" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مُّحْكَمَةٌ", transliteration: "muḥkamatun", meaning: { en: "precise", ur: "واضح" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ح-ك-م" } },
      { arabic: "وَذُكِرَ", transliteration: "wadhukira", meaning: { en: "and mentioned", ur: "اور ذکر ہو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", voice: "passive", root: "ذ-ك-ر" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "الْقِتَالُ", transliteration: "al-qitālu", meaning: { en: "fighting", ur: "جہاد کا" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-ت-ل" } },
      { arabic: "رَأَيْتَ", transliteration: "raʾayta", meaning: { en: "you see", ur: "تو دیکھے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کو جن" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِهِم", transliteration: "qulūbihim", meaning: { en: "their hearts", ur: "ان کے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "مَّرَضٌ", transliteration: "maraḍun", meaning: { en: "is disease", ur: "بیماری ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-ر-ض" } },
      { arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "looking", ur: "دیکھتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ظ-ر" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "at you", ur: "تمہاری طرف" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "نَظَرَ", transliteration: "naẓara", meaning: { en: "the look", ur: "دیکھنے کی طرح" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ظ-ر" } },
      { arabic: "الْمَغْشِيِّ", transliteration: "al-maghshiyyi", meaning: { en: "of one overcome", ur: "غشی" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "غ-ش-ي" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "upon him", ur: "اس پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "affected" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "cause" } },
      { arabic: "الْمَوْتِ", transliteration: "al-mawti", meaning: { en: "death", ur: "موت" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-و-ت" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصوف + صفت' },
        { from: 11, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + مفعول به' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'مضاف + مضاف إليه' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "طَاعَةٌ وَقَوْلٌ مَّعْرُوفٌ فَإِذَا عَزَمَ الْأَمْرُ فَلَوْ صَدَقُوا اللَّهَ لَكَانَ خَيْرًا لَّهُمْ",
    words: [
      { arabic: "طَاعَةٌ", transliteration: "ṭāʿatun", meaning: { en: "Obedience", ur: "اطاعت" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ط-و-ع" } },
      { arabic: "وَقَوْلٌ", transliteration: "waqawlun", meaning: { en: "and good words", ur: "اور اچھی بات" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ق-و-ل" } },
      { arabic: "مَّعْرُوفٌ", transliteration: "maʿrūfun", meaning: { en: "appropriate", ur: "بھلی" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ع-ر-ف" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "but when", ur: "پھر جب" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "temporal" } },
      { arabic: "عَزَمَ", transliteration: "ʿazama", meaning: { en: "is determined", ur: "فیصلہ ہو گیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ز-م" } },
      { arabic: "الْأَمْرُ", transliteration: "al-amru", meaning: { en: "the matter", ur: "معاملہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "فَلَوْ", transliteration: "falaw", meaning: { en: "then if", ur: "تو اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "hypothetical" } },
      { arabic: "صَدَقُوا", transliteration: "ṣadaqū", meaning: { en: "they had been true", ur: "سچے ہوتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-د-ق" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "to Allah", ur: "اللہ سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لَكَانَ", transliteration: "lakāna", meaning: { en: "it would have been", ur: "تو ہوتا" }, pos: "PART+V", posLabel: "PART+V", grammar: { type: "kāna", root: "ك-و-ن" } },
      { arabic: "خَيْرًا", transliteration: "khayran", meaning: { en: "better", ur: "بہتر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "فَهَلْ عَسَيْتُمْ إِن تَوَلَّيْتُمْ أَن تُفْسِدُوا فِي الْأَرْضِ وَتُقَطِّعُوا أَرْحَامَكُمْ",
    words: [
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "Then would you perhaps", ur: "تو کیا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "rhetorical" } },
      { arabic: "عَسَيْتُمْ", transliteration: "ʿasaytum", meaning: { en: "you would", ur: "تم یہ کرو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-س-ي" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "تَوَلَّيْتُمْ", transliteration: "tawallaytum", meaning: { en: "you turned away", ur: "تم پھر جاؤ" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "و-ل-ي" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "تُفْسِدُوا", transliteration: "tufsidū", meaning: { en: "you would cause corruption", ur: "فساد کرو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ف-س-د", mood: "subjunctive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَتُقَطِّعُوا", transliteration: "watuqaṭṭiʿū", meaning: { en: "and sever", ur: "اور توڑ ڈالو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ق-ط-ع", mood: "subjunctive" } },
      { arabic: "أَرْحَامَكُمْ", transliteration: "arḥāmakum", meaning: { en: "your ties of kinship", ur: "اپنی رشتہ داریاں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 6, to: 9, label: 'عطف' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "أُولَٰئِكَ الَّذِينَ لَعَنَهُمُ اللَّهُ فَأَصَمَّهُمْ وَأَعْمَىٰ أَبْصَارَهُمْ",
    words: [
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "Those", ur: "یہ وہ لوگ ہیں" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "whom", ur: "جن پر" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "لَعَنَهُمُ", transliteration: "laʿanahumu", meaning: { en: "cursed them", ur: "لعنت کی" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ل-ع-ن" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "فَأَصَمَّهُمْ", transliteration: "faʾaṣammahum", meaning: { en: "and made them deaf", ur: "تو بہرا کر دیا ان کو" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "ص-م-م" } },
      { arabic: "وَأَعْمَىٰ", transliteration: "waʾaʿmā", meaning: { en: "and blinded", ur: "اور اندھا کر دیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ع-م-ي" } },
      { arabic: "أَبْصَارَهُمْ", transliteration: "abṣārahum", meaning: { en: "their vision", ur: "ان کی آنکھوں کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا",
    words: [
      { arabic: "أَفَلَا", transliteration: "afalā", meaning: { en: "Then do they not", ur: "کیا نہیں" }, pos: "INTG+CONJ+NEG", posLabel: "INTG+CONJ+NEG", grammar: { type: "rhetorical" } },
      { arabic: "يَتَدَبَّرُونَ", transliteration: "yatadabbarūna", meaning: { en: "reflect upon", ur: "غور کرتے" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "د-ب-ر" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن پر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبٍ", transliteration: "qulūbin", meaning: { en: "hearts", ur: "دلوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "أَقْفَالُهَا", transliteration: "aqfāluhā", meaning: { en: "are their locks", ur: "ان کے تالے ہیں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", number: "plural", root: "ق-ف-ل" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "إِنَّ الَّذِينَ ارْتَدُّوا عَلَىٰ أَدْبَارِهِم مِّن بَعْدِ مَا تَبَيَّنَ لَهُمُ الْهُدَى الشَّيْطَانُ سَوَّلَ لَهُمْ وَأَمْلَىٰ لَهُمْ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک" }, pos: "EMPH", posLabel: "EMPH", grammar: { type: "emphasis" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "ارْتَدُّوا", transliteration: "irtaddū", meaning: { en: "turned back", ur: "پھر گئے" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ر-د-د" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "manner" } },
      { arabic: "أَدْبَارِهِم", transliteration: "adbārihim", meaning: { en: "their backs", ur: "اپنی پیٹھوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "after", ur: "بعد" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَبَيَّنَ", transliteration: "tabayyana", meaning: { en: "became clear", ur: "واضح ہوئی" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ب-ي-ن" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "to them", ur: "ان پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "الْهُدَى", transliteration: "al-hudā", meaning: { en: "the guidance", ur: "ہدایت" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ه-د-ي" } },
      { arabic: "الشَّيْطَانُ", transliteration: "al-shayṭānu", meaning: { en: "Satan", ur: "شیطان نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "سَوَّلَ", transliteration: "sawwala", meaning: { en: "enticed", ur: "بہکایا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "س-و-ل" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "وَأَمْلَىٰ", transliteration: "waʾamlā", meaning: { en: "and prolonged hope", ur: "اور لمبی آس دلائی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "م-ل-ي" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 9, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "ذَٰلِكَ بِأَنَّهُمْ قَالُوا لِلَّذِينَ كَرِهُوا مَا نَزَّلَ اللَّهُ سَنُطِيعُكُمْ فِي بَعْضِ الْأَمْرِ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ اس لیے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "بِأَنَّهُمْ", transliteration: "biʾannahum", meaning: { en: "because they", ur: "کیونکہ انہوں نے" }, pos: "P+CONJ+PRON", posLabel: "P+CONJ+PRON", grammar: { type: "causal" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "said", ur: "کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "ان سے جنہوں نے" }, pos: "P+REL", posLabel: "P+REL", grammar: { role: "dative" } },
      { arabic: "كَرِهُوا", transliteration: "karihū", meaning: { en: "disliked", ur: "ناپسند کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ر-ه" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "نَزَّلَ", transliteration: "nazzala", meaning: { en: "revealed", ur: "اتارا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ن-ز-ل" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "سَنُطِيعُكُمْ", transliteration: "sanuṭīʿukum", meaning: { en: "We will obey you", ur: "ہم تمہاری اطاعت کریں گے" }, pos: "FUT+V+PRON", posLabel: "FUT+V+PRON", grammar: { form: "IV", root: "ط-و-ع" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "بَعْضِ", transliteration: "baʿḍi", meaning: { en: "some", ur: "بعض" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْأَمْرِ", transliteration: "al-amri", meaning: { en: "of the matter", ur: "معاملات" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "فَكَيْفَ إِذَا تَوَفَّتْهُمُ الْمَلَائِكَةُ يَضْرِبُونَ وُجُوهَهُمْ وَأَدْبَارَهُمْ",
    words: [
      { arabic: "فَكَيْفَ", transliteration: "fakayfa", meaning: { en: "Then how", ur: "پھر کیسا ہوگا" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "تَوَفَّتْهُمُ", transliteration: "tawaffathumu", meaning: { en: "take them in death", ur: "ان کی جان نکالیں گے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "V", root: "و-ف-ي" } },
      { arabic: "الْمَلَائِكَةُ", transliteration: "al-malāʾikatu", meaning: { en: "the angels", ur: "فرشتے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "يَضْرِبُونَ", transliteration: "yaḍribūna", meaning: { en: "striking", ur: "مارتے ہوئے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ض-ر-ب" } },
      { arabic: "وُجُوهَهُمْ", transliteration: "wujūhahum", meaning: { en: "their faces", ur: "ان کے چہروں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَأَدْبَارَهُمْ", transliteration: "waʾadbārahum", meaning: { en: "and their backs", ur: "اور پیٹھوں پر" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'عطف' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "ذَٰلِكَ بِأَنَّهُمُ اتَّبَعُوا مَا أَسْخَطَ اللَّهَ وَكَرِهُوا رِضْوَانَهُ فَأَحْبَطَ أَعْمَالَهُمْ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ اس لیے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "بِأَنَّهُمُ", transliteration: "biʾannahumu", meaning: { en: "because they", ur: "کیونکہ انہوں نے" }, pos: "P+CONJ+PRON", posLabel: "P+CONJ+PRON", grammar: { type: "causal" } },
      { arabic: "اتَّبَعُوا", transliteration: "ittabaʿū", meaning: { en: "followed", ur: "پیروی کی" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "اس چیز کی جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَسْخَطَ", transliteration: "askhaṭa", meaning: { en: "angered", ur: "ناراض کرے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "س-خ-ط" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَكَرِهُوا", transliteration: "wakarihū", meaning: { en: "and disliked", ur: "اور ناپسند کیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-ر-ه" } },
      { arabic: "رِضْوَانَهُ", transliteration: "riḍwānahu", meaning: { en: "His pleasure", ur: "اس کی رضا کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ض-و" } },
      { arabic: "فَأَحْبَطَ", transliteration: "faʾaḥbaṭa", meaning: { en: "so He rendered worthless", ur: "تو اکارت کر دیے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ح-ب-ط" } },
      { arabic: "أَعْمَالَهُمْ", transliteration: "aʿmālahum", meaning: { en: "their deeds", ur: "ان کے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'فعل + مفعول به' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "أَمْ حَسِبَ الَّذِينَ فِي قُلُوبِهِم مَّرَضٌ أَن لَّن يُخْرِجَ اللَّهُ أَضْغَانَهُمْ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "کیا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "حَسِبَ", transliteration: "ḥasiba", meaning: { en: "think", ur: "سمجھتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ح-س-ب" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "وہ جن" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِهِم", transliteration: "qulūbihim", meaning: { en: "their hearts", ur: "ان کے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "مَّرَضٌ", transliteration: "maraḍun", meaning: { en: "is disease", ur: "بیماری ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-ر-ض" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "لَّن", transliteration: "lan", meaning: { en: "never", ur: "ہرگز نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "emphatic negative" } },
      { arabic: "يُخْرِجَ", transliteration: "yukhrija", meaning: { en: "will bring out", ur: "نکالے گا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "خ-ر-ج", mood: "subjunctive" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "أَضْغَانَهُمْ", transliteration: "aḍghānahum", meaning: { en: "their resentments", ur: "ان کے کینے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 9, to: 11, label: 'فعل + مفعول به' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "وَلَوْ نَشَاءُ لَأَرَيْنَاكَهُمْ فَلَعَرَفْتَهُم بِسِيمَاهُمْ وَلَتَعْرِفَنَّهُمْ فِي لَحْنِ الْقَوْلِ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "hypothetical" } },
      { arabic: "نَشَاءُ", transliteration: "nashāʾu", meaning: { en: "We willed", ur: "ہم چاہتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "لَأَرَيْنَاكَهُمْ", transliteration: "laʾaraynākahum", meaning: { en: "We could show them to you", ur: "تو ہم دکھا دیتے تجھے" }, pos: "PART+V+PRON", posLabel: "PART+V+PRON", grammar: { form: "IV", root: "ر-أ-ي" } },
      { arabic: "فَلَعَرَفْتَهُم", transliteration: "falaʿaraftahum", meaning: { en: "and you would know them", ur: "تو تو پہچان لیتا انہیں" }, pos: "CONJ+PART+V+PRON", posLabel: "CONJ+PART+V+PRON", grammar: { form: "I", root: "ع-ر-ف" } },
      { arabic: "بِسِيمَاهُمْ", transliteration: "bisīmāhum", meaning: { en: "by their marks", ur: "ان کی نشانیوں سے" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَلَتَعْرِفَنَّهُمْ", transliteration: "walataʿrifannahum", meaning: { en: "and you will surely know them", ur: "اور تو ضرور پہچانے گا انہیں" }, pos: "CONJ+PART+V+PRON", posLabel: "CONJ+PART+V+PRON", grammar: { form: "I", root: "ع-ر-ف" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "by", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "manner" } },
      { arabic: "لَحْنِ", transliteration: "laḥni", meaning: { en: "the tone", ur: "لہجے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ل-ح-ن" } },
      { arabic: "الْقَوْلِ", transliteration: "al-qawli", meaning: { en: "of speech", ur: "بات کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-و-ل" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "وَلَنَبْلُوَنَّكُمْ حَتَّىٰ نَعْلَمَ الْمُجَاهِدِينَ مِنكُمْ وَالصَّابِرِينَ وَنَبْلُوَ أَخْبَارَكُمْ",
    words: [
      { arabic: "وَلَنَبْلُوَنَّكُمْ", transliteration: "walanabluwannakum", meaning: { en: "And We will surely test you", ur: "اور ہم ضرور آزمائیں گے تمہیں" }, pos: "CONJ+PART+V+PRON", posLabel: "CONJ+PART+V+PRON", grammar: { form: "I", root: "ب-ل-و" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "یہاں تک کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "purpose" } },
      { arabic: "نَعْلَمَ", transliteration: "naʿlama", meaning: { en: "We make evident", ur: "ہم جان لیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م", mood: "subjunctive" } },
      { arabic: "الْمُجَاهِدِينَ", transliteration: "al-mujāhidīna", meaning: { en: "those who strive", ur: "مجاہدوں کو" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ج-ه-د" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "among you", ur: "تم میں سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "partitive" } },
      { arabic: "وَالصَّابِرِينَ", transliteration: "wal-ṣābirīna", meaning: { en: "and the patient", ur: "اور صبر کرنے والوں" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", number: "plural", root: "ص-ب-ر" } },
      { arabic: "وَنَبْلُوَ", transliteration: "wanabluwa", meaning: { en: "and test", ur: "اور آزمائیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ب-ل-و", mood: "subjunctive" } },
      { arabic: "أَخْبَارَكُمْ", transliteration: "akhbārakum", meaning: { en: "your affairs", ur: "تمہاری خبروں کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 6, label: 'عطف' },
        { from: 7, to: 8, label: 'فعل + مفعول به' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "إِنَّ الَّذِينَ كَفَرُوا وَصَدُّوا عَن سَبِيلِ اللَّهِ وَشَاقُّوا الرَّسُولَ مِن بَعْدِ مَا تَبَيَّنَ لَهُمُ الْهُدَىٰ لَن يَضُرُّوا اللَّهَ شَيْئًا وَسَيُحْبِطُ أَعْمَالَهُمْ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک" }, pos: "EMPH", posLabel: "EMPH", grammar: { type: "emphasis" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "وَصَدُّوا", transliteration: "waṣaddū", meaning: { en: "and averted", ur: "اور روکا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-د-د" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَشَاقُّوا", transliteration: "washāqqū", meaning: { en: "and opposed", ur: "اور مخالفت کی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "III", root: "ش-ق-ق" } },
      { arabic: "الرَّسُولَ", transliteration: "al-rasūla", meaning: { en: "the Messenger", ur: "رسول کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "کے بعد" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "اس کے جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَبَيَّنَ", transliteration: "tabayyana", meaning: { en: "had become clear", ur: "واضح ہوئی" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ب-ي-ن" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "to them", ur: "ان پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "الْهُدَىٰ", transliteration: "al-hudā", meaning: { en: "the guidance", ur: "ہدایت" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ه-د-ي" } },
      { arabic: "لَن", transliteration: "lan", meaning: { en: "never", ur: "ہرگز نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "emphatic negative" } },
      { arabic: "يَضُرُّوا", transliteration: "yaḍurrū", meaning: { en: "they will harm", ur: "نقصان پہنچائیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ض-ر-ر", mood: "subjunctive" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "at all", ur: "کچھ بھی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَسَيُحْبِطُ", transliteration: "wasayuḥbiṭu", meaning: { en: "and He will render worthless", ur: "اور وہ ضائع کر دے گا" }, pos: "CONJ+FUT+V", posLabel: "CONJ+FUT+V", grammar: { form: "IV", root: "ح-ب-ط" } },
      { arabic: "أَعْمَالَهُمْ", transliteration: "aʿmālahum", meaning: { en: "their deeds", ur: "ان کے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + مفعول به' },
        { from: 13, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + مفعول به' },
        { from: 20, to: 21, label: 'فعل + مفعول به' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَلَا تُبْطِلُوا أَعْمَالَكُمْ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "you", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { type: "vocative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے ہو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "أَطِيعُوا", transliteration: "aṭīʿū", meaning: { en: "obey", ur: "اطاعت کرو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ط-و-ع", mood: "imperative" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَأَطِيعُوا", transliteration: "waʾaṭīʿū", meaning: { en: "and obey", ur: "اور اطاعت کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ط-و-ع", mood: "imperative" } },
      { arabic: "الرَّسُولَ", transliteration: "al-rasūla", meaning: { en: "the Messenger", ur: "رسول کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور مت" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تُبْطِلُوا", transliteration: "tubṭilū", meaning: { en: "invalidate", ur: "ضائع کرو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ب-ط-ل", mood: "jussive" } },
      { arabic: "أَعْمَالَكُمْ", transliteration: "aʿmālakum", meaning: { en: "your deeds", ur: "اپنے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'فعل + مفعول به' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "إِنَّ الَّذِينَ كَفَرُوا وَصَدُّوا عَن سَبِيلِ اللَّهِ ثُمَّ مَاتُوا وَهُمْ كُفَّارٌ فَلَن يَغْفِرَ اللَّهُ لَهُمْ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک" }, pos: "EMPH", posLabel: "EMPH", grammar: { type: "emphasis" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "وَصَدُّوا", transliteration: "waṣaddū", meaning: { en: "and averted", ur: "اور روکا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-د-د" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "مَاتُوا", transliteration: "mātū", meaning: { en: "died", ur: "مر گئے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-و-ت" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "while they were", ur: "اور وہ تھے" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "circumstantial" } },
      { arabic: "كُفَّارٌ", transliteration: "kuffārun", meaning: { en: "disbelievers", ur: "کافر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "فَلَن", transliteration: "falan", meaning: { en: "then never", ur: "تو ہرگز نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "emphatic negative" } },
      { arabic: "يَغْفِرَ", transliteration: "yaghfira", meaning: { en: "will forgive", ur: "معاف کرے گا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ف-ر", mood: "subjunctive" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "them", ur: "ان کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "فَلَا تَهِنُوا وَتَدْعُوا إِلَى السَّلْمِ وَأَنتُمُ الْأَعْلَوْنَ وَاللَّهُ مَعَكُمْ وَلَن يَتِرَكُمْ أَعْمَالَكُمْ",
    words: [
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "So do not", ur: "پس مت" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibition" } },
      { arabic: "تَهِنُوا", transliteration: "tahinū", meaning: { en: "weaken", ur: "کمزور پڑو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ه-ن", mood: "jussive" } },
      { arabic: "وَتَدْعُوا", transliteration: "watadʿū", meaning: { en: "and call", ur: "اور پکارو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "د-ع-و", mood: "jussive" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "for", ur: "کی طرف" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "السَّلْمِ", transliteration: "al-salmi", meaning: { en: "peace", ur: "صلح" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَأَنتُمُ", transliteration: "waʾantumu", meaning: { en: "while you are", ur: "اور تم ہو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "circumstantial" } },
      { arabic: "الْأَعْلَوْنَ", transliteration: "al-aʿlawna", meaning: { en: "the superior", ur: "غالب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", number: "plural", root: "ع-ل-و" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "and Allah is", ur: "اور اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "مَعَكُمْ", transliteration: "maʿakum", meaning: { en: "with you", ur: "تمہارے ساتھ ہے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "accompaniment" } },
      { arabic: "وَلَن", transliteration: "walan", meaning: { en: "and He will never", ur: "اور ہرگز نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "emphatic negative" } },
      { arabic: "يَتِرَكُمْ", transliteration: "yatirakum", meaning: { en: "deprive you", ur: "گھٹائے گا تم کو" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "و-ت-ر", mood: "subjunctive" } },
      { arabic: "أَعْمَالَكُمْ", transliteration: "aʿmālakum", meaning: { en: "your deeds", ur: "تمہارے اعمال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 11, to: 12, label: 'فعل + مفعول به' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "إِنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَإِن تُؤْمِنُوا وَتَتَّقُوا يُؤْتِكُمْ أُجُورَكُمْ وَلَا يَسْأَلْكُمْ أَمْوَالَكُمْ",
    words: [
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "بس" }, pos: "RESTR", posLabel: "RESTR", grammar: { type: "restriction" } },
      { arabic: "الْحَيَاةُ", transliteration: "al-ḥayātu", meaning: { en: "the life", ur: "زندگی" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of this world", ur: "دنیا کی" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "لَعِبٌ", transliteration: "laʿibun", meaning: { en: "is play", ur: "کھیل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ل-ع-ب" } },
      { arabic: "وَلَهْوٌ", transliteration: "walahwun", meaning: { en: "and amusement", ur: "اور تماشا ہے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ل-ه-و" } },
      { arabic: "وَإِن", transliteration: "waʾin", meaning: { en: "And if", ur: "اور اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "تُؤْمِنُوا", transliteration: "tuʾminū", meaning: { en: "you believe", ur: "تم ایمان لاؤ" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن", mood: "jussive" } },
      { arabic: "وَتَتَّقُوا", transliteration: "watattaqū", meaning: { en: "and fear Allah", ur: "اور تقویٰ اختیار کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "و-ق-ي", mood: "jussive" } },
      { arabic: "يُؤْتِكُمْ", transliteration: "yuʾtikum", meaning: { en: "He will give you", ur: "وہ تمہیں دے گا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "أ-ت-ي", mood: "jussive" } },
      { arabic: "أُجُورَكُمْ", transliteration: "ujūrakum", meaning: { en: "your rewards", ur: "تمہارے اجر" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "يَسْأَلْكُمْ", transliteration: "yasʾalkum", meaning: { en: "He will ask you", ur: "تم سے مانگے گا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "س-أ-ل", mood: "jussive" } },
      { arabic: "أَمْوَالَكُمْ", transliteration: "amwālakum", meaning: { en: "your wealth", ur: "تمہارے مال" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 2, to: 4, label: 'مبتدأ + خبر' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 12, to: 13, label: 'فعل + مفعول به' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "إِن يَسْأَلْكُمُوهَا فَيُحْفِكُمْ تَبْخَلُوا وَيُخْرِجْ أَضْغَانَكُمْ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "يَسْأَلْكُمُوهَا", transliteration: "yasʾalkumūhā", meaning: { en: "He should ask you for it", ur: "وہ تم سے مانگے اسے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "س-أ-ل", mood: "jussive" } },
      { arabic: "فَيُحْفِكُمْ", transliteration: "fayuḥfikum", meaning: { en: "and press you", ur: "اور تنگ کرے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "ح-ف-ي" } },
      { arabic: "تَبْخَلُوا", transliteration: "tabkhalū", meaning: { en: "you would withhold", ur: "تم بخل کرو گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-خ-ل", mood: "jussive" } },
      { arabic: "وَيُخْرِجْ", transliteration: "wayukhrij", meaning: { en: "and He would expose", ur: "اور نکال دے گا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "خ-ر-ج", mood: "jussive" } },
      { arabic: "أَضْغَانَكُمْ", transliteration: "aḍghānakum", meaning: { en: "your resentments", ur: "تمہارے کینے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + مفعول به' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "هَا أَنتُمْ هَٰؤُلَاءِ تُدْعَوْنَ لِتُنفِقُوا فِي سَبِيلِ اللَّهِ فَمِنكُم مَّن يَبْخَلُ وَمَن يَبْخَلْ فَإِنَّمَا يَبْخَلُ عَن نَّفْسِهِ وَاللَّهُ الْغَنِيُّ وَأَنتُمُ الْفُقَرَاءُ",
    words: [
      { arabic: "هَا", transliteration: "hā", meaning: { en: "Here", ur: "دیکھو" }, pos: "PART", posLabel: "PART", grammar: { type: "alerting" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you are", ur: "تم ہو" }, pos: "PRON", posLabel: "PRON", grammar: { type: "subject", number: "plural" } },
      { arabic: "هَٰؤُلَاءِ", transliteration: "hāʾulāʾi", meaning: { en: "those", ur: "وہی لوگ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "تُدْعَوْنَ", transliteration: "tudʿawna", meaning: { en: "being invited", ur: "بلائے جاتے ہو" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "د-ع-و" } },
      { arabic: "لِتُنفِقُوا", transliteration: "litunfiqū", meaning: { en: "to spend", ur: "خرچ کرنے کے لیے" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", root: "ن-ف-ق", mood: "subjunctive" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "the way", ur: "راستے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَمِنكُم", transliteration: "faminkum", meaning: { en: "but among you", ur: "تو تم میں سے" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "partitive" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "are those who", ur: "کوئی ہے جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَبْخَلُ", transliteration: "yabkhalu", meaning: { en: "withholds", ur: "بخل کرتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-خ-ل" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "and whoever", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "conditional" } },
      { arabic: "يَبْخَلْ", transliteration: "yabkhal", meaning: { en: "withholds", ur: "بخل کرتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-خ-ل", mood: "jussive" } },
      { arabic: "فَإِنَّمَا", transliteration: "faʾinnamā", meaning: { en: "then only", ur: "تو بس وہ" }, pos: "CONJ+RESTR", posLabel: "CONJ+RESTR", grammar: { type: "restriction" } },
      { arabic: "يَبْخَلُ", transliteration: "yabkhalu", meaning: { en: "withholds", ur: "بخل کرتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-خ-ل" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "against", ur: "اپنے" }, pos: "P", posLabel: "P", grammar: { role: "disadvantage" } },
      { arabic: "نَّفْسِهِ", transliteration: "nafsihi", meaning: { en: "himself", ur: "آپ سے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah is", ur: "اور اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "الْغَنِيُّ", transliteration: "al-ghaniyyu", meaning: { en: "the Free of need", ur: "بے نیاز ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "غ-ن-ي" } },
      { arabic: "وَأَنتُمُ", transliteration: "waʾantumu", meaning: { en: "and you are", ur: "اور تم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "subject" } },
      { arabic: "الْفُقَرَاءُ", transliteration: "al-fuqarāʾu", meaning: { en: "the needy", ur: "محتاج ہو" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ف-ق-ر" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'موصول + صلة' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'مبتدأ + خبر' },
        { from: 20, to: 21, label: 'مبتدأ + خبر' }
      ]
    }
  }
};

export default TREEBANK_DATA;