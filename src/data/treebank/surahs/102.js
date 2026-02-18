/**
 * Surah At-Takathur (102) - The Competition
 * Complete Quranic Arabic Treebank
 * 8 Ayahs - Makki
 * Theme: Warning against competing for worldly increase
 */

export const TREEBANK_DATA = {
  surahId: 102,
  surahName: "At-Takathur",
  surahNameArabic: "التكاثر",
  totalAyahs: 8,
  totalWords: 28,
  theme: "Competition for worldly things distracts from the Hereafter",

  translation: {
    en: "Competition in [worldly] increase diverts you. Until you visit the graveyards. No! You are going to know. Then no! You are going to know. No! If you only knew with knowledge of certainty... You will surely see the Hellfire. Then you will surely see it with the eye of certainty. Then you will surely be asked that Day about pleasure.",
    ur: "تمہیں مال و دولت کی کثرت نے غافل کر دیا۔ یہاں تک کہ تم قبروں میں پہنچ گئے۔ ہرگز نہیں! عنقریب تم جان لو گے۔ پھر ہرگز نہیں! عنقریب تم جان لو گے۔ ہرگز نہیں! اگر تم یقینی علم جان لیتے۔ تم ضرور دوزخ کو دیکھو گے۔ پھر تم اسے یقین کی آنکھ سے دیکھو گے۔ پھر تم سے اس دن نعمتوں کے بارے میں ضرور پوچھا جائے گا۔",
    hi: "तुम्हें दौलत की होड़ ने गाफिल कर दिया। यहां तक कि तुम कब्रों में पहुंच गए। हरगिज़ नहीं! जल्द ही तुम जान लोगे। फिर हरगिज़ नहीं! जल्द ही तुम जान लोगे। हरगिज़ नहीं! अगर तुम यक़ीनी इल्म जान लेते। तुम ज़रूर जहन्नम को देखोगे। फिर तुम उसे यक़ीन की आंख से देखोगे। फिर तुमसे उस दिन नेमतों के बारे में ज़रूर पूछा जाएगा।",
    bn: "তোমাদেরকে প্রাচুর্যের প্রতিযোগিতা গাফেল করে রেখেছে। যতক্ষণ না তোমরা কবরে যাও। কখনো না! শীঘ্রই তোমরা জানতে পারবে। আবার কখনো না! শীঘ্রই তোমরা জানতে পারবে। কখনো না! যদি তোমরা নিশ্চিত জ্ঞানে জানতে। অবশ্যই তোমরা জাহান্নাম দেখবে। অতঃপর তোমরা চাক্ষুষ নিশ্চয়তায় দেখবে। অতঃপর সেদিন নিয়ামত সম্পর্কে তোমাদের জিজ্ঞাসা করা হবে।",
    tr: "Çokluk kuruntusu sizi oyaladı. Ta ki kabirleri ziyaret edinceye kadar. Hayır! Yakında bileceksiniz. Yine hayır! Yakında bileceksiniz. Hayır! Kesin bilgiyle bilseydiniz. Elbette cehennemi görürsünüz. Sonra onu gözle görme kesinliğiyle görürsünüz. Sonra o gün nimetlerden mutlaka sorguya çekileceksiniz.",
    id: "Bermegah-megahan telah melalaikan kamu. Sampai kamu masuk ke dalam kubur. Janganlah begitu! Kelak kamu akan mengetahui. Dan janganlah begitu! Kelak kamu akan mengetahui. Janganlah begitu! Jika kamu mengetahui dengan pengetahuan yang yakin. Niscaya kamu benar-benar akan melihat neraka. Kemudian kamu benar-benar akan melihatnya dengan penglihatan yang yakin. Kemudian kamu pasti akan ditanya pada hari itu tentang kenikmatan."
  },

  1: {
    ayahNumber: 1,
    arabic: "أَلْهَىٰكُمُ ٱلتَّكَاثُرُ",
    translation: {
      en: "Competition in [worldly] increase diverts you",
      ur: "تمہیں مال و دولت کی کثرت نے غافل کر دیا",
      hi: "तुम्हें दौलत की होड़ ने गाफिल कर दिया",
      bn: "তোমাদেরকে প্রাচুর্যের প্রতিযোগিতা গাফেল করে রেখেছে",
      tr: "Çokluk kuruntusu sizi oyaladı",
      id: "Bermegah-megahan telah melalaikan kamu"
    },
    words: [
      {
        position: 1,
        arabic: "أَلْهَىٰكُمُ",
        transliteration: "alhaakum",
        root: "ل ه و",
        lemma: "أَلْهَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "diverts you / distracts you",
          ur: "تمہیں غافل کر دیا",
          hi: "तुम्हें गाफिल कर दिया",
          bn: "তোমাদের গাফেল করেছে",
          tr: "sizi oyaladı",
          id: "melalaikan kamu",
          ar: "شغلكم وألهاكم"
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
          en: "Form IV (أَفْعَلَ) - causative; التَّكَاثُر CAUSED your distraction",
          ur: "باب افعال - تکاثر نے غافل کیا"
        },
        advanced: {
          rootFamily: ["لَهَا (to be distracted)", "لَهْو (amusement)", "مُلْهِي (distracting)"],
          frequency: 12,
          balagha: "Past tense describes ongoing state - you ARE distracted (and have been)",
          memoryHook: "أَلْهَى = Made you 'LAY' aside important things"
        }
      },
      {
        position: 2,
        arabic: "ٱلتَّكَاثُرُ",
        transliteration: "at-takaathur",
        root: "ك ث ر",
        lemma: "تَكَاثُر",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "competition in increase / rivalry in abundance",
          ur: "کثرت کی دوڑ",
          hi: "बहुतायत की होड़",
          bn: "প্রাচুর্যের প্রতিযোগিতা",
          tr: "çokluk kuruntusu",
          id: "bermegah-megahan",
          ar: "التنافس في الكثرة والتفاخر"
        },
        grammarRole: "subject",
        case: "nominative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite",
          form: "VI verbal noun"
        },
        grammarExplanations: {
          en: "Form VI (تَفَاعُل) - mutual/reciprocal action; competing WITH EACH OTHER for more",
          ur: "باب تفاعل - ایک دوسرے سے مقابلہ"
        },
        advanced: {
          rootFamily: ["كَثُرَ (to be many)", "كَثِير (many)", "أَكْثَر (more)", "تَكَاثُر (mutual competition)"],
          frequency: 1,
          linguisticMiracle: "Form VI emphasizes RIVALRY - not just wanting more, but wanting MORE than others",
          semanticFields: ["wealth", "children", "possessions", "status"]
        }
      }
    ],
    dependencyStructure: "(أَلْهَىٰكُمُ)[verb+object] ← (ٱلتَّكَاثُرُ)[subject]"
  },

  2: {
    ayahNumber: 2,
    arabic: "حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ",
    translation: {
      en: "Until you visit the graveyards",
      ur: "یہاں تک کہ تم قبروں میں پہنچ گئے",
      hi: "यहां तक कि तुम कब्रों में पहुंच गए",
      bn: "যতক্ষণ না তোমরা কবরে যাও",
      tr: "Ta ki kabirleri ziyaret edinceye kadar",
      id: "Sampai kamu masuk ke dalam kubur"
    },
    words: [
      {
        position: 1,
        arabic: "حَتَّىٰ",
        transliteration: "hattaa",
        root: "N/A",
        lemma: "حَتَّى",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "until",
          ur: "یہاں تک کہ",
          hi: "यहां तक कि",
          bn: "যতক্ষণ না",
          tr: "ta ki",
          id: "sampai",
          ar: "حتى"
        },
        grammarRole: "conjunction (time limit)",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "زُرْتُمُ",
        transliteration: "zurtum",
        root: "ز و ر",
        lemma: "زَارَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "you visit",
          ur: "تم پہنچ گئے",
          hi: "तुम पहुंच गए",
          bn: "তোমরা যাও",
          tr: "ziyaret ettiniz",
          id: "kamu masuk",
          ar: "زرتم وصرتم إلى"
        },
        grammarRole: "verb",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "2nd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I"
        },
        grammarExplanations: {
          en: "زُرْتُم = you visited; visiting graves = dying",
          ur: "قبروں کی زیارت = موت"
        },
        advanced: {
          rootFamily: ["زِيَارَة (visit)", "زَائِر (visitor)", "مَزَار (shrine)"],
          frequency: 2,
          balagha: "Euphemism - 'visiting' graves means DYING and becoming a resident",
          irony: "They competed counting wealth/children, ended up being counted among the dead"
        }
      },
      {
        position: 3,
        arabic: "ٱلْمَقَابِرَ",
        transliteration: "al-maqaabir",
        root: "ق ب ر",
        lemma: "مَقْبَرَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the graveyards",
          ur: "قبریں",
          hi: "कब्रें",
          bn: "কবর",
          tr: "kabirler",
          id: "kubur",
          ar: "المقابر والقبور"
        },
        grammarRole: "direct object",
        case: "accusative",
        features: {
          gender: "feminine",
          number: "plural",
          definiteness: "definite"
        },
        advanced: {
          rootFamily: ["قَبَرَ (to bury)", "قَبْر (grave)", "مَقْبَرَة (cemetery)"],
          frequency: 8,
          memoryHook: "مَقَابِر = places where you're BURIED (قَبَرَ)"
        }
      }
    ],
    dependencyStructure: "(حَتَّىٰ)[conj] → (زُرْتُمُ)[verb] → (ٱلْمَقَابِرَ)[object]"
  },

  3: {
    ayahNumber: 3,
    arabic: "كَلَّا سَوْفَ تَعْلَمُونَ",
    translation: {
      en: "No! You are going to know",
      ur: "ہرگز نہیں! عنقریب تم جان لو گے",
      hi: "हरगिज़ नहीं! जल्द ही तुम जान लोगे",
      bn: "কখনো না! শীঘ্রই তোমরা জানতে পারবে",
      tr: "Hayır! Yakında bileceksiniz",
      id: "Janganlah begitu! Kelak kamu akan mengetahui"
    },
    words: [
      {
        position: 1,
        arabic: "كَلَّا",
        transliteration: "kallaa",
        root: "N/A",
        lemma: "كَلَّا",
        posTag: "PREV", posLabel: "PREV",
        meaning: {
          en: "No! / Never!",
          ur: "ہرگز نہیں",
          hi: "हरगिज़ नहीं",
          bn: "কখনো না",
          tr: "Hayır",
          id: "Janganlah begitu",
          ar: "ردع وزجر"
        },
        grammarRole: "particle of rejection/rebuke",
        case: "N/A",
        advanced: {
          frequency: 33,
          balagha: "Emphatic rejection of their misplaced priorities"
        }
      },
      {
        position: 2,
        arabic: "سَوْفَ",
        transliteration: "sawfa",
        root: "س و ف",
        lemma: "سَوْفَ",
        posTag: "FUT", posLabel: "FUT",
        meaning: {
          en: "soon / will",
          ur: "عنقریب",
          hi: "जल्द ही",
          bn: "শীঘ্রই",
          tr: "yakında",
          id: "kelak",
          ar: "سوف"
        },
        grammarRole: "future particle",
        case: "N/A",
        grammarExplanations: {
          en: "سَوْفَ indicates more distant future than سَ (but still certain)",
          ur: "بعید مستقبل کی علامت"
        }
      },
      {
        position: 3,
        arabic: "تَعْلَمُونَ",
        transliteration: "ta'lamoon",
        root: "ع ل م",
        lemma: "عَلِمَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "you will know",
          ur: "تم جان لو گے",
          hi: "तुम जान लोगे",
          bn: "তোমরা জানবে",
          tr: "bileceksiniz",
          id: "kamu akan mengetahui",
          ar: "ستعلمون الحقيقة"
        },
        grammarRole: "verb",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "2nd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I",
          mood: "indicative"
        },
        advanced: {
          rootFamily: ["عِلْم (knowledge)", "عَالِم (knower)", "مَعْلُوم (known)", "تَعَلُّم (learning)"],
          frequency: 382
        }
      }
    ],
    dependencyStructure: "(كَلَّا)[rejection] → (سَوْفَ)[future] → (تَعْلَمُونَ)[verb]"
  },

  4: {
    ayahNumber: 4,
    arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
    translation: {
      en: "Then no! You are going to know",
      ur: "پھر ہرگز نہیں! عنقریب تم جان لو گے",
      hi: "फिर हरगिज़ नहीं! जल्द ही तुम जान लोगे",
      bn: "আবার কখনো না! শীঘ্রই তোমরা জানতে পারবে",
      tr: "Yine hayır! Yakında bileceksiniz",
      id: "Dan janganlah begitu! Kelak kamu akan mengetahui"
    },
    words: [
      {
        position: 1,
        arabic: "ثُمَّ",
        transliteration: "thumma",
        root: "N/A",
        lemma: "ثُمَّ",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "Then / Moreover",
          ur: "پھر",
          hi: "फिर",
          bn: "আবার",
          tr: "Sonra",
          id: "Dan",
          ar: "ثم"
        },
        grammarRole: "conjunction (sequence + emphasis)",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "كَلَّا",
        transliteration: "kallaa",
        root: "N/A",
        lemma: "كَلَّا",
        posTag: "PREV", posLabel: "PREV",
        meaning: {
          en: "No! / Never!",
          ur: "ہرگز نہیں",
          hi: "हरगिज़ नहीं",
          bn: "কখনো না",
          tr: "Hayır",
          id: "Janganlah begitu",
          ar: "ردع"
        },
        grammarRole: "particle of rejection",
        case: "N/A"
      },
      {
        position: 3,
        arabic: "سَوْفَ",
        transliteration: "sawfa",
        root: "س و ف",
        lemma: "سَوْفَ",
        posTag: "FUT", posLabel: "FUT",
        meaning: {
          en: "soon / will",
          ur: "عنقریب",
          hi: "जल्द ही",
          bn: "শীঘ্রই",
          tr: "yakında",
          id: "kelak",
          ar: "سوف"
        },
        grammarRole: "future particle",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "تَعْلَمُونَ",
        transliteration: "ta'lamoon",
        root: "ع ل م",
        lemma: "عَلِمَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "you will know",
          ur: "تم جان لو گے",
          hi: "तुम जान लोगे",
          bn: "তোমরা জানবে",
          tr: "bileceksiniz",
          id: "kamu akan mengetahui",
          ar: "ستعلمون"
        },
        grammarRole: "verb",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "2nd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I"
        },
        grammarExplanations: {
          en: "Repetition for emphasis - you WILL know, then you WILL know (two stages of realization)",
          ur: "تاکید کے لیے تکرار - پہلے قبر میں، پھر قیامت میں"
        },
        advanced: {
          balagha: "First knowing: in the grave (barzakh). Second knowing: on Judgment Day",
          tafseerNote: "Some say: first warning, then second more severe warning"
        }
      }
    ],
    dependencyStructure: "(ثُمَّ)[sequence] → (كَلَّا)[rejection] → (سَوْفَ تَعْلَمُونَ)[future-verb]"
  },

  5: {
    ayahNumber: 5,
    arabic: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ",
    translation: {
      en: "No! If you only knew with knowledge of certainty...",
      ur: "ہرگز نہیں! اگر تم یقینی علم جان لیتے",
      hi: "हरगिज़ नहीं! अगर तुम यक़ीनी इल्म जान लेते",
      bn: "কখনো না! যদি তোমরা নিশ্চিত জ্ঞানে জানতে",
      tr: "Hayır! Kesin bilgiyle bilseydiniz",
      id: "Janganlah begitu! Jika kamu mengetahui dengan pengetahuan yang yakin"
    },
    words: [
      {
        position: 1,
        arabic: "كَلَّا",
        transliteration: "kallaa",
        root: "N/A",
        lemma: "كَلَّا",
        posTag: "PREV", posLabel: "PREV",
        meaning: {
          en: "No! / Never!",
          ur: "ہرگز نہیں",
          hi: "हरगिज़ नहीं",
          bn: "কখনো না",
          tr: "Hayır",
          id: "Janganlah begitu",
          ar: "ردع"
        },
        grammarRole: "particle of rejection",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "لَوْ",
        transliteration: "law",
        root: "N/A",
        lemma: "لَوْ",
        posTag: "COND", posLabel: "COND",
        meaning: {
          en: "if only / if",
          ur: "اگر",
          hi: "अगर",
          bn: "যদি",
          tr: "eğer",
          id: "jika",
          ar: "لو"
        },
        grammarRole: "conditional particle (impossible)",
        case: "N/A",
        grammarExplanations: {
          en: "لَوْ - conditional for something not happening; 'if only you knew, but you don't'",
          ur: "شرط امتناع - 'کاش تم جانتے، لیکن نہیں جانتے'"
        }
      },
      {
        position: 3,
        arabic: "تَعْلَمُونَ",
        transliteration: "ta'lamoon",
        root: "ع ل م",
        lemma: "عَلِمَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "you knew",
          ur: "تم جان لیتے",
          hi: "तुम जान लेते",
          bn: "তোমরা জানতে",
          tr: "bilseydiniz",
          id: "kamu mengetahui",
          ar: "تعلمون"
        },
        grammarRole: "verb (protasis of conditional)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "2nd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I"
        }
      },
      {
        position: 4,
        arabic: "عِلْمَ",
        transliteration: "'ilma",
        root: "ع ل م",
        lemma: "عِلْم",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "knowledge",
          ur: "علم",
          hi: "इल्म",
          bn: "জ্ঞান",
          tr: "bilgi",
          id: "pengetahuan",
          ar: "علم"
        },
        grammarRole: "cognate accusative (مفعول مطلق)",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "Cognate accusative for emphasis: 'knew with KNOWING' = knew truly/certainly",
          ur: "مفعول مطلق - تاکید کے لیے"
        }
      },
      {
        position: 5,
        arabic: "ٱلْيَقِينِ",
        transliteration: "al-yaqeen",
        root: "ي ق ن",
        lemma: "يَقِين",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "certainty",
          ur: "یقین",
          hi: "यक़ीन",
          bn: "নিশ্চয়তা",
          tr: "kesinlik",
          id: "yakin",
          ar: "اليقين والتأكد"
        },
        grammarRole: "genitive (specifying type of علم)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        advanced: {
          rootFamily: ["يَقِنَ (to be certain)", "يَقِين (certainty)", "مُتَيَقِّن (certain)"],
          frequency: 28,
          epistemology: "First level of certainty: عِلْمَ الْيَقِين (knowledge of certainty) - believing through evidence",
          memoryHook: "عِلْمَ الْيَقِين = KNOWING it's true (from proofs)"
        }
      }
    ],
    dependencyStructure: "(كَلَّا)[rejection] → (لَوْ)[conditional] → (تَعْلَمُونَ)[verb] → (عِلْمَ ٱلْيَقِينِ)[cognate-accusative]"
  },

  6: {
    ayahNumber: 6,
    arabic: "لَتَرَوُنَّ ٱلْجَحِيمَ",
    translation: {
      en: "You will surely see the Hellfire",
      ur: "تم ضرور دوزخ کو دیکھو گے",
      hi: "तुम ज़रूर जहन्नम को देखोगे",
      bn: "অবশ্যই তোমরা জাহান্নাম দেখবে",
      tr: "Elbette cehennemi görürsünüz",
      id: "Niscaya kamu benar-benar akan melihat neraka"
    },
    words: [
      {
        position: 1,
        arabic: "لَتَرَوُنَّ",
        transliteration: "la-tarawunna",
        root: "ر أ ي",
        lemma: "رَأَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "You will surely see",
          ur: "تم ضرور دیکھو گے",
          hi: "तुम ज़रूर देखोगे",
          bn: "তোমরা অবশ্যই দেখবে",
          tr: "elbette göreceksiniz",
          id: "kamu benar-benar akan melihat",
          ar: "لترونها بأعينكم"
        },
        grammarRole: "verb (emphatic)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "2nd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I",
          mood: "emphatic (نون التوكيد)"
        },
        grammarExplanations: {
          en: "لَ + نون التوكيد = oath-like emphasis; absolutely, definitely will see",
          ur: "لام تاکید + نون ثقیلہ = یقینی بات"
        },
        advanced: {
          frequency: 271,
          balagha: "Strongest possible emphasis - not maybe, not probably, DEFINITELY will see Hell"
        }
      },
      {
        position: 2,
        arabic: "ٱلْجَحِيمَ",
        transliteration: "al-jaheem",
        root: "ج ح م",
        lemma: "جَحِيم",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the Hellfire",
          ur: "دوزخ",
          hi: "जहन्नम",
          bn: "জাহান্নাম",
          tr: "cehennem",
          id: "neraka",
          ar: "النار الشديدة الاشتعال"
        },
        grammarRole: "direct object",
        case: "accusative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite"
        },
        advanced: {
          rootFamily: ["جَحَمَ (to blaze)", "جَحِيم (blazing fire)", "جَاحِم (intensely hot)"],
          frequency: 26,
          hellNames: "One of the names of Hell - emphasizes intense burning"
        }
      }
    ],
    dependencyStructure: "(لَتَرَوُنَّ)[emphatic-verb] → (ٱلْجَحِيمَ)[object]"
  },

  7: {
    ayahNumber: 7,
    arabic: "ثُمَّ لَتَرَوُنَّهَا عَيْنَ ٱلْيَقِينِ",
    translation: {
      en: "Then you will surely see it with the eye of certainty",
      ur: "پھر تم اسے یقین کی آنکھ سے دیکھو گے",
      hi: "फिर तुम उसे यक़ीन की आंख से देखोगे",
      bn: "অতঃপর তোমরা চাক্ষুষ নিশ্চয়তায় দেখবে",
      tr: "Sonra onu gözle görme kesinliğiyle görürsünüz",
      id: "Kemudian kamu benar-benar akan melihatnya dengan penglihatan yang yakin"
    },
    words: [
      {
        position: 1,
        arabic: "ثُمَّ",
        transliteration: "thumma",
        root: "N/A",
        lemma: "ثُمَّ",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "Then",
          ur: "پھر",
          hi: "फिर",
          bn: "অতঃপর",
          tr: "Sonra",
          id: "Kemudian",
          ar: "ثم"
        },
        grammarRole: "conjunction",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "لَتَرَوُنَّهَا",
        transliteration: "la-tarawunnahaa",
        root: "ر أ ي",
        lemma: "رَأَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "you will surely see it",
          ur: "تم اسے ضرور دیکھو گے",
          hi: "तुम उसे ज़रूर देखोगे",
          bn: "তোমরা অবশ্যই তা দেখবে",
          tr: "onu elbette göreceksiniz",
          id: "kamu benar-benar akan melihatnya",
          ar: "لترونها"
        },
        grammarRole: "emphatic verb + object pronoun",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "2nd",
          gender: "masculine",
          number: "plural",
          voice: "active",
          form: "I",
          mood: "emphatic"
        }
      },
      {
        position: 3,
        arabic: "عَيْنَ",
        transliteration: "'ayna",
        root: "ع ي ن",
        lemma: "عَيْن",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "eye / vision of",
          ur: "آنکھ / یقین",
          hi: "आंख / यक़ीन",
          bn: "চাক্ষুষ",
          tr: "gözle görme",
          id: "penglihatan",
          ar: "عين اليقين"
        },
        grammarRole: "cognate accusative (مفعول مطلق)",
        case: "accusative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "عَيْن = eye/essence; 'seeing with eye-certainty' = visual proof",
          ur: "آنکھوں دیکھی - براہ راست مشاہدہ"
        }
      },
      {
        position: 4,
        arabic: "ٱلْيَقِينِ",
        transliteration: "al-yaqeen",
        root: "ي ق ن",
        lemma: "يَقِين",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "certainty",
          ur: "یقین",
          hi: "यक़ीन",
          bn: "নিশ্চয়তা",
          tr: "kesinlik",
          id: "yakin",
          ar: "اليقين"
        },
        grammarRole: "genitive",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        advanced: {
          epistemology: "Second level: عَيْنَ الْيَقِين (eye of certainty) - seeing with one's own eyes",
          comparison: [
            "عِلْمَ الْيَقِين (v.5) - knowledge certainty: being told fire burns",
            "عَيْنَ الْيَقِين (v.7) - visual certainty: SEEING the fire",
            "حَقَّ الْيَقِين (56:95) - reality certainty: BEING IN the fire"
          ],
          memoryHook: "عَيْنَ = EYE-certainty: seeing is believing"
        }
      }
    ],
    dependencyStructure: "(ثُمَّ)[sequence] → (لَتَرَوُنَّهَا)[emphatic-verb] → (عَيْنَ ٱلْيَقِينِ)[cognate-accusative]"
  },

  8: {
    ayahNumber: 8,
    arabic: "ثُمَّ لَتُسْـَٔلُنَّ يَوْمَئِذٍ عَنِ ٱلنَّعِيمِ",
    translation: {
      en: "Then you will surely be asked that Day about pleasure",
      ur: "پھر تم سے اس دن نعمتوں کے بارے میں ضرور پوچھا جائے گا",
      hi: "फिर तुमसे उस दिन नेमतों के बारे में ज़रूर पूछा जाएगा",
      bn: "অতঃপর সেদিন নিয়ামত সম্পর্কে তোমাদের জিজ্ঞাসা করা হবে",
      tr: "Sonra o gün nimetlerden mutlaka sorguya çekileceksiniz",
      id: "Kemudian kamu pasti akan ditanya pada hari itu tentang kenikmatan"
    },
    words: [
      {
        position: 1,
        arabic: "ثُمَّ",
        transliteration: "thumma",
        root: "N/A",
        lemma: "ثُمَّ",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "Then",
          ur: "پھر",
          hi: "फिर",
          bn: "অতঃপর",
          tr: "Sonra",
          id: "Kemudian",
          ar: "ثم"
        },
        grammarRole: "conjunction",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "لَتُسْـَٔلُنَّ",
        transliteration: "la-tus'alunna",
        root: "س أ ل",
        lemma: "سَأَلَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "you will surely be asked",
          ur: "تم سے ضرور پوچھا جائے گا",
          hi: "तुमसे ज़रूर पूछा जाएगा",
          bn: "তোমাদের জিজ্ঞাসা করা হবে",
          tr: "sorguya çekileceksiniz",
          id: "kamu akan ditanya",
          ar: "لتُسألون"
        },
        grammarRole: "emphatic passive verb",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "2nd",
          gender: "masculine",
          number: "plural",
          voice: "passive",
          form: "I",
          mood: "emphatic"
        },
        grammarExplanations: {
          en: "Passive voice - you will BE ASKED (by Allah); emphatic with لَ + نون",
          ur: "مجہول - اللہ تعالیٰ پوچھیں گے"
        },
        advanced: {
          rootFamily: ["سُؤَال (question)", "سَائِل (questioner)", "مَسْأَلَة (matter)"],
          frequency: 129
        }
      },
      {
        position: 3,
        arabic: "يَوْمَئِذٍ",
        transliteration: "yawma'idhin",
        root: "ي و م",
        lemma: "يَوْم + إِذ",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "that Day",
          ur: "اس دن",
          hi: "उस दिन",
          bn: "সেদিন",
          tr: "o gün",
          id: "pada hari itu",
          ar: "يوم القيامة"
        },
        grammarRole: "adverb of time",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "singular"
        }
      },
      {
        position: 4,
        arabic: "عَنِ",
        transliteration: "'an",
        root: "ع ن",
        lemma: "عَن",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "about / concerning",
          ur: "کے بارے میں",
          hi: "के बारे में",
          bn: "সম্পর্কে",
          tr: "hakkında",
          id: "tentang",
          ar: "عن"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 5,
        arabic: "ٱلنَّعِيمِ",
        transliteration: "an-na'eem",
        root: "ن ع م",
        lemma: "نَعِيم",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "pleasure / blessings",
          ur: "نعمتیں",
          hi: "नेमतें",
          bn: "নিয়ামত",
          tr: "nimetler",
          id: "kenikmatan",
          ar: "النعم والملذات"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "النَّعِيم - all blessings: health, wealth, family, cold water, shade...",
          ur: "تمام نعمتیں - صحت، دولت، ٹھنڈا پانی، سایہ..."
        },
        advanced: {
          rootFamily: ["نَعِمَ (to be pleasant)", "نِعْمَة (blessing)", "نَعِيم (bliss)", "مُنَعَّم (luxurious)"],
          frequency: 16,
          hadith: "Prophet ﷺ said you'll be asked about cold water on a hot day",
          memoryHook: "النَّعِيم = all good things you enjoyed"
        }
      }
    ],
    dependencyStructure: "(ثُمَّ)[sequence] → (لَتُسْـَٔلُنَّ)[emphatic-passive-verb] → (يَوْمَئِذٍ)[time] → (عَنِ ٱلنَّعِيمِ)[prep-phrase]"
  }
};

export default TREEBANK_DATA;
