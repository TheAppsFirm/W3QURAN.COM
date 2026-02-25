/**
 * Surah Fussilat (Explained in Detail) - Surah 41
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 41,
  surahName: "Fussilat",
  surahNameArabic: "فصلت",
  totalAyahs: 54,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "حم",
    words: [
      { arabic: "حم", transliteration: "ḥā mīm", meaning: { en: "Ha Meem", ur: "حٰم", ar: "حم" }, pos: "INIT", posLabel: "INIT", grammar: { type: "muqatta'at", note: "disconnected letters" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ",
    words: [
      { arabic: "تَنزِيلٌ", transliteration: "tanzīlun", meaning: { en: "A revelation", ur: "اتاری ہوئی", ar: "تنزيل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ز-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الرَّحْمَٰنِ", transliteration: "al-raḥmāni", meaning: { en: "the Most Gracious", ur: "رحمان", ar: "الرحمن" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ح-م" } },
      { arabic: "الرَّحِيمِ", transliteration: "al-raḥīmi", meaning: { en: "the Most Merciful", ur: "رحیم", ar: "الرحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ر-ح-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "كِتَابٌ فُصِّلَتْ آيَاتُهُ قُرْآنًا عَرَبِيًّا لِّقَوْمٍ يَعْلَمُونَ",
    words: [
      { arabic: "كِتَابٌ", transliteration: "kitābun", meaning: { en: "A Book", ur: "کتاب", ar: "كتاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ك-ت-ب" } },
      { arabic: "فُصِّلَتْ", transliteration: "fuṣṣilat", meaning: { en: "are detailed", ur: "بیان کی گئیں", ar: "فصلت" }, pos: "V", posLabel: "V", grammar: { form: "II", voice: "passive", root: "ف-ص-ل" } },
      { arabic: "آيَاتُهُ", transliteration: "āyātuhu", meaning: { en: "its verses", ur: "اس کی آیتیں", ar: "آياته" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "قُرْآنًا", transliteration: "qurʾānan", meaning: { en: "as a Quran", ur: "قرآن ہے", ar: "قرآنا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-أ" } },
      { arabic: "عَرَبِيًّا", transliteration: "ʿarabiyyan", meaning: { en: "Arabic", ur: "عربی", ar: "عربيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "لِّقَوْمٍ", transliteration: "liqawmin", meaning: { en: "for a people", ur: "ان لوگوں کیلئے", ar: "لقوم" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "who know", ur: "جو جانتے ہیں", ar: "يعلمون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ",
    words: [
      { arabic: "بَشِيرًا", transliteration: "bashīran", meaning: { en: "a giver of good tidings", ur: "خوشخبری دینے والا", ar: "بشيرا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-ش-ر" } },
      { arabic: "وَنَذِيرًا", transliteration: "wanadhīran", meaning: { en: "and a warner", ur: "اور ڈرانے والا", ar: "ونذيرا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ن-ذ-ر" } },
      { arabic: "فَأَعْرَضَ", transliteration: "fa-aʿraḍa", meaning: { en: "but turned away", ur: "پس منہ موڑ لیا", ar: "فأعرض" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ع-ر-ض" } },
      { arabic: "أَكْثَرُهُمْ", transliteration: "aktharuhum", meaning: { en: "most of them", ur: "ان میں سے اکثر نے", ar: "أكثرهم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "فَهُمْ", transliteration: "fahum", meaning: { en: "so they", ur: "پس وہ", ar: "فهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", meaning: { en: "hear", ur: "سنتے", ar: "يسمعون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-م-ع" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ مِّمَّا تَدْعُونَا إِلَيْهِ وَفِي آذَانِنَا وَقْرٌ وَمِن بَيْنِنَا وَبَيْنِكَ حِجَابٌ فَاعْمَلْ إِنَّنَا عَامِلُونَ",
    words: [
      { arabic: "وَقَالُوا", transliteration: "waqālū", meaning: { en: "And they say", ur: "اور انہوں نے کہا", ar: "وقالوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "قُلُوبُنَا", transliteration: "qulūbunā", meaning: { en: "Our hearts", ur: "ہمارے دل", ar: "قلوبنا" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ق-ل-ب" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "are in", ur: "میں ہیں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أَكِنَّةٍ", transliteration: "akinnatin", meaning: { en: "coverings", ur: "غلافوں", ar: "أكنة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ك-ن-ن" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from that to which", ur: "اس سے جس کی طرف", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "تَدْعُونَا", transliteration: "tadʿūnā", meaning: { en: "you invite us", ur: "تم ہمیں بلاتے ہو", ar: "تدعونا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "to it", ur: "اس کی طرف", ar: "إليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "وَفِي", transliteration: "wafī", meaning: { en: "and in", ur: "اور میں ہے", ar: "وفي" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "preposition" } },
      { arabic: "آذَانِنَا", transliteration: "ādhāninā", meaning: { en: "our ears", ur: "ہمارے کانوں", ar: "آذاننا" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "أ-ذ-ن" } },
      { arabic: "وَقْرٌ", transliteration: "waqrun", meaning: { en: "deafness", ur: "بہرا پن", ar: "وقر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ق-ر" } },
      { arabic: "وَمِن", transliteration: "wamin", meaning: { en: "and between", ur: "اور درمیان", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "preposition" } },
      { arabic: "بَيْنِنَا", transliteration: "bayninā", meaning: { en: "us", ur: "ہمارے", ar: "بيننا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَبَيْنِكَ", transliteration: "wabaynīka", meaning: { en: "and you", ur: "اور تمہارے", ar: "وبينك" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "حِجَابٌ", transliteration: "ḥijābun", meaning: { en: "a barrier", ur: "پردہ ہے", ar: "حجاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ح-ج-ب" } },
      { arabic: "فَاعْمَلْ", transliteration: "faʿmal", meaning: { en: "so work", ur: "پس تم عمل کرو", ar: "فاعمل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", mood: "imperative", root: "ع-م-ل" } },
      { arabic: "إِنَّنَا", transliteration: "innanā", meaning: { en: "indeed we", ur: "بیشک ہم", ar: "إننا" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "عَامِلُونَ", transliteration: "ʿāmilūna", meaning: { en: "are working", ur: "عمل کرنے والے ہیں", ar: "عاملون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ع-م-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'عطف' },
        { from: 16, to: 17, label: 'توکید' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ فَاسْتَقِيمُوا إِلَيْهِ وَاسْتَغْفِرُوهُ وَوَيْلٌ لِّلْمُشْرِكِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { form: "I", mood: "imperative", root: "ق-و-ل" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "only", ur: "بس", ar: "إنما" }, pos: "RSTN", posLabel: "RSTN", grammar: { type: "restriction" } },
      { arabic: "أَنَا", transliteration: "anā", meaning: { en: "I am", ur: "میں", ar: "أنا" }, pos: "PRON", posLabel: "PRON", grammar: { person: "1st" } },
      { arabic: "بَشَرٌ", transliteration: "basharun", meaning: { en: "a human being", ur: "ایک انسان ہوں", ar: "بشر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ب-ش-ر" } },
      { arabic: "مِّثْلُكُمْ", transliteration: "mithlukum", meaning: { en: "like you", ur: "تم جیسا", ar: "مثلكم" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "يُوحَىٰ", transliteration: "yūḥā", meaning: { en: "is revealed", ur: "وحی کی جاتی ہے", ar: "يوحى" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "و-ح-ي" } },
      { arabic: "إِلَيَّ", transliteration: "ilayya", meaning: { en: "to me", ur: "میری طرف", ar: "إلي" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "أَنَّمَا", transliteration: "annamā", meaning: { en: "that", ur: "کہ", ar: "أنما" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "إِلَٰهُكُمْ", transliteration: "ilāhukum", meaning: { en: "your god", ur: "تمہارا معبود", ar: "إلهكم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ل-ه" } },
      { arabic: "إِلَٰهٌ", transliteration: "ilāhun", meaning: { en: "is God", ur: "ایک معبود ہے", ar: "إله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ل-ه" } },
      { arabic: "وَاحِدٌ", transliteration: "wāḥidun", meaning: { en: "One", ur: "ایک ہی", ar: "واحد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative" } },
      { arabic: "فَاسْتَقِيمُوا", transliteration: "fastaqīmū", meaning: { en: "so take the straight path", ur: "پس سیدھے ہو جاؤ", ar: "فاستقيموا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", mood: "imperative", root: "ق-و-م" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "to Him", ur: "اس کی طرف", ar: "إليه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "وَاسْتَغْفِرُوهُ", transliteration: "wastaghfirūhu", meaning: { en: "and ask forgiveness of Him", ur: "اور اس سے مغفرت مانگو", ar: "واستغفروه" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", mood: "imperative", root: "غ-ف-ر" } },
      { arabic: "وَوَيْلٌ", transliteration: "wawaylun", meaning: { en: "and woe", ur: "اور ہلاکت ہے", ar: "وويل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative" } },
      { arabic: "لِّلْمُشْرِكِينَ", transliteration: "lilmushrikīna", meaning: { en: "to the polytheists", ur: "مشرکین کیلئے", ar: "للمشركين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural", root: "ش-ر-ك" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مبتدأ + خبر' },
        { from: 10, to: 11, label: 'موصوف + صفت' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 12, to: 14, label: 'عطف' },
        { from: 10, to: 15, label: 'عطف' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "الَّذِينَ لَا يُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ كَافِرُونَ",
    words: [
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "وہ جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُؤْتُونَ", transliteration: "yuʾtūna", meaning: { en: "give", ur: "دیتے", ar: "يؤتون" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-ت-ي" } },
      { arabic: "الزَّكَاةَ", transliteration: "al-zakāta", meaning: { en: "zakah", ur: "زکوٰۃ", ar: "الزكاة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ز-ك-و" } },
      { arabic: "وَهُم", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ", ar: "وهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "بِالْآخِرَةِ", transliteration: "bil-ākhirati", meaning: { en: "in the Hereafter", ur: "آخرت کے بارے میں", ar: "بالآخرة" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", number: "plural" } },
      { arabic: "كَافِرُونَ", transliteration: "kāfirūna", meaning: { en: "are disbelievers", ur: "انکار کرنے والے ہیں", ar: "كافرون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ك-ف-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَعَمِلُوا", transliteration: "waʿamilū", meaning: { en: "and do", ur: "اور کئے", ar: "وعملوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "الصَّالِحَاتِ", transliteration: "al-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک اعمال", ar: "الصالحات" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", number: "plural", root: "ص-ل-ح" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کیلئے ہے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "أَجْرٌ", transliteration: "ajrun", meaning: { en: "a reward", ur: "اجر", ar: "أجر" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ج-ر" } },
      { arabic: "غَيْرُ", transliteration: "ghayru", meaning: { en: "without", ur: "بغیر", ar: "غير" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مَمْنُونٍ", transliteration: "mamnūnin", meaning: { en: "end", ur: "ختم ہونے کے", ar: "ممنون" }, pos: "PP", posLabel: "PP", grammar: { case: "genitive", root: "م-ن-ن" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "قُلْ أَئِنَّكُمْ لَتَكْفُرُونَ بِالَّذِي خَلَقَ الْأَرْضَ فِي يَوْمَيْنِ وَتَجْعَلُونَ لَهُ أَندَادًا ذَٰلِكَ رَبُّ الْعَالَمِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو", ar: "قل" }, pos: "V", posLabel: "V", grammar: { form: "I", mood: "imperative", root: "ق-و-ل" } },
      { arabic: "أَئِنَّكُمْ", transliteration: "aʾinnakum", meaning: { en: "Do you indeed", ur: "کیا تم واقعی", ar: "أإنكم" }, pos: "INTG+ACC", posLabel: "INTG+ACC", grammar: { type: "interrogative" } },
      { arabic: "لَتَكْفُرُونَ", transliteration: "latakfurūna", meaning: { en: "disbelieve", ur: "انکار کرتے ہو", ar: "لتكفرون" }, pos: "EMPH+V", posLabel: "EMPH+V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "بِالَّذِي", transliteration: "billadhī", meaning: { en: "in the One Who", ur: "اس سے جس نے", ar: "بالذي" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "الْأَرْضَ", transliteration: "al-arḍa", meaning: { en: "the earth", ur: "زمین کو", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "يَوْمَيْنِ", transliteration: "yawmayni", meaning: { en: "two days", ur: "دو دن", ar: "يومين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "dual" } },
      { arabic: "وَتَجْعَلُونَ", transliteration: "watajʿalūna", meaning: { en: "and you attribute", ur: "اور تم بناتے ہو", ar: "وتجعلون" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to Him", ur: "اس کیلئے", ar: "له" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect object" } },
      { arabic: "أَندَادًا", transliteration: "andādan", meaning: { en: "equals", ur: "شریک", ar: "أندادا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ن-د-د" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "وہی ہے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "رَبُّ", transliteration: "rabbu", meaning: { en: "the Lord", ur: "رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "الْعَالَمِينَ", transliteration: "al-ʿālamīna", meaning: { en: "of the worlds", ur: "جہانوں کا", ar: "العالمين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 5, to: 9, label: 'عطف' },
        { from: 12, to: 13, label: 'مبتدأ + خبر' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَجَعَلَ فِيهَا رَوَاسِيَ مِن فَوْقِهَا وَبَارَكَ فِيهَا وَقَدَّرَ فِيهَا أَقْوَاتَهَا فِي أَرْبَعَةِ أَيَّامٍ سَوَاءً لِّلسَّائِلِينَ",
    words: [
      { arabic: "وَجَعَلَ", transliteration: "wajaʿala", meaning: { en: "And He placed", ur: "اور بنائے", ar: "وجعل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "رَوَاسِيَ", transliteration: "rawāsiya", meaning: { en: "firmly set mountains", ur: "پہاڑ", ar: "رواسي" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ر-س-و" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "فَوْقِهَا", transliteration: "fawqihā", meaning: { en: "above it", ur: "اس کے اوپر", ar: "فوقها" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَبَارَكَ", transliteration: "wabāraka", meaning: { en: "and blessed", ur: "اور برکت دی", ar: "وبارك" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "III", root: "ب-ر-ك" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "وَقَدَّرَ", transliteration: "waqaddara", meaning: { en: "and determined", ur: "اور مقرر کیں", ar: "وقدر" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ق-د-ر" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "location" } },
      { arabic: "أَقْوَاتَهَا", transliteration: "aqwātahā", meaning: { en: "its sustenance", ur: "اس کی روزیاں", ar: "أقواتها" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ق-و-ت" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "أَرْبَعَةِ", transliteration: "arbaʿati", meaning: { en: "four", ur: "چار", ar: "أربعة" }, pos: "NUM", posLabel: "NUM", grammar: { case: "genitive" } },
      { arabic: "أَيَّامٍ", transliteration: "ayyāmin", meaning: { en: "days", ur: "دنوں میں", ar: "أيام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "سَوَاءً", transliteration: "sawāʾan", meaning: { en: "equal", ur: "برابر", ar: "سواء" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لِّلسَّائِلِينَ", transliteration: "lil-sāʾilīna", meaning: { en: "for those who ask", ur: "پوچھنے والوں کیلئے", ar: "للسائلين" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural", root: "س-أ-ل" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 1, to: 6, label: 'عطف' },
        { from: 6, to: 8, label: 'عطف' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ فَقَالَ لَهَا وَلِلْأَرْضِ ائْتِيَا طَوْعًا أَوْ كَرْهًا قَالَتَا أَتَيْنَا طَائِعِينَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "اسْتَوَىٰ", transliteration: "istawā", meaning: { en: "He directed Himself", ur: "متوجہ ہوا", ar: "استوى" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "س-و-ي" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "السَّمَاءِ", transliteration: "al-samāʾi", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "وَهِيَ", transliteration: "wahiya", meaning: { en: "while it was", ur: "اور وہ تھا", ar: "وهي" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { type: "circumstantial" } },
      { arabic: "دُخَانٌ", transliteration: "dukhānun", meaning: { en: "smoke", ur: "دھواں", ar: "دخان" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "د-خ-ن" } },
      { arabic: "فَقَالَ", transliteration: "faqāla", meaning: { en: "and He said", ur: "پس فرمایا", ar: "فقال" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لَهَا", transliteration: "lahā", meaning: { en: "to it", ur: "اس سے", ar: "لها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect-object" } },
      { arabic: "وَلِلْأَرْضِ", transliteration: "walil-arḍi", meaning: { en: "and to the earth", ur: "اور زمین سے", ar: "وللأرض" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "ائْتِيَا", transliteration: "iʾtiyā", meaning: { en: "Come", ur: "آ جاؤ", ar: "ائتيا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ت-ي", mood: "imperative", number: "dual" } },
      { arabic: "طَوْعًا", transliteration: "ṭawʿan", meaning: { en: "willingly", ur: "خوشی سے", ar: "طوعا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ط-و-ع" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "كَرْهًا", transliteration: "karhan", meaning: { en: "unwillingly", ur: "مجبوری سے", ar: "كرها" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ر-ه" } },
      { arabic: "قَالَتَا", transliteration: "qālatā", meaning: { en: "They both said", ur: "دونوں نے کہا", ar: "قالتا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", number: "dual" } },
      { arabic: "أَتَيْنَا", transliteration: "ataynā", meaning: { en: "We have come", ur: "ہم آ گئے", ar: "أتينا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "أ-ت-ي" } },
      { arabic: "طَائِعِينَ", transliteration: "ṭāʾiʿīna", meaning: { en: "willingly", ur: "فرمانبردار ہو کر", ar: "طائعين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ط-و-ع" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'عطف' },
        { from: 11, to: 13, label: 'عطف' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "فَقَضَاهُنَّ سَبْعَ سَمَاوَاتٍ فِي يَوْمَيْنِ وَأَوْحَىٰ فِي كُلِّ سَمَاءٍ أَمْرَهَا ۚ وَزَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَحِفْظًا ۚ ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ",
    words: [
      { arabic: "فَقَضَاهُنَّ", transliteration: "faqaḍāhunna", meaning: { en: "And He completed them", ur: "پس انہیں بنا دیا", ar: "فقضاهن" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ق-ض-ي" } },
      { arabic: "سَبْعَ", transliteration: "sabʿa", meaning: { en: "as seven", ur: "سات", ar: "سبع" }, pos: "NUM", posLabel: "NUM", grammar: { case: "accusative" } },
      { arabic: "سَمَاوَاتٍ", transliteration: "samāwātin", meaning: { en: "heavens", ur: "آسمان", ar: "سماوات" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "س-م-و" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "يَوْمَيْنِ", transliteration: "yawmayni", meaning: { en: "two days", ur: "دو دنوں", ar: "يومين" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "dual" } },
      { arabic: "وَأَوْحَىٰ", transliteration: "wa-awḥā", meaning: { en: "and inspired", ur: "اور وحی کی", ar: "وأوحى" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "و-ح-ي" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "each", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "سَمَاءٍ", transliteration: "samāʾin", meaning: { en: "heaven", ur: "آسمان میں", ar: "سماء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-م-و" } },
      { arabic: "أَمْرَهَا", transliteration: "amrahā", meaning: { en: "its affair", ur: "اس کا حکم", ar: "أمرها" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "أ-م-ر" } },
      { arabic: "وَزَيَّنَّا", transliteration: "wazayyannā", meaning: { en: "And We adorned", ur: "اور ہم نے سجایا", ar: "وزينا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ز-ي-ن", person: "1st" } },
      { arabic: "السَّمَاءَ", transliteration: "al-samāʾa", meaning: { en: "the heaven", ur: "آسمان کو", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-م-و" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "the nearest", ur: "نچلے", ar: "الدنيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "بِمَصَابِيحَ", transliteration: "bimaṣābīḥa", meaning: { en: "with lamps", ur: "چراغوں سے", ar: "بمصابيح" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", number: "plural", root: "ص-ب-ح" } },
      { arabic: "وَحِفْظًا", transliteration: "waḥifẓan", meaning: { en: "and as protection", ur: "اور حفاظت", ar: "وحفظا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ح-ف-ظ" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ ہے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "تَقْدِيرُ", transliteration: "taqdīru", meaning: { en: "the determination", ur: "اندازہ", ar: "تقدير" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-د-ر" } },
      { arabic: "الْعَزِيزِ", transliteration: "al-ʿazīzi", meaning: { en: "of the Exalted", ur: "غالب", ar: "العزيز" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ز-ز" } },
      { arabic: "الْعَلِيمِ", transliteration: "al-ʿalīmi", meaning: { en: "the Knowing", ur: "جاننے والے کا", ar: "العليم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ع-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + مفعول به' },
        { from: 16, to: 17, label: 'مبتدأ + خبر' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "فَإِنْ أَعْرَضُوا فَقُلْ أَنذَرْتُكُمْ صَاعِقَةً مِّثْلَ صَاعِقَةِ عَادٍ وَثَمُودَ",
    words: [
      { arabic: "فَإِنْ", transliteration: "fa-in", meaning: { en: "But if", ur: "پس اگر", ar: "فإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "أَعْرَضُوا", transliteration: "aʿraḍū", meaning: { en: "they turn away", ur: "وہ منہ موڑیں", ar: "أعرضوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ع-ر-ض" } },
      { arabic: "فَقُلْ", transliteration: "faqul", meaning: { en: "then say", ur: "تو کہہ دو", ar: "فقل" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "أَنذَرْتُكُمْ", transliteration: "andhartukum", meaning: { en: "I have warned you", ur: "میں تمہیں ڈراتا ہوں", ar: "أنذرتكم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ن-ذ-ر" } },
      { arabic: "صَاعِقَةً", transliteration: "ṣāʿiqatan", meaning: { en: "of a thunderbolt", ur: "ایک بجلی سے", ar: "صاعقة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ص-ع-ق" } },
      { arabic: "مِّثْلَ", transliteration: "mithla", meaning: { en: "like", ur: "جیسی", ar: "مثل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "صَاعِقَةِ", transliteration: "ṣāʿiqati", meaning: { en: "the thunderbolt", ur: "بجلی", ar: "صاعقة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ص-ع-ق" } },
      { arabic: "عَادٍ", transliteration: "ʿādin", meaning: { en: "of Aad", ur: "عاد", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { case: "genitive", type: "proper-noun" } },
      { arabic: "وَثَمُودَ", transliteration: "wathamūda", meaning: { en: "and Thamud", ur: "اور ثمود کی", ar: "وثمود" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", type: "proper-noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'عطف' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "إِذْ جَاءَتْهُمُ الرُّسُلُ مِن بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ أَلَّا تَعْبُدُوا إِلَّا اللَّهَ ۖ قَالُوا لَوْ شَاءَ رَبُّنَا لَأَنزَلَ مَلَائِكَةً فَإِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب", ar: "إذ" }, pos: "PART", posLabel: "PART", grammar: { type: "temporal" } },
      { arabic: "جَاءَتْهُمُ", transliteration: "jāʾathumu", meaning: { en: "came to them", ur: "ان کے پاس آئے", ar: "جاءتهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "الرُّسُلُ", transliteration: "al-rusulu", meaning: { en: "the messengers", ur: "رسول", ar: "الرسل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ر-س-ل" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "بَيْنِ", transliteration: "bayni", meaning: { en: "before", ur: "سامنے", ar: "بين" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", meaning: { en: "them", ur: "ان کے", ar: "أيديهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ي-د-ي" } },
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "and from", ur: "اور سے", ar: "ومن" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "source" } },
      { arabic: "خَلْفِهِمْ", transliteration: "khalfihim", meaning: { en: "behind them", ur: "ان کے پیچھے", ar: "خلفهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "that not", ur: "کہ نہ", ar: "ألا" }, pos: "PART", posLabel: "PART", grammar: { type: "prohibition" } },
      { arabic: "تَعْبُدُوا", transliteration: "taʿbudū", meaning: { en: "you worship", ur: "عبادت کرو", ar: "تعبدوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ب-د" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXCEPT", posLabel: "EXCEPT", grammar: { type: "exception" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ل-ه" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They said", ur: "انہوں نے کہا", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If", ur: "اگر", ar: "لو" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional-unreal" } },
      { arabic: "شَاءَ", transliteration: "shāʾa", meaning: { en: "had willed", ur: "چاہتا", ar: "شاء" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "رَبُّنَا", transliteration: "rabbunā", meaning: { en: "our Lord", ur: "ہمارا رب", ar: "ربنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "لَأَنزَلَ", transliteration: "la-anzala", meaning: { en: "He would have sent", ur: "تو نازل فرماتا", ar: "لأنزل" }, pos: "EMPH+V", posLabel: "EMPH+V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "مَلَائِكَةً", transliteration: "malāʾikatan", meaning: { en: "angels", ur: "فرشتے", ar: "ملائكة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "فَإِنَّا", transliteration: "fa-innā", meaning: { en: "so indeed, we", ur: "پس بیشک ہم", ar: "فإنا" }, pos: "CONJ+ACC+PRON", posLabel: "CONJ+ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "in that which", ur: "جس چیز کے ساتھ", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "أُرْسِلْتُم", transliteration: "ursiltum", meaning: { en: "you were sent", ur: "تم بھیجے گئے", ar: "أرسلتم" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "ر-س-ل" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "with it", ur: "اس کے ساتھ", ar: "به" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "كَافِرُونَ", transliteration: "kāfirūna", meaning: { en: "are disbelievers", ur: "انکار کرنے والے ہیں", ar: "كافرون" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ك-ف-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + مفعول به' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ بِغَيْرِ الْحَقِّ وَقَالُوا مَنْ أَشَدُّ مِنَّا قُوَّةً ۖ أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً ۖ وَكَانُوا بِآيَاتِنَا يَجْحَدُونَ",
    words: [
      { arabic: "فَأَمَّا", transliteration: "fa-ammā", meaning: { en: "As for", ur: "پس جہاں تک", ar: "فأما" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "conditional-detail" } },
      { arabic: "عَادٌ", transliteration: "ʿādun", meaning: { en: "Aad", ur: "عاد کا تعلق ہے", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { case: "nominative", type: "proper-noun" } },
      { arabic: "فَاسْتَكْبَرُوا", transliteration: "fastakbarū", meaning: { en: "they were arrogant", ur: "تو انہوں نے تکبر کیا", ar: "فاستكبروا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "ك-ب-ر" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the land", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ر-ض" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "بغیر", ar: "بغير" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "الْحَقِّ", transliteration: "al-ḥaqqi", meaning: { en: "right", ur: "حق کے", ar: "الحق" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ق-ق" } },
      { arabic: "وَقَالُوا", transliteration: "waqālū", meaning: { en: "and they said", ur: "اور کہا", ar: "وقالوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "Who is", ur: "کون ہے", ar: "من" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "أَشَدُّ", transliteration: "ashaddu", meaning: { en: "greater", ur: "زیادہ طاقتور", ar: "أشد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ش-د-د", degree: "comparative" } },
      { arabic: "مِنَّا", transliteration: "minnā", meaning: { en: "than us", ur: "ہم سے", ar: "منا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "comparison" } },
      { arabic: "قُوَّةً", transliteration: "quwwatan", meaning: { en: "in strength", ur: "طاقت میں", ar: "قوة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-ي", role: "specification" } },
      { arabic: "أَوَلَمْ", transliteration: "awalam", meaning: { en: "Did they not", ur: "کیا نہیں", ar: "أولم" }, pos: "INTG+NEG", posLabel: "INTG+NEG", grammar: { type: "interrogative" } },
      { arabic: "يَرَوْا", transliteration: "yaraw", meaning: { en: "see", ur: "دیکھا", ar: "يروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي", mood: "jussive" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "subordinating" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ل-ه" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "خَلَقَهُمْ", transliteration: "khalaqahum", meaning: { en: "created them", ur: "انہیں پیدا کیا", ar: "خلقهم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd", type: "separation" } },
      { arabic: "أَشَدُّ", transliteration: "ashaddu", meaning: { en: "greater", ur: "زیادہ طاقتور", ar: "أشد" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ش-د-د", degree: "comparative" } },
      { arabic: "مِنْهُمْ", transliteration: "minhum", meaning: { en: "than them", ur: "ان سے", ar: "منهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "comparison" } },
      { arabic: "قُوَّةً", transliteration: "quwwatan", meaning: { en: "in strength", ur: "طاقت میں", ar: "قوة" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-و-ي", role: "specification" } },
      { arabic: "وَكَانُوا", transliteration: "wakānū", meaning: { en: "and they used to", ur: "اور وہ تھے", ar: "وكانوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "بِآيَاتِنَا", transliteration: "biāyātinā", meaning: { en: "Our signs", ur: "ہماری آیتوں کا", ar: "بآياتنا" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "أ-ي-ي" } },
      { arabic: "يَجْحَدُونَ", transliteration: "yajḥadūna", meaning: { en: "rejecting", ur: "انکار کرتے تھے", ar: "يجحدون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ح-د" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'موصول + صلة' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا فِي أَيَّامٍ نَّحِسَاتٍ لِّنُذِيقَهُمْ عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا ۖ وَلَعَذَابُ الْآخِرَةِ أَخْزَىٰ ۖ وَهُمْ لَا يُنصَرُونَ",
    words: [
      { arabic: "فَأَرْسَلْنَا", transliteration: "fa-arsalnā", meaning: { en: "So We sent", ur: "پس ہم نے بھیجی", ar: "فأرسلنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ر-س-ل", person: "1st" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "رِيحًا", transliteration: "rīḥan", meaning: { en: "a wind", ur: "ایک ہوا", ar: "ريحا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ر-و-ح" } },
      { arabic: "صَرْصَرًا", transliteration: "ṣarṣaran", meaning: { en: "screaming", ur: "تیز و تند", ar: "صرصرا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "during", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "أَيَّامٍ", transliteration: "ayyāmin", meaning: { en: "days", ur: "دنوں", ar: "أيام" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "نَّحِسَاتٍ", transliteration: "naḥisātin", meaning: { en: "of misfortune", ur: "منحوس", ar: "نحسات" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", number: "plural", root: "ن-ح-س" } },
      { arabic: "لِّنُذِيقَهُمْ", transliteration: "linudhīqahum", meaning: { en: "to make them taste", ur: "تاکہ انہیں چکھائیں", ar: "لنذيقهم" }, pos: "P+V+PRON", posLabel: "P+V+PRON", grammar: { form: "IV", root: "ذ-و-ق" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", meaning: { en: "the punishment of", ur: "عذاب", ar: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "الْخِزْيِ", transliteration: "al-khizyi", meaning: { en: "disgrace", ur: "رسوائی کا", ar: "الخزي" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ز-ي" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "الْحَيَاةِ", transliteration: "al-ḥayāti", meaning: { en: "the life", ur: "زندگی", ar: "الحياة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ي-ي" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of this world", ur: "دنیا کی", ar: "الدنيا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "وَلَعَذَابُ", transliteration: "walaʿadhābu", meaning: { en: "and surely the punishment", ur: "اور یقیناً عذاب", ar: "ولعذاب" }, pos: "CONJ+EMPH+N", posLabel: "CONJ+EMPH+N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "الْآخِرَةِ", transliteration: "al-ākhirati", meaning: { en: "of the Hereafter", ur: "آخرت کا", ar: "الآخرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-خ-ر" } },
      { arabic: "أَخْزَىٰ", transliteration: "akhzā", meaning: { en: "is more disgracing", ur: "زیادہ رسوا کن ہے", ar: "أخزى" }, pos: "ADJ", posLabel: "ADJ", grammar: { root: "خ-ز-ي", degree: "comparative" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ", ar: "وهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "will not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُنصَرُونَ", transliteration: "yunṣarūna", meaning: { en: "be helped", ur: "مدد کیے جائیں گے", ar: "ينصرون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ن-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 16, label: 'مبتدأ + خبر' },
        { from: 18, to: 19, label: 'نفی + فعل' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "وَأَمَّا ثَمُودُ فَهَدَيْنَاهُمْ فَاسْتَحَبُّوا الْعَمَىٰ عَلَى الْهُدَىٰ فَأَخَذَتْهُمْ صَاعِقَةُ الْعَذَابِ الْهُونِ بِمَا كَانُوا يَكْسِبُونَ",
    words: [
      { arabic: "وَأَمَّا", transliteration: "wa-ammā", meaning: { en: "And as for", ur: "اور جہاں تک", ar: "وأما" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "conditional-detail" } },
      { arabic: "ثَمُودُ", transliteration: "thamūdu", meaning: { en: "Thamud", ur: "ثمود", ar: "ثمود" }, pos: "N", posLabel: "N", grammar: { case: "nominative", type: "proper-noun" } },
      { arabic: "فَهَدَيْنَاهُمْ", transliteration: "fahadaynāhum", meaning: { en: "We guided them", ur: "تو ہم نے انہیں راہ دکھائی", ar: "فهديناهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ه-د-ي", person: "1st" } },
      { arabic: "فَاسْتَحَبُّوا", transliteration: "fastaḥabbū", meaning: { en: "but they preferred", ur: "پر انہوں نے پسند کیا", ar: "فاستحبوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "ح-ب-ب" } },
      { arabic: "الْعَمَىٰ", transliteration: "al-ʿamā", meaning: { en: "blindness", ur: "اندھا پن", ar: "العمى" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-م-ي" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "P", posLabel: "P", grammar: { role: "preference" } },
      { arabic: "الْهُدَىٰ", transliteration: "al-hudā", meaning: { en: "guidance", ur: "ہدایت", ar: "الهدى" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ه-د-ي" } },
      { arabic: "فَأَخَذَتْهُمْ", transliteration: "fa-akhadhat'hum", meaning: { en: "so seized them", ur: "پس انہیں پکڑ لیا", ar: "فأخذتهم" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "أ-خ-ذ" } },
      { arabic: "صَاعِقَةُ", transliteration: "ṣāʿiqatu", meaning: { en: "a thunderbolt of", ur: "بجلی", ar: "صاعقة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ص-ع-ق" } },
      { arabic: "الْعَذَابِ", transliteration: "al-ʿadhābi", meaning: { en: "the punishment", ur: "عذاب", ar: "العذاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ذ-ب" } },
      { arabic: "الْهُونِ", transliteration: "al-hūni", meaning: { en: "of humiliation", ur: "ذلت کا", ar: "الهون" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ه-و-ن" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "اس وجہ سے جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "causal" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", meaning: { en: "earn", ur: "کماتے تھے", ar: "يكسبون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-س-ب" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "وَنَجَّيْنَا الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ",
    words: [
      { arabic: "وَنَجَّيْنَا", transliteration: "wanajjaynā", meaning: { en: "And We saved", ur: "اور ہم نے بچا لیا", ar: "ونجينا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ن-ج-و", person: "1st" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کو جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَكَانُوا", transliteration: "wakānū", meaning: { en: "and used to", ur: "اور وہ تھے", ar: "وكانوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "يَتَّقُونَ", transliteration: "yattaqūna", meaning: { en: "fear Allah", ur: "پرہیزگاری کرتے تھے", ar: "يتقون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "و-ق-ي" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'عطف' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَيَوْمَ يُحْشَرُ أَعْدَاءُ اللَّهِ إِلَى النَّارِ فَهُمْ يُوزَعُونَ",
    words: [
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "And the Day", ur: "اور جس دن", ar: "ويوم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "يُحْشَرُ", transliteration: "yuḥsharu", meaning: { en: "will be gathered", ur: "جمع کیے جائیں گے", ar: "يحشر" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ح-ش-ر" } },
      { arabic: "أَعْدَاءُ", transliteration: "aʿdāʾu", meaning: { en: "the enemies", ur: "دشمن", ar: "أعداء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "ع-د-و" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "the Fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ر" } },
      { arabic: "فَهُمْ", transliteration: "fahum", meaning: { en: "and they", ur: "پس وہ", ar: "فهم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "يُوزَعُونَ", transliteration: "yūzaʿūna", meaning: { en: "will be driven", ur: "روکے جائیں گے", ar: "يوزعون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ز-ع" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }, { from: 3, to: 4, label: 'مضاف + مضاف إليه' }, { from: 5, to: 6, label: 'جار + مجرور' }] }
  },

  20: {
    ayahNumber: 20,
    text: "حَتَّىٰ إِذَا مَا جَاءُوهَا شَهِدَ عَلَيْهِمْ سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُم بِمَا كَانُوا يَعْمَلُونَ",
    words: [
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "Until", ur: "یہاں تک کہ", ar: "حتى" }, pos: "P", posLabel: "P", grammar: { type: "limit" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "", ur: "", ar: "ما" }, pos: "PART", posLabel: "PART", grammar: { type: "extra" } },
      { arabic: "جَاءُوهَا", transliteration: "jāʾūhā", meaning: { en: "they reach it", ur: "وہ اس کے پاس آئیں", ar: "جاؤوها" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "شَهِدَ", transliteration: "shahida", meaning: { en: "will testify", ur: "گواہی دیں گے", ar: "شهد" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ه-د" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "against them", ur: "ان کے خلاف", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "against" } },
      { arabic: "سَمْعُهُمْ", transliteration: "samʿuhum", meaning: { en: "their hearing", ur: "ان کے کان", ar: "سمعهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "س-م-ع" } },
      { arabic: "وَأَبْصَارُهُمْ", transliteration: "wa-abṣāruhum", meaning: { en: "and their eyes", ur: "اور ان کی آنکھیں", ar: "وأبصارهم" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "nominative", root: "ب-ص-ر" } },
      { arabic: "وَجُلُودُهُم", transliteration: "wajulūduhum", meaning: { en: "and their skins", ur: "اور ان کی کھالیں", ar: "وجلودهم" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "nominative", root: "ج-ل-د" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "about what", ur: "جو کچھ", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ کرتے تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "عمل کرتے تھے", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ],
    structure: { relationships: [{ from: 5, to: 7, label: 'فعل + فاعل' }, { from: 7, to: 8, label: 'عطف' }, { from: 8, to: 9, label: 'عطف' }] }
  },

  21: {
    ayahNumber: 21,
    text: "وَقَالُوا لِجُلُودِهِمْ لِمَ شَهِدتُّمْ عَلَيْنَا ۖ قَالُوا أَنطَقَنَا اللَّهُ الَّذِي أَنطَقَ كُلَّ شَيْءٍ وَهُوَ خَلَقَكُمْ أَوَّلَ مَرَّةٍ وَإِلَيْهِ تُرْجَعُونَ",
    words: [
      { arabic: "وَقَالُوا", transliteration: "waqālū", meaning: { en: "And they will say", ur: "اور وہ کہیں گے", ar: "وقالوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لِجُلُودِهِمْ", transliteration: "lijulūdihim", meaning: { en: "to their skins", ur: "اپنی کھالوں سے", ar: "لجلودهم" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ج-ل-د" } },
      { arabic: "لِمَ", transliteration: "lima", meaning: { en: "Why did", ur: "کیوں", ar: "لم" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "شَهِدتُّمْ", transliteration: "shahidtum", meaning: { en: "you testify", ur: "تم نے گواہی دی", ar: "شهدتم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ه-د" } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", meaning: { en: "against us", ur: "ہمارے خلاف", ar: "علينا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "against" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ کہیں گی", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "أَنطَقَنَا", transliteration: "anṭaqanā", meaning: { en: "Made us speak", ur: "ہمیں بلوایا", ar: "أنطقنا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ن-ط-ق" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ل-ه" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أَنطَقَ", transliteration: "anṭaqa", meaning: { en: "made speak", ur: "بلوایا", ar: "أنطق" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ط-ق" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر", ar: "كل" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز کو", ar: "شيء" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He", ur: "اور اسی نے", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "خَلَقَكُمْ", transliteration: "khalaqakum", meaning: { en: "created you", ur: "تمہیں پیدا کیا", ar: "خلقكم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "أَوَّلَ", transliteration: "awwala", meaning: { en: "the first", ur: "پہلی", ar: "أول" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مَرَّةٍ", transliteration: "marratin", meaning: { en: "time", ur: "بار", ar: "مرة" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "م-ر-ر" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to Him", ur: "اور اسی کی طرف", ar: "وإليه" }, pos: "CONJ+P+PRON", posLabel: "CONJ+P+PRON", grammar: { role: "direction" } },
      { arabic: "تُرْجَعُونَ", transliteration: "turjaʿūna", meaning: { en: "you will be returned", ur: "تم لوٹائے جاؤ گے", ar: "ترجعون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ر-ج-ع" } }
    ],
    structure: { relationships: [{ from: 7, to: 8, label: 'فعل + فاعل' }, { from: 9, to: 10, label: 'موصول + صلة' }, { from: 11, to: 12, label: 'مضاف + مضاف إليه' }, { from: 15, to: 16, label: 'مضاف + مضاف إليه' }] }
  },

  22: {
    ayahNumber: 22,
    text: "وَمَا كُنتُمْ تَسْتَتِرُونَ أَن يَشْهَدَ عَلَيْكُمْ سَمْعُكُمْ وَلَا أَبْصَارُكُمْ وَلَا جُلُودُكُمْ وَلَٰكِن ظَنَنتُمْ أَنَّ اللَّهَ لَا يَعْلَمُ كَثِيرًا مِّمَّا تَعْمَلُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور تم نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "did you used to", ur: "تھے", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "تَسْتَتِرُونَ", transliteration: "tastatirūna", meaning: { en: "conceal yourselves", ur: "چھپتے", ar: "تستترون" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "س-ت-ر" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "lest", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { type: "subordinating" } },
      { arabic: "يَشْهَدَ", transliteration: "yashhada", meaning: { en: "would testify", ur: "گواہی دیں", ar: "يشهد" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ه-د", mood: "subjunctive" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "against you", ur: "تمہارے خلاف", ar: "عليكم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "against" } },
      { arabic: "سَمْعُكُمْ", transliteration: "samʿukum", meaning: { en: "your hearing", ur: "تمہارے کان", ar: "سمعكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "س-م-ع" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَبْصَارُكُمْ", transliteration: "abṣārukum", meaning: { en: "your sight", ur: "تمہاری آنکھیں", ar: "أبصاركم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ب-ص-ر" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "جُلُودُكُمْ", transliteration: "julūdukum", meaning: { en: "your skins", ur: "تمہاری کھالیں", ar: "جلودكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ج-ل-د" } },
      { arabic: "وَلَٰكِن", transliteration: "walākin", meaning: { en: "but", ur: "لیکن", ar: "ولكن" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "adversative" } },
      { arabic: "ظَنَنتُمْ", transliteration: "ẓanantum", meaning: { en: "you assumed", ur: "تم نے سمجھا", ar: "ظننتم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ظ-ن-ن" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "subordinating" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ل-ه" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "does not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", meaning: { en: "know", ur: "جانتا", ar: "يعلم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "كَثِيرًا", transliteration: "kathīran", meaning: { en: "much", ur: "بہت سی باتیں", ar: "كثيرا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ك-ث-ر" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "of what", ur: "جو", ar: "مما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ],
    structure: { relationships: [{ from: 5, to: 7, label: 'فعل + فاعل' }, { from: 16, to: 17, label: 'نفی + فعل' }] }
  },

  23: {
    ayahNumber: 23,
    text: "وَذَٰلِكُمْ ظَنُّكُمُ الَّذِي ظَنَنتُم بِرَبِّكُمْ أَرْدَاكُمْ فَأَصْبَحْتُم مِّنَ الْخَاسِرِينَ",
    words: [
      { arabic: "وَذَٰلِكُمْ", transliteration: "wadhālikum", meaning: { en: "And that", ur: "اور تمہارا یہ", ar: "وذلكم" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { type: "demonstrative" } },
      { arabic: "ظَنُّكُمُ", transliteration: "ẓannukumu", meaning: { en: "assumption of yours", ur: "گمان", ar: "ظنكم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ظ-ن-ن" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "which", ur: "جو", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "ظَنَنتُم", transliteration: "ẓanantum", meaning: { en: "you assumed", ur: "تم نے سمجھا", ar: "ظننتم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ظ-ن-ن" } },
      { arabic: "بِرَبِّكُمْ", transliteration: "birabbikum", meaning: { en: "about your Lord", ur: "اپنے رب کے بارے میں", ar: "بربكم" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "أَرْدَاكُمْ", transliteration: "ardākum", meaning: { en: "has ruined you", ur: "اس نے تمہیں ہلاک کیا", ar: "أرداكم" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ر-د-ي" } },
      { arabic: "فَأَصْبَحْتُم", transliteration: "fa-aṣbaḥtum", meaning: { en: "so you became", ur: "پس تم ہو گئے", ar: "فأصبحتم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ب-ح" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "among", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْخَاسِرِينَ", transliteration: "al-khāsirīna", meaning: { en: "the losers", ur: "خسارہ پانے والوں", ar: "الخاسرين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "خ-س-ر" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'مبتدأ + خبر' }, { from: 3, to: 4, label: 'موصول + صلة' }, { from: 8, to: 9, label: 'جار + مجرور' }] }
  },

  24: {
    ayahNumber: 24,
    text: "فَإِن يَصْبِرُوا فَالنَّارُ مَثْوًى لَّهُمْ ۖ وَإِن يَسْتَعْتِبُوا فَمَا هُم مِّنَ الْمُعْتَبِينَ",
    words: [
      { arabic: "فَإِن", transliteration: "fa-in", meaning: { en: "So if", ur: "پس اگر", ar: "فإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "يَصْبِرُوا", transliteration: "yaṣbirū", meaning: { en: "they are patient", ur: "وہ صبر کریں", ar: "يصبروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ب-ر", mood: "jussive" } },
      { arabic: "فَالنَّارُ", transliteration: "fal-nāru", meaning: { en: "the Fire", ur: "تو آگ", ar: "فالنار" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "nominative", root: "ن-و-ر" } },
      { arabic: "مَثْوًى", transliteration: "mathwan", meaning: { en: "is a residence", ur: "ٹھکانا ہے", ar: "مثوى" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ث-و-ي" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کا", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "and if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "conditional" } },
      { arabic: "يَسْتَعْتِبُوا", transliteration: "yastaʿtibū", meaning: { en: "they ask to return", ur: "وہ معافی چاہیں", ar: "يستعتبوا" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ع-ت-ب", mood: "jussive" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "they are not", ur: "تو وہ نہیں ہیں", ar: "فما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هم" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْمُعْتَبِينَ", transliteration: "al-muʿtabīna", meaning: { en: "those who will be allowed to make amends", ur: "قبول کیے جانے والوں", ar: "المعتبين" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural", root: "ع-ت-ب", form: "VIII" } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'مبتدأ + خبر' }, { from: 10, to: 11, label: 'جار + مجرور' }] }
  },

  25: {
    ayahNumber: 25,
    text: "وَقَيَّضْنَا لَهُمْ قُرَنَاءَ فَزَيَّنُوا لَهُم مَّا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَحَقَّ عَلَيْهِمُ الْقَوْلُ فِي أُمَمٍ قَدْ خَلَتْ مِن قَبْلِهِم مِّنَ الْجِنِّ وَالْإِنسِ ۖ إِنَّهُمْ كَانُوا خَاسِرِينَ",
    words: [
      { arabic: "وَقَيَّضْنَا", transliteration: "waqayyaḍnā", meaning: { en: "And We appointed", ur: "اور ہم نے مقرر کیے", ar: "وقيضنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ق-ي-ض", person: "1st" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect-object" } },
      { arabic: "قُرَنَاءَ", transliteration: "quranāʾa", meaning: { en: "companions", ur: "ساتھی", ar: "قرناء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ق-ر-ن" } },
      { arabic: "فَزَيَّنُوا", transliteration: "fazayyanū", meaning: { en: "and they made attractive", ur: "پس انہوں نے مزین کیا", ar: "فزينوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ز-ي-ن" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "to them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "indirect-object" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what was", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "سامنے", ar: "بين" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", meaning: { en: "them", ur: "ان کے", ar: "أيديهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ي-د-ي" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what was", ur: "اور جو", ar: "وما" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "خَلْفَهُمْ", transliteration: "khalfahum", meaning: { en: "behind them", ur: "ان کے پیچھے", ar: "خلفهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "وَحَقَّ", transliteration: "waḥaqqa", meaning: { en: "and was justified", ur: "اور ثابت ہو گئی", ar: "وحق" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ح-ق-ق" } },
      { arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "against them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "against" } },
      { arabic: "الْقَوْلُ", transliteration: "al-qawlu", meaning: { en: "the word", ur: "بات", ar: "القول" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-ل" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "among", ur: "میں", ar: "في" }, pos: "P", posLabel: "P", grammar: { role: "inclusion" } },
      { arabic: "أُمَمٍ", transliteration: "umamin", meaning: { en: "nations", ur: "امتوں", ar: "أمم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "already", ur: "جو", ar: "قد" }, pos: "PART", posLabel: "PART", grammar: { type: "certainty" } },
      { arabic: "خَلَتْ", transliteration: "khalat", meaning: { en: "passed", ur: "گزر چکی ہیں", ar: "خلت" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-و" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِهِم", transliteration: "qablihim", meaning: { en: "them", ur: "ان سے پہلے", ar: "قبلهم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْجِنِّ", transliteration: "al-jinni", meaning: { en: "jinn", ur: "جنوں", ar: "الجن" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ن-ن" } },
      { arabic: "وَالْإِنسِ", transliteration: "wal-insi", meaning: { en: "and mankind", ur: "اور انسانوں", ar: "والإنس" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "أ-ن-س" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک وہ", ar: "إنهم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "emphasis" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were", ur: "تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "خَاسِرِينَ", transliteration: "khāsirīna", meaning: { en: "losers", ur: "خسارہ پانے والے", ar: "خاسرين" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "خ-س-ر" } }
    ],
    structure: { relationships: [{ from: 1, to: 3, label: 'فعل + مفعول به' }, { from: 7, to: 8, label: 'مضاف + مضاف إليه' }, { from: 11, to: 13, label: 'فعل + فاعل' }, { from: 21, to: 22, label: 'عطف' }] }
  },

  26: {
    ayahNumber: 26,
    text: "وَقَالَ الَّذِينَ كَفَرُوا لَا تَسْمَعُوا لِهَٰذَا الْقُرْآنِ وَالْغَوْا فِيهِ لَعَلَّكُمْ تَغْلِبُونَ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا", ar: "وقال" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں نے جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَسْمَعُوا", transliteration: "tasmaʿū", meaning: { en: "listen", ur: "سنو", ar: "تسمعوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-م-ع" } },
      { arabic: "لِهَٰذَا", transliteration: "lihādhā", meaning: { en: "to this", ur: "اس", ar: "لهذا" }, pos: "P+DEM", posLabel: "P+DEM", grammar: { type: "demonstrative" } },
      { arabic: "الْقُرْآنِ", transliteration: "al-qurʾāni", meaning: { en: "Quran", ur: "قرآن کو", ar: "القرآن" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ق-ر-أ" } },
      { arabic: "وَالْغَوْا", transliteration: "walghaw", meaning: { en: "and make noise", ur: "اور شور مچاؤ", ar: "والغوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ل-غ-و" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "during it", ur: "اس کے دوران", ar: "فيه" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "temporal" } },
      { arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "that perhaps you", ur: "شاید تم", ar: "لعلكم" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "hope" } },
      { arabic: "تَغْلِبُونَ", transliteration: "taghlibūna", meaning: { en: "will overcome", ur: "غالب آ جاؤ", ar: "تغلبون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ل-ب" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'موصول + صلة' }, { from: 4, to: 5, label: 'نفی + فعل' }, { from: 6, to: 7, label: 'جار + مجرور' }] }
  },

  27: {
    ayahNumber: 27,
    text: "فَلَنُذِيقَنَّ الَّذِينَ كَفَرُوا عَذَابًا شَدِيدًا وَلَنَجْزِيَنَّهُمْ أَسْوَأَ الَّذِي كَانُوا يَعْمَلُونَ",
    words: [
      { arabic: "فَلَنُذِيقَنَّ", transliteration: "falanudīqanna", meaning: { en: "So We will surely make taste", ur: "پس ہم ضرور چکھائیں گے", ar: "فلنذيقن" }, pos: "CONJ+EMPH+V", posLabel: "CONJ+EMPH+V", grammar: { form: "IV", root: "ذ-و-ق" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "ان لوگوں کو جو", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "عَذَابًا", transliteration: "ʿadhāban", meaning: { en: "a punishment", ur: "عذاب", ar: "عذابا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ع-ذ-ب" } },
      { arabic: "شَدِيدًا", transliteration: "shadīdan", meaning: { en: "severe", ur: "سخت", ar: "شديدا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ش-د-د" } },
      { arabic: "وَلَنَجْزِيَنَّهُمْ", transliteration: "walanajziyannahum", meaning: { en: "and We will surely recompense them", ur: "اور ضرور بدلہ دیں گے", ar: "ولنجزينهم" }, pos: "CONJ+EMPH+V+PRON", posLabel: "CONJ+EMPH+V+PRON", grammar: { form: "I", root: "ج-ز-ي" } },
      { arabic: "أَسْوَأَ", transliteration: "aswaʾa", meaning: { en: "the worst", ur: "بدترین", ar: "أسوأ" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", degree: "superlative", root: "س-و-أ" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "of that which", ur: "جو کچھ", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ کرتے تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "عمل", ar: "يعملون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'موصول + صلة' }, { from: 4, to: 5, label: 'موصوف + صفت' }, { from: 8, to: 9, label: 'موصول + صلة' }] }
  },

  28: {
    ayahNumber: 28,
    text: "ذَٰلِكَ جَزَاءُ أَعْدَاءِ اللَّهِ النَّارُ ۖ لَهُمْ فِيهَا دَارُ الْخُلْدِ ۖ جَزَاءً بِمَا كَانُوا بِآيَاتِنَا يَجْحَدُونَ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ ہے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "جَزَاءُ", transliteration: "jazāʾu", meaning: { en: "the recompense", ur: "بدلہ", ar: "جزاء" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ج-ز-ي" } },
      { arabic: "أَعْدَاءِ", transliteration: "aʿdāʾi", meaning: { en: "of the enemies", ur: "دشمنوں کا", ar: "أعداء" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-د-و" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "النَّارُ", transliteration: "al-nāru", meaning: { en: "the Fire", ur: "آگ", ar: "النار" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-و-ر" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "For them", ur: "ان کے لیے", ar: "لهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "دَارُ", transliteration: "dāru", meaning: { en: "the home", ur: "گھر ہے", ar: "دار" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "د-و-ر" } },
      { arabic: "الْخُلْدِ", transliteration: "al-khuldi", meaning: { en: "of eternity", ur: "ہمیشگی کا", ar: "الخلد" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "خ-ل-د" } },
      { arabic: "جَزَاءً", transliteration: "jazāʾan", meaning: { en: "as recompense", ur: "بدلے میں", ar: "جزاء" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ز-ي" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "اس لیے جو", ar: "بما" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "causal" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ تھے", ar: "كانوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "بِآيَاتِنَا", transliteration: "biāyātinā", meaning: { en: "Our verses", ur: "ہماری آیتوں کا", ar: "بآياتنا" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "أ-ي-ي" } },
      { arabic: "يَجْحَدُونَ", transliteration: "yajḥadūna", meaning: { en: "rejecting", ur: "انکار کرتے تھے", ar: "يجحدون" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ح-د" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'مبتدأ + خبر' }, { from: 2, to: 3, label: 'مضاف + مضاف إليه' }, { from: 3, to: 4, label: 'مضاف + مضاف إليه' }, { from: 8, to: 9, label: 'مضاف + مضاف إليه' }] }
  },

  29: {
    ayahNumber: 29,
    text: "وَقَالَ الَّذِينَ كَفَرُوا رَبَّنَا أَرِنَا اللَّذَيْنِ أَضَلَّانَا مِنَ الْجِنِّ وَالْإِنسِ نَجْعَلْهُمَا تَحْتَ أَقْدَامِنَا لِيَكُونَا مِنَ الْأَسْفَلِينَ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And will say", ur: "اور کہیں گے", ar: "وقال" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "اے ہمارے رب", ar: "ربنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ر-ب-ب", type: "vocative" } },
      { arabic: "أَرِنَا", transliteration: "arinā", meaning: { en: "show us", ur: "ہمیں دکھا", ar: "أرنا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ر-أ-ي", mood: "imperative" } },
      { arabic: "اللَّذَيْنِ", transliteration: "alladhayni", meaning: { en: "those two who", ur: "ان دونوں کو جنہوں نے", ar: "اللذين" }, pos: "REL", posLabel: "REL", grammar: { number: "dual" } },
      { arabic: "أَضَلَّانَا", transliteration: "aḍallānā", meaning: { en: "misled us", ur: "ہمیں گمراہ کیا", ar: "أضلانا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ض-ل-ل", number: "dual" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْجِنِّ", transliteration: "al-jinni", meaning: { en: "the jinn", ur: "جنوں", ar: "الجن" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ن-ن" } },
      { arabic: "وَالْإِنسِ", transliteration: "wal-insi", meaning: { en: "and mankind", ur: "اور انسانوں", ar: "والإنس" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "أ-ن-س" } },
      { arabic: "نَجْعَلْهُمَا", transliteration: "najʿalhumā", meaning: { en: "We will put them", ur: "ہم انہیں رکھیں", ar: "نجعلهما" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "تَحْتَ", transliteration: "taḥta", meaning: { en: "under", ur: "نیچے", ar: "تحت" }, pos: "N", posLabel: "N", grammar: { role: "locative" } },
      { arabic: "أَقْدَامِنَا", transliteration: "aqdāminā", meaning: { en: "our feet", ur: "ہمارے قدموں کے", ar: "أقدامنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ق-د-م" } },
      { arabic: "لِيَكُونَا", transliteration: "liyakūnā", meaning: { en: "so they will be", ur: "تاکہ وہ ہوں", ar: "ليكونا" }, pos: "P+V", posLabel: "P+V", grammar: { form: "I", root: "ك-و-ن", mood: "subjunctive" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْأَسْفَلِينَ", transliteration: "al-asfalīna", meaning: { en: "the lowest", ur: "سب سے نیچے والوں", ar: "الأسفلين" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", number: "plural", root: "س-ف-ل" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'موصول + صلة' }, { from: 6, to: 7, label: 'موصول + صلة' }, { from: 9, to: 10, label: 'عطف' }, { from: 12, to: 13, label: 'مضاف + مضاف إليه' }, { from: 15, to: 16, label: 'جار + مجرور' }] }
  },

  30: {
    ayahNumber: 30,
    text: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ أَلَّا تَخَافُوا وَلَا تَحْزَنُوا وَأَبْشِرُوا بِالْجَنَّةِ الَّتِي كُنتُمْ تُوعَدُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک", ar: "إن" }, pos: "ACC", posLabel: "ACC", grammar: { type: "emphasis" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "said", ur: "کہتے ہیں", ar: "قالوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "رَبُّنَا", transliteration: "rabbunā", meaning: { en: "Our Lord is", ur: "ہمارا رب", ar: "ربنا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ ہے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ل-ه" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "and then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "اسْتَقَامُوا", transliteration: "istaqāmū", meaning: { en: "remained firm", ur: "ثابت قدم رہے", ar: "استقاموا" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ق-و-م" } },
      { arabic: "تَتَنَزَّلُ", transliteration: "tatanazzalu", meaning: { en: "will descend", ur: "اترتے ہیں", ar: "تتنزل" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ن-ز-ل" } },
      { arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "direction" } },
      { arabic: "الْمَلَائِكَةُ", transliteration: "al-malāʾikatu", meaning: { en: "the angels", ur: "فرشتے", ar: "الملائكة" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "Do not", ur: "مت", ar: "ألا" }, pos: "PART", posLabel: "PART", grammar: { type: "prohibition" } },
      { arabic: "تَخَافُوا", transliteration: "takhāfū", meaning: { en: "fear", ur: "ڈرو", ar: "تخافوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-و-ف" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَحْزَنُوا", transliteration: "taḥzanū", meaning: { en: "grieve", ur: "غم کرو", ar: "تحزنوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ح-ز-ن" } },
      { arabic: "وَأَبْشِرُوا", transliteration: "wa-abshirū", meaning: { en: "and rejoice", ur: "اور خوشخبری سنو", ar: "وأبشروا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ب-ش-ر", mood: "imperative" } },
      { arabic: "بِالْجَنَّةِ", transliteration: "bil-jannati", meaning: { en: "in Paradise", ur: "جنت کی", ar: "بالجنة" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ج-ن-ن" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "which", ur: "جس کا", ar: "التي" }, pos: "REL", posLabel: "REL", grammar: { gender: "feminine" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you were", ur: "تم سے", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-و-ن" } },
      { arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", meaning: { en: "promised", ur: "وعدہ کیا جاتا تھا", ar: "توعدون" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "و-ع-د" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'توکید' }, { from: 2, to: 3, label: 'موصول + صلة' }, { from: 4, to: 5, label: 'مبتدأ + خبر' }, { from: 8, to: 10, label: 'فعل + فاعل' }, { from: 17, to: 18, label: 'موصول + صلة' }] }
  },

  31: {
    ayahNumber: 31,
    text: "نَحْنُ أَوْلِيَآؤُكُمْ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَفِى ٱلْـَٔاخِرَةِ ۖ وَلَكُمْ فِيهَا مَا تَشْتَهِىٓ أَنفُسُكُمْ وَلَكُمْ فِيهَا مَا تَدَّعُونَ",
    words: [
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "أَوْلِيَآؤُكُمْ", transliteration: "awliyāukum", meaning: { en: "(are) your protectors", ur: "(are) your protectors" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", meaning: { en: "the life", ur: "the زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "(of) the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَفِى", transliteration: "wafī", meaning: { en: "and in", ur: "اور میں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْـَٔاخِرَةِ ۖ", transliteration: "l-ākhirati", meaning: { en: "the Hereafter", ur: "the آخرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَكُمْ", transliteration: "walakum", meaning: { en: "And for you", ur: "اور for تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "whatever" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَشْتَهِىٓ", transliteration: "tashtahī", meaning: { en: "desire", ur: "desire" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنفُسُكُمْ", transliteration: "anfusukum", meaning: { en: "your souls", ur: "your souls" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَكُمْ", transliteration: "walakum", meaning: { en: "and for you", ur: "اور for تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَدَّعُونَ", transliteration: "taddaʿūna", meaning: { en: "you ask", ur: "تم ask" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'موصول + صلة' }
      ],
    },
  },
  32: {
    ayahNumber: 32,
    text: "نُزُلًۭا مِّنْ غَفُورٍۢ رَّحِيمٍۢ",
    words: [
      { arabic: "نُزُلًۭا", transliteration: "nuzulan", meaning: { en: "A hospitable gift", ur: "A hospitable gift" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَفُورٍۢ", transliteration: "ghafūrin", meaning: { en: "(the) Oft-Forgiving", ur: "(the) Oft-Forgiving" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَّحِيمٍۢ", transliteration: "raḥīmin", meaning: { en: "(the) Most Merciful", ur: "(the) بہت مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    ayahNumber: 33,
    text: "وَمَنْ أَحْسَنُ قَوْلًۭا مِّمَّن دَعَآ إِلَى ٱللَّهِ وَعَمِلَ صَـٰلِحًۭا وَقَالَ إِنَّنِى مِنَ ٱلْمُسْلِمِينَ",
    words: [
      { arabic: "وَمَنْ", transliteration: "waman", meaning: { en: "And who", ur: "اور جو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَحْسَنُ", transliteration: "aḥsanu", meaning: { en: "(is) better", ur: "(is) better" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْلًۭا", transliteration: "qawlan", meaning: { en: "(in) speech", ur: "(میں) speech" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّن", transliteration: "mimman", meaning: { en: "than (one) who", ur: "than (one) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَعَآ", transliteration: "daʿā", meaning: { en: "invites", ur: "invites" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَمِلَ", transliteration: "waʿamila", meaning: { en: "and does", ur: "اور does" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", meaning: { en: "righteous (deeds)", ur: "نیک (deeds)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "and says", ur: "اور کہتا ہے" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِنَّنِى", transliteration: "innanī", meaning: { en: "Indeed, I am", ur: "بیشک, میں am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُسْلِمِينَ", transliteration: "l-mus'limīna", meaning: { en: "those who submit", ur: "جو لوگ submit" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  34: {
    ayahNumber: 34,
    text: "وَلَا تَسْتَوِى ٱلْحَسَنَةُ وَلَا ٱلسَّيِّئَةُ ۚ ٱدْفَعْ بِٱلَّتِى هِىَ أَحْسَنُ فَإِذَا ٱلَّذِى بَيْنَكَ وَبَيْنَهُۥ عَدَٰوَةٌۭ كَأَنَّهُۥ وَلِىٌّ حَمِيمٌۭ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَسْتَوِى", transliteration: "tastawī", meaning: { en: "(are) equal", ur: "(are) equal" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَسَنَةُ", transliteration: "l-ḥasanatu", meaning: { en: "the good (deed)", ur: "the اچھا (deed)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and", ur: "اور" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلسَّيِّئَةُ ۚ", transliteration: "l-sayi-atu", meaning: { en: "the evil (deed)", ur: "the برا (deed)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱدْفَعْ", transliteration: "id'faʿ", meaning: { en: "Repel", ur: "Repel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلَّتِى", transliteration: "bi-allatī", meaning: { en: "by (that) which", ur: "by (وہ) جو" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "هِىَ", transliteration: "hiya", meaning: { en: "[it]", ur: "[it]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَحْسَنُ", transliteration: "aḥsanu", meaning: { en: "(is) better", ur: "(is) better" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "then behold", ur: "پھر behold" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "One who", ur: "One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنَكَ", transliteration: "baynaka", meaning: { en: "between you", ur: "درمیان تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبَيْنَهُۥ", transliteration: "wabaynahu", meaning: { en: "and between him", ur: "اور درمیان him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَدَٰوَةٌۭ", transliteration: "ʿadāwatun", meaning: { en: "(was) enmity", ur: "(was) enmity" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَأَنَّهُۥ", transliteration: "ka-annahu", meaning: { en: "(will become) as if he", ur: "(will become) as if وہ" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلِىٌّ", transliteration: "waliyyun", meaning: { en: "(was) a friend", ur: "(was) a friend" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "حَمِيمٌۭ", transliteration: "ḥamīmun", meaning: { en: "intimate", ur: "intimate" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  35: {
    ayahNumber: 35,
    text: "وَمَا يُلَقَّىٰهَآ إِلَّا ٱلَّذِينَ صَبَرُوا۟ وَمَا يُلَقَّىٰهَآ إِلَّا ذُو حَظٍّ عَظِيمٍۢ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُلَقَّىٰهَآ", transliteration: "yulaqqāhā", meaning: { en: "it is granted", ur: "it is granted" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(to) those who", ur: "(کو) جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَبَرُوا۟", transliteration: "ṣabarū", meaning: { en: "(are) patient", ur: "(are) patient" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُلَقَّىٰهَآ", transliteration: "yulaqqāhā", meaning: { en: "it is granted", ur: "it is granted" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "(to the) owner", ur: "(کو the) owner" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَظٍّ", transliteration: "ḥaẓẓin", meaning: { en: "(of) fortune", ur: "(of) fortune" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَظِيمٍۢ", transliteration: "ʿaẓīmin", meaning: { en: "great", ur: "great" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  36: {
    ayahNumber: 36,
    text: "وَإِمَّا يَنزَغَنَّكَ مِنَ ٱلشَّيْطَـٰنِ نَزْغٌۭ فَٱسْتَعِذْ بِٱللَّهِ ۖ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ",
    words: [
      { arabic: "وَإِمَّا", transliteration: "wa-immā", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَنزَغَنَّكَ", transliteration: "yanzaghannaka", meaning: { en: "whisper comes to you", ur: "whisper comes کو تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلشَّيْطَـٰنِ", transliteration: "l-shayṭāni", meaning: { en: "the Shaitaan", ur: "the Shaitaan" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَزْغٌۭ", transliteration: "nazghun", meaning: { en: "an evil suggestion", ur: "an برا suggestion" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَٱسْتَعِذْ", transliteration: "fa-is'taʿidh", meaning: { en: "then seek refuge", ur: "پھر seek refuge" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِٱللَّهِ ۖ", transliteration: "bil-lahi", meaning: { en: "in Allah", ur: "میں اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "[He]", ur: "[وہ]" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلسَّمِيعُ", transliteration: "l-samīʿu", meaning: { en: "(is) the All-Hearer", ur: "(is) the سب-Hearer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", meaning: { en: "the All-Knower", ur: "the سب-Knower" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  37: {
    ayahNumber: 37,
    text: "وَمِنْ ءَايَـٰتِهِ ٱلَّيْلُ وَٱلنَّهَارُ وَٱلشَّمْسُ وَٱلْقَمَرُ ۚ لَا تَسْجُدُوا۟ لِلشَّمْسِ وَلَا لِلْقَمَرِ وَٱسْجُدُوا۟ لِلَّهِ ٱلَّذِى خَلَقَهُنَّ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",
    words: [
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "And of", ur: "اور of" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَايَـٰتِهِ", transliteration: "āyātihi", meaning: { en: "His Signs", ur: "His نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّيْلُ", transliteration: "al-laylu", meaning: { en: "(are) the night", ur: "(are) the رات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلنَّهَارُ", transliteration: "wal-nahāru", meaning: { en: "and the day", ur: "اور the دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَٱلشَّمْسُ", transliteration: "wal-shamsu", meaning: { en: "and the sun", ur: "اور the sun" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَٱلْقَمَرُ ۚ", transliteration: "wal-qamaru", meaning: { en: "and the moon", ur: "اور the moon" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(Do) not", ur: "(Do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَسْجُدُوا۟", transliteration: "tasjudū", meaning: { en: "prostrate", ur: "prostrate" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلشَّمْسِ", transliteration: "lilshamsi", meaning: { en: "to the sun", ur: "کو the sun" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِلْقَمَرِ", transliteration: "lil'qamari", meaning: { en: "to the moon", ur: "کو the moon" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَٱسْجُدُوا۟", transliteration: "wa-us'judū", meaning: { en: "but prostrate", ur: "لیکن prostrate" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", meaning: { en: "to Allah", ur: "کو اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "the One Who", ur: "the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقَهُنَّ", transliteration: "khalaqahunna", meaning: { en: "created them", ur: "پیدا کیا them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you", ur: "تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِيَّاهُ", transliteration: "iyyāhu", meaning: { en: "Him alone", ur: "Him alone" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", meaning: { en: "worship", ur: "عبادت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    ayahNumber: 38,
    text: "فَإِنِ ٱسْتَكْبَرُوا۟ فَٱلَّذِينَ عِندَ رَبِّكَ يُسَبِّحُونَ لَهُۥ بِٱلَّيْلِ وَٱلنَّهَارِ وَهُمْ لَا يَسْـَٔمُونَ ۩",
    words: [
      { arabic: "فَإِنِ", transliteration: "fa-ini", meaning: { en: "But if", ur: "لیکن if" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱسْتَكْبَرُوا۟", transliteration: "is'takbarū", meaning: { en: "they are arrogant", ur: "وہ لوگ are arrogant" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَٱلَّذِينَ", transliteration: "fa-alladhīna", meaning: { en: "then those who", ur: "پھر جو لوگ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "(are) near", ur: "(are) near" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُسَبِّحُونَ", transliteration: "yusabbiḥūna", meaning: { en: "glorify", ur: "glorify" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "Him", ur: "Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلَّيْلِ", transliteration: "bi-al-layli", meaning: { en: "by night", ur: "by رات" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَٱلنَّهَارِ", transliteration: "wal-nahāri", meaning: { en: "and day", ur: "اور دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "And they", ur: "اور وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَسْـَٔمُونَ ۩", transliteration: "yasamūna", meaning: { en: "tire", ur: "tire" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  39: {
    ayahNumber: 39,
    text: "وَمِنْ ءَايَـٰتِهِۦٓ أَنَّكَ تَرَى ٱلْأَرْضَ خَـٰشِعَةًۭ فَإِذَآ أَنزَلْنَا عَلَيْهَا ٱلْمَآءَ ٱهْتَزَّتْ وَرَبَتْ ۚ إِنَّ ٱلَّذِىٓ أَحْيَاهَا لَمُحْىِ ٱلْمَوْتَىٰٓ ۚ إِنَّهُۥ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ",
    words: [
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "And among", ur: "اور among" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَايَـٰتِهِۦٓ", transliteration: "āyātihi", meaning: { en: "His Signs", ur: "His نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّكَ", transliteration: "annaka", meaning: { en: "(is) that you", ur: "(is) وہ تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَرَى", transliteration: "tarā", meaning: { en: "see", ur: "دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰشِعَةًۭ", transliteration: "khāshiʿatan", meaning: { en: "barren", ur: "barren" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِذَآ", transliteration: "fa-idhā", meaning: { en: "but when", ur: "لیکن when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَنزَلْنَا", transliteration: "anzalnā", meaning: { en: "We send down", ur: "ہم send down" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "upon it", ur: "پر it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَآءَ", transliteration: "l-māa", meaning: { en: "water", ur: "پانی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱهْتَزَّتْ", transliteration: "ih'tazzat", meaning: { en: "it is stirred (to life)", ur: "it is stirred (کو زندگی)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَبَتْ ۚ", transliteration: "warabat", meaning: { en: "and grows", ur: "اور grows" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِىٓ", transliteration: "alladhī", meaning: { en: "the One Who", ur: "the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَحْيَاهَا", transliteration: "aḥyāhā", meaning: { en: "gives it life", ur: "gives it زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمُحْىِ", transliteration: "lamuḥ'yī", meaning: { en: "(is) surely the Giver of life", ur: "(is) یقیناً the Giver of زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَوْتَىٰٓ ۚ", transliteration: "l-mawtā", meaning: { en: "(to) the dead", ur: "(کو) the dead" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "(is) on", ur: "(is) پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "thing", ur: "thing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "All-Powerful", ur: "سب-Powerful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  40: {
    ayahNumber: 40,
    text: "إِنَّ ٱلَّذِينَ يُلْحِدُونَ فِىٓ ءَايَـٰتِنَا لَا يَخْفَوْنَ عَلَيْنَآ ۗ أَفَمَن يُلْقَىٰ فِى ٱلنَّارِ خَيْرٌ أَم مَّن يَأْتِىٓ ءَامِنًۭا يَوْمَ ٱلْقِيَـٰمَةِ ۚ ٱعْمَلُوا۟ مَا شِئْتُمْ ۖ إِنَّهُۥ بِمَا تَعْمَلُونَ بَصِيرٌ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُلْحِدُونَ", transliteration: "yul'ḥidūna", meaning: { en: "distort", ur: "distort" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "[in]", ur: "[میں]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", meaning: { en: "Our Verses", ur: "Our Verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(are) not", ur: "(are) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَخْفَوْنَ", transliteration: "yakhfawna", meaning: { en: "hidden", ur: "hidden" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْنَآ ۗ", transliteration: "ʿalaynā", meaning: { en: "from Us", ur: "سے Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَمَن", transliteration: "afaman", meaning: { en: "So, is (he) who", ur: "So, is (وہ) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُلْقَىٰ", transliteration: "yul'qā", meaning: { en: "is cast", ur: "is cast" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَيْرٌ", transliteration: "khayrun", meaning: { en: "better", ur: "better" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَم", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "(he) who", ur: "(وہ) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْتِىٓ", transliteration: "yatī", meaning: { en: "comes", ur: "comes" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَامِنًۭا", transliteration: "āminan", meaning: { en: "secure", ur: "secure" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(on the) Day", ur: "(پر the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقِيَـٰمَةِ ۚ", transliteration: "l-qiyāmati", meaning: { en: "(of) Resurrection", ur: "(of) Resurrection" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱعْمَلُوا۟", transliteration: "iʿ'malū", meaning: { en: "Do", ur: "Do" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "شِئْتُمْ ۖ", transliteration: "shi'tum", meaning: { en: "you will", ur: "تم will" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "of کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَصِيرٌ", transliteration: "baṣīrun", meaning: { en: "(is) All-Seer", ur: "(is) سب-Seer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'موصول + صلة' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  41: {
    ayahNumber: 41,
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِٱلذِّكْرِ لَمَّا جَآءَهُمْ ۖ وَإِنَّهُۥ لَكِتَـٰبٌ عَزِيزٌۭ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieve", ur: "disbelieve" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلذِّكْرِ", transliteration: "bil-dhik'ri", meaning: { en: "in the Reminder", ur: "میں the Reminder" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَهُمْ ۖ", transliteration: "jāahum", meaning: { en: "it comes to them", ur: "it comes کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", meaning: { en: "And indeed, it", ur: "اور بیشک, it" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَكِتَـٰبٌ", transliteration: "lakitābun", meaning: { en: "(is) surely a Book", ur: "(is) یقیناً a کتاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَزِيزٌۭ", transliteration: "ʿazīzun", meaning: { en: "mighty", ur: "mighty" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  42: {
    ayahNumber: 42,
    text: "لَّا يَأْتِيهِ ٱلْبَـٰطِلُ مِنۢ بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِۦ ۖ تَنزِيلٌۭ مِّنْ حَكِيمٍ حَمِيدٍۢ",
    words: [
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْتِيهِ", transliteration: "yatīhi", meaning: { en: "comes to it", ur: "comes کو it" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْبَـٰطِلُ", transliteration: "l-bāṭilu", meaning: { en: "the falsehood", ur: "the falsehood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنِ", transliteration: "bayni", meaning: { en: "before it", ur: "پہلے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدَيْهِ", transliteration: "yadayhi", meaning: { en: "before it", ur: "پہلے it" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خَلْفِهِۦ ۖ", transliteration: "khalfihi", meaning: { en: "behind it", ur: "behind it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَنزِيلٌۭ", transliteration: "tanzīlun", meaning: { en: "A Revelation", ur: "A Revelation" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَكِيمٍ", transliteration: "ḥakīmin", meaning: { en: "(the) All-Wise", ur: "(the) حکمت والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "حَمِيدٍۢ", transliteration: "ḥamīdin", meaning: { en: "(the) Praiseworthy", ur: "(the) Praiseworthy" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ],
    },
  },
  43: {
    ayahNumber: 43,
    text: "مَّا يُقَالُ لَكَ إِلَّا مَا قَدْ قِيلَ لِلرُّسُلِ مِن قَبْلِكَ ۚ إِنَّ رَبَّكَ لَذُو مَغْفِرَةٍۢ وَذُو عِقَابٍ أَلِيمٍۢ",
    words: [
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُقَالُ", transliteration: "yuqālu", meaning: { en: "is said", ur: "is کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكَ", transliteration: "laka", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "was said", ur: "was کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قِيلَ", transliteration: "qīla", meaning: { en: "was said", ur: "was کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلرُّسُلِ", transliteration: "lilrrusuli", meaning: { en: "to the Messengers", ur: "کو the Messengers" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before you", ur: "پہلے تم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِكَ ۚ", transliteration: "qablika", meaning: { en: "before you", ur: "پہلے تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَذُو", transliteration: "ladhū", meaning: { en: "(is) Possessor", ur: "(is) Possessor" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَغْفِرَةٍۢ", transliteration: "maghfiratin", meaning: { en: "(of) forgiveness", ur: "(of) مغفرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَذُو", transliteration: "wadhū", meaning: { en: "and Possessor", ur: "اور Possessor" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عِقَابٍ", transliteration: "ʿiqābin", meaning: { en: "(of) penalty", ur: "(of) penalty" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلِيمٍۢ", transliteration: "alīmin", meaning: { en: "painful", ur: "painful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  44: {
    ayahNumber: 44,
    text: "وَلَوْ جَعَلْنَـٰهُ قُرْءَانًا أَعْجَمِيًّۭا لَّقَالُوا۟ لَوْلَا فُصِّلَتْ ءَايَـٰتُهُۥٓ ۖ ءَا۬عْجَمِىٌّۭ وَعَرَبِىٌّۭ ۗ قُلْ هُوَ لِلَّذِينَ ءَامَنُوا۟ هُدًۭى وَشِفَآءٌۭ ۖ وَٱلَّذِينَ لَا يُؤْمِنُونَ فِىٓ ءَاذَانِهِمْ وَقْرٌۭ وَهُوَ عَلَيْهِمْ عَمًى ۚ أُو۟لَـٰٓئِكَ يُنَادَوْنَ مِن مَّكَانٍۭ بَعِيدٍۢ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "جَعَلْنَـٰهُ", transliteration: "jaʿalnāhu", meaning: { en: "We (had) made it", ur: "ہم (had) made it" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قُرْءَانًا", transliteration: "qur'ānan", meaning: { en: "a Quran", ur: "a Quran" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْجَمِيًّۭا", transliteration: "aʿjamiyyan", meaning: { en: "(in) a foreign (language)", ur: "(میں) a foreign (language)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّقَالُوا۟", transliteration: "laqālū", meaning: { en: "they (would have) said", ur: "وہ لوگ (would have) کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَوْلَا", transliteration: "lawlā", meaning: { en: "Why not", ur: "Why نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فُصِّلَتْ", transliteration: "fuṣṣilat", meaning: { en: "are explained in detail", ur: "are explained میں detail" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَـٰتُهُۥٓ ۖ", transliteration: "āyātuhu", meaning: { en: "its verses", ur: "its verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَا۬عْجَمِىٌّۭ", transliteration: "āʿ'jamiyyun", meaning: { en: "(Is it) a foreign (language)", ur: "(Is it) a foreign (language)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَرَبِىٌّۭ ۗ", transliteration: "waʿarabiyyun", meaning: { en: "and an Arab", ur: "اور an Arab" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "It (is)", ur: "It (is)" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "for جو لوگ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُدًۭى", transliteration: "hudan", meaning: { en: "a guidance", ur: "a guidance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَشِفَآءٌۭ ۖ", transliteration: "washifāon", meaning: { en: "and a healing", ur: "اور a healing" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "And those who", ur: "اور جو لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَاذَانِهِمْ", transliteration: "ādhānihim", meaning: { en: "their ears", ur: "their ears" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقْرٌۭ", transliteration: "waqrun", meaning: { en: "(is) deafness", ur: "(is) deafness" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and it", ur: "اور it" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "(is) for them", ur: "(is) for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمًى ۚ", transliteration: "ʿaman", meaning: { en: "blindness", ur: "blindness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", meaning: { en: "Those", ur: "Those" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُنَادَوْنَ", transliteration: "yunādawna", meaning: { en: "are being called", ur: "are being called" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّكَانٍۭ", transliteration: "makānin", meaning: { en: "a place", ur: "a place" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعِيدٍۢ", transliteration: "baʿīdin", meaning: { en: "far", ur: "far" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'نفی + فعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'جار + مجرور' }
      ],
    },
  },
  45: {
    ayahNumber: 45,
    text: "وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْكِتَـٰبَ فَٱخْتُلِفَ فِيهِ ۗ وَلَوْلَا كَلِمَةٌۭ سَبَقَتْ مِن رَّبِّكَ لَقُضِىَ بَيْنَهُمْ ۚ وَإِنَّهُمْ لَفِى شَكٍّۢ مِّنْهُ مُرِيبٍۢ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَاتَيْنَا", transliteration: "ātaynā", meaning: { en: "We gave", ur: "ہم gave" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُوسَى", transliteration: "mūsā", meaning: { en: "Musa", ur: "Musa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", meaning: { en: "the Book", ur: "the کتاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱخْتُلِفَ", transliteration: "fa-ukh'tulifa", meaning: { en: "but disputes arose", ur: "لیکن disputes arose" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "فِيهِ ۗ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَوْلَا", transliteration: "walawlā", meaning: { en: "And had it not been", ur: "اور had it نہیں been" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَلِمَةٌۭ", transliteration: "kalimatun", meaning: { en: "(for) a word", ur: "(for) a word" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَبَقَتْ", transliteration: "sabaqat", meaning: { en: "(that) preceded", ur: "(وہ) preceded" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَقُضِىَ", transliteration: "laquḍiya", meaning: { en: "surely, would have been settled", ur: "یقیناً, would have been settled" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَهُمْ ۚ", transliteration: "baynahum", meaning: { en: "between them", ur: "درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّهُمْ", transliteration: "wa-innahum", meaning: { en: "But indeed, they", ur: "لیکن بیشک, وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَفِى", transliteration: "lafī", meaning: { en: "surely (are) in", ur: "یقیناً (are) میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَكٍّۢ", transliteration: "shakkin", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُ", transliteration: "min'hu", meaning: { en: "about it", ur: "about it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُرِيبٍۢ", transliteration: "murībin", meaning: { en: "disquieting", ur: "disquieting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  46: {
    ayahNumber: 46,
    text: "مَّنْ عَمِلَ صَـٰلِحًۭا فَلِنَفْسِهِۦ ۖ وَمَنْ أَسَآءَ فَعَلَيْهَا ۗ وَمَا رَبُّكَ بِظَلَّـٰمٍۢ لِّلْعَبِيدِ",
    words: [
      { arabic: "مَّنْ", transliteration: "man", meaning: { en: "Whoever", ur: "Whoever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمِلَ", transliteration: "ʿamila", meaning: { en: "does", ur: "does" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", meaning: { en: "righteous deeds", ur: "نیک deeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلِنَفْسِهِۦ ۖ", transliteration: "falinafsihi", meaning: { en: "then it is for his soul", ur: "پھر it is for his روح" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَمَنْ", transliteration: "waman", meaning: { en: "and whoever", ur: "اور whoever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَسَآءَ", transliteration: "asāa", meaning: { en: "does evil", ur: "does برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَعَلَيْهَا ۗ", transliteration: "faʿalayhā", meaning: { en: "then it is against it", ur: "پھر it is against it" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", meaning: { en: "(is) your Lord", ur: "(is) your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِظَلَّـٰمٍۢ", transliteration: "biẓallāmin", meaning: { en: "unjust", ur: "unjust" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لِّلْعَبِيدِ", transliteration: "lil'ʿabīdi", meaning: { en: "to His slaves", ur: "کو His slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  47: {
    ayahNumber: 47,
    text: "۞ إِلَيْهِ يُرَدُّ عِلْمُ ٱلسَّاعَةِ ۚ وَمَا تَخْرُجُ مِن ثَمَرَٰتٍۢ مِّنْ أَكْمَامِهَا وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِۦ ۚ وَيَوْمَ يُنَادِيهِمْ أَيْنَ شُرَكَآءِى قَالُوٓا۟ ءَاذَنَّـٰكَ مَا مِنَّا مِن شَهِيدٍۢ",
    words: [
      { arabic: "۞ إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "To Him", ur: "کو Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُرَدُّ", transliteration: "yuraddu", meaning: { en: "is referred", ur: "is referred" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عِلْمُ", transliteration: "ʿil'mu", meaning: { en: "(the) knowledge", ur: "(the) knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّاعَةِ ۚ", transliteration: "l-sāʿati", meaning: { en: "(of) the Hour", ur: "(of) the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَخْرُجُ", transliteration: "takhruju", meaning: { en: "comes out", ur: "comes out" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ثَمَرَٰتٍۢ", transliteration: "thamarātin", meaning: { en: "fruits", ur: "fruits" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكْمَامِهَا", transliteration: "akmāmihā", meaning: { en: "their coverings", ur: "their coverings" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَحْمِلُ", transliteration: "taḥmilu", meaning: { en: "bears", ur: "bears" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أُنثَىٰ", transliteration: "unthā", meaning: { en: "female", ur: "female" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَضَعُ", transliteration: "taḍaʿu", meaning: { en: "gives birth", ur: "gives birth" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِعِلْمِهِۦ ۚ", transliteration: "biʿil'mihi", meaning: { en: "with His knowledge", ur: "ساتھ His knowledge" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "And (the) Day", ur: "اور (the) دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُنَادِيهِمْ", transliteration: "yunādīhim", meaning: { en: "He will call them", ur: "وہ will call them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَيْنَ", transliteration: "ayna", meaning: { en: "Where (are)", ur: "Where (are)" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "شُرَكَآءِى", transliteration: "shurakāī", meaning: { en: "My partners", ur: "My partners" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوٓا۟", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ لوگ will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَاذَنَّـٰكَ", transliteration: "ādhannāka", meaning: { en: "We announce (to) You", ur: "ہم announce (کو) تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "مِنَّا", transliteration: "minnā", meaning: { en: "among us", ur: "among us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَهِيدٍۢ", transliteration: "shahīdin", meaning: { en: "witness", ur: "witness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'جار + مجرور' }
      ],
    },
  },
  48: {
    ayahNumber: 48,
    text: "وَضَلَّ عَنْهُم مَّا كَانُوا۟ يَدْعُونَ مِن قَبْلُ ۖ وَظَنُّوا۟ مَا لَهُم مِّن مَّحِيصٍۢ",
    words: [
      { arabic: "وَضَلَّ", transliteration: "waḍalla", meaning: { en: "And lost", ur: "اور lost" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَنْهُم", transliteration: "ʿanhum", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they were", ur: "وہ لوگ were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَدْعُونَ", transliteration: "yadʿūna", meaning: { en: "invoking", ur: "invoking" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "پہلے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ ۖ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَظَنُّوا۟", transliteration: "waẓannū", meaning: { en: "and they (will) be certain", ur: "اور وہ لوگ (will) be certain" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(that) not", ur: "(وہ) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّحِيصٍۢ", transliteration: "maḥīṣin", meaning: { en: "place of escape", ur: "place of escape" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  49: {
    ayahNumber: 49,
    text: "لَّا يَسْـَٔمُ ٱلْإِنسَـٰنُ مِن دُعَآءِ ٱلْخَيْرِ وَإِن مَّسَّهُ ٱلشَّرُّ فَيَـُٔوسٌۭ قَنُوطٌۭ",
    words: [
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "(Does) not", ur: "(Does) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَسْـَٔمُ", transliteration: "yasamu", meaning: { en: "get tired", ur: "get tired" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْإِنسَـٰنُ", transliteration: "l-insānu", meaning: { en: "man", ur: "man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُعَآءِ", transliteration: "duʿāi", meaning: { en: "praying", ur: "praying" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْخَيْرِ", transliteration: "l-khayri", meaning: { en: "(for) the good", ur: "(for) the اچھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "but if", ur: "لیکن if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَّسَّهُ", transliteration: "massahu", meaning: { en: "touches him", ur: "touches him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلشَّرُّ", transliteration: "l-sharu", meaning: { en: "the evil", ur: "the برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيَـُٔوسٌۭ", transliteration: "fayaūsun", meaning: { en: "then he gives up hope", ur: "پھر وہ gives up hope" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "قَنُوطٌۭ", transliteration: "qanūṭun", meaning: { en: "(and) despairs", ur: "(اور) despairs" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  50: {
    ayahNumber: 50,
    text: "وَلَئِنْ أَذَقْنَـٰهُ رَحْمَةًۭ مِّنَّا مِنۢ بَعْدِ ضَرَّآءَ مَسَّتْهُ لَيَقُولَنَّ هَـٰذَا لِى وَمَآ أَظُنُّ ٱلسَّاعَةَ قَآئِمَةًۭ وَلَئِن رُّجِعْتُ إِلَىٰ رَبِّىٓ إِنَّ لِى عِندَهُۥ لَلْحُسْنَىٰ ۚ فَلَنُنَبِّئَنَّ ٱلَّذِينَ كَفَرُوا۟ بِمَا عَمِلُوا۟ وَلَنُذِيقَنَّهُم مِّنْ عَذَابٍ غَلِيظٍۢ",
    words: [
      { arabic: "وَلَئِنْ", transliteration: "wala-in", meaning: { en: "And verily, if", ur: "اور بیشک, if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَذَقْنَـٰهُ", transliteration: "adhaqnāhu", meaning: { en: "We let him taste", ur: "ہم let him taste" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", meaning: { en: "mercy", ur: "رحمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَّا", transliteration: "minnā", meaning: { en: "from Us", ur: "سے Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ضَرَّآءَ", transliteration: "ḍarrāa", meaning: { en: "an adversity", ur: "an adversity" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَسَّتْهُ", transliteration: "massathu", meaning: { en: "(has) touched him", ur: "(has) touched him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَقُولَنَّ", transliteration: "layaqūlanna", meaning: { en: "he will surely say", ur: "وہ will یقیناً کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This (is)", ur: "This (is)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِى", transliteration: "lī", meaning: { en: "(due) to me", ur: "(due) کو me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَظُنُّ", transliteration: "aẓunnu", meaning: { en: "I think", ur: "میں think" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّاعَةَ", transliteration: "l-sāʿata", meaning: { en: "the Hour", ur: "the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَآئِمَةًۭ", transliteration: "qāimatan", meaning: { en: "(will be) established", ur: "(will be) established" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَئِن", transliteration: "wala-in", meaning: { en: "and if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رُّجِعْتُ", transliteration: "rujiʿ'tu", meaning: { en: "I am returned", ur: "میں am returned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّىٓ", transliteration: "rabbī", meaning: { en: "my Lord", ur: "my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِى", transliteration: "lī", meaning: { en: "for me", ur: "for me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عِندَهُۥ", transliteration: "ʿindahu", meaning: { en: "with Him", ur: "ساتھ Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَلْحُسْنَىٰ ۚ", transliteration: "lalḥus'nā", meaning: { en: "(will be) the best", ur: "(will be) the best" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَلَنُنَبِّئَنَّ", transliteration: "falanunabbi-anna", meaning: { en: "But We will surely inform", ur: "لیکن ہم will یقیناً inform" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "about what", ur: "about کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَمِلُوا۟", transliteration: "ʿamilū", meaning: { en: "they did", ur: "وہ لوگ did" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَنُذِيقَنَّهُم", transliteration: "walanudhīqannahum", meaning: { en: "and We will surely make them taste", ur: "اور ہم will یقیناً make them taste" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٍ", transliteration: "ʿadhābin", meaning: { en: "a punishment", ur: "a عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غَلِيظٍۢ", transliteration: "ghalīẓin", meaning: { en: "severe", ur: "severe" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' }
      ],
    },
  },
  51: {
    ayahNumber: 51,
    text: "وَإِذَآ أَنْعَمْنَا عَلَى ٱلْإِنسَـٰنِ أَعْرَضَ وَنَـَٔا بِجَانِبِهِۦ وَإِذَا مَسَّهُ ٱلشَّرُّ فَذُو دُعَآءٍ عَرِيضٍۢ",
    words: [
      { arabic: "وَإِذَآ", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنْعَمْنَا", transliteration: "anʿamnā", meaning: { en: "We bestow favor", ur: "ہم bestow favor" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْإِنسَـٰنِ", transliteration: "l-insāni", meaning: { en: "man", ur: "man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْرَضَ", transliteration: "aʿraḍa", meaning: { en: "he turns away ", ur: "وہ turns away " }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَنَـَٔا", transliteration: "wanaā", meaning: { en: "and distances himself", ur: "اور distances himself" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِجَانِبِهِۦ", transliteration: "bijānibihi", meaning: { en: "and distances himself", ur: "اور distances himself" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "but when", ur: "لیکن when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَسَّهُ", transliteration: "massahu", meaning: { en: "touches him", ur: "touches him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلشَّرُّ", transliteration: "l-sharu", meaning: { en: "the evil", ur: "the برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَذُو", transliteration: "fadhū", meaning: { en: "then (he is) full", ur: "پھر (وہ is) full" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "دُعَآءٍ", transliteration: "duʿāin", meaning: { en: "(of) supplication", ur: "(of) supplication" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَرِيضٍۢ", transliteration: "ʿarīḍin", meaning: { en: "lengthy", ur: "lengthy" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  52: {
    ayahNumber: 52,
    text: "قُلْ أَرَءَيْتُمْ إِن كَانَ مِنْ عِندِ ٱللَّهِ ثُمَّ كَفَرْتُم بِهِۦ مَنْ أَضَلُّ مِمَّنْ هُوَ فِى شِقَاقٍۭ بَعِيدٍۢ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَءَيْتُمْ", transliteration: "ara-aytum", meaning: { en: "You see ", ur: "تم دیکھنا " }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "it is", ur: "it is" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِندِ", transliteration: "ʿindi", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرْتُم", transliteration: "kafartum", meaning: { en: "you disbelieve", ur: "تم disbelieve" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "in it", ur: "میں it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "who", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَضَلُّ", transliteration: "aḍallu", meaning: { en: "(is) more astray", ur: "(is) more astray" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِمَّنْ", transliteration: "mimman", meaning: { en: "than (one) who ", ur: "than (one) جو " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "(is) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شِقَاقٍۭ", transliteration: "shiqāqin", meaning: { en: "opposition", ur: "opposition" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعِيدٍۢ", transliteration: "baʿīdin", meaning: { en: "far", ur: "far" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  53: {
    ayahNumber: 53,
    text: "سَنُرِيهِمْ ءَايَـٰتِنَا فِى ٱلْـَٔافَاقِ وَفِىٓ أَنفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ ٱلْحَقُّ ۗ أَوَلَمْ يَكْفِ بِرَبِّكَ أَنَّهُۥ عَلَىٰ كُلِّ شَىْءٍۢ شَهِيدٌ",
    words: [
      { arabic: "سَنُرِيهِمْ", transliteration: "sanurīhim", meaning: { en: "Soon We will show them", ur: "Soon ہم will show them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", meaning: { en: "Our Signs", ur: "Our نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْـَٔافَاقِ", transliteration: "l-āfāqi", meaning: { en: "the horizons", ur: "the horizons" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَفِىٓ", transliteration: "wafī", meaning: { en: "and in", ur: "اور میں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", meaning: { en: "themselves", ur: "themselves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "until" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَتَبَيَّنَ", transliteration: "yatabayyana", meaning: { en: "becomes clear", ur: "becomes clear" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّهُ", transliteration: "annahu", meaning: { en: "that it", ur: "وہ it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَقُّ ۗ", transliteration: "l-ḥaqu", meaning: { en: "(is) the truth", ur: "(is) the سچ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوَلَمْ", transliteration: "awalam", meaning: { en: "Is (it) not", ur: "Is (it) نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَكْفِ", transliteration: "yakfi", meaning: { en: "sufficient", ur: "sufficient" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِرَبِّكَ", transliteration: "birabbika", meaning: { en: "concerning your Lord", ur: "concerning your رب" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَنَّهُۥ", transliteration: "annahu", meaning: { en: "that He", ur: "وہ وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "(is) over", ur: "(is) اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "things", ur: "things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَهِيدٌ", transliteration: "shahīdun", meaning: { en: "a Witness", ur: "a Witness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    ayahNumber: 54,
    text: "أَلَآ إِنَّهُمْ فِى مِرْيَةٍۢ مِّن لِّقَآءِ رَبِّهِمْ ۗ أَلَآ إِنَّهُۥ بِكُلِّ شَىْءٍۢ مُّحِيطٌۢ",
    words: [
      { arabic: "أَلَآ", transliteration: "alā", meaning: { en: "Unquestionably", ur: "Unquestionably" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "they", ur: "وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(are) in", ur: "(are) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مِرْيَةٍۢ", transliteration: "mir'yatin", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "about", ur: "about" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّقَآءِ", transliteration: "liqāi", meaning: { en: "(the) meeting", ur: "(the) meeting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّهِمْ ۗ", transliteration: "rabbihim", meaning: { en: "(with) their Lord", ur: "(ساتھ) their رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلَآ", transliteration: "alā", meaning: { en: "Unquestionably", ur: "Unquestionably" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "indeed, He", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِكُلِّ", transliteration: "bikulli", meaning: { en: "(is) of all", ur: "(is) of سب" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "things", ur: "things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّحِيطٌۢ", transliteration: "muḥīṭun", meaning: { en: "encompassing", ur: "encompassing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
};

export default TREEBANK_DATA;
