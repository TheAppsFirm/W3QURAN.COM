/**
 * Surah Al-Layl (92) - Quranic Arabic Treebank Data
 * The Night
 * Total Ayahs: 21
 * Revelation: Makki
 * Theme: Two paths - generosity leading to ease, miserliness leading to hardship
 */

export const TREEBANK_DATA = {
  surahId: 92,
  surahName: "Al-Layl",
  surahNameArabic: "الليل",
  totalAyahs: 21,
  totalWords: 71,
  revelationType: "Makki",
  theme: "The contrast between those who give and believe versus those who are miserly and deny, and their respective outcomes",

  translation: {
    en: "The Night - This surah presents a stark contrast between two types of people: those who give, are God-conscious, and believe in goodness versus those who are stingy, self-sufficient, and deny the truth. Each path leads to its natural consequence.",
    ur: "رات - یہ سورت دو قسم کے لوگوں کے درمیان واضح فرق پیش کرتی ہے: جو دیتے ہیں، تقویٰ رکھتے ہیں اور نیکی میں یقین رکھتے ہیں بمقابلہ جو بخیل ہیں، خود کفیل ہیں اور سچائی کا انکار کرتے ہیں۔",
    hi: "रात - यह सूरह दो प्रकार के लोगों के बीच स्पष्ट अंतर प्रस्तुत करती है: जो देते हैं, ईश्वर-भय रखते हैं और अच्छाई में विश्वास करते हैं बनाम जो कंजूस हैं और सच्चाई से इनकार करते हैं।",
    bn: "রাত - এই সূরা দুই ধরনের মানুষের মধ্যে সুস্পষ্ট পার্থক্য উপস্থাপন করে: যারা দেয়, আল্লাহ-ভীরু এবং সত্যে বিশ্বাস করে বনাম যারা কৃপণ এবং সত্যকে অস্বীকার করে।",
    tr: "Gece - Bu sure iki tip insan arasındaki keskin karşıtlığı sunar: veren, Allah'tan korkan ve iyiliğe inananlar ile cimri, kendine yeterli ve hakikati inkar edenler.",
    id: "Malam - Surah ini menyajikan kontras yang tajam antara dua tipe manusia: yang memberi, bertakwa, dan percaya pada kebaikan versus yang kikir, merasa cukup diri, dan mengingkari kebenaran."
  },

  1: {
    ayahNumber: 1,
    arabic: "وَاللَّيْلِ إِذَا يَغْشَىٰ",
    translation: {
      en: "By the night when it covers",
      ur: "قسم ہے رات کی جب وہ چھا جائے",
      hi: "क़सम है रात की जब वह छा जाए",
      bn: "শপথ রাতের যখন সে আচ্ছাদিত করে",
      tr: "Yemin olsun örtüp bürüdüğü vakit geceye",
      id: "Demi malam apabila menutupi"
    },
    words: [
      {
        position: 1,
        arabic: "وَاللَّيْلِ",
        transliteration: "Wal-layli",
        root: "ل ي ل",
        lemma: "لَيْل",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "By the night",
          ur: "قسم ہے رات کی",
          hi: "रात की क़सम",
          bn: "রাতের শপথ",
          tr: "Geceye yemin",
          id: "Demi malam",
          ar: "قَسَمٌ بِاللَّيْل"
        },
        grammarRole: "oath_particle_noun",
        grammarExplanations: {
          en: "Waw of oath (قسم) + noun in genitive case. Night represents darkness, rest, and concealment.",
          ur: "واو قسم + اسم مجرور۔ رات ظلمت، آرام اور پوشیدگی کی علامت ہے۔"
        },
        advanced: {
          rootFamily: ["ليل (night)", "ليلة (a night)", "ليلي (nocturnal)"],
          frequency: "92 times in Quran",
          linguisticMiracle: "Night mentioned first, representing the covering of truth by those who deny",
          balagha: "Oath by natural phenomenon to affirm human spiritual choices",
          memoryHook: "Layl = Night that covers and conceals"
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
          tr: "vakit/zaman",
          id: "apabila",
          ar: "حِينَ"
        },
        grammarRole: "conditional_particle",
        grammarExplanations: {
          en: "Conditional particle for time, indicating the specific moment of the oath",
          ur: "شرطیہ حرف برائے وقت، قسم کے خاص لمحے کی نشاندہی"
        }
      },
      {
        position: 3,
        arabic: "يَغْشَىٰ",
        transliteration: "yaghshaa",
        root: "غ ش ي",
        lemma: "غَشِيَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "it covers/envelops",
          ur: "چھا جائے",
          hi: "छा जाए",
          bn: "আচ্ছাদিত করে",
          tr: "örttüğünde",
          id: "menutupi",
          ar: "يُغَطِّي"
        },
        grammarRole: "verb_present",
        grammarExplanations: {
          en: "Imperfect verb, Form I. Night 'covers' everything in darkness, paralleling how denial covers the heart",
          ur: "فعل مضارع، باب اول۔ رات ہر چیز کو ڈھانپ لیتی ہے، جیسے انکار دل کو ڈھانپتا ہے"
        },
        advanced: {
          verbForm: "I - غَشِيَ (to cover, envelop, overwhelm)",
          rootFamily: ["غشاوة (covering)", "غشي (to cover)", "غاشية (overwhelming event - Surah 88)"],
          frequency: "10 times in Quran",
          tajweedTips: "Alif maqsurah (ى) at end, pronounced as long 'aa'"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + اللَّيْلِ (sworn object) + إِذَا يَغْشَىٰ (temporal clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' }
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَالنَّهَارِ إِذَا تَجَلَّىٰ",
    translation: {
      en: "And by the day when it appears (in brightness)",
      ur: "اور دن کی جب وہ روشن ہو",
      hi: "और दिन की जब वह रोशन हो",
      bn: "এবং দিনের যখন তা উজ্জ্বল হয়",
      tr: "Ve açılıp aydınlandığı vakit gündüze",
      id: "Dan siang apabila terang benderang"
    },
    words: [
      {
        position: 1,
        arabic: "وَالنَّهَارِ",
        transliteration: "Wan-nahaari",
        root: "ن ه ر",
        lemma: "نَهَار",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "And by the day",
          ur: "اور دن کی",
          hi: "और दिन की",
          bn: "এবং দিনের",
          tr: "Ve gündüze",
          id: "Dan siang",
          ar: "وَقَسَمٌ بِالنَّهَار"
        },
        grammarRole: "oath_particle_noun",
        grammarExplanations: {
          en: "Waw of oath + noun in genitive case. Day represents clarity and truth becoming manifest.",
          ur: "واو قسم + اسم مجرور۔ دن وضاحت اور سچائی کے ظاہر ہونے کی علامت ہے۔"
        },
        advanced: {
          rootFamily: ["نهر (river - flowing like daylight)", "نهار (day)", "نهاري (diurnal)"],
          frequency: "57 times in Quran",
          balagha: "Paired with night to show divine control over alternation",
          memoryHook: "Nahaar = daytime when rivers (nahr) shine"
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
        arabic: "تَجَلَّىٰ",
        transliteration: "tajallaa",
        root: "ج ل و",
        lemma: "تَجَلَّى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "it appears in brightness/manifests",
          ur: "روشن ہو",
          hi: "रोशन हो",
          bn: "উজ্জ্বল হয়",
          tr: "aydınlandığında",
          id: "terang benderang",
          ar: "يَظْهَر"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form V (تَفَعَّل - reflexive/intensive). Day 'unveils itself' - truth manifesting",
          ur: "فعل ماضی، باب تفعّل (انعکاسی/تاکیدی)۔ دن 'خود کو ظاہر کرتا ہے' - سچائی کا ظہور"
        },
        advanced: {
          verbForm: "V - تَجَلَّى (to manifest, appear, unveil)",
          rootFamily: ["جلاء (clarity)", "جلوة (manifestation)", "تجلي (divine manifestation)"],
          frequency: "4 times in Quran",
          linguisticMiracle: "Same root used for Allah's tajalli (manifestation) to Musa on Mount Sinai",
          balagha: "Contrast: Night covers (ghashiya) vs Day manifests (tajalla)"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + النَّهَارِ (sworn object) + إِذَا تَجَلَّىٰ (temporal clause)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ",
    translation: {
      en: "And by Him who created the male and female",
      ur: "اور اس ذات کی قسم جس نے نر اور مادہ بنایا",
      hi: "और उसकी क़सम जिसने नर और मादा बनाया",
      bn: "এবং তাঁর শপথ যিনি নর ও নারী সৃষ্টি করেছেন",
      tr: "Ve erkeği ve dişiyi yaratana",
      id: "Dan Dzat yang menciptakan laki-laki dan perempuan"
    },
    words: [
      {
        position: 1,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "REL",
        posLabel: "REL",
        meaning: {
          en: "And by Him who / And that which",
          ur: "اور اس کی جو",
          hi: "और उसकी जो",
          bn: "এবং যে",
          tr: "Ve (o ki)",
          id: "Dan yang",
          ar: "وَالَّذِي"
        },
        grammarRole: "relative_pronoun",
        grammarExplanations: {
          en: "'Maa' here is masdariyyah (refers to the act) or mawsulah (refers to Allah). Most scholars say it refers to Allah who created.",
          ur: "یہاں 'ما' مصدریہ ہے (فعل کی طرف اشارہ) یا موصولہ (اللہ کی طرف اشارہ)۔ اکثر علماء کہتے ہیں یہ خالق اللہ کی طرف اشارہ ہے۔"
        }
      },
      {
        position: 2,
        arabic: "خَلَقَ",
        transliteration: "khalaqa",
        root: "خ ل ق",
        lemma: "خَلَقَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "created",
          ur: "پیدا کیا",
          hi: "पैदा किया",
          bn: "সৃষ্টি করেছেন",
          tr: "yarattı",
          id: "menciptakan",
          ar: "أَوْجَدَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form I. Allah created diversity - male/female, night/day, easy/hard paths.",
          ur: "فعل ماضی، باب اول۔ اللہ نے تنوع پیدا کیا - نر/مادہ، رات/دن، آسان/مشکل راستے۔"
        },
        advanced: {
          verbForm: "I - خَلَقَ (to create)",
          rootFamily: ["خلق (creation)", "خالق (Creator)", "مخلوق (creature)", "خُلُق (character)"],
          frequency: "184 times in Quran",
          memoryHook: "Khalaqa = Creator's unique act of bringing into existence"
        }
      },
      {
        position: 3,
        arabic: "الذَّكَرَ",
        transliteration: "adh-dhakara",
        root: "ذ ك ر",
        lemma: "ذَكَر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the male",
          ur: "نر",
          hi: "नर",
          bn: "পুরুষ",
          tr: "erkeği",
          id: "laki-laki",
          ar: "الذُّكُور"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Direct object, accusative case. From same root as 'dhikr' (remembrance) - males often linked to carrying on legacy.",
          ur: "مفعول بہ، منصوب۔ 'ذکر' (یاد) کے ہم جذر - مرد اکثر میراث جاری رکھنے سے جڑے۔"
        },
        advanced: {
          rootFamily: ["ذكر (to mention/remember)", "ذكرى (reminder)", "تذكرة (reminder)"],
          linguisticMiracle: "Root ذ-ك-ر connects male to 'remembrance' - one who is mentioned/remembered"
        }
      },
      {
        position: 4,
        arabic: "وَالْأُنثَىٰ",
        transliteration: "wal-unthaa",
        root: "أ ن ث",
        lemma: "أُنْثَى",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "and the female",
          ur: "اور مادہ",
          hi: "और मादा",
          bn: "এবং নারী",
          tr: "ve dişiyi",
          id: "dan perempuan",
          ar: "الْإِنَاث"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Direct object, accusative case. Pair completes the divine design of complementary opposites.",
          ur: "مفعول بہ، منصوب۔ جوڑا تکمیلی اضداد کے الٰہی ڈیزائن کو مکمل کرتا ہے۔"
        },
        advanced: {
          rootFamily: ["أنث (to be feminine)", "مؤنث (feminine)", "إناث (females)"],
          balagha: "Male-female pairing parallels night-day: complementary opposites showing Allah's design"
        }
      }
    ],
    dependencyStructure: "وَ (oath) + مَا (relative) + خَلَقَ (verb) + الذَّكَرَ وَالْأُنثَىٰ (objects)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
    translation: {
      en: "Indeed, your efforts are diverse",
      ur: "بیشک تمہاری کوشش مختلف ہے",
      hi: "बेशक तुम्हारी कोशिश अलग-अलग है",
      bn: "নিশ্চয়ই তোমাদের প্রচেষ্টা বিভিন্ন",
      tr: "Şüphesiz çalışmalarınız farklı farklıdır",
      id: "Sesungguhnya usaha kalian memang berbeda-beda"
    },
    words: [
      {
        position: 1,
        arabic: "إِنَّ",
        transliteration: "inna",
        root: "أ ن ن",
        lemma: "إِنَّ",
        posTag: "ACC",
        posLabel: "ACC",
        meaning: {
          en: "Indeed/Verily",
          ur: "بیشک",
          hi: "बेशक",
          bn: "নিশ্চয়ই",
          tr: "Şüphesiz",
          id: "Sesungguhnya",
          ar: "تَأْكِيد"
        },
        grammarRole: "emphatic_particle",
        grammarExplanations: {
          en: "Emphatic particle that takes a noun in accusative as its subject. Introduces the main message after the oaths.",
          ur: "تاکیدی حرف جو اسم منصوب کو بطور فاعل لیتا ہے۔ قسموں کے بعد اصل پیغام پیش کرتا ہے۔"
        }
      },
      {
        position: 2,
        arabic: "سَعْيَكُمْ",
        transliteration: "sa'yakum",
        root: "س ع ي",
        lemma: "سَعْي",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "your effort/striving",
          ur: "تمہاری کوشش",
          hi: "तुम्हारी कोशिश",
          bn: "তোমাদের প্রচেষ্টা",
          tr: "çalışmalarınız",
          id: "usaha kalian",
          ar: "عَمَلُكُم"
        },
        grammarRole: "noun_accusative_subject_of_inna",
        grammarExplanations: {
          en: "Subject of إنّ (accusative) + possessive pronoun 'kum' (your, plural). Sa'y means deliberate effort, not accidental action.",
          ur: "إنّ کا اسم (منصوب) + ضمیر ملکیت 'کم' (تمہاری)۔ سعی کا مطلب جان بوجھ کر کوشش ہے۔"
        },
        advanced: {
          rootFamily: ["سعي (to strive)", "مسعى (place of striving - Sa'i between Safa and Marwa)", "ساعٍ (one who strives)"],
          frequency: "30 times in Quran",
          linguisticMiracle: "Same root as Sa'i in Hajj - symbolic of life's journey and effort",
          memoryHook: "Sa'y = Striving (like the sa'i between Safa and Marwa)"
        }
      },
      {
        position: 3,
        arabic: "لَشَتَّىٰ",
        transliteration: "la-shattaa",
        root: "ش ت ت",
        lemma: "شَتَّى",
        posTag: "ADJ",
        posLabel: "ADJ",
        meaning: {
          en: "surely diverse/different",
          ur: "یقیناً مختلف",
          hi: "निश्चय ही विभिन्न",
          bn: "অবশ্যই বিভিন্ন",
          tr: "muhakkak farklı",
          id: "sungguh berbeda-beda",
          ar: "مُخْتَلِفَة"
        },
        grammarRole: "predicate_of_inna",
        grammarExplanations: {
          en: "Lam of emphasis (لام التوكيد) + adjective as predicate. Shattaa means scattered, dispersed, various.",
          ur: "لام تاکید + صفت بطور خبر۔ شتیٰ کا مطلب بکھرا ہوا، منتشر، مختلف۔"
        },
        advanced: {
          rootFamily: ["شتات (scattering)", "شتى (various)", "تشتت (dispersion)"],
          frequency: "4 times in Quran",
          balagha: "The word itself sounds 'scattered' - mimicking its meaning",
          linguisticMiracle: "Sets up the binary: two fundamentally different paths humans choose"
        }
      }
    ],
    dependencyStructure: "إِنَّ (emphasis) + سَعْيَكُمْ (subject) + لَشَتَّىٰ (predicate) - Main thesis after oaths",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ",
    translation: {
      en: "As for he who gives and fears Allah",
      ur: "پس جس نے دیا اور تقویٰ اختیار کیا",
      hi: "तो जिसने दिया और तक़वा इख़्तियार किया",
      bn: "অতএব যে দান করেছে এবং তাকওয়া অবলম্বন করেছে",
      tr: "Kim verir ve sakınırsa",
      id: "Maka adapun orang yang memberi dan bertakwa"
    },
    words: [
      {
        position: 1,
        arabic: "فَأَمَّا",
        transliteration: "fa-ammaa",
        root: "أ م م",
        lemma: "أَمَّا",
        posTag: "COND",
        posLabel: "COND",
        meaning: {
          en: "As for / Regarding",
          ur: "پس جہاں تک",
          hi: "तो जहाँ तक",
          bn: "অতএব যে",
          tr: "Kim ki",
          id: "Maka adapun",
          ar: "أَمَّا الَّذِي"
        },
        grammarRole: "conditional_particle",
        grammarExplanations: {
          en: "Fa (consequence) + amma (as for). Introduces the first of two contrasting categories of people.",
          ur: "فا (نتیجہ) + امّا (جہاں تک)۔ دو متضاد قسم کے لوگوں میں سے پہلی قسم متعارف کراتا ہے۔"
        }
      },
      {
        position: 2,
        arabic: "مَنْ",
        transliteration: "man",
        root: "م ن",
        lemma: "مَنْ",
        posTag: "REL",
        posLabel: "REL",
        meaning: {
          en: "he who / whoever",
          ur: "جو",
          hi: "जो",
          bn: "যে",
          tr: "kim",
          id: "orang yang",
          ar: "الَّذِي"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 3,
        arabic: "أَعْطَىٰ",
        transliteration: "a'taa",
        root: "ع ط و",
        lemma: "أَعْطَى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "gives/gave",
          ur: "دیا",
          hi: "दिया",
          bn: "দান করেছে",
          tr: "verir",
          id: "memberi",
          ar: "بَذَلَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form IV (أَفْعَل - causative). First characteristic: generous giving without specification - implies all kinds of giving.",
          ur: "فعل ماضی، باب افعال (متعدی)۔ پہلی خصوصیت: بغیر تخصیص کے سخاوت سے دینا - ہر قسم کا دینا شامل ہے۔"
        },
        advanced: {
          verbForm: "IV - أَعْطَى (to give)",
          rootFamily: ["عطاء (giving)", "عطية (gift)", "معطي (giver)"],
          frequency: "29 times in Quran",
          linguisticMiracle: "Absolute form (no object specified) - give of wealth, time, self, knowledge, everything",
          balagha: "First quality mentioned: generosity - key to spiritual success"
        }
      },
      {
        position: 4,
        arabic: "وَاتَّقَىٰ",
        transliteration: "wat-taqaa",
        root: "و ق ي",
        lemma: "اِتَّقَى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "and fears (Allah)/is conscious of (Allah)",
          ur: "اور تقویٰ اختیار کیا",
          hi: "और तक़वा इख़्तियार किया",
          bn: "এবং তাকওয়া অবলম্বন করেছে",
          tr: "ve sakınırsa",
          id: "dan bertakwa",
          ar: "خَافَ اللهَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form VIII (اِفْتَعَل). Second characteristic: God-consciousness that protects from sin.",
          ur: "فعل ماضی، باب افتعال۔ دوسری خصوصیت: خدا شناسی جو گناہ سے بچاتی ہے۔"
        },
        advanced: {
          verbForm: "VIII - اِتَّقَى (to be conscious of, protect oneself)",
          rootFamily: ["وقاية (protection)", "تقوى (God-consciousness)", "متقي (one who has taqwa)"],
          frequency: "Taqwa appears 251 times in various forms",
          linguisticMiracle: "Root وقي means 'to protect' - taqwa is protecting oneself through consciousness of Allah",
          memoryHook: "Ittaqa = Taking protective shield (wiqa'ya) through God-consciousness"
        }
      }
    ],
    dependencyStructure: "فَأَمَّا (conditional) + مَنْ (subject) + أَعْطَىٰ وَاتَّقَىٰ (qualities)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "وَصَدَّقَ بِالْحُسْنَىٰ",
    translation: {
      en: "And believes in the best (reward/word)",
      ur: "اور اچھی بات کی تصدیق کی",
      hi: "और अच्छी बात की तस्दीक़ की",
      bn: "এবং উত্তম বিষয়কে সত্য মেনেছে",
      tr: "Ve en güzeli (cenneti) tasdik ederse",
      id: "Dan membenarkan (pahala) yang terbaik",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَصَدَّقَ",
        transliteration: "wa-saddaqa",
        root: "ص د ق",
        lemma: "صَدَّقَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "and believes/confirms",
          ur: "اور تصدیق کی",
          hi: "और तस्दीक़ की",
          bn: "এবং সত্য মেনেছে",
          tr: "ve tasdik ederse",
          id: "dan membenarkan",
          ar: "آمَنَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form II (فَعَّل - intensive). Third characteristic: believes and confirms truth.",
          ur: "فعل ماضی، باب تفعیل (تاکیدی)۔ تیسری خصوصیت: سچائی پر یقین اور تصدیق۔"
        },
        advanced: {
          verbForm: "II - صَدَّقَ (to believe, confirm as true)",
          rootFamily: ["صدق (truth)", "صادق (truthful)", "صديق (close friend who believes)", "صدقة (charity - proof of belief)"],
          frequency: "115 times in various forms",
          linguisticMiracle: "Sadaqa implies both believing AND acting on belief - hence its connection to sadaqah (charity)",
          memoryHook: "Saddaqa = Confirmed as Sadiq (true)"
        }
      },
      {
        position: 2,
        arabic: "بِالْحُسْنَىٰ",
        transliteration: "bil-husnaa",
        root: "ح س ن",
        lemma: "حُسْنَى",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "in the best (reward/word/outcome)",
          ur: "اچھی بات (سے)",
          hi: "अच्छी बात (में)",
          bn: "উত্তম বিষয়ে",
          tr: "en güzeli",
          id: "yang terbaik",
          ar: "الْجَنَّة أَوْ لَا إِلٰهَ إِلَّا اللّٰه"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Bi (in) + definite noun, genitive. Al-Husnaa refers to: La ilaha illa Allah, or Paradise, or Allah's promise - scholars differ.",
          ur: "ب (میں) + معرفہ اسم، مجرور۔ الحسنیٰ سے مراد: لا الٰہ الا اللہ، یا جنت، یا اللہ کا وعدہ - علماء کا اختلاف ہے۔"
        },
        advanced: {
          rootFamily: ["حسن (beauty/goodness)", "أحسن (better/best)", "إحسان (excellence)", "محسن (doer of good)"],
          frequency: "Husn root: 194 times",
          linguisticMiracle: "Al-Husnaa is feminine superlative - the absolute best, encompassing all good",
          balagha: "Left undefined intentionally - includes belief in Allah, Paradise, and all promises of good"
        }
      }
    ],
    dependencyStructure: "وَ (conjunction) + صَدَّقَ (verb) + بِالْحُسْنَىٰ (prepositional phrase)"
  },

  7: {
    ayahNumber: 7,
    arabic: "فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ",
    translation: {
      en: "We will ease him toward ease",
      ur: "تو ہم اسے آسانی کی طرف لے جائیں گے",
      hi: "तो हम उसे आसानी की ओर ले जाएँगे",
      bn: "তাকে আমরা সহজ পথে পরিচালিত করব",
      tr: "Biz de onu en kolaya hazırlarız",
      id: "Maka akan Kami mudahkan baginya jalan menuju kemudahan",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "فَسَنُيَسِّرُهُ",
        transliteration: "fa-sa-nuyassiruhu",
        root: "ي س ر",
        lemma: "يَسَّرَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "So We will ease him",
          ur: "تو ہم اسے آسان کریں گے",
          hi: "तो हम उसे आसान करेंगे",
          bn: "তাকে আমরা সহজ করব",
          tr: "Biz de onu kolaylaştırırız",
          id: "maka akan Kami mudahkan baginya",
          ar: "سَنُسَهِّل لَهُ"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Fa (result) + sa (future) + imperfect verb Form II + hu (him). Divine promise of facilitation.",
          ur: "فا (نتیجہ) + س (مستقبل) + فعل مضارع باب تفعیل + ہو (اسے)۔ آسانی کا الٰہی وعدہ۔"
        },
        advanced: {
          verbForm: "II - يَسَّرَ (to make easy, facilitate)",
          rootFamily: ["يسر (ease)", "يسير (easy)", "ميسر (facilitated)", "يسار (left - easier hand for some)"],
          frequency: "42 times in Quran",
          linguisticMiracle: "Form II is intensive - Allah will GREATLY ease the path",
          balagha: "Result matches effort: one who gives finds things given to him"
        }
      },
      {
        position: 2,
        arabic: "لِلْيُسْرَىٰ",
        transliteration: "lil-yusraa",
        root: "ي س ر",
        lemma: "يُسْرَى",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "toward ease/the easy way",
          ur: "آسانی کی طرف",
          hi: "आसानी की ओर",
          bn: "সহজ পথে",
          tr: "en kolaya",
          id: "jalan kemudahan",
          ar: "الطَّرِيق السَّهْل"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Li (toward) + al-yusraa (the ease). Same root used twice for emphasis - ease upon ease.",
          ur: "ل (طرف) + الیسریٰ (آسانی)۔ تاکید کے لیے ایک ہی جذر دو بار - آسانی پر آسانی۔"
        },
        advanced: {
          frequency: "4 times in Quran",
          linguisticMiracle: "Root ي-س-ر used twice in one verse: yuassir + yusraa - ease leading to ease",
          balagha: "Feminine superlative yusraa = absolute ultimate ease, both in this life and hereafter"
        }
      }
    ],
    dependencyStructure: "فَ (result) + سَنُيَسِّرُهُ (verb+object) + لِلْيُسْرَىٰ (goal)"
  },

  8: {
    ayahNumber: 8,
    arabic: "وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ",
    translation: {
      en: "But as for he who withholds and considers himself free of need",
      ur: "اور جس نے بخل کیا اور بے نیازی برتی",
      hi: "और जिसने बख़ीली की और बेनियाज़ी बरती",
      bn: "আর যে কৃপণতা করেছে এবং বেপরোয়া হয়েছে",
      tr: "Kim de cimrilik eder ve kendini müstağni görürse",
      id: "Dan adapun orang yang bakhil dan merasa cukup"
    },
    words: [
      {
        position: 1,
        arabic: "وَأَمَّا",
        transliteration: "wa-ammaa",
        root: "أ م م",
        lemma: "أَمَّا",
        posTag: "COND",
        posLabel: "COND",
        meaning: {
          en: "But as for",
          ur: "اور جہاں تک",
          hi: "और जहाँ तक",
          bn: "আর যে",
          tr: "Kim de",
          id: "Dan adapun",
          ar: "وَأَمَّا الَّذِي"
        },
        grammarRole: "conditional_particle",
        grammarExplanations: {
          en: "Introduces the contrasting second category - opposite of the first group.",
          ur: "دوسری متضاد قسم متعارف کراتا ہے - پہلے گروہ کے برعکس۔"
        }
      },
      {
        position: 2,
        arabic: "مَن",
        transliteration: "man",
        root: "م ن",
        lemma: "مَنْ",
        posTag: "REL",
        posLabel: "REL",
        meaning: {
          en: "he who",
          ur: "جو",
          hi: "जो",
          bn: "যে",
          tr: "kim",
          id: "orang yang",
          ar: "الَّذِي"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 3,
        arabic: "بَخِلَ",
        transliteration: "bakhila",
        root: "ب خ ل",
        lemma: "بَخِلَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "withholds/is stingy",
          ur: "بخل کیا",
          hi: "बख़ीली की",
          bn: "কৃপণতা করেছে",
          tr: "cimrilik eder",
          id: "bakhil",
          ar: "بَخُلَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form I. Opposite of أعطى. Withholding what should be given.",
          ur: "فعل ماضی، باب اول۔ أعطى کی ضد۔ جو دینا چاہیے اسے روکنا۔"
        },
        advanced: {
          verbForm: "I - بَخِلَ (to be stingy, withhold)",
          rootFamily: ["بخل (stinginess)", "بخيل (miser)", "باخل (withholding)"],
          frequency: "12 times in Quran",
          linguisticMiracle: "Exact opposite of a'taa - structural parallelism",
          balagha: "First negative quality: holding back what should be shared"
        }
      },
      {
        position: 4,
        arabic: "وَاسْتَغْنَىٰ",
        transliteration: "was-taghnaa",
        root: "غ ن ي",
        lemma: "اِسْتَغْنَى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "and considers himself free of need",
          ur: "اور بے نیازی برتی",
          hi: "और बेनियाज़ी बरती",
          bn: "এবং বেপরোয়া হয়েছে",
          tr: "ve kendini müstağni görürse",
          id: "dan merasa cukup",
          ar: "ظَنَّ نَفْسَهُ غَنِيًّا"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form X (اِسْتَفْعَل - to consider oneself). Considers himself independent of Allah.",
          ur: "فعل ماضی، باب استفعال (اپنے آپ کو سمجھنا)۔ خود کو اللہ سے بے نیاز سمجھنا۔"
        },
        advanced: {
          verbForm: "X - اِسْتَغْنَى (to consider oneself rich/independent)",
          rootFamily: ["غني (rich)", "غنى (wealth)", "مستغني (self-sufficient)", "أغنى (to enrich)"],
          frequency: "17 times in Quran",
          linguisticMiracle: "Form X implies self-perception - considers himself needless of Allah and others",
          balagha: "Opposite of ittaqa - arrogance vs humility"
        }
      }
    ],
    dependencyStructure: "وَأَمَّا (conditional) + مَن (subject) + بَخِلَ وَاسْتَغْنَىٰ (qualities)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "وَكَذَّبَ بِالْحُسْنَىٰ",
    translation: {
      en: "And denies the best (reward/word)",
      ur: "اور اچھی بات کو جھٹلایا",
      hi: "और अच्छी बात को झुठलाया",
      bn: "এবং উত্তম বিষয়কে মিথ্যা মনে করেছে",
      tr: "Ve en güzeli (cenneti) yalanlarsa",
      id: "Dan mendustakan (pahala) yang terbaik",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَكَذَّبَ",
        transliteration: "wa-kadhdhaba",
        root: "ك ذ ب",
        lemma: "كَذَّبَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "and denies/rejects",
          ur: "اور جھٹلایا",
          hi: "और झुठलाया",
          bn: "এবং মিথ্যা মনে করেছে",
          tr: "ve yalanlarsa",
          id: "dan mendustakan",
          ar: "أَنْكَرَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form II (intensive). Opposite of saddaqa - actively denies truth.",
          ur: "فعل ماضی، باب تفعیل (تاکیدی)۔ صدّق کی ضد - فعال طور پر سچائی کا انکار۔"
        },
        advanced: {
          verbForm: "II - كَذَّبَ (to belie, reject as false)",
          rootFamily: ["كذب (lie)", "كاذب (liar)", "تكذيب (denial)", "مكذب (one who denies)"],
          frequency: "176 times in various forms",
          linguisticMiracle: "Exact opposite of saddaqa - perfect antithesis",
          balagha: "Form II intensifies: not just disbelieving but actively calling truth a lie"
        }
      },
      {
        position: 2,
        arabic: "بِالْحُسْنَىٰ",
        transliteration: "bil-husnaa",
        root: "ح س ن",
        lemma: "حُسْنَى",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "in the best",
          ur: "اچھی بات کو",
          hi: "अच्छी बात को",
          bn: "উত্তম বিষয়কে",
          tr: "en güzeli",
          id: "yang terbaik",
          ar: "الْجَنَّة أَوْ الْكَلِمَة الطَّيِّبَة"
        },
        grammarRole: "noun_genitive"
      }
    ],
    dependencyStructure: "وَ (conjunction) + كَذَّبَ (verb) + بِالْحُسْنَىٰ (object)"
  },

  10: {
    ayahNumber: 10,
    arabic: "فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ",
    translation: {
      en: "We will ease him toward difficulty",
      ur: "تو ہم اسے مشکل کی طرف لے جائیں گے",
      hi: "तो हम उसे मुश्किल की ओर ले जाएँगे",
      bn: "তাকে আমরা কঠিন পথে পরিচালিত করব",
      tr: "Biz de onu en zora hazırlarız",
      id: "Maka akan Kami mudahkan baginya jalan menuju kesukaran",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "فَسَنُيَسِّرُهُ",
        transliteration: "fa-sa-nuyassiruhu",
        root: "ي س ر",
        lemma: "يَسَّرَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "So We will ease him (ironically)",
          ur: "تو ہم اسے آسان کریں گے",
          hi: "तो हम उसे आसान करेंगे",
          bn: "তাকে আমরা সহজ করব",
          tr: "Biz de onu kolaylaştırırız",
          id: "maka akan Kami mudahkan baginya",
          ar: "سَنُهَيِّئ لَهُ"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Same verb as verse 7 - divine facilitation. But facilitating toward hardship! Deeply ironic.",
          ur: "آیت 7 جیسا ہی فعل - الٰہی آسانی۔ لیکن مشکل کی طرف آسانی! گہرا طنز۔"
        },
        advanced: {
          linguisticMiracle: "Using 'ease' (yassara) for the path to difficulty (usra) is devastating irony",
          balagha: "Paradox: Made easy for hardship - sin becomes easy, leading to permanent difficulty"
        }
      },
      {
        position: 2,
        arabic: "لِلْعُسْرَىٰ",
        transliteration: "lil-'usraa",
        root: "ع س ر",
        lemma: "عُسْرَى",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "toward difficulty/the hard way",
          ur: "مشکل کی طرف",
          hi: "मुश्किल की ओर",
          bn: "কঠিন পথে",
          tr: "en zora",
          id: "jalan kesukaran",
          ar: "الطَّرِيق الصَّعْب"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Opposite of yusraa. Feminine superlative = absolute ultimate difficulty.",
          ur: "یسریٰ کی ضد۔ مؤنث صیغہ افضل = مطلق انتہائی مشکل۔"
        },
        advanced: {
          rootFamily: ["عسر (difficulty)", "عسير (difficult)", "معسر (one in hardship)"],
          frequency: "12 times in Quran",
          balagha: "Perfect contrast: yusraa (ease) vs 'usraa (hardship) - same pattern, opposite meanings"
        }
      }
    ],
    dependencyStructure: "فَ (result) + سَنُيَسِّرُهُ (verb+object) + لِلْعُسْرَىٰ (goal)"
  },

  11: {
    ayahNumber: 11,
    arabic: "وَمَا يُغْنِي عَنْهُ مَالُهُ إِذَا تَرَدَّىٰ",
    translation: {
      en: "And his wealth will not avail him when he falls (into Hell)",
      ur: "اور اس کا مال اسے کیا فائدہ دے گا جب وہ گرے گا",
      hi: "और उसका माल उसे क्या फ़ायदा देगा जब वह गिरेगा",
      bn: "এবং তার সম্পদ তাকে কী উপকারে আসবে যখন সে পতিত হবে",
      tr: "Düştüğü zaman malı ona fayda vermeyecektir",
      id: "Dan hartanya tidak akan berguna baginya apabila dia telah binasa"
    },
    words: [
      {
        position: 1,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "NEG",
        posLabel: "NEG",
        meaning: {
          en: "And not / what",
          ur: "اور نہیں / کیا",
          hi: "और नहीं / क्या",
          bn: "এবং না / কী",
          tr: "ve ne",
          id: "dan tidak",
          ar: "لَنْ / مَاذَا"
        },
        grammarRole: "negative_particle",
        grammarExplanations: {
          en: "'Maa' here can be negative (will not) or interrogative (what will?). Both meanings work rhetorically.",
          ur: "یہاں 'ما' نفی (نہیں کرے گا) یا استفہام (کیا کرے گا؟) ہو سکتا ہے۔ دونوں معنی بلاغی طور پر کام کرتے ہیں۔"
        }
      },
      {
        position: 2,
        arabic: "يُغْنِي",
        transliteration: "yughnee",
        root: "غ ن ي",
        lemma: "أَغْنَى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "will avail/benefit",
          ur: "فائدہ دے گا",
          hi: "फ़ायदा देगा",
          bn: "উপকারে আসবে",
          tr: "fayda verir",
          id: "akan berguna",
          ar: "يَنْفَع"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form IV. From same root as istaghnaa - the self-sufficiency he claimed won't help.",
          ur: "فعل مضارع، باب افعال۔ استغنیٰ کے ہم جذر - جس بے نیازی کا دعویٰ کیا وہ مدد نہیں کرے گی۔"
        },
        advanced: {
          verbForm: "IV - أَغْنَى (to avail, make rich, benefit)",
          linguisticMiracle: "Same root as istaghnaa (v.8) - wordplay: his claimed independence won't actually help",
          balagha: "Poetic justice: claimed to be ghaniy (rich/independent), but ghina (wealth) won't avail"
        }
      },
      {
        position: 3,
        arabic: "عَنْهُ",
        transliteration: "'anhu",
        root: "ع ن",
        lemma: "عَنْ",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "him",
          ur: "اسے",
          hi: "उसे",
          bn: "তাকে",
          tr: "ona",
          id: "baginya",
          ar: "لَهُ"
        },
        grammarRole: "preposition_pronoun"
      },
      {
        position: 4,
        arabic: "مَالُهُ",
        transliteration: "maaluhu",
        root: "م و ل",
        lemma: "مَال",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "his wealth",
          ur: "اس کا مال",
          hi: "उसका माल",
          bn: "তার সম্পদ",
          tr: "malı",
          id: "hartanya",
          ar: "ثَرْوَتُهُ"
        },
        grammarRole: "noun_nominative",
        grammarExplanations: {
          en: "Subject of the verb. The very wealth he hoarded becomes useless.",
          ur: "فعل کا فاعل۔ جو مال اس نے جمع کیا بے فائدہ ہو جائے گا۔"
        },
        advanced: {
          rootFamily: ["مال (wealth)", "تمول (to become wealthy)", "مولى (master/protector)"],
          frequency: "86 times in Quran",
          memoryHook: "Maal = Material possessions, Mowla comes from same root (master of wealth)"
        }
      },
      {
        position: 5,
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
          tr: "zaman",
          id: "apabila",
          ar: "حِينَ"
        },
        grammarRole: "conditional_particle"
      },
      {
        position: 6,
        arabic: "تَرَدَّىٰ",
        transliteration: "taraddaa",
        root: "ر د ي",
        lemma: "تَرَدَّى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "he falls/perishes",
          ur: "گر جائے",
          hi: "गिर जाए",
          bn: "পতিত হবে",
          tr: "düştüğü",
          id: "telah binasa",
          ar: "سَقَطَ / هَلَكَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form V. Means to fall into destruction, perish, fall into Hell.",
          ur: "فعل ماضی، باب تفعّل۔ معنی: ہلاکت میں گرنا، تباہ ہونا، جہنم میں گرنا۔"
        },
        advanced: {
          verbForm: "V - تَرَدَّى (to fall, perish)",
          rootFamily: ["ردي (to perish)", "مردي (ruined)", "ردى (destruction)"],
          frequency: "4 times in Quran",
          linguisticMiracle: "Taraddaa suggests repeated falling - falling into sin, then into grave, then into Hell",
          balagha: "The downward trajectory: istaghnaa (felt high) → taraddaa (falls low)"
        }
      }
    ],
    dependencyStructure: "وَمَا (negative) + يُغْنِي عَنْهُ (verb) + مَالُهُ (subject) + إِذَا تَرَدَّىٰ (temporal clause)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'شرط + فعل' }
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "إِنَّ عَلَيْنَا لَلْهُدَىٰ",
    translation: {
      en: "Indeed, upon Us is guidance",
      ur: "بیشک ہدایت ہمارے ذمے ہے",
      hi: "बेशक हिदायत हमारे ज़िम्मे है",
      bn: "নিশ্চয়ই আমাদের দায়িত্ব হেদায়েত দেওয়া",
      tr: "Şüphesiz doğru yolu göstermek bize aittir",
      id: "Sesungguhnya Kami-lah yang memberi petunjuk"
    },
    words: [
      {
        position: 1,
        arabic: "إِنَّ",
        transliteration: "inna",
        root: "أ ن ن",
        lemma: "إِنَّ",
        posTag: "ACC",
        posLabel: "ACC",
        meaning: {
          en: "Indeed",
          ur: "بیشک",
          hi: "बेशक",
          bn: "নিশ্চয়ই",
          tr: "Şüphesiz",
          id: "Sesungguhnya",
          ar: "تَأْكِيد"
        },
        grammarRole: "emphatic_particle"
      },
      {
        position: 2,
        arabic: "عَلَيْنَا",
        transliteration: "'alaynaa",
        root: "ع ل و",
        lemma: "عَلَى",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "upon Us",
          ur: "ہمارے ذمے",
          hi: "हमारे ज़िम्मे",
          bn: "আমাদের দায়িত্ব",
          tr: "bize aittir",
          id: "pada Kami",
          ar: "وَاجِبٌ عَلَيْنَا"
        },
        grammarRole: "preposition_pronoun",
        grammarExplanations: {
          en: "Preposition 'ala (upon) + 'naa' (We/Us). Allah takes responsibility for guidance.",
          ur: "حرف جر علیٰ (پر) + نا (ہم)۔ اللہ ہدایت کی ذمہ داری لیتے ہیں۔"
        }
      },
      {
        position: 3,
        arabic: "لَلْهُدَىٰ",
        transliteration: "lal-hudaa",
        root: "ه د ي",
        lemma: "هُدَى",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "surely the guidance",
          ur: "یقیناً ہدایت",
          hi: "निश्चय ही हिदायत",
          bn: "অবশ্যই হেদায়েত",
          tr: "muhakkak hidayet",
          id: "sungguh petunjuk",
          ar: "الْإِرْشَاد"
        },
        grammarRole: "noun_nominative",
        grammarExplanations: {
          en: "Lam of emphasis + al-hudaa. Allah's role is to show the path; human's role is to choose.",
          ur: "لام تاکید + الہدیٰ۔ اللہ کا کام راستہ دکھانا ہے؛ انسان کا کام انتخاب کرنا ہے۔"
        },
        advanced: {
          rootFamily: ["هدى (guidance)", "هادي (guide)", "مهتدي (guided)", "هدية (gift - something that guides to friendship)"],
          frequency: "316 times in various forms",
          linguisticMiracle: "After describing two paths, Allah clarifies: I showed both paths clearly",
          balagha: "Transition: from human choices back to divine responsibility and power"
        }
      }
    ],
    dependencyStructure: "إِنَّ (emphasis) + عَلَيْنَا (predicate) + لَلْهُدَىٰ (subject)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "وَإِنَّ لَنَا لَلْآخِرَةَ وَالْأُولَىٰ",
    translation: {
      en: "And indeed, to Us belongs the Hereafter and the first (life)",
      ur: "اور بیشک آخرت اور دنیا ہماری ہی ہے",
      hi: "और बेशक आख़िरत और दुनिया हमारी ही है",
      bn: "এবং নিশ্চয়ই আখিরাত এবং দুনিয়া আমাদেরই",
      tr: "Şüphesiz ahiret de dünya da bizimdir",
      id: "Dan sesungguhnya milik Kami-lah akhirat dan dunia"
    },
    words: [
      {
        position: 1,
        arabic: "وَإِنَّ",
        transliteration: "wa-inna",
        root: "أ ن ن",
        lemma: "إِنَّ",
        posTag: "ACC",
        posLabel: "ACC",
        meaning: {
          en: "And indeed",
          ur: "اور بیشک",
          hi: "और बेशक",
          bn: "এবং নিশ্চয়ই",
          tr: "Ve şüphesiz",
          id: "Dan sesungguhnya",
          ar: "وَتَأْكِيد"
        },
        grammarRole: "emphatic_particle"
      },
      {
        position: 2,
        arabic: "لَنَا",
        transliteration: "lanaa",
        root: "ل",
        lemma: "لِ",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "to Us / is Ours",
          ur: "ہماری ہے",
          hi: "हमारी है",
          bn: "আমাদেরই",
          tr: "bizimdir",
          id: "milik Kami",
          ar: "مِلْكٌ لَنَا"
        },
        grammarRole: "preposition_pronoun"
      },
      {
        position: 3,
        arabic: "لَلْآخِرَةَ",
        transliteration: "lal-aakhirata",
        root: "أ خ ر",
        lemma: "آخِرَة",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "surely the Hereafter",
          ur: "یقیناً آخرت",
          hi: "निश्चय ही आख़िरत",
          bn: "অবশ্যই আখিরাত",
          tr: "muhakkak ahiret",
          id: "sungguh akhirat",
          ar: "الدَّار الْبَاقِيَة"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Mentioned first though it comes later - emphasizing its greater importance.",
          ur: "بعد میں آنے کے باوجود پہلے ذکر - اس کی زیادہ اہمیت پر زور۔"
        },
        advanced: {
          rootFamily: ["آخر (last)", "تأخر (to be late)", "مؤخر (postponed)"],
          frequency: "115 times in Quran",
          balagha: "Aakhira placed before Oola - usual Quranic pattern prioritizing eternal over temporary"
        }
      },
      {
        position: 4,
        arabic: "وَالْأُولَىٰ",
        transliteration: "wal-oolaa",
        root: "أ و ل",
        lemma: "أُولَى",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "and the first (life/world)",
          ur: "اور دنیا",
          hi: "और दुनिया",
          bn: "এবং দুনিয়া",
          tr: "ve dünya",
          id: "dan dunia",
          ar: "الدُّنْيَا"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "The first life, i.e., this world. Both realms belong to Allah.",
          ur: "پہلی زندگی یعنی یہ دنیا۔ دونوں عالم اللہ کی ملکیت ہیں۔"
        },
        advanced: {
          rootFamily: ["أول (first)", "أولى (more deserving)", "أولوية (priority)"],
          frequency: "Oola: 18 times",
          linguisticMiracle: "Paired: Aakhira + Oola = complete ownership of all existence, all time"
        }
      }
    ],
    dependencyStructure: "وَإِنَّ (emphasis) + لَنَا (predicate) + لَلْآخِرَةَ وَالْأُولَىٰ (subject)",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "فَأَنذَرْتُكُمْ نَارًا تَلَظَّىٰ",
    translation: {
      en: "So I have warned you of a Fire blazing intensely",
      ur: "تو میں نے تمہیں آگ سے ڈرایا جو بھڑک رہی ہے",
      hi: "तो मैंने तुम्हें आग से डराया जो भड़क रही है",
      bn: "অতএব আমি তোমাদের সতর্ক করলাম প্রজ্বলিত আগুন সম্পর্কে",
      tr: "Ben de sizi alevli ateşe karşı uyardım",
      id: "Maka Aku memperingatkan kalian dengan api yang menyala-nyala",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "فَأَنذَرْتُكُمْ",
        transliteration: "fa-andhartukum",
        root: "ن ذ ر",
        lemma: "أَنْذَرَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "So I have warned you",
          ur: "تو میں نے تمہیں ڈرایا",
          hi: "तो मैंने तुम्हें डराया",
          bn: "অতএব আমি তোমাদের সতর্ক করলাম",
          tr: "Ben de sizi uyardım",
          id: "Maka Aku memperingatkan kalian",
          ar: "حَذَّرْتُكُم"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form IV. Allah directly addresses humanity with warning.",
          ur: "فعل ماضی، باب افعال۔ اللہ براہ راست انسانیت کو تنبیہ کرتے ہیں۔"
        },
        advanced: {
          verbForm: "IV - أَنْذَرَ (to warn)",
          rootFamily: ["نذر (vow/warning)", "إنذار (warning)", "منذر (warner)", "نذير (warner)"],
          frequency: "130 times in various forms",
          memoryHook: "Andhara = Alert/Nudge about danger (Nadhir = Warner, Prophet's role)"
        }
      },
      {
        position: 2,
        arabic: "نَارًا",
        transliteration: "naaran",
        root: "ن و ر",
        lemma: "نَار",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "a Fire",
          ur: "آگ",
          hi: "आग",
          bn: "আগুন",
          tr: "ateş",
          id: "api",
          ar: "جَهَنَّم"
        },
        grammarRole: "noun_accusative",
        grammarExplanations: {
          en: "Direct object, indefinite for intensification. A fire (so terrible it's beyond description).",
          ur: "مفعول بہ، نکرہ برائے تعظیم۔ ایک آگ (اتنی ہولناک کہ بیان سے باہر)۔"
        },
        advanced: {
          rootFamily: ["نار (fire)", "نور (light)", "منار (lighthouse)", "نيران (fires)"],
          frequency: "145 times",
          linguisticMiracle: "Naar and Noor from same root - fire has light but burns, opposite of divine Noor"
        }
      },
      {
        position: 3,
        arabic: "تَلَظَّىٰ",
        transliteration: "taladhdhaa",
        root: "ل ظ ي",
        lemma: "تَلَظَّى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "blazing intensely",
          ur: "بھڑک رہی ہے",
          hi: "भड़क रही है",
          bn: "প্রজ্বলিত",
          tr: "alevli",
          id: "menyala-nyala",
          ar: "تَشْتَعِل"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form V. Describes continuous, intense blazing. Present tense = always burning.",
          ur: "فعل مضارع، باب تفعّل۔ مسلسل، شدید بھڑکنے کی وصف۔ حال کا صیغہ = ہمیشہ جلتی۔"
        },
        advanced: {
          verbForm: "V - تَلَظَّى (to blaze fiercely)",
          rootFamily: ["لظى (blazing fire)", "تلظي (intense burning)"],
          frequency: "2 times in Quran (here and 70:15)",
          linguisticMiracle: "The sound of 'taladhdhaa' mimics crackling fire",
          balagha: "Onomatopoeia - the word sounds like fierce flames"
        }
      }
    ],
    dependencyStructure: "فَ (result) + أَنذَرْتُكُمْ (verb) + نَارًا (object) + تَلَظَّىٰ (adjective clause)"
  },

  15: {
    ayahNumber: 15,
    arabic: "لَا يَصْلَاهَا إِلَّا الْأَشْقَى",
    translation: {
      en: "None will enter it except the most wretched",
      ur: "اس میں وہی داخل ہوگا جو بڑا بدبخت ہے",
      hi: "उसमें वही दाख़िल होगा जो बड़ा बदबख़्त है",
      bn: "এতে কেবল সেই প্রবেশ করবে যে সবচেয়ে হতভাগা",
      tr: "Oraya ancak en bedbaht olan girer",
      id: "Tidak akan masuk ke dalamnya kecuali orang yang paling celaka"
    },
    words: [
      {
        position: 1,
        arabic: "لَا",
        transliteration: "laa",
        root: "ل ا",
        lemma: "لَا",
        posTag: "NEG",
        posLabel: "NEG",
        meaning: {
          en: "Not",
          ur: "نہیں",
          hi: "नहीं",
          bn: "না",
          tr: "değil",
          id: "tidak",
          ar: "نَفْي"
        },
        grammarRole: "negative_particle"
      },
      {
        position: 2,
        arabic: "يَصْلَاهَا",
        transliteration: "yaslaahaa",
        root: "ص ل ي",
        lemma: "صَلِيَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "will burn in it / enter it",
          ur: "اس میں جلے گا",
          hi: "उसमें जलेगा",
          bn: "এতে জ্বলবে",
          tr: "yanar/girer",
          id: "akan masuk",
          ar: "يَدْخُلُهَا"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form I. Saliya an-naar = to burn in fire, fully experience its heat.",
          ur: "فعل مضارع، باب اول۔ صَلِیَ النار = آگ میں جلنا، اس کی گرمی مکمل محسوس کرنا۔"
        },
        advanced: {
          verbForm: "I - صَلِيَ (to burn in fire, roast)",
          rootFamily: ["صلى (to burn)", "صلاة (prayer - burning with devotion)", "مصلى (place of prayer)"],
          frequency: "19 times",
          linguisticMiracle: "Same root as salah (prayer) - ironic connection: those who avoided salah will face saliy (burning)"
        }
      },
      {
        position: 3,
        arabic: "إِلَّا",
        transliteration: "illaa",
        root: "إ ل ا",
        lemma: "إِلَّا",
        posTag: "RES",
        posLabel: "RES",
        meaning: {
          en: "except",
          ur: "سوائے",
          hi: "सिवाय",
          bn: "ছাড়া",
          tr: "ancak",
          id: "kecuali",
          ar: "سِوَى"
        },
        grammarRole: "exception_particle"
      },
      {
        position: 4,
        arabic: "الْأَشْقَى",
        transliteration: "al-ashqaa",
        root: "ش ق و",
        lemma: "أَشْقَى",
        posTag: "ADJ",
        posLabel: "ADJ",
        meaning: {
          en: "the most wretched",
          ur: "سب سے بدبخت",
          hi: "सबसे बदबख़्त",
          bn: "সবচেয়ে হতভাগা",
          tr: "en bedbaht",
          id: "yang paling celaka",
          ar: "أَكْثَرُهُم شَقَاوَةً"
        },
        grammarRole: "noun_nominative",
        grammarExplanations: {
          en: "Superlative form (أَفْعَل). The most wretched person - described in next verse.",
          ur: "صیغہ افضل۔ سب سے بدبخت شخص - اگلی آیت میں بیان۔"
        },
        advanced: {
          rootFamily: ["شقاء (misery)", "شقي (wretched)", "شقاوة (wretchedness)"],
          frequency: "6 times",
          linguisticMiracle: "Superlative indicates the worst possible outcome",
          balagha: "Opposite of sa'eed (happy/blessed) - ultimate spiritual failure"
        }
      }
    ],
    dependencyStructure: "لَا (negative) + يَصْلَاهَا (verb) + إِلَّا (exception) + الْأَشْقَى (subject)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  },

  16: {
    ayahNumber: 16,
    arabic: "الَّذِي كَذَّبَ وَتَوَلَّىٰ",
    translation: {
      en: "The one who denied and turned away",
      ur: "جس نے جھٹلایا اور منہ پھیر لیا",
      hi: "जिसने झुठलाया और मुँह फेर लिया",
      bn: "যে মিথ্যা বলেছে এবং মুখ ফিরিয়ে নিয়েছে",
      tr: "O ki yalanlamış ve yüz çevirmiştir",
      id: "Yaitu orang yang mendustakan dan berpaling"
    },
    words: [
      {
        position: 1,
        arabic: "الَّذِي",
        transliteration: "alladhee",
        root: "ل ذ ي",
        lemma: "الَّذِي",
        posTag: "REL",
        posLabel: "REL",
        meaning: {
          en: "The one who",
          ur: "جو",
          hi: "जो",
          bn: "যে",
          tr: "O ki",
          id: "Yaitu orang yang",
          ar: "مَنْ"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 2,
        arabic: "كَذَّبَ",
        transliteration: "kadhdhaba",
        root: "ك ذ ب",
        lemma: "كَذَّبَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "denied/rejected as lies",
          ur: "جھٹلایا",
          hi: "झुठलाया",
          bn: "মিথ্যা বলেছে",
          tr: "yalanlamış",
          id: "mendustakan",
          ar: "أَنْكَرَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Same verb from v.9 - actively denying truth.",
          ur: "آیت 9 جیسا ہی فعل - فعال طور پر سچائی کا انکار۔"
        }
      },
      {
        position: 3,
        arabic: "وَتَوَلَّىٰ",
        transliteration: "wa-tawallaa",
        root: "و ل ي",
        lemma: "تَوَلَّى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "and turned away",
          ur: "اور منہ پھیر لیا",
          hi: "और मुँह फेर लिया",
          bn: "এবং মুখ ফিরিয়ে নিয়েছে",
          tr: "ve yüz çevirmiştir",
          id: "dan berpaling",
          ar: "أَعْرَضَ"
        },
        grammarRole: "verb_perfect",
        grammarExplanations: {
          en: "Perfect verb, Form V. To turn one's back, walk away from truth.",
          ur: "فعل ماضی، باب تفعّل۔ پیٹھ موڑنا، سچائی سے دور ہونا۔"
        },
        advanced: {
          verbForm: "V - تَوَلَّى (to turn away, take charge of)",
          rootFamily: ["ولي (guardian)", "ولاية (guardianship)", "مولى (master/friend)"],
          frequency: "86 times in various forms",
          linguisticMiracle: "Same root as wali (friend of Allah) - but this person turns AWAY from guardianship",
          balagha: "Double rejection: verbal (kadhdhaba) + physical (tawalla)"
        }
      }
    ],
    dependencyStructure: "الَّذِي (relative) + كَذَّبَ (verb) + وَتَوَلَّىٰ (verb)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' }
      ],
    },
  },

  17: {
    ayahNumber: 17,
    arabic: "وَسَيُجَنَّبُهَا الْأَتْقَى",
    translation: {
      en: "But the most righteous will be kept away from it",
      ur: "اور اس سے بچایا جائے گا وہ جو سب سے زیادہ متقی ہے",
      hi: "और उससे बचाया जाएगा वह जो सबसे ज़्यादा मुत्तक़ी है",
      bn: "এবং তা থেকে দূরে রাখা হবে সবচেয়ে মুত্তাকী ব্যক্তিকে",
      tr: "En muttaki olan ondan uzaklaştırılacaktır",
      id: "Dan akan dijauhkan darinya orang yang paling bertakwa",
    structure: {
      relationships: [{ from: 1, to: 2, label: 'موصوف + صفت' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَسَيُجَنَّبُهَا",
        transliteration: "wa-sa-yujannabuhaa",
        root: "ج ن ب",
        lemma: "جَنَّبَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "And will be kept away from it",
          ur: "اور بچایا جائے گا اس سے",
          hi: "और बचाया जाएगा उससे",
          bn: "এবং দূরে রাখা হবে তা থেকে",
          tr: "Ve ondan uzaklaştırılacaktır",
          id: "Dan akan dijauhkan darinya",
          ar: "سَيُبْعَدُ عَنْهَا"
        },
        grammarRole: "verb_passive_imperfect",
        grammarExplanations: {
          en: "Passive voice, Form II, future (sa). Will be made to avoid, kept to the side.",
          ur: "مجہول، باب تفعیل، مستقبل (س)۔ بچایا جائے گا، ایک طرف رکھا جائے گا۔"
        },
        advanced: {
          verbForm: "II - جَنَّبَ (to keep to the side, make avoid)",
          rootFamily: ["جنب (side)", "جانب (direction)", "أجنبي (foreigner - one to the side)", "تجنب (to avoid)"],
          frequency: "7 times",
          linguisticMiracle: "Passive voice shows Allah actively protects the righteous",
          memoryHook: "Jannaba = Kept to the Janb (side), away from danger"
        }
      },
      {
        position: 2,
        arabic: "الْأَتْقَى",
        transliteration: "al-atqaa",
        root: "و ق ي",
        lemma: "أَتْقَى",
        posTag: "ADJ",
        posLabel: "ADJ",
        meaning: {
          en: "the most righteous/God-conscious",
          ur: "سب سے زیادہ متقی",
          hi: "सबसे ज़्यादा मुत्तक़ी",
          bn: "সবচেয়ে মুত্তাকী",
          tr: "en muttaki",
          id: "yang paling bertakwa",
          ar: "أَكْثَرُهُم تَقْوَى"
        },
        grammarRole: "noun_nominative",
        grammarExplanations: {
          en: "Superlative of muttaqi. Contrast with al-ashqaa - best vs worst.",
          ur: "متقی کا صیغہ افضل۔ الأشقیٰ کے برعکس - بہترین بمقابلہ بدترین۔"
        },
        advanced: {
          rootFamily: ["تقوى (God-consciousness)", "وقاية (protection)", "اتقى (to be conscious of)"],
          frequency: "3 times",
          linguisticMiracle: "Perfect antithesis: al-ashqaa (v.15) vs al-atqaa - same pattern, opposite meanings",
          balagha: "Superlative emphasizes the highest level of spiritual achievement"
        }
      }
    ],
    dependencyStructure: "وَ (conjunction) + سَيُجَنَّبُهَا (passive verb) + الْأَتْقَى (subject)"
  },

  18: {
    ayahNumber: 18,
    arabic: "الَّذِي يُؤْتِي مَالَهُ يَتَزَكَّىٰ",
    translation: {
      en: "The one who gives his wealth to purify himself",
      ur: "جو اپنا مال دیتا ہے تاکہ پاک ہو",
      hi: "जो अपना माल देता है ताकि पाक हो",
      bn: "যে তার সম্পদ দেয় পবিত্র হতে",
      tr: "O ki malını temizlenmek için verir",
      id: "Yaitu yang menafkahkan hartanya untuk membersihkan diri"
    },
    words: [
      {
        position: 1,
        arabic: "الَّذِي",
        transliteration: "alladhee",
        root: "ل ذ ي",
        lemma: "الَّذِي",
        posTag: "REL",
        posLabel: "REL",
        meaning: {
          en: "The one who",
          ur: "جو",
          hi: "जो",
          bn: "যে",
          tr: "O ki",
          id: "Yaitu yang",
          ar: "مَنْ"
        },
        grammarRole: "relative_pronoun"
      },
      {
        position: 2,
        arabic: "يُؤْتِي",
        transliteration: "yu'tee",
        root: "أ ت ي",
        lemma: "آتَى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "gives",
          ur: "دیتا ہے",
          hi: "देता है",
          bn: "দেয়",
          tr: "verir",
          id: "menafkahkan",
          ar: "يُعْطِي"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form IV. Continuous giving - not one-time but a way of life.",
          ur: "فعل مضارع، باب افعال۔ مسلسل دینا - ایک بار نہیں بلکہ طرز زندگی۔"
        },
        advanced: {
          verbForm: "IV - آتَى (to give, grant)",
          rootFamily: ["إيتاء (giving)", "آتي (coming/giving)"],
          frequency: "271 times in various forms",
          balagha: "Present tense emphasizes continuous, habitual giving"
        }
      },
      {
        position: 3,
        arabic: "مَالَهُ",
        transliteration: "maalahu",
        root: "م و ل",
        lemma: "مَال",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "his wealth",
          ur: "اپنا مال",
          hi: "अपना माल",
          bn: "তার সম্পদ",
          tr: "malını",
          id: "hartanya",
          ar: "ثَرْوَتَهُ"
        },
        grammarRole: "noun_accusative"
      },
      {
        position: 4,
        arabic: "يَتَزَكَّىٰ",
        transliteration: "yatazakkaa",
        root: "ز ك و",
        lemma: "تَزَكَّى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "to purify himself",
          ur: "تاکہ پاک ہو",
          hi: "ताकि पाक हो",
          bn: "পবিত্র হতে",
          tr: "temizlenmek için",
          id: "untuk membersihkan diri",
          ar: "لِيَتَطَهَّرَ"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form V (reflexive). To purify oneself through giving. Same root as zakah.",
          ur: "فعل مضارع، باب تفعّل (انعکاسی)۔ دینے کے ذریعے اپنے آپ کو پاک کرنا۔ زکوٰۃ کا ہم جذر۔"
        },
        advanced: {
          verbForm: "V - تَزَكَّى (to purify oneself)",
          rootFamily: ["زكاة (purification/growth)", "زكي (pure)", "تزكية (purification)"],
          frequency: "59 times in various forms",
          linguisticMiracle: "Root زكو means both 'purify' AND 'grow' - giving purifies and causes growth",
          balagha: "Giving wealth doesn't decrease it - it purifies AND increases (spiritually and often materially)"
        }
      }
    ],
    dependencyStructure: "الَّذِي (relative) + يُؤْتِي مَالَهُ (verb+object) + يَتَزَكَّىٰ (purpose clause)",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' }
      ],
    },
  },

  19: {
    ayahNumber: 19,
    arabic: "وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ",
    translation: {
      en: "And not is it for anyone that he has upon him any favor to be repaid",
      ur: "اور کسی کا اس پر کوئی احسان نہیں جس کا بدلہ دیا جائے",
      hi: "और किसी का उस पर कोई एहसान नहीं जिसका बदला दिया जाए",
      bn: "এবং কারো কোনো অনুগ্রহ নেই তার উপর যার প্রতিদান দেওয়া হবে",
      tr: "Yanında karşılığı verilecek hiçbir kimsenin nimeti yoktur",
      id: "Dan tidak ada seorangpun yang mempunyai kebaikan yang harus dibalasnya"
    },
    words: [
      {
        position: 1,
        arabic: "وَمَا",
        transliteration: "wa-maa",
        root: "م ا",
        lemma: "مَا",
        posTag: "NEG",
        posLabel: "NEG",
        meaning: {
          en: "And not",
          ur: "اور نہیں",
          hi: "और नहीं",
          bn: "এবং না",
          tr: "ve yok",
          id: "dan tidak ada",
          ar: "وَلَيْسَ"
        },
        grammarRole: "negative_particle"
      },
      {
        position: 2,
        arabic: "لِأَحَدٍ",
        transliteration: "li-ahadin",
        root: "أ ح د",
        lemma: "أَحَد",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "for anyone",
          ur: "کسی کا",
          hi: "किसी का",
          bn: "কারো",
          tr: "hiçbir kimsenin",
          id: "seorangpun",
          ar: "لِشَخْصٍ"
        },
        grammarRole: "noun_genitive"
      },
      {
        position: 3,
        arabic: "عِندَهُ",
        transliteration: "'indahu",
        root: "ع ن د",
        lemma: "عِنْدَ",
        posTag: "LOC",
        posLabel: "LOC",
        meaning: {
          en: "upon him / with him",
          ur: "اس پر",
          hi: "उस पर",
          bn: "তার উপর",
          tr: "yanında",
          id: "padanya",
          ar: "لَدَيْهِ"
        },
        grammarRole: "locative_pronoun"
      },
      {
        position: 4,
        arabic: "مِن",
        transliteration: "min",
        root: "م ن",
        lemma: "مِنْ",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "of / any",
          ur: "کوئی",
          hi: "कोई",
          bn: "কোনো",
          tr: "hiçbir",
          id: "suatu",
          ar: "أَيّ"
        },
        grammarRole: "preposition"
      },
      {
        position: 5,
        arabic: "نِّعْمَةٍ",
        transliteration: "ni'matin",
        root: "ن ع م",
        lemma: "نِعْمَة",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "favor/blessing",
          ur: "احسان",
          hi: "एहसान",
          bn: "অনুগ্রহ",
          tr: "nimet",
          id: "kebaikan",
          ar: "فَضْل"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "He gives not to repay any favor - purely for Allah's pleasure.",
          ur: "وہ کسی احسان کا بدلہ چکانے کے لیے نہیں دیتا - خالصتاً اللہ کی رضا کے لیے۔"
        },
        advanced: {
          rootFamily: ["نعمة (blessing)", "أنعم (to bestow)", "نعيم (bliss)"],
          frequency: "34 times",
          balagha: "This verse establishes pure intention - no worldly motive for giving"
        }
      },
      {
        position: 6,
        arabic: "تُجْزَىٰ",
        transliteration: "tujzaa",
        root: "ج ز ي",
        lemma: "جَزَى",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "to be repaid/recompensed",
          ur: "بدلہ دیا جائے",
          hi: "बदला दिया जाए",
          bn: "প্রতিদান দেওয়া হবে",
          tr: "karşılığı verilecek",
          id: "dibalas",
          ar: "تُكَافَأ"
        },
        grammarRole: "verb_passive_imperfect",
        grammarExplanations: {
          en: "Passive voice - emphasizes that his giving has no worldly expectation of return.",
          ur: "مجہول - اس بات پر زور کہ اس کی بخشش کی کوئی دنیاوی توقع نہیں۔"
        }
      }
    ],
    dependencyStructure: "وَمَا (negative) + لِأَحَدٍ عِندَهُ (locative) + مِن نِّعْمَةٍ (subject) + تُجْزَىٰ (adjective)",
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  20: {
    ayahNumber: 20,
    arabic: "إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ",
    translation: {
      en: "But only seeking the face (pleasure) of his Lord, the Most High",
      ur: "بلکہ صرف اپنے بلند رب کی رضا چاہتے ہوئے",
      hi: "बल्कि सिर्फ़ अपने बलंद रब की रज़ा चाहते हुए",
      bn: "বরং কেবল তার মহান প্রতিপালকের সন্তুষ্টি কামনা করে",
      tr: "Ancak yüce Rabbinin rızasını isteyerek",
      id: "Tetapi hanya mencari keridhaan Tuhannya Yang Maha Tinggi"
    },
    words: [
      {
        position: 1,
        arabic: "إِلَّا",
        transliteration: "illaa",
        root: "إ ل ا",
        lemma: "إِلَّا",
        posTag: "RES",
        posLabel: "RES",
        meaning: {
          en: "Except / But only",
          ur: "سوائے / بلکہ صرف",
          hi: "सिवाय / बल्कि सिर्फ़",
          bn: "ছাড়া / বরং কেবল",
          tr: "Ancak",
          id: "Tetapi hanya",
          ar: "فَقَط"
        },
        grammarRole: "exception_particle"
      },
      {
        position: 2,
        arabic: "ابْتِغَاءَ",
        transliteration: "ibtighaa'a",
        root: "ب غ ي",
        lemma: "اِبْتِغَاء",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "seeking",
          ur: "چاہتے ہوئے",
          hi: "चाहते हुए",
          bn: "কামনা করে",
          tr: "isteyerek",
          id: "mencari",
          ar: "طَلَب"
        },
        grammarRole: "masdar_accusative",
        grammarExplanations: {
          en: "Verbal noun (masdar) in accusative - used adverbially. His only motive is seeking Allah.",
          ur: "مصدر منصوب - بطور ظرف مستعمل۔ اس کا واحد مقصد اللہ کی رضا طلب کرنا۔"
        },
        advanced: {
          verbForm: "VIII - اِبْتَغَى (to seek earnestly)",
          rootFamily: ["بغي (to seek)", "بغية (desire)", "ابتغاء (seeking)"],
          frequency: "14 times",
          linguisticMiracle: "Form VIII indicates intense, earnest seeking - not casual, but devoted pursuit"
        }
      },
      {
        position: 3,
        arabic: "وَجْهِ",
        transliteration: "wajhi",
        root: "و ج ه",
        lemma: "وَجْه",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the face/countenance (pleasure)",
          ur: "چہرہ (رضا)",
          hi: "चेहरा (रज़ा)",
          bn: "মুখমণ্ডল (সন্তুষ্টি)",
          tr: "yüzü (rızası)",
          id: "wajah (keridhaan)",
          ar: "رِضَا"
        },
        grammarRole: "noun_genitive",
        grammarExplanations: {
          en: "Idiomatic: 'wajh' of Allah means His pleasure, acceptance, attention toward the servant.",
          ur: "محاورہ: اللہ کا 'وجہ' یعنی اس کی رضا، قبولیت، بندے کی طرف توجہ۔"
        },
        advanced: {
          rootFamily: ["وجه (face/direction)", "توجه (direction)", "وجاهة (distinction)"],
          frequency: "72 times",
          linguisticMiracle: "Wajh idiomatically means pleasure/essence - seeking Allah's pleasure, not His literal face",
          balagha: "The highest motive: not reward, not Paradise, but Allah Himself"
        }
      },
      {
        position: 4,
        arabic: "رَبِّهِ",
        transliteration: "rabbihi",
        root: "ر ب ب",
        lemma: "رَبّ",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "his Lord",
          ur: "اپنے رب کی",
          hi: "अपने रब की",
          bn: "তার প্রতিপালকের",
          tr: "Rabbinin",
          id: "Tuhannya",
          ar: "مَالِكِهِ"
        },
        grammarRole: "noun_genitive"
      },
      {
        position: 5,
        arabic: "الْأَعْلَىٰ",
        transliteration: "al-a'laa",
        root: "ع ل و",
        lemma: "أَعْلَى",
        posTag: "ADJ",
        posLabel: "ADJ",
        meaning: {
          en: "the Most High",
          ur: "سب سے بلند",
          hi: "सबसे बलंद",
          bn: "মহান",
          tr: "yüce",
          id: "Yang Maha Tinggi",
          ar: "الْعَظِيم"
        },
        grammarRole: "adjective_genitive",
        grammarExplanations: {
          en: "Superlative adjective. Allah is the Highest, so seeking His pleasure is the highest pursuit.",
          ur: "صیغہ افضل۔ اللہ سب سے بلند ہے، تو اس کی رضا چاہنا سب سے اعلیٰ جستجو ہے۔"
        },
        advanced: {
          rootFamily: ["علو (height)", "علي (high)", "تعالى (exalted)"],
          frequency: "11 times",
          balagha: "Al-A'la ends the description of the righteous person - seeking the Most High"
        }
      }
    ],
    dependencyStructure: "إِلَّا (exception) + ابْتِغَاءَ (verbal noun) + وَجْهِ رَبِّهِ الْأَعْلَىٰ (genitive chain)",
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },

  21: {
    ayahNumber: 21,
    arabic: "وَلَسَوْفَ يَرْضَىٰ",
    translation: {
      en: "And he will surely be satisfied (with what Allah gives him)",
      ur: "اور عنقریب وہ راضی ہو جائے گا",
      hi: "और अनक़रीब वह राज़ी हो जाएगा",
      bn: "এবং অচিরেই সে সন্তুষ্ট হবে",
      tr: "Ve elbette o razı olacaktır",
      id: "Dan kelak dia pasti akan mendapat keridaan",
    structure: {
      relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَلَسَوْفَ",
        transliteration: "wa-la-sawfa",
        root: "س و ف",
        lemma: "سَوْفَ",
        posTag: "FUT",
        posLabel: "FUT",
        meaning: {
          en: "And surely will",
          ur: "اور یقیناً عنقریب",
          hi: "और निश्चय ही अनक़रीब",
          bn: "এবং অবশ্যই অচিরেই",
          tr: "Ve elbette",
          id: "Dan kelak pasti",
          ar: "وَحَتْمًا"
        },
        grammarRole: "future_particle_emphatic",
        grammarExplanations: {
          en: "Waw + Lam of emphasis + sawfa (future) = triple emphasis on certainty of future event.",
          ur: "واو + لام تاکید + سوف (مستقبل) = آنے والے واقعے کی یقینی تین گنا تاکید۔"
        },
        advanced: {
          linguisticMiracle: "Strongest future emphasis in Arabic: la + sawfa = absolute certainty",
          balagha: "Promise guaranteed - no doubt about the reward"
        }
      },
      {
        position: 2,
        arabic: "يَرْضَىٰ",
        transliteration: "yardaa",
        root: "ر ض ي",
        lemma: "رَضِيَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "he will be pleased/satisfied",
          ur: "راضی ہو جائے گا",
          hi: "राज़ी हो जाएगा",
          bn: "সন্তুষ্ট হবে",
          tr: "razı olacaktır",
          id: "akan mendapat keridaan",
          ar: "سَيَكُونُ رَاضِيًا"
        },
        grammarRole: "verb_imperfect",
        grammarExplanations: {
          en: "Imperfect verb, Form I. He will be completely satisfied with Allah's reward.",
          ur: "فعل مضارع، باب اول۔ وہ اللہ کے اجر سے مکمل طور پر راضی ہو جائے گا۔"
        },
        advanced: {
          verbForm: "I - رَضِيَ (to be pleased)",
          rootFamily: ["رضا (pleasure)", "رضوان (divine pleasure)", "مرضي (pleasing)", "راضي (satisfied)"],
          frequency: "73 times in various forms",
          linguisticMiracle: "Surah ends with ridaa (satisfaction) - the righteous sought Allah's pleasure (wajh) and will receive satisfaction (ridaa)",
          balagha: "Perfect closure: He gave seeking Allah's wajh, he'll receive radaa - complete circle",
          memoryHook: "Yardaa = Will reach Ridwan (divine pleasure)"
        }
      }
    ],
    dependencyStructure: "وَلَسَوْفَ (emphatic future) + يَرْضَىٰ (verb) - Conclusive promise"
  }
};

export default TREEBANK_DATA;
