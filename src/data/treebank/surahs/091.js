/**
 * Surah Ash-Shams (91) - Quranic Arabic Treebank Data
 * The Sun
 * Total Ayahs: 15
 * Revelation: Makki
 * Theme: Purification vs corruption of the soul, the story of Thamud
 */

export const TREEBANK_DATA = {
  surahId: 91,
  surahName: "Ash-Shams",
  surahNameArabic: "الشمس",
  totalAyahs: 15,
  totalWords: 54,
  revelationType: "Makki",
  theme: "Seven cosmic oaths culminating in the truth about human soul: success for those who purify it, failure for those who corrupt it, exemplified by Thamud",

  translation: {
    en: "The Sun - A powerful surah featuring seven consecutive oaths by cosmic phenomena, all leading to the central truth: the soul can be purified or corrupted, and each person's destiny depends on this choice. The story of Thamud illustrates the consequence of corruption.",
    ur: "سورج - سات متواتر کائناتی قسموں کی طاقتور سورت، سب ایک مرکزی سچائی کی طرف لے جاتی ہیں: نفس پاک یا آلودہ ہو سکتا ہے، اور ہر شخص کی تقدیر اس انتخاب پر منحصر ہے۔",
    hi: "सूरज - सात लगातार ब्रह्मांडीय क़समों की शक्तिशाली सूरह, सभी एक केंद्रीय सच्चाई की ओर ले जाती हैं: आत्मा को शुद्ध या भ्रष्ट किया जा सकता है।",
    bn: "সূর্য - সাতটি ধারাবাহিক মহাজাগতিক শপথের শক্তিশালী সূরা, সবই একটি কেন্দ্রীয় সত্যের দিকে নিয়ে যায়: আত্মা পবিত্র বা কলুষিত হতে পারে।",
    tr: "Güneş - Yedi ardışık kozmik yemin içeren güçlü bir sure, hepsi merkezi bir gerçeğe götürür: ruh arındırılabilir veya bozulabilir.",
    id: "Matahari - Surah yang kuat dengan tujuh sumpah kosmis berturut-turut, semuanya mengarah pada kebenaran utama: jiwa dapat disucikan atau dicemari."
  },

  1: {
    ayahNumber: 1,
    arabic: "وَالشَّمْسِ وَضُحَاهَا",
    translation: {
      en: "By the sun and its brightness",
      ur: "قسم ہے سورج کی اور اس کی چمک کی",
      hi: "क़सम है सूरज की और उसकी चमक की",
      bn: "শপথ সূর্যের এবং তার উজ্জ্বলতার",
      tr: "Güneşe ve aydınlığına yemin olsun",
      id: "Demi matahari dan sinarnya",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَالشَّمْسِ",
        transliteration: "Wash-shamsi",
        root: "ش م س",
        lemma: "شَمْس",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "By the sun",
          ur: "قسم ہے سورج کی",
          hi: "सूरज की क़सम",
          bn: "সূর্যের শপথ",
          tr: "Güneşe yemin",
          id: "Demi matahari",
          ar: "قَسَمٌ بِالشَّمْس"
        },
        grammarRole: "oath_particle_noun",
        grammarExplanations: {
          en: "Waw of oath + noun in genitive. The sun is the greatest visible source of light, symbolizing guidance and clarity.",
          ur: "واو قسم + اسم مجرور۔ سورج سب سے بڑا مرئی نور کا ذریعہ ہے، ہدایت اور وضاحت کی علامت۔"
        },
        advanced: {
          rootFamily: ["شمس (sun)", "شمسي (solar)", "مشمس (sunny)"],
          frequency: "33 times in Quran",
          linguisticMiracle: "The surah begins with the most prominent celestial body, setting the grandest scale",
          memoryHook: "Shams = Sun that Shimmers"
        }
      },
      {
        position: 2,
        arabic: "وَضُحَاهَا",
        transliteration: "wa-duhaahaa",
        root: "ض ح و",
        lemma: "ضُحَى",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "and its brightness/forenoon light",
          ur: "اور اس کی چمک",
          hi: "और उसकी चमक",
          bn: "এবং তার উজ্জ্বলতা",
          tr: "ve aydınlığı",
          id: "dan sinarnya",
          ar: "ضَوْءُهَا"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Duhaa is the mid-morning light when the sun fully manifests. The 'haa' refers back to the sun - its brilliance.",
          ur: "ضحیٰ دوپہر سے پہلے کی روشنی ہے جب سورج پوری طرح نمایاں ہو۔ 'ہا' سورج کی طرف اشارہ - اس کی درخشندگی۔"
        },
        advanced: {
          rootFamily: ["ضحى (forenoon)", "ضحوة (morning)", "أضحى (to become visible)"],
          frequency: "5 times in Quran",
          balagha: "Duhaa is the sun at its moment of full revelation - truth unveiled"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + الشَّمْسِ (sworn object) + وَضُحَاهَا (paired oath)"
  },

  2: {
    ayahNumber: 2,
    arabic: "وَالْقَمَرِ إِذَا تَلَاهَا",
    translation: {
      en: "And by the moon when it follows it",
      ur: "اور چاند کی جب وہ اس کے پیچھے آئے",
      hi: "और चाँद की जब वह उसके पीछे आए",
      bn: "এবং চাঁদের যখন সে তাকে অনুসরণ করে",
      tr: "Onu izlediği vakit aya",
      id: "Dan bulan apabila mengiringinya"
    },
    words: [
      {
        position: 1,
        arabic: "وَالْقَمَرِ",
        transliteration: "wal-qamari",
        root: "ق م ر",
        lemma: "قَمَر",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "And by the moon",
          ur: "اور چاند کی",
          hi: "और चाँद की",
          bn: "এবং চাঁদের",
          tr: "aya",
          id: "Dan bulan",
          ar: "وَقَسَمٌ بِالْقَمَر"
        },
        grammarRole: "oath_particle_noun",
        grammarExplanations: {
          en: "Second oath object. Moon reflects sunlight - following and dependent on the sun.",
          ur: "دوسری قسم۔ چاند سورج کی روشنی منعکس کرتا ہے - پیچھے اور سورج پر منحصر۔"
        },
        advanced: {
          rootFamily: ["قمر (moon)", "قمري (lunar)", "أقمار (moons/satellites)"],
          frequency: "27 times in Quran",
          memoryHook: "Qamar = the Lamp that Quarters (phases)"
        }
      },
      {
        position: 2,
        arabic: "إِذَا",
        transliteration: "idhaa",
        root: "إ ذ ا",
        lemma: "إِذَا",
        posTag: "COND",
       posLabel: "COND",
        meaning: {
          en: "when",
          ur: "جب",
          hi: "जब",
          bn: "যখন",
          tr: "vakit",
          id: "apabila",
          ar: "حِينَ"
        },
        grammarRole: "conditional_particle"
      },
      {
        position: 3,
        arabic: "تَلَاهَا",
        transliteration: "talaahaa",
        root: "ت ل و",
        lemma: "تَلَا",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "it follows it",
          ur: "اس کے پیچھے آیا",
          hi: "उसके पीछे आया",
          bn: "তাকে অনুসরণ করে",
          tr: "izlediğinde",
          id: "mengiringinya",
          ar: "تَبِعَهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form I. The moon follows (tilawa) the sun - recites/follows its path.",
          ur: "فعل ماضی، باب اول۔ چاند سورج کی پیروی (تلاوت) کرتا ہے - اس کے راستے کی تلاوت/پیروی۔"
        },
        advanced: {
          verbForm: "I - تَلَا (to follow, recite)",
          rootFamily: ["تلاوة (recitation)", "تالي (follower)", "يتلو (follows/recites)"],
          frequency: "63 times in various forms",
          linguisticMiracle: "Same root as tilawa (recitation of Quran) - moon 'recites' the sun's light"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + الْقَمَرِ (sworn object) + إِذَا تَلَاهَا (temporal clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَالنَّهَارِ إِذَا جَلَّاهَا",
    translation: {
      en: "And by the day when it displays it (the sun)",
      ur: "اور دن کی جب وہ اسے ظاہر کرے",
      hi: "और दिन की जब वह उसे ज़ाहिर करे",
      bn: "এবং দিনের যখন সে তাকে প্রকাশ করে",
      tr: "Onu apaçık gösterdiği vakit gündüze",
      id: "Dan siang apabila menampakkannya"
    },
    words: [
      {
        position: 1,
        arabic: "وَالنَّهَارِ",
        transliteration: "wan-nahaari",
        root: "ن ه ر",
        lemma: "نَهَار",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "And by the day",
          ur: "اور دن کی",
          hi: "और दिन की",
          bn: "এবং দিনের",
          tr: "gündüze",
          id: "Dan siang",
          ar: "وَقَسَمٌ بِالنَّهَار"
        },
        grammarRole: "oath_particle_noun"
      },
      {
        position: 2,
        arabic: "إِذَا",
        transliteration: "idhaa",
        root: "إ ذ ا",
        lemma: "إِذَا",
        posTag: "COND",
       posLabel: "COND",
        meaning: {
          en: "when",
          ur: "جب",
          hi: "जब",
          bn: "যখন",
          tr: "vakit",
          id: "apabila",
          ar: "حِينَ"
        },
        grammarRole: "conditional_particle"
      },
      {
        position: 3,
        arabic: "جَلَّاهَا",
        transliteration: "jallaahaa",
        root: "ج ل و",
        lemma: "جَلَّى",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "it reveals/displays it",
          ur: "اسے ظاہر کرے",
          hi: "उसे ज़ाहिर करे",
          bn: "তাকে প্রকাশ করে",
          tr: "gösterdiğinde",
          id: "menampakkannya",
          ar: "أَظْهَرَهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form II (intensive). Day fully reveals (jallaa) the sun's splendor.",
          ur: "فعل ماضی، باب تفعیل (تاکیدی)۔ دن سورج کی شان کو مکمل ظاہر (جلاء) کرتا ہے۔"
        },
        advanced: {
          verbForm: "II - جَلَّى (to reveal, clarify, polish)",
          rootFamily: ["جلاء (clarity)", "تجلي (manifestation)", "جلي (clear)"],
          frequency: "5 times",
          linguisticMiracle: "Same root as tajalli - Allah's manifestation to Musa. Day manifests the sun."
        }
      }
    ],
    dependencyStructure: "وَ (oath) + النَّهَارِ (sworn object) + إِذَا جَلَّاهَا (temporal clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "وَاللَّيْلِ إِذَا يَغْشَاهَا",
    translation: {
      en: "And by the night when it covers it",
      ur: "اور رات کی جب وہ اسے ڈھانپ لے",
      hi: "और रात की जब वह उसे ढाँप ले",
      bn: "এবং রাতের যখন সে তাকে আচ্ছাদিত করে",
      tr: "Onu bürüdüğü vakit geceye",
      id: "Dan malam apabila menutupinya"
    },
    words: [
      {
        position: 1,
        arabic: "وَاللَّيْلِ",
        transliteration: "wal-layli",
        root: "ل ي ل",
        lemma: "لَيْل",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "And by the night",
          ur: "اور رات کی",
          hi: "और रात की",
          bn: "এবং রাতের",
          tr: "geceye",
          id: "Dan malam",
          ar: "وَقَسَمٌ بِاللَّيْل"
        },
        grammarRole: "oath_particle_noun"
      },
      {
        position: 2,
        arabic: "إِذَا",
        transliteration: "idhaa",
        root: "إ ذ ا",
        lemma: "إِذَا",
        posTag: "COND",
       posLabel: "COND",
        meaning: {
          en: "when",
          ur: "جب",
          hi: "जब",
          bn: "যখন",
          tr: "vakit",
          id: "apabila",
          ar: "حِينَ"
        },
        grammarRole: "conditional_particle"
      },
      {
        position: 3,
        arabic: "يَغْشَاهَا",
        transliteration: "yaghshaahaa",
        root: "غ ش ي",
        lemma: "غَشِيَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "it covers it",
          ur: "اسے ڈھانپ لے",
          hi: "उसे ढाँप ले",
          bn: "তাকে আচ্ছাদিত করে",
          tr: "bürüdüğünde",
          id: "menutupinya",
          ar: "يُغَطِّيهَا"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form I. Night covers (yaghshaa) the sun - concealment after revelation.",
          ur: "فعل مضارع، باب اول۔ رات سورج کو ڈھانپتی (یغشی) ہے - ظہور کے بعد پوشیدگی۔"
        },
        advanced: {
          verbForm: "I - غَشِيَ (to cover, envelop)",
          rootFamily: ["غشاء (covering)", "غشية (swoon)", "غاشية (overwhelming - Surah 88)"],
          balagha: "Night-Day pair: revealing (jallaa) vs covering (yaghshaa) - cosmic alternation"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + اللَّيْلِ (sworn object) + إِذَا يَغْشَاهَا (temporal clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "وَالسَّمَاءِ وَمَا بَنَاهَا",
    translation: {
      en: "And by the sky and He who built it",
      ur: "اور آسمان کی اور جس نے اسے بنایا",
      hi: "और आसमान की और जिसने उसे बनाया",
      bn: "এবং আকাশের এবং যিনি তা নির্মাণ করেছেন",
      tr: "Göğe ve onu bina edene yemin olsun",
      id: "Dan langit serta pembinaannya"
    },
    words: [
      {
        position: 1,
        arabic: "وَالسَّمَاءِ",
        transliteration: "was-samaa'i",
        root: "س م و",
        lemma: "سَمَاء",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "And by the sky",
          ur: "اور آسمان کی",
          hi: "और आसमान की",
          bn: "এবং আকাশের",
          tr: "göğe",
          id: "Dan langit",
          ar: "وَقَسَمٌ بِالسَّمَاء"
        },
        grammarRole: "oath_particle_noun",
        grammarExplanations: {
          en: "Fifth oath. Moving from celestial bodies to the entire expanse of sky.",
          ur: "پانچویں قسم۔ آسمانی اجسام سے پورے آسمان کی وسعت کی طرف۔"
        },
        advanced: {
          rootFamily: ["سماء (sky)", "سمو (height)", "أسماء (names - elevated)"],
          frequency: "120 times in Quran",
          memoryHook: "Samaa' = Sky So Majestic and Awesome"
        }
      },
      {
        position: 2,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "REL",
       posLabel: "REL",
        meaning: {
          en: "And He who / And that which",
          ur: "اور جس نے",
          hi: "और जिसने",
          bn: "এবং যিনি",
          tr: "ve onu",
          id: "serta",
          ar: "وَالَّذِي"
        },
        grammarRole: "relative_pronoun",
        grammarExplanations: {
          en: "'Maa' here refers to Allah (the One who built it). Creates reverence without directly naming.",
          ur: "یہاں 'ما' اللہ کی طرف اشارہ (جس نے بنایا)۔ براہ راست نام لیے بغیر تعظیم۔"
        }
      },
      {
        position: 3,
        arabic: "بَنَاهَا",
        transliteration: "banaahaa",
        root: "ب ن ي",
        lemma: "بَنَى",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "built it",
          ur: "اسے بنایا",
          hi: "उसे बनाया",
          bn: "তা নির্মাণ করেছেন",
          tr: "bina eden",
          id: "pembinaannya",
          ar: "أَقَامَهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form I. Allah 'built' the sky - implies structure, design, engineering.",
          ur: "فعل ماضی، باب اول۔ اللہ نے آسمان 'بنایا' - ساخت، ڈیزائن، انجینئرنگ کا اشارہ۔"
        },
        advanced: {
          verbForm: "I - بَنَى (to build, construct)",
          rootFamily: ["بناء (building)", "بنيان (structure)", "ابن (son - who builds family)"],
          frequency: "23 times",
          linguisticMiracle: "Sky as architecture - implies intelligent design and purpose"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + السَّمَاءِ (sworn object) + وَمَا بَنَاهَا (relative clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "وَالْأَرْضِ وَمَا طَحَاهَا",
    translation: {
      en: "And by the earth and He who spread it",
      ur: "اور زمین کی اور جس نے اسے بچھایا",
      hi: "और ज़मीन की और जिसने उसे बिछाया",
      bn: "এবং পৃথিবীর এবং যিনি তা বিস্তৃত করেছেন",
      tr: "Yere ve onu yayıp döşeyene",
      id: "Dan bumi serta penghamparannya"
    },
    words: [
      {
        position: 1,
        arabic: "وَالْأَرْضِ",
        transliteration: "wal-ardi",
        root: "أ ر ض",
        lemma: "أَرْض",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "And by the earth",
          ur: "اور زمین کی",
          hi: "और ज़मीन की",
          bn: "এবং পৃথিবীর",
          tr: "yere",
          id: "Dan bumi",
          ar: "وَقَسَمٌ بِالْأَرْض"
        },
        grammarRole: "oath_particle_noun"
      },
      {
        position: 2,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "REL",
       posLabel: "REL",
        meaning: {
          en: "And He who",
          ur: "اور جس نے",
          hi: "और जिसने",
          bn: "এবং যিনি",
          tr: "ve onu",
          id: "serta",
          ar: "وَالَّذِي"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 3,
        arabic: "طَحَاهَا",
        transliteration: "tahaahaa",
        root: "ط ح و",
        lemma: "طَحَا",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "spread it out",
          ur: "اسے بچھایا",
          hi: "उसे बिछाया",
          bn: "তা বিস্তৃত করেছেন",
          tr: "yayıp döşeyen",
          id: "penghamparannya",
          ar: "بَسَطَهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form I. Tahaa means to spread out, flatten for habitation.",
          ur: "فعل ماضی، باب اول۔ طحا کا مطلب پھیلانا، رہائش کے لیے ہموار کرنا۔"
        },
        advanced: {
          verbForm: "I - طَحَا (to spread out, flatten)",
          rootFamily: ["طحو (spreading)", "دحا (to spread - used for earth in 79:30)"],
          frequency: "1 time in Quran (unique)",
          linguisticMiracle: "Rare verb emphasizes the uniqueness of earth's preparation for life"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + الْأَرْضِ (sworn object) + وَمَا طَحَاهَا (relative clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "وَنَفْسٍ وَمَا سَوَّاهَا",
    translation: {
      en: "And by the soul and He who proportioned it",
      ur: "اور نفس کی اور جس نے اسے درست کیا",
      hi: "और नफ़्स की और जिसने उसे दुरुस्त किया",
      bn: "এবং আত্মার এবং যিনি তাকে সুবিন্যস্ত করেছেন",
      tr: "Nefse ve onu düzenleyene",
      id: "Dan jiwa serta penyempurnaannya"
    },
    words: [
      {
        position: 1,
        arabic: "وَنَفْسٍ",
        transliteration: "wa-nafsin",
        root: "ن ف س",
        lemma: "نَفْس",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "And by the soul",
          ur: "اور نفس کی",
          hi: "और नफ़्स की",
          bn: "এবং আত্মার",
          tr: "nefse",
          id: "Dan jiwa",
          ar: "وَقَسَمٌ بِالنَّفْس"
        },
        grammarRole: "oath_particle_noun",
        grammarExplanations: {
          en: "Seventh and climactic oath. Indefinite 'nafsin' - ANY soul, universal truth about human nature.",
          ur: "ساتویں اور انتہائی قسم۔ نکرہ 'نفس' - کوئی بھی نفس، انسانی فطرت کے بارے میں عالمگیر سچائی۔"
        },
        advanced: {
          rootFamily: ["نفس (soul/self)", "تنفس (breathing)", "أنفاس (breaths)"],
          frequency: "295 times in various forms",
          linguisticMiracle: "After cosmic oaths, focus shifts to the nafs - the internal cosmos",
          memoryHook: "Nafs = the breath-soul (nafas = breath)"
        }
      },
      {
        position: 2,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "REL",
       posLabel: "REL",
        meaning: {
          en: "And He who",
          ur: "اور جس نے",
          hi: "और जिसने",
          bn: "এবং যিনি",
          tr: "ve onu",
          id: "serta",
          ar: "وَالَّذِي"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 3,
        arabic: "سَوَّاهَا",
        transliteration: "sawwaahaa",
        root: "س و ي",
        lemma: "سَوَّى",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "proportioned it / perfected it",
          ur: "اسے درست کیا",
          hi: "उसे दुरुस्त किया",
          bn: "তাকে সুবিন্যস্ত করেছেন",
          tr: "düzenleyen",
          id: "penyempurnaannya",
          ar: "أَتَمَّهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form II (intensive). To proportion, balance, complete perfectly. The soul is designed with inherent balance.",
          ur: "فعل ماضی، باب تفعیل (تاکیدی)۔ متناسب، متوازن، مکمل کرنا۔ نفس فطری توازن کے ساتھ بنایا گیا۔"
        },
        advanced: {
          verbForm: "II - سَوَّى (to make equal, proportion, perfect)",
          rootFamily: ["سوي (equal)", "مساواة (equality)", "تسوية (leveling)", "سواء (same)"],
          frequency: "28 times in various forms",
          linguisticMiracle: "Same root used for creation of Adam (15:29) - the soul is divinely engineered",
          balagha: "The nafs is not inherently corrupt - it is designed (sawwaa) in balance"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + نَفْسٍ (sworn object) + وَمَا سَوَّاهَا (relative clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
    translation: {
      en: "And inspired it with its wickedness and its righteousness",
      ur: "پھر اسے اس کی بدی اور نیکی کی سمجھ دی",
      hi: "फिर उसे उसकी बुराई और नेकी की समझ दी",
      bn: "অতঃপর তাকে তার পাপাচার ও তাকওয়ার জ্ঞান দিয়েছেন",
      tr: "Sonra ona kötülüğü ve takvayı ilham etti",
      id: "Lalu Dia mengilhamkan kepadanya kedurhakaan dan ketakwaannya",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "فَأَلْهَمَهَا",
        transliteration: "fa-alhamahaa",
        root: "ل ه م",
        lemma: "أَلْهَمَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "Then inspired it",
          ur: "پھر سمجھ دی",
          hi: "फिर समझ दी",
          bn: "অতঃপর জ্ঞান দিয়েছেন",
          tr: "ilham etti",
          id: "mengilhamkan",
          ar: "عَرَّفَهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form IV. Allah 'inspired' - placed innate knowledge of good and evil in the soul.",
          ur: "فعل ماضی، باب افعال۔ اللہ نے 'الہام کیا' - نفس میں خیر و شر کا فطری علم رکھا۔"
        },
        advanced: {
          verbForm: "IV - أَلْهَمَ (to inspire, instill knowledge)",
          rootFamily: ["إلهام (inspiration)", "لهم (to swallow - knowledge absorbed)"],
          frequency: "2 times in Quran",
          linguisticMiracle: "Ilham = divine instillation of knowledge without teaching - innate moral compass",
          balagha: "Not taught, but inspired - moral knowledge is built into the soul"
        }
      },
      {
        position: 2,
        arabic: "فُجُورَهَا",
        transliteration: "fujoorahaa",
        root: "ف ج ر",
        lemma: "فُجُور",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "its wickedness/sinfulness",
          ur: "اس کی بدی",
          hi: "उसकी बुराई",
          bn: "তার পাপাচার",
          tr: "kötülüğü",
          id: "kedurhakaan",
          ar: "مَعْصِيَتَهَا"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Direct object. Fujoor = to break open, burst forth (like a spring). Sin is breaking divine boundaries.",
          ur: "مفعول بہ۔ فجور = توڑنا، پھوٹنا (چشمے کی طرح)۔ گناہ الٰہی حدود کو توڑنا ہے۔"
        },
        advanced: {
          rootFamily: ["فجر (dawn - breaking through darkness)", "فاجر (sinful)", "انفجار (explosion)"],
          frequency: "6 times",
          linguisticMiracle: "Fajr (dawn) and fujoor share root - both involve 'breaking forth'",
          balagha: "Listed first not because dominant, but to show what needs to be overcome"
        }
      },
      {
        position: 3,
        arabic: "وَتَقْوَاهَا",
        transliteration: "wa-taqwaahaa",
        root: "و ق ي",
        lemma: "تَقْوَى",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "and its righteousness/God-consciousness",
          ur: "اور اس کی نیکی/تقویٰ",
          hi: "और उसकी नेकी/तक़वा",
          bn: "এবং তার তাকওয়া",
          tr: "ve takvayı",
          id: "dan ketakwaannya",
          ar: "طَاعَتَهَا"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Direct object paired with fujoor. Taqwa = protecting oneself through consciousness of Allah.",
          ur: "فجور کے ساتھ جوڑا مفعول۔ تقویٰ = اللہ کی یاد سے اپنے آپ کو بچانا۔"
        },
        advanced: {
          rootFamily: ["وقاية (protection)", "اتقى (to be conscious)", "متقي (God-conscious)"],
          frequency: "251 times in various forms",
          linguisticMiracle: "Both fujoor and taqwa are INNATE - we know both instinctively",
          balagha: "The soul is given knowledge of BOTH paths - choice is the test"
        }
      }
    ],
    dependencyStructure: "فَ (consequent) + أَلْهَمَهَا (verb) + فُجُورَهَا وَتَقْوَاهَا (dual objects)"
  },

  9: {
    ayahNumber: 9,
    arabic: "قَدْ أَفْلَحَ مَن زَكَّاهَا",
    translation: {
      en: "He has succeeded who purifies it",
      ur: "یقیناً کامیاب ہوا جس نے اسے پاک کیا",
      hi: "यक़ीनन कामयाब हुआ जिसने उसे पाक किया",
      bn: "সফল হয়েছে সে যে তাকে পবিত্র করেছে",
      tr: "Onu temizleyen muhakkak kurtuluşa ermiştir",
      id: "Sungguh beruntung orang yang menyucikannya"
    },
    words: [
      {
        position: 1,
        arabic: "قَدْ",
        transliteration: "qad",
        root: "ق د",
        lemma: "قَدْ",
        posTag: "CERT",
       posLabel: "CERT",
        meaning: {
          en: "Certainly/Indeed",
          ur: "یقیناً",
          hi: "यक़ीनन",
          bn: "অবশ্যই",
          tr: "muhakkak",
          id: "sungguh",
          ar: "تَحْقِيق"
        },
        grammarRole: "certainty_particle",
        grammarExplanations: {
          en: "Particle of certainty. The answer to all seven oaths - THIS is the truth being affirmed.",
          ur: "حرف تحقیق۔ ساتوں قسموں کا جواب - یہی وہ سچائی ہے جس کی تصدیق ہو رہی ہے۔"
        }
      },
      {
        position: 2,
        arabic: "أَفْلَحَ",
        transliteration: "aflaha",
        root: "ف ل ح",
        lemma: "أَفْلَحَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "has succeeded/prospered",
          ur: "کامیاب ہوا",
          hi: "कामयाब हुआ",
          bn: "সফল হয়েছে",
          tr: "kurtuluşa ermiştir",
          id: "beruntung",
          ar: "فَازَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form IV. Aflaha = to split the earth (like a farmer) and achieve success. Ultimate success.",
          ur: "فعل ماضی، باب افعال۔ افلح = زمین چیرنا (کسان کی طرح) اور کامیابی حاصل کرنا۔"
        },
        advanced: {
          verbForm: "IV - أَفْلَحَ (to succeed, prosper)",
          rootFamily: ["فلاح (success)", "فلاح (farmer - who splits earth)", "مفلح (successful)"],
          frequency: "40 times",
          linguisticMiracle: "Falah = success of a farmer who cultivates land - the soul needs cultivation too",
          memoryHook: "Aflaha = Achieves Like a Farmer (Fallah) - cultivating success"
        }
      },
      {
        position: 3,
        arabic: "مَن",
        transliteration: "man",
        root: "م ن",
        lemma: "مَنْ",
        posTag: "REL",
       posLabel: "REL",
        meaning: {
          en: "he who",
          ur: "جس نے",
          hi: "जिसने",
          bn: "যে",
          tr: "kim",
          id: "orang yang",
          ar: "الَّذِي"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 4,
        arabic: "زَكَّاهَا",
        transliteration: "zakkaahaa",
        root: "ز ك و",
        lemma: "زَكَّى",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "purifies it",
          ur: "اسے پاک کرے",
          hi: "उसे पाक करे",
          bn: "তাকে পবিত্র করে",
          tr: "temizleyen",
          id: "menyucikannya",
          ar: "طَهَّرَهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form II. Zakkaa = to purify AND grow. Same root as zakah.",
          ur: "فعل ماضی، باب تفعیل۔ زکّیٰ = پاک کرنا اور بڑھانا۔ زکوٰۃ کا ہم جذر۔"
        },
        advanced: {
          verbForm: "II - زَكَّى (to purify, make grow)",
          rootFamily: ["زكاة (purification/growth)", "تزكية (purification)", "زكي (pure)"],
          frequency: "59 times in various forms",
          linguisticMiracle: "Tazkiyah means BOTH purification AND growth - purifying the soul makes it grow",
          balagha: "This verse is the ANSWER to seven cosmic oaths - the central message"
        }
      }
    ],
    dependencyStructure: "قَدْ (certainty) + أَفْلَحَ (verb) + مَن زَكَّاهَا (subject clause) - THE MAIN MESSAGE",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' }
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "وَقَدْ خَابَ مَن دَسَّاهَا",
    translation: {
      en: "And he has failed who corrupts it",
      ur: "اور ناکام ہوا جس نے اسے آلودہ کیا",
      hi: "और नाकाम हुआ जिसने उसे आलूदा किया",
      bn: "এবং ব্যর্থ হয়েছে সে যে তাকে কলুষিত করেছে",
      tr: "Onu kötülüklere gömen hüsrana uğramıştır",
      id: "Dan sungguh merugi orang yang mengotorinya"
    },
    words: [
      {
        position: 1,
        arabic: "وَقَدْ",
        transliteration: "wa-qad",
        root: "ق د",
        lemma: "قَدْ",
        posTag: "CERT",
       posLabel: "CERT",
        meaning: {
          en: "And certainly",
          ur: "اور یقیناً",
          hi: "और यक़ीनन",
          bn: "এবং অবশ্যই",
          tr: "ve muhakkak",
          id: "dan sungguh",
          ar: "وَتَحْقِيق"
        },
        grammarRole: "certainty_particle"
      },
      {
        position: 2,
        arabic: "خَابَ",
        transliteration: "khaaba",
        root: "خ ي ب",
        lemma: "خَابَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "has failed/lost",
          ur: "ناکام ہوا",
          hi: "नाकाम हुआ",
          bn: "ব্যর্থ হয়েছে",
          tr: "hüsrana uğramıştır",
          id: "merugi",
          ar: "خَسِرَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form I. Khaaba = to fail, be disappointed, suffer loss. Opposite of aflaha.",
          ur: "فعل ماضی، باب اول۔ خاب = ناکام ہونا، مایوس ہونا، نقصان اٹھانا۔ افلح کی ضد۔"
        },
        advanced: {
          verbForm: "I - خَابَ (to fail, be disappointed)",
          rootFamily: ["خيبة (disappointment)", "خائب (one who fails)"],
          frequency: "5 times",
          linguisticMiracle: "Perfect antithesis: aflaha (v.9) vs khaaba (v.10)",
          balagha: "Two outcomes, no middle ground: success or failure"
        }
      },
      {
        position: 3,
        arabic: "مَن",
        transliteration: "man",
        root: "م ن",
        lemma: "مَنْ",
        posTag: "REL",
       posLabel: "REL",
        meaning: {
          en: "he who",
          ur: "جس نے",
          hi: "जिसने",
          bn: "যে",
          tr: "kim",
          id: "orang yang",
          ar: "الَّذِي"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 4,
        arabic: "دَسَّاهَا",
        transliteration: "dassaahaa",
        root: "د س و",
        lemma: "دَسَّى",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "corrupts it/buries it",
          ur: "اسے آلودہ کیا/دبایا",
          hi: "उसे आलूदा किया/दबाया",
          bn: "তাকে কলুষিত করেছে",
          tr: "kötülüklere gömen",
          id: "mengotorinya",
          ar: "أَفْسَدَهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form II. Dassaa = to hide, bury, conceal. Corrupting by burying the soul's goodness.",
          ur: "فعل ماضی، باب تفعیل۔ دسّیٰ = چھپانا، دبانا، پوشیدہ کرنا۔ نفس کی نیکی دبا کر آلودہ کرنا۔"
        },
        advanced: {
          verbForm: "II - دَسَّى (to hide, corrupt)",
          rootFamily: ["دس (to push down)", "تدسية (corruption by concealment)"],
          frequency: "2 times in Quran",
          linguisticMiracle: "Dassaa vs Zakkaa: growing vs burying the soul",
          balagha: "Corruption is HIDING the innate goodness - burying the fitrah",
          memoryHook: "Dassaa = Drowning/Sinking the soul into corruption"
        }
      }
    ],
    dependencyStructure: "وَقَدْ (certainty) + خَابَ (verb) + مَن دَسَّاهَا (subject clause)",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' }
      ],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا",
    translation: {
      en: "Thamud denied (their prophet) in their transgression",
      ur: "ثمود نے اپنی سرکشی میں جھٹلایا",
      hi: "समूद ने अपनी सरकशी में झुठलाया",
      bn: "সামুদ তাদের অবাধ্যতায় মিথ্যা বলেছে",
      tr: "Semud azgınlığıyla yalanladı",
      id: "Kaum Tsamud telah mendustakan karena kesombongannya",
    structure: {
      relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "كَذَّبَتْ",
        transliteration: "kadhdhabat",
        root: "ك ذ ب",
        lemma: "كَذَّبَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "denied/rejected",
          ur: "جھٹلایا",
          hi: "झुठलाया",
          bn: "মিথ্যা বলেছে",
          tr: "yalanladı",
          id: "mendustakan",
          ar: "أَنْكَرَتْ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb with feminine marker (ت) for Thamud (collective noun). They actively rejected truth.",
          ur: "فعل ماضی مع ت تانیث برائے ثمود (اسم جمع)۔ انہوں نے سچائی کو رد کیا۔"
        }
      },
      {
        position: 2,
        arabic: "ثَمُودُ",
        transliteration: "Thamoodu",
        root: "ث م د",
        lemma: "ثَمُود",
        posTag: "PN",
       posLabel: "PN",
        meaning: {
          en: "Thamud (the people)",
          ur: "ثمود (قوم)",
          hi: "समूद (क़ौम)",
          bn: "সামুদ (জাতি)",
          tr: "Semud",
          id: "Tsamud",
          ar: "قَوْم ثَمُود"
        },
        grammarRole: "proper_noun",
        grammarExplanations: {
          en: "Ancient Arabian tribe, dwelt in rock-carved homes in Al-Hijr. Prophet Salih was sent to them.",
          ur: "قدیم عربی قبیلہ، الحجر میں پتھر کے گھروں میں رہتے تھے۔ ان کی طرف حضرت صالح بھیجے گئے۔"
        },
        advanced: {
          frequency: "26 times in Quran",
          linguisticMiracle: "Thamud mentioned as example of 'dassaa' - they buried their souls in sin",
          memoryHook: "Thamud = They Mocked Under Darkness (buried truth)"
        }
      },
      {
        position: 3,
        arabic: "بِطَغْوَاهَا",
        transliteration: "bi-taghwaahaa",
        root: "ط غ و",
        lemma: "طَغْوَى",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "in their transgression",
          ur: "اپنی سرکشی میں",
          hi: "अपनी सरकशी में",
          bn: "তাদের অবাধ্যতায়",
          tr: "azgınlığıyla",
          id: "karena kesombongannya",
          ar: "ظُلْمِهَا"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Bi (by means of/because of) + taghwa (transgression). Their denial was CAUSED BY their transgression.",
          ur: "ب (کے ذریعے/کی وجہ سے) + طغویٰ (سرکشی)۔ ان کا انکار ان کی سرکشی کی وجہ سے تھا۔"
        },
        advanced: {
          rootFamily: ["طغى (to transgress)", "طغيان (tyranny)", "طاغوت (tyrant)"],
          frequency: "2 times",
          linguisticMiracle: "Taghwa caused takdhib - transgression leads to denial of truth",
          balagha: "Transitioning from abstract principles to concrete historical example"
        }
      }
    ],
    dependencyStructure: "كَذَّبَتْ (verb) + ثَمُودُ (subject) + بِطَغْوَاهَا (causal phrase)"
  },

  12: {
    ayahNumber: 12,
    arabic: "إِذِ انبَعَثَ أَشْقَاهَا",
    translation: {
      en: "When the most wretched of them was sent forth",
      ur: "جب ان کا سب سے بدبخت آدمی اٹھا",
      hi: "जब उनका सबसे बदबख़्त आदमी उठा",
      bn: "যখন তাদের সবচেয়ে দুর্ভাগা ব্যক্তি উঠল",
      tr: "Hani en bedbahtları ileri atıldı",
      id: "Ketika orang yang paling celaka di antara mereka bangkit",
    structure: {
      relationships: [{ from: 2, to: 3, label: 'موصوف + صفت' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "إِذِ",
        transliteration: "idhi",
        root: "إ ذ",
        lemma: "إِذْ",
        posTag: "T",
       posLabel: "T",
        meaning: {
          en: "When",
          ur: "جب",
          hi: "जब",
          bn: "যখন",
          tr: "hani",
          id: "ketika",
          ar: "حِينَ"
        },
        grammarRole: "temporal_particle"
      },
      {
        position: 2,
        arabic: "انبَعَثَ",
        transliteration: "inba'atha",
        root: "ب ع ث",
        lemma: "اِنْبَعَثَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "was sent forth/rose up",
          ur: "اٹھا/بھیجا گیا",
          hi: "उठा/भेजा गया",
          bn: "উঠল/প্রেরিত হল",
          tr: "ileri atıldı",
          id: "bangkit",
          ar: "قَامَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form VII (انفعل - reflexive/passive). He rose of his own will to do the deed.",
          ur: "فعل ماضی، باب انفعال (انعکاسی/مجہول)۔ وہ اپنی مرضی سے کام کرنے اٹھا۔"
        },
        advanced: {
          verbForm: "VII - اِنْبَعَثَ (to be sent forth, rise up)",
          rootFamily: ["بعث (to send/resurrect)", "بعثة (mission)", "مبعوث (sent)"],
          frequency: "3 times",
          linguisticMiracle: "Same root as Ba'th (resurrection) - he 'resurrected' himself for evil"
        }
      },
      {
        position: 3,
        arabic: "أَشْقَاهَا",
        transliteration: "ashqaahaa",
        root: "ش ق و",
        lemma: "أَشْقَى",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "the most wretched of them",
          ur: "ان کا سب سے بدبخت",
          hi: "उनका सबसे बदबख़्त",
          bn: "তাদের সবচেয়ে দুর্ভাগা",
          tr: "en bedbahtları",
          id: "yang paling celaka",
          ar: "أَشَدُّهُم شَقَاوَةً"
        },
        grammarRole: "noun_nominative",
        grammarExplanations: {
          en: "Superlative form. The worst among them took the lead in evil. His name was Qidar bin Salif.",
          ur: "صیغہ افضل۔ ان میں سب سے برا شر میں پیش قدمی کرنے والا۔ اس کا نام قیدار بن صالف تھا۔"
        },
        advanced: {
          rootFamily: ["شقاء (wretchedness)", "شقي (wretched)", "شقاوة (misery)"],
          frequency: "6 times",
          linguisticMiracle: "Connects to Surah 92:15 الأشقى - same word, similar context",
          balagha: "Even among sinners, there's a 'most wretched' - degrees of corruption"
        }
      }
    ],
    dependencyStructure: "إِذِ (temporal) + انبَعَثَ (verb) + أَشْقَاهَا (subject)"
  },

  13: {
    ayahNumber: 13,
    arabic: "فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَاهَا",
    translation: {
      en: "And the messenger of Allah said to them: (Be cautious of) the she-camel of Allah and her drink",
      ur: "تو اللہ کے رسول نے ان سے کہا اللہ کی اونٹنی اور اس کے پانی پینے (کا خیال رکھو)",
      hi: "तो अल्लाह के रसूल ने उनसे कहा अल्लाह की ऊँटनी और उसके पानी पीने (का ख़्याल रखो)",
      bn: "তখন আল্লাহর রাসূল তাদের বললেন আল্লাহর উটনী এবং তার পানি পানের (ব্যাপারে সাবধান হও)",
      tr: "Allah'ın Resûlü onlara: Allah'ın devesine ve onun su içmesine dikkat edin, dedi",
      id: "Lalu Rasul Allah berkata kepada mereka: (Peliharalah) unta betina Allah dan minumannya"
    },
    words: [
      {
        position: 1,
        arabic: "فَقَالَ",
        transliteration: "fa-qaala",
        root: "ق و ل",
        lemma: "قَالَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "Then said",
          ur: "تو کہا",
          hi: "तो कहा",
          bn: "তখন বললেন",
          tr: "dedi",
          id: "berkata",
          ar: "فَتَكَلَّمَ"
        },
        grammarRole: "verb_perfect"
      },
      {
        position: 2,
        arabic: "لَهُمْ",
        transliteration: "lahum",
        root: "ل",
        lemma: "لِ",
        posTag: "PREP",
       posLabel: "PREP",
        meaning: {
          en: "to them",
          ur: "ان سے",
          hi: "उनसे",
          bn: "তাদের",
          tr: "onlara",
          id: "kepada mereka",
          ar: "إِلَيْهِم"
        },
        grammarRole: "preposition_pronoun"
      },
      {
        position: 3,
        arabic: "رَسُولُ",
        transliteration: "rasoolu",
        root: "ر س ل",
        lemma: "رَسُول",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "the messenger",
          ur: "رسول",
          hi: "रसूल",
          bn: "রাসূল",
          tr: "Resûl",
          id: "Rasul",
          ar: "نَبِيّ"
        },
        grammarRole: "noun_nominative"
      },
      {
        position: 4,
        arabic: "اللَّهِ",
        transliteration: "Allaahi",
        root: "أ ل ه",
        lemma: "اللّٰه",
        posTag: "PN",
       posLabel: "PN",
        meaning: {
          en: "of Allah",
          ur: "اللہ کے",
          hi: "अल्लाह के",
          bn: "আল্লাহর",
          tr: "Allah'ın",
          id: "Allah",
          ar: "اللّٰه"
        },
        grammarRole: "proper_noun_genitive"
      },
      {
        position: 5,
        arabic: "نَاقَةَ",
        transliteration: "naaqata",
        root: "ن و ق",
        lemma: "نَاقَة",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "(Beware of) the she-camel",
          ur: "اونٹنی (کا خیال رکھو)",
          hi: "ऊँटनी (का ख़्याल रखो)",
          bn: "উটনী (সাবধান হও)",
          tr: "deveye (dikkat edin)",
          id: "unta betina (peliharalah)",
          ar: "احْذَرُوا النَّاقَة"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Warning accusative (منصوب على التحذير). The she-camel was a miracle - emerged from rock.",
          ur: "تحذیری منصوب۔ اونٹنی ایک معجزہ تھی - چٹان سے نکلی۔"
        },
        advanced: {
          rootFamily: ["ناقة (she-camel)", "نوق (camels)"],
          frequency: "7 times in Quran",
          linguisticMiracle: "The naaqah was Allah's sign - harming it = harming Allah's symbol",
          balagha: "Warning format: noun alone with implied verb 'beware of'"
        }
      },
      {
        position: 6,
        arabic: "اللَّهِ",
        transliteration: "Allaahi",
        root: "أ ل ه",
        lemma: "اللّٰه",
        posTag: "PN",
       posLabel: "PN",
        meaning: {
          en: "of Allah",
          ur: "اللہ کی",
          hi: "अल्लाह की",
          bn: "আল্লাহর",
          tr: "Allah'ın",
          id: "Allah",
          ar: "اللّٰه"
        },
        grammarRole: "proper_noun_genitive"
      },
      {
        position: 7,
        arabic: "وَسُقْيَاهَا",
        transliteration: "wa-suqyaahaa",
        root: "س ق ي",
        lemma: "سُقْيَا",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "and her drink",
          ur: "اور اس کا پانی",
          hi: "और उसका पानी",
          bn: "এবং তার পানি",
          tr: "ve onun su içmesi",
          id: "dan minumannya",
          ar: "شُرْبَهَا"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "The camel had designated drinking days that the tribe was to respect.",
          ur: "اونٹنی کے پانی پینے کے مخصوص دن تھے جن کا قبیلے کو احترام کرنا تھا۔"
        },
        advanced: {
          rootFamily: ["سقي (to water)", "ساقي (one who gives water)", "استسقاء (seeking water)"],
          frequency: "2 times",
          memoryHook: "Suqya = Supply of water for drinking"
        }
      }
    ],
    dependencyStructure: "فَقَالَ لَهُمْ (verb+object) + رَسُولُ اللَّهِ (subject) + نَاقَةَ اللَّهِ وَسُقْيَاهَا (warning)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنبِهِمْ فَسَوَّاهَا",
    translation: {
      en: "But they denied him and hamstrung her. So their Lord destroyed them for their sin and made it equal (leveled it)",
      ur: "تو انہوں نے اسے جھٹلایا اور اسے مار ڈالا پھر ان کے رب نے ان پر عذاب نازل کیا ان کے گناہ کی وجہ سے اور اسے برابر کر دیا",
      hi: "तो उन्होंने उसे झुठलाया और उसे मार डाला फिर उनके रब ने उन पर अज़ाब नाज़िल किया उनके गुनाह की वजह से और उसे बराबर कर दिया",
      bn: "কিন্তু তারা তাকে মিথ্যাবাদী বলল এবং তাকে হত্যা করল। তখন তাদের প্রতিপালক তাদের পাপের কারণে তাদের ধ্বংস করলেন এবং সমান করে দিলেন",
      tr: "Fakat onu yalanladılar ve onu boğazladılar. Bunun üzerine Rableri günahları yüzünden onları helak etti de orayı yerle bir etti",
      id: "Lalu mereka mendustakannya dan menyembelihnya. Maka Tuhan mereka membinasakan mereka karena dosa mereka dan menyamaratakan (azab)"
    },
    words: [
      {
        position: 1,
        arabic: "فَكَذَّبُوهُ",
        transliteration: "fa-kadhdhaboohu",
        root: "ك ذ ب",
        lemma: "كَذَّبَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "But they denied him",
          ur: "تو انہوں نے اسے جھٹلایا",
          hi: "तो उन्होंने उसे झुठलाया",
          bn: "তারা তাকে মিথ্যাবাদী বলল",
          tr: "onu yalanladılar",
          id: "mereka mendustakannya",
          ar: "كَذَّبُوا الرَّسُول"
        },
        grammarRole: "verb_perfect"
      },
      {
        position: 2,
        arabic: "فَعَقَرُوهَا",
        transliteration: "fa-'aqaroohaa",
        root: "ع ق ر",
        lemma: "عَقَرَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "then they hamstrung her",
          ur: "اور اسے مار ڈالا",
          hi: "और उसे मार डाला",
          bn: "এবং তাকে হত্যা করল",
          tr: "ve onu boğazladılar",
          id: "dan menyembelihnya",
          ar: "قَتَلُوهَا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form I. 'Aqara = to hamstring (cut legs), a cruel way to kill a camel.",
          ur: "فعل ماضی، باب اول۔ عقر = ٹانگیں کاٹنا، اونٹ کو مارنے کا ظالمانہ طریقہ۔"
        },
        advanced: {
          verbForm: "I - عَقَرَ (to hamstring, wound)",
          rootFamily: ["عقر (wounding)", "عقور (one who wounds)", "عاقر (barren - wounded in fertility)"],
          frequency: "4 times",
          linguisticMiracle: "They 'aqar the naaqah, so Allah 'aqar their existence"
        }
      },
      {
        position: 3,
        arabic: "فَدَمْدَمَ",
        transliteration: "fa-damdama",
        root: "د م د م",
        lemma: "دَمْدَمَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "So He destroyed",
          ur: "پھر ہلاک کیا",
          hi: "फिर हलाक किया",
          bn: "তখন ধ্বংস করলেন",
          tr: "helak etti",
          id: "membinasakan",
          ar: "أَهْلَكَهُم"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, quadriliteral root (دمدم). Emphatic destruction through repetition of root.",
          ur: "فعل ماضی، جذر رباعی (دمدم)۔ جڑ کی تکرار کے ذریعے زور دار تباہی۔"
        },
        advanced: {
          verbForm: "Quadriliteral - دَمْدَمَ (to destroy completely)",
          rootFamily: ["دم (blood - suggests bloody destruction)", "دمدمة (complete destruction)"],
          frequency: "1 time in Quran (unique)",
          linguisticMiracle: "Onomatopoeia - damdama sounds like crushing, rumbling destruction",
          balagha: "The repeated syllables (dam-dam) suggest repeated, complete destruction"
        }
      },
      {
        position: 4,
        arabic: "عَلَيْهِمْ",
        transliteration: "'alayhim",
        root: "ع ل و",
        lemma: "عَلَى",
        posTag: "PREP",
       posLabel: "PREP",
        meaning: {
          en: "upon them",
          ur: "ان پر",
          hi: "उन पर",
          bn: "তাদের উপর",
          tr: "onları",
          id: "atas mereka",
          ar: "عَلَيْهِم"
        },
        grammarRole: "preposition_pronoun"
      },
      {
        position: 5,
        arabic: "رَبُّهُم",
        transliteration: "rabbuhum",
        root: "ر ب ب",
        lemma: "رَبّ",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "their Lord",
          ur: "ان کا رب",
          hi: "उनका रब",
          bn: "তাদের প্রতিপালক",
          tr: "Rableri",
          id: "Tuhan mereka",
          ar: "مَالِكُهُم"
        },
        grammarRole: "noun_nominative"
      },
      {
        position: 6,
        arabic: "بِذَنبِهِمْ",
        transliteration: "bi-dhanbihim",
        root: "ذ ن ب",
        lemma: "ذَنْب",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "for their sin",
          ur: "ان کے گناہ کی وجہ سے",
          hi: "उनके गुनाह की वजह से",
          bn: "তাদের পাপের কারণে",
          tr: "günahları yüzünden",
          id: "karena dosa mereka",
          ar: "بِسَبَب ظُلْمِهِم"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Bi (because of) + dhanb (sin). Justice: punishment matched the crime.",
          ur: "ب (کی وجہ سے) + ذنب (گناہ)۔ انصاف: سزا جرم کے مطابق۔"
        }
      },
      {
        position: 7,
        arabic: "فَسَوَّاهَا",
        transliteration: "fa-sawwaahaa",
        root: "س و ي",
        lemma: "سَوَّى",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "and leveled it (made equal)",
          ur: "اور برابر کر دیا",
          hi: "और बराबर कर दिया",
          bn: "এবং সমান করে দিলেন",
          tr: "yerle bir etti",
          id: "menyamaratakan",
          ar: "سَوَّى الْعَذَاب"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form II. Same root as sawwaahaa in verse 7 - here means leveled to the ground.",
          ur: "فعل ماضی، باب تفعیل۔ آیت 7 میں سواھا جیسا ہی جڑ - یہاں مطلب زمین کے برابر کرنا۔"
        },
        advanced: {
          verbForm: "II - سَوَّى (to make equal, level)",
          linguisticMiracle: "Same verb used for perfecting the soul (v.7) and leveling Thamud (v.14) - sawwaa can create or destroy",
          balagha: "Devastating wordplay: Allah sawwaa the nafs (perfected it), Thamud dassaa it, so Allah sawwaa them (leveled them)"
        }
      }
    ],
    dependencyStructure: "فَكَذَّبُوهُ (denial) + فَعَقَرُوهَا (crime) + فَدَمْدَمَ... بِذَنبِهِمْ (punishment) + فَسَوَّاهَا (result)",
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "وَلَا يَخَافُ عُقْبَاهَا",
    translation: {
      en: "And He does not fear the consequence thereof",
      ur: "اور وہ اس کے انجام سے نہیں ڈرتا",
      hi: "और वह उसके अंजाम से नहीं डरता",
      bn: "এবং তিনি এর পরিণামের ভয় করেন না",
      tr: "Ve bunun sonucundan korkmaz",
      id: "Dan Dia tidak takut akibatnya"
    },
    words: [
      {
        position: 1,
        arabic: "وَلَا",
        transliteration: "wa-laa",
        root: "ل ا",
        lemma: "لَا",
        posTag: "NEG",
       posLabel: "NEG",
        meaning: {
          en: "And not",
          ur: "اور نہیں",
          hi: "और नहीं",
          bn: "এবং না",
          tr: "ve (asla)",
          id: "dan tidak",
          ar: "وَلَيْسَ"
        },
        grammarRole: "negative_particle"
      },
      {
        position: 2,
        arabic: "يَخَافُ",
        transliteration: "yakhafu",
        root: "خ و ف",
        lemma: "خَافَ",
        posTag: "V",
       posLabel: "V",
        meaning: {
          en: "He fears",
          ur: "وہ ڈرتا",
          hi: "वह डरता",
          bn: "তিনি ভয় করেন",
          tr: "korkmaz",
          id: "takut",
          ar: "يَخْشَى"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form I. The subject is Allah - He fears no consequence for His justice.",
          ur: "فعل مضارع، باب اول۔ فاعل اللہ ہے - وہ اپنے انصاف کے کسی نتیجے سے نہیں ڈرتا۔"
        },
        advanced: {
          verbForm: "I - خَافَ (to fear)",
          rootFamily: ["خوف (fear)", "خائف (one who fears)", "تخويف (frightening)"],
          frequency: "124 times in various forms",
          linguisticMiracle: "Allah, unlike human rulers, fears no retaliation or consequence",
          balagha: "Statement of absolute divine sovereignty and power"
        }
      },
      {
        position: 3,
        arabic: "عُقْبَاهَا",
        transliteration: "'uqbaahaa",
        root: "ع ق ب",
        lemma: "عُقْبَى",
        posTag: "N",
       posLabel: "N",
        meaning: {
          en: "its consequence",
          ur: "اس کا انجام",
          hi: "उसका अंजाम",
          bn: "এর পরিণাম",
          tr: "sonucu",
          id: "akibatnya",
          ar: "نَتِيجَتَهَا"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "'Uqbaa = consequence, aftermath. Allah destroyed them with no fear of retaliation.",
          ur: "عقبیٰ = نتیجہ، انجام۔ اللہ نے انہیں بدلے کے خوف کے بغیر ہلاک کیا۔"
        },
        advanced: {
          rootFamily: ["عقب (heel/end)", "عاقبة (outcome)", "عقاب (punishment)"],
          frequency: "4 times",
          linguisticMiracle: "Perfect ending: Allah's action is final, unchallengeable, consequence-free",
          balagha: "Surah ends with absolute divine authority - contrast with human powerlessness"
        }
      }
    ],
    dependencyStructure: "وَلَا (negative) + يَخَافُ (verb) + عُقْبَاهَا (object) - Divine conclusion",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  }
};

export default TREEBANK_DATA;
