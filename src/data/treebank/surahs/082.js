/**
 * Surah Al-Infitar (82) - Quranic Arabic Treebank
 * The Cleaving
 * Total Ayahs: 19
 * Theme: Cosmic collapse, man's ingratitude, deeds recorded, Day of Judgment
 */

export const TREEBANK_DATA = {
  surahId: 82,
  surahName: "Al-Infitar",
  surahNameArabic: "الانفطار",
  totalAyahs: 19,
  revelationType: "Makki",
  theme: "When creation collapses, man will know what he prepared",

  1: {
    ayahNumber: 1,
    arabic: "إِذَا السَّمَاءُ انفَطَرَتْ",
    words: [
      { position: 1, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 2, arabic: "السَّمَاءُ", transliteration: "al-samā'u", root: "س م و", meaning: { en: "the sky", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "انفَطَرَتْ", transliteration: "infaṭarat", root: "ف ط ر", meaning: { en: "is cleft asunder", ur: "پھٹ جائے", ar: "انشَقَّت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VII", aspect: "perfect" }, advanced: { rootFamily: ["فَطر", "فِطرة", "انفطار"], linguisticMiracle: "Form VII - internal splitting of sky" } }
    ]
  },

  2: {
    ayahNumber: 2,
    arabic: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْكَوَاكِبُ", transliteration: "al-kawākibu", root: "ك و ك ب", meaning: { en: "the stars", ur: "ستارے", ar: "النُّجوم" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "انتَثَرَتْ", transliteration: "intatharat", root: "ن ث ر", meaning: { en: "are scattered", ur: "بکھر جائیں", ar: "تَفَرَّقَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VIII" }, advanced: { linguisticMiracle: "Stars fall like pearls from broken necklace" } }
    ]
  },

  3: {
    ayahNumber: 3,
    arabic: "وَإِذَا الْبِحَارُ فُجِّرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْبِحَارُ", transliteration: "al-biḥāru", root: "ب ح ر", meaning: { en: "the seas", ur: "سمندر", ar: "البُحور" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "فُجِّرَتْ", transliteration: "fujjirat", root: "ف ج ر", meaning: { en: "are burst forth", ur: "پھوٹ جائیں", ar: "انفَجَرَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" }, advanced: { linguisticMiracle: "Seas merge, barriers removed - all water becomes one" } }
    ]
  },

  4: {
    ayahNumber: 4,
    arabic: "وَإِذَا الْقُبُورُ بُعْثِرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْقُبُورُ", transliteration: "al-qubūru", root: "ق ب ر", meaning: { en: "the graves", ur: "قبریں", ar: "المَقابِر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "بُعْثِرَتْ", transliteration: "buʿthirat", root: "ب ع ث ر", meaning: { en: "are overturned", ur: "کھول دی جائیں", ar: "أُثيرَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" }, advanced: { linguisticMiracle: "Graves opened, contents scattered - resurrection begins" } }
    ]
  },

  5: {
    ayahNumber: 5,
    arabic: "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ",
    words: [
      { position: 1, arabic: "عَلِمَتْ", transliteration: "ʿalimat", root: "ع ل م", meaning: { en: "Will know", ur: "جان لے گی", ar: "أَدرَكَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "نَفْسٌ", transliteration: "nafsun", root: "ن ف س", meaning: { en: "a soul", ur: "ہر جان", ar: "كُلُّ نَفس" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 4, arabic: "قَدَّمَتْ", transliteration: "qaddamat", root: "ق د م", meaning: { en: "it sent forth", ur: "آگے بھیجا", ar: "أَسلَفَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II" } },
      { position: 5, arabic: "وَأَخَّرَتْ", transliteration: "wa-akhkharat", root: "أ خ ر", meaning: { en: "and left behind", ur: "اور پیچھے چھوڑا", ar: "وَتَرَكَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II" }, advanced: { linguisticMiracle: "Good deeds sent ahead, sins/missed opportunities left behind" } }
    ]
  },

  6: {
    ayahNumber: 6,
    arabic: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
    words: [
      { position: 1, arabic: "يَا أَيُّهَا", transliteration: "yā ayyuhā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammarRole: "vocative" },
      { position: 2, arabic: "الْإِنسَانُ", transliteration: "al-insānu", root: "أ ن س", meaning: { en: "mankind", ur: "انسان", ar: "البَشَر" }, pos: "N", posLabel: "N", grammarRole: "vocative" },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کس چیز نے", ar: "ماذا" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 4, arabic: "غَرَّكَ", transliteration: "gharraka", root: "غ ر ر", meaning: { en: "deceived you", ur: "تجھے دھوکے میں ڈالا", ar: "خَدَعَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { rootFamily: ["غُرور", "غَرّ", "مَغرور"], linguisticMiracle: "What illusion made you forget your Lord?" } },
      { position: 5, arabic: "بِرَبِّكَ", transliteration: "bi-rabbika", meaning: { en: "concerning your Lord", ur: "اپنے رب کے بارے میں", ar: "في رَبِّكَ" }, pos: "PREP+N+PRON", posLabel: "PREP+N+PRON", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "الْكَرِيمِ", transliteration: "al-karīmi", root: "ك ر م", meaning: { en: "the Generous", ur: "کریم", ar: "المُنعِم" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Allah's كَرَم (generosity) should inspire gratitude, not heedlessness" } }
    ]
  },

  7: {
    ayahNumber: 7,
    arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
    words: [
      { position: 1, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammarRole: "relative" },
      { position: 2, arabic: "خَلَقَكَ", transliteration: "khalaqaka", root: "خ ل ق", meaning: { en: "created you", ur: "تجھے پیدا کیا", ar: "أَوجَدَكَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 3, arabic: "فَسَوَّاكَ", transliteration: "fasawwāka", root: "س و ي", meaning: { en: "proportioned you", ur: "تجھے ٹھیک بنایا", ar: "فَعَدَّلَكَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "II" } },
      { position: 4, arabic: "فَعَدَلَكَ", transliteration: "faʿadalaka", root: "ع د ل", meaning: { en: "balanced you", ur: "تجھے متناسب بنایا", ar: "فَوازَنَكَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", advanced: { linguisticMiracle: "Three stages: creation, proportion, balance - perfect design" } }
    ]
  },

  8: {
    ayahNumber: 8,
    arabic: "فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ",
    words: [
      { position: 1, arabic: "فِي", transliteration: "fī", meaning: { en: "In", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 2, arabic: "أَيِّ", transliteration: "ayyi", meaning: { en: "whatever", ur: "جس", ar: "أَيَّ" }, pos: "N", posLabel: "N", grammarRole: "adjective" },
      { position: 3, arabic: "صُورَةٍ", transliteration: "ṣūratin", root: "ص و ر", meaning: { en: "form", ur: "صورت", ar: "شَكلٍ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "مَّا", transliteration: "mā", meaning: { en: "(emphatic)", ur: "(تاکیدی)", ar: "ما" }, pos: "EMPH", posLabel: "EMPH", grammarRole: "emphasis" },
      { position: 5, arabic: "شَاءَ", transliteration: "shā'a", root: "ش ي أ", meaning: { en: "He willed", ur: "چاہا", ar: "أَرادَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 6, arabic: "رَكَّبَكَ", transliteration: "rakkabaka", root: "ر ك ب", meaning: { en: "He assembled you", ur: "تجھے جوڑا", ar: "صَنَعَكَ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object", features: { form: "II" }, advanced: { linguisticMiracle: "Allah chose your form from infinite possibilities" } }
    ]
  },

  9: {
    ayahNumber: 9,
    arabic: "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallā", meaning: { en: "No!", ur: "ہرگز نہیں", ar: "حَقًّا لا" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 2, arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ", ar: "بَل" }, pos: "RET", posLabel: "RET", grammarRole: "retraction" },
      { position: 3, arabic: "تُكَذِّبُونَ", transliteration: "tukadhdhibūna", root: "ك ذ ب", meaning: { en: "you deny", ur: "تم جھٹلاتے ہو", ar: "تَجحَدونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II" } },
      { position: 4, arabic: "بِالدِّينِ", transliteration: "bil-dīni", root: "د ي ن", meaning: { en: "the Recompense", ur: "جزا کو", ar: "بالحِساب" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase", advanced: { linguisticMiracle: "Din here = Judgment/Recompense, not religion" } }
    ]
  },

  10: {
    ayahNumber: 10,
    arabic: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ",
    words: [
      { position: 1, arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بے شک", ar: "وَإِنَّ" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "over you", ur: "تم پر", ar: "عليكُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "لَحَافِظِينَ", transliteration: "laḥāfiẓīna", root: "ح ف ظ", meaning: { en: "surely are guardians", ur: "یقیناً نگہبان ہیں", ar: "لَمُراقِبينَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", features: { pattern: "فَاعِل" }, advanced: { linguisticMiracle: "Recording angels watch constantly" } }
    ]
  },

  11: {
    ayahNumber: 11,
    arabic: "كِرَامًا كَاتِبِينَ",
    words: [
      { position: 1, arabic: "كِرَامًا", transliteration: "kirāman", root: "ك ر م", meaning: { en: "Noble", ur: "معزز", ar: "شُرَفاء" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" },
      { position: 2, arabic: "كَاتِبِينَ", transliteration: "kātibīna", root: "ك ت ب", meaning: { en: "recording", ur: "لکھنے والے", ar: "مُسَجِّلينَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "فَاعِل" }, advanced: { linguisticMiracle: "كِرام كاتِبين - noble scribes, not mere clerks" } }
    ]
  },

  12: {
    ayahNumber: 12,
    arabic: "يَعْلَمُونَ مَا تَفْعَلُونَ",
    words: [
      { position: 1, arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", root: "ع ل م", meaning: { en: "They know", ur: "وہ جانتے ہیں", ar: "يُدرِكونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 3, arabic: "تَفْعَلُونَ", transliteration: "tafʿalūna", root: "ف ع ل", meaning: { en: "you do", ur: "تم کرتے ہو", ar: "تَعمَلونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" }
    ]
  },

  13: {
    ayahNumber: 13,
    arabic: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ",
    words: [
      { position: 1, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إِنَّ" }, pos: "ACC", posLabel: "ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الْأَبْرَارَ", transliteration: "al-abrāra", root: "ب ر ر", meaning: { en: "the righteous", ur: "نیک لوگ", ar: "الصالِحونَ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "لَفِي", transliteration: "lafī", meaning: { en: "will surely be in", ur: "یقیناً ہیں", ar: "لَموجودونَ في" }, pos: "EMPH+PREP", posLabel: "EMPH+PREP", grammarRole: "emphasis + preposition" },
      { position: 4, arabic: "نَعِيمٍ", transliteration: "naʿīmin", root: "ن ع م", meaning: { en: "bliss", ur: "نعمتوں میں", ar: "سَعادَة" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" }
    ]
  },

  14: {
    ayahNumber: 14,
    arabic: "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ",
    words: [
      { position: 1, arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بے شک", ar: "وَإِنَّ" }, pos: "CONJ+ACC", posLabel: "CONJ+ACC", grammarRole: "emphasis" },
      { position: 2, arabic: "الْفُجَّارَ", transliteration: "al-fujjāra", root: "ف ج ر", meaning: { en: "the wicked", ur: "فاجر لوگ", ar: "الفاسِقونَ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "لَفِي", transliteration: "lafī", meaning: { en: "will surely be in", ur: "یقیناً ہیں", ar: "لَموجودونَ في" }, pos: "EMPH+PREP", posLabel: "EMPH+PREP", grammarRole: "emphasis + preposition" },
      { position: 4, arabic: "جَحِيمٍ", transliteration: "jaḥīmin", root: "ج ح م", meaning: { en: "Hellfire", ur: "دوزخ میں", ar: "النار" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" }
    ]
  },

  15: {
    ayahNumber: 15,
    arabic: "يَصْلَوْنَهَا يَوْمَ الدِّينِ",
    words: [
      { position: 1, arabic: "يَصْلَوْنَهَا", transliteration: "yaṣlawnahā", root: "ص ل ي", meaning: { en: "They will burn therein", ur: "وہ اس میں داخل ہوں گے", ar: "يَدخُلونَها" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 2, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "on the Day", ur: "کے دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb of time" },
      { position: 3, arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "of Recompense", ur: "جزا", ar: "الحِساب" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ]
  },

  16: {
    ayahNumber: 16,
    arabic: "وَمَا هُمْ عَنْهَا بِغَائِبِينَ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "ولَن" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ", ar: "هُم" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "عَنْهَا", transliteration: "ʿanhā", meaning: { en: "from it", ur: "اس سے", ar: "مِنها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "بِغَائِبِينَ", transliteration: "bi-ghā'ibīna", root: "غ ي ب", meaning: { en: "absent", ur: "غائب ہونے والے", ar: "مُنفَكّينَ" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", advanced: { linguisticMiracle: "No escape, no absence - permanent presence in Fire" } }
    ]
  },

  17: {
    ayahNumber: 17,
    arabic: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "CONJ+INT", posLabel: "CONJ+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "أَدْرَاكَ", transliteration: "adrāka", root: "د ر ي", meaning: { en: "can make you know", ur: "تجھے سمجھائے", ar: "أَعلَمَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا ہے", ar: "ما" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 4, arabic: "يَوْمُ", transliteration: "yawmu", meaning: { en: "the Day", ur: "دن", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 5, arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "of Recompense", ur: "جزا کا", ar: "الحِساب" }, pos: "N", posLabel: "N", grammarRole: "possessive" }
    ]
  },

  18: {
    ayahNumber: 18,
    arabic: "ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ",
    words: [
      { position: 1, arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Again", ur: "پھر", ar: "ثُمَّ" }, pos: "CONJ", posLabel: "CONJ", grammarRole: "emphasis" },
      { position: 2, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا", ar: "ماذا" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 3, arabic: "أَدْرَاكَ", transliteration: "adrāka", meaning: { en: "can make you know", ur: "تجھے سمجھائے", ar: "أَعلَمَكَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا ہے", ar: "ما" }, pos: "INT", posLabel: "INT", grammarRole: "interrogative" },
      { position: 5, arabic: "يَوْمُ", transliteration: "yawmu", meaning: { en: "the Day", ur: "دن", ar: "يَوم" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 6, arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "of Recompense", ur: "جزا کا", ar: "الحِساب" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Repeated for emphasis - truly incomprehensible day" } }
    ]
  },

  19: {
    ayahNumber: 19,
    arabic: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا ۖ وَالْأَمْرُ يَوْمَئِذٍ لِّلَّهِ",
    words: [
      { position: 1, arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "Day", ur: "جس دن", ar: "يَومَ" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 2, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 3, arabic: "تَمْلِكُ", transliteration: "tamliku", root: "م ل ك", meaning: { en: "will possess", ur: "اختیار رکھے گی", ar: "تَستَطيعُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 4, arabic: "نَفْسٌ", transliteration: "nafsun", meaning: { en: "a soul", ur: "کوئی جان", ar: "نَفسٌ" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 5, arabic: "لِّنَفْسٍ", transliteration: "li-nafsin", meaning: { en: "for another soul", ur: "کسی جان کے لیے", ar: "لِنَفسٍ أُخرى" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 6, arabic: "شَيْئًا", transliteration: "shay'an", meaning: { en: "anything", ur: "کچھ بھی", ar: "أَيَّ شَيء" }, pos: "N", posLabel: "N", grammarRole: "object" },
      { position: 7, arabic: "وَالْأَمْرُ", transliteration: "wal-amru", root: "أ م ر", meaning: { en: "And the command", ur: "اور حکم", ar: "والأَمر" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 8, arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: { en: "that Day", ur: "اس دن", ar: "في ذلِكَ اليَوم" }, pos: "N", posLabel: "N", grammarRole: "adverb" },
      { position: 9, arabic: "لِّلَّهِ", transliteration: "lillāhi", meaning: { en: "belongs to Allah", ur: "اللہ کا ہے", ar: "لِلَّهِ وَحدَهُ" }, pos: "PREP+PN", posLabel: "PREP+PN", grammarRole: "predicate", advanced: { linguisticMiracle: "Complete sovereignty - no intercessors without permission" } }
    ]
  }
};

export default TREEBANK_DATA;
