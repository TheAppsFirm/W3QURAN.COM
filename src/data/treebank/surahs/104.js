/**
 * Surah Al-Humazah (104) - The Slanderer
 * Complete Quranic Arabic Treebank
 * 9 Ayahs - Makki
 * Theme: Condemnation of backbiting, slander, and wealth obsession
 */

export const TREEBANK_DATA = {
  surahId: 104,
  surahName: "Al-Humazah",
  surahNameArabic: "الهمزة",
  totalAyahs: 9,
  totalWords: 33,
  theme: "Warning against slander and materialism",

  translation: {
    en: "Woe to every scorner and mocker, Who collects wealth and [continuously] counts it, He thinks that his wealth will make him immortal. No! He will surely be thrown into the Crusher. And what can make you know what is the Crusher? It is the fire of Allah, [eternally] fueled, Which mounts directed at the hearts. Indeed, it will be closed down upon them, In extended columns.",
    ur: "ہلاکت ہے ہر طعنہ زن اور عیب جو کے لیے۔ جو مال جمع کرتا ہے اور اسے گنتا رہتا ہے۔ وہ سمجھتا ہے کہ اس کا مال اسے ہمیشہ زندہ رکھے گا۔ ہرگز نہیں! وہ ضرور کچلنے والی آگ میں پھینکا جائے گا۔ اور تم کیا جانو کہ کچلنے والی کیا ہے؟ یہ اللہ کی بھڑکائی ہوئی آگ ہے۔ جو دلوں تک پہنچ جائے گی۔ بےشک یہ ان پر بند کر دی جائے گی۔ لمبے ستونوں میں۔",
    hi: "विनाश है हर ताना मारने और बुराई करने वाले के लिए। जो माल जोड़ता है और उसे गिनता रहता है। वह समझता है कि उसका माल उसे हमेशा जिलाए रखेगा। हरगिज़ नहीं! वह ज़रूर कुचलने वाली आग में फेंका जाएगा। और तुम क्या जानो कि कुचलने वाली क्या है? यह अल्लाह की भड़काई हुई आग है। जो दिलों तक पहुंच जाएगी। बेशक यह उन पर बंद कर दी जाएगी। लंबे स्तंभों में।",
    bn: "ধ্বংস প্রত্যেক পরনিন্দাকারী ও দোষদর্শীর জন্য। যে সম্পদ জমা করে এবং গুনতে থাকে। সে মনে করে তার সম্পদ তাকে চিরস্থায়ী করবে। কখনো না! তাকে অবশ্যই চূর্ণকারী আগুনে নিক্ষেপ করা হবে। তুমি কি জানো চূর্ণকারী কী? এটা আল্লাহর প্রজ্বলিত আগুন। যা হৃদয় পর্যন্ত পৌঁছাবে। নিশ্চয় এটা তাদের উপর বন্ধ করা হবে। দীর্ঘায়িত স্তম্ভসমূহে।",
    tr: "Her ayıplayıcı, kusur arayıcıya yazıklar olsun. Ki o, mal toplar ve onu sayıp durur. Sanır ki malı onu ebedi kılacak. Hayır! O, kesinlikle Hutame'ye atılacaktır. Hutame'nin ne olduğunu sen ne bilirsin? O, Allah'ın tutuşturulmuş ateşidir. Ki kalplere işler. Şüphesiz o, onların üzerine kapatılacaktır. Uzatılmış sütunlar halinde.",
    id: "Kecelakaanlah bagi setiap pengumpat lagi pencela. Yang mengumpulkan harta dan menghitung-hitungnya. Dia mengira bahwa hartanya itu dapat mengekalkannya. Sekali-kali tidak! Sesungguhnya dia benar-benar akan dilemparkan ke dalam Hutamah. Dan tahukah kamu apa Hutamah itu? Yaitu api Allah yang dinyalakan. Yang membakar sampai ke hati. Sesungguhnya api itu ditutup rapat atas mereka. Dalam tiang-tiang yang panjang."
  },

  1: {
    ayahNumber: 1,
    arabic: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ",
    translation: {
      en: "Woe to every scorner and mocker",
      ur: "ہلاکت ہے ہر طعنہ زن اور عیب جو کے لیے",
      hi: "विनाश है हर ताना मारने और बुराई करने वाले के लिए",
      bn: "ধ্বংস প্রত্যেক পরনিন্দাকারী ও দোষদর্শীর জন্য",
      tr: "Her ayıplayıcı, kusur arayıcıya yazıklar olsun",
      id: "Kecelakaanlah bagi setiap pengumpat lagi pencela",
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَيْلٌ",
        transliteration: "waylun",
        root: "و ي ل",
        lemma: "وَيْل",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "Woe / Destruction",
          ur: "ہلاکت",
          hi: "विनाश",
          bn: "ধ্বংস",
          tr: "Yazıklar olsun",
          id: "Kecelakaan",
          ar: "هلاك وعذاب"
        },
        grammarRole: "subject (exclamation)",
        case: "nominative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["وَيْلَة (calamity)", "وَيْلَات (woes)"],
          frequency: 40,
          quranicNote: "Valley in Hell, or severe punishment",
          memoryHook: "وَيْل sounds like 'wail' - crying in punishment"
        }
      },
      {
        position: 2,
        arabic: "لِّكُلِّ",
        transliteration: "li-kulli",
        root: "ك ل ل",
        lemma: "كُلّ",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "to every",
          ur: "ہر ایک کے لیے",
          hi: "हर एक के लिए",
          bn: "প্রত্যেকের জন্য",
          tr: "her ... için",
          id: "bagi setiap",
          ar: "لكل واحد"
        },
        grammarRole: "prepositional phrase",
        case: "genitive",
        features: {
          definiteness: "indefinite"
        }
      },
      {
        position: 3,
        arabic: "هُمَزَةٍ",
        transliteration: "humazatin",
        root: "ه م ز",
        lemma: "هُمَزَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "scorner / fault-finder / backbiter",
          ur: "طعنہ زن / عیب جو",
          hi: "ताना मारने वाला",
          bn: "পরনিন্দাকারী",
          tr: "ayıplayıcı",
          id: "pengumpat",
          ar: "الطاعن في أعراض الناس"
        },
        grammarRole: "genitive (object of لِ)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite",
          pattern: "فُعَلَة (intensive)"
        },
        grammarExplanations: {
          en: "Pattern فُعَلَة indicates one who does this habitually/excessively",
          ur: "صیغہ مبالغہ - جو عادتاً ایسا کرے"
        },
        advanced: {
          rootFamily: ["هَمَزَ (to poke/prod)", "هَمْز (poking)", "هَمَّاز (constant backbiter)"],
          frequency: 1,
          semanticNote: "هُمَزَة - one who mocks with gestures, facial expressions, behind backs",
          memoryHook: "هُمَزَة = attacks with HAND gestures and indirect hints"
        }
      },
      {
        position: 4,
        arabic: "لُّمَزَةٍ",
        transliteration: "lumazatin",
        root: "ل م ز",
        lemma: "لُمَزَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "mocker / slanderer / fault-finder",
          ur: "برائی کرنے والا",
          hi: "बुराई करने वाला",
          bn: "দোষদর্শী",
          tr: "kusur arayıcı",
          id: "pencela",
          ar: "الذي يعيب الناس في وجوههم"
        },
        grammarRole: "genitive (apposition/additional description)",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite",
          pattern: "فُعَلَة (intensive)"
        },
        grammarExplanations: {
          en: "Same intensive pattern - habitual mocker",
          ur: "صیغہ مبالغہ - عادتاً برائی کرنے والا"
        },
        advanced: {
          rootFamily: ["لَمَزَ (to slander)", "لَمْز (slander)", "لَمَّاز (constant slanderer)"],
          frequency: 1,
          semanticNote: "لُمَزَة - one who mocks with words, directly to face",
          memoryHook: "لُمَزَة = attacks with LIPS/words directly",
          balagha: "Two words, same pattern: indirect (هُمَزَة) + direct (لُمَزَة) slander = complete condemnation"
        }
      }
    ],
    dependencyStructure: "(وَيْلٌ)[subject-exclamation] → (لِّكُلِّ)[prep] → (هُمَزَةٍ لُّمَزَةٍ)[genitive-description]"
  },

  2: {
    ayahNumber: 2,
    arabic: "ٱلَّذِى جَمَعَ مَالًا وَعَدَّدَهُۥ",
    translation: {
      en: "Who collects wealth and [continuously] counts it",
      ur: "جو مال جمع کرتا ہے اور اسے گنتا رہتا ہے",
      hi: "जो माल जोड़ता है और उसे गिनता रहता है",
      bn: "যে সম্পদ জমা করে এবং গুনতে থাকে",
      tr: "Ki o, mal toplar ve onu sayıp durur",
      id: "Yang mengumpulkan harta dan menghitung-hitungnya"
    },
    words: [
      {
        position: 1,
        arabic: "ٱلَّذِى",
        transliteration: "alladhee",
        root: "ل ذ ي",
        lemma: "ٱلَّذِى",
        posTag: "REL", posLabel: "REL",
        meaning: {
          en: "Who / The one who",
          ur: "جو",
          hi: "जो",
          bn: "যে",
          tr: "ki o",
          id: "yang",
          ar: "الذي"
        },
        grammarRole: "relative pronoun (describing هُمَزَة لُمَزَة)",
        case: "N/A"
      },
      {
        position: 2,
        arabic: "جَمَعَ",
        transliteration: "jama'a",
        root: "ج م ع",
        lemma: "جَمَعَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "collects / gathers",
          ur: "جمع کرتا ہے",
          hi: "जोड़ता है",
          bn: "জমা করে",
          tr: "toplar",
          id: "mengumpulkan",
          ar: "جمع وادّخر"
        },
        grammarRole: "verb (predicate of relative clause)",
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
          rootFamily: ["جَمْع (gathering)", "جَامِع (gatherer)", "جَمِيع (all)", "مَجْمُوع (total)", "جُمْعَة (Friday)"],
          frequency: 67
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
          hi: "धन",
          bn: "সম্পদ",
          tr: "mal",
          id: "harta",
          ar: "المال والثروة"
        },
        grammarRole: "direct object",
        case: "accusative",
        features: {
          gender: "masculine",
          number: "singular",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["مَالَ (to incline)", "مَال (wealth)", "تَمَوُّل (becoming wealthy)"],
          frequency: 86
        }
      },
      {
        position: 4,
        arabic: "وَعَدَّدَهُۥ",
        transliteration: "wa-'addadahu",
        root: "ع د د",
        lemma: "عَدَّدَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "and counts it",
          ur: "اور اسے گنتا ہے",
          hi: "और उसे गिनता है",
          bn: "এবং গণনা করে",
          tr: "ve sayar",
          id: "dan menghitungnya",
          ar: "ويحصيه ويعدّه"
        },
        grammarRole: "conjunction + verb + object pronoun",
        case: "N/A",
        features: {
          aspect: "perfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "active",
          form: "II"
        },
        grammarExplanations: {
          en: "Form II (عَدَّدَ) - intensive; counts repeatedly, obsessively",
          ur: "باب تفعیل - بار بار گننا، جنون کی حد تک"
        },
        advanced: {
          rootFamily: ["عَدَد (number)", "عَدّ (counting)", "تَعْدَاد (enumeration)", "مَعْدُود (counted)"],
          frequency: 1,
          balagha: "Form II shows obsessive counting - not just having wealth, but being consumed by it"
        }
      }
    ],
    dependencyStructure: "(ٱلَّذِى)[relative] → (جَمَعَ)[verb] → (مَالًا)[object] + (وَعَدَّدَهُۥ)[conj+verb+pronoun]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' },
      { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ",
    translation: {
      en: "He thinks that his wealth will make him immortal",
      ur: "وہ سمجھتا ہے کہ اس کا مال اسے ہمیشہ زندہ رکھے گا",
      hi: "वह समझता है कि उसका माल उसे हमेशा जिलाए रखेगा",
      bn: "সে মনে করে তার সম্পদ তাকে চিরস্থায়ী করবে",
      tr: "Sanır ki malı onu ebedi kılacak",
      id: "Dia mengira bahwa hartanya itu dapat mengekalkannya"
    },
    words: [
      {
        position: 1,
        arabic: "يَحْسَبُ",
        transliteration: "yahsabu",
        root: "ح س ب",
        lemma: "حَسِبَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "he thinks / assumes",
          ur: "وہ سمجھتا ہے",
          hi: "वह समझता है",
          bn: "সে মনে করে",
          tr: "sanır",
          id: "dia mengira",
          ar: "يظن ويتوهم"
        },
        grammarRole: "verb (main clause)",
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
        advanced: {
          rootFamily: ["حِسَاب (account)", "حَاسِب (calculator)", "مُحَاسَبَة (accountability)"],
          frequency: 42
        }
      },
      {
        position: 2,
        arabic: "أَنَّ",
        transliteration: "anna",
        root: "N/A",
        lemma: "أَنَّ",
        posTag: "CONJ", posLabel: "CONJ",
        meaning: {
          en: "that",
          ur: "کہ",
          hi: "कि",
          bn: "যে",
          tr: "ki",
          id: "bahwa",
          ar: "أنّ"
        },
        grammarRole: "subordinating conjunction",
        case: "N/A"
      },
      {
        position: 3,
        arabic: "مَالَهُۥٓ",
        transliteration: "maalahu",
        root: "م و ل",
        lemma: "مَال",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "his wealth",
          ur: "اس کا مال",
          hi: "उसका धन",
          bn: "তার সম্পদ",
          tr: "malı",
          id: "hartanya",
          ar: "ماله"
        },
        grammarRole: "subject of أَنَّ clause",
        case: "accusative (subject of أَنَّ)",
        features: {
          gender: "masculine",
          number: "singular",
          possessive: "3rd singular masculine"
        }
      },
      {
        position: 4,
        arabic: "أَخْلَدَهُۥ",
        transliteration: "akhladahu",
        root: "خ ل د",
        lemma: "أَخْلَدَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "will make him immortal",
          ur: "اسے ہمیشہ زندہ رکھے گا",
          hi: "उसे हमेशा जिलाए रखेगा",
          bn: "তাকে চিরস্থায়ী করবে",
          tr: "onu ebedi kılacak",
          id: "mengekalkannya",
          ar: "سيخلده ويبقيه"
        },
        grammarRole: "predicate of أَنَّ clause",
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
          en: "Form IV (أَفْعَلَ) - causative; his wealth will CAUSE him to be eternal",
          ur: "باب افعال - مال ہمیشگی کا سبب بنے گا"
        },
        advanced: {
          rootFamily: ["خَلَدَ (to remain)", "خُلْد (eternity)", "خَالِد (eternal)", "خُلُود (immortality)"],
          frequency: 3,
          irony: "He seeks خُلُود through wealth but will get الحُطَمَة instead",
          memoryHook: "أَخْلَدَ = thinking wealth gives ETERNITY (خُلُود)"
        }
      }
    ],
    dependencyStructure: "(يَحْسَبُ)[main-verb] → (أَنَّ)[subordinator] → (مَالَهُۥٓ)[subject] → (أَخْلَدَهُۥ)[predicate]",
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "كَلَّا ۖ لَيُنۢبَذَنَّ فِى ٱلْحُطَمَةِ",
    translation: {
      en: "No! He will surely be thrown into the Crusher",
      ur: "ہرگز نہیں! وہ ضرور کچلنے والی آگ میں پھینکا جائے گا",
      hi: "हरगिज़ नहीं! वह ज़रूर कुचलने वाली आग में फेंका जाएगा",
      bn: "কখনো না! তাকে অবশ্যই চূর্ণকারী আগুনে নিক্ষেপ করা হবে",
      tr: "Hayır! O, kesinlikle Hutame'ye atılacaktır",
      id: "Sekali-kali tidak! Sesungguhnya dia benar-benar akan dilemparkan ke dalam Hutamah"
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
          id: "Sekali-kali tidak",
          ar: "ردع وزجر"
        },
        grammarRole: "particle of rejection/rebuke",
        case: "N/A",
        grammarExplanations: {
          en: "كَلَّا - emphatic rejection; his assumption is completely wrong",
          ur: "تنبیہ - اس کا خیال بالکل غلط ہے"
        },
        advanced: {
          frequency: 33,
          quranicUsage: "Always used to reject a false notion emphatically"
        }
      },
      {
        position: 2,
        arabic: "لَيُنۢبَذَنَّ",
        transliteration: "la-yunbadhanna",
        root: "ن ب ذ",
        lemma: "نَبَذَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "he will surely be thrown",
          ur: "وہ ضرور پھینکا جائے گا",
          hi: "वह ज़रूर फेंका जाएगा",
          bn: "তাকে অবশ্যই নিক্ষেপ করা হবে",
          tr: "kesinlikle atılacak",
          id: "akan dilemparkan",
          ar: "سيُطرح ويُلقى"
        },
        grammarRole: "verb (emphatic future passive)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "masculine",
          number: "singular",
          voice: "passive",
          form: "I",
          mood: "emphatic (نون التوكيد)"
        },
        grammarExplanations: {
          en: "لَ + نون التوكيد = oath-like emphasis; definitely, certainly will happen",
          ur: "لام تاکید + نون ثقیلہ = یقینی بات"
        },
        advanced: {
          rootFamily: ["نَبَذَ (to throw away)", "نَبْذ (rejection)", "مَنْبُوذ (castaway)"],
          frequency: 7,
          balagha: "Passive voice - thrown like garbage; لَ...نَّ strongest emphasis possible"
        }
      },
      {
        position: 3,
        arabic: "فِى",
        transliteration: "fee",
        root: "N/A",
        lemma: "فِي",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "into",
          ur: "میں",
          hi: "में",
          bn: "মধ্যে",
          tr: "içine",
          id: "ke dalam",
          ar: "في"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "ٱلْحُطَمَةِ",
        transliteration: "al-hutamah",
        root: "ح ط م",
        lemma: "حُطَمَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the Crusher",
          ur: "کچلنے والی آگ",
          hi: "कुचलने वाली आग",
          bn: "চূর্ণকারী",
          tr: "Hutame",
          id: "Hutamah",
          ar: "النار التي تحطم كل شيء"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite",
          pattern: "فُعَلَة"
        },
        grammarExplanations: {
          en: "الحُطَمَة - from حَطَمَ (to crush/shatter); the fire that crushes everything",
          ur: "حَطَمَ سے - ہر چیز کو توڑ دینے والی آگ"
        },
        advanced: {
          rootFamily: ["حَطَمَ (to crush)", "حُطَام (debris)", "تَحْطِيم (destruction)"],
          frequency: 1,
          linguisticMiracle: "Same pattern فُعَلَة as هُمَزَة لُمَزَة - poetic justice: the crusher of reputations meets the Crusher",
          memoryHook: "حُطَمَة = fire that SHATTERS bones like reputation was shattered"
        }
      }
    ],
    dependencyStructure: "(كَلَّا)[rejection] → (لَيُنۢبَذَنَّ)[emphatic-verb] → (فِى ٱلْحُطَمَةِ)[destination]",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ",
    translation: {
      en: "And what can make you know what is the Crusher?",
      ur: "اور تم کیا جانو کہ کچلنے والی کیا ہے؟",
      hi: "और तुम क्या जानो कि कुचलने वाली क्या है?",
      bn: "তুমি কি জানো চূর্ণকারী কী?",
      tr: "Hutame'nin ne olduğunu sen ne bilirsin?",
      id: "Dan tahukah kamu apa Hutamah itu?"
    },
    words: [
      {
        position: 1,
        arabic: "وَمَآ",
        transliteration: "wa-maa",
        root: "N/A",
        lemma: "مَا",
        posTag: "INTG", posLabel: "INTG",
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
        posTag: "V", posLabel: "V",
        meaning: {
          en: "can make you know",
          ur: "تمہیں بتائے",
          hi: "तुम्हें बताए",
          bn: "তোমাকে জানাবে",
          tr: "sana bildirir",
          id: "memberitahukan kepadamu",
          ar: "يُعلمك"
        },
        grammarRole: "verb",
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
          en: "وَمَا أَدْرَاكَ - Quranic formula for something beyond human imagination",
          ur: "قرآنی محاورہ - جو انسانی تصور سے باہر ہو"
        },
        advanced: {
          frequency: 13,
          quranicFormula: "Used 13 times to introduce something of grave importance",
          memoryHook: "ما أَدْراكَ = 'What could make you KNOW?' - unknowable except by revelation"
        }
      },
      {
        position: 3,
        arabic: "مَا",
        transliteration: "maa",
        root: "N/A",
        lemma: "مَا",
        posTag: "INTG", posLabel: "INTG",
        meaning: {
          en: "what",
          ur: "کیا",
          hi: "क्या",
          bn: "কী",
          tr: "ne",
          id: "apa",
          ar: "ما"
        },
        grammarRole: "interrogative (subject)",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "ٱلْحُطَمَةُ",
        transliteration: "al-hutamah",
        root: "ح ط م",
        lemma: "حُطَمَة",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the Crusher",
          ur: "کچلنے والی",
          hi: "कुचलने वाली",
          bn: "চূর্ণকারী",
          tr: "Hutame",
          id: "Hutamah",
          ar: "الحطمة"
        },
        grammarRole: "predicate (subject of nominal sentence)",
        case: "nominative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite"
        }
      }
    ],
    dependencyStructure: "(وَمَآ)[interrogative] → (أَدْرَىٰكَ)[verb] → (مَا ٱلْحُطَمَةُ)[clause]",
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "نَارُ ٱللَّهِ ٱلْمُوقَدَةُ",
    translation: {
      en: "It is the fire of Allah, [eternally] fueled",
      ur: "یہ اللہ کی بھڑکائی ہوئی آگ ہے",
      hi: "यह अल्लाह की भड़काई हुई आग है",
      bn: "এটা আল্লাহর প্রজ্বলিত আগুন",
      tr: "O, Allah'ın tutuşturulmuş ateşidir",
      id: "Yaitu api Allah yang dinyalakan"
    },
    words: [
      {
        position: 1,
        arabic: "نَارُ",
        transliteration: "naaru",
        root: "ن و ر",
        lemma: "نَار",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "Fire",
          ur: "آگ",
          hi: "आग",
          bn: "আগুন",
          tr: "Ateş",
          id: "Api",
          ar: "النار"
        },
        grammarRole: "predicate (answer to مَا)",
        case: "nominative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite (by idafa)"
        }
      },
      {
        position: 2,
        arabic: "ٱللَّهِ",
        transliteration: "Allaahi",
        root: "أ ل ه",
        lemma: "ٱللَّه",
        posTag: "PN", posLabel: "PN",
        meaning: {
          en: "of Allah",
          ur: "اللہ کی",
          hi: "अल्लाह की",
          bn: "আল্লাহর",
          tr: "Allah'ın",
          id: "Allah",
          ar: "الله"
        },
        grammarRole: "possessive (genitive)",
        case: "genitive",
        grammarExplanations: {
          en: "نَارُ ٱللَّه - attributed to Allah to emphasize its severity",
          ur: "اللہ کی طرف نسبت - شدت کی تاکید"
        },
        advanced: {
          balagha: "Fire attributed directly to Allah - indicates incomprehensible intensity"
        }
      },
      {
        position: 3,
        arabic: "ٱلْمُوقَدَةُ",
        transliteration: "al-mooqadah",
        root: "و ق د",
        lemma: "مُوقَد",
        posTag: "ADJ", posLabel: "ADJ",
        meaning: {
          en: "the kindled / eternally fueled",
          ur: "بھڑکائی ہوئی",
          hi: "भड़काई हुई",
          bn: "প্রজ্বলিত",
          tr: "tutuşturulmuş",
          id: "yang dinyalakan",
          ar: "المشتعلة دائماً"
        },
        grammarRole: "adjective (describing نَار)",
        case: "nominative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "definite",
          participle: "passive"
        },
        advanced: {
          rootFamily: ["وَقَدَ (to kindle)", "وَقُود (fuel)", "إِيقَاد (kindling)", "مَوْقِد (fireplace)"],
          frequency: 1,
          balagha: "Passive participle - fire that is constantly kept burning, never extinguished"
        }
      }
    ],
    dependencyStructure: "(نَارُ)[subject] → (ٱللَّهِ)[genitive] → (ٱلْمُوقَدَةُ)[adjective]",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "ٱلَّتِى تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ",
    translation: {
      en: "Which mounts directed at the hearts",
      ur: "جو دلوں تک پہنچ جائے گی",
      hi: "जो दिलों तक पहुंच जाएगी",
      bn: "যা হৃদয় পর্যন্ত পৌঁছাবে",
      tr: "Ki kalplere işler",
      id: "Yang membakar sampai ke hati"
    },
    words: [
      {
        position: 1,
        arabic: "ٱلَّتِى",
        transliteration: "allatee",
        root: "ل ت ي",
        lemma: "ٱلَّتِى",
        posTag: "REL", posLabel: "REL",
        meaning: {
          en: "Which",
          ur: "جو",
          hi: "जो",
          bn: "যা",
          tr: "ki o",
          id: "yang",
          ar: "التي"
        },
        grammarRole: "relative pronoun (feminine, for نَار)",
        case: "N/A",
        features: {
          gender: "feminine",
          number: "singular"
        }
      },
      {
        position: 2,
        arabic: "تَطَّلِعُ",
        transliteration: "tattali'u",
        root: "ط ل ع",
        lemma: "اِطَّلَعَ",
        posTag: "V", posLabel: "V",
        meaning: {
          en: "mounts / reaches / penetrates",
          ur: "پہنچ جائے گی",
          hi: "पहुंच जाएगी",
          bn: "পৌঁছাবে",
          tr: "işler",
          id: "membakar sampai",
          ar: "تصعد وتصل"
        },
        grammarRole: "verb (predicate of relative clause)",
        case: "N/A",
        features: {
          aspect: "imperfect",
          person: "3rd",
          gender: "feminine",
          number: "singular",
          voice: "active",
          form: "VIII",
          mood: "indicative"
        },
        grammarExplanations: {
          en: "Form VIII (اِفْتَعَل) - fire actively seeks, climbs up to the hearts",
          ur: "باب افتعال - آگ خود دلوں تک پہنچتی ہے"
        },
        advanced: {
          rootFamily: ["طَلَعَ (to rise)", "طُلُوع (rising)", "مَطْلَع (rising place)", "اِطَّلَعَ (to ascend to)"],
          frequency: 2,
          balagha: "Fire doesn't just burn skin - it penetrates to the core (heart)"
        }
      },
      {
        position: 3,
        arabic: "عَلَى",
        transliteration: "'alaa",
        root: "ع ل و",
        lemma: "عَلَى",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "upon / to",
          ur: "تک",
          hi: "तक",
          bn: "পর্যন্ত",
          tr: "üzerine",
          id: "sampai",
          ar: "على"
        },
        grammarRole: "preposition",
        case: "N/A"
      },
      {
        position: 4,
        arabic: "ٱلْأَفْـِٔدَةِ",
        transliteration: "al-af'idah",
        root: "ف أ د",
        lemma: "فُؤَاد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "the hearts",
          ur: "دلوں",
          hi: "दिलों",
          bn: "হৃদয়সমূহ",
          tr: "kalpler",
          id: "hati",
          ar: "القلوب"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "plural",
          definiteness: "definite"
        },
        grammarExplanations: {
          en: "أَفْئِدَة - plural of فُؤَاد (heart); the seat of consciousness and feeling",
          ur: "فُؤَاد کی جمع - احساس اور شعور کا مرکز"
        },
        advanced: {
          rootFamily: ["فَأَدَ (to kindle)", "فُؤَاد (heart)", "أَفْئِدَة (hearts)"],
          frequency: 16,
          insight: "Fire reaches where their greed was centered - the heart that loved wealth",
          memoryHook: "الأَفْئِدَة = INNER hearts - fire burns the very core"
        }
      }
    ],
    dependencyStructure: "(ٱلَّتِى)[relative] → (تَطَّلِعُ)[verb] → (عَلَى ٱلْأَفْـِٔدَةِ)[prep-phrase]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ",
    translation: {
      en: "Indeed, it will be closed down upon them",
      ur: "بےشک یہ ان پر بند کر دی جائے گی",
      hi: "बेशक यह उन पर बंद कर दी जाएगी",
      bn: "নিশ্চয় এটা তাদের উপর বন্ধ করা হবে",
      tr: "Şüphesiz o, onların üzerine kapatılacaktır",
      id: "Sesungguhnya api itu ditutup rapat atas mereka"
    },
    words: [
      {
        position: 1,
        arabic: "إِنَّهَا",
        transliteration: "innahaa",
        root: "N/A",
        lemma: "إِنَّ + هَا",
        posTag: "CONJ + PRON", posLabel: "CONJ+PRON",
        meaning: {
          en: "Indeed it",
          ur: "بےشک یہ",
          hi: "बेशक यह",
          bn: "নিশ্চয় এটা",
          tr: "Şüphesiz o",
          id: "Sesungguhnya ia",
          ar: "إنها"
        },
        grammarRole: "emphatic particle + subject pronoun",
        case: "N/A",
        features: {
          person: "3rd",
          gender: "feminine",
          number: "singular"
        }
      },
      {
        position: 2,
        arabic: "عَلَيْهِم",
        transliteration: "'alayhim",
        root: "ع ل و",
        lemma: "عَلَى",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "upon them",
          ur: "ان پر",
          hi: "उन पर",
          bn: "তাদের উপর",
          tr: "onların üzerine",
          id: "atas mereka",
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
        arabic: "مُّؤْصَدَةٌ",
        transliteration: "mu'sadah",
        root: "أ ص د",
        lemma: "مُؤْصَد",
        posTag: "ADJ", posLabel: "ADJ",
        meaning: {
          en: "closed / locked / sealed",
          ur: "بند کی ہوئی",
          hi: "बंद की हुई",
          bn: "বন্ধ",
          tr: "kapatılmış",
          id: "ditutup rapat",
          ar: "مغلقة محكمة"
        },
        grammarRole: "predicate (describing fire)",
        case: "nominative",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "indefinite",
          participle: "passive"
        },
        grammarExplanations: {
          en: "Passive participle - fire closed/locked upon them with no escape",
          ur: "اسم مفعول - کوئی راستہ نہیں"
        },
        advanced: {
          rootFamily: ["أَصَدَ (to close)", "إِيصَاد (closing)", "مُؤْصَد (closed)"],
          frequency: 2,
          balagha: "No escape, no relief, eternal imprisonment in fire",
          quranicParallel: "Also in 90:20 for disbelievers"
        }
      }
    ],
    dependencyStructure: "(إِنَّهَا)[emphatic+subject] → (عَلَيْهِم)[prep-phrase] → (مُّؤْصَدَةٌ)[predicate]",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "فِى عَمَدٍ مُّمَدَّدَةٍ",
    translation: {
      en: "In extended columns",
      ur: "لمبے ستونوں میں",
      hi: "लंबे स्तंभों में",
      bn: "দীর্ঘায়িত স্তম্ভসমূহে",
      tr: "Uzatılmış sütunlar halinde",
      id: "Dalam tiang-tiang yang panjang"
    },
    words: [
      {
        position: 1,
        arabic: "فِى",
        transliteration: "fee",
        root: "N/A",
        lemma: "فِي",
        posTag: "PREP", posLabel: "PREP",
        meaning: {
          en: "In",
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
        position: 2,
        arabic: "عَمَدٍ",
        transliteration: "'amadin",
        root: "ع م د",
        lemma: "عَمَد",
        posTag: "N", posLabel: "N",
        meaning: {
          en: "columns / pillars",
          ur: "ستون",
          hi: "स्तंभ",
          bn: "স্তম্ভ",
          tr: "sütunlar",
          id: "tiang-tiang",
          ar: "أعمدة"
        },
        grammarRole: "object of preposition",
        case: "genitive",
        features: {
          gender: "masculine",
          number: "plural (collective)",
          definiteness: "indefinite"
        },
        advanced: {
          rootFamily: ["عَمُودٌ (pillar)", "عِمَاد (support)", "عَمَد (pillars)"],
          frequency: 2
        }
      },
      {
        position: 3,
        arabic: "مُّمَدَّدَةٍ",
        transliteration: "mumaddadah",
        root: "م د د",
        lemma: "مُمَدَّد",
        posTag: "ADJ", posLabel: "ADJ",
        meaning: {
          en: "extended / stretched / elongated",
          ur: "لمبے",
          hi: "लंबे",
          bn: "দীর্ঘায়িত",
          tr: "uzatılmış",
          id: "panjang",
          ar: "ممتدة طويلة"
        },
        grammarRole: "adjective (describing عَمَد)",
        case: "genitive",
        features: {
          gender: "feminine",
          number: "singular",
          definiteness: "indefinite",
          participle: "passive"
        },
        grammarExplanations: {
          en: "Form II passive participle - pillars stretched/extended outward",
          ur: "باب تفعیل سے اسم مفعول - لمبے کیے ہوئے"
        },
        advanced: {
          rootFamily: ["مَدَّ (to extend)", "مَدّ (extending)", "إِمْدَاد (support)", "مُمَدَّد (extended)"],
          frequency: 1,
          interpretations: [
            "Pillars of fire stretching high",
            "Pillars to which they're tied",
            "Fire extending endlessly"
          ],
          imagery: "Final image of entrapment - sealed fire with towering pillars, no escape in any direction"
        }
      }
    ],
    dependencyStructure: "(فِى)[prep] → (عَمَدٍ)[noun] → (مُّمَدَّدَةٍ)[adjective]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'جار + مجرور' },
      { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  }
};

export default TREEBANK_DATA;
