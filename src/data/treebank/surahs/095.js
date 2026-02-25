/**
 * Surah At-Tin (95) - Quranic Arabic Treebank
 * The Fig
 * Total Ayahs: 8
 * Theme: Human dignity, the best creation, and those who fall lowest
 */

export const TREEBANK_DATA = {
  surahId: 95,
  surahName: "At-Tin",
  surahNameArabic: "التين",
  totalAyahs: 8,
  totalWords: 34,
  revelationType: "Makki",
  theme: "Allah swears by sacred places, affirms human dignity as the best creation, warns of falling to lowest depths",

  // Surah-level translation
  translation: {
    en: "By the fig and the olive. And by Mount Sinai. And by this secure city. We have certainly created man in the best of stature. Then We return him to the lowest of the low. Except for those who believe and do righteous deeds - for them is a reward uninterrupted. So what yet causes you to deny the Recompense? Is not Allah the most just of judges?",
    ur: "قسم ہے انجیر کی اور زیتون کی۔ اور طور سینین کی۔ اور اس امن والے شہر کی۔ بے شک ہم نے انسان کو بہترین ساخت میں پیدا کیا۔ پھر ہم نے اسے پست ترین میں لوٹا دیا۔ سوائے ان لوگوں کے جو ایمان لائے اور نیک عمل کیے، ان کے لیے بے انتہا اجر ہے۔ پھر کیا چیز تجھے جزا کو جھٹلانے پر آمادہ کرتی ہے؟ کیا اللہ سب سے بہتر فیصلہ کرنے والا نہیں؟",
    hi: "अंजीर और जैतून की कसम। और तूर सीनीन की कसम। और इस अमन वाले शहर की कसम। बेशक हमने इंसान को सबसे अच्छी बनावट में पैदा किया। फिर हमने उसे पस्त तरीन में लौटा दिया। सिवाय उन लोगों के जो ईमान लाए और नेक काम किए, उनके लिए बेहद अज्र है। फिर क्या चीज़ तुझे जज़ा को झुठलाने पर उकसाती है? क्या अल्लाह सबसे बेहतर फ़ैसला करने वाला नहीं?",
    bn: "শপথ ডুমুর ও জলপাইয়ের। এবং তুর সিনাইয়ের। এবং এই নিরাপদ শহরের। নিশ্চয়ই আমি মানুষকে সৃষ্টি করেছি সর্বোত্তম গঠনে। তারপর আমি তাকে ফিরিয়ে দিই নিম্নতমের নিম্নে। তবে যারা ঈমান এনেছে এবং সৎকর্ম করেছে তাদের জন্য রয়েছে অবিচ্ছিন্ন পুরস্কার। তাহলে কিসে তোমাকে প্রতিদানকে মিথ্যা বলতে প্ররোচিত করে? আল্লাহ কি সর্বশ্রেষ্ঠ বিচারক নন?",
    tr: "İncir ve zeytine andolsun. Sînâ Dağı'na andolsun. Ve bu güvenli şehre andolsun. Biz insanı en güzel biçimde yarattık. Sonra onu aşağıların aşağısına çevirdik. Ancak iman edip salih amel işleyenler müstesna. Onlar için kesintisiz bir mükâfat vardır. Artık sana dini ne yalanlatıyor? Allah hâkimlerin en adaletlisi değil mi?",
    id: "Demi (buah) tin dan (buah) zaitun. Dan demi Gunung Sinai. Dan demi negeri yang aman ini. Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya. Kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya. Kecuali orang-orang yang beriman dan mengerjakan amal saleh; maka bagi mereka pahala yang tiada putus-putusnya. Maka apakah yang menyebabkan kamu mendustakan hari pembalasan? Bukankah Allah Hakim yang seadil-adilnya?"
  },

  1: {
    ayahNumber: 1,
    arabic: "وَٱلتِّينِ وَٱلزَّيْتُونِ",
    translation: {
      en: "By the fig and the olive",
      ur: "قسم ہے انجیر کی اور زیتون کی",
      hi: "अंजीर और जैतून की कसम",
      bn: "শপথ ডুমুর ও জলপাইয়ের",
      tr: "İncir ve zeytine andolsun",
      id: "Demi (buah) tin dan (buah) zaitun",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "وَٱلتِّينِ",
        transliteration: "wat-teeni",
        root: "ت ي ن",
        lemma: "تِين",
        posTag: "CONJ + N",
        posLabel: "CONJ + N",
        meaning: {
          en: "By the fig",
          ur: "قسم ہے انجیر کی",
          hi: "अंजीर की कसम",
          bn: "ডুমুরের শপথ",
          tr: "İncire andolsun",
          id: "Demi buah tin",
          ar: "أقسم بالتين"
        },
        grammarRole: "Oath particle + genitive noun (object of oath)",
        grammarExplanations: {
          en: "The 'wa' here is for oath (qasam), not conjunction. The fig represents blessed lands or beneficial fruit.",
          ur: "یہاں 'و' قسم کے لیے ہے۔ انجیر مبارک سرزمینوں یا فائدہ مند پھل کی نمائندگی کرتی ہے۔"
        },
        advanced: {
          rootFamily: ["تِين (fig)", "تَيَّنَ (to show)"],
          frequency: "Once in Quran",
          morphology: "Genitive case due to oath preposition",
          balagha: "Oath by natural objects emphasizes their significance",
          tajweedTips: "Ghunnah on noon of التين",
          memoryHook: "Fig = Palestine/blessed land"
        }
      },
      {
        position: 2,
        arabic: "وَٱلزَّيْتُونِ",
        transliteration: "waz-zaytooni",
        root: "ز ي ت",
        lemma: "زَيْتُون",
        posTag: "CONJ + N",
        posLabel: "CONJ + N",
        meaning: {
          en: "and the olive",
          ur: "اور زیتون کی",
          hi: "और जैतून की",
          bn: "ও জলপাইয়ের",
          tr: "ve zeytine",
          id: "dan buah zaitun",
          ar: "والزيتون"
        },
        grammarRole: "Conjunction + genitive noun (second object of oath)",
        grammarExplanations: {
          en: "Olive tree is blessed (mentioned in Surah An-Nur 24:35). Some say fig = Damascus, olive = Jerusalem.",
          ur: "زیتون کا درخت مبارک ہے (سورہ النور میں مذکور)۔ کہا جاتا ہے انجیر = دمشق، زیتون = یروشلم۔"
        },
        advanced: {
          rootFamily: ["زَيْت (oil)", "زَيْتُون (olive tree)", "زَيْتُونَة (olive tree)"],
          frequency: "6 times in Quran",
          morphology: "Collective noun in genitive",
          balagha: "Paired with fig for comprehensive blessing",
          memoryHook: "Olive = blessed tree, oil of light (Nur 24:35)"
        }
      }
    ],
    dependencyStructure: "(وَ)[oath] → (التِّينِ)[object1] + (وَ)[conj] → (الزَّيْتُونِ)[object2]"
  },

  2: {
    ayahNumber: 2,
    arabic: "وَطُورِ سِينِينَ",
    translation: {
      en: "And by Mount Sinai",
      ur: "اور طور سینین کی قسم",
      hi: "और तूर सीनीन की कसम",
      bn: "এবং তুর সিনাইয়ের",
      tr: "Sînâ Dağı'na andolsun",
      id: "Dan demi Gunung Sinai"
    },
    words: [
      {
        position: 1,
        arabic: "وَطُورِ",
        transliteration: "wa-toori",
        root: "ط و ر",
        lemma: "طُور",
        posTag: "CONJ + N",
        posLabel: "CONJ + N",
        meaning: {
          en: "And by Mount",
          ur: "اور پہاڑ کی قسم",
          hi: "और पहाड़ की",
          bn: "এবং পাহাড়ের",
          tr: "Ve dağa",
          id: "Dan demi Gunung",
          ar: "والطور"
        },
        grammarRole: "Oath + genitive noun (mountain)",
        grammarExplanations: {
          en: "Tur refers specifically to Mount Sinai where Musa received revelation.",
          ur: "طور سے مراد خاص طور پر کوہ سینا ہے جہاں موسیٰ علیہ السلام کو وحی ملی۔"
        },
        advanced: {
          rootFamily: ["طُور (mountain)", "أَطْوَار (stages/phases)"],
          frequency: "10 times in Quran",
          morphology: "Proper noun in genitive (mudaf)",
          balagha: "Sacred mountain = revelation site",
          memoryHook: "Tur = where Musa spoke with Allah"
        }
      },
      {
        position: 2,
        arabic: "سِينِينَ",
        transliteration: "seeneena",
        root: "س ي ن",
        lemma: "سِينِين",
        posTag: "PN",
        posLabel: "PN",
        meaning: {
          en: "Sinai",
          ur: "سینا",
          hi: "सीनाई",
          bn: "সিনাই",
          tr: "Sînâ",
          id: "Sinai",
          ar: "سيناء"
        },
        grammarRole: "Proper noun (mudaf ilayhi), genitive",
        grammarExplanations: {
          en: "Sineen/Sinai - blessed and beautiful. Some say it means 'blessed' in Syriac.",
          ur: "سینین/سینا - مبارک اور خوبصورت۔ کہا جاتا ہے کہ سریانی زبان میں اس کا مطلب 'مبارک' ہے۔"
        },
        advanced: {
          rootFamily: ["سِينَاء (Sinai)"],
          frequency: "Twice in Quran (here and 23:20)",
          morphology: "Foreign proper noun arabized",
          balagha: "Links to Mosaic revelation",
          memoryHook: "Sinai = where Torah was given"
        }
      }
    ],
    dependencyStructure: "(وَ)[oath] → (طُورِ)[noun] ← (سِينِينَ)[proper noun/mudaf ilayhi]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَهَٰذَا ٱلْبَلَدِ ٱلْأَمِينِ",
    translation: {
      en: "And by this secure city",
      ur: "اور اس امن والے شہر کی قسم",
      hi: "और इस अमन वाले शहर की",
      bn: "এবং এই নিরাপদ শহরের",
      tr: "Ve bu güvenli şehre andolsun",
      id: "Dan demi negeri yang aman ini"
    },
    words: [
      {
        position: 1,
        arabic: "وَهَٰذَا",
        transliteration: "wa-haadha",
        root: "N/A",
        lemma: "هٰذَا",
        posTag: "CONJ + DEM",
        posLabel: "CONJ + DEM",
        meaning: {
          en: "And this",
          ur: "اور یہ",
          hi: "और यह",
          bn: "এবং এই",
          tr: "Ve bu",
          id: "Dan ini",
          ar: "وهذا"
        },
        grammarRole: "Conjunction + demonstrative pronoun",
        grammarExplanations: {
          en: "Demonstrative 'this' indicates Makkah, where the Prophet was when this was revealed.",
          ur: "اشاری ضمیر 'ہٰذَا' مکہ کی طرف اشارہ کرتا ہے جہاں نبی ﷺ تھے جب یہ نازل ہوئی۔"
        },
        advanced: {
          morphology: "Near demonstrative",
          balagha: "Proximity emphasizes immediate relevance"
        }
      },
      {
        position: 2,
        arabic: "ٱلْبَلَدِ",
        transliteration: "al-baladi",
        root: "ب ل د",
        lemma: "بَلَد",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the city",
          ur: "شہر",
          hi: "शहर",
          bn: "শহর",
          tr: "şehir",
          id: "negeri",
          ar: "البلد"
        },
        grammarRole: "Genitive noun (badal from demonstrative)",
        grammarExplanations: {
          en: "Al-Balad here refers specifically to Makkah, the sacred city.",
          ur: "البلد یہاں خاص طور پر مکہ مکرمہ کی طرف اشارہ کرتا ہے۔"
        },
        advanced: {
          rootFamily: ["بَلَد (city/land)", "بِلَاد (countries)", "بَلْدَة (town)"],
          frequency: "19 times in Quran",
          morphology: "Genitive singular with definite article",
          balagha: "Definite article for known entity (Makkah)",
          memoryHook: "Al-Balad = Makkah (also Surah 90)"
        }
      },
      {
        position: 3,
        arabic: "ٱلْأَمِينِ",
        transliteration: "al-ameeni",
        root: "أ م ن",
        lemma: "أَمِين",
        posTag: "ADJ",
        posLabel: "ADJ",
        meaning: {
          en: "the secure/trustworthy",
          ur: "امن والے",
          hi: "अमन वाले",
          bn: "নিরাপদ",
          tr: "güvenli",
          id: "yang aman",
          ar: "الأمين"
        },
        grammarRole: "Adjective (sifa) describing al-balad",
        grammarExplanations: {
          en: "Ameen means secure/safe. Makkah is a sanctuary where even fighting is prohibited.",
          ur: "امین کا مطلب محفوظ/امن والا۔ مکہ حرم ہے جہاں لڑائی بھی حرام ہے۔"
        },
        advanced: {
          rootFamily: ["أَمْن (security)", "أَمَان (safety)", "مُؤْمِن (believer)", "إِيمَان (faith)"],
          frequency: "Root appears 879 times",
          morphology: "Active participle pattern fa'eel (فَعِيل)",
          balagha: "Same root as iman - security and faith interlinked",
          memoryHook: "Ameen = trustworthy (Prophet's title) + secure (Makkah's status)"
        }
      }
    ],
    dependencyStructure: "(وَ)[oath] → (هٰذَا)[dem] ← (البَلَدِ)[noun] ← (الأَمِينِ)[adj]",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصوف + صفت' },
      { from: 1, to: 2, label: 'بدل' }
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ",
    translation: {
      en: "We have certainly created man in the best of stature",
      ur: "بے شک ہم نے انسان کو بہترین ساخت میں پیدا کیا",
      hi: "बेशक हमने इंसान को सबसे अच्छी बनावट में पैदा किया",
      bn: "নিশ্চয়ই আমি মানুষকে সৃষ্টি করেছি সর্বোত্তম গঠনে",
      tr: "Biz insanı en güzel biçimde yarattık",
      id: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya"
    },
    words: [
      {
        position: 1,
        arabic: "لَقَدْ",
        transliteration: "laqad",
        root: "N/A",
        lemma: "لَقَدْ",
        posTag: "EMPH + CERT",
        posLabel: "EMPH + CERT",
        meaning: {
          en: "Certainly/Indeed",
          ur: "بے شک",
          hi: "बेशक",
          bn: "নিশ্চয়ই",
          tr: "Gerçekten",
          id: "Sungguh",
          ar: "لقد"
        },
        grammarRole: "Emphatic particle + particle of certainty",
        grammarExplanations: {
          en: "Lam of qasam + qad = strong emphasis. This is the answer to the oaths (jawab al-qasam).",
          ur: "لام قسم + قد = شدید تاکید۔ یہ قسموں کا جواب ہے۔"
        },
        advanced: {
          morphology: "Compound particle",
          balagha: "Triple emphasis: oath + lam + qad",
          memoryHook: "Laqad = 'I swear that indeed...'"
        }
      },
      {
        position: 2,
        arabic: "خَلَقْنَا",
        transliteration: "khalaqnaa",
        root: "خ ل ق",
        lemma: "خَلَقَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "We created",
          ur: "ہم نے پیدا کیا",
          hi: "हमने पैदा किया",
          bn: "আমি সৃষ্টি করেছি",
          tr: "yarattık",
          id: "Kami telah menciptakan",
          ar: "خلقنا"
        },
        grammarRole: "Verb (past) + 1st person plural (royal 'We')",
        grammarExplanations: {
          en: "Form I verb with 'na' suffix indicating divine speech.",
          ur: "باب اول کا فعل 'نا' کے ساتھ جو الہی کلام کی طرف اشارہ کرتا ہے۔"
        },
        advanced: {
          rootFamily: ["خَلْق (creation)", "خَالِق (Creator)", "مَخْلُوق (creature)", "خُلُق (character)"],
          frequency: "Root appears 261 times",
          verbForm: "Form I (فَعَلَ)",
          morphology: "Perfect verb, 1st person plural",
          balagha: "Royal We emphasizes divine power",
          memoryHook: "Khalaqa = to create from nothing"
        }
      },
      {
        position: 3,
        arabic: "ٱلْإِنسَٰنَ",
        transliteration: "al-insaana",
        root: "أ ن س",
        lemma: "إِنْسَان",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the human/mankind",
          ur: "انسان کو",
          hi: "इंसान को",
          bn: "মানুষকে",
          tr: "insanı",
          id: "manusia",
          ar: "الإنسان"
        },
        grammarRole: "Direct object (maf'ul bih), accusative",
        grammarExplanations: {
          en: "Al-Insan with definite article means humankind in general, all humans.",
          ur: "الانسان الف لام کے ساتھ عام طور پر نوع انسانی کی طرف اشارہ کرتا ہے۔"
        },
        advanced: {
          rootFamily: ["إِنْس (humans)", "أُنْس (companionship)", "نِسْيَان (forgetfulness)"],
          frequency: "65 times in Quran",
          morphology: "Accusative with definite article",
          balagha: "Generic reference to all humanity",
          memoryHook: "Insan from uns (companionship) or nisyan (forgetfulness)"
        }
      },
      {
        position: 4,
        arabic: "فِىٓ",
        transliteration: "fee",
        root: "N/A",
        lemma: "فِي",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "in",
          ur: "میں",
          hi: "में",
          bn: "মধ্যে",
          tr: "içinde",
          id: "dalam",
          ar: "في"
        },
        grammarRole: "Preposition",
        grammarExplanations: {
          en: "Indicates the state/form in which humans were created.",
          ur: "اس حالت/شکل کی طرف اشارہ کرتا ہے جس میں انسان پیدا کیا گیا۔"
        }
      },
      {
        position: 5,
        arabic: "أَحْسَنِ",
        transliteration: "ahsani",
        root: "ح س ن",
        lemma: "أَحْسَن",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the best",
          ur: "بہترین",
          hi: "सबसे अच्छी",
          bn: "সর্বোত্তম",
          tr: "en güzel",
          id: "sebaik-baiknya",
          ar: "أحسن"
        },
        grammarRole: "Elative (superlative), genitive (mudaf)",
        grammarExplanations: {
          en: "Ahsan is elative form of hasan (good). Indicates the highest possible form.",
          ur: "احسن حَسَن کی صیغہ تفضیل ہے۔ ممکنہ بہترین شکل کی طرف اشارہ کرتا ہے۔"
        },
        advanced: {
          rootFamily: ["حُسْن (beauty)", "حَسَن (good)", "إِحْسَان (excellence)", "مُحْسِن (doer of good)"],
          frequency: "Root appears 194 times",
          morphology: "Elative pattern أَفْعَل",
          balagha: "Absolute superlative - nothing better exists",
          memoryHook: "Ahsan = best (ihsan = doing the best)"
        }
      },
      {
        position: 6,
        arabic: "تَقْوِيمٍ",
        transliteration: "taqweem",
        root: "ق و م",
        lemma: "تَقْوِيم",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "stature/form/constitution",
          ur: "ساخت/بناوٹ",
          hi: "बनावट",
          bn: "গঠন",
          tr: "biçim",
          id: "bentuk",
          ar: "تقويم"
        },
        grammarRole: "Genitive noun (mudaf ilayhi)",
        grammarExplanations: {
          en: "Taqweem means straightening, proper form, upright stature - physical and spiritual perfection.",
          ur: "تقویم کا مطلب سیدھا کرنا، مناسب شکل، سیدھا قد - جسمانی اور روحانی کمال۔"
        },
        advanced: {
          rootFamily: ["قَامَ (to stand)", "قَوْم (people)", "قِيَام (standing)", "مُسْتَقِيم (straight)"],
          frequency: "Once in Quran (this word)",
          verbForm: "Verbal noun of Form II (تَفْعِيل)",
          morphology: "Indefinite genitive",
          balagha: "Encompasses upright posture, balanced proportions, intellect, soul",
          linguisticMiracle: "Same root as 'straight path' (mustaqeem)",
          memoryHook: "Taqweem = straightened/perfected form (calendar also called taqweem)"
        }
      }
    ],
    dependencyStructure: "(لَقَدْ)[emphasis] → (خَلَقْنَا)[verb] → (الإِنسَانَ)[object] → (فِي)[prep] → (أَحْسَنِ)[noun] ← (تَقْوِيمٍ)[genitive]",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + مفعول به' },
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "ثُمَّ رَدَدْنَٰهُ أَسْفَلَ سَٰفِلِينَ",
    translation: {
      en: "Then We return him to the lowest of the low",
      ur: "پھر ہم نے اسے پست ترین میں لوٹا دیا",
      hi: "फिर हमने उसे पस्त तरीन में लौटा दिया",
      bn: "তারপর আমি তাকে ফিরিয়ে দিই নিম্নতমের নিম্নে",
      tr: "Sonra onu aşağıların aşağısına çevirdik",
      id: "Kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya"
    },
    words: [
      {
        position: 1,
        arabic: "ثُمَّ",
        transliteration: "thumma",
        root: "N/A",
        lemma: "ثُمَّ",
        posTag: "CONJ",
        posLabel: "CONJ",
        meaning: {
          en: "Then",
          ur: "پھر",
          hi: "फिर",
          bn: "তারপর",
          tr: "Sonra",
          id: "Kemudian",
          ar: "ثم"
        },
        grammarRole: "Sequential conjunction with delay/gap",
        grammarExplanations: {
          en: "Thumma indicates sequence with gap - the fall happens over time/choices, not immediately.",
          ur: "ثم ترتیب کے ساتھ وقفے کی طرف اشارہ کرتا ہے - زوال فوری نہیں، وقت/انتخاب سے ہوتا ہے۔"
        },
        advanced: {
          balagha: "Gap between best creation and lowest fall = lifetime of choices",
          memoryHook: "Thumma = then (with gap), fa = then (immediately)"
        }
      },
      {
        position: 2,
        arabic: "رَدَدْنَٰهُ",
        transliteration: "radadnaahu",
        root: "ر د د",
        lemma: "رَدَّ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "We returned him",
          ur: "ہم نے اسے لوٹا دیا",
          hi: "हमने उसे लौटा दिया",
          bn: "আমি তাকে ফিরিয়ে দিই",
          tr: "onu çevirdik",
          id: "Kami kembalikan dia",
          ar: "رددناه"
        },
        grammarRole: "Verb (past) + subject (We) + object (him)",
        grammarExplanations: {
          en: "Radda = to return/reduce. Allah returns those who reject guidance to lowest state.",
          ur: "ردّ = لوٹانا/گھٹانا۔ اللہ ہدایت کو رد کرنے والوں کو پست ترین حالت میں لوٹا دیتا ہے۔"
        },
        advanced: {
          rootFamily: ["رَدّ (returning)", "مَرْدُود (rejected)", "تَرَدُّد (hesitation)"],
          frequency: "Root appears 64 times",
          verbForm: "Form I doubled root (فَعَّلَ becomes فَعَلَ)",
          morphology: "Perfect verb + hu (object pronoun)",
          balagha: "Divine action - consequence of human choice",
          memoryHook: "Radd = return to sender"
        }
      },
      {
        position: 3,
        arabic: "أَسْفَلَ",
        transliteration: "asfala",
        root: "س ف ل",
        lemma: "أَسْفَل",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "lowest",
          ur: "پست ترین",
          hi: "सबसे नीचे",
          bn: "নিম্নতম",
          tr: "aşağıların",
          id: "serendah-rendahnya",
          ar: "أسفل"
        },
        grammarRole: "Elative noun (superlative), accusative",
        grammarExplanations: {
          en: "Asfal is elative of safil (low). Accusative as adverb of place/manner.",
          ur: "اسفل سافل کی صیغہ تفضیل ہے۔ مکان/حال کے طور پر منصوب۔"
        },
        advanced: {
          rootFamily: ["سُفْل (lowness)", "سَفِيل (lowly)", "سَافِل (descending)"],
          frequency: "6 times in Quran",
          morphology: "Elative pattern أَفْعَل",
          balagha: "Contrast with ahsan (best) - extreme to extreme",
          memoryHook: "Asfal = lowest (opposite of a'la/highest)"
        }
      },
      {
        position: 4,
        arabic: "سَٰفِلِينَ",
        transliteration: "saafileen",
        root: "س ف ل",
        lemma: "سَافِل",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "of the low ones",
          ur: "پستوں میں",
          hi: "नीचों में",
          bn: "নিম্নদের",
          tr: "aşağısına",
          id: "yang rendah",
          ar: "سافلين"
        },
        grammarRole: "Genitive plural (mudaf ilayhi)",
        grammarExplanations: {
          en: "Safil is active participle. Safileen = those who are low. Lowest of the low ones.",
          ur: "سافل اسم فاعل ہے۔ سافلین = وہ جو پست ہیں۔ پستوں میں سب سے پست۔"
        },
        advanced: {
          rootFamily: ["From same root as asfal"],
          frequency: "Once in Quran",
          morphology: "Active participle, masculine plural genitive",
          balagha: "Double superlative emphasis - absolutely lowest",
          linguisticMiracle: "Ahsan taqweem vs asfal safileen - perfect symmetrical contrast",
          memoryHook: "From best form to lowest of low = human potential for both extremes"
        }
      }
    ],
    dependencyStructure: "(ثُمَّ)[conj] → (رَدَدْنَاهُ)[verb+obj] → (أَسْفَلَ)[noun] ← (سَافِلِينَ)[genitive]",
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
    translation: {
      en: "Except for those who believe and do righteous deeds - for them is a reward uninterrupted",
      ur: "سوائے ان لوگوں کے جو ایمان لائے اور نیک عمل کیے، ان کے لیے بے انتہا اجر ہے",
      hi: "सिवाय उन लोगों के जो ईमान लाए और नेक काम किए, उनके लिए बेहद अज्र है",
      bn: "তবে যারা ঈমান এনেছে এবং সৎকর্ম করেছে তাদের জন্য রয়েছে অবিচ্ছিন্ন পুরস্কার",
      tr: "Ancak iman edip salih amel işleyenler müstesna. Onlar için kesintisiz bir mükâfat vardır",
      id: "Kecuali orang-orang yang beriman dan mengerjakan amal saleh; maka bagi mereka pahala yang tiada putus-putusnya"
    },
    words: [
      {
        position: 1,
        arabic: "إِلَّا",
        transliteration: "illaa",
        root: "N/A",
        lemma: "إِلَّا",
        posTag: "EXC",
        posLabel: "EXC",
        meaning: {
          en: "Except",
          ur: "سوائے",
          hi: "सिवाय",
          bn: "ব্যতীত",
          tr: "Ancak",
          id: "Kecuali",
          ar: "إلا"
        },
        grammarRole: "Exception particle",
        grammarExplanations: {
          en: "Illa introduces the exception - not everyone falls to lowest depths.",
          ur: "الا استثناء کو متعارف کراتا ہے - ہر کوئی پست ترین میں نہیں گرتا۔"
        },
        advanced: {
          balagha: "Hope after warning - Quranic balance of fear and hope",
          memoryHook: "Illa = except/unless"
        }
      },
      {
        position: 2,
        arabic: "ٱلَّذِينَ",
        transliteration: "alladheena",
        root: "N/A",
        lemma: "الَّذِي",
        posTag: "REL",
        posLabel: "REL",
        meaning: {
          en: "those who",
          ur: "جو لوگ",
          hi: "जो लोग",
          bn: "যারা",
          tr: "Olanlar",
          id: "orang-orang yang",
          ar: "الذين"
        },
        grammarRole: "Relative pronoun (masculine plural)",
        grammarExplanations: {
          en: "Introduces the group who are excepted from falling.",
          ur: "ان لوگوں کو متعارف کراتا ہے جو گرنے سے مستثنیٰ ہیں۔"
        }
      },
      {
        position: 3,
        arabic: "ءَامَنُوا۟",
        transliteration: "aamanoo",
        root: "أ م ن",
        lemma: "آمَنَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "believe",
          ur: "ایمان لائے",
          hi: "ईमान लाए",
          bn: "ঈমান এনেছে",
          tr: "iman edenler",
          id: "beriman",
          ar: "آمنوا"
        },
        grammarRole: "Verb (past), 3rd person masculine plural",
        grammarExplanations: {
          en: "Form IV verb - to have faith, to believe, to feel secure in faith.",
          ur: "باب افعال کا فعل - ایمان لانا، یقین کرنا، ایمان میں مطمئن ہونا۔"
        },
        advanced: {
          rootFamily: ["أَمْن (security)", "إِيمَان (faith)", "مُؤْمِن (believer)", "أَمَانَة (trust)"],
          frequency: "Root appears 879 times",
          verbForm: "Form IV (أَفْعَلَ) - to cause to be secure / to believe",
          morphology: "Perfect verb, 3rd person masculine plural",
          balagha: "Belief provides security from falling",
          memoryHook: "Iman = security in faith"
        }
      },
      {
        position: 4,
        arabic: "وَعَمِلُوا۟",
        transliteration: "wa-'amiloo",
        root: "ع م ل",
        lemma: "عَمِلَ",
        posTag: "CONJ + V",
        posLabel: "CONJ + V",
        meaning: {
          en: "and do/did",
          ur: "اور عمل کیے",
          hi: "और काम किए",
          bn: "এবং কাজ করেছে",
          tr: "ve işleyenler",
          id: "dan mengerjakan",
          ar: "وعملوا"
        },
        grammarRole: "Conjunction + verb (past), 3rd person masculine plural",
        grammarExplanations: {
          en: "Faith paired with action - consistent Quranic formula.",
          ur: "ایمان کے ساتھ عمل - قرآنی ہم آہنگ فارمولا۔"
        },
        advanced: {
          rootFamily: ["عَمَل (deed)", "عَامِل (worker)", "مَعْمَل (factory)"],
          frequency: "Root appears 360 times",
          verbForm: "Form I (فَعِلَ)",
          morphology: "Perfect verb, 3rd person masculine plural",
          balagha: "Belief without action insufficient",
          memoryHook: "Iman + 'amal = complete formula"
        }
      },
      {
        position: 5,
        arabic: "ٱلصَّٰلِحَٰتِ",
        transliteration: "as-saalihaati",
        root: "ص ل ح",
        lemma: "صَالِحَة",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "righteous deeds",
          ur: "نیک اعمال",
          hi: "नेक काम",
          bn: "সৎকর্ম",
          tr: "salih ameller",
          id: "amal saleh",
          ar: "الصالحات"
        },
        grammarRole: "Direct object, accusative feminine plural",
        grammarExplanations: {
          en: "As-salihat = the righteous (deeds). Active participle used as noun.",
          ur: "الصالحات = نیک (اعمال)۔ اسم فاعل بطور اسم استعمال۔"
        },
        advanced: {
          rootFamily: ["صَلَاح (righteousness)", "إِصْلَاح (reform)", "صَالِح (righteous)", "مَصْلَحَة (benefit)"],
          frequency: "62 times in Quran (this form)",
          morphology: "Active participle, feminine plural with definite article",
          balagha: "Feminine because implied word 'a'mal' is feminine",
          memoryHook: "Salihat = things that are good/righteous"
        }
      },
      {
        position: 6,
        arabic: "فَلَهُمْ",
        transliteration: "fa-lahum",
        root: "N/A",
        lemma: "لَ + هُم",
        posTag: "CONJ + PREP + PRON",
        posLabel: "CONJ + PREP + PRON",
        meaning: {
          en: "so for them",
          ur: "تو ان کے لیے",
          hi: "तो उनके लिए",
          bn: "তাদের জন্য",
          tr: "onlar için",
          id: "maka bagi mereka",
          ar: "فلهم"
        },
        grammarRole: "Result particle + preposition + pronoun",
        grammarExplanations: {
          en: "Fa introduces the result/reward for believers and doers of good.",
          ur: "فا نتیجے/انعام کو متعارف کراتا ہے مومنین اور نیک عمل کرنے والوں کے لیے۔"
        }
      },
      {
        position: 7,
        arabic: "أَجْرٌ",
        transliteration: "ajrun",
        root: "أ ج ر",
        lemma: "أَجْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "a reward",
          ur: "اجر",
          hi: "अज्र",
          bn: "পুরস্কার",
          tr: "mükâfat",
          id: "pahala",
          ar: "أجر"
        },
        grammarRole: "Subject (mubtada delayed), nominative",
        grammarExplanations: {
          en: "Ajr = reward, wage, recompense for good deeds.",
          ur: "اجر = انعام، اجرت، نیک اعمال کا بدلہ۔"
        },
        advanced: {
          rootFamily: ["أُجْرَة (wage)", "إِيجَار (rent)", "مَأْجُور (rewarded)"],
          frequency: "Root appears 119 times",
          morphology: "Indefinite nominative",
          balagha: "Indefinite for magnification - unquantifiable reward",
          memoryHook: "Ajr = wage/reward"
        }
      },
      {
        position: 8,
        arabic: "غَيْرُ",
        transliteration: "ghayru",
        root: "غ ي ر",
        lemma: "غَيْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "not/other than",
          ur: "بغیر",
          hi: "बिना",
          bn: "ছাড়া",
          tr: "olmayan",
          id: "yang tiada",
          ar: "غير"
        },
        grammarRole: "Noun indicating negation/exclusion (sifa)",
        grammarExplanations: {
          en: "Ghayr here means 'not' - reward that is NOT interrupted.",
          ur: "غیر یہاں 'نہیں' کے معنی میں - انعام جو منقطع نہیں۔"
        }
      },
      {
        position: 9,
        arabic: "مَمْنُونٍ",
        transliteration: "mamnoon",
        root: "م ن ن",
        lemma: "مَمْنُون",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "interrupted/cut off",
          ur: "منقطع/ختم ہونے والا",
          hi: "रुकने वाला",
          bn: "বিচ্ছিন্ন",
          tr: "kesintisiz",
          id: "putus-putusnya",
          ar: "ممنون"
        },
        grammarRole: "Passive participle (genitive as mudaf ilayhi to ghayr)",
        grammarExplanations: {
          en: "Mamnoon from manna = to cut off, weaken. So 'ghayr mamnoon' = never cut off, eternal.",
          ur: "ممنون منّ سے ہے = کاٹنا، کمزور کرنا۔ تو 'غیر ممنون' = کبھی منقطع نہیں، ابدی۔"
        },
        advanced: {
          rootFamily: ["مَنّ (favor/cutting)", "مِنَّة (favor/reminder of favor)"],
          frequency: "4 times in Quran",
          morphology: "Passive participle pattern مَفْعُول",
          balagha: "Eternal reward - no decrease, no end, no reminder",
          linguisticMiracle: "Contrasts with worldly favors which are mamnoon (with strings attached)",
          memoryHook: "Mamnoon = cut/indebted; ghayr mamnoon = not cut off = unending"
        }
      }
    ],
    dependencyStructure: "(إِلَّا)[except] → (الَّذِينَ)[relative] → (آمَنُوا)[verb] + (عَمِلُوا)[verb] → (الصَّالِحَاتِ)[object] | (فَ)[result] → (لَهُم)[prep phrase] ← (أَجْرٌ)[subject] ← (غَيْرُ)[adj] ← (مَمْنُونٍ)[genitive]",
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 3, to: 5, label: 'فعل + مفعول به' },
      { from: 3, to: 4, label: 'عطف' },
      { from: 4, to: 5, label: 'فعل + مفعول به' },
      { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "فَمَا يُكَذِّبُكَ بَعْدُ بِٱلدِّينِ",
    translation: {
      en: "So what yet causes you to deny the Recompense?",
      ur: "پھر کیا چیز تجھے جزا کو جھٹلانے پر آمادہ کرتی ہے",
      hi: "फिर क्या चीज़ तुझे जज़ा को झुठलाने पर उकसाती है",
      bn: "তাহলে কিসে তোমাকে প্রতিদানকে মিথ্যা বলতে প্ররোচিত করে",
      tr: "Artık sana dini ne yalanlatıyor",
      id: "Maka apakah yang menyebabkan kamu mendustakan hari pembalasan",
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        position: 1,
        arabic: "فَمَا",
        transliteration: "fa-maa",
        root: "N/A",
        lemma: "فَ + مَا",
        posTag: "CONJ + INT",
        posLabel: "CONJ + INT",
        meaning: {
          en: "So what",
          ur: "پھر کیا",
          hi: "फिर क्या",
          bn: "তাহলে কী",
          tr: "Artık ne",
          id: "Maka apakah",
          ar: "فما"
        },
        grammarRole: "Result conjunction + interrogative pronoun",
        grammarExplanations: {
          en: "Rhetorical question - given the evidence, what could cause denial?",
          ur: "بلاغی سوال - ثبوت دیکھنے کے بعد، انکار کی کیا وجہ ہو سکتی ہے؟"
        },
        advanced: {
          balagha: "Rhetorical question implies there is no valid reason",
          memoryHook: "Fa-ma = so what (then)?"
        }
      },
      {
        position: 2,
        arabic: "يُكَذِّبُكَ",
        transliteration: "yukadhdhibuka",
        root: "ك ذ ب",
        lemma: "كَذَّبَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "causes you to deny",
          ur: "تجھے جھٹلانے پر آمادہ کرتا ہے",
          hi: "तुझे झुठलाने पर उकसाता है",
          bn: "তোমাকে মিথ্যা বলতে প্ররোচিত করে",
          tr: "seni yalanlatıyor",
          id: "menyebabkan kamu mendustakan",
          ar: "يكذبك"
        },
        grammarRole: "Verb (imperfect), 3rd person + object (you)",
        grammarExplanations: {
          en: "Form II causative - what causes YOU to deny? Addressed to mankind.",
          ur: "باب تفعیل سببی - تمہیں کیا جھٹلانے پر مجبور کرتا ہے؟ انسانیت سے خطاب۔"
        },
        advanced: {
          rootFamily: ["كَذِب (lie)", "كَذَّاب (liar)", "تَكْذِيب (denial)", "كَاذِب (lying)"],
          frequency: "Root appears 282 times",
          verbForm: "Form II (فَعَّلَ) - intensive/causative",
          morphology: "Imperfect verb with object suffix -ka",
          balagha: "Form II suggests persistent, active denial",
          memoryHook: "Kadhdhaba = to consider something a lie"
        }
      },
      {
        position: 3,
        arabic: "بَعْدُ",
        transliteration: "ba'du",
        root: "ب ع د",
        lemma: "بَعْد",
        posTag: "ADV",
        posLabel: "ADV",
        meaning: {
          en: "after (this)/still",
          ur: "اس کے بعد بھی",
          hi: "इसके बाद भी",
          bn: "এরপরও",
          tr: "bundan sonra",
          id: "setelah ini",
          ar: "بعد"
        },
        grammarRole: "Adverb of time (zarf zaman)",
        grammarExplanations: {
          en: "Ba'du = after this evidence. Cut from idafa, hence dhamma ending.",
          ur: "بعد = اس ثبوت کے بعد۔ اضافت سے کٹا ہوا، اس لیے پیش کی علامت۔"
        },
        advanced: {
          rootFamily: ["بُعْد (distance)", "بَعِيد (far)", "أَبْعَد (further)"],
          frequency: "Appears 145 times",
          morphology: "Cut from idafa (maqtu' 'an al-idafa), ends in dhamma",
          balagha: "After all this evidence...",
          memoryHook: "Ba'du = after all this"
        }
      },
      {
        position: 4,
        arabic: "بِٱلدِّينِ",
        transliteration: "bid-deeni",
        root: "د ي ن",
        lemma: "دِين",
        posTag: "PREP + N",
        posLabel: "PREP + N",
        meaning: {
          en: "the Recompense/Religion/Judgment",
          ur: "جزا/دین/فیصلے",
          hi: "जज़ा/दीन",
          bn: "প্রতিদান/ধর্ম",
          tr: "din/ceza",
          id: "hari pembalasan",
          ar: "بالدين"
        },
        grammarRole: "Preposition + genitive noun",
        grammarExplanations: {
          en: "Ad-Deen here means the Day of Recompense/Judgment, not religion.",
          ur: "الدین یہاں یوم الجزاء/قیامت کے معنی میں ہے، مذہب نہیں۔"
        },
        advanced: {
          rootFamily: ["دَانَ (to judge)", "دَيْن (debt)", "دِين (religion/recompense)", "مَدِين (indebted)"],
          frequency: "92 times in Quran",
          morphology: "Definite genitive",
          balagha: "Same word for religion and recompense - religion leads to recompense",
          linguisticMiracle: "Deen = debt/judgment; life is a debt repaid on Judgment Day",
          memoryHook: "Yawm ad-Deen = Day of Recompense (Fatiha 1:4)"
        }
      }
    ],
    dependencyStructure: "(فَ)[result] → (مَا)[interrogative] → (يُكَذِّبُكَ)[verb+obj] → (بَعْدُ)[adverb] → (بِالدِّينِ)[prep phrase]"
  },

  8: {
    ayahNumber: 8,
    arabic: "أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَٰكِمِينَ",
    translation: {
      en: "Is not Allah the most just of judges?",
      ur: "کیا اللہ سب سے بہتر فیصلہ کرنے والا نہیں",
      hi: "क्या अल्लाह सबसे बेहतर फ़ैसला करने वाला नहीं",
      bn: "আল্লাহ কি সর্বশ্রেষ্ঠ বিচারক নন",
      tr: "Allah hâkimlerin en adaletlisi değil mi",
      id: "Bukankah Allah Hakim yang seadil-adilnya"
    },
    words: [
      {
        position: 1,
        arabic: "أَلَيْسَ",
        transliteration: "a-laysa",
        root: "ل ي س",
        lemma: "لَيْسَ",
        posTag: "INT + V",
        posLabel: "INT + V",
        meaning: {
          en: "Is not",
          ur: "کیا نہیں ہے",
          hi: "क्या नहीं है",
          bn: "কি নয়",
          tr: "Değil mi",
          id: "Bukankah",
          ar: "أليس"
        },
        grammarRole: "Interrogative hamza + negative verb",
        grammarExplanations: {
          en: "A-laysa is rhetorical negative question expecting affirmative answer = 'Indeed He is!'",
          ur: "الیس بلاغی منفی سوال ہے جس کا جواب اثبات میں مقصود ہے = 'بالکل وہ ہے!'"
        },
        advanced: {
          morphology: "Hamza al-istifham + laysa (verb of negation)",
          balagha: "Rhetorical question for emphasis - answer is obviously yes",
          memoryHook: "A-laysa = Is it not? (Yes it is!)"
        }
      },
      {
        position: 2,
        arabic: "ٱللَّهُ",
        transliteration: "Allahu",
        root: "أ ل ه",
        lemma: "الله",
        posTag: "PN",
        posLabel: "PN",
        meaning: {
          en: "Allah",
          ur: "اللہ",
          hi: "अल्लाह",
          bn: "আল্লাহ",
          tr: "Allah",
          id: "Allah",
          ar: "الله"
        },
        grammarRole: "Subject (ism laysa), nominative",
        grammarExplanations: {
          en: "The subject of laysa takes nominative case.",
          ur: "لیس کا اسم مرفوع ہوتا ہے۔"
        },
        advanced: {
          frequency: "2,699 times in Quran",
          morphology: "Proper noun, nominative",
          balagha: "Divine name emphasizes authority to judge"
        }
      },
      {
        position: 3,
        arabic: "بِأَحْكَمِ",
        transliteration: "bi-ahkami",
        root: "ح ك م",
        lemma: "أَحْكَم",
        posTag: "PREP + N",
        posLabel: "PREP + N",
        meaning: {
          en: "the most just/wise",
          ur: "سب سے بہتر",
          hi: "सबसे बेहतर",
          bn: "সর্বশ্রেষ্ঠ",
          tr: "en adaletli",
          id: "yang seadil-adilnya",
          ar: "بأحكم"
        },
        grammarRole: "Preposition (zaa'ida for emphasis) + elative noun",
        grammarExplanations: {
          en: "Bi is extra (zaa'ida) for emphasis. Ahkam is elative = most just/wise.",
          ur: "ب زائدہ ہے تاکید کے لیے۔ احکم صیغہ تفضیل ہے = سب سے زیادہ حکیم/عادل۔"
        },
        advanced: {
          rootFamily: ["حُكْم (judgment)", "حَكِيم (wise)", "حَاكِم (judge)", "حِكْمَة (wisdom)", "مُحْكَم (firm)"],
          frequency: "Root appears 210 times",
          morphology: "Elative pattern أَفْعَل",
          balagha: "Superlative among all who judge",
          linguisticMiracle: "Hakama includes both wisdom and judgment",
          memoryHook: "Ahkam = wisest + most just judge"
        }
      },
      {
        position: 4,
        arabic: "ٱلْحَٰكِمِينَ",
        transliteration: "al-haakimeen",
        root: "ح ك م",
        lemma: "حَاكِم",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "of judges",
          ur: "فیصلہ کرنے والوں میں",
          hi: "फ़ैसला करने वालों में",
          bn: "বিচারকদের মধ্যে",
          tr: "hâkimlerin",
          id: "Hakim",
          ar: "الحاكمين"
        },
        grammarRole: "Genitive plural (mudaf ilayhi to ahkam)",
        grammarExplanations: {
          en: "Al-Hakimeen = the judges. Allah is the best among all who judge.",
          ur: "الحاکمین = فیصلہ کرنے والے۔ اللہ سب فیصلہ کرنے والوں میں بہترین ہے۔"
        },
        advanced: {
          rootFamily: ["Same root as ahkam"],
          frequency: "6 times in Quran (this form)",
          morphology: "Active participle, masculine plural genitive",
          balagha: "Acknowledges other judges exist but Allah is supreme",
          tajweedTips: "Madd 'iwad at end of surah",
          memoryHook: "Hakimeen = judges; Allah is Ahkam al-Hakimeen"
        }
      }
    ],
    dependencyStructure: "(أَ)[interrogative] → (لَيْسَ)[verb] → (اللَّهُ)[subject] → (بِأَحْكَمِ)[predicate] ← (الحَاكِمِينَ)[genitive]",
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'فعل + فاعل' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  }
};

export default TREEBANK_DATA;
