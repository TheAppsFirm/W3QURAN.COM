/**
 * Surah Al-Fil (105) - The Elephant
 * Complete Quranic Arabic Treebank
 * 5 Ayahs - Makki
 * Theme: Allah's destruction of Abraha's elephant army
 */

export const TREEBANK_DATA = {
  surahId: 105,
  surahName: "Al-Fil",
  surahNameArabic: "الفيل",
  totalAyahs: 5,
  totalWords: 23,
  theme: "Divine protection of the Ka'bah from Abraha's army",

  translation: {
    en: "Have you not considered how your Lord dealt with the companions of the elephant? Did He not make their plan into misguidance? And He sent against them birds in flocks, Striking them with stones of hard clay, And He made them like eaten straw.",
    ur: "کیا آپ نے نہیں دیکھا کہ آپ کے رب نے ہاتھی والوں کے ساتھ کیا کیا؟ کیا اس نے ان کی تدبیر کو غلط نہیں کر دیا؟ اور ان پر جھنڈ کے جھنڈ پرندے بھیجے۔ جو ان پر کنکر کی پتھریاں مار رہے تھے۔ پھر انہیں کھایا ہوا بھوسا بنا دیا۔",
    hi: "क्या तुमने नहीं देखा कि तुम्हारे रब ने हाथी वालों के साथ क्या किया? क्या उसने उनकी चाल को नाकाम नहीं कर दिया? और उन पर झुंड के झुंड पक्षी भेजे। जो उन पर कंकड़ की पत्थरियां मार रहे थे। फिर उन्हें खाए हुए भूसे जैसा बना दिया।",
    bn: "তুমি কি দেখনি তোমার রব হাতিওয়ালাদের সাথে কী করেছেন? তিনি কি তাদের ষড়যন্ত্র নস্যাৎ করেননি? তিনি তাদের বিরুদ্ধে ঝাঁকে ঝাঁকে পাখি পাঠিয়েছিলেন। যারা তাদের উপর পাথরের কাঁকর নিক্ষেপ করছিল। অতঃপর তিনি তাদের ভুষিতে পরিণত করলেন।",
    tr: "Rabbinin fil sahiplerine ne yaptığını görmedin mi? Onların tuzaklarını boşa çıkarmadı mı? Üzerlerine sürü sürü kuşlar gönderdi. Onlara pişmiş çamurdan taşlar atıyorlardı. Sonra onları yenmiş ekin yaprağı gibi yaptı.",
    id: "Apakah kamu tidak memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan gajah? Bukankah Dia telah menjadikan tipu daya mereka sia-sia? Dan Dia mengirimkan kepada mereka burung yang berbondong-bondong. Yang melempari mereka dengan batu dari tanite yang keras. Lalu Dia menjadikan mereka seperti daun-daun yang dimakan ulat."
  },

  1: {
    ayahNumber: 1,
    arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ",
    translation: {
      en: "Have you not considered how your Lord dealt with the companions of the elephant?",
      ur: "کیا آپ نے نہیں دیکھا کہ آپ کے رب نے ہاتھی والوں کے ساتھ کیا کیا؟",
      hi: "क्या तुमने नहीं देखा कि तुम्हारे रब ने हाथी वालों के साथ क्या किया?",
      bn: "তুমি কি দেখনি তোমার রব হাতিওয়ালাদের সাথে কী করেছেন?",
      tr: "Rabbinin fil sahiplerine ne yaptığını görmedin mi?",
      id: "Apakah kamu tidak memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan gajah?"
    },
    words: [
      {
        position: 1,
        arabic: "أَلَمْ",
        transliteration: "alam",
        root: "N/A",
        lemma: "أَ + لَمْ",
        posTag: "INTG + NEG", posLabel: "INTG+NEG",
        meaning: {
          en: "Have (you) not",
          ur: "کیا نہیں",
          hi: "क्या नहीं",
          bn: "কি নি",
          tr: "... mi",
          id: "Tidakkah",
          ar: "ألم تعلم"
        },
        grammarRole: "interrogative + negation (rhetorical)",
        case: "N/A",
        grammarExplanations: {
          en: "Rhetorical question expecting 'yes' - 'Haven't you seen?' = 'You certainly have seen'",
          ur: "استفہام تقریری - جواب 'ہاں' متوقع ہے"
        }
      },
      {
        position: 2,
        arabic: "تَرَ",
        transliteration: "tara",
        root: "ر أ ي",
        lemma: "رَأَىٰ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "you see/consider",
          ur: "آپ نے دیکھا",
          hi: "तुमने देखा",
          bn: "তুমি দেখেছ",
          tr: "gördün",
          id: "kamu memperhatikan",
          ar: "تعلم وتتأمل"
        },
        grammarRole: "verb (main)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "2nd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "I",
          mood: "jussive (after لَمْ)"
        },
        grammarExplanations: {
          en: "Jussive mood after لَمْ - vowel shortened from تَرَى to تَرَ",
          ur: "لَمْ کے بعد مجزوم"
        }
      },
      {
        position: 3,
        arabic: "كَيْفَ",
        transliteration: "kayfa",
        root: "ك ي ف",
        lemma: "كَيْفَ",
        posTag: "INTG", posLabel: "INTG",
        meaning: {
          en: "how",
          ur: "کیسے",
          hi: "कैसे",
          bn: "কিভাবে",
          tr: "nasıl",
          id: "bagaimana",
          ar: "كيف"
        },
        grammarRole: "interrogative adverb",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "فَعَلَ",
        transliteration: "fa'ala",
        root: "ف ع ل",
        lemma: "فَعَلَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "dealt with / did",
          ur: "کیا",
          hi: "किया",
          bn: "করেছেন",
          tr: "yaptı",
          id: "bertindak",
          ar: "فعل وصنع"
        },
        grammarRole: "verb (subordinate clause)",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "I"
        },
        advanced: {
          rootFamily: ["فِعْل (deed)", "فَاعِل (doer)", "مَفْعُول (object)", "تَفَاعُل (interaction)"],
          frequency: 108
        }
      },
      {
        position: 5,
        arabic: "رَبُّكَ",
        transliteration: "Rabbuka",
        root: "ر ب ب",
        lemma: "رَبّ",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "your Lord",
          ur: "آپ کا رب",
          hi: "तुम्हारा रब",
          bn: "তোমার রব",
          tr: "Rabbin",
          id: "Tuhanmu",
          ar: "ربك ومولاك"
        },
        grammarRole: "subject of فَعَلَ",
        case: "nominative",
        features: {
          gender: "masculine",
          number: "singular",
          possessive: "2nd singular masculine"
        }
      },
      {
        position: 6,
        arabic: "بِأَصْحَٰبِ",
        transliteration: "bi-ashaabi",
        root: "ص ح ب",
        lemma: "أَصْحَاب",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "with the companions/people of",
          ur: "والوں کے ساتھ",
          hi: "वालों के साथ",
          bn: "ওয়ালাদের সাথে",
          tr: "sahiplerine",
          id: "pasukan",
          ar: "أصحاب الفيل"
        },
        grammarRole: "prepositional phrase (object)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "plural",
          definiteness: "definite (by idafa)"
        },
        advanced: {
          rootFamily: ["صَحِبَ (to accompany)", "صَاحِب (companion)", "صُحْبَة (companionship)"],
          frequency: 97
        }
      },
      {
        position: 7,
        arabic: "ٱلْفِيلِ",
        transliteration: "al-feel",
        root: "ف ي ل",
        lemma: "فِيل",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the elephant",
          ur: "ہاتھی",
          hi: "हाथी",
          bn: "হাতি",
          tr: "fil",
          id: "gajah",
          ar: "الفيل"
        },
        grammarRole: "genitive (possessed)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "THE elephant - referring to Mahmud, Abraha's famous war elephant",
          ur: "محمود - ابرہہ کا مشہور جنگی ہاتھی"
        },
        advanced: {
          rootFamily: ["فِيل (elephant)", "فَيَّال (elephant keeper)"],
          frequency: 1,
          historicalNote: "This elephant, named Mahmud, refused to march toward Ka'bah"
        }
      }
    ],
    dependencyStructure: "(أَلَمْ تَرَ)[rhetorical-question] → (كَيْفَ)[manner] → (فَعَلَ)[verb] → (رَبُّكَ)[subject] → (بِأَصْحَٰبِ ٱلْفِيلِ)[object]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 5, label: 'فعل + فاعل' },
      { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ",
    translation: {
      en: "Did He not make their plan into misguidance?",
      ur: "کیا اس نے ان کی تدبیر کو غلط نہیں کر دیا؟",
      hi: "क्या उसने उनकी चाल को नाकाम नहीं कर दिया?",
      bn: "তিনি কি তাদের ষড়যন্ত্র নস্যাৎ করেননি?",
      tr: "Onların tuzaklarını boşa çıkarmadı mı?",
      id: "Bukankah Dia telah menjadikan tipu daya mereka sia-sia?"
    },
    words: [
      {
        position: 1,
        arabic: "أَلَمْ",
        transliteration: "alam",
        root: "N/A",
        lemma: "أَ + لَمْ",
        posTag: "INTG + NEG", posLabel: "INTG+NEG",
        meaning: {
          en: "Did (He) not",
          ur: "کیا نہیں",
          hi: "क्या नहीं",
          bn: "কি নি",
          tr: "... mi",
          id: "Bukankah",
          ar: "ألم"
        },
        grammarRole: "interrogative + negation (rhetorical)",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "يَجْعَلْ",
        transliteration: "yaj'al",
        root: "ج ع ل",
        lemma: "جَعَلَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "make / render",
          ur: "کر دیا",
          hi: "कर दिया",
          bn: "করেছেন",
          tr: "kıldı",
          id: "menjadikan",
          ar: "جعل وصيّر"
        },
        grammarRole: "verb (main)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "I",
          mood: "jussive (after لَمْ)"
        },
        advanced: {
          rootFamily: ["جَعْل (making)", "جَاعِل (maker)", "مَجْعُول (made)"],
          frequency: 340
        }
      },
      {
        position: 3,
        arabic: "كَيْدَهُمْ",
        transliteration: "kaydahum",
        root: "ك ي د",
        lemma: "كَيْد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "their plan / plot",
          ur: "ان کی تدبیر",
          hi: "उनकी चाल",
          bn: "তাদের ষড়যন্ত্র",
          tr: "tuzaklarını",
          id: "tipu daya mereka",
          ar: "مكرهم وحيلتهم"
        },
        grammarRole: "first object of يَجْعَلْ",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "singular",
          possessive: "3rd plural masculine"
        },
        grammarExplanations: {
          en: "كَيْد - evil scheming, plotting with ill intent",
          ur: "بری نیت سے منصوبہ بندی"
        },
        advanced: {
          rootFamily: ["كَادَ (to plot)", "كَيْد (plot)", "مَكِيدَة (trap)"],
          frequency: 35,
          quranicUsage: "Used for Pharaoh's plot, Yusuf's brothers' plot, etc."
        }
      },
      {
        position: 4,
        arabic: "فِى",
        transliteration: "fee",
        root: "N/A",
        lemma: "فِي",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "into / in",
          ur: "میں",
          hi: "में",
          bn: "মধ্যে",
          tr: "içinde",
          id: "dalam",
          ar: "في"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 5,
        arabic: "تَضْلِيلٍ",
        transliteration: "tadleel",
        root: "ض ل ل",
        lemma: "تَضْلِيل",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "misguidance / ruin / loss",
          ur: "گمراہی / بربادی",
          hi: "गुमराही / बर्बादी",
          bn: "বিপথ / ধ্বংস",
          tr: "sapıklık",
          id: "kesesatan",
          ar: "ضياع وخسران"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite",
          form: "II verbal noun"
        },
        grammarExplanations: {
          en: "Form II verbal noun - intensive 'causing to go astray', complete failure",
          ur: "باب تفعیل کا مصدر - مکمل ناکامی"
        },
        advanced: {
          rootFamily: ["ضَلَّ (to stray)", "ضَلَال (misguidance)", "ضَالّ (strayed)", "مُضِلّ (misleader)"],
          frequency: 5,
          balagha: "Their plan didn't just fail - it led to their complete destruction"
        }
      }
    ],
    dependencyStructure: "(أَلَمْ يَجْعَلْ)[rhetorical-question] → (كَيْدَهُمْ)[object-1] → (فِى تَضْلِيلٍ)[object-2-prepositional]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
    translation: {
      en: "And He sent against them birds in flocks",
      ur: "اور ان پر جھنڈ کے جھنڈ پرندے بھیجے",
      hi: "और उन पर झुंड के झुंड पक्षी भेजे",
      bn: "তিনি তাদের বিরুদ্ধে ঝাঁকে ঝাঁকে পাখি পাঠিয়েছিলেন",
      tr: "Üzerlerine sürü sürü kuşlar gönderdi",
      id: "Dan Dia mengirimkan kepada mereka burung yang berbondong-bondong"
    },
    words: [
      {
        position: 1,
        arabic: "وَأَرْسَلَ",
        transliteration: "wa-arsala",
        root: "ر س ل",
        lemma: "أَرْسَلَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "And He sent",
          ur: "اور بھیجا",
          hi: "और भेजा",
          bn: "এবং পাঠালেন",
          tr: "Ve gönderdi",
          id: "Dan Dia mengirimkan",
          ar: "وأرسل وبعث"
        },
        grammarRole: "conjunction + verb",
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
          rootFamily: ["رَسُول (messenger)", "رِسَالَة (message)", "مُرْسَل (sent)", "إِرْسَال (sending)"],
          frequency: 175
        }
      },
      {
        position: 2,
        arabic: "عَلَيْهِمْ",
        transliteration: "'alayhim",
        root: "ع ل و",
        lemma: "عَلَى",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "against them / upon them",
          ur: "ان پر",
          hi: "उन पर",
          bn: "তাদের উপর",
          tr: "onlara karşı",
          id: "kepada mereka",
          ar: "عليهم"
        },
        grammarRole: "prepositional phrase",
        case: "N/A",
        features: {
          person: "3rd",
          gender: "masculine",
          number: "plural"
        }
      },
      {
        position: 3,
        arabic: "طَيْرًا",
        transliteration: "tayran",
        root: "ط ي ر",
        lemma: "طَيْر",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "birds",
          ur: "پرندے",
          hi: "पक्षी",
          bn: "পাখি",
          tr: "kuşlar",
          id: "burung",
          ar: "طيور"
        },
        grammarRole: "direct object",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "collective",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "Collective noun طَيْر - birds as a group/swarm",
          ur: "اسم جمع - پرندوں کا گروہ"
        },
        advanced: {
          rootFamily: ["طَارَ (to fly)", "طَيَرَان (flying)", "طَائِر (bird singular)", "مَطَار (airport)"],
          frequency: 19
        }
      },
      {
        position: 4,
        arabic: "أَبَابِيلَ",
        transliteration: "abaabeel",
        root: "ب ب ل",
        lemma: "أَبَابِيل",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "in flocks / successive groups",
          ur: "جھنڈ کے جھنڈ",
          hi: "झुंड के झुंड",
          bn: "ঝাঁকে ঝাঁকে",
          tr: "sürü sürü",
          id: "berbondong-bondong",
          ar: "جماعات متتابعة"
        },
        grammarRole: "adjective/descriptor of طَيْر",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "plural",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "أَبَابِيل - groups following one after another, wave after wave",
          ur: "ایک کے بعد ایک گروہ"
        },
        advanced: {
          frequency: 1,
          linguisticMiracle: "Unique word in Quran - emphasizes the overwhelming, continuous waves of birds",
          etymology: "Some say from إِبِل (camels following each other), others say Abyssinian origin",
          memoryHook: "أَبَابِيل = groups BOBBING one after another"
        }
      }
    ],
    dependencyStructure: "(وَأَرْسَلَ)[verb] → (عَلَيْهِمْ)[prep-phrase] → (طَيْرًا)[object] → (أَبَابِيلَ)[adjective]",
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + مفعول به' },
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ",
    translation: {
      en: "Striking them with stones of hard clay",
      ur: "جو ان پر کنکر کی پتھریاں مار رہے تھے",
      hi: "जो उन पर कंकड़ की पत्थरियां मार रहे थे",
      bn: "যারা তাদের উপর পাথরের কাঁকর নিক্ষেপ করছিল",
      tr: "Onlara pişmiş çamurdan taşlar atıyorlardı",
      id: "Yang melempari mereka dengan batu dari tanah yang keras"
    },
    words: [
      {
        position: 1,
        arabic: "تَرْمِيهِم",
        transliteration: "tarmeehim",
        root: "ر م ي",
        lemma: "رَمَى",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "striking them / pelting them",
          ur: "ان پر مار رہے تھے",
          hi: "उन पर मार रहे थे",
          bn: "তাদের নিক্ষেপ করছিল",
          tr: "atıyorlardı",
          id: "melempari mereka",
          ar: "ترميهم وتقذفهم"
        },
        grammarRole: "descriptive clause (حال)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "feminine",
          number: "singular",
          voice: "active",
          form: "I",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "Feminine singular agrees with طَيْر (collective) - describes the birds' action",
          ur: "مؤنث واحد - طَيْر کا صفت"
        },
        advanced: {
          rootFamily: ["رَمْي (throwing)", "رَامٍ (thrower)", "مَرْمِيّ (thrown)", "مِرْمَاة (target)"],
          frequency: 13
        }
      },
      {
        position: 2,
        arabic: "بِحِجَارَةٍ",
        transliteration: "bi-hijaaratin",
        root: "ح ج ر",
        lemma: "حِجَارَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "with stones",
          ur: "پتھروں سے",
          hi: "पत्थरों से",
          bn: "পাথর দিয়ে",
          tr: "taşlarla",
          id: "dengan batu",
          ar: "بحجارة"
        },
        grammarRole: "prepositional phrase (instrument)",
        case: "genitive",
        features: {
          gender: "feminine",
          number: "plural",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["حَجَر (stone)", "حِجَارَة (stones)", "حَجَرِيّ (rocky)"],
          frequency: 11
        }
      },
      {
        position: 3,
        arabic: "مِّن",
        transliteration: "min",
        root: "N/A",
        lemma: "مِن",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "of / from",
          ur: "سے",
          hi: "से",
          bn: "থেকে",
          tr: "-dan",
          id: "dari",
          ar: "من"
        },
        grammarRole: "preposition (specifying type)",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "سِجِّيلٍ",
        transliteration: "sijjeel",
        root: "س ج ل",
        lemma: "سِجِّيل",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "hard clay / baked clay",
          ur: "پکی ہوئی مٹی",
          hi: "पकी हुई मिट्टी",
          bn: "পোড়ামাটি",
          tr: "pişmiş çamur",
          id: "tanah yang keras",
          ar: "طين متحجر"
        },
        grammarRole: "genitive (describing حِجَارَة)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "سِجِّيل - hardened/baked clay, possibly from Persian سنگ (stone) + گل (clay)",
          ur: "پکی ہوئی سخت مٹی"
        },
        advanced: {
          frequency: 3,
          quranicUsage: "Also in 11:82 and 15:74 for punishment of Lut's people",
          etymology: "Possibly Persian origin (سنگ گل = stone-clay)",
          linguisticMiracle: "These weren't ordinary stones - divinely prepared projectiles"
        }
      }
    ],
    dependencyStructure: "(تَرْمِيهِم)[verb-clause] → (بِحِجَارَةٍ)[prep-phrase] → (مِّن سِجِّيلٍ)[specifier]",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
    translation: {
      en: "And He made them like eaten straw",
      ur: "پھر انہیں کھایا ہوا بھوسا بنا دیا",
      hi: "फिर उन्हें खाए हुए भूसे जैसा बना दिया",
      bn: "অতঃপর তিনি তাদের ভুষিতে পরিণত করলেন",
      tr: "Sonra onları yenmiş ekin yaprağı gibi yaptı",
      id: "Lalu Dia menjadikan mereka seperti daun-daun yang dimakan ulat"
    },
    words: [
      {
        position: 1,
        arabic: "فَجَعَلَهُمْ",
        transliteration: "faja'alahum",
        root: "ج ع ل",
        lemma: "جَعَلَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "And He made them",
          ur: "پھر انہیں بنا دیا",
          hi: "फिर उन्हें बना दिया",
          bn: "অতঃপর তাদের বানালেন",
          tr: "Sonra onları kıldı",
          id: "Lalu Dia menjadikan mereka",
          ar: "فصيّرهم"
        },
        grammarRole: "result clause (consequence)",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "I"
        },
        grammarExplanations: {
          en: "فَ shows result - as a consequence of the birds' attack",
          ur: "فَ نتیجہ کے لیے - پرندوں کے حملے کا نتیجہ"
        }
      },
      {
        position: 2,
        arabic: "كَعَصْفٍ",
        transliteration: "ka-'asfin",
        root: "ع ص ف",
        lemma: "عَصْف",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "like straw / chaff",
          ur: "بھوسے کی طرح",
          hi: "भूसे की तरह",
          bn: "ভুষির মতো",
          tr: "ekin yaprağı gibi",
          id: "seperti daun",
          ar: "كورق الزرع"
        },
        grammarRole: "comparison (second object of جَعَلَ)",
        case: "genitive (after كَ)",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        grammarExplanations: {
          en: "عَصْف - the dried leaves/husks of grain, chaff, worthless remnants",
          ur: "غلے کا بھوسا، خشک پتے"
        },
        advanced: {
          rootFamily: ["عَصَفَ (wind blew)", "عَاصِف (stormy)", "عَاصِفَة (storm)"],
          frequency: 2,
          imagery: "Hollow, light, easily scattered - complete destruction"
        }
      },
      {
        position: 3,
        arabic: "مَّأْكُولٍ",
        transliteration: "ma'kool",
        root: "أ ك ل",
        lemma: "مَأْكُول",
        posTag: "ADJ", posLabel: "ADJ",
        meaning: {
          en: "eaten / devoured",
          ur: "کھایا ہوا",
          hi: "खाया हुआ",
          bn: "খাওয়া",
          tr: "yenmiş",
          id: "yang dimakan",
          ar: "أكلته الدواب"
        },
        grammarRole: "adjective (describing عَصْف)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite",
          participle: "passive"
        },
        grammarExplanations: {
          en: "Passive participle - straw that has been eaten (by worms/animals), full of holes",
          ur: "اسم مفعول - کھایا ہوا، کیڑوں نے کھا لیا"
        },
        advanced: {
          rootFamily: ["أَكَلَ (to eat)", "أَكْل (eating)", "آكِل (eater)", "مَأْكُول (eaten)"],
          frequency: 4,
          imagery: "Straw already eaten by insects - hollow, perforated, utterly destroyed",
          balagha: "Double destruction imagery: scattered like chaff AND full of holes like eaten straw"
        }
      }
    ],
    dependencyStructure: "(فَجَعَلَهُمْ)[result-verb] → (كَعَصْفٍ)[comparison] → (مَّأْكُولٍ)[adjective]",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  }
};

export default TREEBANK_DATA;
