/**
 * Surah At-Tariq (86) - Quranic Arabic Treebank
 * The Night Comer / The Piercing Star
 * Total Ayahs: 17
 * Theme: Cosmic oath, human creation, Quran's decisive word
 */

export const TREEBANK_DATA = {
  surahId: 86,
  surahName: "At-Tariq",
  surahNameArabic: "الطارق",
  totalAyahs: 17,
  revelationType: "Makki",
  theme: "Every soul has a guardian; man's creation from water; Quran is decisive",

  1: {
    ayahNumber: 1,
    arabic: "وَالسَّمَاءِ وَالطَّارِقِ",
    words: [
      { position: 1, arabic: "وَالسَّمَاءِ", transliteration: "wal-samā'i", root: "س م و", meaning: { en: "By the sky", ur: "قسم ہے آسمان کی", ar: "قَسَماً بالسماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath", features: { case: "genitive" } },
      { position: 2, arabic: "وَالطَّارِقِ", transliteration: "wal-ṭāriq", root: "ط ر ق", meaning: { en: "and the night-comer", ur: "اور رات کو آنے والے کی", ar: "والنَّجمِ الثاقِب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath", features: { pattern: "فَاعِل" }, advanced: { rootFamily: ["طَرق", "طَريق", "مِطرَقة"], linguisticMiracle: "طارق = one who knocks/comes at night - stars 'appear' at night" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'قسم' }
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَمَا أَدْرَاكَ مَا الطَّارِقُ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INT", posLabel: "CONJ+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "أَدْرَاكَ", transliteration: "adrāka", root: "د ر ي", meaning: { en: "can make you know", ur: "تجھے بتائے", ar: "أَعلَمَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" }, advanced: { linguisticMiracle: "Quranic formula for emphasizing something beyond comprehension" } },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا ہے", ar: "ما" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 4, arabic: "الطَّارِقُ", transliteration: "al-ṭāriqu", root: "ط ر ق", meaning: { en: "the night-comer", ur: "رات کو آنے والا", ar: "النَّجمُ" }, pos: "N", posLabel: "N", grammarRole: "subject" }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "النَّجْمُ الثَّاقِبُ",
    words: [
      { position: 1, arabic: "النَّجْمُ", transliteration: "al-najmu", root: "ن ج م", meaning: { en: "The star", ur: "ستارہ", ar: "الكَوكَب" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "الثَّاقِبُ", transliteration: "al-thāqibu", root: "ث ق ب", meaning: { en: "the piercing", ur: "چمکدار", ar: "المُضيء" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "فَاعِل" }, advanced: { linguisticMiracle: "ثاقب = pierces darkness with light. Stars penetrate night's veil" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ",
    words: [
      { position: 1, arabic: "إِن", transliteration: "in", meaning: { en: "Indeed", ur: "بے شک", ar: "ما" }, pos: "EMPH", posLabel: "EMPH", grammarRole: "emphasis" },
      { position: 2, arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "ہر", ar: "كُلّ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "نَفْسٍ", transliteration: "nafsin", root: "ن ف س", meaning: { en: "soul", ur: "جان", ar: "رُوح" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 4, arabic: "لَّمَّا", transliteration: "lammā", meaning: { en: "surely", ur: "ضرور", ar: "إِلّا" }, pos: "EMPH", posLabel: "EMPH", grammarRole: "emphasis" },
      { position: 5, arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "over it", ur: "اس پر", ar: "عليها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "حَافِظٌ", transliteration: "ḥāfiẓun", root: "ح ف ظ", meaning: { en: "a guardian", ur: "نگہبان", ar: "رَقيبٌ" }, pos: "N", posLabel: "N", grammarRole: "predicate", features: { pattern: "فَاعِل" }, advanced: { rootFamily: ["حِفظ", "محفوظ", "حافِظ"], linguisticMiracle: "Angels recording every deed - nothing escapes" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'توکید' },
      { from: 2, to: 6, label: 'مبتدأ + خبر' },
      { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ",
    words: [
      { position: 1, arabic: "فَلْيَنظُرِ", transliteration: "falyanẓuri", root: "ن ظ ر", meaning: { en: "So let man observe", ur: "پس انسان کو دیکھنا چاہیے", ar: "فَليَتَأَمَّل" }, pos: "V", posLabel: "V", grammarRole: "jussive", features: { form: "I", mood: "jussive" } },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "al-insānu", root: "أ ن س", meaning: { en: "man", ur: "انسان", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "مِمَّ", transliteration: "mimma", meaning: { en: "from what", ur: "کس چیز سے", ar: "مِن أَيِّ شَيءٍ" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "خُلِقَ", transliteration: "khuliqa", root: "خ ل ق", meaning: { en: "he was created", ur: "وہ پیدا کیا گیا", ar: "صُنِعَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "خُلِقَ مِن مَّاءٍ دَافِقٍ",
    words: [
      { position: 1, arabic: "خُلِقَ", transliteration: "khuliqa", root: "خ ل ق", meaning: { en: "He was created", ur: "پیدا کیا گیا", ar: "صُنِعَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "مَّاءٍ", transliteration: "mā'in", root: "م و ه", meaning: { en: "water/fluid", ur: "پانی", ar: "سائِل" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "دَافِقٍ", transliteration: "dāfiqin", root: "د ف ق", meaning: { en: "ejected/gushing", ur: "اچھلنے والے", ar: "مُندَفِع" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "فَاعِل" }, advanced: { linguisticMiracle: "Scientific precision: describes seminal fluid's forceful emission" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ",
    words: [
      { position: 1, arabic: "يَخْرُجُ", transliteration: "yakhruju", root: "خ ر ج", meaning: { en: "Emerging", ur: "نکلتا ہے", ar: "يَصدُرُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "بَيْنِ", transliteration: "bayni", meaning: { en: "between", ur: "درمیان", ar: "وَسَط" }, pos: "N", posLabel: "N", grammarRole: "location" },
      { position: 4, arabic: "الصُّلْبِ", transliteration: "al-ṣulbi", root: "ص ل ب", meaning: { en: "backbone", ur: "پیٹھ کی ہڈی", ar: "الظَّهر" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "وَالتَّرَائِبِ", transliteration: "wal-tarā'ibi", root: "ت ر ب", meaning: { en: "and ribs", ur: "اور سینے کی ہڈیاں", ar: "والأَضلاع" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Describes region where reproductive fluids originate embryologically" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ",
    words: [
      { position: 1, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He", ur: "بے شک وہ", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis + subject" },
      { position: 2, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 3, arabic: "رَجْعِهِ", transliteration: "rajʿihi", root: "ر ج ع", meaning: { en: "his return", ur: "اس کی واپسی", ar: "إعادَتِهِ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", advanced: { rootFamily: ["رُجوع", "مَرجِع", "راجِع"], linguisticMiracle: "Same power that created can recreate - resurrection proof" } },
      { position: 4, arabic: "لَقَادِرٌ", transliteration: "laqādirun", root: "ق د ر", meaning: { en: "surely Able", ur: "یقیناً قادر ہے", ar: "لَقَويٌّ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "فَاعِل" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "يَوْمَ تُبْلَى السَّرَائِرُ",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "Day", ur: "جس دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb of time", features: { case: "accusative" } },
      { position: 2, arabic: "تُبْلَى", transliteration: "tublā", root: "ب ل و", meaning: { en: "are examined", ur: "جانچے جائیں گے", ar: "تُختَبَرُ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } },
      { position: 3, arabic: "السَّرَائِرُ", transliteration: "al-sarā'iru", root: "س ر ر", meaning: { en: "the secrets", ur: "دلوں کے راز", ar: "الخَفايا" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { rootFamily: ["سِرّ", "سَريرة", "أَسرار"], linguisticMiracle: "Hidden intentions exposed - no secrets on Judgment Day" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + فاعل' },
      { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "فَمَا لَهُ مِن قُوَّةٍ وَلَا نَاصِرٍ",
    words: [
      { position: 1, arabic: "فَمَا", transliteration: "famā", meaning: { en: "Then not", ur: "پھر نہیں ہوگی", ar: "فَلَيسَ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "لَهُ" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی", ar: "مِن" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "قُوَّةٍ", transliteration: "quwwatin", root: "ق و ي", meaning: { en: "strength", ur: "طاقت", ar: "قُدرَة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ", ar: "ولا" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 6, arabic: "نَاصِرٍ", transliteration: "nāṣirin", root: "ن ص ر", meaning: { en: "helper", ur: "مددگار", ar: "مُعين" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase", features: { pattern: "فَاعِل" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "وَالسَّمَاءِ ذَاتِ الرَّجْعِ",
    words: [
      { position: 1, arabic: "وَالسَّمَاءِ", transliteration: "wal-samā'i", root: "س م و", meaning: { en: "By the sky", ur: "قسم ہے آسمان کی", ar: "قَسَماً بالسماء" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath" },
      { position: 2, arabic: "ذَاتِ", transliteration: "dhāti", meaning: { en: "possessor of", ur: "والے", ar: "صاحِبَة" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 3, arabic: "الرَّجْعِ", transliteration: "al-rajʿi", root: "ر ج ع", meaning: { en: "the return", ur: "لوٹانے والے", ar: "المَطَر" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Sky that returns rain - water cycle reference. Also: celestial cycles" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "وَالْأَرْضِ ذَاتِ الصَّدْعِ",
    words: [
      { position: 1, arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", root: "أ ر ض", meaning: { en: "And the earth", ur: "اور زمین کی", ar: "والأَرض" }, pos: "CONJ+N", posLabel: "CONJ+N", grammarRole: "oath" },
      { position: 2, arabic: "ذَاتِ", transliteration: "dhāti", meaning: { en: "possessor of", ur: "والی", ar: "صاحِبَة" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 3, arabic: "الصَّدْعِ", transliteration: "al-ṣadʿi", root: "ص د ع", meaning: { en: "the splitting", ur: "پھٹنے والی", ar: "الشَّقّ" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Earth splits for plants to emerge - germination reference" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "إِنَّهُ لَقَوْلٌ فَصْلٌ",
    words: [
      { position: 1, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed it", ur: "بے شک یہ", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis + subject" },
      { position: 2, arabic: "لَقَوْلٌ", transliteration: "laqawlun", root: "ق و ل", meaning: { en: "surely a word", ur: "ضرور ایک کلام ہے", ar: "لَكَلامٌ" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 3, arabic: "فَصْلٌ", transliteration: "faṣlun", root: "ف ص ل", meaning: { en: "decisive", ur: "فیصلہ کن", ar: "قاطِعٌ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { rootFamily: ["فَصل", "فاصِل", "تفصيل"], linguisticMiracle: "Quran separates truth from falsehood decisively" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "وَمَا هُوَ بِالْهَزْلِ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں ہے", ar: "ولَيسَ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it", ur: "یہ", ar: "هُوَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "بِالْهَزْلِ", transliteration: "bil-hazli", root: "ه ز ل", meaning: { en: "amusement", ur: "ہنسی کی بات", ar: "باللَّعِب" }, pos: "N", posLabel: "N", grammarRole: "predicate", advanced: { linguisticMiracle: "Quran is not entertainment - serious divine communication" } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "إِنَّهُمْ يَكِيدُونَ كَيْدًا",
    words: [
      { position: 1, arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed they", ur: "بے شک وہ", ar: "إِنَّهُم" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis + subject" },
      { position: 2, arabic: "يَكِيدُونَ", transliteration: "yakīdūna", root: "ك ي د", meaning: { en: "plot", ur: "چال چلتے ہیں", ar: "يَمكُرونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "كَيْدًا", transliteration: "kaydan", root: "ك ي د", meaning: { en: "a plot", ur: "سازش", ar: "مَكرًا" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative", advanced: { linguisticMiracle: "Cognate accusative (مفعول مطلق) - emphasizes their plotting" } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
  },

  16: {
    ayahNumber: 16,
    arabic: "وَأَكِيدُ كَيْدًا",
    words: [
      { position: 1, arabic: "وَأَكِيدُ", transliteration: "wa-akīdu", root: "ك ي د", meaning: { en: "And I plan", ur: "اور میں تدبیر کرتا ہوں", ar: "وَأُخَطِّطُ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Allah's 'kayd' = perfect counter-plan. Human schemes fail against divine plan" } },
      { position: 2, arabic: "كَيْدًا", transliteration: "kaydan", root: "ك ي د", meaning: { en: "a plan", ur: "تدبیر", ar: "تَدبيرًا" }, pos: "N", posLabel: "N", grammarRole: "cognate accusative" }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
  },

  17: {
    ayahNumber: 17,
    arabic: "فَمَهِّلِ الْكَافِرِينَ أَمْهِلْهُمْ رُوَيْدًا",
    words: [
      { position: 1, arabic: "فَمَهِّلِ", transliteration: "famahhili", root: "م ه ل", meaning: { en: "So allow respite", ur: "پس مہلت دے", ar: "فَأَجِّل" }, pos: "V", posLabel: "V", grammarRole: "imperative", features: { form: "II", mood: "imperative" } },
      { position: 2, arabic: "الْكَافِرِينَ", transliteration: "al-kāfirīna", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافروں کو", ar: "الجاحِدينَ" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 3, arabic: "أَمْهِلْهُمْ", transliteration: "amhilhum", root: "م ه ل", meaning: { en: "allow them respite", ur: "انہیں ڈھیل دے", ar: "أَجِّلهُم" }, pos: "V", posLabel: "V", grammarRole: "imperative", features: { form: "IV", mood: "imperative" } },
      { position: 4, arabic: "رُوَيْدًا", transliteration: "ruwaydan", root: "ر و د", meaning: { en: "a little", ur: "تھوڑی", ar: "قَليلاً" }, pos: "N", posLabel: "N", grammarRole: "adverb", advanced: { linguisticMiracle: "Diminutive form - 'just a little while'. Their time is running out" } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
  }
};

export default TREEBANK_DATA;
