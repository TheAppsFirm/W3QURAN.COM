/**
 * Surah An-Nazi'at (79) - Quranic Arabic Treebank
 * Those Who Pull Out
 * Total Ayahs: 46
 * Theme: Angels, resurrection, Pharaoh's story, Day of Judgment
 */

export const TREEBANK_DATA = {
  surahId: 79,
  surahName: "An-Nazi'at",
  surahNameArabic: "النازعات",
  totalAyahs: 46,
  revelationType: "Makki",
  theme: "Angels' tasks, resurrection certainty, Pharaoh's destruction, Hour's signs",

  1: {
    ayahNumber: 1,
    arabic: "وَالنَّازِعَاتِ غَرْقًا",
    words: [
      { position: 1, arabic: "وَالنَّازِعَاتِ", transliteration: "wal-nāziʿāti", root: "ن ز ع", meaning: { en: "By those who extract", ur: "قسم ہے کھینچنے والوں کی", ar: "والمَلائِكَة التي تَنزِعُ" }, pos: "N", posLabel: "N", grammarRole: "oath", features: { pattern: "فَاعِلات" }, advanced: { rootFamily: ["نَزع", "نازِع", "مَنزوع"], linguisticMiracle: "Angels who extract souls of disbelievers violently" } },
      { position: 2, arabic: "غَرْقًا", transliteration: "gharqan", root: "غ ر ق", meaning: { en: "violently", ur: "پوری طرح", ar: "بِشِدَّة" }, pos: "N", posLabel: "N", grammarRole: "adverb of manner", advanced: { linguisticMiracle: "Drowning/sinking - pulled from depths of body" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَالنَّاشِطَاتِ نَشْطًا",
    words: [
      { position: 1, arabic: "وَالنَّاشِطَاتِ", transliteration: "wal-nāshiṭāti", root: "ن ش ط", meaning: { en: "And those who release", ur: "اور آسانی سے نکالنے والوں کی", ar: "والتي تَنشُطُ" }, pos: "N", posLabel: "N", grammarRole: "oath", features: { pattern: "فَاعِلات" }, advanced: { linguisticMiracle: "Angels who release believers' souls gently" } },
      { position: 2, arabic: "نَشْطًا", transliteration: "nashṭan", root: "ن ش ط", meaning: { en: "gently", ur: "آسانی سے", ar: "بِسُهولَة" }, pos: "N", posLabel: "N", grammarRole: "adverb of manner" }
    ],
    structure: {
      relationships: [],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَالسَّابِحَاتِ سَبْحًا",
    words: [
      { position: 1, arabic: "وَالسَّابِحَاتِ", transliteration: "wal-sābiḥāti", root: "س ب ح", meaning: { en: "And those who glide", ur: "اور تیرنے والوں کی", ar: "والتي تَسبَحُ" }, pos: "N", posLabel: "N", grammarRole: "oath", features: { pattern: "فَاعِلات" }, advanced: { linguisticMiracle: "Angels swimming through heavens or souls gliding" } },
      { position: 2, arabic: "سَبْحًا", transliteration: "sabḥan", root: "س ب ح", meaning: { en: "swimming/gliding", ur: "تیرتے ہوئے", ar: "سِباحَةً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ],
    structure: {
      relationships: [],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "فَالسَّابِقَاتِ سَبْقًا",
    words: [
      { position: 1, arabic: "فَالسَّابِقَاتِ", transliteration: "fal-sābiqāti", root: "س ب ق", meaning: { en: "And those who race", ur: "پھر سبقت لے جانے والوں کی", ar: "فالتي تَسبِقُ" }, pos: "N", posLabel: "N", grammarRole: "oath", features: { pattern: "فَاعِلات" } },
      { position: 2, arabic: "سَبْقًا", transliteration: "sabqan", root: "س ب ق", meaning: { en: "racing", ur: "آگے نکل کر", ar: "سِباقاً" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative", advanced: { linguisticMiracle: "Angels racing to execute commands" } }
    ],
    structure: {
      relationships: [],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "فَالْمُدَبِّرَاتِ أَمْرًا",
    words: [
      { position: 1, arabic: "فَالْمُدَبِّرَاتِ", transliteration: "fal-mudabbirāti", root: "د ب ر", meaning: { en: "And those who arrange", ur: "پھر کام کا انتظام کرنے والوں کی", ar: "فالتي تُدَبِّرُ" }, pos: "N", posLabel: "N", grammarRole: "oath", features: { pattern: "مُفَعِّلات", form: "II" }, advanced: { linguisticMiracle: "Angels managing cosmic affairs by Allah's command" } },
      { position: 2, arabic: "أَمْرًا", transliteration: "amran", root: "أ م ر", meaning: { en: "affairs", ur: "کاموں کا", ar: "الأُمور" }, pos: "N", posLabel: "N", grammarRole: "object" }
    ],
    structure: {
      relationships: [],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "يَوْمَ تَرْجُفُ الرَّاجِفَةُ",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb of time" },
      { position: 2, arabic: "تَرْجُفُ", transliteration: "tarjufu", root: "ر ج ف", meaning: { en: "will quake", ur: "کانپے گی", ar: "تَهتَزُّ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "الرَّاجِفَةُ", transliteration: "al-rājifatu", root: "ر ج ف", meaning: { en: "the quaking one", ur: "کانپنے والی", ar: "الأَرض" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { linguisticMiracle: "First Trumpet blast - earth shakes" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + فاعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "تَتْبَعُهَا الرَّادِفَةُ",
    words: [
      { position: 1, arabic: "تَتْبَعُهَا", transliteration: "tatbaʿuhā", root: "ت ب ع", meaning: { en: "Follows it", ur: "اس کے پیچھے آئے گی", ar: "تَلحَقُها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 2, arabic: "الرَّادِفَةُ", transliteration: "al-rādifatu", root: "ر د ف", meaning: { en: "the subsequent one", ur: "دوسری", ar: "التالِيَة" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { linguisticMiracle: "Second Trumpet blast - follows the first" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ",
    words: [
      { position: 1, arabic: "قُلُوبٌ", transliteration: "qulūbun", root: "ق ل ب", meaning: { en: "Hearts", ur: "دل", ar: "قُلوبٌ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 2, arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: { en: "that Day", ur: "اس دن", ar: "في ذلِكَ اليَوم" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 3, arabic: "وَاجِفَةٌ", transliteration: "wājifatun", root: "و ج ف", meaning: { en: "trembling", ur: "کانپتے ہوں گے", ar: "مُرتَعِشَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", advanced: { linguisticMiracle: "Hearts pounding with terror" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "أَبْصَارُهَا خَاشِعَةٌ",
    words: [
      { position: 1, arabic: "أَبْصَارُهَا", transliteration: "abṣāruhā", root: "ب ص ر", meaning: { en: "Their eyes", ur: "ان کی آنکھیں", ar: "عُيونُها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject" },
      { position: 2, arabic: "خَاشِعَةٌ", transliteration: "khāshiʿatun", root: "خ ش ع", meaning: { en: "humbled", ur: "جھکی ہوئی", ar: "ذَليلَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", advanced: { linguisticMiracle: "Eyes lowered in fear and humiliation" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مبتدأ + خبر' }
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "يَقُولُونَ أَإِنَّا لَمَرْدُودُونَ فِي الْحَافِرَةِ",
    words: [
      { position: 1, arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "They say", ur: "وہ کہتے ہیں", ar: "يَقولونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "أَإِنَّا", transliteration: "a-innā", meaning: { en: "Will we indeed", ur: "کیا ہم", ar: "أَإِنَّنا" }, pos: "INT+ACC+PRON", posLabel: "INT+ACC+PRON", grammarRole: "interrogative" },
      { position: 3, arabic: "لَمَرْدُودُونَ", transliteration: "lamardūdūna", root: "ر د د", meaning: { en: "be returned", ur: "واپس لائے جائیں گے", ar: "لَمُعادونَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "مَفْعُول" } },
      { position: 4, arabic: "فِي", transliteration: "fī", meaning: { en: "to", ur: "میں", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "الْحَافِرَةِ", transliteration: "al-ḥāfirati", root: "ح ف ر", meaning: { en: "the former state", ur: "پہلی حالت", ar: "الحالَة الأُولى" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Original creation - returned to life" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "أَإِذَا كُنَّا عِظَامًا نَّخِرَةً",
    words: [
      { position: 1, arabic: "أَإِذَا", transliteration: "a-idhā", meaning: { en: "Even when", ur: "کیا جب", ar: "أَحينَ" }, pos: "INT+COND", posLabel: "INT+COND", grammarRole: "interrogative + conditional" },
      { position: 2, arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "we are", ur: "ہم ہوں گے", ar: "كُنّا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "عِظَامًا", transliteration: "ʿiẓāman", root: "ع ظ م", meaning: { en: "bones", ur: "ہڈیاں", ar: "عِظاماً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 4, arabic: "نَّخِرَةً", transliteration: "nakhiratan", root: "ن خ ر", meaning: { en: "decayed", ur: "بوسیدہ", ar: "بالِيَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Hollow, crumbling bones - deniers doubt resurrection" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "قَالُوا تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ",
    words: [
      { position: 1, arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They say", ur: "وہ کہتے ہیں", ar: "قالوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "تِلْكَ", transliteration: "tilka", meaning: { en: "That", ur: "یہ تو", ar: "تِلكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "subject" },
      { position: 3, arabic: "إِذًا", transliteration: "idhan", meaning: { en: "then", ur: "پھر", ar: "إذَن" }, pos: "COND", posLabel: "COND", grammarRole: "result particle" },
      { position: 4, arabic: "كَرَّةٌ", transliteration: "karratun", root: "ك ر ر", meaning: { en: "would be a return", ur: "واپسی ہوگی", ar: "رَجعَة" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 5, arabic: "خَاسِرَةٌ", transliteration: "khāsiratun", root: "خ س ر", meaning: { en: "of loss", ur: "نقصان والی", ar: "خاسِرَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "They sarcastically call resurrection 'losing return'" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 2, to: 4, label: 'مبتدأ + خبر' },
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "فَإِنَّمَا هِيَ زَجْرَةٌ وَاحِدَةٌ",
    words: [
      { position: 1, arabic: "فَإِنَّمَا", transliteration: "fa-innamā", meaning: { en: "But indeed it", ur: "پس یہ تو", ar: "فَإِنَّما" }, pos: "CONJ+RES", posLabel: "CONJ+RES", grammarRole: "restrictive" },
      { position: 2, arabic: "هِيَ", transliteration: "hiya", meaning: { en: "is", ur: "ہے", ar: "هِيَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "زَجْرَةٌ", transliteration: "zajratun", root: "ز ج ر", meaning: { en: "a single shout", ur: "ایک ڈانٹ", ar: "صَيحَة" }, pos: "N", posLabel: "N", grammarRole: "predicate", advanced: { linguisticMiracle: "Just one blast - resurrection is that easy for Allah" } },
      { position: 4, arabic: "وَاحِدَةٌ", transliteration: "wāḥidatun", meaning: { en: "single", ur: "ایک", ar: "واحِدَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "فَإِذَا هُم بِالسَّاهِرَةِ",
    words: [
      { position: 1, arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "And behold", ur: "پھر اچانک", ar: "فَإذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "surprise particle" },
      { position: 2, arabic: "هُم", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هُم" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "بِالسَّاهِرَةِ", transliteration: "bil-sāhirati", root: "س ه ر", meaning: { en: "on the earth's surface", ur: "زمین کی سطح پر", ar: "على وَجهِ الأَرض" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Sahirah = earth surface (awake land) - all standing" } }
    ],
    structure: {
      relationships: [],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "هَلْ أَتَاكَ حَدِيثُ مُوسَىٰ",
    words: [
      { position: 1, arabic: "هَلْ", transliteration: "hal", meaning: { en: "Has", ur: "کیا", ar: "هَل" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 2, arabic: "أَتَاكَ", transliteration: "atāka", root: "أ ت ي", meaning: { en: "come to you", ur: "تجھے پہنچی", ar: "بَلَغَكَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 3, arabic: "حَدِيثُ", transliteration: "ḥadīthu", root: "ح د ث", meaning: { en: "the story", ur: "خبر", ar: "قِصَّة" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "مُوسَىٰ", transliteration: "Mūsā", meaning: { en: "of Musa", ur: "موسیٰ کی", ar: "موسى" }, pos: "PN", posLabel: "PN", grammarRole: "possessive" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  16: {
    ayahNumber: 16,
    arabic: "إِذْ نَادَاهُ رَبُّهُ بِالْوَادِ الْمُقَدَّسِ طُوًى",
    words: [
      { position: 1, arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب", ar: "حينَ" }, pos: "TEMP", posLabel: "TEMP", grammarRole: "temporal" },
      { position: 2, arabic: "نَادَاهُ", transliteration: "nādāhu", root: "ن د و", meaning: { en: "called him", ur: "اسے پکارا", ar: "دَعاهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 3, arabic: "رَبُّهُ", transliteration: "rabbuhu", meaning: { en: "his Lord", ur: "اس کے رب نے", ar: "مالِكُهُ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject" },
      { position: 4, arabic: "بِالْوَادِ", transliteration: "bil-wādi", root: "و د ي", meaning: { en: "in the valley", ur: "وادی میں", ar: "في الوادي" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "الْمُقَدَّسِ", transliteration: "al-muqaddasi", root: "ق د س", meaning: { en: "sacred", ur: "مقدس", ar: "المُبارَك" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 6, arabic: "طُوًى", transliteration: "Ṭuwan", meaning: { en: "Tuwa", ur: "طویٰ", ar: "طُوى" }, pos: "PN", posLabel: "PN", grammarRole: "apposition", advanced: { linguisticMiracle: "Valley of Tuwa near Sinai - blessed place" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'موصوف + صفت' },
      { from: 5, to: 6, label: 'بدل' }
      ],
    },
  },

  17: {
    ayahNumber: 17,
    arabic: "اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ",
    words: [
      { position: 1, arabic: "اذْهَبْ", transliteration: "idh'hab", root: "ذ ه ب", meaning: { en: "Go", ur: "جا", ar: "اذهَب" }, pos: "V", posLabel: "V", grammarRole: "imperative" },
      { position: 2, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: { en: "Pharaoh", ur: "فرعون", ar: "فِرعَون" }, pos: "PN", posLabel: "PN", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed he", ur: "بے شک وہ", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 5, arabic: "طَغَىٰ", transliteration: "ṭaghā", root: "ط غ ي", meaning: { en: "has transgressed", ur: "سرکش ہو گیا", ar: "تَجاوَزَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Tughyan - exceeding all bounds in tyranny" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  18: {
    ayahNumber: 18,
    arabic: "فَقُلْ هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ",
    words: [
      { position: 1, arabic: "فَقُلْ", transliteration: "faqul", meaning: { en: "And say", ur: "پس کہہ", ar: "فَقُل" }, pos: "V", posLabel: "V", grammarRole: "imperative" },
      { position: 2, arabic: "هَل", transliteration: "hal", meaning: { en: "Would", ur: "کیا", ar: "هَل" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 3, arabic: "لَّكَ", transliteration: "laka", meaning: { en: "you", ur: "تو چاہے گا", ar: "لَكَ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 5, arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "SUB", posLabel: "SUB", grammarRole: "subordinating" },
      { position: 6, arabic: "تَزَكَّىٰ", transliteration: "tazakkā", root: "ز ك و", meaning: { en: "purify yourself", ur: "پاک ہو جائے", ar: "تَتَطَهَّرَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" }, advanced: { linguisticMiracle: "Gentle invitation to purification" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  19: {
    ayahNumber: 19,
    arabic: "وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ",
    words: [
      { position: 1, arabic: "وَأَهْدِيَكَ", transliteration: "wa-ahdiyaka", root: "ه د ي", meaning: { en: "And guide you", ur: "اور تجھے راہ دکھاؤں", ar: "وَأُرشِدَكَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 2, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "تیرے رب", ar: "مالِكِكَ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "فَتَخْشَىٰ", transliteration: "fatakhshā", root: "خ ش ي", meaning: { en: "so you may fear", ur: "تاکہ تو ڈرے", ar: "فَتَخافَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Guidance leads to reverential fear (khashyah)" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "فَأَرَاهُ الْآيَةَ الْكُبْرَىٰ",
    words: [
      { position: 1, arabic: "فَأَرَاهُ", transliteration: "fa-arāhu", root: "ر أ ي", meaning: { en: "And he showed him", ur: "پھر اسے دکھائی", ar: "فَأَظهَرَ لَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "IV" } },
      { position: 2, arabic: "الْآيَةَ", transliteration: "al-āyata", meaning: { en: "the Sign", ur: "نشانی", ar: "المُعجِزَة" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "الْكُبْرَىٰ", transliteration: "al-kubrā", root: "ك ب ر", meaning: { en: "the greatest", ur: "سب سے بڑی", ar: "العُظمى" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Staff becoming serpent or hand turning white" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  21: {
    ayahNumber: 21,
    arabic: "فَكَذَّبَ وَعَصَىٰ",
    words: [
      { position: 1, arabic: "فَكَذَّبَ", transliteration: "fakadh'dhaba", root: "ك ذ ب", meaning: { en: "But he denied", ur: "پھر اس نے جھٹلایا", ar: "فَجَحَدَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II" } },
      { position: 2, arabic: "وَعَصَىٰ", transliteration: "wa-ʿaṣā", root: "ع ص ي", meaning: { en: "and disobeyed", ur: "اور نافرمانی کی", ar: "وَخالَفَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [],
    },
  },

  22: {
    ayahNumber: 22,
    arabic: "ثُمَّ أَدْبَرَ يَسْعَىٰ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "sequence" },
      { position: 2, arabic: "أَدْبَرَ", transliteration: "adbara", root: "د ب ر", meaning: { en: "he turned away", ur: "پیٹھ پھیر لی", ar: "تَوَلّى" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 3, arabic: "يَسْعَىٰ", transliteration: "yasʿā", root: "س ع ي", meaning: { en: "striving", ur: "کوشش کرتا ہوا", ar: "مُجتَهِداً" }, pos: "V", posLabel: "V", grammarRole: "adverb of state", advanced: { linguisticMiracle: "Turned away striving (against truth)" } }
    ],
    structure: {
      relationships: [],
    },
  },

  23: {
    ayahNumber: 23,
    arabic: "فَحَشَرَ فَنَادَىٰ",
    words: [
      { position: 1, arabic: "فَحَشَرَ", transliteration: "faḥashara", root: "ح ش ر", meaning: { en: "And he gathered", ur: "پھر اس نے جمع کیا", ar: "فَجَمَعَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "فَنَادَىٰ", transliteration: "fanādā", root: "ن د و", meaning: { en: "and proclaimed", ur: "پھر پکارا", ar: "فَأَعلَنَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [],
    },
  },

  24: {
    ayahNumber: 24,
    arabic: "فَقَالَ أَنَا رَبُّكُمُ الْأَعْلَىٰ",
    words: [
      { position: 1, arabic: "فَقَالَ", transliteration: "faqāla", meaning: { en: "And said", ur: "پھر کہا", ar: "فَقالَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "أَنَا", transliteration: "anā", meaning: { en: "I am", ur: "میں ہوں", ar: "أَنا" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "رَبُّكُمُ", transliteration: "rabbukumu", meaning: { en: "your lord", ur: "تمہارا رب", ar: "إلهُكُم" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "predicate" },
      { position: 4, arabic: "الْأَعْلَىٰ", transliteration: "al-aʿlā", root: "ع ل و", meaning: { en: "the most high", ur: "سب سے بلند", ar: "الأَرفَع" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Ultimate blasphemy - claiming Allah's attribute for himself" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ],
    },
  },

  25: {
    ayahNumber: 25,
    arabic: "فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ",
    words: [
      { position: 1, arabic: "فَأَخَذَهُ", transliteration: "fa-akhadhahu", root: "أ خ ذ", meaning: { en: "So Allah seized him", ur: "پھر اللہ نے اسے پکڑا", ar: "فَعاقَبَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 2, arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "PN", posLabel: "PN", grammarRole: "subject" },
      { position: 3, arabic: "نَكَالَ", transliteration: "nakāla", root: "ن ك ل", meaning: { en: "as an exemplary punishment", ur: "عبرتناک سزا", ar: "عِقابَ" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" },
      { position: 4, arabic: "الْآخِرَةِ", transliteration: "al-ākhirati", meaning: { en: "of the Hereafter", ur: "آخرت کی", ar: "والدُّنيا" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 5, arabic: "وَالْأُولَىٰ", transliteration: "wal-ūlā", meaning: { en: "and the first", ur: "اور دنیا کی", ar: "والأُولى" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Punished in both worlds - drowning + hellfire" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  26: {
    ayahNumber: 26,
    arabic: "إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس میں", ar: "ذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "demonstrative" },
      { position: 4, arabic: "لَعِبْرَةً", transliteration: "laʿibratan", root: "ع ب ر", meaning: { en: "surely a lesson", ur: "یقیناً عبرت ہے", ar: "لَمَوعِظَةً" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 5, arabic: "لِّمَن", transliteration: "liman", meaning: { en: "for who", ur: "جو", ar: "لِمَن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "يَخْشَىٰ", transliteration: "yakhshā", meaning: { en: "fears", ur: "ڈرتا ہے", ar: "يَخافُ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },

  27: {
    ayahNumber: 27,
    arabic: "أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ ۚ بَنَاهَا",
    words: [
      { position: 1, arabic: "أَأَنتُمْ", transliteration: "a-antum", meaning: { en: "Are you", ur: "کیا تم", ar: "أَأَنتُم" }, pos: "INT+PRON", posLabel: "INT+PRON", grammarRole: "interrogative" },
      { position: 2, arabic: "أَشَدُّ", transliteration: "ashaddu", root: "ش د د", meaning: { en: "more difficult", ur: "زیادہ مشکل ہو", ar: "أَصعَبُ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { comparative: true } },
      { position: 3, arabic: "خَلْقًا", transliteration: "khalqan", meaning: { en: "in creation", ur: "پیدا کرنے میں", ar: "خَلقاً" }, pos: "N", posLabel: "N", grammarRole: "specification" },
      { position: 4, arabic: "أَمِ", transliteration: "ami", meaning: { en: "or", ur: "یا", ar: "أَم" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "disjunction" },
      { position: 5, arabic: "السَّمَاءُ", transliteration: "al-samā'u", meaning: { en: "the sky", ur: "آسمان", ar: "السَّماء" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 6, arabic: "بَنَاهَا", transliteration: "banāhā", root: "ب ن ي", meaning: { en: "He constructed it", ur: "اسے بنایا", ar: "أَقامَها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", advanced: { linguisticMiracle: "Sky's construction proves resurrection's ease" } }
    ],
    structure: {
      relationships: [],
    },
  },

  28: {
    ayahNumber: 28,
    arabic: "رَفَعَ سَمْكَهَا فَسَوَّاهَا",
    words: [
      { position: 1, arabic: "رَفَعَ", transliteration: "rafaʿa", root: "ر ف ع", meaning: { en: "He raised", ur: "اس نے بلند کیا", ar: "عَلّى" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "سَمْكَهَا", transliteration: "samkahā", root: "س م ك", meaning: { en: "its ceiling", ur: "اس کی چھت کو", ar: "سَقفَها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "object" },
      { position: 3, arabic: "فَسَوَّاهَا", transliteration: "fasawwāhā", root: "س و ي", meaning: { en: "and proportioned it", ur: "پھر اسے برابر کیا", ar: "فَعَدَّلَها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "II" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
  },

  29: {
    ayahNumber: 29,
    arabic: "وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا",
    words: [
      { position: 1, arabic: "وَأَغْطَشَ", transliteration: "wa-aghṭasha", root: "غ ط ش", meaning: { en: "And darkened", ur: "اور تاریک کیا", ar: "وَأَظلَمَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" }, advanced: { linguisticMiracle: "Rare word for darkness" } },
      { position: 2, arabic: "لَيْلَهَا", transliteration: "laylahā", meaning: { en: "its night", ur: "اس کی رات کو", ar: "لَيلَها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "object" },
      { position: 3, arabic: "وَأَخْرَجَ", transliteration: "wa-akhraja", root: "خ ر ج", meaning: { en: "and brought forth", ur: "اور نکالا", ar: "وَأَبرَزَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 4, arabic: "ضُحَاهَا", transliteration: "ḍuḥāhā", root: "ض ح و", meaning: { en: "its daylight", ur: "اس کی روشنی کو", ar: "نَهارَها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'فعل + مفعول به' }
      ],
    },
  },

  30: {
    ayahNumber: 30,
    arabic: "وَالْأَرْضَ بَعْدَ ذَٰلِكَ دَحَاهَا",
    words: [
      { position: 1, arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "And the earth", ur: "اور زمین کو", ar: "والأَرضَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "کے بعد", ar: "بَعدَ" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 3, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس کے", ar: "ذلِكَ" }, pos: "DEM", posLabel: "DEM", grammarRole: "demonstrative" },
      { position: 4, arabic: "دَحَاهَا", transliteration: "daḥāhā", root: "د ح و", meaning: { en: "He spread it", ur: "اسے بچھایا", ar: "بَسَطَها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", advanced: { linguisticMiracle: "Dahw = spreading oval shape (like egg)" } }
    ],
    structure: {
      relationships: [],
    },
  },

  31: {
    ayahNumber: 31,
    arabic: "أَخْرَجَ مِنْهَا مَاءَهَا وَمَرْعَاهَا",
    words: [
      { position: 1, arabic: "أَخْرَجَ", transliteration: "akhraja", meaning: { en: "He extracted", ur: "اس نے نکالا", ar: "أَبرَزَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "مِنْهَا", transliteration: "minhā", meaning: { en: "from it", ur: "اس میں سے", ar: "مِنها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "مَاءَهَا", transliteration: "mā'ahā", meaning: { en: "its water", ur: "اس کا پانی", ar: "ماءَها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "object" },
      { position: 4, arabic: "وَمَرْعَاهَا", transliteration: "wa-marʿāhā", root: "ر ع ي", meaning: { en: "and its pasture", ur: "اور اس کی چراگاہ", ar: "وَمَراعيها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "object" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  32: {
    ayahNumber: 32,
    arabic: "وَالْجِبَالَ أَرْسَاهَا",
    words: [
      { position: 1, arabic: "وَالْجِبَالَ", transliteration: "wal-jibāla", meaning: { en: "And the mountains", ur: "اور پہاڑوں کو", ar: "والجِبالَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 2, arabic: "أَرْسَاهَا", transliteration: "arsāhā", root: "ر س و", meaning: { en: "He set firmly", ur: "ان کو جما دیا", ar: "ثَبَّتَها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "IV" } }
    ],
    structure: {
      relationships: [],
    },
  },

  33: {
    ayahNumber: 33,
    arabic: "مَتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ",
    words: [
      { position: 1, arabic: "مَتَاعًا", transliteration: "matāʿan", meaning: { en: "As provision", ur: "فائدے کے لیے", ar: "مَنفَعَةً" }, pos: "N", posLabel: "N", grammarRole: "adverb of purpose" },
      { position: 2, arabic: "لَّكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لَكُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "وَلِأَنْعَامِكُمْ", transliteration: "wa-li-anʿāmikum", meaning: { en: "and your cattle", ur: "اور تمہارے جانوروں کے لیے", ar: "وَلِمَواشيكُم" }, pos: "PREP+N+PRON", posLabel: "PREP+N+PRON", grammarRole: "prepositional phrase" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  34: {
    ayahNumber: 34,
    arabic: "فَإِذَا جَاءَتِ الطَّامَّةُ الْكُبْرَىٰ",
    words: [
      { position: 1, arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "So when", ur: "پھر جب", ar: "فَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "جَاءَتِ", transliteration: "jā'ati", meaning: { en: "comes", ur: "آ جائے", ar: "أَتَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "الطَّامَّةُ", transliteration: "al-ṭāmmatu", root: "ط م م", meaning: { en: "the Overwhelming", ur: "سب کو ڈبو دینے والی", ar: "الكارِثَة" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { linguisticMiracle: "That which overwhelms all - Judgment Day" } },
      { position: 4, arabic: "الْكُبْرَىٰ", transliteration: "al-kubrā", meaning: { en: "the great", ur: "بڑی", ar: "العُظمى" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  35: {
    ayahNumber: 35,
    arabic: "يَوْمَ يَتَذَكَّرُ الْإِنسَانُ مَا سَعَىٰ",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "The Day", ur: "جس دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 2, arabic: "يَتَذَكَّرُ", transliteration: "yatadhakkaru", root: "ذ ك ر", meaning: { en: "will remember", ur: "یاد کرے گا", ar: "يَتَذَكَّرُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" } },
      { position: 3, arabic: "الْإِنسَانُ", transliteration: "al-insānu", meaning: { en: "man", ur: "انسان", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 4, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 5, arabic: "سَعَىٰ", transliteration: "saʿā", meaning: { en: "he strove for", ur: "اس نے کوشش کی", ar: "عَمِلَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + فاعل' },
      { from: 1, to: 4, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'فعل + فاعل' },
      { from: 2, to: 4, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'موصول + صلة' }
      ],
    },
  },

  36: {
    ayahNumber: 36,
    arabic: "وَبُرِّزَتِ الْجَحِيمُ لِمَن يَرَىٰ",
    words: [
      { position: 1, arabic: "وَبُرِّزَتِ", transliteration: "wa-burrizati", root: "ب ر ز", meaning: { en: "And is displayed", ur: "اور ظاہر کر دی جائے گی", ar: "وَأُظهِرَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" } },
      { position: 2, arabic: "الْجَحِيمُ", transliteration: "al-jaḥīmu", meaning: { en: "the Hellfire", ur: "دوزخ", ar: "النار" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "لِمَن", transliteration: "liman", meaning: { en: "for whoever", ur: "ہر اس کے لیے جو", ar: "لِمَن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "يَرَىٰ", transliteration: "yarā", meaning: { en: "sees", ur: "دیکھے", ar: "يُبصِرُ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  37: {
    ayahNumber: 37,
    arabic: "فَأَمَّا مَن طَغَىٰ",
    words: [
      { position: 1, arabic: "فَأَمَّا", transliteration: "fa-ammā", meaning: { en: "So as for", ur: "پس جس نے", ar: "فَأَمّا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "مَن", transliteration: "man", meaning: { en: "he who", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "طَغَىٰ", transliteration: "ṭaghā", meaning: { en: "transgressed", ur: "سرکشی کی", ar: "تَجاوَزَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  38: {
    ayahNumber: 38,
    arabic: "وَآثَرَ الْحَيَاةَ الدُّنْيَا",
    words: [
      { position: 1, arabic: "وَآثَرَ", transliteration: "wa-āthara", root: "أ ث ر", meaning: { en: "And preferred", ur: "اور ترجیح دی", ar: "وَفَضَّلَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" } },
      { position: 2, arabic: "الْحَيَاةَ", transliteration: "al-ḥayāta", meaning: { en: "the life", ur: "زندگی کو", ar: "الحَياةَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of this world", ur: "دنیا کی", ar: "الدُّنيا" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  39: {
    ayahNumber: 39,
    arabic: "فَإِنَّ الْجَحِيمَ هِيَ الْمَأْوَىٰ",
    words: [
      { position: 1, arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "Then indeed", ur: "تو بے شک", ar: "فَإِنَّ" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الْجَحِيمَ", transliteration: "al-jaḥīma", meaning: { en: "Hellfire", ur: "دوزخ", ar: "النارَ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "هِيَ", transliteration: "hiya", meaning: { en: "is", ur: "ہے", ar: "هِيَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "copula" },
      { position: 4, arabic: "الْمَأْوَىٰ", transliteration: "al-ma'wā", root: "أ و ي", meaning: { en: "the refuge", ur: "ٹھکانہ", ar: "المَلجَأ" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  40: {
    ayahNumber: 40,
    arabic: "وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ",
    words: [
      { position: 1, arabic: "وَأَمَّا", transliteration: "wa-ammā", meaning: { en: "But as for", ur: "اور جو", ar: "وَأَمّا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "مَنْ", transliteration: "man", meaning: { en: "he who", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 3, arabic: "خَافَ", transliteration: "khāfa", root: "خ و ف", meaning: { en: "feared", ur: "ڈرا", ar: "خَشِيَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "مَقَامَ", transliteration: "maqāma", root: "ق و م", meaning: { en: "the standing", ur: "کھڑے ہونے سے", ar: "مَوقِفَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 5, arabic: "رَبِّهِ", transliteration: "rabbihi", meaning: { en: "before his Lord", ur: "اپنے رب کے سامنے", ar: "رَبِّهِ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "possessive" },
      { position: 6, arabic: "وَنَهَى", transliteration: "wa-nahā", root: "ن ه ي", meaning: { en: "and forbade", ur: "اور روکا", ar: "وَمَنَعَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 7, arabic: "النَّفْسَ", transliteration: "al-nafsa", meaning: { en: "the soul", ur: "نفس کو", ar: "النَّفسَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 8, arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے", ar: "عَن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 9, arabic: "الْهَوَىٰ", transliteration: "al-hawā", root: "ه و ي", meaning: { en: "desires", ur: "خواہشات", ar: "الشَّهَوات" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Controlling nafs from hawā - key to success" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 3, to: 4, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
      { from: 6, to: 7, label: 'فعل + مفعول به' },
      { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },

  41: {
    ayahNumber: 41,
    arabic: "فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ",
    words: [
      { position: 1, arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "Then indeed", ur: "تو بے شک", ar: "فَإِنَّ" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الْجَنَّةَ", transliteration: "al-jannata", meaning: { en: "Paradise", ur: "جنت", ar: "الفِردَوسَ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "هِيَ", transliteration: "hiya", meaning: { en: "is", ur: "ہے", ar: "هِيَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "copula" },
      { position: 4, arabic: "الْمَأْوَىٰ", transliteration: "al-ma'wā", meaning: { en: "the refuge", ur: "ٹھکانہ", ar: "المَلجَأ" }, pos: "N", posLabel: "N", grammarRole: "predicate" }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  42: {
    ayahNumber: 42,
    arabic: "يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا",
    words: [
      { position: 1, arabic: "يَسْأَلُونَكَ", transliteration: "yas'alūnaka", root: "س أ ل", meaning: { en: "They ask you", ur: "وہ تجھ سے پوچھتے ہیں", ar: "يَستَفهِمونَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 2, arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "about", ur: "کے بارے میں", ar: "عَن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "السَّاعَةِ", transliteration: "al-sāʿati", root: "س و ع", meaning: { en: "the Hour", ur: "قیامت", ar: "القِيامَة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "أَيَّانَ", transliteration: "ayyāna", meaning: { en: "when", ur: "کب", ar: "مَتى" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 5, arabic: "مُرْسَاهَا", transliteration: "mursāhā", root: "ر س و", meaning: { en: "is its arrival", ur: "اس کا وقت ہے", ar: "وُقوعُها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject", advanced: { linguisticMiracle: "Mursa = anchoring place - when will Hour anchor?" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  43: {
    ayahNumber: 43,
    arabic: "فِيمَ أَنتَ مِن ذِكْرَاهَا",
    words: [
      { position: 1, arabic: "فِيمَ", transliteration: "fīma", meaning: { en: "In what", ur: "کس میں", ar: "فيما" }, pos: "PREP+INT", posLabel: "PREP+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "أَنتَ", transliteration: "anta", meaning: { en: "are you", ur: "تو ہے", ar: "أَنتَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "ذِكْرَاهَا", transliteration: "dhikrāhā", root: "ذ ك ر", meaning: { en: "mentioning it", ur: "اس کے بیان", ar: "ذِكرِها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Prophet doesn't know timing - only Allah knows" } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  44: {
    ayahNumber: 44,
    arabic: "إِلَىٰ رَبِّكَ مُنتَهَاهَا",
    words: [
      { position: 1, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "To", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "your Lord", ur: "تیرے رب", ar: "مالِكِكَ" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "مُنتَهَاهَا", transliteration: "muntahāhā", root: "ن ه ي", meaning: { en: "is its final knowledge", ur: "اس کا انجام ہے", ar: "نِهايَتُها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject", advanced: { linguisticMiracle: "Knowledge of Hour ends with Allah alone" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },

  45: {
    ayahNumber: 45,
    arabic: "إِنَّمَا أَنتَ مُنذِرُ مَن يَخْشَاهَا",
    words: [
      { position: 1, arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "You are only", ur: "تو تو بس", ar: "إِنَّما" }, pos: "RES", posLabel: "RES", grammarRole: "restrictive" },
      { position: 2, arabic: "أَنتَ", transliteration: "anta", meaning: { en: "you", ur: "تو ہے", ar: "أَنتَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "مُنذِرُ", transliteration: "mundhiru", root: "ن ذ ر", meaning: { en: "a warner", ur: "ڈرانے والا", ar: "مُحَذِّر" }, pos: "N", posLabel: "N", grammarRole: "predicate", features: { pattern: "مُفْعِل" } },
      { position: 4, arabic: "مَن", transliteration: "man", meaning: { en: "of who", ur: "جو", ar: "مَن" }, pos: "REL", posLabel: "REL", grammarRole: "possessive" },
      { position: 5, arabic: "يَخْشَاهَا", transliteration: "yakhshāhā", meaning: { en: "fears it", ur: "اس سے ڈرتا ہے", ar: "يَخافُها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 4, to: 5, label: 'موصول + صلة' }
      ],
    },
  },

  46: {
    ayahNumber: 46,
    arabic: "كَأَنَّهُمْ يَوْمَ يَرَوْنَهَا لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً أَوْ ضُحَاهَا",
    words: [
      { position: 1, arabic: "كَأَنَّهُمْ", transliteration: "ka-annahum", meaning: { en: "As if they", ur: "گویا انہوں نے", ar: "كَأَنَّهُم" }, pos: "COMP+PRON", posLabel: "COMP+PRON", grammarRole: "comparison" },
      { position: 2, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "the Day", ur: "جس دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 3, arabic: "يَرَوْنَهَا", transliteration: "yarawnahā", meaning: { en: "they see it", ur: "اسے دیکھیں گے", ar: "يُشاهِدونَها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 4, arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں", ar: "لَم" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 5, arabic: "يَلْبَثُوا", transliteration: "yalbathū", root: "ل ب ث", meaning: { en: "they stayed", ur: "رہے", ar: "مَكَثوا" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 6, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "سِوى" }, pos: "EXCEPT", posLabel: "EXCEPT", grammarRole: "exception" },
      { position: 7, arabic: "عَشِيَّةً", transliteration: "ʿashiyyatan", root: "ع ش و", meaning: { en: "an evening", ur: "ایک شام", ar: "مَساءً" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 8, arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أَو" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "disjunction" },
      { position: 9, arabic: "ضُحَاهَا", transliteration: "ḍuḥāhā", meaning: { en: "its morning", ur: "اس کی صبح", ar: "صَباحَها" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "adverb", advanced: { linguisticMiracle: "Life felt like just evening or morning - so short" } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'نفی + فعل' }
      ],
    },
  }
};

export default TREEBANK_DATA;
