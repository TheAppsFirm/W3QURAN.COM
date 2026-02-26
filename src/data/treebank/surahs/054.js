/**
 * Surah Al-Qamar (The Moon) - Surah 54
 * Quranic Arabic Treebank Data
 */

export const TREEBANK_DATA = {
  surahId: 54,
  surahName: "Al-Qamar",
  surahNameArabic: "القمر",
  totalAyahs: 55,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ",
    words: [
      { arabic: "اقْتَرَبَتِ", transliteration: "iqtarabati", meaning: { en: "Has approached", ur: "قریب آگئی", ar: "اقتربت" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ق-ر-ب", gender: "feminine" } },
      { arabic: "السَّاعَةُ", transliteration: "al-sāʿatu", meaning: { en: "the Hour", ur: "قیامت", ar: "الساعة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-و-ع" } },
      { arabic: "وَانشَقَّ", transliteration: "wanshaqqa", meaning: { en: "and has split", ur: "اور پھٹ گیا", ar: "وانشق" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VII", root: "ش-ق-ق" } },
      { arabic: "الْقَمَرُ", transliteration: "al-qamaru", meaning: { en: "the moon", ur: "چاند", ar: "القمر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-م-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 1, to: 3, label: 'عطف' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "وَإِن يَرَوْا آيَةً يُعْرِضُوا وَيَقُولُوا سِحْرٌ مُّسْتَمِرٌّ",
    words: [
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "يَرَوْا", transliteration: "yaraw", meaning: { en: "they see", ur: "وہ دیکھیں", ar: "يروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي", mood: "jussive" } },
      { arabic: "آيَةً", transliteration: "āyatan", meaning: { en: "a sign", ur: "نشانی", ar: "آية" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ي-ي" } },
      { arabic: "يُعْرِضُوا", transliteration: "yuʿriḍū", meaning: { en: "they turn away", ur: "منہ موڑ لیتے ہیں", ar: "يعرضوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ع-ر-ض", mood: "jussive" } },
      { arabic: "وَيَقُولُوا", transliteration: "wayaqūlū", meaning: { en: "and they say", ur: "اور کہتے ہیں", ar: "ويقولوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل", mood: "jussive" } },
      { arabic: "سِحْرٌ", transliteration: "siḥrun", meaning: { en: "magic", ur: "جادو", ar: "سحر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-ح-ر" } },
      { arabic: "مُّسْتَمِرٌّ", transliteration: "mustamirrun", meaning: { en: "continuous", ur: "مسلسل", ar: "دائم" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "م-ر-ر", form: "X" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "وَكَذَّبُوا وَاتَّبَعُوا أَهْوَاءَهُمْ وَكُلُّ أَمْرٍ مُّسْتَقِرٌّ",
    words: [
      { arabic: "وَكَذَّبُوا", transliteration: "wakadhdhabū", meaning: { en: "And they denied", ur: "اور انہوں نے جھٹلایا", ar: "وكذبوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ك-ذ-ب" } },
      { arabic: "وَاتَّبَعُوا", transliteration: "wattabaʿū", meaning: { en: "and followed", ur: "اور پیروی کی", ar: "واتبعوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "أَهْوَاءَهُمْ", transliteration: "ahwāʾahum", meaning: { en: "their desires", ur: "اپنی خواہشات کی", ar: "أهواءهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural", root: "ه-و-ي" } },
      { arabic: "وَكُلُّ", transliteration: "wakullu", meaning: { en: "and every", ur: "اور ہر", ar: "وكل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "أَمْرٍ", transliteration: "amrin", meaning: { en: "matter", ur: "کام", ar: "أمر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-م-ر" } },
      { arabic: "مُّسْتَقِرٌّ", transliteration: "mustaqirrun", meaning: { en: "will be settled", ur: "ٹھہرنے والا ہے", ar: "مستقر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ق-ر-ر", form: "X" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 1, to: 2, label: 'عطف' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "وَلَقَدْ جَاءَهُم مِّنَ الْأَنبَاءِ مَا فِيهِ مُزْدَجَرٌ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "جَاءَهُم", transliteration: "jāʾahum", meaning: { en: "has come to them", ur: "ان کے پاس آئی", ar: "جاءهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْأَنبَاءِ", transliteration: "al-anbāʾi", meaning: { en: "the news", ur: "خبریں", ar: "الأخبار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ن-ب-أ" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "that which", ur: "جس میں", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "اس میں", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "مُزْدَجَرٌ", transliteration: "muzda­jarun", meaning: { en: "deterrence", ur: "روک ہے", ar: "زجر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ز-ج-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "حِكْمَةٌ بَالِغَةٌ فَمَا تُغْنِ النُّذُرُ",
    words: [
      { arabic: "حِكْمَةٌ", transliteration: "ḥikmatun", meaning: { en: "Wisdom", ur: "حکمت", ar: "حكمة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-ك-م" } },
      { arabic: "بَالِغَةٌ", transliteration: "bālighatun", meaning: { en: "far-reaching", ur: "کامل", ar: "تامة" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ب-ل-غ", gender: "feminine" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "but not", ur: "پھر نہیں", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "تُغْنِ", transliteration: "tughnī", meaning: { en: "avail", ur: "فائدہ دیتی", ar: "تنفع" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "غ-ن-ي" } },
      { arabic: "النُّذُرُ", transliteration: "al-nudhuru", meaning: { en: "the warnings", ur: "ڈراوے", ar: "النذر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "فَتَوَلَّ عَنْهُمْ يَوْمَ يَدْعُ الدَّاعِ إِلَىٰ شَيْءٍ نُّكُرٍ",
    words: [
      { arabic: "فَتَوَلَّ", transliteration: "fatawalla", meaning: { en: "So turn away", ur: "پس منہ پھیر لے", ar: "فأعرض" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "V", root: "و-ل-ي", mood: "imperative" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "from them", ur: "ان سے", ar: "عنهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "separation" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "يَدْعُ", transliteration: "yadʿu", meaning: { en: "will call", ur: "بلائے گا", ar: "يدعو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "الدَّاعِ", transliteration: "al-dāʿi", meaning: { en: "the Caller", ur: "پکارنے والا", ar: "الداعي" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "د-ع-و" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "something", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "نُّكُرٍ", transliteration: "nukurin", meaning: { en: "dreadful", ur: "ہولناک", ar: "منكر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ن-ك-ر" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ كَأَنَّهُمْ جَرَادٌ مُّنتَشِرٌ",
    words: [
      { arabic: "خُشَّعًا", transliteration: "khushshaʿan", meaning: { en: "Humbled", ur: "جھکی ہوئی", ar: "خاشعة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "خ-ش-ع", number: "plural" } },
      { arabic: "أَبْصَارُهُمْ", transliteration: "abṣāruhum", meaning: { en: "their eyes", ur: "ان کی نگاہیں", ar: "أبصارهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", number: "plural", root: "ب-ص-ر" } },
      { arabic: "يَخْرُجُونَ", transliteration: "yakhrujūna", meaning: { en: "they will emerge", ur: "نکلیں گے", ar: "يخرجون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ر-ج" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الْأَجْدَاثِ", transliteration: "al-ajdāthi", meaning: { en: "the graves", ur: "قبروں", ar: "القبور" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ج-د-ث" } },
      { arabic: "كَأَنَّهُمْ", transliteration: "kaʾannahum", meaning: { en: "as if they were", ur: "گویا وہ ہیں", ar: "كأنهم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "simile" } },
      { arabic: "جَرَادٌ", transliteration: "jarādun", meaning: { en: "locusts", ur: "ٹڈیاں", ar: "جراد" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ر-د" } },
      { arabic: "مُّنتَشِرٌ", transliteration: "muntashirun", meaning: { en: "spreading", ur: "پھیلی ہوئی", ar: "منتشر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ن-ش-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "مُّهْطِعِينَ إِلَى الدَّاعِ يَقُولُ الْكَافِرُونَ هَٰذَا يَوْمٌ عَسِرٌ",
    words: [
      { arabic: "مُّهْطِعِينَ", transliteration: "muhṭiʿīna", meaning: { en: "Racing hastily", ur: "دوڑتے ہوئے", ar: "مسرعين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ه-ط-ع", form: "IV", number: "plural" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "toward", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "الدَّاعِ", transliteration: "al-dāʿi", meaning: { en: "the Caller", ur: "پکارنے والے", ar: "الداعي" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "د-ع-و" } },
      { arabic: "يَقُولُ", transliteration: "yaqūlu", meaning: { en: "will say", ur: "کہیں گے", ar: "يقول" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الْكَافِرُونَ", transliteration: "al-kāfirūna", meaning: { en: "the disbelievers", ur: "کافر", ar: "الكافرون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ك-ف-ر", number: "plural" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { gender: "masculine" } },
      { arabic: "يَوْمٌ", transliteration: "yawmun", meaning: { en: "a Day", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَسِرٌ", transliteration: "ʿasirun", meaning: { en: "difficult", ur: "مشکل", ar: "صعب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ع-س-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ فَكَذَّبُوا عَبْدَنَا وَقَالُوا مَجْنُونٌ وَازْدُجِرَ",
    words: [
      { arabic: "كَذَّبَتْ", transliteration: "kadhdhabat", meaning: { en: "Denied", ur: "جھٹلایا", ar: "كذبت" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", gender: "feminine" } },
      { arabic: "قَبْلَهُمْ", transliteration: "qablahum", meaning: { en: "before them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "temporal" } },
      { arabic: "قَوْمُ", transliteration: "qawmu", meaning: { en: "the people", ur: "قوم", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "نُوحٍ", transliteration: "nūḥin", meaning: { en: "of Noah", ur: "نوح کی", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "فَكَذَّبُوا", transliteration: "fakadhdhabū", meaning: { en: "and they denied", ur: "پس انہوں نے جھٹلایا", ar: "فكذبوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ك-ذ-ب" } },
      { arabic: "عَبْدَنَا", transliteration: "ʿabdanā", meaning: { en: "Our servant", ur: "ہمارے بندے کو", ar: "عبدنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ع-ب-د" } },
      { arabic: "وَقَالُوا", transliteration: "waqālū", meaning: { en: "and said", ur: "اور کہا", ar: "وقالوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "مَجْنُونٌ", transliteration: "majnūnun", meaning: { en: "A madman", ur: "دیوانہ ہے", ar: "مجنون" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ج-ن-ن" } },
      { arabic: "وَازْدُجِرَ", transliteration: "wazdujira", meaning: { en: "and he was repelled", ur: "اور دھمکایا گیا", ar: "وزجر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", voice: "passive", root: "ز-ج-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 1, to: 5, label: 'عطف' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 5, to: 7, label: 'عطف' },
        { from: 7, to: 9, label: 'عطف' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "فَدَعَا رَبَّهُ أَنِّي مَغْلُوبٌ فَانتَصِرْ",
    words: [
      { arabic: "فَدَعَا", transliteration: "fadaʿā", meaning: { en: "So he called", ur: "پس اس نے پکارا", ar: "فدعا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "رَبَّهُ", transliteration: "rabbahu", meaning: { en: "his Lord", ur: "اپنے رب کو", ar: "ربه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ب-ب" } },
      { arabic: "أَنِّي", transliteration: "annī", meaning: { en: "Indeed, I", ur: "کہ میں", ar: "أني" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "subordinating" } },
      { arabic: "مَغْلُوبٌ", transliteration: "maghlūbun", meaning: { en: "am overpowered", ur: "مغلوب ہوں", ar: "مغلوب" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "غ-ل-ب" } },
      { arabic: "فَانتَصِرْ", transliteration: "fantaṣir", meaning: { en: "so help", ur: "پس بدلہ لے", ar: "فانتقم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "ن-ص-ر", mood: "imperative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 1, to: 5, label: 'عطف' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُّنْهَمِرٍ",
    words: [
      { arabic: "فَفَتَحْنَا", transliteration: "fafataḥnā", meaning: { en: "So We opened", ur: "پس ہم نے کھول دیے", ar: "ففتحنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ف-ت-ح", person: "1st", number: "plural" } },
      { arabic: "أَبْوَابَ", transliteration: "abwāba", meaning: { en: "the gates", ur: "دروازے", ar: "أبواب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ب-و-ب" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "of the heaven", ur: "آسمان کے", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "بِمَاءٍ", transliteration: "bimāʾin", meaning: { en: "with water", ur: "پانی سے", ar: "بماء" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "م-و-ه" } },
      { arabic: "مُّنْهَمِرٍ", transliteration: "munhamirin", meaning: { en: "pouring down", ur: "موسلا دھار", ar: "منهمر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ه-م-ر", form: "VII" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدْ قُدِرَ",
    words: [
      { arabic: "وَفَجَّرْنَا", transliteration: "wafajjarnā", meaning: { en: "And We caused to burst", ur: "اور ہم نے پھوڑ دیے", ar: "وفجرنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ف-ج-ر", person: "1st" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍa", meaning: { en: "the earth", ur: "زمین کو", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ر-ض" } },
      { arabic: "عُيُونًا", transliteration: "ʿuyūnan", meaning: { en: "with springs", ur: "چشمے بنا کر", ar: "عيونا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ع-ي-ن" } },
      { arabic: "فَالْتَقَى", transliteration: "faltaqā", meaning: { en: "so met", ur: "پس مل گیا", ar: "فالتقى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "ل-ق-ي" } },
      { arabic: "الْمَاءُ", transliteration: "al-māʾu", meaning: { en: "the water", ur: "پانی", ar: "الماء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-و-ه" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "for", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "purpose" } },
      { arabic: "أَمْرٍ", transliteration: "amrin", meaning: { en: "a matter", ur: "کام", ar: "أمر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-م-ر" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "already", ur: "یقیناً", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { type: "certainty" } },
      { arabic: "قُدِرَ", transliteration: "qudira", meaning: { en: "been decreed", ur: "مقدر تھا", ar: "قدر" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ق-د-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'تحقیق + فعل' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَحَمَلْنَاهُ عَلَىٰ ذَاتِ أَلْوَاحٍ وَدُسُرٍ",
    words: [
      { arabic: "وَحَمَلْنَاهُ", transliteration: "waḥamalnāhu", meaning: { en: "And We carried him", ur: "اور ہم نے اسے سوار کیا", ar: "وحملناه" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ح-م-ل", person: "1st" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "location" } },
      { arabic: "ذَاتِ", transliteration: "dhāti", meaning: { en: "that of", ur: "والی", ar: "ذات" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَلْوَاحٍ", transliteration: "alwāḥin", meaning: { en: "planks", ur: "تختوں", ar: "ألواح" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ل-و-ح" } },
      { arabic: "وَدُسُرٍ", transliteration: "wadusurin", meaning: { en: "and nails", ur: "اور کیلوں", ar: "ودسر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", number: "plural", root: "د-س-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "تَجْرِي بِأَعْيُنِنَا جَزَاءً لِّمَن كَانَ كُفِرَ",
    words: [
      { arabic: "تَجْرِي", transliteration: "tajrī", meaning: { en: "Sailing", ur: "چلتی تھی", ar: "تجري" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ر-ي" } },
      { arabic: "بِأَعْيُنِنَا", transliteration: "bi-aʿyuninā", meaning: { en: "under Our observation", ur: "ہماری نگرانی میں", ar: "بأعيننا" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ع-ي-ن" } },
      { arabic: "جَزَاءً", transliteration: "jazāʾan", meaning: { en: "as reward", ur: "بدلے میں", ar: "جزاء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ز-ي" } },
      { arabic: "لِّمَن", transliteration: "liman", meaning: { en: "for he who", ur: "اس کے لیے جو", ar: "لمن" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "had been", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "كُفِرَ", transliteration: "kufira", meaning: { en: "denied", ur: "ناشکری کی گئی", ar: "كفر" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ك-ف-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + جار مجرور' },
        { from: 4, to: 5, label: 'موصول + صلة' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "وَلَقَدْ تَّرَكْنَاهَا آيَةً فَهَلْ مِن مُّدَّكِرٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "تَّرَكْنَاهَا", transliteration: "taraknāhā", meaning: { en: "We left it", ur: "ہم نے اسے چھوڑا", ar: "تركناها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ت-ر-ك", person: "1st" } },
      { arabic: "آيَةً", transliteration: "āyatan", meaning: { en: "as a sign", ur: "نشانی بنا کر", ar: "آية" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ي-ي" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "so is there", ur: "پس کوئی ہے", ar: "فهل" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مُّدَّكِرٍ", transliteration: "muddakirin", meaning: { en: "who will remember", ur: "نصیحت پکڑنے والا", ar: "متذكر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ذ-ك-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
    words: [
      { arabic: "فَكَيْفَ", transliteration: "fakayfa", meaning: { en: "So how was", ur: "پس کیسا تھا", ar: "فكيف" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "عَذَابِي", transliteration: "ʿadhābī", meaning: { en: "My punishment", ur: "میرا عذاب", ar: "عذابي" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "وَنُذُرِ", transliteration: "wanudhuri", meaning: { en: "and My warnings", ur: "اور میرے ڈراوے", ar: "ونذر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "يَسَّرْنَا", transliteration: "yassarnā", meaning: { en: "We have made easy", ur: "ہم نے آسان کر دیا", ar: "يسرنا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ي-س-ر", person: "1st" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن کو", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } },
      { arabic: "لِلذِّكْرِ", transliteration: "lil-dhikri", meaning: { en: "for remembrance", ur: "نصیحت کے لیے", ar: "للذكر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ذ-ك-ر" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "so is there", ur: "پس کوئی ہے", ar: "فهل" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مُّدَّكِرٍ", transliteration: "muddakirin", meaning: { en: "who will remember", ur: "نصیحت پکڑنے والا", ar: "متذكر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ذ-ك-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "كَذَّبَتْ عَادٌ فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
    words: [
      { arabic: "كَذَّبَتْ", transliteration: "kadhdhabat", meaning: { en: "Denied", ur: "جھٹلایا", ar: "كذبت" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", gender: "feminine" } },
      { arabic: "عَادٌ", transliteration: "ʿādun", meaning: { en: "Aad", ur: "عاد نے", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { case: "nominative", type: "proper-noun" } },
      { arabic: "فَكَيْفَ", transliteration: "fakayfa", meaning: { en: "so how was", ur: "پس کیسا تھا", ar: "فكيف" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "عَذَابِي", transliteration: "ʿadhābī", meaning: { en: "My punishment", ur: "میرا عذاب", ar: "عذابي" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "وَنُذُرِ", transliteration: "wanudhuri", meaning: { en: "and My warnings", ur: "اور میرے ڈراوے", ar: "ونذر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'عطف' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "إِنَّا أَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا فِي يَوْمِ نَحْسٍ مُّسْتَمِرٍّ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "sent", ur: "بھیجی", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل", person: "1st" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "رِيحًا", transliteration: "rīḥan", meaning: { en: "a wind", ur: "ہوا", ar: "ريحا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-و-ح" } },
      { arabic: "صَرْصَرًا", transliteration: "ṣarṣaran", meaning: { en: "screaming", ur: "تیز و تند", ar: "صرصرا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "on", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: { en: "a Day", ur: "دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "نَحْسٍ", transliteration: "naḥsin", meaning: { en: "of evil omen", ur: "منحوس", ar: "نحس" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-ح-س" } },
      { arabic: "مُّسْتَمِرٍّ", transliteration: "mustamirrin", meaning: { en: "continuous", ur: "مسلسل", ar: "مستمر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "م-ر-ر", form: "X" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "تَنزِعُ النَّاسَ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ مُّنقَعِرٍ",
    words: [
      { arabic: "تَنزِعُ", transliteration: "tanziʿu", meaning: { en: "It plucked", ur: "اکھاڑ پھینکتی تھی", ar: "تنزع" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ن-ز-ع" } },
      { arabic: "النَّاسَ", transliteration: "al-nāsa", meaning: { en: "the people", ur: "لوگوں کو", ar: "الناس" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-و-س" } },
      { arabic: "كَأَنَّهُمْ", transliteration: "kaʾannahum", meaning: { en: "as if they were", ur: "گویا وہ تھے", ar: "كأنهم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "simile" } },
      { arabic: "أَعْجَازُ", transliteration: "aʿjāzu", meaning: { en: "trunks", ur: "تنے", ar: "أعجاز" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ع-ج-ز" } },
      { arabic: "نَخْلٍ", transliteration: "nakhlin", meaning: { en: "of palm trees", ur: "کھجور کے", ar: "نخل" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-خ-ل" } },
      { arabic: "مُّنقَعِرٍ", transliteration: "munqaʿirin", meaning: { en: "uprooted", ur: "اکھڑے ہوئے", ar: "منقعر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ق-ع-ر", form: "VII" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
    words: [
      { arabic: "فَكَيْفَ", transliteration: "fakayfa", meaning: { en: "So how was", ur: "پس کیسا تھا", ar: "فكيف" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "عَذَابِي", transliteration: "ʿadhābī", meaning: { en: "My punishment", ur: "میرا عذاب", ar: "عذابي" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "وَنُذُرِ", transliteration: "wanudhuri", meaning: { en: "and My warnings", ur: "اور میرے ڈراوے", ar: "ونذر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "يَسَّرْنَا", transliteration: "yassarnā", meaning: { en: "We have made easy", ur: "ہم نے آسان کر دیا", ar: "يسرنا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ي-س-ر", person: "1st" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن کو", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } },
      { arabic: "لِلذِّكْرِ", transliteration: "lil-dhikri", meaning: { en: "for remembrance", ur: "نصیحت کے لیے", ar: "للذكر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ذ-ك-ر" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "so is there", ur: "پس کوئی ہے", ar: "فهل" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مُّدَّكِرٍ", transliteration: "muddakirin", meaning: { en: "who will remember", ur: "نصیحت پکڑنے والا", ar: "متذكر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ذ-ك-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "كَذَّبَتْ ثَمُودُ بِالنُّذُرِ",
    words: [
      { arabic: "كَذَّبَتْ", transliteration: "kadhdhabat", meaning: { en: "Denied", ur: "جھٹلایا", ar: "كذبت" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", gender: "feminine" } },
      { arabic: "ثَمُودُ", transliteration: "thamūdu", meaning: { en: "Thamud", ur: "ثمود نے", ar: "ثمود" }, pos: "N", posLabel: "N", grammar: { case: "nominative", type: "proper-noun" } },
      { arabic: "بِالنُّذُرِ", transliteration: "bil-nudhuri", meaning: { en: "the warnings", ur: "ڈراووں کو", ar: "بالنذر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "فَقَالُوا أَبَشَرًا مِّنَّا وَاحِدًا نَّتَّبِعُهُ إِنَّا إِذًا لَّفِي ضَلَالٍ وَسُعُرٍ",
    words: [
      { arabic: "فَقَالُوا", transliteration: "faqālū", meaning: { en: "And they said", ur: "پس انہوں نے کہا", ar: "فقالوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "أَبَشَرًا", transliteration: "a-basharan", meaning: { en: "Is it a man", ur: "کیا ایک آدمی", ar: "أبشرا" }, pos: "INTG+N", posLabel: "INTG+N", grammar: { case: "accusative", root: "ب-ش-ر" } },
      { arabic: "مِّنَّا", transliteration: "minnā", meaning: { en: "among us", ur: "ہم میں سے", ar: "منا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "partitive" } },
      { arabic: "وَاحِدًا", transliteration: "wāḥidan", meaning: { en: "alone", ur: "اکیلا", ar: "واحدا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "نَّتَّبِعُهُ", transliteration: "nattabiʿuhu", meaning: { en: "we should follow", ur: "ہم اس کی پیروی کریں", ar: "نتبعه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "VIII", root: "ت-ب-ع" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "indeed, we", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "إِذًا", transliteration: "idhan", meaning: { en: "then", ur: "تب تو", ar: "إذا" }, pos: "PART", posLabel: "PART", grammar: { type: "result" } },
      { arabic: "لَّفِي", transliteration: "lafī", meaning: { en: "surely in", ur: "ضرور ہوں گے", ar: "لفي" }, pos: "EMPH+P", posLabel: "EMPH+P", grammar: { type: "emphasis" } },
      { arabic: "ضَلَالٍ", transliteration: "ḍalālin", meaning: { en: "error", ur: "گمراہی", ar: "ضلال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ض-ل-ل" } },
      { arabic: "وَسُعُرٍ", transliteration: "wasuʿurin", meaning: { en: "and madness", ur: "اور جنون میں", ar: "وسعر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "س-ع-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'موصوف + صفت' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'عطف' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "أَأُلْقِيَ الذِّكْرُ عَلَيْهِ مِن بَيْنِنَا بَلْ هُوَ كَذَّابٌ أَشِرٌ",
    words: [
      { arabic: "أَأُلْقِيَ", transliteration: "a-ulqiya", meaning: { en: "Has been cast", ur: "کیا ڈالی گئی", ar: "أألقي" }, pos: "INTG+V", posLabel: "INTG+V", grammar: { form: "IV", voice: "passive", root: "ل-ق-ي" } },
      { arabic: "الذِّكْرُ", transliteration: "al-dhikru", meaning: { en: "the message", ur: "نصیحت", ar: "الذكر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ذ-ك-ر" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "upon him", ur: "اس پر", ar: "عليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "درمیان سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "بَيْنِنَا", transliteration: "bayninā", meaning: { en: "among us", ur: "ہمارے", ar: "بيننا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بل" }, pos: "PART", posLabel: "PART", grammar: { type: "correction" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he is", ur: "وہ ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "كَذَّابٌ", transliteration: "kadhdhābun", meaning: { en: "a liar", ur: "بڑا جھوٹا", ar: "كذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ك-ذ-ب" } },
      { arabic: "أَشِرٌ", transliteration: "ashirun", meaning: { en: "insolent", ur: "مغرور", ar: "أشر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "أ-ش-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "سَيَعْلَمُونَ غَدًا مَّنِ الْكَذَّابُ الْأَشِرُ",
    words: [
      { arabic: "سَيَعْلَمُونَ", transliteration: "sayaʿlamūna", meaning: { en: "They will know", ur: "عنقریب جان لیں گے", ar: "سيعلمون" }, pos: "FUT+V", posLabel: "FUT+V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "غَدًا", transliteration: "ghadan", meaning: { en: "tomorrow", ur: "کل", ar: "غدا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "مَّنِ", transliteration: "mani", meaning: { en: "who is", ur: "کون ہے", ar: "من" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "الْكَذَّابُ", transliteration: "al-kadhdhābu", meaning: { en: "the liar", ur: "بڑا جھوٹا", ar: "الكذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ك-ذ-ب" } },
      { arabic: "الْأَشِرُ", transliteration: "al-ashiru", meaning: { en: "the insolent", ur: "مغرور", ar: "الأشر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "أ-ش-ر" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "إِنَّا مُرْسِلُو النَّاقَةِ فِتْنَةً لَّهُمْ فَارْتَقِبْهُمْ وَاصْطَبِرْ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "مُرْسِلُو", transliteration: "mursilū", meaning: { en: "will send", ur: "بھیجنے والے ہیں", ar: "مرسلو" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ر-س-ل", form: "IV" } },
      { arabic: "النَّاقَةِ", transliteration: "al-nāqati", meaning: { en: "the she-camel", ur: "اونٹنی کو", ar: "الناقة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ق" } },
      { arabic: "فِتْنَةً", transliteration: "fitnatan", meaning: { en: "as a trial", ur: "آزمائش کے طور پر", ar: "فتنة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ف-ت-ن" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "beneficiary" } },
      { arabic: "فَارْتَقِبْهُمْ", transliteration: "fartaqibhum", meaning: { en: "so watch them", ur: "پس ان کا انتظار کرو", ar: "فارتقبهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "VIII", root: "ر-ق-ب", mood: "imperative" } },
      { arabic: "وَاصْطَبِرْ", transliteration: "waṣṭabir", meaning: { en: "and be patient", ur: "اور صبر کرو", ar: "واصطبر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VIII", root: "ص-ب-ر", mood: "imperative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'عطف' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "وَنَبِّئْهُمْ أَنَّ الْمَاءَ قِسْمَةٌ بَيْنَهُمْ ۖ كُلُّ شِرْبٍ مُّحْتَضَرٌ",
    words: [
      { arabic: "وَنَبِّئْهُمْ", transliteration: "wanabbiʾhum", meaning: { en: "And inform them", ur: "اور انہیں بتا دو", ar: "ونبئهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ن-ب-أ", mood: "imperative" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "subordinating" } },
      { arabic: "الْمَاءَ", transliteration: "al-māʾa", meaning: { en: "the water", ur: "پانی", ar: "الماء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-و-ه" } },
      { arabic: "قِسْمَةٌ", transliteration: "qismatun", meaning: { en: "is shared", ur: "بانٹا ہوا ہے", ar: "قسمة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-س-م" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "between them", ur: "ان کے درمیان", ar: "بينهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "each", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "شِرْبٍ", transliteration: "shirbin", meaning: { en: "share of water", ur: "پینے کی باری", ar: "شرب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ش-ر-ب" } },
      { arabic: "مُّحْتَضَرٌ", transliteration: "muḥtaḍarun", meaning: { en: "will be attended", ur: "حاضر ہونا ہے", ar: "محتضر" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "ح-ض-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'توکید' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 8, label: 'مبتدأ + خبر' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "فَنَادَوْا صَاحِبَهُمْ فَتَعَاطَىٰ فَعَقَرَ",
    words: [
      { arabic: "فَنَادَوْا", transliteration: "fanādaw", meaning: { en: "But they called", ur: "پس انہوں نے پکارا", ar: "فنادوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "III", root: "ن-د-و" } },
      { arabic: "صَاحِبَهُمْ", transliteration: "ṣāḥibahum", meaning: { en: "their companion", ur: "اپنے ساتھی کو", ar: "صاحبهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ص-ح-ب" } },
      { arabic: "فَتَعَاطَىٰ", transliteration: "fataʿāṭā", meaning: { en: "and he dared", ur: "پس اس نے ہاتھ بڑھایا", ar: "فتعاطى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VI", root: "ع-ط-و" } },
      { arabic: "فَعَقَرَ", transliteration: "faʿaqara", meaning: { en: "and he hamstrung", ur: "پس اس نے کاٹ ڈالا", ar: "فعقر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ق-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 1, to: 3, label: 'عطف' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    text: "فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
    words: [
      { arabic: "فَكَيْفَ", transliteration: "fakayfa", meaning: { en: "So how was", ur: "پس کیسا تھا", ar: "فكيف" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "عَذَابِي", transliteration: "ʿadhābī", meaning: { en: "My punishment", ur: "میرا عذاب", ar: "عذابي" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "وَنُذُرِ", transliteration: "wanudhuri", meaning: { en: "and My warnings", ur: "اور میرے ڈراوے", ar: "ونذر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  31: {
    ayahNumber: 31,
    text: "إِنَّا أَرْسَلْنَا عَلَيْهِمْ صَيْحَةً وَاحِدَةً فَكَانُوا كَهَشِيمِ الْمُحْتَظِرِ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "sent", ur: "بھیجی", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل", person: "1st" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "صَيْحَةً", transliteration: "ṣayḥatan", meaning: { en: "a single blast", ur: "ایک چنگھاڑ", ar: "صيحة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ص-ي-ح" } },
      { arabic: "وَاحِدَةً", transliteration: "wāḥidatan", meaning: { en: "single", ur: "ایک ہی", ar: "واحدة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", gender: "feminine" } },
      { arabic: "فَكَانُوا", transliteration: "fakānū", meaning: { en: "and they became", ur: "پس وہ ہو گئے", ar: "فكانوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "كَهَشِيمِ", transliteration: "kahashīmi", meaning: { en: "like the dry twig fragments", ur: "ٹوٹے ہوئے بھوسے کی طرح", ar: "كهشيم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ه-ش-م" } },
      { arabic: "الْمُحْتَظِرِ", transliteration: "al-muḥtaẓiri", meaning: { en: "of a pen-builder", ur: "باڑا بنانے والے کے", ar: "المحتظر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ح-ظ-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  32: {
    ayahNumber: 32,
    text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "يَسَّرْنَا", transliteration: "yassarnā", meaning: { en: "We have made easy", ur: "ہم نے آسان کر دیا", ar: "يسرنا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ي-س-ر", person: "1st" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن کو", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } },
      { arabic: "لِلذِّكْرِ", transliteration: "lil-dhikri", meaning: { en: "for remembrance", ur: "نصیحت کے لیے", ar: "للذكر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ذ-ك-ر" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "so is there", ur: "پس کوئی ہے", ar: "فهل" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مُّدَّكِرٍ", transliteration: "muddakirin", meaning: { en: "who will remember", ur: "نصیحت پکڑنے والا", ar: "متذكر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ذ-ك-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  33: {
    ayahNumber: 33,
    text: "كَذَّبَتْ قَوْمُ لُوطٍ بِالنُّذُرِ",
    words: [
      { arabic: "كَذَّبَتْ", transliteration: "kadhdhabat", meaning: { en: "Denied", ur: "جھٹلایا", ar: "كذبت" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب", gender: "feminine" } },
      { arabic: "قَوْمُ", transliteration: "qawmu", meaning: { en: "the people", ur: "قوم نے", ar: "قوم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "لُوطٍ", transliteration: "lūṭin", meaning: { en: "of Lot", ur: "لوط کی", ar: "لوط" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "بِالنُّذُرِ", transliteration: "bil-nudhuri", meaning: { en: "the warnings", ur: "ڈراووں کو", ar: "بالنذر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  34: {
    ayahNumber: 34,
    text: "إِنَّا أَرْسَلْنَا عَلَيْهِمْ حَاصِبًا إِلَّا آلَ لُوطٍ ۖ نَّجَّيْنَاهُم بِسَحَرٍ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "sent", ur: "بھیجی", ar: "أرسلنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل", person: "1st" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "حَاصِبًا", transliteration: "ḥāṣiban", meaning: { en: "a storm of stones", ur: "پتھروں کی بارش", ar: "حاصبا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-ص-ب" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "آلَ", transliteration: "āla", meaning: { en: "the family", ur: "گھرانے کے", ar: "آل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لُوطٍ", transliteration: "lūṭin", meaning: { en: "of Lot", ur: "لوط کے", ar: "لوط" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "نَّجَّيْنَاهُم", transliteration: "najjaynāhum", meaning: { en: "We saved them", ur: "ہم نے انہیں بچایا", ar: "نجيناهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ن-ج-و", person: "1st" } },
      { arabic: "بِسَحَرٍ", transliteration: "bisaḥarin", meaning: { en: "before dawn", ur: "پو پھٹنے سے پہلے", ar: "بسحر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-ح-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  35: {
    ayahNumber: 35,
    text: "نِّعْمَةً مِّنْ عِندِنَا ۚ كَذَٰلِكَ نَجْزِي مَن شَكَرَ",
    words: [
      { arabic: "نِّعْمَةً", transliteration: "niʿmatan", meaning: { en: "As favor", ur: "نعمت کے طور پر", ar: "نعمة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ع-م" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "عِندِنَا", transliteration: "ʿindinā", meaning: { en: "Us", ur: "ہمارے پاس", ar: "عندنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "اسی طرح", ar: "كذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "نَجْزِي", transliteration: "najzī", meaning: { en: "We reward", ur: "ہم جزا دیتے ہیں", ar: "نجزي" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ز-ي" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whoever", ur: "جو شخص", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "شَكَرَ", transliteration: "shakara", meaning: { en: "is grateful", ur: "شکر کرے", ar: "شكر" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ك-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصول + صلة' }
      ]
    }
  },

  36: {
    ayahNumber: 36,
    text: "وَلَقَدْ أَنذَرَهُم بَطْشَتَنَا فَتَمَارَوْا بِالنُّذُرِ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "أَنذَرَهُم", transliteration: "andharahum", meaning: { en: "he had warned them", ur: "اس نے انہیں ڈرایا", ar: "أنذرهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ن-ذ-ر" } },
      { arabic: "بَطْشَتَنَا", transliteration: "baṭshatanā", meaning: { en: "of Our seizing", ur: "ہماری پکڑ سے", ar: "بطشتنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ب-ط-ش" } },
      { arabic: "فَتَمَارَوْا", transliteration: "fatamaraw", meaning: { en: "but they disputed", ur: "پس انہوں نے جھگڑا کیا", ar: "فتماروا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "VI", root: "م-ر-ي" } },
      { arabic: "بِالنُّذُرِ", transliteration: "bil-nudhuri", meaning: { en: "about the warnings", ur: "ڈراووں کے بارے میں", ar: "بالنذر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 1, to: 4, label: 'عطف' }
      ]
    }
  },

  37: {
    ayahNumber: 37,
    text: "وَلَقَدْ رَاوَدُوهُ عَن ضَيْفِهِ فَطَمَسْنَا أَعْيُنَهُمْ فَذُوقُوا عَذَابِي وَنُذُرِ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "رَاوَدُوهُ", transliteration: "rāwadūhu", meaning: { en: "they tried to seduce from him", ur: "انہوں نے اس سے چاہا", ar: "راودوه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "III", root: "ر-و-د" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "his", ur: "سے", ar: "عن" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "ضَيْفِهِ", transliteration: "ḍayfīhi", meaning: { en: "his guests", ur: "اس کے مہمانوں کے بارے میں", ar: "ضيفه" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ض-ي-ف" } },
      { arabic: "فَطَمَسْنَا", transliteration: "faṭamasnā", meaning: { en: "so We obliterated", ur: "پس ہم نے مٹا دیں", ar: "فطمسنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ط-م-س", person: "1st" } },
      { arabic: "أَعْيُنَهُمْ", transliteration: "aʿyunahum", meaning: { en: "their eyes", ur: "ان کی آنکھیں", ar: "أعينهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural", root: "ع-ي-ن" } },
      { arabic: "فَذُوقُوا", transliteration: "fadhūqū", meaning: { en: "so taste", ur: "پس چکھو", ar: "فذوقوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ذ-و-ق", mood: "imperative" } },
      { arabic: "عَذَابِي", transliteration: "ʿadhābī", meaning: { en: "My punishment", ur: "میرا عذاب", ar: "عذابي" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "وَنُذُرِ", transliteration: "wanudhuri", meaning: { en: "and My warnings", ur: "اور میرے ڈراوے", ar: "ونذر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'عطف' }
      ]
    }
  },

  38: {
    ayahNumber: 38,
    text: "وَلَقَدْ صَبَّحَهُم بُكْرَةً عَذَابٌ مُّسْتَقِرٌّ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "صَبَّحَهُم", transliteration: "ṣabbaḥahum", meaning: { en: "seized them early morning", ur: "صبح سویرے آ پہنچا ان پر", ar: "صبحهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "ص-ب-ح" } },
      { arabic: "بُكْرَةً", transliteration: "bukratan", meaning: { en: "in the morning", ur: "صبح سویرے", ar: "بكرة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "a punishment", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "مُّسْتَقِرٌّ", transliteration: "mustaqirrun", meaning: { en: "abiding", ur: "ہمیشہ رہنے والا", ar: "مستقر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ق-ر-ر", form: "X" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  39: {
    ayahNumber: 39,
    text: "فَذُوقُوا عَذَابِي وَنُذُرِ",
    words: [
      { arabic: "فَذُوقُوا", transliteration: "fadhūqū", meaning: { en: "So taste", ur: "پس چکھو", ar: "فذوقوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ذ-و-ق", mood: "imperative" } },
      { arabic: "عَذَابِي", transliteration: "ʿadhābī", meaning: { en: "My punishment", ur: "میرا عذاب", ar: "عذابي" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "وَنُذُرِ", transliteration: "wanudhuri", meaning: { en: "and My warnings", ur: "اور میرے ڈراوے", ar: "ونذر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'عطف' }
      ]
    }
  },

  40: {
    ayahNumber: 40,
    text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "يَسَّرْنَا", transliteration: "yassarnā", meaning: { en: "We have made easy", ur: "ہم نے آسان کر دیا", ar: "يسرنا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ي-س-ر", person: "1st" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن کو", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } },
      { arabic: "لِلذِّكْرِ", transliteration: "lil-dhikri", meaning: { en: "for remembrance", ur: "نصیحت کے لیے", ar: "للذكر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ذ-ك-ر" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "so is there", ur: "پس کوئی ہے", ar: "فهل" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مُّدَّكِرٍ", transliteration: "muddakirin", meaning: { en: "who will remember", ur: "نصیحت پکڑنے والا", ar: "متذكر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ذ-ك-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ]
    }
  },

  41: {
    ayahNumber: 41,
    text: "وَلَقَدْ جَاءَ آلَ فِرْعَوْنَ النُّذُرُ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "جَاءَ", transliteration: "jāʾa", meaning: { en: "came to", ur: "آئیں", ar: "جاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "آلَ", transliteration: "āla", meaning: { en: "the people", ur: "گھرانے کے پاس", ar: "آل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: { en: "of Pharaoh", ur: "فرعون کے", ar: "فرعون" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "النُّذُرُ", transliteration: "al-nudhuru", meaning: { en: "the warnings", ur: "ڈراوے", ar: "النذر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 5, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  42: {
    ayahNumber: 42,
    text: "كَذَّبُوا بِآيَاتِنَا كُلِّهَا فَأَخَذْنَاهُمْ أَخْذَ عَزِيزٍ مُّقْتَدِرٍ",
    words: [
      { arabic: "كَذَّبُوا", transliteration: "kadhdhabū", meaning: { en: "They denied", ur: "انہوں نے جھٹلایا", ar: "كذبوا" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ك-ذ-ب" } },
      { arabic: "بِآيَاتِنَا", transliteration: "biāyātinā", meaning: { en: "Our signs", ur: "ہماری نشانیوں کو", ar: "بآياتنا" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "أ-ي-ي" } },
      { arabic: "كُلِّهَا", transliteration: "kullihā", meaning: { en: "all of them", ur: "سب کی سب", ar: "كلها" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", type: "emphasis" } },
      { arabic: "فَأَخَذْنَاهُمْ", transliteration: "fa-akhadhnāhum", meaning: { en: "so We seized them", ur: "پس ہم نے انہیں پکڑا", ar: "فأخذناهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "أ-خ-ذ", person: "1st" } },
      { arabic: "أَخْذَ", transliteration: "akhdha", meaning: { en: "the seizing", ur: "پکڑنا", ar: "أخذ" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-خ-ذ", role: "cognate-accusative" } },
      { arabic: "عَزِيزٍ", transliteration: "ʿazīzin", meaning: { en: "of an Almighty", ur: "غالب", ar: "عزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ز-ز" } },
      { arabic: "مُّقْتَدِرٍ", transliteration: "muqtadirin", meaning: { en: "Omnipotent", ur: "قدرت والے کی", ar: "مقتدر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ق-د-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  43: {
    ayahNumber: 43,
    text: "أَكُفَّارُكُمْ خَيْرٌ مِّنْ أُولَٰئِكُمْ أَمْ لَكُمْ بَرَاءَةٌ فِي الزُّبُرِ",
    words: [
      { arabic: "أَكُفَّارُكُمْ", transliteration: "akuffārukum", meaning: { en: "Are your disbelievers", ur: "کیا تمہارے کافر", ar: "أكفاركم" }, pos: "INTG+N+PRON", posLabel: "INTG+N+PRON", grammar: { case: "nominative", root: "ك-ف-ر" } },
      { arabic: "خَيْرٌ", transliteration: "khayrun", meaning: { en: "better", ur: "بہتر ہیں", ar: "خير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "خ-ي-ر" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "than", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "comparison" } },
      { arabic: "أُولَٰئِكُمْ", transliteration: "ulāʾikum", meaning: { en: "those", ur: "ان سے", ar: "أولئكم" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے ہے", ar: "لكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "بَرَاءَةٌ", transliteration: "barāʾatun", meaning: { en: "immunity", ur: "چھوٹ", ar: "براءة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-ر-أ" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الزُّبُرِ", transliteration: "al-zuburi", meaning: { en: "the scriptures", ur: "کتابوں", ar: "الزبر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ز-ب-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ]
    }
  },

  44: {
    ayahNumber: 44,
    text: "أَمْ يَقُولُونَ نَحْنُ جَمِيعٌ مُّنتَصِرٌ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا", ar: "أم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "do they say", ur: "وہ کہتے ہیں", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We are", ur: "ہم ہیں", ar: "نحن" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st", number: "plural" } },
      { arabic: "جَمِيعٌ", transliteration: "jamīʿun", meaning: { en: "a group", ur: "ایک جماعت", ar: "جميع" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مُّنتَصِرٌ", transliteration: "muntaṣirun", meaning: { en: "victorious", ur: "غالب آنے والی", ar: "منتصر" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ن-ص-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  45: {
    ayahNumber: 45,
    text: "سَيُهْزَمُ الْجَمْعُ وَيُوَلُّونَ الدُّبُرَ",
    words: [
      { arabic: "سَيُهْزَمُ", transliteration: "sayuhzamu", meaning: { en: "will be defeated", ur: "عنقریب شکست کھائے گی", ar: "سيهزم" }, pos: "FUT+V", posLabel: "FUT+V", grammar: { form: "I", voice: "passive", root: "ه-ز-م" } },
      { arabic: "الْجَمْعُ", transliteration: "al-jamʿu", meaning: { en: "the assembly", ur: "جماعت", ar: "الجمع" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-م-ع" } },
      { arabic: "وَيُوَلُّونَ", transliteration: "wayuwallūna", meaning: { en: "and they will turn", ur: "اور پیٹھ پھیر کر", ar: "ويولون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "و-ل-ي" } },
      { arabic: "الدُّبُرَ", transliteration: "al-dubura", meaning: { en: "their backs", ur: "بھاگیں گے", ar: "الدبر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "د-ب-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + مفعول به' }
      ]
    }
  },

  46: {
    ayahNumber: 46,
    text: "بَلِ السَّاعَةُ مَوْعِدُهُمْ وَالسَّاعَةُ أَدْهَىٰ وَأَمَرُّ",
    words: [
      { arabic: "بَلِ", transliteration: "bali", meaning: { en: "Rather", ur: "بلکہ", ar: "بل" }, pos: "PART", posLabel: "PART", grammar: { type: "correction" } },
      { arabic: "السَّاعَةُ", transliteration: "al-sāʿatu", meaning: { en: "the Hour", ur: "قیامت", ar: "الساعة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "س-و-ع" } },
      { arabic: "مَوْعِدُهُمْ", transliteration: "mawʿiduhum", meaning: { en: "is their appointment", ur: "ان کا وعدہ ہے", ar: "موعدهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "و-ع-د" } },
      { arabic: "وَالسَّاعَةُ", transliteration: "wal-sāʿatu", meaning: { en: "and the Hour", ur: "اور قیامت", ar: "والساعة" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "س-و-ع" } },
      { arabic: "أَدْهَىٰ", transliteration: "adhā", meaning: { en: "more grievous", ur: "زیادہ سخت", ar: "أدهى" }, pos: "ADJ", posLabel: "ADJ", grammar: { root: "د-ه-ي", degree: "comparative" } },
      { arabic: "وَأَمَرُّ", transliteration: "wa-amarru", meaning: { en: "and more bitter", ur: "اور زیادہ کڑوی", ar: "وأمر" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { root: "م-ر-ر", degree: "comparative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' },
        { from: 5, to: 6, label: 'عطف' }
      ]
    }
  },

  47: {
    ayahNumber: 47,
    text: "إِنَّ الْمُجْرِمِينَ فِي ضَلَالٍ وَسُعُرٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "emphasis" } },
      { arabic: "الْمُجْرِمِينَ", transliteration: "al-mujrimīna", meaning: { en: "the criminals", ur: "مجرم لوگ", ar: "المجرمين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ج-ر-م", form: "IV" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "are in", ur: "میں ہیں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "ضَلَالٍ", transliteration: "ḍalālin", meaning: { en: "error", ur: "گمراہی", ar: "ضلال" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ض-ل-ل" } },
      { arabic: "وَسُعُرٍ", transliteration: "wasuʿurin", meaning: { en: "and madness", ur: "اور دیوانگی", ar: "وسعر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "س-ع-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  48: {
    ayahNumber: 48,
    text: "يَوْمَ يُسْحَبُونَ فِي النَّارِ عَلَىٰ وُجُوهِهِمْ ذُوقُوا مَسَّ سَقَرَ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "يُسْحَبُونَ", transliteration: "yusḥabūna", meaning: { en: "they will be dragged", ur: "وہ گھسیٹے جائیں گے", ar: "يسحبون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "س-ح-ب" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "the Fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ر" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "manner" } },
      { arabic: "وُجُوهِهِمْ", transliteration: "wujūhihim", meaning: { en: "their faces", ur: "اپنے منہ کے بل", ar: "وجوههم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural", root: "و-ج-ه" } },
      { arabic: "ذُوقُوا", transliteration: "dhūqū", meaning: { en: "Taste", ur: "چکھو", ar: "ذوقوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ذ-و-ق", mood: "imperative" } },
      { arabic: "مَسَّ", transliteration: "massa", meaning: { en: "the touch of", ur: "چھونا", ar: "مس" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-س-س" } },
      { arabic: "سَقَرَ", transliteration: "saqara", meaning: { en: "Saqar", ur: "دوزخ کا", ar: "سقر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  49: {
    ayahNumber: 49,
    text: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "خَلَقْنَاهُ", transliteration: "khalaqnāhu", meaning: { en: "We created it", ur: "ہم نے اسے بنایا", ar: "خلقناه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "خ-ل-ق", person: "1st" } },
      { arabic: "بِقَدَرٍ", transliteration: "biqadarin", meaning: { en: "with decree", ur: "تقدیر سے", ar: "بقدر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ق-د-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'فعل + جار مجرور' }
      ]
    }
  },

  50: {
    ayahNumber: 50,
    text: "وَمَا أَمْرُنَا إِلَّا وَاحِدَةٌ كَلَمْحٍ بِالْبَصَرِ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں ہے", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَمْرُنَا", transliteration: "amrunā", meaning: { en: "is Our command", ur: "ہمارا حکم", ar: "أمرنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "أ-م-ر" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "مگر", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "وَاحِدَةٌ", transliteration: "wāḥidatun", meaning: { en: "one", ur: "ایک بار", ar: "واحدة" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", gender: "feminine" } },
      { arabic: "كَلَمْحٍ", transliteration: "kalamḥin", meaning: { en: "like a glance", ur: "پلک جھپکنے کی طرح", ar: "كلمح" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ل-م-ح" } },
      { arabic: "بِالْبَصَرِ", transliteration: "bil-baṣari", meaning: { en: "of the eye", ur: "آنکھ کی", ar: "بالبصر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ب-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ]
    }
  },

  51: {
    ayahNumber: 51,
    text: "وَلَقَدْ أَهْلَكْنَا أَشْيَاعَكُمْ فَهَلْ مِن مُّدَّكِرٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور بیشک", ar: "ولقد" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "emphasis" } },
      { arabic: "أَهْلَكْنَا", transliteration: "ahlaknā", meaning: { en: "We destroyed", ur: "ہم نے ہلاک کیا", ar: "أهلكنا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ه-ل-ك", person: "1st" } },
      { arabic: "أَشْيَاعَكُمْ", transliteration: "ashyāʿakum", meaning: { en: "your kinds", ur: "تمہارے جیسوں کو", ar: "أشياعكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural", root: "ش-ي-ع" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "so is there", ur: "پس کوئی ہے", ar: "فهل" }, pos: "CONJ+INTG", posLabel: "CONJ+INTG", grammar: { type: "interrogative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "مُّدَّكِرٍ", transliteration: "muddakirin", meaning: { en: "who will remember", ur: "نصیحت پکڑنے والا", ar: "متذكر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ذ-ك-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ]
    }
  },

  52: {
    ayahNumber: 52,
    text: "وَكُلُّ شَيْءٍ فَعَلُوهُ فِي الزُّبُرِ",
    words: [
      { arabic: "وَكُلُّ", transliteration: "wakullu", meaning: { en: "And everything", ur: "اور ہر چیز جو", ar: "وكل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "انہوں نے کی", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَعَلُوهُ", transliteration: "faʿalūhu", meaning: { en: "they did", ur: "انہوں نے کیا", ar: "فعلوه" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ف-ع-ل" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں ہے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الزُّبُرِ", transliteration: "al-zuburi", meaning: { en: "the records", ur: "اعمال ناموں", ar: "الزبر" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ز-ب-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ]
    }
  },

  53: {
    ayahNumber: 53,
    text: "وَكُلُّ صَغِيرٍ وَكَبِيرٍ مُّسْتَطَرٌ",
    words: [
      { arabic: "وَكُلُّ", transliteration: "wakullu", meaning: { en: "And every", ur: "اور ہر", ar: "وكل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "صَغِيرٍ", transliteration: "ṣaghīrin", meaning: { en: "small", ur: "چھوٹا", ar: "صغير" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ص-غ-ر" } },
      { arabic: "وَكَبِيرٍ", transliteration: "wakabīrin", meaning: { en: "and great", ur: "اور بڑا", ar: "وكبير" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { case: "genitive", root: "ك-ب-ر" } },
      { arabic: "مُّسْتَطَرٌ", transliteration: "mustaṭarun", meaning: { en: "is inscribed", ur: "لکھا ہوا ہے", ar: "مستطر" }, pos: "PP", posLabel: "PP", grammar: { case: "nominative", root: "س-ط-ر", form: "X" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'عطف' },
        { from: 1, to: 4, label: 'مبتدأ + خبر' }
      ]
    }
  },

  54: {
    ayahNumber: 54,
    text: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "emphasis" } },
      { arabic: "الْمُتَّقِينَ", transliteration: "al-muttaqīna", meaning: { en: "the righteous", ur: "پرہیزگار", ar: "المتقين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "و-ق-ي", form: "VIII" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "will be in", ur: "میں ہوں گے", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "Gardens", ur: "باغات", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ج-ن-ن" } },
      { arabic: "وَنَهَرٍ", transliteration: "wanaharin", meaning: { en: "and river", ur: "اور نہروں میں", ar: "ونهر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "ن-ه-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'عطف' }
      ]
    }
  },

  55: {
    ayahNumber: 55,
    text: "فِي مَقْعَدِ صِدْقٍ عِندَ مَلِيكٍ مُّقْتَدِرٍ",
    words: [
      { arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "مَقْعَدِ", transliteration: "maqʿadi", meaning: { en: "a seat", ur: "مجلس", ar: "مقعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-ع-د" } },
      { arabic: "صِدْقٍ", transliteration: "ṣidqin", meaning: { en: "of honor", ur: "سچی", ar: "صدق" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-د-ق" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "near", ur: "پاس", ar: "عند" }, pos: "N", posLabel: "N", grammar: { role: "proximity" } },
      { arabic: "مَلِيكٍ", transliteration: "malīkin", meaning: { en: "a Sovereign", ur: "بادشاہ کے", ar: "مليك" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ل-ك" } },
      { arabic: "مُّقْتَدِرٍ", transliteration: "muqtadirin", meaning: { en: "Perfect in Ability", ur: "قدرت والے", ar: "مقتدر" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ق-د-ر", form: "VIII" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  }
};

export default TREEBANK_DATA;
