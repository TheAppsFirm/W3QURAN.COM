/**
 * Surah Al-Buruj (85) - Quranic Arabic Treebank
 * The Great Stars / The Constellations
 * Total Ayahs: 22
 * Theme: Persecution of believers, People of the Trench, Allah's might
 */

export const TREEBANK_DATA = {
  surahId: 85,
  surahName: "Al-Buruj",
  surahNameArabic: "البروج",
  totalAyahs: 22,
  revelationType: "Makki",
  theme: "Believers persecuted for faith; tyrants destroyed; Quran preserved",

  1: {
    ayahNumber: 1,
    arabic: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ",
    words: [
      { position: 1, arabic: "وَالسَّمَاءِ", transliteration: "wal-samā'i", root: "س م و", meaning: { en: "By the sky", ur: "قسم ہے آسمان کی", ar: "قَسَماً بالسماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath" },
      { position: 2, arabic: "ذَاتِ", transliteration: "dhāti", meaning: { en: "possessor of", ur: "والے", ar: "صاحِبَة" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 3, arabic: "الْبُرُوجِ", transliteration: "al-burūji", root: "ب ر ج", meaning: { en: "the constellations", ur: "برجوں کی", ar: "الأَبراج" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { rootFamily: ["بُرج", "تَبَرُّج", "بارِج"], linguisticMiracle: "Buruj = towers/mansions - stars as celestial mansions" } }
    ]
  },

  2: {
    ayahNumber: 2,
    arabic: "وَالْيَوْمِ الْمَوْعُودِ",
    words: [
      { position: 1, arabic: "وَالْيَوْمِ", transliteration: "wal-yawmi", meaning: { en: "And the Promised Day", ur: "اور وعدے کے دن کی", ar: "واليَومِ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath" },
      { position: 2, arabic: "الْمَوْعُودِ", transliteration: "al-mawʿūdi", root: "و ع د", meaning: { en: "the Promised", ur: "وعدے والے", ar: "المُنتَظَر" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مَفْعُول", voice: "passive participle" } }
    ]
  },

  3: {
    ayahNumber: 3,
    arabic: "وَشَاهِدٍ وَمَشْهُودٍ",
    words: [
      { position: 1, arabic: "وَشَاهِدٍ", transliteration: "wa-shāhidin", root: "ش ه د", meaning: { en: "And witness", ur: "اور گواہ کی", ar: "وَمُشاهِد" }, pos: "N", posLabel: "N", grammarRole: "oath", features: { pattern: "فَاعِل" } },
      { position: 2, arabic: "وَمَشْهُودٍ", transliteration: "wa-mashhūdin", root: "ش ه د", meaning: { en: "and witnessed", ur: "اور مشہود کی", ar: "وَمُشاهَد" }, pos: "N", posLabel: "N", grammarRole: "oath", features: { pattern: "مَفْعُول" }, advanced: { linguisticMiracle: "Active + Passive from same root - Friday/Day of Arafah/Judgment" } }
    ]
  },

  4: {
    ayahNumber: 4,
    arabic: "قُتِلَ أَصْحَابُ الْأُخْدُودِ",
    words: [
      { position: 1, arabic: "قُتِلَ", transliteration: "qutila", root: "ق ت ل", meaning: { en: "Destroyed were", ur: "مارے گئے", ar: "هَلَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" }, advanced: { linguisticMiracle: "Curse formula - 'killed' = destroyed by Allah's wrath" } },
      { position: 2, arabic: "أَصْحَابُ", transliteration: "aṣḥābu", root: "ص ح ب", meaning: { en: "the companions", ur: "والے", ar: "أَهلُ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "الْأُخْدُودِ", transliteration: "al-ukhdūdi", root: "خ د د", meaning: { en: "of the trench", ur: "خندق کے", ar: "الحُفرَة" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { rootFamily: ["خَدّ", "أُخدود"], linguisticMiracle: "Deep trench dug to burn believers alive" } }
    ]
  },

  5: {
    ayahNumber: 5,
    arabic: "النَّارِ ذَاتِ الْوَقُودِ",
    words: [
      { position: 1, arabic: "النَّارِ", transliteration: "al-nāri", root: "ن و ر", meaning: { en: "The fire", ur: "آگ کی", ar: "اللَّهَب" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "ذَاتِ", transliteration: "dhāti", meaning: { en: "full of", ur: "والی", ar: "صاحِبَة" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 3, arabic: "الْوَقُودِ", transliteration: "al-waqūdi", root: "و ق د", meaning: { en: "fuel", ur: "ایندھن", ar: "الحَطَب" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ]
  },

  6: {
    ayahNumber: 6,
    arabic: "إِذْ هُمْ عَلَيْهَا قُعُودٌ",
    words: [
      { position: 1, arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب", ar: "حينَ" }, pos: "TEMP", posLabel: "TEMP", grammarRole: "temporal" },
      { position: 2, arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هُم" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "over it", ur: "اس کے پاس", ar: "عليها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "قُعُودٌ", transliteration: "quʿūdun", root: "ق ع د", meaning: { en: "sitting", ur: "بیٹھے ہوئے", ar: "جالِسونَ" }, pos: "N", posLabel: "N", grammarRole: "predicate", features: { pattern: "فُعُول" }, advanced: { linguisticMiracle: "Tyrants sat watching believers burn - their crime scene" } }
    ]
  },

  7: {
    ayahNumber: 7,
    arabic: "وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ",
    words: [
      { position: 1, arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "And they", ur: "اور وہ", ar: "وهُم" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammarRole: "subject" },
      { position: 2, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 4, arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", root: "ف ع ل", meaning: { en: "they were doing", ur: "کر رہے تھے", ar: "يَصنَعونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 5, arabic: "بِالْمُؤْمِنِينَ", transliteration: "bil-mu'minīna", root: "أ م ن", meaning: { en: "to the believers", ur: "ایمان والوں کے ساتھ", ar: "بالمُصَدِّقينَ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "شُهُودٌ", transliteration: "shuhūdun", root: "ش ه د", meaning: { en: "witnesses", ur: "گواہ تھے", ar: "شاهِدونَ" }, pos: "N", posLabel: "N", grammarRole: "predicate", advanced: { linguisticMiracle: "They witnessed their own crime - will testify against themselves" } }
    ]
  },

  8: {
    ayahNumber: 8,
    arabic: "وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا بِاللَّهِ الْعَزِيزِ الْحَمِيدِ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "نَقَمُوا", transliteration: "naqamū", root: "ن ق م", meaning: { en: "they resented", ur: "انہوں نے برا مانا", ar: "كَرِهوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "مِنْهُمْ", transliteration: "minhum", meaning: { en: "of them", ur: "ان سے", ar: "منهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "سِوى" }, pos: "EXCEPT", posLabel: "EXCEPT", grammarRole: "exception" },
      { position: 5, arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "SUB", posLabel: "SUB", grammarRole: "subordinating" },
      { position: 6, arabic: "يُؤْمِنُوا", transliteration: "yu'minū", root: "أ م ن", meaning: { en: "they believed", ur: "وہ ایمان لائے", ar: "يُصَدِّقوا" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV", mood: "subjunctive" } },
      { position: 7, arabic: "بِاللَّهِ", transliteration: "bil-lāhi", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, pos: "PREP+PN", posLabel: "PREP+PN", grammarRole: "prepositional phrase" },
      { position: 8, arabic: "الْعَزِيزِ", transliteration: "al-ʿazīzi", root: "ع ز ز", meaning: { en: "the Exalted", ur: "غالب", ar: "القَوِيّ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 9, arabic: "الْحَمِيدِ", transliteration: "al-ḥamīdi", root: "ح م د", meaning: { en: "the Praiseworthy", ur: "قابل حمد", ar: "المَحمود" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Their only 'crime' was iman - ultimate injustice" } }
    ]
  },

  9: {
    ayahNumber: 9,
    arabic: "الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ",
    words: [
      { position: 1, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "He to Whom", ur: "جس کے لیے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 2, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "belongs to Him", ur: "ہے", ar: "لَهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "predicate" },
      { position: 3, arabic: "مُلْكُ", transliteration: "mulku", root: "م ل ك", meaning: { en: "dominion", ur: "بادشاہی", ar: "سُلطان" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of heavens", ur: "آسمانوں کی", ar: "السماوات" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 5, arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and earth", ur: "اور زمین کی", ar: "والأرض" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 6, arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, pos: "PN", posLabel: "PN", grammarRole: "subject" },
      { position: 7, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 8, arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "all", ur: "ہر", ar: "كُلّ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 9, arabic: "شَيْءٍ", transliteration: "shay'in", meaning: { en: "things", ur: "چیز", ar: "شَيء" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 10, arabic: "شَهِيدٌ", transliteration: "shahīdun", root: "ش ه د", meaning: { en: "Witness", ur: "گواہ ہے", ar: "شاهِدٌ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ]
  },

  10: {
    ayahNumber: 10,
    arabic: "إِنَّ الَّذِينَ فَتَنُوا الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ ثُمَّ لَمْ يَتُوبُوا فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ الْحَرِيقِ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "حَقًّا" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "فَتَنُوا", transliteration: "fatanū", root: "ف ت ن", meaning: { en: "persecuted", ur: "فتنے میں ڈالا", ar: "عَذَّبوا" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { rootFamily: ["فِتنة", "فَتّان", "مَفتون"], linguisticMiracle: "Fitnah = trial by fire/persecution" } },
      { position: 4, arabic: "الْمُؤْمِنِينَ", transliteration: "al-mu'minīna", meaning: { en: "believing men", ur: "ایمان والے مردوں کو", ar: "المُصَدِّقينَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "وَالْمُؤْمِنَاتِ", transliteration: "wal-mu'mināti", meaning: { en: "and believing women", ur: "اور ایمان والی عورتوں کو", ar: "والمُصَدِّقات" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 6, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "conjunction" },
      { position: 7, arabic: "لَمْ", transliteration: "lam", meaning: { en: "did not", ur: "نہیں", ar: "لَم" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 8, arabic: "يَتُوبُوا", transliteration: "yatūbū", root: "ت و ب", meaning: { en: "repent", ur: "توبہ کی", ar: "يَرجِعوا" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { mood: "jussive" } },
      { position: 9, arabic: "فَلَهُمْ", transliteration: "falahum", meaning: { en: "then for them", ur: "تو ان کے لیے", ar: "فَلَهُم" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammarRole: "predicate" },
      { position: 10, arabic: "عَذَابُ", transliteration: "ʿadhābu", root: "ع ذ ب", meaning: { en: "punishment", ur: "عذاب ہے", ar: "عِقاب" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 11, arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "of Hell", ur: "جہنم کا", ar: "جَهَنَّم" }, pos: "PN", posLabel: "PN", grammarRole: "possessive" },
      { position: 12, arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور ان کے لیے", ar: "ولَهُم" }, pos: "CONJ+PREP+PRON", posLabel: "CONJ+PREP+PRON", grammarRole: "predicate" },
      { position: 13, arabic: "عَذَابُ", transliteration: "ʿadhābu", meaning: { en: "punishment", ur: "عذاب ہے", ar: "عِقاب" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 14, arabic: "الْحَرِيقِ", transliteration: "al-ḥarīqi", root: "ح ر ق", meaning: { en: "of burning", ur: "جلانے کا", ar: "النار" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "They burned believers; they will burn - poetic justice" } }
    ]
  },

  11: {
    ayahNumber: 11,
    arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتٌ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ ۚ ذَٰلِكَ الْفَوْزُ الْكَبِيرُ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "حَقًّا" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "آمَنُوا", transliteration: "āmanū", root: "أ م ن", meaning: { en: "believed", ur: "ایمان لائے", ar: "صَدَّقوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "وَعَمِلُوا", transliteration: "wa-ʿamilū", root: "ع م ل", meaning: { en: "and did", ur: "اور کیے", ar: "وَفَعَلوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 5, arabic: "الصَّالِحَاتِ", transliteration: "al-ṣāliḥāti", root: "ص ل ح", meaning: { en: "righteous deeds", ur: "نیک کام", ar: "الأَعمال الحَسَنة" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 6, arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لَهُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "predicate" },
      { position: 7, arabic: "جَنَّاتٌ", transliteration: "jannātun", root: "ج ن ن", meaning: { en: "gardens", ur: "باغات ہیں", ar: "رِياض" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 8, arabic: "تَجْرِي", transliteration: "tajrī", root: "ج ر ي", meaning: { en: "flowing", ur: "بہتی ہیں", ar: "تَسيلُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 9, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 10, arabic: "تَحْتِهَا", transliteration: "taḥtihā", meaning: { en: "beneath them", ur: "ان کے نیچے", ar: "أَسفَلِها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 11, arabic: "الْأَنْهَارُ", transliteration: "al-anhāru", root: "ن ه ر", meaning: { en: "rivers", ur: "نہریں", ar: "الجَداوِل" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 12, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "یہی", ar: "ذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 13, arabic: "الْفَوْزُ", transliteration: "al-fawzu", root: "ف و ز", meaning: { en: "the success", ur: "کامیابی ہے", ar: "النَّجاح" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 14, arabic: "الْكَبِيرُ", transliteration: "al-kabīru", root: "ك ب ر", meaning: { en: "the great", ur: "بڑی", ar: "العَظيم" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  12: {
    ayahNumber: 12,
    arabic: "إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "حَقًّا" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "بَطْشَ", transliteration: "baṭsha", root: "ب ط ش", meaning: { en: "grip", ur: "پکڑ", ar: "أَخذَة" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { rootFamily: ["بَطش", "باطِش"], linguisticMiracle: "Allah's seizing grip - sudden, powerful, inescapable" } },
      { position: 3, arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "of your Lord", ur: "تیرے رب کی", ar: "مالِكِكَ" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 4, arabic: "لَشَدِيدٌ", transliteration: "lashadīdun", root: "ش د د", meaning: { en: "surely severe", ur: "یقیناً سخت ہے", ar: "لَقَوِيٌّ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ]
  },

  13: {
    ayahNumber: 13,
    arabic: "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ",
    words: [
      { position: 1, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He", ur: "بے شک وہ", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی", ar: "هُوَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "emphasis" },
      { position: 3, arabic: "يُبْدِئُ", transliteration: "yubdi'u", root: "ب د أ", meaning: { en: "originates", ur: "پہلی بار پیدا کرتا ہے", ar: "يَخلُقُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 4, arabic: "وَيُعِيدُ", transliteration: "wa-yuʿīdu", root: "ع و د", meaning: { en: "and repeats", ur: "اور دوبارہ پیدا کرتا ہے", ar: "وَيُعيدُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" }, advanced: { linguisticMiracle: "Creates initially AND resurrects - complete power over existence" } }
    ]
  },

  14: {
    ayahNumber: 14,
    arabic: "وَهُوَ الْغَفُورُ الْوَدُودُ",
    words: [
      { position: 1, arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "And He", ur: "اور وہ", ar: "وَهُوَ" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammarRole: "subject" },
      { position: 2, arabic: "الْغَفُورُ", transliteration: "al-ghafūru", root: "غ ف ر", meaning: { en: "the Forgiving", ur: "بخشنے والا ہے", ar: "الساتِر" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "فَعُول" } },
      { position: 3, arabic: "الْوَدُودُ", transliteration: "al-wadūdu", root: "و د د", meaning: { en: "the Loving", ur: "محبت کرنے والا", ar: "المُحِبّ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "فَعُول" }, advanced: { linguisticMiracle: "Wadud = Actively loving (not just merciful). Door open for oppressors too" } }
    ]
  },

  15: {
    ayahNumber: 15,
    arabic: "ذُو الْعَرْشِ الْمَجِيدُ",
    words: [
      { position: 1, arabic: "ذُو", transliteration: "dhū", meaning: { en: "Owner of", ur: "والا", ar: "صاحِبُ" }, pos: "N", posLabel: "N", grammarRole: "attribute" },
      { position: 2, arabic: "الْعَرْشِ", transliteration: "al-ʿarshi", root: "ع ر ش", meaning: { en: "the Throne", ur: "عرش کا", ar: "الكُرسِيّ" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 3, arabic: "الْمَجِيدُ", transliteration: "al-majīdu", root: "م ج د", meaning: { en: "the Glorious", ur: "بزرگی والا", ar: "العَظيم" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { rootFamily: ["مَجد", "ماجِد", "مَجيد"], linguisticMiracle: "Al-Majid = combination of honor, power, generosity" } }
    ]
  },

  16: {
    ayahNumber: 16,
    arabic: "فَعَّالٌ لِّمَا يُرِيدُ",
    words: [
      { position: 1, arabic: "فَعَّالٌ", transliteration: "faʿʿālun", root: "ف ع ل", meaning: { en: "Doer", ur: "کرنے والا", ar: "فاعِلٌ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "فَعّال" }, advanced: { linguisticMiracle: "فَعّال = intensive form: always doing, continuously acting" } },
      { position: 2, arabic: "لِّمَا", transliteration: "limā", meaning: { en: "of whatever", ur: "جو کچھ", ar: "لِما" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "يُرِيدُ", transliteration: "yurīdu", root: "ر و د", meaning: { en: "He intends", ur: "چاہے", ar: "يَشاءُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } }
    ]
  },

  17: {
    ayahNumber: 17,
    arabic: "هَلْ أَتَاكَ حَدِيثُ الْجُنُودِ",
    words: [
      { position: 1, arabic: "هَلْ", transliteration: "hal", meaning: { en: "Has", ur: "کیا", ar: "هَل" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 2, arabic: "أَتَاكَ", transliteration: "atāka", root: "أ ت ي", meaning: { en: "come to you", ur: "تجھے پہنچی", ar: "بَلَغَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "حَدِيثُ", transliteration: "ḥadīthu", root: "ح د ث", meaning: { en: "story", ur: "خبر", ar: "قِصَّة" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "الْجُنُودِ", transliteration: "al-junūdi", root: "ج ن د", meaning: { en: "of the forces", ur: "لشکروں کی", ar: "الجُيوش" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ]
  },

  18: {
    ayahNumber: 18,
    arabic: "فِرْعَوْنَ وَثَمُودَ",
    words: [
      { position: 1, arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: { en: "Pharaoh", ur: "فرعون کی", ar: "فِرعَون" }, pos: "PN", posLabel: "PN", grammarRole: "apposition" },
      { position: 2, arabic: "وَثَمُودَ", transliteration: "wa-thamūda", meaning: { en: "and Thamud", ur: "اور ثمود کی", ar: "وثَمود" }, pos: "PN", posLabel: "PN", grammarRole: "apposition", advanced: { linguisticMiracle: "Two mighty civilizations destroyed - warning to Quraysh" } }
    ]
  },

  19: {
    ayahNumber: 19,
    arabic: "بَلِ الَّذِينَ كَفَرُوا فِي تَكْذِيبٍ",
    words: [
      { position: 1, arabic: "بَلِ", transliteration: "bali", meaning: { en: "But", ur: "بلکہ", ar: "لكِن" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے", ar: "الذين" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کفر کیا", ar: "جَحَدوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "تَكْذِيبٍ", transliteration: "takdhībin", root: "ك ذ ب", meaning: { en: "denial", ur: "تکذیب میں ہیں", ar: "إنكار" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", features: { form: "II" } }
    ]
  },

  20: {
    ayahNumber: 20,
    arabic: "وَاللَّهُ مِن وَرَائِهِم مُّحِيطٌ",
    words: [
      { position: 1, arabic: "وَاللَّهُ", transliteration: "wallāhu", meaning: { en: "And Allah", ur: "اور اللہ", ar: "والله" }, pos: "CONJ+PN", posLabel: "CONJ+PN", grammarRole: "subject" },
      { position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "وَرَائِهِم", transliteration: "warā'ihim", root: "و ر ي", meaning: { en: "behind them", ur: "ان کے پیچھے", ar: "خَلفِهِم" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "مُّحِيطٌ", transliteration: "muḥīṭun", root: "ح و ط", meaning: { en: "encompassing", ur: "گھیرے ہوئے ہے", ar: "مُحدِقٌ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "مُفِيل" }, advanced: { linguisticMiracle: "No escape - Allah surrounds from all directions" } }
    ]
  },

  21: {
    ayahNumber: 21,
    arabic: "بَلْ هُوَ قُرْآنٌ مَّجِيدٌ",
    words: [
      { position: 1, arabic: "بَلْ", transliteration: "bal", meaning: { en: "But", ur: "بلکہ", ar: "لكِن" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 2, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it is", ur: "یہ ہے", ar: "هُوَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "قُرْآنٌ", transliteration: "qur'ānun", root: "ق ر أ", meaning: { en: "Quran", ur: "قرآن", ar: "كِتاب" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "مَّجِيدٌ", transliteration: "majīdun", root: "م ج د", meaning: { en: "glorious", ur: "مجید ہے", ar: "عَظيم" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  22: {
    ayahNumber: 22,
    arabic: "فِي لَوْحٍ مَّحْفُوظٍ",
    words: [
      { position: 1, arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "لَوْحٍ", transliteration: "lawḥin", root: "ل و ح", meaning: { en: "Tablet", ur: "لوح", ar: "صَحيفَة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "مَّحْفُوظٍ", transliteration: "maḥfūẓin", root: "ح ف ظ", meaning: { en: "Preserved", ur: "محفوظ میں", ar: "مَصون" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مَفْعُول" }, advanced: { linguisticMiracle: "Al-Lawh al-Mahfuz: eternal record where Quran is preserved forever" } }
    ]
  }
};

export default TREEBANK_DATA;
