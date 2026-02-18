/**
 * Surah Ash-Sharh (94) - Quranic Arabic Treebank
 * The Expansion / Relief
 * Total Ayahs: 8
 * Theme: Divine blessings upon the Prophet, comfort after hardship, and the famous "With hardship comes ease"
 */

export const TREEBANK_DATA = {
  surahId: 94,
  surahName: "Ash-Sharh",
  surahNameArabic: "الشرح",
  totalAyahs: 8,
  totalWords: 27,
  revelationType: "Makki",
  theme: "Allah's blessings upon the Prophet - expanded chest, removed burden, raised mention, and the promise of ease after hardship",

  // Surah-level translation
  translation: {
    en: "Did We not expand for you your chest? And We removed from you your burden which had weighed upon your back. And We raised high for you your reputation. For indeed, with hardship comes ease. Indeed, with hardship comes ease. So when you have finished, then stand up for worship. And to your Lord direct your longing.",
    ur: "کیا ہم نے تمہارا سینہ کھول نہیں دیا؟ اور ہم نے تم سے تمہارا بوجھ اتار دیا۔ جس نے تمہاری کمر توڑ رکھی تھی۔ اور ہم نے تمہارا ذکر بلند کر دیا۔ پس بے شک مشکل کے ساتھ آسانی ہے۔ بے شک مشکل کے ساتھ آسانی ہے۔ پس جب تم فارغ ہو تو محنت کرو۔ اور اپنے رب کی طرف رغبت کرو۔",
    hi: "क्या हमने तुम्हारा सीना नहीं खोल दिया? और हमने तुमसे तुम्हारा बोझ उतार दिया। जिसने तुम्हारी कमर तोड़ रखी थी। और हमने तुम्हारा ज़िक्र बुलंद कर दिया। तो बेशक तंगी के साथ आसानी है। बेशक तंगी के साथ आसानी है। तो जब तुम फ़ारिग़ हो जाओ तो मेहनत करो। और अपने रब की तरफ़ रग़बत करो।",
    bn: "আমি কি তোমার বক্ষ প্রশস্ত করে দিইনি? এবং আমি তোমার থেকে তোমার বোঝা নামিয়ে দিয়েছি। যা তোমার পিঠ ভেঙে দিচ্ছিল। এবং আমি তোমার সুনাম উচ্চ করেছি। নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে। নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে। সুতরাং যখন তুমি অবসর পাও, তখন পরিশ্রম করো। এবং তোমার প্রভুর দিকে মনোযোগ দাও।",
    tr: "Senin göğsünü açmadık mı? Ve yükünü indirdik senden. O senin belini bükmüştü. Ve senin şanını yükselttik. Demek ki zorlukla beraber kolaylık vardır. Gerçekten zorlukla beraber kolaylık vardır. O halde boş kaldığında çalış. Ve yalnız Rabbine yönel.",
    id: "Bukankah Kami telah melapangkan dadamu? Dan Kami telah menurunkan bebanmu darimu. Yang memberatkan punggungmu. Dan Kami tinggikan sebutan namamu. Maka sesungguhnya bersama kesulitan ada kemudahan. Sesungguhnya bersama kesulitan ada kemudahan. Maka apabila engkau telah selesai, maka tegakkanlah. Dan kepada Tuhanmulah hendaknya engkau berharap."
  },

  1: {
    ayahNumber: 1,
    arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
    translation: {
      en: "Did We not expand for you your chest?",
      ur: "کیا ہم نے تمہارا سینہ کھول نہیں دیا",
      hi: "क्या हमने तुम्हारा सीना नहीं खोल दिया",
      bn: "আমি কি তোমার বক্ষ প্রশস্ত করে দিইনি",
      tr: "Senin göğsünü açmadık mı",
      id: "Bukankah Kami telah melapangkan dadamu"
    },
    words: [
      {
        position: 1,
        arabic: "أَلَمْ",
        transliteration: "a-lam",
        root: "N/A",
        lemma: "أَ + لَم",
        posTag: "INT + NEG",
        posLabel: "INT + NEG",
        meaning: {
          en: "Did not / Have We not",
          ur: "کیا ہم نے نہیں",
          hi: "क्या हमने नहीं",
          bn: "আমি কি... নি",
          tr: "... madık mı",
          id: "Bukankah Kami",
          ar: "ألم"
        },
        grammarRole: "Interrogative hamza + negative particle (lam)",
        grammarExplanations: {
          en: "Rhetorical question expecting 'yes'. A-lam + jussive = 'Did We not...?' The answer is clearly 'Yes, You did!'",
          ur: "بلاغی سوال جس کا جواب 'ہاں' مقصود ہے۔ الم + مجزوم = 'کیا ہم نے نہیں...؟' جواب واضح ہے 'ہاں، آپ نے کیا!'"
        },
        advanced: {
          balagha: "Rhetorical question for gentle reminder of blessings",
          memoryHook: "A-lam = Did we not? (Answer: Yes you did!)"
        }
      },
      {
        position: 2,
        arabic: "نَشْرَحْ",
        transliteration: "nashrah",
        root: "ش ر ح",
        lemma: "شَرَحَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "We expand/open",
          ur: "ہم کھولیں",
          hi: "हम खोलें",
          bn: "আমি প্রশস্ত করি",
          tr: "açtık",
          id: "Kami melapangkan",
          ar: "نشرح"
        },
        grammarRole: "Verb (jussive after lam), 1st person plural",
        grammarExplanations: {
          en: "Sharaha means to open, expand, explain, make clear. The chest being 'opened' means peace, clarity, and guidance.",
          ur: "شرح کا مطلب کھولنا، وسیع کرنا، واضح کرنا۔ سینہ 'کھولنے' کا مطلب سکون، وضاحت، اور ہدایت۔"
        },
        advanced: {
          rootFamily: ["شَرْح (explanation)", "تَشْرِيح (anatomy/dissection)", "مَشْرُوح (explained)", "شَارِح (commentator)"],
          frequency: "4 times in Quran",
          verbForm: "Form I (فَعَلَ)",
          morphology: "Jussive after negative particle, 1st person plural",
          balagha: "Same verb used for those Allah guides (6:125, 39:22)",
          memoryHook: "Sharh = explanation; sharh sadr = heart opened to understanding"
        }
      },
      {
        position: 3,
        arabic: "لَكَ",
        transliteration: "laka",
        root: "N/A",
        lemma: "لَ + كَ",
        posTag: "PREP + PRON",
        posLabel: "PREP + PRON",
        meaning: {
          en: "for you",
          ur: "تمہارے لیے",
          hi: "तुम्हारे लिए",
          bn: "তোমার জন্য",
          tr: "senin için",
          id: "bagimu",
          ar: "لك"
        },
        grammarRole: "Preposition + 2nd person singular pronoun",
        grammarExplanations: {
          en: "Addressed directly to Prophet Muhammad ﷺ, but with lessons for all believers.",
          ur: "نبی ﷺ سے براہ راست خطاب، لیکن تمام مومنین کے لیے سبق۔"
        }
      },
      {
        position: 4,
        arabic: "صَدْرَكَ",
        transliteration: "sadraka",
        root: "ص د ر",
        lemma: "صَدْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "your chest/heart",
          ur: "تمہارا سینہ",
          hi: "तुम्हारा सीना",
          bn: "তোমার বক্ষ",
          tr: "göğsünü",
          id: "dadamu",
          ar: "صدرك"
        },
        grammarRole: "Direct object (accusative) + possessive pronoun",
        grammarExplanations: {
          en: "Sadr literally means chest but represents the seat of emotions, understanding, and spiritual capacity.",
          ur: "صدر لفظی طور پر سینہ ہے لیکن جذبات، فہم، اور روحانی صلاحیت کی جگہ کی نمائندگی کرتا ہے۔"
        },
        advanced: {
          rootFamily: ["صَدْر (chest)", "صَدَرَ (to come from)", "مَصْدَر (source)", "صُدُور (chests plural)"],
          frequency: "44 times in Quran",
          morphology: "Accusative singular + ka (2nd person possessive)",
          balagha: "Sadr = center of human personality, not just physical chest",
          linguisticMiracle: "Expanded chest = expanded capacity for truth, patience, wisdom",
          memoryHook: "Sadr = chest where emotions 'originate' from"
        }
      }
    ],
    dependencyStructure: "(أَ)[int] → (لَم)[neg] → (نَشْرَحْ)[verb] → (لَكَ)[beneficiary] → (صَدْرَكَ)[object]"
  },

  2: {
    ayahNumber: 2,
    arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ",
    translation: {
      en: "And We removed from you your burden",
      ur: "اور ہم نے تم سے تمہارا بوجھ اتار دیا",
      hi: "और हमने तुमसे तुम्हारा बोझ उतार दिया",
      bn: "এবং আমি তোমার থেকে তোমার বোঝা নামিয়ে দিয়েছি",
      tr: "Ve yükünü indirdik senden",
      id: "Dan Kami telah menurunkan bebanmu darimu"
    },
    words: [
      {
        position: 1,
        arabic: "وَوَضَعْنَا",
        transliteration: "wa-wada'naa",
        root: "و ض ع",
        lemma: "وَضَعَ",
        posTag: "CONJ + V",
        posLabel: "CONJ + V",
        meaning: {
          en: "And We put down/removed",
          ur: "اور ہم نے اتار دیا",
          hi: "और हमने उतार दिया",
          bn: "এবং আমি নামিয়ে দিয়েছি",
          tr: "Ve indirdik",
          id: "Dan Kami telah menurunkan",
          ar: "ووضعنا"
        },
        grammarRole: "Conjunction + verb (past), 1st person plural",
        grammarExplanations: {
          en: "Wada'a = to put down, remove, lay down. Allah removed the burden from Prophet's shoulders.",
          ur: "وضع = رکھنا، اتارنا۔ اللہ نے نبی کے کندھوں سے بوجھ اتار دیا۔"
        },
        advanced: {
          rootFamily: ["وَضْع (placing)", "مَوْضِع (place)", "مَوْضُوع (topic/subject)", "وَاضِع (one who places)"],
          frequency: "Root appears 25 times",
          verbForm: "Form I (فَعَلَ)",
          morphology: "Perfect verb, 1st person plural",
          balagha: "Same word for 'putting down' a heavy load = relief",
          memoryHook: "Wada'a = put down (burden) = relief"
        }
      },
      {
        position: 2,
        arabic: "عَنكَ",
        transliteration: "'anka",
        root: "N/A",
        lemma: "عَن + كَ",
        posTag: "PREP + PRON",
        posLabel: "PREP + PRON",
        meaning: {
          en: "from you",
          ur: "تم سے",
          hi: "तुमसे",
          bn: "তোমার থেকে",
          tr: "senden",
          id: "darimu",
          ar: "عنك"
        },
        grammarRole: "Preposition + 2nd person singular pronoun",
        grammarExplanations: {
          en: "'An indicates separation - the burden was separated/removed from you.",
          ur: "عن علیحدگی کی طرف اشارہ کرتا ہے - بوجھ تم سے الگ کر دیا گیا۔"
        }
      },
      {
        position: 3,
        arabic: "وِزْرَكَ",
        transliteration: "wizraka",
        root: "و ز ر",
        lemma: "وِزْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "your burden",
          ur: "تمہارا بوجھ",
          hi: "तुम्हारा बोझ",
          bn: "তোমার বোঝা",
          tr: "yükünü",
          id: "bebanmu",
          ar: "وزرك"
        },
        grammarRole: "Direct object (accusative) + possessive pronoun",
        grammarExplanations: {
          en: "Wizr = heavy burden, sin. Some say it refers to the burdens of prophethood, others to pre-prophetic concerns.",
          ur: "وزر = بھاری بوجھ، گناہ۔ کچھ کہتے ہیں یہ نبوت کے بوجھ کی طرف اشارہ ہے، دوسرے پہلے کی پریشانیوں کی طرف۔"
        },
        advanced: {
          rootFamily: ["وِزْر (burden/sin)", "وَزِير (minister - bears burdens)", "وَازِر (burden bearer)"],
          frequency: "26 times in Quran",
          morphology: "Accusative singular + ka",
          balagha: "Same root as wazir (minister) - one who carries heavy responsibilities",
          memoryHook: "Wizr = weight/burden; Wazir = one who bears the burden of state"
        }
      }
    ],
    dependencyStructure: "(وَ)[conj] → (وَضَعْنَا)[verb] → (عَنكَ)[source] → (وِزْرَكَ)[object]"
  },

  3: {
    ayahNumber: 3,
    arabic: "ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ",
    translation: {
      en: "Which had weighed upon your back",
      ur: "جس نے تمہاری کمر توڑ رکھی تھی",
      hi: "जिसने तुम्हारी कमर तोड़ रखी थी",
      bn: "যা তোমার পিঠ ভেঙে দিচ্ছিল",
      tr: "O senin belini bükmüştü",
      id: "Yang memberatkan punggungmu"
    },
    words: [
      {
        position: 1,
        arabic: "ٱلَّذِىٓ",
        transliteration: "alladhee",
        root: "N/A",
        lemma: "الَّذِي",
        posTag: "REL",
        posLabel: "REL",
        meaning: {
          en: "which",
          ur: "جس نے",
          hi: "जिसने",
          bn: "যা",
          tr: "O",
          id: "Yang",
          ar: "الذي"
        },
        grammarRole: "Relative pronoun (masculine singular)",
        grammarExplanations: {
          en: "Refers back to 'wizr' (burden), describing its severity.",
          ur: "وزر (بوجھ) کی طرف اشارہ کرتا ہے، اس کی شدت بیان کرتے ہوئے۔"
        }
      },
      {
        position: 2,
        arabic: "أَنقَضَ",
        transliteration: "anqada",
        root: "ن ق ض",
        lemma: "أَنْقَضَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "made creak/weighed heavily upon",
          ur: "توڑ رکھی تھی / بوجھل کر دیا",
          hi: "तोड़ रखी थी",
          bn: "ভেঙে দিচ্ছিল",
          tr: "bükmüştü",
          id: "memberatkan",
          ar: "أنقض"
        },
        grammarRole: "Verb (past), 3rd person masculine singular",
        grammarExplanations: {
          en: "Form IV of naqada. Anqada means to make something creak under weight - the back groaning under burden.",
          ur: "نقض کا باب افعال۔ انقض کا مطلب بوجھ سے چرچرانا - پیٹھ کا بوجھ تلے کراہنا۔"
        },
        advanced: {
          rootFamily: ["نَقْض (breaking)", "نَقَضَ (to break a covenant)", "انْقِضَاض (swooping down)"],
          frequency: "Once in Quran (this form)",
          verbForm: "Form IV (أَفْعَلَ) - causative",
          morphology: "Perfect verb, 3rd person masculine singular",
          balagha: "Onomatopoeia - the sound of creaking under heavy weight",
          linguisticMiracle: "Arabs say a saddle 'anqada' when it creaks under a heavy load",
          memoryHook: "Anqada = cracking sound under pressure"
        }
      },
      {
        position: 3,
        arabic: "ظَهْرَكَ",
        transliteration: "dhahraka",
        root: "ظ ه ر",
        lemma: "ظَهْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "your back",
          ur: "تمہاری کمر",
          hi: "तुम्हारी कमर",
          bn: "তোমার পিঠ",
          tr: "belini",
          id: "punggungmu",
          ar: "ظهرك"
        },
        grammarRole: "Direct object (accusative) + possessive pronoun",
        grammarExplanations: {
          en: "Dhahr = back, the part that carries heavy loads. Metaphor for the Prophet's struggles.",
          ur: "ظہر = پیٹھ، وہ حصہ جو بھاری بوجھ اٹھاتا ہے۔ نبی ﷺ کی مشکلات کا استعارہ۔"
        },
        advanced: {
          rootFamily: ["ظَهْر (back)", "ظَهَرَ (to appear)", "ظَاهِر (apparent)", "مُظَاهَرَة (demonstration)"],
          frequency: "Root appears 60 times",
          morphology: "Accusative singular + ka",
          balagha: "Back = where burdens are carried; breaking back = unbearable burden",
          memoryHook: "Dhahr = back (where things 'appear' from behind)"
        }
      }
    ],
    dependencyStructure: "(الَّذِي)[relative] → (أَنقَضَ)[verb] → (ظَهْرَكَ)[object]"
  },

  4: {
    ayahNumber: 4,
    arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
    translation: {
      en: "And We raised high for you your reputation",
      ur: "اور ہم نے تمہارا ذکر بلند کر دیا",
      hi: "और हमने तुम्हारा ज़िक्र बुलंद कर दिया",
      bn: "এবং আমি তোমার সুনাম উচ্চ করেছি",
      tr: "Ve senin şanını yükselttik",
      id: "Dan Kami tinggikan sebutan namamu"
    },
    words: [
      {
        position: 1,
        arabic: "وَرَفَعْنَا",
        transliteration: "wa-rafa'naa",
        root: "ر ف ع",
        lemma: "رَفَعَ",
        posTag: "CONJ + V",
        posLabel: "CONJ + V",
        meaning: {
          en: "And We raised",
          ur: "اور ہم نے بلند کیا",
          hi: "और हमने बुलंद किया",
          bn: "এবং আমি উঁচু করেছি",
          tr: "Ve yükselttik",
          id: "Dan Kami tinggikan",
          ar: "ورفعنا"
        },
        grammarRole: "Conjunction + verb (past), 1st person plural",
        grammarExplanations: {
          en: "Rafa'a = to raise, elevate. Allah elevated the Prophet's status and mention.",
          ur: "رفع = بلند کرنا۔ اللہ نے نبی کا مقام اور ذکر بلند کیا۔"
        },
        advanced: {
          rootFamily: ["رَفْع (raising)", "رَفِيع (high)", "مَرْفُوع (raised)", "رَافِع (one who raises)"],
          frequency: "Root appears 28 times",
          verbForm: "Form I (فَعَلَ)",
          morphology: "Perfect verb, 1st person plural",
          balagha: "Contrast: burden 'put down', mention 'raised up'",
          memoryHook: "Rafa' = raise (opposite of wada' = put down)"
        }
      },
      {
        position: 2,
        arabic: "لَكَ",
        transliteration: "laka",
        root: "N/A",
        lemma: "لَ + كَ",
        posTag: "PREP + PRON",
        posLabel: "PREP + PRON",
        meaning: {
          en: "for you",
          ur: "تمہارے لیے",
          hi: "तुम्हारे लिए",
          bn: "তোমার জন্য",
          tr: "senin için",
          id: "bagimu",
          ar: "لك"
        },
        grammarRole: "Preposition + pronoun",
        grammarExplanations: {
          en: "The raising was done 'for you' - a gift from Allah.",
          ur: "یہ بلندی 'تمہارے لیے' کی گئی - اللہ کی طرف سے تحفہ۔"
        }
      },
      {
        position: 3,
        arabic: "ذِكْرَكَ",
        transliteration: "dhikraka",
        root: "ذ ك ر",
        lemma: "ذِكْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "your mention/remembrance/reputation",
          ur: "تمہارا ذکر",
          hi: "तुम्हारा ज़िक्र",
          bn: "তোমার স্মরণ",
          tr: "şanını",
          id: "sebutanmu",
          ar: "ذكرك"
        },
        grammarRole: "Direct object (accusative) + possessive pronoun",
        grammarExplanations: {
          en: "Dhikr = mention, remembrance. Prophet's name is mentioned in adhan, iqamah, shahada, salawat, and alongside Allah's name.",
          ur: "ذکر = یاد، تذکرہ۔ نبی کا نام اذان، اقامت، شہادت، درود، اور اللہ کے نام کے ساتھ لیا جاتا ہے۔"
        },
        advanced: {
          rootFamily: ["ذِكْر (remembrance)", "ذَكَرَ (to remember)", "تَذْكِرَة (reminder)", "ذَاكِر (one who remembers)"],
          frequency: "Root appears 292 times",
          morphology: "Accusative singular + ka",
          balagha: "Prophet's name paired with Allah's: 'Ash-hadu anna Muhammadan Rasool-Allah'",
          linguisticMiracle: "5 times daily, billions say his name in adhan alone",
          memoryHook: "Dhikr = remembrance; Prophet's dhikr is global and eternal"
        }
      }
    ],
    dependencyStructure: "(وَ)[conj] → (رَفَعْنَا)[verb] → (لَكَ)[beneficiary] → (ذِكْرَكَ)[object]"
  },

  5: {
    ayahNumber: 5,
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    translation: {
      en: "For indeed, with hardship comes ease",
      ur: "پس بے شک مشکل کے ساتھ آسانی ہے",
      hi: "तो बेशक तंगी के साथ आसानी है",
      bn: "নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে",
      tr: "Demek ki zorlukla beraber kolaylık vardır",
      id: "Maka sesungguhnya bersama kesulitan ada kemudahan"
    },
    words: [
      {
        position: 1,
        arabic: "فَإِنَّ",
        transliteration: "fa-inna",
        root: "N/A",
        lemma: "فَ + إِنَّ",
        posTag: "CONJ + ACC",
        posLabel: "CONJ + ACC",
        meaning: {
          en: "For indeed",
          ur: "پس بے شک",
          hi: "तो बेशक",
          bn: "নিশ্চয়ই",
          tr: "Demek ki",
          id: "Maka sesungguhnya",
          ar: "فإن"
        },
        grammarRole: "Result conjunction + emphatic particle",
        grammarExplanations: {
          en: "Fa connects to previous blessings. Inna emphasizes the universal truth that follows.",
          ur: "فا پچھلی نعمتوں سے جوڑتا ہے۔ انّ آگے آنے والی عالمگیر سچائی پر زور دیتا ہے۔"
        },
        advanced: {
          balagha: "Double emphasis: fa (therefore) + inna (indeed)",
          memoryHook: "Fa-inna = therefore indeed (strong transition)"
        }
      },
      {
        position: 2,
        arabic: "مَعَ",
        transliteration: "ma'a",
        root: "N/A",
        lemma: "مَعَ",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "with/alongside",
          ur: "ساتھ",
          hi: "साथ",
          bn: "সাথে",
          tr: "beraber",
          id: "bersama",
          ar: "مع"
        },
        grammarRole: "Preposition of accompaniment",
        grammarExplanations: {
          en: "Ma'a = WITH, not 'after'. Ease exists ALONGSIDE hardship, not just after it.",
          ur: "مع = ساتھ، 'بعد' نہیں۔ آسانی مشکل کے ساتھ موجود ہے، صرف بعد میں نہیں۔"
        },
        advanced: {
          balagha: "Ma'a (with) not ba'da (after) - profound theological point",
          linguisticMiracle: "Even during hardship, ease is present - don't wait for after",
          memoryHook: "Ma'a = WITH (concurrent), ba'da = AFTER (sequential)"
        }
      },
      {
        position: 3,
        arabic: "ٱلْعُسْرِ",
        transliteration: "al-'usri",
        root: "ع س ر",
        lemma: "عُسْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the hardship/difficulty",
          ur: "مشکل",
          hi: "तंगी",
          bn: "কষ্ট",
          tr: "zorluk",
          id: "kesulitan",
          ar: "العسر"
        },
        grammarRole: "Genitive (after ma'a), definite",
        grammarExplanations: {
          en: "Al-'usr with definite article (al-) refers to THE specific hardship, singular.",
          ur: "العسر الف لام کے ساتھ خاص مشکل کی طرف اشارہ کرتا ہے، واحد۔"
        },
        advanced: {
          rootFamily: ["عُسْر (difficulty)", "عَسِير (difficult)", "تَعَسُّر (hardship)", "أَعْسَر (left-handed/difficult)"],
          frequency: "Root appears 12 times",
          morphology: "Definite genitive singular",
          balagha: "DEFINITE article = one specific hardship",
          linguisticMiracle: "Same 'al-'usr' mentioned twice = same one hardship",
          memoryHook: "Al-'usr = THE hardship (one definite difficulty)"
        }
      },
      {
        position: 4,
        arabic: "يُسْرًا",
        transliteration: "yusran",
        root: "ي س ر",
        lemma: "يُسْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "ease/relief",
          ur: "آسانی",
          hi: "आसानी",
          bn: "স্বস্তি",
          tr: "kolaylık",
          id: "kemudahan",
          ar: "يسرا"
        },
        grammarRole: "Subject (mubtada mu'akhkhar), nominative (but looks accusative due to tanween)",
        grammarExplanations: {
          en: "Yusran is INDEFINITE (no al-). Each time it's mentioned, it could be a different ease.",
          ur: "یسراً بغیر الف لام کے ہے۔ ہر بار ذکر ہونے پر مختلف آسانی ہو سکتی ہے۔"
        },
        advanced: {
          rootFamily: ["يُسْر (ease)", "يَسِير (easy)", "تَيْسِير (facilitation)", "مُيَسَّر (facilitated)"],
          frequency: "Root appears 39 times",
          morphology: "Indefinite accusative (adverbial)",
          balagha: "INDEFINITE = possibly multiple eases",
          linguisticMiracle: "One hardship (definite) + two eases (indefinite x2) = Prophet said 'one hardship cannot overcome two eases'",
          memoryHook: "Yusran (indefinite) x 2 vs al-'usr (definite) x 1 = ease wins 2:1"
        }
      }
    ],
    dependencyStructure: "(فَ)[result] → (إِنَّ)[emphasis] → (مَعَ)[prep] → (العُسْرِ)[genitive] ← (يُسْرًا)[subject]"
  },

  6: {
    ayahNumber: 6,
    arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    translation: {
      en: "Indeed, with hardship comes ease",
      ur: "بے شک مشکل کے ساتھ آسانی ہے",
      hi: "बेशक तंगी के साथ आसानी है",
      bn: "নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে",
      tr: "Gerçekten zorlukla beraber kolaylık vardır",
      id: "Sesungguhnya bersama kesulitan ada kemudahan"
    },
    words: [
      {
        position: 1,
        arabic: "إِنَّ",
        transliteration: "inna",
        root: "N/A",
        lemma: "إِنَّ",
        posTag: "ACC",
        posLabel: "ACC",
        meaning: {
          en: "Indeed",
          ur: "بے شک",
          hi: "बेशक",
          bn: "নিশ্চয়ই",
          tr: "Gerçekten",
          id: "Sesungguhnya",
          ar: "إن"
        },
        grammarRole: "Emphatic particle",
        grammarExplanations: {
          en: "Repetition with inna (not fa-inna) = fresh emphasis, not just continuation.",
          ur: "انّ کے ساتھ تکرار (فا نہیں) = نئی تاکید، صرف تسلسل نہیں۔"
        },
        advanced: {
          balagha: "Second statement is independent confirmation, not mere repetition",
          memoryHook: "Said twice = absolutely certain"
        }
      },
      {
        position: 2,
        arabic: "مَعَ",
        transliteration: "ma'a",
        root: "N/A",
        lemma: "مَعَ",
        posTag: "PREP",
        posLabel: "PREP",
        meaning: {
          en: "with",
          ur: "ساتھ",
          hi: "साथ",
          bn: "সাথে",
          tr: "beraber",
          id: "bersama",
          ar: "مع"
        },
        grammarRole: "Preposition of accompaniment",
        grammarExplanations: {
          en: "Same preposition ma'a emphasizing simultaneity.",
          ur: "وہی حرف جار مع جو ہم وقتی ہونے پر زور دیتا ہے۔"
        }
      },
      {
        position: 3,
        arabic: "ٱلْعُسْرِ",
        transliteration: "al-'usri",
        root: "ع س ر",
        lemma: "عُسْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "the hardship",
          ur: "مشکل",
          hi: "तंगी",
          bn: "কষ্ট",
          tr: "zorluk",
          id: "kesulitan",
          ar: "العسر"
        },
        grammarRole: "Genitive, definite",
        grammarExplanations: {
          en: "Same definite article 'al-' = same hardship referred to. Arabic grammar: repeated definite = same entity.",
          ur: "وہی الف لام = وہی مشکل۔ عربی قاعدہ: معرفہ کی تکرار = وہی چیز۔"
        },
        advanced: {
          balagha: "Al-'usr repeated = ONE hardship mentioned twice",
          linguisticMiracle: "Arabic rule: repeated ma'rifa (definite) = same thing",
          memoryHook: "Same al-'usr both times = one difficulty only"
        }
      },
      {
        position: 4,
        arabic: "يُسْرًا",
        transliteration: "yusran",
        root: "ي س ر",
        lemma: "يُسْر",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "ease",
          ur: "آسانی",
          hi: "आसानी",
          bn: "স্বস্তি",
          tr: "kolaylık",
          id: "kemudahan",
          ar: "يسرا"
        },
        grammarRole: "Subject, indefinite",
        grammarExplanations: {
          en: "Second indefinite 'yusran' = possibly second ease. Arabic rule: repeated nakira (indefinite) = different entities.",
          ur: "دوسرا نکرہ 'یسراً' = ممکنہ طور پر دوسری آسانی۔ عربی قاعدہ: نکرہ کی تکرار = مختلف چیزیں۔"
        },
        advanced: {
          balagha: "Yusran (indefinite) x 2 = TWO different eases",
          linguisticMiracle: "Repeated nakira (indefinite) = different things = 2 eases vs 1 hardship",
          memoryHook: "Two yusrs (undefined) overcome one 'usr (defined)"
        }
      }
    ],
    dependencyStructure: "(إِنَّ)[emphasis] → (مَعَ)[prep] → (العُسْرِ)[genitive] ← (يُسْرًا)[subject]"
  },

  7: {
    ayahNumber: 7,
    arabic: "فَإِذَا فَرَغْتَ فَٱنصَبْ",
    translation: {
      en: "So when you have finished, then stand up for worship",
      ur: "پس جب تم فارغ ہو تو محنت کرو",
      hi: "तो जब तुम फ़ारिग़ हो जाओ तो मेहनत करो",
      bn: "সুতরাং যখন তুমি অবসর পাও, তখন পরিশ্রম করো",
      tr: "O halde boş kaldığında çalış",
      id: "Maka apabila engkau telah selesai, maka tegakkanlah"
    },
    words: [
      {
        position: 1,
        arabic: "فَإِذَا",
        transliteration: "fa-idhaa",
        root: "N/A",
        lemma: "فَ + إِذَا",
        posTag: "CONJ + COND",
        posLabel: "CONJ + COND",
        meaning: {
          en: "So when",
          ur: "پس جب",
          hi: "तो जब",
          bn: "সুতরাং যখন",
          tr: "O halde",
          id: "Maka apabila",
          ar: "فإذا"
        },
        grammarRole: "Result conjunction + conditional particle",
        grammarExplanations: {
          en: "Fa connects to the promise of ease. Idhaa introduces the condition.",
          ur: "فا آسانی کے وعدے سے جوڑتا ہے۔ اذا شرط متعارف کراتا ہے۔"
        },
        advanced: {
          balagha: "Practical application after theoretical promise",
          memoryHook: "Fa-idhaa = so when (conditional instruction)"
        }
      },
      {
        position: 2,
        arabic: "فَرَغْتَ",
        transliteration: "faraghta",
        root: "ف ر غ",
        lemma: "فَرَغَ",
        posTag: "V",
        posLabel: "V",
        meaning: {
          en: "you have finished",
          ur: "تم فارغ ہو",
          hi: "तुम फ़ारिग़ हो जाओ",
          bn: "তুমি অবসর পাও",
          tr: "boş kaldığında",
          id: "engkau telah selesai",
          ar: "فرغت"
        },
        grammarRole: "Verb (past, but conditional future meaning), 2nd person singular",
        grammarExplanations: {
          en: "Faragha = to finish, become empty/free. When you finish one duty...",
          ur: "فرغ = ختم کرنا، خالی/فارغ ہونا۔ جب ایک ذمہ داری ختم کرو..."
        },
        advanced: {
          rootFamily: ["فَرَاغ (emptiness)", "فَارِغ (free/empty)", "تَفْرِيغ (emptying)"],
          frequency: "Root appears 4 times",
          verbForm: "Form I (فَعَلَ)",
          morphology: "Perfect verb functioning as conditional (protasis)",
          balagha: "Finish one task, start another - no idle time",
          memoryHook: "Faragha = became empty/free (ready for next task)"
        }
      },
      {
        position: 3,
        arabic: "فَٱنصَبْ",
        transliteration: "fa-nsab",
        root: "ن ص ب",
        lemma: "نَصَبَ",
        posTag: "CONJ + V",
        posLabel: "CONJ + V",
        meaning: {
          en: "then stand up / work hard / devote yourself",
          ur: "تو محنت کرو / کھڑے ہو جاؤ",
          hi: "तो मेहनत करो",
          bn: "তখন পরিশ্রম করো",
          tr: "çalış",
          id: "maka tegakkanlah",
          ar: "فانصب"
        },
        grammarRole: "Result conjunction + imperative verb",
        grammarExplanations: {
          en: "Nasaba = to erect, set up, work hard, devote. Command to devote yourself to worship after worldly duties.",
          ur: "نصب = کھڑا کرنا، قائم کرنا، محنت کرنا۔ دنیاوی ذمہ داریوں کے بعد عبادت میں لگ جانے کا حکم۔"
        },
        advanced: {
          rootFamily: ["نَصْب (erecting)", "نَصَب (fatigue)", "مَنْصِب (position)", "نَاصِب (erecting/weary)"],
          frequency: "Root appears 12 times",
          verbForm: "Form I (فَعَلَ) - imperative",
          morphology: "Imperative, 2nd person singular",
          balagha: "Nasab also means fatigue - worship until tired",
          linguisticMiracle: "Some read: finish dawah, do salah. Others: finish obligations, do voluntary worship.",
          memoryHook: "Nasab = stand up / work till tired (in worship)"
        }
      }
    ],
    dependencyStructure: "(فَ)[result] → (إِذَا)[conditional] → (فَرَغْتَ)[protasis] → (فَ)[result] → (انصَبْ)[apodosis/command]"
  },

  8: {
    ayahNumber: 8,
    arabic: "وَإِلَىٰ رَبِّكَ فَٱرْغَب",
    translation: {
      en: "And to your Lord direct your longing",
      ur: "اور اپنے رب کی طرف رغبت کرو",
      hi: "और अपने रब की तरफ़ रग़बत करो",
      bn: "এবং তোমার প্রভুর দিকে মনোযোগ দাও",
      tr: "Ve yalnız Rabbine yönel",
      id: "Dan kepada Tuhanmulah hendaknya engkau berharap"
    },
    words: [
      {
        position: 1,
        arabic: "وَإِلَىٰ",
        transliteration: "wa-ilaa",
        root: "N/A",
        lemma: "وَ + إِلَى",
        posTag: "CONJ + PREP",
        posLabel: "CONJ + PREP",
        meaning: {
          en: "And to",
          ur: "اور کی طرف",
          hi: "और की तरफ़",
          bn: "এবং দিকে",
          tr: "Ve ... e",
          id: "Dan kepada",
          ar: "وإلى"
        },
        grammarRole: "Conjunction + preposition of direction",
        grammarExplanations: {
          en: "Ilaa indicates direction of desire/longing - toward your Lord.",
          ur: "الی خواہش/رغبت کی سمت کی طرف اشارہ کرتا ہے - اپنے رب کی طرف۔"
        },
        advanced: {
          balagha: "Preposition fronted for emphasis - TO YOUR LORD (not anyone else)",
          memoryHook: "Wa-ilaa = and toward"
        }
      },
      {
        position: 2,
        arabic: "رَبِّكَ",
        transliteration: "Rabbika",
        root: "ر ب ب",
        lemma: "رَبّ",
        posTag: "N",
        posLabel: "N",
        meaning: {
          en: "your Lord",
          ur: "تمہارا رب",
          hi: "तुम्हारा रब",
          bn: "তোমার প্রভু",
          tr: "Rabbine",
          id: "Tuhanmu",
          ar: "ربك"
        },
        grammarRole: "Genitive (after ilaa) + possessive pronoun",
        grammarExplanations: {
          en: "Rabb (Lord/Sustainer) with possessive 'ka' = personal relationship.",
          ur: "رب (پالنے والا) ضمیر ملکیت 'ك' کے ساتھ = ذاتی تعلق۔"
        },
        advanced: {
          rootFamily: ["رَبّ (Lord)", "رَبَّى (to raise)", "تَرْبِيَة (upbringing)", "رُبُوبِيَّة (lordship)"],
          frequency: "980 times in Quran",
          morphology: "Genitive singular + ka",
          balagha: "Rabb emphasizes nurturing relationship",
          memoryHook: "Rabbika = YOUR Lord who raised you"
        }
      },
      {
        position: 3,
        arabic: "فَٱرْغَب",
        transliteration: "fa-rghab",
        root: "ر غ ب",
        lemma: "رَغِبَ",
        posTag: "CONJ + V",
        posLabel: "CONJ + V",
        meaning: {
          en: "then direct your longing/hope",
          ur: "تو رغبت کرو",
          hi: "तो रग़बत करो",
          bn: "মনোযোগ দাও",
          tr: "yönel",
          id: "berharap",
          ar: "فارغب"
        },
        grammarRole: "Result conjunction + imperative verb",
        grammarExplanations: {
          en: "Raghiba ilaa = to desire, long for. Direct all your hopes and desires to Allah alone.",
          ur: "رغب الی = چاہنا، آرزو کرنا۔ اپنی ساری امیدیں اور خواہشات صرف اللہ کی طرف رکھو۔"
        },
        advanced: {
          rootFamily: ["رَغْبَة (desire)", "رَاغِب (desirous)", "تَرْغِيب (encouragement)", "مَرْغُوب (desired)"],
          frequency: "Root appears 8 times",
          verbForm: "Form I (فَعِلَ) - imperative",
          morphology: "Imperative, 2nd person singular",
          balagha: "Irghab 'an = turn away from; irghab ilaa = turn toward. Here ilaa = toward Allah",
          linguisticMiracle: "Final word rhymes with 'ansab' - both commanding purposeful action",
          tajweedTips: "Madd 'iwad at surah end",
          memoryHook: "Raghiba = to desire; irghab ilaa Rabbika = desire your Lord"
        }
      }
    ],
    dependencyStructure: "(وَ)[conj] → (إِلَى)[prep] → (رَبِّكَ)[genitive] | (فَ)[result] → (ارْغَب)[command]"
  }
};

export default TREEBANK_DATA;
