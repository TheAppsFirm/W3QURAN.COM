/**
 * Surah Al-Ma'un (107) - The Small Kindnesses
 * Complete Quranic Arabic Treebank
 * 7 Ayahs - Makki/Madani (disputed)
 * Theme: Condemning those who deny religion and neglect social duties
 */

export const TREEBANK_DATA = {
  surahId: 107,
  surahName: "Al-Ma'un",
  surahNameArabic: "الماعون",
  totalAyahs: 7,
  totalWords: 25,
  theme: "Social responsibility and religious hypocrisy",

  translation: {
    en: "Have you seen the one who denies the Recompense? For that is the one who drives away the orphan. And does not encourage the feeding of the poor. So woe to those who pray, [But] who are heedless of their prayer - Those who make show [of their deeds]. And withhold [simple] assistance.",
    ur: "کیا آپ نے اس شخص کو دیکھا جو دین کو جھٹلاتا ہے؟ یہ وہی ہے جو یتیم کو دھکے دیتا ہے۔ اور مسکین کو کھانا کھلانے کی ترغیب نہیں دیتا۔ پس ہلاکت ہے ان نمازیوں کے لیے۔ جو اپنی نماز سے غافل ہیں۔ جو دکھاوا کرتے ہیں۔ اور معمولی ضرورت کی چیزیں بھی نہیں دیتے۔",
    hi: "क्या तुमने उसे देखा जो प्रतिफल (क़यामत) को झुठलाता है? यही वह है जो अनाथ को धक्के देता है। और मिसकीन को खिलाने की प्रेरणा नहीं देता। तो विनाश है उन नमाज़ियों के लिए। जो अपनी नमाज़ से ग़ाफ़िल हैं। जो दिखावा करते हैं। और मामूली चीज़ें भी नहीं देते।",
    bn: "তুমি কি তাকে দেখেছ যে প্রতিদান দিবসকে মিথ্যা মনে করে? এ সেই ব্যক্তি যে এতিমকে ধাক্কা দিয়ে তাড়িয়ে দেয়। এবং মিসকিনকে খাওয়ানোর প্রেরণা দেয় না। অতএব সেই নামাযীদের জন্য দুর্ভোগ। যারা তাদের নামাযে অমনোযোগী। যারা লোক দেখানো কাজ করে। এবং সামান্য সাহায্যও করে না।",
    tr: "Dini yalanlayanı gördün mü? İşte yetimi itip kakan odur. Yoksulu doyurmaya teşvik etmez. Yazıklar olsun o namaz kılanlara. Ki onlar namazlarından gafildirler. Onlar gösteriş yapanlardır. Ve basit yardımı bile esirgerler.",
    id: "Tahukah kamu orang yang mendustakan agama? Itulah orang yang menghardik anak yatim. Dan tidak menganjurkan memberi makan orang miskin. Maka kecelakaanlah bagi orang-orang yang shalat. Yang lalai dari shalatnya. Yang berbuat riya. Dan enggan menolong dengan barang berguna."
  },

  1: {
    ayahNumber: 1,
    arabic: "أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ",
    translation: {
      en: "Have you seen the one who denies the Recompense?",
      ur: "کیا آپ نے اس شخص کو دیکھا جو دین کو جھٹلاتا ہے؟",
      hi: "क्या तुमने उसे देखा जो प्रतिफल को झुठलाता है?",
      bn: "তুমি কি তাকে দেখেছ যে প্রতিদান দিবসকে মিথ্যা মনে করে?",
      tr: "Dini yalanlayanı gördün mü?",
      id: "Tahukah kamu orang yang mendustakan agama?"
    },
    words: [
      {
        position: 1,
        arabic: "أَرَءَيْتَ",
        transliteration: "ara'ayta",
        root: "ر أ ي",
        lemma: "رَأَىٰ",
        posTag: "V",
        meaning: {
          en: "Have you seen",
          ur: "کیا آپ نے دیکھا",
          hi: "क्या तुमने देखा",
          bn: "তুমি কি দেখেছ",
          tr: "Gördün mü",
          id: "Tahukah kamu",
          ar: "هل علمتَ وتأملتَ"
        },
        grammarRole: "interrogative + verb",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "2nd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "I"
        },
        grammarExplanations: {
          en: "Rhetorical question (أَرَأَيْتَ) - a powerful opening that invites reflection",
          ur: "استفہام انکاری - تعجب اور تنبیہ کے لیے"
        },
        advanced: {
          rhetoricalDevice: "Rhetorical question to draw attention",
          frequency: 13,
          linguisticMiracle: "This phrase appears 13 times in Quran, always introducing something noteworthy",
          tajweedTips: "Hamza followed by ra - pronounce clearly with slight pause",
          memoryHook: "أَرَأَيْتَ = 'Have you REALIZED' - invites deeper understanding"
        }
      },
      {
        position: 2,
        arabic: "ٱلَّذِى",
        transliteration: "alladhee",
        root: "ل ذ ي",
        lemma: "ٱلَّذِى",
        posTag: "REL",
        meaning: {
          en: "the one who",
          ur: "اس شخص کو جو",
          hi: "उसे जो",
          bn: "যে ব্যক্তি",
          tr: "o kimse ki",
          id: "orang yang",
          ar: "الشخص الذي"
        },
        grammarRole: "relative pronoun",
        case: "N/A",
        features: {
          gender: "masculine",
          number: "singular"
        }
      },
      {
        position: 3,
        arabic: "يُكَذِّبُ",
        transliteration: "yukadhdhibu",
        root: "ك ذ ب",
        lemma: "كَذَّبَ",
        posTag: "V",
        meaning: {
          en: "denies/belies",
          ur: "جھٹلاتا ہے",
          hi: "झुठलाता है",
          bn: "মিথ্যা মনে করে",
          tr: "yalanlar",
          id: "mendustakan",
          ar: "يُنكر ويرفض"
        },
        grammarRole: "verb (main predicate)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "II",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "Form II (تَفْعِيل) - intensive/repeated action; persistent denial",
          ur: "باب تفعیل - مبالغہ کے لیے، بار بار جھٹلانا"
        },
        advanced: {
          rootFamily: ["كَذَّابٌ (great liar)", "تَكْذِيب (denial)", "كِذْب (lie)"],
          frequency: 176,
          balagha: "Form II indicates repeated, deliberate denial",
          verbConjugation: {
            past: "كَذَّبَ",
            present: "يُكَذِّبُ",
            imperative: "كَذِّبْ",
            verbalNoun: "تَكْذِيب"
          }
        }
      },
      {
        position: 4,
        arabic: "بِٱلدِّينِ",
        transliteration: "bid-deen",
        root: "د ي ن",
        lemma: "دِين",
        posTag: "N",
        meaning: {
          en: "the Recompense/Religion",
          ur: "دین / جزا کے دن",
          hi: "प्रतिफल/धर्म",
          bn: "প্রতিদান/ধর্ম",
          tr: "din/ceza",
          id: "agama/pembalasan",
          ar: "يوم الجزاء والحساب"
        },
        grammarRole: "prepositional phrase (object of verb)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "الدِّين here means Day of Judgment (يوم الدين), not just religion",
          ur: "یہاں دین سے مراد روز جزا ہے"
        },
        advanced: {
          rootFamily: ["دَيَّان (Judge)", "دَيْن (debt)", "مَدِين (debtor)"],
          frequency: 92,
          semanticNote: "دِين has two meanings: religion AND recompense/judgment",
          tajweedTips: "Shaddah on د - emphasize the doubling"
        }
      }
    ],
    dependencyStructure: "(أَرَءَيْتَ)[interrogative-verb] → (ٱلَّذِى)[object-relative] → (يُكَذِّبُ)[verb-predicate] → (بِٱلدِّينِ)[prepositional-phrase]"
  },

  2: {
    ayahNumber: 2,
    arabic: "فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ",
    translation: {
      en: "For that is the one who drives away the orphan",
      ur: "یہ وہی ہے جو یتیم کو دھکے دیتا ہے",
      hi: "यही वह है जो अनाथ को धक्के देता है",
      bn: "এ সেই ব্যক্তি যে এতিমকে ধাক্কা দিয়ে তাড়িয়ে দেয়",
      tr: "İşte yetimi itip kakan odur",
      id: "Itulah orang yang menghardik anak yatim"
    },
    words: [
      {
        position: 1,
        arabic: "فَذَٰلِكَ",
        transliteration: "fa-dhaalika",
        root: "ذ ل ك",
        lemma: "ذَٰلِكَ",
        posTag: "DEM",
        meaning: {
          en: "So that (is)",
          ur: "پس وہی ہے",
          hi: "तो वही है",
          bn: "তাহলে সে-ই",
          tr: "İşte o",
          id: "Maka itulah",
          ar: "فذلك الشخص"
        },
        grammarRole: "conjunction + demonstrative pronoun",
        case: "nominative",
        features: {
          distance: "far",
          gender: "masculine"
        },
        grammarExplanations: {
          en: "فَ (fa) connects consequence - denying leads to these behaviors",
          ur: "فَ سببیہ - جھٹلانے کا نتیجہ یہ ہے"
        }
      },
      {
        position: 2,
        arabic: "ٱلَّذِى",
        transliteration: "alladhee",
        root: "ل ذ ي",
        lemma: "ٱلَّذِى",
        posTag: "REL",
        meaning: {
          en: "the one who",
          ur: "جو",
          hi: "जो",
          bn: "যে",
          tr: "ki o",
          id: "yang",
          ar: "الذي"
        },
        grammarRole: "relative pronoun",
        case: "N/A"
      },
      {
        position: 3,
        arabic: "يَدُعُّ",
        transliteration: "yadu'-'u",
        root: "د ع ع",
        lemma: "دَعَّ",
        posTag: "V",
        meaning: {
          en: "drives away / pushes harshly",
          ur: "دھکے دیتا ہے",
          hi: "धक्के देता है",
          bn: "ধাক্কা দেয়",
          tr: "iter kakar",
          id: "menghardik",
          ar: "يدفع بعنف وقسوة"
        },
        grammarRole: "verb (predicate)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "I",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "يَدُعُّ (doubled root ع) - physical violence, shoving, repelling",
          ur: "مضاعف فعل - سختی سے دھکیلنا"
        },
        advanced: {
          rootFamily: ["دَعٌّ (pushing)", "دَفْعٌ (repelling)"],
          frequency: 2,
          balagha: "Rare word emphasizes violence - only appears twice in Quran",
          linguisticMiracle: "Physical violence against orphans = denying Judgment Day",
          tajweedTips: "Shaddah on ع - emphasize the doubling with proper ghunnah"
        }
      },
      {
        position: 4,
        arabic: "ٱلْيَتِيمَ",
        transliteration: "al-yateema",
        root: "ي ت م",
        lemma: "يَتِيم",
        posTag: "N",
        meaning: {
          en: "the orphan",
          ur: "یتیم کو",
          hi: "अनाथ को",
          bn: "এতিমকে",
          tr: "yetimi",
          id: "anak yatim",
          ar: "فاقد الأب"
        },
        grammarRole: "direct object",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        advanced: {
          rootFamily: ["يُتْم (orphanhood)", "أَيْتام (orphans plural)"],
          frequency: 23,
          propheticConnection: "Prophet Muhammad ﷺ was himself an orphan",
          memoryHook: "يَتِيم = one who has NO father (يتم = to lack)"
        }
      }
    ],
    dependencyStructure: "(فَذَٰلِكَ)[demonstrative-subject] → (ٱلَّذِى)[relative-connector] → (يَدُعُّ)[verb] → (ٱلْيَتِيمَ)[direct-object]"
  },

  3: {
    ayahNumber: 3,
    arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
    translation: {
      en: "And does not encourage the feeding of the poor",
      ur: "اور مسکین کو کھانا کھلانے کی ترغیب نہیں دیتا",
      hi: "और मिसकीन को खिलाने की प्रेरणा नहीं देता",
      bn: "এবং মিসকিনকে খাওয়ানোর প্রেরণা দেয় না",
      tr: "Yoksulu doyurmaya teşvik etmez",
      id: "Dan tidak menganjurkan memberi makan orang miskin"
    },
    words: [
      {
        position: 1,
        arabic: "وَلَا",
        transliteration: "wa-laa",
        root: "N/A",
        lemma: "وَ + لَا",
        posTag: "CONJ + NEG",
        meaning: {
          en: "And not / nor",
          ur: "اور نہیں",
          hi: "और नहीं",
          bn: "এবং না",
          tr: "Ve ... değil",
          id: "Dan tidak",
          ar: "ولا"
        },
        grammarRole: "conjunction + negation",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "يَحُضُّ",
        transliteration: "yahuddu",
        root: "ح ض ض",
        lemma: "حَضَّ",
        posTag: "V",
        meaning: {
          en: "encourages / urges",
          ur: "ترغیب دیتا",
          hi: "प्रेरणा देता",
          bn: "উৎসাহিত করে",
          tr: "teşvik eder",
          id: "menganjurkan",
          ar: "يُحَرِّض ويُرَغِّب"
        },
        grammarRole: "verb (negated)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "I",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "Doubled root (حض) - to strongly urge, encourage persistently",
          ur: "مضاعف - شدت سے ترغیب دینا"
        },
        advanced: {
          rootFamily: ["حَضٌّ (urging)", "تَحَاضٌّ (mutual urging)"],
          frequency: 4,
          balagha: "Not just failing to feed, but failing to even encourage others",
          linguisticMiracle: "Double sin: neither feeding nor encouraging"
        }
      },
      {
        position: 3,
        arabic: "عَلَىٰ",
        transliteration: "'alaa",
        root: "ع ل و",
        lemma: "عَلَىٰ",
        posTag: "PREP",
        meaning: {
          en: "upon / for",
          ur: "پر",
          hi: "पर",
          bn: "উপরে",
          tr: "üzerine",
          id: "untuk",
          ar: "على"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "طَعَامِ",
        transliteration: "ta'aami",
        root: "ط ع م",
        lemma: "طَعَام",
        posTag: "N",
        meaning: {
          en: "feeding / food",
          ur: "کھانا کھلانے",
          hi: "खिलाने",
          bn: "খাওয়ানো",
          tr: "yiyecek",
          id: "memberi makan",
          ar: "إطعام الطعام"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["طَعِمَ (to taste)", "إِطْعَام (feeding)", "مُطْعِم (feeder)"],
          frequency: 48
        }
      },
      {
        position: 5,
        arabic: "ٱلْمِسْكِينِ",
        transliteration: "al-miskeen",
        root: "س ك ن",
        lemma: "مِسْكِين",
        posTag: "N",
        meaning: {
          en: "the poor / needy",
          ur: "مسکین کو",
          hi: "मिसकीन को",
          bn: "মিসকিনকে",
          tr: "yoksul",
          id: "orang miskin",
          ar: "الفقير المحتاج"
        },
        grammarRole: "possessive (genitive)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "مِسْكِين (from سَكَنَ - to be still) - one made still by poverty",
          ur: "جو غربت سے بے بس ہو جائے"
        },
        advanced: {
          rootFamily: ["سُكُون (stillness)", "مَسْكَن (dwelling)", "سَكِينَة (tranquility)"],
          frequency: 23,
          semanticNote: "مِسْكِين is worse off than فَقِير - completely helpless",
          memoryHook: "مِسْكِين = so poor they can't even MOVE (سَكَنَ)"
        }
      }
    ],
    dependencyStructure: "(وَلَا)[conj+neg] → (يَحُضُّ)[verb] → (عَلَىٰ)[prep] → (طَعَامِ)[noun] → (ٱلْمِسْكِينِ)[genitive]"
  },

  4: {
    ayahNumber: 4,
    arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
    translation: {
      en: "So woe to those who pray",
      ur: "پس ہلاکت ہے ان نمازیوں کے لیے",
      hi: "तो विनाश है उन नमाज़ियों के लिए",
      bn: "অতএব সেই নামাযীদের জন্য দুর্ভোগ",
      tr: "Yazıklar olsun o namaz kılanlara",
      id: "Maka kecelakaanlah bagi orang-orang yang shalat"
    },
    words: [
      {
        position: 1,
        arabic: "فَوَيْلٌ",
        transliteration: "fa-waylun",
        root: "و ي ل",
        lemma: "وَيْل",
        posTag: "N",
        meaning: {
          en: "So woe",
          ur: "پس ہلاکت",
          hi: "तो विनाश",
          bn: "অতএব দুর্ভোগ",
          tr: "Yazıklar olsun",
          id: "Maka kecelakaan",
          ar: "هلاك وعذاب شديد"
        },
        grammarRole: "subject (exclamation)",
        case: "nominative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "وَيْل - a valley in Hell, or extreme punishment/destruction",
          ur: "جہنم کی وادی یا شدید عذاب"
        },
        advanced: {
          rootFamily: ["وَيْلَة (calamity)", "وَيْلَات (woes plural)"],
          frequency: 40,
          linguisticMiracle: "وَيْل used 40 times in Quran - always for severe warning",
          memoryHook: "وَيْل sounds like 'wail' - crying from punishment"
        }
      },
      {
        position: 2,
        arabic: "لِّلْمُصَلِّينَ",
        transliteration: "lil-musalleen",
        root: "ص ل و",
        lemma: "مُصَلٍّ",
        posTag: "N",
        meaning: {
          en: "to those who pray",
          ur: "ان نمازیوں کے لیے",
          hi: "उन नमाज़ियों के लिए",
          bn: "সেই নামাযীদের জন্য",
          tr: "namaz kılanlara",
          id: "bagi orang-orang yang shalat",
          ar: "الذين يصلون"
        },
        grammarRole: "prepositional phrase (object of woe)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "plural",
          definiteness: "definite",
          participle: "active"
        },
        grammarExplanations: {
          en: "Active participle (مُفَعِّل) - those who habitually pray",
          ur: "اسم فاعل - جو نماز پڑھنے والے ہیں"
        },
        advanced: {
          rootFamily: ["صَلَاة (prayer)", "صَلَّى (he prayed)", "مُصَلَّى (prayer place)"],
          frequency: 99,
          balagha: "Shocking statement - woe to those who pray? Qualified by next verse",
          memoryHook: "Creates suspense - reader must continue to understand"
        }
      }
    ],
    dependencyStructure: "(فَوَيْلٌ)[subject-exclamation] → (لِّلْمُصَلِّينَ)[prepositional-phrase]"
  },

  5: {
    ayahNumber: 5,
    arabic: "ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
    translation: {
      en: "[But] who are heedless of their prayer",
      ur: "جو اپنی نماز سے غافل ہیں",
      hi: "जो अपनी नमाज़ से ग़ाफ़िल हैं",
      bn: "যারা তাদের নামাযে অমনোযোগী",
      tr: "Ki onlar namazlarından gafildirler",
      id: "Yang lalai dari shalatnya"
    },
    words: [
      {
        position: 1,
        arabic: "ٱلَّذِينَ",
        transliteration: "alladheena",
        root: "ل ذ ي",
        lemma: "ٱلَّذِينَ",
        posTag: "REL",
        meaning: {
          en: "Those who",
          ur: "جو لوگ",
          hi: "जो लोग",
          bn: "যারা",
          tr: "Onlar ki",
          id: "Mereka yang",
          ar: "الذين"
        },
        grammarRole: "relative pronoun (qualifier for v.4)",
        case: "N/A",
        features: {
          gender: "masculine",
          number: "plural"
        }
      },
      {
        position: 2,
        arabic: "هُمْ",
        transliteration: "hum",
        root: "N/A",
        lemma: "هُمْ",
        posTag: "PRON",
        meaning: {
          en: "they",
          ur: "وہ",
          hi: "वे",
          bn: "তারা",
          tr: "onlar",
          id: "mereka",
          ar: "هم"
        },
        grammarRole: "subject pronoun",
        case: "nominative",
        features: {
          person: "3rd",
          gender: "masculine",
          number: "plural"
        }
      },
      {
        position: 3,
        arabic: "عَن",
        transliteration: "'an",
        root: "ع ن",
        lemma: "عَن",
        posTag: "PREP",
        meaning: {
          en: "of / from",
          ur: "سے",
          hi: "से",
          bn: "থেকে",
          tr: "-dan",
          id: "dari",
          ar: "عن"
        },
        grammarRole: "preposition",
        case: "N/A",
        grammarExplanations: {
          en: "عَن صَلَاتِهِمْ - heedless OF their prayer (not IN their prayer)",
          ur: "نماز میں نہیں بلکہ نماز سے غافل"
        },
        advanced: {
          balagha: "Critical distinction: عَن (from/of) not فِي (in) - they neglect prayer entirely, not just distracted during it",
          linguisticMiracle: "This word choice clarifies the sin is neglecting, not imperfection during prayer"
        }
      },
      {
        position: 4,
        arabic: "صَلَاتِهِمْ",
        transliteration: "salaatihim",
        root: "ص ل و",
        lemma: "صَلَاة",
        posTag: "N",
        meaning: {
          en: "their prayer",
          ur: "اپنی نماز",
          hi: "अपनी नमाज़",
          bn: "তাদের নামায",
          tr: "namazlarından",
          id: "shalatnya",
          ar: "صلاتهم"
        },
        grammarRole: "object of preposition + possessive",
        case: "genitive",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite",
          possessive: "3rd plural masculine"
        }
      },
      {
        position: 5,
        arabic: "سَاهُونَ",
        transliteration: "saahoon",
        root: "س ه و",
        lemma: "سَاهٍ",
        posTag: "ADJ",
        meaning: {
          en: "heedless / negligent",
          ur: "غافل ہیں",
          hi: "ग़ाफ़िल हैं",
          bn: "অমনোযোগী",
          tr: "gafildirler",
          id: "lalai",
          ar: "غافلون متهاونون"
        },
        grammarRole: "predicate (active participle)",
        case: "nominative",
        features: {
          gender: "masculine",
          number: "plural",
          definiteness: "indefinite",
          participle: "active"
        },
        grammarExplanations: {
          en: "سَاهُونَ - active participle from سَهَا (to be forgetful/neglectful)",
          ur: "اسم فاعل - غفلت کرنے والے"
        },
        advanced: {
          rootFamily: ["سَهْو (forgetfulness)", "سَهَا (to forget)", "سُجُود السَّهْو (prostration of forgetfulness)"],
          frequency: 2,
          memoryHook: "سَاهُونَ = 'SAH-hoon' - they let prayer SAG from priority"
        }
      }
    ],
    dependencyStructure: "(ٱلَّذِينَ)[relative] → (هُمْ)[subject] → (عَن صَلَاتِهِمْ)[prep-phrase] → (سَاهُونَ)[predicate]"
  },

  6: {
    ayahNumber: 6,
    arabic: "ٱلَّذِينَ هُمْ يُرَآءُونَ",
    translation: {
      en: "Those who make show [of their deeds]",
      ur: "جو دکھاوا کرتے ہیں",
      hi: "जो दिखावा करते हैं",
      bn: "যারা লোক দেখানো কাজ করে",
      tr: "Onlar gösteriş yapanlardır",
      id: "Yang berbuat riya"
    },
    words: [
      {
        position: 1,
        arabic: "ٱلَّذِينَ",
        transliteration: "alladheena",
        root: "ل ذ ي",
        lemma: "ٱلَّذِينَ",
        posTag: "REL",
        meaning: {
          en: "Those who",
          ur: "جو لوگ",
          hi: "जो लोग",
          bn: "যারা",
          tr: "Onlar ki",
          id: "Mereka yang",
          ar: "الذين"
        },
        grammarRole: "relative pronoun",
        case: "N/A",
        features: {
          gender: "masculine",
          number: "plural"
        }
      },
      {
        position: 2,
        arabic: "هُمْ",
        transliteration: "hum",
        root: "N/A",
        lemma: "هُمْ",
        posTag: "PRON",
        meaning: {
          en: "they",
          ur: "وہ",
          hi: "वे",
          bn: "তারা",
          tr: "onlar",
          id: "mereka",
          ar: "هم"
        },
        grammarRole: "subject pronoun",
        case: "nominative",
        features: {
          person: "3rd",
          gender: "masculine",
          number: "plural"
        }
      },
      {
        position: 3,
        arabic: "يُرَآءُونَ",
        transliteration: "yuraa'oon",
        root: "ر أ ي",
        lemma: "رَاءَى",
        posTag: "V",
        meaning: {
          en: "show off / do riya",
          ur: "دکھاوا کرتے ہیں",
          hi: "दिखावा करते हैं",
          bn: "লোক দেখানো করে",
          tr: "gösteriş yaparlar",
          id: "berbuat riya",
          ar: "يعملون للرياء والسمعة"
        },
        grammarRole: "verb (predicate)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "III",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "Form III مُفَاعَلَة - mutual action; they want to be seen by others",
          ur: "باب مفاعلة - دوسروں کو دکھانا چاہتے ہیں"
        },
        advanced: {
          rootFamily: ["رُؤْيَة (seeing)", "رِيَاء (showing off)", "مُرَائِي (show-off)"],
          frequency: 5,
          balagha: "From رَأَى (to see) - they want to BE SEEN, not to worship Allah",
          linguisticMiracle: "Form III indicates reciprocal - they show, people see",
          hadithReference: "Prophet ﷺ called riya 'minor shirk'",
          memoryHook: "يُرَآءُونَ = from رَأَى (see) - they want to be SEEN by people"
        }
      }
    ],
    dependencyStructure: "(ٱلَّذِينَ)[relative] → (هُمْ)[subject] → (يُرَآءُونَ)[verb-predicate]"
  },

  7: {
    ayahNumber: 7,
    arabic: "وَيَمْنَعُونَ ٱلْمَاعُونَ",
    translation: {
      en: "And withhold [simple] assistance",
      ur: "اور معمولی ضرورت کی چیزیں بھی نہیں دیتے",
      hi: "और मामूली चीज़ें भी नहीं देते",
      bn: "এবং সামান্য সাহায্যও করে না",
      tr: "Ve basit yardımı bile esirgerler",
      id: "Dan enggan menolong dengan barang berguna"
    },
    words: [
      {
        position: 1,
        arabic: "وَيَمْنَعُونَ",
        transliteration: "wa-yamna'oon",
        root: "م ن ع",
        lemma: "مَنَعَ",
        posTag: "V",
        meaning: {
          en: "And they withhold / refuse",
          ur: "اور روکتے ہیں",
          hi: "और रोकते हैं",
          bn: "এবং বিরত থাকে",
          tr: "Ve esirgerler",
          id: "Dan enggan",
          ar: "ويرفضون إعطاء"
        },
        grammarRole: "conjunction + verb",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "يَمْنَعُونَ - they actively prevent/withhold; deliberate refusal",
          ur: "جان بوجھ کر روکنا"
        },
        advanced: {
          rootFamily: ["مَنْع (prevention)", "مَانِع (preventer)", "مُمْتَنِع (abstaining)"],
          frequency: 26
        }
      },
      {
        position: 2,
        arabic: "ٱلْمَاعُونَ",
        transliteration: "al-maa'oon",
        root: "م ع ن",
        lemma: "مَاعُون",
        posTag: "N",
        meaning: {
          en: "small kindnesses / basic necessities",
          ur: "معمولی چیزیں",
          hi: "मामूली चीज़ें",
          bn: "সামান্য সাহায্য",
          tr: "basit yardım",
          id: "barang berguna",
          ar: "الأشياء الصغيرة كالماء والملح والإناء"
        },
        grammarRole: "direct object",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "مَاعُون - small household items people borrow (pot, bucket, salt, etc.)",
          ur: "چھوٹی چیزیں جو لوگ ادھار لیتے ہیں"
        },
        advanced: {
          rootFamily: ["مَعْن (little water)", "مَعِين (flowing spring)"],
          frequency: 1,
          linguisticMiracle: "The surah is named after this word - small kindnesses define character",
          balagha: "Climax: they won't even share trivial items - ultimate stinginess",
          tafseerNote: "Ibn Abbas: bucket, axe, pot. Others: Zakat. Shows even smallest refusals matter.",
          memoryHook: "الماعون = 'small assistance' - even this they refuse!"
        }
      }
    ],
    dependencyStructure: "(وَيَمْنَعُونَ)[conj+verb] → (ٱلْمَاعُونَ)[direct-object]"
  }
};

export default TREEBANK_DATA;
