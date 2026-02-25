/**
 * Surah Al-Fajr (89) - Quranic Arabic Treebank Data
 * The Dawn
 * Total Ayahs: 30
 * Revelation: Makki
 * Theme: Destroyed nations, human nature tested by wealth, the Day of Judgment, and the satisfied soul
 */

export const TREEBANK_DATA = {
  surahId: 89,
  surahName: "Al-Fajr",
  surahNameArabic: "الفجر",
  totalAyahs: 30,
  totalWords: 139,
  revelationType: "Makki",
  theme: "Divine oaths, lessons from destroyed nations (Aad, Thamud, Pharaoh), human response to tests of wealth, the Day of Reckoning, and the ultimate peace of the satisfied soul",

  1: {
    ayahNumber: 1,
    arabic: "وَالْفَجْرِ",
    words: [
      {
        position: 1,
        arabic: "وَالْفَجْرِ",
        transliteration: "Wal-fajr",
        root: "ف ج ر",
        lemma: "فَجْر",
        posTag: "N", posLabel: "N",
        meaning: { en: "By the dawn", ur: "قسم ہے فجر کی", hi: "क़सम है फ़ज्र की", ar: "قَسَمٌ بِالْفَجْر" },
        grammarRole: "oath_particle_noun",
        advanced: { rootFamily: ["فجر (dawn)", "انفجار (explosion)", "فجور (wickedness)"], frequency: "6 times" }
      }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَلَيَالٍ عَشْرٍ",
    words: [
      {
        position: 1,
        arabic: "وَلَيَالٍ",
        transliteration: "wa-layaalin",
        root: "ل ي ل",
        lemma: "لَيْل",
        posTag: "N", posLabel: "N",
        meaning: { en: "And ten nights", ur: "اور دس راتوں کی", hi: "और दस रातों की", ar: "وَاللَّيَالِي" },
        grammarRole: "oath_particle_noun"
      },
      {
        position: 2,
        arabic: "عَشْرٍ",
        transliteration: "'ashrin",
        root: "ع ش ر",
        lemma: "عَشْر",
        posTag: "NUM", posLabel: "NUM",
        meaning: { en: "ten", ur: "دس", hi: "दस", ar: "عَشَرَة" },
        advanced: { linguisticMiracle: "Refers to first ten of Dhul-Hijjah - most sacred nights" }
      }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "موصوف + صفت" }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    arabic: "وَالشَّفْعِ وَالْوَتْرِ",
    words: [
      {
        position: 1,
        arabic: "وَالشَّفْعِ",
        transliteration: "wash-shaf'i",
        root: "ش ف ع",
        lemma: "شَفْع",
        posTag: "N", posLabel: "N",
        meaning: { en: "And the even", ur: "اور جفت", hi: "और जोड़े", ar: "الزَّوْج" },
        advanced: { rootFamily: ["شفاعة (intercession)", "شفيع (intercessor)"], linguisticMiracle: "Even numbers or Day of Sacrifice" }
      },
      {
        position: 2,
        arabic: "وَالْوَتْرِ",
        transliteration: "wal-watri",
        root: "و ت ر",
        lemma: "وَتْر",
        posTag: "N", posLabel: "N",
        meaning: { en: "and the odd", ur: "اور طاق", hi: "और विषम", ar: "الْفَرْد" },
        advanced: { rootFamily: ["وتر (odd/single)", "وتر (string)"], linguisticMiracle: "Odd number or Day of Arafah, or Allah (The One)" }
      }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "عطف" }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    arabic: "وَاللَّيْلِ إِذَا يَسْرِ",
    words: [
      {
        position: 1,
        arabic: "وَاللَّيْلِ",
        transliteration: "wal-layli",
        root: "ل ي ل",
        lemma: "لَيْل",
        posTag: "N", posLabel: "N",
        meaning: { en: "And the night", ur: "اور رات کی", hi: "और रात की", ar: "قَسَمٌ بِاللَّيْل" }
      },
      {
        position: 2,
        arabic: "إِذَا",
        transliteration: "idhaa",
        posTag: "COND", posLabel: "COND",
        meaning: { en: "when", ur: "جب", hi: "जब", ar: "حِينَ" }
      },
      {
        position: 3,
        arabic: "يَسْرِ",
        transliteration: "yasri",
        root: "س ر ي",
        lemma: "سَرَى",
        posTag: "V", posLabel: "V",
        meaning: { en: "it passes/departs", ur: "گزرے", hi: "गुज़रे", ar: "يَمْضِي" },
        advanced: { verbForm: "I - سَرَى (to travel by night)", linguisticMiracle: "Night 'traveling' - passing away into dawn" }
      }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: "فعل + فاعل" },
        { from: 1, to: 2, label: "حال" }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    arabic: "هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ",
    words: [
      {
        position: 1,
        arabic: "هَلْ",
        transliteration: "hal",
        posTag: "INT", posLabel: "INT",
        meaning: { en: "Is there", ur: "کیا", hi: "क्या", ar: "أَلَيْسَ" }
      },
      {
        position: 2,
        arabic: "فِي ذَٰلِكَ",
        transliteration: "fee dhaalika",
        meaning: { en: "in that", ur: "اس میں", hi: "इसमें", ar: "فِي ذَٰلِكَ" }
      },
      {
        position: 3,
        arabic: "قَسَمٌ",
        transliteration: "qasamun",
        root: "ق س م",
        lemma: "قَسَم",
        posTag: "N", posLabel: "N",
        meaning: { en: "an oath", ur: "قسم", hi: "क़सम", ar: "يَمِين" }
      },
      {
        position: 4,
        arabic: "لِّذِي حِجْرٍ",
        transliteration: "li-dhee hijrin",
        root: "ح ج ر",
        lemma: "حِجْر",
        posTag: "N", posLabel: "N",
        meaning: { en: "for one of understanding", ur: "عقلمند کے لیے", hi: "अक़्लमंद के लिए", ar: "لِصَاحِب عَقْل" },
        advanced: { rootFamily: ["حجر (stone/restraint)", "محجور (prohibited)"], linguisticMiracle: "Hijr = intellect that restrains from foolishness" }
      }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: "جار + مجرور" },
        { from: 3, to: 4, label: "جار + مجرور" }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ",
    words: [
      { position: 1, arabic: "أَلَمْ تَرَ", transliteration: "a-lam tara", meaning: { en: "Have you not seen", ur: "کیا تم نے نہیں دیکھا", ar: "أَلَمْ تَعْلَم" } },
      { position: 2, arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "کیسے", ar: "كَيْفَ" } },
      { position: 3, arabic: "فَعَلَ", transliteration: "fa'ala", root: "ف ع ل", meaning: { en: "dealt", ur: "کیا", ar: "صَنَعَ" } },
      { position: 4, arabic: "رَبُّكَ", transliteration: "rabbuka", meaning: { en: "your Lord", ur: "تیرے رب نے", ar: "مَالِكُكَ" } },
      { position: 5, arabic: "بِعَادٍ", transliteration: "bi-'aadin", meaning: { en: "with Aad", ur: "عاد کے ساتھ", ar: "قَوْم عَاد" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: "فعل + مفعول به" },
        { from: 3, to: 4, label: "فعل + فاعل" },
        { from: 3, to: 5, label: "جار + مجرور" }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    arabic: "إِرَمَ ذَاتِ الْعِمَادِ",
    words: [
      { position: 1, arabic: "إِرَمَ", transliteration: "Irama", meaning: { en: "Iram (city)", ur: "ارم", ar: "مَدِينَة إِرَم" } },
      { position: 2, arabic: "ذَاتِ الْعِمَادِ", transliteration: "dhaatil-'imaad", root: "ع م د", meaning: { en: "of lofty pillars", ur: "بلند ستونوں والی", ar: "صَاحِبَة الْأَعْمِدَة" },
        advanced: { linguisticMiracle: "'Imaad = tall pillars/columns, indicating architectural grandeur" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "مضاف + مضاف إليه" }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    arabic: "الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ",
    words: [
      { position: 1, arabic: "الَّتِي لَمْ يُخْلَقْ", transliteration: "allatee lam yukhlaq", meaning: { en: "the like of which was not created", ur: "جس جیسی نہیں بنائی گئی", ar: "لَمْ تُصْنَع مِثْلُهَا" } },
      { position: 2, arabic: "مِثْلُهَا", transliteration: "mithluha", meaning: { en: "its like", ur: "اس جیسی", ar: "شَبِيهُهَا" } },
      { position: 3, arabic: "فِي الْبِلَادِ", transliteration: "fil-bilaad", meaning: { en: "in the lands", ur: "ملکوں میں", ar: "فِي الْأَرْض" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "موصول + صلة" },
        { from: 1, to: 3, label: "جار + مجرور" }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    arabic: "وَثَمُودَ الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ",
    words: [
      { position: 1, arabic: "وَثَمُودَ", transliteration: "wa-Thamooda", meaning: { en: "And Thamud", ur: "اور ثمود", ar: "قَوْم ثَمُود" } },
      { position: 2, arabic: "الَّذِينَ جَابُوا", transliteration: "alladheena jaaboo", root: "ج و ب", meaning: { en: "who carved", ur: "جنہوں نے کاٹے", ar: "قَطَعُوا" } },
      { position: 3, arabic: "الصَّخْرَ", transliteration: "as-sakhra", meaning: { en: "the rocks", ur: "چٹانیں", ar: "الْحِجَارَة" } },
      { position: 4, arabic: "بِالْوَادِ", transliteration: "bil-waad", meaning: { en: "in the valley", ur: "وادی میں", ar: "فِي الْوَادِي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "موصول + صلة" },
        { from: 2, to: 3, label: "فعل + مفعول به" },
        { from: 2, to: 4, label: "جار + مجرور" }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    arabic: "وَفِرْعَوْنَ ذِي الْأَوْتَادِ",
    words: [
      { position: 1, arabic: "وَفِرْعَوْنَ", transliteration: "wa-Fir'awna", meaning: { en: "And Pharaoh", ur: "اور فرعون", ar: "مَلِك مِصْر" } },
      { position: 2, arabic: "ذِي الْأَوْتَادِ", transliteration: "dhil-awtaad", root: "و ت د", meaning: { en: "owner of stakes", ur: "میخوں والا", ar: "صَاحِب الْأَوْتَاد" },
        advanced: { linguisticMiracle: "Awtaad = stakes/pegs - pyramids, or stakes for torture, or military might" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "مضاف + مضاف إليه" }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    arabic: "الَّذِينَ طَغَوْا فِي الْبِلَادِ",
    words: [
      { position: 1, arabic: "الَّذِينَ طَغَوْا", transliteration: "alladheena taghaw", root: "ط غ و", meaning: { en: "who transgressed", ur: "جنہوں نے سرکشی کی", ar: "تَجَاوَزُوا الْحَدّ" } },
      { position: 2, arabic: "فِي الْبِلَادِ", transliteration: "fil-bilaad", meaning: { en: "in the lands", ur: "ملکوں میں", ar: "فِي الْأَرْض" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "جار + مجرور" }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    arabic: "فَأَكْثَرُوا فِيهَا الْفَسَادَ",
    words: [
      { position: 1, arabic: "فَأَكْثَرُوا", transliteration: "fa-aktharoo", root: "ك ث ر", meaning: { en: "And increased", ur: "پھر کثرت سے پھیلایا", ar: "زَادُوا" } },
      { position: 2, arabic: "فِيهَا الْفَسَادَ", transliteration: "feehaal-fasaad", root: "ف س د", meaning: { en: "therein corruption", ur: "اس میں فساد", ar: "الْإِفْسَاد" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "فعل + مفعول به" }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    arabic: "فَصَبَّ عَلَيْهِمْ رَبُّكَ سَوْطَ عَذَابٍ",
    words: [
      { position: 1, arabic: "فَصَبَّ", transliteration: "fa-sabba", root: "ص ب ب", meaning: { en: "So poured", ur: "پس انڈیل دیا", ar: "أَنْزَلَ" } },
      { position: 2, arabic: "عَلَيْهِمْ رَبُّكَ", transliteration: "'alayhim rabbuka", meaning: { en: "upon them your Lord", ur: "ان پر تیرے رب نے", ar: "عَلَيْهِم مَالِكُكَ" } },
      { position: 3, arabic: "سَوْطَ عَذَابٍ", transliteration: "sawta 'adhaab", root: "س و ط", meaning: { en: "a scourge of punishment", ur: "عذاب کا کوڑا", ar: "ضَرْبَة عَذَاب" },
        advanced: { linguisticMiracle: "Sawt = whip. Punishment 'poured' like rain, striking like a whip" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "فعل + فاعل" },
        { from: 1, to: 3, label: "فعل + مفعول به" }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    arabic: "إِنَّ رَبَّكَ لَبِالْمِرْصَادِ",
    words: [
      { position: 1, arabic: "إِنَّ رَبَّكَ", transliteration: "inna rabbaka", meaning: { en: "Indeed your Lord", ur: "بیشک تیرا رب", ar: "إِنَّ مَالِكَكَ" } },
      { position: 2, arabic: "لَبِالْمِرْصَادِ", transliteration: "la-bil-mirsaad", root: "ر ص د", meaning: { en: "is in observation", ur: "گھات میں ہے", ar: "يَرْقُب وَيَنْتَظِر" },
        advanced: { rootFamily: ["رصد (to observe)", "مرصاد (observation post)", "راصد (observer)"], linguisticMiracle: "Mirsaad = watchtower/ambush point. Allah watches and waits to recompense" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "مبتدأ + خبر" }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    arabic: "فَأَمَّا الْإِنسَانُ إِذَا مَا ابْتَلَاهُ رَبُّهُ فَأَكْرَمَهُ وَنَعَّمَهُ فَيَقُولُ رَبِّي أَكْرَمَنِ",
    words: [
      { position: 1, arabic: "فَأَمَّا الْإِنسَانُ", transliteration: "fa-ammal-insaanu", meaning: { en: "As for man, when", ur: "پس جہاں تک انسان", ar: "أَمَّا الْبَشَر" } },
      { position: 2, arabic: "إِذَا مَا ابْتَلَاهُ", transliteration: "idhaa mab-talaahu", root: "ب ل و", meaning: { en: "his Lord tests him", ur: "جب اسے آزمائے", ar: "اخْتَبَرَهُ" } },
      { position: 3, arabic: "فَأَكْرَمَهُ وَنَعَّمَهُ", transliteration: "fa-akramahu wa na''amahu", meaning: { en: "by honoring and blessing him", ur: "عزت اور نعمت دے کر", ar: "أَعْطَاهُ النِّعَم" } },
      { position: 4, arabic: "فَيَقُولُ رَبِّي أَكْرَمَنِ", transliteration: "fa-yaqoolu rabbee akraman", meaning: { en: "he says: My Lord has honored me", ur: "کہتا ہے: میرے رب نے مجھے عزت دی", ar: "رَبِّي فَضَّلَنِي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "حال" },
        { from: 2, to: 3, label: "عطف" },
        { from: 1, to: 4, label: "مبتدأ + خبر" }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    arabic: "وَأَمَّا إِذَا مَا ابْتَلَاهُ فَقَدَرَ عَلَيْهِ رِزْقَهُ فَيَقُولُ رَبِّي أَهَانَنِ",
    words: [
      { position: 1, arabic: "وَأَمَّا إِذَا مَا ابْتَلَاهُ", transliteration: "wa-ammaa idhaa mab-talaahu", meaning: { en: "But when He tests him", ur: "اور جب آزمائے", ar: "وَإِذَا اخْتَبَرَهُ" } },
      { position: 2, arabic: "فَقَدَرَ عَلَيْهِ رِزْقَهُ", transliteration: "fa-qadara 'alayhi rizqahu", meaning: { en: "by restricting his provision", ur: "اس کا رزق تنگ کر کے", ar: "ضَيَّقَ رِزْقَهُ" } },
      { position: 3, arabic: "فَيَقُولُ رَبِّي أَهَانَنِ", transliteration: "fa-yaqoolu rabbee ahaanan", root: "ه و ن", meaning: { en: "he says: My Lord has humiliated me", ur: "کہتا ہے: میرے رب نے مجھے ذلیل کیا", ar: "رَبِّي أَذَلَّنِي" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "عطف" },
        { from: 1, to: 3, label: "مبتدأ + خبر" }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    arabic: "كَلَّا ۖ بَل لَّا تُكْرِمُونَ الْيَتِيمَ",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallaa", meaning: { en: "No! But", ur: "ہرگز نہیں", ar: "لَيْسَ كَذَلِكَ" } },
      { position: 2, arabic: "بَل لَّا تُكْرِمُونَ", transliteration: "bal laa tukrimoona", meaning: { en: "rather you do not honor", ur: "بلکہ تم عزت نہیں دیتے", ar: "بَلْ لَا تُعَظِّمُون" } },
      { position: 3, arabic: "الْيَتِيمَ", transliteration: "al-yateem", meaning: { en: "the orphan", ur: "یتیم کی", ar: "فَاقِد الْأَب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "نفی + فعل" },
        { from: 2, to: 3, label: "فعل + مفعول به" }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    arabic: "وَلَا تَحَاضُّونَ عَلَىٰ طَعَامِ الْمِسْكِينِ",
    words: [
      { position: 1, arabic: "وَلَا تَحَاضُّونَ", transliteration: "wa-laa tahaaddoona", root: "ح ض ض", meaning: { en: "And you do not encourage", ur: "اور ترغیب نہیں دیتے", ar: "لَا تَحُثُّون" },
        advanced: { verbForm: "VI - تَحَاضُّ (to encourage one another)", linguisticMiracle: "Mutual encouragement - not just feeding but urging others to feed" } },
      { position: 2, arabic: "عَلَىٰ طَعَامِ الْمِسْكِينِ", transliteration: "'alaa ta'aamil-miskeen", meaning: { en: "feeding the poor", ur: "مسکین کو کھلانے پر", ar: "إِطْعَام الْفَقِير" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "جار + مجرور" }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    arabic: "وَتَأْكُلُونَ التُّرَاثَ أَكْلًا لَّمًّا",
    words: [
      { position: 1, arabic: "وَتَأْكُلُونَ", transliteration: "wa-ta'kuloona", meaning: { en: "And you consume", ur: "اور تم کھاتے ہو", ar: "تَسْتَهْلِكُون" } },
      { position: 2, arabic: "التُّرَاثَ", transliteration: "at-turaath", root: "و ر ث", meaning: { en: "inheritance", ur: "میراث", ar: "الْمِيرَاث" } },
      { position: 3, arabic: "أَكْلًا لَّمًّا", transliteration: "aklan lamma", meaning: { en: "devouring greedily", ur: "سمیٹ سمیٹ کر", ar: "أَكْلًا شَدِيدًا" },
        advanced: { linguisticMiracle: "Lamm = gathering everything together. Greedy consumption, taking others' shares" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "فعل + مفعول به" },
        { from: 1, to: 3, label: "موصوف + صفت" }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    arabic: "وَتُحِبُّونَ الْمَالَ حُبًّا جَمًّا",
    words: [
      { position: 1, arabic: "وَتُحِبُّونَ الْمَالَ", transliteration: "wa-tuhibboonal-maal", meaning: { en: "And you love wealth", ur: "اور تم مال سے محبت کرتے ہو", ar: "تَعْشَقُون الثَّرْوَة" } },
      { position: 2, arabic: "حُبًّا جَمًّا", transliteration: "hubban jamma", meaning: { en: "with immense love", ur: "بہت زیادہ محبت", ar: "حُبًّا شَدِيدًا" },
        advanced: { linguisticMiracle: "Jamm = excessive, abundant. Love of wealth is excessive, overwhelming" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "موصوف + صفت" }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    arabic: "كَلَّا إِذَا دُكَّتِ الْأَرْضُ دَكًّا دَكًّا",
    words: [
      { position: 1, arabic: "كَلَّا", transliteration: "kallaa", meaning: { en: "No! When", ur: "ہرگز نہیں! جب", ar: "لَيْسَ كَذَلِكَ" } },
      { position: 2, arabic: "إِذَا دُكَّتِ الْأَرْضُ", transliteration: "idhaa dukkatil-ard", root: "د ك ك", meaning: { en: "the earth is leveled", ur: "زمین کوٹی جائے", ar: "سُوِّيَت الْأَرْض" } },
      { position: 3, arabic: "دَكًّا دَكًّا", transliteration: "dakkan dakka", meaning: { en: "pounding upon pounding", ur: "کوٹ کوٹ کر", ar: "دَكًّا شَدِيدًا" },
        advanced: { linguisticMiracle: "Repetition intensifies: completely, utterly crushed flat" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "نفی + فعل" },
        { from: 2, to: 3, label: "توکید" }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    arabic: "وَجَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا",
    words: [
      { position: 1, arabic: "وَجَاءَ رَبُّكَ", transliteration: "wa-jaa'a rabbuka", meaning: { en: "And your Lord comes", ur: "اور تیرا رب آئے", ar: "وَأَتَى مَالِكُكَ" } },
      { position: 2, arabic: "وَالْمَلَكُ", transliteration: "wal-malak", meaning: { en: "and the angels", ur: "اور فرشتے", ar: "وَالْمَلَائِكَة" } },
      { position: 3, arabic: "صَفًّا صَفًّا", transliteration: "saffan saffa", meaning: { en: "row upon row", ur: "صف در صف", ar: "صُفُوفًا مُرَتَّبَة" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "عطف" },
        { from: 2, to: 3, label: "حال" }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    arabic: "وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ ۚ يَوْمَئِذٍ يَتَذَكَّرُ الْإِنسَانُ وَأَنَّىٰ لَهُ الذِّكْرَىٰ",
    words: [
      { position: 1, arabic: "وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ", transliteration: "wa-jee'a yawma'idhin bi-jahannama", meaning: { en: "And Hell is brought that Day", ur: "اور اس دن جہنم لائی جائے گی", ar: "وَأُحْضِرَت جَهَنَّم" } },
      { position: 2, arabic: "يَوْمَئِذٍ يَتَذَكَّرُ الْإِنسَانُ", transliteration: "yawma'idhin yatadhakkarul-insaan", meaning: { en: "that Day man will remember", ur: "اس دن انسان یاد کرے گا", ar: "يَتَذَكَّر الْبَشَر" } },
      { position: 3, arabic: "وَأَنَّىٰ لَهُ الذِّكْرَىٰ", transliteration: "wa-annaa lahudh-dhikraa", meaning: { en: "but how will remembrance benefit him?", ur: "اب یاد کا کیا فائدہ", ar: "وَكَيْفَ تَنْفَعُهُ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "عطف" },
        { from: 2, to: 3, label: "عطف" }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    arabic: "يَقُولُ يَا لَيْتَنِي قَدَّمْتُ لِحَيَاتِي",
    words: [
      { position: 1, arabic: "يَقُولُ يَا لَيْتَنِي", transliteration: "yaqoolu yaa laytanee", meaning: { en: "He will say: I wish I had", ur: "وہ کہے گا: کاش میں نے", ar: "يَتَمَنَّى أَنَّهُ" } },
      { position: 2, arabic: "قَدَّمْتُ لِحَيَاتِي", transliteration: "qaddamtu li-hayaatee", meaning: { en: "sent ahead for my life", ur: "اپنی زندگی کے لیے آگے بھیجا ہوتا", ar: "عَمِلْتُ لِآخِرَتِي" },
        advanced: { linguisticMiracle: "The real 'life' is the Hereafter - he neglected preparing for it" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "فعل + مفعول به" }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    arabic: "فَيَوْمَئِذٍ لَّا يُعَذِّبُ عَذَابَهُ أَحَدٌ",
    words: [
      { position: 1, arabic: "فَيَوْمَئِذٍ", transliteration: "fa-yawma'idhin", meaning: { en: "So that Day", ur: "پس اس دن", ar: "فَفِي ذَلِكَ الْيَوْم" } },
      { position: 2, arabic: "لَّا يُعَذِّبُ عَذَابَهُ أَحَدٌ", transliteration: "laa yu'adhdhibu 'adhaabahu ahad", meaning: { en: "none will punish like His punishment", ur: "کوئی اس جیسا عذاب نہیں دے گا", ar: "لَا أَحَدَ يُعَذِّب مِثْلَهُ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "نفی + فعل" }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    arabic: "وَلَا يُوثِقُ وَثَاقَهُ أَحَدٌ",
    words: [
      { position: 1, arabic: "وَلَا يُوثِقُ وَثَاقَهُ أَحَدٌ", transliteration: "wa-laa yoothiqu wathaaqahu ahad", root: "و ث ق", meaning: { en: "And none will bind like His binding", ur: "اور کوئی اس طرح نہیں باندھے گا", ar: "لَا أَحَدَ يَرْبِط مِثْلَهُ" },
        advanced: { linguisticMiracle: "Wathaaq = binding with chains. Ultimate, inescapable confinement" } }
    ],
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
  },

  27: {
    ayahNumber: 27,
    arabic: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ",
    words: [
      { position: 1, arabic: "يَا أَيَّتُهَا", transliteration: "yaa ayyatuha", meaning: { en: "O you", ur: "اے", ar: "يَا" } },
      { position: 2, arabic: "النَّفْسُ الْمُطْمَئِنَّةُ", transliteration: "an-nafsul-mutma'innah", root: "ط م أ ن", meaning: { en: "the satisfied soul", ur: "مطمئن نفس", ar: "الرُّوح الْمُسْتَقِرَّة" },
        advanced: { rootFamily: ["طمأنينة (tranquility)", "مطمئن (tranquil)", "اطمأن (to be at peace)"], linguisticMiracle: "The nafs at complete peace - no anxiety, doubt, or fear. Ultimate spiritual achievement" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "موصوف + صفت" }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    arabic: "ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً",
    words: [
      { position: 1, arabic: "ارْجِعِي إِلَىٰ رَبِّكِ", transliteration: "irji'ee ilaa rabbiki", meaning: { en: "Return to your Lord", ur: "اپنے رب کی طرف لوٹ", ar: "عُودِي إِلَى مَالِكِكِ" } },
      { position: 2, arabic: "رَاضِيَةً", transliteration: "raadiyatan", root: "ر ض ي", meaning: { en: "well-pleased", ur: "راضی ہو کر", ar: "مَسْرُورَة" } },
      { position: 3, arabic: "مَّرْضِيَّةً", transliteration: "mardiyyatan", meaning: { en: "and pleasing (to Him)", ur: "اور (اللہ) راضی", ar: "مَقْبُولَة" },
        advanced: { linguisticMiracle: "Mutual pleasure: the soul is pleased with Allah, AND Allah is pleased with the soul" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "حال" },
        { from: 2, to: 3, label: "عطف" }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    arabic: "فَادْخُلِي فِي عِبَادِي",
    words: [
      { position: 1, arabic: "فَادْخُلِي", transliteration: "fadkhulee", meaning: { en: "So enter", ur: "پس داخل ہو جا", ar: "اُدْخُلِي" } },
      { position: 2, arabic: "فِي عِبَادِي", transliteration: "fee 'ibaadee", meaning: { en: "among My servants", ur: "میرے بندوں میں", ar: "مَعَ عِبَادِي الصَّالِحِين" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "جار + مجرور" }
      ]
    }
  },

  30: {
    ayahNumber: 30,
    arabic: "وَادْخُلِي جَنَّتِي",
    words: [
      { position: 1, arabic: "وَادْخُلِي", transliteration: "wadkhulee", meaning: { en: "And enter", ur: "اور داخل ہو جا", ar: "وَاُدْخُلِي" } },
      { position: 2, arabic: "جَنَّتِي", transliteration: "jannatee", meaning: { en: "My Paradise", ur: "میری جنت میں", ar: "فِرْدَوْسِي" },
        advanced: { linguisticMiracle: "Jannatee - MY Paradise. Personal invitation from Allah Himself" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: "فعل + مفعول به" }
      ]
    }
  }
};

export default TREEBANK_DATA;
