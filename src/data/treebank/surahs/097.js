/**
 * Surah Al-Qadr (97) - The Night of Power
 * Complete Quranic Arabic Treebank
 * 5 Ayahs - Makki
 * Theme: The blessed night when the Quran was revealed
 */

export const TREEBANK_DATA = {
  surahId: 97,
  surahName: "Al-Qadr",
  surahNameArabic: "القدر",
  totalAyahs: 5,
  totalWords: 30,
  theme: "The Night of Decree - when the Quran was revealed",

  translation: {
    en: "Indeed, We sent it down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months. The angels and the Spirit descend therein by permission of their Lord for every matter. Peace it is until the emergence of dawn.",
    ur: "بےشک ہم نے اسے شب قدر میں نازل کیا۔ اور تم کیا جانو کہ شب قدر کیا ہے؟ شب قدر ہزار مہینوں سے بہتر ہے۔ فرشتے اور روح اس میں اپنے رب کے حکم سے ہر کام کے لیے اترتے ہیں۔ سلامتی ہے وہ رات فجر کے طلوع ہونے تک۔",
    hi: "बेशक हमने इसे शब-ए-क़द्र में नाज़िल किया। और तुम क्या जानो कि शब-ए-क़द्र क्या है? शब-ए-क़द्र हज़ार महीनों से बेहतर है। फ़रिश्ते और रूह इसमें अपने रब के हुक्म से हर काम के लिए उतरते हैं। सलामती है वो रात फ़ज्र के तुलू होने तक।",
    bn: "নিশ্চয় আমি এটি নাযিল করেছি ক্বদরের রাতে। তোমাকে কিসে জানাবে ক্বদরের রাত কী? ক্বদরের রাত হাজার মাসের চেয়ে উত্তম। ফেরেশতারা এবং রূহ এতে তাদের রবের অনুমতিক্রমে সব বিষয়ে অবতীর্ণ হয়। শান্তি, এটা ফজর উদিত হওয়া পর্যন্ত।",
    tr: "Biz onu Kadir gecesinde indirdik. Kadir gecesinin ne olduğunu sen nereden bileceksin? Kadir gecesi bin aydan daha hayırlıdır. Melekler ve Ruh, Rablerinin izniyle her türlü iş için o gecede inerler. O gece, tan yerinin ağarmasına kadar selâmettir.",
    id: "Sesungguhnya Kami telah menurunkannya pada malam kemuliaan. Dan tahukah kamu apakah malam kemuliaan itu? Malam kemuliaan itu lebih baik dari seribu bulan. Pada malam itu turun malaikat-malaikat dan malaikat Jibril dengan izin Tuhannya untuk mengatur segala urusan. Malam itu penuh kesejahteraan sampai terbit fajar."
  },

  1: {
    ayahNumber: 1,
    arabic: "إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
    translation: {
      en: "Indeed, We sent it down during the Night of Decree",
      ur: "بےشک ہم نے اسے شب قدر میں نازل کیا",
      hi: "बेशक हमने इसे शब-ए-क़द्र में नाज़िल किया",
      bn: "নিশ্চয় আমি এটি নাযিল করেছি ক্বদরের রাতে",
      tr: "Biz onu Kadir gecesinde indirdik",
      id: "Sesungguhnya Kami telah menurunkannya pada malam kemuliaan"
    },
    words: [
      {
        position: 1,
        arabic: "إِنَّآ",
        transliteration: "innaa",
        root: "N/A",
        lemma: "إِنَّ + نَحْنُ",
        posTag: "ACC + PRON",
        posLabel: "ACC + PRON",
        meaning: {
          en: "Indeed, We",
          ur: "بےشک ہم نے",
          hi: "बेशक हमने",
          bn: "নিশ্চয় আমি",
          tr: "Muhakkak Biz",
          id: "Sesungguhnya Kami",
          ar: "إنّا نحن"
        },
        grammarRole: "emphasis + royal 'We' (Allah)",
        case: "N/A",
        grammarExplanations: {
          en: "Royal 'We' (نَحْنُ) - Allah speaks of Himself in majestic plural",
          ur: "اللہ اپنے لیے جمع عظمت استعمال کرتے ہیں"
        }
      },
      {
        position: 2,
        arabic: "أَنزَلْنَٰهُ",
        transliteration: "anzalnaahu",
        root: "ن ز ل",
        lemma: "أَنْزَلَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "sent it down",
          ur: "اسے نازل کیا",
          hi: "इसे नाज़िल किया",
          bn: "এটি নাযিল করেছি",
          tr: "onu indirdik",
          id: "menurunkannya",
          ar: "أنزلناه"
        },
        grammarRole: "verb + object pronoun",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "1st",
          gender: "common",
          number: "plural (royal We)",
          voice: "active",
          form: "IV"
        },
        grammarExplanations: {
          en: "هُ refers to the Quran (masculine); أَنْزَلَ = to send down from high place",
          ur: "ہُ سے مراد قرآن ہے"
        },
        advanced: {
          rootFamily: ["نَزَلَ (to descend)", "نُزُول (descent)", "مَنْزِل (station)", "تَنْزِيل (revelation)"],
          frequency: 293
        }
      },
      {
        position: 3,
        arabic: "فِى",
        transliteration: "fee",
        root: "N/A",
        lemma: "فِي",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "during / in",
          ur: "میں",
          hi: "में",
          bn: "মধ্যে",
          tr: "-de/-da",
          id: "pada",
          ar: "في"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "لَيْلَةِ",
        transliteration: "laylati",
        root: "ل ي ل",
        lemma: "لَيْلَة",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "night",
          ur: "رات",
          hi: "रात",
          bn: "রাত",
          tr: "gece",
          id: "malam",
          ar: "ليلة"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite (by idafa)"
        }
      },
      {
        position: 5,
        arabic: "ٱلْقَدْرِ",
        transliteration: "al-qadr",
        root: "ق د ر",
        lemma: "قَدْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the Decree / the Power / the Measure",
          ur: "قدر / عظمت",
          hi: "क़द्र / महिमा",
          bn: "ক্বদর / মর্যাদা",
          tr: "Kadir",
          id: "kemuliaan",
          ar: "العظمة والشرف والقضاء"
        },
        grammarRole: "genitive (mudaf ilayh)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "قَدْر has multiple meanings: decree, power, honor, measurement - all apply",
          ur: "قَدْر کے کئی معانی ہیں: تقدیر، عظمت، اندازہ"
        },
        advanced: {
          rootFamily: ["قَدَرَ (to measure/decree)", "قَدَر (decree)", "قَدِير (powerful)", "مِقْدَار (measure)"],
          frequency: 132,
          semanticLayers: [
            "Night of Decree - when destinies are determined",
            "Night of Power - immense spiritual power",
            "Night of Measure - when Quran's verses were measured out",
            "Night of Honor - most honored night"
          ]
        }
      }
    ],
    dependencyStructure: "(إِنَّآ)[emphasis+subject] → (أَنزَلْنَٰهُ)[verb+object] → (فِى لَيْلَةِ ٱلْقَدْرِ)[prep-phrase]"
  },

  2: {
    ayahNumber: 2,
    arabic: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ",
    translation: {
      en: "And what can make you know what is the Night of Decree?",
      ur: "اور تم کیا جانو کہ شب قدر کیا ہے؟",
      hi: "और तुम क्या जानो कि शब-ए-क़द्र क्या है?",
      bn: "তোমাকে কিসে জানাবে ক্বদরের রাত কী?",
      tr: "Kadir gecesinin ne olduğunu sen nereden bileceksin?",
      id: "Dan tahukah kamu apakah malam kemuliaan itu?"
    },
    words: [
      {
        position: 1,
        arabic: "وَمَآ",
        transliteration: "wa-maa",
        root: "N/A",
        lemma: "مَا",
        posTag: "INTG",
        posLabel: "INTG",
        meaning: {
          en: "And what",
          ur: "اور کیا",
          hi: "और क्या",
          bn: "এবং কী",
          tr: "Ve ne",
          id: "Dan apa",
          ar: "وما"
        },
        grammarRole: "conjunction + interrogative",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "أَدْرَىٰكَ",
        transliteration: "adraaka",
        root: "د ر ي",
        lemma: "أَدْرَى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "can make you know",
          ur: "تمہیں بتائے",
          hi: "तुम्हें बताए",
          bn: "তোমাকে জানাবে",
          tr: "sana bildirir",
          id: "memberitahukan kepadamu",
          ar: "يُعلمك ويُخبرك"
        },
        grammarRole: "verb + object pronoun",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "IV"
        },
        advanced: {
          frequency: 13,
          quranicFormula: "وَمَا أَدْرَاكَ - introduces something beyond human comprehension until revealed"
        }
      },
      {
        position: 3,
        arabic: "مَا",
        transliteration: "maa",
        root: "N/A",
        lemma: "مَا",
        posTag: "INTG",
        posLabel: "INTG",
        meaning: {
          en: "what",
          ur: "کیا",
          hi: "क्या",
          bn: "কী",
          tr: "ne",
          id: "apa",
          ar: "ما"
        },
        grammarRole: "interrogative",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "لَيْلَةُ",
        transliteration: "laylatu",
        root: "ل ي ل",
        lemma: "لَيْلَة",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "Night",
          ur: "رات",
          hi: "रात",
          bn: "রাত",
          tr: "gece",
          id: "malam",
          ar: "ليلة"
        },
        grammarRole: "subject of nominal sentence",
        case: "nominative"
      },
      {
        position: 5,
        arabic: "ٱلْقَدْرِ",
        transliteration: "al-qadr",
        root: "ق د ر",
        lemma: "قَدْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the Decree",
          ur: "قدر",
          hi: "क़द्र",
          bn: "ক্বদর",
          tr: "Kadir",
          id: "kemuliaan",
          ar: "القدر"
        },
        grammarRole: "genitive (mudaf ilayh)",
        case: "genitive"
      }
    ],
    dependencyStructure: "(وَمَآ)[interrogative] → (أَدْرَىٰكَ)[verb] → (مَا لَيْلَةُ ٱلْقَدْرِ)[embedded-question]"
  },

  3: {
    ayahNumber: 3,
    arabic: "لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
    translation: {
      en: "The Night of Decree is better than a thousand months",
      ur: "شب قدر ہزار مہینوں سے بہتر ہے",
      hi: "शब-ए-क़द्र हज़ार महीनों से बेहतर है",
      bn: "ক্বদরের রাত হাজার মাসের চেয়ে উত্তম",
      tr: "Kadir gecesi bin aydan daha hayırlıdır",
      id: "Malam kemuliaan itu lebih baik dari seribu bulan"
    },
    words: [
      {
        position: 1,
        arabic: "لَيْلَةُ",
        transliteration: "laylatu",
        root: "ل ي ل",
        lemma: "لَيْلَة",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "Night",
          ur: "رات",
          hi: "रात",
          bn: "রাত",
          tr: "gece",
          id: "malam",
          ar: "ليلة"
        },
        grammarRole: "subject",
        case: "nominative"
      },
      {
        position: 2,
        arabic: "ٱلْقَدْرِ",
        transliteration: "al-qadr",
        root: "ق د ر",
        lemma: "قَدْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the Decree",
          ur: "قدر",
          hi: "क़द्र",
          bn: "ক্বদর",
          tr: "Kadir",
          id: "kemuliaan",
          ar: "القدر"
        },
        grammarRole: "genitive",
        case: "genitive"
      },
      {
        position: 3,
        arabic: "خَيْرٌ",
        transliteration: "khayrun",
        root: "خ ي ر",
        lemma: "خَيْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "better",
          ur: "بہتر",
          hi: "बेहतर",
          bn: "উত্তম",
          tr: "daha hayırlı",
          id: "lebih baik",
          ar: "أفضل"
        },
        grammarRole: "predicate",
        case: "nominative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite",
          degree: "comparative/superlative"
        },
        grammarExplanations: {
          en: "خَيْر is elative (أَفْعَل) - means 'better than'",
          ur: "خَيْر اسم تفضیل ہے - سے بہتر"
        }
      },
      {
        position: 4,
        arabic: "مِّنْ",
        transliteration: "min",
        root: "N/A",
        lemma: "مِن",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "than",
          ur: "سے",
          hi: "से",
          bn: "চেয়ে",
          tr: "-den/-dan",
          id: "dari",
          ar: "من"
        },
        grammarRole: "preposition (comparison)",
        case: "N/A"
      },
      {
        position: 5,
        arabic: "أَلْفِ",
        transliteration: "alfi",
        root: "أ ل ف",
        lemma: "أَلْف",
        posTag: "NUM",
        posLabel: "NUM",
        meaning: {
          en: "a thousand",
          ur: "ہزار",
          hi: "हज़ार",
          bn: "হাজার",
          tr: "bin",
          id: "seribu",
          ar: "ألف"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["أَلِفَ (to be familiar)", "أَلْف (thousand)", "أُلْفَة (familiarity)"],
          frequency: 9,
          mathematicalNote: "1000 months ≈ 83.3 years - a lifetime of worship in one night"
        }
      },
      {
        position: 6,
        arabic: "شَهْرٍ",
        transliteration: "shahr",
        root: "ش ه ر",
        lemma: "شَهْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "months",
          ur: "مہینے",
          hi: "महीने",
          bn: "মাস",
          tr: "ay",
          id: "bulan",
          ar: "شهر"
        },
        grammarRole: "genitive (counted noun)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["شَهَرَ (to make known)", "شَهْر (month)", "مَشْهُور (famous)"],
          frequency: 21,
          note: "Singular after numbers 11-99 in Arabic"
        }
      }
    ],
    dependencyStructure: "(لَيْلَةُ ٱلْقَدْرِ)[subject] → (خَيْرٌ)[predicate] → (مِّنْ أَلْفِ شَهْرٍ)[comparison]"
  },

  4: {
    ayahNumber: 4,
    arabic: "تَنَزَّلُ ٱلْمَلَٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
    translation: {
      en: "The angels and the Spirit descend therein by permission of their Lord for every matter",
      ur: "فرشتے اور روح اس میں اپنے رب کے حکم سے ہر کام کے لیے اترتے ہیں",
      hi: "फ़रिश्ते और रूह इसमें अपने रब के हुक्म से हर काम के लिए उतरते हैं",
      bn: "ফেরেশতারা এবং রূহ এতে তাদের রবের অনুমতিক্রমে সব বিষয়ে অবতীর্ণ হয়",
      tr: "Melekler ve Ruh, Rablerinin izniyle her türlü iş için o gecede inerler",
      id: "Pada malam itu turun malaikat-malaikat dan malaikat Jibril dengan izin Tuhannya untuk mengatur segala urusan"
    },
    words: [
      {
        position: 1,
        arabic: "تَنَزَّلُ",
        transliteration: "tanazzalu",
        root: "ن ز ل",
        lemma: "تَنَزَّلَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "descend",
          ur: "اترتے ہیں",
          hi: "उतरते हैं",
          bn: "অবতীর্ণ হয়",
          tr: "inerler",
          id: "turun",
          ar: "تتنزل وتنزل"
        },
        grammarRole: "verb",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "feminine",
          number: "singular",
          voice: "active",
          form: "V",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "Form V (تَفَعَّلَ) - reflexive/gradual; descend gradually/repeatedly",
          ur: "باب تفعّل - آہستہ آہستہ اترنا"
        },
        advanced: {
          rootFamily: ["نَزَلَ (to descend)", "تَنَزُّل (gradual descent)", "مُنَزَّل (revealed)"],
          frequency: 6
        }
      },
      {
        position: 2,
        arabic: "ٱلْمَلَٰٓئِكَةُ",
        transliteration: "al-malaa'ikah",
        root: "م ل ك",
        lemma: "مَلَائِكَة",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the angels",
          ur: "فرشتے",
          hi: "फ़रिश्ते",
          bn: "ফেরেশতারা",
          tr: "melekler",
          id: "malaikat-malaikat",
          ar: "الملائكة"
        },
        grammarRole: "subject",
        case: "nominative",
        features: {
          gender: "feminine",
          number: "plural",
          definiteness: "definite"
        }
      },
      {
        position: 3,
        arabic: "وَٱلرُّوحُ",
        transliteration: "war-rooh",
        root: "ر و ح",
        lemma: "رُوح",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "and the Spirit (Jibreel)",
          ur: "اور روح (جبریل)",
          hi: "और रूह (जिब्रईल)",
          bn: "এবং রূহ (জিবরীল)",
          tr: "ve Ruh",
          id: "dan malaikat Jibril",
          ar: "جبريل عليه السلام"
        },
        grammarRole: "conjunction + subject",
        case: "nominative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "الرُّوح here refers to Jibreel (Gabriel) - mentioned separately for honor",
          ur: "الرُّوح سے مراد جبریل علیہ السلام ہیں - تعظیم کے لیے الگ ذکر"
        },
        advanced: {
          rootFamily: ["رَاحَ (to go)", "رُوح (spirit)", "رَوْح (mercy)", "اِرْتَاحَ (to rest)"],
          frequency: 21,
          titles: ["الرُّوح", "رُوح القُدُس", "الرُّوح الأَمِين", "جِبْرِيل"]
        }
      },
      {
        position: 4,
        arabic: "فِيهَا",
        transliteration: "feehaa",
        root: "N/A",
        lemma: "فِي + هِي",
        posTag: "PREP + PRON",
        posLabel: "PREP + PRON",
        meaning: {
          en: "therein / in it",
          ur: "اس میں",
          hi: "इसमें",
          bn: "এতে",
          tr: "o gecede",
          id: "pada malam itu",
          ar: "فيها"
        },
        grammarRole: "prepositional phrase",
        case: "genitive"
      },
      {
        position: 5,
        arabic: "بِإِذْنِ",
        transliteration: "bi-idhni",
        root: "أ ذ ن",
        lemma: "إِذْن",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "by permission",
          ur: "حکم سے",
          hi: "हुक्म से",
          bn: "অনুমতিক্রমে",
          tr: "izniyle",
          id: "dengan izin",
          ar: "بإذن وأمر"
        },
        grammarRole: "prepositional phrase",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular"
        },
        advanced: {
          rootFamily: ["أَذِنَ (to permit)", "إِذْن (permission)", "أُذُن (ear)", "مَأْذُون (permitted)"],
          frequency: 39
        }
      },
      {
        position: 6,
        arabic: "رَبِّهِم",
        transliteration: "rabbihim",
        root: "ر ب ب",
        lemma: "رَبّ",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "their Lord",
          ur: "اپنے رب",
          hi: "अपने रब",
          bn: "তাদের রব",
          tr: "Rablerinin",
          id: "Tuhannya",
          ar: "ربهم"
        },
        grammarRole: "genitive",
        case: "genitive",
        features: {
          possessive: "3rd plural masculine"
        }
      },
      {
        position: 7,
        arabic: "مِّن",
        transliteration: "min",
        root: "N/A",
        lemma: "مِن",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "for / from",
          ur: "کے لیے / سے",
          hi: "के लिए",
          bn: "থেকে",
          tr: "için",
          id: "untuk",
          ar: "من أجل"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 8,
        arabic: "كُلِّ",
        transliteration: "kulli",
        root: "ك ل ل",
        lemma: "كُلّ",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "every",
          ur: "ہر",
          hi: "हर",
          bn: "সব",
          tr: "her türlü",
          id: "segala",
          ar: "كل"
        },
        grammarRole: "object of preposition",
        case: "genitive"
      },
      {
        position: 9,
        arabic: "أَمْرٍ",
        transliteration: "amr",
        root: "أ م ر",
        lemma: "أَمْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "matter / command",
          ur: "کام / معاملہ",
          hi: "काम / मामला",
          bn: "বিষয়",
          tr: "iş",
          id: "urusan",
          ar: "أمر وشأن"
        },
        grammarRole: "genitive (possessed)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["أَمَرَ (to command)", "أَمْر (command/matter)", "أَمِير (commander)"],
          frequency: 176
        }
      }
    ],
    dependencyStructure: "(تَنَزَّلُ)[verb] → (ٱلْمَلَٰٓئِكَةُ وَٱلرُّوحُ)[subject] → (فِيهَا)[location] → (بِإِذْنِ رَبِّهِم)[manner] → (مِّن كُلِّ أَمْرٍ)[purpose]"
  },

  5: {
    ayahNumber: 5,
    arabic: "سَلَٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ",
    translation: {
      en: "Peace it is until the emergence of dawn",
      ur: "سلامتی ہے وہ رات فجر کے طلوع ہونے تک",
      hi: "सलामती है वो रात फ़ज्र के तुलू होने तक",
      bn: "শান্তি, এটা ফজর উদিত হওয়া পর্যন্ত",
      tr: "O gece, tan yerinin ağarmasına kadar selâmettir",
      id: "Malam itu penuh kesejahteraan sampai terbit fajar"
    },
    words: [
      {
        position: 1,
        arabic: "سَلَٰمٌ",
        transliteration: "salaamun",
        root: "س ل م",
        lemma: "سَلَام",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "Peace",
          ur: "سلامتی",
          hi: "सलामती",
          bn: "শান্তি",
          tr: "selâmet",
          id: "kesejahteraan",
          ar: "سلام وأمان"
        },
        grammarRole: "predicate (fronted for emphasis)",
        case: "nominative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "Predicate fronted before subject for emphasis - 'PEACE it is'",
          ur: "تقدیم خبر - تاکید کے لیے 'سلامتی' پہلے آیا"
        },
        advanced: {
          rootFamily: ["سَلِمَ (to be safe)", "سَلَام (peace)", "إِسْلَام (submission)", "مُسْلِم (one who submits)"],
          frequency: 42,
          balagha: "The entire night is characterized as pure peace - no disturbance"
        }
      },
      {
        position: 2,
        arabic: "هِىَ",
        transliteration: "hiya",
        root: "N/A",
        lemma: "هِيَ",
        posTag: "PRON",
        posLabel: "PRON",
        meaning: {
          en: "it (is)",
          ur: "وہ ہے",
          hi: "वो है",
          bn: "এটা",
          tr: "o",
          id: "itu",
          ar: "هي"
        },
        grammarRole: "subject (referring to لَيْلَة القَدْر)",
        case: "nominative",
        features: {
          person: "3rd",
          gender: "feminine",
          number: "singular"
        }
      },
      {
        position: 3,
        arabic: "حَتَّىٰ",
        transliteration: "hattaa",
        root: "N/A",
        lemma: "حَتَّى",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "until",
          ur: "تک",
          hi: "तक",
          bn: "পর্যন্ত",
          tr: "... kadar",
          id: "sampai",
          ar: "حتى"
        },
        grammarRole: "preposition (time limit)",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "مَطْلَعِ",
        transliteration: "matla'i",
        root: "ط ل ع",
        lemma: "مَطْلَع",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "emergence / rising",
          ur: "طلوع",
          hi: "तुलू",
          bn: "উদয়",
          tr: "ağarması",
          id: "terbit",
          ar: "طلوع وبزوغ"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["طَلَعَ (to rise/appear)", "طُلُوع (rising)", "مَطْلَع (place/time of rising)"],
          frequency: 19
        }
      },
      {
        position: 5,
        arabic: "ٱلْفَجْرِ",
        transliteration: "al-fajr",
        root: "ف ج ر",
        lemma: "فَجْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the dawn",
          ur: "فجر",
          hi: "फ़ज्र",
          bn: "ফজর",
          tr: "tan yeri",
          id: "fajar",
          ar: "الفجر"
        },
        grammarRole: "genitive (possessed)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "Dawn marks the end of the blessed night - peace continues until light breaks",
          ur: "فجر رات کا خاتمہ - روشنی پھوٹنے تک سلامتی"
        },
        advanced: {
          rootFamily: ["فَجَرَ (to break open)", "فَجْر (dawn)", "تَفْجِير (explosion)", "فُجُور (immorality)"],
          frequency: 6,
          finalMessage: "The night of peace ends only when dawn breaks - then normal time resumes"
        }
      }
    ],
    dependencyStructure: "(سَلَٰمٌ)[predicate] → (هِىَ)[subject] → (حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ)[time-limit]"
  }
};

export default TREEBANK_DATA;
