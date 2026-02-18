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
    ]
  },

  2: {
    ayahNumber: 2,
    text: "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ",
    words: [
      { arabic: "تَنزِيلٌ", transliteration: "tanzīlun", meaning: { en: "A revelation", ur: "اتاری ہوئی", ar: "تنزيل" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ز-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الرَّحْمَٰنِ", transliteration: "al-raḥmāni", meaning: { en: "the Most Gracious", ur: "رحمان", ar: "الرحمن" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ر-ح-م" } },
      { arabic: "الرَّحِيمِ", transliteration: "al-raḥīmi", meaning: { en: "the Most Merciful", ur: "رحیم", ar: "الرحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ر-ح-م" } }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};

export default TREEBANK_DATA;
