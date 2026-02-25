/**
 * Surah Quraysh (106) - The Quraysh
 * Complete Quranic Arabic Treebank
 * 4 Ayahs - Makki
 * Theme: Allah's blessings upon Quraysh and their duty to worship Him
 */

export const TREEBANK_DATA = {
  surahId: 106,
  surahName: "Quraysh",
  surahNameArabic: "قريش",
  totalAyahs: 4,
  totalWords: 17,
  theme: "Divine favors upon Quraysh and the call to worship",

  translation: {
    en: "For the accustomed security of the Quraysh - Their accustomed security [in] the caravan of winter and summer - Let them worship the Lord of this House, Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.",
    ur: "قریش کی الفت کے سبب۔ ان کی الفت سردی اور گرمی کے سفر سے۔ پس انہیں چاہیے کہ اس گھر کے رب کی عبادت کریں۔ جس نے انہیں بھوک میں کھلایا اور خوف سے امن دیا۔",
    hi: "क़ुरैश की आदत के लिए। उनकी आदत सर्दी और गर्मी की यात्रा से। तो उन्हें इस घर के रब की इबादत करनी चाहिए। जिसने उन्हें भूख में खिलाया और डर से सुरक्षा दी।",
    bn: "কুরাইশদের অভ্যাসের কারণে। তাদের শীত ও গ্রীষ্মকালীন সফরের অভ্যাস। অতএব তারা যেন এই ঘরের রবের ইবাদত করে। যিনি তাদের ক্ষুধায় খাওয়ালেন এবং ভয় থেকে নিরাপত্তা দিলেন।",
    tr: "Kureyş'in güvenliği için. Kış ve yaz yolculuklarındaki güvenlikleri için. Bu Evin Rabbine kulluk etsinler. O ki onları açlıktan doyurdu ve korkudan emin kıldı.",
    id: "Karena kebiasaan orang-orang Quraisy. Kebiasaan mereka bepergian pada musim dingin dan musim panas. Maka hendaklah mereka menyembah Tuhan pemilik rumah ini. Yang telah memberi makanan kepada mereka untuk menghilangkan lapar dan mengamankan mereka dari ketakutan."
  },

  1: {
    ayahNumber: 1,
    arabic: "لِإِيلَٰفِ قُرَيْشٍ",
    translation: {
      en: "For the accustomed security of the Quraysh",
      ur: "قریش کی الفت کے سبب",
      hi: "क़ुरैश की आदत के लिए",
      bn: "কুরাইশদের অভ্যাসের কারণে",
      tr: "Kureyş'in güvenliği için",
      id: "Karena kebiasaan orang-orang Quraisy"
    },
    words: [
      {
        position: 1,
        arabic: "لِإِيلَٰفِ",
        transliteration: "li-eelaafi",
        root: "أ ل ف",
        lemma: "إِيلَاف",
        posTag: "N",
        meaning: {
          en: "For the accustomed security / familiarity",
          ur: "الفت کے لیے",
          hi: "आदत के लिए",
          bn: "অভ্যাসের জন্য",
          tr: "Güvenlik için",
          id: "Karena kebiasaan",
          ar: "الألفة والاعتياد والأمان"
        },
        grammarRole: "prepositional phrase",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite",
          form: "IV verbal noun"
        },
        grammarExplanations: {
          en: "إِيلَاف - Form IV verbal noun meaning 'making familiar, accustoming, uniting'",
          ur: "باب افعال کا مصدر - الفت دینا، مانوس کرنا"
        },
        advanced: {
          rootFamily: ["أَلِفَ (to be familiar)", "إِلْف (companion)", "أُلْفَة (familiarity)", "أَلْف (thousand)"],
          frequency: 2,
          linguisticMiracle: "This word appears only here and next verse - unique to this surah",
          memoryHook: "إِيلَاف from أَلِفَ = being FAMILIAR/comfortable with something",
          connectionToPrevious: "Some scholars say this surah continues from Al-Fil (105) - لِإِيلَٰفِ connects to the elephant incident"
        }
      },
      {
        position: 2,
        arabic: "قُرَيْشٍ",
        transliteration: "Quraysh",
        root: "ق ر ش",
        lemma: "قُرَيْش",
        posTag: "PN",
        meaning: {
          en: "Quraysh (the tribe)",
          ur: "قریش",
          hi: "क़ुरैश",
          bn: "কুরাইশ",
          tr: "Kureyş",
          id: "Quraisy",
          ar: "قبيلة قريش"
        },
        grammarRole: "possessive (genitive)",
        case: "genitive",
        features: {
          gender: "collective",
          number: "collective noun",
          definiteness: "proper noun"
        },
        grammarExplanations: {
          en: "Quraysh - the noble tribe in Mecca, keepers of Ka'bah",
          ur: "قریش - مکہ کا معزز قبیلہ، کعبہ کے نگران"
        },
        advanced: {
          etymology: "From قَرْش (to gather) or a type of shark (strong, dominant)",
          historicalNote: "Prophet Muhammad ﷺ was from Quraysh, from Banu Hashim",
          frequency: 1,
          linguisticMiracle: "Only place in Quran where قُرَيْش is mentioned by name"
        }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
    dependencyStructure: "(لِإِيلَٰفِ)[prep+noun] → (قُرَيْشٍ)[genitive-possessive]"
  },

  2: {
    ayahNumber: 2,
    arabic: "إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
    translation: {
      en: "Their accustomed security [in] the caravan of winter and summer",
      ur: "ان کی الفت سردی اور گرمی کے سفر سے",
      hi: "उनकी आदत सर्दी और गर्मी की यात्रा से",
      bn: "তাদের শীত ও গ্রীষ্মকালীন সফরের অভ্যাস",
      tr: "Kış ve yaz yolculuklarındaki güvenlikleri için",
      id: "Kebiasaan mereka bepergian pada musim dingin dan musim panas",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "إِۦلَٰفِهِمْ",
        transliteration: "eelaafihim",
        root: "أ ل ف",
        lemma: "إِيلَاف",
        posTag: "N",
        meaning: {
          en: "Their accustomed security",
          ur: "ان کی الفت",
          hi: "उनकी आदत",
          bn: "তাদের অভ্যাস",
          tr: "Onların güvenliği",
          id: "Kebiasaan mereka",
          ar: "ألفتهم واعتيادهم"
        },
        grammarRole: "apposition/emphasis of verse 1",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          possessive: "3rd plural masculine"
        },
        grammarExplanations: {
          en: "بَدَل (apposition) repeating إِيلَاف with possessive for emphasis",
          ur: "بدل - تاکید کے لیے تکرار"
        }
      },
      {
        position: 2,
        arabic: "رِحْلَةَ",
        transliteration: "rihlata",
        root: "ر ح ل",
        lemma: "رِحْلَة",
        posTag: "N",
        meaning: {
          en: "the journey / caravan",
          ur: "سفر",
          hi: "यात्रा",
          bn: "সফর",
          tr: "yolculuk",
          id: "perjalanan",
          ar: "السفر للتجارة"
        },
        grammarRole: "object of إِيلَاف",
        case: "accusative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "Trade journeys that Quraysh made regularly",
          ur: "تجارتی سفر جو قریش کرتے تھے"
        },
        advanced: {
          rootFamily: ["رَحَلَ (to depart)", "رَاحِلَة (riding camel)", "رَحَّال (traveler)", "مَرْحَلَة (stage)"],
          frequency: 2,
          historicalNote: "Quraysh had two annual trade journeys"
        }
      },
      {
        position: 3,
        arabic: "ٱلشِّتَآءِ",
        transliteration: "ash-shitaa'",
        root: "ش ت و",
        lemma: "شِتَاء",
        posTag: "N",
        meaning: {
          en: "winter",
          ur: "سردی",
          hi: "सर्दी",
          bn: "শীতকাল",
          tr: "kış",
          id: "musim dingin",
          ar: "فصل الشتاء"
        },
        grammarRole: "genitive (specifying رِحْلَة)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        advanced: {
          rootFamily: ["شَتَا (to rain)", "شِتَاء (winter)", "مَشْتَى (winter residence)"],
          frequency: 1,
          historicalNote: "Winter journey was to Yemen (south) - warmer, trading spices and leather"
        }
      },
      {
        position: 4,
        arabic: "وَٱلصَّيْفِ",
        transliteration: "was-sayf",
        root: "ص ي ف",
        lemma: "صَيْف",
        posTag: "N",
        meaning: {
          en: "and summer",
          ur: "اور گرمی",
          hi: "और गर्मी",
          bn: "এবং গ্রীষ্ম",
          tr: "ve yaz",
          id: "dan musim panas",
          ar: "وفصل الصيف"
        },
        grammarRole: "conjunction + genitive (paired with الشتاء)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        advanced: {
          rootFamily: ["صَافَ (to spend summer)", "صَيْف (summer)", "مَصِيف (summer residence)"],
          frequency: 1,
          historicalNote: "Summer journey was to Syria (north) - trading goods from Yemen + bringing back wheat and oil"
        }
      }
    ],
    dependencyStructure: "(إِۦلَٰفِهِمْ)[apposition] → (رِحْلَةَ)[object] → (ٱلشِّتَآءِ وَٱلصَّيْفِ)[genitive-pair]"
  },

  3: {
    ayahNumber: 3,
    arabic: "فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ",
    translation: {
      en: "Let them worship the Lord of this House",
      ur: "پس انہیں چاہیے کہ اس گھر کے رب کی عبادت کریں",
      hi: "तो उन्हें इस घर के रब की इबादत करनी चाहिए",
      bn: "অতএব তারা যেন এই ঘরের রবের ইবাদত করে",
      tr: "Bu Evin Rabbine kulluk etsinler",
      id: "Maka hendaklah mereka menyembah Tuhan pemilik rumah ini",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "فَلْيَعْبُدُوا۟",
        transliteration: "fal-ya'budoo",
        root: "ع ب د",
        lemma: "عَبَدَ",
        posTag: "V",
        meaning: {
          en: "So let them worship",
          ur: "پس انہیں عبادت کرنی چاہیے",
          hi: "तो उन्हें इबादत करनी चाहिए",
          bn: "তারা যেন ইবাদত করে",
          tr: "Kulluk etsinler",
          id: "Hendaklah mereka menyembah",
          ar: "فليعبدوا ويوحدوا"
        },
        grammarRole: "result clause (consequent of favors)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I",
          mood: "jussive (لام الأمر)"
        },
        grammarExplanations: {
          en: "لام الأمر + jussive = command; 'let them worship' (consequence of blessings)",
          ur: "لام امر کے ساتھ - نعمتوں کا نتیجہ عبادت ہونی چاہیے"
        },
        advanced: {
          rootFamily: ["عَبْد (servant)", "عِبَادَة (worship)", "عَابِد (worshipper)", "مَعْبُود (deity)"],
          frequency: 143,
          balagha: "فَ (so/then) connects blessings to obligation - if Allah gave, you must worship"
        }
      },
      {
        position: 2,
        arabic: "رَبَّ",
        transliteration: "Rabba",
        root: "ر ب ب",
        lemma: "رَبّ",
        posTag: "N",
        meaning: {
          en: "Lord",
          ur: "رب",
          hi: "रब",
          bn: "রব",
          tr: "Rab",
          id: "Tuhan",
          ar: "المالك والمربي"
        },
        grammarRole: "object of worship",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite (by idafa)"
        }
      },
      {
        position: 3,
        arabic: "هَٰذَا",
        transliteration: "haadha",
        root: "N/A",
        lemma: "هَٰذَا",
        posTag: "DEM",
        meaning: {
          en: "this",
          ur: "اس",
          hi: "इस",
          bn: "এই",
          tr: "bu",
          id: "ini",
          ar: "هذا"
        },
        grammarRole: "demonstrative (pointing to Ka'bah)",
        case: "genitive",
        features: {
          distance: "near",
          gender: "masculine"
        }
      },
      {
        position: 4,
        arabic: "ٱلْبَيْتِ",
        transliteration: "al-bayt",
        root: "ب ي ت",
        lemma: "بَيْت",
        posTag: "N",
        meaning: {
          en: "the House (Ka'bah)",
          ur: "گھر (کعبہ)",
          hi: "घर (काबा)",
          bn: "ঘর (কাবা)",
          tr: "Ev (Kabe)",
          id: "rumah (Ka'bah)",
          ar: "الكعبة المشرفة"
        },
        grammarRole: "genitive (possessed by رَبّ)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "الْبَيْت with definite article = THE House = Ka'bah specifically",
          ur: "ال تعریف کے ساتھ = کعبہ شریف"
        },
        advanced: {
          rootFamily: ["بَاتَ (to spend night)", "بَيْت (house)", "بَيَات (night attack)", "مَبِيت (lodging)"],
          frequency: 73,
          linguisticMiracle: "Called رَبّ البَيْت - reminding Quraysh that Allah owns Ka'bah, not them"
        }
      }
    ],
    dependencyStructure: "(فَلْيَعْبُدُوا۟)[jussive-command] → (رَبَّ)[object] → (هَٰذَا ٱلْبَيْتِ)[demonstrative-genitive]"
  },

  4: {
    ayahNumber: 4,
    arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍ",
    translation: {
      en: "Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear",
      ur: "جس نے انہیں بھوک میں کھلایا اور خوف سے امن دیا",
      hi: "जिसने उन्हें भूख में खिलाया और डर से सुरक्षा दी",
      bn: "যিনি তাদের ক্ষুধায় খাওয়ালেন এবং ভয় থেকে নিরাপত্তা দিলেন",
      tr: "O ki onları açlıktan doyurdu ve korkudan emin kıldı",
      id: "Yang telah memberi makanan kepada mereka untuk menghilangkan lapar dan mengamankan mereka dari ketakutan"
    },
    words: [
      {
        position: 1,
        arabic: "ٱلَّذِىٓ",
        transliteration: "alladhee",
        root: "ل ذ ي",
        lemma: "ٱلَّذِى",
        posTag: "REL",
        meaning: {
          en: "Who (He who)",
          ur: "جس نے",
          hi: "जिसने",
          bn: "যিনি",
          tr: "O ki",
          id: "Yang",
          ar: "الذي"
        },
        grammarRole: "relative pronoun (describing رَبّ)",
        case: "N/A",
        features: {
          gender: "masculine",
          number: "singular"
        }
      },
      {
        position: 2,
        arabic: "أَطْعَمَهُم",
        transliteration: "at'amahum",
        root: "ط ع م",
        lemma: "أَطْعَمَ",
        posTag: "V",
        meaning: {
          en: "He fed them",
          ur: "انہیں کھلایا",
          hi: "उन्हें खिलाया",
          bn: "তাদের খাওয়ালেন",
          tr: "onları doyurdu",
          id: "memberi mereka makan",
          ar: "رزقهم الطعام"
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
        grammarExplanations: {
          en: "Form IV (أَفْعَلَ) - causative; Allah caused them to have food",
          ur: "باب افعال - اللہ نے کھلایا"
        },
        advanced: {
          rootFamily: ["طَعِمَ (to taste)", "طَعَام (food)", "إِطْعَام (feeding)", "مُطْعِم (feeder)"],
          frequency: 27
        }
      },
      {
        position: 3,
        arabic: "مِّن",
        transliteration: "min",
        root: "N/A",
        lemma: "مِن",
        posTag: "PREP",
        meaning: {
          en: "from / against",
          ur: "سے",
          hi: "से",
          bn: "থেকে",
          tr: "-dan",
          id: "dari",
          ar: "من"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "جُوعٍ",
        transliteration: "joo'",
        root: "ج و ع",
        lemma: "جُوع",
        posTag: "N",
        meaning: {
          en: "hunger",
          ur: "بھوک",
          hi: "भूख",
          bn: "ক্ষুধা",
          tr: "açlık",
          id: "lapar",
          ar: "الجوع والحاجة"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["جَاعَ (to be hungry)", "جَائِع (hungry person)", "مَجَاعَة (famine)"],
          frequency: 4,
          historicalNote: "Mecca is barren - without trade, Quraysh would starve"
        }
      },
      {
        position: 5,
        arabic: "وَءَامَنَهُم",
        transliteration: "wa-aamanahum",
        root: "أ م ن",
        lemma: "آمَنَ",
        posTag: "V",
        meaning: {
          en: "and made them safe",
          ur: "اور انہیں امن دیا",
          hi: "और उन्हें सुरक्षा दी",
          bn: "এবং তাদের নিরাপত্তা দিলেন",
          tr: "ve onları emin kıldı",
          id: "dan mengamankan mereka",
          ar: "وأمّنهم وحفظهم"
        },
        grammarRole: "conjunction + verb + object pronoun",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "IV"
        },
        grammarExplanations: {
          en: "Form IV (أَفْعَلَ) - causative; Allah granted them security",
          ur: "باب افعال - اللہ نے امن دیا"
        },
        advanced: {
          rootFamily: ["أَمِنَ (to be safe)", "أَمْن (security)", "أَمَان (safety)", "إِيمَان (faith)", "مُؤْمِن (believer)"],
          frequency: 11,
          linguisticMiracle: "Same root as إِيمَان - true security comes from faith"
        }
      },
      {
        position: 6,
        arabic: "مِّنْ",
        transliteration: "min",
        root: "N/A",
        lemma: "مِن",
        posTag: "PREP",
        meaning: {
          en: "from / against",
          ur: "سے",
          hi: "से",
          bn: "থেকে",
          tr: "-dan",
          id: "dari",
          ar: "من"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 7,
        arabic: "خَوْفٍ",
        transliteration: "khawf",
        root: "خ و ف",
        lemma: "خَوْف",
        posTag: "N",
        meaning: {
          en: "fear",
          ur: "خوف",
          hi: "डर",
          bn: "ভয়",
          tr: "korku",
          id: "ketakutan",
          ar: "الخوف والفزع"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["خَافَ (to fear)", "خَائِف (afraid)", "تَخْوِيف (intimidation)"],
          frequency: 13,
          historicalNote: "Arabs were raiders; Quraysh uniquely safe because of Ka'bah sanctity"
        }
      }
    ],
    dependencyStructure: "(ٱلَّذِىٓ)[relative] → (أَطْعَمَهُم)[verb] → (مِّن جُوعٍ)[prep-phrase] + (وَءَامَنَهُم)[conj+verb] → (مِّنْ خَوْفٍ)[prep-phrase]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  }
};

export default TREEBANK_DATA;
