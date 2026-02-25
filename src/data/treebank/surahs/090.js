/**
 * Surah Al-Balad (90) - Quranic Arabic Treebank Data
 * The City
 * Total Ayahs: 20
 * Revelation: Makki
 * Theme: Human struggle, the steep path of good deeds, two paths leading to success or failure
 */

export const TREEBANK_DATA = {
  surahId: 90,
  surahName: "Al-Balad",
  surahNameArabic: "البلد",
  totalAyahs: 20,
  totalWords: 82,
  revelationType: "Makki",
  theme: "Human beings are created in struggle (kabad); the path to success is the steep path ('aqabah) of freeing slaves, feeding the hungry, and encouraging patience and mercy",

  translation: {
    en: "The City - This surah addresses the Prophet ﷺ as a resident of Makkah, highlighting human struggle and the choice between two paths. The 'steep path' of goodness requires effort but leads to success.",
    ur: "شہر - یہ سورت نبی ﷺ کو مکہ کے باشندے کے طور پر مخاطب کرتی ہے، انسانی جدوجہد اور دو راستوں کے درمیان انتخاب کو اجاگر کرتی ہے۔",
    hi: "शहर - यह सूरह नबी ﷺ को मक्का के निवासी के रूप में संबोधित करती है, मानवीय संघर्ष और दो रास्तों के बीच चुनाव को उजागर करती है।",
    bn: "শহর - এই সূরা নবী ﷺ কে মক্কার বাসিন্দা হিসাবে সম্বোধন করে, মানব সংগ্রাম এবং দুটি পথের মধ্যে পছন্দকে তুলে ধরে।",
    tr: "Şehir - Bu sure Peygamber'e Mekke sakini olarak hitap eder, insan mücadelesini ve iki yol arasındaki seçimi vurgular.",
    id: "Negeri - Surah ini menyapa Nabi ﷺ sebagai penduduk Mekah, menyoroti perjuangan manusia dan pilihan antara dua jalan."
  },

  1: {
    ayahNumber: 1,
    arabic: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ",
    translation: {
      en: "I swear by this city",
      ur: "میں قسم کھاتا ہوں اس شہر کی",
      hi: "मैं क़सम खाता हूँ इस शहर की",
      bn: "আমি শপথ করি এই শহরের",
      tr: "Bu şehre yemin ederim",
      id: "Aku bersumpah dengan negeri ini"
    },
    words: [
      {
        position: 1,
        arabic: "لَا",
        transliteration: "Laa",
        root: "ل ا",
        lemma: "لَا",
        posTag: "NEG", posLabel: "NEG",
        meaning: {
          en: "No / (emphatic particle)",
          ur: "نہیں / (تاکیدی)",
          hi: "नहीं / (ज़ोर देने वाला)",
          bn: "না / (জোরদার)",
          tr: "Hayır / (vurgulu)",
          id: "Tidak / (penegas)",
          ar: "أُقْسِمُ (تَأْكِيد)"
        },
        grammarRole: "emphatic_particle",
        grammarExplanations: {
          en: "This 'laa' is for emphasis, not negation. 'Laa uqsimu' = 'I DO swear' (emphatic affirmation).",
          ur: "یہ 'لا' تاکید کے لیے ہے، نفی نہیں۔ 'لا اقسم' = 'میں ضرور قسم کھاتا ہوں' (تاکیدی اثبات)۔"
        },
        advanced: {
          linguisticMiracle: "Paradoxical construction: 'laa' (no) + 'uqsimu' (I swear) = emphatic oath",
          balagha: "This form appears 7 times in Quran - strongest form of oath"
        }
      },
      {
        position: 2,
        arabic: "أُقْسِمُ",
        transliteration: "uqsimu",
        root: "ق س م",
        lemma: "أَقْسَمَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "I swear",
          ur: "میں قسم کھاتا ہوں",
          hi: "मैं क़सम खाता हूँ",
          bn: "আমি শপথ করি",
          tr: "yemin ederim",
          id: "aku bersumpah",
          ar: "أَحْلِفُ"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form IV. Allah Himself swears - the highest form of oath.",
          ur: "فعل مضارع، باب افعال۔ اللہ خود قسم کھاتے ہیں - قسم کی اعلیٰ ترین شکل۔"
        },
        advanced: {
          verbForm: "IV - أَقْسَمَ (to swear)",
          rootFamily: ["قسم (oath/portion)", "قسمة (division)", "مقسم (divided)"],
          frequency: "36 times in various forms"
        }
      },
      {
        position: 3,
        arabic: "بِهَٰذَا",
        transliteration: "bi-hadhaa",
        root: "ه ذ ا",
        lemma: "هَٰذَا",
        posTag: "DEM", posLabel: "DEM",
        meaning: {
          en: "by this",
          ur: "اس کی",
          hi: "इसकी",
          bn: "এই",
          tr: "bu",
          id: "dengan ini",
          ar: "بِهَٰذَا"
        },
        grammarRole: "demonstrative_pronoun"
      },
      {
        position: 4,
        arabic: "الْبَلَدِ",
        transliteration: "al-baladi",
        root: "ب ل د",
        lemma: "بَلَد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the city (Makkah)",
          ur: "شہر (مکہ)",
          hi: "शहर (मक्का)",
          bn: "শহর (মক্কা)",
          tr: "şehir (Mekke)",
          id: "negeri (Mekah)",
          ar: "مَكَّة"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Genitive after preposition 'bi'. Refers to Makkah, the sacred city.",
          ur: "حرف جر 'ب' کے بعد مجرور۔ مکہ مکرمہ کی طرف اشارہ۔"
        },
        advanced: {
          rootFamily: ["بلد (city/country)", "بلدة (town)", "بلدي (local)"],
          frequency: "19 times in Quran",
          linguisticMiracle: "Al-Balad with definite article = THE city = Makkah, the most significant",
          memoryHook: "Balad = Beautiful Land/Domain"
        }
      }
    ],
    dependencyStructure: "لَا (emphatic) + أُقْسِمُ (verb) + بِهَٰذَا الْبَلَدِ (sworn object)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ",
    translation: {
      en: "And you (Muhammad) are free of restriction in this city",
      ur: "اور آپ اس شہر میں حلال ہیں",
      hi: "और आप इस शहर में हलाल हैं",
      bn: "এবং আপনি এই শহরে হালাল",
      tr: "Ve sen bu şehirde serbestsin",
      id: "Dan engkau (Muhammad) bebas di negeri ini",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَأَنتَ",
        transliteration: "wa-anta",
        root: "أ ن ت",
        lemma: "أَنْتَ",
        posTag: "PRON", posLabel: "PRON",
        meaning: {
          en: "And you",
          ur: "اور آپ",
          hi: "और आप",
          bn: "এবং আপনি",
          tr: "ve sen",
          id: "dan engkau",
          ar: "وَأَنْتَ"
        },
        grammarRole: "pronoun_nominative"
      },
      {
        position: 2,
        arabic: "حِلٌّ",
        transliteration: "hillun",
        root: "ح ل ل",
        lemma: "حِلّ",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "lawful/free of restriction",
          ur: "حلال/آزاد",
          hi: "हलाल/आज़ाद",
          bn: "হালাল/মুক্ত",
          tr: "serbest/helal",
          id: "halal/bebas",
          ar: "مُبَاح"
        },
        grammarRole: "noun_nominative",
        grammarExplanations: {
          en: "The Prophet is 'hill' (free of restriction) in Makkah - his enemies made his blood halal, OR prophecy of conquest when fighting becomes permissible.",
          ur: "نبی مکہ میں 'حل' (بغیر پابندی) ہیں - دشمنوں نے ان کا خون حلال کیا، یا فتح کی پیشگوئی جب لڑائی جائز ہوگی۔"
        },
        advanced: {
          rootFamily: ["حلال (lawful)", "حل (solution)", "محلل (one who makes lawful)", "إحلال (making lawful)"],
          frequency: "6 times",
          linguisticMiracle: "Dual meaning: (1) His enemies treat his blood as halal, (2) He will make war permissible at conquest",
          balagha: "This verse elevates the Prophet's status - the city is sworn by because HE is in it"
        }
      },
      {
        position: 3,
        arabic: "بِهَٰذَا",
        transliteration: "bi-hadhaa",
        root: "ه ذ ا",
        lemma: "هَٰذَا",
        posTag: "DEM", posLabel: "DEM",
        meaning: {
          en: "in this",
          ur: "اس میں",
          hi: "इसमें",
          bn: "এই",
          tr: "bu",
          id: "di ini",
          ar: "فِي هَٰذَا"
        },
        grammarRole: "demonstrative_pronoun"
      },
      {
        position: 4,
        arabic: "الْبَلَدِ",
        transliteration: "al-baladi",
        root: "ب ل د",
        lemma: "بَلَد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the city",
          ur: "شہر",
          hi: "शहर",
          bn: "শহর",
          tr: "şehir",
          id: "negeri",
          ar: "مَكَّة"
        },
        grammarRole: "noun_genitive"
      }
    ],
    dependencyStructure: "وَأَنتَ (subject) + حِلٌّ (predicate) + بِهَٰذَا الْبَلَدِ (locative)"
  },

  3: {
    ayahNumber: 3,
    arabic: "وَوَالِدٍ وَمَا وَلَدَ",
    translation: {
      en: "And by the father and that which he begot",
      ur: "اور والد کی قسم اور جو اولاد ہوئی",
      hi: "और वालिद की क़सम और जो औलाद हुई",
      bn: "এবং পিতার শপথ এবং যা তিনি জন্ম দিয়েছেন",
      tr: "Babaya ve onun soyuna yemin olsun",
      id: "Dan demi bapak dan anak yang dilahirkannya"
    },
    words: [
      {
        position: 1,
        arabic: "وَوَالِدٍ",
        transliteration: "wa-waalidin",
        root: "و ل د",
        lemma: "وَالِد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "And by the father/parent",
          ur: "اور والد کی",
          hi: "और वालिद की",
          bn: "এবং পিতার",
          tr: "babaya",
          id: "dan demi bapak",
          ar: "وَالْأَب"
        },
        grammarRole: "oath_particle_noun",
        grammarExplanations: {
          en: "Some say Adam, some say Ibrahim, some say any parent. Indefinite for universality.",
          ur: "کچھ کہتے ہیں آدم، کچھ ابراہیم، کچھ کوئی بھی والد۔ عالمگیریت کے لیے نکرہ۔"
        },
        advanced: {
          rootFamily: ["والد (parent)", "ولد (child)", "ولادة (birth)", "مولود (newborn)"],
          frequency: "4 times",
          balagha: "The parent-child relationship - fundamental human bond"
        }
      },
      {
        position: 2,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "REL", posLabel: "REL",
        meaning: {
          en: "and that which",
          ur: "اور جو",
          hi: "और जो",
          bn: "এবং যা",
          tr: "ve onun",
          id: "dan apa",
          ar: "وَالَّذِي"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 3,
        arabic: "وَلَدَ",
        transliteration: "walada",
        root: "و ل د",
        lemma: "وَلَدَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "he begot/fathered",
          ur: "پیدا کیا",
          hi: "पैदा किया",
          bn: "জন্ম দিয়েছেন",
          tr: "doğurduğu",
          id: "dilahirkan",
          ar: "أَنْجَبَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "The offspring of the parent - humanity that continues from one generation to the next.",
          ur: "والد کی اولاد - نسل انسانی جو ایک نسل سے دوسری تک جاری ہے۔"
        }
      }
    ],
    dependencyStructure: "وَوَالِدٍ (oath object) + وَمَا وَلَدَ (relative clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ",
    translation: {
      en: "We have certainly created man in hardship/struggle",
      ur: "بیشک ہم نے انسان کو مشقت میں پیدا کیا",
      hi: "बेशक हमने इंसान को मशक़्क़त में पैदा किया",
      bn: "নিশ্চয়ই আমরা মানুষকে কষ্টে সৃষ্টি করেছি",
      tr: "Şüphesiz biz insanı meşakkat içinde yarattık",
      id: "Sesungguhnya Kami telah menciptakan manusia dalam kesusahan"
    },
    words: [
      {
        position: 1,
        arabic: "لَقَدْ",
        transliteration: "la-qad",
        root: "ق د",
        lemma: "قَدْ",
        posTag: "CERT", posLabel: "CERT",
        meaning: {
          en: "Certainly/Indeed",
          ur: "یقیناً/بیشک",
          hi: "निश्चय ही/बेशक",
          bn: "নিশ্চয়ই",
          tr: "şüphesiz",
          id: "sesungguhnya",
          ar: "تَأْكِيد"
        },
        grammarRole: "certainty_particle",
        grammarExplanations: {
          en: "Lam of emphasis + qad = double emphasis. This is the answer to the oaths - the truth being affirmed.",
          ur: "لام تاکید + قد = دوہری تاکید۔ یہ قسموں کا جواب ہے - سچائی کی تصدیق۔"
        }
      },
      {
        position: 2,
        arabic: "خَلَقْنَا",
        transliteration: "khalaqnaa",
        root: "خ ل ق",
        lemma: "خَلَقَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "We created",
          ur: "ہم نے پیدا کیا",
          hi: "हमने पैदा किया",
          bn: "আমরা সৃষ্টি করেছি",
          tr: "yarattık",
          id: "Kami menciptakan",
          ar: "أَوْجَدْنَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb with 'naa' (We/Royal). Allah is the Creator of mankind.",
          ur: "فعل ماضی مع 'نا' (ہم/شاہی)۔ اللہ انسانیت کا خالق ہے۔"
        }
      },
      {
        position: 3,
        arabic: "الْإِنسَانَ",
        transliteration: "al-insaana",
        root: "أ ن س",
        lemma: "إِنْسَان",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "man/humankind",
          ur: "انسان",
          hi: "इंसान",
          bn: "মানুষ",
          tr: "insan",
          id: "manusia",
          ar: "الْبَشَر"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "The human being - with definite article, meaning the human species generically.",
          ur: "انسان - الف لام کے ساتھ، مطلب عام طور پر نوع انسانی۔"
        },
        advanced: {
          rootFamily: ["إنس (humans)", "أنس (intimacy)", "إنسي (human/jinn)"],
          frequency: "65 times"
        }
      },
      {
        position: 4,
        arabic: "فِي",
        transliteration: "fee",
        root: "ف ي",
        lemma: "فِي",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "in",
          ur: "میں",
          hi: "में",
          bn: "মধ্যে",
          tr: "içinde",
          id: "dalam",
          ar: "فِي"
        },
        grammarRole: "preposition"
      },
      {
        position: 5,
        arabic: "كَبَدٍ",
        transliteration: "kabadin",
        root: "ك ب د",
        lemma: "كَبَد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "hardship/struggle/toil",
          ur: "مشقت/جدوجہد",
          hi: "मशक़्क़त/संघर्ष",
          bn: "কষ্ট/সংগ্রাম",
          tr: "meşakkat/zorluk",
          id: "kesusahan/perjuangan",
          ar: "مَشَقَّة"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Kabad = hardship, struggle, toil. Life is inherently difficult - from birth to death, struggle is constant.",
          ur: "کبد = مشقت، جدوجہد، محنت۔ زندگی فطری طور پر مشکل ہے - پیدائش سے موت تک جدوجہد مسلسل ہے۔"
        },
        advanced: {
          rootFamily: ["كبد (liver/core)", "كابد (to endure)", "مكابدة (endurance)"],
          frequency: "1 time in Quran (unique)",
          linguisticMiracle: "Kabad also means 'liver' - the organ of endurance. Life is 'in the liver' of struggle",
          balagha: "Central truth after oaths: struggle is human nature, not punishment",
          memoryHook: "Kabad = Core struggle, like the liver is the body's workhorse"
        }
      }
    ],
    dependencyStructure: "لَقَدْ (emphasis) + خَلَقْنَا (verb) + الْإِنسَانَ (object) + فِي كَبَدٍ (state) - THE MAIN THESIS",
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",
    translation: {
      en: "Does he think that no one can overcome him?",
      ur: "کیا وہ سمجھتا ہے کہ کوئی اس پر قابو نہیں پا سکتا",
      hi: "क्या वह समझता है कि कोई उस पर क़ाबू नहीं पा सकता",
      bn: "সে কি মনে করে যে কেউ তাকে পরাস্ত করতে পারবে না",
      tr: "Kimsenin kendisine güç yetiremeyeceğini mi sanıyor",
      id: "Apakah dia mengira bahwa tidak ada seorangpun yang berkuasa atasnya"
    },
    words: [
      {
        position: 1,
        arabic: "أَيَحْسَبُ",
        transliteration: "a-yahsabu",
        root: "ح س ب",
        lemma: "حَسِبَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "Does he think",
          ur: "کیا وہ سمجھتا ہے",
          hi: "क्या वह समझता है",
          bn: "সে কি মনে করে",
          tr: "sanıyor mu",
          id: "apakah dia mengira",
          ar: "أَيَظُنُّ"
        },
        grammarRole: "verb_imperfect_interrogative",
        grammarExplanations: {
          en: "Hamza of interrogation + imperfect verb. Rhetorical question challenging human arrogance.",
          ur: "ہمزہ استفہام + فعل مضارع۔ انسانی تکبر کو چیلنج کرنے والا سوال۔"
        },
        advanced: {
          verbForm: "I - حَسِبَ (to think, suppose)",
          rootFamily: ["حساب (account)", "حسب (according to)", "محاسبة (accountability)"],
          frequency: "42 times in various forms"
        }
      },
      {
        position: 2,
        arabic: "أَن",
        transliteration: "an",
        root: "أ ن",
        lemma: "أَنْ",
        posTag: "SUB", posLabel: "SUB",
        meaning: {
          en: "that",
          ur: "کہ",
          hi: "कि",
          bn: "যে",
          tr: "ki",
          id: "bahwa",
          ar: "أَنَّ"
        },
        grammarRole: "subordinating_conjunction"
      },
      {
        position: 3,
        arabic: "لَّن",
        transliteration: "lan",
        root: "ل ن",
        lemma: "لَنْ",
        posTag: "NEG", posLabel: "NEG",
        meaning: {
          en: "never will",
          ur: "کبھی نہیں",
          hi: "कभी नहीं",
          bn: "কখনই না",
          tr: "asla",
          id: "tidak akan pernah",
          ar: "لَنْ أَبَدًا"
        },
        grammarRole: "negative_particle",
        grammarExplanations: {
          en: "Strong future negation. The human falsely believes he will NEVER be overpowered.",
          ur: "مستقبل کی سخت نفی۔ انسان غلط طور پر یقین رکھتا ہے کہ کبھی قابو نہیں ہوگا۔"
        }
      },
      {
        position: 4,
        arabic: "يَقْدِرَ",
        transliteration: "yaqdira",
        root: "ق د ر",
        lemma: "قَدَرَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "can overcome/have power",
          ur: "قابو پا سکے",
          hi: "क़ाबू पा सके",
          bn: "পারবে",
          tr: "güç yetirir",
          id: "berkuasa",
          ar: "يَغْلِبُ"
        },
        grammarRole: "verb_subjunctive",
        grammarExplanations: {
          en: "Subjunctive after 'lan'. From same root as qadr (power, destiny).",
          ur: "'لن' کے بعد منصوب۔ قدر (طاقت، تقدیر) کے ہم جذر۔"
        },
        advanced: {
          verbForm: "I - قَدَرَ (to have power, decree)",
          rootFamily: ["قدرة (power)", "قادر (capable)", "تقدير (destiny)", "مقدار (amount)"],
          frequency: "132 times in various forms"
        }
      },
      {
        position: 5,
        arabic: "عَلَيْهِ",
        transliteration: "'alayhi",
        root: "ع ل و",
        lemma: "عَلَى",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "over him",
          ur: "اس پر",
          hi: "उस पर",
          bn: "তার উপর",
          tr: "ona",
          id: "atasnya",
          ar: "عَلَيْهِ"
        },
        grammarRole: "preposition_pronoun"
      },
      {
        position: 6,
        arabic: "أَحَدٌ",
        transliteration: "ahadun",
        root: "أ ح د",
        lemma: "أَحَد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "anyone",
          ur: "کوئی",
          hi: "कोई",
          bn: "কেউ",
          tr: "kimse",
          id: "seorangpun",
          ar: "شَخْص"
        },
        grammarRole: "noun_nominative"
      }
    ],
    dependencyStructure: "أَيَحْسَبُ (rhetorical question) + أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ (content)",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "يَقُولُ أَهْلَكْتُ مَالًا لُّبَدًا",
    translation: {
      en: "He says, 'I have spent wealth in abundance'",
      ur: "وہ کہتا ہے میں نے بہت سا مال خرچ کر دیا",
      hi: "वह कहता है मैंने बहुत सा माल ख़र्च कर दिया",
      bn: "সে বলে আমি প্রচুর সম্পদ ব্যয় করেছি",
      tr: "O, 'Yığınla mal harcadım' diyor",
      id: "Dia berkata, 'Aku telah menghabiskan harta yang banyak'",
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "يَقُولُ",
        transliteration: "yaqoolu",
        root: "ق و ل",
        lemma: "قَالَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "He says",
          ur: "وہ کہتا ہے",
          hi: "वह कहता है",
          bn: "সে বলে",
          tr: "diyor",
          id: "dia berkata",
          ar: "يَتَكَلَّم"
        },
        grammarRole: "verb_imperfect"
      },
      {
        position: 2,
        arabic: "أَهْلَكْتُ",
        transliteration: "ahlaktu",
        root: "ه ل ك",
        lemma: "أَهْلَكَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "I have spent/destroyed",
          ur: "میں نے خرچ کر دیا",
          hi: "मैंने ख़र्च कर दिया",
          bn: "আমি ব্যয় করেছি",
          tr: "harcadım",
          id: "aku telah menghabiskan",
          ar: "أَنْفَقْتُ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form IV. Ahlaka normally means 'to destroy' - he 'destroyed' wealth in spending.",
          ur: "فعل ماضی، باب افعال۔ اہلک عام طور پر 'تباہ کرنا' ہے - اس نے خرچ میں مال 'تباہ' کیا۔"
        },
        advanced: {
          verbForm: "IV - أَهْلَكَ (to destroy, spend excessively)",
          rootFamily: ["هلاك (destruction)", "هالك (perishing)", "مهلك (destructive)"],
          frequency: "67 times in various forms",
          linguisticMiracle: "Using 'destroy' for spending shows his attitude: wasteful, boastful, excessive",
          balagha: "He brags about destroying wealth - but does he think Allah doesn't see?"
        }
      },
      {
        position: 3,
        arabic: "مَالًا",
        transliteration: "maalan",
        root: "م و ل",
        lemma: "مَال",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "wealth",
          ur: "مال",
          hi: "माल",
          bn: "সম্পদ",
          tr: "mal",
          id: "harta",
          ar: "ثَرْوَة"
        },
        grammarRole: "noun_accusative"
      },
      {
        position: 4,
        arabic: "لُّبَدًا",
        transliteration: "lubadan",
        root: "ل ب د",
        lemma: "لُبَد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "in abundance/heaps",
          ur: "ڈھیروں",
          hi: "ढेरों",
          bn: "প্রচুর",
          tr: "yığınla",
          id: "yang banyak",
          ar: "كَثِيرًا"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Lubad = heaped up, piled. Wealth so abundant it forms heaps. Boasting about quantity.",
          ur: "لبد = ڈھیر لگا ہوا۔ اتنی دولت کہ ڈھیر بن جائے۔ مقدار پر فخر۔"
        },
        advanced: {
          rootFamily: ["لبد (to pile up)", "لبدة (felt - compressed material)", "ملتبد (heaped)"],
          frequency: "1 time in Quran (unique)",
          memoryHook: "Lubad = Lots Bundled And Dumped"
        }
      }
    ],
    dependencyStructure: "يَقُولُ (verb) + أَهْلَكْتُ مَالًا لُّبَدًا (direct speech)"
  },

  7: {
    ayahNumber: 7,
    arabic: "أَيَحْسَبُ أَن لَّمْ يَرَهُ أَحَدٌ",
    translation: {
      en: "Does he think that no one has seen him?",
      ur: "کیا وہ سمجھتا ہے کہ کسی نے اسے نہیں دیکھا",
      hi: "क्या वह समझता है कि किसी ने उसे नहीं देखा",
      bn: "সে কি মনে করে যে কেউ তাকে দেখেনি",
      tr: "Kimsenin kendisini görmediğini mi sanıyor",
      id: "Apakah dia mengira bahwa tidak ada seorangpun yang melihatnya"
    },
    words: [
      {
        position: 1,
        arabic: "أَيَحْسَبُ",
        transliteration: "a-yahsabu",
        root: "ح س ب",
        lemma: "حَسِبَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "Does he think",
          ur: "کیا وہ سمجھتا ہے",
          hi: "क्या वह समझता है",
          bn: "সে কি মনে করে",
          tr: "sanıyor mu",
          id: "apakah dia mengira",
          ar: "أَيَظُنُّ"
        },
        grammarRole: "verb_imperfect_interrogative"
      },
      {
        position: 2,
        arabic: "أَن",
        transliteration: "an",
        root: "أ ن",
        lemma: "أَنْ",
        posTag: "SUB", posLabel: "SUB",
        meaning: {
          en: "that",
          ur: "کہ",
          hi: "कि",
          bn: "যে",
          tr: "ki",
          id: "bahwa",
          ar: "أَنَّ"
        },
        grammarRole: "subordinating_conjunction"
      },
      {
        position: 3,
        arabic: "لَّمْ",
        transliteration: "lam",
        root: "ل م",
        lemma: "لَمْ",
        posTag: "NEG", posLabel: "NEG",
        meaning: {
          en: "has not",
          ur: "نہیں",
          hi: "नहीं",
          bn: "না",
          tr: "(olumsuzluk)",
          id: "tidak",
          ar: "نَفْي"
        },
        grammarRole: "negative_particle"
      },
      {
        position: 4,
        arabic: "يَرَهُ",
        transliteration: "yarahu",
        root: "ر أ ي",
        lemma: "رَأَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "has seen him",
          ur: "دیکھا اسے",
          hi: "देखा उसे",
          bn: "দেখেছে তাকে",
          tr: "görmüş",
          id: "melihatnya",
          ar: "نَظَرَ إِلَيْهِ"
        },
        grammarRole: "verb_jussive",
        grammarExplanations: {
          en: "Jussive after 'lam'. Does he think Allah hasn't seen his wasteful spending?",
          ur: "مجزوم 'لم' کے بعد۔ کیا وہ سمجھتا ہے اللہ نے اس کا فضول خرچ نہیں دیکھا؟"
        }
      },
      {
        position: 5,
        arabic: "أَحَدٌ",
        transliteration: "ahadun",
        root: "أ ح د",
        lemma: "أَحَد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "anyone",
          ur: "کوئی",
          hi: "कोई",
          bn: "কেউ",
          tr: "kimse",
          id: "seorangpun",
          ar: "شَخْص"
        },
        grammarRole: "noun_nominative"
      }
    ],
    dependencyStructure: "أَيَحْسَبُ (rhetorical question) + أَن لَّمْ يَرَهُ أَحَدٌ (content)",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'نفی + فعل' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ",
    translation: {
      en: "Have We not made for him two eyes",
      ur: "کیا ہم نے اسے دو آنکھیں نہیں دیں",
      hi: "क्या हमने उसे दो आँखें नहीं दीं",
      bn: "আমরা কি তাকে দুটি চোখ দেইনি",
      tr: "Biz ona iki göz vermedik mi",
      id: "Bukankah Kami telah memberikan kepadanya dua mata"
    },
    words: [
      {
        position: 1,
        arabic: "أَلَمْ",
        transliteration: "a-lam",
        root: "ل م",
        lemma: "لَمْ",
        posTag: "NEG", posLabel: "NEG",
        meaning: {
          en: "Have not / Did not",
          ur: "کیا نہیں",
          hi: "क्या नहीं",
          bn: "কি না",
          tr: "...mi",
          id: "bukankah",
          ar: "أَلَمْ نَفْعَل"
        },
        grammarRole: "negative_interrogative",
        grammarExplanations: {
          en: "Hamza + lam of negation. Rhetorical question expecting affirmative answer: Of course We did!",
          ur: "ہمزہ + لام نفی۔ بلاغی سوال جس کا جواب اثبات میں: ہاں بالکل!"
        }
      },
      {
        position: 2,
        arabic: "نَجْعَل",
        transliteration: "naj'al",
        root: "ج ع ل",
        lemma: "جَعَلَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "We made/gave",
          ur: "ہم نے دیا",
          hi: "हमने दिया",
          bn: "আমরা দিয়েছি",
          tr: "verdik",
          id: "Kami memberikan",
          ar: "خَلَقْنَا"
        },
        grammarRole: "verb_jussive"
      },
      {
        position: 3,
        arabic: "لَّهُ",
        transliteration: "lahu",
        root: "ل",
        lemma: "لِ",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "for him",
          ur: "اسے",
          hi: "उसे",
          bn: "তাকে",
          tr: "ona",
          id: "kepadanya",
          ar: "لَهُ"
        },
        grammarRole: "preposition_pronoun"
      },
      {
        position: 4,
        arabic: "عَيْنَيْنِ",
        transliteration: "'aynayn",
        root: "ع ي ن",
        lemma: "عَيْن",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "two eyes",
          ur: "دو آنکھیں",
          hi: "दो आँखें",
          bn: "দুটি চোখ",
          tr: "iki göz",
          id: "dua mata",
          ar: "عَيْنَان"
        },
        grammarRole: "noun_dual_accusative",
        grammarExplanations: {
          en: "Dual form (اثنان). Eyes to see truth - first of divine blessings mentioned.",
          ur: "صیغہ تثنیہ۔ سچائی دیکھنے کی آنکھیں - پہلی الٰہی نعمت کا ذکر۔"
        },
        advanced: {
          rootFamily: ["عين (eye/spring)", "معاينة (observation)", "عيان (eyewitness)"],
          frequency: "65 times in various forms",
          balagha: "Eyes: ability to see physical AND spiritual truth"
        }
      }
    ],
    dependencyStructure: "أَلَمْ (rhetorical) + نَجْعَل (verb) + لَّهُ (beneficiary) + عَيْنَيْنِ (object)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "وَلِسَانًا وَشَفَتَيْنِ",
    translation: {
      en: "And a tongue and two lips",
      ur: "اور زبان اور دو ہونٹ",
      hi: "और ज़बान और दो होंठ",
      bn: "এবং একটি জিহ্বা ও দুটি ঠোঁট",
      tr: "Bir dil ve iki dudak",
      id: "Dan lidah serta dua bibir",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَلِسَانًا",
        transliteration: "wa-lisaanan",
        root: "ل س ن",
        lemma: "لِسَان",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "And a tongue",
          ur: "اور زبان",
          hi: "और ज़बान",
          bn: "এবং জিহ্বা",
          tr: "bir dil",
          id: "dan lidah",
          ar: "اللِّسَان"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "The tongue for speech - ability to communicate, articulate truth, and praise Allah.",
          ur: "بولنے کے لیے زبان - بات چیت کرنے، سچائی بیان کرنے اور اللہ کی حمد کرنے کی صلاحیت۔"
        },
        advanced: {
          rootFamily: ["لسان (tongue/language)", "لسني (linguistic)"],
          frequency: "25 times",
          memoryHook: "Lisaan = Language tool"
        }
      },
      {
        position: 2,
        arabic: "وَشَفَتَيْنِ",
        transliteration: "wa-shafatayn",
        root: "ش ف ه",
        lemma: "شَفَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "and two lips",
          ur: "اور دو ہونٹ",
          hi: "और दो होंठ",
          bn: "এবং দুটি ঠোঁট",
          tr: "iki dudak",
          id: "dan dua bibir",
          ar: "الشَّفَتَان"
        },
        grammarRole: "noun_dual_accusative",
        grammarExplanations: {
          en: "Dual form. Lips that shape speech - enabling clear articulation.",
          ur: "صیغہ تثنیہ۔ ہونٹ جو بولی کو شکل دیتے ہیں - واضح تلفظ ممکن بناتے ہیں۔"
        },
        advanced: {
          rootFamily: ["شفة (lip)", "شفاه (lips)", "مشافهة (oral communication)"],
          frequency: "2 times",
          balagha: "Eyes, tongue, lips - tools for receiving and expressing truth"
        }
      }
    ],
    dependencyStructure: "وَلِسَانًا (object) + وَشَفَتَيْنِ (object)"
  },

  10: {
    ayahNumber: 10,
    arabic: "وَهَدَيْنَاهُ النَّجْدَيْنِ",
    translation: {
      en: "And shown him the two ways",
      ur: "اور ہم نے اسے دونوں راستے دکھائے",
      hi: "और हमने उसे दोनों रास्ते दिखाए",
      bn: "এবং আমরা তাকে দুটি পথ দেখিয়েছি",
      tr: "Ve ona iki yolu göstermedik mi",
      id: "Dan Kami telah menunjukkan kepadanya dua jalan",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَهَدَيْنَاهُ",
        transliteration: "wa-hadaynaahu",
        root: "ه د ي",
        lemma: "هَدَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "And We guided him / showed him",
          ur: "اور ہم نے اسے دکھایا",
          hi: "और हमने उसे दिखाया",
          bn: "এবং আমরা তাকে দেখিয়েছি",
          tr: "gösterdik",
          id: "Kami telah menunjukkan",
          ar: "وَأَرْشَدْنَاهُ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb with 'naa' (We) + hu (him). Allah guided/showed him both paths.",
          ur: "فعل ماضی مع 'نا' (ہم) + ہ (اسے)۔ اللہ نے اسے دونوں راستے دکھائے۔"
        },
        advanced: {
          verbForm: "I - هَدَى (to guide)",
          rootFamily: ["هدى (guidance)", "هادي (guide)", "هداية (guidance)", "مهتدي (guided)"],
          frequency: "316 times in various forms"
        }
      },
      {
        position: 2,
        arabic: "النَّجْدَيْنِ",
        transliteration: "an-najdayn",
        root: "ن ج د",
        lemma: "نَجْد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the two ways/paths",
          ur: "دونوں راستے",
          hi: "दोनों रास्ते",
          bn: "দুটি পথ",
          tr: "iki yol",
          id: "dua jalan",
          ar: "الطَّرِيقَيْن"
        },
        grammarRole: "noun_dual_accusative",
        grammarExplanations: {
          en: "Dual form. Najd = elevated road, clear path. The two najds: path of good and path of evil.",
          ur: "صیغہ تثنیہ۔ نجد = بلند راستہ، واضح راستہ۔ دو نجد: نیکی کا راستہ اور برائی کا راستہ۔"
        },
        advanced: {
          rootFamily: ["نجد (highland)", "نجدة (help)", "مناجد (helper)"],
          frequency: "2 times",
          linguisticMiracle: "Najd = high ground, clear road. Both paths are visible, elevated for choice",
          balagha: "This connects to Surah 91:8 - inspired with fujoor and taqwa",
          memoryHook: "Najdayn = Two Navigable Journeys (clear paths)"
        }
      }
    ],
    dependencyStructure: "وَهَدَيْنَاهُ (verb+object) + النَّجْدَيْنِ (second object)"
  },

  11: {
    ayahNumber: 11,
    arabic: "فَلَا اقْتَحَمَ الْعَقَبَةَ",
    translation: {
      en: "But he has not attempted the steep path",
      ur: "پھر اس نے گھاٹی میں داخل ہونے کی کوشش نہیں کی",
      hi: "फिर उसने घाटी में दाख़िल होने की कोशिश नहीं की",
      bn: "কিন্তু সে দুর্গম পথে প্রবেশ করেনি",
      tr: "Fakat o sarp yokuşu aşmaya çalışmadı",
      id: "Tetapi dia tidak menempuh jalan yang mendaki"
    },
    words: [
      {
        position: 1,
        arabic: "فَلَا",
        transliteration: "fa-laa",
        root: "ل ا",
        lemma: "لَا",
        posTag: "NEG", posLabel: "NEG",
        meaning: {
          en: "But not / Yet not",
          ur: "پھر نہیں",
          hi: "फिर नहीं",
          bn: "কিন্তু না",
          tr: "fakat",
          id: "tetapi tidak",
          ar: "وَلَمْ"
        },
        grammarRole: "negative_particle",
        grammarExplanations: {
          en: "Fa (result) + laa (negation). Despite all blessings, he did NOT take the steep path.",
          ur: "فا (نتیجہ) + لا (نفی)۔ تمام نعمتوں کے باوجود، اس نے کٹھن راستہ نہیں لیا۔"
        }
      },
      {
        position: 2,
        arabic: "اقْتَحَمَ",
        transliteration: "iqtahama",
        root: "ق ح م",
        lemma: "اِقْتَحَمَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "he attempted/rushed into",
          ur: "داخل ہوا/کوشش کی",
          hi: "दाख़िल हुआ/कोशिश की",
          bn: "প্রবেশ করল/চেষ্টা করল",
          tr: "atıldı/girişti",
          id: "menempuh/memasuki",
          ar: "دَخَلَ بِقُوَّة"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form VIII. Iqtahama = to plunge into difficulty, rush into with determination.",
          ur: "فعل ماضی، باب افتعال۔ اقتحم = مشکل میں کود پڑنا، عزم کے ساتھ داخل ہونا۔"
        },
        advanced: {
          verbForm: "VIII - اِقْتَحَمَ (to plunge into, rush into)",
          rootFamily: ["قحم (to rush into)", "اقتحام (assault/plunging)"],
          frequency: "1 time in Quran (unique)",
          linguisticMiracle: "Form VIII = reflexive effort, self-motivated action. He CHOSE not to enter",
          balagha: "The 'aqabah requires active effort - not passive acceptance"
        }
      },
      {
        position: 3,
        arabic: "الْعَقَبَةَ",
        transliteration: "al-'aqabata",
        root: "ع ق ب",
        lemma: "عَقَبَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the steep path/mountain pass",
          ur: "گھاٹی/کٹھن راستہ",
          hi: "घाटी/कठिन रास्ता",
          bn: "দুর্গম পথ",
          tr: "sarp yokuş",
          id: "jalan mendaki",
          ar: "الطَّرِيق الصَّعْب"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "'Aqabah = a steep mountain pass, difficult to climb. Metaphor for the challenging path of righteousness.",
          ur: "عقبہ = کھڑی پہاڑی گھاٹی، چڑھنا مشکل۔ نیکی کے مشکل راستے کا استعارہ۔"
        },
        advanced: {
          rootFamily: ["عقب (heel/end)", "عقبى (consequence)", "عقاب (punishment/eagle)"],
          frequency: "1 time as 'aqabah (unique)",
          linguisticMiracle: "Same root as 'uqbaa (consequence) in 91:15 - the steep path leads to good consequence",
          balagha: "Central metaphor of the surah - the path of good deeds is difficult but rewarding",
          memoryHook: "'Aqabah = Ascent Quite Arduously But Admirably"
        }
      }
    ],
    dependencyStructure: "فَلَا (negative result) + اقْتَحَمَ (verb) + الْعَقَبَةَ (object) - INTRODUCING THE STEEP PATH",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "وَمَا أَدْرَاكَ مَا الْعَقَبَةُ",
    translation: {
      en: "And what will make you know what the steep path is?",
      ur: "اور آپ کو کیا معلوم کہ وہ گھاٹی کیا ہے",
      hi: "और आपको क्या मालूम कि वह घाटी क्या है",
      bn: "এবং আপনাকে কে জানাবে এই দুর্গম পথ কী",
      tr: "Sarp yokuşun ne olduğunu sana ne bildirdi",
      id: "Dan tahukah kamu apakah jalan yang mendaki itu",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "INT", posLabel: "INT",
        meaning: {
          en: "And what",
          ur: "اور کیا",
          hi: "और क्या",
          bn: "এবং কী",
          tr: "ve ne",
          id: "dan apakah",
          ar: "وَمَاذَا"
        },
        grammarRole: "interrogative"
      },
      {
        position: 2,
        arabic: "أَدْرَاكَ",
        transliteration: "adraaka",
        root: "د ر ي",
        lemma: "أَدْرَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "will make you know",
          ur: "آپ کو بتائے",
          hi: "आपको बताए",
          bn: "জানাবে",
          tr: "bildirdi",
          id: "memberitahumu",
          ar: "أَعْلَمَكَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form IV. Classic Quranic formula to emphasize importance of what follows.",
          ur: "فعل ماضی، باب افعال۔ کلاسک قرآنی فارمولا آنے والی بات کی اہمیت پر زور دیتا ہے۔"
        },
        advanced: {
          verbForm: "IV - أَدْرَى (to make know)",
          rootFamily: ["درى (to know)", "دراية (knowledge)", "دري (knowledgeable)"],
          frequency: "13 times in this formula",
          balagha: "'Maa adraaka' signals something grand is about to be revealed"
        }
      },
      {
        position: 3,
        arabic: "مَا",
        transliteration: "maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "INT", posLabel: "INT",
        meaning: {
          en: "what",
          ur: "کیا",
          hi: "क्या",
          bn: "কী",
          tr: "ne",
          id: "apakah",
          ar: "مَا هِيَ"
        },
        grammarRole: "interrogative"
      },
      {
        position: 4,
        arabic: "الْعَقَبَةُ",
        transliteration: "al-'aqabatu",
        root: "ع ق ب",
        lemma: "عَقَبَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the steep path",
          ur: "گھاٹی",
          hi: "घाटी",
          bn: "দুর্গম পথ",
          tr: "sarp yokuş",
          id: "jalan mendaki",
          ar: "الطَّرِيق الصَّعْب"
        },
        grammarRole: "noun_nominative"
      }
    ],
    dependencyStructure: "وَمَا أَدْرَاكَ (rhetorical formula) + مَا الْعَقَبَةُ (subject question)"
  },

  13: {
    ayahNumber: 13,
    arabic: "فَكُّ رَقَبَةٍ",
    translation: {
      en: "It is the freeing of a slave",
      ur: "گردن چھڑانا (غلام آزاد کرنا)",
      hi: "गर्दन छुड़ाना (ग़ुलाम आज़ाद करना)",
      bn: "দাস মুক্ত করা",
      tr: "Bir köle azat etmektir",
      id: "Yaitu memerdekakan hamba sahaya",
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "فَكُّ",
        transliteration: "fakku",
        root: "ف ك ك",
        lemma: "فَكّ",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "freeing/releasing",
          ur: "چھڑانا/آزاد کرنا",
          hi: "छुड़ाना/आज़ाद करना",
          bn: "মুক্ত করা",
          tr: "azat etmek",
          id: "memerdekakan",
          ar: "تَحْرِير"
        },
        grammarRole: "verbal_noun",
        grammarExplanations: {
          en: "Verbal noun (masdar). Fakk = to untie, release, free. First component of the 'aqabah.",
          ur: "مصدر۔ فک = کھولنا، چھوڑنا، آزاد کرنا۔ عقبہ کا پہلا جزو۔"
        },
        advanced: {
          rootFamily: ["فك (to untie)", "انفكاك (release)", "مفكوك (released)"],
          frequency: "2 times",
          linguisticMiracle: "Fakk = untying bonds - literal liberation",
          balagha: "First act of 'aqabah: freeing others from bondage"
        }
      },
      {
        position: 2,
        arabic: "رَقَبَةٍ",
        transliteration: "raqabatin",
        root: "ر ق ب",
        lemma: "رَقَبَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "a neck (=slave)",
          ur: "گردن (=غلام)",
          hi: "गर्दन (=ग़ुलाम)",
          bn: "ঘাড় (=দাস)",
          tr: "köle",
          id: "hamba sahaya",
          ar: "عَبْد"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Raqabah = neck, idiomatically means a slave (one whose neck is under bondage).",
          ur: "رقبہ = گردن، محاورتاً غلام (جس کی گردن بندھی ہے)۔"
        },
        advanced: {
          rootFamily: ["رقبة (neck)", "رقيب (watchful)", "مرقبة (watchtower)"],
          frequency: "8 times",
          linguisticMiracle: "Raqabah (neck) symbolizes the whole person - freeing one neck frees one soul",
          memoryHook: "Raqabah = Released neck from bondage"
        }
      }
    ],
    dependencyStructure: "فَكُّ رَقَبَةٍ (predicate - answer to 'what is the 'aqabah')"
  },

  14: {
    ayahNumber: 14,
    arabic: "أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ",
    translation: {
      en: "Or feeding on a day of severe hunger",
      ur: "یا بھوک کے دن کھانا کھلانا",
      hi: "या भूख के दिन खाना खिलाना",
      bn: "অথবা ক্ষুধার দিনে খাওয়ানো",
      tr: "Yahut kıtlık gününde yemek yedirmektir",
      id: "Atau memberi makan pada hari kelaparan"
    },
    words: [
      {
        position: 1,
        arabic: "أَوْ",
        transliteration: "aw",
        root: "أ و",
        lemma: "أَوْ",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "Or",
          ur: "یا",
          hi: "या",
          bn: "অথবা",
          tr: "yahut",
          id: "atau",
          ar: "أَوْ"
        },
        grammarRole: "disjunctive_conjunction"
      },
      {
        position: 2,
        arabic: "إِطْعَامٌ",
        transliteration: "it'aamun",
        root: "ط ع م",
        lemma: "إِطْعَام",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "feeding",
          ur: "کھانا کھلانا",
          hi: "खाना खिलाना",
          bn: "খাওয়ানো",
          tr: "yedirmek",
          id: "memberi makan",
          ar: "تَقْدِيم الطَّعَام"
        },
        grammarRole: "verbal_noun",
        grammarExplanations: {
          en: "Verbal noun, Form IV. Feeding others - second component of the 'aqabah.",
          ur: "مصدر، باب افعال۔ دوسروں کو کھلانا - عقبہ کا دوسرا جزو۔"
        },
        advanced: {
          verbForm: "IV - أَطْعَمَ (to feed)",
          rootFamily: ["طعام (food)", "طعم (taste)", "مطعم (restaurant/feeder)"],
          frequency: "27 times in various forms"
        }
      },
      {
        position: 3,
        arabic: "فِي",
        transliteration: "fee",
        root: "ف ي",
        lemma: "فِي",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "on/in",
          ur: "میں",
          hi: "में",
          bn: "মধ্যে",
          tr: "gününde",
          id: "pada",
          ar: "فِي"
        },
        grammarRole: "preposition"
      },
      {
        position: 4,
        arabic: "يَوْمٍ",
        transliteration: "yawmin",
        root: "ي و م",
        lemma: "يَوْم",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "a day",
          ur: "دن",
          hi: "दिन",
          bn: "দিন",
          tr: "gün",
          id: "hari",
          ar: "يَوْم"
        },
        grammarRole: "noun_genitive"
      },
      {
        position: 5,
        arabic: "ذِي",
        transliteration: "dhee",
        root: "ذ و",
        lemma: "ذُو",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "of/possessing",
          ur: "والے",
          hi: "वाले",
          bn: "সহ",
          tr: "sahip",
          id: "yang memiliki",
          ar: "صَاحِب"
        },
        grammarRole: "noun_genitive"
      },
      {
        position: 6,
        arabic: "مَسْغَبَةٍ",
        transliteration: "masghabatin",
        root: "س غ ب",
        lemma: "مَسْغَبَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "severe hunger/famine",
          ur: "شدید بھوک",
          hi: "शदीद भूख",
          bn: "তীব্র ক্ষুধা",
          tr: "kıtlık",
          id: "kelaparan",
          ar: "جُوع شَدِيد"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Masghabah = severe hunger, famine. Feeding during hardship is more valuable than abundance.",
          ur: "مسغبہ = شدید بھوک، قحط۔ تنگی میں کھلانا فراوانی سے زیادہ قیمتی ہے۔"
        },
        advanced: {
          rootFamily: ["سغب (to be very hungry)", "ساغب (extremely hungry)"],
          frequency: "1 time in Quran (unique)",
          linguisticMiracle: "Rare word emphasizing SEVERE hunger - when feeding is most needed",
          balagha: "Specifying the hardship shows the deed's greater value"
        }
      }
    ],
    dependencyStructure: "أَوْ (alternative) + إِطْعَامٌ (action) + فِي يَوْمٍ ذِي مَسْغَبَةٍ (circumstance)",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "يَتِيمًا ذَا مَقْرَبَةٍ",
    translation: {
      en: "An orphan of near relationship",
      ur: "رشتہ دار یتیم کو",
      hi: "रिश्तेदार यतीम को",
      bn: "নিকটাত্মীয় এতিমকে",
      tr: "Yakın akrabadan bir yetimi",
      id: "Yaitu anak yatim yang ada hubungan kerabat",
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "يَتِيمًا",
        transliteration: "yateeman",
        root: "ي ت م",
        lemma: "يَتِيم",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "an orphan",
          ur: "یتیم",
          hi: "यतीम",
          bn: "এতিম",
          tr: "yetim",
          id: "anak yatim",
          ar: "فَاقِد الْأَب"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Direct object of feeding. Orphans are among the most vulnerable.",
          ur: "کھلانے کا مفعول۔ یتیم سب سے زیادہ کمزور لوگوں میں سے ہیں۔"
        },
        advanced: {
          rootFamily: ["يتم (orphanhood)", "يتيم (orphan)", "أيتام (orphans)"],
          frequency: "23 times"
        }
      },
      {
        position: 2,
        arabic: "ذَا",
        transliteration: "dhaa",
        root: "ذ و",
        lemma: "ذُو",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "of/possessing",
          ur: "والا",
          hi: "वाला",
          bn: "সহ",
          tr: "sahip",
          id: "yang memiliki",
          ar: "صَاحِب"
        },
        grammarRole: "noun_accusative"
      },
      {
        position: 3,
        arabic: "مَقْرَبَةٍ",
        transliteration: "maqrabatin",
        root: "ق ر ب",
        lemma: "مَقْرَبَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "near relationship",
          ur: "قرابت/رشتہ داری",
          hi: "क़राबत/रिश्तेदारी",
          bn: "নিকটাত্মীয়তা",
          tr: "yakın akrabalık",
          id: "hubungan kerabat",
          ar: "قَرَابَة"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "An orphan who is also a relative - double responsibility, double reward.",
          ur: "یتیم جو رشتہ دار بھی ہے - دوہری ذمہ داری، دوہرا اجر۔"
        },
        advanced: {
          rootFamily: ["قرب (nearness)", "قريب (near)", "أقربون (relatives)"],
          frequency: "2 times",
          balagha: "Relative orphans have claim by blood AND vulnerability"
        }
      }
    ],
    dependencyStructure: "يَتِيمًا (object) + ذَا مَقْرَبَةٍ (attribute)"
  },

  16: {
    ayahNumber: 16,
    arabic: "أَوْ مِسْكِينًا ذَا مَتْرَبَةٍ",
    translation: {
      en: "Or a poor person lying in dust (extreme poverty)",
      ur: "یا مٹی میں لوٹنے والے مسکین کو",
      hi: "या मिट्टी में लोटने वाले मिस्कीन को",
      bn: "অথবা ধুলায় মিশে থাকা মিসকীনকে",
      tr: "Veya toprağa serilmiş bir yoksulu",
      id: "Atau orang miskin yang sangat sengsara",
    structure: {
      relationships: [{ from: 3, to: 4, label: 'فعل + فاعل' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "أَوْ",
        transliteration: "aw",
        root: "أ و",
        lemma: "أَوْ",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "Or",
          ur: "یا",
          hi: "या",
          bn: "অথবা",
          tr: "veya",
          id: "atau",
          ar: "أَوْ"
        },
        grammarRole: "disjunctive_conjunction"
      },
      {
        position: 2,
        arabic: "مِسْكِينًا",
        transliteration: "miskeenan",
        root: "س ك ن",
        lemma: "مِسْكِين",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "a poor person",
          ur: "مسکین",
          hi: "मिस्कीन",
          bn: "মিসকীন",
          tr: "yoksul",
          id: "orang miskin",
          ar: "فَقِير"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Miskeen = one who has been made still by poverty, unable to move/work.",
          ur: "مسکین = وہ جسے غربت نے ساکن کر دیا، حرکت/کام سے عاجز۔"
        },
        advanced: {
          rootFamily: ["سكن (stillness)", "سكون (tranquility)", "مسكن (dwelling)"],
          frequency: "23 times",
          linguisticMiracle: "From sukoon (stillness) - poverty has immobilized them"
        }
      },
      {
        position: 3,
        arabic: "ذَا",
        transliteration: "dhaa",
        root: "ذ و",
        lemma: "ذُو",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "of/possessing",
          ur: "والا",
          hi: "वाला",
          bn: "সহ",
          tr: "sahip",
          id: "yang memiliki",
          ar: "صَاحِب"
        },
        grammarRole: "noun_accusative"
      },
      {
        position: 4,
        arabic: "مَتْرَبَةٍ",
        transliteration: "matrabatin",
        root: "ت ر ب",
        lemma: "مَتْرَبَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "dust/extreme poverty",
          ur: "مٹی/شدید غربت",
          hi: "मिट्टी/शदीद ग़रीबी",
          bn: "ধুলা/চরম দারিদ্র্য",
          tr: "toprak/çok fakirlik",
          id: "sangat sengsara",
          ar: "فَقْر شَدِيد"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Matrabah = covered in dust from lying on ground. Extreme poverty, homeless, destitute.",
          ur: "متربہ = زمین پر پڑے رہنے سے مٹی آلود۔ انتہائی غربت، بے گھر، محتاج۔"
        },
        advanced: {
          rootFamily: ["تراب (dust/earth)", "ترب (earth)", "أتربة (dusty places)"],
          frequency: "1 time in Quran (unique)",
          linguisticMiracle: "From turaab (dust) - so poor they lie in the dirt",
          balagha: "Vivid image: poverty so severe one is covered in dust"
        }
      }
    ],
    dependencyStructure: "أَوْ (alternative) + مِسْكِينًا (object) + ذَا مَتْرَبَةٍ (attribute)"
  },

  17: {
    ayahNumber: 17,
    arabic: "ثُمَّ كَانَ مِنَ الَّذِينَ آمَنُوا وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِ",
    translation: {
      en: "Then he was of those who believed and advised each other to patience and advised each other to mercy",
      ur: "پھر وہ ایمان والوں میں سے ہو اور ایک دوسرے کو صبر اور رحم کی وصیت کریں",
      hi: "फिर वह ईमान वालों में से हो और एक दूसरे को सब्र और रहम की वसीयत करें",
      bn: "তারপর সে ঈমানদারদের অন্তর্ভুক্ত হল এবং পরস্পরকে ধৈর্য ও দয়ার উপদেশ দিল",
      tr: "Sonra iman edenlerden olup birbirine sabrı ve merhameti tavsiye edenlerden olmak",
      id: "Kemudian dia termasuk orang-orang yang beriman dan saling menasihati untuk bersabar dan saling menasihati untuk berkasih sayang"
    },
    words: [
      {
        position: 1,
        arabic: "ثُمَّ",
        transliteration: "thumma",
        root: "ث م",
        lemma: "ثُمَّ",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "Then/Moreover",
          ur: "پھر",
          hi: "फिर",
          bn: "তারপর",
          tr: "sonra",
          id: "kemudian",
          ar: "ثُمَّ"
        },
        grammarRole: "sequential_conjunction",
        grammarExplanations: {
          en: "Thumma indicates sequence and importance - AFTER the deeds comes this crucial addition.",
          ur: "ثم ترتیب اور اہمیت کی نشاندہی کرتا ہے - اعمال کے بعد یہ اہم اضافہ۔"
        }
      },
      {
        position: 2,
        arabic: "كَانَ",
        transliteration: "kaana",
        root: "ك و ن",
        lemma: "كَانَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "he was/became",
          ur: "ہوا/تھا",
          hi: "हुआ/था",
          bn: "হল/ছিল",
          tr: "oldu",
          id: "dia adalah",
          ar: "صَارَ"
        },
        grammarRole: "verb_perfect"
      },
      {
        position: 3,
        arabic: "مِنَ",
        transliteration: "mina",
        root: "م ن",
        lemma: "مِنْ",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "of/from",
          ur: "سے",
          hi: "से",
          bn: "থেকে",
          tr: "-dan",
          id: "dari",
          ar: "مِنْ"
        },
        grammarRole: "preposition"
      },
      {
        position: 4,
        arabic: "الَّذِينَ",
        transliteration: "alladheena",
        root: "ل ذ ي",
        lemma: "الَّذِي",
        posTag: "REL", posLabel: "REL",
        meaning: {
          en: "those who",
          ur: "جو لوگ",
          hi: "जो लोग",
          bn: "যারা",
          tr: "olanlar",
          id: "orang-orang yang",
          ar: "الَّذِينَ"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 5,
        arabic: "آمَنُوا",
        transliteration: "aamanoo",
        root: "أ م ن",
        lemma: "آمَنَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "believed",
          ur: "ایمان لائے",
          hi: "ईमान लाए",
          bn: "ঈমান আনল",
          tr: "iman ettiler",
          id: "beriman",
          ar: "صَدَّقُوا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Faith (iman) is essential - deeds without faith don't complete the 'aqabah.",
          ur: "ایمان ضروری ہے - بغیر ایمان کے اعمال عقبہ مکمل نہیں کرتے۔"
        }
      },
      {
        position: 6,
        arabic: "وَتَوَاصَوْا",
        transliteration: "wa-tawaasau",
        root: "و ص ي",
        lemma: "تَوَاصَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "and advised each other",
          ur: "اور ایک دوسرے کو نصیحت کی",
          hi: "और एक दूसरे को नसीहत की",
          bn: "এবং পরস্পরকে উপদেش দিল",
          tr: "ve birbirine tavsiye ettiler",
          id: "dan saling menasihati",
          ar: "وَأَوْصَى بَعْضُهُم بَعْضًا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form VI (mutual action). They advise EACH OTHER - not just preaching but community support.",
          ur: "فعل ماضی، باب تفاعل (باہمی عمل)۔ وہ ایک دوسرے کو نصیحت کرتے ہیں - صرف تبلیغ نہیں بلکہ اجتماعی مدد۔"
        },
        advanced: {
          verbForm: "VI - تَوَاصَى (to advise each other)",
          rootFamily: ["وصية (will/advice)", "وصاية (guardianship)", "إيصاء (advising)"],
          frequency: "3 times",
          linguisticMiracle: "Form VI = reciprocal action - mutual reinforcement in faith"
        }
      },
      {
        position: 7,
        arabic: "بِالصَّبْرِ",
        transliteration: "bis-sabri",
        root: "ص ب ر",
        lemma: "صَبْر",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "to patience",
          ur: "صبر کی",
          hi: "सब्र की",
          bn: "ধৈর্যের",
          tr: "sabra",
          id: "untuk bersabar",
          ar: "عَلَى الصَّبْر"
        },
        grammarRole: "noun_genitive",
        advanced: {
          rootFamily: ["صبر (patience)", "صابر (patient)", "صبور (very patient)"],
          frequency: "103 times in various forms"
        }
      },
      {
        position: 8,
        arabic: "وَتَوَاصَوْا",
        transliteration: "wa-tawaasau",
        root: "و ص ي",
        lemma: "تَوَاصَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "and advised each other",
          ur: "اور ایک دوسرے کو نصیحت کی",
          hi: "और एक दूसरे को नसीहत की",
          bn: "এবং পরস্পরকে উপদেশ দিল",
          tr: "ve birbirine tavsiye ettiler",
          id: "dan saling menasihati",
          ar: "وَأَوْصَى بَعْضُهُم بَعْضًا"
        },
        grammarRole: "verb_perfect"
      },
      {
        position: 9,
        arabic: "بِالْمَرْحَمَةِ",
        transliteration: "bil-marhamati",
        root: "ر ح م",
        lemma: "مَرْحَمَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "to mercy/compassion",
          ur: "رحم کی",
          hi: "रहम की",
          bn: "দয়ার",
          tr: "merhamete",
          id: "untuk berkasih sayang",
          ar: "عَلَى الرَّحْمَة"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Marhamah = mercy, compassion. Patience AND mercy - balance of strength and tenderness.",
          ur: "مرحمہ = رحم، شفقت۔ صبر اور رحم - طاقت اور نرمی کا توازن۔"
        },
        advanced: {
          rootFamily: ["رحمة (mercy)", "رحمن (Most Merciful)", "رحيم (Merciful)", "رحم (womb)"],
          frequency: "339 times in various forms",
          balagha: "Sabr and Marhamah together - internal strength + external compassion"
        }
      }
    ],
    dependencyStructure: "ثُمَّ (sequence) + كَانَ مِنَ الَّذِينَ آمَنُوا (first condition) + وَتَوَاصَوْا بِالصَّبْرِ (second) + وَتَوَاصَوْا بِالْمَرْحَمَةِ (third)",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 4, to: 5, label: 'موصول + صلة' }
      ],
    },
  },

  18: {
    ayahNumber: 18,
    arabic: "أُولَٰئِكَ أَصْحَابُ الْمَيْمَنَةِ",
    translation: {
      en: "Those are the companions of the right",
      ur: "یہ لوگ دائیں طرف والے ہیں",
      hi: "यह लोग दाईं तरफ़ वाले हैं",
      bn: "এরাই ডান দিকের লোক",
      tr: "İşte onlar sağ taraftakilerdir",
      id: "Mereka adalah golongan kanan",
    structure: {
      relationships: [{ from: 3, to: 4, label: 'فعل + فاعل' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "أُولَٰئِكَ",
        transliteration: "ulaa'ika",
        root: "أ و ل",
        lemma: "أُولَٰئِكَ",
        posTag: "DEM", posLabel: "DEM",
        meaning: {
          en: "Those",
          ur: "یہ لوگ",
          hi: "यह लोग",
          bn: "এরা",
          tr: "işte onlar",
          id: "mereka",
          ar: "هَٰؤُلَاء"
        },
        grammarRole: "demonstrative_pronoun"
      },
      {
        position: 2,
        arabic: "أَصْحَابُ",
        transliteration: "ashabu",
        root: "ص ح ب",
        lemma: "أَصْحَاب",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "companions/people",
          ur: "والے",
          hi: "वाले",
          bn: "লোক",
          tr: "sahipleri",
          id: "golongan",
          ar: "أَهْل"
        },
        grammarRole: "noun_nominative"
      },
      {
        position: 3,
        arabic: "الْمَيْمَنَةِ",
        transliteration: "al-maymanati",
        root: "ي م ن",
        lemma: "مَيْمَنَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the right (hand)/blessing",
          ur: "دائیں طرف/برکت",
          hi: "दाईं तरफ़/बरकत",
          bn: "ডান দিক/সৌভাগ্য",
          tr: "sağ taraf/bereket",
          id: "kanan/keberuntungan",
          ar: "الْيَمِين / الْبَرَكَة"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Maymanah = right side, also blessing/good fortune. Opposite of mash'amah (left/ill-fortune).",
          ur: "میمنہ = دائیں طرف، برکت/نیک قسمت بھی۔ مشأمہ (بائیں/بدقسمتی) کی ضد۔"
        },
        advanced: {
          rootFamily: ["يمن (blessing)", "يمين (right)", "ميمون (blessed)", "اليمن (Yemen - blessed land)"],
          frequency: "4 times",
          linguisticMiracle: "Same root as Yemen (the blessed land) - people of blessing",
          balagha: "Right = blessed, successful, favored - those who took the 'aqabah"
        }
      }
    ],
    dependencyStructure: "أُولَٰئِكَ (subject) + أَصْحَابُ الْمَيْمَنَةِ (predicate)"
  },

  19: {
    ayahNumber: 19,
    arabic: "وَالَّذِينَ كَفَرُوا بِآيَاتِنَا هُمْ أَصْحَابُ الْمَشْأَمَةِ",
    translation: {
      en: "But those who disbelieved in Our signs - they are the companions of the left",
      ur: "اور جنہوں نے ہماری آیات کا انکار کیا وہ بائیں طرف والے ہیں",
      hi: "और जिन्होंने हमारी आयतों का इनकार किया वह बाईं तरफ़ वाले हैं",
      bn: "এবং যারা আমাদের আয়াত অস্বীকার করেছে তারা বাম দিকের লোক",
      tr: "Ayetlerimizi inkar edenler ise sol taraftakilerdir",
      id: "Dan orang-orang yang kafir kepada ayat-ayat Kami, mereka adalah golongan kiri"
    },
    words: [
      {
        position: 1,
        arabic: "وَالَّذِينَ",
        transliteration: "wal-ladheena",
        root: "ل ذ ي",
        lemma: "الَّذِي",
        posTag: "REL", posLabel: "REL",
        meaning: {
          en: "And those who",
          ur: "اور جو لوگ",
          hi: "और जो लोग",
          bn: "এবং যারা",
          tr: "ve olanlar",
          id: "dan orang-orang yang",
          ar: "وَالَّذِينَ"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 2,
        arabic: "كَفَرُوا",
        transliteration: "kafaroo",
        root: "ك ف ر",
        lemma: "كَفَرَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "disbelieved",
          ur: "انکار کیا",
          hi: "इनकार किया",
          bn: "অস্বীকার করেছে",
          tr: "inkar ettiler",
          id: "kafir",
          ar: "أَنْكَرُوا"
        },
        grammarRole: "verb_perfect"
      },
      {
        position: 3,
        arabic: "بِآيَاتِنَا",
        transliteration: "bi-aayaatinaa",
        root: "أ ي ي",
        lemma: "آيَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "in Our signs",
          ur: "ہماری آیات کا",
          hi: "हमारी आयतों का",
          bn: "আমাদের আয়াতে",
          tr: "ayetlerimizi",
          id: "ayat-ayat Kami",
          ar: "بِدَلَائِلِنَا"
        },
        grammarRole: "noun_genitive"
      },
      {
        position: 4,
        arabic: "هُمْ",
        transliteration: "hum",
        root: "ه م",
        lemma: "هُمْ",
        posTag: "PRON", posLabel: "PRON",
        meaning: {
          en: "they",
          ur: "وہ",
          hi: "वह",
          bn: "তারা",
          tr: "onlar",
          id: "mereka",
          ar: "هُمْ"
        },
        grammarRole: "pronoun_nominative"
      },
      {
        position: 5,
        arabic: "أَصْحَابُ",
        transliteration: "ashabu",
        root: "ص ح ب",
        lemma: "أَصْحَاب",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "companions/people",
          ur: "والے",
          hi: "वाले",
          bn: "লোক",
          tr: "sahipleri",
          id: "golongan",
          ar: "أَهْل"
        },
        grammarRole: "noun_nominative"
      },
      {
        position: 6,
        arabic: "الْمَشْأَمَةِ",
        transliteration: "al-mash'amati",
        root: "ش أ م",
        lemma: "مَشْأَمَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the left (hand)/ill-fortune",
          ur: "بائیں طرف/بدقسمتی",
          hi: "बाईं तरफ़/बदक़िस्मती",
          bn: "বাম দিক/দুর্ভাগ্য",
          tr: "sol taraf/uğursuzluk",
          id: "kiri/kemalangan",
          ar: "الشِّمَال / الشُّؤْم"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Mash'amah = left side, also ill-fortune/curse. Opposite of maymanah.",
          ur: "مشأمہ = بائیں طرف، نحوست/لعنت بھی۔ میمنہ کی ضد۔"
        },
        advanced: {
          rootFamily: ["شؤم (ill-omen)", "شأمة (left)", "شام (Syria - land to the left from Hijaz)"],
          frequency: "2 times",
          linguisticMiracle: "Same root as Shaam (Syria) - direction from Hijaz = left/north",
          balagha: "Perfect antithesis: maymanah (blessed right) vs mash'amah (cursed left)"
        }
      }
    ],
    dependencyStructure: "وَالَّذِينَ كَفَرُوا بِآيَاتِنَا (subject clause) + هُمْ أَصْحَابُ الْمَشْأَمَةِ (predicate)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "عَلَيْهِمْ نَارٌ مُّؤْصَدَةٌ",
    translation: {
      en: "Over them is a Fire closed in (completely sealed)",
      ur: "ان پر آگ ہے جو بند کر دی گئی ہے",
      hi: "उन पर आग है जो बंद कर दी गई है",
      bn: "তাদের উপর আগুন আচ্ছাদিত",
      tr: "Üzerlerine kapısı kilitli ateş vardır",
      id: "Atas mereka api yang ditutup rapat"
    },
    words: [
      {
        position: 1,
        arabic: "عَلَيْهِمْ",
        transliteration: "'alayhim",
        root: "ع ل و",
        lemma: "عَلَى",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "Over them",
          ur: "ان پر",
          hi: "उन पर",
          bn: "তাদের উপর",
          tr: "üzerlerine",
          id: "atas mereka",
          ar: "فَوْقَهُم"
        },
        grammarRole: "preposition_pronoun"
      },
      {
        position: 2,
        arabic: "نَارٌ",
        transliteration: "naarun",
        root: "ن و ر",
        lemma: "نَار",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "a Fire",
          ur: "آگ",
          hi: "आग",
          bn: "আগুন",
          tr: "ateş",
          id: "api",
          ar: "جَهَنَّم"
        },
        grammarRole: "noun_nominative"
      },
      {
        position: 3,
        arabic: "مُّؤْصَدَةٌ",
        transliteration: "mu'sadatun",
        root: "أ ص د",
        lemma: "مُؤْصَدَة",
        posTag: "ADJ", posLabel: "ADJ",
        meaning: {
          en: "closed in/sealed/locked",
          ur: "بند",
          hi: "बंद",
          bn: "আচ্ছাদিত",
          tr: "kilitli",
          id: "ditutup rapat",
          ar: "مُغْلَقَة"
        },
        grammarRole: "adjective_nominative",
        grammarExplanations: {
          en: "Passive participle. Mu'sadah = locked, closed with no exit. Final, permanent confinement.",
          ur: "اسم مفعول۔ مؤصدہ = مقفل، بغیر راستے کے بند۔ حتمی، مستقل قید۔"
        },
        advanced: {
          rootFamily: ["أصد (to close)", "إيصاد (closing)", "مؤصد (locked)"],
          frequency: "2 times",
          linguisticMiracle: "The Fire is sealed - no escape, no relief, no hope of exit",
          balagha: "Final verse is terrifying conclusion: permanent, sealed punishment",
          memoryHook: "Mu'sadah = Maximally Utterly Sealed And Doomed Always"
        }
      }
    ],
    dependencyStructure: "عَلَيْهِمْ (predicate) + نَارٌ مُّؤْصَدَةٌ (subject) - FINAL WARNING",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  }
};

export default TREEBANK_DATA;
